import { useState } from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { trendData } from '../../data/mockData'

type FilterKey = 'All' | 'Fluid' | 'GPS' | 'Light' | 'Soil' | 'RFID' | 'BLE'

const SERIES = [
  { key: 'fluid', label: 'Fluid', color: '#0846AA' },
  { key: 'gps', label: 'GPS', color: '#8B5CF6' },
  { key: 'light', label: 'Light', color: '#F59E0B' },
  { key: 'soil', label: 'Soil', color: '#10B981' },
  { key: 'rfid', label: 'RFID', color: '#EC4899' },
  { key: 'ble', label: 'BLE', color: '#06B6D4' },
] as const

const FILTERS: FilterKey[] = ['All', 'Fluid', 'GPS', 'Light', 'Soil', 'RFID', 'BLE']

export function TrendChart() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('All')

  const visibleSeries = activeFilter === 'All'
    ? SERIES
    : SERIES.filter(s => s.label === activeFilter)

  return (
    <div className="bg-white rounded-card shadow-card p-4 flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-semibold text-[#1E293B]">24-Hour Sensor Activity</h2>
          <p className="text-xs text-[#64748B] mt-0.5">Normalized activity per sensor type</p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                activeFilter === f
                  ? 'text-white'
                  : 'bg-[#F1F5F9] text-[#64748B] hover:bg-[#E2E8F0]'
              }`}
              style={activeFilter === f ? { backgroundColor: '#0846AA' } : {}}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="h-56 sm:h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={trendData} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
            <defs>
              {visibleSeries.map(s => (
                <linearGradient key={s.key} id={`grad-${s.key}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={s.color} stopOpacity={0.2} />
                  <stop offset="95%" stopColor={s.color} stopOpacity={0.02} />
                </linearGradient>
              ))}
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
            <XAxis
              dataKey="time"
              tick={{ fontSize: 10, fill: '#64748B' }}
              axisLine={false}
              tickLine={false}
              interval={3}
            />
            <YAxis
              tick={{ fontSize: 10, fill: '#64748B' }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #E2E8F0',
                borderRadius: 8,
                fontSize: 12,
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              }}
            />
            <Legend
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: 11, paddingTop: 8 }}
            />
            {visibleSeries.map(s => (
              <Area
                key={s.key}
                type="monotone"
                dataKey={s.key}
                name={s.label}
                stroke={s.color}
                strokeWidth={2}
                fill={`url(#grad-${s.key})`}
                dot={false}
                activeDot={{ r: 4 }}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
