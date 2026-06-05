import { PageLayout } from "@/components/layout/PageLayout"
import { motion } from "framer-motion"
import { Shield, Eye, Database, Lock, Globe, Bell } from "lucide-react"

const sections = [
  {
    icon: Eye,
    title: "Information We Collect",
    content: [
      {
        subtitle: "Platform Usage Data",
        text: "Korvixes collects telemetry and operational data generated through your use of the Industrial Simulation Platform. This includes simulation run parameters, system configuration events, API call metadata, and dashboard interaction logs. This data is essential for platform optimization and SLA compliance monitoring."
      },
      {
        subtitle: "Account & Identity Data",
        text: "Enterprise account registration captures organization name, primary contact identifiers, billing entity details, and credential authentication tokens. Individual user profiles within your organization are managed under your enterprise administrator account hierarchy."
      },
      {
        subtitle: "Technical Infrastructure Data",
        text: "We collect IP addresses, device fingerprints, client runtime environments, and network topology information for security monitoring, fraud prevention, and optimizing data routing to our regional edge nodes."
      }
    ]
  },
  {
    icon: Database,
    title: "How We Use Your Data",
    content: [
      {
        subtitle: "Platform Operations",
        text: "Simulation telemetry is processed to ensure real-time accuracy targets of 99.8% are maintained across your industrial workloads. We use aggregate behavioral data to optimize engine scheduling, predictive caching, and sub-millisecond latency routing across our 12 global regions."
      },
      {
        subtitle: "Security & Compliance",
        text: "Access logs and anomaly signals are analyzed continuously by our threat intelligence layer to detect unauthorized access, data exfiltration attempts, and supply chain integrity violations. Data processed for security purposes is retained for 24 months per ISO 27001 requirements."
      },
      {
        subtitle: "Product Improvement",
        text: "Anonymized and aggregated simulation patterns are used to train our AI inference models and improve the accuracy of our Digital Twin engine. Individual client data is never used for cross-client model training without explicit written consent."
      }
    ]
  },
  {
    icon: Lock,
    title: "Data Security & Encryption",
    content: [
      {
        subtitle: "Transport Encryption",
        text: "All data transmitted between your systems and the Korvixes platform is encrypted using TLS 1.3 with forward secrecy. WebSocket streams used for real-time telemetry use AES-256-GCM encryption at the application layer."
      },
      {
        subtitle: "Storage Encryption",
        text: "Simulation datasets, digital twin state snapshots, and customer configuration data are encrypted at rest using AES-256 with hardware security module (HSM) key management. Encryption keys are rotated on a 90-day cycle or upon security event."
      },
      {
        subtitle: "Access Controls",
        text: "Role-based access control (RBAC) with zero-trust architecture governs all internal data access. No Korvixes employee can access client simulation data without a formally approved support ticket, client consent, and dual-authorization from the Security team."
      }
    ]
  },
  {
    icon: Globe,
    title: "Data Residency & Transfers",
    content: [
      {
        subtitle: "Regional Data Processing",
        text: "Korvixes operates processing nodes in 12 regions including EU (Frankfurt, Dublin), US (Virginia, Oregon), APAC (Singapore, Tokyo), and MEA (Bahrain). Enterprise plans allow you to pin data residency to specific regions for regulatory compliance."
      },
      {
        subtitle: "Cross-Border Transfers",
        text: "Where data transfers cross jurisdictions, Korvixes uses Standard Contractual Clauses (SCCs) approved by the European Commission, and equivalent frameworks for other regulatory zones. Data Processing Agreements (DPAs) are available for all enterprise customers."
      }
    ]
  },
  {
    icon: Bell,
    title: "Your Rights & Controls",
    content: [
      {
        subtitle: "Access & Portability",
        text: "Enterprise administrators can request a full export of their organization's data in JSON or PARQUET format through the Platform Console. Individual data access requests are processed within 30 days per GDPR Article 15 and equivalent regulations."
      },
      {
        subtitle: "Deletion & Erasure",
        text: "Account termination triggers a 90-day retention window for data recovery, after which all simulation data, configurations, and personal information are cryptographically wiped from active storage. Backup purge completes within 180 days of the deletion request."
      },
      {
        subtitle: "Consent Management",
        text: "Marketing communications and optional telemetry sharing can be managed through your account settings. Withdrawal of consent for non-essential processing does not affect platform functionality or SLA commitments."
      }
    ]
  }
]

export function PrivacyPolicyPage() {
  return (
    <PageLayout
      title="Privacy Policy"
      subtitle="How Korvixes collects, processes, and protects your data across the Industrial Simulation Platform."
      badge="Legal Document"
    >
      {/* Last updated */}
      <div className="flex items-center gap-3 mb-12 px-4 py-3 border border-border/40 bg-card/30 w-fit">
        <Shield className="w-3.5 h-3.5 text-primary" strokeWidth={1.5} />
        <span className="text-[10px] text-muted-foreground tracking-wider" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          Last updated: <span className="text-foreground/70">June 5, 2026</span>
          <span className="mx-2 text-border">|</span>
          Version: <span className="text-accent/80">v3.2.1</span>
          <span className="mx-2 text-border">|</span>
          Effective: <span className="text-[#00e676]/80">Active</span>
        </span>
      </div>

      {/* Intro */}
      <div className="mb-16 max-w-3xl">
        <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          <span className="text-accent/60 mr-1">&gt;</span>
          This Privacy Policy governs the collection, processing, and storage of information by Korvixes Technologies Ltd. ("Korvixes", "we", "us") in connection with the Korvixes Industrial Simulation Platform and all associated services. By accessing or using our platform, you acknowledge the practices described herein.
        </p>
      </div>

      {/* Sections */}
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
            {/* Section header */}
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

            {/* Subsections */}
            <div className="divide-y divide-border/30">
              {section.content.map((item, iIdx) => (
                <div key={iIdx} className="px-6 py-5 hover:bg-primary/3 transition-colors">
                  <h3 className="text-xs font-semibold text-accent/80 tracking-wider uppercase mb-2" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    <span className="text-primary/40 mr-2">▸</span>{item.subtitle}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Contact */}
      <div className="mt-16 p-6 border border-primary/20 bg-primary/5 cyber-chamfer">
        <h3 className="text-xs font-bold text-primary tracking-widest uppercase mb-3" style={{ fontFamily: 'Orbitron, monospace' }}>
          Data Protection Contact
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          For privacy inquiries, DPA requests, or to exercise your data rights, contact our Data Protection Officer at{" "}
          <span className="text-accent">privacy@korvixes.io</span> or submit a request via the Platform Console under Settings → Privacy & Compliance.
        </p>
      </div>
    </PageLayout>
  )
}
