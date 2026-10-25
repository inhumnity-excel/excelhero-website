import type { Article } from "./articles";

const IMG = "/images/spreadsheet-closeup.jpg";
const HUB = "/excel-funktionen";

function fn(
  slug: string,
  title: string,
  excerpt: string,
  _category: string,
  body: Article["body"],
): Article {
  return {
    slug,
    title,
    kicker: "Funktionen",
    category: "Funktionen",
    hubPath: HUB,
    path: `/funktionen/${slug}`,
    excerpt,
    image: IMG,
    readMinutes: 3,
    body,
  };
}

export const FUNKTIONEN_ARTICLES: Article[] = [
  fn(
    "excel-dbanzahl-funktion",
    "Excel DBANZAHL Funktion",
    "DBANZAHL (DCOUNT): Anzahl Zahlen in einer Liste mit Kriterien.",
    "Statistik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=DBANZAHL(Datenbank; Feld; Suchkriterien)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Anzahl Zahlen in einer Liste mit Kriterien. Englisch: DCOUNT."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=DBANZAHL(A1:D100;\"Umsatz\";F1:G2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-dbanzahl2-funktion",
    "Excel DBANZAHL2 Funktion",
    "DBANZAHL2 (DCOUNTA): Nichtleere mit Kriterien.",
    "Statistik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=DBANZAHL2(Datenbank; Feld; Suchkriterien)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Nichtleere mit Kriterien. Englisch: DCOUNTA."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=DBANZAHL2(A1:D100;\"Kunde\";F1:G2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-dbauszug-funktion",
    "Excel DBAUSZUG Funktion",
    "DBAUSZUG (DGET): Einzelner Treffer, sonst Fehler.",
    "Statistik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=DBAUSZUG(Datenbank; Feld; Suchkriterien)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Einzelner Treffer, sonst Fehler. Englisch: DGET."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=DBAUSZUG(A1:D100;\"Preis\";F1:G2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-dbmax-funktion",
    "Excel DBMAX Funktion",
    "DBMAX (DMAX): Max mit Kriterien.",
    "Statistik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=DBMAX(Datenbank; Feld; Suchkriterien)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Max mit Kriterien. Englisch: DMAX."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=DBMAX(A1:D100;\"Umsatz\";F1:G2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-dbmin-funktion",
    "Excel DBMIN Funktion",
    "DBMIN (DMIN): Min mit Kriterien.",
    "Statistik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=DBMIN(Datenbank; Feld; Suchkriterien)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Min mit Kriterien. Englisch: DMIN."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=DBMIN(A1:D100;\"Umsatz\";F1:G2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-dbmittelwert-funktion",
    "Excel DBMITTELWERT Funktion",
    "DBMITTELWERT (DAVERAGE): Mittel mit Kriterien.",
    "Statistik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=DBMITTELWERT(Datenbank; Feld; Suchkriterien)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Mittel mit Kriterien. Englisch: DAVERAGE."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=DBMITTELWERT(A1:D100;\"Umsatz\";F1:G2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-dbprodukt-funktion",
    "Excel DBPRODUKT Funktion",
    "DBPRODUKT (DPRODUCT): Produkt mit Kriterien.",
    "Statistik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=DBPRODUKT(Datenbank; Feld; Suchkriterien)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Produkt mit Kriterien. Englisch: DPRODUCT."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=DBPRODUKT(A1:D100;\"Faktor\";F1:G2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-dbsumme-funktion",
    "Excel DBSUMME Funktion",
    "DBSUMME (DSUM): Summe mit Kriterien.",
    "Statistik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=DBSUMME(Datenbank; Feld; Suchkriterien)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Summe mit Kriterien. Englisch: DSUM."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=DBSUMME(A1:D100;\"Umsatz\";F1:G2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-arbeitstag-funktion",
    "Excel ARBEITSTAG Funktion",
    "ARBEITSTAG (WORKDAY): Datum nach n Arbeitstagen.",
    "Datum",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ARBEITSTAG(Start; Tage; [Freie])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Datum nach n Arbeitstagen. Englisch: WORKDAY."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ARBEITSTAG(A2;10;Feiertage)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-arbeitstag-intl-funktion",
    "Excel ARBEITSTAG.INTL Funktion",
    "ARBEITSTAG.INTL (WORKDAY.INTL): Arbeitstag mit eigenem Wochenende.",
    "Datum",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ARBEITSTAG.INTL(Start; Tage; [Wochenende]; [Freie])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Arbeitstag mit eigenem Wochenende. Englisch: WORKDAY.INTL."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ARBEITSTAG.INTL(A2;10;11)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-brteiljahre-funktion",
    "Excel BRTEILJAHRE Funktion",
    "BRTEILJAHRE (YEARFRAC): Jahresbruch.",
    "Datum",
    [
      {
        heading: "Syntax",
        paragraphs: ["=BRTEILJAHRE(Start; Ende; [Basis])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Jahresbruch. Englisch: YEARFRAC."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=BRTEILJAHRE(A2;B2;1)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-datedif-funktion",
    "Excel DATEDIF Funktion",
    "DATEDIF (DATEDIF): Differenz Y/M/D.",
    "Datum",
    [
      {
        heading: "Syntax",
        paragraphs: ["=DATEDIF(Start; Ende; Einheit)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Differenz Y/M/D. Englisch: DATEDIF."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=DATEDIF(A2;HEUTE();\"Y\")"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-datum-funktion",
    "Excel DATUM Funktion",
    "DATUM (DATE): Datum aus Teilen.",
    "Datum",
    [
      {
        heading: "Syntax",
        paragraphs: ["=DATUM(Jahr; Monat; Tag)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Datum aus Teilen. Englisch: DATE."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=DATUM(2026;3;15)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-datwert-funktion",
    "Excel DATWERT Funktion",
    "DATWERT (DATEVALUE): Text zu Datum.",
    "Datum",
    [
      {
        heading: "Syntax",
        paragraphs: ["=DATWERT(Datumstext)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Text zu Datum. Englisch: DATEVALUE."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=DATWERT(\"15.03.2026\")"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-edatum-funktion",
    "Excel EDATUM Funktion",
    "EDATUM (EDATE): Datum ± Monate.",
    "Datum",
    [
      {
        heading: "Syntax",
        paragraphs: ["=EDATUM(Start; Monate)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Datum ± Monate. Englisch: EDATE."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=EDATUM(A2;12)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-heute-funktion",
    "Excel HEUTE Funktion",
    "HEUTE (TODAY): Aktuelles Datum. Volatil.",
    "Datum",
    [
      {
        heading: "Syntax",
        paragraphs: ["=HEUTE()"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Aktuelles Datum. Volatil. Englisch: TODAY."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=HEUTE()"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-isokalenderwoche-funktion",
    "Excel ISOKALENDERWOCHE Funktion",
    "ISOKALENDERWOCHE (ISOWEEKNUM): ISO-Woche.",
    "Datum",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ISOKALENDERWOCHE(Datum)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["ISO-Woche. Englisch: ISOWEEKNUM."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ISOKALENDERWOCHE(A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-jahr-funktion",
    "Excel JAHR Funktion",
    "JAHR (YEAR): Jahreszahl.",
    "Datum",
    [
      {
        heading: "Syntax",
        paragraphs: ["=JAHR(Datum)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Jahreszahl. Englisch: YEAR."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=JAHR(A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-jetzt-funktion",
    "Excel JETZT Funktion",
    "JETZT (NOW): Datum + Uhrzeit. Volatil.",
    "Datum",
    [
      {
        heading: "Syntax",
        paragraphs: ["=JETZT()"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Datum + Uhrzeit. Volatil. Englisch: NOW."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=JETZT()"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-kalenderwoche-funktion",
    "Excel KALENDERWOCHE Funktion",
    "KALENDERWOCHE (WEEKNUM): Kalenderwoche.",
    "Datum",
    [
      {
        heading: "Syntax",
        paragraphs: ["=KALENDERWOCHE(Datum; [Typ])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Kalenderwoche. Englisch: WEEKNUM."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=KALENDERWOCHE(A2;21)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-minute-funktion",
    "Excel MINUTE Funktion",
    "MINUTE (MINUTE): Minute 0–59.",
    "Datum",
    [
      {
        heading: "Syntax",
        paragraphs: ["=MINUTE(Zeit)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Minute 0–59. Englisch: MINUTE."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=MINUTE(A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-monat-funktion",
    "Excel MONAT Funktion",
    "MONAT (MONTH): Monat 1–12.",
    "Datum",
    [
      {
        heading: "Syntax",
        paragraphs: ["=MONAT(Datum)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Monat 1–12. Englisch: MONTH."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=MONAT(A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-monatsende-funktion",
    "Excel MONATSENDE Funktion",
    "MONATSENDE (EOMONTH): Ultimo.",
    "Datum",
    [
      {
        heading: "Syntax",
        paragraphs: ["=MONATSENDE(Start; Monate)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Ultimo. Englisch: EOMONTH."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=MONATSENDE(A2;0)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-nettoarbeitstage-funktion",
    "Excel NETTOARBEITSTAGE Funktion",
    "NETTOARBEITSTAGE (NETWORKDAYS): Arbeitstage dazwischen.",
    "Datum",
    [
      {
        heading: "Syntax",
        paragraphs: ["=NETTOARBEITSTAGE(Start; Ende; [Freie])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Arbeitstage dazwischen. Englisch: NETWORKDAYS."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=NETTOARBEITSTAGE(A2;B2;Feiertage)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-nettoarbeitstage-intl-funktion",
    "Excel NETTOARBEITSTAGE.INTL Funktion",
    "NETTOARBEITSTAGE.INTL (NETWORKDAYS.INTL): Arbeitstage mit eigenem Wochenende.",
    "Datum",
    [
      {
        heading: "Syntax",
        paragraphs: ["=NETTOARBEITSTAGE.INTL(Start; Ende; [Wochenende]; [Freie])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Arbeitstage mit eigenem Wochenende. Englisch: NETWORKDAYS.INTL."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=NETTOARBEITSTAGE.INTL(A2;B2;\"0000011\")"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-sekunde-funktion",
    "Excel SEKUNDE Funktion",
    "SEKUNDE (SECOND): Sekunde 0–59.",
    "Datum",
    [
      {
        heading: "Syntax",
        paragraphs: ["=SEKUNDE(Zeit)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Sekunde 0–59. Englisch: SECOND."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=SEKUNDE(A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-stunde-funktion",
    "Excel STUNDE Funktion",
    "STUNDE (HOUR): Stunde 0–23.",
    "Datum",
    [
      {
        heading: "Syntax",
        paragraphs: ["=STUNDE(Zeit)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Stunde 0–23. Englisch: HOUR."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=STUNDE(A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-tag-funktion",
    "Excel TAG Funktion",
    "TAG (DAY): Tag im Monat.",
    "Datum",
    [
      {
        heading: "Syntax",
        paragraphs: ["=TAG(Datum)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Tag im Monat. Englisch: DAY."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=TAG(A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-tage-funktion",
    "Excel TAGE Funktion",
    "TAGE (DAYS): Tage dazwischen.",
    "Datum",
    [
      {
        heading: "Syntax",
        paragraphs: ["=TAGE(Ende; Start)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Tage dazwischen. Englisch: DAYS."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=TAGE(B2;A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-tage360-funktion",
    "Excel TAGE360 Funktion",
    "TAGE360 (DAYS360): 360-Tage-Jahr.",
    "Datum",
    [
      {
        heading: "Syntax",
        paragraphs: ["=TAGE360(Start; Ende; [Methode])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["360-Tage-Jahr. Englisch: DAYS360."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=TAGE360(A2;B2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-wochentag-funktion",
    "Excel WOCHENTAG Funktion",
    "WOCHENTAG (WEEKDAY): Wochentag als Zahl.",
    "Datum",
    [
      {
        heading: "Syntax",
        paragraphs: ["=WOCHENTAG(Datum; [Typ])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Wochentag als Zahl. Englisch: WEEKDAY."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=WOCHENTAG(A2;2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-zeit-funktion",
    "Excel ZEIT Funktion",
    "ZEIT (TIME): Uhrzeit aus Teilen.",
    "Datum",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ZEIT(Stunde; Minute; Sekunde)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Uhrzeit aus Teilen. Englisch: TIME."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ZEIT(8;30;0)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-zeitwert-funktion",
    "Excel ZEITWERT Funktion",
    "ZEITWERT (TIMEVALUE): Text zu Zeit.",
    "Datum",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ZEITWERT(Zeittext)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Text zu Zeit. Englisch: TIMEVALUE."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ZEITWERT(\"08:30\")"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-boersenhistorie-funktion",
    "Excel BÖRSENHISTORIE Funktion",
    "BÖRSENHISTORIE (STOCKHISTORY): Kursreihe (365).",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=BÖRSENHISTORIE(Wertpapier; Start; [Ende]; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Kursreihe (365). Englisch: STOCKHISTORY."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=BÖRSENHISTORIE(\"MSFT\";HEUTE()-30;HEUTE())"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-bw-funktion",
    "Excel BW Funktion",
    "BW (PV): Barwert.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=BW(Zins; Zzr; Rmz; [Zw]; [F])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Barwert. Englisch: PV."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=BW(0,05/12;60;-200)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-kapz-funktion",
    "Excel KAPZ Funktion",
    "KAPZ (PPMT): Tilgungsanteil.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=KAPZ(Zins; Zr; Zzr; Bw; [Zw]; [F])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Tilgungsanteil. Englisch: PPMT."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=KAPZ(0,04/12;1;360;-300000)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-kumkapital-funktion",
    "Excel KUMKAPITAL Funktion",
    "KUMKAPITAL (CUMPRINC): Kumulierte Tilgung.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=KUMKAPITAL(Zins; Zzr; Bw; Zeitraum_Start; Zeitraum_Ende; F)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Kumulierte Tilgung. Englisch: CUMPRINC."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=KUMKAPITAL(0,04/12;360;300000;1;12;0)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-kumzinsz-funktion",
    "Excel KUMZINSZ Funktion",
    "KUMZINSZ (CUMIPMT): Kumulierte Zinsen.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=KUMZINSZ(Zins; Zzr; Bw; Zeitraum_Start; Zeitraum_Ende; F)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Kumulierte Zinsen. Englisch: CUMIPMT."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=KUMZINSZ(0,04/12;360;300000;1;12;0)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-rmz-funktion",
    "Excel RMZ Funktion",
    "RMZ (PMT): Annuitätenrate.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=RMZ(Zins; Zzr; Bw; [Zw]; [F])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Annuitätenrate. Englisch: PMT."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=RMZ(0,04/12;360;-300000)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-zins-funktion",
    "Excel ZINS Funktion",
    "ZINS (RATE): Zinssatz.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ZINS(Zzr; Rmz; Bw; [Zw]; [F]; [Schätzung])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Zinssatz. Englisch: RATE."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ZINS(12;-100;1000)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-zinsz-funktion",
    "Excel ZINSZ Funktion",
    "ZINSZ (IPMT): Zinsanteil einer Periode.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ZINSZ(Zins; Zr; Zzr; Bw; [Zw]; [F])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Zinsanteil einer Periode. Englisch: IPMT."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ZINSZ(0,04/12;1;360;-300000)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-zw-funktion",
    "Excel ZW Funktion",
    "ZW (FV): Zukunftswert.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ZW(Zins; Zzr; Rmz; [Bw]; [F])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Zukunftswert. Englisch: FV."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ZW(0,05/12;60;-200)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-zzr-funktion",
    "Excel ZZR Funktion",
    "ZZR (NPER): Anzahl Perioden.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ZZR(Zins; Rmz; Bw; [Zw]; [F])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Anzahl Perioden. Englisch: NPER."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ZZR(0,05/12;-200;-1000)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-blatt-funktion",
    "Excel BLATT Funktion",
    "BLATT (SHEET): Blattnummer.",
    "Info",
    [
      {
        heading: "Syntax",
        paragraphs: ["=BLATT([Wert])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Blattnummer. Englisch: SHEET."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=BLATT()"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-blaetter-funktion",
    "Excel BLÄTTER Funktion",
    "BLÄTTER (SHEETS): Anzahl Blätter.",
    "Info",
    [
      {
        heading: "Syntax",
        paragraphs: ["=BLÄTTER([Bezug])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Anzahl Blätter. Englisch: SHEETS."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=BLÄTTER()"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-fehler-typ-funktion",
    "Excel FEHLER.TYP Funktion",
    "FEHLER.TYP (ERROR.TYPE): Nummer des Fehlers.",
    "Info",
    [
      {
        heading: "Syntax",
        paragraphs: ["=FEHLER.TYP(Fehler)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Nummer des Fehlers. Englisch: ERROR.TYPE."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=FEHLER.TYP(A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-info-funktion",
    "Excel INFO Funktion",
    "INFO (INFO): Umgebung (selten, oft gesperrt).",
    "Info",
    [
      {
        heading: "Syntax",
        paragraphs: ["=INFO(Typ)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Umgebung (selten, oft gesperrt). Englisch: INFO."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=INFO(\"osversion\")"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-istbezug-funktion",
    "Excel ISTBEZUG Funktion",
    "ISTBEZUG (ISREF): Gültiger Bezug?",
    "Info",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ISTBEZUG(Wert)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Gültiger Bezug? Englisch: ISREF."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ISTBEZUG(INDIREKT(A2))"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-istfehl-funktion",
    "Excel ISTFEHL Funktion",
    "ISTFEHL (ISERR): Fehler außer #NV?",
    "Info",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ISTFEHL(Wert)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Fehler außer #NV? Englisch: ISERR."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ISTFEHL(A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-istfehler-funktion",
    "Excel ISTFEHLER Funktion",
    "ISTFEHLER (ISERROR): Irgendein Fehler?",
    "Info",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ISTFEHLER(Wert)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Irgendein Fehler? Englisch: ISERROR."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=WENN(ISTFEHLER(A2);\"x\";A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-istformel-funktion",
    "Excel ISTFORMEL Funktion",
    "ISTFORMEL (ISFORMULA): Formel in der Zelle?",
    "Info",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ISTFORMEL(Bezug)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Formel in der Zelle? Englisch: ISFORMULA."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ISTFORMEL(A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-istgerade-funktion",
    "Excel ISTGERADE Funktion",
    "ISTGERADE (ISEVEN): Gerade?",
    "Info",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ISTGERADE(Zahl)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Gerade? Englisch: ISEVEN."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ISTGERADE(A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-istktext-funktion",
    "Excel ISTKTEXT Funktion",
    "ISTKTEXT (ISNONTEXT): Kein Text?",
    "Info",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ISTKTEXT(Wert)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Kein Text? Englisch: ISNONTEXT."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ISTKTEXT(A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-istleer-funktion",
    "Excel ISTLEER Funktion",
    "ISTLEER (ISBLANK): Zelle leer?",
    "Info",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ISTLEER(Wert)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Zelle leer? Englisch: ISBLANK."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=WENN(ISTLEER(A2);\"\";A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-istlog-funktion",
    "Excel ISTLOG Funktion",
    "ISTLOG (ISLOGICAL): WAHR/FALSCH?",
    "Info",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ISTLOG(Wert)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["WAHR/FALSCH? Englisch: ISLOGICAL."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ISTLOG(A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-istnv-funktion",
    "Excel ISTNV Funktion",
    "ISTNV (ISNA): #NV?",
    "Info",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ISTNV(Wert)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["#NV? Englisch: ISNA."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ISTNV(SVERWEIS(A2;M;2;0))"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-isttext-funktion",
    "Excel ISTTEXT Funktion",
    "ISTTEXT (ISTEXT): Text?",
    "Info",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ISTTEXT(Wert)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Text? Englisch: ISTEXT."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ISTTEXT(A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-istungerade-funktion",
    "Excel ISTUNGERADE Funktion",
    "ISTUNGERADE (ISODD): Ungerade?",
    "Info",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ISTUNGERADE(Zahl)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Ungerade? Englisch: ISODD."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ISTUNGERADE(A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-istzahl-funktion",
    "Excel ISTZAHL Funktion",
    "ISTZAHL (ISNUMBER): Zahl?",
    "Info",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ISTZAHL(Wert)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Zahl? Englisch: ISNUMBER."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ISTZAHL(A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-n-funktion",
    "Excel N Funktion",
    "N (N): Wert als Zahl.",
    "Info",
    [
      {
        heading: "Syntax",
        paragraphs: ["=N(Wert)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Wert als Zahl. Englisch: N."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=N(A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-nv-funktion",
    "Excel NV Funktion",
    "NV (NA): Erzeugt #NV.",
    "Info",
    [
      {
        heading: "Syntax",
        paragraphs: ["=NV()"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Erzeugt #NV. Englisch: NA."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=NV()"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-typ-funktion",
    "Excel TYP Funktion",
    "TYP (TYPE): 1 Zahl, 2 Text, 4 Logik, 16 Fehler.",
    "Info",
    [
      {
        heading: "Syntax",
        paragraphs: ["=TYP(Wert)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["1 Zahl, 2 Text, 4 Logik, 16 Fehler. Englisch: TYPE."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=TYP(A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-wurdeausgelassen-funktion",
    "Excel WURDEAUSGELASSEN Funktion",
    "WURDEAUSGELASSEN (ISOMITTED): LAMBDA-Argument fehlt?",
    "Info",
    [
      {
        heading: "Syntax",
        paragraphs: ["=WURDEAUSGELASSEN(Argument)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["LAMBDA-Argument fehlt? Englisch: ISOMITTED."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=LAMBDA(x;WENN(WURDEAUSGELASSEN(x);0;x))()"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-zelle-funktion",
    "Excel ZELLE Funktion",
    "ZELLE (CELL): Format/Adresse/Datei.",
    "Info",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ZELLE(Infotyp; [Bezug])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Format/Adresse/Datei. Englisch: CELL."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ZELLE(\"dateiname\";A1)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-ersterwert-funktion",
    "Excel ERSTERWERT Funktion",
    "ERSTERWERT (SWITCH): Mapping statt WENNS.",
    "Logik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ERSTERWERT(Ausdruck; Wert1; Ergebnis1; …; [Sonst])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Mapping statt WENNS. Englisch: SWITCH."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ERSTERWERT(A2;1;\"A\";2;\"B\";\"?\")"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-falsch-funktion",
    "Excel FALSCH Funktion",
    "FALSCH (FALSE): Der Wahrheitswert FALSCH.",
    "Logik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=FALSCH()"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Der Wahrheitswert FALSCH. Englisch: FALSE."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=FALSCH()"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-lambda-funktion",
    "Excel LAMBDA Funktion",
    "LAMBDA (LAMBDA): Eigene Funktion.",
    "Logik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=LAMBDA(Param; …; Berechnung)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Eigene Funktion. Englisch: LAMBDA."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=LAMBDA(x;x*1,19)(A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-let-funktion",
    "Excel LET Funktion",
    "LET (LET): Namen in der Formel.",
    "Logik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=LET(Name1; Wert1; …; Berechnung)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Namen in der Formel. Englisch: LET."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=LET(n;A2;n*n)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-map-funktion",
    "Excel MAP Funktion",
    "MAP (MAP): Funktion auf jedes Element.",
    "Logik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=MAP(Array; LAMBDA)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Funktion auf jedes Element. Englisch: MAP."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=MAP(A2:A10;LAMBDA(x;x*2))"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-matrixerstellen-funktion",
    "Excel MATRIXERSTELLEN Funktion",
    "MATRIXERSTELLEN (MAKEARRAY): Array aus einer Formel.",
    "Logik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=MATRIXERSTELLEN(Zeilen; Spalten; LAMBDA)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Array aus einer Formel. Englisch: MAKEARRAY."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=MATRIXERSTELLEN(3;3;LAMBDA(r;c;r*c))"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-nachspalte-funktion",
    "Excel NACHSPALTE Funktion",
    "NACHSPALTE (BYCOL): LAMBDA je Spalte.",
    "Logik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=NACHSPALTE(Array; LAMBDA)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["LAMBDA je Spalte. Englisch: BYCOL."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=NACHSPALTE(A1:C10;LAMBDA(s;SUMME(s)))"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-nachzeile-funktion",
    "Excel NACHZEILE Funktion",
    "NACHZEILE (BYROW): LAMBDA je Zeile.",
    "Logik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=NACHZEILE(Array; LAMBDA)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["LAMBDA je Zeile. Englisch: BYROW."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=NACHZEILE(A2:C10;LAMBDA(z;SUMME(z)))"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-nicht-funktion",
    "Excel NICHT Funktion",
    "NICHT (NOT): Umkehren.",
    "Logik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=NICHT(Wahrheitswert)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Umkehren. Englisch: NOT."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=WENN(NICHT(ISTLEER(A2));A2;\"\")"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-oder-funktion",
    "Excel ODER Funktion",
    "ODER (OR): Mindestens eine wahr.",
    "Logik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ODER(W1; W2; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Mindestens eine wahr. Englisch: OR."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=WENN(ODER(A2=\"A\";A2=\"B\");\"passt\";\"\")"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-reduce-funktion",
    "Excel REDUCE Funktion",
    "REDUCE (REDUCE): Akkumulieren.",
    "Logik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=REDUCE(Start; Array; LAMBDA)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Akkumulieren. Englisch: REDUCE."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=REDUCE(0;A2:A10;LAMBDA(a;b;a+b))"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-scan-funktion",
    "Excel SCAN Funktion",
    "SCAN (SCAN): Laufender Akkumulator.",
    "Logik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=SCAN(Start; Array; LAMBDA)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Laufender Akkumulator. Englisch: SCAN."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=SCAN(0;A2:A10;LAMBDA(a;b;a+b))"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-spaltenumbruch-funktion",
    "Excel SPALTENUMBRUCH Funktion",
    "SPALTENUMBRUCH (WRAPCOLS): Vektor in Spalten wickeln.",
    "Logik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=SPALTENUMBRUCH(Vektor; Anzahl; [Auffüllen])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Vektor in Spalten wickeln. Englisch: WRAPCOLS."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=SPALTENUMBRUCH(A1:A12;3)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-und-funktion",
    "Excel UND Funktion",
    "UND (AND): Alle wahr.",
    "Logik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=UND(W1; W2; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Alle wahr. Englisch: AND."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=WENN(UND(A2>0;B2=\"ja\");\"ok\";\"\")"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-wahr-funktion",
    "Excel WAHR Funktion",
    "WAHR (TRUE): Der Wahrheitswert WAHR.",
    "Logik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=WAHR()"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Der Wahrheitswert WAHR. Englisch: TRUE."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=WAHR()"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-wenn-funktion",
    "Excel WENN Funktion",
    "WENN (IF): Verzweigung.",
    "Logik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=WENN(Prüfung; Dann; Sonst)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Verzweigung. Englisch: IF."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=WENN(A2>0;\"ok\";\"nein\")"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-wennfehler-funktion",
    "Excel WENNFEHLER Funktion",
    "WENNFEHLER (IFERROR): Fängt alle Fehler.",
    "Logik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=WENNFEHLER(Wert; Ersatz)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Fängt alle Fehler. Englisch: IFERROR."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=WENNFEHLER(SVERWEIS(A2;M;2;0);\"\")"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-wennnv-funktion",
    "Excel WENNNV Funktion",
    "WENNNV (IFNA): Nur #NV.",
    "Logik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=WENNNV(Wert; Ersatz)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Nur #NV. Englisch: IFNA."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=WENNNV(XVERWEIS(A2;K;R);\"fehlt\")"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-wenns-funktion",
    "Excel WENNS Funktion",
    "WENNS (IFS): Mehrere Bedingungen.",
    "Logik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=WENNS(Prüfung1; Wert1; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Mehrere Bedingungen. Englisch: IFS."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=WENNS(A2<0;\"neg\";A2=0;\"null\";WAHR;\"pos\")"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-xoder-funktion",
    "Excel XODER Funktion",
    "XODER (XOR): Ungerade Anzahl wahr.",
    "Logik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=XODER(W1; W2; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Ungerade Anzahl wahr. Englisch: XOR."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=XODER(A2=\"ja\";B2=\"ja\")"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-zeilenumbruch-funktion",
    "Excel ZEILENUMBRUCH Funktion",
    "ZEILENUMBRUCH (WRAPROWS): Vektor in Zeilen wickeln.",
    "Logik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ZEILENUMBRUCH(Vektor; Anzahl; [Auffüllen])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Vektor in Zeilen wickeln. Englisch: WRAPROWS."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ZEILENUMBRUCH(A1:A12;4)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-abrunden-funktion",
    "Excel ABRUNDEN Funktion",
    "ABRUNDEN (ROUNDDOWN): Richtung 0.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ABRUNDEN(Zahl; Stellen)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Richtung 0. Englisch: ROUNDDOWN."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ABRUNDEN(A2;0)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-abs-funktion",
    "Excel ABS Funktion",
    "ABS (ABS): Betrag.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ABS(Zahl)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Betrag. Englisch: ABS."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ABS(A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-aggregat-funktion",
    "Excel AGGREGAT Funktion",
    "AGGREGAT (AGGREGATE): Wie TEILERGEBNIS plus Fehler ignorieren.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=AGGREGAT(Funktion; Optionen; Bezug)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Wie TEILERGEBNIS plus Fehler ignorieren. Englisch: AGGREGATE."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=AGGREGAT(9;6;B2:B100)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-arabisch-funktion",
    "Excel ARABISCH Funktion",
    "ARABISCH (ARABIC): Römisch → Zahl.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ARABISCH(Text)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Römisch → Zahl. Englisch: ARABIC."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ARABISCH(\"XIV\")"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-aufrunden-funktion",
    "Excel AUFRUNDEN Funktion",
    "AUFRUNDEN (ROUNDUP): Weg von 0.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=AUFRUNDEN(Zahl; Stellen)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Weg von 0. Englisch: ROUNDUP."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=AUFRUNDEN(A2;0)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-bogenmass-funktion",
    "Excel BOGENMASS Funktion",
    "BOGENMASS (RADIANS): Grad → Bogen.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=BOGENMASS(Winkel)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Grad → Bogen. Englisch: RADIANS."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=BOGENMASS(180)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-cos-funktion",
    "Excel COS Funktion",
    "COS (COS): Kosinus.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=COS(Zahl)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Kosinus. Englisch: COS."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=COS(BOGENMASS(60))"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-exp-funktion",
    "Excel EXP Funktion",
    "EXP (EXP): e^x.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=EXP(Zahl)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["e^x. Englisch: EXP."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=EXP(A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-fakultaet-funktion",
    "Excel FAKULTÄT Funktion",
    "FAKULTÄT (FACT): n!.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=FAKULTÄT(Zahl)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["n!. Englisch: FACT."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=FAKULTÄT(5)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-ganzzahl-funktion",
    "Excel GANZZAHL Funktion",
    "GANZZAHL (INT): Nächste ganze Zahl ≤ Zahl.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=GANZZAHL(Zahl)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Nächste ganze Zahl ≤ Zahl. Englisch: INT."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=GANZZAHL(A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-gerade-funktion",
    "Excel GERADE Funktion",
    "GERADE (EVEN): Nächste gerade Zahl weg von 0.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=GERADE(Zahl)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Nächste gerade Zahl weg von 0. Englisch: EVEN."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=GERADE(1,5)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-ggt-funktion",
    "Excel GGT Funktion",
    "GGT (GCD): Größter gemeinsamer Teiler.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=GGT(Zahl1; Zahl2; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Größter gemeinsamer Teiler. Englisch: GCD."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=GGT(12;18)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-grad-funktion",
    "Excel GRAD Funktion",
    "GRAD (DEGREES): Bogen → Grad.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=GRAD(Winkel)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Bogen → Grad. Englisch: DEGREES."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=GRAD(PI())"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-kgv-funktion",
    "Excel KGV Funktion",
    "KGV (LCM): Kleinstes gemeinsames Vielfaches.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=KGV(Zahl1; Zahl2; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Kleinstes gemeinsames Vielfaches. Englisch: LCM."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=KGV(4;6)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-kuerzen-funktion",
    "Excel KÜRZEN Funktion",
    "KÜRZEN (TRUNC): Nachkommastellen abschneiden.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=KÜRZEN(Zahl; [Stellen])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Nachkommastellen abschneiden. Englisch: TRUNC."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=KÜRZEN(A2;2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-log-funktion",
    "Excel LOG Funktion",
    "LOG (LOG): Logarithmus.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=LOG(Zahl; [Basis])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Logarithmus. Englisch: LOG."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=LOG(A2;10)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-log10-funktion",
    "Excel LOG10 Funktion",
    "LOG10 (LOG10): Log 10.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=LOG10(Zahl)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Log 10. Englisch: LOG10."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=LOG10(A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-obergrenze-funktion",
    "Excel OBERGRENZE Funktion",
    "OBERGRENZE (CEILING): Aufrunden auf Vielfaches.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=OBERGRENZE(Zahl; Bedeutung)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Aufrunden auf Vielfaches. Englisch: CEILING."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=OBERGRENZE(A2;0,1)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-pi-funktion",
    "Excel PI Funktion",
    "PI (PI): Kreiszahl.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=PI()"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Kreiszahl. Englisch: PI."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=PI()"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-potenz-funktion",
    "Excel POTENZ Funktion",
    "POTENZ (POWER): Hoch.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=POTENZ(Zahl; Potenz)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Hoch. Englisch: POWER."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=POTENZ(A2;2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-rest-funktion",
    "Excel REST Funktion",
    "REST (MOD): Modulo.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=REST(Zahl; Divisor)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Modulo. Englisch: MOD."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=REST(ZEILE();2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-roemisch-funktion",
    "Excel RÖMISCH Funktion",
    "RÖMISCH (ROMAN): Zahl → römisch.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=RÖMISCH(Zahl; [Form])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Zahl → römisch. Englisch: ROMAN."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=RÖMISCH(14)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-runden-funktion",
    "Excel RUNDEN Funktion",
    "RUNDEN (ROUND): Kaufmännisch runden.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=RUNDEN(Zahl; Stellen)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Kaufmännisch runden. Englisch: ROUND."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=RUNDEN(A2;2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-sequenz-funktion",
    "Excel SEQUENZ Funktion",
    "SEQUENZ (SEQUENCE): Zahlenfolge als Array.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=SEQUENZ(Zeilen; [Spalten]; [Start]; [Schritt])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Zahlenfolge als Array. Englisch: SEQUENCE."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=SEQUENZ(10)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-sin-funktion",
    "Excel SIN Funktion",
    "SIN (SIN): Sinus (Bogenmaß).",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=SIN(Zahl)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Sinus (Bogenmaß). Englisch: SIN."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=SIN(BOGENMASS(30))"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-summe-funktion",
    "Excel SUMME Funktion",
    "SUMME (SUM): Addieren.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=SUMME(Zahl1; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Addieren. Englisch: SUM."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=SUMME(B2:B20)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-summenprodukt-funktion",
    "Excel SUMMENPRODUKT Funktion",
    "SUMMENPRODUKT (SUMPRODUCT): Elementweise mal, dann Summe.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=SUMMENPRODUKT(Array1; Array2; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Elementweise mal, dann Summe. Englisch: SUMPRODUCT."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=SUMMENPRODUKT((A2:A100=\"Nord\")*(C2:C100))"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-summewenn-funktion",
    "Excel SUMMEWENN Funktion",
    "SUMMEWENN (SUMIF): Summe mit einer Bedingung.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=SUMMEWENN(Bereich; Kriterien; [Summe_Bereich])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Summe mit einer Bedingung. Englisch: SUMIF."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=SUMMEWENN(A:A;\"Nord\";B:B)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-summewenns-funktion",
    "Excel SUMMEWENNS Funktion",
    "SUMMEWENNS (SUMIFS): Summe mit mehreren Bedingungen.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=SUMMEWENNS(Summe_Bereich; K_Bereich1; K1; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Summe mit mehreren Bedingungen. Englisch: SUMIFS."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=SUMMEWENNS(C:C;A:A;\"Nord\";B:B;\">0\")"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-tan-funktion",
    "Excel TAN Funktion",
    "TAN (TAN): Tangens.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=TAN(Zahl)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Tangens. Englisch: TAN."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=TAN(BOGENMASS(45))"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-teilergebnis-funktion",
    "Excel TEILERGEBNIS Funktion",
    "TEILERGEBNIS (SUBTOTAL): Summe/Anzahl die Filter achtet.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=TEILERGEBNIS(Funktion; Bezug1; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Summe/Anzahl die Filter achtet. Englisch: SUBTOTAL."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=TEILERGEBNIS(9;B2:B100)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-ungerade-funktion",
    "Excel UNGERADE Funktion",
    "UNGERADE (ODD): Nächste ungerade Zahl.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=UNGERADE(Zahl)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Nächste ungerade Zahl. Englisch: ODD."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=UNGERADE(2,1)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-untergrenze-funktion",
    "Excel UNTERGRENZE Funktion",
    "UNTERGRENZE (FLOOR): Abrunden auf Vielfaches.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=UNTERGRENZE(Zahl; Bedeutung)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Abrunden auf Vielfaches. Englisch: FLOOR."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=UNTERGRENZE(A2;0,1)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-vorzeichen-funktion",
    "Excel VORZEICHEN Funktion",
    "VORZEICHEN (SIGN): -1, 0, 1.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=VORZEICHEN(Zahl)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["-1, 0, 1. Englisch: SIGN."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=VORZEICHEN(A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-vrunden-funktion",
    "Excel VRUNDEN Funktion",
    "VRUNDEN (MROUND): Auf Vielfaches.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=VRUNDEN(Zahl; Vielfaches)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Auf Vielfaches. Englisch: MROUND."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=VRUNDEN(A2;0,05)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-wurzel-funktion",
    "Excel WURZEL Funktion",
    "WURZEL (SQRT): Quadratwurzel.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=WURZEL(Zahl)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Quadratwurzel. Englisch: SQRT."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=WURZEL(A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-zufallsbereich-funktion",
    "Excel ZUFALLSBEREICH Funktion",
    "ZUFALLSBEREICH (RANDBETWEEN): Zufallsganzzahl. Volatil.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ZUFALLSBEREICH(Unten; Oben)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Zufallsganzzahl. Volatil. Englisch: RANDBETWEEN."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ZUFALLSBEREICH(1;6)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-zufallsmatrix-funktion",
    "Excel ZUFALLSMATRIX Funktion",
    "ZUFALLSMATRIX (RANDARRAY): Zufallsarray.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ZUFALLSMATRIX([Zeilen]; [Spalten]; [Min]; [Max]; [Ganz])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Zufallsarray. Englisch: RANDARRAY."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ZUFALLSMATRIX(5;1;0;1;FALSCH)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-zufallszahl-funktion",
    "Excel ZUFALLSZAHL Funktion",
    "ZUFALLSZAHL (RAND): Zufall 0–1. Volatil.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ZUFALLSZAHL()"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Zufall 0–1. Volatil. Englisch: RAND."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ZUFALLSZAHL()"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-prozentvon-funktion",
    "Excel PROZENTVON Funktion",
    "PROZENTVON (PERCENTOF): Teil/Ganze.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=PROZENTVON(Teil; Ganze)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Teil/Ganze. Englisch: PERCENTOF."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=PROZENTVON(A2;SUMME(A:A))"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-bild-funktion",
    "Excel BILD Funktion",
    "BILD (IMAGE): Bild in der Zelle (365).",
    "Text",
    [
      {
        heading: "Syntax",
        paragraphs: ["=BILD(Quelle; [Alternativtext]; [Größe]; [Höhe]; [Breite])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Bild in der Zelle (365). Englisch: IMAGE."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=BILD(\"https://…/logo.png\")"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-anzahl-funktion",
    "Excel ANZAHL Funktion",
    "ANZAHL (COUNT): Zahlen zählen.",
    "Statistik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ANZAHL(Wert1; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Zahlen zählen. Englisch: COUNT."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ANZAHL(B2:B100)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-anzahl2-funktion",
    "Excel ANZAHL2 Funktion",
    "ANZAHL2 (COUNTA): Nichtleere zählen.",
    "Statistik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ANZAHL2(Wert1; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Nichtleere zählen. Englisch: COUNTA."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ANZAHL2(A2:A100)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-anzahlleerezellen-funktion",
    "Excel ANZAHLLEEREZELLEN Funktion",
    "ANZAHLLEEREZELLEN (COUNTBLANK): Leere zählen.",
    "Statistik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ANZAHLLEEREZELLEN(Bereich)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Leere zählen. Englisch: COUNTBLANK."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ANZAHLLEEREZELLEN(A2:A100)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-haeufigkeit-funktion",
    "Excel HÄUFIGKEIT Funktion",
    "HÄUFIGKEIT (FREQUENCY): Histogramm-Klassen.",
    "Statistik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=HÄUFIGKEIT(Daten; Klassen)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Histogramm-Klassen. Englisch: FREQUENCY."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=HÄUFIGKEIT(B2:B100;E2:E6)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-kgroesste-funktion",
    "Excel KGRÖSSTE Funktion",
    "KGRÖSSTE (LARGE): k-größter Wert.",
    "Statistik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=KGRÖSSTE(Matrix; k)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["k-größter Wert. Englisch: LARGE."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=KGRÖSSTE(B2:B100;3)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-kkleinste-funktion",
    "Excel KKLEINSTE Funktion",
    "KKLEINSTE (SMALL): k-kleinster Wert.",
    "Statistik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=KKLEINSTE(Matrix; k)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["k-kleinster Wert. Englisch: SMALL."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=KKLEINSTE(B2:B100;1)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-max-funktion",
    "Excel MAX Funktion",
    "MAX (MAX): Maximum.",
    "Statistik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=MAX(Zahl1; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Maximum. Englisch: MAX."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=MAX(B2:B100)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-maxa-funktion",
    "Excel MAXA Funktion",
    "MAXA (MAXA): Max inkl. WAHR=1.",
    "Statistik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=MAXA(Wert1; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Max inkl. WAHR=1. Englisch: MAXA."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=MAXA(B2:B100)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-maxwenns-funktion",
    "Excel MAXWENNS Funktion",
    "MAXWENNS (MAXIFS): Max unter Bedingungen.",
    "Statistik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=MAXWENNS(Max_Bereich; K_Bereich1; K1; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Max unter Bedingungen. Englisch: MAXIFS."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=MAXWENNS(C:C;A:A;\"Nord\")"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-median-funktion",
    "Excel MEDIAN Funktion",
    "MEDIAN (MEDIAN): Median.",
    "Statistik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=MEDIAN(Zahl1; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Median. Englisch: MEDIAN."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=MEDIAN(B2:B100)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-min-funktion",
    "Excel MIN Funktion",
    "MIN (MIN): Minimum.",
    "Statistik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=MIN(Zahl1; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Minimum. Englisch: MIN."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=MIN(B2:B100)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-mina-funktion",
    "Excel MINA Funktion",
    "MINA (MINA): Min inkl. Text/Wahrheit.",
    "Statistik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=MINA(Wert1; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Min inkl. Text/Wahrheit. Englisch: MINA."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=MINA(B2:B100)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-minwenns-funktion",
    "Excel MINWENNS Funktion",
    "MINWENNS (MINIFS): Min unter Bedingungen.",
    "Statistik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=MINWENNS(Min_Bereich; K_Bereich1; K1; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Min unter Bedingungen. Englisch: MINIFS."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=MINWENNS(C:C;A:A;\"Nord\")"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-mittelwert-funktion",
    "Excel MITTELWERT Funktion",
    "MITTELWERT (AVERAGE): Arithmetisches Mittel.",
    "Statistik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=MITTELWERT(Zahl1; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Arithmetisches Mittel. Englisch: AVERAGE."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=MITTELWERT(B2:B100)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-mittelwerta-funktion",
    "Excel MITTELWERTA Funktion",
    "MITTELWERTA (AVERAGEA): Mittel inkl. Text=0.",
    "Statistik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=MITTELWERTA(Wert1; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Mittel inkl. Text=0. Englisch: AVERAGEA."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=MITTELWERTA(B2:B100)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-mittelwertwenn-funktion",
    "Excel MITTELWERTWENN Funktion",
    "MITTELWERTWENN (AVERAGEIF): Mittel mit Bedingung.",
    "Statistik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=MITTELWERTWENN(Bereich; Kriterien; [Mittel_Bereich])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Mittel mit Bedingung. Englisch: AVERAGEIF."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=MITTELWERTWENN(A:A;\"Nord\";C:C)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-mittelwertwenns-funktion",
    "Excel MITTELWERTWENNS Funktion",
    "MITTELWERTWENNS (AVERAGEIFS): Mittel mit mehreren Bedingungen.",
    "Statistik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=MITTELWERTWENNS(Mittel_Bereich; K_Bereich1; K1; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Mittel mit mehreren Bedingungen. Englisch: AVERAGEIFS."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=MITTELWERTWENNS(C:C;A:A;\"Nord\";B:B;\">0\")"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-modalwert-funktion",
    "Excel MODALWERT Funktion",
    "MODALWERT (MODE): Häufigster Wert.",
    "Statistik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=MODALWERT(Zahl1; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Häufigster Wert. Englisch: MODE."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=MODALWERT(B2:B100)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-quartile-funktion",
    "Excel QUARTILE Funktion",
    "QUARTILE (QUARTILE): 0/1/2/3/4 Quartil.",
    "Statistik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=QUARTILE(Matrix; Quartil)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["0/1/2/3/4 Quartil. Englisch: QUARTILE."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=QUARTILE(B2:B100;3)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-rang-funktion",
    "Excel RANG Funktion",
    "RANG (RANK): Rang.",
    "Statistik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=RANG(Zahl; Bezug; [Reihenfolge])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Rang. Englisch: RANK."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=RANG(A2;$A$2:$A$100;0)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-stabw-funktion",
    "Excel STABW Funktion",
    "STABW (STDEV): Stichproben-Standardabweichung (alt).",
    "Statistik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=STABW(Zahl1; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Stichproben-Standardabweichung (alt). Englisch: STDEV."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=STABW(B2:B100)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-stabw-n-funktion",
    "Excel STABW.N Funktion",
    "STABW.N (STDEV.P): Grundgesamtheit.",
    "Statistik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=STABW.N(Zahl1; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Grundgesamtheit. Englisch: STDEV.P."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=STABW.N(B2:B100)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-stabw-s-funktion",
    "Excel STABW.S Funktion",
    "STABW.S (STDEV.S): Stichprobe n-1.",
    "Statistik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=STABW.S(Zahl1; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Stichprobe n-1. Englisch: STDEV.S."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=STABW.S(B2:B100)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-stabwn-funktion",
    "Excel STABWN Funktion",
    "STABWN (STDEVP): Alte Grundgesamtheits-STABW.",
    "Statistik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=STABWN(Zahl1; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Alte Grundgesamtheits-STABW. Englisch: STDEVP."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=STABWN(B2:B100)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-variationen-funktion",
    "Excel VARIATIONEN Funktion",
    "VARIATIONEN (PERMUT): Permutationen.",
    "Statistik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=VARIATIONEN(n; k)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Permutationen. Englisch: PERMUT."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=VARIATIONEN(10;3)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-zaehlenwenn-funktion",
    "Excel ZÄHLENWENN Funktion",
    "ZÄHLENWENN (COUNTIF): Zählen mit Bedingung.",
    "Statistik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ZÄHLENWENN(Bereich; Kriterien)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Zählen mit Bedingung. Englisch: COUNTIF."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ZÄHLENWENN(A:A;\"offen\")"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-zaehlenwenns-funktion",
    "Excel ZÄHLENWENNS Funktion",
    "ZÄHLENWENNS (COUNTIFS): Zählen mit mehreren Bedingungen.",
    "Statistik",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ZÄHLENWENNS(Bereich1; K1; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Zählen mit mehreren Bedingungen. Englisch: COUNTIFS."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ZÄHLENWENNS(A:A;\"Nord\";B:B;\">0\")"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-umwandeln-funktion",
    "Excel UMWANDELN Funktion",
    "UMWANDELN (CONVERT): Einheiten umrechnen.",
    "Mathe",
    [
      {
        heading: "Syntax",
        paragraphs: ["=UMWANDELN(Zahl; Von; Nach)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Einheiten umrechnen. Englisch: CONVERT."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=UMWANDELN(100;\"km\";\"mi\")"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-code-funktion",
    "Excel CODE Funktion",
    "CODE (CODE): Code des ersten Zeichens.",
    "Text",
    [
      {
        heading: "Syntax",
        paragraphs: ["=CODE(Text)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Code des ersten Zeichens. Englisch: CODE."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=CODE(A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-dm-funktion",
    "Excel DM Funktion",
    "DM (DOLLAR): Zahl als Währungstext.",
    "Text",
    [
      {
        heading: "Syntax",
        paragraphs: ["=DM(Zahl; [Dezimalen])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Zahl als Währungstext. Englisch: DOLLAR."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=DM(A2;2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-ersetzen-funktion",
    "Excel ERSETZEN Funktion",
    "ERSETZEN (REPLACE): Nach Position ersetzen.",
    "Text",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ERSETZEN(Alter_Text; Start; Anzahl; Neu)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Nach Position ersetzen. Englisch: REPLACE."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ERSETZEN(A2;1;3;\"ID-\")"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-finden-funktion",
    "Excel FINDEN Funktion",
    "FINDEN (FIND): Position, case-sensitiv.",
    "Text",
    [
      {
        heading: "Syntax",
        paragraphs: ["=FINDEN(Suchtext; Text; [Start])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Position, case-sensitiv. Englisch: FIND."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=FINDEN(\"@\";A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-glaetten-funktion",
    "Excel GLÄTTEN Funktion",
    "GLÄTTEN (TRIM): Leerzeichen glätten.",
    "Text",
    [
      {
        heading: "Syntax",
        paragraphs: ["=GLÄTTEN(Text)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Leerzeichen glätten. Englisch: TRIM."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=GLÄTTEN(A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-gross-funktion",
    "Excel GROSS Funktion",
    "GROSS (UPPER): Großbuchstaben.",
    "Text",
    [
      {
        heading: "Syntax",
        paragraphs: ["=GROSS(Text)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Großbuchstaben. Englisch: UPPER."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=GROSS(A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-gross2-funktion",
    "Excel GROSS2 Funktion",
    "GROSS2 (PROPER): Wortanfänge groß.",
    "Text",
    [
      {
        heading: "Syntax",
        paragraphs: ["=GROSS2(Text)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Wortanfänge groß. Englisch: PROPER."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=GROSS2(A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-identisch-funktion",
    "Excel IDENTISCH Funktion",
    "IDENTISCH (EXACT): Gleich inkl. Groß/Klein.",
    "Text",
    [
      {
        heading: "Syntax",
        paragraphs: ["=IDENTISCH(Text1; Text2)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Gleich inkl. Groß/Klein. Englisch: EXACT."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=IDENTISCH(A2;B2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-klein-funktion",
    "Excel KLEIN Funktion",
    "KLEIN (LOWER): Kleinbuchstaben.",
    "Text",
    [
      {
        heading: "Syntax",
        paragraphs: ["=KLEIN(Text)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Kleinbuchstaben. Englisch: LOWER."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=KLEIN(A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-laenge-funktion",
    "Excel LÄNGE Funktion",
    "LÄNGE (LEN): Zeichen zählen.",
    "Text",
    [
      {
        heading: "Syntax",
        paragraphs: ["=LÄNGE(Text)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Zeichen zählen. Englisch: LEN."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=LÄNGE(A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-links-funktion",
    "Excel LINKS Funktion",
    "LINKS (LEFT): Zeichen von links.",
    "Text",
    [
      {
        heading: "Syntax",
        paragraphs: ["=LINKS(Text; [Anzahl])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Zeichen von links. Englisch: LEFT."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=LINKS(A2;3)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-matrixzutext-funktion",
    "Excel MATRIXZUTEXT Funktion",
    "MATRIXZUTEXT (ARRAYTOTEXT): Array als Text.",
    "Text",
    [
      {
        heading: "Syntax",
        paragraphs: ["=MATRIXZUTEXT(Matrix; [Format])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Array als Text. Englisch: ARRAYTOTEXT."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=MATRIXZUTEXT(A2:C4)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-rechts-funktion",
    "Excel RECHTS Funktion",
    "RECHTS (RIGHT): Zeichen von rechts.",
    "Text",
    [
      {
        heading: "Syntax",
        paragraphs: ["=RECHTS(Text; [Anzahl])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Zeichen von rechts. Englisch: RIGHT."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=RECHTS(A2;4)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-saeubern-funktion",
    "Excel SÄUBERN Funktion",
    "SÄUBERN (CLEAN): Steuerzeichen weg.",
    "Text",
    [
      {
        heading: "Syntax",
        paragraphs: ["=SÄUBERN(Text)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Steuerzeichen weg. Englisch: CLEAN."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=SÄUBERN(A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-suchen-funktion",
    "Excel SUCHEN Funktion",
    "SUCHEN (SEARCH): Position, case-insensitive.",
    "Text",
    [
      {
        heading: "Syntax",
        paragraphs: ["=SUCHEN(Suchtext; Text; [Start])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Position, case-insensitive. Englisch: SEARCH."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=SUCHEN(\"gmbh\";A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-teil-funktion",
    "Excel TEIL Funktion",
    "TEIL (MID): Mitte.",
    "Text",
    [
      {
        heading: "Syntax",
        paragraphs: ["=TEIL(Text; Start; Anzahl)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Mitte. Englisch: MID."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=TEIL(A2;4;5)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-text-funktion",
    "Excel TEXT Funktion",
    "TEXT (TEXT): Zahl/Datum als Text.",
    "Text",
    [
      {
        heading: "Syntax",
        paragraphs: ["=TEXT(Wert; Format)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Zahl/Datum als Text. Englisch: TEXT."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=TEXT(A2;\"TT.MM.JJJJ\")"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-textnach-funktion",
    "Excel TEXTNACH Funktion",
    "TEXTNACH (TEXTAFTER): Alles nach dem Trenner.",
    "Text",
    [
      {
        heading: "Syntax",
        paragraphs: ["=TEXTNACH(Text; Trenner; [Instanz]; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Alles nach dem Trenner. Englisch: TEXTAFTER."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=TEXTNACH(A2;\"@\")"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-textkette-funktion",
    "Excel TEXTKETTE Funktion",
    "TEXTKETTE (TEXTJOIN): Viele Zellen joinen.",
    "Text",
    [
      {
        heading: "Syntax",
        paragraphs: ["=TEXTKETTE(Trenner; Leere_ignorieren; Text1; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Viele Zellen joinen. Englisch: TEXTJOIN."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=TEXTKETTE(\", \";WAHR;A2:A10)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-textteilen-funktion",
    "Excel TEXTTEILEN Funktion",
    "TEXTTEILEN (TEXTSPLIT): Text in Array splitten.",
    "Text",
    [
      {
        heading: "Syntax",
        paragraphs: ["=TEXTTEILEN(Text; Spaltentrenner; [Zeilentrenner]; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Text in Array splitten. Englisch: TEXTSPLIT."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=TEXTTEILEN(A2;\";\")"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-textverketten-funktion",
    "Excel TEXTVERKETTEN Funktion",
    "TEXTVERKETTEN (TEXTJOIN): Alias zu TEXTKETTE in manchen Builds.",
    "Text",
    [
      {
        heading: "Syntax",
        paragraphs: ["=TEXTVERKETTEN(Trenner; Leere_ignorieren; Text1; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Alias zu TEXTKETTE in manchen Builds. Englisch: TEXTJOIN."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=TEXTVERKETTEN(\" \";WAHR;A2;B2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-textvor-funktion",
    "Excel TEXTVOR Funktion",
    "TEXTVOR (TEXTBEFORE): Alles vor dem Trenner.",
    "Text",
    [
      {
        heading: "Syntax",
        paragraphs: ["=TEXTVOR(Text; Trenner; [Instanz]; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Alles vor dem Trenner. Englisch: TEXTBEFORE."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=TEXTVOR(A2;\"@\")"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-verketten-funktion",
    "Excel VERKETTEN Funktion",
    "VERKETTEN (CONCAT): Aneinanderhängen.",
    "Text",
    [
      {
        heading: "Syntax",
        paragraphs: ["=VERKETTEN(Text1; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Aneinanderhängen. Englisch: CONCAT."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=VERKETTEN(A2;\" \";B2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-wechseln-funktion",
    "Excel WECHSELN Funktion",
    "WECHSELN (SUBSTITUTE): Text ersetzen.",
    "Text",
    [
      {
        heading: "Syntax",
        paragraphs: ["=WECHSELN(Text; Alt; Neu; [Instanz])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Text ersetzen. Englisch: SUBSTITUTE."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=WECHSELN(A2;\"-\";\"\")"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-wert-funktion",
    "Excel WERT Funktion",
    "WERT (VALUE): Text zu Zahl.",
    "Text",
    [
      {
        heading: "Syntax",
        paragraphs: ["=WERT(Text)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Text zu Zahl. Englisch: VALUE."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=WERT(A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-wertzutext-funktion",
    "Excel WERTZUTEXT Funktion",
    "WERTZUTEXT (VALUETOTEXT): Wert als Text.",
    "Text",
    [
      {
        heading: "Syntax",
        paragraphs: ["=WERTZUTEXT(Wert; [Format])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Wert als Text. Englisch: VALUETOTEXT."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=WERTZUTEXT(A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-wiederholen-funktion",
    "Excel WIEDERHOLEN Funktion",
    "WIEDERHOLEN (REPT): Text n-mal.",
    "Text",
    [
      {
        heading: "Syntax",
        paragraphs: ["=WIEDERHOLEN(Text; Anzahl_Male)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Text n-mal. Englisch: REPT."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=WIEDERHOLEN(\"*\";A2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-zeichen-funktion",
    "Excel ZEICHEN Funktion",
    "ZEICHEN (CHAR): Zeichen aus Code.",
    "Text",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ZEICHEN(Zahl)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Zeichen aus Code. Englisch: CHAR."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ZEICHEN(10)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-regexersetzen-funktion",
    "Excel REGEXERSETZEN Funktion",
    "REGEXERSETZEN (REGEXREPLACE): Regex ersetzen (365).",
    "Text",
    [
      {
        heading: "Syntax",
        paragraphs: ["=REGEXERSETZEN(Text; Muster; Ersatz)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Regex ersetzen (365). Englisch: REGEXREPLACE."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=REGEXERSETZEN(A2;\"\\d+\";\"#\")"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-regexextrahieren-funktion",
    "Excel REGEXEXTRAHIEREN Funktion",
    "REGEXEXTRAHIEREN (REGEXEXTRACT): Regex extrahieren.",
    "Text",
    [
      {
        heading: "Syntax",
        paragraphs: ["=REGEXEXTRAHIEREN(Text; Muster)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Regex extrahieren. Englisch: REGEXEXTRACT."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=REGEXEXTRAHIEREN(A2;\"[A-Z]{3}\")"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-regextesten-funktion",
    "Excel REGEXTESTEN Funktion",
    "REGEXTESTEN (REGEXTEST): Regex trifft zu?",
    "Text",
    [
      {
        heading: "Syntax",
        paragraphs: ["=REGEXTESTEN(Text; Muster)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Regex trifft zu? Englisch: REGEXTEST."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=REGEXTESTEN(A2;\"^DE\")"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-adresse-funktion",
    "Excel ADRESSE Funktion",
    "ADRESSE (ADDRESS): Baut eine Adresse als Text.",
    "Suchen",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ADRESSE(Zeile; Spalte; [Abs]; [A1]; [Blatt])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Baut eine Adresse als Text. Englisch: ADDRESS."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ADRESSE(2;3;1;WAHR;\"Plan\")"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-bereich-verschieben-funktion",
    "Excel BEREICH.VERSCHIEBEN Funktion",
    "BEREICH.VERSCHIEBEN (OFFSET): Verschobener Bereich, volatil.",
    "Suchen",
    [
      {
        heading: "Syntax",
        paragraphs: ["=BEREICH.VERSCHIEBEN(Bezug; Zeilen; Spalten; [Höhe]; [Breite])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Verschobener Bereich, volatil. Englisch: OFFSET."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=SUMME(BEREICH.VERSCHIEBEN(A1;1;0;12;1))"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-bereiche-funktion",
    "Excel BEREICHE Funktion",
    "BEREICHE (AREAS): Anzahl der Teilbereiche.",
    "Suchen",
    [
      {
        heading: "Syntax",
        paragraphs: ["=BEREICHE(Bezug)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Anzahl der Teilbereiche. Englisch: AREAS."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=BEREICHE((A1:A3;C1:C3))"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-eindeutig-funktion",
    "Excel EINDEUTIG Funktion",
    "EINDEUTIG (UNIQUE): Eindeutige Werte als dynamisches Array.",
    "Suchen",
    [
      {
        heading: "Syntax",
        paragraphs: ["=EINDEUTIG(Matrix; [Nach_Spalte]; [Genau_einmal])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Eindeutige Werte als dynamisches Array. Englisch: UNIQUE."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=EINDEUTIG(A2:A100)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-erweitern-funktion",
    "Excel ERWEITERN Funktion",
    "ERWEITERN (EXPAND): Array auf Größe aufblasen.",
    "Suchen",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ERWEITERN(Matrix; Zeilen; [Spalten]; [Auffüllen])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Array auf Größe aufblasen. Englisch: EXPAND."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ERWEITERN(A1:B2;5;2;0)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-filter-funktion",
    "Excel FILTER Funktion",
    "FILTER (FILTER): Zeilen nach Bedingung.",
    "Suchen",
    [
      {
        heading: "Syntax",
        paragraphs: ["=FILTER(Matrix; Einschließen; [Wenn_leer])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Zeilen nach Bedingung. Englisch: FILTER."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=FILTER(A2:C100;C2:C100=\"offen\";\"keine\")"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-formeltext-funktion",
    "Excel FORMELTEXT Funktion",
    "FORMELTEXT (FORMULATEXT): Formel einer Zelle als Text.",
    "Suchen",
    [
      {
        heading: "Syntax",
        paragraphs: ["=FORMELTEXT(Bezug)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Formel einer Zelle als Text. Englisch: FORMULATEXT."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=FORMELTEXT(B2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-hstapeln-funktion",
    "Excel HSTAPELN Funktion",
    "HSTAPELN (HSTACK): Arrays nebeneinander.",
    "Suchen",
    [
      {
        heading: "Syntax",
        paragraphs: ["=HSTAPELN(Matrix1; [Matrix2]; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Arrays nebeneinander. Englisch: HSTACK."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=HSTAPELN(A2:A10;B2:B10)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-hyperlink-funktion",
    "Excel HYPERLINK Funktion",
    "HYPERLINK (HYPERLINK): Klickbarer Link.",
    "Suchen",
    [
      {
        heading: "Syntax",
        paragraphs: ["=HYPERLINK(Hyperlink_Adresse; [Freundlicher_Name])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Klickbarer Link. Englisch: HYPERLINK."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=HYPERLINK(\"https://excelhero.de\";\"Excelhero\")"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-index-funktion",
    "Excel INDEX Funktion",
    "INDEX (INDEX): Wert an Position Zeile/Spalte.",
    "Suchen",
    [
      {
        heading: "Syntax",
        paragraphs: ["=INDEX(Matrix; Zeile; [Spalte])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Wert an Position Zeile/Spalte. Englisch: INDEX."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=INDEX(C2:C100;VERGLEICH(A2;B2:B100;0))"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-indirekt-funktion",
    "Excel INDIREKT Funktion",
    "INDIREKT (INDIRECT): Text wird zur Adresse. Volatil.",
    "Suchen",
    [
      {
        heading: "Syntax",
        paragraphs: ["=INDIREKT(Bezug; [A1])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Text wird zur Adresse. Volatil. Englisch: INDIRECT."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=INDIREKT(\"'\"&A2&\"'!B2\")"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-mtrans-funktion",
    "Excel MTRANS Funktion",
    "MTRANS (TRANSPOSE): Zeilen zu Spalten.",
    "Suchen",
    [
      {
        heading: "Syntax",
        paragraphs: ["=MTRANS(Matrix)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Zeilen zu Spalten. Englisch: TRANSPOSE."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=MTRANS(A1:D1)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-pivotdatenzuordnen-funktion",
    "Excel PIVOTDATENZUORDNEN Funktion",
    "PIVOTDATENZUORDNEN (GETPIVOTDATA): Holt einen Pivot-Wert robust.",
    "Suchen",
    [
      {
        heading: "Syntax",
        paragraphs: ["=PIVOTDATENZUORDNEN(Datenfeld; Pivot_Tabelle; [Feld]; [Element]; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Holt einen Pivot-Wert robust. Englisch: GETPIVOTDATA."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=PIVOTDATENZUORDNEN(\"Umsatz\";$A$3;\"Region\";\"Nord\")"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-sortieren-funktion",
    "Excel SORTIEREN Funktion",
    "SORTIEREN (SORT): Sortiertes Array.",
    "Suchen",
    [
      {
        heading: "Syntax",
        paragraphs: ["=SORTIEREN(Matrix; [Index]; [Reihenfolge]; [Nach_Spalte])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Sortiertes Array. Englisch: SORT."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=SORTIEREN(A2:B100;2;-1)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-sortierennach-funktion",
    "Excel SORTIERENNACH Funktion",
    "SORTIERENNACH (SORTBY): Sortieren nach einer anderen Spalte.",
    "Suchen",
    [
      {
        heading: "Syntax",
        paragraphs: ["=SORTIERENNACH(Matrix; Nach1; [Reihenfolge1]; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Sortieren nach einer anderen Spalte. Englisch: SORTBY."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=SORTIERENNACH(A2:A100;B2:B100;-1)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-spalte-funktion",
    "Excel SPALTE Funktion",
    "SPALTE (COLUMN): Spaltennummer.",
    "Suchen",
    [
      {
        heading: "Syntax",
        paragraphs: ["=SPALTE([Bezug])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Spaltennummer. Englisch: COLUMN."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=SPALTE(C2)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-spalten-funktion",
    "Excel SPALTEN Funktion",
    "SPALTEN (COLUMNS): Anzahl Spalten.",
    "Suchen",
    [
      {
        heading: "Syntax",
        paragraphs: ["=SPALTEN(Matrix)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Anzahl Spalten. Englisch: COLUMNS."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=SPALTEN(A1:F1)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-spaltenwahl-funktion",
    "Excel SPALTENWAHL Funktion",
    "SPALTENWAHL (CHOOSECOLS): Spalten aus einem Array picken.",
    "Suchen",
    [
      {
        heading: "Syntax",
        paragraphs: ["=SPALTENWAHL(Matrix; Spalte1; [Spalte2]; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Spalten aus einem Array picken. Englisch: CHOOSECOLS."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=SPALTENWAHL(A2:F100;1;4)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-uebernehmen-funktion",
    "Excel ÜBERNEHMEN Funktion",
    "ÜBERNEHMEN (TAKE): Erste/letzte n Zeilen oder Spalten.",
    "Suchen",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ÜBERNEHMEN(Matrix; Zeilen; [Spalten])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Erste/letzte n Zeilen oder Spalten. Englisch: TAKE."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ÜBERNEHMEN(SORTIEREN(A2:B100;2;-1);10)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-vergleich-funktion",
    "Excel VERGLEICH Funktion",
    "VERGLEICH (MATCH): Position in einer Liste. 0 = exakt.",
    "Suchen",
    [
      {
        heading: "Syntax",
        paragraphs: ["=VERGLEICH(Suchkriterium; Suchmatrix; [Vergleichstyp])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Position in einer Liste. 0 = exakt. Englisch: MATCH."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=VERGLEICH(A2;B:B;0)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-verweis-funktion",
    "Excel VERWEIS Funktion",
    "VERWEIS (LOOKUP): Alter ungefährer Lookup, sortierte Liste.",
    "Suchen",
    [
      {
        heading: "Syntax",
        paragraphs: ["=VERWEIS(Suchkriterium; Suchvektor; [Ergebnisvektor])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Alter ungefährer Lookup, sortierte Liste. Englisch: LOOKUP."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=VERWEIS(0,8;A2:A20;B2:B20)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Lieber XVERWEIS."],
      },
    ],
  ),
  fn(
    "excel-vstapeln-funktion",
    "Excel VSTAPELN Funktion",
    "VSTAPELN (VSTACK): Arrays untereinander.",
    "Suchen",
    [
      {
        heading: "Syntax",
        paragraphs: ["=VSTAPELN(Matrix1; [Matrix2]; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Arrays untereinander. Englisch: VSTACK."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=VSTAPELN(A2:C10;A20:C30)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-wahl-funktion",
    "Excel WAHL Funktion",
    "WAHL (CHOOSE): Pick nach Nummer.",
    "Suchen",
    [
      {
        heading: "Syntax",
        paragraphs: ["=WAHL(Index; Wert1; Wert2; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Pick nach Nummer. Englisch: CHOOSE."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=WAHL(MONAT(A2);\"Jan\";\"Feb\";\"Mrz\")"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-weglassen-funktion",
    "Excel WEGLASSEN Funktion",
    "WEGLASSEN (DROP): n Zeilen/Spalten weglassen.",
    "Suchen",
    [
      {
        heading: "Syntax",
        paragraphs: ["=WEGLASSEN(Matrix; Zeilen; [Spalten])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["n Zeilen/Spalten weglassen. Englisch: DROP."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=WEGLASSEN(A1:C100;1)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-wverweis-funktion",
    "Excel WVERWEIS Funktion",
    "WVERWEIS (HLOOKUP): Wie SVERWEIS, waagerecht.",
    "Suchen",
    [
      {
        heading: "Syntax",
        paragraphs: ["=WVERWEIS(Suchkriterium; Matrix; Zeilenindex; [Bereich_Verweis])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Wie SVERWEIS, waagerecht. Englisch: HLOOKUP."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=WVERWEIS(B1;A1:Z2;2;FALSCH)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-xvergleich-funktion",
    "Excel XVERGLEICH Funktion",
    "XVERGLEICH (XMATCH): Moderner VERGLEICH, kann von hinten suchen.",
    "Suchen",
    [
      {
        heading: "Syntax",
        paragraphs: ["=XVERGLEICH(Suchkriterium; Suchmatrix; [Vergleichsmodus]; [Suchmodus])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Moderner VERGLEICH, kann von hinten suchen. Englisch: XMATCH."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=XVERGLEICH(A2;B:B;0;-1)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-xverweis-funktion",
    "Excel XVERWEIS Funktion",
    "XVERWEIS (XLOOKUP): Sucht in jede Richtung, Standard exakt.",
    "Suchen",
    [
      {
        heading: "Syntax",
        paragraphs: ["=XVERWEIS(Suchkriterium; Suchmatrix; Rückgabematrix; [Wenn_nicht_gefunden]; [Vergleichsmodus]; [Suchmodus])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Sucht in jede Richtung, Standard exakt. Englisch: XLOOKUP."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=XVERWEIS(A2;Kunden[Nr];Kunden[Name];\"?\")"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-zeile-funktion",
    "Excel ZEILE Funktion",
    "ZEILE (ROW): Zeilennummer.",
    "Suchen",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ZEILE([Bezug])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Zeilennummer. Englisch: ROW."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ZEILE()"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-zeilen-funktion",
    "Excel ZEILEN Funktion",
    "ZEILEN (ROWS): Anzahl Zeilen.",
    "Suchen",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ZEILEN(Matrix)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Anzahl Zeilen. Englisch: ROWS."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ZEILEN(A1:A20)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-zeilenwahl-funktion",
    "Excel ZEILENWAHL Funktion",
    "ZEILENWAHL (CHOOSEROWS): Zeilen picken.",
    "Suchen",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ZEILENWAHL(Matrix; Zeile1; [Zeile2]; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Zeilen picken. Englisch: CHOOSEROWS."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ZEILENWAHL(A2:C100;1;5;9)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-zuspalte-funktion",
    "Excel ZUSPALTE Funktion",
    "ZUSPALTE (TOCOL): Matrix in eine Spalte.",
    "Suchen",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ZUSPALTE(Matrix; [Ignorieren]; [Durchsuchen])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Matrix in eine Spalte. Englisch: TOCOL."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ZUSPALTE(A1:C10;1)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-zuzeile-funktion",
    "Excel ZUZEILE Funktion",
    "ZUZEILE (TOROW): Matrix in eine Zeile.",
    "Suchen",
    [
      {
        heading: "Syntax",
        paragraphs: ["=ZUZEILE(Matrix; [Ignorieren]; [Durchsuchen])"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Matrix in eine Zeile. Englisch: TOROW."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=ZUZEILE(A1:A10)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-gruppierennach-funktion",
    "Excel GRUPPIERENNACH Funktion",
    "GRUPPIERENNACH (GROUPBY): Gruppieren ohne Pivot.",
    "Suchen",
    [
      {
        heading: "Syntax",
        paragraphs: ["=GRUPPIERENNACH(Zeilenfelder; Werte; Funktion; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Gruppieren ohne Pivot. Englisch: GROUPBY."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=GRUPPIERENNACH(A2:A100;B2:B100;SUMME)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
  fn(
    "excel-pivotmit-funktion",
    "Excel PIVOTMIT Funktion",
    "PIVOTMIT (PIVOTBY): Pivot als Formel.",
    "Suchen",
    [
      {
        heading: "Syntax",
        paragraphs: ["=PIVOTMIT(Zeilenfelder; Spaltenfelder; Werte; Funktion; …)"],
      },
      {
        heading: "Zweck",
        paragraphs: ["Pivot als Formel. Englisch: PIVOTBY."],
      },
      {
        heading: "Beispiel",
        paragraphs: ["=PIVOTMIT(A2:A100;C2:C100;B2:B100;SUMME)"],
      },
      {
        heading: "Hinweis",
        paragraphs: ["Argumente in der deutschen Version mit Semikolon trennen. Englische Mappen nutzen Komma."],
      },
    ],
  ),
];
