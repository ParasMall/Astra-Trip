import { HeroSection } from '@/features/landing/components/HeroSection';
import { DestinationCard } from '@/features/landing/components/DestinationCard';
import { FeatureHighlight } from '@/features/landing/components/FeatureHighlight';
import { Map, Clock, Sparkles } from 'lucide-react';

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Features Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Travel Planning, Reinvented</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Stop spending hours researching and cross-referencing tabs. Our AI agents do the heavy lifting.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureHighlight 
              icon={<Sparkles className="h-6 w-6" />}
              title="AI-Curated Itineraries"
              description="Get day-by-day plans tailored to your budget, travel style, and dietary preferences."
              delay={0}
            />
            <FeatureHighlight 
              icon={<Map className="h-6 w-6" />}
              title="Geographically Optimized"
              description="Activities are clustered logically so you spend more time exploring and less time commuting."
              delay={0.1}
            />
            <FeatureHighlight 
              icon={<Clock className="h-6 w-6" />}
              title="Instant Generation"
              description="What used to take weeks of planning now takes seconds. Save your time for the actual trip."
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Trending Escapes</h2>
              <p className="text-muted-foreground">Discover where AstraTrip users are heading this season.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <DestinationCard 
              title="Kyoto" subtitle="Japan" delay={0}
              image="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop" 
            />
            <DestinationCard 
              title="Amalfi Coast" subtitle="Italy" delay={0.1}
              image="https://images.unsplash.com/photo-1533682805518-48d1f5e82119?q=80&w=800&auto=format&fit=crop" 
            />
            <DestinationCard 
              title="Banff" subtitle="Canada" delay={0.2}
              image="https://images.unsplash.com/photo-1603774846059-4d6b637fca29?q=80&w=800&auto=format&fit=crop" 
            />
            <DestinationCard 
              title="Bali" subtitle="Indonesia" delay={0.3}
              image="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop" 
            />
          </div>
        </div>
      </section>
    </div>
  );
}
