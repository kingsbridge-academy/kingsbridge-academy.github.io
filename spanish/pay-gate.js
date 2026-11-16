/* Interruptor de compras. Para ABRIR las ventas cambia  OPEN=false  por  OPEN=true  y publica. */
(function(){
var OPEN=false;
if(OPEN)return;
var css=document.createElement('style');
css.textContent='.kb-soon{max-width:760px;margin:0 auto;padding:14px 18px;background:#161d4a;border:1px solid #e2ba68;border-radius:6px;color:#fff;text-align:center;font:15px/1.6 system-ui,sans-serif}.kb-soon b{color:#e2ba68}'
+'.kb-md{position:fixed;inset:0;z-index:99999;background:rgba(4,6,16,.82);display:none;align-items:center;justify-content:center;padding:18px}.kb-md.on{display:flex}'
+'.kb-md div.b{max-width:420px;width:100%;background:#11162b;border:1px solid #e2ba68;border-radius:8px;padding:28px 22px;text-align:center;color:#d8d4ee;font:15px/1.6 system-ui,sans-serif}'
+'.kb-md h3{font:400 1.5rem Georgia,serif;color:#e2ba68;margin-bottom:10px}.kb-md p{margin:8px 0}'
+'.kb-md a,.kb-md button{display:block;margin:12px auto 0;padding:13px 18px;border-radius:3px;font:600 12px Georgia,serif;letter-spacing:.18em;text-transform:uppercase;text-decoration:none;cursor:pointer;border:1.5px solid #e2ba68}'
+'.kb-md a.p{background:#e2ba68;color:#12172f}.kb-md button{background:transparent;color:#e2ba68}';
document.head.appendChild(css);
var m=document.createElement('div');m.className='kb-md';m.setAttribute('role','dialog');m.setAttribute('aria-modal','true');m.setAttribute('aria-labelledby','kb-mt');
m.innerHTML='<div class="b"><h3 id="kb-mt">Coming very soon</h3><p>We are still developing this offer, so purchases are not open yet.</p><p>In the meantime you can try the practice for free, with 10 questions and no code.</p><a class="p" href="practice/index.html">Try it free</a><a href="https://wa.me/kingsbridge.academy" target="_blank" rel="noopener" style="color:#e2ba68">Ask us on WhatsApp</a><button type="button">Close</button></div>';
function show(){m.classList.add('on');var b=m.querySelector('button');b&&b.focus()}
function hide(){m.classList.remove('on')}
document.addEventListener('DOMContentLoaded',function(){
 document.body.appendChild(m);
 m.addEventListener('click',function(e){if(e.target===m||e.target.tagName==='BUTTON')hide()});
 document.addEventListener('keydown',function(e){if(e.key==='Escape')hide()});
 var t=document.querySelector('.kb-top');
 if(t){var n=document.createElement('div');n.style.cssText='padding:18px 16px 0';n.innerHTML='<div class="kb-soon"><b>Purchases open soon.</b> We are finishing this offer. You can already try the practice for free.</div>';t.parentNode.insertBefore(n,t.nextSibling)}
});
document.addEventListener('click',function(e){
 var a=e.target.closest&&e.target.closest('a[href*="paypal.com"]');
 if(!a)return;e.preventDefault();e.stopPropagation();show();
},true);
})();
