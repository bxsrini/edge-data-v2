// Mock data for the ONELIGN IoT sensor monitoring dashboard

export type SensorType = 'Fluid' | 'GPS' | 'Light' | 'Soil' | 'RFID' | 'BLE'
export type SensorStatus = 'online' | 'warning' | 'offline'

export interface SensorReading {
  id: string
  name: string
  type: SensorType
  value: string
  unit: string
  status: SensorStatus
  lastUpdated: string
  sparklineData: number[]
  location: string
}

export interface AlertItem {
  id: string
  severity: 'critical' | 'warning' | 'resolved'
  sensorName: string
  message: string
  timestamp: string
  relativeTime: string
}

export interface TrendDataPoint {
  time: string
  fluid: number
  gps: number
  light: number
  soil: number
  rfid: number
  ble: number
}

// Sensor readings for the mini-card grid
export const sensorReadings: SensorReading[] = [
  {
    id: 'fluid-agg',
    name: 'Fluid',
    type: 'Fluid',
    value: '23.4',
    unit: 'L/min',
    status: 'online',
    lastUpdated: '2 sec ago',
    sparklineData: [18, 20, 22, 21, 23, 22, 24, 23, 22, 23, 24, 23.4],
    location: 'Zone A',
  },
  {
    id: 'gps-agg',
    name: 'GPS',
    type: 'GPS',
    value: '41.567°N',
    unit: '',
    status: 'online',
    lastUpdated: '5 sec ago',
    sparklineData: [41.56, 41.562, 41.563, 41.565, 41.564, 41.566, 41.565, 41.567, 41.566, 41.567, 41.567, 41.567],
    location: 'Fleet',
  },
  {
    id: 'light-agg',
    name: 'Light Intensity',
    type: 'Light',
    value: '850',
    unit: 'lux',
    status: 'warning',
    lastUpdated: '10 sec ago',
    sparklineData: [900, 870, 860, 880, 865, 840, 855, 860, 845, 850, 848, 850],
    location: 'Greenhouse',
  },
  {
    id: 'soil-agg',
    name: 'Soil',
    type: 'Soil',
    value: '67%',
    unit: 'moisture',
    status: 'offline',
    lastUpdated: '1 min ago',
    sparklineData: [72, 70, 69, 68, 68, 67, 67, 66, 67, 67, 67, 67],
    location: 'Field B',
  },
  {
    id: 'rfid-agg',
    name: 'RFID Logger',
    type: 'RFID',
    value: '142',
    unit: 'tags/hr',
    status: 'online',
    lastUpdated: '3 sec ago',
    sparklineData: [130, 135, 138, 140, 139, 141, 143, 142, 144, 142, 141, 142],
    location: 'Warehouse',
  },
  {
    id: 'ble-agg',
    name: 'BLE Logger',
    type: 'BLE',
    value: '38',
    unit: 'devices',
    status: 'online',
    lastUpdated: '8 sec ago',
    sparklineData: [34, 35, 36, 36, 37, 37, 38, 37, 38, 38, 38, 38],
    location: 'Factory',
  },
]

// All sensors table data
export const allSensors: SensorReading[] = [
  {
    id: 'fluid-01',
    name: 'Fluid Sensor #1',
    type: 'Fluid',
    value: '23.4 L/min',
    unit: 'L/min',
    status: 'online',
    lastUpdated: '2 sec ago',
    sparklineData: [18, 20, 22, 21, 23, 22, 24, 23, 22, 23, 24, 23.4],
    location: 'Zone A',
  },
  {
    id: 'fluid-03',
    name: 'Fluid Sensor #3',
    type: 'Fluid',
    value: '18.9 L/min',
    unit: 'L/min',
    status: 'warning',
    lastUpdated: '15 sec ago',
    sparklineData: [22, 21, 20, 19, 19, 18, 19, 18, 19, 18, 19, 18.9],
    location: 'Zone B',
  },
  {
    id: 'gps-12',
    name: 'GPS Module #12',
    type: 'GPS',
    value: '41.567°N',
    unit: '',
    status: 'warning',
    lastUpdated: '34 min ago',
    sparklineData: [41.56, 41.562, 41.563, 41.565, 41.564, 41.566, 41.565, 41.567, 41.566, 41.567, 41.567, 41.567],
    location: 'Fleet',
  },
  {
    id: 'light-02',
    name: 'Light Sensor #2',
    type: 'Light',
    value: '850 lux',
    unit: 'lux',
    status: 'online',
    lastUpdated: '1 min ago',
    sparklineData: [900, 870, 860, 880, 865, 840, 855, 860, 845, 850, 848, 850],
    location: 'Greenhouse',
  },
  {
    id: 'soil-07',
    name: 'Soil Sensor #7',
    type: 'Soil',
    value: '67% moisture',
    unit: '%',
    status: 'offline',
    lastUpdated: '2 min ago',
    sparklineData: [72, 70, 69, 68, 68, 67, 67, 66, 67, 67, 67, 67],
    location: 'Field B',
  },
  {
    id: 'rfid-02',
    name: 'RFID Reader #2',
    type: 'RFID',
    value: '142 tags/hr',
    unit: 'tags/hr',
    status: 'online',
    lastUpdated: '5 sec ago',
    sparklineData: [130, 135, 138, 140, 139, 141, 143, 142, 144, 142, 141, 142],
    location: 'Warehouse',
  },
  {
    id: 'ble-05',
    name: 'BLE Logger #5',
    type: 'BLE',
    value: '38 devices',
    unit: 'devices',
    status: 'online',
    lastUpdated: '8 sec ago',
    sparklineData: [34, 35, 36, 36, 37, 37, 38, 37, 38, 38, 38, 38],
    location: 'Factory',
  },
  {
    id: 'soil-04',
    name: 'Soil Sensor #4',
    type: 'Soil',
    value: '71% moisture',
    unit: '%',
    status: 'online',
    lastUpdated: '30 sec ago',
    sparklineData: [68, 69, 70, 71, 70, 71, 72, 71, 71, 72, 71, 71],
    location: 'Field A',
  },
  {
    id: 'light-05',
    name: 'Light Sensor #5',
    type: 'Light',
    value: '1200 lux',
    unit: 'lux',
    status: 'online',
    lastUpdated: '45 sec ago',
    sparklineData: [1100, 1150, 1180, 1200, 1190, 1210, 1200, 1210, 1205, 1200, 1200, 1200],
    location: 'Outdoor',
  },
  {
    id: 'gps-05',
    name: 'GPS Module #5',
    type: 'GPS',
    value: '40.712°N',
    unit: '',
    status: 'online',
    lastUpdated: '10 sec ago',
    sparklineData: [40.71, 40.711, 40.712, 40.712, 40.712, 40.712, 40.712, 40.712, 40.712, 40.712, 40.712, 40.712],
    location: 'Fleet',
  },
]

// Recent alerts
export const recentAlerts: AlertItem[] = [
  {
    id: 'alert-01',
    severity: 'critical',
    sensorName: 'Soil Sensor #7',
    message: 'Moisture below critical threshold',
    timestamp: '2026-04-08T06:59:00Z',
    relativeTime: '2 min ago',
  },
  {
    id: 'alert-02',
    severity: 'warning',
    sensorName: 'Fluid Sensor #3',
    message: 'Flow rate fluctuation detected',
    timestamp: '2026-04-08T06:46:00Z',
    relativeTime: '15 min ago',
  },
  {
    id: 'alert-03',
    severity: 'warning',
    sensorName: 'GPS Module #12',
    message: 'Weak signal strength',
    timestamp: '2026-04-08T06:27:00Z',
    relativeTime: '34 min ago',
  },
  {
    id: 'alert-04',
    severity: 'resolved',
    sensorName: 'BLE Logger #5',
    message: 'Connection restored',
    timestamp: '2026-04-08T06:01:00Z',
    relativeTime: '1 hr ago',
  },
  {
    id: 'alert-05',
    severity: 'resolved',
    sensorName: 'RFID Reader #2',
    message: 'Firmware updated successfully',
    timestamp: '2026-04-08T05:01:00Z',
    relativeTime: '2 hr ago',
  },
]

// Generate 24-hour trend data
function generateTrendData(): TrendDataPoint[] {
  const data: TrendDataPoint[] = []
  const now = new Date()
  for (let i = 23; i >= 0; i--) {
    const hour = new Date(now.getTime() - i * 60 * 60 * 1000)
    const h = hour.getHours()
    const label = `${h.toString().padStart(2, '0')}:00`
    data.push({
      time: label,
      fluid: Math.round(15 + Math.sin((h / 24) * Math.PI * 2) * 8 + Math.random() * 3),
      gps: Math.round(8 + Math.sin((h / 24) * Math.PI * 2 + 1) * 3 + Math.random() * 2),
      light: Math.round(
        h >= 6 && h <= 18
          ? 400 + Math.sin(((h - 6) / 12) * Math.PI) * 600 + Math.random() * 50
          : 10 + Math.random() * 20
      ),
      soil: Math.round(60 + Math.sin((h / 24) * Math.PI * 2 + 2) * 10 + Math.random() * 5),
      rfid: Math.round(
        h >= 8 && h <= 20
          ? 100 + Math.sin(((h - 8) / 12) * Math.PI) * 60 + Math.random() * 20
          : 20 + Math.random() * 10
      ),
      ble: Math.round(30 + Math.sin((h / 24) * Math.PI * 2 + 3) * 8 + Math.random() * 4),
    })
  }
  return data
}

export const trendData: TrendDataPoint[] = generateTrendData()

// KPI data
export const kpiData = {
  activeSensors: { total: 45, online: 42, offline: 3, trendToday: '+2' },
  activeAlerts: { total: 3, critical: 1, warnings: 2 },
  avgUptime: { percentage: 99.2, period: 'Last 30 days' },
  systemHealth: { status: 'Good', description: 'All services operational' },
}
