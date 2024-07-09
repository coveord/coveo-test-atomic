import{h as t}from"./p-00525453.js";import{p as i}from"./p-4585d9b6.js";import{g as e}from"./p-55d2bcf3.js";import{r as s}from"./p-effc0f7e.js";import{H as r}from"./p-e5df4b71.js";import{b as n}from"./p-d1aad506.js";import{F as a,b as h,a as l}from"./p-87455f2b.js";import{F as o}from"./p-eaad1b26.js";import{F as u}from"./p-892039c7.js";import{F as d}from"./p-b58f0ba6.js";import{i as f}from"./p-406f7e5a.js";class c{constructor(t){this.props=t;this.manualTimeframes=[];this.facetId=this.determineFacetId;this.props.setFacetId(this.facetId);this.manualTimeframes=this.getManualTimeframes();if(this.manualTimeframes.length>0){this.facetForDateRange=this.props.initializeFacetForDateRange(this.currentValues)}if(this.props.withDatePicker){this.facetForDatePicker=this.props.initializeFacetForDatePicker();this.filter=this.props.initializeFilter()}if(this.facetForDateRange||this.filter){this.dependenciesManager=this.props.buildDependenciesManager()}this.registerFacetToStore()}get determineFacetId(){if(this.props.facetId){return this.props.facetId}if(this.props.bindings.store.get("dateFacets")[this.props.field]){return s(`${this.props.field}_`)}return this.props.field}get enabled(){var t,i,e,s;return(s=(i=(t=this.facetForDateRange)===null||t===void 0?void 0:t.state.enabled)!==null&&i!==void 0?i:(e=this.filter)===null||e===void 0?void 0:e.state.enabled)!==null&&s!==void 0?s:true}get valuesToRender(){var t;return((t=this.facetForDateRange)===null||t===void 0?void 0:t.state.values.filter((t=>t.numberOfResults||t.state!=="idle")))||[]}get shouldRenderValues(){return!this.hasInputRange&&!!this.valuesToRender.length}get shouldRenderFacet(){return this.shouldRenderInput||this.shouldRenderValues}get shouldRenderInput(){var t,i;return n({hasInput:this.props.withDatePicker,hasInputRange:this.hasInputRange,searchStatusState:this.props.getSearchStatusState(),facetValues:((i=(t=this.facetForDatePicker)===null||t===void 0?void 0:t.state)===null||i===void 0?void 0:i.values)||[]})}get hasValues(){var t;if((t=this.facetForDatePicker)===null||t===void 0?void 0:t.state.values.length){return true}return!!this.valuesToRender.length}get numberOfSelectedValues(){var t,i,e;if((i=(t=this.filter)===null||t===void 0?void 0:t.state)===null||i===void 0?void 0:i.range){return 1}return((e=this.facetForDateRange)===null||e===void 0?void 0:e.state.values.filter((({state:t})=>t==="selected")).length)||0}get hasInputRange(){var t;return!!((t=this.filter)===null||t===void 0?void 0:t.state.range)}get currentValues(){return this.manualTimeframes.map((({period:t,amount:i,unit:e})=>t==="past"?this.props.buildDateRange({start:{period:t,unit:e,amount:i},end:{period:"now"}}):this.props.buildDateRange({start:{period:"now"},end:{period:t,unit:e,amount:i}})))}disconnectedCallback(){var t;if(this.props.host.isConnected){return}(t=this.dependenciesManager)===null||t===void 0?void 0:t.stopWatching()}get isHidden(){return!this.shouldRenderFacet||!this.enabled}registerFacetToStore(){const t={label:()=>this.props.bindings.i18n.t(this.props.label),facetId:this.facetId,element:this.props.host,isHidden:()=>this.isHidden};this.props.bindings.store.registerFacet("dateFacets",{...t,format:t=>this.formatFacetValue(t)});f(this.props.host,{...t,hasValues:()=>this.hasValues,numberOfActiveValues:()=>this.numberOfSelectedValues});if(this.filter){this.props.bindings.store.state.dateFacets[this.filter.state.facetId]=this.props.bindings.store.state.dateFacets[this.facetId]}}getManualTimeframes(){return Array.from(this.props.host.querySelectorAll("atomic-timeframe")).map((({label:t,amount:i,unit:e,period:s})=>({label:t,amount:i,unit:e,period:s})))}formatFacetValue(t){try{const i=this.props.deserializeRelativeDate(t.start);const s=i.period==="past"?i:this.props.deserializeRelativeDate(t.end);const r=this.getManualTimeframes().find((t=>t.period===s.period&&t.unit===s.unit&&t.amount===s.amount));if(r===null||r===void 0?void 0:r.label){return e(this.props.field,r.label,this.props.bindings.i18n)}return this.props.bindings.i18n.t(`${s.period}-${s.unit}`,{count:s.amount})}catch(e){return this.props.bindings.i18n.t("to",{start:i(t.start).format("YYYY-MM-DD"),end:i(t.end).format("YYYY-MM-DD")})}}renderValues(){return this.renderValuesContainer(this.valuesToRender.map((t=>this.renderValue(t))))}renderValue(i){const e=this.formatFacetValue(i);const s=i.state==="selected";const r=i.state==="excluded";return t(u,{displayValue:e,isSelected:s,numberOfResults:i.numberOfResults,i18n:this.props.bindings.i18n,onClick:()=>this.facetForDateRange.toggleSingleSelect(i)},t(o,{displayValue:e,isSelected:s,isExcluded:r}))}renderValuesContainer(i){return t(d,{i18n:this.props.bindings.i18n,label:this.props.label},t("ul",{class:"mt-3",part:"values"},i))}renderHeader(i,e,s){return t(a,{i18n:this.props.bindings.i18n,label:this.props.label,onClearFilters:()=>{var t,i,s;e.focusAfterSearch();if((t=this.filter)===null||t===void 0?void 0:t.state.range){(i=this.filter)===null||i===void 0?void 0:i.clear();return}(s=this.facetForDateRange)===null||s===void 0?void 0:s.deselectAll()},numberOfActiveValues:this.numberOfSelectedValues,isCollapsed:i,headingLevel:this.props.headingLevel,onToggleCollapse:s,headerRef:t=>e.setTarget(t)})}renderDateInput(){return t("atomic-facet-date-input",{min:this.props.min,max:this.props.max,bindings:this.props.bindings,label:this.props.label,facetId:this.filter.state.facetId,rangeGetter:()=>this.filter.state.range,rangeSetter:t=>{this.filter.setRange(t)}})}render({hasError:i,firstSearchExecuted:e,isCollapsed:s,headerFocus:n,onToggleCollapse:a}){if(i||!this.enabled){return t(r,null)}if(!e){return t(h,{numberOfValues:this.currentValues.length,isCollapsed:s})}if(!this.shouldRenderFacet){return t(r,null)}return t(l,null,this.renderHeader(s,n,a),!s&&[this.shouldRenderValues&&this.renderValues(),this.shouldRenderInput&&this.renderDateInput()])}}export{c as T};
//# sourceMappingURL=p-c053a965.js.map