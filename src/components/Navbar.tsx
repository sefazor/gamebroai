import React, { useState } from 'react';
import { HandMetal, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'How to Play', href: '/how-to-play' },
    { name: 'Leaderboard', href: '/leaderboard' },
    { name: 'Season', href: '/season' },
    { name: 'AI', href: '/ai' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="w-full max-w-6xl flex items-center justify-between px-6 py-4 bg-black/40 backdrop-blur-md rounded-[30px] border border-white/10 hover-glow">
        <a href="/" className="flex items-center gap-2 text-[#4ade80] hover-scale">
          <HandMetal className="w-6 h-6" />
          <span className="font-bold text-xl">GameBro</span>
        </a>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-gray-300 hover:text-[#4ade80] transition-colors font-medium relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4ade80] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-300 hover:text-[#4ade80] transition-colors"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 p-4 bg-black/95 backdrop-blur-md rounded-2xl border border-white/10 animate-fade-in md:hidden">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-2 text-gray-300 hover:text-[#4ade80] transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}