import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "@/components/layout/hub-page";

export const Route = createFileRoute("/office-script/")({
  component: HubRoute,
  head: () => ({
    meta: [
      { title: "Office Script | Excelhero" },
      {
        name: "description",
        content: "Office Script – kostenlose Excel-Guides und Themenübersicht von Excelhero.",
      },
    ],
  }),
});

function HubRoute() {
  return <HubPage slug="office-script" />;
}
