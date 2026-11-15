/* Kingsbridge · logotipo en formato horizontal para pantallas grandes (tableta horizontal y computadora).
   Con menú: el logotipo se integra a la izquierda del panel del menú, en una sola barra.
   Sin menú: queda centrado en una franja de tamaño moderado.
   En teléfono y tableta vertical no cambia nada. */
(function () {
  if (window.__kbLogoFit) return;
  window.__kbLogoFit = 1;
  var WIDE = "(min-width:700px) and (orientation:landscape),(min-width:900px) and (hover:hover)";
  var css =
    "@media " + WIDE + "{" +
    /* sin menú: franja centrada */
    ".kb-wl{display:block;background:#070a18;padding:12px 0 10px}" +
    ".kb-wl>img.kb-wi{display:block;width:auto!important;max-width:calc(100% - 32px);height:clamp(104px,11.5vw,148px)!important;margin:0 auto!important;border-radius:4px;box-shadow:0 0 0 1px rgba(226,186,104,.55),0 6px 22px rgba(0,0,0,.45)}" +
    /* con menú: logotipo dentro del panel */
    "#kb-menu.kb-docked .in{max-width:1480px!important;height:66px;padding:0 20px;gap:12px}" +
    "#kb-menu.kb-docked .kb-lg{display:block!important;flex:none;order:-1;margin:0 10px 0 0!important;width:auto!important;height:auto!important;border:0!important}" +
    "#kb-menu.kb-docked .kb-lg img{display:block!important;height:48px!important;width:auto!important;max-width:none!important;margin:0!important;border-radius:4px;box-shadow:0 0 0 1px rgba(226,186,104,.55)}" +
    "#kb-menu.kb-docked nav{display:none}" +
    "#kb-menu.kb-docked button.tg{display:flex}" +
    "#kb-menu.kb-docked .pn{display:none!important}" +
    "#kb-menu.kb-docked .pn.open{display:block!important}" +
    ":root{--kb-menu-h:68px}" +
    "}" +
    "@media (min-width:1360px) and (orientation:landscape),(min-width:1360px) and (hover:hover){" +
    "#kb-menu.kb-docked nav{display:flex;gap:2px}#kb-menu.kb-docked a.it{padding:8px 9px;font-size:13.5px}#kb-menu.kb-docked .kbfl{margin-left:6px}" +
    "#kb-menu.kb-docked button.tg{display:none}" +
    "#kb-menu.kb-docked .pn.open{display:none!important}" +
    "}";
  var st = document.createElement("style");
  st.textContent = css;
  document.head.appendChild(st);

  var mq = window.matchMedia ? window.matchMedia(WIDE) : null;
  var home = null; // dónde estaba el logotipo originalmente

  function logoNode() {
    return document.querySelector("#kb-head .kb-hl") || document.getElementById("kbtop");
  }
  function dock() {
    var bar = document.querySelector("#kb-menu .in"), lg = logoNode();
    if (!bar || !lg) return false;
    if (mq && mq.matches) {
      if (lg.parentNode !== bar) {
        home = { p: lg.parentNode, n: lg.nextSibling };
        lg.classList.add("kb-lg");
        bar.insertBefore(lg, bar.firstChild);
      }
      document.getElementById("kb-menu").classList.add("kb-docked");
    } else {
      if (home && lg.parentNode === bar) {
        home.p.insertBefore(lg, home.n && home.n.parentNode === home.p ? home.n : null);
        lg.classList.remove("kb-lg");
      }
      document.getElementById("kb-menu").classList.remove("kb-docked");
    }
    return true;
  }
  function banner() {
    var imgs = document.querySelectorAll('img[src*="logo.png"]');
    for (var i = 0; i < imgs.length; i++) {
      var im = imgs[i], p = im.parentNode;
      if (!p || im.classList.contains("kb-wi") || !/KINGSBRIDGE/i.test(im.alt || "")) continue;
      if (p.classList.contains("kb-lg") || p.id === "kbtop" || p.classList.contains("kb-hl")) { if (document.querySelector("#kb-menu .in")) continue; }
      if (p.tagName === "BODY") {
        var w = document.createElement("div");
        p.insertBefore(w, im);
        w.appendChild(im);
        p = w;
      }
      if (p.children.length !== 1) continue;
      p.classList.add("kb-wl");
      im.classList.add("kb-wi");
    }
  }
  function run() {
    if (!dock()) banner();
    else if (mq && mq.addEventListener) mq.addEventListener("change", dock);
    else if (mq && mq.addListener) mq.addListener(dock);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run);
  else run();
})();
