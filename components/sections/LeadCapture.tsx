"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

export function LeadCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );
  const [code] = useState("SERIOUS5");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    // Placeholder: connect to email marketing platform (e.g. Klaviyo / Mailchimp / ConvertKit).
    // POST /api/subscribe -> { email }. Simulated here for the front-end build.
    await new Promise((r) => setTimeout(r, 700));
    setStatus("done");
  }

  return (
    <section id="offer" className="section scroll-mt-24 bg-white">
      <div className="container-px">
        <Reveal>
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-charcoal/10 bg-gradient-to-br from-beige via-peach/30 to-burnt/20 p-8 md:p-14">
            <div className="absolute -right-16 top-0 h-48 w-48 rounded-full bg-sage/30 blur-3xl" />
            <div className="relative grid items-center gap-8 md:grid-cols-[1.1fr_1fr]">
              <div>
                <span className="eyebrow">Not ready yet? Take 5% with you.</span>
                <h2 className="h-display mt-5 text-3xl leading-tight md:text-4xl">
                  Get 5% off your website.
                </h2>
                <p className="mt-3 text-base text-charcoal/70">
                  Drop your email and we&apos;ll send a discount code — plus a
                  little inspiration for how good your presence could look.
                </p>
              </div>

              <div>
                {status === "done" ? (
                  <div className="rounded-2xl border border-sage/40 bg-white p-7 text-center shadow-soft">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sage/20">
                      <svg width="22" height="22" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M3 8.5L6.5 12L13 4.5"
                          stroke="#3D5D4D"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="mt-4 font-heading text-lg font-semibold text-charcoal">
                      Check your inbox!
                    </p>
                    <p className="mt-1 text-sm text-charcoal/60">
                      Here&apos;s your code to get started right now:
                    </p>
                    <p className="mt-3 inline-block rounded-lg border border-dashed border-charcoal/30 bg-beige px-4 py-2 font-mono text-lg font-bold tracking-widest text-terracotta">
                      {code}
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={onSubmit}
                    className="rounded-2xl border border-charcoal/10 bg-white p-6 shadow-soft"
                  >
                    <label
                      htmlFor="lead-email"
                      className="text-sm font-medium text-charcoal"
                    >
                      Email address
                    </label>
                    <input
                      id="lead-email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === "error") setStatus("idle");
                      }}
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-xl border border-charcoal/15 bg-beige/40 px-4 py-3 text-charcoal outline-none transition-colors placeholder:text-charcoal/35 focus:border-sage focus:bg-white"
                    />
                    {status === "error" && (
                      <p className="mt-2 text-sm text-terracotta">
                        Please enter a valid email address.
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="btn-accent mt-4 w-full disabled:opacity-70"
                    >
                      {status === "loading" ? "Sending…" : "Send my 5% code"}
                    </button>
                    <p className="mt-3 text-center text-xs text-charcoal/45">
                      No spam. Unsubscribe anytime.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
