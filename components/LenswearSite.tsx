"use client";

import { useEffect } from "react";
import { siteMarkupHero } from "@/lib/markup";
import PortfolioWorks from "@/components/portfolio/PortfolioWorks";
import Testimonials from "@/components/testimonials/Testimonials";

function scanReveals() {
  window.__lenswearScanReveals?.();
}

export default function LenswearSite() {
  useEffect(() => {
    scanReveals();
    const t = window.setTimeout(scanReveals, 120);
    return () => window.clearTimeout(t);
  });

  useEffect(() => {
    window.__lenswearBootHero?.();
    const id = window.location.hash.replace("#", "");
    const scrollT = id
      ? window.setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 80)
      : 0;
    return () => {
      window.clearTimeout(scrollT);
      window.__lenswearTeardownHero?.();
    };
  }, []);

  return (
    <>
      <div
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: siteMarkupHero }}
      />
      <PortfolioWorks />
      <Testimonials />
    </>
  );
}
