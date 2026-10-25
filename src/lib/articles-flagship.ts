import type { Article } from "./articles";

export const FLAGSHIP_ARTICLES: Article[] = [
  {
    slug: "excel-makros",
    title: "Excel-Makros ganz einfach erstellen und ausführen",
    kicker: "Makros",
    category: "Makros",
    hubPath: "/makros",
    path: "/makros/excel-makros",
    excerpt:
      "Wiederkehrende Klicks aufnehmen und per Knopfdruck abspielen. Absolute vs. relative Verweise, Schaltflächen und der Weg in den Makro-Code.",
    related: ["excel-vba", "excel-objektmodell", "office-script-einfuehrung"],
    image: "/images/course/makros.jpg",
    readMinutes: 14,
    body: [
      {
        paragraphs: [
          "Den Begriff „Makros“ hast du vielleicht schon gehört – aber was sind Makros, und wie erleichtern sie die Arbeit mit Excel? Mit Excel-Makros nimmst du zeitaufwändige, wiederkehrende Aufgaben auf und spielst sie später beliebig oft wieder ab. Was per Hand Stunden oder Tage dauert, ist dann in Minuten oder Sekunden erledigt.",
          "Makros erstellen heißt: Arbeitsschritte aufnehmen, die du später per Knopfdruck abspielst.",
        ],
      },
      {
        heading: "Einsatzbereiche",
        paragraphs: [
          "Aus der Vogelperspektive besteht die Arbeit mit Excel aus drei Schritten: Dateninput (Import), Datenverarbeitung (Auswertung) und Datenoutput (Tabellen, Grafiken, PDFs, E-Mails, Dashboards). Alle drei Schritte kosten oft viel Zeit – und genau das lässt sich mit Makros automatisieren.",
          "Alles, was du wiederholt per Hand machst, kannst du automatisieren. Auch über mehrere Blätter oder Dateien hinweg.",
        ],
      },
      {
        heading: "Makro aufzeichnen",
        paragraphs: [
          "Standardweg: Ansicht → Makros → Makros aufzeichnen. Es öffnet sich das Dialogfeld. Bestehende Makros siehst du unter Ansicht → Makros → Makros anzeigen.",
          "Vergib einen Namen (ohne Leerzeichen), optional eine Tastenkombination, die noch nicht belegt ist, und wähle den Speicherort: „Diese Arbeitsmappe“ teilt das Makro mit Kolleginnen; die persönliche Makroarbeitsmappe ist nur für dich.",
        ],
        steps: [
          "Datei als .xlsm speichern – sonst ist das Makro nach dem Schließen weg.",
          "Ansicht → Makros → Makros aufzeichnen, Namen vergeben, Speichern in „Diese Arbeitsmappe“.",
          "Die Klicks ausführen, die du automatisieren willst. Danach Aufnahme beenden.",
          "Ansicht → Makros anzeigen → Ausführen. Sitzt es? Dann auf eine Schaltfläche legen.",
          "Datei → Optionen → Trust Center: Makros nur aus vertrauenswürdigen Quellen. Entwicklertools im Menüband aktivieren für Schaltflächen.",
        ],
        images: [
          {
            src: "/images/guides/makros/aufzeichnen.png",
            alt: "Makros aufzeichnen im Menüband",
            caption: "Ansicht → Makros → Makros aufzeichnen.",
          },
          {
            src: "/images/guides/makros/dialog.png",
            alt: "Dialog Makro aufzeichnen",
            caption: "Name ohne Leerzeichen, optional Shortcut, Speicherort „Diese Arbeitsmappe“.",
          },
          {
            src: "/images/guides/makros/entwickler.png",
            alt: "Entwicklertools aktivieren",
            caption: "Entwicklertools: Datei → Optionen → Menüband anpassen.",
          },
        ],
      },
      {
        heading: "Absolute vs. relative Verweise",
        paragraphs: [
          "Standardmäßig zeichnet Excel mit absoluten Verweisen auf. Beispiel: Ein Makro „TestAbsolut“ kopiert die aktive Zelle immer nach A3 – egal, wo du stehst.",
          "Mit „Relative Verweise verwenden“ (unterstes Icon im Menü Makros) merkt sich Excel die Distanz. Kopierst du während der Aufnahme von A1 nach A3 (zwei Zeilen tiefer), kopiert „TestRelativ“ von D4 nach D6 – dieselbe Relation.",
          "Absolut, wenn das Ziel immer dieselbe Zelle ist. Relativ, wenn die Aktion mitwandern soll.",
        ],
        images: [
          {
            src: "/images/guides/makros/absolut.png",
            alt: "Makro mit absoluten Verweisen",
            caption: "Absolut: das Makro trifft immer dieselbe Zelle – egal, wo du stehst.",
          },
          {
            src: "/images/guides/makros/relativ.png",
            alt: "Relative Verweise verwenden",
            caption: "„Relative Verweise verwenden“ merkt sich die Distanz, nicht die Adresse.",
          },
          {
            src: "/images/guides/makros/relativ-ergebnis.png",
            alt: "Relatives Makro auf anderer Startzelle",
            caption: "Dieselbe Relation, anderer Startpunkt.",
          },
        ],
      },
      {
        heading: "Bearbeiten und ausführen",
        paragraphs: [
          "Unter Makros anzeigen → Optionen änderst du Beschreibung und Shortcut. Bearbeiten oder Alt+F11 öffnet den VBA-Editor mit dem aufgenommenen Code.",
          "Zum Ausführen über eine Schaltfläche: Datei → Optionen → Menüband anpassen → Entwicklertools aktivieren. Unter Einfügen legst du Formularsteuerelemente ab und weist ein Makro zu. Denselben Weg nutzt du für Symbole in der Schnellzugriffsleiste.",
          "Der Rekorder schreibt Select und Activate. Zum Weiterbauen den Code im VBA-Editor lesen – das Objektmodell erklärt, warum Range ohne Worksheet-Bezug die aktive Zelle meint und dann plötzlich danebenliegt.",
        ],
        images: [
          {
            src: "/images/guides/makros/code.png",
            alt: "VBA-Editor mit aufgenommenem Makro",
            caption: "Alt+F11: der aufgenommene Code. Select/Activate kannst du später streichen.",
          },
          {
            src: "/images/guides/makros/steuerelemente.png",
            alt: "Schaltfläche einem Makro zuweisen",
            caption: "Entwicklertools → Einfügen → Schaltfläche → Makro zuweisen.",
          },
        ],
        links: [
          { to: "/vba/excel-vba", label: "VBA ganz einfach erklärt" },
          { to: "/vba/excel-objektmodell", label: "Excel-Objektmodell" },
          { to: "/office-script/office-script-einfuehrung", label: "Office Script" },
        ],
      },
    ],
  },
  {
    slug: "excel-vba",
    title: "Excel-VBA ganz einfach erklärt",
    kicker: "VBA",
    category: "VBA",
    hubPath: "/vba",
    path: "/vba/excel-vba",
    excerpt:
      "Visual Basic for Applications steuert Excel und die anderen Office-Programme. Wann VBA Sinn macht, wie du lernst – und wann Power Query die bessere Wahl ist.",
    related: ["excel-makros", "excel-objektmodell", "office-script-einfuehrung"],
    image: "/images/course/vba.jpg",
    readMinutes: 13,
    body: [
      {
        heading: "Was ist VBA?",
        paragraphs: [
          "VBA steht für Visual Basic for Applications und ist eine Programmiersprache, mit der du Excel und die anderen Office-Programme steuerst. Abläufe, die du sonst klickst, laufen automatisiert ab.",
        ],
      },
      {
        heading: "Welche Programme kannst du steuern?",
        paragraphs: [
          "Excel, Word, PowerPoint, Outlook, dazu Project, Publisher, Visio und Access. Typische Zwecke: regelmäßige Arbeitsschritte automatisieren, Excel-Tools bauen (Angebots- und Rechnungsgenerator, Projektmanagement) und Daten, Tabellen oder Diagramme zwischen Office-Programmen austauschen.",
        ],
      },
      {
        heading: "Wann solltest du VBA verwenden?",
        paragraphs: [
          "Der Makro-Rekorder liefert schnell Code – bevor du automatisierst, lohnen drei Fragen: Wie lange dauert die Aufgabe von Hand? Wiederholt sie sich (wöchentlich, monatlich)? Ist VBA überhaupt das richtige Werkzeug?",
          "Daten aus vielen Quellen holen und transformieren: Power Query. Echtzeit-Reports: Power BI. E-Mail-Anhänge nach OneDrive: Power Automate. Dafür musst du die anderen Tools wenigstens oberflächlich kennen.",
          "Dann: Make or Buy? Einfache Projekte baust du selbst. Komplexe Tools für Standardaufgaben (Angebotserstellung) gibt es oft günstig und ausgereift am Markt.",
        ],
      },
      {
        heading: "So läuft VBA in der Praxis",
        paragraphs: [
          "Ein fertiges VBA-Projekt ist ein Puzzle: Datei öffnen, Blatt anlegen, Werte schreiben, speichern. VBA gibt es seit Mitte der 90er – für Standardoperationen findest du Code-Bausteine im Netz. Um sie anzupassen, musst du Code lesen können.",
          "Du musst nicht Hunderte Befehle auswendig lernen. Am Anfang reicht: Code lesen und kleine Anpassungen. Einzelne YouTube-Videos decken nur Teilaspekte ab und bauen nicht aufeinander auf. Die Grundlagen strukturiert im Excelhero-Kurs, danach Dokumentation, Blogs und Videos. Foren nur für konkrete Fragen, nicht für den Einstieg.",
        ],
      },
      {
        heading: "Objektmodell vs. VBA",
        paragraphs: [
          "Zellen, Blätter, Mappen, Diagramme, Tabellen hängen in einer Hierarchie: ohne Mappe und Blatt keine Zelle. Das ist das Objektmodell – in PowerPoint wären es Präsentationen und Folien.",
          "Objekte haben Eigenschaften (Größe, Name, Farbe) und Methoden (erstellen, löschen, selektieren). VBA selbst – Variablen, Schleifen, Wenn-Dann – ist der Schraubenschlüssel, das Objektmodell die Schrauben.",
          "Vorwissen in Programmierung brauchst du nicht. Die richtige Reihenfolge zählt: erst Struktur, dann die Befehle, die du wirklich brauchst.",
        ],
        steps: [
          "Alt+F11 öffnet den Editor. Einfügen → Modul, nicht in ThisWorkbook kleben, solange du keine Events brauchst.",
          "Sub Test(): ThisWorkbook.Worksheets(\"Plan\").Range(\"B2\").Value = 1 – den Weg laut sagen, nicht ActiveCell.",
          "F8 schrittweise, F5 ausführen, Direktfenster (Strg+G) für Debug.Print.",
          "Select/Activate aus Recorder-Code löschen, sobald du den Bezug gesetzt hast.",
        ],
        links: [
          { to: "/vba/excel-objektmodell", label: "Objektmodell" },
          { to: "/makros/excel-makros", label: "Makros aufzeichnen" },
          { to: "/office-script/office-script-einfuehrung", label: "Office Script vs. VBA" },
        ],
      },
    ],
  },
  {
    slug: "office-script-einfuehrung",
    title: "Office Script – Einführung",
    kicker: "Office Script",
    category: "Office Script",
    hubPath: "/office-script",
    path: "/office-script/office-script-einfuehrung",
    excerpt:
      "TypeScript statt VBA, in der Cloud gespeichert und mit Power Automate kombinierbar. Was Office Script kann – und wo VBA weiter nötig bleibt.",
    image: "/images/course/work-smarter.jpg",
    readMinutes: 7,
    body: [
      {
        heading: "Was ist Office Script?",
        paragraphs: [
          "Office Script ist die in Microsoft 365 integrierte Sprache, mit der du Aufgaben und Workflows in Excel automatisierst. Verfügbar unter anderem in Business, Business Premium, Microsoft 365 Apps, E3/E5 und A3/A5.",
          "Die Syntax ist TypeScript. Skripte speicherst du in der Cloud und teilst sie in der Organisation. Aufnahme über die webbasierte Oberfläche oder Visual Studio Code; in der Desktop-App über die Registerkarte Automatisieren (zuerst Insider, inzwischen breiter ausgerollt).",
        ],
      },
      {
        heading: "Unterschied zu VBA",
        paragraphs: [
          "VBA läuft lokal, kann Events, UserForms und die Datei-/Ordnerstruktur außerhalb von Excel. Office Script läuft in der Cloud, lässt sich mit Power Automate ketten – kennt aber keine Events und manipuliert keine Ordner außerhalb von Excel.",
          "Office Scripts können einen Teil der klassischen Makros ersetzen. Wer tief in Excel-Events oder lokale Dateisysteme muss, bleibt bei VBA.",
        ],
      },
      {
        heading: "Wann welches Werkzeug",
        paragraphs: [
          "Excel im Browser, Zusammenarbeit, Flow nach Outlook/SharePoint: Office Script. Komplexe Desktop-Automatisierung, Events, UserForms: VBA. Viele Teams nutzen beides – je nach Speicherort der Datei.",
        ],
      },
    ],
  },
  {
    slug: "power-automate-ganz-einfach-erklaert",
    title: "Power Automate ganz einfach erklärt",
    kicker: "Power Automate",
    category: "Power Automate",
    hubPath: "/power-automate",
    path: "/automate/power-automate-ganz-einfach-erklaert",
    excerpt:
      "Früher Microsoft Flow: Daten zwischen Quellen bewegen, ohne Copy & Paste. Connectoren, Flow-Typen und der Weg zu Power Query und Power BI.",
    image: "/images/data-flow.jpg",
    readMinutes: 10,
    body: [
      {
        paragraphs: [
          "Mit Power Automate (früher Microsoft Flow) holst du Daten aus unterschiedlichen Quellen und automatisierst Arbeitsschritte in sogenannten Flows. Hier geht es vor allem um die automatische Beschaffung von Daten, die du später mit Power Query oder Power BI weiterverarbeitest. Das manuelle Hin- und Herschieben entfällt. Testen kannst du unter powerautomate.com.",
        ],
      },
      {
        heading: "Anwendungsszenarien",
        paragraphs: [
          "E-Mail-Anhänge (z. B. Rechnungen als PDF) automatisch in Ordner auf der Festplatte oder in OneDrive speichern, Mails als gelesen markieren oder löschen.",
          "Benutzeroberflächenflows (UI-Flows) klicken durch Programme, die keine API haben. Geplante Flows holen jede Nacht Daten. Genehmigungen laufen über Teams oder Outlook, ohne die Tabelle zu verlassen.",
        ],
      },
      {
        heading: "Connectoren",
        paragraphs: [
          "Ein Connector ist die Brücke zu einem Dienst: Outlook, SharePoint, Excel, SQL, SAP, Twitter, eigene HTTP-APIs. Sobald die Verbindung steht, wählst du Trigger („wenn eine Mail kommt“) und Aktionen („Datei in Ordner X speichern“).",
        ],
      },
      {
        heading: "Die Flow-Typen",
        paragraphs: [
          "Automatischer Flow: startet durch ein Ereignis (neue Mail, neue SharePoint-Zeile).",
          "Geplanter Flow: Zeitplan, z. B. jeden Werktag 6 Uhr.",
          "Benutzeroberflächenflow: klickt eine Oberfläche nach – Desktop-Automatisierung.",
          "Geschäftsprozessflow: führt Menschen durch festgelegte Schritte (CRM, Freigaben).",
          "Erstellen: powerautomate.com oder im Microsoft-365-App-Starter → Vorlage wählen oder leer starten → Trigger → Aktionen → speichern und testen.",
        ],
      },
      {
        heading: "KI und Power Automate",
        paragraphs: [
          "KI-Builder und Copilot formulieren Flows aus einer Beschreibung. Trotzdem: Trigger, Berechtigungen und Testdaten selbst prüfen – gerade wenn personenbezogene Dateien durch den Flow laufen.",
        ],
      },
    ],
  },
  {
    slug: "power-bi-ganz-einfach-erklaert",
    title: "Was ist Power BI – Erste Schritte",
    kicker: "Power BI",
    category: "Power BI",
    hubPath: "/power-bi",
    path: "/power-bi/power-bi-ganz-einfach-erklaert",
    excerpt:
      "Desktop, Service, App: Daten laden, transformieren, modellieren, visualisieren und teilen. Der Unterschied zu Excel – und was es kostet.",
    related: ["power-bi-vs-excel", "power-pivot-ganz-einfach-erklaert", "power-query"],
    image: "/images/guides/power-bi/komponenten.jpg",
    readMinutes: 14,
    body: [
      {
        paragraphs: [
          "Power BI ist eine Sammlung von Tools, mit der auch nicht-technische Anwender Daten aggregieren, analysieren, visualisieren und teilen. Ziel: Erkenntnisse so aufbereiten, dass Entscheidungen möglich werden.",
        ],
      },
      {
        heading: "Warum Power BI so wichtig ist",
        paragraphs: [
          "Daten kommen aus Excel, Datenbanken, Web und SaaS. Power BI bringt sie in Form, setzt sie im Datenmodell in Beziehung, macht Dashboards daraus und stellt sie dem Team bereit.",
        ],
      },
      {
        heading: "Die drei Komponenten",
        paragraphs: [
          "Power BI Desktop – lokal, hier entstehen die Berichte: verbinden, transformieren, visualisieren.",
          "Power BI Service – die Cloud, Berichte im Browser, Zusammenarbeit, Freigabe.",
          "Power BI App – Dashboards auf dem Smartphone, relevant für unterwegs (Vertrieb).",
        ],
        images: [
          {
            src: "/images/guides/power-bi/komponenten.jpg",
            alt: "Power BI Desktop, Service und App",
            caption: "Drei Teile: Desktop (bauen), Service (teilen), App (unterwegs).",
          },
        ],
      },
      {
        heading: "Der Workflow",
        paragraphs: [
          "1. Daten abrufen: Verbindung zur Quelle. 2. Transformieren im Power-Query-Editor (Spaltennamen, fehlende Zeilen). 3. Datenmodell: Tabellen in der Modellansicht verknüpfen. 4. Visualisieren: Diagramme, Filter, What-if, Forecasts. 5. In die Cloud veröffentlichen. Neue Daten fließen in die Reports – Echtzeit-Reporting wird möglich.",
        ],
        images: [
          {
            src: "/images/guides/power-bi/abrufen.png",
            alt: "Power BI Daten abrufen",
            caption: "Daten abrufen: Excel, Datenbank, Web, SaaS.",
          },
          {
            src: "/images/guides/power-bi/transformieren.png",
            alt: "Power Query in Power BI",
            caption: "Transformieren: derselbe Editor wie in Excel.",
          },
          {
            src: "/images/guides/power-bi/modell.png",
            alt: "Power-BI-Datenmodell",
            caption: "Modellansicht: Beziehungen, bevor das erste Visual gebaut wird.",
          },
          {
            src: "/images/guides/power-bi/visualisieren.jpeg",
            alt: "Power-BI-Report",
            caption: "Visualisieren und filtern – der Report, den das Team teilt.",
          },
        ],
      },
      {
        heading: "Wichtige Features",
        paragraphs: [
          "Forecasting, Q&A-Visual (Fragen in natürlicher Sprache), Visual-Bibliothek, R- und Python-Skripte, Row-Level-Security, geplante Aktualisierung.",
        ],
        images: [
          {
            src: "/images/guides/power-bi/forecasting.png",
            alt: "Forecasting in Power BI",
            caption: "Forecasting sitzt im Analyse-Bereich des Visuals.",
          },
        ],
      },
      {
        heading: "Was kostet Power BI?",
        paragraphs: [
          "Power BI Desktop ist kostenlos. Zum Teilen brauchst du in der Regel Power BI Pro (pro Benutzer) oder Premium/Fabric-Kapazität für große Organisationen. Die genaue Preisliste ändert Microsoft regelmäßig – aktuell auf microsoft.com/power-bi nachlesen.",
        ],
        images: [
          {
            src: "/images/guides/power-bi/preise.png",
            alt: "Power-BI-Preisübersicht",
            caption: "Desktop kostenlos, Teilen über Pro oder Kapazität. Preise bei Microsoft prüfen.",
          },
        ],
      },
      {
        heading: "Power BI vs. Excel",
        paragraphs: [
          "Excel bleibt das Werkzeug für Ad-hoc, Modellierung in der Zelle und den Desktop-Alltag. Power BI ist gebaut für wiederholbare, teilbare Dashboards über viele Quellen. Power Query und DAX kommen in beiden vor – wer Excel mit Power Pivot kann, ist in Power BI schnell zu Hause.",
        ],
        steps: [
          "Power BI Desktop installieren (kostenlos) und eine Excel- oder CSV-Datei laden.",
          "Im Power-Query-Editor Typen setzen, überflüssige Spalten weg, laden.",
          "Modellansicht: Beziehungen prüfen, bevor das erste Visual gebaut wird.",
          "Eine Karte, ein Säulendiagramm, ein Datenschnitt – dann veröffentlichen in den Service.",
        ],
        links: [
          { to: "/power-bi/power-bi-vs-excel", label: "Power BI vs. Excel" },
          { to: "/power-pivot/power-pivot-ganz-einfach-erklaert", label: "Power Pivot / DAX" },
          { to: "/power-query/power-query-ganz-einfach-erklaert", label: "Power Query" },
          { to: "/power-bi-online-kurs", label: "Power-BI-Kurs" },
        ],
      },
    ],
  },
  {
    slug: "power-pivot-ganz-einfach-erklaert",
    title: "Power Pivot ganz einfach erklärt",
    kicker: "Power Pivot",
    category: "Power Pivot",
    hubPath: "/power-pivot",
    path: "/power-pivot/power-pivot-ganz-einfach-erklaert",
    excerpt:
      "Beziehungen statt SVERWEIS-Ketten, Measures in DAX, das Datenmodell in Excel. Und wann du besser gleich Power BI nimmst.",
    image: "/images/course/power-pivot.jpg",
    readMinutes: 10,
    body: [
      {
        heading: "Überblick und Einsatz",
        paragraphs: [
          "Power Pivot setzt Tabellen aus unterschiedlichen Quellen über ein Datenmodell in Beziehung. Beispiel Gewinn: Umsätze und Kosten liegen selten in derselben Liste. In klassischem Excel ziehst du sie mit SVERWEIS über eine Schlüsselspalte (Datum) zusammen.",
          "Bei 10 oder 100 Tabellen wird das unübersichtlich. Jede neue Dimension (Gewinn pro Produktkategorie) bedeutet wieder SVERWEIS. Power Pivot legt die Beziehungen einmal fest. Danach rechnest du mit DAX (Data Analysis Expressions) in einer Measure – unabhängig davon, wie du die Pivot später drehst.",
        ],
      },
      {
        heading: "Power Pivot vs. Power Query",
        paragraphs: [
          "Power Query holt und säubert Daten (ETL). Power Pivot modelliert und rechnet darauf. Typisch: Query lädt saubere Tabellen ins Datenmodell, Pivot/DAX wertet aus. Beides sitzt in Excel und in Power BI.",
        ],
      },
      {
        heading: "Power Pivot vs. Power BI",
        paragraphs: [
          "Dasselbe Datenmodell, dieselbe Sprache (DAX). Power Pivot bleibt in der Excel-Datei – gut, wenn der Bericht eine Mappe bleiben soll. Power BI ist die eigene Anwendung zum Teilen, mit Service, Apps und größeren Datenmengen.",
          "Wenn nur du die Auswertung brauchst und Excel das Ziel ist: Power Pivot. Wenn viele Menschen dashboards im Browser brauchen: Power BI. Viele starten in Excel und nehmen das Modell später mit.",
        ],
      },
      {
        heading: "Wie du DAX lernst",
        paragraphs: [
          "Zuerst Beziehungen verstehen (1:n, keine Many-to-many-Bastelreien). Dann Measures statt berechneter Spalten, wo Aggregation zählt. CALCULATE ist der Hebel. Zeitintelligenz (YTD, Vorjahr) kommt danach. Im Excelhero-Kurs und im Power-BI-Kurs bauen wir das an echten Tabellen.",
        ],
      },
    ],
  },
  {
    slug: "chatgpt-und-excel",
    title: "ChatGPT und Excel",
    kicker: "ChatGPT",
    category: "ChatGPT",
    hubPath: "/chatgpt-und-excel",
    path: "/ki/chatgpt-und-excel",
    excerpt:
      "Formeln erklären, VBA-Entwürfe prüfen, Prompts die sitzen – und wo du die KI nicht allein lassen solltest. Plus Copilot in Office.",
    image: "/images/workspace-night.jpg",
    readMinutes: 11,
    body: [
      {
        paragraphs: [
          "Die Abschnitte 1 bis 5 der Originalseite wurden als Antworten auf Überschriften generiert. Hier die Fassung für den Arbeitsalltag: Was ChatGPT ist, worin der Unterschied zur Suche liegt, und wie du es in Excel und VBA sinnvoll einsetzt.",
        ],
      },
      {
        heading: "Was ist ChatGPT?",
        paragraphs: [
          "ChatGPT ist ein Sprachmodell (GPT). Es erzeugt Text aus Mustern, die es in Trainingsdaten gelernt hat: Erklärungen, Übersetzungen, Entwürfe, Support-Antworten. Es „weiß“ nichts über deine Mappe, solange du den Inhalt nicht in den Prompt packst.",
        ],
      },
      {
        heading: "Unterschied zur Google-Suche",
        paragraphs: [
          "Google findet Seiten. ChatGPT formuliert eine Antwort. Das ist schneller, wenn du eine Formel erklärt haben willst – und riskanter, wenn das Modell halluziniert. Suche bleibt besser für aktuelle Doku, Versionsunterschiede und entlegene Fehlermeldungen.",
        ],
      },
      {
        heading: "Hilfe in Excel",
        paragraphs: [
          "Pros: Formel erklären lassen, Syntax vorschlagen, Fehlersuche („warum #NV?“), Texte umschreiben, Dummy-Daten erzeugen.",
          "Cons: Kein Zugriff auf deine Datei, veraltete Funktionsnamen, falsche Argumentreihenfolge. Jede Formel in einer leeren Mappe gegenprüfen, bevor sie in den Bericht wandert.",
        ],
      },
      {
        heading: "Hilfe bei VBA",
        paragraphs: [
          "Pros: Gerüst für Schleifen, Range-Operationen, UserForm-Skizzen. Cons: veraltete APIs, unsichere Patterns (Select/Activate), Code der „läuft“, aber Daten überschreibt. Immer in einer Kopie testen.",
        ],
      },
      {
        heading: "Nützliche Prompts",
        paragraphs: [
          "„Erkläre diese Formel Schritt für Schritt und nenne den englischen Namen: …“",
          "„Schreibe eine VBA-Prozedur, die in Tabelle Daten alle Duplikate in Spalte A markiert. Kein Select, mit Fehlerbehandlung.“",
          "„Gib mir Power-Query-M für: CSV aus Ordner, erste Zeile als Header, Datumsspalte als Datum.“",
          "Lege die Excel-Version und ob 365/Web/Windows in den Prompt – sonst bekommst du XVERWEIS in einer Datei, die nur SVERWEIS kann.",
        ],
      },
      {
        heading: "Copilot in Office",
        paragraphs: [
          "Copilot sitzt in der App und sieht den Kontext der Datei (mit den richtigen Lizenzen). ChatGPT im Browser sieht ihn nicht. Für vertrauliche Daten: Unternehmensrichtlinie, keine Klarnamen, keine Kundendateien in öffentliche Chats.",
        ],
      },
    ],
  },
  {
    slug: "excel-tabelle-erstellen",
    title: "Excel-Tabelle erstellen – ganz einfach erklärt",
    kicker: "Tabellen",
    category: "Tabellen",
    hubPath: "/excel-tabellen",
    path: "/excel-tabellen/excel-tabelle-erstellen",
    excerpt:
      "Strg+T macht aus einem Bereich eine intelligente Tabelle: Filter in der Kopfzeile, automatisches Mitwachsen, strukturierte Bezüge.",
    related: ["pivot-tabellen", "power-query", "datenschnitt"],
    image: "/images/guides/tabellen/shortcut.png",
    files: [{ href: "/files/01-Liste-vs-Tabelle.xlsx", label: "Original: Liste vs. Tabelle (.xlsx)" }],
    readMinutes: 12,
    body: [
      {
        paragraphs: [
          "Tabellen werten Daten einfacher aus als lose Listen. Eine intelligente Tabelle hat Spaltenköpfe mit Filter, gebänderte Zeilen und optional eine Ergebniszeile.",
        ],
      },
      {
        heading: "Tabelle erstellen",
        paragraphs: [
          "Weg 1: Bereich markieren → Einfügen → Tabelle. Dialog: stimmt der Bereich, hat er Überschriften?",
          "Weg 2, der schnellere: Bereich markieren → Strg+T (Mac: Ctrl+T). Danach hat die Mappe einen Namen wie Tabelle1 – unter Tabellenentwurf umbenennen.",
        ],
        steps: [
          "In die Liste klicken, Strg+T, Häkchen „Tabelle hat Überschriften“.",
          "Unter Tabellenentwurf einen sprechenden Namen vergeben (Umsatz, nicht Tabelle1).",
          "Ergebniszeile einschalten, wenn du Summe/Anzahl direkt unter den Daten willst.",
          "Formeln mit strukturierten Bezügen schreiben: =SUMME(Umsatz[Betrag]).",
          "Pivot und Power Query direkt auf diese Tabelle setzen – dann wächst alles mit.",
        ],
        images: [
          {
            src: "/images/guides/tabellen/einfuegen.png",
            alt: "Tabelle über das Menüband einfügen",
            caption: "Einfügen → Tabelle, oder schneller Strg+T.",
          },
          {
            src: "/images/guides/tabellen/shortcut.png",
            alt: "Dialog Tabelle erstellen",
            caption: "Häkchen „Tabelle hat Überschriften“, danach unter Tabellenentwurf umbenennen.",
          },
        ],
      },
      {
        heading: "Erweitern, Zeilen, Spalten",
        paragraphs: [
          "Unten rechts am Anfasser ziehen, oder einfach unter der letzten Zeile bzw. rechts daneben tippen – die Tabelle wächst mit. Über Tabellenentwurf → Tabellengröße ändern geht es präzise. Zeilen und Spalten innerhalb des Tabellenbereichs ziehen die Tabelle automatisch mit.",
        ],
        images: [
          {
            src: "/images/guides/tabellen/erweitern.png",
            alt: "Tabelle erweitern",
            caption: "Anfasser unten rechts – oder einfach in die nächste Zeile tippen.",
          },
        ],
      },
      {
        heading: "Sortieren, filtern, formatieren",
        paragraphs: [
          "Dropdowns in den Köpfen: Text-, Zahlen- und Datumsfilter. Unter Tabellenentwurf: Kopfzeile, Ergebniszeile, erste/letzte Spalte hervorheben, gebänderte Zeilen, Filter-Schaltfläche. Formatvorlagen per Klick, eigene Vorlagen fürs Corporate Design.",
        ],
        images: [
          {
            src: "/images/guides/tabellen/format.png",
            alt: "Tabellenformatoptionen",
            caption: "Tabellenentwurf: Kopfzeile, Ergebniszeile, gebänderte Zeilen, Formatvorlagen.",
          },
          {
            src: "/images/guides/tabellen/ergebniszeile.png",
            alt: "Ergebniszeile in der Excel-Tabelle",
            caption: "Ergebniszeile: Summe, Anzahl, Mittelwert direkt unter den Daten.",
          },
        ],
      },
      {
        heading: "Formeln, Pivot, Schnellanalyse",
        paragraphs: [
          "In Tabellen nutzt Excel strukturierte Bezüge wie =SUMME(Tabelle1[Umsatz]) statt =SUMME(D2:D500) – die Formel wächst mit. Eine Pivot auf der Tabelle bekommt neue Zeilen automatisch, sobald du aktualisierst.",
          "Die Schnellanalyse (Strg+Q) am unteren Rand markierter Zellen liefert Blitz-Auswertungen. Zum Drucken: Nur die Tabelle markieren oder Druckbereich setzen. Zurück in einen normalen Bereich: Tabellenentwurf → In Bereich konvertieren – Formatierung bleibt, Intelligenz geht.",
        ],
        images: [
          {
            src: "/images/guides/tabellen/pivot.png",
            alt: "Pivot auf einer Excel-Tabelle",
            caption: "Pivot auf der Tabelle: neue Zeilen sind nach dem Aktualisieren drin.",
          },
        ],
      },
      {
        heading: "Tabelle vs. Liste",
        paragraphs: [
          "Vorteil 1: Sortieren erwischt nicht „nur die eine Spalte“. Vorteil 2: automatische Erweiterung. Vorteil 3: Diagramme und Pivots bekommen neue Daten. Vorteil 4: Datenschnitte als visuelle Filter. Vorteil 5: Schnellanalyse. Wer Reports baut, startet mit Strg+T, nicht mit einer nackten Liste.",
        ],
        links: [
          { to: "/pivot-tabellen/pivot-tabellen-ganz-einfach-erklaert", label: "Pivot-Tabellen" },
          { to: "/allgemein/datenschnitt", label: "Datenschnitt" },
          { to: "/power-query/power-query-ganz-einfach-erklaert", label: "Power Query" },
        ],
      },
    ],
  },
  {
    slug: "top-10-excel-tipps",
    title: "Top 10 Excel-Tipps: Zeit sparen und effizienter arbeiten",
    kicker: "Tipps & Tricks",
    category: "Tipps & Tricks",
    hubPath: "/tipps-tricks",
    path: "/tipps-tricks/top-10-excel-tipps",
    excerpt:
      "Im Schnitt 7 Stunden Excel pro Woche – 20 % effizienter sind rund 2.000 Stunden im Berufsleben. Die Handgriffe, die den Unterschied machen.",
    image: "/images/workspace-night.jpg",
    readMinutes: 9,
    body: [
      {
        paragraphs: [
          "Kursteilnehmer arbeiten im Schnitt 7 Stunden pro Woche mit Excel. Das sind rund 300 Stunden im Jahr und über 10.000 im Berufsleben. 20 % effizienter: etwa 2.000 Stunden, ein Berufsjahr. Das eigentliche Problem: Wir nutzen nur einen Bruchteil von Excel. Viele Schritte lassen sich geschickt lösen oder ganz automatisieren.",
          "Es müssen nicht Hunderte Funktionen sein. Oft reicht zu wissen, was Excel kann. Damit du nicht – wie ich damals – unnötig Zeit verlierst, diese Sammlung.",
        ],
      },
      {
        heading: "#1 Statusleiste erweitern",
        paragraphs: [
          "Rechtsklick auf die Statusleiste: Summe, Mittelwert, Anzahl, Min, Max der Markierung – ohne Formel. Ein Blick nach unten statt =SUMME() in eine Hilfszelle.",
        ],
      },
      {
        heading: "#2 Formatierungspinsel",
        paragraphs: [
          "Ein Klick kopiert das Format auf eine Zelle, Doppelklick hält den Pinsel fest, bis Escape. Format einmal richtig, dann verteilen.",
        ],
      },
      {
        heading: "#3 F2 und Escape",
        paragraphs: [
          "F2 bearbeitet die aktive Zelle, die Pfeiltasten laufen in der Formel statt zur Nachbarzelle. Escape bricht ab, ohne zu speichern. Maus optional.",
        ],
      },
      {
        heading: "#4 F4 – Bezüge umschalten",
        paragraphs: [
          "In der Formel F4: A1 → $A$1 → A$1 → $A1 → A1. Absolute und gemischte Bezüge, ohne Dollarzeichen zu tippen.",
        ],
      },
      {
        heading: "#5 F9 – Zwischenergebnis",
        paragraphs: [
          "In der Formelzeile einen Teil markieren, F9: Excel rechnet genau dieses Stück. Danach Escape, sonst überschreibst du die Formel mit der Zahl.",
        ],
      },
      {
        heading: "#6 F5 – Gehe zu",
        paragraphs: [
          "F5 oder Strg+G springt zu einer Adresse oder einem Namen. „Inhalte auswählen“ trifft leere Zellen, Formeln, Konstanten.",
        ],
      },
      {
        heading: "#7 Leere Zellen entfernen",
        paragraphs: [
          "Bereich markieren → F5 → Inhalte auswählen → Leere Zellen → Zeilen löschen. Lücken in Importen sind in Sekunden weg.",
        ],
      },
      {
        heading: "#8 Text in Spalten",
        paragraphs: [
          "Daten → Text in Spalten: Semikolon, Tab, fest Breite. Der Klassiker nach CSV-Paste, bevor Power Query antritt.",
        ],
      },
      {
        heading: "#9 Duplikate entfernen",
        paragraphs: [
          "Daten → Duplikate entfernen, Spalten wählen. Vorher die Mappe speichern – der Befehl löscht Zeilen, er markiert sie nicht.",
        ],
      },
      {
        heading: "#10 Mehrere Fenster",
        paragraphs: [
          "Ansicht → Neues Fenster, daneben anordnen. Zwei Stellen derselben Mappe gleichzeitig, ohne hin- und herzuspringen.",
        ],
      },
      {
        heading: "Bonus: Navigieren",
        paragraphs: [
          "Strg+Pfeil springt an den Rand des Blocks, Strg+Umschalt+Pfeil markiert ihn. Strg+Leertaste Spalte, Umschalt+Leertaste Zeile. Strg+Bild auf/ab wechselt Blätter.",
        ],
      },
    ],
  },
];
