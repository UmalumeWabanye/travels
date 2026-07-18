"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/experiences", label: "Experiences" },
  { href: "/journal", label: "Journal" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border-soft)] bg-white/95 backdrop-blur-lg">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 md:px-10" aria-label="Primary navigation">
        <Link href="/" className="font-[var(--font-nav)] text-sm font-semibold uppercase tracking-[0.35em] text-[var(--foreground)]">
          Aether Travel
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "font-[var(--font-nav)] text-xs uppercase tracking-[0.2em] text-zinc-600 transition hover:text-[var(--accent-sunset)]",
                    isActive && "text-[var(--foreground)]",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-strong)] bg-white text-[var(--foreground)] md:hidden"
            aria-label="Open menu"
            type="button"
          >
            <Menu size={18} />
          </button>
        </div>
      </nav>
    </header>
  );
}
