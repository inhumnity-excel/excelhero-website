import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { LOGIN_HREF, MEGA_NAV, type NavGroup, type NavLink } from "@/lib/nav";
import { cn } from "@/lib/utils";

function ItemLink({
  item,
  className,
  onClick,
}: {
  item: NavLink;
  className?: string;
  onClick?: () => void;
}) {
  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        onClick={onClick}
        className={className}
      >
        {item.label}
      </a>
    );
  }
  return (
    <Link to={item.to ?? "/"} onClick={onClick} className={className}>
      {item.label}
    </Link>
  );
}

export function DesktopMegaNav() {
  const [open, setOpen] = useState<string | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(null);
  }, [pathname]);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(null);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(null);
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={wrapRef} className="hidden items-center lg:flex" aria-label="Hauptnavigation">
      {MEGA_NAV.map((group) => (
        <DesktopItem
          key={group.label}
          group={group}
          open={open === group.label}
          onOpen={() => setOpen(group.label)}
          onClose={() => setOpen(null)}
          pathname={pathname}
        />
      ))}
      <a
        href={LOGIN_HREF}
        target="_blank"
        rel="noreferrer"
        className="rounded-md px-2 py-2 text-[13px] font-medium text-paper/80 hover:bg-white/6 hover:text-paper"
      >
        Login
      </a>
    </div>
  );
}

function DesktopItem({
  group,
  open,
  onOpen,
  onClose,
  pathname,
}: {
  group: NavGroup;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  pathname: string;
}) {
  const id = useId();
  const hasChildren = Boolean(group.children?.length);
  const active =
    (group.to && (pathname === group.to || pathname.startsWith(`${group.to}/`))) ||
    group.children?.some((c) => c.to && (pathname === c.to || pathname.startsWith(`${c.to}/`)));

  const triggerClass = cn(
    "inline-flex items-center gap-0.5 rounded-md px-2 py-2 text-[13px] font-medium text-paper/80 transition-colors hover:bg-white/6 hover:text-paper",
    (open || active) && "bg-white/8 text-paper",
  );

  if (!hasChildren && group.to) {
    return (
      <Link to={group.to} className={triggerClass}>
        {group.label}
      </Link>
    );
  }

  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        type="button"
        className={triggerClass}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={id}
        onClick={() => (open ? onClose() : onOpen())}
      >
        {group.label}
        <ChevronDown className={cn("size-3.5 opacity-70", open && "rotate-180")} />
      </button>
      {open && group.children ? (
        <div
          id={id}
          role="menu"
          className="absolute left-0 top-full z-50 min-w-[16rem] rounded-b-xl border border-white/10 bg-navy py-2 shadow-navy"
        >
          {group.children.map((item) => (
            <ItemLink
              key={item.label}
              item={item}
              onClick={onClose}
              className="block px-4 py-2 text-sm text-paper/80 hover:bg-white/8 hover:text-paper"
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function MobileMegaNav({ onNavigate }: { onNavigate: () => void }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="flex flex-col">
      {MEGA_NAV.map((group) => {
        const hasChildren = Boolean(group.children?.length);
        if (!hasChildren && group.to) {
          return (
            <Link
              key={group.label}
              to={group.to}
              onClick={onNavigate}
              className="border-b border-white/8 py-3.5 text-base text-paper/90"
            >
              {group.label}
            </Link>
          );
        }
        return (
          <div key={group.label} className="border-b border-white/8">
            <button
              type="button"
              className="flex w-full items-center justify-between py-3.5 text-left text-base text-paper/90"
              aria-expanded={open === group.label}
              onClick={() => setOpen(open === group.label ? null : group.label)}
            >
              {group.label}
              <ChevronDown
                className={cn("size-4 opacity-70", open === group.label && "rotate-180")}
              />
            </button>
            {open === group.label && group.children ? (
              <div className="pb-3 pl-3">
                {group.children.map((item) => (
                  <ItemLink
                    key={item.label}
                    item={item}
                    onClick={onNavigate}
                    className="block py-2 text-sm text-paper/70 hover:text-excel"
                  />
                ))}
              </div>
            ) : null}
          </div>
        );
      })}
      <a
        href={LOGIN_HREF}
        target="_blank"
        rel="noreferrer"
        className="py-3.5 text-base text-paper/90"
      >
        Teilnehmer Login
      </a>
    </div>
  );
}
