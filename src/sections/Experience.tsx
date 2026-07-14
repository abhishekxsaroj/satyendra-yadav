"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { EXPERIENCES } from "@/constants/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden section-pad py-16 md:py-20"
    >
      <div className="container-max relative">
        <SectionHeading
          eyebrow="Experience"
          title="A career built on floor excellence and team leadership."
          description="Progressive responsibility across warehouse operations, fulfillment, and supply chain coordination."
          className="mb-8 md:mb-10"
        />

        <div className="relative max-w-3xl">
          <div className="absolute bottom-2 left-5 top-2 w-px bg-gradient-to-b from-primary via-border to-transparent" />

          <div className="space-y-5">
            {EXPERIENCES.map((exp, index) => (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative pl-14"
              >
                <div className="absolute left-[15px] top-7 z-10 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-primary/15" />

                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-border/80 bg-card/80 p-5 text-left shadow-[var(--shadow-sm)] backdrop-blur-sm hover-glow sm:p-6"
                >
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-primary">
                      <Building2 size={16} />
                    </div>
                    <div className="min-w-0 text-left">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                        {exp.period}
                      </p>
                      <p className="text-sm text-secondary">{exp.location}</p>
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-semibold text-foreground sm:text-xl">
                    {exp.role}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-secondary">
                    {exp.company}
                  </p>

                  <ul className="mt-3 space-y-1.5 text-left text-sm leading-relaxed text-secondary">
                    {exp.description.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
