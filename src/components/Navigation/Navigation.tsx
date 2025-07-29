import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSettings } from "@/contexts/SettingsContext";

export default function Navigation() {
  const { darkMode, currentColor, setDarkMode, setCurrentColor } = useSettings();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  
  const colors = ['#F59E0B', '#4318D1', '#10B981', '#EF4444', '#8B5CF6', '#06B6D4', '#F97316', '#EC4899', '#3B82F6', '#059669', '#A855F7', '#EA580C'];

  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  // Handle scroll events to hide/show navbar and detect top position
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if at top of page
      setIsAtTop(currentScrollY < 100);
      
      // Show navbar at the top of the page
      if (currentScrollY < 100) {
        setIsNavbarVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }
      
      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && isNavbarVisible) {
        setIsNavbarVisible(false);
      } else if (currentScrollY < lastScrollY && !isNavbarVisible) {
        setIsNavbarVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isNavbarVisible]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const setColor = (color: string) => {
    setCurrentColor(color);
    setColorPickerOpen(false);
  };

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/work', label: 'Work' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' }
  ];

  // Only make navbar transparent on home page when at top
  const shouldBeTransparent = isAtTop && isHomePage;

  // Handle mouse events for FaultyTerminal when navbar is transparent
  const handleMouseMove = (e: React.MouseEvent) => {
    if (shouldBeTransparent) {
      // Pass mouse events to the FaultyTerminal
      const faultTerminal = document.querySelector('[data-faulty-terminal]');
      if (faultTerminal) {
        const rect = faultTerminal.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = 1 - (e.clientY - rect.top) / rect.height;
        // Dispatch a custom event to document that FaultyTerminal can listen to
        document.dispatchEvent(new CustomEvent('globalmousemove', {
          detail: { x, y }
        }));
      }
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        shouldBeTransparent 
          ? 'bg-transparent backdrop-blur-none' 
          : 'bg-white dark:bg-black'
      }`}
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`text-xl font-bold hover:scale-105 transition-transform duration-200 ${
                shouldBeTransparent ? 'text-white' : 'text-gray-900 dark:text-white'
              }`}
            >
              Elijah Farrell
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = (item.href === '/' && location.pathname === '/') || 
                              (item.href === '/work' && location.pathname === '/work') ||
                              (item.href === '/services' && location.pathname === '/services') ||
                              (item.href === '/contact' && location.pathname === '/contact');
              
              return (
                <Link 
                  key={item.href}
                  to={item.href}
                  className={`relative font-medium group transition-all duration-300 ${
                    isActive 
                      ? (shouldBeTransparent ? 'text-white' : 'text-gray-900 dark:text-white')
                      : (shouldBeTransparent ? 'text-gray-200 hover:text-white' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white')
                  }`}
                >
                  <span className="relative z-10 px-2 py-1 rounded-md transition-all duration-300">
                    {item.label}
                  </span>
                  {/* Active indicator */}
                  {isActive && (
                    <span 
                      className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full transition-all duration-300"
                      style={{ backgroundColor: currentColor }}
                    />
                  )}
                  {/* Hover effect */}
                  <span className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left rounded-md ${
                    shouldBeTransparent ? 'bg-white/20' : 'bg-gradient-to-r from-transparent via-gray-200 dark:via-neutral-700 to-transparent'
                  }`}></span>
                  {/* Hover underline */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-400 dark:bg-gray-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </Link>
              );
            })}
          </div>
          
          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* Color Picker */}
            <div className="relative">
              <button 
                onClick={() => setColorPickerOpen(!colorPickerOpen)}
                className={`p-2 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-md ${
                  shouldBeTransparent 
                    ? 'bg-white/20 text-white hover:bg-white/30' 
                    : 'bg-gray-100 dark:bg-neutral-700 hover:bg-gray-200 dark:hover:bg-neutral-600'
                }`}
              >
                <svg className="w-5 h-5" style={{ color: currentColor }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm0 2h12v11H4V4zm2 2a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm0 3a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm0 3a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z" clipRule="evenodd"></path>
                </svg>
              </button>
              {colorPickerOpen && (
                <div className="absolute right-0 top-12 bg-white dark:bg-neutral-700 rounded-lg shadow-lg border border-gray-200 dark:border-neutral-600 p-3 w-48 animate-in slide-in-from-top-2 duration-200">
                  <div className="grid grid-cols-4 gap-2">
                    {colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setColor(color)}
                        className="w-8 h-8 rounded-lg border-2 border-gray-200 dark:border-neutral-500 hover:scale-110 transition-all duration-200 hover:shadow-md"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Dark Mode Toggle */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-md ${
                shouldBeTransparent 
                  ? 'bg-white/20 text-white hover:bg-white/30' 
                  : 'bg-gray-100 dark:bg-neutral-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-600'
              }`}
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
              className={`lg:hidden p-2 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-md ${
                shouldBeTransparent 
                  ? 'bg-white/20 text-white hover:bg-white/30' 
                  : 'bg-gray-100 dark:bg-neutral-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-600'
              }`}
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
          <div className={`lg:hidden overflow-hidden transition-all duration-300 border-t ${
            shouldBeTransparent 
              ? 'bg-black/80 backdrop-blur-md border-white/20' 
              : 'bg-white dark:bg-black border-gray-200 dark:border-gray-800'
          }`}>
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => {
                const isActive = (item.href === '/' && location.pathname === '/') || 
                                (item.href === '/work' && location.pathname === '/work') ||
                                (item.href === '/services' && location.pathname === '/services') ||
                                (item.href === '/contact' && location.pathname === '/contact');
                
                return (
                  <Link 
                    key={item.href}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block w-full text-left font-medium py-2 pl-3 border-l-4 transition-all duration-300 rounded-r-md hover:bg-gray-50 dark:hover:bg-neutral-800 ${
                      isActive 
                        ? (shouldBeTransparent ? 'text-white border-white' : 'text-gray-900 dark:text-white border-l-4') 
                        : (shouldBeTransparent ? 'text-gray-200 border-transparent hover:border-white/50' : 'text-gray-600 dark:text-gray-300 border-l-4 border-transparent hover:border-gray-300 dark:hover:border-gray-600')
                    }`}
                    style={isActive ? { borderLeftColor: currentColor } : {}}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 