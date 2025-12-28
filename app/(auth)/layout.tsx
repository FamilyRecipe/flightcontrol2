import { Logo } from '@/components/layout'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="p-6">
        <Logo />
      </div>
      {children}
    </div>
  )
}

