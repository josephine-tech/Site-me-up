import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { CASE_STUDIES, getCaseStudy, getAudience } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { WebsiteMockup } from "@/components/WebsiteMockup";
import { FinalCTA } from "@/components/sections/FinalCTA";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const c = getCaseStudy(params.slug);
  if (!c) return {};
  return {
    title: `${c.name} — Case Study`,
    description: c.resultHeadline,
  };
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  const audience = getAudience(study.audience);
  const others = CASE_STUDIES.filter((c) => c.slug !== study.slug).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-28 md:pt-36">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-beige/60 via-white to-white" />
        <div className="container-px">
          <Reveal>
            <Link
              href="/#portfolio"
              className="text-sm font-medium text-charcoal/50 transition-colors hover:text-charcoal"
            >
              ← All case studies
            </Link>
            <div className="mt-6 grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
              <div>
                <div className="flex items-center gap-2">
                  <span className="eyebrow">Case study</span>
                  {audience && (
                    <Link
                      href={`/for/${audience.slug}`}
                      className="eyebrow transition-colors hover:bg-white"
                    >
                      {audience.emoji} {audience.title}
                    </Link>
                  )}
                </div>
                <h1 className="h-display mt-5 text-balance text-3xl leading-[1.1] sm:text-4xl md:text-5xl">
                  {study.resultHeadline}
                </h1>
                <p className="mt-4 text-base text-charcoal/55">
                  {study.name} · {study.role}
                </p>
              </div>
              <div className="lg:pl-6">
                <WebsiteMockup
                  theme={study.theme}
                  layout={study.layout}
                  name={study.name}
                  role={study.role}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* METRICS */}
      <section className="py-12">
        <div className="container-px">
          <Reveal>
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-charcoal/10 bg-charcoal/10 sm:grid-cols-3">
              {study.metrics.map((m) => (
                <div key={m.label} className="bg-white p-7 text-center">
                  <p className="font-heading text-3xl font-bold text-terracotta md:text-4xl">
                    {m.value}
                  </p>
                  <p className="mt-1 text-sm text-charcoal/55">{m.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* NARRATIVE */}
      <section className="section pt-8">
        <div className="container-px">
          <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-3">
            {[
              { label: "The challenge", body: study.challenge },
              { label: "What we did", body: study.approach },
              { label: "The outcome", body: study.outcome },
            ].map((block, i) => (
              <Reveal key={block.label} delay={i * 0.08}>
                <div>
                  <h2 className="font-heading text-sm font-semibold uppercase tracking-widest text-sage">
                    {block.label}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-charcoal/75">
                    {block.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* QUOTE */}
          <Reveal delay={0.1}>
            <blockquote className="mx-auto mt-16 max-w-3xl rounded-[2rem] border border-charcoal/10 bg-beige p-10 text-center md:p-14">
              <p className="font-heading text-2xl leading-snug text-charcoal md:text-3xl">
                &ldquo;{study.quote}&rdquo;
              </p>
              <footer className="mt-6 text-sm text-charcoal/55">
                <span className="font-semibold text-charcoal">
                  {study.name}
                </span>{" "}
                · {study.role}
              </footer>
            </blockquote>
          </Reveal>

          {/* DELIVERABLES */}
          <Reveal delay={0.1}>
            <div className="mx-auto mt-12 max-w-3xl">
              <h3 className="text-center font-heading text-sm font-semibold uppercase tracking-widest text-charcoal/40">
                What was delivered
              </h3>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {study.deliverables.map((d) => (
                  <span
                    key={d}
                    className="inline-flex items-center gap-2 rounded-full border border-charcoal/10 bg-white px-4 py-2 text-sm text-charcoal/75"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MORE */}
      <section className="section bg-beige">
        <div className="container-px">
          <Reveal>
            <h2 className="h-display text-2xl md:text-3xl">More results</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {others.map((c) => (
              <Reveal key={c.slug}>
                <Link
                  href={`/work/${c.slug}`}
                  className="group block rounded-3xl border border-charcoal/10 bg-white p-3 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="overflow-hidden rounded-2xl">
                    <WebsiteMockup theme={c.theme} layout={c.layout} />
                  </div>
                  <p className="p-4 font-heading text-base font-semibold leading-snug text-charcoal">
                    {c.resultHeadline}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
