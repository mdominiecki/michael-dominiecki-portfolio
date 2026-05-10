import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  project: {
    title: string;
    copy: string;
    tags: string[];
  };
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      className="group overflow-hidden rounded-[1.4rem] border border-white/70 bg-white/55 shadow-[0_24px_70px_rgba(23,24,26,0.08)] backdrop-blur-2xl"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.58, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -10 }}
    >
      <div className="relative aspect-[1.35] overflow-hidden border-b border-white/70 bg-[radial-gradient(circle_at_30%_25%,rgba(121,184,255,0.28),transparent_32%),radial-gradient(circle_at_76%_68%,rgba(200,184,255,0.24),transparent_34%),linear-gradient(135deg,#ffffff,#e9edf1)]">
        <div className="absolute inset-8 rounded-[1.2rem] border border-white/80 bg-white/35 shadow-inner backdrop-blur-sm" />
        <div className="absolute left-8 top-8 h-3 w-24 rounded-full bg-graphite/15" />
        <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-3">
          <span className="h-20 rounded-2xl bg-white/60" />
          <span className="h-20 rounded-2xl bg-white/40" />
          <span className="h-20 rounded-2xl bg-white/55" />
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-graphite">{project.title}</h3>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-graphite/10 bg-white/70 transition group-hover:-translate-y-1 group-hover:translate-x-1">
            <ArrowUpRight size={18} aria-hidden="true" />
          </span>
        </div>
        <p className="mt-4 text-sm leading-7 text-muted">{project.copy}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-graphite/10 bg-white/60 px-3 py-1 text-xs font-semibold text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
