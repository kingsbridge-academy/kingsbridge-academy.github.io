/* Control de acceso al curso Inglés para restaurantes. Los códigos se guardan solo como hashes. */
(function(){
"use strict";
var SALT="kb.rest.2026",KEY="kb.restaurantes.access1",
HASHES=[2787728087995769,607243369249977,6026595205168407,5462432285124015,4479706984452085,3197054737096860,3013960943662443,7889303308413905,2143271727925608,6742737891965213,8687307261197979,5012132146979971];
function hash(s){var h1=0xdeadbeef,h2=0x41c6ce57,i,c;for(i=0;i<s.length;i++){c=s.charCodeAt(i);h1=Math.imul(h1^c,2654435761);h2=Math.imul(h2^c,1597334677)}
h1=Math.imul(h1^(h1>>>16),2246822507)^Math.imul(h2^(h2>>>13),3266489909);h2=Math.imul(h2^(h2>>>16),2246822507)^Math.imul(h1^(h1>>>13),3266489909);return 4294967296*(2097151&h2)+(h1>>>0)}
function norm(c){return String(c||"").toUpperCase().replace(/[^A-Z0-9]/g,"")}
function valid(c){c=norm(c);if(c.length<8)return false;return HASHES.indexOf(hash(SALT+c))>-1}
function get(){try{return JSON.parse(localStorage.getItem(KEY))||[]}catch(e){return window.__kbracc||[]}}
function put(a){try{localStorage.setItem(KEY,JSON.stringify(a))}catch(e){window.__kbracc=a}}
window.KBR_ACCESS={
 has:function(){return get().some(valid)},
 add:function(v){if(!valid(v))return false;var a=get(),n=norm(v);if(a.indexOf(n)<0){a.push(n);put(a)}return true}
};
})();
