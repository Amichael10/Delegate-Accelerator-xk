import { Search, Filter, ChevronDown, Star, CheckCircle, ArrowUpRight } from "lucide-react"
import MainLayout from "@/components/main-layout"
import Link from "next/link"
import Image from "next/image"

export default function MarketplacePage() {
  return (
    <MainLayout>
      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-1">Delegate Marketplace</h1>
            <p className="text-gray-400">Find accredited delegates with verified skills and expertise for your DAO</p>
          </div>
          <div className="flex space-x-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
              Become a Delegate
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-[#111] rounded-lg p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search delegates by name, skills, or DAO experience"
                className="bg-[#222] w-full pl-10 pr-4 py-2 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-600"
              />
            </div>
            <div className="flex space-x-2">
              <button className="flex items-center space-x-2 bg-[#222] hover:bg-[#333] px-4 py-2 rounded-md text-sm">
                <Filter className="h-4 w-4" />
                <span>Skills</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <button className="flex items-center space-x-2 bg-[#222] hover:bg-[#333] px-4 py-2 rounded-md text-sm">
                <Filter className="h-4 w-4" />
                <span>Experience</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <button className="flex items-center space-x-2 bg-[#222] hover:bg-[#333] px-4 py-2 rounded-md text-sm">
                <Filter className="h-4 w-4" />
                <span>DAOs</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Delegates */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Featured Delegates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredDelegates.map((delegate) => (
              <DelegateCard key={delegate.id} delegate={delegate} featured />
            ))}
          </div>
        </div>

        {/* All Delegates */}
        <div>
          <h2 className="text-xl font-semibold mb-4">All Delegates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {allDelegates.map((delegate) => (
              <DelegateCard key={delegate.id} delegate={delegate} />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

interface Delegate {
  id: number
  name: string
  avatar: string
  title: string
  rating: number
  verified: boolean
  skills: string[]
  daos: { name: string; logo: string }[]
  completedProposals: number
  successRate: number
  responseTime: string
  featured?: boolean
}

interface DelegateCardProps {
  delegate: Delegate
  featured?: boolean
}

function DelegateCard({ delegate, featured = false }: DelegateCardProps) {
  return (
    <div
      className={`bg-[#111] border ${
        featured ? "border-blue-500/30" : "border-[#333]"
      } rounded-lg overflow-hidden hover:border-blue-500/50 hover:bg-blue-900/10 transition-colors`}
    >
      {featured && <div className="bg-blue-900/30 text-blue-300 text-xs py-1 px-3 text-center">Featured Delegate</div>}
      <div className="p-5">
        <div className="flex items-center mb-4">
          <div className="relative">
            <Image
              src={delegate.avatar || "/placeholder.svg?height=60&width=60&query=avatar"}
              alt={delegate.name}
              width={60}
              height={60}
              className="rounded-full"
            />
            {delegate.verified && (
              <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-0.5">
                <CheckCircle className="h-4 w-4 text-white" />
              </div>
            )}
          </div>
          <div className="ml-3">
            <h3 className="font-bold text-lg">{delegate.name}</h3>
            <p className="text-gray-400 text-sm">{delegate.title}</p>
          </div>
          <div className="ml-auto flex items-center">
            <Star className="h-4 w-4 text-yellow-500 mr-1" />
            <span>{delegate.rating.toFixed(1)}</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex flex-wrap gap-1 mb-2">
            {delegate.skills.slice(0, 3).map((skill, index) => (
              <span key={index} className="bg-[#222] text-gray-300 text-xs px-2 py-1 rounded-md">
                {skill}
              </span>
            ))}
            {delegate.skills.length > 3 && (
              <span className="bg-[#222] text-gray-300 text-xs px-2 py-1 rounded-md">
                +{delegate.skills.length - 3} more
              </span>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-400">Active in:</span>
            <div className="flex -space-x-2">
              {delegate.daos.slice(0, 3).map((dao, index) => (
                <div key={index} className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                  <Image
                    src={dao.logo || "/placeholder.svg?height=24&width=24"}
                    alt={dao.name}
                    width={24}
                    height={24}
                  />
                </div>
              ))}
              {delegate.daos.length > 3 && (
                <div className="w-6 h-6 rounded-full bg-[#222] flex items-center justify-center text-xs text-gray-300">
                  +{delegate.daos.length - 3}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="bg-[#222] p-2 rounded-md text-center">
            <div className="text-sm font-medium">{delegate.completedProposals}</div>
            <div className="text-xs text-gray-400">Proposals</div>
          </div>
          <div className="bg-[#222] p-2 rounded-md text-center">
            <div className="text-sm font-medium">{delegate.successRate}%</div>
            <div className="text-xs text-gray-400">Success</div>
          </div>
          <div className="bg-[#222] p-2 rounded-md text-center">
            <div className="text-sm font-medium">{delegate.responseTime}</div>
            <div className="text-xs text-gray-400">Response</div>
          </div>
        </div>

        <div className="flex justify-between">
          <Link
            href={`/profile/${delegate.id}`}
            className="text-blue-400 hover:text-blue-300 text-sm flex items-center"
          >
            View Profile <ArrowUpRight className="h-3 w-3 ml-1" />
          </Link>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm">Contact</button>
        </div>
      </div>
    </div>
  )
}

const featuredDelegates: Delegate[] = [
  {
    id: 1,
    name: "Alex Thompson",
    avatar: "/confident-professional.png",
    title: "Governance Specialist",
    rating: 4.9,
    verified: true,
    skills: ["Proposal Writing", "Treasury Management", "Risk Assessment", "Voting Analysis"],
    daos: [
      { name: "MakerDAO", logo: "/abstract-letter-m.png" },
      { name: "Aave", logo: "/letter-a-abstract.png" },
      { name: "Uniswap", logo: "/abstract-blue-swirl.png" },
    ],
    completedProposals: 32,
    successRate: 94,
    responseTime: "< 24h",
    featured: true,
  },
  {
    id: 2,
    name: "Sophia Chen",
    avatar: "/confident-professional.png",
    title: "DeFi Governance Expert",
    rating: 4.8,
    verified: true,
    skills: ["DeFi Protocols", "Economic Analysis", "Tokenomics", "Community Building"],
    daos: [
      { name: "Compound", logo: "/abstract-letter-c.png" },
      { name: "Balancer", logo: "/abstract-blue-burst.png" },
      { name: "Lido", logo: "/Abstract Letter L.png" },
    ],
    completedProposals: 27,
    successRate: 89,
    responseTime: "< 12h",
    featured: true,
  },
  {
    id: 3,
    name: "Marcus Johnson",
    avatar: "/confident-businessman.png",
    title: "Protocol Governance Advisor",
    rating: 4.7,
    verified: true,
    skills: ["Smart Contract Auditing", "Parameter Optimization", "Governance Design", "Risk Management"],
    daos: [
      { name: "Optimism", logo: "/abstract-letter-o.png" },
      { name: "Arbitrum", logo: "/letter-a-abstract.png" },
      { name: "ENS", logo: "/letter-e-in-nature.png" },
    ],
    completedProposals: 19,
    successRate: 92,
    responseTime: "< 48h",
    featured: true,
  },
]

const allDelegates: Delegate[] = [
  {
    id: 4,
    name: "Elena Rodriguez",
    avatar: "/confident-professional.png",
    title: "Community Governance Lead",
    rating: 4.6,
    verified: true,
    skills: ["Community Management", "Proposal Coordination", "Governance Communication"],
    daos: [
      { name: "Gitcoin", logo: "/abstract-geometric-g.png" },
      { name: "Radicle", logo: "/Letter-R-Floral.png" },
    ],
    completedProposals: 15,
    successRate: 87,
    responseTime: "< 24h",
  },
  {
    id: 5,
    name: "David Kim",
    avatar: "/confident-asian-professional.png",
    title: "Treasury Specialist",
    rating: 4.5,
    verified: false,
    skills: ["Financial Analysis", "Treasury Diversification", "Risk Management"],
    daos: [
      { name: "Index Coop", logo: "/abstract-blue-swirl.png" },
      { name: "Yearn", logo: "/abstract-letter-y.png" },
    ],
    completedProposals: 12,
    successRate: 83,
    responseTime: "< 36h",
  },
  {
    id: 6,
    name: "Aisha Patel",
    avatar: "/confident-indian-architect.png",
    title: "Governance Researcher",
    rating: 4.4,
    verified: true,
    skills: ["Governance Research", "Data Analysis", "Proposal Evaluation"],
    daos: [
      { name: "Curve", logo: "/abstract-letter-c.png" },
      { name: "dYdX", logo: "/letter-d-floral.png" },
    ],
    completedProposals: 9,
    successRate: 78,
    responseTime: "< 48h",
  },
  {
    id: 7,
    name: "Thomas Wilson",
    avatar: "/thoughtful-bearded-professional.png",
    title: "Technical Governance Advisor",
    rating: 4.3,
    verified: false,
    skills: ["Smart Contract Analysis", "Technical Documentation", "Parameter Optimization"],
    daos: [
      { name: "Synthetix", logo: "/abstract-s-design.png" },
      { name: "Aave", logo: "/letter-a-abstract.png" },
    ],
    completedProposals: 7,
    successRate: 71,
    responseTime: "< 72h",
  },
  {
    id: 8,
    name: "Olivia Martinez",
    avatar: "/confident-latinx-leader.png",
    title: "Governance Operations",
    rating: 4.2,
    verified: true,
    skills: ["Process Optimization", "Governance Framework Design", "DAO Tooling"],
    daos: [
      { name: "Aragon", logo: "/letter-a-abstract.png" },
      { name: "Colony", logo: "/abstract-letter-c.png" },
    ],
    completedProposals: 5,
    successRate: 80,
    responseTime: "< 48h",
  },
  {
    id: 9,
    name: "James Lee",
    avatar: "/thoughtful-student.png",
    title: "DeFi Governance Specialist",
    rating: 4.1,
    verified: false,
    skills: ["DeFi Protocol Analysis", "Economic Modeling", "Parameter Optimization"],
    daos: [
      { name: "Compound", logo: "/abstract-letter-c.png" },
      { name: "Euler", logo: "/letter-e-in-nature.png" },
    ],
    completedProposals: 4,
    successRate: 75,
    responseTime: "< 36h",
  },
]
