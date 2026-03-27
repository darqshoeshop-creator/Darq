import React from 'react';
import { DarqLogo } from './DarqLogo';
import { ShoppingBag, Menu, User } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-xs font-medium uppercase tracking-widest hover:text-white/60 transition-colors">Shoes</a>
          <a href="#" className="text-xs font-medium uppercase tracking-widest hover:text-white/60 transition-colors">Drops</a>
        </nav>

        <div className="flex-1 flex justify-center">
          <a href="/" className="w-32">
            <DarqLogo className="text-white" />
          </a>
        </div>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-8 mr-6">
            <a href="#" className="text-xs font-medium uppercase tracking-widest hover:text-white/60 transition-colors">Story</a>
            <a href="#" className="text-xs font-medium uppercase tracking-widest hover:text-white/60 transition-colors">Log In</a>
          </nav>
          <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
            <ShoppingBag size={20} />
          </button>
          <button className="md:hidden p-2 hover:bg-white/5 rounded-full transition-colors">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};
