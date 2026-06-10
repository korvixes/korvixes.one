import { useNavigate, useLocation } from "react-router-dom"

const sectionPageMap: Record<string, string> = {
  features: "/features",
  "use-cases": "/solutions",
  product: "/",
  simulation: "/features",
  technology: "/features",
}

export function useNavigateToSection() {
  const navigate = useNavigate()
  const location = useLocation()

  const navigateToSection = (sectionId: string) => {
    const targetPage = sectionPageMap[sectionId] || "/"
    const onTargetPage = location.pathname === targetPage

    if (onTargetPage) {
      const el = document.getElementById(sectionId)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      navigate(targetPage, { state: { scrollTo: sectionId } })
    }
  }

  return navigateToSection
}
