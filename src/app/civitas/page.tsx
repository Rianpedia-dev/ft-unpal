import Image from "next/image";
import { dekanatList } from "@/data/civitas";
import { siteConfig } from "@/data/site";
import { GlassCard } from "@/components/ui/glass-card";

export const metadata = {
  title: `Civitas Akademika | ${siteConfig.name} ${siteConfig.university}`,
  description:
    "Jajaran Pimpinan Dekanat Fakultas Teknik Universitas Palembang (Dekan dan para Wakil Dekan).",
};

export default function CivitasPage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#112236] to-[#1B3A5C] text-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Civitas Akademika FT UNPAL
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto font-light">
            Jajaran Pimpinan Dekanat Fakultas Teknik Universitas Palembang
          </p>
        </div>
      </section>

      {/* Dekanat Cards Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dekanatList.map((member) => (
            <GlassCard
              key={member.id}
              style={{ backgroundColor: "#08101C" }}
              innerStyle={{ backgroundColor: "#0E1A2B", color: "#FFFFFF" }}
              innerClassName="border border-red-900/50 hover:border-red-500/70 p-5 space-y-3 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Photo Box */}
              <div className="relative w-full h-56 rounded-xl overflow-hidden bg-slate-800 border border-slate-700/50">
                <Image
                  src={member.foto}
                  alt={member.nama}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>

              {/* Name & Title Badge */}
              <div className="space-y-2 text-center pt-1">
                <h3 className="text-base font-extrabold text-white leading-snug min-h-[44px] flex items-center justify-center">
                  {member.nama}
                </h3>

                <div>
                  <span className="inline-block bg-white/10 text-amber-300 border border-amber-400/20 px-3.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-widest uppercase">
                    {member.jabatan}
                  </span>
                </div>

                <p className="text-[11px] text-slate-400 font-mono tracking-wide">
                  NIDN: {member.nidn}
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-slate-800 my-2" />

              {/* Details List */}
              <div className="space-y-2 text-left text-[11px] text-slate-300 font-light pt-1">
                <div className="flex items-start gap-2">
                  <span className="text-slate-400 shrink-0">🔍</span>
                  <span className="line-clamp-1">{member.keahlian}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-slate-400 shrink-0">🎓</span>
                  <span className="line-clamp-2">{member.pendidikan}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-slate-400 shrink-0">✉️</span>
                  <span className="truncate text-amber-400">{member.email}</span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
}
