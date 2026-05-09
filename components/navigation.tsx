"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { navItems } from "@/data/portfolio";

export function Navigation() {
  return (
    <motion.header
      className="fixed left-0 right-0 top-4 z-40 px-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="glass mx-auto flex h-14 w-full max-w-6xl items-center justify-between rounded-2xl px-3 sm:px-5">
        <a href="#home" className="group flex items-center gap-3" aria-label="Michael Dominiecki home">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/70 bg-white/70 text-sm font-semibold text-graphite shadow-sm transition duration-300 group-hover:shadow-glow">
            MD
          </span>
          <span className="hidden text-sm font-medium text-ink sm:inline">Michael Dominiecki</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="animated-underline text-sm font-medium text-muted transition hover:text-graphite"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-xl border border-graphite/10 bg-graphite px-4 py-2 text-sm font-medium text-white shadow-premium transition duration-300 hover:border-electric/50 hover:shadow-glow md:flex"
        >
          Connect
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>

        <a
          href="#contact"
          className="grid h-10 w-10 place-items-center rounded-xl border border-graphite/10 bg-white/70 text-graphite shadow-sm md:hidden"
          aria-label="Contact Michael"
        >
          <Mail size={18} aria-hidden="true" />
        </a>
      </nav>
    </motion.header>
  );
}
