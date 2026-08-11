"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

const navItems = [
  { name: "Beranda", link: "/" },
  { name: "Profil", link: "/profil" },
  {
    name: "Program Studi",
    link: "#",
    subItems: [
      {
        name: "Teknik Sipil",
        link: "/program-studi/teknik-sipil",
      },
      {
        name: "Teknik Elektro",
        link: "/program-studi/teknik-elektro",
      },
    ],
  },
  { name: "Civitas", link: "/civitas" },
  { name: "PMB", link: "/pmb" },
  { name: "Galeri", link: "/galeri" },
  { name: "Publikasi", link: "/publikasi" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>("Program Studi");

  return (
    <ResizableNavbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-3">
          <NavbarButton href="/kontak" variant="primary">
            Kontak
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => {
            const hasSub = item.subItems && item.subItems.length > 0;
            const isSubOpen = openSubMenu === item.name;

            if (hasSub) {
              return (
                <div key={`mobile-nav-${idx}`} className="w-full space-y-2">
                  <button
                    type="button"
                    onClick={() => setOpenSubMenu(isSubOpen ? null : item.name)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/15 hover:border-amber-400/40 text-stone-100 font-semibold text-base transition-all duration-200 shadow-sm active:scale-[0.98] cursor-pointer"
                  >
                    <span>{item.name}</span>
                    <svg
                      className={`w-4 h-4 text-amber-400 transition-transform duration-200 ${
                        isSubOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Mobile Submenu Dropdown */}
                  {isSubOpen && (
                    <div className="flex flex-col items-center gap-2 py-1">
                      {item.subItems.map((sub, sIdx) => (
                        <Link
                          key={`mobile-sub-${sIdx}`}
                          href={sub.link}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="w-[90%] text-center py-2 px-4 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-300 hover:bg-amber-400/20 font-bold text-sm transition-all shadow-xs active:scale-[0.98]"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={`mobile-nav-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-2.5 px-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/15 hover:border-amber-400/40 text-stone-100 hover:text-amber-300 font-semibold text-base transition-all duration-200 shadow-sm active:scale-[0.98]"
              >
                {item.name}
              </Link>
            );
          })}

          <div className="w-full pt-2 border-t border-slate-700/60">
            <NavbarButton
              href="/kontak"
              onClick={() => setIsMobileMenuOpen(false)}
              variant="gradient"
              className="w-full text-center py-3 text-base rounded-xl font-extrabold shadow-lg"
            >
              Kontak
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </ResizableNavbar>
  );
}
