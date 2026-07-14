"use client";

import { CERTIFICATES } from "@/constants/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CertificateGallery } from "@/components/certificates/CertificateGallery";

export function Certificates() {
  return (
    <section
      id="certificates"
      className="relative overflow-hidden section-pad py-16 md:py-20"
    >
      <div className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

      <div className="container-max relative">
        <SectionHeading
          eyebrow="Certificates"
          title="Credentials that reinforce operational excellence."
          description="Select a certificate to open a full immersive viewer — designed for clarity and polish."
        />

        <CertificateGallery certificates={CERTIFICATES} />
      </div>
    </section>
  );
}
