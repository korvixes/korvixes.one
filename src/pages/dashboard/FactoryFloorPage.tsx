import { DashboardLayout } from "@/components/dashboard/DashboardLayout"

const metrics = [
  { label: "Active Twins", value: "24" },
  { label: "Sensors Online", value: "8,472" },
  { label: "Alerts", value: "3" },
  { label: "Avg Latency", value: "1.2ms" },
]

const lines = [
  { id: "LN-01", status: "active", product: "Chassis Assembly", throughput: "98.2%", temp: "72.4°C" },
  { id: "LN-02", status: "active", product: "Motor Winding", throughput: "94.7%", temp: "68.1°C" },
  { id: "LN-03", status: "warning", product: "PCB Soldering", throughput: "87.3%", temp: "81.5°C" },
  { id: "LN-04", status: "active", product: "Quality Inspection", throughput: "99.1%", temp: "24.8°C" },
  { id: "LN-05", status: "idle", product: "Packaging Unit", throughput: "0%", temp: "22.0°C" },
]

export function FactoryFloorPage() {
  return (
    <DashboardLayout title="Factory Floor" subtitle="Digital Twin — Real-Time Production Overview">
      {/* Metric cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {metrics.map((m) => (
          <div key={m.label} className="hud-panel p-4 border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="text-[10px] text-muted-foreground tracking-widest uppercase mb-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              {m.label}
            </div>
            <div className="text-xl font-black gradient-text" style={{ fontFamily: 'Orbitron, monospace' }}>
              {m.value}
            </div>
          </div>
        ))}
      </div>

      {/* Production lines */}
      <div className="overflow-x-auto">
        <table className="w-full text-xs" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          <thead>
            <tr className="border-b border-primary/15 text-muted-foreground tracking-widest uppercase">
              <th className="text-left py-3 px-4 font-medium">Line</th>
              <th className="text-left py-3 px-4 font-medium">Status</th>
              <th className="text-left py-3 px-4 font-medium">Product</th>
              <th className="text-right py-3 px-4 font-medium">Throughput</th>
              <th className="text-right py-3 px-4 font-medium">Temp</th>
            </tr>
          </thead>
          <tbody>
            {lines.map((line) => (
              <tr key={line.id} className="border-b border-primary/10 hover:bg-accent/5 transition-colors">
                <td className="py-3 px-4 font-semibold text-foreground/80">{line.id}</td>
                <td className="py-3 px-4">
                  <span className={`inline-flex items-center gap-1.5 ${
                    line.status === "active" ? "text-[#00e676]" :
                    line.status === "warning" ? "text-[#f59e0b]" : "text-muted-foreground"
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      line.status === "active" ? "bg-[#00e676] animate-blink" :
                      line.status === "warning" ? "bg-[#f59e0b]" : "bg-muted-foreground"
                    }`} />
                    {line.status.toUpperCase()}
                  </span>
                </td>
                <td className="py-3 px-4 text-muted-foreground">{line.product}</td>
                <td className="py-3 px-4 text-right text-foreground/80">{line.throughput}</td>
                <td className="py-3 px-4 text-right text-foreground/80">{line.temp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  )
}
