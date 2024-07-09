import{r as t,h as e,g as i}from"./p-00525453.js";import{$ as s,e as r,J as o}from"./p-384504b5.js";import{F as a}from"./p-d291e2d3.js";import{I as l,B as n}from"./p-e5df4b71.js";import{r as p}from"./p-effc0f7e.js";import{R as d}from"./p-7e69c7c8.js";import{D as h}from"./p-e2a48f52.js";import{I as m}from"./p-e832cae5.js";import{I as c}from"./p-1c9cedc4.js";import{I as f}from"./p-c944a92c.js";import{I as u}from"./p-9bcb9435.js";import{g as b}from"./p-8741faf6.js";import"./p-1580513b.js";import"./p-e9c4f463.js";import"./p-c55300b4.js";import"./p-e8da8696.js";import"./p-a2fc549d.js";import"./p-65c3e61f.js";const g=".list-wrapper.placeholder .result-component{display:none}.list-wrapper.placeholder table.list-root{display:none}.list-wrapper:not(.placeholder) atomic-result-placeholder{display:none}.list-wrapper:not(.placeholder) atomic-result-table-placeholder{display:none}.list-root.loading{animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite}@keyframes pulse{0%,100%{opacity:0.6}50%{opacity:0.2}}[part~='divider']:not(:last-child){border-bottom:1px solid var(--atomic-neutral);padding-bottom:1rem}[part~='divider']{margin-bottom:1rem}.list-root.display-list{display:flex;flex-direction:column}.list-root.display-list .result-component,.list-root.display-list atomic-result-placeholder{width:auto}.list-root.display-list.density-comfortable [part~='outline']::before{margin:2rem 0}.list-root.display-list.density-normal [part~='outline']::before{margin:1.5rem 0}@media not all and (min-width: 1024px){.list-root.display-list.density-normal [part~='outline']::before{margin:1.75rem 0}}.list-root.display-list.density-compact [part~='outline']::before{margin:1rem 0}@media not all and (min-width: 1024px){.list-root.display-list.density-compact [part~='outline']::before{margin:1.5rem 0}}.list-root.display-list [part~='outline']::before{display:block;content:' ';height:1px;background-color:var(--atomic-neutral)}.list-root.display-list [part~='outline']:first-of-type::before{display:none}.list-root.display-list atomic-result-placeholder::before{background-color:transparent}.list-root.display-list .result-component[part~='outline']::before{margin-top:0px;margin-bottom:0px;margin-left:1.5rem;margin-right:1.5rem}.list-root.placeholder{padding:0.5rem 1.5rem}";const y=g;var j=undefined&&undefined.__decorate||function(t,e,i,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")o=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)if(a=t[l])o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o;return r>3&&o&&Object.defineProperty(e,i,o),o};const R=class{constructor(e){t(this,e);this.loadingFlag=p("firstInsightResultLoaded-");this.display="list";this.templateHasError=false;this.resultTemplateRegistered=false;this.density="normal";this.imageSize="icon";this.resultsPerPageState=undefined;this.resultListState=undefined;this.templateHasError=false;this.resultTemplateRegistered=false;this.error=undefined;this.density="normal";this.imageSize="icon"}async setRenderFunction(t){this.itemRenderingFunction=t}initialize(){this.resultList=s(this.bindings.engine,{options:{fieldsToInclude:this.bindings.store.state.fieldsToInclude||undefined}});this.resultsPerPage=r(this.bindings.engine);this.itemTemplateProvider=new u({includeDefaultTemplate:true,templateElements:Array.from(this.host.querySelectorAll("atomic-insight-result-template")),getResultTemplateRegistered:()=>this.resultTemplateRegistered,getTemplateHasError:()=>this.templateHasError,setResultTemplateRegistered:t=>{this.resultTemplateRegistered=t},setTemplateHasError:t=>{this.templateHasError=t},bindings:this.bindings});this.itemListCommon=new c({engineSubscribe:this.bindings.engine.subscribe,getCurrentNumberOfItems:()=>this.resultListState.results.length,getIsLoading:()=>this.resultListState.isLoading,host:this.host,loadingFlag:this.loadingFlag,nextNewItemTarget:this.focusTarget,store:this.bindings.store})}get focusTarget(){if(!this.nextNewResultTarget){this.nextNewResultTarget=new a(this)}return this.nextNewResultTarget}render(){this.itemListCommon.updateBreakpoints();const t=this.computeListDisplayClasses();return e(f,{key:"31b864a52dca25d5209d8ab29ae740097fa6a2ea",hasTemplate:this.resultTemplateRegistered,templateHasError:this.itemTemplateProvider.hasError,firstRequestExecuted:this.resultListState.firstSearchExecuted,hasItems:this.resultListState.hasResults,hasError:this.resultListState.hasError},e(h,{key:"c0c9be16d06188e4b469375e67bb299777c6b848",listClasses:t,display:this.display},e(d,{key:"5c9602078d96ac23bb0d1eedf90f23069e279559",displayPlaceholders:!this.bindings.store.isAppLoaded(),numberOfPlaceholders:this.resultsPerPageState.numberOfResults,display:this.display,density:this.density,imageSize:this.imageSize}),e(m,{key:"ce7f9f8b3a49b2315901c287360025e585442e81",firstRequestExecuted:this.resultListState.firstSearchExecuted,hasItems:this.resultListState.hasResults},this.resultListState.results.map(((t,i)=>{const s=this.getPropsForAtomicInsightResult(t);return e("atomic-insight-result",{...s,part:"outline",ref:t=>t&&this.itemListCommon.setNewResultRef(t,i)})})))))}computeListDisplayClasses(){const t=!this.bindings.store.isAppLoaded();return b(this.display,this.density,this.imageSize,this.resultListState.firstSearchExecuted&&this.resultListState.isLoading,t)}getPropsForAtomicInsightResult(t){return{interactiveResult:o(this.bindings.engine,{options:{result:t}}),result:t,renderingFunction:this.itemRenderingFunction,loadingFlag:this.loadingFlag,key:this.itemListCommon.getResultId(t.uniqueId,this.resultListState.searchResponseId,this.density,this.imageSize),content:this.itemTemplateProvider.getTemplateContent(t),store:this.bindings.store,density:this.density,imageSize:this.imageSize,display:this.display}}get host(){return i(this)}};j([l()],R.prototype,"bindings",void 0);j([n("resultsPerPage")],R.prototype,"resultsPerPageState",void 0);j([n("resultList")],R.prototype,"resultListState",void 0);R.style=y;export{R as atomic_insight_result_list};
//# sourceMappingURL=p-51079fff.entry.js.map