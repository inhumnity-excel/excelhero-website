import { createFileRoute } from "@tanstack/react-router";
import { DatenZugriffPage } from "@/components/restored/landing-pages";

export const Route = createFileRoute("/datenzugriffsanfrage")({
  head: () => ({
    meta: [
      { title: 'Datenzugriffsanfrage | Excelhero' },
      { name: "description", content: 'Mit diesem Formular können Sie eine Anfrage auf ihre Daten bei excelhero.de stellen.' },
      { name: "robots", content: 'noindex, nofollow' },
    ],
  }),
  component: DatenZugriffPage,
});
