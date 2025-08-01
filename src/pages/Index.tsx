import { useState, useEffect } from "react";
import { useSettings } from "@/contexts/SettingsContext";
import Navigation from "@/components/Navigation/Navigation";
import HeroSection from "@/components/Index/Hero/HeroSection";
import AboutSection from "@/components/Index/About/AboutSection";
import EducationSection from "@/components/Index/Education/EducationSection";
import SkillsSection from "@/components/Index/Skills/SkillsSection";
import Footer from "@/components/Footer/Footer";

export default function Index() {
  const { darkMode, currentColor } = useSettings();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Update favicon based on theme
    const favicon = document.getElementById('favicon') as HTMLLinkElement;
    if (favicon) {
      favicon.href = darkMode ? '/favicon_dark.png' : '/favicon_light.png';
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen w-full font-['Inter'] transition-colors duration-300 bg-white dark:bg-black">
      <Navigation />

      <main className="relative z-10">
        <HeroSection 
          darkMode={darkMode}
          currentColor={currentColor}
          windowWidth={windowWidth}
        />
        
        <AboutSection currentColor={currentColor} />
        
        <EducationSection currentColor={currentColor} />
        
        <SkillsSection currentColor={currentColor} />
      </main>

      <Footer currentColor={currentColor} />
    </div>
  );
}
