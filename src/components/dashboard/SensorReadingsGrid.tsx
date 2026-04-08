import { SensorMiniCard } from './SensorMiniCard'
import { useSensorData } from '../../hooks/useSensorData'
import { useAutoRefresh } from '../../hooks/useAutoRefresh'

export function SensorReadingsGrid() {
  const { miniCards, refresh } = useSensorData()
  useAutoRefresh(refresh, 10000)

  return (
    <div className="bg-white rounded-card shadow-card p-4 flex flex-col gap-4">
      <div>
        <h2 className="text-base font-semibold text-[#1E293B]">Sensor Readings</h2>
        <p className="text-xs text-[#64748B] mt-0.5">Live data from all sensor types</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {miniCards.map(sensor => (
          <SensorMiniCard
            key={sensor.id}
            name={sensor.name}
            type={sensor.type}
            value={sensor.value}
            unit={sensor.unit}
            status={sensor.status}
            sparklineData={sensor.sparklineData}
          />
        ))}
      </div>
    </div>
  )
}
