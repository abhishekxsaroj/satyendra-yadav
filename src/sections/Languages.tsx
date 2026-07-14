"use client";

import { motion } from "framer-motion";
import { LANGUAGES } from "@/constants/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { fadeInUp, staggerContainer } from "@/animations/variants";

export function Languages() {
  return (
    <section className="section-pad pb-16 md:pb-20">
      <div className="container-max">
        <SectionHeading
          eyebrow="Languages"
          title="Communication across teams and regions."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid gap-4 sm:grid-cols-3"
        >
          {LANGUAGES.map((lang) => (
            <motion.div
              key={lang.id}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-sm)] hover-glow"
            >
              <div className="mb-4 flex items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {lang.name}
                </h3>
                <span className="text-xs font-medium text-secondary">
                  {lang.proficiency}
                </span>
              </div>
              <ProgressBar value={lang.level} showValue />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
