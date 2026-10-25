export const SITE = {
  name: "Excelhero",
  tagline: "Mit Excel Online Training zum Erfolg",
  email: "kontakt@excelhero.de",
  phone: "+49 5251 5494001",
  youtube: "https://www.youtube.com/c/Excelhero",
  linkedin: "https://www.linkedin.com/company/excelhero",
  xing: "https://www.xing.com/profile/Daniel_Kogan2",
  company: "Excel Hero Training LLC",
  addressLines: [
    "7901 4th Street North",
    "Suite 300",
    "St. Petersburg, Florida 33702",
    "USA",
  ],
  address: "7901 4th Street North, Suite 300, St. Petersburg, Florida 33702, USA",
  website: "https://excelhero.de",
  digistore: {
    affiliates: "https://www.digistore24.com/de/affiliates",
    reseller:
      "Digistore24 GmbH, St.-Godehard-Straße 32, 31139 Hildesheim, Germany",
  },
};

export const NAV: { to: string; label: string }[] = [
  { to: "/power-bi-online-kurs", label: "Power BI" },
  { to: "/excel-funktionen", label: "Funktionen" },
  { to: "/about", label: "Über mich" },
];

export const COURSE = {
  href: "/excel-online-kurse",
  price: 599,
  modules: 9,
  lessons: "600+",
  hours: "60+",
  rating: "4,7",
  students: "80.000+",
  checkout: {
    experte: "https://www.digistore24.com/product/160655",
    powerbi: "https://www.digistore24.com/product/273161",
    bundle: "https://www.digistore24.com/product/330287",
  },
  vimeo: "https://player.vimeo.com/video/493609903?portrait=0&title=0&byline=0&color=6fb83a",
};

export { MODULES } from "./course";
export const BENEFITS = [
  {
    title: "Schnelles und effizientes Arbeiten",
    body: "Aufgaben professionell lösen und automatisieren. Mehr Zeit für andere Dinge.",
    image: "/images/vorteil-1.png",
  },
  {
    title: "Habe deine Daten im Griff",
    body: "Beeindrucke dein Arbeitsumfeld mit aussagekräftigen Auswertungen und interaktiven Dashboards.",
    image: "/images/vorteil-2.png",
  },
  {
    title: "Steigere deinen Marktwert",
    body: "Mit guten Excel-Fähigkeiten. Nimm diese als Argument mit in deine nächste Gehaltsverhandlung.",
    image: "/images/vorteil-3.png",
  },
];
export const FAQ = [
  {
    q: "Was ist Excel?",
    a: "Excel ist ein Tabellenkalkulationsprogramm, mit dessen Hilfe durch den Einsatz von Funktionen Daten aufbereitet, verarbeitet und grafisch dargestellt werden können. Es findet Anwendung in vielen Unternehmensbereichen – häufig dort, wo Daten retrospektiv betrachtet werden, um akkurate Prognosen zu treffen.",
  },
  {
    q: "Warum eine Excel-Schulung bzw. einen Excel-Kurs absolvieren?",
    a: "Sich das Wissen rund um Microsoft Excel anzueignen kann ein sehr langwieriger Prozess sein. Aufgrund der beinahe unbegrenzten Möglichkeiten ergeben sich ebenso viele Anwendungsfelder. Das richtige Vorgehen: erst die Grundlagen so lernen, dass du beurteilen kannst, was für dich relevant ist. Fortgeschrittene Schulungen sind meist auf ein Anwendungsgebiet festgelegt. Oft geben Firmen vor, was der Arbeitnehmer können muss – ein solides Grundverständnis ist dann ein klarer Vorteil.",
  },
  {
    q: "Verbessert eine Excel-Schulung die Chancen auf dem Arbeitsmarkt?",
    a: "Fundierte Kenntnisse in Microsoft-Office-Programmen sind heute oft Voraussetzung, besonders in Wirtschaft, Banken oder Führungspositionen. Excel-Kurse können die Chancen, dass sich ein Unternehmen für dich entscheidet, durchaus verbessern.",
  },
  {
    q: "Wieso Excel lernen und kein vergleichbares Programm?",
    a: "Microsoft Excel ist das führende Tabellenkalkulationsprogramm. Die meisten Unternehmen setzen es ein oder ein Programm, das auf Excel basiert. Der große Vorteil: Formeln, Funktionen und Programmierung. Genau dieses Wissen lernst du im Excelhero-Training.",
  },
  {
    q: "Für wen ist der Online-Kurs geeignet?",
    a: "Für Einsteiger, die strukturiert starten wollen, und für Fortgeschrittene, die Lücken schließen und Tools wie Power Query, Power Pivot und VBA wirklich beherrschen möchten. Du lernst im eigenen Tempo, mit zeitlich unbegrenztem Zugriff – auch als Nachschlagewerk im Arbeitsalltag.",
  },
  {
    q: "Gibt es eine Geld-zurück-Garantie?",
    a: "Ja. 30 Tage Geld-zurück-Garantie, Support bei Fragen und zeitlich unbegrenzter Zugriff. Die ersten Kursteilnehmer sind bereits seit 2016 dabei; der Kurs wird regelmäßig aktualisiert.",
  },
];

export const SOCIAL = [
  { name: "YouTube", href: "https://www.youtube.com/c/Excelhero" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/excelhero" },
  { name: "XING", href: "https://www.xing.com/profile/Daniel_Kogan2" },
] as const;

export const FOOTER_COLUMNS: { title: string; links: { to: string; label: string }[] }[] = [
  {
    title: "Kurs & Wissen",
    links: [
      { to: "/excel-online-kurse", label: "Excel Online Kurs" },
      { to: "/power-bi-online-kurs", label: "Power BI & SQL" },
      { to: "/guides", label: "Guides" },
      { to: "/excel-funktionen", label: "Funktionen" },
      { to: "/excel-formeln", label: "Formeln" },
      { to: "/excel-tastenkombinationen", label: "Shortcuts" },
      { to: "/about", label: "Über mich" },
    ],
  },
  {
    title: "Service",
    links: [
      { to: "/kontakt", label: "Kontaktformular" },
      { to: "/rueckruf", label: "Rückrufservice" },
      { to: "/partnerprogramm", label: "Partnerprogramm" },
      { to: "/excel-auftragsprogrammierung", label: "Auftragsprogrammierung" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { to: "/impressum", label: "Impressum" },
      { to: "/datenschutzerklaerung", label: "Datenschutz" },
    ],
  },
];
