import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { FUNCTIONS } from "@/lib/excel-data";

export const Route = createFileRoute("/excel-funktionen-deutsch-englisch")({
  component: DeEnPage,
  head: () => ({
    meta: [
      { title: "Excel Funktionen Deutsch–Englisch | Excelhero" },
      {
        name: "description",
        content:
          "Excel-Funktionen mit deutschem und englischem Namen: SVERWEIS/VLOOKUP, WENN/IF, SUMMEWENNS/SUMIFS und weitere.",
      },
    ],
  }),
});

function DeEnPage() {
  const rows = [...FUNCTIONS].sort((a, b) => a.name.localeCompare(b.name, "de"));
  return (
    <main>
      <PageHero
        kicker="Nachschlagewerk"
        title="Excel-Funktionen Deutsch–Englisch"
        lead="Wenn die Mappe auf Englisch ist oder Kolleginnen englische Tutorials schicken: hier der Abgleich der Namen."
      />
      <section className="bg-paper px-5 py-10">
        <div className="mx-auto max-w-4xl overflow-x-auto rounded-xl bg-card shadow-card">
          <table className="w-full min-w-[28rem] text-left text-sm">
            <thead className="bg-navy text-paper">
              <tr>
                <th className="px-4 py-3 font-display font-semibold">Deutsch</th>
                <th className="px-4 py-3 font-display font-semibold">Englisch</th>
                <th className="px-4 py-3 font-display font-semibold">Kategorie</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((fn) => (
                <tr key={fn.name} className="border-t border-line">
                  <td className="px-4 py-2.5 font-medium text-ink">
                    {fn.href.startsWith("/") ? (
                      <Link to={fn.href} className="hover:text-excel-ink hover:underline">
                        {fn.star ? `${fn.name} *` : fn.name}
                      </Link>
                    ) : (
                      <a
                        href={fn.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-excel-ink hover:underline"
                      >
                        {fn.star ? `${fn.name} *` : fn.name}
                      </a>
                    )}
                  </td>
                  <td className="px-4 py-2.5 text-muted">{fn.en}</td>
                  <td className="px-4 py-2.5 text-muted">{fn.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mx-auto mt-6 max-w-4xl text-sm text-muted">
          * Bei selten gebrauchten Funktionen wird auf die Dokumentation von Microsoft verwiesen.
          Syntax und Kurzklärung findest du in der{" "}
          <Link to="/excel-funktionen" className="font-semibold text-excel-ink hover:underline">
            vollständigen Funktionsübersicht
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
