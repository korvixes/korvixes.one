import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { Hexagon, ArrowLeft } from "lucide-react"

export function ProductPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background text-foreground antialiased flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(42,107,219,0.06) 0%, transparent 70%)'
      }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />

      {/* Return button */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute top-6 left-6"
      >
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 text-[10px] text-muted-foreground hover:text-primary tracking-[0.2em] uppercase transition-colors cursor-pointer"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          <ArrowLeft className="w-3 h-3" />
          Return to Platform
        </button>
      </motion.div>

      {/* Dashboard button — UI placeholder */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="absolute top-6 right-6"
      >
        <button
          className="relative cyber-chamfer-sm border border-primary/40 text-primary text-[10px] font-semibold tracking-widest uppercase px-4 py-2 transition-all duration-200 overflow-hidden group cursor-default"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          <span className="relative z-10">Go to Dashboard</span>
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </motion.div>

      {/* Center card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="hud-panel p-10 md:p-14 relative overflow-hidden max-w-lg w-full text-center"
      >
        <div className="absolute inset-0 bg-circuit opacity-15 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <div className="relative">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-14 h-14 cyber-chamfer bg-primary/10 border border-primary/40 flex items-center justify-center mx-auto mb-6"
          >
            <Hexagon className="w-7 h-7 text-primary" strokeWidth={1} />
          </motion.div>

          {/* Terminal header */}
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full status-dot-yellow animate-blink" />
            <span className="text-[9px] text-muted-foreground tracking-[0.25em] uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              SYSTEM STATUS
            </span>
          </div>

          {/* Message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="text-sm text-foreground/80 leading-relaxed"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            <span className="text-primary/70">&gt;</span>{" "}
            This page is currently under maintenance.
            <span className="inline-block w-2 h-3.5 bg-accent ml-1 animate-blink-cursor align-middle" />
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex items-center justify-center gap-3"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
