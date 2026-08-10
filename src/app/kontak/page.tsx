import Image from "next/image";
import { contactInfo } from "@/data/site";
import { socialLinksData, kontakPageContent } from "@/data/kontak";
import { PearlButton } from "@/components/ui/pearl-button";
import { GlassCard } from "@/components/ui/glass-card";
import { ContactCard } from "@/components/ui/contact-card";
import { SocialTooltip, SocialItem } from "@/components/ui/social-media";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function KontakPage() {
  const socialLinks: SocialItem[] = socialLinksData.map((item) => ({
    href: item.href,
    ariaLabel: item.ariaLabel,
    tooltip: item.tooltip,
    color: item.color,
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d={item.svgPath} />
      </svg>
    ),
  }));

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="relative w-full flex items-center justify-center min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] overflow-hidden bg-slate-950 text-white pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 mb-8 sm:mb-12">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/upload/background-header/kontak.avif"
            alt="Kontak Background Header"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#112236]/80 via-[#162B45]/70 to-[#1B3A5C]/80 z-10" />
        </div>

        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-3 pt-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            {kontakPageContent.headerTitle}
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto font-light drop-shadow-sm">
            {kontakPageContent.headerSubtitle}
          </p>
        </div>
      </section>

      {/* 1. FORMULIR KONTAK & MEDIA SOSIAL */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ContactCard
          title={kontakPageContent.formTitle}
          description={kontakPageContent.formDescription}
          socialsNode={<SocialTooltip items={socialLinks} />}
        >
          <form action="" className="w-full space-y-4">
            <div className="flex flex-col gap-2">
              <Label>Nama Lengkap</Label>
              <Input type="text" placeholder="Masukkan nama Anda..." />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Email</Label>
              <Input type="email" placeholder="nama@email.com" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Nomor Telepon / WhatsApp</Label>
              <Input type="tel" placeholder="08xxxxxxxxxx" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Pesan / Pertanyaan</Label>
              <Textarea placeholder="Tuliskan pertanyaan Anda di sini..." />
            </div>
            <Button className="w-full font-bold" type="button">
              Kirim Pesan →
            </Button>
          </form>
        </ContactCard>
      </section>

      {/* 2. ALAMAT & PETA MAPS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details */}
          <div className="lg:col-span-5 flex">
            <GlassCard
              style={{ backgroundColor: "#0F1E2E" }}
              innerStyle={{ backgroundColor: "#112236", color: "#FFFFFF" }}
              innerClassName="bg-gradient-to-br from-[#112236] to-[#1B3A5C] text-white space-y-6 w-full flex flex-col justify-start border border-amber-500/20"
            >
              <div>
                <h3 className="text-2xl font-extrabold text-white">
                  {kontakPageContent.cardGedungTitle}
                </h3>
              </div>

              {/* Detail Kontak & Jam Operasional */}
              <div className="space-y-4 text-sm text-slate-300 font-light">
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 text-lg shrink-0">🕒</span>
                  <div>
                    <span className="font-bold text-amber-300 block text-xs uppercase">Jam Operasional Layanan:</span>
                    <span>{contactInfo.operationalHours}</span>
                  </div>
                </div>

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
            </GlassCard>
          </div>

          {/* Google Maps Section */}
          <div className="lg:col-span-7 flex">
            <GlassCard innerClassName="w-full h-full flex flex-col justify-center !p-2.5 sm:!p-3.5">
              <div className="h-[280px] sm:h-[380px] lg:h-[420px] w-full rounded-xl overflow-hidden bg-stone-200 border border-stone-300">
                <iframe
                  title="Lokasi Fakultas Teknik Universitas Palembang"
                  src={contactInfo.mapEmbedUrl}
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

    </div>
  );
}
