import{r as t}from"./p-00525453.js";import{a as e}from"./p-7e7b1a62.js";import{K as i}from"./p-e8da8696.js";import{I as s}from"./p-e5df4b71.js";import{M as r}from"./p-3774293b.js";import{R as o}from"./p-9caa9d4e.js";import"./p-1580513b.js";import"./p-effc0f7e.js";import"./p-e9c4f463.js";import"./p-05711f37.js";var f=undefined&&undefined.__decorate||function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,f;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")o=Reflect.decorate(t,e,i,s);else for(var n=t.length-1;n>=0;n--)if(f=t[n])o=(r<3?f(o):r>3?f(e,i,o):f(e,i))||o;return r>3&&o&&Object.defineProperty(e,i,o),o};const n=class{constructor(e){t(this,e);this.field={};this.error=undefined;this.localeKey=undefined;this.fieldCount=undefined}render(){return this.bindings.i18n.t(this.localeKey,{...this.parseFieldValues(),...this.parseFieldCount()})}parseFieldValues(){const t={};if(Object.keys(this.field).length===0){return t}Object.entries(this.field).forEach((([s,r])=>{const o=i.getResultProperty(this.result,s);if(!e(o)){t[r]=o}}));return t}parseFieldCount(){var t;if(!this.fieldCount){return{}}return{count:(t=i.getResultProperty(this.result,this.fieldCount))!==null&&t!==void 0?t:1}}};f([s()],n.prototype,"bindings",void 0);f([o()],n.prototype,"result",void 0);f([r()],n.prototype,"field",void 0);export{n as atomic_result_localized_text};
//# sourceMappingURL=p-16afa771.entry.js.map