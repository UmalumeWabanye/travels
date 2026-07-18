import { CollectionsGrid } from "@/components/home/collections-grid";
import { DesignEthos } from "@/components/home/design-ethos";
import { DestinationSearch } from "@/components/home/destination-search";
import { FeaturedJourneys } from "@/components/home/featured-journeys";
import { HeroSection } from "@/components/home/hero-section";
import { JournalPreview } from "@/components/home/journal-preview";
import { NewsletterSection } from "@/components/home/newsletter-section";
import { StoryParallax } from "@/components/home/story-parallax";
import { TestimonialsCarousel } from "@/components/home/testimonials-carousel";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DestinationSearch />
      <FeaturedJourneys />
      <StoryParallax />
      <DesignEthos />
      <CollectionsGrid />
      <TestimonialsCarousel />
      <JournalPreview />
      <NewsletterSection />
    </>
  );
}
