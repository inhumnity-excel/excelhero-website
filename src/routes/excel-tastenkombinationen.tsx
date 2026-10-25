import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/layout/page-hero";
import { SHORTCUT_CATEGORIES, SHORTCUTS } from "@/lib/excel-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/excel-tastenkombinationen")({
  component: ShortcutsPage,
  head: () => ({
    meta: [{ title: "Excel Tastenkombinationen | Excelhero" }],
  }),
});

function ShortcutsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof SHORTCUT_CATEGORIES)[number]>("Alle");

  const rows = useMemo(() => {
    const query = q.trim().toLowerCase();
    return SHORTCUTS.filter((s) => {
      const inCat = cat === "Alle" || s.category === cat;
      const inQ =
        !query ||
        s.action.toLowerCase().includes(query) ||
        s.keys.toLowerCase().includes(query) ||
        (s.mac ?? "").toLowerCase().includes(query);
      return inCat && inQ;
    });
  }, [q, cat]);

  return (
    <main>
      <PageHero
        kicker="PC & Mac"
        title="Die Excel-Shortcuts, die wirklich Zeit sparen"
        lead="Navigation, Formeln, Formatierung und Daten. Einmal im Muskelgedächtnis, bleiben die Hände auf der Tastatur."
      />
      <section className="bg-paper px-5 py-10">
        <div className="mx-auto max-w-6xl">
          <label className="block max-w-xl">
            <span className="sr-only">Shortcut suchen</span>
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Suchen: Pivot, Fett, Zelle …"
              className="h-12 w-full rounded-lg border border-line bg-card px-4 outline-none ring-excel focus:ring-2"
            />
          </label>
          <div className="mt-4 flex flex-wrap gap-2">
            {SHORTCUT_CATEGORIES.map((c) => (
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
          <ul className="mt-8 divide-y divide-line overflow-hidden rounded-xl bg-card shadow-card">
            {rows.map((s) => (
              <li
                key={`${s.keys}-${s.action}`}
                className="flex flex-col gap-2 px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="text-[15px] text-ink">{s.action}</span>
                <span className="flex flex-wrap gap-2">
                  <kbd className="rounded-md bg-navy px-2 py-1 font-display text-xs font-semibold text-paper">
                    {s.keys}
                  </kbd>
                  {s.mac ? (
                    <kbd className="rounded-md bg-paper-2 px-2 py-1 font-display text-xs font-semibold text-ink">
                      Mac {s.mac}
                    </kbd>
                  ) : null}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
