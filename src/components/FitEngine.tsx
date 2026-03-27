import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Info } from 'lucide-react';

const brands = [
  { name: 'Nike', offset: 0 },
  { name: 'Adidas', offset: 0.5 },
  { name: 'Common Projects', offset: -1 },
  { name: 'Yeezy', offset: 0.5 }
];

export const FitEngine: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState(brands[0]);
  const [size, setSize] = useState(10);
  const [result, setResult] = useState<number | null>(null);

  const calculateSize = () => {
    // Mock logic: Darq runs slightly large
    setResult(size + selectedBrand.offset);
  };

  return (
    <div className="bg-card p-8 border border-white/10">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-white text-black p-1.5">
          <Info size={14} />
        </div>
        <h3 className="text-xs font-bold uppercase tracking-widest">Fit Engine v1.0</h3>
      </div>

      <p className="text-sm text-white/60 mb-8 leading-relaxed">
        Anti-Sizing Anxiety. Select your standard size in other benchmarks to find your perfect Darq fit.
      </p>

      <div className="space-y-6">
        <div>
          <label className="text-[10px] uppercase tracking-widest text-white/40 block mb-3">Select Benchmark</label>
          <div className="grid grid-cols-2 gap-2">
            {brands.map((brand) => (
              <button
                key={brand.name}
                onClick={() => setSelectedBrand(brand)}
                className={`px-4 py-3 text-[10px] uppercase font-bold border transition-all ${
                  selectedBrand.name === brand.name 
                    ? 'bg-white text-black border-white' 
                    : 'bg-transparent text-white/60 border-white/10 hover:border-white/30'
                }`}
              >
                {brand.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-[10px] uppercase tracking-widest text-white/40 block mb-3">Your {selectedBrand.name} Size</label>
          <div className="flex items-center gap-4">
            <input 
              type="range" 
              min="6" 
              max="14" 
              step="0.5"
              value={size}
              onChange={(e) => setSize(parseFloat(e.target.value))}
              className="flex-1 accent-white"
            />
            <span className="text-xl font-bold w-12 text-center">{size}</span>
          </div>
        </div>

        <button 
          onClick={calculateSize}
          className="w-full bg-white/5 border border-white/20 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 group"
        >
          Calculate Recommendation
          <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>

        {result !== null && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-6 bg-white text-black text-center"
          >
            <p className="text-[10px] uppercase tracking-widest mb-1 font-bold">Recommended Size</p>
            <p className="text-3xl font-black uppercase tracking-tighter">Darq Size {result}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};
