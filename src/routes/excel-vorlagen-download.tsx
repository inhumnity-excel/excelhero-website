import { createFileRoute } from "@tanstack/react-router";
import { ExcelVorlagenDownloadPage } from "@/components/restored/landing-pages";

export const Route = createFileRoute("/excel-vorlagen-download")({
  head: () => ({
    meta: [
      { title: 'Excel Vorlagen Download | Excelhero' },
      { name: "description", content: 'Es handelt sich um 2 Excel-Dateien zu einer ZIP-Datei gepackt. 1) Diagramm und Kartenvorlagen 2) Funktionen: Anwendungsbeispiele und Übungsaufgaben' },
      { name: "robots", content: 'noindex, follow' },
    ],
  }),
  component: ExcelVorlagenDownloadPage,
});
