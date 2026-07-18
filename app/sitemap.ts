import type { MetadataRoute } from "next";
import { destinations, travelStories } from "@/data/travel-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aether-travel.vercel.app";
  const staticRoutes = ["", "/destinations", "/experiences", "/journal", "/about", "/contact", "/booking"];

  const destinationRoutes = destinations.map((destination) => ({
    url: `${baseUrl}/destinations/${destination.slug}`,
    lastModified: new Date(),
  }));

  const storyRoutes = travelStories.map((story) => ({
    url: `${baseUrl}/journal#${story.slug}`,
    lastModified: new Date(story.date),
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    })),
    ...destinationRoutes,
    ...storyRoutes,
  ];
}
