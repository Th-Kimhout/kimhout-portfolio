"use client";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import EducationSection from "./components/EducationSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";

const LandingPage = () => {
  return (
    <div className="relative">
      {/* Fixed, viewport-sized starfield — stays put on scroll so it
          doesn't repaint as the page moves. */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <StarsBackground starDensity={0.0001} className="opacity-70" />
        <ShootingStars starColor="#bb9af7" trailColor="#7dcfff" />
        <ShootingStars
          starColor="#7aa2f7"
          trailColor="#9ece6a"
          minDelay={2600}
          maxDelay={6000}
        />
      </div>

      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
      </div>
    </div>
  );
};

export default LandingPage;
