// Common UI components for reuse throughout the application
import type React from "react"
import Image from "next/image"

// Button component with consistent styling
export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link"
  size?: "sm" | "md" | "lg"
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-md"

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-[#222] text-white hover:bg-[#333]",
    outline: "border border-[#333] bg-transparent hover:bg-[#222]",
    ghost: "hover:bg-[#222] hover:text-white",
    link: "text-blue-400 hover:text-blue-300 underline-offset-4 hover:underline p-0 h-auto",
  }

  const sizes = {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-4 py-2 text-sm",
    lg: "h-12 px-6 text-base",
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}

// Card component with consistent styling
export function Card({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`bg-[#111] border border-[#333] rounded-lg overflow-hidden ${className}`} {...props}>
      {children}
    </div>
  )
}

// Card header component
export function CardHeader({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-4 border-b border-[#333] ${className}`} {...props}>
      {children}
    </div>
  )
}

// Card content component
export function CardContent({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  )
}

// Card footer component
export function CardFooter({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-4 border-t border-[#333] ${className}`} {...props}>
      {children}
    </div>
  )
}

// Badge component
export function Badge({
  children,
  variant = "default",
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "success" | "warning" | "danger" | "info"
}) {
  const variants = {
    default: "bg-[#333] text-white",
    success: "bg-green-900/30 text-green-400",
    warning: "bg-yellow-900/30 text-yellow-400",
    danger: "bg-red-900/30 text-red-400",
    info: "bg-blue-900/30 text-blue-400",
  }

  return (
    <div
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

// Avatar component
export function Avatar({
  src,
  alt = "",
  size = "md",
  className = "",
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement> & {
  size?: "sm" | "md" | "lg" | "xl"
}) {
  const sizes = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
    xl: "w-16 h-16",
  }

  return (
    <div className={`relative overflow-hidden rounded-full ${sizes[size]} ${className}`}>
      {src ? (
        <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover" {...props} />
      ) : (
        <div className="flex items-center justify-center w-full h-full bg-[#333] text-white">
          {alt.charAt(0).toUpperCase()}
        </div>
      )}
    </div>
  )
}

// Input component
export function Input({ className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full bg-[#222] border border-[#333] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 ${className}`}
      {...props}
    />
  )
}

// Search input component
export function SearchInput({ className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        type="search"
        className={`bg-[#222] w-full pl-10 pr-4 py-2 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-gray-600 ${className}`}
        {...props}
      />
    </div>
  )
}

// DAO Logo component
export function DAOLogo({
  src,
  name,
  size = "md",
  className = "",
}: {
  src: string
  name: string
  size?: "sm" | "md" | "lg"
  className?: string
}) {
  const sizes = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  }

  return (
    <div className={`relative overflow-hidden rounded-full ${sizes[size]} ${className}`}>
      <Image src={src || "/placeholder.svg"} alt={`${name} logo`} fill className="object-cover" />
    </div>
  )
}

// Progress bar component
export function ProgressBar({
  value,
  max = 100,
  className = "",
}: {
  value: number
  max?: number
  className?: string
}) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100))

  return (
    <div className={`w-full bg-[#222] rounded-full h-2 overflow-hidden ${className}`}>
      <div className="bg-blue-600 h-full rounded-full" style={{ width: `${percentage}%` }} />
    </div>
  )
}
