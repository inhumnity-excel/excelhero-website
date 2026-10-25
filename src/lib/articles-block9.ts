import type { Article } from "./articles";

export const BLOCK9_EXTRAS: Article[] = [
  {
    slug: "power-bi-vs-excel",
    title: "Power BI vs. Excel – ein Vergleich",
    kicker: "Power BI",
    category: "Power BI",
    hubPath: "/power-bi",
    path: "/power-bi/power-bi-vs-excel",
    excerpt:
      "Wann Excel reicht, wann Power BI die bessere Bühne ist – und warum die beiden zusammengehören, nicht gegeneinander.",
    image: "/images/course/power-bi.png",
    readMinutes: 7,
    body: [
      {
        heading: "Gleiche Familie, andere Aufgabe",
        paragraphs: [
          "Excel ist die Werkbank: modellieren, rechnen, ad hoc. Power BI ist die Bühne: interaktive Berichte für viele Leser, mit Row-Level-Security, Apps und automatischer Aktualisierung. Query und DAX sind in beiden verwandt – wer Power Query und Power Pivot kann, ist in Desktop schnell zuhause.",
        ],
      },
      {
        heading: "Wann Excel",
        paragraphs: [
          "Eine Datei, wenige Nutzer, der Bericht ist die Analyse. Forecasts mit Zielwertsuche, Szenarien, Kommentare in Zellen, einmalige Auswertungen. Lizenz: oft schon da.",
        ],
      },
      {
        heading: "Wann Power BI",
        paragraphs: [
          "Viele Leser, mehrere Quellen, der Bericht soll geklickt statt kopiert werden. Gateways, geplante Aktualisierung, Apps im Service. Visuals, Leseansicht, Handy. Excel bleibt die Quelle oder das What-if – Power BI die Verteilung.",
        ],
      },
    ],
  },
  {
    slug: "automatisieren-registerkarte",
    title: "Automatisieren-Registerkarte",
    kicker: "Office Script",
    category: "Office Script",
    hubPath: "/office-script",
    path: "/office-script/automatisieren-registerkarte",
    excerpt:
      "Wo Office Scripts in Excel im Web sitzen: aufzeichnen, ausführen, mit Power Automate verbinden.",
    image: "/images/workspace-night.jpg",
    readMinutes: 4,
    body: [
      {
        heading: "Wo du sie findest",
        paragraphs: [
          "In Excel für das Web (Microsoft 365) erscheint das Register Automatisieren, sobald Office Scripts in der Organisation erlaubt sind. Skript aufzeichnen, Skript-Editor, Skripte der Arbeitsmappe.",
        ],
      },
      {
        heading: "Was du damit machst",
        paragraphs: [
          "Abläufe aufzeichnen wie ein Makro, den TypeScript-Code anpassen, per Schaltfläche oder über Power Automate zeitgesteuert starten. VBA-Makros laufen hier nicht – das ist die Cloud-Variante, speicherbar in OneDrive.",
        ],
      },
    ],
  },
  {
    slug: "kryptowaehrungen-in-excel",
    title: "Kryptowährungen in Excel",
    kicker: "Office Script",
    category: "Office Script",
    hubPath: "/office-script",
    path: "/office-script/kryptowaehrungen-in-excel",
    excerpt:
      "Kurse per Datentyp Aktien oder per Skript/API in die Mappe holen – und warum das keine Anlageberatung ist.",
    image: "/images/workspace-night.jpg",
    readMinutes: 5,
    body: [
      {
        heading: "Datentyp und Kurs",
        paragraphs: [
          "Unter Daten → Datentypen gibt es bei Microsoft 365 Aktien; einige Krypto-Ticker werden erkannt. Felder wie Preis, Zeit in Nachbarspalten ziehen. Alternative: Office Script oder Power Query gegen eine öffentliche API, dann Aktualisieren.",
        ],
      },
      {
        heading: "Grenzen",
        paragraphs: [
          "Kurse sind verzögert, Ticker-Namen nicht einheitlich, APIs ändern sich. Für ein Portfolio-Tracking reicht Excel – für Orders und Steuer nicht. Keine Anlageberatung, nur die Technik.",
        ],
      },
    ],
  },
  {
    slug: "excel-objektmodell",
    title: "Excel-Objektmodell",
    kicker: "VBA",
    category: "VBA",
    hubPath: "/vba",
    path: "/vba/excel-objektmodell",
    excerpt:
      "Application → Workbooks → Worksheets → Range: die Hierarchie, ohne die VBA-Code zufällig wirkt.",
    image: "/images/workspace-night.jpg",
    readMinutes: 8,
    body: [
      {
        heading: "Die Kette",
        paragraphs: [
          "Excel ist kein Haufen Zellen, sondern Objekte ineinander. Ganz oben Application (Excel selbst), darin Workbooks, darin Worksheets, darauf Range. Wer ThisWorkbook.Worksheets(\"Plan\").Range(\"B2\").Value schreibt, sagt den Weg laut – und der Code überlebt, wenn ein anderes Blatt aktiv ist.",
        ],
      },
      {
        heading: "Application, Workbook, Worksheet",
        paragraphs: [
          "Application.ScreenUpdating = False beschleunigt Schleifen. Workbooks(\"Datei.xlsx\") vs. ThisWorkbook (die Datei mit dem Code) vs. ActiveWorkbook (was gerade vorn ist). Worksheets(\"Name\") ist stabiler als Sheets(1). Codename im Projekt-Explorer bleibt, wenn der User das Register umbenennt.",
        ],
      },
      {
        heading: "Range und Cells",
        paragraphs: [
          "Range(\"A1:B10\"), Cells(Zeile, Spalte), Resize, Offset, CurrentRegion. Value2 ist schneller als Value (keine Währung/Datum-Objekte). Loops über Zellen sind langsam – lieber ein Array: data = Range(\"A1:C1000\").Value2, dann zurückschreiben. With … End With spart Wiederholung.",
        ],
      },
      {
        heading: "Objekte setzen, nicht aktivieren",
        paragraphs: [
          "Select und Activate sind der Recorder, nicht der Alltag. Dim ws As Worksheet: Set ws = ThisWorkbook.Worksheets(\"Plan\") – danach ws.Range(…). Exceptions: UserForms und Chart-Sheets brauchen oft den Fokus. Fehler: On Error nur gezielt, nicht global leer.",
        ],
      },
    ],
  },
];
