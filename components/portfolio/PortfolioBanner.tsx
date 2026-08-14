type Props = {
  title: string;
  image: string;
  titleId?: string;
};

/** Sticky full-viewport category panel — grid scrolls over title + image */
export default function PortfolioBanner({ title, image, titleId }: Props) {
  return (
    <div className="pf-banner-pin">
      <div
        className="pf-banner"
        data-dark
        style={{ backgroundImage: `url("${image}")` }}
      >
        <div className="pf-banner-veil">
          <h2 id={titleId} className="pf-banner-title">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
}
