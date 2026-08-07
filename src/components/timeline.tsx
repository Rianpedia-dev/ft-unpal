import { ProsedurStep } from "@/data/pmb";

interface TimelineProps {
  steps: ProsedurStep[];
}

export default function Timeline({ steps }: TimelineProps) {
  return (
    <div className="relative border-l-2 border-amber-500/40 ml-4 md:ml-8 space-y-8 py-4">
      {steps.map((item) => (
        <div key={item.step} className="relative pl-6 md:pl-8 group">
          {/* Step Icon Circle */}
          <div className="absolute -left-[17px] top-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-[#1B3A5C] text-amber-400 font-extrabold text-xs ring-4 ring-[#F5F0E8] group-hover:bg-amber-500 group-hover:text-[#1B3A5C] transition-colors shadow">
            {item.step}
          </div>

          {/* Content Box */}
          <div className="bg-white p-5 rounded-2xl border border-amber-900/10 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-base font-bold text-[#1B3A5C] flex items-center gap-2">
              <span>{item.judul}</span>
            </h3>
            <p className="mt-1.5 text-sm text-stone-600 leading-relaxed">
              {item.deskripsi}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
