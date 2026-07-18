export type DestinationCategory =
  | "Beach"
  | "Luxury"
  | "Safari"
  | "Adventure"
  | "Mountains"
  | "Cities"
  | "Islands"
  | "Road Trips"
  | "Family"
  | "Solo Travel"
  | "Couples"
  | "Honeymoon"
  | "Wildlife"
  | "Food Tours"
  | "Photography"
  | "Cruises";

export type Destination = {
  id: string;
  slug: string;
  country: string;
  city: string;
  title: string;
  subtitle: string;
  heroImage: string;
  gallery: string[];
  heroVideo: string;
  description: string;
  price: number;
  duration: string;
  activities: string[];
  weather: string;
  rating: number;
  reviews: number;
  map: { lat: number; lng: number };
  featured: boolean;
  story: string;
  timeline: Array<{ day: number; title: string; description: string }>;
  category: DestinationCategory;
};

export type TravelCollection = {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  tags: string[];
  destinations: string[];
};

export type TravelStory = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: "Photography" | "Guide" | "Video" | "Tips";
  readTime: string;
  date: string;
  author: string;
};

export type Testimonial = {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
};

export type Itinerary = {
  id: string;
  destinationSlug: string;
  title: string;
  duration: string;
  highlights: string[];
};

export type TravelFaq = {
  id: string;
  question: string;
  answer: string;
};

export type TravelGuide = {
  id: string;
  title: string;
  topic: string;
  summary: string;
};

export type Consultant = {
  id: string;
  name: string;
  specialty: string;
  languages: string[];
  experienceYears: number;
};

export type BookingFormValues = {
  destination: string;
  travelDates: string;
  guests: number;
  travelStyle: string;
  budget: string;
  name: string;
  email: string;
  phone: string;
  specialRequests: string;
};
