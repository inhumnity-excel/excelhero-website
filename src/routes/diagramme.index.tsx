import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "@/components/layout/hub-page";

export const Route = createFileRoute("/diagramme/")({
  component: HubRoute,
  head: () => ({
    meta: [
      { title: "Excel Diagramme | Excelhero" },
      {
        name: "description",
        content: "Excel Diagramme – kostenlose Excel-Guides und Themenübersicht von Excelhero.",
      },
    ],
  }),
});

function HubRoute() {
  return <HubPage slug="diagramme" />;
}
