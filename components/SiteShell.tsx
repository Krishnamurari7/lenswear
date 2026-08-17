"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { siteMarkupChrome, siteMarkupFooter } from "@/lib/markup";
import NavGalleryDropdown from "@/components/NavGalleryDropdown";
import WhatsAppToggle from "@/components/WhatsAppToggle";

declare global {
  interface Window {
    THREE?: unknown;
    __LENSWEAR_BOOTED?: boolean;
    __lenswearScanReveals?: () => void;
    __lenswearBootHero?: () => void;
    __lenswearTeardownHero?: () => void;
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

export default function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    document.getElementById("nav")?.classList.remove("hide");
    document.body.classList.remove("menu-open");
    if (pathname === "/contact") document.body.classList.add("on-dark");
    const burger = document.getElementById("burger");
    burger?.setAttribute("aria-expanded", "false");
    burger?.setAttribute("aria-label", "Open menu");

    const links = document.querySelectorAll(".nav-mid a, .menu ul a");
    links.forEach((a) => {
      const href = a.getAttribute("href") || "";
      a.classList.toggle("active", pathname === "/contact" && href === "/contact");
    });
  }, [pathname]);

  useEffect(() => {
    if (window.__LENSWEAR_BOOTED) return;
    window.__LENSWEAR_BOOTED = true;

    (async () => {
      try {
        await loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
        );
        await loadScript("/site.js");
        window.__lenswearScanReveals?.();
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
      <NavGalleryDropdown />
      <main id="top">{children}</main>
      <div
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: siteMarkupFooter }}
      />
      <WhatsAppToggle />
    </>
  );
}
