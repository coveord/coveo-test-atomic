const e="atomic";const t={allRenderFn:false,appendChildSlotFix:false,asyncLoading:true,asyncQueue:false,attachStyles:true,cloneNodeFix:false,cmpDidLoad:true,cmpDidRender:true,cmpDidUnload:false,cmpDidUpdate:true,cmpShouldUpdate:true,cmpWillLoad:true,cmpWillRender:true,cmpWillUpdate:true,connectedCallback:true,constructableCSS:true,cssAnnotations:true,devTools:false,disconnectedCallback:true,element:false,event:true,experimentalScopedSlotChanges:false,experimentalSlotFixes:false,formAssociated:false,hasRenderFn:true,hostListener:true,hostListenerTarget:true,hostListenerTargetBody:true,hostListenerTargetDocument:true,hostListenerTargetParent:false,hostListenerTargetWindow:false,hotModuleReplacement:false,hydrateClientSide:false,hydrateServerSide:false,hydratedAttribute:false,hydratedClass:true,initializeNextTick:false,invisiblePrehydration:true,isDebug:false,isDev:false,isTesting:false,lazyLoad:true,lifecycle:true,lifecycleDOMEvents:false,member:true,method:true,mode:false,observeAttribute:true,profile:false,prop:true,propBoolean:true,propMutable:true,propNumber:true,propString:true,reflect:true,scoped:false,scopedSlotTextContentFix:false,scriptDataOpts:false,shadowDelegatesFocus:false,shadowDom:true,slot:true,slotChildNodesFix:false,slotRelocation:true,state:true,style:true,svg:false,taskQueue:true,transformTagName:false,updatable:true,vdomAttribute:true,vdomClass:true,vdomFunctional:true,vdomKey:true,vdomListener:true,vdomPropOrAttr:true,vdomRef:true,vdomRender:true,vdomStyle:true,vdomText:true,vdomXlink:true,watchCallback:true};let n;let s;let l;let o=false;let i=false;let c=false;let f=false;let r=null;let u=false;const a=e=>{const t=new URL(e,Ie.t);return t.origin!==Qe.location.origin?t.href:t.pathname};const d=(e,t="")=>{{return()=>{}}};const p=(e,t)=>{{return()=>{}}};const v="{visibility:hidden}.hydrated{visibility:inherit}";const m="slot-fb{display:contents}slot-fb[hidden]{display:none}";const h="http://www.w3.org/1999/xlink";const y={};const b=e=>e!=null;const $=e=>{e=typeof e;return e==="object"||e==="function"};function w(e){var t,n,s;return(s=(n=(t=e.head)===null||t===void 0?void 0:t.querySelector('meta[name="csp-nonce"]'))===null||n===void 0?void 0:n.getAttribute("content"))!==null&&s!==void 0?s:undefined}const g=(e,t,...n)=>{let s=null;let l=null;let o=null;let i=false;let c=false;const f=[];const r=t=>{for(let n=0;n<t.length;n++){s=t[n];if(Array.isArray(s)){r(s)}else if(s!=null&&typeof s!=="boolean"){if(i=typeof e!=="function"&&!$(s)){s=String(s)}if(i&&c){f[f.length-1].l+=s}else{f.push(i?S(null,s):s)}c=i}}};r(n);if(t){if(t.key){l=t.key}if(t.name){o=t.name}{const e=t.className||t.class;if(e){t.class=typeof e!=="object"?e:Object.keys(e).filter((t=>e[t])).join(" ")}}}if(typeof e==="function"){return e(t===null?{}:t,f,x)}const u=S(e,null);u.o=t;if(f.length>0){u.i=f}{u.u=l}{u.p=o}return u};const S=(e,t)=>{const n={v:0,m:e,l:t,h:null,i:null};{n.o=null}{n.u=null}{n.p=null}return n};const k={};const C=e=>e&&e.m===k;const x={forEach:(e,t)=>e.map(R).forEach(t),map:(e,t)=>e.map(R).map(t).map(j)};const R=e=>({vattrs:e.o,vchildren:e.i,vkey:e.u,vname:e.p,vtag:e.m,vtext:e.l});const j=e=>{if(typeof e.vtag==="function"){const t=Object.assign({},e.vattrs);if(e.vkey){t.key=e.vkey}if(e.vname){t.name=e.vname}return g(e.vtag,t,...e.vchildren||[])}const t=S(e.vtag,e.vtext);t.o=e.vattrs;t.i=e.vchildren;t.u=e.vkey;t.p=e.vname;return t};const L=(e,t)=>{if(e!=null&&!$(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};const O=e=>Ae(e).$hostElement$;const T=(e,t,n)=>{const s=O(e);return{emit:e=>D(s,t,{bubbles:!!(n&4),composed:!!(n&2),cancelable:!!(n&1),detail:e})}};const D=(e,t,n)=>{const s=Ie.ce(t,n);e.dispatchEvent(s);return s};const F=new WeakMap;const M=(e,t,n)=>{let s=He.get(e);if(Xe&&n){s=s||new CSSStyleSheet;if(typeof s==="string"){s=t}else{s.replaceSync(t)}}else{s=t}He.set(e,s)};const U=(e,t,n)=>{var s;const l=N(t);const o=He.get(l);e=e.nodeType===11?e:qe;if(o){if(typeof o==="string"){e=e.head||e;let n=F.get(e);let i;if(!n){F.set(e,n=new Set)}if(!n.has(l)){{i=qe.createElement("style");i.innerHTML=o;const t=(s=Ie.$)!==null&&s!==void 0?s:w(qe);if(t!=null){i.setAttribute("nonce",t)}e.insertBefore(i,e.querySelector("link"))}if(t.v&4){i.innerHTML+=m}if(n){n.add(l)}}}else if(!e.adoptedStyleSheets.includes(o)){e.adoptedStyleSheets=[...e.adoptedStyleSheets,o]}}return l};const A=e=>{const t=e.S;const n=e.$hostElement$;const s=t.v;const l=d("attachStyles",t.k);const o=U(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);if(s&10){n["s-sc"]=o;n.classList.add(o+"-h")}l()};const N=(e,t)=>"sc-"+e.k;const P=(e,t,n,s,l,o)=>{if(n!==s){let i=We(e,t);let c=t.toLowerCase();if(t==="class"){const t=e.classList;const l=E(n);const o=E(s);t.remove(...l.filter((e=>e&&!o.includes(e))));t.add(...o.filter((e=>e&&!l.includes(e))))}else if(t==="style"){{for(const t in n){if(!s||s[t]==null){if(t.includes("-")){e.style.removeProperty(t)}else{e.style[t]=""}}}}for(const t in s){if(!n||s[t]!==n[t]){if(t.includes("-")){e.style.setProperty(t,s[t])}else{e.style[t]=s[t]}}}}else if(t==="key");else if(t==="ref"){if(s){s(e)}}else if(!i&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(We(Qe,c)){t=c.slice(2)}else{t=c[2]+t.slice(3)}if(n||s){const l=t.endsWith(z);t=t.replace(B,"");if(n){Ie.rel(e,t,n,l)}if(s){Ie.ael(e,t,s,l)}}}else{const f=$(s);if((i||f&&s!==null)&&!l){try{if(!e.tagName.includes("-")){const l=s==null?"":s;if(t==="list"){i=false}else if(n==null||e[t]!=l){e[t]=l}}else{e[t]=s}}catch(e){}}let r=false;{if(c!==(c=c.replace(/^xlink\:?/,""))){t=c;r=true}}if(s==null||s===false){if(s!==false||e.getAttribute(t)===""){if(r){e.removeAttributeNS(h,t)}else{e.removeAttribute(t)}}}else if((!i||o&4||l)&&!f){s=s===true?"":s;if(r){e.setAttributeNS(h,t,s)}else{e.setAttribute(t,s)}}}}};const W=/\s/;const E=e=>!e?[]:e.split(W);const z="Capture";const B=new RegExp(z+"$");const H=(e,t,n,s)=>{const l=t.h.nodeType===11&&t.h.host?t.h.host:t.h;const o=e&&e.o||y;const i=t.o||y;{for(s of Q(Object.keys(o))){if(!(s in i)){P(l,s,o[s],undefined,n,t.v)}}}for(s of Q(Object.keys(i))){P(l,s,o[s],i[s],n,t.v)}};function Q(e){return e.includes("ref")?[...e.filter((e=>e!=="ref")),"ref"]:e}const q=(e,t,i,r)=>{var u;const a=t.i[i];let d=0;let p;let v;let m;if(!o){c=true;if(a.m==="slot"){if(n){r.classList.add(n+"-s")}a.v|=a.i?2:1}}if(a.l!==null){p=a.h=qe.createTextNode(a.l)}else if(a.v&1){p=a.h=qe.createTextNode("")}else{p=a.h=qe.createElement(a.v&2?"slot-fb":a.m);{H(null,a,f)}if(b(n)&&p["s-si"]!==n){p.classList.add(p["s-si"]=n)}if(a.i){for(d=0;d<a.i.length;++d){v=q(e,a,d,p);if(v){p.appendChild(v)}}}}p["s-hn"]=l;{if(a.v&(2|1)){p["s-sr"]=true;p["s-cr"]=s;p["s-sn"]=a.p||"";p["s-rf"]=(u=a.o)===null||u===void 0?void 0:u.ref;m=e&&e.i&&e.i[i];if(m&&m.m===a.m&&e.h){{I(e.h,false)}}}}return p};const I=(e,n)=>{Ie.v|=1;const s=Array.from(e.childNodes);if(e["s-sr"]&&t.experimentalSlotFixes){let t=e;while(t=t.nextSibling){if(t&&t["s-sn"]===e["s-sn"]&&t["s-sh"]===l){s.push(t)}}}for(let e=s.length-1;e>=0;e--){const t=s[e];if(t["s-hn"]!==l&&t["s-ol"]){J(t).insertBefore(t,G(t));t["s-ol"].remove();t["s-ol"]=undefined;t["s-sh"]=undefined;c=true}if(n){I(t,n)}}Ie.v&=~1};const K=(e,t,n,s,o,i)=>{let c=e["s-cr"]&&e["s-cr"].parentNode||e;let f;if(c.shadowRoot&&c.tagName===l){c=c.shadowRoot}for(;o<=i;++o){if(s[o]){f=q(null,n,o,e);if(f){s[o].h=f;c.insertBefore(f,G(t))}}}};const V=(e,t,n)=>{for(let s=t;s<=n;++s){const t=e[s];if(t){const e=t.h;se(t);if(e){{i=true;if(e["s-ol"]){e["s-ol"].remove()}else{I(e,true)}}e.remove()}}}};const X=(e,t,n,s,l=false)=>{let o=0;let i=0;let c=0;let f=0;let r=t.length-1;let u=t[0];let a=t[r];let d=s.length-1;let p=s[0];let v=s[d];let m;let h;while(o<=r&&i<=d){if(u==null){u=t[++o]}else if(a==null){a=t[--r]}else if(p==null){p=s[++i]}else if(v==null){v=s[--d]}else if(_(u,p,l)){Y(u,p,l);u=t[++o];p=s[++i]}else if(_(a,v,l)){Y(a,v,l);a=t[--r];v=s[--d]}else if(_(u,v,l)){if(u.m==="slot"||v.m==="slot"){I(u.h.parentNode,false)}Y(u,v,l);e.insertBefore(u.h,a.h.nextSibling);u=t[++o];v=s[--d]}else if(_(a,p,l)){if(u.m==="slot"||v.m==="slot"){I(a.h.parentNode,false)}Y(a,p,l);e.insertBefore(a.h,u.h);a=t[--r];p=s[++i]}else{c=-1;{for(f=o;f<=r;++f){if(t[f]&&t[f].u!==null&&t[f].u===p.u){c=f;break}}}if(c>=0){h=t[c];if(h.m!==p.m){m=q(t&&t[i],n,c,e)}else{Y(h,p,l);t[c]=undefined;m=h.h}p=s[++i]}else{m=q(t&&t[i],n,i,e);p=s[++i]}if(m){{J(u.h).insertBefore(m,G(u.h))}}}}if(o>r){K(e,s[d+1]==null?null:s[d+1].h,n,s,i,d)}else if(i>d){V(t,o,r)}};const _=(e,t,n=false)=>{if(e.m===t.m){if(e.m==="slot"){return e.p===t.p}if(!n){return e.u===t.u}return true}return false};const G=e=>e&&e["s-ol"]||e;const J=e=>(e["s-ol"]?e["s-ol"]:e).parentNode;const Y=(e,t,n=false)=>{const s=t.h=e.h;const l=e.i;const i=t.i;const c=t.m;const r=t.l;let u;if(r===null){{if(c==="slot"&&!o);else{H(e,t,f)}}if(l!==null&&i!==null){X(s,l,t,i,n)}else if(i!==null){if(e.l!==null){s.textContent=""}K(s,null,t,i,0,i.length-1)}else if(l!==null){V(l,0,l.length-1)}}else if(u=s["s-cr"]){u.parentNode.textContent=r}else if(e.l!==r){s.data=r}};const Z=e=>{const t=e.childNodes;for(const e of t){if(e.nodeType===1){if(e["s-sr"]){const n=e["s-sn"];e.hidden=false;for(const s of t){if(s!==e){if(s["s-hn"]!==e["s-hn"]||n!==""){if(s.nodeType===1&&(n===s.getAttribute("slot")||n===s["s-sn"])){e.hidden=true;break}}else{if(s.nodeType===1||s.nodeType===3&&s.textContent.trim()!==""){e.hidden=true;break}}}}}Z(e)}}};const ee=[];const te=e=>{let n;let s;let l;for(const o of e.childNodes){if(o["s-sr"]&&(n=o["s-cr"])&&n.parentNode){s=n.parentNode.childNodes;const e=o["s-sn"];for(l=s.length-1;l>=0;l--){n=s[l];if(!n["s-cn"]&&!n["s-nr"]&&n["s-hn"]!==o["s-hn"]&&!t.experimentalSlotFixes){if(ne(n,e)){let t=ee.find((e=>e.C===n));i=true;n["s-sn"]=n["s-sn"]||e;if(t){t.C["s-sh"]=o["s-hn"];t.R=o}else{n["s-sh"]=o["s-hn"];ee.push({R:o,C:n})}if(n["s-sr"]){ee.map((e=>{if(ne(e.C,n["s-sn"])){t=ee.find((e=>e.C===n));if(t&&!e.R){e.R=t.R}}}))}}else if(!ee.some((e=>e.C===n))){ee.push({C:n})}}}}if(o.nodeType===1){te(o)}}};const ne=(e,t)=>{if(e.nodeType===1){if(e.getAttribute("slot")===null&&t===""){return true}if(e.getAttribute("slot")===t){return true}return false}if(e["s-sn"]===t){return true}return t===""};const se=e=>{{e.o&&e.o.ref&&e.o.ref(null);e.i&&e.i.map(se)}};const le=(e,t,f=false)=>{var r,u,a,d;const p=e.$hostElement$;const v=e.S;const m=e.j||S(null,null);const h=C(t)?t:g(null,null,t);l=p.tagName;if(v.L){h.o=h.o||{};v.L.map((([e,t])=>h.o[t]=p[e]))}if(f&&h.o){for(const e of Object.keys(h.o)){if(p.hasAttribute(e)&&!["key","ref","style","class"].includes(e)){h.o[e]=p[e]}}}h.m=null;h.v|=4;e.j=h;h.h=m.h=p.shadowRoot||p;{n=p["s-sc"]}o=(v.v&1)!==0;{s=p["s-cr"];i=false}Y(m,h,f);{Ie.v|=1;if(c){te(h.h);for(const e of ee){const t=e.C;if(!t["s-ol"]){const e=qe.createTextNode("");e["s-nr"]=t;t.parentNode.insertBefore(t["s-ol"]=e,t)}}for(const e of ee){const t=e.C;const n=e.R;if(n){const e=n.parentNode;let s=n.nextSibling;{let n=(r=t["s-ol"])===null||r===void 0?void 0:r.previousSibling;while(n){let l=(u=n["s-nr"])!==null&&u!==void 0?u:null;if(l&&l["s-sn"]===t["s-sn"]&&e===l.parentNode){l=l.nextSibling;while(l===t||(l===null||l===void 0?void 0:l["s-sr"])){l=l===null||l===void 0?void 0:l.nextSibling}if(!l||!l["s-nr"]){s=l;break}}n=n.previousSibling}}if(!s&&e!==t.parentNode||t.nextSibling!==s){if(t!==s){if(!t["s-hn"]&&t["s-ol"]){t["s-hn"]=t["s-ol"].parentNode.nodeName}e.insertBefore(t,s);if(t.nodeType===1){t.hidden=(a=t["s-ih"])!==null&&a!==void 0?a:false}}}t&&typeof n["s-rf"]==="function"&&n["s-rf"](t)}else{if(t.nodeType===1){if(f){t["s-ih"]=(d=t.hidden)!==null&&d!==void 0?d:false}t.hidden=true}}}}if(i){Z(h.h)}Ie.v&=~1;ee.length=0}s=undefined};const oe=(e,t)=>{if(t&&!e.O&&t["s-p"]){t["s-p"].push(new Promise((t=>e.O=t)))}};const ie=(e,t)=>{{e.v|=16}if(e.v&4){e.v|=512;return}oe(e,e.T);const n=()=>ce(e,t);return tt(n)};const ce=(e,t)=>{const n=d("scheduleUpdate",e.S.k);const s=e.D;let l;if(t){{e.v|=256;if(e.F){e.F.map((([e,t])=>he(s,e,t)));e.F=undefined}}{l=he(s,"componentWillLoad")}}else{{l=he(s,"componentWillUpdate")}}{l=fe(l,(()=>he(s,"componentWillRender")))}n();return fe(l,(()=>ue(e,s,t)))};const fe=(e,t)=>re(e)?e.then(t):t();const re=e=>e instanceof Promise||e&&e.then&&typeof e.then==="function";const ue=async(e,t,n)=>{var s;const l=e.$hostElement$;const o=d("update",e.S.k);const i=l["s-rc"];if(n){A(e)}const c=d("render",e.S.k);{ae(e,t,l,n)}if(i){i.map((e=>e()));l["s-rc"]=undefined}c();o();{const t=(s=l["s-p"])!==null&&s!==void 0?s:[];const n=()=>pe(e);if(t.length===0){n()}else{Promise.all(t).then(n);e.v|=4;t.length=0}}};const ae=(e,t,n,s)=>{try{r=t;t=t.render&&t.render();{e.v&=~16}{e.v|=2}{{{le(e,t,s)}}}}catch(t){Ee(t,e.$hostElement$)}r=null;return null};const de=()=>r;const pe=e=>{const t=e.S.k;const n=e.$hostElement$;const s=d("postUpdate",t);const l=e.D;const o=e.T;{he(l,"componentDidRender")}if(!(e.v&64)){e.v|=64;{ye(n)}{he(l,"componentDidLoad")}s();{e.M(n);if(!o){me()}}}else{{he(l,"componentDidUpdate")}s()}{e.U(n)}{if(e.O){e.O();e.O=undefined}if(e.v&512){et((()=>ie(e,false)))}e.v&=~(4|512)}};const ve=e=>{{const t=Ae(e);const n=t.$hostElement$.isConnected;if(n&&(t.v&(2|16))===2){ie(t,false)}return n}};const me=t=>{{ye(qe.documentElement)}et((()=>D(Qe,"appload",{detail:{namespace:e}})))};const he=(e,t,n)=>{if(e&&e[t]){try{return e[t](n)}catch(e){Ee(e)}}return undefined};const ye=e=>e.classList.add("hydrated");const be=(e,t)=>Ae(e).A.get(t);const $e=(e,t,n,s)=>{const l=Ae(e);const o=l.$hostElement$;const i=l.A.get(t);const c=l.v;const f=l.D;n=L(n,s.N[t][0]);const r=Number.isNaN(i)&&Number.isNaN(n);const u=n!==i&&!r;if((!(c&8)||i===undefined)&&u){l.A.set(t,n);if(f){if(s.P&&c&128){const e=s.P[t];if(e){e.map((e=>{try{f[e](n,i,t)}catch(e){Ee(e,o)}}))}}if((c&(2|16))===2){if(f.componentShouldUpdate){if(f.componentShouldUpdate(n,i,t)===false){return}}ie(l,false)}}}};const we=(e,t,n)=>{var s;const l=e.prototype;if(t.N){if(e.watchers){t.P=e.watchers}const o=Object.entries(t.N);o.map((([e,[s]])=>{if(s&31||n&2&&s&32){Object.defineProperty(l,e,{get(){return be(this,e)},set(n){$e(this,e,n,t)},configurable:true,enumerable:true})}else if(n&1&&s&64){Object.defineProperty(l,e,{value(...t){var n;const s=Ae(this);return(n=s===null||s===void 0?void 0:s.W)===null||n===void 0?void 0:n.then((()=>{var n;return(n=s.D)===null||n===void 0?void 0:n[e](...t)}))}})}}));if(n&1){const n=new Map;l.attributeChangedCallback=function(e,s,o){Ie.jmp((()=>{var i;const c=n.get(e);if(this.hasOwnProperty(c)){o=this[c];delete this[c]}else if(l.hasOwnProperty(c)&&typeof this[c]==="number"&&this[c]==o){return}else if(c==null){const n=Ae(this);const l=n===null||n===void 0?void 0:n.v;if(l&&!(l&8)&&l&128&&o!==s){const l=n.D;const c=(i=t.P)===null||i===void 0?void 0:i[e];c===null||c===void 0?void 0:c.forEach((t=>{if(l[t]!=null){l[t].call(l,o,s,e)}}))}return}this[c]=o===null&&typeof this[c]==="boolean"?false:o}))};e.observedAttributes=Array.from(new Set([...Object.keys((s=t.P)!==null&&s!==void 0?s:{}),...o.filter((([e,t])=>t[0]&15)).map((([e,s])=>{var l;const o=s[1]||e;n.set(o,e);if(s[0]&512){(l=t.L)===null||l===void 0?void 0:l.push([e,o])}return o}))]))}}return e};const ge=async(e,t,n,s)=>{let l;if((t.v&32)===0){t.v|=32;const s=n.B;if(s){l=Be(n);if(l.then){const e=p();l=await l;e()}if(!l.isProxied){{n.P=l.watchers}we(l,n,2);l.isProxied=true}const e=d("createInstance",n.k);{t.v|=8}try{new l(t)}catch(e){Ee(e)}{t.v&=~8}{t.v|=128}e();Se(t.D)}else{l=e.constructor;customElements.whenDefined(n.k).then((()=>t.v|=128))}if(l.style){let e=l.style;const t=N(n);if(!He.has(t)){const s=d("registerStyles",n.k);M(t,e,!!(n.v&1));s()}}}const o=t.T;const i=()=>ie(t,true);if(o&&o["s-rc"]){o["s-rc"].push(i)}else{i()}};const Se=e=>{{he(e,"connectedCallback")}};const ke=e=>{if((Ie.v&1)===0){const t=Ae(e);const n=t.S;const s=d("connectedCallback",n.k);if(!(t.v&1)){t.v|=1;{if(n.v&(4|8)){Ce(e)}}{let n=e;while(n=n.parentNode||n.host){if(n["s-p"]){oe(t,t.T=n);break}}}if(n.N){Object.entries(n.N).map((([t,[n]])=>{if(n&31&&e.hasOwnProperty(t)){const n=e[t];delete e[t];e[t]=n}}))}{ge(e,t,n)}}else{Oe(e,t,n.H);if(t===null||t===void 0?void 0:t.D){Se(t.D)}else if(t===null||t===void 0?void 0:t.q){t.q.then((()=>Se(t.D)))}}s()}};const Ce=e=>{const t=e["s-cr"]=qe.createComment("");t["s-cn"]=true;e.insertBefore(t,e.firstChild)};const xe=e=>{{he(e,"disconnectedCallback")}};const Re=async e=>{if((Ie.v&1)===0){const t=Ae(e);{if(t.I){t.I.map((e=>e()));t.I=undefined}}if(t===null||t===void 0?void 0:t.D){xe(t.D)}else if(t===null||t===void 0?void 0:t.q){t.q.then((()=>xe(t.D)))}}};const je=(e,t={})=>{var n;const s=d();const l=[];const o=t.exclude||[];const i=Qe.customElements;const c=qe.head;const f=c.querySelector("meta[charset]");const r=qe.createElement("style");const u=[];let a;let p=true;Object.assign(Ie,t);Ie.t=new URL(t.resourcesUrl||"./",qe.baseURI).href;let h=false;e.map((e=>{e[1].map((t=>{var n;const s={v:t[0],k:t[1],N:t[2],H:t[3]};if(s.v&4){h=true}{s.N=t[2]}{s.H=t[3]}{s.L=[]}{s.P=(n=t[4])!==null&&n!==void 0?n:{}}const c=s.k;const f=class extends HTMLElement{constructor(e){super(e);e=this;Pe(e,s);if(s.v&1){{{e.attachShadow({mode:"open"})}}}}connectedCallback(){if(a){clearTimeout(a);a=null}if(p){u.push(this)}else{Ie.jmp((()=>ke(this)))}}disconnectedCallback(){Ie.jmp((()=>Re(this)))}componentOnReady(){return Ae(this).q}};s.B=e[0];if(!o.includes(c)&&!i.get(c)){l.push(c);i.define(c,we(f,s,1))}}))}));if(l.length>0){if(h){r.textContent+=m}{r.textContent+=l+v}if(r.innerHTML.length){r.setAttribute("data-styles","");const e=(n=Ie.$)!==null&&n!==void 0?n:w(qe);if(e!=null){r.setAttribute("nonce",e)}c.insertBefore(r,f?f.nextSibling:c.firstChild)}}p=false;if(u.length){u.map((e=>e.connectedCallback()))}else{{Ie.jmp((()=>a=setTimeout(me,30)))}}s()};const Le=(e,t)=>t;const Oe=(e,t,n,s)=>{if(n){n.map((([n,s,l])=>{const o=De(e,n);const i=Te(t,l);const c=Fe(n);Ie.ael(o,s,i,c);(t.I=t.I||[]).push((()=>Ie.rel(o,s,i,c)))}))}};const Te=(e,t)=>n=>{try{{if(e.v&256){e.D[t](n)}else{(e.F=e.F||[]).push([t,n])}}}catch(e){Ee(e)}};const De=(e,t)=>{if(t&4)return qe;if(t&16)return qe.body;return e};const Fe=e=>Ke?{passive:(e&1)!==0,capture:(e&2)!==0}:(e&2)!==0;const Me=e=>Ie.$=e;const Ue=new WeakMap;const Ae=e=>Ue.get(e);const Ne=(e,t)=>Ue.set(t.D=e,t);const Pe=(e,t)=>{const n={v:0,$hostElement$:e,S:t,A:new Map};{n.W=new Promise((e=>n.U=e))}{n.q=new Promise((e=>n.M=e));e["s-p"]=[];e["s-rc"]=[]}Oe(e,n,t.H);return Ue.set(e,n)};const We=(e,t)=>t in e;const Ee=(e,t)=>(0,console.error)(e,t);const ze=new Map;const Be=(e,t,n)=>{const s=e.k.replace(/-/g,"_");const l=e.B;const o=ze.get(l);if(o){return o[s]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import(`./${l}.entry.js${""}`).then((e=>{{ze.set(l,e)}return e[s]}),Ee)};const He=new Map;const Qe=typeof window!=="undefined"?window:{};const qe=Qe.document||{head:{}};const Ie={v:0,t:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,s)=>e.addEventListener(t,n,s),rel:(e,t,n,s)=>e.removeEventListener(t,n,s),ce:(e,t)=>new CustomEvent(e,t)};const Ke=(()=>{let e=false;try{qe.addEventListener("e",null,Object.defineProperty({},"passive",{get(){e=true}}))}catch(e){}return e})();const Ve=e=>Promise.resolve(e);const Xe=(()=>{try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(e){}return false})();const _e=[];const Ge=[];const Je=(e,t)=>n=>{e.push(n);if(!u){u=true;if(t&&Ie.v&4){et(Ze)}else{Ie.raf(Ze)}}};const Ye=e=>{for(let t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){Ee(e)}}e.length=0};const Ze=()=>{Ye(_e);{Ye(Ge);if(u=_e.length>0){Ie.raf(Ze)}}};const et=e=>Ve().then(e);const tt=Je(Ge,true);export{Le as F,k as H,a,je as b,de as c,T as d,ve as f,O as g,g as h,Ve as p,Ne as r,Me as s};
//# sourceMappingURL=p-00525453.js.map