"use client";

import { Marquee } from "@/components/ui/marquee";
import { alumniReviews, AlumniReview } from "@/data/alumni";

const firstRow = alumniReviews.slice(0, alumniReviews.length / 2);
const secondRow = alumniReviews.slice(alumniReviews.length / 2);

const ReviewCard = ({
  name,
  username,
  company,
  body,
  profile,
  initials,
}: AlumniReview) => {
  return (
    <div className="w-[260px] sm:w-[320px] shrink-0 rounded-2xl bg-white border border-stone-200/90 p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between gap-3 text-left">
      <div className="flex flex-row items-center gap-3">
        {profile ? (
          <img
            src={profile}
            alt={name}
            className="h-10 w-10 rounded-full object-cover shadow-xs shrink-0 border border-amber-500/40"
          />
        ) : (
          <div className="h-10 w-10 rounded-full bg-[#1B3A5C] text-amber-400 font-extrabold text-xs flex items-center justify-center shadow-xs shrink-0">
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
      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic line-clamp-3">
        "{body}"
      </p>
    </div>
  );
};

export default function AlumniTestimonialMarquee() {
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
            <ReviewCard key={idx} {...review} />
          ))}
        </Marquee>

        {/* Baris 2: Bergerak Ke Kanan (Rightward) */}
        <Marquee pauseOnHover reverse={true} className="[--duration:30s]">
          {secondRow.map((review, idx) => (
            <ReviewCard key={idx} {...review} />
          ))}
        </Marquee>

        {/* Gradient edge overlays for smooth fade effect */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-20 md:w-32 bg-gradient-to-r from-[#F5F0E8] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-20 md:w-32 bg-gradient-to-l from-[#F5F0E8] to-transparent z-10" />
      </div>
    </section>
  );
}
