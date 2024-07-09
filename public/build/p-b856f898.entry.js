import{r as t,h as i,g as e}from"./p-00525453.js";import{g as s,H as o,d as r}from"./p-e8da8696.js";import{F as l}from"./p-d291e2d3.js";import{I as a,B as n}from"./p-e5df4b71.js";import{r as d}from"./p-effc0f7e.js";import{R as p}from"./p-7e69c7c8.js";import{I as m,e as c}from"./p-9bcb9435.js";import{D as h}from"./p-e2a48f52.js";import{I as u}from"./p-e832cae5.js";import{I as f}from"./p-1c9cedc4.js";import{I as g}from"./p-c944a92c.js";import{g as y}from"./p-8741faf6.js";import"./p-1580513b.js";import"./p-e9c4f463.js";import"./p-a2fc549d.js";import"./p-c55300b4.js";import"./p-65c3e61f.js";const b=".list-wrapper.placeholder .result-component{display:none}.list-wrapper.placeholder table.list-root{display:none}.list-wrapper:not(.placeholder) atomic-result-placeholder{display:none}.list-wrapper:not(.placeholder) atomic-result-table-placeholder{display:none}.list-root.loading{animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite}@keyframes pulse{0%,100%{opacity:0.6}50%{opacity:0.2}}[part~='divider']:not(:last-child){border-bottom:1px solid var(--atomic-neutral);padding-bottom:1rem}[part~='divider']{margin-bottom:1rem}.list-root.display-list{display:flex;flex-direction:column}.list-root.display-list .result-component,.list-root.display-list atomic-result-placeholder{width:auto}@media (min-width: 1024px){.list-root.display-list.density-comfortable [part~='outline']::before{margin:2rem 0}.list-root.display-list.density-normal [part~='outline']::before{margin:1.5rem 0}@media not all and (min-width: 1024px){.list-root.display-list.density-normal [part~='outline']::before{margin:1.75rem 0}}.list-root.display-list.density-compact [part~='outline']::before{margin:1rem 0}@media not all and (min-width: 1024px){.list-root.display-list.density-compact [part~='outline']::before{margin:1.5rem 0}}.list-root.display-list [part~='outline']::before{display:block;content:' ';height:1px;background-color:var(--atomic-neutral)}.list-root.display-list [part~='outline']:first-of-type::before{display:none}.list-root.display-list atomic-result-placeholder::before{background-color:transparent}}@media not all and (min-width: 1024px){.list-root.display-list.image-large.density-comfortable [part~='outline']::before{margin:2rem 0}.list-root.display-list.image-large.density-normal [part~='outline']::before{margin:1.5rem 0}@media not all and (min-width: 1024px){.list-root.display-list.image-large.density-normal [part~='outline']::before{margin:1.75rem 0}}.list-root.display-list.image-large.density-compact [part~='outline']::before{margin:1rem 0}@media not all and (min-width: 1024px){.list-root.display-list.image-large.density-compact [part~='outline']::before{margin:1.5rem 0}}.list-root.display-list.image-large [part~='outline']::before{display:block;content:' ';height:1px;background-color:var(--atomic-neutral)}.list-root.display-list.image-large [part~='outline']:first-of-type::before{display:none}.list-root.display-list.image-large atomic-result-placeholder::before{background-color:transparent}.list-root.display-list.image-large{display:grid;justify-content:space-evenly;grid-template-columns:minmax(auto, 35rem)}.list-root.display-list.image-small,.list-root.display-list.image-icon,.list-root.display-list.image-none{grid-row-gap:1rem}.list-root.display-list.image-small [part~='outline'],.list-root.display-list.image-icon [part~='outline'],.list-root.display-list.image-none [part~='outline']{border:1px solid var(--atomic-neutral);padding:1rem;border-radius:1rem}.list-root.display-list.image-small atomic-result-placeholder,.list-root.display-list.image-icon atomic-result-placeholder,.list-root.display-list.image-none atomic-result-placeholder{border-color:transparent}}";const j=b;var R=undefined&&undefined.__decorate||function(t,i,e,s){var o=arguments.length,r=o<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,e):s,l;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(t,i,e,s);else for(var a=t.length-1;a>=0;a--)if(l=t[a])r=(o<3?l(r):o>3?l(i,e,r):l(i,e))||r;return o>3&&r&&Object.defineProperty(i,e,r),r};const x=class{constructor(i){t(this,i);this.loadingFlag=d("firstResultLoaded-");this.display="list";this.resultTemplateRegistered=false;this.templateHasError=false;this.density="normal";this.imageSize="icon";this.numberOfFoldedResults=2;this.foldedResultListState=undefined;this.resultsPerPageState=undefined;this.resultTemplateRegistered=false;this.error=undefined;this.templateHasError=false;this.density="normal";this.imageSize="icon";this.collectionField=undefined;this.parentField=undefined;this.childField=undefined;this.numberOfFoldedResults=2}async setRenderFunction(t){this.resultRenderingFunction=t}resolveFoldedResultList(t){t.preventDefault();t.stopPropagation();t.detail(this.foldedResultList)}loadCollection(t){t.preventDefault();t.stopPropagation();this.foldedResultList.loadCollection(t.detail)}get focusTarget(){if(!this.nextNewResultTarget){this.nextNewResultTarget=new l(this)}return this.nextNewResultTarget}initialize(){try{this.foldedResultList=this.initFolding();this.resultsPerPage=s(this.bindings.engine)}catch(t){this.error=t}this.itemTemplateProvider=new m({includeDefaultTemplate:true,templateElements:Array.from(this.host.querySelectorAll("atomic-result-template")),getResultTemplateRegistered:()=>this.resultTemplateRegistered,getTemplateHasError:()=>this.templateHasError,setResultTemplateRegistered:t=>{this.resultTemplateRegistered=t},setTemplateHasError:t=>{this.templateHasError=t},bindings:this.bindings});this.itemListCommon=new f({engineSubscribe:this.bindings.engine.subscribe,getCurrentNumberOfItems:()=>this.foldedResultListState.results.length,getIsLoading:()=>this.foldedResultListState.isLoading,host:this.host,loadingFlag:this.loadingFlag,nextNewItemTarget:this.focusTarget,store:this.bindings.store})}initFolding(t={options:{}}){return o(this.bindings.engine,{options:{...t.options,folding:{collectionField:this.collectionField,parentField:this.parentField,childField:this.childField,numberOfFoldedResults:this.numberOfFoldedResults}}})}render(){this.itemListCommon.updateBreakpoints();const t=this.computeListDisplayClasses();return i(g,{key:"62678929a90c387c27ad68a97e8a20bf62899697",hasError:this.foldedResultListState.hasError,firstRequestExecuted:this.foldedResultListState.firstSearchExecuted,hasItems:this.foldedResultListState.hasResults,hasTemplate:this.resultTemplateRegistered,templateHasError:this.itemTemplateProvider.hasError},i(h,{key:"916e918e8f54437235df783f21695054e3170766",listClasses:t,display:this.display},i(p,{key:"1635ead6b70ba8f0af28cd23267102353b8e5a1e",density:this.density,imageSize:this.imageSize,display:this.display,displayPlaceholders:!this.bindings.store.isAppLoaded(),numberOfPlaceholders:this.resultsPerPageState.numberOfResults}),i(u,{key:"7b92aaf5d1a01c553365a7fc26ac393c4fb98f03",firstRequestExecuted:this.foldedResultListState.firstSearchExecuted,hasItems:this.foldedResultListState.hasResults},this.foldedResultListState.results.map(((t,e)=>{const s=this.getPropsForAtomicResult(t);return i("atomic-result",{...s,part:"outline",ref:t=>t&&this.itemListCommon.setNewResultRef(t,e)})})))))}computeListDisplayClasses(){const t=!this.bindings.store.isAppLoaded();return y(this.display,this.density,this.imageSize,this.foldedResultListState.firstSearchExecuted&&this.foldedResultListState.isLoading,t)}getPropsForAtomicResult(t){const i=c(t);return{interactiveResult:r(this.bindings.engine,{options:{result:i}}),result:t,renderingFunction:this.resultRenderingFunction,loadingFlag:this.loadingFlag,key:this.itemListCommon.getResultId(i.uniqueId,this.foldedResultListState.searchResponseId,this.density,this.imageSize),content:this.itemTemplateProvider.getTemplateContent(i),store:this.bindings.store,density:this.density,imageSize:this.imageSize,display:this.display}}get host(){return e(this)}};R([a()],x.prototype,"bindings",void 0);R([n("foldedResultList")],x.prototype,"foldedResultListState",void 0);R([n("resultsPerPage")],x.prototype,"resultsPerPageState",void 0);x.style=j;export{x as atomic_folded_result_list};
//# sourceMappingURL=p-b856f898.entry.js.map