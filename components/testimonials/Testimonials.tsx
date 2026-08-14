import { TESTIMONIALS, type Testimonial } from "@/lib/testimonials";

function Card({ item, index }: { item: Testimonial; index: number }) {
  const num = String((index % TESTIMONIALS.length) + 1).padStart(2, "0");

  return (
    <figure className="tm-card">
      <div className="tm-card-top">
        <span className="tm-index" aria-hidden="true">
          {num}
        </span>
        <span className="tm-mark" aria-hidden="true">
          &ldquo;
        </span>
      </div>
      <blockquote className="tm-quote">{item.quote}</blockquote>
      <figcaption className="tm-meta">
        <span className="tm-name">{item.name}</span>
        <span className="tm-detail">{item.detail}</span>
      </figcaption>
      <span className="tm-glow" aria-hidden="true" />
    </figure>
  );
}

function Track({
  items,
  reverse,
}: {
  items: Testimonial[];
  reverse?: boolean;
}) {
  const loop = [...items, ...items];

  return (
    <div
      className={`tm-rail${reverse ? " is-reverse" : ""}`}
      aria-hidden={reverse}
    >
      <div className="tm-track">
        {loop.map((item, i) => (
          <Card key={`${item.name}-${i}`} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}

/** Infinite scrolling client quotes — sits between works and footer */
export default function Testimonials() {
  const rowA = TESTIMONIALS;
  const rowB = [...TESTIMONIALS].reverse();

  return (
    <section className="tm" id="voices" aria-labelledby="tm-title" data-dark>
      <div className="tm-bg" aria-hidden="true">
        <span className="tm-orb tm-orb-a" />
        <span className="tm-orb tm-orb-b" />
      </div>

      <div className="tm-head wrap">
        <div className="tm-head-row">
          <div className="tm-head-copy">
            <p className="mono red">Client voices</p>
            <h2 id="tm-title" className="tm-title">
              <span className="ln">
                <span>What they said</span>
              </span>
              <span className="ln">
                <span>after the cut</span>
              </span>
            </h2>
          </div>
          <div className="tm-stat" aria-label={`${TESTIMONIALS.length} client stories`}>
            <b>{TESTIMONIALS.length}</b>
            <span className="mono">Stories told</span>
          </div>
        </div>
        <div className="tm-rule" aria-hidden="true" />
      </div>

      <div className="tm-marquee">
        <Track items={rowA} />
        <Track items={rowB} reverse />
      </div>
    </section>
  );
}
