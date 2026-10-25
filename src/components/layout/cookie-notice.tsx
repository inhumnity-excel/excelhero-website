import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const KEY = "excelhero-cookie-ok";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-xl bg-navy p-5 text-paper shadow-navy sm:flex-row sm:items-center">
        <p className="flex-1 text-sm leading-relaxed text-paper/80">
          Diese Seite speichert nur technisch nötige Einstellungen lokal im
          Browser. Mehr dazu in der{" "}
          <Link to="/datenschutzerklaerung" className="text-excel underline-offset-2 hover:underline">
            Datenschutzerklärung
          </Link>
          .
        </p>
        <Button
          size="sm"
          onClick={() => {
            try {
              localStorage.setItem(KEY, "1");
            } catch {
              /* ignore */
            }
            setVisible(false);
          }}
        >
          Verstanden
        </Button>
      </div>
    </div>
  );
}
