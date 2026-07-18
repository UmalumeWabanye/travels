"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motionTiming } from "@/lib/motion";

const frames = [
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1439853949127-fa647821eba0?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1400&q=80",
];

export function HorizontalGallery() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const distance = trackRef.current.scrollWidth - sectionRef.current.offsetWidth;

    if (distance <= 0) {
      return;
    }

    const tween = gsap.to(trackRef.current, {
      x: -distance,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top+=24 top",
        end: `+=${distance * 1.1}`,
        pin: true,
        scrub: motionTiming.scroll.galleryScrub,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-rhythm-regular relative overflow-hidden bg-transparent px-6 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.24em] text-zinc-300">Parallax Gallery</p>
        <h2 className="mt-3 font-[var(--font-playfair)] text-4xl md:text-6xl">Landscapes in motion</h2>
      </div>
      <div ref={trackRef} className="mt-12 flex w-max gap-8 pl-6 md:pl-10">
        {frames.map((frame, index) => (
          <article
            key={frame}
            className="relative h-[28rem] w-[24rem] overflow-hidden rounded-3xl border border-[var(--border-soft)] bg-black/20"
            style={{ marginTop: index % 2 === 0 ? "0.25rem" : "1.2rem" }}
          >
            <Image src={frame} alt={`Travel frame ${index + 1}`} fill className="object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
              <p className="font-[var(--font-nav)] text-xs uppercase tracking-[0.2em] text-zinc-200">Shot {index + 1}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
