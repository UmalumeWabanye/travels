import type { Metadata } from "next";
import { Cormorant_Garamond, Space_Grotesk, Sora } from "next/font/google";
import { PageShell } from "@/components/layout/page-shell";
import { Providers } from "@/components/layout/providers";
import "./globals.css";

const sora = Sora({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorantDisplay = Cormorant_Garamond({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-nav",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Aether Travel | Cinematic Luxury Travel Agency",
    template: "%s | Aether Travel",
  },
  description:
    "Immersive luxury travel storytelling with cinematic destinations, curated itineraries, and bespoke consultation.",
  keywords: [
    "luxury travel",
    "cinematic travel",
    "travel storytelling",
    "immersive destination website",
    "boutique travel agency",
  ],
  metadataBase: new URL("https://aether-travel.vercel.app"),
  openGraph: {
    title: "Aether Travel",
    description:
      "Travel stories that feel like film. Explore cinematic destinations and curated journeys.",
    url: "https://aether-travel.vercel.app",
    siteName: "Aether Travel",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aether Travel",
    description: "Luxury travel crafted as immersive cinematic stories.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${cormorantDisplay.variable} ${spaceGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <PageShell>{children}</PageShell>
        </Providers>
      </body>
    </html>
  );
}
