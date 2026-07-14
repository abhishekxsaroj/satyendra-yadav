"use client";

import { useEffect, useState } from "react";

export function useCountUp(
  end: number,
  duration = 1800,
  startOnView = true,
  inView = false
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (startOnView && !inView) return;

    let startTime: number | null = null;
    let frame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [end, duration, startOnView, inView]);

  return count;
}
