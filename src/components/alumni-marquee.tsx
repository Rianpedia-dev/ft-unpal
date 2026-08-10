"use client";

import { Marquee } from "@/components/ui/marquee";
import { GlassCard } from "@/components/ui/glass-card";
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
    <GlassCard className="relative w-72 sm:w-84 min-h-[145px] shrink-0 cursor-pointer overflow-hidden transition-all hover:scale-[1.02]">
      <div className="flex flex-col justify-between gap-3 h-full p-0.5">
        <div className="flex flex-row items-center gap-3">
          {profile ? (
            <img
              src={profile}
              alt={name}
              className="h-10 w-10 rounded-full object-cover shadow shrink-0 border border-amber-500/30"
            />
          ) : (
            <div className="h-10 w-10 rounded-full bg-[#1B3A5C] text-amber-400 font-extrabold text-xs flex items-center justify-center shadow shrink-0">
              {initials}
            </div>
          )}
          <div className="flex flex-col min-w-0">
            <p className="text-sm font-bold text-stone-900 truncate leading-snug">{name}</p>
            <p className="text-xs font-semibold text-amber-800 truncate">
              {username} • <span className="text-stone-600 font-medium">{company}</span>
            </p>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
          "{body}"
        </p>
      </div>
    </GlassCard>
  );
};

export default function AlumniTestimonialMarquee() {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8 text-center space-y-2">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1B3A5C]">
          Kisah Sukses Alumni Fakultas Teknik
        </h2>
        <p className="text-stone-600 text-sm max-w-2xl mx-auto font-light">
          Arahkan kursor ke atas kartu untuk menghentikan jalan (pause on hover).
        </p>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-5">
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
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-[#F5F0E8] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-[#F5F0E8] to-transparent z-10" />
      </div>
    </section>
  );
}
