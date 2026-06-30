import type { Metadata } from "next";
import Link from "next/link";
import { PricingReveal } from "@/components/sections/PricingReveal";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Reveal } from "@/components/ui/Reveal";
import { INCLUDED } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing — $50, Everything Included",
  description:
    "One honest price. Looks like a $2,000 website, costs $50. Everything included, delivered in 5–7 days.",
};

const COMPARISON = [
  { feature: "Custom-designed website", us: true, agency: true, diy: false },
  { feature: "Professional copywriting", us: true, agency: true, diy: false },
  { feature: "Looks incredible on every device", us: true, agency: true, diy: "Maybe" },
  { feature: "SEO basics", us: true, agency: true, diy: false },
  { feature: "Personal branding guidance", us: true, agency: "$$$", diy: false },
  { feature: "Delivered in days", us: "5–7 days", agency: "6–12 weeks", diy: "Months" },
  { feature: "You own everything", us: true, agency: "Sometimes", diy: true },
  { feature: "Price", us: "$50", agency: "$2,000+", diy: "Your time" },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true)
    return (
      <span className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-sage/20 text-charcoal">
        <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
          <path
            d="M2.5 6.5L5 9l4.5-5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );
  if (value === false)
    return (
      <span className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-charcoal/5 text-charcoal/30">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M3 3l6 6M9 3l-6 6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
    );
  return <span className="text-sm font-medium text-charcoal">{value}</span>;
}

export default function PricingPage() {
  return (
    <>
      <section className="pt-28 text-center md:pt-36">
        <div className="container-px">
          <Reveal>
            <span className="eyebrow">Pricing</span>
            <h1 className="h-display mx-auto mt-5 max-w-3xl text-balance text-4xl leading-[1.05] md:text-6xl">
              One honest price. No catch.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-charcoal/65">
              The whole experience — design, copy, build and launch — for a
              price that makes agencies nervous.
            </p>
          </Reveal>
        </div>
      </section>

      <PricingReveal />

      {/* COMPARISON */}
      <section className="section bg-beige">
        <div className="container-px">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">How we compare</span>
            <h2 className="h-display mt-5 text-3xl leading-tight md:text-4xl">
              $2,000 quality, without the $2,000.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border border-charcoal/10 bg-white shadow-soft">
              <div className="grid grid-cols-4 border-b border-charcoal/10 bg-charcoal text-white">
                <div className="p-4 text-sm font-semibold md:p-5" />
                <div className="p-4 text-center text-sm font-bold md:p-5">
                  Site Me Up
                </div>
                <div className="p-4 text-center text-sm font-medium text-white/70 md:p-5">
                  Agency
                </div>
                <div className="p-4 text-center text-sm font-medium text-white/70 md:p-5">
                  DIY builder
                </div>
              </div>
              {COMPARISON.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-4 items-center ${
                    i % 2 ? "bg-beige/40" : "bg-white"
                  }`}
                >
                  <div className="p-4 text-sm font-medium text-charcoal md:p-5">
                    {row.feature}
                  </div>
                  <div className="bg-sage/5 p-4 text-center md:p-5">
                    <Cell value={row.us} />
                  </div>
                  <div className="p-4 text-center md:p-5">
                    <Cell value={row.agency} />
                  </div>
                  <div className="p-4 text-center md:p-5">
                    <Cell value={row.diy} />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 text-center">
            <Link href="/checkout" className="btn-primary">
              Get my website — $50
            </Link>
          </Reveal>
        </div>
      </section>

      {/* INCLUDED quick list */}
      <section className="section bg-white">
        <div className="container-px">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="h-display text-3xl md:text-4xl">
              Everything in the $50.
            </h2>
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
            {INCLUDED.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-3 rounded-2xl border border-charcoal/10 bg-beige/40 p-4"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sage/20 text-charcoal">
                  <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2.5 6.5L5 9l4.5-5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-sm font-medium text-charcoal">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <FinalCTA />
    </>
  );
}
