import Link from "next/link";
import { Logo } from "@/components/Logo";

export default function FocusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-beige/40">
      <header className="border-b border-charcoal/10 bg-white/70 backdrop-blur">
        <div className="container-px flex h-16 items-center justify-between">
          <Logo />
          <div className="flex items-center gap-2 text-xs font-medium text-charcoal/55">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M4 7V5a4 4 0 118 0v2"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <rect
                x="3"
                y="7"
                width="10"
                height="7"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.4"
              />
            </svg>
            Secure checkout
          </div>
        </div>
      </header>

      <div className="flex-1">{children}</div>

      <footer className="border-t border-charcoal/10 bg-white/60 py-6">
        <div className="container-px flex flex-col items-center justify-between gap-3 text-xs text-charcoal/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Site Me Up</p>
          <div className="flex items-center gap-4">
            <span>🔒 256-bit SSL</span>
            <span>Happiness guarantee</span>
            <Link href="/" className="hover:text-charcoal">
              Back to site
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
