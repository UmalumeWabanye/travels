"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Compass, PlayCircle } from "lucide-react";
import { MagneticButton } from "@/components/interactions/magnetic-button";
import { Button } from "@/components/ui/button";
import { motionTiming } from "@/lib/motion";

const heroClips = [
  {
    src: "https://videos.pexels.com/video-files/3129957/3129957-uhd_3840_2160_25fps.mp4",
    label: "Coastal escape",
  },
  {
    src: "https://videos.pexels.com/video-files/1903279/1903279-uhd_1920_1440_30fps.mp4",
    label: "City transit",
  },
  {
    src: "https://videos.pexels.com/video-files/8865230/8865230-uhd_4096_2160_25fps.mp4",
    label: "Desert roads",
  },
  {
    src: "https://videos.pexels.com/video-files/6318874/6318874-uhd_2160_3840_25fps.mp4",
    label: "Mountain nature",
  },
];

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const [videoError, setVideoError] = useState(false);
  const [clipIndex, setClipIndex] = useState(0);

  const activeClip = heroClips[clipIndex];

  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden text-white">
      <Image
        src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80"
        alt="Aerial landscape with mountains and ocean"
        fill
        priority
        className="object-cover"
      />

      {!reduceMotion && !videoError ? (
        <AnimatePresence mode="wait">
          <motion.video
            key={activeClip.src}
            autoPlay
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
            aria-label={`Cinematic travel video: ${activeClip.label}`}
            onEnded={() => setClipIndex((index) => (index + 1) % heroClips.length)}
            onError={() => setVideoError(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: "easeInOut" }}
          >
            <source src={activeClip.src} type="video/mp4" />
          </motion.video>
        </AnimatePresence>
      ) : null}

      <div className="absolute inset-0 bg-black/45" />

      <motion.div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-6 pb-20 pt-28 md:px-10">
        <motion.p
          initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={motionTiming.hero.body}
          className="text-xs uppercase tracking-[0.35em] text-zinc-300"
        >
          Cinematic Luxury Travel
        </motion.p>
        <motion.h1
          initial={reduceMotion ? undefined : { opacity: 0, y: 36, scale: 0.98 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={{ ...motionTiming.hero.heading, delay: 0.08 }}
          className="mt-4 max-w-4xl font-(--font-playfair) text-5xl leading-[0.95] md:text-7xl lg:text-8xl"
        >
          Travel Stories
          <span className="block text-(--accent-sunset)">That Feel Like Film</span>
        </motion.h1>
        <motion.p
          initial={reduceMotion ? undefined : { opacity: 0, y: 22 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ ...motionTiming.hero.body, delay: 0.18 }}
          className="mt-6 max-w-2xl text-base text-zinc-200 md:text-lg"
        >
          Aether Travel designs immersive journeys where every chapter is crafted with editorial precision, elevated hospitality, and emotional resonance.
        </motion.p>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ ...motionTiming.hero.cta, delay: 0.27 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <MagneticButton>
            <Link href="/destinations">
              <Button size="lg" className="group gap-2 interactive-target">
                <Compass size={18} className="transition group-hover:rotate-12" /> Explore Destinations
              </Button>
            </Link>
          </MagneticButton>
          <MagneticButton>
            <Link href="/booking">
              <Button variant="outline" size="lg" className="gap-2 interactive-target">
                <PlayCircle size={18} /> Book Consultation
              </Button>
            </Link>
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
        animate={reduceMotion ? undefined : { y: [0, 10, 0], opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <ArrowDown size={22} />
      </motion.div>
    </section>
  );
}
