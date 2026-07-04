import type { Language } from "@/lib/i18n";
import { buildLocalBusinessJsonLd } from "@/lib/seo";

export function JsonLd({ lang }: { lang: Language }) {
  const data = buildLocalBusinessJsonLd(lang);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
