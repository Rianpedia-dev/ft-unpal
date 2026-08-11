import Image from "next/image";
import HeroSection from "@/components/hero-section";
import AlumniTestimonialMarquee from "@/components/alumni-marquee";
import KemitraanSection from "@/components/kemitraan-section";
import { deanGreeting, faqFakultasData } from "@/data/site";
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
        <GlassCard innerClassName="p-6 sm:p-8 space-y-6">
          {/* Header Judul Sambutan Dekan */}
          <div className="flex flex-col sm:flex-row items-center justify-between border-b border-stone-200/80 pb-4 gap-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B3A5C]">
              Kata Sambutan Dekan
            </h2>
            <p className="text-xs sm:text-sm text-stone-700 font-semibold">
              Fakultas Teknik Universitas Palembang
            </p>
          </div>

          {/* Main 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Left Column: Profile Card & PMB Banner */}
            <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-6 justify-between">
              {/* Profile Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-stone-50 to-stone-100/90 border border-stone-200/80 text-center space-y-4 shadow-sm">
                <div className="relative w-40 h-40 sm:w-44 sm:h-44 mx-auto rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-md bg-[#1B3A5C]">
                  <Image
                    src={deanGreeting.photo}
                    alt={deanGreeting.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="176px"
                    priority
                  />
                </div>
                <div className="space-y-1.5 pt-1">
                  <h3 className="text-lg font-extrabold text-stone-900 leading-snug">
                    {deanGreeting.name}
                  </h3>
                  <p className="text-xs text-amber-800 font-semibold leading-relaxed">
                    {deanGreeting.title}
                  </p>
                </div>
              </div>

              {/* PMB Banner Card */}
              <div className="w-full rounded-2xl p-6 bg-gradient-to-br from-[#112236] via-[#1B3A5C] to-[#0D1D2D] text-white border border-amber-500/40 shadow-xl space-y-4 text-center">
                <h3 className="text-lg font-extrabold text-white tracking-wide">
                  {pmbBannerHome.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {pmbBannerHome.description}
                </p>

                <div className="pt-1">
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

            {/* Right Column: Full Sambutan Message */}
            <div className="md:col-span-7 lg:col-span-8 bg-white/70 p-6 sm:p-8 rounded-2xl border border-stone-200/80 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
                {deanGreeting.message.split("\n\n").map((para, idx) => {
                  const total = deanGreeting.message.split("\n\n").length;
                  const isHeaderOrFooter = idx === 0 || idx === total - 1;
                  return (
                    <p
                      key={idx}
                      className={
                        isHeaderOrFooter
                          ? "italic font-semibold text-[#1B3A5C]"
                          : "text-stone-700 font-normal"
                      }
                    >
                      {para}
                    </p>
                  );
                })}
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
            <p className="text-stone-800 text-sm sm:text-base font-medium max-w-2xl leading-relaxed">
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
      <FAQs
        title="Pertanyaan Umum Fakultas Teknik"
        description="Informasi penting seputar profil, keunggulan, program studi, serta fasilitas praktikum di Fakultas Teknik Universitas Palembang."
        items={faqFakultasData}
        helpdeskText="Layanan Informasi FT UNPAL"
      />
    </div>
  );
}

