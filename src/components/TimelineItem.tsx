import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type TimelineItemProps = {
  item: {
    title: string;
    org: string;
    detail: string;
    icon: LucideIcon;
  };
  index: number;
};

export function TimelineItem({ item, index }: TimelineItemProps) {
  const Icon = item.icon;

  return (
    <motion.article
      className="relative pl-12"
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-110px" }}
      transition={{ duration: 0.58, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute left-0 top-1 grid h-9 w-9 place-items-center rounded-full border border-white/80 bg-white shadow-[0_0_34px_rgba(121,184,255,0.25)]">
        <Icon size={17} aria-hidden="true" />
      </div>
      <div className="rounded-[1.25rem] border border-white/70 bg-white/55 p-6 shadow-[0_20px_60px_rgba(23,24,26,0.07)] backdrop-blur-2xl">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-muted">{item.org}</p>
        <h3 className="mt-2 text-xl font-semibold text-graphite">{item.title}</h3>
        <p className="mt-3 text-sm leading-7 text-muted">{item.detail}</p>
      </div>
    </motion.article>
  );
}
