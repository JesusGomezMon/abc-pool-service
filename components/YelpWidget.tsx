"use client";

import Script from "next/script";
import { yelpBusinessId } from "@/lib/reviews";
import styles from "@/app/[lang]/styles.module.css";

/** Official Yelp Review Badge embed. */
export function YelpWidget() {
  return (
    <div className={styles.yelpEmbed}>
      <div id={`yelp-biz-badge-rrc-${yelpBusinessId}`} />
      <Script
        id="yelp-biz-badge-script"
        src="https://www.yelp.com/embed/widgets.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
