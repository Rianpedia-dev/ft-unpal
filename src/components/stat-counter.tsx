"use client";

import Image from "next/image";
import { statistics } from "@/data/site";
import { GlassCard } from "@/components/ui/glass-card";

interface StatCounterProps {
  className?: string;
}

export default function StatCounter({ className = "" }: StatCounterProps) {
  return (
    <section className={`py-6 sm:py-8 bg-white/50 border-y border-amber-900/10 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {statistics.map((stat, idx) => (
            <GlassCard key={idx} className="hover:-translate-y-1 transition-all duration-300">
              <div className="py-3 flex flex-col items-center gap-3">
                {stat.iconSrc && (
                  <div className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 flex items-center justify-center">
                    <Image
                      src={stat.iconSrc}
                      alt={stat.label}
                      width={56}
                      height={56}
                      className="w-full h-full object-contain drop-shadow-md"
                    />
                  </div>
                )}
                <div>
                  <div className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1B3A5C] tracking-tight">
                    {typeof stat.value === "number" ? stat.value.toLocaleString("id-ID") : stat.value}
                    <span className="text-amber-600 ml-1">{stat.suffix}</span>
                  </div>
                  <div className="mt-1 text-xs sm:text-sm font-bold text-stone-700 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
