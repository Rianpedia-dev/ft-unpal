"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { PearlButton } from "@/components/ui/pearl-button";

interface KaprodiInfo {
  nama: string;
  gelar: string;
  foto: string;
}

interface ProdiProfileCardProps {
  kaprodi: KaprodiInfo;
}

export default function ProdiProfileCard({ kaprodi }: ProdiProfileCardProps) {
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const modal = showPhotoModal ? (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md animate-in fade-in"
      onClick={() => setShowPhotoModal(false)}
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
            onClick={() => setShowPhotoModal(false)}
            label="✕ Tutup"
            className="h-7 sm:h-8 text-xs px-3 shadow-lg"
          />
        </div>

        {/* Photo Fitting Image */}
        <img
          src={kaprodi.foto}
          alt={kaprodi.nama}
          className="max-h-[75vh] w-auto max-w-[85vw] object-contain rounded-xl border border-slate-700/80 shadow-md"
        />
      </div>
    </div>
  ) : null;

  return (
    <>
      <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#112236] to-[#1B3A5C] text-white shadow-2xl flex flex-col items-center justify-center text-center space-y-4 border border-amber-500/30 relative overflow-hidden h-full">
        <div className="absolute -top-12 -left-12 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

        {/* Photo Box - Clickable */}
        <div
          onClick={() => setShowPhotoModal(true)}
          className="relative h-44 w-36 sm:h-52 sm:w-44 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-xl bg-slate-900 ring-4 ring-amber-400/20 my-1 cursor-pointer group"
        >
          <Image
            src={kaprodi.foto}
            alt={kaprodi.nama}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="space-y-1">
          <h3 className="font-extrabold text-lg sm:text-xl text-amber-400 leading-snug">
            {kaprodi.nama}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-slate-200">
            {kaprodi.gelar}
          </p>
        </div>

      </div>

      {mounted && modal ? createPortal(modal, document.body) : null}
    </>
  );
}
