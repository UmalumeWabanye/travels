import Link from "next/link";

const links = [
  { href: "/destinations", label: "Destinations" },
  { href: "/journal", label: "Journal" },
  { href: "/booking", label: "Book a Consultation" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-(--border-soft) bg-(--surface) px-6 py-14 text-foreground md:px-10">
      <div className="relative mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <p className="font-(--font-playfair) text-3xl text-foreground">Aether Travel</p>
          <p className="mt-3 max-w-sm text-sm text-zinc-600">
            Immersive journeys designed like cinema: intentional pacing, layered storytelling, and destination-first craftsmanship.
          </p>
        </div>

        <ul className="space-y-3 text-sm">
          {links.map((item) => (
            <li key={item.href}>
              <Link className="transition hover:text-(--accent-sunset)" href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div>
          <p className="font-(--font-nav) text-xs uppercase tracking-[0.2em] text-zinc-500">Global Offices</p>
          <p className="mt-3 text-sm">Reykjavik · Kyoto · Cape Town · Vancouver</p>
          <p className="mt-1 text-sm text-zinc-600">hello@aethertravel.co</p>
        </div>
      </div>
    </footer>
  );
}
