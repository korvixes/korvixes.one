import { DashboardLayout } from "@/components/dashboard/DashboardLayout"

const alerts = [
  { time: "14:32:18", severity: "critical", source: "Temp Sensor — Line 4", message: "Temperature exceeds threshold (85.2°C > 80°C)" },
  { time: "14:28:04", severity: "warning", source: "Pressure Valve — Unit 7", message: "Pressure fluctuation detected — 3.2 bar variance" },
  { time: "14:15:42", severity: "info", source: "Simulation Engine", message: "SIM-001 completed successfully" },
  { time: "13:58:11", severity: "warning", source: "Network — Node 12", message: "Packet loss 0.3% — within acceptable range" },
  { time: "13:42:07", severity: "info", source: "Data Pipeline", message: "Batch ingestion complete — 14,203 records" },
]

const resources = [
  { name: "CPU", usage: 67, color: "text-[#3BC4E8]" },
  { name: "MEM", usage: 82, color: "text-[#f59e0b]" },
  { name: "NET", usage: 43, color: "text-[#00e676]" },
  { name: "GPU", usage: 91, color: "text-red-400" },
]

export function SystemMonitoringPage() {
  return (
    <DashboardLayout title="System Monitoring" subtitle="Real-Time Infrastructure & Alert Monitoring">
      {/* Resource usage */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {resources.map((r) => (
          <div key={r.name} className="hud-panel p-4 border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {r.name}
              </span>
              <span className={`text-xs font-bold ${r.color}`} style={{ fontFamily: 'Orbitron, monospace' }}>
                {r.usage}%
              </span>
            </div>
            <div className="w-full h-2 bg-primary/10 rounded-full overflow-hidden">
              <div className={`h-full rounded-full transition-all duration-500 ${
                r.usage >= 90 ? "bg-red-500" :
                r.usage >= 75 ? "bg-[#f59e0b]" :
                r.usage >= 50 ? "bg-[#3BC4E8]" : "bg-[#00e676]"
              }`} style={{ width: `${r.usage}%` }} />
            </div>
          </div>
        ))}
      </div>

      {/* Alerts log */}
      <div>
        <h3 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          // Alert Log
        </h3>
        <div className="space-y-2">
          {alerts.map((a, i) => (
            <div key={i} className="hud-panel p-4 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[10px] text-muted-foreground" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{a.time}</span>
                  <span className={`text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 border ${
                    a.severity === "critical" ? "border-red-500/40 text-red-400" :
                    a.severity === "warning" ? "border-[#f59e0b]/40 text-[#f59e0b]" :
                    "border-[#00e676]/40 text-[#00e676]"
                  }`} style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    {a.severity}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-foreground/80 font-medium" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    {a.source}
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-0.5" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    {a.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
