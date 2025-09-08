import{f as Ks,B as on,x as _,E as ne,T as ee,m as Ws,i as hu,p as fu,v as De,r as Et,M as rr}from"./iframe-rlm7c55k.js";import{_ as mu}from"./preload-helper-D9Z9MdNV.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Gs(t,e){if(t!==void 0){let i=0;for(const n of t)yield e(n,i++)}}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(t,e){return t};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let gu=/(url\()([^)]*)(\))/g,bu=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,Ci,se;function Wt(t,e){if(t&&bu.test(t)||t==="//")return t;if(Ci===void 0){Ci=!1;try{const i=new URL("b","http://a");i.pathname="c%20d",Ci=i.href==="http://a/c%20d"}catch{}}if(e||(e=document.baseURI||window.location.href),Ci)try{return new URL(t,e).href}catch{return t}return se||(se=document.implementation.createHTMLDocument("temp"),se.base=se.createElement("base"),se.head.appendChild(se.base),se.anchor=se.createElement("a"),se.body.appendChild(se.anchor)),se.base.href=e,se.anchor.href=t,se.anchor.href||t}function eo(t,e){return t.replace(gu,function(i,n,r,o){return n+"'"+Wt(r.replace(/["']/g,""),e)+"'"+o})}function to(t){return t.substring(0,t.lastIndexOf("/")+1)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const In=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const yu=In&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch{return!1}})();let vu=window.Polymer&&window.Polymer.rootPath||to(document.baseURI||window.location.href),an=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,_u=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,ft=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,xu=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,ti=window.Polymer&&window.Polymer.legacyOptimizations||!1,Ys=window.Polymer&&window.Polymer.legacyWarnings||!1,wu=window.Polymer&&window.Polymer.syncInitialRender||!1,kr=window.Polymer&&window.Polymer.legacyUndefined||!1,Cu=window.Polymer&&window.Polymer.orderedComputed||!1,Zo=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Js=window.Polymer&&window.Polymer.fastDomIf||!1,Lr=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,Si=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,Su=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let zu=0;const re=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let i=zu++;function n(r){let o=r.__mixinSet;if(o&&o[i])return r;let a=e,s=a.get(r);if(!s){s=t(r),a.set(r,s);let l=Object.create(s.__mixinSet||o||null);l[i]=!0,s.__mixinSet=l}return s}return n};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let io={},Xs={};function Qo(t,e){io[t]=Xs[t.toLowerCase()]=e}function ea(t){return io[t]||Xs[t.toLowerCase()]}function Au(t){t.querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}class ii extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,i){if(e){let n=ea(e);return n&&i?n.querySelector(i):n}return null}attributeChangedCallback(e,i,n,r){i!==n&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,i=Wt(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=to(i)}return this.__assetpath}register(e){if(e=e||this.id,e){if(ft&&ea(e)!==void 0)throw Qo(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,Qo(e,this),Au(this)}}}ii.prototype.modules=io;customElements.define("dom-module",ii);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Eu="link[rel=import][type~=css]",Mu="include",ta="shady-unscoped";function no(t){return ii.import(t)}function ia(t){let e=t.body?t.body:t;const i=eo(e.textContent,t.baseURI),n=document.createElement("style");return n.textContent=i,n}function ku(t){const e=t.trim().split(/\s+/),i=[];for(let n=0;n<e.length;n++)i.push(...Lu(e[n]));return i}function Lu(t){const e=no(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(e._styles===void 0){const i=[];i.push(...oo(e));const n=e.querySelector("template");n&&i.push(...ro(n,e.assetpath)),e._styles=i}return e._styles}function ro(t,e){if(!t._styles){const i=[],n=t.content.querySelectorAll("style");for(let r=0;r<n.length;r++){let o=n[r],a=o.getAttribute(Mu);a&&i.push(...ku(a).filter(function(s,l,c){return c.indexOf(s)===l})),e&&(o.textContent=eo(o.textContent,e)),i.push(o)}t._styles=i}return t._styles}function $u(t){let e=no(t);return e?oo(e):[]}function oo(t){const e=[],i=t.querySelectorAll(Eu);for(let n=0;n<i.length;n++){let r=i[n];if(r.import){const o=r.import,a=r.hasAttribute(ta);if(a&&!o._unscopedStyle){const s=ia(o);s.setAttribute(ta,""),o._unscopedStyle=s}else o._style||(o._style=ia(o));e.push(a?o._unscopedStyle:o._style)}}return e}function Ou(t){let e=t.trim().split(/\s+/),i="";for(let n=0;n<e.length;n++)i+=Tu(e[n]);return i}function Tu(t){let e=no(t);if(e&&e._cssText===void 0){let i=Iu(e),n=e.querySelector("template");n&&(i+=Pu(n,e.assetpath)),e._cssText=i||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}function Pu(t,e){let i="";const n=ro(t,e);for(let r=0;r<n.length;r++){let o=n[r];o.parentNode&&o.parentNode.removeChild(o),i+=o.textContent}return i}function Iu(t){let e="",i=oo(t);for(let n=0;n<i.length;n++)e+=i[n].textContent;return e}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const A=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function $r(t){return t.indexOf(".")>=0}function ke(t){let e=t.indexOf(".");return e===-1?t:t.slice(0,e)}function Zs(t,e){return t.indexOf(e+".")===0}function ni(t,e){return e.indexOf(t+".")===0}function ri(t,e,i){return e+i.slice(t.length)}function Hu(t,e){return t===e||Zs(t,e)||ni(t,e)}function Ht(t){if(Array.isArray(t)){let e=[];for(let i=0;i<t.length;i++){let n=t[i].toString().split(".");for(let r=0;r<n.length;r++)e.push(n[r])}return e.join(".")}else return t}function Qs(t){return Array.isArray(t)?Ht(t).split("."):t.toString().split(".")}function k(t,e,i){let n=t,r=Qs(e);for(let o=0;o<r.length;o++){if(!n)return;let a=r[o];n=n[a]}return i&&(i.path=r.join(".")),n}function Or(t,e,i){let n=t,r=Qs(e),o=r[r.length-1];if(r.length>1){for(let a=0;a<r.length-1;a++){let s=r[a];if(n=n[s],!n)return}n[o]=i}else n[e]=i;return r.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const sn={},Ru=/-[a-z]/g,Fu=/([A-Z])/g;function ao(t){return sn[t]||(sn[t]=t.indexOf("-")<0?t:t.replace(Ru,e=>e[1].toUpperCase()))}function Hn(t){return sn[t]||(sn[t]=t.replace(Fu,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Nu=0,el=0,at=[],Vu=0,Tr=!1,tl=document.createTextNode("");new window.MutationObserver(Du).observe(tl,{characterData:!0});function Du(){Tr=!1;const t=at.length;for(let e=0;e<t;e++){let i=at[e];if(i)try{i()}catch(n){setTimeout(()=>{throw n})}}at.splice(0,t),el+=t}const st={after(t){return{run(e){return window.setTimeout(e,t)},cancel(e){window.clearTimeout(e)}}},run(t,e){return window.setTimeout(t,e)},cancel(t){window.clearTimeout(t)}},Te={run(t){return Tr||(Tr=!0,tl.textContent=Vu++),at.push(t),Nu++},cancel(t){const e=t-el;if(e>=0){if(!at[e])throw new Error("invalid async handle: "+t);at[e]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const qu=Te,il=re(t=>{class e extends t{static createProperties(n){const r=this.prototype;for(let o in n)o in r||r._createPropertyAccessor(o)}static attributeNameForProperty(n){return n.toLowerCase()}static typeForProperty(n){}_createPropertyAccessor(n,r){this._addPropertyToAttributeMap(n),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[n]||(this.__dataHasAccessor[n]=!0,this._definePropertyAccessor(n,r))}_addPropertyToAttributeMap(n){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let r=this.__dataAttributes[n];return r||(r=this.constructor.attributeNameForProperty(n),this.__dataAttributes[r]=n),r}_definePropertyAccessor(n,r){Object.defineProperty(this,n,{get(){return this.__data[n]},set:r?function(){}:function(o){this._setPendingProperty(n,o,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let n in this.__dataHasAccessor)this.hasOwnProperty(n)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[n]=this[n],delete this[n])}_initializeInstanceProperties(n){Object.assign(this,n)}_setProperty(n,r){this._setPendingProperty(n,r)&&this._invalidateProperties()}_getProperty(n){return this.__data[n]}_setPendingProperty(n,r,o){let a=this.__data[n],s=this._shouldPropertyChange(n,r,a);return s&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(n in this.__dataOld)&&(this.__dataOld[n]=a),this.__data[n]=r,this.__dataPending[n]=r),s}_isPropertyPending(n){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(n))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,qu.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const n=this.__data,r=this.__dataPending,o=this.__dataOld;this._shouldPropertiesChange(n,r,o)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(n,r,o)),this.__dataCounter--}_shouldPropertiesChange(n,r,o){return!!r}_propertiesChanged(n,r,o){}_shouldPropertyChange(n,r,o){return o!==r&&(o===o||r===r)}attributeChangedCallback(n,r,o,a){r!==o&&this._attributeToProperty(n,o),super.attributeChangedCallback&&super.attributeChangedCallback(n,r,o,a)}_attributeToProperty(n,r,o){if(!this.__serializing){const a=this.__dataAttributes,s=a&&a[n]||n;this[s]=this._deserializeValue(r,o||this.constructor.typeForProperty(s))}}_propertyToAttribute(n,r,o){this.__serializing=!0,o=arguments.length<3?this[n]:o,this._valueToNodeAttribute(this,o,r||this.constructor.attributeNameForProperty(n)),this.__serializing=!1}_valueToNodeAttribute(n,r,o){const a=this._serializeValue(r);(o==="class"||o==="name"||o==="slot")&&(n=A(n)),a===void 0?n.removeAttribute(o):n.setAttribute(o,a===""&&window.trustedTypes?window.trustedTypes.emptyScript:a)}_serializeValue(n){switch(typeof n){case"boolean":return n?"":void 0;default:return n?.toString()}}_deserializeValue(n,r){switch(r){case Boolean:return n!==null;case Number:return Number(n);default:return n}}}return e});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const nl={};let zi=HTMLElement.prototype;for(;zi;){let t=Object.getOwnPropertyNames(zi);for(let e=0;e<t.length;e++)nl[t[e]]=!0;zi=Object.getPrototypeOf(zi)}const Bu=window.trustedTypes?t=>trustedTypes.isHTML(t)||trustedTypes.isScript(t)||trustedTypes.isScriptURL(t):()=>!1;function ju(t,e){if(!nl[e]){let i=t[e];i!==void 0&&(t.__data?t._setPendingProperty(e,i):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=i))}}const rl=re(t=>{const e=il(t);class i extends e{static createPropertiesForAttributes(){let r=this.observedAttributes;for(let o=0;o<r.length;o++)this.prototype._createPropertyAccessor(ao(r[o]))}static attributeNameForProperty(r){return Hn(r)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(r){for(let o in r)this._setProperty(o,r[o])}_ensureAttribute(r,o){const a=this;a.hasAttribute(r)||this._valueToNodeAttribute(a,o,r)}_serializeValue(r){switch(typeof r){case"object":if(r instanceof Date)return r.toString();if(r){if(Bu(r))return r;try{return JSON.stringify(r)}catch{return""}}default:return super._serializeValue(r)}}_deserializeValue(r,o){let a;switch(o){case Object:try{a=JSON.parse(r)}catch{a=r}break;case Array:try{a=JSON.parse(r)}catch{a=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${r}`)}break;case Date:a=isNaN(r)?String(r):Number(r),a=new Date(a);break;default:a=super._deserializeValue(r,o);break}return a}_definePropertyAccessor(r,o){ju(this,r),super._definePropertyAccessor(r,o)}_hasAccessor(r){return this.__dataHasAccessor&&this.__dataHasAccessor[r]}_isPropertyPending(r){return!!(this.__dataPending&&r in this.__dataPending)}}return i});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Uu={"dom-if":!0,"dom-repeat":!0};let na=!1,ra=!1;function Ku(){if(!na){na=!0;const t=document.createElement("textarea");t.placeholder="a",ra=t.placeholder===t.textContent}return ra}function Wu(t){Ku()&&t.localName==="textarea"&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}const Gu=(()=>{const t=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:e=>e});return(e,i,n)=>{const r=i.getAttribute(n);if(t&&n.startsWith("on-")){e.setAttribute(n,t.createScript(r,n));return}e.setAttribute(n,r)}})();function Yu(t){let e=t.getAttribute("is");if(e&&Uu[e]){let i=t;for(i.removeAttribute("is"),t=i.ownerDocument.createElement(e),i.parentNode.replaceChild(t,i),t.appendChild(i);i.attributes.length;){const{name:n}=i.attributes[0];Gu(t,i,n),i.removeAttribute(n)}}return t}function ol(t,e){let i=e.parentInfo&&ol(t,e.parentInfo);if(i){for(let n=i.firstChild,r=0;n;n=n.nextSibling)if(e.parentIndex===r++)return n}else return t}function Ju(t,e,i,n){n.id&&(e[n.id]=i)}function Xu(t,e,i){if(i.events&&i.events.length)for(let n=0,r=i.events,o;n<r.length&&(o=r[n]);n++)t._addMethodEventListenerToNode(e,o.name,o.value,t)}function Zu(t,e,i,n){i.templateInfo&&(e._templateInfo=i.templateInfo,e._parentTemplateInfo=n)}function Qu(t,e,i){return t=t._methodHost||t,function(r){t[i]?t[i](r,r.detail):console.warn("listener method `"+i+"` not defined")}}const ed=re(t=>{class e extends t{static _parseTemplate(n,r){if(!n._templateInfo){let o=n._templateInfo={};o.nodeInfoList=[],o.nestedTemplate=!!r,o.stripWhiteSpace=r&&r.stripWhiteSpace||n.hasAttribute&&n.hasAttribute("strip-whitespace"),this._parseTemplateContent(n,o,{parent:null})}return n._templateInfo}static _parseTemplateContent(n,r,o){return this._parseTemplateNode(n.content,r,o)}static _parseTemplateNode(n,r,o){let a=!1,s=n;return s.localName=="template"&&!s.hasAttribute("preserve-content")?a=this._parseTemplateNestedTemplate(s,r,o)||a:s.localName==="slot"&&(r.hasInsertionPoint=!0),Wu(s),s.firstChild&&this._parseTemplateChildNodes(s,r,o),s.hasAttributes&&s.hasAttributes()&&(a=this._parseTemplateNodeAttributes(s,r,o)||a),a||o.noted}static _parseTemplateChildNodes(n,r,o){if(!(n.localName==="script"||n.localName==="style"))for(let a=n.firstChild,s=0,l;a;a=l){if(a.localName=="template"&&(a=Yu(a)),l=a.nextSibling,a.nodeType===Node.TEXT_NODE){let u=l;for(;u&&u.nodeType===Node.TEXT_NODE;)a.textContent+=u.textContent,l=u.nextSibling,n.removeChild(u),u=l;if(r.stripWhiteSpace&&!a.textContent.trim()){n.removeChild(a);continue}}let c={parentIndex:s,parentInfo:o};this._parseTemplateNode(a,r,c)&&(c.infoIndex=r.nodeInfoList.push(c)-1),a.parentNode&&s++}}static _parseTemplateNestedTemplate(n,r,o){let a=n,s=this._parseTemplate(a,r);return(s.content=a.content.ownerDocument.createDocumentFragment()).appendChild(a.content),o.templateInfo=s,!0}static _parseTemplateNodeAttributes(n,r,o){let a=!1,s=Array.from(n.attributes);for(let l=s.length-1,c;c=s[l];l--)a=this._parseTemplateNodeAttribute(n,r,o,c.name,c.value)||a;return a}static _parseTemplateNodeAttribute(n,r,o,a,s){return a.slice(0,3)==="on-"?(n.removeAttribute(a),o.events=o.events||[],o.events.push({name:a.slice(3),value:s}),!0):a==="id"?(o.id=s,!0):!1}static _contentForTemplate(n){let r=n._templateInfo;return r&&r.content||n.content}_stampTemplate(n,r){n&&!n.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(n),r=r||this.constructor._parseTemplate(n);let o=r.nodeInfoList,a=r.content||n.content,s=document.importNode(a,!0);s.__noInsertionPoint=!r.hasInsertionPoint;let l=s.nodeList=new Array(o.length);s.$={};for(let c=0,u=o.length,d;c<u&&(d=o[c]);c++){let p=l[c]=ol(s,d);Ju(this,s.$,p,d),Zu(this,p,d,r),Xu(this,p,d)}return s=s,s}_addMethodEventListenerToNode(n,r,o,a){a=a||n;let s=Qu(a,r,o);return this._addEventListenerToNode(n,r,s),s}_addEventListenerToNode(n,r,o){n.addEventListener(r,o)}_removeEventListenerFromNode(n,r,o){n.removeEventListener(r,o)}}return e});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let oi=0;const ai=[],O={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},al="__computeInfo",td=/[A-Z]/;function or(t,e,i){let n=t[e];if(!n)n=t[e]={};else if(!t.hasOwnProperty(e)&&(n=t[e]=Object.create(t[e]),i))for(let r in n){let o=n[r],a=n[r]=Array(o.length);for(let s=0;s<o.length;s++)a[s]=o[s]}return n}function Rt(t,e,i,n,r,o){if(e){let a=!1;const s=oi++;for(let l in i){let c=r?ke(l):l,u=e[c];if(u)for(let d=0,p=u.length,h;d<p&&(h=u[d]);d++)(!h.info||h.info.lastRun!==s)&&(!r||so(l,h.trigger))&&(h.info&&(h.info.lastRun=s),h.fn(t,l,i,n,h.info,r,o),a=!0)}return a}return!1}function id(t,e,i,n,r,o,a,s){let l=!1,c=a?ke(n):n,u=e[c];if(u)for(let d=0,p=u.length,h;d<p&&(h=u[d]);d++)(!h.info||h.info.lastRun!==i)&&(!a||so(n,h.trigger))&&(h.info&&(h.info.lastRun=i),h.fn(t,n,r,o,h.info,a,s),l=!0);return l}function so(t,e){if(e){let i=e.name;return i==t||!!(e.structured&&Zs(i,t))||!!(e.wildcard&&ni(i,t))}else return!0}function oa(t,e,i,n,r){let o=typeof r.method=="string"?t[r.method]:r.method,a=r.property;o?o.call(t,t.__data[a],n[a]):r.dynamicFn||console.warn("observer method `"+r.method+"` not defined")}function nd(t,e,i,n,r){let o=t[O.NOTIFY],a,s=oi++;for(let c in e)e[c]&&(o&&id(t,o,s,c,i,n,r)||r&&rd(t,c,i))&&(a=!0);let l;a&&(l=t.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function rd(t,e,i){let n=ke(e);if(n!==e){let r=Hn(n)+"-changed";return sl(t,r,i[e],e),!0}return!1}function sl(t,e,i,n){let r={value:i,queueProperty:!0};n&&(r.path=n),A(t).dispatchEvent(new CustomEvent(e,{detail:r}))}function od(t,e,i,n,r,o){let s=(o?ke(e):e)!=e?e:null,l=s?k(t,s):t.__data[e];s&&l===void 0&&(l=i[e]),sl(t,r.eventName,l,s)}function ad(t,e,i,n,r){let o,a=t.detail,s=a&&a.path;s?(n=ri(i,n,s),o=a&&a.value):o=t.currentTarget[i],o=r?!o:o,(!e[O.READ_ONLY]||!e[O.READ_ONLY][n])&&e._setPendingPropertyOrPath(n,o,!0,!!s)&&(!a||!a.queueProperty)&&e._invalidateProperties()}function sd(t,e,i,n,r){let o=t.__data[e];an&&(o=an(o,r.attrName,"attribute",t)),t._propertyToAttribute(e,r.attrName,o)}function ld(t,e,i,n){let r=t[O.COMPUTE];if(r)if(Cu){oi++;const o=ud(t),a=[];for(let l in e)aa(l,r,a,o,n);let s;for(;s=a.shift();)ll(t,"",e,i,s)&&aa(s.methodInfo,r,a,o,n);Object.assign(i,t.__dataOld),Object.assign(e,t.__dataPending),t.__dataPending=null}else{let o=e;for(;Rt(t,r,o,i,n);)Object.assign(i,t.__dataOld),Object.assign(e,t.__dataPending),o=t.__dataPending,t.__dataPending=null}}const cd=(t,e,i)=>{let n=0,r=e.length-1,o=-1;for(;n<=r;){const a=n+r>>1,s=i.get(e[a].methodInfo)-i.get(t.methodInfo);if(s<0)n=a+1;else if(s>0)r=a-1;else{o=a;break}}o<0&&(o=r+1),e.splice(o,0,t)},aa=(t,e,i,n,r)=>{const o=r?ke(t):t,a=e[o];if(a)for(let s=0;s<a.length;s++){const l=a[s];l.info.lastRun!==oi&&(!r||so(t,l.trigger))&&(l.info.lastRun=oi,cd(l.info,i,n))}};function ud(t){let e=t.constructor.__orderedComputedDeps;if(!e){e=new Map;const i=t[O.COMPUTE];let{counts:n,ready:r,total:o}=dd(t),a;for(;a=r.shift();){e.set(a,e.size);const s=i[a];s&&s.forEach(l=>{const c=l.info.methodInfo;--o,--n[c]===0&&r.push(c)})}o!==0&&console.warn(`Computed graph for ${t.localName} incomplete; circular?`),t.constructor.__orderedComputedDeps=e}return e}function dd(t){const e=t[al],i={},n=t[O.COMPUTE],r=[];let o=0;for(let a in e){const s=e[a];o+=i[a]=s.args.filter(l=>!l.literal).length+(s.dynamicFn?1:0)}for(let a in n)e[a]||r.push(a);return{counts:i,ready:r,total:o}}function ll(t,e,i,n,r){let o=Pr(t,e,i,n,r);if(o===ai)return!1;let a=r.methodInfo;return t.__dataHasAccessor&&t.__dataHasAccessor[a]?t._setPendingProperty(a,o,!0):(t[a]=o,!1)}function pd(t,e,i){let n=t.__dataLinkedPaths;if(n){let r;for(let o in n){let a=n[o];ni(o,e)?(r=ri(o,a,e),t._setPendingPropertyOrPath(r,i,!0,!0)):ni(a,e)&&(r=ri(a,o,e),t._setPendingPropertyOrPath(r,i,!0,!0))}}}function ar(t,e,i,n,r,o,a){i.bindings=i.bindings||[];let s={kind:n,target:r,parts:o,literal:a,isCompound:o.length!==1};if(i.bindings.push(s),bd(s)){let{event:c,negate:u}=s.parts[0];s.listenerEvent=c||Hn(r)+"-changed",s.listenerNegate=u}let l=e.nodeInfoList.length;for(let c=0;c<s.parts.length;c++){let u=s.parts[c];u.compoundIndex=c,hd(t,e,s,u,l)}}function hd(t,e,i,n,r){if(!n.literal)if(i.kind==="attribute"&&i.target[0]==="-")console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let o=n.dependencies,a={index:r,binding:i,part:n,evaluator:t};for(let s=0;s<o.length;s++){let l=o[s];typeof l=="string"&&(l=ul(l),l.wildcard=!0),t._addTemplatePropertyEffect(e,l.rootProperty,{fn:fd,info:a,trigger:l})}}}function fd(t,e,i,n,r,o,a){let s=a[r.index],l=r.binding,c=r.part;if(o&&c.source&&e.length>c.source.length&&l.kind=="property"&&!l.isCompound&&s.__isPropertyEffectsClient&&s.__dataHasAccessor&&s.__dataHasAccessor[l.target]){let u=i[e];e=ri(c.source,l.target,e),s._setPendingPropertyOrPath(e,u,!1,!0)&&t._enqueueClient(s)}else{let u=r.evaluator._evaluateBinding(t,c,e,i,n,o);u!==ai&&md(t,s,l,c,u)}}function md(t,e,i,n,r){if(r=gd(e,r,i,n),an&&(r=an(r,i.target,i.kind,e)),i.kind=="attribute")t._valueToNodeAttribute(e,r,i.target);else{let o=i.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[o]?(!e[O.READ_ONLY]||!e[O.READ_ONLY][o])&&e._setPendingProperty(o,r)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,o,r)}}function gd(t,e,i,n){if(i.isCompound){let r=t.__dataCompoundStorage[i.target];r[n.compoundIndex]=e,e=r.join("")}return i.kind!=="attribute"&&(i.target==="textContent"||i.target==="value"&&(t.localName==="input"||t.localName==="textarea"))&&(e=e??""),e}function bd(t){return!!t.target&&t.kind!="attribute"&&t.kind!="text"&&!t.isCompound&&t.parts[0].mode==="{"}function yd(t,e){let{nodeList:i,nodeInfoList:n}=e;if(n.length)for(let r=0;r<n.length;r++){let o=n[r],a=i[r],s=o.bindings;if(s)for(let l=0;l<s.length;l++){let c=s[l];vd(a,c),_d(a,t,c)}a.__dataHost=t}}function vd(t,e){if(e.isCompound){let i=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),n=e.parts,r=new Array(n.length);for(let a=0;a<n.length;a++)r[a]=n[a].literal;let o=e.target;i[o]=r,e.literal&&e.kind=="property"&&(o==="className"&&(t=A(t)),t[o]=e.literal)}}function _d(t,e,i){if(i.listenerEvent){let n=i.parts[0];t.addEventListener(i.listenerEvent,function(r){ad(r,e,i.target,n.source,n.negate)})}}function sa(t,e,i,n,r,o){o=e.static||o&&(typeof o!="object"||o[e.methodName]);let a={methodName:e.methodName,args:e.args,methodInfo:r,dynamicFn:o};for(let s=0,l;s<e.args.length&&(l=e.args[s]);s++)l.literal||t._addPropertyEffect(l.rootProperty,i,{fn:n,info:a,trigger:l});return o&&t._addPropertyEffect(e.methodName,i,{fn:n,info:a}),a}function Pr(t,e,i,n,r){let o=t._methodHost||t,a=o[r.methodName];if(a){let s=t._marshalArgs(r.args,e,i);return s===ai?ai:a.apply(o,s)}else r.dynamicFn||console.warn("method `"+r.methodName+"` not defined")}const xd=[],cl="(?:[a-zA-Z_$][\\w.:$\\-*]*)",wd="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",Cd="(?:'(?:[^'\\\\]|\\\\.)*')",Sd='(?:"(?:[^"\\\\]|\\\\.)*")',zd="(?:"+Cd+"|"+Sd+")",la="(?:("+cl+"|"+wd+"|"+zd+")\\s*)",Ad="(?:"+la+"(?:,\\s*"+la+")*)",Ed="(?:\\(\\s*(?:"+Ad+"?)\\)\\s*)",Md="("+cl+"\\s*"+Ed+"?)",kd="(\\[\\[|{{)\\s*",Ld="(?:]]|}})",$d="(?:(!)\\s*)?",Od=kd+$d+Md+Ld,ca=new RegExp(Od,"g");function ua(t){let e="";for(let i=0;i<t.length;i++){let n=t[i].literal;e+=n||""}return e}function sr(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let n={methodName:e[1],static:!0,args:xd};if(e[2].trim()){let r=e[2].replace(/\\,/g,"&comma;").split(",");return Td(r,n)}else return n}return null}function Td(t,e){return e.args=t.map(function(i){let n=ul(i);return n.literal||(e.static=!1),n},this),e}function ul(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:e,value:"",literal:!1},n=e[0];switch(n==="-"&&(n=e[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':i.value=e.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(e),i.literal=!0;break}return i.literal||(i.rootProperty=ke(e),i.structured=$r(e),i.structured&&(i.wildcard=e.slice(-2)==".*",i.wildcard&&(i.name=e.slice(0,-2)))),i}function da(t,e,i){let n=k(t,i);return n===void 0&&(n=e[i]),n}function dl(t,e,i,n){const r={indexSplices:n};kr&&!t._overrideLegacyUndefined&&(e.splices=r),t.notifyPath(i+".splices",r),t.notifyPath(i+".length",e.length),kr&&!t._overrideLegacyUndefined&&(r.indexSplices=[])}function Mt(t,e,i,n,r,o){dl(t,e,i,[{index:n,addedCount:r,removed:o,object:e,type:"splice"}])}function Pd(t){return t[0].toUpperCase()+t.substring(1)}const Rn=re(t=>{const e=ed(rl(t));class i extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return O}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(kt.length){let r=kt[kt.length-1];r._enqueueClient(this),this.__dataHost=r}}_initializeProtoProperties(r){this.__data=Object.create(r),this.__dataPending=Object.create(r),this.__dataOld={}}_initializeInstanceProperties(r){let o=this[O.READ_ONLY];for(let a in r)(!o||!o[a])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[a]=this.__dataPending[a]=r[a])}_addPropertyEffect(r,o,a){this._createPropertyAccessor(r,o==O.READ_ONLY);let s=or(this,o,!0)[r];s||(s=this[o][r]=[]),s.push(a)}_removePropertyEffect(r,o,a){let s=or(this,o,!0)[r],l=s.indexOf(a);l>=0&&s.splice(l,1)}_hasPropertyEffect(r,o){let a=this[o];return!!(a&&a[r])}_hasReadOnlyEffect(r){return this._hasPropertyEffect(r,O.READ_ONLY)}_hasNotifyEffect(r){return this._hasPropertyEffect(r,O.NOTIFY)}_hasReflectEffect(r){return this._hasPropertyEffect(r,O.REFLECT)}_hasComputedEffect(r){return this._hasPropertyEffect(r,O.COMPUTE)}_setPendingPropertyOrPath(r,o,a,s){if(s||ke(Array.isArray(r)?r[0]:r)!==r){if(!s){let l=k(this,r);if(r=Or(this,r,o),!r||!super._shouldPropertyChange(r,o,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(r,o,a))return pd(this,r,o),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[r])return this._setPendingProperty(r,o,a);this[r]=o}return!1}_setUnmanagedPropertyToNode(r,o,a){(a!==r[o]||typeof a=="object")&&(o==="className"&&(r=A(r)),r[o]=a)}_setPendingProperty(r,o,a){let s=this.__dataHasPaths&&$r(r),l=s?this.__dataTemp:this.__data;return this._shouldPropertyChange(r,o,l[r])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),r in this.__dataOld||(this.__dataOld[r]=this.__data[r]),s?this.__dataTemp[r]=o:this.__data[r]=o,this.__dataPending[r]=o,(s||this[O.NOTIFY]&&this[O.NOTIFY][r])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[r]=a),!0):!1}_setProperty(r,o){this._setPendingProperty(r,o,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(r){this.__dataPendingClients=this.__dataPendingClients||[],r!==this&&this.__dataPendingClients.push(r)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let r=this.__dataPendingClients;if(r){this.__dataPendingClients=null;for(let o=0;o<r.length;o++){let a=r[o];a.__dataEnabled?a.__dataPending&&a._flushProperties():a._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(r,o){for(let a in r)(o||!this[O.READ_ONLY]||!this[O.READ_ONLY][a])&&this._setPendingPropertyOrPath(a,r[a],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(r,o,a){let s=this.__dataHasPaths;this.__dataHasPaths=!1;let l;ld(this,o,a,s),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(o,a,s),this._flushClients(),Rt(this,this[O.REFLECT],o,a,s),Rt(this,this[O.OBSERVE],o,a,s),l&&nd(this,l,o,a,s),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(r,o,a){this[O.PROPAGATE]&&Rt(this,this[O.PROPAGATE],r,o,a),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,r,o,a)}_runEffectsForTemplate(r,o,a,s){const l=(c,u)=>{Rt(this,r.propertyEffects,c,a,u,r.nodeList);for(let d=r.firstChild;d;d=d.nextSibling)this._runEffectsForTemplate(d,c,a,u)};r.runEffects?r.runEffects(l,o,s):l(o,s)}linkPaths(r,o){r=Ht(r),o=Ht(o),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[r]=o}unlinkPaths(r){r=Ht(r),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[r]}notifySplices(r,o){let a={path:""},s=k(this,r,a);dl(this,s,a.path,o)}get(r,o){return k(o||this,r)}set(r,o,a){a?Or(a,r,o):(!this[O.READ_ONLY]||!this[O.READ_ONLY][r])&&this._setPendingPropertyOrPath(r,o,!0)&&this._invalidateProperties()}push(r,...o){let a={path:""},s=k(this,r,a),l=s.length,c=s.push(...o);return o.length&&Mt(this,s,a.path,l,o.length,[]),c}pop(r){let o={path:""},a=k(this,r,o),s=!!a.length,l=a.pop();return s&&Mt(this,a,o.path,a.length,0,[l]),l}splice(r,o,a,...s){let l={path:""},c=k(this,r,l);o<0?o=c.length-Math.floor(-o):o&&(o=Math.floor(o));let u;return arguments.length===2?u=c.splice(o):u=c.splice(o,a,...s),(s.length||u.length)&&Mt(this,c,l.path,o,s.length,u),u}shift(r){let o={path:""},a=k(this,r,o),s=!!a.length,l=a.shift();return s&&Mt(this,a,o.path,0,0,[l]),l}unshift(r,...o){let a={path:""},s=k(this,r,a),l=s.unshift(...o);return o.length&&Mt(this,s,a.path,0,o.length,[]),l}notifyPath(r,o){let a;if(arguments.length==1){let s={path:""};o=k(this,r,s),a=s.path}else Array.isArray(r)?a=Ht(r):a=r;this._setPendingPropertyOrPath(a,o,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(r,o){this._addPropertyEffect(r,O.READ_ONLY),o&&(this["_set"+Pd(r)]=function(a){this._setProperty(r,a)})}_createPropertyObserver(r,o,a){let s={property:r,method:o,dynamicFn:!!a};this._addPropertyEffect(r,O.OBSERVE,{fn:oa,info:s,trigger:{name:r}}),a&&this._addPropertyEffect(o,O.OBSERVE,{fn:oa,info:s,trigger:{name:o}})}_createMethodObserver(r,o){let a=sr(r);if(!a)throw new Error("Malformed observer expression '"+r+"'");sa(this,a,O.OBSERVE,Pr,null,o)}_createNotifyingProperty(r){this._addPropertyEffect(r,O.NOTIFY,{fn:od,info:{eventName:Hn(r)+"-changed",property:r}})}_createReflectedProperty(r){let o=this.constructor.attributeNameForProperty(r);o[0]==="-"?console.warn("Property "+r+" cannot be reflected to attribute "+o+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(r,O.REFLECT,{fn:sd,info:{attrName:o}})}_createComputedProperty(r,o,a){let s=sr(o);if(!s)throw new Error("Malformed computed expression '"+o+"'");const l=sa(this,s,O.COMPUTE,ll,r,a);or(this,al)[r]=l}_marshalArgs(r,o,a){const s=this.__data,l=[];for(let c=0,u=r.length;c<u;c++){let{name:d,structured:p,wildcard:h,value:f,literal:m}=r[c];if(!m)if(h){const b=ni(d,o),y=da(s,a,b?o:d);f={path:b?o:d,value:y,base:b?k(s,d):y}}else f=p?da(s,a,d):s[d];if(kr&&!this._overrideLegacyUndefined&&f===void 0&&r.length>1)return ai;l[c]=f}return l}static addPropertyEffect(r,o,a){this.prototype._addPropertyEffect(r,o,a)}static createPropertyObserver(r,o,a){this.prototype._createPropertyObserver(r,o,a)}static createMethodObserver(r,o){this.prototype._createMethodObserver(r,o)}static createNotifyingProperty(r){this.prototype._createNotifyingProperty(r)}static createReadOnlyProperty(r,o){this.prototype._createReadOnlyProperty(r,o)}static createReflectedProperty(r){this.prototype._createReflectedProperty(r)}static createComputedProperty(r,o,a){this.prototype._createComputedProperty(r,o,a)}static bindTemplate(r){return this.prototype._bindTemplate(r)}_bindTemplate(r,o){let a=this.constructor._parseTemplate(r),s=this.__preBoundTemplateInfo==a;if(!s)for(let l in a.propertyEffects)this._createPropertyAccessor(l);if(o)if(a=Object.create(a),a.wasPreBound=s,!this.__templateInfo)this.__templateInfo=a;else{const l=r._parentTemplateInfo||this.__templateInfo,c=l.lastChild;a.parent=l,l.lastChild=a,a.previousSibling=c,c?c.nextSibling=a:l.firstChild=a}else this.__preBoundTemplateInfo=a;return a}static _addTemplatePropertyEffect(r,o,a){let s=r.hostProps=r.hostProps||{};s[o]=!0;let l=r.propertyEffects=r.propertyEffects||{};(l[o]=l[o]||[]).push(a)}_stampTemplate(r,o){o=o||this._bindTemplate(r,!0),kt.push(this);let a=super._stampTemplate(r,o);if(kt.pop(),o.nodeList=a.nodeList,!o.wasPreBound){let s=o.childNodes=[];for(let l=a.firstChild;l;l=l.nextSibling)s.push(l)}return a.templateInfo=o,yd(this,o),this.__dataClientsReady&&(this._runEffectsForTemplate(o,this.__data,null,!1),this._flushClients()),a}_removeBoundDom(r){const o=r.templateInfo,{previousSibling:a,nextSibling:s,parent:l}=o;a?a.nextSibling=s:l&&(l.firstChild=s),s?s.previousSibling=a:l&&(l.lastChild=a),o.nextSibling=o.previousSibling=null;let c=o.childNodes;for(let u=0;u<c.length;u++){let d=c[u];A(A(d).parentNode).removeChild(d)}}static _parseTemplateNode(r,o,a){let s=e._parseTemplateNode.call(this,r,o,a);if(r.nodeType===Node.TEXT_NODE){let l=this._parseBindings(r.textContent,o);l&&(r.textContent=ua(l)||" ",ar(this,o,a,"text","textContent",l),s=!0)}return s}static _parseTemplateNodeAttribute(r,o,a,s,l){let c=this._parseBindings(l,o);if(c){let u=s,d="property";td.test(s)?d="attribute":s[s.length-1]=="$"&&(s=s.slice(0,-1),d="attribute");let p=ua(c);return p&&d=="attribute"&&(s=="class"&&r.hasAttribute("class")&&(p+=" "+r.getAttribute(s)),r.setAttribute(s,p)),d=="attribute"&&u=="disable-upgrade$"&&r.setAttribute(s,""),r.localName==="input"&&u==="value"&&r.setAttribute(u,""),r.removeAttribute(u),d==="property"&&(s=ao(s)),ar(this,o,a,d,s,c,p),!0}else return e._parseTemplateNodeAttribute.call(this,r,o,a,s,l)}static _parseTemplateNestedTemplate(r,o,a){let s=e._parseTemplateNestedTemplate.call(this,r,o,a);const l=r.parentNode,c=a.templateInfo,u=l.localName==="dom-if",d=l.localName==="dom-repeat";Zo&&(u||d)&&(l.removeChild(r),a=a.parentInfo,a.templateInfo=c,a.noted=!0,s=!1);let p=c.hostProps;if(Js&&u)p&&(o.hostProps=Object.assign(o.hostProps||{},p),Zo||(a.parentInfo.noted=!0));else{let h="{";for(let f in p){let m=[{mode:h,source:f,dependencies:[f],hostProp:!0}];ar(this,o,a,"property","_host_"+f,m)}}return s}static _parseBindings(r,o){let a=[],s=0,l;for(;(l=ca.exec(r))!==null;){l.index>s&&a.push({literal:r.slice(s,l.index)});let c=l[1][0],u=!!l[2],d=l[3].trim(),p=!1,h="",f=-1;c=="{"&&(f=d.indexOf("::"))>0&&(h=d.substring(f+2),d=d.substring(0,f),p=!0);let m=sr(d),b=[];if(m){let{args:y,methodName:g}=m;for(let v=0;v<y.length;v++){let w=y[v];w.literal||b.push(w)}let x=o.dynamicFns;(x&&x[g]||m.static)&&(b.push(g),m.dynamicFn=!0)}else b.push(d);a.push({source:d,mode:c,negate:u,customEvent:p,signature:m,dependencies:b,event:h}),s=ca.lastIndex}if(s&&s<r.length){let c=r.substring(s);c&&a.push({literal:c})}return a.length?a:null}static _evaluateBinding(r,o,a,s,l,c){let u;return o.signature?u=Pr(r,a,s,l,o.signature):a!=o.source?u=k(r,o.source):c&&$r(a)?u=k(r,a):u=r.__data[a],o.negate&&(u=!u),u}}return i}),kt=[];/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Id(t){const e={};for(let i in t){const n=t[i];e[i]=typeof n=="function"?{type:n}:n}return e}const Hd=re(t=>{const e=il(t);function i(o){const a=Object.getPrototypeOf(o);return a.prototype instanceof r?a:null}function n(o){if(!o.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",o))){let a=null;if(o.hasOwnProperty(JSCompiler_renameProperty("properties",o))){const s=o.properties;s&&(a=Id(s))}o.__ownProperties=a}return o.__ownProperties}class r extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const a=this._properties;this.__observedAttributes=a?Object.keys(a).map(s=>this.prototype._addPropertyToAttributeMap(s)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const a=i(this);a&&a.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const a=n(this);a&&this.createProperties(a)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const a=i(this);this.__properties=Object.assign({},a&&a._properties,n(this))}return this.__properties}static typeForProperty(a){const s=this._properties[a];return s&&s.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return r});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const Rd="3.5.1",Ir=window.ShadyCSS&&window.ShadyCSS.cssBuild,Fn=re(t=>{const e=Hd(Rn(t));function i(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let c=l._properties;for(let u in c){let d=c[u];"value"in d&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[u]=d)}}return l.__propertyDefaults}function n(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function r(l,c,u,d){u.computed&&(u.readOnly=!0),u.computed&&(l._hasReadOnlyEffect(c)?console.warn(`Cannot redefine computed property '${c}'.`):l._createComputedProperty(c,u.computed,d)),u.readOnly&&!l._hasReadOnlyEffect(c)?l._createReadOnlyProperty(c,!u.computed):u.readOnly===!1&&l._hasReadOnlyEffect(c)&&console.warn(`Cannot make readOnly property '${c}' non-readOnly.`),u.reflectToAttribute&&!l._hasReflectEffect(c)?l._createReflectedProperty(c):u.reflectToAttribute===!1&&l._hasReflectEffect(c)&&console.warn(`Cannot make reflected property '${c}' non-reflected.`),u.notify&&!l._hasNotifyEffect(c)?l._createNotifyingProperty(c):u.notify===!1&&l._hasNotifyEffect(c)&&console.warn(`Cannot make notify property '${c}' non-notify.`),u.observer&&l._createPropertyObserver(c,u.observer,d[u.observer]),l._addPropertyToAttributeMap(c)}function o(l,c,u,d){if(!Ir){const p=c.content.querySelectorAll("style"),h=ro(c),f=$u(u),m=c.content.firstElementChild;for(let y=0;y<f.length;y++){let g=f[y];g.textContent=l._processStyleText(g.textContent,d),c.content.insertBefore(g,m)}let b=0;for(let y=0;y<h.length;y++){let g=h[y],x=p[b];x!==g?(g=g.cloneNode(!0),x.parentNode.insertBefore(g,x)):b++,g.textContent=l._processStyleText(g.textContent,d)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(c,u),Su&&Ir&&yu){const p=c.content.querySelectorAll("style");if(p){let h="";Array.from(p).forEach(f=>{h+=f.textContent,f.parentNode.removeChild(f)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(h)}}}function a(l){let c=null;if(l&&(!ft||xu)&&(c=ii.import(l,"template"),ft&&!c))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return c}class s extends e{static get polymerElementVersion(){return Rd}static _finalizeClass(){e._finalizeClass.call(this);const c=n(this);c&&this.createObservers(c,this._properties),this._prepareTemplate()}static _prepareTemplate(){let c=this.template;c&&(typeof c=="string"?(console.error("template getter must return HTMLTemplateElement"),c=null):ti||(c=c.cloneNode(!0))),this.prototype._template=c}static createProperties(c){for(let u in c)r(this.prototype,u,c[u],c)}static createObservers(c,u){const d=this.prototype;for(let p=0;p<c.length;p++)d._createMethodObserver(c[p],u)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let c=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof c=="function"&&(c=c()),this._template=c!==void 0?c:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&a(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(c){this._template=c}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const c=this.importMeta;if(c)this._importPath=to(c.url);else{const u=ii.import(this.is);this._importPath=u&&u.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=vu,this.importPath=this.constructor.importPath;let c=i(this.constructor);if(c)for(let u in c){let d=c[u];if(this._canApplyPropertyDefault(u)){let p=typeof d.value=="function"?d.value.call(this):d.value;this._hasAccessor(u)?this._setPendingProperty(u,p,!0):this[u]=p}}}_canApplyPropertyDefault(c){return!this.hasOwnProperty(c)}static _processStyleText(c,u){return eo(c,u)}static _finalizeTemplate(c){const u=this.prototype._template;if(u&&!u.__polymerFinalized){u.__polymerFinalized=!0;const d=this.importPath,p=d?Wt(d):"";o(this,u,c,p),this.prototype._bindTemplate(u)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(c){const u=A(this);if(u.attachShadow)return c?(u.shadowRoot||(u.attachShadow({mode:"open",shadyUpgradeFragment:c}),u.shadowRoot.appendChild(c),this.constructor._styleSheet&&(u.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),wu&&window.ShadyDOM&&window.ShadyDOM.flushInitial(u.shadowRoot),u.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(c){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,c)}resolveUrl(c,u){return!u&&this.importPath&&(u=Wt(this.importPath)),Wt(c,u)}static _parseTemplateContent(c,u,d){return u.dynamicFns=u.dynamicFns||this._properties,e._parseTemplateContent.call(this,c,u,d)}static _addTemplatePropertyEffect(c,u,d){return Ys&&!(u in this._properties)&&!(d.info.part.signature&&d.info.part.signature.static)&&!d.info.part.hostProp&&!c.nestedTemplate&&console.warn(`Property '${u}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,c,u,d)}}return s});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const pa=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:t=>t});class pl{constructor(e,i){fl(e,i);const n=i.reduce((r,o,a)=>r+hl(o)+e[a+1],e[0]);this.value=n.toString()}toString(){return this.value}}function hl(t){if(t instanceof pl)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}function Fd(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof pl)return hl(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}const q=function(e,...i){fl(e,i);const n=document.createElement("template");let r=i.reduce((o,a,s)=>o+Fd(a)+e[s+1],e[0]);return pa&&(r=pa.createHTML(r)),n.innerHTML=r,n},fl=(t,e)=>{if(!Array.isArray(t)||!Array.isArray(t.raw)||e.length!==t.length-1)throw new TypeError("Invalid call to the html template tag")};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const K=Fn(HTMLElement);let ln,ml=0;function ha(t){ln=t}function fa(){ln=null,ml=0}function Nd(){return ml++}const lr=Symbol("haunted.phase"),Ji=Symbol("haunted.hook"),ma=Symbol("haunted.update"),ga=Symbol("haunted.commit"),je=Symbol("haunted.effects"),Gt=Symbol("haunted.layoutEffects"),Hr="haunted.context";class Vd{update;host;virtual;[Ji];[je];[Gt];constructor(e,i){this.update=e,this.host=i,this[Ji]=new Map,this[je]=[],this[Gt]=[]}run(e){ha(this);let i=e();return fa(),i}_runEffects(e){let i=this[e];ha(this);for(let n of i)n.call(this);fa()}runEffects(){this._runEffects(je)}runLayoutEffects(){this._runEffects(Gt)}teardown(){this[Ji].forEach(i=>{typeof i.teardown=="function"&&i.teardown(!0)})}}const Dd=Promise.resolve().then.bind(Promise.resolve());function gl(){let t=[],e;function i(){e=null;let n=t;t=[];for(var r=0,o=n.length;r<o;r++)n[r]()}return function(n){t.push(n),e==null&&(e=Dd(i))}}const qd=gl(),ba=gl();class Bd{renderer;host;state;[lr];_updateQueued;_active;constructor(e,i){this.renderer=e,this.host=i,this.state=new Vd(this.update.bind(this),i),this[lr]=null,this._updateQueued=!1,this._active=!0}update(){this._active&&(this._updateQueued||(qd(()=>{let e=this.handlePhase(ma);ba(()=>{this.handlePhase(ga,e),ba(()=>{this.handlePhase(je)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,i){switch(this[lr]=e,e){case ga:this.commit(i),this.runEffects(Gt);return;case ma:return this.render();case je:return this.runEffects(je)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const lo=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},jd=t=>t?.map(e=>typeof e=="string"?lo(e):e),Ud=(t,...e)=>t.flatMap((i,n)=>[i,e[n]||""]).join(""),wt=Ud,Kd=(t="")=>t.replace(/-+([a-z])?/g,(e,i)=>i?i.toUpperCase():"");function Wd(t){class e extends Bd{frag;renderResult;constructor(r,o,a){super(r,a||o),this.frag=o}commit(r){this.renderResult=t(r,this.frag)}}function i(n,r,o){const a=(o||r||{}).baseElement||HTMLElement,{observedAttributes:s=[],useShadowDOM:l=!0,shadowRootInit:c={},styleSheets:u}=o||r||{},d=jd(n.styleSheets||u);class p extends a{_scheduler;static get observedAttributes(){return n.observedAttributes||s||[]}constructor(){if(super(),l===!1)this._scheduler=new e(n,this);else{const b=this.attachShadow({mode:"open",...c});d&&(b.adoptedStyleSheets=d),this._scheduler=new e(n,b,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(b,y,g){if(y===g)return;let x=g===""?!0:g;Reflect.set(this,Kd(b),x)}}function h(m){let b=m,y=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return b},set(g){y&&b===g||(y=!0,b=g,this._scheduler&&this._scheduler.update())}})}const f=new Proxy(a.prototype,{getPrototypeOf(m){return m},set(m,b,y,g){let x;return b in m?(x=Object.getOwnPropertyDescriptor(m,b),x&&x.set?(x.set.call(g,y),!0):(Reflect.set(m,b,y,g),!0)):(typeof b=="symbol"||b[0]==="_"?x={enumerable:!0,configurable:!0,writable:!0,value:y}:x=h(y),Object.defineProperty(g,b,x),x.set&&x.set.call(g,y),!0)}});return Object.setPrototypeOf(p.prototype,f),p}return i}class Fe{id;state;constructor(e,i){this.id=e,this.state=i}}function Gd(t,...e){let i=Nd(),n=ln[Ji],r=n.get(i);return r||(r=new t(i,ln,...e),n.set(i,r)),r.update(...e)}function Ne(t){return Gd.bind(null,t)}function bl(t){return Ne(class extends Fe{callback;lastValues;values;_teardown;constructor(e,i,n,r){super(e,i),t(i,this)}update(e,i){this.callback=e,this.values=i}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,i)=>this.lastValues[i]!==e)}})}function yl(t,e){t[je].push(e)}const $=bl(yl),Yd=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,fi=Ne(class extends Fe{Context;value;_ranEffect;_unsubscribe;constructor(t,e,i){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,yl(e,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};Yd(this.state.host).dispatchEvent(new CustomEvent(Hr,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:n=null,value:r}=e;this.value=n?r:t.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}});function Jd(t){return e=>{const i={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(Hr,this)}disconnectedCallback(){this.removeEventListener(Hr,this)}handleEvent(n){const{detail:r}=n;r.Context===i&&(r.value=this.value,r.unsubscribe=this.unsubscribe.bind(this,r.callback),this.listeners.add(r.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let r of this.listeners)r(n)}get value(){return this._value}},Consumer:t(function({render:n}){const r=fi(i);return n(r)},{useShadowDOM:!1}),defaultValue:e};return i}}const M=Ne(class extends Fe{value;values;constructor(t,e,i,n){super(t,e),this.value=i(),this.values=n}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((e,i)=>this.values[i]!==e)}}),z=(t,e)=>M(()=>t,e);function Xd(t,e){t[Gt].push(e)}const si=bl(Xd),U=Ne(class extends Fe{args;constructor(t,e,i){super(t,e),this.updater=this.updater.bind(this),typeof i=="function"&&(i=i()),this.makeArgs(i)}update(){return this.args}updater(t){const[e]=this.args;typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}});Ne(class extends Fe{reducer;currentState;constructor(t,e,i,n,r){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=r!==void 0?r(n):n}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}});const Zd=/([A-Z])/gu;Ne(class extends Fe{property;eventName;constructor(t,e,i,n){if(super(t,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=i,this.eventName=i.replace(Zd,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof n=="function"&&(n=n()),n!=null&&this.updateProp(n))}update(t,e){return[this.state.host[this.property],this.updater]}updater(t){const e=this.state.host[this.property];typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&this.updateProp(t)}updateProp(t){this.notify(t).defaultPrevented||(this.state.host[this.property]=t)}notify(t){const e=new CustomEvent(this.eventName,{detail:{value:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(e),e}});function mi(t){return M(()=>({current:t}),[])}function Qd({render:t}){const e=Wd(t),i=Jd(e);return{component:e,createContext:i}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Le=t=>(...e)=>({_$litDirective$:t,values:e});let Ct=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,n){this._$Ct=e,this._$AM=i,this._$Ci=n}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yt=(t,e)=>{const i=t._$AN;if(i===void 0)return!1;for(const n of i)n._$AO?.(e,!1),Yt(n,e);return!0},cn=t=>{let e,i;do{if((e=t._$AM)===void 0)break;i=e._$AN,i.delete(t),t=e}while(i?.size===0)},vl=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(i===void 0)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),ip(e)}};function ep(t){this._$AN!==void 0?(cn(this),this._$AM=t,vl(this)):this._$AM=t}function tp(t,e=!1,i=0){const n=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(n))for(let o=i;o<n.length;o++)Yt(n[o],!1),cn(n[o]);else n!=null&&(Yt(n,!1),cn(n));else Yt(this,t)}const ip=t=>{t.type==ge.CHILD&&(t._$AP??=tp,t._$AQ??=ep)};class Nn extends Ct{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,i,n){super._$AT(e,i,n),vl(this),this.isConnected=e._$AU}_$AO(e,i=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),i&&(Yt(this,e),cn(this))}setValue(e){if(Ks(this._$Ct))this._$Ct._$AI(e,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=e,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}const{component:V,createContext:co}=Qd({render:on}),np={duration:250},_l=t=>(e,i,n)=>{const r="max"+t.charAt(0).toUpperCase()+t.slice(1);Object.assign(e.style,{[r]:"",display:""});const{[t]:o}=e.getBoundingClientRect(),a=[0,o],[s,l]=i?a:a.slice().reverse(),c=e.animate([{[r]:`${s}px`},{[r]:`${l}px`}],{...np,...n});c.onfinish=()=>Object.assign(e.style,{[r]:"",display:i?"":"none"})};function rp(t){return()=>t}const op=rp(),xl=op,Ke=t=>t;function Vn(t,...e){return typeof t=="function"?t(...e):t}const wl=co(()=>xl);customElements.define("cosmoz-keybinding-provider",wl.Provider);const we=t=>{const e=M(()=>({}),[]);return M(()=>Object.assign(e,t),[e,...Object.values(t)])},ap=(t,e)=>{const i=fi(wl),n=we(t);$(()=>i(n),e)},ya=t=>t.matches(":focus-within"),sp=({disabled:t,onFocus:e})=>{const[i,n]=U(),{focused:r,closed:o}=i||{},a=r&&!t,s=we({closed:o,onFocus:e}),l=z(u=>n(d=>({...d,closed:u})),[]),c=z(u=>{const d=u.currentTarget;return ya(d)?n(p=>({focused:!0,closed:!p?.closed})):d.focus()},[]);return $(()=>{if(!a)return;const u=d=>{if(d.defaultPrevented)return;const{closed:p}=s;d.key==="Escape"&&!p?(d.preventDefault(),l(!0)):["ArrowUp","Up"].includes(d.key)&&p&&(d.preventDefault(),l(!1))};return document.addEventListener("keydown",u,!0),()=>document.removeEventListener("keydown",u,!0)},[a]),{focused:a,active:a&&!o,setClosed:l,onToggle:c,onFocus:z(u=>{const d=ya(u.currentTarget);n({focused:d}),s.onFocus?.(d)},[s])}},va=["focusin","focusout"],lp=t=>{const e=sp(t),{onFocus:i}=e;return $(()=>(t.setAttribute("tabindex","0"),va.forEach(n=>t.addEventListener(n,i)),()=>{va.forEach(n=>t.removeEventListener(n,i))}),[]),e},cp=typeof window=="object"&&typeof document=="object";cp&&navigator.userAgent.indexOf("AppleWebKit")>-1;const up=wt`
	:host {
		display: contents;
		max-height: var(--cosmoz-dropdown-menu-max-height, calc(96vh - 64px));
		overflow-y: auto;
	}
	::slotted(:not(slot)) {
		display: block;
		--paper-button_-_display: block;
		box-sizing: border-box;
		padding: 10px 24px;
		background: transparent;
		color: var(--cosmoz-dropdown-menu-color, #101010);
		transition:
			background 0.25s,
			color 0.25s;
		border: none;
		cursor: pointer;
		font-size: 14px;
		line-height: 20px;
		text-align: left;
		margin: 0;
		width: 100%;
	}

	::slotted(:not(slot):hover) {
		background: var(
			--cosmoz-dropdown-menu-hover-color,
			var(--cosmoz-selection-color, rgba(58, 145, 226, 0.1))
		);
	}

	::slotted(:not(slot)[disabled]) {
		opacity: 0.5;
		pointer-events: none;
	}
`,dp=()=>_` <slot></slot> `;customElements.define("cosmoz-dropdown-list",V(dp,{styleSheets:[up]}));const pp=({placement:t})=>_` <cosmoz-dropdown
		.placement=${t}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;customElements.define("cosmoz-dropdown-menu",V(pp));/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function G(t,e,i){return t?e(t):i?.(t)}const cr=new WeakMap,We=Le(class extends Nn{render(t){return ne}update(t,[e]){const i=e!==this.G;return i&&this.G!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),ne}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let i=cr.get(e);i===void 0&&(i=new WeakMap,cr.set(e,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?cr.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cl="important",hp=" !"+Cl,Sl=Le(class extends Ct{constructor(t){if(super(t),t.type!==ge.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const n=t[i];return n==null?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(t,[e]){const{style:i}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const n of this.ft)e[n]==null&&(this.ft.delete(n),n.includes("-")?i.removeProperty(n):i[n]=null);for(const n in e){const r=e[n];if(r!=null){this.ft.add(n);const o=typeof r=="string"&&r.endsWith(hp);n.includes("-")||o?i.setProperty(n,o?r.slice(0,-11):r,o?Cl:""):i[n]=r}}return ee}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fp={},uo=Le(class extends Ct{constructor(){super(...arguments),this.ot=fp}render(t,e){return e()}update(t,[e,i]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((n,r)=>n===this.ot[r]))return ee}else if(this.ot===e)return ee;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,i)}}),mp=(t=HTMLElement)=>class extends t{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},gp=wt`
	:host {
		position: fixed;
		left: -9999999999px;
		min-width: 72px;
		box-sizing: border-box;
		padding: var(--cosmoz-dropdown-spacing, 0px);
		z-index: var(--cosmoz-dropdown-z-index, 2);
	}
	:host(:popover-open) {
		margin: 0;
		border: 0;
		padding: 0;
		overflow: visible;
	}
	.wrap {
		background: var(--cosmoz-dropdown-bg-color, #fff);
		box-shadow: var(
			--cosmoz-dropdown-box-shadow,
			0px 3px 4px 2px rgba(0, 0, 0, 0.1)
		);
	}
	::slotted(*) {
		display: block;
	}
`,bp=()=>_`<div class="wrap" part="wrap"><slot></slot></div>`;customElements.define("cosmoz-dropdown-content",mp(V(bp,{styleSheets:[gp]})));const mt=Math.min,le=Math.max,un=Math.round,Ai=Math.floor,_e=t=>({x:t,y:t}),yp={left:"right",right:"left",bottom:"top",top:"bottom"},vp={start:"end",end:"start"};function _a(t,e,i){return le(t,mt(e,i))}function Dn(t,e){return typeof t=="function"?t(e):t}function Ge(t){return t.split("-")[0]}function qn(t){return t.split("-")[1]}function zl(t){return t==="x"?"y":"x"}function Al(t){return t==="y"?"height":"width"}function gt(t){return["top","bottom"].includes(Ge(t))?"y":"x"}function El(t){return zl(gt(t))}function _p(t,e,i){i===void 0&&(i=!1);const n=qn(t),r=El(t),o=Al(r);let a=r==="x"?n===(i?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[o]>e.floating[o]&&(a=dn(a)),[a,dn(a)]}function xp(t){const e=dn(t);return[Rr(t),e,Rr(e)]}function Rr(t){return t.replace(/start|end/g,e=>vp[e])}function wp(t,e,i){const n=["left","right"],r=["right","left"],o=["top","bottom"],a=["bottom","top"];switch(t){case"top":case"bottom":return i?e?r:n:e?n:r;case"left":case"right":return e?o:a;default:return[]}}function Cp(t,e,i,n){const r=qn(t);let o=wp(Ge(t),i==="start",n);return r&&(o=o.map(a=>a+"-"+r),e&&(o=o.concat(o.map(Rr)))),o}function dn(t){return t.replace(/left|right|bottom|top/g,e=>yp[e])}function Sp(t){return{top:0,right:0,bottom:0,left:0,...t}}function zp(t){return typeof t!="number"?Sp(t):{top:t,right:t,bottom:t,left:t}}function pn(t){const{x:e,y:i,width:n,height:r}=t;return{width:n,height:r,top:i,left:e,right:e+n,bottom:i+r,x:e,y:i}}function xa(t,e,i){let{reference:n,floating:r}=t;const o=gt(e),a=El(e),s=Al(a),l=Ge(e),c=o==="y",u=n.x+n.width/2-r.width/2,d=n.y+n.height/2-r.height/2,p=n[s]/2-r[s]/2;let h;switch(l){case"top":h={x:u,y:n.y-r.height};break;case"bottom":h={x:u,y:n.y+n.height};break;case"right":h={x:n.x+n.width,y:d};break;case"left":h={x:n.x-r.width,y:d};break;default:h={x:n.x,y:n.y}}switch(qn(e)){case"start":h[a]-=p*(i&&c?-1:1);break;case"end":h[a]+=p*(i&&c?-1:1);break}return h}const Ap=async(t,e,i)=>{const{placement:n="bottom",strategy:r="absolute",middleware:o=[],platform:a}=i,s=o.filter(Boolean),l=await(a.isRTL==null?void 0:a.isRTL(e));let c=await a.getElementRects({reference:t,floating:e,strategy:r}),{x:u,y:d}=xa(c,n,l),p=n,h={},f=0;for(let m=0;m<s.length;m++){const{name:b,fn:y}=s[m],{x:g,y:x,data:v,reset:w}=await y({x:u,y:d,initialPlacement:n,placement:p,strategy:r,middlewareData:h,rects:c,platform:a,elements:{reference:t,floating:e}});u=g??u,d=x??d,h={...h,[b]:{...h[b],...v}},w&&f<=50&&(f++,typeof w=="object"&&(w.placement&&(p=w.placement),w.rects&&(c=w.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:r}):w.rects),{x:u,y:d}=xa(c,p,l)),m=-1)}return{x:u,y:d,placement:p,strategy:r,middlewareData:h}};async function po(t,e){var i;e===void 0&&(e={});const{x:n,y:r,platform:o,rects:a,elements:s,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:p=!1,padding:h=0}=Dn(e,t),f=zp(h),b=s[p?d==="floating"?"reference":"floating":d],y=pn(await o.getClippingRect({element:(i=await(o.isElement==null?void 0:o.isElement(b)))==null||i?b:b.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(s.floating)),boundary:c,rootBoundary:u,strategy:l})),g=d==="floating"?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,x=await(o.getOffsetParent==null?void 0:o.getOffsetParent(s.floating)),v=await(o.isElement==null?void 0:o.isElement(x))?await(o.getScale==null?void 0:o.getScale(x))||{x:1,y:1}:{x:1,y:1},w=pn(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:g,offsetParent:x,strategy:l}):g);return{top:(y.top-w.top+f.top)/v.y,bottom:(w.bottom-y.bottom+f.bottom)/v.y,left:(y.left-w.left+f.left)/v.x,right:(w.right-y.right+f.right)/v.x}}const Ep=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var i,n;const{placement:r,middlewareData:o,rects:a,initialPlacement:s,platform:l,elements:c}=e,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:m=!0,...b}=Dn(t,e);if((i=o.arrow)!=null&&i.alignmentOffset)return{};const y=Ge(r),g=gt(s),x=Ge(s)===s,v=await(l.isRTL==null?void 0:l.isRTL(c.floating)),w=p||(x||!m?[dn(s)]:xp(s)),C=f!=="none";!p&&C&&w.push(...Cp(s,m,f,v));const S=[s,...w],E=await po(e,b),F=[];let T=((n=o.flip)==null?void 0:n.overflows)||[];if(u&&F.push(E[y]),d){const D=_p(r,a,v);F.push(E[D[0]],E[D[1]])}if(T=[...T,{placement:r,overflows:F}],!F.every(D=>D<=0)){var oe,Y;const D=(((oe=o.flip)==null?void 0:oe.index)||0)+1,N=S[D];if(N)return{data:{index:D,overflows:T},reset:{placement:N}};let W=(Y=T.filter(P=>P.overflows[0]<=0).sort((P,X)=>P.overflows[1]-X.overflows[1])[0])==null?void 0:Y.placement;if(!W)switch(h){case"bestFit":{var j;const P=(j=T.filter(X=>{if(C){const ae=gt(X.placement);return ae===g||ae==="y"}return!0}).map(X=>[X.placement,X.overflows.filter(ae=>ae>0).reduce((ae,Qe)=>ae+Qe,0)]).sort((X,ae)=>X[1]-ae[1])[0])==null?void 0:j[0];P&&(W=P);break}case"initialPlacement":W=s;break}if(r!==W)return{reset:{placement:W}}}return{}}}},Mp=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:n,placement:r}=e,{mainAxis:o=!0,crossAxis:a=!1,limiter:s={fn:b=>{let{x:y,y:g}=b;return{x:y,y:g}}},...l}=Dn(t,e),c={x:i,y:n},u=await po(e,l),d=gt(Ge(r)),p=zl(d);let h=c[p],f=c[d];if(o){const b=p==="y"?"top":"left",y=p==="y"?"bottom":"right",g=h+u[b],x=h-u[y];h=_a(g,h,x)}if(a){const b=d==="y"?"top":"left",y=d==="y"?"bottom":"right",g=f+u[b],x=f-u[y];f=_a(g,f,x)}const m=s.fn({...e,[p]:h,[d]:f});return{...m,data:{x:m.x-i,y:m.y-n,enabled:{[p]:o,[d]:a}}}}}},kp=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var i,n;const{placement:r,rects:o,platform:a,elements:s}=e,{apply:l=()=>{},...c}=Dn(t,e),u=await po(e,c),d=Ge(r),p=qn(r),h=gt(r)==="y",{width:f,height:m}=o.floating;let b,y;d==="top"||d==="bottom"?(b=d,y=p===(await(a.isRTL==null?void 0:a.isRTL(s.floating))?"start":"end")?"left":"right"):(y=d,b=p==="end"?"top":"bottom");const g=m-u.top-u.bottom,x=f-u.left-u.right,v=mt(m-u[b],g),w=mt(f-u[y],x),C=!e.middlewareData.shift;let S=v,E=w;if((i=e.middlewareData.shift)!=null&&i.enabled.x&&(E=x),(n=e.middlewareData.shift)!=null&&n.enabled.y&&(S=g),C&&!p){const T=le(u.left,0),oe=le(u.right,0),Y=le(u.top,0),j=le(u.bottom,0);h?E=f-2*(T!==0||oe!==0?T+oe:le(u.left,u.right)):S=m-2*(Y!==0||j!==0?Y+j:le(u.top,u.bottom))}await l({...e,availableWidth:E,availableHeight:S});const F=await a.getDimensions(s.floating);return f!==F.width||m!==F.height?{reset:{rects:!0}}:{}}}};function Bn(){return typeof window<"u"}function St(t){return Ml(t)?(t.nodeName||"").toLowerCase():"#document"}function ue(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Ce(t){var e;return(e=(Ml(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Ml(t){return Bn()?t instanceof Node||t instanceof ue(t).Node:!1}function de(t){return Bn()?t instanceof Element||t instanceof ue(t).Element:!1}function xe(t){return Bn()?t instanceof HTMLElement||t instanceof ue(t).HTMLElement:!1}function wa(t){return!Bn()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof ue(t).ShadowRoot}function gi(t){const{overflow:e,overflowX:i,overflowY:n,display:r}=pe(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+i)&&!["inline","contents"].includes(r)}function Lp(t){return["table","td","th"].includes(St(t))}function jn(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function ho(t){const e=fo(),i=de(t)?pe(t):t;return i.transform!=="none"||i.perspective!=="none"||(i.containerType?i.containerType!=="normal":!1)||!e&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!e&&(i.filter?i.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(i.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(i.contain||"").includes(n))}function $p(t){let e=Ie(t);for(;xe(e)&&!bt(e);){if(ho(e))return e;if(jn(e))return null;e=Ie(e)}return null}function fo(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function bt(t){return["html","body","#document"].includes(St(t))}function pe(t){return ue(t).getComputedStyle(t)}function Un(t){return de(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Ie(t){if(St(t)==="html")return t;const e=t.assignedSlot||t.parentNode||wa(t)&&t.host||Ce(t);return wa(e)?e.host:e}function kl(t){const e=Ie(t);return bt(e)?t.ownerDocument?t.ownerDocument.body:t.body:xe(e)&&gi(e)?e:kl(e)}function li(t,e,i){var n;e===void 0&&(e=[]),i===void 0&&(i=!0);const r=kl(t),o=r===((n=t.ownerDocument)==null?void 0:n.body),a=ue(r);if(o){const s=Fr(a);return e.concat(a,a.visualViewport||[],gi(r)?r:[],s&&i?li(s):[])}return e.concat(r,li(r,[],i))}function Fr(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Ll(t){const e=pe(t);let i=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const r=xe(t),o=r?t.offsetWidth:i,a=r?t.offsetHeight:n,s=un(i)!==o||un(n)!==a;return s&&(i=o,n=a),{width:i,height:n,$:s}}function mo(t){return de(t)?t:t.contextElement}function lt(t){const e=mo(t);if(!xe(e))return _e(1);const i=e.getBoundingClientRect(),{width:n,height:r,$:o}=Ll(e);let a=(o?un(i.width):i.width)/n,s=(o?un(i.height):i.height)/r;return(!a||!Number.isFinite(a))&&(a=1),(!s||!Number.isFinite(s))&&(s=1),{x:a,y:s}}const Op=_e(0);function $l(t){const e=ue(t);return!fo()||!e.visualViewport?Op:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Tp(t,e,i){return e===void 0&&(e=!1),!i||e&&i!==ue(t)?!1:e}function Ye(t,e,i,n){e===void 0&&(e=!1),i===void 0&&(i=!1);const r=t.getBoundingClientRect(),o=mo(t);let a=_e(1);e&&(n?de(n)&&(a=lt(n)):a=lt(t));const s=Tp(o,i,n)?$l(o):_e(0);let l=(r.left+s.x)/a.x,c=(r.top+s.y)/a.y,u=r.width/a.x,d=r.height/a.y;if(o){const p=ue(o),h=n&&de(n)?ue(n):n;let f=p,m=Fr(f);for(;m&&n&&h!==f;){const b=lt(m),y=m.getBoundingClientRect(),g=pe(m),x=y.left+(m.clientLeft+parseFloat(g.paddingLeft))*b.x,v=y.top+(m.clientTop+parseFloat(g.paddingTop))*b.y;l*=b.x,c*=b.y,u*=b.x,d*=b.y,l+=x,c+=v,f=ue(m),m=Fr(f)}}return pn({width:u,height:d,x:l,y:c})}function go(t,e){const i=Un(t).scrollLeft;return e?e.left+i:Ye(Ce(t)).left+i}function Ol(t,e,i){i===void 0&&(i=!1);const n=t.getBoundingClientRect(),r=n.left+e.scrollLeft-(i?0:go(t,n)),o=n.top+e.scrollTop;return{x:r,y:o}}function Pp(t){let{elements:e,rect:i,offsetParent:n,strategy:r}=t;const o=r==="fixed",a=Ce(n),s=e?jn(e.floating):!1;if(n===a||s&&o)return i;let l={scrollLeft:0,scrollTop:0},c=_e(1);const u=_e(0),d=xe(n);if((d||!d&&!o)&&((St(n)!=="body"||gi(a))&&(l=Un(n)),xe(n))){const h=Ye(n);c=lt(n),u.x=h.x+n.clientLeft,u.y=h.y+n.clientTop}const p=a&&!d&&!o?Ol(a,l,!0):_e(0);return{width:i.width*c.x,height:i.height*c.y,x:i.x*c.x-l.scrollLeft*c.x+u.x+p.x,y:i.y*c.y-l.scrollTop*c.y+u.y+p.y}}function Ip(t){return Array.from(t.getClientRects())}function Hp(t){const e=Ce(t),i=Un(t),n=t.ownerDocument.body,r=le(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),o=le(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let a=-i.scrollLeft+go(t);const s=-i.scrollTop;return pe(n).direction==="rtl"&&(a+=le(e.clientWidth,n.clientWidth)-r),{width:r,height:o,x:a,y:s}}function Rp(t,e){const i=ue(t),n=Ce(t),r=i.visualViewport;let o=n.clientWidth,a=n.clientHeight,s=0,l=0;if(r){o=r.width,a=r.height;const c=fo();(!c||c&&e==="fixed")&&(s=r.offsetLeft,l=r.offsetTop)}return{width:o,height:a,x:s,y:l}}function Fp(t,e){const i=Ye(t,!0,e==="fixed"),n=i.top+t.clientTop,r=i.left+t.clientLeft,o=xe(t)?lt(t):_e(1),a=t.clientWidth*o.x,s=t.clientHeight*o.y,l=r*o.x,c=n*o.y;return{width:a,height:s,x:l,y:c}}function Ca(t,e,i){let n;if(e==="viewport")n=Rp(t,i);else if(e==="document")n=Hp(Ce(t));else if(de(e))n=Fp(e,i);else{const r=$l(t);n={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return pn(n)}function Tl(t,e){const i=Ie(t);return i===e||!de(i)||bt(i)?!1:pe(i).position==="fixed"||Tl(i,e)}function Np(t,e){const i=e.get(t);if(i)return i;let n=li(t,[],!1).filter(s=>de(s)&&St(s)!=="body"),r=null;const o=pe(t).position==="fixed";let a=o?Ie(t):t;for(;de(a)&&!bt(a);){const s=pe(a),l=ho(a);!l&&s.position==="fixed"&&(r=null),(o?!l&&!r:!l&&s.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||gi(a)&&!l&&Tl(t,a))?n=n.filter(u=>u!==a):r=s,a=Ie(a)}return e.set(t,n),n}function Vp(t){let{element:e,boundary:i,rootBoundary:n,strategy:r}=t;const a=[...i==="clippingAncestors"?jn(e)?[]:Np(e,this._c):[].concat(i),n],s=a[0],l=a.reduce((c,u)=>{const d=Ca(e,u,r);return c.top=le(d.top,c.top),c.right=mt(d.right,c.right),c.bottom=mt(d.bottom,c.bottom),c.left=le(d.left,c.left),c},Ca(e,s,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Dp(t){const{width:e,height:i}=Ll(t);return{width:e,height:i}}function qp(t,e,i){const n=xe(e),r=Ce(e),o=i==="fixed",a=Ye(t,!0,o,e);let s={scrollLeft:0,scrollTop:0};const l=_e(0);if(n||!n&&!o)if((St(e)!=="body"||gi(r))&&(s=Un(e)),n){const p=Ye(e,!0,o,e);l.x=p.x+e.clientLeft,l.y=p.y+e.clientTop}else r&&(l.x=go(r));const c=r&&!n&&!o?Ol(r,s):_e(0),u=a.left+s.scrollLeft-l.x-c.x,d=a.top+s.scrollTop-l.y-c.y;return{x:u,y:d,width:a.width,height:a.height}}function ur(t){return pe(t).position==="static"}function Sa(t,e){if(!xe(t)||pe(t).position==="fixed")return null;if(e)return e(t);let i=t.offsetParent;return Ce(t)===i&&(i=i.ownerDocument.body),i}function Pl(t,e){const i=ue(t);if(jn(t))return i;if(!xe(t)){let r=Ie(t);for(;r&&!bt(r);){if(de(r)&&!ur(r))return r;r=Ie(r)}return i}let n=Sa(t,e);for(;n&&Lp(n)&&ur(n);)n=Sa(n,e);return n&&bt(n)&&ur(n)&&!ho(n)?i:n||$p(t)||i}const Bp=async function(t){const e=this.getOffsetParent||Pl,i=this.getDimensions,n=await i(t.floating);return{reference:qp(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function jp(t){return pe(t).direction==="rtl"}const Up={convertOffsetParentRelativeRectToViewportRelativeRect:Pp,getDocumentElement:Ce,getClippingRect:Vp,getOffsetParent:Pl,getElementRects:Bp,getClientRects:Ip,getDimensions:Dp,getScale:lt,isElement:de,isRTL:jp};function Kp(t,e){let i=null,n;const r=Ce(t);function o(){var s;clearTimeout(n),(s=i)==null||s.disconnect(),i=null}function a(s,l){s===void 0&&(s=!1),l===void 0&&(l=1),o();const{left:c,top:u,width:d,height:p}=t.getBoundingClientRect();if(s||e(),!d||!p)return;const h=Ai(u),f=Ai(r.clientWidth-(c+d)),m=Ai(r.clientHeight-(u+p)),b=Ai(c),g={rootMargin:-h+"px "+-f+"px "+-m+"px "+-b+"px",threshold:le(0,mt(1,l))||1};let x=!0;function v(w){const C=w[0].intersectionRatio;if(C!==l){if(!x)return a();C?a(!1,C):n=setTimeout(()=>{a(!1,1e-7)},1e3)}x=!1}try{i=new IntersectionObserver(v,{...g,root:r.ownerDocument})}catch{i=new IntersectionObserver(v,g)}i.observe(t)}return a(!0),o}function Il(t,e,i,n){n===void 0&&(n={});const{ancestorScroll:r=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,c=mo(t),u=r||o?[...c?li(c):[],...li(e)]:[];u.forEach(y=>{r&&y.addEventListener("scroll",i,{passive:!0}),o&&y.addEventListener("resize",i)});const d=c&&s?Kp(c,i):null;let p=-1,h=null;a&&(h=new ResizeObserver(y=>{let[g]=y;g&&g.target===c&&h&&(h.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var x;(x=h)==null||x.observe(e)})),i()}),c&&!l&&h.observe(c),h.observe(e));let f,m=l?Ye(t):null;l&&b();function b(){const y=Ye(t);m&&(y.x!==m.x||y.y!==m.y||y.width!==m.width||y.height!==m.height)&&i(),m=y,f=requestAnimationFrame(b)}return i(),()=>{var y;u.forEach(g=>{r&&g.removeEventListener("scroll",i),o&&g.removeEventListener("resize",i)}),d?.(),(y=h)==null||y.disconnect(),h=null,l&&cancelAnimationFrame(f)}}const bo=Mp,yo=Ep,Hl=kp,Rl=(t,e,i)=>{const n=new Map,r={platform:Up,...i},o={...r.platform,_c:n};return Ap(t,e,{...r,platform:o})},Wp=[yo({fallbackAxisSideDirection:"start",crossAxis:!1}),bo()],Gp=({placement:t="bottom-start",strategy:e,middleware:i=Wp})=>{const[[n,r],o]=U([]),[a,s]=U();return $(()=>{if(!n||!(r instanceof HTMLElement)){s(void 0);return}return Il(n,r,()=>Rl(n,r,{placement:t,strategy:e,middleware:i}).then(s))},[n,r,t,e,i]),{setReference:z(l=>o(([,c])=>[l,c]),[]),setFloating:z(l=>o(([c])=>[c,l]),[]),styles:M(()=>a?{left:`${a.x}px`,top:`${a.y}px`}:{},[a?.x,a?.y])}},Yp=t=>t.preventDefault(),Jp=wt`
	.anchor {
		pointer-events: none;
		padding: var(--cosmoz-dropdown-anchor-spacing);
	}
	button {
		border: none;
		cursor: pointer;
		position: relative;
		pointer-events: auto;
		outline: none;
		background: var(
			--cosmoz-dropdown-button-bg-color,
			var(--cosmoz-button-bg-color, #101010)
		);
		color: var(
			--cosmoz-dropdown-button-color,
			var(--cosmoz-button-color, #fff)
		);
		border-radius: var(--cosmoz-dropdown-button-radius, 50%);
		width: var(
			--cosmoz-dropdown-button-width,
			var(--cosmoz-dropdown-button-size, 40px)
		);
		height: var(
			--cosmoz-dropdown-button-height,
			var(--cosmoz-dropdown-button-size, 40px)
		);
		padding: var(--cosmoz-dropdown-button-padding);
	}
	button:hover {
		background: var(
			--cosmoz-dropdown-button-hover-bg-color,
			var(--cosmoz-button-hover-bg-color, #3a3f44)
		);
	}
	::slotted(svg) {
		pointer-events: none;
	}
	@-moz-document url-prefix() {
		#content {
			left: auto;
		}
	}
`,Xp=t=>{const{placement:e,strategy:i,middleware:n,render:r}=t,{active:o,onToggle:a}=lp(t),{styles:s,setReference:l,setFloating:c}=Gp({placement:e,strategy:i,middleware:n});return _` <div class="anchor" part="anchor" ${We(l)}>
			<button
				@mousedown=${Yp}
				@click=${a}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		${G(o,()=>_`<cosmoz-dropdown-content
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					style="${Sl(s)}"
					@connected=${u=>u.target.showPopover?.()}
					${We(c)}
					><slot></slot>${uo([r],()=>r?.()||ne)}</cosmoz-dropdown-content
				> `)}`};customElements.define("cosmoz-dropdown",V(Xp,{styleSheets:[Jp]}));function Zp(t){return t.boundingClientRect.height===0}const Qp=t=>{if(t.element.tagName!=="SLOT")throw new Error("Overflow directive must be used on a slot element")},eh=(t,e)=>{let i=new Set,n=new Set;const r=new IntersectionObserver(a=>{a.forEach(s=>{const l=s.target;s.boundingClientRect.width===s.intersectionRect.width&&s.intersectionRect.height!==0?(i.add(l),n.delete(l)):Zp(s)?(i.delete(l),n.delete(l)):(i.delete(l),n.add(l))}),e({visible:i,overflowing:n})},{root:t.parentElement,threshold:[0,.5,1]}),o=()=>{const a=Array.from(t.assignedElements({flatten:!0})),s=new Set,l=new Set;for(const c of a)i.has(c)?s.add(c):n.has(c)?l.add(c):r.observe(c);i=s,n=l,e({visible:i,overflowing:n})};return o(),t.addEventListener("slotchange",o),()=>{t.removeEventListener("slotchange",o),r.disconnect()}};class th extends Nn{observer;slot;cleanup;render(){return ee}update(e,[i]){return Qp(e),this.slot!==e.element&&(this.cleanup&&(this.cleanup(),this.cleanup=void 0),this.slot=e.element,this.cleanup=eh(this.slot,i)),ee}}const ih=Le(th),nh=wt`
	:host {
		display: block;
		overflow: hidden;
		bottom: 0;
		left: 0;
		width: 100%;
		max-width: 100%; /* Firefox fix */
		background-color: inherit;
		transition: max-height 0.3s ease;
		flex: none;
		background-color: var(
			--cosmoz-bottom-bar-bg-color,
			rgba(230, 230, 230, 0.8)
		);
		box-shadow: var(--cosmoz-bottom-bar-shadow, none);
		z-index: 1;

		--cosmoz-dropdown-anchor-spacing: 12px 6px;
	}

	:host([force-open]) {
		transition: none;
	}

	[hidden],
	::slotted([hidden]) {
		display: none !important;
	}

	#bar {
		height: 64px;
		padding: 0 3%;
		display: flex;
		align-items: center;
	}

	#info {
		flex: 0 0 auto;
		padding-right: 3%;
		white-space: nowrap;
	}

	#buttonContainer {
		display: flex;
		flex: 1 1 auto;
		overflow: hidden;
		flex-wrap: wrap;
		justify-content: flex-start;
		flex-direction: row-reverse;
		position: relative;
		margin: 0 8px;
		min-width: 0;
		max-height: 40px;
	}

	#bottomBarToolbar::slotted(:not(slot):not([unstyled])) {
		margin: 0 0.29em;
		min-width: 40px;
		min-height: 40px;
		text-overflow: ellipsis;
		white-space: nowrap;
		background: var(
			--cosmoz-bottom-bar-button-bg-color,
			var(--cosmoz-button-bg-color, #101010)
		);
		color: var(
			--cosmoz-bottom-bar-button-color,
			var(--cosmoz-button-color, #fff)
		);
		border-radius: 6px;
		padding: 0 18px;
		font-size: 14px;
		font-weight: 500;
		line-height: 40px;
		overflow: hidden;
		flex: 0 0 auto;
		visibility: hidden;
	}

	#bottomBarToolbar::slotted(:not(slot)[disabled]) {
		opacity: var(--cosmoz-button-disabled-opacity, 0.15);
		pointer-events: none;
	}

	#bottomBarToolbar::slotted(:not(slot):hover) {
		background: var(
			--cosmoz-bottom-bar-button-hover-bg-color,
			var(--cosmoz-button-hover-bg-color, #3a3f44)
		);
	}

	#dropdown::part(content) {
		max-width: 300px;
	}

	:host([hide-actions]) #bottomBarToolbar,
	:host([hide-actions]) #bottomBarMenu,
	:host([hide-actions]) #dropdown {
		display: none;
	}

	:host(:not([has-menu-items])) cosmoz-dropdown-menu {
		display: none;
	}
`,rh=Symbol("openMenu"),oh=t=>{const e=t.shadowRoot?.querySelector("#dropdown");if(!e||e.hasAttribute("hidden"))return;e.shadowRoot?.querySelector("cosmoz-dropdown")?.shadowRoot?.querySelector("#dropdownButton")?.click()},ah=t=>{const[e,i]=U({visible:new Set,overflowing:new Set}),n=M(()=>[...e.visible,...e.overflowing],[e]),r=M(()=>n.map(l=>({element:l,priority:Number(l.dataset.priority??0),text:l.textContent?.trim()||""})).toSorted((l,c)=>c.priority-l.priority),[n]),{maxToolbarItems:o=1}=t,a=Math.min(o,e.visible.size);$(()=>{r.forEach(({element:l,priority:c},u)=>{const d=u<a;l.style.visibility=d?"visible":"hidden",l.style.order=String(-c)})},[r,a]);const s=M(()=>r.slice(a).sort((l,c)=>c.element.compareDocumentPosition(l.element)-l.element.compareDocumentPosition(c.element)),[r,a]);return $(()=>{t.toggleAttribute("has-menu-items",s.length>0)},[s.length]),{setButtonStates:i,menuButtons:s}},sh=t=>{const{active:e=!1}=t;ap({activity:rh,callback:()=>oh(t),check:()=>e&&!t.hasAttribute("hide-actions"),element:()=>t.shadowRoot?.querySelector("#dropdown")},[e]);const{setButtonStates:i,menuButtons:n}=ah(t),r=M(()=>_l("height"),[]);return si(()=>{r(t,e)},[e]),_`<div id="bar" part="bar">
		<div id="info" part="info"><slot name="info"></slot></div>
		<div id="buttonContainer">
			<slot id="bottomBarToolbar" ${ih(i)}></slot>
		</div>

		<cosmoz-dropdown-menu id="dropdown">
			<svg
				slot="button"
				width="4"
				height="16"
				viewBox="0 0 4 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M1.50996e-07 2C1.02714e-07 3.10457 0.89543 4 2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 -3.91405e-08 2 -8.74228e-08C0.895431 -1.35705e-07 1.99278e-07 0.89543 1.50996e-07 2Z"
					fill="white"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M1.50996e-07 8C1.02714e-07 9.10457 0.89543 10 2 10C3.10457 10 4 9.10457 4 8C4 6.89543 3.10457 6 2 6C0.895431 6 1.99278e-07 6.89543 1.50996e-07 8Z"
					fill="white"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M1.50996e-07 14C1.02714e-07 15.1046 0.89543 16 2 16C3.10457 16 4 15.1046 4 14C4 12.8954 3.10457 12 2 12C0.895431 12 1.99278e-07 12.8954 1.50996e-07 14Z"
					fill="white"
				/>
			</svg>
			${Gs(n,o=>_`
					<button @click=${()=>o.element.click()}>
						${o.text}
					</button>
				`)}
		</cosmoz-dropdown-menu>
		<slot name="extra" id="extraSlot"></slot>
	</div>`};customElements.define("cosmoz-bottom-bar",V(sh,{observedAttributes:["active","max-toolbar-items"],styleSheets:[nh]}));const hn=`
	<slot name="extra" slot="extra"></slot>
`;_(Object.assign([hn],{raw:[hn]}));q(Object.assign([hn],{raw:[hn]}));/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Kn=!(window.ShadyDOM&&window.ShadyDOM.inUse);let fn;function za(t){t&&t.shimcssproperties?fn=!1:fn=Kn||!!(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)"))}let ci;window.ShadyCSS&&window.ShadyCSS.cssBuild!==void 0&&(ci=window.ShadyCSS.cssBuild);const Fl=!!(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&window.ShadyCSS.nativeCss!==void 0?fn=window.ShadyCSS.nativeCss:window.ShadyCSS?(za(window.ShadyCSS),window.ShadyCSS=void 0):za(window.WebComponents&&window.WebComponents.flags);const vo=fn;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class Aa{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function Nl(t){return t=lh(t),Vl(ch(t),t)}function lh(t){return t.replace(Ae.comments,"").replace(Ae.port,"")}function ch(t){let e=new Aa;e.start=0,e.end=t.length;let i=e;for(let n=0,r=t.length;n<r;n++)if(t[n]===ql){i.rules||(i.rules=[]);let o=i,a=o.rules[o.rules.length-1]||null;i=new Aa,i.start=n+1,i.parent=o,i.previous=a,o.rules.push(i)}else t[n]===Bl&&(i.end=n+1,i=i.parent||e);return e}function Vl(t,e){let i=e.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=i.trim(),t.parent){let r=t.previous?t.previous.end:t.parent.start;i=e.substring(r,t.start-1),i=uh(i),i=i.replace(Ae.multipleSpaces," "),i=i.substring(i.lastIndexOf(";")+1);let o=t.parsedSelector=t.selector=i.trim();t.atRule=o.indexOf(gh)===0,t.atRule?o.indexOf(mh)===0?t.type=ot.MEDIA_RULE:o.match(Ae.keyframesRule)&&(t.type=ot.KEYFRAMES_RULE,t.keyframesName=t.selector.split(Ae.multipleSpaces).pop()):o.indexOf(jl)===0?t.type=ot.MIXIN_RULE:t.type=ot.STYLE_RULE}let n=t.rules;if(n)for(let r=0,o=n.length,a;r<o&&(a=n[r]);r++)Vl(a,e);return t}function uh(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let e=arguments[1],i=6-e.length;for(;i--;)e="0"+e;return"\\"+e})}function Dl(t,e,i=""){let n="";if(t.cssText||t.rules){let r=t.rules;if(r&&!dh(r))for(let o=0,a=r.length,s;o<a&&(s=r[o]);o++)n=Dl(s,e,n);else n=e?t.cssText:ph(t.cssText),n=n.trim(),n&&(n="  "+n+`
`)}return n&&(t.selector&&(i+=t.selector+" "+ql+`
`),i+=n,t.selector&&(i+=Bl+`

`)),i}function dh(t){let e=t[0];return!!e&&!!e.selector&&e.selector.indexOf(jl)===0}function ph(t){return t=hh(t),fh(t)}function hh(t){return t.replace(Ae.customProp,"").replace(Ae.mixinProp,"")}function fh(t){return t.replace(Ae.mixinApply,"").replace(Ae.varApply,"")}const ot={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},ql="{",Bl="}",Ae={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},jl="--",mh="@media",gh="@";/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Nr=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,mn=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ea=new Set,bh="shady-unscoped";function yh(t){const e=t.textContent;if(!Ea.has(e)){Ea.add(e);const i=document.createElement("style");i.setAttribute("shady-unscoped",""),i.textContent=e,document.head.appendChild(i)}}function vh(t){return t.hasAttribute(bh)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Vr(t,e){return t?(typeof t=="string"&&(t=Nl(t)),Dl(t,vo)):""}function Ma(t){return!t.__cssRules&&t.textContent&&(t.__cssRules=Nl(t.textContent)),t.__cssRules||null}function Xi(t,e,i,n){if(!t)return;let r=!1,o=t.type;o===ot.STYLE_RULE?e(t):o===ot.MIXIN_RULE&&(r=!0);let a=t.rules;if(a&&!r)for(let s=0,l=a.length,c;s<l&&(c=a[s]);s++)Xi(c,e)}function _h(t,e){let i=0;for(let n=e,r=t.length;n<r;n++)if(t[n]==="(")i++;else if(t[n]===")"&&--i===0)return n;return-1}function Ul(t,e){let i=t.indexOf("var(");if(i===-1)return e(t,"","","");let n=_h(t,i+3),r=t.substring(i+4,n),o=t.substring(0,i),a=Ul(t.substring(n+1),e),s=r.indexOf(",");if(s===-1)return e(o,r.trim(),"",a);let l=r.substring(0,s).trim(),c=r.substring(s+1).trim();return e(o,l,c,a)}window.ShadyDOM&&window.ShadyDOM.wrap;function xh(t){let e=t.localName,i="",n="";return e?e.indexOf("-")>-1?i=e:(n=e,i=t.getAttribute&&t.getAttribute("is")||""):(i=t.is,n=t.extends),{is:i,typeExtension:n}}function wh(t){const e=[],i=t.querySelectorAll("style");for(let n=0;n<i.length;n++){const r=i[n];vh(r)?Kn||(yh(r),r.parentNode.removeChild(r)):(e.push(r.textContent),r.parentNode.removeChild(r))}return e.join("").trim()}const Kl="css-build";function Ch(t){if(ci!==void 0)return ci;if(t.__cssBuild===void 0){const e=t.getAttribute(Kl);if(e)t.__cssBuild=e;else{const i=Sh(t);i!==""&&zh(t),t.__cssBuild=i}}return t.__cssBuild||""}function ka(t){return Ch(t)!==""}function Sh(t){const e=t.localName==="template"?t.content.firstChild:t.firstChild;if(e instanceof Comment){const i=e.textContent.trim().split(":");if(i[0]===Kl)return i[1]}return""}function zh(t){const e=t.localName==="template"?t.content.firstChild:t.firstChild;e.parentNode.removeChild(e)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Dr(t,e){for(let i in e)i===null?t.style.removeProperty(i):t.style.setProperty(i,e[i])}function Wl(t,e){const i=window.getComputedStyle(t).getPropertyValue(e);return i?i.trim():""}function Ah(t){const e=mn.test(t)||Nr.test(t);return mn.lastIndex=0,Nr.lastIndex=0,e}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Eh=/;\s*/m,Mh=/^\s*(initial)|(inherit)\s*$/,La=/\s*!important/,qr="_-_";class kh{constructor(){this._map={}}set(e,i){e=e.trim(),this._map[e]={properties:i,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let gn=null;class te{constructor(){this._currentElement=null,this._measureElement=null,this._map=new kh}detectMixin(e){return Ah(e)}gatherStyles(e){const i=wh(e.content);if(i){const n=document.createElement("style");return n.textContent=i,e.content.insertBefore(n,e.content.firstChild),n}return null}transformTemplate(e,i){e._gatheredStyle===void 0&&(e._gatheredStyle=this.gatherStyles(e));const n=e._gatheredStyle;return n?this.transformStyle(n,i):null}transformStyle(e,i=""){let n=Ma(e);return this.transformRules(n,i),e.textContent=Vr(n),n}transformCustomStyle(e){let i=Ma(e);return Xi(i,n=>{n.selector===":root"&&(n.selector="html"),this.transformRule(n)}),e.textContent=Vr(i),i}transformRules(e,i){this._currentElement=i,Xi(e,n=>{this.transformRule(n)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),e.selector===":root"&&(e.selector=":host > *")}transformCssText(e,i){return e=e.replace(Nr,(n,r,o,a)=>this._produceCssProperties(n,r,o,a,i)),this._consumeCssProperties(e,i)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let i=e;for(;i.parent;)i=i.parent;const n={};let r=!1;return Xi(i,o=>{r=r||o===e,!r&&o.selector===e.selector&&Object.assign(n,this._cssTextToMap(o.parsedCssText))}),n}_consumeCssProperties(e,i){let n=null;for(;n=mn.exec(e);){let r=n[0],o=n[1],a=n.index,s=a+r.indexOf("@apply"),l=a+r.length,c=e.slice(0,s),u=e.slice(l),d=i?this._fallbacksFromPreviousRules(i):{};Object.assign(d,this._cssTextToMap(c));let p=this._atApplyToCssProperties(o,d);e=`${c}${p}${u}`,mn.lastIndex=a+p.length}return e}_atApplyToCssProperties(e,i){e=e.replace(Eh,"");let n=[],r=this._map.get(e);if(r||(this._map.set(e,{}),r=this._map.get(e)),r){this._currentElement&&(r.dependants[this._currentElement]=!0);let o,a,s;const l=r.properties;for(o in l)s=i&&i[o],a=[o,": var(",e,qr,o],s&&a.push(",",s.replace(La,"")),a.push(")"),La.test(l[o])&&a.push(" !important"),n.push(a.join(""))}return n.join("; ")}_replaceInitialOrInherit(e,i){let n=Mh.exec(i);return n&&(n[1]?i=this._getInitialValueForProperty(e):i="apply-shim-inherit"),i}_cssTextToMap(e,i=!1){let n=e.split(";"),r,o,a={};for(let s=0,l,c;s<n.length;s++)l=n[s],l&&(c=l.split(":"),c.length>1&&(r=c[0].trim(),o=c.slice(1).join(":"),i&&(o=this._replaceInitialOrInherit(r,o)),a[r]=o));return a}_invalidateMixinEntry(e){if(gn)for(let i in e.dependants)i!==this._currentElement&&gn(i)}_produceCssProperties(e,i,n,r,o){if(n&&Ul(n,(b,y)=>{y&&this._map.get(y)&&(r=`@apply ${y};`)}),!r)return e;let a=this._consumeCssProperties(""+r,o),s=e.slice(0,e.indexOf("--")),l=this._cssTextToMap(a,!0),c=l,u=this._map.get(i),d=u&&u.properties;d?c=Object.assign(Object.create(d),l):this._map.set(i,c);let p=[],h,f,m=!1;for(h in c)f=l[h],f===void 0&&(f="initial"),d&&!(h in d)&&(m=!0),p.push(`${i}${qr}${h}: ${f}`);return m&&this._invalidateMixinEntry(u),u&&(u.properties=c),n&&(s=`${e};${s}`),`${s}${p.join("; ")};`}}te.prototype.detectMixin=te.prototype.detectMixin;te.prototype.transformStyle=te.prototype.transformStyle;te.prototype.transformCustomStyle=te.prototype.transformCustomStyle;te.prototype.transformRules=te.prototype.transformRules;te.prototype.transformRule=te.prototype.transformRule;te.prototype.transformTemplate=te.prototype.transformTemplate;te.prototype._separator=qr;Object.defineProperty(te.prototype,"invalidCallback",{get(){return gn},set(t){gn=t}});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Br={};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const bn="_applyShimCurrentVersion",yt="_applyShimNextVersion",yn="_applyShimValidatingVersion",Lh=Promise.resolve();function $h(t){let e=Br[t];e&&Oh(e)}function Oh(t){t[bn]=t[bn]||0,t[yn]=t[yn]||0,t[yt]=(t[yt]||0)+1}function Gl(t){return t[bn]===t[yt]}function Th(t){return!Gl(t)&&t[yn]===t[yt]}function Ph(t){t[yn]=t[yt],t._validating||(t._validating=!0,Lh.then(function(){t[bn]=t[yt],t._validating=!1}))}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let dr=null,$a=window.HTMLImports&&window.HTMLImports.whenReady||null,pr;function Oa(t){requestAnimationFrame(function(){$a?$a(t):(dr||(dr=new Promise(e=>{pr=e}),document.readyState==="complete"?pr():document.addEventListener("readystatechange",()=>{document.readyState==="complete"&&pr()})),dr.then(function(){t&&t()}))})}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ta="__seenByShadyCSS",Ei="__shadyCSSCachedStyle";let vn=null,Jt=null,He=class{constructor(){this.customStyles=[],this.enqueued=!1,Oa(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){this.enqueued||!Jt||(this.enqueued=!0,Oa(Jt))}addCustomStyle(e){e[Ta]||(e[Ta]=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[Ei])return e[Ei];let i;return e.getStyle?i=e.getStyle():i=e,i}processStyles(){const e=this.customStyles;for(let i=0;i<e.length;i++){const n=e[i];if(n[Ei])continue;const r=this.getStyleForCustomStyle(n);if(r){const o=r.__appliedElement||r;vn&&vn(o),n[Ei]=o}}return e}};He.prototype.addCustomStyle=He.prototype.addCustomStyle;He.prototype.getStyleForCustomStyle=He.prototype.getStyleForCustomStyle;He.prototype.processStyles=He.prototype.processStyles;Object.defineProperties(He.prototype,{transformCallback:{get(){return vn},set(t){vn=t}},validateCallback:{get(){return Jt},set(t){let e=!1;Jt||(e=!0),Jt=t,e&&this.enqueueDocumentValidation()}}});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ft=new te;class Ih{constructor(){this.customStyleInterface=null,Ft.invalidCallback=$h}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{Ft.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(e,i){if(this.ensure(),ka(e))return;Br[i]=e;let n=Ft.transformTemplate(e,i);e._styleAst=n}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let i=0;i<e.length;i++){let n=e[i],r=this.customStyleInterface.getStyleForCustomStyle(n);r&&Ft.transformCustomStyle(r)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,i){if(this.ensure(),i&&Dr(e,i),e.shadowRoot){this.styleElement(e);let n=e.shadowRoot.children||e.shadowRoot.childNodes;for(let r=0;r<n.length;r++)this.styleSubtree(n[r])}else{let n=e.children||e.childNodes;for(let r=0;r<n.length;r++)this.styleSubtree(n[r])}}styleElement(e){this.ensure();let{is:i}=xh(e),n=Br[i];if(!(n&&ka(n))&&n&&!Gl(n)){Th(n)||(this.prepareTemplate(n,i),Ph(n));let r=e.shadowRoot;if(r){let o=r.querySelector("style");o&&(o.__cssRules=n._styleAst,o.textContent=Vr(n._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const t=new Ih;let e=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(i,n,r){t.flushCustomStyles(),t.prepareTemplate(i,n)},prepareTemplateStyles(i,n,r){window.ShadyCSS.prepareTemplate(i,n,r)},prepareTemplateDom(i,n){},styleSubtree(i,n){t.flushCustomStyles(),t.styleSubtree(i,n)},styleElement(i){t.flushCustomStyles(),t.styleElement(i)},styleDocument(i){t.flushCustomStyles(),t.styleDocument(i)},getComputedStyleValue(i,n){return Wl(i,n)},flushCustomStyles(){t.flushCustomStyles()},nativeCss:vo,nativeShadow:Kn,cssBuild:ci,disableRuntime:Fl},e&&(window.ShadyCSS.CustomStyleInterface=e)}window.ShadyCSS.ApplyShim=Ft;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class Re{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,i){this._asyncModule=e,this._callback=i,this._timer=this._asyncModule.run(()=>{this._timer=null,ui.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),ui.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(e,i,n){return e instanceof Re?e._cancelAsync():e=new Re,e.setConfig(i,n),e}}let ui=new Set;const _o=function(t){ui.add(t)},Hh=function(){const t=!!ui.size;return ui.forEach(e=>{try{e.flush()}catch(i){setTimeout(()=>{throw i})}}),t};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let xo=typeof document.head.style.touchAction=="string",_n="__polymerGestures",Zi="__polymerGesturesHandled",jr="__polymerGesturesTouchAction",Pa=25,Ia=5,Rh=2,Fh=2500,Yl=["mousedown","mousemove","mouseup","click"],Nh=[0,1,4,2],Vh=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function wo(t){return Yl.indexOf(t)>-1}let Co=!1;(function(){try{let t=Object.defineProperty({},"passive",{get(){Co=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch{}})();function Jl(t){if(!(wo(t)||t==="touchend")&&xo&&Co&&_u)return{passive:!0}}let Xl=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const Ur=[],Dh={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},qh={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Bh(t){return Dh[t.localName]||!1}function jh(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];try{let i=t.getRootNode();if(t.id){let n=i.querySelectorAll(`label[for = '${t.id}']`);for(let r=0;r<n.length;r++)e.push(n[r])}}catch{}}return e}let Ha=function(t){let e=t.sourceCapabilities;if(!(e&&!e.firesTouchEvents)&&(t[Zi]={skip:!0},t.type==="click")){let i=!1,n=Wn(t);for(let r=0;r<n.length;r++){if(n[r].nodeType===Node.ELEMENT_NODE){if(n[r].localName==="label")Ur.push(n[r]);else if(Bh(n[r])){let o=jh(n[r]);for(let a=0;a<o.length;a++)i=i||Ur.indexOf(o[a])>-1}}if(n[r]===Z.mouse.target)return}if(i)return;t.preventDefault(),t.stopPropagation()}};function Ra(t){let e=Xl?["click"]:Yl;for(let i=0,n;i<e.length;i++)n=e[i],t?(Ur.length=0,document.addEventListener(n,Ha,!0)):document.removeEventListener(n,Ha,!0)}function Uh(t){Z.mouse.mouseIgnoreJob||Ra(!0);let e=function(){Ra(),Z.mouse.target=null,Z.mouse.mouseIgnoreJob=null};Z.mouse.target=Wn(t)[0],Z.mouse.mouseIgnoreJob=Re.debounce(Z.mouse.mouseIgnoreJob,st.after(Fh),e)}function Ue(t){let e=t.type;if(!wo(e))return!1;if(e==="mousemove"){let i=t.buttons===void 0?1:t.buttons;return t instanceof window.MouseEvent&&!Vh&&(i=Nh[t.which]||0),!!(i&1)}else return(t.button===void 0?0:t.button)===0}function Kh(t){if(t.type==="click"){if(t.detail===0)return!0;let e=Ee(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let i=e.getBoundingClientRect(),n=t.pageX,r=t.pageY;return!(n>=i.left&&n<=i.right&&r>=i.top&&r<=i.bottom)}return!1}let Z={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Wh(t){let e="auto",i=Wn(t);for(let n=0,r;n<i.length;n++)if(r=i[n],r[jr]){e=r[jr];break}return e}function Zl(t,e,i){t.movefn=e,t.upfn=i,document.addEventListener("mousemove",e),document.addEventListener("mouseup",i)}function ct(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}document.addEventListener("touchend",Uh,Co?{passive:!0}:!1);const Wn=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],bi={},Be=[];function Gh(t,e){let i=document.elementFromPoint(t,e),n=i;for(;n&&n.shadowRoot&&!window.ShadyDOM;){let r=n;if(n=n.shadowRoot.elementFromPoint(t,e),r===n)break;n&&(i=n)}return i}function Ee(t){const e=Wn(t);return e.length>0?e[0]:t.target}function Ql(t){let e,i=t.type,r=t.currentTarget[_n];if(!r)return;let o=r[i];if(o){if(!t[Zi]&&(t[Zi]={},i.slice(0,5)==="touch")){t=t;let a=t.changedTouches[0];if(i==="touchstart"&&t.touches.length===1&&(Z.touch.id=a.identifier),Z.touch.id!==a.identifier)return;xo||(i==="touchstart"||i==="touchmove")&&Yh(t)}if(e=t[Zi],!e.skip){for(let a=0,s;a<Be.length;a++)s=Be[a],o[s.name]&&!e[s.name]&&s.flow&&s.flow.start.indexOf(t.type)>-1&&s.reset&&s.reset();for(let a=0,s;a<Be.length;a++)s=Be[a],o[s.name]&&!e[s.name]&&(e[s.name]=!0,s[i](t))}}}function Yh(t){let e=t.changedTouches[0],i=t.type;if(i==="touchstart")Z.touch.x=e.clientX,Z.touch.y=e.clientY,Z.touch.scrollDecided=!1;else if(i==="touchmove"){if(Z.touch.scrollDecided)return;Z.touch.scrollDecided=!0;let n=Wh(t),r=!1,o=Math.abs(Z.touch.x-e.clientX),a=Math.abs(Z.touch.y-e.clientY);t.cancelable&&(n==="none"?r=!0:n==="pan-x"?r=a>o:n==="pan-y"&&(r=o>a)),r?t.preventDefault():xn("track")}}function ec(t,e,i){return bi[e]?(Xh(t,e,i),!0):!1}function Jh(t,e,i){return bi[e]?(Zh(t,e,i),!0):!1}function Xh(t,e,i){let n=bi[e],r=n.deps,o=n.name,a=t[_n];a||(t[_n]=a={});for(let s=0,l,c;s<r.length;s++)l=r[s],!(Xl&&wo(l)&&l!=="click")&&(c=a[l],c||(a[l]=c={_count:0}),c._count===0&&t.addEventListener(l,Ql,Jl(l)),c[o]=(c[o]||0)+1,c._count=(c._count||0)+1);t.addEventListener(e,i),n.touchAction&&tc(t,n.touchAction)}function Zh(t,e,i){let n=bi[e],r=n.deps,o=n.name,a=t[_n];if(a)for(let s=0,l,c;s<r.length;s++)l=r[s],c=a[l],c&&c[o]&&(c[o]=(c[o]||1)-1,c._count=(c._count||1)-1,c._count===0&&t.removeEventListener(l,Ql,Jl(l)));t.removeEventListener(e,i)}function So(t){Be.push(t);for(let e=0;e<t.emits.length;e++)bi[t.emits[e]]=t}function Qh(t){for(let e=0,i;e<Be.length;e++){i=Be[e];for(let n=0,r;n<i.emits.length;n++)if(r=i.emits[n],r===t)return i}return null}function tc(t,e){xo&&t instanceof HTMLElement&&Te.run(()=>{t.style.touchAction=e}),t[jr]=e}function zo(t,e,i){let n=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=i,A(t).dispatchEvent(n),n.defaultPrevented){let r=i.preventer||i.sourceEvent;r&&r.preventDefault&&r.preventDefault()}}function xn(t){let e=Qh(t);e.info&&(e.info.prevent=!0)}So({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){ct(this.info)},mousedown:function(t){if(!Ue(t))return;let e=Ee(t),i=this,n=function(a){Ue(a)||(Lt("up",e,a),ct(i.info))},r=function(a){Ue(a)&&Lt("up",e,a),ct(i.info)};Zl(this.info,n,r),Lt("down",e,t)},touchstart:function(t){Lt("down",Ee(t),t.changedTouches[0],t)},touchend:function(t){Lt("up",Ee(t),t.changedTouches[0],t)}});function Lt(t,e,i,n){e&&zo(e,t,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:n,prevent:function(r){return xn(r)}})}So({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>Rh&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,ct(this.info)},mousedown:function(t){if(!Ue(t))return;let e=Ee(t),i=this,n=function(a){let s=a.clientX,l=a.clientY;Fa(i.info,s,l)&&(i.info.state=i.info.started?a.type==="mouseup"?"end":"track":"start",i.info.state==="start"&&xn("tap"),i.info.addMove({x:s,y:l}),Ue(a)||(i.info.state="end",ct(i.info)),e&&hr(i.info,e,a),i.info.started=!0)},r=function(a){i.info.started&&n(a),ct(i.info)};Zl(this.info,n,r),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=Ee(t),i=t.changedTouches[0],n=i.clientX,r=i.clientY;Fa(this.info,n,r)&&(this.info.state==="start"&&xn("tap"),this.info.addMove({x:n,y:r}),hr(this.info,e,i),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=Ee(t),i=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),hr(this.info,e,i))}});function Fa(t,e,i){if(t.prevent)return!1;if(t.started)return!0;let n=Math.abs(t.x-e),r=Math.abs(t.y-i);return n>=Ia||r>=Ia}function hr(t,e,i){if(!e)return;let n=t.moves[t.moves.length-2],r=t.moves[t.moves.length-1],o=r.x-t.x,a=r.y-t.y,s,l=0;n&&(s=r.x-n.x,l=r.y-n.y),zo(e,"track",{state:t.state,x:i.clientX,y:i.clientY,dx:o,dy:a,ddx:s,ddy:l,sourceEvent:i,hover:function(){return Gh(i.clientX,i.clientY)}})}So({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){Ue(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){Ue(t)&&Na(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){Na(this.info,t.changedTouches[0],t)}});function Na(t,e,i){let n=Math.abs(e.clientX-t.x),r=Math.abs(e.clientY-t.y),o=Ee(i||e);!o||qh[o.localName]&&o.hasAttribute("disabled")||(isNaN(n)||isNaN(r)||n<=Pa&&r<=Pa||Kh(e))&&(t.prevent||zo(o,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:i}))}const e1=Ee;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ic=re(t=>{class e extends t{_addEventListenerToNode(n,r,o){ec(n,r,o)||super._addEventListenerToNode(n,r,o)}_removeEventListenerFromNode(n,r,o){Jh(n,r,o)||super._removeEventListenerFromNode(n,r,o)}}return e});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const t1=/:host\(:dir\((ltr|rtl)\)\)/g,i1=':host([dir="$1"])',n1=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,r1=':host([dir="$2"]) $1',o1=/:dir\((?:ltr|rtl)\)/,Va=!!(window.ShadyDOM&&window.ShadyDOM.inUse),Xt=[];let Zt=null,Ao="";function nc(){Ao=document.documentElement.getAttribute("dir")}function rc(t){t.__autoDirOptOut||t.setAttribute("dir",Ao)}function oc(){nc(),Ao=document.documentElement.getAttribute("dir");for(let t=0;t<Xt.length;t++)rc(Xt[t])}function a1(){Zt&&Zt.takeRecords().length&&oc()}const s1=re(t=>{Va||Zt||(nc(),Zt=new MutationObserver(oc),Zt.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const e=rl(t);class i extends e{static _processStyleText(r,o){return r=e._processStyleText.call(this,r,o),!Va&&o1.test(r)&&(r=this._replaceDirInCssText(r),this.__activateDir=!0),r}static _replaceDirInCssText(r){let o=r;return o=o.replace(t1,i1),o=o.replace(n1,r1),o}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){e.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(a1(),Xt.push(this),rc(this))}disconnectedCallback(){if(e.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const r=Xt.indexOf(this);r>-1&&Xt.splice(r,1)}}}return i.__activateDir=!1,i});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Da(){document.body.removeAttribute("unresolved")}document.readyState==="interactive"||document.readyState==="complete"?Da():window.addEventListener("DOMContentLoaded",Da);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function $t(t,e,i){return{index:t,removed:e,addedCount:i}}const ac=0,sc=1,Kr=2,Wr=3;function l1(t,e,i,n,r,o){let a=o-r+1,s=i-e+1,l=new Array(a);for(let c=0;c<a;c++)l[c]=new Array(s),l[c][0]=c;for(let c=0;c<s;c++)l[0][c]=c;for(let c=1;c<a;c++)for(let u=1;u<s;u++)if(Eo(t[e+u-1],n[r+c-1]))l[c][u]=l[c-1][u-1];else{let d=l[c-1][u]+1,p=l[c][u-1]+1;l[c][u]=d<p?d:p}return l}function c1(t){let e=t.length-1,i=t[0].length-1,n=t[e][i],r=[];for(;e>0||i>0;){if(e==0){r.push(Kr),i--;continue}if(i==0){r.push(Wr),e--;continue}let o=t[e-1][i-1],a=t[e-1][i],s=t[e][i-1],l;a<s?l=a<o?a:o:l=s<o?s:o,l==o?(o==n?r.push(ac):(r.push(sc),n=o),e--,i--):l==a?(r.push(Wr),e--,n=a):(r.push(Kr),i--,n=s)}return r.reverse(),r}function u1(t,e,i,n,r,o){let a=0,s=0,l,c=Math.min(i-e,o-r);if(e==0&&r==0&&(a=d1(t,n,c)),i==t.length&&o==n.length&&(s=p1(t,n,c-a)),e+=a,r+=a,i-=s,o-=s,i-e==0&&o-r==0)return[];if(e==i){for(l=$t(e,[],0);r<o;)l.removed.push(n[r++]);return[l]}else if(r==o)return[$t(e,[],i-e)];let u=c1(l1(t,e,i,n,r,o));l=void 0;let d=[],p=e,h=r;for(let f=0;f<u.length;f++)switch(u[f]){case ac:l&&(d.push(l),l=void 0),p++,h++;break;case sc:l||(l=$t(p,[],0)),l.addedCount++,p++,l.removed.push(n[h]),h++;break;case Kr:l||(l=$t(p,[],0)),l.addedCount++,p++;break;case Wr:l||(l=$t(p,[],0)),l.removed.push(n[h]),h++;break}return l&&d.push(l),d}function d1(t,e,i){for(let n=0;n<i;n++)if(!Eo(t[n],e[n]))return n;return i}function p1(t,e,i){let n=t.length,r=e.length,o=0;for(;o<i&&Eo(t[--n],e[--r]);)o++;return o}function lc(t,e){return u1(t,0,t.length,e,0,e.length)}function Eo(t,e){return t===e}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function et(t){return t.localName==="slot"}let qa=class{static getFlattenedNodes(t){const e=A(t);return et(t)?(t=t,e.assignedNodes({flatten:!0})):Array.from(e.childNodes).map(i=>et(i)?(i=i,A(i).assignedNodes({flatten:!0})):[i]).reduce((i,n)=>i.concat(n),[])}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){et(this._target)?this._listenSlots([this._target]):A(this._target).children&&(this._listenSlots(A(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){et(this._target)?this._unlistenSlots([this._target]):A(this._target).children&&(this._unlistenSlots(A(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,Te.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let i=t[e];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),i=lc(e,this._effectiveNodes);for(let r=0,o;r<i.length&&(o=i[r]);r++)for(let a=0,s;a<o.removed.length&&(s=o.removed[a]);a++)t.removedNodes.push(s);for(let r=0,o;r<i.length&&(o=i[r]);r++)for(let a=o.index;a<o.index+o.addedCount;a++)t.addedNodes.push(e[a]);this._effectiveNodes=e;let n=!1;return(t.addedNodes.length||t.removedNodes.length)&&(n=!0,this.callback.call(this._target,t)),n}_listenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];et(i)&&i.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];et(i)&&i.removeEventListener("slotchange",this._boundSchedule)}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const cc=function(){let t,e;do t=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=Hh();while(t||e)};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const tt=Element.prototype,h1=tt.matches||tt.matchesSelector||tt.mozMatchesSelector||tt.msMatchesSelector||tt.oMatchesSelector||tt.webkitMatchesSelector,uc=function(t,e){return h1.call(t,e)};class H{constructor(e){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(e),this.node=e}observeNodes(e){return new qa(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(A(this.node).contains(e))return!0;let i=e,n=e.ownerDocument;for(;i&&i!==n&&i!==this.node;)i=A(i).parentNode||A(i).host;return i===this.node}getOwnerRoot(){return A(this.node).getRootNode()}getDistributedNodes(){return this.node.localName==="slot"?A(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],i=A(this.node).assignedSlot;for(;i;)e.push(i),i=A(i).assignedSlot;return e}importNode(e,i){let n=this.node instanceof Document?this.node:this.node.ownerDocument;return A(n).importNode(e,i)}getEffectiveChildNodes(){return qa.getFlattenedNodes(this.node)}queryDistributedElements(e){let i=this.getEffectiveChildNodes(),n=[];for(let r=0,o=i.length,a;r<o&&(a=i[r]);r++)a.nodeType===Node.ELEMENT_NODE&&uc(a,e)&&n.push(a);return n}get activeElement(){let e=this.node;return e._activeElement!==void 0?e._activeElement:e.activeElement}}function f1(t,e){for(let i=0;i<e.length;i++){let n=e[i];t[n]=function(){return this.node[n].apply(this.node,arguments)}}}function Ba(t,e){for(let i=0;i<e.length;i++){let n=e[i];Object.defineProperty(t,n,{get:function(){return this.node[n]},configurable:!0})}}function m1(t,e){for(let i=0;i<e.length;i++){let n=e[i];Object.defineProperty(t,n,{get:function(){return this.node[n]},set:function(r){this.node[n]=r},configurable:!0})}}class Gr{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}H.prototype.cloneNode;H.prototype.appendChild;H.prototype.insertBefore;H.prototype.removeChild;H.prototype.replaceChild;H.prototype.setAttribute;H.prototype.removeAttribute;H.prototype.querySelector;H.prototype.querySelectorAll;H.prototype.parentNode;H.prototype.firstChild;H.prototype.lastChild;H.prototype.nextSibling;H.prototype.previousSibling;H.prototype.firstElementChild;H.prototype.lastElementChild;H.prototype.nextElementSibling;H.prototype.previousElementSibling;H.prototype.childNodes;H.prototype.children;H.prototype.classList;H.prototype.textContent;H.prototype.innerHTML;let Yr=H;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class t extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(H.prototype).forEach(e=>{e!="activeElement"&&(t.prototype[e]=H.prototype[e])}),Ba(t.prototype,["classList"]),Yr=t,Object.defineProperties(Gr.prototype,{localTarget:{get(){const e=this.event.currentTarget,i=e&&L(e).getOwnerRoot(),n=this.path;for(let r=0;r<n.length;r++){const o=n[r];if(L(o).getOwnerRoot()===i)return o}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else f1(H.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll","attachShadow"]),Ba(H.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList","shadowRoot"]),m1(H.prototype,["textContent","innerHTML","className"]);const L=function(t){if(t=t||document,t instanceof Yr||t instanceof Gr)return t;let e=t.__domApi;return e||(t instanceof Event?e=new Gr(t):e=new Yr(t),t.__domApi=e),e};/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const fr=window.ShadyDOM,ja=window.ShadyCSS;function Ua(t,e){return A(t).getRootNode()===e}function g1(t,e=!1){if(!fr||!ja||!fr.handlesDynamicScoping)return null;const i=ja.ScopingShim;if(!i)return null;const n=i.scopeForNode(t),r=A(t).getRootNode(),o=a=>{if(!Ua(a,r))return;const s=Array.from(fr.nativeMethods.querySelectorAll.call(a,"*"));s.push(a);for(let l=0;l<s.length;l++){const c=s[l];if(!Ua(c,r))continue;const u=i.currentScopeForNode(c);u!==n&&(u!==""&&i.unscopeNode(c,u),i.scopeNode(c,n))}};if(o(t),e){const a=new MutationObserver(s=>{for(let l=0;l<s.length;l++){const c=s[l];for(let u=0;u<c.addedNodes.length;u++){const d=c.addedNodes[u];d.nodeType===Node.ELEMENT_NODE&&o(d)}}});return a.observe(t,{childList:!0,subtree:!0}),a}else return null}/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const mr="disable-upgrade",dc=t=>{for(;t;){const e=Object.getOwnPropertyDescriptor(t,"observedAttributes");if(e)return e.get;t=Object.getPrototypeOf(t.prototype).constructor}return()=>[]};re(t=>{const e=Fn(t);let i=dc(e);class n extends e{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return i.call(this).concat(mr)}_initializeProperties(){this.hasAttribute(mr)?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(o){return super._canApplyPropertyDefault(o)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(o))}attributeChangedCallback(o,a,s,l){o==mr?this.__isUpgradeDisabled&&s==null&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,A(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(o,a,s,l)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}return n});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Mi="disable-upgrade";let b1=window.ShadyCSS;const Mo=re(t=>{const e=ic(Fn(t)),i=Ir?e:s1(e),n=dc(i),r={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class o extends i{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(s,l,c){(this.__dataAttributes&&this.__dataAttributes[s]||s===Mi)&&this.attributeChangedCallback(s,l,c,null)}setAttribute(s,l){if(Si&&!this._legacyForceObservedAttributes){const c=this.getAttribute(s);super.setAttribute(s,l),this.__attributeReaction(s,c,String(l))}else super.setAttribute(s,l)}removeAttribute(s){if(Si&&!this._legacyForceObservedAttributes){const l=this.getAttribute(s);super.removeAttribute(s),this.__attributeReaction(s,l,null)}else super.removeAttribute(s)}static get observedAttributes(){return Si&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],this.prototype,void 0),this.__observedAttributes):n.call(this).concat(Mi)}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(s){return super._canApplyPropertyDefault(s)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(s))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(s,l,c,u){l!==c&&(s==Mi?this.__isUpgradeDisabled&&c==null&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,A(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(s,l,c,u),this.attributeChanged(s,l,c)))}attributeChanged(s,l,c){}_initializeProperties(){if(ti&&this.hasAttribute(Mi))this.__isUpgradeDisabled=!0;else{let s=Object.getPrototypeOf(this);s.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",s))||(this._registered(),s.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),Si&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const s=this.attributes;for(let l=0,c=s.length;l<c;l++){const u=s[l];this.__attributeReaction(u.name,null,u.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(s){return this._serializeValue(s)}deserialize(s,l){return this._deserializeValue(s,l)}reflectPropertyToAttribute(s,l,c){this._propertyToAttribute(s,l,c)}serializeValueToAttribute(s,l,c){this._valueToNodeAttribute(c||this,s,l)}extend(s,l){if(!(s&&l))return s||l;let c=Object.getOwnPropertyNames(l);for(let u=0,d;u<c.length&&(d=c[u]);u++){let p=Object.getOwnPropertyDescriptor(l,d);p&&Object.defineProperty(s,d,p)}return s}mixin(s,l){for(let c in l)s[c]=l[c];return s}chainObject(s,l){return s&&l&&s!==l&&(s.__proto__=l),s}instanceTemplate(s){let l=this.constructor._contentForTemplate(s);return document.importNode(l,!0)}fire(s,l,c){c=c||{},l=l??{};let u=new Event(s,{bubbles:c.bubbles===void 0?!0:c.bubbles,cancelable:!!c.cancelable,composed:c.composed===void 0?!0:c.composed});u.detail=l;let d=c.node||this;return A(d).dispatchEvent(u),u}listen(s,l,c){s=s||this;let u=this.__boundListeners||(this.__boundListeners=new WeakMap),d=u.get(s);d||(d={},u.set(s,d));let p=l+c;d[p]||(d[p]=this._addMethodEventListenerToNode(s,l,c,this))}unlisten(s,l,c){s=s||this;let u=this.__boundListeners&&this.__boundListeners.get(s),d=l+c,p=u&&u[d];p&&(this._removeEventListenerFromNode(s,l,p),u[d]=null)}setScrollDirection(s,l){tc(l||this,r[s]||"auto")}$$(s){return this.root.querySelector(s)}get domHost(){let s=A(this).getRootNode();return s instanceof DocumentFragment?s.host:s}distributeContent(){const l=L(this);window.ShadyDOM&&l.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return L(this).getEffectiveChildNodes()}queryDistributedElements(s){return L(this).queryDistributedElements(s)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter(function(l){return l.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let s=this.getEffectiveChildNodes(),l=[];for(let c=0,u;u=s[c];c++)u.nodeType!==Node.COMMENT_NODE&&l.push(u.textContent);return l.join("")}queryEffectiveChildren(s){let l=this.queryDistributedElements(s);return l&&l[0]}queryAllEffectiveChildren(s){return this.queryDistributedElements(s)}getContentChildNodes(s){let l=this.root.querySelector(s||"slot");return l?L(l).getDistributedNodes():[]}getContentChildren(s){return this.getContentChildNodes(s).filter(function(c){return c.nodeType===Node.ELEMENT_NODE})}isLightDescendant(s){const l=this;return l!==s&&A(l).contains(s)&&A(l).getRootNode()===A(s).getRootNode()}isLocalDescendant(s){return this.root===A(s).getRootNode()}scopeSubtree(s,l=!1){return g1(s,l)}getComputedStyleValue(s){return b1.getComputedStyleValue(this,s)}debounce(s,l,c){return this._debouncers=this._debouncers||{},this._debouncers[s]=Re.debounce(this._debouncers[s],c>0?st.after(c):Te,l.bind(this))}isDebouncerActive(s){this._debouncers=this._debouncers||{};let l=this._debouncers[s];return!!(l&&l.isActive())}flushDebouncer(s){this._debouncers=this._debouncers||{};let l=this._debouncers[s];l&&l.flush()}cancelDebouncer(s){this._debouncers=this._debouncers||{};let l=this._debouncers[s];l&&l.cancel()}async(s,l){return l>0?st.run(s.bind(this),l):~Te.run(s.bind(this))}cancelAsync(s){s<0?Te.cancel(~s):st.cancel(s)}create(s,l){let c=document.createElement(s);if(l)if(c.setProperties)c.setProperties(l);else for(let u in l)c[u]=l[u];return c}elementMatches(s,l){return uc(l||this,s)}toggleAttribute(s,l){let c=this;return arguments.length===3&&(c=arguments[2]),arguments.length==1&&(l=!c.hasAttribute(s)),l?(A(c).setAttribute(s,""),!0):(A(c).removeAttribute(s),!1)}toggleClass(s,l,c){c=c||this,arguments.length==1&&(l=!c.classList.contains(s)),l?c.classList.add(s):c.classList.remove(s)}transform(s,l){l=l||this,l.style.webkitTransform=s,l.style.transform=s}translate3d(s,l,c,u){u=u||this,this.transform("translate3d("+s+","+l+","+c+")",u)}arrayDelete(s,l){let c;if(Array.isArray(s)){if(c=s.indexOf(l),c>=0)return s.splice(c,1)}else if(c=k(this,s).indexOf(l),c>=0)return this.splice(s,c,1);return null}_logger(s,l){switch(Array.isArray(l)&&l.length===1&&Array.isArray(l[0])&&(l=l[0]),s){case"log":case"warn":case"error":console[s](...l)}}_log(...s){this._logger("log",s)}_warn(...s){this._logger("warn",s)}_error(...s){this._logger("error",s)}_logf(s,...l){return["[%s::%s]",this.is,s,...l]}}return o.prototype.is="",o});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const y1={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},pc={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},v1=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},pc);function _1(t,e,i){const n=t._noAccessors,r=Object.getOwnPropertyNames(t);for(let o=0;o<r.length;o++){let a=r[o];if(!(a in i))if(n)e[a]=t[a];else{let s=Object.getOwnPropertyDescriptor(t,a);s&&(s.configurable=!0,Object.defineProperty(e,a,s))}}}function x1(t,e,i){for(let n=0;n<e.length;n++)hc(t,e[n],i,v1)}function hc(t,e,i,n){_1(e,t,n);for(let r in y1)e[r]&&(i[r]=i[r]||[],i[r].push(e[r]))}function fc(t,e,i){e=e||[];for(let n=t.length-1;n>=0;n--){let r=t[n];r?Array.isArray(r)?fc(r,e):e.indexOf(r)<0&&(!i||i.indexOf(r)<0)&&e.unshift(r):console.warn("behavior is null, check for missing or 404 import")}return e}function Ka(t,e){for(const i in e){const n=t[i],r=e[i];!("value"in r)&&n&&"value"in n?t[i]=Object.assign({value:n.value},r):t[i]=r}}const Wa=Mo(HTMLElement);function w1(t,e,i){let n;const r={};class o extends e{static _finalizeClass(){if(!this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this)))e._finalizeClass.call(this);else{if(n)for(let l=0,c;l<n.length;l++)c=n[l],c.properties&&this.createProperties(c.properties),c.observers&&this.createObservers(c.observers,c.properties);t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties),this._prepareTemplate()}}static get properties(){const l={};if(n)for(let c=0;c<n.length;c++)Ka(l,n[c].properties);return Ka(l,t.properties),l}static get observers(){let l=[];if(n)for(let c=0,u;c<n.length;c++)u=n[c],u.observers&&(l=l.concat(u.observers));return t.observers&&(l=l.concat(t.observers)),l}created(){super.created();const l=r.created;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}_registered(){const l=o.prototype;if(!l.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",l))){l.__hasRegisterFinished=!0,super._registered(),ti&&a(l);const c=Object.getPrototypeOf(this);let u=r.beforeRegister;if(u)for(let d=0;d<u.length;d++)u[d].call(c);if(u=r.registered,u)for(let d=0;d<u.length;d++)u[d].call(c)}}_applyListeners(){super._applyListeners();const l=r.listeners;if(l)for(let c=0;c<l.length;c++){const u=l[c];if(u)for(let d in u)this._addMethodEventListenerToNode(this,d,u[d])}}_ensureAttributes(){const l=r.hostAttributes;if(l)for(let c=l.length-1;c>=0;c--){const u=l[c];for(let d in u)this._ensureAttribute(d,u[d])}super._ensureAttributes()}ready(){super.ready();let l=r.ready;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}attached(){super.attached();let l=r.attached;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}detached(){super.detached();let l=r.detached;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}attributeChanged(l,c,u){super.attributeChanged();let d=r.attributeChanged;if(d)for(let p=0;p<d.length;p++)d[p].call(this,l,c,u)}}if(i){Array.isArray(i)||(i=[i]);let s=e.prototype.behaviors;n=fc(i,null,s),o.prototype.behaviors=s?s.concat(i):n}const a=s=>{n&&x1(s,n,r),hc(s,t,r,pc)};return ti||a(o.prototype),o.generatedFrom=t,o}const C1=function(t,e){t||console.warn("Polymer.Class requires `info` argument");let i=e?e(Wa):Wa;return i=w1(t,i,t.behaviors),i.is=i.prototype.is=t.is,i};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const B=function(t){let e;return typeof t=="function"?e=t:e=B.Class(t),t._legacyForceObservedAttributes&&(e.prototype._legacyForceObservedAttributes=t._legacyForceObservedAttributes),customElements.define(e.is,e),e};B.Class=C1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ko(t,e,i,n,r){let o;r&&(o=typeof i=="object"&&i!==null,o&&(n=t.__dataTemp[e]));let a=n!==i&&(n===n||i===i);return o&&a&&(t.__dataTemp[e]=i),a}const Lo=re(t=>{class e extends t{_shouldPropertyChange(n,r,o){return ko(this,n,r,o,!0)}}return e}),mc=re(t=>{class e extends t{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(n,r,o){return ko(this,n,r,o,this.mutableData)}}return e});Lo._mutablePropertyChange=ko;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Jr=null;function Xr(){return Jr}Xr.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:Xr,writable:!0}});const gc=Rn(Xr),S1=Lo(gc);function z1(t,e){Jr=t,Object.setPrototypeOf(t,e.prototype),new e,Jr=null}const A1=Rn(class{});function bc(t,e){for(let i=0;i<e.length;i++){let n=e[i];if(!!t!=!!n.__hideTemplateChildren__)if(n.nodeType===Node.TEXT_NODE)t?(n.__polymerTextContent__=n.textContent,n.textContent=""):n.textContent=n.__polymerTextContent__;else if(n.localName==="slot")if(t)n.__polymerReplaced__=document.createComment("hidden-slot"),A(A(n).parentNode).replaceChild(n.__polymerReplaced__,n);else{const r=n.__polymerReplaced__;r&&A(A(r).parentNode).replaceChild(n,r)}else n.style&&(t?(n.__polymerDisplay__=n.style.display,n.style.display="none"):n.style.display=n.__polymerDisplay__);n.__hideTemplateChildren__=t,n._showHideChildren&&n._showHideChildren(t)}}class Ve extends A1{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let i=[];this.children=i;for(let r=this.root.firstChild;r;r=r.nextSibling)i.push(r),r.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let n=this.__templatizeOptions;(e&&n.instanceProps||!n.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let n in this.__hostProps)this._setPendingProperty(n,this.__dataHost["_host_"+n]);for(let n in e)this._setPendingProperty(n,e[n])}forwardHostProp(e,i){this._setPendingPropertyOrPath(e,i,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,i,n){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,i,r=>{r.model=this,n(r)});else{let r=this.__dataHost.__dataHost;r&&r._addEventListenerToNode(e,i,n)}}_showHideChildren(e){bc(e,this.children)}_setUnmanagedPropertyToNode(e,i,n){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&i=="textContent"?e.__polymerTextContent__=n:super._setUnmanagedPropertyToNode(e,i,n)}get parentModel(){let e=this.__parentModel;if(!e){let i;e=this;do e=e.__dataHost.__dataHost;while((i=e.__templatizeOptions)&&!i.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}Ve.prototype.__dataHost;Ve.prototype.__templatizeOptions;Ve.prototype._methodHost;Ve.prototype.__templatizeOwner;Ve.prototype.__hostProps;const E1=Lo(Ve);function Ga(t){let e=t.__dataHost;return e&&e._methodHost||e}function M1(t,e,i){let n=i.mutableData?E1:Ve;wn.mixin&&(n=wn.mixin(n));let r=class extends n{};return r.prototype.__templatizeOptions=i,r.prototype._bindTemplate(t),$1(r,t,e,i),r}function k1(t,e,i,n){let r=i.forwardHostProp;if(r&&e.hasHostProps){const o=t.localName=="template";let a=e.templatizeTemplateClass;if(!a){if(o){let l=i.mutableData?S1:gc;class c extends l{}a=e.templatizeTemplateClass=c}else{const l=t.constructor;class c extends l{}a=e.templatizeTemplateClass=c}let s=e.hostProps;for(let l in s)a.prototype._addPropertyEffect("_host_"+l,a.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:L1(l,r)}),a.prototype._createNotifyingProperty("_host_"+l);Ys&&n&&P1(e,i,n)}if(t.__dataProto&&Object.assign(t.__data,t.__dataProto),o)z1(t,a),t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties();else{Object.setPrototypeOf(t,a.prototype);const s=e.hostProps;for(let l in s)if(l="_host_"+l,l in t){const c=t[l];delete t[l],t.__data[l]=c}}}}function L1(t,e){return function(n,r,o){e.call(n.__templatizeOwner,r.substring(6),o[r])}}function $1(t,e,i,n){let r=i.hostProps||{};for(let o in n.instanceProps){delete r[o];let a=n.notifyInstanceProp;a&&t.prototype._addPropertyEffect(o,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:O1(o,a)})}if(n.forwardHostProp&&e.__dataHost)for(let o in r)i.hasHostProps||(i.hasHostProps=!0),t.prototype._addPropertyEffect(o,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:T1()})}function O1(t,e){return function(n,r,o){e.call(n.__templatizeOwner,n,r,o[r])}}function T1(){return function(e,i,n){e.__dataHost._setPendingPropertyOrPath("_host_"+i,n[i],!0,!0)}}function wn(t,e,i){if(ft&&!Ga(t))throw new Error("strictTemplatePolicy: template owner not trusted");if(i=i||{},t.__templatizeOwner)throw new Error("A <template> can only be templatized once");t.__templatizeOwner=e;let r=(e?e.constructor:Ve)._parseTemplate(t),o=r.templatizeInstanceClass;o||(o=M1(t,r,i),r.templatizeInstanceClass=o);const a=Ga(t);k1(t,r,i,a);let s=class extends o{};return s.prototype._methodHost=a,s.prototype.__dataHost=t,s.prototype.__templatizeOwner=e,s.prototype.__hostProps=r.hostProps,s=s,s}function P1(t,e,i){const n=i.constructor._properties,{propertyEffects:r}=t,{instanceProps:o}=e;for(let a in r)if(!n[a]&&!(o&&o[a])){const s=r[a];for(let l=0;l<s.length;l++){const{part:c}=s[l].info;if(!(c.signature&&c.signature.static)){console.warn(`Property '${a}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}function I1(t,e){let i;for(;e;)if(i=e.__dataHost?e:e.__templatizeInstance)if(i.__dataHost!=t)e=i.__dataHost;else return i;else e=A(e).parentNode;return null}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Ya=!1;function $o(){if(ti&&!In){if(!Ya){Ya=!0;const t=document.createElement("style");t.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(t)}return!0}return!1}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const H1=ic(mc(Rn(HTMLElement)));class R1 extends H1{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),ft)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(e,i,n,r){this.mutableData=!0}connectedCallback(){$o()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){A(A(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e=e||this.querySelector("template"),!e){let i=new MutationObserver(()=>{if(e=this.querySelector("template"),e)i.disconnect(),this.render();else throw new Error("dom-bind requires a <template> child")});i.observe(this,{childList:!0});return}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let i=this.root.firstChild;i;i=i.nextSibling)this.__children[this.__children.length]=i;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}}customElements.define("dom-bind",R1);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const F1=mc(K);class Ja extends F1{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!Lr,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e);this.__chunkingId&&cancelAnimationFrame(this.__chunkingId)}connectedCallback(){if(super.connectedCallback(),$o()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let e=A(A(this).parentNode);for(let i=0;i<this.__instances.length;i++)this.__attachInstance(i,e);this.__chunkingId&&this.__render()}}__ensureTemplatized(){if(!this.__ctor){const e=this;let i=this.template=e._templateInfo?e:this.querySelector("template");if(!i){let r=new MutationObserver(()=>{if(this.querySelector("template"))r.disconnect(),this.__render();else throw new Error("dom-repeat requires a <template> child")});return r.observe(this,{childList:!0}),!1}let n={};n[this.as]=!0,n[this.indexAs]=!0,n[this.itemsIndexAs]=!0,this.__ctor=wn(i,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:n,forwardHostProp:function(r,o){let a=this.__instances;for(let s=0,l;s<a.length&&(l=a[s]);s++)l.forwardHostProp(r,o)},notifyInstanceProp:function(r,o,a){if(Hu(this.as,o)){let s=r[this.itemsIndexAs];o==this.as&&(this.items[s]=a);let l=ri(this.as,`${JSCompiler_renameProperty("items",this)}.${s}`,o);this.notifyPath(l,a)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if(typeof e=="string"){let i=e,n=this.__getMethodHost();return function(){return n[i].apply(n,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn){if(!e)this.__debounceRender(this.__render,this.delay);else if(this.__observePaths){let i=this.__observePaths;for(let n=0;n<i.length;n++)e.indexOf(i[n])===0&&this.__debounceRender(this.__render,this.delay)}}}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||(e.path==="items"&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(e,i=0){this.__renderDebouncer=Re.debounce(this.__renderDebouncer,i>0?st.after(i):Te,e.bind(this)),_o(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),cc()}__render(){if(!this.__ensureTemplatized())return;let e=this.items||[];const i=this.__sortAndFilterItems(e),n=this.__calculateLimit(i.length);this.__updateInstances(e,n,i),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>{this.__chunkingId=null,this.__continueChunking()})),this._setRenderedItemCount(this.__instances.length),(!Lr||this.notifyDomChange)&&this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(e){let i=new Array(e.length);for(let n=0;n<e.length;n++)i[n]=n;return this.__filterFn&&(i=i.filter((n,r,o)=>this.__filterFn(e[n],r,o))),this.__sortFn&&i.sort((n,r)=>this.__sortFn(e[n],e[r])),i}__calculateLimit(e){let i=e;const n=this.__instances.length;if(this.initialCount){let r;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(i=Math.min(e,this.initialCount),r=Math.max(i-n,0),this.__chunkCount=r||1):(r=Math.min(Math.max(e-n,0),this.__chunkCount),i=Math.min(n+r,e)),this.__shouldMeasureChunk=r===this.__chunkCount,this.__shouldContinueChunking=i<e,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,i}__continueChunking(){if(this.__shouldMeasureChunk){const e=performance.now()-this.__renderStartTime,i=this._targetFrameTime/e;this.__chunkCount=Math.round(this.__chunkCount*i)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(e,i,n){const r=this.__itemsIdxToInstIdx={};let o;for(o=0;o<i;o++){let a=this.__instances[o],s=n[o],l=e[s];r[s]=o,a?(a._setPendingProperty(this.as,l),a._setPendingProperty(this.indexAs,o),a._setPendingProperty(this.itemsIndexAs,s),a._flushProperties()):this.__insertInstance(l,o,s)}for(let a=this.__instances.length-1;a>=o;a--)this.__detachAndRemoveInstance(a)}__detachInstance(e){let i=this.__instances[e];const n=A(i.root);for(let r=0;r<i.children.length;r++){let o=i.children[r];n.appendChild(o)}return i}__attachInstance(e,i){let n=this.__instances[e];i.insertBefore(n.root,this)}__detachAndRemoveInstance(e){this.__detachInstance(e),this.__instances.splice(e,1)}__stampInstance(e,i,n){let r={};return r[this.as]=e,r[this.indexAs]=i,r[this.itemsIndexAs]=n,new this.__ctor(r)}__insertInstance(e,i,n){const r=this.__stampInstance(e,i,n);let o=this.__instances[i+1],a=o?o.children[0]:this;return A(A(this).parentNode).insertBefore(r.root,a),this.__instances[i]=r,r}_showHideChildren(e){for(let i=0;i<this.__instances.length;i++)this.__instances[i]._showHideChildren(e)}__handleItemPath(e,i){let n=e.slice(6),r=n.indexOf("."),o=r<0?n:n.substring(0,r);if(o==parseInt(o,10)){let a=r<0?"":n.substring(r+1);this.__handleObservedPaths(a);let s=this.__itemsIdxToInstIdx[o],l=this.__instances[s];if(l){let c=this.as+(a?"."+a:"");l._setPendingPropertyOrPath(c,i,!1,!0),l._flushProperties()}return!0}}itemForElement(e){let i=this.modelForElement(e);return i&&i[this.as]}indexForElement(e){let i=this.modelForElement(e);return i&&i[this.indexAs]}modelForElement(e){return I1(this.template,e)}}customElements.define(Ja.is,Ja);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class yc extends K{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=Re.debounce(this.__renderDebouncer,Te,()=>this.__render()),_o(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const e=A(this).parentNode;(!e||e.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!A(e).host)&&this.__teardownInstance()}connectedCallback(){super.connectedCallback(),$o()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const e=this;let i=e._templateInfo?e:A(e).querySelector("template");if(!i){let n=new MutationObserver(()=>{if(A(this).querySelector("template"))n.disconnect(),this.__render();else throw new Error("dom-if requires a <template> child")});return n.observe(this,{childList:!0}),!1}this.__template=i}return!0}__ensureInstance(){let e=A(this).parentNode;if(this.__hasInstance()){let i=this.__getInstanceNodes();if(i&&i.length&&A(this).previousSibling!==i[i.length-1])for(let r=0,o;r<i.length&&(o=i[r]);r++)A(e).insertBefore(o,this)}else{if(!e||!this.__ensureTemplate())return!1;this.__createAndInsertInstance(e)}return!0}render(){cc()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),(!Lr||this.notifyDomChange)&&this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(e){}__teardownInstance(){}_showHideChildren(){}}class N1 extends yc{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(e){const i=this.__dataHost||this;if(ft&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const n=i._bindTemplate(this.__template,!0);n.runEffects=(r,o,a)=>{let s=this.__syncInfo;if(this.if)s&&(this.__syncInfo=null,this._showHideChildren(),o=Object.assign(s.changedProps,o)),r(o,a);else if(this.__instance)if(s||(s=this.__syncInfo={runEffects:r,changedProps:{}}),a)for(const l in o){const c=ke(l);s.changedProps[c]=this.__dataHost[c]}else Object.assign(s.changedProps,o)},this.__instance=i._stampTemplate(this.__template,n),A(e).insertBefore(this.__instance,this)}__syncHostProperties(){const e=this.__syncInfo;e&&(this.__syncInfo=null,e.runEffects(e.changedProps,!1))}__teardownInstance(){const e=this.__dataHost||this;this.__instance&&(e._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==e&&(this.__instance.__hidden=e,bc(e,this.__instance.templateInfo.childNodes)),e||this.__syncHostProperties()}}class V1 extends yc{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(e){this.__ctor||(this.__ctor=wn(this.__template,this,{mutableData:!0,forwardHostProp:function(i,n){this.__instance&&(this.if?this.__instance.forwardHostProp(i,n):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[ke(i)]=!0))}})),this.__instance=new this.__ctor,A(e).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let i=A(e[0]).parentNode;if(i){i=A(i);for(let n=0,r;n<e.length&&(r=e[n]);n++)i.removeChild(r)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let e=this.__invalidProps;if(e){this.__invalidProps=null;for(let i in e)this.__instance._setPendingProperty(i,this.__dataHost[i]);this.__instance._flushProperties()}}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==e&&(this.__instance.__hidden=e,this.__instance._showHideChildren(e)),e||this.__syncHostProperties()}}const Xa=Js?N1:V1;customElements.define(Xa.is,Xa);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let D1=re(t=>{let e=Fn(t);class i extends e{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(r,o){let a=o.path;if(a==JSCompiler_renameProperty("items",this)){let s=o.base||[],l=this.__lastItems,c=this.__lastMulti;if(r!==c&&this.clearSelection(),l){let u=lc(s,l);this.__applySplices(u)}this.__lastItems=s,this.__lastMulti=r}else if(o.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(o.value.indexSplices);else{let s=a.slice(`${JSCompiler_renameProperty("items",this)}.`.length),l=parseInt(s,10);s.indexOf(".")<0&&s==l&&this.__deselectChangedIdx(l)}}__applySplices(r){let o=this.__selectedMap;for(let s=0;s<r.length;s++){let l=r[s];o.forEach((c,u)=>{c<l.index||(c>=l.index+l.removed.length?o.set(u,c+l.addedCount-l.removed.length):o.set(u,-1))});for(let c=0;c<l.addedCount;c++){let u=l.index+c;o.has(this.items[u])&&o.set(this.items[u],u)}}this.__updateLinks();let a=0;o.forEach((s,l)=>{s<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),a,1):this.selected=this.selectedItem=null,o.delete(l)):a++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let r=0;this.__selectedMap.forEach(o=>{o>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${o}`,`${JSCompiler_renameProperty("selected",this)}.${r++}`)})}else this.__selectedMap.forEach(r=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${r}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${r}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(r){return this.__selectedMap.has(r)}isIndexSelected(r){return this.isSelected(this.items[r])}__deselectChangedIdx(r){let o=this.__selectedIndexForItemIndex(r);if(o>=0){let a=0;this.__selectedMap.forEach((s,l)=>{o==a++&&this.deselect(l)})}}__selectedIndexForItemIndex(r){let o=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${r}`];if(o)return parseInt(o.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(r){let o=this.__selectedMap.get(r);if(o>=0){this.__selectedMap.delete(r);let a;this.multi&&(a=this.__selectedIndexForItemIndex(o)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),a,1):this.selected=this.selectedItem=null}}deselectIndex(r){this.deselect(this.items[r])}select(r){this.selectIndex(this.items.indexOf(r))}selectIndex(r){let o=this.items[r];this.isSelected(o)?this.toggle&&this.deselectIndex(r):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(o,r),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),o):this.selected=this.selectedItem=o)}}return i}),q1=D1(K);class Za extends q1{static get is(){return"array-selector"}static get template(){return null}}customElements.define(Za.is,Za);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Qi=new He;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,i){},prepareTemplateDom(t,e){},prepareTemplateStyles(t,e,i){},styleSubtree(t,e){Qi.processStyles(),Dr(t,e)},styleElement(t){Qi.processStyles()},styleDocument(t){Qi.processStyles(),Dr(document.body,t)},getComputedStyleValue(t,e){return Wl(t,e)},flushCustomStyles(){},nativeCss:vo,nativeShadow:Kn,cssBuild:ci,disableRuntime:Fl});window.ShadyCSS.CustomStyleInterface=Qi;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Qa="include",B1=window.ShadyCSS.CustomStyleInterface;class j1 extends HTMLElement{constructor(){super(),this._style=null,B1.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const i=e.getAttribute(Qa);return i&&(e.removeAttribute(Qa),e.textContent=Ou(i)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",j1);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const U1=Mo(HTMLElement).prototype;/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const vc=q`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;vc.setAttribute("style","display: none;");document.head.appendChild(vc.content);var _c=document.createElement("style");_c.textContent="[hidden] { display: none !important; }";document.head.appendChild(_c);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class ie{constructor(e){ie[" "](e),this.type=e&&e.type||"default",this.key=e&&e.key,e&&"value"in e&&(this.value=e.value)}get value(){var e=this.type,i=this.key;if(e&&i)return ie.types[e]&&ie.types[e][i]}set value(e){var i=this.type,n=this.key;i&&n&&(i=ie.types[i]=ie.types[i]||{},e==null?delete i[n]:i[n]=e)}get list(){var e=this.type;if(e){var i=ie.types[this.type];return i?Object.keys(i).map(function(n){return K1[this.type][n]},this):[]}}byKey(e){return this.key=e,this.value}}ie[" "]=function(){};ie.types={};var K1=ie.types;B({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(t,e,i){var n=new ie({type:t,key:e});return i!==void 0&&i!==n.value?n.value=i:this.value!==n.value&&(this.value=n.value),n},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(t){t&&(this.value=this)},byKey:function(t){return new ie({type:this.type,key:t}).value}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/B({_template:q`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:U1.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(t){var e=(t||"").split(":");this._iconName=e.pop(),this._iconsetName=e.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(t){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&L(this.root).removeChild(this._img),this._iconName===""?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,L(this.root).appendChild(this._img))}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/B({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new ie({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map(function(t){return this.name+":"+t},this)},applyIcon:function(t,e){this.removeIcon(t);var i=this._cloneIcon(e,this.rtlMirroring&&this._targetIsRTL(t));if(i){var n=L(t.root||t);return n.insertBefore(i,n.childNodes[0]),t._svgIcon=i}return null},removeIcon:function(t){t._svgIcon&&(L(t.root||t).removeChild(t._svgIcon),t._svgIcon=null)},_targetIsRTL:function(t){if(this.__targetIsRTL==null)if(this.useGlobalRtlAttribute){var e=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL=e.getAttribute("dir")==="rtl"}else t&&t.nodeType!==Node.ELEMENT_NODE&&(t=t.host),this.__targetIsRTL=t&&window.getComputedStyle(t).direction==="rtl";return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async(function(){this.fire("iron-iconset-added",this,{node:window})})},_createIconMap:function(){var t=Object.create(null);return L(this).querySelectorAll("[id]").forEach(function(e){t[e.id]=e}),t},_cloneIcon:function(t,e){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[t],this.size,e)},_prepareSvgClone:function(t,e,i){if(t){var n=t.cloneNode(!0),r=document.createElementNS("http://www.w3.org/2000/svg","svg"),o=n.getAttribute("viewBox")||"0 0 "+e+" "+e,a="pointer-events: none; display: block; width: 100%; height: 100%;";return i&&n.hasAttribute("mirror-in-rtl")&&(a+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),r.setAttribute("viewBox",o),r.setAttribute("preserveAspectRatio","xMidYMid meet"),r.setAttribute("focusable","false"),r.style.cssText=a,r.appendChild(n).removeAttribute("id"),r}return null}});/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const W1=q`<iron-iconset-svg name="icons" size="24">
<svg><defs>
<g id="3d-rotation"><path d="M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z"></path></g>
<g id="accessibility"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"></path></g>
<g id="accessible"><circle cx="12" cy="4" r="2"></circle><path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z"></path></g>
<g id="account-balance"><path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"></path></g>
<g id="account-balance-wallet"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="account-box"><path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"></path></g>
<g id="account-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></g>
<g id="add"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></g>
<g id="add-alert"><path d="M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z"></path></g>
<g id="add-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle-outline"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="add-shopping-cart"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path></g>
<g id="alarm"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></g>
<g id="alarm-add"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"></path></g>
<g id="alarm-off"><path d="M12 6c3.87 0 7 3.13 7 7 0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92 0-4.97-4.03-9-9-9-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6zm10-.28l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM2.92 2.29L1.65 3.57 2.98 4.9l-1.11.93 1.42 1.42 1.11-.94.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.02 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.2 2.2 1.27-1.27L3.89 3.27l-.97-.98zm13.55 16.1C15.26 19.39 13.7 20 12 20c-3.87 0-7-3.13-7-7 0-1.7.61-3.26 1.61-4.47l9.86 9.86zM8.02 3.28L6.6 1.86l-.86.71 1.42 1.42.86-.71z"></path></g>
<g id="alarm-on"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z"></path></g>
<g id="all-out"><path d="M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z"></path></g>
<g id="android"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"></path></g>
<g id="announcement"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"></path></g>
<g id="apps"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path></g>
<g id="archive"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"></path></g>
<g id="arrow-back"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></g>
<g id="arrow-downward"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></g>
<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>
<g id="arrow-drop-down-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z"></path></g>
<g id="arrow-drop-up"><path d="M7 14l5-5 5 5z"></path></g>
<g id="arrow-forward"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g>
<g id="arrow-upward"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></g>
<g id="aspect-ratio"><path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="assessment"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path></g>
<g id="assignment"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path></g>
<g id="assignment-ind"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"></path></g>
<g id="assignment-late"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></g>
<g id="assignment-return"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-5-5 5-5v3h4v4z"></path></g>
<g id="assignment-returned"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z"></path></g>
<g id="assignment-turned-in"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="attachment"><path d="M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"></path></g>
<g id="autorenew"><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"></path></g>
<g id="backspace"><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"></path></g>
<g id="backup"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="block"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"></path></g>
<g id="book"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="bookmark"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="bookmark-border"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="bug-report"><path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"></path></g>
<g id="build"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"></path></g>
<g id="cached"><path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"></path></g>
<g id="camera-enhance"><path d="M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z"></path></g>
<g id="cancel"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></g>
<g id="card-giftcard"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="card-membership"><path d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z"></path></g>
<g id="card-travel"><path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"></path></g>
<g id="change-history"><path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z"></path></g>
<g id="check"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></g>
<g id="check-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="check-box-outline-blank"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="check-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
<g id="chrome-reader-mode"><path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"></path></g>
<g id="class"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="clear"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="close"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="cloud"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"></path></g>
<g id="cloud-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01C8.58 8.28 10.13 7 12 7c2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16z"></path></g>
<g id="cloud-done"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z"></path></g>
<g id="cloud-download"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"></path></g>
<g id="cloud-off"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"></path></g>
<g id="cloud-queue"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"></path></g>
<g id="cloud-upload"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="code"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path></g>
<g id="compare-arrows"><path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"></path></g>
<g id="content-copy"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></g>
<g id="content-cut"><path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"></path></g>
<g id="content-paste"><path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"></path></g>
<g id="copyright"><path d="M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="create"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></g>
<g id="create-new-folder"><path d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"></path></g>
<g id="credit-card"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="dashboard"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></g>
<g id="date-range"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path></g>
<g id="delete"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-forever"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-sweep"><path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"></path></g>
<g id="description"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path></g>
<g id="dns"><path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="done"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></g>
<g id="done-all"><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"></path></g>
<g id="donut-large"><path d="M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z"></path></g>
<g id="donut-small"><path d="M11 9.16V2c-5 .5-9 4.79-9 10s4 9.5 9 10v-7.16c-1-.41-2-1.52-2-2.84s1-2.43 2-2.84zM14.86 11H22c-.48-4.75-4-8.53-9-9v7.16c1 .3 1.52.98 1.86 1.84zM13 14.84V22c5-.47 8.52-4.25 9-9h-7.14c-.34.86-.86 1.54-1.86 1.84z"></path></g>
<g id="drafts"><path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"></path></g>
<g id="eject"><path d="M5 17h14v2H5zm7-12L5.33 15h13.34z"></path></g>
<g id="error"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></g>
<g id="error-outline"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="euro-symbol"><path d="M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1 0 .34.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"></path></g>
<g id="event"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path></g>
<g id="event-seat"><path d="M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z"></path></g>
<g id="exit-to-app"><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="expand-less"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></g>
<g id="expand-more"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></g>
<g id="explore"><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"></path></g>
<g id="extension"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"></path></g>
<g id="face"><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"></path></g>
<g id="favorite"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></g>
<g id="favorite-border"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></g>
<g id="feedback"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"></path></g>
<g id="file-download"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="file-upload"><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"></path></g>
<g id="filter-list"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path></g>
<g id="find-in-page"><path d="M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"></path></g>
<g id="find-replace"><path d="M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z"></path></g>
<g id="fingerprint"><path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"></path></g>
<g id="first-page"><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path></g>
<g id="flag"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path></g>
<g id="flight-land"><path d="M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z"></path></g>
<g id="flight-takeoff"><path d="M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z"></path></g>
<g id="flip-to-back"><path d="M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z"></path></g>
<g id="flip-to-front"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z"></path></g>
<g id="folder"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path></g>
<g id="folder-open"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"></path></g>
<g id="folder-shared"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z"></path></g>
<g id="font-download"><path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"></path></g>
<g id="forward"><path d="M12 8V4l8 8-8 8v-4H4V8z"></path></g>
<g id="fullscreen"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></g>
<g id="fullscreen-exit"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"></path></g>
<g id="g-translate"><path d="M20 5h-9.12L10 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7l1 3h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM7.17 14.59c-2.25 0-4.09-1.83-4.09-4.09s1.83-4.09 4.09-4.09c1.04 0 1.99.37 2.74 1.07l.07.06-1.23 1.18-.06-.05c-.29-.27-.78-.59-1.52-.59-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.07c.04.21.05.4.05.61 0 2.35-1.61 4-3.92 4zm6.03-1.71c.33.6.74 1.18 1.19 1.7l-.54.53-.65-2.23zm.77-.76h-.99l-.31-1.04h3.99s-.34 1.31-1.56 2.74c-.52-.62-.89-1.23-1.13-1.7zM21 20c0 .55-.45 1-1 1h-7l2-2-.81-2.77.92-.92L17.79 18l.73-.73-2.71-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20c.55 0 1 .45 1 1v13z"></path></g>
<g id="gavel"><path d="M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z"></path></g>
<g id="gesture"><path d="M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z"></path></g>
<g id="get-app"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="gif"><path d="M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z"></path></g>
<g id="grade"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="group-work"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="help"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></g>
<g id="help-outline"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path></g>
<g id="highlight-off"><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="history"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="home"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></g>
<g id="hourglass-empty"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"></path></g>
<g id="hourglass-full"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"></path></g>
<g id="http"><path d="M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z"></path></g>
<g id="https"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="important-devices"><path d="M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4c0-1.11-.9-2-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z"></path></g>
<g id="inbox"><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"></path></g>
<g id="indeterminate-check-box"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"></path></g>
<g id="info"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></g>
<g id="info-outline"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path></g>
<g id="input"><path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"></path></g>
<g id="invert-colors"><path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"></path></g>
<g id="label"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"></path></g>
<g id="label-outline"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path></g>
<g id="language"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></g>
<g id="last-page"><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path></g>
<g id="launch"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="lightbulb-outline"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></g>
<g id="line-style"><path d="M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z"></path></g>
<g id="line-weight"><path d="M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z"></path></g>
<g id="link"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></g>
<g id="list"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path></g>
<g id="lock"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="lock-open"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"></path></g>
<g id="lock-outline"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"></path></g>
<g id="low-priority"><path d="M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"></path></g>
<g id="loyalty"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z"></path></g>
<g id="mail"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread-mailbox"><path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"></path></g>
<g id="menu"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></g>
<g id="more-horiz"><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="more-vert"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="motorcycle"><path d="M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path></g>
<g id="move-to-inbox"><path d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"></path></g>
<g id="next-week"><path d="M20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm1 13.5l-1-1 3-3-3-3 1-1 4 4-4 4z"></path></g>
<g id="note-add"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"></path></g>
<g id="offline-pin"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z"></path></g>
<g id="opacity"><path d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z"></path></g>
<g id="open-in-browser"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"></path></g>
<g id="open-in-new"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="open-with"><path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"></path></g>
<g id="pageview"><path d="M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z"></path></g>
<g id="pan-tool"><path d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></path></g>
<g id="payment"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="perm-camera-mic"><path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v4z"></path></g>
<g id="perm-contact-calendar"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"></path></g>
<g id="perm-data-setting"><path d="M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5zm3.71 7.99c.02-.16.04-.32.04-.49 0-.17-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49 0 .17.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32l-1.07-.83zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="perm-device-information"><path d="M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path></g>
<g id="perm-identity"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path></g>
<g id="perm-media"><path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"></path></g>
<g id="perm-phone-msg"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"></path></g>
<g id="perm-scan-wifi"><path d="M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z"></path></g>
<g id="pets"><circle cx="4.5" cy="9.5" r="2.5"></circle><circle cx="9" cy="5.5" r="2.5"></circle><circle cx="15" cy="5.5" r="2.5"></circle><circle cx="19.5" cy="9.5" r="2.5"></circle><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"></path></g>
<g id="picture-in-picture"><path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"></path></g>
<g id="picture-in-picture-alt"><path d="M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z"></path></g>
<g id="play-for-work"><path d="M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z"></path></g>
<g id="polymer"><path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z"></path></g>
<g id="power-settings-new"><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"></path></g>
<g id="pregnant-woman"><path d="M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z"></path></g>
<g id="print"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></g>
<g id="query-builder"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="question-answer"><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path></g>
<g id="radio-button-checked"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="radio-button-unchecked"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="receipt"><path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"></path></g>
<g id="record-voice-over"><circle cx="9" cy="9" r="4"></circle><path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z"></path></g>
<g id="redeem"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="redo"><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"></path></g>
<g id="refresh"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path></g>
<g id="remove"><path d="M19 13H5v-2h14v2z"></path></g>
<g id="remove-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"></path></g>
<g id="remove-circle-outline"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="remove-shopping-cart"><path d="M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"></path></g>
<g id="reorder"><path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"></path></g>
<g id="reply"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="reply-all"><path d="M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="report"><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"></path></g>
<g id="report-problem"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="restore"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="restore-page"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5 1.93 0 3.5-1.57 3.5-3.5S13.93 9.5 12 9.5c-1.35 0-2.52.78-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8c2.76 0 5 2.24 5 5s-2.24 5-5 5z"></path></g>
<g id="room"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="rounded-corner"><path d="M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2V8z"></path></g>
<g id="rowing"><path d="M8.5 14.5L4 19l1.5 1.5L9 17h2l-2.5-2.5zM15 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 20.01L18 24l-2.99-3.01V19.5l-7.1-7.09c-.31.05-.61.07-.91.07v-2.16c1.66.03 3.61-.87 4.67-2.04l1.4-1.55c.19-.21.43-.38.69-.5.29-.14.62-.23.96-.23h.03C15.99 6.01 17 7.02 17 8.26v5.75c0 .84-.35 1.61-.92 2.16l-3.58-3.58v-2.27c-.63.52-1.43 1.02-2.29 1.39L16.5 18H18l3 3.01z"></path></g>
<g id="save"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path></g>
<g id="schedule"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="search"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></g>
<g id="select-all"><path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"></path></g>
<g id="send"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></g>
<g id="settings"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></g>
<g id="settings-applications"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z"></path></g>
<g id="settings-backup-restore"><path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"></path></g>
<g id="settings-bluetooth"><path d="M11 24h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 3.83l1.88 1.88L13 7.59V3.83zm1.88 10.46L13 16.17v-3.76l1.88 1.88z"></path></g>
<g id="settings-brightness"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z"></path></g>
<g id="settings-cell"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8v12z"></path></g>
<g id="settings-ethernet"><path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"></path></g>
<g id="settings-input-antenna"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z"></path></g>
<g id="settings-input-component"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-composite"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-hdmi"><path d="M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z"></path></g>
<g id="settings-input-svideo"><path d="M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5zm7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5zM8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path></g>
<g id="settings-overscan"><path d="M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="settings-phone"><path d="M13 9h-2v2h2V9zm4 0h-2v2h2V9zm3 6.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 9v2h2V9h-2z"></path></g>
<g id="settings-power"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z"></path></g>
<g id="settings-remote"><path d="M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-3 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7.05 6.05l1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z"></path></g>
<g id="settings-voice"><path d="M7 24h2v-2H7v2zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1 11h2v-2h-2v2zm4 0h2v-2h-2v2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z"></path></g>
<g id="shop"><path d="M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z"></path></g>
<g id="shop-two"><path d="M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z"></path></g>
<g id="shopping-basket"><path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="shopping-cart"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="sort"><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"></path></g>
<g id="speaker-notes"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z"></path></g>
<g id="speaker-notes-off"><path d="M10.54 11l-.54-.54L7.54 8 6 6.46 2.38 2.84 1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46 17.54 18l-7-7zM8 14H6v-2h2v2zm-2-3V9l2 2H6zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2z"></path></g>
<g id="spellcheck"><path d="M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z"></path></g>
<g id="star"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="star-border"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="star-half"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="stars"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"></path></g>
<g id="store"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"></path></g>
<g id="subdirectory-arrow-left"><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"></path></g>
<g id="subdirectory-arrow-right"><path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"></path></g>
<g id="subject"><path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"></path></g>
<g id="supervisor-account"><path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"></path></g>
<g id="swap-horiz"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path></g>
<g id="swap-vert"><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"></path></g>
<g id="swap-vertical-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z"></path></g>
<g id="system-update-alt"><path d="M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z"></path></g>
<g id="tab"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z"></path></g>
<g id="tab-unselected"><path d="M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z"></path></g>
<g id="text-format"><path d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z"></path></g>
<g id="theaters"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path></g>
<g id="thumb-down"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path></g>
<g id="thumb-up"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path></g>
<g id="thumbs-up-down"><path d="M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm10.5 4h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z"></path></g>
<g id="timeline"><path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"></path></g>
<g id="toc"><path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"></path></g>
<g id="today"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path></g>
<g id="toll"><path d="M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z"></path></g>
<g id="touch-app"><path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"></path></g>
<g id="track-changes"><path d="M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z"></path></g>
<g id="translate"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path></g>
<g id="trending-down"><path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"></path></g>
<g id="trending-flat"><path d="M22 12l-4-4v3H3v2h15v3z"></path></g>
<g id="trending-up"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></g>
<g id="turned-in"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="turned-in-not"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="unarchive"><path d="M20.55 5.22l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28zM12 9.5l5.5 5.5H14v2h-4v-2H6.5L12 9.5zM5.12 5l.82-1h12l.93 1H5.12z"></path></g>
<g id="undo"><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"></path></g>
<g id="unfold-less"><path d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z"></path></g>
<g id="unfold-more"><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"></path></g>
<g id="update"><path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"></path></g>
<g id="verified-user"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="view-agenda"><path d="M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"></path></g>
<g id="view-array"><path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z"></path></g>
<g id="view-carousel"><path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"></path></g>
<g id="view-column"><path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"></path></g>
<g id="view-day"><path d="M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z"></path></g>
<g id="view-headline"><path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"></path></g>
<g id="view-list"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"></path></g>
<g id="view-module"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"></path></g>
<g id="view-quilt"><path d="M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z"></path></g>
<g id="view-stream"><path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z"></path></g>
<g id="view-week"><path d="M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"></path></g>
<g id="visibility"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></g>
<g id="visibility-off"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path></g>
<g id="warning"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="watch-later"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path></g>
<g id="weekend"><path d="M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2z"></path></g>
<g id="work"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path></g>
<g id="youtube-searched-for"><path d="M17.01 14h-.8l-.27-.27c.98-1.14 1.57-2.61 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51C6.51 7 8.53 5 11.01 5s4.5 2.01 4.5 4.5c0 2.48-2.02 4.5-4.5 4.5-.65 0-1.26-.14-1.82-.38L7.71 15.1c.97.57 2.09.9 3.3.9 1.61 0 3.08-.59 4.22-1.57l.27.27v.79l5.01 4.99L22 19l-4.99-5z"></path></g>
<g id="zoom-in"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path></g>
<g id="zoom-out"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(W1.content);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const xc=q`
<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100: #f4c7c3;
      --google-red-300: #e67c73;
      --google-red-500: #db4437;
      --google-red-700: #c53929;

      --google-blue-100: #c6dafc;
      --google-blue-300: #7baaf7;
      --google-blue-500: #4285f4;
      --google-blue-700: #3367d6;

      --google-green-100: #b7e1cd;
      --google-green-300: #57bb8a;
      --google-green-500: #0f9d58;
      --google-green-700: #0b8043;

      --google-yellow-100: #fce8b2;
      --google-yellow-300: #f7cb4d;
      --google-yellow-500: #f4b400;
      --google-yellow-700: #f09300;

      --google-grey-100: #f5f5f5;
      --google-grey-300: #e0e0e0;
      --google-grey-500: #9e9e9e;
      --google-grey-700: #616161;

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-pink-50: #fce4ec;
      --paper-pink-100: #f8bbd0;
      --paper-pink-200: #f48fb1;
      --paper-pink-300: #f06292;
      --paper-pink-400: #ec407a;
      --paper-pink-500: #e91e63;
      --paper-pink-600: #d81b60;
      --paper-pink-700: #c2185b;
      --paper-pink-800: #ad1457;
      --paper-pink-900: #880e4f;
      --paper-pink-a100: #ff80ab;
      --paper-pink-a200: #ff4081;
      --paper-pink-a400: #f50057;
      --paper-pink-a700: #c51162;

      --paper-purple-50: #f3e5f5;
      --paper-purple-100: #e1bee7;
      --paper-purple-200: #ce93d8;
      --paper-purple-300: #ba68c8;
      --paper-purple-400: #ab47bc;
      --paper-purple-500: #9c27b0;
      --paper-purple-600: #8e24aa;
      --paper-purple-700: #7b1fa2;
      --paper-purple-800: #6a1b9a;
      --paper-purple-900: #4a148c;
      --paper-purple-a100: #ea80fc;
      --paper-purple-a200: #e040fb;
      --paper-purple-a400: #d500f9;
      --paper-purple-a700: #aa00ff;

      --paper-deep-purple-50: #ede7f6;
      --paper-deep-purple-100: #d1c4e9;
      --paper-deep-purple-200: #b39ddb;
      --paper-deep-purple-300: #9575cd;
      --paper-deep-purple-400: #7e57c2;
      --paper-deep-purple-500: #673ab7;
      --paper-deep-purple-600: #5e35b1;
      --paper-deep-purple-700: #512da8;
      --paper-deep-purple-800: #4527a0;
      --paper-deep-purple-900: #311b92;
      --paper-deep-purple-a100: #b388ff;
      --paper-deep-purple-a200: #7c4dff;
      --paper-deep-purple-a400: #651fff;
      --paper-deep-purple-a700: #6200ea;

      --paper-indigo-50: #e8eaf6;
      --paper-indigo-100: #c5cae9;
      --paper-indigo-200: #9fa8da;
      --paper-indigo-300: #7986cb;
      --paper-indigo-400: #5c6bc0;
      --paper-indigo-500: #3f51b5;
      --paper-indigo-600: #3949ab;
      --paper-indigo-700: #303f9f;
      --paper-indigo-800: #283593;
      --paper-indigo-900: #1a237e;
      --paper-indigo-a100: #8c9eff;
      --paper-indigo-a200: #536dfe;
      --paper-indigo-a400: #3d5afe;
      --paper-indigo-a700: #304ffe;

      --paper-blue-50: #e3f2fd;
      --paper-blue-100: #bbdefb;
      --paper-blue-200: #90caf9;
      --paper-blue-300: #64b5f6;
      --paper-blue-400: #42a5f5;
      --paper-blue-500: #2196f3;
      --paper-blue-600: #1e88e5;
      --paper-blue-700: #1976d2;
      --paper-blue-800: #1565c0;
      --paper-blue-900: #0d47a1;
      --paper-blue-a100: #82b1ff;
      --paper-blue-a200: #448aff;
      --paper-blue-a400: #2979ff;
      --paper-blue-a700: #2962ff;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-cyan-50: #e0f7fa;
      --paper-cyan-100: #b2ebf2;
      --paper-cyan-200: #80deea;
      --paper-cyan-300: #4dd0e1;
      --paper-cyan-400: #26c6da;
      --paper-cyan-500: #00bcd4;
      --paper-cyan-600: #00acc1;
      --paper-cyan-700: #0097a7;
      --paper-cyan-800: #00838f;
      --paper-cyan-900: #006064;
      --paper-cyan-a100: #84ffff;
      --paper-cyan-a200: #18ffff;
      --paper-cyan-a400: #00e5ff;
      --paper-cyan-a700: #00b8d4;

      --paper-teal-50: #e0f2f1;
      --paper-teal-100: #b2dfdb;
      --paper-teal-200: #80cbc4;
      --paper-teal-300: #4db6ac;
      --paper-teal-400: #26a69a;
      --paper-teal-500: #009688;
      --paper-teal-600: #00897b;
      --paper-teal-700: #00796b;
      --paper-teal-800: #00695c;
      --paper-teal-900: #004d40;
      --paper-teal-a100: #a7ffeb;
      --paper-teal-a200: #64ffda;
      --paper-teal-a400: #1de9b6;
      --paper-teal-a700: #00bfa5;

      --paper-green-50: #e8f5e9;
      --paper-green-100: #c8e6c9;
      --paper-green-200: #a5d6a7;
      --paper-green-300: #81c784;
      --paper-green-400: #66bb6a;
      --paper-green-500: #4caf50;
      --paper-green-600: #43a047;
      --paper-green-700: #388e3c;
      --paper-green-800: #2e7d32;
      --paper-green-900: #1b5e20;
      --paper-green-a100: #b9f6ca;
      --paper-green-a200: #69f0ae;
      --paper-green-a400: #00e676;
      --paper-green-a700: #00c853;

      --paper-light-green-50: #f1f8e9;
      --paper-light-green-100: #dcedc8;
      --paper-light-green-200: #c5e1a5;
      --paper-light-green-300: #aed581;
      --paper-light-green-400: #9ccc65;
      --paper-light-green-500: #8bc34a;
      --paper-light-green-600: #7cb342;
      --paper-light-green-700: #689f38;
      --paper-light-green-800: #558b2f;
      --paper-light-green-900: #33691e;
      --paper-light-green-a100: #ccff90;
      --paper-light-green-a200: #b2ff59;
      --paper-light-green-a400: #76ff03;
      --paper-light-green-a700: #64dd17;

      --paper-lime-50: #f9fbe7;
      --paper-lime-100: #f0f4c3;
      --paper-lime-200: #e6ee9c;
      --paper-lime-300: #dce775;
      --paper-lime-400: #d4e157;
      --paper-lime-500: #cddc39;
      --paper-lime-600: #c0ca33;
      --paper-lime-700: #afb42b;
      --paper-lime-800: #9e9d24;
      --paper-lime-900: #827717;
      --paper-lime-a100: #f4ff81;
      --paper-lime-a200: #eeff41;
      --paper-lime-a400: #c6ff00;
      --paper-lime-a700: #aeea00;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-amber-50: #fff8e1;
      --paper-amber-100: #ffecb3;
      --paper-amber-200: #ffe082;
      --paper-amber-300: #ffd54f;
      --paper-amber-400: #ffca28;
      --paper-amber-500: #ffc107;
      --paper-amber-600: #ffb300;
      --paper-amber-700: #ffa000;
      --paper-amber-800: #ff8f00;
      --paper-amber-900: #ff6f00;
      --paper-amber-a100: #ffe57f;
      --paper-amber-a200: #ffd740;
      --paper-amber-a400: #ffc400;
      --paper-amber-a700: #ffab00;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-deep-orange-50: #fbe9e7;
      --paper-deep-orange-100: #ffccbc;
      --paper-deep-orange-200: #ffab91;
      --paper-deep-orange-300: #ff8a65;
      --paper-deep-orange-400: #ff7043;
      --paper-deep-orange-500: #ff5722;
      --paper-deep-orange-600: #f4511e;
      --paper-deep-orange-700: #e64a19;
      --paper-deep-orange-800: #d84315;
      --paper-deep-orange-900: #bf360c;
      --paper-deep-orange-a100: #ff9e80;
      --paper-deep-orange-a200: #ff6e40;
      --paper-deep-orange-a400: #ff3d00;
      --paper-deep-orange-a700: #dd2c00;

      --paper-brown-50: #efebe9;
      --paper-brown-100: #d7ccc8;
      --paper-brown-200: #bcaaa4;
      --paper-brown-300: #a1887f;
      --paper-brown-400: #8d6e63;
      --paper-brown-500: #795548;
      --paper-brown-600: #6d4c41;
      --paper-brown-700: #5d4037;
      --paper-brown-800: #4e342e;
      --paper-brown-900: #3e2723;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>
`;xc.setAttribute("style","display: none;");document.head.appendChild(xc.content);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Oo=document.createElement("template");Oo.setAttribute("style","display: none;");Oo.innerHTML=`<dom-module id="paper-spinner-styles">
  <template>
    <style>
      /*
      /**************************/
      /* STYLES FOR THE SPINNER */
      /**************************/

      /*
       * Constants:
       *      ARCSIZE     = 270 degrees (amount of circle the arc takes up)
       *      ARCTIME     = 1333ms (time it takes to expand and contract arc)
       *      ARCSTARTROT = 216 degrees (how much the start location of the arc
       *                                should rotate each time, 216 gives us a
       *                                5 pointed star shape (it's 360/5 * 3).
       *                                For a 7 pointed star, we might do
       *                                360/7 * 3 = 154.286)
       *      SHRINK_TIME = 400ms
       */

      :host {
        display: inline-block;
        position: relative;
        width: 28px;
        height: 28px;

        /* 360 * ARCTIME / (ARCSTARTROT + (360-ARCSIZE)) */
        --paper-spinner-container-rotation-duration: 1568ms;

        /* ARCTIME */
        --paper-spinner-expand-contract-duration: 1333ms;

        /* 4 * ARCTIME */
        --paper-spinner-full-cycle-duration: 5332ms;

        /* SHRINK_TIME */
        --paper-spinner-cooldown-duration: 400ms;
      }

      #spinnerContainer {
        width: 100%;
        height: 100%;

        /* The spinner does not have any contents that would have to be
         * flipped if the direction changes. Always use ltr so that the
         * style works out correctly in both cases. */
        direction: ltr;
      }

      #spinnerContainer.active {
        -webkit-animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;
        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;
      }

      @-webkit-keyframes container-rotate {
        to { -webkit-transform: rotate(360deg) }
      }

      @keyframes container-rotate {
        to { transform: rotate(360deg) }
      }

      .spinner-layer {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        white-space: nowrap;
        color: var(--paper-spinner-color, var(--google-blue-500));
      }

      .layer-1 {
        color: var(--paper-spinner-layer-1-color, var(--google-blue-500));
      }

      .layer-2 {
        color: var(--paper-spinner-layer-2-color, var(--google-red-500));
      }

      .layer-3 {
        color: var(--paper-spinner-layer-3-color, var(--google-yellow-500));
      }

      .layer-4 {
        color: var(--paper-spinner-layer-4-color, var(--google-green-500));
      }

      /**
       * IMPORTANT NOTE ABOUT CSS ANIMATION PROPERTIES (keanulee):
       *
       * iOS Safari (tested on iOS 8.1) does not handle animation-delay very well - it doesn't
       * guarantee that the animation will start _exactly_ after that value. So we avoid using
       * animation-delay and instead set custom keyframes for each color (as layer-2undant as it
       * seems).
       */
      .active .spinner-layer {
        -webkit-animation-name: fill-unfill-rotate;
        -webkit-animation-duration: var(--paper-spinner-full-cycle-duration);
        -webkit-animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        -webkit-animation-iteration-count: infinite;
        animation-name: fill-unfill-rotate;
        animation-duration: var(--paper-spinner-full-cycle-duration);
        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        animation-iteration-count: infinite;
        opacity: 1;
      }

      .active .spinner-layer.layer-1 {
        -webkit-animation-name: fill-unfill-rotate, layer-1-fade-in-out;
        animation-name: fill-unfill-rotate, layer-1-fade-in-out;
      }

      .active .spinner-layer.layer-2 {
        -webkit-animation-name: fill-unfill-rotate, layer-2-fade-in-out;
        animation-name: fill-unfill-rotate, layer-2-fade-in-out;
      }

      .active .spinner-layer.layer-3 {
        -webkit-animation-name: fill-unfill-rotate, layer-3-fade-in-out;
        animation-name: fill-unfill-rotate, layer-3-fade-in-out;
      }

      .active .spinner-layer.layer-4 {
        -webkit-animation-name: fill-unfill-rotate, layer-4-fade-in-out;
        animation-name: fill-unfill-rotate, layer-4-fade-in-out;
      }

      @-webkit-keyframes fill-unfill-rotate {
        12.5% { -webkit-transform: rotate(135deg) } /* 0.5 * ARCSIZE */
        25%   { -webkit-transform: rotate(270deg) } /* 1   * ARCSIZE */
        37.5% { -webkit-transform: rotate(405deg) } /* 1.5 * ARCSIZE */
        50%   { -webkit-transform: rotate(540deg) } /* 2   * ARCSIZE */
        62.5% { -webkit-transform: rotate(675deg) } /* 2.5 * ARCSIZE */
        75%   { -webkit-transform: rotate(810deg) } /* 3   * ARCSIZE */
        87.5% { -webkit-transform: rotate(945deg) } /* 3.5 * ARCSIZE */
        to    { -webkit-transform: rotate(1080deg) } /* 4   * ARCSIZE */
      }

      @keyframes fill-unfill-rotate {
        12.5% { transform: rotate(135deg) } /* 0.5 * ARCSIZE */
        25%   { transform: rotate(270deg) } /* 1   * ARCSIZE */
        37.5% { transform: rotate(405deg) } /* 1.5 * ARCSIZE */
        50%   { transform: rotate(540deg) } /* 2   * ARCSIZE */
        62.5% { transform: rotate(675deg) } /* 2.5 * ARCSIZE */
        75%   { transform: rotate(810deg) } /* 3   * ARCSIZE */
        87.5% { transform: rotate(945deg) } /* 3.5 * ARCSIZE */
        to    { transform: rotate(1080deg) } /* 4   * ARCSIZE */
      }

      @-webkit-keyframes layer-1-fade-in-out {
        0% { opacity: 1 }
        25% { opacity: 1 }
        26% { opacity: 0 }
        89% { opacity: 0 }
        90% { opacity: 1 }
        to { opacity: 1 }
      }

      @keyframes layer-1-fade-in-out {
        0% { opacity: 1 }
        25% { opacity: 1 }
        26% { opacity: 0 }
        89% { opacity: 0 }
        90% { opacity: 1 }
        to { opacity: 1 }
      }

      @-webkit-keyframes layer-2-fade-in-out {
        0% { opacity: 0 }
        15% { opacity: 0 }
        25% { opacity: 1 }
        50% { opacity: 1 }
        51% { opacity: 0 }
        to { opacity: 0 }
      }

      @keyframes layer-2-fade-in-out {
        0% { opacity: 0 }
        15% { opacity: 0 }
        25% { opacity: 1 }
        50% { opacity: 1 }
        51% { opacity: 0 }
        to { opacity: 0 }
      }

      @-webkit-keyframes layer-3-fade-in-out {
        0% { opacity: 0 }
        40% { opacity: 0 }
        50% { opacity: 1 }
        75% { opacity: 1 }
        76% { opacity: 0 }
        to { opacity: 0 }
      }

      @keyframes layer-3-fade-in-out {
        0% { opacity: 0 }
        40% { opacity: 0 }
        50% { opacity: 1 }
        75% { opacity: 1 }
        76% { opacity: 0 }
        to { opacity: 0 }
      }

      @-webkit-keyframes layer-4-fade-in-out {
        0% { opacity: 0 }
        65% { opacity: 0 }
        75% { opacity: 1 }
        90% { opacity: 1 }
        to { opacity: 0 }
      }

      @keyframes layer-4-fade-in-out {
        0% { opacity: 0 }
        65% { opacity: 0 }
        75% { opacity: 1 }
        90% { opacity: 1 }
        to { opacity: 0 }
      }

      .circle-clipper {
        display: inline-block;
        position: relative;
        width: 50%;
        height: 100%;
        overflow: hidden;
      }

      /**
       * Patch the gap that appear between the two adjacent div.circle-clipper while the
       * spinner is rotating (appears on Chrome 50, Safari 9.1.1, and Edge).
       */
      .spinner-layer::after {
        content: '';
        left: 45%;
        width: 10%;
        border-top-style: solid;
      }

      .spinner-layer::after,
      .circle-clipper .circle {
        box-sizing: border-box;
        position: absolute;
        top: 0;
        border-width: var(--paper-spinner-stroke-width, 3px);
        border-radius: 50%;
      }

      .circle-clipper .circle {
        bottom: 0;
        width: 200%;
        border-style: solid;
        border-bottom-color: transparent !important;
      }

      .circle-clipper.left .circle {
        left: 0;
        border-right-color: transparent !important;
        -webkit-transform: rotate(129deg);
        transform: rotate(129deg);
      }

      .circle-clipper.right .circle {
        left: -100%;
        border-left-color: transparent !important;
        -webkit-transform: rotate(-129deg);
        transform: rotate(-129deg);
      }

      .active .gap-patch::after,
      .active .circle-clipper .circle {
        -webkit-animation-duration: var(--paper-spinner-expand-contract-duration);
        -webkit-animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        -webkit-animation-iteration-count: infinite;
        animation-duration: var(--paper-spinner-expand-contract-duration);
        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        animation-iteration-count: infinite;
      }

      .active .circle-clipper.left .circle {
        -webkit-animation-name: left-spin;
        animation-name: left-spin;
      }

      .active .circle-clipper.right .circle {
        -webkit-animation-name: right-spin;
        animation-name: right-spin;
      }

      @-webkit-keyframes left-spin {
        0% { -webkit-transform: rotate(130deg) }
        50% { -webkit-transform: rotate(-5deg) }
        to { -webkit-transform: rotate(130deg) }
      }

      @keyframes left-spin {
        0% { transform: rotate(130deg) }
        50% { transform: rotate(-5deg) }
        to { transform: rotate(130deg) }
      }

      @-webkit-keyframes right-spin {
        0% { -webkit-transform: rotate(-130deg) }
        50% { -webkit-transform: rotate(5deg) }
        to { -webkit-transform: rotate(-130deg) }
      }

      @keyframes right-spin {
        0% { transform: rotate(-130deg) }
        50% { transform: rotate(5deg) }
        to { transform: rotate(-130deg) }
      }

      #spinnerContainer.cooldown {
        -webkit-animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);
        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);
      }

      @-webkit-keyframes fade-out {
        0% { opacity: 1 }
        to { opacity: 0 }
      }

      @keyframes fade-out {
        0% { opacity: 1 }
        to { opacity: 0 }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(Oo.content);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const G1={properties:{active:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"__activeChanged"},alt:{type:String,value:"loading",observer:"__altChanged"},__coolingDown:{type:Boolean,value:!1}},__computeContainerClasses:function(t,e){return[t||e?"active":"",e?"cooldown":""].join(" ")},__activeChanged:function(t,e){this.__setAriaHidden(!t),this.__coolingDown=!t&&e},__altChanged:function(t){t==="loading"?this.alt=this.getAttribute("aria-label")||t:(this.__setAriaHidden(t===""),this.setAttribute("aria-label",t))},__setAriaHidden:function(t){var e="aria-hidden";t?this.setAttribute(e,"true"):this.removeAttribute(e)},__reset:function(){this.active=!1,this.__coolingDown=!1}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const wc=q`
  <style include="paper-spinner-styles"></style>

  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">
    <div class="spinner-layer">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
`;wc.setAttribute("strip-whitespace","");B({_template:wc,is:"paper-spinner-lite",behaviors:[G1]});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const To=Le(class extends Ct{constructor(t){if(super(t),t.type!==ge.PROPERTY&&t.type!==ge.ATTRIBUTE&&t.type!==ge.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ks(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===ee||e===ne)return e;const i=t.element,n=t.name;if(t.type===ge.PROPERTY){if(e===i[n])return ee}else if(t.type===ge.BOOLEAN_ATTRIBUTE){if(!!e===i.hasAttribute(n))return ee}else if(t.type===ge.ATTRIBUTE&&i.getAttribute(n)===e+"")return ee;return Ws(t),e}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=t=>t??ne,vt=Ne(class extends Fe{values;constructor(t,e,i,n){super(t,e),Object.assign(e.host,i),this.values=n}update(t,e){this.hasChanged(e)&&(this.values=e,Object.assign(this.state.host,t))}hasChanged(t=[]){return t.some((e,i)=>this.values[i]!==e)}}),yi=Ne(class extends Fe{update(){return this.state.host}}),Y1=/([A-Z])/gu,Pe=(t,e,i)=>{t[e]=i,t.dispatchEvent(new CustomEvent(e.replace(Y1,"-$1").toLowerCase()+"-changed",{detail:{value:i}}))},$e=(t,e,i=[e])=>{const n=yi();$(()=>{Pe(n,t,e)},i)},Cc=t=>{const e=mi(void 0),i=z(c=>e.current=c,[]),n=t.shadowRoot,r=z(c=>t.dispatchEvent(new Event(c.type,{bubbles:c.bubbles})),[]),o=z(c=>Pe(t,"value",c.target.value),[]),a=z(c=>Pe(t,"focused",c.type==="focus"),[]),s=z(()=>e.current?.focus(),[]),l=z(()=>{const c=e.current?.checkValidity();return t.toggleAttribute("invalid",!c),c},[]);return vt({focus:s,validate:l},[s,l]),$(()=>{const c=u=>{u.defaultPrevented||t.disabled||u.target.matches("input, textarea, label")||(u.preventDefault(),t.matches(":focus-within")||s())};return n.addEventListener("mousedown",c),()=>n.removeEventListener("mousedown",c)},[s]),{onChange:r,onFocus:a,onInput:o,onRef:i}},J1=t=>M(()=>{if(t==null)return;const e=new RegExp(t,"u");return i=>{!i.defaultPrevented&&i.data&&!e.test(i.data)&&i.preventDefault()}},[t]),Sc=(t,{label:e,invalid:i,errorMessage:n})=>_`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${t}
				${G(e,()=>_`<label for="input" part="label">${e}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${G(i&&n,()=>_`<div class="error" part="error">${n}</div>`)}
	`,zc=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],X1=({placeholder:t,noLabelFloat:e,label:i})=>(e?i:void 0)||t||" ",Z1=Math.abs,Q1=(...t)=>t.some(e=>!!e),ef=(...t)=>t.join(""),tf=(t,e,i)=>t?e:i,nf=(t,e)=>e.indexOf(t)>-1,rf=(t,e)=>t===e,Gn=t=>!!(t==null||Array.isArray(t)&&t.length===0||typeof t=="string"&&t.length===0||typeof t=="number"&&t===0),of=(t,e)=>typeof t!="number"?"":t.toFixed(e),af=Object.freeze(Object.defineProperty({__proto__:null,abs:Z1,anyTrue:Q1,concat:ef,ifElse:tf,inArray:nf,isEmpty:Gn,isEqual:rf,toFixed:of},Symbol.toStringTag,{value:"Module"})),sf={isoBasic:/^\d{4}-\d{2}-\d{2}$/iu},lf=t=>typeof t=="string"&&sf.isoBasic.test(t)?new Date(`${t}T00:00`):new Date(t),cf=t=>{if(t==null)return;if(t instanceof Date&&!isNaN(t.getTime()))return t;if(!(typeof t=="number"||typeof t=="string"))return;const e=lf(t);if(!(e instanceof Date&&isNaN(e.getTime())))return e},Ot=t=>t<10?"0"+t:t,Yn=t=>t instanceof Date?t.getFullYear()+"-"+Ot(t.getMonth()+1)+"-"+Ot(t.getDate())+"T"+Ot(t.getHours())+":"+Ot(t.getMinutes())+":"+Ot(t.getSeconds())+"."+(t.getMilliseconds()/1e3).toFixed(3).slice(2,5):null,fe=(t,...e)=>t.flatMap((i,n)=>[i,e[n]??""]).join(""),zt=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},uf=(t,e)=>{const i=class extends e{};return Object.assign(i.prototype,t),i},Ac=fe`
	:host {
		--font-family: var(
			--cosmoz-input-font-family,
			var(--paper-font-subhead_-_font-family, inherit)
		);
		--font-size: var(
			--cosmoz-input-font-size,
			var(--paper-font-subhead_-_font-size, 16px)
		);
		--line-height: var(
			--cosmoz-input-line-height,
			var(--paper-font-subhead_-_line-height, 24px)
		);
		--label-scale: var(--cosmoz-input-label-scale, 0.75);
		--disabled-opacity: var(
			--cosmoz-input-disabled-opacity,
			var(--paper-input-container-disabled_-_opacity, 0.33)
		);
		--disabled-line-opacity: var(
			--cosmoz-input-disabled-line-opacity,
			var(--paper-input-container-underline-disabled_-_opacity, 1)
		);
		--invalid-color: var(
			--cosmoz-input-invalid-color,
			var(--paper-input-container-invalid-color, var(--error-color, #fc5c5b))
		);
		--bg: var(--cosmoz-input-background);
		--focused-bg: var(--cosmoz-input-focused-background, var(--bg));
		--color: var(--cosmoz-input-color, var(--secondary-text-color, #737373));
		--line-color: var(--cosmoz-input-line-color, var(--color));
		--focused-color: var(
			--cosmoz-input-focused-color,
			var(--primary-color, #3f51b5)
		);
		--float-display: var(--cosmoz-input-float-display, block);
		--contour-color: var(--line-color);
		--contour-size: var(--cosmoz-input-contour-size);
		--label-translate-y: var(--cosmoz-input-label-translate-y, 0%);

		display: block;
		padding: var(--cosmoz-input-padding, 8px 0);
		position: relative;
		max-height: var(--cosmoz-input-max-height);
		font-size: var(--font-size);
		line-height: var(--line-height);
		font-family: var(--font-family);
	}

	:host([disabled]) {
		opacity: var(--disabled-opacity);
	}

	.float {
		line-height: calc(var(--line-height) * var(--label-scale));
		background-color: var(--cosmoz-input-float-bg-color, none);
		display: var(--float-display);
	}

	.wrap {
		padding: var(--cosmoz-input-wrap-padding, 0px);
		display: flex;
		align-items: center;
		position: relative;
		background: var(--bg);
		opacity: var(--cosmoz-input-opacity);
		border-radius: var(--cosmoz-input-border-radius);
		box-shadow: 0 0 0 var(--contour-size) var(--contour-color);
	}

	.control {
		flex: 1;
		position: relative;
	}

	#input {
		padding: 0;
		margin: 0;
		outline: none;
		border: none;
		width: 100%;
		max-width: 100%;
		display: block;
		background: transparent;
		line-height: inherit;
		font-size: inherit;
		font-family: inherit;
		resize: none;
	}

	:host(:focus-within) .wrap {
		background: var(--focused-bg);
	}

	label {
		position: absolute;
		top: 0;
		left: 0;
		width: var(--cosmoz-input-label-width, 100%);
		transition:
			transform 0.25s,
			width 0.25s;
		transform-origin: left top;
		color: var(--color);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-transform: var(--cosmoz-input-label-text-transform);
		font-weight: var(--cosmoz-input-label-font-weight);
	}
	.wrap:has(#input:not(:placeholder-shown)) slot[name='suffix']::slotted(*),
	.wrap:has(#input:not(:placeholder-shown)) slot[name='prefix']::slotted(*) {
		transform: translateY(var(--label-translate-y));
	}
	:host([always-float-label]) label,
	#input:not(:placeholder-shown) + label {
		transform: translateY(
				calc(var(--label-scale) * -100% + var(--label-translate-y))
			)
			scale(var(--label-scale));
		background-color: var(--cosmoz-input-floating-label-bg, var(--bg));
	}

	:host([always-float-label]) input,
	#input:not(:placeholder-shown) {
		transform: translateY(var(--label-translate-y));
	}

	:host([always-float-label]) slot[name='suffix']::slotted(*),
	:host([always-float-label]) slot[name='prefix']::slotted(*) {
		transform: translateY(var(--label-translate-y));
	}

	:host(:not(always-float-label):focus-within) #input::placeholder,
	:host(:focus-within) label {
		color: var(--focused-color);
		opacity: 1;
	}

	.line {
		padding-top: 1px;
		border-bottom: 1px solid var(--line-color);
		position: relative;
		display: var(--cosmoz-input-line-display, block);
	}
	.line::before {
		content: '';
		position: absolute;
		border-bottom: 2px solid transparent;
		border-bottom-color: inherit;
		left: 0;
		right: 0;
		top: 0;
		transform: scaleX(0);
		transform-origin: center center;
		z-index: 1;
	}
	:host(:focus-within) .line::before {
		transform: none;
		transition: 0.25s transform ease;
	}
	:host(:focus-within) .line {
		border-bottom-color: var(--focused-color);
	}

	:host(:focus-within) {
		--contour-color: var(--focused-color);
		caret-color: var(--focused-color);
	}

	:host([disabled]) .line {
		border-bottom-style: dashed;
		opacity: var(--disabled-line-opacity);
	}

	:host([no-label-float]) .float,
	:host([no-label-float]) label {
		display: none;
	}

	.error {
		font-size: 12px;
		line-height: 20px;
		overflow: hidden;
		text-overflow: clip;
		position: absolute;
		max-width: 100%;
	}

	:host([invalid]) {
		--contour-color: var(--invalid-color);
		caret-color: var(--invalid-color);
	}

	:host([invalid]) label,
	.error {
		color: var(--invalid-color);
	}
	:host([invalid]) .line {
		border-bottom-color: var(--invalid-color);
	}

	#input::-webkit-inner-spin-button {
		z-index: 1;
	}

	:host([no-spinner]) #input::-webkit-inner-spin-button {
		display: none;
	}
	:host([no-spinner]) #input {
		-moz-appearence: textfield;
	}

	:host([autosize]) {
		width: min-content;
	}
	:host([autosize]) #input {
		min-width: 2ch;
		width: var(--chars);
	}
	:host([autosize]) .control {
		max-width: 100%;
	}

	:host([autosize][type='number']) #input {
		--width: calc(var(--chars) + 0.25em);
	}
	:host([autosize][type='number']:not([no-spinner])) #input {
		width: calc(var(--width) + 15px);
		min-width: calc(2ch + 0.25em + 15px);
	}
	:host([autosize][type='number'][no-spinner]) #input {
		width: var(--width);
		min-width: calc(2ch + 0.25em);
	}
	:host([type='color']) .line {
		display: none;
	}
`,df=["type","pattern","allowed-pattern","min","max","step","autosize","label",...zc],pf=t=>{const{type:e="text",pattern:i,allowedPattern:n,autocomplete:r,value:o,readonly:a,disabled:s,min:l,max:c,step:u,maxlength:d}=t,{onChange:p,onFocus:h,onInput:f,onRef:m}=Cc(t),b=J1(n);return vt({focus:()=>t.shadowRoot?.querySelector("#input")?.focus()},[]),Sc(_`
			<input
				${We(m)}
				style="--chars: ${o?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${e}
				pattern=${J(i)}
				autocomplete=${J(r)}
				placeholder=${X1(t)}
				?readonly=${a}
				?aria-disabled=${s}
				?disabled=${s}
				.value=${To(o??"")}
				maxlength=${J(d)}
				@beforeinput=${b}
				@input=${f}
				@change=${p}
				@focus=${h}
				@blur=${h}
				min=${J(l)}
				max=${J(c)}
				step=${J(u)}
			/>
		`,t)};customElements.define("cosmoz-input",V(pf,{observedAttributes:df,styleSheets:[lo(Ac)]}));const es=t=>{t.style.height="",t.style.height=`${t.scrollHeight}px`},hf=(t,e=0)=>{if(e>0){const i=t.getAttribute("rows")??"",n=t.style.height;t.style.height="",t.setAttribute("rows",e),t.style.maxHeight=t.getBoundingClientRect().height+"px",t.style.height=n,t.setAttribute("rows",i)}},ff=t=>{const{value:e,maxRows:i}=t,n=M(()=>()=>t.shadowRoot.querySelector("#input"),[]);$(()=>hf(n(),i),[i,n]),$(()=>es(n()),[n,e]),$(()=>{const r=n(),o=new ResizeObserver(()=>requestAnimationFrame(()=>es(r)));return o.observe(r),()=>o.unobserve(r)},[n])},mf=["rows",...zc],gf=t=>{const{autocomplete:e,value:i,placeholder:n,readonly:r,disabled:o,rows:a,cols:s,maxlength:l}=t,{onChange:c,onFocus:u,onInput:d,onRef:p}=Cc(t);return ff(t),Sc(_`
			<textarea id="input" part="input"
				${We(p)}
				autocomplete=${J(e)}
				placeholder=${n||" "}
				rows=${a??1} cols=${J(s)}
				?readonly=${r} ?aria-disabled=${o} ?disabled=${o}
				.value=${To(i??"")} maxlength=${J(l)} @input=${d}
				@change=${c} @focus=${u} @blur=${u}>`,t)};customElements.define("cosmoz-textarea",V(gf,{observedAttributes:mf,styleSheets:[lo(Ac)]}));const bf=fe`
	:host {
		display: flex;
	}
	:host(:not([light])) {
		position: absolute;
		right: 0;
		z-index: +1;
	}

	:host(:not([visible])) {
		display: none !important;
	}

	.icon {
		fill: currentColor;
	}

	:host([light]) {
		flex: 0 0 24px;
	}

	:host(:not([light])) .icon {
		top: 10px;
		margin: 2px 7px;
		color: #cdcdcd;
		background-color: #a6a6a6;
		border-radius: 500px;
		cursor: pointer;
		min-width: 16px;
		width: 16px !important;
		min-height: 16px;
		height: 16px;
		padding: 2px;
		box-sizing: border-box;
		transition:
			background-color 0.25s,
			color 0.25s;
		float: right;
	}

	:host(:not([light])) .icon:hover {
		background-color: #b0b0b0;
		color: #dfdfdf;
	}
`,yf=()=>_`
	<style>
		${bf}
	</style>
	<svg
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
		class="icon"
	>
		<g>
			<path
				d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
			></path>
		</g>
	</svg>
`;customElements.define("cosmoz-clear-button",V(yf));const Je=({valuePath:t},e)=>k(e,t),vf=Je,_f=Je,xf=({valuePath:t},e)=>i=>{const n=k(i,t);return n==null?!1:n.toString().toLowerCase().trim().includes(e.toLowerCase().trim())},wf=(t,e)=>e===""||e==null?null:e,Se=t=>class extends t{static get properties(){return{isOmnitableColumn:{type:Boolean,value:!0},title:{type:String},valuePath:{type:String,notify:!0},values:{type:Array,notify:!0},filter:{type:Object},noLocalFilter:{type:Boolean},disabled:{type:Boolean,value:!1,notify:!0},editable:{type:Boolean,notify:!0},loading:{type:Boolean,value:!1,notify:!0},externalValues:{type:Boolean,value:!1,notify:!0},name:{type:String},sortOn:{type:String},groupOn:{type:String},width:{type:String,value:"75px"},minWidth:{type:String,value:"40px"},flex:{type:String,value:"1"},cellClass:{type:String,value:"default-cell"},headerCellClass:{type:String,value:"default-header-cell"},priority:{type:Number,value:0},hidden:{type:Boolean,notify:!0},preferredDropdownHorizontalAlign:{type:String,value:"right"},renderHeader:{type:Function},renderCell:{type:Function},renderEditCell:{type:Function},renderGroup:{type:Function},mini:{type:Number,value:null},renderMini:{type:Function}}}static get observers(){return["notifyFilterChange(filter)"]}notifyFilterChange(e){this.__ownChange||this.dispatchEvent(new CustomEvent("legacy-filter-changed",{detail:{name:this.name,state:this.legacyFilterToState(e)},bubbles:!0}))}legacyFilterToState(e){return{filter:e}}getFilterFn(){}getString(e,i){return Je(e,i)}toXlsxValue(e,i){return vf(e,i)}cellTitleFn(e,i){return Je(e,i)}serializeFilter(e,i){return wf(e,i)}deserializeFilter(e,i){return i==null?null:typeof i=="string"?window.decodeURIComponent(i):i}getComparableValue(e,i){return _f(e,i)}computeSource(e,i){return i}_propertiesChanged(e,i,n){super._propertiesChanged(e,i,n),this.dispatchEvent(new CustomEvent("cosmoz-column-prop-changed",{bubbles:!0}))}},Cf=t=>e=>t(i=>{if(i.inputValue===void 0&&e.target.value==="")return i;clearTimeout(i.t);const n=setTimeout(()=>t(r=>({...r,filter:r.inputValue})),1e3);return{...i,inputValue:e.target.value,t:n}}),Sf=t=>()=>t(e=>({...e,filter:e.inputValue})),zf=t=>e=>{e.keyCode===13&&(e.preventDefault(),t(i=>({...i,filter:i.inputValue})))},Af=t=>e=>t(i=>({...i,headerFocused:e.detail.value})),Ef=t=>()=>t(e=>({...e,filter:null,inputValue:null})),Mf=t=>t!=null&&t!=="";class kf extends Se(K){static get properties(){return{minWidth:{type:String,value:"55px"},editMinWidth:{type:String,value:"55px"},inputValue:{type:Object,notify:!0}}}getFilterFn(e,i){if(!(i==null||i===""))return xf(e,i)}renderCell(e,{item:i}){return _`<span class="default-column">${Je(e,i)}</span>`}renderEditCell(e,{item:i},n){return _`<cosmoz-input
			no-label-float
			type="text"
			@change=${o=>n(o.target.value)}
			.value=${Je(e,i)}
		></cosmoz-input>`}renderHeader(e,{filter:i,inputValue:n,headerFocused:r},o){return _`<cosmoz-input
			label=${e.title}
			.value=${n??i}
			@value-changed=${Cf(o)}
			focused=${r}
			@focused-changed=${Af(o)}
			@keydown=${zf(o)}
			@blur=${Sf(o)}
		>
			<cosmoz-clear-button
				suffix
				slot="suffix"
				?visible=${Mf(i)}
				light
				@click=${Ef(o)}
			></cosmoz-clear-button>
		</cosmoz-input>`}legacyFilterToState(e){return{filter:e,inputValue:e}}}customElements.define("cosmoz-omnitable-column",kf);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var ts={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},Lf={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},is={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},$f=/[a-z0-9*]/,Of=/U\+/,Tf=/^arrow/,Pf=/^space(bar)?/,If=/^escape$/;function ns(t,e){var i="";if(t){var n=t.toLowerCase();n===" "||Pf.test(n)?i="space":If.test(n)?i="esc":n.length==1?(!e||$f.test(n))&&(i=n):Tf.test(n)?i=n.replace("arrow",""):n=="multiply"?i="*":i=n}return i}function Hf(t){var e="";return t&&(t in ts?e=ts[t]:Of.test(t)?(t=parseInt(t.replace("U+","0x"),16),e=String.fromCharCode(t).toLowerCase()):e=t.toLowerCase()),e}function Rf(t){var e="";return Number(t)&&(t>=65&&t<=90?e=String.fromCharCode(32+t):t>=112&&t<=123?e="f"+(t-112+1):t>=48&&t<=57?e=String(t-48):t>=96&&t<=105?e=String(t-96):e=Lf[t]),e}function Ff(t,e){return t.key?ns(t.key,e):t.detail&&t.detail.key?ns(t.detail.key,e):Hf(t.keyIdentifier)||Rf(t.keyCode)||""}function rs(t,e){var i=Ff(e,t.hasModifiers);return i===t.key&&(!t.hasModifiers||!!e.shiftKey==!!t.shiftKey&&!!e.ctrlKey==!!t.ctrlKey&&!!e.altKey==!!t.altKey&&!!e.metaKey==!!t.metaKey)}function Nf(t){return t.length===1?{combo:t,key:t,event:"keydown"}:t.split("+").reduce(function(e,i){var n=i.split(":"),r=n[0],o=n[1];return r in is?(e[is[r]]=!0,e.hasModifiers=!0):(e.key=r,e.event=o||"keydown"),e},{combo:t.split(":").shift()})}function os(t){return t.trim().split(" ").map(function(e){return Nf(e)})}const Xe={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(t,e){this._imperativeKeyBindings[t]=e,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(t,e){for(var i=os(e),n=0;n<i.length;++n)if(rs(i[n],t))return!0;return!1},_collectKeyBindings:function(){var t=this.behaviors.map(function(e){return e.keyBindings});return t.indexOf(this.keyBindings)===-1&&t.push(this.keyBindings),t},_prepKeyBindings:function(){this._keyBindings={},this._collectKeyBindings().forEach(function(i){for(var n in i)this._addKeyBinding(n,i[n])},this);for(var t in this._imperativeKeyBindings)this._addKeyBinding(t,this._imperativeKeyBindings[t]);for(var e in this._keyBindings)this._keyBindings[e].sort(function(i,n){var r=i[0].hasModifiers,o=n[0].hasModifiers;return r===o?0:r?-1:1})},_addKeyBinding:function(t,e){os(t).forEach(function(i){this._keyBindings[i.event]=this._keyBindings[i.event]||[],this._keyBindings[i.event].push([i,e])},this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach(function(t){var e=this._keyBindings[t],i=this._onKeyBindingEvent.bind(this,e);this._boundKeyHandlers.push([this.keyEventTarget,t,i]),this.keyEventTarget.addEventListener(t,i)},this)},_unlistenKeyEventListeners:function(){for(var t,e,i,n;this._boundKeyHandlers.length;)t=this._boundKeyHandlers.pop(),e=t[0],i=t[1],n=t[2],e.removeEventListener(i,n)},_onKeyBindingEvent:function(t,e){if(this.stopKeyboardEventPropagation&&e.stopPropagation(),!e.defaultPrevented)for(var i=0;i<t.length;i++){var n=t[i][0],r=t[i][1];if(rs(n,e)&&(this._triggerKeyHandler(n,r,e),e.defaultPrevented))return}},_triggerKeyHandler:function(t,e,i){var n=Object.create(t);n.keyboardEvent=i;var r=new CustomEvent(t.event,{detail:n,cancelable:!0});this[e].call(this,r),r.defaultPrevented&&i.preventDefault()}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const ze=B({_template:q`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},timeout:{type:Number,value:150},_text:{type:String,value:""}},created:function(){ze.instance||(ze.instance=this),document.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(t){this._text="",this.async(function(){this._text=t},this.timeout)},_onIronAnnounce:function(t){t.detail&&t.detail.text&&this.announce(t.detail.text)}});ze.instance=null;ze.requestAvailability=function(){ze.instance||(ze.instance=document.createElement("iron-a11y-announcer")),document.body?document.body.appendChild(ze.instance):document.addEventListener("load",function(){document.body.appendChild(ze.instance)})};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/let gr=null;const Zr={properties:{validator:{type:String},invalid:{notify:!0,reflectToAttribute:!0,type:Boolean,value:!1,observer:"_invalidChanged"}},registered:function(){gr=new ie({type:"validator"})},_invalidChanged:function(){this.invalid?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")},get _validator(){return gr&&gr.byKey(this.validator)},hasValidator:function(){return this._validator!=null},validate:function(t){return t===void 0&&this.value!==void 0?this.invalid=!this._getValidity(this.value):this.invalid=!this._getValidity(t),!this.invalid},_getValidity:function(t){return this.hasValidator()?this._validator.validate(t):!0}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/B({_template:q`
    <style>
      :host {
        display: inline-block;
      }
    </style>
    <slot id="content"></slot>
`,is:"iron-input",behaviors:[Zr],properties:{bindValue:{type:String,value:""},value:{type:String,computed:"_computeValue(bindValue)"},allowedPattern:{type:String},autoValidate:{type:Boolean,value:!1},_inputElement:Object},observers:["_bindValueChanged(bindValue, _inputElement)"],listeners:{input:"_onInput",keypress:"_onKeypress"},created:function(){ze.requestAvailability(),this._previousValidInput="",this._patternAlreadyChecked=!1},attached:function(){this._observer=L(this).observeNodes((function(t){this._initSlottedInput()}).bind(this))},detached:function(){this._observer&&(L(this).unobserveNodes(this._observer),this._observer=null)},get inputElement(){return this._inputElement},_initSlottedInput:function(){this._inputElement=this.getEffectiveChildren()[0],this.inputElement&&this.inputElement.value&&(this.bindValue=this.inputElement.value),this.fire("iron-input-ready")},get _patternRegExp(){var t;if(this.allowedPattern)t=new RegExp(this.allowedPattern);else switch(this.inputElement.type){case"number":t=/[0-9.,e-]/;break}return t},_bindValueChanged:function(t,e){e&&(t===void 0?e.value=null:t!==e.value&&(this.inputElement.value=t),this.autoValidate&&this.validate(),this.fire("bind-value-changed",{value:t}))},_onInput:function(){if(this.allowedPattern&&!this._patternAlreadyChecked){var t=this._checkPatternValidity();t||(this._announceInvalidCharacter("Invalid string of characters not entered."),this.inputElement.value=this._previousValidInput)}this.bindValue=this._previousValidInput=this.inputElement.value,this._patternAlreadyChecked=!1},_isPrintable:function(t){var e=t.keyCode==8||t.keyCode==9||t.keyCode==13||t.keyCode==27,i=t.keyCode==19||t.keyCode==20||t.keyCode==45||t.keyCode==46||t.keyCode==144||t.keyCode==145||t.keyCode>32&&t.keyCode<41||t.keyCode>111&&t.keyCode<124;return!e&&!(t.charCode==0&&i)},_onKeypress:function(t){if(!(!this.allowedPattern&&this.inputElement.type!=="number")){var e=this._patternRegExp;if(e&&!(t.metaKey||t.ctrlKey||t.altKey)){this._patternAlreadyChecked=!0;var i=String.fromCharCode(t.charCode);this._isPrintable(t)&&!e.test(i)&&(t.preventDefault(),this._announceInvalidCharacter("Invalid character "+i+" not entered."))}}},_checkPatternValidity:function(){var t=this._patternRegExp;if(!t)return!0;for(var e=0;e<this.inputElement.value.length;e++)if(!t.test(this.inputElement.value[e]))return!1;return!0},validate:function(){if(!this.inputElement)return this.invalid=!1,!0;var t=this.inputElement.checkValidity();return t&&(this.required&&this.bindValue===""?t=!1:this.hasValidator()&&(t=Zr.validate.call(this,this.bindValue))),this.invalid=!t,this.fire("iron-input-validate"),t},_announceInvalidCharacter:function(t){this.fire("iron-announce",{text:t})},_computeValue:function(t){return t}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/if(!window.polymerSkipLoadingFontRoboto){const t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.crossOrigin="anonymous",t.href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic",document.head.appendChild(t)}/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Ec=q`<custom-style>
  <style is="custom-style">
    html {

      /* Shared Styles */
      --paper-font-common-base: {
        font-family: 'Roboto', 'Noto', sans-serif;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-code: {
        font-family: 'Roboto Mono', 'Consolas', 'Menlo', monospace;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-expensive-kerning: {
        text-rendering: optimizeLegibility;
      };

      --paper-font-common-nowrap: {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      };

      /* Material Font Styles */

      --paper-font-display4: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 112px;
        font-weight: 300;
        letter-spacing: -.044em;
        line-height: 120px;
      };

      --paper-font-display3: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 56px;
        font-weight: 400;
        letter-spacing: -.026em;
        line-height: 60px;
      };

      --paper-font-display2: {
        @apply --paper-font-common-base;

        font-size: 45px;
        font-weight: 400;
        letter-spacing: -.018em;
        line-height: 48px;
      };

      --paper-font-display1: {
        @apply --paper-font-common-base;

        font-size: 34px;
        font-weight: 400;
        letter-spacing: -.01em;
        line-height: 40px;
      };

      --paper-font-headline: {
        @apply --paper-font-common-base;

        font-size: 24px;
        font-weight: 400;
        letter-spacing: -.012em;
        line-height: 32px;
      };

      --paper-font-title: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
      };

      --paper-font-subhead: {
        @apply --paper-font-common-base;

        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      };

      --paper-font-body2: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-body1: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      };

      --paper-font-caption: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.011em;
        line-height: 20px;
      };

      --paper-font-menu: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 13px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-button: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.018em;
        line-height: 24px;
        text-transform: uppercase;
      };

      --paper-font-code2: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
      };

      --paper-font-code1: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      };

    }

  </style>
</custom-style>`;Ec.setAttribute("style","display: none;");document.head.appendChild(Ec.content);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Mc={attached:function(){this.fire("addon-attached")},update:function(t){}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/B({_template:q`
    <style>
      :host {
        display: inline-block;
        float: right;

        @apply --paper-font-caption;
        @apply --paper-input-char-counter;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:dir(rtl)) {
        float: left;
      }
    </style>

    <span>[[_charCounterStr]]</span>
`,is:"paper-input-char-counter",behaviors:[Mc],properties:{_charCounterStr:{type:String,value:"0"}},update:function(t){if(t.inputElement){t.value=t.value||"";var e=t.value.toString().length.toString();t.inputElement.hasAttribute("maxlength")&&(e+="/"+t.inputElement.getAttribute("maxlength")),this._charCounterStr=e}}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const kc=q`
<custom-style>
  <style is="custom-style">
    html {
      /*
       * You can use these generic variables in your elements for easy theming.
       * For example, if all your elements use \`--primary-text-color\` as its main
       * color, then switching from a light to a dark theme is just a matter of
       * changing the value of \`--primary-text-color\` in your application.
       */
      --primary-text-color: var(--light-theme-text-color);
      --primary-background-color: var(--light-theme-background-color);
      --secondary-text-color: var(--light-theme-secondary-color);
      --disabled-text-color: var(--light-theme-disabled-color);
      --divider-color: var(--light-theme-divider-color);
      --error-color: var(--paper-deep-orange-a700);

      /*
       * Primary and accent colors. Also see color.js for more colors.
       */
      --primary-color: var(--paper-indigo-500);
      --light-primary-color: var(--paper-indigo-100);
      --dark-primary-color: var(--paper-indigo-700);

      --accent-color: var(--paper-pink-a200);
      --light-accent-color: var(--paper-pink-a100);
      --dark-accent-color: var(--paper-pink-a400);


      /*
       * Material Design Light background theme
       */
      --light-theme-background-color: #ffffff;
      --light-theme-base-color: #000000;
      --light-theme-text-color: var(--paper-grey-900);
      --light-theme-secondary-color: #737373;  /* for secondary text and icons */
      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */
      --light-theme-divider-color: #dbdbdb;

      /*
       * Material Design Dark background theme
       */
      --dark-theme-background-color: var(--paper-grey-900);
      --dark-theme-base-color: #ffffff;
      --dark-theme-text-color: #ffffff;
      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */
      --dark-theme-disabled-color: #646464;  /* disabled/hint text */
      --dark-theme-divider-color: #3c3c3c;

      /*
       * Deprecated values because of their confusing names.
       */
      --text-primary-color: var(--dark-theme-text-color);
      --default-primary-color: var(--primary-color);
    }
  </style>
</custom-style>`;kc.setAttribute("style","display: none;");document.head.appendChild(kc.content);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Lc=q`
<custom-style>
  <style is="custom-style">
    html {
      --paper-input-container-shared-input-style: {
        position: relative; /* to make a stacking context */
        outline: none;
        box-shadow: none;
        padding: 0;
        margin: 0;
        width: 100%;
        max-width: 100%;
        background: transparent;
        border: none;
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        -webkit-appearance: none;
        text-align: inherit;
        vertical-align: var(--paper-input-container-input-align, bottom);

        @apply --paper-font-subhead;
      };
    }
  </style>
</custom-style>
`;Lc.setAttribute("style","display: none;");document.head.appendChild(Lc.content);B({_template:q`
    <style>
      :host {
        display: block;
        padding: 8px 0;
        @apply --paper-input-container;
      }

      :host([inline]) {
        display: inline-block;
      }

      :host([disabled]) {
        pointer-events: none;
        opacity: 0.33;

        @apply --paper-input-container-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      [hidden] {
        display: none !important;
      }

      .floated-label-placeholder {
        @apply --paper-font-caption;
      }

      .underline {
        height: 2px;
        position: relative;
      }

      .focused-line {
        @apply --layout-fit;
        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));

        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-transform: scale3d(0,1,1);
        transform: scale3d(0,1,1);

        @apply --paper-input-container-underline-focus;
      }

      .underline.is-highlighted .focused-line {
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .underline.is-invalid .focused-line {
        border-color: var(--paper-input-container-invalid-color, var(--error-color));
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .unfocused-line {
        @apply --layout-fit;
        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline;
      }

      :host([disabled]) .unfocused-line {
        border-bottom: 1px dashed;
        border-color: var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline-disabled;
      }

      .input-wrapper {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
      }

      .input-content {
        @apply --layout-flex-auto;
        @apply --layout-relative;
        max-width: 100%;
      }

      .input-content ::slotted(label),
      .input-content ::slotted(.paper-input-label) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        font: inherit;
        color: var(--paper-input-container-color, var(--secondary-text-color));
        -webkit-transition: -webkit-transform 0.25s, width 0.25s;
        transition: transform 0.25s, width 0.25s;
        -webkit-transform-origin: left top;
        transform-origin: left top;
        /* Fix for safari not focusing 0-height date/time inputs with -webkit-apperance: none; */
        min-height: 1px;

        @apply --paper-font-common-nowrap;
        @apply --paper-font-subhead;
        @apply --paper-input-container-label;
        @apply --paper-transition-easing;
      }


      .input-content ::slotted(label):before,
      .input-content ::slotted(.paper-input-label):before {
        @apply --paper-input-container-label-before;
      }

      .input-content ::slotted(label):after,
      .input-content ::slotted(.paper-input-label):after {
        @apply --paper-input-container-label-after;
      }

      .input-content.label-is-floating ::slotted(label),
      .input-content.label-is-floating ::slotted(.paper-input-label) {
        -webkit-transform: translateY(-75%) scale(0.75);
        transform: translateY(-75%) scale(0.75);

        /* Since we scale to 75/100 of the size, we actually have 100/75 of the
        original space now available */
        width: 133%;

        @apply --paper-input-container-label-floating;
      }

      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(label),
      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(.paper-input-label) {
        right: 0;
        left: auto;
        -webkit-transform-origin: right top;
        transform-origin: right top;
      }

      .input-content.label-is-highlighted ::slotted(label),
      .input-content.label-is-highlighted ::slotted(.paper-input-label) {
        color: var(--paper-input-container-focus-color, var(--primary-color));

        @apply --paper-input-container-label-focus;
      }

      .input-content.is-invalid ::slotted(label),
      .input-content.is-invalid ::slotted(.paper-input-label) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .input-content.label-is-hidden ::slotted(label),
      .input-content.label-is-hidden ::slotted(.paper-input-label) {
        visibility: hidden;
      }

      .input-content ::slotted(input),
      .input-content ::slotted(iron-input),
      .input-content ::slotted(textarea),
      .input-content ::slotted(iron-autogrow-textarea),
      .input-content ::slotted(.paper-input-input) {
        @apply --paper-input-container-shared-input-style;
        /* The apply shim doesn't apply the nested color custom property,
          so we have to re-apply it here. */
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        @apply --paper-input-container-input;
      }

      .input-content ::slotted(input)::-webkit-outer-spin-button,
      .input-content ::slotted(input)::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      .input-content.focused ::slotted(input),
      .input-content.focused ::slotted(iron-input),
      .input-content.focused ::slotted(textarea),
      .input-content.focused ::slotted(iron-autogrow-textarea),
      .input-content.focused ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-focus;
      }

      .input-content.is-invalid ::slotted(input),
      .input-content.is-invalid ::slotted(iron-input),
      .input-content.is-invalid ::slotted(textarea),
      .input-content.is-invalid ::slotted(iron-autogrow-textarea),
      .input-content.is-invalid ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-invalid;
      }

      .prefix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;
        @apply --paper-input-prefix;
      }

      .suffix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;

        @apply --paper-input-suffix;
      }

      /* Firefox sets a min-width on the input, which can cause layout issues */
      .input-content ::slotted(input) {
        min-width: 0;
      }

      .input-content ::slotted(textarea) {
        resize: none;
      }

      .add-on-content {
        position: relative;
      }

      .add-on-content.is-invalid ::slotted(*) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .add-on-content.is-highlighted ::slotted(*) {
        color: var(--paper-input-container-focus-color, var(--primary-color));
      }
    </style>

    <div class="floated-label-placeholder" aria-hidden="true" hidden="[[noLabelFloat]]">&nbsp;</div>

    <div class="input-wrapper">
      <span class="prefix"><slot name="prefix"></slot></span>

      <div class$="[[_computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent)]]" id="labelAndInputContainer">
        <slot name="label"></slot>
        <slot name="input"></slot>
      </div>

      <span class="suffix"><slot name="suffix"></slot></span>
    </div>

    <div class$="[[_computeUnderlineClass(focused,invalid)]]">
      <div class="unfocused-line"></div>
      <div class="focused-line"></div>
    </div>

    <div class$="[[_computeAddOnContentClass(focused,invalid)]]">
      <slot name="add-on"></slot>
    </div>
`,is:"paper-input-container",properties:{noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},attrForValue:{type:String,value:"bind-value"},autoValidate:{type:Boolean,value:!1},invalid:{observer:"_invalidChanged",type:Boolean,value:!1},focused:{readOnly:!0,type:Boolean,value:!1,notify:!0},_addons:{type:Array},_inputHasContent:{type:Boolean,value:!1},_inputSelector:{type:String,value:"input,iron-input,textarea,.paper-input-input"},_boundOnFocus:{type:Function,value:function(){return this._onFocus.bind(this)}},_boundOnBlur:{type:Function,value:function(){return this._onBlur.bind(this)}},_boundOnInput:{type:Function,value:function(){return this._onInput.bind(this)}},_boundValueChanged:{type:Function,value:function(){return this._onValueChanged.bind(this)}}},listeners:{"addon-attached":"_onAddonAttached","iron-input-validate":"_onIronInputValidate"},get _valueChangedEvent(){return this.attrForValue+"-changed"},get _propertyForValue(){return ao(this.attrForValue)},get _inputElement(){return L(this).querySelector(this._inputSelector)},get _inputElementValue(){return this._inputElement[this._propertyForValue]||this._inputElement.value},ready:function(){this.__isFirstValueUpdate=!0,this._addons||(this._addons=[]),this.addEventListener("focus",this._boundOnFocus,!0),this.addEventListener("blur",this._boundOnBlur,!0)},attached:function(){this.attrForValue?this._inputElement.addEventListener(this._valueChangedEvent,this._boundValueChanged):this.addEventListener("input",this._onInput),this._inputElementValue&&this._inputElementValue!=""?this._handleValueAndAutoValidate(this._inputElement):this._handleValue(this._inputElement)},_onAddonAttached:function(t){this._addons||(this._addons=[]);var e=t.target;this._addons.indexOf(e)===-1&&(this._addons.push(e),this.isAttached&&this._handleValue(this._inputElement))},_onFocus:function(){this._setFocused(!0)},_onBlur:function(){this._setFocused(!1),this._handleValueAndAutoValidate(this._inputElement)},_onInput:function(t){this._handleValueAndAutoValidate(t.target)},_onValueChanged:function(t){var e=t.target;this.__isFirstValueUpdate&&(this.__isFirstValueUpdate=!1,e.value===void 0||e.value==="")||this._handleValueAndAutoValidate(t.target)},_handleValue:function(t){var e=this._inputElementValue;e||e===0||t.type==="number"&&!t.checkValidity()?this._inputHasContent=!0:this._inputHasContent=!1,this.updateAddons({inputElement:t,value:e,invalid:this.invalid})},_handleValueAndAutoValidate:function(t){if(this.autoValidate&&t){var e;t.validate?e=t.validate(this._inputElementValue):e=t.checkValidity(),this.invalid=!e}this._handleValue(t)},_onIronInputValidate:function(t){this.invalid=this._inputElement.invalid},_invalidChanged:function(){this._addons&&this.updateAddons({invalid:this.invalid})},updateAddons:function(t){for(var e,i=0;e=this._addons[i];i++)e.update(t)},_computeInputContentClass:function(t,e,i,n,r){var o="input-content";if(t)r&&(o+=" label-is-hidden"),n&&(o+=" is-invalid");else{var a=this.querySelector("label");e||r?(o+=" label-is-floating",this.$.labelAndInputContainer.style.position="static",n?o+=" is-invalid":i&&(o+=" label-is-highlighted")):(a&&(this.$.labelAndInputContainer.style.position="relative"),n&&(o+=" is-invalid"))}return i&&(o+=" focused"),o},_computeUnderlineClass:function(t,e){var i="underline";return e?i+=" is-invalid":t&&(i+=" is-highlighted"),i},_computeAddOnContentClass:function(t,e){var i="add-on-content";return e?i+=" is-invalid":t&&(i+=" is-highlighted"),i}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/B({_template:q`
    <style>
      :host {
        display: inline-block;
        visibility: hidden;

        color: var(--paper-input-container-invalid-color, var(--error-color));

        @apply --paper-font-caption;
        @apply --paper-input-error;
        position: absolute;
        left:0;
        right:0;
      }

      :host([invalid]) {
        visibility: visible;
      }

      #a11yWrapper {
        visibility: hidden;
      }

      :host([invalid]) #a11yWrapper {
        visibility: visible;
      }
    </style>

    <!--
    If the paper-input-error element is directly referenced by an
    \`aria-describedby\` attribute, such as when used as a paper-input add-on,
    then applying \`visibility: hidden;\` to the paper-input-error element itself
    does not hide the error.

    For more information, see:
    https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_description
    -->
    <div id="a11yWrapper">
      <slot></slot>
    </div>
`,is:"paper-input-error",behaviors:[Mc],properties:{invalid:{readOnly:!0,reflectToAttribute:!0,type:Boolean}},update:function(t){this._setInvalid(t.invalid)}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const $c={properties:{name:{type:String},value:{notify:!0,type:String},required:{type:Boolean,value:!1}},attached:function(){},detached:function(){}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const _t={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0),this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(t){this._setFocused(t.type==="focus")},_disabledChanged:function(t,e){this.setAttribute("aria-disabled",t?"true":"false"),this.style.pointerEvents=t?"none":"",t?(this._oldTabIndex=this.getAttribute("tabindex"),this._setFocused(!1),this.tabIndex=-1,this.blur()):this._oldTabIndex!==void 0&&(this._oldTabIndex===null?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const ut={};ut.NextLabelID=1;ut.NextAddonID=1;ut.NextInputID=1;const Vf={properties:{label:{type:String},value:{notify:!0,type:String},disabled:{type:Boolean,value:!1},invalid:{type:Boolean,value:!1,notify:!0},allowedPattern:{type:String},type:{type:String},list:{type:String},pattern:{type:String},required:{type:Boolean,value:!1},errorMessage:{type:String},charCounter:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},autoValidate:{type:Boolean,value:!1},validator:{type:String},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,observer:"_autofocusChanged"},inputmode:{type:String},minlength:{type:Number},maxlength:{type:Number},min:{type:String},max:{type:String},step:{type:String},name:{type:String},placeholder:{type:String,value:""},readonly:{type:Boolean,value:!1},size:{type:Number},autocapitalize:{type:String,value:"none"},autocorrect:{type:String,value:"off"},autosave:{type:String},results:{type:Number},accept:{type:String},multiple:{type:Boolean},_ariaDescribedBy:{type:String,value:""},_ariaLabelledBy:{type:String,value:""},_inputId:{type:String,value:""}},listeners:{"addon-attached":"_onAddonAttached"},keyBindings:{"shift+tab:keydown":"_onShiftTabDown"},hostAttributes:{tabindex:0},get inputElement(){return this.$||(this.$={}),this.$.input||(this._generateInputId(),this.$.input=this.$$("#"+this._inputId)),this.$.input},get _focusableElement(){return this.inputElement},created:function(){this._typesThatHaveText=["date","datetime","datetime-local","month","time","week","file"]},attached:function(){this._updateAriaLabelledBy(),!K&&this.inputElement&&this._typesThatHaveText.indexOf(this.inputElement.type)!==-1&&(this.alwaysFloatLabel=!0)},_appendStringWithSpace:function(t,e){return t?t=t+" "+e:t=e,t},_onAddonAttached:function(t){var e=L(t).rootTarget;if(e.id)this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,e.id);else{var i="paper-input-add-on-"+ut.NextAddonID++;e.id=i,this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,i)}},validate:function(){return this.inputElement.validate()},_focusBlurHandler:function(t){_t._focusBlurHandler.call(this,t),this.focused&&!this._shiftTabPressed&&this._focusableElement&&this._focusableElement.focus()},_onShiftTabDown:function(t){var e=this.getAttribute("tabindex");this._shiftTabPressed=!0,this.setAttribute("tabindex","-1"),this.async(function(){this.setAttribute("tabindex",e),this._shiftTabPressed=!1},1)},_handleAutoValidate:function(){this.autoValidate&&this.validate()},updateValueAndPreserveCaret:function(t){try{var e=this.inputElement.selectionStart;this.value=t,this.inputElement.selectionStart=e,this.inputElement.selectionEnd=e}catch{this.value=t}},_computeAlwaysFloatLabel:function(t,e){return e||t},_updateAriaLabelledBy:function(){var t=L(this.root).querySelector("label");if(!t){this._ariaLabelledBy="";return}var e;t.id?e=t.id:(e="paper-input-label-"+ut.NextLabelID++,t.id=e),this._ariaLabelledBy=e},_generateInputId:function(){(!this._inputId||this._inputId==="")&&(this._inputId="input-"+ut.NextInputID++)},_onChange:function(t){this.shadowRoot&&this.fire(t.type,{sourceEvent:t},{node:this,bubbles:t.bubbles,cancelable:t.cancelable})},_autofocusChanged:function(){if(this.autofocus&&this._focusableElement){var t=document.activeElement,e=t instanceof HTMLElement,i=e&&t!==document.body&&t!==document.documentElement;i||this._focusableElement.focus()}}},Df=[_t,Xe,Vf];/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/B({is:"paper-input",_template:q`
    <style>
      :host {
        display: block;
      }

      :host([focused]) {
        outline: none;
      }

      :host([hidden]) {
        display: none !important;
      }

      input {
        /* Firefox sets a min-width on the input, which can cause layout issues */
        min-width: 0;
      }

      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.
      In 2.x the <iron-input> is distributed to paper-input-container, which styles
      it, but in order for this to work correctly, we need to reset some
      of the native input's properties to inherit (from the iron-input) */
      iron-input > input {
        @apply --paper-input-container-shared-input-style;
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
        letter-spacing: inherit;
        word-spacing: inherit;
        line-height: inherit;
        text-shadow: inherit;
        color: inherit;
        cursor: inherit;
      }

      input:disabled {
        @apply --paper-input-container-input-disabled;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      input::-webkit-clear-button {
        @apply --paper-input-container-input-webkit-clear;
      }

      input::-webkit-calendar-picker-indicator {
        @apply --paper-input-container-input-webkit-calendar-picker-indicator;
      }

      input::-webkit-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input:-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-ms-clear {
        @apply --paper-input-container-ms-clear;
      }

      input::-ms-reveal {
        @apply --paper-input-container-ms-reveal;
      }

      input:-ms-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container id="container" no-label-float="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">

      <slot name="prefix" slot="prefix"></slot>

      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>

      <!-- Need to bind maxlength so that the paper-input-char-counter works correctly -->
      <iron-input bind-value="{{value}}" slot="input" class="input-element" id$="[[_inputId]]" maxlength$="[[maxlength]]" allowed-pattern="[[allowedPattern]]" invalid="{{invalid}}" validator="[[validator]]">
        <input aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" disabled$="[[disabled]]" title$="[[title]]" type$="[[type]]" pattern$="[[pattern]]" required$="[[required]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" min$="[[min]]" max$="[[max]]" step$="[[step]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" list$="[[list]]" size$="[[size]]" autocapitalize$="[[autocapitalize]]" autocorrect$="[[autocorrect]]" on-change="_onChange" tabindex$="[[tabIndex]]" autosave$="[[autosave]]" results$="[[results]]" accept$="[[accept]]" multiple$="[[multiple]]" role$="[[inputRole]]" aria-haspopup$="[[inputAriaHaspopup]]">
      </iron-input>

      <slot name="suffix" slot="suffix"></slot>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
  `,behaviors:[Df,$c],properties:{value:{type:String},inputRole:{type:String,value:void 0},inputAriaHaspopup:{type:String,value:void 0}},get _focusableElement(){return this.inputElement._inputElement},listeners:{"iron-input-ready":"_onIronInputReady"},_onIronInputReady:function(){this.$.nativeInput||(this.$.nativeInput=this.$$("input")),this.inputElement&&this._typesThatHaveText.indexOf(this.$.nativeInput.type)!==-1&&(this.alwaysFloatLabel=!0),this.inputElement.bindValue&&this.$.container._handleValueAndAutoValidate(this.inputElement)}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/let ki;const qf=()=>{if(ki!==void 0)return ki;const t=document.createElement("div");Object.assign(t.style,{overflow:"auto",position:"fixed",left:"0px",top:"0px",maxWidth:"100px",maxHeight:"100px"});const e=document.createElement("div");return e.style.width="200px",e.style.height="200px",t.appendChild(e),document.body.appendChild(t),ki=Math.abs(t.offsetWidth-100)>1?t.offsetWidth-t.clientWidth:0,document.body.removeChild(t),ki},Bf={properties:{sizingTarget:{type:Object,value:function(){return this}},fitInto:{type:Object,value:window},noOverlap:{type:Boolean},positionTarget:{type:Element},horizontalAlign:{type:String},verticalAlign:{type:String},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},autoFitOnAttach:{type:Boolean,value:!1},expandSizingTargetForScrollbars:{type:Boolean,value:!1},_fitInfo:{type:Object}},get _fitWidth(){var t;return this.fitInto===window?t=this.fitInto.innerWidth:t=this.fitInto.getBoundingClientRect().width,t},get _fitHeight(){var t;return this.fitInto===window?t=this.fitInto.innerHeight:t=this.fitInto.getBoundingClientRect().height,t},get _fitLeft(){var t;return this.fitInto===window?t=0:t=this.fitInto.getBoundingClientRect().left,t},get _fitTop(){var t;return this.fitInto===window?t=0:t=this.fitInto.getBoundingClientRect().top,t},get _defaultPositionTarget(){var t=L(this).parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&(t=t.host),t},get _localeHorizontalAlign(){if(this._isRTL){if(this.horizontalAlign==="right")return"left";if(this.horizontalAlign==="left")return"right"}return this.horizontalAlign},get __shouldPosition(){return(this.horizontalAlign||this.verticalAlign)&&this.positionTarget},get _isRTL(){return typeof this._memoizedIsRTL>"u"&&(this._memoizedIsRTL=window.getComputedStyle(this).direction=="rtl"),this._memoizedIsRTL},attached:function(){this.positionTarget=this.positionTarget||this._defaultPositionTarget,this.autoFitOnAttach&&(window.getComputedStyle(this).display==="none"?setTimeout((function(){this.fit()}).bind(this)):(window.ShadyDOM&&ShadyDOM.flush(),this.fit()))},detached:function(){this.__deferredFit&&(clearTimeout(this.__deferredFit),this.__deferredFit=null)},fit:function(){this.position(),this.constrain(),this.center()},_discoverInfo:function(){if(!this._fitInfo){var t=window.getComputedStyle(this),e=window.getComputedStyle(this.sizingTarget);this._fitInfo={inlineStyle:{top:this.style.top||"",left:this.style.left||"",position:this.style.position||""},sizerInlineStyle:{maxWidth:this.sizingTarget.style.maxWidth||"",maxHeight:this.sizingTarget.style.maxHeight||"",boxSizing:this.sizingTarget.style.boxSizing||""},positionedBy:{vertically:t.top!=="auto"?"top":t.bottom!=="auto"?"bottom":null,horizontally:t.left!=="auto"?"left":t.right!=="auto"?"right":null},sizedBy:{height:e.maxHeight!=="none",width:e.maxWidth!=="none",minWidth:parseInt(e.minWidth,10)||0,minHeight:parseInt(e.minHeight,10)||0},margin:{top:parseInt(t.marginTop,10)||0,right:parseInt(t.marginRight,10)||0,bottom:parseInt(t.marginBottom,10)||0,left:parseInt(t.marginLeft,10)||0}}}},resetFit:function(){var t=this._fitInfo||{};for(var e in t.sizerInlineStyle)this.sizingTarget.style[e]=t.sizerInlineStyle[e];for(var e in t.inlineStyle)this.style[e]=t.inlineStyle[e];this._fitInfo=null},refit:function(){var t=this.sizingTarget.scrollLeft,e=this.sizingTarget.scrollTop;this.resetFit(),this.fit(),this.sizingTarget.scrollLeft=t,this.sizingTarget.scrollTop=e},position:function(){if(!this.__shouldPosition)return;this._discoverInfo(),window.ShadyDOM&&window.ShadyDOM.flush(),this.style.position="fixed",this.sizingTarget.style.boxSizing="border-box",this.style.left="0px",this.style.top="0px";var t=this.getBoundingClientRect(),e=this.__getNormalizedRect(this.positionTarget),i=this.__getNormalizedRect(this.fitInto);let n,r,o,a;this.expandSizingTargetForScrollbars&&(n=this.sizingTarget.offsetWidth,r=this.sizingTarget.offsetHeight,o=this.sizingTarget.clientWidth,a=this.sizingTarget.clientHeight);var s=this._fitInfo.margin,l={width:t.width+s.left+s.right,height:t.height+s.top+s.bottom},c=this.__getPosition(this._localeHorizontalAlign,this.verticalAlign,l,t,e,i),u=c.left+s.left,d=c.top+s.top,p=Math.min(i.right-s.right,u+t.width),h=Math.min(i.bottom-s.bottom,d+t.height);u=Math.max(i.left+s.left,Math.min(u,p-this._fitInfo.sizedBy.minWidth)),d=Math.max(i.top+s.top,Math.min(d,h-this._fitInfo.sizedBy.minHeight));const f=Math.max(p-u,this._fitInfo.sizedBy.minWidth),m=Math.max(h-d,this._fitInfo.sizedBy.minHeight);this.sizingTarget.style.maxWidth=f+"px",this.sizingTarget.style.maxHeight=m+"px";const b=u-t.left,y=d-t.top;if(this.style.left=`${b}px`,this.style.top=`${y}px`,this.expandSizingTargetForScrollbars){const g=this.sizingTarget.offsetHeight,x=this.sizingTarget.clientHeight,v=r-a,C=g-x-v;if(C>0){const Y=i.height-s.top-s.bottom,j=Math.min(Y,m+C);this.sizingTarget.style.maxHeight=`${j}px`;const D=this.sizingTarget.offsetHeight,N=D-g;let W;c.verticalAlign==="top"?W=y:c.verticalAlign==="middle"?W=y-N/2:c.verticalAlign==="bottom"&&(W=y-N),W=Math.max(i.top+s.top,Math.min(W,i.bottom-s.bottom-D)),this.style.top=`${W}px`}const S=this.sizingTarget.offsetWidth,E=this.sizingTarget.clientWidth,F=n-o,oe=S-E-F;if(oe>0){const Y=qf(),j=i.width-s.left-s.right,D=Math.min(j,f+oe-Y);this.sizingTarget.style.maxWidth=`${D}px`;const N=this.sizingTarget.offsetWidth+Y,W=N-S;let P;c.horizontalAlign==="left"?P=b:c.horizontalAlign==="center"?P=b-W/2:c.horizontalAlign==="right"&&(P=b-W),P=Math.max(i.left+s.left,Math.min(P,i.right-s.right-N)),this.style.left=`${P}px`}}},constrain:function(){if(!this.__shouldPosition){this._discoverInfo();var t=this._fitInfo;t.positionedBy.vertically||(this.style.position="fixed",this.style.top="0px"),t.positionedBy.horizontally||(this.style.position="fixed",this.style.left="0px"),this.sizingTarget.style.boxSizing="border-box";var e=this.getBoundingClientRect();t.sizedBy.height||this.__sizeDimension(e,t.positionedBy.vertically,"top","bottom","Height"),t.sizedBy.width||this.__sizeDimension(e,t.positionedBy.horizontally,"left","right","Width")}},_sizeDimension:function(t,e,i,n,r){this.__sizeDimension(t,e,i,n,r)},__sizeDimension:function(t,e,i,n,r){var o=this._fitInfo,a=this.__getNormalizedRect(this.fitInto),s=r==="Width"?a.width:a.height,l=e===n,c=l?s-t[n]:t[i],u=o.margin[l?i:n],d="offset"+r,p=this[d]-this.sizingTarget[d];this.sizingTarget.style["max"+r]=s-u-c-p+"px"},center:function(){if(!this.__shouldPosition){this._discoverInfo();var t=this._fitInfo.positionedBy;if(!(t.vertically&&t.horizontally)){this.style.position="fixed",t.vertically||(this.style.top="0px"),t.horizontally||(this.style.left="0px");var e=this.getBoundingClientRect(),i=this.__getNormalizedRect(this.fitInto);if(!t.vertically){var n=i.top-e.top+(i.height-e.height)/2;this.style.top=n+"px"}if(!t.horizontally){var r=i.left-e.left+(i.width-e.width)/2;this.style.left=r+"px"}}}},__getNormalizedRect:function(t){return t===document.documentElement||t===window?{top:0,left:0,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth,bottom:window.innerHeight}:t.getBoundingClientRect()},__getOffscreenArea:function(t,e,i){var n=Math.min(0,t.top)+Math.min(0,i.bottom-(t.top+e.height)),r=Math.min(0,t.left)+Math.min(0,i.right-(t.left+e.width));return Math.abs(n)*e.width+Math.abs(r)*e.height},__getPosition:function(t,e,i,n,r,o){var a=[{verticalAlign:"top",horizontalAlign:"left",top:r.top+this.verticalOffset,left:r.left+this.horizontalOffset},{verticalAlign:"top",horizontalAlign:"right",top:r.top+this.verticalOffset,left:r.right-i.width-this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"left",top:r.bottom-i.height-this.verticalOffset,left:r.left+this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"right",top:r.bottom-i.height-this.verticalOffset,left:r.right-i.width-this.horizontalOffset}];if(this.noOverlap){for(var s=0,l=a.length;s<l;s++){var c={};for(var u in a[s])c[u]=a[s][u];a.push(c)}a[0].top=a[1].top+=r.height,a[2].top=a[3].top-=r.height,a[4].left=a[6].left+=r.width,a[5].left=a[7].left-=r.width}e=e==="auto"?null:e,t=t==="auto"?null:t,(!t||t==="center")&&(a.push({verticalAlign:"top",horizontalAlign:"center",top:r.top+this.verticalOffset+(this.noOverlap?r.height:0),left:r.left-n.width/2+r.width/2+this.horizontalOffset}),a.push({verticalAlign:"bottom",horizontalAlign:"center",top:r.bottom-i.height-this.verticalOffset-(this.noOverlap?r.height:0),left:r.left-n.width/2+r.width/2+this.horizontalOffset})),(!e||e==="middle")&&(a.push({verticalAlign:"middle",horizontalAlign:"left",top:r.top-n.height/2+r.height/2+this.verticalOffset,left:r.left+this.horizontalOffset+(this.noOverlap?r.width:0)}),a.push({verticalAlign:"middle",horizontalAlign:"right",top:r.top-n.height/2+r.height/2+this.verticalOffset,left:r.right-i.width-this.horizontalOffset-(this.noOverlap?r.width:0)})),e==="middle"&&t==="center"&&a.push({verticalAlign:"middle",horizontalAlign:"center",top:r.top-n.height/2+r.height/2+this.verticalOffset,left:r.left-n.width/2+r.width/2+this.horizontalOffset});for(var d,s=0;s<a.length;s++){var p=a[s],h=p.verticalAlign===e,f=p.horizontalAlign===t;if(!this.dynamicAlign&&!this.noOverlap&&h&&f){d=p;break}var m=(!e||h)&&(!t||f);if(!(!this.dynamicAlign&&!m)){if(p.offscreenArea=this.__getOffscreenArea(p,i,o),p.offscreenArea===0&&m){d=p;break}d=d||p;var b=p.offscreenArea-d.offscreenArea;(b<0||b===0&&(h||f))&&(d=p)}}return d}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var Li=new Set;const jf={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(Li.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach(function(t){this.resizerShouldNotify(t)&&this._notifyDescendant(t)},this),this._fireResize())},assignParentResizable:function(t){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=t,t&&t._interestedResizables.indexOf(this)===-1&&(t._interestedResizables.push(this),t._subscribeIronResize(this))},stopResizeNotificationsFor:function(t){var e=this._interestedResizables.indexOf(t);e>-1&&(this._interestedResizables.splice(e,1),this._unsubscribeIronResize(t))},_subscribeIronResize:function(t){t.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(t){t.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(t){return!0},_onDescendantIronResize:function(t){if(this._notifyingDescendant){t.stopPropagation();return}In||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(t){var e=L(t).rootTarget;e!==this&&(e.assignParentResizable(this),this._notifyDescendant(e),t.stopPropagation())},_parentResizableChanged:function(t){t&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(t){this.isAttached&&(this._notifyingDescendant=!0,t.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if(document.readyState==="loading"){var t=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",function e(){document.removeEventListener("readystatechange",e),t()})}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach(function(e){e!==this&&e._findParent()},this):(Li.forEach(function(e){e!==this&&e._findParent()},this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?Li.delete(this):Li.add(this)}};/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var it=Element.prototype,$i=it.matches||it.matchesSelector||it.mozMatchesSelector||it.msMatchesSelector||it.oMatchesSelector||it.webkitMatchesSelector;class Uf{getTabbableNodes(e){var i=[],n=this._collectTabbableNodes(e,i);return n?this._sortByTabIndex(i):i}isFocusable(e){return $i.call(e,"input, select, textarea, button, object")?$i.call(e,":not([disabled])"):$i.call(e,"a[href], area[href], iframe, [tabindex], [contentEditable]")}isTabbable(e){return this.isFocusable(e)&&$i.call(e,':not([tabindex="-1"])')&&this._isVisible(e)}_normalizedTabIndex(e){if(this.isFocusable(e)){var i=e.getAttribute("tabindex")||0;return Number(i)}return-1}_collectTabbableNodes(e,i){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var n=e;if(!this._isVisible(n))return!1;var r=this._normalizedTabIndex(n),o=r>0;r>=0&&i.push(n);var a;n.localName==="content"||n.localName==="slot"?a=L(n).getDistributedNodes():a=L(n.root||n).children;for(var s=0;s<a.length;s++)o=this._collectTabbableNodes(a[s],i)||o;return o}_isVisible(e){var i=e.style;return i.visibility!=="hidden"&&i.display!=="none"?(i=window.getComputedStyle(e),i.visibility!=="hidden"&&i.display!=="none"):!1}_sortByTabIndex(e){var i=e.length;if(i<2)return e;var n=Math.ceil(i/2),r=this._sortByTabIndex(e.slice(0,n)),o=this._sortByTabIndex(e.slice(n));return this._mergeSortByTabIndex(r,o)}_mergeSortByTabIndex(e,i){for(var n=[];e.length>0&&i.length>0;)this._hasLowerTabOrder(e[0],i[0])?n.push(i.shift()):n.push(e.shift());return n.concat(e,i)}_hasLowerTabOrder(e,i){var n=Math.max(e.tabIndex,0),r=Math.max(i.tabIndex,0);return n===0||r===0?r>n:n>r}}const Kf=new Uf;/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/B({_template:q`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--iron-overlay-backdrop-background-color, #000);
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
        @apply --iron-overlay-backdrop;
      }

      :host(.opened) {
        opacity: var(--iron-overlay-backdrop-opacity, 0.6);
        pointer-events: auto;
        @apply --iron-overlay-backdrop-opened;
      }
    </style>

    <slot></slot>
`,is:"iron-overlay-backdrop",properties:{opened:{reflectToAttribute:!0,type:Boolean,value:!1,observer:"_openedChanged"}},listeners:{transitionend:"_onTransitionend"},created:function(){this.__openedRaf=null},attached:function(){this.opened&&this._openedChanged(this.opened)},prepare:function(){this.opened&&!this.parentNode&&L(document.body).appendChild(this)},open:function(){this.opened=!0},close:function(){this.opened=!1},complete:function(){!this.opened&&this.parentNode===document.body&&L(this.parentNode).removeChild(this)},_onTransitionend:function(t){t&&t.target===this&&this.complete()},_openedChanged:function(t){if(t)this.prepare();else{var e=window.getComputedStyle(this);(e.transitionDuration==="0s"||e.opacity==0)&&this.complete()}this.isAttached&&(this.__openedRaf&&(window.cancelAnimationFrame(this.__openedRaf),this.__openedRaf=null),this.scrollTop=this.scrollTop,this.__openedRaf=window.requestAnimationFrame((function(){this.__openedRaf=null,this.toggleClass("opened",this.opened)}).bind(this)))}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class Wf{constructor(){this._overlays=[],this._minimumZ=101,this._backdropElement=null,ec(document.documentElement,"tap",function(){}),document.addEventListener("tap",this._onCaptureClick.bind(this),!0),document.addEventListener("focus",this._onCaptureFocus.bind(this),!0),document.addEventListener("keydown",this._onCaptureKeyDown.bind(this),!0)}get backdropElement(){return this._backdropElement||(this._backdropElement=document.createElement("iron-overlay-backdrop")),this._backdropElement}get deepActiveElement(){var e=document.activeElement;for((!e||!(e instanceof Element))&&(e=document.body);e.root&&L(e.root).activeElement;)e=L(e.root).activeElement;return e}_bringOverlayAtIndexToFront(e){var i=this._overlays[e];if(i){var n=this._overlays.length-1,r=this._overlays[n];if(r&&this._shouldBeBehindOverlay(i,r)&&n--,!(e>=n)){var o=Math.max(this.currentOverlayZ(),this._minimumZ);for(this._getZ(i)<=o&&this._applyOverlayZ(i,o);e<n;)this._overlays[e]=this._overlays[e+1],e++;this._overlays[n]=i}}}addOrRemoveOverlay(e){e.opened?this.addOverlay(e):this.removeOverlay(e)}addOverlay(e){var i=this._overlays.indexOf(e);if(i>=0){this._bringOverlayAtIndexToFront(i),this.trackBackdrop();return}var n=this._overlays.length,r=this._overlays[n-1],o=Math.max(this._getZ(r),this._minimumZ),a=this._getZ(e);if(r&&this._shouldBeBehindOverlay(e,r)){this._applyOverlayZ(r,o),n--;var s=this._overlays[n-1];o=Math.max(this._getZ(s),this._minimumZ)}a<=o&&this._applyOverlayZ(e,o),this._overlays.splice(n,0,e),this.trackBackdrop()}removeOverlay(e){var i=this._overlays.indexOf(e);i!==-1&&(this._overlays.splice(i,1),this.trackBackdrop())}currentOverlay(){var e=this._overlays.length-1;return this._overlays[e]}currentOverlayZ(){return this._getZ(this.currentOverlay())}ensureMinimumZ(e){this._minimumZ=Math.max(this._minimumZ,e)}focusOverlay(){var e=this.currentOverlay();e&&e._applyFocus()}trackBackdrop(){var e=this._overlayWithBackdrop();!e&&!this._backdropElement||(this.backdropElement.style.zIndex=this._getZ(e)-1,this.backdropElement.opened=!!e,this.backdropElement.prepare())}getBackdrops(){for(var e=[],i=0;i<this._overlays.length;i++)this._overlays[i].withBackdrop&&e.push(this._overlays[i]);return e}backdropZ(){return this._getZ(this._overlayWithBackdrop())-1}_overlayWithBackdrop(){for(var e=this._overlays.length-1;e>=0;e--)if(this._overlays[e].withBackdrop)return this._overlays[e]}_getZ(e){var i=this._minimumZ;if(e){var n=Number(e.style.zIndex||window.getComputedStyle(e).zIndex);n===n&&(i=n)}return i}_setZ(e,i){e.style.zIndex=i}_applyOverlayZ(e,i){this._setZ(e,i+2)}_overlayInPath(e){e=e||[];for(var i=0;i<e.length;i++)if(e[i]._manager===this)return e[i]}_onCaptureClick(e){var i=this._overlays.length-1;if(i!==-1)for(var n=L(e).path,r;(r=this._overlays[i])&&this._overlayInPath(n)!==r&&(r._onCaptureClick(e),r.allowClickThrough);)i--}_onCaptureFocus(e){var i=this.currentOverlay();i&&i._onCaptureFocus(e)}_onCaptureKeyDown(e){var i=this.currentOverlay();i&&(Xe.keyboardEventMatchesKeys(e,"esc")?i._onCaptureEsc(e):Xe.keyboardEventMatchesKeys(e,"tab")&&i._onCaptureTab(e))}_shouldBeBehindOverlay(e,i){return!e.alwaysOnTop&&i.alwaysOnTop}}const Gf=new Wf;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var Cn={pageX:0,pageY:0},as=null,br=[],Sn=["wheel","mousewheel","DOMMouseScroll","touchstart","touchmove"],en,Po;function Yf(t){ye.indexOf(t)>=0||(ye.length===0&&Zf(),ye.push(t),Po=ye[ye.length-1])}function Jf(t){var e=ye.indexOf(t);e!==-1&&(ye.splice(e,1),Po=ye[ye.length-1],ye.length===0&&Qf())}const ye=[];function Xf(t){if(t.cancelable&&em(t)&&t.preventDefault(),t.targetTouches){var e=t.targetTouches[0];Cn.pageX=e.pageX,Cn.pageY=e.pageY}}function Zf(){en=en||Xf.bind(void 0);for(var t=0,e=Sn.length;t<e;t++)document.addEventListener(Sn[t],en,{capture:!0,passive:!1})}function Qf(){for(var t=0,e=Sn.length;t<e;t++)document.removeEventListener(Sn[t],en,{capture:!0,passive:!1})}function em(t){var e=L(t).rootTarget;if(t.type!=="touchmove"&&as!==e&&(as=e,br=tm(L(t).path)),!br.length)return!0;if(t.type==="touchstart")return!1;var i=nm(t);return!im(br,i.deltaX,i.deltaY)}function tm(t){for(var e=[],i=t.indexOf(Po),n=0;n<=i;n++)if(t[n].nodeType===Node.ELEMENT_NODE){var r=t[n],o=r.style;o.overflow!=="scroll"&&o.overflow!=="auto"&&(o=window.getComputedStyle(r)),(o.overflow==="scroll"||o.overflow==="auto")&&e.push(r)}return e}function im(t,e,i){if(!(!e&&!i))for(var n=Math.abs(i)>=Math.abs(e),r=0;r<t.length;r++){var o=t[r],a=!1;if(n?a=i<0?o.scrollTop>0:o.scrollTop<o.scrollHeight-o.clientHeight:a=e<0?o.scrollLeft>0:o.scrollLeft<o.scrollWidth-o.clientWidth,a)return o}}function nm(t){var e={deltaX:t.deltaX,deltaY:t.deltaY};if(!("deltaX"in t)){if("wheelDeltaX"in t&&"wheelDeltaY"in t)e.deltaX=-t.wheelDeltaX,e.deltaY=-t.wheelDeltaY;else if("wheelDelta"in t)e.deltaX=0,e.deltaY=-t.wheelDelta;else if("axis"in t)e.deltaX=t.axis===1?t.detail:0,e.deltaY=t.axis===2?t.detail:0;else if(t.targetTouches){var i=t.targetTouches[0];e.deltaX=Cn.pageX-i.pageX,e.deltaY=Cn.pageY-i.pageY}}return e}/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Nt={properties:{opened:{observer:"_openedChanged",type:Boolean,value:!1,notify:!0},canceled:{observer:"_canceledChanged",readOnly:!0,type:Boolean,value:!1},withBackdrop:{observer:"_withBackdropChanged",type:Boolean},noAutoFocus:{type:Boolean,value:!1},noCancelOnEscKey:{type:Boolean,value:!1},noCancelOnOutsideClick:{type:Boolean,value:!1},closingReason:{type:Object},restoreFocusOnClose:{type:Boolean,value:!1},allowClickThrough:{type:Boolean},alwaysOnTop:{type:Boolean},scrollAction:{type:String},_manager:{type:Object,value:Gf},_focusedChild:{type:Object}},listeners:{"iron-resize":"_onIronResize"},observers:["__updateScrollObservers(isAttached, opened, scrollAction)"],get backdropElement(){return this._manager.backdropElement},get _focusNode(){return this._focusedChild||L(this).querySelector("[autofocus]")||this},get _focusableNodes(){return Kf.getTabbableNodes(this)},ready:function(){this.__isAnimating=!1,this.__shouldRemoveTabIndex=!1,this.__firstFocusableNode=this.__lastFocusableNode=null,this.__rafs={},this.__restoreFocusNode=null,this.__scrollTop=this.__scrollLeft=null,this.__onCaptureScroll=this.__onCaptureScroll.bind(this),this.__rootNodes=null,this._ensureSetup()},attached:function(){this.opened&&this._openedChanged(this.opened),this._observer=L(this).observeNodes(this._onNodesChange)},detached:function(){this._observer&&L(this).unobserveNodes(this._observer),this._observer=null;for(var t in this.__rafs)this.__rafs[t]!==null&&cancelAnimationFrame(this.__rafs[t]);this.__rafs={},this._manager.removeOverlay(this),this.__isAnimating&&(this.opened?this._finishRenderOpened():(this._applyFocus(),this._finishRenderClosed()))},toggle:function(){this._setCanceled(!1),this.opened=!this.opened},open:function(){this._setCanceled(!1),this.opened=!0},close:function(){this._setCanceled(!1),this.opened=!1},cancel:function(t){var e=this.fire("iron-overlay-canceled",t,{cancelable:!0});e.defaultPrevented||(this._setCanceled(!0),this.opened=!1)},invalidateTabbables:function(){this.__firstFocusableNode=this.__lastFocusableNode=null},_ensureSetup:function(){this._overlaySetup||(this._overlaySetup=!0,this.style.outline="none",this.style.display="none")},_openedChanged:function(t){t?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true"),this.isAttached&&(this.__isAnimating=!0,this.__deraf("__openedChanged",this.__openedChanged))},_canceledChanged:function(){this.closingReason=this.closingReason||{},this.closingReason.canceled=this.canceled},_withBackdropChanged:function(){this.withBackdrop&&!this.hasAttribute("tabindex")?(this.setAttribute("tabindex","-1"),this.__shouldRemoveTabIndex=!0):this.__shouldRemoveTabIndex&&(this.removeAttribute("tabindex"),this.__shouldRemoveTabIndex=!1),this.opened&&this.isAttached&&this._manager.trackBackdrop()},_prepareRenderOpened:function(){this.__restoreFocusNode=this._manager.deepActiveElement,this._preparePositioning(),this.refit(),this._finishPositioning(),this.noAutoFocus&&document.activeElement===this._focusNode&&(this._focusNode.blur(),this.__restoreFocusNode.focus())},_renderOpened:function(){this._finishRenderOpened()},_renderClosed:function(){this._finishRenderClosed()},_finishRenderOpened:function(){this.notifyResize(),this.__isAnimating=!1,this.fire("iron-overlay-opened")},_finishRenderClosed:function(){this.style.display="none",this.style.zIndex="",this.notifyResize(),this.__isAnimating=!1,this.fire("iron-overlay-closed",this.closingReason)},_preparePositioning:function(){this.style.transition=this.style.webkitTransition="none",this.style.transform=this.style.webkitTransform="none",this.style.display=""},_finishPositioning:function(){this.style.display="none",this.scrollTop=this.scrollTop,this.style.transition=this.style.webkitTransition="",this.style.transform=this.style.webkitTransform="",this.style.display="",this.scrollTop=this.scrollTop},_applyFocus:function(){if(this.opened)this.noAutoFocus||this._focusNode.focus();else{if(this.restoreFocusOnClose&&this.__restoreFocusNode){var t=this._manager.deepActiveElement;(t===document.body||om(this,t))&&this.__restoreFocusNode.focus()}this.__restoreFocusNode=null,this._focusNode.blur(),this._focusedChild=null}},_onCaptureClick:function(t){this.noCancelOnOutsideClick||this.cancel(t)},_onCaptureFocus:function(t){if(this.withBackdrop){var e=L(t).path;e.indexOf(this)===-1?(t.stopPropagation(),this._applyFocus()):this._focusedChild=e[0]}},_onCaptureEsc:function(t){this.noCancelOnEscKey||this.cancel(t)},_onCaptureTab:function(t){if(this.withBackdrop){this.__ensureFirstLastFocusables();var e=t.shiftKey,i=e?this.__firstFocusableNode:this.__lastFocusableNode,n=e?this.__lastFocusableNode:this.__firstFocusableNode,r=!1;if(i===n)r=!0;else{var o=this._manager.deepActiveElement;r=o===i||o===this}r&&(t.preventDefault(),this._focusedChild=n,this._applyFocus())}},_onIronResize:function(){this.opened&&!this.__isAnimating&&this.__deraf("refit",this.refit)},_onNodesChange:function(){this.opened&&!this.__isAnimating&&(this.invalidateTabbables(),this.notifyResize())},__ensureFirstLastFocusables:function(){var t=this._focusableNodes;this.__firstFocusableNode=t[0],this.__lastFocusableNode=t[t.length-1]},__openedChanged:function(){this.opened?(this._prepareRenderOpened(),this._manager.addOverlay(this),this._applyFocus(),this._renderOpened()):(this._manager.removeOverlay(this),this._applyFocus(),this._renderClosed())},__deraf:function(t,e){var i=this.__rafs;i[t]!==null&&cancelAnimationFrame(i[t]),i[t]=requestAnimationFrame((function(){i[t]=null,e.call(this)}).bind(this))},__updateScrollObservers:function(t,e,i){!t||!e||!this.__isValidScrollAction(i)?(Jf(this),this.__removeScrollListeners()):(i==="lock"&&(this.__saveScrollPosition(),Yf(this)),this.__addScrollListeners())},__addScrollListeners:function(){if(!this.__rootNodes){if(this.__rootNodes=[],In)for(var t=this;t;)t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host&&this.__rootNodes.push(t),t=t.host||t.assignedSlot||t.parentNode;this.__rootNodes.push(document)}this.__rootNodes.forEach(function(e){e.addEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})},this)},__removeScrollListeners:function(){this.__rootNodes&&this.__rootNodes.forEach(function(t){t.removeEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})},this),this.isAttached||(this.__rootNodes=null)},__isValidScrollAction:function(t){return t==="lock"||t==="refit"||t==="cancel"},__onCaptureScroll:function(t){if(!this.__isAnimating&&!(L(t).path.indexOf(this)>=0))switch(this.scrollAction){case"lock":this.__restoreScrollPosition();break;case"refit":this.__deraf("refit",this.refit);break;case"cancel":this.cancel(t);break}},__saveScrollPosition:function(){document.scrollingElement?(this.__scrollTop=document.scrollingElement.scrollTop,this.__scrollLeft=document.scrollingElement.scrollLeft):(this.__scrollTop=Math.max(document.documentElement.scrollTop,document.body.scrollTop),this.__scrollLeft=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft))},__restoreScrollPosition:function(){document.scrollingElement?(document.scrollingElement.scrollTop=this.__scrollTop,document.scrollingElement.scrollLeft=this.__scrollLeft):(document.documentElement.scrollTop=document.body.scrollTop=this.__scrollTop,document.documentElement.scrollLeft=document.body.scrollLeft=this.__scrollLeft)}},rm=t=>t.assignedSlot||t.parentNode||t.host,om=(t,e)=>{for(let i=e;i;i=rm(i))if(i===t)return!0;return!1},am=[Bf,jf,Nt];/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const sm={properties:{animationConfig:{type:Object},entryAnimation:{observer:"_entryAnimationChanged",type:String},exitAnimation:{observer:"_exitAnimationChanged",type:String}},_entryAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.entry=[{name:this.entryAnimation,node:this}]},_exitAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.exit=[{name:this.exitAnimation,node:this}]},_copyProperties:function(t,e){for(var i in e)t[i]=e[i]},_cloneConfig:function(t){var e={isClone:!0};return this._copyProperties(e,t),e},_getAnimationConfigRecursive:function(t,e,i){if(this.animationConfig){if(this.animationConfig.value&&typeof this.animationConfig.value=="function"){this._warn(this._logf("playAnimation","Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."));return}var n;if(t?n=this.animationConfig[t]:n=this.animationConfig,Array.isArray(n)||(n=[n]),n)for(var r,o=0;r=n[o];o++)if(r.animatable)r.animatable._getAnimationConfigRecursive(r.type||t,e,i);else if(r.id){var a=e[r.id];a?(a.isClone||(e[r.id]=this._cloneConfig(a),a=e[r.id]),this._copyProperties(a,r)):e[r.id]=r}else i.push(r)}},getAnimationConfig:function(t){var e={},i=[];this._getAnimationConfigRecursive(t,e,i);for(var n in e)i.push(e[n]);return i}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const lm={_configureAnimations:function(t){var e=[],i=[];if(t.length>0)for(let r,o=0;r=t[o];o++){let a=document.createElement(r.name);if(a.isNeonAnimation){let s=null;a.configure||(a.configure=function(l){return null}),s=a.configure(r),i.push({result:s,config:r,neonAnimation:a})}else console.warn(this.is+":",r.name,"not found!")}for(var n=0;n<i.length;n++){let r=i[n].result,o=i[n].config,a=i[n].neonAnimation;try{typeof r.cancel!="function"&&(r=document.timeline.play(r))}catch(s){r=null,console.warn("Couldnt play","(",o.name,").",s)}r&&e.push({neonAnimation:a,config:o,animation:r})}return e},_shouldComplete:function(t){for(var e=!0,i=0;i<t.length;i++)if(t[i].animation.playState!="finished"){e=!1;break}return e},_complete:function(t){for(var e=0;e<t.length;e++)t[e].neonAnimation.complete(t[e].config);for(var e=0;e<t.length;e++)t[e].animation.cancel()},playAnimation:function(t,e){var i=this.getAnimationConfig(t);if(i){this._active=this._active||{},this._active[t]&&(this._complete(this._active[t]),delete this._active[t]);var n=this._configureAnimations(i);if(n.length==0){this.fire("neon-animation-finish",e,{bubbles:!1});return}this._active[t]=n;for(var r=0;r<n.length;r++)n[r].animation.onfinish=(function(){this._shouldComplete(n)&&(this._complete(n),delete this._active[t],this.fire("neon-animation-finish",e,{bubbles:!1}))}).bind(this)}},cancelAnimation:function(){for(var t in this._active){var e=this._active[t];for(var i in e)e[i].animation.cancel()}this._active={}}},cm=[sm,lm];/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/B({_template:q`
    <style>
      :host {
        position: fixed;
      }

      #contentWrapper ::slotted(*) {
        overflow: auto;
      }

      #contentWrapper.animating ::slotted(*) {
        overflow: hidden;
        pointer-events: none;
      }
    </style>

    <div id="contentWrapper">
      <slot id="content" name="dropdown-content"></slot>
    </div>
`,is:"iron-dropdown",behaviors:[_t,Xe,am,cm],properties:{horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},openAnimationConfig:{type:Object},closeAnimationConfig:{type:Object},focusTarget:{type:Object},noAnimations:{type:Boolean,value:!1},allowOutsideScroll:{type:Boolean,value:!1,observer:"_allowOutsideScrollChanged"}},listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},observers:["_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)"],get containedElement(){for(var t=L(this.$.content).getDistributedNodes(),e=0,i=t.length;e<i;e++)if(t[e].nodeType===Node.ELEMENT_NODE)return t[e]},ready:function(){this.scrollAction||(this.scrollAction=this.allowOutsideScroll?"refit":"lock"),this._readied=!0},attached:function(){(!this.sizingTarget||this.sizingTarget===this)&&(this.sizingTarget=this.containedElement||this)},detached:function(){this.cancelAnimation()},_openedChanged:function(){this.opened&&this.disabled?this.cancel():(this.cancelAnimation(),this._updateAnimationConfig(),Nt._openedChanged.apply(this,arguments))},_renderOpened:function(){!this.noAnimations&&this.animationConfig.open?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("open")):Nt._renderOpened.apply(this,arguments)},_renderClosed:function(){!this.noAnimations&&this.animationConfig.close?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("close")):Nt._renderClosed.apply(this,arguments)},_onNeonAnimationFinish:function(){this.$.contentWrapper.classList.remove("animating"),this.opened?this._finishRenderOpened():this._finishRenderClosed()},_updateAnimationConfig:function(){for(var t=this.containedElement,e=[].concat(this.openAnimationConfig||[]).concat(this.closeAnimationConfig||[]),i=0;i<e.length;i++)e[i].node=t;this.animationConfig={open:this.openAnimationConfig,close:this.closeAnimationConfig}},_updateOverlayPosition:function(){this.isAttached&&this.notifyResize()},_allowOutsideScrollChanged:function(t){this._readied&&(t?(!this.scrollAction||this.scrollAction==="lock")&&(this.scrollAction="refit"):this.scrollAction="lock")},_applyFocus:function(){var t=this.focusTarget||this.containedElement;t&&this.opened&&!this.noAutoFocus?t.focus():Nt._applyFocus.apply(this,arguments)}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const At={properties:{animationTiming:{type:Object,value:function(){return{duration:500,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"both"}}}},isNeonAnimation:!0,created:function(){document.body.animate||console.warn("No web animations detected. This element will not function without a web animations polyfill.")},timingFromConfig:function(t){if(t.timing)for(var e in t.timing)this.animationTiming[e]=t.timing[e];return this.animationTiming},setPrefixedProperty:function(t,e,i){for(var n={transform:["webkitTransform"],transformOrigin:["mozTransformOrigin","webkitTransformOrigin"]},r=n[e],o,a=0;o=r[a];a++)t.style[o]=i;t.style[e]=i},complete:function(t){}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/B({is:"fade-in-animation",behaviors:[At],configure:function(t){var e=t.node;return this._effect=new KeyframeEffect(e,[{opacity:"0"},{opacity:"1"}],this.timingFromConfig(t)),this._effect}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/B({is:"fade-out-animation",behaviors:[At],configure:function(t){var e=t.node;return this._effect=new KeyframeEffect(e,[{opacity:"1"},{opacity:"0"}],this.timingFromConfig(t)),this._effect}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Oc=q`
<custom-style>
  <style is="custom-style">
    html {

      --shadow-transition: {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      };

      --shadow-none: {
        box-shadow: none;
      };

      /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */

      --shadow-elevation-2dp: {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2);
      };

      --shadow-elevation-3dp: {
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
                    0 1px 8px 0 rgba(0, 0, 0, 0.12),
                    0 3px 3px -2px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-4dp: {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                    0 1px 10px 0 rgba(0, 0, 0, 0.12),
                    0 2px 4px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-6dp: {
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                    0 1px 18px 0 rgba(0, 0, 0, 0.12),
                    0 3px 5px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-8dp: {
        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                    0 3px 14px 2px rgba(0, 0, 0, 0.12),
                    0 5px 5px -3px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-12dp: {
        box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),
                    0 4px 22px 3px rgba(0, 0, 0, 0.12),
                    0 6px 7px -4px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-16dp: {
        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
                    0  6px 30px 5px rgba(0, 0, 0, 0.12),
                    0  8px 10px -5px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-24dp: {
        box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
                    0 9px 46px 8px rgba(0, 0, 0, 0.12),
                    0 11px 15px -7px rgba(0, 0, 0, 0.4);
      };
    }
  </style>
</custom-style>`;Oc.setAttribute("style","display: none;");document.head.appendChild(Oc.content);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/B({is:"paper-menu-grow-height-animation",_template:null,behaviors:[At],configure:function(t){var e=t.node,i=e.getBoundingClientRect(),n=i.height;return this._effect=new KeyframeEffect(e,[{height:n/2+"px"},{height:n+"px"}],this.timingFromConfig(t)),this._effect}});B({is:"paper-menu-grow-width-animation",_template:null,behaviors:[At],configure:function(t){var e=t.node,i=e.getBoundingClientRect(),n=i.width;return this._effect=new KeyframeEffect(e,[{width:n/2+"px"},{width:n+"px"}],this.timingFromConfig(t)),this._effect}});B({is:"paper-menu-shrink-width-animation",_template:null,behaviors:[At],configure:function(t){var e=t.node,i=e.getBoundingClientRect(),n=i.width;return this._effect=new KeyframeEffect(e,[{width:n+"px"},{width:n-n/20+"px"}],this.timingFromConfig(t)),this._effect}});B({is:"paper-menu-shrink-height-animation",_template:null,behaviors:[At],configure:function(t){var e=t.node,i=e.getBoundingClientRect(),n=i.height;return this.setPrefixedProperty(e,"transformOrigin","0 0"),this._effect=new KeyframeEffect(e,[{height:n+"px",transform:"translateY(0)"},{height:n/2+"px",transform:"translateY(-20px)"}],this.timingFromConfig(t)),this._effect}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var Qt={ANIMATION_CUBIC_BEZIER:"cubic-bezier(.3,.95,.5,1)",MAX_ANIMATION_TIME_MS:400};const um=B({_template:q`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;

        @apply --paper-menu-button;
      }

      :host([disabled]) {
        cursor: auto;
        color: var(--disabled-text-color);

        @apply --paper-menu-button-disabled;
      }

      iron-dropdown {
        @apply --paper-menu-button-dropdown;
      }

      .dropdown-content {
        @apply --shadow-elevation-2dp;

        position: relative;
        border-radius: 2px;
        background-color: var(--paper-menu-button-dropdown-background, var(--primary-background-color));

        @apply --paper-menu-button-content;
      }

      :host([vertical-align="top"]) .dropdown-content {
        margin-bottom: 20px;
        margin-top: -10px;
        top: 10px;
      }

      :host([vertical-align="bottom"]) .dropdown-content {
        bottom: 10px;
        margin-bottom: -10px;
        margin-top: 20px;
      }

      #trigger {
        cursor: pointer;
      }
    </style>

    <div id="trigger" on-tap="toggle">
      <slot name="dropdown-trigger"></slot>
    </div>

    <iron-dropdown id="dropdown" opened="{{opened}}" horizontal-align="[[horizontalAlign]]" vertical-align="[[verticalAlign]]" dynamic-align="[[dynamicAlign]]" horizontal-offset="[[horizontalOffset]]" vertical-offset="[[verticalOffset]]" no-overlap="[[noOverlap]]" open-animation-config="[[openAnimationConfig]]" close-animation-config="[[closeAnimationConfig]]" no-animations="[[noAnimations]]" focus-target="[[_dropdownContent]]" allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]" on-iron-overlay-canceled="__onIronOverlayCanceled" expand-sizing-target-for-scrollbars="[[expandSizingTargetForScrollbars]]">
      <div slot="dropdown-content" class="dropdown-content">
        <slot id="content" name="dropdown-content"></slot>
      </div>
    </iron-dropdown>
`,is:"paper-menu-button",behaviors:[Xe,_t],properties:{opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},noOverlap:{type:Boolean},noAnimations:{type:Boolean,value:!1},ignoreSelect:{type:Boolean,value:!1},closeOnActivate:{type:Boolean,value:!1},openAnimationConfig:{type:Object,value:function(){return[{name:"fade-in-animation",timing:{delay:100,duration:200}},{name:"paper-menu-grow-width-animation",timing:{delay:100,duration:150,easing:Qt.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-grow-height-animation",timing:{delay:100,duration:275,easing:Qt.ANIMATION_CUBIC_BEZIER}}]}},closeAnimationConfig:{type:Object,value:function(){return[{name:"fade-out-animation",timing:{duration:150}},{name:"paper-menu-shrink-width-animation",timing:{delay:100,duration:50,easing:Qt.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-shrink-height-animation",timing:{duration:200,easing:"ease-in"}}]}},allowOutsideScroll:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!0},expandSizingTargetForScrollbars:{type:Boolean,value:!1},_dropdownContent:{type:Object}},hostAttributes:{role:"group","aria-haspopup":"true"},listeners:{"iron-activate":"_onIronActivate","iron-select":"_onIronSelect"},get contentElement(){for(var t=L(this.$.content).getDistributedNodes(),e=0,i=t.length;e<i;e++)if(t[e].nodeType===Node.ELEMENT_NODE)return t[e]},toggle:function(){this.opened?this.close():this.open()},open:function(){this.disabled||this.$.dropdown.open()},close:function(){this.$.dropdown.close()},_onIronSelect:function(t){this.ignoreSelect||this.close()},_onIronActivate:function(t){this.closeOnActivate&&this.close()},_openedChanged:function(t,e){t?(this._dropdownContent=this.contentElement,this.fire("paper-dropdown-open")):e!=null&&this.fire("paper-dropdown-close")},_disabledChanged:function(t){_t._disabledChanged.apply(this,arguments),t&&this.opened&&this.close()},__onIronOverlayCanceled:function(t){var e=t.detail,i=this.$.trigger,n=L(e).path;n.indexOf(i)>-1&&t.preventDefault()}});Object.keys(Qt).forEach(function(t){um[t]=Qt[t]});/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var be={distance:function(t,e,i,n){var r=t-i,o=e-n;return Math.sqrt(r*r+o*o)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};function Tc(t){this.element=t,this.width=this.boundingRect.width,this.height=this.boundingRect.height,this.size=Math.max(this.width,this.height)}Tc.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function(t,e){var i=be.distance(t,e,0,0),n=be.distance(t,e,this.width,0),r=be.distance(t,e,0,this.height),o=be.distance(t,e,this.width,this.height);return Math.max(i,n,r,o)}};function qe(t){this.element=t,this.color=window.getComputedStyle(t).color,this.wave=document.createElement("div"),this.waveContainer=document.createElement("div"),this.wave.style.backgroundColor=this.color,this.wave.classList.add("wave"),this.waveContainer.classList.add("wave-container"),L(this.waveContainer).appendChild(this.wave),this.resetInteractionState()}qe.MAX_RADIUS=300;qe.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var t;return this.mouseDownStart?(t=be.now()-this.mouseDownStart,this.mouseUpStart&&(t-=this.mouseUpElapsed),t):0},get mouseUpElapsed(){return this.mouseUpStart?be.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var t=this.containerMetrics.width*this.containerMetrics.width,e=this.containerMetrics.height*this.containerMetrics.height,i=Math.min(Math.sqrt(t+e),qe.MAX_RADIUS)*1.1+5,n=1.1-.2*(i/qe.MAX_RADIUS),r=this.mouseInteractionSeconds/n,o=i*(1-Math.pow(80,-r));return Math.abs(o)},get opacity(){return this.mouseUpStart?Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity):this.initialOpacity},get outerOpacity(){var t=this.mouseUpElapsedSeconds*.3,e=this.opacity;return Math.max(0,Math.min(t,e))},get isOpacityFullyDecayed(){return this.opacity<.01&&this.radius>=Math.min(this.maxRadius,qe.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,qe.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return Math.min(1,this.radius/this.containerMetrics.size*2/Math.sqrt(2))},get xNow(){return this.xEnd?this.xStart+this.translationFraction*(this.xEnd-this.xStart):this.xStart},get yNow(){return this.yEnd?this.yStart+this.translationFraction*(this.yEnd-this.yStart):this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function(){this.maxRadius=0,this.mouseDownStart=0,this.mouseUpStart=0,this.xStart=0,this.yStart=0,this.xEnd=0,this.yEnd=0,this.slideDistance=0,this.containerMetrics=new Tc(this.element)},draw:function(){var t,e,i;this.wave.style.opacity=this.opacity,t=this.radius/(this.containerMetrics.size/2),e=this.xNow-this.containerMetrics.width/2,i=this.yNow-this.containerMetrics.height/2,this.waveContainer.style.webkitTransform="translate("+e+"px, "+i+"px)",this.waveContainer.style.transform="translate3d("+e+"px, "+i+"px, 0)",this.wave.style.webkitTransform="scale("+t+","+t+")",this.wave.style.transform="scale3d("+t+","+t+",1)"},downAction:function(t){var e=this.containerMetrics.width/2,i=this.containerMetrics.height/2;this.resetInteractionState(),this.mouseDownStart=be.now(),this.center?(this.xStart=e,this.yStart=i,this.slideDistance=be.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)):(this.xStart=t?t.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2,this.yStart=t?t.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2),this.recenters&&(this.xEnd=e,this.yEnd=i,this.slideDistance=be.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)),this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart),this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px",this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px",this.waveContainer.style.width=this.containerMetrics.size+"px",this.waveContainer.style.height=this.containerMetrics.size+"px"},upAction:function(t){this.isMouseDown&&(this.mouseUpStart=be.now())},remove:function(){L(L(this.waveContainer).parentNode).removeChild(this.waveContainer)}};B({_template:q`
    <style>
      :host {
        display: block;
        position: absolute;
        border-radius: inherit;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,
         * creating a node (with a position:absolute) in the middle of an event
         * handler "interrupts" that event handler (which happens when the
         * ripple is created on demand) */
        pointer-events: none;
      }

      :host([animating]) {
        /* This resolves a rendering issue in Chrome (as of 40) where the
           ripple is not properly clipped by its parent (which may have
           rounded corners). See: http://jsbin.com/temexa/4

           Note: We only apply this style conditionally. Otherwise, the browser
           will create a new compositing layer for every ripple element on the
           page, and that would be bad. */
        -webkit-transform: translate(0, 0);
        transform: translate3d(0, 0, 0);
      }

      #background,
      #waves,
      .wave-container,
      .wave {
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      #background,
      .wave {
        opacity: 0;
      }

      #waves,
      .wave {
        overflow: hidden;
      }

      .wave-container,
      .wave {
        border-radius: 50%;
      }

      :host(.circle) #background,
      :host(.circle) #waves {
        border-radius: 50%;
      }

      :host(.circle) .wave-container {
        overflow: hidden;
      }
    </style>

    <div id="background"></div>
    <div id="waves"></div>
`,is:"paper-ripple",behaviors:[Xe],properties:{initialOpacity:{type:Number,value:.25},opacityDecayVelocity:{type:Number,value:.8},recenters:{type:Boolean,value:!1},center:{type:Boolean,value:!1},ripples:{type:Array,value:function(){return[]}},animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},attached:function(){L(this).parentNode.nodeType==11?this.keyEventTarget=L(this).getOwnerRoot().host:this.keyEventTarget=L(this).parentNode;var t=this.keyEventTarget;this.listen(t,"up","uiUpAction"),this.listen(t,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction"),this.unlisten(this.keyEventTarget,"down","uiDownAction"),this.keyEventTarget=null},get shouldKeepAnimating(){for(var t=0;t<this.ripples.length;++t)if(!this.ripples[t].isAnimationComplete)return!0;return!1},simulatedRipple:function(){this.downAction(null),this.async(function(){this.upAction()},1)},uiDownAction:function(t){this.noink||this.downAction(t)},downAction:function(t){if(!(this.holdDown&&this.ripples.length>0)){var e=this.addRipple();e.downAction(t),this._animating||(this._animating=!0,this.animate())}},uiUpAction:function(t){this.noink||this.upAction(t)},upAction:function(t){this.holdDown||(this.ripples.forEach(function(e){e.upAction(t)}),this._animating=!0,this.animate())},onAnimationComplete:function(){this._animating=!1,this.$.background.style.backgroundColor="",this.fire("transitionend")},addRipple:function(){var t=new qe(this);return L(this.$.waves).appendChild(t.waveContainer),this.$.background.style.backgroundColor=t.color,this.ripples.push(t),this._setAnimating(!0),t},removeRipple:function(t){var e=this.ripples.indexOf(t);e<0||(this.ripples.splice(e,1),t.remove(),this.ripples.length||this._setAnimating(!1))},animate:function(){if(this._animating){var t,e;for(t=0;t<this.ripples.length;++t)e=this.ripples[t],e.draw(),this.$.background.style.opacity=e.outerOpacity,e.isOpacityFullyDecayed&&!e.isRestingAtMaxRadius&&this.removeRipple(e);!this.shouldKeepAnimating&&this.ripples.length===0?this.onAnimationComplete():window.requestAnimationFrame(this._boundAnimate)}},animateRipple:function(){return this.animate()},_onEnterKeydown:function(){this.uiDownAction(),this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(t,e){e!==void 0&&(t?this.downAction():this.upAction())}});/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Io=document.createElement("template");Io.setAttribute("style","display: none;");Io.innerHTML=`<iron-iconset-svg name="paper-dropdown-menu" size="24">
<svg><defs>
<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(Io.content);/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Ho=document.createElement("template");Ho.setAttribute("style","display: none;");Ho.innerHTML=`<dom-module id="paper-dropdown-menu-shared-styles">
  <template>
    <style>
      :host {
        display: inline-block;
        position: relative;
        text-align: left;

        /* NOTE(cdata): Both values are needed, since some phones require the
         * value to be \`transparent\`.
         */
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-tap-highlight-color: transparent;

        --paper-input-container-input: {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          max-width: 100%;
          box-sizing: border-box;
          cursor: pointer;
        };

        @apply --paper-dropdown-menu;
      }

      /* paper-dropdown-menu and paper-dropdown-menu-light both delegate focus
       * to other internal elements which manage focus styling. */
      :host(:focus) {
        outline: none;
      }

      :host(:dir(rtl)) {
        text-align: right;

        @apply(--paper-dropdown-menu);
      }

      :host([disabled]) {
        @apply --paper-dropdown-menu-disabled;
      }

      :host([noink]) paper-ripple {
        display: none;
      }

      :host([no-label-float]) paper-ripple {
        top: 8px;
      }

      paper-ripple {
        top: 12px;
        left: 0px;
        bottom: 8px;
        right: 0px;

        @apply --paper-dropdown-menu-ripple;
      }

      paper-menu-button {
        display: block;
        padding: 0;

        @apply --paper-dropdown-menu-button;
      }

      paper-input {
        @apply --paper-dropdown-menu-input;
      }

      iron-icon {
        color: var(--disabled-text-color);

        @apply --paper-dropdown-menu-icon;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(Ho.content);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const dm={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){this.toggles?this._userActivate(!this.active):this.active=!1},_focusChanged:function(t){this._detectKeyboardFocus(t),t||this._setPressed(!1)},_detectKeyboardFocus:function(t){this._setReceivedFocusFromKeyboard(!this.pointerDown&&t)},_userActivate:function(t){this.active!==t&&(this.active=t,this.fire("change"))},_downHandler:function(t){this._setPointerDown(!0),this._setPressed(!0),this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1),this._setPressed(!1)},_spaceKeyDownHandler:function(t){var e=t.detail.keyboardEvent,i=L(e).localTarget;this.isLightDescendant(i)||(e.preventDefault(),e.stopImmediatePropagation(),this._setPressed(!0))},_spaceKeyUpHandler:function(t){var e=t.detail.keyboardEvent,i=L(e).localTarget;this.isLightDescendant(i)||(this.pressed&&this._asyncClick(),this._setPressed(!1))},_asyncClick:function(){this.async(function(){this.click()},1)},_pressedChanged:function(t){this._changedButtonState()},_ariaActiveAttributeChanged:function(t,e){e&&e!=t&&this.hasAttribute(e)&&this.removeAttribute(e)},_activeChanged:function(t,e){this.toggles?this.setAttribute(this.ariaActiveAttribute,t?"true":"false"):this.removeAttribute(this.ariaActiveAttribute),this._changedButtonState()},_controlStateChanged:function(){this.disabled?this._setPressed(!1):this._changedButtonState()},_changedButtonState:function(){this._buttonStateChanged&&this._buttonStateChanged()}},pm=[Xe,dm];/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const hm=Mo(HTMLElement);B({_template:q`
    <style include="paper-dropdown-menu-shared-styles"></style>

    <paper-menu-button id="menuButton" vertical-align="[[verticalAlign]]" horizontal-align="[[horizontalAlign]]" dynamic-align="[[dynamicAlign]]" vertical-offset="[[_computeMenuVerticalOffset(noLabelFloat, verticalOffset)]]" disabled="[[disabled]]" no-animations="[[noAnimations]]" on-iron-select="_onIronSelect" on-iron-deselect="_onIronDeselect" opened="{{opened}}" close-on-activate allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]" expand-sizing-target-for-scrollbars="[[expandSizingTargetForScrollbars]]">
      <!-- support hybrid mode: user might be using paper-menu-button 1.x which distributes via <content> -->
      <div class="dropdown-trigger" slot="dropdown-trigger">
        <paper-ripple></paper-ripple>
        <!-- paper-input has type="text" for a11y, do not remove -->
        <paper-input id="input" type="text" invalid="[[invalid]]" readonly disabled="[[disabled]]" value="[[value]]" placeholder="[[placeholder]]" error-message="[[errorMessage]]" always-float-label="[[alwaysFloatLabel]]" no-label-float="[[noLabelFloat]]" label="[[label]]" input-role="button" input-aria-haspopup="listbox" autocomplete="off">
          <!-- support hybrid mode: user might be using paper-input 1.x which distributes via <content> -->
          <iron-icon icon="paper-dropdown-menu:arrow-drop-down" suffix slot="suffix"></iron-icon>
        </paper-input>
      </div>
      <slot id="content" name="dropdown-content" slot="dropdown-content"></slot>
    </paper-menu-button>
`,is:"paper-dropdown-menu",behaviors:[pm,_t,$c,Zr],properties:{selectedItemLabel:{type:String,notify:!0,readOnly:!0},selectedItem:{type:Object,notify:!0,readOnly:!0},value:{type:String,notify:!0},label:{type:String},placeholder:{type:String},errorMessage:{type:String},opened:{type:Boolean,notify:!0,value:!1,observer:"_openedChanged"},allowOutsideScroll:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1,reflectToAttribute:!0},alwaysFloatLabel:{type:Boolean,value:!1},noAnimations:{type:Boolean,value:!1},horizontalAlign:{type:String,value:"right"},verticalAlign:{type:String,value:"top"},verticalOffset:Number,dynamicAlign:{type:Boolean},restoreFocusOnClose:{type:Boolean,value:!0},expandSizingTargetForScrollbars:{type:Boolean,value:!1}},listeners:{tap:"_onTap"},keyBindings:{"up down":"open",esc:"close"},observers:["_selectedItemChanged(selectedItem)"],_attachDom(t){const e=A(this);return e.attachShadow({mode:"open",delegatesFocus:!0,shadyUpgradeFragment:t}),e.shadowRoot.appendChild(t),hm.prototype._attachDom.call(this,t)},focus(){this.$.input._focusableElement.focus()},attached:function(){var t=this.contentElement;t&&t.selectedItem&&this._setSelectedItem(t.selectedItem)},get contentElement(){for(var t=L(this.$.content).getDistributedNodes(),e=0,i=t.length;e<i;e++)if(t[e].nodeType===Node.ELEMENT_NODE)return t[e]},open:function(){this.$.menuButton.open()},close:function(){this.$.menuButton.close()},_onIronSelect:function(t){this._setSelectedItem(t.detail.item)},_onIronDeselect:function(t){this._setSelectedItem(null)},_onTap:function(t){e1(t)===this&&this.open()},_selectedItemChanged:function(t){var e="";t?e=t.label||t.getAttribute("label")||t.textContent.trim():e="",this.value=e,this._setSelectedItemLabel(e)},_computeMenuVerticalOffset:function(t,e){return e||(t?-4:8)},_getValidity:function(t){return this.disabled||!this.required||this.required&&!!this.value},_openedChanged:function(){var t=this.opened?"true":"false",e=this.contentElement;e&&e.setAttribute("aria-expanded",t)}});const ei=Symbol("memo"),Pc=t=>{let e=ei,i=ei,n;return function(r,o){if(e===r&&i===o)return n;const a=t(r,o);return n=a,e=r,i=o,a}},fm=t=>{let e=ei,i=ei,n=ei,r;return function(o,a,s){if(e===o&&i===a&&n===s)return r;const l=t(o,a,s);return r=l,e=o,i=a,n=s,l}},Oe=Symbol("column"),mm=t=>{let e=!0;const i=t.map(n=>n.name);return t.forEach(n=>{n.name==null&&(e=!1,console.error("The name attribute needs to be set on all columns! Missing on column",n))}),t.forEach(n=>{i.indexOf(n.name)!==i.lastIndexOf(n.name)&&(e=!1,console.error("The name attribute needs to be unique among all columns! Not unique on column",n))}),e},gm=t=>{const e=t.valuePath??t.name;return{name:t.name,title:t.title,valuePath:e,groupOn:t.groupOn??e,sortOn:t.sortOn??e,minWidth:t.minWidth,width:t.width,flex:t.flex,priority:t.priority,getString:t.getString,getComparableValue:t.getComparableValue,serializeFilter:t.serializeFilter,deserializeFilter:t.deserializeFilter,toXlsxValue:t.toXlsxValue,renderHeader:t.renderHeader,renderCell:t.renderCell,renderEditCell:t.renderEditCell,renderGroup:t.renderGroup,cellTitleFn:t.cellTitleFn,getFilterFn:t.getFilterFn,headerCellClass:t.headerCellClass,cellClass:t.cellClass,editable:t.editable,values:t.values,source:Pc(t.computeSource),noLocalFilter:t.noLocalFilter,mini:t.mini,renderMini:t.renderMini,loading:t.loading,externalValues:t.externalValues,computeSource:t.computeSource,trueLabel:t.trueLabel,falseLabel:t.falseLabel,valueProperty:t.valueProperty,textProperty:t.textProperty,emptyLabel:t.emptyLabel,emptyValue:t.emptyValue,min:t.min,max:t.max,locale:t.locale,autoupdate:t.autoupdate,maximumFractionDigits:t.maximumFractionDigits,minimumFractionDigits:t.minimumFractionDigits,currency:t.currency,rates:t.rates,autodetect:t.autodetect,ownerTree:t.ownerTree,keyProperty:t.keyProperty,...t.getConfig?.(t),[Oe]:t}},bm=t=>t.isOmnitableColumn&&!t.hidden,ym=t=>{const e=t.assignedElements({flatten:!0}).filter(bm);return mm(e)?e:[]},vm=(t,e)=>(Array.isArray(e)?t.filter(n=>e.includes(n.name)):t.filter(n=>!n.disabled)).map(gm),_m=(t,{enabledColumns:e})=>{const[i,n]=U([]);return si(()=>{let r;const o=t.shadowRoot.querySelector("#columnsSlot"),a=()=>{n(vm(ym(o),e))},s=()=>{cancelAnimationFrame(r),r=requestAnimationFrame(a)};return s(),o.addEventListener("slotchange",s),t.addEventListener("cosmoz-column-prop-changed",s),()=>{o.removeEventListener("slotchange",s),t.removeEventListener("cosmoz-column-prop-changed",s),cancelAnimationFrame(r)}},[e]),i},Ic=(t,e)=>Array.isArray(t)?t.map(i=>k(i,e)).filter((i,n,r)=>i!=null&&r.indexOf(i)===n):void 0,vi=({externalValues:t,values:e,valuePath:i},n)=>t||typeof e=="function"?e:Ic(n,i),xm=(t,e,i,n)=>{const{valuePath:r}=e,o=k(i,r);if(n===o)return;Or(i,r,n);const a={item:i,valuePath:r,value:n,oldValue:o,column:e[Oe]};t.dispatchEvent(new CustomEvent("column-item-changed",{bubbles:!0,composed:!0,detail:a}))},wm={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){console&&console[t]&&console[t].apply(console,e)}};class zn{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,i)}init(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=i.prefix||"i18next:",this.logger=e||wm,this.options=i,this.debug=i.debug}log(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return this.forward(i,"log","",!0)}warn(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return this.forward(i,"warn","",!0)}error(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return this.forward(i,"error","")}deprecate(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return this.forward(i,"warn","WARNING DEPRECATED: ",!0)}forward(e,i,n,r){return r&&!this.debug?null:(typeof e[0]=="string"&&(e[0]=`${n}${this.prefix} ${e[0]}`),this.logger[i](e))}create(e){return new zn(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new zn(this.logger,e)}}var ve=new zn;class Jn{constructor(){this.observers={}}on(e,i){return e.split(" ").forEach(n=>{this.observers[n]=this.observers[n]||[],this.observers[n].push(i)}),this}off(e,i){if(this.observers[e]){if(!i){delete this.observers[e];return}this.observers[e]=this.observers[e].filter(n=>n!==i)}}emit(e){for(var i=arguments.length,n=new Array(i>1?i-1:0),r=1;r<i;r++)n[r-1]=arguments[r];this.observers[e]&&[].concat(this.observers[e]).forEach(a=>{a(...n)}),this.observers["*"]&&[].concat(this.observers["*"]).forEach(a=>{a.apply(a,[e,...n])})}}function Tt(){let t,e;const i=new Promise((n,r)=>{t=n,e=r});return i.resolve=t,i.reject=e,i}function ss(t){return t==null?"":""+t}function Cm(t,e,i){t.forEach(n=>{e[n]&&(i[n]=e[n])})}function Ro(t,e,i){function n(a){return a&&a.indexOf("###")>-1?a.replace(/###/g,"."):a}function r(){return!t||typeof t=="string"}const o=typeof e!="string"?[].concat(e):e.split(".");for(;o.length>1;){if(r())return{};const a=n(o.shift());!t[a]&&i&&(t[a]=new i),Object.prototype.hasOwnProperty.call(t,a)?t=t[a]:t={}}return r()?{}:{obj:t,k:n(o.shift())}}function ls(t,e,i){const{obj:n,k:r}=Ro(t,e,Object);n[r]=i}function Sm(t,e,i,n){const{obj:r,k:o}=Ro(t,e,Object);r[o]=r[o]||[],r[o].push(i)}function An(t,e){const{obj:i,k:n}=Ro(t,e);if(i)return i[n]}function zm(t,e,i){const n=An(t,i);return n!==void 0?n:An(e,i)}function Hc(t,e,i){for(const n in e)n!=="__proto__"&&n!=="constructor"&&(n in t?typeof t[n]=="string"||t[n]instanceof String||typeof e[n]=="string"||e[n]instanceof String?i&&(t[n]=e[n]):Hc(t[n],e[n],i):t[n]=e[n]);return t}function nt(t){return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var Am={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function Em(t){return typeof t=="string"?t.replace(/[&<>"'\/]/g,e=>Am[e]):t}const Mm=[" ",",","?","!",";"];function km(t,e,i){e=e||"",i=i||"";const n=Mm.filter(a=>e.indexOf(a)<0&&i.indexOf(a)<0);if(n.length===0)return!0;const r=new RegExp(`(${n.map(a=>a==="?"?"\\?":a).join("|")})`);let o=!r.test(t);if(!o){const a=t.indexOf(i);a>0&&!r.test(t.substring(0,a))&&(o=!0)}return o}function En(t,e){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!t)return;if(t[e])return t[e];const n=e.split(i);let r=t;for(let o=0;o<n.length;++o){if(!r||typeof r[n[o]]=="string"&&o+1<n.length)return;if(r[n[o]]===void 0){let a=2,s=n.slice(o,o+a).join(i),l=r[s];for(;l===void 0&&n.length>o+a;)a++,s=n.slice(o,o+a).join(i),l=r[s];if(l===void 0)return;if(l===null)return null;if(e.endsWith(s)){if(typeof l=="string")return l;if(s&&typeof l[s]=="string")return l[s]}const c=n.slice(o+a).join(i);return c?En(l,c,i):void 0}r=r[n[o]]}return r}function Mn(t){return t&&t.indexOf("_")>0?t.replace("_","-"):t}class cs extends Jn{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const i=this.options.ns.indexOf(e);i>-1&&this.options.ns.splice(i,1)}getResource(e,i,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const o=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator,a=r.ignoreJSONStructure!==void 0?r.ignoreJSONStructure:this.options.ignoreJSONStructure;let s=[e,i];n&&typeof n!="string"&&(s=s.concat(n)),n&&typeof n=="string"&&(s=s.concat(o?n.split(o):n)),e.indexOf(".")>-1&&(s=e.split("."));const l=An(this.data,s);return l||!a||typeof n!="string"?l:En(this.data&&this.data[e]&&this.data[e][i],n,o)}addResource(e,i,n,r){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const a=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator;let s=[e,i];n&&(s=s.concat(a?n.split(a):n)),e.indexOf(".")>-1&&(s=e.split("."),r=i,i=s[1]),this.addNamespaces(i),ls(this.data,s,r),o.silent||this.emit("added",e,i,n,r)}addResources(e,i,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const o in n)(typeof n[o]=="string"||Object.prototype.toString.apply(n[o])==="[object Array]")&&this.addResource(e,i,o,n[o],{silent:!0});r.silent||this.emit("added",e,i,n)}addResourceBundle(e,i,n,r,o){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1},s=[e,i];e.indexOf(".")>-1&&(s=e.split("."),r=n,n=i,i=s[1]),this.addNamespaces(i);let l=An(this.data,s)||{};r?Hc(l,n,o):l={...l,...n},ls(this.data,s,l),a.silent||this.emit("added",e,i,n)}removeResourceBundle(e,i){this.hasResourceBundle(e,i)&&delete this.data[e][i],this.removeNamespaces(i),this.emit("removed",e,i)}hasResourceBundle(e,i){return this.getResource(e,i)!==void 0}getResourceBundle(e,i){return i||(i=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,i)}:this.getResource(e,i)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const i=this.getDataByLanguage(e);return!!(i&&Object.keys(i)||[]).find(r=>i[r]&&Object.keys(i[r]).length>0)}toJSON(){return this.data}}var Rc={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,i,n,r){return t.forEach(o=>{this.processors[o]&&(e=this.processors[o].process(e,i,n,r))}),e}};const us={};class kn extends Jn{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Cm(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=ve.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const n=this.resolve(e,i);return n&&n.res!==void 0}extractFromKey(e,i){let n=i.nsSeparator!==void 0?i.nsSeparator:this.options.nsSeparator;n===void 0&&(n=":");const r=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator;let o=i.ns||this.options.defaultNS||[];const a=n&&e.indexOf(n)>-1,s=!this.options.userDefinedKeySeparator&&!i.keySeparator&&!this.options.userDefinedNsSeparator&&!i.nsSeparator&&!km(e,n,r);if(a&&!s){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:o};const c=e.split(n);(n!==r||n===r&&this.options.ns.indexOf(c[0])>-1)&&(o=c.shift()),e=c.join(r)}return typeof o=="string"&&(o=[o]),{key:e,namespaces:o}}translate(e,i,n){if(typeof i!="object"&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),typeof i=="object"&&(i={...i}),i||(i={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const r=i.returnDetails!==void 0?i.returnDetails:this.options.returnDetails,o=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,{key:a,namespaces:s}=this.extractFromKey(e[e.length-1],i),l=s[s.length-1],c=i.lng||this.language,u=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&c.toLowerCase()==="cimode"){if(u){const v=i.nsSeparator||this.options.nsSeparator;return r?{res:`${l}${v}${a}`,usedKey:a,exactUsedKey:a,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:`${l}${v}${a}`}return r?{res:a,usedKey:a,exactUsedKey:a,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:a}const d=this.resolve(e,i);let p=d&&d.res;const h=d&&d.usedKey||a,f=d&&d.exactUsedKey||a,m=Object.prototype.toString.apply(p),b=["[object Number]","[object Function]","[object RegExp]"],y=i.joinArrays!==void 0?i.joinArrays:this.options.joinArrays,g=!this.i18nFormat||this.i18nFormat.handleAsObject;if(g&&p&&(typeof p!="string"&&typeof p!="boolean"&&typeof p!="number")&&b.indexOf(m)<0&&!(typeof y=="string"&&m==="[object Array]")){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const v=this.options.returnedObjectHandler?this.options.returnedObjectHandler(h,p,{...i,ns:s}):`key '${a} (${this.language})' returned an object instead of string.`;return r?(d.res=v,d.usedParams=this.getUsedParamsDetails(i),d):v}if(o){const v=m==="[object Array]",w=v?[]:{},C=v?f:h;for(const S in p)if(Object.prototype.hasOwnProperty.call(p,S)){const E=`${C}${o}${S}`;w[S]=this.translate(E,{...i,joinArrays:!1,ns:s}),w[S]===E&&(w[S]=p[S])}p=w}}else if(g&&typeof y=="string"&&m==="[object Array]")p=p.join(y),p&&(p=this.extendTranslation(p,e,i,n));else{let v=!1,w=!1;const C=i.count!==void 0&&typeof i.count!="string",S=kn.hasDefaultValue(i),E=C?this.pluralResolver.getSuffix(c,i.count,i):"",F=i.ordinal&&C?this.pluralResolver.getSuffix(c,i.count,{ordinal:!1}):"",T=i[`defaultValue${E}`]||i[`defaultValue${F}`]||i.defaultValue;!this.isValidLookup(p)&&S&&(v=!0,p=T),this.isValidLookup(p)||(w=!0,p=a);const Y=(i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&w?void 0:p,j=S&&T!==p&&this.options.updateMissing;if(w||v||j){if(this.logger.log(j?"updateKey":"missingKey",c,l,a,j?T:p),o){const P=this.resolve(a,{...i,keySeparator:!1});P&&P.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let D=[];const N=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo==="fallback"&&N&&N[0])for(let P=0;P<N.length;P++)D.push(N[P]);else this.options.saveMissingTo==="all"?D=this.languageUtils.toResolveHierarchy(i.lng||this.language):D.push(i.lng||this.language);const W=(P,X,ae)=>{const Qe=S&&ae!==p?ae:Y;this.options.missingKeyHandler?this.options.missingKeyHandler(P,l,X,Qe,j,i):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(P,l,X,Qe,j,i),this.emit("missingKey",P,l,X,p)};this.options.saveMissing&&(this.options.saveMissingPlurals&&C?D.forEach(P=>{this.pluralResolver.getSuffixes(P,i).forEach(X=>{W([P],a+X,i[`defaultValue${X}`]||T)})}):W(D,a,T))}p=this.extendTranslation(p,e,i,d,n),w&&p===a&&this.options.appendNamespaceToMissingKey&&(p=`${l}:${a}`),(w||v)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?p=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${a}`:a,v?p:void 0):p=this.options.parseMissingKeyHandler(p))}return r?(d.res=p,d.usedParams=this.getUsedParamsDetails(i),d):p}extendTranslation(e,i,n,r,o){var a=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});const c=typeof e=="string"&&(n&&n.interpolation&&n.interpolation.skipOnVariables!==void 0?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let u;if(c){const p=e.match(this.interpolator.nestingRegexp);u=p&&p.length}let d=n.replace&&typeof n.replace!="string"?n.replace:n;if(this.options.interpolation.defaultVariables&&(d={...this.options.interpolation.defaultVariables,...d}),e=this.interpolator.interpolate(e,d,n.lng||this.language,n),c){const p=e.match(this.interpolator.nestingRegexp),h=p&&p.length;u<h&&(n.nest=!1)}!n.lng&&this.options.compatibilityAPI!=="v1"&&r&&r.res&&(n.lng=r.usedLng),n.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var p=arguments.length,h=new Array(p),f=0;f<p;f++)h[f]=arguments[f];return o&&o[0]===h[0]&&!n.context?(a.logger.warn(`It seems you are nesting recursively key: ${h[0]} in key: ${i[0]}`),null):a.translate(...h,i)},n)),n.interpolation&&this.interpolator.reset()}const s=n.postProcess||this.options.postProcess,l=typeof s=="string"?[s]:s;return e!=null&&l&&l.length&&n.applyPostProcessor!==!1&&(e=Rc.handle(l,e,i,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),e}resolve(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n,r,o,a,s;return typeof e=="string"&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(n))return;const c=this.extractFromKey(l,i),u=c.key;r=u;let d=c.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const p=i.count!==void 0&&typeof i.count!="string",h=p&&!i.ordinal&&i.count===0&&this.pluralResolver.shouldUseIntlApi(),f=i.context!==void 0&&(typeof i.context=="string"||typeof i.context=="number")&&i.context!=="",m=i.lngs?i.lngs:this.languageUtils.toResolveHierarchy(i.lng||this.language,i.fallbackLng);d.forEach(b=>{this.isValidLookup(n)||(s=b,!us[`${m[0]}-${b}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(s)&&(us[`${m[0]}-${b}`]=!0,this.logger.warn(`key "${r}" for languages "${m.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),m.forEach(y=>{if(this.isValidLookup(n))return;a=y;const g=[u];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(g,u,y,b,i);else{let v;p&&(v=this.pluralResolver.getSuffix(y,i.count,i));const w=`${this.options.pluralSeparator}zero`,C=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(p&&(g.push(u+v),i.ordinal&&v.indexOf(C)===0&&g.push(u+v.replace(C,this.options.pluralSeparator)),h&&g.push(u+w)),f){const S=`${u}${this.options.contextSeparator}${i.context}`;g.push(S),p&&(g.push(S+v),i.ordinal&&v.indexOf(C)===0&&g.push(S+v.replace(C,this.options.pluralSeparator)),h&&g.push(S+w))}}let x;for(;x=g.pop();)this.isValidLookup(n)||(o=x,n=this.getResource(y,b,x,i))}))})}),{res:n,usedKey:r,exactUsedKey:o,usedLng:a,usedNS:s}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,i,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,i,n,r):this.resourceStore.getResource(e,i,n,r)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const i=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],n=e.replace&&typeof e.replace!="string";let r=n?e.replace:e;if(n&&typeof e.count<"u"&&(r.count=e.count),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!n){r={...r};for(const o of i)delete r[o]}return r}static hasDefaultValue(e){const i="defaultValue";for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&i===n.substring(0,i.length)&&e[n]!==void 0)return!0;return!1}}function yr(t){return t.charAt(0).toUpperCase()+t.slice(1)}class ds{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=ve.create("languageUtils")}getScriptPartFromCode(e){if(e=Mn(e),!e||e.indexOf("-")<0)return null;const i=e.split("-");return i.length===2||(i.pop(),i[i.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(i.join("-"))}getLanguagePartFromCode(e){if(e=Mn(e),!e||e.indexOf("-")<0)return e;const i=e.split("-");return this.formatLanguageCode(i[0])}formatLanguageCode(e){if(typeof e=="string"&&e.indexOf("-")>-1){const i=["hans","hant","latn","cyrl","cans","mong","arab"];let n=e.split("-");return this.options.lowerCaseLng?n=n.map(r=>r.toLowerCase()):n.length===2?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),i.indexOf(n[1].toLowerCase())>-1&&(n[1]=yr(n[1].toLowerCase()))):n.length===3&&(n[0]=n[0].toLowerCase(),n[1].length===2&&(n[1]=n[1].toUpperCase()),n[0]!=="sgn"&&n[2].length===2&&(n[2]=n[2].toUpperCase()),i.indexOf(n[1].toLowerCase())>-1&&(n[1]=yr(n[1].toLowerCase())),i.indexOf(n[2].toLowerCase())>-1&&(n[2]=yr(n[2].toLowerCase()))),n.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let i;return e.forEach(n=>{if(i)return;const r=this.formatLanguageCode(n);(!this.options.supportedLngs||this.isSupportedCode(r))&&(i=r)}),!i&&this.options.supportedLngs&&e.forEach(n=>{if(i)return;const r=this.getLanguagePartFromCode(n);if(this.isSupportedCode(r))return i=r;i=this.options.supportedLngs.find(o=>{if(o===r)return o;if(!(o.indexOf("-")<0&&r.indexOf("-")<0)&&o.indexOf(r)===0)return o})}),i||(i=this.getFallbackCodes(this.options.fallbackLng)[0]),i}getFallbackCodes(e,i){if(!e)return[];if(typeof e=="function"&&(e=e(i)),typeof e=="string"&&(e=[e]),Object.prototype.toString.apply(e)==="[object Array]")return e;if(!i)return e.default||[];let n=e[i];return n||(n=e[this.getScriptPartFromCode(i)]),n||(n=e[this.formatLanguageCode(i)]),n||(n=e[this.getLanguagePartFromCode(i)]),n||(n=e.default),n||[]}toResolveHierarchy(e,i){const n=this.getFallbackCodes(i||this.options.fallbackLng||[],e),r=[],o=a=>{a&&(this.isSupportedCode(a)?r.push(a):this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`))};return typeof e=="string"&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&o(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&o(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&o(this.getLanguagePartFromCode(e))):typeof e=="string"&&o(this.formatLanguageCode(e)),n.forEach(a=>{r.indexOf(a)<0&&o(this.formatLanguageCode(a))}),r}}let Lm=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],$m={1:function(t){return+(t>1)},2:function(t){return+(t!=1)},3:function(t){return 0},4:function(t){return t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2},5:function(t){return t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5},6:function(t){return t==1?0:t>=2&&t<=4?1:2},7:function(t){return t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2},8:function(t){return t==1?0:t==2?1:t!=8&&t!=11?2:3},9:function(t){return+(t>=2)},10:function(t){return t==1?0:t==2?1:t<7?2:t<11?3:4},11:function(t){return t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3},12:function(t){return+(t%10!=1||t%100==11)},13:function(t){return+(t!==0)},14:function(t){return t==1?0:t==2?1:t==3?2:3},15:function(t){return t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2},16:function(t){return t%10==1&&t%100!=11?0:t!==0?1:2},17:function(t){return t==1||t%10==1&&t%100!=11?0:1},18:function(t){return t==0?0:t==1?1:2},19:function(t){return t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3},20:function(t){return t==1?0:t==0||t%100>0&&t%100<20?1:2},21:function(t){return t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0},22:function(t){return t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3}};const Om=["v1","v2","v3"],Tm=["v4"],ps={zero:0,one:1,two:2,few:3,many:4,other:5};function Pm(){const t={};return Lm.forEach(e=>{e.lngs.forEach(i=>{t[i]={numbers:e.nr,plurals:$m[e.fc]}})}),t}class Im{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=i,this.logger=ve.create("pluralResolver"),(!this.options.compatibilityJSON||Tm.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=Pm()}addRule(e,i){this.rules[e]=i}getRule(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(Mn(e),{type:i.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=this.getRule(e,i);return this.shouldUseIntlApi()?n&&n.resolvedOptions().pluralCategories.length>1:n&&n.numbers.length>1}getPluralFormsOfKey(e,i){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,n).map(r=>`${i}${r}`)}getSuffixes(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=this.getRule(e,i);return n?this.shouldUseIntlApi()?n.resolvedOptions().pluralCategories.sort((r,o)=>ps[r]-ps[o]).map(r=>`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${r}`):n.numbers.map(r=>this.getSuffix(e,r,i)):[]}getSuffix(e,i){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=this.getRule(e,n);return r?this.shouldUseIntlApi()?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${r.select(i)}`:this.getSuffixRetroCompatible(r,i):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,i){const n=e.noAbs?e.plurals(i):e.plurals(Math.abs(i));let r=e.numbers[n];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(r===2?r="plural":r===1&&(r=""));const o=()=>this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString();return this.options.compatibilityJSON==="v1"?r===1?"":typeof r=="number"?`_plural_${r.toString()}`:o():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?o():this.options.prepend&&n.toString()?this.options.prepend+n.toString():n.toString()}shouldUseIntlApi(){return!Om.includes(this.options.compatibilityJSON)}}function hs(t,e,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,o=zm(t,e,i);return!o&&r&&typeof i=="string"&&(o=En(t,i,n),o===void 0&&(o=En(e,i,n))),o}class Hm{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=ve.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(i=>i),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const i=e.interpolation;this.escape=i.escape!==void 0?i.escape:Em,this.escapeValue=i.escapeValue!==void 0?i.escapeValue:!0,this.useRawValueToEscape=i.useRawValueToEscape!==void 0?i.useRawValueToEscape:!1,this.prefix=i.prefix?nt(i.prefix):i.prefixEscaped||"{{",this.suffix=i.suffix?nt(i.suffix):i.suffixEscaped||"}}",this.formatSeparator=i.formatSeparator?i.formatSeparator:i.formatSeparator||",",this.unescapePrefix=i.unescapeSuffix?"":i.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":i.unescapeSuffix||"",this.nestingPrefix=i.nestingPrefix?nt(i.nestingPrefix):i.nestingPrefixEscaped||nt("$t("),this.nestingSuffix=i.nestingSuffix?nt(i.nestingSuffix):i.nestingSuffixEscaped||nt(")"),this.nestingOptionsSeparator=i.nestingOptionsSeparator?i.nestingOptionsSeparator:i.nestingOptionsSeparator||",",this.maxReplaces=i.maxReplaces?i.maxReplaces:1e3,this.alwaysFormat=i.alwaysFormat!==void 0?i.alwaysFormat:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=`${this.prefix}(.+?)${this.suffix}`;this.regexp=new RegExp(e,"g");const i=`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;this.regexpUnescape=new RegExp(i,"g");const n=`${this.nestingPrefix}(.+?)${this.nestingSuffix}`;this.nestingRegexp=new RegExp(n,"g")}interpolate(e,i,n,r){let o,a,s;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function c(f){return f.replace(/\$/g,"$$$$")}const u=f=>{if(f.indexOf(this.formatSeparator)<0){const g=hs(i,l,f,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(g,void 0,n,{...r,...i,interpolationkey:f}):g}const m=f.split(this.formatSeparator),b=m.shift().trim(),y=m.join(this.formatSeparator).trim();return this.format(hs(i,l,b,this.options.keySeparator,this.options.ignoreJSONStructure),y,n,{...r,...i,interpolationkey:b})};this.resetRegExp();const d=r&&r.missingInterpolationHandler||this.options.missingInterpolationHandler,p=r&&r.interpolation&&r.interpolation.skipOnVariables!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:f=>c(f)},{regex:this.regexp,safeValue:f=>this.escapeValue?c(this.escape(f)):c(f)}].forEach(f=>{for(s=0;o=f.regex.exec(e);){const m=o[1].trim();if(a=u(m),a===void 0)if(typeof d=="function"){const y=d(e,o,r);a=typeof y=="string"?y:""}else if(r&&Object.prototype.hasOwnProperty.call(r,m))a="";else if(p){a=o[0];continue}else this.logger.warn(`missed to pass in variable ${m} for interpolating ${e}`),a="";else typeof a!="string"&&!this.useRawValueToEscape&&(a=ss(a));const b=f.safeValue(a);if(e=e.replace(o[0],b),p?(f.regex.lastIndex+=a.length,f.regex.lastIndex-=o[0].length):f.regex.lastIndex=0,s++,s>=this.maxReplaces)break}}),e}nest(e,i){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r,o,a;function s(l,c){const u=this.nestingOptionsSeparator;if(l.indexOf(u)<0)return l;const d=l.split(new RegExp(`${u}[ ]*{`));let p=`{${d[1]}`;l=d[0],p=this.interpolate(p,a);const h=p.match(/'/g),f=p.match(/"/g);(h&&h.length%2===0&&!f||f.length%2!==0)&&(p=p.replace(/'/g,'"'));try{a=JSON.parse(p),c&&(a={...c,...a})}catch(m){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,m),`${l}${u}${p}`}return delete a.defaultValue,l}for(;r=this.nestingRegexp.exec(e);){let l=[];a={...n},a=a.replace&&typeof a.replace!="string"?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let c=!1;if(r[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(r[1])){const u=r[1].split(this.formatSeparator).map(d=>d.trim());r[1]=u.shift(),l=u,c=!0}if(o=i(s.call(this,r[1].trim(),a),a),o&&r[0]===e&&typeof o!="string")return o;typeof o!="string"&&(o=ss(o)),o||(this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`),o=""),c&&(o=l.reduce((u,d)=>this.format(u,d,n.lng,{...n,interpolationkey:r[1].trim()}),o.trim())),e=e.replace(r[0],o),this.regexp.lastIndex=0}return e}}function Rm(t){let e=t.toLowerCase().trim();const i={};if(t.indexOf("(")>-1){const n=t.split("(");e=n[0].toLowerCase().trim();const r=n[1].substring(0,n[1].length-1);e==="currency"&&r.indexOf(":")<0?i.currency||(i.currency=r.trim()):e==="relativetime"&&r.indexOf(":")<0?i.range||(i.range=r.trim()):r.split(";").forEach(a=>{if(!a)return;const[s,...l]=a.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,"");i[s.trim()]||(i[s.trim()]=c),c==="false"&&(i[s.trim()]=!1),c==="true"&&(i[s.trim()]=!0),isNaN(c)||(i[s.trim()]=parseInt(c,10))})}return{formatName:e,formatOptions:i}}function rt(t){const e={};return function(n,r,o){const a=r+JSON.stringify(o);let s=e[a];return s||(s=t(Mn(r),o),e[a]=s),s(n)}}class Fm{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=ve.create("formatter"),this.options=e,this.formats={number:rt((i,n)=>{const r=new Intl.NumberFormat(i,{...n});return o=>r.format(o)}),currency:rt((i,n)=>{const r=new Intl.NumberFormat(i,{...n,style:"currency"});return o=>r.format(o)}),datetime:rt((i,n)=>{const r=new Intl.DateTimeFormat(i,{...n});return o=>r.format(o)}),relativetime:rt((i,n)=>{const r=new Intl.RelativeTimeFormat(i,{...n});return o=>r.format(o,n.range||"day")}),list:rt((i,n)=>{const r=new Intl.ListFormat(i,{...n});return o=>r.format(o)})},this.init(e)}init(e){const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}}).interpolation;this.formatSeparator=n.formatSeparator?n.formatSeparator:n.formatSeparator||","}add(e,i){this.formats[e.toLowerCase().trim()]=i}addCached(e,i){this.formats[e.toLowerCase().trim()]=rt(i)}format(e,i,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return i.split(this.formatSeparator).reduce((s,l)=>{const{formatName:c,formatOptions:u}=Rm(l);if(this.formats[c]){let d=s;try{const p=r&&r.formatParams&&r.formatParams[r.interpolationkey]||{},h=p.locale||p.lng||r.locale||r.lng||n;d=this.formats[c](s,h,{...u,...r,...p})}catch(p){this.logger.warn(p)}return d}else this.logger.warn(`there was no format function for ${c}`);return s},e)}}function Nm(t,e){t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)}class Vm extends Jn{constructor(e,i,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=i,this.services=n,this.languageUtils=n.languageUtils,this.options=r,this.logger=ve.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(n,r.backend,r)}queueLoad(e,i,n,r){const o={},a={},s={},l={};return e.forEach(c=>{let u=!0;i.forEach(d=>{const p=`${c}|${d}`;!n.reload&&this.store.hasResourceBundle(c,d)?this.state[p]=2:this.state[p]<0||(this.state[p]===1?a[p]===void 0&&(a[p]=!0):(this.state[p]=1,u=!1,a[p]===void 0&&(a[p]=!0),o[p]===void 0&&(o[p]=!0),l[d]===void 0&&(l[d]=!0)))}),u||(s[c]=!0)}),(Object.keys(o).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(o),pending:Object.keys(a),toLoadLanguages:Object.keys(s),toLoadNamespaces:Object.keys(l)}}loaded(e,i,n){const r=e.split("|"),o=r[0],a=r[1];i&&this.emit("failedLoading",o,a,i),n&&this.store.addResourceBundle(o,a,n),this.state[e]=i?-1:2;const s={};this.queue.forEach(l=>{Sm(l.loaded,[o],a),Nm(l,e),i&&l.errors.push(i),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{s[c]||(s[c]={});const u=l.loaded[c];u.length&&u.forEach(d=>{s[c][d]===void 0&&(s[c][d]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",s),this.queue=this.queue.filter(l=>!l.done)}read(e,i,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,a=arguments.length>5?arguments[5]:void 0;if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:i,fcName:n,tried:r,wait:o,callback:a});return}this.readingCalls++;const s=(c,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(c&&u&&r<this.maxRetries){setTimeout(()=>{this.read.call(this,e,i,n,r+1,o*2,a)},o);return}a(c,u)},l=this.backend[n].bind(this.backend);if(l.length===2){try{const c=l(e,i);c&&typeof c.then=="function"?c.then(u=>s(null,u)).catch(s):s(null,c)}catch(c){s(c)}return}return l(e,i,s)}prepareLoading(e,i){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),r&&r();typeof e=="string"&&(e=this.languageUtils.toResolveHierarchy(e)),typeof i=="string"&&(i=[i]);const o=this.queueLoad(e,i,n,r);if(!o.toLoad.length)return o.pending.length||r(),null;o.toLoad.forEach(a=>{this.loadOne(a)})}load(e,i,n){this.prepareLoading(e,i,{},n)}reload(e,i,n){this.prepareLoading(e,i,{reload:!0},n)}loadOne(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const n=e.split("|"),r=n[0],o=n[1];this.read(r,o,"read",void 0,void 0,(a,s)=>{a&&this.logger.warn(`${i}loading namespace ${o} for language ${r} failed`,a),!a&&s&&this.logger.log(`${i}loaded namespace ${o} for language ${r}`,s),this.loaded(e,a,s)})}saveMissing(e,i,n,r,o){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},s=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(i)){this.logger.warn(`did not save key "${n}" as the namespace "${i}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(n==null||n==="")){if(this.backend&&this.backend.create){const l={...a,isUpdate:o},c=this.backend.create.bind(this.backend);if(c.length<6)try{let u;c.length===5?u=c(e,i,n,r,l):u=c(e,i,n,r),u&&typeof u.then=="function"?u.then(d=>s(null,d)).catch(s):s(null,u)}catch(u){s(u)}else c(e,i,n,r,s,l)}!e||!e[0]||this.store.addResource(e[0],i,n,r)}}}function fs(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(e){let i={};if(typeof e[1]=="object"&&(i=e[1]),typeof e[1]=="string"&&(i.defaultValue=e[1]),typeof e[2]=="string"&&(i.tDescription=e[2]),typeof e[2]=="object"||typeof e[3]=="object"){const n=e[3]||e[2];Object.keys(n).forEach(r=>{i[r]=n[r]})}return i},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function ms(t){return typeof t.ns=="string"&&(t.ns=[t.ns]),typeof t.fallbackLng=="string"&&(t.fallbackLng=[t.fallbackLng]),typeof t.fallbackNS=="string"&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&t.supportedLngs.indexOf("cimode")<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t}function Oi(){}function Dm(t){Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(i=>{typeof t[i]=="function"&&(t[i]=t[i].bind(t))})}class di extends Jn{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(super(),this.options=ms(e),this.services={},this.logger=ve,this.modules={external:[]},Dm(this),i&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,i),this;setTimeout(()=>{this.init(e,i)},0)}}init(){var e=this;let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;typeof i=="function"&&(n=i,i={}),!i.defaultNS&&i.defaultNS!==!1&&i.ns&&(typeof i.ns=="string"?i.defaultNS=i.ns:i.ns.indexOf("translation")<0&&(i.defaultNS=i.ns[0]));const r=fs();this.options={...r,...this.options,...ms(i)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...r.interpolation,...this.options.interpolation}),i.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=i.keySeparator),i.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=i.nsSeparator);function o(u){return u?typeof u=="function"?new u:u:null}if(!this.options.isClone){this.modules.logger?ve.init(o(this.modules.logger),this.options):ve.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:typeof Intl<"u"&&(u=Fm);const d=new ds(this.options);this.store=new cs(this.options.resources,this.options);const p=this.services;p.logger=ve,p.resourceStore=this.store,p.languageUtils=d,p.pluralResolver=new Im(d,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===r.interpolation.format)&&(p.formatter=o(u),p.formatter.init(p,this.options),this.options.interpolation.format=p.formatter.format.bind(p.formatter)),p.interpolator=new Hm(this.options),p.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},p.backendConnector=new Vm(o(this.modules.backend),p.resourceStore,p,this.options),p.backendConnector.on("*",function(h){for(var f=arguments.length,m=new Array(f>1?f-1:0),b=1;b<f;b++)m[b-1]=arguments[b];e.emit(h,...m)}),this.modules.languageDetector&&(p.languageDetector=o(this.modules.languageDetector),p.languageDetector.init&&p.languageDetector.init(p,this.options.detection,this.options)),this.modules.i18nFormat&&(p.i18nFormat=o(this.modules.i18nFormat),p.i18nFormat.init&&p.i18nFormat.init(this)),this.translator=new kn(this.services,this.options),this.translator.on("*",function(h){for(var f=arguments.length,m=new Array(f>1?f-1:0),b=1;b<f;b++)m[b-1]=arguments[b];e.emit(h,...m)}),this.modules.external.forEach(h=>{h.init&&h.init(this)})}if(this.format=this.options.interpolation.format,n||(n=Oi),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=function(){return e.store[u](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=function(){return e.store[u](...arguments),e}});const l=Tt(),c=()=>{const u=(d,p)=>{this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(p),n(d,p)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initImmediate?c():setTimeout(c,0),l}loadResources(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Oi;const r=typeof e=="string"?e:this.language;if(typeof e=="function"&&(n=e),!this.options.resources||this.options.partialBundledLanguages){if(r&&r.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return n();const o=[],a=s=>{if(!s||s==="cimode")return;this.services.languageUtils.toResolveHierarchy(s).forEach(c=>{c!=="cimode"&&o.indexOf(c)<0&&o.push(c)})};r?a(r):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>a(l)),this.options.preload&&this.options.preload.forEach(s=>a(s)),this.services.backendConnector.load(o,this.options.ns,s=>{!s&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),n(s)})}else n(null)}reloadResources(e,i,n){const r=Tt();return e||(e=this.languages),i||(i=this.options.ns),n||(n=Oi),this.services.backendConnector.reload(e,i,o=>{r.resolve(),n(o)}),r}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&Rc.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let i=0;i<this.languages.length;i++){const n=this.languages[i];if(!(["cimode","dev"].indexOf(n)>-1)&&this.store.hasLanguageSomeTranslations(n)){this.resolvedLanguage=n;break}}}changeLanguage(e,i){var n=this;this.isLanguageChangingTo=e;const r=Tt();this.emit("languageChanging",e);const o=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},a=(l,c)=>{c?(o(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,r.resolve(function(){return n.t(...arguments)}),i&&i(l,function(){return n.t(...arguments)})},s=l=>{!e&&!l&&this.services.languageDetector&&(l=[]);const c=typeof l=="string"?l:this.services.languageUtils.getBestMatchFromCodes(l);c&&(this.language||o(c),this.translator.language||this.translator.changeLanguage(c),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(c)),this.loadResources(c,u=>{a(u,c)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?s(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(s):this.services.languageDetector.detect(s):s(e),r}getFixedT(e,i,n){var r=this;const o=function(a,s){let l;if(typeof s!="object"){for(var c=arguments.length,u=new Array(c>2?c-2:0),d=2;d<c;d++)u[d-2]=arguments[d];l=r.options.overloadTranslationOptionHandler([a,s].concat(u))}else l={...s};l.lng=l.lng||o.lng,l.lngs=l.lngs||o.lngs,l.ns=l.ns||o.ns,l.keyPrefix=l.keyPrefix||n||o.keyPrefix;const p=r.options.keySeparator||".";let h;return l.keyPrefix&&Array.isArray(a)?h=a.map(f=>`${l.keyPrefix}${p}${f}`):h=l.keyPrefix?`${l.keyPrefix}${p}${a}`:a,r.t(h,l)};return typeof e=="string"?o.lng=e:o.lngs=e,o.ns=i,o.keyPrefix=n,o}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const n=i.lng||this.resolvedLanguage||this.languages[0],r=this.options?this.options.fallbackLng:!1,o=this.languages[this.languages.length-1];if(n.toLowerCase()==="cimode")return!0;const a=(s,l)=>{const c=this.services.backendConnector.state[`${s}|${l}`];return c===-1||c===2};if(i.precheck){const s=i.precheck(this,a);if(s!==void 0)return s}return!!(this.hasResourceBundle(n,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(n,e)&&(!r||a(o,e)))}loadNamespaces(e,i){const n=Tt();return this.options.ns?(typeof e=="string"&&(e=[e]),e.forEach(r=>{this.options.ns.indexOf(r)<0&&this.options.ns.push(r)}),this.loadResources(r=>{n.resolve(),i&&i(r)}),n):(i&&i(),Promise.resolve())}loadLanguages(e,i){const n=Tt();typeof e=="string"&&(e=[e]);const r=this.options.preload||[],o=e.filter(a=>r.indexOf(a)<0);return o.length?(this.options.preload=r.concat(o),this.loadResources(a=>{n.resolve(),i&&i(a)}),n):(i&&i(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const i=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],n=this.services&&this.services.languageUtils||new ds(fs());return i.indexOf(n.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;return new di(e,i)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Oi;const n=e.forkResourceStore;n&&delete e.forkResourceStore;const r={...this.options,...e,isClone:!0},o=new di(r);return(e.debug!==void 0||e.prefix!==void 0)&&(o.logger=o.logger.clone(e)),["store","services","language"].forEach(s=>{o[s]=this[s]}),o.services={...this.services},o.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},n&&(o.store=new cs(this.store.data,r),o.services.resourceStore=o.store),o.translator=new kn(o.services,r),o.translator.on("*",function(s){for(var l=arguments.length,c=new Array(l>1?l-1:0),u=1;u<l;u++)c[u-1]=arguments[u];o.emit(s,...c)}),o.init(r,i),o.translator.options=r,o.translator.backendConnector.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const R=di.createInstance();R.createInstance=di.createInstance;R.createInstance;R.dir;R.init;R.loadResources;R.reloadResources;R.use;R.changeLanguage;R.getFixedT;R.t;R.exists;R.setDefaultNamespace;R.hasLoadedNamespace;R.loadNamespaces;R.loadLanguages;const tn=[],Xn=()=>{R.isInitialized||R.init({lng:"en",resStore:{en:{}},fallbackLng:!1})},Zn=t=>t.reduce((e,i,n)=>(e.count===void 0&&typeof i=="number"&&(e.count=i),typeof i=="object"?{...e,...i}:(e[n]=i,e)),{}),I=function(t){Xn();const e=Zn([...arguments].slice(1));return delete e.count,R.t(t,e)},Fc=function(t,e){Xn();const i=Zn([...arguments].slice(2)),n=i.count;let r;delete i.count;const o=R.services.pluralResolver.getSuffix(R.language,n);return o?(i.defaultValue=e,r=t+o):(r=t,i.defaultValue=t),R.t(r,i)},qm=function(t,e){Xn();const i=Zn([...arguments].slice(2));return i.context=t,delete i.count,R.t(e,i)},Bm=function(t,e,i){Xn();const n=Zn([...arguments].slice(3)),r=n.count,o=t?"_"+t:"";let a=e;delete n.count;const s=R.services.pluralResolver.getSuffix(R.language,r);return s?(n.defaultValue=i,a=e+o+s):(a=e,n.context=t),R.t(a,n)},jm=(t,e,i)=>{R.init({resources:{}}),R.addResourceBundle(t,e,i)},Um=re(t=>class extends t{static get properties(){return{t:{type:Object,value(){return{}}}}}_filterT(e){return e.filter(i=>i!==this.t)}_(){return I.apply(null,this._filterT([...arguments]))}connectedCallback(){super.connectedCallback(),tn.push(this)}disconnectedCallback(){super.disconnectedCallback();const e=tn.indexOf(this);e>=0&&tn.splice(e,1)}gettext(){return I.apply(null,this._filterT([...arguments]))}ngettext(){return Fc.apply(null,this._filterT([...arguments]))}pgettext(){return qm.apply(null,this._filterT([...arguments]))}npgettext(){return Bm.apply(null,this._filterT([...arguments]))}});class Km extends K{static get properties(){return{compatibilityJSON:{type:String,value:"v3"},domain:{type:String,value:"messages"},interpolationPrefix:{type:String,value:"__"},interpolationSuffix:{type:String,value:"__"},language:{type:String,value:"en"},namespace:{type:String,value:"translation"},translations:{type:Object,observer(e){e!=null&&(jm(this.language,this.namespace,e),tn.forEach(i=>i.set("t",{})))}},keySeparator:{type:String,value:"."},nsSeparator:{type:String,value:":"}}}ready(){super.ready(),R.init({compatibilityJSON:this.compatibilityJSON,interpolation:{escapeValue:!1,prefix:this.interpolationPrefix,suffix:this.interpolationSuffix},keySeparator:this.keySeparator,lng:this.language,nsSeparator:this.nsSeparator,resStore:{}})}}customElements.define("cosmoz-i18next",Km);const Nc=t=>typeof t.close=="function"?t:Nc(t.parentElement),Fo=t=>class extends t{static get properties(){return{filter:{type:Object,notify:!0},values:{type:Array,value(){return[]}},headerFocused:{type:Boolean,notify:!0},min:{type:Number,value:null},max:{type:Number,value:null},limits:{type:Function},autoupdate:{type:String,value:!0},locale:{type:String,value:null},_filterInput:{type:Object,value(){return{min:null,max:null}}},_range:{type:Object,computed:"_computeRange(values.*)"},_limit:{type:Object,computed:"_computeLimit(_range, _filterInput.*, min, max)",value(){return{}}},_tooltip:{type:String,computed:"_computeTooltip(title, _filterText)"},_fromClasses:{type:String,computed:"_computeInputClasses(_filterInput.min)"},_toClasses:{type:String,computed:"_computeInputClasses(_filterInput.max)"}}}static get observers(){return["_filterInputChanged(_filterInput.*, autoupdate)","_filterChanged(filter.*)","_updateLimits(limits, headerFocused)"]}disconnectedCallback(){this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),super.disconnectedCallback()}_computeInputClasses(e){return e!=null&&e!==""?"has-value":""}toNumber(e,i,n){if(e==null||e==="")return;const r=typeof e=="number"?e:Number(e);if(Number.isNaN(r))return;if(n==null||i==null)return r;const o=this.toNumber(i);return o==null?r:n(r,o)}toValue(){return this.toNumber.apply(this,arguments)}getComparableValue(e,i){if(e==null)return;let n=e;return i!=null&&(n=this.get(i,e)),this.toValue(n)}renderValue(){}getInputString(e,i=this.valuePath){const n=this.toValue(this.get(i,e));return this._toInputString(n)}_computeRange(e){const i=e.base,n=Array.isArray(i)&&i.length&&i.map(r=>this.toValue(r)).filter(r=>r!=null);return!n||n.length<1?{min:null,max:null}:n.reduce((r,o)=>({min:this.toValue(o,r.min,Math.min),max:this.toValue(o,r.max,Math.max)}),{})}_computeLimit(e,i,n,r){if(!e)return;const o=i.base,a=this.toValue(n),s=this.toValue(r),l=a??this.toValue(e.min),c=s??this.toValue(e.max);return{fromMin:l,fromMax:this.toValue(c,this._fromInputString(o.max,"max"),Math.min),toMin:this.toValue(l,this._fromInputString(o.min,"min"),Math.max),toMax:c}}_computeFilterText(e){if(e.base==null)return;const i=e.base,n=this.toValue(i.min),r=this.toValue(i.max),o=[];return n!=null&&o.push(this.renderValue(n)),o.push(" - "),r!=null&&o.push(this.renderValue(r)),o.length>1?o.join(""):void 0}_computeTooltip(e,i){return i==null?e:`${e}: ${i}`}_fromInputString(e){return this.toValue(e)}_toInputString(e){const i=this.toValue(e);return i??null}_getDefaultFilter(){return{min:null,max:null}}_filterInputChanged(e,i){const n=e.path.split(".")[1];this.__inputChangePath=n||null,i&&(this._limitInputDebouncer=Re.debounce(this._limitInputDebouncer,st.after(600),()=>{this._limitInput(),this._updateFilter()}),_o(this._limitInputDebouncer))}_clearFrom(){this.set("_filterInput.min",null),this._updateFilter()}_clearTo(){this.set("_filterInput.max",null),this._updateFilter()}_onBlur(){this._limitInput(),this._updateFilter()}_onKeyDown(e){const i=e.currentTarget,n=Array.from(i.parentElement.querySelectorAll("cosmoz-input")),r=n[n.findIndex(s=>s===i)+1],o=!r,a=n[0]===i;switch(e.keyCode){case 13:if(e.preventDefault(),!o)r.focus();else{const s=this._limitInput();this._updateFilter(),s||this._closeParent(i)}break;case 9:(o&&!e.shiftKey||a&&e.shiftKey)&&this._closeParent(i)}}_closeParent(e){Nc(e).close()}_onDropdownOpenedChanged({currentTarget:e,detail:{value:i}}){i&&setTimeout(()=>e.querySelector("cosmoz-input").focus(),100)}_limitInput(){const e=this._filterInput,i=this.__inputChangePath,n=i?this._fromInputString(this.get(i,e),i):null;if(this.__inputChangePath=null,n==null)return!1;const r=this._limit,o=i==="min"?"from":"to",a=this.get(o+"Min",r),s=this.get(o+"Max",r),l=this.toValue(n,a,Math.max),c=this.toValue(l,s,Math.min);return this.getComparableValue(n)!==this.getComparableValue(c)?(this.set(["_filterInput",i],this._toInputString(c,i)),this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),!0):!1}_updateFilter(){const e=this._filterInput,i=this.filter,n=this._fromInputString(e.min,"min"),r=this._fromInputString(e.max,"max");this.getComparableValue(n)===this.getComparableValue(i,"min")&&this.getComparableValue(r)===this.getComparableValue(i,"max")||this.set("filter",{min:n,max:r})}_filterChanged(e){if(this._filterInput==null)return;const i=this._filterInput,n=e.base,r=this._fromInputString(i.min,"min"),o=this._fromInputString(i.max,"max");this.getComparableValue(r)===this.getComparableValue(n,"min")&&this.getComparableValue(o)===this.getComparableValue(n,"max")||(this.set("_filterInput",{min:this._toInputString(n.min),max:this._toInputString(n.max)}),this._limitInputDebouncer&&this._limitInputDebouncer.cancel())}hasFilter(){const e=this.filter;return e==null?!1:this.toValue(e.min)!=null||this.toValue(e.max)!=null}resetFilter(){this.filter=this._getDefaultFilter()}_updateLimits(e,i){e&&Promise.resolve(Vn(e,{active:i})).then(n=>{const{min:r,max:o}=n??{};Object.assign(this,{...r!=null?{min:r}:{},...o!=null?{max:o}:{}})})}},_i=t=>class extends t{static get template(){return q`<div id="output" style="position:relative;"></div>`}connectedCallback(){super.connectedCallback(),on(this.render(),this.$.output)}_propertiesChanged(e,i,n){super._propertiesChanged(e,i,n),requestAnimationFrame(()=>on(this.render(),this.$.output))}};class Wm extends Fo(_i(K)){static get properties(){return{currency:{type:String},autodetect:{type:Boolean,value:!1},rates:{type:Object},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:"_computeFilterText(filter.*, _formatters)"}}}static get observers(){return["_valuesChanged(autodetect, currency, values)"]}render(){const e=i=>{this.headerFocused=i.detail.value,this._onDropdownOpenedChanged(i)};return _`
			<style>
				paper-dropdown-menu {
					--iron-icon-width: 0;
					display: block;
					text-align: right;
				}

				.dropdown-content h3 {
					font-weight: 500;
					font-size: 13px;
					margin: 0;
					font-family: var(
						--cosmoz-input-font-family,
						var(--paper-font-subhead_-_font-family, 'Inter', sans-serif)
					);
				}

				.dropdown-content {
					padding: 10px 10px 10px 10px;
					min-width: 150px;
					text-align: left;
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
					border-radius: 6px;
					backdrop-filter: blur(16px) saturate(180%);
					-webkit-backdrop-filter: blur(16px) saturate(180%);
					box-shadow:
						0 4px 24px 0 rgba(0, 0, 0, 0.18),
						0 1.5px 6px 0 rgba(0, 0, 0, 0.1);
				}

				cosmoz-input[type='number'] {
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
					border-radius: 6px;
					border: 1px solid #d1d1d6;
					box-shadow: 0 1px 2px 0 rgba(60, 60, 60, 0.04);
					padding: 2px 8px;
					margin-bottom: 6px;
					min-height: 28px;
					transition:
						border-color 0.2s,
						box-shadow 0.2s;
				}

				cosmoz-input[type='number']:focus-within {
					border-color: var(--cz-accent-color, #007aff);
					box-shadow: 0 0 0 1px rgba(0, 122, 255, 0.15);
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
				}
			</style>
			<cosmoz-clear-button
				@click=${()=>this.resetFilter()}
				?visible=${this.hasFilter()}
			></cosmoz-clear-button>
			<paper-dropdown-menu
				label=${this.title}
				placeholder=${J(this._filterText)}
				class="external-values-${this.externalValues}"
				title=${this._tooltip}
				horizontal-align="right"
				?opened=${this.headerFocused}
				@opened-changed=${e}
			>
				<div class="dropdown-content" slot="dropdown-content">
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-input
						class=${this._fromClasses}
						type="number"
						title=${I("Minimum amount")}
						label=${I("Min amount")}
						.value=${this._filterInput?.min}
						@value-changed=${i=>{this.set("_filterInput.min",i.detail.value)}}
						@blur=${i=>this._onBlur(i)}
						@keydown=${i=>this._onKeyDown(i)}
						min=${this._toInputStringAmount(this._limit.fromMin)}
						max=${this._toInputStringAmount(this._limit.fromMax)}
					>
						<div slot="suffix" suffix>${this.filter?.min?.currency}</div>
					</cosmoz-input>
					<cosmoz-input
						class=${this._toClasses}
						type="number"
						title=${I("Maximum amount")}
						label=${I("Max amount")}
						.value=${this._filterInput?.max}
						@value-changed=${i=>{this.set("_filterInput.max",i.detail.value)}}
						@blur=${i=>this._onBlur(i)}
						@keydown=${i=>this._onKeyDown(i)}
						min=${this._toInputStringAmount(this._limit.toMin)}
						max=${this._toInputStringAmount(this._limit.toMax)}
					>
						<div slot="suffix" suffix>${this.filter?.max?.currency}</div>
					</cosmoz-input>
				</div>
			</paper-dropdown-menu>
		`}_valuesChanged(e,i,n){if(!Array.isArray(n)||n.length<1||!e&&i)return;const r=n.reduce((a,s)=>{if(s.currency){const l=s.currency;a[l]=(a[l]||0)+1}return a},{});let o=Object.keys(r)[0];Object.keys(r).reduce((a,s)=>{const l=Math.max(a,r[s]);return l===r[s]&&(o=s),l},0),this.set("currency",o)}toAmount(e,i,n){if(e==null||e==="")return;if(typeof e!="object"||e.currency==null||e.currency==="")return null;const r=this.toNumber(e.amount);if(r==null||Number.isNaN(r))return null;const o={currency:e.currency,amount:r};if(n==null||i==null)return o;const a=this.toAmount(i);if(a==null)return o;const s=this.rates||{},l=o.amount*(s[o.currency]||1),c=a.amount*(s[a.currency]||1);return this.toNumber(l,c,n)===l?o:a}toValue(){return this.toAmount.apply(this,arguments)}getComparableValue(e,i){const n=super.getComparableValue(e,i);if(n==null)return;const r=this.toNumber(n.amount),o=this.rates;return o==null?r:r*(o[n.currency]||1)}getString(e,i=this.valuePath){const n=this.toValue(this.get(i,e));return n===void 0?"":n===null?"Invalid value":this.renderValue(n)}getCurrency(e,i){const n=this.get(i,e);return n&&n.currency}getFormatter(e,i){const n=i||"",r=e+n||"",o=this._formatters=this._formatters||{};return o[r]||(o[r]=new Intl.NumberFormat(i||void 0,{style:"currency",currency:e})),o[r]}renderValue(e){const i=this.toAmount(e);return i==null?"":this.getFormatter(i.currency,this.locale).format(e.amount)}_amountValueChanged(e){const i=e.target,n=i.value,r=e.model.item,o=this.get(this.valuePath,r),a=Number(n),s={amount:a,currency:o.currency};this.set(this.valuePath,s,r),this._fireItemChangeEvent(r,this.valuePath,o,this.renderValue.bind(this))}_toInputString(e){const i=this.toValue(e);return i==null?null:this.toNumber(i.amount)}_toInputStringAmount(e){const i=this.rates;if(i==null)return this._toInputString(e);const n=this.toValue(e);return n==null?null:(this.toNumber(n.amount)*(i[n.currency]||1)/(i[this.currency]||1)).toFixed(2)}_fromInputString(e,i){const n=this.toNumber(e);if(n!=null)return this.toValue({amount:n,currency:i&&this.get(["filter",i,"currency"])||this.currency})}}customElements.define("cosmoz-omnitable-amount-range-input",Wm);const ce=(t,e,i)=>{if(t==null||t==="")return;const n=typeof t=="number"?t:Number(t);if(!Number.isNaN(n))return n},Vc=t=>{const e=ce(t);return e==null?null:e.toString()},Gm=({valuePath:t},e)=>{const i=ce(k(e,t));return Vc(i)},gs=t=>{const e=Vc(t);return e??""},dt=({valuePath:t,maximumFractionDigits:e},i)=>{if(i==null)return;let n=i;if(t!=null&&(n=k(i,t)),n=ce(n),n!=null)return e!==null?ce(n.toFixed(e)):n},Ym=fm((t,e,i)=>{const n={localeMatcher:"best fit"};return e!==null&&(n.minimumFractionDigits=e),i!==null&&(n.maximumFractionDigits=i),new Intl.NumberFormat(t||void 0,n)}),vr=({valuePath:t,locale:e,minimumFractionDigits:i,maximumFractionDigits:n},r)=>{const o=k(r,t);if(o==null)return"";const a=ce(o);return a==null?void 0:Ym(e,i,n).format(a)},Jm=(t,e)=>i=>{const n=dt(t,i);if(n==null)return!1;const r=dt({...t,valuePath:"min"},e),o=dt({...t,valuePath:"max"},e);return!(n<r||n>o)},pi=(t={},e,i,n)=>{if(e==null||e==="")return;if(typeof e!="object"||e.currency==null||e.currency==="")return null;const r=ce(e.amount);return r==null||Number.isNaN(r)?null:{currency:e.currency,amount:r}},pt=({valuePath:t,rates:e},i)=>{if(i==null)return;let n=i;if(t!=null&&(n=k(i,t)),n=pi(e,n),n==null)return;const r=ce(n.amount);return e==null?r:r*(e[n.currency]||1)},Xm=(t,e)=>i=>{const n=pt(t,i);if(n==null)return!1;const r=pt({...t,valuePath:"min"},e),o=pt({...t,valuePath:"max"},e);return!(n<r||n>o)},Ti={},Zm=(t,e)=>{const i=e||"",n=t+i||"";return Ti[n]||(Ti[n]=new Intl.NumberFormat(e||void 0,{style:"currency",currency:t})),Ti[n]},Qm=(t,e,i)=>{const n=pi(t,e);return n==null?"":Zm(n.currency,i).format(n.amount)},_r=({valuePath:t,rates:e,locale:i},n)=>{const r=pi(e,k(n,t));return r===void 0?"":r===null?"Invalid value":Qm(e,r,i)},bs=t=>t?t.amount+t.currency:"",ys=t=>{if(t==null||t==="")return;const e=t.match(/^(-?[\d]+)([\D]+?)$/iu);return!Array.isArray(e)||e.length<0?null:{amount:e[1],currency:e[2]}},e2=({valuePath:t},e)=>k(e,t)?.currency,t2=({valuePath:t},e)=>k(e,t)?.amount;class i2 extends Se(K){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},currency:{type:String,notify:!0},autodetect:{type:Boolean,value:!1,notify:!0},rates:{type:Object,notify:!0},width:{type:String,value:"70px"},cellClass:{type:String,value:"amount-cell align-right"},headerCellClass:{type:String,value:"amount-header-cell"}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,i){const n=pt({...e,valuePath:"min"},i),r=pt({...e,valuePath:"max"},i);if(!(n==null&&r==null))return Xm(e,i)}getString(e,i){return _r(e,i)}toXlsxValue(e,i){return _r(e,i)}cellTitleFn(e,i){return _r(e,i)}getComparableValue(e,i){return pt(e,i)}serializeFilter({rates:e},i){if(i==null)return;const n=pi(e,i.min),r=pi(e,i.max);if(!(n==null&&r==null))return bs(n)+"~"+bs(r)}deserializeFilter(e,i){if(i==null||i==="")return null;const n=i.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:ys(n[1]),max:ys(n[2])}:null}renderCell(e,{item:i}){return _`<span>${e.getString(e,i)}</span>`}renderEditCell(e,{item:i},n){return _`<cosmoz-input
			no-label-float
			type="number"
			@change=${o=>n({amount:o.target.value,currency:k(i,e.valuePath)?.currency})}
			.value=${t2(e,i)}
		>
			<div slot="suffix">${e2(e,i)}</div>
		</cosmoz-input>`}renderHeader({title:e,min:i,max:n,limits:r,locale:o,rates:a,currency:s,autoupdate:l,autodetect:c},{filter:u},d,p){return _`<cosmoz-omnitable-amount-range-input
			.title=${e}
			.filter=${u}
			.values=${p}
			.rates=${a}
			.min=${i}
			.max=${n}
			.limits=${r}
			.locale=${o}
			.currency=${s}
			.autoupdate=${l}
			.autodetect=${c}
			@filter-changed=${({detail:{value:h}})=>d(f=>({...f,filter:h}))}
			@header-focused-changed=${({detail:{value:h}})=>d(f=>({...f,headerFocused:h}))}
		></cosmoz-omnitable-amount-range-input>`}computeSource(e,i){return vi(e,i)}}customElements.define("cosmoz-omnitable-column-amount",i2);const n2=wt`
	:host {
		display: inline-block;
		vertical-align: middle;
		background-image: linear-gradient(90deg, #e0e0e0, #f5f5f5, #e0e0e0);
		background-size: 1000%;
		background-position: right;
		animation: sweep 1.5s cubic-bezier(0.3, 1, 0.3, 1) infinite;
		border-radius: 3px;
		width: calc(100% - 20px);
		max-width: 150px;
		height: 20px;
		margin: 10px;
	}

	:host-context([show-single]) {
		margin-left: 20px;
	}

	@keyframes sweep {
		0% {
			background-position: right;
		}
		100% {
			background-position: left;
		}
	}
`;customElements.define("cosmoz-autocomplete-skeleton-span",V(()=>ne,{styleSheets:[n2]}));/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class r2{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class o2{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vs=t=>!hu(t)&&typeof t.then=="function",_s=1073741823;let a2=class extends Nn{constructor(){super(...arguments),this._$Cwt=_s,this._$Cbt=[],this._$CK=new r2(this),this._$CX=new o2}render(...e){return e.find(i=>!vs(i))??ee}update(e,i){const n=this._$Cbt;let r=n.length;this._$Cbt=i;const o=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let s=0;s<i.length&&!(s>this._$Cwt);s++){const l=i[s];if(!vs(l))return this._$Cwt=s,l;s<r&&l===n[s]||(this._$Cwt=_s,r=0,Promise.resolve(l).then(async c=>{for(;a.get();)await a.get();const u=o.deref();if(u!==void 0){const d=u._$Cbt.indexOf(l);d>-1&&d<u._$Cwt&&(u._$Cwt=d,u.setValue(c))}}))}return ee}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const nn=Le(a2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xs=(t,e,i)=>{const n=new Map;for(let r=e;r<=i;r++)n.set(t[r],r);return n},No=Le(class extends Ct{constructor(t){if(super(t),t.type!==ge.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let n;i===void 0?i=e:e!==void 0&&(n=e);const r=[],o=[];let a=0;for(const s of t)r[a]=n?n(s,a):a,o[a]=i(s,a),a++;return{values:o,keys:r}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,n]){const r=fu(t),{values:o,keys:a}=this.dt(e,i,n);if(!Array.isArray(r))return this.ut=a,o;const s=this.ut??=[],l=[];let c,u,d=0,p=r.length-1,h=0,f=o.length-1;for(;d<=p&&h<=f;)if(r[d]===null)d++;else if(r[p]===null)p--;else if(s[d]===a[h])l[h]=De(r[d],o[h]),d++,h++;else if(s[p]===a[f])l[f]=De(r[p],o[f]),p--,f--;else if(s[d]===a[f])l[f]=De(r[d],o[f]),Et(t,l[f+1],r[d]),d++,f--;else if(s[p]===a[h])l[h]=De(r[p],o[h]),Et(t,r[d],r[p]),p--,h++;else if(c===void 0&&(c=xs(a,h,f),u=xs(s,d,p)),c.has(s[d]))if(c.has(s[p])){const m=u.get(a[h]),b=m!==void 0?r[m]:null;if(b===null){const y=Et(t,r[d]);De(y,o[h]),l[h]=y}else l[h]=De(b,o[h]),Et(t,r[d],b),r[m]=null;h++}else rr(r[p]),p--;else rr(r[d]),d++;for(;h<=f;){const m=Et(t,l[f+1]);De(m,o[h]),l[h++]=m}for(;d<=p;){const m=r[d++];m!==null&&rr(m)}return this.ut=a,Ws(t,l),ee}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Qn extends Event{constructor(e){super(Qn.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}Qn.eventName="rangeChanged";class er extends Event{constructor(e){super(er.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}er.eventName="visibilityChanged";class tr extends Event{constructor(){super(tr.eventName,{bubbles:!1})}}tr.eventName="unpinned";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class s2{constructor(e){this._element=null;const i=e??window;this._node=i,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class l2 extends s2{constructor(e,i){super(i),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const n=this._node;this._originalScrollTo=n.scrollTo,this._originalScrollBy=n.scrollBy,this._originalScroll=n.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(e,i){const n=typeof e=="number"&&typeof i=="number"?{left:e,top:i}:e;this._scrollTo(n)}scrollBy(e,i){const n=typeof e=="number"&&typeof i=="number"?{left:e,top:i}:e;n.top!==void 0&&(n.top+=this.scrollTop),n.left!==void 0&&(n.left+=this.scrollLeft),this._scrollTo(n)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,i=null,n=null){this._end!==null&&this._end(),e.behavior==="smooth"?(this._setDestination(e),this._retarget=i,this._end=n):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:i,left:n}=e;return i=i===void 0?void 0:Math.max(0,Math.min(i,this.maxScrollTop)),n=n===void 0?void 0:Math.max(0,Math.min(n,this.maxScrollLeft)),this._destination!==null&&n===this._destination.left&&i===this._destination.top?!1:(this.__destination={top:i,left:n,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,i,n){return this._scrollTo(e,i,n),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:e,scrollLeft:i}=this;let{top:n,left:r}=this._destination;n=Math.min(n||0,this.maxScrollTop),r=Math.min(r||0,this.maxScrollLeft);const o=Math.abs(n-e),a=Math.abs(r-i);o<1&&a<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(e){this._clients.add(e),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let ws=typeof window<"u"?window.ResizeObserver:void 0;const Dc=Symbol("virtualizerRef"),Pi="virtualizer-sizer";let Cs;class c2{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw new Error("Virtualizer constructor requires a configuration object");if(e.hostElement)this._init(e);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);const i=e.layout||{};this._layoutInitialized=this._initLayout(i)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new ws(()=>this._hostElementSizeChanged()),this._childrenRO=new ws(this._childrenSizeChanged.bind(this))}_initHostElement(e){const i=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),i[Dc]=this}connected(){this._initObservers();const e=this._isScroller;this._clippingAncestors=p2(this._hostElement,e),this._scrollerController=new l2(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(e=>e.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const i=this._hostElement.style;i.display=i.display||"block",i.position=i.position||"relative",i.contain=i.contain||"size layout",this._isScroller&&(i.overflow=i.overflow||"auto",i.minHeight=i.minHeight||"150px")}_getSizer(){const e=this._hostElement;if(!this._sizer){let i=e.querySelector(`[${Pi}]`);i||(i=document.createElement("div"),i.setAttribute(Pi,""),e.appendChild(i)),Object.assign(i.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),i.textContent="&nbsp;",i.setAttribute(Pi,""),this._sizer=i}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;const i=e.type||Cs;if(typeof i=="function"&&this._layout instanceof i){const n={...e};return delete n.type,this._layout.config=n,!0}return!1}async _initLayout(e){let i,n;if(typeof e.type=="function"){n=e.type;const r={...e};delete r.type,i=r}else i=e;n===void 0&&(Cs=n=(await mu(()=>import("./flow-Cd2WZlRY.js"),[],import.meta.url)).FlowLayout),this._layout=new n(r=>this._handleLayoutMessage(r),i),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const e=window.performance.now(),i=e-this._benchmarkStart,r=performance.getEntriesByName("uv-virtualizing","measure").filter(o=>o.startTime>=this._benchmarkStart&&o.startTime<e).reduce((o,a)=>o+a.duration,0);return this._benchmarkStart=null,{timeElapsed:i,virtualizationTime:r}}return null}_measureChildren(){const e={},i=this._children,n=this._measureChildOverride||this._measureChild;for(let r=0;r<i.length;r++){const o=i[r],a=this._first+r;(this._itemsChanged||this._toBeMeasured.has(o))&&(e[a]=n.call(this,o,this._items[a]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){const{width:i,height:n}=e.getBoundingClientRect();return Object.assign({width:i,height:n},u2(e))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;const{_rangeChanged:i,_itemsChanged:n}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(i||n)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(e){console.warn("Error measuring performance data: ",e)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(e){switch(e.type){case"scroll":(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent();break;default:console.warn("event not handled",e)}}_handleLayoutMessage(e){e.type==="stateChanged"?this._updateDOM(e):e.type==="visibilityChanged"?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):e.type==="unpinned"&&this._hostElement.dispatchEvent(new tr)}get _children(){const e=[];let i=this._hostElement.firstElementChild;for(;i;)i.hasAttribute(Pi)||e.push(i),i=i.nextElementSibling;return e}_updateView(){const e=this._hostElement,i=this._scrollerController?.element,n=this._layout;if(e&&i&&n){let r,o,a,s;const l=e.getBoundingClientRect();r=0,o=0,a=window.innerHeight,s=window.innerWidth;const c=this._clippingAncestors.map(y=>y.getBoundingClientRect());c.unshift(l);for(const y of c)r=Math.max(r,y.top),o=Math.max(o,y.left),a=Math.min(a,y.bottom),s=Math.min(s,y.right);const u=i.getBoundingClientRect(),d={left:l.left-u.left,top:l.top-u.top},p={width:i.scrollWidth,height:i.scrollHeight},h=r-l.top+e.scrollTop,f=o-l.left+e.scrollLeft,m=Math.max(0,a-r),b=Math.max(0,s-o);n.viewportSize={width:b,height:m},n.viewportScroll={top:h,left:f},n.totalScrollSize=p,n.offsetWithinScroller=d}}_sizeHostElement(e){const n=e&&e.width!==null?Math.min(82e5,e.width):0,r=e&&e.height!==null?Math.min(82e5,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${n}px, ${r}px)`;else{const o=this._hostElement.style;o.minWidth=n?`${n}px`:"100%",o.minHeight=r?`${r}px`:"100%"}}_positionChildren(e){e&&e.forEach(({top:i,left:n,width:r,height:o,xOffset:a,yOffset:s},l)=>{const c=this._children[l-this._first];c&&(c.style.position="absolute",c.style.boxSizing="border-box",c.style.transform=`translate(${n}px, ${i}px)`,r!==void 0&&(c.style.width=r+"px"),o!==void 0&&(c.style.height=o+"px"),c.style.left=a===void 0?null:a+"px",c.style.top=s===void 0?null:s+"px")})}async _adjustRange(e){const{_first:i,_last:n,_firstVisible:r,_lastVisible:o}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==i||this._last!==n,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==r||this._lastVisible!==o}_correctScrollError(){if(this._scrollError){const{scrollTop:e,scrollLeft:i}=this._scrollerController,{top:n,left:r}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-n,left:i-r})}}element(e){return e===1/0&&(e=this._items.length-1),this._items?.[e]===void 0?void 0:{scrollIntoView:(i={})=>this._scrollElementIntoView({...i,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),e.behavior==="smooth"){const i=this._layout.getScrollIntoViewCoordinates(e),{behavior:n}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(i,{behavior:n}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){const{index:i}=this._scrollIntoViewTarget||{};i&&e?.has(i)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new Qn({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new er({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((e,i)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=i})),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){if(this._layout?.measureChildren){for(const i of e)this._toBeMeasured.set(i.target,i.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function u2(t){const e=window.getComputedStyle(t);return{marginTop:Ii(e.marginTop),marginRight:Ii(e.marginRight),marginBottom:Ii(e.marginBottom),marginLeft:Ii(e.marginLeft)}}function Ii(t){const e=t?parseFloat(t):NaN;return Number.isNaN(e)?0:e}function Ss(t){if(t.assignedSlot!==null)return t.assignedSlot;if(t.parentElement!==null)return t.parentElement;const e=t.parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host||null}function d2(t,e=!1){const i=[];let n=e?t:Ss(t);for(;n!==null;)i.push(n),n=Ss(n);return i}function p2(t,e=!1){let i=!1;return d2(t,e).filter(n=>{if(i)return!1;const r=getComputedStyle(n);return i=r.position==="fixed",r.overflow!=="visible"})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const h2=t=>t,f2=(t,e)=>_`${e}: ${JSON.stringify(t,null,2)}`;class m2 extends Nn{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(i,n)=>f2(i,n+this._first),this._keyFunction=(i,n)=>h2(i,n+this._first),this._items=[],e.type!==ge.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(e){e&&this._setFunctions(e);const i=[];if(this._first>=0&&this._last>=this._first)for(let n=this._first;n<=this._last;n++)i.push(this._items[n]);return No(i,this._keyFunction,this._renderItem)}update(e,[i]){this._setFunctions(i);const n=this._items!==i.items;return this._items=i.items||[],this._virtualizer?this._updateVirtualizerConfig(e,i):this._initialize(e,i),n?ee:this.render()}async _updateVirtualizerConfig(e,i){if(!await this._virtualizer.updateLayoutConfig(i.layout||{})){const r=e.parentNode;this._makeVirtualizer(r,i)}this._virtualizer.items=this._items}_setFunctions(e){const{renderItem:i,keyFunction:n}=e;i&&(this._renderItem=(r,o)=>i(r,o+this._first)),n&&(this._keyFunction=(r,o)=>n(r,o+this._first))}_makeVirtualizer(e,i){this._virtualizer&&this._virtualizer.disconnected();const{layout:n,scroller:r,items:o}=i;this._virtualizer=new c2({hostElement:e,layout:n,scroller:r}),this._virtualizer.items=o,this._virtualizer.connected()}_initialize(e,i){const n=e.parentNode;n&&n.nodeType===1&&(n.addEventListener("rangeChanged",r=>{this._first=r.first,this._last=r.last,this.setValue(this.render())}),this._makeVirtualizer(n,i))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const qc=Le(m2),g2=(t,e)=>{if(!t||!e)return;const i=Object.keys(e);return Object.fromEntries(Object.keys(t).flatMap(n=>i.includes(n)?[]:[[n,void 0]]))};class b2 extends Ct{_props;render(e){return ee}update(e,[i]){return this._props!==i&&Object.assign(e.element,g2(this._props,i),this._props=i),ee}}const y2=Le(b2),v2=t=>{const e=yi(),i=M(()=>new CSSStyleSheet,[]);$(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,i]},[]),$(()=>{i.replaceSync(t)},[t])};function xt(t){return t?e=>e?.[t]:Ke}const Bc=t=>{const e=xt(t);return i=>typeof i=="string"?i:e(i)?.toString()||""},Ln=t=>e=>{const i={};for(const n in e)t.includes(n)&&(i[n]=e[n]);return i},_2="data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1L5.20039 7.04766L1.66348 3.46152' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",x2=fe`
	:host {
		position: fixed;
		z-index: 1000;
		font-family: var(--paper-font-subhead_-_font-family, inherit);
		background: #fff;
		min-width: 72px;
		box-shadow:
			0 3px 4px 0 rgba(0, 0, 0, 0.14),
			0 1px 8px 0 rgba(0, 0, 0, 0.12),
			0 3px 3px -2px rgba(0, 0, 0, 0.4);
		text-transform: var(--cosmoz-autocomplete-listbox-text-transform, initial);
		overflow: hidden;
	}
	:host(:popover-open) {
		box-sizing: border-box;
		display: block;
		margin: 0;
		border: 0;
	}
	:host([popover]) {
		padding: 0;
	}
	.items {
		position: relative;
		overflow-y: auto;
		contain: layout paint !important;
	}
	.item {
		font-size: 14px;
		padding: 0 20px;
		box-sizing: border-box;
		width: 100%;
		cursor: pointer;
		text-overflow: ellipsis;
		white-space: nowrap;
		transition: background 0.2s;
		color: var(--cosmoz-listbox-color, #101010);
		overflow: hidden;
	}

	.sizer {
		position: relative;
		visibility: hidden;
		opacity: 0;
		pointer-events: none;
		z-index: -1;
		height: 0;
		width: auto;
		padding: 0 20px;
		overflow: hidden;
		max-width: inherit;
		font-size: 14px;
	}

	:host(:not([multi])) .item[aria-selected] {
		background: var(--cosmoz-listbox-single-selection-color, #dadada);
	}

	:host([multi]) .item {
		padding-left: 0;
	}
	:host([multi]) .item::before {
		content: '';
		font-size: 0;
		padding: 7.5px;
		margin: 0 8px;
		background: #fff;
		border: 1px solid #d6d6d5;
		border-radius: 4px;
		vertical-align: top;
	}
	:host([multi]) .item[aria-selected]::before {
		border-color: #5881f6;
		/* prettier-ignore */
		background: url("${_2}") #5881f6 no-repeat 50%;
	}
	:host([multi]) .sizer {
		padding-left: 33px;
	}
	.swatch {
		width: 18px;
		height: 18px;
		display: inline-block;
		box-sizing: border-box;
		vertical-align: middle;
		border-radius: 50%;
		border: 2px solid #eee;
	}
	[virtualizer-sizer]:not(.sizer) {
		line-height: 1;
	}
`,w2=({index:t,height:e,itemHeight:i})=>fe`
	:host {
		xmin-height: ${i}px;
		xheight: ${e}px;
	}

	.item {
		line-height: ${i}px;
		height: ${i}px;
	}

	.item[data-index='${t||"0"}'] {
		background: var(
			--cosmoz-listbox-active-color,
			var(--cosmoz-selection-color, rgba(58, 145, 226, 0.1))
		);
	}
`,C2=t=>typeof t=="object"&&t!==null&&Symbol.iterator in t;function he(t){return t==null?[]:Array.isArray(t)?t:typeof t=="string"?[t]:C2(t)?Array.from(t):[t]}const xr=(t,e=Ke)=>i=>{const n=he(t).map(e);return he(i).filter(r=>!n.includes(e(r)))},S2=(t,e)=>e?i=>he(t).find(n=>n[e]===i[e]):i=>he(t).includes(i),z2=(t,e)=>{if(!e||!t)return t;const i=t.toLowerCase().indexOf(e.toLowerCase());if(i<0)return t;const n=i+e.length;return[t.slice(0,i),_`<mark>${t.slice(i,n)}</mark>`,t.slice(n)]},A2=t=>{const e=we(t);$(()=>{const i=n=>{if(!(n.ctrlKey&&n.altKey||n.defaultPrevented))switch(n.key){case"Up":case"ArrowUp":n.preventDefault(),e.onUp();break;case"Down":case"ArrowDown":n.preventDefault(),e.onDown();break;case"Enter":n.preventDefault(),e.onEnter();break}};return document.addEventListener("keydown",i,!0),()=>document.removeEventListener("keydown",i,!0)},[e])},E2=({items:t,onSelect:e,defaultIndex:i=0})=>{const[n,r]=U({index:i}),{index:o}=n,{length:a}=t;return $(()=>{r({index:n.index<0?i:Math.min(n.index,t.length-1),scroll:!0})},[t,i]),A2({onUp:z(()=>r(s=>({index:s.index>0?s.index-1:a-1,scroll:!0})),[a]),onDown:z(()=>r(s=>({index:s.index<a-1?s.index+1:0,scroll:!0})),[a]),onEnter:z(()=>o>-1&&o<a&&e?.(t[o],o),[o,t,e])}),{position:n,highlight:z(s=>r({index:s}),[]),select:z(s=>e?.(s),[e])}},M2=(t=Ke)=>(e,i,{highlight:n,select:r,textual:o=Ke,query:a,isSelected:s})=>{const l=o(e),c=z2(l,a),u=t(c,e,i);return _` <div
				class="item"
				role="option"
				part="option"
				?aria-selected=${s(e)}
				data-index=${i}
				@mouseenter=${()=>n(i)}
				@click=${()=>r(e)}
				@mousedown=${d=>d.preventDefault()}
				title=${l}
			>
				${u}
			</div>
			<div class="sizer" virtualizer-sizer>${u}</div>`},k2=({itemRenderer:t=M2(),...e})=>{const i=we(e);return z((n,r)=>t(n,r,i),[i,t])},L2=["query","items","onSelect","textual","anchor","itemHeight","itemLimit","itemRenderer","defaultIndex","value","valueProperty","loading"],$2=({value:t,valueProperty:e,items:i,onSelect:n,defaultIndex:r,query:o,textual:a,itemRenderer:s,itemHeight:l=40,itemLimit:c=5})=>{const u=M(()=>S2(t,e),[t,e]),d=M(()=>i.slice(),[i,u]),{position:p,highlight:h,select:f}=E2({items:d,onSelect:n,defaultIndex:isNaN(r)?void 0:Number(r)});return{position:p,items:d,height:Math.min(c,d.length)*l,highlight:h,select:f,itemHeight:l,renderItem:k2({itemRenderer:s,highlight:h,select:f,textual:a,query:o,isSelected:u})}},O2=(t=HTMLElement)=>class extends t{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},T2=t=>{const e=mi(void 0),{position:i,items:n,renderItem:r,height:o,itemHeight:a}=$2(t);$(()=>{if(!i.scroll)return;const l=e.current?.[Dc];l?._layout&&l.element(i.index)?.scrollIntoView({block:"nearest"})},[i]),v2(w2({...i,height:o,itemHeight:a}));const s=M(()=>({_itemSize:{height:a-1e-5}}),[a]);return _`<div
			class="items"
			style="min-height: ${o}px"
			${We(l=>e.current=l)}
		>
			<div virtualizer-sizer></div>
			${qc({items:n,renderItem:r,scroller:!0,layout:s})}
		</div>
		<slot></slot>`};customElements.define("cosmoz-listbox",O2(V(T2,{styleSheets:[zt(x2)]})));const P2=({multi:t,setFloating:e,styles:i,...n},r)=>_`<cosmoz-listbox
		style="${Sl(i)}"
		@connected="${o=>o.target.showPopover?.()}"
		popover="manual"
		part="listbox"
		?multi=${t}
		${We(e)}
		...=${y2(Ln(L2)(n))}
		>${r}</cosmoz-listbox
	>`,I2=fe`
	:host {
		border-radius: var(--cosmoz-autocomplete-chip-border-radius, 500px);
		background: var(--cosmoz-autocomplete-chip-bg-color, #cbcfdb);
		margin: 0px 0 2px 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		flex: 0.0001 1 fit-content;
		max-width: 18ch;
		min-width: 40px;
		padding: 0 4px 0 8px;
		gap: 4px;
		cursor: pointer;
		transform: translateY(var(--cosmoz-autocomplete-chip-translate-y, 0));
	}
	.content {
		color: var(--cosmoz-autocomplete-chip-color, #424242);
		font-size: var(--cosmoz-autocomplete-chip-text-font-size, 12px);
		line-height: var(--cosmoz-autocomplete-chip-text-line-height, 22px);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		flex: auto;
		min-width: 16px;
	}
	.clear {
		background-color: var(--cosmoz-autocomplete-chip-clear-bg-color, #81899b);
		border-radius: 50%;
		cursor: pointer;
		width: 16px;
		height: 16px;
		stroke: var(
			--cosmoz-autocomplete-chip-clear-stroke,
			var(--cosmoz-autocomplete-chip-bg-color, #cbcfdb)
		);
		display: var(--cosmoz-autocomplete-chip-clear-display, block);
		flex: none;
	}
	.clear:hover {
		filter: brightness(90%);
	}
	.clear svg {
		display: block;
		transform: translate(3.5px, 3.5px);
	}
`,H2=_`
	<svg
		width="9"
		height="8"
		viewBox="0 0 9 8"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<line
			x1="7.53033"
			y1="0.994808"
			x2="1.16637"
			y2="7.35877"
			stroke-width="1.5"
		/>
		<line
			x1="7.46967"
			y1="7.35882"
			x2="1.10571"
			y2="0.99486"
			stroke-width="1.5"
		/>
	</svg>
`,R2=({onClear:t,disabled:e})=>_`
	<div class="content" part="content chip-text"><slot></slot></div>
	${G(t&&!e,()=>_`<span
				class="clear"
				part="clear chip-clear"
				@mousedown=${i=>i.preventDefault()}
				@click=${t}
			>
				${H2}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",V(R2,{observedAttributes:["disabled"],styleSheets:[zt(I2)]}));const zs=({content:t,onClear:e,disabled:i,hidden:n,className:r="chip",slot:o})=>_`<cosmoz-autocomplete-chip
		class=${J(r)}
		slot=${J(o)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${i}
		?hidden=${n}
		.onClear=${e}
		title=${J(typeof t=="string"?t:void 0)}
		>${t}</cosmoz-autocomplete-chip
	>`,F2=({value:t,min:e=0,onDeselect:i,textual:n,disabled:r})=>[...t.filter(Boolean).map(o=>zs({content:n(o),onClear:t.length>e&&(()=>i(o)),disabled:r,slot:"control"})),zs({content:_`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],N2=fe`
	:host {
		display: block;
		position: relative;
		min-width: 35px;
	}

	cosmoz-input::part(control) {
		display: flex;
		gap: 4px;
		min-width: 35px;
	}
	cosmoz-input::part(input) {
		flex: 1 24px;
		min-width: 0;
	}
	cosmoz-input:not([data-one])::part(input):focus {
		flex: 4 0.00001 50px;
		min-width: 20px;
	}
	.badge {
		min-width: initial;
		flex: none;
		text-align: center;
		padding: 0 4px;
	}

	[data-single]::part(input) {
		flex: 0;
	}
	[data-one] .chip {
		max-width: initial;
		flex: 1;
	}

	[data-one] .badge {
		display: none;
	}

	[hidden] {
		display: none;
	}

	:host([wrap]) cosmoz-input::part(control) {
		flex-wrap: wrap;
	}
	:host([wrap]) .chip {
		max-width: 100%;
	}

	slot {
		display: contents !important;
	}
`,As=t=>t.matches(":focus-within"),V2=({disabled:t,onFocus:e})=>{const[i,n]=U(),{focused:r,closed:o}=i||{},a=r&&!t,s=we({closed:o,onFocus:e}),l=z(u=>n(d=>({...d,closed:u})),[]),c=z(u=>{const d=u.currentTarget;return As(d)?n(p=>({focused:!0,closed:!p?.closed})):d.focus()},[]);return $(()=>{if(!a)return;const u=d=>{if(d.defaultPrevented)return;const{closed:p}=s;d.key==="Escape"&&!p?(d.preventDefault(),l(!0)):["ArrowUp","Up"].includes(d.key)&&p&&(d.preventDefault(),l(!1))};return document.addEventListener("keydown",u,!0),()=>document.removeEventListener("keydown",u,!0)},[a]),{focused:a,active:a&&!o,setClosed:l,onToggle:c,onFocus:z(u=>{const d=As(u.currentTarget);n({focused:d}),s.onFocus?.(d)},[s])}},D2=({focused:t,empty:e,...i})=>{const n=t&&e,r=we(i);$(()=>{if(!n)return;const o=a=>{if(a.defaultPrevented)return;const{key:s}=a,l=he(r.value),c=r.limit==1;if(l.length>0&&(s==="Backspace"||c&&s.length===1))return r.onChange(l.slice(0,-1))};return document.addEventListener("keydown",o,!0),()=>document.removeEventListener("keydown",o,!0)},[n,r])},q2=(t,e,i)=>{if(!e)return t;const n=e.toLowerCase(),r=[];for(const o of t){const a=i(o).toLowerCase().indexOf(n);a<0||r.push({item:o,index:a})}return r.sort((o,a)=>o.index-a.index).map(({item:o})=>o)},B2=t=>t===!1||t==null?[]:t,jc=(t,e,i)=>t.dispatchEvent(new CustomEvent(e,{detail:i})),j2=(t,e,i)=>z(n=>{e?.(n),jc(t,i,n)},[e]),U2=[],K2=t=>(...e)=>{let i;const n=()=>{i&&cancelAnimationFrame(i)};return n(),i=requestAnimationFrame(()=>{i=void 0,t(...e)}),n},W2=({value:t,text:e,onChange:i,onText:n,onSelect:r,limit:o,min:a,source:s,textProperty:l,textual:c,valueProperty:u,keepOpened:d,keepQuery:p,preserveOrder:h,defaultIndex:f,...m})=>{const b=M(()=>(c??Bc)(l),[c,l]),{active:y,focused:g,onFocus:x,setClosed:v}=V2(m),w=!e,C=M(()=>e?.trim(),[e]),S=yi(),E=j2(S,n,"text"),F=z(N=>{i?.(N,()=>v(!0)),jc(S,"value",N)},[i]),[T,oe]=U([]),Y=M(()=>Promise.resolve(typeof s=="function"?s({query:C,active:y}):s).then(B2),[s,y,C]),j=M(()=>he(t),[t]);$(()=>Y.then(oe),[Y]),D2({focused:g,empty:w,limit:o,value:j,onChange:F,onText:E}),$(()=>{g||E("")},[g]);const D=we({onText:E,onChange:F,value:j,limit:o,min:a,keepQuery:p,keepOpened:d,setClosed:v,onSelect:r});return{active:y,query:C,textual:b,value:j,source$:Y,items:M(()=>{if(!y)return U2;const N=h?T:[...j,...xr(j,xt(u))(T)];return q2(N,C,b)},[T,y,C,b,w,j,h,u]),onClick:z(()=>v(!1),[]),onFocus:x,onText:z(N=>{E(N.target.value),v(!1)},[E,e,v]),onSelect:z(N=>{D.onSelect?.(N,D);const{onChange:W,onText:P,limit:X,min:ae,value:Qe,keepQuery:uu,keepOpened:du,setClosed:pu}=D;uu||P(""),du||pu(!0);const wi=he(Qe),Xo=wi.includes(N);Xo&&wi.length===ae||W((Xo?xr(N)(wi):[...wi,N]).slice(-X))},[D]),onDeselect:z(N=>D.onChange(xr(N)(D.value)),[D]),defaultIndex:C?.length>0?0:f}},G2=t=>{const e=t.shadowRoot.querySelectorAll(".chip"),i=t.shadowRoot.querySelector(".badge");i.hidden=!0;for(const s of e)s.hidden=!1;const r=t.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let o;for(o=0;o<e.length;o++){const l=e[o].getBoundingClientRect();if(!(l.x+l.width<=r.x+r.width-24))break}const a=e.length-o;for(i.querySelector("span").textContent="+"+a.toString(),i.hidden=a<1;o<e.length;o++)e[o].hidden=!0},Y2=({value:t,active:e,wrap:i,limit:n})=>{const r=yi(),o=!(i||n==1),a=M(()=>K2(()=>G2(r)),[]),[s,l]=U(0);si(()=>{if(!o)return;const c=r.shadowRoot.querySelector("cosmoz-input"),u=new ResizeObserver(d=>{l(d[0].contentRect.width)});return u.observe(c),()=>u.disconnect()},[o]),si(()=>o?a():void 0,[o,s,e,t])},Uc=[yo({fallbackAxisSideDirection:"start",crossAxis:!1}),bo()],J2=({placement:t="bottom-start",strategy:e,middleware:i=Uc})=>{const[[n,r],o]=U([]),[a,s]=U();return $(()=>{if(!n||!(r instanceof HTMLElement)){s(void 0);return}return Il(n,r,()=>Rl(n,r,{placement:t,strategy:e,middleware:i}).then(s))},[n,r,t,e,i]),{setReference:z(l=>o(([,c])=>[l,c]),[]),setFloating:z(l=>o(([c])=>[c,l]),[]),styles:M(()=>a?{left:`${a.x}px`,top:`${a.y}px`}:{},[a?.x,a?.y])}},X2=["input","control","label","line","error","wrap"].map(t=>`${t}: input-${t}`).join(),Es=()=>ne,Z2=[Hl({apply({rects:t,elements:e}){Object.assign(e.floating.style,{minWidth:`${Math.max(t.reference.width,t.floating.width)}px`})}}),...Uc],Q2=t=>{const{active:e,invalid:i,errorMessage:n,label:r,placeholder:o,disabled:a,noLabelFloat:s,alwaysFloatLabel:l,textual:c,text:u,onText:d,onFocus:p,onClick:h,onDeselect:f,value:m,limit:b,min:y,showSingle:g,items:x,source$:v,placement:w}=t,C=yi(),S=b==1,E=S&&m?.[0]!=null,{styles:F,setReference:T,setFloating:oe}=J2({placement:w,middleware:Z2});return vt({focus:()=>C.shadowRoot?.querySelector("#input")?.focus()},[]),_`<cosmoz-input
				id="input"
				part="input"
				${We(T)}
				.label=${r}
				.placeholder=${E?void 0:o}
				?no-label-float=${s}
				?always-float-label=${m?.length>0||l}
				?readonly=${E}
				?disabled=${a}
				?invalid=${nn(v.then(()=>i,()=>!0),i)}
				.errorMessage=${nn(v.then(()=>n,Y=>Y.message),n)}
				.value=${To(u)}
				@value-changed=${d}
				@focusin=${p}
				@focusout=${p}
				@click=${h}
				autocomplete="off"
				exportparts=${X2}
				?data-one=${S}
				?data-single=${E}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${F2({value:m,min:y,onDeselect:f,textual:c,disabled:a})}
			</cosmoz-input>

			${G(e&&!(E&&!g),()=>P2({...t,items:x,multi:!S,setFloating:oe,styles:F},G(x.length<5,()=>nn(v.then(Es,Es),_`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`))))}`},Kc=t=>{const e={...t,...W2(t)};return Y2(e),Q2(e)},Wc=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","item-height","item-limit","wrap"],eg=t=>{const{onChange:e,onText:i,...n}=t;return Kc({...n,onChange:z((r,...o)=>{t.value=r,e?.(r,...o)},[e]),onText:z(r=>{t.text=r,i?.(r)},[i])})},Gc=[zt(N2)];customElements.define("cosmoz-autocomplete-ui",V(Kc,{observedAttributes:Wc,styleSheets:Gc}));customElements.define("cosmoz-autocomplete",V(eg,{observedAttributes:Wc,styleSheets:Gc}));const tg=(t,e)=>{if(!Array.isArray(t))return;const i=[];return t.reduce((n,r)=>Array.isArray(r)?(r.forEach(o=>{n.push(o)}),n):(n.push(r),n),[]).filter((n,r,o)=>{if(o.indexOf(n)!==r)return!1;if(e){const a=k(n,e);if(i.indexOf(a)!==-1)return!1;i.push(a)}return!0})},ig=(t,e,i)=>{if(t==null)return[];if(Array.isArray(t))return tg(t,e);if(typeof t=="object"){const n=e??"id",r=i??"label";return Object.entries(t).map(([o,a])=>({[n]:o,[r]:a})).sort((o,a)=>o[r]<a[r]?-1:o[r]>a[r]?1:0)}return[]},Vo=(t,e,i)=>he(e&&k(t,e)).map(xt(i)),$n=({valuePath:t,textProperty:e},i)=>Vo(i,t,e).filter(n=>n!=null).join(", "),ng=$n,rg=({valueProperty:t,valuePath:e,emptyValue:i,emptyProperty:n},r)=>o=>{const a=xt(t),s=he(k(o,e));return r.some(l=>s.length===0&&xt(n||t)(l)===i||s.some(c=>a(c)===a(l)))},Do=t=>e=>t(i=>({...i,filter:e})),qo=t=>e=>t(i=>({...i,headerFocused:e})),Bo=t=>e=>t(i=>({...i,query:e})),Yc=({emptyValue:t,emptyLabel:e,emptyProperty:i,textProperty:n,valueProperty:r},o)=>{const a=ig(o,r,n);return!e||t===void 0||!n||!(i||r)||!a?a:[{[n]:e,[i||r]:t},...a]},og=(t,e)=>Yc(t,Ic(e,t.valuePath)),jo=t=>class extends t{static get properties(){return{textProperty:{type:String},valueProperty:{type:String},emptyLabel:{type:String},emptyValue:{type:Object},emptyProperty:{type:String}}}getConfig(e){return{emptyProperty:e.emptyProperty}}getString(e,i){return $n(e,i)}toXlsxValue(e,i){return ng(e,i)}cellTitleFn(e,i){return $n(e,i)}getComparableValue({valuePath:e,valueProperty:i},n){const r=k(n,e);return i==null?r:he(r).reduce((a,s)=>(a.push(k(s,i)),a),[]).sort().join(" ")}getFilterFn(e,i){if(!(!i||!Array.isArray(i)||i.length===0))return rg(e,i)}serializeFilter(e,i){return i.length===0?null:JSON.stringify(i)}deserializeFilter(e,i){return JSON.parse(decodeURIComponent(i))}computeSource(e,i){return e.externalValues||typeof e.values=="function"?async(...n)=>Yc(e,await Promise.resolve(Vn(e.values,...n))):og(e,i)}},ag=({valuePath:t,textProperty:e,valueProperty:i},n)=>{const r=e?Bc(e):xt(i),o=he(t&&k(n,t)).map(r);return o.length>1?o.filter(Boolean).join(","):o[0]};class sg extends jo(Se(K)){static get properties(){return{headerCellClass:{type:String,value:"autocomplete-header-cell"},minWidth:{type:String,value:"55px"},editMinWidth:{type:String,value:"55px"},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:i}){return _`<span class="default-column"
			>${e.getString(e,i)}</span
		>`}renderEditCell(e,{item:i},n){return _`<cosmoz-input
			no-label-float
			type="text"
			@change=${o=>n(o.target.value)}
			.value=${Je(e,i)}
		></cosmoz-input>`}renderHeader(e,{filter:i,query:n},r,o){return _`<cosmoz-autocomplete-ui
			class="external-values-${e.externalValues}"
			?keep-opened=${e.keepOpened}
			?keep-query=${e.keepQuery}
			?show-single=${e.showSingle}
			?preserve-order=${e.preserveOrder}
			.textual=${e.textual}
			.label=${e.title}
			.source=${o}
			.textProperty=${e.textProperty}
			.valueProperty=${e.valueProperty}
			.itemRenderer=${e[Oe]?.itemRenderer}
			.value=${i}
			.text=${n}
			.limit=${e.limit}
			.onChange=${Do(r)}
			.onFocus=${qo(r)}
			.onText=${Bo(r)}
			>${G(e.loading,()=>_`<paper-spinner-lite
						style="width: 20px; height: 20px; flex:none;"
						suffix
						slot="suffix"
						active
					></paper-spinner-lite>`)}</cosmoz-autocomplete-ui
		>`}getComparableValue(e,i){return ag(e,i)}}customElements.define("cosmoz-omnitable-column-autocomplete",sg);const Uo=(t,e)=>e.find(({value:i})=>t===i),lg=(t,e,i)=>{const n=Uo(e,i);return n?n.text:t},Ms=(t,e,i,n)=>lg(t,k(e,i),n),cg=({valuePath:t},e,i)=>Uo(k(e,t),i),ug=t=>e=>{t(i=>({...i,filter:e?.[0]?.value??null}))},dg=t=>e=>{t(i=>({...i,headerFocused:e}))},pg=t=>e=>{t(i=>({...i,query:e}))},hg=t=>e=>t(e?.[0]?.value),wr=({valuePath:t,trueLabel:e,falseLabel:i},n)=>k(n,t)?e:i,fg=({valuePath:t},e)=>i=>k(i,t)===e,Hi=Pc((t,e)=>[{text:t,value:!0},{text:e,value:!1}]),mg=({valuePath:t,trueLabel:e,falseLabel:i},n)=>t?k(n,t)?e:i:"",gg=(t,e)=>{try{return JSON.parse(e)}catch{return null}};class bg extends Se(K){static get properties(){return{trueLabel:{type:String,value:"True"},falseLabel:{type:String,value:"False"},flex:{type:String,value:"0"},cellClass:{type:String,value:"boolean-cell"}}}getString(e,i){return wr(e,i)}renderCell(e,{item:i}){return wr(e,i)}cellTitleFn(e,i){return wr(e,i)}renderEditCell(e,{item:i},n){const{trueLabel:r,falseLabel:o}=e,a=e.loading?_`<paper-spinner-lite
						style="width: 20px; height: 20px;"
						suffix
						slot="suffix"
						active
					></paper-spinner-lite>`:ne;return _`<cosmoz-autocomplete
			no-label-float
			.title=${Ms(e.title,i,e.valuePath,Hi(r,o))}
			.source=${Hi(r,o)}
			.textProperty=${"text"}
			.value=${cg(e,i,Hi(r,o))}
			.onChange=${hg(n)}
			.limit=${1}
			>${a}</cosmoz-autocomplete
		>`}renderHeader(e,{filter:i,query:n},r,o){const a=e.loading?_`<paper-spinner-lite
					style="width: 20px; height: 20px;"
					suffix
					slot="suffix"
					active
				></paper-spinner-lite>`:ne;return _`<cosmoz-autocomplete-ui
			.label=${e.title}
			.title=${Ms(e.title,i,e.valuePath,o)}
			.source=${o}
			.textProperty=${"text"}
			.value=${Uo(i,o)}
			.text=${n}
			.onChange=${ug(r)}
			.onFocus=${dg(r)}
			.onText=${pg(r)}
			.limit=${1}
			>${a}</cosmoz-autocomplete-ui
		>`}computeSource({trueLabel:e,falseLabel:i}){return Hi(e,i)}getFilterFn(e,i){if(i!=null)return fg(e,i)}toXlsxValue(e,i){return mg(e,i)}deserializeFilter(e,i){return gg(e,i)}}customElements.define("cosmoz-omnitable-column-boolean",bg);const Ko=t=>class extends Fo(t){static get properties(){return{max:{type:Date,value:null},min:{type:Date,value:null},_filterText:{type:String,computed:"_computeFilterText(filter.*, formatter)"},formatter:{type:Object,computed:"_computeFormatter(locale)"}}}toDate(e,i,n){if(e==null||e==="")return;let r=e;if(r instanceof Date||(typeof e=="string"&&(r=this.getAbsoluteISOString(r)),r=new Date(r)),Number.isNaN(r.getTime()))return null;if(n==null||i==null)return r;const o=this.toDate(i);if(o==null)return r;const a=this.getComparableValue(r),s=this.getComparableValue(o);return n(a,s)===a?r:o}toValue(){return this.toDate.apply(this,arguments)}getComparableValue(e,i){const n=super.getComparableValue(e,i);if(n!=null)return this.toNumber(n.getTime())}getString(e,i=this.valuePath,n=this.formatter){const r=this.toValue(this.get(i,e));return r===void 0?"":r===null?"Invalid Date":this.renderValue(r,n)}getAbsoluteISOString(e){return e.length===19?e+this._getTimezoneString(e):e}_getTimezoneString(e){const i=-new Date(e).getTimezoneOffset()/60;return(i<0?"-":"+")+["0",Math.abs(i)].join("").substr(-2)+":00"}renderValue(e,i=this.formatter){if(i==null)return;const n=this.toValue(e);if(n!=null)return i.format(n)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0)}_toInputString(e){const i=this.toValue(e);return i==null?null:this._toLocalISOString(i).slice(0,10)}_dateValueChanged(e){const i=e.currentTarget,n=i.value,r=e.model.item,o=this.get(this.valuePath,r),a=this._fromInputString(n);this.set(this.valuePath,a,r),this._fireItemChangeEvent(r,this.valuePath,o,this.renderValue.bind(this))}_toLocalISOString(e){return Yn(e)}};class yg extends Ko(_i(K)){render(){return _`
			<style>
				paper-dropdown-menu {
					--iron-icon-width: 0;
					display: block;
					text-align: right;
				}

				.dropdown-content h3 {
					font-weight: 500;
					font-size: 13px;
					margin: 0;
					font-family: var(
						--cosmoz-input-font-family,
						var(--paper-font-subhead_-_font-family, 'Inter', sans-serif)
					);
				}

				.dropdown-content {
					padding: 10px 10px 10px 10px;
					min-width: 120px;
					text-align: left;
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
					border-radius: 6px;
					backdrop-filter: blur(16px) saturate(180%);
					-webkit-backdrop-filter: blur(16px) saturate(180%);
					box-shadow:
						0 4px 24px 0 rgba(0, 0, 0, 0.18),
						0 1.5px 6px 0 rgba(0, 0, 0, 0.1);
				}

				cosmoz-input[type='date'] {
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
					border-radius: 6px;
					border: 1px solid #d1d1d6;
					box-shadow: 0 1px 2px 0 rgba(60, 60, 60, 0.04);
					padding: 2px 8px;
					margin-bottom: 6px;
					min-height: 28px;
					transition:
						border-color 0.2s,
						box-shadow 0.2s;
				}

				cosmoz-input[type='date']:focus-within {
					border-color: var(--cz-accent-color, #007aff);
					box-shadow: 0 0 0 1px rgba(0, 122, 255, 0.15);
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
				}
			</style>
			<cosmoz-clear-button
				@click=${()=>this.resetFilter()}
				?visible=${this.hasFilter()}
			></cosmoz-clear-button>
			<paper-dropdown-menu
				label=${this.title}
				placeholder=${J(this._filterText)}
				class="external-values-${this.externalValues}"
				title=${this._tooltip}
				horizontal-align="right"
				?opened=${this.headerFocused}
				@opened-changed=${e=>{this.headerFocused=e.detail.value}}
			>
				<div class="dropdown-content" slot="dropdown-content">
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-input
						type="date"
						label=${I("From date")}
						min=${this._toInputString(this._limit.fromMin)}
						max=${this._toInputString(this._limit.fromMax)}
						.value=${this._filterInput?.min}
						@value-changed=${e=>this.set("_filterInput.min",e.detail.value)}
					></cosmoz-input>
					<cosmoz-input
						type="date"
						label=${I("Until date")}
						min=${this._toInputString(this._limit.toMin)}
						max=${this._toInputString(this._limit.toMax)}
						.value=${this._filterInput?.max}
						@value-changed=${e=>this.set("_filterInput.max",e.detail.value)}
					></cosmoz-input>
				</div>
			</paper-dropdown-menu>
		`}_fromInputString(e,i){const n=this.toDate(e);if(n!=null)return i==="min"&&n.setHours(0,0,0,0),i==="max"&&n.setHours(23,59,59),n}_filterInputChanged(e,i){const n=e.path.split(".")[1],r=n&&e.value;if(r&&r.match(/^0+/u)){this._limitInputDebouncer.cancel();return}super._filterInputChanged(e,i)}}customElements.define("cosmoz-omnitable-date-range-input",yg);const vg=t=>{const e=-new Date(t).getTimezoneOffset()/60;return(e<0?"-":"+")+["0",Math.abs(e)].join("").substr(-2)+":00"},Wo=t=>t.length===19?t+vg(t):t,Jc=t=>{if(t==null||t==="")return;let e=t;return!(e instanceof Date)&&(typeof t=="string"&&(e=Wo(e)),e=cf(e),!e)||Number.isNaN(e.getTime())?null:e},Me=({valuePath:t},e)=>{if(e==null)return;let i=e;if(t!=null&&(i=k(e,t)),i=Jc(i),i!=null)return ce(i.getTime())},Q=(t,e,i)=>{const n=Jc(t);return n??null},Go=(t,e)=>{if(e==null)return;const i=Q(t);if(i!=null)return e.format(i)},Ri={},_g=t=>{const e=t||"";return Ri[e]||(Ri[e]=new Intl.DateTimeFormat(t||void 0)),Ri[e]},Cr=({valuePath:t,locale:e},i)=>{let n=k(i,t);return n===void 0?"":(n=Q(n),n===null?"Invalid Date":Go(n,_g(e)))},Xc=t=>{const e=Q(t);return e==null?null:Yn(e).slice(0,10)},xg=({valuePath:t},e)=>Xc(k(e,t)),Zc=(t,e)=>{const i=Q(t);if(i!=null)return i},ks=t=>{const e=Xc(t);return e??""},wg=({valuePath:t},e)=>{if(!t)return"";const i=Q(k(e,t));if(!i)return"";const n=Q(Yn(i));return n?(n.setHours(0,0,0,0),n):""},Qc=(t,e)=>i=>{const n=Me(t,i);if(n==null)return!1;const r=Me({...t,valuePath:"min"},e),o=Me({...t,valuePath:"max"},e);return!(n<r||n>o)};class Cg extends Se(K){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"date-header-cell"},width:{type:String,value:"100px"},minWidth:{type:String,value:"82px"},flex:{type:String,value:"0"}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,i){const n=Me({...e,valuePath:"min"},i),r=Me({...e,valuePath:"max"},i);if(!(n==null&&r==null))return Qc(e,i)}getString(e,i){return Cr(e,i)}toXlsxValue(e,i){return wg(e,i)}cellTitleFn(e,i){return Cr(e,i)}getComparableValue(e,i){return Me(e,i)}serializeFilter(e,i){if(i==null)return;const n=Q(i.min),r=Q(i.max);if(!(n==null&&r==null))return ks(n)+"~"+ks(r)}deserializeFilter(e,i){if(i==null||i==="")return null;const n=i.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Q(n[1]),max:Q(n[2])}:null}renderCell(e,{item:i}){return _`<div class="omnitable-cell-date">
			${Cr(e,i)}
		</div>`}renderEditCell(e,{item:i},n){return _`<cosmoz-input
			no-label-float
			type="date"
			@change=${o=>n(Zc(o.target.value))}
			.value=${xg(e,i)}
		></cosmoz-input>`}renderHeader({title:e,min:i,max:n,limits:r,locale:o},{filter:a},s,l){return _`<cosmoz-omnitable-date-range-input
			.title=${e}
			.filter=${a}
			.values=${l}
			.min=${i}
			.max=${n}
			.limits=${r}
			.locale=${o}
			@filter-changed=${({detail:{value:c}})=>s(u=>({...u,filter:c}))}
			@header-focused-changed=${({detail:{value:c}})=>s(u=>({...u,headerFocused:c}))}
		></cosmoz-omnitable-date-range-input>`}computeSource(e,i){return vi(e,i)}}customElements.define("cosmoz-omnitable-column-date",Cg);class Sg extends jo(Se(K)){renderCell({valuePath:e,textProperty:i},{item:n}){const r=Vo(n,e,i).map(o=>_`<li>${o}</li>`);return _`
			<style>
				ul {
					padding: 0;
					display: inline;
					list-style: none;
				}
				ul li {
					display: inline;
				}
				ul li:after {
					content: ', ';
				}
				ul li:last-child:after {
					content: '';
				}
			</style>
			<ul>
				${r}
			</ul>
		`}renderEditCell(){return"not implemented"}renderHeader(e,{filter:i,query:n},r,o){const a=e.loading?_`<paper-spinner-lite
					style="width: 20px; height: 20px;"
					suffix
					slot="suffix"
					active
				></paper-spinner-lite>`:ne;return _`<cosmoz-autocomplete-ui
			class="external-values-${e.externalValues}"
			.label=${e.title}
			.source=${o}
			.textProperty=${e.textProperty}
			.value=${i}
			.text=${n}
			.onChange=${Do(r)}
			.onFocus=${qo(r)}
			.onText=${Bo(r)}
			>${a}</cosmoz-autocomplete-ui
		> `}}customElements.define("cosmoz-omnitable-column-list-horizontal",Sg);window.Cosmoz=window.Cosmoz||{};class Ls extends Um(uf(af,K)){static get template(){return q`
			<style>
				:host {
					display: block;
				}

				:host a {
					color: var(--primary-link-color, inherit);
				}

				[hidden] {
					display: none;
				}

				ul {
					list-style-type: none;
					margin: 0.3em 0;
					padding-left: 0;
				}

				li {
					text-overflow: ellipsis;
					overflow: hidden;
				}
			</style>

			<ul hidden$="[[ isEmpty(items) ]]">
				<li>
					<span>[[ _firstItem(items) ]]</span>
				</li>
				<li class="see-more" hidden$="[[_hideExpand(items, _expanded)]]">
					<a href="#" on-tap="_toggleExpand"
						>[[ _('and {0} more', _othersCount, t) ]]</a
					>
				</li>
				<template
					is="dom-repeat"
					items="[[ _otherItems(items, _expanded) ]]"
					as="item"
				>
					<li>
						<span class="item">[[ item ]]</span>
					</li>
				</template>
				<li class="see-less" hidden$="[[ _hideCollapse(items, _expanded) ]]">
					<a href="#" on-tap="_toggleExpand">[[ _('See less', t) ]]</a>
				</li>
			</ul>
		`}static get is(){return"cosmoz-omnitable-column-list-data"}static get properties(){return{items:{type:Array},_expanded:{type:Boolean,value:!1},_othersCount:{type:Number,computed:"_computeOthersCount(items)"}}}static get observers(){return["_itemsLengthChanged(items.length)"]}_itemsLengthChanged(){requestAnimationFrame(()=>this.dispatchEvent(new CustomEvent("expand",{bubbles:!0})))}_firstItem(e){if(e!=null&&e.length>0)return e[0]}_hideExpand(e,i){return e!==void 0&&e.length!==null?e.length<=2||i:!0}_hideCollapse(e,i){return e!==void 0&&e.length!==null?e.length<=2||!i:!0}_otherItems(e,i){if(e!=null&&(e.length<=2||i))return e.slice(1)}_computeOthersCount(e){if(e!=null)return e.length-1}_toggleExpand(e){this._expanded=!this._expanded,e.stopPropagation(),e.preventDefault()}}customElements.define(Ls.is,Ls);class zg extends jo(Se(K)){static get properties(){return{keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,textual:e.textual}}renderCell({valuePath:e,textProperty:i},{item:n}){return _`<cosmoz-omnitable-column-list-data
			.items=${Vo(n,e,i)}
		></cosmoz-omnitable-column-list-data>`}renderEditCell(e,{item:i},n){const r=o=>n(o.target.value.split(/,\s*/gu));return _`<cosmoz-input
			no-label-float
			type="text"
			.value=${$n(e,i)}
			@change=${r}
		></cosmoz-input>`}renderHeader(e,{filter:i,query:n},r,o){return _`<cosmoz-autocomplete-ui
			class="external-values-${e.externalValues}"
			?keep-opened=${e.keepOpened}
			?keep-query=${e.keepQuery}
			.textual=${e.textual}
			.column=${e}
			.label=${e.title}
			.source=${o}
			.textProperty=${e.textProperty}
			.valueProperty=${e.valueProperty}
			.itemRenderer=${e[Oe]?.itemRenderer}
			.value=${i}
			.text=${n}
			.onChange=${Do(r)}
			.onFocus=${qo(r)}
			.onText=${Bo(r)}
			>${G(e.loading,()=>_`<paper-spinner-lite
						style="width: 20px; height: 20px; flex:none;"
						suffix
						slot="suffix"
						active
					></paper-spinner-lite>`)}</cosmoz-autocomplete-ui
		>`}}customElements.define("cosmoz-omnitable-column-list",zg);class Ag extends Fo(_i(K)){static get properties(){return{maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},formatter:{type:Object,computed:"_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)"},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:"_computeFilterText(filter.*, formatter)"}}}render(){const e=i=>{this.headerFocused=i.detail.value,this._onDropdownOpenedChanged(i)};return _`
			<style>
				paper-dropdown-menu {
					--iron-icon-width: 0;
					display: block;
					text-align: right;
				}

				.dropdown-content h3 {
					font-weight: 500;
					font-size: 13px;
					margin: 0;
					font-family: var(
						--cosmoz-input-font-family,
						var(--paper-font-subhead_-_font-family, 'Inter', sans-serif)
					);
				}

				.dropdown-content {
					padding: 10px 10px 10px 10px;
					min-width: 120px;
					text-align: left;
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
					border-radius: 6px;
					backdrop-filter: blur(16px) saturate(180%);
					-webkit-backdrop-filter: blur(16px) saturate(180%);
					box-shadow:
						0 4px 24px 0 rgba(0, 0, 0, 0.18),
						0 1.5px 6px 0 rgba(0, 0, 0, 0.1);
				}

				cosmoz-input[type='number'] {
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
					border-radius: 6px;
					border: 1px solid #d1d1d6;
					box-shadow: 0 1px 2px 0 rgba(60, 60, 60, 0.04);
					padding: 2px 8px;
					margin-bottom: 6px;
					min-height: 28px;
					transition:
						border-color 0.2s,
						box-shadow 0.2s;
				}

				cosmoz-input[type='number']:focus-within {
					border-color: var(--cz-accent-color, #007aff);
					box-shadow: 0 0 0 1px rgba(0, 122, 255, 0.15);
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
				}
			</style>

			<cosmoz-clear-button
				@click=${()=>this.resetFilter()}
				?visible=${this.hasFilter()}
			></cosmoz-clear-button>
			<paper-dropdown-menu
				label=${this.title}
				placeholder=${J(this._filterText)}
				class="external-values-${this.externalValues}"
				title=${this._tooltip}
				horizontal-align="right"
				?opened=${this.headerFocused}
				@opened-changed=${e}
			>
				<div class="dropdown-content" slot="dropdown-content">
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-input
						class=${this._fromClasses}
						type="number"
						label=${I("From")}
						.value=${this._filterInput?.min}
						@value-changed=${i=>{this.set("_filterInput.min",i.detail.value)}}
						@blur=${i=>this._onBlur(i)}
						@keydown=${i=>this._onKeyDown(i)}
						min=${this._toInputString(this._limit.fromMin)}
						max=${this._toInputString(this._limit.fromMax)}
					></cosmoz-input>
					<cosmoz-input
						class=${this._toClasses}
						type="number"
						label=${I("To")}
						.value=${this._filterInput?.max}
						@value-changed=${i=>{this.set("_filterInput.max",i.detail.value)}}
						@blur=${i=>this._onBlur(i)}
						@keydown=${i=>this._onKeyDown(i)}
						min=${this._toInputString(this._limit.toMin)}
						max=${this._toInputString(this._limit.toMax)}
					></cosmoz-input>
				</div>
			</paper-dropdown-menu>
		`}_computeFormatter(e,i,n){const r={localeMatcher:"best fit"};return i!==null&&(r.minimumFractionDigits=i),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}getComparableValue(e,i){if(e==null)return;let n=e;if(i!=null&&(n=this.get(i,e)),n=this.toValue(n),n==null)return;const r=this.maximumFractionDigits;return r!==null?this.toValue(n.toFixed(r)):n}renderValue(e,i=this.formatter){const n=this.toNumber(e);if(n!=null)return i.format(n)}}customElements.define("cosmoz-omnitable-number-range-input",Ag);class Eg extends Se(K){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},cellClass:{type:String,value:"number-cell align-right"},width:{type:String,value:"30px"},minWidth:{type:String,value:"30px"},headerCellClass:{type:String,value:"number-header-cell"},maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,i){const n=dt({...e,valuePath:"min"},i),r=dt({...e,valuePath:"max"},i);if(!(n==null&&r==null))return Jm(e,i)}getString(e,i){return vr(e,i)}toXlsxValue({valuePath:e},i){return k(i,e)}cellTitleFn(e,i){return vr(e,i)}getComparableValue(e,i){return dt(e,i)}serializeFilter(e,i){if(i==null)return;const n=ce(i.min),r=ce(i.max);if(!(n==null&&r==null))return gs(n)+"~"+gs(r)}deserializeFilter(e,i){if(i==null||i==="")return null;const n=i.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:ce(n[1]),max:ce(n[2])}:null}renderCell(e,{item:i}){return _`<div class="omnitable-cell-number">
			${vr(e,i)}
		</div>`}renderEditCell(e,{item:i},n){return _`<cosmoz-input
			no-label-float
			type="number"
			@change=${o=>n(o.target.value)}
			.value=${Gm(e,i)}
		></cosmoz-input>`}renderHeader({title:e,min:i,max:n,limits:r,locale:o,maximumFractionDigits:a,minimumFractionDigits:s,autoupdate:l},{filter:c},u,d){return _`<cosmoz-omnitable-number-range-input
			.title=${e}
			.filter=${c}
			.values=${d}
			.min=${i}
			.max=${n}
			.limits=${r}
			.locale=${o}
			.maximumFractionDigits=${a}
			.minimumFractionDigsits=${s}
			.autoupdate=${l}
			@filter-changed=${({detail:{value:p}})=>u(h=>({...h,filter:p}))}
			@header-focused-changed=${({detail:{value:p}})=>u(h=>({...h,headerFocused:p}))}
		></cosmoz-omnitable-number-range-input>`}computeSource(e,i){return vi(e,i)}}customElements.define("cosmoz-omnitable-column-number",Eg);const eu="1970-01-01",Ze=(t,e,i)=>{const n=typeof t=="string"&&t.length>3&&t.length<=9?Wo(eu+"T"+t):t;return Q(n)},Fi={},Mg=t=>{const e=t||"";if(Fi[e])return Fi[e];const i={hour:"numeric",minute:"numeric",second:"numeric"};return Fi[e]=new Intl.DateTimeFormat(t||void 0,i),Fi[e]},Vt=({valuePath:t,locale:e},i)=>{const n=Ze(k(i,t));return n===void 0?"":n===null?"Invalid Date":Go(n,Mg(e))},kg=(t,e)=>t.valuePath?Vt(t,e):"",Lg=t=>{const e=Ze(t);return e==null?null:Yn(e).slice(11,19)},ht=({valuePath:t},e)=>{if(e==null)return;let i=Lg(t==null?e:k(e,t));if(i!=null&&(i=Ze(Wo(eu+"T"+i)),i!=null))return ce(i.getTime())},$g=(t,e)=>i=>{const n=ht(t,i);if(n==null)return!1;const r=ht({...t,valuePath:"min"},e),o=ht({...t,valuePath:"max"},e);return!(n<r||n>o)},$s=t=>{const e=Ze(t);return e==null?"":e.toISOString().slice(11,19).replace(/:/gu,".")},Os=t=>{if(!(t==null||t===""))return Ze(t.replace(/\./gu,":")+"Z")};class Og extends Ko(_i(K)){render(){return _`
			<style>
				paper-dropdown-menu {
					--iron-icon-width: 0;
					display: block;
				}
			</style>

			<cosmoz-clear-button
				@click=${()=>this.resetFilter()}
				?visible=${this.hasFilter()}
			></cosmoz-clear-button>
			<paper-dropdown-menu
				label=${this.title}
				placeholder=${J(this._filterText)}
				class="external-values-${this.externalValues}"
				title=${this._tooltip}
				horizontal-align="right"
				?opened=${this.headerFocused}
				@opened-changed=${e=>this.set("headerFocused",e.detail.value)}
			>
				>
				<div
					class="dropdown-content"
					slot="dropdown-content"
					style="padding: 15px; min-width: 100px;"
				>
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-input
						type="time"
						label=${I("From time")}
						step=${this.filterStep}
						.value=${this._filterInput.min}
						@value-changed=${e=>this.set("_filterInput.min",e.detail.value)}
					></cosmoz-input>
					<cosmoz-input
						type="time"
						label=${I("Until time")}
						step=${this.filterStep}
						.value=${this._filterInput.max}
						@value-changed=${e=>this.set("_filterInput.max",e.detail.value)}
					></cosmoz-input>
				</div>
			</paper-dropdown-menu>
		`}get _fixedDate(){return"1970-01-01"}toDate(e,i,n){const r=typeof e=="string"&&e.length>3&&e.length<=9?this.getAbsoluteISOString(this._fixedDate+"T"+e):e;return super.toDate(r,i,n)}_toInputString(e){const i=this.toValue(e);return i==null?null:this._toLocalISOString(i).slice(11,19)}getComparableValue(e,i){if(e==null)return;let n=this._toInputString(i==null?e:this.get(i,e));if(n!=null&&(n=this.toValue(this.getAbsoluteISOString(this._fixedDate+"T"+n)),n!=null))return this.toNumber(n.getTime())}_timeValueChanged(e){const i=e.target,n=i.value,r=e.model.item,o=this.toDate(r.date),a=this.toDate(o!=null?o.toISOString().slice(0,10)+"T"+n:n),s=l=>l;a==null&&(this.set(this.valuePath,a,r),this._fireItemChangeEvent(r,this.valuePath,o,s.bind(this)))}_computeFormatter(e){const i={hour:"numeric",minute:"numeric",second:"numeric"};return new Intl.DateTimeFormat(e||void 0,i)}}customElements.define("cosmoz-omnitable-time-range-input",Og);class Tg extends Se(K){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"time-header-cell"},minWidth:{type:String,value:"63px"},width:{type:String,value:"210px"},flex:{type:String,value:"0"},filterStep:{type:String,value:"1"}}}getFilterFn(e,i){const n=ht({...e,valuePath:"min"},i),r=ht({...e,valuePath:"max"},i);if(!(n==null&&r==null))return $g(e,i)}getString(e,i){return Vt(e,i)}toXlsxValue(e,i){return kg(e,i)}cellTitleFn(e,i){return Vt(e,i)}getComparableValue(e,i){return ht(e,i)}serializeFilter(e,i){if(i==null)return;const n=Ze(i.min),r=Ze(i.max);if(!(n==null&&r==null))return $s(n)+"~"+$s(r)}deserializeFilter(e,i){if(i==null||i==="")return null;const n=i.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Os(n[1]),max:Os(n[2])}:null}renderCell(e,{item:i}){return Vt(e,i)}renderEditCell(e,{item:i},n){return _`<cosmoz-input
			no-label-float
			type="text"
			@change=${o=>n(o.target.value)}
			.value=${Vt(e,i)}
		></cosmoz-input>`}renderHeader({title:e,min:i,max:n,locale:r,filterStep:o},{filter:a},s,l){return _`<cosmoz-omnitable-time-range-input
			.title=${e}
			.filter=${a}
			.values=${l}
			.min=${i}
			.max=${n}
			.locale=${r}
			.filterStep=${o}
			@filter-changed=${({detail:{value:c}})=>s(u=>({...u,filter:c}))}
			@header-focused-changed=${({detail:{value:c}})=>s(u=>({...u,headerFocused:c}))}
		></cosmoz-omnitable-time-range-input>`}computeSource(e,i){return vi(e,i)}}customElements.define("cosmoz-omnitable-column-time",Tg);const tu=["T"," "],Ts=t=>{if(!t||typeof t!="string")return;let e;return tu.some(i=>t.match(i)?(e=t.split(i),!0):!1),e||[t]},Pg=(t,e)=>{const i=Ts(t),n=Ts(e);return{minDate:Array.isArray(i)?i.shift():null,minTime:Array.isArray(i)?i.shift():null,maxDate:Array.isArray(n)?n.shift():null,maxTime:Array.isArray(n)?n.shift():null}},Ps=(t,e)=>{if(!(!t&&!e))return!t&&e?`T${e}`:t&&!e?t:`${t}T${e}`},Ig=t=>{if(t){for(const e of tu)if(t.match(e)){const i=t.split(e);return{date:i.shift(),time:i.shift()}}return{date:t}}},Hg=t=>{const{dateLabel:e,timeLabel:i,min:n,max:r,step:o="1",value:a}=t,{minDate:s,maxDate:l,minTime:c,maxTime:u}=M(()=>Pg(n,r),[n,r]),{date:d,time:p}=M(()=>Ig(a)??{},[a]);return $(()=>{t.dispatchEvent(new CustomEvent("cosmoz-datetime-input-value-changed",{bubbles:!0,composed:!0}))},[a]),_`
		<style>
			:host {
				display: flex;
				flex-direction: row;
			}
		</style>
		<cosmoz-input
			label="${e}"
			type="date"
			.value="${d}"
			@value-changed="${h=>Pe(t,"value",Ps(h.target.value,p))}"
			.min="${s}"
			.max="${l}"
		></cosmoz-input>
		<cosmoz-input
			label="${i}"
			type="time"
			.value="${p}"
			@value-changed="${h=>Pe(t,"value",Ps(d,h.target.value))}"
			step="${o}"
			.min="${c}"
			.max="${u}"
		></cosmoz-input>
	`};customElements.define("cosmoz-datetime-input",V(Hg,{observedAttributes:["date-label","time-label","min","max","step"]}));const Ni={},Rg=t=>{const e=t||"";if(Ni[e])return Ni[e];const i={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return Ni[e]=new Intl.DateTimeFormat(t||void 0,i),Ni[e]},Vi=({valuePath:t,locale:e},i)=>{const n=Q(k(i,t));return n===void 0?"":n===null?"Invalid Date":Go(n,Rg(e))},Fg=({valuePath:t},e)=>t?k(e,t):"",Is=t=>{const e=Q(t);return e==null?"":e.toISOString().slice(0,19).replace(/:/gu,".")},Hs=t=>{if(!(t==null||t===""))return Q(t.replace(/\./gu,":")+"Z")};class Ng extends Ko(_i(K)){render(){return _`
			<style>
				paper-dropdown-menu {
					--iron-icon-width: 0;
					display: block;
					text-align: right;
				}

				.dropdown-content h3 {
					font-weight: 500;
					font-size: 13px;
					margin: 0;
					font-family: var(
						--cosmoz-input-font-family,
						var(--paper-font-subhead_-_font-family, 'Inter', sans-serif)
					);
				}

				.dropdown-content {
					padding: 10px 10px 10px 10px;
					min-width: 120px;
					text-align: left;
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
					border-radius: 6px;
					backdrop-filter: blur(16px) saturate(180%);
					-webkit-backdrop-filter: blur(16px) saturate(180%);
					box-shadow:
						0 4px 24px 0 rgba(0, 0, 0, 0.18),
						0 1.5px 6px 0 rgba(0, 0, 0, 0.1);
				}

				cosmoz-datetime-input {
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
					border-radius: 6px;
					border: 1px solid #d1d1d6;
					box-shadow: 0 1px 2px 0 rgba(60, 60, 60, 0.04);
					padding: 2px 8px;
					margin-bottom: 6px;
					min-height: 28px;
					transition:
						border-color 0.2s,
						box-shadow 0.2s;
				}

				cosmoz-datetime-input:focus-within {
					border-color: var(--cz-accent-color, #007aff);
					box-shadow: 0 0 0 1px rgba(0, 122, 255, 0.15);
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
				}
			</style>

			<cosmoz-clear-button
				@click=${()=>this.resetFilter()}
				?visible=${this.hasFilter()}
			></cosmoz-clear-button>
			<paper-dropdown-menu
				label=${this.title}
				placeholder=${J(this._filterText)}
				class="external-values-${this.externalValues}"
				title=${this._tooltip}
				horizontal-align="right"
				?opened=${this.headerFocused}
				@opened-changed=${e=>this.set("headerFocused",e.detail.value)}
			>
				<div class="dropdown-content" slot="dropdown-content">
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-datetime-input
						date-label=${I("From date")}
						time-label=${I("From time")}
						min=${this._toInputString(this._limit.fromMin)}
						max=${this._toInputString(this._limit.fromMax)}
						step=${this.filterStep}
						.value=${this._filterInput?.min}
						@value-changed=${e=>this.set("_filterInput.min",e.detail.value)}
					></cosmoz-datetime-input>
					<cosmoz-datetime-input
						date-label=${I("To date")}
						time-label=${I("To time")}
						min=${this._toInputString(this._limit.toMin)}
						max=${this._toInputString(this._limit.toMax)}
						step=${this.filterStep}
						.value=${this._filterInput?.max}
						@value-changed=${e=>this.set("_filterInput.max",e.detail.value)}
					></cosmoz-datetime-input>
				</div>
			</paper-dropdown-menu>
		`}_toInputString(e){const i=this.toValue(e);if(i!=null)return this._toLocalISOString(i).slice(0,19)}_computeFormatter(e){const i={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return new Intl.DateTimeFormat(e||void 0,i)}}customElements.define("cosmoz-omnitable-datetime-range-input",Ng);class Rs extends Se(K){static get is(){return"cosmoz-omnitable-column-datetime"}static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"datetime-header-cell"},width:{type:String,value:"210px"},minWidth:{type:String,value:"128px"},flex:{type:String,value:"0"},filterStep:{type:Number,value:1}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,i){const n=Me({...e,valuePath:"min"},i),r=Me({...e,valuePath:"max"},i);if(!(n==null&&r==null))return Qc(e,i)}getString(e,i){return Vi(e,i)}toXlsxValue(e,i){return Fg(e,i)}cellTitleFn(e,i){return Vi(e,i)}getComparableValue(e,i){return Me(e,i)}serializeFilter(e,i){if(i==null)return;const n=Q(i.min),r=Q(i.max);if(!(n==null&&r==null))return Is(n)+"~"+Is(r)}deserializeFilter(e,i){if(i==null||i==="")return null;const n=i.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Hs(n[1]),max:Hs(n[2])}:null}renderCell(e,{item:i}){return Vi(e,i)}renderEditCell(e,{item:i},n){return _`<cosmoz-input
			no-label-float
			type="text"
			@change=${o=>n(Zc(o.target.value))}
			.value=${Vi(e,i)}
		></cosmoz-input>`}renderHeader({title:e,min:i,max:n,limits:r,locale:o,filterStep:a},{filter:s},l,c){return _`<cosmoz-omnitable-datetime-range-input
			.title=${e}
			.filter=${s}
			.values=${c}
			.min=${i}
			.max=${n}
			.limits=${r}
			.locale=${o}
			.filterStep=${a}
			@filter-changed=${({detail:{value:u}})=>l(d=>({...d,filter:u}))}
			@header-focused-changed=${({detail:{value:u}})=>l(d=>({...d,headerFocused:u}))}
		></cosmoz-omnitable-datetime-range-input>`}computeSource(e,i){return vi(e,i)}}customElements.define(Rs.is,Rs);const Vg=({column:t,item:e,selected:i,folded:n,group:r})=>t?(t.renderGroup??t.renderCell)(t,{item:e,selected:i,folded:n,group:r}):ne;customElements.define("cosmoz-omnitable-group-row",V(Vg,{useShadowDOM:!1}));const Dg=t=>{const{column:e}=t;return $(()=>{let i=0,n=0;const r=s=>{t.dispatchEvent(new CustomEvent("column-resize",{bubbles:!0,composed:!0,detail:{newWidth:Math.ceil(n+s.pageX-i),column:e}}))},o=()=>{document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",o)},a=s=>{i=s.pageX,n=t.previousElementSibling.getBoundingClientRect().width,document.addEventListener("pointermove",r),document.addEventListener("pointerup",o)};return t.addEventListener("pointerdown",a),()=>t.removeEventListener("pointerdown",a)},[e]),ne};customElements.define("cosmoz-omnitable-resize-nub",V(Dg));const qg=_`<svg
	width="10"
	height="9"
	viewBox="0 0 10 9"
	stroke="currentColor"
	xmlns="http://www.w3.org/2000/svg"
>
	<line
		x1="8.53033"
		y1="0.53033"
		x2="1.53033"
		y2="7.53033"
		stroke-width="1.5"
	/>
	<line
		x1="8.46967"
		y1="7.53033"
		x2="1.46967"
		y2="0.530331"
		stroke-width="1.5"
	/>
</svg>`,Bg=_`
	<svg
		width="16"
		height="6"
		viewBox="0 0 16 6"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect width="16" height="2" />
		<rect y="4" width="16" height="2" />
	</svg>
`,Sr=_` <svg
	width="12"
	height="7"
	viewBox="0 0 12 7"
	fill="none"
	stroke="currentColor"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M0.999998 0.999999L6 6L11 1"
		stroke-width="1.5"
		stroke-linejoin="round"
	/>
</svg>`,jg=_`<svg
	width="8"
	height="6"
	viewBox="0 0 8 6"
	fill="currentColor"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M0.5,0.5h7c0.4,0,0.6,0.4,0.4,0.7L4.4,5.3c-0.2,0.2-0.5,0.2-0.7,0L0.1,1.2
		C-0.1,0.9,0.1,0.5,0.5,0.5z"
	/>
</svg> `,iu=({column:t,on:e,descending:i,setOn:n,setDescending:r})=>{const{name:o,title:a}=t??{};return _`<button
		class="sg"
		title=${a}
		data-on=${J(o===e&&(i?"desc":"asc")||void 0)}
		@click=${s=>{const l=s.currentTarget?.dataset.on;l||(n(o),r(!1)),l==="asc"?r(!0):l==="desc"&&(n(),r(!1))}}
	>
		<span>${a}</span> ${jg}
	</button>`},nu=({columns:t,...e})=>t?.map(i=>iu({column:i,...e})),Ug=()=>_`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:t,groupOn:e,setGroupOn:i,groupOnDescending:n,setGroupOnDescending:r}={})=>nu({columns:t?.filter?.(o=>o.groupOn),on:e,setOn:i,descending:n,setDescending:r})}
	>
	</sort-and-group-consumer>
`,Kg=()=>_`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:t,sortOn:e,setSortOn:i,descending:n,setDescending:r}={})=>nu({columns:t?.filter?.(o=>o.sortOn),on:e,setOn:i,descending:n,setDescending:r})}
	>
	</sort-and-group-consumer>
`,Wg=t=>e=>{const i=e.match(t);return i&&{result:i,url:new URL(e,document.location.origin)}},Gg=(t,e)=>{for(const i of t){const n=i.rule,r=typeof n=="function"?n(e):Wg(n)(e);if(r)return{...i,route:i,match:r,url:e}}},Fs=()=>window.location.href.replace(window.location.origin,""),Yg=()=>{const[t,e]=U(Fs);return $(()=>{const i=()=>e(Fs);return window.addEventListener("popstate",i),()=>window.removeEventListener("popstate",i)},[e]),t},Jg=t=>{const e=Yg();return M(()=>Gg(t,e),[t,e])},Xg=(t,e=null,{notify:i=!0,replace:n=!0}={})=>{(n?history.replaceState:history.pushState).call(history,e,"",t),i&&queueMicrotask(()=>window.dispatchEvent(new CustomEvent("popstate",{bubbles:!1})))},Zg=t=>{const e=Jg(t);return{route:e,result:M(()=>{if(e){const{handle:i,...n}=e;return i(n)}},[e])}},Di=(t,e,i)=>t.dispatchEvent(new CustomEvent(e,{bubbles:!1,cancelable:!1,composed:!0,...i})),Qg=(t,e,i)=>{$(()=>{if(!i){Di(t,"route-not-found");return}Di(t,"route-loading",{detail:e}),Promise.resolve(i).then(()=>Di(t,"route-loaded",{detail:e})).catch(n=>Di(t,"route-error",{detail:{route:e,error:n}}))},[i])},e0=t=>{const e=t.routes,{route:i,result:n}=Zg(e);return Qg(t,i,n),uo([n],()=>nn(Promise.resolve(n).catch(()=>ne),ne))};customElements.define("cosmoz-router",V(e0));const Yo=()=>new URL(location.hash.replace(/^#!?/iu,"").replace("%23","#"),location.origin),t0=(t,e=Ke)=>{const i=new URLSearchParams(Yo().hash.replace("#","")).getAll(t);switch(i.length){case 0:return;case 1:return e(i[0]);default:return i.map(e)}},i0=(t,e=Ke)=>{const i=Array.from(new URLSearchParams(Yo().hash.replace("#","")).entries()).filter(([n])=>n.startsWith(t)).map(([n,r])=>e([n.replace(t,""),r])).filter(([,n])=>n!=null);return Object.fromEntries(i)},ru=t=>(e,i,n=Ke)=>{const r=Yo(),o=new URLSearchParams(r.hash.replace("#",""));return t(e,i,n,o),"#!"+Object.assign(r,{hash:o}).href.replace(location.origin,"")},ou=t=>t==null||t==="",n0=ru((t,e,i,n)=>ou(i(e))?n.delete(t):n.set(t,i(e))),r0=ru((t,e,i,n)=>Object.entries(e).map(i).forEach(([r,o])=>ou(o)?n.delete(t+r):n.set(t+r,o))),Dt=(t,e,{suffix:i="",read:n,write:r,multi:o}={})=>{const[a,s]=o?[r0,i0]:[n0,t0],[l,c]=U(()=>e==null?t:s(e+i,n)??t),u=z(d=>c(p=>{const h=Vn(d,p);return e!=null&&Xg(a(e+i,h,r),null,{notify:!1}),h}),[e,i,a,r]);return[l,u]},o0=t=>[!0,"true",1,"yes","on"].includes(t),qi=t=>t===""||(t==null?void 0:o0(t)),Bi=(t,e,i)=>z(n=>{t(n),i(r=>({...r,[e]:n}))},[t,e,i]),a0=(t,e,i,n,r)=>{const[o,a]=Dt(i.sortOn,e,{suffix:"-sortOn"}),[s,l]=Dt(qi(i.descending),e,{suffix:"-descending",read:qi}),[c,u]=Dt(i.groupOn,e,{suffix:"-groupOn"}),[d,p]=Dt(qi(i.groupOnDescending),e,{suffix:"-groupOnDescending",read:qi}),h=M(()=>t.find(g=>g.name===o),[t,o]),f=M(()=>t.find(g=>g.name===c),[t,c]),m={groupOn:c,setGroupOn:Bi(u,"groupOn",n),groupOnDescending:d,setGroupOnDescending:Bi(p,"groupOnDescending",n),sortOn:o,setSortOn:Bi(a,"sortOn",n),descending:s,setDescending:Bi(l,"descending",n),columns:t},b=M(()=>m,Object.values(m)),y=z(g=>{a(g.sortOn),u(g.groupOn),l(g.descending),p(g.groupOnDescending)},[]);return $(()=>void(r.current=y),[]),{...b,sortAndGroup:b,groupOnColumn:f,sortOnColumn:h}},Jo=co();customElements.define("sort-and-group-provider",Jo.Provider);customElements.define("sort-and-group-consumer",V(({render:t})=>t(fi(Jo)),{useShadowDOM:!1}));const s0=({data:t,columns:e,groupOnColumn:i,filters:n,setFilterState:r,sortAndGroup:{sortOn:o,setSortOn:a,descending:s,setDescending:l}={}})=>No(e,c=>c.name,c=>[_`<div
					class="cell ${c.headerCellClass} header-cell"
					part="cell header-cell cell-${c.name} header-cell-${c.name}"
					?hidden="${c===i}"
					title="${c.title}"
					name="${c.name}"
				>
					${c.renderHeader(c,n[c.name]??{},u=>r(c.name,u),c.source(c,t))}
					${iu({on:o,setOn:a,descending:s,setDescending:l,column:c})}
				</div>`,_`<cosmoz-omnitable-resize-nub
					.column="${c}"
					name="${c.name}"
				></cosmoz-omnitable-resize-nub>`]),l0=({columns:t,settingsConfig:e,hideSelectAll:i,...n})=>{const r=fi(Jo);return _`
		${G(t,o=>s0({columns:o,sortAndGroup:r,...n}))}
		${G(!i,()=>_` <cosmoz-omnitable-settings
					.config=${e}
					part="settings"
				></cosmoz-omnitable-settings>`)}
	`};customElements.define("cosmoz-omnitable-header-row",V(l0,{useShadowDOM:!1}));const c0=fe`
	:host {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}

	.label {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		flex: initial;
		align-self: start;
	}

	.value {
		text-align: right;
		flex-grow: 1;
		flex-basis: 100px;
		white-space: nowrap;
	}
`,u0=({column:t})=>_`
	<div class="label" title="${t.title}" part="item-expand-label">
		${t.title}
	</div>
	<div class="value" part="item-expand-value">
		<slot></slot>
	</div>
`;customElements.define("cosmoz-omnitable-item-expand-line",V(u0,{styleSheets:[zt(c0)]}));const d0=({columns:t,item:e,selected:i,expanded:n,groupOnColumn:r})=>Gs(t,o=>_`<cosmoz-omnitable-item-expand-line
				.column=${o}
				?hidden=${o===r}
				exportparts="item-expand-label, item-expand-value"
				>${o.renderCell(o,{item:e,selected:i,expanded:n})}</cosmoz-omnitable-item-expand-line
			>`);customElements.define("cosmoz-omnitable-item-expand",V(d0,{useShadowDOM:!1}));const p0=(t,e,i)=>t.editable?t.renderEditCell(t,e,i(t,e.item)):t.renderCell(t,e),h0=({columns:t,groupOnColumn:e,item:i,index:n,selected:r,expanded:o,onItemChange:a})=>No(t,s=>s.name,s=>_`<div
				class="cell itemRow-cell ${s.cellClass??""}"
				part="cell itemRow-cell cell-${s.name} itemRow-cell-${s.name}"
				?hidden="${s===e}"
				?editable="${s.editable}"
				title="${s.cellTitleFn(s,i)}"
				name="${s.name}"
			>
				${p0(s,{item:i,index:n,selected:r,expanded:o},a)}
			</div>`);customElements.define("cosmoz-omnitable-item-row",V(h0,{useShadowDOM:!1}));const au=fe`
	.checkbox {
		box-sizing: border-box;
		width: 18px;
		height: 18px;
		background: transparent;
		border-radius: 4px;
		appearance: none;
		-webkit-appearance: none;
		outline: none;
		position: relative;
		user-select: none;
		cursor: pointer;
		display: inline-block;
		box-shadow: 0 0 0 2px
			var(--cosmoz-omnitable-checkbox-shadow-color, rgba(0, 0, 0, 0.16)) inset;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		vertical-align: middle;
		transition: background-color 140ms;
		margin: 1px 12px;
		flex: none;
	}

	.checkbox:checked {
		background-color: var(
			--cosmoz-omnitable-checkbox-checked-color,
			var(--primary-color)
		);
		box-shadow: none;
	}

	.checkbox:checked::before {
		content: '';
		position: absolute;
		box-sizing: content-box;
		width: 5px;
		height: 10px;
		border: 2.4px solid
			var(--cosmoz-omnitable-checkbox-checked-tick-color, #fff);
		border-top: none;
		border-left: none;
		transform-origin: 5px 10px;
		transform: translate(3px) rotate(45deg);
	}

	.checkbox::after {
		content: '';
		display: block;
		bottom: -5px;
		left: -5px;
		right: -5px;
		top: -5px;
	}

	.checkbox:hover {
		box-shadow:
			0 0 0 2px
				var(--cosmoz-omnitable-checkbox-shadow-color-hover, rgba(0, 0, 0, 1))
				inset,
			0 0 2px 6px #2021240f;
	}

	.checkbox:checked:hover {
		box-shadow: 0 0 2px 6px #2021240f;
	}

	.checkbox:indeterminate::before {
		content: '';
		position: absolute;
		width: 10px;
		height: 2px;
		left: 4px;
		top: 8px;
		background-color: var(
			--cosmoz-omnitable-checkbox-checked-color,
			var(--primary-color)
		);
	}
`,f0=fe`
	:host {
		display: flex;
		flex-direction: column;
		position: relative;
		overflow: hidden;
		color: var(--cosmoz-omnitable-text-color, rgb(89, 102, 121));
	}
	:host a {
		color: var(--primary-link-color, inherit);
		text-decoration: var(--cosmoz-omnitable-link-decoration, underline);
	}
	:host a:hover {
		text-decoration: var(
			--cosmoz-omnitable-link-decoration-hover,
			var(--cosmoz-omnitable-link-decoration, underline)
		);
		color: var(--primary-link-color-hover, var(--primary-link-color));
	}

	/* The wrapping div that contains the header, the table content and the footer */
	.mainContainer {
		background-color: var(--cosmoz-omnitable-bg-color, rgb(255, 255, 255));
		display: flex;
		flex-direction: column;
		flex: auto;
	}

	#columns {
		display: none;
	}

	.header {
		position: relative;
		display: flex;
		align-items: flex-end;
		background-color: var(--cosmoz-omnitable-header-bg-color, inherit);
		border-top-left-radius: var(--cosmoz-omnitable-header-border-radius-top-left, 8px);
		border-top-right-radius: var(--cosmoz-omnitable-header-border-radius-top-right, 8px);
		border-bottom-left-radius: var(--cosmoz-omnitable-header-border-radius-bottom-left, 2px);
		border-bottom-right-radius: var(--cosmoz-omnitable-header-border-radius-bottom-right, 2px);
	}

	[hidden] {
		display: none;
	}

	cosmoz-grouped-list-row {
		width: 100%;
	}

	cosmoz-omnitable-header-row .external-values-false {
		--paper-input-container-color: var(
			--cosmoz-omnitable-local-filter-header-color
		);
	}

	cosmoz-omnitable-header-row .external-values-true {
		--paper-input-container-color: var(
			--cosmoz-omnitable-remote-filter-header-color
		);
	}

	.header > cosmoz-omnitable-header-row {
		flex: auto;
	}

	.header-cell {
		--paper-input-container: {
			padding-top: 0;
			padding-bottom: 1px;
			--paper-font-caption_-_line-height: 18px;
		}
		--paper-input-container-underline: {
			border-color: var(--cosmoz-omnitable-header-line-color);
		}
		--paper-input-container-underline-focus {
			border-color: var(--cosmoz-omnitable-header-line-focused-color);
		}

		--paper-font-subhead_-_font-family: var(
			--cosmoz-omnitable-header-font-family,
			'Roboto',
			'Noto',
			sans-serif
		);
		text-transform: var(--cosmoz-omnitable-header-text-transform, none);
		--paper-font-subhead_-_font-weight: var(
			--cosmoz-omnitable-header-font-weight,
			normal
		);
		--paper-font-subhead_-_font-size: var(
			--cosmoz-omnitable-header-font-size,
			16px
		);
		--cosmoz-input-padding: var(--cosmoz-omnitable-header-input-padding, 0);
		--cosmoz-input-label-text-transform: var(--cosmoz-omnitable-header-text-transform, none);
		--cosmoz-input-label-font-weight: var(--cosmoz-omnitable-header-font-weight, normal);
		--cosmoz-input-line-color: var(--cosmoz-omnitable-header-line-color);
		--cosmoz-input-focused-color: var(--cosmoz-omnitable-header-line-focused-color);
	}

	cosmoz-omnitable-header-row {
		white-space: nowrap;
	}

	cosmoz-omnitable-header-row > div {
		display: inline-block;
		box-sizing: border-box;
		padding: 0 3px;
		white-space: nowrap;
		text-overflow: ellipsis;
		vertical-align: bottom;
	}
	cosmoz-omnitable-header-row > div[hidden] {
		display: none !important;
	}

	cosmoz-omnitable-resize-nub {
		display: inline-block;
		position: absolute;
		bottom: 2px;
		width: 7px;
		height: 30px;
		margin-left: -3px;
		background: transparent;
		cursor: ew-resize;
		z-index: 1000;
		user-select: none;
	}

	.time-header-cell,
	.datetime-header-cell,
	.date-header-cell,
	.amount-header-cell,
	.number-header-cell {
		position: relative;
	}

	cosmoz-omnitable-item-row {
		display: flex;
		white-space: nowrap;
	}

	cosmoz-omnitable-item-row > div {
		display: block;
		flex: none;
		padding: 0 3px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		box-sizing: border-box;
		align-self: center;
	}

	cosmoz-omnitable-item-row > div[hidden] {
		display: none !important;
	}

	.tableContent {
		overflow-y: auto;
		min-height: 40px;
		display: flex;
		flex-direction: column;
		position: relative;
		flex: auto;
	}

	/* Empty data set styling */
	.tableContent-empty {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #ccc;
	}
	.tableContent-empty.overlay {
		background-color: rgba(255, 255, 255, 0.8);
		color: #333;
		z-index: 1;
	}
	.tableContent-empty iron-icon {
		height: 96px;
		min-height: 96px;
		width: 96px;
		min-width: 96px;
		margin-right: 24px;
	}
	.tableContent-empty > div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-bottom: 24px;
	}
	.tableContent-empty.overlay > div {
		padding-bottom: 0;
	}
	.tableContent-empty.overlay:has(cosmoz-omnitable-skeleton) {
		align-items: flex-start;
	}
	.tableContent-empty div.tableContent-empty-message {
		@apply --layout-vertical;
		@apply --layout-center-justified;
		padding-bottom: 24px;
	}
	.tableContent-empty.overlay div.tableContent-empty-message {
		padding-bottom: 0;
	}
	.tableContent-empty p {
		font-size: 15px;
		color: #ddd;
		margin: 0;
	}
	.tableContent-empty h3 {
		white-space: nowrap;
		margin: 0px 0px 8px 0px;
	}

	/* End of empty data set styling */
	.tableContent-scroller {
		flex: auto;
		position: relative;
		overflow: auto;
		overflow-x: hidden;
		will-change: transform;
		flex-basis: 0.000001px;
		display: flex;
		flex-direction: column;
	}

	.itemRow {
		border-bottom-color: var(--cosmoz-omnitable-border-color, #e1e2e5);
		border-bottom-width: 1px;
		border-bottom-style: var(
			--cosmoz-omnitable-item-row-border-bottom-style,
			solid
		);
		/* set a min-height for rows so that rows with empty values are visible */
	}
	.itemRow-wrapper {
		display: flex;
		align-items: center;
		min-height: var(--item-row-min-height, 39px);
		padding-right: 8px;
	}

	.itemRow[selected] {
		background-color: var(
			--cosmoz-omnitable-selection-color,
			rgb(195, 212, 248)
		);
		@apply --cosmoz-omnitable-selected-row;
	}

	.tableContent .itemRow-cell paper-dropdown-menu {
		margin-top: -20px;

	}

	cosmoz-omnitable-item-expand[expanded] {
		display: flex;
		flex-direction: column;
		padding: 5px 4%;
		line-height: 1.3em;
		border-bottom: solid 1px var(--cosmoz-omnitable-border-color, #e1e2e5);
		background-color: #fafafa;
	}

	cosmoz-omnitable-item-expand:not([expanded]) {
		display: none;
	}

	.groupRow {
		display: flex;
		align-items: center;
		background-color: #f5f6f9;
		font-weight: 700;
		color: #101010;
		border-bottom: 1px solid var(--cosmoz-omnitable-border-color, #e1e2e5);
	}

	.groupRow-label {
		display: flex;
		flex: auto;
		align-items: center;
		flex-wrap: wrap;
		padding-left: 8px;
		margin: 0;
		font-size: 1.15em;
		font-weight: 400;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.groupRow-label > cosmoz-omnitable-group-row {
		flex: auto;
	}

	.groupRow-badge {
		background: #8be5c6;
		color: #fff;
		line-height: 30px;
		width: 30px;
		text-align: center;
		border-radius: 50%;
		font-size: 13px;
		font-weight: 500;
	}

	.rtl {
		direction: rtl;
	}

	.align-left {
		text-align: left;
	}

	.align-right {
		text-align: right;
	}

	cosmoz-bottom-bar {
		background-color: var(--cosmoz-omnitable-bottom-bar-color, #5f5a92);
		overflow: hidden;
	}
	cosmoz-bottom-bar::part(bar) {
		padding: 0 24px;
	}

	cosmoz-bottom-bar::slotted(*) {
		background-color: #4c4875;
		color: #fff;
		border-color: #fff;
	}

	cosmoz-bottom-bar::slotted([disabled]) {
		color: #b7b6c8;
		border-color: #b7b6c8;
		cursor: not-allowed;
	}

	.boolean-cell[editable] {
		overflow: initial;
	}

	.omnitable-cell-number, .omnitable-cell-date {
		font-variant-numeric: tabular-nums;
	}

	.itemRow:hover {
		box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0,
			0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
		background-color: var(--cosmoz-omnitable-row-hover-color);
	}
	.groupRow:hover .checkbox:not(:checked):not(:hover),
	.itemRow:hover .checkbox:not(:checked):not(:hover) {
		box-shadow: 0 0 0 2px var(--cosmoz-omnitable-checkbox-shadow-color-not-hover, rgba(0, 0, 0, 0.54))
		inset;
	}
	.groupRow:hover .expand:not(:hover),
	.itemRow:hover .expand:not(:hover) {
		color: rgba(0, 0, 0, 0.54);
	}

	${au}

	.all {
		margin-bottom: 6px;
	}

	.expand {
		width: 24px;
		height: 24px;
		padding: 0;
		flex: none;
		border: none;
		border-radius: 50%;
		cursor: pointer;
		background: none;
		transition: 0.15s background ease-in;
		outline: none;
		color: rgba(0, 0, 0, 0.16);
	}
	.expand svg {
		fill: currentColor;
	}
	.expand:not([aria-expanded]) svg {
		transform: scaleY(-1);
	}
	.expand:active {
		background: rgba(33, 33, 33, 0.25);
	}
	.expand:hover {
		color: #000;
	}
	.groupRow .expand {
		margin: 8px;
	}

	.sg {
		display: inline-flex;
		width: 10px;
		cursor: pointer;
		align-items: center;
		margin-top: 18px;
		overflow: hidden;
		flex: none;
		background: none;
		border: none;
		outline: none;
		color: inherit;
		padding: 0;
	}
	.sg span {
		display: none;
	}
	.sg svg {
		display: block;
	}
	.sg[data-on] {
		color: var(--cosmoz-omnitable-checkbox-checked-color, var(--primary-color));
	}
	.sg:not([data-on='desc']) {
		transform: scaleY(-1);
	}
	:not(:hover) > .sg:not([data-on]) {
		display: none;
	}
	.header-cell {
		display: inline-flex;
		position: relative;
	}
	.header-cell :not(.sg, cosmoz-clear-button) {
		min-width: 0;
		flex: auto;
	}

	:host([mini]) .itemRow .expand,
	:host([mini]) cosmoz-omnitable-item-expand {
		display: none;
	}

	.itemRow-minis {
		display: flex;
		justify-content: space-between;
		margin: 14px 12px 12px 12px;
		color: var(--cosmoz-omnitable-mini-color, #000);
	}

	:host([mini]) .itemRow {
		border-radius: 12px;
		border: 1px solid var(--cosmoz-omnitable-border-color, #e1e2e5);
		margin: 4px 8px;
		padding-top: 2px;
	}

	:host([mini]) .itemRow:not([selected]) {
		background: var(--cosmoz-omnitable-mini-item-background, #fdfdfd);
	}

	:host([mini]) .itemRow:hover {
		box-shadow: none;
	}

	:host([mini]) .header {
		margin: 0 8px;
	}

	:host([mini]) .tableContent {
		overflow: hidden;
	}

	:host([mini]) .tableContent-scroller::-webkit-scrollbar {
		width: 4px;
	}

	:host([mini]) .tableContent-scroller::-webkit-scrollbar-track {
		background: transparent;
	}

	:host([mini]) .tableContent-scroller::-webkit-scrollbar-thumb {
	background: transparent;
	}

	:host([mini]) .tableContent-scroller:hover::-webkit-scrollbar-thumb {
	background: var(--cosmoz-omnitable-mini-scrollbar-thumb-bg, #aaa);
	}

	:host([mini]) .tableContent-scroller::-webkit-scrollbar-button:decrement,
	:host([mini]) .tableContent-scroller::-webkit-scrollbar-button:increment {
	width: 0px;
	}

	:host([mini]) cosmoz-omnitable-settings::part(columns) {
		display:none;
	}
`;var me=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:void 0;function m0(t,e){return typeof e>"u"?e={autoBom:!1}:typeof e!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\uFEFF",t],{type:t.type}):t}function zr(t,e,i){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){hi(n.response,e,i)},n.onerror=function(){console.error("could not download file")},n.send()}function Ns(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch{}return e.status>=200&&e.status<=299}function ji(t){try{t.dispatchEvent(new MouseEvent("click"))}catch{var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var Vs=me.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),hi=me.saveAs||(typeof window!="object"||window!==me?function(){}:"download"in HTMLAnchorElement.prototype&&!Vs?function(e,i,n){var r=me.URL||me.webkitURL,o=document.createElement("a");i=i||e.name||"download",o.download=i,o.rel="noopener",typeof e=="string"?(o.href=e,o.origin!==location.origin?Ns(o.href)?zr(e,i,n):ji(o,o.target="_blank"):ji(o)):(o.href=r.createObjectURL(e),setTimeout(function(){r.revokeObjectURL(o.href)},4e4),setTimeout(function(){ji(o)},0))}:"msSaveOrOpenBlob"in navigator?function(e,i,n){if(i=i||e.name||"download",typeof e=="string")if(Ns(e))zr(e,i,n);else{var r=document.createElement("a");r.href=e,r.target="_blank",setTimeout(function(){ji(r)})}else navigator.msSaveOrOpenBlob(m0(e,n),i)}:function(e,i,n,r){if(r=r||open("","_blank"),r&&(r.document.title=r.document.body.innerText="downloading..."),typeof e=="string")return zr(e,i,n);var o=e.type==="application/octet-stream",a=/constructor/i.test(me.HTMLElement)||me.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||o&&a||Vs)&&typeof FileReader<"u"){var l=new FileReader;l.onloadend=function(){var d=l.result;d=s?d:d.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=d:location=d,r=null},l.readAsDataURL(e)}else{var c=me.URL||me.webkitURL,u=c.createObjectURL(e);r?r.location=u:location.href=u,r=null,setTimeout(function(){c.revokeObjectURL(u)},4e4)}});me.saveAs=hi.saveAs=hi;const Ds=t=>{const e=t.replace(/"/gu,'""');return e.search(/("|,|\n)/gu)>=0?'"'+e+'"':t},g0=(t,e,i)=>{const n=";",r=`
`,o=t.map(s=>Ds(s.title)).join(n)+r,a=e.map(s=>t.map(l=>{const c=l.getString(l,s);return c==null?"":Ds(String(c))}).join(n)+r);a.unshift(o),hi(new File(a,i,{type:"text/csv;charset=utf-8"}))},rn=function(t){t&&console.log(t)};class su{constructor(e,i){this._filename=e,this.buffer=null,this.lastDownloadBlobUrl=null,this._mimeType=i}generate(){}createDownloadUrl(){this.buffer||this.generate();const e=new Blob([this.buffer],{type:this._mimeType});return this.lastDownloadBlobUrl&&window.URL.revokeObjectURL(this.lastDownloadBlobUrl),this.lastDownloadBlobUrl=URL.createObjectURL(e),this.lastDownloadBlobUrl}createDownloadLink(e){const i=e instanceof HTMLAnchorElement?e:document.createElement("a");return typeof e=="string"&&(i.innerHTML=e),i.href=this.createDownloadUrl(),i.download=this._filename,i.hasChildNodes||(i.innerText=this._filename),rn("Link created for file "+this._filename),i}}let Ui=null;class b0 extends su{constructor(e,i){super(e,"application/zip"),this.files=[],this.createFolderEntries=!!i;const n=new Date;this.timeInt=Math.round(n.getSeconds()/2)|n.getMinutes()<<5|n.getHours()<<11,this.dateInt=n.getFullYear()-1980<<9|n.getMonth()+1<<5|n.getDate()}addFileFromString(e,i){const n=new TextEncoder("utf-8").encode(i);return this.addFileFromUint8Array(e,n),this}addFileFromUint8Array(e,i){if(!(i instanceof Uint8Array))throw new Error("invalid parameter");return this.files.push({name:e.replace("\\","/"),data:i}),this}generate(){rn("NullZip archive generation started");const e={};for(const c of this.files)c.size=c.data?c.data.byteLength:0,c.crc=c.data?this.crc(c.data):0,e[c.name]=c;const i=[];if(this.createFolderEntries){const c=/\//giu;for(const u of this.files){const d=u.name;for(let p=c.exec(d);p!==null;p=c.exec(d)){const h={name:d.substr(0,p.index+1),size:0,crc:0,data:new Uint8Array(0)};typeof e[h.name]>"u"&&(e[h.name]=h,i.push(h))}}}Array.prototype.push.apply(this.files,i),this.files.sort((c,u)=>c.name.length-u.name.length||c.name.localeCompare(u.name));const n=this.files.reduce((c,u)=>c+76+u.name.length*2+u.size,22);rn("Estimated file size: "+n),this.buffer=new ArrayBuffer(n);const r=new y0(this.buffer),o=this.hex2u8a("504b0304140000000000");for(const c of this.files)c.offs=r.i,r.writeByteArray(o),r.uint16(this.timeInt),r.uint16(this.dateInt),r.uint32(c.crc),r.uint32(c.size),r.uint32(c.size),r.uint16(c.name.length),r.uint16(0),r.writeASCII(c.name),c.size>0&&r.writeByteArray(c.data);const a=r.i,s=this.hex2u8a("504b01023f00140000000000");for(const c of this.files)r.writeByteArray(s),r.uint16(this.timeInt),r.uint16(this.dateInt),r.uint32(c.crc),r.uint32(c.size),r.uint32(c.size),r.uint16(c.name.length),r.uint16(0),r.uint16(0),r.uint16(0),r.uint16(0),r.uint32(c.size?32:48),r.uint32(c.offs),r.writeASCII(c.name);const l=r.i-a;return r.writeByteArray(this.hex2u8a("504b050600000000")),r.uint16(this.files.length),r.uint16(this.files.length),r.uint32(l),r.uint32(a),r.uint16(0),rn("Finished creating zip. size="+r.i+", predicted size="+n),this.buffer}crc(e){let i,n,r=-1;if(!Ui)for(Ui=[],n=0;n<256;i=++n){for(let o=0;o<8;o++)i=i&1?3988292384^i>>>1:i>>>1;Ui[n]=i}for(let o=0;o<e.byteLength;o++)r=r>>>8^Ui[(r^e[o])&255];return(r^-1)>>>0}hex2u8a(e){const i=new Uint8Array(Math.ceil(e.length/2));for(let n=0;n<i.length;n++)i[n]=parseInt(e.substr(n*2,2),16);return i}}class y0{constructor(e){this.dw=new DataView(e),this.i=0,this.le=!0,this.utf8encoder=new TextEncoder("utf-8")}uint8(e){this.dw.setUint8(this.i++,e)}uint16(e){this.dw.setUint16(this.i,e,this.le),this.i+=2}uint32(e){this.dw.setUint32(this.i,e,this.le),this.i+=4}writeByteArray(e){if(!(e instanceof Uint8Array))throw new Error("invalid parameter");new Uint8Array(this.dw.buffer).set(e,this.i),this.i+=e.byteLength}writeASCII(e){for(let i=0;i<e.length;i++)this.dw.setUint8(this.i++,e.charCodeAt(i)&255)}}const Pt="application/vnd.openxmlformats-officedocument.spreadsheetml",ir="http://schemas.openxmlformats.org",Ki=`${ir}/spreadsheetml/2006/main`,Ar=`${ir}/package/2006`,It=`${ir}/officeDocument/2006/relationships`,qs=[{id:164,code:"yyyy&quot;-&quot;mm&quot;-&quot;dd"},{id:165,code:"yyyy&quot;-&quot;mm&quot;-&quot;dd&quot; &quot;h&quot;:&quot;mm&quot;:&quot;ss"}];class v0 extends su{constructor(e,i){super(e,`${Pt}.sheet`),this.sheets=[],this.frozen=!!(i&&i.frozen),this.autoFilter=!!(i&&i.filter)}addSheetFromData(e,i){const n=this.sheets.length+1;return this.sheets.push({id:n,name:this.escapeXml(i||"Sheet"+n),data:e}),this}generate(){const e=[{name:"xl/styles.xml",xml:`<styleSheet xmlns="${Ki}" xmlns:mc="${ir}/markup-compatibility/2006"><numFmts count="${qs.length}">${qs.map(r=>`<numFmt numFmtId="${r.id}" formatCode="${r.code}" />`)}</numFmts><fonts count="2"><font><sz val="10.0"/><color rgb="FF000000"/><name val="Arial"/></font><font><b/></font></fonts><fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="lightGray"/></fill></fills><borders count="1"><border><left/><right/><top/><bottom/></border></borders><cellStyleXfs count="1"><xf borderId="0" fillId="0" fontId="0" numFmtId="0" applyAlignment="1" applyFont="1"/></cellStyleXfs><cellXfs><xf borderId="0" fillId="0" fontId="0" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment/></xf><xf borderId="0" fillId="0" fontId="1" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment/></xf><xf borderId="0" fillId="0" fontId="0" numFmtId="164" xfId="0" applyAlignment="1" applyFont="1" applyNumberFormat="1"><alignment /></xf><xf borderId="0" fillId="0" fontId="0" numFmtId="165" xfId="0" applyAlignment="1" applyFont="1" applyNumberFormat="1"><alignment /></xf></cellXfs><cellStyles count="1"><cellStyle xfId="0" name="Normal" builtinId="0"/></cellStyles><dxfs count="0"/></styleSheet>`},{name:"xl/sharedStrings.xml",xml:`<sst xmlns="${Ki}" count="2" uniqueCount="2"><si><t>text here</t></si></sst>`},{name:"xl/workbook.xml",xml:`<workbook xmlns="${Ki}" xmlns:r="${It}"><workbookPr/><sheets>`+this.sheets.map(r=>`<sheet state="visible" name="${r.name}" sheetId="${r.id}" r:id="rId${r.id+2}"/>`).join("")+"</sheets><definedNames/><calcPr/></workbook>"},{name:"xl/_rels/workbook.xml.rels",xml:`<Relationships xmlns="${Ar}/relationships"><Relationship Id="rId1" Type="${It}/styles" Target="styles.xml" /><Relationship Id="rId2" Type="${It}/sharedStrings" Target="sharedStrings.xml"/>`+this.sheets.map(r=>`<Relationship Id="rId${r.id+2}" Type="${It}/worksheet" Target="worksheets/sheet${r.id}.xml"/>`).join("")+"</Relationships>"},{name:"[Content_Types].xml",xml:`<Types xmlns="${Ar}/content-types"><Default ContentType="application/xml" Extension="xml"/><Default ContentType="application/vnd.openxmlformats-package.relationships+xml" Extension="rels"/>`+this.sheets.map(r=>`<Override ContentType="${Pt}.worksheet+xml" PartName="/xl/worksheets/sheet${r.id}.xml"/>`).join("")+`<Override ContentType="${Pt}.sharedStrings+xml" PartName="/xl/sharedStrings.xml"/><Override ContentType="${Pt}.styles+xml" PartName="/xl/styles.xml" /><Override ContentType="${Pt}.sheet.main+xml" PartName="/xl/workbook.xml"/></Types>`},{name:"_rels/.rels",xml:`<Relationships xmlns="${Ar}/relationships"><Relationship Id="rId1" Type="${It}/officeDocument" Target="xl/workbook.xml"/></Relationships>`}],i=this.sheets.map(r=>{let o=0;const a=r.data.map((s,l)=>{const c=this.frozen&&l===0?' s="1"':"";s.length>o&&(o=s.length);const u=s.map((d,p)=>{const h=this.colName(p)+(l+1);return typeof d=="number"?`<c r="${h}"${c}><v>${d}</v></c>`:d instanceof Date?`<c s="${d.getHours()||d.getMinutes()||d.getSeconds()?3:2}"><v>${this.dateToExcelDate(d)}</v></c>`:`<c t="inlineStr"${c}><is><t>${this.escapeXml(d.toString())}</t></is></c>`});return`<row r="${l+1}">${u.join("")}</row>`});return{name:`xl/worksheets/sheet${r.id}.xml`,xml:`<worksheet xmlns="${Ki}"><sheetViews><sheetView workbookViewId="0"`+(this.frozen?' tabSelected="1"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView>':"/>")+`</sheetViews><sheetFormatPr customHeight="1" defaultColWidth="17.5" defaultRowHeight="15.75"/><sheetData>${a.join("")}</sheetData>`+(this.autoFilter?`<autoFilter ref="A1:${this.colName(o)}${r.data.length}"/>`:"")+"</worksheet>"}}),n=new b0(this._filename,!1);return[...e,...i].forEach(r=>n.addFileFromString(r.name,r.xml)),this.buffer=n.generate(),this.buffer}colName(e){return e<26?String.fromCharCode(e+65):String.fromCharCode(Math.floor(e/26+64))+String.fromCharCode(Math.floor(e%26+65))}escapeXml(e){return e.replace(/[<>&'"]/gu,i=>["&lt;","&gt;","&amp;","&apos;","&quot;"][`<>&'"`.indexOf(i)])}dateToExcelDate(e){return 25569+(e.getTime()-e.getTimezoneOffset()*6e4)/864e5}}const _0=(t,e)=>{const i=t.map(r=>r.title),n=e.map(r=>t.map(o=>{const a=o.toXlsxValue(o,r);return a??""}));return n.unshift(i),n},x0=(t,e,i,n)=>{const r=_0(t,e),o=new v0(i).addSheetFromData(r,n).generate();hi(new File([o],i,{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}))},w0=({columns:t,selectedItems:e,csvFilename:i,xlsxFilename:n,xlsxSheetname:r,topPlacement:o})=>_`<cosmoz-bottom-bar
		id="bottomBar"
		?active=${!Gn(e.length)}
		part="bottomBar"
		exportparts="bar: bottomBar-bar, info: bottomBar-info, buttons: bottomBar-buttons"
	>
		<slot name="info" slot="info">
			${Fc("{0} selected item","{0} selected items",e.length)}
		</slot>
		<slot name="actions" id="actions"></slot>
		<!-- These slots are needed by cosmoz-bottom-bar
        as it might change the slot of the actions to distribute them in the menu -->
		<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
		<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
		<cosmoz-dropdown-menu part="extra" slot="extra" .placement=${o}>
			<svg
				slot="button"
				width="14"
				height="18"
				viewBox="0 0 14 18"
				fill="none"
				stroke="currentColor"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M1 8.5L7.00024 14.5L13 8.5"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path d="M13 17L1 17" stroke-width="2" stroke-linecap="round" />
				<path d="M7 1V13" stroke-width="2" stroke-linecap="round" />
			</svg>
			<button
				@click=${()=>g0(t,e,i)}
			>
				${I("Save as CSV")}
			</button>
			<button
				@click=${()=>x0(t,e,n,r)}
			>
				${I("Save as XLSX")}
			</button>
			<slot name="download-menu"></slot>
		</cosmoz-dropdown-menu>
	</cosmoz-bottom-bar>`,C0=({allSelected:t,onAllCheckboxChange:e,sortAndGroup:i,dataIsValid:n,data:r,columns:o,filters:a,groupOnColumn:s,setFilterState:l,settingsConfig:c,hideSelectAll:u})=>_`<sort-and-group-provider .value=${i}>
		<div class="header" id="header" part="header">
			${G(!u,()=>_`<input
						class="checkbox all"
						type="checkbox"
						.checked=${t}
						@input=${e}
						?disabled=${!n}
						part="all"
					/>`)}
			${G(u,()=>_` <cosmoz-omnitable-settings
						.newLayout="${!0}"
						.config=${c}
					></cosmoz-omnitable-settings>`)}

			<cosmoz-omnitable-header-row
				part="headerRow"
				.data=${r}
				.columns=${o}
				.filters=${a}
				.groupOnColumn=${s}
				.setFilterState=${l}
				.settingsConfig=${c}
				.hideSelectAll=${u}
			></cosmoz-omnitable-header-row>
		</div>
	</sort-and-group-provider>`,S0=wt`
	:host {
		max-width: 100%;
		overflow-x: hidden;
		padding: 0 12px;
	}
	.skeleton {
		width: 100%;
	}
	.skeleton > div {
		height: 17.5px;
		display: flex;
		padding: 11px 12px 11px 0;
	}
	.skeleton > div div:not(.handle) {
		background-image: linear-gradient(90deg, #e0e0e0, #f5f5f5, #e0e0e0);
		background-size: 1000%;
		background-position: right;
		border-radius: 4px;
		animation: sweep 1.5s cubic-bezier(0.3, 1, 0.3, 1) infinite;
	}
	.skeleton > div div:not(.checkbox):not(:last-of-type) {
		margin-right: 7px;
	}
	.skeleton > div div.checkbox {
		min-width: 18px;
		margin-left: 0;
		margin-right: 12px;
	}
	@keyframes sweep {
		0% {
			background-position: right;
		}
		100% {
			background-position: left;
		}
	}
`,z0=({settingsConfig:t})=>{const{columns:e,collapsed:i}=t,n=e.filter(r=>!i.some(o=>o.name===r.name));return _`<div class="skeleton">
		${Array.from({length:5},()=>_`<div>
					<div class="checkbox"></div>
					${n.map(r=>_`<div
								class="cell"
								part=${`cell-${r.name}`}
								name=${r.name}
							></div>`)}
				</div>`)}
	</div>`};customElements.define("cosmoz-omnitable-skeleton",V(z0,{styleSheets:[S0]}));const A0=(t,e)=>{const{settingsConfig:i}=t,{processedItems:n,dataIsValid:r,filterIsTooStrict:o,loading:a,displayEmptyGroups:s,compareItemsFn:l,setSelectedItems:c,renderItem:u,renderGroup:d,error:p}=e;return _`${G(!a&&!r&&!p,()=>_`<div class="tableContent-empty">
					<slot name="empty-set-message">
						<iron-icon icon="icons:announcement"></iron-icon>
						<div class="tableContent-empty-message">
							<h3>${I("Working set empty")}</h3>
							<p>${I("No data to display")}</p>
						</div>
					</slot>
				</div>`)}
		${G(o,()=>_`<div class="tableContent-empty">
					<iron-icon icon="icons:announcement"></iron-icon>
					<div>
						<h3>${I("Filter too strict")}</h3>
						<p>${I("No matches for selection")}</p>
					</div>
				</div>`)}
		${G(a,()=>_`<div class="tableContent-empty overlay">
					<cosmoz-omnitable-skeleton
						.settingsConfig=${i}
					></cosmoz-omnitable-skeleton>
				</div>`)}
		${G(p,()=>_`<div class="tableContent-empty overlay">
					<iron-icon icon="icons:error"></iron-icon>
					<div class="tableContent-empty-message">
						<h3>${I("Error loading data")}</h3>
						<p>${p.message}</p>
					</div>
				</div>`)}
		<div class="tableContent-scroller" id="scroller" part="scroller">
			<cosmoz-grouped-list
				id="groupedList"
				.data=${n}
				@selected-items-changed=${h=>c(h.detail.value)}
				.displayEmptyGroups=${s}
				.compareItemsFn=${l}
				.renderItem=${u}
				.renderGroup=${d}
			></cosmoz-grouped-list>
			<slot name="extraContent"></slot>
		</div>`},E0=[yo({fallbackAxisSideDirection:"start",crossAxis:!1}),bo()],Bs=(t,e)=>{Object.assign(t.style,{display:e?"":"none"})};class M0 extends HTMLElement{static get observedAttributes(){return["opened"]}toggle=_l("height");constructor(){super();const e=new CSSStyleSheet;e.replaceSync(`
      :host { display: block; overflow: hidden; }
		`);const i=this.attachShadow({mode:"open"});i.appendChild(document.createElement("slot")),i.adoptedStyleSheets=[e]}connectedCallback(){Bs(this,this.getAttribute("opened")!=null)}attributeChangedCallback(e,i,n){switch(e){case"opened":{const r=n!=null;return this.isConnected?this.toggle(this,r):Bs(this,r)}}}}customElements.define("cosmoz-collapse",M0);const k0=fe`
	:host {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		max-height: var(--ot-height, 60vh);
		outline: none;
		min-width: 270px;
		background-color: var(--cosmoz-omnitable-settings-bg-color, #fff);
	}

	.headline {
		font-weight: 500;
		font-size: 13px;
		color: var(
			--cosmoz-omnitable-settings-color,
			var(--cz-text-color, #101010)
		);
		text-transform: uppercase;
		line-height: 0.95;
		padding: 10px 14px;
		display: flex;
		align-items: center;
	}
	.close {
		border: none;
		background: none;
		cursor: pointer;
		padding: 2.5px 6px;
		margin-left: auto;
	}

	.contents {
		overflow-y: auto;
		scrollbar-width: 2px;
		scrollbar-gutter: stable;
		text-transform: uppercase;
		font-size: 12px;
		color: var(
			--cosmoz-omnitable-settings-color,
			var(--cz-text-color, #101010)
		);
	}
	.contents::-webkit-scrollbar {
		width: 2px;
	}
	.contents::-webkit-scrollbar-thumb {
		background: rgba(0, 0, 0, 0.5);
	}
	.contents::-webkit-scrollbar-track-piece:start,
	.contents::-webkit-scrollbar-track-piece:end {
		background: transparent;
	}

	.heading {
		box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.15);
		font-weight: 400;
		font-size: 13px;
		color: var(
			--cosmoz-omnitable-settings-color,
			var(--cz-text-color, #101010)
		);
		line-height: 0.95;
		padding: 14px;
		display: flex;
		cursor: pointer;
		align-items: center;
	}
	.heading svg {
		margin-left: auto;
		margin-right: 4px;
	}
	.heading[data-opened] svg {
		transform: scaleY(-1);
	}
	cosmoz-collapse[opened] + .heading {
		box-shadow:
			inset 0px -1px 0px rgba(0, 0, 0, 0.15),
			inset 0px 1px 0px rgba(0, 0, 0, 0.15);
	}

	.list {
		flex: 1;
		padding: 2px 14px;
		min-width: 232px;
	}
	.item {
		display: flex;
		align-items: center;
		background: var(
			--cosmoz-omnitable-settings-item-bg-color,
			var(--cz-surface-light, #fff)
		);
	}
	.item.drag {
		opacity: 0.6;
		pointer-events: none;
	}
	.item.dragover {
		box-shadow: 0 -2px 0 0 currentColor;
	}
	.pull {
		border: none;
		padding: 0;
		font-size: 0;
		vertical-align: bottom;
		outline: none;
		background: transparent;
		cursor: move;
		margin-right: 12px;
		color: var(
			--cosmoz-omnitable-settings-pull-color,
			var(--cz-color-muted, #c4c4c4)
		);
	}
	.title {
		flex: auto;
		overflow: hidden;
		text-overflow: ellipsis;
		color: var(
			--cosmoz-omnitable-settings-title-color,
			var(--cz-text-color, inherit)
		);
	}
	.title[has-filter] {
		font-weight: bold;
	}
	${au}
	.checkbox {
		margin: 4px 0;
	}

	.buttons {
		display: flex;
		gap: 8px;
		padding: 12px 14px;
		box-shadow: inset 0px 1px 0px rgba(0, 0, 0, 0.15);
	}
	.button {
		border: none;
		cursor: pointer;
		background: var(--cosmoz-button-bg-color, #101010);
		color: var(--cosmoz-button-color, #fff);
		font-family: inherit;
		font-size: 13px;
		font-weight: 600;
		line-height: 26px;
		border-radius: 4px;
		padding: 8px;
		flex: 1;
	}
	.button:not(.reset):hover {
		background: var(--cz-action-button-hover-bg, #3a3f44);
	}
	.button[disabled] {
		opacity: 0.2;
		pointer-events: none;
	}
	.reset {
		background: transparent;
		color: inherit;
	}
	/* sortgroups */
	.sgs {
		display: grid;
		column-gap: 7px;
		row-gap: 8px;
		grid-template-columns: repeat(auto-fit, minmax(112px, 1fr));
		grid-template-rows: auto;
		padding: 14px;
	}
	.sg {
		color: inherit;
		border: 1px solid rgba(0, 0, 0, 0.2);
		border-radius: 6px;
		font-size: 12px;
		text-transform: uppercase;
		line-height: 1;
		text-align: left;
		padding: 6px 12px;
		background: transparent;
		cursor: pointer;
		display: flex;
		align-items: left;
		justify-content: auto;
	}
	.sg span {
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.sg[data-on] {
		background: var(
			--cosmoz-omnitable-checkbox-checked-color,
			var(--primary-color)
		);
	}
	.sg svg {
		margin-left: 4px;
		flex: none;
		vertical-align: middle;
	}
	.sg:not([data-on]) svg {
		display: none;
	}
	.sg:not([data-on='desc']) svg {
		transform: scaleY(-1);
	}
`,L0=fe`
	:host {
		display: contents;
		color: var(
			--cosmoz-omnitable-settings-color,
			var(--cz-text-color, #101010)
		);
		--cosmoz-dropdown-box-shadow: 0 3px 4px 0 rgb(0 0 0 / 14%),
			0 1px 8px 0 rgb(0 0 0 / 12%), 0 3px 3px -2px rgb(0 0 0 / 40%);
	}
	cosmoz-dropdown {
		outline: none;
	}
	cosmoz-dropdown::part(button) {
		padding: 0;
		background: transparent;
		color: inherit;
	}
	cosmoz-dropdown::part(anchor) {
		display: inline-block;
	}
	.badge {
		position: absolute;
		top: 1px;
		right: -4px;
		background-color: var(
			--cosmoz-omnitable-checkbox-checked-color,
			var(--primary-color)
		);
		width: 8px;
		height: 8px;
		border-radius: 100%;
	}
	.headerDots {
		align-items: center;
		color: var(--cosmoz-input-color);
		display: flex;
		font-size: 20px;
		height: 42px;
		justify-content: center;
		margin-left: 12px;
		min-width: 30px;
		transform: rotate(90deg);
	}
	cosmoz-omnitable-settings-ui {
		display: flex;
	}
`,Wi=t=>{const e=parseInt(t,10);return isFinite(e)?e:void 0},$0=t=>{const{config:e}=t,{settings:i,setSettings:n,collapsed:r}=e,o=we({collapsed:r,settings:i.columns,setSettings:z(a=>n(s=>({...s,columns:a})),[n])});return{...e,onDown:z(a=>{a.target.closest(".pull")&&(o.handle=a.currentTarget)},[o]),onDragStart:z(a=>{const{target:s}=a,l=Wi(s.dataset.index);if(!o.handle?.contains(s)||l==null)return a.preventDefault();o.handle=null,a.dataTransfer.effectAllowed="move",a.dataTransfer.setData("omnitable/sort-index",l),a.dataTransfer.setData("text/plain",l),setTimeout(()=>s.classList.add("drag"),0),s.addEventListener("dragend",c=>c.target.classList.remove("drag"),{once:!0})},[o]),onDragEnter:z(a=>{const s=a.currentTarget;s===a.target&&(a.preventDefault(),a.dataTransfer.dropEffect="move",s.classList.add("dragover"))},[]),onDragOver:z(a=>{a.preventDefault(),a.currentTarget.classList.add("dragover")},[]),onDragLeave:z(a=>{const s=a.currentTarget;s.contains(a.relatedTarget)||s.classList.remove("dragover")},[]),onDrop:z(a=>{const s=Wi(a.dataTransfer.getData("omnitable/sort-index")),l=Wi(a.currentTarget.dataset.index),{settings:c,setSettings:u}=o;a.currentTarget.classList.remove("dragover"),a.preventDefault();const d=c.slice();d.splice(l+(s>=l?0:-1),0,d.splice(s,1)[0]),u(d)},[o]),onToggle:z(a=>{const{settings:s,setSettings:l}=o,c=s.map(d=>({...d,disabled:d.disabled||o.collapsed?.some(p=>p.name===d.name)})),u=Wi(a.target.closest("[data-index]")?.dataset.index);c.splice(u,1,{...s[u],disabled:!a.target.checked,priority:a.target.checked?s.reduce((d,p)=>Math.max(d,p.priority),0)+1:s[u].priority}),l(c)},[o])}},O0=[Hl({apply({availableHeight:t,elements:e}){Object.assign(e.floating.style,{maxHeight:`${Math.max(0,t)}px`})}}),...E0],T0=({onDragStart:t,onDragEnter:e,onDragOver:i,onDragLeave:n,onDrop:r,onDown:o,onToggle:a,collapsed:s,filters:l})=>(c,u)=>{const d=!!s?.find(h=>h.name===c.name),p=!c.disabled&&!d;return _` <div
			class="item"
			data-index=${u}
			@mousedown=${o}
			draggable="true"
			@dragstart=${t}
			@dragenter=${e}
			@dragover=${i}
			@dragleave=${n}
			@drop=${r}
		>
			<button class="pull">${Bg}</button>
			<label class="title" ?has-filter=${!Gn(l[c.name]?.filter)}
				>${c.title}</label
			>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${p}
				@click=${a}
				.indeterminate=${d}
			/>
		</div>`},P0=t=>{const{settings:e,settingsId:i,onSave:n,onReset:r,hasChanges:o,opened:a,setOpened:s,...l}=$0(t);return _` <div class="headline">
			${I("Sort and filter")}
			<button
				class="close"
				@click=${c=>{const u=c.currentTarget;u?.focus(),u?.blur()}}
			>
				${qg}
			</button>
		</div>

		<div class="contents">
			<div
				class="heading"
				?data-opened=${a.columns}
				@click=${()=>s(c=>({...c,columns:!c.columns}))}
				part="columns columns-heading"
			>
				${I("Columns")} ${Sr}
			</div>
			<cosmoz-collapse
				?opened="${a.columns}"
				part="columns columns-content"
			>
				<div class="list">${e.columns?.map(T0(l))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${a.sort}
				@click=${()=>s(c=>({...c,sort:!c.sort}))}
			>
				${I("Sort on")} ${Sr}
			</div>
			<cosmoz-collapse ?opened=${a.sort}> ${Kg()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${a.group}
				@click=${()=>s(c=>({...c,group:!c.group}))}
				part="groups groups-heading"
			>
				${I("Group on")} ${Sr}
			</div>
			<cosmoz-collapse ?opened=${a.group} part="groups groups-heading"
				>${Ug()}</cosmoz-collapse
			>
		</div>

		${G(i,()=>_`<div class="buttons">
					<button
						class="button reset"
						@click=${r}
						?disabled=${!o}
					>
						${I("Reset")}
					</button>
					<button class="button" @click=${n} ?disabled=${!o}>
						${I("Save")}
					</button>
				</div>`)}`};customElements.define("cosmoz-omnitable-settings-ui",V(P0,{styleSheets:[zt(k0)]}));const I0=({config:t,newLayout:e})=>_`
	<cosmoz-dropdown
		.placement="${e?"bottom-start":"bottom-end"}"
		.middleware="${O0}"
	>
		${G(e,()=>_`<div class="headerDots" slot="button">...</div>`,()=>_` <svg
					viewBox="0 0 24 24"
					width="24"
					slot="button"
					fill="currentColor"
				>
					<circle cx="10" cy="18" r="2"></circle>
					<circle cx="10" cy="12" r="2"></circle>
					<circle cx="10" cy="6" r="2"></circle>
				</svg>`)}
		${G(t?.badge,()=>_`<div class="badge" slot="button"></div>`)}
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${t}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`;customElements.define("cosmoz-omnitable-settings",V(I0,{styleSheets:[zt(L0)]}));const On=["sortOn","descending","groupOn","groupOnDescending"],Gi=t=>e=>e.name===t,H0=(t=[],e=[],i=[])=>{const n=e.filter(a=>t.some(Gi(a.name))),r=t.filter(a=>!e.some(Gi(a.name))&&!i.some(Gi(a.name))),o=i.filter(a=>!e.some(Gi(a.name)));return[...n,...o.flatMap(a=>{const s=t.find(l=>l.name===a.name);return s?{...a,title:s.title,minWidth:parseInt(s.minWidth,10)}:[]}),...r.map(a=>{const{name:s,title:l,priority:c,minWidth:u,width:d,flex:p}=a;return{name:s,title:l,priority:c,minWidth:parseInt(u,10),width:parseInt(d,10),flex:parseInt(p,10)}})]},R0=(t,e)=>({...e,...Ln(On)(t),columns:t.columns?.map(Ln(["name","priority","width","flex","disabled"]))}),F0=({columns:t,settings:e,savedSettings:i,initial:n})=>({...Object.fromEntries(On.flatMap(o=>n[o]!=null?[[o,n[o]]]:[])),...Ln(On)(i),...e,columns:H0(t,e?.columns,i?.columns)}),N0=({prefix:t="omnitable-"}={})=>({write:async(i,n)=>{const r=t+i;try{n?localStorage.setItem(r,JSON.stringify(n)):localStorage.removeItem(r)}catch(o){console.error(o)}},read:async i=>{if(i)try{return JSON.parse(localStorage.getItem(t+i))}catch(n){console.error(n)}}}),V0=co(N0),D0=()=>{const t=fi(V0);return M(()=>t(),[t])},q0=(t,e,i,n)=>{const[r,o]=U(),{read:a,write:s}=D0();return $(async()=>{t&&o(await a(t))},[t,a]),{settingsId:t,savedSettings:r,onSave:z(async()=>{if(!t)return;const l=R0(e,r);await s(t,l),i(),o(l)},[e,r]),onReset:z(async l=>{i(),l.shiftKey&&(await s(t),o()),n?.()},[n]),hasChanges:e!=null}},B0=({settingsId:t,host:e})=>{const i=M(()=>Object.fromEntries(On.map(m=>[m,e[m]])),[]),n=mi(),r=z(()=>{n.current?.(i)},[i]),[o,a]=U(),[s,l]=U({columns:!0,sort:!0}),{savedSettings:c,...u}=q0(t,o,a,r),{enabledColumns:d}=e,p=_m(e,{enabledColumns:d}),h=M(()=>F0({columns:p,settings:o,savedSettings:c,initial:i}),[p,o,c]),f=M(()=>h.columns.map(m=>p.find(b=>b.name===m.name)).filter(Boolean),[p,...h.columns.map(m=>m.name)]);return{...u,opened:s,setOpened:l,settings:h,columns:f,setSettings:a,resetRef:n}},js=t=>Number.isFinite(t)?t:0,j0=(t,e)=>{const i=[];let[n,r]=t.reduce(([u,d],{width:p,flex:h})=>[u+p,d+h],[0,0]),o=e-n,a=js(o/r),s=0,l=0,c=0;for(let u=0;u<t.length;u++){const{width:d,minWidth:p,flex:h}=t[u],f=o>=0?a*h:d*o/n;if(p>d+f){s+=d,l+=p,c+=h,i[u]=p;continue}if(h===0){s+=d,l+=d,i[u]=d;continue}}n-=s,o=e-l-n,r-=c,a=js(o/r);for(let u=0;u<t.length;u++){if(i[u]!=null)continue;const{width:d,flex:p}=t[u],h=o>=0?a*p:d*o/n;i[u]=d+h}return i},Tn=Symbol("index"),U0=(t,e)=>{if(Array.prototype.findLastIndex)return t.findLastIndex(e);for(let i=t.length-1;i>=0;i--)if(e(t[i],i,t))return i;return-1},K0=(t,e)=>{const i=U0(t,a=>a!=null&&a>0),n=(a,s)=>`.cell[name="${a}"], cosmoz-omnitable-skeleton::part(cell-${a}){width: ${Math.floor(s)}px;padding: 0 min(3px, ${s/2}px)}`,r=a=>`cosmoz-omnitable-resize-nub[name="${a}"]{display:none}`,o=a=>`cosmoz-omnitable-resize-nub[name="${a}"], .cell[name="${a}"]{display:none}`;return e.map((a,s)=>{const l=t[s];if(l==null||l===0)return o(a.name);const c=n(a.name,l);return s===i?`${c}
${r(a.name)}`:c}).join(`
`)},lu=(t,e,i)=>{const n=t.filter(s=>!s.hidden),r=n.reduce((s,{width:l})=>s+l,0);if(n.length>1&&r>e)return lu(n.slice(1),e,i);const o=n.reduce(([s,l],c,u)=>[Math.max(s,c.index),c.index>s?u:l],[-1,-1])[1];return o!==-1&&(n[o].flex=1),j0(n,e).reduce((s,l,c)=>(s[n[c].index]=l,s),new Array(i).fill(void 0))},W0=(t,e)=>t.length===0?".cell {display: none;}":K0(t,e),G0=({host:t,canvasWidth:e,layout:i,setSettings:n})=>{const r=mi();r.current=o=>n(a=>{const s=a.columns,{detail:{newWidth:l,column:c}}=o,u=s.findIndex(h=>h.name===c.name),d=[],p=s.reduce((h,f)=>Math.max(h,f.priority),-1/0);for(let h=0;h<i.length;h++)if(d[h]={...s[h]},h<u&&i[h]&&(d[h].width=i[h],d[h].flex=0,d[h].priority=p),h===u){const f=i.reduce((m,b,y)=>y<u&&b?m-b:m,e);d[h].width=Math.min(f,Math.max(l,s[h].minWidth)),d[h].flex=0,d[h].priority=p}return{...a,columns:d}}),$(()=>{const o=a=>r.current(a);return t.addEventListener("column-resize",o),()=>t.removeEventListener("column-resize",o)},[])},Y0=(t,e)=>$(()=>{const i=([r])=>{r.contentRect?.width!==0&&requestAnimationFrame(()=>e(r.contentRect?.width-20-44-24))},n=new ResizeObserver(i);return n.observe(t),()=>n.unobserve(t)},[]),J0=t=>{const[e,i]=U(()=>t.getBoundingClientRect().width);return Y0(t,i),e},X0=(t,e)=>{const i=M(()=>{let n=!1,r;const o=()=>{if(!n)return;r=requestAnimationFrame(o),t()&&(n=!1)};return{start:()=>{n=!0,cancelAnimationFrame(r),r=requestAnimationFrame(o)},stop:()=>{n=!1,cancelAnimationFrame(r)}}},[]);$(()=>{i.start()},e),$(()=>()=>i.stop(),[])},Z0=(t=0,e=0)=>Math.abs(t-e)<.1,Q0=(t,e=1.9,i=xl)=>{const n=we({target:t}),r=z(()=>{if(n.tween||(n.tween=n.target),n.target.every((o,a)=>n.tween[a]===o))return i(n.tween),!0;n.tween=n.target.map((o,a)=>Z0(n.tween[a],o)?o:(n.tween[a]??0)+((o??0)-(n.tween[a]??0))/e||0),i(n.tween)},[]);X0(r,[t])},eb=({canvasWidth:t,groupOnColumn:e,config:i,miniColumn:n})=>M(()=>{if(!Array.isArray(i)||t==null||t===0)return[];const r=i.map((o,a)=>({minWidth:o.minWidth,width:o.width,flex:o.flex,priority:o.priority,name:o.name,index:a,hidden:o.name===e?.name||o.disabled})).map(o=>n?{...o,hidden:n.name!==o.name}:o).sort(({index:o,priority:a},{index:s,priority:l})=>a===l?s-o:a-l);return lu(r,t,r.length)},[t,e,i]),tb=({host:t,canvasWidth:e,columns:i})=>{const n=t.miniBreakpoint??480,r=M(()=>e<=n,[e,n]),o=M(()=>r?i?.filter(c=>c.mini!=null).sort((c,u)=>(c.mini??0)-(u.mini??0)):[],[i,r]),[a,...s]=o??[],l=!!a;return $(()=>{t.toggleAttribute("mini",l)},[l]),{isMini:l&&r,miniColumn:a,miniColumns:s}},ib=t=>{const e=M(()=>new CSSStyleSheet,[]);return $(()=>{t.shadowRoot.adoptedStyleSheets=[...t.shadowRoot.adoptedStyleSheets,e]},[]),e},nb=({host:t,columns:e,settings:i,setSettings:n,resizeSpeedFactor:r,sortAndGroupOptions:o})=>{const a=J0(t),{isMini:s,miniColumn:l,miniColumns:c}=tb({host:t,canvasWidth:a,columns:e}),{groupOnColumn:u}=o,d=eb({canvasWidth:a,groupOnColumn:u,miniColumn:l,config:i.columns}),p=ib(t),h=M(()=>i.columns.reduce((m,b,y)=>d[y]!=null||b.name===u?.name||b.disabled?m:[...m,e.find(g=>g.name===b.name)],[]),[e,i,d]),f=we({columns:i.columns});return Q0(d,r,m=>{const b=W0(m,f.columns);p.replace(b)}),G0({host:t,canvasWidth:a,layout:d,setSettings:m=>n(m(i))}),{isMini:s,collapsedColumns:h,miniColumns:c}},rb=({host:t,...e})=>{const{csvFilename:i="omnitable.csv",xlsxFilename:n="omnitable.xlsx",xlsxSheetname:r="Omnitable",topPlacement:o="top-end"}=t;return{csvFilename:i,xlsxFilename:n,xlsxSheetname:r,topPlacement:o,...e}},ob=({host:t,selectedItems:e,data:i,sortAndGroupOptions:n,collapsedColumns:r,settings:o,filterFunctions:a,settingS:s,filters:l,...c})=>{const u=i&&i.length>0&&e.length===i.length,d=m=>{m.target.checked?t.shadowRoot.querySelector("#groupedList").selectAll():t.shadowRoot.querySelector("#groupedList").deselectAll()},{groupOnColumn:p}=n,h=M(()=>[p,...r,...o.columns.filter(m=>m.disabled)].some(m=>m&&Object.keys(a).includes(m.name)),[a,o,r]),f=M(()=>({...s,collapsed:r,badge:h,filters:l}),[s,r,h,l]);return $(()=>{const m=t.shadowRoot.querySelector("#tableContent"),b=new ResizeObserver(y=>requestAnimationFrame(()=>{t.style.setProperty("--ot-height",y[0]?.contentRect.height+"px")}));return b.observe(m),()=>b.unobserve(m)},[]),{allSelected:u,onAllCheckboxChange:d,data:i,settingsConfig:f,filters:l,groupOnColumn:p,sortAndGroup:n.sortAndGroup,...c}},cu=_`
	<svg
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
	>
		<g>
			<path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
		</g>
	</svg>
`,ab=t=>t?"groupRow groupRow-folded":"groupRow",sb=({item:t,index:e})=>i=>G(i?.length>0,()=>_`
				<div class="itemRow-minis" part="item-minis">
					${i.map(n=>_`<div
								class="itemRow-mini"
								part="item-mini item-mini-${n.name}"
							>
								${(n.renderMini??n.renderCell)(n,{item:t,index:e})}
							</div>`)}
				</div>
			`),lb=({columns:t,collapsedColumns:e,miniColumns:i,onItemClick:n,onCheckboxChange:r,dataIsValid:o,groupOnColumn:a,onItemChange:s,rowPartFn:l})=>(c,u,{selected:d,expanded:p,toggleCollapse:h})=>_`
		<div
			?selected=${d}
			part="${["itemRow",`itemRow-${c[Tn]}`,l?.(c,u)].filter(Boolean).join(" ")}"
			.dataIndex=${c[Tn]}
			.dataItem=${c}
			class="itemRow"
			@click=${n}
		>
			<div class="itemRow-wrapper" part="itemRow-wrapper">
				<input
					class="checkbox"
					type="checkbox"
					part="checkbox"
					.checked=${d}
					.dataItem=${c}
					@input=${r}
					?disabled=${!o}
				/>
				<cosmoz-omnitable-item-row
					part="itemRow-inner"
					.columns=${t}
					.index=${u}
					.selected=${d}
					.expanded=${p}
					.item=${c}
					.groupOnColumn=${a}
					.onItemChange=${s}
				>
				</cosmoz-omnitable-item-row>
				<button
					class="expand"
					?hidden="${Gn(e.length)}"
					?aria-expanded="${p}"
					@click="${h}"
				>
					${cu}
				</button>
			</div>
			${sb({item:c,index:u})(i)}
		</div>
		<cosmoz-omnitable-item-expand
			.columns=${e}
			.item=${c}
			.index=${u}
			?selected=${d}
			?expanded=${p}
			.groupOnColumn=${a}
			part="item-expand"
		>
		</cosmoz-omnitable-item-expand>
	`,cb=({onCheckboxChange:t,dataIsValid:e,groupOnColumn:i})=>(n,r,{selected:o,folded:a,toggleFold:s})=>_` <div
			class="${ab(a)}"
			part="groupRow groupRow-${n[Tn]}"
		>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${o}
				.dataItem=${n}
				@input=${t}
				?disabled=${!e}
			/>
			<h3 class="groupRow-label">
				<div><span>${i?.title}</span>: &nbsp;</div>
				<cosmoz-omnitable-group-row
					.column=${i}
					.item=${n.items?.[0]}
					.selected=${o}
					.folded=${a}
					.group=${n}
				></cosmoz-omnitable-group-row>
			</h3>
			<div class="groupRow-badge">${n.items.length}</div>
			<button class="expand" ?aria-expanded="${a}" @click=${s}>
				${cu}
			</button>
		</div>`,ub=({host:t,error:e,dataIsValid:i,processedItems:n,columns:r,collapsedColumns:o,miniColumns:a,sortAndGroupOptions:s,rowPartFn:l,...c})=>{const{loading:u=!1,displayEmptyGroups:d=!1,compareItemsFn:p}=t,h=mi({shiftKey:!1,ctrlKey:!1}),f=z(g=>{const x=g.target.dataItem,v=g.target.checked;h.current.shiftKey?t.shadowRoot.querySelector("#groupedList").toggleSelectTo(x,v):h.current.ctrlKey?(g.target.checked=!0,t.shadowRoot.querySelector("#groupedList").selectOnly(x)):t.shadowRoot.querySelector("#groupedList").toggleSelect(x,v),g.preventDefault(),g.stopPropagation()},[]);$(()=>{const g=({shiftKey:x,ctrlKey:v})=>{h.current={shiftKey:x,ctrlKey:v}};return window.addEventListener("keydown",g),window.addEventListener("keyup",g),()=>{window.removeEventListener("keydown",g),window.removeEventListener("keyup",g)}},[]);const m=z(g=>{const x=g.composedPath();x.slice(0,x.indexOf(g.currentTarget)).find(w=>w.matches?.("a, .checkbox, .expand"))||t.dispatchEvent(new window.CustomEvent("omnitable-item-click",{bubbles:!0,composed:!0,detail:{item:g.currentTarget.dataItem,index:g.currentTarget.dataIndex}}))},[]),{groupOnColumn:b}=s,y=z((g,x)=>v=>xm(t,g,x,v),[]);return{...c,processedItems:n,dataIsValid:i,filterIsTooStrict:i&&n.length<1,loading:u,compareItemsFn:p,displayEmptyGroups:d,error:e,renderItem:M(()=>lb({columns:r,collapsedColumns:o,miniColumns:a,onItemClick:m,onCheckboxChange:f,dataIsValid:i,groupOnColumn:b,onItemChange:y,rowPartFn:l}),[r,o,m,f,i,b,y,l]),renderGroup:M(()=>cb({onCheckboxChange:f,dataIsValid:i,groupOnColumn:b}),[f,i,b])}},db=(t,e)=>t===e?0:t==null?-1:e==null?1:typeof t=="object"&&typeof e=="object"?t.toString()<e.toString()?-1:1:typeof t=="number"&&typeof e=="number"?t-e:typeof t=="string"&&typeof e=="string"?t<e?-1:1:typeof t=="boolean"&&typeof e=="boolean"?t?-1:1:(console.warn("unsupported sort",typeof t,t,typeof e,e),0),Er=(t,e)=>(i,n)=>db(t(i),t(n))*(e?-1:1),pb=t=>t.replace(/([a-z0-9])([A-Z])/gu,"$1-$2").toLowerCase(),Us=(t,e)=>{!t||!e||Object.entries(e).forEach(([i,n])=>{t[Oe].__ownChange=!0,t[Oe][i]=n,t[Oe].__ownChange=!1,t[Oe].dispatchEvent(new CustomEvent(`${pb(i)}-changed`,{bubbles:!0,detail:{value:n}}))})},Mr=(t,e)=>Object.assign(t,{[Tn]:e}),Yi=Symbol("unparsed"),hb=({data:t,columns:e,hashParam:i,sortAndGroupOptions:n,noLocalSort:r,noLocalFilter:o})=>{const{groupOnColumn:a,groupOnDescending:s,sortOnColumn:l,descending:c}=n,u=z(([v,w])=>{const C=e.find(({name:S})=>S===v);return C==null?[v,void 0]:[v,w.filter&&C.serializeFilter(C,w.filter)]},[e]),d=z(([v,w])=>{const C=e.find(({name:E})=>E===v);if(C==null)return[v,{[Yi]:w}];const S={filter:C.deserializeFilter(C,w)};return Us(C,S),[v,S]},[e]),[p,h]=Dt({},i,{multi:!0,suffix:"-filter--",write:u,read:d}),f=z((v,w)=>h(C=>{const S=Vn(w,C[v]);return Us(e.find(E=>E.name===v),S),{...C,[v]:{...C[v],...S}}}),[e,h]),m=M(()=>Object.values(p).map(v=>v.filter),[p]),b=M(()=>Object.fromEntries(e.map(v=>[v.name,!v.noLocalFilter&&v.getFilterFn(v,p[v.name]?.filter)]).filter(([,v])=>!!v)),[e,...m]),y=M(()=>!Array.isArray(t)||t.length===0?[]:Object.entries(b).length===0||o?t.slice():t.filter(v=>Object.values(b).every(w=>w(v))),[t,b,o]),g=M(()=>{if(!r&&!a&&l!=null&&l.sortOn!=null)return y.slice().sort(Er(v=>l.getComparableValue({...l,valuePath:l.sortOn},v),c));if(a!=null&&a.groupOn!=null){const v=y.reduce((w,C)=>{const S=a.getComparableValue({...a,valuePath:a.groupOn},C);if(S===void 0)return w;let E=w.find(F=>F.id===S);return E?(E.items.push(C),w):(E={id:S,name:S,items:[C]},[...w,E])},[]);return v.sort(Er(w=>a.getComparableValue({...a,valuePath:a.groupOn},w.items[0]),s)),!l||r?v:v.filter(w=>Array.isArray(w.items)).map(w=>(w.items.sort(Er(C=>l.getComparableValue({...l,valuePath:l.sortOn},C),c)),w))}return y},[y,a,s,l,c,r]),x=M(()=>{let v=0,w=0;const C=[];return g.forEach(S=>{if(Array.isArray(S.items)){Mr(S,w++),S.items.forEach(E=>{Mr(E,v++),C.push(E)});return}return Mr(S,v++),C.push(S)},[]),C},[g]);return $(()=>{h(v=>Object.values(v).some(C=>C[Yi]!=null)?Object.fromEntries(Object.entries(v).map(([C,S])=>S[Yi]==null?[C,S]:d([C,S[Yi]]))):v)},[d]),{processedItems:g,visibleData:x,filters:p,filterFunctions:b,setFilterState:f}},fb=t=>{const e=n=>{const r=t.data.indexOf(n);if(r<0)return null;const o=t.data.splice(r,1);if(t.data=t.data.slice(),Array.isArray(o)&&o.length>0)return o[0]},i=(n,r)=>{t.data.splice(n,1,r),t.data=t.data.slice()};return{removeItem:e,removeItems(n){const r=[];for(let o=n.length-1;o>=0;o-=1){const a=t.removeItem(n[o]);a!=null&&r.push(a)}return r},replaceItemAtIndex:i,replaceItem(n,r){const o=t.data.indexOf(n);if(o>-1)return i(o,r)},selectItem(n){t.shadowRoot.querySelector("#groupedList").select(n)},selectAll(){t.shadowRoot.querySelector("#groupedList").selectAll()},deselectAll(){t.shadowRoot.querySelector("#groupedList").deselectAll()},deselectItem(n){t.shadowRoot.querySelector("#groupedList").deselect(n)},isItemSelected(n){return t.shadowRoot.querySelector("#groupedList").isItemSelected(n)}}},mb=({host:t,visibleData:e,filters:i,...n})=>{const{setFilterState:r}=n,o=M(()=>fb(t),[]);vt(n,Object.values(n)),vt(o,Object.values(o)),$(()=>{const s=l=>r(l.detail.name,c=>({...c,...l.detail.state}));return t.addEventListener("legacy-filter-changed",s),()=>t.removeEventListener("legacy-filter-changed",s)},[]),$e("visibleData",e),$e("sortedFilteredGroupedItems",n.sortedFilteredGroupedItems),$e("selectedItems",n.selectedItems),$e("sortOn",n.sortOn),$e("descending",n.descending),$e("isMini",n.isMini);const a=M(()=>Object.fromEntries(Object.entries(i).filter(([,{filter:s}])=>s!==void 0).map(([s,{filter:l}])=>[s,l])),[i]);$e("filters",a,Object.values(a))},gb=t=>{const{hashParam:e,settingsId:i,data:n,resizeSpeedFactor:r,noLocal:o,noLocalSort:a=o,noLocalFilter:s=o,error:l,rowPartFn:c}=t,u=B0({settingsId:i,host:t}),{settings:d,setSettings:p,columns:h,resetRef:f}=u,m=a0(h,e,d,p,f),{processedItems:b,visibleData:y,filters:g,setFilterState:x,filterFunctions:v}=hb({data:n,columns:h,hashParam:e,sortAndGroupOptions:m,noLocalSort:a,noLocalFilter:s}),{isMini:w,collapsedColumns:C,miniColumns:S}=nb({host:t,columns:h,settings:d,setSettings:p,resizeSpeedFactor:r,sortAndGroupOptions:m}),E=n&&Array.isArray(n)&&n.length>0,[F,T]=U([]);return mb({host:t,visibleData:y,sortedFilteredGroupedItems:b,columns:h,filters:g,setFilterState:x,selectedItems:F,isMini:w,...m}),{header:ob({host:t,selectedItems:F,sortAndGroupOptions:m,dataIsValid:E,data:n,columns:h,filters:g,collapsedColumns:C,settings:d,filterFunctions:v,settingS:u,setFilterState:x,hideSelectAll:t.hideSelectAll===!0}),list:ub({host:t,error:l,dataIsValid:E,processedItems:b,setSelectedItems:T,columns:h,collapsedColumns:C,miniColumns:S,sortAndGroupOptions:m,rowPartFn:c}),footer:rb({host:t,selectedItems:F,columns:h})}};customElements.define("cosmoz-grouped-list-row",class extends HTMLElement{get item(){return this._item}set item(e){this._item=e,this._render()}get index(){return this._index}set index(e){this._index=e,this._render()}get renderFn(){return this._renderFn}set renderFn(e){this._renderFn=e,this._render()}_render(){this._item==null||this._index==null||this._renderFn==null||on(this._renderFn(this._item,this._index),this)}});const bb={group:Symbol("group")},nr=(t,e)=>(e.has(t)||e.set(t,{}),e.get(t)),yb=(t,e)=>!!nr(t,e).expanded,vb=(t,e)=>!!nr(t,e).folded,Qr=t=>t?t.items instanceof Array:!1,_b=t=>{if(!Array.isArray(t)||t.length===0)return;const e=Array.isArray(t[0].items);if(!t.every(n=>Array.isArray(n.items)===e))throw new Error("Data must be homogeneous.")},xb=(t,e,i)=>Array.isArray(t)?(_b(t),t.reduce((r,o)=>o.items?o.items.length?nr(o,i).folded?r.concat(o):r.concat(o,o.items.map(a=>Object.assign(a,{[bb.group]:o}))):e?r.concat(o):r:r.concat(o),[])):void 0,wb=(t,...e)=>typeof t=="function"?t(...e):t,Cb=(t,e)=>t===e,Sb=()=>{const[t,e]=U(()=>[new WeakMap]);return{setItemState:z((n,r)=>e(([o])=>{const a=nr(n,o);return Object.assign(a,wb(r,a)),[o]}),[]),state:t[0],signal:t}},zb=()=>{const{setItemState:t,state:e,signal:i}=Sb(),n=z((o,a)=>{Qr(o)&&t(o,s=>({folded:a!==void 0?a:!s.folded}))},[]),r=z((o,a)=>{Qr(o)||t(o,s=>({expanded:a!==void 0?!a:!s.expanded}))},[]);return{state:e,signal:i,toggleFold:n,toggleCollapse:r}},Ab=({initial:t,compareItemsFn:e,data:i,flatData:n})=>{const[r,o]=U(t),[a,s]=U(),l=z(g=>r.includes(g),[r]),c=z(g=>g?.items?.every(l),[l]),u=z(g=>l(g)||c(g),[l,c]),d=z(g=>{const x=g.items??[g];o(v=>[...v,...x.filter(w=>!v.includes(w))]),s(g)},[]),p=z(g=>{const x=g.items??[g];o(v=>v.filter(w=>!x.includes(w))),s(g)},[]),h=z(g=>{o(g.items?.slice()||[g]),s(g)},[]),f=z(()=>{o(i.flatMap(g=>g.items||g)),s(void 0)},[i]),m=z(()=>{o([]),s(void 0)},[]),b=z((g,x=!u(g))=>x?d(g):p(g),[u]),y=z((g,x)=>{const v=a?n.findIndex(S=>e(S,a)):-1;if(v<0)return b(g,x);const[w,C]=[v,n.indexOf(g)].sort((S,E)=>S-E);n.slice(w,C+1).forEach((S,E,F)=>{E>0&&E<F.length-1&&Qr(S)||b(S,x)}),s(g)},[n,e,b]);return $(()=>o(g=>g.length>0?n.filter(x=>g.find(v=>e(x,v))):g),[n]),{selectedItems:r,isItemSelected:l,isGroupSelected:c,isSelected:u,select:d,deselect:p,selectOnly:h,selectAll:f,deselectAll:m,toggleSelect:b,toggleSelectTo:y}},Eb={host:{position:"relative",display:"flex",flexDirection:"column"}},Mb=t=>{const{data:e,renderItem:i,renderGroup:n,displayEmptyGroups:r,compareItemsFn:o=Cb}=t,{toggleFold:a,toggleCollapse:s,state:l,signal:c}=zb(),u=M(()=>xb(e,r,l),[e,r,c]),{selectedItems:d,isItemSelected:p,isGroupSelected:h,isSelected:f,select:m,deselect:b,selectOnly:y,selectAll:g,deselectAll:x,toggleSelect:v,toggleSelectTo:w}=Ab({initial:[],compareItemsFn:o,data:e,flatData:u}),C=z((E,F)=>Array.isArray(E.items)?n(E,F,{selected:h(E,d),folded:vb(E,l),toggleSelect:T=>v(E,typeof T=="boolean"?T:void 0),toggleFold:()=>a(E)}):i(E,F,{selected:d.includes(E),expanded:yb(E,l),toggleSelect:T=>v(E,typeof T=="boolean"?T:void 0),toggleCollapse:()=>s(E)}),[i,n,d,v,c]);si(()=>Object.assign(t.style,Eb.host),[]),$e("selectedItems",d);const S={toggleFold:a,toggleCollapse:s,isItemSelected:p,isGroupSelected:h,isSelected:f,select:m,deselect:b,selectOnly:y,selectAll:g,deselectAll:x,toggleSelect:v,toggleSelectTo:w};return vt(S,Object.values(S)),{renderRow:C,flatData:u}},kb=({renderRow:t,flatData:e})=>qc({items:e,renderItem:(i,n)=>_`<cosmoz-grouped-list-row
					.item=${i}
					.index=${n}
					.renderFn=${t}
				></cosmoz-grouped-list-row>`}),Lb=t=>kb(Mb(t));customElements.define("cosmoz-grouped-list",V(Lb,{useShadowDOM:!1}));const $b=t=>window.ShadyCSS?.ApplyShim?.transformCssText?.(t)||t,Ob=t=>{const{header:e,list:i,footer:n}=gb(t);return _`
		<style>
			${uo([],()=>$b(f0))}
		</style>

		<div class="mainContainer">
			${C0(e)}
			<div class="tableContent" id="tableContent">
				${A0(e,i)}
			</div>
			${w0(n)}
		</div>

		<div id="columns">
			<slot id="columnsSlot"></slot>
		</div>
	`};customElements.define("cosmoz-omnitable",class extends V(Ob,{observedAttributes:["hash-param","sort-on","group-on","descending","group-on-descending","hide-select-all","settings-id","no-local","no-local-sort","no-local-filter","loading","mini-breakpoint"]}){connectedCallback(){super.connectedCallback(),Pe(this,"selectedItems",[]),Pe(this,"visibleData",[]),Pe(this,"sortedFilteredGroupedItems",[])}});const Pn=`
	<slot name="actions" slot="actions"></slot>
`;_(Object.assign([Pn],{raw:[Pn]}));q(Object.assign([Pn],{raw:[Pn]}));const Tb=JSON.parse('[{"_id":"59a7035c3c3f3854a788085c","index":0,"guid":"f3f7f587-575a-4339-8af6-09a46b75d4c8","isActive":true,"balance":"$1,749.46","picture":"http://placehold.it/32x32","age":20,"eyeColor":"brown","name":{"first":"Linda","last":"Rios"},"company":"EXOTERIC","email":"linda.rios@exoteric.io","phone":"+1 (930) 590-3443","address":"357 Beaver Street, Sims, Nebraska, 5471","about":"Esse aliquip mollit amet veniam incididunt minim id. Aliqua enim id aliquip sunt anim. Cupidatat sint enim Lorem velit pariatur ut. Excepteur proident cillum mollit sint incididunt. Consectetur commodo exercitation enim quis sunt ad. Deserunt consectetur commodo laborum exercitation occaecat sunt est eu enim minim mollit adipisicing laboris. Cillum labore ex sit commodo.","registered":"Tuesday, September 2, 2014 8:17 PM","latitude":"-44.454422","longitude":"2.933608","tags":["exercitation","ad","occaecat","exercitation","nulla"],"favoriteFruit":"strawberry"},{"_id":"59a7035cfd448c2124e2d2e1","index":1,"guid":"592b55b6-9cf2-4977-881d-328d332e0c28","isActive":true,"balance":"$3,685.52","picture":"http://placehold.it/32x32","age":34,"eyeColor":"blue","name":{"first":"Shepard","last":"Sykes"},"company":"COMSTAR","email":"shepard.sykes@comstar.biz","phone":"+1 (902) 596-2183","address":"561 Emmons Avenue, Freelandville, South Carolina, 263","about":"Incididunt consequat mollit laborum adipisicing. Veniam occaecat pariatur aliqua nisi adipisicing. Dolor minim cupidatat cupidatat ad officia irure consectetur consectetur nostrud elit laboris enim aliquip est. Enim sunt eu veniam et incididunt dolore et anim laboris cupidatat minim veniam culpa. Laborum mollit nulla aute proident velit sint officia nisi ad amet Lorem in commodo ipsum. Enim ex deserunt ullamco ex anim velit officia culpa ut. Officia consectetur est ipsum ex do fugiat enim nulla.","registered":"Wednesday, March 29, 2017 2:43 PM","latitude":"4.738078","longitude":"78.425259","tags":["commodo","fugiat","veniam","do","ullamco"],"favoriteFruit":"apple"},{"_id":"59a7035c2c3fdc2132b75ce1","index":2,"guid":"9e5a4bc8-cda3-40e4-a7cc-45d60d4b9298","isActive":false,"balance":"$1,111.57","picture":"http://placehold.it/32x32","age":32,"eyeColor":"green","name":{"first":"Dean","last":"Giles"},"company":"PANZENT","email":"dean.giles@panzent.ca","phone":"+1 (987) 442-3557","address":"522 Meadow Street, Chase, Texas, 8590","about":"Ut amet sint est eiusmod deserunt reprehenderit aliquip laborum quis anim qui commodo do anim. Dolor anim ullamco mollit nulla adipisicing incididunt. Culpa laboris voluptate adipisicing adipisicing. Culpa pariatur exercitation ea nisi Lorem quis cillum dolore magna velit dolore aliqua aliqua. Dolore ea sint ex proident consectetur do ullamco elit nostrud nostrud. Nulla aliquip consectetur officia quis minim minim laborum deserunt.","registered":"Wednesday, December 10, 2014 6:10 PM","latitude":"-7.970468","longitude":"-27.062504","tags":["sint","eiusmod","magna","non","consectetur"],"favoriteFruit":"strawberry"},{"_id":"59a7035c755454cd6d25074b","index":3,"guid":"e586cb29-3d23-4f08-b287-1b2907a2df03","isActive":false,"balance":"$1,060.21","picture":"http://placehold.it/32x32","age":34,"eyeColor":"brown","name":{"first":"Celina","last":"French"},"company":"NAMEGEN","email":"celina.french@namegen.name","phone":"+1 (818) 435-3328","address":"499 Matthews Court, Dante, Florida, 9119","about":"Reprehenderit est pariatur dolore culpa amet irure occaecat quis tempor consectetur duis non eiusmod. Et ut quis enim occaecat eu duis anim magna magna amet commodo ut est ullamco. Ex ex ex enim et fugiat deserunt enim. Veniam pariatur est ullamco cupidatat. Esse magna veniam sunt consequat excepteur ad dolor qui do eiusmod. Sit mollit consequat cupidatat deserunt occaecat. Esse ut est minim ut occaecat consequat irure irure adipisicing culpa minim deserunt aliquip.","registered":"Wednesday, February 5, 2014 9:30 PM","latitude":"-56.117732","longitude":"28.272471","tags":["est","dolore","tempor","sint","reprehenderit"],"favoriteFruit":"apple"},{"_id":"59a7035cd142c5382245806d","index":4,"guid":"d349763f-a096-4000-9729-2aa56f48930a","isActive":true,"balance":"$1,941.06","picture":"http://placehold.it/32x32","age":20,"eyeColor":"green","name":{"first":"Jordan","last":"Hays"},"company":"CODACT","email":"jordan.hays@codact.com","phone":"+1 (869) 519-3768","address":"193 Harman Street, Osmond, Louisiana, 2271","about":"Proident aliqua ut ea ipsum. Velit ipsum reprehenderit irure occaecat ut consequat. Officia esse non eiusmod qui.","registered":"Monday, April 28, 2014 1:28 AM","latitude":"-89.041531","longitude":"-160.159812","tags":["quis","deserunt","do","voluptate","occaecat"],"favoriteFruit":"apple"},{"_id":"59a7035c8fff5d3333b4fe39","index":5,"guid":"3d14ae73-ff24-40fe-9053-e7cb2b8a9c15","isActive":false,"balance":"$3,108.51","picture":"http://placehold.it/32x32","age":20,"eyeColor":"green","name":{"first":"Rosa","last":"Roberts"},"company":"EXOSPEED","email":"rosa.roberts@exospeed.co.uk","phone":"+1 (998) 497-3272","address":"769 Barwell Terrace, Orin, New Mexico, 8896","about":"Et aliqua fugiat aliqua qui anim dolore ex nostrud aute cupidatat esse et sit. Labore fugiat aute nostrud laborum eiusmod esse occaecat. Voluptate qui nostrud reprehenderit elit ex commodo ut dolore adipisicing voluptate. Ea adipisicing elit Lorem dolor sint nostrud laborum sunt velit dolor occaecat incididunt. Fugiat et velit et laborum laborum est nulla id est eiusmod et tempor ad officia. Aliquip do voluptate aliquip dolor reprehenderit do qui incididunt deserunt ex dolore. Nulla dolore quis velit esse non nulla minim eiusmod voluptate occaecat labore.","registered":"Thursday, October 16, 2014 6:38 AM","latitude":"37.51662","longitude":"-174.567784","tags":["mollit","dolor","dolore","ad","nisi"],"favoriteFruit":"banana"},{"_id":"59a7035c8de046ebba5f59ee","index":6,"guid":"86adfcea-5212-41f1-a481-50fd039731ad","isActive":false,"balance":"$1,638.80","picture":"http://placehold.it/32x32","age":37,"eyeColor":"brown","name":{"first":"Twila","last":"Richard"},"company":"ANACHO","email":"twila.richard@anacho.info","phone":"+1 (804) 546-2248","address":"431 Paerdegat Avenue, Tioga, Northern Mariana Islands, 9395","about":"Excepteur ipsum nostrud occaecat quis. Excepteur mollit aute sunt sunt. Minim consequat magna ut quis officia sit ut magna excepteur dolor aliquip ad. Velit aliquip eiusmod qui proident dolore voluptate consectetur minim aliquip.","registered":"Monday, October 13, 2014 2:00 PM","latitude":"47.176743","longitude":"49.680616","tags":["et","enim","quis","est","eu"],"favoriteFruit":"banana"},{"_id":"59a7035c38e8215d200313f4","index":7,"guid":"3658b420-9457-45df-95f5-d7c67b20b179","isActive":false,"balance":"$1,077.13","picture":"http://placehold.it/32x32","age":31,"eyeColor":"blue","name":{"first":"Elsie","last":"Dyer"},"company":"INQUALA","email":"elsie.dyer@inquala.org","phone":"+1 (874) 419-3985","address":"800 McKibbin Street, Dola, Utah, 3188","about":"Labore veniam ea velit proident amet exercitation quis ullamco. Labore ad aute aliquip veniam deserunt fugiat. Tempor tempor qui eiusmod sunt aliqua.","registered":"Sunday, October 11, 2015 2:29 PM","latitude":"-25.364163","longitude":"70.888205","tags":["ipsum","est","adipisicing","occaecat","esse"],"favoriteFruit":"apple"},{"_id":"59a7035c76c334a6b24e7006","index":8,"guid":"844bad84-5eaa-4f19-ae1c-9f0457ddf2a7","isActive":false,"balance":"$1,450.12","picture":"http://placehold.it/32x32","age":35,"eyeColor":"green","name":{"first":"Chrystal","last":"Vega"},"company":"TALKOLA","email":"chrystal.vega@talkola.me","phone":"+1 (840) 479-2105","address":"294 Greenwood Avenue, Jackpot, Indiana, 5299","about":"Ipsum irure non fugiat do sit aute eiusmod laboris. Laboris duis anim occaecat commodo id elit consequat culpa ex qui. Aute ea Lorem proident commodo minim. Deserunt non occaecat laboris velit sit. Elit nisi amet consectetur aliqua sint quis veniam consectetur cupidatat incididunt sunt. Do aute irure irure nisi laborum officia do ad ex veniam aliquip enim voluptate nisi.","registered":"Sunday, May 1, 2016 4:47 AM","latitude":"65.873664","longitude":"75.550181","tags":["eu","tempor","est","amet","non"],"favoriteFruit":"strawberry"},{"_id":"59a7035cd4a9a2a1edc42ab3","index":9,"guid":"858e9092-389a-4052-9bc4-57b9a694dd68","isActive":false,"balance":"$1,861.41","picture":"http://placehold.it/32x32","age":33,"eyeColor":"brown","name":{"first":"Ellison","last":"Waters"},"company":"REVERSUS","email":"ellison.waters@reversus.us","phone":"+1 (862) 537-3521","address":"586 Lewis Place, Manitou, Tennessee, 7985","about":"Pariatur voluptate culpa velit ullamco labore pariatur magna sit aliqua. Elit deserunt pariatur minim dolor eu ex do qui. Culpa minim amet dolor mollit voluptate minim. Nostrud eiusmod cupidatat fugiat do laboris duis nisi et officia. Lorem labore nulla voluptate ex eu excepteur nostrud qui proident nulla dolor ea in. Minim ipsum id Lorem minim enim. Ad aliquip ex Lorem in excepteur excepteur eiusmod ad.","registered":"Wednesday, June 14, 2017 6:20 AM","latitude":"-34.20548","longitude":"-75.451382","tags":["mollit","labore","quis","aliquip","aliqua"],"favoriteFruit":"apple"},{"_id":"59a7035c109f497ba9ac56b9","index":10,"guid":"1cfba083-eeef-453b-b9fc-b7078a1464be","isActive":true,"balance":"$2,000.50","picture":"http://placehold.it/32x32","age":22,"eyeColor":"green","name":{"first":"Summer","last":"Stevens"},"company":"ISONUS","email":"summer.stevens@isonus.tv","phone":"+1 (872) 424-2890","address":"894 Nichols Avenue, Summertown, Mississippi, 4356","about":"Consequat mollit eiusmod non reprehenderit Lorem esse est sit dolore laborum amet do. Tempor excepteur do esse irure sint elit tempor amet proident Lorem minim. Quis id mollit id ad labore minim sunt ipsum aliqua aliquip et cupidatat id. Deserunt commodo laborum exercitation cupidatat laborum laboris nostrud labore eu. Excepteur ex duis esse Lorem anim commodo irure reprehenderit excepteur laboris Lorem anim. Pariatur labore labore officia voluptate officia ex amet nostrud exercitation consequat tempor fugiat. Ea reprehenderit occaecat culpa quis reprehenderit eiusmod officia aliquip aliqua nisi.","registered":"Thursday, June 22, 2017 10:35 PM","latitude":"89.231184","longitude":"-110.234136","tags":["enim","cillum","labore","aliqua","aute"],"favoriteFruit":"apple"},{"_id":"59a7035c51f4cce963a70e0b","index":11,"guid":"9517b4f4-60d6-4b23-82c7-013e1a8f3d89","isActive":false,"balance":"$1,744.33","picture":"http://placehold.it/32x32","age":36,"eyeColor":"brown","name":{"first":"Roach","last":"Mccoy"},"company":"RUBADUB","email":"roach.mccoy@rubadub.net","phone":"+1 (820) 452-3141","address":"600 Centre Street, Tooleville, Ohio, 7044","about":"Amet incididunt duis nisi mollit amet consectetur. Sunt officia veniam incididunt dolore minim deserunt occaecat nostrud est. Aliqua deserunt anim Lorem ipsum elit in ea enim est magna velit. Consectetur eiusmod in cillum culpa.","registered":"Monday, October 3, 2016 6:46 AM","latitude":"81.385787","longitude":"14.146369","tags":["nulla","et","ullamco","non","cupidatat"],"favoriteFruit":"apple"},{"_id":"59a7035c93884daa0668d951","index":12,"guid":"2fbe934b-bdb6-4b2d-957a-33cc7f094e48","isActive":true,"balance":"$2,992.96","picture":"http://placehold.it/32x32","age":20,"eyeColor":"blue","name":{"first":"Rachel","last":"Perry"},"company":"INTERLOO","email":"rachel.perry@interloo.io","phone":"+1 (959) 502-3649","address":"640 Hausman Street, Walland, New York, 9676","about":"Veniam eu veniam magna Lorem pariatur sunt minim reprehenderit nulla proident. Eiusmod ipsum qui eu amet qui officia sunt. Elit et esse sit elit cillum eiusmod.","registered":"Sunday, July 30, 2017 4:32 PM","latitude":"-10.871728","longitude":"147.135976","tags":["ullamco","enim","voluptate","anim","exercitation"],"favoriteFruit":"strawberry"},{"_id":"59a7035c67f269f9c70b9b97","index":13,"guid":"4bd0c91a-850c-4754-90df-be98cedd6d32","isActive":true,"balance":"$1,851.74","picture":"http://placehold.it/32x32","age":40,"eyeColor":"green","name":{"first":"Sims","last":"Rogers"},"company":"APEXTRI","email":"sims.rogers@apextri.biz","phone":"+1 (948) 503-2531","address":"312 Mill Avenue, Movico, Maryland, 3515","about":"Excepteur sit est consectetur voluptate sit veniam occaecat non. Laboris quis amet officia sint minim. Eiusmod culpa magna in officia ipsum irure incididunt. Esse et culpa et laboris ex. Nulla sunt ex proident nisi nulla non enim eu. Excepteur esse culpa consectetur incididunt elit.","registered":"Tuesday, November 4, 2014 9:03 PM","latitude":"-33.25626","longitude":"-76.988402","tags":["laboris","quis","officia","nostrud","voluptate"],"favoriteFruit":"banana"},{"_id":"59a7035cf30ca465187c684e","index":14,"guid":"fd7ac270-5bd4-4d37-aebd-9a862d7c5758","isActive":false,"balance":"$2,720.13","picture":"http://placehold.it/32x32","age":22,"eyeColor":"brown","name":{"first":"Velasquez","last":"Oneil"},"company":"POLARIUM","email":"velasquez.oneil@polarium.ca","phone":"+1 (923) 469-3429","address":"900 Ash Street, Stonybrook, Montana, 3865","about":"Non quis eiusmod eiusmod culpa irure culpa Lorem est nulla Lorem dolore aliqua nostrud. Quis sunt amet qui id in amet in ad consectetur id. Mollit exercitation eiusmod ea sit ea id et sint cupidatat non ipsum excepteur. Magna ullamco ipsum tempor dolore.","registered":"Monday, March 16, 2015 12:39 PM","latitude":"37.362897","longitude":"-24.30902","tags":["Lorem","ipsum","consectetur","reprehenderit","ad"],"favoriteFruit":"apple"},{"_id":"59a7035cdebe34c7394c6efe","index":15,"guid":"ff8ebe48-a9ba-484f-932c-5d3c586b447e","isActive":true,"balance":"$1,622.24","picture":"http://placehold.it/32x32","age":25,"eyeColor":"blue","name":{"first":"Mckay","last":"Wiggins"},"company":"OVERFORK","email":"mckay.wiggins@overfork.name","phone":"+1 (960) 587-3564","address":"275 Ferry Place, Boykin, New Jersey, 3918","about":"Consequat nisi qui excepteur eiusmod consequat adipisicing laborum. Irure officia qui nisi nisi ut elit nostrud sit consequat consequat enim qui ullamco sit. Laborum cupidatat aute nostrud aute sit ex ex laborum.","registered":"Saturday, June 28, 2014 12:32 PM","latitude":"-3.221893","longitude":"-108.718689","tags":["consectetur","proident","ut","mollit","reprehenderit"],"favoriteFruit":"banana"},{"_id":"59a7035ca8c295ab38f923d8","index":16,"guid":"8be8d88b-62ef-4845-b37b-714e3dbc7044","isActive":true,"balance":"$1,747.26","picture":"http://placehold.it/32x32","age":36,"eyeColor":"brown","name":{"first":"Fox","last":"Dean"},"company":"SULTRAX","email":"fox.dean@sultrax.com","phone":"+1 (903) 587-2021","address":"181 Linden Street, Swartzville, Kansas, 1953","about":"Eiusmod sint ex deserunt aliqua deserunt cillum eu esse commodo et ad consequat adipisicing. Sint cupidatat qui do excepteur fugiat deserunt veniam est eiusmod velit. Laborum ad ex minim ea aliqua nisi nulla eu adipisicing. Voluptate qui incididunt pariatur labore et eiusmod tempor. Irure in commodo ex anim quis ex. Ex aliqua id in Lorem. Pariatur ullamco adipisicing et tempor ut proident irure voluptate dolore Lorem irure velit velit dolor.","registered":"Thursday, December 25, 2014 1:51 PM","latitude":"70.092261","longitude":"137.024184","tags":["nulla","dolor","quis","veniam","ex"],"favoriteFruit":"apple"},{"_id":"59a7035cbb6cff56beb77712","index":17,"guid":"fa0a5d41-ea46-4848-8811-1c711c8a09da","isActive":true,"balance":"$3,736.32","picture":"http://placehold.it/32x32","age":38,"eyeColor":"blue","name":{"first":"Savage","last":"Herring"},"company":"LIQUICOM","email":"savage.herring@liquicom.co.uk","phone":"+1 (935) 408-3913","address":"513 Elliott Place, Katonah, Delaware, 9510","about":"Laboris eu ullamco dolore cupidatat consectetur consequat nostrud. Veniam laborum nulla aute enim aute ut velit. Et ullamco dolore officia ex do. Lorem elit officia commodo pariatur cillum sit officia dolore.","registered":"Thursday, February 5, 2015 9:34 PM","latitude":"71.095484","longitude":"158.028683","tags":["velit","quis","magna","voluptate","ullamco"],"favoriteFruit":"banana"},{"_id":"59a7035c2621173c3db49132","index":18,"guid":"34ed9369-db1a-4531-b3a8-a26ab5818a1e","isActive":true,"balance":"$3,559.17","picture":"http://placehold.it/32x32","age":39,"eyeColor":"green","name":{"first":"Moon","last":"Conway"},"company":"HALAP","email":"moon.conway@halap.info","phone":"+1 (954) 475-2559","address":"242 Dupont Street, Blanco, Connecticut, 6962","about":"Esse adipisicing quis cupidatat mollit velit velit cillum. Nostrud cupidatat eu in commodo proident. Nisi veniam magna sint culpa minim commodo do aliqua enim minim consequat ad amet. Mollit amet culpa commodo ea reprehenderit.","registered":"Sunday, April 27, 2014 4:47 PM","latitude":"89.076813","longitude":"-158.156226","tags":["sit","adipisicing","Lorem","cillum","non"],"favoriteFruit":"apple"},{"_id":"59a7035cae04cd3b0b1c4ebe","index":19,"guid":"3134798e-4154-436d-a2df-9c6d622bd570","isActive":false,"balance":"$3,017.21","picture":"http://placehold.it/32x32","age":33,"eyeColor":"green","name":{"first":"Steele","last":"Gill"},"company":"TASMANIA","email":"steele.gill@tasmania.org","phone":"+1 (870) 424-2065","address":"702 High Street, Thomasville, Washington, 8973","about":"Voluptate pariatur laboris laborum dolore anim. Sit exercitation sint nisi qui sunt amet laborum aliqua nulla est ut. Cupidatat sunt fugiat anim consectetur commodo elit consequat.","registered":"Monday, August 24, 2015 9:41 AM","latitude":"-73.125779","longitude":"158.426667","tags":["proident","reprehenderit","elit","dolore","voluptate"],"favoriteFruit":"apple"},{"_id":"59a7035c3ff747576abe0ce4","index":20,"guid":"53462778-e892-41e6-9661-bd3837cf4fdb","isActive":true,"balance":"$1,339.97","picture":"http://placehold.it/32x32","age":36,"eyeColor":"green","name":{"first":"Wiley","last":"Jimenez"},"company":"ENAUT","email":"wiley.jimenez@enaut.me","phone":"+1 (800) 495-2091","address":"730 Gunnison Court, Bennett, Georgia, 3983","about":"Mollit eu dolor dolore incididunt ex nisi duis do magna in. Dolore et eiusmod velit sint consequat officia ad veniam qui cupidatat. Nulla dolor sit ipsum do. Esse dolor commodo qui ad dolore mollit dolore nulla nostrud culpa consectetur elit voluptate. Cupidatat irure adipisicing et enim officia. Aliquip velit id cupidatat non cupidatat reprehenderit enim irure incididunt commodo ipsum cupidatat.","registered":"Tuesday, March 18, 2014 7:58 PM","latitude":"-41.676046","longitude":"51.435099","tags":["cupidatat","reprehenderit","exercitation","occaecat","commodo"],"favoriteFruit":"banana"},{"_id":"59a7035c7ab804d6508045ad","index":21,"guid":"c3b56fa4-1b35-4142-8687-18eacd39f3ff","isActive":false,"balance":"$1,661.76","picture":"http://placehold.it/32x32","age":35,"eyeColor":"green","name":{"first":"Vazquez","last":"Goodman"},"company":"ROUGHIES","email":"vazquez.goodman@roughies.us","phone":"+1 (982) 410-2800","address":"105 Green Street, Cutter, Rhode Island, 6634","about":"Lorem exercitation quis et consectetur id mollit labore ea enim nulla. Quis ea aliqua irure dolore ut cupidatat dolore labore quis mollit culpa culpa quis qui. Fugiat aliqua non ex deserunt exercitation ut cillum aliquip ipsum ex. Consequat do nostrud officia tempor elit tempor amet laborum non. Nulla in velit exercitation veniam in fugiat cupidatat.","registered":"Tuesday, July 4, 2017 12:38 AM","latitude":"-42.644916","longitude":"-11.217395","tags":["ut","minim","ut","aliqua","veniam"],"favoriteFruit":"strawberry"},{"_id":"59a7035c526b5608e65cf21b","index":22,"guid":"14fe6b2e-b139-4989-a6f6-a17ecd830c28","isActive":true,"balance":"$2,516.68","picture":"http://placehold.it/32x32","age":22,"eyeColor":"green","name":{"first":"Castaneda","last":"Tanner"},"company":"QUAREX","email":"castaneda.tanner@quarex.tv","phone":"+1 (940) 527-3149","address":"654 Stockholm Street, Cazadero, Oklahoma, 3236","about":"Aute commodo ex ex qui qui amet. Sunt qui irure mollit exercitation culpa aliquip eiusmod dolor mollit laborum et irure exercitation aute. Qui ad ullamco anim laborum mollit et est incididunt sit anim ullamco dolor reprehenderit. Lorem non ea pariatur non dolor.","registered":"Tuesday, October 14, 2014 7:55 AM","latitude":"-66.185306","longitude":"-13.503575","tags":["tempor","pariatur","proident","mollit","consectetur"],"favoriteFruit":"banana"},{"_id":"59a7035c8316916dc8650037","index":23,"guid":"4e2338f8-827b-4772-bfda-7b3e0f3172e8","isActive":false,"balance":"$3,630.85","picture":"http://placehold.it/32x32","age":26,"eyeColor":"brown","name":{"first":"Kirby","last":"Holt"},"company":"WARETEL","email":"kirby.holt@waretel.net","phone":"+1 (857) 494-2330","address":"649 Dinsmore Place, Day, North Carolina, 9524","about":"Ex consectetur laborum aliquip est duis in adipisicing aliqua minim. Exercitation dolor quis voluptate quis eu labore esse. Tempor et cupidatat occaecat magna duis non et ad amet non dolore non. Sunt qui id ullamco reprehenderit qui ex nisi elit ut cupidatat magna enim fugiat officia. Et enim excepteur qui est. Quis ut enim eiusmod consequat ipsum anim occaecat.","registered":"Sunday, March 26, 2017 1:35 PM","latitude":"37.646166","longitude":"-69.921208","tags":["irure","deserunt","laborum","do","laboris"],"favoriteFruit":"strawberry"},{"_id":"59a7035c615510a6f629ae78","index":24,"guid":"1c1fb554-5a33-487f-9790-893540af3969","isActive":true,"balance":"$2,016.60","picture":"http://placehold.it/32x32","age":20,"eyeColor":"blue","name":{"first":"Arline","last":"Norton"},"company":"REPETWIRE","email":"arline.norton@repetwire.io","phone":"+1 (816) 524-2522","address":"552 Dewitt Avenue, Edgewater, Maine, 203","about":"Officia tempor magna dolore ex. Non mollit elit proident sint veniam irure qui laboris laboris dolore reprehenderit. Nisi fugiat nulla pariatur veniam esse id dolor est deserunt commodo.","registered":"Saturday, February 11, 2017 7:47 AM","latitude":"88.125487","longitude":"108.126647","tags":["sint","velit","quis","ut","sint"],"favoriteFruit":"banana"},{"_id":"59a7035ccf388074ba52a49a","index":25,"guid":"00f81875-bcbf-482e-897b-b3819259ec10","isActive":false,"balance":"$2,846.52","picture":"http://placehold.it/32x32","age":39,"eyeColor":"green","name":{"first":"Chan","last":"Hansen"},"company":"MICRONAUT","email":"chan.hansen@micronaut.biz","phone":"+1 (833) 595-2815","address":"525 Rutland Road, Muse, Pennsylvania, 9512","about":"Cupidatat elit laboris elit duis duis duis eiusmod veniam id aliqua ea qui sunt. Ex ea ullamco do sint. Anim aliquip incididunt voluptate pariatur amet proident cillum. Aliqua ad fugiat est ea. Eu ullamco dolore elit nostrud.","registered":"Sunday, April 19, 2015 7:45 PM","latitude":"-43.064419","longitude":"50.672979","tags":["excepteur","nostrud","ea","sint","enim"],"favoriteFruit":"banana"},{"_id":"59a7035cc0324a9841c61b82","index":26,"guid":"655ddaf6-cf4b-4df9-a333-15d01bd98ffe","isActive":false,"balance":"$3,410.69","picture":"http://placehold.it/32x32","age":29,"eyeColor":"blue","name":{"first":"Aida","last":"Mueller"},"company":"GEEKOL","email":"aida.mueller@geekol.ca","phone":"+1 (907) 458-3337","address":"608 Herkimer Street, Caron, North Dakota, 1283","about":"Qui officia cupidatat nostrud est laboris nisi cupidatat veniam excepteur aute et reprehenderit ea deserunt. Deserunt anim duis non aliqua et non reprehenderit. Excepteur sunt magna fugiat incididunt esse esse eiusmod cupidatat magna elit nostrud laborum. Pariatur ullamco laborum cupidatat exercitation aliquip consectetur culpa dolore mollit eiusmod. Veniam aliquip commodo mollit sunt et aute voluptate officia aliquip. Veniam exercitation exercitation sunt proident occaecat veniam labore consectetur laborum.","registered":"Wednesday, October 7, 2015 9:39 AM","latitude":"-75.452339","longitude":"102.759886","tags":["cupidatat","esse","ex","ut","culpa"],"favoriteFruit":"apple"},{"_id":"59a7035c69bf27034fc83efb","index":27,"guid":"52d4926e-74b5-4b74-ae54-9da7808f924e","isActive":false,"balance":"$3,905.82","picture":"http://placehold.it/32x32","age":24,"eyeColor":"green","name":{"first":"Reyes","last":"Johnston"},"company":"CIRCUM","email":"reyes.johnston@circum.name","phone":"+1 (860) 459-3108","address":"319 Alabama Avenue, Stollings, Iowa, 7144","about":"Veniam et magna proident elit culpa est incididunt dolore. Et esse incididunt occaecat nostrud reprehenderit excepteur cupidatat id elit id eiusmod sint consequat. Voluptate fugiat cupidatat proident qui veniam cupidatat aliqua consequat exercitation irure id fugiat dolor. Ullamco esse et eiusmod ullamco. Consequat labore elit amet voluptate fugiat consequat aute cupidatat sunt deserunt et ad quis esse.","registered":"Saturday, August 2, 2014 10:31 AM","latitude":"-3.236452","longitude":"112.018362","tags":["eu","cupidatat","deserunt","culpa","sint"],"favoriteFruit":"apple"},{"_id":"59a7035c5466da4d8723624d","index":28,"guid":"f14cd57c-112f-4e05-be74-dcd217ffcd8d","isActive":true,"balance":"$1,541.40","picture":"http://placehold.it/32x32","age":37,"eyeColor":"green","name":{"first":"Nash","last":"Lane"},"company":"GEOFARM","email":"nash.lane@geofarm.com","phone":"+1 (925) 410-3330","address":"138 Just Court, Loomis, Marshall Islands, 360","about":"Minim aliquip ea minim nulla excepteur adipisicing. Labore magna ad minim ex eiusmod id consequat occaecat ea ea cupidatat id do consectetur. Mollit officia dolor qui eiusmod aute laboris incididunt dolore anim nulla ut excepteur aliquip est. Ipsum mollit esse elit dolor quis do laboris ad fugiat ullamco incididunt. Non non sit sunt culpa qui irure irure aliqua exercitation et incididunt. Esse amet id in fugiat.","registered":"Monday, June 26, 2017 9:25 AM","latitude":"-79.044765","longitude":"-102.699496","tags":["Lorem","voluptate","id","sit","et"],"favoriteFruit":"strawberry"},{"_id":"59a7035c0136625e4b0cf495","index":29,"guid":"209e068f-910c-4497-8e68-87b08bbff4f4","isActive":true,"balance":"$3,881.49","picture":"http://placehold.it/32x32","age":26,"eyeColor":"green","name":{"first":"Aline","last":"Dale"},"company":"ZOINAGE","email":"aline.dale@zoinage.co.uk","phone":"+1 (963) 421-3067","address":"844 Freeman Street, Cornucopia, Alaska, 8933","about":"Est aliqua ea exercitation labore est non cillum velit elit tempor est ex. Sunt sit non excepteur sit dolor quis excepteur dolore commodo deserunt consequat fugiat fugiat excepteur. Sit sunt ad officia ea deserunt fugiat Lorem elit consectetur qui. Do aliqua dolore reprehenderit ullamco elit eiusmod laboris elit velit proident amet proident quis sunt.","registered":"Sunday, November 16, 2014 5:32 PM","latitude":"-5.445644","longitude":"57.217008","tags":["sint","sit","ea","commodo","ex"],"favoriteFruit":"apple"},{"_id":"59a7035ccde7c6362570428b","index":30,"guid":"de265047-a6b8-4dca-988a-82ae04462a6a","isActive":true,"balance":"$1,630.59","picture":"http://placehold.it/32x32","age":40,"eyeColor":"blue","name":{"first":"Bates","last":"Meyer"},"company":"KIDGREASE","email":"bates.meyer@kidgrease.info","phone":"+1 (832) 599-3279","address":"140 Newport Street, Needmore, Arkansas, 2736","about":"Irure exercitation aute non laboris anim dolore velit ut enim nostrud sit. Laboris reprehenderit laboris velit in laborum id mollit do deserunt et. Adipisicing labore et non tempor est commodo labore. Sit ut veniam cupidatat adipisicing amet.","registered":"Thursday, July 17, 2014 3:58 PM","latitude":"66.724748","longitude":"-176.746077","tags":["eiusmod","exercitation","proident","aliqua","do"],"favoriteFruit":"apple"},{"_id":"59a7035ce132271d5fa94348","index":31,"guid":"e8305fec-8bf2-40f3-8015-d87610cfc7ea","isActive":false,"balance":"$2,318.75","picture":"http://placehold.it/32x32","age":28,"eyeColor":"green","name":{"first":"Stevens","last":"Snider"},"company":"BIOSPAN","email":"stevens.snider@biospan.org","phone":"+1 (811) 592-3620","address":"105 Dunham Place, Malott, Virginia, 1579","about":"Laborum labore elit amet irure qui quis labore proident velit veniam eiusmod aliquip. Ea nostrud et cupidatat Lorem qui. Minim ex sint duis officia anim sit sit et amet incididunt eu nulla.","registered":"Thursday, August 28, 2014 1:59 AM","latitude":"51.741171","longitude":"-167.91722","tags":["enim","deserunt","duis","est","eiusmod"],"favoriteFruit":"strawberry"},{"_id":"59a7035c98fce222722467df","index":32,"guid":"efae3f87-8d6a-4d84-af43-3a8e778bb3f2","isActive":false,"balance":"$2,937.56","picture":"http://placehold.it/32x32","age":31,"eyeColor":"blue","name":{"first":"Doreen","last":"Carroll"},"company":"TECHTRIX","email":"doreen.carroll@techtrix.me","phone":"+1 (847) 505-2539","address":"154 Alice Court, Marshall, Arizona, 6156","about":"Occaecat duis consectetur consectetur sint. Laboris ut esse Lorem duis labore deserunt consectetur ex sunt dolor non minim occaecat magna. Id qui magna occaecat elit consequat aliquip ex mollit magna. Tempor deserunt voluptate tempor magna pariatur ex fugiat veniam occaecat incididunt reprehenderit fugiat adipisicing. Occaecat magna voluptate proident cillum minim occaecat.","registered":"Tuesday, October 28, 2014 7:06 AM","latitude":"87.516681","longitude":"81.720297","tags":["irure","est","sint","consectetur","labore"],"favoriteFruit":"strawberry"},{"_id":"59a7035c4447df5e0d76d793","index":33,"guid":"ed9619fb-eed3-4e03-9d3f-eb0cfa247e9b","isActive":false,"balance":"$1,095.64","picture":"http://placehold.it/32x32","age":31,"eyeColor":"green","name":{"first":"Mcclain","last":"Berry"},"company":"SHEPARD","email":"mcclain.berry@shepard.us","phone":"+1 (919) 411-2370","address":"736 Aviation Road, Breinigsville, Guam, 1225","about":"Aliqua deserunt et dolor eiusmod quis consequat veniam nisi dolore laborum. Sit irure incididunt excepteur sint non. Aliqua esse culpa id cupidatat. Laboris irure eu do irure labore pariatur sunt exercitation aliquip anim commodo eu laboris aliqua. Mollit nostrud est quis nisi irure reprehenderit. Ullamco ipsum culpa esse proident do nulla nostrud do. Nisi pariatur voluptate occaecat sint veniam ex occaecat.","registered":"Friday, March 20, 2015 3:27 AM","latitude":"-54.396135","longitude":"-105.425605","tags":["anim","eiusmod","officia","eiusmod","ut"],"favoriteFruit":"strawberry"},{"_id":"59a7035c7fa79cfdce33ed47","index":34,"guid":"f9bfc8c7-9c60-49d6-a6ca-899d0abb6821","isActive":true,"balance":"$1,976.75","picture":"http://placehold.it/32x32","age":30,"eyeColor":"brown","name":{"first":"Bullock","last":"Kane"},"company":"BULLJUICE","email":"bullock.kane@bulljuice.tv","phone":"+1 (978) 466-3528","address":"407 Kensington Street, Talpa, Oregon, 9641","about":"Et duis ex sit quis sunt qui ullamco nisi. Sit Lorem deserunt do magna eiusmod ad tempor consectetur. Tempor duis ea eiusmod ea qui ad veniam aute culpa ut aute sint et nisi.","registered":"Tuesday, July 29, 2014 7:54 PM","latitude":"-50.495738","longitude":"-47.802041","tags":["velit","ad","aliqua","ut","eiusmod"],"favoriteFruit":"strawberry"},{"_id":"59a7035cded1262c1ea8cd10","index":35,"guid":"13731f59-5080-42f7-a160-0d88ad8df56e","isActive":false,"balance":"$1,623.47","picture":"http://placehold.it/32x32","age":26,"eyeColor":"green","name":{"first":"Whitfield","last":"Love"},"company":"GEEKNET","email":"whitfield.love@geeknet.net","phone":"+1 (983) 406-3585","address":"633 Gilmore Court, Haring, Wyoming, 570","about":"Adipisicing consectetur pariatur nostrud labore ea commodo sit commodo deserunt irure. Duis tempor culpa cillum voluptate. Mollit dolore dolore ullamco eu aliqua. Commodo voluptate enim commodo magna est exercitation eu dolore occaecat deserunt occaecat non. Non duis cupidatat laborum ex duis tempor velit eiusmod do qui consequat ipsum enim in.","registered":"Saturday, September 13, 2014 5:06 AM","latitude":"89.899137","longitude":"85.210926","tags":["sunt","velit","amet","aute","exercitation"],"favoriteFruit":"strawberry"},{"_id":"59a7035ca48b45cbb5592453","index":36,"guid":"410cc140-1eda-4eed-a7e4-aa6b7b6e9aa5","isActive":false,"balance":"$2,155.95","picture":"http://placehold.it/32x32","age":39,"eyeColor":"green","name":{"first":"Jeannine","last":"Higgins"},"company":"ZOGAK","email":"jeannine.higgins@zogak.io","phone":"+1 (905) 580-2033","address":"796 Wyona Street, Whitmer, Hawaii, 3220","about":"Culpa occaecat eu Lorem elit officia ullamco velit labore officia occaecat esse quis in. Aute velit laboris nostrud cillum esse. Aute ullamco id consequat anim occaecat deserunt velit eu laborum amet dolor culpa. In fugiat magna commodo ipsum ea labore amet commodo culpa adipisicing. Ullamco ut velit ut sunt tempor pariatur consequat aute.","registered":"Sunday, November 15, 2015 7:41 AM","latitude":"28.630291","longitude":"116.437262","tags":["magna","laboris","aliqua","veniam","cillum"],"favoriteFruit":"banana"},{"_id":"59a7035c19fa4081667fec10","index":37,"guid":"fc527a60-87dc-4973-b29b-ae6c6a3a02a3","isActive":true,"balance":"$1,791.22","picture":"http://placehold.it/32x32","age":27,"eyeColor":"brown","name":{"first":"Kemp","last":"Combs"},"company":"PETIGEMS","email":"kemp.combs@petigems.biz","phone":"+1 (971) 558-2694","address":"248 Milton Street, Torboy, Wisconsin, 9525","about":"Dolor culpa occaecat occaecat magna Lorem officia laborum duis reprehenderit elit dolor. Dolor nisi sit id eiusmod elit aliqua minim. Aliqua sunt duis nisi do mollit voluptate nulla enim reprehenderit. Anim incididunt nulla anim cupidatat occaecat ea nulla Lorem.","registered":"Thursday, March 16, 2017 8:02 AM","latitude":"86.949155","longitude":"-10.576148","tags":["officia","proident","reprehenderit","eiusmod","et"],"favoriteFruit":"apple"},{"_id":"59a7035c353252c0b5bb78de","index":38,"guid":"185271ff-7cb7-4273-896c-801e927d69c7","isActive":true,"balance":"$2,800.39","picture":"http://placehold.it/32x32","age":28,"eyeColor":"brown","name":{"first":"Opal","last":"Bryan"},"company":"XOGGLE","email":"opal.bryan@xoggle.ca","phone":"+1 (853) 550-3730","address":"448 Crooke Avenue, Loyalhanna, Alabama, 2883","about":"Est laborum ad duis cupidatat pariatur velit adipisicing. Commodo cillum ex eiusmod qui exercitation enim excepteur qui. Lorem dolore mollit dolore id veniam in qui reprehenderit nulla. Nisi cupidatat occaecat reprehenderit ex non elit fugiat cupidatat cupidatat esse minim aute incididunt ea. Id adipisicing ex aute est ex in. Aliquip fugiat consequat in aliquip amet.","registered":"Saturday, May 13, 2017 3:33 AM","latitude":"-7.901608","longitude":"28.712133","tags":["officia","veniam","incididunt","proident","elit"],"favoriteFruit":"banana"},{"_id":"59a7035cf1abac8eda4dc81a","index":39,"guid":"2c60d9c5-71e7-4132-b520-7a66f3c6ee80","isActive":true,"balance":"$1,144.49","picture":"http://placehold.it/32x32","age":24,"eyeColor":"green","name":{"first":"Hurley","last":"Farley"},"company":"SENSATE","email":"hurley.farley@sensate.name","phone":"+1 (825) 493-3055","address":"310 Kings Place, Matheny, Michigan, 9118","about":"Ex irure do velit amet irure qui consectetur magna qui nulla. Mollit voluptate aute voluptate anim minim. Ea nisi nostrud laboris officia consequat voluptate ullamco. Consectetur et et ullamco occaecat consequat mollit dolore. Elit aliqua ex elit sit dolor elit nostrud. Mollit in quis cupidatat dolore. Anim anim reprehenderit elit quis consectetur velit sunt culpa pariatur esse amet cupidatat.","registered":"Wednesday, February 4, 2015 4:44 PM","latitude":"-13.003628","longitude":"-53.151513","tags":["nostrud","ipsum","sit","pariatur","eu"],"favoriteFruit":"banana"},{"_id":"59a7035cab834659496f07e6","index":40,"guid":"9b314f77-2132-4d67-a2e7-e321b1425489","isActive":false,"balance":"$1,695.47","picture":"http://placehold.it/32x32","age":38,"eyeColor":"green","name":{"first":"Gena","last":"Erickson"},"company":"SUREMAX","email":"gena.erickson@suremax.com","phone":"+1 (808) 587-3031","address":"953 Hamilton Walk, Grapeview, West Virginia, 5414","about":"Commodo adipisicing esse amet cupidatat aliquip non quis fugiat amet adipisicing proident irure. Officia officia amet est sit ea dolore nostrud. Magna veniam exercitation fugiat pariatur tempor aliquip pariatur laboris. Nisi magna consectetur mollit ex.","registered":"Sunday, January 22, 2017 4:08 AM","latitude":"66.697714","longitude":"-31.518386","tags":["reprehenderit","officia","consequat","officia","tempor"],"favoriteFruit":"apple"},{"_id":"59a7035cdf3d9271510da94f","index":41,"guid":"8add5d93-0a23-48c6-8f06-ae3eeb19b588","isActive":false,"balance":"$3,580.72","picture":"http://placehold.it/32x32","age":21,"eyeColor":"green","name":{"first":"Rivers","last":"Ray"},"company":"APPLICA","email":"rivers.ray@applica.co.uk","phone":"+1 (950) 599-2480","address":"362 Broome Street, Hickory, Nevada, 8639","about":"Eiusmod veniam cupidatat esse amet exercitation mollit nostrud cillum excepteur adipisicing qui irure. Velit laboris nulla ad dolor sint aute duis consectetur dolor do sit Lorem pariatur veniam. Adipisicing ullamco nisi id nostrud tempor esse pariatur id esse eu adipisicing laborum ut velit. Tempor et mollit ullamco ad nulla nulla exercitation tempor ullamco magna consequat dolor ea eu. Magna enim nisi ipsum exercitation labore eiusmod nulla et. Tempor est nisi commodo adipisicing culpa ipsum enim. Sint officia ea magna adipisicing ex aute cupidatat aliqua anim id laborum sunt.","registered":"Wednesday, April 15, 2015 9:15 AM","latitude":"4.898258","longitude":"86.671363","tags":["ullamco","deserunt","eu","sint","velit"],"favoriteFruit":"strawberry"},{"_id":"59a7035c27915d318dc46605","index":42,"guid":"391406a2-8a33-4dba-8188-703efc28ee6a","isActive":true,"balance":"$3,408.64","picture":"http://placehold.it/32x32","age":22,"eyeColor":"brown","name":{"first":"Pierce","last":"Warner"},"company":"GEEKKO","email":"pierce.warner@geekko.info","phone":"+1 (976) 432-3810","address":"620 Vandam Street, Churchill, District Of Columbia, 7273","about":"Deserunt nisi culpa voluptate non. Ex incididunt commodo incididunt duis aute pariatur minim. Aliquip labore et laborum qui tempor eu culpa anim cupidatat elit culpa id. Consequat consequat aute sint incididunt non proident Lorem. Tempor adipisicing ullamco enim ea incididunt pariatur minim incididunt dolore labore elit do exercitation velit.","registered":"Tuesday, January 26, 2016 5:09 PM","latitude":"18.840446","longitude":"-140.288934","tags":["pariatur","non","velit","ad","ipsum"],"favoriteFruit":"strawberry"},{"_id":"59a7035c121cb0d353274b8e","index":43,"guid":"601e5899-1adb-4034-83fb-a408d73eed3e","isActive":false,"balance":"$2,166.09","picture":"http://placehold.it/32x32","age":32,"eyeColor":"green","name":{"first":"Agnes","last":"Klein"},"company":"IPLAX","email":"agnes.klein@iplax.org","phone":"+1 (803) 526-2302","address":"873 Lynch Street, Epworth, Minnesota, 7604","about":"Commodo laboris ea mollit voluptate qui ea non consectetur consequat do est culpa in fugiat. Dolor dolore ea eiusmod aute labore non aliquip. Aliquip elit dolore consectetur veniam sit aliquip dolor nisi nulla in velit. Amet in enim velit pariatur fugiat cupidatat minim tempor id anim. Duis elit dolor in amet nostrud est. Qui dolor labore commodo ea ad officia.","registered":"Thursday, February 19, 2015 2:24 PM","latitude":"-67.101097","longitude":"50.717088","tags":["magna","veniam","do","ea","occaecat"],"favoriteFruit":"strawberry"},{"_id":"59a7035ce2051f3ecf26a443","index":44,"guid":"575f5eb2-764e-40ae-b7e7-df6e9ad613fd","isActive":true,"balance":"$2,790.19","picture":"http://placehold.it/32x32","age":24,"eyeColor":"green","name":{"first":"Mcconnell","last":"Flores"},"company":"INTRADISK","email":"mcconnell.flores@intradisk.me","phone":"+1 (941) 478-2925","address":"186 Noel Avenue, Gwynn, Kentucky, 7885","about":"Culpa officia proident aute laborum nulla reprehenderit veniam. In ex elit ut laborum aliquip voluptate Lorem cillum fugiat sunt magna aliqua. Ut ea ullamco aliqua est non Lorem sunt aliqua occaecat laborum sunt consectetur cillum.","registered":"Wednesday, April 8, 2015 2:31 AM","latitude":"-81.25321","longitude":"133.72738","tags":["cupidatat","excepteur","aute","in","aute"],"favoriteFruit":"strawberry"},{"_id":"59a7035c47fb9f9fde38fcd7","index":45,"guid":"e7b47778-d925-4b8e-ab14-84ba73def2b4","isActive":false,"balance":"$1,674.58","picture":"http://placehold.it/32x32","age":36,"eyeColor":"green","name":{"first":"Hunt","last":"Tyler"},"company":"SAVVY","email":"hunt.tyler@savvy.us","phone":"+1 (863) 598-2691","address":"611 Beadel Street, Roy, Federated States Of Micronesia, 2629","about":"Eiusmod aliquip eu sit sint sint duis Lorem minim adipisicing magna proident occaecat. Deserunt ex est et adipisicing nulla commodo est voluptate nulla. Voluptate cupidatat sit officia mollit elit laboris Lorem elit enim amet tempor cillum ullamco. Est dolor exercitation duis dolor.","registered":"Wednesday, March 15, 2017 11:03 AM","latitude":"69.912349","longitude":"153.385815","tags":["enim","aute","Lorem","magna","culpa"],"favoriteFruit":"apple"},{"_id":"59a7035ca9c9cde01a506db2","index":46,"guid":"7d592c62-decf-4783-a09e-50b17540385b","isActive":false,"balance":"$2,144.62","picture":"http://placehold.it/32x32","age":36,"eyeColor":"green","name":{"first":"Kayla","last":"Hines"},"company":"LUNCHPOD","email":"kayla.hines@lunchpod.tv","phone":"+1 (898) 445-3215","address":"387 Farragut Place, Keyport, Palau, 6584","about":"Officia cillum do adipisicing dolor Lorem laboris voluptate nulla nisi amet voluptate aliquip. Nostrud adipisicing elit incididunt minim consectetur magna et do excepteur ipsum occaecat occaecat laborum. Cupidatat veniam et qui Lorem anim non in quis tempor ullamco consectetur.","registered":"Thursday, December 10, 2015 11:19 AM","latitude":"-56.974919","longitude":"81.24329","tags":["amet","aute","officia","ea","eu"],"favoriteFruit":"strawberry"},{"_id":"59a7035c0e69eb2d00523cd6","index":47,"guid":"0e944922-c8b4-41d4-b772-fda678044be3","isActive":false,"balance":"$2,414.81","picture":"http://placehold.it/32x32","age":29,"eyeColor":"blue","name":{"first":"Galloway","last":"Martin"},"company":"GRONK","email":"galloway.martin@gronk.net","phone":"+1 (992) 421-2108","address":"782 Wyckoff Avenue, Austinburg, Missouri, 2703","about":"Exercitation adipisicing eiusmod quis culpa labore ipsum est labore occaecat enim. Occaecat et aute ipsum ea consectetur Lorem cupidatat ea aliquip amet exercitation enim magna laborum. Fugiat eiusmod anim amet veniam eiusmod enim pariatur. Dolore ex voluptate elit qui in in occaecat elit non commodo proident ea ad. Do fugiat ex reprehenderit dolor proident laboris et proident dolor quis.","registered":"Saturday, July 25, 2015 8:58 AM","latitude":"-67.079903","longitude":"45.040108","tags":["laborum","veniam","nulla","minim","labore"],"favoriteFruit":"apple"},{"_id":"59a7035cd0e6865eee4a787b","index":48,"guid":"311f5a7e-8c80-4e13-ba78-de4877c421ae","isActive":true,"balance":"$1,216.24","picture":"http://placehold.it/32x32","age":21,"eyeColor":"brown","name":{"first":"Delgado","last":"Logan"},"company":"ECOSYS","email":"delgado.logan@ecosys.io","phone":"+1 (817) 488-2527","address":"530 Montana Place, Longbranch, Puerto Rico, 2384","about":"Nulla est occaecat amet aliquip. Tempor eiusmod ullamco velit reprehenderit velit qui proident duis elit labore tempor esse pariatur. Adipisicing anim est quis veniam incididunt ipsum. Minim adipisicing amet adipisicing incididunt proident amet consequat id tempor veniam ullamco laboris ex nulla. Aliquip aute minim id laborum esse ut do ullamco. Duis duis officia incididunt fugiat aute velit laborum eu sit nulla.","registered":"Saturday, May 17, 2014 6:46 PM","latitude":"-31.5656","longitude":"-177.850334","tags":["aute","occaecat","do","sit","mollit"],"favoriteFruit":"apple"},{"_id":"59a7035cdc9d3370f810dae3","index":49,"guid":"c075d96d-9d39-4d1f-81ef-f5f3827a3ec5","isActive":false,"balance":"$1,487.55","picture":"http://placehold.it/32x32","age":32,"eyeColor":"blue","name":{"first":"Francine","last":"Williams"},"company":"ISODRIVE","email":"francine.williams@isodrive.biz","phone":"+1 (827) 552-3345","address":"184 Huron Street, Brady, Virgin Islands, 4981","about":"Mollit magna incididunt eiusmod esse. Et cillum cupidatat eiusmod magna. Officia commodo et nulla nisi duis.","registered":"Sunday, January 26, 2014 7:54 PM","latitude":"52.628824","longitude":"-162.282948","tags":["ex","do","ullamco","labore","qui"],"favoriteFruit":"strawberry"},{"_id":"59a7035c2d9fc6a61983949b","index":50,"guid":"cb0b9d70-84f7-42f9-a598-a9614ba5df34","isActive":true,"balance":"$3,458.93","picture":"http://placehold.it/32x32","age":31,"eyeColor":"brown","name":{"first":"Sheree","last":"Potter"},"company":"BICOL","email":"sheree.potter@bicol.ca","phone":"+1 (911) 520-2486","address":"536 Homecrest Court, Wilsonia, California, 7465","about":"Cillum nostrud eu eiusmod quis veniam nulla adipisicing. Minim irure aute veniam eiusmod mollit ex anim reprehenderit dolore id tempor laboris veniam nisi. Eiusmod ex et Lorem ea enim non aliqua. Minim consequat nisi mollit sint. Do consectetur nostrud irure culpa minim ea exercitation commodo cillum et incididunt fugiat incididunt. Aliqua exercitation elit ut et aliqua.","registered":"Sunday, October 18, 2015 2:26 PM","latitude":"89.490889","longitude":"-80.854052","tags":["id","mollit","exercitation","ullamco","enim"],"favoriteFruit":"apple"},{"_id":"59a7035c405328ddeaff8904","index":51,"guid":"99a63d65-324a-481a-9cac-05c1f9cac100","isActive":true,"balance":"$3,341.72","picture":"http://placehold.it/32x32","age":29,"eyeColor":"brown","name":{"first":"Miranda","last":"Sexton"},"company":"MARQET","email":"miranda.sexton@marqet.name","phone":"+1 (946) 415-3797","address":"340 Bath Avenue, Eagletown, Idaho, 5384","about":"Magna esse sint fugiat consequat consequat fugiat sint incididunt laboris elit do duis velit id. Cillum sint ut qui proident mollit duis et occaecat qui aliquip proident. Lorem exercitation ut in cupidatat anim cupidatat exercitation duis in.","registered":"Thursday, January 22, 2015 7:09 AM","latitude":"19.12383","longitude":"90.784467","tags":["in","commodo","amet","aute","anim"],"favoriteFruit":"apple"},{"_id":"59a7035cfd92740227c0f6b1","index":52,"guid":"b4c25087-f039-498a-a373-313af6acb6ef","isActive":false,"balance":"$1,126.25","picture":"http://placehold.it/32x32","age":20,"eyeColor":"blue","name":{"first":"Ofelia","last":"Carr"},"company":"ENTROPIX","email":"ofelia.carr@entropix.com","phone":"+1 (820) 593-2737","address":"142 Ocean Avenue, Condon, American Samoa, 4622","about":"Est voluptate nostrud deserunt proident deserunt. Enim voluptate enim officia duis consectetur aute cillum dolore. Anim nisi irure do nostrud incididunt qui velit velit. Officia laboris ullamco laboris aliqua ea adipisicing minim consectetur.","registered":"Thursday, January 28, 2016 11:39 PM","latitude":"19.542017","longitude":"-3.713091","tags":["culpa","commodo","fugiat","aliqua","tempor"],"favoriteFruit":"apple"},{"_id":"59a7035c248c6ba65270e46e","index":53,"guid":"7829626c-45e0-4c44-935f-3f44a6580e4a","isActive":true,"balance":"$2,456.51","picture":"http://placehold.it/32x32","age":32,"eyeColor":"brown","name":{"first":"Kasey","last":"Cooley"},"company":"NORALI","email":"kasey.cooley@norali.co.uk","phone":"+1 (861) 491-3340","address":"250 Hull Street, Alleghenyville, Massachusetts, 7051","about":"Eiusmod deserunt quis in culpa ipsum nulla labore pariatur qui occaecat veniam laborum commodo. Laboris veniam sit aliquip do veniam consequat amet. Labore nisi deserunt deserunt aliquip incididunt esse fugiat sunt dolore non reprehenderit. Sunt laboris ut irure aliquip veniam ullamco enim elit esse consequat eiusmod non. Dolor eu qui velit occaecat aliqua incididunt proident laboris.","registered":"Thursday, July 23, 2015 7:32 PM","latitude":"16.512867","longitude":"146.71739","tags":["officia","eu","Lorem","esse","commodo"],"favoriteFruit":"apple"},{"_id":"59a7035cbf98406486822269","index":54,"guid":"32812ecf-ac5d-4297-92f6-c35bb954b085","isActive":false,"balance":"$2,328.11","picture":"http://placehold.it/32x32","age":25,"eyeColor":"green","name":{"first":"Jordan","last":"Robbins"},"company":"GEEKOSIS","email":"jordan.robbins@geekosis.info","phone":"+1 (839) 498-2949","address":"957 Clymer Street, Fedora, New Hampshire, 5337","about":"Ad culpa ea amet voluptate commodo esse. Minim incididunt mollit nostrud incididunt ut id aute consequat consequat eiusmod. In et aute quis laborum ut pariatur tempor consequat laboris. Aliqua commodo ullamco sint sint ex ea nostrud qui veniam mollit. Voluptate cillum anim aliquip elit laboris et proident fugiat. Id laboris ut tempor magna quis dolor ea. Cupidatat sint dolor sunt minim sunt labore officia dolor mollit est.","registered":"Saturday, October 10, 2015 12:28 PM","latitude":"32.067311","longitude":"145.237322","tags":["in","magna","nisi","nisi","adipisicing"],"favoriteFruit":"apple"},{"_id":"59a7035c24b395b422e21bdd","index":55,"guid":"ddbeb6d9-ccc2-4bd3-b910-0197a5a3e978","isActive":false,"balance":"$3,534.04","picture":"http://placehold.it/32x32","age":34,"eyeColor":"brown","name":{"first":"Lewis","last":"Peck"},"company":"APEX","email":"lewis.peck@apex.org","phone":"+1 (980) 536-3987","address":"849 Covert Street, Clayville, Colorado, 1350","about":"Consequat dolore mollit mollit do voluptate cillum commodo. Enim reprehenderit sit amet do. Ullamco culpa sit veniam sint do labore voluptate adipisicing consequat. Occaecat velit adipisicing officia do duis ut ad minim ad. Nulla elit occaecat proident do ipsum occaecat. Dolore qui labore proident dolore ex nisi exercitation ut.","registered":"Sunday, July 6, 2014 4:13 PM","latitude":"-70.298709","longitude":"-164.729062","tags":["sit","sint","culpa","tempor","duis"],"favoriteFruit":"apple"},{"_id":"59a7035c75fbbf78833a6c43","index":56,"guid":"ff49457c-793d-443c-ac86-7b917352212a","isActive":false,"balance":"$2,224.91","picture":"http://placehold.it/32x32","age":36,"eyeColor":"blue","name":{"first":"Carlson","last":"Boone"},"company":"INSOURCE","email":"carlson.boone@insource.me","phone":"+1 (894) 513-2192","address":"478 Walker Court, Trinway, South Dakota, 7897","about":"Irure sit laborum laboris sint dolore in. Labore reprehenderit proident ad exercitation nulla pariatur nostrud non dolore quis laborum sit mollit reprehenderit. Esse cillum irure reprehenderit fugiat aute est id laborum commodo fugiat nulla magna tempor minim. Non irure officia sint aute dolor consectetur. Eu est incididunt aliqua sint id. Eiusmod cillum esse eu cupidatat deserunt eu Lorem enim nisi fugiat non. Ullamco cillum velit ex aute aute irure ad esse officia sint magna ex ad.","registered":"Thursday, February 20, 2014 12:28 AM","latitude":"-67.923152","longitude":"150.385512","tags":["Lorem","qui","adipisicing","ex","sunt"],"favoriteFruit":"banana"},{"_id":"59a7035c2cf8d9e54a6439d5","index":57,"guid":"df0727f4-2681-4bfe-8353-1712ef5a7b86","isActive":true,"balance":"$2,717.06","picture":"http://placehold.it/32x32","age":33,"eyeColor":"blue","name":{"first":"Warren","last":"Tate"},"company":"PAWNAGRA","email":"warren.tate@pawnagra.us","phone":"+1 (855) 426-3132","address":"695 Jamison Lane, Kent, Vermont, 5411","about":"Exercitation dolor et amet do incididunt in occaecat. Esse deserunt et nisi esse tempor enim minim excepteur sint. Culpa esse ipsum duis minim. Exercitation mollit reprehenderit laborum commodo.","registered":"Wednesday, January 27, 2016 5:49 PM","latitude":"16.929183","longitude":"-162.313654","tags":["non","anim","tempor","est","laboris"],"favoriteFruit":"banana"},{"_id":"59a7035c7f1fd5e7b8d1018e","index":58,"guid":"b1ce4a04-3ec6-46ed-9232-172ef5be3080","isActive":false,"balance":"$1,462.40","picture":"http://placehold.it/32x32","age":28,"eyeColor":"blue","name":{"first":"Adeline","last":"Salinas"},"company":"TROPOLIS","email":"adeline.salinas@tropolis.tv","phone":"+1 (879) 591-2242","address":"906 Haring Street, Helen, Nebraska, 8880","about":"Consectetur ad ad eu elit ullamco aute cillum labore id in deserunt. Irure laborum duis elit incididunt laborum cillum duis aliqua consectetur commodo. Et ex consectetur voluptate sunt enim sit tempor sunt aliqua. Mollit sit voluptate duis culpa qui nulla. Mollit duis irure laboris consectetur labore magna Lorem incididunt do mollit.","registered":"Tuesday, September 29, 2015 6:14 PM","latitude":"57.034722","longitude":"-32.396938","tags":["deserunt","incididunt","consectetur","in","tempor"],"favoriteFruit":"apple"},{"_id":"59a7035cfc2501326316c206","index":59,"guid":"12800369-5ca4-4078-8969-9858d5390982","isActive":false,"balance":"$1,108.78","picture":"http://placehold.it/32x32","age":30,"eyeColor":"green","name":{"first":"Newton","last":"Singleton"},"company":"PLAYCE","email":"newton.singleton@playce.net","phone":"+1 (869) 527-3116","address":"373 Vanderbilt Avenue, Germanton, South Carolina, 2961","about":"Cillum ullamco incididunt excepteur duis aliqua laborum exercitation quis cillum nulla aute ut cupidatat. Anim irure laboris non aliquip tempor dolore ipsum. Fugiat ea velit Lorem incididunt ex.","registered":"Friday, February 12, 2016 12:42 PM","latitude":"-52.203091","longitude":"-159.820805","tags":["culpa","qui","amet","amet","quis"],"favoriteFruit":"banana"},{"_id":"59a7035c487c20261c897e35","index":60,"guid":"a49ba126-7e12-448b-b6c7-358122c8be09","isActive":true,"balance":"$3,466.32","picture":"http://placehold.it/32x32","age":27,"eyeColor":"blue","name":{"first":"Noel","last":"Carney"},"company":"BUGSALL","email":"noel.carney@bugsall.io","phone":"+1 (868) 532-3842","address":"784 Danforth Street, Websterville, Texas, 4199","about":"Excepteur culpa laboris esse quis quis elit aliquip. Sit commodo eu enim elit in ea. Labore magna mollit minim veniam sint aliquip sit dolor.","registered":"Friday, May 22, 2015 10:16 PM","latitude":"-71.199536","longitude":"55.775326","tags":["ex","elit","in","id","occaecat"],"favoriteFruit":"banana"},{"_id":"59a7035c06a9abb1922bf0ce","index":61,"guid":"c6a670d5-a5f8-427a-bbd0-0bee7c36b334","isActive":false,"balance":"$3,769.45","picture":"http://placehold.it/32x32","age":33,"eyeColor":"brown","name":{"first":"Patrick","last":"Guerrero"},"company":"SOLGAN","email":"patrick.guerrero@solgan.biz","phone":"+1 (901) 586-2395","address":"523 Louisiana Avenue, Hampstead, Florida, 7360","about":"Consectetur mollit elit sunt minim. Ea deserunt elit sint culpa magna magna sit. Tempor ut eu nisi mollit minim non aliquip nisi eiusmod pariatur ullamco. Adipisicing ad esse dolor ipsum.","registered":"Wednesday, May 28, 2014 9:41 PM","latitude":"-48.779034","longitude":"42.915054","tags":["nulla","aliquip","proident","et","aliquip"],"favoriteFruit":"banana"},{"_id":"59a7035cbc3a0c2b0a2ad1c4","index":62,"guid":"995d2615-e8a9-4fd0-89d0-4e9f3237c47f","isActive":true,"balance":"$2,673.93","picture":"http://placehold.it/32x32","age":40,"eyeColor":"blue","name":{"first":"Chelsea","last":"Wood"},"company":"TYPHONICA","email":"chelsea.wood@typhonica.ca","phone":"+1 (876) 413-2919","address":"611 Seigel Court, Shawmut, Louisiana, 3898","about":"Officia labore ad id cupidatat dolore non irure id ut sit excepteur magna ea. Sint velit et do excepteur incididunt est proident veniam sit exercitation enim sit. Esse tempor ea reprehenderit ullamco consequat dolore. Pariatur qui voluptate mollit occaecat nisi dolore est ad duis non. Fugiat exercitation quis pariatur mollit ipsum mollit reprehenderit nostrud sint eu nisi ullamco officia. Consectetur veniam incididunt minim aliqua magna duis occaecat.","registered":"Thursday, January 5, 2017 3:32 PM","latitude":"-69.891714","longitude":"-0.420051","tags":["aliquip","non","dolor","ex","Lorem"],"favoriteFruit":"apple"},{"_id":"59a7035c493471e65ae4ae1f","index":63,"guid":"2cccc299-0164-4301-98af-f3b29855a599","isActive":true,"balance":"$1,641.77","picture":"http://placehold.it/32x32","age":21,"eyeColor":"green","name":{"first":"Stacy","last":"Drake"},"company":"ENJOLA","email":"stacy.drake@enjola.name","phone":"+1 (894) 485-3245","address":"218 Boardwalk , Vaughn, New Mexico, 1904","about":"Fugiat duis Lorem exercitation veniam ullamco aute occaecat ullamco non Lorem. Ex officia sint culpa magna occaecat laborum proident do. Aliquip quis elit tempor ullamco aliqua proident sunt incididunt sit. Velit Lorem veniam consectetur cillum sit. Id occaecat et labore duis ipsum consectetur.","registered":"Wednesday, June 22, 2016 6:20 PM","latitude":"33.843736","longitude":"-51.883471","tags":["ullamco","nulla","laborum","aliquip","reprehenderit"],"favoriteFruit":"strawberry"},{"_id":"59a7035c5274723c7c54778e","index":64,"guid":"c550c3f1-9d23-449a-879b-caeecafbcca0","isActive":false,"balance":"$2,052.86","picture":"http://placehold.it/32x32","age":40,"eyeColor":"blue","name":{"first":"Bridgette","last":"Lindsay"},"company":"HIVEDOM","email":"bridgette.lindsay@hivedom.com","phone":"+1 (999) 591-2448","address":"268 Bay Avenue, Rosine, Northern Mariana Islands, 3239","about":"Ea do exercitation ad cupidatat. Commodo officia adipisicing culpa eiusmod. Sint aliquip et anim commodo dolor quis officia. Ullamco proident magna cillum mollit exercitation consequat fugiat. Incididunt culpa cupidatat amet eiusmod aute est proident officia elit non proident cillum elit occaecat. Veniam amet ad laborum ad aute id dolore sint ipsum consequat nostrud cillum.","registered":"Saturday, January 9, 2016 9:39 AM","latitude":"77.293657","longitude":"-167.06726","tags":["laborum","fugiat","tempor","nisi","adipisicing"],"favoriteFruit":"banana"},{"_id":"59a7035ca370378bfeaa38a5","index":65,"guid":"94c8d9a6-2e5a-40e9-a6e3-85e79b53b6ed","isActive":true,"balance":"$3,379.77","picture":"http://placehold.it/32x32","age":22,"eyeColor":"brown","name":{"first":"Lorena","last":"Eaton"},"company":"CEPRENE","email":"lorena.eaton@ceprene.co.uk","phone":"+1 (938) 403-2437","address":"283 Quentin Street, Enoree, Utah, 5172","about":"Cupidatat aliqua sint elit sint proident non occaecat elit aute ullamco consectetur in. Exercitation enim laboris irure do deserunt velit aliquip fugiat labore commodo aliquip laboris cupidatat. Occaecat esse minim enim ex fugiat tempor dolore cillum adipisicing qui laborum id nostrud sunt. Nisi laboris sint eiusmod id ipsum eu non velit.","registered":"Sunday, July 26, 2015 5:17 AM","latitude":"16.813018","longitude":"-72.052378","tags":["elit","labore","magna","in","voluptate"],"favoriteFruit":"apple"},{"_id":"59a7035c0ee5430ec8ec7d91","index":66,"guid":"8990fead-c907-47f0-80a5-c53049dffeeb","isActive":true,"balance":"$1,851.38","picture":"http://placehold.it/32x32","age":36,"eyeColor":"blue","name":{"first":"Herminia","last":"Daniels"},"company":"NIKUDA","email":"herminia.daniels@nikuda.info","phone":"+1 (956) 481-3195","address":"809 Neptune Avenue, Chestnut, Indiana, 819","about":"Ea commodo aute nulla commodo consectetur. Dolor duis anim amet voluptate eu elit est in. Aliqua veniam nostrud ad laborum officia anim dolor. Tempor excepteur occaecat eiusmod amet officia labore commodo Lorem nisi magna officia excepteur qui. Duis ad consectetur quis dolor sunt proident aliqua. Eu amet ea sint cupidatat culpa ea aliqua enim culpa veniam quis nulla aliquip.","registered":"Tuesday, July 11, 2017 7:35 AM","latitude":"47.247143","longitude":"-145.360494","tags":["cupidatat","magna","do","aliquip","ullamco"],"favoriteFruit":"strawberry"},{"_id":"59a7035c97657752e87ea50f","index":67,"guid":"e7c4b864-736b-4e83-a71c-b9593d392198","isActive":false,"balance":"$1,416.49","picture":"http://placehold.it/32x32","age":36,"eyeColor":"brown","name":{"first":"Nola","last":"Solis"},"company":"POLARAX","email":"nola.solis@polarax.org","phone":"+1 (974) 576-3054","address":"648 Noll Street, Felt, Tennessee, 4071","about":"Consequat non cupidatat quis elit sunt. Ad voluptate consequat labore id velit in. Nostrud quis commodo dolor eu dolor eiusmod sint sint dolore consectetur exercitation sit consequat ipsum. Veniam proident culpa id laborum dolor consectetur laborum adipisicing occaecat ullamco eu nisi id. Do quis duis velit ad aute aute dolor laborum aliqua cillum tempor. Labore ad occaecat amet aliquip eu id aute dolore in.","registered":"Saturday, June 21, 2014 8:46 AM","latitude":"66.266244","longitude":"-21.606844","tags":["reprehenderit","consectetur","non","veniam","esse"],"favoriteFruit":"banana"},{"_id":"59a7035ca90f3c48271f8556","index":68,"guid":"eaef8eff-d3bc-4be4-8356-3dfa414cca49","isActive":false,"balance":"$1,392.02","picture":"http://placehold.it/32x32","age":33,"eyeColor":"brown","name":{"first":"Leona","last":"Owens"},"company":"SPACEWAX","email":"leona.owens@spacewax.me","phone":"+1 (926) 433-2717","address":"760 Glenwood Road, Dowling, Mississippi, 7230","about":"Enim amet mollit eu duis Lorem. Irure officia nostrud id nostrud excepteur. Fugiat minim in incididunt nostrud sint deserunt sit qui commodo.","registered":"Monday, September 19, 2016 11:45 AM","latitude":"41.817328","longitude":"108.002872","tags":["minim","enim","consequat","nulla","excepteur"],"favoriteFruit":"banana"},{"_id":"59a7035cd3d6556665c80d6c","index":69,"guid":"eab03c09-6238-4b56-bbf5-3a70bb62dce2","isActive":true,"balance":"$3,539.53","picture":"http://placehold.it/32x32","age":24,"eyeColor":"blue","name":{"first":"Hobbs","last":"Jones"},"company":"EMOLTRA","email":"hobbs.jones@emoltra.us","phone":"+1 (963) 441-3365","address":"215 Whitwell Place, Richford, Ohio, 4608","about":"Sunt ullamco deserunt veniam ipsum amet proident duis. Veniam laboris Lorem minim in. Aliquip ipsum eu consectetur cupidatat amet sint aliqua nostrud excepteur tempor velit consectetur. Minim mollit non qui in laborum ad in aute. Consequat qui consequat enim officia laboris cupidatat culpa ullamco eu magna consequat cillum quis cillum. Laboris consequat et adipisicing eiusmod ex Lorem laboris excepteur do. Duis elit excepteur mollit id id occaecat eiusmod anim aliquip ex est non aliqua adipisicing.","registered":"Saturday, December 5, 2015 2:27 PM","latitude":"1.167543","longitude":"-127.155785","tags":["consectetur","reprehenderit","exercitation","consectetur","nisi"],"favoriteFruit":"apple"},{"_id":"59a7035c62d1feaa93ca4a3a","index":70,"guid":"346f6dcf-2913-4a02-b743-51b967cea03f","isActive":false,"balance":"$1,454.96","picture":"http://placehold.it/32x32","age":40,"eyeColor":"blue","name":{"first":"Summers","last":"Huff"},"company":"COMTRACT","email":"summers.huff@comtract.tv","phone":"+1 (966) 424-2354","address":"867 Willoughby Street, Dargan, New York, 6440","about":"Magna proident sunt cillum aliqua aute non et occaecat. Ad sit laboris sit deserunt officia ullamco reprehenderit fugiat id sunt. Quis nostrud mollit nostrud velit voluptate mollit.","registered":"Tuesday, March 14, 2017 4:29 AM","latitude":"38.996569","longitude":"-5.565663","tags":["veniam","ea","cupidatat","sunt","qui"],"favoriteFruit":"banana"},{"_id":"59a7035c3a02db49a4163774","index":71,"guid":"74aef096-4441-4094-9d56-2be53310a19a","isActive":true,"balance":"$3,786.73","picture":"http://placehold.it/32x32","age":39,"eyeColor":"green","name":{"first":"Wilkinson","last":"Howard"},"company":"MOTOVATE","email":"wilkinson.howard@motovate.net","phone":"+1 (954) 411-2468","address":"819 Hanson Place, Sisquoc, Maryland, 4699","about":"Cupidatat labore exercitation quis in tempor est id deserunt. Esse eu ex aute veniam officia aliqua minim ipsum. Sunt ipsum elit excepteur cupidatat qui commodo. Enim labore dolor eu ullamco laborum ad ut ut veniam labore non elit commodo enim. Magna laborum dolore minim adipisicing ullamco laboris commodo aliquip cupidatat consequat.","registered":"Friday, December 23, 2016 12:50 PM","latitude":"79.991901","longitude":"-110.683079","tags":["exercitation","quis","aliqua","aliqua","minim"],"favoriteFruit":"banana"},{"_id":"59a7035ca3df915eedd92aeb","index":72,"guid":"09f7ea7a-7033-4973-ba4f-7438d1e707ed","isActive":true,"balance":"$1,059.27","picture":"http://placehold.it/32x32","age":21,"eyeColor":"green","name":{"first":"Navarro","last":"Grant"},"company":"HAWKSTER","email":"navarro.grant@hawkster.io","phone":"+1 (947) 411-2315","address":"694 Boerum Place, Urie, Montana, 2584","about":"Lorem nostrud cillum nulla commodo officia. Irure aliqua irure ex in voluptate est Lorem labore eiusmod sunt non et consectetur. Laborum amet duis ullamco fugiat laboris do nisi sit. Eu fugiat nostrud non consequat. Reprehenderit nostrud laborum minim cillum magna enim consectetur incididunt laborum sunt incididunt dolore do. Nostrud nisi ea pariatur velit veniam veniam duis pariatur tempor aute. Velit laborum minim excepteur eu irure nulla excepteur incididunt.","registered":"Sunday, April 9, 2017 8:34 AM","latitude":"-66.519848","longitude":"48.685848","tags":["fugiat","labore","elit","laborum","minim"],"favoriteFruit":"banana"},{"_id":"59a7035c7b6ad28ac5fd4e73","index":73,"guid":"d1b37b5f-e453-4f3e-a94b-365359a7d1bc","isActive":true,"balance":"$1,640.35","picture":"http://placehold.it/32x32","age":27,"eyeColor":"blue","name":{"first":"Walton","last":"Henderson"},"company":"EVIDENDS","email":"walton.henderson@evidends.biz","phone":"+1 (871) 490-2002","address":"193 Barbey Street, Dunbar, New Jersey, 8593","about":"Exercitation enim eiusmod dolore proident nulla non. Incididunt Lorem do et ea minim esse labore. Eiusmod velit sit ullamco consequat. Ex et est et officia aliquip Lorem pariatur. Labore excepteur cillum qui commodo aute non incididunt velit consectetur sunt velit. Eu non qui ut quis.","registered":"Friday, September 25, 2015 5:06 PM","latitude":"28.063406","longitude":"-44.937807","tags":["Lorem","Lorem","enim","velit","enim"],"favoriteFruit":"strawberry"},{"_id":"59a7035c2832582a974c8806","index":74,"guid":"0ac54662-a5b7-48bd-abbd-6211f1345bd4","isActive":true,"balance":"$3,975.36","picture":"http://placehold.it/32x32","age":38,"eyeColor":"green","name":{"first":"Parks","last":"Good"},"company":"GEEKULAR","email":"parks.good@geekular.ca","phone":"+1 (822) 403-2275","address":"685 Monitor Street, Fowlerville, Kansas, 6486","about":"Enim culpa nisi nostrud est qui magna laborum aliquip irure duis nostrud nulla. Sit commodo excepteur amet nostrud esse mollit magna voluptate amet officia. Exercitation enim aliquip aute velit laboris. Laborum deserunt esse nulla minim occaecat sunt duis cillum esse sit velit. Esse ut pariatur anim anim eiusmod ea duis. Sint non irure nostrud labore id minim esse. Eu aliqua ex magna sunt excepteur commodo reprehenderit.","registered":"Monday, August 15, 2016 12:32 PM","latitude":"-34.737543","longitude":"-131.226158","tags":["officia","qui","esse","eu","ex"],"favoriteFruit":"banana"},{"_id":"59a7035c0829691744bbaaf7","index":75,"guid":"19d63c85-d2c0-4216-9b3e-50879765681a","isActive":false,"balance":"$3,833.80","picture":"http://placehold.it/32x32","age":33,"eyeColor":"blue","name":{"first":"Suzanne","last":"Arnold"},"company":"ACCRUEX","email":"suzanne.arnold@accruex.name","phone":"+1 (800) 412-2663","address":"623 Blake Avenue, Oretta, Delaware, 5458","about":"Irure proident incididunt in ut sint labore incididunt sint. Nulla nulla anim commodo mollit laborum. Aliqua reprehenderit do quis laboris non aliquip exercitation id veniam velit fugiat elit tempor. Anim veniam id cupidatat esse amet. Nisi pariatur amet pariatur tempor aliqua cupidatat dolore velit duis laborum. Magna proident exercitation aliqua dolore tempor proident voluptate in elit non.","registered":"Thursday, June 29, 2017 6:20 PM","latitude":"-67.201586","longitude":"1.39753","tags":["esse","non","aute","mollit","est"],"favoriteFruit":"banana"},{"_id":"59a7035c23c34fbce0dacb32","index":76,"guid":"0f2bf805-c5ac-4125-9f42-f912195e5de5","isActive":true,"balance":"$3,592.47","picture":"http://placehold.it/32x32","age":38,"eyeColor":"blue","name":{"first":"Robinson","last":"Travis"},"company":"OVIUM","email":"robinson.travis@ovium.com","phone":"+1 (979) 498-2934","address":"275 Irwin Street, Snowville, Connecticut, 5995","about":"Deserunt adipisicing Lorem exercitation cupidatat ut laborum consectetur. Sunt veniam do ut reprehenderit aliqua do amet ad aute incididunt consectetur pariatur. Pariatur exercitation ad tempor dolore proident sint. Cillum exercitation elit dolor consequat anim irure commodo ex adipisicing excepteur nulla sunt. Ad consequat veniam id aliquip ea ad in minim quis exercitation aliqua ea ex. Aliqua consequat tempor officia ullamco cillum elit excepteur sit tempor ex minim occaecat. Aliquip aliqua laboris occaecat et sint ut ullamco fugiat occaecat est sint eu ut aute.","registered":"Monday, April 10, 2017 4:08 PM","latitude":"64.239375","longitude":"137.324483","tags":["aliquip","pariatur","proident","nostrud","deserunt"],"favoriteFruit":"strawberry"},{"_id":"59a7035c1972243aafc69a04","index":77,"guid":"2550fe7c-1d3c-4068-aa7e-9c22a1951f5c","isActive":false,"balance":"$3,685.33","picture":"http://placehold.it/32x32","age":23,"eyeColor":"blue","name":{"first":"Katrina","last":"Wallace"},"company":"EARBANG","email":"katrina.wallace@earbang.co.uk","phone":"+1 (954) 534-2751","address":"950 Brighton Avenue, Roderfield, Washington, 4701","about":"Duis commodo ipsum mollit qui esse. In id ad velit consectetur enim dolore veniam consequat. Quis anim nostrud aute laboris occaecat consequat aliqua nisi. Incididunt laboris velit esse culpa velit quis irure consectetur. Sint Lorem aliquip do laborum consequat officia cillum est labore. Tempor pariatur aliqua duis ex ad eu.","registered":"Monday, March 16, 2015 11:14 PM","latitude":"18.70309","longitude":"-142.809837","tags":["proident","irure","nisi","sunt","labore"],"favoriteFruit":"strawberry"},{"_id":"59a7035cb658685639994e87","index":78,"guid":"058ce69e-d0e7-4cb4-99a4-be9c26701a52","isActive":false,"balance":"$1,697.78","picture":"http://placehold.it/32x32","age":25,"eyeColor":"brown","name":{"first":"Fuentes","last":"Mercado"},"company":"ARCHITAX","email":"fuentes.mercado@architax.info","phone":"+1 (959) 576-3132","address":"353 Mill Street, Cashtown, Georgia, 1768","about":"Reprehenderit dolor cupidatat aute do duis. Nostrud mollit laborum sint dolor veniam voluptate occaecat amet ad. Magna non reprehenderit ad quis ipsum Lorem irure ad do culpa sunt. Qui elit nisi reprehenderit aliqua eu minim velit reprehenderit. Enim exercitation sunt aliquip veniam ea deserunt Lorem veniam ex. Quis ut et consequat amet enim irure mollit ea minim eiusmod consequat commodo excepteur. Nulla adipisicing in quis sunt excepteur eiusmod id.","registered":"Monday, May 19, 2014 4:23 AM","latitude":"-0.578208","longitude":"70.90583","tags":["non","nisi","culpa","id","nostrud"],"favoriteFruit":"banana"},{"_id":"59a7035c4492f07cdb06f3bc","index":79,"guid":"d1ff2173-63b3-4be7-9de8-80374fe05409","isActive":false,"balance":"$3,403.33","picture":"http://placehold.it/32x32","age":33,"eyeColor":"blue","name":{"first":"Aurora","last":"Blake"},"company":"ISOPLEX","email":"aurora.blake@isoplex.org","phone":"+1 (900) 481-2991","address":"364 Tillary Street, Tetherow, Rhode Island, 8261","about":"Amet ut do enim quis mollit commodo enim adipisicing dolor ad culpa nulla culpa. Amet adipisicing reprehenderit labore consequat. Dolore ut Lorem non deserunt irure aute nisi non irure occaecat. Anim ullamco enim enim ipsum occaecat culpa ullamco fugiat ullamco tempor. Ea dolor mollit sunt ipsum et amet laboris. Culpa proident laborum aliquip officia laboris sit cillum. Laborum ex velit culpa velit.","registered":"Friday, October 31, 2014 12:32 PM","latitude":"-71.77671","longitude":"101.056755","tags":["officia","eu","excepteur","et","incididunt"],"favoriteFruit":"strawberry"},{"_id":"59a7035c626202551c0687cb","index":80,"guid":"e74a4405-84aa-4b67-809e-15f6b56ae501","isActive":false,"balance":"$1,388.99","picture":"http://placehold.it/32x32","age":25,"eyeColor":"blue","name":{"first":"Joanne","last":"Oconnor"},"company":"DARWINIUM","email":"joanne.oconnor@darwinium.me","phone":"+1 (943) 410-3599","address":"117 Bragg Street, Temperanceville, Oklahoma, 4977","about":"Magna ad aliquip excepteur id. Duis enim sit adipisicing est esse labore reprehenderit minim. Reprehenderit adipisicing deserunt culpa excepteur mollit elit culpa duis anim labore cupidatat dolor. Labore nisi reprehenderit irure mollit occaecat culpa. Pariatur dolor pariatur tempor commodo consectetur anim magna commodo enim ut fugiat. Labore amet cupidatat officia veniam irure elit proident duis cupidatat reprehenderit eu. Quis commodo fugiat reprehenderit eu adipisicing amet officia.","registered":"Sunday, November 27, 2016 5:43 AM","latitude":"87.333345","longitude":"-6.03891","tags":["amet","ut","tempor","deserunt","magna"],"favoriteFruit":"apple"},{"_id":"59a7035c1a455ae94ad5f555","index":81,"guid":"1545dcb4-fca2-4991-94af-53ccce60f81a","isActive":false,"balance":"$3,936.24","picture":"http://placehold.it/32x32","age":29,"eyeColor":"green","name":{"first":"Sanders","last":"Parsons"},"company":"XUMONK","email":"sanders.parsons@xumonk.us","phone":"+1 (836) 504-3288","address":"162 Prospect Avenue, Tecolotito, North Carolina, 203","about":"Ad nisi sint aliqua tempor deserunt adipisicing ex magna excepteur adipisicing. Commodo sunt eu nostrud reprehenderit dolor nulla nisi exercitation non. Occaecat deserunt eiusmod eu Lorem magna sint consequat ex nulla occaecat magna ipsum ullamco cillum. Deserunt proident non dolor adipisicing culpa ad deserunt exercitation adipisicing excepteur amet ad ex dolor. Tempor ullamco nulla nisi dolore officia aute excepteur esse ullamco. Eu sint irure commodo fugiat consequat aliquip est.","registered":"Friday, March 25, 2016 5:08 PM","latitude":"4.02693","longitude":"-26.79332","tags":["ipsum","et","elit","amet","ut"],"favoriteFruit":"strawberry"},{"_id":"59a7035c0deb19988f17aa77","index":82,"guid":"67d68126-174d-41bb-ae38-77794218d70a","isActive":true,"balance":"$2,352.55","picture":"http://placehold.it/32x32","age":28,"eyeColor":"green","name":{"first":"Little","last":"May"},"company":"APPLIDECK","email":"little.may@applideck.tv","phone":"+1 (939) 567-3305","address":"367 Crawford Avenue, Eureka, Maine, 5784","about":"Dolore laboris consequat duis deserunt voluptate pariatur enim commodo eiusmod labore labore duis. Qui labore aliquip et quis. Aliqua laboris cupidatat in do qui duis quis. Consectetur laborum occaecat ad eiusmod consequat irure amet culpa. Aute magna cillum deserunt sunt enim aliquip dolore dolor tempor nostrud. Lorem duis elit esse commodo aliqua nulla. Non aliquip occaecat cupidatat culpa.","registered":"Friday, October 28, 2016 3:54 AM","latitude":"61.075581","longitude":"51.153595","tags":["commodo","sunt","sunt","dolore","consectetur"],"favoriteFruit":"apple"},{"_id":"59a7035ca83b8ad3adcd08ce","index":83,"guid":"c203159a-808b-4942-b9f6-153f0519f54e","isActive":false,"balance":"$3,183.36","picture":"http://placehold.it/32x32","age":38,"eyeColor":"brown","name":{"first":"Brandi","last":"Navarro"},"company":"MANTRIX","email":"brandi.navarro@mantrix.net","phone":"+1 (821) 507-2658","address":"926 Verona Place, Longoria, Pennsylvania, 9051","about":"Non qui anim et officia eiusmod cupidatat veniam cillum enim sint ad. Excepteur sit cillum culpa veniam consectetur aliqua dolore dolor sint ut. Cupidatat sint adipisicing aute nostrud enim amet velit. Culpa et minim magna commodo aliqua labore laboris nisi anim qui.","registered":"Tuesday, May 17, 2016 2:47 PM","latitude":"-75.956827","longitude":"10.213558","tags":["sint","pariatur","nulla","duis","dolor"],"favoriteFruit":"strawberry"},{"_id":"59a7035cbe29a6da748090b7","index":84,"guid":"af5c99e9-77ce-4df2-b923-b41920d7f00d","isActive":true,"balance":"$1,793.30","picture":"http://placehold.it/32x32","age":39,"eyeColor":"brown","name":{"first":"Rosie","last":"Rowland"},"company":"GLUKGLUK","email":"rosie.rowland@glukgluk.io","phone":"+1 (997) 548-2274","address":"511 Benson Avenue, Taft, North Dakota, 7668","about":"Reprehenderit aliqua sit duis labore esse cupidatat quis incididunt commodo ea culpa. Ut tempor adipisicing anim sunt qui esse cupidatat aute aliqua minim. In est minim proident ipsum dolor ex. Pariatur commodo culpa incididunt enim mollit amet ea. Laborum nulla ex deserunt aute id aute. Irure exercitation proident ullamco veniam adipisicing id labore sit incididunt sint est. Consectetur amet non nostrud culpa mollit reprehenderit proident est consectetur minim aliquip elit proident Lorem.","registered":"Saturday, September 26, 2015 6:00 AM","latitude":"62.537599","longitude":"-117.981601","tags":["consectetur","exercitation","excepteur","esse","veniam"],"favoriteFruit":"banana"},{"_id":"59a7035ce366d83e9c497b63","index":85,"guid":"00cfd94e-5dcc-4872-b8db-10ed9ebfe1b1","isActive":true,"balance":"$2,245.84","picture":"http://placehold.it/32x32","age":29,"eyeColor":"brown","name":{"first":"Rich","last":"Ortiz"},"company":"VINCH","email":"rich.ortiz@vinch.biz","phone":"+1 (886) 509-2030","address":"667 Lenox Road, Nelson, Iowa, 1112","about":"Eiusmod pariatur voluptate fugiat in aliqua quis voluptate ipsum proident. Ullamco elit occaecat sint ipsum mollit esse incididunt quis incididunt. Incididunt pariatur incididunt ut reprehenderit aute elit veniam officia enim. Incididunt incididunt ex labore aliquip excepteur id ipsum incididunt non mollit occaecat. Nostrud ut laboris ea officia commodo esse consectetur aute ipsum anim.","registered":"Friday, January 22, 2016 3:46 AM","latitude":"-56.524315","longitude":"-13.796753","tags":["consectetur","aliquip","voluptate","reprehenderit","minim"],"favoriteFruit":"apple"},{"_id":"59a7035ce64e5cf2cb2c5dbd","index":86,"guid":"956d4ae4-59aa-439f-8496-ab9cf2db8401","isActive":false,"balance":"$3,269.51","picture":"http://placehold.it/32x32","age":33,"eyeColor":"brown","name":{"first":"Lolita","last":"Pitts"},"company":"CEDWARD","email":"lolita.pitts@cedward.ca","phone":"+1 (962) 548-2756","address":"575 Halleck Street, Warsaw, Marshall Islands, 5786","about":"Ex aute et dolore magna mollit quis. Deserunt esse exercitation ea id ullamco occaecat occaecat mollit magna fugiat sint. Elit voluptate consequat occaecat duis labore ut. Minim adipisicing do sunt aliquip ipsum nulla.","registered":"Thursday, July 7, 2016 8:23 PM","latitude":"72.65006","longitude":"130.043692","tags":["enim","id","id","commodo","id"],"favoriteFruit":"apple"},{"_id":"59a7035c9c4570394ffa599d","index":87,"guid":"736241d1-243a-423a-a8d4-eebe18815840","isActive":true,"balance":"$3,619.45","picture":"http://placehold.it/32x32","age":20,"eyeColor":"brown","name":{"first":"Head","last":"Hodge"},"company":"OPTYK","email":"head.hodge@optyk.name","phone":"+1 (968) 530-3840","address":"714 Adler Place, Greenwich, Alaska, 6463","about":"Eu nisi aute et irure aliquip. Ullamco fugiat occaecat adipisicing consequat do laboris id veniam proident est. Elit esse aliquip irure pariatur Lorem ipsum duis ad ad qui enim culpa duis voluptate. Mollit ut sit nulla aliquip eu commodo eiusmod dolore ad dolore culpa ipsum nostrud sunt. Dolor nostrud labore culpa irure mollit dolore occaecat magna incididunt culpa sunt anim officia. Excepteur esse eiusmod culpa incididunt et qui mollit sint tempor. Enim quis ipsum anim commodo reprehenderit ut.","registered":"Tuesday, January 21, 2014 1:18 PM","latitude":"46.89198","longitude":"30.630046","tags":["ex","nisi","sit","nisi","ullamco"],"favoriteFruit":"banana"},{"_id":"59a7035c22d650f8dc32b276","index":88,"guid":"7835601e-6c62-4f23-845f-f37b23b4bfa5","isActive":true,"balance":"$1,335.42","picture":"http://placehold.it/32x32","age":24,"eyeColor":"green","name":{"first":"Yvette","last":"Lee"},"company":"FUELWORKS","email":"yvette.lee@fuelworks.com","phone":"+1 (893) 483-2423","address":"359 Logan Street, Inkerman, Arkansas, 8607","about":"Commodo nisi eu fugiat quis minim tempor amet officia aliqua velit mollit pariatur sit. Et enim anim eu ipsum et adipisicing culpa. Ipsum reprehenderit dolor amet dolor nulla culpa Lorem dolore aliqua et occaecat laborum nulla. Dolor labore occaecat mollit et ipsum in enim.","registered":"Sunday, August 30, 2015 3:43 AM","latitude":"-1.177192","longitude":"-176.072586","tags":["deserunt","deserunt","ullamco","nisi","et"],"favoriteFruit":"banana"},{"_id":"59a7035c845ab1f46cc313f3","index":89,"guid":"90a77242-736f-43b2-a926-f5776cf5a0fc","isActive":true,"balance":"$2,413.09","picture":"http://placehold.it/32x32","age":24,"eyeColor":"blue","name":{"first":"Queen","last":"Bush"},"company":"CODAX","email":"queen.bush@codax.co.uk","phone":"+1 (887) 408-2294","address":"652 Livonia Avenue, Springdale, Virginia, 8288","about":"Officia cupidatat proident consectetur officia tempor velit excepteur mollit et irure in mollit. Proident officia cupidatat eiusmod et aliqua fugiat Lorem ipsum mollit. Proident adipisicing proident velit occaecat labore mollit et elit mollit labore.","registered":"Monday, April 11, 2016 3:33 PM","latitude":"40.174924","longitude":"-169.264042","tags":["adipisicing","irure","excepteur","labore","fugiat"],"favoriteFruit":"strawberry"},{"_id":"59a7035cf4047f065c27810d","index":90,"guid":"e9bbb717-cacf-4734-8d21-c1983a4fb19d","isActive":false,"balance":"$1,180.56","picture":"http://placehold.it/32x32","age":37,"eyeColor":"blue","name":{"first":"Shanna","last":"Gay"},"company":"CAPSCREEN","email":"shanna.gay@capscreen.info","phone":"+1 (867) 526-2674","address":"809 Elmwood Avenue, Southview, Arizona, 3898","about":"Anim minim in sint culpa fugiat ad do. Ex fugiat laborum ullamco mollit irure quis in culpa in veniam aliquip irure mollit. Occaecat sint dolor in do labore. Proident mollit consequat pariatur labore laboris nulla incididunt duis proident. Veniam dolore in esse non.","registered":"Wednesday, November 9, 2016 3:10 AM","latitude":"27.646782","longitude":"-151.385329","tags":["labore","id","sint","non","nisi"],"favoriteFruit":"banana"},{"_id":"59a7035c2fb8999bcafecdc2","index":91,"guid":"12c9dc32-2d6b-4973-8651-d6188a7dabc8","isActive":false,"balance":"$3,424.83","picture":"http://placehold.it/32x32","age":34,"eyeColor":"blue","name":{"first":"Ella","last":"Carpenter"},"company":"ZENTIX","email":"ella.carpenter@zentix.org","phone":"+1 (975) 408-2611","address":"574 Radde Place, Beaverdale, Guam, 7123","about":"Veniam minim laborum eiusmod laborum esse dolor ullamco. Consequat mollit anim sit aliqua exercitation. Labore minim qui et ut deserunt ex nisi aliqua nostrud ad tempor commodo duis. Tempor duis nisi eu ullamco voluptate occaecat cillum. Cupidatat occaecat exercitation pariatur non non aliqua voluptate fugiat laborum elit. Est fugiat nostrud eu in cupidatat consectetur ad Lorem culpa est. Laborum officia voluptate in aliqua anim excepteur est et.","registered":"Friday, March 11, 2016 8:58 AM","latitude":"2.273755","longitude":"-88.510162","tags":["velit","aliqua","consequat","est","dolor"],"favoriteFruit":"strawberry"},{"_id":"59a7035c2f40c10c920c6b13","index":92,"guid":"ffb19003-45da-4d37-a67e-bcba3ab853b3","isActive":true,"balance":"$3,553.34","picture":"http://placehold.it/32x32","age":29,"eyeColor":"green","name":{"first":"Dominguez","last":"Andrews"},"company":"BITENDREX","email":"dominguez.andrews@bitendrex.me","phone":"+1 (948) 455-2358","address":"859 Lombardy Street, Innsbrook, Oregon, 1038","about":"Laborum sunt laboris dolor nulla labore et sint eiusmod velit reprehenderit velit exercitation sunt magna. Enim sunt magna nostrud consectetur deserunt nostrud est commodo. Fugiat sint nisi qui voluptate. Mollit ullamco id ad aute commodo pariatur. Ut quis id elit Lorem veniam ullamco tempor dolor commodo. Occaecat fugiat et consectetur amet do eiusmod et laboris eiusmod commodo tempor ipsum Lorem. Labore Lorem est do minim ad voluptate velit.","registered":"Friday, September 23, 2016 1:49 PM","latitude":"41.049962","longitude":"82.866048","tags":["officia","esse","et","laborum","adipisicing"],"favoriteFruit":"banana"},{"_id":"59a7035c7693669d4a2341fc","index":93,"guid":"fe2cbad4-40e5-45a9-afc9-dbdfbb39c5e1","isActive":false,"balance":"$1,712.21","picture":"http://placehold.it/32x32","age":21,"eyeColor":"brown","name":{"first":"Mcdonald","last":"Spence"},"company":"RUGSTARS","email":"mcdonald.spence@rugstars.us","phone":"+1 (988) 547-3230","address":"868 Baycliff Terrace, Lloyd, Wyoming, 485","about":"Do irure eu duis velit mollit ullamco commodo. Non excepteur enim consequat esse reprehenderit veniam dolore. Pariatur do laboris est proident adipisicing nisi deserunt cupidatat in id et nisi id. Enim excepteur tempor anim ad esse anim ullamco quis nisi proident mollit aute ipsum.","registered":"Sunday, June 4, 2017 2:42 AM","latitude":"18.376296","longitude":"-146.83597","tags":["ex","duis","qui","esse","voluptate"],"favoriteFruit":"strawberry"},{"_id":"59a7035c4caf37e13a927434","index":94,"guid":"e20016f9-9f1a-41df-828e-def56cf7ac3a","isActive":false,"balance":"$1,453.58","picture":"http://placehold.it/32x32","age":33,"eyeColor":"blue","name":{"first":"Foster","last":"Dennis"},"company":"REMOTION","email":"foster.dennis@remotion.tv","phone":"+1 (866) 535-3792","address":"691 Louisa Street, Cecilia, Hawaii, 2862","about":"Officia eiusmod consectetur irure amet et esse pariatur non aliquip do cillum. Eu anim ex velit non esse. Fugiat minim consequat pariatur exercitation laborum Lorem.","registered":"Saturday, November 1, 2014 11:04 AM","latitude":"59.797693","longitude":"121.515418","tags":["laboris","ullamco","excepteur","exercitation","sunt"],"favoriteFruit":"apple"},{"_id":"59a7035cb37d952c09b1db05","index":95,"guid":"bea34c38-52c6-43c8-9ef1-553c6881a460","isActive":true,"balance":"$3,823.29","picture":"http://placehold.it/32x32","age":34,"eyeColor":"green","name":{"first":"Virgie","last":"Pearson"},"company":"ORGANICA","email":"virgie.pearson@organica.net","phone":"+1 (904) 555-2662","address":"265 Bayview Avenue, Hillsboro, Wisconsin, 1774","about":"Mollit officia laboris et esse anim Lorem commodo. Ex magna commodo elit occaecat quis dolor eu pariatur. Velit officia mollit ad esse pariatur fugiat anim. Ea incididunt tempor in mollit consectetur sit amet officia esse aute et. Duis qui fugiat enim occaecat est irure aliqua officia.","registered":"Thursday, August 28, 2014 2:19 PM","latitude":"48.435984","longitude":"39.085544","tags":["ipsum","quis","non","sit","quis"],"favoriteFruit":"banana"},{"_id":"59a7035c55ec65f65e251a32","index":96,"guid":"b32cf788-ddc2-433f-986e-74112c39584f","isActive":true,"balance":"$1,794.43","picture":"http://placehold.it/32x32","age":40,"eyeColor":"blue","name":{"first":"Arlene","last":"Leon"},"company":"DUOFLEX","email":"arlene.leon@duoflex.io","phone":"+1 (927) 496-3663","address":"113 Fillmore Avenue, Enetai, Alabama, 4366","about":"Dolor magna tempor eiusmod consectetur irure officia culpa aute cupidatat. Et et veniam tempor fugiat aute excepteur aliquip laborum culpa nulla nostrud. Aute quis eu mollit do non ut amet. Aliquip non aliqua eu fugiat aliqua sunt ut elit consequat magna aliquip. Ad culpa eu fugiat occaecat culpa cupidatat incididunt excepteur.","registered":"Sunday, March 29, 2015 4:05 AM","latitude":"-26.602809","longitude":"146.305625","tags":["proident","sit","cillum","duis","veniam"],"favoriteFruit":"banana"},{"_id":"59a7035c8cbdfccd78c807a2","index":97,"guid":"628d3858-1f68-49e2-9924-8302d0c48afd","isActive":false,"balance":"$2,082.32","picture":"http://placehold.it/32x32","age":26,"eyeColor":"blue","name":{"first":"Kristen","last":"Holman"},"company":"COLUMELLA","email":"kristen.holman@columella.biz","phone":"+1 (885) 443-2216","address":"220 Guernsey Street, Bergoo, Michigan, 5982","about":"Sint Lorem minim ex nostrud amet in. Sunt dolore consequat minim sunt quis nostrud ut. Magna occaecat Lorem pariatur ipsum amet non eiusmod cupidatat deserunt magna sit. Exercitation eiusmod magna fugiat officia in sint elit reprehenderit laboris aliquip mollit aliquip. Cupidatat veniam sint amet non consectetur reprehenderit ut eiusmod elit et ut. Dolor reprehenderit duis ad sit velit est commodo.","registered":"Tuesday, June 6, 2017 5:33 AM","latitude":"-2.307265","longitude":"-82.751171","tags":["consectetur","consequat","ex","exercitation","elit"],"favoriteFruit":"apple"},{"_id":"59a7035cf9eca03873bb57a0","index":98,"guid":"9c1b37ef-f431-44c7-bcb8-fc47fe923cb9","isActive":true,"balance":"$1,761.63","picture":"http://placehold.it/32x32","age":27,"eyeColor":"green","name":{"first":"Eliza","last":"Phillips"},"company":"BLANET","email":"eliza.phillips@blanet.ca","phone":"+1 (978) 577-2073","address":"541 Pulaski Street, Cartwright, West Virginia, 2342","about":"Lorem pariatur nulla occaecat cupidatat reprehenderit exercitation do officia. Occaecat elit in ut dolor mollit proident proident est exercitation reprehenderit tempor nulla aute irure. Culpa id eu magna elit ipsum cillum esse est amet sit. Esse elit reprehenderit duis ipsum nostrud laboris ex consequat culpa enim elit consectetur laborum cillum.","registered":"Monday, February 6, 2017 5:47 PM","latitude":"-45.258264","longitude":"179.218865","tags":["cupidatat","qui","cupidatat","ex","ullamco"],"favoriteFruit":"banana"},{"_id":"59a7035cd4a7afcd642db334","index":99,"guid":"80f5af6a-f72f-4b5c-8406-1a15385a4335","isActive":false,"balance":"$1,014.12","picture":"http://placehold.it/32x32","age":20,"eyeColor":"blue","name":{"first":"Carissa","last":"Sweeney"},"company":"DANCERITY","email":"carissa.sweeney@dancerity.name","phone":"+1 (919) 424-2419","address":"122 Ferris Street, Trexlertown, Nevada, 1930","about":"Tempor nostrud Lorem officia eiusmod velit. Fugiat deserunt do ex dolore aliquip eu qui eiusmod ipsum. Occaecat aliquip nulla occaecat ea sit culpa aliqua ullamco. Reprehenderit elit ullamco sint laboris eu elit labore ut id laborum. Sit elit sit velit commodo dolore nostrud laboris exercitation minim. Deserunt quis exercitation ullamco est sunt.","registered":"Tuesday, March 10, 2015 4:10 PM","latitude":"65.234266","longitude":"156.854022","tags":["duis","ad","ad","commodo","esse"],"favoriteFruit":"strawberry"}]'),Db={title:"Components/CosmozOmnitable",component:"cosmoz-omnitable",parameters:{docs:{description:{component:"A data table component with sorting, filtering, grouping."}}}},xi=t=>_`
        <style>
            .omnitable-container {
                height: 300px;
                display: flex;
                flex-direction: column;
            }
            cosmoz-omnitable {
                flex: 1;
                min-height: 0;
                display: flex;
                flex-direction: column;
            }
            cosmoz-omnitable-item-row {
                border-bottom: 1px solid #e1e2e5;
            }
            cosmoz-omnitable-header-row {
                border-bottom: 1px solid #e1e2e5;
            }
        </style>
        <div class="omnitable-container">
            <cosmoz-omnitable
                .data=${Tb}
                hash-param=${t.hashParam||""}
                sort-on=${t.sortOn||""}
                group-on=${t.groupOn||""}
                ?descending=${t.descending}
                ?group-on-descending=${t.groupOnDescending}
                ?hide-select-all=${t.hideSelectAll}
                settings-id=${t.settingsId||""}
                ?no-local=${t.noLocal}
                ?no-local-sort=${t.noLocalSort}
                ?no-local-filter=${t.noLocalFilter}
                ?loading=${t.loading}
                mini-breakpoint=${t.miniBreakpoint||"768px"}
            >
                <cosmoz-omnitable-column
                    name="company"
                    title="Company"
                    value-path="company"
                    sort-on="company"
                    group-on="company"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="age"
                    title="Age"
                    value-path="age"
                    sort-on="age"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="eyeColor"
                    title="Eye Color"
                    value-path="eyeColor"
                    sort-on="eyeColor"
                    group-on="eyeColor"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="balance"
                    title="Balance"
                    value-path="balance"
                    sort-on="balance"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="registered"
                    title="Registered"
                    value-path="registered"
                    sort-on="registered"
                >
                </cosmoz-omnitable-column>

                <div slot="actions">
                    <button>Export</button>
                    <button>Settings</button>
                </div>
            </cosmoz-omnitable>
        </div>
    `,qt=xi.bind({});qt.args={};const Bt=xi.bind({});Bt.args={sortOn:"company",descending:!1};const jt=xi.bind({});jt.args={groupOn:"eyeColor",groupOnDescending:!1};const Ut=xi.bind({});Ut.args={loading:!0};const Kt=xi.bind({});Kt.args={hideSelectAll:!0};qt.parameters={...qt.parameters,docs:{...qt.parameters?.docs,source:{originalSource:`args => {
  return html\`
        <style>
            .omnitable-container {
                height: 300px;
                display: flex;
                flex-direction: column;
            }
            cosmoz-omnitable {
                flex: 1;
                min-height: 0;
                display: flex;
                flex-direction: column;
            }
            cosmoz-omnitable-item-row {
                border-bottom: 1px solid #e1e2e5;
            }
            cosmoz-omnitable-header-row {
                border-bottom: 1px solid #e1e2e5;
            }
        </style>
        <div class="omnitable-container">
            <cosmoz-omnitable
                .data=\${demoData}
                hash-param=\${args.hashParam || ''}
                sort-on=\${args.sortOn || ''}
                group-on=\${args.groupOn || ''}
                ?descending=\${args.descending}
                ?group-on-descending=\${args.groupOnDescending}
                ?hide-select-all=\${args.hideSelectAll}
                settings-id=\${args.settingsId || ''}
                ?no-local=\${args.noLocal}
                ?no-local-sort=\${args.noLocalSort}
                ?no-local-filter=\${args.noLocalFilter}
                ?loading=\${args.loading}
                mini-breakpoint=\${args.miniBreakpoint || '768px'}
            >
                <cosmoz-omnitable-column
                    name="company"
                    title="Company"
                    value-path="company"
                    sort-on="company"
                    group-on="company"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="age"
                    title="Age"
                    value-path="age"
                    sort-on="age"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="eyeColor"
                    title="Eye Color"
                    value-path="eyeColor"
                    sort-on="eyeColor"
                    group-on="eyeColor"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="balance"
                    title="Balance"
                    value-path="balance"
                    sort-on="balance"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="registered"
                    title="Registered"
                    value-path="registered"
                    sort-on="registered"
                >
                </cosmoz-omnitable-column>

                <div slot="actions">
                    <button>Export</button>
                    <button>Settings</button>
                </div>
            </cosmoz-omnitable>
        </div>
    \`;
}`,...qt.parameters?.docs?.source}}};Bt.parameters={...Bt.parameters,docs:{...Bt.parameters?.docs,source:{originalSource:`args => {
  return html\`
        <style>
            .omnitable-container {
                height: 300px;
                display: flex;
                flex-direction: column;
            }
            cosmoz-omnitable {
                flex: 1;
                min-height: 0;
                display: flex;
                flex-direction: column;
            }
            cosmoz-omnitable-item-row {
                border-bottom: 1px solid #e1e2e5;
            }
            cosmoz-omnitable-header-row {
                border-bottom: 1px solid #e1e2e5;
            }
        </style>
        <div class="omnitable-container">
            <cosmoz-omnitable
                .data=\${demoData}
                hash-param=\${args.hashParam || ''}
                sort-on=\${args.sortOn || ''}
                group-on=\${args.groupOn || ''}
                ?descending=\${args.descending}
                ?group-on-descending=\${args.groupOnDescending}
                ?hide-select-all=\${args.hideSelectAll}
                settings-id=\${args.settingsId || ''}
                ?no-local=\${args.noLocal}
                ?no-local-sort=\${args.noLocalSort}
                ?no-local-filter=\${args.noLocalFilter}
                ?loading=\${args.loading}
                mini-breakpoint=\${args.miniBreakpoint || '768px'}
            >
                <cosmoz-omnitable-column
                    name="company"
                    title="Company"
                    value-path="company"
                    sort-on="company"
                    group-on="company"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="age"
                    title="Age"
                    value-path="age"
                    sort-on="age"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="eyeColor"
                    title="Eye Color"
                    value-path="eyeColor"
                    sort-on="eyeColor"
                    group-on="eyeColor"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="balance"
                    title="Balance"
                    value-path="balance"
                    sort-on="balance"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="registered"
                    title="Registered"
                    value-path="registered"
                    sort-on="registered"
                >
                </cosmoz-omnitable-column>

                <div slot="actions">
                    <button>Export</button>
                    <button>Settings</button>
                </div>
            </cosmoz-omnitable>
        </div>
    \`;
}`,...Bt.parameters?.docs?.source}}};jt.parameters={...jt.parameters,docs:{...jt.parameters?.docs,source:{originalSource:`args => {
  return html\`
        <style>
            .omnitable-container {
                height: 300px;
                display: flex;
                flex-direction: column;
            }
            cosmoz-omnitable {
                flex: 1;
                min-height: 0;
                display: flex;
                flex-direction: column;
            }
            cosmoz-omnitable-item-row {
                border-bottom: 1px solid #e1e2e5;
            }
            cosmoz-omnitable-header-row {
                border-bottom: 1px solid #e1e2e5;
            }
        </style>
        <div class="omnitable-container">
            <cosmoz-omnitable
                .data=\${demoData}
                hash-param=\${args.hashParam || ''}
                sort-on=\${args.sortOn || ''}
                group-on=\${args.groupOn || ''}
                ?descending=\${args.descending}
                ?group-on-descending=\${args.groupOnDescending}
                ?hide-select-all=\${args.hideSelectAll}
                settings-id=\${args.settingsId || ''}
                ?no-local=\${args.noLocal}
                ?no-local-sort=\${args.noLocalSort}
                ?no-local-filter=\${args.noLocalFilter}
                ?loading=\${args.loading}
                mini-breakpoint=\${args.miniBreakpoint || '768px'}
            >
                <cosmoz-omnitable-column
                    name="company"
                    title="Company"
                    value-path="company"
                    sort-on="company"
                    group-on="company"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="age"
                    title="Age"
                    value-path="age"
                    sort-on="age"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="eyeColor"
                    title="Eye Color"
                    value-path="eyeColor"
                    sort-on="eyeColor"
                    group-on="eyeColor"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="balance"
                    title="Balance"
                    value-path="balance"
                    sort-on="balance"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="registered"
                    title="Registered"
                    value-path="registered"
                    sort-on="registered"
                >
                </cosmoz-omnitable-column>

                <div slot="actions">
                    <button>Export</button>
                    <button>Settings</button>
                </div>
            </cosmoz-omnitable>
        </div>
    \`;
}`,...jt.parameters?.docs?.source}}};Ut.parameters={...Ut.parameters,docs:{...Ut.parameters?.docs,source:{originalSource:`args => {
  return html\`
        <style>
            .omnitable-container {
                height: 300px;
                display: flex;
                flex-direction: column;
            }
            cosmoz-omnitable {
                flex: 1;
                min-height: 0;
                display: flex;
                flex-direction: column;
            }
            cosmoz-omnitable-item-row {
                border-bottom: 1px solid #e1e2e5;
            }
            cosmoz-omnitable-header-row {
                border-bottom: 1px solid #e1e2e5;
            }
        </style>
        <div class="omnitable-container">
            <cosmoz-omnitable
                .data=\${demoData}
                hash-param=\${args.hashParam || ''}
                sort-on=\${args.sortOn || ''}
                group-on=\${args.groupOn || ''}
                ?descending=\${args.descending}
                ?group-on-descending=\${args.groupOnDescending}
                ?hide-select-all=\${args.hideSelectAll}
                settings-id=\${args.settingsId || ''}
                ?no-local=\${args.noLocal}
                ?no-local-sort=\${args.noLocalSort}
                ?no-local-filter=\${args.noLocalFilter}
                ?loading=\${args.loading}
                mini-breakpoint=\${args.miniBreakpoint || '768px'}
            >
                <cosmoz-omnitable-column
                    name="company"
                    title="Company"
                    value-path="company"
                    sort-on="company"
                    group-on="company"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="age"
                    title="Age"
                    value-path="age"
                    sort-on="age"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="eyeColor"
                    title="Eye Color"
                    value-path="eyeColor"
                    sort-on="eyeColor"
                    group-on="eyeColor"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="balance"
                    title="Balance"
                    value-path="balance"
                    sort-on="balance"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="registered"
                    title="Registered"
                    value-path="registered"
                    sort-on="registered"
                >
                </cosmoz-omnitable-column>

                <div slot="actions">
                    <button>Export</button>
                    <button>Settings</button>
                </div>
            </cosmoz-omnitable>
        </div>
    \`;
}`,...Ut.parameters?.docs?.source}}};Kt.parameters={...Kt.parameters,docs:{...Kt.parameters?.docs,source:{originalSource:`args => {
  return html\`
        <style>
            .omnitable-container {
                height: 300px;
                display: flex;
                flex-direction: column;
            }
            cosmoz-omnitable {
                flex: 1;
                min-height: 0;
                display: flex;
                flex-direction: column;
            }
            cosmoz-omnitable-item-row {
                border-bottom: 1px solid #e1e2e5;
            }
            cosmoz-omnitable-header-row {
                border-bottom: 1px solid #e1e2e5;
            }
        </style>
        <div class="omnitable-container">
            <cosmoz-omnitable
                .data=\${demoData}
                hash-param=\${args.hashParam || ''}
                sort-on=\${args.sortOn || ''}
                group-on=\${args.groupOn || ''}
                ?descending=\${args.descending}
                ?group-on-descending=\${args.groupOnDescending}
                ?hide-select-all=\${args.hideSelectAll}
                settings-id=\${args.settingsId || ''}
                ?no-local=\${args.noLocal}
                ?no-local-sort=\${args.noLocalSort}
                ?no-local-filter=\${args.noLocalFilter}
                ?loading=\${args.loading}
                mini-breakpoint=\${args.miniBreakpoint || '768px'}
            >
                <cosmoz-omnitable-column
                    name="company"
                    title="Company"
                    value-path="company"
                    sort-on="company"
                    group-on="company"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="age"
                    title="Age"
                    value-path="age"
                    sort-on="age"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="eyeColor"
                    title="Eye Color"
                    value-path="eyeColor"
                    sort-on="eyeColor"
                    group-on="eyeColor"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="balance"
                    title="Balance"
                    value-path="balance"
                    sort-on="balance"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="registered"
                    title="Registered"
                    value-path="registered"
                    sort-on="registered"
                >
                </cosmoz-omnitable-column>

                <div slot="actions">
                    <button>Export</button>
                    <button>Settings</button>
                </div>
            </cosmoz-omnitable>
        </div>
    \`;
}`,...Kt.parameters?.docs?.source}}};const qb=["Default","Sorting","Grouping","Loading","HideSelectAll"];export{qt as Default,jt as Grouping,Kt as HideSelectAll,Ut as Loading,Bt as Sorting,qb as __namedExportsOrder,Db as default};
