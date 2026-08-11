import Image from "next/image";
import Link from "next/link";
import { siteConfig, contactInfo } from "@/data/site";
import { MapPin, Phone, Mail } from "lucide-react";

const WhatsappIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TiktokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <polygon points="10 15 15 12 10 9 10 15" />
  </svg>
);

export function MinimalFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#112236] text-slate-100 border-t border-amber-500/30 pt-20 pb-12">
      <div className="mx-auto max-w-[115rem] px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 pb-14">

          {/* Col 1: Brand & Description */}
          <div className="col-span-full lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-4 w-max">
              <Image
                src={siteConfig.logo}
                alt={`Logo ${siteConfig.name}`}
                width={48}
                height={48}
                className="h-12 w-12 object-contain bg-white/10 p-1 rounded-xl shadow"
              />
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-tight">
                  {siteConfig.name}
                </span>
                <span className="text-sm sm:text-base text-amber-400 font-semibold tracking-wide">
                  {siteConfig.university}
                </span>
              </div>
            </Link>

            <p className="text-base text-slate-300 leading-relaxed max-w-md font-light">
              {siteConfig.description}
            </p>

            {/* Social Links Pill Bar Container */}
            <div className="inline-flex items-center gap-5 bg-[#162B45] border border-white/15 rounded-2xl px-6 py-3.5 shadow-lg">
              <a href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-amber-400 transition-colors transform hover:scale-110" aria-label="WhatsApp">
                <WhatsappIcon />
              </a>
              <a href={`mailto:${contactInfo.email}`} className="text-slate-300 hover:text-amber-400 transition-colors transform hover:scale-110" aria-label="Email">
                <MailIcon />
              </a>
              <a href={contactInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-amber-400 transition-colors transform hover:scale-110" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors transform hover:scale-110" aria-label="TikTok">
                <TiktokIcon />
              </a>
              <a href={contactInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-amber-400 transition-colors transform hover:scale-110" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
              <a href={contactInfo.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-amber-400 transition-colors transform hover:scale-110" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href={contactInfo.socialMedia.youtube} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-amber-400 transition-colors transform hover:scale-110" aria-label="YouTube">
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Col 2: Navigasi Cepat */}
          <div className="col-span-1 lg:col-span-2 space-y-4">
            <h4 className="font-extrabold text-white text-xl tracking-wide border-b border-slate-700/60 pb-2.5">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2.5 text-base text-slate-200">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors inline-block py-0.5">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/profil" className="hover:text-amber-400 transition-colors inline-block py-0.5">
                  Profil
                </Link>
              </li>
              <li>
                <Link href="/civitas" className="hover:text-amber-400 transition-colors inline-block py-0.5">
                  Civitas
                </Link>
              </li>
              <li>
                <Link href="/pmb" className="hover:text-amber-400 transition-colors inline-block py-0.5">
                  PMB
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="hover:text-amber-400 transition-colors inline-block py-0.5">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="/publikasi" className="hover:text-amber-400 transition-colors inline-block py-0.5">
                  Publikasi
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-amber-400 transition-colors inline-block py-0.5">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Layanan Utama */}
          <div className="col-span-1 lg:col-span-3 space-y-4">
            <h4 className="font-extrabold text-white text-xl tracking-wide border-b border-slate-700/60 pb-2.5">
              Layanan Utama
            </h4>
            <ul className="space-y-3 text-base text-slate-200">
              <li>
                <Link href="/program-studi/teknik-sipil" className="hover:text-amber-400 transition-colors inline-block py-0.5">
                  S1 Teknik Sipil
                </Link>
              </li>
              <li>
                <Link href="/program-studi/teknik-elektro" className="hover:text-amber-400 transition-colors inline-block py-0.5">
                  S1 Teknik Elektro
                </Link>
              </li>
              <li>
                <Link href="/profil" className="hover:text-amber-400 transition-colors inline-block py-0.5">
                  Laboratorium & Riset
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Kontak Kami */}
          <div className="col-span-1 lg:col-span-3 space-y-4">
            <h4 className="font-extrabold text-white text-xl tracking-wide border-b border-slate-700/60 pb-2.5">
              Kontak Kami
            </h4>
            <ul className="space-y-4 text-base text-slate-200">
              <li className="flex items-start gap-3.5">
                <MapPin className="size-5 sm:size-6 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-snug">Palembang, Indonesia</span>
              </li>
              <li className="flex items-center gap-3.5">
                <Phone className="size-5 sm:size-6 text-amber-400 shrink-0" />
                <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} className="hover:text-amber-400 transition-colors whitespace-nowrap">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3.5">
                <Mail className="size-5 sm:size-6 text-amber-400 shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-amber-400 transition-colors whitespace-nowrap">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-400 font-light">
          © {year} {siteConfig.name} {siteConfig.university}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default MinimalFooter;

