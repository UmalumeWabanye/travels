import type { Metadata } from "next";
import { DestinationCard } from "@/components/destinations/destination-card";
import { destinations } from "@/data/travel-data";

export const metadata: Metadata = {
  title: "Destinations",
  description: "Browse cinematic destination journeys by Aether Travel.",
};

export default function DestinationsPage() {
  return (
    <section className="bg-[#060708] px-6 py-16 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Curated Places</p>
        <h1 className="mt-3 font-[var(--font-playfair)] text-5xl md:text-7xl">Destinations</h1>
        <p className="mt-4 max-w-3xl text-zinc-300">
          Explore 40 cinematic destinations with layered storytelling, custom itineraries, and destination-first concierge support.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
}
