import { type ButtonHTMLAttributes } from "react";
import { cn } from "../lib/utils";

type StudioButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "icon";
};

export function StudioButton({
  className,
  variant = "primary",
  type = "button",
  ...props
}: StudioButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" && "bg-primary px-5 py-3 text-primary-foreground shadow-glow hover:-translate-y-0.5 hover:bg-primary-bright",
        variant === "outline" && "border border-border bg-surface/60 px-5 py-3 text-foreground backdrop-blur-xl hover:border-primary/60 hover:bg-surface-raised",
        variant === "icon" && "size-11 border border-border bg-surface/80 text-foreground backdrop-blur-xl hover:border-primary/60 hover:bg-surface-raised",
        className,
      )}
      {...props}
    />
  );
}