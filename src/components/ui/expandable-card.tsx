"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ExpandableCardProps {
  title: string;
  src: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
  classNameExpanded?: string;
  [key: string]: any;
}

export function ExpandableCard({
  title,
  src,
  description,
  children,
  className,
  classNameExpanded,
  ...props
}: ExpandableCardProps) {
  const [active, setActive] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);
  const id = React.useId();

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(false);
      }
    };

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setActive(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-md h-full w-full z-40"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && (
          <div
            className={cn(
              "fixed inset-0 grid place-items-center z-[100] p-4 sm:p-6 overflow-hidden",
            )}
          >
            <motion.div
              layoutId={`card-${title}-${id}`}
              ref={cardRef}
              className={cn(
                "w-full max-w-[850px] max-h-[90vh] flex flex-col overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] rounded-3xl bg-[#0F1D2D] text-white border border-amber-400/30 shadow-2xl relative",
                classNameExpanded,
              )}
              {...props}
            >
              <motion.div layoutId={`image-${title}-${id}`}>
                <div className="relative before:absolute before:inset-x-0 before:bottom-[-1px] before:h-[70px] before:z-50 before:bg-gradient-to-t before:from-[#0F1D2D] before:to-transparent">
                  <img
                    src={src}
                    alt={title}
                    className="w-full h-72 sm:h-96 object-cover object-center"
                  />
                </div>
              </motion.div>
              <div className="relative h-full">
                <div className="flex justify-between items-start p-6 sm:p-8 h-auto">
                  <div>
                    <motion.p
                      layoutId={`description-${description}-${id}`}
                      className="text-amber-400 font-extrabold text-xs sm:text-sm uppercase tracking-wider mb-1"
                    >
                      {description}
                    </motion.p>
                    <motion.h3
                      layoutId={`title-${title}-${id}`}
                      className="font-extrabold text-white text-2xl sm:text-3xl leading-snug"
                    >
                      {title}
                    </motion.h3>
                  </div>
                  <motion.button
                    aria-label="Close card"
                    layoutId={`button-${title}-${id}`}
                    className="h-10 w-10 shrink-0 flex items-center justify-center rounded-full bg-slate-800 text-white hover:bg-slate-700 border border-slate-700 transition-colors duration-300 focus:outline-none"
                    onClick={() => setActive(false)}
                  >
                    <motion.div
                      animate={{ rotate: active ? 45 : 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    </motion.div>
                  </motion.button>
                </div>
                <div className="relative px-6 sm:px-8 pb-8">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-slate-200 text-sm sm:text-base leading-relaxed flex flex-col items-start gap-4"
                  >
                    {children}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.div
        role="dialog"
        aria-labelledby={`card-title-${id}`}
        aria-modal="true"
        layoutId={`card-${title}-${id}`}
        onClick={() => setActive(true)}
        className={cn(
          "p-4 flex flex-col justify-between bg-gradient-to-br from-[#112236] via-[#162A3F] to-[#0E1A2B] text-white shadow-xl rounded-2xl cursor-pointer border border-amber-500/20 hover:border-amber-400/40 hover:-translate-y-1.5 transition-all duration-300 h-full",
          className,
        )}
      >
        <div className="flex gap-4 flex-col h-full justify-between">
          <div className="space-y-3">
            <motion.div layoutId={`image-${title}-${id}`}>
              <img
                src={src}
                alt={title}
                className="w-full h-48 rounded-xl object-cover object-center border border-white/10"
              />
            </motion.div>
            <div className="space-y-1.5">
              <motion.p
                layoutId={`description-${description}-${id}`}
                className="text-amber-400 text-xs font-extrabold uppercase tracking-wider"
              >
                {description}
              </motion.p>
              <motion.h3
                layoutId={`title-${title}-${id}`}
                className="text-white font-extrabold text-base leading-snug line-clamp-2"
              >
                {title}
              </motion.h3>
            </div>
          </div>

          <div className="flex justify-between items-center pt-3 border-t border-slate-700/60 mt-2">
            <span className="text-xs text-slate-300 font-medium">Baca Selengkapnya</span>
            <motion.button
              aria-label="Open card"
              layoutId={`button-${title}-${id}`}
              className="h-8 w-8 shrink-0 flex items-center justify-center rounded-full bg-amber-400/20 text-amber-300 hover:bg-amber-400/30 border border-amber-400/30 transition-colors duration-300 focus:outline-none"
            >
              <motion.div
                animate={{ rotate: active ? 45 : 0 }}
                transition={{ duration: 0.4 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
