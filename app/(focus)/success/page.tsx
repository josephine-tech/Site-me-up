import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "You're Officially Getting Taken Seriously",
  description: "Payment confirmed. Here's what happens next.",
};

const NEXT_STEPS = [
  {
    n: "01",
    title: "Check your inbox",
    body: "Your welcome email and onboarding link are on their way right now.",
  },
  {
    n: "02",
    title: "Tell us about you",
    body: "Complete the short onboarding form — it takes about 10 minutes.",
  },
  {
    n: "03",
    title: "We build your site",
    body: "Our team designs, writes and builds your website in 5–7 days.",
  },
  {
    n: "04",
    title: "Review & launch",
    body: "You review, we refine, and your new presence goes live.",
  },
];

export default function SuccessPage() {
  return (
    <div className="container-px py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sage/20">
            <svg width="30" height="30" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8.5L6.5 12L13 4.5"
                stroke="#3D5D4D"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="h-display mt-7 text-balance text-4xl leading-[1.05] md:text-5xl">
            You&apos;re officially getting taken seriously.
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-lg text-charcoal/65">
            Payment confirmed — welcome to Site Me Up. The hard part is over.
            Here&apos;s exactly what happens from here.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 grid gap-3 text-left sm:grid-cols-2">
            {NEXT_STEPS.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-charcoal/10 bg-white p-5 shadow-soft"
              >
                <p className="font-heading text-2xl font-bold text-sage">
                  {s.n}
                </p>
                <h3 className="mt-2 font-heading text-base font-semibold text-charcoal">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm text-charcoal/60">{s.body}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/onboarding" className="btn-primary">
              Start onboarding now
            </Link>
            <Link href="/" className="btn-ghost">
              Back to home
            </Link>
          </div>
          <p className="mt-5 text-sm text-charcoal/45">
            Didn&apos;t get the email? Check spam, or it&apos;ll arrive within a
            few minutes.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
