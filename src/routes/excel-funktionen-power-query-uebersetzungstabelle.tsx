import { Link, createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { PQ_MAP } from "@/lib/pq-map";

export const Route = createFileRoute("/excel-funktionen-power-query-uebersetzungstabelle")({
  component: PqMapPage,
  head: () => ({
    meta: [
      { title: "Excel Funktionen → Power Query Übersetzungstabelle | Excelhero" },
      {
        name: "description",
        content:
          "Excel-Funktionen in Power Query nachbilden: WENN, SVERWEIS, LINKS, SUMME und Co. mit dem passenden Klick im Editor.",
      },
    ],
  }),
});

function PqMapPage() {
  return (
    <main>
      <PageHero
        kicker="Nachschlagewerk"
        title="Excel-Funktionen → Power-Query-Übersetzungstabelle"
        lead="Dieselbe Aufgabe, einmal als Formel, einmal als Schritt im Editor. Klick auf die Power-Query-Seite, wenn du den Weg im Detail brauchst."
      />
      <section className="bg-paper px-5 py-10">
        <div className="mx-auto max-w-5xl space-y-10">
          {PQ_MAP.map((group) => (
            <div key={group.heading}>
              <h2 className="mb-3 font-display text-2xl font-semibold text-ink">{group.heading}</h2>
              <div className="overflow-x-auto rounded-xl bg-card shadow-card">
                <table className="w-full min-w-[32rem] text-left text-sm">
                  <thead className="bg-navy text-paper">
                    <tr>
                      <th className="px-4 py-3 font-display font-semibold">Excel</th>
                      <th className="px-4 py-3 font-display font-semibold">Power Query</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.rows.map((row) => (
                      <tr key={row.excel} className="border-t border-line">
                        <td className="px-4 py-2.5 font-medium text-ink">{row.excel}</td>
                        <td className="px-4 py-2.5">
                          <Link to={row.to} className="text-excel-ink hover:underline">
                            {row.powerQuery}
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
          <p className="text-sm text-muted">
            Einstieg:{" "}
            <Link to="/power-query/power-query-ganz-einfach-erklaert" className="font-semibold text-excel-ink hover:underline">
              Power Query ganz einfach erklärt
            </Link>
            . Alle Funktionen:{" "}
            <Link to="/excel-funktionen" className="font-semibold text-excel-ink hover:underline">
              Excel-Funktionen
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
