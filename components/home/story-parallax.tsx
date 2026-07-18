"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motionTiming } from "@/lib/motion";

const chapters = [
  { title: "Arrival", text: "The destination opens slowly, with atmosphere before agenda." },
  { title: "Immersion", text: "Culture, cuisine, and local voices define each day." },
  { title: "Transformation", text: "You leave with stories that alter the way you travel." },
];

export function StoryParallax() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const items = gsap.utils.toArray<HTMLElement>(".chapter-item");

    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        { y: 90, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.86,
          ease: index === 0 ? "power2.out" : index === 1 ? "power3.out" : "power2.inOut",
          scrollTrigger: {
            trigger: item,
            start: `top ${84 - index * 4}%`,
            scrub: motionTiming.scroll.chapterScrub,
          },
          delay: index * 0.12,
        },
      );
    });

    gsap.to(".story-background", {
      yPercent: -15,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: motionTiming.scroll.atmosphericScrub,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-rhythm-wide relative overflow-hidden px-6 text-white md:px-10">
      <div className="story-background absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,180,216,0.26),transparent_35%),radial-gradient(circle_at_10%_70%,rgba(255,159,28,0.24),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl">
        <p className="font-[var(--font-nav)] text-xs uppercase tracking-[0.28em] text-zinc-300">Storytelling Scroll</p>
        <h2 className="mt-3 font-[var(--font-playfair)] text-4xl md:text-6xl">Every Destination, A Cinematic Chapter</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {chapters.map((chapter) => (
            <article key={chapter.title} className="chapter-item rounded-2xl border border-[var(--border-soft)] bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{chapter.title}</p>
              <p className="mt-4 text-lg leading-relaxed text-zinc-100">{chapter.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
