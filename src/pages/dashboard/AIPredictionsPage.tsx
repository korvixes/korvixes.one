import { DashboardLayout } from "@/components/dashboard/DashboardLayout"

const predictions = [
  { metric: "Equipment Failure — Press #4", probability: 87, timeframe: "48 hours", severity: "high" },
  { metric: "Quality Deviation — Line 3", probability: 62, timeframe: "12 hours", severity: "medium" },
  { metric: "Energy Spike — Peak Load", probability: 94, timeframe: "3 hours", severity: "high" },
  { metric: "Material Shortage — Steel Alloy", probability: 45, timeframe: "5 days", severity: "low" },
  { metric: "Coolant Temp Anomaly — Reactor B", probability: 78, timeframe: "24 hours", severity: "medium" },
]

export function AIPredictionsPage() {
  return (
    <DashboardLayout title="AI Predictions" subtitle="ML-Driven Predictions & Anomaly Detection">
      <div className="grid gap-4">
        {predictions.map((p) => (
          <div key={p.metric} className="hud-panel p-5 border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <span className={`text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 border ${
                    p.severity === "high" ? "border-red-500/40 text-red-400" :
                    p.severity === "medium" ? "border-[#f59e0b]/40 text-[#f59e0b]" :
                    "border-[#00e676]/40 text-[#00e676]"
                  }`} style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    {p.severity}
                  </span>
                  <span className="text-[10px] text-muted-foreground" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    Within {p.timeframe}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-foreground/90" style={{ fontFamily: 'Orbitron, monospace' }}>
                  {p.metric}
                </h3>
              </div>
              <div className="w-full sm:w-48">
                <div className="flex items-center justify-between text-[10px] text-muted-foreground mb-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  <span>Confidence</span>
                  <span>{p.probability}%</span>
                </div>
                <div className="w-full h-2 bg-primary/10 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full transition-all duration-500 ${
                    p.probability >= 80 ? "bg-red-500" :
                    p.probability >= 60 ? "bg-[#f59e0b]" : "bg-[#3BC4E8]"
                  }`} style={{ width: `${p.probability}%` }} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  )
}
