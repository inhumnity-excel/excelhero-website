import { Link } from "@tanstack/react-router";
import { Check, GraduationCap, MessageCircle, ShieldCheck } from "lucide-react";
import { TrustCard } from "@/components/course/price-card";
import { CustomerList } from "@/components/course/customers";
import { Instructor } from "@/components/home/instructor";
import { Testimonials } from "@/components/home/testimonials";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MODULES } from "@/lib/course";
import faq from "@/data/black-friday-faq.json";

const BF_VIDEO =
  "https://player.vimeo.com/video/505078224?portrait=1&title=1&color=2ecc71&byline=1&autopause=0";

const PRODUCTS = {
  experte: "160655",
  powerbi: "273161",
  bundle: "330287",
} as const;

const MODULE_COPY: Record<number, { heading: string; scope: string; blurb: string }> = {
  1: {
    heading: "Excel-Basics: Grundlagen meistern & Überblick über die verschiedenen Excel Tools",
    scope: "Umfang: 12,5h / 130+ Lektionen",
    blurb:
      "Neben dem Beherrschen der Excel-Grundlagen ist es auch wichtig, sich gleich von Anfang an einen guten Überblick über die verschiedenen Excel Tools zu verschaffen.",
  },
  2: {
    heading: "Excel-Funktionen: SVERWEIS & Co. meistern und jede Menge Tipps & Tricks kennenlernen",
    scope: "Umfang: 8,0h / 100+ Lektionen",
    blurb:
      "Mit dem effektiven Einsatz der wichtigsten Excel-Formeln und Funktionen können Daten schnell aufbereitet, zusammengeführt und ausgewertet werden.",
  },
  3: {
    heading: "Excel-Diagramme und Karten: Erwecke deine Daten zum Leben",
    scope: "Umfang: 4,5h / 40+ Lektionen",
    blurb:
      "Um Erkenntnisse aus Ihren Unternehmensdaten zu gewinnen und diese ansprechend zu kommunizieren ist der richtige Einsatz von Diagrammen und Karten unerlässlich.",
  },
  4: {
    heading: "Excel Pivot-Tabellen: Daten mit wenigen Klicks auswerten und visualisieren",
    scope: "Umfang: 4h / 55+ Lektionen",
    blurb:
      "Mit dem effektiven Einsatz von Pivot-Tabellen können große Datenmengen schnell ausgewertet und in ansprechende Berichte und Dashboards verwandelt werden.",
  },
  5: {
    heading: "Excel-Makros: Lästige Arbeitsschritte aufnehmen und per Knopfdruck abspielen",
    scope: "Umfang: 2,0h / 25+ Lektionen",
    blurb:
      "Lerne Makros aufzunehmen und an deine Bedürfnisse anzupassen. Mit Makros können lästige Routineaufgaben automatisiert und somit jede Menge Zeit eingespart werden.",
  },
  6: {
    heading: "Power Query: Schluss mit Verknüpfungen, Copy & Paste. Daten automatisch von A -> B",
    scope: "Umfang: 6,5h / 50+ Lektionen",
    blurb:
      "Mit Power Query lassen sich Daten von Dateien, gesamten Ordnern, Webseiten, Datenbanken usw. ganz einfach abrufen und transformieren. Mit einem Mausklick können danach einmal erstellte Abfragen aktualisiert werden.",
  },
  7: {
    heading: "Power Pivot (DAX): Business Intelligence mit Excel (Grundlage für Power-BI)",
    scope: "Umfang: 4,5h / 55+ Lektionen",
    blurb:
      "Mit Power Pivot können Daten aus unterschiedlichen Quellen in einem Datenmodell vereint und ausgewertet werden. Dadurch lassen sich schnell Einsichten gewinnen, die sonst nur mit sehr aufwendigen Formelkonstruktionen möglich wären.",
  },
  8: {
    heading: "Excel VBA: Programme schreiben und Tools bauen, um Arbeitsabläufe zu automatisieren",
    scope: "Umfang: 17,0h / 170+ Lektionen",
    blurb:
      "Mit VBA erhältst Du die volle Kontrolle über Excel und kannst Programme schreiben, die Dir alle möglichen Arbeiten abnehmen. Dieser Kurs geht weit über das einfache Aufnehmen von Makros hinaus.",
  },
  9: {
    heading: "Office-übergreifende VBA-Programmierung. Excel + PowerPoint, Outlook, Word, SQL",
    scope: "Umfang: 4,0h / 35+ Lektionen",
    blurb:
      "Mit Hilfe von VBA können Excel-Inhalte automatisch in PowerPoint-Präsentationen, Word-Berichte überführt und per Outlook versendet werden. Das spart Zeit bei einer regelmäßiger Reporterstellung.",
  },
  10: {
    heading: "Power BI Masterclass + Power BI DAX von meinem Partner data-science-academy.com",
    scope: "Umfang: 21,0h / 200+ Lektionen",
    blurb:
      "Mit Hilfe von Power BI können Daten in Form von interaktiven Dashboards dargestellt und unternehmensweit per Browser oder Smartphone verteilt werden. Weitere Kurse zu SQL, Azure, Data Warehouse, Alteryx und Snowflake auf Anfrage.",
  },
};

const PACKAGES = [
  {
    id: "experte" as const,
    name: "Excel Experte (1-9)",
    was: "599 €",
    price: "449,25 €",
    note: "(Ratenzahlung möglich) Excel Online Training von excelhero.de",
    featured: true,
    contents: [
      "Grundlagen",
      "Formeln & Funktionen",
      "Diagramme & Karten",
      "Pivot-Tabellen",
      "Makros",
      "Power-Query",
      "Power-Pivot",
      "Excel VBA Programmierung",
      "Office VBA (Excel + PPT, Word, Outlook, SQL)",
      "Zukünftige Inhalte",
    ],
    scope: ["600+ Videolektionen", "60+ Std. Länge", "Zertifikat für jedes Modul"],
  },
  {
    id: "powerbi" as const,
    name: "Power BI (10)",
    was: "399 €",
    price: "299,25 €",
    note: "(Ratenzahlung möglich) Power BI Online Training von data-science-academy.com",
    featured: false,
    contents: [
      "Einführung",
      "Daten transformieren",
      "Daten-Modell erstellen",
      "Daten visualisieren",
      "Storytelling mit Daten",
      "Power BI & Python",
      "Power BI Cloud - Reports veröffentlichen",
      "Weitere Datenquellen verwenden",
      "DAX Measures & Berechnete Spalten - Umfassendes Bootcamp",
      "Zukünftige Inhalte",
    ],
    scope: ["200+ Videolektionen", "20+ Std. Länge", "Zertifikat für jedes Modul"],
  },
  {
    id: "bundle" as const,
    name: "Excel + Power BI (1-10)",
    was: "899 €",
    price: "674,25 €",
    note: "(Ratenzahlung möglich) Beide Kursangebote als Paket 99 € Rabatt",
    featured: false,
    contents: ["Alle Inhalte aus beiden Trainings", "99 € Rabatt gegenüber Einzelbuchungen"],
    scope: ["800+ Videolektionen", "80+ Std. Länge", "Zertifikat für jedes Modul"],
  },
];

const HERO_POINTS = [
  "Effizienter Aufgaben erledigen. Prozesse optimieren und automatisieren. Zeit sparen und früher in den Feierabend gehen.",
  "Bei Datenaufbereitung, Auswertungen und Reporterstellung das volle Potenzial von Excel nutzen.",
  "Excel sicher und professionell beherrschen und somit ideal für neue berufliche Herausforderungen gewappnet sein.",
];

function checkout(id: keyof typeof PRODUCTS, voucher: string) {
  return `https://www.digistore24.com/product/${PRODUCTS[id]}?voucher=${voucher}`;
}

export function BlackFridayPage({ voucher }: { voucher: string }) {
  return (
    <main>
      <section className="relative overflow-hidden bg-navy text-paper">
        <div className="grid-navy pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-5 py-14 md:py-20">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-excel">
            Excel Online Kurs und power bi
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Excel Online Kurs
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-paper/75">
            Schnell und selbstsicher Excel Herausforderungen meistern. Ideal für datenintensive
            Bereiche wie Controlling & Buchhaltung
          </p>
          <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl bg-navy-deep shadow-card ring-1 ring-white/10">
              <div className="aspect-video">
                <iframe
                  src={BF_VIDEO}
                  title="Excel Online Kurs"
                  className="h-full w-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <div>
              <p className="font-display text-sm font-semibold">Deine Vorteile:</p>
              <ul className="mt-4 space-y-2.5">
                {HERO_POINTS.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-snug text-paper/85">
                    <Check className="mt-0.5 size-4 shrink-0 text-excel" strokeWidth={2.4} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="mt-8">
                <a href="#preise">Jetzt zum Excel Hero werden</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
            Mit diesem Excel Kurs wirst Du …
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-xl bg-card p-6 shadow-card">
              <h3 className="font-display text-xl font-semibold text-ink">
                Effektiver, effizienter und zeitsparender mit Excel arbeiten:
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                Im Schnitt arbeiten meine Kursteilnehmer ca. 7 Stunden pro Woche mit Excel, in
                einzelnen Fällen auch 20 Stunden oder mehr – das sind zwischen 300 und 900 Stunden
                pro Jahr ! Durch den geschickten Einsatz von Funktionen, Pivot-Tabellen, VBA,
                Power-Query usw. kannst Du zahlreiche Aufgaben viel schneller erledigen und
                teilweise sogar ganz automatisieren. Auf diese Weise kannst Du 10 – 30% Deiner
                Arbeitszeit einsparen und Dich auf wichtigere Dinge konzentrieren oder auch einfach
                früher in den Feierabend gehen. Wie viele Stunden es bei Dir sind, findest Du mit
                dem{" "}
                <Link to="/" className="font-semibold text-excel-ink underline">
                  interaktiven Onlinerechner
                </Link>{" "}
                heraus.
              </p>
            </article>
            <article className="rounded-xl bg-card p-6 shadow-card">
              <h3 className="font-display text-xl font-semibold text-ink">
                Mit herausragenden Excel-Fähigkeiten glänzen:
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                Jede Woche hast Du nur wenige Momente, in denen Du vor Deinen Kollegen und Deinem
                Chef glänzen kannst. Oft kommen dabei zwei Tools zum Einsatz: PowerPoint und Excel.
                Jeder Chef freut sich über TOP ausgearbeitete Excelsheets. Und wenn er sieht, dass
                Du dem kompletten Team mit Deinen Makros jede Woche ein paar Stunden Zeit
                einsparst, dann kannst Du dies als unschlagbares Argument in die nächste
                Gehaltsverhandlung mit hineinnehmen. Bringe Deine Fachexpertise viel besser zur
                Geltung und steigere Deinen Marktwert.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-paper-2 px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">Kursabschnitte</h2>
          <ol className="mt-8 grid gap-5 md:grid-cols-2">
            {MODULES.map((mod) => {
              const copy = MODULE_COPY[mod.n];
              return (
                <li key={mod.n} className="rounded-xl bg-card p-5 shadow-card">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {mod.n}) {copy.heading}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-excel-ink">{copy.scope}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{copy.blurb}</p>
                  <a
                    href={mod.href}
                    className="mt-3 inline-block text-sm font-semibold text-excel-ink underline"
                  >
                    Inhalte im Detail »
                  </a>
                  {mod.n === 10 ? (
                    <p className="mt-2 text-sm">
                      <Link to="/power-bi/power-bi-ganz-einfach-erklaert" className="font-semibold text-excel-ink underline">
                        Power BI
                      </Link>
                      {" · "}
                      <a href={mod.href} className="font-semibold text-excel-ink underline">
                        Details & Buchung »
                      </a>
                      {" · "}
                      <Link to="/kontakt" className="font-semibold text-excel-ink underline">
                        Anfrage
                      </Link>
                    </p>
                  ) : null}
                </li>
              );
            })}
          </ol>
          <p className="mt-6 text-sm text-muted">Präsenzschulungen mit vergleichbarem Umfang kosten ~10.000€</p>
        </div>
      </section>

      <section id="preise" className="scroll-mt-24 bg-paper px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <article
              key={pkg.id}
              className={
                pkg.featured
                  ? "flex flex-col rounded-2xl bg-navy p-6 text-paper shadow-navy"
                  : "flex flex-col rounded-2xl bg-card p-6 shadow-card"
              }
            >
              <h2 className="font-display text-xl font-semibold">{pkg.name}</h2>
              <p className="mt-3 text-lg line-through opacity-60">{pkg.was}</p>
              <p className="font-display text-4xl font-semibold tabular-nums">{pkg.price}</p>
              <p className={pkg.featured ? "mt-1 text-sm text-paper/70" : "mt-1 text-sm text-muted"}>
                {pkg.note}
              </p>
              <p className="mt-5 font-display text-xs font-semibold uppercase tracking-wider opacity-70">
                Kursinhalte
              </p>
              <ul className="mt-2 space-y-1.5 text-sm">
                {pkg.contents.map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check className={`mt-0.5 size-4 shrink-0 ${pkg.featured ? "text-excel" : "text-excel-ink"}`} />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-display text-xs font-semibold uppercase tracking-wider opacity-70">Umfang</p>
              <ul className="mt-2 space-y-1.5 text-sm">
                {pkg.scope.map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check className={`mt-0.5 size-4 shrink-0 ${pkg.featured ? "text-excel" : "text-excel-ink"}`} />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-display text-xs font-semibold uppercase tracking-wider opacity-70">
                Support & Garantie
              </p>
              <ul className="mt-2 flex-1 space-y-1.5 text-sm">
                {["Zeitlich unbegrenzter Zugriff *", "Support bei Fragen", "30 Tage Geld-Zurück-Garantie"].map(
                  (item) => (
                    <li key={item} className="flex gap-2">
                      <Check className={`mt-0.5 size-4 shrink-0 ${pkg.featured ? "text-excel" : "text-excel-ink"}`} />
                      {item}
                    </li>
                  ),
                )}
              </ul>
              <Button asChild className="mt-6" variant={pkg.featured ? "default" : "navy"}>
                <a href={checkout(pkg.id, voucher)}>Jetzt buchen (Mengenrabatt ab 3 Lizenzen)</a>
              </Button>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-6xl text-sm text-muted">
          * Die ersten Kursteilnehmer sind bereits seit 2016 dabei. Der Kurs wird regelmäßig aktualisiert.
        </p>
      </section>

      <section className="bg-paper-2 px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
            Von überall im selbstbestimmten Tempo lernen
          </h2>
          <ul className="mt-6 space-y-2 text-[15px] text-ink">
            {[
              "On-Demand-Videolektionen",
              "Auf Mobilgeräten und Desktop ansehen",
              "Übungsaufgaben, Checklisten und Vorlagen",
              "Persönlicher Dozenten Support",
              "30 Tage Geld-Zurück-Garantie",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-excel-ink" />
                {item}
              </li>
            ))}
          </ul>
          <h3 className="mt-8 font-display text-xl font-semibold text-ink">State-of-the-art Kursplattform</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            Im Gegensatz zu klobigen Excel-Handbüchern oder Schulungen, deren Inhalte nur allzu
            schnell vergessen sind, kannst Du auf die verschiedenen Kapitel der Onlinekurse
            jederzeit und überall am PC oder mobil am Smartphone zugreifen und bei Bedarf einzelne
            Lektionen noch einmal anschauen. Dadurch kannst Du selbstbestimmt die Lerninhalte und
            Dein eigenes Lerntempo steuern und somit Deine Excel-Fähigkeiten nachhaltig ausbauen.
          </p>
        </div>
      </section>

      <Instructor />

      <section className="bg-paper px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">Dein Dozent</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            „Lass Excel für dich arbeiten … Mit wenigen Tricks und ein bisschen VBA kannst Du eine
            Menge Zeit einsparen und wiederkehrende Arbeitsschritte teilweise ganz automatisieren.
            Durch diesen Excel-Kurs profitierst Du von meiner langjährigen Erfahrung als Analyst ,
            Chief Data Officer und als selbstständiger Excel-Experte (10.000+ Arbeitsstunden mit
            Excel) . Nichts ist kostbarer als die eigene Zeit, daher findest Du hier alles in Form
            von komprimierten Onlinekursen. Diese konzentrieren sich auf die wichtigen 20%, die dich
            80% weiterbringen – damit Du mit wenig Zeitaufwand den maximalen Nutzen hast.“
          </p>
          <p className="mt-4 font-display font-semibold text-ink">Daniel Kogan</p>
        </div>
      </section>

      <section className="bg-paper-2 px-5 py-16">
        <div className="mx-auto max-w-3xl space-y-4 text-[15px] leading-relaxed text-muted">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
            Excel sagt mir etwas, aber was ist Power BI?
          </h2>
          <p>
            Power BI ermöglicht Anwendern das Aggregieren, Aufbereiten und Visualisieren von
            Unternehmensdaten aus verschiedenen Quellen. Dabei liegt der Fokus auf der
            Nutzerfreundlichkeit, da fortgeschrittene Kenntnisse in der Programmierung mit
            Tabellenkalkulationsprogrammen wie z.B. Microsoft Excel nicht notwendig sind.
          </p>
          <p>
            Microsoft Power BI ist Teil des Programminventars vieler DAX-Unternehmen in Deutschland.
            Daher ist es wichtig, diese Technologie zu beherrschen, um den eigenen Marktwert zu
            steigern und potenzielle Arbeitgeber zu beeindrucken. Aber auch selbstständigen
            Unternehmern hilft ein Microsoft Power BI Kurs, ihr Unternehmen zu steuern. Die
            Datenvisualisierung spielt eine entscheidende Rolle bei der Bewertung vergangener und
            aktueller Performance sowie bei der Festlegung zukünftiger Unternehmensziele. Mit Power
            BI können Sie Echtzeit-Reportings erstellen, was eine effektive Unternehmenssteuerung
            ermöglicht.
          </p>
        </div>
      </section>

      <Testimonials />
      <CustomerList />

      <section className="bg-paper px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          <TrustCard
            icon={GraduationCap}
            title="Zertifikate für abgeschlossene Module"
            body="Downloadbar als PDF für deinen Lebenslauf"
          />
          <TrustCard
            icon={ShieldCheck}
            title="30 Tage Geld-Zurück-Garantie"
            body="Im Gegensatz zu Präsenzschulungen kannst Du das Kursangebot 30 Tage lang risikofrei ausprobieren. Falls Du nach Durchlaufen der Kursinhalte nicht eine Menge Zeit bei Deiner Arbeit mit Excel einsparen konntest oder aus irgendeinem anderen Grund nicht zufrieden sein solltest, kannst Du Dir ganz einfach mit einem Mausklick über den Zahlungsabwickler Digistore24 den Einkaufspreis zurückerstatten lassen."
          />
          <TrustCard
            icon={MessageCircle}
            title="Fragen im Lernforum stellen"
            body="Im kursinternen Lernforum kannst Du Fragen zu den Kursinhalten stellen und bekommst dann direkt von mir eine Antwort. So besteht nicht die Gefahr, dass Du an irgendeiner Stelle im Kurs nicht weiterkommst oder Dinge unklar bleiben."
          />
        </div>
        <p className="mx-auto mt-6 max-w-6xl text-sm text-muted">
          Extra Bonus: Was kein klobiges Excel-Handbuch, YouTube-Video oder Präsenzschulung bieten kann.
        </p>
      </section>

      <section className="bg-paper-2 px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">FAQ</h2>
          <p className="mt-3 text-[15px] text-muted">Hier ein paar häufig gestellte Fragen:</p>
          <Accordion type="single" collapsible className="mt-6">
            {faq.map((item, index) => (
              <AccordionItem key={item.q} value={`bf-${index}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-excel px-5 py-14 text-navy-deep">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight">
            Wenn Du auch mehr aus Excel herausholen und Zeit einsparen möchtest, dann ...
          </h2>
          <div>
            <Button asChild variant="navy" size="lg">
              <a href="#preise">Jetzt in den Kurs einschreiben! »</a>
            </Button>
            <p className="mt-2 text-sm">Ganz risikofrei mit der 30 Tage Geld-Zurück-Garantie testen</p>
          </div>
        </div>
      </section>
    </main>
  );
}
