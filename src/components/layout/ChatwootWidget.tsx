import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"

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

function ChatIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M8 9h8" />
      <path d="M8 13h6" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

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

export function ChatwootWidget() {
  const location = useLocation()
  const scriptLoaded = useRef(false)
  const [widgetState, setWidgetState] = useState<WidgetState>("loading")

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

  useEffect(() => {
    if (!window.$chatwoot) return

    const isExcluded = EXCLUDED_ROUTES.some((route) =>
      location.pathname.startsWith(route)
    )

    if (isExcluded) {
      window.$chatwoot.toggle("close")
    }
  }, [location.pathname])

  const isOpen = widgetState === "open"
  const [chatRect, setChatRect] = useState<DOMRect | null>(null)

  useEffect(() => {
    if (widgetState !== "open") {
      setChatRect(null)
      return
    }

    const findWidget = () =>
      document.querySelector(`iframe[src*="${CHATWOOT_CONFIG.baseUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}"]`) ||
      document.querySelector('[class*="woot-widget"]') ||
      document.querySelector('[class*="woot--content"]')

    const updateRect = () => {
      const el = findWidget()
      if (el) setChatRect(el.getBoundingClientRect())
    }

    updateRect()
    window.addEventListener("resize", updateRect)
    return () => window.removeEventListener("resize", updateRect)
  }, [widgetState])

  const handleToggle = () => {
    window.$chatwoot?.toggle("toggle")
  }

  return (
    <>
      {isOpen && chatRect && (
        <button
          onClick={() => window.$chatwoot?.toggle("close")}
          aria-label="Close chat"
          className="fixed z-[9999999] p-1 rounded-sm transition-colors duration-200 cursor-pointer"
          style={{
            top: `${chatRect.top + 6}px`,
            left: `${chatRect.right - 32}px`,
            color: "rgba(220,232,245,0.5)",
            background: "transparent",
            border: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#dce8f5"
            e.currentTarget.style.background = "rgba(59,196,232,0.08)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "rgba(220,232,245,0.5)"
            e.currentTarget.style.background = "transparent"
          }}
        >
          <CloseIcon />
        </button>
      )}
      <button
        onClick={handleToggle}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-50 group cursor-pointer"
    >
      <div className="relative w-14 h-14 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 cyber-chamfer-sm border border-accent/40 group-hover:border-accent/70 transition-all duration-300" />
        <div className="absolute inset-0 cyber-chamfer-sm bg-gradient-to-br from-accent/15 via-accent/5 to-transparent group-hover:from-accent/25 transition-all duration-500" />
        <div
          className="absolute inset-0 cyber-chamfer-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ boxShadow: "inset 0 0 20px rgba(59,196,232,0.12), 0 0 16px rgba(59,196,232,0.1)" }}
        />
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent animate-beam" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-beam" style={{ animationDelay: "0.8s" }} />
        </div>
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent/30 group-hover:border-accent/60 transition-colors duration-300" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-accent/30 group-hover:border-accent/60 transition-colors duration-300" />
        <span className={`relative text-accent transition-colors duration-300 ${isOpen ? "" : "animate-pulse-glow"}`}>
          {isOpen ? <CloseIcon /> : <ChatIcon />}
        </span>
      </div>
    </button>
    </>
  )
}
