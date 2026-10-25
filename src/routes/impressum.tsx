import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { SITE } from "@/lib/content";

export const Route = createFileRoute("/impressum")({
  component: ImpressumPage,
  head: () => ({
    meta: [{ title: "Impressum | Excelhero" }],
  }),
});

function ImpressumPage() {
  return (
    <main>
      <PageHero kicker="Rechtliches" title="Impressum" />
      <section className="bg-paper px-5 py-14">
        <div className="mx-auto max-w-3xl space-y-8 text-[15px] leading-relaxed text-ink/85">
          <div>
            <h2 className="font-display text-lg font-semibold">Diensteanbieter</h2>
            <p className="mt-2">
              {SITE.company}
              <br />
              {SITE.addressLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold">Vertreten durch</h2>
            <p className="mt-2">Daniel Kogan</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold">Kontakt</h2>
            <p className="mt-2">
              E-Mail: {SITE.email}
              <br />
              Telefon: {SITE.phone}
              <br />
              Webseite: {SITE.website}
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold">Hinweis</h2>
            <p className="mt-2">
              Bei Buchung über die Webseite erfolgt die Abrechnung über den
              deutschen Reseller {SITE.digistore.reseller}.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold">Haftung für Inhalte</h2>
            <p className="mt-2">
              Die Inhalte dieser Seiten wurden mit Sorgfalt erstellt. Für die
              Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird keine
              Gewähr übernommen. Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG
              für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG bin ich nicht verpflichtet,
              übermittelte oder gespeicherte fremde Informationen zu überwachen.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold">Haftung für Links</h2>
            <p className="mt-2">
              Diese Website enthält Links zu externen Websites Dritter, auf deren
              Inhalte kein Einfluss besteht. Für die Inhalte der verlinkten Seiten
              ist stets der jeweilige Anbieter verantwortlich. Bei Bekanntwerden
              von Rechtsverletzungen werden derartige Links umgehend entfernt.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
