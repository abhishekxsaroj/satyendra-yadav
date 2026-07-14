"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { EDUCATION } from "@/constants/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section id="education" className="section-pad py-16 md:py-20">
      <div className="container-max">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation behind the leadership."
          description="Formal education from MGKV University and the Allahabad UP Board."
        />

        <div className="relative max-w-3xl">
          <div className="absolute bottom-2 left-5 top-2 w-px bg-border" />

          <div className="space-y-6">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -24, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative pl-14"
              >
                <div className="absolute left-0 top-5 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-primary shadow-[var(--shadow-sm)]">
                  <GraduationCap size={18} />
                </div>

                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-sm)] hover-glow sm:p-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    {edu.period}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold text-foreground sm:text-xl">
                    {edu.degree}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-secondary">
                    {edu.institution} · {edu.location}
                  </p>
                  {edu.description && (
                    <p className="mt-3 text-sm leading-relaxed text-secondary">
                      {edu.description}
                    </p>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
