"use client";

import { statistics } from "@/data/site";
import { GlassCard } from "@/components/ui/glass-card";

export default function StatCounter() {
  return (
    <section className="py-12 bg-white/50 border-y border-amber-900/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {statistics.map((stat, idx) => (
            <GlassCard key={idx} className="hover:-translate-y-1 transition-transform">
              <div className="py-2">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#1B3A5C] tracking-tight">
                  {stat.value.toLocaleString("id-ID")}
                  <span className="text-amber-600 ml-1">{stat.suffix}</span>
                </div>
                <div className="mt-2 text-xs sm:text-sm font-bold text-stone-700 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
