/* Kingsbridge · logotipo del encabezado: el monograma KB original (alta resolución) da una vuelta 3D suave cada 20 s,
   con la Flor de la Vida en líneas finas girando muy despacio detrás.
   Sin movimiento si el visitante lo tiene desactivado. Si algo falla, queda el logotipo estático. */
(function () {
  if (window.__kbLogo3d) return;
  window.__kbLogo3d = 1;
  var GEO = "<svg class=\"kb-g3\" viewBox=\"-200 -200 400 400\" aria-hidden=\"true\"><g class=\"a\"><circle cx=\"0\" cy=\"0\" r=\"60\"/><circle cx=\"60\" cy=\"0\" r=\"60\"/><circle cx=\"30\" cy=\"52\" r=\"60\"/><circle cx=\"-30\" cy=\"52\" r=\"60\"/><circle cx=\"-60\" cy=\"0\" r=\"60\"/><circle cx=\"-30\" cy=\"-52\" r=\"60\"/><circle cx=\"30\" cy=\"-52\" r=\"60\"/><circle cx=\"120\" cy=\"0\" r=\"60\"/><circle cx=\"90\" cy=\"52\" r=\"60\"/><circle cx=\"60\" cy=\"104\" r=\"60\"/><circle cx=\"0\" cy=\"104\" r=\"60\"/><circle cx=\"-60\" cy=\"104\" r=\"60\"/><circle cx=\"-90\" cy=\"52\" r=\"60\"/><circle cx=\"-120\" cy=\"0\" r=\"60\"/><circle cx=\"-90\" cy=\"-52\" r=\"60\"/><circle cx=\"-60\" cy=\"-104\" r=\"60\"/><circle cx=\"-0\" cy=\"-104\" r=\"60\"/><circle cx=\"60\" cy=\"-104\" r=\"60\"/><circle cx=\"90\" cy=\"-52\" r=\"60\"/></g><circle class=\"ring\" r=\"186\"/></svg>";
  var css =
    ".kb-g3{position:absolute;pointer-events:none;overflow:visible;z-index:1}" +
    ".kb-g3 circle{fill:none;stroke:#e2ba68;stroke-width:.6;opacity:.3;vector-effect:non-scaling-stroke}" +
    ".kb-g3 .ring{stroke-width:.8;opacity:.45}" +
    ".kb-g3 .a{transform-origin:0 0;animation:kbg3 120s linear infinite}" +
    ".kb-l3{position:absolute;pointer-events:none;perspective:600px;z-index:2}" +
    ".kb-l3 i{position:absolute;inset:0;transform-style:preserve-3d;will-change:transform;animation:kbl3 20s ease-in-out infinite}" +
    ".kb-l3 b{position:absolute;inset:0;background:url(kb-monograma-hd.png) center/100% 100% no-repeat;backface-visibility:hidden;-webkit-backface-visibility:hidden}" +
    ".kb-l3 b+b{transform:rotateY(180deg)}" +
    "@keyframes kbl3{0%,6%{transform:rotateY(0)}16%,100%{transform:rotateY(360deg)}}" +
    "@keyframes kbg3{to{transform:rotate(360deg)}}" +
    "@media (prefers-reduced-motion:reduce){.kb-l3 i,.kb-g3 .a{animation:none}}";
  var st = document.createElement("style");
  st.textContent = css;
  document.head.appendChild(st);

  function place(im, el, l, t, w, h) {
    var W = im.offsetWidth, H = im.offsetHeight;
    el.style.left = im.offsetLeft + W * l + "px";
    el.style.top = im.offsetTop + H * t + "px";
    el.style.width = W * w + "px";
    el.style.height = H * h + "px";
  }
  function enhance(im) {
    if (im.__kbl3 || !/KINGSBRIDGE/i.test(im.alt || "")) return;
    var p = im.parentNode;
    if (!p || p.tagName === "BODY") return;
    im.__kbl3 = 1;
    var bg = new Image();
    bg.onload = function () {
      if (getComputedStyle(p).position === "static") p.style.position = "relative";
      var g = document.createElement("div");
      g.innerHTML = GEO;
      g = g.firstChild;
      var box = document.createElement("div");
      box.className = "kb-l3";
      box.setAttribute("aria-hidden", "true");
      box.innerHTML = "<i><b></b><b></b></i>";
      im.src = bg.src;
      p.insertBefore(box, im.nextSibling);
      p.insertBefore(g, box);
      var fit = function () {
        place(im, g, 0.012, 0.03, 0.29, 0.94);
        place(im, box, 0.035, 0.08, 0.24, 0.88);
      };
      fit();
      if (window.ResizeObserver) new ResizeObserver(fit).observe(im);
      window.addEventListener("resize", fit);
      im.addEventListener("load", fit);
    };
    var kb = new Image();
    kb.onload = function () { bg.src = "logo-sin-kb.webp"; };
    kb.src = "kb-monograma-hd.png";
  }
  function scan() {
    var imgs = document.querySelectorAll('#kb-head img[src*="logo.png"],#kb-menu img[src*="logo.png"],.kb-hl img[src*="logo.png"]');
    for (var i = 0; i < imgs.length; i++) enhance(imgs[i]);
  }
  function start() {
    scan();
    if (window.MutationObserver) {
      var mo = new MutationObserver(scan);
      mo.observe(document.body, { childList: true, subtree: true });
      setTimeout(function () { mo.disconnect(); }, 8000);
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
