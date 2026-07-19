import type { Metadata } from "next";
import Link from "next/link";
import { destinations } from "@/data/travel-data";

export const metadata: Metadata = {
  title: "Experiences",
  description: "Browse travel experiences from safari to island escapes.",
};

const experiences = [
  "Adventure",
  "Luxury",
  "Safari",
  "Road Trips",
  "Island Escapes",
  "Hiking",
  "Cultural Tours",
  "Photography",
  "Food Experiences",
  "Wildlife",
];

export default function ExperiencesPage() {
  return (
    <section className="bg-(--surface) px-6 py-16 text-foreground md:px-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="font-(--font-playfair) text-5xl md:text-7xl">Experiences</h1>
        <p className="mt-4 max-w-2xl text-zinc-600">Curated travel formats built around emotions, pace, and deep place-based discovery.</p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((experience) => {
            const sample = destinations.find((destination) => destination.category === experience) ?? destinations[0];
            return (
              <Link
                href={`/destinations/${sample.slug}`}
                key={experience}
                className="rounded-2xl border border-(--border-soft) bg-white p-6 transition hover:border-(--border-strong) hover:bg-(--surface)"
              >
                <p className="text-2xl">{experience}</p>
                <p className="mt-2 text-sm text-zinc-600">Explore cinematic itineraries inspired by {experience.toLowerCase()} travel.</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
