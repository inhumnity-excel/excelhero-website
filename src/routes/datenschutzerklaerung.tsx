import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageHero } from "@/components/layout/page-hero";
import { ExtLink } from "@/components/privacy/ext-link";
import { OptOut } from "@/components/privacy/opt-out";
import { SITE } from "@/lib/content";

export const Route = createFileRoute("/datenschutzerklaerung")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung | Excelhero" },
      {
        name: "description",
        content:
          "Datenschutzerklärung von Excelhero: Verantwortlicher, Cookies, Digistore24, Thinkific, Google Analytics, Newsletter und Betroffenenrechte.",
      },
    ],
  }),
});

const TOC = [
  ["verantwortlicher", "Name und Anschrift des Verantwortlichen"],
  ["grundlegendes", "Grundlegendes"],
  ["zugriffsdaten", "Zugriffsdaten"],
  ["ssl", "SSL-Verschlüsselung"],
  ["cookies", "Reichweitenmessung & Cookies"],
  ["erfassung", "Erfassung und Verarbeitung personenbezogener Daten"],
  ["bestellvorgang", "Bestellvorgang"],
  ["thinkific", "Benutzerkonto bei der Kursplattform Thinkific"],
  ["kontaktdaten", "Umgang mit Kontaktdaten"],
  ["kommentare", "Umgang mit Kommentaren und Beiträgen"],
  ["analytics", "Google Analytics"],
  ["facebook-plugins", "Nutzung von Social-Media-Plugins von Facebook"],
  ["newsletter", "Newsletter-Abonnement"],
  ["webinar", "Webinar"],
  ["social", "Onlinepräsenzen in sozialen Medien"],
  ["dritte", "Einbindung von Diensten und Inhalten Dritter"],
  ["videos", "Hinweise zur Einbindung von Videos"],
  ["youtube", "YouTube"],
  ["vimeo", "Vimeo"],
  ["ajax", "Google Ajax & jQuery Bibliotheken"],
  ["fonts", "Google Fonts"],
  ["zapier", "Zapier"],
  ["adroll", "Adroll"],
  ["remarketing", "Google-Re/Marketing-Services"],
  ["pixel", "Facebook-Pixel, Custom Audiences und Facebook-Conversion"],
  ["auskunft", "Auskunftsrecht"],
  ["berichtigung", "Recht auf Berichtigung"],
  ["einschraenkung", "Recht auf Einschränkung der Verarbeitung"],
  ["loeschung", "Recht auf Löschung"],
  ["info-dritte", "Information an Dritte"],
  ["unterrichtung", "Recht auf Unterrichtung"],
  ["uebertragbarkeit", "Recht auf Datenübertragbarkeit"],
  ["widerspruch", "Widerspruchsrecht"],
  ["widerruf", "Recht auf Widerruf der datenschutzrechtlichen Einwilligungserklärung"],
] as const;

function PrivacyPage() {
  return (
    <main>
      <PageHero
        kicker="Rechtliches"
        title="Datenschutzerklärung"
        lead="Diese Datenschutzerklärung soll in allgemein verständlicher Form den Nutzer darüber aufklären, was auf der jeweiligen Internetseite mit seinen Daten passiert."
      />
      <section className="bg-paper px-5 py-14">
        <div className="mx-auto max-w-3xl space-y-10 text-[15px] leading-relaxed text-ink/85">
          <p>
            Dies betrifft zum einen die Datenverarbeitung des Nutzers selbst, als
            auch die Verwendung von Drittservices wie Google Analytics etc.
          </p>
          <p>
            Excelhero.de speichert personenbezogene Daten im technisch notwendigen
            Umfang sowie für Werbezwecke: Das bedeutet, wenn Sie Kontakt- und
            sämtliche anderen Formulare auf dieser Seite benutzen, werden Ihr Name
            und Ihre E-Mail gespeichert, damit ich Ihnen antworten kann. Ihr
            Webseitenbesuch wird zudem aufgezeichnet, damit ich mein
            Webseitenangebot stetig für Sie optimieren und anpassen kann. Zudem
            werden Ihre Daten mit Hilfe von Drittanbietern zu Werbezwecken
            verwendet. Mit diesen Drittanbietern ist, wenn möglich, bereits ein
            Datenverarbeitungsvertrag abgeschlossen. In keinem Fall werden die
            erhobenen Daten verkauft.
          </p>

          <nav aria-label="Inhalt" className="rounded-xl bg-card p-5 shadow-card">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-muted">
              Inhalt
            </p>
            <ol className="mt-3 columns-1 gap-x-8 text-sm sm:columns-2">
              {TOC.map(([id, label]) => (
                <li key={id} className="break-inside-avoid py-0.5">
                  <a href={`#${id}`} className="text-excel-ink hover:underline">
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <Section id="verantwortlicher" title="Name und Anschrift des Verantwortlichen">
            <p>
              Der Verantwortliche im Sinne der Datenschutz-Grundverordnung und
              anderer nationaler Datenschutzgesetze der Mitgliedsstaaten sowie
              sonstiger datenschutzrechtlicher Bestimmungen ist:
            </p>
            <p className="mt-3">
              Daniel Kogan
              <br />
              {SITE.company}
              <br />
              {SITE.addressLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
              Telefon: {SITE.phone}
              <br />
              E-Mail: {SITE.email}
              <br />
              Webseite: {SITE.website}
            </p>
          </Section>

          <Section id="grundlegendes" title="Grundlegendes">
            <p>
              Diese Datenschutzerklärung soll die Nutzer dieser Website über die
              Art, den Umfang und den Zweck der Erhebung und Verwendung
              personenbezogener Daten durch den Websitebetreiber informieren.
            </p>
            <p className="mt-3">
              Der Websitebetreiber nimmt Ihren Datenschutz sehr ernst und
              behandelt Ihre personenbezogenen Daten vertraulich und entsprechend
              der gesetzlichen Vorschriften. Da durch neue Technologien und die
              ständige Weiterentwicklung dieser Webseite Änderungen an dieser
              Datenschutzerklärung vorgenommen werden können, empfehlen wir Ihnen
              sich die Datenschutzerklärung in regelmäßigen Abständen wieder
              durchzulesen.
            </p>
            <p className="mt-3">
              Definitionen der verwendeten Begriffe (z.&nbsp;B. „personenbezogene
              Daten“ oder „Verarbeitung“) finden Sie in Art. 4 DSGVO.
            </p>
          </Section>

          <Section id="zugriffsdaten" title="Zugriffsdaten">
            <p>
              Wir, der Websitebetreiber bzw. Seitenprovider, erheben aufgrund
              unseres berechtigten Interesses (s. Art. 6 Abs. 1 lit. f DSGVO)
              Daten über Zugriffe auf die Website und speichern diese als
              „Server-Logfiles“ auf dem Server der Website ab. Folgende Daten
              werden so protokolliert:
            </p>
            <Ul
              items={[
                "Besuchte Website",
                "Uhrzeit zum Zeitpunkt des Zugriffes",
                "Menge der gesendeten Daten in Byte",
                "Quelle/Verweis, von welchem Sie auf die Seite gelangten",
                "Verwendeter Browser",
                "Verwendetes Betriebssystem",
                "Verwendete IP-Adresse",
              ]}
            />
            <p className="mt-3">
              Die Server-Logfiles werden für maximal 7 Tage gespeichert und
              anschließend gelöscht. Die Speicherung der Daten erfolgt aus
              Sicherheitsgründen, um z.&nbsp;B. Missbrauchsfälle aufklären zu
              können. Müssen Daten aus Beweisgründen aufgehoben werden, sind sie
              so lange von der Löschung ausgenommen, bis der Vorfall endgültig
              geklärt ist.
            </p>
            <p className="mt-3">
              Unser Hosting Provider:
              <br />
              Mittwald CM Service GmbH & Co. KG
              <br />
              Königsberger Straße 4–6
              <br />
              32339 Espelkamp
              <br />
              <ExtLink href="https://www.mittwald.de/kontakt-impressum">
                https://www.mittwald.de/kontakt-impressum
              </ExtLink>
            </p>
            <p className="mt-3">
              Wir haben mit dem Anbieter einen entsprechenden Vertrag zur
              Auftragsdatenverarbeitung abgeschlossen.
            </p>
          </Section>

          <Section id="ssl" title="SSL-Verschlüsselung">
            <p>
              Um Ihre übermittelten Daten bestmöglich zu schützen, nutzen die
              Websitebetreiber eine SSL-Verschlüsselung. Sie erkennen derart
              verschlüsselte Verbindungen an dem Präfix „https://“ im Seitenlink
              in der Adresszeile Ihres Browsers. Unverschlüsselte Seiten sind
              durch „http://“ gekennzeichnet.
            </p>
            <p className="mt-3">
              Sämtliche Daten, welche Sie an diese Website übermitteln – etwa bei
              Anfragen oder Logins – können dank SSL-Verschlüsselung nicht von
              Dritten gelesen werden.
            </p>
          </Section>

          <Section id="cookies" title="Reichweitenmessung & Cookies">
            <p>
              Diese Website verwendet Cookies zur pseudonymisierten
              Reichweitenmessung, die entweder von unserem Server oder dem Server
              Dritter an den Browser des Nutzers übertragen werden. Bei Cookies
              handelt es sich um kleine Dateien, welche auf Ihrem Endgerät
              gespeichert werden. Ihr Browser greift auf diese Dateien zu. Durch
              den Einsatz von Cookies erhöht sich die Benutzerfreundlichkeit und
              Sicherheit dieser Website.
            </p>
            <p className="mt-3">
              Falls Sie nicht möchten, dass Cookies zur Reichweitenmessung auf
              Ihrem Endgerät gespeichert werden, können Sie dem Einsatz dieser
              Dateien hier widersprechen:
            </p>
            <Ul
              items={[
                <span key="n">
                  Cookie-Deaktivierungsseite der Netzwerkwerbeinitiative:{" "}
                  <ExtLink href="http://optout.networkadvertising.org/?c=1#!/">
                    http://optout.networkadvertising.org/?c=1#!/
                  </ExtLink>
                </span>,
                <span key="us">
                  Cookie-Deaktivierungsseite der US-amerikanischen Website:{" "}
                  <ExtLink href="http://optout.aboutads.info/?c=2#!/">
                    http://optout.aboutads.info/?c=2#!/
                  </ExtLink>
                </span>,
                <span key="eu">
                  Cookie-Deaktivierungsseite der europäischen Website:{" "}
                  <ExtLink href="http://optout.networkadvertising.org/?c=1#!/">
                    http://optout.networkadvertising.org/?c=1#!/
                  </ExtLink>
                </span>,
              ]}
            />
            <p className="mt-3">
              Gängige Browser bieten die Einstellungsoption, Cookies nicht
              zuzulassen. Hinweis: Es ist nicht gewährleistet, dass Sie auf alle
              Funktionen dieser Website ohne Einschränkungen zugreifen können,
              wenn Sie entsprechende Einstellungen vornehmen.
            </p>
          </Section>

          <Section id="erfassung" title="Erfassung und Verarbeitung personenbezogener Daten">
            <p>
              Der Websitebetreiber erhebt, nutzt und gibt Ihre personenbezogenen
              Daten nur dann weiter, wenn dies im gesetzlichen Rahmen erlaubt ist
              oder Sie in die Datenerhebung einwilligen.
            </p>
            <p className="mt-3">
              Als personenbezogene Daten gelten sämtliche Informationen, welche
              dazu dienen, Ihre Person zu bestimmen und welche zu Ihnen
              zurückverfolgt werden können – also beispielsweise Ihr Name, Ihre
              E-Mail-Adresse und Telefonnummer.
            </p>
            <p className="mt-3">
              Diese Website können Sie auch besuchen, ohne Angaben zu Ihrer Person
              zu machen. Zur Verbesserung unseres Online-Angebotes speichern wir
              jedoch (ohne Personenbezug) Ihre Zugriffsdaten auf diese Website. Zu
              diesen Zugriffsdaten gehören z.&nbsp;B. die von Ihnen angeforderte
              Datei oder der Name Ihres Internet-Providers. Durch die
              Anonymisierung der Daten sind Rückschlüsse auf Ihre Person nicht
              möglich.
            </p>
            <p className="mt-3">
              Wir verarbeiten personenbezogene Daten nur nach ausdrücklicher
              Erlaubnis der betreffenden Nutzer und unter Einhaltung der geltenden
              Datenschutzbestimmungen.
            </p>
            <p className="mt-3">
              Die Verarbeitung der personenbezogenen Daten erfolgt aufgrund
              unseres berechtigten Interesses zur Erfüllung unserer vertraglich
              vereinbarten Leistungen und zur Optimierung unseres
              Online-Angebotes sowie zu Werbezwecken.
            </p>
          </Section>

          <Section id="bestellvorgang" title="Bestellvorgang">
            <p>
              Der gesamte Bestellvorgang wird über den Bezahlanbieter Digistore24
              abgewickelt. Sie kaufen unsere Produkte nicht bei uns, sondern
              direkt über Digistore24. Wir übertragen aus technischen Gründen und
              um den Schutz Ihrer Zahlungsinformationen zu gewährleisten die
              Funktion des Bestellvorgangs an Digistore24.
            </p>
            <p className="mt-3">
              Bei Digistore24 werden die Daten, welche im Rahmen einer
              Bestellabwicklung von den Kunden eingegeben werden, gespeichert.
              Dazu gehören unter anderem:
            </p>
            <p className="mt-3 font-medium text-ink">Bei Privatpersonen:</p>
            <Ul
              items={[
                "Name, Vorname",
                "Adresse",
                "E-Mail-Adresse",
                "Bezahlinformationen",
                "IP-Adresse",
              ]}
            />
            <p className="mt-3 font-medium text-ink">Bei Unternehmen:</p>
            <Ul
              items={[
                "Firmenname",
                "Name, Vorname",
                "Anschrift",
                "E-Mail-Adresse",
                "Telefonnummer",
                "Bezahlinformationen",
                "IP-Adresse",
              ]}
            />
            <p className="mt-3">
              Jene Daten, welche zur Auslieferung oder Auftragsabwicklung zwingend
              notwendig sind, werden an Digistore24 weitergegeben. Sobald die
              Aufbewahrung Ihrer Daten nicht mehr erforderlich oder gesetzlich
              geboten ist, werden diese gelöscht.
            </p>
            <p className="mt-3">
              Mit Digistore24 haben wir keinen Datenverarbeitungsvertrag
              abgeschlossen, da Sie die Produkte nicht bei uns kaufen, sondern bei
              Digistore24 ({SITE.digistore.reseller}). Für weitere Informationen,
              welche Daten noch im Detail erhoben werden, kontaktieren Sie bitte
              Digistore24 direkt.
            </p>
          </Section>

          <Section id="thinkific" title="Benutzerkonto bei der Kursplattform Thinkific">
            <p>
              Um über dieses Angebot auf getätigte Bestellungen Zugriff zu
              erlangen, muss jeder Kunde ein passwortgeschütztes Kundenkonto bei
              unserem Kursplattformanbieter Thinkific Labs Inc., #400 – 369
              Terminal Ave, Vancouver, BC, V6A 4C4 einrichten. Über dieses
              Benutzerkonto erhält der Nutzer Zugriff auf seine gebuchten Kurse.
              Dieses Benutzerkonto beinhaltet eine Übersicht über getätigte
              Bestellungen, den Benutzernamen, das Benutzerpasswort, die
              E-Mail-Adresse, ein Profilbild (falls die E-Mail-Adresse mit dem
              Service Gravatar verbunden ist) sowie Informationen über den
              Lernfortschritt.
            </p>
            <p className="mt-3">
              Der Betreiber übernimmt keine Haftung für Passwortmissbrauch, sofern
              dieser nicht von dem Betreiber selbst verursacht wurde.
            </p>
            <p className="mt-3">
              Die Benutzerkontodaten werden zeitlich unbegrenzt gespeichert, um
              einen zeitlich unbegrenzten Zugriff auf die Lerninhalte zu
              gewährleisten. Die Benutzerkontodaten können jedoch vom Benutzer
              nach Login selbst geändert und gelöscht werden. Dadurch erlischt der
              Zugriff auf die erworbenen Lerninhalte.
            </p>
            <p className="mt-3">
              Alternativ können Sie die Löschung der Daten direkt bei uns
              anfragen (siehe Punkt Löschung der Daten).
            </p>
            <p className="mt-3">
              Weitere Informationen zum Datenschutz bei Thinkific finden Sie
              unter:{" "}
              <ExtLink href="https://www.thinkific.com/resources/privacy-policy/">
                https://www.thinkific.com/resources/privacy-policy/
              </ExtLink>
            </p>
          </Section>

          <Section id="kontaktdaten" title="Umgang mit Kontaktdaten">
            <p>
              Nehmen Sie mit uns als Websitebetreiber durch die angebotenen
              Kontaktmöglichkeiten Verbindung auf, werden Ihre Angaben gespeichert,
              damit auf diese zur Bearbeitung und Beantwortung Ihrer Anfrage
              zurückgegriffen werden kann. Ohne Ihre Einwilligung werden diese
              Daten nicht an Dritte weitergegeben.
            </p>
          </Section>

          <Section id="kommentare" title="Umgang mit Kommentaren und Beiträgen">
            <p>
              Hinterlassen Sie auf dieser Website einen Beitrag oder Kommentar,
              wird Ihre IP-Adresse gespeichert. Dies erfolgt aufgrund unserer
              berechtigten Interessen im Sinne des Art. 6 Abs. 1 lit. f DSGVO und
              dient der Sicherheit von uns als Websitebetreiber: Denn sollte Ihr
              Kommentar gegen geltendes Recht verstoßen, können wir dafür belangt
              werden, weshalb wir ein Interesse an der Identität des Kommentar-
              bzw. Beitragsautors haben.
            </p>
            <p className="mt-3">
              Aktuell ist es nicht möglich, auf unserer Webseite Kommentare zu
              Beiträgen abzugeben.
            </p>
          </Section>

          <Section id="analytics" title="Google Analytics">
            <p>
              Diese Website nutzt aufgrund unserer berechtigten Interessen zur
              Optimierung und Analyse unseres Online-Angebots im Sinne des Art. 6
              Abs. 1 lit. f DSGVO den Dienst „Google Analytics“, welcher von der
              Google Inc. (1600 Amphitheatre Parkway, Mountain View, CA 94043,
              USA) angeboten wird. Der Dienst (Google Analytics) verwendet
              „Cookies“ – Textdateien, welche auf Ihrem Endgerät gespeichert
              werden. Die durch die Cookies gesammelten Informationen werden im
              Regelfall an einen Google-Server in den USA gesandt und dort
              gespeichert.
            </p>
            <p className="mt-3">
              Google LLC hält das europäische Datenschutzrecht ein und ist unter
              dem Privacy-Shield-Abkommen zertifiziert:{" "}
              <ExtLink href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active">
                https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active
              </ExtLink>
            </p>
            <p className="mt-3">
              Auf dieser Website greift die IP-Anonymisierung. Die IP-Adresse der
              Nutzer wird innerhalb der Mitgliedsstaaten der EU und des
              Europäischen Wirtschaftsraums und in den anderen Vertragsstaaten des
              Abkommens gekürzt. Nur in Einzelfällen wird die IP-Adresse zunächst
              ungekürzt in die USA an einen Server von Google übertragen und dort
              gekürzt. Durch diese Kürzung entfällt der Personenbezug Ihrer
              IP-Adresse. Die vom Browser übermittelte IP-Adresse des Nutzers wird
              nicht mit anderen von Google gespeicherten Daten kombiniert.
            </p>
            <p className="mt-3">
              Im Rahmen der Vereinbarung zur Auftragsdatenverarbeitung, welche wir
              als Websitebetreiber mit der Google Inc. geschlossen haben, erstellt
              diese mithilfe der gesammelten Informationen eine Auswertung der
              Websitenutzung und der Websiteaktivität und erbringt mit der
              Internetnutzung verbundene Dienstleistungen.
            </p>
            <p className="mt-3">
              Die von Google in unserem Auftrag erhobenen Daten werden genutzt, um
              die Nutzung unseres Online-Angebots durch die einzelnen Nutzer
              auswerten zu können, z.&nbsp;B. um Reports über die Aktivität auf
              der Website zu erstellen, um unser Online-Angebot zu verbessern.
            </p>
            <p className="mt-3">
              Die pseudonymisierten Nutzungsdaten werden von Google für die Dauer
              von 50 Monaten aufbewahrt.
            </p>
            <p className="mt-3">
              Sie haben die Möglichkeit, die Speicherung der Cookies auf Ihrem
              Gerät zu verhindern, indem Sie in Ihrem Browser entsprechende
              Einstellungen vornehmen. Es ist nicht gewährleistet, dass Sie auf
              alle Funktionen dieser Website ohne Einschränkungen zugreifen
              können, wenn Ihr Browser keine Cookies zulässt.
            </p>
            <p className="mt-3">
              Weiterhin können Sie durch ein Browser-Plugin verhindern, dass die
              durch Cookies gesammelten Informationen (inklusive Ihrer IP-Adresse)
              an die Google Inc. gesendet und von der Google Inc. genutzt werden.
              Folgender Link führt Sie zu dem entsprechenden Plugin:{" "}
              <ExtLink href="https://tools.google.com/dlpage/gaoptout?hl=de">
                https://tools.google.com/dlpage/gaoptout?hl=de
              </ExtLink>
            </p>
            <p className="mt-3">
              Alternativ verhindern Sie mit einem Klick auf folgenden Link, dass
              Google Analytics innerhalb dieser Website Daten über Sie erfasst.
            </p>
            <OptOut
              storageKey="excelhero-ga-optout"
              label="Hier klicken, um von Google Analytics ausgeschlossen zu werden."
            />
            <p>
              Mit dem Klick auf obigen Link laden Sie ein „Opt-Out-Cookie“ herunter.
              Ihr Browser muss die Speicherung von Cookies also hierzu
              grundsätzlich erlauben. Löschen Sie Ihre Cookies regelmäßig, ist ein
              erneuter Klick auf den Link bei jedem Besuch dieser Website vonnöten.
            </p>
            <p className="mt-3">
              Hier finden Sie weitere Informationen zur Datennutzung durch die
              Google Inc.:
            </p>
            <Ul
              items={[
                <span key="p">
                  <ExtLink href="https://policies.google.com/privacy/partners?hl=de">
                    https://policies.google.com/privacy/partners?hl=de
                  </ExtLink>{" "}
                  (Daten, die von Google-Partnern erhoben werden)
                </span>,
                <span key="a">
                  <ExtLink href="https://adssettings.google.de/authenticated">
                    https://adssettings.google.de/authenticated
                  </ExtLink>{" "}
                  (Einstellungen über Werbung, die Ihnen angezeigt wird)
                </span>,
                <span key="c">
                  <ExtLink href="https://policies.google.com/technologies/ads?hl=de">
                    https://policies.google.com/technologies/ads?hl=de
                  </ExtLink>{" "}
                  (Verwendung von Cookies in Anzeigen)
                </span>,
              ]}
            />
          </Section>

          <Section id="facebook-plugins" title="Nutzung von Social-Media-Plugins von Facebook">
            <p>
              Aufgrund unseres berechtigten Interesses an der Analyse, Optimierung
              und dem Betrieb unseres Online-Angebotes (im Sinne des Art. 6 Abs. 1
              lit. f DSGVO) verwendet diese Website das Facebook-Social-Plugin,
              welches von der Facebook Inc. (1 Hacker Way, Menlo Park, California
              94025, USA) betrieben wird. Erkennbar sind die Einbindungen an dem
              Facebook-Logo bzw. an den Begriffen „Like“, „Gefällt mir“, „Teilen“
              in den Farben Facebooks (Blau und Weiß). Informationen zu allen
              Facebook-Plugins finden Sie über den folgenden Link:{" "}
              <ExtLink href="https://developers.facebook.com/docs/plugins/">
                https://developers.facebook.com/docs/plugins/
              </ExtLink>
            </p>
            <p className="mt-3">
              Facebook Inc. hält das europäische Datenschutzrecht ein und ist
              unter dem Privacy-Shield-Abkommen zertifiziert:{" "}
              <ExtLink href="https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active">
                https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active
              </ExtLink>
            </p>
            <p className="mt-3">
              Das Plugin stellt eine direkte Verbindung zwischen Ihrem Browser und
              den Facebook-Servern her. Der Websitebetreiber hat keinerlei
              Einfluss auf die Natur und den Umfang der Daten, welche das Plugin
              an die Server der Facebook Inc. übermittelt. Informationen dazu
              finden Sie hier:{" "}
              <ExtLink href="https://www.facebook.com/help/186325668085084">
                https://www.facebook.com/help/186325668085084
              </ExtLink>
            </p>
            <p className="mt-3">
              Das Plugin informiert die Facebook Inc. darüber, dass Sie als Nutzer
              diese Website besucht haben. Es besteht hierbei die Möglichkeit,
              dass Ihre IP-Adresse gespeichert wird. Sind Sie während des Besuchs
              auf dieser Website in Ihrem Facebook-Konto eingeloggt, werden die
              genannten Informationen mit diesem verknüpft.
            </p>
            <p className="mt-3">
              Nutzen Sie die Funktionen des Plugins – etwa indem Sie einen Beitrag
              teilen oder „liken“ –, werden die entsprechenden Informationen
              ebenfalls an die Facebook Inc. übermittelt. Möchten Sie verhindern,
              dass die Facebook Inc. diese Daten mit Ihrem Facebook-Konto
              verknüpft, loggen Sie sich bitte vor dem Besuch dieser Website bei
              Facebook aus und löschen Sie die gespeicherten Cookies. Über Ihr
              Facebook-Profil können Sie weitere Einstellungen zur
              Datenverarbeitung für Werbezwecke tätigen oder der Nutzung Ihrer
              Daten für Werbezwecke widersprechen. Zu den Einstellungen gelangen
              Sie hier:
            </p>
            <Ul
              items={[
                <span key="f">
                  Profileinstellungen bei Facebook:{" "}
                  <ExtLink href="https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen">
                    https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen
                  </ExtLink>
                </span>,
                <span key="u">
                  Cookie-Deaktivierungsseite der US-amerikanischen Website:{" "}
                  <ExtLink href="http://optout.aboutads.info/?c=2#!/">
                    http://optout.aboutads.info/?c=2#!/
                  </ExtLink>
                </span>,
                <span key="e">
                  Cookie-Deaktivierungsseite der europäischen Website:{" "}
                  <ExtLink href="http://optout.networkadvertising.org/?c=1#!/">
                    http://optout.networkadvertising.org/?c=1#!/
                  </ExtLink>
                </span>,
              ]}
            />
            <p className="mt-3">
              Welche Daten, zu welchem Zweck und in welchem Umfang Facebook Daten
              erhebt, nutzt und verarbeitet und welche Rechte sowie
              Einstellungsmöglichkeiten Sie zum Schutz Ihrer Privatsphäre haben,
              können Sie in den Datenschutzrichtlinien von Facebook nachlesen:{" "}
              <ExtLink href="https://www.facebook.com/about/privacy/">
                https://www.facebook.com/about/privacy/
              </ExtLink>
            </p>
          </Section>

          <Section id="newsletter" title="Newsletter-Abonnement">
            <p>
              Der Websitebetreiber bietet Ihnen einen Newsletter an, in welchem er
              Sie über aktuelle Geschehnisse und Angebote informiert. Die Erhebung
              sonstiger personenbezogener Daten im Rahmen des Anmeldevorgangs
              dient dazu, einen Missbrauch der Dienste oder der verwendeten
              E-Mail-Adresse zu verhindern. Möchten Sie den Newsletter abonnieren,
              müssen Sie eine valide E-Mail-Adresse angeben. Wenn Sie den
              Newsletter abonnieren, erklären Sie sich mit dem Newsletter-Empfang
              und den erläuterten Verfahren einverstanden.
            </p>
            <p className="mt-3">
              Der Versand der Newsletter erfolgt mittels „ActiveCampaign“, einer
              Newsletterversandplattform des US-Anbieters ActiveCampaign Inc.,
              LLC, 1 N Dearborn, 5th Floor, Chicago, IL 60601, Vereinigte
              Staaten. Informationen über die Datenschutzbestimmungen des
              Versanddienstleisters erhalten Sie unter:{" "}
              <ExtLink href="https://www.activecampaign.com/gdpr-updates/">
                https://www.activecampaign.com/gdpr-updates/
              </ExtLink>
            </p>
            <p className="mt-3">
              ActiveCampaign Inc. hält das europäische Datenschutzrecht ein und
              ist unter dem Privacy-Shield-Abkommen zertifiziert:{" "}
              <ExtLink href="https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active">
                https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active
              </ExtLink>
            </p>
            <p className="mt-3">
              Wir haben mit dem Anbieter einen entsprechenden Vertrag zur
              Auftragsdatenverarbeitung abgeschlossen. Dabei werden bei der
              Anmeldung zum Newsletter die Daten aus der Eingabemaske übermittelt:
            </p>
            <Ul
              items={[
                "E-Mail-Adresse",
                "Vorname",
                "IP-Adresse des aufrufenden Rechners",
                "Datum und Uhrzeit der Registrierung",
                "Kontext der Registrierung (z. B. Webinar, Newsletter, Kursbestellung)",
                "Ihr Verhalten auf unserer Webseite (z. B. welche Seiten Sie wie häufig besucht haben)",
              ]}
            />
            <p className="mt-3">
              Das Ausfüllen und Abschicken eines Formulars impliziert das
              Speichern der ausgefüllten Daten, daher wird an der Stelle eines
              Formulars auf eine Einwilligung des Nutzers verzichtet.
            </p>
            <p className="mt-3">
              Die E-Mail-Adressen unserer Newsletterempfänger sowie deren weitere,
              im Rahmen dieser Hinweise beschriebenen Daten werden auf den Servern
              von ActiveCampaign in den Vereinigten Staaten gespeichert.
            </p>
            <p className="mt-3">
              ActiveCampaign verwendet diese Informationen zum Versand und zur
              Auswertung der Newsletter in meinem Auftrag. Des Weiteren kann
              ActiveCampaign nach eigenen Informationen diese Daten zur
              Optimierung oder Verbesserung der eigenen Services nutzen, z.&nbsp;B.
              zur technischen Optimierung des Versandes und der Darstellung der
              Newsletter oder für wirtschaftliche Zwecke, um zu bestimmen, aus
              welchen Ländern die Empfänger kommen. ActiveCampaign nutzt die Daten
              meiner Newsletterempfänger jedoch nicht, um diese selbst
              anzuschreiben oder an Dritte weiterzugeben.
            </p>
            <p className="mt-3">
              Auf unserer Webseite verwenden wir den ActiveCampaign-Cookie, um
              Daten über Ihr Webseitenverhalten im eingeschränkten Maße zu erheben
              und mit Ihren Daten in ActiveCampaign anzureichern. Der Zweck dieser
              Maßnahme ist, die Informationen und Angebote im Rahmen unseres
              Newsletters besser an Ihre Bedürfnisse anzupassen.
            </p>
            <OptOut
              storageKey="excelhero-ac-optout"
              label="Hier klicken, um von ActiveCampaign Tracking ausgeschlossen zu werden. (Dies umfasst nicht den Eintrag im Newsletter.)"
            />
            <p>
              Anmerkung zu externen Links: Es gibt Fälle, in denen die
              Newsletterempfänger auf die Webseiten von ActiveCampaign gelangen.
              Zum Beispiel enthalten Newsletter einen Link zum Abruf übers Web
              (etwa bei Darstellungsproblemen im E-Mail-Programm). Ferner können
              Newsletterempfänger ihre Daten, wie z.&nbsp;B. die E-Mail-Adresse,
              nachträglich korrigieren. Ebenso ist die Datenschutzerklärung von
              ActiveCampaign nur auf deren Seite abrufbar.
            </p>
            <p className="mt-3">
              In diesem Zusammenhang weise ich darauf hin, dass auf den Webseiten
              von ActiveCampaign Cookies eingesetzt und damit personenbezogene
              Daten durch ActiveCampaign, deren Partner und eingesetzte
              Dienstleister (z.&nbsp;B. Google Analytics) verarbeitet werden. Auf
              diese Datenerhebung habe ich keinen Einfluss. Weitere Informationen
              können Sie der Datenschutzerklärung von ActiveCampaign entnehmen.
              Ich weise Sie zusätzlich auf die Widerspruchsmöglichkeiten in die
              Datenerhebung zu Werbezwecken auf den Webseiten{" "}
              <ExtLink href="http://www.aboutads.info/choices/">
                www.aboutads.info/choices/
              </ExtLink>{" "}
              und{" "}
              <ExtLink href="http://www.youronlinechoices.com/">
                www.youronlinechoices.com
              </ExtLink>{" "}
              (für den europäischen Raum) hin.
            </p>
            <p className="mt-3">
              Das Abonnement des Newsletters kann durch den betroffenen Nutzer
              jederzeit gekündigt werden. Zu diesem Zweck findet sich in jedem
              Newsletter ein entsprechender Link.
            </p>
            <p className="mt-3">
              Wir können die ausgetragenen E-Mail-Adressen bis zu drei Jahren auf
              Grundlage unserer berechtigten Interessen speichern, bevor wir sie
              für Zwecke des Newsletterversandes löschen, um eine ehemals gegebene
              Einwilligung nachweisen zu können. Die Verarbeitung dieser Daten
              wird auf den Zweck einer möglichen Abwehr von Ansprüchen beschränkt.
              Ein individueller Löschungsantrag ist jederzeit möglich, sofern
              zugleich das ehemalige Bestehen einer Einwilligung bestätigt wird.
            </p>
          </Section>

          <Section id="webinar" title="Webinar">
            <p>
              Auf unserer Internetseite besteht die Möglichkeit, an einem
              kostenfreien Webinar teilzunehmen. Die Teilnahme und Ausspielung
              erfolgt mittels „EverWebinar“, einer Webinarplattform des
              US-Anbieters GENESIS DIGITAL, LLC, 7660 Fay Ave. #H184, La Jolla, CA
              92083, Vereinigte Staaten.
            </p>
            <p className="mt-3">
              Dabei werden bei der Anmeldung die Daten aus der Eingabemaske
              übermittelt:
            </p>
            <Ul
              items={[
                "E-Mail-Adresse",
                "Vorname",
                "IP-Adresse des aufrufenden Rechners",
                "Datum und Uhrzeit der Registrierung",
              ]}
            />
            <p className="mt-3">
              Das Ausfüllen und Abschicken eines Formulars impliziert das
              Speichern der ausgefüllten Daten, daher wird an der Stelle eines
              Formulars auf eine Einwilligung des Nutzers verzichtet. Die
              E-Mail-Adressen unserer Teilnehmer sowie deren weitere, im Rahmen
              dieser Hinweise beschriebenen Daten werden auf den Servern von
              GENESIS DIGITAL in den Vereinigten Staaten gespeichert.
            </p>
            <p className="mt-3">
              GENESIS DIGITAL verwendet diese Informationen zum Ausspielen und zur
              Auswertung der Webinarteilnahme in meinem Auftrag. Des Weiteren kann
              GENESIS DIGITAL nach eigenen Informationen diese Daten zur
              Optimierung oder Verbesserung der eigenen Services nutzen, z.&nbsp;B.
              zur technischen Optimierung des Versandes und der Darstellung der
              Webinare oder für wirtschaftliche Zwecke, um zu bestimmen, aus
              welchen Ländern die Teilnehmer kommen. GENESIS DIGITAL nutzt die
              Daten meiner Teilnehmer jedoch nicht, um diese selbst anzuschreiben
              oder an Dritte weiterzugeben.
            </p>
            <p className="mt-3">
              Anmerkung zu externen Links: Es gibt Fälle, in denen die Teilnehmer
              auf die Webseiten von GENESIS DIGITAL gelangen. Zum Beispiel
              enthalten Webinare einen Link zum Abruf übers Web (etwa bei
              Darstellungsproblemen im Browser). Ebenso ist die
              Datenschutzerklärung von GENESIS DIGITAL nur auf deren Seite
              abrufbar.
            </p>
            <p className="mt-3">
              In diesem Zusammenhang weise ich darauf hin, dass auf den Webseiten
              von GENESIS DIGITAL Cookies eingesetzt und damit personenbezogene
              Daten durch GENESIS DIGITAL, deren Partner und eingesetzte
              Dienstleister (z.&nbsp;B. Google Analytics) verarbeitet werden. Auf
              diese Datenerhebung habe ich keinen Einfluss. Weitere Informationen
              können Sie der Datenschutzerklärung von GENESIS DIGITAL entnehmen.
              Ich weise Sie zusätzlich auf die Widerspruchsmöglichkeiten in die
              Datenerhebung zu Werbezwecken auf den Webseiten{" "}
              <ExtLink href="http://www.aboutads.info/choices/">
                www.aboutads.info/choices/
              </ExtLink>{" "}
              und{" "}
              <ExtLink href="http://www.youronlinechoices.com/">
                www.youronlinechoices.com
              </ExtLink>{" "}
              (für den europäischen Raum) hin.
            </p>
            <p className="mt-3">
              Die Daten werden 3 Monate lang aufbewahrt, um die Leistungsmessung
              der Webinare zu ermöglichen und das Webinarerlebnis für zukünftige
              Webinarteilnehmer stetig zu verbessern.
            </p>
            <p className="mt-3">
              Zurzeit kann mit diesem Anbieter kein Vertrag zur
              Auftragsdatenverarbeitung abgeschlossen werden.
            </p>
          </Section>

          <Section id="social" title="Onlinepräsenzen in sozialen Medien">
            <p>
              Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und
              Plattformen, um mit den dort aktiven Kunden, Interessenten und
              Nutzern zu kommunizieren und Sie dort über unsere Leistungen
              informieren zu können. Beim Aufruf der jeweiligen Netzwerke und
              Plattformen gelten die Geschäftsbedingungen und die
              Datenverarbeitungsrichtlinien deren jeweiligen Betreiber.
            </p>
            <p className="mt-3">
              Soweit nicht anders im Rahmen unserer Datenschutzerklärung
              angegeben, verarbeiten wir die Daten der Nutzer, sofern diese mit
              uns innerhalb der sozialen Netzwerke und Plattformen kommunizieren,
              z.&nbsp;B. Beiträge auf unseren Onlinepräsenzen verfassen oder uns
              Nachrichten zusenden.
            </p>
          </Section>

          <Section id="dritte" title="Einbindung von Diensten und Inhalten Dritter">
            <p>
              Wir setzen innerhalb unseres Onlineangebotes auf Grundlage unserer
              berechtigten Interessen (d.&nbsp;h. Interesse an der Analyse,
              Optimierung und wirtschaftlichem Betrieb unseres Onlineangebotes im
              Sinne des Art. 6 Abs. 1 lit. f DSGVO) Inhalts- oder Serviceangebote
              von Drittanbietern ein, um deren Inhalte und Services, wie z.&nbsp;B.
              Videos oder Schriftarten, einzubinden (nachfolgend einheitlich
              bezeichnet als „Inhalte“).
            </p>
            <p className="mt-3">
              Dies setzt immer voraus, dass die Drittanbieter dieser Inhalte die
              IP-Adresse der Nutzer wahrnehmen, da sie ohne die IP-Adresse die
              Inhalte nicht an deren Browser senden könnten. Die IP-Adresse ist
              damit für die Darstellung dieser Inhalte erforderlich. Wir bemühen
              uns, nur solche Inhalte zu verwenden, deren jeweilige Anbieter die
              IP-Adresse lediglich zur Auslieferung der Inhalte verwenden.
              Drittanbieter können ferner so genannte Pixel-Tags (unsichtbare
              Grafiken, auch als „Web Beacons“ bezeichnet) für statistische oder
              Marketingzwecke verwenden. Durch die „Pixel-Tags“ können
              Informationen, wie der Besucherverkehr auf den Seiten dieser
              Website, ausgewertet werden. Die pseudonymen Informationen können
              ferner in Cookies auf dem Gerät der Nutzer gespeichert werden und
              unter anderem technische Informationen zum Browser und
              Betriebssystem, verweisende Webseiten, Besuchszeit sowie weitere
              Angaben zur Nutzung unseres Onlineangebotes enthalten, als auch mit
              solchen Informationen aus anderen Quellen verbunden werden.
            </p>
          </Section>

          <Section id="videos" title="Hinweise zur Einbindung von Videos">
            <p>
              Wir verwenden auf dieser Internetseite Videos. Videos sind eine gute
              Möglichkeit, um Inhalte besser zu transportieren und verständlicher
              zu machen. Da ein lokales Hosting von Videos nicht leistungsfähig
              genug ist, nutzen wir die Möglichkeit von externen Video-Anbietern.
              Dafür nutzen wir YouTube und Vimeo. Durch die Einbindung der Videos
              kommt es – technisch bedingt – zu Aufrufen der Server der Anbieter.
            </p>
            <p className="mt-3">
              Für die damit verbundene Verwendung von Daten Ihres Browsers bzw.
              Endgerätes verweise ich auf die jeweiligen Datenschutzhinweise der
              Anbieter.
            </p>
          </Section>

          <Section id="youtube" title="YouTube">
            <p>
              Wir binden die Videos der Plattform „YouTube“ des Anbieters Google
              LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA, ein.
              Datenschutzerklärung:{" "}
              <ExtLink href="https://www.google.com/policies/privacy/">
                https://www.google.com/policies/privacy/
              </ExtLink>
              , Opt-Out:{" "}
              <ExtLink href="https://adssettings.google.com/authenticated">
                https://adssettings.google.com/authenticated
              </ExtLink>
              .
            </p>
          </Section>

          <Section id="vimeo" title="Vimeo">
            <p>
              Wir binden die Videos der Plattform „Vimeo“ des Anbieters Vimeo
              Inc., 555 West 18th Street, New York, New York 10011, USA, ein.
              Datenschutzerklärung:{" "}
              <ExtLink href="https://vimeo.com/privacy">https://vimeo.com/privacy</ExtLink>
            </p>
          </Section>

          <Section id="ajax" title="Google Ajax & jQuery Bibliotheken">
            <p>
              Auf unserer Seite kommen z.&nbsp;T. Ajax- und jQuery-Technologien
              zum Einsatz. Soweit dies technisch möglich ist, hosten wir diese
              Dateien lokal. Wir weisen in diesem Zusammenhang darauf hin, dass
              durch diesen Einsatz externe Server von Google in den USA
              aufgerufen werden können. Uns ist derzeit leider nicht bekannt, ob
              Google diesen Server-Request protokolliert und weiter verwertet. Wir
              gehen jedoch davon aus, dass auch diesbezüglich die Google-
              Datenschutzhinweise gelten. Es wird daher wohl in jedem Fall Ihre
              IP-Adresse für einen Zeitraum von mehreren Monaten gespeichert.
              Gleiches gilt im Übrigen auch für JavaScript-Elemente, die für
              Zwecke der Browserkompatibilität (z.&nbsp;B. mit IE9) von
              Google-Servern geladen werden könnten.
            </p>
          </Section>

          <Section id="fonts" title="Google Fonts">
            <p>
              Webfonts werden von uns lokal gehostet, damit es zu keiner
              Datenübertragung an Google kommt.
            </p>
          </Section>

          <Section id="zapier" title="Zapier">
            <p>
              Zur Integration unseres Webinar-Anbieters mit unseren
              E-Mail-Anbieter-Tools nutzen wir Zapier, einen Dienst der Zapier
              Inc., 548 Market St #62411, San Francisco, California 94104, USA.
              Dabei werden Ihr Name und Ihre E-Mail-Adresse von einem Dienst zum
              anderen übertragen und in Logfiles zwecks
              Funktionalitätsgewährleistung zwischengespeichert. Diese Logfiles
              werden automatisch nach 3 Monaten gelöscht.
            </p>
            <p className="mt-3">
              Zapier Inc. hält das europäische Datenschutzrecht ein und ist unter
              dem Privacy-Shield-Abkommen zertifiziert:{" "}
              <ExtLink href="https://www.privacyshield.gov/participant?id=a2zt0000000TNk2AAG&status=Active">
                https://www.privacyshield.gov/participant?id=a2zt0000000TNk2AAG&status=Active
              </ExtLink>
            </p>
            <p className="mt-3">
              Weitere Informationen zum Datenschutz bei Zapier finden Sie unter{" "}
              <ExtLink href="https://zapier.com/privacy/">https://zapier.com/privacy/</ExtLink>.
            </p>
          </Section>

          <Section id="adroll" title="Adroll">
            <p>
              Wir verwenden auf unseren Webseiten aufgrund unserer berechtigten
              Interessen an der Analyse, Optimierung und dem wirtschaftlichen
              Betrieb unseres Onlineangebotes und zu diesen Zwecken
              Adroll-Kampagnen. Adroll wird betrieben von AdRoll Advertising
              Limited, 1, Burlington Plaza, Burlington Road, Dublin 4, Ireland.
              Adroll hilft uns, zielgerechte Werbung für unsere Kunden zu
              erstellen. Weitere Informationen erhalten Sie unter:{" "}
              <ExtLink href="https://www.adrollgroup.com/privacy">
                https://www.adrollgroup.com/privacy
              </ExtLink>
            </p>
          </Section>

          <Section id="remarketing" title="Google-Re/Marketing-Services">
            <p>
              Wir nutzen auf Grundlage unserer berechtigten Interessen (d.&nbsp;h.
              Interesse an der Analyse, Optimierung und dem wirtschaftlichen
              Betrieb unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f
              DSGVO) die Marketing- und Remarketing-Dienste (kurz
              „Google-Marketing-Services“) der Google LLC, 1600 Amphitheatre
              Parkway, Mountain View, CA 94043, USA („Google“).
            </p>
            <p className="mt-3">
              Google ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet
              hierdurch eine Garantie, das europäische Datenschutzrecht
              einzuhalten (
              <ExtLink href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active">
                https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active
              </ExtLink>
              ).
            </p>
            <p className="mt-3">
              Die Google-Marketing-Services erlauben uns, Werbeanzeigen für und
              auf unserer Website gezielter anzuzeigen, um Nutzern nur Anzeigen
              zu präsentieren, die potenziell deren Interessen entsprechen. Falls
              einem Nutzer z.&nbsp;B. Anzeigen für Produkte angezeigt werden, für
              die er sich auf anderen Webseiten interessiert hat, spricht man
              hierbei vom „Remarketing“. Zu diesen Zwecken wird bei Aufruf unserer
              und anderer Webseiten, auf denen Google-Marketing-Services aktiv
              sind, unmittelbar durch Google ein Code von Google ausgeführt und es
              werden sog. (Re)marketing-Tags (unsichtbare Grafiken oder Code, auch
              als „Web Beacons“ bezeichnet) in die Webseite eingebunden. Mit deren
              Hilfe wird auf dem Gerät der Nutzer ein individuelles Cookie, d.&nbsp;h.
              eine kleine Datei, abgespeichert (statt Cookies können auch
              vergleichbare Technologien verwendet werden). Die Cookies können von
              verschiedenen Domains gesetzt werden, unter anderem von google.com,
              doubleclick.net, invitemedia.com, admeld.com, googlesyndication.com
              oder googleadservices.com. In dieser Datei wird vermerkt, welche
              Webseiten der Nutzer aufgesucht, für welche Inhalte er sich
              interessiert und welche Angebote er geklickt hat, ferner technische
              Informationen zum Browser und Betriebssystem, verweisende Webseiten,
              Besuchszeit sowie weitere Angaben zur Nutzung des Onlineangebotes.
              Es wird ebenfalls die IP-Adresse der Nutzer erfasst, wobei wir im
              Rahmen von Google Analytics mitteilen, dass die IP-Adresse innerhalb
              von Mitgliedstaaten der Europäischen Union oder in anderen
              Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum
              gekürzt und nur in Ausnahmefällen ganz an einen Server von Google in
              den USA übertragen und dort gekürzt wird. Die IP-Adresse wird nicht
              mit Daten des Nutzers innerhalb von anderen Angeboten von Google
              zusammengeführt. Die vorstehend genannten Informationen können
              seitens Google auch mit solchen Informationen aus anderen Quellen
              verbunden werden. Wenn der Nutzer anschließend andere Webseiten
              besucht, können ihm entsprechend seiner Interessen die auf ihn
              abgestimmten Anzeigen angezeigt werden.
            </p>
            <p className="mt-3">
              Die Daten der Nutzer werden im Rahmen der Google-Marketing-Services
              pseudonym verarbeitet. D.&nbsp;h. Google speichert und verarbeitet
              z.&nbsp;B. nicht den Namen oder die E-Mail-Adresse der Nutzer,
              sondern verarbeitet die relevanten Daten cookiebezogen innerhalb
              pseudonymer Nutzer-Profile. D.&nbsp;h. aus der Sicht von Google
              werden die Anzeigen nicht für eine konkret identifizierte Person
              verwaltet und angezeigt, sondern für den Cookie-Inhaber, unabhängig
              davon, wer dieser Cookie-Inhaber ist. Dies gilt nicht, wenn ein
              Nutzer Google ausdrücklich erlaubt hat, die Daten ohne diese
              Pseudonymisierung zu verarbeiten. Die von Google-Marketing-Services
              über die Nutzer gesammelten Informationen werden an Google
              übermittelt und auf Googles Servern in den USA gespeichert.
            </p>
            <p className="mt-3">
              Zu den von uns eingesetzten Google-Marketing-Services gehört u.&nbsp;a.
              das Online-Werbeprogramm „Google AdWords“. Im Fall von Google
              AdWords erhält jeder AdWords-Kunde ein anderes „Conversion-Cookie“.
              Cookies können somit nicht über die Websites von AdWords-Kunden
              nachverfolgt werden. Die mit Hilfe des Cookies eingeholten
              Informationen dienen dazu, Conversion-Statistiken für AdWords-Kunden
              zu erstellen, die sich für Conversion-Tracking entschieden haben.
              Die AdWords-Kunden erfahren die Gesamtanzahl der Nutzer, die auf
              ihre Anzeige geklickt haben und zu einer mit einem
              Conversion-Tracking-Tag versehenen Seite weitergeleitet wurden. Sie
              erhalten jedoch keine Informationen, mit denen sich Nutzer persönlich
              identifizieren lassen.
            </p>
            <p className="mt-3">
              Wir können auf Grundlage des Google-Marketing-Services „AdSense“
              Werbeanzeigen Dritter einbinden. AdSense verwendet Cookies, mit
              denen Google und seinen Partner-Websites die Schaltung von Anzeigen
              auf Basis der Besuche von Nutzern auf dieser Website bzw. anderen
              Websites im Internet ermöglicht wird.
            </p>
            <p className="mt-3">
              Ferner können wir den „Google Tag Manager“ einsetzen, um die Google
              Analyse- und Marketing-Dienste in unsere Website einzubinden und zu
              verwalten.
            </p>
            <OptOut
              storageKey="excelhero-gads-optout"
              label="Hier klicken, um von Google-Re/Marketing-Services ausgeschlossen zu werden."
            />
            <p>
              Weitere Informationen zur Datennutzung zu Marketingzwecken durch
              Google erfahren Sie auf der Übersichtsseite{" "}
              <ExtLink href="https://www.google.com/policies/technologies/ads">
                https://www.google.com/policies/technologies/ads
              </ExtLink>
              , die Datenschutzerklärung von Google ist unter{" "}
              <ExtLink href="https://www.google.com/policies/privacy">
                https://www.google.com/policies/privacy
              </ExtLink>{" "}
              abrufbar.
            </p>
            <p className="mt-3">
              Wenn Sie der interessensbezogenen Werbung durch
              Google-Marketing-Services widersprechen möchten, können Sie die von
              Google gestellten Einstellungs- und Opt-Out-Möglichkeiten nutzen:{" "}
              <ExtLink href="http://www.google.com/ads/preferences">
                http://www.google.com/ads/preferences
              </ExtLink>
              .
            </p>
          </Section>

          <Section id="pixel" title="Facebook-Pixel, Custom Audiences und Facebook-Conversion">
            <p>
              Innerhalb unseres Onlineangebotes wird aufgrund unserer berechtigten
              Interessen an Analyse, Optimierung und wirtschaftlichem Betrieb
              unseres Onlineangebotes und zu diesen Zwecken das sog.
              „Facebook-Pixel“ des sozialen Netzwerkes Facebook, welches von der
              Facebook Inc., 1 Hacker Way, Menlo Park, CA 94025, USA, bzw. falls
              Sie in der EU ansässig sind, Facebook Ireland Ltd., 4 Grand Canal
              Square, Grand Canal Harbour, Dublin 2, Irland betrieben wird
              („Facebook“), eingesetzt.
            </p>
            <p className="mt-3">
              Facebook ist unter dem Privacy-Shield-Abkommen zertifiziert und
              bietet hierdurch eine Garantie, das europäische Datenschutzrecht
              einzuhalten (
              <ExtLink href="https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active">
                https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active
              </ExtLink>
              ).
            </p>
            <p className="mt-3">
              Mit Hilfe des Facebook-Pixels ist es Facebook zum einen möglich, die
              Besucher unseres Onlineangebotes als Zielgruppe für die Darstellung
              von Anzeigen (sog. „Facebook-Ads“) zu bestimmen. Dementsprechend
              setzen wir das Facebook-Pixel ein, um die durch uns geschalteten
              Facebook-Ads nur solchen Facebook-Nutzern anzuzeigen, die auch ein
              Interesse an unserem Onlineangebot gezeigt haben oder die bestimmte
              Merkmale (z.&nbsp;B. Interessen an bestimmten Themen oder Produkten,
              die anhand der besuchten Webseiten bestimmt werden) aufweisen, die
              wir an Facebook übermitteln (sog. „Custom Audiences“). Mit Hilfe des
              Facebook-Pixels möchten wir auch sicherstellen, dass unsere
              Facebook-Ads dem potenziellen Interesse der Nutzer entsprechen und
              nicht belästigend wirken. Mit Hilfe des Facebook-Pixels können wir
              ferner die Wirksamkeit der Facebook-Werbeanzeigen für statistische
              und Marktforschungszwecke nachvollziehen, indem wir sehen, ob Nutzer
              nach dem Klick auf eine Facebook-Werbeanzeige auf unsere Website
              weitergeleitet wurden (sog. „Conversion“).
            </p>
            <p className="mt-3">
              Die Verarbeitung der Daten durch Facebook erfolgt im Rahmen von
              Facebooks Datenverwendungsrichtlinie. Allgemeine Hinweise zur
              Darstellung von Facebook-Ads finden Sie in der
              Datenverwendungsrichtlinie von Facebook:{" "}
              <ExtLink href="https://www.facebook.com/policy.php">
                https://www.facebook.com/policy.php
              </ExtLink>
              . Spezielle Informationen und Details zum Facebook-Pixel und seiner
              Funktionsweise erhalten Sie im Hilfebereich von Facebook:{" "}
              <ExtLink href="https://www.facebook.com/business/help/651294705016616">
                https://www.facebook.com/business/help/651294705016616
              </ExtLink>
              .
            </p>
            <p className="mt-3">
              Sie können der Erfassung durch den Facebook-Pixel und der Verwendung
              Ihrer Daten zur Darstellung von Facebook-Ads widersprechen. Um
              einzustellen, welche Arten von Werbeanzeigen Ihnen innerhalb von
              Facebook angezeigt werden, können Sie die von Facebook eingerichtete
              Seite aufrufen und dort die Hinweise zu den Einstellungen
              nutzungsbasierter Werbung befolgen:{" "}
              <ExtLink href="https://www.facebook.com/settings?tab=ads">
                https://www.facebook.com/settings?tab=ads
              </ExtLink>
              . Die Einstellungen erfolgen plattformunabhängig, d.&nbsp;h. sie
              werden für alle Geräte, wie Desktopcomputer oder mobile Geräte,
              übernommen.
            </p>
            <OptOut
              storageKey="excelhero-fb-optout"
              label="Hier klicken, um von Facebook-Re/Marketing-Services ausgeschlossen zu werden."
            />
            <p>
              Sie können dem Einsatz von Cookies, die der Reichweitenmessung und
              Werbezwecken dienen, ferner über die Deaktivierungsseite der
              Netzwerkwerbeinitiative (
              <ExtLink href="http://optout.networkadvertising.org/">
                http://optout.networkadvertising.org/
              </ExtLink>
              ) und zusätzlich die US-amerikanische Website (
              <ExtLink href="http://www.aboutads.info/choices">
                http://www.aboutads.info/choices
              </ExtLink>
              ) oder die europäische Website (
              <ExtLink href="http://www.youronlinechoices.com/uk/your-ad-choices/">
                http://www.youronlinechoices.com/uk/your-ad-choices/
              </ExtLink>
              ) widersprechen.
            </p>
          </Section>

          <Section id="auskunft" title="Auskunftsrecht">
            <p>
              Sie können von dem Verantwortlichen eine Bestätigung darüber
              verlangen, ob personenbezogene Daten, die Sie betreffen, von uns
              verarbeitet werden. Hierzu können Sie eine Datenzugriffsanfrage per
              E-Mail an{" "}
              <a className="text-excel-ink hover:underline" href={`mailto:${SITE.email}?subject=Datenzugriffsanfrage`}>
                {SITE.email}
              </a>{" "}
              stellen.
            </p>
            <p className="mt-3">
              Liegt eine solche Verarbeitung vor, können Sie von dem
              Verantwortlichen über folgende Informationen Auskunft verlangen:
            </p>
            <Ul
              items={[
                "die Zwecke, zu denen die personenbezogenen Daten verarbeitet werden;",
                "die Kategorien von personenbezogenen Daten, welche verarbeitet werden;",
                "die Empfänger bzw. die Kategorien von Empfängern, gegenüber denen die Sie betreffenden personenbezogenen Daten offengelegt wurden oder noch offengelegt werden;",
                "die geplante Dauer der Speicherung der Sie betreffenden personenbezogenen Daten oder, falls konkrete Angaben hierzu nicht möglich sind, Kriterien für die Festlegung der Speicherdauer;",
                "das Bestehen eines Rechts auf Berichtigung oder Löschung der Sie betreffenden personenbezogenen Daten, eines Rechts auf Einschränkung der Verarbeitung durch den Verantwortlichen oder eines Widerspruchsrechts gegen diese Verarbeitung;",
                "das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde;",
                "alle verfügbaren Informationen über die Herkunft der Daten, wenn die personenbezogenen Daten nicht bei der betroffenen Person erhoben werden;",
                "das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling gemäß Art. 22 Abs. 1 und 4 DSGVO und – zumindest in diesen Fällen – aussagekräftige Informationen über die involvierte Logik sowie die Tragweite und die angestrebten Auswirkungen einer derartigen Verarbeitung für die betroffene Person.",
              ]}
            />
            <p className="mt-3">
              Ihnen steht das Recht zu, Auskunft darüber zu verlangen, ob die Sie
              betreffenden personenbezogenen Daten in ein Drittland oder an eine
              internationale Organisation übermittelt werden. In diesem
              Zusammenhang können Sie verlangen, über die geeigneten Garantien
              gem. Art. 46 DSGVO im Zusammenhang mit der Übermittlung unterrichtet
              zu werden.
            </p>
            <p className="mt-3">
              Dieses Auskunftsrecht kann insoweit beschränkt werden, als es
              voraussichtlich die Verwirklichung der Forschungs- oder
              Statistikzwecke unmöglich macht oder ernsthaft beeinträchtigt und
              die Beschränkung für die Erfüllung der Forschungs- oder
              Statistikzwecke notwendig ist.
            </p>
          </Section>

          <Section id="berichtigung" title="Recht auf Berichtigung">
            <p>
              Sie haben ein Recht auf Berichtigung und/oder Vervollständigung
              gegenüber dem Verantwortlichen, sofern die verarbeiteten
              personenbezogenen Daten, die Sie betreffen, unrichtig oder
              unvollständig sind. Der Verantwortliche hat die Berichtigung
              unverzüglich vorzunehmen.
            </p>
            <p className="mt-3">
              Ihr Recht auf Berichtigung kann insoweit beschränkt werden, als es
              voraussichtlich die Verwirklichung der Forschungs- oder
              Statistikzwecke unmöglich macht oder ernsthaft beeinträchtigt und
              die Beschränkung für die Erfüllung der Forschungs- oder
              Statistikzwecke notwendig ist.
            </p>
          </Section>

          <Section id="einschraenkung" title="Recht auf Einschränkung der Verarbeitung">
            <p>
              Unter den folgenden Voraussetzungen können Sie die Einschränkung der
              Verarbeitung der Sie betreffenden personenbezogenen Daten verlangen:
            </p>
            <Ul
              items={[
                "wenn Sie die Richtigkeit der Sie betreffenden personenbezogenen Daten für eine Dauer bestreiten, die es dem Verantwortlichen ermöglicht, die Richtigkeit der personenbezogenen Daten zu überprüfen;",
                "die Verarbeitung unrechtmäßig ist und Sie die Löschung der personenbezogenen Daten ablehnen und stattdessen die Einschränkung der Nutzung der personenbezogenen Daten verlangen;",
                "der Verantwortliche die personenbezogenen Daten für die Zwecke der Verarbeitung nicht länger benötigt, Sie diese jedoch zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen, oder",
                "wenn Sie Widerspruch gegen die Verarbeitung gemäß Art. 21 Abs. 1 DSGVO eingelegt haben und noch nicht feststeht, ob die berechtigten Gründe des Verantwortlichen gegenüber Ihren Gründen überwiegen.",
              ]}
            />
            <p className="mt-3">
              Wurde die Verarbeitung der Sie betreffenden personenbezogenen Daten
              eingeschränkt, dürfen diese Daten – von ihrer Speicherung abgesehen
              – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder
              Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer
              anderen natürlichen oder juristischen Person oder aus Gründen eines
              wichtigen öffentlichen Interesses der Union oder eines
              Mitgliedstaats verarbeitet werden.
            </p>
            <p className="mt-3">
              Wurde die Einschränkung der Verarbeitung nach den o.&nbsp;g.
              Voraussetzungen vorgenommen, werden Sie von dem Verantwortlichen
              unterrichtet, bevor die Einschränkung aufgehoben wird.
            </p>
            <p className="mt-3">
              Ihr Recht auf Einschränkung der Verarbeitung kann insoweit
              beschränkt werden, als es voraussichtlich die Verwirklichung der
              Forschungs- oder Statistikzwecke unmöglich macht oder ernsthaft
              beeinträchtigt und die Beschränkung für die Erfüllung der
              Forschungs- oder Statistikzwecke notwendig ist.
            </p>
          </Section>

          <Section id="loeschung" title="Recht auf Löschung">
            <p>
              Sie können von dem Verantwortlichen verlangen, dass die Sie
              betreffenden personenbezogenen Daten unverzüglich gelöscht werden,
              und der Verantwortliche ist verpflichtet, diese Daten unverzüglich
              zu löschen, sofern einer der folgenden Gründe zutrifft:
            </p>
            <Ul
              items={[
                "Die Sie betreffenden personenbezogenen Daten sind für die Zwecke, für die sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig.",
                "Sie widerrufen Ihre Einwilligung, auf die sich die Verarbeitung gem. Art. 6 Abs. 1 lit. a oder Art. 9 Abs. 2 lit. a DSGVO stützte, und es fehlt an einer anderweitigen Rechtsgrundlage für die Verarbeitung.",
                "Sie legen gem. Art. 21 Abs. 1 DSGVO Widerspruch gegen die Verarbeitung ein und es liegen keine vorrangigen berechtigten Gründe für die Verarbeitung vor, oder Sie legen gem. Art. 21 Abs. 2 DSGVO Widerspruch gegen die Verarbeitung ein.",
                "Die Sie betreffenden personenbezogenen Daten wurden unrechtmäßig verarbeitet.",
                "Die Löschung der Sie betreffenden personenbezogenen Daten ist zur Erfüllung einer rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten erforderlich, dem der Verantwortliche unterliegt.",
                "Die Sie betreffenden personenbezogenen Daten wurden in Bezug auf angebotene Dienste der Informationsgesellschaft gemäß Art. 8 Abs. 1 DSGVO erhoben.",
              ]}
            />
          </Section>

          <Section id="info-dritte" title="Information an Dritte">
            <p>
              Hat der Verantwortliche die Sie betreffenden personenbezogenen Daten
              öffentlich gemacht und ist er gem. Art. 17 Abs. 1 DSGVO zu deren
              Löschung verpflichtet, so trifft er unter Berücksichtigung der
              verfügbaren Technologie und der Implementierungskosten angemessene
              Maßnahmen, auch technischer Art, um für die Datenverarbeitung
              Verantwortliche, die die personenbezogenen Daten verarbeiten, darüber
              zu informieren, dass Sie als betroffene Person von ihnen die
              Löschung aller Links zu diesen personenbezogenen Daten oder von
              Kopien oder Replikationen dieser personenbezogenen Daten verlangt
              haben.
            </p>
            <p className="mt-3 font-medium text-ink">Ausnahmen</p>
            <p className="mt-2">
              Das Recht auf Löschung besteht nicht, soweit die Verarbeitung
              erforderlich ist
            </p>
            <Ul
              items={[
                "zur Ausübung des Rechts auf freie Meinungsäußerung und Information;",
                "zur Erfüllung einer rechtlichen Verpflichtung, die die Verarbeitung nach dem Recht der Union oder der Mitgliedstaaten, dem der Verantwortliche unterliegt, erfordert, oder zur Wahrnehmung einer Aufgabe, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde;",
                "aus Gründen des öffentlichen Interesses im Bereich der öffentlichen Gesundheit gemäß Art. 9 Abs. 2 lit. h und i sowie Art. 9 Abs. 3 DSGVO;",
                "für im öffentlichen Interesse liegende Archivzwecke, wissenschaftliche oder historische Forschungszwecke oder für statistische Zwecke gem. Art. 89 Abs. 1 DSGVO, soweit das unter Abschnitt a) genannte Recht voraussichtlich die Verwirklichung der Ziele dieser Verarbeitung unmöglich macht oder ernsthaft beeinträchtigt, oder",
                "zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.",
              ]}
            />
          </Section>

          <Section id="unterrichtung" title="Recht auf Unterrichtung">
            <p>
              Haben Sie das Recht auf Berichtigung, Löschung oder Einschränkung
              der Verarbeitung gegenüber dem Verantwortlichen geltend gemacht, ist
              dieser verpflichtet, allen Empfängern, denen die Sie betreffenden
              personenbezogenen Daten offengelegt wurden, diese Berichtigung oder
              Löschung der Daten oder Einschränkung der Verarbeitung mitzuteilen,
              es sei denn, dies erweist sich als unmöglich oder ist mit einem
              unverhältnismäßigen Aufwand verbunden.
            </p>
            <p className="mt-3">
              Ihnen steht gegenüber dem Verantwortlichen das Recht zu, über diese
              Empfänger unterrichtet zu werden.
            </p>
          </Section>

          <Section id="uebertragbarkeit" title="Recht auf Datenübertragbarkeit">
            <p>
              Sie haben das Recht, die Sie betreffenden personenbezogenen Daten,
              die Sie dem Verantwortlichen bereitgestellt haben, in einem
              strukturierten, gängigen und maschinenlesbaren Format zu erhalten.
              Außerdem haben Sie das Recht, diese Daten einem anderen
              Verantwortlichen ohne Behinderung durch den Verantwortlichen, dem
              die personenbezogenen Daten bereitgestellt wurden, zu übermitteln,
              sofern
            </p>
            <Ul
              items={[
                "die Verarbeitung auf einer Einwilligung gem. Art. 6 Abs. 1 lit. a DSGVO oder Art. 9 Abs. 2 lit. a DSGVO oder auf einem Vertrag gem. Art. 6 Abs. 1 lit. b DSGVO beruht und",
                "die Verarbeitung mithilfe automatisierter Verfahren erfolgt.",
              ]}
            />
            <p className="mt-3">
              In Ausübung dieses Rechts haben Sie ferner das Recht, zu erwirken,
              dass die Sie betreffenden personenbezogenen Daten direkt von einem
              Verantwortlichen einem anderen Verantwortlichen übermittelt werden,
              soweit dies technisch machbar ist. Freiheiten und Rechte anderer
              Personen dürfen hierdurch nicht beeinträchtigt werden.
            </p>
            <p className="mt-3">
              Das Recht auf Datenübertragbarkeit gilt nicht für eine Verarbeitung
              personenbezogener Daten, die für die Wahrnehmung einer Aufgabe
              erforderlich ist, die im öffentlichen Interesse liegt oder in
              Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen
              übertragen wurde.
            </p>
          </Section>

          <Section id="widerspruch" title="Widerspruchsrecht">
            <p>
              Sie haben das Recht, aus Gründen, die sich aus ihrer besonderen
              Situation ergeben, jederzeit gegen die Verarbeitung der Sie
              betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1
              lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch
              für ein auf diese Bestimmungen gestütztes Profiling.
            </p>
            <p className="mt-3">
              Der Verantwortliche verarbeitet die Sie betreffenden
              personenbezogenen Daten nicht mehr, es sei denn, er kann zwingende
              schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre
              Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung
              dient der Geltendmachung, Ausübung oder Verteidigung von
              Rechtsansprüchen.
            </p>
            <p className="mt-3">
              Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um
              Direktwerbung zu betreiben, haben Sie das Recht, jederzeit
              Widerspruch gegen die Verarbeitung der Sie betreffenden
              personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen;
              dies gilt auch für das Profiling, soweit es mit solcher
              Direktwerbung in Verbindung steht.
            </p>
            <p className="mt-3">
              Widersprechen Sie der Verarbeitung für Zwecke der Direktwerbung, so
              werden die Sie betreffenden personenbezogenen Daten nicht mehr für
              diese Zwecke verarbeitet.
            </p>
            <p className="mt-3">
              Sie haben die Möglichkeit, im Zusammenhang mit der Nutzung von
              Diensten der Informationsgesellschaft – ungeachtet der Richtlinie
              2002/58/EG – Ihr Widerspruchsrecht mittels automatisierter Verfahren
              auszuüben, bei denen technische Spezifikationen verwendet werden.
            </p>
            <p className="mt-3">
              Sie haben auch das Recht, aus Gründen, die sich aus Ihrer besonderen
              Situation ergeben, bei der Verarbeitung Sie betreffender
              personenbezogener Daten, die zu wissenschaftlichen oder historischen
              Forschungszwecken oder zu statistischen Zwecken gem. Art. 89 Abs. 1
              DSGVO erfolgt, dieser zu widersprechen. Ihr Widerspruchsrecht kann
              insoweit beschränkt werden, als es voraussichtlich die Verwirklichung
              der Forschungs- oder Statistikzwecke unmöglich macht oder ernsthaft
              beeinträchtigt und die Beschränkung für die Erfüllung der
              Forschungs- oder Statistikzwecke notwendig ist.
            </p>
          </Section>

          <Section id="widerruf" title="Recht auf Widerruf der datenschutzrechtlichen Einwilligungserklärung">
            <p>
              Sie haben das Recht, Ihre datenschutzrechtliche
              Einwilligungserklärung jederzeit zu widerrufen. Durch den Widerruf
              der Einwilligung wird die Rechtmäßigkeit der aufgrund der
              Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.
            </p>
          </Section>
        </div>
      </section>
    </main>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="font-display text-lg font-semibold text-ink">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function Ul({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-3 list-disc space-y-1 pl-5">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
