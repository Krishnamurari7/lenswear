/** Portfolio data — Taj Studio-style category grids for Lenswear Films */

export type PortfolioProject = {
  name: string;
  image: string;
  video?: string;
  href?: string;
  /** CSS object-position for portrait assets cropped into landscape tiles */
  focal?: string;
  /** contain = show full graphic poster; cover = photo crop (default) */
  fit?: "cover" | "contain";
};

export type PortfolioCategory = {
  id: string;
  title: string;
  banner: string;
  bannerFocal?: string;
  projects: PortfolioProject[];
};

/** Root-level folders in public/ — keep original jpg/png/mp4 extensions */
export const asset = (...parts: string[]) =>
  "/" + parts.map(encodeURIComponent).join("/");

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  {
    id: "weddings",
    title: "Weddings",
    banner: asset("Weddings", "0R9A2935.JPG"),
    bannerFocal: "center 68%",
    projects: [
      { name: "Couple", image: asset("Weddings", "0R9A1496.JPG") },
      {
        name: "Celebration",
        image: asset("Weddings", "0R9A2935.JPG"),
        focal: "center 70%",
      },
      { name: "Ceremony", image: asset("Weddings", "IMG_8119.jpg") },
      {
        name: "Bridal",
        image: asset("Weddings", "DEE_6636.JPG"),
        focal: "center 22%",
      },
      {
        name: "Intimate",
        image: asset("Weddings", "3 copy.JPG"),
        focal: "center 40%",
      },
      { name: "Candid", image: asset("Weddings", "IMG_8118.jpg") },
    ],
  },
  {
    id: "commercial",
    title: "Commercial",
    banner: asset("BTS", "Image-64718.jpg"),
    bannerFocal: "center 32%",
    projects: [
      {
        name: "Shubman Gill — Campaign",
        image: asset("BTS", "Image-64718.jpg"),
        focal: "center 32%",
      },
      {
        name: "Shubman Gill — Studio",
        image: asset("BTS", "Image-55383.jpg"),
        focal: "center 38%",
      },
      {
        name: "Kajal Aggarwal — Brand Film",
        image: asset("Video", "KAjal-poster.jpg"),
        video: asset("Video", "KAjal.mp4"),
        focal: "center 16%",
      },
      {
        name: "Kajal Aggarwal — Mobilla",
        image: asset("Video", "HD____KAJAL_A____MOBILLA-poster.jpg"),
        video: asset("Video", "HD __ KAJAL A. __ MOBILLA.mp4"),
        focal: "62% 38%",
      },
      {
        name: "Gurmeet Choudhary",
        image: asset("Video", "Gurmeet-poster.jpg"),
        video: asset("Video", "Gurmeet .mp4"),
        focal: "72% 42%",
      },
      {
        name: "Shubman Gill — Ad Film",
        image: asset("Video", "Video-28015-poster.jpg"),
        video: asset("Video", "Video-28015.mp4"),
        focal: "center 40%",
      },
    ],
  },
  {
    id: "films",
    title: "Films",
    banner: asset("BTS", "_DSC7900.JPG"),
    bannerFocal: "42% 48%",
    projects: [
      {
        name: "On set",
        image: asset("BTS", "_DSC7900.JPG"),
        focal: "42% 45%",
      },
      {
        name: "Scene",
        image: asset("BTS", "_DSC8009.JPG"),
        focal: "58% 40%",
      },
      {
        name: "Coverage",
        image: asset("BTS", "_DSC8019.JPG"),
        focal: "58% 38%",
      },
      {
        name: "Cinematography",
        image: asset("Weddings", "IMG_7947.jpg"),
        fit: "contain",
      },
      {
        name: "Editorial",
        image: asset("Weddings", "IMG_8202.jpg"),
        fit: "contain",
      },
      {
        name: "Campaign still",
        image: asset(
          "Weddings",
          "Monochrome Minimalist Fashion Instagram Post 2.PNG"
        ),
        fit: "contain",
      },
    ],
  },
  {
    id: "concerts",
    title: "Events",
    banner: asset("Event", "Image-54987.jpg"),
    bannerFocal: "center 28%",
    projects: [
      {
        name: "Live vocal",
        image: asset("Event", "Image-84673.jpg"),
        focal: "38% 28%",
      },
      {
        name: "Stage",
        image: asset("Event", "Image-54987.jpg"),
        focal: "center 30%",
      },
      {
        name: "Vocalist",
        image: asset("Event", "Image-63492.jpg"),
        focal: "58% 22%",
      },
      {
        name: "Duet",
        image: asset("Event", "Image-66293.jpg"),
        focal: "center 32%",
      },
      {
        name: "Solo",
        image: asset("Event", "Image-85372.jpg"),
        focal: "center 12%",
      },
    ],
  },
];
