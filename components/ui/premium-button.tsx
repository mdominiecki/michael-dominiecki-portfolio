import type { ComponentPropsWithoutRef, ReactNode } from "react";

type PremiumButtonProps = ComponentPropsWithoutRef<"a"> & {
  children: ReactNode;
  variant?: "dark" | "light" | "ghost";
};

const variants = {
  dark:
    "border-graphite/10 bg-graphite text-white shadow-premium hover:border-electric/50 hover:shadow-glow",
  light:
    "border-white/80 bg-white/[0.76] text-graphite shadow-premium hover:border-electric/40 hover:shadow-glow",
  ghost:
    "border-graphite/10 bg-white/[0.35] text-graphite hover:border-teal/60 hover:bg-white/70 hover:shadow-glow"
};

export function PremiumButton({
  children,
  className = "",
  variant = "dark",
  ...props
}: PremiumButtonProps) {
  return (
    <a
      className={`group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-2xl border px-5 py-3 text-sm font-semibold transition duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/[0.35] to-transparent transition duration-700 group-hover:translate-x-[120%]" />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </a>
  );
}
