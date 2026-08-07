import React from "react";
import Link from "next/link";
import { MetalButton } from "@/components/ui/liquid-glass-button";

export type PearlButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> & {
  label?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "blue" | "amber" | "outline";
  showSparkle?: boolean;
  as?: "button" | "div" | "span";
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

export const PearlButton: React.FC<PearlButtonProps> = ({
  label,
  children,
  className = "",
  href,
  target,
  rel,
  size = "md",
  variant = "dark",
  showSparkle = false,
  as = "button",
  onClick,
  disabled,
  type = "button",
  ...props
}) => {
  const content = label || children;

  // Map variant to MetalButton variant
  let metalVariant: "default" | "primary" | "gold" | "bronze" = "default";
  if (variant === "blue") metalVariant = "primary";
  if (variant === "amber") metalVariant = "gold";
  if (variant === "outline") metalVariant = "bronze";

  const buttonContent = (
    <span className="flex items-center justify-center gap-2">
      {showSparkle && <span className="text-amber-300">✧</span>}
      <span>{content}</span>
    </span>
  );

  const metalBtn = (
    <MetalButton
      variant={metalVariant}
      onClick={onClick}
      disabled={disabled}
      className={`font-semibold tracking-wide ${className}`}
      {...props}
    >
      {buttonContent}
    </MetalButton>
  );

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          target={target || "_blank"}
          rel={rel || "noopener noreferrer"}
          className="inline-block text-decoration-none"
        >
          {metalBtn}
        </a>
      );
    }
    return (
      <Link href={href} className="inline-block text-decoration-none">
        {metalBtn}
      </Link>
    );
  }

  if (as === "span" || as === "div") {
    return (
      <span onClick={onClick} className="inline-block cursor-pointer">
        {metalBtn}
      </span>
    );
  }

  return metalBtn;
};
