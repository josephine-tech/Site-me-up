import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { AUDIENCES, getAudience, getCaseStudy } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import { Accordion } from "@/components/Accordion";
import { PortfolioCard } from "@/components/PortfolioCard";
import { WebsiteMockup } from "@/components/WebsiteMockup";
import { FinalCTA } from "@/components/sections/FinalCTA";

export function generateStaticParams() {
  return AUDIENCES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const a = getAudience(params.slug);
  if (!a) return {};
  return {
    title: `${a.title} — Premium Websites`,
    description: a.heroSub,
  };
}

export default function AudiencePage({
  params,
}: {
  params: { slug: string };
}) {
  const audience = getAudience(params.slug);
  if (!audience) notFound();

  const featured = audience.featured
    .map((s) => getCaseStudy(s))
    .filter(Boolean);
  const heroStudy = featured[0];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-28 md:pt-36">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-sage/20 blur-[120px]" />
          <div className="absolute -right-40 top-20 h-[380px] w-[380px] rounded-full bg-peach/40 blur-[120px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-beige/60 via-white to-white" />
        </div>
        <div className="container-px">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <Link
                href="/#portfolio"
                className="text-sm font-medium text-charcoal/50 transition-colors hover:text-charcoal"
              >
                ← All audiences
              </Link>
              <span className="eyebrow mt-4 inline-flex">
                <span>{audience.emoji}</span>
                {audience.heroEyebrow}
              </span>
              <h1 className="h-display mt-5 text-balance text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
                {audience.heroHeadline}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-charcoal/70">
                {audience.heroSub}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/checkout" className="btn-primary">
                  Get my website — $50
                </Link>
                <Link href="#examples" className="btn-ghost">
                  See examples
                </Link>
              </div>
            </Reveal>

            {heroStudy && (
              <Reveal delay={0.15}>
                <div className="lg:pl-6">
                  <WebsiteMockup
                    theme={heroStudy.theme}
                    layout={heroStudy.layout}
                    name={heroStudy.name}
                    role={heroStudy.role}
                  />
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="section bg-white">
        <div className="container-px">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Sound familiar?</span>
            <h2 className="h-display mt-5 text-3xl leading-tight md:text-4xl">
              The quiet ways you&apos;re being overlooked.
            </h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-3">
            {audience.pains.map((p) => (
              <StaggerItem key={p.title}>
                <div className="h-full rounded-3xl border border-charcoal/10 bg-beige/40 p-7">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M8 4v5M8 11.5v.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                      <circle
                        cx="8"
                        cy="8"
                        r="6.5"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      />
                    </svg>
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-charcoal">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                    {p.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* DESIRED OUTCOMES */}
      <section className="section bg-charcoal text-white">
        <div className="container-px">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow !border-white/15 !bg-white/5 !text-white/70">
              Imagine instead
            </span>
            <h2 className="h-display mt-5 text-3xl leading-tight text-white md:text-4xl">
              What changes when you finally look the part.
            </h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-3">
            {audience.outcomes.map((o) => (
              <StaggerItem key={o.title}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sage text-charcoal">
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
                  <h3 className="mt-5 font-heading text-lg font-semibold text-white">
                    {o.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {o.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* PORTFOLIO EXAMPLES */}
      <section id="examples" className="section scroll-mt-24 bg-white">
        <div className="container-px">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Built for people like you</span>
            <h2 className="h-display mt-5 text-3xl leading-tight md:text-4xl">
              Real {audience.title.toLowerCase()}. Real results.
            </h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2">
            {featured.map(
              (study) =>
                study && (
                  <StaggerItem key={study.slug}>
                    <PortfolioCard study={study} />
                  </StaggerItem>
                )
            )}
          </StaggerGroup>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="section bg-beige">
        <div className="container-px">
          <Reveal className="mx-auto max-w-3xl">
            <figure className="rounded-[2rem] border border-charcoal/10 bg-white p-10 text-center shadow-soft md:p-14">
              <div className="flex justify-center gap-0.5 text-terracotta">
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg
                    key={i}
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M8 1l2.06 4.18 4.61.67-3.34 3.25.79 4.6L8 11.52 3.88 13.7l.79-4.6L1.33 5.85l4.61-.67L8 1z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-6 font-heading text-2xl leading-snug text-charcoal md:text-3xl">
                &ldquo;{audience.testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm text-charcoal/55">
                <span className="font-semibold text-charcoal">
                  {audience.testimonial.name}
                </span>{" "}
                · {audience.testimonial.role}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* FEATURE BREAKDOWN */}
      <section className="section bg-white">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <span className="eyebrow">What you get</span>
              <h2 className="h-display mt-5 text-3xl leading-tight md:text-4xl">
                Everything tailored to {audience.title.toLowerCase()}.
              </h2>
              <p className="mt-4 text-lg text-charcoal/65">
                Not a generic template. A site shaped around exactly what people
                like you need to be taken seriously.
              </p>
              <Link href="/checkout" className="btn-primary mt-7">
                Get started — $50
              </Link>
            </Reveal>
            <StaggerGroup className="grid gap-3 sm:grid-cols-2">
              {audience.features.map((f) => (
                <StaggerItem key={f}>
                  <div className="flex h-full items-center gap-3 rounded-2xl border border-charcoal/10 bg-beige/40 p-5">
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
                      {f}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-beige">
        <div className="container-px">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Questions</span>
            <h2 className="h-display mt-5 text-3xl leading-tight md:text-4xl">
              What {audience.title.toLowerCase()} ask us.
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="mt-10">
            <Accordion items={audience.faqs} />
          </Reveal>
        </div>
      </section>

      <FinalCTA
        headline={audience.heroHeadline}
        sub="Join thousands of ambitious people who decided to stop being overlooked."
      />
    </>
  );
}
