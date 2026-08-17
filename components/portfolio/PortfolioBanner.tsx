type Props = {
  title: string;
  image: string;
  titleId?: string;
  focal?: string;
};

/** Full-viewport category banner */
export default function PortfolioBanner({
  title,
  image,
  titleId,
  focal,
}: Props) {
  return (
    <div className="pf-banner" data-dark>
      <img
        className="pf-banner-img"
        src={image}
        alt=""
        decoding="async"
        aria-hidden="true"
        style={focal ? { objectPosition: focal } : undefined}
      />
      <div className="pf-banner-veil">
        <h2 id={titleId} className="pf-banner-title caps">
          {title}
        </h2>
      </div>
    </div>
  );
}
