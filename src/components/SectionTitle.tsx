import { motion } from "framer-motion";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  copy?: string;
};

export function SectionTitle({ eyebrow, title, copy }: SectionTitleProps) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <p className="text-xs font-black uppercase tracking-[0.22em] text-muted">{eyebrow}</p>
      <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-graphite sm:text-5xl">
        {title}
      </h2>
      {copy ? <p className="mt-5 text-base leading-8 text-muted sm:text-lg">{copy}</p> : null}
    </motion.div>
  );
}
