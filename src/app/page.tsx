import HeroSection from "@/components/hero-section";
import StatCounter from "@/components/stat-counter";
import AlumniTestimonialMarquee from "@/components/alumni-marquee";
import KemitraanSection from "@/components/kemitraan-section";
import { deanGreeting } from "@/data/site";
import { beritaFakultas } from "@/data/publications";
import { gelombangPMB } from "@/data/pmb";
import { PearlButton } from "@/components/ui/pearl-button";
import { GlassCard } from "@/components/ui/glass-card";

export default function Home() {
  return (
    <div className="space-y-16 pb-16">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Statistik Fakultas */}
      <StatCounter />

      {/* 3. Sambutan Dekan */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <GlassCard innerClassName="flex flex-col md:flex-row gap-8 items-center justify-between p-2 sm:p-4">
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B3A5C]">
              Pesan dari Pimpinan Fakultas
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed italic border-l-4 border-amber-500 pl-4 py-1">
              "{deanGreeting.message}"
            </p>
            <div className="flex items-center gap-4 pt-2">
              <div className="h-12 w-12 rounded-full bg-[#1B3A5C] text-amber-400 font-bold flex items-center justify-center text-lg shadow">
                AF
              </div>
              <div>
                <h4 className="text-base font-bold text-stone-900">{deanGreeting.name}</h4>
                <p className="text-xs text-amber-800 font-semibold">{deanGreeting.title}</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-80 shrink-0">
            <GlassCard className="bg-[#112236] text-white border-amber-500/30">
              <div className="space-y-3 text-center">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                  PMB 2026/2027 Ongoing
                </span>
                <h3 className="text-lg font-bold text-slate-100">
                  Gelombang 2 Reguler Dibuka
                </h3>
                <p className="text-xs text-slate-300">
                  Tenggat pendaftaran hingga {gelombangPMB[1].pendaftaran}. Dapatkan beasiswa prestasi & jalur bebas tes.
                </p>
                <div className="pt-2">
                  <PearlButton
                    href="/pmb"
                    size="sm"
                    variant="amber"
                    className="w-full"
                    label="Daftar PMB Sekarang →"
                  />
                </div>
              </div>
            </GlassCard>
          </div>
        </GlassCard>
      </section>

      {/* 4. Berita Terbaru */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B3A5C]">
              Berita Terbaru Fakultas
            </h2>
            <p className="text-stone-600 text-sm mt-1">
              Informasi kegiatan resmi, kerja sama industri, dan prestasi civitas akademika FT UNPAL
            </p>
          </div>
          <PearlButton
            href="/publikasi"
            size="sm"
            variant="blue"
            label="Lihat Semua Berita & Publikasi →"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {beritaFakultas.map((berita) => (
            <GlassCard key={berita.id} className="hover:-translate-y-1 transition-transform">
              <div className="space-y-3 flex flex-col justify-between h-full">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase text-amber-900 bg-amber-100 px-2.5 py-1 rounded-full border border-amber-200">
                      {berita.kategori}
                    </span>
                    <span className="text-[11px] text-stone-400 font-medium">{berita.tanggal}</span>
                  </div>
                  <h3 className="text-base font-bold text-stone-900 leading-snug">
                    {berita.judul}
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                    {berita.ringkasan}
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-200/60 text-xs text-amber-800 font-semibold">
                  Oleh: {berita.penulis}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* 5. Testimoni Alumni */}
      <AlumniTestimonialMarquee />

      {/* 6. Kemitraan */}
      <KemitraanSection />
    </div>
  );
}

