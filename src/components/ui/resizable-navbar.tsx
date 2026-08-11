"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import { siteConfig } from "@/data/site";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

export interface SubNavItem {
  name: string;
  link: string;
  description?: string;
}

export interface NavItem {
  name: string;
  link: string;
  subItems?: SubNavItem[];
}

interface NavItemsProps {
  items: NavItem[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 80) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 top-0 z-50 w-full pt-1 px-2 sm:px-4 transition-all", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
            child as React.ReactElement<{ visible?: boolean }>,
            { visible },
          )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(14px)" : "blur(10px)",
        boxShadow: visible
          ? "0 10px 30px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(245, 158, 11, 0.2) inset"
          : "0 4px 20px rgba(0, 0, 0, 0.12)",
        width: visible ? "75%" : "100%",
        y: visible ? 2 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 40,
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-[#1B3A5C]/90 border border-white/15 px-6 py-2 lg:flex transition-colors",
        visible && "bg-[#112236]/95 border-amber-400/40",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "flex flex-1 flex-row items-center justify-center space-x-1 text-sm font-semibold text-white/90 lg:flex",
        className,
      )}
    >
      {items.map((item, idx) => {
        const hasSubItems = item.subItems && item.subItems.length > 0;
        const isHovered = hovered === idx;

        return (
          <div
            key={`nav-wrapper-${idx}`}
            className="relative"
            onMouseEnter={() => setHovered(idx)}
          >
            <Link
              onClick={(e) => {
                if (item.link === "#") {
                  e.preventDefault();
                }
                if (onItemClick) onItemClick();
              }}
              className="relative px-4 py-2 text-slate-100 hover:text-white transition-colors flex items-center gap-1.5 rounded-full cursor-pointer"
              href={item.link}
            >
              {isHovered && (
                <motion.div
                  layoutId="hovered"
                  className="absolute inset-0 h-full w-full rounded-full bg-white/15 border border-white/20"
                />
              )}
              <span className="relative z-20 font-medium flex items-center gap-1">
                {item.name}
                {hasSubItems && (
                  <svg
                    className={cn(
                      "w-3.5 h-3.5 transition-transform duration-200 text-amber-400",
                      isHovered && "rotate-180"
                    )}
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
                )}
              </span>
            </Link>

            {/* Dropdown Menu */}
            {hasSubItems && isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 w-52"
              >
                <div className="bg-[#112236]/95 backdrop-blur-xl border border-amber-400/30 rounded-2xl p-1.5 shadow-2xl shadow-black/50 space-y-0.5">
                  {item.subItems?.map((sub, sIdx) => (
                    <Link
                      key={`sub-${sIdx}`}
                      href={sub.link}
                      onClick={() => {
                        setHovered(null);
                        if (onItemClick) onItemClick();
                      }}
                      className="block px-3 py-2 rounded-xl hover:bg-white/10 transition-colors group/sub"
                    >
                      <div className="text-sm font-bold text-white group-hover/sub:text-amber-400 flex items-center justify-between">
                        <span>{sub.name}</span>
                        <span className="text-amber-400 opacity-0 group-hover/sub:opacity-100 transition-opacity text-xs">
                          →
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(14px)" : "blur(10px)",
        boxShadow: visible
          ? "0 10px 30px rgba(0, 0, 0, 0.25)"
          : "0 4px 15px rgba(0, 0, 0, 0.12)",
        width: visible ? "94%" : "100%",
        paddingRight: visible ? "16px" : "16px",
        paddingLeft: visible ? "16px" : "16px",
        borderRadius: visible ? "1.5rem" : "0.5rem",
        y: visible ? 2 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 40,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-1rem)] flex-col items-center justify-between bg-[#1B3A5C]/90 border border-white/15 px-4 py-2 lg:hidden",
        visible && "bg-[#112236]/95 border-amber-400/40",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full max-h-[calc(100vh-5rem)] overflow-y-auto flex-col items-start justify-start gap-4 rounded-2xl bg-[#112236] border border-amber-400/40 p-5 sm:p-6 shadow-2xl text-white",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
  className,
}: {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Toggle Navigation Menu"
      className="p-2 rounded-lg text-amber-400 focus:outline-none flex items-center justify-center min-h-[44px] min-w-[44px] cursor-pointer hover:bg-white/10 transition-colors"
    >
      <MenuToggleIcon open={isOpen} className={cn("size-6 text-amber-400", className)} duration={500} />
    </button>
  );
};

export const NavbarLogo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 mr-4 flex items-center space-x-3 group text-[#1B3A5C]"
    >
      <Image
        src={siteConfig.logo}
        alt="Logo FT UNPAL"
        width={36}
        height={36}
        className="h-9 w-9 object-contain transition-transform group-hover:scale-105"
        priority
      />
      <div className="flex flex-col">
        <span className="font-heading font-extrabold tracking-tight text-white text-base leading-tight">
          Fakultas Teknik
        </span>
        <span className="text-[10px] font-semibold text-amber-400 tracking-wider uppercase">
          Universitas Palembang
        </span>
      </div>
    </Link>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
    | React.ComponentPropsWithoutRef<"a">
    | React.ComponentPropsWithoutRef<"button">
  )) => {
  const baseStyles =
    "px-4 py-2 rounded-full text-xs sm:text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "bg-amber-400 text-[#112236] hover:bg-amber-300 shadow-[0_0_24px_rgba(245,158,11,0.2)]",
    secondary: "bg-white/10 text-white hover:bg-white/20 border border-white/20",
    dark: "bg-slate-900 text-white border border-slate-700",
    gradient:
      "bg-gradient-to-r from-amber-400 to-amber-500 text-[#112236] font-extrabold shadow-md",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
