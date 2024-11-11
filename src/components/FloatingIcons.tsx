import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Trophy, Medal, Dribbble, Star } from 'lucide-react';

export function FloatingIcons() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const icons = containerRef.current.children;
    
    Array.from(icons).forEach((icon) => {
      const randomX = Math.random() * window.innerWidth;
      const randomY = Math.random() * window.innerHeight;
      const randomRotation = Math.random() * 360;
      
      gsap.set(icon, {
        x: randomX,
        y: randomY,
        rotation: randomRotation,
        scale: 0.5 + Math.random() * 0.5,
      });

      gsap.to(icon, {
        duration: 10 + Math.random() * 10,
        x: `random(${-window.innerWidth/4}, ${window.innerWidth/4})`,
        y: `random(${-window.innerHeight/4}, ${window.innerHeight/4})`,
        rotation: 'random(-180, 180)',
        scale: 0.5 + Math.random() * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "none",
      });
    });

    return () => {
      gsap.killTweensOf(icons);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Ball Icons */}
      {[...Array(3)].map((_, i) => (
        <div key={`ball-${i}`} className="absolute text-[#4ade80]/10">
          <Dribbble size={48} />
        </div>
      ))}

      {/* Trophy Icons */}
      {[...Array(2)].map((_, i) => (
        <div key={`trophy-${i}`} className="absolute text-[#4ade80]/10">
          <Trophy size={48} />
        </div>
      ))}

      {/* Medal Icons */}
      {[...Array(2)].map((_, i) => (
        <div key={`medal-${i}`} className="absolute text-[#4ade80]/10">
          <Medal size={48} />
        </div>
      ))}

      {/* Star Icons */}
      {[...Array(3)].map((_, i) => (
        <div key={`star-${i}`} className="absolute text-[#4ade80]/10">
          <Star size={48} />
        </div>
      ))}
    </div>
  );
}