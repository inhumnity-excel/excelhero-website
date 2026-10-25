import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "@/components/layout/hub-page";

export const Route = createFileRoute("/power-query/")({
  component: HubRoute,
  head: () => ({
    meta: [
      { title: "Power Query | Excelhero" },
      {
        name: "description",
        content: "Power Query – kostenlose Excel-Guides und Themenübersicht von Excelhero.",
      },
    ],
  }),
});

function HubRoute() {
  return <HubPage slug="power-query" />;
}
