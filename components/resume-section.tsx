"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import { resumeSnapshot } from "@/data/portfolio";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { PremiumButton } from "@/components/ui/premium-button";

export function ResumeSection() {
  return (
    <AnimatedSection id="resume" className="py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Resume"
          title="A concise professional snapshot for quick review."
          copy="Education, focus areas, and early experience are organized into a clear resume view for internships and strategy-focused opportunities."
        />

        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="flex flex-col justify-between rounded-3xl border border-graphite/10 bg-white/70 p-6 shadow-sm backdrop-blur-xl">
            <div>
              <h3 className="text-2xl font-semibold text-graphite">Michael Dominiecki</h3>
              <p className="mt-4 leading-7 text-muted">
                Business Marketing Student focused on product strategy, brand development, and
                professional communication.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PremiumButton href="/michael-dominiecki-resume.pdf" variant="dark" download>
                <Download size={17} aria-hidden="true" />
                Download
              </PremiumButton>
              <PremiumButton href="/michael-dominiecki-resume.pdf" variant="light" target="_blank" rel="noreferrer">
                <ExternalLink size={17} aria-hidden="true" />
                Open Preview
              </PremiumButton>
            </div>
          </div>

          <motion.div
            className="resume-document rounded-3xl border border-graphite/10 p-6 sm:p-8"
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
          >
            <div className="border-b border-graphite/10 pb-6">
              <p className="text-sm font-medium text-muted">Resume Preview</p>
              <h3 className="mt-2 text-3xl font-semibold text-graphite">Michael Dominiecki</h3>
              <p className="mt-3 text-muted">
                Business Marketing Student | Aspiring Product & Brand Strategist
              </p>
            </div>

            <div className="mt-7 grid gap-5">
              {resumeSnapshot.map((item) => (
                <div key={item.heading} className="rounded-2xl border border-graphite/10 bg-porcelain/70 p-5">
                  <h4 className="font-semibold text-graphite">{item.heading}</h4>
                  <p className="mt-2 leading-7 text-muted">{item.copy}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
