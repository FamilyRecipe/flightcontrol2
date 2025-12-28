import Link from 'next/link'
import { Plane } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  showText?: boolean
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        'flex items-center gap-2 text-foreground hover:opacity-80 transition-opacity',
        className
      )}
    >
      <Plane className="h-4 w-4 text-accent" />
      {showText && (
        <span className="text-sm font-semibold tracking-tight">FlightControl</span>
      )}
    </Link>
  )
}

