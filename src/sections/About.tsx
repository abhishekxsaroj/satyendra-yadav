"use client";

import { motion } from "framer-motion";
import { ABOUT } from "@/constants/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer } from "@/animations/variants";

export function About() {
  return (
    <section id="about" className="relative section-pad py-16 md:py-20">
      <div className="container-max">
        <SectionHeading
          eyebrow="About"
          title="Operational leadership grounded in discipline and people."
          description="Building reliable fulfillment systems while developing teams that deliver under pressure."
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6 lg:col-span-7"
          >
            {ABOUT.paragraphs.map((text, i) => (
              <motion.p
                key={i}
                variants={fadeInUp}
                className={`leading-relaxed text-secondary ${
                  i === 0
                    ? "font-display text-2xl font-medium tracking-tight text-foreground sm:text-3xl"
                    : "text-base sm:text-lg"
                }`}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-3 lg:col-span-5"
          >
            {ABOUT.highlights.map((item) => (
              <motion.li
                key={item}
                variants={fadeInUp}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4 shadow-[var(--shadow-sm)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-primary transition-transform group-hover:scale-125" />
                <span className="text-sm font-medium text-foreground sm:text-base">
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
