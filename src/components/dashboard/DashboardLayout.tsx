import type { ReactNode } from "react"
import { Sidebar } from "./Sidebar"

interface DashboardLayoutProps {
  children: ReactNode
  title: string
  subtitle?: string
}

export function DashboardLayout({ children, title, subtitle }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased flex">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <div className="border-b border-primary/15 bg-background/80 backdrop-blur-xl sticky top-0 z-20">
          <div className="px-6 lg:px-8 py-4">
            <h1 className="text-lg font-black tracking-tight" style={{ fontFamily: 'Orbitron, monospace' }}>
              {title}
            </h1>
            {subtitle && (
              <p className="text-xs text-muted-foreground mt-0.5 tracking-wide" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {subtitle}
              </p>
            )}
          </div>
        </div>
        {/* Content */}
        <div className="p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
