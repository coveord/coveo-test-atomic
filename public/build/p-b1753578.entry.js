import{r as t,h as i,g as e}from"./p-00525453.js";import{K as r}from"./p-e8da8696.js";import{I as s}from"./p-e5df4b71.js";import{f as a}from"./p-659d3ea8.js";import{R as o}from"./p-9caa9d4e.js";import"./p-1580513b.js";import"./p-effc0f7e.js";import"./p-e9c4f463.js";import"./p-05711f37.js";const n="atomic-result-image{display:grid;place-items:center;grid-template-rows:100%;width:100%;height:100%}atomic-result-image img{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}";const h=n;var f=undefined&&undefined.__decorate||function(t,i,e,r){var s=arguments.length,a=s<3?i:r===null?r=Object.getOwnPropertyDescriptor(i,e):r,o;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")a=Reflect.decorate(t,i,e,r);else for(var n=t.length-1;n>=0;n--)if(o=t[n])a=(s<3?o(a):s>3?o(i,e,a):o(i,e))||a;return s>3&&a&&Object.defineProperty(i,e,a),a};const l=class{constructor(i){t(this,i);this.useFallback=false;this.useFallback=false;this.field=undefined;this.imageAltField=undefined;this.fallback=undefined}get url(){const t=r.getResultProperty(this.result,this.field);return Array.isArray(t)?t[0]:t}get altText(){if(this.imageAltField){const t=r.getResultProperty(this.result,this.field);if(Array.isArray(t)&&typeof t[0]==="string"){return t[0]}if(typeof t==="string"){return t}}return this.bindings.i18n.t("image-alt-fallback",{itemName:this.result.title})}logWarning(t){this.bindings.engine.logger.warn(t,this.host)}handleImageError(){const t=`The image url "${this.url}" is not valid or could not be loaded. You might want to add a "fallback" property.`;this.fallback?this.useFallback=true:this.logWarning(t)}handleMissingFallback(t){if(!this.fallback){this.logWarning(t);this.host.remove();return null}return this.fallback}validateUrl(t){if(!t){const t=`"${this.field}" is missing. Please review your indexation. You might want to add a "fallback" property.`;return this.handleMissingFallback(t)}if(typeof t!=="string"){const t=`Expected "${this.field}" to be a text field. Please review your indexation. You might want to add a "fallback" property.`;return this.handleMissingFallback(t)}return t}render(){let t=this.useFallback?this.fallback:this.url;if(!this.useFallback){t=this.validateUrl(t);if(!t){return}}return i("img",{alt:this.altText,src:a(t),onError:()=>this.handleImageError(),loading:"lazy"})}get host(){return e(this)}};f([s()],l.prototype,"bindings",void 0);f([o()],l.prototype,"result",void 0);l.style=h;export{l as atomic_result_image};
//# sourceMappingURL=p-b1753578.entry.js.map