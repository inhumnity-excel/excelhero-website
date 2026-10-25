import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ShieldCheck, GraduationCap, MessageCircle } from "lucide-react";
import { Instructor } from "@/components/home/instructor";
import { Testimonials } from "@/components/home/testimonials";
import { Button } from "@/components/ui/button";
import { PriceCard, TrustCard } from "@/components/course/price-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { COURSE } from "@/lib/content";
import {
  COURSE_FAQ,
  COURSE_VIDEO,
  MODULES,
  PACKAGES,
} from "@/lib/course";
import { CustomerList } from "@/components/course/customers";

export const Route = createFileRoute("/excel-online-kurse")({
  component: CoursePage,
  head: () => ({
    meta: [
      { title: "Excel Online Kurse | Excelhero" },
      {
        name: "description",
        content:
          "Excel Online Kurs und Power BI: 9+1 Module, 800+ Lektionen. Excel Experte 599 €, Power BI 399 €, Paket 899 €. 30 Tage Geld-zurück-Garantie.",
      },
    ],
  }),
});

const MODULE_GUIDES: Record<number, { to: string; label: string }> = {
  2: { to: "/funktionen/excel-sverweis", label: "SVERWEIS-Guide" },
  3: { to: "/diagramme", label: "Diagramme-Archiv" },
  4: { to: "/pivot-tabellen/pivot-tabellen-ganz-einfach-erklaert", label: "Pivot-Guide" },
  5: { to: "/makros/excel-makros", label: "Makro-Guide" },
  6: { to: "/power-query/power-query-ganz-einfach-erklaert", label: "Power-Query-Guide" },
  7: { to: "/power-pivot/power-pivot-ganz-einfach-erklaert", label: "Power-Pivot-Guide" },
  8: { to: "/vba/excel-vba", label: "VBA-Guide" },
  10: { to: "/power-bi/power-bi-ganz-einfach-erklaert", label: "Power-BI-Guide" },
};

const CHECKOUT: Record<string, string> = {
  experte: COURSE.checkout.experte,
  powerbi: COURSE.checkout.powerbi,
  bundle: COURSE.checkout.bundle,
};

const HERO_POINTS = [
  "Effizienter Aufgaben erledigen",
  "Prozesse optimieren und automatisieren",
  "Zeit sparen und früher in den Feierabend gehen",
  "Bei Datenaufbereitung, Auswertungen und Reports das volle Potenzial nutzen",
  "Excel sicher beherrschen – bereit für neue berufliche Herausforderungen",
];

function CoursePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-navy text-paper">
        <div className="grid-navy pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-5 py-14 md:py-20">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-excel">
            Excel Online Kurs und Power BI
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-[2.15rem] font-semibold leading-[1.12] tracking-tight sm:text-5xl">
            Excel Online Kurs
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-paper/75">
            Schnell und selbstsicher Excel-Herausforderungen meistern. Ideal für
            datenintensive Bereiche wie Controlling & Buchhaltung.
          </p>
          <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl bg-navy-deep shadow-card ring-1 ring-white/10">
              <div className="aspect-video">
                <iframe
                  src={COURSE_VIDEO}
                  title="Excelhero Online Kurs"
                  className="h-full w-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <div>
              <p className="font-display text-sm font-semibold">Deine Vorteile</p>
              <ul className="mt-4 space-y-2.5">
                {HERO_POINTS.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-snug text-paper/85">
                    <Check className="mt-0.5 size-4 shrink-0 text-excel" strokeWidth={2.4} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="mt-8">
                <a href="#preise">Jetzt zum Excelhero werden</a>
              </Button>
              <p className="mt-3 text-sm text-paper/55">
                Excel Experte 599 € · Power BI 399 € · Paket 899 € · 30 Tage Geld-zurück
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper px-5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Mit diesem Excel-Kurs wirst du …
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="overflow-hidden rounded-xl bg-card shadow-card">
              <img
                src="/images/course/work-smarter.jpg"
                className="h-48 w-full object-cover object-top"
              />
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-ink">
                  Effektiver, effizienter und zeitsparender mit Excel arbeiten
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  Im Schnitt arbeiten meine Kursteilnehmer ca. 7 Stunden pro Woche mit
                  Excel, in einzelnen Fällen 20 Stunden oder mehr – das sind{" "}
                  <strong className="text-ink">zwischen 300 und 900 Stunden pro Jahr</strong>.
                  Durch Funktionen, Pivot, VBA und Power Query erledigst du Aufgaben
                  schneller oder automatisierst sie. So kannst du{" "}
                  <strong className="text-ink">10–30 % deiner Arbeitszeit einsparen</strong>.
                  Wie viele Stunden das bei dir sind, zeigt der{" "}
                  <Link to="/" className="font-semibold text-excel-ink hover:underline">
                    interaktive Rechner auf der Startseite
                  </Link>
                  .
                </p>
              </div>
            </article>
            <article className="overflow-hidden rounded-xl bg-card shadow-card">
              <img
                src="/images/course/earn-more.jpg"
                alt="Mit Excel-Fähigkeiten glänzen"
                className="h-48 w-full object-cover object-top"
              />
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-ink">
                  Mit herausragenden Excel-Fähigkeiten glänzen
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  Jede Woche hast du nur wenige Momente, in denen du vor Kollegen und
                  Chef glänzen kannst – oft mit PowerPoint und Excel. Wenn du dem Team
                  mit Makros jede Woche Stunden sparst, nimmst du das als Argument in
                  die nächste Gehaltsverhandlung. So bringst du Fachexpertise besser
                  zur Geltung und steigerst deinen Marktwert.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-paper-2 px-5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Kursabschnitte
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] text-muted">
            10 Module – vom Einstieg bis Power BI. Jedes Modul hat eigene Lektionen,
            Übungen und ein Zertifikat.
          </p>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((m) => (
              <li key={m.n} className="flex flex-col overflow-hidden rounded-xl bg-card shadow-card">
                <img
                  src={m.image}
                  alt={m.title}
                  className="aspect-[16/9] w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-5">
                  <p className="font-display text-xs font-semibold text-excel-ink">
                    {m.n}) {m.hours} · {m.lessons} Lektionen
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-ink">{m.title}</h3>
                  <p className="mt-1 text-sm font-medium text-ink/80">{m.fullTitle}</p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{m.blurb}</p>
                  <a
                    href={m.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 text-sm font-semibold text-excel-ink hover:underline"
                  >
                    Inhalte im Detail →
                  </a>
                  {MODULE_GUIDES[m.n] ? (
                    <Link
                      to={MODULE_GUIDES[m.n].to}
                      className="mt-1 text-sm text-muted hover:text-excel-ink hover:underline"
                    >
                      {MODULE_GUIDES[m.n].label}
                    </Link>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="preise" className="scroll-mt-24 bg-paper px-5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Jetzt in den Kurs einschreiben
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] text-muted">
            Einmaliger Betrag, zeitlich unbegrenzter Zugriff, 30 Tage
            Geld-zurück-Garantie. Buchung über Digistore24.
          </p>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {PACKAGES.map((pkg) => (
              <PriceCard key={pkg.id} pkg={pkg} href={CHECKOUT[pkg.id]} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-2 px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
              Von überall im selbstbestimmten Tempo lernen
            </h2>
            <ul className="mt-6 space-y-3 text-[15px] text-ink">
              {[
                "On-Demand-Videolektionen – Desktop und Mobilgeräte",
                "Übungsaufgaben, Checklisten und Vorlagen",
                "State-of-the-art Kursplattform (Thinkific)",
                "Kapitel jederzeit nachschlagen, nicht vergessen",
              ].map((item) => (
                <li key={item} className="flex gap-2.5">
                  <Check className="mt-0.5 size-4 shrink-0 text-excel-ink" strokeWidth={2.4} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              Im Gegensatz zu Handbüchern oder Tagesschulungen, deren Inhalte schnell
              verblassen, greifst du jederzeit am PC oder Smartphone auf die Kapitel
              zu – und siehst einzelne Lektionen bei Bedarf noch einmal.
            </p>
          </div>
          <img
            src="/images/course/zertifikat.png"
            alt="Beispiel-Zertifikat Excelhero"
            className="w-full rounded-xl bg-card object-contain shadow-card"
          />
        </div>
      </section>

      <Instructor />

      <section className="bg-paper px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
            Excel sagt mir etwas, aber was ist Power BI?
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted">
            <p>
              Power BI ermöglicht das Aggregieren, Aufbereiten und Visualisieren von
              Unternehmensdaten aus verschiedenen Quellen. Der Fokus liegt auf
              Nutzerfreundlichkeit – fortgeschrittene Excel-Programmierung ist nicht
              nötig.
            </p>
            <p>
              Microsoft Power BI gehört zum Werkzeugkasten vieler Unternehmen in
              Deutschland. Die Technologie zu beherrschen steigert den Marktwert.
              Mit Power BI erstellst du Echtzeit-Reportings für die Steuerung –
              auch als Selbstständige.
            </p>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="bg-paper px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          <TrustCard
            icon={GraduationCap}
            title="Zertifikate für abgeschlossene Module"
            body="Downloadbar als PDF für deinen Lebenslauf."
          />
          <TrustCard
            icon={ShieldCheck}
            title="30 Tage Geld-zurück-Garantie"
            body="Im Gegensatz zu Präsenzschulungen kannst du 30 Tage risikofrei testen. Falls du nicht zufrieden bist, erstattest du den Kauf mit einem Klick über Digistore24."
          />
          <TrustCard
            icon={MessageCircle}
            title="Fragen im Lernforum"
            body="Im kursinternen Forum fragst du zu den Inhalten und bekommst die Antwort direkt von mir – damit du nirgendwo hängen bleibst."
          />
        </div>
      </section>

      <CustomerList />

      <section className="bg-paper px-5 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            FAQ
          </h2>
          <p className="mt-3 text-[15px] text-muted">Hier ein paar häufig gestellte Fragen:</p>
          <Accordion type="single" collapsible className="mt-8">
            {COURSE_FAQ.map((item, i) => (
              <AccordionItem key={item.q} value={`cq-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-excel px-5 py-14 text-navy-deep">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              Wenn du mehr aus Excel herausholen willst …
            </h2>
            <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-navy/80">
              Ganz risikofrei mit der 30-Tage-Geld-zurück-Garantie testen.
            </p>
          </div>
          <Button asChild variant="navy" size="lg">
            <a href="#preise">Jetzt in den Kurs einschreiben</a>
          </Button>
        </div>
      </section>
      <div className="sticky bottom-0 z-30 border-t border-line bg-card/95 px-5 py-3 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <p className="text-sm text-ink">
            Excel Experte <strong>599 €</strong>
            <span className="hidden text-muted sm:inline"> · 30 Tage Geld-zurück</span>
          </p>
          <Button asChild size="sm">
            <a href="#preise">Jetzt buchen</a>
          </Button>
        </div>
      </div>
    </main>
  );
}
