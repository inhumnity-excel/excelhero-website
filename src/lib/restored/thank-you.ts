export type ThankYouStep = { title: string; html: string };

export type ThankYouContent = {
  slug: string;
  documentTitle: string;
  description: string;
  robots: "noindex, follow";
  /** Subheading under the shared “Du hast es Fast Geschafft!” headline. */
  lead: string;
  introHtml?: string;
  paymentNote: boolean;
  steps: ThankYouStep[];
};

const PAYMENT_NOTE =
  "<strong>Die Abbuchung erfolgt durch Digistore24</strong>. Damit ist sichergestellt, dass der Zahlungsverkehr sicher ist und Du im Zweifelsfall ganz unbürokratisch von der Geld-Zurück-Garantie gebrauch machen kannst.";

const POSTFACH: ThankYouStep = {
  title: "Gehe zu deinem Postfach",
  html: "Gehe zum Postfach der Emailadresse mit der Du dich gerade angemeldet hast.",
};

const CONFIRM_LINK: ThankYouStep = {
  title: "Klicke den Bestätigungslink",
  html: "Klicke auf den <strong>Anmeldelink</strong> um dir ein <strong>Benutzerkonto für der Lernplatt zu erstellen</strong> und dich kostenlos <strong>in den Kurs einzuschreiben</strong>.",
};

const CONFIRM_LINK_VBA: ThankYouStep = {
  title: "Klicke den Bestätigungslink",
  html: "Klicke auf den <strong>Anmeldelink</strong> um Dir ein <strong>Benutzerkonto für die Lernplattformen zu erstellen</strong> und Dich dann anschließend <strong>in den Kurs einzuschreiben</strong>.",
};

const RECEIPT: ThankYouStep = {
  title: "Rechnung in Digistore24 E-Mail",
  html: "Die Rechnung findest Du in der E-Mail von Digistore24. Einfach in der E-Mail nach unten scrollen und dort <strong>über den Link die Rechnung im PDF-Format abrufen</strong>.",
};

const BOOKMARK: ThankYouStep = {
  title: "Lesezeichen",
  html: "Lege Dir ein <strong>Lesezeichen</strong> für die Lernplattform an, damit Du schnell wieder zur Lernplattform gelangst.",
};

const LEAD = "Bitte führe Folgende Schritte aus um den Anmeldeprozess Abzuschließen:";

function emailStep(subject: string, sender = "daniel@excelhero.de"): ThankYouStep {
  return {
    title: "Öffne die Bestätigungsemail",
    html: `Finde die Email mit dem Titel <strong><em>„${subject}“</em></strong>, der Absender ist <strong><em>„${sender}“</em></strong>.`,
  };
}

function accountStep(title: string, href: string, htmlAfterLink: string): ThankYouStep {
  return {
    title,
    html: `Klicke auf <a href="${href}">Konto erstellen</a> ${htmlAfterLink}`,
  };
}

function mailboxCourse(slug: string, documentTitle: string, subject: string, confirm: ThankYouStep = CONFIRM_LINK): ThankYouContent {
  return {
    slug,
    documentTitle,
    description: LEAD,
    robots: "noindex, follow",
    lead: LEAD,
    paymentNote: true,
    steps: [POSTFACH, emailStep(subject), confirm],
  };
}

const EXCEL_ENROLL = "http://kurse.excelhero.de/enroll/188794?coupon=yhjxca3znz";
const PBI_ENROLL =
  "https://kurse.data-science-academy.com/s/DataScienceAcademy/power-bi-masterclass-alles-von-a-z-inkl-dax-cloud/payment?coupon=PBIBNDL1002023";
const PBI_SQL_ENROLL =
  "https://kurse.data-science-academy.com/s/DataScienceAcademy/sql-bundle-power-bi-masterclass-alles-von-a-z-inkl-dax-cloud/payment?coupon=PBISQLDAXBNDL2023";
const SQL_ENROLL =
  "https://kurse.data-science-academy.com/s/DataScienceAcademy/sql-masterclass-schnell-einfach-sql-meistern/payment?coupon=SQL1002023";

const PBI_ACCOUNT_HTML =
  ". Hier musst Du dann noch einmal Deinen Vor- und Nachnamen, sowie die E-Mail-Adresse für das Kurskonto eingeben.";

const PBI_FOLLOWUP = [
  "Auf dem Formular entstehen <strong>keine weiteren Kosten</strong>, da hier ein 100% Rabattgutschein angewendet wird.",
  "Anschließend bekommst Du eine weitere E-Mail von meinem Kollegen Herrn Schuler, der das Thema Power BI betreut.",
];

function pbiAccount(title: string, href: string): ThankYouStep {
  return {
    title,
    html: `${accountStep(title, href, PBI_ACCOUNT_HTML).html}<br/><br/>${PBI_FOLLOWUP.join("<br/><br/>")}`,
  };
}

export const THANK_YOU_PAGES: ThankYouContent[] = [
  mailboxCourse(
    "basics-ty",
    "Basics TY",
    "Benutzerkonto erstellen: Excel Online Kurs Excel Grundlagen",
  ),
  {
    slug: "bundle-ty",
    documentTitle: "Bundle TY Experte",
    description: "Vielen Dank, dass Du Dich in das Excel Kurspaket eingeschrieben hast!",
    robots: "noindex, follow",
    lead: LEAD,
    introHtml: "Vielen Dank, dass Du Dich in das <strong>Excel Kurspaket</strong> eingeschrieben hast!",
    paymentNote: false,
    steps: [
      accountStep(
        "KOntoerstellung",
        EXCEL_ENROLL,
        "um Dir ein neues Benutzerkonto bei der Lernplattform anzulegen.",
      ),
      BOOKMARK,
      RECEIPT,
    ],
  },
  mailboxCourse("bundle-ty-1", "Bundle TY Beginner", "Benutzerkonto erstellen: Excel Kurspaket"),
  mailboxCourse("bundle-ty-2", "Bundle TY Fortgeschritten", "Benutzerkonto erstellen: Excel Kurspaket"),
  mailboxCourse("bundle-ty-team1", "Bundle TY Team", "Benutzerkonto erstellen: Excel Kurspaket"),
  {
    slug: "bundle-excel-bi-ty",
    documentTitle: "Bundle TY Excel BI",
    description: "Vielen Dank, dass Du Dich in das Excel und Power-BI Kurspaket eingeschrieben hast!",
    robots: "noindex, follow",
    lead: LEAD,
    introHtml:
      "Vielen Dank, dass Du Dich in das <strong>Excel und Power-BI Kurspaket</strong> eingeschrieben hast!",
    paymentNote: false,
    steps: [
      accountStep(
        "Konto für das Excel Kurspaket",
        EXCEL_ENROLL,
        "um Dir ein neues Benutzerkonto bei der Lernplattform anzulegen.",
      ),
      pbiAccount("Konto für das Power-BI Kurspaket", PBI_ENROLL),
      RECEIPT,
    ],
  },
  {
    slug: "bundle-pbi-dax-ty",
    documentTitle: "Bundle TY PBI und DAX",
    description: "Vielen Dank, dass Du Dich in das Power-BI Kurspaket eingeschrieben hast!",
    robots: "noindex, follow",
    lead: LEAD,
    introHtml: "Vielen Dank, dass Du Dich in das <strong>Power-BI Kurspaket</strong> eingeschrieben hast!",
    paymentNote: false,
    steps: [pbiAccount("Konto für das Power-BI Kurspaket", PBI_ENROLL), BOOKMARK, RECEIPT],
  },
  {
    slug: "bundle-pbi-dax-sql-ty",
    documentTitle: "Bundle TY PBI, DAX und SQL",
    description: "Vielen Dank, dass Du Dich in das Power-BI UND SQL Kurspaket eingeschrieben hast!",
    robots: "noindex, follow",
    lead: LEAD,
    introHtml:
      "Vielen Dank, dass Du Dich in das <strong>Power-BI UND SQL Kurspaket</strong> eingeschrieben hast!",
    paymentNote: false,
    steps: [pbiAccount("Konto für das Power-BI Kurspaket", PBI_SQL_ENROLL), BOOKMARK, RECEIPT],
  },
  {
    slug: "bundle-sql-ty",
    documentTitle: "Bundle TY SQL",
    description: "Vielen Dank, dass Du Dich in das SQL Kurspaket eingeschrieben hast!",
    robots: "noindex, follow",
    lead: LEAD,
    introHtml: "Vielen Dank, dass Du Dich in das <strong>SQL Kurspaket</strong> eingeschrieben hast!",
    paymentNote: false,
    steps: [
      accountStep(
        "KOntoerstellung",
        SQL_ENROLL,
        "um Dir ein neues Benutzerkonto bei der Lernplattform anzulegen.",
      ),
      BOOKMARK,
      RECEIPT,
    ],
  },
  mailboxCourse("dv-ty", "Diagramme TY", "Benutzerkonto erstellen: Excel Online Kurs Excel Diagramme"),
  mailboxCourse("funktionen-ty", "Funktionen TY", "Benutzerkonto erstellen: Excel Online Kurs Funktionen"),
  mailboxCourse("makros-ty", "Makros TY", "Benutzerkonto erstellen: Excel Online Kurs Makros"),
  mailboxCourse("office-ty", "Office TY", "Benutzerkonto erstellen: Excel Online Kurs Office VBA"),
  mailboxCourse("pivot-ty", "Pivot TY", "Benutzerkonto erstellen: Excel Online Kurs Pivot-Tabellen"),
  mailboxCourse("power-pivot-ty", "Power Pivot TY", "Benutzerkonto erstellen: Excel Online Kurs Power Pivot"),
  mailboxCourse("pq-ty", "Power Query TY", "Benutzerkonto erstellen: Excel Online Kurs Power Query"),
  {
    ...mailboxCourse("vba-ty", "VBA TY", "Benutzerkonto erstellen: Excel Online Kurs VBA"),
    lead: "Bitte führe Folgende Schritte aus um den Anmeldeprozess  Abzuschließen:",
    description: "Bitte führe Folgende Schritte aus um den Anmeldeprozess  Abzuschließen:",
  },
  mailboxCourse(
    "vba-basic-ty",
    "VBA Basic TY",
    "Benutzerkonto erstellen: Benutzerkonto erstellen: Projekte mit Excel VBA",
    CONFIRM_LINK_VBA,
  ),
  mailboxCourse(
    "vba-premium-ty",
    "VBA Premium TY",
    "Benutzerkonto erstellen: Benutzerkonto erstellen: Projekte mit Excel VBA",
    CONFIRM_LINK_VBA,
  ),
  {
    slug: "videoserie-ty",
    documentTitle: "Videoserie TY",
    description: LEAD,
    robots: "noindex, follow",
    lead: LEAD,
    paymentNote: false,
    steps: [
      POSTFACH,
      emailStep("Email bestätigen: Excel Videokurs"),
      {
        title: "Klicke den Bestätigungslink",
        html: "Klicke auf den <strong>Bestätigungslink</strong> um <strong>zur Videoserie zu gelangen</strong> und das <strong>Potenzial von Excel kennen zu lernen</strong>.",
      },
    ],
  },
];

const BY_SLUG = new Map(THANK_YOU_PAGES.map((page) => [page.slug, page]));

export function thankYouPage(slug: string): ThankYouContent {
  const page = BY_SLUG.get(slug);
  if (!page) throw new Error(`Unknown thank-you page: ${slug}`);
  return page;
}

export const PAYMENT_NOTE_HTML = PAYMENT_NOTE;
export const PAYMENT_NOTE_TITLE = "Hinweis zum Zahlungsprozess";
