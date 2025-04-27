// Refactored Marketplace page with proper border radius
import Image from "next/image"
import { Card, CardContent, Badge, Avatar, Button } from "../../components/ui-components"

export default function MarketplacePage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Delegate Marketplace</h1>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            Filter
          </Button>
          <Button variant="outline" size="sm">
            Sort: Newest
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Delegate 1 */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Avatar src="/confident-businessman.png" alt="Alex Thompson" size="lg" className="mr-4" />
              <div>
                <h3 className="font-bold text-lg">Alex Thompson</h3>
                <p className="text-sm text-gray-400">Governance Specialist</p>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-300">
                Experienced in DeFi governance with a focus on risk management and treasury optimization.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-400 mb-2">Active in DAOs</h4>
              <div className="flex space-x-2">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <Image src="/aave-aave-logo.png" alt="Aave" width={32} height={32} />
                </div>
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <Image src="/maker-mkr-logo.png" alt="MakerDAO" width={32} height={32} />
                </div>
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <Image src="/optimism-ethereum-op-logo.png" alt="Optimism" width={32} height={32} />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-400 mb-2">Skills</h4>
              <div className="flex flex-wrap gap-2">
                <Badge>Risk Management</Badge>
                <Badge>Treasury</Badge>
                <Badge>DeFi</Badge>
                <Badge>Voting Strategy</Badge>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <span className="text-sm font-medium">Delegation Power</span>
                <div className="flex items-center">
                  <span className="text-lg font-bold mr-1">1.2M</span>
                  <span className="text-xs text-gray-400">votes</span>
                </div>
              </div>
              <Button>View Profile</Button>
            </div>
          </CardContent>
        </Card>

        {/* Delegate 2 */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Avatar src="/confident-professional.png" alt="Maya Rodriguez" size="lg" className="mr-4" />
              <div>
                <h3 className="font-bold text-lg">Maya Rodriguez</h3>
                <p className="text-sm text-gray-400">Protocol Researcher</p>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-300">
                Specializes in protocol economics and incentive design with a background in game theory.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-400 mb-2">Active in DAOs</h4>
              <div className="flex space-x-2">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <Image src="/uniswap-uni-logo.png" alt="Uniswap" width={32} height={32} />
                </div>
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <Image src="/ethereum-name-service-ens-logo.png" alt="ENS" width={32} height={32} />
                </div>
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <Image src="/lido-dao-ldo-logo.png" alt="Lido" width={32} height={32} />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-400 mb-2">Skills</h4>
              <div className="flex flex-wrap gap-2">
                <Badge>Tokenomics</Badge>
                <Badge>Research</Badge>
                <Badge>Economics</Badge>
                <Badge>Governance</Badge>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <span className="text-sm font-medium">Delegation Power</span>
                <div className="flex items-center">
                  <span className="text-lg font-bold mr-1">850K</span>
                  <span className="text-xs text-gray-400">votes</span>
                </div>
              </div>
              <Button>View Profile</Button>
            </div>
          </CardContent>
        </Card>

        {/* Delegate 3 */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Avatar src="/confident-asian-professional.png" alt="David Chen" size="lg" className="mr-4" />
              <div>
                <h3 className="font-bold text-lg">David Chen</h3>
                <p className="text-sm text-gray-400">Smart Contract Auditor</p>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-300">
                Security-focused delegate with expertise in smart contract auditing and protocol safety.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-400 mb-2">Active in DAOs</h4>
              <div className="flex space-x-2">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <Image src="/aave-aave-logo.png" alt="Aave" width={32} height={32} />
                </div>
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <Image src="/optimism-ethereum-op-logo.png" alt="Optimism" width={32} height={32} />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-400 mb-2">Skills</h4>
              <div className="flex flex-wrap gap-2">
                <Badge>Security</Badge>
                <Badge>Auditing</Badge>
                <Badge>Solidity</Badge>
                <Badge>Risk Assessment</Badge>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <span className="text-sm font-medium">Delegation Power</span>
                <div className="flex items-center">
                  <span className="text-lg font-bold mr-1">2.5M</span>
                  <span className="text-xs text-gray-400">votes</span>
                </div>
              </div>
              <Button>View Profile</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
