import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

const faqItems = [
  {
    question: "What is Korvixes used for?",
    answer: "Korvixes is an industrial simulation platform that creates real-time digital twins of physical systems — manufacturing lines, energy grids, semiconductor fabs, and more. Engineers use it to monitor operations, predict failures, simulate changes before deployment, and optimize performance across their entire industrial infrastructure.",
  },
  {
    question: "How does digital twin simulation work?",
    answer: "Digital twin simulation works by building a physics-accurate virtual model of your physical system. Korvixes ingests real-time telemetry from sensors, PLCs, SCADA systems, and IoT devices. The simulation engine mirrors the live state of your operations, runs predictive models, and surfaces insights — all with sub-millisecond latency. Changes made in the simulation are reflected instantly, allowing engineers to test scenarios without risk.",
  },
  {
    question: "Is real-time data supported?",
    answer: "Yes. Korvixes is built from the ground up for real-time data ingestion and processing. Our platform handles 500K+ data points per second with sub-millisecond simulation latency. Real-time dashboards update at 60 FPS, and alerts fire within milliseconds of anomaly detection. We support streaming protocols including MQTT, OPC-UA, Modbus TCP, and custom webhook integrations.",
  },
  {
    question: "Can it integrate with enterprise systems?",
    answer: "Absolutely. Korvixes provides native connectors for major industrial and enterprise systems including SAP, Siemens MindSphere, Rockwell FactoryTalk, PTC ThingWorx, Ignition SCADA, and custom REST/SOAP APIs. Our integration layer also supports SQL-based data warehouses, Kafka event streams, and GraphQL endpoints for seamless data exchange across your tech stack.",
  },
  {
    question: "Is this scalable for large industries?",
    answer: "Korvixes is deployed at some of the world's largest industrial operations, including automotive plants with 10,000+ sensors, multi-substation energy grids, and semiconductor fabs running 24/7 production cycles. The platform scales horizontally across 10,240+ nodes, supports multi-plant deployments, and maintains consistent sub-millisecond simulation accuracy regardless of system size.",
  },
]

export function FAQSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section className="relative py-16 md:py-28 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 60% 40% at 50% 40%, rgba(42,107,219,0.04) 0%, transparent 70%)'
      }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-accent/30 bg-accent/5 cyber-chamfer-sm">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent" style={{ fontFamily: 'JetBrains Mono, monospace' }}>// FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5" style={{ fontFamily: 'Orbitron, monospace' }}>
            FREQUENTLY ASKED{" "}
            <span className="text-accent text-glow-cyan">QUESTIONS</span>
          </h2>
          <p className="text-muted-foreground text-xs max-w-2xl mx-auto leading-relaxed tracking-wide"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            Technical answers to common questions about our digital twin simulation platform.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-4xl mx-auto"
        >
          <div className="hud-panel p-4 md:p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-circuit opacity-10 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="relative">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-3 py-2 mb-4 border-b border-border/30 bg-background/50">
                <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
                <div className="w-2 h-2 rounded-full bg-[#28c840]" />
                <span className="ml-2 text-[9px] text-muted-foreground tracking-widest"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}>korvixes.kb — knowledge.base</span>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, i) => (
                  <AccordionItem
                    key={item.question}
                    value={`item-${i}`}
                    className="border-border/30 group/accordion"
                  >
                    <AccordionTrigger
                      className="px-4 py-4 text-xs font-bold tracking-wide uppercase text-muted-foreground hover:text-accent hover:no-underline transition-colors data-[state=open]:text-accent"
                      style={{ fontFamily: 'Orbitron, monospace' }}
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-primary/40 group-accordion-data-[state=open]:text-accent/60 text-[9px] font-mono tracking-widest">
                          {`[${String(i + 1).padStart(2, '0')}]`}
                        </span>
                        {item.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent
                      className="px-4 pb-5 pt-1 text-xs text-muted-foreground/90 leading-relaxed tracking-wide"
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
