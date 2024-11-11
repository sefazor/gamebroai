import React from 'react';
import { Swords, Users, Trophy, Target } from 'lucide-react';

export function ChallengeSection() {
  const challenges = [
    {
      icon: <Swords className="w-12 h-12 text-[#4ade80]" />,
      title: "1v1 Duels",
      description: "Challenge your friends to direct prediction battles and prove who knows football better."
    },
    {
      icon: <Users className="w-12 h-12 text-[#4ade80]" />,
      title: "Private Leagues",
      description: "Create your own league, invite friends, and compete in a season-long battle for supremacy."
    },
    {
      icon: <Trophy className="w-12 h-12 text-[#4ade80]" />,
      title: "Team Competitions",
      description: "Form a team with friends and compete against other crews in weekly tournaments."
    }
  ];

  return (
    <section className="py-24 bg-[#111] rounded-[32px] mx-4 mb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
            <Target className="w-4 h-4 text-[#4ade80]" />
            <span className="text-sm">Challenge Your Friends</span>
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-6">Compete Together</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Create your own football prediction competitions and battle with friends
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-gray-800/50 hover:border-[#4ade80]/50 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="bg-black/50 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                {challenge.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#4ade80] transition-colors">
                {challenge.title}
              </h3>
              <p className="text-gray-400">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://wa.me/1234567890"
            className="inline-flex items-center gap-2 bg-[#4ade80] text-black px-8 py-4 rounded-full font-medium hover:bg-[#22c55e] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#4ade80]/20"
          >
            <Users className="w-5 h-5" />
            Start Playing with Friends
          </a>
        </div>
      </div>
    </section>
  );
}