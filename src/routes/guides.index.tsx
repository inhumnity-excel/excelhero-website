import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/layout/page-hero";
import { ARTICLE_CATEGORIES, ARTICLES, articlePath } from "@/lib/articles";
import { HUBS } from "@/lib/hubs";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/guides/")({
  component: GuidesPage,
  head: () => ({
    meta: [
      { title: "Alle Guides | Excelhero" },
      {
        name: "description",
        content:
          "Kostenlose Excel-Guides: Funktionen, Pivot, Power Query, VBA, Diagramme, Makros und mehr.",
      },
    ],
  }),
});

function GuidesPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("Alle");

  const rows = useMemo(() => {
    const query = q.trim().toLowerCase();
    return ARTICLES.filter((a) => {
      const inCat = cat === "Alle" || a.category === cat;
      const inQ =
        !query ||
        a.title.toLowerCase().includes(query) ||
        a.excerpt.toLowerCase().includes(query) ||
        a.category.toLowerCase().includes(query);
      return inCat && inQ;
    });
  }, [q, cat]);

  return (
    <main>
      <PageHero
        kicker="Guides"
        title="Excel Tipps, die du am selben Tag einsetzen kannst"
        lead="Kostenlose Anleitungen zu Funktionen, Pivot, Power Query, VBA und bedingter Formatierung – als Nachschlagewerk neben dem Kurs."
      />
      <section className="bg-paper-2 px-5 py-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-xl font-semibold text-ink">Kategorien</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {HUBS.map((h) => (
              <li key={h.slug}>
                <Link
                  to={h.path}
                  className="inline-block rounded-full bg-card px-3.5 py-1.5 text-sm font-semibold text-ink shadow-card hover:text-excel-ink"
                >
                  {h.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="bg-paper px-5 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <label className="block flex-1">
              <span className="sr-only">Guides suchen</span>
              <input
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="SVERWEIS, Pivot, Power Query …"
                className="h-12 w-full rounded-lg border border-line bg-card px-4 text-ink outline-none ring-excel focus:ring-2"
              />
            </label>
            <p className="text-sm text-muted tabular-nums">{rows.length} Artikel</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Alle", ...ARTICLE_CATEGORIES].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCat(c)}
                className={cn(
                  "h-10 rounded-full px-3.5 text-sm font-medium",
                  cat === c ? "bg-navy text-paper" : "bg-card text-ink shadow-card",
                )}
              >
                {c}
              </button>
            ))}
          </div>
          <ul className="mt-8 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
            {rows.map((a) => (
              <li key={a.slug}>
                <Link
                  to={articlePath(a)}
                  className="block rounded-lg bg-card px-4 py-3 shadow-card hover:text-excel-ink"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-excel-ink">
                    {a.category}
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-ink">{a.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
