import type { Article } from "./articles";

const IMG = "/images/course/power-query.jpg";
const HUB = "/power-query";

function q(
  slug: string,
  title: string,
  excerpt: string,
  body: Article["body"],
): Article {
  return {
    slug,
    title,
    kicker: "Power Query",
    category: "Power Query",
    hubPath: HUB,
    path: `/power-query/${slug}`,
    excerpt,
    image: IMG,
    readMinutes: 4,
    body,
  };
}

export const POWER_QUERY_ARTICLES: Article[] = [
  q(
    "daten-aus-pdf-einfuegen",
    "Daten aus PDF einfügen",
    "Tabellen aus einem PDF holen, ohne abzutippen – Power Query liest die Seiten.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["Pdf.Tables(File.Contents(\"C:\\Pfad\\bericht.pdf\"))"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Daten → Daten abrufen → Aus Datei → Aus PDF. Power Query zeigt erkannte Tabellen; du wählst die richtige, bereinigst Header und lädst. Mehrseitige PDFs: oft eine Tabelle pro Seite, danach Anfügen. Gescannte PDFs ohne Textlayer funktionieren nicht – dann OCR oder Daten aus Bild."],
      },
    ],
  ),
  q(
    "power-query-ganzzahliges-dividieren-und-rest",
    "Power Query: (ganzzahliges) Dividieren & REST",
    "Teilen, ganzzahlig teilen und Rest (Modulo) in einer benutzerdefinierten Spalte.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["Number.IntegerDivide([A], [B])    // Rest: Number.Mod([A], [B])"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Spalte hinzufügen → Benutzerdefinierte Spalte. Normales Teilen: [A] / [B]. IntegerDivide entspricht GANZZAHL in Excel, Mod dem REST. Beispiel: 17 und 5 → 3 Rest 2. Datentyp der neuen Spalte auf Ganzzahl bzw. Dezimalzahl setzen."],
      },
    ],
  ),
  q(
    "power-query-abfrage-teams-dateien-und-ordner",
    "Power Query: Abfrage Teams Dateien und Ordner",
    "Eine Datei oder einen ganzen Ordner aus Microsoft Teams / SharePoint als Abfrage.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["SharePoint.Files(\"https://tenant.sharepoint.com/sites/Team\", [ApiVersion = \"15\"])"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Daten → Aus Datei → Aus SharePoint-Ordner, Website-URL der Teamseite (nicht der Ordnerlink). Dann filtern auf den Kanal-Ordner. Eine Datei: Aus Web mit dem direkten Dateipfad oder die Ordnerabfrage auf Name filtern und Inhalt kombinieren. Anmeldung mit dem Organisationskonto; nach dem ersten Mal aktualisiert F5."],
      },
    ],
  ),
  q(
    "power-query-abfragen-zusamenfuehren-joins",
    "Power Query: Abfragen zusammenführen / Joins",
    "Die sechs Join-Arten: Left/Right/Full Outer, Inner, Left/Right Anti.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["Table.NestedJoin(Links, {\"Key\"}, Rechts, {\"Key\"}, \"Rechts\", JoinKind.LeftOuter)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Start → Abfragen zusammenführen. Left Outer: alle links plus Treffer rechts (der Excel-SVERWEIS). Inner: nur Keys in beiden. Full Outer: alles, Lücken als null. Anti: Keys, die auf der anderen Seite fehlen – Abgleich zweier Listen. Danach die geschachtelte Spalte erweitern, nur die benötigten Felder."],
      },
    ],
  ),
  q(
    "power-query-abs-funktion",
    "Power Query: ABS-Funktion",
    "Betrag: negative Abweichungen positiv machen, analog ABS in Excel.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["Number.Abs([Wert])"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Transformieren → Standard → Absolutwert, oder benutzerdefinierte Spalte. Null bleibt null. Text muss vorher in Zahl gewandelt werden, sonst Fehler – Fehler entfernen oder versuchen als Zahl."],
      },
    ],
  ),
  q(
    "power-query-addieren",
    "Power Query: Addieren",
    "Zwei Zahlenspalten addieren, ohne nach Excel zurückzukehren.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["[Umsatz] + [Nachlass]"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Spalte hinzufügen → Benutzerdefinierte Spalte, oder Transformieren → Standard → Addieren (erzeugt eine neue Spalte aus zwei markierten). Datentyp Zahl. Null + Zahl = null – fehlende Werte vorher mit 0 füllen, wenn die Summe 0 sein soll: [Umsatz] ?? 0."],
      },
    ],
  ),
  q(
    "power-query-alter-fruehestes-und-neuestes-datum",
    "Power Query: Alter, frühestes & neuestes Datum",
    "Min/Max-Datum einer Spalte und Alter in Jahren oder Tagen.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["Duration.Days(Date.From(DateTime.LocalNow()) - [Datum]) / 365"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Frühestes: List.Min(Tabelle[Datum]) bzw. Statistik → Minimum. Neuestes: List.Max. Alter: Duration.Days zwischen heute und dem Datum; für ganze Jahre Date.Year(heute) - Date.Year([Geb]) und den Geburtstag dieses Jahres abziehen, wenn er noch nicht war."],
      },
    ],
  ),
  q(
    "power-query-anzahl-eindeutig",
    "Power Query: ANZAHL(EINDEUTIG())",
    "Wie ANZAHL(EINDEUTIG()) – distinkte Werte einer Spalte oder Gruppe.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["List.Count(List.Distinct(Tabelle[Kunde]))"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Statistik auf der Spalte → Anzahl eindeutiger Werte. In Gruppieren nach: Vorgang „Anzahl eindeutiger Zeilen“ bzw. eine Aggregation List.Count(List.Distinct(_[Kunde])). Leere zählen oder nicht: Distinct behält ein null, wenn es vorkommt."],
      },
    ],
  ),
  q(
    "power-query-anzahl2",
    "Power Query: ANZAHL2",
    "Nicht-leere Zellen zählen – das Pendant zu ANZAHL2.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["List.NonNullCount(Tabelle[Spalte])"],
      },
      {
        heading: "So geht's",
        paragraphs: ["List.Count zählt alles inkl. null, NonNullCount überspringt Leere. In Gruppieren nach: Anzahl der Zeilen vs. Anzahl nicht leerer Werte. Für Text \"\" (leerer String) extra filtern, das ist nicht null."],
      },
    ],
  ),
  q(
    "power-query-aufrunden-abrunden-und-runden",
    "Power Query: AUFRUNDEN, ABRUNDEN & RUNDEN",
    "Number.Round, RoundUp, RoundDown – AUFRUNDEN, ABRUNDEN, RUNDEN.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["Number.Round([Wert], 2)    // RoundUp / RoundDown analog"],
      },
      {
        heading: "So geht's",
        paragraphs: ["RUNDEN: Number.Round(Zahl, Stellen). AUFRUNDEN: Number.RoundUp, ABRUNDEN: Number.RoundDown. Banker's rounding bei .5 je nach Modus – RoundUp ist für Preise oft klarer. Transformieren → Rundung."],
      },
    ],
  ),
  q(
    "power-query-benutzerdefinierte-spalte-erstellen-und-mehrere-zellen-verrechnen",
    "Power Query: benutzerdefinierte Spalte erstellen und mehrere Zellen verrechnen",
    "Spalte hinzufügen → Benutzerdefiniert: [A] * [B] - [C], mit if.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["[Menge] * [Preis] * (1 - [Rabatt])"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Jeder Spaltenname in eckigen Klammern, Groß/Klein wie im Editor. Mehrere Zeilen mit if [Status] = \"ok\" then … else …. Nach dem OK den Datentyp setzen. Spalte aus Beispielen ist schneller, wenn das Muster klar ist – die Formel kannst du danach noch anpassen."],
      },
    ],
  ),
  q(
    "power-query-gruppieren-aggreggieren-summe-mittelwert-median-min-max-anzahl",
    "Power Query: Daten gruppieren und aggregieren als SUMME / MITTELWERT / MEDIAN / MIN / MAX / ANZAHL",
    "Gruppieren nach: Summe, Mittelwert, Median, Min, Max, Anzahl – mit oder ohne Detailverlust.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["Table.Group(Quelle, {\"Region\"}, {{\"Umsatz\", each List.Sum([Umsatz]), type number}})"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Transformieren → Gruppieren nach. Einfach: eine Kennzahl je Gruppe, die Detailzeilen verschwinden. Ohne Datenverlust: Vorgang „Alle Zeilen“ – du behältst eine geschachtelte Tabelle und aggregierst zusätzlich. Dann erweitern oder weiterrechnen. Das ist die Pivot in der Abfrage, bevor die Daten nach Excel kommen."],
      },
    ],
  ),
  q(
    "power-query-datumsfunktionen-jahr",
    "Power Query: Datumsfunktionen (Jahr)",
    "Jahr, Jahresbeginn und Jahresende aus einem Datum.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["Date.Year([Datum])    // Date.StartOfYear / Date.EndOfYear"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Spalte hinzufügen → Datum → Jahr. Jahresbeginn: Date.StartOfYear([Datum]), Ende: Date.EndOfYear. Gut fürs Gruppieren nach Jahr ohne Hilfsspalte in Excel. Datentyp Datum, nicht DateTime, wenn die Uhrzeit stört – Date.From."],
      },
    ],
  ),
  q(
    "power-query-datumsfunktionen-monat",
    "Power Query: Datumsfunktionen (Monat)",
    "Monatsnummer, Monatsname, Beginn und Ende des Monats.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["Date.Month([Datum])    // Date.MonthName([Datum], \"de-DE\")"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Datum → Monat. Name lokal: Date.MonthName. StartOfMonth / EndOfMonth für Periodengrenzen (Umsatz „im Monat“, Filter bis Ultimo). Zahl 1–12 fürs Sortieren, Name nur fürs Anzeigen."],
      },
    ],
  ),
  q(
    "power-query-datumsfunktionen-tag",
    "Power Query: Datumsfunktionen (Tag)",
    "Tag im Monat, Tag im Jahr, Tagesbeginn/-ende, Wochentagsname.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["Date.Day([Datum])    // Date.DayOfYear / Date.DayOfWeekName"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Date.Day = TAG(). DayOfYear 1–366. StartOfDay / EndOfDay, wenn DateTime in den Tag fallen soll. Wochentag: Date.DayOfWeek([Datum], Day.Monday) liefert 0=Mo bei dieser Einstellung – für ISO-Wochen wichtig."],
      },
    ],
  ),
  q(
    "power-query-fakultaet",
    "Power Query: FAKULTÄT",
    "n! in Power Query, analog FAKULTÄT in Excel.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["Number.Factorial([n])"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Nur nicht-negative ganze Zahlen. Große n werden schnell unhandlich (Number). Für Kombinationen eher Number.Combin. Fehler bei negativen oder Dezimalwerten abfangen: try … otherwise null."],
      },
    ],
  ),
  q(
    "power-query-glaetten",
    "Power Query: GLÄTTEN",
    "Mehrfach-Leerzeichen und Randtrim – GLÄTTEN / TRIM.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["Text.Trim([Text])"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Transformieren → Format → Trimmen. Text.Trim entfernt Rand, Text.Clean Steuerzeichen. Mehrfachspaces in der Mitte: Text.Combine(List.Select(Text.Split([Text], \" \"), each _ <> \"\"), \" \"). Immer vor Merges und Joins – sonst matchen Keys nicht."],
      },
    ],
  ),
  q(
    "power-query-gross",
    "Power Query: GROSS",
    "Alles in Großbuchstaben, analog GROSS in Excel (GROSS = UPPER).",
    [
      {
        heading: "Die Formel",
        paragraphs: ["Text.Upper([Text])"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Format → GROSS. In Excel ist GROSS() Uppercase; GROSS2() ist Proper Case. Hier Upper. Locale für ß/ss je nach System. Vor E-Mail-Keys oft Lower statt Upper."],
      },
    ],
  ),
  q(
    "power-query-gross2",
    "Power Query: GROSS2",
    "Erster Buchstabe groß, Rest klein – GROSS2 / Proper.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["Text.Proper([Text])"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Format → GROSS2. Aus „max MUSTERMANN“ wird „Max Mustermann“. Kürzel (GmbH, AG) danach per Ersetzen korrigieren. Nicht für IDs verwenden."],
      },
    ],
  ),
  q(
    "power-query-istgerade-istungerade-und-vorzeichen",
    "Power Query: ISTGERADE, ISTUNGERADE & VORZEICHEN",
    "Number.IsEven, IsOdd, Sign – gerade, ungerade, Vorzeichen.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["Number.IsEven([n])    // Number.IsOdd / Number.Sign"],
      },
      {
        heading: "So geht's",
        paragraphs: ["IsEven/IsOdd → wahr/falsch. Sign: -1, 0, 1 analog VORZEICHEN. Gut für Zebramuster oder Splits in zwei Stapel. Datentyp Zahl; Text erst wandeln."],
      },
    ],
  ),
  q(
    "power-query-kalenderwoche-und-quartal-extrahieren",
    "Power Query: KALENDERWOCHE und Quartal extrahieren",
    "ISO-Woche und Quartal 1–4 aus dem Datum.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["Date.WeekOfYear([Datum], Day.Monday)    // Date.QuarterOfYear([Datum])"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Kalenderwoche: WeekOfYear, für ISO oft Day.Monday und FirstWeekType. Quartal: QuarterOfYear → 1–4. Beides als Spalte, dann Gruppieren. Excel KALENDERWOCHE(…;21) entspricht in etwa der ISO-Variante – zum Abgleich eine Stichprobe."],
      },
    ],
  ),
  q(
    "power-query-klein",
    "Power Query: KLEIN",
    "Kleinbuchstaben, analog KLEIN / LOWER.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["Text.Lower([Text])"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Format → klein. Standard vor E-Mail- und URL-Joins. Zusammen mit Trim und Clean die übliche Text-Hygiene, bevor du zusammenführst."],
      },
    ],
  ),
  q(
    "power-query-laenge",
    "Power Query: LÄNGE",
    "Zeichen zählen – LÄNGE / LEN, ohne Excel-Zelle.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["Text.Length([Text])"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Spalte hinzufügen → Benutzerdefiniert. null gibt null, \"\" gibt 0. Nützlich fürs Filtern zu kurzer IDs oder zum Prüfen fester Formate (PLZ = 5)."],
      },
    ],
  ),
  q(
    "power-query-links",
    "Power Query: LINKS",
    "Die ersten n Zeichen, analog LINKS / LEFT.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["Text.Start([Text], 3)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Transformieren → Extrahieren → Erste Zeichen. Variable Länge: Text.Start([Text], Text.PositionOf([Text], \"-\")). Zu kurz? Start nimmt, was da ist, ohne Fehler."],
      },
    ],
  ),
  q(
    "power-query-log-funktion",
    "Power Query: LOG-Funktion",
    "Logarithmus, analog LOG bzw. LN.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["Number.Log([Wert])    // Number.Log10([Wert])"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Log ist natürlicher Logarithmus (LN), Log10 Basis 10. Werte > 0, sonst Fehler. Für Skalierung vor dem Laden ins Modell, nicht fürs Dashboard – dort reicht oft die Excel-Achse log."],
      },
    ],
  ),
  q(
    "power-query-max-funktion",
    "Power Query: MAX-Funktion",
    "Maximum einer Spalte oder je Gruppe.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["List.Max(Tabelle[Wert])"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Statistik → Maximum, oder in Gruppieren nach Max. List.MaxN für Top-n. Datum und Zahl funktionieren; Text nach Codepage, nicht alphabetisch deutsch – für Namen lieber sortieren und Table.First/Last."],
      },
    ],
  ),
  q(
    "power-query-median",
    "Power Query: MEDIAN",
    "Median einer Zahlenliste, robuster als der Mittelwert.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["List.Median(Tabelle[Wert])"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Gruppieren nach → Median. Gerade Anzahl: Mittel der zwei mittleren Werte. Leere vorher raus, sonst verzerrt null. Für Ausreißer-Reports neben Mittelwert legen."],
      },
    ],
  ),
  q(
    "power-query-min-funktion",
    "Power Query: MIN-Funktion",
    "Minimum einer Spalte oder je Gruppe.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["List.Min(Tabelle[Wert])"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Statistik → Minimum. Kombiniert mit Max für Spannweite: List.Max(_[Wert]) - List.Min(_[Wert]) in einer Gruppierung. Datum: frühester Tag."],
      },
    ],
  ),
  q(
    "power-query-mittelwert",
    "Power Query: MITTELWERT",
    "Mittelwert, analog MITTELWERT – List.Average.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["List.Average(Tabelle[Wert])"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Gruppieren nach → Durchschnitt. Average ignoriert null. Leerer String muss Zahl sein, sonst Fehler. Gewichteter Mittelwert: List.Sum(List.Transform(...)) / List.Sum(Gewichte), nicht Average."],
      },
    ],
  ),
  q(
    "power-query-multiplizieren",
    "Power Query: Multiplizieren",
    "Zwei Spalten multiplizieren: Menge × Preis.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["[Menge] * [Preis]"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Standard → Multiplizieren oder benutzerdefinierte Spalte. Prozent als 0,19 nicht als 19. Null * Zahl = null; ?? 0 wenn 0 gewollt ist."],
      },
    ],
  ),
  q(
    "power-query-potenz-und-exp-funktion",
    "Power Query: POTENZ- & EXP-Funktion",
    "Potenz mit festem oder spaltenweisem Exponenten, plus e^x.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["Number.Power([Basis], [Exponent])    // Number.Exp([x])"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Fester Exponent: Number.Power([Basis], 2) fürs Quadrat. Zwei Spalten: Power([Basis], [Exponent]). EXP: Number.Exp. Sehr große Ergebnisse → Datentyp Dezimal prüfen, ggf. als Text formatieren ist der falsche Weg."],
      },
    ],
  ),
  q(
    "power-query-praefix-hinzufuegen",
    "Power Query: Präfix hinzufügen",
    "Vor jeden Wert denselben Text: DE- plus Artikelnummer.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["\"DE-\" & [ArtNr]"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Transformieren → Format → Präfix hinzufügen. Dynamisch: [Land] & \"-\" & [ArtNr]. Zahl zuerst Text.From([ArtNr]), sonst Fehler. Führende Nullen: Text.PadStart(Text.From([n]), 6, \"0\")."],
      },
    ],
  ),
  q(
    "power-query-prozentrechnung",
    "Power Query: Prozentrechnung",
    "Anteil an der Spalte und Verhältnis zweier Spalten.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["[Teil] / List.Sum(Tabelle[Teil])    // [Ist] / [Plan]"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Prozentualer Anteil: Wert geteilt durch List.Sum der Spalte (Fensterfunktion über die Tabelle). Verhältnis zweier Spalten: [A] / [B], Division durch 0 mit if [B] = 0 then null else …. Format Prozent erst in Excel/Pivot, in PQ bleibt es eine Dezimalzahl."],
      },
    ],
  ),
  q(
    "power-query-rechts",
    "Power Query: RECHTS",
    "Die letzten n Zeichen, analog RECHTS / RIGHT.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["Text.End([Text], 4)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Extrahieren → Letzte Zeichen. Für Dateiendungen oft PositionOf von hinten: Text.AfterDelimiter([Datei], \".\", {0, RelativePosition.FromEnd})."],
      },
    ],
  ),
  q(
    "power-query-saeubern",
    "Power Query: SÄUBERN",
    "Nicht druckbare Zeichen weg – SÄUBERN / CLEAN.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["Text.Clean([Text])"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Format → Bereinigen. Entfernt Steuerzeichen (Zeilenumbruch, Tab aus Imports). Zusammen mit Trim und Replace von geschützten Leerzeichen (U+00A0) die Standard-Reinigung nach CSV/PDF."],
      },
    ],
  ),
  q(
    "power-query-spalten-zusammenfuehren",
    "Power Query: Spalten zusammenführen",
    "Zwei oder mehr Spalten zu einer: Trennzeichen, neue Spalte oder Beispielfeld.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["Text.Combine({[Vorname], [Nachname]}, \" \")"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Transformieren → Spalten zusammenführen: Trennzeichen, Ergebnisname, Quellspalten optional löschen. Benutzerdefiniert wie oben. Spalte aus Beispielen, wenn das Muster „Max | Müller → Müller, Max“ ist. Null-Teile: Combine überspringt sie nicht – vorher ??."],
      },
    ],
  ),
  q(
    "power-query-stabw-funktion",
    "Power Query: STABW-Funktion",
    "Standardabweichung einer Gruppe, analog STABW.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["List.StandardDeviation(Tabelle[Wert])"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Gruppieren nach → Standardabweichung. Stichprobe vs. Grundgesamtheit: StandardDeviation ist die Stichproben-Variante (n-1). Wenige Zeilen: Ergebnis null oder instabil – erst Anzahl prüfen."],
      },
    ],
  ),
  q(
    "power-query-stunde-minute-sekunde",
    "Power Query: STUNDE, MINUTE & SEKUNDE",
    "Uhrzeit zerlegen: Time.Hour, Minute, Second.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["Time.Hour([Zeit])    // Time.Minute / Time.Second"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Wenn die Spalte DateTime ist: Time.From([Zeit]) oder DateTime.Time. Dann Hour/Minute/Second. Für Schichten: Hour fürs Band, nicht Text aus dem Format. Datum ohne Zeit: Hour = 0."],
      },
    ],
  ),
  q(
    "power-query-subtrahieren",
    "Power Query: Subtrahieren",
    "Differenz zweier Zahlenspalten oder zweier Daten (Duration).",
    [
      {
        heading: "Die Formel",
        paragraphs: ["[Ist] - [Plan]    // Duration.Days([Ende] - [Start])"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Standard → Subtrahieren. Daten/DateTime ergeben eine Duration – Days/Hours davon ableiten, nicht die Duration nach Excel laden (die wird schnell zur Bruchzahl). Reihenfolge der markierten Spalten bestimmt, was minus was ist."],
      },
    ],
  ),
  q(
    "power-query-suchen-und-ersetzen",
    "Power Query: Suchen & Ersetzen",
    "Werte ersetzen, entfernen, Fehler killen – mit UI oder M.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["Text.Replace([Text], \"alt\", \"neu\")"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Rechtsklick → Werte ersetzen. Leere ersetzen mit 0. Fehler: Transformieren → Ersetzen von Fehlern. Benutzerdefiniert für mehrere Regeln hintereinander. Ganze Zelle vs. Teilstring: Replace trifft Teile, für exakt gleich eher if [Text] = \"alt\" then \"neu\" else [Text]."],
      },
    ],
  ),
  q(
    "power-query-suffix-hinzufuegen",
    "Power Query: Suffix hinzufügen",
    "Text ans Ende: Einheit, Domain, Dateiendung.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["[Name] & \".xlsx\""],
      },
      {
        heading: "So geht's",
        paragraphs: ["Format → Suffix hinzufügen. Wie Präfix, nur hinten. Zahl → Text.From. Nicht mit Suffix verwechseln, das du später wieder splitten musst – dann lieber getrennte Spalten lassen."],
      },
    ],
  ),
  q(
    "power-query-summe",
    "Power Query: SUMME",
    "Summe einer Spalte oder je Gruppe.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["List.Sum(Tabelle[Umsatz])"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Statistik → Summe, Gruppieren nach Summe. Sum überspringt null. Leere Strings erst in Zahl wandeln. Über mehrere Spalten einer Zeile: [A] + [B] + [C], nicht List.Sum (das ist die Spalte)."],
      },
    ],
  ),
  q(
    "power-query-sverweis-wverweis-xverweis-index",
    "Power Query: SVERWEIS / WVERWEIS / XVERWEIS / INDEX",
    "Kein SVERWEIS in M: Abfragen zusammenführen (Join) ersetzt S-, W-, XVERWEIS und INDEX.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["Table.NestedJoin(Fakt, {\"Kundennr\"}, Dim, {\"Kundennr\"}, \"Dim\", JoinKind.LeftOuter)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Zwei Abfragen, Schlüsselspalten, Left Outer ≈ SVERWEIS/XVERWEIS. Mehrere Treffer: Join erzeugt mehr Zeilen – vorher die Lookup-Tabelle eindeutig machen (Gruppieren oder Distinct). Nach dem Erweitern nur die benötigten Lookup-Spalten. Das ist der Weg, der beim Aktualisieren hält, nicht die Zellformel über Blattgrenzen."],
      },
    ],
  ),
  q(
    "power-query-teil",
    "Power Query: TEIL",
    "Zeichen aus der Mitte, analog TEIL / MID.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["Text.Middle([Text], 2, 4)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Start ist 0-basiert in manchen Text-Funktionen – Middle ist 0-basiert: Text.Middle(\"Excel\", 1, 3) = \"xce\". PositionOf hilft, dynamisch zu schneiden. Extrahieren → Bereich."],
      },
    ],
  ),
  q(
    "power-query-text-in-spalten-spalte-teilen",
    "Power Query: Text in Spalten / Spalte teilen",
    "Spalte teilen: Trennzeichen, Anzahl Zeichen, Position, Klein/Groß, Ziffer/Nicht-Ziffer.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["Splitter.SplitTextByDelimiter(\";\", QuoteStyle.Csv)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Transformieren → Spalte teilen. Trennzeichen (Semikolon, Tab). Nach Anzahl Zeichen (feste Breite). Nach Positionen. Nach Wechsel Klein/Groß oder Ziffer/Text – praktisch für „Rechnung2024Kunde“. QuoteStyle.Csv lässt Trennzeichen in Anführungszeichen in Ruhe."],
      },
    ],
  ),
  q(
    "power-query-textnach",
    "Power Query: TEXTNACH",
    "Alles nach einem Trennzeichen, analog TEXTNACH.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["Text.AfterDelimiter([Text], \"@\")"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Domain aus E-Mail, Dateiname nach dem letzten Backslash: AfterDelimiter(text, \"\\\", {0, RelativePosition.FromEnd}). Fehlt das Zeichen, kommt der ganze Text oder leer – je nach Parameter."],
      },
    ],
  ),
  q(
    "power-query-textteilen",
    "Power Query: TEXTTEILEN",
    "In eine Liste splitten, analog TEXTTEILEN – dann expandieren.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["Text.Split([Text], \",\")"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Ergebnis ist eine Liste, keine Spalten. Danach erweitern zu Zeilen (eine Zeile je Teil) oder zu Spalten. Für CSV-Zellen in einer Spalte der Weg, bevor du unpivotest."],
      },
    ],
  ),
  q(
    "power-query-textvor",
    "Power Query: TEXTVOR",
    "Alles vor einem Trennzeichen, analog TEXTVOR.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["Text.BeforeDelimiter([Text], \"@\")"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Local-Part der E-Mail, Dateiname ohne Endung (letztes \".\" FromEnd). Kombinieren mit AfterDelimiter, um Mitte zu holen: vor dem zweiten Bindestrich usw. über {1} als Index."],
      },
    ],
  ),
  q(
    "power-query-wenn-wenns-ersterwert",
    "Power Query: WENN / WENNS / ERSTERWERT",
    "if / else if / else in M, analog WENN, WENNS, ERSTERWERT – plus bedingte Spalte.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["if [Status] = \"ok\" then 1 else if [Status] = \"offen\" then 2 else 0"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Spalte hinzufügen → Bedingte Spalte: Regeln klicken, daraus wird if. Benutzerdefiniert für UND/ODER: [A] > 0 and [B] = \"ja\". ERSTERWERT: List.First(List.Select({[A],[B],[C]}, each _ <> null)). Kein WENNS-Funktionsname – nur if."],
      },
    ],
  ),
  q(
    "power-query-wurzel",
    "Power Query: WURZEL",
    "Quadratwurzel, analog WURZEL / SQRT.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["Number.Sqrt([Wert])"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Nur Werte ≥ 0, sonst Fehler. try Number.Sqrt([Wert]) otherwise null. Für n-te Wurzel: Number.Power([Wert], 1/n). Datentyp Dezimal."],
      },
    ],
  ),
];
