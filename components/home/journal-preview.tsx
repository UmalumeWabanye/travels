import Image from "next/image";
import Link from "next/link";
import { travelStories } from "@/data/travel-data";
import { getUnsplashImage } from "@/lib/unsplash";

export function JournalPreview() {
  return (
    <section className="section-rhythm-regular px-6 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between">
          <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl">From the Journal</h2>
          <Link href="/journal" className="text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-white">
            View all
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {travelStories.slice(0, 6).map((story, index) => (
            <article key={story.id} className="overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-white/5">
              <Image
                src={getUnsplashImage(`journal-preview-${story.id}-${index}`, 900, 600)}
                alt={story.title}
                width={900}
                height={600}
                className="h-52 w-full object-cover"
              />
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">{story.category}</p>
                <h3 className="mt-3 text-xl text-white">{story.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{story.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
