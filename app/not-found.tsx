import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-(--surface) px-6 text-foreground">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">404</p>
        <h1 className="mt-3 font-(--font-playfair) text-5xl">Destination not found</h1>
        <p className="mt-4 text-zinc-600">The chapter you are looking for does not exist.</p>
        <Link className="mt-6 inline-flex text-sm uppercase tracking-[0.2em] text-(--accent-sunset)" href="/destinations">
          Return to destinations
        </Link>
      </div>
    </section>
  );
}
