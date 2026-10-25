import { createFileRoute } from "@tanstack/react-router";
import { ExcelKombinationVideoPage } from "@/components/restored/landing-pages";

export const Route = createFileRoute("/excel-kombination-video")({
  head: () => ({
    meta: [
      { title: 'Excel Kombination Video | Excelhero' },
      { name: "description", content: 'Wie du das Maximum aus Excel herausholst und dir massiv viel Zeit einsparst...' },
      { name: "robots", content: 'noindex, follow' },
    ],
  }),
  component: ExcelKombinationVideoPage,
});
