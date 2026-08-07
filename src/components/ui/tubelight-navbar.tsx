"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState(items[0]?.name || "Beranda")

  useEffect(() => {
    const currentItem = items.find((item) => item.url === pathname)
    if (currentItem) {
      setActiveTab(currentItem.name)
    }
  }, [pathname, items])

  return (
    <div
      className={cn(
        "fixed bottom-4 sm:top-3 sm:bottom-auto left-1/2 -translate-x-1/2 z-50",
        className,
      )}
    >
      <div className="flex items-center gap-1 sm:gap-2 bg-[#112236]/90 border border-amber-500/20 backdrop-blur-xl py-1.5 px-1.5 sm:px-2 rounded-full shadow-2xl shadow-black/30 max-w-[95vw]">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name || pathname === item.url

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => {
                setActiveTab(item.name);
                window.scrollTo({ top: 0, left: 0, behavior: "instant" });
              }}
              className={cn(
                "relative cursor-pointer text-xs sm:text-sm font-bold px-2.5 sm:px-5 py-2 rounded-full transition-all duration-200",
                "text-slate-300 hover:text-amber-300 flex items-center justify-center min-w-[36px] sm:min-w-0",
                isActive && "text-amber-400 bg-white/10 shadow-inner",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden flex items-center justify-center">
                <Icon size={18} strokeWidth={2.2} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-amber-500/10 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-amber-400 rounded-t-full">
                    <div className="absolute w-12 h-6 bg-amber-400/30 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-amber-400/30 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-amber-400/30 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
