"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Marquee } from "@/components/ui/marquee";
import { alumniReviews, AlumniReview } from "@/data/alumni";
import { PearlButton } from "@/components/ui/pearl-button";

const firstRow = alumniReviews.slice(0, alumniReviews.length / 2);
const secondRow = alumniReviews.slice(alumniReviews.length / 2);

interface ReviewCardProps {
  review: AlumniReview;
  onPhotoClick: (review: AlumniReview) => void;
}

const ReviewCard = ({ review, onPhotoClick }: ReviewCardProps) => {
  const { name, username, company, body, profile, initials } = review;

  return (
    <div className="w-[285px] sm:w-[340px] shrink-0 rounded-2xl bg-white border border-stone-200/90 p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between gap-3 text-left">
      <div className="flex flex-row items-center gap-3">
        {profile ? (
          <img
            src={profile}
            alt={name}
            onClick={() => onPhotoClick(review)}
            className="h-10 w-10 rounded-full object-cover shadow-xs shrink-0 border border-amber-500/40 cursor-pointer hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div
            onClick={() => onPhotoClick(review)}
            className="h-10 w-10 rounded-full bg-[#1B3A5C] text-amber-400 font-extrabold text-xs flex items-center justify-center shadow-xs shrink-0 cursor-pointer hover:scale-110 transition-transform duration-300"
          >
            {initials}
          </div>
        )}
        <div className="flex flex-col min-w-0">
          <p className="text-xs sm:text-sm font-extrabold text-[#1B3A5C] truncate leading-snug">
            {name}
          </p>
          <p className="text-[10px] sm:text-xs font-semibold text-amber-800 truncate">
            {username}
          </p>
          <p className="text-[10px] sm:text-xs text-stone-500 font-medium truncate">
            {company}
          </p>
        </div>
      </div>
      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
        "{body}"
      </p>
    </div>
  );
};

export default function AlumniTestimonialMarquee() {
  const [activePhoto, setActivePhoto] = useState<AlumniReview | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const modal = activePhoto && activePhoto.profile ? (
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
          src={activePhoto.profile}
          alt={activePhoto.name}
          className="max-h-[75vh] w-auto max-w-[85vw] object-contain rounded-xl border border-slate-700/80 shadow-md"
        />
      </div>
    </div>
  ) : null;

  return (
    <section className="py-8 sm:py-12 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 text-center space-y-1.5 sm:space-y-2">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#1B3A5C] tracking-tight">
          Kisah Sukses Alumni Fakultas Teknik
        </h2>
        <p className="text-stone-700 text-xs sm:text-base max-w-2xl mx-auto font-medium leading-relaxed">
          Inspirasi karir, pengalaman berkesan, dan rekam jejak kiprah para lulusan FT UNPAL di berbagai sektor industri nasional.
        </p>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-3 sm:gap-4">
        {/* Baris 1: Bergerak Ke Kiri (Leftward) */}
        <Marquee pauseOnHover reverse={false} className="[--duration:30s]">
          {firstRow.map((review, idx) => (
            <ReviewCard key={idx} review={review} onPhotoClick={setActivePhoto} />
          ))}
        </Marquee>

        {/* Baris 2: Bergerak Ke Kanan (Rightward) */}
        <Marquee pauseOnHover reverse={true} className="[--duration:30s]">
          {secondRow.map((review, idx) => (
            <ReviewCard key={idx} review={review} onPhotoClick={setActivePhoto} />
          ))}
        </Marquee>

        {/* Gradient edge overlays for smooth fade effect */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-20 md:w-32 bg-gradient-to-r from-[#F5F0E8] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-20 md:w-32 bg-gradient-to-l from-[#F5F0E8] to-transparent z-10" />
      </div>

      {mounted && modal ? createPortal(modal, document.body) : null}
    </section>
  );
}
