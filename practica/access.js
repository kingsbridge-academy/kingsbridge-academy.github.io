/* Control de acceso para la práctica de inglés. Codes are stored only as hashes. */
(function(){
"use strict";
var SALT="kb.en.2026",HASHES={"A1": [7347670192506884, 4187342293678199, 8118766464445641, 3763119671398416, 432773533859213, 2489377702718845, 946327730709981, 1799465114975679, 1321657742436513, 5091090675182738], "A2": [8000460783464115, 2540336063673775, 5221368905992992, 3868510823982104, 8038293785832506, 3993196056185254, 224215193586194, 4572940667840695, 1172043790883142, 302028990328037], "B1": [8744653980924868, 1454657319551112, 4111270412245628, 439516728383067, 3908266432014681, 4418226526635353, 1039558836411849, 1527680769304250, 6408974214146065, 8824835061748038], "B2": [3517809666412155, 2580195219637409, 3444571253983267, 95065627761927, 1407112489558870, 3407952313628750, 3293218671078839, 3280762539097642, 3221037312070952, 2389982238123465], "C1": [8331720950641909, 6003909312040724, 8949634684604431, 7087345981060821, 2338467412117681, 8897815374075083, 4242051585977704, 1925720245394520, 7743836140339534, 7304985509955952], "ALL": [8986631839906277, 7081823114097844, 5983462855787018, 8082238824294926, 6640943951003623, 5899020454369685, 2406779108090377, 1104873152958112, 1014663990364417, 2778263826104151]},KEY="kb.practica.access2",LV=["A1","A2","B1","B2","C1"];

function hash(s){var h1=0xdeadbeef,h2=0x41c6ce57,i,c;for(i=0;i<s.length;i++){c=s.charCodeAt(i);h1=Math.imul(h1^c,2654435761);h2=Math.imul(h2^c,1597334677)}
h1=Math.imul(h1^(h1>>>16),2246822507)^Math.imul(h2^(h2>>>13),3266489909);h2=Math.imul(h2^(h2>>>16),2246822507)^Math.imul(h1^(h1>>>13),3266489909);return 4294967296*(2097151&h2)+(h1>>>0)}
function norm(c){return String(c||"").toUpperCase().replace(/[^A-Z0-9]/g,"")}
function groupOf(c){c=norm(c);if(c.length<6)return null;var k=hash(SALT+c);for(var g in HASHES){if(HASHES[g].indexOf(k)>-1)return g}return null}
function get(){try{return JSON.parse(localStorage.getItem(KEY))||[]}catch(e){return window.__kbacc||[]}}
function put(a){try{localStorage.setItem(KEY,JSON.stringify(a))}catch(e){window.__kbacc=a}}

function levels(){var out=[];get().forEach(function(c){var g=groupOf(c);if(!g)return;(g==="ALL"?LV:[g]).forEach(function(l){if(out.indexOf(l)<0)out.push(l)})});return LV.filter(function(l){return out.indexOf(l)>-1})}
window.KB_ADDCODE=function(v){var g=groupOf(v);if(!g)return false;var a=get(),n=norm(v);if(a.indexOf(n)<0){a.push(n);put(a)}return true};
function start(force){
 window.KB_UNLOCKED=force||levels();
 var s=document.createElement("script");s.src="preguntas.js";
 s.onload=function(){var m=document.createElement("script");m.textContent=document.getElementById("kbmain").textContent;document.body.appendChild(m)};
 document.body.appendChild(s)}
var TK="kb.en.trial",MAX=10;
function used(){try{return parseInt(localStorage.getItem(TK),10)||0}catch(e){return window.__kbtr||0}}
function setUsed(n){try{localStorage.setItem(TK,String(n))}catch(e){window.__kbtr=n}}
function left(){return Math.max(0,MAX-used())}
window.KB_TRIAL_TICK=function(){setUsed(Math.min(MAX,used()+1))};
function gate(ended){
 var app=document.getElementById("app"),L=left(),over=ended||L<=0;
 var trial=over?'':'<div class="kb-hero" id="gt" role="button" tabindex="0" aria-label="Empezar la prueba gratis" style="cursor:pointer;margin:0 0 26px"><span class="kb-hero-k">Prueba gratis</span><h2>Prueba tus primeras <em>'+L+' preguntas gratis</em></h2><p>Nivel A1, de regalo. Sin registro. <b>Toca aquí para empezar.</b></p></div>';
 app.innerHTML='<div class="gate">'+trial+'<span class="gate-k">'+(over?'Prueba gratis terminada':'Solo para miembros')+'</span><h1>'+(over?'Continúa con tu <em>código de acceso</em>':'Ingresa tu <em>código de acceso</em>')+'</h1>'+(over?'<p>Ya usaste tus preguntas gratis. Para seguir practicando, ingresa tu código.</p>':'')+'<form id="gf" autocomplete="off"><input id="gc" type="text" autocapitalize="characters" spellcheck="false" placeholder="KBE-A1-XXXX-XXXX" aria-label="Código de acceso"><button class="gate-b" type="submit">Desbloquear</button></form><p class="gate-e" id="ge" role="alert"></p><p>Tu código llega por correo o WhatsApp dentro de las 24 horas siguientes a tu pago. Abre el nivel o el paquete que compraste.</p><p class="gate-l"><a href="https://wa.me/kingsbridge.academy" target="_blank" rel="noopener">Consigue tu código por WhatsApp</a></p></div>';
 document.getElementById("gf").onsubmit=function(e){e.preventDefault();if(window.KB_ADDCODE(document.getElementById("gc").value)){if(over&&window.KB_TRIAL){location.reload()}else{app.innerHTML="";start()}}else{document.getElementById("ge").textContent="Ese código no es válido. Revísalo e inténtalo de nuevo."}};
 var gt=document.getElementById("gt");if(gt){var go=function(){app.innerHTML="";window.KB_TRIAL={max:MAX,left:left};start(["A1"])};gt.onclick=go;gt.onkeydown=function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();go()}}}}
window.KB_TRIAL_GATE=function(){gate(true)};
if(levels().length)start();else gate();
})();
