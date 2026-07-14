"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  tilt?: boolean;
}

export function GlassCard({
  children,
  className,
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -6,
              transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
            }
          : undefined
      }
      className={cn(
        "glass rounded-2xl p-6 shadow-[var(--shadow-sm)] hover-glow",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
