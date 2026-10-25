import { ALLGEMEIN_ARTICLES } from "./articles-allgemein";
import { BLOCK7_EXTRAS } from "./articles-block7";
import { BLOCK9_EXTRAS } from "./articles-block9";
import { DIAGRAMME_ARTICLES } from "./articles-diagramme";
import { FLAGSHIP_ARTICLES } from "./articles-flagship";
import { FORMELN_ARTICLES } from "./articles-formeln";
import { FORMELN_ARTICLES_2 } from "./articles-formeln-2";
import { FUNKTIONEN_ARTICLES } from "./articles-funktionen";
import { POWER_QUERY_ARTICLES } from "./articles-power-query";
import { FUNCTIONS } from "./excel-data";
import originalPosts from "@/data/original-posts.json";

type OriginalPost = {
  slug: string;
  path: string;
  title: string;
  excerpt: string;
  image: string;
  html: string;
  embeds: string[];
};

const ORIGINAL = originalPosts as Record<string, OriginalPost>;

function wordsFromHtml(html: string) {
  return html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
}

function applyOriginal(a: Article): Article {
  const o =
    ORIGINAL[a.slug] ?? Object.values(ORIGINAL).find((x) => x.path === a.path);
  if (!o?.html) return a;
  const words = wordsFromHtml(o.html);
  return {
    ...a,
    title: o.title || a.title,
    excerpt: o.excerpt || a.excerpt,
    image: o.image || a.image,
    html: o.html,
    readMinutes: Math.max(a.readMinutes, Math.round(words / 180) || a.readMinutes),
  };
}

export type ArticleLink = { to: string; label: string };
export type ArticleImage = { src: string; alt: string; caption?: string };
export type ArticleFile = { href: string; label: string };

export type ArticleSection = {
  heading?: string;
  paragraphs: string[];
  steps?: string[];
  links?: ArticleLink[];
  images?: ArticleImage[];
  files?: ArticleFile[];
};

export type Article = {
  slug: string;
  title: string;
  kicker: string;
  excerpt: string;
  image: string;
  category: string;
  hubPath?: string;
  path?: string;
  related?: string[];
  files?: ArticleFile[];
  html?: string;
  readMinutes: number;
  body: ArticleSection[];
};

export const ARTICLES: Article[] = [
  {
    slug: "sverweis",
    title: "SVERWEIS ganz einfach erklärt",
    kicker: "Funktionen",
    category: "Funktionen",
    hubPath: "/excel-funktionen",
    path: "/funktionen/excel-sverweis",
    excerpt:
      "Sich den SVERWEIS zu merken und sicher anzuwenden ist gar nicht so einfach – vor allem bei so vielen komplizierten Anleitungen. Oder vielleicht doch?",
    related: [
      "sverweis-nach-links",
      "sverweis-mit-mehreren-suchkriterien",
      "excel-xverweis-funktion",
      "power-query-sverweis-wverweis-xverweis-index",
    ],
    image: "/images/guides/sverweis/cafe.jpg",
    files: [{ href: "/files/sverweis-beispieldatei.xlsx", label: "SVERWEIS-Beispieldatei (.xlsx)" }],
    readMinutes: 12,
    body: [
      {
        paragraphs: [
          "Der SVERWEIS (englisch VLOOKUP) sucht in der ersten Spalte eines Bereichs nach einem Wert und gibt einen Wert aus einer Spalte rechts daneben zurück. Genau das brauchst du ständig: Artikelnummern zu Preisen, Personalnummern zu Namen, Kundencodes zu Regionen.",
        ],
        images: [
          {
            src: "/images/guides/sverweis/cafe.jpg",
            alt: "Café-Beispiel: Preisliste und Bestellung",
            caption: "Alltagsbeispiel aus dem Original-Guide: Getränk suchen, Preis zurückgeben.",
          },
        ],
      },
      {
        heading: "Syntax",
        paragraphs: ["SVERWEIS(Suchkriterium; Matrix; Spaltenindex; [Bereich_Verweis])"],
      },
      {
        heading: "Die vier Argumente",
        paragraphs: [
          "Suchkriterium ist der Wert, den du finden willst – oft eine Zellenreferenz wie A2. Matrix ist die Tabelle, in der gesucht wird. Wichtig: Die Suchspalte muss die erste Spalte dieser Matrix sein. Spaltenindex ist eine Zahl: 1 = Suchspalte selbst, 2 = die Spalte rechts daneben, und so weiter. Bereich_Verweis ist FALSCH für eine exakte Suche – und das willst du in 95 % der Fälle.",
          "Ein Klassiker: =SVERWEIS(A2; Preise!A:C; 3; FALSCH) holt aus dem Blatt Preise die dritte Spalte zur Artikelnummer in A2.",
        ],
        steps: [
          "Lege die Stammdaten so an, dass der Suchschlüssel ganz links steht (Artikelnummer, Personalnummer, SKU).",
          "Schreibe die Formel neben die Bewegungsdaten, nicht in die Stammdaten.",
          "Zieh die Formel nach unten. Die Matrix absolut machen ($A$2:$C$500 oder besser eine Excel-Tabelle), das Suchkriterium relativ lassen.",
          "Prüfe drei Zeilen per Auge, bevor du dem Blatt vertraust.",
        ],
        images: [
          {
            src: "/images/guides/sverweis/position-1.png",
            alt: "SVERWEIS in der Bestelltabelle platzieren",
            caption: "1) Wo die Formel sitzt: neben der Bestellung, nicht in der Preisliste.",
          },
          {
            src: "/images/guides/sverweis/suchbegriff.png",
            alt: "Suchkriterium im SVERWEIS",
            caption: "2) Wonach suche ich? Das Suchkriterium – oft eine Zelle wie A2.",
          },
          {
            src: "/images/guides/sverweis/matrix.png",
            alt: "Suchmatrix des SVERWEIS",
            caption: "3) Wo suche ich? Die Matrix, Suchspalte ganz links.",
          },
          {
            src: "/images/guides/sverweis/spaltenindex.png",
            alt: "Spaltenindex im SVERWEIS",
            caption: "4) Was will ich wissen? Der Spaltenindex zählt von links in der Matrix.",
          },
          {
            src: "/images/guides/sverweis/genau.png",
            alt: "Genaue Übereinstimmung FALSCH",
            caption: "5) Immer FALSCH für eine exakte Suche – sonst liefert Excel still den nächstkleineren Wert.",
          },
        ],
      },
      {
        heading: "Die drei Fallen, die fast alle kennen",
        paragraphs: [
          "Erstens: Die Suchspalte steht nicht links. SVERWEIS kann nicht nach links schauen. Dann brauchst du INDEX/VERGLEICH oder besser XVERWEIS.",
          "Zweitens: Bereich_Verweis fehlt oder ist WAHR. Dann sucht Excel den nächstkleineren Wert – und liefert still falsche Ergebnisse, wenn die Liste nicht sortiert ist. Immer FALSCH schreiben, nicht weglassen.",
          "Drittens: Zahlen, die wie Text aussehen. \"1001\" ist nicht 1001. Dann hilft WERT() auf einer Seite oder eine saubere Datenaufbereitung mit Power Query – bevor die Formel überhaupt ins Spiel kommt.",
        ],
      },
      {
        heading: "#NV, Duplikate und mehrere Treffer",
        paragraphs: [
          "Kein Treffer ergibt #NV. Sichtbar machen mit =WENNFEHLER(SVERWEIS(…); \"nicht gefunden\"). Nicht die Fehlermeldung einfach leer schlucken, sonst merkst du Datenlöcher zu spät.",
          "SVERWEIS nimmt immer den ersten Treffer von oben. Duplikate in der Suchspalte sind ein Stammdatenproblem, keine Formelfrage. Mehrere Treffer zurückgeben: FILTER (365) oder die Rezepte zu SVERWEIS mit mehreren Ergebnissen.",
        ],
        links: [
          { to: "/formeln/sverweis-nach-links", label: "SVERWEIS nach links" },
          { to: "/formeln/sverweis-mit-mehreren-suchkriterien", label: "Mehrere Suchkriterien" },
          { to: "/formeln/sverweis-mehrere-ergebnisse", label: "Mehrere Ergebnisse" },
        ],
      },
      {
        heading: "Wann XVERWEIS die bessere Wahl ist",
        paragraphs: [
          "Ab Microsoft 365 ersetzt XVERWEIS den SVERWEIS in fast allen neuen Modellen: Suche nach links, Standard ist exakte Übereinstimmung, und du kannst festlegen, was bei Nichtfinden passiert. Im Excelhero-Kurs gehen wir beide Wege – weil in vielen Firmen immer noch SVERWEIS der Standard ist, den Kolleginnen und Kollegen erwarten.",
          "Für das Zusammenführen ganzer Tabellen ist Power Query (Abfragen zusammenführen) oft die sauberere Alternative: einmal aufsetzen, jeden Monat aktualisieren, ohne Formeln in tausend Zeilen.",
        ],
        links: [
          { to: "/funktionen/excel-xverweis-funktion", label: "XVERWEIS" },
          { to: "/power-query/power-query-sverweis-wverweis-xverweis-index", label: "SVERWEIS in Power Query" },
          { to: "/excel-funktionen-power-query-uebersetzungstabelle", label: "Übersetzungstabelle" },
        ],
      },
    ],
  },
  {
    slug: "power-query",
    title: "Power Query ganz leicht erklärt",
    kicker: "Power Query",
    category: "Power Query",
    hubPath: "/power-query",
    path: "/power-query/power-query-ganz-einfach-erklaert",
    excerpt:
      "Was ist Power Query – Überblick und Einsatzmöglichkeiten. Schluss mit Copy & Paste zwischen Dateien, SAP-Exports und CSV-Friedhöfen.",
    related: [
      "power-query-wenn-wenns-ersterwert",
      "power-query-sverweis-wverweis-xverweis-index",
      "power-query-text-in-spalten-spalte-teilen",
      "power-pivot-ganz-einfach-erklaert",
    ],
    image: "/images/guides/power-query/hero.jpg",
    files: [{ href: "/files/power-query-warenbestand.xlsx", label: "Warenbestand für Power Query (.xlsx)" }],
    readMinutes: 14,
    body: [
      {
        paragraphs: [
          "Power Query ist der Teil von Excel, der Daten holt, säubert und in eine Form bringt, mit der du arbeiten kannst. Einmal aufgebaut, aktualisierst du mit einem Klick. Genau das fehlt den meisten, die Excel „schon ewig“ nutzen – und genau hier liegen oft die größten Zeitfresser.",
        ],
      },
      {
        heading: "Wo du Power Query findest",
        paragraphs: [
          "Registerkarte Daten → Gruppe Daten abrufen und transformieren. In älteren Versionen hieß sie Power Query, in Microsoft 365 sitzt sie fest im Menüband. Der Editor öffnet sich in einem eigenen Fenster; die Mappe bleibt im Hintergrund liegen.",
        ],
        images: [
          {
            src: "/images/guides/power-query/daten-abrufen.png",
            alt: "Daten aus Arbeitsmappe in Power Query importieren",
            caption: "Daten → Abrufen → Aus Arbeitsmappe. Jeder Klick wird rechts als Schritt gespeichert.",
          },
          {
            src: "/images/guides/power-query/editor-1.png",
            alt: "Power-Query-Editor mit angewendeten Schritten",
            caption: "Der Editor: links die Vorschau, rechts die angewendeten Schritte.",
          },
        ],
      },
      {
        heading: "Wofür du Power Query brauchst",
        paragraphs: [
          "Mehrere Monatsdateien zu einer Liste zusammenführen. CSV-Exporte aus dem ERP in lesbare Spalten zerlegen. Spalten umbenennen, Datentypen setzen, leere Zeilen entfernen, Duplikate löschen, Unpivot für Pivot-Tabellen vorbereiten.",
          "Die Alternative ohne Power Query: Makros, die bei der nächsten Datei brechen, oder 40 Minuten Handarbeit jeden Montag.",
        ],
      },
      {
        heading: "Der Ablauf in vier Schritten",
        paragraphs: [
          "Die Schritte siehst du rechts in der Leiste „Angewendete Schritte“. Du kannst sie umbenennen, löschen, in der Reihenfolge ändern. Das ist Dokumentation und Automatisierung in einem.",
        ],
        steps: [
          "Daten holen: aus Datei, Ordner, Datenbank, Web oder einer Tabelle in der Mappe (Daten → Aus Tabelle/Bereich).",
          "Im Editor transformieren – jeder Klick wird als Schritt gespeichert. Datentyp setzen, Filter, Spalten splitten, mergen.",
          "Laden: als Tabelle ins Blatt oder ins Datenmodell (Power Pivot).",
          "Aktualisieren, wenn neue Daten da sind: Rechtsklick auf die Abfrage oder Daten → Alle aktualisieren.",
        ],
        images: [
          {
            src: "/images/guides/power-query/unpivot.png",
            alt: "Spalten entpivotieren in Power Query",
            caption: "Unpivot: aus einer Kreuztabelle wird eine flache Liste – Voraussetzung für saubere Pivots.",
          },
          {
            src: "/images/guides/power-query/zusammenfuehren.png",
            alt: "Abfragen zusammenführen",
            caption: "Abfragen zusammenführen ersetzt SVERWEIS über ganze Tabellen.",
          },
        ],
      },
      {
        heading: "Der Hebel, den kaum jemand nutzt",
        paragraphs: [
          "Ordner als Quelle: Lege jeden Monat eine neue Datei in denselben Ordner. Power Query liest alle Dateien mit dem gleichen Schema. Kein Anhängen per Hand, kein „habe ich den März schon drin?“.",
          "Im Kurs baue ich das an echten Beispielen – inkl. der Fehler, die im Editor auftauchen, wenn sich Spaltennamen ändern.",
        ],
        images: [
          {
            src: "/images/guides/power-query/ordner-1.png",
            alt: "Daten aus Ordner in Power Query",
            caption: "Quelle „Ordner“: jede neue Monatsdatei im selben Schema wird mit aktualisiert.",
          },
          {
            src: "/images/guides/power-query/ordner-2.png",
            alt: "Dateien aus dem Ordner kombinieren",
            caption: "Power Query listet die Dateien und kombiniert sie zu einer Tabelle.",
          },
        ],
      },
      {
        heading: "Typische Fehler",
        paragraphs: [
          "Spaltenname in der Quelle geändert: Der nächste Schritt sucht „Umsatz“ und findet „Umsatz €“. Dann bricht die Abfrage. Lösung: Namen früh umbenennen oder den Schritt anpassen, nicht die Fehlermeldung ignorieren.",
          "Datentyp „any“ stehen lassen: Rechnen und Mergen klappt dann zufällig. Gleich nach dem Import Typ setzen (Datum, Dezimal, Text).",
          "Formel statt Query: SVERWEIS über 80.000 Zeilen. In Query ist das ein Merge, einmal, und bleibt schnell.",
        ],
        links: [
          { to: "/excel-funktionen-power-query-uebersetzungstabelle", label: "Excel → Power Query" },
          { to: "/power-query/power-query-sverweis-wverweis-xverweis-index", label: "Abfragen zusammenführen" },
          { to: "/power-query/power-query-gruppieren-aggreggieren-summe-mittelwert-median-min-max-anzahl", label: "Gruppieren nach" },
        ],
      },
    ],
  },
  {
    slug: "pivot-tabellen",
    title: "Pivot-Tabellen ganz einfach erklärt",
    kicker: "Pivot",
    category: "Pivot-Tabellen",
    hubPath: "/pivot-tabellen",
    path: "/pivot-tabellen/pivot-tabellen-ganz-einfach-erklaert",
    excerpt:
      "Pivot-Tabellen zu meistern ist gar nicht so einfach, vor allem bei so vielen komplizierten Anleitungen im Netz. Oder vielleicht doch?",
    related: [
      "excel-tabelle-erstellen",
      "power-query",
      "datenschnitt",
      "power-pivot-ganz-einfach-erklaert",
    ],
    image: "/images/guides/pivot/beispiel.jpg",
    files: [{ href: "/files/pivot-beispieldaten.xlsx", label: "Pivot-Beispieldaten (.xlsx)" }],
    readMinutes: 12,
    body: [
      {
        paragraphs: [
          "Eine Pivot-Tabelle verdichtet eine flache Liste zu einer Auswertung, ohne Formeln zu schreiben. Zeilen, Spalten, Werte, Filter – fertig ist der Blick auf Umsatz nach Region, Fehlerquote nach Schicht oder Bestand nach Lager.",
        ],
        images: [
          {
            src: "/images/guides/pivot/umwandlung.png",
            alt: "Aus Datenliste wird Pivot-Tabelle",
            caption: "Idee: eine flache Liste wird zu einer verdichteten Auswertung – ohne Formeln.",
          },
        ],
      },
      {
        heading: "Die Daten müssen flach sein",
        paragraphs: [
          "Eine Zeile = ein Vorgang. Keine zusammengeführten Zellen, keine Monatsnamen als Spaltenüberschriften über einer Kreuztabelle. Wenn deine Quelle so aussieht, zuerst unpivotten – am saubersten in Power Query.",
          "Überschriften in Zeile 1, keine Leerzeilen, klare Datentypen. Dann Einfügen → PivotTable, und Excel schlägt den Bereich selbst vor. Noch besser: zuerst Strg+T, dann Pivot auf der Tabelle – neue Zeilen sind beim nächsten Aktualisieren drin.",
        ],
        steps: [
          "In eine Zelle der Liste klicken → Einfügen → PivotTable.",
          "Layout: Werte (was du zählst), Zeilen (wonach du gruppierst), optional Spalten und Filter.",
          "Wertfeld: Summe vs. Anzahl prüfen. Zählt Excel statt zu summieren, ist die Spalte Text.",
          "Rechtsklick auf ein Datum → Gruppieren → Jahre / Quartale / Monate.",
          "Daten → Aktualisieren, sobald die Quelle neue Zeilen hat.",
        ],
        images: [
          {
            src: "/images/guides/pivot/datenliste.png",
            alt: "Flache Datenliste als Pivot-Quelle",
            caption: "Quelle: eine Zeile = ein Vorgang, Überschriften in Zeile 1.",
          },
          {
            src: "/images/guides/pivot/einfuegen.png",
            alt: "Einfügen PivotTable",
            caption: "Einfügen → PivotTable.",
          },
          {
            src: "/images/guides/pivot/erstellen.png",
            alt: "Dialog PivotTable erstellen",
            caption: "Excel schlägt den Bereich vor – bei einer Tabelle (Strg+T) wächst er mit.",
          },
          {
            src: "/images/guides/pivot/felder.png",
            alt: "PivotTable-Felder",
            caption: "Die vier Bereiche: Filter, Spalten, Zeilen, Werte.",
          },
          {
            src: "/images/guides/pivot/eingestellt.png",
            alt: "Fertige Pivot-Tabelle",
            caption: "Ziehen, fertig. Summe prüfen – zählt Excel, ist die Spalte Text.",
          },
        ],
      },
      {
        heading: "Die vier Feldbereiche",
        paragraphs: [
          "Werte: was du zählst oder summierst (Umsatz, Menge). Zeilen: wonach du gruppieren willst (Produkt, Vertrieb). Spalten: zweite Dimension (Monat, Kanal). Filter: was du ausblenden willst, ohne die Tabelle umzubauen.",
          "Ziehen, fertig. Prozent vom Gesamtergebnis: Wertfeldeinstellungen → Werte anzeigen als. Für Dashboards: Datenschnitt statt des Filterbereichs – sichtbar, klickbar, mehrere Pivots gleichzeitig.",
        ],
        images: [
          {
            src: "/images/guides/pivot/werte.png",
            alt: "Werte zusammenfassen nach",
            caption: "Wertfeldeinstellungen: Summe, Anzahl, Mittelwert – und „Werte anzeigen als“.",
          },
          {
            src: "/images/guides/pivot/charts.png",
            alt: "Pivot-Chart",
            caption: "Pivot-Chart hängt an derselben Quelle. Filter der Pivot filtert das Diagramm mit.",
          },
        ],
      },
      {
        heading: "Danach wird es erst richtig nützlich",
        paragraphs: [
          "Zeitgruppen, berechnete Felder, Pivot-Charts, Slicer. Wer das sitzen hat, braucht für 80 % der Auswertungen keine VBA-Zeile.",
          "Wenn die Liste aus mehreren Dateien kommt oder Unpivot braucht: zuerst Power Query, dann die Pivot auf die Abfrage. Beziehungen zwischen Tabellen: Power Pivot.",
        ],
        links: [
          { to: "/excel-tabellen/excel-tabelle-erstellen", label: "Excel-Tabelle (Strg+T)" },
          { to: "/allgemein/datenschnitt", label: "Datenschnitt" },
          { to: "/power-query/power-query-ganz-einfach-erklaert", label: "Power Query" },
        ],
      },
    ],
  },
  {
    slug: "bedingte-formatierung",
    title: "Bedingte Formatierung ganz einfach erklärt",
    kicker: "Formatierung",
    category: "Bedingte Formatierung",
    hubPath: "/guides",
    path: "/bedingte-formatierung/bedingte-formatierung-ganz-einfach-erklaert",
    excerpt:
      "Farbskalen, Datenbalken und Regeln, die sich von selbst aktualisieren – so werden Abweichungen sichtbar, bevor jemand danach sucht.",
    related: [
      "bedingte-formatierung-ganze-zeile",
      "ampel-erstellen",
      "doppelte-werte-markieren",
      "excel-tabelle-erstellen",
    ],
    image: "/images/guides/formatierung/visualisierung.png",
    files: [{ href: "/files/bedingte-formatierung.xlsx", label: "Beispieldatei bedingte Formatierung (.xlsx)" }],
    readMinutes: 10,
    body: [
      {
        paragraphs: [
          "Bedingte Formatierung ändert Farbe, Schrift oder Symbole, sobald ein Zellwert eine Regel erfüllt. Du markierst Abweichungen, Duplikate, Top-10 oder alles über Budget – ohne eine einzige Hilfsspalte extra einzufärben.",
        ],
        images: [
          {
            src: "/images/guides/formatierung/visualisierung.png",
            alt: "Farbskalen in der Tabelle",
            caption: "Werte als Farbe: Farbskalen, Datenbalken, Symbolsätze.",
          },
          {
            src: "/images/guides/formatierung/visualisierung-backend.png",
            alt: "Regelmanager für Farbskalen",
            caption: "Dahinter liegt eine Regel – Start → Bedingte Formatierung → Regeln verwalten.",
          },
        ],
      },
      {
        heading: "Die Regeln, die du wirklich brauchst",
        paragraphs: [
          "Größer/kleiner als, zwischen, Text enthalten, Duplikate, Formel. Die Formel ist der Hebel: =$C2>$E$2 färbt die ganze Zeile, wenn der Ist-Wert über dem Plan liegt. Absolute und relative Bezüge entscheiden, ob die Regel mitwandert.",
        ],
        steps: [
          "Bereich markieren (besser: eine Excel-Tabelle, dann wächst die Regel mit).",
          "Start → Bedingte Formatierung → Regel.",
          "Fertige Regel nur wenn der Vergleich einfach ist. Sonst „Formel zur Ermittlung der zu formatierenden Zellen“.",
          "In der Formel die aktive Zelle (oben links im markierten Bereich) als Bezug nehmen, Dollarzeichen nur vor der Spalte setzen, wenn die ganze Zeile mitfärben soll.",
          "Regeln verwalten: Reihenfolge und „Bei Wahr anhalten“ prüfen.",
        ],
        images: [
          {
            src: "/images/guides/formatierung/regeln.png",
            alt: "Hervorhebungsregeln",
            caption: "Fertige Regeln: größer als, zwischen, Duplikate.",
          },
          {
            src: "/images/guides/formatierung/regeln-backend.png",
            alt: "Regel auf Zellwert",
            caption: "Zellwert-Regel, wenn der Vergleich einfach ist.",
          },
          {
            src: "/images/guides/formatierung/formel.png",
            alt: "Bedingte Formatierung per Formel",
            caption: "Formel-Regel, wenn die ganze Zeile mitfärben soll.",
          },
          {
            src: "/images/guides/formatierung/formel-backend.png",
            alt: "Formel zur Ermittlung der zu formatierenden Zellen",
            caption: "Die Formel bezieht sich auf die aktive Zelle oben links im markierten Bereich.",
          },
        ],
      },
      {
        heading: "Zwei Regeln, die oft schiefgehen",
        paragraphs: [
          "Reihenfolge: Excel wendet Regeln von oben nach unten an. „Bei Wahr anhalten“ verhindert, dass eine zweite Regel die erste überschreibt.",
          "Bereich: Wenn du Zeilen einfügst, wächst die Regel nicht immer mit. Besser eine Excel-Tabelle (Strg+T) nutzen – dann bleibt die Formatierung am Objekt, nicht an einem starren A2:F200.",
          "Ampelsymbole brauchen eine Zahl, keinen Text. Drei Schwellen über WENNS nur, wenn du den Status als Wort brauchst.",
        ],
        links: [
          { to: "/formeln/bedingte-formatierung-ganze-zeile", label: "Ganze Zeile färben" },
          { to: "/formeln/ampel-erstellen", label: "Ampel" },
          { to: "/formeln/doppelte-werte-markieren", label: "Duplikate markieren" },
        ],
      },
    ],
  },
  ...FLAGSHIP_ARTICLES,
  ...DIAGRAMME_ARTICLES,
  ...ALLGEMEIN_ARTICLES,
  ...FORMELN_ARTICLES,
  ...FORMELN_ARTICLES_2,
  ...FUNKTIONEN_ARTICLES,
  ...POWER_QUERY_ARTICLES,
  ...BLOCK7_EXTRAS,
  ...BLOCK9_EXTRAS,
].map(applyOriginal);

const HUB_FROM_PATH: Record<string, { kicker: string; category: string; hubPath: string }> = {
  formeln: { kicker: "Formeln", category: "Formeln", hubPath: "/excel-formeln" },
  funktionen: { kicker: "Funktionen", category: "Funktionen", hubPath: "/excel-funktionen" },
  allgemein: { kicker: "Allgemein", category: "Allgemein", hubPath: "/allgemein" },
  "power-query": { kicker: "Power Query", category: "Power Query", hubPath: "/power-query" },
  diagramme: { kicker: "Diagramme", category: "Diagramme", hubPath: "/diagramme" },
  "pivot-tabellen": { kicker: "Pivot", category: "Pivot-Tabellen", hubPath: "/pivot-tabellen" },
  "office-script": { kicker: "Office Script", category: "Office Script", hubPath: "/office-script" },
  "power-bi": { kicker: "Power BI", category: "Power BI", hubPath: "/power-bi" },
  vba: { kicker: "VBA", category: "VBA", hubPath: "/vba" },
  "tipps-tricks": { kicker: "Tipps", category: "Tipps & Tricks", hubPath: "/tipps-tricks" },
  "bedingte-formatierung": {
    kicker: "Formatierung",
    category: "Bedingte Formatierung",
    hubPath: "/bedingte-formatierung",
  },
  makros: { kicker: "Makros", category: "Makros", hubPath: "/makros" },
  ki: { kicker: "ChatGPT", category: "ChatGPT", hubPath: "/ki" },
  "excel-tabellen": { kicker: "Tabellen", category: "Tabellen", hubPath: "/excel-tabellen" },
  "power-pivot": { kicker: "Power Pivot", category: "Power Pivot", hubPath: "/power-pivot" },
  automate: { kicker: "Power Automate", category: "Power Automate", hubPath: "/power-automate" },
};

const known = new Set(ARTICLES.flatMap((a) => [a.slug, a.path ?? ""]));
for (const o of Object.values(ORIGINAL)) {
  if (known.has(o.slug) || known.has(o.path)) continue;
  const prefix = o.path.split("/").filter(Boolean)[0] ?? "funktionen";
  const hub = HUB_FROM_PATH[prefix] ?? HUB_FROM_PATH.funktionen;
  ARTICLES.push(
    applyOriginal({
      slug: o.slug,
      title: o.title || o.slug,
      kicker: hub.kicker,
      category: hub.category,
      hubPath: hub.hubPath,
      path: o.path,
      excerpt: o.excerpt,
      image: o.image || "/images/spreadsheet-closeup.jpg",
      readMinutes: 4,
      body: [],
    }),
  );
}

export function getArticle(slug: string) {
  return ARTICLES.find(
    (a) => a.slug === slug || a.path === `/${slug}` || a.path?.endsWith(`/${slug}`),
  );
}

export function articlePath(a: Article) {
  return a.path ?? `/guides/${a.slug}`;
}

/** Link from the functions table to a /funktionen/… guide when it exists. */
export function functionGuidePath(name: string): string | undefined {
  const fn = FUNCTIONS.find((f) => f.name === name);
  if (fn?.href.startsWith("/")) return fn.href;
  if (name === "SVERWEIS") return "/funktionen/excel-sverweis";
  if (name === "XOR" || name === "XODER") return "/funktionen/excel-xoder-funktion";
  const hit = ARTICLES.find(
    (a) => a.path?.startsWith("/funktionen/") && a.title === `Excel ${name} Funktion`,
  );
  return hit ? articlePath(hit) : undefined;
}

export function relatedArticles(article: Article, limit = 4): Article[] {
  const seen = new Set<string>([article.slug]);
  const out: Article[] = [];
  for (const slug of article.related ?? []) {
    const hit = getArticle(slug);
    if (hit && !seen.has(hit.slug)) {
      seen.add(hit.slug);
      out.push(hit);
    }
    if (out.length >= limit) return out;
  }
  for (const a of ARTICLES) {
    if (seen.has(a.slug) || a.category !== article.category) continue;
    seen.add(a.slug);
    out.push(a);
    if (out.length >= limit) break;
  }
  return out;
}

export const FEATURED_SLUGS = ["sverweis", "power-query", "pivot-tabellen"] as const;

export function searchContent(query: string, limit = 8) {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [] as { title: string; to: string; kicker: string }[];
  const hits: { title: string; to: string; kicker: string; score: number }[] = [];
  const seen = new Set<string>();
  for (const a of ARTICLES) {
    const title = a.title.toLowerCase();
    const blob = `${a.title} ${a.excerpt} ${a.category} ${a.kicker}`.toLowerCase();
    if (!blob.includes(q)) continue;
    const featured = (FEATURED_SLUGS as readonly string[]).includes(a.slug);
    const score = (title.startsWith(q) ? 0 : title.includes(q) ? 1 : 2) + (featured ? -1 : 0);
    hits.push({ title: a.title, to: articlePath(a), kicker: a.category, score });
    seen.add(articlePath(a));
  }
  for (const fn of FUNCTIONS) {
    if (!fn.name.toLowerCase().includes(q) && !fn.en.toLowerCase().includes(q)) continue;
    const to = fn.href.startsWith("/") ? fn.href : "/excel-funktionen";
    if (seen.has(to)) continue;
    hits.push({ title: `${fn.name} / ${fn.en}`, to, kicker: "Funktion", score: 0 });
    seen.add(to);
  }
  hits.sort((a, b) => a.score - b.score || a.title.localeCompare(b.title, "de"));
  return hits.slice(0, limit);
}

export const ARTICLE_CATEGORIES = [
  "Funktionen",
  "Pivot-Tabellen",
  "Power Query",
  "Bedingte Formatierung",
  "Makros",
  "VBA",
  "Power Pivot",
  "Power BI",
  "Tipps & Tricks",
  "Diagramme",
  "Allgemein",
  "Formeln",
] as const;
