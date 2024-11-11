import React from 'react';
import { Smartphone, MessageCircle, Gift } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Smartphone className="w-8 h-8 text-[#4ade80] mb-4" />,
      title: "Play on WhatsApp",
      description: "No extra apps needed. Play directly through WhatsApp."
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-[#4ade80] mb-4" />,
      title: "Daily Challenges",
      description: "New questions every day to test your knowledge."
    },
    {
      icon: <Gift className="w-8 h-8 text-[#4ade80] mb-4" />,
      title: "Win Rewards",
      description: "Compete for exclusive prizes and recognition."
    }
  ];

  return (
    <section className="bg-gray-900 py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Discover GameBro</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-black p-8 rounded-xl">
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}