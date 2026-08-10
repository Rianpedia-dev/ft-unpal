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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item)}
            className="group relative cursor-pointer overflow-hidden rounded-2xl bg-stone-900 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5"
          >
            {/* Card Thumbnail Image & Overlay */}
            <div className="relative h-64 w-full overflow-hidden bg-slate-900">
              <Image
                src={item.image}
                alt={item.title || "Galeri Foto"}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1522]/80 via-transparent to-black/30 p-4 flex flex-col justify-between" />

              {/* Date Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="text-xs text-white font-medium bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
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
            className="relative max-w-4xl w-full rounded-2xl bg-[#0F1E2E] p-4 sm:p-6 shadow-2xl border border-amber-500/30 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-4 right-4 z-20">
              <PearlButton
                size="sm"
                variant="outline"
                showSparkle={false}
                onClick={() => setActiveItem(null)}
                label="✕ Tutup"
              />
            </div>

            <div className="space-y-4 pt-2">
              <div className="relative h-[65vh] w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-700">
                <Image
                  src={activeItem.image}
                  alt={activeItem.title || "Galeri Foto"}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>

              <div className="flex justify-between items-center text-xs text-slate-400">
                <span>{activeItem.date}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
