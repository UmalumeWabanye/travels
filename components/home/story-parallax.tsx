"use client";

import { motion } from "framer-motion";

const chapters = [
  { title: "Arrival", text: "The destination opens slowly, with atmosphere before agenda." },
  { title: "Immersion", text: "Culture, cuisine, and local voices define each day." },
  { title: "Transformation", text: "You leave with stories that alter the way you travel." },
];

export function StoryParallax() {
  return (
    <section className="section-rhythm-wide relative overflow-hidden bg-(--surface) px-6 text-foreground md:px-10">
      <div className="story-background absolute inset-0 bg-(--surface)" />
      <div className="relative mx-auto max-w-6xl">
        <p className="font-(--font-nav) text-xs uppercase tracking-[0.28em] text-zinc-500">Storytelling Scroll</p>
        <h2 className="mt-3 font-(--font-playfair) text-4xl md:text-6xl">Every Destination, A Cinematic Chapter</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {chapters.map((chapter, index) => (
            <motion.article
              key={chapter.title}
              className="chapter-item rounded-2xl border border-(--border-soft) bg-white p-6"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{chapter.title}</p>
              <p className="mt-4 text-lg leading-relaxed text-zinc-700">{chapter.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
