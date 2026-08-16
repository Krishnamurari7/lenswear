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
  <a href="#top" aria-label="Lenswear Films, home"><img class="nav-logo" data-img="logo_mark" alt="Lenswear Films"></a>
  <nav class="nav-mid">
    <div id="nav-gallery-slot"></div>
    <a href="#works">Works</a>
    <a href="#voices">Voices</a>
    <a href="#contact">Contact</a>
  </nav>
  <div class="nav-right">
    <span class="rec" aria-hidden="true"><i></i><span id="tc">00:00:00:00</span></span>
    <a class="nav-tel" href="tel:+919022766668">+91 90227 66668</a>
    <button class="burger" id="burger" aria-label="Open menu" aria-expanded="false"><i></i><i></i></button>
  </div>
</header>

<!-- menu -->
<div class="menu" id="menu">
  <ul>
    <li id="nav-gallery-menu-slot"></li>
    <li><a href="#works">Works</a></li>
    <li><a href="#voices">Voices</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <div class="menu-foot">
    <span class="mono">Goregaon · Mumbai</span>
    <span class="mono">+91 90227 66668</span>
    <span class="mono">@lenswear</span>
  </div>
</div>
`;

export const siteMarkupHero = `
  <!-- ============ HERO ============ -->
  <section class="hero" id="hero" data-dark>
    <canvas id="heroCanvas"></canvas>
    <div class="hero-scrim"></div>
    <div class="hero-in">
      <div class="hero-top">
        <p class="mono">Photography &amp; Cinematography<br>Since 2018 · Mumbai</p>
        <p class="mono" style="text-align:right">Film City Road<br>Goregaon 400063</p>
      </div>

      <div class="hero-mid">
        <img class="hero-logo" data-img="logo_line" alt="Lenswear Films">
        <div class="hero-tag">
          <span>Wedding</span><i>•</i><span>Films</span><i>•</i><span>Post-Production</span>
        </div>
      </div>

      <div class="hero-base">
        <p class="mono">7+ years · Weddings · Commercial · Concerts · Post</p>
        <div class="cue"><i></i><span class="mono">Scroll to fly</span></div>
      </div>
    </div>
  </section>

  <!-- ============ PHOTO STRIP ============ -->
  <div class="strip" data-dark aria-hidden="true"><div class="strip-track" id="strip"></div></div>
`;

export const siteMarkupFooter = `
<!-- ============ FOOTER ============ -->
<footer class="foot" id="contact" data-dark>
  <div class="wrap">
    <div class="foot-line" id="footLine"><img data-img="logo_line" alt="Lenswear Films"></div>
    <div class="foot-cols">
      <div><h4>Elsewhere</h4><ul>
        <li><a href="https://www.instagram.com/lenswear" target="_blank" rel="noopener">Instagram</a></li>
        <li><a href="https://wa.me/919022766668" target="_blank" rel="noopener">WhatsApp</a></li>
        <li><a href="mailto:Lenswearphotography@gmail.com">Email</a></li>
        <li><a href="tel:+919022766668">+91 90227 66668</a></li></ul></div>
      <div><h4>Studio address</h4>
        <p>16th, Shree Wageshwari, opp. Satellite royal<br>Film City Road, Pankaj Shah Marg,<br>Goregaon, Mumbai, Maharashtra 400063</p></div>
    </div>
    <div class="foot-base">
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
