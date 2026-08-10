import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  style?: React.CSSProperties;
  innerStyle?: React.CSSProperties;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  innerClassName = "",
  style,
  innerStyle,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`group w-full p-1.5 rounded-2xl relative isolate overflow-hidden border border-stone-300/80 shadow-[0_8px_20px_rgba(27,58,92,0.06)] transition-all duration-300 hover:shadow-[0_12px_28px_rgba(27,58,92,0.14)] will-change-transform translate-z-0 ${className}`}
      style={{ backgroundColor: "#F3EEE6", ...style }}
    >
      <div
        className={`w-full h-full p-5 sm:p-6 rounded-xl relative border border-stone-200/80 shadow-sm will-change-transform translate-z-0 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-amber-500/[0.04] before:to-transparent before:opacity-0 before:transition-opacity before:pointer-events-none hover:before:opacity-100 ${innerClassName}`}
        style={{ backgroundColor: "#FFFFFF", color: "#1C1917", ...innerStyle }}
      >
        {children}
      </div>
    </div>
  );
};
