import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "@/components/layout/hub-page";

export const Route = createFileRoute("/chatgpt-und-excel")({
  component: HubRoute,
  head: () => ({
    meta: [
      { title: "ChatGPT und Excel | Excelhero" },
      {
        name: "description",
        content: "ChatGPT und Excel – kostenlose Excel-Guides und Themenübersicht von Excelhero.",
      },
    ],
  }),
});

function HubRoute() {
  return <HubPage slug="chatgpt-und-excel" />;
}
