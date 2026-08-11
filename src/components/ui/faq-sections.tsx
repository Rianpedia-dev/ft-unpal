"use client";

import React, { useState } from "react";
import Image from "next/image";
import { logoMakna, siteConfig } from "@/data/site";
import { GlassCard } from "@/components/ui/glass-card";

export default function LogoAccordionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <GlassCard innerClassName="p-6 sm:p-8 md:p-10 space-y-8">
      {/* Header Judul Section */}
      <div className="text-center max-w-3xl mx-auto space-y-2 border-b border-stone-200/80 pb-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B3A5C]">
          {logoMakna.judul}
        </h2>
        <p className="text-stone-700 text-sm sm:text-base font-medium leading-relaxed">
          {logoMakna.deskripsi}
        </p>
      </div>

      {/* Main Grid: Logo Highlight Box & 2-Column Expandable Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Dark Navy Logo Card */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#112236] via-[#162B45] to-[#1B3A5C] text-white border border-amber-500/40 shadow-2xl text-center space-y-4 lg:sticky lg:top-24">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 shrink-0 flex items-center justify-center">
            <Image
              src={siteConfig.logo}
              alt={`Logo ${siteConfig.name} ${siteConfig.university}`}
              fill
              className="object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
        </div>

        {/* Right Column: 2-Column Grid of 11 Expandable Cards */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 items-start">
          {logoMakna.elemen.map((elem, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                onClick={() => toggleItem(idx)}
                className={`p-2.5 sm:p-3 rounded-xl cursor-pointer transition-all duration-200 border ${
                  isOpen
                    ? "bg-amber-500/10 border-amber-500/50 shadow-sm"
                    : "bg-white/80 border-stone-200/80 hover:border-amber-500/30 hover:bg-stone-50/80"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span
                      className={`h-2 w-2 rounded-full shrink-0 ${
                        isOpen ? "bg-amber-600 animate-pulse" : "bg-amber-500"
                      }`}
                    />
                    <h4
                      className={`font-extrabold text-xs sm:text-sm truncate ${
                        isOpen ? "text-amber-900" : "text-[#1B3A5C]"
                      }`}
                    >
                      {elem.nama}
                    </h4>
                  </div>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 text-amber-600" : "text-stone-400"
                    }`}
                  >
                    <path
                      d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen
                      ? "max-h-40 opacity-100 pt-1.5"
                      : "max-h-0 opacity-0 pt-0"
                  }`}
                >
                  <p className="text-xs text-stone-700 leading-relaxed font-normal pl-3 border-l-2 border-amber-500/40">
                    {elem.makna}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </GlassCard>
  );
}
