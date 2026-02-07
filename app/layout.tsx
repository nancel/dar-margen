import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://darmargen.org.ar"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dar Margen - Asociación Civil",
    template: "%s | Dar Margen",
  },
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
  authors: [{ name: "Dar Margen", url: siteUrl }],
  creator: "Dar Margen",
  publisher: "Dar Margen",
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logoshare.png",
    apple: "/logoshare.png",
  },
  openGraph: {
    title: "Dar Margen - Asociación Civil",
    description:
      "Promovemos la inclusión a través de la escritura, el acompañamiento y la formación en derechos y oficios culturales.",
    url: siteUrl,
    siteName: "Dar Margen",
    images: [
      {
        url: "/logoshare.png",
        width: 1200,
        height: 630,
        alt: "Dar Margen - Asociación Civil",
      },
    ],
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dar Margen - Asociación Civil",
    description:
      "Promovemos la inclusión a través de la escritura, el acompañamiento y la formación en derechos y oficios culturales.",
    images: ["/logoshare.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
