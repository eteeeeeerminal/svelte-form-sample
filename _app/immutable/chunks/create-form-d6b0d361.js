import{w as nt}from"./index-2eefa36b.js";import{$ as it}from"./index-87c7d9f9.js";function st(e,...t){const r=e.subscribe(...t);return r.unsubscribe?()=>r.unsubscribe():r}function Ae(e){let t;return st(e,r=>t=r)(),t}class ot extends Error{constructor(t,r){super(t),this.name="FelteSubmitError",this.response=r}}function at(e,t){return Object.keys(e).some(n=>t(e[n]))}function Ce(e,t){return Object.keys(e||{}).reduce((n,i)=>Object.assign(Object.assign({},n),{[i]:t(e[i])}),{})}function p(e){return Object.prototype.toString.call(e)==="[object Object]"}function G(e){return Object.keys(e||{}).reduce((t,r)=>Object.assign(Object.assign({},t),{[r]:p(e[r])?G(e[r]):Array.isArray(e[r])?[...e[r]]:e[r]}),{})}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function ut(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}function lt(e){return function(t){if(p(t)){const r=J(t,e);return ut(r,["key"])}return e}}function J(e,t){return Ce(e,r=>p(r)?J(r,t):Array.isArray(r)?r.map(lt(t)):t)}function Ee(...e){const t=e.pop(),r=e.shift();if(typeof r=="string")return r;const n=G(r);if(e.length===0)return n;for(const i of e){if(!i)continue;if(typeof i=="string")return i;let s=t(n,i);if(typeof s<"u")return s;const a=Array.from(new Set(Object.keys(n).concat(Object.keys(i))));for(const u of a)if(s=t(n[u],i[u]),typeof s<"u")n[u]=s;else if(p(i[u])&&p(n[u]))n[u]=Ee(n[u],i[u],t);else if(Array.isArray(i[u]))n[u]=i[u].map((d,h)=>{if(!p(d))return d;const E=Array.isArray(n[u])?n[u][h]:n[u];return Ee(E,d,t)});else if(p(i[u])){const d=J(G(i[u]),void 0);n[u]=Ee(d,i[u],t)}else typeof i[u]<"u"&&(n[u]=i[u])}return n}function ct(e,t){if(!(p(e)&&p(t))){if(Array.isArray(t)){if(t.some(p))return;const r=Array.isArray(e)?e:[];return t.map((n,i)=>{var s;return(s=r[i])!==null&&s!==void 0?s:n})}if(typeof e<"u")return e}}function Xe(...e){return Ee(...e,ct)}function Qe(...e){return Ee(...e,()=>{})}function de(e,t,r){const n=s=>String.prototype.split.call(t,s).filter(Boolean).reduce((a,u)=>a!=null?a[u]:a,e),i=n(/[,[\]]+?/)||n(/[,[\].]+?/);return i===void 0||i===e?r:i}function Re(e,t,r){e&&(e=G(e)),p(e)||(e={});const n=Array.isArray(t)?t:t.match(/[^.[\]]+/g)||[],i=n[n.length-1];if(!i)return e;let s=e;for(let a=0;a<n.length-1;a++){const u=n[a];if(!s[u]||!p(s[u])&&!Array.isArray(s[u])){const d=n[a+1];isNaN(Number(d))?s[u]={}:s[u]=[]}s=s[u]}return s[i]=r(s[i]),e}function g(e,t,r){return Re(e,t,()=>r)}function xe(e,t){if(!e||Object(e)!==e)return;typeof e<"u"&&(e=G(e));const r=Array.isArray(t)?t:t.toString().match(/[^.[\]]+/g)||[],n=r.length===1?e:de(e,r.slice(0,-1).join("."));return Array.isArray(n)?n.splice(Number(r[r.length-1]),1):n==null||delete n[r[r.length-1]],e}function Le(e,t){return at(e,r=>p(r)?Le(r,t):Array.isArray(r)?r.length===0||r.every(n=>typeof n=="string")?t(r):r.some(n=>p(n)?Le(n,t):t(n)):t(r))}function Te(e){var t;return((t=e)===null||t===void 0?void 0:t.nodeName)==="INPUT"}function dt(e){var t;return((t=e)===null||t===void 0?void 0:t.nodeName)==="TEXTAREA"}function De(e){var t;return((t=e)===null||t===void 0?void 0:t.nodeName)==="SELECT"}function He(e){var t;return((t=e)===null||t===void 0?void 0:t.nodeName)==="FIELDSET"}function W(e){return Te(e)||dt(e)||De(e)}function qe(e){return e.nodeType===Node.ELEMENT_NODE}function $(e,t){return t!=null?t:W(e)?e.name:""}function $e(e){let t=e;for(;t&&t.nodeName!=="FORM";){if(t.hasAttribute("data-felte-ignore"))return!0;t=t.parentElement}return!1}function ft(e,t){if(!(p(e)||p(t))){if(e===null||e==="")return t;if(t===null||t===""||!t)return e;if(!(!e||!t)){if(Array.isArray(e)){if(!Array.isArray(t))return[...e,t];const r=[],n=Math.max(t.length,e.length);for(let i=0;i<n;i++){let s=e[i],a=t[i];!p(s)&&!p(a)?(Array.isArray(s)||(s=[s]),Array.isArray(a)||(a=[a]),r.push(...s,...a)):r.push(ke([s!=null?s:{},a!=null?a:{}]))}return r.filter(Boolean)}return Array.isArray(t)||(t=[t]),[e,...t].reduce((r,n)=>r.concat(n),[]).filter(Boolean)}}}function ke(e){return Ee(...e,ft)}function vt(e,t){return t?(Array.isArray(t)?t:[t]).map(n=>n(e)):[]}function Be(e,t){return t?Array.isArray(t)?t.reduce((r,n)=>n(r),e):t(e):e}function Ye(e=8){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let r="";for(let n=0;n<e;n++)r+=t.charAt(Math.floor(Math.random()*t.length));return r}function Me(e,t,{onInit:r,onEnd:n}={}){let i;return(...s)=>{i||r==null||r(),i&&clearTimeout(i),i=setTimeout(()=>{e.apply(this,s),i=void 0,n==null||n()},t)}}function Ke(e){if(W(e))return[e];if(e.childElementCount===0)return[];const t=new Set;for(const r of e.children){if(W(r)&&t.add(r),He(r))for(const n of r.elements)W(n)&&t.add(n);r.childElementCount>0&&Ke(r).forEach(n=>t.add(n))}return Array.from(t)}function Ze(e){for(const t of e.elements)!W(t)&&!He(t)||e.hasAttribute("data-felte-keep-on-remove")&&!t.hasAttribute("data-felte-keep-on-remove")&&(t.dataset.felteKeepOnRemove=e.dataset.felteKeepOnRemove)}function Ve(e){return e.type.match(/^(number|range)$/)?e.value?+e.value:void 0:e.value}function Ge(e){var t;let r={},n={};for(const i of e.elements){if(He(i)&&Ze(i),!W(i)||!i.name)continue;const s=$(i);if(Te(i)){if(i.type==="checkbox"){if(typeof de(r,s)>"u"){if(Array.from(e.querySelectorAll(`[name="${i.name}"]`)).filter(d=>W(d)?s===$(d):!1).length===1){r=g(r,s,i.checked),n=g(n,s,!1);continue}r=g(r,s,i.checked?[i.value]:[]),n=g(n,s,!1);continue}Array.isArray(de(r,s))&&i.checked&&(r=Re(r,s,u=>[...u,i.value]));continue}if(i.type==="radio"){if(de(r,s))continue;r=g(r,s,i.checked?i.value:void 0),n=g(n,s,!1);continue}if(i.type==="file"){r=g(r,s,i.multiple?Array.from(i.files||[]):(t=i.files)===null||t===void 0?void 0:t[0]),n=g(n,s,!1);continue}}else if(De(i)){if(!i.multiple)r=g(r,s,i.value);else{const d=Array.from(i.options).filter(h=>h.selected).map(h=>h.value);r=g(r,s,d)}n=g(n,s,!1);continue}const a=Ve(i);r=g(r,s,a),n=g(n,s,!1)}return{defaultData:r,defaultTouched:n}}function Ue(e,t){var r;if(!W(e))return;const n=t;if(Te(e)){if(e.type==="checkbox"){const i=n;if(typeof i>"u"||typeof i=="boolean"){e.checked=!!i;return}Array.isArray(i)&&(i.includes(e.value)?e.checked=!0:e.checked=!1);return}if(e.type==="radio"){const i=n;e.value===i?e.checked=!0:e.checked=!1;return}if(e.type==="file"){e.files=null,e.value="";return}}else if(De(e)){if(e.multiple){if(Array.isArray(n)){e.value=String((r=n[0])!==null&&r!==void 0?r:"");const s=n.map(a=>String(a));for(const a of e.options)s.includes(a.value)?a.selected=!0:a.selected=!1}}else{e.value=String(n!=null?n:"");for(const s of e.options)s.value===String(n)?s.selected=!0:s.selected=!1}return}e.value=String(n!=null?n:"")}function We(e,t){for(const r of e.elements){if(He(r)&&Ze(r),!W(r)||!r.name)continue;const n=$(r);Ue(r,de(t,n))}}const mt={attributes:!0,attributeFilter:["data-felte-validation-message","aria-invalid"]};function xt(e,t){var r,n;let i,s,a,u,d,h;typeof e=="string"?(i=e,s=t==null?void 0:t.defaultValue,a=(r=t==null?void 0:t.touchOnChange)!==null&&r!==void 0?r:!1,h=t==null?void 0:t.onFormReset):(i=e.name,s=e.defaultValue,a=(n=e.touchOnChange)!==null&&n!==void 0?n:!1,h=e==null?void 0:e.onFormReset);function E(w,A){if(!d)return;Ue(d,A);const T=new Event(w,{bubbles:!0,composed:!0});d.dispatchEvent(T)}function O(w){w.forEach(()=>{const A=d.getAttribute("aria-invalid");A?u.setAttribute("aria-invalid",A):u.removeAttribute("aria-invalid");const T=d.getAttribute("data-felte-validation-message");T?u.setAttribute("data-felte-validation-message",T):u.removeAttribute("data-felte-validation-message")})}function N(w){!h||(Ue(d,s),h(w))}function D(w){u=w;let A,T;if(W(w))return d=w,d.name=i,{};{let q=!1,_=!1;return setTimeout(()=>{if(_)return;const j=u.parentNode;if(!j||!qe(j))return;const x=j.querySelector(`[name="${i}"]`);if(!x||!W(x)){const U=document.createElement("input");U.type="hidden",U.name=i,j.insertBefore(U,w.nextSibling),d=U,q=!0}else d=x;Ue(d,s),A=new MutationObserver(O),A.observe(d,mt),T=d.closest("form"),T==null||T.addEventListener("reset",N)}),{destroy(){var j;q&&((j=d.parentNode)===null||j===void 0||j.removeChild(d)),_=!0,A==null||A.disconnect(),T==null||T.removeEventListener("reset",N)}}}}function k(w){E(a?"change":"input",w)}function P(){E("focusout")}return{field:D,onInput:k,onChange:k,onBlur:P}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function et(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}function ce(e,t){return Ce(e,r=>p(r)?ce(r,t):Array.isArray(r)?r.length===0||r.every(n=>typeof n=="string")?t:r.map(n=>{const i=ce(n,t);return et(i,["key"])}):t)}function fe(e){return e?Ce(e,t=>p(t)?fe(t):Array.isArray(t)?t.length===0||t.every(r=>typeof r=="string")?t:t.map(r=>{if(!p(r))return r;const n=fe(r);return n.key||(n.key=Ye()),n}):t):{}}function Ie(e){return e?Ce(e,t=>p(t)?fe(t):Array.isArray(t)?t.length===0||t.every(r=>typeof r=="string")?t:t.map(r=>{if(!p(r))return r;const n=fe(r);return et(n,["key"])}):t):{}}function yt(){class e extends CustomEvent{constructor(i){super("feltesuccess",{detail:i})}}class t extends CustomEvent{constructor(i){super("felteerror",{detail:i,cancelable:!0})}setErrors(i){this.preventDefault(),this.errors=i}}class r extends Event{constructor(){super("feltesubmit",{cancelable:!0})}handleSubmit(i){this.onSubmit=i}handleError(i){this.onError=i}handleSuccess(i){this.onSuccess=i}}return{createErrorEvent:n=>new t(n),createSubmitEvent:()=>new r,createSuccessEvent:n=>new e(n)}}function pt(e){if(!!e)return async function(){let r=new FormData(e);const n=new URL(e.action),i=e.method.toLowerCase()==="get"?"get":n.searchParams.get("_method")||e.method;let s=e.enctype;e.querySelector('input[type="file"]')&&(s="multipart/form-data"),(i==="get"||s==="application/x-www-form-urlencoded")&&(r=new URLSearchParams(r));let a;i==="get"?(r.forEach((d,h)=>{n.searchParams.append(h,d)}),a={method:i,headers:{Accept:"application/json"}}):a={method:i,body:r,headers:Object.assign(Object.assign({},s!=="multipart/form-data"&&{"Content-Type":s}),{Accept:"application/json"})};const u=await window.fetch(n.toString(),a);if(u.ok)return u;throw new ot("An error occurred while submitting the form",u)}}function je(e,t,r,n){return Re(e,t,i=>(typeof i<"u"&&!Array.isArray(i)||(i||(i=[]),typeof n>"u"?i.push(r):i.splice(n,0,r)),i))}function bt(e,t,r,n){return Re(e,t,i=>(!i||!Array.isArray(i)||([i[r],i[n]]=[i[n],i[r]]),i))}function ht(e,t,r,n){return Re(e,t,i=>(!i||!Array.isArray(i)||i.splice(n,0,i.splice(r,1)[0]),i))}function Je(e){return typeof e=="function"}function he(e){return(r,n)=>{if(typeof r=="string"){const i=r;e(s=>{const a=Je(n)?n(de(s,i)):n;return g(s,i,a)})}else e(i=>Je(r)?r(i):r)}}function At({stores:e,config:t,validateErrors:r,validateWarnings:n,_getCurrentExtenders:i}){var s;let a,u=fe((s=t.initialValues)!==null&&s!==void 0?s:{});const{data:d,touched:h,errors:E,warnings:O,isDirty:N,isSubmitting:D,interacted:k}=e,P=he(d.update),w=he(h.update),A=he(E.update),T=he(O.update);function q(l){P(m=>{const y=l(m);return a&&We(a,y),y})}const _=(l,m,y)=>{he(q)(l,m),typeof l=="string"&&y&&w(l,!0)};function j(l,m,y){const L=p(m)?ce(m,!1):!1,M=p(L)?J(L,[]):[];m=p(m)?Object.assign(Object.assign({},m),{key:Ye()}):m,E.update(R=>je(R,l,M,y)),O.update(R=>je(R,l,M,y)),h.update(R=>je(R,l,L,y)),d.update(R=>{const Y=je(R,l,m,y);return setTimeout(()=>a&&We(a,Y)),Y})}function x(l){E.update(l),O.update(l),h.update(l),d.update(m=>{const y=l(m);return setTimeout(()=>a&&We(a,y)),y})}function U(l){x(m=>xe(m,l))}function ee(l,m,y){x(L=>bt(L,l,m,y))}function te(l,m,y){x(L=>ht(L,l,m,y))}function ve(l){const m=de(u,l),y=p(m)?ce(m,!1):!1,L=p(y)?J(y,[]):[];d.update(M=>{const R=g(M,l,m);return a&&We(a,R),R}),h.update(M=>g(M,l,y)),E.update(M=>g(M,l,L)),O.update(M=>g(M,l,L))}const b=he(D.update),K=he(N.update),re=he(k.update);async function ae(){const l=Ae(d);h.set(ce(l,!0)),k.set(null);const m=await r(l);return await n(l),m}function ue(){_(G(u)),w(l=>J(l,!1)),k.set(null),N.set(!1)}function I(l){return async function(y){var L,M,R,Y,le,we,Se;const{createErrorEvent:Fe,createSubmitEvent:Ne,createSuccessEvent:ge}=yt(),ie=Ne();a==null||a.dispatchEvent(ie);const c=(M=(L=ie.onError)!==null&&L!==void 0?L:l==null?void 0:l.onError)!==null&&M!==void 0?M:t.onError,o=(Y=(R=ie.onSuccess)!==null&&R!==void 0?R:l==null?void 0:l.onSuccess)!==null&&Y!==void 0?Y:t.onSuccess,f=(Se=(we=(le=ie.onSubmit)!==null&&le!==void 0?le:l==null?void 0:l.onSubmit)!==null&&we!==void 0?we:t.onSubmit)!==null&&Se!==void 0?Se:pt(a);if(!f||(y==null||y.preventDefault(),ie.defaultPrevented))return;D.set(!0),k.set(null);const v=Ie(Ae(d)),z=await r(v,l==null?void 0:l.validate),ye=await n(v,l==null?void 0:l.warn);if(ye&&O.set(Qe(J(v,[]),ye)),h.set(ce(v,!0)),z&&(h.set(ce(z,!0)),Le(z,H=>Array.isArray(H)?H.length>=1:!!H))){await new Promise(H=>setTimeout(H)),i().forEach(H=>{var Z;return(Z=H.onSubmitError)===null||Z===void 0?void 0:Z.call(H,{data:v,errors:z})}),D.set(!1);return}const se={setFields:_,setData:P,setTouched:w,setErrors:A,setWarnings:T,unsetField:U,addField:j,resetField:ve,reset:ue,setInitialValues:ne.setInitialValues,moveField:te,swapFields:ee,form:a,controls:a&&Array.from(a.elements).filter(W),config:Object.assign(Object.assign({},t),l)};try{const C=await f(v,se);a==null||a.dispatchEvent(ge(Object.assign({response:C},se))),await(o==null?void 0:o(C,se))}catch(C){const H=Fe(Object.assign({error:C},se));if(a==null||a.dispatchEvent(H),!c&&!H.defaultPrevented)throw C;if(!c&&!H.errors)return;const Z=H.errors||await(c==null?void 0:c(C,se));Z&&(h.set(ce(Z,!0)),E.set(Z),await new Promise(oe=>setTimeout(oe)),i().forEach(oe=>{var pe;return(pe=oe.onSubmitError)===null||pe===void 0?void 0:pe.call(oe,{data:v,errors:Ae(E)})}))}finally{D.set(!1)}}}const ne={setData:P,setFields:_,setTouched:w,setErrors:A,setWarnings:T,setIsSubmitting:b,setIsDirty:K,setInteracted:re,validate:ae,reset:ue,unsetField:U,resetField:ve,addField:j,swapFields:ee,moveField:te,createSubmitHandler:I,handleSubmit:I(),setInitialValues:l=>{u=fe(l)}};return{public:ne,private:{_setFormNode(l){a=l},_getInitialValues:()=>u}}}function Et({helpers:e,stores:t,config:r,extender:n,createSubmitHandler:i,handleSubmit:s,_setFormNode:a,_getInitialValues:u,_setCurrentExtenders:d,_getCurrentExtenders:h}){const{setFields:E,setTouched:O,reset:N,setInitialValues:D}=e,{addValidator:k,addTransformer:P,validate:w}=e,{data:A,errors:T,warnings:q,touched:_,isSubmitting:j,isDirty:x,interacted:U,isValid:ee,isValidating:te}=t;function ve(b){b.requestSubmit||(b.requestSubmit=s);function K(c){return function(o){return o({form:b,stage:c,controls:Array.from(b.elements).filter(W),data:A,errors:T,warnings:q,touched:_,isValid:ee,isValidating:te,isSubmitting:j,isDirty:x,interacted:U,config:r,addValidator:k,addTransformer:P,setFields:E,validate:w,reset:N,createSubmitHandler:i,handleSubmit:s})}}d(n.map(K("MOUNT"))),b.noValidate=!!r.validate;const{defaultData:re,defaultTouched:ae}=Ge(b);a(b),D(Qe(G(re),u())),E(u()),_.set(ae);function ue(c){const o=$(c),f=Array.from(b.querySelectorAll(`[name="${c.name}"]`)).filter(v=>W(v)?o===$(v):!1);if(f.length!==0)return f.length===1?A.update(v=>g(v,$(c),c.checked)):A.update(v=>g(v,$(c),f.filter(Te).filter(z=>z.checked).map(z=>z.value)))}function I(c){const o=b.querySelectorAll(`[name="${c.name}"]`),f=Array.from(o).find(v=>Te(v)&&v.checked);A.update(v=>g(v,$(c),f==null?void 0:f.value))}function ne(c){var o;const f=Array.from((o=c.files)!==null&&o!==void 0?o:[]);A.update(v=>g(v,$(c),c.multiple?f:f[0]))}function me(c){if(!c.multiple)A.update(o=>g(o,$(c),c.value));else{const o=Array.from(c.options).filter(f=>f.selected).map(f=>f.value);A.update(f=>g(f,$(c),o))}}function l(c){const o=c.target;if(!o||!W(o)||De(o)||$e(o)||["checkbox","radio","file"].includes(o.type)||!o.name)return;x.set(!0);const f=Ve(o);U.set(o.name),A.update(v=>g(v,$(o),f))}function m(c){const o=c.target;if(!(!o||!W(o)||$e(o))&&!!o.name)if(O($(o),!0),U.set(o.name),(De(o)||["checkbox","radio","file","hidden"].includes(o.type))&&x.set(!0),o.type==="hidden"&&A.update(f=>g(f,$(o),o.value)),De(o))me(o);else if(Te(o))o.type==="checkbox"?ue(o):o.type==="radio"?I(o):o.type==="file"&&ne(o);else return}function y(c){const o=c.target;!o||!W(o)||$e(o)||!o.name||(O($(o),!0),U.set(o.name))}function L(c){c.preventDefault(),N()}const M={childList:!0,subtree:!0};function R(c){let o=Ae(A),f=Ae(_),v=Ae(T),z=Ae(q);for(const ye of c.reverse()){if(ye.hasAttribute("data-felte-keep-on-remove")&&ye.dataset.felteKeepOnRemove!=="false")continue;const se=/.*(\[[0-9]+\]|\.[0-9]+)\.[^.]+$/;let C=$(ye);const H=Ae(_);if(se.test(C)){const oe=C.split(".").slice(0,-1).join("."),pe=de(H,oe);p(pe)&&Object.keys(pe).length<=1&&(C=oe)}o=xe(o,C),f=xe(f,C),v=xe(v,C),z=xe(z,C)}A.set(o),_.set(f),T.set(v),q.set(z)}const Y=Me(()=>{h().forEach(f=>{var v;return(v=f.destroy)===null||v===void 0?void 0:v.call(f)}),d(n.map(K("UPDATE")));const{defaultData:c,defaultTouched:o}=Ge(b);A.update(f=>Xe(f,c)),_.update(f=>Xe(f,o))},0);let le=[];const we=Me(()=>{h().forEach(c=>{var o;return(o=c.destroy)===null||o===void 0?void 0:o.call(c)}),d(n.map(K("UPDATE"))),R(le),le=[]},0);function Se(c){!Array.from(c.addedNodes).some(f=>qe(f)?W(f)?!0:Ke(f).length>0:!1)||Y()}function Fe(c){for(const o of c.removedNodes){if(!qe(o))continue;const f=Ke(o);f.length!==0&&(le.push(...f),we())}}function Ne(c){for(const o of c)o.type==="childList"&&(o.addedNodes.length>0&&Se(o),o.removedNodes.length>0&&Fe(o))}const ge=new MutationObserver(Ne);ge.observe(b,M),b.addEventListener("input",l),b.addEventListener("change",m),b.addEventListener("focusout",y),b.addEventListener("submit",s),b.addEventListener("reset",L);const ie=T.subscribe(c=>{for(const o of b.elements){if(!W(o)||!o.name)continue;const f=de(c,$(o)),v=Array.isArray(f)?f.join(`
`):typeof f=="string"?f:void 0;v!==o.dataset.felteValidationMessage&&(v?(o.dataset.felteValidationMessage=v,o.setAttribute("aria-invalid","true")):(delete o.dataset.felteValidationMessage,o.removeAttribute("aria-invalid")))}});return{destroy(){ge.disconnect(),b.removeEventListener("input",l),b.removeEventListener("change",m),b.removeEventListener("focusout",y),b.removeEventListener("submit",s),b.removeEventListener("reset",L),ie(),h().forEach(c=>{var o;return(o=c.destroy)===null||o===void 0?void 0:o.call(c)})}}}return{form:ve}}function wt(e){const t={aborted:!1,priority:e};return{signal:t,abort(){t.aborted=!0}}}function St(e,t){if(p(e))return!t||p(t)&&Object.keys(t).length===0?J(e,null):void 0;if(Array.isArray(e)){if(e.some(p))return;const r=Array.isArray(t)?t:[];return e.map((n,i)=>{const s=r[i];return Array.isArray(s)&&s.length===0?null:n&&s||null})}return Array.isArray(t)&&t.length===0?null:Array.isArray(t)?e?t:null:e&&t?[t]:null}function gt(e,t){if(p(e))return!t||p(t)&&Object.keys(t).length===0?J(e,null):void 0;if(Array.isArray(e)){if(e.some(p))return;const r=Array.isArray(t)?t:[];return e.map((n,i)=>{const s=r[i];return Array.isArray(s)&&s.length===0?null:s||null})}return Array.isArray(t)&&t.length===0?null:Array.isArray(t)?t:t?[t]:null}function _t([e,t]){return Ee(t,e,St)}function Ot([e,t]){return Ee(t,e,gt)}function kt(e){return function(r,n,i){const s=Array.isArray(r)?r:[r],a=new Array(s.length),u=e(i),d=u.set,h=u.subscribe;let E;function O(){E=s.map((D,k)=>D.subscribe(P=>{a[k]=P,d(n(a))}))}function N(){E==null||E.forEach(D=>D())}return u.subscribe=function(k){const P=h(k);return()=>{P()}},[u,O,N]}}function Tt(e,t){var r,n,i,s,a,u,d,h,E;const O=kt(e),N=t.initialValues=t.initialValues?fe(Be(G(t.initialValues),t.transform)):{},D=ce(Ie(N),!1),k=e(D),P=e(0),[w,A,T]=O([k,P],([F,S])=>Le(F,Q=>!!Q)&&S>=1,!1);delete w.set,delete w.update;function q(F){let S;return async function(Q,V,X,_e=!1){if(!X||!Q)return;let be=V&&Object.keys(V).length>0?V:J(Q,[]);const Oe=wt(_e);if((!(S!=null&&S.signal.priority)||_e)&&(S==null||S.abort(),S=Oe),S.signal.priority&&!_e)return;P.update(Pe=>Pe+1);const ze=vt(Q,X);return ze.forEach(async Pe=>{const rt=await Pe;Oe.signal.aborted||(be=ke([be,rt]),F.set(be))}),await Promise.all(ze),S=void 0,P.update(Pe=>Pe-1),be}}let _=J(D,[]);const j=e(N),x=J(D,[]),U=e(x),ee=e(G(x)),[te,ve,b]=O([U,ee],ke,G(x)),K=J(D,[]),re=e(K),ae=e(G(K)),[ue,I,ne]=O([re,ae],ke,G(K)),[me,l,m]=O([te,k],_t,G(x)),[y,L,M]=O([ue,k],Ot,G(K));let R=!1;const[Y,le,we]=O(te,([F])=>{var S;return R?!Le(F,B=>Array.isArray(B)?B.length>=1:!!B):(R=!0,!t.validate&&!(!((S=t.debounced)===null||S===void 0)&&S.validate))},!t.validate&&!(!((r=t.debounced)===null||r===void 0)&&r.validate));delete Y.set,delete Y.update;const Se=e(!1),Fe=e(!1),Ne=e(null),ge=q(U),ie=q(re),c=q(ee),o=q(ae),f=Me(c,(a=(i=(n=t.debounced)===null||n===void 0?void 0:n.validateTimeout)!==null&&i!==void 0?i:(s=t.debounced)===null||s===void 0?void 0:s.timeout)!==null&&a!==void 0?a:300,{onInit:()=>{P.update(F=>F+1)},onEnd:()=>{P.update(F=>F-1)}}),v=Me(o,(E=(d=(u=t.debounced)===null||u===void 0?void 0:u.warnTimeout)!==null&&d!==void 0?d:(h=t.debounced)===null||h===void 0?void 0:h.timeout)!==null&&E!==void 0?E:300);async function z(F,S){var B;const Q=Ie(F),V=ge(Q,_,S!=null?S:t.validate,!0);if(S)return V;const X=c(Q,_,(B=t.debounced)===null||B===void 0?void 0:B.validate,!0);return ke(await Promise.all([V,X]))}async function ye(F,S){var B;const Q=Ie(F),V=ie(Q,_,S!=null?S:t.warn,!0);if(S)return V;const X=o(Q,_,(B=t.debounced)===null||B===void 0?void 0:B.warn,!0);return ke(await Promise.all([V,X]))}let se=x,C=K;function H(){const F=j.subscribe(X=>{var _e,be;const Oe=Ie(X);ge(Oe,_,t.validate),ie(Oe,_,t.warn),f(Oe,_,(_e=t.debounced)===null||_e===void 0?void 0:_e.validate),v(Oe,_,(be=t.debounced)===null||be===void 0?void 0:be.warn)}),S=k.subscribe(X=>{_=J(X,[])}),B=te.subscribe(X=>{se=X}),Q=ue.subscribe(X=>{C=X});ve(),le(),I(),l(),L(),A();function V(){F(),m(),b(),ne(),M(),we(),T(),S(),B(),Q()}return V}function Z(F){U.set(F(se)),ee.set({})}function oe(F){re.set(F(C)),ae.set({})}function pe(F){Z(()=>F)}function tt(F){oe(()=>F)}return me.set=pe,me.update=Z,y.set=tt,y.update=oe,{data:j,errors:me,warnings:y,touched:k,isValid:Y,isSubmitting:Se,isDirty:Fe,isValidating:w,interacted:Ne,validateErrors:z,validateWarnings:ye,cleanup:t.preventStoreStart?()=>{}:H(),start:H}}function Dt(e,t){var r,n;(r=e.extend)!==null&&r!==void 0||(e.extend=[]),(n=e.debounced)!==null&&n!==void 0||(e.debounced={}),e.validate&&!Array.isArray(e.validate)&&(e.validate=[e.validate]),e.debounced.validate&&!Array.isArray(e.debounced.validate)&&(e.debounced.validate=[e.debounced.validate]),e.transform&&!Array.isArray(e.transform)&&(e.transform=[e.transform]),e.warn&&!Array.isArray(e.warn)&&(e.warn=[e.warn]),e.debounced.warn&&!Array.isArray(e.debounced.warn)&&(e.debounced.warn=[e.debounced.warn]);function i(I,{debounced:ne,level:me}={debounced:!1,level:"error"}){var l;const m=me==="error"?"validate":"warn";(l=e.debounced)!==null&&l!==void 0||(e.debounced={});const y=ne?e.debounced:e;y[m]?y[m]=[...y[m],I]:y[m]=[I]}function s(I){e.transform?e.transform=[...e.transform,I]:e.transform=[I]}const a=Array.isArray(e.extend)?e.extend:[e.extend];let u=[];const d=()=>u,h=I=>{u=I},{isSubmitting:E,isValidating:O,data:N,errors:D,warnings:k,touched:P,isValid:w,isDirty:A,cleanup:T,start:q,validateErrors:_,validateWarnings:j,interacted:x}=Tt(t.storeFactory,e),U=N.update,ee=N.set,te=I=>U(ne=>fe(Be(I(ne),e.transform))),ve=I=>ee(fe(Be(I,e.transform)));N.update=te,N.set=ve;const b=At({extender:a,config:e,addValidator:i,addTransformer:s,validateErrors:_,validateWarnings:j,_getCurrentExtenders:d,stores:{data:N,errors:D,warnings:k,touched:P,isValid:w,isValidating:O,isSubmitting:E,isDirty:A,interacted:x}}),{createSubmitHandler:K,handleSubmit:re}=b.public;u=a.map(I=>I({stage:"SETUP",errors:D,warnings:k,touched:P,data:N,isDirty:A,isValid:w,isValidating:O,isSubmitting:E,interacted:x,config:e,addValidator:i,addTransformer:s,setFields:b.public.setFields,reset:b.public.reset,validate:b.public.validate,handleSubmit:re,createSubmitHandler:K}));const ae=Object.assign({config:e,stores:{data:N,touched:P,errors:D,warnings:k,isSubmitting:E,isValidating:O,isValid:w,isDirty:A,interacted:x},createSubmitHandler:K,handleSubmit:re,helpers:Object.assign(Object.assign({},b.public),{addTransformer:s,addValidator:i}),extender:a,_getCurrentExtenders:d,_setCurrentExtenders:h},b.private),{form:ue}=Et(ae);return Object.assign({data:N,errors:D,warnings:k,touched:P,isValid:w,isSubmitting:E,isValidating:O,isDirty:A,interacted:x,form:ue,cleanup:T,startStores:q},b.public)}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Ft(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}function It(e){var t=Dt(e!=null?e:{},{storeFactory:nt}),r=t.cleanup;t.startStores;var n=Ft(t,["cleanup","startStores"]);return it(r),n}export{de as _,It as a,Ye as b,xt as c,g as d,$ as g};