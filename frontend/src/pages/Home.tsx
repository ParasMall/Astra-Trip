export function Home() {
  return (
    <div className="container mx-auto px-4 py-24 flex flex-col items-center text-center">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
        AI-Powered Intelligent Travel Planner
      </h1>
      <p className="text-xl text-slate-500 max-w-[600px] mb-8">
        Generate highly personalized travel itineraries based on your exact destination, budget, and unique preferences.
      </p>
      <a href="/plan" className="bg-slate-900 text-white px-8 py-3 rounded-md font-medium hover:bg-slate-800 transition-colors">
        Start Planning Now
      </a>
    </div>
  );
}
