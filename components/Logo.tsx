import Link from "next/link";

/**
 * Site Me Up brand mark — an ascending "steps + 1" monochrome icon,
 * reconstructed as vector from the brand guide, paired with the
 * "SITE ME UP" wordmark set in Space Grotesk.
 */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 131 96"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      {/* the "1" */}
      <path d="M97.5 2 L126.1 2 L126.1 94 L106.6 94 L106.6 24 L78 24 Z" />
      {/* ascending steps */}
      <path d="M53.3 43 L91 43 L91 94 L5.2 94 L18.2 81 L71.5 81 L71.5 61 L40.3 61 Z" />
    </svg>
  );
}

export function Logo({
  className = "",
  variant = "dark",
  showWordmark = true,
}: {
  className?: string;
  variant?: "dark" | "light";
  showWordmark?: boolean;
}) {
  const color = variant === "light" ? "text-white" : "text-charcoal";
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${color} ${className}`}
      aria-label="Site Me Up home"
    >
      <LogoMark className="h-6 w-auto transition-transform duration-300 group-hover:-translate-y-0.5" />
      {showWordmark && (
        <span className="font-heading text-[15px] font-bold uppercase tracking-[0.14em]">
          Site Me Up
        </span>
      )}
    </Link>
  );
}
