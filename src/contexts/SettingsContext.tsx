import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface SettingsContextType {
  // Theme settings
  darkMode: boolean;
  currentColor: string;
  setDarkMode: (darkMode: boolean) => void;
  setCurrentColor: (color: string) => void;
  
  // Animation cache
  isInAnimationCache: (elementId: string) => boolean;
  addToAnimationCache: (elementId: string) => void;
  clearAnimationCache: () => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

interface SettingsProviderProps {
  children: ReactNode;
}

export function SettingsProvider({ children }: SettingsProviderProps) {
  // Theme state
  const [darkMode, setDarkModeState] = useState(true);
  const [currentColor, setCurrentColorState] = useState('#EF4444');
  
  // Simple animation cache using Set
  const [animationCache, setAnimationCache] = useState<Set<string>>(new Set());
  const [cacheTimestamp, setCacheTimestamp] = useState<number>(Date.now());
  
  // Load settings from localStorage on mount
  useEffect(() => {
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
        
        // Load animation cache with timestamp check
        if (settings.animationCache && Array.isArray(settings.animationCache)) {
          const savedTimestamp = settings.cacheTimestamp || 0;
          const now = Date.now();
          const fifteenMinutes = 15 * 60 * 1000; // 15 minutes in milliseconds
          
          // If cache is older than 15 minutes, don't load it
          if (now - savedTimestamp < fifteenMinutes) {
            setAnimationCache(new Set(settings.animationCache));
            setCacheTimestamp(savedTimestamp);
          } else {
            // Cache is expired, start fresh
            setAnimationCache(new Set());
            setCacheTimestamp(now);
          }
        }
      }
    } catch (error) {
      console.error('Failed to load settings:', error);
    }
  }, []);
  
  // Apply dark mode to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  
  // Save settings whenever they change
  useEffect(() => {
    try {
      const settings = {
        darkMode,
        currentColor,
        animationCache: Array.from(animationCache),
        cacheTimestamp
      };
      localStorage.setItem('portfolioSettings', JSON.stringify(settings));
    } catch (error) {
      console.error('Failed to save settings:', error);
    }
  }, [darkMode, currentColor, animationCache, cacheTimestamp]);
  
  const setDarkMode = (newDarkMode: boolean) => {
    setDarkModeState(newDarkMode);
  };
  
  const setCurrentColor = (newColor: string) => {
    setCurrentColorState(newColor);
  };
  
  const addToAnimationCache = (elementId: string) => {
    if (!elementId) return;
    setAnimationCache(prev => new Set([...prev, elementId]));
    setCacheTimestamp(Date.now());
  };
  
  const isInAnimationCache = (elementId: string): boolean => {
    if (!elementId) return false;
    return animationCache.has(elementId);
  };
  
  const clearAnimationCache = () => {
    setAnimationCache(new Set());
    setCacheTimestamp(Date.now());
  };
  
  const value: SettingsContextType = {
    darkMode,
    currentColor,
    setDarkMode,
    setCurrentColor,
    isInAnimationCache,
    addToAnimationCache,
    clearAnimationCache
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