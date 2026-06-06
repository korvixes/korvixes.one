import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Link } from "react-router-dom"
import { ChevronRight, Mail, Terminal } from "lucide-react"

const trustItems = [
  "No credit card required",
  "14-day free trial",
  "Enterprise SLA available",
  "ISO 27001 compliant",
]

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="relative py-20 md:py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(42,107,219,0.09) 0%, transparent 70%)'
      }} />
      {/* Side accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
      {/* Edge glow bars */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-40 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-40 bg-gradient-to-b from-transparent via-accent/20 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Terminal indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-primary/30 bg-primary/5 cyber-chamfer-sm">
            <Terminal className="w-3 h-3 text-primary" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              Get Started Today
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6" style={{ fontFamily: 'Orbitron, monospace' }}>
            READY TO EXPLORE{" "}
            <span className="gradient-text text-glow-blue block md:inline">INDUSTRIAL INTELLIGENCE?</span>
          </h2>

          {/* Terminal subtext panel */}
          <div className="max-w-2xl mx-auto mb-10 hud-panel p-4 text-left">
            <p className="text-[11px] leading-relaxed tracking-wide" style={{ fontFamily: 'JetBrains Mono, monospace', color: '#3BC4E8' }}>
              <span className="text-primary/70 mr-2">&gt;</span>
              Join 180+ industrial teams who have already transformed their operations with
              Korvixes digital twin technology.
            </p>
            <p className="text-[11px] leading-relaxed tracking-wide mt-1" style={{ fontFamily: 'JetBrains Mono, monospace', color: '#3BC4E8' }}>
              <span className="text-primary/70 mr-2">&gt;</span>
              Start with a free platform demo.
              <span className="inline-block w-2 h-3.5 bg-accent ml-1 animate-blink-cursor align-middle" />
            </p>
            {/* Scan line */}
            <div className="relative overflow-hidden mt-3 h-px">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-beam" />
            </div>
          </div>

          {/* CTAs */}
          <div               className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/product"
              className="group relative cyber-chamfer btn-shimmer border border-primary/60 hover:border-primary hover:glow-blue text-primary text-sm font-bold tracking-widest uppercase px-6 sm:px-10 py-3 sm:py-4 transition-all duration-200 flex items-center gap-3 overflow-hidden"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              <span className="relative z-10">korvixes.one</span>
              <ChevronRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform" />
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent animate-beam" />
              </div>
            </Link>
            <Link
              to="/contact"
              className="cyber-chamfer border border-border/50 hover:border-accent/50 bg-transparent hover:bg-accent/5 text-muted-foreground hover:text-accent text-sm font-bold tracking-widest uppercase px-6 sm:px-10 py-3 sm:py-4 transition-all duration-200 flex items-center gap-3"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              <Mail className="w-4 h-4" />
              <span>Contact Us</span>
            </Link>
          </div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-14 flex flex-wrap justify-center gap-x-0"
        >
          {trustItems.map((item, i) => (
            <div key={item} className={`flex items-center gap-2 text-[10px] text-muted-foreground px-6 py-1 ${i < trustItems.length - 1 ? 'border-r border-border/30 max-sm:border-r-0' : ''}`}
              style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              <span className="w-1 h-1 rounded-full bg-primary/50" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
