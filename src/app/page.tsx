import Image from "next/image";
import HeroSection from "@/components/hero-section";
import AlumniTestimonialMarquee from "@/components/alumni-marquee";
import KemitraanSection from "@/components/kemitraan-section";
import { deanGreeting } from "@/data/site";
import { beritaFakultas } from "@/data/publications";
import { pmbBannerHome } from "@/data/pmb";
import { PearlButton } from "@/components/ui/pearl-button";
import { GlassCard } from "@/components/ui/glass-card";
import { ExpandableCard } from "@/components/ui/expandable-card";
import FAQs from "@/components/ui/text-reveal-faqs";

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
                sizes="(max-width: 640px) 112px, 144px"
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
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Left: Message Paragraphs */}
            <div className="md:col-span-7 lg:col-span-8 space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed italic border-l-4 border-amber-500 pl-4 sm:pl-6 py-1">
              {deanGreeting.message.split("\n\n").map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Right: PMB Banner Card */}
            <div className="md:col-span-5 lg:col-span-4 w-full">
              <div className="w-full rounded-2xl p-6 sm:p-7 bg-gradient-to-br from-[#112236] via-[#1B3A5C] to-[#0D1D2D] text-white border border-amber-500/40 shadow-2xl space-y-4 text-center">
                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-amber-300 bg-amber-500/15 px-3 py-1 rounded-full border border-amber-500/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                  {pmbBannerHome.statusBadge}
                </div>

                <h3 className="text-xl font-extrabold text-white tracking-wide">
                  {pmbBannerHome.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {pmbBannerHome.description}
                </p>

                <div className="pt-2">
                  <PearlButton
                    href={pmbBannerHome.ctaHref}
                    size="md"
                    variant="amber"
                    className="w-full"
                    label={pmbBannerHome.ctaLabel}
                  />
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* 4. Berita Terbaru */}
      <section className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
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
            <ExpandableCard
              key={berita.id}
              title={berita.judul}
              src={berita.gambar}
              description={berita.tanggal}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-700/80">
                  <span>Diterbitkan oleh: <strong className="text-amber-400 font-bold">{berita.penulis}</strong></span>
                  <span>{berita.tanggal}</span>
                </div>
                <h4 className="text-amber-300 font-extrabold text-lg">Ringkasan Berita & Liputan</h4>
                <p className="text-slate-200 leading-relaxed">
                  {berita.ringkasan}
                </p>
                <p className="text-slate-200 leading-relaxed">
                  Melalui berbagai inisiatif akademik dan kemitraan industri nasional, Fakultas Teknik Universitas Palembang berkomitmen tinggi menyelenggarakan pendidikan unggul, fasilitas laboratorium terpadu, serta wadah inovasi mahasiswa di bidang teknik.
                </p>
              </div>
            </ExpandableCard>
          ))}
        </div>
      </section>

      {/* 5. Testimoni Alumni */}
      <AlumniTestimonialMarquee />

      {/* 6. Kemitraan */}
      <KemitraanSection />

      {/* 7. Pertanyaan Umum (FAQ) */}
      <FAQs />
    </div>
  );
}

