import { DashboardLayout } from "@/components/dashboard/DashboardLayout"

const services = [
  { name: "Digital Twin Engine", status: "operational", uptime: "99.98%", latency: "1.2ms" },
  { name: "Simulation Runtime", status: "operational", uptime: "99.95%", latency: "2.4ms" },
  { name: "AI Prediction Service", status: "operational", uptime: "99.99%", latency: "3.1ms" },
  { name: "Data Ingestion Pipeline", status: "degraded", uptime: "98.72%", latency: "8.7ms" },
  { name: "Alerting & Notification", status: "operational", uptime: "100%", latency: "0.8ms" },
  { name: "API Gateway", status: "operational", uptime: "99.97%", latency: "1.5ms" },
]

export function SystemHealthPage() {
  return (
    <DashboardLayout title="System Health" subtitle="Platform Service Status & Performance Metrics">
      <div className="overflow-x-auto">
        <table className="w-full text-xs" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          <thead>
            <tr className="border-b border-primary/15 text-muted-foreground tracking-widest uppercase">
              <th className="text-left py-3 px-4 font-medium">Service</th>
              <th className="text-left py-3 px-4 font-medium">Status</th>
              <th className="text-right py-3 px-4 font-medium">Uptime</th>
              <th className="text-right py-3 px-4 font-medium">Latency</th>
            </tr>
          </thead>
          <tbody>
            {services.map((s) => (
              <tr key={s.name} className="border-b border-primary/10 hover:bg-accent/5 transition-colors">
                <td className="py-3 px-4 font-semibold text-foreground/80">{s.name}</td>
                <td className="py-3 px-4">
                  <span className={`inline-flex items-center gap-1.5 ${
                    s.status === "operational" ? "text-[#00e676]" : "text-[#f59e0b]"
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      s.status === "operational" ? "bg-[#00e676] animate-blink" : "bg-[#f59e0b]"
                    }`} />
                    {s.status === "operational" ? "OPERATIONAL" : "DEGRADED"}
                  </span>
                </td>
                <td className="py-3 px-4 text-right text-foreground/80">{s.uptime}</td>
                <td className="py-3 px-4 text-right text-foreground/80">{s.latency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  )
}
