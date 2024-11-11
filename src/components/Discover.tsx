import React from 'react';
import { Users, MessageSquare, Trophy, Gift } from 'lucide-react';

export function Discover() {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-[#4ade80]" />,
      title: "WhatsApp Registration",
      description: "Quickly create your GameBro account through WhatsApp."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-[#4ade80]" />,
      title: "Daily Updates",
      description: "Make your predictions with daily bulletins and save them."
    },
    {
      icon: <Trophy className="w-8 h-8 text-[#4ade80]" />,
      title: "Leaderboard",
      description: "Make the best predictions and secure your place on the leaderboard."
    },
    {
      icon: <Gift className="w-8 h-8 text-[#4ade80]" />,
      title: "Rewards",
      description: "Complete the monthly season in the best position! Win beautiful prizes."
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
            <Trophy className="w-4 h-4 text-[#4ade80]" />
            <span className="text-sm">Win as You Play</span>
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-6 text-[#4ade80]">Discover GameBro</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Make predictions through WhatsApp without downloading extra apps,
            start winning rewards.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-3 items-center max-w-7xl mx-auto">
          {/* Left Features */}
          <div className="space-y-3 lg:col-span-4 order-2 lg:order-1">
            {features.slice(0, 2).map((feature, index) => (
              <div
                key={index}
                className="bg-[#111] p-6 rounded-xl border border-gray-800/50 hover:bg-[#4ade80]/5 transition-colors"
              >
                <div className="bg-black/50 p-3 rounded-xl w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="lg:col-span-4 flex items-center justify-center h-full order-1 lg:order-2">
            <div className="bg-gradient-to-t from-white/10 to-transparent rounded-3xl w-full max-w-[280px] mx-auto flex items-center justify-center">
              <img 
                src="https://i.hizliresim.com/mowwur6.png"
                alt="GameBro WhatsApp Interface"
                className="w-[240px] h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Features */}
          <div className="space-y-3 lg:col-span-4 order-3">
            {features.slice(2, 4).map((feature, index) => (
              <div
                key={index}
                className="bg-[#111] p-6 rounded-xl border border-gray-800/50 hover:bg-[#4ade80]/5 transition-colors"
              >
                <div className="bg-black/50 p-3 rounded-xl w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}