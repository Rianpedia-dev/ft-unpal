import { kemitraanList } from "@/data/site";
import { GlassCard } from "@/components/ui/glass-card";

export default function KemitraanSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B3A5C]">
          Kemitraan Strategis
        </h2>
        <p className="text-stone-600 text-sm">
          Fakultas Teknik Universitas Palembang berkolaborasi dengan BUMN, industri terkemuka, dan instansi pemerintah.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {kemitraanList.map((mitra, idx) => (
          <GlassCard key={idx} className="hover:-translate-y-1 transition-transform">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 shrink-0 rounded-2xl bg-[#1B3A5C] text-amber-400 font-bold text-2xl flex items-center justify-center shadow-sm">
                {mitra.logo}
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md">
                  {mitra.kategori}
                </span>
                <h3 className="text-base font-bold text-stone-900 mt-1">
                  {mitra.nama}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed font-normal">
                  {mitra.deskripsi}
                </p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
