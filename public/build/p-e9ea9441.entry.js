import{r as t,g as n}from"./p-00525453.js";import{I as i}from"./p-e5df4b71.js";import{r as s}from"./p-effc0f7e.js";import{f as e,s as o}from"./p-9c7dbbdf.js";import"./p-1580513b.js";import"./p-e9c4f463.js";const r="atomic-insight-tabs";const a="atomic-insight-refine-modal";const c="atomic-insight-search-box";const h=["atomic-insight-refine-toggle","atomic-insight-edit-toggle","atomic-insight-history-toggle"];const g=["atomic-insight-smart-snippet-suggestions","atomic-insight-smart-snippet"];const m="atomic-insight-generated-answer";function d(t,n){var i;const s=t.id;const d=`atomic-insight-layout#${s}`;const f=Boolean((i=e(t,"search"))===null||i===void 0?void 0:i.querySelector(r));const l=n?`\n  ${d} {\n    display: grid;\n    grid-template-rows: auto auto 8fr 1fr;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  ${d} ${a} {\n    grid-row-start: 5;\n  }`:"";const p=`${o("search")} {\n      width: 100%;\n      display: flex;\n      flex-wrap: wrap;\n      grid-gap: 0.5rem;\n      background: var(--atomic-neutral-light);\n      padding-top: 1.5rem;\n      padding-left: 1.5rem;\n      padding-right: 1.5rem;\n      box-sizing: border-box;\n      min-width: 0;\n      ${!f?"padding-bottom: 1.5rem;":""}\n    }\n\n    ${o("search")} ${c} {\n      flex-grow: 1;\n    }\n\n    ${h.map((t=>`${o("search")} ${t} {\n      flex-shrink: 0;\n    }`))}\n\n    ${o("search")} ${r} {\n      width: 100%;\n    }\n    `;const u=`${o("facets")} {\n      display: none;\n    }\n    `;const $=`\n    ${o("results")} {\n      overflow: auto;\n    }\n\n    ${o("results")} ${g.join(",")} {\n      padding: 1.5rem 1.5rem 0px;\n    }\n\n    ${o("results")} ${m} {\n      margin-left: 1.5rem;\n      margin-right: 1.5rem;\n    }\n    `;return[l,p,u,$].filter((t=>t!=="")).join("\n\n")}var f=undefined&&undefined.__decorate||function(t,n,i,s){var e=arguments.length,o=e<3?n:s===null?s=Object.getOwnPropertyDescriptor(n,i):s,r;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")o=Reflect.decorate(t,n,i,s);else for(var a=t.length-1;a>=0;a--)if(r=t[a])o=(e<3?r(o):e>3?r(n,i,o):r(n,i))||o;return e>3&&o&&Object.defineProperty(n,i,o),o};const l=class{constructor(n){t(this,n);this.widget=false;this.widget=false}updateStyles(){if(this.styleTag){this.styleTag.innerHTML=d(this.host,this.widget)}else{this.makeStyleTag()}}makeStyleTag(){this.styleTag=this.bindings.createStyleElement();this.styleTag.innerHTML=d(this.host,this.widget);this.host.appendChild(this.styleTag)}componentDidLoad(){const t=this.host.id||s("atomic-insight-layout-");this.host.id=t;this.makeStyleTag()}get host(){return n(this)}static get watchers(){return{widget:["updateStyles"]}}};f([i()],l.prototype,"bindings",void 0);export{l as atomic_insight_layout};
//# sourceMappingURL=p-e9ea9441.entry.js.map