import{r as t,g as e}from"./p-00525453.js";import{M as s}from"./p-3774293b.js";import{R as i,m as r}from"./p-e60d2609.js";import"./p-7e7b1a62.js";import"./p-effc0f7e.js";import"./p-e9c4f463.js";import"./p-e8da8696.js";import"./p-4328fcc3.js";import"./p-65c3e61f.js";var o=undefined&&undefined.__decorate||function(t,e,s,i){var r=arguments.length,o=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,s):i,p;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")o=Reflect.decorate(t,e,s,i);else for(var c=t.length-1;c>=0;c--)if(p=t[c])o=(r<3?p(o):r>3?p(e,s,o):p(e,s))||o;return r>3&&o&&Object.defineProperty(e,s,o),o};const p=class{constructor(e){t(this,e);this.conditions=[];this.mustMatch={};this.mustNotMatch={};this.error=undefined;this.conditions=[];this.resultTemplateCommon=new i({host:this.host,setError:t=>{this.error=t},validParents:["atomic-result-children"]})}async getTemplate(){return this.resultTemplateCommon.getTemplate(this.conditions,this.error)}componentWillLoad(){this.resultTemplateCommon.matchConditions=r(this.mustMatch,this.mustNotMatch)}render(){return this.resultTemplateCommon.renderIfError(this.error)}get host(){return e(this)}};o([s({splitValues:true})],p.prototype,"mustMatch",void 0);o([s({splitValues:true})],p.prototype,"mustNotMatch",void 0);export{p as atomic_result_children_template};
//# sourceMappingURL=p-1e299d9a.entry.js.map