"use client";

import { useInView } from "react-intersection-observer";
import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/utils/cn";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
}

export function AnimatedCounter({
  value,
  suffix = "",
  className,
  duration = 1800,
}: AnimatedCounterProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const count = useCountUp(value, duration, true, inView);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {count}
      {suffix}
    </span>
  );
}
