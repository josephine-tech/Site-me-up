import { Reveal } from "@/components/ui/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import { INCLUDED } from "@/lib/data";

export function Included() {
  return (
    <section id="included" className="section scroll-mt-24 bg-white">
      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <span className="eyebrow">What&apos;s included</span>
              <h2 className="h-display mt-5 text-4xl leading-tight md:text-5xl">
                Everything you need to look the part.
              </h2>
              <p className="mt-4 text-lg text-charcoal/65">
                No hidden extras. No surprise invoices. Every website comes with
                the full experience — designed, written and built for you.
              </p>

              <div className="mt-8 overflow-hidden rounded-3xl border border-sage/30 bg-gradient-to-br from-sage/15 to-peach/20 p-8">
                <p className="font-heading text-2xl font-bold text-charcoal">
                  AI-Assisted.{" "}
                  <span className="text-terracotta">Human Perfected.</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                  All websites are built using modern AI workflows and reviewed
                  by experienced designers, developers and copywriters. The
                  speed of AI. The taste of people who&apos;ve done this
                  thousands of times.
                </p>
              </div>
            </div>
          </Reveal>

          <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {INCLUDED.map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-2xl border border-charcoal/10 bg-beige/50 p-6 transition-all duration-300 hover:border-charcoal/15 hover:bg-white hover:shadow-soft">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-charcoal text-white">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8.5L6.5 12L13 4.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <h3 className="mt-4 font-heading text-base font-semibold text-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-charcoal/60">
                    {item.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
