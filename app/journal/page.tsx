import type { Metadata } from "next";
import Image from "next/image";
import { travelStories } from "@/data/travel-data";
import { getUnsplashImage } from "@/lib/unsplash";

export const metadata: Metadata = {
  title: "Journal",
  description: "Travel stories, photography essays, and destination guides.",
};

export default function JournalPage() {
  return (
    <section className="bg-[var(--surface)] px-6 py-16 text-[var(--foreground)] md:px-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="font-[var(--font-playfair)] text-5xl md:text-7xl">Journal</h1>
        <p className="mt-4 max-w-3xl text-zinc-300">Editorial stories blending practical travel intelligence with documentary-style visual narratives.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {travelStories.map((story, index) => (
            <article key={story.id} className="vivid-card overflow-hidden rounded-2xl">
              <Image
                src={getUnsplashImage(`journal-page-${story.id}-${index}`, 900, 700)}
                alt={story.title}
                width={900}
                height={700}
                className="h-56 w-full object-cover"
              />
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{story.category} · {story.readTime}</p>
                <h2 className="mt-2 text-xl">{story.title}</h2>
                <p className="mt-2 text-sm text-zinc-600">{story.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
