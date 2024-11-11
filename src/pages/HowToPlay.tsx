import React from 'react';
import { CheckCircle2, Trophy, Star, Gift } from 'lucide-react';

export function HowToPlay() {
  const steps = [
    {
      icon: <CheckCircle2 className="w-8 h-8 text-[#4ade80]" />,
      title: "Start on WhatsApp",
      description: "Send a message to our WhatsApp number to begin your journey. No downloads or registrations needed."
    },
    {
      icon: <Trophy className="w-8 h-8 text-[#4ade80]" />,
      title: "Make Predictions",
      description: "Receive daily match predictions and make your choices. Test your football knowledge and intuition."
    },
    {
      icon: <Star className="w-8 h-8 text-[#4ade80]" />,
      title: "Climb the Leaderboard",
      description: "Earn points for correct predictions and compete with other players. Rise through the ranks."
    },
    {
      icon: <Gift className="w-8 h-8 text-[#4ade80]" />,
      title: "Win Rewards",
      description: "Top performers receive exclusive rewards. The higher you rank, the better the prizes."
    }
  ];

  return (
    <main>
      <div className="page-content">
        <h1 className="page-title">How to Play</h1>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-[#111] p-6 rounded-2xl border border-gray-800/50">
                <div className="flex items-start gap-4">
                  <div className="bg-black/50 p-3 rounded-xl">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <img
              src="https://i.hizliresim.com/jnmwcbj.png"
              alt="GameBro WhatsApp Interface"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </main>
  );
}