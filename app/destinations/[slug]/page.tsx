import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookingForm } from "@/components/destinations/booking-form";
import { DestinationCard } from "@/components/destinations/destination-card";
import { ImageStackTimeline } from "@/components/destinations/image-stack-timeline";
import { destinations, faqs } from "@/data/travel-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);

  if (!destination) {
    return {
      title: "Destination Not Found",
    };
  }

  return {
    title: destination.title,
    description: destination.description,
  };
}

export default async function DestinationDetailPage({ params }: Props) {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);

  if (!destination) {
    notFound();
  }

  const related = destinations
    .filter((item) => item.category === destination.category && item.slug !== destination.slug)
    .slice(0, 3);

  return (
    <article className="text-white">
      <header className="relative h-[70vh] overflow-hidden">
        <Image src={destination.heroImage} alt={destination.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div className="absolute bottom-10 left-0 right-0 mx-auto max-w-7xl px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-300">{destination.country}</p>
          <h1 className="mt-3 max-w-3xl font-[var(--font-playfair)] text-5xl md:text-7xl">{destination.city}</h1>
          <p className="mt-4 max-w-2xl text-zinc-200">{destination.subtitle}</p>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.3fr_1fr] md:px-10">
        <div>
          <h2 className="font-[var(--font-playfair)] text-4xl">Travel Overview</h2>
          <p className="mt-4 text-zinc-300">{destination.description}</p>
          <p className="mt-4 text-zinc-300">{destination.story}</p>

          <h3 className="mt-10 text-2xl">Timeline</h3>
          <ul className="mt-4 space-y-4">
            {destination.timeline.map((step) => (
              <li key={step.day} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Day {step.day}</p>
                <p className="mt-2 text-xl">{step.title}</p>
                <p className="mt-1 text-sm text-zinc-300">{step.description}</p>
              </li>
            ))}
          </ul>

          <h3 className="mt-10 text-2xl">Gallery</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {destination.gallery.map((image, index) => (
              <Image
                key={`${destination.id}-${index}`}
                src={image}
                alt={`${destination.title} gallery ${index + 1}`}
                width={900}
                height={700}
                className="h-52 w-full rounded-xl object-cover"
              />
            ))}
          </div>

          <ImageStackTimeline images={destination.gallery} />

          <h3 className="mt-10 text-2xl">FAQ</h3>
          <ul className="mt-4 space-y-3">
            {faqs.slice(0, 5).map((faq) => (
              <li key={faq.id} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-base">{faq.question}</p>
                <p className="mt-2 text-sm text-zinc-300">{faq.answer}</p>
              </li>
            ))}
          </ul>
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-zinc-400">Starting from</p>
            <p className="mt-2 text-3xl font-semibold">${destination.price.toLocaleString()}</p>
            <p className="mt-2 text-sm text-zinc-300">{destination.duration} · {destination.rating} rating</p>
            <Link href="/booking" className="mt-5 inline-flex text-sm uppercase tracking-[0.2em] text-[var(--accent-sunset)]">
              Start booking
            </Link>
          </div>

          <BookingForm defaultDestination={destination.city} />
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <h2 className="font-[var(--font-playfair)] text-4xl">Related destinations</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {related.map((item) => (
            <DestinationCard key={item.id} destination={item} />
          ))}
        </div>
      </section>
    </article>
  );
}
