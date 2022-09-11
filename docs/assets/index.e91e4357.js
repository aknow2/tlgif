(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const B={};function Me(e){B.context=e}const ze=(e,n)=>e===n,M=Symbol("solid-proxy"),ue=Symbol("solid-track"),ne={equals:ze};let Ee=Le;const N=1,te=2,Fe={owned:null,cleanups:null,context:null,owner:null};var P=null;let D=null,j=null,L=null,T=null,me=0;function ee(e,n){const t=j,i=P,r=e.length===0,s=r?Fe:{owned:null,cleanups:null,context:null,owner:n||i},a=r?e:()=>e(()=>Q(()=>ve(s)));P=s,j=null;try{return K(a,!0)}finally{j=t,P=i}}function Ae(e,n){n=n?Object.assign({},ne,n):ne;const t={value:e,observers:null,observerSlots:null,comparator:n.equals||void 0},i=r=>(typeof r=="function"&&(r=r(t.value)),Pe(t,r));return[Ie.bind(t),i]}function $(e,n,t){const i=be(e,n,!1,N);Y(i)}function Se(e,n,t){Ee=Ze;const i=be(e,n,!1,N);i.user=!0,T?T.push(i):Y(i)}function J(e,n,t){t=t?Object.assign({},ne,t):ne;const i=be(e,n,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=t.equals||void 0,Y(i),Ie.bind(i)}function qe(e){return K(e,!1)}function Q(e){let n,t=j;return j=null,n=e(),j=t,n}function Re(e){Se(()=>Q(e))}function We(e){return P===null||(P.cleanups===null?P.cleanups=[e]:P.cleanups.push(e)),e}function je(){return j}function Ue(e){const n=J(e),t=J(()=>fe(n()));return t.toArray=()=>{const i=t();return Array.isArray(i)?i:i!=null?[i]:[]},t}function Ie(){const e=D;if(this.sources&&(this.state||e))if(this.state===N||e)Y(this);else{const n=L;L=null,K(()=>re(this),!1),L=n}if(j){const n=this.observers?this.observers.length:0;j.sources?(j.sources.push(this),j.sourceSlots.push(n)):(j.sources=[this],j.sourceSlots=[n]),this.observers?(this.observers.push(j),this.observerSlots.push(j.sources.length-1)):(this.observers=[j],this.observerSlots=[j.sources.length-1])}return this.value}function Pe(e,n,t){let i=e.value;return(!e.comparator||!e.comparator(i,n))&&(e.value=n,e.observers&&e.observers.length&&K(()=>{for(let r=0;r<e.observers.length;r+=1){const s=e.observers[r],a=D&&D.running;a&&D.disposed.has(s),(a&&!s.tState||!a&&!s.state)&&(s.pure?L.push(s):T.push(s),s.observers&&Oe(s)),a||(s.state=N)}if(L.length>1e6)throw L=[],new Error},!1)),n}function Y(e){if(!e.fn)return;ve(e);const n=P,t=j,i=me;j=P=e,Qe(e,e.value,i),j=t,P=n}function Qe(e,n,t){let i;try{i=e.fn(n)}catch(r){e.pure&&(e.state=N),$e(r)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?Pe(e,i):e.value=i,e.updatedAt=t)}function be(e,n,t,i=N,r){const s={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:P,context:null,pure:t};return P===null||P!==Fe&&(P.owned?P.owned.push(s):P.owned=[s]),s}function ie(e){const n=D;if(e.state===0||n)return;if(e.state===te||n)return re(e);if(e.suspense&&Q(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<me);)(e.state||n)&&t.push(e);for(let i=t.length-1;i>=0;i--)if(e=t[i],e.state===N||n)Y(e);else if(e.state===te||n){const r=L;L=null,K(()=>re(e,t[0]),!1),L=r}}function K(e,n){if(L)return e();let t=!1;n||(L=[]),T?t=!0:T=[],me++;try{const i=e();return Ke(t),i}catch(i){L||(T=null),$e(i)}}function Ke(e){if(L&&(Le(L),L=null),e)return;const n=T;T=null,n.length&&K(()=>Ee(n),!1)}function Le(e){for(let n=0;n<e.length;n++)ie(e[n])}function Ze(e){let n,t=0;for(n=0;n<e.length;n++){const i=e[n];i.user?e[t++]=i:ie(i)}for(B.context&&Me(),n=0;n<t;n++)ie(e[n])}function re(e,n){const t=D;e.state=0;for(let i=0;i<e.sources.length;i+=1){const r=e.sources[i];r.sources&&(r.state===N||t?r!==n&&ie(r):(r.state===te||t)&&re(r,n))}}function Oe(e){const n=D;for(let t=0;t<e.observers.length;t+=1){const i=e.observers[t];(!i.state||n)&&(i.state=te,i.pure?L.push(i):T.push(i),i.observers&&Oe(i))}}function ve(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),i=e.sourceSlots.pop(),r=t.observers;if(r&&r.length){const s=r.pop(),a=t.observerSlots.pop();i<r.length&&(s.sourceSlots[a]=i,r[i]=s,t.observerSlots[i]=a)}}if(e.owned){for(n=0;n<e.owned.length;n++)ve(e.owned[n]);e.owned=null}if(e.cleanups){for(n=0;n<e.cleanups.length;n++)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function He(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function $e(e){throw e=He(e),e}function fe(e){if(typeof e=="function"&&!e.length)return fe(e());if(Array.isArray(e)){const n=[];for(let t=0;t<e.length;t++){const i=fe(e[t]);Array.isArray(i)?n.push.apply(n,i):n.push(i)}return n}return e}const Je=Symbol("fallback");function ye(e){for(let n=0;n<e.length;n++)e[n]()}function Ve(e,n,t={}){let i=[],r=[],s=[],a=0,o=n.length>1?[]:null;return We(()=>ye(s)),()=>{let f=e()||[],b,d;return f[ue],Q(()=>{let C=f.length,c,g,m,w,x,_,A,E,O;if(C===0)a!==0&&(ye(s),s=[],i=[],r=[],a=0,o&&(o=[])),t.fallback&&(i=[Je],r[0]=ee(l=>(s[0]=l,t.fallback())),a=1);else if(a===0){for(r=new Array(C),d=0;d<C;d++)i[d]=f[d],r[d]=ee(u);a=C}else{for(m=new Array(C),w=new Array(C),o&&(x=new Array(C)),_=0,A=Math.min(a,C);_<A&&i[_]===f[_];_++);for(A=a-1,E=C-1;A>=_&&E>=_&&i[A]===f[E];A--,E--)m[E]=r[A],w[E]=s[A],o&&(x[E]=o[A]);for(c=new Map,g=new Array(E+1),d=E;d>=_;d--)O=f[d],b=c.get(O),g[d]=b===void 0?-1:b,c.set(O,d);for(b=_;b<=A;b++)O=i[b],d=c.get(O),d!==void 0&&d!==-1?(m[d]=r[b],w[d]=s[b],o&&(x[d]=o[b]),d=g[d],c.set(O,d)):s[b]();for(d=_;d<C;d++)d in m?(r[d]=m[d],s[d]=w[d],o&&(o[d]=x[d],o[d](d))):r[d]=ee(u);r=r.slice(0,a=C),i=f.slice(0)}return r});function u(C){if(s[d]=C,o){const[c,g]=Ae(d);return o[d]=g,n(f[d],c)}return n(f[d])}}}function G(e,n){return Q(()=>e(n||{}))}function ce(e){const n="fallback"in e&&{fallback:()=>e.fallback};return J(Ve(()=>e.each,e.children,n||void 0))}function Xe(e){let n=!1,t=!1;const i=Ue(()=>e.children),r=J(()=>{let s=i();Array.isArray(s)||(s=[s]);for(let a=0;a<s.length;a++){const o=s[a].when;if(o)return t=!!s[a].keyed,[a,o,s[a]]}return[-1]},void 0,{equals:(s,a)=>s[0]===a[0]&&(n?s[1]===a[1]:!s[1]==!a[1])&&s[2]===a[2]});return J(()=>{const[s,a,o]=r();if(s<0)return e.fallback;const f=o.children,b=typeof f=="function"&&f.length>0;return n=t||b,b?Q(()=>f(a)):f})}function de(e){return e}function Ye(e,n,t){let i=t.length,r=n.length,s=i,a=0,o=0,f=n[r-1].nextSibling,b=null;for(;a<r||o<s;){if(n[a]===t[o]){a++,o++;continue}for(;n[r-1]===t[s-1];)r--,s--;if(r===a){const d=s<i?o?t[o-1].nextSibling:t[s-o]:f;for(;o<s;)e.insertBefore(t[o++],d)}else if(s===o)for(;a<r;)(!b||!b.has(n[a]))&&n[a].remove(),a++;else if(n[a]===t[s-1]&&t[o]===n[r-1]){const d=n[--r].nextSibling;e.insertBefore(t[o++],n[a++].nextSibling),e.insertBefore(t[--s],d),n[r]=t[s]}else{if(!b){b=new Map;let u=o;for(;u<s;)b.set(t[u],u++)}const d=b.get(n[a]);if(d!=null)if(o<d&&d<s){let u=a,C=1,c;for(;++u<r&&u<s&&!((c=b.get(n[u]))==null||c!==d+C);)C++;if(C>d-o){const g=n[a];for(;o<d;)e.insertBefore(t[o++],g)}else e.replaceChild(t[o++],n[a++])}else a++;else n[a++].remove()}}}const we="_$DX_DELEGATE";function en(e,n,t){let i;return ee(r=>{i=r,n===document?e():U(n,e(),n.firstChild?null:void 0,t)}),()=>{i(),n.textContent=""}}function z(e,n,t){const i=document.createElement("template");i.innerHTML=e;let r=i.content.firstChild;return t&&(r=r.firstChild),r}function nn(e,n=window.document){const t=n[we]||(n[we]=new Set);for(let i=0,r=e.length;i<r;i++){const s=e[i];t.has(s)||(t.add(s),n.addEventListener(s,tn))}}function xe(e,n,t){t==null?e.removeAttribute(n):e.setAttribute(n,t)}function q(e,n){n==null?e.removeAttribute("class"):e.className=n}function U(e,n,t,i){if(t!==void 0&&!i&&(i=[]),typeof n!="function")return se(e,n,i,t);$(r=>se(e,n(),r,t),i)}function tn(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),B.registry&&!B.done&&(B.done=!0,document.querySelectorAll("[id^=pl-]").forEach(i=>i.remove()));t!==null;){const i=t[n];if(i&&!t.disabled){const r=t[`${n}Data`];if(r!==void 0?i.call(t,r,e):i.call(t,e),e.cancelBubble)return}t=t.host&&t.host!==t&&t.host instanceof Node?t.host:t.parentNode}}function se(e,n,t,i,r){for(B.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(n===t)return t;const s=typeof n,a=i!==void 0;if(e=a&&t[0]&&t[0].parentNode||e,s==="string"||s==="number"){if(B.context)return t;if(s==="number"&&(n=n.toString()),a){let o=t[0];o&&o.nodeType===3?o.data=n:o=document.createTextNode(n),t=R(e,t,i,o)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||s==="boolean"){if(B.context)return t;t=R(e,t,i)}else{if(s==="function")return $(()=>{let o=n();for(;typeof o=="function";)o=o();t=se(e,o,t,i)}),()=>t;if(Array.isArray(n)){const o=[],f=t&&Array.isArray(t);if(he(o,n,t,r))return $(()=>t=se(e,o,t,i,!0)),()=>t;if(B.context){if(!o.length)return t;for(let b=0;b<o.length;b++)if(o[b].parentNode)return t=o}if(o.length===0){if(t=R(e,t,i),a)return t}else f?t.length===0?_e(e,o,i):Ye(e,t,o):(t&&R(e),_e(e,o));t=o}else if(n instanceof Node){if(B.context&&n.parentNode)return t=a?[n]:n;if(Array.isArray(t)){if(a)return t=R(e,t,i,n);R(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function he(e,n,t,i){let r=!1;for(let s=0,a=n.length;s<a;s++){let o=n[s],f=t&&t[s];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))r=he(e,o,f)||r;else if(typeof o=="function")if(i){for(;typeof o=="function";)o=o();r=he(e,Array.isArray(o)?o:[o],f)||r}else e.push(o),r=!0;else{const b=String(o);f&&f.nodeType===3&&f.data===b?e.push(f):e.push(document.createTextNode(b))}}return r}function _e(e,n,t){for(let i=0,r=n.length;i<r;i++)e.insertBefore(n[i],t)}function R(e,n,t,i){if(t===void 0)return e.textContent="";const r=i||document.createTextNode("");if(n.length){let s=!1;for(let a=n.length-1;a>=0;a--){const o=n[a];if(r!==o){const f=o.parentNode===e;!s&&!a?f?e.replaceChild(r,o):e.insertBefore(r,t):f&&o.remove()}else s=!0}}else e.insertBefore(r,t);return[r]}const pe=Symbol("store-raw"),V=Symbol("store-node"),rn=Symbol("store-name");function Be(e,n){let t=e[M];if(!t&&(Object.defineProperty(e,M,{value:t=new Proxy(e,an)}),!Array.isArray(e))){const i=Object.keys(e),r=Object.getOwnPropertyDescriptors(e);for(let s=0,a=i.length;s<a;s++){const o=i[s];if(r[o].get){const f=r[o].get.bind(t);Object.defineProperty(e,o,{get:f})}}}return t}function oe(e){let n;return e!=null&&typeof e=="object"&&(e[M]||!(n=Object.getPrototypeOf(e))||n===Object.prototype||Array.isArray(e))}function X(e,n=new Set){let t,i,r,s;if(t=e!=null&&e[pe])return t;if(!oe(e)||n.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):n.add(e);for(let a=0,o=e.length;a<o;a++)r=e[a],(i=X(r,n))!==r&&(e[a]=i)}else{Object.isFrozen(e)?e=Object.assign({},e):n.add(e);const a=Object.keys(e),o=Object.getOwnPropertyDescriptors(e);for(let f=0,b=a.length;f<b;f++)s=a[f],!o[s].get&&(r=e[s],(i=X(r,n))!==r&&(e[s]=i))}return e}function ae(e){let n=e[V];return n||Object.defineProperty(e,V,{value:n={}}),n}function ge(e,n,t){return e[n]||(e[n]=Ge(t))}function sn(e,n){const t=Reflect.getOwnPropertyDescriptor(e,n);return!t||t.get||!t.configurable||n===M||n===V||n===rn||(delete t.value,delete t.writable,t.get=()=>e[M][n]),t}function Te(e){if(je()){const n=ae(e);(n._||(n._=Ge()))()}}function on(e){return Te(e),Reflect.ownKeys(e)}function Ge(e){const[n,t]=Ae(e,{equals:!1,internal:!0});return n.$=t,n}const an={get(e,n,t){if(n===pe)return e;if(n===M)return t;if(n===ue)return Te(e),t;const i=ae(e),r=i.hasOwnProperty(n);let s=r?i[n]():e[n];if(n===V||n==="__proto__")return s;if(!r){const a=Object.getOwnPropertyDescriptor(e,n);je()&&(typeof s!="function"||e.hasOwnProperty(n))&&!(a&&a.get)&&(s=ge(i,n,s)())}return oe(s)?Be(s):s},has(e,n){if(n===pe||n===M||n===ue||n===V||n==="__proto__")return!0;const t=ae(e)[n];return t&&t(),n in e},set(){return!0},deleteProperty(){return!0},ownKeys:on,getOwnPropertyDescriptor:sn};function le(e,n,t,i=!1){if(!i&&e[n]===t)return;const r=e[n],s=e.length;t===void 0?delete e[n]:e[n]=t;let a=ae(e),o;(o=ge(a,n,r))&&o.$(()=>t),Array.isArray(e)&&e.length!==s&&(o=ge(a,"length",s))&&o.$(e.length),(o=a._)&&o.$()}function Ne(e,n){const t=Object.keys(n);for(let i=0;i<t.length;i+=1){const r=t[i];le(e,r,n[r])}}function ln(e,n){if(typeof n=="function"&&(n=n(e)),n=X(n),Array.isArray(n)){if(e===n)return;let t=0,i=n.length;for(;t<i;t++){const r=n[t];e[t]!==r&&le(e,t,r)}le(e,"length",i)}else Ne(e,n)}function H(e,n,t=[]){let i,r=e;if(n.length>1){i=n.shift();const a=typeof i,o=Array.isArray(e);if(Array.isArray(i)){for(let f=0;f<i.length;f++)H(e,[i[f]].concat(n),t);return}else if(o&&a==="function"){for(let f=0;f<e.length;f++)i(e[f],f)&&H(e,[f].concat(n),t);return}else if(o&&a==="object"){const{from:f=0,to:b=e.length-1,by:d=1}=i;for(let u=f;u<=b;u+=d)H(e,[u].concat(n),t);return}else if(n.length>1){H(e[i],n,[i].concat(t));return}r=e[i],t=[i].concat(t)}let s=n[0];typeof s=="function"&&(s=s(r,t),s===r)||i===void 0&&s==null||(s=X(s),i===void 0||oe(r)&&oe(s)&&!Array.isArray(s)?Ne(r,s):le(e,i,s))}function cn(...[e,n]){const t=X(e||{}),i=Array.isArray(t),r=Be(t);function s(...a){qe(()=>{i&&a.length===1?ln(t,a[0]):H(t,a)})}return[r,s]}function dn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var De={exports:{}};/*! For license information please see gif.js.LICENSE.txt */(function(e,n){(function(t,i){e.exports=i()})(self,function(){return(()=>{var t={"./node_modules/events/events.js":a=>{var o,f=typeof Reflect=="object"?Reflect:null,b=f&&typeof f.apply=="function"?f.apply:function(l,h,p){return Function.prototype.apply.call(l,h,p)};o=f&&typeof f.ownKeys=="function"?f.ownKeys:Object.getOwnPropertySymbols?function(l){return Object.getOwnPropertyNames(l).concat(Object.getOwnPropertySymbols(l))}:function(l){return Object.getOwnPropertyNames(l)};var d=Number.isNaN||function(l){return l!=l};function u(){u.init.call(this)}a.exports=u,a.exports.once=function(l,h){return new Promise(function(p,v){function k(F){l.removeListener(h,y),v(F)}function y(){typeof l.removeListener=="function"&&l.removeListener("error",k),p([].slice.call(arguments))}O(l,h,y,{once:!0}),h!=="error"&&function(F,S,I){typeof F.on=="function"&&O(F,"error",S,{once:!0})}(l,k)})},u.EventEmitter=u,u.prototype._events=void 0,u.prototype._eventsCount=0,u.prototype._maxListeners=void 0;var C=10;function c(l){if(typeof l!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof l)}function g(l){return l._maxListeners===void 0?u.defaultMaxListeners:l._maxListeners}function m(l,h,p,v){var k,y,F,S;if(c(p),(y=l._events)===void 0?(y=l._events=Object.create(null),l._eventsCount=0):(y.newListener!==void 0&&(l.emit("newListener",h,p.listener?p.listener:p),y=l._events),F=y[h]),F===void 0)F=y[h]=p,++l._eventsCount;else if(typeof F=="function"?F=y[h]=v?[p,F]:[F,p]:v?F.unshift(p):F.push(p),(k=g(l))>0&&F.length>k&&!F.warned){F.warned=!0;var I=new Error("Possible EventEmitter memory leak detected. "+F.length+" "+String(h)+" listeners added. Use emitter.setMaxListeners() to increase limit");I.name="MaxListenersExceededWarning",I.emitter=l,I.type=h,I.count=F.length,S=I,console&&console.warn&&console.warn(S)}return l}function w(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function x(l,h,p){var v={fired:!1,wrapFn:void 0,target:l,type:h,listener:p},k=w.bind(v);return k.listener=p,v.wrapFn=k,k}function _(l,h,p){var v=l._events;if(v===void 0)return[];var k=v[h];return k===void 0?[]:typeof k=="function"?p?[k.listener||k]:[k]:p?function(y){for(var F=new Array(y.length),S=0;S<F.length;++S)F[S]=y[S].listener||y[S];return F}(k):E(k,k.length)}function A(l){var h=this._events;if(h!==void 0){var p=h[l];if(typeof p=="function")return 1;if(p!==void 0)return p.length}return 0}function E(l,h){for(var p=new Array(h),v=0;v<h;++v)p[v]=l[v];return p}function O(l,h,p,v){if(typeof l.on=="function")v.once?l.once(h,p):l.on(h,p);else{if(typeof l.addEventListener!="function")throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof l);l.addEventListener(h,function k(y){v.once&&l.removeEventListener(h,k),p(y)})}}Object.defineProperty(u,"defaultMaxListeners",{enumerable:!0,get:function(){return C},set:function(l){if(typeof l!="number"||l<0||d(l))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+l+".");C=l}}),u.init=function(){this._events!==void 0&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},u.prototype.setMaxListeners=function(l){if(typeof l!="number"||l<0||d(l))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+l+".");return this._maxListeners=l,this},u.prototype.getMaxListeners=function(){return g(this)},u.prototype.emit=function(l){for(var h=[],p=1;p<arguments.length;p++)h.push(arguments[p]);var v=l==="error",k=this._events;if(k!==void 0)v=v&&k.error===void 0;else if(!v)return!1;if(v){var y;if(h.length>0&&(y=h[0]),y instanceof Error)throw y;var F=new Error("Unhandled error."+(y?" ("+y.message+")":""));throw F.context=y,F}var S=k[l];if(S===void 0)return!1;if(typeof S=="function")b(S,this,h);else{var I=S.length,Z=E(S,I);for(p=0;p<I;++p)b(Z[p],this,h)}return!0},u.prototype.addListener=function(l,h){return m(this,l,h,!1)},u.prototype.on=u.prototype.addListener,u.prototype.prependListener=function(l,h){return m(this,l,h,!0)},u.prototype.once=function(l,h){return c(h),this.on(l,x(this,l,h)),this},u.prototype.prependOnceListener=function(l,h){return c(h),this.prependListener(l,x(this,l,h)),this},u.prototype.removeListener=function(l,h){var p,v,k,y,F;if(c(h),(v=this._events)===void 0)return this;if((p=v[l])===void 0)return this;if(p===h||p.listener===h)--this._eventsCount==0?this._events=Object.create(null):(delete v[l],v.removeListener&&this.emit("removeListener",l,p.listener||h));else if(typeof p!="function"){for(k=-1,y=p.length-1;y>=0;y--)if(p[y]===h||p[y].listener===h){F=p[y].listener,k=y;break}if(k<0)return this;k===0?p.shift():function(S,I){for(;I+1<S.length;I++)S[I]=S[I+1];S.pop()}(p,k),p.length===1&&(v[l]=p[0]),v.removeListener!==void 0&&this.emit("removeListener",l,F||h)}return this},u.prototype.off=u.prototype.removeListener,u.prototype.removeAllListeners=function(l){var h,p,v;if((p=this._events)===void 0)return this;if(p.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):p[l]!==void 0&&(--this._eventsCount==0?this._events=Object.create(null):delete p[l]),this;if(arguments.length===0){var k,y=Object.keys(p);for(v=0;v<y.length;++v)(k=y[v])!=="removeListener"&&this.removeAllListeners(k);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(typeof(h=p[l])=="function")this.removeListener(l,h);else if(h!==void 0)for(v=h.length-1;v>=0;v--)this.removeListener(l,h[v]);return this},u.prototype.listeners=function(l){return _(this,l,!0)},u.prototype.rawListeners=function(l){return _(this,l,!1)},u.listenerCount=function(l,h){return typeof l.listenerCount=="function"?l.listenerCount(h):A.call(l,h)},u.prototype.listenerCount=A,u.prototype.eventNames=function(){return this._eventsCount>0?o(this._events):[]}},"./dist/gif.worker.js.txt":(a,o,f)=>{f.r(o),f.d(o,{default:()=>b});const b=`/******/ (() => { // webpackBootstrap
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
;`},"./src/browser.js":a=>{const o=navigator.userAgent.toLowerCase(),f=navigator.platform.toLowerCase(),b=o.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||[null,"unknown",0],d=b[1]==="ie"&&document.documentMode,u={name:b[1]==="version"?b[3]:b[1],version:d||parseFloat(b[1]==="opera"&&b[4]?b[4]:b[2]),platform:{name:o.match(/ip(?:ad|od|hone)/)?"ios":(o.match(/(?:webos|android)/)||f.match(/mac|win|linux/)||["other"])[0]}};u[u.name]=!0,u[u.name+parseInt(u.version,10)]=!0,u.platform[u.platform.name]=!0,a.exports=u},"?569f":()=>{}},i={};function r(a){var o=i[a];if(o!==void 0)return o.exports;var f=i[a]={exports:{}};return t[a](f,f.exports,r),f.exports}r.d=(a,o)=>{for(var f in o)r.o(o,f)&&!r.o(a,f)&&Object.defineProperty(a,f,{enumerable:!0,get:o[f]})},r.o=(a,o)=>Object.prototype.hasOwnProperty.call(a,o),r.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})};var s={};return(()=>{r.r(s),r.d(s,{default:()=>d});var a=r("./dist/gif.worker.js.txt");const{EventEmitter:o}=r("./node_modules/events/events.js"),f=r("./src/browser.js");r("?569f");var b=function(){let u,C;return(b=class extends o{static initClass(){u={workers:2,repeat:0,background:"#fff",quality:10,width:null,height:null,transparent:null,debug:!1,dither:!1},C={delay:500,copy:!1,dispose:-1}}constructor(c){super(),this.running=!1,this.options={},this.frames=[],this.freeWorkers=[],this.activeWorkers=[],this.setOptions(c);for(let g in u){const m=u[g];this.options[g]==null&&(this.options[g]=m)}this.workerURL=window.URL.createObjectURL(new Blob([a.default]))}setOption(c,g){if(this.options[c]=g,this._canvas!=null&&["width","height"].includes(c))return this._canvas[c]=g}setOptions(c){return(()=>{const g=[];for(let m of Object.keys(c||{})){const w=c[m];g.push(this.setOption(m,w))}return g})()}addFrame(c,g){g==null&&(g={});const m={};m.transparent=this.options.transparent;for(let w in C)m[w]=g[w]||C[w];if(this.options.width==null&&this.setOption("width",c.width),this.options.height==null&&this.setOption("height",c.height),typeof ImageData<"u"&&ImageData!==null&&c instanceof ImageData)m.data=c.data;else if(typeof CanvasRenderingContext2D<"u"&&CanvasRenderingContext2D!==null&&c instanceof CanvasRenderingContext2D||typeof WebGLRenderingContext<"u"&&WebGLRenderingContext!==null&&c instanceof WebGLRenderingContext)g.copy?m.data=this.getContextData(c):m.context=c;else{if(c.childNodes==null)throw new Error("Invalid image");g.copy?m.data=this.getImageData(c):m.image=c}return this.frames.push(m)}render(){let c;if(this.running)throw new Error("Already running");if(this.options.width==null||this.options.height==null)throw new Error("Width and height must be set prior to rendering");this.running=!0,this.nextFrame=0,this.finishedFrames=0,this.imageParts=(()=>{let m,w;const x=[];for(c=0,w=this.frames.length,m=0<=w;m?c<w:c>w;m?c++:c--)x.push(null);return x})();const g=this.spawnWorkers();if(this.options.globalPalette===!0)this.renderNextFrame();else{let m,w;for(c=0,w=g,m=0<=w;m?c<w:c>w;m?c++:c--)this.renderNextFrame()}return this.emit("start"),this.emit("progress",0)}abort(){for(;;){const c=this.activeWorkers.shift();if(c==null)break;this.log("killing active worker"),c.terminate()}return this.running=!1,this.emit("abort")}spawnWorkers(){const c=Math.min(this.options.workers,this.frames.length);return function(g,m,w){let x=[],_=g<m,A=m;for(let E=g;_?E<A:E>A;_?E++:E--)x.push(E);return x}(this.freeWorkers.length,c).forEach(g=>{this.log(`spawning worker ${g}`);const m=new Worker(this.workerURL);return m.onmessage=w=>(this.activeWorkers.splice(this.activeWorkers.indexOf(m),1),this.freeWorkers.push(m),this.frameFinished(w.data)),this.freeWorkers.push(m)}),c}frameFinished(c){if(this.log(`frame ${c.index} finished - ${this.activeWorkers.length} active`),this.finishedFrames++,this.emit("progress",this.finishedFrames/this.frames.length),this.imageParts[c.index]=c,this.options.globalPalette===!0&&(this.options.globalPalette=c.globalPalette,this.log("global palette analyzed"),this.frames.length>2))for(let g=1,m=this.freeWorkers.length,w=1<=m;w?g<m:g>m;w?g++:g--)this.renderNextFrame();return Array.from(this.imageParts).includes(null)?this.renderNextFrame():this.finishRendering()}finishRendering(){let c,g=0;for(c of Array.from(this.imageParts))g+=(c.data.length-1)*c.pageSize+c.cursor;g+=c.pageSize-c.cursor,this.log(`rendering finished - filesize ${Math.round(g/1e3)}kb`);const m=new Uint8Array(g);let w=0;for(c of Array.from(this.imageParts))for(let _=0;_<c.data.length;_++){const A=c.data[_];m.set(A,w),_===c.data.length-1?w+=c.cursor:w+=c.pageSize}const x=new Blob([m],{type:"image/gif"});return this.emit("finished",x,m)}renderNextFrame(){if(this.freeWorkers.length===0)throw new Error("No free workers");if(this.nextFrame>=this.frames.length)return;const c=this.frames[this.nextFrame++],g=this.freeWorkers.shift(),m=this.getTask(c);return this.log(`starting frame ${m.index+1} of ${this.frames.length}`),this.activeWorkers.push(g),g.postMessage(m)}getContextData(c){return c.getImageData(0,0,this.options.width,this.options.height).data}getImageData(c){this._canvas==null&&(this._canvas=document.createElement("canvas"),this._canvas.width=this.options.width,this._canvas.height=this.options.height);const g=this._canvas.getContext("2d");return g.fillStyle=this.options.background,g.fillRect(0,0,this.options.width,this.options.height),g.drawImage(c,0,0),this.getContextData(g)}getTask(c){const g=this.frames.indexOf(c),m={index:g,last:g===this.frames.length-1,delay:c.delay,dispose:c.dispose,transparent:c.transparent,width:this.options.width,height:this.options.height,quality:this.options.quality,dither:this.options.dither,globalPalette:this.options.globalPalette,repeat:this.options.repeat,canTransfer:f.name==="chrome"};if(c.data!=null)m.data=c.data;else if(c.context!=null)m.data=this.getContextData(c.context);else{if(c.image==null)throw new Error("Invalid frame");m.data=this.getImageData(c.image)}return m}log(...c){if(this.options.debug)return console.log(...Array.from(c||[]))}}).initClass(),b}();const d=b})(),s})()})})(De);const un=dn(De.exports),fn="_App_1hb0b_1",hn="_VideoWrapper_1hb0b_4",pn="_CollapseMenuWrapper_1hb0b_16",gn="_ShootingBtn_1hb0b_26",W={App:fn,VideoWrapper:hn,CollapseMenuWrapper:pn,ShootingBtn:gn},mn=z(`<div class="columns"><div class="column"><div class="select"><select></select></div></div><div class="column"><div class="field is-horizontal"><div class="field-label is-normal"><label class="label">\u64AE\u5F71\u9593\u9694(\u79D2)</label></div><div class="field-body"><div class="field"><p class="control"><input class="input is-danger" type="number"></p></div></div></div></div><div class="column"><button>Let's shooting!</button></div></div>`),bn=z("<div><button>Stop!!!</button></div>"),ke=z("<div></div>"),vn=z('<div class="columns"><div class="column"><div class="select"><div class="field is-horizontal"><div class="field-label is-normal"><label class="label">\u9593\u9694(\u30DF\u30EA\u79D2)</label></div><div class="field-body"><div class="field"><p class="control"><input class="input is-danger" type="number"></p></div></div></div></div></div><div class="column"><button>Get gif</button></div></div>'),yn=z("<div><div><video playsinline muted autoplay></video><div></div></div><canvas></canvas></div>"),wn=z("<option></option>"),Ce=z('<img width="100">'),xn=()=>{let e,n;const[t,i]=cn({status:"preparing",stream:null,images:[],imgDataList:[],intervalId:void 0,devices:[],interval:1,delay:100});Re(async()=>{const d=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});i("stream",()=>d);const u=await navigator.mediaDevices.enumerateDevices();i("devices",()=>u.filter(C=>C.kind==="videoinput"))}),Se(()=>{e&&(e.srcObject=t.stream)});const r=async()=>{i("status",()=>"standby");const d=()=>{if(e&&n&&t.stream){const{width:u,height:C}=t.stream.getVideoTracks()[0].getSettings();if(!u||!C)return;n.width=u,n.height=C;const c=n.getContext("2d");if(!c)return;c.drawImage(e,0,0,n.width,n.height);const g=n.toDataURL("image/png"),m=c.getImageData(0,0,n.width,n.height);i("images",w=>[...w,g]),i("imgDataList",w=>[...w,m])}};setTimeout(()=>{d();const u=setInterval(()=>{d()},t.interval*1e3);i("intervalId",()=>u),i("status",()=>"shooting")},3e3)},s=()=>{clearInterval(t.intervalId),i("status",()=>"setupgif")},a=()=>{const d=new un({quality:10});t.imgDataList.forEach(u=>{d.addFrame(u,{delay:t.delay})}),d.render(),d.on("finished",u=>{window.open(URL.createObjectURL(u))})},o=d=>{i("interval",()=>Number(d.target.value))},f=d=>{i("delay",()=>Number(d.target.value))},b=async d=>{const u=d.target.value,C=await navigator.mediaDevices.getUserMedia({video:{deviceId:u}});i("stream",()=>C)};return(()=>{const d=yn.cloneNode(!0),u=d.firstChild,C=u.firstChild,c=C.nextSibling,g=u.nextSibling,m=e;typeof m=="function"?m(C):e=C,U(c,G(Xe,{get children(){return[G(de,{get when(){return t.status==="preparing"},get children(){const x=mn.cloneNode(!0),_=x.firstChild,A=_.firstChild,E=A.firstChild,O=_.nextSibling,l=O.firstChild,h=l.firstChild,p=h.nextSibling,v=p.firstChild,k=v.firstChild,y=k.firstChild,F=O.nextSibling,S=F.firstChild;return E.addEventListener("change",b),U(E,G(ce,{get each(){return t.devices},children:I=>(()=>{const Z=wn.cloneNode(!0);return U(Z,()=>I.label),$(()=>Z.value=I.deviceId),Z})()})),y.$$input=o,S.$$click=r,$(()=>q(S,W.ShootingBtn)),$(()=>y.value=t.interval),x}}),G(de,{get when(){return t.status==="shooting"},get children(){return[(()=>{const x=bn.cloneNode(!0),_=x.firstChild;return _.$$click=s,$(()=>q(_,W.ShootingBtn)),x})(),(()=>{const x=ke.cloneNode(!0);return U(x,G(ce,{get each(){return t.images},children:(_,A)=>(()=>{const E=Ce.cloneNode(!0);return xe(E,"src",_),E})()})),x})()]}}),G(de,{get when(){return t.status==="setupgif"},get children(){return[(()=>{const x=vn.cloneNode(!0),_=x.firstChild,A=_.firstChild,E=A.firstChild,O=E.firstChild,l=O.nextSibling,h=l.firstChild,p=h.firstChild,v=p.firstChild,k=_.nextSibling,y=k.firstChild;return v.$$input=f,y.$$click=a,$(()=>q(y,W.ShootingBtn)),$(()=>v.value=t.delay),x})(),(()=>{const x=ke.cloneNode(!0);return U(x,G(ce,{get each(){return t.images},children:(_,A)=>(()=>{const E=Ce.cloneNode(!0);return xe(E,"src",_),E})()})),x})()]}})]}}));const w=n;return typeof w=="function"?w(g):n=g,g.style.setProperty("display","none"),$(x=>{const _=W.App,A=W.VideoWrapper,E=W.CollapseMenuWrapper;return _!==x._v$&&q(d,x._v$=_),A!==x._v$2&&q(u,x._v$2=A),E!==x._v$3&&q(c,x._v$3=E),x},{_v$:void 0,_v$2:void 0,_v$3:void 0}),d})()};nn(["input","click"]);en(()=>G(xn,{}),document.getElementById("root"));
