import { useEffect, useCallback } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { X, Terminal, Wifi } from "lucide-react"

interface SupportInfoModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  icon: string
  sections: { label: string; items: string[] }[]
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const contentVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 16 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.96, y: 16 },
}

export function SupportInfoModal({ open, onOpenChange, title, icon, sections }: SupportInfoModalProps) {
  const close = useCallback(() => onOpenChange(false), [onOpenChange])

  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [open, close])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [open])

  const handleOverlayClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) close()
  }, [close])

  const modal = (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-0 md:p-6"
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            variants={overlayVariants}
            transition={{ duration: 0.2 }}
            onClick={handleOverlayClick}
          />

          <motion.div
            variants={contentVariants}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative z-10 w-full h-full md:h-auto md:max-h-[85vh] md:max-w-lg lg:max-w-xl
              bg-background/95 backdrop-blur-sm
              md:rounded-lg md:border md:border-primary/25
              flex flex-col overflow-hidden
              md:shadow-2xl"
          >
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent z-10" />

            {/* Drag handle for mobile */}
            <div className="md:hidden flex justify-center pt-3 pb-1">
              <div className="h-1.5 w-12 rounded-full bg-border/60" />
            </div>

            {/* Close button */}
            <button
              onClick={close}
              className="absolute top-3 right-3 md:top-4 md:right-4 z-20 w-8 h-8 flex items-center justify-center rounded-sm border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all"
              aria-label="Close"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>

            {/* Header */}
            <div className="px-6 md:px-8 pt-2 md:pt-8 pb-4 border-b border-border/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 cyber-chamfer-sm bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                  <img src={icon} alt="" className="w-5 h-5 object-contain" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-foreground/90" style={{ fontFamily: 'Orbitron, monospace' }}>
                    {title}
                  </h2>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <Wifi className="w-2.5 h-2.5 text-[#00e676]" strokeWidth={2} />
                    <span className="text-[9px] text-[#00e676] tracking-wider" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      INFORMATION
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 pt-5">
              <div className="space-y-6">
                {sections.map((section) => (
                  <div key={section.label}>
                    <div className="flex items-center gap-2 mb-3">
                      <Terminal className="w-3 h-3 text-primary" strokeWidth={1.5} />
                      <span className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                        {section.label}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground/90 leading-relaxed" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                          <span className="text-primary/50 mt-0.5 shrink-0">▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom bar */}
            <div className="px-6 md:px-8 py-3 border-t border-border/30 bg-black/20">
              <div className="flex items-center gap-2 text-[10px] text-muted-foreground/50" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                <Terminal className="w-3 h-3" strokeWidth={1.5} />
                <span>korvixes.support — knowledge base</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return createPortal(modal, document.body)
}
