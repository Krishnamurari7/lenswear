export const siteMarkupChrome = `<div class="grain"></div>

<!-- loader -->
<div class="loader" id="loader">
  <div class="loader-in">
    <div class="loader-logo"><img data-img="logo_mark" alt="Lenswear Films"></div>
    <div class="loader-row">
      <span>Wedding · Films · Post-production</span>
      <span id="lcount">00</span>
    </div>
  </div>
</div>

<div class="cur" id="cur"></div>
<div class="cur-r" id="curR"><b id="curLabel"></b></div>
<div class="srv-peek" id="peek"><img id="peekImg" alt=""></div>

<!-- nav -->
<header class="nav" id="nav">
  <a href="/" aria-label="Lenswear Films, home"><img class="nav-logo" data-img="logo_mark" alt="Lenswear Films"></a>
  <nav class="nav-mid">
    <div id="nav-gallery-slot"></div>
    <a href="/#works">Works</a>
    <a href="/#touch">Enquire</a>
    <a href="/contact">Contact</a>
  </nav>
  <div class="nav-right">
    <span class="rec" aria-hidden="true"><i></i><span id="tc">00:00:00:00</span></span>
    <a class="nav-tel" href="tel:+919022766668">+91 90227 66668</a>
    <a class="nav-wa" href="https://wa.me/919022766668" target="_blank" rel="noopener" data-cursor="Chat">WhatsApp us</a>
    <button class="burger" id="burger" aria-label="Open menu" aria-expanded="false"><i></i><i></i></button>
  </div>
</header>

<!-- menu -->
<div class="menu" id="menu">
  <div id="nav-gallery-menu-slot"></div>
  <ul>
    <li><a href="/#works">Works</a></li>
    <li><a href="/#touch">Enquire</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
  <a class="nav-wa" href="https://wa.me/919022766668" target="_blank" rel="noopener">WhatsApp us</a>
  <div class="menu-foot">
    <span class="mono">Goregaon · Mumbai</span>
    <span class="mono">+91 90227 66668</span>
    <span class="mono">@lenswear</span>
  </div>
</div>
`;

export const siteMarkupHero = `
  <!-- ============ HERO ============ -->
  <section class="hero" id="hero">
    <div class="hero-bg" aria-hidden="true">
      <video
        class="hero-bg-video"
        src="/Video/${encodeURIComponent("HD __ KAJAL A. __ MOBILLA.mp4")}"
        poster="/Video/HD____KAJAL_A____MOBILLA-poster.jpg"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
      ></video>
    </div>
    <div class="hero-in">
      <h1 class="hero-brand">
        <span class="hero-rotate" id="heroRotate" aria-live="polite">
          <span class="hero-rotate-word is-in" id="heroRotateWord">Wedding</span>
        </span>
      </h1>
      <p class="hero-line">The film you deserve has never been shot before.</p>

      <div class="hero-arc" id="heroArc" aria-hidden="true">
        <div class="hero-arc-track" id="heroArcTrack"></div>
      </div>

      <p class="hero-copy">We film weddings, commercial work and concerts from a blank page. No templates, no stock cuts, no shortcuts.</p>
      <div class="hero-cta">
        <a href="https://wa.me/919022766668" target="_blank" rel="noopener" data-cursor="Chat">WhatsApp us</a>
        <a href="/#works" data-cursor="Works">See Works</a>
      </div>
    </div>
  </section>
`;

export const siteMarkupFooter = `
<!-- ============ FOOTER ============ -->
<footer class="foot">
  <div class="wrap">
    <div class="foot-main">
      <div class="foot-col">
        <h4>Elsewhere</h4>
        <ul>
          <li><a href="https://www.instagram.com/lenswear" target="_blank" rel="noopener">Instagram</a></li>
          <li><a href="https://wa.me/919022766668" target="_blank" rel="noopener">WhatsApp</a></li>
          <li><a href="mailto:Lenswearphotography@gmail.com">Email</a></li>
          <li><a href="tel:+919022766668">+91 90227 66668</a></li>
        </ul>
      </div>
      <div class="foot-col">
        <h4>Studio address</h4>
        <p>16th, Shree Wageshwari, opp. Satellite royal<br>Film City Road, Pankaj Shah Marg,<br>Goregaon, Mumbai, Maharashtra 400063</p>
      </div>
      <div class="foot-col foot-col-cta">
        <h4>Bookings Open</h4>
        <p class="foot-cta-copy">Now booking 2026 &amp; 2027 weddings.</p>
        <a class="foot-cta" href="https://wa.me/919022766668" target="_blank" rel="noopener"><span>WhatsApp us</span></a>
      </div>
    </div>
    <div class="foot-base">
      <a class="foot-brand" id="footLine" href="/" aria-label="Lenswear Films, home">
        <img data-img="logo_line" alt="Lenswear Films">
      </a>
      <span class="mono">© 2026 Lenswear Films</span>
      <span class="mono" id="footTc">Rec 00:00:00:00</span>
      <span class="mono">Mumbai, India</span>
    </div>
  </div>
</footer>
`;

export const siteMarkup =
  siteMarkupChrome +
  `<main id="top">${siteMarkupHero}</main>` +
  siteMarkupFooter;
