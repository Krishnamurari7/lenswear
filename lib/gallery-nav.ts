import { asset, PORTFOLIO_CATEGORIES } from "./portfolio";

export type NavGalleryMedia = {
  src: string;
  type: "image" | "video";
};

export type NavGalleryAlbum = {
  id: string;
  categoryId: string;
  name: string;
  cover: string;
  media: NavGalleryMedia[];
};

export type NavGalleryGroup = {
  id: string;
  title: string;
  albums: NavGalleryAlbum[];
};

function folderFromPath(path: string): string {
  const decoded = decodeURIComponent(path);
  const parts = decoded.split("/").filter(Boolean);
  return parts[0] === "images" ? parts[1]! : parts[0]!;
}

function talentName(name: string): string | null {
  if (/shubman/i.test(name)) return "Shubman Gill";
  if (/kajal/i.test(name)) return "Kajal Aggarwal";
  if (/gurmeet/i.test(name)) return "Gurmeet Choudhary";
  return null;
}

function albumName(name: string, folder: string): string {
  const talent = talentName(name);
  if (talent) return talent;
  if (folder === "Weddings") return "Weddings";
  if (folder === "BTS") return "Behind the scenes";
  if (folder === "Event") return "Live events";
  if (folder === "Video") return name.split("—")[0]?.trim() || name;
  const base = name.replace(/\s+II$/i, "").trim();
  return base.split("—")[0]?.trim() || base;
}

function albumGroupKey(
  categoryId: string,
  folder: string,
  name: string
): string {
  const talent = talentName(name);
  if (talent) return `${categoryId}::${talent}`;
  return `${categoryId}::${folder}`;
}

/** Extra frames per shoot folder */
const ALBUM_EXTRAS: Record<string, string[]> = {
  Weddings: [
    asset("Weddings", "1.jpg"),
    asset("Weddings", "1 2.PNG"),
    asset("Weddings", "IMG_7992.PNG"),
    asset("Weddings", "IMG_8202.jpg"),
    asset("Weddings", "IMG_7944.PNG"),
    asset("Weddings", "IMG_7947.jpg"),
    asset("Weddings", "Black and White Modern Fashion Collection Flyer.PNG"),
    asset(
      "Weddings",
      "Monochrome Minimalist Fashion Instagram Post 2.PNG"
    ),
  ],
};

function uniqueMedia(media: NavGalleryMedia[]): NavGalleryMedia[] {
  const seen = new Set<string>();
  return media.filter((item) => {
    if (seen.has(item.src)) return false;
    seen.add(item.src);
    return true;
  });
}

function buildAlbums(): NavGalleryAlbum[] {
  const map = new Map<
    string,
    {
      categoryId: string;
      name: string;
      cover: string;
      media: NavGalleryMedia[];
    }
  >();

  for (const category of PORTFOLIO_CATEGORIES) {
    for (const project of category.projects) {
      const folder = folderFromPath(project.image);
      const name = albumName(project.name, folder);
      const key = albumGroupKey(category.id, folder, project.name);

      const entry = map.get(key) ?? {
        categoryId: category.id,
        name,
        cover: project.image,
        media: [],
      };

      entry.media.push({ src: project.image, type: "image" });
      if (project.video) {
        entry.media.push({ src: project.video, type: "video" });
      }

      map.set(key, entry);
    }
  }

  for (const category of PORTFOLIO_CATEGORIES) {
    const bannerFolder = folderFromPath(category.banner);
    for (const entry of map.values()) {
      if (entry.categoryId !== category.id) continue;
      if (folderFromPath(entry.cover) !== bannerFolder) continue;
      entry.media.unshift({ src: category.banner, type: "image" });
    }
  }

  for (const [folder, extras] of Object.entries(ALBUM_EXTRAS)) {
    for (const entry of map.values()) {
      if (folderFromPath(entry.cover) !== folder) continue;
      for (const src of extras) {
        entry.media.push({ src, type: "image" });
      }
    }
  }

  return [...map.values()].map((entry) => ({
    id: `${entry.categoryId}-${entry.name.replace(/\s+/g, "-").toLowerCase()}`,
    categoryId: entry.categoryId,
    name: entry.name,
    cover: entry.cover,
    media: uniqueMedia(entry.media),
  }));
}

const ALL_ALBUMS = buildAlbums();

/** Unique albums grouped by portfolio category */
export const NAV_GALLERY_GROUPS: NavGalleryGroup[] = PORTFOLIO_CATEGORIES.map(
  (category) => ({
    id: category.id,
    title: category.title,
    albums: ALL_ALBUMS.filter((album) => album.categoryId === category.id),
  })
).filter((group) => group.albums.length > 0);

/** Flat album list for mobile menu */
export const NAV_GALLERY_ALBUMS: NavGalleryAlbum[] = NAV_GALLERY_GROUPS.flatMap(
  (group) => group.albums
);
