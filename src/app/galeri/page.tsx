import GalleryGrid from "@/components/gallery-grid";
import DiagonalMarqueeCarousel from "@/components/ui/diagonal-marquee-carousel";
import { siteConfig } from "@/data/site";
import { galleryItems } from "@/data/gallery";

export const metadata = {
  title: `Galeri | ${siteConfig.name} ${siteConfig.university}`,
  description:
    "Dokumentasi Kegiatan, Praktikum, Seminar, Wisuda, dan Kegiatan Mahasiswa Fakultas Teknik Universitas Palembang.",
};

export default function GaleriPage() {
  const galleryCards = galleryItems.map((item) => ({
    id: item.id,
    url: item.image,
    title: item.title,
  }));

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner with Animated Diagonal Marquee Carousel Background */}
      <section className="relative w-full h-[65vh] min-h-[460px] flex items-center justify-center overflow-hidden bg-[#0D1D2D] border-b border-amber-500/20">
        {/* Animated Diagonal Marquee Background */}
        <div className="absolute inset-0 opacity-40 pointer-events-none select-none">
          <DiagonalMarqueeCarousel
            cards={galleryCards}
            angle={-18}
            baseSpeed={85}
            className="h-full w-full"
            fadeClassName="from-[#0D1D2D] via-[#0D1D2D]/70 to-transparent"
          />
        </div>

        {/* Overlay Gradient & Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#112236]/80 via-[#1B3A5C]/75 to-[#112236] z-10 pointer-events-none" />

        {/* Header Text Content */}
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4 pt-12">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-xl">
            Galeri Kegiatan Kampus
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
            Kumpulan dokumentasi kegiatan, praktikum laboratorium, seminar nasional, prosesi wisuda, dan aktivitas mahasiswa Fakultas Teknik Universitas Palembang.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <GalleryGrid />
      </section>
    </div>
  );
}

