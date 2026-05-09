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
    position: "left-[30%] top-[19%]",
    accent: "from-violet/30 to-electric/20"
  },
  {
    label: "Canva",
    icon: Palette,
    position: "left-[74%] top-[28%]",
    accent: "from-teal/30 to-cyan/20"
  },
  {
    label: "Adobe",
    icon: PenTool,
    position: "left-[23%] top-[37%]",
    accent: "from-violet/25 to-teal/20"
  },
  {
    label: "Excel",
    icon: BarChart3,
    position: "left-[80%] top-[46%]",
    accent: "from-cyan/30 to-electric/20"
  },
  {
    label: "Slides",
    icon: Presentation,
    position: "left-[31%] top-[56%]",
    accent: "from-electric/25 to-violet/20"
  },
  {
    label: "Strategy",
    icon: BriefcaseBusiness,
    position: "left-[58%] top-[12%]",
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
      className="relative z-20 mx-auto grid w-full max-w-[min(84vw,560px)] place-items-center"
      initial={{ opacity: 0, scale: 0.96, y: 28 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.2, ease: premiumEase }}
    >
      <div className="absolute left-1/2 top-1/2 h-[72%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/65 blur-3xl" />
      <div className="absolute left-1/2 top-[30%] h-48 w-48 -translate-x-1/2 rounded-full bg-cyan/20 blur-3xl" />
      <div className="absolute bottom-8 left-1/2 h-24 w-[72%] -translate-x-1/2 rounded-full bg-graphite/10 blur-2xl" />

      <motion.div
        className="relative h-[58vh] min-h-[430px] w-full outline-none sm:h-[66vh] sm:min-h-[560px] lg:h-[70vh]"
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
          hover: { y: -10, rotateX: 1.5, rotateY: -1.5 }
        }}
      >
        <motion.img
          src="/hero-test-photo.svg"
          alt="Michael Dominiecki"
          className="relative z-10 h-full w-full select-none object-contain object-bottom drop-shadow-[0_42px_80px_rgba(23,24,26,0.22)]"
          animate={isActive ? "hover" : "rest"}
          draggable={false}
          variants={{
            rest: { scale: 1 },
            hover: {
              scale: 1.035,
              transition: { duration: 0.75, ease: premiumEase }
            }
          }}
        />

        {orbitBadges.map((badge, index) => {
          const Icon = badge.icon;

          return (
            <motion.div
              key={badge.label}
              custom={index}
              variants={badgeVariants}
              animate={isActive ? "hover" : "rest"}
              className={`pointer-events-none absolute z-30 -translate-x-1/2 rounded-2xl border border-white/80 bg-white/[0.76] px-3 py-2 shadow-premium backdrop-blur-xl ${badge.position}`}
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

      </motion.div>
    </motion.div>
  );
}
