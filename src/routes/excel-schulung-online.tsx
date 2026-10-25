import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { OfferSales } from "@/components/course/offer-sales";
import { COURSE_FAQ, MODULES, PACKAGES } from "@/lib/course";
import { COURSE } from "@/lib/content";
import { SCHULUNG_ADVANTAGES } from "@/lib/offers";

export const Route = createFileRoute("/excel-schulung-online")({
  component: SchulungPage,
  head: () => ({
    meta: [
      { title: "Excel Online Schulung | Excelhero" },
      {
        name: "description",
        content:
          "On-Demand Excel-Schulung für Teams: skalierbar, ohne Information Overload, 30 Tage Geld-zurück. Excel Experte 599 €, Power BI 399 €, Paket 899 €.",
      },
    ],
  }),
});

const CHECKOUT: Record<string, string> = {
  experte: COURSE.checkout.experte,
  powerbi: COURSE.checkout.powerbi,
  bundle: COURSE.checkout.bundle,
};

function SchulungPage() {
  return (
    <OfferSales
      kicker="Excel Online Schulung"
      title="On-Demand Excel Training + Nachschlagewerk"
      lead="Sofort bereit und ohne Information Overload. Für neue Mitarbeiter, bestehende Teams und mehrere Standorte."
      heroPoints={[
        "Neue Mitarbeiter mit Excel vertraut machen",
        "Excel-Fähigkeiten bestehender Mitarbeiter ausbauen, Prozesse beschleunigen",
        "Skalierbares Training an unterschiedlichen Standorten – jederzeit als Nachschlagewerk",
      ]}
      ctaLabel="Jetzt zur Kursauswahl"
      benefitsTitle="Mit dieser Excel-Schulung werden Ihre Kollegen …"
      benefits={[
        {
          title: "Effektiver, effizienter und zeitsparender mit Excel arbeiten",
          image: "/images/course/work-smarter.jpg",
          body: (
            <>
              Im Schnitt arbeiten Kursteilnehmer ca. 7 Stunden pro Woche mit Excel,
              in einzelnen Fällen 20 Stunden oder mehr – das sind{" "}
              <strong className="text-ink">zwischen 300 und 900 Stunden pro Jahr</strong>.
              Mit Funktionen, Pivot, VBA und Power Query lassen sich{" "}
              <strong className="text-ink">10–30 % der Arbeitszeit einsparen</strong>.
              Stunden pro Mitarbeiter zeigt der{" "}
              <Link to="/" className="font-semibold text-excel-ink hover:underline">
                interaktive Rechner
              </Link>
              .
            </>
          ),
        },
        {
          title: "Ohne Reisekosten und ohne Überbuchung der Kalender",
          image: "/images/course/earn-more.jpg",
          body: (
            <>
              Präsenzschulungen mit vergleichbarem Umfang kosten rund 10.000 € pro
              Mitarbeiter. Hier starten Sie bei Zusage noch am selben Tag – Zugänge
              werden direkt angelegt, Abrechnung über PayPal, Karte, Vorkasse oder
              Rechnung.
            </>
          ),
        },
      ]}
      extraSection={
        <section className="bg-paper-2 px-5 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Vorteile gegenüber traditionellen Präsenzschulungen
            </h2>
            <ul className="mt-8 grid gap-3 md:grid-cols-2">
              {SCHULUNG_ADVANTAGES.map((item) => (
                <li key={item} className="flex gap-2.5 rounded-xl bg-card p-4 text-sm text-ink shadow-card">
                  <Check className="mt-0.5 size-4 shrink-0 text-excel-ink" strokeWidth={2.4} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      }
      modules={MODULES}
      modulesLead="Dieselben 10 Module wie im Excel-Online-Kurs – für Einzelpersonen und Teams."
      packages={PACKAGES.map((pkg) => ({ ...pkg, href: CHECKOUT[pkg.id] }))}
      instructor={{
        name: "Daniel Kogan",
        role: "Excel-Experte & Online-Trainer",
        photo: "/images/daniel-kogan.jpg",
        alt: "Daniel Kogan, Excel-Experte und Online-Trainer",
        bio: [
          "Die Schulung wird von mir unterrichtet. Du und dein Team profitieren von der Erfahrung als Analyst, Chief Data Officer und selbstständiger Excel-Experte.",
          "Fragen zu den Inhalten stellt ihr im Lernforum oder per E-Mail – auch Monate nach der Buchung.",
        ],
      }}
      faq={COURSE_FAQ}
      closingTitle="Wenn Ihnen und Ihrer Organisation schnelles Arbeiten mit Excel wichtig ist …"
      showCustomers
      showTestimonials
    />
  );
}
