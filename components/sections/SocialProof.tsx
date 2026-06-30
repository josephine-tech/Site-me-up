import { Reveal } from "@/components/ui/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import { TESTIMONIALS, TRUST_METRICS } from "@/lib/data";

function Stars() {
  return (
    <div className="flex gap-0.5 text-terracotta">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 1l2.06 4.18 4.61.67-3.34 3.25.79 4.6L8 11.52 3.88 13.7l.79-4.6L1.33 5.85l4.61-.67L8 1z" />
        </svg>
      ))}
    </div>
  );
}

export function SocialProof() {
  return (
    <section id="proof" className="section scroll-mt-24 bg-beige">
      <div className="container-px">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Loved by ambitious people</span>
          <h2 className="h-display mt-5 text-4xl leading-tight md:text-5xl">
            They came for a website. They left taken seriously.
          </h2>
        </Reveal>

        {/* metrics */}
        <Reveal delay={0.05}>
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-charcoal/10 bg-charcoal/10 md:grid-cols-4">
            {TRUST_METRICS.map((m) => (
              <div key={m.label} className="bg-white p-6 text-center">
                <p className="font-heading text-3xl font-bold text-charcoal">
                  {m.value}
                </p>
                <p className="mt-1 text-xs text-charcoal/55">{m.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* testimonials */}
        <StaggerGroup className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => {
            const dark = "theme" in t && t.theme === "charcoal";
            const sage = "theme" in t && t.theme === "sage";
            const teal = "theme" in t && t.theme === "teal";
            const base =
              "h-full rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1";
            const skin = dark
              ? "border-charcoal bg-charcoal text-white"
              : sage
                ? "border-sage/30 bg-sage/15 text-charcoal"
                : teal
                  ? "border-teal/20 bg-teal text-white"
                  : "border-charcoal/10 bg-white text-charcoal shadow-soft";
            return (
              <StaggerItem key={i}>
                <figure className={`${base} ${skin}`}>
                  <Stars />
                  <blockquote
                    className={`mt-4 text-lg leading-relaxed ${
                      dark || teal ? "text-white/90" : "text-charcoal/85"
                    }`}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full font-heading text-sm font-bold ${
                        dark || teal
                          ? "bg-white/15 text-white"
                          : "bg-charcoal/10 text-charcoal"
                      }`}
                    >
                      {t.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold">
                        {t.name}
                      </span>
                      <span
                        className={`block text-xs ${
                          dark || teal ? "text-white/55" : "text-charcoal/50"
                        }`}
                      >
                        {t.role}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
