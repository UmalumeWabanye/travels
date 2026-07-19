"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-(--border-soft) bg-white/95 backdrop-blur-lg">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 md:px-10" aria-label="Primary navigation">
        <Link href="/" className="font-(--font-nav) text-sm uppercase tracking-[0.35em] text-foreground">
          Aether Travel
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "font-(--font-nav) text-xs uppercase tracking-[0.2em] text-zinc-600 transition hover:text-(--accent-sunset)",
                    isActive && "text-foreground",
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-(--border-strong) bg-white text-foreground md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div id="mobile-nav" className="border-t border-(--border-soft) bg-white px-6 pb-5 pt-3 md:hidden">
          <ul className="flex flex-col gap-2">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={`mobile-${link.href}`}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block rounded-lg px-3 py-2 font-(--font-nav) text-xs uppercase tracking-[0.2em] text-zinc-700 transition hover:bg-zinc-100 hover:text-(--accent-sunset)",
                      isActive && "bg-zinc-100 text-foreground",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
