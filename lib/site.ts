/** Public site URL — set NEXT_PUBLIC_SITE_URL in production. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.abcswimmingpoolservice.com";

export const business = {
  name: "ABC Swimming Pool Service",
  phone: "+1-210-392-1245",
  phoneDisplay: "210-392-1245",
  email: "info@abcpoolservicetx.com",
  address: {
    streetAddress: "San Antonio",
    addressLocality: "San Antonio",
    addressRegion: "TX",
    postalCode: "78259",
    addressCountry: "US",
  },
  geo: {
    latitude: 29.562,
    longitude: -98.493,
  },
  social: {
    instagram: "https://instagram.com/abcpoolservice",
    facebook: "https://www.facebook.com/ABCSwimmingPoolServices",
  },
} as const;

/** GA4: replace [GA_MEASUREMENT_ID] in .env — e.g. G-XXXXXXXXXX */
export const gaId = process.env.NEXT_PUBLIC_GA_ID;

/** Search Console: replace [GSC_VERIFICATION_CODE] in .env */
export const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION_CODE;

export function isPlaceholder(value: string | undefined): boolean {
  return !value || value.startsWith("[") && value.endsWith("]");
}
