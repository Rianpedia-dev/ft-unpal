import { contactInfo } from "@/data/site";
import { PearlButton } from "@/components/ui/pearl-button";
import { GlassCard } from "@/components/ui/glass-card";

export default function KontakPage() {
  const socialPlatforms = [
    {
      nama: "Instagram",
      handle: "@ft_unpal",
      url: contactInfo.socialMedia.instagram,
      icon: "📸",
      color: "from-pink-500 to-rose-600",
    },
    {
      nama: "Facebook",
      handle: "FT Universitas Palembang",
      url: contactInfo.socialMedia.facebook,
      icon: "📘",
      color: "from-blue-600 to-indigo-700",
    },
    {
      nama: "YouTube Channel",
      handle: "Fakultas Teknik UNPAL Official",
      url: contactInfo.socialMedia.youtube,
      icon: "🎥",
      color: "from-red-600 to-rose-700",
    },
    {
      nama: "Twitter / X",
      handle: "@ft_unpal",
      url: contactInfo.socialMedia.twitter,
      icon: "🐦",
      color: "from-slate-700 to-slate-900",
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#112236] to-[#1B3A5C] text-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Hubungi Fakultas Teknik
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto font-light">
            Informasi Alamat Gedung, Peta Google Maps, Direct WhatsApp Helpdesk, Email Resmi, dan Media Sosial Fakultas.
          </p>
        </div>
      </section>

      {/* 1. ALAMAT & WHATSAPP & PETA MAPS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details & WhatsApp Button */}
          <div className="lg:col-span-5 flex">
            <GlassCard
              style={{ backgroundColor: "#0F1E2E" }}
              innerStyle={{ backgroundColor: "#112236", color: "#FFFFFF" }}
              innerClassName="bg-gradient-to-br from-[#112236] to-[#1B3A5C] text-white space-y-6 w-full flex flex-col justify-between border border-amber-500/20"
            >
              <div>
                <h3 className="text-2xl font-extrabold text-white">
                  Gedung Dekanat FT UNPAL
                </h3>
              </div>

              {/* Alamat & Email Detail */}
              <div className="space-y-4 text-sm text-slate-300 font-light">
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 text-lg shrink-0">📍</span>
                  <div>
                    <span className="font-bold text-amber-300 block text-xs uppercase">Alamat Lengkap:</span>
                    <span>{contactInfo.address}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-amber-400 text-lg shrink-0">📞</span>
                  <div>
                    <span className="font-bold text-amber-300 block text-xs uppercase">Telepon Kantor:</span>
                    <span>{contactInfo.phone}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-amber-400 text-lg shrink-0">✉️</span>
                  <div>
                    <span className="font-bold text-amber-300 block text-xs uppercase">Email Resmi:</span>
                    <span>{contactInfo.email}</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Callout */}
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-400/30 space-y-3">
                <div className="flex items-center gap-2 text-amber-300 text-sm font-bold">
                  <span>💬</span>
                  <span>Direct WhatsApp Helpdesk</span>
                </div>
                <p className="text-xs text-slate-300">
                  Layanan pesan cepat untuk pertanyaan seputar perkuliahan dan pendaftaran:
                </p>
                <PearlButton
                  href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`}
                  size="sm"
                  variant="amber"
                  className="w-full"
                  label={`Chat via WhatsApp (${contactInfo.whatsapp}) →`}
                />
              </div>

              <div className="pt-2 border-t border-slate-700 text-xs text-amber-300 space-y-1">
                <p className="font-bold">Jam Operasional Layanan:</p>
                <p>Senin - Jumat: 08.00 - 16.00 WIB | Sabtu: 08.00 - 12.00 WIB</p>
              </div>
            </GlassCard>
          </div>

          {/* Google Maps Section */}
          <div className="lg:col-span-7 flex">
            <GlassCard innerClassName="space-y-4 w-full flex flex-col justify-between">
              <div className="flex justify-between items-center border-b border-stone-200/60 pb-3">
                <div>
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">Lokasi Kampus</span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1B3A5C]">
                    Peta Google Maps FT UNPAL
                  </h2>
                </div>
                <span className="text-xs text-amber-800 font-semibold bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
                  Bukit Besar, Palembang
                </span>
              </div>

              <div className="h-[380px] sm:h-[420px] w-full rounded-2xl overflow-hidden bg-stone-200 border border-stone-300 shrink-0">
                <iframe
                  title="Lokasi Fakultas Teknik Universitas Palembang"
                  src="https://maps.google.com/maps?q=Universitas%20Palembang&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* 2. MEDIA SOSIAL */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B3A5C]">
            Media Sosial Resmi
          </h2>
          <p className="text-stone-600 text-sm">
            Ikuti kabar terkini, kegiatan kampus, dan pengumuman resmi melalui akun sosial media kami
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialPlatforms.map((soc, idx) => (
            <a
              key={idx}
              href={soc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <GlassCard className="hover:-translate-y-1 transition-transform h-full">
                <div className="flex items-center gap-4">
                  <div className={`h-12 w-12 rounded-2xl bg-gradient-to-tr ${soc.color} text-white font-bold text-2xl flex items-center justify-center shadow`}>
                    {soc.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-stone-900 group-hover:text-[#1B3A5C] transition-colors">
                      {soc.nama}
                    </h3>
                    <p className="text-xs text-amber-800 font-semibold">{soc.handle}</p>
                  </div>
                </div>
              </GlassCard>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
