"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { dekanatList, DekanatMember } from "@/data/civitas";
import { GlassCard } from "@/components/ui/glass-card";
import { PearlButton } from "@/components/ui/pearl-button";

export default function CivitasGrid() {
  const [activePhoto, setActivePhoto] = useState<DekanatMember | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const modal = activePhoto ? (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md animate-in fade-in"
      onClick={() => setActivePhoto(null)}
    >
      <div
        className="relative max-h-[85vh] max-w-[90vw] rounded-2xl bg-[#0F1E2E] p-2 sm:p-3 shadow-2xl border border-amber-500/30 text-white flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <div className="absolute top-3 right-3 z-20">
          <PearlButton
            size="sm"
            variant="amber"
            showSparkle={false}
            onClick={() => setActivePhoto(null)}
            label="✕ Tutup"
            className="h-7 sm:h-8 text-xs px-3 shadow-lg"
          />
        </div>

        {/* Photo Fitting Image */}
        <img
          src={activePhoto.foto}
          alt={activePhoto.nama}
          className="max-h-[75vh] w-auto max-w-[85vw] object-contain rounded-xl border border-slate-700/80 shadow-md"
        />
      </div>
    </div>
  ) : null;

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6">
        {dekanatList.map((member) => (
          <GlassCard
            key={member.id}
            className="hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg overflow-hidden h-full"
            innerClassName="p-2.5 sm:p-4 space-y-2 flex flex-col justify-between h-full"
          >
            <div className="space-y-2">
              {/* Photo Box - Clickable */}
              <div
                onClick={() => setActivePhoto(member)}
                className="relative w-full h-36 sm:h-52 md:h-56 lg:h-52 rounded-lg sm:rounded-xl overflow-hidden bg-stone-100 border border-stone-200 shadow-inner cursor-pointer group"
              >
                <Image
                  src={member.foto}
                  alt={member.nama}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>

              {/* Name & Title Badge */}
              <div className="space-y-1 text-center">
                <h3 className="text-xs sm:text-base font-extrabold text-[#1B3A5C] leading-snug line-clamp-2">
                  {member.nama}
                </h3>

                <div>
                  <span className="inline-block bg-amber-100 text-amber-900 border border-amber-200 px-2 sm:px-3 py-0.5 rounded-full text-[9px] sm:text-[10px] font-extrabold tracking-wider uppercase">
                    {member.jabatan}
                  </span>
                </div>

                <p className="text-[9px] sm:text-[11px] text-stone-500 font-mono leading-none">
                  NIDN: {member.nidn}
                </p>
              </div>
            </div>

            <div>
              {/* Divider */}
              <div className="border-t border-stone-200/80 my-1" />

              {/* Details List */}
              <div className="space-y-0.5 text-left text-[10px] sm:text-[11px] text-stone-600 font-normal">
                <div className="flex items-start gap-1">
                  <span className="text-stone-400 shrink-0 text-[10px] sm:text-xs">🎓</span>
                  <span className="line-clamp-2 leading-tight">{member.pendidikan}</span>
                </div>
                <div className="flex items-start gap-1">
                  <span className="text-stone-400 shrink-0 text-[10px] sm:text-xs">✉️</span>
                  <span className="text-amber-800 font-semibold break-all leading-tight">{member.email}</span>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {mounted && modal ? createPortal(modal, document.body) : null}
    </>
  );
}
