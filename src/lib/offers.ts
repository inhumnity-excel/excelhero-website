import type { PricePackage } from "@/components/course/price-card";

export type OfferModule = {
  n: number;
  title: string;
  fullTitle: string;
  hours?: string;
  lessons?: string;
  blurb: string;
  image: string;
  href?: string;
  points?: string[];
};

export type OfferInstructor = {
  name: string;
  role: string;
  photo: string;
  alt: string;
  bio: string[];
};

const SUPPORT = [
  "Zeitlich unbegrenzter Zugriff",
  "Support bei Fragen",
  "30 Tage Geld-zurück-Garantie",
] as const;

export const PBI_MODULES: OfferModule[] = [
  {
    n: 1,
    title: "Power BI Masterclass",
    fullTitle: "Berichte und Dashboards aus mehreren Quellen",
    hours: "16 Std.",
    lessons: "150+",
    blurb:
      "Grundlagen von Power BI und der effektive Einsatz, um Daten in übersichtlichen Berichten und Dashboards zu präsentieren.",
    image: "/images/course/diagramme.jpg",
    href: "https://kurse.data-science-academy.com/s/DataScienceAcademy?pid=16628&prid=3696",
  },
  {
    n: 2,
    title: "Power BI DAX Bootcamp",
    fullTitle: "Measures, berechnete Spalten, komplexe Analysen",
    hours: "5 Std.",
    lessons: "50+",
    blurb:
      "DAX (Data Analysis Expressions) in Power BI: Konzepte und der Einsatz für komplexe Datenanalysen.",
    image: "/images/course/power-pivot.jpg",
    href: "https://kurse.data-science-academy.com/s/DataScienceAcademy?pid=16628&prid=3696",
  },
  {
    n: 3,
    title: "SQL Masterclass",
    fullTitle: "Daten in relationalen Datenbanken verwalten",
    hours: "10 Std.",
    lessons: "120+",
    blurb:
      "SQL-Grundlagen bis Experte: Daten in relationalen Datenbanken speichern, abfragen und mit Power BI verbinden.",
    image: "/images/course/pivot.jpg",
    href: "https://kurse.data-science-academy.com/s/DataScienceAcademy/sql-masterclass-schnell-einfach-sql-meistern?pid=16628&prid=3696",
  },
  {
    n: 4,
    title: "BI and beyond",
    fullTitle: "Cloud-Datenmanagement: Azure, Data Warehouse, Alteryx, Snowflake",
    hours: "auf Anfrage",
    lessons: "500+",
    blurb:
      "Konzepte von Azure, Data Warehouse, Alteryx und Snowflake – Daten in der Cloud verwalten, speichern und analysieren.",
    image: "/images/course/power-bi.png",
    href: "/kontakt",
  },
];

export const PBI_PACKAGES: (PricePackage & { href: string })[] = [
  {
    id: "pbi",
    name: "Power BI + DAX (1–2)",
    price: "399 €",
    note: "Power BI Online Training von data-science-academy.com",
    featured: true,
    contentsLabel: "Kursinhalte",
    contents: [
      "Daten transformieren",
      "Datenmodell erstellen",
      "Daten visualisieren",
      "Storytelling mit Daten",
      "Power BI & Python",
      "Power BI Cloud – Reports veröffentlichen",
      "Weitere Datenquellen verwenden",
      "DAX Measures & berechnete Spalten",
      "Zukünftige Inhalte",
    ],
    scope: ["200+ Videolektionen", "21+ Std. Länge", "Zertifikat für jedes Modul"],
    support: SUPPORT,
    cta: "Jetzt buchen",
    extra: "Mengenrabatt ab 3 Lizenzen",
    href: "https://www.digistore24.com/product/273161",
  },
  {
    id: "sql",
    name: "SQL (3)",
    price: "299 €",
    note: "SQL Online Training von data-science-academy.com",
    contentsLabel: "Kursinhalte",
    contents: [
      "SQL-Grundlagen",
      "Group by, Joins & Union",
      "Kommentare & Aliase",
      "Funktionen (Text / Mathe / Zeit)",
      "Datentypen",
      "Tabellen, Spalten, Views",
      "Bedingte Ausdrücke",
      "SQL mit Power BI, R und Python",
      "Zukünftige Inhalte",
    ],
    scope: ["120+ Videolektionen", "10+ Std. Länge", "Zertifikat für jedes Modul"],
    support: SUPPORT,
    cta: "Jetzt buchen",
    extra: "Mengenrabatt ab 3 Lizenzen",
    href: "https://www.digistore24.com/product/213931",
  },
  {
    id: "bundle",
    name: "Power BI + DAX + SQL (1–3)",
    price: "579 €",
    note: "Beide Kursangebote als Paket · 119 € Rabatt",
    contentsLabel: "Kursinhalte",
    contents: [
      "Alle Inhalte aus beiden Trainings",
      "Rabatt gegenüber Einzelbuchungen",
    ],
    scope: ["320+ Videolektionen", "30+ Std. Länge", "Zertifikat für jedes Modul"],
    support: SUPPORT,
    cta: "Jetzt buchen",
    extra: "Mengenrabatt ab 3 Lizenzen",
    href: "https://myablefy.com/epl/KszZBD5hiiQi-LYVN9ic",
  },
];

export const PBI_FAQ = [
  {
    q: "Ich habe nicht viel Zeit, funktioniert das trotzdem?",
    a: "Absolut. Das Training ist in kleine Lerneinheiten aufgeteilt. Bekannte Inhalte überspringst du, Videos laufen in doppelter Geschwindigkeit, und du kannst Kapitel wiederholen – das Kursmaterial dient auch als Nachschlagewerk.",
  },
  {
    q: "Überall und zu jeder Zeit verfügbar?",
    a: "Ja. Am Rechner oder auf dem Handy, im eigenen Tempo, einzelne Kapitel bei Bedarf noch einmal.",
  },
  {
    q: "Sind die Kurse für Anfänger geeignet?",
    a: "Die Masterclass startet bei den Grundlagen. Vertiefung (DAX, SQL) setzt voraus, dass du bereits mit Daten und Excel oder Power BI arbeitest.",
  },
  {
    q: "Kann ich Fragen zu den Kursinhalten stellen?",
    a: "Ja, im kursinternen Lernbereich oder per E-Mail. Der Dozent hilft so schnell wie möglich weiter.",
  },
  {
    q: "Was passiert, wenn neue Power-BI-Versionen erscheinen?",
    a: "Die Kurse werden regelmäßig aktualisiert. Die ersten Teilnehmer sind seit 2020 dabei.",
  },
  {
    q: "Ist das ein Live-Training / Vor-Ort-Training?",
    a: "Nein, On-Demand. Du lernst wann und wo du willst – nicht live und nicht vor Ort.",
  },
  {
    q: "30 Tage Geld-zurück-Garantie?",
    a: "Ja. Du kannst in Ruhe testen. Falls der Kurs nicht passt, erstattest du über den Zahlungsanbieter.",
  },
  {
    q: "Ist der Beitrag einmalig? Zukünftige Inhalte?",
    a: "Einmalig pro personengebundener Lizenz. Zukünftige Inhalte der gebuchten Module sind enthalten.",
  },
  {
    q: "Ich brauche mehr als eine Lizenz. Gibt es einen Rabatt?",
    a: "Ja, ab 3 Lizenzen. Schreib an kontakt@excelhero.de für ein Teamangebot.",
  },
];

export const PBI_INSTRUCTOR: OfferInstructor = {
  name: "Nikolai Schuler",
  role: "Data Scientist · data-science-academy.com",
  photo: "/images/offers/nikolai.jpg",
  alt: "Nikolai Schuler, Dozent Power BI und SQL",
  bio: [
    "Ich bin begeisterter Data Scientist in einem großen Konzern und möchte dir den Zugang zu diesen Themen ermöglichen.",
    "Mir selbst ist es im Bereich Data Analytics schwergefallen, Kurse zu finden, die qualitativ hochwertig und zugleich verständlich sind. Deshalb erstelle ich strukturierte, praxisorientierte Kurse – und begleite dich auf dem Weg.",
  ],
};

export const VBA_MODULES: OfferModule[] = [
  {
    n: 1,
    title: "Dein Fahrplan",
    fullTitle: "Anwendungsgrundlagen",
    hours: "13 Std.",
    lessons: "100+",
    blurb: "Anwendung professionell gestalten.",
    image: "/images/offers/vba-struktur.png",
    points: [
      "Das Geheimnis einer Anwendung, die heraussticht",
      "Excel wie eine eigenständige Software aussehen lassen",
      "Navigation: dem Benutzer den Weg weisen",
    ],
  },
  {
    n: 2,
    title: "Kundendatenbank",
    fullTitle: "Kundenmanagement",
    hours: "5 Std.",
    lessons: "100+",
    blurb: "Modernes Tabellendesign.",
    image: "/images/offers/vba-kunden.png",
    points: [
      "Eingabemasken, die man gerne ausfüllt",
      "Kundendatensätze anlegen, suchen, bearbeiten und löschen",
      "Benutzerfreundlichkeit erhöhen",
    ],
  },
  {
    n: 3,
    title: "Auftragsdatenbank",
    fullTitle: "Angebote und Rechnung",
    hours: "10 Std.",
    lessons: "120+",
    blurb: "Word-Templates designen und befüllen.",
    image: "/images/offers/vba-auftraege.png",
    points: [
      "Angebote und Rechnungen automatisiert als Word/PDF generieren",
      "Code schreiben, den du auch in ein paar Monaten noch verstehst",
      "Angebote und Rechnungen automatisiert mit Outlook verschicken",
    ],
  },
  {
    n: 4,
    title: "Ausgabendatenbank",
    fullTitle: "Kostenmanagement",
    blurb: "Kosten tracken.",
    image: "/images/offers/vba-ausgaben.jpg",
    points: [
      "Eingabemaske",
      "Ausgaben anlegen, suchen, bearbeiten und löschen",
      "Kosten im Blick behalten",
    ],
  },
  {
    n: 5,
    title: "Dashboard",
    fullTitle: "Daten auswerten und visualisieren",
    blurb: "Warum weniger mehr ist.",
    image: "/images/offers/vba-dashboard.jpg",
    points: [
      "Den richtigen Diagrammtyp auswählen",
      "Auswertung mit Pivot-Tabellen und Pivot-Charts",
      "Professionelles Dashboard-Design",
    ],
  },
  {
    n: 6,
    title: "Bonus 1: Access",
    fullTitle: "Multibenutzeranwendung mit Access",
    blurb: "Gleichzeitige Bearbeitung durch mehrere Benutzer.",
    image: "/images/offers/vba-access.jpg",
    points: [
      "Access-Datenbank erstellen",
      "Daten auslesen",
      "Daten anlegen, bearbeiten und löschen",
    ],
  },
  {
    n: 7,
    title: "Bonus 2: Datepicker",
    fullTitle: "Datepicker für deine Projekte",
    blurb: "Datum und Uhrzeit in der Anwendung.",
    image: "/images/offers/vba-datepicker.jpg",
    points: [
      "Auswahl von Datum und Uhrzeit",
      "Mouseover-Hover-Effekt",
      "Datumszeitraum einschränkbar",
    ],
  },
  {
    n: 8,
    title: "Bonus 3: Arrays",
    fullTitle: "Code-Bibliothek – Arrayfunktionen",
    blurb: "Fertige Arrayfunktionen für deine Projekte.",
    image: "/images/offers/vba-arrays.jpg",
    points: [
      "Vorgefertigte Array-Funktionen",
      "Beschleunige deinen Code",
      "Schneller neue Projekte umsetzen",
    ],
  },
];

export const VBA_PACKAGES: (PricePackage & { href: string })[] = [
  {
    id: "basis",
    name: "Basis (1–5)",
    price: "450 €",
    note: "Projekte mit Excel VBA von vbatrainer.de",
    featured: true,
    contentsLabel: "Kursinhalte",
    contents: [
      "Toolkonzeption",
      "Interface und User Experience",
      "Kundenverwaltung",
      "Auftragsverwaltung – Angebote & Rechnungen",
      "Kostenverwaltung",
      "Dashboard",
    ],
    scope: ["50+ Videolektionen", "10+ Std. Länge", "Zertifikat"],
    support: SUPPORT,
    cta: "Jetzt buchen",
    href: "https://www.digistore24.com/product/328963",
  },
  {
    id: "premium",
    name: "Premium (1–8)",
    price: "530 €",
    note: "Projekte mit Excel VBA von vbatrainer.de",
    contentsLabel: "Kursinhalte",
    contents: [
      "Alles aus dem Basis-Paket",
      "Minikurs Multibenutzer mit Access",
      "Code-Bibliothek „Arrays richtig nutzen“",
      "Datepicker",
    ],
    scope: ["60+ Videolektionen", "12+ Std. Länge", "Zertifikat"],
    support: SUPPORT,
    cta: "Jetzt buchen",
    href: "https://www.digistore24.com/product/247699",
  },
];

export const VBA_FAQ = [
  {
    q: "Ich habe nicht viel Zeit, funktioniert das trotzdem?",
    a: "Ja. Das VBA-Training ist in kleine Einheiten aufgeteilt. Bekannte Inhalte überspringst du, Videos laufen in doppelter Geschwindigkeit – und dienen später als Nachschlagewerk.",
  },
  {
    q: "Überall und zu jeder Zeit verfügbar?",
    a: "Ja. Am Rechner oder Handy, im eigenen Tempo, Kapitel bei Bedarf noch einmal.",
  },
  {
    q: "Sind die Kurse für Anfänger geeignet?",
    a: "Der Praxiskurs richtet sich an Fortgeschrittene, die Excel schon nutzen. VBA-Grundlagen werden entlang eines echten ERP-Projekts aufgebaut.",
  },
  {
    q: "Kann ich Fragen zu den Kursinhalten stellen?",
    a: "Ja. Im kursinternen Lernbereich oder per E-Mail an mail@vbatrainer.de.",
  },
  {
    q: "30 Tage Geld-zurück-Garantie?",
    a: "Ja. Die ersten Kursteilnehmer sind seit 2022 dabei.",
  },
];

export const VBA_INSTRUCTOR: OfferInstructor = {
  name: "Kai Weissmann",
  role: "VBA-Trainer · vbatrainer.de",
  photo: "/images/offers/kai.jpg",
  alt: "Kai Weissmann, VBA-Trainer",
  bio: [
    "Als ich vor 7 Jahren das Programmieren für mich entdeckte, hatte ich sofort ein Gefühl für das Potenzial von Excel VBA.",
    "Durch die Arbeit in Unternehmensberatungen wie Deloitte hatte ich Zugang zu Firmenprozessen – aber nicht die Programmier- und Projektmanagement-Grundlagen. Ohne Informatikstudium habe ich unzählige Kurse, YouTube-Videos und Google-Sessions hinter mich gebracht. Oft Tage, bevor etwas Vorzeigbares stand.",
    "Heute entwickle ich vollumfängliche Anwendungen in wenigen Stunden. Die Absprache mit dem Kunden dauert oft länger als die Programmierung. Was sich geändert hat: mein System.",
  ],
};

export const SCHULUNG_ADVANTAGES = [
  "On Demand: Videos auf Tablet, Smartphone und Computer rund um die Uhr.",
  "Geräteunabhängig vom Büro, von zu Hause und von unterwegs.",
  "Kein Information Overload: kurze Lerneinheiten, Zeit für Übungen, unmittelbare Anwendung im Alltag.",
  "Als Nachschlagewerk nutzbar – bei konkreten Fällen schnell Lösungen finden.",
  "Unterschiedliche Voraussetzungen: relevante Inhalte anspringen, selbstbestimmtes Tempo.",
  "Immer aktuell: neue Funktionen der Microsoft-365-Aboversion.",
  "Kontext und Potenzial: im Grundlagenmodul alle Excel-Tools und ihr Zusammenspiel.",
  "Lernstandskontrolle zum Messen des Fortschritts.",
  "Günstiger als Präsenz: keine Reise- und Übernachtungskosten.",
  "Einfache Skalierbarkeit für Mitarbeiter an unterschiedlichen Standorten.",
  "Kein Risiko: 30-Tage-Geld-zurück-Garantie, Inhalte vorher sichten.",
  "Einfache Abwicklung: Zugänge direkt, Zahlung per PayPal, Karte, Vorkasse oder Rechnung.",
  "Zeitnaher Start: bei Zusage noch am selben Tag – ohne Terminabstimmung.",
  "Lässt sich leicht in den Arbeitsalltag integrieren.",
];

export const AUFTRAG_SERVICES = [
  {
    title: "Excel / VBA-Programmierung",
    body: "Individuelle Tools, Masken, Automatisierung und Bereinigung bestehender Mappen.",
  },
  {
    title: "Excel Reporting (Power Query / Power Pivot)",
    body: "Saubere Datenstrecken, Modelle und Berichte, die sich mit einem Klick aktualisieren.",
  },
  {
    title: "Office-Automatisierung mit VBA",
    body: "Excel plus Access, Word und Outlook – Angebote, Rechnungen, Serienmails.",
  },
  {
    title: "Power Platform (Power Apps)",
    body: "Eingaben und Freigaben dort, wo Excel allein nicht mehr reicht.",
  },
  {
    title: "Power BI Reporting",
    body: "Dashboards für Steuerung, die im Browser und auf dem Smartphone laufen.",
  },
  {
    title: "Automatisierung mit Power Automate",
    body: "Wiederkehrende Abläufe zwischen Excel, SharePoint, Outlook und mehr.",
  },
  {
    title: "SQL-Datenbanken",
    body: "Abfragen, Schnittstellen und das Zusammenspiel mit Excel und Power BI.",
  },
];
