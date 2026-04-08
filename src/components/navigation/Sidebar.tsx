import { useState } from 'react'
import {
  LayoutDashboard,
  Droplets,
  MapPin,
  Sun,
  Sprout,
  Bluetooth,
  Activity,
  FileText,
  Settings,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Wifi,
} from 'lucide-react'
import { SidebarItem } from './SidebarItem'

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
  mobileOpen: boolean
  onMobileClose: () => void
}

export function Sidebar({ collapsed, onToggle, mobileOpen, onMobileClose }: SidebarProps) {
  const [sensorsOpen, setSensorsOpen] = useState(true)

  const content = (
    <div className="flex flex-col h-full">
      {/* Logo area */}
      <div className={`flex items-center h-14 px-4 border-b border-white/10 flex-shrink-0 ${collapsed ? 'justify-center' : 'justify-between'}`}>
        {!collapsed && (
          <span className="text-white font-bold text-lg tracking-tight">ONELIGN</span>
        )}
        <button
          onClick={onToggle}
          className="hidden lg:flex p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Nav items */}
      <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-0.5 scrollbar-hide">
        <SidebarItem
          icon={<LayoutDashboard size={18} />}
          label="Dashboard"
          active
          collapsed={collapsed}
        />

        {/* Sensors group */}
        <SidebarItem
          icon={<Wifi size={18} />}
          label="Sensors"
          collapsed={collapsed}
          hasChildren
          childrenOpen={sensorsOpen}
          onClick={() => setSensorsOpen(o => !o)}
        />

        {!collapsed && sensorsOpen && (
          <div className="ml-2 space-y-0.5 border-l border-white/10 pl-2">
            <SidebarItem icon={<Droplets size={16} />} label="Fluid" collapsed={false} indent />
            <SidebarItem icon={<MapPin size={16} />} label="GPS" collapsed={false} indent />
            <SidebarItem icon={<Sun size={16} />} label="Light Intensity" collapsed={false} indent />
            <SidebarItem icon={<Sprout size={16} />} label="Soil" collapsed={false} indent />
            <SidebarItem icon={<Wifi size={16} />} label="RFID Logger" collapsed={false} indent />
            <SidebarItem icon={<Bluetooth size={16} />} label="BLE Logger" collapsed={false} indent />
          </div>
        )}

        <SidebarItem icon={<Activity size={18} />} label="Real Time" collapsed={collapsed} />
        <SidebarItem icon={<FileText size={18} />} label="Issue Log" collapsed={collapsed} />

        {/* Divider */}
        <div className="my-2 border-t border-white/10" />

        <SidebarItem icon={<Settings size={18} />} label="Settings" collapsed={collapsed} />
        <SidebarItem icon={<ShieldCheck size={18} />} label="Admin Settings" collapsed={collapsed} />
      </nav>

      {/* Collapse toggle at bottom (for collapsed state on desktop) */}
      {collapsed && (
        <div className="flex-shrink-0 px-2 pb-3">
          <button
            onClick={onToggle}
            className="w-full flex items-center justify-center p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Expand sidebar"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  )

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={onMobileClose}
          aria-hidden="true"
        />
      )}

      {/* Desktop sidebar */}
      <aside
        className={`
          hidden lg:flex flex-col flex-shrink-0 transition-all duration-300
          ${collapsed ? 'w-16' : 'w-60'}
        `}
        style={{ backgroundColor: '#0846AA' }}
      >
        {content}
      </aside>

      {/* Mobile drawer */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-60 z-40 flex flex-col lg:hidden
          transition-transform duration-300
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
        style={{ backgroundColor: '#0846AA' }}
      >
        <div className="flex items-center justify-between h-14 px-4 border-b border-white/10">
          <span className="text-white font-bold text-lg">ONELIGN</span>
          <button
            onClick={onMobileClose}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close navigation"
          >
            <ChevronLeft size={18} />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-0.5 scrollbar-hide">
          <SidebarItem icon={<LayoutDashboard size={18} />} label="Dashboard" active collapsed={false} />
          <SidebarItem
            icon={<Wifi size={18} />}
            label="Sensors"
            collapsed={false}
            hasChildren
            childrenOpen={sensorsOpen}
            onClick={() => setSensorsOpen(o => !o)}
          />
          {sensorsOpen && (
            <div className="ml-2 space-y-0.5 border-l border-white/10 pl-2">
              <SidebarItem icon={<Droplets size={16} />} label="Fluid" collapsed={false} indent />
              <SidebarItem icon={<MapPin size={16} />} label="GPS" collapsed={false} indent />
              <SidebarItem icon={<Sun size={16} />} label="Light Intensity" collapsed={false} indent />
              <SidebarItem icon={<Sprout size={16} />} label="Soil" collapsed={false} indent />
              <SidebarItem icon={<Wifi size={16} />} label="RFID Logger" collapsed={false} indent />
              <SidebarItem icon={<Bluetooth size={16} />} label="BLE Logger" collapsed={false} indent />
            </div>
          )}
          <SidebarItem icon={<Activity size={18} />} label="Real Time" collapsed={false} />
          <SidebarItem icon={<FileText size={18} />} label="Issue Log" collapsed={false} />
          <div className="my-2 border-t border-white/10" />
          <SidebarItem icon={<Settings size={18} />} label="Settings" collapsed={false} />
          <SidebarItem icon={<ShieldCheck size={18} />} label="Admin Settings" collapsed={false} />
        </nav>
      </aside>
    </>
  )
}
