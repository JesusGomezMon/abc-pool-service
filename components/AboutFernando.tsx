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
    </section>
  );
}
