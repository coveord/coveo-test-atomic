import{h as e}from"./p-00525453.js";import{F as s}from"./p-2fe779a9.js";import{F as t}from"./p-eaad1b26.js";import{F as a}from"./p-892039c7.js";import{g as l}from"./p-55d2bcf3.js";import{F as c}from"./p-b58f0ba6.js";const o=({manualRanges:e,field:s,i18n:t,facetValue:a,logger:c,formatter:o})=>{var i;const u=(i=e.find((e=>n(e,a))))===null||i===void 0?void 0:i.label;return u?l(s,u,t):t.t("to",{start:r(a.start,t,c,o),end:r(a.end,t,c,o)})};const r=(e,s,t,a)=>{try{return a(e,s.languages)}catch(s){t.error(`atomic-numeric-facet facet value "${e}" could not be formatted correctly.`,s);return e}};const n=(e,s)=>e.start===s.start&&e.end===s.end&&e.endInclusive===s.endInclusive;const i=l=>{const{facetValue:c,displayValuesAs:r,i18n:n,onClick:i}=l;const u=o(l);const m=c.state==="selected";switch(r){case"checkbox":return e(s,{displayValue:u,numberOfResults:c.numberOfResults,isSelected:m,i18n:n,onClick:()=>i()},e(t,{displayValue:u,isSelected:m}));case"link":return e(a,{displayValue:u,numberOfResults:c.numberOfResults,isSelected:m,i18n:n,onClick:i},e(t,{displayValue:u,isSelected:m}))}};const u=({i18n:s,label:t},a)=>e(c,{i18n:s,label:t},e("ul",{class:"mt-3",part:"values"},a));export{i as N,u as a,o as f};
//# sourceMappingURL=p-7f4ccd44.js.map