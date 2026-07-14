"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE, CONTACT } from "@/constants/data";
import { Button } from "@/components/ui/Button";
import { cn } from "@/utils/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-xl shadow-[var(--shadow-sm)]"
          : "bg-transparent"
      )}
    >
      <nav className="section-pad container-max flex h-16 items-center justify-between md:h-20">
        <a
          href="#home"
          className="group flex items-center gap-2.5"
          data-cursor="button"
        >
          <motion.span
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-sm font-bold text-white shadow-[0_8px_20px_rgba(37,99,235,0.25)]"
            whileHover={{ rotate: -6, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            {SITE.shortName.charAt(0)}
          </motion.span>
          <span className="font-display text-sm font-semibold tracking-tight text-foreground sm:text-base">
            {SITE.name.split(" ").slice(0, 2).join(" ")}
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-secondary transition-colors hover:bg-hover hover:text-foreground"
                data-cursor="button"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href={CONTACT.resumeUrl} variant="outline" size="sm" magnetic>
            Resume
          </Button>
          <Button href="#contact" size="sm" magnetic>
            Contact
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          data-cursor="button"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="section-pad flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-foreground hover:bg-hover"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="mt-2 flex gap-2 px-2 pb-2">
                <Button
                  href={CONTACT.resumeUrl}
                  variant="outline"
                  size="sm"
                  className="flex-1"
                >
                  Resume
                </Button>
                <Button
                  href="#contact"
                  size="sm"
                  className="flex-1"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
