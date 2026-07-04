import type { Metadata } from "next";
import type { Language } from "@/lib/i18n";
import { yelpProfileUrl, resolveAggregateRating } from "@/lib/reviews";
import { business, siteUrl } from "@/lib/site";

const seoCopy: Record<
  Language,
  { title: string; description: string; ogLocale: string }
> = {
  es: {
    title: "Mantenimiento de Piscinas en San Antonio | ABC Swimming Pool Service",
    description:
      "Servicio familiar de mantenimiento, limpieza y reparación de piscinas en San Antonio, TX. Presupuesto gratis. Agua cristalina, sin estrés.",
    ogLocale: "es_US",
  },
  en: {
    title: "Pool Maintenance in San Antonio | ABC Swimming Pool Service",
    description:
      "Family-run pool maintenance, cleaning and repair in San Antonio, TX. Free estimate. Crystal-clear water, zero stress.",
    ogLocale: "en_US",
  },
};

export function buildPageMetadata(lang: Language): Metadata {
  const { title, description, ogLocale } = seoCopy[lang];
  const pageUrl = `${siteUrl}/${lang}`;
  const ogImage = `${siteUrl}/img/hero.webp`;

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: pageUrl,
      languages: {
        es: `${siteUrl}/es`,
        en: `${siteUrl}/en`,
      },
    },
    openGraph: {
      type: "website",
      locale: ogLocale,
      url: pageUrl,
      siteName: business.name,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: business.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function buildLocalBusinessJsonLd(lang: Language) {
  const aggregateRating = resolveAggregateRating();

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    name: business.name,
    url: `${siteUrl}/${lang}`,
    image: `${siteUrl}/img/logo-completo.svg`,
    logo: `${siteUrl}/img/logo-abc.svg`,
    telephone: business.phone,
    email: business.email,
    description: seoCopy[lang].description,
    address: {
      "@type": "PostalAddress",
      addressLocality: business.address.addressLocality,
      addressRegion: business.address.addressRegion,
      postalCode: business.address.postalCode,
      addressCountry: business.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    areaServed: {
      "@type": "City",
      name: "San Antonio",
      containedInPlace: { "@type": "State", name: "Texas" },
    },
    priceRange: "$$",
    sameAs: [
      business.social.instagram,
      business.social.facebook,
      yelpProfileUrl,
    ],
    ...(aggregateRating ? { aggregateRating } : {}),
  };
}
