import Timeline from "@/components/timeline";
import {
  gelombangPMB,
  persyaratanPMB,
  rincianBiaya,
  prosedurPMB,
  portalPMBUrl,
  faqPMB,
  timPMB,
} from "@/data/pmb";
import { siteConfig } from "@/data/site";
import { PearlButton } from "@/components/ui/pearl-button";
import { GlassCard } from "@/components/ui/glass-card";

export const metadata = {
  title: `PMB 2026/2027 | ${siteConfig.name} ${siteConfig.university}`,
  description:
    "Penerimaan Mahasiswa Baru Fakultas Teknik Universitas Palembang. Informasi Pendaftaran, Persyaratan, Biaya Pendidikan, FAQ, dan Tim PMB.",
};

export default function PMBPage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#112236] via-[#1B3A5C] to-[#0A1626] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Penerimaan Mahasiswa Baru
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto font-light">
            Bergabunglah menjadi bagian dari Fakultas Teknik Universitas Palembang dan wujudkan karir profesional di bidang keilmuan teknik.
          </p>

          <div className="pt-4 flex justify-center">
            <PearlButton
              href={portalPMBUrl}
              size="lg"
              variant="amber"
              label="Daftar Online via Portal PMB →"
            />
          </div>
        </div>
      </section>

      {/* 1. INFORMASI PENDAFTARAN (GELOMBANG & ALUR) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B3A5C]">
              Informasi Pendaftaran PMB 2026
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gelombangPMB.map((gel, idx) => (
              <GlassCard
                key={idx}
                className={gel.status === "Buka" ? "ring-2 ring-amber-500/40" : ""}
              >
                <div className="space-y-4 flex flex-col justify-between h-full">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-[#1B3A5C] uppercase tracking-wider">
                        Gelombang {idx + 1}
                      </span>
                      <span
                        className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                          gel.status === "Buka"
                            ? "bg-emerald-100 text-emerald-800"
                            : gel.status === "Selesai"
                            ? "bg-stone-200 text-stone-600"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        ● {gel.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-stone-900">{gel.nama}</h3>
                  </div>

                  <div className="space-y-2 text-xs text-stone-600 border-t border-stone-200/60 pt-3">
                    <p>
                      <span className="font-bold text-stone-800">Pendaftaran:</span> {gel.pendaftaran}
                    </p>
                    <p>
                      <span className="font-bold text-stone-800">Ujian/Seleksi:</span> {gel.tes}
                    </p>
                    <p>
                      <span className="font-bold text-stone-800">Pengumuman:</span> {gel.pengumuman}
                    </p>
                    <p>
                      <span className="font-bold text-stone-800">Daftar Ulang:</span> {gel.daftarUlang}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Alur Stepper */}
        <GlassCard innerClassName="space-y-6">
          <div>
            <h2 className="text-2xl font-extrabold text-[#1B3A5C]">
              Prosedur Pendaftaran Step-by-Step
            </h2>
          </div>
          <Timeline steps={prosedurPMB} />
        </GlassCard>
      </section>

      {/* 2. PERSYARATAN */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <GlassCard innerClassName="space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B3A5C]">
              Persyaratan Pendaftaran
            </h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {persyaratanPMB.map((syarat, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700 bg-white/70 p-3.5 rounded-xl border border-stone-200">
                <span className="text-amber-600 font-extrabold text-base">✓</span>
                <span className="leading-relaxed pt-0.5">{syarat}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </section>

      {/* 3. BIAYA PENDIDIKAN */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B3A5C]">
            Biaya Pendidikan (S1)
          </h2>
          <p className="text-stone-600 text-sm">
            Tabel rincian biaya SPP, DPP, dan Praktikum per semester untuk seluruh program studi
          </p>
        </div>

        <GlassCard innerClassName="p-0 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-stone-700">
              <thead className="bg-[#1B3A5C] text-amber-300 text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">Program Studi</th>
                  <th className="px-6 py-4">Dana Pengembangan (DPP)</th>
                  <th className="px-6 py-4">SPP / Semester</th>
                  <th className="px-6 py-4">Praktikum / Semester</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200/60">
                {rincianBiaya.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/40 transition-colors">
                    <td className="px-6 py-4 font-bold text-stone-900">{item.prodi}</td>
                    <td className="px-6 py-4 text-stone-600">{item.dpp}</td>
                    <td className="px-6 py-4 text-stone-600">{item.spp}</td>
                    <td className="px-6 py-4 text-stone-600">{item.praktikum}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </section>

      {/* 4. FAQ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B3A5C]">
            FAQ Penerimaan Mahasiswa Baru
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqPMB.map((faq, idx) => (
            <GlassCard key={idx} className="hover:-translate-y-1 transition-transform">
              <div className="space-y-3">
                <h3 className="text-base font-bold text-[#1B3A5C] flex items-start gap-2">
                  <span className="text-amber-500 font-black">Q:</span>
                  <span>{faq.pertanyaan}</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                  {faq.jawaban}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* 5. TIM PMB */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <GlassCard className="bg-[#112236] text-white border-amber-500/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
                Tim PMB & Layanan Informasi
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Panitia PMB FT UNPAL siap membantu proses konsultasi, informasi beasiswa, dan verifikasi berkas Anda.
              </p>

              <div className="space-y-2 text-xs text-amber-200 pt-2">
                <p><span className="font-bold text-white">Penanggung Jawab:</span> {timPMB.ketuaPanitia}</p>
                <p><span className="font-bold text-white">Lokasi Sekretariat:</span> {timPMB.sekretariat}</p>
                <p><span className="font-bold text-white">Jam Operational:</span> {timPMB.jamLayanan}</p>
                <p><span className="font-bold text-white">Staf Helpdesk:</span> {timPMB.stafHelpdesk.join(", ")}</p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-[#1B3A5C] to-[#0A1626] p-6 rounded-2xl border border-amber-400/20 space-y-4 text-center">
              <span className="text-3xl">📞</span>
              <h3 className="text-lg font-bold text-amber-300">Hubungi Direct WhatsApp</h3>
              <p className="text-xs text-slate-300">
                Punya pertanyaan cepat? Obrolkan langsung dengan Panitia PMB.
              </p>
              <PearlButton
                href={`https://wa.me/${timPMB.hotline.replace(/[^0-9]/g, "")}`}
                size="md"
                variant="amber"
                className="w-full"
                label={`Chat Panitia PMB (${timPMB.hotline}) →`}
              />
            </div>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}

