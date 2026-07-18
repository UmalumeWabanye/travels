"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 82%",
            scrub: 0.8,
          },
          delay: index * 0.08,
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
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#070b13] px-6 py-24 text-white md:px-10">
      <div className="story-background absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,167,255,0.22),transparent_35%),radial-gradient(circle_at_10%_70%,rgba(255,122,24,0.2),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.28em] text-zinc-400">Storytelling Scroll</p>
        <h2 className="mt-3 font-[var(--font-playfair)] text-4xl md:text-6xl">Every Destination, A Cinematic Chapter</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {chapters.map((chapter) => (
            <article key={chapter.title} className="chapter-item rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{chapter.title}</p>
              <p className="mt-4 text-lg leading-relaxed text-zinc-100">{chapter.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
