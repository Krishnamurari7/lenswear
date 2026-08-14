"use client";

import { useEffect } from "react";
import {
  siteMarkupChrome,
  siteMarkupHero,
  siteMarkupFooter,
} from "@/lib/markup";
import PortfolioWorks from "@/components/portfolio/PortfolioWorks";
import Testimonials from "@/components/testimonials/Testimonials";

declare global {
  interface Window {
    THREE?: unknown;
    __LENSWEAR_BOOTED?: boolean;
    __lenswearScanReveals?: () => void;
  }
}

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[data-lenswear="${src}"]`
    );
    if (existing) {
      if (existing.dataset.loaded === "1") {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener(
        "error",
        () => reject(new Error(`Failed to load ${src}`)),
        { once: true }
      );
      return;
    }

    const s = document.createElement("script");
    s.src = src;
    s.async = false;
    s.dataset.lenswear = src;
    s.onload = () => {
      s.dataset.loaded = "1";
      resolve();
    };
    s.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(s);
  });
}

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
    if (window.__LENSWEAR_BOOTED) return;
    window.__LENSWEAR_BOOTED = true;

    (async () => {
      try {
        await loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
        );
        await loadScript("/site.js");
        scanReveals();
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);
  return (
    <>
      <div
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: siteMarkupChrome }}
      />
      <main id="top">
        <div
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: siteMarkupHero }}
        />
        <PortfolioWorks />
        <Testimonials />
      </main>
      <div
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: siteMarkupFooter }}
      />
    </>
  );
}
