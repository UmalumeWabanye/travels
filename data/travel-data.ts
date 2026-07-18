import type { Consultant, Destination, Itinerary, Testimonial, TravelCollection, TravelFaq, TravelGuide, TravelStory } from "@/types/travel";

export const destinations: Destination[] = [
  {
    "id": "dest-1",
    "slug": "iceland-reykjavik",
    "country": "Iceland",
    "city": "Reykjavik",
    "title": "Reykjavik Cinematic Escape",
    "subtitle": "Discover Reykjavik through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000000000?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000000000?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000000131?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000000262?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000000393?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000000524?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-1.mp4",
    "description": "Reykjavik unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 2200,
    "duration": "4 days",
    "activities": [
      "Private yacht escape",
      "Local market tour",
      "Helicopter transfer"
    ],
    "weather": "Mild and crisp",
    "rating": 4.4,
    "reviews": 85,
    "map": {
      "lat": -55,
      "lng": -140
    },
    "featured": true,
    "story": "Day breaks over Reykjavik with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Reykjavik."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Beach"
  },
  {
    "id": "dest-2",
    "slug": "japan-kyoto",
    "country": "Japan",
    "city": "Kyoto",
    "title": "Kyoto Signature Journey",
    "subtitle": "Discover Kyoto through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000009731?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000004531?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000004662?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000004793?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000004924?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000005055?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-2.mp4",
    "description": "Kyoto unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 2390,
    "duration": "5 days",
    "activities": [
      "Sunrise hike",
      "Chef-led tasting",
      "Wildlife expedition"
    ],
    "weather": "Warm and sunny",
    "rating": 4.5,
    "reviews": 94,
    "map": {
      "lat": -52.3,
      "lng": -132.9
    },
    "featured": false,
    "story": "Day breaks over Kyoto with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Kyoto."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Luxury"
  },
  {
    "id": "dest-3",
    "slug": "morocco-marrakech",
    "country": "Morocco",
    "city": "Marrakech",
    "title": "Marrakech Cinematic Escape",
    "subtitle": "Discover Marrakech through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000019462?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000009062?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000009193?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000009324?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000009455?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000009586?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-3.mp4",
    "description": "Marrakech unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 2580,
    "duration": "6 days",
    "activities": [
      "Local market tour",
      "Helicopter transfer",
      "Photography workshop"
    ],
    "weather": "Dry and golden",
    "rating": 4.6,
    "reviews": 103,
    "map": {
      "lat": -49.6,
      "lng": -125.8
    },
    "featured": false,
    "story": "Day breaks over Marrakech with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Marrakech."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Safari"
  },
  {
    "id": "dest-4",
    "slug": "italy-amalfi",
    "country": "Italy",
    "city": "Amalfi Coast",
    "title": "Amalfi Coast Signature Journey",
    "subtitle": "Discover Amalfi Coast through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000029193?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000013593?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000013724?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000013855?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000013986?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000014117?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-4.mp4",
    "description": "Amalfi Coast unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 2770,
    "duration": "7 days",
    "activities": [
      "Chef-led tasting",
      "Wildlife expedition",
      "Temple visit"
    ],
    "weather": "Tropical breeze",
    "rating": 4.7,
    "reviews": 112,
    "map": {
      "lat": -46.9,
      "lng": -118.7
    },
    "featured": false,
    "story": "Day breaks over Amalfi Coast with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Amalfi Coast."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Adventure"
  },
  {
    "id": "dest-5",
    "slug": "new-zealand-queenstown",
    "country": "New Zealand",
    "city": "Queenstown",
    "title": "Queenstown Cinematic Escape",
    "subtitle": "Discover Queenstown through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000038924?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000018124?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000018255?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000018386?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000018517?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000018648?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-5.mp4",
    "description": "Queenstown unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 2960,
    "duration": "8 days",
    "activities": [
      "Helicopter transfer",
      "Photography workshop",
      "Coastal road drive"
    ],
    "weather": "Cool alpine",
    "rating": 4.8,
    "reviews": 121,
    "map": {
      "lat": -44.2,
      "lng": -111.6
    },
    "featured": true,
    "story": "Day breaks over Queenstown with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Queenstown."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Mountains"
  },
  {
    "id": "dest-6",
    "slug": "norway-lofoten",
    "country": "Norway",
    "city": "Lofoten",
    "title": "Lofoten Signature Journey",
    "subtitle": "Discover Lofoten through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000048655?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000022655?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000022786?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000022917?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000023048?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000023179?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-6.mp4",
    "description": "Lofoten unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 3150,
    "duration": "9 days",
    "activities": [
      "Wildlife expedition",
      "Temple visit",
      "Wellness retreat"
    ],
    "weather": "Mild and crisp",
    "rating": 4.9,
    "reviews": 130,
    "map": {
      "lat": -41.5,
      "lng": -104.5
    },
    "featured": false,
    "story": "Day breaks over Lofoten with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Lofoten."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Cities"
  },
  {
    "id": "dest-7",
    "slug": "kenya-masai-mara",
    "country": "Kenya",
    "city": "Masai Mara",
    "title": "Masai Mara Cinematic Escape",
    "subtitle": "Discover Masai Mara through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000058386?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000027186?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000027317?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000027448?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000027579?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000027710?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-7.mp4",
    "description": "Masai Mara unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 3340,
    "duration": "10 days",
    "activities": [
      "Photography workshop",
      "Coastal road drive",
      "Private yacht escape"
    ],
    "weather": "Warm and sunny",
    "rating": 4.4,
    "reviews": 139,
    "map": {
      "lat": -38.8,
      "lng": -97.4
    },
    "featured": false,
    "story": "Day breaks over Masai Mara with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Masai Mara."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Islands"
  },
  {
    "id": "dest-8",
    "slug": "france-provence",
    "country": "France",
    "city": "Provence",
    "title": "Provence Signature Journey",
    "subtitle": "Discover Provence through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000068117?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000031717?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000031848?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000031979?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000032110?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000032241?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-8.mp4",
    "description": "Provence unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 3530,
    "duration": "11 days",
    "activities": [
      "Temple visit",
      "Wellness retreat",
      "Sunrise hike"
    ],
    "weather": "Dry and golden",
    "rating": 4.5,
    "reviews": 148,
    "map": {
      "lat": -36.1,
      "lng": -90.3
    },
    "featured": false,
    "story": "Day breaks over Provence with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Provence."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Road Trips"
  },
  {
    "id": "dest-9",
    "slug": "spain-mallorca",
    "country": "Spain",
    "city": "Mallorca",
    "title": "Mallorca Cinematic Escape",
    "subtitle": "Discover Mallorca through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000077848?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000036248?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000036379?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000036510?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000036641?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000036772?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-9.mp4",
    "description": "Mallorca unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 3720,
    "duration": "4 days",
    "activities": [
      "Coastal road drive",
      "Private yacht escape",
      "Local market tour"
    ],
    "weather": "Tropical breeze",
    "rating": 4.6,
    "reviews": 157,
    "map": {
      "lat": -33.4,
      "lng": -83.2
    },
    "featured": true,
    "story": "Day breaks over Mallorca with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Mallorca."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Family"
  },
  {
    "id": "dest-10",
    "slug": "switzerland-zermatt",
    "country": "Switzerland",
    "city": "Zermatt",
    "title": "Zermatt Signature Journey",
    "subtitle": "Discover Zermatt through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000087579?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000040779?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000040910?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000041041?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000041172?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000041303?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-10.mp4",
    "description": "Zermatt unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 3910,
    "duration": "5 days",
    "activities": [
      "Wellness retreat",
      "Sunrise hike",
      "Chef-led tasting"
    ],
    "weather": "Cool alpine",
    "rating": 4.7,
    "reviews": 166,
    "map": {
      "lat": -30.7,
      "lng": -76.1
    },
    "featured": false,
    "story": "Day breaks over Zermatt with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Zermatt."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Solo Travel"
  },
  {
    "id": "dest-11",
    "slug": "portugal-madeira",
    "country": "Portugal",
    "city": "Madeira",
    "title": "Madeira Cinematic Escape",
    "subtitle": "Discover Madeira through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000097310?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000045310?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000045441?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000045572?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000045703?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000045834?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-11.mp4",
    "description": "Madeira unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 4100,
    "duration": "6 days",
    "activities": [
      "Private yacht escape",
      "Local market tour",
      "Helicopter transfer"
    ],
    "weather": "Mild and crisp",
    "rating": 4.8,
    "reviews": 175,
    "map": {
      "lat": -28,
      "lng": -69
    },
    "featured": false,
    "story": "Day breaks over Madeira with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Madeira."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Couples"
  },
  {
    "id": "dest-12",
    "slug": "greece-santorini",
    "country": "Greece",
    "city": "Santorini",
    "title": "Santorini Signature Journey",
    "subtitle": "Discover Santorini through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000107041?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000049841?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000049972?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000050103?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000050234?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000050365?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-12.mp4",
    "description": "Santorini unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 4290,
    "duration": "7 days",
    "activities": [
      "Sunrise hike",
      "Chef-led tasting",
      "Wildlife expedition"
    ],
    "weather": "Warm and sunny",
    "rating": 4.9,
    "reviews": 184,
    "map": {
      "lat": -25.3,
      "lng": -61.9
    },
    "featured": false,
    "story": "Day breaks over Santorini with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Santorini."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Honeymoon"
  },
  {
    "id": "dest-13",
    "slug": "canada-banff",
    "country": "Canada",
    "city": "Banff",
    "title": "Banff Cinematic Escape",
    "subtitle": "Discover Banff through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000116772?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000054372?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000054503?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000054634?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000054765?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000054896?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-13.mp4",
    "description": "Banff unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 4480,
    "duration": "8 days",
    "activities": [
      "Local market tour",
      "Helicopter transfer",
      "Photography workshop"
    ],
    "weather": "Dry and golden",
    "rating": 4.4,
    "reviews": 193,
    "map": {
      "lat": -22.6,
      "lng": -54.8
    },
    "featured": true,
    "story": "Day breaks over Banff with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Banff."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Wildlife"
  },
  {
    "id": "dest-14",
    "slug": "usa-big-sur",
    "country": "USA",
    "city": "Big Sur",
    "title": "Big Sur Signature Journey",
    "subtitle": "Discover Big Sur through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000126503?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000058903?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000059034?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000059165?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000059296?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000059427?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-14.mp4",
    "description": "Big Sur unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 4670,
    "duration": "9 days",
    "activities": [
      "Chef-led tasting",
      "Wildlife expedition",
      "Temple visit"
    ],
    "weather": "Tropical breeze",
    "rating": 4.5,
    "reviews": 202,
    "map": {
      "lat": -19.9,
      "lng": -47.7
    },
    "featured": false,
    "story": "Day breaks over Big Sur with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Big Sur."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Food Tours"
  },
  {
    "id": "dest-15",
    "slug": "vietnam-ha-giang",
    "country": "Vietnam",
    "city": "Ha Giang",
    "title": "Ha Giang Cinematic Escape",
    "subtitle": "Discover Ha Giang through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000136234?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000063434?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000063565?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000063696?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000063827?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000063958?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-15.mp4",
    "description": "Ha Giang unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 4860,
    "duration": "10 days",
    "activities": [
      "Helicopter transfer",
      "Photography workshop",
      "Coastal road drive"
    ],
    "weather": "Cool alpine",
    "rating": 4.6,
    "reviews": 211,
    "map": {
      "lat": -17.2,
      "lng": -40.6
    },
    "featured": false,
    "story": "Day breaks over Ha Giang with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Ha Giang."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Photography"
  },
  {
    "id": "dest-16",
    "slug": "peru-cusco",
    "country": "Peru",
    "city": "Cusco",
    "title": "Cusco Signature Journey",
    "subtitle": "Discover Cusco through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000145965?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000067965?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000068096?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000068227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000068358?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000068489?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-1.mp4",
    "description": "Cusco unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 5050,
    "duration": "11 days",
    "activities": [
      "Wildlife expedition",
      "Temple visit",
      "Wellness retreat"
    ],
    "weather": "Mild and crisp",
    "rating": 4.7,
    "reviews": 220,
    "map": {
      "lat": -14.5,
      "lng": -33.5
    },
    "featured": false,
    "story": "Day breaks over Cusco with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Cusco."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Cruises"
  },
  {
    "id": "dest-17",
    "slug": "brazil-rio",
    "country": "Brazil",
    "city": "Rio de Janeiro",
    "title": "Rio de Janeiro Cinematic Escape",
    "subtitle": "Discover Rio de Janeiro through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000155696?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000072496?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000072627?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000072758?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000072889?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000073020?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-2.mp4",
    "description": "Rio de Janeiro unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 5240,
    "duration": "4 days",
    "activities": [
      "Photography workshop",
      "Coastal road drive",
      "Private yacht escape"
    ],
    "weather": "Warm and sunny",
    "rating": 4.8,
    "reviews": 229,
    "map": {
      "lat": -11.8,
      "lng": -26.4
    },
    "featured": true,
    "story": "Day breaks over Rio de Janeiro with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Rio de Janeiro."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Beach"
  },
  {
    "id": "dest-18",
    "slug": "argentina-patagonia",
    "country": "Argentina",
    "city": "Patagonia",
    "title": "Patagonia Signature Journey",
    "subtitle": "Discover Patagonia through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000165427?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000077027?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000077158?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000077289?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000077420?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000077551?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-3.mp4",
    "description": "Patagonia unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 5430,
    "duration": "5 days",
    "activities": [
      "Temple visit",
      "Wellness retreat",
      "Sunrise hike"
    ],
    "weather": "Dry and golden",
    "rating": 4.9,
    "reviews": 238,
    "map": {
      "lat": -9.1,
      "lng": -19.3
    },
    "featured": false,
    "story": "Day breaks over Patagonia with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Patagonia."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Luxury"
  },
  {
    "id": "dest-19",
    "slug": "indonesia-bali",
    "country": "Indonesia",
    "city": "Bali",
    "title": "Bali Cinematic Escape",
    "subtitle": "Discover Bali through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000175158?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000081558?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000081689?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000081820?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000081951?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000082082?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-4.mp4",
    "description": "Bali unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 5620,
    "duration": "6 days",
    "activities": [
      "Coastal road drive",
      "Private yacht escape",
      "Local market tour"
    ],
    "weather": "Tropical breeze",
    "rating": 4.4,
    "reviews": 247,
    "map": {
      "lat": -6.4,
      "lng": -12.2
    },
    "featured": false,
    "story": "Day breaks over Bali with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Bali."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Safari"
  },
  {
    "id": "dest-20",
    "slug": "thailand-chiang-mai",
    "country": "Thailand",
    "city": "Chiang Mai",
    "title": "Chiang Mai Signature Journey",
    "subtitle": "Discover Chiang Mai through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000184889?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000086089?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000086220?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000086351?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000086482?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000086613?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-5.mp4",
    "description": "Chiang Mai unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 5810,
    "duration": "7 days",
    "activities": [
      "Wellness retreat",
      "Sunrise hike",
      "Chef-led tasting"
    ],
    "weather": "Cool alpine",
    "rating": 4.5,
    "reviews": 256,
    "map": {
      "lat": -3.7,
      "lng": -5.1
    },
    "featured": false,
    "story": "Day breaks over Chiang Mai with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Chiang Mai."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Adventure"
  },
  {
    "id": "dest-21",
    "slug": "australia-tasmania",
    "country": "Australia",
    "city": "Tasmania",
    "title": "Tasmania Cinematic Escape",
    "subtitle": "Discover Tasmania through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000194620?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000090620?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000090751?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000090882?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000091013?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000091144?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-6.mp4",
    "description": "Tasmania unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 6000,
    "duration": "8 days",
    "activities": [
      "Private yacht escape",
      "Local market tour",
      "Helicopter transfer"
    ],
    "weather": "Mild and crisp",
    "rating": 4.6,
    "reviews": 265,
    "map": {
      "lat": -1,
      "lng": 2
    },
    "featured": true,
    "story": "Day breaks over Tasmania with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Tasmania."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Mountains"
  },
  {
    "id": "dest-22",
    "slug": "south-africa-cape-town",
    "country": "South Africa",
    "city": "Cape Town",
    "title": "Cape Town Signature Journey",
    "subtitle": "Discover Cape Town through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000204351?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000095151?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000095282?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000095413?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000095544?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000095675?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-7.mp4",
    "description": "Cape Town unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 6190,
    "duration": "9 days",
    "activities": [
      "Sunrise hike",
      "Chef-led tasting",
      "Wildlife expedition"
    ],
    "weather": "Warm and sunny",
    "rating": 4.7,
    "reviews": 274,
    "map": {
      "lat": 1.7,
      "lng": 9.1
    },
    "featured": false,
    "story": "Day breaks over Cape Town with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Cape Town."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Cities"
  },
  {
    "id": "dest-23",
    "slug": "tanzania-zanzibar",
    "country": "Tanzania",
    "city": "Zanzibar",
    "title": "Zanzibar Cinematic Escape",
    "subtitle": "Discover Zanzibar through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000214082?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000099682?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000099813?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000099944?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000100075?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000100206?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-8.mp4",
    "description": "Zanzibar unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 6380,
    "duration": "10 days",
    "activities": [
      "Local market tour",
      "Helicopter transfer",
      "Photography workshop"
    ],
    "weather": "Dry and golden",
    "rating": 4.8,
    "reviews": 283,
    "map": {
      "lat": 4.4,
      "lng": 16.2
    },
    "featured": false,
    "story": "Day breaks over Zanzibar with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Zanzibar."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Islands"
  },
  {
    "id": "dest-24",
    "slug": "uae-dubai-desert",
    "country": "UAE",
    "city": "Dubai Desert",
    "title": "Dubai Desert Signature Journey",
    "subtitle": "Discover Dubai Desert through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000223813?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000104213?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000104344?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000104475?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000104606?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000104737?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-9.mp4",
    "description": "Dubai Desert unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 6570,
    "duration": "11 days",
    "activities": [
      "Chef-led tasting",
      "Wildlife expedition",
      "Temple visit"
    ],
    "weather": "Tropical breeze",
    "rating": 4.9,
    "reviews": 292,
    "map": {
      "lat": 7.1,
      "lng": 23.3
    },
    "featured": false,
    "story": "Day breaks over Dubai Desert with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Dubai Desert."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Road Trips"
  },
  {
    "id": "dest-25",
    "slug": "turkey-cappadocia",
    "country": "Turkey",
    "city": "Cappadocia",
    "title": "Cappadocia Cinematic Escape",
    "subtitle": "Discover Cappadocia through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000233544?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000108744?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000108875?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000109006?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000109137?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000109268?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-10.mp4",
    "description": "Cappadocia unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 6760,
    "duration": "4 days",
    "activities": [
      "Helicopter transfer",
      "Photography workshop",
      "Coastal road drive"
    ],
    "weather": "Cool alpine",
    "rating": 4.4,
    "reviews": 301,
    "map": {
      "lat": 9.8,
      "lng": 30.4
    },
    "featured": true,
    "story": "Day breaks over Cappadocia with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Cappadocia."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Family"
  },
  {
    "id": "dest-26",
    "slug": "jordan-petra",
    "country": "Jordan",
    "city": "Petra",
    "title": "Petra Signature Journey",
    "subtitle": "Discover Petra through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000243275?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000113275?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000113406?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000113537?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000113668?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000113799?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-11.mp4",
    "description": "Petra unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 6950,
    "duration": "5 days",
    "activities": [
      "Wildlife expedition",
      "Temple visit",
      "Wellness retreat"
    ],
    "weather": "Mild and crisp",
    "rating": 4.5,
    "reviews": 310,
    "map": {
      "lat": 12.5,
      "lng": 37.5
    },
    "featured": false,
    "story": "Day breaks over Petra with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Petra."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Solo Travel"
  },
  {
    "id": "dest-27",
    "slug": "nepal-pokhara",
    "country": "Nepal",
    "city": "Pokhara",
    "title": "Pokhara Cinematic Escape",
    "subtitle": "Discover Pokhara through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000253006?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000117806?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000117937?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000118068?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000118199?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000118330?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-12.mp4",
    "description": "Pokhara unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 7140,
    "duration": "6 days",
    "activities": [
      "Photography workshop",
      "Coastal road drive",
      "Private yacht escape"
    ],
    "weather": "Warm and sunny",
    "rating": 4.6,
    "reviews": 319,
    "map": {
      "lat": 15.2,
      "lng": 44.6
    },
    "featured": false,
    "story": "Day breaks over Pokhara with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Pokhara."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Couples"
  },
  {
    "id": "dest-28",
    "slug": "india-udaipur",
    "country": "India",
    "city": "Udaipur",
    "title": "Udaipur Signature Journey",
    "subtitle": "Discover Udaipur through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000262737?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000122337?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000122468?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000122599?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000122730?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000122861?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-13.mp4",
    "description": "Udaipur unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 7330,
    "duration": "7 days",
    "activities": [
      "Temple visit",
      "Wellness retreat",
      "Sunrise hike"
    ],
    "weather": "Dry and golden",
    "rating": 4.7,
    "reviews": 328,
    "map": {
      "lat": 17.9,
      "lng": 51.7
    },
    "featured": false,
    "story": "Day breaks over Udaipur with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Udaipur."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Honeymoon"
  },
  {
    "id": "dest-29",
    "slug": "sri-lanka-ella",
    "country": "Sri Lanka",
    "city": "Ella",
    "title": "Ella Cinematic Escape",
    "subtitle": "Discover Ella through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000272468?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000126868?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000126999?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000127130?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000127261?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000127392?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-14.mp4",
    "description": "Ella unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 7520,
    "duration": "8 days",
    "activities": [
      "Coastal road drive",
      "Private yacht escape",
      "Local market tour"
    ],
    "weather": "Tropical breeze",
    "rating": 4.8,
    "reviews": 337,
    "map": {
      "lat": 20.6,
      "lng": 58.8
    },
    "featured": true,
    "story": "Day breaks over Ella with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Ella."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Wildlife"
  },
  {
    "id": "dest-30",
    "slug": "croatia-dubrovnik",
    "country": "Croatia",
    "city": "Dubrovnik",
    "title": "Dubrovnik Signature Journey",
    "subtitle": "Discover Dubrovnik through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000282199?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000131399?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000131530?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000131661?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000131792?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000131923?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-15.mp4",
    "description": "Dubrovnik unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 7710,
    "duration": "9 days",
    "activities": [
      "Wellness retreat",
      "Sunrise hike",
      "Chef-led tasting"
    ],
    "weather": "Cool alpine",
    "rating": 4.9,
    "reviews": 346,
    "map": {
      "lat": 23.3,
      "lng": 65.9
    },
    "featured": false,
    "story": "Day breaks over Dubrovnik with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Dubrovnik."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Food Tours"
  },
  {
    "id": "dest-31",
    "slug": "mexico-tulum",
    "country": "Mexico",
    "city": "Tulum",
    "title": "Tulum Cinematic Escape",
    "subtitle": "Discover Tulum through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000291930?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000135930?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000136061?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000136192?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000136323?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000136454?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-1.mp4",
    "description": "Tulum unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 7900,
    "duration": "10 days",
    "activities": [
      "Private yacht escape",
      "Local market tour",
      "Helicopter transfer"
    ],
    "weather": "Mild and crisp",
    "rating": 4.4,
    "reviews": 355,
    "map": {
      "lat": 26,
      "lng": 73
    },
    "featured": false,
    "story": "Day breaks over Tulum with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Tulum."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Photography"
  },
  {
    "id": "dest-32",
    "slug": "chile-atacama",
    "country": "Chile",
    "city": "Atacama",
    "title": "Atacama Signature Journey",
    "subtitle": "Discover Atacama through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000301661?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000140461?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000140592?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000140723?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000140854?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000140985?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-2.mp4",
    "description": "Atacama unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 8090,
    "duration": "11 days",
    "activities": [
      "Sunrise hike",
      "Chef-led tasting",
      "Wildlife expedition"
    ],
    "weather": "Warm and sunny",
    "rating": 4.5,
    "reviews": 364,
    "map": {
      "lat": 28.7,
      "lng": 80.1
    },
    "featured": false,
    "story": "Day breaks over Atacama with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Atacama."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Cruises"
  },
  {
    "id": "dest-33",
    "slug": "bolivia-salt-flats",
    "country": "Bolivia",
    "city": "Uyuni",
    "title": "Uyuni Cinematic Escape",
    "subtitle": "Discover Uyuni through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000311392?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000144992?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000145123?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000145254?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000145385?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000145516?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-3.mp4",
    "description": "Uyuni unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 8280,
    "duration": "4 days",
    "activities": [
      "Local market tour",
      "Helicopter transfer",
      "Photography workshop"
    ],
    "weather": "Dry and golden",
    "rating": 4.6,
    "reviews": 373,
    "map": {
      "lat": 31.4,
      "lng": 87.2
    },
    "featured": true,
    "story": "Day breaks over Uyuni with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Uyuni."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Beach"
  },
  {
    "id": "dest-34",
    "slug": "egypt-luxor",
    "country": "Egypt",
    "city": "Luxor",
    "title": "Luxor Signature Journey",
    "subtitle": "Discover Luxor through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000321123?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000149523?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000149654?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000149785?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000149916?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000150047?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-4.mp4",
    "description": "Luxor unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 8470,
    "duration": "5 days",
    "activities": [
      "Chef-led tasting",
      "Wildlife expedition",
      "Temple visit"
    ],
    "weather": "Tropical breeze",
    "rating": 4.7,
    "reviews": 382,
    "map": {
      "lat": 34.1,
      "lng": 94.3
    },
    "featured": false,
    "story": "Day breaks over Luxor with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Luxor."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Luxury"
  },
  {
    "id": "dest-35",
    "slug": "china-guilin",
    "country": "China",
    "city": "Guilin",
    "title": "Guilin Cinematic Escape",
    "subtitle": "Discover Guilin through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000330854?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000154054?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000154185?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000154316?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000154447?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000154578?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-5.mp4",
    "description": "Guilin unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 8660,
    "duration": "6 days",
    "activities": [
      "Helicopter transfer",
      "Photography workshop",
      "Coastal road drive"
    ],
    "weather": "Cool alpine",
    "rating": 4.8,
    "reviews": 391,
    "map": {
      "lat": 36.8,
      "lng": 101.4
    },
    "featured": false,
    "story": "Day breaks over Guilin with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Guilin."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Safari"
  },
  {
    "id": "dest-36",
    "slug": "bhutan-paro",
    "country": "Bhutan",
    "city": "Paro",
    "title": "Paro Signature Journey",
    "subtitle": "Discover Paro through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000340585?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000158585?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000158716?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000158847?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000158978?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000159109?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-6.mp4",
    "description": "Paro unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 8850,
    "duration": "7 days",
    "activities": [
      "Wildlife expedition",
      "Temple visit",
      "Wellness retreat"
    ],
    "weather": "Mild and crisp",
    "rating": 4.9,
    "reviews": 400,
    "map": {
      "lat": 39.5,
      "lng": 108.5
    },
    "featured": false,
    "story": "Day breaks over Paro with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Paro."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Adventure"
  },
  {
    "id": "dest-37",
    "slug": "laos-luang-prabang",
    "country": "Laos",
    "city": "Luang Prabang",
    "title": "Luang Prabang Cinematic Escape",
    "subtitle": "Discover Luang Prabang through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000350316?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000163116?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000163247?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000163378?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000163509?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000163640?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-7.mp4",
    "description": "Luang Prabang unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 9040,
    "duration": "8 days",
    "activities": [
      "Photography workshop",
      "Coastal road drive",
      "Private yacht escape"
    ],
    "weather": "Warm and sunny",
    "rating": 4.4,
    "reviews": 409,
    "map": {
      "lat": 42.2,
      "lng": 115.6
    },
    "featured": true,
    "story": "Day breaks over Luang Prabang with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Luang Prabang."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Mountains"
  },
  {
    "id": "dest-38",
    "slug": "namibia-sossusvlei",
    "country": "Namibia",
    "city": "Sossusvlei",
    "title": "Sossusvlei Signature Journey",
    "subtitle": "Discover Sossusvlei through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000360047?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000167647?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000167778?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000167909?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000168040?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000168171?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-8.mp4",
    "description": "Sossusvlei unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 9230,
    "duration": "9 days",
    "activities": [
      "Temple visit",
      "Wellness retreat",
      "Sunrise hike"
    ],
    "weather": "Dry and golden",
    "rating": 4.5,
    "reviews": 418,
    "map": {
      "lat": 44.9,
      "lng": 122.7
    },
    "featured": false,
    "story": "Day breaks over Sossusvlei with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Sossusvlei."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Cities"
  },
  {
    "id": "dest-39",
    "slug": "botswana-okavango",
    "country": "Botswana",
    "city": "Okavango Delta",
    "title": "Okavango Delta Cinematic Escape",
    "subtitle": "Discover Okavango Delta through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000369778?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000172178?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000172309?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000172440?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000172571?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000172702?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-9.mp4",
    "description": "Okavango Delta unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 9420,
    "duration": "10 days",
    "activities": [
      "Coastal road drive",
      "Private yacht escape",
      "Local market tour"
    ],
    "weather": "Tropical breeze",
    "rating": 4.6,
    "reviews": 427,
    "map": {
      "lat": 47.6,
      "lng": 129.8
    },
    "featured": false,
    "story": "Day breaks over Okavango Delta with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Okavango Delta."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Islands"
  },
  {
    "id": "dest-40",
    "slug": "fiji-yasawa",
    "country": "Fiji",
    "city": "Yasawa Islands",
    "title": "Yasawa Islands Signature Journey",
    "subtitle": "Discover Yasawa Islands through curated luxury experiences and storytelling routes.",
    "heroImage": "https://images.unsplash.com/photo-1500000379509?auto=format&fit=crop&w=1800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1505000176709?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000176840?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000176971?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000177102?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505000177233?auto=format&fit=crop&w=1200&q=80"
    ],
    "heroVideo": "/videos/destination-10.mp4",
    "description": "Yasawa Islands unfolds as a layered travel film: mountain light, hidden neighborhoods, and deeply local moments curated for modern explorers.",
    "price": 9610,
    "duration": "11 days",
    "activities": [
      "Wellness retreat",
      "Sunrise hike",
      "Chef-led tasting"
    ],
    "weather": "Cool alpine",
    "rating": 4.7,
    "reviews": 436,
    "map": {
      "lat": 50.3,
      "lng": 136.9
    },
    "featured": false,
    "story": "Day breaks over Yasawa Islands with a quiet cinematic rhythm. You move between iconic landscapes and intimate cultural encounters in a seamless narrative.",
    "timeline": [
      {
        "day": 1,
        "title": "Arrival & Orientation",
        "description": "Private transfer and editorial city introduction in Yasawa Islands."
      },
      {
        "day": 2,
        "title": "Deep Local Discovery",
        "description": "Curated experiences blending culture, nature, and cuisine."
      },
      {
        "day": 3,
        "title": "Signature Adventure",
        "description": "A high-impact day designed around your pace and preferences."
      },
      {
        "day": 4,
        "title": "Golden Farewell",
        "description": "Sunset finale and concierge departure planning."
      }
    ],
    "category": "Road Trips"
  }
];

export const travelCollections: TravelCollection[] = [
  {
    "id": "col-1",
    "title": "Aurora & Ice",
    "description": "A curated narrative collection designed for travelers who collect moments, not checklists.",
    "coverImage": "https://images.unsplash.com/photo-1510000000000?auto=format&fit=crop&w=1400&q=80",
    "tags": [
      "Beach",
      "Adventure"
    ],
    "destinations": [
      "iceland-reykjavik",
      "kenya-masai-mara",
      "canada-banff"
    ]
  },
  {
    "id": "col-2",
    "title": "Mediterranean Reverie",
    "description": "A curated narrative collection designed for travelers who collect moments, not checklists.",
    "coverImage": "https://images.unsplash.com/photo-1510000007007?auto=format&fit=crop&w=1400&q=80",
    "tags": [
      "Luxury",
      "Mountains"
    ],
    "destinations": [
      "japan-kyoto",
      "france-provence",
      "usa-big-sur"
    ]
  },
  {
    "id": "col-3",
    "title": "Wild Kingdoms",
    "description": "A curated narrative collection designed for travelers who collect moments, not checklists.",
    "coverImage": "https://images.unsplash.com/photo-1510000014014?auto=format&fit=crop&w=1400&q=80",
    "tags": [
      "Safari",
      "Cities"
    ],
    "destinations": [
      "morocco-marrakech",
      "spain-mallorca",
      "vietnam-ha-giang"
    ]
  },
  {
    "id": "col-4",
    "title": "Road Epics",
    "description": "A curated narrative collection designed for travelers who collect moments, not checklists.",
    "coverImage": "https://images.unsplash.com/photo-1510000021021?auto=format&fit=crop&w=1400&q=80",
    "tags": [
      "Adventure",
      "Islands"
    ],
    "destinations": [
      "italy-amalfi",
      "switzerland-zermatt",
      "peru-cusco"
    ]
  },
  {
    "id": "col-5",
    "title": "Island Poetry",
    "description": "A curated narrative collection designed for travelers who collect moments, not checklists.",
    "coverImage": "https://images.unsplash.com/photo-1510000028028?auto=format&fit=crop&w=1400&q=80",
    "tags": [
      "Mountains",
      "Road Trips"
    ],
    "destinations": [
      "new-zealand-queenstown",
      "portugal-madeira",
      "brazil-rio"
    ]
  },
  {
    "id": "col-6",
    "title": "Cultural Grand Tour",
    "description": "A curated narrative collection designed for travelers who collect moments, not checklists.",
    "coverImage": "https://images.unsplash.com/photo-1510000035035?auto=format&fit=crop&w=1400&q=80",
    "tags": [
      "Cities",
      "Family"
    ],
    "destinations": [
      "norway-lofoten",
      "greece-santorini",
      "argentina-patagonia"
    ]
  },
  {
    "id": "col-7",
    "title": "Mountain Quietude",
    "description": "A curated narrative collection designed for travelers who collect moments, not checklists.",
    "coverImage": "https://images.unsplash.com/photo-1510000042042?auto=format&fit=crop&w=1400&q=80",
    "tags": [
      "Islands",
      "Solo Travel"
    ],
    "destinations": [
      "kenya-masai-mara",
      "canada-banff",
      "indonesia-bali"
    ]
  },
  {
    "id": "col-8",
    "title": "Design Hotels Edit",
    "description": "A curated narrative collection designed for travelers who collect moments, not checklists.",
    "coverImage": "https://images.unsplash.com/photo-1510000049049?auto=format&fit=crop&w=1400&q=80",
    "tags": [
      "Road Trips",
      "Couples"
    ],
    "destinations": [
      "france-provence",
      "usa-big-sur",
      "thailand-chiang-mai"
    ]
  },
  {
    "id": "col-9",
    "title": "Slow Luxury Trails",
    "description": "A curated narrative collection designed for travelers who collect moments, not checklists.",
    "coverImage": "https://images.unsplash.com/photo-1510000056056?auto=format&fit=crop&w=1400&q=80",
    "tags": [
      "Family",
      "Honeymoon"
    ],
    "destinations": [
      "spain-mallorca",
      "vietnam-ha-giang",
      "australia-tasmania"
    ]
  },
  {
    "id": "col-10",
    "title": "Ocean Frontier",
    "description": "A curated narrative collection designed for travelers who collect moments, not checklists.",
    "coverImage": "https://images.unsplash.com/photo-1510000063063?auto=format&fit=crop&w=1400&q=80",
    "tags": [
      "Solo Travel",
      "Wildlife"
    ],
    "destinations": [
      "switzerland-zermatt",
      "peru-cusco",
      "south-africa-cape-town"
    ]
  },
  {
    "id": "col-11",
    "title": "Remote Atelier",
    "description": "A curated narrative collection designed for travelers who collect moments, not checklists.",
    "coverImage": "https://images.unsplash.com/photo-1510000070070?auto=format&fit=crop&w=1400&q=80",
    "tags": [
      "Couples",
      "Food Tours"
    ],
    "destinations": [
      "portugal-madeira",
      "brazil-rio",
      "tanzania-zanzibar"
    ]
  },
  {
    "id": "col-12",
    "title": "Food & Fire",
    "description": "A curated narrative collection designed for travelers who collect moments, not checklists.",
    "coverImage": "https://images.unsplash.com/photo-1510000077077?auto=format&fit=crop&w=1400&q=80",
    "tags": [
      "Honeymoon",
      "Photography"
    ],
    "destinations": [
      "greece-santorini",
      "argentina-patagonia",
      "uae-dubai-desert"
    ]
  },
  {
    "id": "col-13",
    "title": "Monsoon Moods",
    "description": "A curated narrative collection designed for travelers who collect moments, not checklists.",
    "coverImage": "https://images.unsplash.com/photo-1510000084084?auto=format&fit=crop&w=1400&q=80",
    "tags": [
      "Wildlife",
      "Cruises"
    ],
    "destinations": [
      "canada-banff",
      "indonesia-bali",
      "turkey-cappadocia"
    ]
  },
  {
    "id": "col-14",
    "title": "Solar Safari",
    "description": "A curated narrative collection designed for travelers who collect moments, not checklists.",
    "coverImage": "https://images.unsplash.com/photo-1510000091091?auto=format&fit=crop&w=1400&q=80",
    "tags": [
      "Food Tours",
      "Beach"
    ],
    "destinations": [
      "usa-big-sur",
      "thailand-chiang-mai",
      "jordan-petra"
    ]
  },
  {
    "id": "col-15",
    "title": "Filmic Capitals",
    "description": "A curated narrative collection designed for travelers who collect moments, not checklists.",
    "coverImage": "https://images.unsplash.com/photo-1510000098098?auto=format&fit=crop&w=1400&q=80",
    "tags": [
      "Photography",
      "Luxury"
    ],
    "destinations": [
      "vietnam-ha-giang",
      "australia-tasmania",
      "nepal-pokhara"
    ]
  }
];

export const travelStories: TravelStory[] = [
  {
    "id": "story-1",
    "slug": "travel-story-1",
    "title": "Chapter 1: Across Basalt Shores",
    "excerpt": "An editorial travel narrative blending photography, field notes, and practical advice from the road.",
    "coverImage": "https://images.unsplash.com/photo-1520000000000?auto=format&fit=crop&w=1200&q=80",
    "category": "Photography",
    "readTime": "5 min",
    "date": "2025-12-31T22:00:00.000Z",
    "author": "Elena Park"
  },
  {
    "id": "story-2",
    "slug": "travel-story-2",
    "title": "Chapter 2: Letters from the Desert",
    "excerpt": "An editorial travel narrative blending photography, field notes, and practical advice from the road.",
    "coverImage": "https://images.unsplash.com/photo-1520000005099?auto=format&fit=crop&w=1200&q=80",
    "category": "Guide",
    "readTime": "6 min",
    "date": "2026-02-01T22:00:00.000Z",
    "author": "Noah Bennett"
  },
  {
    "id": "story-3",
    "slug": "travel-story-3",
    "title": "Chapter 3: Cloudline Mornings",
    "excerpt": "An editorial travel narrative blending photography, field notes, and practical advice from the road.",
    "coverImage": "https://images.unsplash.com/photo-1520000010198?auto=format&fit=crop&w=1200&q=80",
    "category": "Video",
    "readTime": "7 min",
    "date": "2026-03-02T22:00:00.000Z",
    "author": "Maya Okafor"
  },
  {
    "id": "story-4",
    "slug": "travel-story-4",
    "title": "Chapter 4: The Saffron Route",
    "excerpt": "An editorial travel narrative blending photography, field notes, and practical advice from the road.",
    "coverImage": "https://images.unsplash.com/photo-1520000015297?auto=format&fit=crop&w=1200&q=80",
    "category": "Tips",
    "readTime": "8 min",
    "date": "2026-04-03T22:00:00.000Z",
    "author": "Luca Rossi"
  },
  {
    "id": "story-5",
    "slug": "travel-story-5",
    "title": "Chapter 5: Cobalt Coast Journals",
    "excerpt": "An editorial travel narrative blending photography, field notes, and practical advice from the road.",
    "coverImage": "https://images.unsplash.com/photo-1520000020396?auto=format&fit=crop&w=1200&q=80",
    "category": "Photography",
    "readTime": "9 min",
    "date": "2026-05-04T22:00:00.000Z",
    "author": "Elena Park"
  },
  {
    "id": "story-6",
    "slug": "travel-story-6",
    "title": "Chapter 6: Across Basalt Shores",
    "excerpt": "An editorial travel narrative blending photography, field notes, and practical advice from the road.",
    "coverImage": "https://images.unsplash.com/photo-1520000025495?auto=format&fit=crop&w=1200&q=80",
    "category": "Guide",
    "readTime": "10 min",
    "date": "2026-06-05T22:00:00.000Z",
    "author": "Noah Bennett"
  },
  {
    "id": "story-7",
    "slug": "travel-story-7",
    "title": "Chapter 7: Letters from the Desert",
    "excerpt": "An editorial travel narrative blending photography, field notes, and practical advice from the road.",
    "coverImage": "https://images.unsplash.com/photo-1520000030594?auto=format&fit=crop&w=1200&q=80",
    "category": "Video",
    "readTime": "11 min",
    "date": "2026-07-06T22:00:00.000Z",
    "author": "Maya Okafor"
  },
  {
    "id": "story-8",
    "slug": "travel-story-8",
    "title": "Chapter 8: Cloudline Mornings",
    "excerpt": "An editorial travel narrative blending photography, field notes, and practical advice from the road.",
    "coverImage": "https://images.unsplash.com/photo-1520000035693?auto=format&fit=crop&w=1200&q=80",
    "category": "Tips",
    "readTime": "12 min",
    "date": "2026-08-07T22:00:00.000Z",
    "author": "Luca Rossi"
  },
  {
    "id": "story-9",
    "slug": "travel-story-9",
    "title": "Chapter 9: The Saffron Route",
    "excerpt": "An editorial travel narrative blending photography, field notes, and practical advice from the road.",
    "coverImage": "https://images.unsplash.com/photo-1520000040792?auto=format&fit=crop&w=1200&q=80",
    "category": "Photography",
    "readTime": "5 min",
    "date": "2026-09-08T22:00:00.000Z",
    "author": "Elena Park"
  },
  {
    "id": "story-10",
    "slug": "travel-story-10",
    "title": "Chapter 10: Cobalt Coast Journals",
    "excerpt": "An editorial travel narrative blending photography, field notes, and practical advice from the road.",
    "coverImage": "https://images.unsplash.com/photo-1520000045891?auto=format&fit=crop&w=1200&q=80",
    "category": "Guide",
    "readTime": "6 min",
    "date": "2026-10-09T22:00:00.000Z",
    "author": "Noah Bennett"
  },
  {
    "id": "story-11",
    "slug": "travel-story-11",
    "title": "Chapter 11: Across Basalt Shores",
    "excerpt": "An editorial travel narrative blending photography, field notes, and practical advice from the road.",
    "coverImage": "https://images.unsplash.com/photo-1520000050990?auto=format&fit=crop&w=1200&q=80",
    "category": "Video",
    "readTime": "7 min",
    "date": "2026-11-10T22:00:00.000Z",
    "author": "Maya Okafor"
  },
  {
    "id": "story-12",
    "slug": "travel-story-12",
    "title": "Chapter 12: Letters from the Desert",
    "excerpt": "An editorial travel narrative blending photography, field notes, and practical advice from the road.",
    "coverImage": "https://images.unsplash.com/photo-1520000056089?auto=format&fit=crop&w=1200&q=80",
    "category": "Tips",
    "readTime": "8 min",
    "date": "2026-12-11T22:00:00.000Z",
    "author": "Luca Rossi"
  },
  {
    "id": "story-13",
    "slug": "travel-story-13",
    "title": "Chapter 13: Cloudline Mornings",
    "excerpt": "An editorial travel narrative blending photography, field notes, and practical advice from the road.",
    "coverImage": "https://images.unsplash.com/photo-1520000061188?auto=format&fit=crop&w=1200&q=80",
    "category": "Photography",
    "readTime": "9 min",
    "date": "2026-01-12T22:00:00.000Z",
    "author": "Elena Park"
  },
  {
    "id": "story-14",
    "slug": "travel-story-14",
    "title": "Chapter 14: The Saffron Route",
    "excerpt": "An editorial travel narrative blending photography, field notes, and practical advice from the road.",
    "coverImage": "https://images.unsplash.com/photo-1520000066287?auto=format&fit=crop&w=1200&q=80",
    "category": "Guide",
    "readTime": "10 min",
    "date": "2026-02-13T22:00:00.000Z",
    "author": "Noah Bennett"
  },
  {
    "id": "story-15",
    "slug": "travel-story-15",
    "title": "Chapter 15: Cobalt Coast Journals",
    "excerpt": "An editorial travel narrative blending photography, field notes, and practical advice from the road.",
    "coverImage": "https://images.unsplash.com/photo-1520000071386?auto=format&fit=crop&w=1200&q=80",
    "category": "Video",
    "readTime": "11 min",
    "date": "2026-03-14T22:00:00.000Z",
    "author": "Maya Okafor"
  },
  {
    "id": "story-16",
    "slug": "travel-story-16",
    "title": "Chapter 16: Across Basalt Shores",
    "excerpt": "An editorial travel narrative blending photography, field notes, and practical advice from the road.",
    "coverImage": "https://images.unsplash.com/photo-1520000076485?auto=format&fit=crop&w=1200&q=80",
    "category": "Tips",
    "readTime": "12 min",
    "date": "2026-04-15T22:00:00.000Z",
    "author": "Luca Rossi"
  },
  {
    "id": "story-17",
    "slug": "travel-story-17",
    "title": "Chapter 17: Letters from the Desert",
    "excerpt": "An editorial travel narrative blending photography, field notes, and practical advice from the road.",
    "coverImage": "https://images.unsplash.com/photo-1520000081584?auto=format&fit=crop&w=1200&q=80",
    "category": "Photography",
    "readTime": "5 min",
    "date": "2026-05-16T22:00:00.000Z",
    "author": "Elena Park"
  },
  {
    "id": "story-18",
    "slug": "travel-story-18",
    "title": "Chapter 18: Cloudline Mornings",
    "excerpt": "An editorial travel narrative blending photography, field notes, and practical advice from the road.",
    "coverImage": "https://images.unsplash.com/photo-1520000086683?auto=format&fit=crop&w=1200&q=80",
    "category": "Guide",
    "readTime": "6 min",
    "date": "2026-06-17T22:00:00.000Z",
    "author": "Noah Bennett"
  },
  {
    "id": "story-19",
    "slug": "travel-story-19",
    "title": "Chapter 19: The Saffron Route",
    "excerpt": "An editorial travel narrative blending photography, field notes, and practical advice from the road.",
    "coverImage": "https://images.unsplash.com/photo-1520000091782?auto=format&fit=crop&w=1200&q=80",
    "category": "Video",
    "readTime": "7 min",
    "date": "2026-07-18T22:00:00.000Z",
    "author": "Maya Okafor"
  },
  {
    "id": "story-20",
    "slug": "travel-story-20",
    "title": "Chapter 20: Cobalt Coast Journals",
    "excerpt": "An editorial travel narrative blending photography, field notes, and practical advice from the road.",
    "coverImage": "https://images.unsplash.com/photo-1520000096881?auto=format&fit=crop&w=1200&q=80",
    "category": "Tips",
    "readTime": "8 min",
    "date": "2026-08-19T22:00:00.000Z",
    "author": "Luca Rossi"
  },
  {
    "id": "story-21",
    "slug": "travel-story-21",
    "title": "Chapter 21: Across Basalt Shores",
    "excerpt": "An editorial travel narrative blending photography, field notes, and practical advice from the road.",
    "coverImage": "https://images.unsplash.com/photo-1520000101980?auto=format&fit=crop&w=1200&q=80",
    "category": "Photography",
    "readTime": "9 min",
    "date": "2026-09-20T22:00:00.000Z",
    "author": "Elena Park"
  },
  {
    "id": "story-22",
    "slug": "travel-story-22",
    "title": "Chapter 22: Letters from the Desert",
    "excerpt": "An editorial travel narrative blending photography, field notes, and practical advice from the road.",
    "coverImage": "https://images.unsplash.com/photo-1520000107079?auto=format&fit=crop&w=1200&q=80",
    "category": "Guide",
    "readTime": "10 min",
    "date": "2026-10-21T22:00:00.000Z",
    "author": "Noah Bennett"
  },
  {
    "id": "story-23",
    "slug": "travel-story-23",
    "title": "Chapter 23: Cloudline Mornings",
    "excerpt": "An editorial travel narrative blending photography, field notes, and practical advice from the road.",
    "coverImage": "https://images.unsplash.com/photo-1520000112178?auto=format&fit=crop&w=1200&q=80",
    "category": "Video",
    "readTime": "11 min",
    "date": "2026-11-22T22:00:00.000Z",
    "author": "Maya Okafor"
  },
  {
    "id": "story-24",
    "slug": "travel-story-24",
    "title": "Chapter 24: The Saffron Route",
    "excerpt": "An editorial travel narrative blending photography, field notes, and practical advice from the road.",
    "coverImage": "https://images.unsplash.com/photo-1520000117277?auto=format&fit=crop&w=1200&q=80",
    "category": "Tips",
    "readTime": "12 min",
    "date": "2026-12-23T22:00:00.000Z",
    "author": "Luca Rossi"
  },
  {
    "id": "story-25",
    "slug": "travel-story-25",
    "title": "Chapter 25: Cobalt Coast Journals",
    "excerpt": "An editorial travel narrative blending photography, field notes, and practical advice from the road.",
    "coverImage": "https://images.unsplash.com/photo-1520000122376?auto=format&fit=crop&w=1200&q=80",
    "category": "Photography",
    "readTime": "5 min",
    "date": "2026-01-24T22:00:00.000Z",
    "author": "Elena Park"
  }
];

export const testimonials: Testimonial[] = [
  {
    "id": "test-1",
    "name": "Sophia Lin",
    "location": "Reykjavik",
    "quote": "Every sequence felt intentional, cinematic, and deeply personal. We did not just travel, we lived a story.",
    "rating": 5,
    "avatar": "https://i.pravatar.cc/120?img=1"
  },
  {
    "id": "test-2",
    "name": "Ethan Cole",
    "location": "Marrakech",
    "quote": "Every sequence felt intentional, cinematic, and deeply personal. We did not just travel, we lived a story.",
    "rating": 5,
    "avatar": "https://i.pravatar.cc/120?img=2"
  },
  {
    "id": "test-3",
    "name": "Ava Ibrahim",
    "location": "Queenstown",
    "quote": "Every sequence felt intentional, cinematic, and deeply personal. We did not just travel, we lived a story.",
    "rating": 5,
    "avatar": "https://i.pravatar.cc/120?img=3"
  },
  {
    "id": "test-4",
    "name": "Liam Novak",
    "location": "Masai Mara",
    "quote": "Every sequence felt intentional, cinematic, and deeply personal. We did not just travel, we lived a story.",
    "rating": 5,
    "avatar": "https://i.pravatar.cc/120?img=4"
  },
  {
    "id": "test-5",
    "name": "Isabella Cruz",
    "location": "Mallorca",
    "quote": "Every sequence felt intentional, cinematic, and deeply personal. We did not just travel, we lived a story.",
    "rating": 5,
    "avatar": "https://i.pravatar.cc/120?img=5"
  },
  {
    "id": "test-6",
    "name": "Sophia Lin",
    "location": "Madeira",
    "quote": "Every sequence felt intentional, cinematic, and deeply personal. We did not just travel, we lived a story.",
    "rating": 5,
    "avatar": "https://i.pravatar.cc/120?img=6"
  },
  {
    "id": "test-7",
    "name": "Ethan Cole",
    "location": "Banff",
    "quote": "Every sequence felt intentional, cinematic, and deeply personal. We did not just travel, we lived a story.",
    "rating": 5,
    "avatar": "https://i.pravatar.cc/120?img=7"
  },
  {
    "id": "test-8",
    "name": "Ava Ibrahim",
    "location": "Ha Giang",
    "quote": "Every sequence felt intentional, cinematic, and deeply personal. We did not just travel, we lived a story.",
    "rating": 5,
    "avatar": "https://i.pravatar.cc/120?img=8"
  },
  {
    "id": "test-9",
    "name": "Liam Novak",
    "location": "Rio de Janeiro",
    "quote": "Every sequence felt intentional, cinematic, and deeply personal. We did not just travel, we lived a story.",
    "rating": 5,
    "avatar": "https://i.pravatar.cc/120?img=9"
  },
  {
    "id": "test-10",
    "name": "Isabella Cruz",
    "location": "Bali",
    "quote": "Every sequence felt intentional, cinematic, and deeply personal. We did not just travel, we lived a story.",
    "rating": 5,
    "avatar": "https://i.pravatar.cc/120?img=10"
  },
  {
    "id": "test-11",
    "name": "Sophia Lin",
    "location": "Tasmania",
    "quote": "Every sequence felt intentional, cinematic, and deeply personal. We did not just travel, we lived a story.",
    "rating": 5,
    "avatar": "https://i.pravatar.cc/120?img=11"
  },
  {
    "id": "test-12",
    "name": "Ethan Cole",
    "location": "Zanzibar",
    "quote": "Every sequence felt intentional, cinematic, and deeply personal. We did not just travel, we lived a story.",
    "rating": 5,
    "avatar": "https://i.pravatar.cc/120?img=12"
  },
  {
    "id": "test-13",
    "name": "Ava Ibrahim",
    "location": "Cappadocia",
    "quote": "Every sequence felt intentional, cinematic, and deeply personal. We did not just travel, we lived a story.",
    "rating": 5,
    "avatar": "https://i.pravatar.cc/120?img=13"
  },
  {
    "id": "test-14",
    "name": "Liam Novak",
    "location": "Pokhara",
    "quote": "Every sequence felt intentional, cinematic, and deeply personal. We did not just travel, we lived a story.",
    "rating": 5,
    "avatar": "https://i.pravatar.cc/120?img=14"
  },
  {
    "id": "test-15",
    "name": "Isabella Cruz",
    "location": "Ella",
    "quote": "Every sequence felt intentional, cinematic, and deeply personal. We did not just travel, we lived a story.",
    "rating": 5,
    "avatar": "https://i.pravatar.cc/120?img=15"
  },
  {
    "id": "test-16",
    "name": "Sophia Lin",
    "location": "Tulum",
    "quote": "Every sequence felt intentional, cinematic, and deeply personal. We did not just travel, we lived a story.",
    "rating": 5,
    "avatar": "https://i.pravatar.cc/120?img=16"
  },
  {
    "id": "test-17",
    "name": "Ethan Cole",
    "location": "Uyuni",
    "quote": "Every sequence felt intentional, cinematic, and deeply personal. We did not just travel, we lived a story.",
    "rating": 5,
    "avatar": "https://i.pravatar.cc/120?img=17"
  },
  {
    "id": "test-18",
    "name": "Ava Ibrahim",
    "location": "Guilin",
    "quote": "Every sequence felt intentional, cinematic, and deeply personal. We did not just travel, we lived a story.",
    "rating": 5,
    "avatar": "https://i.pravatar.cc/120?img=18"
  },
  {
    "id": "test-19",
    "name": "Liam Novak",
    "location": "Luang Prabang",
    "quote": "Every sequence felt intentional, cinematic, and deeply personal. We did not just travel, we lived a story.",
    "rating": 5,
    "avatar": "https://i.pravatar.cc/120?img=19"
  },
  {
    "id": "test-20",
    "name": "Isabella Cruz",
    "location": "Okavango Delta",
    "quote": "Every sequence felt intentional, cinematic, and deeply personal. We did not just travel, we lived a story.",
    "rating": 5,
    "avatar": "https://i.pravatar.cc/120?img=20"
  }
];

export const destinationVideos: Array<{ id: string; destinationSlug: string; title: string; src: string; poster: string }> = [
  {
    "id": "video-1",
    "destinationSlug": "iceland-reykjavik",
    "title": "Cinematic Reel 1",
    "src": "/videos/destination-1.mp4",
    "poster": "https://images.unsplash.com/photo-1500000000000?auto=format&fit=crop&w=1800&q=80"
  },
  {
    "id": "video-2",
    "destinationSlug": "morocco-marrakech",
    "title": "Cinematic Reel 2",
    "src": "/videos/destination-2.mp4",
    "poster": "https://images.unsplash.com/photo-1500000019462?auto=format&fit=crop&w=1800&q=80"
  },
  {
    "id": "video-3",
    "destinationSlug": "new-zealand-queenstown",
    "title": "Cinematic Reel 3",
    "src": "/videos/destination-3.mp4",
    "poster": "https://images.unsplash.com/photo-1500000038924?auto=format&fit=crop&w=1800&q=80"
  },
  {
    "id": "video-4",
    "destinationSlug": "kenya-masai-mara",
    "title": "Cinematic Reel 4",
    "src": "/videos/destination-4.mp4",
    "poster": "https://images.unsplash.com/photo-1500000058386?auto=format&fit=crop&w=1800&q=80"
  },
  {
    "id": "video-5",
    "destinationSlug": "spain-mallorca",
    "title": "Cinematic Reel 5",
    "src": "/videos/destination-5.mp4",
    "poster": "https://images.unsplash.com/photo-1500000077848?auto=format&fit=crop&w=1800&q=80"
  },
  {
    "id": "video-6",
    "destinationSlug": "portugal-madeira",
    "title": "Cinematic Reel 6",
    "src": "/videos/destination-6.mp4",
    "poster": "https://images.unsplash.com/photo-1500000097310?auto=format&fit=crop&w=1800&q=80"
  },
  {
    "id": "video-7",
    "destinationSlug": "canada-banff",
    "title": "Cinematic Reel 7",
    "src": "/videos/destination-7.mp4",
    "poster": "https://images.unsplash.com/photo-1500000116772?auto=format&fit=crop&w=1800&q=80"
  },
  {
    "id": "video-8",
    "destinationSlug": "vietnam-ha-giang",
    "title": "Cinematic Reel 8",
    "src": "/videos/destination-8.mp4",
    "poster": "https://images.unsplash.com/photo-1500000136234?auto=format&fit=crop&w=1800&q=80"
  },
  {
    "id": "video-9",
    "destinationSlug": "brazil-rio",
    "title": "Cinematic Reel 9",
    "src": "/videos/destination-9.mp4",
    "poster": "https://images.unsplash.com/photo-1500000155696?auto=format&fit=crop&w=1800&q=80"
  },
  {
    "id": "video-10",
    "destinationSlug": "indonesia-bali",
    "title": "Cinematic Reel 10",
    "src": "/videos/destination-10.mp4",
    "poster": "https://images.unsplash.com/photo-1500000175158?auto=format&fit=crop&w=1800&q=80"
  },
  {
    "id": "video-11",
    "destinationSlug": "australia-tasmania",
    "title": "Cinematic Reel 11",
    "src": "/videos/destination-11.mp4",
    "poster": "https://images.unsplash.com/photo-1500000194620?auto=format&fit=crop&w=1800&q=80"
  },
  {
    "id": "video-12",
    "destinationSlug": "tanzania-zanzibar",
    "title": "Cinematic Reel 12",
    "src": "/videos/destination-12.mp4",
    "poster": "https://images.unsplash.com/photo-1500000214082?auto=format&fit=crop&w=1800&q=80"
  },
  {
    "id": "video-13",
    "destinationSlug": "turkey-cappadocia",
    "title": "Cinematic Reel 13",
    "src": "/videos/destination-13.mp4",
    "poster": "https://images.unsplash.com/photo-1500000233544?auto=format&fit=crop&w=1800&q=80"
  },
  {
    "id": "video-14",
    "destinationSlug": "nepal-pokhara",
    "title": "Cinematic Reel 14",
    "src": "/videos/destination-14.mp4",
    "poster": "https://images.unsplash.com/photo-1500000253006?auto=format&fit=crop&w=1800&q=80"
  },
  {
    "id": "video-15",
    "destinationSlug": "sri-lanka-ella",
    "title": "Cinematic Reel 15",
    "src": "/videos/destination-15.mp4",
    "poster": "https://images.unsplash.com/photo-1500000272468?auto=format&fit=crop&w=1800&q=80"
  }
];

export const itineraries: Itinerary[] = [
  {
    "id": "it-1",
    "destinationSlug": "iceland-reykjavik",
    "title": "Reykjavik Signature Itinerary",
    "duration": "5 days",
    "highlights": [
      "Private guide",
      "Handpicked stays",
      "Cinematic photo spots",
      "Local experiences"
    ]
  },
  {
    "id": "it-2",
    "destinationSlug": "japan-kyoto",
    "title": "Kyoto Signature Itinerary",
    "duration": "6 days",
    "highlights": [
      "Private guide",
      "Handpicked stays",
      "Cinematic photo spots",
      "Local experiences"
    ]
  },
  {
    "id": "it-3",
    "destinationSlug": "morocco-marrakech",
    "title": "Marrakech Signature Itinerary",
    "duration": "7 days",
    "highlights": [
      "Private guide",
      "Handpicked stays",
      "Cinematic photo spots",
      "Local experiences"
    ]
  },
  {
    "id": "it-4",
    "destinationSlug": "italy-amalfi",
    "title": "Amalfi Coast Signature Itinerary",
    "duration": "8 days",
    "highlights": [
      "Private guide",
      "Handpicked stays",
      "Cinematic photo spots",
      "Local experiences"
    ]
  },
  {
    "id": "it-5",
    "destinationSlug": "new-zealand-queenstown",
    "title": "Queenstown Signature Itinerary",
    "duration": "9 days",
    "highlights": [
      "Private guide",
      "Handpicked stays",
      "Cinematic photo spots",
      "Local experiences"
    ]
  },
  {
    "id": "it-6",
    "destinationSlug": "norway-lofoten",
    "title": "Lofoten Signature Itinerary",
    "duration": "10 days",
    "highlights": [
      "Private guide",
      "Handpicked stays",
      "Cinematic photo spots",
      "Local experiences"
    ]
  },
  {
    "id": "it-7",
    "destinationSlug": "kenya-masai-mara",
    "title": "Masai Mara Signature Itinerary",
    "duration": "11 days",
    "highlights": [
      "Private guide",
      "Handpicked stays",
      "Cinematic photo spots",
      "Local experiences"
    ]
  },
  {
    "id": "it-8",
    "destinationSlug": "france-provence",
    "title": "Provence Signature Itinerary",
    "duration": "5 days",
    "highlights": [
      "Private guide",
      "Handpicked stays",
      "Cinematic photo spots",
      "Local experiences"
    ]
  },
  {
    "id": "it-9",
    "destinationSlug": "spain-mallorca",
    "title": "Mallorca Signature Itinerary",
    "duration": "6 days",
    "highlights": [
      "Private guide",
      "Handpicked stays",
      "Cinematic photo spots",
      "Local experiences"
    ]
  },
  {
    "id": "it-10",
    "destinationSlug": "switzerland-zermatt",
    "title": "Zermatt Signature Itinerary",
    "duration": "7 days",
    "highlights": [
      "Private guide",
      "Handpicked stays",
      "Cinematic photo spots",
      "Local experiences"
    ]
  },
  {
    "id": "it-11",
    "destinationSlug": "portugal-madeira",
    "title": "Madeira Signature Itinerary",
    "duration": "8 days",
    "highlights": [
      "Private guide",
      "Handpicked stays",
      "Cinematic photo spots",
      "Local experiences"
    ]
  },
  {
    "id": "it-12",
    "destinationSlug": "greece-santorini",
    "title": "Santorini Signature Itinerary",
    "duration": "9 days",
    "highlights": [
      "Private guide",
      "Handpicked stays",
      "Cinematic photo spots",
      "Local experiences"
    ]
  },
  {
    "id": "it-13",
    "destinationSlug": "canada-banff",
    "title": "Banff Signature Itinerary",
    "duration": "10 days",
    "highlights": [
      "Private guide",
      "Handpicked stays",
      "Cinematic photo spots",
      "Local experiences"
    ]
  },
  {
    "id": "it-14",
    "destinationSlug": "usa-big-sur",
    "title": "Big Sur Signature Itinerary",
    "duration": "11 days",
    "highlights": [
      "Private guide",
      "Handpicked stays",
      "Cinematic photo spots",
      "Local experiences"
    ]
  },
  {
    "id": "it-15",
    "destinationSlug": "vietnam-ha-giang",
    "title": "Ha Giang Signature Itinerary",
    "duration": "5 days",
    "highlights": [
      "Private guide",
      "Handpicked stays",
      "Cinematic photo spots",
      "Local experiences"
    ]
  },
  {
    "id": "it-16",
    "destinationSlug": "peru-cusco",
    "title": "Cusco Signature Itinerary",
    "duration": "6 days",
    "highlights": [
      "Private guide",
      "Handpicked stays",
      "Cinematic photo spots",
      "Local experiences"
    ]
  },
  {
    "id": "it-17",
    "destinationSlug": "brazil-rio",
    "title": "Rio de Janeiro Signature Itinerary",
    "duration": "7 days",
    "highlights": [
      "Private guide",
      "Handpicked stays",
      "Cinematic photo spots",
      "Local experiences"
    ]
  },
  {
    "id": "it-18",
    "destinationSlug": "argentina-patagonia",
    "title": "Patagonia Signature Itinerary",
    "duration": "8 days",
    "highlights": [
      "Private guide",
      "Handpicked stays",
      "Cinematic photo spots",
      "Local experiences"
    ]
  },
  {
    "id": "it-19",
    "destinationSlug": "indonesia-bali",
    "title": "Bali Signature Itinerary",
    "duration": "9 days",
    "highlights": [
      "Private guide",
      "Handpicked stays",
      "Cinematic photo spots",
      "Local experiences"
    ]
  },
  {
    "id": "it-20",
    "destinationSlug": "thailand-chiang-mai",
    "title": "Chiang Mai Signature Itinerary",
    "duration": "10 days",
    "highlights": [
      "Private guide",
      "Handpicked stays",
      "Cinematic photo spots",
      "Local experiences"
    ]
  },
  {
    "id": "it-21",
    "destinationSlug": "australia-tasmania",
    "title": "Tasmania Signature Itinerary",
    "duration": "11 days",
    "highlights": [
      "Private guide",
      "Handpicked stays",
      "Cinematic photo spots",
      "Local experiences"
    ]
  },
  {
    "id": "it-22",
    "destinationSlug": "south-africa-cape-town",
    "title": "Cape Town Signature Itinerary",
    "duration": "5 days",
    "highlights": [
      "Private guide",
      "Handpicked stays",
      "Cinematic photo spots",
      "Local experiences"
    ]
  },
  {
    "id": "it-23",
    "destinationSlug": "tanzania-zanzibar",
    "title": "Zanzibar Signature Itinerary",
    "duration": "6 days",
    "highlights": [
      "Private guide",
      "Handpicked stays",
      "Cinematic photo spots",
      "Local experiences"
    ]
  },
  {
    "id": "it-24",
    "destinationSlug": "uae-dubai-desert",
    "title": "Dubai Desert Signature Itinerary",
    "duration": "7 days",
    "highlights": [
      "Private guide",
      "Handpicked stays",
      "Cinematic photo spots",
      "Local experiences"
    ]
  },
  {
    "id": "it-25",
    "destinationSlug": "turkey-cappadocia",
    "title": "Cappadocia Signature Itinerary",
    "duration": "8 days",
    "highlights": [
      "Private guide",
      "Handpicked stays",
      "Cinematic photo spots",
      "Local experiences"
    ]
  },
  {
    "id": "it-26",
    "destinationSlug": "jordan-petra",
    "title": "Petra Signature Itinerary",
    "duration": "9 days",
    "highlights": [
      "Private guide",
      "Handpicked stays",
      "Cinematic photo spots",
      "Local experiences"
    ]
  },
  {
    "id": "it-27",
    "destinationSlug": "nepal-pokhara",
    "title": "Pokhara Signature Itinerary",
    "duration": "10 days",
    "highlights": [
      "Private guide",
      "Handpicked stays",
      "Cinematic photo spots",
      "Local experiences"
    ]
  },
  {
    "id": "it-28",
    "destinationSlug": "india-udaipur",
    "title": "Udaipur Signature Itinerary",
    "duration": "11 days",
    "highlights": [
      "Private guide",
      "Handpicked stays",
      "Cinematic photo spots",
      "Local experiences"
    ]
  },
  {
    "id": "it-29",
    "destinationSlug": "sri-lanka-ella",
    "title": "Ella Signature Itinerary",
    "duration": "5 days",
    "highlights": [
      "Private guide",
      "Handpicked stays",
      "Cinematic photo spots",
      "Local experiences"
    ]
  },
  {
    "id": "it-30",
    "destinationSlug": "croatia-dubrovnik",
    "title": "Dubrovnik Signature Itinerary",
    "duration": "6 days",
    "highlights": [
      "Private guide",
      "Handpicked stays",
      "Cinematic photo spots",
      "Local experiences"
    ]
  }
];

export const faqs: TravelFaq[] = [
  {
    "id": "faq-1",
    "question": "When should I book?",
    "answer": "Yes. Every itinerary is flexible and tailored by our consultants around your pace, preferences, and comfort level."
  },
  {
    "id": "faq-2",
    "question": "Are flights included?",
    "answer": "Yes. Every itinerary is flexible and tailored by our consultants around your pace, preferences, and comfort level."
  },
  {
    "id": "faq-3",
    "question": "Can plans be customized?",
    "answer": "Yes. Every itinerary is flexible and tailored by our consultants around your pace, preferences, and comfort level."
  },
  {
    "id": "faq-4",
    "question": "Do you offer concierge support?",
    "answer": "Yes. Every itinerary is flexible and tailored by our consultants around your pace, preferences, and comfort level."
  },
  {
    "id": "faq-5",
    "question": "Is solo travel supported?",
    "answer": "Yes. Every itinerary is flexible and tailored by our consultants around your pace, preferences, and comfort level."
  },
  {
    "id": "faq-6",
    "question": "When should I book?",
    "answer": "Yes. Every itinerary is flexible and tailored by our consultants around your pace, preferences, and comfort level."
  },
  {
    "id": "faq-7",
    "question": "Are flights included?",
    "answer": "Yes. Every itinerary is flexible and tailored by our consultants around your pace, preferences, and comfort level."
  },
  {
    "id": "faq-8",
    "question": "Can plans be customized?",
    "answer": "Yes. Every itinerary is flexible and tailored by our consultants around your pace, preferences, and comfort level."
  },
  {
    "id": "faq-9",
    "question": "Do you offer concierge support?",
    "answer": "Yes. Every itinerary is flexible and tailored by our consultants around your pace, preferences, and comfort level."
  },
  {
    "id": "faq-10",
    "question": "Is solo travel supported?",
    "answer": "Yes. Every itinerary is flexible and tailored by our consultants around your pace, preferences, and comfort level."
  }
];

export const travelGuides: TravelGuide[] = [
  {
    "id": "guide-1",
    "title": "Essential Guide 1",
    "topic": "Packing",
    "summary": "Practical, editorial, and field-tested guidance to elevate your journey."
  },
  {
    "id": "guide-2",
    "title": "Essential Guide 2",
    "topic": "Photography",
    "summary": "Practical, editorial, and field-tested guidance to elevate your journey."
  },
  {
    "id": "guide-3",
    "title": "Essential Guide 3",
    "topic": "Local Etiquette",
    "summary": "Practical, editorial, and field-tested guidance to elevate your journey."
  },
  {
    "id": "guide-4",
    "title": "Essential Guide 4",
    "topic": "Safety",
    "summary": "Practical, editorial, and field-tested guidance to elevate your journey."
  },
  {
    "id": "guide-5",
    "title": "Essential Guide 5",
    "topic": "Cuisine",
    "summary": "Practical, editorial, and field-tested guidance to elevate your journey."
  },
  {
    "id": "guide-6",
    "title": "Essential Guide 6",
    "topic": "Transport",
    "summary": "Practical, editorial, and field-tested guidance to elevate your journey."
  },
  {
    "id": "guide-7",
    "title": "Essential Guide 7",
    "topic": "Packing",
    "summary": "Practical, editorial, and field-tested guidance to elevate your journey."
  },
  {
    "id": "guide-8",
    "title": "Essential Guide 8",
    "topic": "Photography",
    "summary": "Practical, editorial, and field-tested guidance to elevate your journey."
  },
  {
    "id": "guide-9",
    "title": "Essential Guide 9",
    "topic": "Local Etiquette",
    "summary": "Practical, editorial, and field-tested guidance to elevate your journey."
  },
  {
    "id": "guide-10",
    "title": "Essential Guide 10",
    "topic": "Safety",
    "summary": "Practical, editorial, and field-tested guidance to elevate your journey."
  },
  {
    "id": "guide-11",
    "title": "Essential Guide 11",
    "topic": "Cuisine",
    "summary": "Practical, editorial, and field-tested guidance to elevate your journey."
  },
  {
    "id": "guide-12",
    "title": "Essential Guide 12",
    "topic": "Transport",
    "summary": "Practical, editorial, and field-tested guidance to elevate your journey."
  }
];

export const consultants: Consultant[] = [
  {
    "id": "consult-1",
    "name": "Aria Stone",
    "specialty": "Luxury Escapes",
    "languages": [
      "English",
      "Spanish",
      "Arabic"
    ],
    "experienceYears": 6
  },
  {
    "id": "consult-2",
    "name": "Milo Reyes",
    "specialty": "Wildlife Journeys",
    "languages": [
      "English",
      "Spanish",
      "French"
    ],
    "experienceYears": 7
  },
  {
    "id": "consult-3",
    "name": "Leila Noor",
    "specialty": "Honeymoon Curation",
    "languages": [
      "English",
      "Spanish",
      "Arabic"
    ],
    "experienceYears": 8
  },
  {
    "id": "consult-4",
    "name": "Theo Grant",
    "specialty": "Adventure Design",
    "languages": [
      "English",
      "Spanish",
      "French"
    ],
    "experienceYears": 9
  },
  {
    "id": "consult-5",
    "name": "Nia Laurent",
    "specialty": "Cultural Expeditions",
    "languages": [
      "English",
      "Spanish",
      "Arabic"
    ],
    "experienceYears": 10
  },
  {
    "id": "consult-6",
    "name": "Aria Stone",
    "specialty": "Luxury Escapes",
    "languages": [
      "English",
      "Spanish",
      "French"
    ],
    "experienceYears": 11
  },
  {
    "id": "consult-7",
    "name": "Milo Reyes",
    "specialty": "Wildlife Journeys",
    "languages": [
      "English",
      "Spanish",
      "Arabic"
    ],
    "experienceYears": 12
  },
  {
    "id": "consult-8",
    "name": "Leila Noor",
    "specialty": "Honeymoon Curation",
    "languages": [
      "English",
      "Spanish",
      "French"
    ],
    "experienceYears": 13
  },
  {
    "id": "consult-9",
    "name": "Theo Grant",
    "specialty": "Adventure Design",
    "languages": [
      "English",
      "Spanish",
      "Arabic"
    ],
    "experienceYears": 14
  },
  {
    "id": "consult-10",
    "name": "Nia Laurent",
    "specialty": "Cultural Expeditions",
    "languages": [
      "English",
      "Spanish",
      "French"
    ],
    "experienceYears": 15
  }
];
