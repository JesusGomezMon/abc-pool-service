import type { MetadataRoute } from "next";
import { supportedLanguages } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return supportedLanguages.map((lang) => ({
    url: `${siteUrl}/${lang}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 1,
    alternates: {
      languages: Object.fromEntries(
        supportedLanguages.map((l) => [l, `${siteUrl}/${l}`])
      ),
    },
  }));
}
