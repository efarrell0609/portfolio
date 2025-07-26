import { useState, useEffect } from "react";
import FaultyTerminal from "@/components/FaultyTerminal";
import ProfileCard from "@/components/ProfileCard";

export default function Index() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState('#F59E0B');
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  
  const colors = ['#F59E0B', '#4318D1', '#10B981', '#EF4444', '#8B5CF6', '#06B6D4', '#F97316', '#EC4899', '#3B82F6', '#059669', '#A855F7', '#EA580C'];

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

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const setColor = (color: string) => {
    setCurrentColor(color);
    setColorPickerOpen(false);
  };

  const scrollToSection = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full font-['Inter'] transition-colors duration-300 bg-white dark:bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/90 dark:bg-black/90 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="#" className="text-xl font-bold text-gray-900 dark:text-white">
                Elijah Farrell
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#hero" className="relative text-gray-900 dark:text-white font-medium group">
                <span className="relative z-10">Home</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 dark:via-neutral-700 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
              </a>
              <a href="#work" className="relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium group transition-colors duration-300">
                <span className="relative z-10">Work</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 dark:via-neutral-700 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
              </a>
              <a href="#services" className="relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium group transition-colors duration-300">
                <span className="relative z-10">Services</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 dark:via-neutral-700 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
              </a>
              <a href="#contact" className="relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium group transition-colors duration-300">
                <span className="relative z-10">Contact</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 dark:via-neutral-700 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
              </a>
            </div>
            
            {/* Controls */}
            <div className="flex items-center gap-3">
              {/* Color Picker */}
              <div className="relative">
                                 <button 
                   onClick={() => setColorPickerOpen(!colorPickerOpen)}
                   className="p-2 rounded-lg bg-gray-100 dark:bg-neutral-700 hover:bg-gray-200 dark:hover:bg-neutral-600 transition-colors"
                >
                  <svg className="w-5 h-5" style={{ color: currentColor }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm0 2h12v11H4V4zm2 2a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm0 3a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm0 3a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z" clipRule="evenodd"></path>
                  </svg>
                </button>
                                 {colorPickerOpen && (
                   <div className="absolute right-0 top-12 bg-white dark:bg-neutral-700 rounded-lg shadow-lg border border-gray-200 dark:border-neutral-600 p-3 w-48">
                    <div className="grid grid-cols-4 gap-2">
                      {colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => setColor(color)}
                                                     className="w-8 h-8 rounded-lg border-2 border-gray-200 dark:border-neutral-500 hover:scale-110 transition-transform"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Dark Mode Toggle */}
                             <button 
                 onClick={toggleDarkMode}
                 className="p-2 rounded-lg bg-gray-100 dark:bg-neutral-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-600 transition-colors"
              >
                {!darkMode ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"></path>
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                )}
              </button>
              
              {/* Mobile Menu Toggle */}
                             <button 
                 onClick={toggleMobileMenu}
                 className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-neutral-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-600 transition-colors"
              >
                {!mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden overflow-hidden transition-all duration-300 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
              <div className="px-4 py-4 space-y-3">
                <a href="#hero" className="block text-gray-900 dark:text-white font-medium py-2 border-l-4 border-transparent hover:border-gray-300 dark:hover:border-gray-600 pl-3 transition-all duration-300">
                  Home
                </a>
                <a href="#work" className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium py-2 border-l-4 border-transparent hover:border-gray-300 dark:hover:border-gray-600 pl-3 transition-all duration-300">
                  Work
                </a>
                <a href="#services" className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium py-2 border-l-4 border-transparent hover:border-gray-300 dark:hover:border-gray-600 pl-3 transition-all duration-300">
                  Services
                </a>
                <a href="#contact" className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium py-2 border-l-4 border-transparent hover:border-gray-300 dark:hover:border-gray-600 pl-3 transition-all duration-300">
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden bg-gray-50 dark:bg-neutral-800">
          <div className="absolute inset-0 z-0">
            <FaultyTerminal
              scale={2.5}
              gridMul={[2, 1]}
              digitSize={1.2}
              timeScale={0.5}
              pause={false}
              scanlineIntensity={0.5}
              glitchAmount={1}
              flickerAmount={1}
              noiseAmp={1}
              chromaticAberration={0}
              dither={0}
              curvature={0.05}
              tint={currentColor}
              mouseReact={true}
              mouseStrength={0.5}
              pageLoadAnimation={true}
              brightness={0.6}
              isDarkMode={darkMode}
            />
          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="mb-8">
                             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-neutral-600/80 backdrop-blur-sm border border-gray-200 dark:border-neutral-500 mb-6">
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: currentColor }}
                />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Available for new opportunities
                </span>
              </div>
              
              <h1 className="text-6xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                <span>Hi, I'm </span>
                <span style={{ color: currentColor }}>
                  Elijah Farrell
                </span>
              </h1>
              
              <p className="text-xl sm:text-lg text-gray-900 dark:text-white max-w-3xl mx-auto leading-relaxed mb-8">
                Computer Science graduate passionate about building innovative
                solutions and learning emerging technologies. Ready to make
                an impact in the real world.
              </p>
            </div>
            
            <div className="flex gap-4 sm:flex-col sm:gap-3 justify-center mb-12">
              <button 
                onClick={() => scrollToSection('about')}
                className="px-8 py-4 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                style={{ backgroundColor: currentColor }}
              >
                Explore My Work
              </button>
              <button 
                                 className="px-8 py-4 border-2 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-neutral-600 transition-all duration-200"
                style={{ borderColor: currentColor }}
              >
                Get In Touch
              </button>
            </div>
            
                        <div className="flex justify-center gap-6 sm:gap-4">
              <a href="https://github.com/elijah-farrell" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-white/80 dark:bg-neutral-600/80 backdrop-blur-sm border border-gray-200 dark:border-neutral-500 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </a>
              <a href="mailto:elijah5003@gmail.com" className="p-3 rounded-lg bg-white/80 dark:bg-neutral-600/80 backdrop-blur-sm border border-gray-200 dark:border-neutral-500 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
                             <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-white/80 dark:bg-neutral-600/80 backdrop-blur-sm border border-gray-200 dark:border-neutral-500 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 sm:px-6 bg-white dark:bg-black">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                About Me
              </h2>
              <div 
                className="w-20 h-1 mx-auto rounded-full"
                style={{ backgroundColor: currentColor }}
              />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                              <div className="space-y-6">
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm passionate about working with all sorts of technology whether it's building software, managing data, solving system issues, or learning new tools. I'm excited by the variety of paths within tech and open to opportunities in software development, data, IT, and other technical roles.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  At my core, I love solving problems and figuring out how things work. I enjoy diving into complex systems, simplifying workflows, and contributing to projects that make a real impact.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Outside of tech, you'll usually find me on a hiking trail or deep into a new game. I think staying curious and engaged in different areas of life helps me stay creative and adaptable in my work too.
                </p>
              </div>
              
              <div className="flex justify-center items-center w-full">
                 <ProfileCard
                   name="Elijah Farrell"
                   title="CS Graduate"
                   handle="elijahfarrell"
                   status="Available for Opportunities"
                   contactText="Contact Me"
                  avatarUrl="/profile.jpg"
                  showUserInfo={false}
                   enableTilt={true}
                   enableMobileTilt={false}
                   themeColor={currentColor}
                   onContactClick={() => window.open('mailto:elijah5003@gmail.com', '_blank')}
                 />
               </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-4 sm:px-6 bg-gray-50 dark:bg-neutral-800">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Education
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                My academic background
              </p>
              <div 
                className="w-20 h-1 mx-auto rounded-full"
                style={{ backgroundColor: currentColor }}
              />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* SUNY Poly */}
              <div className="bg-white dark:bg-neutral-700 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-neutral-600 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <img 
                      src="/suny-poly-logo.jpg"
                      alt="SUNY Polytechnic Institute Logo"
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      SUNY Polytechnic Institute
                    </h3>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      B.S. in Computer Science
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      May 2025 · GPA: 3.88 · Magna Cum Laude
                    </p>
                  </div>
                </div>
              </div>

              {/* JCC */}
              <div className="bg-white dark:bg-neutral-700 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-neutral-600 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <img 
                      src="/jcc-logo.png"
                      alt="Jefferson Community College Logo"
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Jefferson Community College
                    </h3>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      A.S. in Computer Science
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      2023 · Phi Theta Kappa Honor Society
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Relevant Courses */}
            <div className="mt-16">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Relevant Courses
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Key coursework that has shaped my technical foundation
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Intro to Web Page Design',
                  'Principles of Programming Languages',
                  'Software Engineering',
                  'Operating Systems & Networking',
                  'Computer Organization',
                  'Systems Analysis & Design',
                  'Information & Knowledge Management',
                  'Computer Vision and Image Processing',
                  'Data Structures & Algorithms'
                ].map((course) => (
                  <div 
                    key={course}
                    className="bg-white dark:bg-neutral-700 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-neutral-600 hover:shadow-md transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: currentColor }}
                      />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {course}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 sm:px-6 bg-black dark:bg-black">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-3xl font-bold text-white mb-4">
                Skills & Expertise
              </h2>
              <div 
                className="w-20 h-1 mx-auto rounded-full"
                style={{ backgroundColor: currentColor }}
              />
            </div>
            
            {/* Skills Introduction */}
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <p className="text-lg text-gray-300 leading-relaxed">
                These are many of the technical skills that I have acquired thus far in my computer science career. I am not claiming to be a master in all of these skills, that would be amazing, but it is simply not true. With that said, I am confident that I can hold a position that utilizes any of the following competencies and increase my mastery in any of these skills if needed.
              </p>
                  </div>
            
            {/* Languages */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Languages
                  </h3>
                <p className="text-gray-300">Programming, markup, and query languages I use to build solutions</p>
                </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { 
                    name: 'Python', 
                    level: 90, 
                    icon: (
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm-1 4v6h2V6h-2zm0 8v2h2v-2h-2z"/>
                      </svg>
                    )
                  },
                  { 
                    name: 'Java', 
                    level: 85, 
                    icon: (
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 5.535-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.064-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-12.686.033-.856-.642.75-.889.75-.889s2.204.363 4.977-.032c2.774-.393 4.902-1.502 6.194-2.195 0 0 .828.566-.488 1.092M9.292 13.21s-4.362.273-1.544.713c1.189.18 3.561.123 5.77-.062 1.806-.152 3.618-.477 5.314-1.18 0 0 .637.438-.113.79-2.793 1.278-7.273 1.58-9.427.739M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.075-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-3.688 4.708 0-.001.415-.264.78-.264M14.401 0s2.494 2.494-2.365 6.33c-.896-.803-2.34-1.787-3.504-2.66C11.698 1.33 14.401 0 14.401 0M9.734 24c4.322 0 8.961-2.04 8.961-7.325 0-1.322-.304-2.672-.909-4.038C15.651 15.885 12.828 17 9.734 17c-3.094 0-5.917-1.115-8.052-3.363C1.077 14.308.734 15.658.734 17.675.734 21.96 5.412 24 9.734 24"/>
                      </svg>
                    )
                  },
                  { 
                    name: 'JavaScript', 
                    level: 80, 
                    icon: (
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.414-.511-.06-.981-.33-1.311-.69-.26-.31-.49-.69-.616-1.08l-1.875.42c-.135.39-.21.81-.24 1.23.195 1.5 1.095 2.625 2.625 3.195 1.5.54 3.195.405 4.5-.195.75-.42 1.26-1.02 1.5-1.8.24-.78.24-1.62.09-2.43M8.25 12.75c-.135.39-.21.81-.24 1.23.195 1.5 1.095 2.625 2.625 3.195 1.5.54 3.195.405 4.5-.195.75-.42 1.26-1.02 1.5-1.8.24-.78.24-1.62.09-2.43"/>
                      </svg>
                    )
                  },
                  { 
                    name: 'C++', 
                    level: 75, 
                    icon: (
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L1.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.271-.616.271-.91V6.91c.003-.587-.412-1.307-.92-1.61zM12 19.11c-3.977 0-7.2-3.225-7.2-7.2 0-3.977 3.223-7.2 7.2-7.2 3.975 0 7.2 3.223 7.2 7.2 0 3.975-3.225 7.2-7.2 7.2zM12 6.9c-2.785 0-5.04 2.257-5.04 5.04 0 2.785 2.255 5.04 5.04 5.04 2.783 0 5.04-2.255 5.04-5.04 0-2.783-2.257-5.04-5.04-5.04z"/>
                      </svg>
                    )
                  },
                  { 
                    name: 'TypeScript', 
                    level: 85, 
                    icon: (
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
                      </svg>
                    )
                  },
                  { 
                    name: 'C', 
                    level: 70, 
                    icon: (
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16.592 9.092s-.356-.059-.534-.027c-.712.12-1.398.49-2.085 1.026l-.12.078s-.356.24-.495.356c-.713.48-1.398 1.12-1.398 1.12l-.12.15-.356-.3-.356-.3-.12.15s-.685.64-1.398 1.12c-.139.116-.495.356-.495.356l-.12-.078c-.687-.536-1.373-.906-2.085-1.026-.178-.032-.534.027-.534.027C3.188 10.532 3 11.425 3 12.345c0 .92.188 1.813.534 2.253 0 0 .356.059.534.027.712-.12 1.398-.49 2.085-1.026l.12-.078s.356-.24.495-.356c.713-.48 1.398-1.12 1.398-1.12l.12-.15.356.3.356.3.12-.15s.685-.64 1.398-1.12c.139-.116.495-.356.495-.356l.12.078c.687.536 1.373.906 2.085 1.026.178.032.534-.027.534-.027.346-.44.534-1.333.534-2.253 0-.92-.188-1.813-.534-2.253z"/>
                      </svg>
                    )
                  },
                  { 
                    name: 'Lua', 
                    level: 65, 
                    icon: (
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.155 0c-.898 0-1.741.37-2.368 1.042L9.5 3.821 7.213 1.042A3.323 3.323 0 0 0 4.845 0C2.17 0 0 2.17 0 4.845c0 .898.37 1.741 1.042 2.368L3.821 9.5l-2.779 2.213A3.323 3.323 0 0 0 0 14.155C0 16.83 2.17 19 4.845 19c.898 0 1.741-.37 2.368-1.042L9.5 15.179l2.287 2.779A3.323 3.323 0 0 0 14.155 19C16.83 19 19 16.83 19 14.155c0-.898-.37-1.741-1.042-2.368L15.179 9.5l2.779-2.287A3.323 3.323 0 0 0 19 4.845C19 2.17 16.83 0 14.155 0z"/>
                      </svg>
                    )
                  },
                  { 
                    name: 'Perl', 
                    level: 60, 
                    icon: (
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21.69 18.63c-1.023 1.336-2.84 2.37-4.92 2.37-3.48 0-6.3-2.82-6.3-6.3s2.82-6.3 6.3-6.3c2.08 0 3.897 1.034 4.92 2.37L24 12l-2.31 6.63zM12 6.3c-3.48 0-6.3 2.82-6.3 6.3s2.82 6.3 6.3 6.3c2.08 0 3.897-1.034 4.92-2.37L0 12l2.31-6.63C3.333 7.334 5.15 6.3 7.23 6.3H12z"/>
                      </svg>
                    )
                  },
                  { 
                    name: 'Assembly', 
                    level: 55, 
                    icon: (
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm-1 4v6h2V6h-2zm0 8v2h2v-2h-2z"/>
                      </svg>
                    )
                  },
                  { 
                    name: 'HTML', 
                    level: 85, 
                    icon: (
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M1.136 0c-.066 0-.131.026-.18.078L.036.225C-.013.277.001.345.036.397l10.599 15.173L.036 23.743c-.035.052-.049.12 0 .172l.92.147c.049.052.114.078.18.078.066 0 .131-.026.18-.078L12.5 16.397 23.684 24.115c.049.052.114.078.18.078.066 0 .131-.026.18-.078l.92-.147c.049-.052.035-.12 0-.172L13.964 15.57 24.784.397c.035-.052.049-.12 0-.172L23.864.078C23.815.026 23.75 0 23.684 0c-.066 0-.131.026-.18.078L12.5 7.718 1.316.078C1.267.026 1.202 0 1.136 0z"/>
                      </svg>
                    )
                  },
                  { 
                    name: 'CSS', 
                    level: 80, 
                    icon: (
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7.502 0h2.578v1.078h-1.5v1.078h1.5v1.078H7.502V0zm3.093 0h2.579v.938h-1.5v.078h1.5v2.156h-2.579V0zm3.095 0h2.578v.938h-1.5v.078h1.5v2.156h-2.578V0zM5.46 4.672v14.531c0 .844.437 1.641 1.156 2.078l6.484 3.75c.719.437 1.578.437 2.297 0l6.484-3.75c.719-.437 1.156-1.234 1.156-2.078V4.672c0-.844-.437-1.641-1.156-2.078L15.397-1.156C14.678-1.593 13.819-1.593 13.1-1.156L6.616 2.594C5.897 3.031 5.46 3.828 5.46 4.672z"/>
                      </svg>
                    )
                  },
                  { 
                    name: 'SQL', 
                    level: 75, 
                    icon: (
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm-1 4v6h2V6h-2zm0 8v2h2v-2h-2z"/>
                      </svg>
                    )
                  }
                  ].map((skill) => (
                  <div key={skill.name} className="group relative bg-white dark:bg-neutral-700 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-neutral-600">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center text-white" style={{ backgroundColor: currentColor }}>
                        {skill.icon}
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{skill.name}</h4>
                      <div className="w-full bg-gray-200 dark:bg-neutral-600 rounded-full h-2 mb-2">
                        <div 
                          className="h-2 rounded-full transition-all duration-500 ease-out"
                          style={{ backgroundColor: currentColor, width: `${skill.level}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & Frameworks */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Technologies & Frameworks
                </h3>
                <p className="text-gray-300">Tools and platforms I use to build solutions</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  // Development Tools
                  { name: 'Git', color: '#F05032', category: 'Dev Tools' },
                  { name: 'APIs', color: '#FF6B6B', category: 'Dev Tools' },
                  
                  // Operating Systems
                  { name: 'Linux', color: '#FCC624', category: 'OS' },
                  { name: 'Windows', color: '#0078D4', category: 'OS' },
                  { name: 'UNIX', color: '#FF6600', category: 'OS' },
                  
                  // Virtualization
                  { name: 'Virtual Machines', color: '#6C5CE7', category: 'Virtualization' },
                  
                  // Data Science & ML
                  { name: 'MatPlotLib', color: '#11557C', category: 'Data Science' },
                  { name: 'Pandas', color: '#130654', category: 'Data Science' },
                  { name: 'PyTorch', color: '#EE4C2C', category: 'AI/ML' },
                  { name: 'Tensorflow', color: '#FF6F00', category: 'AI/ML' },
                  
                  // AI Tools
                  { name: 'Generative AI Tools', color: '#8B5CF6', category: 'AI/ML' },
                  
                  // Build Tools
                  { name: 'Vite', color: '#646CFF', category: 'Build Tools' }
                ].map((tech) => (
                  <div key={tech.name} className="group bg-white dark:bg-neutral-700 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-neutral-600 hover:scale-105">
                    <div className="text-center">
                      <div 
                        className="w-8 h-8 rounded-lg mx-auto mb-2 flex items-center justify-center text-white text-sm font-bold"
                        style={{ backgroundColor: tech.color }}
                      >
                        {tech.name.charAt(0)}
                      </div>
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
                      <div className="mt-1">
                        <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1 rounded-full bg-gray-100 dark:bg-neutral-600">
                          {tech.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Professional Skills
                </h3>
                <p className="text-gray-300">Core competencies that drive success</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  { 
                    name: 'Problem Solving', 
                    description: 'Critical thinking and analytical approach',
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                      </svg>
                    )
                  },
                  { 
                    name: 'Team Collaboration', 
                    description: 'Working effectively in diverse teams',
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                      </svg>
                    )
                  },
                  { 
                    name: 'Communication', 
                    description: 'Clear and effective communication',
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                      </svg>
                    )
                  },
                  { 
                    name: 'Adaptability', 
                    description: 'Quick learning and flexibility',
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                      </svg>
                    )
                  },
                  { 
                    name: 'Project Management', 
                    description: 'Organized and efficient delivery',
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                      </svg>
                    )
                  }
                ].map((skill) => (
                  <div key={skill.name} className="group bg-white dark:bg-neutral-700 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-neutral-600 hover:scale-105">
                    <div className="text-center">
                      <div 
                        className="w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center text-white"
                        style={{ backgroundColor: currentColor }}
                      >
                        {skill.icon}
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{skill.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section id="cta" className="py-20 px-4 sm:px-6 bg-gray-50 dark:bg-neutral-800">
          <div className="max-w-4xl mx-auto text-center">
                         <div className="bg-gradient-to-br from-white to-gray-50 dark:from-neutral-700 dark:to-neutral-800 rounded-3xl p-12 sm:p-8 relative overflow-hidden">
              <div 
                className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10"
                style={{ backgroundColor: currentColor }}
              />
              <div 
                className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-10"
                style={{ backgroundColor: currentColor }}
              />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Ready to Build Something Amazing?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss how I can contribute to your team and help bring
                  innovative ideas to life.
                </p>
                <div className="flex gap-4 sm:flex-col sm:gap-3 justify-center">
                  <button 
                    className="px-8 py-4 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                    style={{ backgroundColor: currentColor }}
                  >
                    View My Projects
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-black text-gray-900 dark:text-white py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Elijah Farrell</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Building the future, one line of code at a time.
              </p>
              
              {/* Connect Links - Moved to left side */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-4">Connect</h4>
                <div className="flex space-x-4">
                  <a href="https://github.com/elijah-farrell" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="mailto:elijah5003@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </a>
                                     <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#hero" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Home</a></li>
                <li><a href="#work" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Work</a></li>
                <li><a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Services</a></li>
                <li><a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Lorem Ipsum</h4>
              <div className="space-y-3">
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse.
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-black mt-8 pt-8 text-center text-gray-600 dark:text-gray-300">
            <p>&copy; 2025 Elijah Farrell. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
