import Link from "next/link";
import { WebsiteMockup } from "@/components/WebsiteMockup";
import type { CaseStudy } from "@/lib/data";

export function PortfolioCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group block rounded-3xl border border-charcoal/10 bg-white p-3 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
    >
      <div className="overflow-hidden rounded-2xl">
        <div className="transition-transform duration-500 group-hover:scale-[1.03]">
          <WebsiteMockup theme={study.theme} layout={study.layout} />
        </div>
      </div>
      <div className="p-4">
        <p className="font-heading text-lg font-semibold leading-snug text-charcoal">
          {study.resultHeadline}
        </p>
        <p className="mt-2 text-sm text-charcoal/55">{study.cardSub}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-wider text-charcoal/40">
            {study.name} · {study.role}
          </span>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-terracotta transition-transform group-hover:translate-x-0.5">
            Case study
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
