import Image from "next/image";
import StatCounter from "@/components/stat-counter";
import {
  history,
  visionMission,
  mottoFakultas,
  tujuanFakultas,
  programStudiList,
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
      <section className="relative w-full flex items-center justify-center min-h-[220px] sm:min-h-[260px] lg:min-h-[290px] overflow-hidden bg-slate-950 text-white pt-20 pb-10 sm:pt-24 sm:pb-12 lg:pt-24 lg:pb-12 mb-6 sm:mb-8">
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
      <StatCounter />

      {/* 1. MOTTO FAKULTAS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <GlassCard innerClassName="p-6 sm:p-8 md:p-10 text-center space-y-4">
          <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-amber-800">
            {mottoFakultas.judul}
          </div>

          <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold tracking-tight leading-relaxed italic text-[#1B3A5C]">
            "Mengintegrasikan Ilmu, Teknologi, dan Inovasi <br className="hidden sm:inline" />
            Untuk Membangun Peradaban yang Lebih Maju"
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

      {/* 4. PROGRAM STUDI */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1B3A5C]">
            Program Studi Sarjana (S1)
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Dua program studi unggulan terakreditasi BAN-PT dengan kurikulum berbasis Outcome-Based Education (OBE) untuk mencetak sarjana teknik berkualitas & siap bersaing secara global.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programStudiList.map((prodi, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-3xl bg-white/90 backdrop-blur-md border border-stone-200 p-6 sm:p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">

                {/* Title & Icon */}
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#112236] tracking-tight group-hover:text-[#1B3A5C] transition-colors">
                      {prodi.nama}
                    </h3>
                    <p className="text-sm font-bold text-amber-700">
                      Gelar Lulusan: {prodi.gelar} (Sarjana Teknik)
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-2xl bg-[#112236] text-amber-400 flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-[#112236] transition-all">
                    {prodi.id === "sipil" ? (
                      <Building2 className="size-6" />
                    ) : (
                      <Zap className="size-6" />
                    )}
                  </div>
                </div>

                {/* Deskripsi */}
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                  {prodi.deskripsi}
                </p>

                {/* Peminatan / Bidang Keahlian */}
                <div className="space-y-2.5">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#112236] block">
                    Bidang Keahlian & Peminatan:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {prodi.peminatan.map((item, pIdx) => (
                      <div
                        key={pIdx}
                        className="text-xs font-semibold bg-slate-100/80 text-stone-800 px-3 py-1.5 rounded-xl border border-slate-200/80 flex items-center gap-2"
                      >
                        <span className="text-amber-600 font-extrabold">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prospek Karir */}
                <div className="space-y-2.5">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#112236] block">
                    Prospek Karir Lulusan:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {prodi.prospek.map((karir, kIdx) => (
                      <span
                        key={kIdx}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold bg-amber-500/10 text-amber-950 px-3 py-1.5 rounded-lg border border-amber-400/30"
                      >
                        <Briefcase className="size-3.5 text-amber-700 shrink-0" />
                        <span>{karir}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Kaprodi Footer Card */}
              <div className="mt-8 pt-4 border-t border-stone-200/80 flex items-center justify-between bg-stone-50/90 p-4 rounded-2xl border border-stone-200">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-[#112236] text-amber-400 flex items-center justify-center shrink-0 shadow-xs">
                    <UserCheck className="size-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
                      Ketua Program Studi
                    </div>
                    <div className="text-sm font-extrabold text-[#112236]">
                      {prodi.kaprodi}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. NILAI-NILAI FAKULTAS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B3A5C]">
            Nilai-Nilai Utama Fakultas
          </h2>
          <p className="text-stone-600 text-sm">
            Prinsip dan karakter akademis yang menjiwai seluruh civitas akademika FT UNPAL
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {nilaiFakultas.map((item, idx) => (
            <GlassCard key={idx} className="hover:-translate-y-1 transition-all duration-300">
              <div className="text-center py-2 flex flex-col items-center justify-center gap-3">
                <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 flex items-center justify-center">
                  <Image
                    src={item.iconSrc}
                    alt={item.nilai}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain drop-shadow-md"
                  />
                </div>
                <h3 className="text-base font-extrabold text-[#1B3A5C] tracking-wider">
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

