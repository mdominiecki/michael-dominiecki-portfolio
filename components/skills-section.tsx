"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";

export function SkillsSection() {
  return (
    <AnimatedSection id="skills" className="py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="A practical toolkit for brand, product, and business communication."
          copy="The skill set is intentionally balanced: strategic thinking, clear storytelling, analytical comfort, and the operational discipline to move work forward."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.article
                key={skill.title}
                className="card-shine group relative rounded-3xl border border-graphite/10 bg-white/[0.72] p-5 shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-electric/[0.35] hover:shadow-lift"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.58, delay: index * 0.045, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.015 }}
              >
                <div
                  className={`mb-8 h-1.5 rounded-full bg-gradient-to-r ${skill.accent} opacity-80 transition duration-300 group-hover:opacity-100`}
                />
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold text-graphite">{skill.title}</h3>
                  <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/80 bg-white text-graphite shadow-sm transition duration-300 group-hover:shadow-glow">
                    <Icon size={19} aria-hidden="true" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
