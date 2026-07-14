"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useIsTouch, usePrefersReducedMotion } from "@/hooks/useMediaQuery";

export function CustomCursor() {
  const isTouch = useIsTouch();
  const reduced = usePrefersReducedMotion();
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 35, mass: 0.4 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 35, mass: 0.4 });
  const ringX = useSpring(cursorX, { stiffness: 180, damping: 28, mass: 0.5 });
  const ringY = useSpring(cursorY, { stiffness: 180, damping: 28, mass: 0.5 });

  useEffect(() => {
    if (isTouch || reduced) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setVisible(true);
    };

    const down = () => setPressed(true);
    const up = () => setPressed(false);

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        "a, button, [data-cursor='button'], [data-cursor='hover'], input, textarea"
      );
      setHovering(!!interactive);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    window.addEventListener("mouseover", over);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("mouseover", over);
    };
  }, [cursorX, cursorY, isTouch, reduced]);

  if (isTouch || reduced) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[90] mix-blend-multiply"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: pressed ? 0.7 : hovering ? 0.5 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      >
        <div className="h-2 w-2 rounded-full bg-primary" />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[89]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: pressed ? 0.85 : hovering ? 2.2 : 1,
          opacity: visible ? (hovering ? 0.35 : 0.55) : 0,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
      >
        <div
          className={`rounded-full border transition-colors duration-300 ${
            hovering
              ? "h-10 w-10 border-primary bg-primary/10"
              : "h-8 w-8 border-primary/40 bg-transparent"
          }`}
        />
      </motion.div>
    </>
  );
}
