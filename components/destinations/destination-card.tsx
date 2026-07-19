"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getUnsplashImage } from "@/lib/unsplash";
import type { Destination } from "@/types/travel";

const previewReels = [
  "https://cdn.coverr.co/videos/coverr-aerial-view-of-a-rocky-coastline-1575/1080p.mp4",
  "https://cdn.coverr.co/videos/coverr-flying-over-mountains-1579/1080p.mp4",
  "https://cdn.coverr.co/videos/coverr-sunrise-over-ocean-cliffs-1562/1080p.mp4",
  "https://cdn.coverr.co/videos/coverr-road-through-the-mountains-1570/1080p.mp4",
];

export function DestinationCard({ destination }: { destination: Destination }) {
  const [active, setActive] = useState(false);
  const reel = previewReels[destination.id.length % previewReels.length];
  const cardImage = getUnsplashImage(`destination-card-${destination.slug}`, 1200, 900);

  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="vivid-card group overflow-hidden rounded-2xl"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={cardImage}
          alt={destination.title}
          width={1200}
          height={900}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <video
          autoPlay={active}
          muted
          loop
          playsInline
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-400 ${
            active ? "opacity-100" : "opacity-0"
          }`}
          aria-label={`${destination.city} travel reel`}
        >
          <source src={reel} type="video/mp4" />
        </video>
      </div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{destination.country}</p>
        <h3 className="mt-2 text-2xl text-foreground">{destination.city}</h3>
        <p className="mt-2 text-sm text-zinc-600">{destination.subtitle}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-zinc-700">
          <span>{destination.duration}</span>
          <span>From ${destination.price.toLocaleString()}</span>
        </div>
      </div>
    </Link>
  );
}
