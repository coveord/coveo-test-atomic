import{r as t,h as e,g as s}from"./p-00525453.js";import{S as a,N as i}from"./p-7e7b1a62.js";import{L as n}from"./p-e8da8696.js";import{I as o,B as r}from"./p-e5df4b71.js";import{g as c,s as f,a as d,c as h}from"./p-d1aad506.js";import"./p-1580513b.js";import"./p-effc0f7e.js";import"./p-e9c4f463.js";var l=undefined&&undefined.__decorate||function(t,e,s,a){var i=arguments.length,n=i<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,s):a,o;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")n=Reflect.decorate(t,e,s,a);else for(var r=t.length-1;r>=0;r--)if(o=t[r])n=(i<3?o(n):i>3?o(e,s,n):o(e,s))||n;return i>3&&n&&Object.defineProperty(e,s,n),n};const p=class{constructor(e){t(this,e);this.collapseFacetsAfter=4;this.sortFacets=()=>{const t=c(this.host);const e=this.sortFacetsUsingManager(t,this.facetManager);const{visibleFacets:s,invisibleFacets:a}=f(e,this.bindings.store.getAllFacets());const i=d(this.host);h(s,this.collapseFacetsAfter);i===null||i===void 0?void 0:i.updateCollapseFacetsDependingOnFacetsVisibility(this.collapseFacetsAfter,s.length);this.host.append(...[...s,...a,...i?[i]:[]])};this.facetManagerState=undefined;this.error=undefined;this.collapseFacetsAfter=4}initialize(){this.validateProps();this.facetManager=n(this.bindings.engine);this.bindings.i18n.on("languageChanged",this.sortFacets)}validateProps(){new a({collapseFacetAfter:new i({min:-1,required:true})}).validate({collapseFacetAfter:this.collapseFacetsAfter})}sortFacetsUsingManager(t,e){const s=t.map((t=>({facetId:t.facetId,payload:t})));return e.sort(s).map((t=>t.payload))}disconnectedCallback(){this.bindings.i18n.off("languageChanged",this.sortFacets)}render(){return e("slot",{key:"a76a090b7820088b4d92e28516c8e61f18c7ac61"})}get host(){return s(this)}};l([o()],p.prototype,"bindings",void 0);l([r("facetManager",{onUpdateCallbackMethod:"sortFacets"})],p.prototype,"facetManagerState",void 0);export{p as atomic_facet_manager};
//# sourceMappingURL=p-ddddeb30.entry.js.map