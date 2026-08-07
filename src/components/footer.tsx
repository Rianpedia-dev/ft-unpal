import Link from "next/link";
import Image from "next/image";
import { contactInfo, navigation, siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-[#112236] text-slate-200 border-t border-amber-500/20">
      {/* Top Banner Accent */}
      <div className="h-1 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-600" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src={siteConfig.logo}
                alt={`Logo ${siteConfig.name}`}
                width={40}
                height={40}
                className="h-10 w-10 object-contain bg-white/10 p-1 rounded-xl"
              />
              <span className="font-extrabold text-xl text-white tracking-tight">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="text-xs text-amber-400 font-semibold tracking-wider uppercase">
              {siteConfig.university}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white tracking-wider uppercase border-b border-slate-700 pb-2">
              Navigasi Utama
            </h3>
            <ul className="space-y-2 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-amber-500 text-xs">▸</span> {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Program Studi */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white tracking-wider uppercase border-b border-slate-700 pb-2">
              Program Studi (S1)
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="text-amber-500 text-xs">▸</span> Teknik Sipil
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-500 text-xs">▸</span> Teknik Elektro
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white tracking-wider uppercase border-b border-slate-700 pb-2">
              Kontak Kampus
            </h3>
            <div className="space-y-2.5 text-sm text-slate-300">
              <p className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">📍</span>
                <span>{contactInfo.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">📞</span>
                <span>{contactInfo.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">✉️</span>
                <span>{contactInfo.email}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Fakultas Teknik Universitas Palembang. All rights reserved.</p>
          <div className="flex gap-4">
            <a href={contactInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">Instagram</a>
            <a href={contactInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">Facebook</a>
            <a href={contactInfo.socialMedia.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
