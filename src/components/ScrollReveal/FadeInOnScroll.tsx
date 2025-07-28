import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
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
  elementId?: string;
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
  const [hasAnimated, setHasAnimated] = useState(false);

  // Check if this element has already been animated
  const isCached = elementId ? isInAnimationCache(elementId) : false;

  // Add to cache when element comes into view
  useEffect(() => {
    if (isInView && elementId && !isCached && !hasAnimated) {
      setHasAnimated(true);
      // Add to cache immediately when element comes into view
      addToAnimationCache(elementId);
    }
  }, [isInView, elementId, isCached, hasAnimated, addToAnimationCache]);

  const getInitialPosition = () => {
    // If already cached, start from final position
    if (isCached) {
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
      animate={isInView || isCached ? getAnimatePosition() : getInitialPosition()}
      transition={{
        duration: duration / 1000,
        delay: isCached ? 0 : delay / 1000,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 