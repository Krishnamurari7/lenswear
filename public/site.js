/* =========================================================
   LENSWEAR FILMS — interaction + WebGL
   Images live in the IMG map below (one copy each).
   Swap any value for a normal URL like 'img/wedding-01.jpg'
   and everything — page and 3D — updates.
   ========================================================= */
var IMG = {
  "logo_mark": "/images/logo_mark.svg",
  "logo_line": "/images/logo_line.svg",

  /* Wedding / signature frames */
  "ct1": "/images/South%20Indian/IMG_8137.webp",
  "ct2": "/images/Mixed/Black%20and%20White%20Modern%20Fashion%20Collection%20Flyer.webp",
  "ct3": "/images/Mixed/DEE_6636.webp",

  /* Studio / behind the work */
  "desk": "/images/Mixed/IMG_7947.webp",
  "naved1": "/images/Mixed/IMG_7947.webp",
  "naved2": "/images/Mixed/IMG_8033.webp",
  "naved3": "/images/Mixed/IMG_8056.webp",

  /* Services + gallery */
  "srv1": "/images/Mixed/3rd.webp",
  "srv2": "/images/Mixed/2nd.webp",
  "srv3": "/images/Jay%20%26%20Dhwani/Dusty%20Black%20Elegant%20Wedding%20Photo%20Collage%20Instagram%20Post.webp",
  "srv4": "/images/Mixed/Black%20and%20White%20Modern%20Fashion%20Collection%20Flyer.webp",
  "srv5": "/images/Mixed/IMG_8056.webp",
  "srv6": "/images/Shilpa%20%26%20Manish/Monochrome%20Minimalist%20Fashion%20Instagram%20Post.webp",

  /* Extra strip / hero frames from each shoot */
  "jd1": "/images/Jay%20%26%20Dhwani/1.webp",
  "jd2": "/images/Jay%20%26%20Dhwani/Brown%20and%20Gold%20Simple%20Minimalist%20Elegant%20Luxury%20Jewelry%20Catalogue%20Instagram%20Post.webp",
  "sm1": "/images/Shilpa%20%26%20Manish/IMG_8198.webp",
  "sm2": "/images/Shilpa%20%26%20Manish/1.webp",
  "mx1": "/images/Mixed/6c4858a4-c746-435e-86d6-da29b6b83a52.webp",
  "mx2": "/images/Mixed/1b32b135-25ef-4395-b96c-a175ff99fd7a.webp",
  "mx3": "/images/Mixed/Beige%20Minimalist%20Men%27s%20Fashion%20Photo%20Collage%20Instagram%20Post.webp",
  "si1": "/images/South%20Indian/IMG_8137.webp"
};


(function(){
'use strict';
var REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
var COARSE  = matchMedia('(pointer: coarse)').matches;
var $  = function(s,c){ return (c||document).querySelector(s); };
var $$ = function(s,c){ return Array.prototype.slice.call((c||document).querySelectorAll(s)); };
var lerp  = function(a,b,n){ return a+(b-a)*n; };
var clamp = function(v,a,b){ return Math.min(b, Math.max(a,v)); };
var vh = innerHeight, vw = innerWidth;

/* ---------------- content ---------------- */
var STRIP = [
  ['ct1','Wedding'],['jd1','Jay & Dhwani'],['srv4','Commercial'],['sm1','Bridal party'],
  ['ct3','Portrait'],['mx1','Riya & Vishal'],['srv6','On location'],['mx2','Details'],
  ['srv3','Wedding day'],['srv2','Studio'],['srv5','Moments'],['desk','On set'],
  ['si1','South Indian'],['sm2','Groom'],['mx3','Bridal'],['jd2','Jewellery']
];
var FRAMES = [
  ['ct1','Weddings','Full-day coverage · films · albums'],
  ['jd1','Jay & Dhwani','Ceremony · portraits · album'],
  ['srv4','Commercial','Lookbooks · campaigns · brand films'],
  ['ct3','Portrait','Night light · doorway · stills'],
  ['srv1','Post-production','Edit · colour · sound · delivery'],
  ['sm1','Bridal stories','Getting ready · tribe · tradition'],
  ['srv6','On location','Outstation, monsoon, whatever it takes'],
  ['mx1','Riya & Vishal','Couple portraits · celebration']
];
var SERVICES = [
  ['Post Production Services','Edit, colour, sound and delivery — including footage we did not shoot.','srv1'],
  ['Photography & Videography','Stills and motion from one team, on the same day, matched in the grade.','srv3'],
  ['Small Studio for Indoor Shoots','Our own floor on Film City Road for portraits, products and tests.','srv2'],
  ['Commercial & Fashion','Lookbooks, campaigns and brand films, from treatment to master.','srv4'],
  ['Wedding & Events','Weddings, receptions, concerts and everything that only happens once.','ct1']
];
var HERO_SET = ['ct1','jd1','srv4','ct3','sm1','mx1','srv6','srv5','desk'];

/* ---------------- images into the DOM ---------------- */
$$('[data-img]').forEach(function(el){
  var k = el.getAttribute('data-img');
  if (IMG[k]) el.src = IMG[k];
});

/* ---------------- loader ---------------- */
(function(){
  var loader = $('#loader'), count = $('#lcount');
  requestAnimationFrame(function(){ loader.classList.add('go'); });
  var t0 = performance.now(), dur = REDUCED ? 320 : 2050;
  (function step(now){
    var p = clamp((now-t0)/dur, 0, 1), e = 1-Math.pow(1-p,3);
    count.textContent = (Math.round(e*100)<10?'0':'') + Math.round(e*100);
    if (p<1) requestAnimationFrame(step);
    else {
      loader.classList.add('done');
      document.body.classList.remove('is-loading');
      $('#hero').classList.add('in');
    }
  })(t0);
})();

/* ---------------- timecode ---------------- */
(function(){
  var a = $('#tc'), b = $('#footTc'), t0 = Date.now();
  var pad = function(n){ return (n<10?'0':'')+n; };
  setInterval(function(){
    var ms = Date.now()-t0, s = Math.floor(ms/1000);
    var str = pad(Math.floor(s/3600))+':'+pad(Math.floor(s/60)%60)+':'+pad(s%60)+':'+pad(Math.floor((ms%1000)/41.67));
    a.textContent = str; b.textContent = 'Rec ' + str;
  }, 90);
})();

/* ---------------- cursor ---------------- */
var CUR = {x:vw/2,y:vh/2,rx:vw/2,ry:vh/2,mx:0,my:0};
(function(){
  if (COARSE) return;
  var dot = $('#cur'), ring = $('#curR'), label = $('#curLabel');
  addEventListener('mousemove', function(e){
    CUR.x = e.clientX; CUR.y = e.clientY;
    CUR.mx = (e.clientX/vw)*2-1; CUR.my = (e.clientY/vh)*2-1;
  }, {passive:true});
  document.addEventListener('mouseover', function(e){
    var t = e.target.closest ? e.target.closest('[data-cursor]') : null;
    if (t){ label.textContent = t.getAttribute('data-cursor'); document.body.classList.add('cur-hot'); }
    else document.body.classList.remove('cur-hot');
  });
  CUR.render = function(){
    dot.style.transform = 'translate('+CUR.x+'px,'+CUR.y+'px) translate(-50%,-50%)';
    CUR.rx = lerp(CUR.rx, CUR.x, 0.17); CUR.ry = lerp(CUR.ry, CUR.y, 0.17);
    ring.style.transform = 'translate('+CUR.rx+'px,'+CUR.ry+'px) translate(-50%,-50%)';
  };
})();

/* ---------------- nav + menu ---------------- */
var nav = $('#nav');
(function(){
  var burger = $('#burger'), menu = $('#menu'), last = 0;
  burger.addEventListener('click', function(){
    var open = document.body.classList.toggle('menu-open');
    burger.setAttribute('aria-expanded', open?'true':'false');
    burger.setAttribute('aria-label', open?'Close menu':'Open menu');
  });
  menu.addEventListener('click', function(e){
    if (e.target.closest('a')){ document.body.classList.remove('menu-open');
      burger.setAttribute('aria-expanded','false'); }
  });
  addEventListener('scroll', function(){
    var y = scrollY;
    if (!document.body.classList.contains('menu-open'))
      nav.classList.toggle('hide', y > last && y > 300);
    last = y;
  }, {passive:true});
})();

/* ---------------- photo strip ---------------- */
(function(){
  var t = $('#strip');
  if (!t) return;
  var html = '';
  for (var r=0;r<2;r++) STRIP.forEach(function(s){
    html += '<figure><img src="'+IMG[s[0]]+'" alt=""><figcaption>'+s[1]+'</figcaption></figure>';
  });
  t.innerHTML = html;
})();

/* ---------------- roles ---------------- */
(function(){
  var btns = $$('#roles button'), figs = $$('#whoStrip figure');
  if (!btns.length) return;
  function pick(b){
    btns.forEach(function(x){ x.classList.toggle('on', x===b); });
    var i = +b.getAttribute('data-i');
    figs.forEach(function(f,k){ f.classList.toggle('on', k===i); });
  }
  btns.forEach(function(b){
    b.addEventListener('mouseenter', function(){ pick(b); });
    b.addEventListener('click', function(){ pick(b); });
    b.addEventListener('focus', function(){ pick(b); });
  });
})();

/* ---------------- services + cursor peek ---------------- */
(function(){
  var box = $('#srv'), peek = $('#peek'), peekImg = $('#peekImg');
  if (!box) return;
  SERVICES.forEach(function(s,i){
    var row = document.createElement('article');
    row.className = 'srv-row rv';
    row.setAttribute('data-key', s[2]);
    row.innerHTML = '<span class="k">0'+(i+1)+'</span><div><h3 class="caps">'+s[0]+'</h3>'+
      '<p>'+s[1]+'</p></div><span class="go">Enquire →</span>';
    row.addEventListener('click', function(){
      var el = $('#contact');
      if (el) el.scrollIntoView({behavior: REDUCED?'auto':'smooth'});
    });
    box.appendChild(row);
  });
  if (COARSE) return;
  var rows = $$('.srv-row', box);
  rows.forEach(function(r){
    r.addEventListener('mouseenter', function(){
      peekImg.src = IMG[r.getAttribute('data-key')];
      peek.classList.add('on');
    });
    r.addEventListener('mouseleave', function(){ peek.classList.remove('on'); });
  });
})();

/* ---------------- reveals ---------------- */
(function(){
  var t = $$('.rv, .g, .hr, .shot, #footLine');
  if (!('IntersectionObserver' in window)){ t.forEach(function(e){ e.classList.add('in'); }); return; }
  var io = new IntersectionObserver(function(es){
    es.forEach(function(e){
      if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, {rootMargin:'0px 0px -10% 0px', threshold:0.1});
  t.forEach(function(e,i){ e.style.transitionDelay = ((i%4)*0.06)+'s'; io.observe(e); });
})();

/* ---------------- numbers ---------------- */
(function(){
  var io = new IntersectionObserver(function(es){
    es.forEach(function(e){
      if (!e.isIntersecting) return;
      var el = e.target, to = +el.getAttribute('data-count');
      var suf = el.getAttribute('data-suffix')||'', pad = el.getAttribute('data-pad');
      var t0 = performance.now();
      (function run(now){
        var p = clamp((now-t0)/1300,0,1), v = Math.round(to*(1-Math.pow(1-p,3)));
        el.textContent = (pad && v<10 ? '0'+v : v) + suf;
        if (p<1) requestAnimationFrame(run);
      })(t0);
      io.unobserve(el);
    });
  }, {threshold:0.5});
  $$('[data-count]').forEach(function(e){ io.observe(e); });
})();

/* ============================================================
   WebGL — shared texture loader
   ============================================================ */
var HAS3D = (typeof THREE !== 'undefined');
var loader = HAS3D ? new THREE.TextureLoader() : null;
var TEX = {};
function tex(k){
  if (!TEX[k]) TEX[k] = loader.load(IMG[k]);
  return TEX[k];
}
function photoMesh(key, height, onReady){
  var t = tex(key);
  var m = new THREE.Mesh(
    new THREE.PlaneGeometry(1,1),
    new THREE.MeshBasicMaterial({map:t, transparent:true, opacity:1})
  );
  m.scale.set(height*1.5, height, 1);
  function fit(){
    var im = t.image;
    if (im && im.width) m.scale.set(height*(im.width/im.height), height, 1);
    if (onReady) onReady(m);
  }
  if (t.image && t.image.width) fit(); else t.image ? (t.image.onload = fit) : setTimeout(fit, 260);
  setTimeout(fit, 700);
  return m;
}

/* ---------------- hero: frames adrift ---------------- */
var hero = null;
function initHero(){
  var canvas = $('#heroCanvas'), sec = $('#hero');
  if (!HAS3D) { canvas.style.display='none'; return; }
  var r;
  try { r = new THREE.WebGLRenderer({canvas:canvas, antialias:true, alpha:true}); }
  catch(e){ canvas.style.display='none'; return; }
  r.setPixelRatio(Math.min(devicePixelRatio||1, COARSE?1.6:2));
  r.setSize(sec.clientWidth, sec.clientHeight, false);
  var scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x0B0B0C, 10, 36);
  var cam = new THREE.PerspectiveCamera(46, sec.clientWidth/sec.clientHeight, 0.1, 60);
  var g = new THREE.Group(); scene.add(g);
  var seeds = [
    [-3.5, 1.35,-4.4, 2.7],[ 3.7,-1.15,-5.0, 3.0],[-4.3,-1.85,-8.2, 2.6],
    [ 4.5, 1.95,-9.0, 2.9],[-2.1, 2.75,-12.4, 2.5],[ 2.3,-2.55,-13.2, 2.7],
    [-5.1, 0.35,-16.6, 2.8],[ 5.2, 0.85,-17.4, 2.6],[ 0.15,-1.2,-20.5, 3.2]
  ];
  var items = [];
  HERO_SET.forEach(function(k,i){
    var s = seeds[i % seeds.length];
    var m = photoMesh(k, s[3]);
    m.position.set(s[0], s[1], s[2]);
    m.rotation.y = (s[0] > 0 ? -0.22 : 0.22);
    m.rotation.z = (i%2?1:-1) * 0.015;
    g.add(m); items.push({m:m, base:s[1], ph:i*1.3});
  });
  hero = {r:r, scene:scene, cam:cam, g:g, items:items, sec:sec, vis:true, dolly:0};
  if ('IntersectionObserver' in window)
    new IntersectionObserver(function(e){ hero.vis = e[0].isIntersecting; },{threshold:0.01}).observe(sec);
}

/* ---------------- the FPV flight ---------------- */
var flight = null;
function initFlight(){
  var canvas = $('#flightCanvas'), sec = $('#flight'), pin = $('.flight-pin');
  if (!canvas || !sec || !pin) return;
  if (!HAS3D){ canvas.style.display='none'; return; }
  var r;
  try { r = new THREE.WebGLRenderer({canvas:canvas, antialias:true, alpha:true}); }
  catch(e){ canvas.style.display='none'; return; }
  var w = pin.clientWidth, h = pin.clientHeight;
  r.setPixelRatio(Math.min(devicePixelRatio||1, COARSE?1.5:2));
  r.setSize(w, h, false);
  var scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x0B0B0C, 5, 34);
  var cam = new THREE.PerspectiveCamera(62, w/h, 0.1, 90);
  var SP = 7.4, side = COARSE ? 2.55 : 3.15;
  var items = [];
  FRAMES.forEach(function(f,i){
    var left = i % 2 === 0;
    var m = photoMesh(f[0], 3.5);
    m.position.set(left ? -side : side, (i%4===1?0.5:-0.25), -3 - i*SP);
    m.rotation.y = left ? 0.62 : -0.62;
    scene.add(m);
    items.push({m:m, z:m.position.z, label:f[1], sub:f[2]});
  });
  /* dust for speed */
  var pg = new THREE.BufferGeometry(), N = COARSE?260:520, pos = new Float32Array(N*3);
  for (var i=0;i<N;i++){
    var a = Math.random()*Math.PI*2, rad = 1.2 + Math.random()*5.5;
    pos[i*3]   = Math.cos(a)*rad;
    pos[i*3+1] = Math.sin(a)*rad*0.7;
    pos[i*3+2] = -Math.random()*(SP*FRAMES.length+14) + 4;
  }
  pg.setAttribute('position', new THREE.BufferAttribute(pos,3));
  var pts = new THREE.Points(pg, new THREE.PointsMaterial({
    color:0xE1341E, size:0.035, sizeAttenuation:true, transparent:true, opacity:0.55
  }));
  scene.add(pts);

  flight = {
    r:r, scene:scene, cam:cam, items:items, pts:pts, sec:sec, pin:pin, vis:false,
    len:SP*(FRAMES.length-1)+4.5, prog:0, sprog:0, cur:-1,
    alt:$('#hAlt'), spd:$('#hSpd'), bat:$('#hBat'), frm:$('#hFrm'),
    lab:$('#flLabel'), sub:$('#flSub'), bar:$('#flBar')
  };
  if ('IntersectionObserver' in window)
    new IntersectionObserver(function(e){ flight.vis = e[0].isIntersecting; },{threshold:0.01}).observe(sec);
  layoutFlight();
}
function layoutFlight(){
  if (!flight) return;
  var screens = innerWidth < 760 ? 3.6 : 4.6;
  flight.sec.style.height = Math.round(innerHeight * screens) + 'px';
}

/* ============================================================
   scroll — native only (JS wheel hijack was causing jank)
   ============================================================ */
function maxScroll(){ return Math.max(1, document.documentElement.scrollHeight - innerHeight); }
document.addEventListener('click', function(e){
  var a = e.target.closest('a[href^="#"]');
  if (!a) return;
  var id = a.getAttribute('href');
  if (id === '#') return;
  var el = document.querySelector(id);
  if (!el) return;
  e.preventDefault();
  var y = clamp(el.getBoundingClientRect().top + scrollY - 6, 0, maxScroll());
  scrollTo({top:y, behavior: REDUCED?'auto':'smooth'});
});

/* ============================================================
   master loop
   ============================================================ */
var PEEK = $('#peek'), peekX = vw/2, peekY = vh/2;
var onDark = false;
var lastT = performance.now(), dtf = 1;
function K(b){ return 1 - Math.pow(1-b, dtf); }

var scrolling = false, scrollIdle = 0;
addEventListener('scroll', function(){
  scrolling = true;
  clearTimeout(scrollIdle);
  scrollIdle = setTimeout(function(){ scrolling = false; }, 140);
}, {passive:true});

function frame(now){
  var t = now*0.001;
  dtf = clamp((now-lastT)/16.667, 0.35, 4); lastT = now;

  if (CUR.render) CUR.render();

  /* cursor peek follows with lag */
  if (PEEK && !scrolling){
    peekX = lerp(peekX, CUR.x + 150, K(0.12));
    peekY = lerp(peekY, CUR.y, K(0.12));
    PEEK.style.left = peekX+'px'; PEEK.style.top = peekY+'px';
  }

  /* nav ink/paper — sample below chrome so sticky panels read correctly */
  if (!scrolling || (now|0) % 2 === 0){
    var d = false;
    var stack = document.elementsFromPoint(Math.min(vw*0.5, vw - 24), 72);
    for (var s=0;s<stack.length;s++){
      var node = stack[s];
      if (!node || !node.closest) continue;
      if (node.closest('.nav,.grain,.cur,.cur-r,.loader,.menu')) continue;
      d = !!node.closest('[data-dark]');
      break;
    }
    if (d !== onDark){ onDark = d; document.body.classList.toggle('on-dark', d); }
  }

  /* hero */
  if (hero && hero.vis){
    var hr = hero.sec.getBoundingClientRect();
    var hp = clamp(-hr.top / Math.max(1, hero.sec.offsetHeight), 0, 1);
    hero.dolly = lerp(hero.dolly, hp*9, K(0.08));
    hero.cam.position.z = hero.dolly;
    hero.cam.position.x = lerp(hero.cam.position.x, (CUR.mx||0)*1.5, K(0.045));
    hero.cam.position.y = lerp(hero.cam.position.y, -(CUR.my||0)*0.9, K(0.045));
    hero.cam.lookAt(0, 0, hero.dolly - 12);
    if (!scrolling){
      hero.items.forEach(function(it,i){
        it.m.position.y = it.base + Math.sin(t*0.35 + it.ph)*0.16;
        it.m.rotation.z = Math.sin(t*0.22 + it.ph)*0.012 + (i%2?0.012:-0.012);
      });
    }
    hero.r.render(hero.scene, hero.cam);
  }

  /* flight */
  if (flight && flight.vis){
    var fr = flight.sec.getBoundingClientRect();
    var span = Math.max(1, flight.sec.offsetHeight - innerHeight);
    var p = clamp(-fr.top/span, 0, 1);
    flight.prog = p;
    var prev = flight.sprog;
    flight.sprog = lerp(flight.sprog, p, K(scrolling ? 0.22 : 0.1));
    var z = 5 - flight.sprog*flight.len;
    var cm = flight.cam;
    cm.position.set(
      Math.sin(t*0.55)*0.30 + (CUR.mx||0)*0.35,
      Math.sin(t*0.41+1.2)*0.22 - (CUR.my||0)*0.22,
      z
    );
    cm.rotation.z = Math.sin(t*0.33)*0.022;
    cm.rotation.y = Math.sin(t*0.27)*0.018 + (CUR.mx||0)*0.03;
    flight.pts.position.z = 0;
    /* opacity by distance so frames arrive out of the dark */
    var near = 1e9, nearI = 0;
    flight.items.forEach(function(it,i){
      var dz = Math.abs(it.z - z);
      if (dz < near){ near = dz; nearI = i; }
      it.m.material.opacity = clamp(1 - Math.max(0, (dz-13))/9, 0.05, 1);
    });
    flight.r.render(flight.scene, flight.cam);

    /* HUD */
    var v = Math.abs(flight.sprog - prev) * 3800;
    flight.alt.textContent = (1.6 + flight.sprog*11.4).toFixed(1) + ' m';
    flight.spd.textContent = Math.round(clamp(v,0,96)) + ' km/h';
    flight.bat.textContent = Math.round(100 - flight.sprog*37) + '%';
    flight.frm.textContent = (nearI+1<10?'0':'') + (nearI+1) + ' / 0' + flight.items.length;
    flight.bar.style.transform = 'scaleX('+p.toFixed(4)+')';
    if (nearI !== flight.cur){
      flight.cur = nearI;
      var it = flight.items[nearI];
      flight.lab.style.opacity = 0; flight.lab.style.transform = 'translateY(14px)';
      setTimeout(function(){
        flight.lab.textContent = it.label; flight.sub.textContent = it.sub;
        flight.lab.style.opacity = 1; flight.lab.style.transform = 'translateY(0)';
      }, 170);
    }
  }

  /* gallery parallax — skip while scrolling to keep compositor free */
  if (!REDUCED && !scrolling){
    for (var q=0;q<GAL.length;q++){
      var gr = GAL[q].f.getBoundingClientRect();
      if (gr.bottom < -80 || gr.top > vh+80) continue;
      var off = ((gr.top + gr.height/2) - vh/2) / vh;
      GAL[q].w.style.transform = 'translate3d(0,'+(off*-20).toFixed(2)+'px,0)';
    }
  }

  requestAnimationFrame(frame);
}
var GAL = $$('.gal .g').map(function(f){
  var img = f.querySelector('img'), w = document.createElement('div');
  w.className = 'pw'; f.insertBefore(w, img); w.appendChild(img);
  return {f:f, w:w};
});

/* ---------------- resize ---------------- */
function onResize(){
  vh = innerHeight; vw = innerWidth;
  if (hero){
    var s = hero.sec;
    hero.r.setSize(s.clientWidth, s.clientHeight, false);
    hero.cam.aspect = s.clientWidth/s.clientHeight; hero.cam.updateProjectionMatrix();
  }
  if (flight){
    layoutFlight();
    var w = flight.pin.clientWidth, h = flight.pin.clientHeight;
    flight.r.setSize(w, h, false);
    flight.cam.aspect = w/h; flight.cam.updateProjectionMatrix();
  }
}

/* ---------------- boot ---------------- */
initHero();
setTimeout(initFlight, 30);
addEventListener('resize', onResize);
addEventListener('orientationchange', function(){ setTimeout(onResize, 260); });
setTimeout(onResize, 800);
requestAnimationFrame(frame);
})();
