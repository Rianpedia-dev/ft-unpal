"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionContextType {
  openItem: string | null;
  toggleItem: (value: string) => void;
}

const AccordionContext = React.createContext<AccordionContextType | null>(null);

export function Accordion({
  children,
  collapsible = true,
  className,
}: {
  children: React.ReactNode;
  type?: "single";
  collapsible?: boolean;
  className?: string;
}) {
  const [openItem, setOpenItem] = React.useState<string | null>(null);

  const toggleItem = (value: string) => {
    setOpenItem((prev) => (prev === value ? (collapsible ? null : prev) : value));
  };

  return (
    <AccordionContext.Provider value={{ openItem, toggleItem }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  value,
  children,
  className,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<{ itemValue?: string }>, {
            itemValue: value,
          });
        }
        return child;
      })}
    </div>
  );
}

export function AccordionTrigger({
  children,
  className,
  itemValue,
}: {
  children: React.ReactNode;
  className?: string;
  itemValue?: string;
}) {
  const ctx = React.useContext(AccordionContext);
  const isOpen = ctx?.openItem === itemValue;

  return (
    <button
      type="button"
      onClick={() => itemValue && ctx?.toggleItem(itemValue)}
      className={cn(
        "flex w-full items-center justify-between py-4 text-left font-medium transition-all hover:no-underline",
        className
      )}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-5 w-5 shrink-0 text-amber-500 transition-transform duration-200",
          isOpen && "rotate-180"
        )}
      />
    </button>
  );
}

export function AccordionContent({
  children,
  className,
  itemValue,
}: {
  children: React.ReactNode;
  className?: string;
  itemValue?: string;
}) {
  const ctx = React.useContext(AccordionContext);
  const isOpen = ctx?.openItem === itemValue;

  if (!isOpen) return null;

  return <div className={cn("pb-4 pt-1", className)}>{children}</div>;
}
