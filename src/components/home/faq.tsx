import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@/lib/content";

export function Faq() {
  return (
    <section className="bg-paper px-5 py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-excel-ink">
          Excel FAQ
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Häufige Fragen
        </h2>
        <Accordion type="single" collapsible className="mt-8">
          {FAQ.map((item, i) => (
            <AccordionItem key={item.q} value={`q-${i}`}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
