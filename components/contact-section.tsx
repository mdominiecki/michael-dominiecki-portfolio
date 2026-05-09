"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Send } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { PremiumButton } from "@/components/ui/premium-button";

export function ContactSection() {
  return (
    <AnimatedSection id="contact" className="relative pb-16 pt-24 sm:pb-20 sm:pt-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-graphite/10 to-transparent" />
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s connect about marketing, strategy, and product-focused opportunities."
          copy="For internships, project work, or a strategy conversation, this is the easiest place to start."
        />

        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="rounded-3xl border border-graphite/10 bg-white/[0.72] p-6 shadow-sm backdrop-blur-xl">
            <h3 className="text-2xl font-semibold text-graphite">Direct links</h3>
            <p className="mt-4 leading-7 text-muted">
              Interested in internships, project work, or a conversation about brand and product
              strategy.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <PremiumButton href="https://www.linkedin.com" variant="light" target="_blank">
                <Linkedin size={17} aria-hidden="true" />
                LinkedIn
              </PremiumButton>
              <PremiumButton href="mailto:michael.dominiecki@example.com" variant="dark">
                <Mail size={17} aria-hidden="true" />
                Email
              </PremiumButton>
            </div>
          </div>

          <motion.form
            name="contact"
            method="POST"
            action="/thank-you"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="premium-border glass rounded-3xl p-5 sm:p-6"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-muted">Name</span>
                <input
                  name="name"
                  required
                  className="mt-2 h-12 w-full rounded-2xl border border-graphite/10 bg-white/[0.72] px-4 text-graphite outline-none transition duration-300 placeholder:text-muted/60 focus:border-electric/[0.55] focus:shadow-glow"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-muted">Email</span>
                <input
                  name="email"
                  required
                  type="email"
                  className="mt-2 h-12 w-full rounded-2xl border border-graphite/10 bg-white/[0.72] px-4 text-graphite outline-none transition duration-300 placeholder:text-muted/60 focus:border-electric/[0.55] focus:shadow-glow"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="text-sm font-medium text-muted">Message</span>
              <textarea
                name="message"
                required
                rows={6}
                className="mt-2 w-full resize-none rounded-2xl border border-graphite/10 bg-white/[0.72] px-4 py-4 text-graphite outline-none transition duration-300 placeholder:text-muted/60 focus:border-electric/[0.55] focus:shadow-glow"
                placeholder="Tell me what you have in mind."
              />
            </label>

            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted">Messages are delivered through Netlify Forms.</p>
              <button className="group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-2xl border border-graphite/10 bg-graphite px-5 py-3 text-sm font-semibold text-white shadow-premium transition duration-300 hover:border-electric/50 hover:shadow-glow">
                <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/[0.35] to-transparent transition duration-700 group-hover:translate-x-[120%]" />
                <span className="relative z-10 inline-flex items-center gap-2">
                  Send message
                  <Send size={16} aria-hidden="true" />
                </span>
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </AnimatedSection>
  );
}
