"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { heroSlidesData } from "@/data/site";

declare global {
  interface Window {
    gsap: any;
    MotionPathPlugin: any;
  }
}

export interface HeroSlide {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  badge?: string;
}

export const defaultHeroSlides: HeroSlide[] = heroSlidesData;

interface HeroSliderProps {
  slides?: HeroSlide[];
  autoPlayInterval?: number;
}

export default function HeroSlider({
  slides = defaultHeroSlides,
  autoPlayInterval = 4500,
}: HeroSliderProps) {
  const [opened, setOpened] = useState(0);
  const [inPlace, setInPlace] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [gsapReady, setGsapReady] = useState(false);
  const autoplayTimer = useRef<number | null>(null);

  useEffect(() => {
    const loadScripts = () => {
      if (window.gsap && window.MotionPathPlugin) {
        window.gsap.registerPlugin(window.MotionPathPlugin);
        setGsapReady(true);
        return;
      }

      const gsapScript = document.createElement("script");
      gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
      gsapScript.onload = () => {
        const motionPathScript = document.createElement("script");
        motionPathScript.src =
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/MotionPathPlugin.min.js";
        motionPathScript.onload = () => {
          if (window.gsap && window.MotionPathPlugin) {
            window.gsap.registerPlugin(window.MotionPathPlugin);
            setGsapReady(true);
          }
        };
        document.body.appendChild(motionPathScript);
      };
      document.body.appendChild(gsapScript);
    };

    loadScripts();
  }, []);

  const onClick = (index: number) => {
    if (!disabled) setOpened(index);
  };

  const onInPlace = (index: number) => setInPlace(index);

  const next = useCallback(() => {
    setOpened((currentOpened) => {
      let nextIndex = currentOpened + 1;
      if (nextIndex >= slides.length) nextIndex = 0;
      return nextIndex;
    });
  }, [slides.length]);

  const prev = useCallback(() => {
    setOpened((currentOpened) => {
      let prevIndex = currentOpened - 1;
      if (prevIndex < 0) prevIndex = slides.length - 1;
      return prevIndex;
    });
  }, [slides.length]);

  // Disable clicks during animation transitions
  useEffect(() => setDisabled(true), [opened]);
  useEffect(() => setDisabled(false), [inPlace]);

  // Autoplay and timer reset logic
  useEffect(() => {
    if (!gsapReady) return;

    if (autoplayTimer.current) {
      clearInterval(autoplayTimer.current);
    }

    autoplayTimer.current = window.setInterval(next, autoPlayInterval);

    return () => {
      if (autoplayTimer.current) {
        clearInterval(autoplayTimer.current);
      }
    };
  }, [opened, gsapReady, next, autoPlayInterval]);

  const activeSlide = slides[opened];

  return (
    <div className="relative w-full max-w-3xl lg:max-w-none mx-auto group select-none">
      {/* Outer Laptop Container */}
      <div className="relative w-full aspect-[1536/939] drop-shadow-2xl">
        {/* Inner Screen Display (Slider Content) */}
        <div className="absolute top-[5.5%] bottom-[10.1%] left-[11%] right-[11%] z-10 overflow-hidden bg-slate-950 rounded-sm sm:rounded-md">
          {/* GSAP Circular SVG Image Gallery */}
          {gsapReady ? (
            slides.map((slide, i) => (
              <div
                key={slide.id}
                className="absolute left-0 top-0 h-full w-full"
                style={{ zIndex: inPlace === i ? i : slides.length + 1 }}
              >
                <GalleryImage
                  total={slides.length}
                  id={i}
                  url={slide.image}
                  title={slide.title}
                  open={opened === i}
                  inPlace={inPlace === i}
                  onInPlace={onInPlace}
                />
              </div>
            ))
          ) : (
            /* Fallback while GSAP loads */
            <div className="relative w-full h-full">
              <Image
                src={activeSlide.image}
                alt={activeSlide.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          )}

          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none z-20" />

          {/* Floating Navigation Controls & Overlay Info */}
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-30 flex items-center justify-between pointer-events-auto">
            {/* Dot Indicators */}
            <div className="flex items-center gap-1 sm:gap-1.5 bg-slate-900/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => onClick(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === opened
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
                onClick={prev}
                disabled={disabled}
                className="p-1.5 sm:p-2 rounded-full bg-slate-900/70 hover:bg-amber-500/90 border border-white/20 backdrop-blur-md text-white transition-all disabled:opacity-40"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
              <button
                onClick={next}
                disabled={disabled}
                className="p-1.5 sm:p-2 rounded-full bg-slate-900/70 hover:bg-amber-500/90 border border-white/20 backdrop-blur-md text-white transition-all disabled:opacity-40"
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
            src="/upload/border-leptop.avif"
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

interface GalleryImageProps {
  url: string;
  title: string;
  open: boolean;
  inPlace: boolean;
  id: number;
  onInPlace: (id: number) => void;
  total: number;
}

function GalleryImage({
  url,
  open,
  inPlace,
  id,
  onInPlace,
  total,
}: GalleryImageProps) {
  const [firstLoad, setLoaded] = useState(true);
  const clip = useRef<SVGCircleElement>(null);

  const gap = 10;
  const circleRadius = 7;
  const defaults = { transformOrigin: "center center" };
  const duration = 0.4;
  const width = 400;
  const height = 400;
  const scale = 700;

  const bigSize = circleRadius * scale;
  const overlap = 0;

  const getPosSmall = () => ({
    cx: width / 2 - (total * (circleRadius * 2 + gap) - gap) / 2 + id * (circleRadius * 2 + gap),
    cy: height - 30,
    r: circleRadius,
  });
  const getPosSmallAbove = () => ({
    cx: width / 2 - (total * (circleRadius * 2 + gap) - gap) / 2 + id * (circleRadius * 2 + gap),
    cy: height / 2,
    r: circleRadius * 2,
  });
  const getPosCenter = () => ({ cx: width / 2, cy: height / 2, r: circleRadius * 7 });
  const getPosEnd = () => ({ cx: width / 2 - bigSize + overlap, cy: height / 2, r: bigSize });
  const getPosStart = () => ({ cx: width / 2 + bigSize - overlap, cy: height / 2, r: bigSize });

  useEffect(() => {
    const gsap = window.gsap;
    if (!gsap) return;

    setLoaded(false);
    if (clip.current) {
      const flipDuration = firstLoad ? 0 : duration;
      const upDuration = firstLoad ? 0 : 0.2;
      const bounceDuration = firstLoad ? 0.01 : 1;
      const delay = firstLoad ? 0 : flipDuration + upDuration;

      if (open) {
        gsap
          .timeline()
          .set(clip.current, { ...defaults, ...getPosSmall() })
          .to(clip.current, {
            ...defaults,
            ...getPosCenter(),
            duration: upDuration,
            ease: "power3.inOut",
          })
          .to(clip.current, {
            ...defaults,
            ...getPosEnd(),
            duration: flipDuration,
            ease: "power4.in",
            onComplete: () => onInPlace(id),
          });
      } else {
        gsap
          .timeline({ overwrite: true })
          .set(clip.current, { ...defaults, ...getPosStart() })
          .to(clip.current, {
            ...defaults,
            ...getPosCenter(),
            delay: delay,
            duration: flipDuration,
            ease: "power4.out",
          })
          .to(clip.current, {
            ...defaults,
            motionPath: {
              path: [getPosSmallAbove(), getPosSmall()],
              curviness: 1,
            },
            duration: bounceDuration,
            ease: "bounce.out",
          });
      }
    }
  }, [open]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
    >
      <defs>
        <clipPath id={`${id}_circleClip`}>
          <circle className="clip" cx="0" cy="0" r={circleRadius} ref={clip}></circle>
        </clipPath>
        <clipPath id={`${id}_squareClip`}>
          <rect className="clip" width={width} height={height}></rect>
        </clipPath>
      </defs>
      <g clipPath={`url(#${id}${inPlace ? "_squareClip" : "_circleClip"})`}>
        <image width={width} height={height} href={url} className="pointer-events-none"></image>
      </g>
    </svg>
  );
}
