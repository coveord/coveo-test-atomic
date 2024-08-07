import{h as t}from"./p-00525453.js";import{C as e}from"./p-fafae456.js";import{S as a}from"./p-cfb3c589.js";import{B as r}from"./p-c58ca89b.js";import{e as s}from"./p-eaad1b26.js";const n=s=>{const n=s.i18n.t(s.label);const c=s.i18n.t("facet-search-input");const o=s.i18n.t("facet-search",{label:n});const l=s.i18n.t("clear");let i;return t("div",{class:"px-2 mt-3",part:"search-wrapper"},t("div",{class:"relative h-10"},t("input",{part:"search-input",class:"input-primary w-full h-full px-9 placeholder-neutral-dark text-sm group",type:"text",placeholder:c,"aria-label":o,value:s.query,onInput:t=>s.onChange(t.target.value),ref:t=>i=t}),t("div",{class:"search-icon pointer-events-none absolute inline-flex justify-center items-center left-0 w-9 h-full text-on-background"},t("atomic-icon",{part:"search-icon",icon:a})),s.query!==""&&t(r,{style:"text-transparent",title:l,class:"search-clear-button absolute inline-flex justify-center items-center right-px w-9 top-px bottom-px",onClick:()=>{s.onClear();i.focus()}},t("atomic-icon",{part:"search-clear-button",icon:e}))))};function c(t,e,a){return a.t(t,{query:`<span class="font-bold italic text-on-background" part="matches-query">${s(e)}</span>`,interpolation:{escapeValue:false}})}function o(t,e){return e.t("more-matches-for",{query:`<span class="font-bold italic" part="matches-query">${s(t)}</span>`,interpolation:{escapeValue:false}})}const l=e=>{if(!e.numberOfMatches){return t("div",{class:"px-2"},t("div",{part:"no-matches",class:"truncate p-3 bg-neutral-light text-neutral-dark text-sm rounded",innerHTML:c("no-matches-found-for",e.query,e.i18n)}))}if(e.hasMoreMatches){if(e.showMoreMatches){return t("div",{class:"px-2"},t(r,{style:"text-primary",class:"mt-3 p-2",onClick:e.showMoreMatches},t("div",{part:"more-matches",class:"truncate text-sm",innerHTML:o(e.query,e.i18n)})))}return t("div",{class:"px-2"},t("div",{part:"more-matches",class:"truncate mt-3 text-neutral-dark text-sm",innerHTML:c("more-matches-for",e.query,e.i18n)}))}};export{n as F,l as a};
//# sourceMappingURL=p-1c9e11d0.js.map