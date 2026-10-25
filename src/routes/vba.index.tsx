import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "@/components/layout/hub-page";

export const Route = createFileRoute("/vba/")({
  component: HubRoute,
  head: () => ({
    meta: [
      { title: "Excel VBA | Excelhero" },
      {
        name: "description",
        content: "Excel VBA – kostenlose Excel-Guides und Themenübersicht von Excelhero.",
      },
    ],
  }),
});

function HubRoute() {
  return <HubPage slug="vba" />;
}
