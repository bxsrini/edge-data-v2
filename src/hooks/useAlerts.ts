import { useState } from 'react'
import { recentAlerts, type AlertItem } from '../data/mockData'

export function useAlerts() {
  const [alerts] = useState<AlertItem[]>(recentAlerts)
  const criticalCount = alerts.filter(a => a.severity === 'critical').length
  const warningCount = alerts.filter(a => a.severity === 'warning').length
  return { alerts, criticalCount, warningCount, totalActive: criticalCount + warningCount }
}
