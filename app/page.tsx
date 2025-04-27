import type React from "react"
import { Search, Filter, ChevronDown, Users, ArrowUpRight, Zap, Shield, Layers } from "lucide-react"
import MainLayout from "@/components/main-layout"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, Badge, Avatar, ProgressBar } from "../components/ui-components"

export default function DiscoveryPage() {
  return (
    <MainLayout>
      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-1">Discovery Campaigns</h1>
            <p className="text-gray-400">Find DAOs that align with your interests and skills</p>
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
                placeholder="Search DAOs by name, category, or technology"
                className="bg-[#222] w-full pl-10 pr-4 py-2 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-600"
              />
            </div>
            <div className="flex space-x-2">
              <button className="flex items-center space-x-2 bg-[#222] hover:bg-[#333] px-4 py-2 rounded-md text-sm">
                <Filter className="h-4 w-4" />
                <span>Category</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <button className="flex items-center space-x-2 bg-[#222] hover:bg-[#333] px-4 py-2 rounded-md text-sm">
                <Filter className="h-4 w-4" />
                <span>Technology</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <button className="flex items-center space-x-2 bg-[#222] hover:bg-[#333] px-4 py-2 rounded-md text-sm">
                <Filter className="h-4 w-4" />
                <span>Size</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Campaigns */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Featured Campaigns</h2>
          <section className="mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* MakerDAO Campaign */}
              <Card>
                <div className="relative h-40 w-full">
                  <Image
                    src="/maker-dao-banner.webp"
                    alt="MakerDAO Campaign"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent>
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                      <Image src="/maker-mkr-logo.png" alt="MakerDAO" width={32} height={32} />
                    </div>
                    <div>
                      <h3 className="font-bold">MakerDAO</h3>
                      <p className="text-xs text-gray-400">Treasury Management</p>
                    </div>
                    <Badge variant="info" className="ml-auto">
                      Active
                    </Badge>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Treasury Diversification Strategy</h4>
                  <p className="text-sm text-gray-300 mb-4">
                    Help shape MakerDAO's treasury management strategy for long-term sustainability.
                  </p>
                  <div className="flex justify-between text-xs text-gray-400 mb-2">
                    <span>Progress</span>
                    <span>65%</span>
                  </div>
                  <ProgressBar value={65} className="mb-4" />
                  <div className="flex justify-between items-center">
                    <div className="flex -space-x-2">
                      <Avatar src="/confident-businessman.png" alt="User" size="sm" />
                      <Avatar src="/confident-professional.png" alt="User" size="sm" />
                      <Avatar src="/confident-asian-professional.png" alt="User" size="sm" />
                      <div className="w-6 h-6 rounded-full bg-[#222] flex items-center justify-center text-xs">+5</div>
                    </div>
                    <span className="text-xs text-gray-400">8 days left</span>
                  </div>
                </CardContent>
              </Card>

              {/* Lido DAO Campaign */}
              <Card>
                <div className="relative h-40 w-full">
                  <Image
                    src="/lido-dao-banner.webp"
                    alt="Lido DAO Campaign"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent>
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                      <Image src="/lido-dao-ldo-logo.png" alt="Lido DAO" width={32} height={32} />
                    </div>
                    <div>
                      <h3 className="font-bold">Lido DAO</h3>
                      <p className="text-xs text-gray-400">Staking Protocol</p>
                    </div>
                    <Badge variant="success" className="ml-auto">
                      New
                    </Badge>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Staking Rewards Distribution</h4>
                  <p className="text-sm text-gray-300 mb-4">
                    Participate in designing the next phase of Lido's staking rewards distribution model.
                  </p>
                  <div className="flex justify-between text-xs text-gray-400 mb-2">
                    <span>Progress</span>
                    <span>40%</span>
                  </div>
                  <ProgressBar value={40} className="mb-4" />
                  <div className="flex justify-between items-center">
                    <div className="flex -space-x-2">
                      <Avatar src="/confident-indian-architect.png" alt="User" size="sm" />
                      <Avatar src="/thoughtful-bearded-professional.png" alt="User" size="sm" />
                      <div className="w-6 h-6 rounded-full bg-[#222] flex items-center justify-center text-xs">+3</div>
                    </div>
                    <span className="text-xs text-gray-400">12 days left</span>
                  </div>
                </CardContent>
              </Card>

              {/* Aave Campaign */}
              <Card>
                <div className="relative h-40 w-full bg-gradient-to-r from-purple-900 to-blue-900 rounded-t-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image src="/aave-aave-logo.png" alt="Aave" width={80} height={80} className="rounded-full" />
                  </div>
                </div>
                <CardContent>
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                      <Image src="/aave-aave-logo.png" alt="Aave" width={32} height={32} />
                    </div>
                    <div>
                      <h3 className="font-bold">Aave</h3>
                      <p className="text-xs text-gray-400">Lending Protocol</p>
                    </div>
                    <Badge variant="warning" className="ml-auto">
                      Trending
                    </Badge>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Risk Parameter Optimization</h4>
                  <p className="text-sm text-gray-300 mb-4">
                    Help analyze and optimize risk parameters for Aave's lending markets.
                  </p>
                  <div className="flex justify-between text-xs text-gray-400 mb-2">
                    <span>Progress</span>
                    <span>75%</span>
                  </div>
                  <ProgressBar value={75} className="mb-4" />
                  <div className="flex justify-between items-center">
                    <div className="flex -space-x-2">
                      <Avatar src="/confident-latinx-leader.png" alt="User" size="sm" />
                      <Avatar src="/thoughtful-student.png" alt="User" size="sm" />
                      <Avatar src="/confident-professional.png" alt="User" size="sm" />
                      <div className="w-6 h-6 rounded-full bg-[#222] flex items-center justify-center text-xs">+7</div>
                    </div>
                    <span className="text-xs text-gray-400">5 days left</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>

        {/* DAO Categories */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Explore by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <CategoryCard
              title="DeFi Protocols"
              icon={<Layers className="h-6 w-6 text-blue-400" />}
              count={24}
              color="from-blue-900 to-blue-800"
            />
            <CategoryCard
              title="Governance DAOs"
              icon={<Shield className="h-6 w-6 text-purple-400" />}
              count={18}
              color="from-purple-900 to-purple-800"
            />
            <CategoryCard
              title="Social DAOs"
              icon={<Users className="h-6 w-6 text-green-400" />}
              count={12}
              color="from-green-900 to-green-800"
            />
            <CategoryCard
              title="Service DAOs"
              icon={<Zap className="h-6 w-6 text-yellow-400" />}
              count={9}
              color="from-yellow-900 to-yellow-800"
            />
          </div>
        </div>

        {/* All DAOs */}
        <div>
          <h2 className="text-xl font-semibold mb-4">All DAOs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {allDaos.map((dao) => (
              <DaoCard key={dao.id} dao={dao} />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

interface Campaign {
  id: number
  title: string
  description: string
  dao: {
    name: string
    logo: string
  }
  image: string
  deadline: string
  positions: number
  skills: string[]
  rewards: string
}

function FeaturedCampaignCard({ campaign }: { campaign: Campaign }) {
  return (
    <div className="bg-[#111] border border-[#333] rounded-lg overflow-hidden hover:border-blue-500/50 hover:bg-blue-900/10 transition-colors">
      <div className="h-40 relative">
        <Image
          src={campaign.image || "/placeholder.svg?height=160&width=600&query=abstract digital pattern"}
          alt={campaign.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 flex items-center">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <Image
              src={campaign.dao.logo || "/placeholder.svg?height=40&width=40"}
              alt={campaign.dao.name}
              width={24}
              height={24}
            />
          </div>
          <div className="ml-3">
            <div className="text-sm font-medium">{campaign.dao.name}</div>
            <div className="text-xs text-gray-300">Featured Campaign</div>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg mb-2">{campaign.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{campaign.description}</p>

        <div className="flex flex-wrap gap-1 mb-4">
          {campaign.skills.map((skill, index) => (
            <span key={index} className="bg-[#222] text-gray-300 text-xs px-2 py-1 rounded-md">
              {skill}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="bg-[#222] p-2 rounded-md text-center">
            <div className="text-sm font-medium">{campaign.positions}</div>
            <div className="text-xs text-gray-400">Positions</div>
          </div>
          <div className="bg-[#222] p-2 rounded-md text-center">
            <div className="text-sm font-medium">{campaign.rewards}</div>
            <div className="text-xs text-gray-400">Rewards</div>
          </div>
          <div className="bg-[#222] p-2 rounded-md text-center">
            <div className="text-sm font-medium">{campaign.deadline}</div>
            <div className="text-xs text-gray-400">Deadline</div>
          </div>
        </div>

        <div className="flex justify-between">
          <Link href="#" className="text-blue-400 hover:text-blue-300 text-sm flex items-center">
            Learn More <ArrowUpRight className="h-3 w-3 ml-1" />
          </Link>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm">Apply</button>
        </div>
      </div>
    </div>
  )
}

interface CategoryCardProps {
  title: string
  icon: React.ReactNode
  count: number
  color: string
}

function CategoryCard({ title, icon, count, color }: CategoryCardProps) {
  return (
    <div className={`bg-gradient-to-br ${color} rounded-lg p-4 hover:opacity-90 transition-opacity cursor-pointer`}>
      <div className="flex flex-col h-full justify-between">
        <div className="p-2 bg-black/20 rounded-lg w-fit mb-4">{icon}</div>
        <div>
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm text-gray-300">{count} DAOs</p>
        </div>
      </div>
    </div>
  )
}

interface Dao {
  id: number
  name: string
  logo: string
  category: string
  description: string
  members: number
  treasury: string
  skills: string[]
  openPositions: number
}

function DaoCard({ dao }: { dao: Dao }) {
  return (
    <div className="bg-[#111] border border-[#333] rounded-lg overflow-hidden hover:border-blue-500/50 hover:bg-blue-900/10 transition-colors">
      <div className="p-5">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
            <Image src={dao.logo || "/placeholder.svg?height=48&width=48"} alt={dao.name} width={32} height={32} />
          </div>
          <div className="ml-3">
            <h3 className="font-bold text-lg">{dao.name}</h3>
            <p className="text-gray-400 text-sm">{dao.category}</p>
          </div>
        </div>

        <p className="text-gray-300 text-sm mb-4">{dao.description}</p>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-[#222] p-2 rounded-md text-center">
            <div className="text-sm font-medium">{dao.members.toLocaleString()}</div>
            <div className="text-xs text-gray-400">Members</div>
          </div>
          <div className="bg-[#222] p-2 rounded-md text-center">
            <div className="text-sm font-medium">{dao.treasury}</div>
            <div className="text-xs text-gray-400">Treasury</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {dao.skills.slice(0, 3).map((skill, index) => (
            <span key={index} className="bg-[#222] text-gray-300 text-xs px-2 py-1 rounded-md">
              {skill}
            </span>
          ))}
          {dao.skills.length > 3 && (
            <span className="bg-[#222] text-gray-300 text-xs px-2 py-1 rounded-md">+{dao.skills.length - 3} more</span>
          )}
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm">
            <span className="text-blue-400">{dao.openPositions}</span> open positions
          </div>
          <Link href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm">
            Explore
          </Link>
        </div>
      </div>
    </div>
  )
}

const featuredCampaigns: Campaign[] = [
  {
    id: 1,
    title: "Governance Delegates Program",
    description: "Join MakerDAO as a governance delegate and help shape the future of decentralized finance.",
    dao: {
      name: "MakerDAO",
      logo: "/maker-mkr-logo.png",
    },
    image: "/maker-dao-banner.webp",
    deadline: "2 weeks",
    positions: 5,
    skills: ["Governance", "DeFi Knowledge", "Risk Assessment"],
    rewards: "$5K/month",
  },
  {
    id: 2,
    title: "Technical Committee Members",
    description: "Lido DAO is seeking technical committee members to evaluate protocol upgrades and improvements.",
    dao: {
      name: "Lido DAO",
      logo: "/lido-dao-ldo-logo.png",
    },
    image: "/lido-dao-banner.webp",
    deadline: "3 weeks",
    positions: 3,
    skills: ["Technical Analysis", "Staking", "Security"],
    rewards: "$4K/month",
  },
]

const allDaos: Dao[] = [
  {
    id: 1,
    name: "MakerDAO",
    logo: "/maker-mkr-logo.png",
    category: "DeFi Protocol",
    description: "Decentralized credit platform that supports Dai, a stablecoin whose value is pegged to USD.",
    members: 65000,
    treasury: "$1.2B",
    skills: ["Governance", "Risk Assessment", "DeFi", "Treasury Management"],
    openPositions: 5,
  },
  {
    id: 2,
    name: "Lido DAO",
    logo: "/lido-dao-ldo-logo.png",
    category: "Staking Protocol",
    description: "Liquid staking solution for ETH 2.0 that lets users stake their ETH without locking assets.",
    members: 42000,
    treasury: "$850M",
    skills: ["Staking", "Technical Analysis", "Security", "Tokenomics"],
    openPositions: 3,
  },
  {
    id: 3,
    name: "Aave",
    logo: "/aave-aave-logo.png",
    category: "Lending Protocol",
    description: "Open source and non-custodial liquidity protocol for earning interest and borrowing assets.",
    members: 38000,
    treasury: "$750M",
    skills: ["Risk Management", "DeFi", "Parameter Optimization"],
    openPositions: 4,
  },
  {
    id: 4,
    name: "Uniswap",
    logo: "/uniswap-uni-logo.png",
    category: "DEX Protocol",
    description: "Decentralized trading protocol, known for its role in facilitating automated trading of DeFi tokens.",
    members: 72000,
    treasury: "$1.8B",
    skills: ["AMM Design", "Fee Structure", "Liquidity Management"],
    openPositions: 2,
  },
  {
    id: 5,
    name: "Optimism",
    logo: "/optimism-ethereum-op-logo.png",
    category: "L2 Solution",
    description: "Layer 2 scaling solution for Ethereum that utilizes optimistic rollups.",
    members: 28000,
    treasury: "$450M",
    skills: ["L2 Technology", "Governance", "Public Goods Funding"],
    openPositions: 6,
  },
  {
    id: 6,
    name: "ENS",
    logo: "/ethereum-name-service-ens-logo.png",
    category: "Naming Service",
    description: "Decentralized naming service for web3, providing human-readable names to blockchain addresses.",
    members: 45000,
    treasury: "$320M",
    skills: ["Domain Management", "Community Building", "Technical Integration"],
    openPositions: 3,
  },
]
