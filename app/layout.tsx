import type React from "react"
import { Geist, Geist_Mono } from "next/font/google"
import { headers } from "next/headers"
import { Analytics } from "@vercel/analytics/next"
import { isLocale } from "@/lib/translations"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const headersList = await headers()
  const localeHeader = headersList.get("x-next-locale")
  const lang = localeHeader && isLocale(localeHeader) ? localeHeader === "es" ? "es" : "en" : "es"
  return (
    <html lang={lang}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
