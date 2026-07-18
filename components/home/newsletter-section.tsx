"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="section-rhythm-tight relative overflow-hidden bg-[var(--surface)] px-6 text-[var(--foreground)] md:px-10">
      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Newsletter</p>
        <h2 className="mt-3 font-[var(--font-playfair)] text-4xl md:text-5xl">Receive new destination chapters</h2>
        <p className="mt-4 text-zinc-600">Monthly guides, luxury itineraries, and visual travel essays straight to your inbox.</p>

        <form
          className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <Input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            className="sm:flex-1"
            aria-label="Email address"
          />
          <Button type="submit">Subscribe</Button>
        </form>
        {submitted ? <p className="mt-3 text-sm text-[var(--accent-ocean)]">You are on the list.</p> : null}
      </div>
    </section>
  );
}
