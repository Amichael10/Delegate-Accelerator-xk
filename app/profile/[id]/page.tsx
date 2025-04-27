import {
  ArrowLeft,
  Star,
  CheckCircle,
  MessageSquare,
  Users,
  BarChart2,
  Award,
  FileText,
  ThumbsUp,
  Activity,
  Shield,
  Zap,
} from "lucide-react"
import MainLayout from "@/components/main-layout"
import Link from "next/link"
import Image from "next/image"

interface ProfilePageProps {
  params: {
    id: string
  }
}

export default function ProfilePage({ params }: ProfilePageProps) {
  // In a real app, we would fetch the delegate data based on the ID
  // For now, we'll use the first featured delegate as an example
  const delegate = {
    id: 1,
    name: "Alex Thompson",
    avatar: "/confident-professional.png",
    title: "Governance Specialist",
    bio: "Experienced governance specialist with a focus on DeFi protocols. I help DAOs optimize their governance processes and make informed decisions that benefit the entire ecosystem.",
    rating: 4.9,
    verified: true,
    skills: [
      "Proposal Writing",
      "Treasury Management",
      "Risk Assessment",
      "Voting Analysis",
      "Parameter Optimization",
      "Community Engagement",
    ],
    daos: [
      { name: "MakerDAO", logo: "/maker-mkr-logo.png", role: "Core Delegate" },
      { name: "Aave", logo: "/aave-aave-logo.png", role: "Governance Contributor" },
      { name: "Uniswap", logo: "/uniswap-uni-logo.png", role: "Proposal Reviewer" },
    ],
    stats: {
      completedProposals: 32,
      successRate: 94,
      responseTime: "< 24h",
      delegatedVotes: "2.4M",
      activeSince: "Jan 2022",
    },
    competencies: [
      { name: "Governance", level: 95 },
      { name: "Treasury Management", level: 90 },
      { name: "Risk Assessment", level: 85 },
      { name: "Technical Analysis", level: 75 },
      { name: "Community Building", level: 80 },
    ],
    certifications: [
      { name: "D/Acc Governance Expert", issuer: "StableLab", date: "Mar 2023" },
      { name: "DeFi Risk Management", issuer: "Risk DAO", date: "Nov 2022" },
      { name: "Smart Contract Security", issuer: "Secureum", date: "Aug 2022" },
    ],
    recentActivity: [
      {
        type: "proposal",
        dao: "MakerDAO",
        title: "Parameter Adjustments for Stability Fee",
        date: "2 days ago",
        status: "Passed",
      },
      {
        type: "vote",
        dao: "Aave",
        title: "Risk Parameter Updates for New Assets",
        date: "1 week ago",
        status: "Voted For",
      },
      {
        type: "comment",
        dao: "Uniswap",
        title: "Fee Structure Optimization Proposal",
        date: "2 weeks ago",
        status: "Commented",
      },
    ],
  }

  return (
    <MainLayout>
      <div className="px-6 py-4">
        <Link href="/marketplace" className="flex items-center text-gray-400 hover:text-white mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          <span>Back to Marketplace</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-1">
            <div className="bg-[#111] rounded-lg p-6 mb-6">
              <div className="flex flex-col items-center mb-4">
                <div className="relative mb-3">
                  <Image
                    src={delegate.avatar || "/placeholder.svg"}
                    alt={delegate.name}
                    width={120}
                    height={120}
                    className="rounded-full"
                  />
                  {delegate.verified && (
                    <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-1">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                  )}
                </div>
                <h1 className="text-2xl font-bold">{delegate.name}</h1>
                <div className="flex items-center mt-1 mb-2">
                  <span className="text-gray-400">{delegate.title}</span>
                  <div className="mx-2 h-1 w-1 rounded-full bg-gray-500"></div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span>{delegate.rating.toFixed(1)}</span>
                  </div>
                </div>
                <div className="flex space-x-2 mt-2">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
                    Contact
                  </button>
                  <button className="bg-[#222] hover:bg-[#333] px-4 py-2 rounded-md text-sm flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    <span>Delegate</span>
                  </button>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-bold mb-2">Bio</h3>
                <p className="text-gray-300 text-sm">{delegate.bio}</p>
              </div>

              <div className="mt-6">
                <h3 className="font-bold mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {delegate.skills.map((skill, index) => (
                    <span key={index} className="bg-[#222] text-gray-300 text-xs px-2 py-1 rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-bold mb-2">Active in DAOs</h3>
                <div className="space-y-3">
                  {delegate.daos.map((dao, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        <Image src={dao.logo || "/placeholder.svg"} alt={dao.name} width={24} height={24} />
                      </div>
                      <div className="ml-3">
                        <div className="font-medium">{dao.name}</div>
                        <div className="text-xs text-gray-400">{dao.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-bold mb-2">Stats</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#222] p-3 rounded-md">
                    <div className="text-xs text-gray-400 mb-1">Proposals</div>
                    <div className="font-medium">{delegate.stats.completedProposals}</div>
                  </div>
                  <div className="bg-[#222] p-3 rounded-md">
                    <div className="text-xs text-gray-400 mb-1">Success Rate</div>
                    <div className="font-medium">{delegate.stats.successRate}%</div>
                  </div>
                  <div className="bg-[#222] p-3 rounded-md">
                    <div className="text-xs text-gray-400 mb-1">Response Time</div>
                    <div className="font-medium">{delegate.stats.responseTime}</div>
                  </div>
                  <div className="bg-[#222] p-3 rounded-md">
                    <div className="text-xs text-gray-400 mb-1">Delegated Votes</div>
                    <div className="font-medium">{delegate.stats.delegatedVotes}</div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-bold mb-2">Certifications</h3>
                <div className="space-y-3">
                  {delegate.certifications.map((cert, index) => (
                    <div key={index} className="bg-[#222] p-3 rounded-md">
                      <div className="flex items-center">
                        <Award className="h-4 w-4 text-blue-400 mr-2" />
                        <div className="font-medium">{cert.name}</div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        {cert.issuer} • {cert.date}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Competency Graph & Activity */}
          <div className="lg:col-span-2">
            {/* Competency Graph */}
            <div className="bg-[#111] rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Competency Graph</h2>
              <p className="text-gray-400 text-sm mb-6">
                This graph represents verified skills and expertise based on completed courses, practical tasks, and
                real-world governance contributions.
              </p>

              <div className="space-y-4">
                {delegate.competencies.map((competency, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm">{competency.name}</span>
                      <span className="text-sm font-medium">{competency.level}%</span>
                    </div>
                    <div className="w-full bg-[#222] rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full"
                        style={{ width: `${competency.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-[#111] rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {delegate.recentActivity.map((activity, index) => (
                  <div key={index} className="border-l-2 border-blue-500 pl-4 py-1">
                    <div className="flex items-center">
                      {activity.type === "proposal" && <FileText className="h-4 w-4 text-blue-400 mr-2" />}
                      {activity.type === "vote" && <ThumbsUp className="h-4 w-4 text-green-400 mr-2" />}
                      {activity.type === "comment" && <MessageSquare className="h-4 w-4 text-yellow-400 mr-2" />}
                      <span className="font-medium">{activity.title}</span>
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                      {activity.dao} • {activity.status} • {activity.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Governance Contributions */}
            <div className="bg-[#111] rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Governance Contributions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-[#333] rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <Shield className="h-5 w-5 text-blue-400 mr-2" />
                    <h3 className="font-bold">Risk Assessment</h3>
                  </div>
                  <p className="text-sm text-gray-300">
                    Led comprehensive risk assessment for MakerDAO's new collateral types, resulting in safer parameter
                    settings and improved protocol stability.
                  </p>
                  <div className="mt-3 text-xs text-gray-400">MakerDAO • April 2023</div>
                </div>

                <div className="border border-[#333] rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <BarChart2 className="h-5 w-5 text-green-400 mr-2" />
                    <h3 className="font-bold">Treasury Optimization</h3>
                  </div>
                  <p className="text-sm text-gray-300">
                    Proposed and implemented a treasury diversification strategy for Aave, reducing risk exposure while
                    maintaining operational runway.
                  </p>
                  <div className="mt-3 text-xs text-gray-400">Aave • February 2023</div>
                </div>

                <div className="border border-[#333] rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <Activity className="h-5 w-5 text-purple-400 mr-2" />
                    <h3 className="font-bold">Parameter Optimization</h3>
                  </div>
                  <p className="text-sm text-gray-300">
                    Optimized Uniswap fee parameters across multiple pools, increasing protocol revenue while
                    maintaining competitive liquidity incentives.
                  </p>
                  <div className="mt-3 text-xs text-gray-400">Uniswap • January 2023</div>
                </div>

                <div className="border border-[#333] rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <Zap className="h-5 w-5 text-yellow-400 mr-2" />
                    <h3 className="font-bold">Governance Process Improvement</h3>
                  </div>
                  <p className="text-sm text-gray-300">
                    Redesigned the proposal submission process, reducing friction and increasing community participation
                    by 35%.
                  </p>
                  <div className="mt-3 text-xs text-gray-400">Multiple DAOs • Ongoing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
