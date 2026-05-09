"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";

export function ProjectsSection() {
  return (
    <AnimatedSection id="projects" className="relative py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-graphite/10 to-transparent" />
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work areas across research, strategy, and presentation projects."
          copy="A focused project shelf spanning market analysis, brand thinking, product evaluation, and global marketing communication."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                className="group relative overflow-hidden rounded-3xl border border-graphite/10 bg-white/[0.72] p-6 shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-electric/[0.35] hover:shadow-lift"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.68, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(121,184,255,0.13),transparent_28%),radial-gradient(circle_at_88%_84%,rgba(156,228,211,0.12),transparent_30%)] opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-5">
                    <span className="rounded-full border border-graphite/10 bg-porcelain px-3 py-1 text-sm font-medium text-muted">
                      {project.category}
                    </span>
                    <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/80 bg-white text-graphite shadow-sm transition duration-300 group-hover:shadow-glow">
                      <Icon size={19} aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="mt-10 text-2xl font-semibold text-graphite">{project.title}</h3>
                  <p className="mt-4 leading-7 text-muted">{project.description}</p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-graphite/10 bg-white/[0.65] px-3 py-1.5 text-sm text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-graphite"
                  >
                    Discuss project
                    <ArrowUpRight
                      size={16}
                      className="transition duration-300 group-hover:translate-x-1 group-hover:text-electric"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
