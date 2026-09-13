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
  /** Optional looping background video; `banner` is used as poster fallback */
  bannerVideo?: string;
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
    banner: asset("Weddings", "W6.jpg"),
    bannerVideo: asset("Weddings", "Background Wedding.mp4"),
    bannerFocal: "center 40%",
    projects: [
      { name: "Ceremony", image: asset("Weddings", "W6.jpg") },
      {
        name: "Celebration",
        image: asset("Weddings", "W2.JPG"),
        focal: "center 35%",
      },
      {
        name: "Sangeet",
        image: asset("Weddings", "0R9A2935.JPG"),
        video: asset("Weddings", "Sangeet .mp4"),
        focal: "center 40%",
      },
      {
        name: "Bridal",
        image: asset("Weddings", "DEE_6636.JPG"),
        focal: "center 22%",
      },
      {
        name: "Reception",
        image: asset("Weddings", "W5.JPG"),
        focal: "center 40%",
      },
      { name: "Couple", image: asset("Weddings", "22.jpg") },
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
        name: "Sunil Chettri",
        image: asset("Commercial", "Sunil Chettri-poster.jpg"),
        video: asset("Commercial", "Sunil Chettri.mp4"),
        focal: "center 28%",
      },
      {
        name: "Fashion Photo",
        image: asset("Commercial", "Fashion shoot.png"),
        focal: "center 30%",
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
        name: "School Events",
        image: asset("Commercial", "School Events-poster.jpg"),
        video: asset("Commercial", "School Events.mp4"),
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
        name: "Sharwari Ad",
        image: asset("Film", "SHARWARI WAGH.png"),
        focal: "center 22%",
      },
      {
        name: "Scene",
        image: asset("BTS", "_DSC8009.JPG"),
        focal: "58% 40%",
      },
      {
        name: "Ad BTS",
        image: asset("Film", "Ad BTS-poster.jpg"),
        video: asset("Film", "Ad BTS .mp4"),
        focal: "center 40%",
      },
      {
        name: "Shoot BTS",
        image: asset("Film", "Shoot Bts-poster.jpg"),
        video: asset("Film", "Shoot Bts.mp4"),
        focal: "center 35%",
      },
      {
        name: "Short Film",
        image: asset("Film", "Short film.png"),
        focal: "center 40%",
      },
      {
        name: "Bhumi Pednekar",
        image: asset("Film", "Bhumi Pednekar.png"),
        focal: "center 28%",
      },
    ],
  },
  {
    id: "concerts",
    title: "Events",
    banner: asset("Event", "Image-54987.jpg"),
    bannerVideo: asset("Event", "Backgrount Honey singh.mp4"),
    bannerFocal: "center 28%",
    projects: [
      {
        name: "Performer",
        image: asset("Event", "Performer.png"),
        focal: "center 28%",
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
        name: "Harman",
        image: asset(
          "Event",
          "ChatGPT Image Aug 30, 2026, 08_48_03 PM.png"
        ),
        video: asset("Event", "Harman.mp4"),
        focal: "center 28%",
      },
      {
        name: "Solo",
        image: asset("Event", "Image-85372.jpg"),
        focal: "center 12%",
      },
      {
        name: "Artist",
        image: asset("Event", "Artist.png"),
        focal: "center 22%",
      },
    ],
  },
];
