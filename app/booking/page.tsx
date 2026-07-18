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
    <section className="bg-[var(--surface)] px-6 py-16 text-[var(--foreground)] md:px-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="font-[var(--font-playfair)] text-5xl md:text-7xl">Book Consultation</h1>
        <p className="mt-4 text-zinc-600">Frontend booking flow for luxury itinerary planning.</p>

        <ol className="mt-8 grid gap-3 rounded-2xl border border-[var(--border-soft)] bg-white p-6 text-sm text-zinc-700 md:grid-cols-4">
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
