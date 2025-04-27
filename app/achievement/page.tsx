import type React from "react"
import { Flame, Star, CheckCircle } from "lucide-react"
import MainLayout from "@/components/main-layout"

export default function AchievementPage() {
  return (
    <MainLayout>
      <div className="px-6 py-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Levels</h1>
          <p className="text-gray-400">
            Complete Activations to level up on D/Acc — and celebrate your onchain achievements.
          </p>
        </div>

        {/* Levels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {/* Level 5 */}
          <LevelCard level={5} description="Reach Level 5 by earning XP" color="from-purple-600 to-purple-900" />

          {/* Level 10 */}
          <LevelCard level={10} description="Reach Level 10 by earning XP" color="from-blue-600 to-blue-900" />

          {/* Level 20 */}
          <LevelCard level={20} description="Reach Level 20 by earning XP" color="from-indigo-600 to-indigo-900" />

          {/* Level 30 */}
          <LevelCard level={30} description="Reach Level 30 by earning XP" color="from-gray-600 to-gray-900" />

          {/* Level 40 */}
          <LevelCard level={40} description="Reach Level 40 by earning XP" color="from-blue-600 to-blue-900" />

          {/* Level 50 */}
          <LevelCard level={50} description="Reach Level 50 by earning XP" color="from-indigo-600 to-indigo-900" />

          {/* Level 60 */}
          <LevelCard level={60} description="Reach Level 60 by earning XP" color="from-gray-600 to-gray-900" />

          {/* Level 70 */}
          <LevelCard level={70} description="Reach Level 70 by earning XP" color="from-blue-600 to-blue-900" />

          {/* Level 80 */}
          <LevelCard level={80} description="Reach Level 80 by earning XP" color="from-indigo-600 to-indigo-900" />

          {/* Level 90 */}
          <LevelCard level={90} description="Reach Level 90 by earning XP" color="from-gray-600 to-gray-900" />

          {/* Level 100 */}
          <LevelCard level={100} description="Reach Level 100 by earning XP" color="from-blue-600 to-blue-900" />
        </div>

        {/* GM Streak Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">GM Streak</h1>
          <p className="text-gray-400">Keep your streak going and see how high you can go 🔥</p>
        </div>

        {/* GM Streak Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {/* 3 Day GM Streak */}
          <StreakCard
            title="3 Day GM Streak"
            description="Hit the GM button 3 days in a row"
            icon="flame"
            color="from-orange-600 to-red-900"
          />

          {/* 1 Week GM Streak */}
          <StreakCard
            title="1 Week GM Streak"
            description="Hit the GM button 7 days in a row"
            icon="hand"
            color="from-gray-600 to-gray-900"
          />

          {/* 2 Week GM Streak */}
          <StreakCard
            title="2 Week GM Streak"
            description="Hit the GM button 14 days in a row"
            icon="hand"
            color="from-gray-600 to-gray-900"
          />

          {/* 1 Month GM Streak */}
          <StreakCard
            title="1 Month GM Streak"
            description="Hit the GM button 30 days in a row"
            icon="hand"
            color="from-gray-600 to-gray-900"
          />

          {/* 50 Day GM Streak */}
          <StreakCard
            title="50 Day GM Streak"
            description="Hit the GM button 50 days in a row"
            icon="hand"
            color="from-gray-600 to-gray-900"
          />

          {/* 75 Day GM Streak */}
          <StreakCard
            title="75 Day GM Streak"
            description="Hit the GM button 75 days in a row"
            icon="hand"
            color="from-gray-600 to-gray-900"
          />

          {/* 100 Day GM Streak */}
          <StreakCard
            title="100 Day GM Streak"
            description="Hit the GM button 100 days in a row"
            icon="hand"
            color="from-gray-600 to-gray-900"
          />

          {/* 125 Day GM Streak */}
          <StreakCard
            title="125 Day GM Streak"
            description="Hit the GM button 125 days in a row"
            icon="hand"
            color="from-gray-600 to-gray-900"
          />

          {/* 180 Day GM Streak */}
          <StreakCard
            title="180 Day GM Streak"
            description="Hit the GM button 180 days in a row"
            icon="hand"
            color="from-gray-600 to-gray-900"
          />
        </div>

        {/* Governance Achievements Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Governance Achievements</h1>
          <p className="text-gray-400">Complete governance tasks and earn special achievements</p>
        </div>

        {/* Governance Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* First Proposal */}
          <GovernanceCard
            title="First Proposal"
            description="Submit your first governance proposal"
            icon="document"
            color="from-blue-600 to-blue-900"
          />

          {/* Proposal Approved */}
          <GovernanceCard
            title="Proposal Approved"
            description="Get your first proposal approved by the community"
            icon="check"
            color="from-green-600 to-green-900"
          />

          {/* Voting Streak */}
          <GovernanceCard
            title="Voting Streak"
            description="Vote on 10 consecutive governance proposals"
            icon="vote"
            color="from-purple-600 to-purple-900"
          />

          {/* Delegate Power */}
          <GovernanceCard
            title="Delegate Power"
            description="Receive delegation from 5 different addresses"
            icon="users"
            color="from-indigo-600 to-indigo-900"
          />

          {/* Governance Expert */}
          <GovernanceCard
            title="Governance Expert"
            description="Complete all Governance 101 courses"
            icon="star"
            color="from-yellow-600 to-yellow-900"
          />

          {/* Community Leader */}
          <GovernanceCard
            title="Community Leader"
            description="Lead a successful governance initiative"
            icon="crown"
            color="from-amber-600 to-amber-900"
          />
        </div>
      </div>
    </MainLayout>
  )
}

interface LevelCardProps {
  level: number
  description: string
  color: string
}

function LevelCard({ level, description, color }: LevelCardProps) {
  return (
    <div className="bg-[#111] border border-[#333] rounded-lg overflow-hidden hover:border-blue-500/50 hover:bg-blue-900/10 transition-colors">
      <div className="p-6 flex items-center">
        <div
          className={`w-16 h-16 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-2xl font-bold`}
        >
          {level}
        </div>
        <div className="ml-4">
          <h3 className="font-bold text-lg">Level {level}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}

interface StreakCardProps {
  title: string
  description: string
  icon: "flame" | "hand"
  color: string
}

function StreakCard({ title, description, icon, color }: StreakCardProps) {
  return (
    <div className="bg-[#111] border border-[#333] rounded-lg overflow-hidden hover:border-blue-500/50 hover:bg-blue-900/10 transition-colors">
      <div className="p-6 flex items-center">
        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${color} flex items-center justify-center`}>
          {icon === "flame" ? (
            <Flame className="h-8 w-8 text-white" />
          ) : (
            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
              <span className="text-gray-400">👋</span>
            </div>
          )}
        </div>
        <div className="ml-4">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}

interface GovernanceCardProps {
  title: string
  description: string
  icon: "document" | "check" | "vote" | "users" | "star" | "crown"
  color: string
}

function GovernanceCard({ title, description, icon, color }: GovernanceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "document":
        return <FileIcon className="h-8 w-8 text-white" />
      case "check":
        return <CheckCircle className="h-8 w-8 text-white" />
      case "vote":
        return <VoteIcon className="h-8 w-8 text-white" />
      case "users":
        return <UsersIcon className="h-8 w-8 text-white" />
      case "star":
        return <Star className="h-8 w-8 text-white" />
      case "crown":
        return <CrownIcon className="h-8 w-8 text-white" />
      default:
        return <Star className="h-8 w-8 text-white" />
    }
  }

  return (
    <div className="bg-[#111] border border-[#333] rounded-lg overflow-hidden hover:border-blue-500/50 hover:bg-blue-900/10 transition-colors">
      <div className="p-6 flex items-center">
        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${color} flex items-center justify-center`}>
          {getIcon()}
        </div>
        <div className="ml-4">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}

// Custom icons
function FileIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  )
}

function VoteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 11.08V8l-6-6H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h6" />
      <path d="M14 2v6h6" />
      <path d="M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z" />
      <path d="m22 22-1.5-1.5" />
    </svg>
  )
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function CrownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
    </svg>
  )
}
