"use client";

import { use, useEffect, useState } from "react";
import Image from "next/image";
import { getDictionary, Language, supportedLanguages } from "@/lib/i18n";
import { cosineWavePath } from "@/lib/wave";
import {
  getPublishedReviews,
  reviewStars,
  yelpProfileUrl,
} from "@/lib/reviews";
import { business } from "@/lib/site";
import { YelpWidget } from "@/components/YelpWidget";
import { YelpRatingBar } from "@/components/YelpRatingBar";
import styles from "./styles.module.css";

// Low amp so cos(x * 0.5) reads stretched, not tall peaks
const waves = {
  hero: cosineWavePath(1440, 48, 10, 2, false),
  toDark: cosineWavePath(1440, 40, 8, 2, false),
  fromTint: cosineWavePath(1440, 40, 8, 2, true),
  toFoot: cosineWavePath(1440, 48, 10, 2, false),
};

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default function Page({ params }: PageProps) {
  const { lang: paramLang } = use(params);
  const initialLang = (
    supportedLanguages.includes(paramLang as Language) ? paramLang : "es"
  ) as Language;
  const [lang, setLang] = useState<Language>(initialLang);
  const publishedReviews = getPublishedReviews();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.in);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(`.${styles.reveal}`).forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const t = getDictionary(lang);
  const waHref = `https://wa.me/12103921245?text=${encodeURIComponent(t.waMessage)}`;
  const toggleLang = () => {
    const newLang = lang === "es" ? "en" : "es";
    setLang(newLang);
    document.documentElement.lang = newLang;
    window.history.replaceState(null, "", `/${newLang}`);
  };

  return (
    <div className={styles.llPage}>
      {/* Navbar */}
      <div className={styles.navbar}>
        <div className={styles.brand}>
          <Image
            src="/img/logo-abc.svg"
            alt=""
            className={styles.brandLogo}
            width={180}
            height={56}
            priority
          />
          <span className={styles.brandName}>{business.name}</span>
        </div>
        <div className={styles.navactions}>
          <button className={styles.langBtn} onClick={toggleLang}>
            {t.langLabel}
          </button>
          <a
            className={styles.btnWa}
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.hero.cta}
          </a>
        </div>
      </div>

      {/* Hero */}
      <div className={styles.heroB}>
        <Image
          src="/img/hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.heroImg}
          aria-hidden
        />
        <div className={styles.scrim} aria-hidden="true" />
        <div className={styles.heroCopy}>
          <h1 className={styles.heroCopyH1}>{t.hero.h1}</h1>
          <p className={styles.heroCopySub}>{t.hero.sub}</p>
          <div className={styles.ctaRow}>
            <a
              className={styles.btnWa}
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.hero.cta}
            </a>
            <a className={styles.btnAlt} href="tel:+12103921245">
              {t.hero.call}
            </a>
          </div>
        </div>
        <svg
          className={`${styles.waveSeam} ${styles.tall}`}
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path style={{ fill: "var(--bg)" }} d={waves.hero} />
        </svg>
      </div>

      {/* Filter / Self-check */}
      <div className={styles.llBand}>
        <div className={`${styles.llInner} ${styles.reveal}`}>
          <p className={styles.llEyebrow}>{t.filterEyebrow}</p>
          <h2 className={styles.llH2}>{t.filterTitle}</h2>
          <div className={styles.llCheck}>
            {t.filterItems.map((item, i) => (
              <div key={i} className={styles.llCheckItem}>
                <span className={styles.llCheckMark}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className={styles.llNote}>{t.filterOut}</p>
          <p className={`${styles.llNote} ${styles.fontBold}`}>{t.filterFollow}</p>
        </div>
      </div>

      {/* Evidence / Testimonial */}
      <div className={`${styles.llBand} ${styles.llBandTint}`}>
        <div className={`${styles.llInner} ${styles.reveal}`}>
          <p className={styles.llEyebrow}>{t.evidenceEyebrow}</p>
          <div className={styles.llQuoteCard}>
            <p className={styles.llQuote}>"{t.evidenceQuote}"</p>
            <p className={styles.llQuoteResult}>{t.evidenceResult}</p>
            <p className={styles.llQuoteFoot}>{t.evidenceFoot}</p>
            <div className={styles.llBaGrid}>
              <div className={styles.baCard}>
                <p className={styles.llBaLabel}>{t.baBefore}</p>
                <Image
                  className={styles.baImg}
                  src="/img/antes.webp"
                  alt={t.baBefore}
                  width={640}
                  height={480}
                  sizes="(max-width: 860px) 100vw, 360px"
                  loading="lazy"
                />
              </div>
              <div className={styles.baCard}>
                <p className={styles.llBaLabel}>{t.baAfter}</p>
                <Image
                  className={styles.baImg}
                  src="/img/despues.webp"
                  alt={t.baAfter}
                  width={640}
                  height={480}
                  sizes="(max-width: 860px) 100vw, 360px"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className={styles.llBand}>
        <div className={`${styles.llInnerWide} ${styles.reveal}`}>
          <p className={styles.llEyebrow}>{t.reviewsEyebrow}</p>
          <h2 className={styles.llH2}>{t.reviewsTitle}</h2>
          <YelpRatingBar label={t.reviewsYelpRatingLabel} />
          <YelpWidget />
          {publishedReviews.length > 0 && (
            <>
              <h3 className={styles.reviewsFeaturedTitle}>
                {t.reviewsFeaturedTitle}
              </h3>
              <div className={styles.reviewsGrid}>
                {publishedReviews.map((review, i) => (
                  <blockquote key={i} className={styles.reviewCard}>
                    <p className={styles.reviewStars} aria-hidden="true">
                      {reviewStars(review.rating)}
                    </p>
                    <p className={styles.reviewText}>
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <footer className={styles.reviewAuthor}>{review.name}</footer>
                  </blockquote>
                ))}
              </div>
            </>
          )}
          <div className={styles.reviewsCtaRow}>
            <a
              className={styles.btnYelp}
              href={yelpProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.reviewsYelpCta}
            </a>
          </div>
        </div>
      </div>

      {/* Villain */}
      <div className={styles.llBand}>
        <div className={`${styles.llInner} ${styles.reveal}`}>
          <h2 className={styles.llH2}>{t.villainTitle}</h2>
          <p className={styles.llLead}>{t.villainLead}</p>
          <div className={styles.llList}>
            {t.villainItems.map((item, i) => (
              <div key={i} className={styles.llListItem}>
                <span className={styles.llListNum}>＋</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className={styles.llNote}>{t.villainFoot}</p>
        </div>
        <svg
          className={styles.waveSeam}
          viewBox="0 0 1440 40"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path style={{ fill: "var(--foot-bg)" }} d={waves.toDark} />
        </svg>
      </div>

      {/* Cost */}
      <div className={`${styles.llBand} ${styles.llBandDark}`}>
        <div className={`${styles.llInner} ${styles.reveal}`}>
          <h2 className={styles.llH2}>{t.costTitle}</h2>
          <div className={styles.llCostGrid}>
            {t.costs.map((cost, i) => (
              <div key={i} className={styles.llCostCard}>
                <p className={styles.llCostP}>{cost.p}</p>
                <p className={styles.llCostD}>{cost.d}</p>
              </div>
            ))}
          </div>
          <p className={styles.llLead} style={{ marginTop: "30px" }}>
            {t.costFoot}
          </p>
        </div>
      </div>

      {/* Future Vision */}
      <div className={styles.llBand}>
        <div className={`${styles.llInner} ${styles.reveal}`}>
          <h2 className={styles.llH2}>{t.futureTitle}</h2>
          <p className={styles.llLead}>{t.futureBody}</p>
          <p className={styles.llLead} style={{ marginTop: "16px", fontWeight: 700, color: "var(--accent)" }}>
            {t.futureBody2}
          </p>
          <p className={styles.llNote}>{t.futureFoot}</p>
        </div>
      </div>

      {/* Offer / Packages */}
      <div className={`${styles.llBand} ${styles.llBandTint}`}>
        <div className={`${styles.llInnerWide} ${styles.reveal}`}>
          <p className={styles.llEyebrow}>{t.offerEyebrow}</p>
          <h2 className={styles.llH2}>{t.offerTitle}</h2>
          <p className={styles.llLead}>{t.offerLead}</p>
          <div className={styles.llPkgGrid}>
            {t.packages.map((pkg, i) => (
              <div
                key={i}
                className={`${styles.llPkgCard}${pkg.tag ? ` ${styles.llPkgFeatured}` : ""}`}
              >
                {pkg.tag && <span className={styles.llPkgTag}>{pkg.tag}</span>}
                <h3 className={styles.llPkgName}>{pkg.name}</h3>
                <ul className={styles.llPkgItems}>
                  {pkg.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Price & Steps */}
      <div className={`${styles.llBand} ${styles.llBandTint}`}>
        <div className={`${styles.llInner} ${styles.reveal}`}>
          <h2 className={styles.llH2}>{t.priceTitle}</h2>
          <p className={styles.llLead}>{t.priceBody}</p>
          <div style={{ height: "40px" }}></div>
          <h2 className={styles.llH2}>{t.stepsTitle}</h2>
          <p className={styles.llLead}>{t.stepsIntro}</p>
          <div className={styles.llSteps} style={{ marginTop: "26px" }}>
            {t.steps.map((step, i) => (
              <div key={i} className={styles.llListItem}>
                <span className={styles.llListNum}>{i + 1}</span>
                <span>{step}</span>
              </div>
            ))}
          </div>
          <p className={styles.llNote}>{t.stepsFoot}</p>
          <p className={styles.llLead} style={{ marginTop: "22px", fontWeight: 600 }}>
            {t.stepsClose}
          </p>
        </div>
      </div>

      {/* Risk Mitigation */}
      <div className={styles.llBand}>
        <div className={`${styles.llInnerWide} ${styles.reveal}`}>
          <h2 className={styles.llH2}>{t.riskTitle}</h2>
          <div className={styles.llRiskGrid}>
            {t.riskItems.map((risk, i) => (
              <div key={i} className={styles.llRiskCard}>
                <p className={styles.llRiskH}>{risk.h}</p>
                <p className={styles.llRiskD}>{risk.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Authority */}
      <div className={`${styles.llBand} ${styles.llBandTint}`}>
        <div className={`${styles.llInner} ${styles.reveal}`}>
          <h2 className={styles.llH2}>{t.authorityTitle}</h2>
          <p className={styles.llLead}>{t.authorityLead}</p>
          <div className={styles.llAuthGrid}>
            {t.authorityItems.map((item, i) => (
              <div key={i} className={styles.llAuthItem}>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className={styles.llNote}>{t.authorityFoot}</p>
        </div>
        <svg
          className={styles.waveSeam}
          viewBox="0 0 1440 40"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path style={{ fill: "var(--bg)" }} d={waves.fromTint} />
        </svg>
      </div>

      {/* FAQ */}
      <div className={styles.llBand}>
        <div className={`${styles.llInner} ${styles.reveal}`}>
          <h2 className={styles.llH2}>{t.faqTitle}</h2>
          <div className={styles.llFaq}>
            {t.faqs.map((faq, i) => (
              <div key={i} className={styles.llFaqItem}>
                <p className={styles.llFaqQ}>{faq.q}</p>
                <p className={styles.llFaqA}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Urgency */}
      <div className={`${styles.llBand} ${styles.llBandAccent}`} style={{ position: "relative" }}>
        <div className={`${styles.llInnerWide} ${styles.reveal}`}>
          <h2 className={styles.llH2}>{t.urgencyTitle}</h2>
          <div className={styles.llUrgGrid}>
            <div className={styles.llUrgCard}>
              <p className={styles.llUrgH}>{t.optA.h}</p>
              <p className={styles.llUrgD}>{t.optA.d}</p>
            </div>
            <div className={`${styles.llUrgCard} ${styles.b}`}>
              <p className={styles.llUrgH}>{t.optB.h}</p>
              <p className={styles.llUrgD}>{t.optB.d}</p>
            </div>
          </div>
          <p className={styles.llLead} style={{ marginTop: "30px", maxWidth: "760px" }}>
            {t.urgencyFoot}
          </p>
          <div className={styles.llCtaRow}>
            <a
              className={styles.btnGhost}
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.hero.cta}
            </a>
          </div>
        </div>
        <svg
          className={`${styles.waveSeam} ${styles.tall}`}
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path style={{ fill: "var(--foot-bg)" }} d={waves.toFoot} />
        </svg>
      </div>

      {/* Close */}
      <div className={`${styles.llBand} ${styles.llBandDark}`} style={{ paddingTop: "96px", textAlign: "center" }}>
        <div className={`${styles.llInner} ${styles.reveal}`}>
          <h2 className={styles.llH2}>{t.closeTitle}</h2>
          <p className={styles.llLead}>{t.closeBody}</p>
          <p className={styles.llLead} style={{ marginTop: "16px" }}>
            {t.closeBody2}
          </p>
          <p className={styles.llNote} style={{ opacity: 0.85, fontWeight: 700, fontSize: "16px" }}>
            {t.closeFoot}
          </p>
          <div className={styles.finalCtaBlock}>
            <a className={styles.btnCall} href="tel:+12103921245">
              <span className={styles.btnCallLabel}>{t.finalCta}</span>
              <span className={styles.btnCallPhone}>210-392-1245</span>
            </a>
            <a
              className={styles.btnWa}
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.hero.cta}
            </a>
            <p className={styles.llFinalTag}>{t.finalTagline}</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.foot}>
        <div className={styles.footInner}>
          <div className={styles.footGrid}>
            <div className={styles.footCol}>
              <div className={styles.footBrandBlock}>
                <Image
                  src="/img/logo-completo.svg"
                  alt="ABC Swimming Pool Service"
                  className={styles.footLogo}
                  width={320}
                  height={80}
                  loading="lazy"
                />
                <p className={styles.footTagline}>{t.footTagline}</p>
              </div>
            </div>
            <div className={styles.footCol}>
              <p className={styles.footColLabel}>{t.footArea}</p>
              <a className={styles.footLink} href="tel:+12103921245">
                +1 210-392-1245
              </a>
              <p className={styles.footHours}>{t.footHours}</p>
            </div>
            <div className={`${styles.footCol} ${styles.footSocialCol}`}>
              <p className={styles.footFollow}>{t.footFollow}</p>
              <div className={styles.social}>
                <a
                  className={styles.socBtn}
                  href="https://instagram.com/abcpoolservice"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2Zm0 7.9A3.1 3.1 0 1 1 12 8.9a3.1 3.1 0 0 1 0 6.2Zm6.1-8.2a1.12 1.12 0 1 1-2.24 0 1.12 1.12 0 0 1 2.24 0ZM12 2.5c-2.6 0-2.9 0-4 .06-1.1.05-1.85.23-2.5.49a5 5 0 0 0-1.82 1.18 5 5 0 0 0-1.18 1.82c-.26.65-.44 1.4-.49 2.5C2 9.1 2 9.4 2 12s0 2.9.06 4c.05 1.1.23 1.85.49 2.5a5 5 0 0 0 1.18 1.82 5 5 0 0 0 1.82 1.18c.65.26 1.4.44 2.5.49 1.1.06 1.4.06 4 .06s2.9 0 4-.06c1.1-.05 1.85-.23 2.5-.49a5 5 0 0 0 1.82-1.18 5 5 0 0 0 1.18-1.82c.26-.65.44-1.4.49-2.5.06-1.1.06-1.4.06-4s0-2.9-.06-4c-.05-1.1-.23-1.85-.49-2.5a5 5 0 0 0-1.18-1.82 5 5 0 0 0-1.82-1.18c-.65-.26-1.4-.44-2.5-.49-1.1-.06-1.4-.06-4-.06Zm0 1.7c2.55 0 2.85 0 3.86.06.93.04 1.43.2 1.77.33.44.17.76.38 1.09.71.33.33.54.65.71 1.09.13.34.29.84.33 1.77.05 1 .06 1.31.06 3.86s0 2.85-.06 3.86c-.04.93-.2 1.43-.33 1.77-.17.44-.38.76-.71 1.09-.33.33-.65.54-1.09.71-.34.13-.84.29-1.77.33-1 .05-1.31.06-3.86.06s-2.85 0-3.86-.06c-.93-.04-1.43-.2-1.77-.33a2.9 2.9 0 0 1-1.09-.71 2.9 2.9 0 0 1-.71-1.09c-.13-.34-.29-.84-.33-1.77C4.2 14.85 4.2 14.55 4.2 12s0-2.85.06-3.86c.04-.93.2-1.43.33-1.77.17-.44.38-.76.71-1.09.33-.33.65-.54 1.09-.71.34-.13.84-.29 1.77-.33C9.15 4.2 9.45 4.2 12 4.2Z"
                    />
                  </svg>
                </a>
                <a
                  className={styles.socBtn}
                  href="https://www.facebook.com/ABCSwimmingPoolServices"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.6c0-.9.3-1.6 1.6-1.6h1.7V4.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.4v3.2h2.7V22h3.4Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <p className={styles.copyline}>© 2026 ABC Swimming Pool Service</p>
        </div>
      </footer>

      <a
        className={styles.waFloat}
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12.04 2C6.58 2 2.15 6.4 2.15 11.82c0 1.96.52 3.87 1.5 5.55L2 22l4.8-1.56a10 10 0 0 0 5.24 1.44h.01c5.46 0 9.89-4.4 9.89-9.82C21.94 6.4 17.5 2 12.04 2Zm5.76 13.98c-.24.68-1.4 1.25-1.93 1.33-.5.07-1.13.1-1.82-.11-.42-.13-.95-.31-1.64-.61-2.88-1.25-4.76-4.15-4.9-4.34-.14-.2-1.16-1.54-1.16-2.94 0-1.4.73-2.09 1-2.37.24-.26.53-.33.71-.33h.51c.16 0 .38-.06.59.45.22.53.74 1.83.8 1.96.07.13.11.29.02.46-.09.18-.13.29-.26.44-.13.16-.27.35-.39.47-.13.13-.26.27-.11.52.14.26.64 1.05 1.37 1.7.94.84 1.73 1.1 1.98 1.22.24.13.39.11.53-.06.15-.18.62-.72.79-.97.16-.24.33-.2.55-.12.22.09 1.4.66 1.64.78.24.13.4.18.46.29.06.1.06.6-.18 1.28Z"
          />
        </svg>
      </a>
    </div>
  );
}
