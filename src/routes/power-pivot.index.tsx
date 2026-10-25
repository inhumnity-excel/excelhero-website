import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "@/components/layout/hub-page";

export const Route = createFileRoute("/power-pivot/")({
  component: HubRoute,
  head: () => ({
    meta: [
      { title: "Power Pivot | Excelhero" },
      {
        name: "description",
        content: "Power Pivot – kostenlose Excel-Guides und Themenübersicht von Excelhero.",
      },
    ],
  }),
});

function HubRoute() {
  return <HubPage slug="power-pivot" />;
}
