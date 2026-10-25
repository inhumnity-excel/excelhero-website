import { createFileRoute } from "@tanstack/react-router";
import { PopularArticles } from "@/components/home/articles";
import { Benefits } from "@/components/home/benefits";
import { Calculator } from "@/components/home/calculator";
import { CtaBand } from "@/components/home/cta-band";
import { Faq } from "@/components/home/faq";
import { Hero } from "@/components/home/hero";
import { Instructor } from "@/components/home/instructor";
import { Resources } from "@/components/home/resources";
import { Testimonials } from "@/components/home/testimonials";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <Calculator />
      <Instructor />
      <Testimonials />
      <Resources />
      <PopularArticles />
      <Faq />
      <CtaBand />
    </main>
  );
}
