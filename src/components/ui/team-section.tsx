import * as React from "react";
import { cn } from "@/lib/utils";

export interface SocialLink {
  icon: React.ElementType;
  href: string;
}

export interface TeamMember {
  name: string;
  designation: string;
  imageSrc: string;
  socialLinks?: SocialLink[];
}

export interface TeamSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  description?: string;
  members: TeamMember[];
  registerLink?: string;
  logo?: React.ReactNode;
  socialLinksMain?: SocialLink[];
}

export const TeamSection = React.forwardRef<HTMLDivElement, TeamSectionProps>(
  (
    {
      title,
      subtitle,
      description,
      members,
      registerLink,
      logo,
      socialLinksMain,
      className,
      ...props
    },
    ref
  ) => {
    const hasSideContent = logo || registerLink;

    return (
      <section
        ref={ref}
        className={cn(
          "relative w-full py-4",
          className
        )}
        {...props}
      >
        <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6 mx-auto max-w-7xl">
          {/* Background Grid */}
          <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
            <svg className="h-full w-full" fill="none">
              <defs>
                <pattern
                  id="grid"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M20 0L0 0 0 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-stone-600"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Header Section */}
          <div className={cn(
            "relative z-10 flex w-full flex-col items-center justify-between gap-4 lg:gap-8",
            hasSideContent ? "md:flex-row md:items-start md:text-left" : "text-center"
          )}>
            <div className={cn(
              "grid gap-2 text-center",
              hasSideContent ? "md:text-left" : "mx-auto"
            )}>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1B3A5C]">
                {subtitle && (
                  <span className="text-amber-800 block text-lg sm:text-xl md:text-2xl font-bold tracking-widest uppercase mb-1">
                    {subtitle}
                  </span>
                )}
                {title}
              </h2>
              {description && (
                <p className="max-w-[700px] text-stone-600 text-sm sm:text-base leading-relaxed mx-auto">
                  {description}
                </p>
              )}
            </div>
            {(logo || registerLink) && (
              <div className="flex flex-col items-center gap-4 md:items-end shrink-0">
                {logo && <div className="text-2xl font-extrabold text-[#112236]">{logo}</div>}
                {registerLink && (
                  <a
                    href={registerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center rounded-xl bg-[#112236] px-8 text-sm font-bold text-white shadow-lg transition-all hover:bg-[#162B45] hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#112236]"
                  >
                    DAFTAR ONLINE PMB →
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Main Social Links */}
          {socialLinksMain && socialLinksMain.length > 0 && (
            <div className="relative z-10 flex w-full items-center justify-center gap-4 py-2 border-y border-stone-200/60 my-2">
              {socialLinksMain.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-500 hover:text-amber-700 transition-colors p-1"
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
              <span className="text-stone-500 text-xs font-mono font-medium">
                pmb.universitas-palembang.ac.id
              </span>
            </div>
          )}

          {/* Team Members Grid */}
          <div className="relative z-10 mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 lg:gap-10">
            {members.map((member, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center justify-end overflow-hidden rounded-3xl bg-white p-6 text-center shadow-lg border border-stone-200/80 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl"
                style={{
                  backgroundColor:
                    index === 0
                      ? "#FFFDF5"
                      : index === 1
                        ? "#F8FAFC"
                        : "#FEFCE8",
                  color: "#112236",
                }}
              >
                {/* Background wave animation */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/2 origin-bottom scale-y-0 transform rounded-t-full bg-gradient-to-t from-amber-500/20 to-transparent transition-transform duration-500 ease-out group-hover:scale-y-100"
                  style={{ transitionDelay: `${index * 50}ms` }}
                />

                {/* Member Image */}
                <div
                  className="relative z-10 h-36 w-36 overflow-hidden rounded-full border-4 border-transparent bg-stone-100 transition-all duration-500 ease-out group-hover:border-[#112236] group-hover:scale-105 shadow-md"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <img
                    src={member.imageSrc}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>

                <h3 className="relative z-10 mt-4 text-lg font-extrabold text-[#112236]">
                  {member.name}
                </h3>
                <p className="relative z-10 text-xs font-bold text-amber-800">
                  {member.designation}
                </p>

                {/* Social Links */}
                {member.socialLinks && member.socialLinks.length > 0 && (
                  <div className="relative z-10 mt-4 flex items-center justify-center gap-3">
                    {member.socialLinks.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#112236] hover:text-amber-700 bg-white/90 border border-stone-200/90 p-2 rounded-full shadow-xs hover:shadow-md transform hover:scale-110 transition-all duration-200"
                      >
                        <link.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

TeamSection.displayName = "TeamSection";
