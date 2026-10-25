import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { DesktopMegaNav, MobileMegaNav } from "@/components/layout/mega-nav";
import { SiteSearch } from "@/components/layout/site-search";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { COURSE } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-navy/95 text-paper backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[88rem] items-center justify-between gap-3 px-5">
        <Logo variant="light" />
        <DesktopMegaNav />
        <div className="flex items-center gap-1 sm:gap-2">
          <SiteSearch />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to={COURSE.href}>Kurs</Link>
          </Button>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-md text-paper lg:hidden"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      <div
        className={cn(
          "border-t border-white/8 bg-navy lg:hidden",
          "origin-top transition-[opacity,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
          open ? "opacity-100" : "pointer-events-none absolute inset-x-0 opacity-0 -translate-y-1",
        )}
        hidden={!open}
      >
        <nav className="mx-auto max-w-6xl px-5 py-2" aria-label="Mobilnavigation">
          <MobileMegaNav onNavigate={() => setOpen(false)} />
          <Link
            to={COURSE.href}
            className="block py-3.5 text-base font-semibold text-excel"
            onClick={() => setOpen(false)}
          >
            Excel Online Kurs
          </Link>
        </nav>
      </div>
    </header>
  );
}
