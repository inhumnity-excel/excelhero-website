import type { Article } from "./articles";

const IMG = "/images/spreadsheet-closeup.jpg";
const HUB = "/excel-formeln";

function f(
  slug: string,
  title: string,
  excerpt: string,
  body: Article["body"],
): Article {
  return {
    slug,
    title,
    kicker: "Formeln",
    category: "Formeln",
    hubPath: HUB,
    path: `/formeln/${slug}`,
    excerpt,
    image: IMG,
    readMinutes: 4,
    body,
  };
}

export const FORMELN_ARTICLES_2: Article[] = [
  f(
    "ampel-erstellen",
    "Ampel erstellen",
    "Rot, gelb, grün über WENNS oder bedingte Formatierung.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=WENNS(A2<0,8;\"rot\";A2<1;\"gelb\";WAHR;\"grün\")"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Drei Schwellen, von unten nach oben. Besser sichtbar: bedingte Formatierung → Ampelsymbole auf die Zahl, die Formel nur wenn du Text brauchst."],
      },
    ],
  ),
  f(
    "dauer-in-tagen-monaten-jahren",
    "Dauer in Tagen, Monaten, Jahren",
    "DATEDIF und TAGE zwischen zwei Daten.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=DATEDIF(A2;B2;\"Y\")&\" J \"&DATEDIF(A2;B2;\"YM\")&\" M \"&DATEDIF(A2;B2;\"MD\")&\" T\""],
      },
      {
        heading: "So geht's",
        paragraphs: ["Y ganze Jahre, YM Restmonate, MD Resttage. Nur Tage: =TAGE(B2;A2). Netzwerktage: NETTOARBEITSTAGE."],
      },
    ],
  ),
  f(
    "laufende-summe-berechnen",
    "Laufende Summe berechnen",
    "Kumuliert nach unten, mit wachsendem Bereich.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=SUMME($B$2:B2)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["In C2, nach unten ziehen. $B$2 bleibt, B2 wächst. In einer Tabelle: =SUMME(INDEX([Umsatz];1):[@Umsatz]). Pivot mit laufender Summe im Wertfeld ist oft klarer."],
      },
    ],
  ),
  f(
    "summe-aus-spalte",
    "Summe aus einer Spalte",
    "Die ganze Spalte oder der Tabellenspalte, ohne hartes Ende.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=SUMME(B:B)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Oder =SUMME(Tabelle1[Umsatz]). Ganze Spalte ist bequem, in Monster-Mappen lieber begrenzter Bereich oder Tabelle."],
      },
    ],
  ),
  f(
    "negative-zahlen-in-positive-aendern",
    "Negative Zahlen in positive ändern",
    "Vorzeichen kippen oder Betrag.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=ABS(A2)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["ABS macht immer positiv. Nur Vorzeichen tauschen: =-A2. In Power Query: Number.Abs. Für Anzeige reicht das Format 0;0;0 – der Wert bleibt negativ."],
      },
    ],
  ),
  f(
    "leerzeichen-entfernen",
    "Leerzeichen entfernen",
    "GLÄTTEN, WECHSELN und das geschützte Leerzeichen.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=GLÄTTEN(WECHSELN(A2;ZEICHEN(160);\" \"))"],
      },
      {
        heading: "So geht's",
        paragraphs: ["GLÄTTEN nimmt Rand und Doppelspaces. ZEICHEN(160) ist das geschützte Leerzeichen aus Web-Imports. Alles weg: =WECHSELN(A2;\" \";\"\")."],
      },
    ],
  ),
  f(
    "vorname-und-nachname-trennen",
    "Vorname und Nachname trennen",
    "Am Leerzeichen splitten – TEXTVOR/TEXTNACH oder LINKS/SUCHEN.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=TEXTVOR(A2;\" \")    // Nachname: =TEXTNACH(A2;\" \")"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Mehrere Vornamen: TEXTNACH mit Instanz -1 holt den letzten Teil. Klassisch: =LINKS(A2;FINDEN(\" \";A2)-1). Blitzvorschau (Strg+E) wenn das Muster klar ist."],
      },
    ],
  ),
  f(
    "vorname-und-nachname-zusammenfuehren",
    "Vorname und Nachname zusammenführen",
    "Zwei Spalten zu einem Anzeigenamen.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=GLÄTTEN(A2&\" \"&B2)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["TEXTKETTE(\" \";WAHR;A2;B2) ignoriert Leere. Nachname zuerst: =B2&\", \"&A2."],
      },
    ],
  ),
  f(
    "leere-zellen-markieren",
    "Leere Zellen markieren",
    "Bedingte Formatierung auf ISTLEER, oder F5 → Inhalte.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=ISTLEER(A2)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Start → Bedingte Formatierung → Formel: =A2=\"\" auf den Bereich. Zum Markieren ohne Farbe: F5 → Inhalte → Leerzellen."],
      },
    ],
  ),
  f(
    "werte-groesser-x-markieren",
    "Werte größer x markieren",
    "Bedingte Formatierung, Zellwert oder Formel.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=$B2>$E$1"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Regel auf $B2:$B100, Vergleichszelle absolut. Zellwert-Regel „größer als“ reicht, wenn x fest ist."],
      },
    ],
  ),
  f(
    "bedingte-formatierung-mehrere-bedingungen",
    "Bedingte Formatierung: mehrere Bedingungen",
    "Mehrere Regeln, Reihenfolge, Bei Wahr anhalten.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=$C2> $E$2"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Jede Schwelle eine Regel. Von spezifisch nach allgemein, Häkchen „Bei Wahr anhalten“, sonst überschreibt die zweite die erste."],
      },
    ],
  ),
  f(
    "bedingte-formatierung-ganze-zeile",
    "Bedingte Formatierung: ganze Zeile",
    "Die Regel auf $C2, der Bereich auf $A2:$F100.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=$C2=\"offen\""],
      },
      {
        heading: "So geht's",
        paragraphs: ["Dollar nur vor der Spalte des Kriteriums. Relative Zeile, damit jede Zeile einzeln prüft."],
      },
    ],
  ),
  f(
    "datumsangaben-in-den-naechsten-n-tagen-markieren",
    "Datumsangaben in den nächsten n Tagen markieren",
    "Zwischen HEUTE und HEUTE+n.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=UND(A2>=HEUTE();A2<=HEUTE()+$E$1)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["E1 = Anzahl Tage. Volatil durch HEUTE – wechselt um Mitternacht."],
      },
    ],
  ),
  f(
    "datumsangaben-groesser-x-markieren",
    "Datumsangaben größer x markieren",
    "Alles nach einem Stichtag.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=$A2>$E$1"],
      },
      {
        heading: "So geht's",
        paragraphs: ["E1 als Datum. Typ prüfen: Text „15.03.2024“ mit DATWERT."],
      },
    ],
  ),
  f(
    "eindeutige-werte-markieren",
    "Eindeutige Werte markieren",
    "ZÄHLENWENN = 1, oder Regel „eindeutige Werte“.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=ZÄHLENWENN($A$2:$A$100;A2)=1"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Bedingte Formatierung → Hervorheben → Doppelte Werte → eindeutig. Formel-Variante lässt dich den Bereich steuern."],
      },
    ],
  ),
  f(
    "werte-nicht-zwischen-x-und-y-markieren",
    "Werte nicht zwischen x und y markieren",
    "Außerhalb eines Bands.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=ODER(A2<$E$1;A2>$E$2)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Oder NICHT(UND(A2>=E1;A2<=E2))."],
      },
    ],
  ),
  f(
    "x-kleinste-werte-markieren",
    "Die x kleinsten Werte markieren",
    "Rang oder KKLEINSTE.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=A2<=KKLEINSTE($A$2:$A$100;$E$1)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["E1 = wie viele. Bei Gleichstand werden mehr Zellen grün – dann RANG.GLCH."],
      },
    ],
  ),
  f(
    "x-groesste-werte-markieren",
    "Die x größten Werte markieren",
    "KGRÖSSTE als Schwelle.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=A2>=KGRÖSSTE($A$2:$A$100;$E$1)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Eingebaute Regel „obere 10“ macht dasselbe mit Prozent oder Anzahl."],
      },
    ],
  ),
  f(
    "werte-zwischen-x-und-y-markieren",
    "Werte zwischen x und y markieren",
    "Inklusives Intervall.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=UND(A2>=$E$1;A2<=$E$2)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Zellwert-Regel „zwischen“ ist der Klickweg."],
      },
    ],
  ),
  f(
    "dynamisch-benannter-bereich-mit-bereich-verschieben",
    "Dynamisch benannter Bereich mit BEREICH.VERSCHIEBEN",
    "Wächst mit der Liste, volatil.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=BEREICH.VERSCHIEBEN($A$1;0;0;ANZAHL2($A:$A);1)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Im Namensmanager. ANZAHL2 zählt Einträge. Volatil – bei großen Mappen INDEX bevorzugen."],
      },
    ],
  ),
  f(
    "dynamisch-benannter-bereich-mit-indirekt",
    "Dynamisch benannter Bereich mit INDIREKT",
    "Adresse als Text, ebenfalls volatil.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=INDIREKT(\"A1:A\"&ANZAHL2($A:$A))"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Funktioniert, ist aber spröde bei eingefügten Zeilen. Lieber Tabelle (Strg+T) oder INDEX."],
      },
    ],
  ),
  f(
    "dynamisch-benannter-bereich-mit-index",
    "Dynamisch benannter Bereich mit INDEX",
    "Nicht volatil, der robuste Klassiker vor Tabellen.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=$A$1:INDEX($A:$A;ANZAHL2($A:$A))"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Im Namensmanager. Die Tabelle (Strg+T) ersetzt das in den meisten Fällen."],
      },
    ],
  ),
  f(
    "zwei-bereiche-vergleichen",
    "Zwei Bereiche vergleichen",
    "Welche Werte links fehlen rechts – und umgekehrt.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=ZÄHLENWENN(B:B;A2)=0"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Formel neben A: fehlt in B. FILTER in 365: =FILTER(A2:A100;ZÄHLENWENN(B:B;A2:A100)=0). Bedingte Formatierung auf dieselbe Formel."],
      },
    ],
  ),
  f(
    "mehrere-zellen-haben-denselben-wert",
    "Mehrere Zellen haben denselben Wert",
    "UND oder IDENTISCH über den Block.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=UND(A2=B2;B2=C2)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Drei Zellen gleich. Array: =ANZAHL2(A2:C2)=1 wenn EINDEUTIG nur einen Wert liefert? Besser: =MAX(ZÄHLENWENN(A2:C2;A2:C2))=ANZAHL2(A2:C2) für „alle gleich“."],
      },
    ],
  ),
  f(
    "mehrere-zellen-haben-denselben-wert-schreibweise-wird-beachtet",
    "Mehrere Zellen gleich – Groß/Klein zählt",
    "IDENTISCH statt =.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=UND(IDENTISCH(A2;B2);IDENTISCH(B2;C2))"],
      },
      {
        heading: "So geht's",
        paragraphs: ["= ist in Excel case-insensitive. IDENTISCH unterscheidet „Nord“ und „nord“."],
      },
    ],
  ),
  f(
    "letzte-spaltennummer-in-einem-zellbereich",
    "Letzte Spaltennummer in einem Zellbereich",
    "SPALTE plus SPALTEN minus 1.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=SPALTE(Bereich)+SPALTEN(Bereich)-1"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Für A2:F20 → 6. Letzte nichtleere Spalte in einer Zeile: =VERGLEICH(WAHR;A2:XFD2<>\"\";0) mit Lookup von rechts über XVERGLEICH(…;-1)."],
      },
    ],
  ),
  f(
    "erste-spaltennummer-in-einem-zellbereich",
    "Erste Spaltennummer in einem Zellbereich",
    "Einfach SPALTE des Bereichs.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=SPALTE(Bereich)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["SPALTE(A2:F20) = 1. Als Adresse: =ADRESSE(ZEILE(Bereich);SPALTE(Bereich))."],
      },
    ],
  ),
  f(
    "letzte-zeilennummer-in-einem-zellbereich",
    "Letzte Zeilennummer in einem Zellbereich",
    "ZEILE plus ZEILEN minus 1.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=ZEILE(Bereich)+ZEILEN(Bereich)-1"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Letzte nichtleere in einer Spalte: =XVERGLEICH(WAHR;A:A<>\"\";0;-1) (365)."],
      },
    ],
  ),
  f(
    "erste-zeilennummer-in-einem-zellbereich",
    "Erste Zeilennummer in einem Zellbereich",
    "ZEILE des Bereichs.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=ZEILE(Bereich)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["ZEILE(A5:A20) = 5."],
      },
    ],
  ),
  f(
    "zellbereich-enthaelt-fehler",
    "Zellbereich enthält Fehler",
    "SUMME(ISTFEHLER(…)) oder AGGREGAT.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=SUMME(--ISTFEHLER(A2:A100))>0"],
      },
      {
        heading: "So geht's",
        paragraphs: ["In 365 dynamisch. Älter: =SUMPRODUCT(--ISERROR(A2:A100))>0. AGGREGAT kann Fehler beim Rechnen ignorieren."],
      },
    ],
  ),
  f(
    "zellbereich-enthaelt-leere-zellen",
    "Zellbereich enthält leere Zellen",
    "ANZAHLLEEREZELLEN > 0.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=ANZAHLLEEREZELLEN(A2:A100)>0"],
      },
      {
        heading: "So geht's",
        paragraphs: ["\"\" aus Formeln zählt als leer. ISTLEER zählt die nicht – je nachdem, was du willst."],
      },
    ],
  ),
  f(
    "zellbereich-enthaelt-text",
    "Zellbereich enthält Text",
    "ZÄHLENWENN mit Sternchen oder SUMME(ISTTEXT).",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=ZÄHLENWENN(A2:A100;\"*\")>0"],
      },
      {
        heading: "So geht's",
        paragraphs: ["* trifft Text, keine Zahlen. Oder =SUMME(--ISTTEXT(A2:A100))>0."],
      },
    ],
  ),
  f(
    "zellbereich-enthaelt-zahlen",
    "Zellbereich enthält Zahlen",
    "ANZAHL > 0.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=ANZAHL(A2:A100)>0"],
      },
      {
        heading: "So geht's",
        paragraphs: ["ANZAHL zählt nur Zahlen, ANZAHL2 alles Nichtleere."],
      },
    ],
  ),
  f(
    "anzahl-zellen-in-einem-zellbereich",
    "Anzahl Zellen in einem Zellbereich",
    "ZEILEN mal SPALTEN.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=ZEILEN(Bereich)*SPALTEN(Bereich)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["A1:C10 → 30. BEREICHE für nicht zusammenhängende Bezüge."],
      },
    ],
  ),
  f(
    "anzahl-zeilen-in-einem-zellbereich",
    "Anzahl Zeilen in einem Zellbereich",
    "ZEILEN.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=ZEILEN(A2:A100)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["99. In Tabellen: =ZEILEN(Tabelle1)."],
      },
    ],
  ),
  f(
    "anzahl-spalten-in-einem-zellbereich",
    "Anzahl Spalten in einem Zellbereich",
    "SPALTEN.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=SPALTEN(A1:F1)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["6."],
      },
    ],
  ),
  f(
    "adresse-des-benannten-zellbereichs-abrufen",
    "Adresse des benannten Zellbereichs abrufen",
    "BEREICH.VERSCHIEBEN plus ZELLE, oder FORMELTEXT.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=ZELLE(\"adresse\";INDIREKT(\"Umsatz\"))"],
      },
      {
        heading: "So geht's",
        paragraphs: ["ZELLE(\"adresse\";Umsatz) wenn der Name direkt geht. Voll: =ADRESSE(ZEILE(Umsatz);SPALTE(Umsatz))&\":\"&ADRESSE(ZEILE(Umsatz)+ZEILEN(Umsatz)-1;SPALTE(Umsatz)+SPALTEN(Umsatz)-1)."],
      },
    ],
  ),
  f(
    "adresse-der-letzten-zelle-in-zellbereich",
    "Adresse der letzten Zelle im Zellbereich",
    "ADRESSE aus letzter Zeile/Spalte.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=ADRESSE(ZEILE(B)+ZEILEN(B)-1;SPALTE(B)+SPALTEN(B)-1)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["B = dein Bereich. Absoluter Stil über das dritte Argument von ADRESSE."],
      },
    ],
  ),
  f(
    "adresse-der-ersten-zelle-in-zellbereich",
    "Adresse der ersten Zelle im Zellbereich",
    "ADRESSE aus ZEILE und SPALTE.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=ADRESSE(ZEILE(Bereich);SPALTE(Bereich))"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Beispiel A2:F20 → $A$2."],
      },
    ],
  ),
  f(
    "sind-alle-zellen-im-bereich-leer",
    "Sind alle Zellen im Bereich leer?",
    "ANZAHL2 = 0.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=ANZAHL2(A2:A100)=0"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Strenger: =ANZAHLLEEREZELLEN(A2:A100)=ZEILEN(A2:A100)*SPALTEN(A2:A100)."],
      },
    ],
  ),
  f(
    "werte-die-in-beiden-spalte-vorkommen-markieren",
    "Werte markieren, die in beiden Spalten vorkommen",
    "ZÄHLENWENN auf die andere Spalte.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=ZÄHLENWENN($B$2:$B$100;A2)>0"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Bedingte Formatierung auf Spalte A. Schnittmenge. EINDEUTIG+FILTER in 365 für die Liste."],
      },
    ],
  ),
  f(
    "werte-die-nur-in-einer-spalte-vorkommen-markieren",
    "Werte markieren, die nur in einer Spalte vorkommen",
    "Anti-Join per ZÄHLENWENN = 0.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=ZÄHLENWENN($B$2:$B$100;A2)=0"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Nur in A, nicht in B. Andersherum die Bereiche tauschen."],
      },
    ],
  ),
  f(
    "fehlende-werte-markieren",
    "Fehlende Werte markieren",
    "Was in der Soll-Liste fehlt.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=ZÄHLENWENN(Ist;A2)=0"],
      },
      {
        heading: "So geht's",
        paragraphs: ["A = Soll, Ist = die zweite Spalte. Gleicher Gedanke wie nur-in-einer-Spalte."],
      },
    ],
  ),
  f(
    "doppelte-werte-markieren",
    "Doppelte Werte markieren",
    "ZÄHLENWENN > 1.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=ZÄHLENWENN($A$2:$A$100;A2)>1"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Eingebaute Regel „Doppelte Werte“. Formel, wenn nur die zweite+ Vorkommen markiert werden sollen: =ZÄHLENWENN($A$2:A2;A2)>1."],
      },
    ],
  ),
  f(
    "zaehlen-negative-zahlen",
    "Negative Zahlen zählen",
    "ZÄHLENWENN <0.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=ZÄHLENWENN(A2:A100;\"<0\")"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Null ist nicht negativ. Absolutwerte vorher ABS, wenn Vorzeichen egal ist."],
      },
    ],
  ),
  f(
    "zaehlen-positive-zahlen",
    "Positive Zahlen zählen",
    "ZÄHLENWENN >0.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=ZÄHLENWENN(A2:A100;\">0\")"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Ohne Null. Mit Null: \">=0\" und ANZAHL abgleichen."],
      },
    ],
  ),
  f(
    "zaehlen-nicht-leere-zellen",
    "Nicht leere Zellen zählen",
    "ANZAHL2.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=ANZAHL2(A2:A100)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Zählt Text, Zahlen, Fehler. Nur Zahlen: ANZAHL."],
      },
    ],
  ),
  f(
    "zaehlen-leere-zellen",
    "Leere Zellen zählen",
    "ANZAHLLEEREZELLEN.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=ANZAHLLEEREZELLEN(A2:A100)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Formeln mit \"\" zählen mit."],
      },
    ],
  ),
  f(
    "zaehlen-datumsbereich-wochentage",
    "Wochentage in einem Datumsbereich zählen",
    "NETTOARBEITSTAGE oder SUMPRODUCT auf WOCHENTAG.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=NETTOARBEITSTAGE(A2;B2)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Nur Mo–Fr. Bestimmter Wochentag: =SUMMENPRODUKT(--(WOCHENTAG(ZEILE(INDIREKT(A2&\":\"&B2));2)=1)) für Montage – in 365 lieber SEQUENZ."],
      },
    ],
  ),
  f(
    "zaehlen-datumsbereich-tage",
    "Tage in einem Datumsbereich zählen",
    "Ende minus Start, oder TAGE.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=B2-A2    // inklusiv: =B2-A2+1"],
      },
      {
        heading: "So geht's",
        paragraphs: ["TAGE(B2;A2) ist dasselbe. Format der Zelle: Zahl, nicht Datum."],
      },
    ],
  ),
  f(
    "zaehlen-datumsbereich-monate",
    "Monate in einem Datumsbereich zählen",
    "DATEDIF mit \"M\".",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=DATEDIF(A2;B2;\"M\")"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Ganze Monate. Brüche: =BRTEILJAHRE(A2;B2)*12."],
      },
    ],
  ),
  f(
    "zaehlen-datumsbereich-jahre",
    "Jahre in einem Datumsbereich zählen",
    "DATEDIF \"Y\" oder BRTEILJAHRE.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=DATEDIF(A2;B2;\"Y\")"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Vollendete Jahre, gut für Alter. Bruch: =BRTEILJAHRE(A2;B2;1)."],
      },
    ],
  ),
  f(
    "durchschnitt-zahlen",
    "Durchschnitt von Zahlen",
    "MITTELWERT, ignoriert Text.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=MITTELWERT(B2:B100)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["MITTELWERTA zählt Text als 0. Leere ignoriert MITTELWERT."],
      },
    ],
  ),
  f(
    "durchschnitt-gewichtet",
    "Gewichteter Durchschnitt",
    "SUMMENPRODUKT durch SUMME der Gewichte.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=SUMMENPRODUKT(B2:B100;C2:C100)/SUMME(C2:C100)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["B = Werte, C = Gewichte (Menge, Stunden). Division durch 0 abfangen."],
      },
    ],
  ),
  f(
    "durchschnitt-ohne-nullen",
    "Durchschnitt ohne Nullen",
    "MITTELWERTWENN ungleich 0.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=MITTELWERTWENN(B2:B100;\"<>0\")"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Leere sind schon raus. Nullen aus Importen oft Platzhalter – die gehören nicht in den Schnitt."],
      },
    ],
  ),
  f(
    "durchschnitt-pro-monat-berechnen",
    "Durchschnitt pro Monat berechnen",
    "Hilfsspalte Monat plus MITTELWERTWENN.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=MITTELWERTWENNS(Werte;TEXT(Datum;\"JJJJ-MM\");\"2024-03\")"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Oder Pivot: Datum gruppieren nach Monat, Werte als Mittelwert. 365: GRUPPIERENNACH."],
      },
    ],
  ),
  f(
    "durchschnitt-ohne-fehler",
    "Durchschnitt ohne Fehler",
    "AGGREGAT oder MITTELWERTWENN auf ISTFEHLER.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=AGGREGAT(1;6;B2:B100)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Funktion 1 = Mittelwert, Option 6 = Fehler ignorieren. TEILERGEBNIS ignoriert keine Fehler."],
      },
    ],
  ),
  f(
    "spaltennummer-in-buchstaben-umwandeln",
    "Spaltennummer in Buchstaben umwandeln",
    "ADRESSE plus WECHSELN, oder TEXT.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=WECHSELN(ADRESSE(1;A2;4);\"1\";\"\")"],
      },
      {
        heading: "So geht's",
        paragraphs: ["A2 = 3 → C. Die 1 in der Adresse C1 wegschneiden. XVERWEIS auf eine Buchstabenliste für 1–26 reicht oft."],
      },
    ],
  ),
  f(
    "spaltenbuchstabe-in-zahl-umwandeln",
    "Spaltenbuchstabe in Zahl umwandeln",
    "SPALTE plus INDIREKT.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=SPALTE(INDIREKT(A2&\"1\"))"],
      },
      {
        heading: "So geht's",
        paragraphs: ["A2 = \"C\" → 3. Nur Buchstaben, keine Zahl in A2."],
      },
    ],
  ),
  f(
    "dynamischer-arbeitsmappen-verweis",
    "Dynamischer Arbeitsmappen-Verweis",
    "INDIREKT auf Dateiname und Blatt – Quelle muss offen sein.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=INDIREKT(\"'[\"&A2&\".xlsx]\"&B2&\"'!C2\")"],
      },
      {
        heading: "So geht's",
        paragraphs: ["A2 Dateiname, B2 Blatt. Zerbrechlich. Stabiler: Power Query aus der anderen Datei."],
      },
    ],
  ),
  f(
    "summe-mit-mehreren-kriterien",
    "Summe mit mehreren Kriterien",
    "SUMMEWENNS, nicht mehrere SUMMEWENN addieren.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=SUMMEWENNS(C:C;A:A;\"Nord\";B:B;\">=1.1.2024\")"],
      },
      {
        heading: "So geht's",
        paragraphs: ["UND-Logik. ODER: zwei SUMMEWENNS addieren oder SUMMENPRODUKT. Reihenfolge: erst Summenbereich."],
      },
    ],
  ),
];
