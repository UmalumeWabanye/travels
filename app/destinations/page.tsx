import type { Metadata } from "next";
import { DestinationExplorer } from "@/components/destinations/destination-explorer";

export const metadata: Metadata = {
  title: "Destinations",
  description: "Browse cinematic destination journeys by Aether Travel.",
};

export default function DestinationsPage() {
  return <DestinationExplorer />;
}
