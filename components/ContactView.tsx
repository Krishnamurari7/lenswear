const WA_URL = "https://wa.me/919022766668";
const MAP_QUERY =
  "16th Shree Wageshwari opp Satellite Royal Film City Road Pankaj Shah Marg Goregaon Mumbai 400063";
const MAP_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=17&hl=en&output=embed`;
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`;

export default function ContactView() {
  return (
    <section className="contact sec" id="contact" data-dark>
      <div className="wrap contact-in">
        <div>
          <p className="mono contact-kicker">Goregaon · Mumbai</p>
          <h2>
            Let&apos;s talk
            <br />
            about your
            <br />
            <em>wedding.</em>
          </h2>
          <a
            className="wa"
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="Chat"
          >
            <span>WhatsApp us</span>
          </a>
        </div>
        <div>
          <div className="rows">
            <a href="tel:+919022766668">
              <span className="mono">Phone</span>
              <b>+91 90227 66668</b>
            </a>
            <a href="mailto:Lenswearphotography@gmail.com">
              <span className="mono">Email</span>
              <b>Lenswearphotography@gmail.com</b>
            </a>
            <a
              href="https://www.instagram.com/lenswear"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mono">Instagram</span>
              <b>@lenswear</b>
            </a>
            <a href={MAP_LINK} target="_blank" rel="noopener noreferrer">
              <span className="mono">Studio</span>
              <b>
                16th, Shree Wageshwari, opp. Satellite royal, Film City Road,
                Pankaj Shah Marg, Goregaon, Mumbai 400063
              </b>
            </a>
          </div>
        </div>
      </div>
      <div className="wrap contact-map-wrap">
        <div className="contact-map">
          <iframe
            title="Lenswear Films studio on Google Maps"
            src={MAP_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <p className="mono contact-map-note">
          <span>Film City Road, Goregaon</span>
          <a href={MAP_LINK} target="_blank" rel="noopener noreferrer">
            Open in Google Maps ↗
          </a>
        </p>
      </div>
    </section>
  );
}
