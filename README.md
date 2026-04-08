# ONELIGN Edge Data V2

IoT Sensor Monitoring Platform — Landing Dashboard Redesign

## Overview

This repository contains the redesigned Landing Dashboard for the ONELIGN sensor monitoring platform. It replaces the outdated icon-grid launcher with a modern, data-focused dashboard.

**Brand color: `#0846AA`**

## Features

- **KPI Summary Bar** — Active Sensors, Active Alerts, Avg Uptime, System Health
- **Sensor Readings Grid** — Live mini-cards with sparklines for Fluid, GPS, Light, Soil, RFID, BLE
- **Alert Feed** — Real-time alert list with severity indicators
- **24-Hour Trend Chart** — Multi-series area chart (Recharts) with filter chips
- **Sensor Status Table** — Searchable, filterable, sortable table with 10 rows
- **Collapsible Sidebar** — Full navigation with Sensors sub-group
- **Auto-refresh** — Simulates live data updates every 10 seconds
- **Responsive** — Works on mobile, tablet, and desktop

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Tech Stack

| Tool | Version |
|------|---------|
| React | 18 |
| TypeScript | 5 |
| Vite | 5 |
| Tailwind CSS | 3 |
| Recharts | 2 |
| Lucide React | 0.344 |

## Project Structure

```
src/
├── layouts/DashboardLayout.tsx   # Main layout (sidebar + topbar + content)
├── components/
│   ├── navigation/               # Sidebar, SidebarItem, TopBar
│   ├── dashboard/                # All dashboard zone components
│   └── shared/                   # StatusBadge, Sparkline, LoadingSkeleton
├── hooks/                        # useSensorData, useAlerts, useSystemHealth, useAutoRefresh
├── data/mockData.ts              # All mock/sample data
├── pages/DashboardPage.tsx       # Page assembling all zones
├── theme/tokens.ts               # Design tokens
├── App.tsx
├── main.tsx
└── index.css
```
