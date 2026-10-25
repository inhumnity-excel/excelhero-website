import { notFound, redirect } from "@tanstack/react-router";

/** Old WordPress category archives → the closest topic hub on this site. */
export function redirectCategory(slug: string): never {
  switch (slug) {
    case "allgemein":
      throw redirect({ to: "/allgemein", statusCode: 301 });
    case "automate":
      throw redirect({ to: "/power-automate", statusCode: 301 });
    case "bedingte-formatierung":
      throw redirect({
        to: "/bedingte-formatierung/bedingte-formatierung-ganz-einfach-erklaert",
        statusCode: 301,
      });
    case "diagramme":
      throw redirect({ to: "/diagramme", statusCode: 301 });
    case "excel-tabellen":
      throw redirect({ to: "/excel-tabellen", statusCode: 301 });
    case "formeln":
      throw redirect({ to: "/excel-formeln", statusCode: 301 });
    case "funktionen":
      throw redirect({ to: "/excel-funktionen", statusCode: 301 });
    case "ki":
      throw redirect({ to: "/chatgpt-und-excel", statusCode: 301 });
    case "makros":
      throw redirect({ to: "/makros", statusCode: 301 });
    case "office-script":
      throw redirect({ to: "/office-script", statusCode: 301 });
    case "pivot-tabellen":
      throw redirect({ to: "/pivot-tabellen", statusCode: 301 });
    case "power-bi":
      throw redirect({ to: "/power-bi", statusCode: 301 });
    case "power-pivot":
      throw redirect({ to: "/power-pivot", statusCode: 301 });
    case "power-query":
      throw redirect({ to: "/power-query", statusCode: 301 });
    case "shortcuts":
      throw redirect({ to: "/excel-tastenkombinationen", statusCode: 301 });
    case "tipps-tricks":
      throw redirect({ to: "/tipps-tricks", statusCode: 301 });
    case "vba":
      throw redirect({ to: "/vba", statusCode: 301 });
    default:
      throw notFound();
  }
}
