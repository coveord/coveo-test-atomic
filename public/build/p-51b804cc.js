import{S as e}from"./p-e8da8696.js";import{h as t}from"./p-00525453.js";import{e as r}from"./p-8f5830b4.js";const a=(e,t)=>({part:"recent-query-item",query:e,key:`recent-${r(e)}`,ariaLabel:t.t("recent-query-suggestion-label",{query:e,interpolation:{escapeValue:false}})});const n=e=>({key:"recent-query-clear",ariaLabel:e.t("clear-recent-searches",{interpolation:{escapeValue:false}}),part:"recent-query-title-item suggestion-divider",hideIfLast:true});const s=(e,r)=>t("div",{part:"recent-query-content",class:"flex items-center break-all text-left"},r);const c=({icon:e})=>t("atomic-icon",{part:"recent-query-icon",icon:e,class:"w-4 h-4 mr-2 shrink-0"});const l=({query:r,value:a})=>{if(r===""){return t("span",{part:"recent-query-text",class:"break-all line-clamp-2"},a)}return t("span",{part:"recent-query-text",class:"break-all line-clamp-2",innerHTML:e.highlightString({content:a,openingDelimiter:'<span part="recent-query-text-highlight" class="font-bold">',closingDelimiter:"</span>",highlights:[{offset:r.length,length:a.length-r.length}]})})};const i=({i18n:e})=>t("div",{part:"recent-query-title-content",class:"flex justify-between w-full"},t("span",{class:"font-bold",part:"recent-query-title"},e.t("recent-searches")),t("span",{part:"recent-query-clear"},e.t("clear")));export{i as R,a,l as b,c,s as d,n as g};
//# sourceMappingURL=p-51b804cc.js.map