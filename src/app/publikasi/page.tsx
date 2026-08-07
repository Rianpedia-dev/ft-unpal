"use client";

import { useState } from "react";
import {
  daftarJurnal,
  daftarPenelitian,
  beritaFakultas,
  artikelFakultas,
} from "@/data/publications";
import { PearlButton } from "@/components/ui/pearl-button";
import { GlassCard } from "@/components/ui/glass-card";

export default function PublikasiPage() {
  const [activeTab, setActiveTab] = useState<"berita" | "artikel" | "jurnal">("berita");
  const [expandedId, setExpandedId] = useState<string | null>(daftarPenelitian[0].id);

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#112236] to-[#1B3A5C] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Publikasi & Kabar Fakultas
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto font-light">
            Informasi Berita Terbaru Fakultas, Artikel Edukasi Populer, serta Terbitan Jurnal Ilmiah Resmi.
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center border-b border-amber-900/10 pb-4 gap-3">
          <PearlButton
            size="md"
            variant={activeTab === "berita" ? "blue" : "outline"}
            onClick={() => setActiveTab("berita")}
            label={`📰 Berita Fakultas (${beritaFakultas.length})`}
          />
          <PearlButton
            size="md"
            variant={activeTab === "artikel" ? "blue" : "outline"}
            onClick={() => setActiveTab("artikel")}
            label={`📝 Artikel & Opini (${artikelFakultas.length})`}
          />
          <PearlButton
            size="md"
            variant={activeTab === "jurnal" ? "blue" : "outline"}
            onClick={() => setActiveTab("jurnal")}
            label={`📚 Jurnal & Riset (${daftarJurnal.length + daftarPenelitian.length})`}
          />
        </div>
      </section>

      {/* TAB 1: BERITA FAKULTAS */}
      {activeTab === "berita" && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto mb-6 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B3A5C]">
              Berita & Informasi Agenda Resmi
            </h2>
            <p className="text-stone-600 text-sm">
              Berita seputar kegiatan akademik, kemitraan industri, dan capaian FT UNPAL
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {beritaFakultas.map((berita) => (
              <GlassCard key={berita.id} className="hover:-translate-y-1 transition-transform">
                <div className="space-y-4 flex flex-col justify-between h-full">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
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

      {/* TAB 2: ARTIKEL */}
      {activeTab === "artikel" && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto mb-6 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B3A5C]">
              Artikel & Wawasan Teknologi
            </h2>
            <p className="text-stone-600 text-sm">
              Tulisan populer edisi sains dan perkembangan rekayasa teknologi terkini
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {artikelFakultas.map((art) => (
              <GlassCard key={art.id} className="hover:-translate-y-1 transition-transform">
                <div className="space-y-4 flex flex-col justify-between h-full">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold uppercase text-amber-900 bg-amber-100 px-2.5 py-1 rounded-full border border-amber-200">
                        {art.kategori}
                      </span>
                      <span className="text-[11px] text-stone-400 font-medium">{art.tanggal}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#1B3A5C]">
                      {art.judul}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed font-normal italic">
                      "{art.abstrak}"
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-200/60 text-xs text-stone-800 font-bold">
                    Penulis: {art.penulis}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>
      )}

      {/* TAB 3: JURNAL & PENELITIAN */}
      {activeTab === "jurnal" && (
        <div className="space-y-16">
          {/* Jurnal Section */}
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
                        <span className="text-[11px] text-stone-500 font-bold">{jurnal.singkatan}</span>
                      </div>
                      <h3 className="text-lg font-bold text-[#1B3A5C] leading-tight">
                        {jurnal.nama}
                      </h3>
                      <p className="text-xs font-mono text-amber-800 bg-white/80 border border-stone-200 p-2 rounded-xl">
                        {jurnal.issn}
                      </p>
                      <p className="text-xs text-stone-600 leading-relaxed font-normal">
                        {jurnal.deskripsi}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-stone-200/60">
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

          {/* Research Accordion */}
          <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B3A5C]">
                Daftar Penelitian & Pengabdian
              </h2>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {daftarPenelitian.map((pen) => {
                const isOpen = expandedId === pen.id;
                return (
                  <GlassCard key={pen.id} innerClassName="p-0 overflow-hidden">
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => toggleAccordion(pen.id)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          toggleAccordion(pen.id);
                        }
                      }}
                      className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-white/40 transition-colors cursor-pointer select-none"
                    >
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[11px] font-bold bg-[#1B3A5C] text-amber-300 px-2.5 py-0.5 rounded-full">
                            {pen.prodi}
                          </span>
                          <span className="text-[11px] font-semibold bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full">
                            {pen.skema}
                          </span>
                          <span className="text-xs text-stone-400 font-bold">{pen.tahun}</span>
                        </div>

                        <h3 className="text-base font-bold text-stone-900 leading-snug">
                          {pen.judul}
                        </h3>

                        <p className="text-xs text-stone-500 font-medium">
                          Peneliti: {pen.peneliti.join(", ")}
                        </p>
                      </div>

                      <div className="shrink-0">
                        <PearlButton
                          as="span"
                          size="sm"
                          variant="outline"
                          showSparkle={false}
                          label={isOpen ? "− Tutup" : "+ Baca"}
                        />
                      </div>
                    </div>

                    {isOpen && (
                      <div className="p-6 pt-0 border-t border-stone-200/60 bg-white/30 space-y-4 animate-in fade-in">
                        <div>
                          <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1 mt-4">
                            Abstrak Penelitian:
                          </h4>
                          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                            "{pen.abstrak}"
                          </p>
                        </div>

                        {pen.doiUrl && (
                          <div>
                            <PearlButton
                              href={pen.doiUrl}
                              size="sm"
                              variant="amber"
                              label="Buka Fullpaper via DOI 🔗"
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </GlassCard>
                );
              })}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

