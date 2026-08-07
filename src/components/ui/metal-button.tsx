import { cn } from "@/lib/utils";
import { MetalButton } from "@/components/ui/liquid-glass-button";

export const Component = ({ children = "Metal Button", ...props }) => {
  return (
    <MetalButton {...props}>{children}</MetalButton>
  );
};
