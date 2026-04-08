import type { ReactNode } from 'react'

interface KpiCardProps {
  title: string
  value: ReactNode
  subtitle: ReactNode
  visual?: ReactNode
  badge?: ReactNode
}

export function KpiCard({ title, value, subtitle, visual, badge }: KpiCardProps) {
  return (
    <div className="bg-white rounded-card shadow-card p-4 flex flex-col gap-2">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-[#64748B] uppercase tracking-wide truncate">{title}</p>
          <div className="text-3xl font-bold text-[#1E293B] mt-1 leading-none">{value}</div>
          <div className="text-xs text-[#64748B] mt-1.5">{subtitle}</div>
        </div>
        {(visual || badge) && (
          <div className="flex-shrink-0">{visual || badge}</div>
        )}
      </div>
    </div>
  )
}
