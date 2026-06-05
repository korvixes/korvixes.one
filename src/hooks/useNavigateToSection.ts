import { useNavigate, useLocation } from "react-router-dom"

export function useNavigateToSection() {
  const navigate = useNavigate()
  const location = useLocation()

  const navigateToSection = (sectionId: string) => {
    if (location.pathname === "/") {
      const el = document.getElementById(sectionId)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      navigate(`/#${sectionId}`)
    }
  }

  return navigateToSection
}
