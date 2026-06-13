import { DashboardLayout } from "@/components/dashboard/DashboardLayout"

const simulations = [
  { id: "SIM-001", name: "Thermal Runaway Analysis", status: "running", progress: 73, model: "Thermal v3.2" },
  { id: "SIM-002", name: "Structural Load Test", status: "completed", progress: 100, model: "Structural v2.8" },
  { id: "SIM-003", name: "Fluid Dynamics — Coolant Circuit", status: "queued", progress: 0, model: "CFD v4.1" },
  { id: "SIM-004", name: "Electrical Grid Stability", status: "running", progress: 42, model: "GridSim v1.6" },
  { id: "SIM-005", name: "Assembly Line Optimization", status: "completed", progress: 100, model: "OptiFlow v3.0" },
]

export function SimulationsPage() {
  return (
    <DashboardLayout title="Simulations" subtitle="Active & Queued Simulation Runs">
      {/* Simulation cards */}
      <div className="grid gap-4">
        {simulations.map((sim) => (
          <div key={sim.id} className="hud-panel p-5 border-primary/20 hover:border-primary/40 transition-all duration-300 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-[10px] font-bold text-muted-foreground tracking-widest" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  {sim.id}
                </span>
                <span className={`text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 border ${
                  sim.status === "running" ? "border-[#3BC4E8]/40 text-[#3BC4E8]" :
                  sim.status === "completed" ? "border-[#00e676]/40 text-[#00e676]" :
                  "border-muted-foreground/40 text-muted-foreground"
                }`} style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  {sim.status}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-foreground/90 truncate" style={{ fontFamily: 'Orbitron, monospace' }}>
                {sim.name}
              </h3>
              <p className="text-[10px] text-muted-foreground mt-0.5" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                Model: {sim.model}
              </p>
            </div>
            <div className="w-full sm:w-48">
              <div className="flex items-center justify-between text-[10px] text-muted-foreground mb-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                <span>Progress</span>
                <span>{sim.progress}%</span>
              </div>
              <div className="w-full h-1.5 bg-primary/10 rounded-full overflow-hidden">
                <div className={`h-full rounded-full transition-all duration-500 ${
                  sim.status === "completed" ? "bg-[#00e676]" :
                  sim.status === "running" ? "bg-[#3BC4E8]" : "bg-muted-foreground/30"
                }`} style={{ width: `${sim.progress}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  )
}
