"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

type FormState = {
  name: string;
  profession: string;
  bio: string;
  links: string;
  photos: string;
  goals: string;
  inspiration: string;
};

const STEPS = [
  {
    key: "name",
    title: "First, the basics.",
    sub: "What name should your website be built around?",
    label: "Your full name",
    placeholder: "Jordan Avery",
    type: "input",
  },
  {
    key: "profession",
    title: "What do you do?",
    sub: "Your role, title, or how you'd describe your work.",
    label: "Profession / headline",
    placeholder: "Brand Strategist & Consultant",
    type: "input",
  },
  {
    key: "bio",
    title: "Tell us your story.",
    sub: "A few lines about who you are and what you're great at. Don't worry about polish — our copywriters handle that.",
    label: "Short bio",
    placeholder: "I help early-stage brands find their voice…",
    type: "textarea",
  },
  {
    key: "links",
    title: "Where can we find you?",
    sub: "LinkedIn, portfolio, socials, anything you'd like included.",
    label: "Your links",
    placeholder: "linkedin.com/in/you, dribbble.com/you, …",
    type: "textarea",
  },
  {
    key: "photos",
    title: "Photos & assets.",
    sub: "Drop a link to a folder (Drive, Dropbox) with your headshot and any work images. You can also send them later.",
    label: "Photo / asset link",
    placeholder: "drive.google.com/…",
    type: "input",
  },
  {
    key: "goals",
    title: "What's the goal?",
    sub: "What do you want this website to do for you?",
    label: "Your goals",
    placeholder: "Land senior roles, win premium clients, look credible…",
    type: "textarea",
  },
  {
    key: "inspiration",
    title: "Any inspiration?",
    sub: "Websites or styles you love. Optional, but it helps us nail the vibe.",
    label: "Website inspiration",
    placeholder: "Links to sites you admire, or a few words on the feel…",
    type: "textarea",
  },
] as const;

export default function OnboardingPage() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    profession: "",
    bio: "",
    links: "",
    photos: "",
    goals: "",
    inspiration: "",
  });

  const current = STEPS[step];
  const value = form[current.key as keyof FormState];
  const progress = ((step + 1) / STEPS.length) * 100;
  const isLast = step === STEPS.length - 1;
  // first two steps are required; rest optional
  const canContinue = step > 1 || value.trim().length > 0;

  function update(v: string) {
    setForm((f) => ({ ...f, [current.key]: v }));
  }

  function next() {
    if (isLast) {
      // Placeholder: POST onboarding data to backend / CRM here.
      setDone(true);
      return;
    }
    setStep((s) => s + 1);
  }

  if (done) {
    return (
      <div className="container-px py-20 md:py-28">
        <div className="mx-auto max-w-xl text-center">
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
          <h1 className="h-display mt-7 text-3xl md:text-4xl">
            That&apos;s everything we need.
          </h1>
          <p className="mt-4 text-lg text-charcoal/65">
            Thank you, {form.name || "friend"}. Our team is already getting
            started. You&apos;ll see the first version of your website within
            5–7 days — keep an eye on your inbox.
          </p>
          <div className="mt-8">
            <Link href="/" className="btn-primary">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-px py-10 md:py-16">
      <div className="mx-auto max-w-xl">
        {/* progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs font-medium text-charcoal/50">
            <span>
              Step {step + 1} of {STEPS.length}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-charcoal/10">
            <motion.div
              className="h-full rounded-full bg-sage"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </div>

        <div className="rounded-3xl border border-charcoal/10 bg-white p-7 shadow-soft md:p-9">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.key}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="h-display text-2xl md:text-3xl">
                {current.title}
              </h1>
              <p className="mt-2 text-charcoal/60">{current.sub}</p>

              <div className="mt-6">
                <label className="text-sm font-medium text-charcoal">
                  {current.label}
                  {step > 1 && (
                    <span className="ml-2 text-xs font-normal text-charcoal/40">
                      optional
                    </span>
                  )}
                </label>
                {current.type === "textarea" ? (
                  <textarea
                    value={value}
                    onChange={(e) => update(e.target.value)}
                    placeholder={current.placeholder}
                    rows={4}
                    className="mt-2 w-full resize-none rounded-xl border border-charcoal/15 bg-beige/40 px-4 py-3 outline-none transition-colors placeholder:text-charcoal/35 focus:border-sage focus:bg-white"
                  />
                ) : (
                  <input
                    value={value}
                    onChange={(e) => update(e.target.value)}
                    placeholder={current.placeholder}
                    className="mt-2 w-full rounded-xl border border-charcoal/15 bg-beige/40 px-4 py-3 outline-none transition-colors placeholder:text-charcoal/35 focus:border-sage focus:bg-white"
                  />
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between">
            <button
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="text-sm font-medium text-charcoal/50 transition-colors hover:text-charcoal disabled:opacity-0"
            >
              ← Back
            </button>
            <button
              onClick={next}
              disabled={!canContinue}
              className="btn-primary disabled:opacity-40"
            >
              {isLast ? "Submit & finish" : "Continue"}
            </button>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-charcoal/45">
          Your answers are saved as you go. Nothing here is final — we&apos;ll
          refine everything together.
        </p>
      </div>
    </div>
  );
}
