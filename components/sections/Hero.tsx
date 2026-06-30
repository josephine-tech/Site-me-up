"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { WebsiteMockup } from "@/components/WebsiteMockup";
import { TRUST_METRICS } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-0 h-[480px] w-[480px] rounded-full bg-sage/20 blur-[120px]" />
        <div className="absolute -right-40 top-40 h-[420px] w-[420px] rounded-full bg-peach/40 blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-beige/60 via-white to-white" />
      </div>

      <div className="container-px">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-sage" />
              Premium personal websites · only $50
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.05 }}
            className="h-display mt-6 text-balance text-5xl leading-[1.02] sm:text-6xl md:text-7xl"
          >
            You Deserve To Be{" "}
            <span className="text-gradient">Taken Seriously.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.12 }}
            className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-charcoal/70 md:text-xl"
          >
            Professional websites for ambitious people. Designed, written, and
            delivered in days — not months.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.18 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link href="/checkout" className="btn-primary w-full sm:w-auto">
              Get my website
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
            <Link
              href="#portfolio"
              className="btn-ghost w-full sm:w-auto"
            >
              See examples
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-5 text-sm text-charcoal/50"
          >
            ⭐️ 4.9/5 from 2,400+ ambitious people · Live in 5–7 days
          </motion.p>
        </div>

        {/* Showcase of premium websites for different professions */}
        <div className="relative mx-auto mt-16 max-w-5xl md:mt-20">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                theme: "charcoal" as const,
                layout: "profile" as const,
                name: "Josephine",
                role: "Marketing Lead",
                d: 0,
                lift: "lg:-translate-y-6",
              },
              {
                theme: "beige" as const,
                layout: "portfolio" as const,
                name: "Sarah",
                role: "Product Designer",
                d: 0.1,
                lift: "lg:translate-y-2",
              },
              {
                theme: "teal" as const,
                layout: "consultant" as const,
                name: "David",
                role: "Strategy Consultant",
                d: 0.2,
                lift: "lg:-translate-y-10",
              },
            ].map((m) => (
              <motion.div
                key={m.name}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease, delay: 0.35 + m.d }}
                className={m.lift}
              >
                <WebsiteMockup
                  theme={m.theme}
                  layout={m.layout}
                  name={m.name}
                  role={m.role}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* trust strip */}
        <div className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-6 border-t border-charcoal/10 pt-10 md:grid-cols-4">
          {TRUST_METRICS.map((m) => (
            <div key={m.label} className="text-center">
              <p className="font-heading text-2xl font-bold text-charcoal md:text-3xl">
                {m.value}
              </p>
              <p className="mt-1 text-xs text-charcoal/55 md:text-sm">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
