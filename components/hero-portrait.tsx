"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  BarChart3,
  BriefcaseBusiness,
  Figma,
  Palette,
  PenTool,
  Presentation
} from "lucide-react";

const orbitBadges = [
  {
    label: "Figma",
    icon: Figma,
    position: "left-[47%] top-[12%]",
    accent: "from-violet/30 to-electric/20"
  },
  {
    label: "Canva",
    icon: Palette,
    position: "left-[72%] top-[22%]",
    accent: "from-teal/30 to-cyan/20"
  },
  {
    label: "Adobe",
    icon: PenTool,
    position: "left-[35%] top-[31%]",
    accent: "from-violet/25 to-teal/20"
  },
  {
    label: "Excel",
    icon: BarChart3,
    position: "left-[77%] top-[42%]",
    accent: "from-cyan/30 to-electric/20"
  },
  {
    label: "Slides",
    icon: Presentation,
    position: "left-[40%] top-[54%]",
    accent: "from-electric/25 to-violet/20"
  },
  {
    label: "Strategy",
    icon: BriefcaseBusiness,
    position: "left-[60%] top-[5%]",
    accent: "from-teal/25 to-violet/20"
  }
];

const premiumEase = [0.16, 1, 0.3, 1] as const;

const badgeVariants: Variants = {
  rest: {
    opacity: 0,
    scale: 0.72,
    y: 14,
    filter: "blur(6px)"
  },
  hover: (index: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.42,
      delay: index * 0.045,
      ease: premiumEase
    }
  })
};

export function HeroPortrait() {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      className="relative mx-auto w-full max-w-[540px] lg:ml-auto"
      initial={{ opacity: 0, scale: 0.96, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.2, ease: premiumEase }}
    >
      <div className="absolute -left-10 top-16 h-36 w-36 rounded-full bg-cyan/20 blur-3xl" />
      <div className="absolute -right-10 bottom-16 h-44 w-44 rounded-full bg-violet/[0.18] blur-3xl" />

      <motion.div
        className="premium-border glass relative overflow-hidden rounded-3xl p-4"
        initial={false}
        animate={isActive ? "hover" : "rest"}
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        onClick={() => setIsActive((current) => !current)}
        tabIndex={0}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        variants={{
          rest: { y: 0, rotateX: 0, rotateY: 0 },
          hover: { y: -8, rotateX: 2, rotateY: -2 }
        }}
      >
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/70 bg-gradient-to-br from-white via-pearl to-silver">
          <motion.img
            src="/hero-test-photo.svg"
            alt="Michael Dominiecki"
            className="h-full w-full object-contain object-bottom"
            animate={isActive ? "hover" : "rest"}
            variants={{
              rest: { scale: 1 },
              hover: {
                scale: 1.035,
                transition: { duration: 0.75, ease: premiumEase }
              }
            }}
          />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_26%,rgba(255,255,255,0.18),transparent_24%),linear-gradient(180deg,transparent_54%,rgba(23,24,26,0.32))]" />

          {orbitBadges.map((badge, index) => {
            const Icon = badge.icon;

            return (
              <motion.div
                key={badge.label}
                custom={index}
                variants={badgeVariants}
                animate={isActive ? "hover" : "rest"}
                className={`pointer-events-none absolute z-20 -translate-x-1/2 rounded-2xl border border-white/70 bg-white/[0.72] px-3 py-2 shadow-premium backdrop-blur-xl ${badge.position}`}
              >
                <span
                  className={`flex items-center gap-2 rounded-xl bg-gradient-to-r ${badge.accent} px-2.5 py-1.5 text-xs font-semibold text-graphite`}
                >
                  <Icon size={14} aria-hidden="true" />
                  {badge.label}
                </span>
              </motion.div>
            );
          })}

          <motion.div
            className="absolute bottom-5 left-1/2 z-20 w-fit -translate-x-1/2 rounded-2xl border border-white/70 bg-white/75 px-5 py-3 shadow-premium backdrop-blur-xl"
            animate={isActive ? "hover" : "rest"}
            variants={{
              rest: { y: 0, opacity: 0.92 },
              hover: { y: -4, opacity: 1 }
            }}
          >
            <p className="whitespace-nowrap text-sm font-semibold text-graphite">
              Michael Dominiecki
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
