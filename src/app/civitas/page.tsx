import Image from "next/image";
import { dekanatList } from "@/data/civitas";
import { siteConfig } from "@/data/site";
import { GlassCard } from "@/components/ui/glass-card";

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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6">
          {dekanatList.map((member) => (
            <GlassCard
              key={member.id}
              className="hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg overflow-hidden h-full"
              innerClassName="p-2.5 sm:p-4 space-y-2 flex flex-col justify-between h-full"
            >
              <div className="space-y-2">
                {/* Photo Box */}
                <div className="relative w-full h-36 sm:h-52 md:h-56 lg:h-52 rounded-lg sm:rounded-xl overflow-hidden bg-stone-100 border border-stone-200 shadow-inner">
                  <Image
                    src={member.foto}
                    alt={member.nama}
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>

                {/* Name & Title Badge */}
                <div className="space-y-1 text-center">
                  <h3 className="text-xs sm:text-base font-extrabold text-[#1B3A5C] leading-snug line-clamp-2">
                    {member.nama}
                  </h3>

                  <div>
                    <span className="inline-block bg-amber-100 text-amber-900 border border-amber-200 px-2 sm:px-3 py-0.5 rounded-full text-[9px] sm:text-[10px] font-extrabold tracking-wider uppercase">
                      {member.jabatan}
                    </span>
                  </div>

                  <p className="text-[9px] sm:text-[11px] text-stone-500 font-mono leading-none">
                    NIDN: {member.nidn}
                  </p>
                </div>
              </div>

              <div>
                {/* Divider */}
                <div className="border-t border-stone-200/80 my-1" />

                {/* Details List */}
                <div className="space-y-0.5 text-left text-[10px] sm:text-[11px] text-stone-600 font-normal">
                  <div className="flex items-start gap-1">
                    <span className="text-stone-400 shrink-0 text-[10px] sm:text-xs">🎓</span>
                    <span className="line-clamp-2 leading-tight">{member.pendidikan}</span>
                  </div>
                  <div className="flex items-start gap-1">
                    <span className="text-stone-400 shrink-0 text-[10px] sm:text-xs">✉️</span>
                    <span className="text-amber-800 font-semibold break-all leading-tight">{member.email}</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
}
