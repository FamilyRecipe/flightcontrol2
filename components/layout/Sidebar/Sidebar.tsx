'use client'

import { LayoutDashboard, Settings, Package, Menu, X } from 'lucide-react'
import { useSidebar } from '@/hooks'
import { SidebarItem } from './SidebarItem'
import { cn } from '@/lib/utils'
import { ROUTES } from '@/lib/constants'

interface SidebarProps {
  className?: string
}

const menuItems = [
  { href: ROUTES.DASHBOARD, icon: LayoutDashboard, label: 'Dashboard' },
  { href: ROUTES.ADMIN, icon: Package, label: 'Components' },
  { href: '/settings', icon: Settings, label: 'Settings' },
]

export function Sidebar({ className }: SidebarProps) {
  const { isOpen, toggle } = useSidebar()

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={toggle}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-surface border border-border text-foreground hover:bg-surface-elevated transition-colors"
        aria-label="Toggle sidebar"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Sidebar */}
      <aside
      className={cn(
        'fixed lg:sticky top-0 left-0 h-screen w-48 bg-surface border-r border-border z-40 transition-transform duration-300 ease-in-out',
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
        className
      )}
      >
        <div className="flex flex-col h-full p-2">
          <div className="mb-4">
            <h2 className="text-xs font-semibold text-foreground px-2">Navigation</h2>
          </div>
          <nav className="flex-1 space-y-1">
            {menuItems.map((item) => (
              <SidebarItem key={item.href} {...item} />
            ))}
          </nav>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={toggle}
          aria-hidden="true"
        />
      )}
    </>
  )
}

