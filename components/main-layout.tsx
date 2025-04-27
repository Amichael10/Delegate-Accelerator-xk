"use client"

import type React from "react"
import { Search, BookOpen, Map, Medal, BarChart2, Trophy, Zap, Cpu, Users, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [showSignInModal, setShowSignInModal] = useState(false)

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Left Sidebar */}
      <div className="w-[200px] bg-[#111111] border-r border-[#333] flex flex-col">
        <div className="p-6">
          <div className="font-bold text-xl">D/Acc</div>
          <div className="text-xs text-gray-400">Delegate Accelerator</div>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          <SidebarItem icon="search" label="Discovery" href="/" active={pathname === "/"} />
          <SidebarItem icon="book" label="Learn" href="/learn" active={pathname === "/learn"} />
          <SidebarItem icon="map" label="Quest" href="/quest" active={pathname === "/quest"} />
          <SidebarItem icon="medal" label="Achievement" href="/achievement" active={pathname === "/achievement"} />
          <SidebarItem icon="chart" label="Leaderboard" href="/leaderboard" active={pathname === "/leaderboard"} />
          <SidebarItem icon="trophy" label="Rewards" href="/rewards" active={pathname === "/rewards"} />
          <SidebarItem icon="users" label="Marketplace" href="/marketplace" active={pathname === "/marketplace"} />
        </nav>

        <div className="px-6 py-4 mt-auto">
          <div className="text-sm text-gray-400 mb-4">
            <h3 className="font-medium mb-2">Grow with D/Acc</h3>
            <p className="text-xs">Create impact onchain and earn</p>
          </div>

          <div className="space-y-2">
            <SidebarItem icon="zap" label="Launch Activation" href="/activation" active={pathname === "/activation"} />
            <SidebarItem icon="cpu" label="Intel" href="/intel" active={pathname === "/intel"} />
          </div>

          <div className="flex text-xs text-gray-500 mt-6 space-x-4">
            <Link href="#" className="hover:text-gray-300">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Search Bar */}
        <div className="p-4 flex items-center border-b border-[#333]">
          <div className="relative w-[300px]">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="bg-[#222222] w-full pl-10 pr-4 py-2 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-gray-600"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-xs text-gray-500">Press /</span>
            </div>
          </div>

          <div className="ml-auto flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-[#333] flex items-center justify-center text-xs">
                <Trophy className="h-3 w-3 text-yellow-500" />
              </div>
              <span className="text-sm">Delegate Level 2</span>
            </div>
            <button
              className="bg-blue-600 text-white px-4 py-1.5 rounded-md text-sm"
              onClick={() => setShowSignInModal(true)}
            >
              Sign in
            </button>
          </div>
        </div>

        {children}
      </div>

      {/* Sign In Modal */}
      {showSignInModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#111] rounded-lg w-full max-w-md p-6 relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              onClick={() => setShowSignInModal(false)}
            >
              <X className="h-5 w-5" />
            </button>

            <h2 className="text-xl font-bold mb-6">Sign in to D/Acc</h2>

            <div className="space-y-4 mb-6">
              <button className="w-full bg-[#222] hover:bg-[#333] py-3 px-4 rounded-md flex items-center justify-center">
                <div className="w-5 h-5 mr-3 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-xs">W</span>
                </div>
                Connect Wallet
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#333]"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-2 bg-[#111] text-sm text-gray-400">or</span>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-[#222] border border-[#333] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full bg-[#222] border border-[#333] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input id="remember-me" type="checkbox" className="h-4 w-4 bg-[#222] border-[#333] rounded" />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                    Remember me
                  </label>
                </div>

                <a href="#" className="text-sm text-blue-400 hover:text-blue-300">
                  Forgot password?
                </a>
              </div>

              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md">
                Sign in
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-400">
              Don't have an account?{" "}
              <a href="#" className="text-blue-400 hover:text-blue-300">
                Sign up
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function SidebarItem({
  icon,
  label,
  href,
  active = false,
}: { icon: string; label: string; href: string; active?: boolean }) {
  const getIcon = () => {
    switch (icon) {
      case "book":
        return <BookOpen className="w-5 h-5 mr-3" />
      case "map":
        return <Map className="w-5 h-5 mr-3" />
      case "medal":
        return <Medal className="w-5 h-5 mr-3" />
      case "chart":
        return <BarChart2 className="w-5 h-5 mr-3" />
      case "trophy":
        return <Trophy className="w-5 h-5 mr-3" />
      case "zap":
        return <Zap className="w-5 h-5 mr-3" />
      case "cpu":
        return <Cpu className="w-5 h-5 mr-3" />
      case "users":
        return <Users className="w-5 h-5 mr-3" />
      case "search":
        return <Search className="w-5 h-5 mr-3" />
      default:
        return null
    }
  }

  return (
    <Link
      href={href}
      className={`flex items-center px-2 py-2 text-sm rounded-md ${
        active ? "bg-blue-900/30 text-blue-300" : "hover:bg-[#333]"
      }`}
    >
      {getIcon()}
      {label}
    </Link>
  )
}
