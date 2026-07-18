import Image from "next/image";
import { travelCollections } from "@/data/travel-data";
import { getUnsplashImage } from "@/lib/unsplash";

export function CollectionsGrid() {
  return (
    <section className="section-rhythm-regular bg-[var(--surface)] px-6 text-[var(--foreground)] md:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="font-[var(--font-nav)] text-xs uppercase tracking-[0.25em] text-zinc-500">Collections</p>
        <h2 className="mt-2 font-[var(--font-playfair)] text-4xl md:text-5xl">Travel edits for every mood</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {travelCollections.slice(0, 9).map((collection, index) => (
            <article key={collection.id} className="vivid-card overflow-hidden rounded-[1.75rem]">
              <Image
                src={getUnsplashImage(`collection-${collection.id}-${index}`, 1000, 700)}
                alt={collection.title}
                width={1000}
                height={700}
                className="h-56 w-full object-cover"
              />
              <div className="p-5 bg-white">
                <p className="text-xl text-[var(--foreground)]">{collection.title}</p>
                <p className="mt-2 text-sm text-zinc-600">{collection.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
