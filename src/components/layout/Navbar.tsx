import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { Menu, X, ChevronRight, Hexagon } from "lucide-react"
import { useNavigateToSection } from "@/hooks/useNavigateToSection"

const navLinks = [
  { label: "Platform", sectionId: "product" },
  { label: "Features", sectionId: "features" },
  { label: "Simulation", sectionId: "simulation" },
  { label: "Solutions", sectionId: "use-cases" },
  { label: "Technology", sectionId: "technology" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("")
  const navigate = useNavigate()
  const navigateToSection = useNavigateToSection()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "glass-strong border-b border-primary/20 shadow-[0_4px_40px_rgba(42,107,219,0.12)]"
          : "bg-transparent"
      }`}
    >
      {/* Top accent line */}
      {scrolled && (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
      )}

      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => navigate("/")} className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-9 h-9 cyber-chamfer-sm bg-primary/12 border border-primary/40 flex items-center justify-center group-hover:glow-blue-sm group-hover:bg-primary/20 transition-all duration-300">
            <Hexagon className="w-5 h-5 text-primary group-hover:text-accent transition-colors duration-300" strokeWidth={1.5} />
            {/* Scan line on hover */}
            <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="absolute left-0 right-0 h-px bg-accent/70 animate-scan" />
            </div>
          </div>
          <span className="font-bold text-lg tracking-widest uppercase" style={{ fontFamily: 'Orbitron, monospace' }}>
            <span className="gradient-text">Korvi</span>
            <span className="text-foreground/90">xes</span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => {
                setActiveLink(link.label)
                navigateToSection(link.sectionId)
              }}
              className={`relative px-4 py-2 text-xs font-medium tracking-widest uppercase transition-colors duration-200 group cursor-pointer ${
                activeLink === link.label ? "text-accent" : "text-muted-foreground hover:text-accent"
              }`}
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              <span className="relative z-10">{link.label}</span>
              {/* Underline */}
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-accent transition-all duration-300 ${
                activeLink === link.label ? "w-full" : "w-0 group-hover:w-full"
              }`} />
              {/* Hover bg */}
              <span className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-all duration-200" />
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => navigate("/product")}
            className="relative cyber-chamfer-sm btn-shimmer border border-primary/50 hover:border-primary text-primary hover:glow-blue text-xs font-semibold tracking-widest uppercase px-5 py-2.5 transition-all duration-200 flex items-center gap-2 overflow-hidden cursor-pointer"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            {/* Beam */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent animate-beam" />
            </div>
            <span className="relative z-10">korvixes.one</span>
            <ChevronRight className="w-3 h-3 relative z-10" />
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-accent transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden glass-strong border-t border-primary/20"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    setMobileOpen(false)
                    navigateToSection(link.sectionId)
                  }}
                  className="px-3 py-3 text-xs font-medium tracking-widest uppercase text-muted-foreground hover:text-accent transition-colors terminal-prompt text-left cursor-pointer"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 border-t border-border/40 flex flex-col gap-2 mt-1">
                <button
                  onClick={() => {
                    setMobileOpen(false)
                    navigate("/product")
                  }}
                  className="w-full cyber-chamfer-sm bg-primary/15 border border-primary/50 text-primary text-xs tracking-widest uppercase py-2.5 font-semibold hover:glow-blue transition-all cursor-pointer"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}>korvixes.one</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
