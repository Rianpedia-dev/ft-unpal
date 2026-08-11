import Image from "next/image";
import { PearlButton } from "@/components/ui/pearl-button";
import HeroSlider from "@/components/hero-slider";

import { heroHighlights } from "@/data/site";

export default function HeroSection() {
  return (
    <section className="bg-[#1B3A5C] text-white min-h-[calc(100vh-4rem)] flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full mt-2 lg:mt-4 mb-auto space-y-8 sm:space-y-12">
        {/* Top 2-Column Grid: Text & Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline & Content */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              Selamat Datang di <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                Fakultas Teknik Universitas Palembang
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl font-medium">
              Mencetak sarjana teknik yang kompeten, berdaya saing global, dan berintegritas tinggi.
            </p>

            {/* Call-to-Actions */}
            <div className="pt-2 flex flex-row items-center gap-2.5 sm:gap-4">
              <PearlButton
                href="/pmb"
                size="md"
                variant="amber"
                label="Info PMB →"
                className="h-9.5 sm:h-11 px-3 sm:px-6 text-[11px] sm:text-sm font-bold"
              />
              <PearlButton
                href="/profil"
                size="md"
                variant="blue"
                label="Profil Fakultas"
                className="h-9.5 sm:h-11 px-3 sm:px-6 text-[11px] sm:text-sm font-bold"
              />
            </div>
          </div>

          {/* Right Column: Card Image Slider */}
          <div className="lg:col-span-6 w-full flex items-center justify-center order-1 lg:order-2">
            <HeroSlider />
          </div>
        </div>

        {/* Bottom Full-Width Highlights Bar with Glass Cards & Icons */}
        <div className="pt-8 border-t border-slate-700/50 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {heroHighlights.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center text-center gap-3 p-4 sm:p-5 rounded-xl bg-white/5 hover:bg-white/[0.08] border border-white/10 hover:border-amber-500/30 backdrop-blur-sm transition-all duration-300 shadow-md hover:-translate-y-1"
            >
              <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={item.iconSrc}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-100 text-sm sm:text-base leading-snug group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300/80 font-light">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
