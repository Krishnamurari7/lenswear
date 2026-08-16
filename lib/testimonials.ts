/** Client quotes — Taj Studio-style testimonial carousel */

export type Testimonial = {
  quote: string;
  name: string;
  image: string;
};

const p = (folder: string, file: string) =>
  "/images/" +
  [folder, file.replace(/\.(jpe?g|png)$/i, ".webp")]
    .map(encodeURIComponent)
    .join("/");

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "They shot like they already knew our families. The film still makes us cry — in the best way.",
    name: "Jay & Dhwani",
    image: p("Jay & Dhwani", "1.jpg"),
  },
  {
    quote:
      "Quiet on set, ruthless in the grade. Our campaign looked expensive because they made it feel that way.",
    name: "Riya Mehta",
    image: p("Mixed", "DEE_6636.JPG"),
  },
  {
    quote:
      "Monsoon, delayed baraat, zero light — they never flinched. Every frame still feels honest.",
    name: "Shilpa & Manish",
    image: p("Shilpa & Manish", "IMG_8198.jpg"),
  },
  {
    quote:
      "We handed them raw concert footage from three cameras. They returned a cut that felt live again.",
    name: "Arjun Kapoor",
    image: p("Mixed", "b2911fb5-cfc1-4dd0-8511-6b8de64a0196.JPG"),
  },
  {
    quote:
      "Studio on Film City Road, same team for stills and motion. One language from treatment to delivery.",
    name: "Neha Sharma",
    image: p("Mixed", "IMG_8056.JPG"),
  },
  {
    quote:
      "Seven years on and they still shoot like it is the only wedding that day. That is rare.",
    name: "Vishal & Ananya",
    image: p("South Indian", "IMG_8137.PNG"),
  },
];
