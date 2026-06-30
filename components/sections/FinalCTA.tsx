import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA({
  headline = "You deserve to be taken seriously.",
  sub = "Your next opportunity is going to Google you. Give them something worth finding.",
}: {
  headline?: string;
  sub?: string;
}) {
  return (
    <section className="section bg-white">
      <div className="container-px">
        <Reveal>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-charcoal px-8 py-16 text-center text-white md:px-16 md:py-24">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sage/25 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-terracotta/20 blur-3xl" />
            <div className="relative">
              <h2 className="h-display mx-auto max-w-2xl text-balance text-4xl leading-[1.05] text-white md:text-5xl">
                {headline}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
                {sub}
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/checkout"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-charcoal transition-all duration-300 hover:bg-beige hover:shadow-glow sm:w-auto"
                >
                  Get my website — $50
                </Link>
                <Link
                  href="/#portfolio"
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
                >
                  See examples
                </Link>
              </div>
              <p className="mt-6 text-sm text-white/50">
                Live in 5–7 days · Happiness guarantee · You own everything
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
