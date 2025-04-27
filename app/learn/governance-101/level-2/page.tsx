import MainLayout from "@/components/main-layout"
import { ArrowLeft, Clock, Trophy, Users, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Level2Page() {
  return (
    <MainLayout>
      <div className="px-6 py-4">
        <div className="mb-6">
          <Link href="/learn" className="flex items-center text-gray-400 hover:text-white mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Back to courses</span>
          </Link>
          <h1 className="text-2xl font-bold">Level 2: Understanding the Proposal Lifecycle</h1>
          <div className="flex items-center mt-2 text-sm text-gray-400">
            <div className="flex items-center mr-4">
              <Clock className="h-4 w-4 mr-1" />
              <span>1 week</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>1,245 enrolled</span>
            </div>
            <div className="ml-4 px-2 py-0.5 bg-blue-900/30 text-blue-300 rounded text-xs">In Progress</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-[#111] rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Understanding the DAO Proposal Lifecycle</h2>

              <h3 className="text-lg font-bold mt-2 mb-3">Goal</h3>
              <p className="mb-4">
                Educate participants on the lifecycle of a proposal and how it can influence DAO decisions.
              </p>

              <h3 className="text-lg font-bold mt-6 mb-3">Introduction</h3>
              <p className="mb-4">
                Proposals are the foundation of DAO governance, acting as the primary mechanism through which decisions
                are made. In traditional organizations, decision-making is centralized in boards or executives, but DAOs
                distribute this power across their community of token holders. This decentralized structure allows
                anyone with voting rights to influence the direction of the organization, but it also introduces
                challenges related to coordination, engagement, and security.
              </p>

              <h4 className="font-bold mt-4 mb-2">Why Proposals Matter in DAO Governance:</h4>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <strong>Decentralization in Action</strong> - Unlike traditional organizations, DAOs rely on
                  collective decision-making, where governance proposals determine key aspects like fund allocation,
                  protocol upgrades, and incentive structures.
                </li>
                <li>
                  <strong>Transparency & Accountability</strong> - Proposals are public records that provide
                  transparency in governance and ensure that decisions are made through consensus rather than
                  closed-door agreements.
                </li>
                <li>
                  <strong>Empowering Community Participation</strong> - Well-structured governance allows members to
                  directly influence the DAO's future by submitting, discussing, and voting on proposals. Engaged
                  communities drive innovation and long-term sustainability.
                </li>
              </ul>

              <h3 className="text-lg font-bold mt-6 mb-3">Tasks</h3>

              <div className="bg-[#1a1a1a] p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Task 1: Watch the Video</h4>
                <p className="mb-2">
                  Watch "Proposal Lifecycle in DAOs" - A detailed walkthrough of the stages a proposal goes through from
                  inception to execution.
                </p>
                <div className="mt-3">
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center text-sm">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Watch Video
                  </a>
                </div>
              </div>

              <div className="bg-[#1a1a1a] p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Task 2: Complete the Questionnaire</h4>
                <p className="mb-2">
                  Complete a multiple-choice questionnaire to prove your understanding of the proposal lifecycle.
                </p>
                <div className="mt-3">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
                    Take Questionnaire
                  </button>
                </div>
              </div>

              <h3 className="text-lg font-bold mt-6 mb-3">The Stages of a DAO Proposal Lifecycle</h3>
              <p className="mb-4">A comprehensive breakdown of how a proposal moves from an idea to implementation:</p>

              <div className="border border-[#333] rounded-lg mb-6">
                <div className="p-4 border-b border-[#333] bg-[#1a1a1a]">
                  <h4 className="font-bold">Stage 1: The Idea Phase</h4>
                </div>
                <div className="p-4">
                  <p className="mb-3">
                    In this phase DAO members explore new ideas, propose improvements, and refine their thoughts before
                    drafting a formal proposal. This step is crucial for ensuring well-informed and community-supported
                    proposals that have a higher chance of success.
                  </p>
                  <p className="mb-3">
                    DAO proposals often start as informal discussions in various community spaces, such as:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>
                      <strong>Governance Forums</strong> (e.g., Discourse, Reddit, DAO-owned forums) - Long-form
                      discussions that allow structured debate and documentation of ideas.
                    </li>
                    <li>
                      <strong>Community Calls & AMAs</strong> - Regularly scheduled calls where members present ideas
                      and receive real-time feedback.
                    </li>
                    <li>
                      <strong>Discord & Telegram Chats</strong> - Quick discussions and brainstorming sessions within
                      DAO communities.
                    </li>
                    <li>
                      <strong>Twitter & Social Media</strong> - Open discussions among DAO participants and the broader
                      Web3 community.
                    </li>
                    <li>
                      <strong>Mirror.xyz & Notion Docs</strong> - Some DAOs use these platforms to document and present
                      governance ideas before formalizing them.
                    </li>
                  </ul>
                  <p>
                    The ideation stage is essential because a proposal that lacks proper discussion and refinement is
                    more likely to be rejected or ignored. Engaging early with the community increases the chances of a
                    well-structured, impactful proposal making it through the governance process.
                  </p>
                </div>
              </div>

              <div className="border border-[#333] rounded-lg mb-6">
                <div className="p-4 border-b border-[#333] bg-[#1a1a1a]">
                  <h4 className="font-bold">Stage 2: Drafting the Proposal</h4>
                </div>
                <div className="p-4">
                  <p className="mb-3">
                    Once an idea gains traction, it must be structured formally for submission. A well-written proposal
                    typically follows a standard format to ensure clarity and efficiency in the decision-making process.
                  </p>
                  <p className="mb-3">Standard proposal structure:</p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-[#1a1a1a] rounded-lg">
                      <thead>
                        <tr className="border-b border-[#333]">
                          <th className="px-4 py-2 text-left">Section</th>
                          <th className="px-4 py-2 text-left">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-[#333]">
                          <td className="px-4 py-2 font-medium">Abstract</td>
                          <td className="px-4 py-2">Two or three sentences that summarize the proposal.</td>
                        </tr>
                        <tr className="border-b border-[#333]">
                          <td className="px-4 py-2 font-medium">Motivation</td>
                          <td className="px-4 py-2">A statement on why the DAO should implement the proposal.</td>
                        </tr>
                        <tr className="border-b border-[#333]">
                          <td className="px-4 py-2 font-medium">Rationale</td>
                          <td className="px-4 py-2">An explanation on how the proposal is going to benefit the DAO.</td>
                        </tr>
                        <tr className="border-b border-[#333]">
                          <td className="px-4 py-2 font-medium">Key Terms (optional)</td>
                          <td className="px-4 py-2">Definitions of any terms that are unique to the proposal.</td>
                        </tr>
                        <tr className="border-b border-[#333]">
                          <td className="px-4 py-2 font-medium">Specifications</td>
                          <td className="px-4 py-2">Technical and operational details.</td>
                        </tr>
                        <tr className="border-b border-[#333]">
                          <td className="px-4 py-2 font-medium">Milestones and timeline</td>
                          <td className="px-4 py-2">Outline the specific steps to implement the proposal.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-medium">Overall Cost</td>
                          <td className="px-4 py-2">The total cost to implement the proposal.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4">
                    A well-drafted proposal is clear, detailed, and backed by evidence to increase its chances of
                    approval. If any section is vague or lacks justification, the proposal may face pushback or
                    rejection from the community.
                  </p>
                </div>
              </div>

              <p className="text-center text-gray-400 mb-6">... and more stages covered in the full lesson ...</p>

              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                <h4 className="font-bold mb-2">Guest Speaker</h4>
                <p className="mb-2">
                  Join us for an interview with a proposal author from MakerDAO who will share their experience
                  navigating the proposal lifecycle in one of the most established DAOs.
                </p>
                <div className="mt-3">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
                    Register for Session
                  </button>
                </div>
              </div>
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

              <h4 className="font-medium mb-3">Tasks</h4>
              <div className="space-y-2 mb-6">
                <div className="flex items-center p-3 bg-[#222] rounded-lg">
                  <input type="checkbox" className="h-4 w-4 mr-3" />
                  <span>Watch the video</span>
                </div>
                <div className="flex items-center p-3 bg-[#222] rounded-lg">
                  <input type="checkbox" className="h-4 w-4 mr-3" />
                  <span>Complete questionnaire</span>
                </div>
                <div className="flex items-center p-3 bg-[#222] rounded-lg">
                  <input type="checkbox" className="h-4 w-4 mr-3" />
                  <span>Attend guest speaker session</span>
                </div>
              </div>

              <h4 className="font-medium mt-6 mb-3">Your Rewards</h4>
              <div className="flex items-center justify-between p-3 bg-[#222] rounded-lg mb-2">
                <div className="flex items-center">
                  <Trophy className="h-5 w-5 text-yellow-500 mr-3" />
                  <span>Level 2 Badge</span>
                </div>
                <div className="px-2 py-0.5 bg-gray-800 text-gray-400 rounded text-xs">Locked</div>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#222] rounded-lg">
                <div className="flex items-center">
                  <div className="h-5 w-5 text-gray-500 mr-3 flex items-center justify-center">$</div>
                  <span>15 USDC Reward</span>
                </div>
                <div className="px-2 py-0.5 bg-gray-800 text-gray-400 rounded text-xs">Locked</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
