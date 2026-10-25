import { Linkedin, Youtube } from "lucide-react";
import { SOCIAL } from "@/lib/content";
import { cn } from "@/lib/utils";

function XingIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M17.8 3.2h-3.3L10.3 9.8l3.4 6.2H17l-3.4-6.2 4.2-6.6Zm-8.2 4.4H6.3L4.8 10l4.1 7.4h3.3L8 10.4l1.6-2.8Z" />
    </svg>
  );
}

const ICONS = {
  YouTube: Youtube,
  LinkedIn: Linkedin,
  XING: XingIcon,
} as const;

export function SocialLinks({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const tone =
    variant === "light"
      ? "border-white/15 text-paper/80 hover:border-excel hover:text-excel"
      : "border-line text-ink hover:border-excel-ink hover:text-excel-ink";

  return (
    <nav aria-label="Social Media" className={cn("flex items-center gap-2", className)}>
      {SOCIAL.map((item) => {
        const Icon = ICONS[item.name];
        return (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="me noopener noreferrer"
            aria-label={`${item.name} – Excelhero`}
            className={cn(
              "grid size-11 place-items-center rounded-md border transition-colors duration-150",
              tone,
            )}
          >
            <Icon className="size-4" />
          </a>
        );
      })}
    </nav>
  );
}
