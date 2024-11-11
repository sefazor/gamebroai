import React, { useState } from 'react';
import { Calendar, Trophy, Medal, Crown, Gift, Users } from 'lucide-react';

export function Season() {
  const [timeFrame, setTimeFrame] = useState('current');

  const timeFrames = [
    { id: 'current', name: '2024 Season 1' },
    { id: 'previous', name: '2023 Season 4' },
    { id: 'past', name: '2023 Season 3' }
  ];

  const individualRewards = [
    {
      icon: <Crown className="w-8 h-8 text-yellow-500" />,
      rank: "1st Place",
      prize: "$1,000",
      description: "Cash prize + Premium Season Pass for next season"
    },
    {
      icon: <Medal className="w-8 h-8 text-gray-400" />,
      rank: "2nd Place",
      prize: "$500",
      description: "Cash prize + Premium Season Pass for next season"
    },
    {
      icon: <Medal className="w-8 h-8 text-amber-700" />,
      rank: "3rd Place",
      prize: "$250",
      description: "Cash prize + Basic Season Pass for next season"
    },
    {
      icon: <Gift className="w-8 h-8 text-[#4ade80]" />,
      rank: "4th-10th Place",
      prize: "Season Pass",
      description: "Basic Season Pass for next season"
    }
  ];

  return (
    <main>
      <div className="page-content">
        <h1 className="page-title">Season</h1>

        {/* Time Filter */}
        <div className="max-w-xs mx-auto mb-16">
          <div className="bg-[#111] p-4 rounded-2xl border border-gray-800/50">
            <label className="flex items-center gap-2 text-sm text-gray-400 mb-2">
              <Calendar className="w-4 h-4" />
              Select Season Period
            </label>
            <select
              value={timeFrame}
              onChange={(e) => setTimeFrame(e.target.value)}
              className="w-full bg-black/50 border border-gray-800/50 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-[#4ade80]/50"
            >
              {timeFrames.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Individual Rankings */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center">Individual Rankings Rewards</h2>
          <div className="space-y-4">
            {individualRewards.map((reward, index) => (
              <div 
                key={index}
                className="bg-[#111] p-6 rounded-2xl border border-gray-800/50 flex flex-col md:flex-row items-start md:items-center gap-6 hover:bg-[#4ade80]/5 transition-colors"
              >
                <div className="bg-black/50 p-4 rounded-xl">
                  {reward.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                    <h3 className="text-xl font-semibold">{reward.rank}</h3>
                    <span className="text-[#4ade80] font-bold">{reward.prize}</span>
                  </div>
                  <p className="text-gray-400 mt-1">{reward.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Stats */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Community Stats</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#111] p-6 rounded-2xl border border-gray-800/50">
              <div className="bg-black/50 p-4 rounded-xl w-fit mb-4">
                <Users className="w-8 h-8 text-[#4ade80]" />
              </div>
              <div className="text-2xl font-bold mb-2">50,000+</div>
              <div className="text-gray-400">Active Players</div>
            </div>
            <div className="bg-[#111] p-6 rounded-2xl border border-gray-800/50">
              <div className="bg-black/50 p-4 rounded-xl w-fit mb-4">
                <Trophy className="w-8 h-8 text-[#4ade80]" />
              </div>
              <div className="text-2xl font-bold mb-2">1,000+</div>
              <div className="text-gray-400">Winners</div>
            </div>
            <div className="bg-[#111] p-6 rounded-2xl border border-gray-800/50">
              <div className="bg-black/50 p-4 rounded-xl w-fit mb-4">
                <Gift className="w-8 h-8 text-[#4ade80]" />
              </div>
              <div className="text-2xl font-bold mb-2">$50,000+</div>
              <div className="text-gray-400">Rewards Given</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}