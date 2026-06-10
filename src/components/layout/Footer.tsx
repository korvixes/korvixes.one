import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Link } from "react-router-dom"
import { GitBranch, MessageSquare, Share2, Terminal, Hexagon, Activity, Cpu, Globe } from "lucide-react"

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Platform: [
    { label: "Overview", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Simulation Engine", href: "/features" },
    { label: "Integrations", href: "/features" },
    { label: "Changelog", href: "/blog" },
  ],
  Solutions: [
    { label: "Manufacturing", href: "/solutions/manufacturing" },
    { label: "Energy Systems", href: "/solutions" },
    { label: "Smart Factory", href: "/solutions" },
    { label: "Industrial IoT", href: "/features" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Press Kit", href: "/press" },
    { label: "Partners", href: "/partners" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Security", href: "/security" },
    { label: "Compliance", href: "/compliance" },
  ],
}

const systemStats = [
  { label: "UPTIME", value: "99.98%", icon: Activity },
  { label: "NODES", value: "10,240", icon: Cpu },
  { label: "REGIONS", value: "12", icon: Globe },
]

function Logo3D() {
  return (
    <div className="logo-3d-container w-full h-full flex items-center justify-center">
      <div className="logo-3d-inner relative" style={{ width: 160, height: 160 }}>
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border border-primary/20 animate-spin-slow" style={{ animationDuration: '20s' }} />
        {/* Orbit ring */}
        <div className="absolute"
          style={{
            inset: 12,
            border: '1px solid rgba(59,196,232,0.15)',
            borderRadius: '50%',
            animation: 'orbitRing 8s linear infinite',
          }}
        >
          {/* Orbit dot */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full status-dot-blue" />
        </div>

        {/* Middle ring */}
        <div className="absolute"
          style={{
            inset: 28,
            border: '1px solid rgba(42,107,219,0.25)',
            borderRadius: '50%',
            animation: 'orbitRing 12s linear infinite reverse',
          }}
        >
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full status-dot-green" />
        </div>

        {/* Core hexagon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-16 h-16 cyber-chamfer-sm bg-primary/10 border border-primary/40 flex items-center justify-center animate-hex-rotate"
            style={{ animationDuration: '14s' }}>
            <Hexagon className="w-8 h-8 text-primary" strokeWidth={1} />
            {/* Inner glow */}
            <div className="absolute inset-0 bg-primary/5 animate-pulse-glow" />
          </div>
        </div>

        {/* Scan line */}
        <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none opacity-60">
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-scan" />
        </div>

        {/* Corner tick marks */}
        {[0, 90, 180, 270].map((deg) => (
          <div key={deg} className="absolute inset-0 flex items-start justify-center"
            style={{ transform: `rotate(${deg}deg)` }}>
            <div className="w-px h-3 bg-primary/40 mt-1" />
          </div>
        ))}
      </div>
    </div>
  )
}

export function Footer() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <footer className="relative border-t border-primary/15 animate-crt" style={{ background: '#04050A' }} ref={ref}>
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-1px left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[200px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(42,107,219,0.06), transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-0">

        {/* ── MAIN SPLIT LAYOUT ── */}
        <div className="grid lg:grid-cols-5 gap-8 md:gap-12 mb-12">

          {/* LEFT — Brand + Links (3/5) */}
          <div className="lg:col-span-3">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <Link to="/" className="flex items-center gap-3 mb-5 group w-fit">
                <div className="relative w-9 h-9 cyber-chamfer-sm bg-primary/12 border border-primary/40 flex items-center justify-center group-hover:glow-blue-sm transition-all duration-300">
                  <Hexagon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <span className="font-bold text-lg tracking-widest uppercase" style={{ fontFamily: 'Orbitron, monospace' }}>
                  <span className="gradient-text">Korvi</span>
                  <span className="text-foreground/90">xes</span>
                </span>
              </Link>
              <p className="text-xs text-muted-foreground leading-relaxed mb-6 max-w-xs tracking-wide"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                Digital Twin & Industrial Simulation Platform.
                The intelligence layer for modern industrial operations.
              </p>

              {/* Docs link */}
              <div className="flex items-center gap-2 mb-5 px-3 py-2 border border-border/40 bg-background/50 cyber-chamfer-sm w-fit group hover:border-primary/40 transition-all duration-200">
                <Terminal className="w-3 h-3 text-accent" />
                <a href="#" className="text-[10px] text-accent tracking-widest uppercase hover:text-glow-cyan transition-all"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  Developer API
                </a>
              </div>

              <div className="flex items-center gap-2">
                {[GitBranch, MessageSquare, Share2].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-8 h-8 cyber-chamfer-sm border border-border/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:glow-blue-sm transition-all duration-200"
                  >
                    <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Links grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-8"
            >
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h4 className="text-[9px] font-bold tracking-[0.25em] uppercase text-muted-foreground mb-4"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    {`// ${category}`}
                  </h4>
                  <ul className="space-y-2.5">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.href}
                          className="text-xs text-muted-foreground hover:text-primary transition-colors tracking-wide group flex items-center gap-1.5"
                          style={{ fontFamily: 'JetBrains Mono, monospace' }}
                        >
                          <span className="text-border/60 group-hover:text-primary/50 transition-colors text-[8px]">▸</span>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — 3D Visual System Module (2/5) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col"
          >
            {/* Module header */}
            <div className="hud-panel p-0 overflow-hidden animate-footer-glow flex-1 flex flex-col">
              {/* Terminal bar */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-primary/15 bg-black/50">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-2 text-[10px] text-muted-foreground tracking-widest"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}>korvixes.sys — identity.core</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full status-dot-green animate-blink" />
                  <span className="text-[9px] text-[#00e676] tracking-wider" style={{ fontFamily: 'JetBrains Mono, monospace' }}>ACTIVE</span>
                </div>
              </div>

              {/* 3D Logo Stage */}
              <div className="relative flex-1 flex items-center justify-center py-8 px-4" style={{ minHeight: 220 }}>
                {/* Background depth grid */}
                <div className="absolute inset-0 bg-circuit opacity-60" />
                {/* Ambient radial */}
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(42,107,219,0.12), transparent)' }} />

                {/* Horizontal lines — control room feel */}
                {[20, 40, 60, 80].map((pct) => (
                  <div key={pct} className="absolute left-4 right-4 h-px"
                    style={{ top: `${pct}%`, background: `rgba(42,107,219,${0.04 + (pct === 40 || pct === 60 ? 0.04 : 0)})` }} />
                ))}

                <Logo3D />
              </div>

              {/* System stats row */}
              <div className="border-t border-primary/15 grid grid-cols-3">
                {systemStats.map((stat, i) => (
                  <div key={stat.label}
                    className={`flex flex-col items-center gap-1 py-3 px-2 ${i < 2 ? 'border-r border-primary/10' : ''}`}>
                    <stat.icon className="w-3 h-3 text-primary/60" strokeWidth={1.5} />
                    <span className="text-sm font-bold gradient-text" style={{ fontFamily: 'Orbitron, monospace' }}>
                      {stat.value}
                    </span>
                    <span className="text-[8px] text-muted-foreground tracking-widest uppercase"
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}>{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* System identity block */}
              <div className="border-t border-primary/10 px-4 py-3 bg-black/30">
                <div className="text-[9px] text-muted-foreground" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  <span className="text-primary/50">SYS</span>
                  <span className="text-muted-foreground/40 mx-1">::</span>
                  <span className="text-accent/70">KRV-ENGINE</span>
                  <span className="text-muted-foreground/40 mx-1">|</span>
                  <span>v4.2.1</span>
                  <span className="text-muted-foreground/40 mx-1">|</span>
                  <span className="text-[#00e676]/70">CERTIFIED ISO 9001</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── BOTTOM SYSTEM BAR ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-primary/10 py-5 footer-system-line"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <p className="text-[10px] text-muted-foreground tracking-wider" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                <span className="text-primary/40">$</span> &copy; {new Date().getFullYear()} Korvixes Technologies. All rights reserved.
              </p>
              <span className="hidden sm:block text-border/40 text-xs">|</span>
              <span className="hidden sm:block text-[10px] text-muted-foreground/50 tracking-wider" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                INDUSTRIAL SIMULATION PLATFORM
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 border border-[#00e676]/20 bg-[#00e676]/5">
                <span className="w-1.5 h-1.5 rounded-full status-dot-green animate-blink" />
                <span className="text-[10px] text-[#00e676]/80 tracking-wider" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  All systems operational
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-muted-foreground/40 tracking-wider" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  LATENCY
                </span>
                <span className="text-[10px] text-accent/70 font-bold" style={{ fontFamily: 'Orbitron, monospace' }}>
                  2.4ms
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
