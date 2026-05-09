"use client";

import { motion } from "framer-motion";

const dots = [
  { left: "8%", top: "18%", size: "h-1.5 w-1.5", delay: 0 },
  { left: "18%", top: "74%", size: "h-1 w-1", delay: 0.8 },
  { left: "38%", top: "12%", size: "h-1 w-1", delay: 1.6 },
  { left: "64%", top: "22%", size: "h-1.5 w-1.5", delay: 0.35 },
  { left: "82%", top: "62%", size: "h-1 w-1", delay: 1.1 },
  { left: "92%", top: "28%", size: "h-1.5 w-1.5", delay: 1.9 },
  { left: "52%", top: "84%", size: "h-1 w-1", delay: 0.55 }
];

export function OrbitField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {dots.map((dot) => (
        <motion.span
          key={`${dot.left}-${dot.top}`}
          className={`absolute rounded-full bg-graphite/25 shadow-glow ${dot.size}`}
          style={{ left: dot.left, top: dot.top }}
          animate={{ y: [0, -18, 0], opacity: [0.22, 0.75, 0.22] }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            delay: dot.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
