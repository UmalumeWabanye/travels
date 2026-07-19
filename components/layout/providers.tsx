"use client";

import Lenis from "lenis";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const CustomCursor = dynamic(
  () => import("@/components/interactions/custom-cursor").then((mod) => mod.CustomCursor),
  { ssr: false },
);

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.3,
    });

    let frame = 0;

    function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      {children}
    </>
  );
}
