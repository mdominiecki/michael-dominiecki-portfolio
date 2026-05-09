"use client";

import { motion } from "framer-motion";
import { FileDown, Mail, PanelsTopLeft } from "lucide-react";
import { HeroPortrait } from "@/components/hero-portrait";
import { OrbitField } from "@/components/ui/orbit-field";

const heroEase = [0.16, 1, 0.3, 1] as const;

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pb-10 pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-mesh-soft" aria-hidden="true" />
      <motion.div
        className="absolute left-1/2 top-[18%] h-72 w-72 -translate-x-1/2 rounded-full bg-electric/10 blur-3xl sm:h-96 sm:w-96"
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.62, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <OrbitField />

      <div className="section-shell">
        <div className="relative grid min-h-[calc(100vh-8rem)] place-items-center">
          <motion.div
            className="absolute inset-x-0 top-[14%] z-0 hidden select-none text-center text-[clamp(6rem,15vw,13.5rem)] font-semibold uppercase leading-[0.84] text-graphite/[0.075] lg:block"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: heroEase }}
            aria-hidden="true"
          >
            <span className="block">Michael</span>
            <span className="block">Dominiecki</span>
          </motion.div>

          <motion.div
            className="absolute left-0 top-[28%] z-30 hidden max-w-[210px] lg:block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: heroEase }}
          >
            <p className="text-xs font-semibold uppercase text-muted">
              Business Marketing Student
            </p>
            <p className="mt-3 text-sm leading-6 text-ink">
              Kennesaw State University with an interest in branding, technology, and modern
              digital experiences.
            </p>
          </motion.div>

          <motion.div
            className="absolute right-0 top-[30%] z-30 hidden max-w-[190px] text-right lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: heroEase }}
          >
            <p className="text-xs font-semibold uppercase text-muted">Focus</p>
            <p className="mt-3 text-sm leading-6 text-ink">
              Branding, tech, design, product thinking, and clean digital experiences.
            </p>
          </motion.div>

          <motion.div
            className="absolute inset-x-0 top-3 z-30 mx-auto w-full max-w-2xl text-center sm:top-6"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18, ease: heroEase }}
          >
            <h1 className="text-4xl font-semibold leading-none text-graphite sm:text-5xl lg:hidden">
              Michael Dominiecki
            </h1>
            <p className="mx-auto mt-3 w-fit rounded-full border border-white/80 bg-white/[0.62] px-5 py-2 text-sm font-semibold text-ink shadow-sm backdrop-blur-xl sm:text-base">
              Interested in branding, tech, and design.
            </p>
          </motion.div>

          <HeroPortrait />

          <motion.div
            className="absolute inset-x-0 bottom-2 z-30 mx-auto flex w-full flex-col items-center gap-4 text-center sm:bottom-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42, ease: heroEase }}
          >
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/michael-dominiecki-resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-graphite/10 bg-graphite px-5 py-3 text-sm font-semibold text-white shadow-premium transition duration-300 hover:border-electric/50 hover:shadow-glow"
              >
                <FileDown size={16} aria-hidden="true" />
                View Resume
              </a>
              <a
                href="#projects"
                className="flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-5 py-3 text-sm font-semibold text-graphite shadow-sm backdrop-blur-xl transition duration-300 hover:border-cyan/60 hover:shadow-glow"
              >
                <PanelsTopLeft size={16} aria-hidden="true" />
                Projects
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 rounded-full border border-white/80 bg-white/50 px-5 py-3 text-sm font-semibold text-graphite shadow-sm backdrop-blur-xl transition duration-300 hover:border-violet/60 hover:shadow-glow"
              >
                <Mail size={16} aria-hidden="true" />
                Contact
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
