import type { Article } from "./articles";

export const BLOCK7_EXTRAS: Article[] = [
  {
    slug: "zeitfresser",
    title: "Zeitfresser bei der Arbeit",
    kicker: "Tipps & Tricks",
    category: "Tipps & Tricks",
    hubPath: "/tipps-tricks",
    path: "/tipps-tricks/zeitfresser",
    excerpt:
      "Wo im Excel-Alltag Stunden liegen: Copy & Paste zwischen Dateien, händisches Formatieren, Reports, die niemand liest.",
    image: "/images/workspace-night.jpg",
    readMinutes: 6,
    body: [
      {
        heading: "Die teuren Minuten",
        paragraphs: [
          "Die meisten Kursteilnehmer sitzen nicht an einer schweren Formel, sondern an Wiederholung: CSV öffnen, Spalten zurechtschieben, Filter klicken, Screenshot ins Mail. Sieben Stunden Excel pro Woche, ein Großteil davon ohne neues Ergebnis.",
        ],
      },
      {
        heading: "Was du ersetzen kannst",
        paragraphs: [
          "Import: Power Query statt Öffnen-und-Ziehen. Auswertung: Pivot statt SUMMEWENN-Wüste. Layout: Tabelle (Strg+T) und Formatvorlagen statt jeder Zelle einzeln. Versand: PDF aus der Mappe, nicht drei Screenshots.",
          "Bevor du automatisierst: die Aufgabe stoppen, die niemand braucht. Dann die, die wöchentlich kommt. Dann erst VBA.",
        ],
      },
    ],
  },
  {
    slug: "pivot-tabelle-formatierungen",
    title: "Pivot-Tabelle Formatierung",
    kicker: "Pivot",
    category: "Pivot-Tabellen",
    hubPath: "/pivot-tabellen",
    path: "/pivot-tabellen/pivot-tabelle-formatierungen",
    excerpt:
      "Zahlenformat, Layout, leere Zellen, Gesamtergebnis – Formatierungen, die beim Aktualisieren halten.",
    image: "/images/course/pivot.jpg",
    readMinutes: 5,
    body: [
      {
        heading: "Überblick",
        paragraphs: [
          "Pivot-Format sitzt am Pivot-Objekt, nicht an den Zellen. Deshalb bleibt es nach dem Aktualisieren – wenn du nicht die Zellen, sondern Pivot-Optionen und Wertfeld-Einstellungen nutzt.",
        ],
      },
      {
        heading: "Was du einstellen solltest",
        paragraphs: [
          "Wertfeld: Zahlenformat (Währung, Prozent) über Wertfeldeinstellungen, nicht Strg+1 auf der Zelle. PivotTable-Optionen: leere Zellen durch 0 oder leer, Gesamtergebnisse an/aus, Autofit beim Aktualisieren abschalten. Entwurf: Berichtslayout (tabular), Wiederholen der Elementbeschriftung, leere Zeilen.",
        ],
      },
    ],
  },
  {
    slug: "pivot-tabelle-summiert-nicht-und-zeigt-nur-anzahl-an",
    title: "Pivot-Tabelle summiert nicht – nur Anzahl",
    kicker: "Pivot",
    category: "Pivot-Tabellen",
    hubPath: "/pivot-tabellen",
    path: "/pivot-tabellen/pivot-tabelle-summiert-nicht-und-zeigt-nur-anzahl-an",
    excerpt:
      "Der Klassiker: Umsatz landet als Anzahl der Werte. Meist ist die Spalte Text, nicht Zahl.",
    image: "/images/course/pivot.jpg",
    readMinutes: 4,
    body: [
      {
        heading: "Ursache",
        paragraphs: [
          "Excel zählt, wenn sie in der Spalte Text sieht – Importe, Apostroph, Leerzeichen, gemischte Zellen. Pivot nimmt dann „Anzahl“ statt „Summe“.",
        ],
      },
      {
        heading: "Fix",
        paragraphs: [
          "Quelle: Text in Spalten oder =WERT(), Power Query Datentyp Zahl. In der Pivot: Wertfeld → Wertfeldeinstellungen → Summe. Einmalig reicht nicht, wenn die Quelle Text bleibt – nach dem nächsten Aktualisieren ist wieder Anzahl da. Deshalb die Quelle reparieren.",
        ],
      },
    ],
  },
  {
    slug: "pivot-tabellen-layout",
    title: "Pivot-Tabellen-Layout",
    kicker: "Pivot",
    category: "Pivot-Tabellen",
    hubPath: "/pivot-tabellen",
    path: "/pivot-tabellen/pivot-tabellen-layout",
    excerpt:
      "Kompakt, Gliederung, tabular – und Beschriftungen wiederholen, damit du filtern und SVERWEIS darauf setzen kannst.",
    image: "/images/course/pivot.jpg",
    readMinutes: 5,
    body: [
      {
        heading: "Die drei Layouts",
        paragraphs: [
          "Kompakt: alles in einer Spalte, wenig Breite. Gliederung: Felder untereinander, Einzug. Tabular: jedes Feld eine Spalte – das Layout für Exporte und weiterführende Formeln.",
        ],
      },
      {
        heading: "Einstellungen",
        paragraphs: [
          "Entwurf → Berichtslayout. Elementbeschriftungen wiederholen füllt die leeren Zellen in der Gruppe. Zwischenergebnisse aus, wenn die Pivot nur eine Datenquelle für eine zweite Auswertung ist. Keine zusammengeführten Zellen in der Quelle.",
        ],
      },
    ],
  },
  {
    slug: "zeitachse",
    title: "Zeitachse",
    kicker: "Pivot",
    category: "Pivot-Tabellen",
    hubPath: "/pivot-tabellen",
    path: "/pivot-tabellen/zeitachse",
    excerpt:
      "Der Datenschnitt fürs Datum: Jahre, Quartale, Monate auf einer Leiste, verbunden mit der Pivot.",
    image: "/images/course/pivot.jpg",
    readMinutes: 4,
    body: [
      {
        heading: "Überblick",
        paragraphs: [
          "Einfügen → Zeitachse, sobald eine Pivot ein Datumsfeld hat. Du wählst die Granularität (Jahre bis Tage) und einen Bereich.",
        ],
      },
      {
        heading: "Konfigurieren",
        paragraphs: [
          "Zeitachse-Register: Berichtverbindungen zu mehreren Pivots, Beschriftung, Stil. Die Quellspalte muss ein echtes Datum sein, nicht Text. Zusammen mit Datenschnitten: Zeit auf der Achse, Region auf dem Slicer.",
        ],
      },
    ],
  },
];
