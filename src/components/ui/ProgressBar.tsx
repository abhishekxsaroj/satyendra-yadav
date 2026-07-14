"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/utils/cn";

interface ProgressBarProps {
  value: number;
  label?: string;
  className?: string;
  showValue?: boolean;
}

export function ProgressBar({
  value,
  label,
  className,
  showValue = true,
}: ProgressBarProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.35 });

  return (
    <div ref={ref} className={cn("w-full", className)}>
      {(label || showValue) && (
        <div className="mb-2 flex items-center justify-between gap-4">
          {label && (
            <span className="text-sm font-medium text-foreground">{label}</span>
          )}
          {showValue && (
            <span className="text-xs font-medium text-secondary tabular-nums">
              {value}%
            </span>
          )}
        </div>
      )}
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-hover/80">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        />
      </div>
    </div>
  );
}
