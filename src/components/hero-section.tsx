import { siteConfig } from "@/data/site";
import { PearlButton } from "@/components/ui/pearl-button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#112236] via-[#1B3A5C] to-[#0A1626] text-white py-20 lg:py-28">
      {/* Dynamic Background Pattern Elements */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C8A951_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          {/* Headline */}
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-slate-100 leading-tight">
            Membangun Masa Depan <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 bg-clip-text text-transparent">
              Teknologi & Inovasi
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl font-light">
            Selamat datang di {siteConfig.name} {siteConfig.university}. Mencetak sarjana teknik yang kompeten, berdaya saing global, dan berintegritas tinggi.
          </p>

          {/* Call-to-Actions */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <PearlButton
              href="/pmb"
              size="lg"
              variant="amber"
              label="Pendaftaran PMB Online →"
            />
            <PearlButton
              href="/profil"
              size="lg"
              variant="blue"
              label="Jelajahi Profil Fakultas"
            />
          </div>

          {/* Highlights Grid */}
          <div className="pt-8 border-t border-slate-700/50 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs sm:text-sm text-slate-300">
            <div>
              <span className="block font-bold text-amber-400 text-base sm:text-lg">Akreditasi Baik</span>
              <span>BAN-PT</span>
            </div>
            <div>
              <span className="block font-bold text-amber-400 text-base sm:text-lg">4 Prodi S1</span>
              <span>Sipil, Mesin, Elektro, Informatika</span>
            </div>
            <div>
              <span className="block font-bold text-amber-400 text-base sm:text-lg">Lab Modern</span>
              <span>Fasilitas Terpadu</span>
            </div>
            <div>
              <span className="block font-bold text-amber-400 text-base sm:text-lg">Ribuan Alumni</span>
              <span>Karir Sektor Industri</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
