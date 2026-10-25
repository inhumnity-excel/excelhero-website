import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "@/components/layout/hub-page";

export const Route = createFileRoute("/power-bi/")({
  component: HubRoute,
  head: () => ({
    meta: [
      { title: "Power BI | Excelhero" },
      {
        name: "description",
        content: "Power BI – kostenlose Excel-Guides und Themenübersicht von Excelhero.",
      },
    ],
  }),
});

function HubRoute() {
  return <HubPage slug="power-bi" />;
}
