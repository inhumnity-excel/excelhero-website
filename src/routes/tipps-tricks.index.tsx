import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "@/components/layout/hub-page";

export const Route = createFileRoute("/tipps-tricks/")({
  component: HubRoute,
  head: () => ({
    meta: [
      { title: "Excel Tipps und Tricks | Excelhero" },
      {
        name: "description",
        content: "Excel Tipps und Tricks – kostenlose Excel-Guides und Themenübersicht von Excelhero.",
      },
    ],
  }),
});

function HubRoute() {
  return <HubPage slug="tipps-tricks" />;
}
