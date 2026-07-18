const UNSPLASH_LIBRARY = [
  "photo-1469474968028-56623f02e42e",
  "photo-1482192505345-5655af888cc4",
  "photo-1501785888041-af3ef285b470",
  "photo-1439853949127-fa647821eba0",
  "photo-1527631746610-bca00a040d60",
  "photo-1511739001486-6bfe10ce785f",
  "photo-1501554728187-ce583db33af7",
  "photo-1476514525535-07fb3b4ae5f1",
  "photo-1454496522488-7a8e488e8606",
  "photo-1464822759023-fed622ff2c3b",
  "photo-1441974231531-c6227db76b6e",
  "photo-1472396961693-142e6e269027",
  "photo-1483729558449-99ef09a8c325",
  "photo-1468436139062-f60a71c5c892",
  "photo-1507525428034-b723cf961d3e",
  "photo-1500530855697-b586d89ba3ee",
  "photo-1530789253388-582c481c54b0",
  "photo-1493558103817-58b2924bce98",
  "photo-1506197603052-3cc9c3a201bd",
  "photo-1518509562904-e7ef99cdcc86",
] as const;

function hashSeed(seed: string) {
  let hash = 0;

  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }

  return Math.abs(hash);
}

export function getUnsplashImage(seed: string, width = 1400, height = 900) {
  const index = hashSeed(seed) % UNSPLASH_LIBRARY.length;
  const photoId = UNSPLASH_LIBRARY[index];
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&h=${height}&q=80`;
}

export function getUnsplashGallery(seed: string, count = 5) {
  return Array.from({ length: count }).map((_, index) =>
    getUnsplashImage(`${seed}-${index}`, 1400, 900),
  );
}
