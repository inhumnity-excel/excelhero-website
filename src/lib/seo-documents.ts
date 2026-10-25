import { ARTICLES, articlePath, type Article } from "@/lib/articles";
import { HUBS } from "@/lib/hubs";
import { SITE } from "@/lib/content";
import { siteOrigin } from "@/lib/site-origin";
import postDates from "@/data/post-dates.json";

const DATES = postDates as Record<string, string>;

/** Indexable pages that are not guides and not topic hubs. */
const STATIC_PATHS = [
  "/",
  "/about",
  "/chatgpt-und-excel",
  "/datenschutzerklaerung",
  "/excel-auftragsprogrammierung",
  "/excel-formeln",
  "/excel-funktionen",
  "/excel-funktionen-deutsch-englisch",
  "/excel-funktionen-power-query-uebersetzungstabelle",
  "/excel-online-kurse",
  "/excel-schulung-online",
  "/excel-tastenkombinationen",
  "/guides",
  "/impressum",
  "/kontakt",
  "/partnerprogramm",
  "/power-bi-online-kurs",
  "/rueckruf",
  "/vba-online-kurs",
];

function xmlEscape(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function plainText(value: string) {
  return value
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8211;/g, "–")
    .replace(/&#8220;|&#8222;|&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

export function articlePublished(article: Article): string | undefined {
  return DATES[article.slug] ?? DATES[article.path?.split("/").filter(Boolean).pop() ?? ""];
}

export type PublicUrl = { path: string; lastmod?: string };

export function publicUrls(): PublicUrl[] {
  const urls = new Map<string, string | undefined>();
  for (const path of STATIC_PATHS) urls.set(path, undefined);
  for (const hub of HUBS) urls.set(hub.path, undefined);
  for (const article of ARTICLES) {
    const path = articlePath(article);
    const existing = urls.get(path);
    const lastmod = articlePublished(article);
    urls.set(path, existing ?? lastmod);
  }
  return [...urls.entries()]
    .map(([path, lastmod]) => ({ path, lastmod }))
    .sort((a, b) => a.path.localeCompare(b.path, "de"));
}

export function sitemapXml(): string {
  const origin = siteOrigin();
  const body = publicUrls()
    .map((url) => {
      const loc = `${origin}${url.path === "/" ? "/" : url.path}`;
      const lastmod = url.lastmod
        ? `\n    <lastmod>${xmlEscape(url.lastmod.slice(0, 10))}</lastmod>`
        : "";
      return `  <url>\n    <loc>${xmlEscape(loc)}</loc>${lastmod}\n  </url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

export type FeedItem = {
  title: string;
  path: string;
  description: string;
  published?: string;
};

export function feedItems(): FeedItem[] {
  return ARTICLES.map((article) => ({
    title: article.title,
    path: articlePath(article),
    description: plainText(article.excerpt),
    published: articlePublished(article),
  })).sort((a, b) => {
    const ad = a.published ?? "";
    const bd = b.published ?? "";
    if (ad !== bd) return bd.localeCompare(ad);
    return a.title.localeCompare(b.title, "de");
  });
}

function rfc822(iso: string) {
  return new Date(iso).toUTCString();
}

export function feedXml(): string {
  const origin = siteOrigin();
  const items = feedItems()
    .map((item) => {
      const link = `${origin}${item.path}`;
      const pub = item.published ? `\n      <pubDate>${xmlEscape(rfc822(item.published))}</pubDate>` : "";
      return `    <item>
      <title>${xmlEscape(item.title)}</title>
      <link>${xmlEscape(link)}</link>
      <guid isPermaLink="true">${xmlEscape(link)}</guid>${pub}
      <description>${xmlEscape(item.description)}</description>
    </item>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${xmlEscape(SITE.name)}</title>
    <link>${xmlEscape(origin)}</link>
    <description>${xmlEscape(SITE.tagline)}</description>
    <language>de-de</language>
${items}
  </channel>
</rss>
`;
}

export function robotsTxt(): string {
  const origin = siteOrigin();
  return `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`;
}
