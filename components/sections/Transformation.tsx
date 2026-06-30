import { Reveal } from "@/components/ui/Reveal";

const BEFORE = [
  "Invisible online",
  "Easily overlooked",
  "Hard to trust",
  "Competing on price",
  "Forgotten after a glance",
];

const AFTER = [
  "Professional presence",
  "Credible brand",
  "Memorable first impression",
  "Premium positioning",
  "Remembered and chosen",
];

function Check({ kind }: { kind: "x" | "check" }) {
  return kind === "x" ? (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M3 3l6 6M9 3l-6 6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    </span>
  ) : (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage/20 text-charcoal">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M2.5 6.5L5 9l4.5-5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function Transformation() {
  return (
    <section className="section bg-beige">
      <div className="container-px">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">The transformation</span>
          <h2 className="h-display mt-5 text-4xl leading-tight md:text-5xl">
            The same you. A completely different impression.
          </h2>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-charcoal/10 bg-white/60 p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-charcoal/40">
                Before Site Me Up
              </p>
              <ul className="mt-6 space-y-4">
                {BEFORE.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check kind="x" />
                    <span className="text-charcoal/55 line-through decoration-charcoal/20">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-sage/30 bg-charcoal p-8 text-white shadow-lift">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sage/30 blur-3xl" />
              <p className="text-xs font-semibold uppercase tracking-widest text-sage">
                After Site Me Up
              </p>
              <ul className="mt-6 space-y-4">
                {AFTER.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage text-charcoal">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2.5 6.5L5 9l4.5-5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
