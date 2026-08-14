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
      { name: "Lookbook", image: p("Mixed", "3rd.PNG") },
      { name: "Studio Light", image: p("Mixed", "2nd.PNG") },
      { name: "On Set", image: p("Mixed", "IMG_8033.jpg") },
      { name: "Campaign", image: p("Mixed", "IMG_8118.jpg") },
      {
        name: "Kajal Aggarwal — Brand Shoot",
        image: r("Kajal Agraval", "Image-13452.jpg"),
      },
      {
        name: "Kajal Aggarwal — Campaign Film",
        image: r("Kajal Agraval", "Image-22926.jpg"),
        video: r("Kajal Agraval", "Video-50896.mp4"),
      },
      {
        name: "Kajal Aggarwal — Studio Portrait",
        image: r("Kajal Agraval", "Image-42630.jpg"),
      },
      {
        name: "Shubman Gill — Green Screen",
        image: r("Shubman Gill", "Image-21436.jpg"),
      },
      {
        name: "Shubman Gill — Ad Film",
        image: r("Shubman Gill", "Image-55383.jpg"),
        video: r("Shubman Gill", "Video-1471.mp4"),
      },
      {
        name: "Shubman Gill — On Set",
        image: r("Shubman Gill", "Image-64718.jpg"),
        video: r("Shubman Gill", "Video-28015.mp4"),
      },
      {
        name: "Shubman Gill — Campaign Wrap",
        image: r("Shubman Gill", "Image-69822.jpg"),
        video: r("Shubman Gill", "Video-76707.mp4"),
      },
      {
        name: "Shubman Gill — Behind the Scenes",
        image: r("Shubman Gill", "Image-91677.jpg"),
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
      { name: "Live Set 01", image: r("Event", "Image-26142.jpg") },
      { name: "Live Set 02", image: r("Event", "Image-27755.jpg") },
      { name: "Live Set 03", image: r("Event", "Image-38116.jpg") },
      { name: "Live Set 04", image: r("Event", "Image-40688.jpg") },
      { name: "Live Set 05", image: r("Event", "Image-49037.jpg") },
      { name: "Live Set 06", image: r("Event", "Image-54987.jpg") },
      { name: "Live Set 07", image: r("Event", "Image-55451.jpg") },
      { name: "Live Set 08", image: r("Event", "Image-59118.jpg") },
      { name: "Live Set 09", image: r("Event", "Image-59800.jpg") },
      { name: "Live Set 10", image: r("Event", "Image-63492.jpg") },
      { name: "Live Set 11", image: r("Event", "Image-66293.jpg") },
      { name: "Live Set 12", image: r("Event", "Image-67049.jpg") },
      { name: "Live Set 13", image: r("Event", "Image-68224.jpg") },
      { name: "Live Set 14", image: r("Event", "Image-74858.jpg") },
      { name: "Live Set 15", image: r("Event", "Image-79080.jpg") },
      { name: "Live Set 16", image: r("Event", "Image-80789.jpg") },
      { name: "Live Set 17", image: r("Event", "Image-81576.jpg") },
      { name: "Live Set 18", image: r("Event", "Image-82897.jpg") },
      { name: "Live Set 19", image: r("Event", "Image-84673.jpg") },
      { name: "Live Set 20", image: r("Event", "Image-85372.jpg") },
      { name: "Live Set 21", image: r("Event", "Image-89456.jpg") },
      { name: "Live Set 22", image: r("Event", "Image-96088.jpg") },
    ],
  },
];
