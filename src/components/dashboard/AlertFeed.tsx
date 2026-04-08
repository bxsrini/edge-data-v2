import { AlertFeedItem } from './AlertFeedItem'
import { useAlerts } from '../../hooks/useAlerts'

export function AlertFeed() {
  const { alerts } = useAlerts()

  return (
    <div className="bg-white rounded-card shadow-card p-4 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-[#1E293B]">Recent Alerts</h2>
          <p className="text-xs text-[#64748B] mt-0.5">{alerts.length} alerts total</p>
        </div>
        <button className="text-xs font-medium text-[#0846AA] hover:text-[#062F73] transition-colors">
          View All →
        </button>
      </div>
      <div className="flex flex-col gap-2">
        {alerts.map(alert => (
          <AlertFeedItem key={alert.id} alert={alert} />
        ))}
      </div>
    </div>
  )
}
