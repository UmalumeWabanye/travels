import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/data/travel-data";
import { Badge } from "@/components/ui/badge";

export function FeaturedJourneys() {
  const featured = destinations.filter((item) => item.featured).slice(0, 6);

  return (
    <section className="bg-[#070707] px-6 py-20 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Featured Adventures</p>
            <h2 className="mt-3 font-[var(--font-playfair)] text-4xl md:text-5xl">Signature Journeys</h2>
          </div>
          <Link href="/destinations" className="text-sm uppercase tracking-[0.2em] text-zinc-300 hover:text-white">
            Browse all
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((destination) => (
            <Link
              href={`/destinations/${destination.slug}`}
              key={destination.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10"
            >
              <Image
                src={destination.heroImage}
                alt={destination.title}
                width={900}
                height={1100}
                className="h-[24rem] w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-6">
                <Badge>{destination.category}</Badge>
                <p className="mt-40 text-2xl font-semibold">{destination.city}</p>
                <p className="mt-1 text-sm text-zinc-200">{destination.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
