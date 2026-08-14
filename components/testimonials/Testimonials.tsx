import { TESTIMONIALS, type Testimonial } from "@/lib/testimonials";

function Card({ item }: { item: Testimonial }) {
  return (
    <figure className="tm-card">
      <blockquote className="tm-quote">{item.quote}</blockquote>
      <figcaption className="tm-meta">
        <span className="tm-name">{item.name}</span>
        <span className="tm-detail">{item.detail}</span>
      </figcaption>
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
    <div className={`tm-rail${reverse ? " is-reverse" : ""}`} aria-hidden={reverse}>
      <div className="tm-track">
        {loop.map((item, i) => (
          <Card key={`${item.name}-${i}`} item={item} />
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
      <div className="tm-head wrap">
        <p className="mono red">Client voices</p>
        <h2 id="tm-title" className="tm-title">
          What they said
          <br />
          after the cut
        </h2>
      </div>
      <div className="tm-marquee">
        <Track items={rowA} />
        <Track items={rowB} reverse />
      </div>
    </section>
  );
}
