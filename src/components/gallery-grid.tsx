"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryItems, GalleryItem } from "@/data/gallery";
import { PearlButton } from "@/components/ui/pearl-button";

export default function GalleryGrid() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <div className="space-y-8">
      {/* Grid Documentation (All Items - Newest First, No Filter Buttons) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Dark Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1522] via-[#0B1522]/50 to-transparent p-5 flex flex-col justify-between" />

              {/* Top Meta Badges */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
                <span className="text-[11px] font-extrabold uppercase tracking-wider bg-amber-400 text-[#112236] px-3 py-1 rounded-full shadow-md">
                  {item.category}
                </span>
                <span className="text-xs text-white font-medium bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                  {item.date}
                </span>
              </div>

              {/* Bottom Title & Description */}
              <div className="absolute bottom-4 left-4 right-4 z-10 space-y-1.5">
                <h3 className="text-base font-extrabold text-white leading-snug group-hover:text-amber-300 transition-colors drop-shadow">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2 font-light leading-relaxed">
                  {item.caption}
                </p>
                <div className="pt-2 flex justify-end">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-400 bg-black/40 px-3 py-1 rounded-full border border-amber-400/30 group-hover:bg-amber-400 group-hover:text-[#112236] transition-all">
                    Perbesar 🔍
                  </span>
                </div>
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
            className="relative max-w-3xl w-full rounded-2xl bg-[#0F1E2E] p-6 shadow-2xl border border-amber-500/30 text-white"
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
              <div className="relative h-80 sm:h-96 w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-700">
                <Image
                  src={activeItem.image}
                  alt={activeItem.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-extrabold uppercase text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30">
                    {activeItem.category}
                  </span>
                  <span className="text-xs text-slate-400">{activeItem.date}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                  {activeItem.title}
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed font-light">
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
