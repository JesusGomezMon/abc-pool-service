import type { TranslationStructure } from "@/lib/i18n";
import styles from "./Services.module.css";

type Package = TranslationStructure["packages"][number];

/** Image slugs aligned by package index (EN kebab-case). */
const SERVICE_SLUGS = [
  "ongoing-maintenance",
  "flexible-maintenance",
  "repairs-and-projects",
  "pool-equipment-installation-and-repair",
  "pool-renovations",
  "pool-leak-detection-and-repair",
  "acid-washing-and-stain-treatment",
] as const;

type Props = {
  eyebrow: string;
  title: string;
  lead: string;
  packages: Package[];
  ctaLabel: string;
  contactHref: string;
  brandsTitle: string;
  licensedLabel: string;
  revealClass?: string;
};

export function Services({
  eyebrow,
  title,
  lead,
  packages,
  ctaLabel,
  contactHref,
  brandsTitle,
  licensedLabel,
  revealClass,
}: Props) {
  return (
    <section className={styles.section} aria-labelledby="services-title">
      <div className={`${styles.inner} ${revealClass ?? ""}`}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 id="services-title" className={styles.title}>
          {title}
        </h2>
        <p className={styles.lead}>{lead}</p>

        <div className={styles.grid}>
          {packages.map((pkg, i) => {
            const slug = SERVICE_SLUGS[i] ?? `service-${i + 1}`;
            return (
              <a
                key={`${slug}-${pkg.name}`}
                href={contactHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.card}${pkg.tag ? ` ${styles.cardFeatured}` : ""}`}
                aria-label={`${pkg.name} — ${ctaLabel}`}
              >
                <div className={styles.imageWrap}>
                  <img
                    src={`/images/services/${slug}.jpg`}
                    alt={pkg.name}
                    className={styles.image}
                    width={400}
                    height={300}
                    loading="lazy"
                  />
                  {pkg.tag ? (
                    <span className={styles.tag}>{pkg.tag}</span>
                  ) : null}
                </div>
                <div className={styles.body}>
                  <h3 className={styles.cardTitle}>{pkg.name}</h3>
                  <ul className={styles.list}>
                    {pkg.items.map((item, j) => (
                      <li key={j} className={styles.listItem}>
                        <span className={styles.check} aria-hidden="true">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <span className={styles.cardCta}>
                    {ctaLabel}
                    <span className={styles.cardCtaArrow} aria-hidden="true">
                      →
                    </span>
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        <div className={styles.brands}>
          <p className={styles.brandsTitle}>{brandsTitle}</p>
          <div
            className={styles.brandsRow}
            aria-label="Equipment partners and credentials"
          >
            <a
              className={styles.brandCard}
              href="https://www.pentair.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pentair"
            >
              <img
                src="/img/pentair-logo-web.svg"
                alt="Pentair"
                className={styles.brandLogo}
                width={160}
                height={40}
                loading="lazy"
              />
            </a>
            <a
              className={styles.brandCard}
              href="https://es.hayward.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hayward"
            >
              <img
                src="/img/hayward-logo-web.svg"
                alt="Hayward"
                className={`${styles.brandLogo} ${styles.brandLogoWide}`}
                width={200}
                height={31}
                loading="lazy"
              />
            </a>
            <span className={`${styles.brandCard} ${styles.brandCardStatic}`}>
              <img
                src="/images/badges/licensed-insured.svg"
                alt={licensedLabel}
                className={styles.brandLogo}
                width={210}
                height={56}
                loading="lazy"
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
