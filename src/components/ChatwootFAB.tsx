import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

declare global {
  interface Window {
    chatwootSDK?: {
      run: (config: { websiteToken: string; baseUrl: string }) => void
    }
    $chatwoot?: {
      toggle: (state?: "open" | "toggle" | "close") => void
    }
  }
}

const CHATWOOT_CONFIG = {
  websiteToken: "tkYPgzF363TPvD9zhMY7EDqn",
  baseUrl: "https://app.chatwoot.com",
}

const EXCLUDED_ROUTES = ["/admin"]

const HIDE_LAUNCHER_CSS = `
  [id*="woot-widget-bubble"],
  [class*="woot--bubble"],
  [class*="woot-widget-bubble"] {
    display: none !important;
  }
`

type WidgetState = "closed" | "open" | "loading"

let widgetStateListeners: Array<(state: WidgetState) => void> = []

function notifyWidgetState(state: WidgetState) {
  widgetStateListeners.forEach((fn) => fn(state))
}

function startWidgetObserver() {
  const check = (content: Element) => {
    const style = window.getComputedStyle(content)
    notifyWidgetState(style.display !== "none" ? "open" : "closed")
  }

  const existing = document.querySelector('[class*="woot--content"]')
  if (existing) {
    const observer = new MutationObserver(() => check(existing))
    observer.observe(existing, { attributes: true, attributeFilter: ["style"] })
    check(existing)
    return
  }

  const fallback = new MutationObserver(() => {
    const el = document.querySelector('[class*="woot--content"]')
    if (el) {
      fallback.disconnect()
      const observer = new MutationObserver(() => check(el))
      observer.observe(el, { attributes: true, attributeFilter: ["style"] })
      check(el)
    }
  })
  fallback.observe(document.body, { childList: true, subtree: true })
}

function ChatAvatar() {
  return (
    <svg viewBox="0 0 48 48" width={40} height={40} fill="none">
      <defs>
        <filter id="visorGlow">
          <feGaussianBlur stdDeviation="0.8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Body - dark tech suit */}
      <path d="M14 24c-3 2-5 10-5 18h30c0-8-2-16-5-18" fill="#0B0E16" />
      <path d="M14 24c-3 2-5 10-5 18h30c0-8-2-16-5-18" stroke="#1a2235" strokeWidth="0.5" />

      {/* Collar */}
      <path d="M18 23l-1 3h14l-1-3" fill="#1a2235" stroke="#2A6BDB" strokeWidth="0.4" />

      {/* Chest neon accent */}
      <line x1="24" y1="27" x2="24" y2="37" stroke="#3BC4E8" strokeWidth="0.6" opacity="0.5" />
      <circle cx="24" cy="38.5" r="1.2" fill="#3BC4E8" opacity="0.7" />

      {/* Head */}
      <circle cx="24" cy="14" r="7.5" fill="#B0A090" />

      {/* Hair - slicked back cyber style */}
      <path d="M16.5 14c0-4.5 3.5-7.5 7.5-7.5s7.5 3 7.5 7.5" fill="#1C1C2E" />
      <path d="M17.5 10c2-3 5-4 6.5-4s4.5 1 6.5 4" fill="#1C1C2E" />

      {/* Neon visor */}
      <rect x="18.5" y="12.5" width="11" height="2.5" rx="1.2" fill="#3BC4E8" filter="url(#visorGlow)" />
      <rect x="18.5" y="12.5" width="11" height="2.5" rx="1.2" fill="#3BC4E8" opacity="0.9" />

      {/* Mouth */}
      <path d="M22.5 17.5c0 .4.7.8 1.5.8s1.5-.4 1.5-.8" stroke="#8A7A6A" strokeWidth="0.6" strokeLinecap="round" />

      {/* Left arm - static at side */}
      <g>
        <path d="M14 26c-3 3-5 8-4 12" stroke="#0B0E16" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M14 26c-3 3-5 8-4 12" stroke="#1a2235" strokeWidth="2" strokeLinecap="round" />
        <circle cx="10.5" cy="39" r="1.5" fill="#B0A090" />
      </g>

      {/* Right arm - waving with Framer Motion */}
      <motion.g
        style={{ originX: "32px", originY: "26px" }}
        animate={{ rotate: [0, -20, 25, -20, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 1,
        }}
      >
        <path d="M34 26c3 2 7 5 8 9" stroke="#0B0E16" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M34 26c3 2 7 5 8 9" stroke="#1a2235" strokeWidth="2" strokeLinecap="round" />
        <circle cx="42" cy="36" r="1.5" fill="#B0A090" />

        {/* Sparkle near hand */}
        <motion.path
          d="M44.5 32l1 .5-.5 1 .5 1-1 .5"
          stroke="#3BC4E8"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
          animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.g>
    </svg>
  )
}

export function ChatwootFAB() {
  const location = useLocation()
  const scriptLoaded = useRef(false)
  const [widgetState, setWidgetState] = useState<WidgetState>("loading")
  const [showTooltip, setShowTooltip] = useState(false)

  const isOpen = widgetState === "open"

  // Show tooltip after 2s idle (only when chat is closed)
  useEffect(() => {
    const t = setTimeout(() => setShowTooltip(true), 2000)
    return () => clearTimeout(t)
  }, [])

  // Sync with native Chatwoot close event
  useEffect(() => {
    const handler = () => {
      setWidgetState("closed")
      setShowTooltip(false)
      const t = setTimeout(() => setShowTooltip(true), 2000)
      return () => clearTimeout(t)
    }
    window.addEventListener("chatwoot:close", handler)
    return () => window.removeEventListener("chatwoot:close", handler)
  }, [])

  // Inject CSS override + widget state listener
  useEffect(() => {
    const style = document.createElement("style")
    style.textContent = HIDE_LAUNCHER_CSS
    document.head.appendChild(style)

    const listener = (state: WidgetState) => setWidgetState(state)
    widgetStateListeners.push(listener)

    return () => {
      style.remove()
      widgetStateListeners = widgetStateListeners.filter((fn) => fn !== listener)
    }
  }, [])

  // Load Chatwoot SDK
  useEffect(() => {
    if (scriptLoaded.current || window.chatwootSDK) return
    scriptLoaded.current = true

    const script = document.createElement("script")
    script.src = `${CHATWOOT_CONFIG.baseUrl}/packs/js/sdk.js`
    script.async = true
    script.onload = () => {
      window.chatwootSDK?.run(CHATWOOT_CONFIG)
      startWidgetObserver()
    }

    document.head.appendChild(script)
  }, [])

  // Handle excluded routes
  useEffect(() => {
    if (!window.$chatwoot) return

    const isExcluded = EXCLUDED_ROUTES.some((route) =>
      location.pathname.startsWith(route)
    )

    if (isExcluded) {
      window.$chatwoot.toggle("close")
    }
  }, [location.pathname])

  const handleToggle = () => {
    const next = !isOpen
    setWidgetState(next ? "open" : "closed")
    setShowTooltip(false)
    window.$chatwoot?.toggle(next ? "open" : "close")
  }

  return (
    <div className="fixed bottom-7 right-7 z-[9999] flex flex-col items-end">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.35 }}
            className="whitespace-nowrap pointer-events-none mb-3"
            style={{
              background: "rgba(7,9,15,0.92)",
              color: "#3BC4E8",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11px",
              letterSpacing: "0.08em",
              padding: "6px 14px",
              borderRadius: "0",
              border: "1px solid rgba(59,196,232,0.3)",
              textTransform: "uppercase",
            }}
          >
            Chat with us &gt;&gt;
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button container */}
      <div className="relative">
        {/* Pulse ring (closed state only) */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ backgroundColor: "rgba(59,196,232,0.2)" }}
            animate={{ scale: [1, 1.55], opacity: [0.6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
        )}

        {/* Floating glow - subtle outer ring */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(42,107,219,0.15) 0%, transparent 70%)",
            }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        {/* Main button */}
        <motion.div
          onClick={handleToggle}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.93 }}
          animate={{ backgroundColor: isOpen ? "#0B0E16" : "#07090F" }}
          transition={{ duration: 0.25 }}
          className="relative w-[68px] h-[68px] rounded-full flex items-center justify-center cursor-pointer"
          style={{
            border: `2px solid ${isOpen ? "#3BC4E8" : "#2A6BDB"}`,
            boxShadow: isOpen
              ? "0 0 20px rgba(59,196,232,0.15), 0 8px 24px rgba(59,196,232,0.08)"
              : "0 0 32px rgba(42,107,219,0.12), 0 8px 32px rgba(42,107,219,0.15)",
          }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2, ease: "backOut" }}
                className="flex items-center justify-center"
              >
                <X size={26} strokeWidth={2.5} color="#dce8f5" />
              </motion.div>
            ) : (
              <motion.div
                key="avatar"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                <ChatAvatar />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}
