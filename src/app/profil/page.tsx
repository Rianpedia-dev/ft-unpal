import Image from "next/image";
import {
  history,
  visionMission,
  tujuanFakultas,
  programStudiList,
  nilaiFakultas,
  logoMakna,
  siteConfig,
} from "@/data/site";
import { GlassCard } from "@/components/ui/glass-card";

export const metadata = {
  title: `Profil | ${siteConfig.name} ${siteConfig.university}`,
  description:
    "Sejarah, Visi Misi, Tujuan, Program Studi, Nilai-Nilai Fakultas, serta Logo dan Makna Fakultas Teknik Universitas Palembang.",
};

export default function ProfilPage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#112236] to-[#1B3A5C] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Profil Fakultas Teknik
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto font-light">
            Mengenal identitas, perjalanan sejarah, arah strategis, program studi, nilai-nilai utama, serta filosofi logo Fakultas Teknik Universitas Palembang.
          </p>
        </div>
      </section>

      {/* 1. SEJARAH */}
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

      {/* 2. VISI DAN MISI */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Visi */}
          <div className="md:col-span-5 flex">
            <GlassCard innerClassName="flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#1B3A5C] leading-snug">
                  {visionMission.vision}
                </h3>
              </div>
              <div className="text-xs text-amber-800 font-semibold pt-4 border-t border-stone-200/60">
                ★ Terakreditasi & Berorientasi Industri
              </div>
            </GlassCard>
          </div>

          {/* Misi */}
          <div className="md:col-span-7 flex">
            <GlassCard innerClassName="space-y-6">
              <div className="border-b border-stone-200/60 pb-3">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#1B3A5C]">
                  Pilar Misi Fakultas
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
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B3A5C]">
            Program Studi (S1)
          </h2>
          <p className="text-stone-600 text-sm">
            Empat program studi pilihan terakreditasi untuk menghasilkan tenaga profesional siap kerja
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programStudiList.map((prodi, idx) => (
            <GlassCard key={idx} className="hover:-translate-y-1 transition-transform">
              <div className="space-y-4 flex flex-col justify-between h-full">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-extrabold uppercase text-amber-900 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
                      Akreditasi: {prodi.akreditasi}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#1B3A5C]">
                      {prodi.jenjang}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#1B3A5C]">
                    {prodi.nama} ({prodi.gelar})
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    {prodi.deskripsi}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-stone-200/60 text-xs">
                  <p>
                    <span className="font-bold text-stone-900">Prospek Karir:</span>{" "}
                    <span className="text-stone-600">{prodi.prospek}</span>
                  </p>
                  <p>
                    <span className="font-bold text-stone-900">Ketua Prodi:</span>{" "}
                    <span className="text-amber-800 font-semibold">{prodi.kaprodi}</span>
                  </p>
                </div>
              </div>
            </GlassCard>
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
            <GlassCard key={idx} className="hover:-translate-y-1 transition-transform">
              <div className="text-center space-y-3">
                <div className="mx-auto h-14 w-14 rounded-2xl bg-[#1B3A5C] text-amber-400 text-2xl flex items-center justify-center shadow">
                  {item.icon}
                </div>
                <h3 className="text-base font-extrabold text-[#1B3A5C] tracking-wider">
                  {item.nilai}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed font-normal">
                  {item.deskripsi}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* 6. LOGO DAN MAKNA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <GlassCard>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Symbol */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="p-6 rounded-3xl bg-gradient-to-br from-[#112236] to-[#1B3A5C] border-4 border-amber-400 flex flex-col items-center justify-center text-center shadow-xl">
                <Image
                  src={siteConfig.logo}
                  alt={`Logo Resmi ${siteConfig.name} ${siteConfig.university}`}
                  width={140}
                  height={140}
                  className="h-32 w-32 object-contain drop-shadow-md"
                />
                <span className="text-xs font-bold text-amber-300 uppercase tracking-widest mt-3">
                  Resmi FT UNPAL
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-8 space-y-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B3A5C]">
                  {logoMakna.judul}
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  {logoMakna.deskripsi}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {logoMakna.elemen.map((elem, idx) => (
                  <div key={idx} className="bg-white/70 p-3.5 rounded-2xl border border-stone-200/80 space-y-1">
                    <h4 className="text-xs font-extrabold text-[#1B3A5C] uppercase tracking-wider">
                      ● {elem.nama}
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed font-normal">
                      {elem.makna}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}

