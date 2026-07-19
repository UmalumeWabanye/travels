import type { Metadata } from "next";
import { BookingForm } from "@/components/destinations/booking-form";
import { faqs } from "@/data/travel-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Aether Travel for personalized consultation.",
};

export default function ContactPage() {
  return (
    <section className="bg-(--surface) px-6 py-16 text-foreground md:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1.2fr]">
        <div>
          <h1 className="font-(--font-playfair) text-5xl md:text-7xl">Contact</h1>
          <p className="mt-4 text-zinc-600">Plan your next journey with our travel consultants.</p>
          <div className="mt-10 rounded-2xl border border-(--border-soft) bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Office</p>
            <p className="mt-2">Pier 7, Reykjavik Harbor</p>
            <p className="mt-1 text-zinc-600">hello@aethertravel.co · +354 555 0199</p>
          </div>

          <h2 className="mt-10 text-2xl">FAQ</h2>
          <div className="mt-4 space-y-3">
            {faqs.map((faq) => (
              <article key={faq.id} className="rounded-xl border border-(--border-soft) bg-white/5 p-4">
                <p>{faq.question}</p>
                <p className="mt-1 text-sm text-zinc-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>

        <BookingForm />
      </div>
    </section>
  );
}
