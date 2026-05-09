"use client";

import { motion } from "framer-motion";
import { FileDown, Mail, PanelsTopLeft } from "lucide-react";
import { profileHighlights } from "@/data/portfolio";
import { OrbitField } from "@/components/ui/orbit-field";
import { PremiumButton } from "@/components/ui/premium-button";

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-32 sm:pt-36">
      <div className="absolute inset-0 bg-mesh-soft" aria-hidden="true" />
      <motion.div
        className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-electric/10 blur-3xl sm:h-96 sm:w-96"
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.62, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <OrbitField />

      <div className="section-shell grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/60 px-4 py-2 text-sm font-medium text-muted shadow-sm backdrop-blur-xl"
          >
            <span className="h-2 w-2 rounded-full bg-teal shadow-glow" />
            Portfolio
          </motion.div>

          <motion.h1
            className="text-balance max-w-4xl text-5xl font-semibold leading-[1.04] text-graphite sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            Michael Dominiecki
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-xl font-medium leading-8 text-ink sm:text-2xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          >
            Interested in branding, tech, and design.
          </motion.p>

          <motion.p
            className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            I’m a Business Marketing student at Kennesaw State University with an interest in
            branding, technology, and modern digital experiences. I enjoy building things that feel
            clean, thoughtful, and easy to connect with.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
            <PremiumButton href="/michael-dominiecki-resume.pdf" target="_blank" rel="noreferrer">
              <FileDown size={17} aria-hidden="true" />
              View Resume
            </PremiumButton>
            <PremiumButton href="#projects" variant="light">
              <PanelsTopLeft size={17} aria-hidden="true" />
              Projects
            </PremiumButton>
            <PremiumButton href="#contact" variant="ghost">
              <Mail size={17} aria-hidden="true" />
              Contact
            </PremiumButton>
          </motion.div>

          <motion.div
            className="mt-12 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
          >
            {profileHighlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-graphite/10 bg-white/[0.55] px-4 py-2 text-sm font-medium text-muted backdrop-blur-xl transition duration-300 hover:border-electric/[0.45] hover:text-graphite hover:shadow-glow"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[480px] lg:ml-auto"
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute -left-8 top-12 h-32 w-32 rounded-full bg-cyan/20 blur-3xl" />
          <div className="absolute -right-10 bottom-10 h-40 w-40 rounded-full bg-violet/[0.18] blur-3xl" />

          <motion.div
            className="premium-border glass relative overflow-hidden rounded-3xl p-5"
            whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/70 bg-gradient-to-br from-white via-pearl to-silver">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_38%_24%,rgba(121,184,255,0.28),transparent_30%),radial-gradient(circle_at_78%_64%,rgba(156,228,211,0.20),transparent_32%)]" />
              <motion.div
                className="absolute left-1/2 top-[22%] h-32 w-32 -translate-x-1/2 rounded-full border border-white/80 bg-white/[0.65] shadow-premium backdrop-blur-xl sm:h-36 sm:w-36"
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-[-8%] left-1/2 h-64 w-64 -translate-x-1/2 rounded-[42%] border border-white/80 bg-white/[0.55] shadow-premium backdrop-blur-xl sm:h-72 sm:w-72"
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute bottom-6 left-1/2 w-fit -translate-x-1/2 rounded-2xl border border-white/70 bg-white/70 px-5 py-3 shadow-premium backdrop-blur-xl">
                <p className="whitespace-nowrap text-sm font-semibold text-graphite">
                  Michael Dominiecki
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
