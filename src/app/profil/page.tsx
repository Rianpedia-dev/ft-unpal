import Image from "next/image";
import StatCounter from "@/components/stat-counter";
import {
  history,
  visionMission,
  mottoFakultas,
  tujuanFakultas,
  nilaiFakultas,
  siteConfig,
} from "@/data/site";
import { GlassCard } from "@/components/ui/glass-card";
import LogoAccordionSection from "@/components/ui/faq-sections";
import { Building2, Zap, Award, GraduationCap, Briefcase, UserCheck } from "lucide-react";

export const metadata = {
  title: `Profil | ${siteConfig.name} ${siteConfig.university}`,
  description:
    "Sejarah, Motto, Visi Misi, Tujuan, Program Studi, Nilai-Nilai Fakultas, serta Logo dan Makna Fakultas Teknik Universitas Palembang.",
};

export default function ProfilPage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="relative w-full flex items-center justify-center min-h-[220px] sm:min-h-[260px] lg:min-h-[290px] overflow-hidden bg-slate-950 text-white pt-20 pb-10 sm:pt-24 sm:pb-12 lg:pt-24 lg:pb-12">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/upload/background-header/profil.avif"
            alt="Profil Background Header"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#112236]/80 via-[#162B45]/70 to-[#1B3A5C]/80 z-10" />
        </div>

        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-2 pt-2">
          <div className="flex justify-center pb-1">
            <Image
              src={siteConfig.logo}
              alt={`Logo ${siteConfig.name}`}
              width={140}
              height={140}
              className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 drop-shadow-2xl"
              priority
            />
          </div>
          <h1 className="flex flex-col items-center justify-center font-extrabold tracking-tight text-white">
            <span className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-sky-400 tracking-wider drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              FAKULTAS TEKNIK
            </span>
            <span className="text-xl sm:text-3xl lg:text-4xl mt-1.5 font-bold text-amber-400 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              Universitas Palembang
            </span>
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto font-light drop-shadow-sm">
            Mengenal identitas, perjalanan sejarah, motto, arah strategis, program studi, nilai-nilai utama, serta filosofi logo Fakultas Teknik Universitas Palembang.
          </p>
        </div>
      </section>

      {/* Statistik Fakultas */}
      <StatCounter className="-mt-16" />

      {/* 1. MOTTO FAKULTAS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <GlassCard innerClassName="p-6 sm:p-8 text-center space-y-3">
          <div className="text-sm sm:text-base md:text-lg font-extrabold uppercase tracking-widest text-[#1B3A5C]">
            {mottoFakultas.judul}
          </div>

          <h2 className="text-base sm:text-lg md:text-xl font-bold tracking-tight leading-relaxed italic text-stone-800 max-w-4xl mx-auto">
            "{mottoFakultas.motto}"
          </h2>
        </GlassCard>
      </section>

      {/* 2. SEJARAH */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <GlassCard>
          <div className="space-y-6">
            <div className="border-b border-stone-200/60 pb-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B3A5C]">
                {history.title}
              </h2>
            </div>
            <div className="text-stone-700 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line font-normal">
              {history.content}
            </div>
          </div>
        </GlassCard>
      </section>

      {/* 3. VISI DAN MISI */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Visi */}
          <div className="md:col-span-5 flex">
            <GlassCard className="h-full" innerClassName="flex flex-col justify-between space-y-6 w-full h-full">
              <div className="space-y-4">
                <div className="border-b border-stone-200/60 pb-3">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#1B3A5C]">
                    Visi Fakultas
                  </h3>
                </div>
                <p className="text-base sm:text-lg font-bold text-stone-800 leading-relaxed">
                  {visionMission.vision}
                </p>
              </div>
              <div className="text-xs text-amber-800 font-semibold pt-4 border-t border-stone-200/60">
                ★ Terakreditasi & Berorientasi Industri
              </div>
            </GlassCard>
          </div>

          {/* Misi */}
          <div className="md:col-span-7 flex">
            <GlassCard className="h-full" innerClassName="flex flex-col justify-between space-y-6 w-full h-full">
              <div className="border-b border-stone-200/60 pb-3">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#1B3A5C]">
                  Misi Fakultas
                </h3>
              </div>
              <ul className="space-y-3">
                {visionMission.missions.map((misi, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-stone-700">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800 font-bold text-xs">
                      {idx + 1}
                    </span>
                    <span className="pt-0.5 leading-relaxed">{misi}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* 3. TUJUAN */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <GlassCard>
          <div className="space-y-6">
            <div className="border-b border-stone-200/60 pb-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B3A5C]">
                Tujuan Strategis Fakultas
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tujuanFakultas.map((tujuan, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white/70 border border-stone-200 shadow-sm"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#1B3A5C] text-amber-400 font-bold text-sm">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed pt-1">
                    {tujuan}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </section>



      {/* 5. NILAI-NILAI FAKULTAS */}
      <section className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10 space-y-1.5 sm:space-y-2">
          <h2 className="text-xl sm:text-3xl font-extrabold text-[#1B3A5C]">
            Nilai-Nilai Utama Fakultas
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            Prinsip dan karakter akademis yang menjiwai seluruh civitas akademika FT UNPAL
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {nilaiFakultas.map((item, idx) => (
            <GlassCard key={idx} className="hover:-translate-y-1 transition-all duration-300" innerClassName="p-3 sm:p-5">
              <div className="text-center py-1 sm:py-2 flex flex-col items-center justify-center gap-2 sm:gap-3">
                <div className="relative h-11 w-11 sm:h-16 sm:w-16 shrink-0 flex items-center justify-center">
                  <Image
                    src={item.iconSrc}
                    alt={item.nilai}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain drop-shadow-md"
                  />
                </div>
                <h3 className="text-xs sm:text-base font-extrabold text-[#1B3A5C] tracking-wider">
                  {item.nilai}
                </h3>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* 6. LOGO DAN MAKNA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <LogoAccordionSection />
      </section>
    </div>
  );
}

