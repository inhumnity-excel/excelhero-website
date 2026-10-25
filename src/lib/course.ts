export const COURSE_VIDEO =
  "https://player.vimeo.com/video/493609903?portrait=0&title=0&byline=0&color=6fb83a";

export const MODULES = [
  {
    n: 1,
    title: "Excel-Basics",
    fullTitle: "Grundlagen meistern & Überblick über die verschiedenen Excel-Tools",
    hours: "12,5 Std.",
    lessons: "130+",
    blurb:
      "Neben dem Beherrschen der Excel-Grundlagen ist es wichtig, sich gleich von Anfang an einen guten Überblick über die verschiedenen Excel-Tools zu verschaffen.",
    image: "/images/course/basics.jpg",
    href: "https://kurse.excelhero.de/courses/excel-basics-meistern",
  },
  {
    n: 2,
    title: "Funktionen",
    fullTitle: "SVERWEIS & Co. meistern und Tipps & Tricks kennenlernen",
    hours: "8 Std.",
    lessons: "100+",
    blurb:
      "Mit dem effektiven Einsatz der wichtigsten Excel-Formeln und Funktionen können Daten schnell aufbereitet, zusammengeführt und ausgewertet werden.",
    image: "/images/course/funktionen.jpg",
    href: "https://kurse.excelhero.de/courses/excel-online-kurs-funktionen",
  },
  {
    n: 3,
    title: "Diagramme & Karten",
    fullTitle: "Erwecke deine Daten zum Leben",
    hours: "4,5 Std.",
    lessons: "40+",
    blurb:
      "Um Erkenntnisse aus Unternehmensdaten zu gewinnen und diese ansprechend zu kommunizieren, ist der richtige Einsatz von Diagrammen und Karten unerlässlich.",
    image: "/images/course/diagramme.jpg",
    href: "https://kurse.excelhero.de/courses/excel-online-kurs-diagramme",
  },
  {
    n: 4,
    title: "Pivot-Tabellen",
    fullTitle: "Daten mit wenigen Klicks auswerten und visualisieren",
    hours: "4 Std.",
    lessons: "55+",
    blurb:
      "Mit Pivot-Tabellen können große Datenmengen schnell ausgewertet und in ansprechende Berichte und Dashboards verwandelt werden.",
    image: "/images/course/pivot.jpg",
    href: "https://kurse.excelhero.de/courses/excel-online-kurs-pivot-tabellen",
  },
  {
    n: 5,
    title: "Makros",
    fullTitle: "Lästige Arbeitsschritte aufnehmen und per Knopfdruck abspielen",
    hours: "2 Std.",
    lessons: "25+",
    blurb:
      "Lerne Makros aufzunehmen und anzupassen. Routineaufgaben lassen sich automatisieren – und damit jede Menge Zeit einsparen.",
    image: "/images/course/makros.jpg",
    href: "https://kurse.excelhero.de/courses/excel-online-kurs-makros",
  },
  {
    n: 6,
    title: "Power Query",
    fullTitle: "Schluss mit Verknüpfungen und Copy & Paste. Daten automatisch von A nach B",
    hours: "6,5 Std.",
    lessons: "50+",
    blurb:
      "Daten aus Dateien, Ordnern, Webseiten und Datenbanken abrufen und transformieren. Einmal erstellte Abfragen aktualisierst du mit einem Klick.",
    image: "/images/course/power-query.jpg",
    href: "https://kurse.excelhero.de/courses/excel-online-kurs-power-query",
  },
  {
    n: 7,
    title: "Power Pivot (DAX)",
    fullTitle: "Business Intelligence mit Excel – Grundlage für Power BI",
    hours: "4,5 Std.",
    lessons: "55+",
    blurb:
      "Daten aus unterschiedlichen Quellen in einem Datenmodell vereinen und auswerten – Einsichten, die sonst nur mit aufwendigen Formeln möglich wären.",
    image: "/images/course/power-pivot.jpg",
    href: "https://kurse.excelhero.de/courses/excel-online-kurs-power-pivot",
  },
  {
    n: 8,
    title: "Excel VBA",
    fullTitle: "Programme schreiben und Tools bauen, um Arbeitsabläufe zu automatisieren",
    hours: "17 Std.",
    lessons: "170+",
    blurb:
      "Mit VBA erhältst du die volle Kontrolle über Excel. Dieser Kurs geht weit über das einfache Aufnehmen von Makros hinaus.",
    image: "/images/course/vba.jpg",
    href: "https://kurse.excelhero.de/courses/excel-online-kurs-vba",
  },
  {
    n: 9,
    title: "Office-VBA",
    fullTitle: "Excel + PowerPoint, Outlook, Word und SQL",
    hours: "4 Std.",
    lessons: "35+",
    blurb:
      "Excel-Inhalte automatisch in PowerPoint und Word überführen und per Outlook versenden – spart Zeit bei regelmäßiger Reporterstellung.",
    image: "/images/course/makros.jpg",
    href: "https://kurse.excelhero.de/courses/office-automatisierung",
  },
  {
    n: 10,
    title: "Power BI Masterclass + DAX",
    fullTitle: "Partnerkurs von data-science-academy.com",
    hours: "21 Std.",
    lessons: "200+",
    blurb:
      "Daten als interaktive Dashboards darstellen und unternehmensweit per Browser oder Smartphone verteilen. Weitere Kurse zu SQL, Azure, Data Warehouse, Alteryx und Snowflake auf Anfrage.",
    image: "/images/course/power-bi.png",
    href: "https://kurse.data-science-academy.com/s/DataScienceAcademy?pid=16628&prid=3696",
  },
];

export const PACKAGES = [
  {
    id: "experte",
    name: "Excel Experte (1–9)",
    price: "599 €",
    note: "Ratenzahlung möglich · Excel Online Training von excelhero.de",
    featured: true,
    contentsLabel: "Kursinhalte",
    contents: [
      "Grundlagen",
      "Formeln & Funktionen",
      "Diagramme & Karten",
      "Pivot-Tabellen",
      "Makros",
      "Power Query",
      "Power Pivot",
      "Excel VBA",
      "Office VBA (Excel + PPT, Word, Outlook, SQL)",
      "Zukünftige Excel-Inhalte",
    ],
    scope: ["600+ Videolektionen", "60+ Std. Länge", "Zertifikat für jedes Modul"],
    support: [
      "Zeitlich unbegrenzter Zugriff",
      "Support bei Fragen",
      "30 Tage Geld-zurück-Garantie",
    ],
    cta: "Jetzt buchen",
    extra: "Mengenrabatt ab 3 Lizenzen",
  },
  {
    id: "powerbi",
    name: "Power BI (10)",
    price: "399 €",
    note: "Ratenzahlung möglich · Power BI Online Training von data-science-academy.com",
    featured: false,
    contentsLabel: "Kursinhalte",
    contents: [
      "Einführung",
      "Daten transformieren",
      "Datenmodell erstellen",
      "Daten visualisieren",
      "Storytelling mit Daten",
      "Power BI & Python",
      "Power BI Cloud – Reports veröffentlichen",
      "Weitere Datenquellen verwenden",
    ],
    scope: ["200+ Videolektionen", "21 Std. Länge", "Zertifikat für jedes Modul"],
    support: [
      "Zeitlich unbegrenzter Zugriff",
      "Support bei Fragen",
      "30 Tage Geld-zurück-Garantie",
    ],
    cta: "Jetzt buchen",
    extra: "",
  },
  {
    id: "bundle",
    name: "Excel + Power BI (1–10)",
    price: "899 €",
    note: "Ratenzahlung möglich · beide Kursangebote als Paket, 99 € Rabatt",
    featured: false,
    contentsLabel: "Kursinhalte",
    contents: [
      "Alle Inhalte aus beiden Trainings",
      "99 € Rabatt gegenüber Einzelbuchungen",
    ],
    scope: ["800+ Videolektionen", "80+ Std. Länge", "Zertifikat für jedes Modul"],
    support: [
      "Zeitlich unbegrenzter Zugriff",
      "Support bei Fragen",
      "30 Tage Geld-zurück-Garantie",
    ],
    cta: "Jetzt buchen",
    extra: "",
  },
] as const;

export const COURSE_FAQ = [
  {
    q: "Ich habe nicht viel Zeit, funktioniert das trotzdem?",
    a: "Absolut. Genau deshalb ist das Training in viele kleine Lerneinheiten aufgeteilt. Anders als in einer Präsenzschulung kannst du bekannte oder irrelevante Inhalte überspringen, Videos in doppelter Geschwindigkeit ansehen oder bei Bedarf wiederholen. Das Training dient zusätzlich als Nachschlagewerk.",
  },
  {
    q: "Überall und zu jeder Zeit verfügbar?",
    a: "Ja. Du kannst die Kurse jederzeit am Rechner oder auf dem Handy ansehen – im eigenen Tempo, einzelne Kapitel bei Bedarf noch einmal.",
  },
  {
    q: "Sind die Kurse für Anfänger geeignet?",
    a: "Das Basis-Modul ist für Anfänger. Die Vertiefungsmodule sind für dich, wenn du bereits mit Excel arbeitest und die wichtigsten Grundlagen (Zellen, einfache Formeln, Grafiken) beherrschst.",
  },
  {
    q: "Kann ich Fragen zu den Kursinhalten stellen?",
    a: "Ja. Fragen stellst du im kursinternen Lernbereich oder per E-Mail an daniel@excelhero.de. Ich helfe so schnell wie möglich weiter.",
  },
  {
    q: "Was passiert, wenn neue Excel-Versionen erscheinen?",
    a: "Die Kurse wurden mit der Abo-Version Microsoft 365 (Excel 2016+) aufgenommen. Neue Funktionen der Abo-Version fließen in das Material ein. Wo nötig, werden Inhalte angepasst.",
  },
  {
    q: "Was ist der Unterschied zu einer teuren Präsenzschulung?",
    a: "Präsenzschulungen dauern oft 1–2 Tage, kosten 800–1.500 € plus Reise, und vieles bleibt nicht hängen. Du kannst Inhalte nicht überspringen, wiederholen oder nachschlagen. Hier bestimmst du das Tempo, hast zeitlich unbegrenzten Zugriff und kannst Fragen nach dem Training stellen. Vergleichbarer Umfang in Präsenz liegt schnell bei rund 10.000 €.",
  },
  {
    q: "Welche Excel-Version benötige ich?",
    a: "Aufgenommen mit Excel 2016 bzw. Microsoft 365, PC-Version. Über 95 % der gezeigten Funktionen sind auch in älteren Versionen und in der Mac-Version verfügbar.",
  },
  {
    q: "30 Tage Geld-zurück-Garantie?",
    a: "Alle Kurse haben eine 30-Tage-Geld-zurück-Garantie. Du kannst in Ruhe ausprobieren. Falls der Kurs nicht das Richtige ist, erstattest du den Kauf über Digistore24.",
  },
  {
    q: "Ist der Beitrag wirklich einmalig? Zukünftige Inhalte?",
    a: "Ja, einmalig pro personengebundener Lizenz. Zukünftige Excel-Inhalte sind bei Excel Experte (1–9) und Excel + Power BI (1–10) enthalten. Geplant ist unter anderem Power Automate – dann kostenlos freigeschaltet. Mit jedem weiteren Modul steigen die Preise.",
  },
  {
    q: "Ich brauche mehr als eine Lizenz. Gibt es einen Rabatt?",
    a: "Ja, ab 3 Lizenzen. Schreib an daniel@excelhero.de – dann gibt es ein passgenaues Angebot fürs Team.",
  },
];

