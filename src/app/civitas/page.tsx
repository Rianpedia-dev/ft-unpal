import Image from "next/image";
import { siteConfig } from "@/data/site";
import CivitasGrid from "@/components/civitas-grid";

export const metadata = {
  title: `Civitas Akademika | ${siteConfig.name} ${siteConfig.university}`,
  description:
    "Mari kenali jajaran Pimpinan Dekanat, Dosen pengajar, serta Staf Tenaga Kependidikan Fakultas Teknik Universitas Palembang.",
};

export default function CivitasPage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="relative w-full flex items-center justify-center min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] overflow-hidden bg-slate-950 text-white pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 mb-8 sm:mb-12">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/upload/background-header/civitas.avif"
            alt="Civitas Background Header"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#112236]/80 via-[#162B45]/70 to-[#1B3A5C]/80 z-10" />
        </div>

        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4 pt-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            Civitas Akademika <br className="hidden sm:inline" />
            Fakultas Teknik Universitas Palembang
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-3xl mx-auto font-light leading-relaxed drop-shadow-sm">
            Mari kenali lebih dekat jajaran Pimpinan Dekanat, para Dosen pengajar profesional, serta Staf Tenaga Kependidikan Fakultas Teknik Universitas Palembang.
          </p>
        </div>
      </section>

      {/* Dekanat Cards Grid */}
      <section className="mx-auto max-w-7xl px-2.5 sm:px-6 lg:px-8">
        <CivitasGrid />
      </section>
    </div>
  );
}
