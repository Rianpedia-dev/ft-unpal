import GalleryGrid from "@/components/gallery-grid";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: `Galeri | ${siteConfig.name} ${siteConfig.university}`,
  description: "Dokumentasi Kegiatan, Praktikum, Seminar, Wisuda, dan Kegiatan Mahasiswa Fakultas Teknik Universitas Palembang.",
};

export default function GaleriPage() {
  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#112236] to-[#1B3A5C] text-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Galeri Kegiatan Kampus
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto font-light">
            Kumpulan dokumentasi kegiatan, praktikum laboratorium, seminar nasional, prosesi wisuda, dan aktivitas mahasiswa.
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

