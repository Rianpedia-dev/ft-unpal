import { kemitraanList } from "@/data/site";
import { LogoCloud } from "@/components/ui/logo-cloud-2";

export default function KemitraanSection() {
  const formattedPartners = kemitraanList.map((mitra) => ({
    alt: mitra.nama,
    nama: mitra.nama,
    kategori: mitra.kategori,
    src: mitra.logo.startsWith("/") ? mitra.logo : undefined,
    icon: !mitra.logo.startsWith("/") ? mitra.logo : undefined,
  }));

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B3A5C]">
          Kemitraan Strategis
        </h2>
        <p className="text-stone-600 text-sm font-light leading-relaxed">
          Fakultas Teknik Universitas Palembang berkolaborasi aktif dengan BUMN, sektor energi, industri manufaktur, dan instansi pemerintah nasional.
        </p>
      </div>

      <div className="relative mx-auto w-full">
        <LogoCloud items={formattedPartners} />
      </div>
    </section>
  );
}
