import { PageLayout } from "@/components/layout/PageLayout"
import { motion } from "framer-motion"
import { Hexagon, Cpu, Globe, Users } from "lucide-react"

const values = [
  { iconSrc: "/assets/32.svg", title: "Precision First", text: "Every simulation output must be defensible. We hold ourselves to 99.8% accuracy across all workloads — not as a marketing claim but as an engineering constraint." },
  { iconSrc: "/assets/33.svg", title: "Industrial Scale", text: "We build for the world's most demanding environments: automotive plants, energy grids, semiconductor fabs. Korvixes earns its place in critical infrastructure." },
  { iconSrc: "/assets/34.svg", title: "Relentless Performance", text: "Sub-millisecond latency isn't a feature — it's a prerequisite. Our engineering culture prizes speed and reliability above all else." },
  { iconSrc: "/assets/35.svg", title: "Customer Partnership", text: "We don't sell software. We embed with your engineering teams, understand your processes, and build long-term operational capability." },
]

const leadership = [
  { name: "Dr. Amara Osei", imgSrc: "/assets/Dr. Amara Osei.svg", role: "COO", background: "Former Principal Engineer, Siemens Digital Industries. PhD in Control Systems, MIT." },
  { name: "Mr. James Harrington", imgSrc: "/assets/Mr. James Harrington.svg", role: "CTO", background: "Former Research Scientist, NVIDIA Omniverse. MS in Computational Physics, Stanford." },
  { name: "Dr. Vikram Nair", imgSrc: "/assets/Dr. Vikram Nair.svg", role: "Chief Product Officer", background: "Former VP Product, PTC Inc. 15 years in industrial software product strategy." },
  { name: "Mrs. Sophie Whitfield", imgSrc: "/assets/Mrs. Sophie Whitfield.svg", role: "Chief Security Officer", background: "Former NSA Technical Director. Led critical infrastructure cybersecurity programs for 12 years." },
  { name: "Miss Lauren Mitchell", imgSrc: "/assets/Miss Lauren Mitchell.svg", role: "VP Engineering", background: "Former Engineering Director, Rockwell Automation. Expert in real-time systems and OT/IT convergence." },
  { name: "Mr. Ethan Cole", imgSrc: "/assets/Mr. Ethan Cole.svg", role: "VP Sales & Partnerships", background: "Former Head of Enterprise Sales, ANSYS. Built partner ecosystem across 30+ countries." },
]

export function AboutUsPage() {
  return (
    <PageLayout
      title="About"
      subtitle="We're building the intelligence layer for the world's industrial infrastructure."
      badge="Company"
    >
      {/* Mission */}
      <div className="mb-20">
        <div className="hud-panel p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-circuit opacity-30 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-6">
              <Hexagon className="w-5 h-5 text-primary" strokeWidth={1} />
              <span className="text-[10px] text-primary tracking-[0.3em] uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Mission Statement</span>
            </div>
            <p className="text-xl md:text-2xl font-bold text-foreground/90 leading-relaxed max-w-3xl" style={{ fontFamily: 'Orbitron, monospace', letterSpacing: '0.02em' }}>
              To make industrial systems{" "}
              <span className="gradient-text">predictable, optimizable, and resilient</span>{" "}
              through real-time digital simulation — before failures happen, not after.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        {[
          { value: "180+", label: "Enterprise Clients", icon: Users },
          { value: "40+", label: "Countries", icon: Globe },
          { value: "10,240", label: "Network Nodes", icon: Cpu },
          { value: "2024", label: "Founded", icon: Hexagon },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="hud-panel p-5 text-center hover:border-primary/40 transition-all duration-300 group"
          >
            <stat.icon className="w-5 h-5 text-primary mx-auto mb-3 group-hover:text-glow-blue transition-all duration-300" strokeWidth={1} />
            <div className="text-2xl font-black gradient-text" style={{ fontFamily: 'Orbitron, monospace' }}>{stat.value}</div>
            <div className="text-[10px] text-muted-foreground tracking-widest uppercase mt-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{stat.label}</div>
          </motion.div>
        ))}
      </div>


      {/* Values */}
      <div className="mb-20">
        <h2 className="text-xs font-bold text-muted-foreground tracking-[0.25em] uppercase mb-8" style={{ fontFamily: 'JetBrains Mono, monospace' }}>// Core Values</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="hud-panel p-6 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 cyber-chamfer-sm bg-primary/8 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 group-hover:glow-blue-sm transition-all duration-300">
                  <img src={value.iconSrc} alt="" className="w-10 h-10 object-contain" />
                </div>
                <h3 className="text-xs font-bold text-foreground/90 tracking-wide uppercase" style={{ fontFamily: 'Orbitron, monospace' }}>{value.title}</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{value.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Leadership */}
      <div>
        <h2 className="text-xs font-bold text-muted-foreground tracking-[0.25em] uppercase mb-8" style={{ fontFamily: 'JetBrains Mono, monospace' }}>// Leadership Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {leadership.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="hud-panel p-5 hover:border-primary/40 transition-all duration-300"
            >
              <div className="w-12 h-12 cyber-chamfer-sm bg-primary/8 border border-primary/25 flex items-center justify-center mb-4 overflow-hidden group-hover:border-primary/50 group-hover:bg-primary/20 group-hover:glow-blue-sm transition-all duration-300">
                <img src={person.imgSrc} alt={person.name} className="w-full h-full object-cover" />
              </div>
              <div className="text-sm font-bold text-foreground/90 mb-1" style={{ fontFamily: 'Orbitron, monospace' }}>{person.name}</div>
              <div className="text-[10px] text-accent/80 tracking-widest uppercase mb-3" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{person.role}</div>
              <p className="text-xs text-muted-foreground leading-relaxed" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{person.background}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}
