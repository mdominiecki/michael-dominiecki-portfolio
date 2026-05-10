import { motion } from "framer-motion";
import type { Skill } from "../data";

type SkillCardProps = {
  skill: Skill;
  index: number;
};

export function SkillCard({ skill, index }: SkillCardProps) {
  const Icon = skill.icon;

  return (
    <motion.article
      className="group relative overflow-hidden rounded-[1.35rem] border border-white/70 bg-white/55 p-6 shadow-[0_22px_60px_rgba(23,24,26,0.07)] backdrop-blur-2xl"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
    >
      <div
        className="absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-3xl transition duration-500 group-hover:opacity-100"
        style={{ background: skill.glow }}
      />
      <div className="relative z-10 grid h-12 w-12 place-items-center rounded-2xl border border-white/70 bg-white/70 text-graphite shadow-sm">
        <Icon size={22} aria-hidden="true" />
      </div>
      <h3 className="relative z-10 mt-6 text-xl font-semibold text-graphite">{skill.title}</h3>
      <p className="relative z-10 mt-3 text-sm leading-7 text-muted">{skill.copy}</p>
    </motion.article>
  );
}
