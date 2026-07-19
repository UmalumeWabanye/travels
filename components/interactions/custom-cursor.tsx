"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [enabled] = useState(() => {
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return !coarsePointer && !reducedMotion;
  });

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const onMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <div className="cursor-ring" style={{ left: position.x, top: position.y }} />
      <div className="cursor-dot" style={{ left: position.x, top: position.y }} />
    </>
  );
}
