"use client";

import { useState } from "react";
import type { Certificate } from "@/types";
import { CertificateCard } from "./CertificateCard";
import { CertificateModal } from "./CertificateModal";

interface CertificateGalleryProps {
  certificates: Certificate[];
}

export function CertificateGallery({ certificates }: CertificateGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
        {certificates.map((cert, index) => (
          <CertificateCard
            key={cert.id}
            certificate={cert}
            index={index}
            onOpen={setActiveIndex}
          />
        ))}
      </div>

      <CertificateModal
        certificates={certificates}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </>
  );
}
