import React from 'react';
import { cn } from "@/lib/utils";

export interface SocialItem {
  href: string;
  ariaLabel: string;
  tooltip: string;
  svgUrl?: string;
  icon?: React.ReactNode;
  color: string;
}

// Define the props for the SocialTooltip component
export interface SocialTooltipProps extends React.HTMLAttributes<HTMLUListElement> {
  items: SocialItem[];
}

const SocialTooltip = React.forwardRef<HTMLUListElement, SocialTooltipProps>(
  ({ className, items, ...props }, ref) => {
    // Base styles for the component
    const baseIconStyles =
      "relative flex items-center justify-center w-12 h-12 rounded-full bg-slate-100/90 border border-slate-200 overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-lg";
    const baseSvgStyles =
      "relative z-10 w-5 h-5 text-stone-800 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:text-white object-contain flex items-center justify-center";
    const baseFilledStyles =
      "absolute bottom-0 left-0 w-full h-0 transition-all duration-300 ease-in-out group-hover:h-full";
    const baseTooltipStyles =
      "absolute bottom-[-36px] left-1/2 -translate-x-1/2 px-2.5 py-1 text-xs font-semibold text-white whitespace-nowrap rounded-lg opacity-0 invisible transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:bottom-[-44px] shadow-md z-30 pointer-events-none";

    return (
      <ul
        ref={ref}
        className={cn("flex flex-wrap items-center justify-start gap-3.5 sm:gap-4 py-0.5", className)}
        {...props}
      >
        {items.map((item, index) => (
          <li key={index} className="relative group">
            <a
              href={item.href}
              aria-label={item.ariaLabel}
              className={cn(baseIconStyles)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className={cn(baseFilledStyles)}
                style={{ backgroundColor: item.color }}
              />
              {item.icon ? (
                <div className={cn(baseSvgStyles)}>
                  {item.icon}
                </div>
              ) : (
                <img
                  src={item.svgUrl}
                  alt={item.ariaLabel}
                  className={cn(baseSvgStyles)}
                />
              )}
            </a>
            <div
              className={cn(baseTooltipStyles)}
              style={{ backgroundColor: item.color }}
            >
              {item.tooltip}
            </div>
          </li>
        ))}
      </ul>
    );
  }
);

SocialTooltip.displayName = "SocialTooltip";

export { SocialTooltip };
