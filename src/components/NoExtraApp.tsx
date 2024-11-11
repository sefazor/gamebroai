import React from 'react';

export function NoExtraApp() {
  return (
    <section className="py-16 lg:py-24 bg-[#111] rounded-[32px] mx-4">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#4ade80] mb-6 animate-fade-in">
          No Extra Apps
        </h2>
        
        <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto animate-fade-in stagger-1">
          Make predictions through WhatsApp.<br />
          Win surprise rewards.
        </p>

        <div className="relative h-[280px] lg:h-[420px] max-w-5xl mx-auto flex items-end justify-center animate-fade-in stagger-2">
          <img 
            src="https://i.hizliresim.com/9f8q8ts.png"
            alt="GameBro WhatsApp Interface Steps"
            className="w-auto h-[260px] lg:h-[390px] object-contain hover-lift transform transition-transform hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}