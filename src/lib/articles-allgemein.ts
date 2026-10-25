import type { Article } from "./articles";

const IMG = "/images/spreadsheet-closeup.jpg";
const HUB = "/allgemein";

function a(
  slug: string,
  title: string,
  excerpt: string,
  minutes: number,
  body: Article["body"],
): Article {
  return {
    slug,
    title,
    kicker: "Allgemein",
    category: "Allgemein",
    hubPath: HUB,
    path: `/allgemein/${slug}`,
    excerpt,
    image: IMG,
    readMinutes: minutes,
    body,
  };
}

export const ALLGEMEIN_ARTICLES: Article[] = [
  a(
    "add-ins",
    "Add-Ins",
    "Zusätzliche Funktionen nachladen: Analysis ToolPak, Solver und eigene Erweiterungen.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Add-Ins erweitern Excel um Funktionen, die nicht zum Standard gehören – Analysis ToolPak für Regression, Solver für Optimierung, Power Pivot in älteren Versionen, eigene COM- oder Web-Add-Ins."],
      },
      {
        heading: "Add-Ins aufrufen und hinzufügen",
        paragraphs: ["Datei → Optionen → Add-Ins. Unten bei Verwalten „Excel-Add-Ins“ wählen → Los. Häkchen setzen, OK. Manche Add-Ins liegen als .xlam: über Durchsuchen einbinden. Deaktivieren reicht, um sie wegzunehmen, ohne sie zu löschen."],
      },
    ],
  ),
  a(
    "excel-autosumme",
    "Autosumme",
    "Die Summe unter der Markierung – und dieselben AutoFunktionen für Mittelwert, Anzahl, Min und Max.",
    5,
    [
      {
        heading: "Funktionsweise",
        paragraphs: ["Markiere die Zahlen und klicke auf Autosumme (Register Start oder Formeln). Excel schlägt =SUMME() für die angrenzende Spalte oder Zeile vor. Enter bestätigt."],
      },
      {
        heading: "Spalten, weitere Autos und Shortcut",
        paragraphs: ["Für mehrere Spalten den Bereich inkl. Leerzeile darunter markieren. Das Dropdown neben Autosumme liefert Mittelwert, Anzahl, Max, Min. Shortcut: Alt+= (Windows)."],
      },
    ],
  ),
  a(
    "benutzerinformationen",
    "Benutzerinformationen",
    "Name und Initialen, die Excel in Kommentaren, Eigenschaften und der Dokumentprüfung verwendet.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Unter Datei → Optionen → Allgemein stehen Benutzername und Initialen. Die tauchen in Kommentaren, der Änderungsverfolgung und den Dateieigenschaften auf."],
      },
      {
        heading: "Aufrufen",
        paragraphs: ["Anpassen, wenn du an geteilten Mappen arbeitest – sonst stehen dort noch der IT-Account oder „Benutzer“."],
      },
    ],
  ),
  a(
    "bereiche-blaetter-schuetzen",
    "Bereiche & Blätter schützen",
    "Zellen, Blätter und die ganze Mappe sperren – mit Passwort oder ohne, und gezielt entsperrte Eingabezellen.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Schutz verhindert versehentliches Überschreiben, nicht Krypto-Sicherheit. Zuerst Zellen formatieren (Schutz → Gesperrt aus), dann das Blatt schützen."],
      },
      {
        heading: "Bereiche, Blätter, Mappe",
        paragraphs: ["Zulässige Bereiche unter Überprüfen → Benutzer dürfen Bereiche bearbeiten. Blatt schützen: Struktur, Filter, Sortieren optional erlauben. Arbeitsmappe schützen sperrt das Einfügen/Löschen von Blättern."],
      },
    ],
  ),
  a(
    "blitzvorschau",
    "Blitzvorschau",
    "Ein Muster in der Nachbarspalte – Excel füllt den Rest, sobald es die Regel erkennt.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Blitzvorschau (Flash Fill) erkennt, dass du aus „Müller, Anna“ „Anna“ machst, und zieht das auf die Spalte. Keine Formel, das Ergebnis ist hart geschrieben."],
      },
      {
        heading: "Aufrufen und anwenden",
        paragraphs: ["Daten → Blitzvorschau oder Strg+E. Erst zwei, drei Beispiele tippen. Wenn Excel falsch liegt: Rückgängig, ein weiteres Beispiel, erneut Strg+E. Für dauerhafte Logik ist Power Query oder eine Formel robuster."],
      },
    ],
  ),
  a(
    "excel-csv-import-probleme-mit-trennzeichen",
    "CSV-Import: Probleme mit Trennzeichen",
    "Komma, Semikolon, Tab: warum der CSV-Import Spalten zerreißt – und wie Daten → aus Text/CSV es richtet.",
    5,
    [
      {
        heading: "Das Problem",
        paragraphs: ["Deutsche Excel-Versionen erwarten Semikolon, viele Systeme liefern Komma. Dann landet alles in einer Spalte oder die Dezimalzahlen zerfallen."],
      },
      {
        heading: "Der Weg",
        paragraphs: ["Daten → Aus Text/CSV, Datei wählen, Trennzeichen und Dezimalzeichen im Dialog setzen, Laden. Nicht per Doppelklick die CSV in Excel öffnen – der Assistent umgeht die Ländereinstellung. Dauerhaft: Power Query, dann Aktualisieren statt neu importieren."],
      },
    ],
  ),
  a(
    "daten-abrufen-und-transformieren",
    "Daten abrufen und transformieren",
    "Power Query im Menüband: vorhandene Verbindungen, Abfragen und Aktualisieren.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Unter Daten → Daten abrufen und transformieren holst du Tabellen aus Dateien, Ordnern, Datenbanken und dem Web. Jede Abfrage speichert die Schritte."],
      },
      {
        heading: "Verbindungen und aktualisieren",
        paragraphs: ["Vorhandene Verbindungen und Abfragen siehst du im Aufgabenbereich. Daten → Alle aktualisieren lädt neu. Das ist der Einstieg in Power Query, ohne den Editor sofort zu öffnen."],
      },
    ],
  ),
  a(
    "daten-aus-bild-einfuegen",
    "Daten aus Bild einfügen",
    "Eine Tabelle fotografieren oder einen Screenshot nehmen – Excel liest die Zellen.",
    4,
    [
      {
        heading: "Überblick",
        paragraphs: ["Daten → Aus Bild: Datei oder Zwischenablage. Excel erkennt Raster und Zahlen, du prüfst die Vorschau und übernimmst. Gut für Listen aus PDFs und Whiteboards – danach Datentypen und Trennzeichen kontrollieren."],
      },
    ],
  ),
  a(
    "daten-filtern",
    "Daten filtern",
    "Autofilter, benutzerdefinierte Regeln und das, was nach dem Filtern wirklich noch da ist.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Filter blendet Zeilen aus, löscht sie nicht. In intelligenten Tabellen sitzt der Filter schon in der Kopfzeile."],
      },
      {
        heading: "Erstellen und anwenden",
        paragraphs: ["Daten → Filtern oder Strg+Umschalt+L. Dropdown: Text-, Zahlen-, Datumsfilter, Farbe, Top 10. Benutzerdefiniert: beginnt mit, enthält, zwischen. Mehrere Spalten filtern sich UND. Ergebnis: die Statusleiste zeigt „n von m Datensätzen“."],
      },
    ],
  ),
  a(
    "daten-in-excel-loeschen",
    "Daten in Excel löschen",
    "Nicht nur Entf: Formate, Inhalte, Kommentare und Hyperlinks getrennt entfernen.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Start → Löschen unterscheidet Alles, Formate, Inhalte, Kommentare/Notizen, Hyperlinks. Entf leert nur den Inhalt, die Formatierung bleibt."],
      },
      {
        heading: "Was wohin gehört",
        paragraphs: ["Formate löschen nimmt Farben und Zahlenformate. Inhalte löschen leert Werte/Formeln. Links lösen die URL, der Anzeigetext bleibt. Große Bereiche: F5 → Inhalte auswählen, dann gezielt löschen."],
      },
    ],
  ),
  a(
    "daten-konsolidieren",
    "Daten konsolidieren",
    "Mehrere gleich aufgebaute Bereiche zu einer Summe (oder Anzahl, Mittelwert) zusammenziehen.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Daten → Konsolidieren addiert gleich strukturierte Tabellen – etwa Monatsblätter. Nach Position oder nach Beschriftung."],
      },
      {
        heading: "Anwenden",
        paragraphs: ["Verweis je Bereich hinzufügen, Funktion wählen (Summe Standard), Häkchen bei oberster Zeile / linker Spalte wenn Labels da sind. Ergebnis landet am Ziel. Für wachsende Daten ist Power Query (Anfügen) der modernere Weg."],
      },
    ],
  ),
  a(
    "daten-sortieren",
    "Daten sortieren",
    "A–Z, nach Farbe, nach eigener Reihenfolge – und warum du vorher die ganze Tabelle markieren musst.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Sortieren ordnet Zeilen. Markierst du nur eine Spalte, fragt Excel, ob die Auswahl erweitert werden soll – sonst zerreißen die Datensätze."],
      },
      {
        heading: "Alphabetisch und benutzerdefiniert",
        paragraphs: ["Daten → Sortieren. Mehrere Ebenen (erst Region, dann Umsatz). Benutzerdefinierte Liste: Mo–So, Quartale, Schulnoten. In Tabellen (Strg+T) bleibt der Zusammenhang automatisch erhalten."],
      },
    ],
  ),
  a(
    "datenanalyse",
    "Datenanalyse",
    "Das Analysis ToolPak: Regression, deskriptive Statistik, Histogramme ohne Pivot.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Datenanalyse ist ein Add-In. Datei → Optionen → Add-Ins → Excel-Add-Ins → Analysis ToolPak."],
      },
      {
        heading: "Durchführen",
        paragraphs: ["Daten → Datenanalyse. Deskriptive Statistik, Regression, gleitender Durchschnitt, Zufallszahlengenerierung. Ausgabe auf ein neues Blatt. Für wiederholbare Modelle sind Formeln oder Power Query nachvollziehbarer."],
      },
    ],
  ),
  a(
    "datenfolge-erstellen",
    "Datenfolge erstellen",
    "Listen, die Excel kennt: Monate, Wochentage, eigene Reihen unter Datei → Optionen.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Eine Datenfolge ist eine gespeicherte Reihenfolge (Jan–Dez). Ziehen am Anfasser füllt sie."],
      },
      {
        heading: "Erstellen",
        paragraphs: ["Datei → Optionen → Erweitert → Benutzerdefinierte Listen bearbeiten. Neue Liste importieren oder tippen. Danach verhält sie sich wie die eingebauten Monatslisten."],
      },
    ],
  ),
  a(
    "datenreihe-erstellen",
    "Datenreihe erstellen",
    "Startwert, Schrittweite, Endwert: lineare, zeitliche und wachsende Reihen.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Start → Füllbereich → Reihe, oder Anfasser ziehen. Excel erkennt 1, 2, 3 und Datumsschritte."],
      },
      {
        heading: "Ausfüllen",
        paragraphs: ["Typ: linear, Wachstum, Datum, AutoAusfüllen. Schrittweite 5, Endwert 100. Für Arbeitstage die Datumseinheit „Wochentag“. Beispiel: 01.01. und zwei Zellen markieren, dann ziehen – Monat für Monat."],
      },
    ],
  ),
  a(
    "datenschnitt",
    "Datenschnitt",
    "Visuelle Filter für Tabellen und Pivots – klicken statt Dropdown.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Ein Datenschnitt (Slicer) ist ein Filter als Schaltflächen. In Pivots Standard, in intelligenten Tabellen unter Tabellenentwurf."],
      },
      {
        heading: "Erstellen und Einstellungen",
        paragraphs: ["Einfügen → Datenschnitt, Felder wählen. Mehrfachauswahl, Überschrift ausblenden, Spaltenzahl. Mehrere Pivots verbindest du über Datenschnittverbindungen."],
      },
    ],
  ),
  a(
    "datentypen",
    "Datentypen",
    "Aktien, Geografie und eigene Datentypen: aus Text wird eine verknüpfte Entität.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Daten → Datentypen wandelt „Frankreich“ in Geografie mit Bevölkerung, Hauptstadt, Fläche. Aktien ähnlich."],
      },
      {
        heading: "Erstellen",
        paragraphs: ["Spalte markieren, Datentyp wählen, Felder per Zusatzkarte in Nachbarspalten ziehen. Braucht Microsoft-365 und Internetzugang. Für interne Stammdaten bleiben klassische SVERWEIS/XVERWEIS."],
      },
    ],
  ),
  a(
    "definierte-namen",
    "Definierte Namen",
    "Bereiche taufen: Umsatz statt $C$2:$C$500 – in Formeln und in der Namensleiste.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Namen machen Formeln lesbar und ersetzen krumme Bezüge. Formeln → Namensmanager."],
      },
      {
        heading: "Definieren und in Formeln",
        paragraphs: ["Namensleiste, oder Formeln → Namen definieren. In der Formel den Namen tippen, Excel vervollständigt. Bezüge relativ zum Blatt oder zur Mappe. Namensmanager: umbenennen, falsche Bezüge finden."],
      },
    ],
  ),
  a(
    "dokumentpruefung",
    "Dokumentprüfung",
    "Autokorrektur, Rechtschreibung und was Excel still „repariert“, während du tippst.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Datei → Optionen → Dokumentprüfung. Autokorrektur-Optionen: ersetzen während der Eingabe, krumme Anführungszeichen, Internetpfade."],
      },
      {
        heading: "Anpassen",
        paragraphs: ["Regeln abschalten, die aus (c) ein Copyright machen, wenn du das nicht willst. Wörterbuch und französische/englische Prüfung getrennt von der Systemsprache."],
      },
    ],
  ),
  a(
    "drucken",
    "Drucken",
    "Gitternetz, Überschriften auf jeder Seite, Bereich, Querformat – bevor du Papier verschwendest.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Strg+P zeigt die Vorschau. Die meisten Überraschungen kommen von zu breiten Spalten und fehlendem Druckbereich."],
      },
      {
        heading: "Einstellungen",
        paragraphs: ["Seitenlayout: Gitternetzlinien und Überschriften drucken, Wiederholungszeilen oben (Titel). Blattoptionen, Skalierung „Anpassen an 1 Seite breit“. Kopf-/Fußzeile, Ränder. Druckbereich unter Seitenlayout setzen."],
      },
    ],
  ),
  a(
    "duplikate-entfernen",
    "Duplikate entfernen",
    "Ein Klick löscht doppelte Zeilen – vorher speichern, Spalten wählen, Ergebnis prüfen.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Daten → Duplikate entfernen. Excel behält die erste Zeile, löscht die restlichen Treffer unwiderruflich."],
      },
      {
        heading: "Anwenden",
        paragraphs: ["Spalten anhaken, die gemeinsam eindeutig sein sollen (nur E-Mail vs. ganze Zeile). Die Info „n Duplikate entfernt, m eindeutig“ prüfen. Zum Markieren statt Löschen: bedingte Formatierung → Duplikate."],
      },
    ],
  ),
  a(
    "excel-automatisieren",
    "Excel automatisieren",
    "Wann VBA, Power Query, Office Script oder kaufen – und wann die Handarbeit billiger bleibt.",
    5,
    [
      {
        heading: "Wann es Sinn macht",
        paragraphs: ["Aufgabe dauert lange, wiederholt sich (wöchentlich/monatlich) und die Schritte sind klar. Einmalige Aufräumaktionen oft nicht automatisieren."],
      },
      {
        heading: "Wie und Make-or-Buy",
        paragraphs: ["Power Query für Import/Transform, Pivot für Auswertung, Makros/VBA für Klicks in Excel, Office Script + Power Automate in der Cloud. Standardtools (Angebot, Rechnung) gibt es oft günstig – erst schauen, dann bauen."],
      },
    ],
  ),
  a(
    "excel-dropdown-erstellen",
    "Excel-Dropdown erstellen",
    "Datenüberprüfung: Liste aus Zellen, aus einer Tabelle – und abhängige Dropdowns.",
    5,
    [
      {
        heading: "Wofür",
        paragraphs: ["Tippfehler vermeiden, Statuswerte begrenzen, Formulare steuerbar machen."],
      },
      {
        heading: "Schritte",
        paragraphs: ["Zellen markieren → Daten → Datenüberprüfung → Liste. Quelle: $E$2:$E$10 oder =Tabelle1[Status]. Fehlermeldung setzen. Abhängige Listen: INDIREKT oder FILTER auf die erste Wahl. Intelligente Tabelle plus Name wächst mit."],
      },
    ],
  ),
  a(
    "excel-inhaltsverzeichnis",
    "Excel-Inhaltsverzeichnis mit einem Klick",
    "Alle Blätter als klickbare Liste – mit Filter und Hyperlink zurück.",
    5,
    [
      {
        heading: "Mit Filter",
        paragraphs: ["Ein Blatt „Inhalt“, Formel oder Makro listet Blattnamen. HYPERLINK springt hin. Filter, wenn die Mappe viele Register hat."],
      },
      {
        heading: "Tipp",
        paragraphs: ["In der Statusleiste rechts auf die Register-Pfeile rechtsklicken: Excel zeigt alle Blätter – Navigation ohne Inhaltsblatt. Für verteilte Mappen bleibt das Inhaltsblatt klarer."],
      },
    ],
  ),
  a(
    "excel-prozent",
    "Excel Prozentrechnung bei Rechnungen und Rabatten",
    "MwSt. drauf, raus, Netto aus Brutto – die vier Rechnungen, die ständig schiefgehen.",
    5,
    [
      {
        heading: "Die vier Fälle",
        paragraphs: ["19 % von 1000: =1000*0,19. 19 % auf 1000 (Brutto): =1000*1,19. Netto aus 99 Brutto: =99/1,19. Steueranteil aus 99: =99-99/1,19 oder =99*0,19/1,19."],
      },
      {
        heading: "Tipp Währung",
        paragraphs: ["Zellen als Währung formatieren, nicht das €-Zeichen in die Formel schreiben. Prozentsatz als 0,19 oder 19 % – nicht 19, sonst rechnest du das Neunzehnfache."],
      },
    ],
  ),
  a(
    "excel-zeilenumbruch",
    "Zeilenumbruch in der Zelle",
    "Alt+Enter in der Zelle oder Format → Umbruch – und dann Zeilenhöhe anpassen.",
    5,
    [
      {
        heading: "In der Zelle",
        paragraphs: ["Während der Eingabe Alt+Enter (Mac: Ctrl+Option+Return) erzwingt eine neue Zeile im Text."],
      },
      {
        heading: "Als Formatierung",
        paragraphs: ["Start → Umbruch. Spaltenbreite begrenzt, der Text fließt. Zeilenhöhe doppelt klicken oder ziehen. Für Importe: wechselnde Umbrüche mit Suchen/Ersetzen (Strg+J) finden."],
      },
    ],
  ),
  a(
    "exportieren-veroeffentlichen",
    "Exportieren & Veröffentlichen",
    "PDF, anderes Dateiformat, Power BI – wie die Mappe die Excel-Welt verlässt.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Datei → Exportieren bzw. Speichern unter. PDF fürs Archiv und Versand ohne Formeln."],
      },
      {
        heading: "PDF, Typ, Power BI",
        paragraphs: ["PDF/XPS erstellen, Seite einrichten vorher setzen. Dateityp: .xlsx, .xls, .csv, .ods. In Power BI veröffentlichen, wenn die Mappe ein Modell hat und die Lizenz stimmt."],
      },
    ],
  ),
  a(
    "fenster-fixieren",
    "Fenster fixieren",
    "Kopfzeile und erste Spalte sichtbar halten, während du nach unten und rechts rollst.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Ansicht → Fenster fixieren. Die Fixierung sitzt oberhalb und links der aktiven Zelle."],
      },
      {
        heading: "Varianten",
        paragraphs: ["Fenster fixieren: z. B. Zelle B2 aktiv → Zeile 1 und Spalte A bleiben. Shortcuts: oberste Zeile, erste Spalte. Aufheben über denselben Befehl. Nicht mit Teilen verwechseln."],
      },
    ],
  ),
  a(
    "freigeben",
    "Freigeben",
    "OneDrive, Link, Teams, Zugriffsrechte – Zusammenarbeit ohne die Mappe zu mailen.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Datei → Freigeben. Lokal bleibt die Datei bei dir; in OneDrive können mehrere gleichzeitig tippen."],
      },
      {
        heading: "Optionen",
        paragraphs: ["Mail, Link kopieren (anzeigen oder bearbeiten), Teams-Kanal, Zugriff verwalten (Personen entfernen). Konflikte bei gleichzeitiger Bearbeitung löst Excel AutoSave – Versionen unter Datei → Informationen."],
      },
    ],
  ),
  a(
    "funktionsbibliothek",
    "Funktionsbibliothek",
    "Das Register Formeln nach Kategorien: Finanzen, Logik, Text, Datum – und Funktion einfügen.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Formeln → Funktionsbibliothek. Kategorien statt der kompletten Liste."],
      },
      {
        heading: "Finden und einfügen",
        paragraphs: ["Funktion einfügen (fx) sucht nach Beschreibung. Autosumme sitzt daneben. Argumente füllst du im Dialog oder in der Formelzeile. Unsichere Namen: deutsche vs. englische Mappe (SUMME/SUM)."],
      },
    ],
  ),
  a(
    "gliederung-erstellen",
    "Gliederung erstellen",
    "Zeilen und Spalten gruppieren: Plus/Minus am Rand, ohne Daten zu löschen.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Daten → Gliederung. Gruppieren fasst Detailzeilen unter einer Summe zusammen."],
      },
      {
        heading: "Erstellen und aufheben",
        paragraphs: ["Markieren → Gruppieren. AutoGliederung, wenn Summenformeln schon da sind. Gruppierung aufheben einzeln oder alle. Die Punkte 1/2/3 links steuern die Tiefe."],
      },
    ],
  ),
  a(
    "grafiken-objekte-bearbeiten-anpassen",
    "Grafiken & Objekte anordnen/bearbeiten",
    "Bilder, Formen, Icons: anordnen, Größe, Ebene.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Markierte Grafiken bekommen den Register Bildformat bzw. Formformat."],
      },
      {
        heading: "Anordnen und Größe",
        paragraphs: ["Anordnen: in den Vordergrund, ausrichten, gruppieren. Größe über Anfasser oder exakte cm. Illustrationen unter Einfügen: Bilder, Formen, Icons, SmartArt."],
      },
    ],
  ),
  a(
    "informationen",
    "Informationen",
    "Dateiname, Speicherort, Eigenschaften, zugehörige Daten – das Info-Register.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Datei → Informationen. Pfad, Größe, Autor, Titel, Tags."],
      },
      {
        heading: "Eigenschaften",
        paragraphs: ["Eigenschaften anzeigen (erweitert): Firma, Status, Kategorien. Hilft bei der Suche im Explorer und in der Dokumentprüfung vor dem Versand."],
      },
    ],
  ),
  a(
    "inhalt-ausrichtung",
    "Inhalt Ausrichtung",
    "Links, zentriert, oben, Winkel, Einzug – ohne die Zahl zu verändern.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Start → Ausrichtung. Horizontal, vertikal, Einzug, Orientierung (Grad)."],
      },
      {
        heading: "Anwenden",
        paragraphs: ["Überschriften oft zentriert und umbrochen, Zahlen rechts, Texte links. Zusammenführen und zentrieren nur für Titel – in Datenlisten bricht es Sortieren und Filter."],
      },
    ],
  ),
  a(
    "inhalte-auswaehlen",
    "Inhalte auswählen",
    "F5 → Inhalte: Formeln, Leere, Konstanten, bedingte Formate gezielt markieren.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Start → Suchen und Auswählen → Inhalte auswählen, oder F5 → Inhalte."],
      },
      {
        heading: "Anwenden",
        paragraphs: ["Formeln, Zahlen, Texte, Leere, Objekte, bedingte Formate, Datenüberprüfung. Danach löschen, formatieren oder füllen – ohne die Maus über 40.000 Zeilen zu ziehen."],
      },
    ],
  ),
  a(
    "inhalte-einfuegen",
    "Inhalte einfügen",
    "Werte, Formeln, Formate, Transponieren, Rechnen beim Einfügen.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Strg+C, dann Start → Inhalte einfügen (Strg+Alt+V)."],
      },
      {
        heading: "Optionen",
        paragraphs: ["Nur Werte (Formeln raus), nur Formate, Transponieren, Verknüpfung. Addieren/Multiplizieren mit der Einfügemasse – z. B. eine Spalte mit 1,19 multiplizieren, ohne Hilfsspalte."],
      },
    ],
  ),
  a(
    "inhalte-ersetzen",
    "Inhalte ersetzen",
    "Suchen und Ersetzen über Blätter, mit Platzhaltern und in Formeln oder Werten.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Strg+H. Einfach: Text gegen Text. Erweitert: innerhalb Blatt/Mappe, in Formeln oder Werten, Groß/Klein, ganze Zellen."],
      },
      {
        heading: "Platzhalter",
        paragraphs: ["* und ? in der Suche. Umbrüche mit Strg+J im Suchen-Feld. Vorsicht in Formeln: Ersetzen kann Bezüge zerlegen. Erst im Blatt testen, dann Mappe."],
      },
    ],
  ),
  a(
    "inhalte-miteinander-verbinden",
    "Inhalte miteinander verbinden",
    "TEXTVERKETTEN, TEXTZUSAMMENFÜHGEN, & – Zellen und Literale zu einem String.",
    5,
    [
      {
        heading: "Zellen verbinden",
        paragraphs: ["=A2&\" \"&B2 oder =TEXTVERKETTEN(\" \";WAHR;A2:C2). TEXTZUSAMMENFÜHGEN mit festem Trenner."],
      },
      {
        heading: "Mit Text und vielen Zellen",
        paragraphs: ["Literale in Anführungszeichen. Bereich: TEXTVERKETTEN(\", \";WAHR;Bereich) ignoriert Leere bei WAHR. Das alte VERKETTEN ist der Umweg."],
      },
    ],
  ),
  a(
    "inhalte-in-excel-suchen",
    "Inhalte suchen",
    "Strg+F: Blatt oder Mappe, in Formeln, nach Format.",
    5,
    [
      {
        heading: "Einfache Suche",
        paragraphs: ["Strg+F, Suchen. Weitersuchen. Innerhalb: Blatt oder Arbeitsmappe."],
      },
      {
        heading: "Erweitert",
        paragraphs: ["Optionen: nach Format, Groß/Klein, ganze Zellen, nach Zeilen oder Spalten. „Alle suchen“ listet Treffer – Doppelklick springt hin."],
      },
    ],
  ),
  a(
    "inhalte-trennen",
    "Inhalte trennen",
    "Text in Spalten: Trennzeichen oder feste Breite, drei Schritte im Assistenten.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Daten → Text in Spalten. Der Klassiker nach CSV-Paste, bevor Power Query kommt."],
      },
      {
        heading: "Die drei Schritte",
        paragraphs: ["1. Getrennt oder feste Breite. 2. Trennzeichen (Semikolon, Tab, Komma, andere) oder Spaltenumbrüche klicken. 3. Format je Spalte (Standard, Text, Datum) – Text schützt führende Nullen. Zielzelle setzen, Quelle nicht überschreiben."],
      },
    ],
  ),
  a(
    "intelligente-suche",
    "Intelligente Suche",
    "Wissensabfrage zu einem markierten Begriff: Geografie, Aktien, Lexikon.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Start → Intelligente Suche (oder Rechtsklick). Ein Aufgabenbereich mit Infos zum Wort."],
      },
      {
        heading: "Durchführen",
        paragraphs: ["Zelle markieren, Suche. Braucht Internet. Für systematische Daten eher Datentypen Geografie/Aktien."],
      },
    ],
  ),
  a(
    "kontrollkaestchen",
    "Kontrollkästchen",
    "Ja/Nein in der Zelle – in Microsoft 365 direkt, sonst über Entwicklertools.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["In aktuellen 365-Versionen: Einfügen → Kontrollkästchen, Wert WAHR/FALSCH. Älter: Entwicklertools → Formularsteuerelement, verknüpfte Zelle."],
      },
      {
        heading: "Anwenden",
        paragraphs: ["Filter und Zählenwenn auf WAHR. Bedingte Formatierung auf die Zelle. Nicht mit ActiveX-Checkboxen mischen, die nur unter Windows zuverlässig sind."],
      },
    ],
  ),
  a(
    "kopf-und-fusszeile",
    "Kopf- und Fußzeile",
    "Seitenzahl, Dateiname, Datum – in der Seitenlayoutansicht oder unter Seite einrichten.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Einfügen → Kopf- und Fußzeile wechselt in die Layoutansicht. Drei Abschnitte: links, Mitte, rechts."],
      },
      {
        heading: "Bearbeiten",
        paragraphs: ["Elemente: Seitenzahl, Seitenanzahl, Pfad, Bild. Unterschiedliche gerade/ungerade Seiten, erste Seite ohne. In der Normalansicht siehst du sie nicht – nur in der Vorschau."],
      },
    ],
  ),
  a(
    "leistung-pruefen",
    "Leistung prüfen",
    "Warum die Mappe hängt: überflüssige Formate, benannte Fehler, unsichtbare Objekte.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Überprüfen → Leistung prüfen (Microsoft 365). Excel listet Schleppanker: tausend leere Formatzeilen, volatile Funktionen, benannte Geisterbereiche."],
      },
      {
        heading: "Prüfen",
        paragraphs: ["Die Liste abarbeiten: Formate löschen, Namen putzen, Objekte reduzieren. Danach speichern unter – die Dateigröße sinkt oft deutlich."],
      },
    ],
  ),
  a(
    "links-erstellen",
    "Links erstellen",
    "Hyperlink auf Zelle, Blatt, Datei oder URL – und wieder lösen.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Strg+K oder Einfügen → Link."],
      },
      {
        heading: "Einfügen und entfernen",
        paragraphs: ["Anzuzeigender Text getrennt von der Adresse. Innerhalb der Mappe: Zellbezug oder definierter Name. Entfernen: Rechtsklick → Hyperlink entfernen, Text bleibt. Für viele Links: Inhalte einfügen als Werte nach dem Lösen."],
      },
    ],
  ),
  a(
    "mehr-zeit-zum-leben",
    "Mehr Zeit zum Leben: Wie Du Deinen Alltag optimieren kannst",
    "Ergebniskultur statt Präsenz: welche Excel-Aufgaben im Job und privat Zeit fressen – und welche Mindsets helfen.",
    5,
    [
      {
        heading: "Von Präsenz zu Ergebnis",
        paragraphs: ["Nicht mehr Klicks, sondern weniger Routine. Excel ist das Werkzeug, Zeit der Hebel."],
      },
      {
        heading: "Beruf, Privat, Mindset",
        paragraphs: ["Im Job: Reports, die niemand liest, Importe von Hand. Privat: Haushaltslisten, die keine Entscheidung ändern. Bücher und Haltungen, die Prioritäten vor Perfektion setzen – und Automatisierung nur dort, wo Wiederholung ist."],
      },
    ],
  ),
  a(
    "mehrere-bereiche-markieren",
    "Mehrere Bereiche markieren",
    "Strg halten, Zeile/Spalte mit einem Klick, ganze Tabelle mit Strg+A.",
    5,
    [
      {
        heading: "Maus und Zeilen",
        paragraphs: ["Strg+Klick auf nicht zusammenhängende Bereiche. Klick auf die Zeilen- oder Spaltenköpfe markiert komplett."],
      },
      {
        heading: "Shortcuts",
        paragraphs: ["Umschalt+Pfeil erweitert, Strg+Umschalt+Pfeil bis zum Blockende. Strg+Leertaste Spalte, Umschalt+Leertaste Zeile. Strg+A einmal den Block, zweimal das Blatt."],
      },
    ],
  ),
  a(
    "menueband-anpassen",
    "Menüband anpassen",
    "Eigene Register, Befehle in die Schnellzugriffsleiste, Menüband minimieren.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Datei → Optionen → Menüband anpassen. Eigene Registerkarten, Gruppen, Befehle von links nach rechts."],
      },
      {
        heading: "Reduzieren",
        paragraphs: ["Doppelklick auf einen Register-Namen klappt das Band ein. Strg+F1 ebenso. Schnellzugriff oben links: Autosumme, Filter, Makros ablegen."],
      },
    ],
  ),
  a(
    "microsoft-365-insider",
    "Microsoft 365 Insider",
    "Frühe Features testen: Beta-Kanal, bevor XVERWEIS und Copilot bei allen ankommen.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Datei → Konto → Microsoft 365 Insider. Beta-Kanal ist unruhig, aktueller Kanal vorhersagbar."],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Insider-Funktionen in Mappen, die Kollegen mit älterer Version öffnen, können fehlen. Für den Alltag den Produktionskanal lassen."],
      },
    ],
  ),
  a(
    "produktinformationen",
    "Produktinformationen",
    "Version, Bit-Stand, Lizenzen – unter Datei → Konto.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Datei → Konto zeigt Produktinformationen: Microsoft 365 Apps, Excel 2021, 32- oder 64-Bit."],
      },
      {
        heading: "Warum es zählt",
        paragraphs: ["64-Bit für große Mappen. Die genaue Version brauchst du, wenn eine Funktion „fehlt“ – oft ist es die Lizenz, nicht Excel."],
      },
    ],
  ),
  a(
    "prognoseblatt",
    "Prognoseblatt",
    "Aus einer Zeitreihe ein Blatt mit Prognose, Konfidenzintervall und Diagramm.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Daten → Prognoseblatt. Excel nutzt ETS (exponentielles Glätten)."],
      },
      {
        heading: "Voraussetzungen und Optionen",
        paragraphs: ["Eine Datumsspalte, eine Wertspalte, möglichst regelmäßige Abstände. Saisonality automatisch oder fest, Konfidenzintervall, fehlende Punkte interpolieren. Ergebnis: neues Blatt, keine Live-Verknüpfung zur Quelle – neu erzeugen, wenn Daten wachsen."],
      },
    ],
  ),
  a(
    "rechtschreibung-arbeitsmappenstatistiken",
    "Rechtschreibung & Arbeitsmappenstatistiken",
    "F7 fürs Wörterbuch, Statistiken für Zeichen und Wörter in der Mappe.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Überprüfen → Rechtschreibung. Arbeitsmappenstatistiken zählen Zeichen, Wörter, Blätter."],
      },
      {
        heading: "Prüfen",
        paragraphs: ["Ignorieren, Alle ändern, zum Wörterbuch hinzufügen. Sprache über Überprüfen → Sprache. Statistiken sind grob – nicht mit Word vergleichen."],
      },
    ],
  ),
  a(
    "schrift-formatieren",
    "Schrift formatieren",
    "Schriftart, Grad, Fett, Farbe – und warum Calibri nicht in jede Vorlage muss.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Start → Schriftart. Oder Strg+1, Register Schrift."],
      },
      {
        heading: "Anwenden",
        paragraphs: ["Eine Schriftart pro Mappe, Hervorhebung sparsam, Grad 11–12 für Daten, größer nur für Titel. Zellenformatvorlagen halten das konsistent."],
      },
    ],
  ),
  a(
    "sparklines-erstellen",
    "Sparklines erstellen",
    "Mini-Diagramme in der Zelle: Linie, Säule, Gewinn/Verlust.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Einfügen → Sparklines. Eine Zelle, eine Reihe – ideal in KPI-Tabellen."],
      },
      {
        heading: "Einstellungen",
        paragraphs: ["Entwurf: Marker, Achse gleich für alle Sparklines der Gruppe, Farbe. Datenbereich und Ort getrennt. Löschen über Sparklineentwurf, nicht nur Entf."],
      },
    ],
  ),
  a(
    "standardeinstellungen-anpassen",
    "Standardeinstellungen anpassen",
    "Schrift, Vorlagenordner, Anzahl der Blätter, Berechnungsoptionen.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Datei → Optionen. Allgemein (Schrift), Speichern (AutoWiederherstellen), Erweitert, Formeln (iterativ, präzise)."],
      },
      {
        heading: "Ändern",
        paragraphs: ["Standardschrift und -grad gelten für neue Mappen. Vorlagenordner für .xltx. Berechnung auf manuell nur in Monster-Mappen – sonst F9-Vergessen."],
      },
    ],
  ),
  a(
    "symbole-einfuegen",
    "Symbole einfügen",
    "Einfügen → Symbol: Pfeile, Haken, Währung, Sonderzeichen über Alt-Codes.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Einfügen → Symbol. Schrift Segoe UI Symbol oder Wingdings für Pfeile und Kästchen."],
      },
      {
        heading: "Anwenden",
        paragraphs: ["Zuletzt verwendet merkt Excel. Sonderzeichen wie geschütztes Leerzeichen. Für Listen sind bedingte Formatsymbole oft besser als manuelle Wingsdings."],
      },
    ],
  ),
  a(
    "szenario-manager",
    "Szenario-Manager",
    "Mehrere Annahmesätze auf denselben Zellen – und ein Bericht daneben.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Daten → Was-wäre-wenn → Szenario-Manager. Speichert Werte auf definierte Änderungszellen."],
      },
      {
        heading: "Anwenden",
        paragraphs: ["Szenario hinzufügen (Basis, Optimistisch, Pessimistisch), Werte setzen, Anzeigen wechselt. Szenariobericht als neues Blatt. Zusammen mit Zielwertsuche und Solver das Was-wäre-wenn-Trio."],
      },
    ],
  ),
  a(
    "teilergebnisse",
    "Teilergebnisse",
    "Sortierte Liste, dann Summe (oder Anzahl) bei jedem Gruppenwechsel – mit Gliederung.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Daten → Teilergebnis. Die Liste muss nach dem Gruppierungsfeld sortiert sein."],
      },
      {
        heading: "Anwenden",
        paragraphs: ["Bei jedem Wechsel in „Region“: Summe von Umsatz. Mehrere Funktionen nacheinander (Häkchen „vorhandene ersetzen“ aus). Erweitern über die Gliederungspunkte. In intelligenten Tabellen und Pivots ist das meist der bessere Weg."],
      },
    ],
  ),
  a(
    "textfeld",
    "Textfeld",
    "Freier Text über dem Raster: Titel, Pfeil-Legenden, Kommentare ins Chart.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Einfügen → Textfeld. Sitzt als Objekt über den Zellen, scrollt nicht mit den Zeilen mit – außer du verankerst."],
      },
      {
        heading: "Formatieren",
        paragraphs: ["Formformat: Füllung, Linie, Schrift. Beispiel: Chart-Titel, der länger ist als der Diagrammtitel. Für Zellnotizen eher Kommentare/Notizen."],
      },
    ],
  ),
  a(
    "vorlagen",
    "Vorlagen",
    "Neue Mappe aus .xltx: Logo, Druck, Stile – einmal bauen, immer wieder nutzen.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Datei → Neu → Personal bzw. Benutzerdefiniert. Vorlagen liegen im benutzerdefinierten Vorlagenordner."],
      },
      {
        heading: "Anpassen",
        paragraphs: ["Mappe einrichten, als Excel-Vorlage (*.xltx) speichern. Makros: .xltm. Ändern heißt die Vorlage öffnen, nicht eine Instanz."],
      },
    ],
  ),
  a(
    "wozu-braucht-man-excel",
    "Wozu braucht man Excel?",
    "Sechs Stufen: eingeben, säubern, rechnen, konsolidieren, analysieren, zeigen.",
    5,
    [
      {
        heading: "Eingabe bis Management",
        paragraphs: ["Listen, Formulare, Importe. Dann bereinigen: Duplikate, Typen, Lücken."],
      },
      {
        heading: "Verarbeitung bis Visualisierung",
        paragraphs: ["Formeln und Pivot, Konsolidierung mehrerer Quellen, Analyse (What-if, Power Pivot), Visualisierung (Diagramme, Dashboards). Genau diese Kette ist der Excelhero-Kurs."],
      },
    ],
  ),
  a(
    "zeichentools",
    "Zeichentools",
    "Stift, Highlighter, Freihand zu Form – auf dem Tablet und mit der Maus.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Register Zeichnen (Microsoft 365). Stifte, Radierer, Lineal."],
      },
      {
        heading: "Anwenden",
        paragraphs: ["Mit Finger oder Stift auf dem Touch-Gerät. Freihand in Form macht aus dem Gekritzel ein Rechteck, Freihand in Gleichung eine Formel. Objekte danach wie Grafiken anordnen."],
      },
    ],
  ),
  a(
    "zeilen-spalten-ein-und-ausblenden",
    "Zeilen & Spalten ein- und ausblenden",
    "Ausblenden ist nicht löschen: + am Rand, Blätter über das Kontextmenü.",
    5,
    [
      {
        heading: "Ausblenden",
        paragraphs: ["Rechtsklick auf Kopf → Ausblenden. Oder Start → Format → Ausblenden. Blätter: Register rechtsklick → Ausblenden."],
      },
      {
        heading: "Einblenden",
        paragraphs: ["Köpfe links und rechts der Lücke markieren → Einblenden. Alle: alles markieren, einblenden. Blätter: Register rechtsklick → Einblenden. Sehr versteckt: Breite 0 – dann Breite ziehen."],
      },
    ],
  ),
  a(
    "zeilen-spalten-vertauschen",
    "Zeilen & Spalten tauschen",
    "Transponieren: Zeilen zu Spalten, ohne abzutippen.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Kopieren, Zielzelle, Inhalte einfügen → Transponieren."],
      },
      {
        heading: "Ergebnis",
        paragraphs: ["Aus einer Zeile mit Monaten eine Spalte. Formeln werden angepasst, absolute Bezüge prüfen. Dynamisch: =MTRANS() bzw. =TRANSPOSE() – ändert sich die Quelle, ändert sich das Ergebnis."],
      },
    ],
  ),
  a(
    "zellen-bereiche-verschieben",
    "Zellen & Bereich verschieben",
    "Ziehen am Rand, Ausschneiden, Pfeile mit Umschalt – ohne Kopieren.",
    5,
    [
      {
        heading: "Maus",
        paragraphs: ["Rahmen der Markierung greifen, ziehen. Umschalt dabei fügt ein statt zu überschreiben."],
      },
      {
        heading: "Shortcuts und Ausschneiden",
        paragraphs: ["Strg+X, Ziel, Strg+V. Mit Umschalt+Pfeil den Block setzen. Zwischen Blättern: ausschneiden, anderes Register, einfügen."],
      },
    ],
  ),
  a(
    "zellen-einfuegen",
    "Zellen einfügen",
    "Zellen, Zeilen, Spalten, Blätter – und wohin der Rest rutscht.",
    5,
    [
      {
        heading: "Zellen und Zeilen",
        paragraphs: ["Start → Einfügen → Zellen einfügen: nach rechts oder unten verschieben. Ganze Zeile: Zeilenkopf, Rechtsklick → Zellen einfügen."],
      },
      {
        heading: "Spalten und Blätter",
        paragraphs: ["Analog Spaltenkopf. Neues Blatt: Plus neben den Registern oder Umschalt+F11. In Tabellen (Strg+T) wächst die Tabelle mit, wenn du in der letzten Zeile tippst."],
      },
    ],
  ),
  a(
    "zellen-formatieren",
    "Zellen formatieren",
    "Strg+1: Zahl, Ausrichtung, Schrift, Rahmen, Füllung, Schutz.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Das Dialogfeld Zellen formatieren ist der komplette Satz. Register Zahl entscheidet, ob 0,19 ein Prozent oder ein Betrag ist."],
      },
      {
        heading: "Inhalt formatieren",
        paragraphs: ["Benutzerdefiniert: 0,0 \"kg\"; Datum TT.MM.JJJJ; rot für negativ. Rahmen und Füllung sparsam. Schutz-Register erst mit Blattschutz wirksam."],
      },
    ],
  ),
  a(
    "zellenformatvorlagen",
    "Zellenformatvorlagen",
    "Ein Klick für Titel, Eingabe, Berechnung – und eigene Stile fürs Corporate Design.",
    5,
    [
      {
        heading: "Aufrufen",
        paragraphs: ["Start → Zellenformatvorlagen. Gut: Eingabe (orange), Berechnung, Gut/Schlecht/Neutral."],
      },
      {
        heading: "Erstellen und pflegen",
        paragraphs: ["Rechtsklick → Duplizieren, anpassen. Ändern wirkt auf alle Zellen mit diesem Stil. Zusammen mit einem Theme bleibt die Mappe konsistent."],
      },
    ],
  ),
  a(
    "zielwertsuche",
    "Zielwertsuche",
    "Eine Formel, ein Zielwert, eine veränderbare Zelle – Excel sucht den Input.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Daten → Was-wäre-wenn → Zielwertsuche. Beispiel: welcher Preis trifft 10.000 Deckungsbeitrag?"],
      },
      {
        heading: "Anwenden",
        paragraphs: ["Zielzelle (Formel), Zielwert, veränderbare Zelle. Ergebnis steht in der Zelle, Dialog speichert es. Keine Constraints – dafür Solver. Iterationen unter Datei → Optionen → Formeln."],
      },
    ],
  ),
  a(
    "zoom-erstellen",
    "Zoom erstellen",
    "Ansicht: 100 %, Zoom auf Markierung, Rad mit Strg.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: ["Ansicht → Zoom. Oder die Prozentzahl unten rechts."],
      },
      {
        heading: "Varianten",
        paragraphs: ["100 % fürs Arbeiten, Auswahl vergrößern für den Beamer, Strg+Mausrad unterwegs. Zoom ist Ansicht, nicht Druck. Geteilte Fenster können unterschiedliche Zooms haben."],
      },
    ],
  ),
];
