"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { AUDIENCES } from "@/lib/data";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [audienceOpen, setAudienceOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-charcoal/10 bg-white/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between md:h-20">
        <Logo />

        <div className="hidden items-center gap-1 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setAudienceOpen(true)}
            onMouseLeave={() => setAudienceOpen(false)}
          >
            <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-charcoal/80 transition-colors hover:text-charcoal">
              Who it&apos;s for
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <AnimatePresence>
              {audienceOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 top-full w-[480px] -translate-x-1/2 pt-3"
                >
                  <div className="grid grid-cols-2 gap-1 rounded-2xl border border-charcoal/10 bg-white p-2 shadow-lift">
                    {AUDIENCES.map((a) => (
                      <Link
                        key={a.slug}
                        href={`/for/${a.slug}`}
                        className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-beige"
                      >
                        <span className="text-lg">{a.emoji}</span>
                        <span>
                          <span className="block text-sm font-semibold text-charcoal">
                            {a.title}
                          </span>
                          <span className="block text-xs text-charcoal/55">
                            {a.navTagline}
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/#portfolio"
            className="rounded-full px-4 py-2 text-sm font-medium text-charcoal/80 transition-colors hover:text-charcoal"
          >
            Examples
          </Link>
          <Link
            href="/#how-it-works"
            className="rounded-full px-4 py-2 text-sm font-medium text-charcoal/80 transition-colors hover:text-charcoal"
          >
            How it works
          </Link>
          <Link
            href="/pricing"
            className="rounded-full px-4 py-2 text-sm font-medium text-charcoal/80 transition-colors hover:text-charcoal"
          >
            Pricing
          </Link>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/#examples"
            className="text-sm font-medium text-charcoal/70 transition-colors hover:text-charcoal"
          >
            See examples
          </Link>
          <Link href="/checkout" className="btn-primary !py-2.5 !px-5">
            Get my website
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-charcoal md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition-transform ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-opacity ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-transform ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-16 z-40 overflow-y-auto bg-white px-6 pb-10 pt-4 md:hidden"
          >
            <p className="px-1 pb-2 pt-2 text-xs font-semibold uppercase tracking-widest text-charcoal/40">
              Who it&apos;s for
            </p>
            <div className="grid grid-cols-1 gap-1">
              {AUDIENCES.map((a) => (
                <Link
                  key={a.slug}
                  href={`/for/${a.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 rounded-xl p-3 hover:bg-beige"
                >
                  <span className="text-lg">{a.emoji}</span>
                  <span className="text-sm font-semibold">{a.title}</span>
                </Link>
              ))}
            </div>
            <div className="mt-4 grid gap-1 border-t border-charcoal/10 pt-4">
              {[
                ["Examples", "/#portfolio"],
                ["How it works", "/#how-it-works"],
                ["Pricing", "/pricing"],
                ["FAQ", "/#faq"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl p-3 text-sm font-semibold hover:bg-beige"
                >
                  {label}
                </Link>
              ))}
            </div>
            <Link
              href="/checkout"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-6 w-full"
            >
              Get my website — $50
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
