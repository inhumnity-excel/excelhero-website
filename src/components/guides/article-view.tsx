import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type Article, type ArticleFile, type ArticleImage, relatedArticles } from "@/lib/articles";
import { COURSE } from "@/lib/content";

function Figures({ images }: { images?: ArticleImage[] }) {
  if (!images?.length) return null;
  return (
    <div className="my-5 space-y-4">
      {images.map((img) => (
        <figure key={img.src} className="overflow-hidden rounded-xl bg-card shadow-card">
          <img src={img.src} alt={img.alt} className="w-full bg-paper-2 object-contain" />
          {img.caption ? (
            <figcaption className="border-t border-line px-4 py-2.5 text-sm text-muted">
              {img.caption}
            </figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}

function FileLinks({ files }: { files?: ArticleFile[] }) {
  if (!files?.length) return null;
  return (
    <ul className="my-4 flex flex-wrap gap-2">
      {files.map((f) => (
        <li key={f.href}>
          <a
            href={f.href}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-excel px-3.5 py-2 text-sm font-semibold text-navy-deep hover:bg-excel-hover"
          >
            <Download className="size-4" />
            {f.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function ArticleView({ article }: { article: Article }) {
  const others = relatedArticles(article);
  const hubTo = article.hubPath ?? "/guides";

  return (
    <main>
      <article className="bg-paper">
        <header className="bg-navy px-5 py-12 text-paper md:py-16">
          <div className="mx-auto max-w-3xl">
            <Link
              to={hubTo}
              className="inline-flex items-center gap-1 text-sm text-paper/60 hover:text-excel"
            >
              <ArrowLeft className="size-4" /> {article.category}
            </Link>
            <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-excel">
              {article.category} · {article.readMinutes} Minuten
            </p>
            <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-5xl">
              {article.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-paper/70">{article.excerpt}</p>
            <FileLinks files={article.files} />
          </div>
        </header>
        <img
          src={article.image}
          alt=""
          className="mx-auto mt-0 aspect-[16/7] w-full max-w-5xl object-cover md:mt-8 md:rounded-xl"
        />
        <div className="mx-auto max-w-3xl px-5 py-12">
          {article.html ? (
            <div
              className="article-html"
              dangerouslySetInnerHTML={{ __html: article.html }}
            />
          ) : (
            article.body.map((block) => (
            <section key={block.heading ?? block.paragraphs[0]} className="mb-8">
              {block.heading ? (
                <h2 className="mb-3 font-display text-2xl font-semibold text-ink">
                  {block.heading}
                </h2>
              ) : null}
              {block.paragraphs.map((p) =>
                ["Die Formel", "Syntax", "Beispiel"].includes(block.heading ?? "") ? (
                  <pre
                    key={p.slice(0, 48)}
                    className="mb-3 overflow-x-auto rounded-lg bg-navy px-4 py-3 font-mono text-sm leading-relaxed text-excel"
                  >
                    <code>{p}</code>
                  </pre>
                ) : (
                  <p key={p.slice(0, 48)} className="mb-3 text-base leading-relaxed text-ink/85">
                    {p}
                  </p>
                ),
              )}
              {block.steps?.length ? (
                <ol className="mb-3 list-decimal space-y-2 pl-5 text-base leading-relaxed text-ink/85">
                  {block.steps.map((step) => (
                    <li key={step.slice(0, 40)}>{step}</li>
                  ))}
                </ol>
              ) : null}
              <Figures images={block.images} />
              <FileLinks files={block.files} />
              {block.links?.length ? (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {block.links.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="inline-flex items-center gap-1 rounded-full bg-excel-soft px-3 py-1.5 text-sm font-semibold text-excel-ink hover:underline"
                      >
                        {link.label}
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
            ))
          )}
          <div className="mt-10 rounded-xl bg-excel-soft p-6">
            <p className="font-display text-lg font-semibold text-ink">Das war die Kurzfassung.</p>
            <p className="mt-2 text-sm text-muted">
              Im Online-Kurs gehen wir die Themen mit Übungsdateien, Videos und den Fallstricken
              aus dem Arbeitsalltag durch.
            </p>
            <Button asChild className="mt-4">
              <Link to={COURSE.href}>Zum Excel Online Kurs</Link>
            </Button>
          </div>
        </div>
      </article>
      {others.length > 0 ? (
        <section className="border-t border-line bg-paper-2 px-5 py-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-xl font-semibold text-ink">Weiterlesen</h2>
            <ul className="mt-4 space-y-3">
              {others.map((a) => (
                <li key={a.slug}>
                  <Link
                    to={a.path ?? `/guides/${a.slug}`}
                    className="font-medium text-excel-ink hover:underline"
                  >
                    {a.title}
                  </Link>
                  <span className="ml-2 text-sm text-muted">{a.category}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </main>
  );
}
