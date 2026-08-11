import Image from "next/image";
import { FeatureSteps } from "@/components/ui/feature-steps";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { prodiDetailData } from "@/data/prodi";
import { GlassCard } from "@/components/ui/glass-card";
import {
  Zap,
  Award,
  BookOpen,
  UserCheck,
  CheckCircle2,
  Briefcase,
  Layers,
  GraduationCap,
  ArrowRight,
  Clock,
  Cpu,
  Sun,
  Activity,
} from "lucide-react";

export const metadata = {
  title: `S1 Teknik Elektro | ${siteConfig.name} ${siteConfig.university}`,
  description:
    "Informasi lengkap Program Studi S1 Teknik Elektro Fakultas Teknik Universitas Palembang. Akreditasi Baik Sekali BAN-PT, Visi Misi, Ketenagalistrikan, PLTS, PLC & Robotika.",
};

export default function TeknikElektroPage() {
  const prodi = prodiDetailData["teknik-elektro"];

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="relative w-full flex items-center justify-center min-h-[260px] sm:min-h-[300px] lg:min-h-[340px] overflow-hidden bg-slate-950 text-white pt-20 pb-12 sm:pt-24 sm:pb-14 lg:pt-28 lg:pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/upload/background-header/profil.avif"
            alt="Teknik Elektro Header"
            fill
            priority
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#112236]/95 via-[#162B45]/90 to-[#1B3A5C]/95 z-10" />
        </div>

        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-3 pt-2">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-amber-400 tracking-wider drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            {prodi.nama}
          </h1>

          <p className="text-slate-200 text-sm sm:text-base max-w-3xl mx-auto font-light leading-relaxed">
            Pembangkit & sistem tenaga listrik, arus kuat, teknologi energi terbarukan (PLTS), otomasi industri berbasis PLC & robotika modern.
          </p>
        </div>
      </section>

      {/* Ringkasan Identitas Prodi Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-white/90 border border-stone-200 shadow-sm space-y-0.5 sm:space-y-1">
            <span className="text-[10px] sm:text-xs font-extrabold uppercase text-amber-700 tracking-wider">Masa Studi</span>
            <p className="text-sm sm:text-lg font-extrabold text-[#112236]">{prodi.masaStudi}</p>
          </div>

          <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-white/90 border border-stone-200 shadow-sm space-y-0.5 sm:space-y-1">
            <span className="text-[10px] sm:text-xs font-extrabold uppercase text-amber-700 tracking-wider">Akreditasi</span>
            <p className="text-sm sm:text-lg font-extrabold text-[#112236]">{prodi.akreditasi}</p>
          </div>

          <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-white/90 border border-stone-200 shadow-sm space-y-0.5 sm:space-y-1">
            <span className="text-[10px] sm:text-xs font-extrabold uppercase text-amber-700 tracking-wider">Beban Studi</span>
            <p className="text-sm sm:text-lg font-extrabold text-[#112236]">{prodi.bebasSKS} SKS</p>
          </div>

          <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-white/90 border border-stone-200 shadow-sm space-y-0.5 sm:space-y-1">
            <span className="text-[10px] sm:text-xs font-extrabold uppercase text-amber-700 tracking-wider">Jumlah Alumni</span>
            <p className="text-sm sm:text-lg font-extrabold text-[#112236]">{prodi.jumlahAlumni}</p>
          </div>
        </div>
      </section>

      {/* Deskripsi & Sambutan Kaprodi */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <GlassCard>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Kaprodi Card (Sebelah Kiri) */}
            <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#112236] to-[#1B3A5C] text-white shadow-2xl flex flex-col items-center justify-center text-center space-y-4 border border-amber-500/30 relative overflow-hidden h-full">
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative h-44 w-36 sm:h-52 sm:w-44 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-xl bg-slate-900 ring-4 ring-amber-400/20 my-1">
                <Image
                  src={prodi.kaprodi.foto}
                  alt={prodi.kaprodi.nama}
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="space-y-1">
                <h3 className="font-extrabold text-lg sm:text-xl text-amber-400 leading-snug">
                  {prodi.kaprodi.nama}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-slate-200">
                  {prodi.kaprodi.gelar}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-700/60 w-full text-center">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest">
                  Fakultas Teknik UNPAL
                </span>
              </div>
            </div>

            {/* Tentang Program Studi (Sebelah Kanan) */}
            <div className="lg:col-span-8 space-y-4">
              <div className="border-b border-stone-200/60 pb-3">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B3A5C]">
                  Tentang Program Studi Teknik Elektro
                </h2>
              </div>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {prodi.deskripsiLengkap}
              </p>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* Visi & Misi */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          <div className="md:col-span-5 flex">
            <GlassCard className="h-full" innerClassName="flex flex-col justify-between space-y-4 w-full h-full">
              <div className="space-y-3">
                <div className="border-b border-stone-200/60 pb-2">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#1B3A5C]">
                    Visi Prodi
                  </h3>
                </div>
                <p className="text-stone-800 font-bold text-base leading-relaxed">
                  {prodi.visi}
                </p>
              </div>
              <div className="text-xs text-amber-800 font-bold pt-3 border-t border-stone-200/60">
                ★ Berfokus pada Ketenagalistrikan & Otomasi Industri 4.0
              </div>
            </GlassCard>
          </div>

          <div className="md:col-span-7 flex">
            <GlassCard className="h-full" innerClassName="flex flex-col justify-between space-y-4 w-full h-full">
              <div className="space-y-3">
                <div className="border-b border-stone-200/60 pb-2">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#1B3A5C]">
                    Misi Prodi
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {prodi.misi.map((misi, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-900 font-bold text-xs">
                        {idx + 1}
                      </span>
                      <span className="pt-0.5 leading-relaxed">{misi}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Bidang yang Dipelajari di Teknik Elektro */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <GlassCard innerClassName="p-4 sm:p-6 lg:p-8">
          <FeatureSteps
            features={prodi.featuresList}
            title="Bidang yang Dipelajari di Teknik Elektro"
            subtitle="Kompetensi dan ruang lingkup keilmuan mendalam yang akan dipelajari selama masa studi di S1 Teknik Elektro UNPAL."
            autoPlayInterval={2500}
          />
        </GlassCard>
      </section>

      {/* Prospek Karir & Alumni */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
        <GlassCard>
          <div className="space-y-6">
            <div className="border-b border-stone-200/60 pb-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B3A5C]">
                Prospek Karir Lulusan Teknik Elektro
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {prodi.prospekKerjaList.map((karir, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md hover:border-amber-400/60 transition-all flex items-center gap-3.5 group"
                >
                  <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-800 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                    <Briefcase className="size-5" />
                  </div>
                  <h3 className="font-extrabold text-sm sm:text-base text-[#112236] leading-snug">
                    {karir.peran}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </section>

      {/* CTA PMB */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#112236] text-white p-8 sm:p-12 shadow-2xl border border-amber-500/20">
          <div className="absolute -right-12 -top-12 w-64 h-64 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-12 -bottom-12 w-64 h-64 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Daftar S1 Teknik Elektro FT UNPAL
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Bergabunglah menjadi bagian dari inovator sistem tenaga listrik, energi hijau, dan otomasi industri masa depan.
            </p>

            <div className="pt-3">
              <Link
                href="/pmb"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-[#112236] font-extrabold text-sm sm:text-base hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg hover:shadow-amber-500/20 hover:scale-105 active:scale-95"
              >
                <span>Daftar Sekarang (PMB)</span>
                <ArrowRight className="size-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
