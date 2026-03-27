import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';

const specs = [
  {
    id: 'outsole',
    title: 'Vibram Outsole',
    description: 'High-traction rubber compound engineered for urban terrain and durability.',
    x: '70%',
    y: '85%'
  },
  {
    id: 'leather',
    title: 'Italian Calfskin',
    description: 'Hand-selected full-grain leather that ages uniquely with every step.',
    x: '40%',
    y: '40%'
  },
  {
    id: 'stabilizer',
    title: 'Integrated Stabilizer',
    description: 'Internal TPU frame providing structural integrity without compromising flexibility.',
    x: '20%',
    y: '60%'
  }
];

export const TechSpecSlider: React.FC = () => {
  const [activeSpec, setActiveSpec] = useState<typeof specs[0] | null>(null);

  return (
    <section className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl mb-4">Anatomy of the Dark</h2>
          <p className="text-white/40 uppercase tracking-widest text-xs">Technical Specifications // Engineering</p>
        </div>

        <div className="relative aspect-[16/9] bg-card rounded-2xl overflow-hidden border border-white/5 flex items-center justify-center">
          <img 
            src="https://picsum.photos/seed/sneaker-tech/1600/900" 
            alt="Sneaker Anatomy" 
            className="w-full h-full object-cover opacity-40 grayscale"
            referrerPolicy="no-referrer"
          />

          {/* Hotspots */}
          {specs.map((spec) => (
            <div 
              key={spec.id}
              className="absolute z-20"
              style={{ left: spec.x, top: spec.y }}
            >
              <button 
                onMouseEnter={() => setActiveSpec(spec)}
                onMouseLeave={() => setActiveSpec(null)}
                className="relative group"
              >
                <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20 group-hover:opacity-40" />
                <div className="relative bg-white text-black p-2 rounded-full transform transition-transform group-hover:scale-110">
                  <Plus size={16} />
                </div>
              </button>

              <AnimatePresence>
                {activeSpec?.id === spec.id && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 bg-background border border-white/10 p-6 z-30 shadow-2xl"
                  >
                    <h4 className="text-sm font-bold uppercase mb-2">{spec.title}</h4>
                    <p className="text-xs text-white/60 leading-relaxed">{spec.description}</p>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-background" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* Overlay Text */}
          <div className="absolute bottom-12 left-12 z-10">
            <p className="text-8xl font-black text-white/5 uppercase select-none">Engineering</p>
          </div>
        </div>
      </div>
    </section>
  );
};
