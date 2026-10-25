import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const STATS = [
  { value: "10.000+", label: "Arbeitsstunden mit Excel" },
  { value: "80.000+", label: "Personen erreicht" },
  { value: "600+", label: "Videolektionen" },
  { value: "4,7/5", label: "Bewertung" },
];

export function Instructor() {
  return (
    <section className="bg-paper px-5 py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div className="relative mx-auto w-full max-w-md">
          <img
            src="/images/daniel-kogan.jpg"
            alt="Daniel Kogan, Excel-Experte und Online-Trainer"
            width={640}
            height={800}
            className="w-full rounded-2xl bg-card object-cover object-top shadow-card"
          />
        </div>
        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-excel-ink">
            Dein Dozent
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Daniel Kogan · Excel-Experte & Online-Trainer
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            Durch den geschickten Einsatz von Excel erledigst du Aufgaben
            schneller – oder automatisierst sie ganz. Das spart Arbeit und
            verschafft dir Zeit für Wichtigeres. Mit herausragenden Excel-Fähigkeiten
            machst du Eindruck und nimmst ein starkes Argument in die nächste
            Gehaltsverhandlung mit.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            Erspar dir etliche Stunden Trial-and-Error und profitiere von meiner
            Erfahrung als Analyst, Chief Data Officer und selbstständiger
            Excel-Experte – über 10.000 Arbeitsstunden mit Excel, Projekte unter
            anderem für DHL.
          </p>
          <dl className="mt-6 grid grid-cols-2 gap-3">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-lg bg-card px-3 py-3 shadow-card">
                <dt className="font-display text-xl font-semibold tabular-nums text-excel-ink">
                  {s.value}
                </dt>
                <dd className="text-xs text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
          <Button asChild variant="outline" className="mt-6">
            <Link to="/about">Mehr zu mir</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
