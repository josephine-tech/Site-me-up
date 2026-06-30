import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Site Me Up home"
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-charcoal text-white transition-transform duration-300 group-hover:scale-105">
        <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-sage/40 to-transparent" />
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          className="relative"
          aria-hidden
        >
          <path
            d="M4 7.5C4 5.567 5.567 4 7.5 4H20v8.5C20 14.433 18.433 16 16.5 16H4V7.5Z"
            fill="currentColor"
            opacity="0.45"
          />
          <path
            d="M8 12.5C8 10.567 9.567 9 11.5 9H24v8.5c0 1.933-1.567 3.5-3.5 3.5H8v-8.5Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className="font-heading text-[17px] font-bold tracking-tight text-charcoal">
        Site Me Up
      </span>
    </Link>
  );
}
