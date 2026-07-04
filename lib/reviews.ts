import { isPlaceholder } from "@/lib/site";

/** Yelp profile — do not change unless the business URL changes. */
export const yelpProfileUrl =
  "https://www.yelp.com/biz/abc-swimming-pool-service-san-antonio";

/** Yelp for Business → Get Reviews Widget (biz slug works for most profiles). */
export const yelpBusinessId =
  process.env.NEXT_PUBLIC_YELP_BUSINESS_ID ??
  "abc-swimming-pool-service-san-antonio";

/** From Yelp profile — update if count changes. */
export const yelpAggregateRating = {
  ratingValue: "4.6",
  reviewCount: "5",
};

export type FeaturedReview = {
  name: string;
  text: string;
  rating: string | number;
};

/** Yelp quotes in display order — 4-star review (Joni C.) centered in the top row. */
export const featuredReviews: FeaturedReview[] = [
  {
    name: "Maria O.",
    text: "Great service service, always on time Very good price , Service includes vacuuming , they bring their own equipment, chemicals , water tests.",
    rating: 5,
  },
  {
    name: "Joni C.",
    text: "Very conscientious, experienced, and reliable staff. Excellent service for great value.",
    rating: 4,
  },
  {
    name: "Luis B.",
    text: "Very good service, my pool really is now cleaner and prices are very accessible",
    rating: 5,
  },
  {
    name: "Jaquie F.",
    text: "Very reliable, good customer service and highly recommended.",
    rating: 5,
  },
  {
    name: "Monica O.",
    text: "Very good service. They change my liner, good job.",
    rating: 4,
  },
];

export function getPublishedReviews(): FeaturedReview[] {
  return featuredReviews.filter(
    (r) =>
      !isPlaceholder(r.name) &&
      !isPlaceholder(r.text) &&
      !isPlaceholder(String(r.rating))
  );
}

export function resolveAggregateRating() {
  const { ratingValue, reviewCount } = yelpAggregateRating;
  if (
    isPlaceholder(String(ratingValue)) ||
    isPlaceholder(String(reviewCount))
  ) {
    return undefined;
  }
  const value = Number(ratingValue);
  const count = Number(reviewCount);
  if (Number.isNaN(value) || Number.isNaN(count)) return undefined;
  return {
    "@type": "AggregateRating" as const,
    ratingValue: value,
    reviewCount: count,
    bestRating: 5,
    worstRating: 1,
  };
}

export function reviewStars(rating: string | number): string {
  if (typeof rating === "string" && isPlaceholder(rating)) return "—";
  const n = Math.round(Number(rating));
  if (Number.isNaN(n) || n < 1 || n > 5) return "—";
  return "★".repeat(n) + "☆".repeat(5 - n);
}
