export type NavLink = {
  label: string;
  to?: string;
  href?: string;
};

export type NavGroup = {
  label: string;
  to?: string;
  children?: NavLink[];
};

export const MEGA_NAV: NavGroup[] = [
  {
    label: "Kurse",
    children: [
      { label: "Excel Kurs", to: "/excel-online-kurse" },
      { label: "Power BI & SQL", to: "/power-bi-online-kurs" },
      {
        label: "ChatGPT Masterclass",
        href: "https://kurse.data-science-academy.com/s/DataScienceAcademy/chatgpt-masterclass",
      },
    ],
  },
  {
    label: "Funktionen",
    to: "/excel-funktionen",
    children: [
      { label: "Alle Funktionen", to: "/excel-funktionen" },
      { label: "Deutsch–Englisch", to: "/excel-funktionen-deutsch-englisch" },
      { label: "Funktionen → Power Query", to: "/excel-funktionen-power-query-uebersetzungstabelle" },
    ],
  },
  { label: "Formeln", to: "/excel-formeln" },
  {
    label: "Guides",
    to: "/guides",
    children: [
      { label: "Alle Artikel", to: "/guides" },
      { label: "Allgemein", to: "/allgemein" },
      { label: "Bedingte Formatierung", to: "/bedingte-formatierung/bedingte-formatierung-ganz-einfach-erklaert" },
      { label: "ChatGPT", to: "/ki/chatgpt-und-excel" },
      { label: "Diagramme", to: "/diagramme" },
      { label: "Makros", to: "/makros/excel-makros" },
      { label: "Office Script", to: "/office-script/office-script-einfuehrung" },
      { label: "Pivot-Tabellen", to: "/pivot-tabellen/pivot-tabellen-ganz-einfach-erklaert" },
      { label: "Power Automate", to: "/automate/power-automate-ganz-einfach-erklaert" },
      { label: "Power BI", to: "/power-bi/power-bi-ganz-einfach-erklaert" },
      { label: "Power Pivot", to: "/power-pivot/power-pivot-ganz-einfach-erklaert" },
      { label: "Power Query", to: "/power-query/power-query-ganz-einfach-erklaert" },
    ],
  },
  { label: "Shortcuts", to: "/excel-tastenkombinationen" },
  { label: "Tabellen", to: "/excel-tabellen/excel-tabelle-erstellen" },
  { label: "Tipps & Tricks", to: "/tipps-tricks" },
  { label: "VBA", to: "/vba/excel-vba" },
  {
    label: "Service",
    children: [
      { label: "Auftragsprogrammierung", to: "/excel-auftragsprogrammierung" },
      { label: "KI-Agenten", href: "https://agentenkollege.de/" },
      { label: "Webentwicklung", href: "https://davidkogan.de/" },
      { label: "Kontakt", to: "/kontakt" },
      { label: "Rückrufservice", to: "/rueckruf" },
    ],
  },
  { label: "About", to: "/about" },
];

export const LOGIN_HREF = "https://kurse.excelhero.de/users/sign_in";
