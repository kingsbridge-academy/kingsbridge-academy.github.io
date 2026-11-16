/* Kingsbridge English Academy · pie de página compartido (ES / EN)
   Uso: <script src="footer.js" defer></script>  (data-lang="en" para las páginas en inglés)
   Reemplaza el <footer class="kb-pie"> existente de cada página. */
(function () {
  var me = document.currentScript, base = "";
  if (me && me.src) base = me.src.replace(/[^\/]*([?#].*)?$/, "");
  var EN = me && me.getAttribute("data-lang") === "en";
  function u(h) { return /^https?:/i.test(h) ? h : base + h; }

  var T = EN ? {
    tag: "English for Your Future",
    li: ["Verified profile", "Official LinkedIn profile", "View LinkedIn profile", "LinkedIn \u00b7 Verified"],
    cols: [
      { h: "Spanish", l: [["Spanish for English speakers", "spanish/index.html"], ["Spanish Practice", "spanish/practice/index.html"], ["Travel Spanish", "spanish/travel.html"], ["Levels & access", "spanish/index.html#access"]] },
      { h: "Academy", l: [["Kingsbridge English Academy", "index.html"], ["About us", "spanish/about.html"], ["English practice (A1–C1)", "practica/index.html"], ["My Day Games", "my-day-ninos.html"]] },
      { h: "Contact", l: [["WhatsApp", "https://wa.me/kingsbridge.academy"], ["Pre-enrolment", "https://tally.so/r/2EQWlj"]]},
      { h: "Legal", l: [["Terms of the course", "spanish/terms.html"], ["Terms & privacy", "terminos-y-privacidad.html"]] }
    ],
    reg: "Registered business · No. 26385", reg2: "Cámara de Comercio de Colombia · Launch stage",
    note: "Exercises organised by the Common European Framework of Reference for Languages (CEFR), A1 to C1, to help you progress step by step. Practice material created by Kingsbridge English Academy, independent of official exams.",
    cp: "© 2026 Kingsbridge English Academy. All rights reserved.",
    lang: "Language", l1: ["English", "spanish/index.html"], l2: ["Español", "index.html"], aria: "Site footer"
  } : {
    tag: "English for Your Future",
    li: ["Perfil verificado", "Perfil oficial en LinkedIn", "Ver perfil en LinkedIn", "LinkedIn \u00b7 Verificado"],
    cols: [
      { h: "Academia", l: [["Inicio", "index.html"], ["Sobre nosotros", "sobre-nosotros.html"], ["Programas", "index.html#programas"], ["Pre-inscripción", "https://tally.so/r/2EQWlj"]] },
      { h: "Aprende", l: [["Práctica interactiva", "practica/index.html"], ["My Day Games", "my-day-ninos.html"], ["Prueba gratis", "practica/index.html"], ["Learn Spanish", "spanish/index.html"]] },
      { h: "Contacto", l: [["WhatsApp", "https://wa.me/kingsbridge.academy"]]},
      { h: "Legal", l: [["Términos del curso", "terminos-curso.html"], ["Términos y privacidad", "terminos-y-privacidad.html"]] }
    ],
    reg: "Negocio registrado · No. 26385", reg2: "Cámara de Comercio de Colombia · Etapa de lanzamiento",
    note: "Ejercicios organizados según el Marco Común Europeo de Referencia para las lenguas (MCER), de A1 a C1, para que avances paso a paso. Material de práctica creado por Kingsbridge English Academy, independiente de los exámenes oficiales.",
    cp: "© 2026 Kingsbridge English Academy. Todos los derechos reservados.",
    lang: "Idioma", l1: ["Español", "index.html"], l2: ["English", "spanish/index.html"], aria: "Pie de página"
  };

  var CSS = '' +
    '.kbf{background:#080b19;color:#a9aec9;border-top:2px solid #e2ba68;font:400 14px/1.6 -apple-system,BlinkMacSystemFont,"Segoe UI","SF Pro Text",Roboto,Helvetica,Arial,sans-serif;margin-top:56px;text-align:left;position:relative}' +
    '.kbf *{box-sizing:border-box}' +
    '.kbf:before{content:"";position:absolute;left:0;right:0;top:-2px;height:2px;background:linear-gradient(90deg,transparent,#f3d58a,transparent)}' +
    '.kbf-w{max-width:1100px;margin:0 auto;padding:0 24px}' +
    '.kbf-top{display:grid;grid-template-columns:1.25fr 2.75fr;gap:48px;padding:56px 0 40px}' +
    '.kbf-seal{display:block;font:600 12px "KB Lora",Georgia,serif;letter-spacing:.36em;text-transform:uppercase;color:#e2ba68}' +
    '.kbf-nm{font:400 26px/1.15 "KB Lora",Georgia,serif;color:#fff;margin:8px 0 6px}' +
    '.kbf-tag{font:italic 400 15px "KB Lora",Georgia,serif;color:#f3d58a;margin:0 0 14px}' +
    '.kbf a.kbf-bd{display:inline-flex;align-items:center;gap:12px;margin:6px 0 10px;text-decoration:none;color:#e9d9b0}' +
    '.kbf a.kbf-bd:hover{text-decoration:none;color:#fff}' +
    '.kbf a.kbf-bd{flex-direction:row-reverse;align-items:center;gap:12px}' +
    '.kbf-bd-r{display:flex;flex-direction:column;align-items:flex-end;gap:2px}' +
    '.kbf-bd-v{display:inline-flex;align-items:center;gap:6px;font:500 clamp(15px,4vw,18px)/1.2 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;letter-spacing:.01em;white-space:nowrap}' +
    '.kbf-bd-in{flex:none;width:44px;height:44px;border-radius:7px;background:#0a66c2;color:#fff;display:grid;place-items:center;font:700 27px/1 Arial,Helvetica,sans-serif;letter-spacing:-2px;transition:transform .2s}' +
    '.kbf a.kbf-bd:hover .kbf-bd-in{transform:translateY(-2px)}' +
    '.kbf-bd-ck{flex:none;width:26px;height:26px}' +
    '.kbf-bd-t{font:500 clamp(15px,4vw,18px)/1.2 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;letter-spacing:.01em;white-space:nowrap}' +
    '.kbf-cols{display:grid;grid-template-columns:repeat(4,1fr);gap:28px}' +
    '.kbf-cols h3{margin:0 0 14px;font:700 11px/1.2 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#e2ba68}' +
    '.kbf-cols ul{list-style:none;margin:0;padding:0}' +
    '.kbf-cols li{margin:0 0 9px}' +
    '.kbf a{color:#c9cde4;text-decoration:none;transition:color .15s}' +
    '.kbf a:hover,.kbf a:focus-visible{color:#fff;text-decoration:underline;text-underline-offset:3px;text-decoration-color:#e2ba68;outline:none}' +
    '.kbf-cols p{margin:0;color:#7f84a3;font-size:13px}' +
    '.kbf-mid{border-top:1px solid rgba(226,186,104,.22);padding:26px 0;display:grid;grid-template-columns:auto 1fr;gap:18px 28px;align-items:start}' +
    '.kbf-reg{display:flex;gap:12px;align-items:flex-start}' +
    '.kbf-reg svg{flex:none;width:30px;height:30px;color:#e2ba68}' +
    '.kbf-reg b{display:block;color:#fff;font:400 15px "KB Lora",Georgia,serif}' +
    '.kbf-reg span{display:block;font-size:12.5px;color:#7f84a3;margin-top:2px}' +
    '.kbf-note{margin:0;font-size:12px;line-height:1.65;color:#7f84a3;max-width:560px}' +
    '.kbf-bot{border-top:1px solid rgba(255,255,255,.08);padding:20px 0 92px;display:flex;flex-wrap:wrap;gap:12px 24px;justify-content:space-between;align-items:center;font-size:12.5px;color:#7f84a3}' +
    '.kbf-lg{display:flex;align-items:center;gap:10px}' +
    '.kbf-lg svg{width:16px;height:16px;color:#e2ba68}' +
    '.kbf-lg a{padding:3px 10px;border:1px solid rgba(226,186,104,.35);border-radius:999px;font-size:12px}' +
    '.kbf-lg a[aria-current]{background:rgba(226,186,104,.16);color:#fff;border-color:#e2ba68}' +
    '.kbf-lnk{display:flex;gap:18px;flex-wrap:wrap}' +
    '.kbf .kbf-bot a.kbf-bd{margin:0 0 0 auto}' +
    '@media(max-width:860px){.kbf .kbf-bot a.kbf-bd{margin:6px 0 0 auto}}' +
    '@media(max-width:860px){.kbf-top{grid-template-columns:1fr;gap:30px;padding:44px 0 30px}.kbf-cols{grid-template-columns:repeat(2,1fr);gap:26px 20px}.kbf-mid{grid-template-columns:1fr}}' +
    '@media(max-width:420px){.kbf-w{padding:0 20px}.kbf-nm{font-size:23px}.kbf-bot{flex-direction:column;align-items:flex-start}.kbf-bot .kbf-bd{align-self:flex-end}}';

  function esc(s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;"); }
  function col(c) {
    var h = '<div><h3>' + esc(c.h) + '</h3><ul>', i;
    for (i = 0; i < c.l.length; i++) {
      var ext = /^https?:/i.test(c.l[i][1]);
      h += '<li><a href="' + u(c.l[i][1]) + '"' + (ext ? ' target="_blank" rel="noopener"' : '') + '>' + esc(c.l[i][0]) + '</a></li>';
    }
    h += '</ul>' + (c.t ? '<p>' + esc(c.t) + '</p>' : '') + '</div>';
    return h;
  }
  function build() {
    var cols = '', i;
    for (i = 0; i < T.cols.length; i++) cols += col(T.cols[i]);
    var shield = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/><path d="M9 12l2.2 2.2L15.2 10"/></svg>';
    var arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
    var globe = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg>';
    var f = document.createElement("footer");
    f.className = "kbf";
    f.setAttribute("aria-label", T.aria);
    var ck = '<svg class="kbf-bd-ck" viewBox="0 0 24 24" aria-hidden="true"><path fill="#378fe9" d="M12 1.2l2.3 1.7 2.8-.2 1.2 2.6 2.5 1.3-.2 2.8L22.4 12l-1.8 2.3.2 2.8-2.5 1.3-1.2 2.6-2.8-.2L12 22.8l-2.3-1.7-2.8.2-1.2-2.6-2.5-1.3.2-2.8L1.6 12l1.8-2.3-.2-2.8 2.5-1.3 1.2-2.6 2.8.2z"/><path fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" d="M7.8 12.2l3 3 5.6-6"/></svg>';
    var BADGE = '<a class="kbf-bd" href="https://www.linkedin.com/in/eduardo-lopez-kingsbridge" target="_blank" rel="noopener" aria-label="' + T.li[2] + '"><span class="kbf-bd-in" aria-hidden="true">in</span><span class="kbf-bd-r"><span class="kbf-bd-t">' + T.li[3].split(' · ')[0] + '</span><span class="kbf-bd-v">' + ck + '<span>' + T.li[3].split(' · ')[1] + '</span></span></span></a>';
    f.innerHTML = '<div class="kbf-w"><div class="kbf-top"><div><span class="kbf-seal">Kingsbridge</span><div class="kbf-nm">English Academy</div><p class="kbf-tag">' + T.tag + '</p></div><div class="kbf-cols">' + cols + '</div></div>' +
      '<div class="kbf-mid"><div class="kbf-reg">' + shield + '<div><b>' + T.reg + '</b><span>' + T.reg2 + '</span></div></div><p class="kbf-note">' + T.note + '</p></div>' +
      '<div class="kbf-bot"><span>' + T.cp + '</span><div class="kbf-lg">' + globe + '<span>' + T.lang + '</span><a href="' + u(T.l1[1]) + '" aria-current="true">' + T.l1[0] + '</a><a href="' + u(T.l2[1]) + '">' + T.l2[0] + '</a></div>' + BADGE + '</div></div>';
    return f;
  }
  function run() {
    if (!document.getElementById("kbf-css")) {
      var st = document.createElement("style"); st.id = "kbf-css"; st.textContent = CSS; document.head.appendChild(st);
    }
    var old = document.querySelector("footer.kb-pie") || document.querySelector("footer");
    var nf = build();
    if (old) old.parentNode.replaceChild(nf, old); else document.body.appendChild(nf);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run); else run();
})();
