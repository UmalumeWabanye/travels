import Image from "next/image";
import { travelCollections } from "@/data/travel-data";

export function CollectionsGrid() {
  return (
    <section className="bg-[#09101a] px-6 py-20 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">Collections</p>
        <h2 className="mt-2 font-[var(--font-playfair)] text-4xl md:text-5xl">Travel edits for every mood</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {travelCollections.slice(0, 9).map((collection) => (
            <article key={collection.id} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Image
                src={collection.coverImage}
                alt={collection.title}
                width={1000}
                height={700}
                className="h-56 w-full object-cover"
              />
              <div className="p-5">
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
