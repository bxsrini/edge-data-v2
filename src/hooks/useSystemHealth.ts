import { useState } from 'react'
import { kpiData } from '../data/mockData'

export function useSystemHealth() {
  const [health] = useState(kpiData)
  return health
}
