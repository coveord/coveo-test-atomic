import { r as registerInstance, h, g as getElement } from './index-3acbf9e0.js';
import { b as al } from './headless.esm-fb41148c.js';
import { I as InitializeBindings, B as BindStateToController } from './initialization-utils-bdb93b26.js';

const atomicFacetManagerCss = ":host{display:block;font-family:Lato, Helvetica Neue, Helvetica, Arial, sans-serif, sans-serif}.focus-within\\:rounded-b-none:focus-within{border-bottom-right-radius:0px;border-bottom-left-radius:0px;border-top-left-radius:0.25rem;border-top-right-radius:0.25rem}.apply-border-on-background{border-color:var(--atomic-on-background, #282829);border-style:solid;border-width:1px}.apply-border-on-background-variant{border-color:var(--atomic-on-background-variant, #6b6b6b);border-style:solid;border-width:1px}/*! modern-normalize v1.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */*,*::before,*::after{box-sizing:border-box}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}body{font-family:system-ui,\n\t\t-apple-system, \n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji'}hr{height:0;color:inherit;}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}table{text-indent:0;border-color:inherit;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,select{text-transform:none}button,[type='button'],[type='submit']{-webkit-appearance:button}legend{padding:0}progress{vertical-align:baseline}[type='search']{-webkit-appearance:textfield;outline-offset:-2px;}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}button{background-color:transparent;background-image:none}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}fieldset{margin:0;padding:0}ol,ul{list-style:none;margin:0;padding:0}html{font-family:var(--atomic-font-family, Lato, Arial, Helvetica, sans-serif);line-height:1.5;}body{font-family:inherit;line-height:inherit}*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb;}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#9ca3af}input::placeholder,textarea::placeholder{color:#9ca3af}button,[role=\"button\"]{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}pre,code,kbd,samp{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.5rem * var(--tw-space-x-reverse));margin-left:calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.bg-transparent{background-color:transparent}.bg-white{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}.bg-primary{background-color:var(--atomic-primary, #1372EC)}.bg-background{background-color:var(--atomic-background, #FFFFFF)}.hover\\:bg-primary:hover{background-color:var(--atomic-primary, #1372EC)}.hover\\:bg-primary-variant:hover{background-color:var(--atomic-primary-variant, #215CD3)}.border-primary{border-color:var(--atomic-primary, #1372EC)}.border-on-background{border-color:var(--atomic-on-background, #282829)}.border-divider{border-color:var(--atomic-divider, #BCC3CA)}.rounded{border-radius:0.25rem}.rounded-b{border-bottom-right-radius:0.25rem;border-bottom-left-radius:0.25rem}.rounded-r-lg{border-top-right-radius:0.5rem;border-bottom-right-radius:0.5rem}.rounded-l-lg{border-top-left-radius:0.5rem;border-bottom-left-radius:0.5rem}.rounded-br-none{border-bottom-right-radius:0px}.rounded-bl-none{border-bottom-left-radius:0px}.border-solid{border-style:solid}.border-none{border-style:none}.border-0{border-width:0px}.border-2{border-width:2px}.border{border-width:1px}.border-t-0{border-top-width:0px}.border-r-0{border-right-width:0px}.border-l-0{border-left-width:0px}.border-b{border-bottom-width:1px}.box-border{box-sizing:border-box}.cursor-pointer{cursor:pointer}.cursor-not-allowed{cursor:not-allowed}.block{display:block}.flex{display:flex}.table{display:table}.hidden{display:none}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.items-end{align-items:flex-end}.items-center{align-items:center}.self-end{align-self:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.flex-grow{flex-grow:1}.font-semibold{font-weight:600}.font-bold{font-weight:700}.h-2{height:0.5rem}.h-3{height:0.75rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-9{height:2.25rem}.h-10{height:2.5rem}.h-2\\.5{height:0.625rem}.h-3\\.5{height:0.875rem}.h-screen{height:100vh}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.list-inside{list-style-position:inside}.list-none{list-style-type:none}.list-disc{list-style-type:disc}.m-auto{margin:auto}.my-0{margin-top:0px;margin-bottom:0px}.my-2{margin-top:0.5rem;margin-bottom:0.5rem}.mx-2{margin-left:0.5rem;margin-right:0.5rem}.my-3{margin-top:0.75rem;margin-bottom:0.75rem}.mx-auto{margin-left:auto;margin-right:auto}.mt-2{margin-top:0.5rem}.mr-2{margin-right:0.5rem}.mb-2{margin-bottom:0.5rem}.ml-2{margin-left:0.5rem}.ml-3{margin-left:0.75rem}.ml-5{margin-left:1.25rem}.ml-auto{margin-left:auto}.max-w-5xl{max-width:64rem}.max-w-full{max-width:100%}.object-left-top{-o-object-position:left top;object-position:left top}.opacity-50{opacity:0.5}.outline-none{outline:2px solid transparent;outline-offset:2px}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.overflow-hidden{overflow:hidden}.p-0{padding:0px}.p-2{padding:0.5rem}.p-3{padding:0.75rem}.py-1{padding-top:0.25rem;padding-bottom:0.25rem}.px-2{padding-left:0.5rem;padding-right:0.5rem}.px-4{padding-left:1rem;padding-right:1rem}.py-1\\.5{padding-top:0.375rem;padding-bottom:0.375rem}.pb-2{padding-bottom:0.5rem}.pl-2{padding-left:0.5rem}.pr-4{padding-right:1rem}.pr-8{padding-right:2rem}.placeholder-on-background::-moz-placeholder{color:var(--atomic-on-background, #282829)}.placeholder-on-background:-ms-input-placeholder{color:var(--atomic-on-background, #282829)}.placeholder-on-background::placeholder{color:var(--atomic-on-background, #282829)}.pointer-events-none{pointer-events:none}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.top-0{top:0px}.left-0{left:0px}.right-3{right:0.75rem}.top-4{top:1rem}*{--tw-shadow:0 0 #0000}.shadow{--tw-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59, 130, 246, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000}.fill-current{fill:currentColor}.text-left{text-align:left}.text-primary{color:var(--atomic-primary, #1372EC)}.text-on-primary{color:var(--atomic-on-primary, #FFFFFF)}.text-secondary{color:var(--atomic-secondary, #333357)}.text-on-background{color:var(--atomic-on-background, #282829)}.text-on-background-variant{color:var(--atomic-on-background-variant, #6b6b6b)}.hover\\:text-primary-variant:hover{color:var(--atomic-primary-variant, #215CD3)}.hover\\:text-on-primary:hover{color:var(--atomic-on-primary, #FFFFFF)}.hover\\:underline:hover{text-decoration:underline}.w-2{width:0.5rem}.w-3{width:0.75rem}.w-4{width:1rem}.w-5{width:1.25rem}.w-2\\.5{width:0.625rem}.w-3\\.5{width:0.875rem}.w-full{width:100%}.w-screen{width:100vw}.z-50{z-index:50}@-webkit-keyframes spin{to{transform:rotate(360deg)}}@keyframes spin{to{transform:rotate(360deg)}}@-webkit-keyframes ping{75%,100%{transform:scale(2);opacity:0}}@keyframes ping{75%,100%{transform:scale(2);opacity:0}}@-webkit-keyframes pulse{50%{opacity:.5}}@keyframes pulse{50%{opacity:.5}}@-webkit-keyframes bounce{0%,100%{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);animation-timing-function:cubic-bezier(0.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);animation-timing-function:cubic-bezier(0,0,0.2,1)}}@keyframes bounce{0%,100%{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);animation-timing-function:cubic-bezier(0.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);animation-timing-function:cubic-bezier(0,0,0.2,1)}}:host{display:block}@media (min-width: 1024px){.lg\\:block{display:block}.lg\\:hidden{display:none}.lg\\:flex-row{flex-direction:row}.lg\\:flex-col{flex-direction:column}.lg\\:h-auto{height:auto}.lg\\:mr-0{margin-right:0px}.lg\\:static{position:static}.lg\\:w-80{width:20rem}.lg\\:w-auto{width:auto}}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const AtomicFacetManager = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  initialize() {
    this.facetManager = al(this.bindings.engine);
  }
  onFacetManagerUpdate() {
    this.sortFacets();
  }
  sortFacets() {
    const payload = this.facets.map((f) => ({ facetId: f.facetId, payload: f }));
    const sortedFacets = this.facetManager.sort(payload).map((f) => f.payload);
    this.host.append(...sortedFacets);
  }
  get facets() {
    const facets = [];
    const children = Array.from(this.host.children);
    children.forEach((child) => {
      this.isPseudoFacet(child) && facets.push(child);
    });
    return facets;
  }
  isPseudoFacet(el) {
    return 'facetId' in el;
  }
  render() {
    return h("slot", null);
  }
  get host() { return getElement(this); }
};
__decorate([
  InitializeBindings()
], AtomicFacetManager.prototype, "bindings", void 0);
__decorate([
  BindStateToController('facetManager', {
    onUpdateCallbackMethod: 'onFacetManagerUpdate',
  })
], AtomicFacetManager.prototype, "facetManagerState", void 0);
AtomicFacetManager.style = atomicFacetManagerCss;

export { AtomicFacetManager as atomic_facet_manager };
