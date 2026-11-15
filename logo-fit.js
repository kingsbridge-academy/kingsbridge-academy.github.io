/* Kingsbridge · logotipo en formato ancho para pantallas grandes (tableta horizontal y computadora).
   En teléfono y tableta vertical no cambia nada. */
(function () {
  if (window.__kbLogoFit) return;
  window.__kbLogoFit = 1;
  var css =
    "@media(min-width:700px) and (orientation:landscape),(min-width:900px) and (hover:hover){" +
    ".kb-wl{display:block;background:#070a18;padding:12px 0 10px}" +
    ".kb-wl>img.kb-wi{display:block;width:auto!important;max-width:calc(100% - 32px);height:clamp(104px,11.5vw,148px)!important;margin:0 auto!important;border-radius:4px;box-shadow:0 0 0 1px rgba(226,186,104,.55),0 6px 22px rgba(0,0,0,.45)}" +
    "}";
  var st = document.createElement("style");
  st.textContent = css;
  document.head.appendChild(st);
  function fit() {
    var imgs = document.querySelectorAll('img[src*="logo.png"]');
    for (var i = 0; i < imgs.length; i++) {
      var im = imgs[i], p = im.parentNode;
      if (!p || im.classList.contains("kb-wi") || !/KINGSBRIDGE/i.test(im.alt || "")) continue;
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
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fit);
  else fit();
})();
