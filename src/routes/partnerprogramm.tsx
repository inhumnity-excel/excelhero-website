import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { COURSE, SITE } from "@/lib/content";

export const Route = createFileRoute("/partnerprogramm")({
  component: PartnerPage,
  head: () => ({
    meta: [
      { title: "Partnerprogramm | Excelhero" },
      {
        name: "description",
        content:
          "Excelhero Partnerprogramm: bewirb den Excel Online Kurs und verdiene bis zu 50 % Provision über Digistore24.",
      },
    ],
  }),
});

const STEPS = [
  {
    n: "01",
    title: "Kostenlos bei Digistore24 anmelden",
    body: "Lege ein Affiliate-Konto an. Die Registrierung dauert wenige Minuten.",
  },
  {
    n: "02",
    title: "Partnerschaft mit Excelhero",
    body: "Suche im Marktplatz nach „Excel Online Kurs für Fortgeschrittene“ bzw. dem 9-in-1-Kurspaket von excelhero.de.",
  },
  {
    n: "03",
    title: "Promo-Link nutzen",
    body: "Du erhältst einen persönlichen Werbelink. Darüber werden Verkäufe und Provision zugeordnet.",
  },
  {
    n: "04",
    title: "Bewerben und verdienen",
    body: "Blog, YouTube, Newsletter oder LinkedIn – Auszahlung übernimmt Digistore24.",
  },
];

const PERKS = [
  "Bis zu 50 % Provision pro vermitteltem Verkauf",
  "Stark nachgefragtes Produkt (Excel-Training für Professionals)",
  "Cookie-Tracking und Abrechnung über Digistore24",
  "Mengenrabatt ab 3 Lizenzen – relevant für B2B-Empfehlungen",
];

function PartnerPage() {
  return (
    <main>
      <PageHero
        kicker="Partnerprogramm"
        title="Du möchtest meinen Kurs zum Thema Excel bewerben und bis zu 50 % Provision verdienen?"
        lead="Weitere Informationen findest du auf dem Digistore24-Marktplatz unter „Excel Online Kurs für Fortgeschrittene“."
      />

      <section className="bg-paper px-5 py-14">
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
              Affiliates First
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              Das Excelhero-Training läuft seit 2016, mit 600+ Lektionen und
              über 80.000 erreichten Personen. Wer Excel-Inhalte erstellt oder
              Professionals berät, hat hier ein Produkt, das sich von selbst
              erklärt – und eine Provision, die sich lohnt.
            </p>
            <ul className="mt-6 space-y-3">
              {PERKS.map((item) => (
                <li key={item} className="flex gap-2.5 text-[15px] text-ink">
                  <Check className="mt-0.5 size-4 shrink-0 text-excel-ink" strokeWidth={2.4} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={SITE.digistore.affiliates} target="_blank" rel="noreferrer">
                  Mehr erfahren auf Digistore24
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={COURSE.checkout.experte} target="_blank" rel="noreferrer">
                  Produkt ansehen
                </a>
              </Button>
            </div>
          </div>
          <aside className="rounded-2xl bg-navy p-6 text-paper shadow-navy lg:p-8">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-excel">
              Provision
            </p>
            <p className="mt-2 font-display text-5xl font-semibold tabular-nums">50 %</p>
            <p className="mt-2 text-sm text-paper/70">
              bis zu – je vermitteltem Verkauf des Excel-Experten-Pakets
              (599&nbsp;€) bzw. der Bundles.
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg bg-navy-deep/70 p-3">
                <dt className="text-paper/50">Excel Experte</dt>
                <dd className="mt-1 font-display text-lg font-semibold">599 €</dd>
              </div>
              <div className="rounded-lg bg-navy-deep/70 p-3">
                <dt className="text-paper/50">Excel + Power BI</dt>
                <dd className="mt-1 font-display text-lg font-semibold">899 €</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="bg-paper-2 px-5 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
            In vier Schritten Partner werden
          </h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {STEPS.map((s) => (
              <li key={s.n} className="rounded-xl bg-card p-5 shadow-card">
                <p className="font-display text-sm font-semibold tabular-nums text-excel-ink">{s.n}</p>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted">
            Die Abrechnung erfolgt über {SITE.digistore.reseller}. Fragen zum
            Programm:{" "}
            <a className="font-medium text-excel-ink hover:underline" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
