import { TrendingUp } from 'lucide-react'
import { KpiCard } from './KpiCard'
import { useSystemHealth } from '../../hooks/useSystemHealth'

// Circular progress SVG
function CircularProgress({ percentage }: { percentage: number }) {
  const r = 20
  const circ = 2 * Math.PI * r
  const offset = circ - (percentage / 100) * circ
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" aria-label={`${percentage}% uptime`}>
      <circle cx="26" cy="26" r={r} fill="none" stroke="#E2E8F0" strokeWidth="4" />
      <circle
        cx="26"
        cy="26"
        r={r}
        fill="none"
        stroke="#0846AA"
        strokeWidth="4"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 26 26)"
      />
    </svg>
  )
}

export function KpiSummaryBar() {
  const { activeSensors, activeAlerts, avgUptime, systemHealth } = useSystemHealth()

  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
      {/* Active Sensors */}
      <KpiCard
        title="Active Sensors"
        value={
          <span className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 pulse-dot inline-block" />
            {activeSensors.online}/{activeSensors.total}
          </span>
        }
        subtitle={
          <span>
            <span className="text-red-500">{activeSensors.offline} offline</span>
          </span>
        }
        visual={
          <span className="flex items-center gap-1 text-emerald-600 text-xs font-semibold bg-emerald-50 px-2 py-1 rounded-full">
            <TrendingUp size={12} />
            {activeSensors.trendToday} today
          </span>
        }
      />

      {/* Active Alerts */}
      <KpiCard
        title="Active Alerts"
        value={
          <span className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 pulse-dot inline-block" />
            {activeAlerts.total}
          </span>
        }
        subtitle={
          <span>
            <span className="text-red-500">{activeAlerts.critical} critical</span>
            {', '}
            <span className="text-amber-500">{activeAlerts.warnings} warnings</span>
          </span>
        }
      />

      {/* Avg Uptime */}
      <KpiCard
        title="Avg Uptime"
        value={`${avgUptime.percentage}%`}
        subtitle={avgUptime.period}
        visual={<CircularProgress percentage={avgUptime.percentage} />}
      />

      {/* System Health */}
      <KpiCard
        title="System Health"
        value={systemHealth.status}
        subtitle={systemHealth.description}
        badge={
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-dot" />
            Operational
          </span>
        }
      />
    </div>
  )
}
