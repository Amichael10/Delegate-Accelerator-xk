import type React from "react"
import { Gift, ChevronRight, Zap, Award, CheckCircle, Lock } from "lucide-react"
import MainLayout from "@/components/main-layout"
import Image from "next/image"

export default function RewardsPage() {
  return (
    <MainLayout>
      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-1">Rewards</h1>
            <p className="text-gray-400">Earn rewards for your governance contributions and achievements</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-[#222] px-4 py-2 rounded-md text-sm flex items-center">
              <Zap className="h-4 w-4 text-yellow-500 mr-2" />
              <span>1,250 XP</span>
            </div>
            <div className="bg-[#222] px-4 py-2 rounded-md text-sm flex items-center">
              <Award className="h-4 w-4 text-blue-500 mr-2" />
              <span>8 Badges</span>
            </div>
          </div>
        </div>

        {/* Reward Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <RewardCategoryCard
            title="Badges & Credentials"
            description="Earn verifiable credentials that showcase your governance expertise"
            icon={<Award className="h-6 w-6 text-blue-400" />}
            count={12}
            color="from-blue-900 to-blue-800"
          />
          <RewardCategoryCard
            title="Token Rewards"
            description="Receive token rewards for completing governance tasks"
            icon={<Gift className="h-6 w-6 text-green-400" />}
            count={8}
            color="from-green-900 to-green-800"
          />
          <RewardCategoryCard
            title="Delegate Opportunities"
            description="Unlock exclusive delegate positions in partner DAOs"
            icon={<Zap className="h-6 w-6 text-purple-400" />}
            count={5}
            color="from-purple-900 to-purple-800"
          />
        </div>

        {/* Available Rewards */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Available Rewards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <RewardCard
              title="Governance Analyst Badge"
              description="Earned by successfully analyzing and providing feedback on governance proposals"
              image="/blue-analytics-badge.png"
              requirements="Complete 3 Governance Analysis Quests"
              progress={2}
              total={3}
              status="in-progress"
            />
            <RewardCard
              title="Treasury Expert Badge"
              description="Demonstrates expertise in DAO treasury management and financial analysis"
              image="/gold-treasury-badge.png"
              requirements="Complete the Treasury Management Course and related quests"
              progress={0}
              total={4}
              status="locked"
            />
            <RewardCard
              title="50 USDC Reward"
              description="Cash reward for completing the Governance Fundamentals course"
              image="/usdc-digital-currency.png"
              requirements="Complete all modules in Governance Fundamentals"
              progress={7}
              total={7}
              status="completed"
            />
            <RewardCard
              title="MakerDAO Delegate Access"
              description="Opportunity to become a delegate in MakerDAO governance"
              image="/makerdao-abstract-logo.png"
              requirements="Earn Governance Analyst and Treasury Expert badges"
              progress={1}
              total={2}
              status="in-progress"
            />
          </div>
        </div>

        {/* Reward History */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Reward History</h2>
          <div className="bg-[#111] rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-[#222]">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Reward
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Earned On
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#222]">
                <RewardHistoryRow reward="Governance Basics Badge" type="Badge" date="May 15, 2023" status="Claimed" />
                <RewardHistoryRow reward="25 USDC Reward" type="Token" date="May 10, 2023" status="Claimed" />
                <RewardHistoryRow reward="Proposal Writer Badge" type="Badge" date="April 28, 2023" status="Claimed" />
                <RewardHistoryRow
                  reward="Community Builder Badge"
                  type="Badge"
                  date="April 15, 2023"
                  status="Claimed"
                />
                <RewardHistoryRow reward="50 USDC Reward" type="Token" date="April 5, 2023" status="Claimed" />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

interface RewardCategoryCardProps {
  title: string
  description: string
  icon: React.ReactNode
  count: number
  color: string
}

function RewardCategoryCard({ title, description, icon, count, color }: RewardCategoryCardProps) {
  return (
    <div className={`bg-gradient-to-br ${color} rounded-lg p-4 hover:opacity-90 transition-opacity cursor-pointer`}>
      <div className="flex flex-col h-full justify-between">
        <div className="p-2 bg-black/20 rounded-lg w-fit mb-4">{icon}</div>
        <div>
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm text-gray-300 mb-2">{description}</p>
          <div className="flex justify-between items-center">
            <span className="text-sm">{count} available</span>
            <ChevronRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  )
}

interface RewardCardProps {
  title: string
  description: string
  image: string
  requirements: string
  progress: number
  total: number
  status: "completed" | "in-progress" | "locked"
}

function RewardCard({ title, description, image, requirements, progress, total, status }: RewardCardProps) {
  const getStatusStyles = () => {
    switch (status) {
      case "completed":
        return "border-green-500/30 bg-green-900/10"
      case "in-progress":
        return "border-blue-500/30 bg-blue-900/10"
      case "locked":
        return "border-[#333] opacity-70"
      default:
        return "border-[#333]"
    }
  }

  return (
    <div className={`bg-[#111] border ${getStatusStyles()} rounded-lg overflow-hidden transition-colors`}>
      <div className="p-5">
        <div className="flex items-center">
          <div className="w-16 h-16 relative">
            <Image src={image || "/placeholder.svg"} alt={title} width={64} height={64} className="rounded-md" />
            {status === "locked" && (
              <div className="absolute inset-0 bg-black/60 rounded-md flex items-center justify-center">
                <Lock className="h-6 w-6 text-gray-400" />
              </div>
            )}
            {status === "completed" && (
              <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-0.5">
                <CheckCircle className="h-4 w-4 text-white" />
              </div>
            )}
          </div>
          <div className="ml-4">
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
        </div>

        <div className="mt-4">
          <div className="text-sm text-gray-400 mb-1">Requirements:</div>
          <p className="text-sm mb-2">{requirements}</p>
          <div className="flex justify-between items-center text-sm mb-1">
            <span>Progress</span>
            <span>
              {progress}/{total}
            </span>
          </div>
          <div className="w-full bg-[#222] rounded-full h-2">
            <div
              className={`h-2 rounded-full ${
                status === "completed" ? "bg-green-500" : status === "in-progress" ? "bg-blue-500" : "bg-gray-700"
              }`}
              style={{ width: `${(progress / total) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          {status === "completed" ? (
            <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-sm">
              View Badge
            </button>
          ) : status === "in-progress" ? (
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm">Continue</button>
          ) : (
            <button className="bg-[#333] text-gray-400 px-3 py-1 rounded-md text-sm" disabled>
              Locked
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

interface RewardHistoryRowProps {
  reward: string
  type: string
  date: string
  status: string
}

function RewardHistoryRow({ reward, type, date, status }: RewardHistoryRowProps) {
  return (
    <tr className="hover:bg-[#1a1a1a]">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="font-medium">{reward}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-400">{type}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-400">{date}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900/30 text-green-400">
          {status}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right">
        <button className="text-blue-400 hover:text-blue-300 text-sm">View</button>
      </td>
    </tr>
  )
}
