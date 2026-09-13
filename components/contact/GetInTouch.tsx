"use client";

import { FormEvent, ChangeEvent, useState } from "react";

const WA_NUMBER = "919022766668";

const EVENTS = [
  "Wedding",
  "Sangeet / Pre-wedding",
  "Commercial",
  "Concert / Event",
  "Film / BTS",
  "Other",
] as const;

const COUNTRIES = [
  "India",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Canada",
  "Australia",
  "Singapore",
  "Other",
] as const;

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  event: string;
  location: string;
  source: string;
  eventDate: string;
  residence: string;
};

const EMPTY: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "",
  event: "",
  location: "",
  source: "",
  eventDate: "",
  residence: "",
};

function buildWhatsAppUrl(data: FormState) {
  const lines = [
    "Hi Lenswear Films — I'd like to get in touch.",
    "",
    `Name: ${data.firstName} ${data.lastName}`.trim(),
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Country: ${data.country}`,
    `Event: ${data.event}`,
    `Location: ${data.location}`,
    `Event date: ${data.eventDate || "—"}`,
    `Currently live in: ${data.residence || "—"}`,
    `How I found you: ${data.source || "—"}`,
  ];
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}

/** Horizontal enquiry form — replaces testimonials; submits via WhatsApp */
export default function GetInTouch() {
  const [form, setForm] = useState<FormState>(EMPTY);

  const set =
    (key: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.open(buildWhatsAppUrl(form), "_blank", "noopener,noreferrer");
  };

  return (
    <section className="git" id="touch" aria-labelledby="git-title">
      <div className="git-inner wrap">
        <h2 id="git-title" className="git-title">
          Get in Touch
        </h2>

        <form className="git-form" onSubmit={onSubmit} noValidate={false}>
          <div className="git-grid">
            <label className="git-field">
              <span>
                First Name<span className="git-req" aria-hidden="true">
                  *
                </span>
              </span>
              <input
                name="firstName"
                type="text"
                required
                autoComplete="given-name"
                value={form.firstName}
                onChange={set("firstName")}
              />
            </label>

            <label className="git-field">
              <span>
                Last Name<span className="git-req" aria-hidden="true">
                  *
                </span>
              </span>
              <input
                name="lastName"
                type="text"
                required
                autoComplete="family-name"
                value={form.lastName}
                onChange={set("lastName")}
              />
            </label>

            <label className="git-field">
              <span>
                Email<span className="git-req" aria-hidden="true">
                  *
                </span>
              </span>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={set("email")}
              />
            </label>

            <label className="git-field">
              <span>
                Phone<span className="git-req" aria-hidden="true">
                  *
                </span>
              </span>
              <input
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                value={form.phone}
                onChange={set("phone")}
              />
            </label>

            <label className="git-field">
              <span>
                Country<span className="git-req" aria-hidden="true">
                  *
                </span>
              </span>
              <select
                name="country"
                required
                value={form.country}
                onChange={set("country")}
              >
                <option value="" disabled>
                  Select country
                </option>
                {COUNTRIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>

            <label className="git-field">
              <span>
                Select the Event<span className="git-req" aria-hidden="true">
                  *
                </span>
              </span>
              <select
                name="event"
                required
                value={form.event}
                onChange={set("event")}
              >
                <option value="" disabled>
                  Select event
                </option>
                {EVENTS.map((ev) => (
                  <option key={ev} value={ev}>
                    {ev}
                  </option>
                ))}
              </select>
            </label>

            <label className="git-field">
              <span>
                Location<span className="git-req" aria-hidden="true">
                  *
                </span>
              </span>
              <input
                name="location"
                type="text"
                required
                placeholder="City / venue"
                value={form.location}
                onChange={set("location")}
              />
            </label>

            <label className="git-field">
              <span>Date of wedding or relevant event?</span>
              <input
                name="eventDate"
                type="date"
                value={form.eventDate}
                onChange={set("eventDate")}
              />
            </label>

            <label className="git-field">
              <span>Where did you come across the company?</span>
              <input
                name="source"
                type="text"
                placeholder="Instagram, referral, Google…"
                value={form.source}
                onChange={set("source")}
              />
            </label>

            <label className="git-field">
              <span>Where do you live currently?</span>
              <input
                name="residence"
                type="text"
                autoComplete="address-level2"
                value={form.residence}
                onChange={set("residence")}
              />
            </label>
          </div>

          <div className="git-actions">
            <button type="submit" className="git-send" data-cursor="Send">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
