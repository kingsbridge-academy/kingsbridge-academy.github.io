/* ==========================================================
   MENÚ PRINCIPAL · KINGSBRIDGE ENGLISH ACADEMY
   Un solo archivo para todo el sitio.

   Para usarlo en una página, agrega antes de </body>:
     <script src="menu.js" defer></script>          (páginas en la raíz)
     <script src="../menu.js" defer></script>       (páginas dentro de una carpeta)

   Para agregar, quitar o reordenar botones, edita la lista ITEMS.
     label  texto del botón
     desc   descripción corta (se ve en el menú del celular)
     href   ruta desde la raíz del sitio, o un enlace completo
     icon   nombre del ícono (ver ICONS)
     cta    true = botón destacado (verde, como WhatsApp)
   ========================================================== */
(function () {
  "use strict";

  var ITEMS = [
    { label: "Inicio",               desc: "Página principal de la academia",         href: "index.html",           icon: "home" },
    { label: "Sobre nosotros",       desc: "Quiénes somos y cómo enseñamos",           href: "sobre-nosotros.html",  icon: "info" },
    { label: "Práctica interactiva", desc: "Ejercicios tipo examen",           href: "practica/index.html",  icon: "pen"  },
    { label: "Examen de nivel",      desc: "Descubre tu nivel de inglés, A1–C1",       href: "examen-de-nivel.html", icon: "star" },
    { label: "Cursos", icon: "star", children: [
      { label: "Inglés de negocios",          desc: "Finanzas, bolsa y cripto en inglés",   href: "ingles-negocios.html",      icon: "star" },
      { label: "Pronunciación con profesor",  desc: "Audio por frase, bien explicado",      href: "pronunciacion.html",        icon: "pen"  },
      { label: "Spanglish",                   desc: "Historia, uso real y práctica",        href: "curso-spanglish.html",      icon: "star" }
    ] },
    { label: "Más", icon: "star", children: [
      { label: "Herramientas gratis",   desc: "Prueba de nivel gratuita",                 href: "index.html#herramientas",  icon: "star" },
      { label: "My Day",                desc: "Aprender inglés jugando",                  href: "my-day-ninos.html",        icon: "star" },
      { label: "Libro 3D de ajedrez",   desc: "Aprende inglés con un libro interactivo",  href: "libro-ajedrez.html",       icon: "star" },
      { label: "Pre-inscripción",       desc: "Reserva tu cupo",                          href: "https://tally.so/r/2EQWlj", icon: "form", external: true }
    ] },
    { label: "For English speakers", desc: "Spanish for English speakers",             href: "spanish/index.html",   icon: "pen", flags: true },
    { label: "WhatsApp",             desc: "Pide información y precios",               href: "https://wa.me/kingsbridge.academy", icon: "chat", external: true, cta: true }
  ];

  /* Menú en inglés para las páginas de Spanish (data-lang="en") */
  var ITEMS_EN = [
    { label: "Home",                 desc: "Spanish for English speakers",             href: "spanish/index.html",          icon: "home", flags: true },
    { label: "Spanish Practice",     desc: "Interactive exercises, A1 to C1",           href: "spanish/practice/index.html", icon: "pen"  },
    { label: "Level Test",           desc: "Find your Spanish level, A1 to C1",         href: "spanish/level-test.html", icon: "star" },
    { label: "Travel Spanish",       desc: "60 phrases for your trip",                  href: "spanish/travel.html", icon: "star" },
    { label: "Get Access",           desc: "Full access, paid securely with PayPal",    href: "spanish/payment.html",        icon: "form" },
    { label: "About us",             desc: "Who we are and how we teach",              href: "spanish/about.html",          icon: "info" },
    { label: "Kingsbridge Academy",  desc: "English classes",                href: "index.html",                  icon: "star" },
    { label: "WhatsApp",             desc: "Ask us anything",                          href: "https://wa.me/kingsbridge.academy", icon: "chat", external: true, cta: true }
  ];

  var ICONS = {
    home: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 8h.01"/>',
    pen:  '<path d="M4 20l1-4L16.5 4.5a2.1 2.1 0 013 3L8 19l-4 1z"/><path d="M14.5 6.5l3 3"/>',
    star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
    form: '<rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 2h6v4H9z"/><path d="M9 12h6M9 16h4"/>',
    chat: '<path d="M21 12a8 8 0 01-11.6 7.1L4 20l1-4.6A8 8 0 1121 12z"/>',
    chev: '<path d="M6 9l6 6 6-6"/>'
  };

  /* ---------- ubicación del archivo y de la página ---------- */
  var me = document.currentScript, base = "";
  /* Opciones por página (atributos de la etiqueta <script>):
       data-brand="off"       oculta el nombre de la academia dentro del menú
       data-after="#id"       coloca el menú justo debajo de ese elemento (por defecto, arriba de todo)
       data-menu="off"        (con data-logo) deja solo el logotipo, sin la barra de botones
       data-logo="on"         agrega arriba el logotipo de la academia (tamaño original) y deja
                              logotipo + menú congelados al hacer scroll (como en el index) */
  var OPT = (me && me.dataset) || {};
  var EN = OPT.lang === "en", HOME = OPT.home || "index.html";
  if (EN) ITEMS = ITEMS_EN;
  if (me && me.src) base = me.src.replace(/[^\/]*([?#].*)?$/, "");
  function url(h) { return /^https?:/i.test(h) ? h : base + h; }
  function norm(p) { return p.replace(/index\.html$/, "").replace(/\/+$/, "") || "/"; }
  var here = norm(location.pathname);

  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;"); }
  function ico(it) { return svg(it.icon); }
  function fl(it) { return it.flags ? '<span class="kbfl" aria-hidden="true"><i class="uk"></i><i class="es"></i></span>' : ""; }
  function svg(n) { return '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[n] || "") + "</svg>"; }

  /* ---------- estilos ---------- */
  var css =
    '@font-face{font-family:"KB Inter";font-weight:400;font-style:normal;font-display:swap;src:url(' + base + 'fonts/inter-400.woff) format("woff")}' +
    '@font-face{font-family:"KB Inter";font-weight:600;font-style:normal;font-display:swap;src:url(' + base + 'fonts/inter-600.woff) format("woff")}' +
    ':root{--kb-menu-h:52px}' +
    '#kb-menu{position:sticky;top:0;z-index:1000;background:rgba(6,10,26,.96);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-bottom:1px solid rgba(255,255,255,.14);font-family:"KB Inter",system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;font-weight:600;text-align:left;line-height:1.3;-webkit-font-smoothing:antialiased}' +
    '#kb-menu *{box-sizing:border-box}' +
    '#kb-menu::before{content:"";position:absolute;left:0;right:0;top:0;height:3px;background:linear-gradient(90deg,#1e3fd0,#3b6cff 50%,#1e3fd0);z-index:5;pointer-events:none}' +
    '#kb-menu .brand.kb-wl{background:transparent!important}' +
    '#kb-menu .brand img{box-shadow:0 0 0 1px rgba(255,255,255,.2)!important}' +
    '#kb-menu .in{position:relative;z-index:1;max-width:1480px;margin:0 auto;display:flex;align-items:center;gap:10px;padding:0 16px;height:54px}' +
    '#kb-menu.nobrand .in{justify-content:flex-end}' +
    '#kb-menu .brand{font:600 15px/1.1 "KB Inter",system-ui,sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#fff;text-decoration:none;white-space:nowrap}' +
    '#kb-menu .brand small{display:block;font-size:9px;font-weight:600;letter-spacing:.32em;color:#7aa2ff;margin:3px 0 0;padding:0;line-height:1.2}' +
    '#kb-menu nav{margin-left:auto;display:none;align-items:center;gap:2px}' +
    '#kb-menu a.it,#kb-menu button.dt{display:flex;align-items:center;gap:7px;color:#fff;text-decoration:none;font:600 15px/1.2 "KB Inter",system-ui,sans-serif;letter-spacing:.01em;padding:11px 12px;border:0;border-radius:3px;background:none;white-space:nowrap;cursor:pointer;position:relative;isolation:isolate;overflow:hidden;-webkit-tap-highlight-color:transparent;transition:color .2s,box-shadow .25s,transform .1s}' +
    '#kb-menu a.it::before,#kb-menu button.dt::before{content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg,#1e3fd0,#3b6cff);transform:scaleX(0);transform-origin:left center;transition:transform .3s cubic-bezier(.2,.7,.2,1)}' +
    '#kb-menu nav a.it svg{display:none}' +
    '#kb-menu a.it svg{color:#7aa2ff;flex:none}' +
    '#kb-menu .kbfl{display:inline-flex;gap:4px;flex:none;margin-left:9px;vertical-align:middle}' +
    '#kb-menu .kbfl i{display:block;width:30px;height:20px;border-radius:2px;box-shadow:0 0 0 1px rgba(255,255,255,.35)}' +
    '#kb-menu .kbfl .uk{background:url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 60 40%22 preserveAspectRatio=%22none%22%3E%3Crect width=%2260%22 height=%2240%22 fill=%22%23012169%22/%3E%3Cpath d=%22M0 0L60 40M60 0L0 40%22 stroke=%22%23fff%22 stroke-width=%228%22/%3E%3Cpath d=%22M0 0L60 40M60 0L0 40%22 stroke=%22%23C8102E%22 stroke-width=%223%22/%3E%3Cpath d=%22M30 0V40M0 20H60%22 stroke=%22%23fff%22 stroke-width=%2213%22/%3E%3Cpath d=%22M30 0V40M0 20H60%22 stroke=%22%23C8102E%22 stroke-width=%227%22/%3E%3C/svg%3E") center/100% 100%}' +
    '#kb-menu .kbfl .es{background:linear-gradient(180deg,#AA151B 0,#AA151B 25%,#F1BF00 25%,#F1BF00 75%,#AA151B 75%)}' +
    '#kb-menu a.it:hover,#kb-menu a.it:focus-visible,#kb-menu button.dt:hover,#kb-menu button.dt:focus-visible,#kb-menu button.dt[aria-expanded=true]{color:#fff;box-shadow:inset 0 -2px 0 #7aa2ff,0 0 18px rgba(47,91,234,.5);outline:none}' +
    '#kb-menu a.it:hover::before,#kb-menu a.it:focus-visible::before,#kb-menu button.dt:hover::before,#kb-menu button.dt:focus-visible::before,#kb-menu button.dt[aria-expanded=true]::before{transform:scaleX(1)}' +
    '#kb-menu a.it:active::before,#kb-menu button.dt:active::before{background:linear-gradient(90deg,#16319f,#2f5bea)}#kb-menu a.it:active,#kb-menu button.dt:active{transform:translateY(1px)}' +
    '#kb-menu a.it.on,#kb-menu button.dt.on{color:#fff;background:rgba(47,91,234,.2);box-shadow:inset 0 -2px 0 #7aa2ff}' +
    '#kb-menu a.it.cta{background:#2f5bea;color:#fff;border:0;border-radius:2px;padding:12px 18px;margin-left:8px;font-weight:600}' +
    '#kb-menu a.it.cta::before{display:none}#kb-menu a.it.cta:hover,#kb-menu a.it.cta:focus-visible{background:#4a73ff;color:#fff;box-shadow:0 0 22px rgba(74,115,255,.65)}#kb-menu a.it.cta:active{background:#1e3fd0}' +
    '#kb-menu a.it.cta svg{color:#fff;display:block}' +
    '#kb-menu .dd{position:relative}' +
    '#kb-menu button.dt svg{color:#7aa2ff;transition:transform .2s}' +
    '#kb-menu button.dt[aria-expanded=true] svg{transform:rotate(180deg)}' +
    '#kb-menu .dm{display:none;position:absolute;left:0;top:100%;min-width:350px;background:#080d1f;border-top:2px solid #2f5bea;box-shadow:0 20px 40px rgba(0,0,0,.6)}' +
    '#kb-menu .dm.open{display:block}' +
    '#kb-menu .dm a{display:block;padding:13px 18px;color:#fff;text-decoration:none;border-top:1px solid rgba(255,255,255,.08)}' +
    '#kb-menu .dm a:first-child{border-top:0}' +
    '#kb-menu .dm a b{display:block;font-weight:600;font-size:16.5px}' +
    '#kb-menu .dm a span.d{display:block;font-size:13.5px;font-weight:400;color:#9aa0a6;margin-top:2px}' +
    '#kb-menu .dm a:hover,#kb-menu .dm a:focus-visible,#kb-menu .dm a.on{background:rgba(47,91,234,.1);box-shadow:inset 3px 0 0 #7aa2ff;outline:none}' +
    '#kb-menu .dm a:hover b,#kb-menu .dm a.on b{color:#7aa2ff}' +
    '#kb-menu button.tg{margin-left:auto;display:flex;align-items:center;gap:8px;font:600 16px/1 "KB Inter",system-ui,sans-serif;color:#fff;background:transparent;border:1px solid rgba(255,255,255,.4);border-radius:2px;padding:0 14px;height:38px;cursor:pointer;transition:border-color .15s,background .15s}' +
    '#kb-menu button.tg svg{color:#7aa2ff}' +
    '#kb-menu button.tg:hover,#kb-menu button.tg:focus-visible{border-color:#7aa2ff;outline:none}' +
    '#kb-menu button.tg[aria-expanded=true]{background:rgba(47,91,234,.14);border-color:#7aa2ff}' +
    '#kb-menu .pn{display:none;position:absolute;left:0;right:0;top:100%;background:#080d1f;border-bottom:2px solid #2f5bea;box-shadow:0 18px 30px rgba(0,0,0,.6);max-height:calc(100vh - 60px);overflow:auto}' +
    '#kb-menu .pn.open{display:block}' +
    '#kb-menu .pn a{display:flex;align-items:center;gap:14px;padding:13px 20px;color:#fff;text-decoration:none;border-top:1px solid rgba(255,255,255,.08)}' +
    '#kb-menu .pn a:first-child{border-top:0}' +
    '#kb-menu .pn a:hover,#kb-menu .pn a:focus-visible{background:rgba(47,91,234,.08);box-shadow:inset 3px 0 0 #7aa2ff;outline:none}' +
    '#kb-menu .pn a.on{background:rgba(47,91,234,.14);box-shadow:inset 3px 0 0 #7aa2ff}' +
    '#kb-menu .pn a.sub{padding-left:34px}#kb-menu .pn a,#kb-menu .dm a{transition:background .2s,box-shadow .2s}#kb-menu .pn a:active,#kb-menu .dm a:active{background:linear-gradient(90deg,#1e3fd0,#2f5bea);box-shadow:inset 3px 0 0 #7aa2ff}#kb-menu .pn a:active .d,#kb-menu .dm a:active .d{color:#dbe6ff}#kb-menu .pn a:active b,#kb-menu .dm a:active b{color:#fff}' +
    '#kb-menu .pn .gl{padding:14px 20px 6px;border-top:1px solid rgba(255,255,255,.08);font:600 12px/1 "KB Inter",system-ui,sans-serif;letter-spacing:.24em;text-transform:uppercase;color:#7aa2ff}' +
    '#kb-menu .pn .ic{flex:none;width:36px;height:36px;border:1px solid rgba(47,91,234,.6);border-radius:3px;display:grid;place-items:center;color:#7aa2ff}' +
    '#kb-menu .pn a.cta .ic{background:#2f5bea;border-color:#2f5bea;color:#fff}' +
    '#kb-menu .pn b{display:block;font:600 17.5px/1.25 "KB Inter",system-ui,sans-serif}' +
    '#kb-menu .pn span.d{display:block;font-size:14px;font-weight:400;color:#9aa0a6}' +
    '@media(min-width:1360px){#kb-menu nav{display:flex}#kb-menu button.tg{display:none}#kb-menu .pn{display:none!important}}' +
    '#kb-head{position:sticky;top:0;z-index:1000;background:#000}#kb-head #kb-menu{position:static}#kb-head #kb-menu .in{max-width:1480px}#kb-head.nomenu{border-bottom:2px solid #2f5bea}#kb-head .kb-hl{display:block}#kb-head .kb-hl img{display:block;width:100%;max-width:1100px;height:auto;margin:0 auto}' +
    '@media(min-width:1360px) and (max-width:1439px){#kb-menu a.it,#kb-menu button.dt{padding:10px 9px;font-size:14.5px}#kb-menu a.it.cta{padding:11px 14px;margin-left:4px}#kb-menu .kbfl i{width:26px;height:18px}#kb-menu .kbfl{margin-left:6px}}' +
    '@media(prefers-reduced-motion:reduce){#kb-menu *{transition:none!important}}' +
    '@media print{#kb-menu,#kb-head{display:none}}';



  /* ---------- construcción ---------- */
  function build() {
    var st = document.createElement("style");
    st.id = "kb-menu-css";
    st.textContent = css;
    document.head.appendChild(st);

    var bar = document.createElement("header");
    bar.id = "kb-menu";
    var LOGO = OPT.logo === "on";
    if (OPT.brand === "off" || LOGO) bar.className = "nobrand";
    var inline = "", panel = "";
    function isOn(it) {
      if (/^https?:/i.test(it.href) || it.href.indexOf("#") >= 0) return false;
      try { return norm(new URL(url(it.href), location.href).pathname) === here } catch (e) { return false }
    }
    function extA(it) { return it.external ? ' target="_blank" rel="noopener"' : "" }
    function curA(on) { return on ? ' aria-current="page"' : "" }
    ITEMS.forEach(function (it) {
      if (it.children) {
        var dm = "", sub = "", anyOn = false;
        it.children.forEach(function (c) {
          var on = isOn(c), h = esc(url(c.href));
          if (on) anyOn = true;
          dm += '<a class="' + (on ? "on" : "") + '" href="' + h + '"' + extA(c) + curA(on) + '><b>' + esc(c.label) + '</b><span class="d">' + esc(c.desc || "") + "</span></a>";
          sub += '<a class="sub' + (on ? " on" : "") + '" href="' + h + '"' + extA(c) + curA(on) + '><span class="ic">' + ico(c) + '</span><span><b>' + esc(c.label) + '</b><span class="d">' + esc(c.desc || "") + "</span></span></a>";
        });
        inline += '<div class="dd"><button class="dt' + (anyOn ? " on" : "") + '" type="button" aria-expanded="false" aria-haspopup="true"><span>' + esc(it.label) + "</span>" + svg("chev") + '</button><div class="dm">' + dm + "</div></div>";
        panel += '<div class="gl">' + esc(it.label) + "</div>" + sub;
        return;
      }
      var on = isOn(it), h = esc(url(it.href));
      inline += '<a class="it' + (on ? " on" : "") + (it.cta ? " cta" : "") + '" href="' + h + '"' + extA(it) + curA(on) + ">" + ico(it) + "<span>" + esc(it.label) + fl(it) + "</span></a>";
      panel += '<a class="' + (on ? "on " : "") + (it.cta ? "cta" : "") + '" href="' + h + '"' + extA(it) + curA(on) + '><span class="ic">' + ico(it) + '</span><span><b>' + esc(it.label) + fl(it) + '</b><span class="d">' + esc(it.desc || "") + "</span></span></a>";
    });
    bar.innerHTML =
      '<div class="in">' + (OPT.brand === "off" || LOGO ? "" : '<a class="brand" href="' + esc(url(HOME)) + '">Kingsbridge<small>English Academy</small></a>') +
      '<nav aria-label="' + (EN ? "Main menu" : "Menú principal") + '">' + inline + "</nav>" +
      '<button class="tg" type="button" aria-expanded="false" aria-controls="kb-pn"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg><span>' + (EN ? "Menu" : "Menú") + '</span></button></div>' +
      '<div class="pn" id="kb-pn">' + panel + "</div>";
    var top = bar, head = null;
    if (LOGO) {
      head = document.createElement("div");
      head.id = "kb-head";
      head.innerHTML = '<a class="kb-hl" href="' + esc(url(HOME)) + '" aria-label="' + (EN ? "Go to home" : "Ir al inicio") + '"><img src="' + esc(url("logo.png?v=99")) + '" alt="KINGSBRIDGE English Academy"></a>';
      if (OPT.menu === "off") head.className = "nomenu"; else head.appendChild(bar);
      top = head;
    }
    if (!window.__kbLogoFit) { var lf = document.createElement("script"); lf.src = url("logo-fit.js?v=1"); lf.defer = true; document.head.appendChild(lf); }
    var anchor = OPT.after ? document.querySelector(OPT.after) : null;
    if (anchor && anchor.parentNode) anchor.parentNode.insertBefore(top, anchor.nextSibling);
    else document.body.insertBefore(top, document.body.firstChild);

    var tg = bar.querySelector(".tg"), pn = bar.querySelector(".pn");
    var dts = bar.querySelectorAll(".dt");
    function closeDD(except) {
      Array.prototype.forEach.call(dts, function (b) {
        if (b === except) return;
        b.setAttribute("aria-expanded", "false");
        b.nextSibling.classList.remove("open");
      });
    }
    Array.prototype.forEach.call(dts, function (b) {
      b.addEventListener("click", function (e) {
        e.stopPropagation();
        var o = b.nextSibling.classList.toggle("open");
        b.setAttribute("aria-expanded", o ? "true" : "false");
        closeDD(b);
      });
    });
    function close() { pn.classList.remove("open"); tg.setAttribute("aria-expanded", "false"); closeDD(null) }
    tg.addEventListener("click", function (e) {
      e.stopPropagation();
      var o = pn.classList.toggle("open");
      tg.setAttribute("aria-expanded", o ? "true" : "false");
    });
    document.addEventListener("click", function (e) { if (!bar.contains(e.target)) close() });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close() });
    window.addEventListener("resize", close);

    function setH() { document.documentElement.style.setProperty("--kb-menu-h", (head || bar).offsetHeight + "px") }
    setH(); window.addEventListener("resize", setH);
    if (head) { var li = head.querySelector("img"); if (li && !li.complete) li.addEventListener("load", setH); window.addEventListener("load", setH); }
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(setH);
  }

  if (document.body) build();
  else document.addEventListener("DOMContentLoaded", build);
})();
