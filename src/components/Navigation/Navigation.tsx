import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSettings } from "@/contexts/SettingsContext";

export default function Navigation() {
  const { darkMode, currentColor, setDarkMode, setCurrentColor } = useSettings();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const colors = ['#F59E0B', '#4318D1', '#10B981', '#EF4444', '#8B5CF6', '#06B6D4', '#F97316', '#EC4899', '#3B82F6', '#059669', '#A855F7', '#EA580C'];

  // Handle scroll events to hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
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

  const handleNavigation = (href: string) => {
    if (href.startsWith('/#')) {
      // If we're not on the home page, navigate to home first
      if (location.pathname !== '/') {
        navigate(href);
      } else {
        // We're already on home page, just scroll to section
        const element = document.querySelector(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // Regular navigation
      navigate(href);
    }
  };

  // Force re-render when location changes
  useEffect(() => {
    // This will trigger a re-render when location changes
  }, [location.pathname, location.hash]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/work', label: 'Work' },
    { href: '/services', label: 'Services' },
    { href: '/#contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 backdrop-blur-md bg-white/90 dark:bg-black/90 border-b border-gray-200 dark:border-gray-800 transition-transform duration-300 ${
      isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-gray-900 dark:text-white hover:scale-105 transition-transform duration-200">
              Elijah Farrell
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = (item.href === '/' && location.pathname === '/' && !location.hash) || 
                              (item.href === '/work' && location.pathname === '/work') ||
                              (item.href === '/services' && location.pathname === '/services') ||
                              (item.href === '/#contact' && location.pathname === '/' && location.hash === '#contact');
              return (
                <button 
                  key={item.href}
                  onClick={() => handleNavigation(item.href)}
                  className={`relative font-medium group transition-all duration-300 ${
                    isActive 
                      ? 'text-gray-900 dark:text-white' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
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
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 dark:via-neutral-700 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left rounded-md"></span>
                  {/* Hover underline */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-400 dark:bg-gray-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </button>
              );
            })}
          </div>
          
          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* Color Picker */}
            <div className="relative">
              <button 
                onClick={() => setColorPickerOpen(!colorPickerOpen)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-neutral-700 hover:bg-gray-200 dark:hover:bg-neutral-600 transition-all duration-200 hover:scale-105 hover:shadow-md"
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
              className="p-2 rounded-lg bg-gray-100 dark:bg-neutral-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-600 transition-all duration-200 hover:scale-105 hover:shadow-md"
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
              className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-neutral-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-600 transition-all duration-200 hover:scale-105 hover:shadow-md"
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
              {navItems.map((item) => {
                const isActive = (item.href === '/' && location.pathname === '/' && !location.hash) || 
                                (item.href === '/work' && location.pathname === '/work') ||
                                (item.href === '/services' && location.pathname === '/services') ||
                                (item.href === '/#contact' && location.pathname === '/' && location.hash === '#contact');
                return (
                  <button 
                    key={item.href}
                    onClick={() => {
                      handleNavigation(item.href);
                      setMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left font-medium py-2 pl-3 border-l-4 transition-all duration-300 rounded-r-md hover:bg-gray-50 dark:hover:bg-neutral-800 ${
                      isActive 
                        ? 'text-gray-900 dark:text-white border-l-4' 
                        : 'text-gray-600 dark:text-gray-300 border-l-4 border-transparent hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                    style={isActive ? { borderLeftColor: currentColor } : {}}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 