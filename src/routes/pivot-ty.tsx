import { createFileRoute } from "@tanstack/react-router";
import { ThankYouPage } from "@/components/restored/thank-you-page";
import { thankYouPage } from "@/lib/restored/thank-you";

const page = thankYouPage("pivot-ty");

export const Route = createFileRoute("/pivot-ty")({
  head: () => ({
    meta: [
      { title: `${page.documentTitle} | Excelhero` },
      { name: "description", content: page.description },
      { name: "robots", content: page.robots },
    ],
  }),
  component: Page,
});

function Page() {
  return <ThankYouPage slug="pivot-ty" />;
}
