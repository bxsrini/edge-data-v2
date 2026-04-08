export const tokens = {
  colors: {
    primary: '#0846AA',
    primaryLight: '#3B6FC2',
    primaryDark: '#062F73',
    success: '#10B981',
    warning: '#F59E0B',
    critical: '#EF4444',
    background: '#F1F5F9',
    surface: '#FFFFFF',
    textPrimary: '#1E293B',
    textSecondary: '#64748B',
    border: '#E2E8F0',
    // chart colors
    chart: {
      fluid: '#0846AA',
      gps: '#8B5CF6',
      light: '#F59E0B',
      soil: '#10B981',
      rfid: '#EC4899',
      ble: '#06B6D4',
    },
  },
  spacing: {
    base: 8,
  },
  radius: {
    card: 8,
    btn: 6,
    input: 4,
  },
  shadow: {
    card: '0 1px 3px rgba(0,0,0,0.08)',
  },
} as const
