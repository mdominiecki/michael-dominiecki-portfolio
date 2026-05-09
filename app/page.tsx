import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { CursorGlow } from "@/components/cursor-glow";
import { ExperienceSection } from "@/components/experience-section";
import { HeroSection } from "@/components/hero-section";
import { Navigation } from "@/components/navigation";
import { ProjectsSection } from "@/components/projects-section";
import { ResumeSection } from "@/components/resume-section";
import { ScrollProgress } from "@/components/scroll-progress";
import { SkillsSection } from "@/components/skills-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <CursorGlow />
      <ScrollProgress />
      <div className="noise" aria-hidden="true" />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
    </main>
  );
}
