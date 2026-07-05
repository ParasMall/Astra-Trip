export function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-3xl font-bold mb-8">Your Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder for saved trips */}
        <div className="border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="font-semibold text-xl mb-1">Paris Getaway</h2>
          <p className="text-sm text-slate-500 mb-6">3 Days • Luxury</p>
          <a href="/trip/1" className="text-sm font-medium text-slate-900 hover:underline">View Itinerary &rarr;</a>
        </div>
      </div>
    </div>
  );
}
