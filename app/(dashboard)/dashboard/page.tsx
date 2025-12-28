export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-foreground">Dashboard</h1>
        <p className="text-xs text-muted-foreground mt-1">
          Welcome to your FlightControl dashboard
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div className="bg-surface border border-border rounded p-3">
          <h2 className="text-sm font-semibold text-foreground mb-1">Projects</h2>
          <p className="text-xs text-muted-foreground">Manage your projects</p>
        </div>
        <div className="bg-surface border border-border rounded p-3">
          <h2 className="text-sm font-semibold text-foreground mb-1">Settings</h2>
          <p className="text-xs text-muted-foreground">Configure your preferences</p>
        </div>
        <div className="bg-surface border border-border rounded p-3">
          <h2 className="text-sm font-semibold text-foreground mb-1">Components</h2>
          <p className="text-xs text-muted-foreground">Browse UI components</p>
        </div>
      </div>
    </div>
  )
}

