import { notFound } from "next/navigation"
import { isLocale } from "@/lib/translations"
import { HomePage } from "@/components/home-page"

type Props = { params: Promise<{ locale: string }> }

export default async function LocalePage({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return <HomePage initialLocale={locale} />
}
