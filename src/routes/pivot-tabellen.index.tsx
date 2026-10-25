import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "@/components/layout/hub-page";

export const Route = createFileRoute("/pivot-tabellen/")({
  component: HubRoute,
  head: () => ({
    meta: [
      { title: "Pivot-Tabellen | Excelhero" },
      {
        name: "description",
        content: "Pivot-Tabellen – kostenlose Excel-Guides und Themenübersicht von Excelhero.",
      },
    ],
  }),
});

function HubRoute() {
  return <HubPage slug="pivot-tabellen" />;
}
