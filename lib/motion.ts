export const motionTiming = {
  hero: {
    heading: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
    body: { duration: 0.95, ease: [0.22, 1, 0.36, 1] as const },
    cta: { duration: 0.75, ease: [0.34, 1.25, 0.64, 1] as const },
  },
  reveal: {
    quick: { duration: 0.55, ease: [0.2, 0.8, 0.2, 1] as const },
    medium: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
    slow: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const },
  },
  scroll: {
    atmosphericScrub: 1.25,
    chapterScrub: 0.55,
    galleryScrub: 0.8,
  },
};

export const spacingRhythm = {
  compact: "py-16 md:py-20",
  regular: "py-20 md:py-24",
  expanded: "py-24 md:py-32",
};
