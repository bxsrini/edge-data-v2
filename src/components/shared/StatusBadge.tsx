interface StatusBadgeProps {
  status: 'online' | 'warning' | 'offline'
  showLabel?: boolean
}

const CONFIG = {
  online: { label: 'Online', bg: 'bg-emerald-100', text: 'text-emerald-700', dot: 'bg-emerald-500' },
  warning: { label: 'Warning', bg: 'bg-amber-100', text: 'text-amber-700', dot: 'bg-amber-500' },
  offline: { label: 'Offline', bg: 'bg-red-100', text: 'text-red-700', dot: 'bg-red-500' },
} as const

export function StatusBadge({ status, showLabel = true }: StatusBadgeProps) {
  const cfg = CONFIG[status]
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium ${cfg.bg} ${cfg.text}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot} ${status === 'offline' ? '' : 'pulse-dot'}`} />
      {showLabel && cfg.label}
    </span>
  )
}
