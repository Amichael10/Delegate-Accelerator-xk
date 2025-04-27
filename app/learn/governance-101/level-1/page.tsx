import MainLayout from "@/components/main-layout"
import { ArrowLeft, BookOpen, Clock, Trophy, Users, CheckCircle, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Level1Page() {
  return (
    <MainLayout>
      <div className="px-6 py-4">
        <div className="mb-6">
          <Link href="/learn" className="flex items-center text-gray-400 hover:text-white mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Back to courses</span>
          </Link>
          <h1 className="text-2xl font-bold">Level 1: Introduction to DAO Governance</h1>
          <div className="flex items-center mt-2 text-sm text-gray-400">
            <div className="flex items-center mr-4">
              <Clock className="h-4 w-4 mr-1" />
              <span>1 week</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>1,245 enrolled</span>
            </div>
            <div className="ml-4 px-2 py-0.5 bg-green-900/30 text-green-500 rounded text-xs flex items-center">
              <CheckCircle className="h-3 w-3 mr-1" />
              <span>Completed</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-[#111] rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Welcome to Level 1</h2>
              <p className="mb-4">
                Welcome to the first level of your Delegate Accelerator (D/Acc) journey! In this module, you'll dive
                into the basics of DAOs (Decentralized Autonomous Organizations), explore how they function, and learn
                about the governance processes that make them tick. Whether you're entirely new to the concept or
                looking to solidify your understanding, this is the perfect starting point.
              </p>

              <h3 className="text-lg font-bold mt-6 mb-3">Why This Matters</h3>
              <p className="mb-4">
                DAOs are reshaping how decisions are made in decentralized ecosystems, empowering communities to take
                charge of protocols, funding, and operations. By understanding the foundations of DAO governance, you'll
                unlock opportunities to actively participate in these revolutionary organizations—and maybe even help
                shape their futures.
              </p>

              <h3 className="text-lg font-bold mt-6 mb-3">What You'll Learn</h3>
              <p className="mb-2">By the end of this module, you'll:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Understand what DAOs are and why they matter.</li>
                <li>Recognize key governance structures and tools.</li>
                <li>Begin exploring real DAO proposals to see governance in action.</li>
              </ul>

              <h3 className="text-lg font-bold mt-6 mb-3">Step 1: Watch and Learn</h3>
              <p className="mb-3">Start by watching these short videos that explain DAOs in simple terms:</p>

              <div className="bg-[#1a1a1a] p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">What is a DAO?</h4>
                <p className="text-sm text-gray-400 mb-2">Duration: 4 minutes</p>
                <p className="mb-2">
                  Get a clear and engaging overview of DAOs, including what they are, why they exist, and how they
                  enable community-driven decision-making.
                </p>
                <div className="bg-[#111] p-3 rounded border border-[#333] text-sm text-gray-400">
                  <strong>Tip:</strong> Take notes on terms like "smart contracts" and "decentralization" as they'll
                  come up later!
                </div>
                <div className="mt-3">
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center text-sm">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Watch Video
                  </a>
                </div>
              </div>

              <div className="bg-[#1a1a1a] p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">How DAO Governance Works</h4>
                <p className="text-sm text-gray-400 mb-2">Duration: 6 minutes</p>
                <p className="mb-2">
                  Learn how DAOs make decisions, vote on proposals, and organize community participation. This video
                  provides practical examples of governance in action.
                </p>
                <div className="bg-[#111] p-3 rounded border border-[#333] text-sm text-gray-400">
                  <strong>Tip:</strong> Think about how decisions are made in groups you're part of—what's similar or
                  different?
                </div>
                <div className="mt-3">
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center text-sm">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Watch Video
                  </a>
                </div>
              </div>

              <div className="bg-[#1a1a1a] p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">DAO Governance Tools</h4>
                <p className="mb-2">
                  Explore the tools DAOs use, like Snapshot and Tally, to facilitate voting and manage community input.
                  These platforms are critical for real-world DAO operations.
                </p>
                <div className="bg-[#111] p-3 rounded border border-[#333] text-sm text-gray-400">
                  <strong>Tip:</strong> Bookmark these tools—they'll be useful when you engage with real DAOs.
                </div>
                <div className="mt-3 flex space-x-4">
                  <a
                    href="https://snapshot.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 flex items-center text-sm"
                  >
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Snapshot
                  </a>
                  <a
                    href="https://tally.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 flex items-center text-sm"
                  >
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Tally
                  </a>
                </div>
              </div>

              <h3 className="text-lg font-bold mt-6 mb-3">Step 2: Dive Deeper with Reading</h3>
              <p className="mb-3">Take a moment to explore these beginner-friendly resources:</p>

              <div className="bg-[#1a1a1a] p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">StableLab Blog</h4>
                <p className="mb-2">
                  Discover articles explaining the history, purpose, and future of DAOs. Start with "The Basics of DAO
                  Governance."
                </p>
                <div className="mt-3">
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center text-sm">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Read Articles
                  </a>
                </div>
              </div>

              <div className="bg-[#1a1a1a] p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Token Engineering Commons Resources</h4>
                <p className="mb-2">
                  This is a treasure trove of content on governance models and incentive structures. Read their module
                  on "Governance Fundamentals" to deepen your understanding.
                </p>
                <div className="mt-3">
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center text-sm">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Read Resources
                  </a>
                </div>
              </div>

              <h3 className="text-lg font-bold mt-6 mb-3">Step 3: Explore a DAO in Action</h3>
              <p className="mb-3">Choose one DAO from Snapshot or Tally and explore an active proposal.</p>
              <p className="mb-2">Questions to guide your exploration:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>What is the proposal's goal?</li>
                <li>Who is leading it?</li>
                <li>How are votes being counted (e.g., token-weighted voting)?</li>
                <li>What's the expected impact if it passes?</li>
                <li>
                  Would it be a positive or negative impact to the DAO, community, and underlying protocol? Are there
                  nuances to consider?
                </li>
              </ul>

              <div className="bg-[#111] p-3 rounded border border-[#333] text-sm text-gray-400 mb-6">
                <strong>Tip:</strong> Don't worry if it seems complex—this step is just about getting familiar with the
                process. You'll learn more as you progress!
              </div>

              <h3 className="text-lg font-bold mt-6 mb-3">Assessment</h3>
              <p className="mb-3">Ready to test your knowledge? Complete these two tasks:</p>

              <div className="bg-[#1a1a1a] p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Quiz (10 Questions)</h4>
                <p className="mb-2">Example Questions:</p>
                <ul className="list-disc pl-6 space-y-1 mb-2">
                  <li>Which tool is commonly used for DAO voting?</li>
                  <li>What is the primary purpose of a DAO?</li>
                </ul>
                <div className="mt-3">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
                    Take Quiz
                  </button>
                </div>
              </div>

              <div className="bg-[#1a1a1a] p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Reflection Exercise</h4>
                <p className="mb-2">Write a 200-word summary of the DAO proposal you explored. Be sure to include:</p>
                <ul className="list-disc pl-6 space-y-1 mb-2">
                  <li>What the proposal is about.</li>
                  <li>How the community is voting on it.</li>
                  <li>Why it's important to the DAO's mission.</li>
                </ul>
                <div className="mt-3">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
                    Submit Reflection
                  </button>
                </div>
              </div>

              <h3 className="text-lg font-bold mt-6 mb-3">Guest Speaker</h3>
              <p className="mb-4">
                Join an introductory session with Dennison from Tally. They'll share their experience in DAO governance
                and answer beginner questions. Details will be sent via email.
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-[#111] rounded-lg p-6 mb-6 sticky top-4">
              <h3 className="font-bold mb-4">Course Progress</h3>
              <div className="w-full bg-[#222] rounded-full h-2 mb-4">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                  style={{ width: "28%" }}
                ></div>
              </div>
              <div className="text-sm text-gray-400 mb-6">2 of 7 modules completed</div>

              <h4 className="font-medium mb-3">Next Steps</h4>
              <Link
                href="/learn/governance-101/level-2"
                className="flex items-center justify-between p-3 bg-blue-900/20 border border-blue-500/30 rounded-lg hover:bg-blue-900/30 mb-3"
              >
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 text-blue-400 mr-3" />
                  <span>Continue to Level 2</span>
                </div>
                <ArrowLeft className="h-4 w-4 rotate-180" />
              </Link>

              <h4 className="font-medium mt-6 mb-3">Your Rewards</h4>
              <div className="flex items-center justify-between p-3 bg-[#222] rounded-lg mb-2">
                <div className="flex items-center">
                  <Trophy className="h-5 w-5 text-yellow-500 mr-3" />
                  <span>Level 1 Badge</span>
                </div>
                <div className="px-2 py-0.5 bg-green-900/30 text-green-500 rounded text-xs">Earned</div>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#222] rounded-lg">
                <div className="flex items-center">
                  <div className="h-5 w-5 text-green-500 mr-3 flex items-center justify-center">$</div>
                  <span>15 USDC Reward</span>
                </div>
                <div className="px-2 py-0.5 bg-green-900/30 text-green-500 rounded text-xs">Claimed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
