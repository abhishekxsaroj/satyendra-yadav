"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { SITE, CONTACT } from "@/constants/data";
import { Button } from "@/components/ui/Button";
import { heroStagger, fadeInUp } from "@/animations/variants";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[80svh] overflow-hidden gradient-mesh lg:min-h-[100svh]"
    >
      {/* Floating blobs */}
      <motion.div
        className="blob h-[420px] w-[420px] bg-accent/30 left-[-8%] top-[10%]"
        animate={{ x: [0, 30, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="blob h-[380px] w-[380px] bg-primary/20 right-[-6%] top-[20%]"
        animate={{ x: [0, -25, 0], y: [0, 30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="blob h-[280px] w-[280px] bg-slate-300/40 bottom-[5%] left-[35%]"
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle logistics grid / routes */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.35]"
        aria-hidden
      >
        <defs>
          <pattern
            id="grid"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <motion.path
          d="M -40 180 C 200 120, 360 280, 620 200 S 980 140, 1280 220"
          fill="none"
          stroke="#2563EB"
          strokeWidth="1"
          strokeDasharray="6 10"
          opacity="0.25"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, delay: 0.8, ease: "easeInOut" }}
        />
        <motion.path
          d="M -20 420 C 180 360, 400 480, 680 400 S 1020 340, 1400 430"
          fill="none"
          stroke="#38BDF8"
          strokeWidth="1"
          strokeDasharray="4 8"
          opacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.8, delay: 1, ease: "easeInOut" }}
        />
      </svg>

      <div className="section-pad container-max relative z-10 flex min-h-[80svh] flex-col justify-between pt-20 pb-6 lg:min-h-[100svh] lg:justify-center lg:pb-24 lg:pt-28">
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="relative z-20 flex flex-1 flex-col max-w-4xl lg:max-w-[56%] lg:flex-none"
        >
          {/* Mobile profile — centered & larger */}
          <motion.div
            variants={fadeInUp}
            className="mb-5 flex justify-center lg:mb-0 lg:hidden"
          >
            <div className="relative h-64 w-64 overflow-hidden rounded-2xl border border-border/80 bg-white/50 shadow-[var(--shadow-md)] sm:h-72 sm:w-72">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/profile1.svg"
                alt={SITE.name}
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white/40 to-transparent" />
            </div>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="mb-2.5 text-sm font-semibold uppercase tracking-[0.22em] text-primary sm:mb-5"
          >
            {SITE.subtitle}
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="font-display text-[clamp(2.15rem,7.5vw,3.6rem)] font-semibold leading-[1.12] tracking-tight text-foreground"
          >
            {SITE.name}
          </motion.h1>

          <motion.div variants={fadeInUp} className="mt-3 space-y-1 sm:mt-5">
            <p className="text-lg font-medium text-foreground/90 sm:text-xl">
              {SITE.role}
            </p>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="mt-4 max-w-2xl text-base leading-relaxed text-secondary sm:mt-6 sm:text-lg"
          >
            {SITE.tagline}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-6 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4"
          >
            <Button href={CONTACT.resumeUrl} size="lg" magnetic>
              <Download size={18} />
              Download Resume
            </Button>
            <Button href="#contact" variant="secondary" size="lg" magnetic>
              <Mail size={18} />
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        {/* Profile portrait — desktop */}
        <motion.div
          initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute right-0 top-1/2 hidden w-[36%] max-w-md -translate-y-1/2 lg:block"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-l-3xl border border-border/80 border-r-0 bg-white/40 shadow-[var(--shadow-lg)] backdrop-blur-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/profile.svg"
              alt={SITE.name}
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white/40 to-transparent" />
          </div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-6 flex flex-col items-center gap-2 self-center text-secondary lg:absolute lg:bottom-8 lg:left-1/2 lg:mt-0 lg:-translate-x-1/2"
          data-cursor="button"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.2em]">
            Scroll
          </span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
