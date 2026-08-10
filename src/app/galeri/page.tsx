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
    title: item.title ?? "",
  }));

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner with Animated Diagonal Marquee Carousel Background */}
      <section className="relative w-full flex items-center justify-center min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] overflow-hidden bg-gradient-to-r from-[#112236] via-[#162B45] to-[#1B3A5C] text-white pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 mb-8 sm:mb-12">
        {/* Animated Diagonal Marquee Background */}
        <div className="absolute inset-0 opacity-30 pointer-events-none select-none">
          <DiagonalMarqueeCarousel
            cards={galleryCards}
            angle={-18}
            baseSpeed={85}
            className="h-full w-full"
            fadeClassName="from-[#112236] via-[#112236]/70 to-transparent"
          />
        </div>

        {/* Overlay Gradient & Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#112236]/80 via-[#1B3A5C]/75 to-[#112236] z-10 pointer-events-none" />

        {/* Header Text Content */}
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-3 pt-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            Galeri Kegiatan Kampus
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto font-light drop-shadow-md">
            Kumpulan dokumentasi kegiatan, praktikum laboratorium, seminar nasional, prosesi wisuda, dan aktivitas mahasiswa Fakultas Teknik Universitas Palembang.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <GalleryGrid />
      </section>
    </div>
  );
}

