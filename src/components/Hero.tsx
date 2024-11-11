import React from 'react';
import { MessageSquare } from 'lucide-react';

export function Hero() {
  return (
    <section className="container mx-auto px-4 pt-32 lg:pt-20 pb-8">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-8 text-center lg:text-left">
          {/* Community Banner */}
          <div className="inline-flex items-center gap-3 bg-black/40 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
            <div className="flex -space-x-2">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" 
                alt="Player 1"
                className="w-8 h-8 rounded-full border-2 border-black"
              />
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" 
                alt="Player 2"
                className="w-8 h-8 rounded-full border-2 border-black"
              />
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" 
                alt="Player 3"
                className="w-8 h-8 rounded-full border-2 border-black"
              />
            </div>
            <span className="text-sm font-medium">+40K players have joined</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Ready to test your <span className="text-[#4ade80]">football knowledge?</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto lg:mx-0">
            Join thousands of sports enthusiasts and prove your expertise in the world's most popular sport.
          </p>
          <a 
            href="https://wa.me/1234567890" 
            className="inline-flex items-center gap-2 bg-[#4ade80] text-black px-6 py-3 rounded-full font-medium hover:bg-[#22c55e] transition-all duration-300 hover:shadow-lg hover:shadow-[#4ade80]/20 transform hover:-translate-y-1"
          >
            <MessageSquare className="w-5 h-5" />
            Start on WhatsApp
          </a>
        </div>
        <div className="flex-1 flex justify-end">
          <img 
            src="https://i.hizliresim.com/jnmwcbj.png" 
            alt="GameBro WhatsApp Interface"
            className="w-[336px] lg:w-[504px] h-auto object-contain relative z-10"
          />
        </div>
      </div>
    </section>
  );
}