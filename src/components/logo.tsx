import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({
  className,
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      to="/"
      className={cn("inline-flex items-center no-underline", className)}
      aria-label="Excelhero Startseite"
    >
      <img
        src="/images/logo-white.png"
        alt="Excelhero"
        width={197}
        height={75}
        className="h-9 w-auto md:h-10"
      />
    </Link>
  );
}
