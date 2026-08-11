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

            return (
              <div key={`mobile-nav-${idx}`} className="w-full space-y-1">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.link}
                    onClick={(e) => {
                      if (hasSub || item.link === "#") {
                        e.preventDefault();
                        setOpenSubMenu(isSubOpen ? null : item.name);
                      } else {
                        setIsMobileMenuOpen(false);
                      }
                    }}
                    className="text-stone-100 hover:text-amber-400 font-semibold py-1.5 transition-colors text-base"
                  >
                    {item.name}
                  </Link>

                  {hasSub && (
                    <button
                      type="button"
                      onClick={() =>
                        setOpenSubMenu(isSubOpen ? null : item.name)
                      }
                      className="p-1.5 text-amber-400 hover:bg-white/10 rounded-lg transition-colors"
                      aria-label="Toggle Sub Menu"
                    >
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
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
                  )}
                </div>

                {/* Mobile Submenu Dropdown */}
                {hasSub && isSubOpen && (
                  <div className="pl-4 ml-2 border-l-2 border-amber-400/40 space-y-2 py-1">
                    {item.subItems.map((sub, sIdx) => (
                      <Link
                        key={`mobile-sub-${sIdx}`}
                        href={sub.link}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-1 px-2 text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors"
                      >
                        <span className="text-amber-400 font-bold mr-1.5">•</span>
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <div className="flex w-full flex-col gap-3 pt-3 border-t border-slate-700/60">
            <NavbarButton
              href="/kontak"
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full text-center"
            >
              Kontak
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </ResizableNavbar>
  );
}
