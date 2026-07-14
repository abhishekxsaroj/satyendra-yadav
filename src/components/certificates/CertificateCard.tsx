"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import type { Certificate } from "@/types";
import { cn } from "@/utils/cn";

interface CertificateCardProps {
  certificate: Certificate;
  index: number;
  onOpen: (index: number) => void;
}

export function CertificateCard({
  certificate,
  index,
  onOpen,
}: CertificateCardProps) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(index)}
      initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -8 }}
      className={cn(
        "group relative w-full overflow-hidden rounded-2xl border border-border bg-card p-5 text-left shadow-[var(--shadow-sm)]",
        "transition-shadow duration-400 hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
      )}
      data-cursor="button"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.05] opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

      <div className="relative flex gap-4">
        <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-xl border border-border bg-hover">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={certificate.image}
            alt=""
            aria-hidden
            className="h-full w-full scale-125 object-cover blur-[6px] opacity-70 transition-transform duration-500 group-hover:scale-140"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Award size={18} className="text-primary/70" />
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
            {certificate.year}
          </p>
          <h3 className="mt-1 font-display text-base font-semibold leading-snug text-foreground sm:text-lg">
            {certificate.title}
          </h3>
          <p className="mt-1.5 text-sm text-secondary">
            {certificate.organization}
          </p>
          <p className="mt-3 text-xs font-medium text-muted transition-colors group-hover:text-primary">
            View certificate →
          </p>
        </div>
      </div>
    </motion.button>
  );
}
