"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Compass, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden text-white">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        aria-label="Aerial footage of mountains and ocean"
      >
        <source src="https://cdn.coverr.co/videos/coverr-flying-over-mountains-1579/1080p.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,167,255,0.25),transparent_42%),radial-gradient(circle_at_75%_35%,rgba(255,122,24,0.24),transparent_40%),linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.68))]" />

      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 30 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-6 pb-20 pt-28 md:px-10"
      >
        <p className="text-xs uppercase tracking-[0.35em] text-zinc-300">Cinematic Luxury Travel</p>
        <h1 className="mt-4 max-w-4xl font-[var(--font-playfair)] text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
          Travel Stories
          <span className="block text-[var(--accent-sunset)]">That Feel Like Film</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base text-zinc-200 md:text-lg">
          Aether Travel designs immersive journeys where every chapter is crafted with editorial precision, elevated hospitality, and emotional resonance.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/destinations">
            <Button size="lg" className="group gap-2">
              <Compass size={18} className="transition group-hover:rotate-12" /> Explore Destinations
            </Button>
          </Link>
          <Link href="/booking">
            <Button variant="outline" size="lg" className="gap-2">
              <PlayCircle size={18} /> Book Consultation
            </Button>
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
        animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Number.POSITIVE_INFINITY }}
      >
        <ArrowDown size={22} />
      </motion.div>
    </section>
  );
}
