import Image from "next/image";
import Link from "next/link";
import type { Destination } from "@/types/travel";

export function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <Link href={`/destinations/${destination.slug}`} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <Image
        src={destination.heroImage}
        alt={destination.title}
        width={1200}
        height={900}
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{destination.country}</p>
        <h3 className="mt-2 text-2xl text-white">{destination.city}</h3>
        <p className="mt-2 text-sm text-zinc-300">{destination.subtitle}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-zinc-200">
          <span>{destination.duration}</span>
          <span>From ${destination.price.toLocaleString()}</span>
        </div>
      </div>
    </Link>
  );
}
