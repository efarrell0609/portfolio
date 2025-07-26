import { useState, useEffect } from "react";
import FaultyTerminal from "@/components/FaultyTerminal";

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
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">
                Home
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">
                Services
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">
                Work
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">
                Contact
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
                <a href="#" className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium py-2">
                  Home
                </a>
                <a href="#" className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium py-2">
                  Services
                </a>
                <a href="#" className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium py-2">
                  Work
                </a>
                <a href="#" className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium py-2">
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
              <a href="/resume.pdf" download className="p-3 rounded-lg bg-white/80 dark:bg-neutral-600/80 backdrop-blur-sm border border-gray-200 dark:border-neutral-500 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
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
              
                             <div className="relative">
                 <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-neutral-800 dark:to-neutral-900 rounded-2xl p-8 relative overflow-hidden">
                  <div 
                    className="absolute top-4 right-4 w-20 h-20 rounded-full opacity-20"
                    style={{ backgroundColor: currentColor }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
                        style={{ backgroundColor: currentColor }}
                      >
                        EF
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          Elijah Farrell
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          CS Graduate
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300">GPA</span>
                        <span className="font-semibold text-gray-900 dark:text-white">3.88</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300">Graduation</span>
                        <span className="font-semibold text-gray-900 dark:text-white">May 2025</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300">Location</span>
                        <span className="font-semibold text-gray-900 dark:text-white">New York</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 sm:px-6 bg-gray-50 dark:bg-neutral-800">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Skills
              </h2>
              <div 
                className="w-20 h-1 mx-auto rounded-full"
                style={{ backgroundColor: currentColor }}
              />
            </div>
            
            {/* Technical Skills */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* Programming Languages */}
              <div className="bg-white dark:bg-neutral-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-white"
                    style={{ backgroundColor: currentColor }}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Programming Languages
                  </h3>
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'Python', level: '90%' },
                    { name: 'Java', level: '85%' },
                    { name: 'JavaScript', level: '80%' },
                    { name: 'C++', level: '75%' }
                  ].map((skill) => (
                    <div key={skill.name} className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-300">{skill.name}</span>
                                             <div className="flex-1 mx-3 bg-gray-200 dark:bg-neutral-600 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full"
                          style={{ backgroundColor: currentColor, width: skill.level }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & Frameworks */}
              <div className="bg-white dark:bg-neutral-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-white"
                    style={{ backgroundColor: currentColor }}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Technologies & Frameworks
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'Git', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'Express.js'].map((tech) => (
                                         <span key={tech} className="px-3 py-2 bg-gray-100 dark:bg-neutral-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-white dark:bg-neutral-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-white"
                  style={{ backgroundColor: currentColor }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Soft Skills
                </h3>
              </div>
              <div className="flex flex-wrap gap-6 justify-center">
                {[
                  { name: 'Problem Solving & Critical Thinking', icon: '🧠' },
                  { name: 'Team Collaboration', icon: '🤝' },
                  { name: 'Communication', icon: '💬' },
                  { name: 'Adaptability & Learning', icon: '🔄' },
                  { name: 'Project Management', icon: '📋' }
                ].map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center gap-3 p-4 rounded-lg bg-gray-50 dark:bg-neutral-600 hover:bg-gray-100 dark:hover:bg-neutral-500 transition-colors">
                    <div className="text-3xl">{skill.icon}</div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm font-medium text-center max-w-32">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section id="cta" className="py-20 px-4 sm:px-6 bg-white dark:bg-black">
          <div className="max-w-4xl mx-auto text-center">
                         <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-neutral-800 dark:to-neutral-900 rounded-3xl p-12 sm:p-8 relative overflow-hidden">
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
      <footer className="bg-gray-50 dark:bg-neutral-800 text-gray-900 dark:text-white py-12 px-4 sm:px-6">
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
                  <a href="/resume.pdf" download className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
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
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a></li>
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
