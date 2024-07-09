import{h as e}from"./p-00525453.js";import{A as s}from"./p-022fb63e.js";import{B as a}from"./p-c58ca89b.js";import{g as t}from"./p-55d2bcf3.js";import{F as l}from"./p-eaad1b26.js";import{F as r}from"./p-892039c7.js";const n=({i18n:t,onClick:l})=>{const r=t.t("all-categories");return e(a,{style:"text-neutral",part:"all-categories-button",onClick:()=>{l()}},e("atomic-icon",{"aria-hidden":"true",icon:s,part:"back-arrow"}),e("span",{class:"truncate"},r))};const c=({displayValue:s,numberOfResults:a,i18n:t,onClick:n,isParent:c,isSelected:o,searchQuery:u,isLeafValue:i,setRef:p},f)=>{const m=[];if(c){m.push("active-parent")}else{m.push(`value-link${o?" value-link-selected":""}`)}if(i){m.push("leaf-value")}else{m.push("node-value")}return e(r,{displayValue:s,numberOfResults:a,isSelected:o,i18n:t,onClick:()=>{n()},searchQuery:u,part:m.join(" "),class:"contents",buttonRef:e=>p(e),subList:f},e(l,{displayValue:s,isSelected:o}))};const o=(s,a)=>e(c,{...s,isParent:false},a);const u=({className:s},a)=>e("ul",{part:"values",class:s!==null&&s!==void 0?s:""},a);const i=({isTopLevel:s,className:a},t)=>e("ul",{class:a!==null&&a!==void 0?a:"",part:`${s?"":"sub-"}parents`},t);const p=({field:l,facetValue:r,i18n:n,onClick:c})=>{const o=t(l,r.value,n);const u=n.t("facet-value",{value:o,count:r.numberOfResults});return e(a,{style:"text-neutral",part:"parent-button",ariaPressed:"false",onClick:()=>{c()},ariaLabel:u},e("atomic-icon",{icon:s,part:"back-arrow",class:"back-arrow"}),e("span",{class:"truncate"},o))};const f=(s,a)=>e(c,{...s,isParent:true,isSelected:true},a);const m=(s,a)=>e("ul",{part:"search-results",class:"mt-3"},a);const d="/";const b="...";const v=3;const x=({value:s,field:r,i18n:n,onClick:c,searchQuery:o})=>{const u=s.count.toLocaleString(n.language);const i=n.t("in");const p=n.t("all-categories");const f=s.path.length?s.path.map((e=>t(r,e,n))):[p];const m=n.t("under",{child:n.t("facet-value",{numberOfResults:s.count,value:s.displayValue}),parent:f.join(", ")});function x(e){if(e.length<=v){return e}const s=e.slice(0,1);const a=e.slice(-v+1);return s.concat(b,...a)}function k(s){if(!s.length){return e("span",{class:"truncate"},`${i} ${p}`)}return[e("span",{class:"mr-0.5"},i),x(s).map(((s,a)=>[a>0&&e("span",{class:"mx-0.5"},d),e("span",{class:s===b?"":"truncate flex-1 max-w-max"},s)]))]}return e("li",{key:s.displayValue},e(a,{style:"text-neutral",part:"search-result",onClick:()=>c(),class:"w-full flex flex-col px-2 py-2.5 truncate group no-outline","aria-label":m},e("div",{class:"w-full flex"},e(l,{displayValue:s.displayValue,isSelected:false,searchQuery:o}),e("span",{part:"value-count",class:"value-count"},n.t("between-parentheses",{text:u}))),e("div",{part:"search-result-path",class:"flex w-full text-neutral-dark mt-1 group-focus:text-primary group-hover:text-primary"},k(f))))};const k=(s,a)=>e("li",{class:"contents"},a);export{i as C,n as a,k as b,p as c,u as d,f as e,o as f,x as g,m as h};
//# sourceMappingURL=p-a3eaa11f.js.map