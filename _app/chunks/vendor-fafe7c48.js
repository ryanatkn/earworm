function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}function a(t){let n;return s(t,(t=>n=t))(),n}function u(t,n,e,o){if(t){const r=l(t,n,e,o);return t[0](r)}}function l(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function f(t,n,e,o,r,c,i){const s=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,c);if(s){const r=l(n,e,o,i);t.p(r,s)}}let d,h=!1;function p(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function m(t,n){h?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const n=t.childNodes,e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let a=0;a<n.length;a++){const t=p(1,r+1,(t=>n[e[t]].claim_order),n[a].claim_order)-1;o[a]=e[t]+1;const c=t+1;e[c]=a,r=Math.max(c,r)}const c=[],i=[];let s=n.length-1;for(let a=e[r]+1;0!=a;a=o[a-1]){for(c.push(n[a-1]);s>=a;s--)i.push(n[s]);s--}for(;s>=0;s--)i.push(n[s]);c.reverse(),i.sort(((t,n)=>t.claim_order-n.claim_order));for(let a=0,u=0;a<i.length;a++){for(;u<c.length&&i[a].claim_order>=c[u].claim_order;)u++;const n=u<c.length?c[u]:null;t.insertBefore(i[a],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),n!==t.actual_end_child?t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling):n.parentNode!==t&&t.appendChild(n)}function _(t,n,e){h&&!e?m(t,n):(n.parentNode!==t||e&&n.nextSibling!==e)&&t.insertBefore(n,e||null)}function g(t){t.parentNode.removeChild(t)}function $(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function b(){return y(" ")}function x(){return y("")}function v(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function w(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function k(t){return Array.from(t.childNodes)}function E(t,n,e,o,r=!1){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0});const c=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const c=t[o];if(n(c))return e(c),t.splice(o,1),r||(t.claim_info.last_index=o),c}for(let o=t.claim_info.last_index-1;o>=0;o--){const c=t[o];if(n(c))return e(c),t.splice(o,1),r?t.claim_info.last_index--:t.claim_info.last_index=o,c}return o()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function A(t,n,e,o){return E(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):$(n)))}function N(t,n){return E(t,(t=>3===t.nodeType),(t=>{t.data=""+n}),(()=>y(n)),!0)}function S(t){return N(t," ")}function M(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function j(t,n){t.value=null==n?"":n}function O(t,n,e){t.classList[e?"add":"remove"](n)}function B(t,n=document.body){return Array.from(n.querySelectorAll(t))}function C(t){d=t}function L(){if(!d)throw new Error("Function called outside component initialization");return d}function T(t){L().$$.on_mount.push(t)}function q(t){L().$$.after_update.push(t)}function I(t,n){L().$$.context.set(t,n)}const z=[],F=[],P=[],D=[],G=Promise.resolve();let H=!1;function J(t){P.push(t)}function K(t){D.push(t)}let Q=!1;const R=new Set;function U(){if(!Q){Q=!0;do{for(let t=0;t<z.length;t+=1){const n=z[t];C(n),V(n.$$)}for(C(null),z.length=0;F.length;)F.pop()();for(let t=0;t<P.length;t+=1){const n=P[t];R.has(n)||(R.add(n),n())}P.length=0}while(z.length);for(;D.length;)D.pop()();H=!1,Q=!1,R.clear()}}function V(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(J)}}const W=new Set;let X;function Y(){X={r:0,c:[],p:X}}function Z(){X.r||r(X.c),X=X.p}function tt(t,n){t&&t.i&&(W.delete(t),t.i(n))}function nt(t,n,e,o){if(t&&t.o){if(W.has(t))return;W.add(t),X.c.push((()=>{W.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function et(t,n){nt(t,1,1,(()=>{n.delete(t.key)}))}function ot(t,n,e,o,r,c,i,s,a,u,l,f){let d=t.length,h=c.length,p=d;const m={};for(;p--;)m[t[p].key]=p;const _=[],g=new Map,$=new Map;for(p=h;p--;){const t=f(r,c,p),s=e(t);let a=i.get(s);a?o&&a.p(t,n):(a=u(s,t),a.c()),g.set(s,_[p]=a),s in m&&$.set(s,Math.abs(p-m[s]))}const y=new Set,b=new Set;function x(t){tt(t,1),t.m(s,l),i.set(t.key,t),l=t.first,h--}for(;d&&h;){const n=_[h-1],e=t[d-1],o=n.key,r=e.key;n===e?(l=n.first,d--,h--):g.has(r)?!i.has(o)||y.has(o)?x(n):b.has(r)?d--:$.get(o)>$.get(r)?(b.add(o),x(n)):(y.add(r),d--):(a(e,i),d--)}for(;d--;){const n=t[d];g.has(n.key)||a(n,i)}for(;h;)x(_[h-1]);return _}function rt(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const i=t[c],s=n[c];if(s){for(const t in i)t in s||(o[t]=1);for(const t in s)r[t]||(e[t]=s[t],r[t]=1);t[c]=s}else for(const t in i)r[t]=1}for(const i in o)i in e||(e[i]=void 0);return e}function ct(t){return"object"==typeof t&&null!==t?t:{}}function it(t,n,e){const o=t.$$.props[n];void 0!==o&&(t.$$.bound[o]=e,e(t.$$.ctx[o]))}function st(t){t&&t.c()}function at(t,n){t&&t.l(n)}function ut(t,n,o,i){const{fragment:s,on_mount:a,on_destroy:u,after_update:l}=t.$$;s&&s.m(n,o),i||J((()=>{const n=a.map(e).filter(c);u?u.push(...n):r(n),t.$$.on_mount=[]})),l.forEach(J)}function lt(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ft(t,n){-1===t.$$.dirty[0]&&(z.push(t),H||(H=!0,G.then(U)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function dt(n,e,c,i,s,a,u=[-1]){const l=d;C(n);const f=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:e.context||[]),callbacks:o(),dirty:u,skip_bound:!1};let p=!1;if(f.ctx=c?c(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return f.ctx&&s(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),p&&ft(n,t)),e})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!i&&i(f.ctx),e.target){if(e.hydrate){h=!0;const t=k(e.target);f.fragment&&f.fragment.l(t),t.forEach(g)}else f.fragment&&f.fragment.c();e.intro&&tt(n.$$.fragment),ut(n,e.target,e.anchor,e.customElement),h=!1,U()}C(l)}class ht{$destroy(){lt(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const pt=[];function mt(n,e=t){let o;const r=[];function c(t){if(i(n,t)&&(n=t,o)){const t=!pt.length;for(let e=0;e<r.length;e+=1){const t=r[e];t[1](),pt.push(t,n)}if(t){for(let t=0;t<pt.length;t+=2)pt[t][0](pt[t+1]);pt.length=0}}}return{set:c,update:function(t){c(t(n))},subscribe:function(i,s=t){const a=[i,s];return r.push(a),1===r.length&&(o=e(c)||t),i(n),()=>{const t=r.indexOf(a);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}export{T as A,n as B,mt as C,u as D,B as E,m as F,f as G,t as H,v as I,r as J,O as K,s as L,c as M,j as N,F as O,it as P,K as Q,ot as R,ht as S,a as T,et as U,k as a,w as b,A as c,g as d,$ as e,_ as f,N as g,M as h,dt as i,st as j,b as k,x as l,at as m,S as n,ut as o,rt as p,ct as q,Y as r,i as s,y as t,nt as u,lt as v,Z as w,tt as x,I as y,q as z};
