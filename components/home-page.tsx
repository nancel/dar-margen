"use client"

import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Instagram, Mail, Phone, BookOpen, Users, FileText, Megaphone, Menu, X, PenTool } from "lucide-react"
import { ImageCarousel } from "@/components/image-carousel"
import { LanguageSwitcher } from "@/components/language-switcher"
import { SectionDivider } from "@/components/section-divider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { translations, type Language } from "@/lib/translations"

export function HomePage({ initialLocale }: { initialLocale: Language }) {
  const pathname = usePathname()
  const router = useRouter()
  const localeFromUrl = pathname?.split("/")[1] as Language | undefined
  const language: Language =
    localeFromUrl === "es" || localeFromUrl === "en" ? localeFromUrl : initialLocale

  const [isHeroVisible, setIsHeroVisible] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const t = translations[language]

  useEffect(() => {
    const heroSection = document.querySelector(".hero-section")
    if (!heroSection) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    observer.observe(heroSection)
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const handleLanguageChange = (newLang: Language) => {
    router.push(`/${newLang}`)
  }

  const activityIcons = [BookOpen, PenTool, FileText, Megaphone, Users]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex h-16 items-center justify-between">
            <div
              className={`flex items-center gap-4 transition-opacity duration-300 ${isHeroVisible ? "opacity-0 pointer-events-none" : "opacity-100"}`}
            >
              <img
                src="/images/logo-20dar-20margen-202024-20-28trasparente-29.png"
                alt="Dar Margen Logo"
                className="h-15 w-auto"
              />
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("hero")}
                className={`text-sm font-medium transition-all hover:text-primary ${isHeroVisible ? "opacity-0 pointer-events-none w-0" : "opacity-100"}`}
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => scrollToSection("objective")}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {t.nav.objective}
              </button>
              <button
                onClick={() => scrollToSection("activities")}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {t.nav.activities}
              </button>
              <button
                onClick={() => scrollToSection("collaborate")}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {t.nav.collaborate}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {t.nav.contact}
              </button>
            </nav>

            <div className="flex items-center gap-2">
              <LanguageSwitcher currentLanguage={language} onLanguageChange={handleLanguageChange} />

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <nav className="md:hidden py-4 border-t">
              <div className="flex flex-col gap-4">
                {!isHeroVisible && (
                  <button
                    onClick={() => scrollToSection("hero")}
                    className="text-sm font-medium text-left hover:text-primary transition-colors"
                  >
                    {t.nav.home}
                  </button>
                )}
                <button
                  onClick={() => scrollToSection("objective")}
                  className="text-sm font-medium text-left hover:text-primary transition-colors"
                >
                  {t.nav.objective}
                </button>
                <button
                  onClick={() => scrollToSection("activities")}
                  className="text-sm font-medium text-left hover:text-primary transition-colors"
                >
                  {t.nav.activities}
                </button>
                <button
                  onClick={() => scrollToSection("collaborate")}
                  className="text-sm font-medium text-left hover:text-primary transition-colors"
                >
                  {t.nav.collaborate}
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-sm font-medium text-left hover:text-primary transition-colors"
                >
                  {t.nav.contact}
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section with Carousel */}
        <section id="hero" className="hero-section py-12 md:py-20 bg-gradient-to-b from-secondary to-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex flex-col items-center lg:items-start">
                  <img
                    src="/images/logo-20dar-20margen-202024-20-28trasparente-29.png"
                    alt="Dar Margen"
                    className="h-40 md:h-70 w-auto mb-4"
                  />
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty text-center lg:text-left">
                    {t.hero.subtitle}
                  </p>
                </div>
              </div>

              <div>
                <ImageCarousel />
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Objective Section */}
        <section id="objective" className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">{t.objective.title}</h2>
            <Card className="border-2">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed text-pretty">{t.objective.content}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <SectionDivider />

        {/* Activities Section */}
        <section id="activities" className="py-12 md:py-16 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">{t.activities.title}</h2>

            <div className="space-y-8">
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {t.activities.items.map((item, index) => {
                      const Icon = activityIcons[index] || BookOpen
                      return (
                        <li key={index} className="flex gap-4 items-start">
                          <div className="rounded-full bg-primary/10 p-2 mt-1">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-lg leading-relaxed flex-1">{item}</span>
                        </li>
                      )
                    })}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-4">
                  <p className="text-lg leading-relaxed text-pretty">{t.activities.description}</p>
                  <p className="text-lg leading-relaxed font-medium text-primary text-pretty">{t.activities.closing}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Collaborate Section */}
        <section id="collaborate" className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">{t.collaborate.title}</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardDescription className="text-lg leading-relaxed">{t.collaborate.intro}</CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-primary/5 border-primary">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{t.collaborate.bankDetails}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="font-medium">{t.collaborate.holder}</p>
                  <p>{t.collaborate.cuit}</p>
                  <p>{t.collaborate.bank}</p>
                  <p>{t.collaborate.accountNumber}</p>
                  <p className="font-mono text-sm">{t.collaborate.cbu}</p>
                  <p className="font-mono text-sm">{t.collaborate.alias}</p>

                  <div className="pt-4 space-y-3 border-t mt-4">
                    <p className="text-sm leading-relaxed">{t.collaborate.contact}</p>
                    <p className="text-sm leading-relaxed">{t.collaborate.receipt}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <img
                src="/images/logo-20dar-20margen-202024-20-28trasparente-29.png"
                alt="Dar Margen"
                className="h-15 w-auto brightness-0 invert"
              />
              <div className="space-y-2">
                <p className="font-semibold">{t.footer.name}</p>
                <p className="text-sm opacity-90">{t.footer.address}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">{t.nav.contact}</h3>
              <div className="space-y-3">
                <Link
                  href="mailto:info@darmargen.org.ar"
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                  <Mail className="h-5 w-5" />
                  <span>info@darmargen.org.ar</span>
                </Link>
                <Link href="tel:+5491161724812" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                  <Phone className="h-5 w-5" />
                  <span>+54 9 11 6172-4812</span>
                </Link>
                <Link
                  href="https://www.instagram.com/darmargen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                  <Instagram className="h-5 w-5" />
                  <span>@darmargen</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-75">
            <p>
              © {new Date().getFullYear()} Dar Margen.{" "}
              {language === "es" ? "Todos los derechos reservados." : "All rights reserved."}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
