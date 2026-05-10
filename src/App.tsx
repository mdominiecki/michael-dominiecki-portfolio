import { useState, type FormEvent, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Download,
  Mail,
  Menu,
  Send,
  Sparkles
} from "lucide-react";
import { HeroIcon } from "./components/HeroIcon";
import { ProjectCard } from "./components/ProjectCard";
import { SectionTitle } from "./components/SectionTitle";
import { SkillCard } from "./components/SkillCard";
import { TimelineItem } from "./components/TimelineItem";
import { hudModules, projects, skills, timeline } from "./data";

const ease = [0.16, 1, 0.3, 1] as const;

function TopNav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-5 py-5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#home" className="text-sm font-black uppercase tracking-[0.2em] text-graphite">
          Michael Dominiecki
        </a>
        <div className="flex items-center gap-3">
          <a
            href="/michael-dominiecki-resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/80 bg-white/60 px-5 py-2.5 text-sm font-semibold text-graphite shadow-sm backdrop-blur-2xl transition hover:bg-white"
          >
            Resume
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/80 bg-white/60 text-graphite shadow-sm backdrop-blur-2xl transition hover:bg-white"
            aria-label="Open menu"
          >
            <Menu size={19} aria-hidden="true" />
          </button>
        </div>
      </nav>
    </header>
  );
}

function PortraitFallback() {
  return (
    <div className="absolute inset-x-[18%] bottom-0 top-[9%] rounded-t-[46%] bg-[radial-gradient(circle_at_50%_18%,#f3c8ae_0_13%,transparent_14%),linear-gradient(180deg,#2a3037,#11161c)] shadow-[0_50px_120px_rgba(23,24,26,0.24)]">
      <div className="absolute left-1/2 top-[18%] h-10 w-36 -translate-x-1/2 rounded-full bg-graphite" />
      <div className="absolute bottom-8 left-1/2 h-14 w-48 -translate-x-1/2 rounded-2xl border border-white/30 bg-white/20 backdrop-blur-xl" />
    </div>
  );
}

function HeroSection() {
  const [hovered, setHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [mouseShift, setMouseShift] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 90, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 90, damping: 24 });
  const ringX = useTransform(smoothX, [-160, 160], [-12, 12]);
  const ringY = useTransform(smoothY, [-160, 160], [-10, 10]);

  function handleMouseMove(event: MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const nextShift = {
      x: event.clientX - rect.left - rect.width / 2,
      y: event.clientY - rect.top - rect.height / 2
    };

    mouseX.set(nextShift.x);
    mouseY.set(nextShift.y);
    setMouseShift(nextShift);
  }

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-5 pb-10 pt-28"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-contour opacity-80" aria-hidden="true" />
      <div className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan/15 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-40 w-[70vw] -translate-x-1/2 rounded-full bg-graphite/10 blur-3xl" />

      <motion.div
        className="absolute inset-x-0 top-[20%] z-0 select-none text-center font-serif text-[clamp(5rem,14vw,14rem)] font-semibold uppercase leading-[0.84] text-graphite/[0.06]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease }}
        aria-hidden="true"
      >
        <span className="block">Michael</span>
        <span className="block">Dominiecki</span>
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-9.5rem)] max-w-7xl flex-col items-center justify-end">
        <motion.div
          className="absolute left-0 top-[30%] hidden max-w-[230px] lg:block"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease }}
        >
          <p className="text-xs font-black uppercase tracking-[0.18em] text-muted">
            Business Marketing Student
          </p>
          <p className="mt-4 text-sm leading-7 text-ink">
            Focused on branding, strategy, creativity, and modern digital experiences.
          </p>
        </motion.div>

        <motion.div
          className="absolute right-0 top-[31%] hidden max-w-[230px] text-right lg:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.32, ease }}
        >
          <p className="text-xs font-black uppercase tracking-[0.18em] text-muted">Portfolio</p>
          <p className="mt-4 text-sm leading-7 text-ink">
            Strategy, creativity, and technology to help businesses grow and stand out.
          </p>
        </motion.div>

        <motion.div
          className="absolute bottom-28 left-0 hidden rounded-[1.2rem] border border-electric/25 bg-white/50 p-4 shadow-[0_0_50px_rgba(121,184,255,0.22)] backdrop-blur-2xl lg:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.48, ease }}
        >
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-graphite text-white">
              <BriefcaseBusiness size={18} aria-hidden="true" />
            </span>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted">
                Current Role
              </p>
              <p className="text-sm font-black uppercase text-graphite">Event Coordinator</p>
              <p className="text-xs font-semibold uppercase text-electric">KSU</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative z-20 h-[58vh] min-h-[480px] w-full max-w-[720px] outline-none sm:h-[68vh] sm:min-h-[620px]"
          initial={{ opacity: 0, y: 34, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.12, ease }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={() => setHovered(true)}
          onBlur={() => setHovered(false)}
          onClick={() => setHovered((current) => !current)}
          tabIndex={0}
          aria-label="Interactive Michael Dominiecki portrait"
        >
          <motion.div
            className="absolute left-1/2 top-[22%] z-0 h-72 w-72 -translate-x-1/2 rounded-full border border-white/60"
            style={{ x: ringX, y: ringY }}
            animate={hovered ? { opacity: 1, rotate: 360 } : { opacity: 0, rotate: 0 }}
            transition={{ opacity: { duration: 0.35 }, rotate: { duration: 28, repeat: Infinity, ease: "linear" } }}
          />
          <motion.div
            className="absolute left-1/2 top-[18%] z-0 h-96 w-96 -translate-x-1/2 rounded-full border border-dashed border-white/70"
            style={{ x: ringX, y: ringY }}
            animate={hovered ? { opacity: 0.7, rotate: -360 } : { opacity: 0, rotate: 0 }}
            transition={{ opacity: { duration: 0.35 }, rotate: { duration: 34, repeat: Infinity, ease: "linear" } }}
          />
          <motion.div
            className="absolute left-1/2 top-[16%] z-0 h-[1px] w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white to-transparent"
            animate={hovered ? { opacity: [0.12, 0.8, 0.12], y: [0, 320, 0] } : { opacity: 0 }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
          />

          {imageError ? <PortraitFallback /> : null}
          <img
            src="/images/michael-portrait.png"
            alt="Michael Dominiecki"
            className={`relative z-10 h-full w-full select-none object-contain object-bottom drop-shadow-[0_52px_110px_rgba(23,24,26,0.25)] ${imageError ? "opacity-0" : ""}`}
            draggable={false}
            onError={() => setImageError(true)}
          />
          {/* Replace /public/images/michael-portrait.png with the real cutout portrait photo. */}

          <motion.div
            className="absolute inset-0 z-20"
            variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
            animate={hovered ? "hover" : "rest"}
            transition={{ duration: 0.35 }}
          >
            {hudModules.map((module, index) => (
              <HeroIcon
                key={module.title}
                module={module}
                index={index}
                active={hovered}
                mouseShift={mouseShift}
              />
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative z-30 -mt-20 max-w-3xl text-center sm:-mt-24"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.46, ease }}
        >
          <p className="text-xs font-black uppercase tracking-[0.22em] text-muted">
            Business Marketing Student
          </p>
          <h1 className="mt-4 font-serif text-5xl font-semibold leading-[0.95] text-graphite sm:text-7xl">
            Building brands. Creating impact.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            Strategy, creativity, and technology to help businesses grow and stand out.
          </p>
          <a
            href="#about"
            className="mx-auto mt-8 grid h-12 w-12 place-items-center rounded-full border border-white/80 bg-white/55 text-graphite shadow-sm backdrop-blur-2xl transition hover:-translate-y-1 hover:bg-white"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={18} aria-hidden="true" />
          </a>
        </motion.div>

        <div className="mt-10 grid w-full gap-3 md:hidden">
          {hudModules.map((module) => (
            <div
              key={module.title}
              className="rounded-2xl border border-white/70 bg-white/55 p-4 shadow-sm backdrop-blur-2xl"
            >
              <p className="text-xs font-black uppercase tracking-[0.16em] text-graphite">
                {module.title}
              </p>
              <p className="mt-1 text-sm text-muted">{module.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section-pad">
      <SectionTitle
        eyebrow="About"
        title="Strategy-minded, creative, and business-focused."
        copy="Michael is a Business Marketing student at Kennesaw State University interested in branding, digital experiences, creativity, technology, and strategy."
      />
      <motion.div
        className="mx-auto max-w-5xl rounded-[1.6rem] border border-white/70 bg-white/55 p-8 shadow-[0_26px_80px_rgba(23,24,26,0.08)] backdrop-blur-2xl sm:p-10"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.7, ease }}
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[1.2rem] border border-white/70 bg-[radial-gradient(circle_at_25%_18%,rgba(121,184,255,0.28),transparent_32%),linear-gradient(135deg,#ffffff,#eceff1)] p-8">
            <Sparkles className="text-electric" size={28} aria-hidden="true" />
            <p className="mt-16 font-serif text-3xl font-semibold leading-tight text-graphite">
              Clean ideas, clear stories, and useful strategy.
            </p>
          </div>
          <p className="text-lg leading-9 text-muted">
            I’m building a portfolio around the intersection of marketing and modern digital
            experiences. I care about how brands feel, how messages connect, and how thoughtful
            creative work can help people understand a business faster.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="section-pad">
      <SectionTitle
        eyebrow="Skills"
        title="A practical mix of marketing, tools, and communication."
      />
      <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <SkillCard key={skill.title} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="section-pad">
      <SectionTitle eyebrow="Projects" title="Selected work and concept placeholders." />
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="section-pad">
      <SectionTitle eyebrow="Experience" title="Building experience through campus and project work." />
      <div className="relative mx-auto grid max-w-3xl gap-6 before:absolute before:left-[17px] before:top-3 before:h-[calc(100%-24px)] before:w-px before:bg-gradient-to-b before:from-electric/40 before:via-graphite/10 before:to-transparent">
        {timeline.map((item, index) => (
          <TimelineItem key={item.title} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

function ResumeSection() {
  return (
    <section id="resume" className="section-pad">
      <div className="mx-auto max-w-5xl rounded-[1.6rem] border border-white/70 bg-graphite p-8 text-white shadow-[0_30px_90px_rgba(23,24,26,0.18)] sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-white/50">Resume</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
              View the full resume.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
              Download or open Michael’s resume for education, experience, and career-focused
              details.
            </p>
          </div>
          <a
            href="/michael-dominiecki-resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-bold text-graphite transition hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(121,184,255,0.28)]"
          >
            <Download size={18} aria-hidden="true" />
            Download / View Resume
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [sent, setSent] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("form-name", "contact");

    const body = new URLSearchParams();
    formData.forEach((value, key) => {
      body.append(key, String(value));
    });

    await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString()
    });

    form.reset();
    setSent(true);
  }

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-contour opacity-50" aria-hidden="true" />
      <SectionTitle eyebrow="Contact" title="Let’s connect." copy="Send a note, view the resume, or reach out directly." />
      <div className="relative mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_0.75fr]">
        <form
          name="contact"
          onSubmit={handleSubmit}
          className="rounded-[1.6rem] border border-white/70 bg-white/55 p-6 shadow-[0_26px_80px_rgba(23,24,26,0.08)] backdrop-blur-2xl sm:p-8"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Do not fill this out: <input name="bot-field" />
            </label>
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-graphite">
              Name
              <input name="name" required className="field" placeholder="Your name" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-graphite">
              Email
              <input name="email" type="email" required className="field" placeholder="you@email.com" />
            </label>
          </div>
          <label className="mt-4 grid gap-2 text-sm font-semibold text-graphite">
            Message
            <textarea name="message" required rows={6} className="field resize-none" placeholder="Write your message..." />
          </label>
          <button
            type="submit"
            className="mt-5 inline-flex items-center gap-3 rounded-full bg-graphite px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(121,184,255,0.28)]"
          >
            <Send size={16} aria-hidden="true" />
            Send Message
          </button>
          {sent ? <p className="mt-4 text-sm font-semibold text-emerald-700">Message sent.</p> : null}
        </form>

        <div className="grid gap-4">
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com", icon: ArrowUpRight },
            { label: "Email", href: "mailto:michael.dominiecki@example.com", icon: Mail },
            { label: "Resume", href: "/michael-dominiecki-resume.pdf", icon: Download }
          ].map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") || link.href.endsWith(".pdf") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center justify-between rounded-[1.2rem] border border-white/70 bg-white/55 p-5 font-semibold text-graphite shadow-sm backdrop-blur-2xl transition hover:-translate-y-1 hover:bg-white"
              >
                {link.label}
                <Icon size={18} aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const isThankYouPage = window.location.pathname === "/thank-you";

  if (isThankYouPage) {
    return (
      <div className="grid min-h-screen place-items-center px-5 text-center">
        <div className="max-w-xl rounded-[1.6rem] border border-white/70 bg-white/60 p-8 shadow-[0_26px_80px_rgba(23,24,26,0.08)] backdrop-blur-2xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-muted">Message Sent</p>
          <h1 className="mt-4 font-serif text-5xl font-semibold text-graphite">Thank you.</h1>
          <p className="mt-5 text-base leading-8 text-muted">
            Your message was sent successfully. I’ll get back to you soon.
          </p>
          <a
            href="/"
            className="mt-7 inline-flex rounded-full bg-graphite px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-1"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden text-graphite">
      <TopNav />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ResumeSection />
      <ContactSection />
    </div>
  );
}
