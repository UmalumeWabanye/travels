import type { Metadata } from "next";
import { consultants } from "@/data/travel-data";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Aether Travel and our mission for immersive travel storytelling.",
};

const values = [
  "Story-first itinerary design",
  "Deep cultural respect",
  "Sustainability-conscious operations",
  "High-touch concierge execution",
];

export default function AboutPage() {
  return (
    <section className="bg-(--surface) px-6 py-16 text-foreground md:px-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="font-(--font-playfair) text-5xl md:text-7xl">About Aether</h1>
        <p className="mt-5 max-w-3xl text-zinc-600">
          We believe travel should be emotionally rich, visually unforgettable, and operationally seamless. Every itinerary is authored as a cinematic narrative.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-(--border-soft) bg-white/5 p-6">
            <h2 className="text-2xl">Mission</h2>
            <p className="mt-3 text-zinc-600">Design life-shaping journeys that combine luxury hospitality with deeply human storytelling.</p>
          </article>
          <article className="rounded-2xl border border-(--border-soft) bg-white/5 p-6">
            <h2 className="text-2xl">Values</h2>
            <ul className="mt-3 space-y-2 text-zinc-600">
              {values.map((value) => (
                <li key={value}>• {value}</li>
              ))}
            </ul>
          </article>
        </div>

        <h2 className="mt-14 font-(--font-playfair) text-4xl">Consultants</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {consultants.map((consultant) => (
            <article key={consultant.id} className="rounded-xl border border-(--border-soft) bg-white/5 p-4">
              <p className="text-lg">{consultant.name}</p>
              <p className="mt-1 text-sm text-zinc-600">{consultant.specialty}</p>
              <p className="mt-1 text-xs text-zinc-500">{consultant.experienceYears} years · {consultant.languages.join(" / ")}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
