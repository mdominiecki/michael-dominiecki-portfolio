import { motion } from "framer-motion";
import { Crown, FilePenLine, MessageCircle } from "lucide-react";
import type { CSSProperties } from "react";
import type { HudIconModule } from "../data";

type HeroIconProps = {
  module: HudIconModule;
  index: number;
  mouseShift: { x: number; y: number };
  active: boolean;
};

function ModuleGlyph({ type, color }: { type: HudIconModule["icon"]; color: string }) {
  if (type === "ks") {
    return (
      <div className="grid h-11 w-11 place-items-center rounded-full border border-white/70 bg-[#f7cf5f]/15 text-sm font-black text-[#9a7410] shadow-[0_0_28px_rgba(245,199,79,0.24)]">
        KS
      </div>
    );
  }

  if (type === "microsoft") {
    return (
      <div className="grid h-12 w-12 grid-cols-2 gap-1 rounded-2xl border border-white/70 bg-white/70 p-2 shadow-[0_0_30px_rgba(75,191,115,0.18)]">
        <span className="rounded bg-[#188038]" />
        <span className="rounded bg-[#d24726]" />
        <span className="rounded bg-[#2b579a]" />
        <span className="rounded bg-[#f7f7f7]" />
      </div>
    );
  }

  if (type === "editing") {
    return (
      <div className="flex h-12 w-16 items-center justify-center gap-1.5 rounded-2xl border border-white/70 bg-white/70 shadow-[0_0_30px_rgba(251,113,133,0.2)]">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#071b36] text-[11px] font-bold text-[#6ab7ff]">
          Ps
        </span>
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-cyan-300 to-violet-400 text-[11px] font-bold text-white">
          Ca
        </span>
      </div>
    );
  }

  const Icon = type === "chess" ? Crown : type === "writer" ? FilePenLine : MessageCircle;

  return (
    <div
      className="grid h-12 w-12 place-items-center rounded-2xl border border-white/70 bg-white/70 shadow-[0_0_30px_var(--module-glow)]"
      style={{ "--module-glow": `${color}44` } as CSSProperties}
    >
      <Icon size={22} style={{ color }} aria-hidden="true" />
    </div>
  );
}

export function HeroIcon({ module, index, mouseShift, active }: HeroIconProps) {
  const connectorOrigin = module.side === "left" ? "left-full" : "right-full";
  const connectorDirection = module.side === "left" ? "origin-left" : "origin-right";
  const connectorFade =
    module.side === "left"
      ? "bg-gradient-to-r from-white via-white/70 to-transparent"
      : "bg-gradient-to-l from-white via-white/70 to-transparent";

  return (
    <motion.div
      className={`absolute hidden w-[280px] xl:block ${module.positionClass}`}
      initial={false}
      animate={{
        opacity: active ? 1 : 0,
        filter: active ? "blur(0px)" : "blur(8px)",
        x: mouseShift.x * (module.side === "left" ? -0.035 : 0.035),
        y: active ? mouseShift.y * 0.035 : 12
      }}
      transition={{
        duration: 0.45,
        delay: active ? index * 0.07 : 0,
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      <div
        className={`absolute top-1/2 h-px w-20 -translate-y-1/2 ${connectorFade} ${connectorOrigin}`}
      />
      <motion.div
        className={`absolute top-1/2 h-px w-20 -translate-y-1/2 bg-white ${connectorOrigin} ${connectorDirection}`}
        animate={{
          scaleX: active ? 1 : 0,
          opacity: active ? 0.62 : 0
        }}
        transition={{ duration: 0.42, delay: active ? index * 0.08 : 0 }}
      />

      <div className="group flex items-center gap-3 rounded-[1.2rem] border border-white/70 bg-white/55 p-3 shadow-[0_24px_70px_rgba(23,24,26,0.09)] backdrop-blur-2xl">
        <ModuleGlyph type={module.icon} color={module.color} />
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-graphite">
            {module.title}
          </p>
          <p className="mt-1 text-xs leading-5 text-muted">{module.subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
}
