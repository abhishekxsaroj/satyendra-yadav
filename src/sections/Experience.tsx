"use client";

import { motion } from "framer-motion";
import { MapPin, CalendarDays, Award, CheckCircle2 } from "lucide-react";
import { EXPERIENCES } from "@/constants/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Experience as ExperienceType } from "@/types";

function CompanyLogo({
  experience,
}: {
  experience: ExperienceType;
}) {
  if (experience.logo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={experience.logo}
        alt={`${experience.company} logo`}
        className="h-full w-full rounded-full object-cover"
      />
    );
  }

  return (
    <span className="text-[11px] font-bold tracking-wide text-primary sm:text-xs">
      {experience.logoInitials ?? experience.company.slice(0, 2).toUpperCase()}
    </span>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden section-pad py-16 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(37,99,235,0.04),transparent_55%)]" />

      <div className="container-max relative">
        <SectionHeading
          eyebrow="Experience"
          title="A career built on operational milestones."
          description="Executive timeline of leadership and operations roles across logistics, fulfillment, and customer excellence."
          className="mb-10 md:mb-14"
        />

        <div className="relative mx-auto max-w-4xl">
          {/* Vertical timeline line */}
          <div className="absolute bottom-4 left-6 top-4 w-px bg-gradient-to-b from-primary via-border to-transparent md:left-[2.75rem]" />

          <div className="space-y-8 md:space-y-10">
            {EXPERIENCES.map((exp, index) => (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, y: 36, x: -12, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative pl-16 md:pl-24"
              >
                {/* Timeline node */}
                <div className="absolute left-3.5 top-8 z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-card shadow-[0_0_0_6px_rgba(37,99,235,0.1)] md:left-[1.85rem] md:h-7 md:w-7">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </div>

                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className={`group relative overflow-hidden rounded-3xl border bg-card/90 p-6 shadow-[var(--shadow-sm)] backdrop-blur-sm transition-shadow duration-400 hover:shadow-[0_18px_50px_rgba(37,99,235,0.1)] sm:p-8 ${
                    exp.current
                      ? "border-primary/25 ring-1 ring-primary/10"
                      : "border-border/80"
                  }`}
                >
                  {/* Accent line */}
                  <div
                    className={`absolute inset-y-0 left-0 w-[3px] ${
                      exp.current
                        ? "bg-gradient-to-b from-primary to-accent"
                        : "bg-border group-hover:bg-primary/40"
                    }`}
                  />

                  {/* Header */}
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border bg-primary-soft/60 shadow-[var(--shadow-sm)]">
                        <CompanyLogo experience={exp} />
                      </div>

                      <div className="min-w-0">
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          {exp.current && (
                            <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
                              Current Position
                            </span>
                          )}
                          <span className="inline-flex items-center rounded-full border border-border bg-background px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-secondary">
                            {exp.period.split("—")[0]?.trim() ?? exp.period}
                          </span>
                        </div>

                        <h3 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                          {exp.role}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-primary sm:text-base">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 text-sm text-secondary sm:items-end sm:text-right">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={14} className="text-primary/70" />
                        {exp.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays size={14} className="text-primary/70" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <div className="my-5 h-px bg-gradient-to-r from-border via-border/60 to-transparent" />

                  {/* Summary */}
                  <div>
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                      Professional Summary
                    </p>
                    <p className="text-sm leading-relaxed text-secondary sm:text-[15px]">
                      {exp.summary}
                    </p>
                  </div>

                  {/* Responsibilities */}
                  <div className="mt-6">
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                      Key Responsibilities
                    </p>
                    <ul className="grid gap-2.5 sm:grid-cols-1">
                      {exp.responsibilities.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2.5 text-sm leading-relaxed text-secondary"
                        >
                          <CheckCircle2
                            size={15}
                            className="mt-0.5 shrink-0 text-accent"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievement */}
                  {exp.achievement && (
                    <div className="mt-6 rounded-2xl border border-primary/15 bg-primary-soft/40 p-4 sm:p-5">
                      <div className="mb-2 flex items-center gap-2">
                        <Award size={16} className="text-primary" />
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                          Key Achievement
                        </p>
                      </div>
                      <p className="text-sm leading-relaxed text-foreground/85">
                        {exp.achievement}
                      </p>
                    </div>
                  )}
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
