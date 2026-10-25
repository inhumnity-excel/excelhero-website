import { FormEvent, useState } from "react";
import { Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/content";

function Video({ src, title }: { src: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-xl bg-navy shadow-card">
      <div className="aspect-video">
        <iframe
          src={src}
          title={title}
          className="h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export function ExcelVorlagenDownloadPage() {
  return (
    <main>
      <PageHero kicker="" title="Excel Vorlagen Download" />
      <section className="bg-paper px-5 py-14">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg font-semibold text-ink">
            Es handelt sich um 2 Excel-Dateien zu einer ZIP-Datei gepackt.
          </p>
          <ol className="mt-6 space-y-2 text-left text-[15px] text-ink/85">
            <li>1) Diagramm und Kartenvorlagen</li>
            <li>2) Funktionen: Anwendungsbeispiele und Übungsaufgaben</li>
          </ol>
          <Button asChild size="lg" className="mt-8">
            <a href="https://excelhero.de/wp-content/uploads/Excel-Vorlagen-Excelhero.de-1.2.zip">
              DATEIEN DOWNLOADEN »
            </a>
          </Button>
          <p className="mt-8 text-sm text-muted">© 2023 Excelhero.de</p>
        </div>
      </section>
    </main>
  );
}

export function WebinarPivotDateienPage() {
  return (
    <main>
      <PageHero kicker="" title="Vielen Dank für Deine Anmeldung!" />
      <section className="bg-paper px-5 py-14">
        <div className="mx-auto max-w-2xl space-y-8 text-[15px] leading-relaxed text-ink/85">
          <p>
            Klicke hier um die Begleitdatei herunterzuladen:
            <br />
            <a
              className="font-semibold text-excel-ink underline"
              href="https://excelhero.de/wp-content/uploads/Pivot-Tabellen-Workshop.xlsx"
            >
              https://excelhero.de/wp-content/uploads/Pivot-Tabellen-Workshop.xlsx
            </a>
          </p>
          <p>
            Klicke hier um die Gratis Excel Vorlagen herunterzuladen:
            <br />
            <a
              className="font-semibold text-excel-ink underline"
              href="https://excelhero.de/wp-content/uploads/Excel-Vorlagen-Excelhero.de-1.1.zip"
            >
              https://excelhero.de/wp-content/uploads/Excel-Vorlagen-Excelhero.de-1.1.zip
            </a>
          </p>
          <p className="font-semibold text-ink">
            Die Begleitdatei und die Gratis Excel Vorlagen sollten zudem in ca. 5 Minuten in einem
            Postfach erscheinen
          </p>
          <p className="text-sm text-muted">© 2023 Excelhero.de</p>
        </div>
      </section>
    </main>
  );
}

const POTENZIAL_INTRO = {
  title: "Zeiteinsparpotenzial von Excel kennenlernen",
  duration: "2min",
  video:
    "https://www.youtube.com/embed/awbNqcChhRM?rel=0&modestbranding=1&controls=1&showinfo=0&fs=1&wmode=transparent",
};

const POTENZIAL = [
  {
    title: "Datenauswertung mit Pivot-Tabellen, ganz ohne Funktionen",
    duration: "7min",
    image: "https://excelhero.de/wp-content/uploads/Pivot-Tabellen2.jpg",
    video: "https://www.youtube.com/embed/GMDtl_7Z0Bg?rel=0&modestbranding=1&controls=1&showinfo=0&fs=1&wmode=transparent",
    body: "50.000 Datensätze in unter einer Minute auswerten und in Grafiken verwandeln.",
  },
  {
    title: "Daten abrufen und transformieren mit Power-Query",
    duration: "2min",
    image: "https://excelhero.de/wp-content/uploads/Power-Query.jpg",
    video: "https://www.youtube.com/embed/zmP4P8aSuzA?rel=0&modestbranding=1&controls=1&showinfo=0&fs=1&wmode=transparent",
    body: "Daten aus kompletten Ordner abrufen, aufbereiten und wenn neue Dateien dazukommen einfach per Mausklick aktualisieren.",
  },
  {
    title: "Mit Makros Arbeitsschritte aufnehmen und abspielen",
    duration: "2min",
    image: "https://excelhero.de/wp-content/uploads/Makros-Icon.jpg",
    video: "https://www.youtube.com/embed/n8x9RQhpnUA?rel=0&modestbranding=1&controls=1&showinfo=0&fs=1&wmode=transparent",
    body: "Wiederkehrende Abläufe aufnehmen und per Knopfdruck wieder ausführen. Copy&Paste ade!",
  },
  {
    title: "Mit VBA die volle Kontrolle über Excel & Office erlangen",
    duration: "",
    image: "https://excelhero.de/wp-content/uploads/VBA.jpg",
    video: "https://www.youtube.com/embed/GdqX8SQP40E?rel=0&modestbranding=1&controls=1&showinfo=0&fs=1&wmode=transparent",
    body: "Upload von Daten aus Excel wieder zurück in Datenbanken? Automatische Erstellung von PowerPoints mit Excel Grafiken? Kein Problem!",
  },
  {
    title: "Maximale Zeitersparnis durch effektive Verkettung der einzelnen Tools",
    duration: "3min",
    image: "https://excelhero.de/wp-content/uploads/Kette.jpg",
    video: "https://www.youtube.com/embed/yDo4Ar5WpPQ?rel=0&modestbranding=1&controls=1&showinfo=0&fs=1&wmode=transparent",
    body: "Daten aus Ordnern werden mit Power Query abgerufen und in Form gebracht. Diese Daten werden mit Pivot-Tabellen ausgewertet und in Pivot-Charts verwandelt. Mit Hilfe von VBA werden per Knopfdruck, die Datenabfragen und somit auch die Pivot-Tabellen & Charts aktualisiert. Abschließend wird eine Power Point Präsentationen, in der sich eine verknüpfte Grafik befindet geöffnet, aktualisiert und als PDF abgespeichert.",
  },
] as const;

export function ExcelPotenzialPage() {
  return (
    <main>
      <PageHero
        kicker="Excel Potenzial"
        title="Mit diesen Tools automatisierst Du Deine Arbeit!"
        lead="Gibt es bei Dir sich regelmäßig wiederholende Arbeitsabläufe? Dann lassen sich diese evtl. mit Hilfe der unten vorgestellten Tools automatisieren oder zu mindestens stark abkürzen."
      />
      <section className="bg-paper px-5 py-14">
        <div className="mx-auto max-w-3xl">
          <Video src={POTENZIAL_INTRO.video} title={POTENZIAL_INTRO.title} />
          <h2 className="mt-10 font-display text-2xl font-semibold text-ink">Die wichtigsten Tools in Aktion</h2>
          <p className="mt-4 font-display text-lg font-semibold text-ink">{POTENZIAL_INTRO.title}</p>
          <p className="mt-1 text-sm font-semibold text-excel-ink">Dauer {POTENZIAL_INTRO.duration}</p>
          <div className="mt-8 space-y-12">
            {POTENZIAL.map((item) => (
              <article key={item.video}>
                <img src={item.image} alt="" className="mb-4 h-16 w-auto" />
                <h3 className="font-display text-xl font-semibold text-ink">{item.title}</h3>
                {item.duration ? (
                  <p className="mt-1 text-sm font-semibold text-excel-ink">Dauer: {item.duration}</p>
                ) : null}
                {item.body ? <p className="mt-2 text-[15px] leading-relaxed text-ink/85">{item.body}</p> : null}
                <div className="mt-4">
                  <Video src={item.video} title={item.title} />
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 rounded-xl bg-navy px-6 py-8 text-paper">
            <p className="font-display text-xl font-semibold">Sind diese Tools bei Dir noch nicht im Einsatz?</p>
            <p className="mt-2 text-paper/80">
              … dann verlier keine Zeit und bring Deine Excel-Fähigkeiten auf das nächste Level!
            </p>
            <Button asChild size="lg" className="mt-6">
              <Link to="/excel-online-kurse">Zum Kursprogramm »</Link>
            </Button>
          </div>
          <p className="mt-8 text-sm text-muted">© 2023 Excelhero.de</p>
        </div>
      </section>
    </main>
  );
}

export function ExcelKombinationVideoPage() {
  return (
    <main>
      <section className="bg-paper px-5 py-14">
        <div className="mx-auto max-w-3xl">
          <img
            src="https://excelhero.de/wp-content/uploads/excelhero-black-smaller.png"
            alt="Excelhero"
            className="h-12 w-auto"
          />
          <h1 className="mt-8 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Wie du das Maximum aus Excel herausholst und dir massiv viel Zeit einsparst...
          </h1>
          <h2 className="mt-3 font-display text-xl text-ink/80">Excel Tools in Kombination</h2>
          <div className="mt-8">
            <Video
              src="https://player.vimeo.com/video/276076437?portrait=1&title=1&color=288330&byline=1"
              title="Excel Tools in Kombination"
            />
          </div>
          <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-ink/85">
            <p>
              Würdest du gerne schnell &amp; effizient mit Excel arbeiten und deine alltäglichen Aufgaben
              automatisieren?
            </p>
            <p>
              Ich hoffe in diesem Video konnte ich dir schon bereits ein großes Stück dabei weiterhelfen
              einen Überblick davon zu bekommen wie man bei Excel viel Zeit einsparen kann.
            </p>
            <p>
              Wenn du <strong>SOFORT Ergebnisse haben willst,</strong> dann habe ich einen Vorschlag für
              dich: Ich werde dir <strong>kostenlos</strong> dabei helfen einen Schritt-für-Schritt Plan
              maßgeschneidert für deine Situation zu entwickeln und dir zeigen wie man die unterschiedlichen
              Tools von Excel geschickt kombiniert um massiv viel Zeit bei der Arbeit einzusparen – alles,
              was du JETZT dafür tun musst, ist <strong>auf diesen Button hier zu klicken:</strong>
            </p>
          </div>
          <Button asChild size="lg" className="mt-6">
            <a href="/private-session">➜ Wie ich dir helfen kann...</a>
          </Button>
          <p className="mt-3 text-sm text-muted">Klicke auf den Button, um mehr zu erfahren!</p>
          <p className="mt-8 text-[15px] leading-relaxed text-ink/85">
            Ich freue mich darauf, dich schon bald <strong>persönlich</strong> beraten zu dürfen!
          </p>
          <p className="mt-4 font-display text-lg text-ink">- Daniel -</p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Alice_Sara_Ott_-_Signature.jpg/320px-Alice_Sara_Ott_-_Signature.jpg"
            alt=""
            className="mt-2 h-16 w-auto"
          />
          <div className="mt-6 flex items-center gap-4">
            <img
              src="https://excelhero.de/wp-content/uploads/danielkogan-tiny.png"
              alt="Daniel Kogan"
              className="size-16 rounded-full object-cover"
            />
            <div>
              <p className="font-display font-semibold text-ink">Daniel Kogan</p>
              <p className="text-sm text-muted">Experte für effizientes Arbeiten mit Excel</p>
            </div>
          </div>
          <p className="mt-10 text-sm text-muted">
            Copyright © 2019{" "}
            <Link to="/impressum" className="underline">
              Impressum
            </Link>{" "}
            &amp;{" "}
            <Link to="/datenschutzerklaerung" className="underline">
              Datenschutzerklärung
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

const FREE_TOPICS = [
  "#1 Excel Tabellen",
  "#2 Pivot-Tabellen",
  "#3 Power-Query",
  "#4 Makros",
  "#5 VBA/Excel Programmierung",
  "#6 Alle Tools in Kombination",
];

export function KostenloserExcelKursPage() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    if (!name || !email) return;
    window.location.assign("/videoserie-ty");
  }

  return (
    <main>
      <section className="bg-navy px-5 py-14 text-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Kostenloser Excel Videokurs
            </h1>
            <h2 className="mt-4 text-xl italic text-paper/80">
              Lerne das enorme Potenzial von Excel kennen!
            </h2>
            <ul className="mt-6 space-y-2 text-lg font-semibold">
              {FREE_TOPICS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <Video
            src="https://www.youtube.com/embed/m62rRnHC35s?rel=0&modestbranding=1&controls=1&showinfo=1&fs=1&wmode=transparent"
            title="Kostenloser Excel Videokurs"
          />
        </div>
      </section>
      <section className="bg-paper px-5 py-14">
        <form
          onSubmit={onSubmit}
          className="mx-auto max-w-xl space-y-4 rounded-xl bg-card p-6 shadow-card"
        >
          <h2 className="font-display text-2xl font-semibold text-ink">Jetzt anmelden »</h2>
          <label className="block">
            <span className="sr-only">Vorname</span>
            <input
              name="name"
              required
              placeholder="Vorname"
              className="h-12 w-full rounded-lg border border-line bg-paper px-3 text-ink outline-none ring-excel focus:ring-2"
            />
          </label>
          <label className="block">
            <span className="sr-only">Email</span>
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className="h-12 w-full rounded-lg border border-line bg-paper px-3 text-ink outline-none ring-excel focus:ring-2"
            />
          </label>
          <Button type="submit" size="lg" className="w-full">
            Jetzt zum Kurs anmelden »
          </Button>
        </form>
      </section>
    </main>
  );
}

export function DatenZugriffPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "").trim();
    const subject = "Datenzugriffsanfrage";
    const body = `E-Mail-Adresse: ${email}\n\nMit diesem Formular können Sie eine Anfrage auf ihre Daten bei excelhero.de stellen.`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <main>
      <PageHero kicker="" title="Datenzugriffsanfrage" />
      <section className="bg-paper px-5 py-14">
        <div className="mx-auto max-w-xl">
          <p className="text-[15px] leading-relaxed text-ink/85">
            Mit diesem Formular können Sie eine Anfrage auf ihre Daten bei excelhero.de stellen.
          </p>
          {sent ? (
            <p className="mt-6 rounded-xl bg-card p-6 font-medium text-ink shadow-card">
              Erfolgreich. Du wirst in Kürze eine E-Mail mit deinen Daten erhalten.
            </p>
          ) : (
            <form onSubmit={onSubmit} className="mt-6 space-y-4 rounded-xl bg-card p-6 shadow-card">
              <label className="block" htmlFor="wpgdprc-form__email">
                <span className="mb-1.5 block text-sm font-medium text-ink">Deine E-Mail-Adresse</span>
                <input
                  id="wpgdprc-form__email"
                  name="email"
                  type="email"
                  required
                  className="h-11 w-full max-w-[300px] rounded-lg border border-line bg-paper px-3 text-ink outline-none ring-excel focus:ring-2"
                />
              </label>
              <p className="text-sm leading-relaxed text-muted">
                Mit der Nutzung dieses Formulars erklärst du dich mit der Speicherung und Verarbeitung
                deiner Daten durch diese Website einverstanden.
              </p>
              <Button type="submit">Senden</Button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}

export function MapPage() {
  return (
    <main>
      <PageHero kicker="" title="Map" />
      <section className="bg-paper px-5 py-8">
        <div className="mx-auto max-w-6xl">
          <iframe
            src="https://embed.kumu.io/188f58a036d7e20a9a2444fb9a9fab51?settings=0"
            title="Excelhero Map"
            className="h-[700px] w-full rounded-xl border-0 bg-card shadow-card"
          />
        </div>
      </section>
    </main>
  );
}

export function MailTwilioPage() {
  return (
    <main>
      <PageHero kicker="" title="mail-twilio" />
    </main>
  );
}
