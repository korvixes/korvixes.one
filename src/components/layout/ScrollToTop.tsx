import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"

export function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const prevHash = useRef(hash)

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
    } else if (hash !== prevHash.current) {
      const id = hash.replace("#", "")
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
    }
    prevHash.current = hash
  }, [pathname, hash])

  return null
}
