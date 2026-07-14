"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { SITE } from "@/constants/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/70 bg-card/60 backdrop-blur-md">
      <div className="section-pad container-max flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <div className="flex items-center gap-3">
          <motion.span
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-sm font-bold text-white"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            {SITE.shortName.charAt(0)}
          </motion.span>
          <div>
            <p className="font-display text-sm font-semibold text-foreground">
              {SITE.name}
            </p>
            <p className="text-xs text-secondary">
              © {year} · Warehouse Operations Leadership
            </p>
          </div>
        </div>

        <a
          href="#home"
          className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-secondary transition-all hover:border-primary/30 hover:text-primary"
          data-cursor="button"
        >
          Back to top
          <ArrowUp
            size={14}
            className="transition-transform group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </footer>
  );
}
