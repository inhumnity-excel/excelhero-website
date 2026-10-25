import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { PageHero } from "@/components/layout/page-hero";
import { SITE } from "@/lib/content";

export const Route = createFileRoute("/rueckruf")({
  component: CallbackPage,
  head: () => ({
    meta: [
      { title: "Rückrufservice | Excelhero" },
      {
        name: "description",
        content:
          "Rückruf von Daniel Kogan anfordern. Bitte Name, Telefonnummer und eine Uhrzeit angeben, zu der ich Sie am besten erreiche.",
      },
    ],
  }),
});

function CallbackPage() {
  return (
    <main>
      <PageHero
        kicker="Rückruf erbeten"
        title="Rückrufservice"
        lead="Falls Sie einen Rückruf bevorzugen, geben Sie bitte auch eine Uhrzeit an, an der ich Sie am besten erreichen kann."
      />
      <section className="bg-paper px-5 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <InquiryForm mode="callback" />
          <div>
            <div className="flex size-12 items-center justify-center rounded-lg bg-excel-soft text-excel-ink">
              <Phone className="size-5" strokeWidth={1.8} />
            </div>
            <h2 className="mt-5 font-display text-xl font-semibold text-ink">
              So läuft der Rückruf
            </h2>
            <ol className="mt-4 space-y-3 text-[15px] leading-relaxed text-muted">
              <li>
                <strong className="font-semibold text-ink">1. Formular senden</strong>
                {" — "}Name, Telefon und Wunschzeitfenster genügen.
              </li>
              <li>
                <strong className="font-semibold text-ink">2. Rückmeldung</strong>
                {" — "}Ich rufe in der Regel innerhalb von 1–2 Werktagen zurück.
              </li>
              <li>
                <strong className="font-semibold text-ink">3. Gespräch</strong>
                {" — "}Kurs, Firmenlizenzen oder Partnerprogramm – je nach Thema.
              </li>
            </ol>
            <p className="mt-6 text-[15px] leading-relaxed text-muted">
              Telefon: {SITE.phone}
              <br />
              Alternativ per E-Mail an{" "}
              <a className="font-medium text-excel-ink hover:underline" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
              {" "}oder über das{" "}
              <Link to="/kontakt" className="font-medium text-excel-ink hover:underline">
                Kontaktformular
              </Link>
              .
            </p>
            <p className="mt-6 text-[15px] leading-relaxed text-muted">
              PS: Bitte haben Sie Verständnis, dass ich kostenlosen Support nur
              für meine Kursteilnehmer anbiete.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
