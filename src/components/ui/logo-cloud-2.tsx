"use client";

import React from "react";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type LogoItem = {
  src?: string;
  alt: string;
  nama: string;
  icon?: string;
  width?: number;
  height?: number;
};

export interface LogoCloudProps extends React.ComponentProps<"div"> {
  items?: LogoItem[];
}

export function LogoCloud({ className, items, ...props }: LogoCloudProps) {
  const defaultList: LogoItem[] = [
    { alt: "PT Pusri Palembang", nama: "PUSRI PALEMBANG", icon: "🏢" },
    { alt: "PT Pertamina", nama: "PERTAMINA KPI", icon: "⛽" },
    { alt: "PT PLN (Persero)", nama: "PLN PERSERO", icon: "⚡" },
    { alt: "Waskita Karya", nama: "WASKITA KARYA", icon: "🏗️" },
    { alt: "Bank Sumsel Babel", nama: "BANK SUMSEL BABEL", icon: "🏦" },
    { alt: "Dinas PUPR Sumsel", nama: "DINAS PUPR SUMSEL", icon: "🏛️" },
    { alt: "PT Bukit Asam", nama: "PT BUKIT ASAM", icon: "⛏️" },
    { alt: "PT Semen Baturaja", nama: "SEMEN BATURAJA", icon: "🧱" },
  ];

  const partnersList = items && items.length > 0 ? items : defaultList;

  return (
    <div
      className={cn(
        "relative grid grid-cols-2 border-x border-stone-200 md:grid-cols-4 bg-white rounded-2xl overflow-hidden shadow-xl border-stone-200",
        className
      )}
      {...props}
    >
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-stone-200" />

      {/* Row 1, Col 1 */}
      <LogoCard
        className="relative border-r border-b border-stone-200 bg-white hover:bg-stone-50/80"
        logo={partnersList[0]}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-stone-400"
          strokeWidth={1}
        />
      </LogoCard>

      {/* Row 1, Col 2 */}
      <LogoCard
        className="border-b border-stone-200 md:border-r bg-stone-50/50 hover:bg-stone-50"
        logo={partnersList[1]}
      />

      {/* Row 1, Col 3 */}
      <LogoCard
        className="relative border-r border-b border-stone-200 bg-white hover:bg-stone-50/80"
        logo={partnersList[2]}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-stone-400"
          strokeWidth={1}
        />
        <PlusIcon
          className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 text-stone-400 md:block"
          strokeWidth={1}
        />
      </LogoCard>

      {/* Row 1, Col 4 */}
      <LogoCard
        className="relative border-b border-stone-200 bg-stone-50/50 hover:bg-stone-50"
        logo={partnersList[3]}
      />

      {/* Row 2, Col 1 */}
      <LogoCard
        className="relative border-r border-b border-stone-200 bg-stone-50/50 md:border-b-0 hover:bg-stone-50"
        logo={partnersList[4]}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] md:-left-[12.5px] absolute z-10 size-6 text-stone-400 md:hidden"
          strokeWidth={1}
        />
      </LogoCard>

      {/* Row 2, Col 2 */}
      <LogoCard
        className="border-b border-stone-200 bg-white md:border-r md:border-b-0 hover:bg-stone-50/80"
        logo={partnersList[5]}
      />

      {/* Row 2, Col 3 */}
      <LogoCard
        className="border-r border-b border-stone-200 bg-stone-50/50 md:border-b-0 hover:bg-stone-50"
        logo={partnersList[6]}
      />

      {/* Row 2, Col 4 */}
      <LogoCard
        className="bg-white hover:bg-stone-50/80"
        logo={partnersList[7]}
      />

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-stone-200" />
    </div>
  );
}

type LogoCardProps = React.ComponentProps<"div"> & {
  logo: LogoItem;
};

function LogoCard({ logo, className, children, ...props }: LogoCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center p-6 sm:p-8 md:p-10 select-none group transition-colors duration-300 min-h-[110px] md:min-h-[130px]",
        className
      )}
      {...props}
    >
      {logo.src ? (
        <img
          alt={logo.alt}
          className="pointer-events-none h-6 md:h-8 select-none object-contain group-hover:scale-105 transition-transform"
          height={logo.height || "auto"}
          src={logo.src}
          width={logo.width || "auto"}
        />
      ) : (
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="text-2xl md:text-3xl transition-transform group-hover:scale-110">{logo.icon || "🏢"}</span>
          <span className="text-xs md:text-sm font-bold tracking-tight text-[#1B3A5C] group-hover:text-amber-600 transition-colors uppercase max-w-[180px] leading-tight">
            {logo.nama}
          </span>
        </div>
      )}
      {children}
    </div>
  );
}
