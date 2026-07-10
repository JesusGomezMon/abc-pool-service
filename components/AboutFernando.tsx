import type { TranslationStructure } from "@/lib/i18n";
import styles from "@/app/[lang]/styles.module.css";

type AboutCopy = TranslationStructure["aboutFernando"];

type Props = {
  copy: AboutCopy;
  contactHref: string;
  revealClass?: string;
};

export function AboutFernando({ copy, contactHref, revealClass }: Props) {
  return (
    <section className={styles.llBand} aria-labelledby="about-fernando-title">
      <div className={`${styles.llInnerWide} ${revealClass ?? ""}`}>
        <p className={styles.llEyebrow}>{copy.eyebrow}</p>
        <h2 id="about-fernando-title" className={styles.aboutTitle}>
          {copy.title}
        </h2>

        <div className={styles.aboutGrid}>
          <div className={styles.aboutPhotoWrap}>
            {/* TODO: reemplazar con foto real de Fernando */}
            <div className={styles.aboutPhotoPending} role="img" aria-label={copy.photoPending}>
              <svg viewBox="0 0 24 24" width="48" height="48" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 12c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5zm0 2.5c-3.3 0-10 1.7-10 5V22h20v-2.5c0-3.3-6.7-5-10-5z"
                />
              </svg>
              <span>{copy.photoPending}</span>
            </div>
          </div>

          <div className={styles.aboutBody}>
            {copy.paragraphs.map((paragraph, i) => (
              <p key={i} className={styles.aboutParagraph}>
                {paragraph}
              </p>
            ))}

            <blockquote className={styles.aboutQuote}>
              <p>{copy.quote}</p>
            </blockquote>

            <div className={styles.aboutCtaRow}>
              <a className={styles.btnWa} href={contactHref}>
                {copy.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
