#!/usr/bin/env python3
"""Scrape excelhero.de Funktionen + Formeln into src/data/original-posts.json."""
from __future__ import annotations

import json
import re
import time
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

from bs4 import BeautifulSoup, Comment, NavigableString

UA = {"User-Agent": "Mozilla/5.0 (compatible; ExcelheroRebuild/1.0)"}
OUT = Path("/workspace/src/data/original-posts.json")
URL_FILES = [
    Path("/tmp/fn-urls.txt"),
    Path("/tmp/fo-urls.txt"),
    Path("/tmp/guide-urls.txt"),
]

ALLOWED = {
    "p",
    "h2",
    "h3",
    "h4",
    "ul",
    "ol",
    "li",
    "table",
    "thead",
    "tbody",
    "tr",
    "th",
    "td",
    "img",
    "iframe",
    "a",
    "strong",
    "em",
    "b",
    "i",
    "br",
    "pre",
    "code",
    "figure",
    "figcaption",
    "blockquote",
    "hr",
}
IFRAME_OK = re.compile(r"(onedrive\.live\.com|1drv\.ms|youtube\.com/embed|player\.vimeo\.com)")
IMG_SKIP = re.compile(
    r"(Bundle|agentenkollege|banner-web|banner-mobile|Kursangebot|excelhero-white|fav\.png)",
    re.I,
)
JS_HREF = re.compile(r"^(javascript:|void\(0\))", re.I)


def fetch(url: str) -> bytes:
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read()


def abs_url(src: str) -> str:
    if not src:
        return src
    if src.startswith("//"):
        return "https:" + src
    if src.startswith("/"):
        return "https://excelhero.de" + src
    return src


def local_href(href: str) -> str:
    if not href:
        return href
    href = href.strip()
    href = re.sub(r"^https?://excelhero\.de", "", href)
    href = href.rstrip("/") or "/"
    if href.startswith("http") or href.startswith("mailto:") or href.startswith("#"):
        return href
    if not href.startswith("/"):
        href = "/" + href
    return href


def copy_clean(node, soup_out):
    if isinstance(node, Comment):
        return None
    if isinstance(node, NavigableString):
        text = str(node)
        if not text.strip() and text != "\n":
            return None
        return soup_out.new_string(text)
    name = getattr(node, "name", None)
    if not name:
        return None
    if name in {"script", "style", "noscript", "svg", "form"}:
        return None
    if name == "iframe":
        src = abs_url(node.get("src") or "")
        if not IFRAME_OK.search(src):
            return None
        tag = soup_out.new_tag("iframe")
        tag["src"] = src
        tag["title"] = node.get("title") or "Excel-Arbeitsmappe"
        tag["loading"] = "lazy"
        tag["allowfullscreen"] = "true"
        tag["class"] = "workbook-embed"
        if node.get("width"):
            tag["width"] = node.get("width")
        if node.get("height"):
            tag["height"] = node.get("height")
        return tag
    if name == "img":
        src = abs_url(node.get("src") or node.get("data-src") or "")
        if not src or IMG_SKIP.search(src):
            return None
        tag = soup_out.new_tag("img")
        tag["src"] = src
        tag["alt"] = node.get("alt") or ""
        tag["loading"] = "lazy"
        return tag
    if name == "a":
        href = node.get("href") or ""
        text = node.get_text(" ", strip=True)
        if JS_HREF.search(href) or text.lower() == "load more":
            return None
        href = local_href(href)
        tag = soup_out.new_tag("a")
        if href:
            tag["href"] = href
        for child in node.children:
            copied = copy_clean(child, soup_out)
            if copied is not None:
                tag.append(copied)
        return tag
    if name not in ALLOWED:
        frag = soup_out.new_tag("span")
        for child in node.children:
            copied = copy_clean(child, soup_out)
            if copied is not None:
                frag.append(copied)
        return frag
    tag = soup_out.new_tag(name)
    if name in {"th", "td"}:
        for k in ("colspan", "rowspan"):
            if node.get(k):
                tag[k] = node.get(k)
    for child in node.children:
        copied = copy_clean(child, soup_out)
        if copied is not None:
            tag.append(copied)
    return tag


def sanitize(root) -> str:
    soup_out = BeautifulSoup("", "lxml")
    wrapper = soup_out.new_tag("div")
    for child in list(root.children):
        copied = copy_clean(child, soup_out)
        if copied is not None:
            wrapper.append(copied)
    # unwrap helper spans
    for span in list(wrapper.find_all("span")):
        span.unwrap()
    html = "".join(str(c) for c in wrapper.children)
    html = re.sub(r"<(p|h2|h3|h4|li)>\s*</\1>", "", html)
    html = re.sub(r"\n{3,}", "\n\n", html)
    return html.strip()


def parse(url: str) -> dict | None:
    raw = fetch(url)
    soup = BeautifulSoup(raw, "lxml")
    root = soup.select_one(".tve_flt.tcb-style-wrap") or soup.select_one(".entry-content")
    if not root:
        return None
    for junk in root.select(".tve-leads-post-footer, .sharedaddy"):
        junk.decompose()
    html = sanitize(root)
    h1 = soup.find("h1")
    title = h1.get_text(" ", strip=True) if h1 else ""
    if not title:
        m = re.match(r"^([^<]{2,90})<(h2|p|img|iframe)", html)
        if m:
            title = re.sub(r"\s+", " ", m.group(1)).strip(" \n-|")
    if title:
        html = re.sub(r"^" + re.escape(title) + r"\s*", "", html, count=1, flags=re.I)
        html = re.sub(r"^[^<]{1,80}(?=<h2>)", "", html).lstrip()
    md = soup.find("meta", attrs={"name": "description"})
    excerpt = (md.get("content") if md else "") or ""
    og = soup.find("meta", attrs={"property": "og:image"})
    image = abs_url(og.get("content") if og else "") if og else ""
    if image and IMG_SKIP.search(image):
        image = ""
    # first content image as fallback
    if not image:
        m = re.search(r'<img[^>]+src="([^"]+)"', html)
        if m:
            image = m.group(1)
    path = url.replace("https://excelhero.de", "").rstrip("/")
    slug = path.rsplit("/", 1)[-1]
    embeds = re.findall(r'<iframe[^>]+src="([^"]+)"', html)
    return {
        "slug": slug,
        "path": path,
        "title": title,
        "excerpt": excerpt.strip(),
        "image": image,
        "html": html,
        "embeds": embeds,
    }


def main() -> None:
    urls = []
    for p in URL_FILES:
        if p.exists():
            urls.extend([u.strip() for u in p.read_text().splitlines() if u.strip()])
    urls = sorted(
        set(u for u in urls if not u.rstrip("/").endswith("/blog") and "/blog/" not in u + "/")
    )
    print(f"scraping {len(urls)} urls")
    out: dict[str, dict] = {}
    if OUT.exists():
        out = json.loads(OUT.read_text())
        print(f"resume {len(out)} existing")
    todo = [u for u in urls if u.replace("https://excelhero.de", "").rstrip("/").rsplit("/", 1)[-1] not in out]
    print(f"todo {len(todo)}")
    ok = fail = 0
    with ThreadPoolExecutor(max_workers=6) as ex:
        futs = {ex.submit(parse, u): u for u in todo}
        for i, fut in enumerate(as_completed(futs), 1):
            url = futs[fut]
            try:
                rec = fut.result()
                if rec and rec["html"]:
                    out[rec["slug"]] = rec
                    ok += 1
                else:
                    fail += 1
                    print("empty", url)
            except Exception as e:
                fail += 1
                print("fail", url, type(e).__name__, e)
            if i % 25 == 0:
                OUT.parent.mkdir(parents=True, exist_ok=True)
                OUT.write_text(json.dumps(out, ensure_ascii=False))
                print(f"  {i}/{len(todo)} ok={ok} fail={fail} saved={len(out)}")
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(out, ensure_ascii=False))
    print("done", len(out), "ok", ok, "fail", fail, "bytes", OUT.stat().st_size)


if __name__ == "__main__":
    main()
