import {
  reviewStars,
  yelpAggregateRating,
  yelpProfileUrl,
} from "@/lib/reviews";
import styles from "@/app/[lang]/styles.module.css";

type Props = {
  label: string;
};

export function YelpRatingBar({ label }: Props) {
  return (
    <a
      className={styles.yelpRatingBar}
      href={yelpProfileUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={styles.yelpRatingStars} aria-hidden="true">
        {reviewStars(yelpAggregateRating.ratingValue)}
      </span>
      <span className={styles.yelpRatingMeta}>
        {yelpAggregateRating.ratingValue} {label}
      </span>
    </a>
  );
}
