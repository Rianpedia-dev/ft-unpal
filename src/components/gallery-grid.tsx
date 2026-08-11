"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryItems, GalleryItem } from "@/data/gallery";
import { PearlButton } from "@/components/ui/pearl-button";

export default function GalleryGrid() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <div className="space-y-8">
      {/* Grid Documentation (All Items - Newest First) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item)}
            className="group relative cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl bg-stone-900 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5"
          >
            {/* Card Thumbnail Image & Overlay */}
            <div className="relative h-36 sm:h-64 w-full overflow-hidden bg-slate-900">
              <Image
                src={item.image}
                alt={item.title || "Galeri Foto"}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1522]/80 via-transparent to-black/30 p-2.5 sm:p-4 flex flex-col justify-between" />

              {/* Date Badge */}
              <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 z-10">
                <span className="text-[10px] sm:text-xs text-white font-medium bg-black/60 backdrop-blur-md px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-white/20">
                  {item.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal Dialog */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md animate-in fade-in"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-3xl w-full max-h-[90vh] rounded-2xl bg-[#0F1E2E] p-3.5 sm:p-5 shadow-2xl border border-amber-500/30 text-white flex flex-col justify-between space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-700/80 pb-2.5">
              <span className="text-xs text-amber-400 font-mono font-bold tracking-wider">
                {activeItem.date}
              </span>
              <PearlButton
                size="sm"
                variant="outline"
                showSparkle={false}
                onClick={() => setActiveItem(null)}
                label="✕ Tutup"
                className="h-7 sm:h-8 text-xs px-3"
              />
            </div>

            {/* Image Container */}
            <div className="relative w-full overflow-hidden rounded-xl bg-slate-950 flex items-center justify-center border border-slate-800">
              <img
                src={activeItem.image}
                alt={activeItem.title || "Galeri Foto"}
                className="w-full max-h-[70vh] object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
