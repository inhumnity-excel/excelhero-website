import { createFileRoute } from "@tanstack/react-router";
import { FeedbackPage } from "@/components/restored/feedback-page";

export const Route = createFileRoute("/feedback")({
  head: () => ({
    meta: [
      { title: 'Feedback | Excelhero' },
      { name: "robots", content: 'noindex, nofollow' },
    ],
  }),
  component: FeedbackPage,
});
