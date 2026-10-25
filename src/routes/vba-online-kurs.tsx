import { createFileRoute, Link } from "@tanstack/react-router";
import { OfferSales } from "@/components/course/offer-sales";
import {
  VBA_FAQ,
  VBA_INSTRUCTOR,
  VBA_MODULES,
  VBA_PACKAGES,
} from "@/lib/offers";

export const Route = createFileRoute("/vba-online-kurs")({
  component: VbaPage,
  head: () => ({
    meta: [
      { title: "VBA Online Kurs | Excelhero" },
      {
        name: "description",
        content:
          "Praxiskurs Excel VBA: Von der Idee zur fertigen ERP-Anwendung. Basis 450 €, Premium 530 €. Partnerkurs von vbatrainer.de.",
      },
    ],
  }),
});

function VbaPage() {
  return (
    <OfferSales
      kicker="Projekte mit Excel VBA"
      title="Excel VBA Online Kurs"
      lead="Praxiskurs für Fortgeschrittene: Von der Idee schrittweise zur fertigen VBA-Anwendung."
      heroPoints={[
        "Grundlegende Programmier- und Projektmanagementkenntnisse",
        "Gemeinsam ein ERP-Tool: Kunden, Aufträge, Rechnungen, Ausgaben, Dashboard",
        "Am Ende ein fertiges Tool, das du an deine Bedürfnisse anpasst",
      ]}
      ctaLabel="Jetzt zum VBA-Hero werden"
      video="https://player.vimeo.com/video/767555422?portrait=0&title=0&byline=0&color=6fb83a"
      videoTitle="Projekte mit Excel VBA"
      benefitsTitle="Mit diesem VBA-Kurs wirst du …"
      benefits={[
        {
          title: "VBA-Projekte auf das nächste Level bringen",
          image: "/images/course/work-smarter.jpg",
          body: (
            <>
              Im Schnitt arbeiten meine Kursteilnehmer ca. 5 Stunden pro Woche mit
              VBA, in einzelnen Fällen 20 Stunden oder mehr – das sind{" "}
              <strong className="text-ink">zwischen 200 und 500 Stunden pro Jahr</strong>.
              Einmal aufgesetzte VBA-Tools automatisieren Prozesse. So kannst du{" "}
              <strong className="text-ink">10–25 % deiner Arbeitszeit einsparen</strong>.
              Der{" "}
              <Link to="/" className="font-semibold text-excel-ink hover:underline">
                Rechner auf der Startseite
              </Link>{" "}
              zeigt, wie viele Stunden das bei dir sind.
            </>
          ),
        },
        {
          title: "Mit herausragenden VBA-Fähigkeiten glänzen",
          image: "/images/course/earn-more.jpg",
          body: (
            <>
              Mit ausgearbeiteten VBA-Tools erarbeitest du dir den Ruf als
              Excel-Experte. Prozesse laufen unkomplizierter und weniger
              fehleranfällig – ohne extra eingekaufte Software. Die Ersparnis nimmst
              du in die Gehaltsverhandlung mit.
            </>
          ),
        },
      ]}
      modules={VBA_MODULES}
      modulesLead="Ein durchgängiges ERP-Projekt, plus drei Boni im Premium-Paket."
      packages={VBA_PACKAGES}
      instructor={VBA_INSTRUCTOR}
      faq={VBA_FAQ}
      closingTitle="Wenn du VBA-Projekte auf das nächste Level bringen willst …"
      showTestimonials
    />
  );
}
