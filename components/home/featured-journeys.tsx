import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/data/travel-data";
import { Badge } from "@/components/ui/badge";
import { getUnsplashImage } from "@/lib/unsplash";

export function FeaturedJourneys() {
  const featured = destinations.filter((item) => item.featured).slice(0, 6);

  return (
    <section className="section-rhythm-regular bg-(--surface) px-6 text-foreground md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-(--font-nav) text-xs uppercase tracking-[0.25em] text-zinc-500">Featured Adventures</p>
            <h2 className="mt-3 font-(--font-playfair) text-4xl md:text-5xl">Signature Journeys</h2>
          </div>
          <Link href="/destinations" className="text-sm uppercase tracking-[0.2em] text-zinc-500 hover:text-(--accent-sunset)">
            Browse all
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((destination, index) => (
            <Link
              href={`/destinations/${destination.slug}`}
              key={destination.id}
              className="vivid-card group relative overflow-hidden rounded-[1.75rem]"
            >
              <Image
                src={getUnsplashImage(`featured-${destination.slug}-${index}`, 900, 1100)}
                alt={destination.title}
                width={900}
                height={1100}
                  className="h-96 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/42 p-6">
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
