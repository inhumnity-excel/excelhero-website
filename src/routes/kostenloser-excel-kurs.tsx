import { createFileRoute } from "@tanstack/react-router";
import { KostenloserExcelKursPage } from "@/components/restored/landing-pages";

export const Route = createFileRoute("/kostenloser-excel-kurs")({
  head: () => ({
    meta: [
      { title: 'Kostenloser Excel Kurs | Excelhero' },
      { name: "description", content: 'Mit Excel Online Kursen durchstarten und jede Menge Zeit bei der Arbeit einsparen. Mit diesen Excel Tools wirst Du in kürzester Zeit zum Excelhero. Pivots..' },
      { name: "robots", content: 'noindex, follow' },
    ],
  }),
  component: KostenloserExcelKursPage,
});
