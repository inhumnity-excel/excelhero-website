import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/content";
import { AUFTRAG_SERVICES } from "@/lib/offers";

export const Route = createFileRoute("/excel-auftragsprogrammierung")({
  component: AuftragPage,
  head: () => ({
    meta: [
      { title: "Excel Auftragsprogrammierung | Excelhero" },
      {
        name: "description",
        content:
          "Excel/VBA, Power Query, Power Pivot, Power BI, Power Automate, SQL: Projektbeschreibung an kontakt@excelhero.de oder kostenloses Erstgespräch.",
      },
    ],
  }),
});

function AuftragPage() {
  return (
    <main>
      <PageHero
        kicker="Service"
        title="Excel Auftragsprogrammierung"
        lead="Sind Sie auf der Suche nach Unterstützung bei der Umsetzung Ihres Projekts? Wir verbinden Sie mit einem Spezialisten."
      />

      <section className="bg-paper px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
            Dienstleistungen
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] text-muted">
            Wir bieten Unterstützung für folgende Themen:
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {AUFTRAG_SERVICES.map((s) => (
              <li key={s.title} className="rounded-xl bg-card p-5 shadow-card">
                <p className="flex gap-2 font-display font-semibold text-ink">
                  <Check className="mt-0.5 size-4 shrink-0 text-excel-ink" />
                  {s.title}
                </p>
                <p className="mt-2 pl-6 text-sm leading-relaxed text-muted">{s.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper-2 px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
              So starten wir
            </h2>
            <ol className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
              <li>
                <strong className="text-ink">1. Kurz beschreiben.</strong> Schicken Sie eine
                Projektbeschreibung inkl. relevanter Dateien an{" "}
                <a href={`mailto:${SITE.email}`} className="font-semibold text-excel-ink hover:underline">
                  {SITE.email}
                </a>
                .
              </li>
              <li>
                <strong className="text-ink">2. Oder Erstgespräch.</strong> Über den{" "}
                <Link to="/rueckruf" className="font-semibold text-excel-ink hover:underline">
                  Rückrufservice
                </Link>{" "}
                oder das Formular rechts vereinbaren Sie ein kostenloses Gespräch.
              </li>
              <li>
                <strong className="text-ink">3. Spezialist.</strong> Ich verbinde Sie mit einem
                unserer Spezialisten, der sich Ihres Projekts annimmt.
              </li>
            </ol>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <a href={`mailto:${SITE.email}?subject=${encodeURIComponent("Projektanfrage Auftragsprogrammierung")}`}>
                  Projekt per E-Mail senden
                </a>
              </Button>
              <Button asChild variant="navy">
                <Link to="/rueckruf">Rückruf vereinbaren</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-2xl bg-card p-6 shadow-card">
            <h3 className="font-display text-xl font-semibold text-ink">Projekt anfragen</h3>
            <p className="mt-2 text-sm text-muted">
              Kurzes Formular – öffnet danach Ihr E-Mail-Programm an {SITE.email}.
            </p>
            <div className="mt-5">
              <InquiryForm mode="contact" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
