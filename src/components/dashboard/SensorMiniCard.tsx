import { Droplets, MapPin, Sun, Sprout, Wifi, Bluetooth } from 'lucide-react'
import type { SensorType } from '../../data/mockData'

const ICON_MAP: Record<SensorType, React.ReactNode> = {
  Fluid: <Droplets size={16} />,
  GPS: <MapPin size={16} />,
  Light: <Sun size={16} />,
  Soil: <Sprout size={16} />,
  RFID: <Wifi size={16} />,
  BLE: <Bluetooth size={16} />,
}

const STATUS_DOT: Record<string, string> = {
  online: 'bg-emerald-500',
  warning: 'bg-amber-500',
  offline: 'bg-red-500',
}

interface SensorMiniCardProps {
  name: string
  type: SensorType
  value: string
  unit: string
  status: 'online' | 'warning' | 'offline'
  sparklineData: number[]
}

export function SensorMiniCard({ name, type, value, unit, status, sparklineData }: SensorMiniCardProps) {
  const min = Math.min(...sparklineData)
  const max = Math.max(...sparklineData)
  const range = max - min || 1
  const w = 60
  const h = 24

  const points = sparklineData
    .map((v, i) => {
      const x = (i / (sparklineData.length - 1)) * w
      const y = h - ((v - min) / range) * (h - 4) - 2
      return `${x},${y}`
    })
    .join(' ')

  return (
    <div className="bg-white rounded-card shadow-card p-3 flex flex-col gap-2 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[#0846AA]">{ICON_MAP[type]}</span>
          <span className="text-xs font-semibold text-[#1E293B] truncate">{name}</span>
        </div>
        <span className={`w-2 h-2 rounded-full flex-shrink-0 ${STATUS_DOT[status]} ${status !== 'offline' ? 'pulse-dot' : ''}`} />
      </div>
      <div className="flex items-end justify-between gap-2">
        <div>
          <span className="text-base font-bold text-[#1E293B]">{value}</span>
          {unit && <span className="text-xs text-[#64748B] ml-1">{unit}</span>}
        </div>
        <svg width={w} height={h} aria-hidden="true" className="flex-shrink-0">
          <polyline
            points={points}
            fill="none"
            stroke="#0846AA"
            strokeWidth={1.5}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  )
}
