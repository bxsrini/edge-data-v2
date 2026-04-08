import type { AlertItem } from '../../data/mockData'

interface AlertFeedItemProps {
  alert: AlertItem
}

const SEVERITY_STYLE = {
  critical: {
    icon: '🔴',
    border: 'border-l-red-500',
    bg: 'bg-red-50',
    text: 'text-red-700',
    badge: 'bg-red-100 text-red-700',
    label: 'Critical',
  },
  warning: {
    icon: '🟡',
    border: 'border-l-amber-500',
    bg: 'bg-amber-50',
    text: 'text-amber-700',
    badge: 'bg-amber-100 text-amber-700',
    label: 'Warning',
  },
  resolved: {
    icon: '🟢',
    border: 'border-l-emerald-500',
    bg: 'bg-emerald-50',
    text: 'text-emerald-700',
    badge: 'bg-emerald-100 text-emerald-700',
    label: 'Resolved',
  },
} as const

export function AlertFeedItem({ alert }: AlertFeedItemProps) {
  const style = SEVERITY_STYLE[alert.severity]
  return (
    <div className={`flex items-start gap-3 p-3 rounded-lg border-l-4 ${style.border} ${style.bg}`}>
      <span className="text-base leading-none mt-0.5" aria-hidden="true">{style.icon}</span>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-[#1E293B] truncate">{alert.sensorName}</p>
        <p className="text-xs text-[#64748B] truncate">{alert.message}</p>
      </div>
      <div className="flex-shrink-0 text-right">
        <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${style.badge}`}>
          {style.label}
        </span>
        <p className="text-[10px] text-[#64748B] mt-0.5">{alert.relativeTime}</p>
      </div>
    </div>
  )
}
