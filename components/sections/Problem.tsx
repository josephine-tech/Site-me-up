import { Reveal } from "@/components/ui/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";

const PROBLEMS = [
  {
    stat: "75%",
    title: "No website",
    body: "Three in four professionals have nowhere credible to send people. You become a name with no face.",
  },
  {
    stat: "6s",
    title: "Outdated LinkedIn",
    body: "Recruiters spend seconds on a profile that looks like everyone else's — then move on.",
  },
  {
    stat: "1 of 100",
    title: "Generic portfolio",
    body: "A template anyone could buy says nothing about why you're the one to choose.",
  },
  {
    stat: "$0",
    title: "No personal brand",
    body: "When you're invisible online, the best opportunities quietly go to someone else.",
  },
];

export function Problem() {
  return (
    <section className="section bg-white">
      <div className="container-px">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">The real problem</span>
          <h2 className="h-display mt-5 text-4xl leading-tight md:text-5xl">
            Talent isn&apos;t the problem.
            <br />
            <span className="text-charcoal/40">Perception is.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-charcoal/65">
            You&apos;re good at what you do. But if people can&apos;t see it,
            it doesn&apos;t count. Here&apos;s what&apos;s quietly costing you
            opportunities.
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((p) => (
            <StaggerItem key={p.title}>
              <div className="card group h-full p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <p className="font-heading text-4xl font-bold text-terracotta">
                  {p.stat}
                </p>
                <h3 className="mt-5 font-heading text-lg font-semibold text-charcoal">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                  {p.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1} className="mx-auto mt-12 max-w-2xl text-center">
          <p className="text-base text-charcoal/55">
            Every day without a real presence is an opportunity handed to
            someone less qualified — but better positioned.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
