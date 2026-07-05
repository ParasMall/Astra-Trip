import { Outlet, Link } from 'react-router-dom';

export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
        <div className="container flex h-14 items-center justify-between mx-auto px-4">
          <Link to="/" className="font-bold text-xl tracking-tight">AstraTrip</Link>
          <nav className="flex items-center gap-4 text-sm font-medium">
            <Link to="/plan" className="transition-colors hover:text-slate-600">Plan a Trip</Link>
            <Link to="/dashboard" className="transition-colors hover:text-slate-600">Dashboard</Link>
          </nav>
        </div>
      </header>
      
      <main className="flex-1">
        <Outlet />
      </main>
      
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-14 md:flex-row mx-auto px-4">
          <p className="text-sm text-slate-500 text-center md:text-left">
            Built for Milestone 2.1 — AstraTrip Architecture
          </p>
        </div>
      </footer>
    </div>
  );
}
