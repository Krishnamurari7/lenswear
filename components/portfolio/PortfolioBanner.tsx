type Props = {
  title: string;
  image: string;
  video?: string;
  titleId?: string;
  focal?: string;
};

/** Full-viewport category banner — image or looping background video */
export default function PortfolioBanner({
  title,
  image,
  video,
  titleId,
  focal,
}: Props) {
  const crop = focal
    ? ({ objectPosition: focal } as const)
    : undefined;

  return (
    <div className="pf-banner" data-dark>
      {video ? (
        <video
          className="pf-banner-img"
          src={video}
          poster={image}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          style={crop}
        />
      ) : (
        <img
          className="pf-banner-img"
          src={image}
          alt=""
          decoding="async"
          aria-hidden="true"
          style={crop}
        />
      )}
      <div className="pf-banner-veil">
        <h2 id={titleId} className="pf-banner-title caps">
          {title}
        </h2>
      </div>
    </div>
  );
}
