import Image from "next/image";
import {
  jalurPendaftaran,
  jenisKelas,
  syaratMurni,
  syaratTransisi,
  portalPMBUrl,
  timPMB,
  pmbMembersData,
  rincianBiayaDetail,
  faqItemsData,
} from "@/data/pmb";
import { siteConfig, contactInfo } from "@/data/site";
import { PearlButton } from "@/components/ui/pearl-button";
import { GlassCard } from "@/components/ui/glass-card";
import { TeamSection } from "@/components/ui/team-section";
import { LineSidebar } from "@/components/ui/line-sidebar";
import FAQs from "@/components/ui/text-reveal-faqs";
const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.197 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.461c-1.852 0-3.601-.5-5.119-1.441l-.367-.228-3.805 1.001 1.016-3.711-.25-.397a9.789 9.789 0 0 1-1.498-5.263c0-5.408 4.4-9.808 9.808-9.808 2.62 0 5.083 1.021 6.936 2.876a9.75 9.75 0 0 1 2.876 6.932c0 5.41-4.4 9.81-9.809 9.81m0-18.066c-4.551 0-8.256 3.705-8.256 8.256 0 1.6.46 3.125 1.33 4.428l.205.308-.66 2.41 2.464-.646.295.176a8.219 8.219 0 0 0 4.222 1.173c4.55 0 8.255-3.706 8.255-8.256 0-2.206-.859-4.28-2.418-5.838a8.204 8.204 0 0 0-5.837-2.415" />
  </svg>
);

const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <polygon points="10 15 15 12 10 9 10 15" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export const metadata = {
  title: `PMB 2026/2027 | ${siteConfig.name} ${siteConfig.university}`,
  description:
    "Penerimaan Mahasiswa Baru Fakultas Teknik Universitas Palembang. Jalur Pendaftaran, Jenis Kelas, Biaya Pendidikan, Syarat Pendaftaran, dan Tim PMB.",
};

export default function PMBPage() {
  const pmbMembers = pmbMembersData.map((member) => ({
    name: member.name,
    designation: member.designation,
    imageSrc: member.imageSrc,
    socialLinks: [
      { icon: WhatsappIcon, href: `https://wa.me/${timPMB.hotline.replace(/[^0-9]/g, "")}` },
      { icon: MailIcon, href: `mailto:${timPMB.email}` },
    ],
  }));

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="relative w-full flex items-center justify-center min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] overflow-hidden bg-slate-950 text-white pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 mb-8 sm:mb-12">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/upload/background-header/pmb.avif"
            alt="PMB Background Header"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#112236]/80 via-[#162B45]/70 to-[#1B3A5C]/80 z-10" />
        </div>

        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-3 pt-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            Penerimaan Mahasiswa Baru
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto font-light drop-shadow-sm">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jenisKelas.map((kelas, idx) => (
            <GlassCard key={idx} className="hover:-translate-y-1 transition-transform">
              <div className="space-y-4 flex flex-col justify-between h-full">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-[#1B3A5C] uppercase tracking-wider">
                      Opsi {idx + 1}
                    </span>
                    <span
                      className={`text-[11px] font-extrabold px-2.5 py-1 rounded-full ${kelas.kategori === "REGULER"
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
            Rincian Biaya Pendidikan
          </h2>
          <p className="text-stone-600 text-sm">
            Rincian biaya perkuliahan resmi untuk Mahasiswa Murni dan Mahasiswa Transisi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {rincianBiayaDetail.map((b, idx) => (
            <GlassCard
              key={idx}
              className="hover:-translate-y-1 transition-transform h-full"
              innerClassName="p-6 space-y-5 flex flex-col justify-between h-full"
            >
              <div className="space-y-5">
                {/* Header Card */}
                <div className="flex justify-between items-center border-b border-stone-200/80 pb-4">
                  <h3 className="text-xl font-extrabold text-[#1B3A5C]">
                    {b.kategori}
                  </h3>
                  <span
                    className={`text-xs font-extrabold px-3 py-1 rounded-full border ${
                      idx === 0
                        ? "bg-blue-100 text-blue-900 border-blue-200"
                        : "bg-amber-100 text-amber-900 border-amber-200"
                    }`}
                  >
                    {b.badgeText}
                  </span>
                </div>

                {/* List Rincian per Kelas */}
                <div className="space-y-4">
                  {b.rincianKelas.map((kelas, kIdx) => (
                    <div
                      key={kIdx}
                      className="bg-white/80 rounded-2xl p-4 border border-stone-200/80 shadow-xs space-y-2.5"
                    >
                      <div className="flex items-center gap-2 border-b border-stone-100 pb-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-500 shrink-0" />
                        <h4 className="font-extrabold text-sm text-[#1B3A5C]">
                          {kelas.namaKelas}
                        </h4>
                      </div>

                      <div className="space-y-1.5 pt-0.5">
                        {kelas.items.map((item, iIdx) => (
                          <div
                            key={iIdx}
                            className="flex justify-between items-center text-xs sm:text-sm"
                          >
                            <span className="text-stone-600 font-medium">
                              {item.label}
                            </span>
                            <span className="font-bold text-stone-900 font-mono">
                              {item.nominal}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
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
            <div className="overflow-x-auto py-2">
              <LineSidebar
                items={syaratMurni}
                showMarker={false}
                enableTracking={false}
                accentColor="#1B3A5C"
                textColor="#334155"
                fontSize={0.9}
                itemGap={14}
              />
            </div>
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
            <div className="overflow-x-auto py-2">
              <LineSidebar
                items={syaratTransisi}
                showMarker={false}
                enableTracking={false}
                accentColor="#D97706"
                textColor="#334155"
                fontSize={0.9}
                itemGap={14}
              />
            </div>
          </GlassCard>
        </div>
      </section>

      {/* 5. TIM PENERIMAAN MAHASISWA BARU */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <TeamSection
          title="Tim PMB"
          description="Panitia Penerimaan Mahasiswa Baru FT UNPAL siap melayani informasi pendaftaran, verifikasi berkas, dan layanan konsultasi Anda"
          members={pmbMembers}
        />
      </section>

      {/* 5. FAQS SECTION */}
      <FAQs
        title="Pertanyaan Umum PMB"
        description="Informasi penting seputar pendaftaran mahasiswa baru Fakultas Teknik Universitas Palembang."
        items={faqItemsData}
        helpdeskText="Helpdesk PMB FT UNPAL"
      />
    </div>
  );
}
