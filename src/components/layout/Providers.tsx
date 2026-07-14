"use client";

import { useState } from "react";
import { CustomCursor } from "./CustomCursor";
import { SmoothScroll } from "./SmoothScroll";
import { ScrollProgress } from "./ScrollProgress";
import { PageLoader } from "./PageLoader";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { AmbientBackground } from "./AmbientBackground";

export function Providers({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  return (
    <div className="cursor-none-desktop relative min-h-screen">
      <AmbientBackground />
      <PageLoader onComplete={() => setReady(true)} />
      <SmoothScroll>
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <main
          className={`relative z-0 transition-opacity duration-700 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        >
          {children}
        </main>
        <Footer />
      </SmoothScroll>
    </div>
  );
}
