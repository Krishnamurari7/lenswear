import type { PortfolioProject } from "@/lib/portfolio";

type Props = {
  project: PortfolioProject;
  isVideo?: boolean;
};

/** Grid tile — image or autoplay video with poster fallback */
export default function PortfolioCard({ project, isVideo }: Props) {
  const crop = project.focal
    ? ({ objectPosition: project.focal } as const)
    : undefined;

  const inner = (
    <>
      <div className="pf-card-media">
        {project.video ? (
          <>
            <img
              src={project.image}
              alt=""
              loading="lazy"
              decoding="async"
              className="pf-card-poster"
              aria-hidden="true"
              style={crop}
            />
            <video
              src={project.video}
              poster={project.image}
              aria-label={project.name}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              style={crop}
            />
          </>
        ) : (
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            decoding="async"
            style={crop}
          />
        )}
      </div>
      <span className="pf-card-name">{project.name}</span>
    </>
  );

  const className = `pf-card${isVideo ? " pf-card-video" : ""}${
    project.fit === "contain" ? " pf-card-contain" : ""
  }`;

  if (project.href) {
    return (
      <a className={className} href={project.href} data-cursor="view">
        {inner}
      </a>
    );
  }

  return <article className={className}>{inner}</article>;
}
