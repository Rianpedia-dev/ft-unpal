"use client";

import React, { useState } from "react";
import Image from "next/image";
import { logoMakna, siteConfig } from "@/data/site";
import { GlassCard } from "@/components/ui/glass-card";

export default function LogoAccordionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <GlassCard innerClassName="p-6 sm:p-8 md:p-10">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Left Side: Direct Logo Image */}
        <div className="w-full lg:w-5/12 flex justify-center items-center shrink-0">
          <Image
            src={siteConfig.logo}
            alt={`Logo ${siteConfig.name} ${siteConfig.university}`}
            width={240}
            height={240}
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>

        {/* Right Side: Title & Accordion Items */}
        <div className="w-full lg:w-7/12 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B3A5C] leading-snug">
            Logo dan Makna
          </h2>

          <div className="pt-2 divide-y divide-stone-200/80">
            {logoMakna.elemen.map((elem, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="py-4 cursor-pointer group"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-sm sm:text-base font-bold text-[#1B3A5C] group-hover:text-amber-700 transition-colors">
                      ● {elem.nama}
                    </h3>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${
                        isOpen ? "rotate-180 text-amber-600" : "text-stone-600"
                      } transition-all duration-300 ease-in-out shrink-0`}
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
                        ? "opacity-100 max-h-[300px] translate-y-0 pt-3"
                        : "opacity-0 max-h-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal bg-stone-50/80 p-3.5 rounded-xl border border-stone-200/60">
                      {elem.makna}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
