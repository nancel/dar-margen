import type { Metadata } from "next"
import type { Locale } from "./translations"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://darmargen.org.ar"

const metadataByLocale: Record<
  Locale,
  {
    title: string
    description: string
    keywords: string[]
    openGraph: { title: string; description: string; locale: string }
  }
> = {
  es: {
    title: "Dar Margen - Asociación Civil",
    description:
      "Promovemos la inclusión a través de la escritura, el acompañamiento y la formación en derechos y oficios culturales. Buenos Aires, Argentina.",
    keywords: [
      "Dar Margen",
      "asociación civil",
      "inclusión",
      "escritura",
      "cárceles",
      "derechos humanos",
      "educación",
      "talleres",
      "Buenos Aires",
      "Argentina",
      "justicia social",
    ],
    openGraph: {
      title: "Dar Margen - Asociación Civil",
      description:
        "Promovemos la inclusión a través de la escritura, el acompañamiento y la formación en derechos y oficios culturales.",
      locale: "es_AR",
    },
  },
  en: {
    title: "Dar Margen - Civil Association",
    description:
      "We promote inclusion through writing, support, and training in rights and cultural crafts. Non-profit based in Buenos Aires, Argentina.",
    keywords: [
      "Dar Margen",
      "civil association",
      "inclusion",
      "writing",
      "prisons",
      "human rights",
      "education",
      "workshops",
      "Buenos Aires",
      "Argentina",
      "social justice",
      "non-profit",
    ],
    openGraph: {
      title: "Dar Margen - Civil Association",
      description:
        "We promote inclusion through writing, support, and training in rights and cultural crafts. Buenos Aires, Argentina.",
      locale: "en_US",
    },
  },
}

export function getMetadataForLocale(locale: Locale): Metadata {
  const meta = metadataByLocale[locale]
  const canonical = `${siteUrl}/${locale}`

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: meta.title,
      template: `%s | Dar Margen`,
    },
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: "Dar Margen", url: siteUrl }],
    creator: "Dar Margen",
    publisher: "Dar Margen",
    formatDetection: { email: false, address: false, telephone: false },
    robots: { index: true, follow: true },
    icons: {
      icon: "/logoshare.png",
      apple: "/logoshare.png",
    },
    openGraph: {
      title: meta.openGraph.title,
      description: meta.openGraph.description,
      url: canonical,
      siteName: "Dar Margen",
      images: [
        {
          url: "/logoshare.png",
          width: 1200,
          height: 630,
          alt: meta.openGraph.title,
        },
      ],
      type: "website",
      locale: meta.openGraph.locale,
      alternateLocale: locale === "es" ? "en_US" : "es_AR",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.openGraph.title,
      description: meta.openGraph.description,
      images: ["/logoshare.png"],
    },
    alternates: {
      canonical,
      languages: {
        es: `${siteUrl}/es`,
        en: `${siteUrl}/en`,
      },
    },
  }
}
