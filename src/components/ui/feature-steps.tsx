"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface FeatureStep {
  step: string;
  title?: string;
  content: string;
  image: string;
}

export interface FeatureStepsProps {
  features: FeatureStep[];
  className?: string;
  title?: string;
  subtitle?: string;
  autoPlayInterval?: number;
  imageHeight?: string;
}

export function FeatureSteps({
  features,
  className,
  title = "Bidang yang Dipelajari",
  subtitle,
  autoPlayInterval = 2500,
  imageHeight = "h-[240px] sm:h-[320px] md:h-[420px] lg:h-[480px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [features.length, autoPlayInterval]);

  const handleSelectFeature = (index: number) => {
    setCurrentFeature(index);
  };

  return (
    <div className={cn("py-2 sm:py-4 px-1 sm:px-6", className)}>
      <div className="max-w-7xl mx-auto w-full space-y-6 sm:space-y-8">
        {(title || subtitle) && (
          <div className="text-center max-w-3xl mx-auto space-y-2">
            {title && (
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#1B3A5C] tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-stone-600 text-xs sm:text-base leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-start">
          {/* Steps List (Left Side) */}
          <div className="md:col-span-6 lg:col-span-6 space-y-1 sm:space-y-1.5">
            {features.map((feature, index) => {
              const isActive = index === currentFeature;
              return (
                <motion.div
                  key={index}
                  onClick={() => handleSelectFeature(index)}
                  className={cn(
                    "group cursor-pointer rounded-lg py-1.5 px-2.5 sm:py-2 sm:px-3.5 transition-all duration-200 border flex items-center gap-2 sm:gap-2.5",
                    isActive
                      ? "bg-white border-amber-400/90 shadow-2xs scale-[1.005]"
                      : "bg-white/40 border-stone-200/60 hover:bg-white/80 hover:border-stone-300"
                  )}
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: isActive ? 1 : 0.6 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className={cn(
                      "w-5 h-5 sm:w-6 sm:h-6 rounded-md flex items-center justify-center font-extrabold text-[10px] sm:text-xs shrink-0 transition-all duration-200",
                      isActive
                        ? "bg-[#112236] text-amber-400 scale-105 shadow-xs"
                        : "bg-stone-200/80 text-stone-600 group-hover:bg-stone-300/80"
                    )}
                  >
                    {index < currentFeature ? (
                      <span className="text-[10px] sm:text-xs font-extrabold text-emerald-400">✓</span>
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3
                      className={cn(
                        "text-[11px] sm:text-xs font-extrabold transition-colors duration-200 leading-tight line-clamp-2",
                        isActive ? "text-[#112236]" : "text-stone-700"
                      )}
                    >
                      {feature.title || feature.step}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Animated Image Preview (Right Side) */}
          <div
            className={cn(
              "md:col-span-6 lg:col-span-6 relative overflow-hidden rounded-2xl sm:rounded-3xl border border-stone-200/80 shadow-xl bg-white md:sticky md:top-24",
              imageHeight
            )}
          >
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 rounded-3xl overflow-hidden"
                      initial={{ y: 80, opacity: 0, scale: 0.95 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      exit={{ y: -80, opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.title || feature.step}
                        fill
                        className="object-cover object-center"
                        priority
                      />
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
