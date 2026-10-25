import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { COURSE } from "@/lib/content";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [{ title: "Über Daniel Kogan | Excelhero" }],
  }),
});

function AboutPage() {
  return (
    <main>
      <PageHero
        kicker="Über mich"
        title="Hallo, ich bin Daniel Kogan – und ich betreibe Excelhero.de"
        lead="Mein Ziel: dir helfen, Excel in kürzester Zeit zu lernen und bei der Arbeit viel Zeit einzusparen."
      />
      <section className="bg-paper px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-start">
          <img
            src="/images/daniel-kogan.jpg"
            alt="Daniel Kogan, Excel-Experte und Online-Trainer"
            className="aspect-[3/4] w-full max-w-md rounded-2xl object-cover shadow-card md:aspect-[3/2] md:max-w-none md:object-top"
          />
          <div className="space-y-4 text-[15px] leading-relaxed text-muted">
            <p>
              Mein Studium der Regionalwissenschaft Japan habe ich an der
              Universität Bonn abgeschlossen. Auslandssemester führten mich an
              die Waseda-Universität in Tokyo und die Doshisha-Universität in
              Kyoto.
            </p>
            <p>
              Seit 2010 beschäftige ich mich fast täglich mit Excel – zuerst als
              Analyst, später als Chief Data Officer in einer Marktforschungsfirma
              in Bonn. Mitte 2015 habe ich mich als Excel-Experte selbstständig
              gemacht, mit Projekten unter anderem für DHL. Schwerpunkt:
              Programmierung von Excel-Tools.
            </p>
            <p>
              Mitte 2016 begann ich, den ersten Excel-Online-Kurs aufzunehmen.
              Daraus ist das umfangreichste Excel-Online-Training Deutschlands
              mit über 60 Stunden Videomaterial geworden.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper-2 px-5 py-16">
        <div className="mx-auto max-w-3xl space-y-5 text-[15px] leading-relaxed text-muted">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
            Meine Geschichte
          </h2>
          <p>
            Sommer 2015: Nach sechs Jahren in der Marktforschung – den ganzen Tag
            Excel und Datenbanken, 50 Stunden plus die Woche, drei Monitore –
            war das Datenchaos beseitigt und die meisten Excel-Schritte
            automatisiert. Mit dem gleichen Team verdoppelten wir den Umsatz in
            drei Jahren.
          </p>
          <p>
            Ich kündigte, packte und flog. Erster Stop: Chiang Mai. Mein Ziel
            war, Excel-Erfahrung an mehr Menschen zu bringen. Ein Abo-Service
            für Unternehmen funktionierte nicht. Auf einem Event sprach jemand
            über Online-Kurse. Eine Woche später stand ein 40-Minuten-Minikurs
            zu Pivot-Tabellen online. Drei Tage nichts – dann die ersten
            Verkäufe und Rückmeldungen. Die Idee für Excelhero war da.
          </p>
          <p>
            Acht Jahre und etliche Nachtschichten später: aus 40 Minuten wurden
            60 Stunden Kursmaterial. Über 80.000 Personen (Stand September 2023)
            haben damit mehr aus Excel herausgeholt.
          </p>
          <p>
            Wer Excel im Schnitt 7 Stunden pro Woche nutzt, kommt im Berufsleben
            auf mehr als fünf Arbeitsjahre nur mit Excel. Kleine
            Produktivitätszuwächse sparen dann tausende Stunden. Deshalb will
            ich hier das bestmögliche Training anbieten – damit du früher in den
            Feierabend kommst.
          </p>
          <p>Viele Grüße aus Asien<br />Daniel Kogan</p>
          <Button asChild className="mt-4">
            <Link to={COURSE.href}>Zum Excel Online Kurs</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
