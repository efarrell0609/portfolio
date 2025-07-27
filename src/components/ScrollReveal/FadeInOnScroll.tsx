import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { useSettings } from "@/contexts/SettingsContext";

interface FadeInOnScrollProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  threshold?: number;
  initialOpacity?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  elementId?: string; // Unique identifier for caching
}

export default function FadeInOnScroll({
  children,
  duration = 1000,
  delay = 0,
  threshold = 0.1,
  initialOpacity = 0,
  className = "",
  direction = "up",
  distance = 50,
  elementId,
}: FadeInOnScrollProps) {
  const ref = useRef(null);
  const { isInAnimationCache, addToAnimationCache } = useSettings();
  const isInView = useInView(ref, { amount: threshold });

  // Check if this element has already been animated
  const hasBeenAnimated = elementId ? isInAnimationCache(elementId) : false;

  // Add to cache when animation completes
  useEffect(() => {
    if (isInView && elementId && !hasBeenAnimated) {
      const timer = setTimeout(() => {
        addToAnimationCache(elementId);
      }, (duration + delay) / 1000 * 1000); // Wait for animation to complete

      return () => clearTimeout(timer);
    }
  }, [isInView, elementId, hasBeenAnimated, addToAnimationCache, duration, delay]);

  const getInitialPosition = () => {
    // If already animated, start from final position
    if (hasBeenAnimated) {
      return getAnimatePosition();
    }

    switch (direction) {
      case "up":
        return { y: distance, opacity: initialOpacity };
      case "down":
        return { y: -distance, opacity: initialOpacity };
      case "left":
        return { x: distance, opacity: initialOpacity };
      case "right":
        return { x: -distance, opacity: initialOpacity };
      default:
        return { opacity: initialOpacity };
    }
  };

  const getAnimatePosition = () => {
    switch (direction) {
      case "up":
      case "down":
        return { y: 0, opacity: 1 };
      case "left":
      case "right":
        return { x: 0, opacity: 1 };
      default:
        return { opacity: 1 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={isInView || hasBeenAnimated ? getAnimatePosition() : getInitialPosition()}
      transition={{
        duration: duration / 1000,
        delay: hasBeenAnimated ? 0 : delay / 1000, // No delay if already animated
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 