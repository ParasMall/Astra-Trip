import { motion } from 'framer-motion';

interface DestinationCardProps {
  image: string;
  title: string;
  subtitle: string;
  delay?: number;
}

export function DestinationCard({ image, title, subtitle, delay = 0 }: DestinationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group cursor-pointer rounded-2xl overflow-hidden relative aspect-[4/5]"
    >
      <img 
        src={image} 
        alt={title} 
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6">
        <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
        <p className="text-white/80">{subtitle}</p>
      </div>
    </motion.div>
  );
}
