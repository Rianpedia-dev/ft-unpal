"use client";

import { Clock, Award, BookOpen, Users } from "lucide-react";

interface ProdiStatsGridProps {
  masaStudi: string;
  akreditasi: string;
  bebasSKS: number;
  jumlahAlumni: string;
}

export default function ProdiStatsGrid({
  masaStudi,
  akreditasi,
  bebasSKS,
  jumlahAlumni,
}: ProdiStatsGridProps) {
  const stats = [
    {
      label: "Masa Studi",
      value: masaStudi,
      icon: Clock,
    },
    {
      label: "Akreditasi",
      value: akreditasi,
      icon: Award,
    },
    {
      label: "Beban Studi",
      value: `${bebasSKS} SKS`,
      icon: BookOpen,
    },
    {
      label: "Jumlah Alumni",
      value: jumlahAlumni,
      icon: Users,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-10 relative z-20 mb-2 sm:mb-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/95 border border-blue-100 shadow-md flex items-center gap-3 sm:gap-4 hover:shadow-lg hover:border-blue-300 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="p-2.5 sm:p-3 rounded-xl bg-blue-50 text-blue-600 border border-blue-100/80 shrink-0 flex items-center justify-center">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] sm:text-xs font-extrabold uppercase text-blue-600 tracking-wider block">
                  {item.label}
                </span>
                <p className="text-sm sm:text-base lg:text-lg font-extrabold text-[#1B3A5C] truncate">
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
