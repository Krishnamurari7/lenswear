type Props = {
  title: string;
  image: string;
  titleId?: string;
};

/** Full-width category banner — Taj Studio parallax panel */
export default function PortfolioBanner({ title, image, titleId }: Props) {
  return (
    <div
      className="pf-banner"
      data-dark
      style={{ backgroundImage: `url("${image}")` }}
    >
      <div className="pf-banner-veil">
        <h2 id={titleId} className="pf-banner-title caps">
          {title}
        </h2>
      </div>
    </div>
  );
}
