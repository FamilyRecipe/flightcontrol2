import Link from 'next/link'
import { TopNav } from '@/components/layout'
import { ROUTES } from '@/lib/constants'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNav />
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-3xl font-bold text-foreground">
            Welcome to FlightControl
          </h1>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            A modern development environment built for scale
          </p>
          <div className="flex gap-2 justify-center">
            <Link
              href={ROUTES.AUTH}
              className="px-2.5 py-1 bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity text-xs font-medium"
            >
              Get Started
            </Link>
            <Link
              href={ROUTES.DASHBOARD}
              className="px-2.5 py-1 bg-surface border border-border rounded hover:bg-surface-elevated transition-colors text-xs font-medium"
            >
              View Dashboard
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

