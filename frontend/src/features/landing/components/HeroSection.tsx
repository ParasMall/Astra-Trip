import { motion } from 'framer-motion';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      {/* Decorative background gradient */}
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Intelligent Travel, <br className="hidden md:block" />
            <span className="text-primary">Curated for You.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10">
            AstraTrip uses AI to craft perfectly balanced, personalized itineraries in seconds. Enter your destination to begin the journey.
          </p>

          {/* Search Form Mockup */}
          <div className="bg-card p-4 rounded-2xl shadow-xl shadow-primary/5 border mx-auto max-w-4xl flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1 w-full relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                placeholder="Where to?" 
                className="pl-10 h-14 text-lg border-none bg-secondary/50 rounded-xl"
              />
            </div>
            
            <div className="flex w-full md:w-auto gap-4">
              <div className="relative flex-1 md:w-40">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  placeholder="Dates" 
                  className="pl-10 h-14 border-none bg-secondary/50 rounded-xl"
                />
              </div>
              
              <div className="relative flex-1 md:w-32">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  placeholder="2 Guests" 
                  className="pl-10 h-14 border-none bg-secondary/50 rounded-xl"
                />
              </div>
            </div>

            <Button size="lg" className="h-14 px-8 w-full md:w-auto rounded-xl text-lg shadow-md hover:shadow-lg transition-all">
              <Search className="mr-2 h-5 w-5" />
              Generate
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
