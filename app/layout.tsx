import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dar Margen - Asociación Civil",
  description:
    "Promovemos la inclusión a través de la escritura, el acompañamiento y la formación en derechos y oficios culturales",
  generator: "v0.app",
  icons: {
    icon: "/images/logo-20dar-20margen-202024-20-28trasparente-29.png",
    apple: "/images/logo-20dar-20margen-202024-20-28trasparente-29.png",
  },
  openGraph: {
    title: "Dar Margen - Asociación Civil",
    description:
      "Promovemos la inclusión a través de la escritura, el acompañamiento y la formación en derechos y oficios culturales",
    images: [
      {
        url: "/images/logo-20dar-20margen-202024-20-28trasparente-29.png",
        width: 1200,
        height: 630,
        alt: "Dar Margen - Asociación Civil",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dar Margen - Asociación Civil",
    description:
      "Promovemos la inclusión a través de la escritura, el acompañamiento y la formación en derechos y oficios culturales",
    images: ["/images/logo-20dar-20margen-202024-20-28trasparente-29.png"],
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
