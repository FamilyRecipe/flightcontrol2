export default function AuthPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-120px)] p-8">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-xl font-bold text-foreground">Sign In</h1>
          <p className="text-xs text-muted-foreground">
            Enter your credentials to access your account
          </p>
        </div>
        <form className="space-y-3 bg-surface p-3 rounded border border-border">
          <div className="space-y-1">
            <label htmlFor="email" className="text-xs font-medium text-foreground">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-2 py-1 bg-background border border-border rounded text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="password" className="text-xs font-medium text-foreground">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-2 py-1 bg-background border border-border rounded text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </div>
          <button
            type="submit"
            className="w-full px-2.5 py-1 bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity text-xs font-medium"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

