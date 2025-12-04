"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import EducationSection from "./components/EducationSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";

const LandingPage = () => {
  return (
    <div className="relative">
      <BackgroundBeams />
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
