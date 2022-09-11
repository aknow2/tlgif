(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const O={};function Ze(e){O.context=e}const He=(e,n)=>e===n,W=Symbol("solid-proxy"),fe=Symbol("solid-track"),ne={equals:He};let je=Oe;const M=1,te=2,Ie={owned:null,cleanups:null,context:null,owner:null};var $=null;let R=null,I=null,L=null,N=null,be=0;function ee(e,n){const t=I,i=$,r=e.length===0,s=r?Ie:{owned:null,cleanups:null,context:null,owner:n||i},a=r?e:()=>e(()=>Q(()=>ye(s)));$=s,I=null;try{return Z(a,!0)}finally{I=t,$=i}}function Pe(e,n){n=n?Object.assign({},ne,n):ne;const t={value:e,observers:null,observerSlots:null,comparator:n.equals||void 0},i=r=>(typeof r=="function"&&(r=r(t.value)),Be(t,r));return[Te.bind(t),i]}function T(e,n,t){const i=ve(e,n,!1,M);X(i)}function $e(e,n,t){je=tn;const i=ve(e,n,!1,M);i.user=!0,N?N.push(i):X(i)}function U(e,n,t){t=t?Object.assign({},ne,t):ne;const i=ve(e,n,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=t.equals||void 0,X(i),Te.bind(i)}function Je(e){return Z(e,!1)}function Q(e){let n,t=I;return I=null,n=e(),I=t,n}function Ve(e){$e(()=>Q(e))}function Xe(e){return $===null||($.cleanups===null?$.cleanups=[e]:$.cleanups.push(e)),e}function Le(){return I}function Ye(e){const n=U(e),t=U(()=>he(n()));return t.toArray=()=>{const i=t();return Array.isArray(i)?i:i!=null?[i]:[]},t}function Te(){const e=R;if(this.sources&&(this.state||e))if(this.state===M||e)X(this);else{const n=L;L=null,Z(()=>re(this),!1),L=n}if(I){const n=this.observers?this.observers.length:0;I.sources?(I.sources.push(this),I.sourceSlots.push(n)):(I.sources=[this],I.sourceSlots=[n]),this.observers?(this.observers.push(I),this.observerSlots.push(I.sources.length-1)):(this.observers=[I],this.observerSlots=[I.sources.length-1])}return this.value}function Be(e,n,t){let i=e.value;return(!e.comparator||!e.comparator(i,n))&&(e.value=n,e.observers&&e.observers.length&&Z(()=>{for(let r=0;r<e.observers.length;r+=1){const s=e.observers[r],a=R&&R.running;a&&R.disposed.has(s),(a&&!s.tState||!a&&!s.state)&&(s.pure?L.push(s):N.push(s),s.observers&&Ge(s)),a||(s.state=M)}if(L.length>1e6)throw L=[],new Error},!1)),n}function X(e){if(!e.fn)return;ye(e);const n=$,t=I,i=be;I=$=e,en(e,e.value,i),I=t,$=n}function en(e,n,t){let i;try{i=e.fn(n)}catch(r){e.pure&&(e.state=M),Ne(r)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?Be(e,i):e.value=i,e.updatedAt=t)}function ve(e,n,t,i=M,r){const s={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:$,context:null,pure:t};return $===null||$!==Ie&&($.owned?$.owned.push(s):$.owned=[s]),s}function ie(e){const n=R;if(e.state===0||n)return;if(e.state===te||n)return re(e);if(e.suspense&&Q(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<be);)(e.state||n)&&t.push(e);for(let i=t.length-1;i>=0;i--)if(e=t[i],e.state===M||n)X(e);else if(e.state===te||n){const r=L;L=null,Z(()=>re(e,t[0]),!1),L=r}}function Z(e,n){if(L)return e();let t=!1;n||(L=[]),N?t=!0:N=[],be++;try{const i=e();return nn(t),i}catch(i){L||(N=null),Ne(i)}}function nn(e){if(L&&(Oe(L),L=null),e)return;const n=N;N=null,n.length&&Z(()=>je(n),!1)}function Oe(e){for(let n=0;n<e.length;n++)ie(e[n])}function tn(e){let n,t=0;for(n=0;n<e.length;n++){const i=e[n];i.user?e[t++]=i:ie(i)}for(O.context&&Ze(),n=0;n<t;n++)ie(e[n])}function re(e,n){const t=R;e.state=0;for(let i=0;i<e.sources.length;i+=1){const r=e.sources[i];r.sources&&(r.state===M||t?r!==n&&ie(r):(r.state===te||t)&&re(r,n))}}function Ge(e){const n=R;for(let t=0;t<e.observers.length;t+=1){const i=e.observers[t];(!i.state||n)&&(i.state=te,i.pure?L.push(i):N.push(i),i.observers&&Ge(i))}}function ye(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),i=e.sourceSlots.pop(),r=t.observers;if(r&&r.length){const s=r.pop(),a=t.observerSlots.pop();i<r.length&&(s.sourceSlots[a]=i,r[i]=s,t.observerSlots[i]=a)}}if(e.owned){for(n=0;n<e.owned.length;n++)ye(e.owned[n]);e.owned=null}if(e.cleanups){for(n=0;n<e.cleanups.length;n++)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function rn(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Ne(e){throw e=rn(e),e}function he(e){if(typeof e=="function"&&!e.length)return he(e());if(Array.isArray(e)){const n=[];for(let t=0;t<e.length;t++){const i=he(e[t]);Array.isArray(i)?n.push.apply(n,i):n.push(i)}return n}return e}const sn=Symbol("fallback");function ke(e){for(let n=0;n<e.length;n++)e[n]()}function on(e,n,t={}){let i=[],r=[],s=[],a=0,o=n.length>1?[]:null;return Xe(()=>ke(s)),()=>{let u=e()||[],b,g;return u[fe],Q(()=>{let w=u.length,l,h,m,k,j,v,E,F,A;if(w===0)a!==0&&(ke(s),s=[],i=[],r=[],a=0,o&&(o=[])),t.fallback&&(i=[sn],r[0]=ee(c=>(s[0]=c,t.fallback())),a=1);else if(a===0){for(r=new Array(w),g=0;g<w;g++)i[g]=u[g],r[g]=ee(d);a=w}else{for(m=new Array(w),k=new Array(w),o&&(j=new Array(w)),v=0,E=Math.min(a,w);v<E&&i[v]===u[v];v++);for(E=a-1,F=w-1;E>=v&&F>=v&&i[E]===u[F];E--,F--)m[F]=r[E],k[F]=s[E],o&&(j[F]=o[E]);for(l=new Map,h=new Array(F+1),g=F;g>=v;g--)A=u[g],b=l.get(A),h[g]=b===void 0?-1:b,l.set(A,g);for(b=v;b<=E;b++)A=i[b],g=l.get(A),g!==void 0&&g!==-1?(m[g]=r[b],k[g]=s[b],o&&(j[g]=o[b]),g=h[g],l.set(A,g)):s[b]();for(g=v;g<w;g++)g in m?(r[g]=m[g],s[g]=k[g],o&&(o[g]=j[g],o[g](g))):r[g]=ee(d);r=r.slice(0,a=w),i=u.slice(0)}return r});function d(w){if(s[g]=w,o){const[l,h]=Pe(g);return o[g]=h,n(u[g],l)}return n(u[g])}}}function B(e,n){return Q(()=>e(n||{}))}function ue(e){const n="fallback"in e&&{fallback:()=>e.fallback};return U(on(()=>e.each,e.children,n||void 0))}function an(e){let n=!1;const t=e.keyed,i=U(()=>e.when,void 0,{equals:(r,s)=>n?r===s:!r==!s});return U(()=>{const r=i();if(r){const s=e.children,a=typeof s=="function"&&s.length>0;return n=t||a,a?Q(()=>s(r)):s}return e.fallback})}function ln(e){let n=!1,t=!1;const i=Ye(()=>e.children),r=U(()=>{let s=i();Array.isArray(s)||(s=[s]);for(let a=0;a<s.length;a++){const o=s[a].when;if(o)return t=!!s[a].keyed,[a,o,s[a]]}return[-1]},void 0,{equals:(s,a)=>s[0]===a[0]&&(n?s[1]===a[1]:!s[1]==!a[1])&&s[2]===a[2]});return U(()=>{const[s,a,o]=r();if(s<0)return e.fallback;const u=o.children,b=typeof u=="function"&&u.length>0;return n=t||b,b?Q(()=>u(a)):u})}function Y(e){return e}function cn(e,n,t){let i=t.length,r=n.length,s=i,a=0,o=0,u=n[r-1].nextSibling,b=null;for(;a<r||o<s;){if(n[a]===t[o]){a++,o++;continue}for(;n[r-1]===t[s-1];)r--,s--;if(r===a){const g=s<i?o?t[o-1].nextSibling:t[s-o]:u;for(;o<s;)e.insertBefore(t[o++],g)}else if(s===o)for(;a<r;)(!b||!b.has(n[a]))&&n[a].remove(),a++;else if(n[a]===t[s-1]&&t[o]===n[r-1]){const g=n[--r].nextSibling;e.insertBefore(t[o++],n[a++].nextSibling),e.insertBefore(t[--s],g),n[r]=t[s]}else{if(!b){b=new Map;let d=o;for(;d<s;)b.set(t[d],d++)}const g=b.get(n[a]);if(g!=null)if(o<g&&g<s){let d=a,w=1,l;for(;++d<r&&d<s&&!((l=b.get(n[d]))==null||l!==g+w);)w++;if(w>g-o){const h=n[a];for(;o<g;)e.insertBefore(t[o++],h)}else e.replaceChild(t[o++],n[a++])}else a++;else n[a++].remove()}}}const Ce="_$DX_DELEGATE";function dn(e,n,t){let i;return ee(r=>{i=r,n===document?e():q(n,e(),n.firstChild?null:void 0,t)}),()=>{i(),n.textContent=""}}function G(e,n,t){const i=document.createElement("template");i.innerHTML=e;let r=i.content.firstChild;return t&&(r=r.firstChild),r}function un(e,n=window.document){const t=n[Ce]||(n[Ce]=new Set);for(let i=0,r=e.length;i<r;i++){const s=e[i];t.has(s)||(t.add(s),n.addEventListener(s,fn))}}function Ee(e,n,t){t==null?e.removeAttribute(n):e.setAttribute(n,t)}function D(e,n){n==null?e.removeAttribute("class"):e.className=n}function q(e,n,t,i){if(t!==void 0&&!i&&(i=[]),typeof n!="function")return se(e,n,i,t);T(r=>se(e,n(),r,t),i)}function fn(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),O.registry&&!O.done&&(O.done=!0,document.querySelectorAll("[id^=pl-]").forEach(i=>i.remove()));t!==null;){const i=t[n];if(i&&!t.disabled){const r=t[`${n}Data`];if(r!==void 0?i.call(t,r,e):i.call(t,e),e.cancelBubble)return}t=t.host&&t.host!==t&&t.host instanceof Node?t.host:t.parentNode}}function se(e,n,t,i,r){for(O.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(n===t)return t;const s=typeof n,a=i!==void 0;if(e=a&&t[0]&&t[0].parentNode||e,s==="string"||s==="number"){if(O.context)return t;if(s==="number"&&(n=n.toString()),a){let o=t[0];o&&o.nodeType===3?o.data=n:o=document.createTextNode(n),t=K(e,t,i,o)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||s==="boolean"){if(O.context)return t;t=K(e,t,i)}else{if(s==="function")return T(()=>{let o=n();for(;typeof o=="function";)o=o();t=se(e,o,t,i)}),()=>t;if(Array.isArray(n)){const o=[],u=t&&Array.isArray(t);if(pe(o,n,t,r))return T(()=>t=se(e,o,t,i,!0)),()=>t;if(O.context){if(!o.length)return t;for(let b=0;b<o.length;b++)if(o[b].parentNode)return t=o}if(o.length===0){if(t=K(e,t,i),a)return t}else u?t.length===0?Fe(e,o,i):cn(e,t,o):(t&&K(e),Fe(e,o));t=o}else if(n instanceof Node){if(O.context&&n.parentNode)return t=a?[n]:n;if(Array.isArray(t)){if(a)return t=K(e,t,i,n);K(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function pe(e,n,t,i){let r=!1;for(let s=0,a=n.length;s<a;s++){let o=n[s],u=t&&t[s];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))r=pe(e,o,u)||r;else if(typeof o=="function")if(i){for(;typeof o=="function";)o=o();r=pe(e,Array.isArray(o)?o:[o],u)||r}else e.push(o),r=!0;else{const b=String(o);u&&u.nodeType===3&&u.data===b?e.push(u):e.push(document.createTextNode(b))}}return r}function Fe(e,n,t){for(let i=0,r=n.length;i<r;i++)e.insertBefore(n[i],t)}function K(e,n,t,i){if(t===void 0)return e.textContent="";const r=i||document.createTextNode("");if(n.length){let s=!1;for(let a=n.length-1;a>=0;a--){const o=n[a];if(r!==o){const u=o.parentNode===e;!s&&!a?u?e.replaceChild(r,o):e.insertBefore(r,t):u&&o.remove()}else s=!0}}else e.insertBefore(r,t);return[r]}const ge=Symbol("store-raw"),J=Symbol("store-node"),hn=Symbol("store-name");function De(e,n){let t=e[W];if(!t&&(Object.defineProperty(e,W,{value:t=new Proxy(e,mn)}),!Array.isArray(e))){const i=Object.keys(e),r=Object.getOwnPropertyDescriptors(e);for(let s=0,a=i.length;s<a;s++){const o=i[s];if(r[o].get){const u=r[o].get.bind(t);Object.defineProperty(e,o,{get:u})}}}return t}function oe(e){let n;return e!=null&&typeof e=="object"&&(e[W]||!(n=Object.getPrototypeOf(e))||n===Object.prototype||Array.isArray(e))}function V(e,n=new Set){let t,i,r,s;if(t=e!=null&&e[ge])return t;if(!oe(e)||n.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):n.add(e);for(let a=0,o=e.length;a<o;a++)r=e[a],(i=V(r,n))!==r&&(e[a]=i)}else{Object.isFrozen(e)?e=Object.assign({},e):n.add(e);const a=Object.keys(e),o=Object.getOwnPropertyDescriptors(e);for(let u=0,b=a.length;u<b;u++)s=a[u],!o[s].get&&(r=e[s],(i=V(r,n))!==r&&(e[s]=i))}return e}function ae(e){let n=e[J];return n||Object.defineProperty(e,J,{value:n={}}),n}function me(e,n,t){return e[n]||(e[n]=Me(t))}function pn(e,n){const t=Reflect.getOwnPropertyDescriptor(e,n);return!t||t.get||!t.configurable||n===W||n===J||n===hn||(delete t.value,delete t.writable,t.get=()=>e[W][n]),t}function ze(e){if(Le()){const n=ae(e);(n._||(n._=Me()))()}}function gn(e){return ze(e),Reflect.ownKeys(e)}function Me(e){const[n,t]=Pe(e,{equals:!1,internal:!0});return n.$=t,n}const mn={get(e,n,t){if(n===ge)return e;if(n===W)return t;if(n===fe)return ze(e),t;const i=ae(e),r=i.hasOwnProperty(n);let s=r?i[n]():e[n];if(n===J||n==="__proto__")return s;if(!r){const a=Object.getOwnPropertyDescriptor(e,n);Le()&&(typeof s!="function"||e.hasOwnProperty(n))&&!(a&&a.get)&&(s=me(i,n,s)())}return oe(s)?De(s):s},has(e,n){if(n===ge||n===W||n===fe||n===J||n==="__proto__")return!0;const t=ae(e)[n];return t&&t(),n in e},set(){return!0},deleteProperty(){return!0},ownKeys:gn,getOwnPropertyDescriptor:pn};function le(e,n,t,i=!1){if(!i&&e[n]===t)return;const r=e[n],s=e.length;t===void 0?delete e[n]:e[n]=t;let a=ae(e),o;(o=me(a,n,r))&&o.$(()=>t),Array.isArray(e)&&e.length!==s&&(o=me(a,"length",s))&&o.$(e.length),(o=a._)&&o.$()}function qe(e,n){const t=Object.keys(n);for(let i=0;i<t.length;i+=1){const r=t[i];le(e,r,n[r])}}function bn(e,n){if(typeof n=="function"&&(n=n(e)),n=V(n),Array.isArray(n)){if(e===n)return;let t=0,i=n.length;for(;t<i;t++){const r=n[t];e[t]!==r&&le(e,t,r)}le(e,"length",i)}else qe(e,n)}function H(e,n,t=[]){let i,r=e;if(n.length>1){i=n.shift();const a=typeof i,o=Array.isArray(e);if(Array.isArray(i)){for(let u=0;u<i.length;u++)H(e,[i[u]].concat(n),t);return}else if(o&&a==="function"){for(let u=0;u<e.length;u++)i(e[u],u)&&H(e,[u].concat(n),t);return}else if(o&&a==="object"){const{from:u=0,to:b=e.length-1,by:g=1}=i;for(let d=u;d<=b;d+=g)H(e,[d].concat(n),t);return}else if(n.length>1){H(e[i],n,[i].concat(t));return}r=e[i],t=[i].concat(t)}let s=n[0];typeof s=="function"&&(s=s(r,t),s===r)||i===void 0&&s==null||(s=V(s),i===void 0||oe(r)&&oe(s)&&!Array.isArray(s)?qe(r,s):le(e,i,s))}function vn(...[e,n]){const t=V(e||{}),i=Array.isArray(t),r=De(t);function s(...a){Je(()=>{i&&a.length===1?bn(t,a[0]):H(t,a)})}return[r,s]}function yn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Re={exports:{}};/*! For license information please see gif.js.LICENSE.txt */(function(e,n){(function(t,i){e.exports=i()})(self,function(){return(()=>{var t={"./node_modules/events/events.js":a=>{var o,u=typeof Reflect=="object"?Reflect:null,b=u&&typeof u.apply=="function"?u.apply:function(c,f,p){return Function.prototype.apply.call(c,f,p)};o=u&&typeof u.ownKeys=="function"?u.ownKeys:Object.getOwnPropertySymbols?function(c){return Object.getOwnPropertyNames(c).concat(Object.getOwnPropertySymbols(c))}:function(c){return Object.getOwnPropertyNames(c)};var g=Number.isNaN||function(c){return c!=c};function d(){d.init.call(this)}a.exports=d,a.exports.once=function(c,f){return new Promise(function(p,y){function x(C){c.removeListener(f,_),y(C)}function _(){typeof c.removeListener=="function"&&c.removeListener("error",x),p([].slice.call(arguments))}A(c,f,_,{once:!0}),f!=="error"&&function(C,S,P){typeof C.on=="function"&&A(C,"error",S,{once:!0})}(c,x)})},d.EventEmitter=d,d.prototype._events=void 0,d.prototype._eventsCount=0,d.prototype._maxListeners=void 0;var w=10;function l(c){if(typeof c!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof c)}function h(c){return c._maxListeners===void 0?d.defaultMaxListeners:c._maxListeners}function m(c,f,p,y){var x,_,C,S;if(l(p),(_=c._events)===void 0?(_=c._events=Object.create(null),c._eventsCount=0):(_.newListener!==void 0&&(c.emit("newListener",f,p.listener?p.listener:p),_=c._events),C=_[f]),C===void 0)C=_[f]=p,++c._eventsCount;else if(typeof C=="function"?C=_[f]=y?[p,C]:[C,p]:y?C.unshift(p):C.push(p),(x=h(c))>0&&C.length>x&&!C.warned){C.warned=!0;var P=new Error("Possible EventEmitter memory leak detected. "+C.length+" "+String(f)+" listeners added. Use emitter.setMaxListeners() to increase limit");P.name="MaxListenersExceededWarning",P.emitter=c,P.type=f,P.count=C.length,S=P,console&&console.warn&&console.warn(S)}return c}function k(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function j(c,f,p){var y={fired:!1,wrapFn:void 0,target:c,type:f,listener:p},x=k.bind(y);return x.listener=p,y.wrapFn=x,x}function v(c,f,p){var y=c._events;if(y===void 0)return[];var x=y[f];return x===void 0?[]:typeof x=="function"?p?[x.listener||x]:[x]:p?function(_){for(var C=new Array(_.length),S=0;S<C.length;++S)C[S]=_[S].listener||_[S];return C}(x):F(x,x.length)}function E(c){var f=this._events;if(f!==void 0){var p=f[c];if(typeof p=="function")return 1;if(p!==void 0)return p.length}return 0}function F(c,f){for(var p=new Array(f),y=0;y<f;++y)p[y]=c[y];return p}function A(c,f,p,y){if(typeof c.on=="function")y.once?c.once(f,p):c.on(f,p);else{if(typeof c.addEventListener!="function")throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof c);c.addEventListener(f,function x(_){y.once&&c.removeEventListener(f,x),p(_)})}}Object.defineProperty(d,"defaultMaxListeners",{enumerable:!0,get:function(){return w},set:function(c){if(typeof c!="number"||c<0||g(c))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+c+".");w=c}}),d.init=function(){this._events!==void 0&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},d.prototype.setMaxListeners=function(c){if(typeof c!="number"||c<0||g(c))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+c+".");return this._maxListeners=c,this},d.prototype.getMaxListeners=function(){return h(this)},d.prototype.emit=function(c){for(var f=[],p=1;p<arguments.length;p++)f.push(arguments[p]);var y=c==="error",x=this._events;if(x!==void 0)y=y&&x.error===void 0;else if(!y)return!1;if(y){var _;if(f.length>0&&(_=f[0]),_ instanceof Error)throw _;var C=new Error("Unhandled error."+(_?" ("+_.message+")":""));throw C.context=_,C}var S=x[c];if(S===void 0)return!1;if(typeof S=="function")b(S,this,f);else{var P=S.length,ce=F(S,P);for(p=0;p<P;++p)b(ce[p],this,f)}return!0},d.prototype.addListener=function(c,f){return m(this,c,f,!1)},d.prototype.on=d.prototype.addListener,d.prototype.prependListener=function(c,f){return m(this,c,f,!0)},d.prototype.once=function(c,f){return l(f),this.on(c,j(this,c,f)),this},d.prototype.prependOnceListener=function(c,f){return l(f),this.prependListener(c,j(this,c,f)),this},d.prototype.removeListener=function(c,f){var p,y,x,_,C;if(l(f),(y=this._events)===void 0)return this;if((p=y[c])===void 0)return this;if(p===f||p.listener===f)--this._eventsCount==0?this._events=Object.create(null):(delete y[c],y.removeListener&&this.emit("removeListener",c,p.listener||f));else if(typeof p!="function"){for(x=-1,_=p.length-1;_>=0;_--)if(p[_]===f||p[_].listener===f){C=p[_].listener,x=_;break}if(x<0)return this;x===0?p.shift():function(S,P){for(;P+1<S.length;P++)S[P]=S[P+1];S.pop()}(p,x),p.length===1&&(y[c]=p[0]),y.removeListener!==void 0&&this.emit("removeListener",c,C||f)}return this},d.prototype.off=d.prototype.removeListener,d.prototype.removeAllListeners=function(c){var f,p,y;if((p=this._events)===void 0)return this;if(p.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):p[c]!==void 0&&(--this._eventsCount==0?this._events=Object.create(null):delete p[c]),this;if(arguments.length===0){var x,_=Object.keys(p);for(y=0;y<_.length;++y)(x=_[y])!=="removeListener"&&this.removeAllListeners(x);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(typeof(f=p[c])=="function")this.removeListener(c,f);else if(f!==void 0)for(y=f.length-1;y>=0;y--)this.removeListener(c,f[y]);return this},d.prototype.listeners=function(c){return v(this,c,!0)},d.prototype.rawListeners=function(c){return v(this,c,!1)},d.listenerCount=function(c,f){return typeof c.listenerCount=="function"?c.listenerCount(f):E.call(c,f)},d.prototype.listenerCount=E,d.prototype.eventNames=function(){return this._eventsCount>0?o(this._events):[]}},"./dist/gif.worker.js.txt":(a,o,u)=>{u.r(o),u.d(o,{default:()=>b});const b=`/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/lib/GIFEncoder.js":
/*!*******************************!*\\
  !*** ./src/lib/GIFEncoder.js ***!
  \\*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
  GIFEncoder.js

  Authors
  Kevin Weiner (original Java version - kweiner@fmsware.com)
  Thibault Imbert (AS3 version - bytearray.org)
  Johan Nordberg (JS version - code@johan-nordberg.com)
*/

var NeuQuant = __webpack_require__(/*! ./TypedNeuQuant.js */ "./src/lib/TypedNeuQuant.js");
var LZWEncoder = __webpack_require__(/*! ./LZWEncoder.js */ "./src/lib/LZWEncoder.js");

function ByteArray() {
  this.page = -1;
  this.pages = [];
  this.newPage();
}

ByteArray.pageSize = 4096;
ByteArray.charMap = {};

for (var i = 0; i < 256; i++)
  ByteArray.charMap[i] = String.fromCharCode(i);

ByteArray.prototype.newPage = function() {
  this.pages[++this.page] = new Uint8Array(ByteArray.pageSize);
  this.cursor = 0;
};

ByteArray.prototype.getData = function() {
  var rv = '';
  for (var p = 0; p < this.pages.length; p++) {
    for (var i = 0; i < ByteArray.pageSize; i++) {
      rv += ByteArray.charMap[this.pages[p][i]];
    }
  }
  return rv;
};

ByteArray.prototype.writeByte = function(val) {
  if (this.cursor >= ByteArray.pageSize) this.newPage();
  this.pages[this.page][this.cursor++] = val;
};

ByteArray.prototype.writeUTFBytes = function(string) {
  for (var l = string.length, i = 0; i < l; i++)
    this.writeByte(string.charCodeAt(i));
};

ByteArray.prototype.writeBytes = function(array, offset, length) {
  for (var l = length || array.length, i = offset || 0; i < l; i++)
    this.writeByte(array[i]);
};

function GIFEncoder(width, height) {
  // image size
  this.width = ~~width;
  this.height = ~~height;

  // transparent color if given
  this.transparent = null;

  // transparent index in color table
  this.transIndex = 0;

  // -1 = no repeat, 0 = forever. anything else is repeat count
  this.repeat = -1;

  // frame delay (hundredths)
  this.delay = 0;

  this.image = null; // current frame
  this.pixels = null; // BGR byte array from frame
  this.indexedPixels = null; // converted frame indexed to palette
  this.colorDepth = null; // number of bit planes
  this.colorTab = null; // RGB palette
  this.neuQuant = null; // NeuQuant instance that was used to generate this.colorTab.
  this.usedEntry = new Array(); // active palette entries
  this.palSize = 7; // color table size (bits-1)
  this.dispose = -1; // disposal code (-1 = use default)
  this.firstFrame = true;
  this.sample = 10; // default sample interval for quantizer
  this.dither = false; // default dithering
  this.globalPalette = false;

  this.out = new ByteArray();
}

/*
  Sets the delay time between each frame, or changes it for subsequent frames
  (applies to last frame added)
*/
GIFEncoder.prototype.setDelay = function(milliseconds) {
  this.delay = Math.round(milliseconds / 10);
};

/*
  Sets frame rate in frames per second.
*/
GIFEncoder.prototype.setFrameRate = function(fps) {
  this.delay = Math.round(100 / fps);
};

/*
  Sets the GIF frame disposal code for the last added frame and any
  subsequent frames.

  Default is 0 if no transparent color has been set, otherwise 2.
*/
GIFEncoder.prototype.setDispose = function(disposalCode) {
  if (disposalCode >= 0) this.dispose = disposalCode;
};

/*
  Sets the number of times the set of GIF frames should be played.

  -1 = play once
  0 = repeat indefinitely

  Default is -1

  Must be invoked before the first image is added
*/

GIFEncoder.prototype.setRepeat = function(repeat) {
  this.repeat = repeat;
};

/*
  Sets the transparent color for the last added frame and any subsequent
  frames. Since all colors are subject to modification in the quantization
  process, the color in the final palette for each frame closest to the given
  color becomes the transparent color for that frame. May be set to null to
  indicate no transparent color.
*/
GIFEncoder.prototype.setTransparent = function(color) {
  this.transparent = color;
};

/*
  Adds next GIF frame. The frame is not written immediately, but is
  actually deferred until the next frame is received so that timing
  data can be inserted.  Invoking finish() flushes all frames.
*/
GIFEncoder.prototype.addFrame = function(imageData) {
  this.image = imageData;

  this.colorTab = this.globalPalette && this.globalPalette.slice ? this.globalPalette : null;

  this.getImagePixels(); // convert to correct format if necessary
  this.analyzePixels(); // build color table & map pixels

  if (this.globalPalette === true) this.globalPalette = this.colorTab;

  if (this.firstFrame) {
    this.writeLSD(); // logical screen descriptior
    this.writePalette(); // global color table
    if (this.repeat >= 0) {
      // use NS app extension to indicate reps
      this.writeNetscapeExt();
    }
  }

  this.writeGraphicCtrlExt(); // write graphic control extension
  this.writeImageDesc(); // image descriptor
  if (!this.firstFrame && !this.globalPalette) this.writePalette(); // local color table
  this.writePixels(); // encode and write pixel data

  this.firstFrame = false;
};

/*
  Adds final trailer to the GIF stream, if you don't call the finish method
  the GIF stream will not be valid.
*/
GIFEncoder.prototype.finish = function() {
  this.out.writeByte(0x3b); // gif trailer
};

/*
  Sets quality of color quantization (conversion of images to the maximum 256
  colors allowed by the GIF specification). Lower values (minimum = 1)
  produce better colors, but slow processing significantly. 10 is the
  default, and produces good color mapping at reasonable speeds. Values
  greater than 20 do not yield significant improvements in speed.
*/
GIFEncoder.prototype.setQuality = function(quality) {
  if (quality < 1) quality = 1;
  this.sample = quality;
};

/*
  Sets dithering method. Available are:
  - FALSE no dithering
  - TRUE or FloydSteinberg
  - FalseFloydSteinberg
  - Stucki
  - Atkinson
  You can add '-serpentine' to use serpentine scanning
*/
GIFEncoder.prototype.setDither = function(dither) {
  if (dither === true) dither = 'FloydSteinberg';
  this.dither = dither;
};

/*
  Sets global palette for all frames.
  You can provide TRUE to create global palette from first picture.
  Or an array of r,g,b,r,g,b,...
*/
GIFEncoder.prototype.setGlobalPalette = function(palette) {
  this.globalPalette = palette;
};

/*
  Returns global palette used for all frames.
  If setGlobalPalette(true) was used, then this function will return
  calculated palette after the first frame is added.
*/
GIFEncoder.prototype.getGlobalPalette = function() {
  return (this.globalPalette && this.globalPalette.slice && this.globalPalette.slice(0)) || this.globalPalette;
};

/*
  Writes GIF file header
*/
GIFEncoder.prototype.writeHeader = function() {
  this.out.writeUTFBytes("GIF89a");
};

/*
  Analyzes current frame colors and creates color map.
*/
GIFEncoder.prototype.analyzePixels = function() {
  if (!this.colorTab) {
    this.neuQuant = new NeuQuant(this.pixels, this.sample);
    this.neuQuant.buildColormap(); // create reduced palette
    this.colorTab = this.neuQuant.getColormap();
  }

  // map image pixels to new palette
  if (this.dither) {
    this.ditherPixels(this.dither.replace('-serpentine', ''), this.dither.match(/-serpentine/) !== null);
  } else {
    this.indexPixels();
  }

  this.pixels = null;
  this.colorDepth = 8;
  this.palSize = 7;

  // get closest match to transparent color if specified
  if (this.transparent !== null) {
    this.transIndex = this.findClosest(this.transparent, true);
  }
};

/*
  Index pixels, without dithering
*/
GIFEncoder.prototype.indexPixels = function(imgq) {
  var nPix = this.pixels.length / 3;
  this.indexedPixels = new Uint8Array(nPix);
  var k = 0;
  for (var j = 0; j < nPix; j++) {
    var index = this.findClosestRGB(
      this.pixels[k++] & 0xff,
      this.pixels[k++] & 0xff,
      this.pixels[k++] & 0xff
    );
    this.usedEntry[index] = true;
    this.indexedPixels[j] = index;
  }
};

/*
  Taken from http://jsbin.com/iXofIji/2/edit by PAEz
*/
GIFEncoder.prototype.ditherPixels = function(kernel, serpentine) {
  var kernels = {
    FalseFloydSteinberg: [
      [3 / 8, 1, 0],
      [3 / 8, 0, 1],
      [2 / 8, 1, 1]
    ],
    FloydSteinberg: [
      [7 / 16, 1, 0],
      [3 / 16, -1, 1],
      [5 / 16, 0, 1],
      [1 / 16, 1, 1]
    ],
    Stucki: [
      [8 / 42, 1, 0],
      [4 / 42, 2, 0],
      [2 / 42, -2, 1],
      [4 / 42, -1, 1],
      [8 / 42, 0, 1],
      [4 / 42, 1, 1],
      [2 / 42, 2, 1],
      [1 / 42, -2, 2],
      [2 / 42, -1, 2],
      [4 / 42, 0, 2],
      [2 / 42, 1, 2],
      [1 / 42, 2, 2]
    ],
    Atkinson: [
      [1 / 8, 1, 0],
      [1 / 8, 2, 0],
      [1 / 8, -1, 1],
      [1 / 8, 0, 1],
      [1 / 8, 1, 1],
      [1 / 8, 0, 2]
    ]
  };

  if (!kernel || !kernels[kernel]) {
    throw 'Unknown dithering kernel: ' + kernel;
  }

  var ds = kernels[kernel];
  var index = 0,
    height = this.height,
    width = this.width,
    data = this.pixels;
  var direction = serpentine ? -1 : 1;

  this.indexedPixels = new Uint8Array(this.pixels.length / 3);

  for (var y = 0; y < height; y++) {

    if (serpentine) direction = direction * -1;

    for (var x = (direction == 1 ? 0 : width - 1), xend = (direction == 1 ? width : 0); x !== xend; x += direction) {

      index = (y * width) + x;
      // Get original colour
      var idx = index * 3;
      var r1 = data[idx];
      var g1 = data[idx + 1];
      var b1 = data[idx + 2];

      // Get converted colour
      idx = this.findClosestRGB(r1, g1, b1);
      this.usedEntry[idx] = true;
      this.indexedPixels[index] = idx;
      idx *= 3;
      var r2 = this.colorTab[idx];
      var g2 = this.colorTab[idx + 1];
      var b2 = this.colorTab[idx + 2];

      var er = r1 - r2;
      var eg = g1 - g2;
      var eb = b1 - b2;

      for (var i = (direction == 1 ? 0: ds.length - 1), end = (direction == 1 ? ds.length : 0); i !== end; i += direction) {
        var x1 = ds[i][1]; // *direction;  //  Should this by timesd by direction?..to make the kernel go in the opposite direction....got no idea....
        var y1 = ds[i][2];
        if (x1 + x >= 0 && x1 + x < width && y1 + y >= 0 && y1 + y < height) {
          var d = ds[i][0];
          idx = index + x1 + (y1 * width);
          idx *= 3;

          data[idx] = Math.max(0, Math.min(255, data[idx] + er * d));
          data[idx + 1] = Math.max(0, Math.min(255, data[idx + 1] + eg * d));
          data[idx + 2] = Math.max(0, Math.min(255, data[idx + 2] + eb * d));
        }
      }
    }
  }
};

/*
  Returns index of palette color closest to c
*/
GIFEncoder.prototype.findClosest = function(c, used) {
  return this.findClosestRGB((c & 0xFF0000) >> 16, (c & 0x00FF00) >> 8, (c & 0x0000FF), used);
};

GIFEncoder.prototype.findClosestRGB = function(r, g, b, used) {
  if (this.colorTab === null) return -1;

  if (this.neuQuant && !used) {
    return this.neuQuant.lookupRGB(r, g, b);
  }

  var c = b | (g << 8) | (r << 16);

  var minpos = 0;
  var dmin = 256 * 256 * 256;
  var len = this.colorTab.length;

  for (var i = 0, index = 0; i < len; index++) {
    var dr = r - (this.colorTab[i++] & 0xff);
    var dg = g - (this.colorTab[i++] & 0xff);
    var db = b - (this.colorTab[i++] & 0xff);
    var d = dr * dr + dg * dg + db * db;
    if ((!used || this.usedEntry[index]) && (d < dmin)) {
      dmin = d;
      minpos = index;
    }
  }

  return minpos;
};

/*
  Extracts image pixels into byte array pixels
  (removes alphachannel from canvas imagedata)
*/
GIFEncoder.prototype.getImagePixels = function() {
  var w = this.width;
  var h = this.height;
  this.pixels = new Uint8Array(w * h * 3);

  var data = this.image;
  var srcPos = 0;
  var count = 0;

  for (var i = 0; i < h; i++) {
    for (var j = 0; j < w; j++) {
      this.pixels[count++] = data[srcPos++];
      this.pixels[count++] = data[srcPos++];
      this.pixels[count++] = data[srcPos++];
      srcPos++;
    }
  }
};

/*
  Writes Graphic Control Extension
*/
GIFEncoder.prototype.writeGraphicCtrlExt = function() {
  this.out.writeByte(0x21); // extension introducer
  this.out.writeByte(0xf9); // GCE label
  this.out.writeByte(4); // data block size

  var transp, disp;
  if (this.transparent === null) {
    transp = 0;
    disp = 0; // dispose = no action
  } else {
    transp = 1;
    disp = 2; // force clear if using transparent color
  }

  if (this.dispose >= 0) {
    disp = this.dispose & 7; // user override
  }
  disp <<= 2;

  // packed fields
  this.out.writeByte(
    0 | // 1:3 reserved
    disp | // 4:6 disposal
    0 | // 7 user input - 0 = none
    transp // 8 transparency flag
  );

  this.writeShort(this.delay); // delay x 1/100 sec
  this.out.writeByte(this.transIndex); // transparent color index
  this.out.writeByte(0); // block terminator
};

/*
  Writes Image Descriptor
*/
GIFEncoder.prototype.writeImageDesc = function() {
  this.out.writeByte(0x2c); // image separator
  this.writeShort(0); // image position x,y = 0,0
  this.writeShort(0);
  this.writeShort(this.width); // image size
  this.writeShort(this.height);

  // packed fields
  if (this.firstFrame || this.globalPalette) {
    // no LCT - GCT is used for first (or only) frame
    this.out.writeByte(0);
  } else {
    // specify normal LCT
    this.out.writeByte(
      0x80 | // 1 local color table 1=yes
      0 | // 2 interlace - 0=no
      0 | // 3 sorted - 0=no
      0 | // 4-5 reserved
      this.palSize // 6-8 size of color table
    );
  }
};

/*
  Writes Logical Screen Descriptor
*/
GIFEncoder.prototype.writeLSD = function() {
  // logical screen size
  this.writeShort(this.width);
  this.writeShort(this.height);

  // packed fields
  this.out.writeByte(
    0x80 | // 1 : global color table flag = 1 (gct used)
    0x70 | // 2-4 : color resolution = 7
    0x00 | // 5 : gct sort flag = 0
    this.palSize // 6-8 : gct size
  );

  this.out.writeByte(0); // background color index
  this.out.writeByte(0); // pixel aspect ratio - assume 1:1
};

/*
  Writes Netscape application extension to define repeat count.
*/
GIFEncoder.prototype.writeNetscapeExt = function() {
  this.out.writeByte(0x21); // extension introducer
  this.out.writeByte(0xff); // app extension label
  this.out.writeByte(11); // block size
  this.out.writeUTFBytes('NETSCAPE2.0'); // app id + auth code
  this.out.writeByte(3); // sub-block size
  this.out.writeByte(1); // loop sub-block id
  this.writeShort(this.repeat); // loop count (extra iterations, 0=repeat forever)
  this.out.writeByte(0); // block terminator
};

/*
  Writes color table
*/
GIFEncoder.prototype.writePalette = function() {
  this.out.writeBytes(this.colorTab);
  var n = (3 * 256) - this.colorTab.length;
  for (var i = 0; i < n; i++)
    this.out.writeByte(0);
};

GIFEncoder.prototype.writeShort = function(pValue) {
  this.out.writeByte(pValue & 0xFF);
  this.out.writeByte((pValue >> 8) & 0xFF);
};

/*
  Encodes and writes pixel data
*/
GIFEncoder.prototype.writePixels = function() {
  var enc = new LZWEncoder(this.width, this.height, this.indexedPixels, this.colorDepth);
  enc.encode(this.out);
};

/*
  Retrieves the GIF stream
*/
GIFEncoder.prototype.stream = function() {
  return this.out;
};

module.exports = GIFEncoder;


/***/ }),

/***/ "./src/lib/LZWEncoder.js":
/*!*******************************!*\\
  !*** ./src/lib/LZWEncoder.js ***!
  \\*******************************/
/***/ ((module) => {

/*
  LZWEncoder.js

  Authors
  Kevin Weiner (original Java version - kweiner@fmsware.com)
  Thibault Imbert (AS3 version - bytearray.org)
  Johan Nordberg (JS version - code@johan-nordberg.com)

  Acknowledgements
  GIFCOMPR.C - GIF Image compression routines
  Lempel-Ziv compression based on 'compress'. GIF modifications by
  David Rowley (mgardi@watdcsu.waterloo.edu)
  GIF Image compression - modified 'compress'
  Based on: compress.c - File compression ala IEEE Computer, June 1984.
  By Authors: Spencer W. Thomas (decvax!harpo!utah-cs!utah-gr!thomas)
  Jim McKie (decvax!mcvax!jim)
  Steve Davies (decvax!vax135!petsd!peora!srd)
  Ken Turkowski (decvax!decwrl!turtlevax!ken)
  James A. Woods (decvax!ihnp4!ames!jaw)
  Joe Orost (decvax!vax135!petsd!joe)
*/

var EOF = -1;
var BITS = 12;
var HSIZE = 5003; // 80% occupancy
var masks = [0x0000, 0x0001, 0x0003, 0x0007, 0x000F, 0x001F,
             0x003F, 0x007F, 0x00FF, 0x01FF, 0x03FF, 0x07FF,
             0x0FFF, 0x1FFF, 0x3FFF, 0x7FFF, 0xFFFF];

function LZWEncoder(width, height, pixels, colorDepth) {
  var initCodeSize = Math.max(2, colorDepth);

  var accum = new Uint8Array(256);
  var htab = new Int32Array(HSIZE);
  var codetab = new Int32Array(HSIZE);

  var cur_accum, cur_bits = 0;
  var a_count;
  var free_ent = 0; // first unused entry
  var maxcode;

  // block compression parameters -- after all codes are used up,
  // and compression rate changes, start over.
  var clear_flg = false;

  // Algorithm: use open addressing double hashing (no chaining) on the
  // prefix code / next character combination. We do a variant of Knuth's
  // algorithm D (vol. 3, sec. 6.4) along with G. Knott's relatively-prime
  // secondary probe. Here, the modular division first probe is gives way
  // to a faster exclusive-or manipulation. Also do block compression with
  // an adaptive reset, whereby the code table is cleared when the compression
  // ratio decreases, but after the table fills. The variable-length output
  // codes are re-sized at this point, and a special CLEAR code is generated
  // for the decompressor. Late addition: construct the table according to
  // file size for noticeable speed improvement on small files. Please direct
  // questions about this implementation to ames!jaw.
  var g_init_bits, ClearCode, EOFCode;

  // Add a character to the end of the current packet, and if it is 254
  // characters, flush the packet to disk.
  function char_out(c, outs) {
    accum[a_count++] = c;
    if (a_count >= 254) flush_char(outs);
  }

  // Clear out the hash table
  // table clear for block compress
  function cl_block(outs) {
    cl_hash(HSIZE);
    free_ent = ClearCode + 2;
    clear_flg = true;
    output(ClearCode, outs);
  }

  // Reset code table
  function cl_hash(hsize) {
    for (var i = 0; i < hsize; ++i) htab[i] = -1;
  }

  function compress(init_bits, outs) {
    var fcode, c, i, ent, disp, hsize_reg, hshift;

    // Set up the globals: g_init_bits - initial number of bits
    g_init_bits = init_bits;

    // Set up the necessary values
    clear_flg = false;
    n_bits = g_init_bits;
    maxcode = MAXCODE(n_bits);

    ClearCode = 1 << (init_bits - 1);
    EOFCode = ClearCode + 1;
    free_ent = ClearCode + 2;

    a_count = 0; // clear packet

    ent = nextPixel();

    hshift = 0;
    for (fcode = HSIZE; fcode < 65536; fcode *= 2) ++hshift;
    hshift = 8 - hshift; // set hash code range bound
    hsize_reg = HSIZE;
    cl_hash(hsize_reg); // clear hash table

    output(ClearCode, outs);

    outer_loop: while ((c = nextPixel()) != EOF) {
      fcode = (c << BITS) + ent;
      i = (c << hshift) ^ ent; // xor hashing
      if (htab[i] === fcode) {
        ent = codetab[i];
        continue;
      } else if (htab[i] >= 0) { // non-empty slot
        disp = hsize_reg - i; // secondary hash (after G. Knott)
        if (i === 0) disp = 1;
        do {
          if ((i -= disp) < 0) i += hsize_reg;
          if (htab[i] === fcode) {
            ent = codetab[i];
            continue outer_loop;
          }
        } while (htab[i] >= 0);
      }
      output(ent, outs);
      ent = c;
      if (free_ent < 1 << BITS) {
        codetab[i] = free_ent++; // code -> hashtable
        htab[i] = fcode;
      } else {
        cl_block(outs);
      }
    }

    // Put out the final code.
    output(ent, outs);
    output(EOFCode, outs);
  }

  function encode(outs) {
    outs.writeByte(initCodeSize); // write "initial code size" byte
    remaining = width * height; // reset navigation variables
    curPixel = 0;
    compress(initCodeSize + 1, outs); // compress and write the pixel data
    outs.writeByte(0); // write block terminator
  }

  // Flush the packet to disk, and reset the accumulator
  function flush_char(outs) {
    if (a_count > 0) {
      outs.writeByte(a_count);
      outs.writeBytes(accum, 0, a_count);
      a_count = 0;
    }
  }

  function MAXCODE(n_bits) {
    return (1 << n_bits) - 1;
  }

  // Return the next pixel from the image
  function nextPixel() {
    if (remaining === 0) return EOF;
    --remaining;
    var pix = pixels[curPixel++];
    return pix & 0xff;
  }

  function output(code, outs) {
    cur_accum &= masks[cur_bits];

    if (cur_bits > 0) cur_accum |= (code << cur_bits);
    else cur_accum = code;

    cur_bits += n_bits;

    while (cur_bits >= 8) {
      char_out((cur_accum & 0xff), outs);
      cur_accum >>= 8;
      cur_bits -= 8;
    }

    // If the next entry is going to be too big for the code size,
    // then increase it, if possible.
    if (free_ent > maxcode || clear_flg) {
      if (clear_flg) {
        maxcode = MAXCODE(n_bits = g_init_bits);
        clear_flg = false;
      } else {
        ++n_bits;
        if (n_bits == BITS) maxcode = 1 << BITS;
        else maxcode = MAXCODE(n_bits);
      }
    }

    if (code == EOFCode) {
      // At EOF, write the rest of the buffer.
      while (cur_bits > 0) {
        char_out((cur_accum & 0xff), outs);
        cur_accum >>= 8;
        cur_bits -= 8;
      }
      flush_char(outs);
    }
  }

  this.encode = encode;
}

module.exports = LZWEncoder;


/***/ }),

/***/ "./src/lib/TypedNeuQuant.js":
/*!**********************************!*\\
  !*** ./src/lib/TypedNeuQuant.js ***!
  \\**********************************/
/***/ ((module) => {

/* NeuQuant Neural-Net Quantization Algorithm
 * ------------------------------------------
 *
 * Copyright (c) 1994 Anthony Dekker
 *
 * NEUQUANT Neural-Net quantization algorithm by Anthony Dekker, 1994.
 * See "Kohonen neural networks for optimal colour quantization"
 * in "Network: Computation in Neural Systems" Vol. 5 (1994) pp 351-367.
 * for a discussion of the algorithm.
 * See also  http://members.ozemail.com.au/~dekker/NEUQUANT.HTML
 *
 * Any party obtaining a copy of these files from the author, directly or
 * indirectly, is granted, free of charge, a full and unrestricted irrevocable,
 * world-wide, paid up, royalty-free, nonexclusive right and license to deal
 * in this software and documentation files (the "Software"), including without
 * limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons who receive
 * copies from any such party to do so, with the only requirement being
 * that this copyright notice remain intact.
 *
 * (JavaScript port 2012 by Johan Nordberg)
 */

var ncycles = 100; // number of learning cycles
var netsize = 256; // number of colors used
var maxnetpos = netsize - 1;

// defs for freq and bias
var netbiasshift = 4; // bias for colour values
var intbiasshift = 16; // bias for fractions
var intbias = (1 << intbiasshift);
var gammashift = 10;
var gamma = (1 << gammashift);
var betashift = 10;
var beta = (intbias >> betashift); /* beta = 1/1024 */
var betagamma = (intbias << (gammashift - betashift));

// defs for decreasing radius factor
var initrad = (netsize >> 3); // for 256 cols, radius starts
var radiusbiasshift = 6; // at 32.0 biased by 6 bits
var radiusbias = (1 << radiusbiasshift);
var initradius = (initrad * radiusbias); //and decreases by a
var radiusdec = 30; // factor of 1/30 each cycle

// defs for decreasing alpha factor
var alphabiasshift = 10; // alpha starts at 1.0
var initalpha = (1 << alphabiasshift);
var alphadec; // biased by 10 bits

/* radbias and alpharadbias used for radpower calculation */
var radbiasshift = 8;
var radbias = (1 << radbiasshift);
var alpharadbshift = (alphabiasshift + radbiasshift);
var alpharadbias = (1 << alpharadbshift);

// four primes near 500 - assume no image has a length so large that it is
// divisible by all four primes
var prime1 = 499;
var prime2 = 491;
var prime3 = 487;
var prime4 = 503;
var minpicturebytes = (3 * prime4);

/*
  Constructor: NeuQuant

  Arguments:

  pixels - array of pixels in RGB format
  samplefac - sampling factor 1 to 30 where lower is better quality

  >
  > pixels = [r, g, b, r, g, b, r, g, b, ..]
  >
*/
function NeuQuant(pixels, samplefac) {
  var network; // int[netsize][4]
  var netindex; // for network lookup - really 256

  // bias and freq arrays for learning
  var bias;
  var freq;
  var radpower;

  /*
    Private Method: init

    sets up arrays
  */
  function init() {
    network = [];
    netindex = new Int32Array(256);
    bias = new Int32Array(netsize);
    freq = new Int32Array(netsize);
    radpower = new Int32Array(netsize >> 3);

    var i, v;
    for (i = 0; i < netsize; i++) {
      v = (i << (netbiasshift + 8)) / netsize;
      network[i] = new Float64Array([v, v, v, 0]);
      //network[i] = [v, v, v, 0]
      freq[i] = intbias / netsize;
      bias[i] = 0;
    }
  }

  /*
    Private Method: unbiasnet

    unbiases network to give byte values 0..255 and record position i to prepare for sort
  */
  function unbiasnet() {
    for (var i = 0; i < netsize; i++) {
      network[i][0] >>= netbiasshift;
      network[i][1] >>= netbiasshift;
      network[i][2] >>= netbiasshift;
      network[i][3] = i; // record color number
    }
  }

  /*
    Private Method: altersingle

    moves neuron *i* towards biased (b,g,r) by factor *alpha*
  */
  function altersingle(alpha, i, b, g, r) {
    network[i][0] -= (alpha * (network[i][0] - b)) / initalpha;
    network[i][1] -= (alpha * (network[i][1] - g)) / initalpha;
    network[i][2] -= (alpha * (network[i][2] - r)) / initalpha;
  }

  /*
    Private Method: alterneigh

    moves neurons in *radius* around index *i* towards biased (b,g,r) by factor *alpha*
  */
  function alterneigh(radius, i, b, g, r) {
    var lo = Math.abs(i - radius);
    var hi = Math.min(i + radius, netsize);

    var j = i + 1;
    var k = i - 1;
    var m = 1;

    var p, a;
    while ((j < hi) || (k > lo)) {
      a = radpower[m++];

      if (j < hi) {
        p = network[j++];
        p[0] -= (a * (p[0] - b)) / alpharadbias;
        p[1] -= (a * (p[1] - g)) / alpharadbias;
        p[2] -= (a * (p[2] - r)) / alpharadbias;
      }

      if (k > lo) {
        p = network[k--];
        p[0] -= (a * (p[0] - b)) / alpharadbias;
        p[1] -= (a * (p[1] - g)) / alpharadbias;
        p[2] -= (a * (p[2] - r)) / alpharadbias;
      }
    }
  }

  /*
    Private Method: contest

    searches for biased BGR values
  */
  function contest(b, g, r) {
    /*
      finds closest neuron (min dist) and updates freq
      finds best neuron (min dist-bias) and returns position
      for frequently chosen neurons, freq[i] is high and bias[i] is negative
      bias[i] = gamma * ((1 / netsize) - freq[i])
    */

    var bestd = ~(1 << 31);
    var bestbiasd = bestd;
    var bestpos = -1;
    var bestbiaspos = bestpos;

    var i, n, dist, biasdist, betafreq;
    for (i = 0; i < netsize; i++) {
      n = network[i];

      dist = Math.abs(n[0] - b) + Math.abs(n[1] - g) + Math.abs(n[2] - r);
      if (dist < bestd) {
        bestd = dist;
        bestpos = i;
      }

      biasdist = dist - ((bias[i]) >> (intbiasshift - netbiasshift));
      if (biasdist < bestbiasd) {
        bestbiasd = biasdist;
        bestbiaspos = i;
      }

      betafreq = (freq[i] >> betashift);
      freq[i] -= betafreq;
      bias[i] += (betafreq << gammashift);
    }

    freq[bestpos] += beta;
    bias[bestpos] -= betagamma;

    return bestbiaspos;
  }

  /*
    Private Method: inxbuild

    sorts network and builds netindex[0..255]
  */
  function inxbuild() {
    var i, j, p, q, smallpos, smallval, previouscol = 0, startpos = 0;
    for (i = 0; i < netsize; i++) {
      p = network[i];
      smallpos = i;
      smallval = p[1]; // index on g
      // find smallest in i..netsize-1
      for (j = i + 1; j < netsize; j++) {
        q = network[j];
        if (q[1] < smallval) { // index on g
          smallpos = j;
          smallval = q[1]; // index on g
        }
      }
      q = network[smallpos];
      // swap p (i) and q (smallpos) entries
      if (i != smallpos) {
        j = q[0];   q[0] = p[0];   p[0] = j;
        j = q[1];   q[1] = p[1];   p[1] = j;
        j = q[2];   q[2] = p[2];   p[2] = j;
        j = q[3];   q[3] = p[3];   p[3] = j;
      }
      // smallval entry is now in position i

      if (smallval != previouscol) {
        netindex[previouscol] = (startpos + i) >> 1;
        for (j = previouscol + 1; j < smallval; j++)
          netindex[j] = i;
        previouscol = smallval;
        startpos = i;
      }
    }
    netindex[previouscol] = (startpos + maxnetpos) >> 1;
    for (j = previouscol + 1; j < 256; j++)
      netindex[j] = maxnetpos; // really 256
  }

  /*
    Private Method: inxsearch

    searches for BGR values 0..255 and returns a color index
  */
  function inxsearch(b, g, r) {
    var a, p, dist;

    var bestd = 1000; // biggest possible dist is 256*3
    var best = -1;

    var i = netindex[g]; // index on g
    var j = i - 1; // start at netindex[g] and work outwards

    while ((i < netsize) || (j >= 0)) {
      if (i < netsize) {
        p = network[i];
        dist = p[1] - g; // inx key
        if (dist >= bestd) i = netsize; // stop iter
        else {
          i++;
          if (dist < 0) dist = -dist;
          a = p[0] - b; if (a < 0) a = -a;
          dist += a;
          if (dist < bestd) {
            a = p[2] - r; if (a < 0) a = -a;
            dist += a;
            if (dist < bestd) {
              bestd = dist;
              best = p[3];
            }
          }
        }
      }
      if (j >= 0) {
        p = network[j];
        dist = g - p[1]; // inx key - reverse dif
        if (dist >= bestd) j = -1; // stop iter
        else {
          j--;
          if (dist < 0) dist = -dist;
          a = p[0] - b; if (a < 0) a = -a;
          dist += a;
          if (dist < bestd) {
            a = p[2] - r; if (a < 0) a = -a;
            dist += a;
            if (dist < bestd) {
              bestd = dist;
              best = p[3];
            }
          }
        }
      }
    }

    return best;
  }

  /*
    Private Method: learn

    "Main Learning Loop"
  */
  function learn() {
    var i;

    var lengthcount = pixels.length;
    var alphadec = 30 + ((samplefac - 1) / 3);
    var samplepixels = lengthcount / (3 * samplefac);
    var delta = ~~(samplepixels / ncycles);
    var alpha = initalpha;
    var radius = initradius;

    var rad = radius >> radiusbiasshift;

    if (rad <= 1) rad = 0;
    for (i = 0; i < rad; i++)
      radpower[i] = alpha * (((rad * rad - i * i) * radbias) / (rad * rad));

    var step;
    if (lengthcount < minpicturebytes) {
      samplefac = 1;
      step = 3;
    } else if ((lengthcount % prime1) !== 0) {
      step = 3 * prime1;
    } else if ((lengthcount % prime2) !== 0) {
      step = 3 * prime2;
    } else if ((lengthcount % prime3) !== 0)  {
      step = 3 * prime3;
    } else {
      step = 3 * prime4;
    }

    var b, g, r, j;
    var pix = 0; // current pixel

    i = 0;
    while (i < samplepixels) {
      b = (pixels[pix] & 0xff) << netbiasshift;
      g = (pixels[pix + 1] & 0xff) << netbiasshift;
      r = (pixels[pix + 2] & 0xff) << netbiasshift;

      j = contest(b, g, r);

      altersingle(alpha, j, b, g, r);
      if (rad !== 0) alterneigh(rad, j, b, g, r); // alter neighbours

      pix += step;
      if (pix >= lengthcount) pix -= lengthcount;

      i++;

      if (delta === 0) delta = 1;
      if (i % delta === 0) {
        alpha -= alpha / alphadec;
        radius -= radius / radiusdec;
        rad = radius >> radiusbiasshift;

        if (rad <= 1) rad = 0;
        for (j = 0; j < rad; j++)
          radpower[j] = alpha * (((rad * rad - j * j) * radbias) / (rad * rad));
      }
    }
  }

  /*
    Method: buildColormap

    1. initializes network
    2. trains it
    3. removes misconceptions
    4. builds colorindex
  */
  function buildColormap() {
    init();
    learn();
    unbiasnet();
    inxbuild();
  }
  this.buildColormap = buildColormap;

  /*
    Method: getColormap

    builds colormap from the index

    returns array in the format:

    >
    > [r, g, b, r, g, b, r, g, b, ..]
    >
  */
  function getColormap() {
    var map = [];
    var index = [];

    for (var i = 0; i < netsize; i++)
      index[network[i][3]] = i;

    var k = 0;
    for (var l = 0; l < netsize; l++) {
      var j = index[l];
      map[k++] = (network[j][0]);
      map[k++] = (network[j][1]);
      map[k++] = (network[j][2]);
    }
    return map;
  }
  this.getColormap = getColormap;

  /*
    Method: lookupRGB

    looks for the closest *r*, *g*, *b* color in the map and
    returns its index
  */
  this.lookupRGB = inxsearch;
}

module.exports = NeuQuant;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\\
  !*** ./src/gif.worker.js ***!
  \\***************************/
/*\r
 * decaffeinate suggestions:\r
 * DS101: Remove unnecessary use of Array.from\r
 * DS102: Remove unnecessary code created because of implicit returns\r
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md\r
 */\r
const GIFEncoder = __webpack_require__(/*! ./lib/GIFEncoder.js */ "./src/lib/GIFEncoder.js");\r
\r
const renderFrame = function (frame) {\r
  const encoder = new GIFEncoder(frame.width, frame.height);\r
\r
  if (frame.index === 0) {\r
    encoder.writeHeader();\r
  } else {\r
    encoder.firstFrame = false;\r
  }\r
\r
  encoder.setTransparent(frame.transparent);\r
  encoder.setDispose(frame.dispose);\r
  encoder.setRepeat(frame.repeat);\r
  encoder.setDelay(frame.delay);\r
  encoder.setQuality(frame.quality);\r
  encoder.setDither(frame.dither);\r
  encoder.setGlobalPalette(frame.globalPalette);\r
  encoder.addFrame(frame.data);\r
  if (frame.last) {\r
    encoder.finish();\r
  }\r
  if (frame.globalPalette === true) {\r
    frame.globalPalette = encoder.getGlobalPalette();\r
  }\r
\r
  const stream = encoder.stream();\r
  frame.data = stream.pages;\r
  frame.cursor = stream.cursor;\r
  frame.pageSize = stream.constructor.pageSize;\r
\r
  if (frame.canTransfer) {\r
    const transfer = Array.from(frame.data).map((page) => page.buffer);\r
    return self.postMessage(frame, transfer);\r
  } else {\r
    return self.postMessage(frame);\r
  }\r
};\r
\r
self.onmessage = (event) => renderFrame(event.data);\r

})();

/******/ })()
;`},"./src/browser.js":a=>{const o=navigator.userAgent.toLowerCase(),u=navigator.platform.toLowerCase(),b=o.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||[null,"unknown",0],g=b[1]==="ie"&&document.documentMode,d={name:b[1]==="version"?b[3]:b[1],version:g||parseFloat(b[1]==="opera"&&b[4]?b[4]:b[2]),platform:{name:o.match(/ip(?:ad|od|hone)/)?"ios":(o.match(/(?:webos|android)/)||u.match(/mac|win|linux/)||["other"])[0]}};d[d.name]=!0,d[d.name+parseInt(d.version,10)]=!0,d.platform[d.platform.name]=!0,a.exports=d},"?569f":()=>{}},i={};function r(a){var o=i[a];if(o!==void 0)return o.exports;var u=i[a]={exports:{}};return t[a](u,u.exports,r),u.exports}r.d=(a,o)=>{for(var u in o)r.o(o,u)&&!r.o(a,u)&&Object.defineProperty(a,u,{enumerable:!0,get:o[u]})},r.o=(a,o)=>Object.prototype.hasOwnProperty.call(a,o),r.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})};var s={};return(()=>{r.r(s),r.d(s,{default:()=>g});var a=r("./dist/gif.worker.js.txt");const{EventEmitter:o}=r("./node_modules/events/events.js"),u=r("./src/browser.js");r("?569f");var b=function(){let d,w;return(b=class extends o{static initClass(){d={workers:2,repeat:0,background:"#fff",quality:10,width:null,height:null,transparent:null,debug:!1,dither:!1},w={delay:500,copy:!1,dispose:-1}}constructor(l){super(),this.running=!1,this.options={},this.frames=[],this.freeWorkers=[],this.activeWorkers=[],this.setOptions(l);for(let h in d){const m=d[h];this.options[h]==null&&(this.options[h]=m)}this.workerURL=window.URL.createObjectURL(new Blob([a.default]))}setOption(l,h){if(this.options[l]=h,this._canvas!=null&&["width","height"].includes(l))return this._canvas[l]=h}setOptions(l){return(()=>{const h=[];for(let m of Object.keys(l||{})){const k=l[m];h.push(this.setOption(m,k))}return h})()}addFrame(l,h){h==null&&(h={});const m={};m.transparent=this.options.transparent;for(let k in w)m[k]=h[k]||w[k];if(this.options.width==null&&this.setOption("width",l.width),this.options.height==null&&this.setOption("height",l.height),typeof ImageData<"u"&&ImageData!==null&&l instanceof ImageData)m.data=l.data;else if(typeof CanvasRenderingContext2D<"u"&&CanvasRenderingContext2D!==null&&l instanceof CanvasRenderingContext2D||typeof WebGLRenderingContext<"u"&&WebGLRenderingContext!==null&&l instanceof WebGLRenderingContext)h.copy?m.data=this.getContextData(l):m.context=l;else{if(l.childNodes==null)throw new Error("Invalid image");h.copy?m.data=this.getImageData(l):m.image=l}return this.frames.push(m)}render(){let l;if(this.running)throw new Error("Already running");if(this.options.width==null||this.options.height==null)throw new Error("Width and height must be set prior to rendering");this.running=!0,this.nextFrame=0,this.finishedFrames=0,this.imageParts=(()=>{let m,k;const j=[];for(l=0,k=this.frames.length,m=0<=k;m?l<k:l>k;m?l++:l--)j.push(null);return j})();const h=this.spawnWorkers();if(this.options.globalPalette===!0)this.renderNextFrame();else{let m,k;for(l=0,k=h,m=0<=k;m?l<k:l>k;m?l++:l--)this.renderNextFrame()}return this.emit("start"),this.emit("progress",0)}abort(){for(;;){const l=this.activeWorkers.shift();if(l==null)break;this.log("killing active worker"),l.terminate()}return this.running=!1,this.emit("abort")}spawnWorkers(){const l=Math.min(this.options.workers,this.frames.length);return function(h,m,k){let j=[],v=h<m,E=m;for(let F=h;v?F<E:F>E;v?F++:F--)j.push(F);return j}(this.freeWorkers.length,l).forEach(h=>{this.log(`spawning worker ${h}`);const m=new Worker(this.workerURL);return m.onmessage=k=>(this.activeWorkers.splice(this.activeWorkers.indexOf(m),1),this.freeWorkers.push(m),this.frameFinished(k.data)),this.freeWorkers.push(m)}),l}frameFinished(l){if(this.log(`frame ${l.index} finished - ${this.activeWorkers.length} active`),this.finishedFrames++,this.emit("progress",this.finishedFrames/this.frames.length),this.imageParts[l.index]=l,this.options.globalPalette===!0&&(this.options.globalPalette=l.globalPalette,this.log("global palette analyzed"),this.frames.length>2))for(let h=1,m=this.freeWorkers.length,k=1<=m;k?h<m:h>m;k?h++:h--)this.renderNextFrame();return Array.from(this.imageParts).includes(null)?this.renderNextFrame():this.finishRendering()}finishRendering(){let l,h=0;for(l of Array.from(this.imageParts))h+=(l.data.length-1)*l.pageSize+l.cursor;h+=l.pageSize-l.cursor,this.log(`rendering finished - filesize ${Math.round(h/1e3)}kb`);const m=new Uint8Array(h);let k=0;for(l of Array.from(this.imageParts))for(let v=0;v<l.data.length;v++){const E=l.data[v];m.set(E,k),v===l.data.length-1?k+=l.cursor:k+=l.pageSize}const j=new Blob([m],{type:"image/gif"});return this.emit("finished",j,m)}renderNextFrame(){if(this.freeWorkers.length===0)throw new Error("No free workers");if(this.nextFrame>=this.frames.length)return;const l=this.frames[this.nextFrame++],h=this.freeWorkers.shift(),m=this.getTask(l);return this.log(`starting frame ${m.index+1} of ${this.frames.length}`),this.activeWorkers.push(h),h.postMessage(m)}getContextData(l){return l.getImageData(0,0,this.options.width,this.options.height).data}getImageData(l){this._canvas==null&&(this._canvas=document.createElement("canvas"),this._canvas.width=this.options.width,this._canvas.height=this.options.height);const h=this._canvas.getContext("2d");return h.fillStyle=this.options.background,h.fillRect(0,0,this.options.width,this.options.height),h.drawImage(l,0,0),this.getContextData(h)}getTask(l){const h=this.frames.indexOf(l),m={index:h,last:h===this.frames.length-1,delay:l.delay,dispose:l.dispose,transparent:l.transparent,width:this.options.width,height:this.options.height,quality:this.options.quality,dither:this.options.dither,globalPalette:this.options.globalPalette,repeat:this.options.repeat,canTransfer:u.name==="chrome"};if(l.data!=null)m.data=l.data;else if(l.context!=null)m.data=this.getContextData(l.context);else{if(l.image==null)throw new Error("Invalid frame");m.data=this.getImageData(l.image)}return m}log(...l){if(this.options.debug)return console.log(...Array.from(l||[]))}}).initClass(),b}();const g=b})(),s})()})})(Re);const wn=yn(Re.exports),xn="_App_e3owo_1",_n="_VideoWrapper_e3owo_4",kn="_Gallery_e3owo_16",Cn="_BottomNav_e3owo_23",En="_ShootingBtn_e3owo_37",z={App:xn,VideoWrapper:_n,Gallery:kn,BottomNav:Cn,ShootingBtn:En},Fn=G(`<div class="columns"><div class="column"><div class="select"><select></select></div></div><div class="column"><div class="field is-vertical"><div class="field-label is-normal"><label class="label">\u64AE\u5F71\u9593\u9694(\u79D2)</label></div><div class="field-body"><div class="field"><p class="control"><input class="input is-danger" type="number"></p></div></div></div></div><div class="column"><div class="field is-vertical"><div class="field-label is-normal"><label class="label">\u64AE\u5F71\u6642\u9593(\u79D2\u30FB0\u306F\u7121\u9650)</label></div><div class="field-body"><div class="field"><p class="control"><input class="input is-danger" type="number"></p></div></div></div></div><div class="column pt-2"><button>Let's shooting!</button></div></div>`),Sn=G('<div class="title">\u6E96\u5099\u4E2D</div>'),An=G("<div><button>Stop!!!</button></div>"),Se=G("<div></div>"),jn=G("<button>Get gif</button>"),In=G('<div class="columns"><div class="column"><div class="select"><div class="field is-vertical"><div class="field-label is-normal"><label class="label">\u9593\u9694(\u30DF\u30EA\u79D2)</label></div><div class="field-body"><div class="field"><p class="control"><input class="input is-danger" type="number"></p></div></div></div></div></div><div class="column pt-2"></div></div>'),Pn=G("<div><div><video playsinline muted autoplay></video><div></div></div><canvas></canvas></div>"),$n=G("<option></option>"),Ae=G('<img width="100">'),Ln=G('<progress class="progress is-small is-primary" max="100">15%</progress>'),Tn=()=>{let e,n;const[t,i]=vn({status:"preparing",stream:null,images:[],imgDataList:[],intervalId:void 0,devices:[],interval:1,shootingTime:0,delay:200});Ve(async()=>{const d=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});i("stream",()=>d);const w=await navigator.mediaDevices.enumerateDevices();i("devices",()=>w.filter(l=>l.kind==="videoinput"))}),$e(()=>{e&&(e.srcObject=t.stream)});const r=async()=>{i("status",()=>"standby");const d=()=>{if(e&&n&&t.stream){const{width:w,height:l}=t.stream.getVideoTracks()[0].getSettings();if(!w||!l)return;n.width=w,n.height=l;const h=n.getContext("2d");if(!h)return;h.drawImage(e,0,0,n.width,n.height);const m=n.toDataURL("image/png"),k=h.getImageData(0,0,n.width,n.height);i("images",j=>[...j,m]),i("imgDataList",j=>[...j,k])}};setTimeout(()=>{d();const w=setInterval(()=>{d()},t.interval*1e3);t.shootingTime>0&&setTimeout(()=>{s()},t.shootingTime*1e3),i("intervalId",()=>w),i("status",()=>"shooting")},3e3)},s=()=>{clearInterval(t.intervalId),i("status",()=>"setupgif")},a=()=>{i("status",()=>"generating");const d=new wn({quality:10});t.imgDataList.forEach(w=>{d.addFrame(w,{delay:t.delay})}),d.render(),d.on("finished",w=>{window.open(URL.createObjectURL(w)),i("status",()=>"setupgif")})},o=d=>{i("interval",()=>Number(d.target.value))},u=d=>{i("shootingTime",()=>Number(d.target.value))},b=d=>{i("delay",()=>Number(d.target.value))},g=async d=>{const w=d.target.value;t.stream?.getTracks().forEach(h=>h.stop());const l=await navigator.mediaDevices.getUserMedia({video:{deviceId:w}});i("stream",()=>l)};return(()=>{const d=Pn.cloneNode(!0),w=d.firstChild,l=w.firstChild,h=l.nextSibling,m=w.nextSibling,k=e;typeof k=="function"?k(l):e=l,q(h,B(ln,{get children(){return[B(Y,{get when(){return t.status==="preparing"},get children(){const v=Fn.cloneNode(!0),E=v.firstChild,F=E.firstChild,A=F.firstChild,c=E.nextSibling,f=c.firstChild,p=f.firstChild,y=p.nextSibling,x=y.firstChild,_=x.firstChild,C=_.firstChild,S=c.nextSibling,P=S.firstChild,ce=P.firstChild,We=ce.nextSibling,Ue=We.firstChild,Qe=Ue.firstChild,we=Qe.firstChild,Ke=S.nextSibling,xe=Ke.firstChild;return A.addEventListener("change",g),q(A,B(ue,{get each(){return t.devices},children:_e=>(()=>{const de=$n.cloneNode(!0);return q(de,()=>_e.label),T(()=>de.value=_e.deviceId),de})()})),C.$$input=o,we.$$input=u,xe.$$click=r,T(()=>D(xe,z.ShootingBtn)),T(()=>C.value=t.interval),T(()=>we.value=t.shootingTime),v}}),B(Y,{get when(){return t.status==="standby"},get children(){return Sn.cloneNode(!0)}}),B(Y,{get when(){return t.status==="shooting"},get children(){return[(()=>{const v=An.cloneNode(!0),E=v.firstChild;return E.$$click=s,T(()=>D(E,z.ShootingBtn)),v})(),(()=>{const v=Se.cloneNode(!0);return q(v,B(ue,{get each(){return t.images},children:(E,F)=>(()=>{const A=Ae.cloneNode(!0);return Ee(A,"src",E),A})()})),T(()=>D(v,z.Gallery+" pt-2")),v})()]}}),B(Y,{get when(){return t.status==="setupgif"||t.status==="generating"},get children(){return[(()=>{const v=In.cloneNode(!0),E=v.firstChild,F=E.firstChild,A=F.firstChild,c=A.firstChild,f=c.nextSibling,p=f.firstChild,y=p.firstChild,x=y.firstChild,_=E.nextSibling;return x.$$input=b,q(_,B(an,{get when(){return t.status==="setupgif"},fallback:()=>Ln.cloneNode(!0),get children(){const C=jn.cloneNode(!0);return C.$$click=a,T(()=>D(C,z.ShootingBtn)),C}})),T(()=>x.value=t.delay),v})(),(()=>{const v=Se.cloneNode(!0);return q(v,B(ue,{get each(){return t.images},children:(E,F)=>(()=>{const A=Ae.cloneNode(!0);return Ee(A,"src",E),A})()})),T(()=>D(v,z.Gallery+" pt-2")),v})()]}})]}}));const j=n;return typeof j=="function"?j(m):n=m,m.style.setProperty("display","none"),T(v=>{const E=z.App,F=z.VideoWrapper,A=z.BottomNav;return E!==v._v$&&D(d,v._v$=E),F!==v._v$2&&D(w,v._v$2=F),A!==v._v$3&&D(h,v._v$3=A),v},{_v$:void 0,_v$2:void 0,_v$3:void 0}),d})()};un(["input","click"]);dn(()=>B(Tn,{}),document.getElementById("root"));
