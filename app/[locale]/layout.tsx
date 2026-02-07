import type { Metadata } from "next"
import { isLocale, type Locale } from "@/lib/translations"
import { getMetadataForLocale } from "@/lib/metadata"
import { notFound } from "next/navigation"

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  return getMetadataForLocale(locale)
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return <>{children}</>
}
