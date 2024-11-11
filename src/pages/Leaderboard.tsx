import React, { useState } from 'react';
import { Trophy, Medal, Crown, Calendar, Clock } from 'lucide-react';

export function Leaderboard() {
  const [season, setSeason] = useState('current');
  const [timeFrame, setTimeFrame] = useState('all-time');

  const seasons = [
    { id: 'current', name: '2024 Season 1' },
    { id: 'previous', name: '2023 Season 4' },
    { id: 'past', name: '2023 Season 3' },
  ];

  const timeFrames = [
    { id: 'all-time', name: 'All Time' },
    { id: 'monthly', name: 'This Month' },
    { id: 'weekly', name: 'This Week' },
    { id: 'daily', name: 'Today' },
  ];

  const topPlayers = [
    { rank: 1, name: "Alex Johnson", points: 2850, wins: 142 },
    { rank: 2, name: "Maria Garcia", points: 2720, wins: 136 },
    { rank: 3, name: "David Kim", points: 2690, wins: 134 },
    { rank: 4, name: "Sarah Smith", points: 2580, wins: 129 },
    { rank: 5, name: "James Wilson", points: 2510, wins: 125 },
    { rank: 6, name: "Emma Brown", points: 2480, wins: 124 },
    { rank: 7, name: "Lucas Martinez", points: 2450, wins: 122 },
    { rank: 8, name: "Sophie Chen", points: 2410, wins: 120 },
    { rank: 9, name: "Oliver Taylor", points: 2390, wins: 119 },
    { rank: 10, name: "Isabella Lee", points: 2350, wins: 117 },
    { rank: 11, name: "William Anderson", points: 2320, wins: 116 },
    { rank: 12, name: "Mia Thompson", points: 2290, wins: 114 },
    { rank: 13, name: "Ethan Rodriguez", points: 2260, wins: 113 },
    { rank: 14, name: "Ava White", points: 2230, wins: 111 },
    { rank: 15, name: "Noah Martin", points: 2200, wins: 110 },
    { rank: 16, name: "Sophia Clark", points: 2170, wins: 108 },
    { rank: 17, name: "Benjamin King", points: 2140, wins: 107 },
    { rank: 18, name: "Chloe Wright", points: 2110, wins: 105 },
    { rank: 19, name: "Daniel Lee", points: 2080, wins: 104 },
    { rank: 20, name: "Emily Davis", points: 2050, wins: 102 }
  ];

  return (
    <main>
      <div className="page-content">
        <h1 className="page-title">
          <div className="flex items-center justify-center gap-3">
            <Trophy className="w-8 h-8 text-[#4ade80]" />
            Leaderboard
          </div>
        </h1>

        {/* Filters */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="bg-[#111] p-4 rounded-2xl border border-gray-800/50 flex flex-col sm:flex-row gap-4">
            {/* Season Filter */}
            <div className="flex-1">
              <label className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <Calendar className="w-4 h-4" />
                Season
              </label>
              <select
                value={season}
                onChange={(e) => setSeason(e.target.value)}
                className="w-full bg-black/50 border border-gray-800/50 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-[#4ade80]/50"
              >
                {seasons.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Time Frame Filter */}
            <div className="flex-1">
              <label className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <Clock className="w-4 h-4" />
                Time Period
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
        </div>

        {/* Leaderboard Table */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#111] rounded-2xl border border-gray-800/50 overflow-hidden">
            {topPlayers.map((player, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-6 transition-colors duration-200 hover:bg-[#4ade80]/5 group ${
                  index !== topPlayers.length - 1 ? 'border-b border-gray-800/50' : ''
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 text-center">
                    {index === 0 ? (
                      <Crown className="w-6 h-6 text-yellow-500" />
                    ) : index === 1 ? (
                      <Medal className="w-6 h-6 text-gray-400" />
                    ) : index === 2 ? (
                      <Medal className="w-6 h-6 text-amber-700" />
                    ) : (
                      <span className="text-gray-400 group-hover:text-[#4ade80] transition-colors">
                        {player.rank}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold group-hover:text-[#4ade80] transition-colors">
                      {player.name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {player.wins} correct predictions
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[#4ade80] font-bold group-hover:text-white transition-colors">
                    {player.points}
                  </span>
                  <p className="text-sm text-gray-400">points</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}