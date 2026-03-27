import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { TechSpecSlider } from './components/TechSpecSlider';
import { FitEngine } from './components/FitEngine';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-white selection:text-black">
      <Header />
      
      <main>
        <Hero />
        
        {/* Featured Drop Section */}
        <section className="py-32 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="sticky top-32">
              <h2 className="text-5xl md:text-7xl mb-8 leading-none">
                Shadow <br /> One / 01
              </h2>
              <div className="space-y-8">
                <p className="text-white/60 leading-relaxed max-w-md">
                  The foundational silhouette. A study in matte textures and aggressive geometry. 
                  Limited to 500 units globally.
                </p>
                
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold">$480</span>
                  <span className="bg-white/10 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">Limited Edition</span>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <div className="flex items-center gap-2 text-red-500 mb-6">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-[10px] uppercase font-bold tracking-widest">Low Stock: 12 Units Remaining</span>
                  </div>
                  
                  <button className="w-full bg-white text-black py-6 text-sm font-bold uppercase tracking-widest hover:bg-white/90 transition-all mb-4">
                    Quick Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <FitEngine />
              
              <div className="grid grid-cols-1 gap-6">
                <img 
                  src="https://picsum.photos/seed/sneaker-1/1000/1200" 
                  alt="Detail 1" 
                  className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://picsum.photos/seed/sneaker-2/1000/1200" 
                  alt="Detail 2" 
                  className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        <TechSpecSlider />

        {/* Brand Philosophy */}
        <section className="py-40 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl mb-12 max-w-4xl mx-auto leading-tight">
              We don't build for the masses. <br />
              <span className="text-white/20 italic">We build for the intent.</span>
            </h2>
            <div className="w-20 h-px bg-white/20 mx-auto mb-12" />
            <a href="#" className="text-xs font-bold uppercase tracking-[0.4em] hover:text-white/60 transition-colors">
              Read the Manifesto
            </a>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
