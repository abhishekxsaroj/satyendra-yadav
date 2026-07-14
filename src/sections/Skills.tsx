"use client";

import { motion } from "framer-motion";
import {
  Warehouse,
  Package,
  Boxes,
  Users,
  UserCheck,
  Monitor,
  BarChart3,
  ShieldCheck,
  Workflow,
  Truck,
} from "lucide-react";
import { SKILLS } from "@/constants/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { fadeInUp, staggerFast } from "@/animations/variants";

const ICONS: Record<string, React.ReactNode> = {
  warehouse: <Warehouse size={16} />,
  package: <Package size={16} />,
  boxes: <Boxes size={16} />,
  users: <Users size={16} />,
  "user-check": <UserCheck size={16} />,
  monitor: <Monitor size={16} />,
  chart: <BarChart3 size={16} />,
  shield: <ShieldCheck size={16} />,
  workflow: <Workflow size={16} />,
  truck: <Truck size={16} />,
};

export function Skills() {
  return (
    <section id="skills" className="relative section-pad py-16 md:py-20">
      <div className="container-max">
        <SectionHeading
          eyebrow="Skills"
          title="Capabilities that keep complex operations moving."
          description="Warehouse execution, people leadership, systems fluency, and compliance."
          className="mb-8 md:mb-10"
        />

        <motion.div
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid gap-3 sm:grid-cols-2"
        >
          {SKILLS.map((skill) => (
            <motion.div
              key={skill.id}
              variants={fadeInUp}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25 }}
              className="group flex items-center gap-3 rounded-xl border border-border/80 bg-card/75 px-4 py-3 shadow-[var(--shadow-sm)] backdrop-blur-sm hover-glow"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                {ICONS[skill.icon]}
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-1.5 flex items-center justify-between gap-2">
                  <h3 className="truncate text-sm font-semibold text-foreground">
                    {skill.name}
                  </h3>
                  <span className="shrink-0 text-[11px] font-medium tabular-nums text-secondary">
                    {skill.level}%
                  </span>
                </div>
                <ProgressBar value={skill.level} showValue={false} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
