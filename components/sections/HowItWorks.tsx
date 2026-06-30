import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import { STEPS } from "@/lib/data";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section scroll-mt-24 bg-charcoal text-white">
      <div className="container-px">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow !border-white/15 !bg-white/5 !text-white/70">
            How it works
          </span>
          <h2 className="h-display mt-5 text-4xl leading-tight text-white md:text-5xl">
            From you to live in four simple steps.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/65">
            No briefs to write. No designers to manage. No three-month
            timelines. Just a clear, guided path to a website you&apos;re proud
            of.
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <StaggerItem key={step.n}>
              <div className="relative h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-colors hover:bg-white/[0.07]">
                <p className="font-heading text-5xl font-bold text-sage/80">
                  {step.n}
                </p>
                <h3 className="mt-6 font-heading text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {step.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1} className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <span className="inline-flex items-center gap-2 rounded-full border border-sage/30 bg-sage/10 px-4 py-2 text-sm font-medium text-sage">
            <span className="h-1.5 w-1.5 rounded-full bg-sage" />
            Typical timeline: 5–7 days
          </span>
          <Link href="/checkout" className="btn-accent">
            Start now — $50
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
