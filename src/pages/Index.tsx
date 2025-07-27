import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation/Navigation";
import HeroSection from "@/components/Hero/HeroSection";
import AboutSection from "@/components/About/AboutSection";
import EducationSection from "@/components/Education/EducationSection";
import SkillsSection from "@/components/Skills/SkillsSection";
import ContactSection from "@/components/Contact/ContactSection";
import Footer from "@/components/Footer/Footer";

export default function Index() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentColor, setCurrentColor] = useState('#F59E0B');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Set initial dark mode based on system preference
    setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, []);

  useEffect(() => {
    // Apply dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Update favicon based on theme
    const favicon = document.getElementById('favicon') as HTMLLinkElement;
    if (favicon) {
      favicon.href = darkMode ? '/favicon_dark.png' : '/favicon_light.png';
    }
  }, [darkMode]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full font-['Inter'] transition-colors duration-300 bg-white dark:bg-black">
      <Navigation 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />

      <main className="pt-16">
        <HeroSection 
          darkMode={darkMode}
          currentColor={currentColor}
          windowWidth={windowWidth}
          scrollToSection={scrollToSection}
        />
        
        <AboutSection currentColor={currentColor} />
        
        <EducationSection currentColor={currentColor} />
        
        <SkillsSection currentColor={currentColor} />
        
        <ContactSection currentColor={currentColor} />
      </main>

      <Footer currentColor={currentColor} />
    </div>
  );
}
