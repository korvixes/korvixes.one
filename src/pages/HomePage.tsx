import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { ProductOverview } from "@/components/sections/ProductOverview"
import { Features } from "@/components/sections/Features"
import { SimulationPreview } from "@/components/sections/SimulationPreview"
import { UseCases } from "@/components/sections/UseCases"
import { Testimonials } from "@/components/sections/Testimonials"
import { TechStack } from "@/components/sections/TechStack"
import { FAQSection } from "@/components/sections/FAQSection"
import { Pricing } from "@/components/sections/Pricing"
import { CTASection } from "@/components/sections/CTASection"

const sectionMap: Record<string, string> = {
  features: "features",
  solutions: "use-cases",
  testimonials: "testimonials",
  faq: "faq",
}

export function HomePage({ section: initialSection }: { section?: string }) {
  const location = useLocation()
  const hash = location.hash?.replace("#", "")
  const state = location.state as { scrollTo?: string } | null
  const targetSection = hash || initialSection || state?.scrollTo || null
  const resolvedId = targetSection ? (sectionMap[targetSection] || targetSection) : null

  useEffect(() => {
    if (resolvedId) {
      requestAnimationFrame(() => {
        const el = document.getElementById(resolvedId)
        if (el) {
          el.scrollIntoView({ behavior: "smooth" })
        }
      })
    }
  }, [resolvedId])

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <ProductOverview />
        <Features />
        <SimulationPreview />
        <UseCases />
        <Testimonials />
        <TechStack />
        <FAQSection />
        <Pricing />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
