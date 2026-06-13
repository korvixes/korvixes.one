import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { Cookie, X } from "lucide-react"

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent")
    if (consent !== "accepted") {
      const timer = setTimeout(() => setVisible(true), 500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted")
    setVisible(false)
  }

  const handleManage = () => {
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[9999] border-t border-primary/20"
          style={{ background: "#0e0e1a" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <div className="flex items-start gap-3 flex-1 min-w-0">
              <Cookie className="w-5 h-5 text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
              <p className="text-xs text-muted-foreground leading-relaxed" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                We use cookies to improve your experience on korvixes.one. By continuing, you agree to our{" "}
                <Link to="/privacy" className="text-accent hover:underline" onClick={handleManage}>
                  Privacy Policy
                </Link>.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
              <button
                onClick={handleAccept}
                className="flex-1 sm:flex-none px-5 py-2 text-xs font-bold tracking-widest uppercase cyber-chamfer-sm transition-all duration-200 hover:brightness-110"
                style={{ background: "#2A6BDB", color: "#fff", fontFamily: 'JetBrains Mono, monospace' }}
              >
                Accept All
              </button>
              <button
                onClick={handleManage}
                className="flex-1 sm:flex-none px-5 py-2 text-xs font-bold tracking-widest uppercase cyber-chamfer-sm border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-200"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                Manage Preferences
              </button>
              <button
                onClick={handleManage}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close cookie banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
