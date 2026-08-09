import { Users, Calendar, Award, GraduationCap } from "lucide-react";
import { PearlButton } from "@/components/ui/pearl-button";
import HeroSlider from "@/components/hero-slider";

const highlights = [
  {
    icon: Users,
    title: "Ribuan Alumni",
    subtitle: "Karir Sektor Industri",
  },
  {
    icon: Calendar,
    title: "Tahun Berdiri 1985",
    subtitle: "40+ Tahun Pengalaman",
  },
  {
    icon: Award,
    title: "Akreditasi Baik",
    subtitle: "Terakreditasi BAN-PT",
  },
  {
    icon: GraduationCap,
    title: "2 Program Studi S1",
    subtitle: "Teknik Sipil & Teknik Elektro",
  },
];

export default function HeroSection() {
  return (
    <section className="bg-[#1B3A5C] text-white min-h-screen flex flex-col justify-between pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full mt-2 lg:mt-4 mb-auto space-y-8 sm:space-y-12">
        {/* Top 2-Column Grid: Text & Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline & Content */}
          <div className="lg:col-span-6 space-y-6">
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
              Selamat Datang di <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                Fakultas Teknik Universitas Palembang.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-light">
              Mencetak sarjana teknik yang kompeten, berdaya saing global, dan berintegritas tinggi.
            </p>

            {/* Call-to-Actions */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <PearlButton
                href="/pmb"
                size="lg"
                variant="amber"
                label="Pendaftaran PMB Online →"
              />
              <PearlButton
                href="/profil"
                size="lg"
                variant="blue"
                label="Jelajahi Profil Fakultas"
              />
            </div>
          </div>

          {/* Right Column: Card Image Slider */}
          <div className="lg:col-span-6 w-full flex items-center justify-center">
            <HeroSlider />
          </div>
        </div>

        {/* Bottom Full-Width Highlights Bar with Glass Cards & Icons */}
        <div className="pt-8 border-t border-slate-700/50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col items-center text-center gap-3 p-4 sm:p-5 rounded-xl bg-white/5 hover:bg-white/[0.08] border border-white/10 hover:border-amber-500/30 backdrop-blur-sm transition-all duration-300 shadow-md hover:-translate-y-1"
              >
                <div className="h-12 w-12 shrink-0 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500/20 transition-all shadow-inner">
                  <Icon className="w-6 h-6" />
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
