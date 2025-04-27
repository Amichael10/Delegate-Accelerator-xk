import type React from "react"
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Trophy,
  Calendar,
  Filter,
  ArrowUp,
  ArrowDown,
  Clock,
  Flame,
  Sparkles,
  Medal,
} from "lucide-react"
import MainLayout from "@/components/main-layout"

export default function LeaderboardPage() {
  return (
    <MainLayout>
      {/* Main Content Area */}
      <div className="px-6 py-4">
        <h1 className="text-2xl font-bold mb-6">Leaderboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <StatsCard
            title="Current Jackpot"
            value="$12,500"
            icon={<Trophy className="h-5 w-5 text-yellow-500" />}
            color="from-yellow-900 to-yellow-800"
            description="Next draw in 2 days"
          />
          <StatsCard
            title="Your Position"
            value="#42"
            icon={<Medal className="h-5 w-5 text-blue-500" />}
            color="from-blue-900 to-blue-800"
            description="Top 5% of all users"
          />
          <StatsCard
            title="Your Points"
            value="1,250"
            icon={<Sparkles className="h-5 w-5 text-purple-500" />}
            color="from-purple-900 to-purple-800"
            description="+125 points this week"
          />
        </div>

        {/* Filters */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-2 bg-[#222] hover:bg-[#333] px-4 py-2 rounded-md text-sm">
              <Calendar className="h-4 w-4" />
              <span>This Week</span>
            </button>
            <button className="flex items-center space-x-2 bg-[#222] hover:bg-[#333] px-4 py-2 rounded-md text-sm">
              <Filter className="h-4 w-4" />
              <span>All Categories</span>
            </button>
          </div>
          <div className="relative w-[250px]">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search users"
              className="bg-[#222222] w-full pl-10 pr-4 py-2 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-600"
            />
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="bg-[#111] rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-[#222]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Rank</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  <div className="flex items-center space-x-1">
                    <span>Points</span>
                    <ArrowDown className="h-3 w-3" />
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  <div className="flex items-center space-x-1">
                    <span>Quests</span>
                    <ArrowUp className="h-3 w-3 opacity-30" />
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  <div className="flex items-center space-x-1">
                    <span>Streak</span>
                    <ArrowUp className="h-3 w-3 opacity-30" />
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Rewards
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#222]">
              {leaderboardData.map((user, index) => (
                <tr key={user.id} className={user.isCurrentUser ? "bg-blue-900/20" : "hover:bg-[#1a1a1a]"}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {index < 3 ? (
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${
                            index === 0
                              ? "bg-yellow-500 text-black"
                              : index === 1
                                ? "bg-gray-400 text-black"
                                : "bg-amber-700 text-white"
                          }`}
                        >
                          {index + 1}
                        </div>
                      ) : (
                        <div className="w-6 text-center mr-2">{index + 1}</div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-medium">
                        {user.username.charAt(0).toUpperCase()}
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium">{user.username}</div>
                        <div className="text-xs text-gray-400">{user.walletShort}</div>
                      </div>
                      {user.isCurrentUser && (
                        <span className="ml-2 px-2 py-0.5 text-xs bg-blue-900 text-blue-300 rounded-md">You</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm">{user.points.toLocaleString()}</div>
                    {user.pointsChange > 0 && <div className="text-xs text-green-500">+{user.pointsChange} today</div>}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm">{user.quests}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="text-sm mr-1">{user.streak}</div>
                      {user.streak >= 3 && <Flame className="h-4 w-4 text-orange-500" />}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-1">
                      {user.rewards.map((reward, i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center text-xs"
                        >
                          {reward}
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <div className="text-sm text-gray-400">Showing 1-10 of 156 users</div>
          <div className="flex space-x-2">
            <button className="p-1 rounded-md bg-[#222] hover:bg-[#333]">
              <ChevronLeft className="h-5 w-5" />
            </button>
            {[1, 2, 3, "...", 15, 16].map((page, i) => (
              <button
                key={i}
                className={`w-8 h-8 flex items-center justify-center rounded-md ${
                  page === 1 ? "bg-blue-600 text-white" : "bg-[#222] hover:bg-[#333] text-gray-300"
                }`}
              >
                {page}
              </button>
            ))}
            <button className="p-1 rounded-md bg-[#222] hover:bg-[#333]">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Jackpot Info */}
        <div className="mt-10 bg-gradient-to-br from-yellow-900 to-yellow-800 rounded-lg p-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold mb-2">Weekly Jackpot</h2>
              <p className="text-yellow-300 mb-4">Complete quests to earn tickets for the weekly draw</p>
              <div className="flex items-center space-x-4">
                <div>
                  <div className="text-sm text-yellow-200">Next draw</div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-yellow-300" />
                    <span>2 days, 14 hours</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-yellow-200">Your tickets</div>
                  <div className="flex items-center">
                    <span>12 tickets</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-yellow-300 text-sm mb-1">Current prize pool</div>
              <div className="text-3xl font-bold">$12,500</div>
              <button className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-md text-sm font-medium">
                Get More Tickets
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

function StatsCard({
  title,
  value,
  icon,
  color,
  description,
}: {
  title: string
  value: string
  icon: React.ReactNode
  color: string
  description: string
}) {
  return (
    <div className={`bg-gradient-to-br ${color} rounded-lg p-4`}>
      <div className="flex justify-between items-start">
        <div>
          <div className="text-sm text-gray-300 mb-1">{title}</div>
          <div className="text-2xl font-bold">{value}</div>
          <div className="text-xs text-gray-300 mt-1">{description}</div>
        </div>
        <div className="p-2 bg-black/20 rounded-lg">{icon}</div>
      </div>
    </div>
  )
}

// Sample leaderboard data
const leaderboardData = [
  {
    id: 1,
    username: "crypto_king",
    walletShort: "0x1a2b...3c4d",
    points: 5250,
    pointsChange: 120,
    quests: 42,
    streak: 7,
    rewards: ["🏆", "💰", "🥇"],
    isCurrentUser: false,
  },
  {
    id: 2,
    username: "blockchain_queen",
    walletShort: "0x5e6f...7g8h",
    points: 4980,
    pointsChange: 85,
    quests: 38,
    streak: 5,
    rewards: ["🏆", "💰"],
    isCurrentUser: false,
  },
  {
    id: 3,
    username: "nft_collector",
    walletShort: "0x9i0j...1k2l",
    points: 4750,
    pointsChange: 0,
    quests: 36,
    streak: 3,
    rewards: ["🏆"],
    isCurrentUser: false,
  },
  {
    id: 4,
    username: "defi_wizard",
    walletShort: "0x3m4n...5o6p",
    points: 4500,
    pointsChange: 200,
    quests: 35,
    streak: 4,
    rewards: ["💰"],
    isCurrentUser: false,
  },
  {
    id: 5,
    username: "eth_maxi",
    walletShort: "0x7q8r...9s0t",
    points: 4320,
    pointsChange: 0,
    quests: 33,
    streak: 0,
    rewards: [],
    isCurrentUser: false,
  },
  {
    id: 6,
    username: "dao_voter",
    walletShort: "0x1u2v...3w4x",
    points: 3950,
    pointsChange: 75,
    quests: 31,
    streak: 2,
    rewards: [],
    isCurrentUser: true,
  },
  {
    id: 7,
    username: "sol_supporter",
    walletShort: "0x5y6z...7a8b",
    points: 3800,
    pointsChange: 50,
    quests: 29,
    streak: 1,
    rewards: [],
    isCurrentUser: false,
  },
  {
    id: 8,
    username: "avax_enthusiast",
    walletShort: "0x9c0d...1e2f",
    points: 3650,
    pointsChange: 0,
    quests: 28,
    streak: 0,
    rewards: [],
    isCurrentUser: false,
  },
  {
    id: 9,
    username: "polygon_fan",
    walletShort: "0x3g4h...5i6j",
    points: 3500,
    pointsChange: 100,
    quests: 27,
    streak: 3,
    rewards: [],
    isCurrentUser: false,
  },
  {
    id: 10,
    username: "arb_trader",
    walletShort: "0x7k8l...9m0n",
    points: 3350,
    pointsChange: 0,
    quests: 26,
    streak: 0,
    rewards: [],
    isCurrentUser: false,
  },
]
