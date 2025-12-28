import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded border px-1.5 py-0.5 text-[10px] font-semibold transition-colors focus:outline-none focus:ring-1 focus:ring-accent focus:ring-offset-1',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground hover:opacity-80',
        secondary: 'border-transparent bg-secondary text-secondary-foreground hover:opacity-80',
        destructive: 'border-transparent bg-destructive text-destructive-foreground hover:opacity-80',
        outline: 'text-foreground',
        success: 'border-transparent bg-success text-success-foreground hover:opacity-80',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export default Badge

