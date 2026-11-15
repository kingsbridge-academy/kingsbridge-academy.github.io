/* Access control for Spanish Practice. Codes are stored only as hashes. */
(function(){
"use strict";
var SALT="kb.es.2026",HASHES={"A1": [2246375825062098, 2595830370222413, 7194830346418878, 7417285375812599, 5292985578754109, 635973353895369, 4120630916302781, 8034403914252211, 2232938637225953, 87465553777497], "A2": [1796347731228682, 1701628805815375, 4889465074696631, 2524969981377307, 8078029142236131, 6997663770083119, 2171241333689386, 6630703366607088, 1270398506680495, 3445148691991719], "B1": [3846912765212882, 6617212620542373, 1728210923305455, 8180803128861125, 108946355091005, 7542647158768638, 8035896932797170, 4838559475013007, 227835915988071, 4070809055285080], "B2": [158920916582724, 1384703671305998, 3246878182634676, 5949798204820950, 7622040599948417, 4919593962729460, 5260126775449466, 7187228198984503, 1805026984024836, 8160131017113100], "C1": [2901560994666325, 476021652658532, 1161178076465392, 7884181171758932, 7926428732951357, 1667804627835312, 6315777291359734, 3567749312080746, 8749787035659694, 8912220707022719], "ALL": [3172913028570075, 372563451988011, 8956565984883057, 2643417218479323, 1783136727584386, 7392421012630110, 2677546827472491, 3123533234392149, 787323719318685, 4208179982002812]},KEY="kb.spanish.access2",LV=["A1","A2","B1","B2","C1"];

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
 var s=document.createElement("script");s.src="preguntas.js?v=40";
 s.onload=function(){var m=document.createElement("script");m.textContent=document.getElementById("kbmain").textContent;document.body.appendChild(m)};
 document.body.appendChild(s)}
var TK="kb.es.trial",MAX=10;
function used(){try{return parseInt(localStorage.getItem(TK),10)||0}catch(e){return window.__kbtr||0}}
function setUsed(n){try{localStorage.setItem(TK,String(n))}catch(e){window.__kbtr=n}}
function left(){return Math.max(0,MAX-used())}
window.KB_TRIAL_TICK=function(){setUsed(Math.min(MAX,used()+1))};
function gate(ended){
 var app=document.getElementById("app"),L=left(),over=ended||L<=0;
 var trial=over?'':'<div class="kb-hero" id="gt" role="button" tabindex="0" aria-label="Start the free trial" style="cursor:pointer;margin:0 0 26px"><span class="kb-hero-k">Free trial</span><h2>Try your first <em>'+L+' questions free</em></h2><p>Level A1, on us. No sign-up needed. <b>Tap here to start.</b></p></div>';
 app.innerHTML='<div class="gate">'+trial+'<span class="gate-k">'+(over?'Free trial complete':'Members only')+'</span><h1>'+(over?'Continue with your <em>access code</em>':'Enter your <em>access code</em>')+'</h1>'+(over?'<p>You have finished your free questions. To keep practising, enter your access code.</p>':'')+'<form id="gf" autocomplete="off"><input id="gc" type="text" autocapitalize="characters" spellcheck="false" placeholder="KB-A1-XXXX-XXXX" aria-label="Access code"><button class="gate-b" type="submit">Unlock</button></form><p class="gate-e" id="ge" role="alert"></p><p>Your code arrives by email or WhatsApp within 24 hours of your payment. It opens the level or package you bought.</p><p class="gate-l"><a href="https://wa.me/kingsbridge.academy" target="_blank" rel="noopener">Get your code on WhatsApp</a></p></div>';
 document.getElementById("gf").onsubmit=function(e){e.preventDefault();if(window.KB_ADDCODE(document.getElementById("gc").value)){if(over&&window.KB_TRIAL){location.reload()}else{app.innerHTML="";start()}}else{document.getElementById("ge").textContent="That code is not valid. Please check it and try again."}};
 var gt=document.getElementById("gt");if(gt){var go=function(){app.innerHTML="";window.KB_TRIAL={max:MAX,left:left};start(["A1"])};gt.onclick=go;gt.onkeydown=function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();go()}}}}
window.KB_TRIAL_GATE=function(){gate(true)};
if(levels().length)start();else gate();
})();
