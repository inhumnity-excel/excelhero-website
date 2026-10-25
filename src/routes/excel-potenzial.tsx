import { createFileRoute } from "@tanstack/react-router";
import { ExcelPotenzialPage } from "@/components/restored/landing-pages";

export const Route = createFileRoute("/excel-potenzial")({
  head: () => ({
    meta: [
      { title: 'Excel Potenzial | Excelhero' },
      { name: "description", content: 'Mit diesen Tools automatisierst Du Deine Arbeit! Gibt es bei Dir sich regelmäßig wiederholende Arbeitsabläufe?' },
      { name: "robots", content: 'noindex, follow' },
    ],
  }),
  component: ExcelPotenzialPage,
});
