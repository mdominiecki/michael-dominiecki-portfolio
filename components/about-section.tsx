"use client";

import { motion } from "framer-motion";
import { CircleDot, Layers3, Lightbulb, TrendingUp } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";

const focusItems = [
  {
    icon: TrendingUp,
    title: "Marketing",
    copy: "Understanding audiences, positioning value, and shaping messages that make business goals easier to act on."
  },
  {
    icon: Layers3,
    title: "Product Strategy",
    copy: "Thinking through customer needs, product decisions, differentiation, and the practical path from idea to adoption."
  },
  {
    icon: Lightbulb,
    title: "Branding",
    copy: "Building clear identity systems that connect tone, visuals, trust, and long-term recognition."
  }
];

export function AboutSection() {
  return (
    <AnimatedSection id="about" className="py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About me"
          title="A business-minded marketer with a product strategist’s curiosity."
          copy="I’m focused on the space where brands, products, and customers meet. My work is grounded in professional communication, thoughtful research, and a strong interest in how technology changes the way businesses grow."
        />

        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            className="premium-border glass relative min-h-[440px] overflow-hidden rounded-3xl p-6"
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(121,184,255,0.22),transparent_34%),radial-gradient(circle_at_72%_80%,rgba(200,184,255,0.16),transparent_34%)]" />
            <div className="relative flex h-full flex-col justify-between rounded-2xl border border-white/70 bg-white/[0.55] p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted">Profile visual</span>
                <span className="h-2 w-2 rounded-full bg-teal shadow-glow" />
              </div>
              <div className="mx-auto grid h-48 w-48 place-items-center rounded-full border border-white/80 bg-white/[0.65] shadow-premium backdrop-blur-xl">
                <span className="text-5xl font-semibold text-graphite">MD</span>
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/[0.68] p-5 shadow-sm backdrop-blur-xl">
                <p className="text-sm font-semibold text-graphite">Michael Dominiecki</p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Business marketing student building toward product, brand, and growth strategy.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {focusItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  className="card-shine rounded-3xl border border-graphite/10 bg-white/70 p-6 shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-electric/[0.35] hover:shadow-lift"
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 0.65, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex gap-5">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/80 bg-white text-graphite shadow-sm">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-graphite">{item.title}</h3>
                      <p className="mt-3 leading-7 text-muted">{item.copy}</p>
                    </div>
                  </div>
                </motion.article>
              );
            })}

            <div className="rounded-3xl border border-graphite/10 bg-graphite p-6 text-white shadow-premium">
              <div className="flex flex-wrap gap-3">
                {["Technology interest", "Business development", "Customer insight"].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-sm text-white/[0.82]"
                  >
                    <CircleDot size={13} className="text-cyan" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
