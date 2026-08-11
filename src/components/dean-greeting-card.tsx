"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { deanGreeting } from "@/data/site";
import { PearlButton } from "@/components/ui/pearl-button";

export default function DeanGreetingCard() {
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
          src={deanGreeting.photo}
          alt={deanGreeting.name}
          className="max-h-[75vh] w-auto max-w-[85vw] object-contain rounded-xl border border-slate-700/80 shadow-md"
        />
      </div>
    </div>
  ) : null;

  return (
    <>
      <div className="p-6 rounded-2xl bg-gradient-to-b from-stone-50 to-stone-100/90 border border-stone-200/80 text-center space-y-4 shadow-sm">
        {/* Photo Box - Clickable */}
        <div
          onClick={() => setShowPhotoModal(true)}
          className="relative w-40 h-40 sm:w-44 sm:h-44 mx-auto rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-md bg-[#1B3A5C] cursor-pointer group"
        >
          <Image
            src={deanGreeting.photo}
            alt={deanGreeting.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="176px"
            priority
          />
        </div>
        <div className="space-y-1.5 pt-1">
          <h3 className="text-lg font-extrabold text-stone-900 leading-snug">
            {deanGreeting.name}
          </h3>
          <p className="text-xs text-amber-800 font-semibold leading-relaxed">
            {deanGreeting.title}
          </p>
        </div>
      </div>

      {mounted && modal ? createPortal(modal, document.body) : null}
    </>
  );
}
