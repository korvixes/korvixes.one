import { PageLayout } from "@/components/layout/PageLayout"
import { motion } from "framer-motion"
import { Cpu, Zap, BarChart, Settings, Shield, ArrowRight, CheckCircle } from "lucide-react"

const capabilities = [
  {
    icon: Cpu,
    title: "Assembly Line Digital Twin",
    text: "Mirror your entire assembly process — from stamping to final inspection — in a live digital twin. Detect bottlenecks, simulate line changes, and validate new product introductions before physical deployment.",
    metrics: ["73% reduction in unplanned downtime", "12x faster line changeover simulation", "Real-time OEE monitoring"]
  },
  {
    icon: Zap,
    title: "Predictive Failure Intelligence",
    text: "Our AI engine analyzes sensor telemetry across thousands of machine parameters simultaneously, predicting component failure up to 14 days in advance with 94% precision.",
    metrics: ["94% failure prediction accuracy", "14-day advance warning window", "Cross-asset correlation analysis"]
  },
  {
    icon: BarChart,
    title: "Production Optimization",
    text: "Run thousands of simulation scenarios per hour to optimize throughput, energy consumption, and material utilization across your plant network. Decisions backed by physics-accurate models.",
    metrics: ["18% average throughput improvement", "Energy cost reduction of 11–23%", "Material waste reduction programs"]
  },
  {
    icon: Settings,
    title: "Quality Control Simulation",
    text: "Simulate manufacturing processes at a parameter level to predict quality deviations before they reach the line. Integrate with CMM and vision inspection systems for closed-loop quality management.",
    metrics: ["PPM reduction up to 60%", "First-pass yield improvement", "ISO process capability modeling"]
  },
  {
    icon: Shield,
    title: "Safety & Compliance Modeling",
    text: "Model safety scenarios digitally — from emergency stops to hazardous material exposure paths. Validate compliance with OSHA, ISO 13849, and EN 62061 standards before physical safety audits.",
    metrics: ["OSHA, ISO 13849, EN 62061", "Safety incident reduction", "Audit-ready compliance exports"]
  },
]

const industries = [
  "Automotive Assembly", "Tier 1 & 2 Automotive Suppliers", "Semiconductor Fabrication",
  "Aerospace & Defense", "Heavy Machinery", "Consumer Electronics",
  "Food & Beverage Processing", "Pharmaceutical Manufacturing", "Industrial Equipment OEMs"
]

export function ManufacturingPage() {
  return (
    <PageLayout
      title="Manufacturing"
      subtitle="Digital twin intelligence for discrete and process manufacturing — from automotive assembly to semiconductor fabs."
      badge="Industry Solution"
    >
      {/* Hero metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 sm:mb-20">
        {[
          { value: "73%", label: "Avg. Downtime Reduction" },
          { value: "18%", label: "Throughput Improvement" },
          { value: "90 days", label: "Time to First ROI" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="hud-panel p-6 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <div className="text-2xl sm:text-3xl font-black gradient-text mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>{stat.value}</div>
            <div className="text-[10px] text-muted-foreground tracking-widest uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Capabilities */}
      <div className="mb-20">
        <h2 className="text-xs font-bold text-muted-foreground tracking-[0.25em] uppercase mb-8" style={{ fontFamily: 'JetBrains Mono, monospace' }}>// Platform Capabilities</h2>
        <div className="space-y-5">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="hud-panel p-0 overflow-hidden hover:border-primary/30 transition-colors group"
            >
              <div className="flex flex-col md:flex-row">
                <div className="p-6 flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 cyber-chamfer-sm bg-primary/10 border border-primary/30 flex items-center justify-center">
                      <cap.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-sm font-bold text-foreground/90 group-hover:text-primary transition-colors" style={{ fontFamily: 'Orbitron, monospace' }}>
                      {cap.title}
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{cap.text}</p>
                </div>
                <div className="md:w-56 p-5 border-t md:border-t-0 md:border-l border-border/30 bg-black/20 flex flex-col justify-center gap-2">
                  {cap.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-[#00e676] shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="text-[10px] text-muted-foreground leading-snug" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Industries served */}
      <div className="mb-16">
        <h2 className="text-xs font-bold text-muted-foreground tracking-[0.25em] uppercase mb-6" style={{ fontFamily: 'JetBrains Mono, monospace' }}>// Manufacturing Verticals</h2>
        <div className="flex flex-wrap gap-2">
          {industries.map((industry, i) => (
            <motion.div
              key={industry}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="px-3 py-1.5 border border-border/40 hover:border-primary/30 hover:bg-primary/5 transition-all text-[10px] text-muted-foreground tracking-wider cursor-default"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              {industry}
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="p-8 border border-primary/20 bg-primary/5 cyber-chamfer flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
        <div>
          <h3 className="text-sm font-black gradient-text mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>See It Running On Your Plant Data</h3>
          <p className="text-xs text-muted-foreground max-w-md" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            Our engineering team will build a proof-of-concept digital twin using your actual plant data in 2 weeks. Zero commitment.
          </p>
        </div>
        <a
          href="mailto:manufacturing@korvixes.io"
          className="shrink-0 inline-flex items-center gap-2 px-6 py-3 cyber-chamfer bg-primary/15 border border-primary/50 hover:border-primary hover:bg-primary/25 text-primary text-xs font-semibold tracking-widest uppercase transition-all"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          Request POC
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </PageLayout>
  )
}
