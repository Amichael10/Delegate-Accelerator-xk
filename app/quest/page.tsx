import { Search, Filter, Clock, Award, ArrowRight, CheckCircle } from "lucide-react"
import MainLayout from "@/components/main-layout"
import Link from "next/link"

export default function QuestPage() {
  return (
    <MainLayout>
      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-1">Governance Quests</h1>
            <p className="text-gray-400">Complete governance tasks to earn credentials and rewards</p>
          </div>
          <div className="flex space-x-2">
            <button className="bg-[#222] hover:bg-[#333] px-4 py-2 rounded-md text-sm flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              <span>Filter</span>
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">My Quests</button>
          </div>
        </div>

        {/* Search */}
        <div className="bg-[#111] rounded-lg p-4 mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search quests by name, DAO, or skill"
              className="bg-[#222] w-full pl-10 pr-4 py-2 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-600"
            />
          </div>
        </div>

        {/* Featured Quests */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Featured Quests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <QuestCard
              title="Governance Proposal Analysis"
              dao="MakerDAO"
              description="Analyze and provide feedback on three active governance proposals"
              difficulty="Intermediate"
              timeEstimate="3-4 hours"
              reward="50 XP + Governance Analyst Badge"
              skills={["Critical Thinking", "Governance", "Analysis"]}
              status="featured"
            />
            <QuestCard
              title="Treasury Management Simulation"
              dao="Aave"
              description="Complete a simulated treasury management exercise for a DeFi protocol"
              difficulty="Advanced"
              timeEstimate="5-6 hours"
              reward="75 XP + Treasury Expert Badge"
              skills={["Financial Analysis", "Risk Management", "DeFi"]}
              status="featured"
            />
          </div>
        </div>

        {/* All Quests */}
        <div>
          <h2 className="text-xl font-semibold mb-4">All Quests</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <QuestCard
              title="Governance Fundamentals"
              dao="D/Acc Academy"
              description="Learn the basics of DAO governance through interactive lessons"
              difficulty="Beginner"
              timeEstimate="2-3 hours"
              reward="30 XP + Governance Basics Badge"
              skills={["Governance", "DAO Basics"]}
              status="completed"
            />
            <QuestCard
              title="Proposal Writing Workshop"
              dao="Optimism"
              description="Draft a mock governance proposal following best practices"
              difficulty="Intermediate"
              timeEstimate="4-5 hours"
              reward="60 XP + Proposal Writer Badge"
              skills={["Writing", "Governance", "Communication"]}
              status="available"
            />
            <QuestCard
              title="Community Engagement Strategy"
              dao="ENS"
              description="Develop a strategy to increase community participation in governance"
              difficulty="Intermediate"
              timeEstimate="3-4 hours"
              reward="45 XP + Community Builder Badge"
              skills={["Community", "Strategy", "Engagement"]}
              status="available"
            />
            <QuestCard
              title="Parameter Optimization"
              dao="Compound"
              description="Analyze and recommend optimal parameters for a lending protocol"
              difficulty="Advanced"
              timeEstimate="6-8 hours"
              reward="80 XP + Parameter Expert Badge"
              skills={["DeFi", "Data Analysis", "Risk Management"]}
              status="available"
            />
            <QuestCard
              title="Governance Process Audit"
              dao="Uniswap"
              description="Audit and suggest improvements to a DAO's governance process"
              difficulty="Advanced"
              timeEstimate="5-7 hours"
              reward="70 XP + Governance Auditor Badge"
              skills={["Auditing", "Process Design", "Governance"]}
              status="available"
            />
            <QuestCard
              title="Delegate Statement Creation"
              dao="D/Acc Academy"
              description="Create a professional delegate statement outlining your governance philosophy"
              difficulty="Beginner"
              timeEstimate="2-3 hours"
              reward="35 XP + Delegate Badge"
              skills={["Writing", "Communication", "Governance"]}
              status="available"
            />
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

interface QuestCardProps {
  title: string
  dao: string
  description: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  timeEstimate: string
  reward: string
  skills: string[]
  status: "available" | "completed" | "featured"
}

function QuestCard({ title, dao, description, difficulty, timeEstimate, reward, skills, status }: QuestCardProps) {
  const getDifficultyColor = () => {
    switch (difficulty) {
      case "Beginner":
        return "text-green-400"
      case "Intermediate":
        return "text-blue-400"
      case "Advanced":
        return "text-purple-400"
      default:
        return "text-gray-400"
    }
  }

  const getStatusStyles = () => {
    switch (status) {
      case "featured":
        return "border-blue-500/30 bg-blue-900/10"
      case "completed":
        return "border-green-500/30 bg-green-900/10"
      default:
        return "border-[#333]"
    }
  }

  return (
    <div className={`bg-[#111] border ${getStatusStyles()} rounded-lg overflow-hidden transition-colors`}>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg">{title}</h3>
          {status === "completed" && <CheckCircle className="h-5 w-5 text-green-500" />}
        </div>
        <div className="text-sm text-gray-400 mb-3">
          {dao} • <span className={getDifficultyColor()}>{difficulty}</span>
        </div>
        <p className="text-gray-300 text-sm mb-4">{description}</p>

        <div className="flex flex-wrap gap-1 mb-4">
          {skills.map((skill, index) => (
            <span key={index} className="bg-[#222] text-gray-300 text-xs px-2 py-1 rounded-md">
              {skill}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-gray-400">
            <Clock className="h-4 w-4 mr-1" />
            <span>{timeEstimate}</span>
          </div>
          <div className="flex items-center text-sm text-gray-400">
            <Award className="h-4 w-4 mr-1" />
            <span>{reward}</span>
          </div>
        </div>

        <div className="flex justify-end">
          {status === "completed" ? (
            <button className="bg-green-600/20 text-green-400 px-3 py-1 rounded-md text-sm flex items-center" disabled>
              Completed
            </button>
          ) : (
            <Link
              href={`/quest/${title.toLowerCase().replace(/\s+/g, "-")}`}
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm flex items-center"
            >
              Start Quest <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
