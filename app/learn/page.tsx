import type React from "react"
import {
  BookOpen,
  ChevronRight,
  CheckCircle,
  Lock,
  Trophy,
  Star,
  Clock,
  Users,
  FileText,
  BarChart2,
  Shield,
} from "lucide-react"
import MainLayout from "@/components/main-layout"
import Link from "next/link"
import Image from "next/image"

export default function LearnPage() {
  return (
    <MainLayout>
      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Learn</h1>
          <div className="flex items-center space-x-2">
            <button className="bg-[#222] hover:bg-[#333] px-4 py-2 rounded-md text-sm flex items-center">
              <Users className="h-4 w-4 mr-2" />
              <span>My Progress</span>
            </button>
            <button className="bg-[#222] hover:bg-[#333] px-4 py-2 rounded-md text-sm flex items-center">
              <FileText className="h-4 w-4 mr-2" />
              <span>Certificates</span>
            </button>
          </div>
        </div>

        {/* Mandatory Course */}
        <div className="mb-10">
          <div className="flex items-center mb-4">
            <h2 className="text-xl font-semibold">Mandatory Course</h2>
            <div className="ml-3 px-2 py-0.5 bg-blue-900/30 text-blue-300 rounded text-xs">Required</div>
          </div>

          <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-xl font-bold mb-1">Governance 101</h3>
                  <p className="text-gray-300 mb-3">
                    Master the fundamentals of DAO governance and become an effective delegate
                  </p>
                  <div className="flex items-center text-sm text-gray-400">
                    <div className="flex items-center mr-4">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>8 weeks</span>
                    </div>
                    <div className="flex items-center mr-4">
                      <BookOpen className="h-4 w-4 mr-1" />
                      <span>7 lessons</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>1,245 enrolled</span>
                    </div>
                  </div>
                </div>
                <div className="ml-auto">
                  <div className="text-right mb-2">
                    <div className="text-sm text-gray-400">Your progress</div>
                    <div className="text-lg font-bold">2/7 completed</div>
                  </div>
                  <div className="w-full bg-[#222] rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      style={{ width: "28%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Modules */}
            <div className="bg-[#111] p-6">
              <h4 className="text-lg font-medium mb-4">Course Modules</h4>
              <div className="space-y-4">
                {/* Intro Module */}
                <CourseModule
                  title="Introduction to D/Acc"
                  description="Introducing Delegate Accelerate (D/Acc), StableLabʼs flagship accelerator program designed to cultivate and deploy skilled delegates for DAOs."
                  status="completed"
                  href="/learn/governance-101/intro"
                  icon={<Star className="h-5 w-5" />}
                />

                {/* Level 1 */}
                <CourseModule
                  title="Level 1: Introduction to DAO Governance"
                  description="Dive into the basics of DAOs, explore how they function, and learn about the governance processes that make them tick."
                  status="completed"
                  href="/learn/governance-101/level-1"
                  icon={<BookOpen className="h-5 w-5" />}
                />

                {/* Level 2 */}
                <CourseModule
                  title="Level 2: Understanding the Proposal Lifecycle"
                  description="Learn about the lifecycle of a proposal and how it can influence DAO decisions."
                  status="in-progress"
                  href="/learn/governance-101/level-2"
                  icon={<FileText className="h-5 w-5" />}
                />

                {/* Level 3 */}
                <CourseModule
                  title="Level 3: Analyzing Proposals"
                  description="Learn how to critically analyze DAO proposals and understand their implications."
                  status="locked"
                  href="/learn/governance-101/level-3"
                  icon={<Shield className="h-5 w-5" />}
                />

                {/* Level 4 */}
                <CourseModule
                  title="Level 4: Evaluating Risks and Benefits"
                  description="Understand how to evaluate the risks and benefits of proposals and make informed decisions."
                  status="locked"
                  href="/learn/governance-101/level-4"
                  icon={<BarChart2 className="h-5 w-5" />}
                />

                {/* Level 5 */}
                <CourseModule
                  title="Level 5: Writing and Submitting Proposals"
                  description="Learn how to draft and submit quality proposals that have a higher chance of being approved."
                  status="locked"
                  href="/learn/governance-101/level-5"
                  icon={<FileText className="h-5 w-5" />}
                />

                {/* Level 6 */}
                <CourseModule
                  title="Level 6: Power Dynamics and Strategic Governance"
                  description="Understand the complexities of power dynamics and strategic decision-making in DAOs."
                  status="locked"
                  href="/learn/governance-101/level-6"
                  icon={<Users className="h-5 w-5" />}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Ecosystem Partner Courses */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Ecosystem Partner Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Lido DAO Course */}
            <PartnerCourseCard
              title="Lido DAO Governance"
              description="Learn about Lido's liquid staking protocol and its unique governance model."
              logo="/images/lido-logo.png"
              modules={4}
              duration="3 weeks"
              status="coming-soon"
            />

            {/* Scroll Protocol Course */}
            <PartnerCourseCard
              title="Scroll Protocol"
              description="Explore Scroll's zkEVM technology and governance structure."
              logo="/images/scroll-logo.png"
              modules={5}
              duration="4 weeks"
              status="coming-soon"
            />
          </div>
        </div>

        {/* Upcoming Courses */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Upcoming Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <UpcomingCourseCard
              title="Advanced Treasury Management"
              description="Learn strategies for effective DAO treasury management and optimization."
              icon={<BarChart2 className="h-6 w-6 text-green-500" />}
              date="June 2025"
            />
            <UpcomingCourseCard
              title="Legal Frameworks for DAOs"
              description="Understand the legal considerations and frameworks for DAOs across jurisdictions."
              icon={<Shield className="h-6 w-6 text-blue-500" />}
              date="July 2025"
            />
            <UpcomingCourseCard
              title="Community Building for DAOs"
              description="Strategies for building and maintaining engaged DAO communities."
              icon={<Users className="h-6 w-6 text-purple-500" />}
              date="August 2025"
            />
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

type CourseModuleStatus = "completed" | "in-progress" | "locked"

function CourseModule({
  title,
  description,
  status,
  href,
  icon,
}: {
  title: string
  description: string
  status: CourseModuleStatus
  href: string
  icon: React.ReactNode
}) {
  return (
    <div
      className={`border border-[#333] rounded-lg p-4 ${
        status === "locked" ? "opacity-70" : "hover:border-blue-500/50 hover:bg-blue-900/10"
      }`}
    >
      <div className="flex items-start">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
            status === "completed"
              ? "bg-green-900/30 text-green-500"
              : status === "in-progress"
                ? "bg-blue-900/30 text-blue-500"
                : "bg-gray-800 text-gray-500"
          }`}
        >
          {icon}
        </div>
        <div className="ml-4 flex-1">
          <div className="flex items-center">
            <h5 className="font-medium">{title}</h5>
            {status === "completed" && <CheckCircle className="h-4 w-4 text-green-500 ml-2" />}
            {status === "in-progress" && (
              <div className="ml-2 px-2 py-0.5 bg-blue-900/30 text-blue-300 rounded text-xs">In Progress</div>
            )}
            {status === "locked" && <Lock className="h-4 w-4 text-gray-500 ml-2" />}
          </div>
          <p className="text-sm text-gray-400 mt-1">{description}</p>
        </div>
        {status !== "locked" ? (
          <Link href={href} className="ml-2 p-2 rounded-full hover:bg-[#222] flex items-center justify-center">
            <ChevronRight className="h-5 w-5" />
          </Link>
        ) : (
          <div className="ml-2 p-2 opacity-50">
            <ChevronRight className="h-5 w-5" />
          </div>
        )}
      </div>
    </div>
  )
}

function PartnerCourseCard({
  title,
  description,
  logo,
  modules,
  duration,
  status,
}: {
  title: string
  description: string
  logo: string
  modules: number
  duration: string
  status: "available" | "coming-soon"
}) {
  return (
    <div className="border border-[#333] rounded-lg p-6 hover:border-blue-500/50 hover:bg-blue-900/10">
      <div className="flex items-start">
        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
          <Image src={logo || "/placeholder.svg"} alt={title} width={32} height={32} />
        </div>
        <div className="ml-4 flex-1">
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm text-gray-400 mt-1">{description}</p>
          <div className="flex items-center mt-3 text-sm text-gray-400">
            <div className="flex items-center mr-4">
              <BookOpen className="h-4 w-4 mr-1" />
              <span>{modules} modules</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{duration}</span>
            </div>
          </div>
        </div>
        <div className="ml-2">
          {status === "available" ? (
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">Enroll</button>
          ) : (
            <div className="px-3 py-1.5 bg-[#222] text-gray-400 rounded-md text-sm">Coming Soon</div>
          )}
        </div>
      </div>
    </div>
  )
}

function UpcomingCourseCard({
  title,
  description,
  icon,
  date,
}: {
  title: string
  description: string
  icon: React.ReactNode
  date: string
}) {
  return (
    <div className="border border-[#333] rounded-lg p-6 hover:border-gray-700">
      <div className="w-12 h-12 rounded-lg bg-[#222] flex items-center justify-center mb-4">{icon}</div>
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-400 mb-4">{description}</p>
      <div className="flex items-center text-sm text-gray-500">
        <Clock className="h-4 w-4 mr-1" />
        <span>Coming {date}</span>
      </div>
    </div>
  )
}
