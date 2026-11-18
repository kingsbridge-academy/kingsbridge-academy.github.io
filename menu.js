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
    { label: "Herramientas gratis", desc: "Prueba de nivel gratuita", href: "index.html#herramientas", icon: "star" },
    { label: "Examen de nivel",     desc: "Descubre tu nivel de inglés, A1–C1",       href: "examen-de-nivel.html", icon: "star" },
    { label: "My Day",               desc: "Aprender inglés jugando",                  href: "my-day-ninos.html",    icon: "star" },
    { label: "Libro 3D de ajedrez",   desc: "Aprende inglés con un libro interactivo",   href: "libro-ajedrez.html",   icon: "star" },
    { label: "Pre-inscripción",      desc: "Reserva tu cupo",                          href: "https://tally.so/r/2EQWlj", icon: "form", external: true },
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
    chat: '<path d="M21 12a8 8 0 01-11.6 7.1L4 20l1-4.6A8 8 0 1121 12z"/>'
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
    '@font-face{font-family:"KB Lora";font-weight:400;font-style:normal;font-display:swap;src:url(' + base + 'fonts/lora.woff) format("woff")}' +
    ':root{--kb-menu-h:52px}' +
    '#kb-menu{position:sticky;top:0;z-index:1000;background:rgba(8,11,25,.96);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);border-top:2px solid #e2ba68;border-bottom:1px solid rgba(226,186,104,.35);font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;text-align:left;line-height:1.3}' +
    '#kb-menu *{box-sizing:border-box}' +
    '#kb-menu .in{max-width:980px;margin:0 auto;display:flex;align-items:center;gap:10px;padding:0 12px;height:50px}' +
    '#kb-menu.nobrand .in{justify-content:flex-end}' +
'#kb-menu .kb-gu{position:absolute;top:0;bottom:0;overflow:hidden;pointer-events:none;z-index:0}' +
    '#kb-menu .kb-gu.l{left:50%;width:216px;margin-left:-108px;opacity:.55}' +
    '#kb-menu .kb-gu svg{position:absolute;display:block;left:0;top:50%;margin-top:-85px}' +
    '#kb-menu .in{position:relative;z-index:1}#kb-menu .in .kb-new-bar{background:rgba(8,11,25,.6)}#kb-menu .in button.tg{background:rgba(8,11,25,.82)}#kb-menu .in button.tg[aria-expanded=true]{background:#1b2040}#kb-menu.kb-docked .kb-gu{opacity:.22}@media(prefers-reduced-motion:no-preference){#kb-menu .kb-gu svg{animation:kbgb 9s ease-in-out infinite}}@keyframes kbgb{0%,100%{opacity:.7}50%{opacity:1}}' +
    '#kb-menu .brand{font-family:"KB Lora",Georgia,serif;font-size:15px;letter-spacing:.2em;text-transform:uppercase;color:#e2ba68;text-decoration:none;white-space:nowrap}' +
    '#kb-menu .brand small{display:block;font-size:8.5px;letter-spacing:.28em;color:#a09ac0;margin:-1px 0 0;padding:0;line-height:1.2}' +
    '#kb-menu nav{margin-left:auto;display:none;align-items:center;gap:6px}' +
    '#kb-menu a.it{display:flex;align-items:center;gap:7px;color:#fff;text-decoration:none;font-size:14px;padding:8px 12px;border:1.5px solid transparent;border-radius:10px;white-space:nowrap}' +
    '#kb-menu a.it svg{color:#e2ba68;flex:none}' +
    '#kb-menu .kbfl{display:inline-flex;gap:4px;flex:none;margin-left:9px;vertical-align:middle}' +
    '#kb-menu .kbfl i{display:block;width:34px;height:23px;border-radius:3px;box-shadow:0 0 0 1px rgba(226,186,104,.55)}' +
    '#kb-menu .kbfl .uk{background:url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 60 40%22 preserveAspectRatio=%22none%22%3E%3Crect width=%2260%22 height=%2240%22 fill=%22%23012169%22/%3E%3Cpath d=%22M0 0L60 40M60 0L0 40%22 stroke=%22%23fff%22 stroke-width=%228%22/%3E%3Cpath d=%22M0 0L60 40M60 0L0 40%22 stroke=%22%23C8102E%22 stroke-width=%223%22/%3E%3Cpath d=%22M30 0V40M0 20H60%22 stroke=%22%23fff%22 stroke-width=%2213%22/%3E%3Cpath d=%22M30 0V40M0 20H60%22 stroke=%22%23C8102E%22 stroke-width=%227%22/%3E%3C/svg%3E") center/100% 100%}' +
    '#kb-menu .kbfl .es{background:linear-gradient(180deg,#AA151B 0,#AA151B 25%,#F1BF00 25%,#F1BF00 75%,#AA151B 75%)}' +
    '#kb-menu a.it:hover,#kb-menu a.it:focus-visible{border-color:rgba(226,186,104,.6);outline:none}' +
    '#kb-menu a.it.on{border-color:#e2ba68;background:rgba(226,186,104,.14)}' +
    '#kb-menu a.it.cta{background:#25D366;color:#fff;border-color:#25D366;font-weight:600}' +
    '#kb-menu a.it.cta svg{color:#fff}' +
    '#kb-menu button.tg{margin-left:auto;display:flex;align-items:center;gap:8px;font:inherit;font-size:14px;color:#fff;background:transparent;border:1.5px solid rgba(226,186,104,.5);border-radius:10px;padding:0 12px;height:38px;cursor:pointer}' +
    '#kb-menu button.tg svg{color:#e2ba68}' +
    '#kb-menu button.tg[aria-expanded=true]{background:rgba(226,186,104,.14);border-color:#e2ba68}' +
    '#kb-menu .pn{display:none;position:absolute;left:0;right:0;top:100%;background:#0b1024;border-bottom:2px solid #e2ba68;box-shadow:0 18px 30px rgba(0,0,0,.5);max-height:calc(100vh - 60px);overflow:auto}' +
    '#kb-menu .pn.open{display:block}' +
    '#kb-menu .pn a{display:flex;align-items:center;gap:14px;padding:13px 18px;color:#fff;text-decoration:none;border-top:1px solid rgba(226,186,104,.18)}' +
    '#kb-menu .pn a:first-child{border-top:0}' +
    '#kb-menu .pn a:hover,#kb-menu .pn a:focus-visible{background:rgba(226,186,104,.1);outline:none}' +
    '#kb-menu .pn a.on{background:rgba(226,186,104,.16)}' +
    '#kb-menu .pn .ic{flex:none;width:38px;height:38px;border:1.5px solid #e2ba68;border-radius:50%;display:grid;place-items:center;color:#e2ba68}' +
    '#kb-menu .pn a.cta .ic{background:#25D366;border-color:#25D366;color:#fff}' +
    '#kb-menu .pn b{display:block;font-family:"KB Lora",Georgia,serif;font-weight:400;font-size:17px}' +
    '#kb-menu .pn span.d{display:block;font-size:12.5px;color:#a09ac0}' +
    '@media(min-width:880px){#kb-menu nav{display:flex}#kb-menu button.tg{display:none}#kb-menu .pn{display:none!important}}' +
    '#kb-head{position:sticky;top:0;z-index:1000;background:#080b19}#kb-head #kb-menu{position:static}#kb-head #kb-menu .in{max-width:1100px}#kb-head.nomenu{border-bottom:2px solid #e2ba68}#kb-head .kb-hl{display:block}#kb-head .kb-hl img{display:block;width:100%;max-width:1100px;height:auto;margin:0 auto}' +
    '@media print{#kb-menu,#kb-head{display:none}}';

  var GU_L = '<svg width="216" height="144" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" fill="none"><path d="M52 136.0L52 74.8A186.2 186.2 0 0 1 150 10A186.2 186.2 0 0 1 248 74.8L248 136.0" fill="none" stroke="#e2ba68" stroke-width="1.1" stroke-linejoin="round" stroke-linecap="round" opacity="0.9" /><path d="M57 136.0L57 74.8A176.7 176.7 0 0 1 150 10A176.7 176.7 0 0 1 243 74.8L243 136.0" fill="none" stroke="#e2ba68" stroke-width="0.9" stroke-linejoin="round" stroke-linecap="round" opacity="0.7" /><path d="M150 100C128 86 94 84 66 96L66 132C94 120 128 122 150 136Z" fill="rgba(226,186,104,.10)" stroke="#e2ba68" stroke-width="1.3" stroke-linejoin="round" stroke-linecap="round" opacity="1" /><path d="M144 105.6C126 92.6 96 90.6 72 101.6" fill="none" stroke="#e2ba68" stroke-width="0.5" stroke-linejoin="round" stroke-linecap="round" opacity="0.8" /><path d="M144 109.2C126 96.2 96 94.2 72 105.2" fill="none" stroke="#e2ba68" stroke-width="0.5" stroke-linejoin="round" stroke-linecap="round" opacity="0.8" /><path d="M144 112.8C126 99.8 96 97.8 72 108.8" fill="none" stroke="#e2ba68" stroke-width="0.5" stroke-linejoin="round" stroke-linecap="round" opacity="0.8" /><path d="M144 116.4C126 103.4 96 101.4 72 112.4" fill="none" stroke="#e2ba68" stroke-width="0.5" stroke-linejoin="round" stroke-linecap="round" opacity="0.8" /><path d="M144 120.0C126 107.0 96 105.0 72 116.0" fill="none" stroke="#e2ba68" stroke-width="0.5" stroke-linejoin="round" stroke-linecap="round" opacity="0.8" /><path d="M144 123.6C126 110.6 96 108.6 72 119.6" fill="none" stroke="#e2ba68" stroke-width="0.5" stroke-linejoin="round" stroke-linecap="round" opacity="0.8" /><path d="M144 127.2C126 114.2 96 112.2 72 123.2" fill="none" stroke="#e2ba68" stroke-width="0.5" stroke-linejoin="round" stroke-linecap="round" opacity="0.8" /><path d="M150 136C128 123 94 121 66 133L62 139C94 126 128 128 150 143" fill="none" stroke="#e2ba68" stroke-width="1" stroke-linejoin="round" stroke-linecap="round" opacity="0.9" /><path d="M150 100C172 86 206 84 234 96L234 132C206 120 172 122 150 136Z" fill="rgba(226,186,104,.10)" stroke="#e2ba68" stroke-width="1.3" stroke-linejoin="round" stroke-linecap="round" opacity="1" /><path d="M156 105.6C174 92.6 204 90.6 228 101.6" fill="none" stroke="#e2ba68" stroke-width="0.5" stroke-linejoin="round" stroke-linecap="round" opacity="0.8" /><path d="M156 109.2C174 96.2 204 94.2 228 105.2" fill="none" stroke="#e2ba68" stroke-width="0.5" stroke-linejoin="round" stroke-linecap="round" opacity="0.8" /><path d="M156 112.8C174 99.8 204 97.8 228 108.8" fill="none" stroke="#e2ba68" stroke-width="0.5" stroke-linejoin="round" stroke-linecap="round" opacity="0.8" /><path d="M156 116.4C174 103.4 204 101.4 228 112.4" fill="none" stroke="#e2ba68" stroke-width="0.5" stroke-linejoin="round" stroke-linecap="round" opacity="0.8" /><path d="M156 120.0C174 107.0 204 105.0 228 116.0" fill="none" stroke="#e2ba68" stroke-width="0.5" stroke-linejoin="round" stroke-linecap="round" opacity="0.8" /><path d="M156 123.6C174 110.6 204 108.6 228 119.6" fill="none" stroke="#e2ba68" stroke-width="0.5" stroke-linejoin="round" stroke-linecap="round" opacity="0.8" /><path d="M156 127.2C174 114.2 204 112.2 228 123.2" fill="none" stroke="#e2ba68" stroke-width="0.5" stroke-linejoin="round" stroke-linecap="round" opacity="0.8" /><path d="M150 136C172 123 206 121 234 133L238 139C206 126 172 128 150 143" fill="none" stroke="#e2ba68" stroke-width="1" stroke-linejoin="round" stroke-linecap="round" opacity="0.9" /><path d="M150.0 100.0L150.0 143.0" stroke="#e2ba68" stroke-width="1.3" opacity="1" stroke-linecap="round"/><path d="M168 104C198.0 60.0 238.0 26.0 280.0 12.0C272.0 46.0 234.0 84.0 168 104Z" fill="rgba(226,186,104,.12)" stroke="#e2ba68" stroke-width="1.1" stroke-linejoin="round" stroke-linecap="round" opacity="1" /><path d="M168.0 104.0L280.0 12.0" stroke="#e2ba68" stroke-width="1.2" opacity="1" stroke-linecap="round"/><path d="M176.0 97.4L183.8 108.1" stroke="#e2ba68" stroke-width="0.5" opacity="0.7" stroke-linecap="round"/><path d="M176.0 97.4L172.0 88.6" stroke="#e2ba68" stroke-width="0.4" opacity="0.5" stroke-linecap="round"/><path d="M184.0 90.9L192.6 102.3" stroke="#e2ba68" stroke-width="0.5" opacity="0.7" stroke-linecap="round"/><path d="M184.0 90.9L180.0 82.2" stroke="#e2ba68" stroke-width="0.4" opacity="0.5" stroke-linecap="round"/><path d="M192.0 84.3L201.4 96.5" stroke="#e2ba68" stroke-width="0.5" opacity="0.7" stroke-linecap="round"/><path d="M192.0 84.3L188.0 75.9" stroke="#e2ba68" stroke-width="0.4" opacity="0.5" stroke-linecap="round"/><path d="M200.0 77.7L210.2 90.7" stroke="#e2ba68" stroke-width="0.5" opacity="0.7" stroke-linecap="round"/><path d="M200.0 77.7L196.0 69.5" stroke="#e2ba68" stroke-width="0.4" opacity="0.5" stroke-linecap="round"/><path d="M208.0 71.1L219.0 84.9" stroke="#e2ba68" stroke-width="0.5" opacity="0.7" stroke-linecap="round"/><path d="M208.0 71.1L204.0 63.1" stroke="#e2ba68" stroke-width="0.4" opacity="0.5" stroke-linecap="round"/><path d="M216.0 64.6L227.8 79.1" stroke="#e2ba68" stroke-width="0.5" opacity="0.7" stroke-linecap="round"/><path d="M216.0 64.6L212.0 56.7" stroke="#e2ba68" stroke-width="0.4" opacity="0.5" stroke-linecap="round"/><path d="M224.0 58.0L236.6 73.3" stroke="#e2ba68" stroke-width="0.5" opacity="0.7" stroke-linecap="round"/><path d="M224.0 58.0L220.0 50.4" stroke="#e2ba68" stroke-width="0.4" opacity="0.5" stroke-linecap="round"/><path d="M232.0 51.4L243.8 66.0" stroke="#e2ba68" stroke-width="0.5" opacity="0.7" stroke-linecap="round"/><path d="M232.0 51.4L228.0 44.0" stroke="#e2ba68" stroke-width="0.4" opacity="0.5" stroke-linecap="round"/><path d="M240.0 44.9L251.0 58.6" stroke="#e2ba68" stroke-width="0.5" opacity="0.7" stroke-linecap="round"/><path d="M240.0 44.9L236.0 37.6" stroke="#e2ba68" stroke-width="0.4" opacity="0.5" stroke-linecap="round"/><path d="M248.0 38.3L258.2 51.3" stroke="#e2ba68" stroke-width="0.5" opacity="0.7" stroke-linecap="round"/><path d="M248.0 38.3L244.0 31.2" stroke="#e2ba68" stroke-width="0.4" opacity="0.5" stroke-linecap="round"/><path d="M256.0 31.7L265.4 43.9" stroke="#e2ba68" stroke-width="0.5" opacity="0.7" stroke-linecap="round"/><path d="M256.0 31.7L252.0 24.8" stroke="#e2ba68" stroke-width="0.4" opacity="0.5" stroke-linecap="round"/><path d="M264.0 25.1L272.6 36.6" stroke="#e2ba68" stroke-width="0.5" opacity="0.7" stroke-linecap="round"/><path d="M264.0 25.1L260.0 18.5" stroke="#e2ba68" stroke-width="0.4" opacity="0.5" stroke-linecap="round"/><path d="M272.0 18.6L279.8 29.2" stroke="#e2ba68" stroke-width="0.5" opacity="0.7" stroke-linecap="round"/><path d="M272.0 18.6L268.0 12.1" stroke="#e2ba68" stroke-width="0.4" opacity="0.5" stroke-linecap="round"/></svg>';


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
    ITEMS.forEach(function (it) {
      var h = url(it.href), on = false;
      if (!/^https?:/i.test(it.href) && it.href.indexOf("#") < 0) { try { on = norm(new URL(h, location.href).pathname) === here } catch (e) {} }
      var ext = it.external ? ' target="_blank" rel="noopener"' : "";
      inline += '<a class="it' + (on ? " on" : "") + (it.cta ? " cta" : "") + '" href="' + esc(h) + '"' + ext + (on ? ' aria-current="page"' : "") + ">" + ico(it) + "<span>" + esc(it.label) + fl(it) + "</span></a>";
      panel += '<a class="' + (on ? "on " : "") + (it.cta ? "cta" : "") + '" href="' + esc(h) + '"' + ext + (on ? ' aria-current="page"' : "") + '><span class="ic">' + ico(it) + '</span><span><b>' + esc(it.label) + fl(it) + '</b><span class="d">' + esc(it.desc || "") + "</span></span></a>";
    });
    bar.innerHTML =
      '<div class="kb-gu l" aria-hidden="true">'+GU_L+'</div>' +
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
    function close() { pn.classList.remove("open"); tg.setAttribute("aria-expanded", "false") }
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
