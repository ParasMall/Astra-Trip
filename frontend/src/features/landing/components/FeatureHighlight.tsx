import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FeatureHighlightProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureHighlight({ icon, title, description, delay = 0 }: FeatureHighlightProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center text-center p-6 bg-card rounded-2xl border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
