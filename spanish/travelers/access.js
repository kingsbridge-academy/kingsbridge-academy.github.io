/* Access control for Travel Spanish. Codes are stored only as hashes. */
(function(){
"use strict";
var SALT="kb.es.2026",HASHES={"TRAVEL": [5088628767401141, 4078782651835458, 6755172297336182, 445180174976887, 6727506669434982, 5514007068977814, 1004307428523760, 8363711985570620, 4029301155091316, 5157150506043139]},KEY="kb.travelers.access";

function hash(s){var h1=0xdeadbeef,h2=0x41c6ce57,i,c;for(i=0;i<s.length;i++){c=s.charCodeAt(i);h1=Math.imul(h1^c,2654435761);h2=Math.imul(h2^c,1597334677)}
h1=Math.imul(h1^(h1>>>16),2246822507)^Math.imul(h2^(h2>>>13),3266489909);h2=Math.imul(h2^(h2>>>16),2246822507)^Math.imul(h1^(h1>>>13),3266489909);return 4294967296*(2097151&h2)+(h1>>>0)}
function norm(c){return String(c||"").toUpperCase().replace(/[^A-Z0-9]/g,"")}
function groupOf(c){c=norm(c);if(c.length<6)return null;var k=hash(SALT+c);for(var g in HASHES){if(HASHES[g].indexOf(k)>-1)return g}return null}
function get(){try{return JSON.parse(localStorage.getItem(KEY))||[]}catch(e){return window.__kbacc||[]}}
function put(a){try{localStorage.setItem(KEY,JSON.stringify(a))}catch(e){window.__kbacc=a}}

function ok(){return get().some(function(c){return groupOf(c)==="TRAVEL"})}
function start(){var m=document.createElement("script");m.textContent=document.getElementById("kbmain").textContent;document.body.appendChild(m)}
function gate(){
 var app=document.getElementById("app");
 app.innerHTML='<div class="gate"><span class="gate-k">Members only</span><h1>Enter your <em>access code</em></h1><p>Your code arrives by email or WhatsApp within 24 hours of your payment.</p><form id="gf" autocomplete="off"><input id="gc" type="text" autocapitalize="characters" spellcheck="false" placeholder="KT-XXXX-XXXX" aria-label="Access code"><button class="gate-b" type="submit">Unlock</button></form><p class="gate-e" id="ge" role="alert"></p><p class="gate-l"><a href="../travel.html">Get Travel Spanish</a> &middot; <a href="https://wa.me/kingsbridge.academy" target="_blank" rel="noopener">WhatsApp</a></p></div>';
 document.getElementById("gf").onsubmit=function(e){e.preventDefault();var v=document.getElementById("gc").value;if(groupOf(v)==="TRAVEL"){var a=get();a.push(norm(v));put(a);app.innerHTML="";start()}else{document.getElementById("ge").textContent="That code is not valid. Please check it and try again."}}}
if(ok())start();else gate();
})();
