import { Dosen } from "@/data/civitas";
import { GlassCard } from "@/components/ui/glass-card";

interface DosenCardProps {
  dosen: Dosen;
}

export default function DosenCard({ dosen }: DosenCardProps) {
  return (
    <GlassCard className="hover:-translate-y-1 transition-transform">
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Avatar Placeholder / Foto */}
        <div className="relative h-24 w-24 rounded-full bg-gradient-to-tr from-[#1B3A5C] to-amber-600 p-1 shadow-md group-hover:scale-105 transition-transform">
          <div className="h-full w-full rounded-full bg-[#F5F0E8] flex items-center justify-center text-2xl font-bold text-[#1B3A5C]">
            {dosen.nama
              .split(" ")
              .map((n) => n[0])
              .filter((char) => /[A-Za-z]/.test(char))
              .slice(0, 2)
              .join("")}
          </div>
        </div>

        {/* Info */}
        <div className="space-y-1">
          <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-100/90 text-amber-900 shadow-sm border border-amber-200">
            {dosen.prodi}
          </span>
          <h3 className="text-base font-bold text-stone-900 leading-snug group-hover:text-[#1B3A5C] transition-colors">
            {dosen.nama}
          </h3>
          <p className="text-xs text-stone-500 font-medium">NIDN: {dosen.nidn}</p>
          <p className="text-xs text-amber-800 font-semibold pt-1">{dosen.jabatan}</p>
        </div>

        {/* Bidang Keahlian */}
        <div className="w-full pt-3 border-t border-stone-200/60">
          <div className="flex flex-wrap gap-1.5 justify-center">
            {dosen.keahlian.map((item, idx) => (
              <span
                key={idx}
                className="text-[11px] font-medium bg-white/80 text-stone-700 border border-stone-200 px-2 py-0.5 rounded-md shadow-2xs"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Contact */}
        <div className="w-full pt-3 border-t border-stone-200/60 text-center">
          <a
            href={`mailto:${dosen.email}`}
            className="text-xs font-semibold text-[#1B3A5C] hover:text-amber-600 transition-colors inline-flex items-center gap-1"
          >
            ✉️ {dosen.email}
          </a>
        </div>
      </div>
    </GlassCard>
  );
}
