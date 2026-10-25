import { createFileRoute } from "@tanstack/react-router";
import { WebinarPivotDateienPage } from "@/components/restored/landing-pages";

export const Route = createFileRoute("/webinar-pivot-dateien")({
  head: () => ({
    meta: [
      { title: 'Excel Pivot-Tabellen Training Dateien | Excelhero' },
      { name: "description", content: 'Vielen Dank für Deine Anmeldung!' },
      { name: "robots", content: 'noindex, follow' },
    ],
  }),
  component: WebinarPivotDateienPage,
});
