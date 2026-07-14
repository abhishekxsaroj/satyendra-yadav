"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE } from "@/constants/data";

export function PageLoader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let frame: number;
    let start: number | null = null;
    const duration = 1600;

    const tick = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.floor(eased * 100));
      if (p < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setDone(true);
          onComplete?.();
        }, 280);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 text-center"
          >
            <p className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {SITE.shortName}
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-secondary">
              Operations Portfolio
            </p>
          </motion.div>

          <div className="w-48 sm:w-64">
            <div className="mb-2 flex justify-between text-[11px] font-medium uppercase tracking-widest text-secondary">
              <span>Loading</span>
              <span className="tabular-nums">{progress}%</span>
            </div>
            <div className="h-[2px] w-full overflow-hidden rounded-full bg-border">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
