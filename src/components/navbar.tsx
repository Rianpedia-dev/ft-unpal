"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Home,
  Building2,
  Users,
  GraduationCap,
  Image as ImageIcon,
  BookOpen,
  PhoneCall,
} from "lucide-react";
import { NavBar, NavItem } from "@/components/ui/tubelight-navbar";
import { siteConfig } from "@/data/site";
import { PearlButton } from "@/components/ui/pearl-button";

const navItems: NavItem[] = [
  { name: "Beranda", url: "/", icon: Home },
  { name: "Profil", url: "/profil", icon: Building2 },
  { name: "Civitas Akademika", url: "/civitas", icon: Users },
  { name: "PMB", url: "/pmb", icon: GraduationCap },
  { name: "Galeri", url: "/galeri", icon: ImageIcon },
  { name: "Publikasi", url: "/publikasi", icon: BookOpen },
  { name: "Kontak", url: "/kontak", icon: PhoneCall },
];

export default function Navbar() {
  return (
    <>
      {/* Top Header Bar for Brand & CTA */}
      <header className="sticky top-0 z-40 w-full border-b border-amber-900/10 bg-[#F5F0E8]/90 backdrop-blur-md transition-all">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Brand / Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src={siteConfig.logo}
              alt={`Logo ${siteConfig.name} ${siteConfig.university}`}
              width={44}
              height={44}
              className="h-11 w-11 object-contain transition-transform group-hover:scale-105"
              priority
            />
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-[#1B3A5C] text-lg sm:text-xl leading-tight">
                {siteConfig.name}
              </span>
              <span className="text-xs font-medium text-amber-800/80 tracking-wider">
                {siteConfig.university}
              </span>
            </div>
          </Link>

          {/* PMB CTA Button Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            <PearlButton
              href="/pmb"
              size="sm"
              variant="blue"
              label="PMB 2026/2027"
            />
          </div>
        </div>
      </header>

      {/* Floating Tubelight Navbar */}
      <NavBar items={navItems} />
    </>
  );
}
