"use client";

import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { testimonials } from "@/data/travel-data";
import { motionTiming } from "@/lib/motion";

export function TestimonialsCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" });

  return (
    <section className="section-rhythm-wide bg-(--surface) px-6 text-foreground md:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="font-(--font-nav) text-xs uppercase tracking-[0.25em] text-zinc-500">Testimonials</p>
        <h2 className="mt-2 font-(--font-playfair) text-4xl md:text-5xl">Stories from travelers</h2>
        <div className="mt-10 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {testimonials.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                  ...motionTiming.reveal.medium,
                  delay: (index % 4) * 0.06,
                }}
                className="min-w-0 flex-[0_0_80%] rounded-2xl border border-(--border-soft) bg-white p-6 md:flex-[0_0_45%]"
              >
                <p className="text-zinc-700">&ldquo;{item.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <Image src={item.avatar} alt={item.name} width={48} height={48} className="rounded-full" />
                  <div>
                    <p className="text-sm text-foreground">{item.name}</p>
                    <p className="text-xs text-zinc-500">{item.location}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
