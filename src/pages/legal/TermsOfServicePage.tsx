import { PageLayout } from "@/components/layout/PageLayout"
import { motion } from "framer-motion"
import { FileText, AlertTriangle, CheckCircle, XCircle, Scale, Zap } from "lucide-react"

const sections = [
  {
    icon: CheckCircle,
    title: "License & Permitted Use",
    items: [
      { label: "Platform Access", text: "Korvixes grants you a non-exclusive, non-transferable, revocable license to access and use the Industrial Simulation Platform strictly in accordance with your enterprise subscription tier and these Terms." },
      { label: "Authorized Users", text: "You may provision access for the number of seats specified in your Order Form. Each seat may be assigned to one individual; concurrent session sharing is prohibited and will trigger automated license enforcement." },
      { label: "API Usage", text: "API access is governed by rate limits and quotas defined in your subscription plan. Programmatic access must use official Korvixes SDKs or conform to our published API specification. Reverse engineering the API is prohibited." },
      { label: "Simulation Workloads", text: "The platform may be used for industrial simulation, digital twin modeling, and real-time monitoring purposes within your operational environment. Use for competitive benchmarking or resale of simulation outputs without written authorization is prohibited." }
    ]
  },
  {
    icon: XCircle,
    title: "Prohibited Activities",
    items: [
      { label: "Security Interference", text: "You may not attempt to circumvent, disable, or interfere with any security, authentication, rate limiting, or access control mechanisms of the Korvixes platform." },
      { label: "Data Extraction", text: "Systematic scraping, harvesting, or bulk extraction of platform data, training datasets, model weights, or proprietary algorithm outputs is strictly prohibited." },
      { label: "Competitive Use", text: "Using the platform to develop, train, or improve a competing product or service — including derivative simulation engines — is expressly forbidden." },
      { label: "Misuse of Resources", text: "You may not use platform compute resources for cryptomining, distributed computing unrelated to legitimate simulation workloads, or any activity that degrades service quality for other customers." }
    ]
  },
  {
    icon: Scale,
    title: "Intellectual Property",
    items: [
      { label: "Platform Ownership", text: "Korvixes Technologies Ltd. retains all intellectual property rights in the platform, including but not limited to the simulation engine, AI inference models, API architecture, and interface design. These Terms do not transfer any ownership rights to you." },
      { label: "Your Data & Models", text: "You retain ownership of all simulation data, industrial models, and configurations you create or upload. You grant Korvixes a limited license to process this data solely for providing the contracted services." },
      { label: "Feedback", text: "Any suggestions, feedback, or feature requests you provide to Korvixes may be used without obligation to compensate you. We appreciate your input in improving the platform." }
    ]
  },
  {
    icon: AlertTriangle,
    title: "Liability & Warranties",
    items: [
      { label: "Service Warranty", text: "Korvixes warrants that the platform will perform materially in accordance with its documentation and maintain the SLA uptime commitment of 99.95% for enterprise tiers. This is your sole warranty remedy." },
      { label: "Limitation of Liability", text: "To the maximum extent permitted by law, Korvixes' total aggregate liability for any claims arising under these Terms shall not exceed the fees paid by you in the 12 months preceding the claim." },
      { label: "Consequential Damages", text: "Neither party shall be liable for indirect, incidental, special, consequential, or punitive damages, including loss of production, plant downtime, or industrial process failures, even if advised of the possibility of such damages." },
      { label: "Force Majeure", text: "Korvixes is not liable for delays or failures resulting from events beyond our reasonable control, including infrastructure failures by third-party cloud providers, cyberattacks of exceptional scale, or regulatory actions." }
    ]
  },
  {
    icon: Zap,
    title: "Termination & Suspension",
    items: [
      { label: "Termination by You", text: "You may terminate your subscription at the end of your current billing cycle by providing 30 days written notice through the Platform Console or to your account manager." },
      { label: "Termination by Korvixes", text: "We may suspend or terminate your access immediately upon breach of these Terms, non-payment, or if your use poses a security risk to the platform or other customers. We will provide notice where legally permissible." },
      { label: "Data Upon Termination", text: "Following termination, you have 90 days to export your simulation data. After this period, all data will be permanently deleted per our data retention policy." }
    ]
  }
]

export function TermsOfServicePage() {
  return (
    <PageLayout
      title="Terms of Service"
      subtitle="The legal agreement governing your use of the Korvixes Industrial Simulation Platform."
      badge="Legal Document"
    >
      <div className="flex items-center gap-3 mb-12 px-4 py-3 border border-border/40 bg-card/30 w-fit">
        <FileText className="w-3.5 h-3.5 text-primary" strokeWidth={1.5} />
        <span className="text-[10px] text-muted-foreground tracking-wider" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          Last updated: <span className="text-foreground/70">June 5, 2026</span>
          <span className="mx-2 text-border">|</span>
          Version: <span className="text-accent/80">v5.1.0</span>
          <span className="mx-2 text-border">|</span>
          Jurisdiction: <span className="text-foreground/70">England & Wales</span>
        </span>
      </div>

      <div className="mb-16 max-w-3xl">
        <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          <span className="text-accent/60 mr-1">&gt;</span>
          These Terms of Service ("Terms") constitute a binding legal agreement between you or your organization ("Customer") and Korvixes Technologies Ltd. By activating a Korvixes account or accessing the platform, you agree to be bound by these Terms and our Privacy Policy.
        </p>
      </div>

      <div className="space-y-12">
        {sections.map((section, sIdx) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: sIdx * 0.05 }}
            className="hud-panel p-0 overflow-hidden"
          >
            <div className="flex items-center gap-3 px-6 py-4 border-b border-primary/15 bg-black/40">
              <div className="w-7 h-7 cyber-chamfer-sm bg-primary/10 border border-primary/30 flex items-center justify-center">
                <section.icon className="w-3.5 h-3.5 text-primary" strokeWidth={1.5} />
              </div>
              <h2 className="text-sm font-bold tracking-widest uppercase text-foreground/90" style={{ fontFamily: 'Orbitron, monospace' }}>
                {section.title}
              </h2>
              <div className="ml-auto text-[9px] text-muted-foreground/40 tracking-widest" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                §{sIdx + 1}
              </div>
            </div>
            <div className="divide-y divide-border/30">
              {section.items.map((item, iIdx) => (
                <div key={iIdx} className="px-6 py-5 hover:bg-primary/3 transition-colors">
                  <h3 className="text-xs font-semibold text-accent/80 tracking-wider uppercase mb-2" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    <span className="text-primary/40 mr-2">▸</span>{item.label}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 p-6 border border-primary/20 bg-primary/5 cyber-chamfer">
        <h3 className="text-xs font-bold text-primary tracking-widest uppercase mb-3" style={{ fontFamily: 'Orbitron, monospace' }}>
          Legal Contact
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          For legal inquiries, contract amendments, or enterprise agreement negotiations, contact our Legal team at{" "}
          <span className="text-accent">connect@korvixes.one</span>. Notices to Korvixes must be sent by registered mail to Korvixis AI Inc, 1 Market Plaza, Floor 11, San Francisco, CA 94105, USA.
        </p>
      </div>

      {/* Contact Us */}
      <div className="mt-16 p-6 border border-accent/20 bg-accent/5 cyber-chamfer">
        <h3 className="text-xs font-bold text-accent tracking-widest uppercase mb-3" style={{ fontFamily: 'Orbitron, monospace' }}>
          Contact Us
        </h3>
        <div className="text-xs text-muted-foreground leading-relaxed space-y-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          <p>Korvixis AI Inc</p>
          <p>Founder &amp; CEO: Vikram Anand</p>
          <p>1 Market Plaza, Floor 11</p>
          <p>San Francisco, CA 94105, USA</p>
          <p>Phone: +1 (415) 555-0166</p>
          <p>Email: <span className="text-accent">connect@korvixes.one</span></p>
          <p>Website: <span className="text-accent">https://korvixes.one</span></p>
        </div>
      </div>
    </PageLayout>
  )
}
