import{r as t,g as e}from"./p-00525453.js";import{M as s}from"./p-3774293b.js";import{P as i,a as o}from"./p-2fd5dfed.js";import"./p-7e7b1a62.js";import"./p-effc0f7e.js";import"./p-e9c4f463.js";import"./p-0e432c2f.js";import"./p-65c3e61f.js";import"./p-4328fcc3.js";var r=undefined&&undefined.__decorate||function(t,e,s,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,s):i,c;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)if(c=t[a])r=(o<3?c(r):o>3?c(e,s,r):c(e,s))||r;return o>3&&r&&Object.defineProperty(e,s,r),r};const c=class{constructor(e){t(this,e);this.conditions=[];this.mustMatch={};this.mustNotMatch={};this.error=undefined;this.conditions=[];this.productTemplateCommon=new i({host:this.host,setError:t=>{this.error=t},validParents:["atomic-commerce-product-list","atomic-commerce-recommendation-list","atomic-commerce-search-box-instant-products"],allowEmpty:true})}componentWillLoad(){this.productTemplateCommon.matchConditions=o(this.mustMatch,this.mustNotMatch)}async getTemplate(){return this.productTemplateCommon.getTemplate(this.conditions,this.error)}render(){return this.productTemplateCommon.renderIfError(this.error)}get host(){return e(this)}};r([s({splitValues:true})],c.prototype,"mustMatch",void 0);r([s({splitValues:true})],c.prototype,"mustNotMatch",void 0);export{c as atomic_product_template};
//# sourceMappingURL=p-78bf7ca6.entry.js.map