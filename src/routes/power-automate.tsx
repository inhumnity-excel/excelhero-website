import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "@/components/layout/hub-page";

export const Route = createFileRoute("/power-automate")({
  component: HubRoute,
  head: () => ({
    meta: [
      { title: "Power Automate | Excelhero" },
      {
        name: "description",
        content: "Power Automate – kostenlose Excel-Guides und Themenübersicht von Excelhero.",
      },
    ],
  }),
});

function HubRoute() {
  return <HubPage slug="power-automate" />;
}
