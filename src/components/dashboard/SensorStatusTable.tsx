import { useState, useMemo } from 'react'
import { Search, ChevronUp, ChevronDown, Filter } from 'lucide-react'
import { Droplets, MapPin, Sun, Sprout, Wifi, Bluetooth } from 'lucide-react'
import { StatusBadge } from '../shared/StatusBadge'
import { allSensors, type SensorReading, type SensorType } from '../../data/mockData'

const TYPE_ICON: Record<SensorType, React.ReactNode> = {
  Fluid: <Droplets size={14} />,
  GPS: <MapPin size={14} />,
  Light: <Sun size={14} />,
  Soil: <Sprout size={14} />,
  RFID: <Wifi size={14} />,
  BLE: <Bluetooth size={14} />,
}

type SortKey = keyof Pick<SensorReading, 'name' | 'type' | 'status' | 'lastUpdated'>
type SortDir = 'asc' | 'desc'

export function SensorStatusTable() {
  const [search, setSearch] = useState('')
  const [filterType, setFilterType] = useState<SensorType | 'All'>('All')
  const [sortKey, setSortKey] = useState<SortKey>('name')
  const [sortDir, setSortDir] = useState<SortDir>('asc')

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(key)
      setSortDir('asc')
    }
  }

  const filtered = useMemo(() => {
    return allSensors
      .filter(s => {
        const matchSearch = s.name.toLowerCase().includes(search.toLowerCase())
        const matchType = filterType === 'All' || s.type === filterType
        return matchSearch && matchType
      })
      .sort((a, b) => {
        const av = a[sortKey] as string
        const bv = b[sortKey] as string
        const cmp = av.localeCompare(bv)
        return sortDir === 'asc' ? cmp : -cmp
      })
  }, [search, filterType, sortKey, sortDir])

  const SortIcon = ({ col }: { col: SortKey }) => {
    if (sortKey !== col) return <ChevronUp size={12} className="text-gray-300" />
    return sortDir === 'asc'
      ? <ChevronUp size={12} className="text-[#0846AA]" />
      : <ChevronDown size={12} className="text-[#0846AA]" />
  }

  const th = (label: string, key: SortKey) => (
    <th
      className="text-left px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide cursor-pointer select-none hover:text-[#1E293B] transition-colors"
      onClick={() => handleSort(key)}
    >
      <span className="flex items-center gap-1">
        {label}
        <SortIcon col={key} />
      </span>
    </th>
  )

  return (
    <div className="bg-white rounded-card shadow-card flex flex-col gap-0">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 border-b border-[#E2E8F0]">
        <div>
          <h2 className="text-base font-semibold text-[#1E293B]">All Sensors</h2>
          <p className="text-xs text-[#64748B] mt-0.5">{filtered.length} of {allSensors.length} sensors</p>
        </div>
        <div className="flex items-center gap-2">
          {/* Search */}
          <div className="relative">
            <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#64748B]" />
            <input
              type="text"
              placeholder="Search sensors…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-8 pr-3 py-1.5 text-sm rounded-input border border-[#E2E8F0] bg-[#F1F5F9] text-[#1E293B] placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#0846AA]/30 focus:border-[#0846AA] transition w-44"
            />
          </div>
          {/* Filter dropdown */}
          <div className="relative">
            <Filter size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#64748B]" />
            <select
              value={filterType}
              onChange={e => setFilterType(e.target.value as SensorType | 'All')}
              className="pl-8 pr-6 py-1.5 text-sm rounded-input border border-[#E2E8F0] bg-[#F1F5F9] text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#0846AA]/30 focus:border-[#0846AA] transition appearance-none cursor-pointer"
            >
              <option value="All">All Types</option>
              <option value="Fluid">Fluid</option>
              <option value="GPS">GPS</option>
              <option value="Light">Light</option>
              <option value="Soil">Soil</option>
              <option value="RFID">RFID</option>
              <option value="BLE">BLE</option>
            </select>
          </div>
        </div>
      </div>

      {/* Desktop table */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
            <tr>
              {th('Sensor Name', 'name')}
              {th('Type', 'type')}
              <th className="text-left px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide">
                Latest Reading
              </th>
              {th('Status', 'status')}
              {th('Last Updated', 'lastUpdated')}
            </tr>
          </thead>
          <tbody>
            {filtered.map((sensor, idx) => (
              <tr
                key={sensor.id}
                className={`border-b border-[#E2E8F0] hover:bg-[#F8FAFC] transition-colors ${
                  idx % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'
                }`}
              >
                <td className="px-4 py-3 font-medium text-[#1E293B]">{sensor.name}</td>
                <td className="px-4 py-3">
                  <span className="flex items-center gap-1.5 text-[#0846AA] font-medium">
                    {TYPE_ICON[sensor.type]}
                    <span className="text-[#64748B]">{sensor.type}</span>
                  </span>
                </td>
                <td className="px-4 py-3 text-[#64748B] font-mono text-xs">{sensor.value}</td>
                <td className="px-4 py-3">
                  <StatusBadge status={sensor.status} />
                </td>
                <td className="px-4 py-3 text-[#64748B] text-xs">{sensor.lastUpdated}</td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-[#64748B] text-sm">
                  No sensors match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile card list */}
      <div className="sm:hidden divide-y divide-[#E2E8F0]">
        {filtered.map(sensor => (
          <div key={sensor.id} className="p-4 flex items-start gap-3">
            <span className="mt-0.5 text-[#0846AA]">{TYPE_ICON[sensor.type]}</span>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-[#1E293B] text-sm">{sensor.name}</p>
              <p className="text-xs text-[#64748B] mt-0.5">{sensor.value}</p>
              <p className="text-xs text-[#64748B]">{sensor.lastUpdated}</p>
            </div>
            <StatusBadge status={sensor.status} />
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="p-4 text-center text-sm text-[#64748B]">No sensors match your search.</p>
        )}
      </div>
    </div>
  )
}
