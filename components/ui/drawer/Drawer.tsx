'use client'

import React from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  side?: 'left' | 'right' | 'top' | 'bottom'
}

const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  ({ className, open, onOpenChange, side = 'left', children, ...props }, ref) => {
    if (!open) return null

    return (
      <>
        <div
          className="fixed inset-0 z-50 bg-black/80"
          onClick={() => onOpenChange?.(false)}
        />
        <div
          ref={ref}
          className={cn(
            'fixed z-50 bg-surface border-border shadow-lg',
            side === 'left' && 'left-0 top-0 h-full w-80 border-r',
            side === 'right' && 'right-0 top-0 h-full w-80 border-l',
            side === 'top' && 'top-0 left-0 w-full h-80 border-b',
            side === 'bottom' && 'bottom-0 left-0 w-full h-80 border-t',
            className
          )}
          {...props}
        >
          {children}
        </div>
      </>
    )
  }
)

Drawer.displayName = 'Drawer'

const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col space-y-2 p-6', className)} {...props} />
)
DrawerHeader.displayName = 'DrawerHeader'

const DrawerTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2 className={cn('text-lg font-semibold', className)} {...props} />
)
DrawerTitle.displayName = 'DrawerTitle'

const DrawerContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('p-6 pt-0', className)} {...props} />
)
DrawerContent.displayName = 'DrawerContent'

const DrawerClose = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn('absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100', className)}
    {...props}
  >
    <X className="h-4 w-4" />
    <span className="sr-only">Close</span>
  </button>
))
DrawerClose.displayName = 'DrawerClose'

export { Drawer, DrawerHeader, DrawerTitle, DrawerContent, DrawerClose }

