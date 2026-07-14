"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CAPABILITIES = [
  "Inbound Excellence",
  "Pick & Pack Optimization",
  "Dispatch Coordination",
  "Safety Culture",
  "WMS Fluency",
  "Shift Leadership",
  "Inventory Integrity",
  "SLA Ownership",
  "Cross-functional Alignment",
  "Continuous Improvement",
];

export function CapabilitiesStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);

  return (
    <section
      ref={ref}
      className="overflow-hidden border-y border-border/60 bg-white/30 py-8 md:py-10 backdrop-blur-[2px]"
      aria-label="Core capabilities"
    >
      <motion.div style={{ x }} className="flex w-max gap-4 px-6 md:gap-6">
        {[...CAPABILITIES, ...CAPABILITIES].map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-3 rounded-full border border-border bg-card px-5 py-3 shadow-[var(--shadow-sm)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="whitespace-nowrap text-sm font-medium text-foreground md:text-base">
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
