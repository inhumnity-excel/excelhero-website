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

export const FORMELN_ARTICLES: Article[] = [
  f(
    "erstes-zeichen-entfernen",
    "Erstes Zeichen entfernen",
    "Das erste Zeichen einer Zelle abschneiden – Artikelnummer, führendes Apostroph oder Importmüll.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=RECHTS(A2;LÄNGE(A2)-1)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["LÄNGE zählt alle Zeichen, RECHTS holt alle bis auf das erste. Für fest n Zeichen: =RECHTS(A2;LÄNGE(A2)-n). In Microsoft 365 geht auch =TEIL(A2;2;999). Vorher prüfen, ob wirklich jedes erste Zeichen weg soll – sonst WENN+LINKS."],
      },
    ],
  ),
  f(
    "letzte-zeichen-entfernen",
    "Letztes Zeichen entfernen",
    "Das letzte Zeichen oder eine feste Endung (z. B. „-DE“) von rechts abschneiden.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=LINKS(A2;LÄNGE(A2)-1)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["LINKS behält alles außer dem letzten Zeichen. Drei Zeichen am Ende: =LINKS(A2;LÄNGE(A2)-3). Eine bekannte Endung: =WECHSELN(A2;\"-DE\";\"\") – aber nur, wenn „-DE“ nicht mitten im Text vorkommt."],
      },
    ],
  ),
  f(
    "cagr-berechnen",
    "CAGR berechnen",
    "Compound Annual Growth Rate: durchschnittliche jährliche Wachstumsrate zwischen Start- und Endwert.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=(Endwert/Startwert)^(1/Jahre)-1"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Beispiel 2019 = 100, 2024 = 161, fünf Jahre: =(161/100)^(1/5)-1 ergibt 10 %. Format als Prozent. RRI erledigt dasselbe: =RRI(Jahre;Start;Ende). Nicht mit der einfachen Veränderung (Ende/Start-1) verwechseln – die ignoriert die Laufzeit."],
      },
    ],
  ),
  f(
    "formel-in-zelle-anzeigen",
    "Formel in Zelle anzeigen",
    "Die Formel einer anderen Zelle als Text zeigen – Dokumentation und Fehlersuche.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=FORMELTEXT(A2)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["FORMELTEXT gibt die Formel inkl. Gleichzeichen als Text. Fehlt eine Formel, kommt #NV – mit WENNFEHLER abfangen: =WENNFEHLER(FORMELTEXT(A2);\"\"). Zum Anzeigen aller Formeln im Blatt: Formeln → Formeln anzeigen (Strg+#)."],
      },
    ],
  ),
  f(
    "fuehrende-nullen-hinzufuegen",
    "Führende Nullen hinzufügen",
    "Aus 123 wird 000123 – ohne die Zahl als Text zu verlieren, wenn du sie nur anzeigen willst.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=TEXT(A2;\"000000\")"],
      },
      {
        heading: "So geht's",
        paragraphs: ["TEXT formatiert mit sechs Stellen. Für Anzeige reicht Zellenformat 000000 (Strg+1) – der Wert bleibt eine Zahl. Wenn du wirklich Text brauchst (Export), TEXT oder =WIEDERHOLEN(\"0\";6-LÄNGE(A2))&A2. Achtung: TEXT macht aus der Zahl Text, SVERWEIS auf Zahlen schlägt dann fehl."],
      },
    ],
  ),
  f(
    "zeitueberschneidung-nachtschichtzuschlag-berechnen",
    "Zeitüberschneidung: Nachtschichtzuschlag berechnen",
    "Wie viele Stunden einer Schicht in das Nachtfenster (z. B. 22–6 Uhr) fallen.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=MAX(0;MIN(Ende;NachtEnde)-MAX(Start;NachtStart))*24"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Zeiten als Excel-Uhrzeiten. NachtStart 22:00, NachtEnde 06:00+1 (über Mitternacht: +1 zum Enddatum). Die Überlappung zweier Intervalle ist min(Ende)-max(Start), nicht negativ. Mal 24 für Stunden. Schicht über Mitternacht: Ende < Start → Ende+1."],
      },
    ],
  ),
  f(
    "xverweis-mit-mehreren-suchkriterien",
    "XVERWEIS mit mehreren Suchkriterien",
    "XVERWEIS über zwei Bedingungen, ohne Hilfsspalte – mit & oder FILTER.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=XVERWEIS(K1&K2;Bereich1&Bereich2;Rückgabe)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Die Verkettung macht aus zwei Spalten einen Suchschlüssel. In Microsoft 365 dynamisch: =XVERWEIS(1;(Region=K1)*(Produkt=K2);Umsatz) – das Produkt der Wahrheitswerte ist 1 bei Treffer. FILTER ist oft klarer: =FILTER(Umsatz;(Region=K1)*(Produkt=K2))."],
      },
    ],
  ),
  f(
    "sverweis-mit-mehreren-suchkriterien",
    "SVERWEIS mit mehreren Suchkriterien",
    "Klassiker vor XVERWEIS: Hilfsspalte mit A&B oder INDEX/VERGLEICH mit mehreren Kriterien.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=SVERWEIS(K1&K2;A:D;4;FALSCH)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["In der Matrix steht in Spalte A die Verkettung =B2&C2. Sauberer ohne Hilfsspalte: =INDEX(Rückgabe;VERGLEICH(1;(Region=K1)*(Produkt=K2);0)) als Matrix (365 rechnet sie dynamisch). Bereich_Verweis FALSCH nicht vergessen."],
      },
    ],
  ),
  f(
    "summe-pro-quartal",
    "Summe pro Quartal",
    "Umsätze einer Datumsspalte auf Quartale verdichten.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=SUMMEWENNS(Umsatz;Datum;\">=\"&DATUM(Jahr;Quartal*3-2;1);Datum;\"<\"&DATUM(Jahr;Quartal*3+1;1))"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Oder Hilfsspalte =AUFRUNDEN(MONAT(Datum)/3;0) bzw. =RUNDENAUF(MONAT(A2)/3;0) und SUMMEWENN darauf. Pivot mit Datum gruppiert nach Quartal ist für Auswertungen oft schneller als die Formel."],
      },
    ],
  ),
  f(
    "summe-pro-jahr",
    "Summe pro Jahr",
    "Jahreswerte aus einer Datumsliste, ohne die Tabelle umzubauen.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=SUMMEWENNS(Umsatz;Datum;\">=\"&DATUM(Jahr;1;1);Datum;\"<\"&DATUM(Jahr+1;1;1))"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Kürzer mit Hilfsspalte =JAHR(Datum) und =SUMMEWENN(Jahre;2024;Umsatz). SUMMEWENNS kann das Jahr auch so: =SUMMEWENNS(Umsatz;JAHR(Datum);2024) – in 365. Pivot: Datum in Zeilen, gruppieren nach Jahr."],
      },
    ],
  ),
  f(
    "summe-pro-monat",
    "Summe pro Monat",
    "Monatssummen bei einer flachen Buchungsliste.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=SUMMEWENNS(Umsatz;Datum;\">=\"&DATUM(Jahr;Monat;1);Datum;\"<\"&DATUM(Jahr;Monat+1;1))"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Hilfsspalte =TEXT(Datum;\"JJJJ-MM\") und SUMMEWENN darauf. In 365: =SUMMEWENNS(Umsatz;TEXT(Datum;\"JJJJ-MM\");\"2024-03\"). Achte auf das Datumsformat – TEXT hängt an der Sprache."],
      },
    ],
  ),
  f(
    "summe-pro-woche",
    "Summe pro Woche",
    "Kalenderwoche als Gruppierung, ISO oder Excel-Standard.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=SUMMEWENNS(Umsatz;KALENDERWOCHE(Datum;21);Woche;JAHR(Datum);Jahr)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["KALENDERWOCHE mit 21 = ISO (Montag, Woche 1 enthält den 4. Januar). Hilfsspalten Jahr und KW, dann SUMMEWENNS. Ohne Hilfsspalte in 365 über dynamische Arrays. Pivot: Datum gruppieren nach Woche geht nicht überall – KW-Spalte ist zuverlässiger."],
      },
    ],
  ),
  f(
    "summe-nach-wochentag",
    "Summe nach Wochentag",
    "Welche Wochentage bringen Umsatz – Montag bis Sonntag.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=SUMMEWENN(WOCHENTAG(Datum;2);1;Umsatz)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["WOCHENTAG mit 2: 1=Montag … 7=Sonntag. Hilfsspalte oder in 365 direkt. Für eine ganze Woche: 7 Zellen oder eine Pivot mit WOCHENTAG als Zeile. Feiertage sind normale Wochentage – extra Kalender, wenn du sie rausrechnen willst."],
      },
    ],
  ),
  f(
    "fehler-anfangen",
    "Fehler abfangen",
    "WENNFEHLER und WENNNV: #NV, #DIV/0! und Co. in der Anzeige verschwinden lassen – dosiert.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=WENNFEHLER(SVERWEIS(A2;Matrix;2;FALSCH);\"\")"],
      },
      {
        heading: "So geht's",
        paragraphs: ["WENNFEHLER fängt alles. WENNNV nur #NV – besser, wenn ein #DIV/0! sichtbar bleiben soll. Alternative: =WENN(ISTNV(...);\"\";...). Nicht die ganze Mappe einpacken: echte Fehler verschwinden sonst in der Prüfung."],
      },
    ],
  ),
  f(
    "e-mail-adresse-aus-namen-zusammenbauen",
    "E-Mail-Adresse aus Namen zusammenbauen",
    "Vorname, Nachname, Domain → max.mustermann@firma.de.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=KLEIN(A2)&\".\"&KLEIN(B2)&\"@firma.de\""],
      },
      {
        heading: "So geht's",
        paragraphs: ["KLEIN für die Adresse, SONDERZEICHEN und Leerzeichen vorher raus: =WECHSELN(KLEIN(A2);\" \";\"\"). Umlaute: WECHSELN-Kette (ä→ae) oder Power Query. Punkte und Bindestriche je nach Firmenkonvention."],
      },
    ],
  ),
  f(
    "anzahl-eines-zeichens-im-text-zaehlen",
    "Anzahl eines Zeichens im Text zählen",
    "Wie oft kommt „;“ oder \"a\" in einer Zelle vor?",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=(LÄNGE(A2)-LÄNGE(WECHSELN(A2;\"a\";\"\")))/LÄNGE(\"a\")"],
      },
      {
        heading: "So geht's",
        paragraphs: ["WECHSELN entfernt das Zeichen, die Differenz der Längen ist die Anzahl. Für Zeichenketten länger als 1 durch die Länge des Suchtexts teilen. Groß/Klein: WECHSELN ist case-sensitive – vorher KLEIN(A2)."],
      },
    ],
  ),
  f(
    "top-level-domain-ermitteln",
    "Top-Level-Domain ermitteln",
    "Aus www.excelhero.de die Endung de holen.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=TEIL(A2;FINDEN(\"@\";WECHSELN(A2;\".\";\"@\";LÄNGE(A2)-LÄNGE(WECHSELN(A2;\".\";\"\"))))+1;99)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Praktischer: alles nach dem letzten Punkt. In 365: =TEXTTRENNEN(A2;\".\";) und den letzten Teil nehmen, oder =RECHTS(A2;LÄNGE(A2)-FINDEN(\"*\";WECHSELN(A2;\".\";\"*\";LÄNGE(A2)-LÄNGE(WECHSELN(A2;\".\";\"\"))))). Power Query: Split am Punkt, letzte Spalte."],
      },
    ],
  ),
  f(
    "domain-von-url-ermitteln",
    "Domain von URL ermitteln",
    "Aus https://excelhero.de/pfad die Domain excelhero.de.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=TEIL(A2;FINDEN(\"://\";A2)+3;FINDEN(\"/\";A2&\"/\";FINDEN(\"://\";A2)+3)-(FINDEN(\"://\";A2)+3))"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Protokoll abschneiden, dann bis zum nächsten Slash. www. optional mit WECHSELN entfernen. In 365: TEXTTRENNEN. Für Listen: Power Query → Spalte teilen nach Begrenzer."],
      },
    ],
  ),
  f(
    "name-von-e-mail-adresse-ermitteln",
    "Name von E-Mail Adresse ermitteln",
    "max.mustermann aus max.mustermann@firma.de.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=LINKS(A2;FINDEN(\"@\";A2)-1)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["FINDEN sucht das @, LINKS nimmt alles davor. Kein @: WENNFEHLER(...,A2). Für Vor- und Nachname danach nochmal am Punkt splitten."],
      },
    ],
  ),
  f(
    "domain-von-e-mail-adresse-ermitteln",
    "Domain von E-Mail Adresse ermitteln",
    "firma.de aus max.mustermann@firma.de.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=RECHTS(A2;LÄNGE(A2)-FINDEN(\"@\";A2))"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Alles rechts vom @. TEIL(A2;FINDEN(\"@\";A2)+1;99) geht ebenso. Danach TLD wie oben. Leerzeichen trimmen: GLÄTTEN."],
      },
    ],
  ),
  f(
    "aktuelle-uhrzeit",
    "Aktuelle Uhrzeit",
    "Nur die Uhrzeit, die sich bei jeder Berechnung aktualisiert.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=JETZT()-HEUTE()   oder   =ZEIT(STUNDE(JETZT());MINUTE(JETZT());SEKUNDE(JETZT()))"],
      },
      {
        heading: "So geht's",
        paragraphs: ["JETZT ist Datum+Uhrzeit. Format der Zelle: hh:mm:ss. Volatil: jede Änderung der Mappe rechnet neu. Für einen Zeitstempel, der stehen bleibt: Strg+Umschalt+; (Uhrzeit) bzw. eine VBA-Now-Schreibweise."],
      },
    ],
  ),
  f(
    "aktuelles-datum-und-uhrzeit",
    "Aktuelles Datum und Uhrzeit",
    "Zeitstempel in einer Zelle, der mitläuft.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=JETZT()"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Format TT.MM.JJJJ hh:mm. Volatil. Statisch: Strg+; für Datum, Strg+Umschalt+; für Uhrzeit. In Tabellen als Änderungsprotokoll eher VBA oder Power Automate – JETZT überschreibt sich selbst."],
      },
    ],
  ),
  f(
    "aktuelles-datum",
    "Aktuelles Datum",
    "Heutiges Datum ohne Uhrzeit – für Fälligkeiten und Alter.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=HEUTE()"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Nur der Tag, Uhrzeit 0:00. Volatil, wechselt um Mitternacht. Statisch: Strg+;. Alter in Jahren: =JAHR(HEUTE())-JAHR(Geb)+((HEUTE()-DATUM(JAHR(HEUTE());MONAT(Geb);TAG(Geb)))<0)."],
      },
    ],
  ),
  f(
    "sverweis-nach-datum-suchen",
    "SVERWEIS nach Datum suchen",
    "Ein Datum als Suchkriterium – oft scheitert es an Text vs. echter Datumswert.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=SVERWEIS(DATWERT(A2);Matrix;2;FALSCH)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Wenn A2 schon ein Datum ist: direkt SVERWEIS(A2;…). Wenn es Text „15.03.2024“ ist: DATWERT oder ZAHLENWERT. Die Matrix-Spalte muss denselben Typ haben. Ungefähr: Bereich_Verweis WAHR nur bei sortierter Datumsspalte."],
      },
    ],
  ),
  f(
    "xverweis-mehrere-ergebnisse",
    "XVERWEIS mehrere Ergebnisse",
    "Alle Treffer, nicht nur den ersten – FILTER statt XVERWEIS.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=FILTER(Rückgabe;Suchspalte=Kriterium)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["XVERWEIS liefert einen Wert. Mehrere Zeilen: FILTER, optional in TEXTVERKETTEN verpacken: =TEXTVERKETTEN(\", \";WAHR;FILTER(...)). In älteren Versionen: Hilfsspalte mit ZÄHLENWENNS-Laufnummer und SVERWEIS darauf."],
      },
    ],
  ),
  f(
    "sverweis-mehrere-ergebnisse",
    "SVERWEIS mehrere Ergebnisse",
    "SVERWEIS stoppt beim ersten Treffer. Mehrere Werte brauchen FILTER oder eine Pivot.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=FILTER(Rückgabe;Suchspalte=Kriterium)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Oder TEXTVERKETTEN über FILTER. Klassisch: Array-Formel mit KLEINSTE/INDEX. Für Auswertungen ist eine Pivot (Filter aufs Suchkriterium) klarer als eine Monsterformel."],
      },
    ],
  ),
  f(
    "wenn-zelle-x-nicht-enthaelt-dann",
    "Wenn Zelle x nicht enthält dann",
    "WENN der Text „offen“ nicht vorkommt, dann …",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=WENN(ISTFEHLER(FINDEN(\"offen\";A2));\"passt\";\"enthält offen\")"],
      },
      {
        heading: "So geht's",
        paragraphs: ["FINDEN ist case-sensitiv, SUCHEN nicht. ISTFEHLER(FINDEN()) = nicht enthalten. In 365: =WENN(ISTZAHL(FINDEN(...))). Für ganze Listen: FILTER auf NICHT(ISTZAHL(FINDEN(...)))."],
      },
    ],
  ),
  f(
    "zellen-mit-bestimmten-inhalt-zaehlen",
    "Zellen mit bestimmten Inhalt zählen",
    "ZÄHLENWENN und ZÄHLENWENNS für Text, Zahl, Wildcard.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=ZÄHLENWENN(A:A;\"offen\")"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Wildcards: \"offen*\" beginnt mit, \"*offen*\" enthält. ZÄHLENWENNS für zwei Bedingungen. Zahlen: ZÄHLENWENN(A:A;\">10\"). Nicht ganze Spalten in sehr großen Mappen – begrenzter Bereich oder Tabelle."],
      },
    ],
  ),
  f(
    "zellen-ohne-bestimmten-inhalt-zaehlen",
    "Zellen ohne bestimmten Inhalt zählen",
    "Alle außer einem Wert – oder alles, was nicht leer ist und nicht „x“.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=ZÄHLENWENN(A:A;\"<>offen\")"],
      },
      {
        heading: "So geht's",
        paragraphs: ["\"<>\" ist ungleich. Leere mitzählen oder nicht: \"<>offen\" zählt auch Leere. Ohne Leere: =ZÄHLENWENNS(A:A;\"<>offen\";A:A;\"<>\")."],
      },
    ],
  ),
  f(
    "summe-ueber-mehrere-arbeitsblaetter",
    "Summe über mehrere Arbeitsblätter",
    "3D-Bezug: dieselbe Zelle auf Jan:Dez addieren.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=SUMME(Jan:Dez!B2)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Die Blätter müssen nebeneinander liegen (von Jan bis Dez). Namen ohne Leerzeichen oder in Hochkommas. Wenn die Struktur je Blatt anders ist: Power Query Anfügen statt 3D. INDIREKT(\"'\"&Blatt&\"'!B2\") ist volatil – sparsam."],
      },
    ],
  ),
  f(
    "wenn-null-dann-leer",
    "Wenn Null dann leer",
    "0 nicht anzeigen – für Reports, in denen Nullen stören.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=WENN(A2=0;\"\";A2)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Oder das Zahlenformat 0;-0;;@ (drittes Segment leer). Format lässt den Wert 0, Formeln sehen ihn weiter. WENN(...,\"\") macht Text/leer – Mittelwert über den Bereich ändert sich. Für Diagramme oft das Format die bessere Wahl."],
      },
    ],
  ),
  f(
    "sverweis-nach-links",
    "SVERWEIS nach links",
    "SVERWEIS kann nicht nach links. INDEX/VERGLEICH oder XVERWEIS.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=INDEX(A:A;VERGLEICH(Kriterium;C:C;0))"],
      },
      {
        heading: "So geht's",
        paragraphs: ["VERGLEICH findet die Zeile in C, INDEX holt A. XVERWEIS(Kriterium;C:C;A:A) liest sich leichter. SVERWEIS mit negativem Spaltenindex gibt es nicht – Hilfsspalte links daneben ist der alte Workaround."],
      },
    ],
  ),
  f(
    "wenn-zelle-mit-x-beginnt",
    "Wenn Zelle mit X beginnt",
    "Präfix prüfen: Artikelnummern, IBAN, Dateikürzel.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=WENN(LINKS(A2;3)=\"ABC\";\"ja\";\"nein\")"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Oder ZÄHLENWENN(A2;\"ABC*\"). SUCHEN/FINDEN am Anfang: =WENN(FINDEN(\"ABC\";A2)=1;…). Groß/Klein: KLEIN(LINKS(...))."],
      },
    ],
  ),
  f(
    "wenn-und",
    "WENN UND",
    "Zwei Bedingungen wahr: UND in WENN oder WENNS.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=WENN(UND(A2>0;B2=\"ja\");\"ok\";\"\")"],
      },
      {
        heading: "So geht's",
        paragraphs: ["UND(Wahr1;Wahr2;…). In WENNS: =WENNS(UND(...);\"ok\";WAHR;\"\"). Viele UND-Türme: eher eine Hilfsspalte je Bedingung. * in dynamischen Arrays: (A2:A100>0)*(B2:B100=\"ja\")."],
      },
    ],
  ),
  f(
    "wenn-oder",
    "WENN ODER",
    "Eine von mehreren Bedingungen reicht.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=WENN(ODER(A2=\"A\";A2=\"B\");\"passt\";\"\")"],
      },
      {
        heading: "So geht's",
        paragraphs: ["ODER bis 255 Argumente. Für Listen: =WENN(ZÄHLENWENN(Liste;A2);…). Dynamisch: (A2:A=\"A\")+(A2:A=\"B\")."],
      },
    ],
  ),
  f(
    "wenn-zelle-kleiner-ist-als-dann",
    "Wenn Zelle kleiner ist als dann",
    "Schwellen: unter Budget, unter Null, unter Ziel.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=WENN(A2<B2;\"unter Ziel\";\"ok\")"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Achte auf Zahlen vs. Text. Mit WENNFEHLER, wenn B2 leer ist. Für Ampeln: WENNS(A2<0;\"rot\";A2<Ziel;\"gelb\";WAHR;\"grün\") plus bedingte Formatierung."],
      },
    ],
  ),
  f(
    "wenn-die-zelle-gleich-ist",
    "Wenn die Zelle gleich ist",
    "Exakter Vergleich – Text, Zahl, Datum.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=WENN(A2=B2;\"gleich\";\"anders\")"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Textvergleiche sind case-insensitive in WENN, außer IDENTISCH(A2;B2). Zahlen: 1 und \"1\" sind nicht gleich. Datum: gleicher Typ, sonst DATWERT. Für ungefähre Zahlen: ABS(A2-B2)<0,01."],
      },
    ],
  ),
  f(
    "wenn-zelle-groesser-ist-als-dann",
    "Wenn Zelle größer ist als dann",
    "Obergrenze, Bonus ab Schwelle, Überstunden.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=WENN(A2>B2;A2-B2;0)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["MAX(0;A2-B2) ist oft kürzer. Prozent über Ziel: =(A2-B2)/B2. Division durch 0 abfangen."],
      },
    ],
  ),
  f(
    "zwei-tabellen-vergleichen",
    "Zwei Tabellen vergleichen",
    "Welche Keys in A fehlen in B – und umgekehrt.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=WENN(ZÄHLENWENN(B:B;A2);\"\";\"fehlt in B\")"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Spalte in Tabelle A, ZÄHLENWENN auf Tabelle B. FILTER in 365: =FILTER(A2:A100;ZÄHLENWENN(B:B;A2:A100)=0). Power Query: Merge, Join-Art Anti. Duplikate vorher klären."],
      },
    ],
  ),
  f(
    "wenn-zelle-nicht-leer-ist-dann",
    "Wenn Zelle nicht leer ist dann",
    "Nur rechnen, wenn die Eingabe da ist.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=WENN(A2<>\"\";\"ausgefüllt\";\"\")"],
      },
      {
        heading: "So geht's",
        paragraphs: ["ISTLEER(A2) ist WAHR bei wirklich leeren Zellen, nicht bei \"\". NICHT(ISTLEER(A2)) oder A2<>\"\". Für Zahlen 0: A2<>\"\" hält 0 als ausgefüllt – oft gewollt."],
      },
    ],
  ),
  f(
    "wenn-zelle-leer-ist-dann",
    "Wenn Zelle leer ist dann",
    "Platzhalter, Default, Hinweis.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=WENN(ISTLEER(A2);\"bitte ausfüllen\";A2)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["ISTLEER vs. A2=\"\": eine Formel, die \"\" zurückgibt, ist nicht ISTLEER. WENN(A2=\"\";…) fängt beides. In Pivot werden Leere oft als (leer) gruppiert."],
      },
    ],
  ),
  f(
    "wenn-wert-zwischen-zwei-werten-dann",
    "Wenn Wert zwischen zwei Werten dann",
    "Intervall inklusiv oder exklusiv.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=WENN(UND(A2>=Unten;A2<=Oben);\"im Band\";\"außerhalb\")"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Für Noten, Provisionstabelle, Ampel. WENNS von oben nach unten: erst die oberste Schwelle. ODER SVERWEIS mit WAHR auf eine sortierte Schwellenliste."],
      },
    ],
  ),
  f(
    "wenn-zelle-x-enthaelt-dann",
    "Wenn Zelle x enthält dann",
    "Teilstring: \"offen\" irgendwo in der Zelle.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=WENN(ISTZAHL(FINDEN(\"offen\";A2));\"ja\";\"nein\")"],
      },
      {
        heading: "So geht's",
        paragraphs: ["SUCHEN statt FINDEN ignoriert Groß/Klein. ZÄHLENWENN(A2;\"*offen*\"). In Listen FILTER mit ISNUMBER(FINDEN(...))."],
      },
    ],
  ),
  f(
    "anzahl-uebereinstimmungen-zaehlen",
    "Anzahl Übereinstimmungen zählen",
    "Wie oft kommt jeder Wert vor – Häufigkeiten neben der Liste.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=ZÄHLENWENN($A$2:$A$100;A2)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Neben jeden Eintrag, Duplikate >1. Eindeutige Liste: in 365 =EINDEUTIG(A2:A100) plus ZÄHLENWENN. Pivot mit Anzahl ist für große Listen angenehmer."],
      },
    ],
  ),
  f(
    "summe-je-gruppe-berechnen",
    "Summe je Gruppe berechnen",
    "Summe nach Kategorie, ohne Pivot – SUMMEWENN neben EINDEUTIG.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=SUMMEWENN($A$2:$A$100;A2;$B$2:$B$100)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["In 365: =SUMMEWENN(Kat;EINDEUTIG(Kat);Werte) als dynamisches Array. SUMMEWENNS bei zwei Gruppenspalten. Teilergebnis und Pivot bleiben die Werkzeuge für aufklappbare Berichte."],
      },
    ],
  ),
  f(
    "prozentuale-veraenderung",
    "Prozentuale Veränderung",
    "Von alt nach neu: (neu-alt)/alt.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=(B2-A2)/A2"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Format Prozent. Vorzeichen: plus ist Wachstum. Alt=0 abfangen: WENN(A2=0;\"\";(B2-A2)/A2). Log-Veränderung für CAGR über ein Jahr ist dasselbe nur bei einer Periode."],
      },
    ],
  ),
  f(
    "sverweis-auf-andere-arbeitsmappe",
    "SVERWEIS auf andere Arbeitsmappe",
    "Externe Bezüge: [Datei.xlsx]Blatt!Bereich – die Quelldatei sollte offen oder der Pfad stabil sein.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=SVERWEIS(A2;'[Preise.xlsx]Liste'!$A:$C;3;FALSCH)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Excel schreibt den vollen Pfad, sobald die Quelle zu ist. Besser: Daten → Daten abrufen aus der anderen Mappe (Power Query) oder beide Dateien in einem Ordner. Zerbrochene Links: Daten → Abfragen und Verbindungen → Links bearbeiten."],
      },
    ],
  ),
  f(
    "sverweis-auf-anderes-tabellenblatt",
    "SVERWEIS auf anderes Tabellenblatt",
    "Matrix auf einem anderen Blatt derselben Mappe.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=SVERWEIS(A2;Preise!A:C;3;FALSCH)"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Blattname mit Leerzeichen in Hochkommas: 'Preisliste 2024'!A:C. Tabelle: =SVERWEIS(A2;TabellePreise;3;FALSCH) mit strukturiertem Bezug. XVERWEIS analog: =XVERWEIS(A2;Preise!A:A;Preise!C:C)."],
      },
    ],
  ),
  f(
    "zwei-spalten-vergleichen",
    "Zwei Spalten vergleichen",
    "Zeile für Zeile gleich? Oder welche Werte nur links vorkommen?",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=WENN(A2=B2;\"ok\";\"Diff\")"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Spaltenweise: IDENTISCH für Groß/Klein. Mengenvergleich: ZÄHLENWENN die andere Spalte. Bedingte Formatierung → Duplikate, zwei Spalten markieren. Power Query Merge für große Abgleiche."],
      },
    ],
  ),
  f(
    "dauer-in-tagen-stunden-minuten",
    "Dauer in Tagen Stunden Minuten",
    "Ende minus Start, angezeigt als d, hh:mm – auch über Mitternacht.",
    [
      {
        heading: "Die Formel",
        paragraphs: ["=INT(Ende-Start)&\" Tage \"&TEXT(Ende-Start;\"hh:mm\")"],
      },
      {
        heading: "So geht's",
        paragraphs: ["Excel speichert 1 = 1 Tag. Differenz ist ein Bruch. Format [h]:mm summiert über 24h. Über Mitternacht: Wenn Ende<Start, Ende+1. Netzwerktage: NETTOARBEITSTAGE. Stunden als Zahl: =(Ende-Start)*24."],
      },
    ],
  ),
];
