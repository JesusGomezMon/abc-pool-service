import { isPlaceholder } from "@/lib/site";

/** Yelp profile — do not change unless the business URL changes. */
export const yelpProfileUrl =
  "https://www.yelp.com/biz/abc-swimming-pool-service-san-antonio";

/**
 * From Yelp for Business → Get Reviews Widget.
 * Replace [YELP_BUSINESS_ID] with your ID (or set NEXT_PUBLIC_YELP_BUSINESS_ID in .env).
 */
export const yelpBusinessId =
  process.env.NEXT_PUBLIC_YELP_BUSINESS_ID ?? "[YELP_BUSINESS_ID]";

/**
 * Update from your Yelp profile before publishing (Rich Results needs numbers).
 * Replace [RATING_VALUE] (e.g. 4.8) and [REVIEW_COUNT] (e.g. 42).
 */
export const yelpAggregateRating = {
  ratingValue: "[RATING_VALUE]",
  reviewCount: "[REVIEW_COUNT]",
};

/** Paste real Yelp reviews here — do not auto-generate content. */
export const featuredReviews = [
  {
    name: "[CLIENT_NAME_1]",
    text: "[REVIEW_TEXT_1 — paste exact quote from Yelp]",
    rating: "[RATING_1]",
  },
  {
    name: "[CLIENT_NAME_2]",
    text: "[REVIEW_TEXT_2 — paste exact quote from Yelp]",
    rating: "[RATING_2]",
  },
  {
    name: "[CLIENT_NAME_3]",
    text: "[REVIEW_TEXT_3 — paste exact quote from Yelp]",
    rating: "[RATING_3]",
  },
] as const;

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
