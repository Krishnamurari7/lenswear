"use client";

import { useEffect, useState } from "react";

const WA_URL = "https://wa.me/919022766668";
const MAP_QUERY =
  "16th Shree Wageshwari opp Satellite Royal Film City Road Pankaj Shah Marg Goregaon Mumbai 400063";
/* Studio: Film City Road, Goregaon — OSM embed (Google Maps iframes can top-navigate away from /contact) */
const MAP_LAT = 19.1645;
const MAP_LON = 72.8495;
const MAP_DELTA = 0.012;
const MAP_EMBED = `https://www.openstreetmap.org/export/embed.html?bbox=${MAP_LON - MAP_DELTA}%2C${MAP_LAT - MAP_DELTA * 0.7}%2C${MAP_LON + MAP_DELTA}%2C${MAP_LAT + MAP_DELTA * 0.7}&layer=mapnik&marker=${MAP_LAT}%2C${MAP_LON}`;
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`;

const ROTATE_WORDS = [
  "wedding",
  "birthday",
  "anniversary",
  "concert",
  "film",
  "event",
];

export default function ContactView() {
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let outTimer = 0;
    const hold = window.setInterval(() => {
      setPhase("out");
      outTimer = window.setTimeout(() => {
        setWordIndex((i) => (i + 1) % ROTATE_WORDS.length);
        setPhase("in");
      }, 320);
    }, 2800);

    return () => {
      window.clearInterval(hold);
      window.clearTimeout(outTimer);
    };
  }, []);

  return (
    <section className="contact sec" id="contact" data-dark>
      <div className="wrap contact-in">
        <div>
          <p className="mono contact-kicker">Goregaon · Mumbai</p>
          <h2>
            Let&apos;s talk
            <br />
            about your
            <br />
            <em
              className={`contact-rotate-word is-${phase}`}
              aria-live="polite"
            >
              {ROTATE_WORDS[wordIndex]}.
            </em>
          </h2>
          <a
            className="wa"
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="Chat"
          >
            <span>WhatsApp us</span>
          </a>
        </div>
        <div>
          <div className="rows">
            <a href="tel:+919022766668">
              <span className="mono">Phone</span>
              <b>+91 90227 66668</b>
            </a>
            <a href="mailto:Lenswearphotography@gmail.com">
              <span className="mono">Email</span>
              <b>Lenswearphotography@gmail.com</b>
            </a>
            <a
              href="https://www.instagram.com/lenswear"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mono">Instagram</span>
              <b>@lenswear</b>
            </a>
            <a href={MAP_LINK} target="_blank" rel="noopener noreferrer">
              <span className="mono">Studio</span>
              <b>
                16th, Shree Wageshwari, opp. Satellite royal, Film City Road,
                Pankaj Shah Marg, Goregaon, Mumbai 400063
              </b>
            </a>
          </div>
        </div>
      </div>
      <div className="wrap contact-map-wrap">
        <div className="contact-map">
          <iframe
            title="Lenswear Films studio location"
            src={MAP_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
        <p className="mono contact-map-note">
          <span>Film City Road, Goregaon</span>
          <a href={MAP_LINK} target="_blank" rel="noopener noreferrer">
            Open in Google Maps ↗
          </a>
        </p>
      </div>
    </section>
  );
}
