import { isPlaceholder } from "@/lib/site";

/** Yelp profile — do not change unless the business URL changes. */
export const yelpProfileUrl =
  "https://www.yelp.com/biz/abc-swimming-pool-service-san-antonio";

/** Yelp for Business → Get Reviews Widget (biz slug works for most profiles). */
export const yelpBusinessId =
  process.env.NEXT_PUBLIC_YELP_BUSINESS_ID ??
  "abc-swimming-pool-service-san-antonio";

/** From Yelp profile (Jul 2026). Update if your count changes. */
export const yelpAggregateRating = {
  ratingValue: "4.0",
  reviewCount: "1",
};

/** Real Yelp quotes only — omit placeholders from the live site. */
export type FeaturedReview = {
  name: string;
  text: string;
  rating: string | number;
};

export const featuredReviews: FeaturedReview[] = [];

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
