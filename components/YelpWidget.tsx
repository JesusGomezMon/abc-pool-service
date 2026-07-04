"use client";

import Script from "next/script";
import { yelpBusinessId } from "@/lib/reviews";
import { isPlaceholder } from "@/lib/site";
import styles from "@/app/[lang]/styles.module.css";

/**
 * Official Yelp Review Badge embed.
 * ID from Yelp for Business → Marketing → Get Reviews Widget.
 */
export function YelpWidget() {
  if (isPlaceholder(yelpBusinessId)) {
    return (
      <div className={styles.yelpEmbed}>
        <p className={styles.yelpPlaceholder}>
          Yelp widget: replace{" "}
          <code>[YELP_BUSINESS_ID]</code> in{" "}
          <code>lib/reviews.ts</code> or{" "}
          <code>NEXT_PUBLIC_YELP_BUSINESS_ID</code> in{" "}
          <code>.env.local</code>
        </p>
      </div>
    );
  }

  return (
    <div className={styles.yelpEmbed}>
      <div id={`yelp-biz-badge-rrc-${yelpBusinessId}`} />
      <Script
        id="yelp-biz-badge-script"
        src="https://www.yelp.com/embed/widgets.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
