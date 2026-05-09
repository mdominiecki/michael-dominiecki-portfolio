"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CursorGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 35, stiffness: 180, mass: 0.25 });
  const smoothY = useSpring(mouseY, { damping: 35, stiffness: 180, mass: 0.25 });

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [mouseX, mouseY]);

  const background = useMotionTemplate`radial-gradient(440px circle at ${smoothX}px ${smoothY}px, rgba(121, 184, 255, 0.15), rgba(156, 228, 211, 0.08) 34%, transparent 62%)`;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-10 hidden md:block"
      style={{ background }}
      aria-hidden="true"
    />
  );
}
