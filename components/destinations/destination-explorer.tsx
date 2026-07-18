"use client";

import { useMemo, useState } from "react";
import { destinations } from "@/data/travel-data";
import type { DestinationCategory } from "@/types/travel";
import { cn } from "@/lib/utils";
import { DestinationCard } from "@/components/destinations/destination-card";

const categories: DestinationCategory[] = [
  "Beach",
  "Luxury",
  "Safari",
  "Adventure",
  "Mountains",
  "Cities",
  "Islands",
  "Road Trips",
  "Family",
  "Solo Travel",
  "Couples",
  "Honeymoon",
  "Wildlife",
  "Food Tours",
  "Photography",
  "Cruises",
];

function projectToMap(latitude: number, longitude: number) {
  const left = ((longitude + 180) / 360) * 100;
  const top = ((90 - latitude) / 180) * 100;
  return {
    left: `${Math.max(2, Math.min(98, left))}%`,
    top: `${Math.max(4, Math.min(94, top))}%`,
  };
}

export function DestinationExplorer() {
  const [activeCategory, setActiveCategory] = useState<DestinationCategory | "All">("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") {
      return destinations;
    }
    return destinations.filter((destination) => destination.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="px-6 py-16 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.24em] text-zinc-200">Curated Places</p>
        <h1 className="mt-3 font-[var(--font-playfair)] text-5xl md:text-7xl">Destinations</h1>
        <p className="mt-4 max-w-3xl text-zinc-200">
          Explore cinematic routes by category, then inspect markers on our interactive map preview.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory("All")}
            type="button"
            className={cn(
              "rounded-full border px-4 py-2 text-xs uppercase tracking-[0.16em] transition",
              activeCategory === "All"
                ? "border-transparent bg-[var(--accent-sunset)] text-[#03131d]"
                : "border-[var(--border-soft)] bg-white/5 text-zinc-100 hover:bg-white/10",
            )}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full border px-4 py-2 text-xs uppercase tracking-[0.16em] transition",
                activeCategory === category
                  ? "border-transparent bg-[var(--accent-ocean)] text-[#03131d]"
                  : "border-[var(--border-soft)] bg-white/5 text-zinc-100 hover:bg-white/10",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="adventure-surface glow-ring relative overflow-hidden rounded-3xl p-6">
            <p className="font-[var(--font-nav)] text-xs uppercase tracking-[0.24em] text-zinc-200">Map Preview</p>
            <div className="relative mt-5 h-[24rem] overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[linear-gradient(140deg,#08334a,#0d4d63,#115971)]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center opacity-25" />
              <div className="absolute inset-0">
                {filtered.map((destination) => {
                  const position = projectToMap(destination.map.lat, destination.map.lng);
                  return (
                    <span
                      key={`marker-${destination.id}`}
                      className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-sunset)] shadow-[0_0_0_6px_rgba(255,159,28,0.18)]"
                      style={position}
                      aria-label={`${destination.city} marker`}
                    />
                  );
                })}
              </div>
            </div>
            <p className="mt-3 text-sm text-zinc-200">
              {filtered.length} destinations shown for {activeCategory === "All" ? "all categories" : activeCategory.toLowerCase()}.
            </p>
          </div>

          <div className="adventure-surface rounded-3xl p-6">
            <p className="font-[var(--font-nav)] text-xs uppercase tracking-[0.24em] text-zinc-200">Quick Picks</p>
            <ul className="mt-4 space-y-3">
              {filtered.slice(0, 6).map((destination) => (
                <li key={`pick-${destination.id}`} className="rounded-xl border border-[var(--border-soft)] bg-white/5 p-4">
                  <p className="text-sm text-zinc-200">{destination.country}</p>
                  <p className="mt-1 text-lg">{destination.city}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-zinc-300">{destination.category}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
}
