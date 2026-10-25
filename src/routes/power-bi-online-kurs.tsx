import { createFileRoute, Link } from "@tanstack/react-router";
import { OfferSales } from "@/components/course/offer-sales";
import {
  PBI_FAQ,
  PBI_INSTRUCTOR,
  PBI_MODULES,
  PBI_PACKAGES,
} from "@/lib/offers";

export const Route = createFileRoute("/power-bi-online-kurs")({
  component: PowerBiPage,
  head: () => ({
    meta: [
      { title: "Power BI Online Kurs | Excelhero" },
      {
        name: "description",
        content:
          "Power BI Masterclass + DAX 399 €, SQL 299 €, Paket 579 €. On-Demand von data-science-academy.com, 30 Tage Geld-zurück-Garantie.",
      },
    ],
  }),
});

function PowerBiPage() {
  return (
    <OfferSales
      kicker="Power BI Online Kurs"
      title="Power BI Online Kurs"
      lead="Schnell und selbstsicher Power-BI-Herausforderungen meistern. Ideal für datenintensive Bereiche wie Controlling & Buchhaltung."
      heroPoints={[
        "Professionelle Berichte anhand praxisorientierter Projekte erstellen",
        "Bei Datenaufbereitung, Auswertungen und Reports das volle Potenzial nutzen",
        "Power BI sicher beherrschen – bereit für neue berufliche Herausforderungen",
      ]}
      ctaLabel="Jetzt zum Power-BI-Hero werden"
      video="https://player.vimeo.com/video/664326133?portrait=0&title=0&byline=0&color=6fb83a"
      videoTitle="Power BI Masterclass"
      benefitsTitle="Mit diesem Power-BI-Kurs wirst du …"
      benefits={[
        {
          title: "Effektiver, effizienter und zeitsparender mit Power BI arbeiten",
          image: "/images/course/work-smarter.jpg",
          body: (
            <>
              Im Schnitt arbeiten meine Kursteilnehmer ca. 5 Stunden pro Woche mit
              Power BI, in einzelnen Fällen 20 Stunden oder mehr – das sind{" "}
              <strong className="text-ink">zwischen 200 und 500 Stunden pro Jahr</strong>.
              Durch Dashboards automatisierst du Reportingaufgaben. So kannst du{" "}
              <strong className="text-ink">10–25 % deiner Arbeitszeit einsparen</strong>.
              Wie viele Stunden das bei dir sind, zeigt der{" "}
              <Link to="/" className="font-semibold text-excel-ink hover:underline">
                interaktive Rechner auf der Startseite
              </Link>
              .
            </>
          ),
        },
        {
          title: "Mit herausragenden Power-BI-Fähigkeiten glänzen",
          image: "/images/course/earn-more.jpg",
          body: (
            <>
              Jede Woche hast du nur wenige Momente, in denen du vor Kollegen und
              Chef glänzen kannst. Jeder Chef freut sich über starke Dashboards:
              Einsichten und Entscheidungsgrundlagen, die Kosten senken und Umsatz
              steigern – ein Argument für die nächste Gehaltsverhandlung.
            </>
          ),
        },
      ]}
      modules={PBI_MODULES}
      modulesLead="Power BI, DAX, SQL – und Cloud-Themen auf Anfrage."
      packages={PBI_PACKAGES}
      instructor={PBI_INSTRUCTOR}
      faq={PBI_FAQ}
      closingTitle="Wenn du mehr aus Power BI herausholen willst …"
      showCustomers
      showTestimonials
      whatIs={{
        title: "Excel sagt mir etwas, aber was ist Power BI?",
        paragraphs: [
          "Power BI aggregiert, bereitet auf und visualisiert Unternehmensdaten aus verschiedenen Quellen. Der Fokus liegt auf Nutzerfreundlichkeit – fortgeschrittene Excel-Programmierung ist nicht nötig.",
          "Microsoft Power BI gehört zum Werkzeugkasten vieler Unternehmen. Die Technologie zu beherrschen steigert den Marktwert. Mit Power BI erstellst du Echtzeit-Reportings für die Steuerung.",
        ],
      }}
    />
  );
}
