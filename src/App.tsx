import "./global.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { SettingsProvider } from "./contexts/SettingsContext";
import { useEffect, useRef } from "react";
import Index from "./pages/Index";
import Work from "./pages/Work";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Scroll restoration component that works with GitHub Pages
const ScrollRestoration = () => {
  const { pathname } = useLocation();
  const restoredRef = useRef(false);
  const previousPathRef = useRef(pathname);

  useEffect(() => {
    // Reset restored flag on pathname change
    restoredRef.current = false;
    
    // Check if this is a navigation (different path) or refresh (same path)
    const isNavigation = previousPathRef.current !== pathname;
    previousPathRef.current = pathname;
    
    // Wait for page to fully load before restoring scroll
    const restoreScroll = () => {
      if (restoredRef.current) return; // Only restore once
      
      const savedScroll = sessionStorage.getItem(`scroll-${pathname}`);
      
      if (savedScroll && !isNavigation) {
        // Only restore scroll on refresh, not navigation
        const scrollY = parseInt(savedScroll);
        if (scrollY > 0) {
          window.scrollTo(0, scrollY);
          restoredRef.current = true;
        }
      } else if (isNavigation) {
        // Scroll to top on navigation
        window.scrollTo(0, 0);
        restoredRef.current = true;
      }
    };

    // Try multiple times to ensure it works
    restoreScroll();
    const timer1 = setTimeout(restoreScroll, 100);
    const timer2 = setTimeout(restoreScroll, 500);
    const timer3 = setTimeout(restoreScroll, 1000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [pathname]);

  useEffect(() => {
    // Save scroll position on scroll (debounced)
    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const scrollY = window.scrollY;
        if (scrollY > 0) {
          sessionStorage.setItem(`scroll-${pathname}`, scrollY.toString());
        }
      }, 150);
    };

    // Save scroll position before page unload
    const handleBeforeUnload = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        sessionStorage.setItem(`scroll-${pathname}`, scrollY.toString());
      }
    };

    // Save scroll position on page visibility change (mobile browsers)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        const scrollY = window.scrollY;
        if (scrollY > 0) {
          sessionStorage.setItem(`scroll-${pathname}`, scrollY.toString());
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearTimeout(timeoutId);
    };
  }, [pathname]);

  return null;
};

const App = () => (
  <SettingsProvider>
    <BrowserRouter>
      <ScrollRestoration />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/work" element={<Work />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </SettingsProvider>
);

createRoot(document.getElementById("root")!).render(<App />);