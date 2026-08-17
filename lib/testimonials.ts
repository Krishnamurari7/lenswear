/** Client quotes — Taj Studio-style testimonial carousel */

export type Testimonial = {
  quote: string;
  name: string;
  image: string;
};

import { asset } from "./portfolio";

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "They shot like they already knew our families. The film still makes us cry — in the best way.",
    name: "Jay & Dhwani",
    image: asset("Weddings", "0R9A1496.JPG"),
  },
  {
    quote:
      "Quiet on set, ruthless in the grade. Our campaign looked expensive because they made it feel that way.",
    name: "Riya Mehta",
    image: asset("BTS", "Image-64718.jpg"),
  },
  {
    quote:
      "Monsoon, delayed baraat, zero light — they never flinched. Every frame still feels honest.",
    name: "Shilpa & Manish",
    image: asset("Weddings", "0R9A2935.JPG"),
  },
  {
    quote:
      "We handed them raw concert footage from three cameras. They returned a cut that felt live again.",
    name: "Arjun Kapoor",
    image: asset("Event", "Image-84673.jpg"),
  },
  {
    quote:
      "Studio on Film City Road, same team for stills and motion. One language from treatment to delivery.",
    name: "Neha Sharma",
    image: asset("BTS", "_DSC8009.JPG"),
  },
  {
    quote:
      "Seven years on and they still shoot like it is the only wedding that day. That is rare.",
    name: "Vishal & Ananya",
    image: asset("Weddings", "IMG_8119.jpg"),
  },
];
