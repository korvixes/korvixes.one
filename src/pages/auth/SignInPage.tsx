import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Hexagon, ChevronRight, Eye, EyeOff, Terminal } from "lucide-react"
import headerLogo from "@/assets/branding/logo-header.webp"

export function SignInPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="min-h-screen bg-background text-foreground antialiased flex items-center justify-center px-4 py-12">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(42,107,219,0.06), transparent 70%)'
      }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md"
      >
        {/* Header */}
        <div className="hud-panel p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-circuit opacity-10 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          <div className="relative">
            {/* Logo */}
            <div className="flex flex-col items-center mb-8">
              <Link to="/" className="flex items-center gap-2 group mb-3">
                <Hexagon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                <img
                  src={headerLogo}
                  alt="Korvixes"
                  className="h-10 w-auto object-contain brightness-90"
                />
              </Link>
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full status-dot-green animate-blink" />
                <span className="text-[9px] text-muted-foreground tracking-widest uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  System Gateway
                </span>
              </div>
            </div>

            <h1 className="text-xl font-black text-center mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>
              SIGN IN
            </h1>
            <p className="text-xs text-muted-foreground text-center mb-8" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              Enter your credentials to access the platform
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-[10px] text-muted-foreground tracking-widest uppercase mb-1.5 block" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 text-xs bg-background/50 border border-border/50 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/20 transition-all"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  required
                />
              </div>

              <div>
                <label className="text-[10px] text-muted-foreground tracking-widest uppercase mb-1.5 block" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full px-4 py-2.5 text-xs bg-background/50 border border-border/50 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/20 transition-all pr-10"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-3 h-3 accent-primary" />
                  <span className="text-[10px] text-muted-foreground" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    Remember session
                  </span>
                </label>
                <button type="button" className="text-[10px] text-accent hover:underline" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full group relative cyber-chamfer btn-shimmer border border-primary/60 hover:border-primary hover:glow-blue text-primary text-xs font-bold tracking-widest uppercase px-6 py-3 transition-all duration-200 flex items-center justify-center gap-2 overflow-hidden"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                <span className="relative z-10">Authenticate</span>
                <ChevronRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-0.5 transition-transform" />
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent animate-beam" />
                </div>
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-border/30 text-center">
              <p className="text-[10px] text-muted-foreground" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                Don't have an account?{" "}
                <Link to="/signup" className="text-accent hover:underline font-semibold">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* System status footer */}
        <div className="mt-4 flex items-center justify-center gap-2">
          <Terminal className="w-3 h-3 text-primary/40" strokeWidth={1.5} />
          <span className="text-[9px] text-muted-foreground/50" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            KORVIXES SYSTEM GATEWAY v4.2.1
          </span>
        </div>
      </motion.div>
    </div>
  )
}
