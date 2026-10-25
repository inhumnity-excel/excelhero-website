import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "@/components/layout/hub-page";

export const Route = createFileRoute("/allgemein/")({
  component: HubRoute,
  head: () => ({
    meta: [
      { title: "Allgemeine Excel-Themen | Excelhero" },
      {
        name: "description",
        content: "Allgemeine Excel-Themen – kostenlose Excel-Guides und Themenübersicht von Excelhero.",
      },
    ],
  }),
});

function HubRoute() {
  return <HubPage slug="allgemein" />;
}
