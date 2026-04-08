import { Bell, Settings } from 'lucide-react'

interface TopBarProps {
  onMenuToggle: () => void
}

export function TopBar({ onMenuToggle }: TopBarProps) {
  return (
    <header className="h-14 bg-white border-b border-[#E2E8F0] flex items-center justify-between px-4 sm:px-6 flex-shrink-0 z-20">
      {/* Left: logo + mobile menu */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-1.5 rounded-btn text-gray-500 hover:bg-gray-100 transition-colors"
          aria-label="Toggle navigation"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <span className="text-xl font-bold tracking-tight" style={{ color: '#0846AA' }}>
          ONELIGN
        </span>
      </div>

      {/* Right: notifications, user, settings */}
      <div className="flex items-center gap-2">
        {/* Notification bell */}
        <button
          className="relative p-2 rounded-btn text-[#64748B] hover:bg-gray-100 transition-colors"
          aria-label="3 notifications"
        >
          <Bell size={18} />
          <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white font-bold flex items-center justify-center leading-none">
            3
          </span>
        </button>

        {/* User avatar */}
        <div className="flex items-center gap-2 pl-1">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold select-none"
            style={{ backgroundColor: '#0846AA' }}
            aria-label="User: prasanna"
          >
            P
          </div>
          <span className="hidden sm:block text-sm font-medium text-[#1E293B]">prasanna</span>
        </div>

        {/* Settings */}
        <button
          className="p-2 rounded-btn text-[#64748B] hover:bg-gray-100 transition-colors"
          aria-label="Settings"
        >
          <Settings size={18} />
        </button>
      </div>
    </header>
  )
}
