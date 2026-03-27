import React from 'react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <h1 className="text-6xl md:text-8xl mb-8 leading-[0.9] tracking-tighter">
            Step into the <br />
            <span className="text-white/40 italic">Shadows.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 mb-12 max-w-md leading-relaxed font-light">
            Premium, brutalist footwear engineered for those who move with intent. 
            Luxury redefined through raw geometry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-black px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white/90 transition-all transform hover:scale-[1.02]">
              Shop Latest Drop
            </button>
            <button className="border border-white/20 text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
              Explore Story
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative aspect-square flex items-center justify-center"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-white/5 rounded-full blur-[120px] animate-pulse" />
          
          {/* Sneaker Placeholder Image */}
          <img 
            src="https://picsum.photos/seed/sneaker-dark/1200/1200" 
            alt="Shadow One Sneaker" 
            className="relative z-10 w-full h-full object-contain mix-blend-screen grayscale contrast-125"
            referrerPolicy="no-referrer"
          />
          
          {/* Floating Labels */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-0 bg-card/80 backdrop-blur-md border border-white/10 p-4 z-20"
          >
            <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Model</p>
            <p className="text-sm font-bold uppercase tracking-tighter">Shadow One</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Vertical Rail Text */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:block">
        <p className="writing-mode-vertical text-[10px] uppercase tracking-[0.5em] text-white/20 rotate-180">
          Engineered in the Shadows // 2026 Collection
        </p>
      </div>
    </section>
  );
};
