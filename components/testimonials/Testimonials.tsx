"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "@/lib/testimonials";

/** Simple horizontal carousel — Taj Studio testimonials block */
export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const syncNav = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth - 2;
    setCanPrev(el.scrollLeft > 2);
    setCanNext(el.scrollLeft < max);
  }, []);

  const scrollBy = useCallback((dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".tm-item");
    const styles = card ? getComputedStyle(el) : null;
    const gap = styles ? parseFloat(styles.gap || "16") || 16 : 16;
    const step = card ? card.offsetWidth + gap : el.clientWidth * 0.88;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    syncNav();
    el.addEventListener("scroll", syncNav, { passive: true });
    addEventListener("resize", syncNav);

    const timer = window.setInterval(() => {
      const max = el.scrollWidth - el.clientWidth - 2;
      if (el.scrollLeft >= max) el.scrollTo({ left: 0, behavior: "smooth" });
      else scrollBy(1);
    }, 5000);

    return () => {
      el.removeEventListener("scroll", syncNav);
      removeEventListener("resize", syncNav);
      window.clearInterval(timer);
    };
  }, [scrollBy, syncNav]);

  return (
    <section className="tm" id="voices" aria-labelledby="tm-title">
      <div className="tm-inner wrap">
        <h2 id="tm-title" className="tm-title caps">
          Testimonials
        </h2>

        <div className="tm-carousel">
          <button
            type="button"
            className="tm-nav tm-nav-prev"
            aria-label="Previous testimonial"
            disabled={!canPrev}
            onClick={() => scrollBy(-1)}
          >
            ‹
          </button>

          <div className="tm-track" ref={trackRef}>
            {TESTIMONIALS.map((item) => (
              <article key={item.name} className="tm-item">
                <div className="tm-photo">
                  <img src={item.image} alt="" loading="lazy" decoding="async" />
                </div>
                <h3 className="tm-name">{item.name}</h3>
                <p className="tm-quote">{item.quote}</p>
              </article>
            ))}
          </div>

          <button
            type="button"
            className="tm-nav tm-nav-next"
            aria-label="Next testimonial"
            disabled={!canNext}
            onClick={() => scrollBy(1)}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
