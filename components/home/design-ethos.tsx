import { Badge } from "@/components/ui/badge";

const principles = [
  {
    title: "Apple-Inspired Editorial Clarity",
    text: "Large serif storytelling, restrained chrome, and deliberate spacing keep attention on imagery and narrative flow.",
  },
  {
    title: "Airbnb-Style Human Warmth",
    text: "Soft card geometry, inviting surfaces, and approachable interaction layers make exploration feel effortless and personal.",
  },
  {
    title: "Tesla-Like Hero Restraint",
    text: "Full-viewport photography with minimal UI framing lets each destination carry emotional weight without visual noise.",
  },
];

export function DesignEthos() {
  return (
    <section className="section-rhythm-tight px-6 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <Badge className="text-zinc-200">Design Language</Badge>
        <h2 className="mt-4 max-w-3xl font-[var(--font-playfair)] text-4xl md:text-6xl">
          Built from modern product storytelling references
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {principles.map((principle) => (
            <article key={principle.title} className="rounded-2xl border border-[var(--border-soft)] bg-white/5 p-6">
              <h3 className="text-xl">{principle.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">{principle.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
