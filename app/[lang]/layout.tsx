import type { Metadata } from "next";
import {
  defaultLanguage,
  supportedLanguages,
  type Language,
} from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";
import { gscVerification, isPlaceholder } from "@/lib/site";
import { nunitoSans, sora } from "@/lib/fonts";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { JsonLd } from "@/components/JsonLd";
import "@/app/globals.css";
import "./styles.module.css";

export function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const validLang = (
    supportedLanguages.includes(lang as Language) ? lang : defaultLanguage
  ) as Language;

  const pageMeta = buildPageMetadata(validLang);

  return {
    ...pageMeta,
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    },
    ...(isPlaceholder(gscVerification)
      ? {}
      : { verification: { google: gscVerification } }),
  };
}

export default async function LangLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const htmlLang = supportedLanguages.includes(lang as Language)
    ? lang
    : defaultLanguage;
  const validLang = htmlLang as Language;

  return (
    <html
      lang={htmlLang}
      className={`${sora.variable} ${nunitoSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
      </head>
      <body
        className={nunitoSans.className}
        style={{ margin: 0, padding: 0, boxSizing: "border-box" }}
      >
        <JsonLd lang={validLang} />
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
