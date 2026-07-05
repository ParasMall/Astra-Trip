export function TripResult() {
  return (
    <div className="h-[calc(100vh-3.5rem)] grid grid-cols-1 lg:grid-cols-[55%_45%]">
      <div className="overflow-y-auto p-6 md:p-12">
        <h1 className="text-3xl font-bold mb-2">3 Days in Paris</h1>
        <p className="text-slate-500 mb-8">Generated Itinerary Timeline</p>
        
        <div className="space-y-8">
          <div className="border-l-2 border-slate-200 pl-6 pb-2 relative">
            <div className="absolute w-3 h-3 bg-slate-400 rounded-full -left-[7px] top-1"></div>
            <h3 className="font-semibold text-lg">Day 1: Arrival & Exploration</h3>
            <p className="text-sm text-slate-500 mt-2">Check into your hotel and explore the city center.</p>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block bg-slate-100 border-l relative overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/></svg>
          Interactive Map Placeholder
        </div>
      </div>
    </div>
  );
}
