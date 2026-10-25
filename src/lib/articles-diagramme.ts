import type { Article } from "./articles";

const IMG = "/images/course/diagramme.jpg";
const HUB = "/diagramme";

function d(
  slug: string,
  title: string,
  excerpt: string,
  minutes: number,
  body: Article["body"],
): Article {
  return {
    slug,
    title,
    kicker: "Diagramme",
    category: "Diagramme",
    hubPath: HUB,
    path: `/diagramme/${slug}`,
    excerpt,
    image: IMG,
    readMinutes: minutes,
    body,
  };
}

export const DIAGRAMME_ARTICLES: Article[] = [
  d(
    "saeulendiagramm",
    "Säulendiagramm",
    "Der Standard, um Größen zu vergleichen: gruppierte, gestapelte und 3D-Säulen – und wann welche Variante Sinn macht.",
    6,
    [
      {
        heading: "Überblick",
        paragraphs: [
          "Säulendiagramme vergleichen Werte über Kategorien. Die Kategorie sitzt auf der Querachse, die Höhe der Säule ist der Wert. Ideal für Umsätze nach Monat, Stückzahlen nach Produkt oder Plan vs. Ist.",
        ],
      },
      {
        heading: "Säulendiagramm erstellen",
        paragraphs: [
          "Daten als flache Liste anlegen (eine Spalte Kategorien, eine oder mehrere Wertspalten). Bereich markieren → Einfügen → Säulen- oder Balkendiagramm. Excel schlägt den Typ vor; unter Diagrammentwurf änderst du ihn später.",
        ],
      },
      {
        heading: "Arten von 2D-Säulendiagrammen",
        paragraphs: [
          "Gruppiert: mehrere Reihen nebeneinander – gut für Plan/Ist. Gestapelt: Anteile in einer Säule, Gesamthöhe = Summe. 100 % gestapelt: Anteile, wenn die absolute Summe egal ist.",
        ],
      },
      {
        heading: "Arten von 3D-Säulendiagrammen",
        paragraphs: [
          "3D sieht spektakulär aus und verzerrt oft die Ablesbarkeit. Für Berichte an Chefs und Controlling bleiben 2D-Säulen die klarere Wahl. 3D nur, wenn wirklich drei Dimensionen gemeint sind – das ist selten.",
        ],
      },
    ],
  ),
  d(
    "balkendiagramm",
    "Balkendiagramm",
    "Wie Säulen, nur quer. Besonders lesbar bei langen Kategorie-Namen und Rankings.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: [
          "Balkendiagramme sind gedrehte Säulen: Kategorien auf der Hochachse, Werte nach rechts. Lange Produktnamen bleiben lesbar, Rankings (größte oben) wirken natürlich.",
        ],
      },
      {
        heading: "Balkendiagramm erstellen",
        paragraphs: [
          "Bereich markieren → Einfügen → Säulen- oder Balkendiagramm → Balken. Unter Diagrammentwurf → Daten auswählen änderst du Reihen und Achsenbeschriftung.",
        ],
      },
      {
        heading: "Arten von 2D- und 3D-Balkendiagrammen",
        paragraphs: [
          "Gruppiert, gestapelt, 100 % gestapelt – analog zu Säulen. 3D-Balken sind schwer abzulesen. Für Personalstatistiken, Umfragen und Top-10-Listen ist der 2D-Balken fast immer die bessere Säule.",
        ],
      },
    ],
  ),
  d(
    "liniendiagramm",
    "Liniendiagramm",
    "Verläufe über die Zeit: eine oder mehrere Reihen, mit oder ohne Markierungen, optional 3D.",
    6,
    [
      {
        heading: "Überblick",
        paragraphs: [
          "Liniendiagramme zeigen, wie sich ein Wert über eine geordnete Achse ändert – typisch Monate, Quartale, Jahre. Mehrere Linien vergleichen Reihen (Umsatz Inland/Ausland).",
        ],
      },
      {
        heading: "Liniendiagramm erstellen",
        paragraphs: [
          "Zeit in der ersten Spalte, Werte daneben. Markieren → Einfügen → Linie. Zu wenige Punkte wirken eckig, zu viele unruhig. Fehlende Werte nicht als 0 plotten – Lücke oder interpolieren bewusst wählen.",
        ],
      },
      {
        heading: "2D- und 3D-Linien",
        paragraphs: [
          "Linie, Linie mit Datenpunkten, gestapelte Linie, 100 % gestapelt. 3D-Linien sind dekorativ und selten nötig. Markierungen helfen, wenn einzelne Stichtage zählen; ohne Markierung wirkt der Verlauf ruhiger.",
        ],
      },
    ],
  ),
  d(
    "flaechendiagramm-2",
    "Flächendiagramm",
    "Wie ein Liniendiagramm, nur gefüllt. Gut für Volumen über Zeit – schlecht, wenn Reihen sich verdecken.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: [
          "Flächendiagramme füllen die Fläche unter der Linie. Eine Reihe wirkt stark. Mehrere Reihen übereinander brauchen Stapelung, sonst verschwindet die hintere Fläche.",
        ],
      },
      {
        heading: "Flächendiagramm erstellen",
        paragraphs: [
          "Wie Linie: Zeit + Werte markieren → Einfügen → Fläche. Unter Diagrammentwurf zwischen Fläche, gestapelt und 100 % gestapelt wechseln.",
        ],
      },
      {
        heading: "2D- und 3D-Flächen",
        paragraphs: [
          "Gestapelt zeigt Zusammensetzung (Produktmix über Monate). 100 % gestapelt die Anteile. 3D-Fläche sieht nach Präsentation aus und macht Ablesen schwerer – im Controlling 2D lassen.",
        ],
      },
    ],
  ),
  d(
    "kreisdiagramm",
    "Kreisdiagramm",
    "Anteile an einem Ganzen. Wenige Kategorien, keine Zeitreihe – und der Ring als lesbare Schwester.",
    6,
    [
      {
        heading: "Überblick",
        paragraphs: [
          "Kreisdiagramme (Pie) zeigen, wie sich 100 % auf Kategorien verteilen. Mehr als fünf bis sieben Scheiben werden unleserlich. Negative Werte und Zeitverläufe gehören nicht in den Kreis.",
        ],
      },
      {
        heading: "Kreisdiagramme erstellen",
        paragraphs: [
          "Eine Spalte Namen, eine Spalte Werte. Markieren → Einfügen → Kreis. Datenbeschriftung: Prozente statt nur Legende. Zu kleine Scheiben zu „Sonstiges“ zusammenfassen.",
        ],
      },
      {
        heading: "2D, 3D, Sonderformen und Ring",
        paragraphs: [
          "Gewöhnlicher 2D-Kreis ist der Standard. 3D-Kreis verzerrt Flächen. Kreis aus Kreis / Kreis aus Balken splittet kleine Anteile aus. Das Ring- bzw. Donut-Diagramm trägt in der Mitte eine Kennzahl (Gesamt) und bleibt oft klarer als 3D.",
        ],
      },
    ],
  ),
  d(
    "punktdiagramm",
    "Punktdiagramm",
    "X gegen Y: Zusammenhänge, nicht Kategorien. Mit oder ohne Linie, interpoliert oder gerade.",
    6,
    [
      {
        heading: "Überblick",
        paragraphs: [
          "Punktdiagramme (Scatter) setzen zwei Zahlenachsen gegeneinander: z. B. Werbebudget vs. Umsatz. Anders als Linien- oder Säulenplots ist die Querachse numerisch, nicht kategorial.",
        ],
      },
      {
        heading: "Punktdiagramm erstellen",
        paragraphs: [
          "Zwei Zahlenspalten nebeneinander. Markieren → Einfügen → Punkt (X Y). Die linke Spalte wird X, die rechte Y. Überschriften nicht mitmarkieren oder unter Daten auswählen nachziehen.",
        ],
      },
      {
        heading: "Varianten",
        paragraphs: [
          "Nur Punkte: der Klassiker für Korrelation. Punkte mit geraden oder interpolierten Linien, optional mit Datenpunkten. Eine Trendlinie (Rechtsklick → Trendlinie) macht den Zusammenhang sichtbar, ohne die Punkte zu ersetzen.",
        ],
      },
    ],
  ),
  d(
    "blasendiagramm",
    "Blasendiagramm",
    "Ein Punktdiagramm mit einer dritten Größe: der Durchmesser der Blase.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: [
          "Blasen tragen drei Maße: X, Y und Größe. Beispiel: Region (nicht als Achse), Umsatz (X), Marge (Y), Mitarbeiterzahl (Blase). Zu viele Blasen überlappen – filtern oder Cluster bilden.",
        ],
      },
      {
        heading: "Blasendiagramm erstellen",
        paragraphs: [
          "Drei Zahlenspalten: X, Y, Größe. Einfügen → Punkt → Blase. Unter Datenreihenformat kannst du die Skalierung der Blasen begrenzen, damit eine Ausreißer-Blase den Rest nicht erdrückt.",
        ],
      },
      {
        heading: "2D- und 3D-Blase",
        paragraphs: [
          "2D reicht. 3D-Blasen sehen nach Luftballons aus und erschweren den Größenvergleich. Beschriftung der wichtigsten Blasen schlägt eine volle Legende.",
        ],
      },
    ],
  ),
  d(
    "kombidiagramm",
    "Kombidiagramm",
    "Säulen und Linie in einem Chart – oft mit Sekundärachse, wenn die Einheiten nicht zusammenpassen.",
    6,
    [
      {
        heading: "Überblick",
        paragraphs: [
          "Kombidiagramme mischen Typen: Umsatz als Säule, Marge als Linie. So siehst du Volumen und Quote in einer Grafik, ohne zwei Charts zu bauen.",
        ],
      },
      {
        heading: "Kombidiagramm erstellen",
        paragraphs: [
          "Daten markieren → Einfügen → Kombi. Oder bestehendes Säulendiagramm: Reihe markieren → Diagrammentwurf → Diagrammtyp ändern → Kombination, Häkchen bei Sekundärachse setzen.",
        ],
      },
      {
        heading: "Gruppierte Säulen/Linien und Sekundärachse",
        paragraphs: [
          "Säule + Linie auf einer Achse, wenn beide in derselben Einheit sind. Unterschiedliche Größenordnungen (Umsatz in Mio., Quote in %) brauchen die Sekundärachse – sonst klebt die Linie am Boden. Gestapelte Fläche plus gruppierte Säulen ist möglich, wird schnell unruhig.",
        ],
      },
    ],
  ),
  d(
    "histogramm",
    "Histogramm",
    "Häufigkeiten in Klassen: wie sich Werte verteilen, nicht wie sie sich über die Zeit ändern.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: [
          "Ein Histogramm zählt, wie viele Beobachtungen in Intervalle (Bins) fallen. Typisch: Bearbeitungszeiten, Alter, Fehlerquoten. Es ist kein Säulendiagramm mit Kategorienamen.",
        ],
      },
      {
        heading: "Histogramm erstellen",
        paragraphs: [
          "Eine Zahlenspalte markieren → Einfügen → Statistikdiagramm → Histogramm. Unter Achsen formatieren stellst du Behälterbreite, Anzahl der Behälter oder Überlauf ein.",
        ],
      },
      {
        heading: "Gruppenverteilung und Wahrscheinlichkeiten",
        paragraphs: [
          "Gleiche Behälterbreiten, sonst lügt die Fläche. Für Wahrscheinlichkeiten die Häufigkeiten auf 100 % normieren oder ein Pareto (Häufigkeit + kumulierte Linie) danebenstellen.",
        ],
      },
    ],
  ),
  d(
    "kartendiagramm",
    "Kartendiagramm",
    "Werte auf Länder, Bundesländer oder Regionen – Excel erkennt Ortsnamen und färbt die Karte.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: [
          "Kartendiagramme (Filled Map) färben geografische Gebiete nach einem Wert. Voraussetzung: Excel erkennt die Namen (Deutschland, NRW, USA/CA). Falsche Schreibweisen bleiben grau.",
        ],
      },
      {
        heading: "Kartendiagramm erstellen",
        paragraphs: [
          "Spalte mit Ort, Spalte mit Wert. Einfügen → Karten → Kartendiagramm. Unter Datenreihenformat die Kartenebene wählen (Welt, Land, Bundesland). Online-Verbindung hilft Excel bei der Geokodierung.",
        ],
      },
    ],
  ),
  d(
    "netzdiagramm",
    "Netzdiagramm",
    "Mehrere Achsen vom Zentrum nach außen: Profile und Vergleiche, wenn alle Skalen vergleichbar sind.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: [
          "Netz- oder Spinnendiagramme tragen Kategorien als Achsen um den Mittelpunkt. Gut für Skill-Profile, Produktvergleiche, Balanced Scorecards – schlecht, wenn die Einheiten nicht zusammenpassen.",
        ],
      },
      {
        heading: "Netzdiagramm erstellen",
        paragraphs: [
          "Eine Zeile oder Spalte pro Reihe, Kategorien in der Kopfzeile. Einfügen → Netz. Zu viele Achsen (mehr als acht) werden zum Igel.",
        ],
      },
      {
        heading: "Gewöhnlich, mit Punkten, gefüllt",
        paragraphs: [
          "Linie allein, Linie mit Datenpunkten oder gefülltes Netz. Die Füllung betont die Fläche – zwei Reihen überdecken sich. Skala bei allen Achsen gleich halten, sonst wirkt eine Kategorie künstlich dominant.",
        ],
      },
    ],
  ),
  d(
    "treemap-sunburst",
    "Treemap & Sunburst",
    "Hierarchien als Fläche (Treemap) oder Ring (Sunburst): Anteile in Anteilen.",
    6,
    [
      {
        heading: "Überblick",
        paragraphs: [
          "Treemap und Sunburst zeigen Hierarchien: Region → Produkt → Artikel. Die Fläche entspricht dem Wert. Gut, wenn du viele Teile eines Ganzen auf einmal sehen willst.",
        ],
      },
      {
        heading: "Treemap / Sunburst erstellen",
        paragraphs: [
          "Mindestens eine Textspalte (Kategorie), optional eine zweite für die Unterebene, plus Wert. Einfügen → Hierarchiediagramm. Reihenfolge der Spalten bestimmt die Verschachtelung.",
        ],
      },
      {
        heading: "Treemap vs. Sunburst",
        paragraphs: [
          "Treemap: Rechtecke, stark bei vielen Blättern. Sunburst: Ringe von innen nach außen, stärker in der Tiefe der Hierarchie. Beide vertragen keine negativen Werte.",
        ],
      },
    ],
  ),
  d(
    "trichter-diagramm",
    "Trichter-Diagramm",
    "Stufen einer Pipeline: Leads, Angebote, Abschlüsse – jede Stufe schmaler als die davor.",
    4,
    [
      {
        heading: "Überblick",
        paragraphs: [
          "Trichter zeigen einen Prozess, der sich verengt. Vertriebspipeline, Bewerbungsprozess, Support-Tickets. Die Breite (bzw. Höhe der Stufe) ist der Wert.",
        ],
      },
      {
        heading: "Trichter-Diagramm erstellen",
        paragraphs: [
          "Stufen in der Reihenfolge des Prozesses untereinander, daneben die Anzahl. Einfügen → Trichter. Beschriftung in die Stufe, nicht nur in die Legende. Wenn eine Stufe größer ist als die davor, ist es kein Trichter mehr – dann Säule oder Wasserfall.",
        ],
      },
    ],
  ),
  d(
    "wasserfall-diagramm",
    "Wasserfall-Diagramm",
    "Vom Startwert über Zu- und Abgänge zum Endwert: Brücke, Forecast, Gewinnüberleitung.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: [
          "Wasserfall (Bridge) erklärt, wie man von A nach B kommt: Start, plus, minus, Total. Klassiker im Controlling: EBIT-Überleitung, Cashflow, Forecast vs. Budget.",
        ],
      },
      {
        heading: "Wasserfall-Diagramm erstellen",
        paragraphs: [
          "Spalte mit Beschriftung, Spalte mit positivem oder negativem Delta. Die Totale (Start/Ende/Zwischensumme) als Summe markieren: Datenpunkt → als Summe festlegen. Einfügen → Wasserfall.",
          "Farben: Plus grün, Minus rot, Summe grau – unter Datenpunkt formatieren. Verbinderlinien anlassen, sonst zerfällt die Brücke optisch.",
        ],
      },
    ],
  ),
  d(
    "diagramm-typ-daten-ort",
    "Diagramme: Typ, Daten & Ort",
    "Datenquelle ändern, Zeilen und Spalten tauschen, Typ wechseln und das Chart auf ein eigenes Blatt legen.",
    6,
    [
      {
        heading: "Überblick",
        paragraphs: [
          "Drei Stellschrauben, die jedes Diagramm hat: welche Daten, welcher Typ, wo es liegt. Wer die kennt, baut Charts um, ohne sie neu anzulegen.",
        ],
      },
      {
        heading: "Daten bearbeiten, Zeilen und Spalten tauschen",
        paragraphs: [
          "Diagrammentwurf → Daten auswählen: Reihen hinzufügen, entfernen, Reihenfolge. „Zeile/Spalte wechseln“ tauscht, was Kategorie und was Reihe ist – der schnellste Fix, wenn Excel die Tabelle „falsch herum“ gelesen hat.",
        ],
      },
      {
        heading: "Diagrammtyp ändern und verschieben",
        paragraphs: [
          "Diagrammentwurf → Diagrammtyp ändern, auch pro Reihe (Kombi). Verschieben: Diagrammentwurf → Diagramm verschieben → neues Blatt. Auf dem Tabellenblatt bleibt es neben den Zahlen; auf einem Diagrammblatt wird es groß für den Beamer.",
        ],
      },
    ],
  ),
  d(
    "diagrammelemente",
    "Diagrammelemente",
    "Titel, Achsen, Legende, Datenbeschriftungen, Gitternetz – ein- und ausblenden über das Plus am Chart.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: [
          "Ein Diagramm besteht aus Elementen, die du einzeln ein- und ausblendest. Weniger ist oft klarer: Titel, eine Legende, Datenbeschriftung nur wo nötig.",
        ],
      },
      {
        heading: "Diagrammelemente einfügen",
        paragraphs: [
          "Das Plus-Symbol oben rechts am markierten Chart (Excel 2013+) listet Titel, Achsen, Achsentitel, Legende, Datenbeschriftungen, Tabelle, Fehlerindikatoren, Gitternetzlinien und Trendlinie.",
          "Alternativ: Diagrammentwurf → Diagrammelement hinzufügen. Doppelklick auf ein Element öffnet den Formatbereich. Überflüssige Legende löschen, wenn die Achse schon beschriftet ist.",
        ],
      },
    ],
  ),
  d(
    "diagrammformatvorlagen",
    "Diagrammformatvorlagen",
    "Farbe und Stil in einem Klick: Vorlagen und Farbschema unter Diagrammentwurf.",
    4,
    [
      {
        heading: "Überblick",
        paragraphs: [
          "Formatvorlagen ändern Linienstärke, Hintergrund und Beschriftungsstil, ohne jedes Element einzeln anzufassen. Farbschema zieht die Palette auf alle Reihen.",
        ],
      },
      {
        heading: "Vorlagen und Farben finden",
        paragraphs: [
          "Diagramm markieren → Diagrammentwurf: Zeile „Schnelllayout“ und „Diagrammformatvorlagen“. Daneben „Farben ändern“. Firmenfarben liegen unter Seite → Farben, wenn das Theme stimmt.",
          "Ein eigenes Design speicherst du als Vorlage: Rechtsklick aufs Chart → Als Vorlage speichern (.crtx). Beim nächsten Mal: Diagrammtyp ändern → Vorlagen.",
        ],
      },
    ],
  ),
  d(
    "achsen-formatieren",
    "Achsen formatieren",
    "Minimum, Maximum, Teilung, Zahlformat, Skalierung – die Achse entscheidet, ob das Chart ehrlich bleibt.",
    7,
    [
      {
        heading: "Überblick",
        paragraphs: [
          "Achsen tragen die Skala. Wer das Minimum auf 80 setzt, macht aus 82 vs. 84 eine Dramatik. Deshalb: Achse bewusst formatieren, nicht Excel allein entscheiden lassen.",
        ],
      },
      {
        heading: "Formatierungen aufrufen",
        paragraphs: [
          "Achse doppelklicken oder Rechtsklick → Achse formatieren. Der Aufgabenbereich rechts: Achsenoptionen, Textoptionen, Füllung.",
        ],
      },
      {
        heading: "Achsenoptionen, Größe, Effekte, Linie, Text",
        paragraphs: [
          "Grenzen: Min/Max fest oder automatisch. Einheiten: Haupt- und Hilfseinheit. Logarithmische Skala nur bei Spannweiten über Zehnerpotenzen. Zahlenformat wie in Zellen (Prozent, Tausenderpunkt).",
          "Unter Größe und Eigenschaften: Ausrichtung der Beschriftung. Füllung und Linie für die Achsenlinie selbst. Textoptionen für Schrift. Sekundärachse im Kombi über die Datenreihe, nicht über die Achse allein.",
        ],
      },
    ],
  ),
  d(
    "legende-formatieren",
    "Legende formatieren",
    "Position, Reihenfolge, Füllung – und wann du die Legende ganz weglässt.",
    4,
    [
      {
        heading: "Überblick",
        paragraphs: [
          "Die Legende erklärt die Reihen. Eine Reihe mit klarem Titel in der Achse braucht oft keine. Zwei und mehr Reihen: Legende rechts oder oben, nicht über den Daten.",
        ],
      },
      {
        heading: "Formatierungen aufrufen",
        paragraphs: [
          "Legende doppelklicken. Legendenoptionen: Position (oben, unten, links, rechts, oben rechts). Reihenfolge folgt den Datenreihen – unter Daten auswählen umsortieren.",
          "Füllung und Linie für den Kasten, Textoptionen für die Schrift. Überlange Reihennamen in der Quelltabelle kürzen, nicht in der Grafik umbrechen lassen.",
        ],
      },
    ],
  ),
  d(
    "gitternetzlinien-formatieren",
    "Gitternetzlinien formatieren",
    "Horizontale Linien zum Ablesen – dezent, nicht als Gitterkäfig.",
    3,
    [
      {
        heading: "Überblick",
        paragraphs: [
          "Gitternetzlinien helfen, Werte zu schätzen, ohne jeden Punkt zu beschriften. Hauptgitternetz reicht fast immer; Hilfslinien nur bei feinen Skalen.",
        ],
      },
      {
        heading: "Formatierungen aufrufen",
        paragraphs: [
          "Linie doppelklicken: Farbe hellgrau, Stärke 0,25–0,5 pt, kein Schatten. Vertikale Gitternetzlinien bei Zeitachsen oft überflüssig. Über Diagrammelemente (Plus) ein- und ausblenden.",
        ],
      },
    ],
  ),
  d(
    "datenreihen-formatieren",
    "Datenreihen formatieren",
    "Farbe, Abstand, Überlappung, Linientyp – die Reihe ist das, was der Betrachter sieht.",
    5,
    [
      {
        heading: "Überblick",
        paragraphs: [
          "Jede Reihe (Säulen einer Farbe, eine Linie) hat eigene Formate. Über die Reihe steuerst du Abstand, Überlappung, Marker und die Zuordnung zur Achse.",
        ],
      },
      {
        heading: "Formatierungen aufrufen",
        paragraphs: [
          "Reihe klicken (nicht den einzelnen Punkt, sonst formatiert Excel nur den Punkt). Datenreihenoptionen: Reihenüberlappung, Abstandsbreite (Säulen schmaler/breiter), auf die Sekundärachse zeichnen.",
          "Füllung und Linie: Vollfarbe statt Verlauf in Berichten. Effekte sparsam. Über „Datenreihe formatieren“ auch den Diagrammtyp dieser einen Reihe ändern – der Weg zum Kombi.",
        ],
      },
    ],
  ),
  d(
    "diagrammbereich-formatieren",
    "Diagrammbereich formatieren",
    "Der äußere Rahmen: Hintergrund, Größe, Rahmenlinie – und wie das Chart auf der Seite sitzt.",
    4,
    [
      {
        heading: "Überblick",
        paragraphs: [
          "Der Diagrammbereich ist die komplette Fläche inklusive Titel und Legende. Dahinter liegt die Zeichnungsfläche mit den Säulen oder Linien.",
        ],
      },
      {
        heading: "Formatierungen aufrufen",
        paragraphs: [
          "Neben das Plot-Inneren klicken → Diagrammbereich formatieren. Größe und Eigenschaften: exakte Höhe/Breite, nicht mitziehen. Füllung weiß oder transparent, Linie oft aus – der Rahmen lenkt ab.",
          "Textoptionen betreffen den Standardtext des Charts. Für den Druck: unter Seite einrichten prüfen, dass das Chart nicht über den Rand ragt.",
        ],
      },
    ],
  ),
  d(
    "zeichnungsflaeche-formatieren",
    "Zeichnungsfläche formatieren",
    "Nur der Plot innen: Hintergrund hinter Säulen und Linien, ohne Titel und Legende.",
    3,
    [
      {
        heading: "Überblick",
        paragraphs: [
          "Die Zeichnungsfläche ist das Rechteck, in dem die Daten stehen. Ein leichter grauer Fill trennt sie vom Titel – zu viel Farbe konkurriert mit den Reihen.",
        ],
      },
      {
        heading: "Formatierungen aufrufen",
        paragraphs: [
          "In den Plot klicken (zwischen die Säulen). Füllung und Linie: oft keine Linie, Füllung hell oder keine. Effekte (Schatten, Leuchten) weglassen. Wenn Gitternetzlinien da sind, reicht weißer Hintergrund.",
        ],
      },
    ],
  ),
];
