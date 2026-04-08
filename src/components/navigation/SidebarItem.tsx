import { ChevronRight } from 'lucide-react'
import type { ReactNode } from 'react'

interface SidebarItemProps {
  icon: ReactNode
  label: string
  active?: boolean
  collapsed?: boolean
  hasChildren?: boolean
  childrenOpen?: boolean
  onClick?: () => void
  indent?: boolean
}

export function SidebarItem({
  icon,
  label,
  active = false,
  collapsed = false,
  hasChildren = false,
  childrenOpen = false,
  onClick,
  indent = false,
}: SidebarItemProps) {
  return (
    <button
      onClick={onClick}
      title={collapsed ? label : undefined}
      className={`
        w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150
        ${indent && !collapsed ? 'ml-4 w-[calc(100%-1rem)]' : ''}
        ${active
          ? 'bg-white/[0.15] text-white'
          : 'text-white/70 hover:bg-white/10 hover:text-white'
        }
        ${collapsed ? 'justify-center' : ''}
      `}
    >
      <span className={`flex-shrink-0 ${active ? 'text-white' : 'text-white/70'}`}>
        {icon}
      </span>
      {!collapsed && (
        <>
          <span className="flex-1 text-left truncate">{label}</span>
          {hasChildren && (
            <ChevronRight
              size={14}
              className={`flex-shrink-0 transition-transform duration-200 ${childrenOpen ? 'rotate-90' : ''}`}
            />
          )}
        </>
      )}
    </button>
  )
}
