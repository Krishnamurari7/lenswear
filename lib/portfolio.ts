/** Portfolio data — Taj Studio-style category grids for Lenswear Films */

export type PortfolioProject = {
  name: string;
  image: string;
  video?: string;
  href?: string;
};

export type PortfolioCategory = {
  id: string;
  title: string;
  banner: string;
  projects: PortfolioProject[];
};

const toWebp = (filename: string) =>
  filename.replace(/\.(jpe?g|png)$/i, ".webp");

const p = (...parts: string[]) => {
  const last = parts.pop()!;
  return "/images/" + [...parts, toWebp(last)].map(encodeURIComponent).join("/");
};

/** Root-level shoot folders (public/<folder>/...) — not under public/images */
const r = (...parts: string[]) => {
  const last = parts.pop()!;
  return "/" + [...parts, toWebp(last)].map(encodeURIComponent).join("/");
};

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  {
    id: "weddings",
    title: "Weddings",
    banner: p("Jay & Dhwani", "0R9A5208.JPG"),
    projects: [
      { name: "Jay & Dhwani", image: p("Jay & Dhwani", "1.jpg") },
      { name: "Shilpa & Manish", image: p("Shilpa & Manish", "IMG_8198.jpg") },
      { name: "South Indian", image: p("South Indian", "IMG_8137.PNG") },
      { name: "Jay & Dhwani II", image: p("Jay & Dhwani", "0R9A2909.JPG") },
      { name: "Shilpa & Manish II", image: p("Shilpa & Manish", "IMG_8200.jpg") },
      { name: "Ceremony", image: p("South Indian", "1.jpg") },
    ],
  },
  {
    id: "commercial",
    title: "Commercial",
    banner: p("Mixed", "DEE_6636.JPG"),
    projects: [
      { name: "Editorial", image: p("Mixed", "DEE_6636.JPG") },
      { name: "Portrait", image: p("Mixed", "IMG_8056.JPG") },
      {
        name: "Kajal Aggarwal — Brand Shoot",
        image: r("Kajal Agraval", "Image-13452.jpg"),
      },
      {
        name: "Shubman Gill — Green Screen",
        image: r("Shubman Gill", "Image-21436.jpg"),
      },
      {
        name: "Kajal Aggarwal — Campaign Film",
        image: r("Kajal Agraval", "Image-22926.jpg"),
        video: r("Kajal Agraval", "Video-50896.mp4"),
      },
      {
        name: "Shubman Gill — Ad Film",
        image: r("Shubman Gill", "Image-55383.jpg"),
        video: r("Shubman Gill", "Video-1471.mp4"),
      },
    ],
  },
  {
    id: "films",
    title: "Films",
    banner: p("Mixed", "6c4858a4-c746-435e-86d6-da29b6b83a52.JPG"),
    projects: [
      {
        name: "Cinematic Still",
        image: p("Mixed", "6c4858a4-c746-435e-86d6-da29b6b83a52.JPG"),
      },
      {
        name: "Night Frame",
        image: p("Mixed", "1b32b135-25ef-4395-b96c-a175ff99fd7a.JPG"),
      },
      {
        name: "Process",
        image: p("Mixed", "IMG_7947.jpg"),
      },
      {
        name: "Location",
        image: p("Mixed", "42ca4f14-fbe1-47c9-a596-c95241362fc3.JPG"),
      },
      {
        name: "Detail",
        image: p("Mixed", "76b3873d-acf8-41ff-8d9d-f2c0fa48e226.JPG"),
      },
      {
        name: "Color Grade",
        image: p("Mixed", "9bdd983c-1b53-4c23-a30d-4f758f2cda3a.JPG"),
      },
    ],
  },
  {
    id: "concerts",
    title: "Concerts · Post",
    banner: p("Mixed", "b2911fb5-cfc1-4dd0-8511-6b8de64a0196.JPG"),
    projects: [
      {
        name: "Live Stage",
        image: p("Mixed", "b2911fb5-cfc1-4dd0-8511-6b8de64a0196.JPG"),
      },
      {
        name: "Crowd",
        image: p("Mixed", "a1ea1d0b-fbf8-43b0-b9a3-72941dbdaf07.JPG"),
      },
      {
        name: "Backstage",
        image: p("Mixed", "7e9a3608-377a-4146-b2e9-479f44af20f8.JPG"),
      },
      {
        name: "Grade Pass",
        image: p("Mixed", "ec640ac4-1939-4c8a-8761-66c05cbe2af2.JPG"),
      },
      { name: "Cut Room", image: p("Mixed", "IMG_7944.PNG") },
      { name: "Final Frame", image: p("Mixed", "IMG_8119.jpg") },
    ],
  },
];
