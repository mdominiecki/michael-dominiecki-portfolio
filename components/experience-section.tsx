"use client";

import { motion } from "framer-motion";
import { experienceItems } from "@/data/portfolio";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";

export function ExperienceSection() {
  return (
    <AnimatedSection id="experience" className="relative py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-graphite/10 to-transparent" />
      <div className="section-shell">
        <SectionHeading
          eyebrow="Experience"
          title="Service, teamwork, and project execution shaped into a strategy foundation."
          copy="These early experiences reflect the professional habits behind strong marketing work: listening carefully, organizing information, coordinating with people, and following through."
        />

        <div className="relative">
          <div className="absolute left-5 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-electric/40 via-graphite/10 to-teal/40 md:block" />
          <div className="grid gap-5">
            {experienceItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  className="group relative grid gap-5 rounded-3xl border border-graphite/10 bg-white/[0.72] p-5 shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-electric/[0.35] hover:shadow-lift md:grid-cols-[4rem_1fr]"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.65, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="relative z-10 grid h-12 w-12 place-items-center rounded-2xl border border-white/[0.85] bg-white text-graphite shadow-sm transition duration-300 group-hover:shadow-glow">
                    <Icon size={20} aria-hidden="true" />
                  </div>

                  <div>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-sm font-medium text-muted">{item.eyebrow}</p>
                      <span className="w-fit rounded-full border border-graphite/10 bg-porcelain px-3 py-1 text-xs font-medium text-muted">
                        {item.period}
                      </span>
                    </div>
                    <h3 className="mt-3 text-2xl font-semibold text-graphite">{item.title}</h3>
                    <p className="mt-3 max-w-3xl leading-7 text-muted">{item.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.points.map((point) => (
                        <span
                          key={point}
                          className="rounded-full border border-graphite/10 bg-white/70 px-3 py-1.5 text-sm text-muted transition duration-300 group-hover:border-electric/30 group-hover:text-graphite"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
