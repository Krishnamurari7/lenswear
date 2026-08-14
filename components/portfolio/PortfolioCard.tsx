import type { PortfolioProject } from "@/lib/portfolio";

type Props = {
  project: PortfolioProject;
};

/** Single project tile — Taj Studio grid item (image + name badge) */
export default function PortfolioCard({ project }: Props) {
  const inner = (
    <>
      <div className="pf-card-media">
        {project.video ? (
          <video
            src={project.video}
            poster={project.image}
            aria-label={project.name}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            decoding="async"
          />
        )}
      </div>
      <span className="pf-card-name">{project.name}</span>
    </>
  );

  if (project.href) {
    return (
      <a className="pf-card" href={project.href} data-cursor="view">
        {inner}
      </a>
    );
  }

  return (
    <article className="pf-card" data-cursor="view">
      {inner}
    </article>
  );
}
