import { createFileRoute } from "@tanstack/react-router";
import { BlackFridayPage } from "@/components/restored/black-friday-page";

export const Route = createFileRoute("/bf")({
  head: () => ({
    meta: [
      { title: "Excel Online Kurse | Excelhero" },
      {
        name: "description",
        content:
          "Effektiv und zeitsparend mit Excel arbeiten! Beschleunige deine Karriere mit herausragenden Excel Fähigkeiten. Mit Excel Online Kurse Skills ausbauen! Inkl. Q&A!",
      },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: Page,
});

function Page() {
  return <BlackFridayPage voucher="blackfriday25" />;
}
