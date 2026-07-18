"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-[var(--accent-sunset)] via-[var(--accent-ocean)] to-[var(--accent-forest)]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
