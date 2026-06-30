import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import { PortfolioCard } from "@/components/PortfolioCard";
import { CASE_STUDIES } from "@/lib/data";

export function Portfolio() {
  return (
    <section id="portfolio" className="section scroll-mt-24 bg-white">
      <div className="container-px">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Real results</span>
            <h2 className="h-display mt-5 text-4xl leading-tight md:text-5xl">
              Websites that change how people are seen.
            </h2>
            <p className="mt-4 max-w-xl text-lg text-charcoal/65">
              We don&apos;t build pages. We build outcomes. Here&apos;s what
              happened when ambitious people finally looked the part.
            </p>
          </div>
          <Link
            href="/checkout"
            className="btn-ghost shrink-0"
          >
            Get yours — $50
          </Link>
        </Reveal>

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.map((study) => (
            <StaggerItem key={study.slug}>
              <PortfolioCard study={study} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
