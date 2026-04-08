import { useState, useCallback } from 'react'
import { sensorReadings, type SensorReading } from '../data/mockData'

export function useSensorData() {
  const [miniCards, setMiniCards] = useState<SensorReading[]>(sensorReadings)
  const [lastRefreshed, setLastRefreshed] = useState<Date>(new Date())

  const refresh = useCallback(() => {
    // Simulate small value changes on refresh
    setMiniCards(prev =>
      prev.map(s => ({
        ...s,
        sparklineData: [
          ...s.sparklineData.slice(1),
          parseFloat((s.sparklineData[s.sparklineData.length - 1] + (Math.random() - 0.5) * 2).toFixed(2)),
        ],
      }))
    )
    setLastRefreshed(new Date())
  }, [])

  return { miniCards, lastRefreshed, refresh }
}
