import type { Metadata } from "next";
import { BookingForm } from "@/components/destinations/booking-form";

export const metadata: Metadata = {
  title: "Booking",
  description: "Begin your consultation booking with Aether Travel.",
};

const flow = [
  "Destination",
  "Travel Dates",
  "Guests",
  "Travel Style",
  "Budget",
  "Contact Details",
  "Special Requests",
  "Confirmation",
];

export default function BookingPage() {
  return (
    <section className="bg-[#05060a] px-6 py-16 text-white md:px-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="font-[var(--font-playfair)] text-5xl md:text-7xl">Book Consultation</h1>
        <p className="mt-4 text-zinc-300">Frontend booking flow for luxury itinerary planning.</p>

        <ol className="mt-8 grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-zinc-200 md:grid-cols-4">
          {flow.map((step, index) => (
            <li key={step}>
              {index + 1}. {step}
            </li>
          ))}
        </ol>

        <div className="mt-8">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
