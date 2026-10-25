import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/logo";
import { SocialLinks } from "@/components/social-links";
import { FOOTER_COLUMNS, SITE } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-navy text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo variant="light" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/70">
            Online-Training für Professionals, die schneller und sicherer mit
            Excel arbeiten wollen. 9 Module, 600+ Lektionen, zeitlich
            unbegrenzter Zugriff.
          </p>
          <p className="mt-5 text-sm text-paper/60">
            <a className="text-excel hover:underline" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </p>
          <SocialLinks className="mt-5" />
        </div>
        <div className="grid gap-8 sm:grid-cols-3 md:col-span-8">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-paper/45">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-paper/75 transition-colors hover:text-excel"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-paper/45 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.company}. Alle Rechte vorbehalten.
          </p>
          <p>Excel-Schulung · Online-Kurs · Nachschlagewerk</p>
        </div>
      </div>
    </footer>
  );
}
