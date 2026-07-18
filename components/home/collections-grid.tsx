import Image from "next/image";
import { travelCollections } from "@/data/travel-data";
import { getUnsplashImage } from "@/lib/unsplash";

export function CollectionsGrid() {
  return (
    <section className="section-rhythm-regular px-6 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="font-[var(--font-nav)] text-xs uppercase tracking-[0.25em] text-zinc-300">Collections</p>
        <h2 className="mt-2 font-[var(--font-playfair)] text-4xl md:text-5xl">Travel edits for every mood</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {travelCollections.slice(0, 9).map((collection, index) => (
            <article
              key={collection.id}
              className="overflow-hidden rounded-3xl border border-[var(--border-strong)] bg-[linear-gradient(160deg,rgba(255,159,28,0.12),rgba(0,180,216,0.16))] shadow-[0_18px_45px_rgba(0,0,0,0.25)]"
            >
              <Image
                src={getUnsplashImage(`collection-${collection.id}-${index}`, 1000, 700)}
                alt={collection.title}
                width={1000}
                height={700}
                className="h-56 w-full object-cover"
              />
              <div className="p-5 bg-[linear-gradient(140deg,rgba(3,30,44,0.95),rgba(4,43,63,0.92))]">
                <p className="text-xl text-white">{collection.title}</p>
                <p className="mt-2 text-sm text-zinc-300">{collection.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
