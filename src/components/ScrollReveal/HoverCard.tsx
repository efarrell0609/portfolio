import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  scale?: number;
  shadowIntensity?: number;
  duration?: number;
}

export default function HoverCard({
  children,
  className = "",
  scale = 1.05,
  shadowIntensity = 20,
  duration = 0.2,
}: HoverCardProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale,
        boxShadow: `0 ${shadowIntensity}px ${shadowIntensity * 2}px rgba(0, 0, 0, 0.1)`,
      }}
      transition={{
        duration,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
} 