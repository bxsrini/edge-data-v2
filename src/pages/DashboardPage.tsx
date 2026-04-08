import { KpiSummaryBar } from '../components/dashboard/KpiSummaryBar'
import { SensorReadingsGrid } from '../components/dashboard/SensorReadingsGrid'
import { AlertFeed } from '../components/dashboard/AlertFeed'
import { TrendChart } from '../components/dashboard/TrendChart'
import { SensorStatusTable } from '../components/dashboard/SensorStatusTable'

export function DashboardPage() {
  return (
    <>
      {/* Zone A — KPI Summary Bar */}
      <KpiSummaryBar />

      {/* Zone B — Split Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3">
          <SensorReadingsGrid />
        </div>
        <div className="lg:col-span-2">
          <AlertFeed />
        </div>
      </div>

      {/* Zone C — Trend Chart */}
      <TrendChart />

      {/* Zone D — Sensor Status Table */}
      <SensorStatusTable />
    </>
  )
}
