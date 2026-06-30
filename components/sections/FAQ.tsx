import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/Accordion";
import { FAQS } from "@/lib/data";

export function FAQ() {
  return (
    <section id="faq" className="section scroll-mt-24 bg-beige">
      <div className="container-px">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Questions, answered</span>
          <h2 className="h-display mt-5 text-4xl leading-tight md:text-5xl">
            The things everyone asks first.
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="mt-12">
          <Accordion items={FAQS} />
        </Reveal>
      </div>
    </section>
  );
}
