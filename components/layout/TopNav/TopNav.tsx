'use client'

import Link from 'next/link'
import { Logo } from '../Logo'
import { cn } from '@/lib/utils'
import { ROUTES } from '@/lib/constants'

interface TopNavProps {
  className?: string
}

export function TopNav({ className }: TopNavProps) {
  return (
    <nav
      className={cn(
        'flex items-center justify-between px-3 py-2 border-b border-border bg-surface',
        className
      )}
    >
      <Logo />
      <Link
        href={ROUTES.AUTH}
        className="px-2.5 py-1 bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity text-xs font-medium"
      >
        Get Started
      </Link>
    </nav>
  )
}

