"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type ImageStackTimelineProps = {
  images: string[];
};

export function ImageStackTimeline({ images }: ImageStackTimelineProps) {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  const y = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -90]);

  return (
    <div className="relative mt-10 min-h-[28rem]">
      <h3 className="text-2xl">Image Stacking Sequence</h3>
      <p className="mt-2 text-sm text-zinc-300">As you scroll, layers shift at independent rates to mimic cinematic depth.</p>
      <div className="relative mt-6 h-[24rem]">
        {images.slice(0, 3).map((image, index) => (
          <motion.div
            key={image}
            className="absolute left-0 top-0 h-[18rem] w-[72%] overflow-hidden rounded-2xl border border-(--border-soft)"
            style={{
              y,
              x: reduceMotion ? 0 : index * 54,
              rotate: reduceMotion ? 0 : index * 2.4,
              zIndex: 10 - index,
            }}
          >
            <Image src={image} alt={`Stacked view ${index + 1}`} fill className="object-cover" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
