import {
  jalurPendaftaran,
  jenisKelas,
  syaratMurni,
  syaratTransisi,
  portalPMBUrl,
  timPMB,
} from "@/data/pmb";
import { siteConfig } from "@/data/site";
import { PearlButton } from "@/components/ui/pearl-button";
import { GlassCard } from "@/components/ui/glass-card";

export const metadata = {
  title: `PMB 2026/2027 | ${siteConfig.name} ${siteConfig.university}`,
  description:
    "Penerimaan Mahasiswa Baru Fakultas Teknik Universitas Palembang. Jalur Pendaftaran, Jenis Kelas, Biaya Pendidikan, Syarat Pendaftaran, dan Tim PMB.",
};

export default function PMBPage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#112236] via-[#1B3A5C] to-[#0A1626] text-white py-24 sm:py-28">
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

      {/* 1. PILIHAN JALUR PENDAFTARAN */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B3A5C]">
            Pilihan Jalur Pendaftaran
          </h2>
          <p className="text-stone-600 text-sm">
            Tersedia dua skema penerimaan mahasiswa sesuai latar belakang pendidikan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {jalurPendaftaran.map((jalur, idx) => (
            <GlassCard key={idx} className="hover:-translate-y-1 transition-transform">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-extrabold uppercase text-amber-900 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
                    Jalur {jalur.badge}
                  </span>
                  <span className="text-xs text-stone-400 font-medium">FT UNPAL</span>
                </div>
                <h3 className="text-xl font-extrabold text-[#1B3A5C]">
                  {jalur.nama}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {jalur.deskripsi}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* 2. PILIHAN JENIS KELAS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B3A5C]">
            Pilihan Jenis Kelas
          </h2>
          <p className="text-stone-600 text-sm">
            Jadwal fleksibel untuk mahasiswa reguler maupun praktisi pekerja
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jenisKelas.map((kelas, idx) => (
            <GlassCard key={idx} className="hover:-translate-y-1 transition-transform">
              <div className="space-y-4 flex flex-col justify-between h-full">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-[#1B3A5C] uppercase tracking-wider">
                      Opsi {idx + 1}
                    </span>
                    <span
                      className={`text-[11px] font-extrabold px-2.5 py-1 rounded-full ${
                        kelas.kategori === "REGULER"
                          ? "bg-blue-100 text-blue-900 border border-blue-200"
                          : "bg-amber-100 text-amber-900 border border-amber-200"
                      }`}
                    >
                      {kelas.kategori}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-stone-900">{kelas.nama}</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">{kelas.deskripsi}</p>
                </div>

                <div className="space-y-2 text-xs border-t border-stone-200/60 pt-3 text-stone-700">
                  <div className="flex justify-between">
                    <span className="font-bold text-stone-900">Jadwal:</span>
                    <span className="font-semibold text-amber-800">{kelas.jadwal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-stone-900">Durasi:</span>
                    <span className="font-mono text-stone-800">{kelas.durasi}</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* 3. BIAYA PENDIDIKAN */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B3A5C]">
            Biaya Pendidikan
          </h2>
          <p className="text-stone-600 text-sm">
            Struktur pengelompokan biaya perkuliahan berdasarkan jalur dan jenis kelas pilihan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Mahasiswa Murni */}
          <GlassCard className="hover:-translate-y-1 transition-transform">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-stone-200/60 pb-3">
                <h3 className="text-lg font-extrabold text-[#1B3A5C]">
                  Biaya Mahasiswa Murni
                </h3>
                <span className="text-xs font-bold bg-blue-100 text-blue-900 px-2.5 py-0.5 rounded-full">
                  Lulusan SLTA
                </span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                <li className="flex items-center gap-2 bg-white/60 p-3 rounded-xl border border-stone-200">
                  <span className="text-amber-600 font-bold">▸</span>
                  <span><strong>Kelas A</strong> (Pagi dan Sore)</span>
                </li>
                <li className="flex items-center gap-2 bg-white/60 p-3 rounded-xl border border-stone-200">
                  <span className="text-amber-600 font-bold">▸</span>
                  <span><strong>Kelas B</strong> (Jum'at - Sabtu)</span>
                </li>
              </ul>
            </div>
          </GlassCard>

          {/* Mahasiswa Transisi */}
          <GlassCard className="hover:-translate-y-1 transition-transform">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-stone-200/60 pb-3">
                <h3 className="text-lg font-extrabold text-[#1B3A5C]">
                  Biaya Mahasiswa Transisi
                </h3>
                <span className="text-xs font-bold bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full">
                  Pindahan / D3 ke S1
                </span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                <li className="flex items-center gap-2 bg-white/60 p-3 rounded-xl border border-stone-200">
                  <span className="text-amber-600 font-bold">▸</span>
                  <span><strong>Kelas A</strong> (Pagi dan Sore)</span>
                </li>
                <li className="flex items-center gap-2 bg-white/60 p-3 rounded-xl border border-stone-200">
                  <span className="text-amber-600 font-bold">▸</span>
                  <span><strong>Kelas B</strong> (Jum'at - Sabtu)</span>
                </li>
              </ul>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* 4. SYARAT PENDAFTARAN */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B3A5C]">
            Syarat Pendaftaran
          </h2>
          <p className="text-stone-600 text-sm">
            Lengkapi seluruh dokumen persyaratan fisik dan administrasi sebelum melakukan pendaftaran
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mahasiswa Murni */}
          <GlassCard innerClassName="space-y-4">
            <div className="flex justify-between items-center border-b border-stone-200/60 pb-3">
              <h3 className="text-lg font-extrabold text-[#1B3A5C]">
                Persyaratan Mahasiswa Murni
              </h3>
              <span className="text-xs font-bold bg-blue-100 text-blue-900 px-2.5 py-1 rounded-full">
                10 Poin Syarat
              </span>
            </div>
            <ol className="space-y-2.5">
              {syaratMurni.map((syarat, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700 bg-white/70 p-3 rounded-xl border border-stone-200">
                  <span className="shrink-0 w-6 h-6 flex items-center justify-center bg-[#1B3A5C] text-amber-300 rounded-full font-bold text-xs">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed pt-0.5 font-medium">{syarat}</span>
                </li>
              ))}
            </ol>
          </GlassCard>

          {/* Mahasiswa Transisi */}
          <GlassCard innerClassName="space-y-4">
            <div className="flex justify-between items-center border-b border-stone-200/60 pb-3">
              <h3 className="text-lg font-extrabold text-[#1B3A5C]">
                Persyaratan Mahasiswa Transisi
              </h3>
              <span className="text-xs font-bold bg-amber-100 text-amber-900 px-2.5 py-1 rounded-full">
                11 Poin Syarat
              </span>
            </div>
            <ol className="space-y-2.5">
              {syaratTransisi.map((syarat, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700 bg-white/70 p-3 rounded-xl border border-stone-200">
                  <span className="shrink-0 w-6 h-6 flex items-center justify-center bg-amber-600 text-white rounded-full font-bold text-xs">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed pt-0.5 font-medium">{syarat}</span>
                </li>
              ))}
            </ol>
          </GlassCard>
        </div>
      </section>

      {/* 5. TIM PENERIMAAN MAHASISWA BARU */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <GlassCard
          style={{ backgroundColor: "#0F1E2E" }}
          innerStyle={{ backgroundColor: "#112236", color: "#FFFFFF" }}
          innerClassName="border border-amber-500/30 shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block text-xs font-extrabold uppercase text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                Layanan Panitia
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Tim Penerimaan Mahasiswa Baru
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Panitia PMB FT UNPAL siap membantu proses konsultasi, informasi pendaftaran, dan verifikasi berkas Anda.
              </p>

              <div className="space-y-2 text-xs sm:text-sm text-amber-300 pt-3 border-t border-slate-700/60">
                <p><span className="font-bold text-white">Penanggung Jawab:</span> {timPMB.ketuaPanitia}</p>
                <p><span className="font-bold text-white">Lokasi Sekretariat:</span> {timPMB.sekretariat}</p>
                <p><span className="font-bold text-white">Jam Operasional:</span> {timPMB.jamLayanan}</p>
                <p><span className="font-bold text-white">Staf Helpdesk:</span> {timPMB.stafHelpdesk.join(", ")}</p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-[#1B3A5C] to-[#0A1626] p-6 rounded-2xl border border-amber-400/20 space-y-4 text-center">
              <span className="text-4xl block">📞</span>
              <h3 className="text-lg font-bold text-amber-300">Hubungi Direct WhatsApp</h3>
              <p className="text-xs text-slate-300">
                Punya pertanyaan mengenai pendaftaran? Obrolkan langsung dengan Panitia PMB.
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
