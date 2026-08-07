"use client";

import { useState } from "react";
import { galleryItems, GalleryItem } from "@/data/gallery";
import { PearlButton } from "@/components/ui/pearl-button";

export default function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    "Semua",
    "Dokumentasi Kegiatan",
    "Praktikum",
    "Seminar",
    "Wisuda",
    "Kegiatan Mahasiswa",
  ];

  const filteredItems =
    selectedCategory === "Semua"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2.5 justify-center">
        {categories.map((cat) => (
          <PearlButton
            key={cat}
            size="sm"
            variant={selectedCategory === cat ? "blue" : "outline"}
            onClick={() => setSelectedCategory(cat)}
            label={cat}
          />
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item)}
            className="group relative cursor-pointer overflow-hidden rounded-2xl bg-stone-900 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Image Placeholder Visual Block */}
            <div className="h-64 w-full bg-gradient-to-tr from-[#112236] via-[#1B3A5C] to-slate-800 p-6 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex justify-between items-start z-10">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-amber-400/90 text-[#112236] px-2.5 py-1 rounded-full shadow">
                  {item.category}
                </span>
                <span className="text-xs text-amber-200 font-medium">
                  {item.date}
                </span>
              </div>

              <div className="z-10 space-y-1">
                <h3 className="text-lg font-bold text-white leading-snug group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2 font-light">
                  {item.caption}
                </p>
              </div>

              <div className="absolute bottom-3 right-3 z-10">
                <PearlButton size="sm" variant="amber" label="Perbesar 🔍" showSparkle={false} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Dialog */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-in fade-in"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-3xl w-full rounded-2xl bg-white p-6 shadow-2xl border border-amber-500/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-4 right-4">
              <PearlButton
                size="sm"
                variant="outline"
                showSparkle={false}
                onClick={() => setActiveItem(null)}
                label="✕ Tutup"
              />
            </div>

            <div className="space-y-4 pt-4">
              <div className="h-72 w-full rounded-xl bg-gradient-to-tr from-[#112236] to-[#1B3A5C] p-6 flex flex-col justify-end text-white">
                <span className="text-xs font-bold uppercase text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full w-max mb-2">
                  {activeItem.category}
                </span>
                <h2 className="text-2xl font-extrabold">{activeItem.title}</h2>
              </div>
              <div>
                <p className="text-xs text-stone-400 font-semibold">{activeItem.date}</p>
                <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                  {activeItem.caption}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
