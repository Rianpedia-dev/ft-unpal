import Image from "next/image";
import HeroSection from "@/components/hero-section";
import AlumniTestimonialMarquee from "@/components/alumni-marquee";
import KemitraanSection from "@/components/kemitraan-section";
import { deanGreeting } from "@/data/site";
import { beritaFakultas } from "@/data/publications";
import { PearlButton } from "@/components/ui/pearl-button";
import { GlassCard } from "@/components/ui/glass-card";

export default function Home() {
  return (
    <div className="space-y-16 pb-16">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Sambutan Dekan */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <GlassCard innerClassName="p-6 sm:p-8 space-y-8">
          {/* Header Profile Dekan */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-stone-200/80">
            {/* Foto Dekan (Kotak & Lebih Besar) */}
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 shrink-0 rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-lg bg-[#1B3A5C]">
              <Image
                src={deanGreeting.photo}
                alt={deanGreeting.name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>

            {/* Information & Title */}
            <div className="flex-1 text-center sm:text-left space-y-2 pt-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B3A5C]">
                Sambutan Dekan
              </h2>
              <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                {deanGreeting.name}
              </h3>
              <p className="text-xs sm:text-sm text-amber-800 font-semibold">
                {deanGreeting.title}
              </p>
            </div>
          </div>

          {/* Grid Layout: Main Message & PMB Banner */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Message Paragraphs */}
            <div className="lg:col-span-8 space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed italic border-l-4 border-amber-500 pl-4 sm:pl-6 py-1">
              {deanGreeting.message.split("\n\n").map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Right: PMB Banner Card */}
            <div className="lg:col-span-4 w-full">
              <div className="w-full rounded-2xl p-6 sm:p-7 bg-gradient-to-br from-[#112236] via-[#1B3A5C] to-[#0D1D2D] text-white border border-amber-500/40 shadow-2xl space-y-4 text-center">
                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-amber-300 bg-amber-500/15 px-3 py-1 rounded-full border border-amber-500/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                  PMB 2026/2027 Ongoing
                </div>

                <h3 className="text-xl font-extrabold text-white tracking-wide">
                  Pendaftaran PMB Dibuka
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Penerimaan Mahasiswa Murni & Transisi S1 Teknik Sipil & Elektro. Pilihan Kelas Pagi, Sore, dan Akhir Pekan.
                </p>

                <div className="pt-2">
                  <PearlButton
                    href="/pmb"
                    size="md"
                    variant="amber"
                    className="w-full"
                    label="Daftar PMB Sekarang →"
                  />
                </div>
              </div>
            </div>
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
            <p className="text-stone-600 text-sm font-light max-w-2xl">
              Informasi kegiatan resmi, kerja sama industri, dan prestasi civitas akademika FT UNPAL.
            </p>
          </div>
          <PearlButton
            href="/publikasi"
            size="md"
            variant="blue"
            label="Lihat Semua Berita →"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {beritaFakultas.map((berita) => (
            <GlassCard
              key={berita.id}
              className="hover:-translate-y-1.5 transition-all duration-300 overflow-hidden group shadow-md"
              innerClassName="p-4 sm:p-5 flex flex-col justify-between h-full"
            >
              <div className="space-y-4">
                {/* Image Container with Zoom effect */}
                <div className="relative w-full h-48 rounded-xl overflow-hidden bg-slate-900 border border-stone-200 shadow-inner">
                  <Image
                    src={berita.gambar}
                    alt={berita.judul}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Date & Title */}
                <div className="space-y-2">
                  <div className="text-[11px] text-stone-400 font-medium tracking-wide">
                    📅 {berita.tanggal}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#1B3A5C] group-hover:text-amber-600 transition-colors leading-snug line-clamp-2">
                    {berita.judul}
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed font-light">
                    {berita.ringkasan}
                  </p>
                </div>
              </div>

              {/* Footer Link */}
              <div className="pt-3 mt-4 border-t border-stone-200/80 flex justify-end text-xs">
                <span className="text-amber-800 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1 text-xs">
                  Baca Selengkapnya →
                </span>
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

