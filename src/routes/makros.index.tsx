import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "@/components/layout/hub-page";

export const Route = createFileRoute("/makros/")({
  component: HubRoute,
  head: () => ({
    meta: [
      { title: "Excel-Makros | Excelhero" },
      {
        name: "description",
        content: "Excel-Makros – kostenlose Excel-Guides und Themenübersicht von Excelhero.",
      },
    ],
  }),
});

function HubRoute() {
  return <HubPage slug="makros" />;
}
