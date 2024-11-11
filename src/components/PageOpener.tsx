import React, { useEffect, useState } from 'react';
import { HandMetal } from 'lucide-react';

export function PageOpener() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex items-center gap-3 scale-150">
        <HandMetal className="w-8 h-8 text-[#4ade80]" />
        <span className="text-[#4ade80] text-2xl font-bold">GameBro</span>
      </div>
    </div>
  );
}