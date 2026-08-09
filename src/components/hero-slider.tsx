"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface HeroSlide {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  badge?: string;
}

export const defaultHeroSlides: HeroSlide[] = [
  {
    id: "slide-1",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    title: "Laboratorium & Praktikum Terpadu",
    subtitle: "Fasilitas modern pendukung riset Teknik Sipil & Elektro",
    badge: "Fasilitas FT UNPAL",
  },
  {
    id: "slide-2",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
    title: "Kerja Sama Sektor Industri",
    subtitle: "Kemitraan strategis MBKM dengan PT Pusri & Industri Nasional",
    badge: "Kemitraan MBKM",
  },
  {
    id: "slide-3",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    title: "Inovasi & Robotika Mahasiswa",
    subtitle: "Riset rekayasa dan kompetisi tingkat nasional",
    badge: "Prestasi Akademik",
  },
  {
    id: "slide-4",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    title: "Lingkungan Akademik Unggul",
    subtitle: "Mencetak lulusan siap kerja & berdaya saing tinggi",
    badge: "Civitas Akademika",
  },
];

interface HeroSliderProps {
  slides?: HeroSlide[];
  autoPlayInterval?: number;
}

export default function HeroSlider({
  slides = defaultHeroSlides,
  autoPlayInterval = 4500,
}: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [nextSlide, isPaused, autoPlayInterval]);

  const activeSlide = slides[currentIndex];

  return (
    <div
      className="relative w-full max-w-3xl lg:max-w-none mx-auto group select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Outer Laptop Container */}
      <div className="relative w-full aspect-[1536/939] drop-shadow-2xl">
        {/* Inner Screen Display (Slider Content) */}
        <div className="absolute top-[3.3%] bottom-[8.6%] left-[9.6%] right-[9.6%] z-10 overflow-hidden bg-slate-950 rounded-sm sm:rounded-md">
          {/* Animated Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={activeSlide.image}
                alt={activeSlide.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 550px"
              />
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Floating Navigation Controls at Bottom of Screen */}
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-30 flex items-center justify-between">
            {/* Dot Indicators */}
            <div className="flex items-center gap-1 sm:gap-1.5 bg-slate-900/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-5 sm:w-6 bg-amber-400"
                      : "w-1.5 bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrow Navigation */}
            <div className="flex items-center gap-1 sm:gap-1.5">
              <button
                onClick={prevSlide}
                className="p-1.5 sm:p-2 rounded-full bg-slate-900/60 hover:bg-amber-500/90 border border-white/15 backdrop-blur-md text-white transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="p-1.5 sm:p-2 rounded-full bg-slate-900/60 hover:bg-amber-500/90 border border-white/15 backdrop-blur-md text-white transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Laptop Border / Mockup Frame Image Overlay */}
        <div className="absolute inset-0 z-20 pointer-events-none select-none">
          <Image
            src="/border-leptop.avif"
            alt="Laptop Border Frame"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
