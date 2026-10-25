import { Link, createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/layout/page-hero";
import { FUNCTION_CATEGORIES, FUNCTIONS } from "@/lib/excel-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/excel-funktionen")({
  component: FunctionsPage,
  head: () => ({
    meta: [
      { title: "Excel Funktionen Übersicht | Excelhero" },
      {
        name: "description",
        content:
          "500+ Excel-Funktionen mit deutschem und englischem Namen. Eigene Guides oder Microsoft-Dokumentation (*).",
      },
    ],
  }),
});

function FunctionName({
  name,
  href,
  star,
}: {
  name: string;
  href: string;
  star: boolean;
}) {
  const label = star ? `${name} *` : name;
  if (href.startsWith("/")) {
    return (
      <Link to={href} className="text-ink hover:text-excel-ink hover:underline">
        {label}
      </Link>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-ink hover:text-excel-ink hover:underline"
    >
      {label}
    </a>
  );
}

function FunctionsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof FUNCTION_CATEGORIES)[number]>("Alle");

  const rows = useMemo(() => {
    const query = q.trim().toLowerCase();
    return FUNCTIONS.filter((fn) => {
      const inCat = cat === "Alle" || fn.category === cat;
      const inQ =
        !query ||
        fn.name.toLowerCase().includes(query) ||
        fn.en.toLowerCase().includes(query) ||
        fn.desc.toLowerCase().includes(query);
      return inCat && inQ;
    });
  }, [q, cat]);

  return (
    <main>
      <PageHero
        kicker="Nachschlagewerk"
        title="Die wichtigsten Excel-Funktionen"
        lead="Über 500 Funktionen mit deutschem und englischem Namen. Klick öffnet den Excelhero-Guide – oder die Microsoft-Dokumentation, wenn dahinter ein Sternchen steht."
      />
      <section className="bg-paper px-5 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <label className="block flex-1">
              <span className="sr-only">Funktion suchen</span>
              <input
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="SVERWEIS, XLOOKUP, Summe …"
                className="h-12 w-full rounded-lg border border-line bg-card px-4 text-ink outline-none ring-excel focus:ring-2"
              />
            </label>
            <p className="text-sm text-muted tabular-nums">{rows.length} Funktionen</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {FUNCTION_CATEGORIES.map((c) => (
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
          <div className="mt-8 overflow-x-auto rounded-xl bg-card shadow-card">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="border-b border-line bg-paper-2 font-display text-xs uppercase tracking-wider text-muted">
                <tr>
                  <th className="px-4 py-3">Deutsch</th>
                  <th className="px-4 py-3">Englisch</th>
                  <th className="px-4 py-3">Kategorie</th>
                  <th className="px-4 py-3">Beschreibung</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((fn) => (
                  <tr key={`${fn.name}-${fn.en}`} className="border-b border-line last:border-0">
                    <td className="px-4 py-3 font-display font-semibold text-ink">
                      <FunctionName name={fn.name} href={fn.href} star={fn.star} />
                    </td>
                    <td className="px-4 py-3 text-muted">{fn.en}</td>
                    <td className="px-4 py-3 text-excel-ink">{fn.category}</td>
                    <td className="px-4 py-3 text-ink/80">{fn.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm text-muted">
            * Bei selten gebrauchten Funktionen wird auf die Dokumentation von Microsoft verwiesen.
          </p>
        </div>
      </section>
    </main>
  );
}
