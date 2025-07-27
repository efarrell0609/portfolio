import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface SettingsContextType {
  // Theme settings
  darkMode: boolean;
  currentColor: string;
  setDarkMode: (darkMode: boolean) => void;
  setCurrentColor: (color: string) => void;
  
  // Animation cache
  animationCache: Set<string>;
  addToAnimationCache: (elementId: string) => void;
  isInAnimationCache: (elementId: string) => boolean;
  clearAnimationCache: () => void;
  
  // Settings persistence
  saveSettings: () => void;
  loadSettings: () => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

interface SettingsProviderProps {
  children: ReactNode;
}

export function SettingsProvider({ children }: SettingsProviderProps) {
  // Theme state
  const [darkMode, setDarkModeState] = useState(true); // Default to dark mode
  const [currentColor, setCurrentColorState] = useState('#F59E0B'); // Default to gold/yellow
  
  // Animation cache
  const [animationCache, setAnimationCache] = useState<Set<string>>(new Set());
  
  // Load settings from localStorage on mount
  useEffect(() => {
    loadSettings();
  }, []);
  
  // Save settings whenever they change
  useEffect(() => {
    saveSettings();
  }, [darkMode, currentColor, animationCache]);
  
  // Apply dark mode to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  
  const setDarkMode = (newDarkMode: boolean) => {
    setDarkModeState(newDarkMode);
  };
  
  const setCurrentColor = (newColor: string) => {
    setCurrentColorState(newColor);
  };
  
  const addToAnimationCache = (elementId: string) => {
    setAnimationCache(prev => {
      const newCache = new Set([...prev, elementId]);
      return newCache;
    });
  };
  
  const isInAnimationCache = (elementId: string) => {
    return animationCache.has(elementId);
  };

  const clearAnimationCache = () => {
    setAnimationCache(new Set());
  };
  
  // Auto-clear animation cache after 30 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationCache(new Set());
    }, 30 * 60 * 1000); // 30 minutes

    return () => clearInterval(interval);
  }, []);
  
  const saveSettings = () => {
    try {
      const settings = {
        darkMode,
        currentColor,
        animationCache: Array.from(animationCache),
        animationCacheTimestamp: Date.now()
      };
      localStorage.setItem('portfolioSettings', JSON.stringify(settings));
    } catch (error) {
      console.error('Failed to save settings:', error);
    }
  };
  
  const loadSettings = () => {
    try {
      const saved = localStorage.getItem('portfolioSettings');
      if (saved) {
        const settings = JSON.parse(saved);
        
        // Load theme settings
        if (typeof settings.darkMode === 'boolean') {
          setDarkModeState(settings.darkMode);
        }
        
        if (typeof settings.currentColor === 'string') {
          setCurrentColorState(settings.currentColor);
        }
        
        // Load animation cache (with expiration check)
        if (settings.animationCache && Array.isArray(settings.animationCache)) {
          const cacheAge = Date.now() - (settings.animationCacheTimestamp || 0);
          const cacheExpiration = 30 * 60 * 1000; // 30 minutes
          
          if (cacheAge < cacheExpiration) {
            setAnimationCache(new Set(settings.animationCache));
          } else {
            setAnimationCache(new Set());
          }
        }
      }
    } catch (error) {
      console.error('Failed to load settings:', error);
    }
  };
  
  const value: SettingsContextType = {
    darkMode,
    currentColor,
    setDarkMode,
    setCurrentColor,
    animationCache,
    addToAnimationCache,
    isInAnimationCache,
    clearAnimationCache,
    saveSettings,
    loadSettings
  };
  
  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
} 