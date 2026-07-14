"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Download,
  ArrowUpRight,
  BadgeCheck,
  Globe2,
} from "lucide-react";
import { CONTACT, CONTACT_ITEMS, SITE } from "@/constants/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/animations/variants";

const ICONS = {
  phone: Phone,
  mail: Mail,
  map: MapPin,
  visa: BadgeCheck,
  nationality: Globe2,
} as const;

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden section-pad py-16 md:py-20"
    >
      <div className="pointer-events-none absolute inset-0 gradient-mesh opacity-70" />

      <div className="container-max relative">
        <SectionHeading
          eyebrow="Contact"
          title="Let's discuss how I can strengthen your operations."
          description="Open to Team Leader and Operations roles across logistics, warehouse, and fulfillment in the UAE."
        />

        <div className="grid gap-6 lg:grid-cols-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid gap-4 sm:grid-cols-2 lg:col-span-7"
          >
            {CONTACT_ITEMS.map((item) => {
              const Icon = ICONS[item.icon];
              const content = (
                <>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon size={18} />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">
                    {item.label}
                  </p>
                  <p className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-foreground sm:text-base">
                    {item.value}
                    {item.href && (
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    )}
                  </p>
                </>
              );

              return (
                <motion.div key={item.label} variants={fadeInUp}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="group block h-full rounded-2xl border border-border bg-card/80 p-5 shadow-[var(--shadow-sm)] backdrop-blur hover-glow"
                      data-cursor="button"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="group h-full rounded-2xl border border-border bg-card/80 p-5 shadow-[var(--shadow-sm)] backdrop-blur">
                      {content}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="glass flex flex-col justify-between rounded-3xl p-7 shadow-[var(--shadow-md)] lg:col-span-5"
          >
            <div>
              <p className="font-display text-2xl font-semibold tracking-tight text-foreground">
                Ready to collaborate
              </p>
              <p className="mt-3 text-sm leading-relaxed text-secondary">
                Download the resume for a full overview of experience, or reach
                out directly to discuss Team Leader opportunities in warehouse,
                logistics, and fulfillment operations.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <Button href={CONTACT.resumeUrl} size="lg" magnetic className="w-full">
                <Download size={18} />
                Download Resume
              </Button>
              <Button
                href={`mailto:${CONTACT.email}`}
                variant="secondary"
                size="lg"
                magnetic
                className="w-full"
              >
                <Mail size={18} />
                Email {SITE.name.split(" ")[0]}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
