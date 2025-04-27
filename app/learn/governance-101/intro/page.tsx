import MainLayout from "@/components/main-layout"
import { ArrowLeft, BookOpen, Clock, Trophy, Users, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function IntroPage() {
  return (
    <MainLayout>
      <div className="px-6 py-4">
        <div className="mb-6">
          <Link href="/learn" className="flex items-center text-gray-400 hover:text-white mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Back to courses</span>
          </Link>
          <h1 className="text-2xl font-bold">Introduction to D/Acc</h1>
          <div className="flex items-center mt-2 text-sm text-gray-400">
            <div className="flex items-center mr-4">
              <Clock className="h-4 w-4 mr-1" />
              <span>15 minutes</span>
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
              <h2 className="text-xl font-bold mb-4">Introduction</h2>
              <p className="mb-4">
                Introducing Delegate Accelerate (D/Acc), StableLabʼs flagship accelerator program designed to cultivate
                and deploy skilled delegates for DAOs. Our comprehensive program trains new and existing delegates,
                equipping them with the expertise necessary to drive meaningful contributions in the decentralized
                governance space.
              </p>
              <h3 className="text-lg font-bold mt-6 mb-3">What We Offer:</h3>
              <p className="mb-4">
                Delegate Accelerate (D/Acc) provides a structured pathway to becoming a professional delegate through
                focused intake cohorts, ensuring targeted and effective training. Our program includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <strong>Practical Tasks</strong> - Hands-on activities that simulate real-world governance challenges,
                  such as:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Drafting and proposing governance frameworks.</li>
                    <li>Participating in mock voting scenarios.</li>
                    <li>Analyzing and providing feedback on governance proposals.</li>
                    <li>Leading community discussions and forums.</li>
                  </ul>
                </li>
                <li>
                  <strong>Gamified Quests</strong> - Engaging, interactive missions that reinforce learning and skill
                  application.
                </li>
                <li>
                  <strong>Assessments</strong> - Rigorous evaluations to ensure delegates meet the high standards
                  required by DAOs and delegators.
                </li>
                <li>
                  <strong>Discovery Campaigns</strong> - Tailored initiatives that help delegates discover DAOs that
                  align with their interests and skills, and facilitate their integration into these organizations.
                </li>
              </ul>
              <h3 className="text-lg font-bold mt-6 mb-3">Delegate Marketplace:</h3>
              <p className="mb-4">
                Showcasing accredited delegates with their competencies, allowing delegators to make informed
                selections. This marketplace ensures that accredited delegates are registered, committed to specific
                service agreements, and easily accessible to professional entities such as investors. By developing a
                class of delegates validated from multiple perspectives and with additional categorizations, this
                marketplace accelerates the development of highly qualified and discoverable delegates for partners,
                investors, and other participants.
              </p>
              <h3 className="text-lg font-bold mt-6 mb-3">Outcome:</h3>
              <p className="mb-4">
                Graduates of Delegate Accelerate (D/Acc) emerge with a robust, verifiable competency graph that
                showcases their credentials. Our delegate marketplace allows DAOs to easily identify and recruit
                accredited delegates with proven capabilities, ensuring they can contribute effectively and earn
                appropriate compensation.
              </p>
              <h3 className="text-lg font-bold mt-6 mb-3">Why StableLab?</h3>
              <p className="mb-4">
                StableLab has been at the forefront of the professional delegation landscape, pioneering new standards
                and expanding across various verticals. Our deep expertise positions us uniquely to unify the delegate
                ecosystem and create a continuous flywheel of high-quality delegates. By leveraging our platform, DAOs
                can access a reliable pool of qualified delegates, driving better governance and achieving their
                objectives more effectively.
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
                  <span>Introduction Badge</span>
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
