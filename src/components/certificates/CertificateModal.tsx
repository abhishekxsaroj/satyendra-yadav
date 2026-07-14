"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import type { Certificate } from "@/types";

interface CertificateModalProps {
  certificates: Certificate[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function CertificateModal({
  certificates,
  index,
  onClose,
  onNavigate,
}: CertificateModalProps) {
  const open = index !== null;
  const current = index !== null ? certificates[index] : null;
  const [zoom, setZoom] = useState(1);

  const goPrev = useCallback(() => {
    if (index === null) return;
    onNavigate((index - 1 + certificates.length) % certificates.length);
    setZoom(1);
  }, [index, certificates.length, onNavigate]);

  const goNext = useCallback(() => {
    if (index === null) return;
    onNavigate((index + 1) % certificates.length);
    setZoom(1);
  }, [index, certificates.length, onNavigate]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, goPrev, goNext]);

  useEffect(() => {
    setZoom(1);
  }, [index]);

  return (
    <AnimatePresence>
      {open && current && (
        <motion.div
          className="fixed inset-0 z-[95] flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            type="button"
            aria-label="Close certificate viewer"
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={current.title}
            className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-white/60 bg-card shadow-[0_40px_100px_rgba(15,23,42,0.25)]"
            initial={{ opacity: 0, scale: 0.92, y: 24, filter: "blur(12px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.96, y: 12, filter: "blur(8px)" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                  {current.organization} · {current.year}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold text-foreground sm:text-xl">
                  {current.title}
                </h3>
              </div>
              <div className="flex shrink-0 items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setZoom((z) => Math.max(1, z - 0.25))}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-secondary hover:bg-hover hover:text-foreground"
                  aria-label="Zoom out"
                  data-cursor="button"
                >
                  <ZoomOut size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => setZoom((z) => Math.min(2.5, z + 0.25))}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-secondary hover:bg-hover hover:text-foreground"
                  aria-label="Zoom in"
                  data-cursor="button"
                >
                  <ZoomIn size={16} />
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-secondary hover:bg-hover hover:text-foreground"
                  aria-label="Close"
                  data-cursor="button"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-auto bg-[#f8fafc] p-4 sm:p-8">
              {certificates.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={goPrev}
                    className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-md backdrop-blur hover:bg-white sm:left-5"
                    aria-label="Previous certificate"
                    data-cursor="button"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-md backdrop-blur hover:bg-white sm:right-5"
                    aria-label="Next certificate"
                    data-cursor="button"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: zoom }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="origin-center"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={current.image}
                    alt={current.title}
                    className="max-h-[58vh] w-auto max-w-full rounded-xl border border-border shadow-[var(--shadow-lg)]"
                    draggable={false}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {current.description && (
              <div className="border-t border-border px-5 py-4 sm:px-6">
                <p className="text-sm leading-relaxed text-secondary">
                  {current.description}
                </p>
                <p className="mt-2 text-xs text-muted">
                  {index !== null ? index + 1 : 0} / {certificates.length}
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
