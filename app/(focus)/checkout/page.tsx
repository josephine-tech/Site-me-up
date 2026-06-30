"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

const DELIVERABLES = [
  "Custom-designed personal website",
  "Professional copywriting",
  "Looks incredible on every device",
  "SEO basics so you're found on Google",
  "Portfolio & contact sections",
  "Personal branding guidance",
  "Hosting setup assistance",
];

export default function CheckoutPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [promo, setPromo] = useState("");
  const [applied, setApplied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const total = useMemo(() => (applied ? 47.5 : 50), [applied]);

  function applyPromo() {
    if (promo.trim().toUpperCase() === "SERIOUS5") {
      setApplied(true);
      setError("");
    } else {
      setError("That code isn't valid. Try SERIOUS5.");
    }
  }

  async function pay(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return setError("Please add your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return setError("Please enter a valid email.");
    setError("");
    setLoading(true);
    // Placeholder: integrate Stripe Checkout / payment provider here.
    // e.g. POST /api/checkout -> redirect to provider session.
    await new Promise((r) => setTimeout(r, 900));
    router.push("/success");
  }

  return (
    <div className="container-px py-10 md:py-16">
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_0.85fr]">
        {/* LEFT — form */}
        <div className="order-2 lg:order-1">
          <h1 className="h-display text-3xl md:text-4xl">
            You&apos;re two minutes from being taken seriously.
          </h1>
          <p className="mt-3 text-charcoal/65">
            Complete your order and we&apos;ll send your onboarding form right
            away. Your website goes live in 5–7 days.
          </p>

          <form
            onSubmit={pay}
            className="mt-8 rounded-3xl border border-charcoal/10 bg-white p-6 shadow-soft md:p-8"
          >
            <div className="grid gap-5">
              <div>
                <label className="text-sm font-medium text-charcoal">
                  Full name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jordan Avery"
                  className="mt-2 w-full rounded-xl border border-charcoal/15 bg-beige/40 px-4 py-3 outline-none transition-colors placeholder:text-charcoal/35 focus:border-sage focus:bg-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-charcoal">
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-charcoal/15 bg-beige/40 px-4 py-3 outline-none transition-colors placeholder:text-charcoal/35 focus:border-sage focus:bg-white"
                />
                <p className="mt-1.5 text-xs text-charcoal/45">
                  We&apos;ll send your receipt and onboarding link here.
                </p>
              </div>

              {/* faux card field (demo) */}
              <div>
                <label className="text-sm font-medium text-charcoal">
                  Card details
                </label>
                <div className="mt-2 flex items-center gap-2 rounded-xl border border-charcoal/15 bg-beige/40 px-4 py-3 text-charcoal/45">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <rect
                      x="2"
                      y="5"
                      width="20"
                      height="14"
                      rx="2.5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                    <path d="M2 9.5h20" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                  <span className="text-sm">Card · Apple Pay · Google Pay</span>
                  <span className="ml-auto text-xs">Demo</span>
                </div>
                <p className="mt-1.5 text-xs text-charcoal/45">
                  Payment processing is wired to your provider on launch (Stripe,
                  etc.). This demo skips straight to onboarding.
                </p>
              </div>

              {error && (
                <p className="rounded-lg bg-terracotta/10 px-3 py-2 text-sm text-terracotta">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full !py-4 text-base disabled:opacity-70"
              >
                {loading ? "Processing…" : `Pay $${total.toFixed(2)} & start`}
              </button>

              <div className="flex items-center justify-center gap-4 text-xs text-charcoal/45">
                <span>🔒 Secure</span>
                <span>· 7-day happiness guarantee</span>
                <span>· You own everything</span>
              </div>
            </div>
          </form>
        </div>

        {/* RIGHT — order summary */}
        <aside className="order-1 lg:order-2">
          <div className="lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-3xl border border-charcoal/10 bg-charcoal text-white shadow-lift">
              <div className="p-6 md:p-7">
                <p className="text-xs font-semibold uppercase tracking-widest text-sage">
                  Your order
                </p>
                <h2 className="mt-2 font-heading text-xl font-bold">
                  Premium Personal Website
                </h2>
                <ul className="mt-5 space-y-2.5">
                  {DELIVERABLES.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2.5 text-sm text-white/80"
                    >
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-sage text-charcoal">
                        <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M2.5 6.5L5 9l4.5-5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-white/10 p-6 md:p-7">
                {/* promo */}
                {!applied ? (
                  <div className="flex gap-2">
                    <input
                      value={promo}
                      onChange={(e) => setPromo(e.target.value)}
                      placeholder="Discount code"
                      className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none placeholder:text-white/40 focus:border-sage"
                    />
                    <button
                      onClick={applyPromo}
                      type="button"
                      className="shrink-0 rounded-lg border border-white/20 px-4 text-sm font-semibold transition-colors hover:bg-white/10"
                    >
                      Apply
                    </button>
                  </div>
                ) : (
                  <p className="flex items-center gap-2 text-sm text-sage">
                    <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                    Code SERIOUS5 applied — 5% off
                  </p>
                )}

                <div className="mt-5 space-y-2 text-sm">
                  <div className="flex justify-between text-white/70">
                    <span>Website</span>
                    <span>$50.00</span>
                  </div>
                  {applied && (
                    <div className="flex justify-between text-sage">
                      <span>Discount (5%)</span>
                      <span>−$2.50</span>
                    </div>
                  )}
                  <div className="flex justify-between border-t border-white/10 pt-3 text-base font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <p className="mt-3 text-xs text-white/45">
                  One-time payment. No subscriptions. Delivered in 5–7 days.
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-charcoal/10 bg-white p-4 text-center text-sm text-charcoal/60">
              ⭐️ 4.9/5 from 2,400+ ambitious people
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
