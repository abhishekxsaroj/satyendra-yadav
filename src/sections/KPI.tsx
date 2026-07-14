"use client";

import { motion } from "framer-motion";
import { KPIS } from "@/constants/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { fadeInUp, staggerContainer } from "@/animations/variants";

export function KPI() {
  return (
    <section
      id="impact"
      className="relative overflow-hidden section-pad py-16 md:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08),transparent_60%)]" />

      <div className="container-max relative">
        <SectionHeading
          eyebrow="Impact"
          title="Results that matter on the floor and in the numbers."
          description="Measurable outcomes across team leadership, fulfillment reliability, and inventory integrity."
          align="center"
          className="mx-auto"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {KPIS.map((kpi) => (
            <motion.div
              key={kpi.id}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-sm)] hover-glow"
            >
              <p className="font-display text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
                <AnimatedCounter value={kpi.value} suffix={kpi.suffix} />
              </p>
              <h3 className="mt-3 text-sm font-semibold text-foreground">
                {kpi.label}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-secondary">
                {kpi.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
