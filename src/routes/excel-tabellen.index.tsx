import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "@/components/layout/hub-page";

export const Route = createFileRoute("/excel-tabellen/")({
  component: HubRoute,
  head: () => ({
    meta: [
      { title: "Excel-Tabellen | Excelhero" },
      {
        name: "description",
        content: "Excel-Tabellen – kostenlose Excel-Guides und Themenübersicht von Excelhero.",
      },
    ],
  }),
});

function HubRoute() {
  return <HubPage slug="excel-tabellen" />;
}
