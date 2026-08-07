"use client";

import { useState } from "react";
import DosenCard from "@/components/dosen-card";
import { daftarDosen, daftarTendik, organisasiMahasiswa } from "@/data/civitas";
import { organizationStructure } from "@/data/site";
import { PearlButton } from "@/components/ui/pearl-button";
import { GlassCard } from "@/components/ui/glass-card";

export default function CivitasPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProdi, setSelectedProdi] = useState<string>("Semua");
  const [activeTab, setActiveTab] = useState<"dekanat" | "dosen" | "tendik" | "hima">("dekanat");

  const prodiOptions = [
    "Semua",
    "Teknik Sipil",
    "Teknik Mesin",
    "Teknik Elektro",
    "Teknik Informatika",
  ];

  const filteredDosen = daftarDosen.filter((dosen) => {
    const matchesQuery =
      dosen.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dosen.nidn.includes(searchQuery) ||
      dosen.keahlian.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesProdi =
      selectedProdi === "Semua" || dosen.prodi === selectedProdi;

    return matchesQuery && matchesProdi;
  });

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#112236] to-[#1B3A5C] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Civitas Akademika FT UNPAL
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto font-light">
            Jajaran Pimpinan Dekanat, Profil Dosen Pengajar, Tenaga Kependidikan, serta Organisasi Kemahasiswaan.
          </p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center border-b border-amber-900/10 pb-4 gap-3">
          <PearlButton
            size="md"
            variant={activeTab === "dekanat" ? "blue" : "outline"}
            onClick={() => setActiveTab("dekanat")}
            label={`🏛️ Dekanat & Pimpinan (${organizationStructure.length})`}
          />
          <PearlButton
            size="md"
            variant={activeTab === "dosen" ? "blue" : "outline"}
            onClick={() => setActiveTab("dosen")}
            label={`👨‍🏫 Dosen Pengajar (${daftarDosen.length})`}
          />
          <PearlButton
            size="md"
            variant={activeTab === "tendik" ? "blue" : "outline"}
            onClick={() => setActiveTab("tendik")}
            label={`📋 Tenaga Kependidikan (${daftarTendik.length})`}
          />
          <PearlButton
            size="md"
            variant={activeTab === "hima" ? "blue" : "outline"}
            onClick={() => setActiveTab("hima")}
            label={`🎓 Kemahasiswaan (${organisasiMahasiswa.length})`}
          />
        </div>
      </section>

      {/* TAB 1: DEKANAT */}
      {activeTab === "dekanat" && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto mb-6 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B3A5C]">
              Jajaran Pimpinan Dekanat & Ketua Program Studi
            </h2>
            <p className="text-stone-600 text-sm">
              Struktur kepemimpinan operasional dan akademik Fakultas Teknik Universitas Palembang
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {organizationStructure.map((item, idx) => (
              <GlassCard key={idx} className="hover:-translate-y-1 transition-transform">
                <div className="text-center space-y-3">
                  <div className="mx-auto h-20 w-20 rounded-full bg-[#1B3A5C] text-amber-400 font-bold text-2xl flex items-center justify-center shadow-md">
                    {item.name
                      .split(" ")
                      .map((n) => n[0])
                      .filter((char) => /[A-Za-z]/.test(char))
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider block bg-amber-100 px-2 py-0.5 rounded-full w-max mx-auto border border-amber-200">
                      {item.role}
                    </span>
                    <h3 className="text-base font-bold text-[#1B3A5C] mt-2">
                      {item.name}
                    </h3>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>
      )}

      {/* TAB 2: DOSEN */}
      {activeTab === "dosen" && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Search & Filter Controls Card */}
          <GlassCard>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search Input */}
              <div className="relative w-full md:w-96">
                <input
                  type="text"
                  placeholder="Cari Dosen (Nama, NIDN, Keahlian)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-10 text-sm bg-white/70 border border-stone-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]"
                />
                <span className="absolute left-3 top-3.5 text-stone-400">🔍</span>
              </div>

              {/* Filter Prodi Buttons */}
              <div className="flex flex-wrap gap-2 w-full md:w-auto">
                {prodiOptions.map((prodi) => (
                  <PearlButton
                    key={prodi}
                    size="sm"
                    variant={selectedProdi === prodi ? "blue" : "outline"}
                    onClick={() => setSelectedProdi(prodi)}
                    label={prodi}
                  />
                ))}
              </div>
            </div>
          </GlassCard>

          {/* Dosen Grid */}
          {filteredDosen.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDosen.map((dosen) => (
                <DosenCard key={dosen.id} dosen={dosen} />
              ))}
            </div>
          ) : (
            <GlassCard>
              <div className="text-center py-8">
                <p className="text-stone-500 font-semibold">
                  Tidak ada dosen yang cocok dengan pencarian "{searchQuery}".
                </p>
              </div>
            </GlassCard>
          )}
        </section>
      )}

      {/* TAB 3: TENAGA KEPENDIDIKAN */}
      {activeTab === "tendik" && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {daftarTendik.map((tendik) => (
              <GlassCard key={tendik.id} className="hover:-translate-y-1 transition-transform">
                <div className="text-center space-y-3">
                  <div className="mx-auto h-20 w-20 rounded-full bg-[#1B3A5C] text-amber-400 font-bold text-2xl flex items-center justify-center shadow">
                    {tendik.nama
                      .split(" ")
                      .map((n) => n[0])
                      .filter((char) => /[A-Za-z]/.test(char))
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1B3A5C]">{tendik.nama}</h3>
                    <p className="text-xs text-stone-500">NIP: {tendik.nip}</p>
                    <p className="text-xs font-semibold text-amber-800 mt-1">{tendik.jabatan}</p>
                    <p className="text-[11px] text-stone-600 bg-white/80 border border-stone-200 py-1 px-2 rounded-md mt-2">
                      {tendik.unit}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>
      )}

      {/* TAB 4: KEMAHASISWAAN (BEM & HIMA) */}
      {activeTab === "hima" && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organisasiMahasiswa.map((org, idx) => (
              <GlassCard key={idx} className="hover:-translate-y-1 transition-transform">
                <div className="space-y-4 flex flex-col justify-between h-full">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-xl bg-[#1B3A5C] text-amber-400 font-black text-base flex items-center justify-center shadow">
                        {org.singkatan}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-[#1B3A5C] leading-tight">
                          {org.singkatan}
                        </h3>
                        <p className="text-xs text-stone-500 font-medium">{org.nama}</p>
                      </div>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed font-normal">
                      {org.deskripsi}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-200/60 text-xs space-y-1 bg-white/60 p-3 rounded-xl">
                    <p>
                      <span className="font-bold text-stone-700">Ketua:</span> {org.ketua}
                    </p>
                    <p>
                      <span className="font-bold text-stone-700">Pembina:</span> {org.pembina}
                    </p>
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

