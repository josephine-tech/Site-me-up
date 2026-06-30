import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const VALUE_LINES = [
  "Custom-designed website",
  "Professional copywriting",
  "Looks incredible everywhere",
  "SEO basics + Google-ready",
  "Portfolio & contact sections",
  "Personal branding guidance",
  "Hosting setup assistance",
  "Delivered in 5–7 days",
];

export function PricingReveal() {
  return (
    <section id="pricing" className="section scroll-mt-24 bg-white">
      <div className="container-px">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">The part everyone double-takes at</span>
          <h2 className="h-display mt-5 text-4xl leading-[1.05] md:text-6xl">
            Looks like a $2,000 website.
            <br />
            <span className="text-gradient">Costs $50.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-charcoal/65">
            Because we use modern AI-assisted workflows without sacrificing
            human quality. You get the agency result — without the agency
            invoice.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-14 max-w-lg">
            <div className="relative overflow-hidden rounded-[2rem] border border-charcoal/10 bg-charcoal p-8 text-white shadow-lift md:p-10">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-sage/30 blur-3xl" />
              <div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-terracotta/20 blur-3xl" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/80">
                    The whole thing
                  </span>
                  <span className="rounded-full bg-terracotta px-3 py-1 text-xs font-semibold text-white">
                    Save $1,950
                  </span>
                </div>

                <div className="mt-8 flex items-end gap-3">
                  <span className="font-heading text-6xl font-bold leading-none md:text-7xl">
                    $50
                  </span>
                  <span className="mb-2 text-lg text-white/45 line-through">
                    $2,000
                  </span>
                </div>
                <p className="mt-2 text-sm text-white/60">
                  One-time. No subscriptions. No surprise upsells.
                </p>

                <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {VALUE_LINES.map((line) => (
                    <li
                      key={line}
                      className="flex items-center gap-2.5 text-sm text-white/85"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage text-charcoal">
                        <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M2.5 6.5L5 9l4.5-5"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {line}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/checkout"
                  className="mt-9 flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-base font-semibold text-charcoal transition-all duration-300 hover:bg-beige hover:shadow-glow"
                >
                  Get started today
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <p className="mt-4 text-center text-xs text-white/50">
                  Loved it or we&apos;ll make it right. Backed by our happiness
                  guarantee.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
