import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { ARTICLES, articlePath } from "@/lib/articles";
import { COURSE } from "@/lib/content";
import { getHub } from "@/lib/hubs";

export function HubPage({ slug }: { slug: string }) {
  const hub = getHub(slug);
  if (!hub) return null;
  const articles = ARTICLES.filter((a) => hub.articleSlugs.includes(a.slug));

  return (
    <main>
      <PageHero kicker={hub.kicker} title={hub.title} lead={hub.lead} />

      {articles.length === 0 ? (
        <section className="bg-paper px-5 py-14">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
              Themen in dieser Kategorie
            </h2>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
              {hub.topics.map((topic) => (
                <li
                  key={topic}
                  className="rounded-lg bg-card px-4 py-3 text-sm text-ink shadow-card"
                >
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : (
        <section className="bg-paper px-5 py-14">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
              Themen in dieser Kategorie
            </h2>
            {articles.length > 6 ? (
              <ul className="mt-6 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                {articles.map((a) => (
                  <li key={a.slug}>
                    <Link
                      to={articlePath(a)}
                      className="block rounded-lg bg-card px-4 py-3 text-sm font-medium text-ink shadow-card hover:text-excel-ink"
                    >
                      {a.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {articles.map((a) => (
                  <Link
                    key={a.slug}
                    to={articlePath(a)}
                    className="group overflow-hidden rounded-xl bg-card shadow-card hover:shadow-card-hover"
                  >
                    <img src={a.image} alt="" className="aspect-[16/8] w-full object-cover" />
                    <div className="p-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-excel-ink">
                        {a.category} · {a.readMinutes} Min.
                      </p>
                      <h3 className="mt-1 font-display text-xl font-semibold text-ink">{a.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{a.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      <section className="bg-paper px-5 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
            Weiterführend
          </h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {hub.related.map((r) => (
              <li key={r.to}>
                <Link
                  to={r.to}
                  className="inline-flex items-center gap-1 rounded-full bg-card px-4 py-2 text-sm font-semibold text-ink shadow-card hover:text-excel-ink"
                >
                  {r.label}
                  <ArrowRight className="size-3.5" />
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/guides"
                className="inline-flex items-center gap-1 rounded-full bg-card px-4 py-2 text-sm font-semibold text-ink shadow-card hover:text-excel-ink"
              >
                Alle Guides
                <ArrowRight className="size-3.5" />
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-excel px-5 py-12 text-navy-deep">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Das Ganze im Kurs, Schritt für Schritt
            </h2>
            <p className="mt-2 max-w-xl text-[15px] text-navy/80">
              9 Module, zeitlich unbegrenzter Zugriff, 30 Tage Geld-zurück-Garantie.
            </p>
          </div>
          <Button asChild variant="navy" size="lg">
            <Link to={COURSE.href}>Zum Excel Online Kurs</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
