import Link from "next/link";
import { Logo } from "./Logo";
import { AUDIENCES } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-beige">
      <div className="container-px py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-charcoal/65">
              Premium personal websites for ambitious people. Designed, written,
              and delivered in days — not months.
            </p>
            <Link href="/checkout" className="btn-accent mt-6 !py-3 !px-5">
              Get my website — $50
            </Link>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-charcoal">
              Who it&apos;s for
            </h4>
            <ul className="mt-4 space-y-2.5">
              {AUDIENCES.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/for/${a.slug}`}
                    className="text-sm text-charcoal/65 transition-colors hover:text-charcoal"
                  >
                    {a.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-charcoal">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5">
              {[
                ["Examples", "/#portfolio"],
                ["How it works", "/#how-it-works"],
                ["What's included", "/#included"],
                ["Pricing", "/pricing"],
                ["FAQ", "/#faq"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-charcoal/65 transition-colors hover:text-charcoal"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-charcoal">
              Get started
            </h4>
            <ul className="mt-4 space-y-2.5">
              {[
                ["Buy now — $50", "/checkout"],
                ["Onboarding", "/onboarding"],
                ["Get 5% off", "/#offer"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-charcoal/65 transition-colors hover:text-charcoal"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-charcoal/10 pt-8 md:flex-row md:items-center">
          <p className="text-xs text-charcoal/50">
            © {new Date().getFullYear()} Site Me Up. You deserve to be taken
            seriously.
          </p>
          <div className="flex items-center gap-5 text-xs text-charcoal/50">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-sage" />
              AI-Assisted. Human Perfected.
            </span>
            <Link href="/pricing" className="hover:text-charcoal">
              Privacy
            </Link>
            <Link href="/pricing" className="hover:text-charcoal">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
