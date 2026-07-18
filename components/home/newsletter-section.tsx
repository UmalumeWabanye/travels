"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#060606] px-6 py-20 text-white md:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(59,167,255,0.2),transparent_40%),radial-gradient(circle_at_85%_70%,rgba(255,122,24,0.24),transparent_45%)]" />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Newsletter</p>
        <h2 className="mt-3 font-[var(--font-playfair)] text-4xl md:text-5xl">Receive new destination chapters</h2>
        <p className="mt-4 text-zinc-300">Monthly guides, luxury itineraries, and visual travel essays straight to your inbox.</p>

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
