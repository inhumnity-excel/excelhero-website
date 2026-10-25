import { createFileRoute } from "@tanstack/react-router";
import { MailTwilioPage } from "@/components/restored/landing-pages";

export const Route = createFileRoute("/mail-twilio")({
  head: () => ({
    meta: [
      { title: 'mail-twilio | Excelhero' },
      { name: "robots", content: 'noindex, nofollow' },
    ],
  }),
  component: MailTwilioPage,
});
