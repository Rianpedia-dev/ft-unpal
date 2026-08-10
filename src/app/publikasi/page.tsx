"use client";

import { useState } from "react";
import Image from "next/image";
import {
  daftarJurnal,
  beritaFakultas,
} from "@/data/publications";
import { PearlButton } from "@/components/ui/pearl-button";
import { GlassCard } from "@/components/ui/glass-card";
import { ExpandableCard } from "@/components/ui/expandable-card";

export default function PublikasiPage() {
  const [activeTab, setActiveTab] = useState<"berita" | "jurnal">("berita");

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="relative w-full flex items-center justify-center min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] overflow-hidden bg-slate-950 text-white pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 mb-8 sm:mb-12">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/upload/background-header/publikasi&berita.avif"
            alt="Publikasi & Berita Background Header"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#112236]/80 via-[#162B45]/70 to-[#1B3A5C]/80 z-10" />
        </div>

        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-3 pt-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            Publikasi & Kabar Fakultas
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto font-light drop-shadow-sm">
            Informasi kegiatan akademik, kemitraan industri, serta jurnal ilmiah resmi Fakultas Teknik Universitas Palembang.
          </p>
        </div>
      </section>

      {/* TABS NAVIGATION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-3">
          <PearlButton
            size="md"
            variant={activeTab === "berita" ? "blue" : "outline"}
            onClick={() => setActiveTab("berita")}
            label={`📰 Berita Fakultas (${beritaFakultas.length})`}
          />
          <PearlButton
            size="md"
            variant={activeTab === "jurnal" ? "blue" : "outline"}
            onClick={() => setActiveTab("jurnal")}
            label={`📚 Jurnal Ilmiah (${daftarJurnal.length})`}
          />
        </div>
      </section>

      {/* TAB 1: BERITA FAKULTAS */}
      {activeTab === "berita" && (
        <section className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B3A5C]">
              Berita & Informasi Agenda Resmi
            </h2>
            <p className="text-stone-600 text-sm">
              Berita seputar kegiatan akademik, kemitraan industri, dan capaian FT UNPAL
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {beritaFakultas.map((berita) => (
              <ExpandableCard
                key={berita.id}
                title={berita.judul}
                src={berita.gambar}
                description={berita.tanggal}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-700/80">
                    <span>Diterbitkan oleh: <strong className="text-amber-400 font-bold">{berita.penulis}</strong></span>
                    <span>{berita.tanggal}</span>
                  </div>
                  <h4 className="text-amber-300 font-extrabold text-lg">Ringkasan Berita & Liputan</h4>
                  <p className="text-slate-200 leading-relaxed">
                    {berita.ringkasan}
                  </p>
                  <p className="text-slate-200 leading-relaxed">
                    Melalui berbagai inisiatif akademik dan kemitraan industri nasional, Fakultas Teknik Universitas Palembang berkomitmen tinggi menyelenggarakan pendidikan unggul, fasilitas laboratorium terpadu, serta wadah inovasi mahasiswa di bidang teknik.
                  </p>
                </div>
              </ExpandableCard>
            ))}
          </div>
        </section>
      )}

      {/* TAB 2: JURNAL ILMIAH */}
      {activeTab === "jurnal" && (
        <section className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B3A5C]">
              Jurnal Ilmiah Resmi Fakultas
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {daftarJurnal.map((jurnal) => (
              <GlassCard key={jurnal.id} className="hover:-translate-y-1 transition-transform">
                <div className="space-y-4 flex flex-col justify-between h-full">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-black uppercase text-amber-900 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
                        {jurnal.akreditasi}
                      </span>
                      <span className="text-xs font-bold text-[#1B3A5C]">
                        {jurnal.singkatan}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-[#1B3A5C]">
                      {jurnal.nama}
                    </h3>

                    <p className="text-xs font-mono text-stone-500">
                      {jurnal.issn}
                    </p>

                    <p className="text-xs text-stone-600 leading-relaxed font-normal">
                      {jurnal.deskripsi}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-200/60">
                    <PearlButton
                      href={jurnal.url}
                      size="sm"
                      variant="blue"
                      className="w-full"
                      label="Kunjungi Open Journal System (OJS) 🔗"
                    />
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
