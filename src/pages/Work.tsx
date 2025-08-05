import { useState, useEffect } from "react";
import { useSettings } from "@/contexts/SettingsContext";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/Work/HeroSection";
import WorkExperience from "@/components/Work/WorkExperience";

export default function Work() {
  const { darkMode, currentColor } = useSettings();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen w-full font-['Inter'] transition-colors duration-300">
      <Navigation />
      <main>
        <HeroSection 
          title="My Work"
          subtitle="Professional experience and featured projects"
          highlightWord="Work"
          scrollToId="work"
        />
        
        <WorkExperience />
      </main>
      <Footer currentColor={currentColor} />
    </div>
  );
} 