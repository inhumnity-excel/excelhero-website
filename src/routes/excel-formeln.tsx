import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "@/components/layout/hub-page";

export const Route = createFileRoute("/excel-formeln")({
  component: HubRoute,
  head: () => ({
    meta: [
      { title: "Excel Formeln | Excelhero" },
      {
        name: "description",
        content: "Excel Formeln – kostenlose Excel-Guides und Themenübersicht von Excelhero.",
      },
    ],
  }),
});

function HubRoute() {
  return <HubPage slug="excel-formeln" />;
}
