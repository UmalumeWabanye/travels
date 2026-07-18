import Link from "next/link";

const links = [
  { href: "/destinations", label: "Destinations" },
  { href: "/journal", label: "Journal" },
  { href: "/booking", label: "Book a Consultation" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#060606] px-6 py-14 text-zinc-300 md:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,122,24,0.22),transparent_40%),radial-gradient(circle_at_85%_70%,rgba(59,167,255,0.2),transparent_42%)]" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <p className="font-[var(--font-playfair)] text-3xl text-white">Aether Travel</p>
          <p className="mt-3 max-w-sm text-sm text-zinc-400">
            Immersive journeys designed like cinema: intentional pacing, layered storytelling, and destination-first craftsmanship.
          </p>
        </div>

        <ul className="space-y-3 text-sm">
          {links.map((item) => (
            <li key={item.href}>
              <Link className="transition hover:text-white" href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Global Offices</p>
          <p className="mt-3 text-sm">Reykjavik · Kyoto · Cape Town · Vancouver</p>
          <p className="mt-1 text-sm text-zinc-400">hello@aethertravel.co</p>
        </div>
      </div>
    </footer>
  );
}
