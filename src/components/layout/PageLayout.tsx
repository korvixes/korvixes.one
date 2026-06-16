import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { ArrowLeft } from "lucide-react"

interface PageLayoutProps {
  children: ReactNode
  title: string
  subtitle?: string
  badge?: string
  backHref?: string
}

export function PageLayout({ children, title, subtitle, badge, backHref = "/" }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Navbar />
      <main className="pt-24 pb-0">
        {/* Page hero header */}
        <div className="relative border-b border-primary/15 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse 60% 80% at 50% 0%, rgba(42,107,219,0.08), transparent 70%)'
          }} />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          <div className="relative max-w-7xl mx-auto px-6 py-16">
            {/* Back link */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Link
                to={backHref}
                className="inline-flex items-center gap-2 text-[10px] text-muted-foreground hover:text-primary tracking-[0.2em] uppercase mb-8 transition-colors"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Platform
              </Link>
            </motion.div>

            <div className="flex items-start gap-5">
              <motion.img
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                src="/assets/1.svg"
                alt=""
                className="w-12 h-12 object-contain shrink-0 mt-0.5 opacity-80 hover:opacity-100 transition-opacity duration-500"
              />

              <div className="flex-1 min-w-0">
                {badge && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="inline-flex items-center gap-2 px-3 py-1 border border-primary/25 bg-primary/8 mb-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full status-dot-blue" />
                    <span className="text-[9px] text-primary tracking-[0.25em] uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{badge}</span>
                  </motion.div>
                )}

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-2xl sm:text-3xl md:text-5xl font-black gradient-text mb-3"
                  style={{ fontFamily: 'Orbitron, monospace', letterSpacing: '-0.01em' }}
                >
                  {title}
                </motion.h1>

                {subtitle && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-sm text-muted-foreground max-w-2xl leading-relaxed"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {subtitle}
                  </motion.p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="max-w-7xl mx-auto px-6 py-10 md:py-16"
        >
          {children}
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
