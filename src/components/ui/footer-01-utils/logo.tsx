import Image from "next/image";
import { siteConfig } from "@/data/site";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={siteConfig.logo}
        alt={`Logo ${siteConfig.name}`}
        width={40}
        height={40}
        className="h-10 w-10 object-contain bg-white/10 p-1 rounded-xl"
      />
      <div className="flex flex-col">
        <span className="font-heading font-extrabold text-lg text-foreground tracking-tight leading-tight">
          {siteConfig.name}
        </span>
        <span className="text-xs text-muted-foreground font-medium">
          {siteConfig.university}
        </span>
      </div>
    </div>
  );
}
