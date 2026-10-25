export type PqMapRow = {
  excel: string;
  powerQuery: string;
  to: string;
};

export type PqMapGroup = {
  heading: string;
  rows: PqMapRow[];
};

export const PQ_MAP: PqMapGroup[] = [
  {
    heading: "Allgemein",
    rows: [
      { excel: "WENN / WENNS / ERSTERWERT", powerQuery: "Spalte hinzufügen → Bedingte Spalte", to: "/power-query/power-query-wenn-wenns-ersterwert" },
      { excel: "SVERWEIS / WVERWEIS / XVERWEIS / INDEX", powerQuery: "Start → Kombinieren → Abfragen zusammenführen", to: "/power-query/power-query-sverweis-wverweis-xverweis-index" },
      { excel: "Werte aus mehreren Zellen verrechnen", powerQuery: "Spalte hinzufügen → Benutzerdefinierte Spalte", to: "/power-query/power-query-benutzerdefinierte-spalte-erstellen-und-mehrere-zellen-verrechnen" },
      { excel: "Suchen & Ersetzen", powerQuery: "Transformieren → Werte ersetzen", to: "/power-query/power-query-suchen-und-ersetzen" },
      { excel: "Pivot: Summe / Mittelwert / Median / Min / Max / Anzahl", powerQuery: "Transformieren → Gruppieren nach", to: "/power-query/power-query-gruppieren-aggreggieren-summe-mittelwert-median-min-max-anzahl" },
    ],
  },
  {
    heading: "Text",
    rows: [
      { excel: "LINKS", powerQuery: "Extrahieren → Erste Zeichen", to: "/power-query/power-query-links" },
      { excel: "RECHTS", powerQuery: "Extrahieren → Letzte Zeichen", to: "/power-query/power-query-rechts" },
      { excel: "LÄNGE", powerQuery: "Extrahieren → Länge", to: "/power-query/power-query-laenge" },
      { excel: "TEIL", powerQuery: "Extrahieren → Bereich", to: "/power-query/power-query-teil" },
      { excel: "KLEIN", powerQuery: "Format → kleinbuchstaben", to: "/power-query/power-query-klein" },
      { excel: "GROSS", powerQuery: "Format → GROSSBUCHSTABEN", to: "/power-query/power-query-gross" },
      { excel: "GROSS2", powerQuery: "Format → Ersten Buchstaben im Wort großschreiben", to: "/power-query/power-query-gross2" },
      { excel: "GLÄTTEN", powerQuery: "Format → Kürzen", to: "/power-query/power-query-glaetten" },
      { excel: "SÄUBERN", powerQuery: "Format → Bereinigen", to: "/power-query/power-query-saeubern" },
      { excel: '"Präfix " &', powerQuery: "Format → Präfix hinzufügen", to: "/power-query/power-query-praefix-hinzufuegen" },
      { excel: '& "Suffix"', powerQuery: "Format → Suffix hinzufügen", to: "/power-query/power-query-suffix-hinzufuegen" },
      { excel: "& / TEXTKETTE / TEXTVERKETTEN", powerQuery: "Spalten zusammenführen", to: "/power-query/power-query-spalten-zusammenfuehren" },
      { excel: "Text in Spalten", powerQuery: "Spalte teilen", to: "/power-query/power-query-text-in-spalten-spalte-teilen" },
      { excel: "TEXTVOR", powerQuery: "Extrahieren → Text vor Trennzeichen", to: "/power-query/power-query-textvor" },
      { excel: "TEXTNACH", powerQuery: "Extrahieren → Text nach Trennzeichen", to: "/power-query/power-query-textnach" },
      { excel: "TEXTTEILEN", powerQuery: "Spalte teilen → Nach Trennzeichen", to: "/power-query/power-query-textteilen" },
    ],
  },
  {
    heading: "Statistiken",
    rows: [
      { excel: "SUMME", powerQuery: "Statistiken → Summe", to: "/power-query/power-query-summe" },
      { excel: "MIN", powerQuery: "Statistiken → Minimum", to: "/power-query/power-query-min-funktion" },
      { excel: "MAX", powerQuery: "Statistiken → Maximum", to: "/power-query/power-query-max-funktion" },
      { excel: "MEDIAN", powerQuery: "Statistiken → Median", to: "/power-query/power-query-median" },
      { excel: "MITTELWERT", powerQuery: "Statistiken → Mittelwert", to: "/power-query/power-query-mittelwert" },
      { excel: "STABW", powerQuery: "Statistiken → Standardabweichung", to: "/power-query/power-query-stabw-funktion" },
      { excel: "ANZAHL2", powerQuery: "Statistiken → Werte zählen", to: "/power-query/power-query-anzahl2" },
      { excel: "ANZAHL(EINDEUTIG())", powerQuery: "Statistiken → Eindeutige Werte zählen", to: "/power-query/power-query-anzahl-eindeutig" },
    ],
  },
  {
    heading: "Rechenoperatoren",
    rows: [
      { excel: "+", powerQuery: "Standard → Addieren", to: "/power-query/power-query-addieren" },
      { excel: "*", powerQuery: "Standard → Multiplizieren", to: "/power-query/power-query-multiplizieren" },
      { excel: "−", powerQuery: "Standard → Subtrahieren", to: "/power-query/power-query-subtrahieren" },
      { excel: "/  und  GANZZAHL / REST", powerQuery: "Standard → Dividieren / Ganzzahl / Modulo", to: "/power-query/power-query-ganzzahliges-dividieren-und-rest" },
      { excel: "+/− x %   und   Teil / Ganze", powerQuery: "Standard → Prozent / Prozent von", to: "/power-query/power-query-prozentrechnung" },
    ],
  },
  {
    heading: "Wissenschaftlich",
    rows: [
      { excel: "ABS", powerQuery: "Wissenschaftlich → Absoluter Wert", to: "/power-query/power-query-abs-funktion" },
      { excel: "POTENZ / EXP", powerQuery: "Wissenschaftlich → Potenz / Exponent", to: "/power-query/power-query-potenz-und-exp-funktion" },
      { excel: "WURZEL", powerQuery: "Wissenschaftlich → Quadratwurzel", to: "/power-query/power-query-wurzel" },
      { excel: "LOG", powerQuery: "Wissenschaftlich → Logarithmus", to: "/power-query/power-query-log-funktion" },
      { excel: "FAKULTÄT", powerQuery: "Wissenschaftlich → Fakultät", to: "/power-query/power-query-fakultaet" },
    ],
  },
  {
    heading: "Runden",
    rows: [
      { excel: "AUFRUNDEN / ABRUNDEN / RUNDEN", powerQuery: "Runden → Aufrunden / Abrunden / Runden", to: "/power-query/power-query-aufrunden-abrunden-und-runden" },
    ],
  },
  {
    heading: "Informationen",
    rows: [
      { excel: "ISTGERADE / ISTUNGERADE / VORZEICHEN", powerQuery: "Informationen → Gerade / Ungerade / Vorzeichen", to: "/power-query/power-query-istgerade-istungerade-und-vorzeichen" },
    ],
  },
  {
    heading: "Datum / Zeit",
    rows: [
      { excel: "JAHR(HEUTE()−Datum)  (Alter)", powerQuery: "Datum → Alter / frühestes & neuestes Datum", to: "/power-query/power-query-alter-fruehestes-und-neuestes-datum" },
      { excel: "JAHR / Jahresbeginn / Jahresende", powerQuery: "Datum → Jahr", to: "/power-query/power-query-datumsfunktionen-jahr" },
      { excel: "MONAT / Monatsbeginn / Monatsende", powerQuery: "Datum → Monat", to: "/power-query/power-query-datumsfunktionen-monat" },
      { excel: "TAG / Wochentag / Tag des Jahres", powerQuery: "Datum → Tag", to: "/power-query/power-query-datumsfunktionen-tag" },
      { excel: "KALENDERWOCHE / Quartal", powerQuery: "Datum → Kalenderwoche & Quartal", to: "/power-query/power-query-kalenderwoche-und-quartal-extrahieren" },
      { excel: "STUNDE / MINUTE / SEKUNDE", powerQuery: "Zeit → Stunde / Minute / Sekunde", to: "/power-query/power-query-stunde-minute-sekunde" },
    ],
  },
];
