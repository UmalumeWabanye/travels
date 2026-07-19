"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const frames = [
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1439853949127-fa647821eba0?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1400&q=80",
];

export function HorizontalGallery() {
  return (
    <section className="section-rhythm-regular relative overflow-hidden bg-(--surface) px-6 text-foreground md:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Parallax Gallery</p>
        <h2 className="mt-3 font-(--font-playfair) text-4xl md:text-6xl">Landscapes in motion</h2>
      </div>
      <div className="mt-12 overflow-x-auto pb-4">
        <div className="flex w-max gap-8 pl-6 pr-6 md:pl-10 md:pr-10">
        {frames.map((frame, index) => (
          <motion.article
            key={frame}
            className="relative h-[28rem] w-[24rem] overflow-hidden rounded-3xl border border-(--border-soft) bg-white"
            style={{ marginTop: index % 2 === 0 ? "0.25rem" : "1.2rem" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
          >
            <Image src={frame} alt={`Travel frame ${index + 1}`} fill sizes="(max-width: 768px) 80vw, 24rem" className="object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-black/45 p-5">
              <p className="font-(--font-nav) text-xs uppercase tracking-[0.2em] text-white">Shot {index + 1}</p>
            </div>
          </motion.article>
        ))}
        </div>
      </div>
    </section>
  );
}
