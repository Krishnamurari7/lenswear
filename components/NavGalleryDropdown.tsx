"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { createPortal } from "react-dom";
import {
  NAV_GALLERY_ALBUMS,
  NAV_GALLERY_GROUPS,
  type NavGalleryAlbum,
} from "@/lib/gallery-nav";

function closeMobileMenu() {
  document.body.classList.remove("menu-open");
  const burger = document.getElementById("burger");
  burger?.setAttribute("aria-expanded", "false");
  burger?.setAttribute("aria-label", "Open menu");
}

function GalleryTile({
  album,
  index,
  onSelect,
}: {
  album: NavGalleryAlbum;
  index: number;
  onSelect: (album: NavGalleryAlbum) => void;
}) {
  const frames = album.media.filter((m) => m.type === "image").length;
  const videos = album.media.filter((m) => m.type === "video").length;

  return (
    <button
      type="button"
      className="nav-gal-tile"
      style={{ "--i": index } as CSSProperties}
      onClick={() => onSelect(album)}
    >
      <span className="nav-gal-tile-media">
        <img src={album.cover} alt="" loading="lazy" decoding="async" />
        <span className="nav-gal-tile-shade" aria-hidden="true" />
      </span>
      <span className="nav-gal-tile-copy">
        <span className="nav-gal-tile-name">{album.name}</span>
        <span className="nav-gal-tile-meta mono">
          {frames} {frames === 1 ? "frame" : "frames"}
          {videos > 0 ? ` · ${videos} film${videos > 1 ? "s" : ""}` : ""}
        </span>
      </span>
    </button>
  );
}

function AlbumViewer({
  album,
  onClose,
}: {
  album: NavGalleryAlbum;
  onClose: () => void;
}) {
  return (
    <div
      className="gal-album"
      role="dialog"
      aria-modal="true"
      aria-label={album.name}
    >
      <button
        type="button"
        className="gal-album-backdrop"
        aria-label="Close"
        onClick={onClose}
      />
      <div className="gal-album-in">
        <header className="gal-album-head">
          <h2 className="gal-album-title">{album.name}</h2>
          <button
            type="button"
            className="gal-album-close mono"
            aria-label="Close"
            onClick={onClose}
          >
            Close
          </button>
        </header>
        <div className="gal-album-grid">
          {album.media.map((item) => (
            <figure key={item.src} className="gal-album-item">
              {item.type === "video" ? (
                <video
                  src={item.src}
                  poster={album.cover}
                  controls
                  playsInline
                  preload="metadata"
                />
              ) : (
                <img src={item.src} alt={album.name} loading="lazy" decoding="async" />
              )}
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function NavGalleryDropdown() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeAlbum, setActiveAlbum] = useState<NavGalleryAlbum | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      const target = e.target as Node;
      if (wrapRef.current?.contains(target)) return;
      if (panelRef.current?.contains(target)) return;
      setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("click", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (!activeAlbum) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveAlbum(null);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [activeAlbum]);

  const onSelect = useCallback((album: NavGalleryAlbum) => {
    setOpen(false);
    closeMobileMenu();
    setActiveAlbum(album);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("gal-open", open);
    return () => document.body.classList.remove("gal-open");
  }, [open]);

  const totalAlbums = NAV_GALLERY_ALBUMS.length;

  const galleryPanel = open && (
    <>
      <button
        type="button"
        className="nav-gal-backdrop"
        aria-label="Close gallery menu"
        onClick={() => setOpen(false)}
      />
      <div className="nav-gal-panel" role="listbox" ref={panelRef}>
        <div className="nav-gal-panel-in">
          <header className="nav-gal-panel-head">
            <div className="nav-gal-panel-intro">
              <span className="nav-gal-panel-eyebrow mono">Lenswear Films</span>
              <h2 className="nav-gal-panel-title">Gallery</h2>
            </div>
            <p className="nav-gal-panel-note">
              Select a project to view every frame from that shoot.
            </p>
            <span className="nav-gal-panel-count mono">
              {totalAlbums} projects
            </span>
          </header>
          <div className="nav-gal-cols">
            {NAV_GALLERY_GROUPS.map((group) => (
              <section key={group.id} className="nav-gal-col">
                <h3 className="nav-gal-col-head mono">{group.title}</h3>
                <div className="nav-gal-tiles">
                  {group.albums.map((album, index) => (
                    <GalleryTile
                      key={album.id}
                      album={album}
                      index={index}
                      onSelect={onSelect}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  const dropdown = (
    <div className="nav-gal" ref={wrapRef}>
      <button
        type="button"
        className={`nav-gal-btn${open ? " open" : ""}`}
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
      >
        Gallery
        <span className="nav-gal-chev" aria-hidden="true" />
      </button>
    </div>
  );

  const mobileGallery = (
    <div className="menu-gal">
      <span className="menu-gal-label mono">Gallery</span>
      <div className="menu-gal-grid">
        {NAV_GALLERY_ALBUMS.map((album) => (
          <button
            key={album.id}
            type="button"
            className="menu-gal-tile"
            onClick={() => onSelect(album)}
          >
            <span className="menu-gal-tile-media">
              <img src={album.cover} alt="" loading="lazy" decoding="async" />
            </span>
            <span className="menu-gal-tile-name">{album.name}</span>
          </button>
        ))}
      </div>
    </div>
  );

  if (!mounted) return null;

  const navSlot = document.getElementById("nav-gallery-slot");
  const menuSlot = document.getElementById("nav-gallery-menu-slot");

  return (
    <>
      {navSlot && createPortal(dropdown, navSlot)}
      {menuSlot && createPortal(mobileGallery, menuSlot)}
      {galleryPanel && createPortal(galleryPanel, document.body)}
      {activeAlbum &&
        createPortal(
          <AlbumViewer album={activeAlbum} onClose={() => setActiveAlbum(null)} />,
          document.body
        )}
    </>
  );
}
