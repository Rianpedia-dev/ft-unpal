"use client";

import { useState } from "react";
import Image from "next/image";
import {
  daftarJurnal,
  beritaFakultas,
} from "@/data/publications";
import { PearlButton } from "@/components/ui/pearl-button";
import { GlassCard } from "@/components/ui/glass-card";

export default function PublikasiPage() {
  const [activeTab, setActiveTab] = useState<"berita" | "jurnal">("berita");

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#112236] to-[#1B3A5C] text-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Publikasi & Kabar Fakultas
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto font-light">
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
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B3A5C]">
              Berita & Informasi Agenda Resmi
            </h2>
            <p className="text-stone-600 text-sm">
              Berita seputar kegiatan akademik, kemitraan industri, dan capaian FT UNPAL
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {beritaFakultas.map((berita) => (
              <GlassCard key={berita.id} className="hover:-translate-y-1 transition-transform overflow-hidden">
                <div className="space-y-4 flex flex-col justify-between h-full">
                  <div className="space-y-3">
                    <div className="relative w-full h-48 rounded-xl overflow-hidden bg-slate-100 border border-stone-200">
                      <Image
                        src={berita.gambar}
                        alt={berita.judul}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="flex justify-between items-center pt-1">
                      <span className="text-[10px] font-bold uppercase text-amber-900 bg-amber-100 px-2.5 py-1 rounded-full border border-amber-200">
                        {berita.kategori}
                      </span>
                      <span className="text-[11px] text-stone-400 font-medium">{berita.tanggal}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#1B3A5C] leading-snug">
                      {berita.judul}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed font-normal">
                      {berita.ringkasan}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-200/60 text-xs text-amber-800 font-semibold">
                    Diterbitkan oleh: {berita.penulis}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>
      )}

      {/* TAB 2: JURNAL ILMIAH */}
      {activeTab === "jurnal" && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B3A5C]">
              Jurnal Ilmiah Resmi Fakultas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
