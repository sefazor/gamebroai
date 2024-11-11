import React from 'react';
import { Star, MessageSquare } from 'lucide-react';

export function Stats() {
  return (
    <section className="py-24 text-center">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 text-[#4ade80] fill-[#4ade80]" />
          ))}
        </div>
        <h2 className="text-4xl font-bold mb-4">Join 50,000+ players</h2>
        <p className="text-gray-400">Be part of the fastest growing sports community</p>
        
        <button className="mt-8 inline-flex items-center gap-2 bg-[#4ade80] text-black px-6 py-3 rounded-full font-medium hover:bg-[#22c55e] transition-colors">
          <MessageSquare className="w-5 h-5" />
          Join via WhatsApp
        </button>
      </div>
    </section>
  );
}