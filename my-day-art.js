/* My Day: ilustraciones originales. (c) 2026 Graphics Records · Kingsbridge English Academy, Colombia. Todos los derechos reservados. */
(function(){
"use strict";
  var INK = '#3b2a20';
  var S = 'stroke="' + INK + '" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var SW = 'stroke="' + INK + '" stroke-width="4.8" stroke-linejoin="round" stroke-linecap="round"';

  function star(cx, cy, R, fill, up){
    var pts = [], r = R * 0.45, i, a, rad, st = up ? SW : S, a0 = up ? Math.PI / 2 : -Math.PI / 2;
    for (i = 0; i < 10; i++){
      a = a0 + i * Math.PI / 5; rad = i % 2 === 0 ? R : r;
      pts.push((cx + rad * Math.cos(a)).toFixed(1) + ',' + (cy + rad * Math.sin(a)).toFixed(1));
    }
    return '<polygon points="' + pts.join(' ') + '" fill="' + fill + '" ' + st + '/>';
  }

  /* ---------- pictures: y-down (original four) ---------- */
  function sunSVG(){
    var rays = '', i;
    for (i = 0; i < 12; i++) rays += '<polygon points="-8,-58 0,-84 8,-58" transform="translate(100,92) rotate(' + (i * 30) + ')" fill="#FFB703" ' + S + '/>';
    return rays + '<circle cx="100" cy="92" r="44" fill="#FFD43B" ' + S + '/>' +
      '<circle cx="86" cy="86" r="4.5" fill="' + INK + '"/><circle cx="114" cy="86" r="4.5" fill="' + INK + '"/>' +
      '<path d="M88 102 Q100 114 112 102" fill="none" ' + S + '/>' +
      '<circle cx="76" cy="99" r="6" fill="#FF9AA2"/><circle cx="124" cy="99" r="6" fill="#FF9AA2"/>' +
      '<ellipse cx="100" cy="180" rx="112" ry="46" fill="#7BC96F" ' + S + '/>';
  }
  function brushSVG(){
    return '<circle cx="30" cy="42" r="8" fill="#BEE3F8" ' + S + '/><circle cx="54" cy="24" r="5" fill="#BEE3F8" ' + S + '/><circle cx="14" cy="72" r="5" fill="#BEE3F8" ' + S + '/>' +
      '<path d="M80 58 C95 42 128 46 126 80 C124 102 112 110 108 142 C106 158 94 158 92 140 C90 122 70 122 68 140 C66 158 54 158 52 142 C48 110 34 102 34 80 C32 46 65 42 80 58 Z" fill="#fff" ' + S + '/>' +
      '<circle cx="64" cy="84" r="4.5" fill="' + INK + '"/><circle cx="92" cy="84" r="4.5" fill="' + INK + '"/>' +
      '<path d="M66 100 Q78 112 90 100" fill="none" ' + S + '/>' +
      '<circle cx="54" cy="98" r="5.5" fill="#FF9AA2"/><circle cx="102" cy="98" r="5.5" fill="#FF9AA2"/>' +
      '<g transform="translate(160,112) rotate(18)">' +
        '<rect x="-8" y="-5" width="16" height="72" rx="7" fill="#2B90D9" ' + S + '/>' +
        '<rect x="-12" y="-44" width="24" height="40" rx="5" fill="#fff" ' + S + '/>' +
        '<rect x="-10" y="-60" width="4" height="16" fill="#F59E0B" ' + S + '/><rect x="-4.5" y="-60" width="4" height="16" fill="#F59E0B" ' + S + '/>' +
        '<rect x="1" y="-60" width="4" height="16" fill="#F59E0B" ' + S + '/><rect x="6.5" y="-60" width="4" height="16" fill="#F59E0B" ' + S + '/>' +
        '<circle cx="-5" cy="-68" r="6" fill="#fff" ' + S + '/><circle cx="7" cy="-72" r="5" fill="#fff" ' + S + '/></g>';
  }
  function eatSVG(){
    var cereal = [[66,108],[94,114],[122,106],[148,112],[100,100],[78,96],[134,98]], c = '', i;
    for (i = 0; i < cereal.length; i++) c += '<circle cx="' + cereal[i][0] + '" cy="' + cereal[i][1] + '" r="8" fill="#F6C453" ' + S + '/><circle cx="' + cereal[i][0] + '" cy="' + cereal[i][1] + '" r="2.6" fill="#FFF1E0" stroke="' + INK + '" stroke-width="1.5"/>';
    return '<g transform="translate(152,26) rotate(22)"><rect x="-4.5" y="0" width="9" height="58" rx="4" fill="#C0C7CF" ' + S + '/><ellipse cx="0" cy="68" rx="14" ry="18" fill="#C0C7CF" ' + S + '/></g>' +
      '<rect x="68" y="150" width="64" height="16" rx="6" fill="#C2410C" ' + S + '/>' +
      '<path d="M28 108 C28 178 172 178 172 108 Z" fill="#F26B1D" ' + S + '/>' +
      '<ellipse cx="100" cy="108" rx="72" ry="18" fill="#FFF1E0" ' + S + '/>' + c +
      '<circle cx="86" cy="138" r="3.8" fill="' + INK + '"/><circle cx="114" cy="138" r="3.8" fill="' + INK + '"/>' +
      '<path d="M91 148 Q100 157 109 148" fill="none" ' + S + '/>' +
      '<circle cx="76" cy="146" r="4.5" fill="#FF9AA2"/><circle cx="124" cy="146" r="4.5" fill="#FF9AA2"/>';
  }
  function sleepSVG(){
    var z = 'font-family="Nunito,Poppins,Segoe UI,sans-serif" font-weight="900" fill="#6A5ACD"';
    return star(150, 40, 13, '#FFD43B') + star(40, 30, 9, '#FFD43B') + star(18, 122, 8, '#FFD43B') + star(72, 186, 9, '#FFD43B') + star(182, 168, 10, '#FFD43B') +
      '<path d="M115 30 C25 30 25 170 115 170 C85 145 85 55 115 30 Z" fill="#FFD43B" ' + S + '/>' +
      '<text x="116" y="152" font-size="48" ' + z + '>Z</text><text x="142" y="114" font-size="36" ' + z + '>Z</text><text x="160" y="84" font-size="28" ' + z + '>Z</text>';
  }

  /* ---------- pictures: y-up helpers (new four) ---------- */
  function wrapY(inner){ return '<g transform="translate(100,100) scale(.62,-.62)">' + inner + '</g>'; }
  function cY(cx, cy, r, f){ return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + f + '" ' + SW + '/>'; }
  function eY(x1, y1, x2, y2, f){ return '<ellipse cx="' + ((x1 + x2) / 2) + '" cy="' + ((y1 + y2) / 2) + '" rx="' + (Math.abs(x2 - x1) / 2) + '" ry="' + (Math.abs(y2 - y1) / 2) + '" fill="' + f + '" ' + SW + '/>'; }
  function rY(x, y, w, h, r, f){ return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + r + '" fill="' + f + '" ' + SW + '/>'; }
  function pY(d, f){ return '<path d="' + d + '" fill="' + f + '" ' + SW + '/>'; }
  function faceY(x, y, s){
    var e = s * 0.07;
    return '<circle cx="' + (x - 0.3 * s) + '" cy="' + (y + 0.15 * s) + '" r="' + e + '" fill="' + INK + '"/>' +
      '<circle cx="' + (x + 0.3 * s) + '" cy="' + (y + 0.15 * s) + '" r="' + e + '" fill="' + INK + '"/>' +
      '<path d="M' + (x - 0.244 * s) + ' ' + (y - 0.195 * s) + ' Q' + x + ' ' + (y - 0.445 * s) + ' ' + (x + 0.244 * s) + ' ' + (y - 0.195 * s) + '" fill="none" ' + SW + '/>' +
      '<circle cx="' + (x - 0.5 * s) + '" cy="' + (y - 0.08 * s) + '" r="' + (0.08 * s) + '" fill="#FF9AA2"/>' +
      '<circle cx="' + (x + 0.5 * s) + '" cy="' + (y - 0.08 * s) + '" r="' + (0.08 * s) + '" fill="#FF9AA2"/>';
  }
  function dressedSVG(){
    return wrapY(pY('M-35 95 L-100 75 L-145 15 L-110 -10 L-70 15 L-70 -110 L70 -110 L70 15 L110 -10 L145 15 L100 75 L35 95 C25 55 -25 55 -35 95 Z', '#FF8FAB') +
      star(-112, 28, 12, '#FFD43B', true) + star(112, 28, 12, '#FFD43B', true) + faceY(0, -25, 95));
  }
  function playSVG(){
    var cols = ['#FF6B6B', '#FFD43B', '#4DABF7', '#FF6B6B', '#FFD43B', '#4DABF7'], i, a0, a1, w = '';
    for (i = 0; i < 6; i++){
      a0 = (i * 60 + 20) * Math.PI / 180; a1 = a0 + Math.PI / 3;
      w += pY('M0 10 L' + (85 * Math.cos(a0)).toFixed(1) + ' ' + (10 + 85 * Math.sin(a0)).toFixed(1) + ' A85 85 0 0 1 ' + (85 * Math.cos(a1)).toFixed(1) + ' ' + (10 + 85 * Math.sin(a1)).toFixed(1) + ' Z', cols[i]);
    }
    return wrapY(eY(-75, -122, 75, -98, '#C9D6BF') + w + cY(0, 10, 13, '#FFFFFF') +
      '<ellipse cx="-43" cy="65" rx="15" ry="13" fill="#fff"/>' +
      '<path d="M-135 70 L-108 70 M-135 40 L-108 40 M-135 10 L-108 10" fill="none" ' + SW + '/>' +
      star(112, 95, 16, '#FFD43B', true) + star(-128, -60, 12, '#FFD43B', true));
  }
  function dinnerSVG(){
    return wrapY(rY(-143, -105, 14, 95, 6, '#C0C7CF') + rY(-152, -12, 32, 24, 6, '#C0C7CF') +
      rY(-151, 6, 7, 52, 3, '#C0C7CF') + rY(-139, 6, 7, 52, 3, '#C0C7CF') + rY(-127, 6, 7, 52, 3, '#C0C7CF') +
      rY(129, -105, 14, 95, 6, '#C0C7CF') + eY(118, -18, 154, 48, '#C0C7CF') +
      cY(0, 0, 100, '#FFFFFF') + cY(0, 0, 72, '#EEF2F6') + eY(-48, -54, 48, 12, '#FFF1B8') + faceY(0, -20, 58) +
      rY(-49, 14, 14, 18, 0, '#9BD17B') + cY(-52, 36, 15, '#51B04A') + cY(-32, 42, 16, '#51B04A') + cY(-42, 56, 14, '#51B04A') +
      cY(42, 36, 18, '#FF6B6B') + cY(42, 55, 5, '#51B04A'));
  }
  function bathSVG(){
    var foam = [[-95,45,26],[-55,60,32],[-10,52,28],[35,62,34],[80,48,28],[108,38,18]], bub = [[-100,105,14],[-70,132,9],[112,108,12],[96,138,8],[-132,70,8]], i, f = '', b = '';
    for (i = 0; i < foam.length; i++) f += cY(foam[i][0], foam[i][1], foam[i][2], '#FFFFFF');
    for (i = 0; i < bub.length; i++) b += cY(bub[i][0], bub[i][1], bub[i][2], '#BEE3F8');
    return wrapY(eY(-100, -96, -60, -72, '#9AA5B1') + eY(60, -96, 100, -72, '#9AA5B1') +
      rY(-125, -80, 250, 100, 38, '#9AD4F5') + faceY(0, -35, 70) + rY(-135, 5, 270, 28, 12, '#FFFFFF') + f +
      eY(8, 88, 64, 116, '#FFD43B') + cY(52, 128, 15, '#FFD43B') + eY(63, 123, 82, 133, '#FF9F1C') +
      '<circle cx="54" cy="132" r="2.6" fill="' + INK + '"/>' + b);
  }

  var ITEMS = [
    { id:'wake',    text:'I wake up',        gest:'Stretch your arms',       es:'Estira los brazos',          color:'#F59E0B', bg:'#FFF3B0', svg:sunSVG },
    { id:'brush',   text:'I brush my teeth', gest:'Pretend to brush',        es:'Finge cepillarte',           color:'#2B90D9', bg:'#D6F0FF', svg:brushSVG },
    { id:'dressed', text:'I get dressed',    gest:'Pretend to put on a shirt', es:'Finge ponerte la camiseta', color:'#E64980', bg:'#FFE3EC', svg:dressedSVG },
    { id:'eat',     text:'I eat breakfast',  gest:'Pretend to eat',          es:'Finge comer con cuchara',    color:'#F26B1D', bg:'#FFE1CC', svg:eatSVG },
    { id:'play',    text:'I play',           gest:'Jump, jump, jump',        es:'Salta o rueda la pelota',    color:'#2F9E44', bg:'#DFF5E1', svg:playSVG },
    { id:'dinner',  text:'I eat dinner',     gest:'Pretend to eat with a fork', es:'Finge comer con tenedor', color:'#C92A2A', bg:'#FFE0E0', svg:dinnerSVG },
    { id:'bath',    text:'I take a bath',    gest:'Rub your arms',           es:'Frota tus brazos',           color:'#1098AD', bg:'#D3F9FF', svg:bathSVG },
    { id:'sleep',   text:'I go to sleep',    gest:'Hands under your cheek',  es:'Manos bajo la mejilla',      color:'#6A5ACD', bg:'#E3E0FF', svg:sleepSVG }
  ];
  function pic(it){ return '<svg viewBox="0 0 200 200" role="img" aria-label="' + it.text + '">' + it.svg() + '</svg>'; }
  function wheel(){
    var R = 140, w = '', k, p0, p1, it;
    function pt(a){ var r = a * Math.PI / 180; return [(R * Math.sin(r)).toFixed(1), (-R * Math.cos(r)).toFixed(1)]; }
    for (k = 0; k < 8; k++){
      it = ITEMS[k]; p0 = pt(k * 45 - 22.5); p1 = pt(k * 45 + 22.5);
      w += '<path d="M0 0 L' + p0[0] + ' ' + p0[1] + ' A' + R + ' ' + R + ' 0 0 1 ' + p1[0] + ' ' + p1[1] + ' Z" fill="' + it.bg + '" stroke="' + it.color + '" stroke-width="3"/>' +
        '<g transform="rotate(' + (k * 45) + ') translate(0,-92)"><g transform="translate(-27,-27) scale(.27)">' + it.svg() + '</g></g>';
    }
    return '<svg viewBox="-150 -150 300 300" role="img" aria-label="Wheel">' + w +
      '<circle r="144" fill="none" stroke="' + INK + '" stroke-width="6"/><circle r="16" fill="#FFD43B" stroke="' + INK + '" stroke-width="4"/></svg>';
  }
  window.MyDayArt = { ITEMS: ITEMS, pic: pic, wheel: wheel };
})();
