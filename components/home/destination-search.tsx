"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import Link from "next/link";
import { destinations } from "@/data/travel-data";
import { Input } from "@/components/ui/input";

export function DestinationSearch() {
  const [query, setQuery] = useState("");

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return destinations.slice(0, 6);
    }

    return destinations
      .filter((destination) => {
        return (
          destination.city.toLowerCase().includes(q) ||
          destination.country.toLowerCase().includes(q) ||
          destination.category.toLowerCase().includes(q)
        );
      })
      .slice(0, 6);
  }, [query]);

  return (
    <section className="section-rhythm-tight bg-(--surface) px-6 text-foreground md:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-(--font-playfair) text-3xl md:text-5xl">Find your next chapter</h2>
        <div className="relative mt-6 max-w-2xl">
          <Search className="pointer-events-none absolute left-4 top-3.5 text-zinc-400" size={18} />
          <Input
            className="pl-11"
            placeholder="Search by city, country, or style"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="Search destinations"
          />
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {matches.map((destination) => (
            <Link
              key={destination.id}
              href={`/destinations/${destination.slug}`}
              className="group rounded-xl border border-(--border-soft) bg-white p-4 transition hover:border-(--border-strong) hover:bg-(--surface)"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">{destination.country}</p>
              <p className="mt-2 text-xl text-foreground">{destination.city}</p>
              <p className="mt-2 text-sm text-zinc-600">From ${destination.price.toLocaleString()}</p>
              <p className="mt-2 text-xs text-(--accent-ocean) opacity-0 transition group-hover:opacity-100">View destination</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
