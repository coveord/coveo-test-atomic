import{h as a}from"./p-00525453.js";import{B as t}from"./p-c58ca89b.js";import{R as e}from"./p-14a6f1cd.js";const i=e=>a(t,{...e,ariaLabel:e.i18n.t("previous"),style:"outline-primary",part:"previous-button",class:"p-1 min-w-[2.5rem] min-h-[2.5rem] flex justify-center items-center"},a("atomic-icon",{icon:e.icon,part:"previous-button-icon",class:"w-5 align-middle"}));const n=e=>a(t,{...e,ariaLabel:e.i18n.t("next"),style:"outline-primary",part:"next-button",class:"p-1 min-w-[2.5rem] min-h-[2.5rem] flex justify-center items-center"},a("atomic-icon",{icon:e.icon,part:"next-button-icon",class:"w-5 align-middle"}));const s=t=>a(e,{...t,key:t.page,style:"outline-neutral",checked:t.isSelected,ariaCurrent:t.isSelected?"page":"false",class:"btn-page focus-visible:bg-neutral-light p-1 min-w-[2.5rem] min-h-[2.5rem]",part:`page-button${t.isSelected?" active-page-button":""}`});const r=(t,e)=>a("div",{part:"page-buttons",role:"radiogroup","aria-label":t.i18n.t("pagination"),class:"contents"},...e);const o=(t,e)=>a("nav",{"aria-label":t.i18n.t("pagination")},a("div",{part:"buttons",class:"flex flex-wrap gap-2"},...e));export{o as P,i as a,r as b,s as c,n as d};
//# sourceMappingURL=p-4fedae3a.js.map