/* Kingsbridge · el monograma KB del logotipo del encabezado da una vuelta suave en 3D de vez en cuando.
   Solo transform (GPU), sin bibliotecas. Si algo falla, queda el logotipo estático de siempre.
   Sin movimiento si el visitante lo tiene desactivado en su dispositivo. */
(function () {
  if (window.__kbLogo3d) return;
  window.__kbLogo3d = 1;
  var css =
    ".kb-l3{position:absolute;pointer-events:none;perspective:600px;z-index:1}" +
    ".kb-l3 i{position:absolute;inset:0;transform-style:preserve-3d;will-change:transform;animation:kbl3 20s ease-in-out infinite}" +
    ".kb-l3 b{position:absolute;inset:0;background:url(kb-monograma-s.png) center/contain no-repeat;backface-visibility:hidden;-webkit-backface-visibility:hidden}" +
    ".kb-l3 b+b{transform:rotateY(180deg)}" +
    "@keyframes kbl3{0%,6%{transform:rotateY(0)}16%,100%{transform:rotateY(360deg)}}" +
    "@media (prefers-reduced-motion:reduce){.kb-l3 i{animation:none}}";
  var st = document.createElement("style");
  st.textContent = css;
  document.head.appendChild(st);

  function place(im, box) {
    var w = im.offsetWidth, h = im.offsetHeight;
    box.style.left = im.offsetLeft + w * 0.047 + "px";
    box.style.top = im.offsetTop + h * 0.113 + "px";
    box.style.width = w * 0.219 + "px";
    box.style.height = h * 0.804 + "px";
  }
  function enhance(im) {
    if (im.__kbl3 || !/KINGSBRIDGE/i.test(im.alt || "")) return;
    var p = im.parentNode;
    if (!p || p.tagName === "BODY") return;
    im.__kbl3 = 1;
    if (getComputedStyle(p).position === "static") p.style.position = "relative";
    var box = document.createElement("div");
    box.className = "kb-l3";
    box.setAttribute("aria-hidden", "true");
    box.innerHTML = '<i><b></b><b></b></i>';
    var ready = new Image();
    ready.onload = function () {
      im.src = "logo-sin-kb.jpg";
      p.insertBefore(box, im.nextSibling);
      place(im, box);
      if (window.ResizeObserver) new ResizeObserver(function () { place(im, box); }).observe(im);
      window.addEventListener("resize", function () { place(im, box); });
      im.addEventListener("load", function () { place(im, box); });
    };
    ready.src = "kb-monograma-s.png";
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
