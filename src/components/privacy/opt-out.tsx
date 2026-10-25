import { useEffect, useState } from "react";

export function OptOut({ storageKey, label }: { storageKey: string; label: string }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(storageKey) === "1") setDone(true);
    } catch {
      /* ignore */
    }
  }, [storageKey]);

  return (
    <p className="my-3">
      <button
        type="button"
        onClick={() => {
          try {
            localStorage.setItem(storageKey, "1");
            document.cookie = `${storageKey}=1;path=/;max-age=31536000;SameSite=Lax`;
          } catch {
            /* ignore */
          }
          setDone(true);
        }}
        className="text-left font-medium text-excel-ink underline-offset-2 hover:underline"
      >
        {done ? "Opt-out gespeichert. Tracking für dieses Gerät ist deaktiviert." : label}
      </button>
    </p>
  );
}
