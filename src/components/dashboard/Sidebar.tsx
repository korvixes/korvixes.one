import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Hexagon, LayoutDashboard, Cpu, Brain, Activity, Monitor, Menu, X, ChevronRight } from "lucide-react"
import headerLogo from "@/assets/branding/logo-header.webp"

const navItems = [
  { label: "Factory Floor", to: "/dashboard", icon: LayoutDashboard },
  { label: "Simulations", to: "/dashboard/simulations", icon: Cpu },
  { label: "AI Predictions", to: "/dashboard/ai-predictions", icon: Brain },
  { label: "System Health", to: "/dashboard/system-health", icon: Activity },
  { label: "System Monitoring", to: "/dashboard/system-monitoring", icon: Monitor },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const isActive = (to: string) => location.pathname === to

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-background border border-primary/30 cyber-chamfer-sm text-muted-foreground hover:text-accent transition-colors"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle dashboard menu"
      >
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black/60 z-30"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-40
          flex flex-col border-r border-primary/15 bg-background/95 backdrop-blur-xl
          transition-all duration-300
          ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          ${collapsed ? "w-16" : "w-60"}
        `}
      >
        {/* Logo area */}
        <div className={`flex items-center border-b border-primary/15 px-4 h-16 shrink-0 ${collapsed ? "justify-center" : "gap-3"}`}>
          <Link to="/dashboard" className="flex items-center gap-2 group shrink-0">
            <Hexagon className="w-7 h-7 text-primary" strokeWidth={1.5} />
            {!collapsed && (
              <img
                src={headerLogo}
                alt="Korvixes"
                className="h-12 w-auto object-contain brightness-90 group-hover:brightness-110 transition-all duration-300"
              />
            )}
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-1">
          {navItems.map((item) => {
            const active = isActive(item.to)
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-sm transition-all duration-200 group relative ${
                  collapsed && "justify-center"
                } ${
                  active
                    ? "bg-accent/10 text-accent border-l-2 border-l-accent"
                    : "text-muted-foreground hover:text-accent hover:bg-accent/5 border-l-2 border-l-transparent"
                }`}
                title={collapsed ? item.label : undefined}
              >
                <item.icon className="w-5 h-5 shrink-0" strokeWidth={active ? 2 : 1.5} />
                {!collapsed && (
                  <span className="text-xs font-medium tracking-widest uppercase truncate" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    {item.label}
                  </span>
                )}
              </Link>
            )
          })}
        </nav>

        {/* Collapse toggle (desktop only) */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:flex items-center justify-center h-10 border-t border-primary/15 text-muted-foreground hover:text-accent transition-colors"
        >
          <ChevronRight className={`w-4 h-4 transition-transform ${collapsed ? "" : "rotate-180"}`} />
        </button>

        {/* Bottom status */}
        <div className="border-t border-primary/15 px-4 py-3">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00e676] animate-blink" />
              <span className="text-[9px] text-[#00e676]/80 tracking-wider" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                SYSTEM ONLINE
              </span>
            </div>
          )}
        </div>
      </aside>
    </>
  )
}
