"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { PearlButton } from "@/components/ui/pearl-button";

interface TeamPhotoLightboxProps {
  imageSrc: string;
  name: string;
}

export function TeamPhotoLightbox({ imageSrc, name }: TeamPhotoLightboxProps) {
  const [showPhotoModal, setShowPhotoModal] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const modal = showPhotoModal ? (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md animate-in fade-in text-left"
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
          src={imageSrc}
          alt={name}
          className="max-h-[75vh] w-auto max-w-[85vw] object-contain rounded-xl border border-slate-700/80 shadow-md"
        />
      </div>
    </div>
  ) : null;

  return (
    <>
      <div
        onClick={() => setShowPhotoModal(true)}
        className="relative z-10 h-24 w-24 sm:h-36 sm:w-36 overflow-hidden rounded-full border-2 sm:border-4 border-transparent bg-stone-100 transition-all duration-500 ease-out group-hover:border-[#112236] group-hover:scale-105 shadow-md shrink-0 cursor-pointer"
      >
        <img
          src={imageSrc}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>
      {mounted && modal ? createPortal(modal, document.body) : null}
    </>
  );
}
