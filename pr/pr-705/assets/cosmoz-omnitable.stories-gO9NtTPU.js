import{f as ol,B as ln,x as _,E as de,T as ne,m as rl,i as Mu,p as Lu,v as Ke,s as Lt,M as so}from"./iframe-BJ59mUUA.js";import{_ as ku}from"./preload-helper-D9Z9MdNV.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*al(t,e){if(t!==void 0){let i=0;for(const n of t)yield e(n,i++)}}/**
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
*/let Ou=/(url\()([^)]*)(\))/g,$u=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,Ei,se;function Yt(t,e){if(t&&$u.test(t)||t==="//")return t;if(Ei===void 0){Ei=!1;try{const i=new URL("b","http://a");i.pathname="c%20d",Ei=i.href==="http://a/c%20d"}catch{}}if(e||(e=document.baseURI||window.location.href),Ei)try{return new URL(t,e).href}catch{return t}return se||(se=document.implementation.createHTMLDocument("temp"),se.base=se.createElement("base"),se.head.appendChild(se.base),se.anchor=se.createElement("a"),se.body.appendChild(se.anchor)),se.base.href=e,se.anchor.href=t,se.anchor.href||t}function lr(t,e){return t.replace(Ou,function(i,n,o,r){return n+"'"+Yt(o.replace(/["']/g,""),e)+"'"+r})}function cr(t){return t.substring(0,t.lastIndexOf("/")+1)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Nn=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const Tu=Nn&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch{return!1}})();let Pu=window.Polymer&&window.Polymer.rootPath||cr(document.baseURI||window.location.href),cn=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,Iu=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,vt=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,Hu=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,oi=window.Polymer&&window.Polymer.legacyOptimizations||!1,sl=window.Polymer&&window.Polymer.legacyWarnings||!1,Nu=window.Polymer&&window.Polymer.syncInitialRender||!1,Po=window.Polymer&&window.Polymer.legacyUndefined||!1,Fu=window.Polymer&&window.Polymer.orderedComputed||!1,na=window.Polymer&&window.Polymer.removeNestedTemplates||!1,ll=window.Polymer&&window.Polymer.fastDomIf||!1,Io=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,Mi=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,Vu=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Ru=0;const ae=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let i=Ru++;function n(o){let r=o.__mixinSet;if(r&&r[i])return o;let a=e,s=a.get(o);if(!s){s=t(o),a.set(o,s);let l=Object.create(s.__mixinSet||r||null);l[i]=!0,s.__mixinSet=l}return s}return n};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ur={},cl={};function oa(t,e){ur[t]=cl[t.toLowerCase()]=e}function ra(t){return ur[t]||cl[t.toLowerCase()]}function Du(t){t.querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}class ri extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,i){if(e){let n=ra(e);return n&&i?n.querySelector(i):n}return null}attributeChangedCallback(e,i,n,o){i!==n&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,i=Yt(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=cr(i)}return this.__assetpath}register(e){if(e=e||this.id,e){if(vt&&ra(e)!==void 0)throw oa(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,oa(e,this),Du(this)}}}ri.prototype.modules=ur;customElements.define("dom-module",ri);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const qu="link[rel=import][type~=css]",Bu="include",aa="shady-unscoped";function dr(t){return ri.import(t)}function sa(t){let e=t.body?t.body:t;const i=lr(e.textContent,t.baseURI),n=document.createElement("style");return n.textContent=i,n}function ju(t){const e=t.trim().split(/\s+/),i=[];for(let n=0;n<e.length;n++)i.push(...Uu(e[n]));return i}function Uu(t){const e=dr(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(e._styles===void 0){const i=[];i.push(...hr(e));const n=e.querySelector("template");n&&i.push(...pr(n,e.assetpath)),e._styles=i}return e._styles}function pr(t,e){if(!t._styles){const i=[],n=t.content.querySelectorAll("style");for(let o=0;o<n.length;o++){let r=n[o],a=r.getAttribute(Bu);a&&i.push(...ju(a).filter(function(s,l,c){return c.indexOf(s)===l})),e&&(r.textContent=lr(r.textContent,e)),i.push(r)}t._styles=i}return t._styles}function Ku(t){let e=dr(t);return e?hr(e):[]}function hr(t){const e=[],i=t.querySelectorAll(qu);for(let n=0;n<i.length;n++){let o=i[n];if(o.import){const r=o.import,a=o.hasAttribute(aa);if(a&&!r._unscopedStyle){const s=sa(r);s.setAttribute(aa,""),r._unscopedStyle=s}else r._style||(r._style=sa(r));e.push(a?r._unscopedStyle:r._style)}}return e}function Wu(t){let e=t.trim().split(/\s+/),i="";for(let n=0;n<e.length;n++)i+=Gu(e[n]);return i}function Gu(t){let e=dr(t);if(e&&e._cssText===void 0){let i=Ju(e),n=e.querySelector("template");n&&(i+=Yu(n,e.assetpath)),e._cssText=i||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}function Yu(t,e){let i="";const n=pr(t,e);for(let o=0;o<n.length;o++){let r=n[o];r.parentNode&&r.parentNode.removeChild(r),i+=r.textContent}return i}function Ju(t){let e="",i=hr(t);for(let n=0;n<i.length;n++)e+=i[n].textContent;return e}/**
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
*/function Ho(t){return t.indexOf(".")>=0}function ke(t){let e=t.indexOf(".");return e===-1?t:t.slice(0,e)}function ul(t,e){return t.indexOf(e+".")===0}function ai(t,e){return e.indexOf(t+".")===0}function si(t,e,i){return e+i.slice(t.length)}function Xu(t,e){return t===e||ul(t,e)||ai(t,e)}function Ft(t){if(Array.isArray(t)){let e=[];for(let i=0;i<t.length;i++){let n=t[i].toString().split(".");for(let o=0;o<n.length;o++)e.push(n[o])}return e.join(".")}else return t}function dl(t){return Array.isArray(t)?Ft(t).split("."):t.toString().split(".")}function L(t,e,i){let n=t,o=dl(e);for(let r=0;r<o.length;r++){if(!n)return;let a=o[r];n=n[a]}return i&&(i.path=o.join(".")),n}function No(t,e,i){let n=t,o=dl(e),r=o[o.length-1];if(o.length>1){for(let a=0;a<o.length-1;a++){let s=o[a];if(n=n[s],!n)return}n[r]=i}else n[e]=i;return o.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const un={},Zu=/-[a-z]/g,Qu=/([A-Z])/g;function mr(t){return un[t]||(un[t]=t.indexOf("-")<0?t:t.replace(Zu,e=>e[1].toUpperCase()))}function Fn(t){return un[t]||(un[t]=t.replace(Qu,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ed=0,pl=0,ut=[],td=0,Fo=!1,hl=document.createTextNode("");new window.MutationObserver(id).observe(hl,{characterData:!0});function id(){Fo=!1;const t=ut.length;for(let e=0;e<t;e++){let i=ut[e];if(i)try{i()}catch(n){setTimeout(()=>{throw n})}}ut.splice(0,t),pl+=t}const dt={after(t){return{run(e){return window.setTimeout(e,t)},cancel(e){window.clearTimeout(e)}}},run(t,e){return window.setTimeout(t,e)},cancel(t){window.clearTimeout(t)}},Ne={run(t){return Fo||(Fo=!0,hl.textContent=td++),ut.push(t),ed++},cancel(t){const e=t-pl;if(e>=0){if(!ut[e])throw new Error("invalid async handle: "+t);ut[e]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const nd=Ne,ml=ae(t=>{class e extends t{static createProperties(n){const o=this.prototype;for(let r in n)r in o||o._createPropertyAccessor(r)}static attributeNameForProperty(n){return n.toLowerCase()}static typeForProperty(n){}_createPropertyAccessor(n,o){this._addPropertyToAttributeMap(n),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[n]||(this.__dataHasAccessor[n]=!0,this._definePropertyAccessor(n,o))}_addPropertyToAttributeMap(n){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let o=this.__dataAttributes[n];return o||(o=this.constructor.attributeNameForProperty(n),this.__dataAttributes[o]=n),o}_definePropertyAccessor(n,o){Object.defineProperty(this,n,{get(){return this.__data[n]},set:o?function(){}:function(r){this._setPendingProperty(n,r,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let n in this.__dataHasAccessor)this.hasOwnProperty(n)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[n]=this[n],delete this[n])}_initializeInstanceProperties(n){Object.assign(this,n)}_setProperty(n,o){this._setPendingProperty(n,o)&&this._invalidateProperties()}_getProperty(n){return this.__data[n]}_setPendingProperty(n,o,r){let a=this.__data[n],s=this._shouldPropertyChange(n,o,a);return s&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(n in this.__dataOld)&&(this.__dataOld[n]=a),this.__data[n]=o,this.__dataPending[n]=o),s}_isPropertyPending(n){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(n))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,nd.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const n=this.__data,o=this.__dataPending,r=this.__dataOld;this._shouldPropertiesChange(n,o,r)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(n,o,r)),this.__dataCounter--}_shouldPropertiesChange(n,o,r){return!!o}_propertiesChanged(n,o,r){}_shouldPropertyChange(n,o,r){return r!==o&&(r===r||o===o)}attributeChangedCallback(n,o,r,a){o!==r&&this._attributeToProperty(n,r),super.attributeChangedCallback&&super.attributeChangedCallback(n,o,r,a)}_attributeToProperty(n,o,r){if(!this.__serializing){const a=this.__dataAttributes,s=a&&a[n]||n;this[s]=this._deserializeValue(o,r||this.constructor.typeForProperty(s))}}_propertyToAttribute(n,o,r){this.__serializing=!0,r=arguments.length<3?this[n]:r,this._valueToNodeAttribute(this,r,o||this.constructor.attributeNameForProperty(n)),this.__serializing=!1}_valueToNodeAttribute(n,o,r){const a=this._serializeValue(o);(r==="class"||r==="name"||r==="slot")&&(n=A(n)),a===void 0?n.removeAttribute(r):n.setAttribute(r,a===""&&window.trustedTypes?window.trustedTypes.emptyScript:a)}_serializeValue(n){switch(typeof n){case"boolean":return n?"":void 0;default:return n?.toString()}}_deserializeValue(n,o){switch(o){case Boolean:return n!==null;case Number:return Number(n);default:return n}}}return e});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const fl={};let Li=HTMLElement.prototype;for(;Li;){let t=Object.getOwnPropertyNames(Li);for(let e=0;e<t.length;e++)fl[t[e]]=!0;Li=Object.getPrototypeOf(Li)}const od=window.trustedTypes?t=>trustedTypes.isHTML(t)||trustedTypes.isScript(t)||trustedTypes.isScriptURL(t):()=>!1;function rd(t,e){if(!fl[e]){let i=t[e];i!==void 0&&(t.__data?t._setPendingProperty(e,i):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=i))}}const gl=ae(t=>{const e=ml(t);class i extends e{static createPropertiesForAttributes(){let o=this.observedAttributes;for(let r=0;r<o.length;r++)this.prototype._createPropertyAccessor(mr(o[r]))}static attributeNameForProperty(o){return Fn(o)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(o){for(let r in o)this._setProperty(r,o[r])}_ensureAttribute(o,r){const a=this;a.hasAttribute(o)||this._valueToNodeAttribute(a,r,o)}_serializeValue(o){switch(typeof o){case"object":if(o instanceof Date)return o.toString();if(o){if(od(o))return o;try{return JSON.stringify(o)}catch{return""}}default:return super._serializeValue(o)}}_deserializeValue(o,r){let a;switch(r){case Object:try{a=JSON.parse(o)}catch{a=o}break;case Array:try{a=JSON.parse(o)}catch{a=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${o}`)}break;case Date:a=isNaN(o)?String(o):Number(o),a=new Date(a);break;default:a=super._deserializeValue(o,r);break}return a}_definePropertyAccessor(o,r){rd(this,o),super._definePropertyAccessor(o,r)}_hasAccessor(o){return this.__dataHasAccessor&&this.__dataHasAccessor[o]}_isPropertyPending(o){return!!(this.__dataPending&&o in this.__dataPending)}}return i});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ad={"dom-if":!0,"dom-repeat":!0};let la=!1,ca=!1;function sd(){if(!la){la=!0;const t=document.createElement("textarea");t.placeholder="a",ca=t.placeholder===t.textContent}return ca}function ld(t){sd()&&t.localName==="textarea"&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}const cd=(()=>{const t=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:e=>e});return(e,i,n)=>{const o=i.getAttribute(n);if(t&&n.startsWith("on-")){e.setAttribute(n,t.createScript(o,n));return}e.setAttribute(n,o)}})();function ud(t){let e=t.getAttribute("is");if(e&&ad[e]){let i=t;for(i.removeAttribute("is"),t=i.ownerDocument.createElement(e),i.parentNode.replaceChild(t,i),t.appendChild(i);i.attributes.length;){const{name:n}=i.attributes[0];cd(t,i,n),i.removeAttribute(n)}}return t}function bl(t,e){let i=e.parentInfo&&bl(t,e.parentInfo);if(i){for(let n=i.firstChild,o=0;n;n=n.nextSibling)if(e.parentIndex===o++)return n}else return t}function dd(t,e,i,n){n.id&&(e[n.id]=i)}function pd(t,e,i){if(i.events&&i.events.length)for(let n=0,o=i.events,r;n<o.length&&(r=o[n]);n++)t._addMethodEventListenerToNode(e,r.name,r.value,t)}function hd(t,e,i,n){i.templateInfo&&(e._templateInfo=i.templateInfo,e._parentTemplateInfo=n)}function md(t,e,i){return t=t._methodHost||t,function(o){t[i]?t[i](o,o.detail):console.warn("listener method `"+i+"` not defined")}}const fd=ae(t=>{class e extends t{static _parseTemplate(n,o){if(!n._templateInfo){let r=n._templateInfo={};r.nodeInfoList=[],r.nestedTemplate=!!o,r.stripWhiteSpace=o&&o.stripWhiteSpace||n.hasAttribute&&n.hasAttribute("strip-whitespace"),this._parseTemplateContent(n,r,{parent:null})}return n._templateInfo}static _parseTemplateContent(n,o,r){return this._parseTemplateNode(n.content,o,r)}static _parseTemplateNode(n,o,r){let a=!1,s=n;return s.localName=="template"&&!s.hasAttribute("preserve-content")?a=this._parseTemplateNestedTemplate(s,o,r)||a:s.localName==="slot"&&(o.hasInsertionPoint=!0),ld(s),s.firstChild&&this._parseTemplateChildNodes(s,o,r),s.hasAttributes&&s.hasAttributes()&&(a=this._parseTemplateNodeAttributes(s,o,r)||a),a||r.noted}static _parseTemplateChildNodes(n,o,r){if(!(n.localName==="script"||n.localName==="style"))for(let a=n.firstChild,s=0,l;a;a=l){if(a.localName=="template"&&(a=ud(a)),l=a.nextSibling,a.nodeType===Node.TEXT_NODE){let u=l;for(;u&&u.nodeType===Node.TEXT_NODE;)a.textContent+=u.textContent,l=u.nextSibling,n.removeChild(u),u=l;if(o.stripWhiteSpace&&!a.textContent.trim()){n.removeChild(a);continue}}let c={parentIndex:s,parentInfo:r};this._parseTemplateNode(a,o,c)&&(c.infoIndex=o.nodeInfoList.push(c)-1),a.parentNode&&s++}}static _parseTemplateNestedTemplate(n,o,r){let a=n,s=this._parseTemplate(a,o);return(s.content=a.content.ownerDocument.createDocumentFragment()).appendChild(a.content),r.templateInfo=s,!0}static _parseTemplateNodeAttributes(n,o,r){let a=!1,s=Array.from(n.attributes);for(let l=s.length-1,c;c=s[l];l--)a=this._parseTemplateNodeAttribute(n,o,r,c.name,c.value)||a;return a}static _parseTemplateNodeAttribute(n,o,r,a,s){return a.slice(0,3)==="on-"?(n.removeAttribute(a),r.events=r.events||[],r.events.push({name:a.slice(3),value:s}),!0):a==="id"?(r.id=s,!0):!1}static _contentForTemplate(n){let o=n._templateInfo;return o&&o.content||n.content}_stampTemplate(n,o){n&&!n.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(n),o=o||this.constructor._parseTemplate(n);let r=o.nodeInfoList,a=o.content||n.content,s=document.importNode(a,!0);s.__noInsertionPoint=!o.hasInsertionPoint;let l=s.nodeList=new Array(r.length);s.$={};for(let c=0,u=r.length,d;c<u&&(d=r[c]);c++){let p=l[c]=bl(s,d);dd(this,s.$,p,d),hd(this,p,d,o),pd(this,p,d)}return s=s,s}_addMethodEventListenerToNode(n,o,r,a){a=a||n;let s=md(a,o,r);return this._addEventListenerToNode(n,o,s),s}_addEventListenerToNode(n,o,r){n.addEventListener(o,r)}_removeEventListenerFromNode(n,o,r){n.removeEventListener(o,r)}}return e});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let li=0;const ci=[],I={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},vl="__computeInfo",gd=/[A-Z]/;function lo(t,e,i){let n=t[e];if(!n)n=t[e]={};else if(!t.hasOwnProperty(e)&&(n=t[e]=Object.create(t[e]),i))for(let o in n){let r=n[o],a=n[o]=Array(r.length);for(let s=0;s<r.length;s++)a[s]=r[s]}return n}function Vt(t,e,i,n,o,r){if(e){let a=!1;const s=li++;for(let l in i){let c=o?ke(l):l,u=e[c];if(u)for(let d=0,p=u.length,h;d<p&&(h=u[d]);d++)(!h.info||h.info.lastRun!==s)&&(!o||fr(l,h.trigger))&&(h.info&&(h.info.lastRun=s),h.fn(t,l,i,n,h.info,o,r),a=!0)}return a}return!1}function bd(t,e,i,n,o,r,a,s){let l=!1,c=a?ke(n):n,u=e[c];if(u)for(let d=0,p=u.length,h;d<p&&(h=u[d]);d++)(!h.info||h.info.lastRun!==i)&&(!a||fr(n,h.trigger))&&(h.info&&(h.info.lastRun=i),h.fn(t,n,o,r,h.info,a,s),l=!0);return l}function fr(t,e){if(e){let i=e.name;return i==t||!!(e.structured&&ul(i,t))||!!(e.wildcard&&ai(i,t))}else return!0}function ua(t,e,i,n,o){let r=typeof o.method=="string"?t[o.method]:o.method,a=o.property;r?r.call(t,t.__data[a],n[a]):o.dynamicFn||console.warn("observer method `"+o.method+"` not defined")}function vd(t,e,i,n,o){let r=t[I.NOTIFY],a,s=li++;for(let c in e)e[c]&&(r&&bd(t,r,s,c,i,n,o)||o&&yd(t,c,i))&&(a=!0);let l;a&&(l=t.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function yd(t,e,i){let n=ke(e);if(n!==e){let o=Fn(n)+"-changed";return yl(t,o,i[e],e),!0}return!1}function yl(t,e,i,n){let o={value:i,queueProperty:!0};n&&(o.path=n),A(t).dispatchEvent(new CustomEvent(e,{detail:o}))}function _d(t,e,i,n,o,r){let s=(r?ke(e):e)!=e?e:null,l=s?L(t,s):t.__data[e];s&&l===void 0&&(l=i[e]),yl(t,o.eventName,l,s)}function xd(t,e,i,n,o){let r,a=t.detail,s=a&&a.path;s?(n=si(i,n,s),r=a&&a.value):r=t.currentTarget[i],r=o?!r:r,(!e[I.READ_ONLY]||!e[I.READ_ONLY][n])&&e._setPendingPropertyOrPath(n,r,!0,!!s)&&(!a||!a.queueProperty)&&e._invalidateProperties()}function wd(t,e,i,n,o){let r=t.__data[e];cn&&(r=cn(r,o.attrName,"attribute",t)),t._propertyToAttribute(e,o.attrName,r)}function Cd(t,e,i,n){let o=t[I.COMPUTE];if(o)if(Fu){li++;const r=Sd(t),a=[];for(let l in e)da(l,o,a,r,n);let s;for(;s=a.shift();)_l(t,"",e,i,s)&&da(s.methodInfo,o,a,r,n);Object.assign(i,t.__dataOld),Object.assign(e,t.__dataPending),t.__dataPending=null}else{let r=e;for(;Vt(t,o,r,i,n);)Object.assign(i,t.__dataOld),Object.assign(e,t.__dataPending),r=t.__dataPending,t.__dataPending=null}}const zd=(t,e,i)=>{let n=0,o=e.length-1,r=-1;for(;n<=o;){const a=n+o>>1,s=i.get(e[a].methodInfo)-i.get(t.methodInfo);if(s<0)n=a+1;else if(s>0)o=a-1;else{r=a;break}}r<0&&(r=o+1),e.splice(r,0,t)},da=(t,e,i,n,o)=>{const r=o?ke(t):t,a=e[r];if(a)for(let s=0;s<a.length;s++){const l=a[s];l.info.lastRun!==li&&(!o||fr(t,l.trigger))&&(l.info.lastRun=li,zd(l.info,i,n))}};function Sd(t){let e=t.constructor.__orderedComputedDeps;if(!e){e=new Map;const i=t[I.COMPUTE];let{counts:n,ready:o,total:r}=Ad(t),a;for(;a=o.shift();){e.set(a,e.size);const s=i[a];s&&s.forEach(l=>{const c=l.info.methodInfo;--r,--n[c]===0&&o.push(c)})}r!==0&&console.warn(`Computed graph for ${t.localName} incomplete; circular?`),t.constructor.__orderedComputedDeps=e}return e}function Ad(t){const e=t[vl],i={},n=t[I.COMPUTE],o=[];let r=0;for(let a in e){const s=e[a];r+=i[a]=s.args.filter(l=>!l.literal).length+(s.dynamicFn?1:0)}for(let a in n)e[a]||o.push(a);return{counts:i,ready:o,total:r}}function _l(t,e,i,n,o){let r=Vo(t,e,i,n,o);if(r===ci)return!1;let a=o.methodInfo;return t.__dataHasAccessor&&t.__dataHasAccessor[a]?t._setPendingProperty(a,r,!0):(t[a]=r,!1)}function Ed(t,e,i){let n=t.__dataLinkedPaths;if(n){let o;for(let r in n){let a=n[r];ai(r,e)?(o=si(r,a,e),t._setPendingPropertyOrPath(o,i,!0,!0)):ai(a,e)&&(o=si(a,r,e),t._setPendingPropertyOrPath(o,i,!0,!0))}}}function co(t,e,i,n,o,r,a){i.bindings=i.bindings||[];let s={kind:n,target:o,parts:r,literal:a,isCompound:r.length!==1};if(i.bindings.push(s),$d(s)){let{event:c,negate:u}=s.parts[0];s.listenerEvent=c||Fn(o)+"-changed",s.listenerNegate=u}let l=e.nodeInfoList.length;for(let c=0;c<s.parts.length;c++){let u=s.parts[c];u.compoundIndex=c,Md(t,e,s,u,l)}}function Md(t,e,i,n,o){if(!n.literal)if(i.kind==="attribute"&&i.target[0]==="-")console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let r=n.dependencies,a={index:o,binding:i,part:n,evaluator:t};for(let s=0;s<r.length;s++){let l=r[s];typeof l=="string"&&(l=wl(l),l.wildcard=!0),t._addTemplatePropertyEffect(e,l.rootProperty,{fn:Ld,info:a,trigger:l})}}}function Ld(t,e,i,n,o,r,a){let s=a[o.index],l=o.binding,c=o.part;if(r&&c.source&&e.length>c.source.length&&l.kind=="property"&&!l.isCompound&&s.__isPropertyEffectsClient&&s.__dataHasAccessor&&s.__dataHasAccessor[l.target]){let u=i[e];e=si(c.source,l.target,e),s._setPendingPropertyOrPath(e,u,!1,!0)&&t._enqueueClient(s)}else{let u=o.evaluator._evaluateBinding(t,c,e,i,n,r);u!==ci&&kd(t,s,l,c,u)}}function kd(t,e,i,n,o){if(o=Od(e,o,i,n),cn&&(o=cn(o,i.target,i.kind,e)),i.kind=="attribute")t._valueToNodeAttribute(e,o,i.target);else{let r=i.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[r]?(!e[I.READ_ONLY]||!e[I.READ_ONLY][r])&&e._setPendingProperty(r,o)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,r,o)}}function Od(t,e,i,n){if(i.isCompound){let o=t.__dataCompoundStorage[i.target];o[n.compoundIndex]=e,e=o.join("")}return i.kind!=="attribute"&&(i.target==="textContent"||i.target==="value"&&(t.localName==="input"||t.localName==="textarea"))&&(e=e??""),e}function $d(t){return!!t.target&&t.kind!="attribute"&&t.kind!="text"&&!t.isCompound&&t.parts[0].mode==="{"}function Td(t,e){let{nodeList:i,nodeInfoList:n}=e;if(n.length)for(let o=0;o<n.length;o++){let r=n[o],a=i[o],s=r.bindings;if(s)for(let l=0;l<s.length;l++){let c=s[l];Pd(a,c),Id(a,t,c)}a.__dataHost=t}}function Pd(t,e){if(e.isCompound){let i=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),n=e.parts,o=new Array(n.length);for(let a=0;a<n.length;a++)o[a]=n[a].literal;let r=e.target;i[r]=o,e.literal&&e.kind=="property"&&(r==="className"&&(t=A(t)),t[r]=e.literal)}}function Id(t,e,i){if(i.listenerEvent){let n=i.parts[0];t.addEventListener(i.listenerEvent,function(o){xd(o,e,i.target,n.source,n.negate)})}}function pa(t,e,i,n,o,r){r=e.static||r&&(typeof r!="object"||r[e.methodName]);let a={methodName:e.methodName,args:e.args,methodInfo:o,dynamicFn:r};for(let s=0,l;s<e.args.length&&(l=e.args[s]);s++)l.literal||t._addPropertyEffect(l.rootProperty,i,{fn:n,info:a,trigger:l});return r&&t._addPropertyEffect(e.methodName,i,{fn:n,info:a}),a}function Vo(t,e,i,n,o){let r=t._methodHost||t,a=r[o.methodName];if(a){let s=t._marshalArgs(o.args,e,i);return s===ci?ci:a.apply(r,s)}else o.dynamicFn||console.warn("method `"+o.methodName+"` not defined")}const Hd=[],xl="(?:[a-zA-Z_$][\\w.:$\\-*]*)",Nd="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",Fd="(?:'(?:[^'\\\\]|\\\\.)*')",Vd='(?:"(?:[^"\\\\]|\\\\.)*")',Rd="(?:"+Fd+"|"+Vd+")",ha="(?:("+xl+"|"+Nd+"|"+Rd+")\\s*)",Dd="(?:"+ha+"(?:,\\s*"+ha+")*)",qd="(?:\\(\\s*(?:"+Dd+"?)\\)\\s*)",Bd="("+xl+"\\s*"+qd+"?)",jd="(\\[\\[|{{)\\s*",Ud="(?:]]|}})",Kd="(?:(!)\\s*)?",Wd=jd+Kd+Bd+Ud,ma=new RegExp(Wd,"g");function fa(t){let e="";for(let i=0;i<t.length;i++){let n=t[i].literal;e+=n||""}return e}function uo(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let n={methodName:e[1],static:!0,args:Hd};if(e[2].trim()){let o=e[2].replace(/\\,/g,"&comma;").split(",");return Gd(o,n)}else return n}return null}function Gd(t,e){return e.args=t.map(function(i){let n=wl(i);return n.literal||(e.static=!1),n},this),e}function wl(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:e,value:"",literal:!1},n=e[0];switch(n==="-"&&(n=e[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':i.value=e.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(e),i.literal=!0;break}return i.literal||(i.rootProperty=ke(e),i.structured=Ho(e),i.structured&&(i.wildcard=e.slice(-2)==".*",i.wildcard&&(i.name=e.slice(0,-2)))),i}function ga(t,e,i){let n=L(t,i);return n===void 0&&(n=e[i]),n}function Cl(t,e,i,n){const o={indexSplices:n};Po&&!t._overrideLegacyUndefined&&(e.splices=o),t.notifyPath(i+".splices",o),t.notifyPath(i+".length",e.length),Po&&!t._overrideLegacyUndefined&&(o.indexSplices=[])}function kt(t,e,i,n,o,r){Cl(t,e,i,[{index:n,addedCount:o,removed:r,object:e,type:"splice"}])}function Yd(t){return t[0].toUpperCase()+t.substring(1)}const Vn=ae(t=>{const e=fd(gl(t));class i extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return I}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(Ot.length){let o=Ot[Ot.length-1];o._enqueueClient(this),this.__dataHost=o}}_initializeProtoProperties(o){this.__data=Object.create(o),this.__dataPending=Object.create(o),this.__dataOld={}}_initializeInstanceProperties(o){let r=this[I.READ_ONLY];for(let a in o)(!r||!r[a])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[a]=this.__dataPending[a]=o[a])}_addPropertyEffect(o,r,a){this._createPropertyAccessor(o,r==I.READ_ONLY);let s=lo(this,r,!0)[o];s||(s=this[r][o]=[]),s.push(a)}_removePropertyEffect(o,r,a){let s=lo(this,r,!0)[o],l=s.indexOf(a);l>=0&&s.splice(l,1)}_hasPropertyEffect(o,r){let a=this[r];return!!(a&&a[o])}_hasReadOnlyEffect(o){return this._hasPropertyEffect(o,I.READ_ONLY)}_hasNotifyEffect(o){return this._hasPropertyEffect(o,I.NOTIFY)}_hasReflectEffect(o){return this._hasPropertyEffect(o,I.REFLECT)}_hasComputedEffect(o){return this._hasPropertyEffect(o,I.COMPUTE)}_setPendingPropertyOrPath(o,r,a,s){if(s||ke(Array.isArray(o)?o[0]:o)!==o){if(!s){let l=L(this,o);if(o=No(this,o,r),!o||!super._shouldPropertyChange(o,r,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(o,r,a))return Ed(this,o,r),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[o])return this._setPendingProperty(o,r,a);this[o]=r}return!1}_setUnmanagedPropertyToNode(o,r,a){(a!==o[r]||typeof a=="object")&&(r==="className"&&(o=A(o)),o[r]=a)}_setPendingProperty(o,r,a){let s=this.__dataHasPaths&&Ho(o),l=s?this.__dataTemp:this.__data;return this._shouldPropertyChange(o,r,l[o])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),o in this.__dataOld||(this.__dataOld[o]=this.__data[o]),s?this.__dataTemp[o]=r:this.__data[o]=r,this.__dataPending[o]=r,(s||this[I.NOTIFY]&&this[I.NOTIFY][o])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[o]=a),!0):!1}_setProperty(o,r){this._setPendingProperty(o,r,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(o){this.__dataPendingClients=this.__dataPendingClients||[],o!==this&&this.__dataPendingClients.push(o)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let o=this.__dataPendingClients;if(o){this.__dataPendingClients=null;for(let r=0;r<o.length;r++){let a=o[r];a.__dataEnabled?a.__dataPending&&a._flushProperties():a._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(o,r){for(let a in o)(r||!this[I.READ_ONLY]||!this[I.READ_ONLY][a])&&this._setPendingPropertyOrPath(a,o[a],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(o,r,a){let s=this.__dataHasPaths;this.__dataHasPaths=!1;let l;Cd(this,r,a,s),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(r,a,s),this._flushClients(),Vt(this,this[I.REFLECT],r,a,s),Vt(this,this[I.OBSERVE],r,a,s),l&&vd(this,l,r,a,s),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(o,r,a){this[I.PROPAGATE]&&Vt(this,this[I.PROPAGATE],o,r,a),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,o,r,a)}_runEffectsForTemplate(o,r,a,s){const l=(c,u)=>{Vt(this,o.propertyEffects,c,a,u,o.nodeList);for(let d=o.firstChild;d;d=d.nextSibling)this._runEffectsForTemplate(d,c,a,u)};o.runEffects?o.runEffects(l,r,s):l(r,s)}linkPaths(o,r){o=Ft(o),r=Ft(r),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[o]=r}unlinkPaths(o){o=Ft(o),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[o]}notifySplices(o,r){let a={path:""},s=L(this,o,a);Cl(this,s,a.path,r)}get(o,r){return L(r||this,o)}set(o,r,a){a?No(a,o,r):(!this[I.READ_ONLY]||!this[I.READ_ONLY][o])&&this._setPendingPropertyOrPath(o,r,!0)&&this._invalidateProperties()}push(o,...r){let a={path:""},s=L(this,o,a),l=s.length,c=s.push(...r);return r.length&&kt(this,s,a.path,l,r.length,[]),c}pop(o){let r={path:""},a=L(this,o,r),s=!!a.length,l=a.pop();return s&&kt(this,a,r.path,a.length,0,[l]),l}splice(o,r,a,...s){let l={path:""},c=L(this,o,l);r<0?r=c.length-Math.floor(-r):r&&(r=Math.floor(r));let u;return arguments.length===2?u=c.splice(r):u=c.splice(r,a,...s),(s.length||u.length)&&kt(this,c,l.path,r,s.length,u),u}shift(o){let r={path:""},a=L(this,o,r),s=!!a.length,l=a.shift();return s&&kt(this,a,r.path,0,0,[l]),l}unshift(o,...r){let a={path:""},s=L(this,o,a),l=s.unshift(...r);return r.length&&kt(this,s,a.path,0,r.length,[]),l}notifyPath(o,r){let a;if(arguments.length==1){let s={path:""};r=L(this,o,s),a=s.path}else Array.isArray(o)?a=Ft(o):a=o;this._setPendingPropertyOrPath(a,r,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(o,r){this._addPropertyEffect(o,I.READ_ONLY),r&&(this["_set"+Yd(o)]=function(a){this._setProperty(o,a)})}_createPropertyObserver(o,r,a){let s={property:o,method:r,dynamicFn:!!a};this._addPropertyEffect(o,I.OBSERVE,{fn:ua,info:s,trigger:{name:o}}),a&&this._addPropertyEffect(r,I.OBSERVE,{fn:ua,info:s,trigger:{name:r}})}_createMethodObserver(o,r){let a=uo(o);if(!a)throw new Error("Malformed observer expression '"+o+"'");pa(this,a,I.OBSERVE,Vo,null,r)}_createNotifyingProperty(o){this._addPropertyEffect(o,I.NOTIFY,{fn:_d,info:{eventName:Fn(o)+"-changed",property:o}})}_createReflectedProperty(o){let r=this.constructor.attributeNameForProperty(o);r[0]==="-"?console.warn("Property "+o+" cannot be reflected to attribute "+r+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(o,I.REFLECT,{fn:wd,info:{attrName:r}})}_createComputedProperty(o,r,a){let s=uo(r);if(!s)throw new Error("Malformed computed expression '"+r+"'");const l=pa(this,s,I.COMPUTE,_l,o,a);lo(this,vl)[o]=l}_marshalArgs(o,r,a){const s=this.__data,l=[];for(let c=0,u=o.length;c<u;c++){let{name:d,structured:p,wildcard:h,value:m,literal:f}=o[c];if(!f)if(h){const b=ai(d,r),v=ga(s,a,b?r:d);m={path:b?r:d,value:v,base:b?L(s,d):v}}else m=p?ga(s,a,d):s[d];if(Po&&!this._overrideLegacyUndefined&&m===void 0&&o.length>1)return ci;l[c]=m}return l}static addPropertyEffect(o,r,a){this.prototype._addPropertyEffect(o,r,a)}static createPropertyObserver(o,r,a){this.prototype._createPropertyObserver(o,r,a)}static createMethodObserver(o,r){this.prototype._createMethodObserver(o,r)}static createNotifyingProperty(o){this.prototype._createNotifyingProperty(o)}static createReadOnlyProperty(o,r){this.prototype._createReadOnlyProperty(o,r)}static createReflectedProperty(o){this.prototype._createReflectedProperty(o)}static createComputedProperty(o,r,a){this.prototype._createComputedProperty(o,r,a)}static bindTemplate(o){return this.prototype._bindTemplate(o)}_bindTemplate(o,r){let a=this.constructor._parseTemplate(o),s=this.__preBoundTemplateInfo==a;if(!s)for(let l in a.propertyEffects)this._createPropertyAccessor(l);if(r)if(a=Object.create(a),a.wasPreBound=s,!this.__templateInfo)this.__templateInfo=a;else{const l=o._parentTemplateInfo||this.__templateInfo,c=l.lastChild;a.parent=l,l.lastChild=a,a.previousSibling=c,c?c.nextSibling=a:l.firstChild=a}else this.__preBoundTemplateInfo=a;return a}static _addTemplatePropertyEffect(o,r,a){let s=o.hostProps=o.hostProps||{};s[r]=!0;let l=o.propertyEffects=o.propertyEffects||{};(l[r]=l[r]||[]).push(a)}_stampTemplate(o,r){r=r||this._bindTemplate(o,!0),Ot.push(this);let a=super._stampTemplate(o,r);if(Ot.pop(),r.nodeList=a.nodeList,!r.wasPreBound){let s=r.childNodes=[];for(let l=a.firstChild;l;l=l.nextSibling)s.push(l)}return a.templateInfo=r,Td(this,r),this.__dataClientsReady&&(this._runEffectsForTemplate(r,this.__data,null,!1),this._flushClients()),a}_removeBoundDom(o){const r=o.templateInfo,{previousSibling:a,nextSibling:s,parent:l}=r;a?a.nextSibling=s:l&&(l.firstChild=s),s?s.previousSibling=a:l&&(l.lastChild=a),r.nextSibling=r.previousSibling=null;let c=r.childNodes;for(let u=0;u<c.length;u++){let d=c[u];A(A(d).parentNode).removeChild(d)}}static _parseTemplateNode(o,r,a){let s=e._parseTemplateNode.call(this,o,r,a);if(o.nodeType===Node.TEXT_NODE){let l=this._parseBindings(o.textContent,r);l&&(o.textContent=fa(l)||" ",co(this,r,a,"text","textContent",l),s=!0)}return s}static _parseTemplateNodeAttribute(o,r,a,s,l){let c=this._parseBindings(l,r);if(c){let u=s,d="property";gd.test(s)?d="attribute":s[s.length-1]=="$"&&(s=s.slice(0,-1),d="attribute");let p=fa(c);return p&&d=="attribute"&&(s=="class"&&o.hasAttribute("class")&&(p+=" "+o.getAttribute(s)),o.setAttribute(s,p)),d=="attribute"&&u=="disable-upgrade$"&&o.setAttribute(s,""),o.localName==="input"&&u==="value"&&o.setAttribute(u,""),o.removeAttribute(u),d==="property"&&(s=mr(s)),co(this,r,a,d,s,c,p),!0}else return e._parseTemplateNodeAttribute.call(this,o,r,a,s,l)}static _parseTemplateNestedTemplate(o,r,a){let s=e._parseTemplateNestedTemplate.call(this,o,r,a);const l=o.parentNode,c=a.templateInfo,u=l.localName==="dom-if",d=l.localName==="dom-repeat";na&&(u||d)&&(l.removeChild(o),a=a.parentInfo,a.templateInfo=c,a.noted=!0,s=!1);let p=c.hostProps;if(ll&&u)p&&(r.hostProps=Object.assign(r.hostProps||{},p),na||(a.parentInfo.noted=!0));else{let h="{";for(let m in p){let f=[{mode:h,source:m,dependencies:[m],hostProp:!0}];co(this,r,a,"property","_host_"+m,f)}}return s}static _parseBindings(o,r){let a=[],s=0,l;for(;(l=ma.exec(o))!==null;){l.index>s&&a.push({literal:o.slice(s,l.index)});let c=l[1][0],u=!!l[2],d=l[3].trim(),p=!1,h="",m=-1;c=="{"&&(m=d.indexOf("::"))>0&&(h=d.substring(m+2),d=d.substring(0,m),p=!0);let f=uo(d),b=[];if(f){let{args:v,methodName:g}=f;for(let y=0;y<v.length;y++){let w=v[y];w.literal||b.push(w)}let x=r.dynamicFns;(x&&x[g]||f.static)&&(b.push(g),f.dynamicFn=!0)}else b.push(d);a.push({source:d,mode:c,negate:u,customEvent:p,signature:f,dependencies:b,event:h}),s=ma.lastIndex}if(s&&s<o.length){let c=o.substring(s);c&&a.push({literal:c})}return a.length?a:null}static _evaluateBinding(o,r,a,s,l,c){let u;return r.signature?u=Vo(o,a,s,l,r.signature):a!=r.source?u=L(o,r.source):c&&Ho(a)?u=L(o,a):u=o.__data[a],r.negate&&(u=!u),u}}return i}),Ot=[];/**
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
*/function Jd(t){const e={};for(let i in t){const n=t[i];e[i]=typeof n=="function"?{type:n}:n}return e}const Xd=ae(t=>{const e=ml(t);function i(r){const a=Object.getPrototypeOf(r);return a.prototype instanceof o?a:null}function n(r){if(!r.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",r))){let a=null;if(r.hasOwnProperty(JSCompiler_renameProperty("properties",r))){const s=r.properties;s&&(a=Jd(s))}r.__ownProperties=a}return r.__ownProperties}class o extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const a=this._properties;this.__observedAttributes=a?Object.keys(a).map(s=>this.prototype._addPropertyToAttributeMap(s)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const a=i(this);a&&a.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const a=n(this);a&&this.createProperties(a)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const a=i(this);this.__properties=Object.assign({},a&&a._properties,n(this))}return this.__properties}static typeForProperty(a){const s=this._properties[a];return s&&s.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return o});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const Zd="3.5.2",Ro=window.ShadyCSS&&window.ShadyCSS.cssBuild,Rn=ae(t=>{const e=Xd(Vn(t));function i(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let c=l._properties;for(let u in c){let d=c[u];"value"in d&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[u]=d)}}return l.__propertyDefaults}function n(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function o(l,c,u,d){u.computed&&(u.readOnly=!0),u.computed&&(l._hasReadOnlyEffect(c)?console.warn(`Cannot redefine computed property '${c}'.`):l._createComputedProperty(c,u.computed,d)),u.readOnly&&!l._hasReadOnlyEffect(c)?l._createReadOnlyProperty(c,!u.computed):u.readOnly===!1&&l._hasReadOnlyEffect(c)&&console.warn(`Cannot make readOnly property '${c}' non-readOnly.`),u.reflectToAttribute&&!l._hasReflectEffect(c)?l._createReflectedProperty(c):u.reflectToAttribute===!1&&l._hasReflectEffect(c)&&console.warn(`Cannot make reflected property '${c}' non-reflected.`),u.notify&&!l._hasNotifyEffect(c)?l._createNotifyingProperty(c):u.notify===!1&&l._hasNotifyEffect(c)&&console.warn(`Cannot make notify property '${c}' non-notify.`),u.observer&&l._createPropertyObserver(c,u.observer,d[u.observer]),l._addPropertyToAttributeMap(c)}function r(l,c,u,d){if(!Ro){const p=c.content.querySelectorAll("style"),h=pr(c),m=Ku(u),f=c.content.firstElementChild;for(let v=0;v<m.length;v++){let g=m[v];g.textContent=l._processStyleText(g.textContent,d),c.content.insertBefore(g,f)}let b=0;for(let v=0;v<h.length;v++){let g=h[v],x=p[b];x!==g?(g=g.cloneNode(!0),x.parentNode.insertBefore(g,x)):b++,g.textContent=l._processStyleText(g.textContent,d)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(c,u),Vu&&Ro&&Tu){const p=c.content.querySelectorAll("style");if(p){let h="";Array.from(p).forEach(m=>{h+=m.textContent,m.parentNode.removeChild(m)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(h)}}}function a(l){let c=null;if(l&&(!vt||Hu)&&(c=ri.import(l,"template"),vt&&!c))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return c}class s extends e{static get polymerElementVersion(){return Zd}static _finalizeClass(){e._finalizeClass.call(this);const c=n(this);c&&this.createObservers(c,this._properties),this._prepareTemplate()}static _prepareTemplate(){let c=this.template;c&&(typeof c=="string"?(console.error("template getter must return HTMLTemplateElement"),c=null):oi||(c=c.cloneNode(!0))),this.prototype._template=c}static createProperties(c){for(let u in c)o(this.prototype,u,c[u],c)}static createObservers(c,u){const d=this.prototype;for(let p=0;p<c.length;p++)d._createMethodObserver(c[p],u)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let c=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof c=="function"&&(c=c()),this._template=c!==void 0?c:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&a(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(c){this._template=c}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const c=this.importMeta;if(c)this._importPath=cr(c.url);else{const u=ri.import(this.is);this._importPath=u&&u.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Pu,this.importPath=this.constructor.importPath;let c=i(this.constructor);if(c)for(let u in c){let d=c[u];if(this._canApplyPropertyDefault(u)){let p=typeof d.value=="function"?d.value.call(this):d.value;this._hasAccessor(u)?this._setPendingProperty(u,p,!0):this[u]=p}}}_canApplyPropertyDefault(c){return!this.hasOwnProperty(c)}static _processStyleText(c,u){return lr(c,u)}static _finalizeTemplate(c){const u=this.prototype._template;if(u&&!u.__polymerFinalized){u.__polymerFinalized=!0;const d=this.importPath,p=d?Yt(d):"";r(this,u,c,p),this.prototype._bindTemplate(u)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(c){const u=A(this);if(u.attachShadow)return c?(u.shadowRoot||(u.attachShadow({mode:"open",shadyUpgradeFragment:c}),u.shadowRoot.appendChild(c),this.constructor._styleSheet&&(u.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Nu&&window.ShadyDOM&&window.ShadyDOM.flushInitial(u.shadowRoot),u.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(c){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,c)}resolveUrl(c,u){return!u&&this.importPath&&(u=Yt(this.importPath)),Yt(c,u)}static _parseTemplateContent(c,u,d){return u.dynamicFns=u.dynamicFns||this._properties,e._parseTemplateContent.call(this,c,u,d)}static _addTemplatePropertyEffect(c,u,d){return sl&&!(u in this._properties)&&!(d.info.part.signature&&d.info.part.signature.static)&&!d.info.part.hostProp&&!c.nestedTemplate&&console.warn(`Property '${u}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,c,u,d)}}return s});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ba=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:t=>t});class zl{constructor(e,i){Al(e,i);const n=i.reduce((o,r,a)=>o+Sl(r)+e[a+1],e[0]);this.value=n.toString()}toString(){return this.value}}function Sl(t){if(t instanceof zl)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}function Qd(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof zl)return Sl(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}const U=function(e,...i){Al(e,i);const n=document.createElement("template");let o=i.reduce((r,a,s)=>r+Qd(a)+e[s+1],e[0]);return ba&&(o=ba.createHTML(o)),n.innerHTML=o,n},Al=(t,e)=>{if(!Array.isArray(t)||!Array.isArray(t.raw)||e.length!==t.length-1)throw new TypeError("Invalid call to the html template tag")};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const G=Rn(HTMLElement);let dn,El=0;function va(t){dn=t}function ya(){dn=null,El=0}function ep(){return El++}const po=Symbol("haunted.phase"),en=Symbol("haunted.hook"),_a=Symbol("haunted.update"),xa=Symbol("haunted.commit"),Ye=Symbol("haunted.effects"),Jt=Symbol("haunted.layoutEffects"),Do="haunted.context";class tp{update;host;virtual;[en];[Ye];[Jt];constructor(e,i){this.update=e,this.host=i,this[en]=new Map,this[Ye]=[],this[Jt]=[]}run(e){va(this);let i=e();return ya(),i}_runEffects(e){let i=this[e];va(this);for(let n of i)n.call(this);ya()}runEffects(){this._runEffects(Ye)}runLayoutEffects(){this._runEffects(Jt)}teardown(){this[en].forEach(i=>{typeof i.teardown=="function"&&i.teardown(!0)})}}const ip=Promise.resolve().then.bind(Promise.resolve());function Ml(){let t=[],e;function i(){e=null;let n=t;t=[];for(var o=0,r=n.length;o<r;o++)n[o]()}return function(n){t.push(n),e==null&&(e=ip(i))}}const np=Ml(),wa=Ml();class op{renderer;host;state;[po];_updateQueued;_active;constructor(e,i){this.renderer=e,this.host=i,this.state=new tp(this.update.bind(this),i),this[po]=null,this._updateQueued=!1,this._active=!0}update(){this._active&&(this._updateQueued||(np(()=>{let e=this.handlePhase(_a);wa(()=>{this.handlePhase(xa,e),wa(()=>{this.handlePhase(Ye)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,i){switch(this[po]=e,e){case xa:this.commit(i),this.runEffects(Jt);return;case _a:return this.render();case Ye:return this.runEffects(Ye)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const gr=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},rp=t=>t?.map(e=>typeof e=="string"?gr(e):e),ap=(t,...e)=>t.flatMap((i,n)=>[i,e[n]||""]).join(""),xe=ap,sp=(t="")=>t.replace(/-+([a-z])?/g,(e,i)=>i?i.toUpperCase():"");function lp(t){class e extends op{frag;renderResult;constructor(o,r,a){super(o,a||r),this.frag=r}commit(o){this.renderResult=t(o,this.frag)}}function i(n,o,r){const a=(r||o||{}).baseElement||HTMLElement,{observedAttributes:s=[],useShadowDOM:l=!0,shadowRootInit:c={},styleSheets:u}=r||o||{},d=rp(n.styleSheets||u);class p extends a{_scheduler;static get observedAttributes(){return n.observedAttributes||s||[]}constructor(){if(super(),l===!1)this._scheduler=new e(n,this);else{const b=this.attachShadow({mode:"open",...c});d&&(b.adoptedStyleSheets=d),this._scheduler=new e(n,b,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(b,v,g){if(v===g)return;let x=g===""?!0:g;Reflect.set(this,sp(b),x)}}function h(f){let b=f,v=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return b},set(g){v&&b===g||(v=!0,b=g,this._scheduler&&this._scheduler.update())}})}const m=new Proxy(a.prototype,{getPrototypeOf(f){return f},set(f,b,v,g){let x;return b in f?(x=Object.getOwnPropertyDescriptor(f,b),x&&x.set?(x.set.call(g,v),!0):(Reflect.set(f,b,v,g),!0)):(typeof b=="symbol"||b[0]==="_"?x={enumerable:!0,configurable:!0,writable:!0,value:v}:x=h(v),Object.defineProperty(g,b,x),x.set&&x.set.call(g,v),!0)}});return Object.setPrototypeOf(p.prototype,m),p}return i}class Be{id;state;constructor(e,i){this.id=e,this.state=i}}function cp(t,...e){let i=ep(),n=dn[en],o=n.get(i);return o||(o=new t(i,dn,...e),n.set(i,o)),o.update(...e)}function je(t){return cp.bind(null,t)}function Ll(t){return je(class extends Be{callback;lastValues;values;_teardown;constructor(e,i,n,o){super(e,i),t(i,this)}update(e,i){this.callback=e,this.values=i}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,i)=>this.lastValues[i]!==e)}})}function kl(t,e){t[Ye].push(e)}const $=Ll(kl),up=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,bi=je(class extends Be{Context;value;_ranEffect;_unsubscribe;constructor(t,e,i){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,kl(e,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};up(this.state.host).dispatchEvent(new CustomEvent(Do,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:n=null,value:o}=e;this.value=n?o:t.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}});function dp(t){return e=>{const i={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(Do,this)}disconnectedCallback(){this.removeEventListener(Do,this)}handleEvent(n){const{detail:o}=n;o.Context===i&&(o.value=this.value,o.unsubscribe=this.unsubscribe.bind(this,o.callback),this.listeners.add(o.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let o of this.listeners)o(n)}get value(){return this._value}},Consumer:t(function({render:n}){const o=bi(i);return n(o)},{useShadowDOM:!1}),defaultValue:e};return i}}const M=je(class extends Be{value;values;constructor(t,e,i,n){super(t,e),this.value=i(),this.values=n}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((e,i)=>this.values[i]!==e)}}),S=(t,e)=>M(()=>t,e);function pp(t,e){t[Jt].push(e)}const ui=Ll(pp),J=je(class extends Be{args;constructor(t,e,i){super(t,e),this.updater=this.updater.bind(this),typeof i=="function"&&(i=i()),this.makeArgs(i)}update(){return this.args}updater(t){const[e]=this.args;typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}}),hp=je(class extends Be{reducer;currentState;constructor(t,e,i,n,o){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=o!==void 0?o(n):n}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}}),mp=/([A-Z])/gu;je(class extends Be{property;eventName;constructor(t,e,i,n){if(super(t,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=i,this.eventName=i.replace(mp,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof n=="function"&&(n=n()),n!=null&&this.updateProp(n))}update(t,e){return[this.state.host[this.property],this.updater]}updater(t){const e=this.state.host[this.property];typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&this.updateProp(t)}updateProp(t){this.notify(t).defaultPrevented||(this.state.host[this.property]=t)}notify(t){const e=new CustomEvent(this.eventName,{detail:{value:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(e),e}});function vi(t){return M(()=>({current:t}),[])}function fp({render:t}){const e=lp(t),i=dp(e);return{component:e,createContext:i}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Oe=t=>(...e)=>({_$litDirective$:t,values:e});let St=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,n){this._$Ct=e,this._$AM=i,this._$Ci=n}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xt=(t,e)=>{const i=t._$AN;if(i===void 0)return!1;for(const n of i)n._$AO?.(e,!1),Xt(n,e);return!0},pn=t=>{let e,i;do{if((e=t._$AM)===void 0)break;i=e._$AN,i.delete(t),t=e}while(i?.size===0)},Ol=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(i===void 0)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),vp(e)}};function gp(t){this._$AN!==void 0?(pn(this),this._$AM=t,Ol(this)):this._$AM=t}function bp(t,e=!1,i=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(n))for(let r=i;r<n.length;r++)Xt(n[r],!1),pn(n[r]);else n!=null&&(Xt(n,!1),pn(n));else Xt(this,t)}const vp=t=>{t.type==ge.CHILD&&(t._$AP??=bp,t._$AQ??=gp)};class Dn extends St{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,i,n){super._$AT(e,i,n),Ol(this),this.isConnected=e._$AU}_$AO(e,i=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),i&&(Xt(this,e),pn(this))}setValue(e){if(ol(this._$Ct))this._$Ct._$AI(e,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=e,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}const{component:V,createContext:br}=fp({render:ln}),yp={duration:250},$l=t=>(e,i,n)=>{const o="max"+t.charAt(0).toUpperCase()+t.slice(1);Object.assign(e.style,{[o]:"",display:""});const{[t]:r}=e.getBoundingClientRect(),a=[0,r],[s,l]=i?a:a.slice().reverse(),c=e.animate([{[o]:`${s}px`},{[o]:`${l}px`}],{...yp,...n});c.onfinish=()=>Object.assign(e.style,{[o]:"",display:i?"":"none"})};function _p(t){return()=>t}const xp=_p(),vr=xp,Ze=t=>t;function qn(t,...e){return typeof t=="function"?t(...e):t}const Tl=br(()=>vr);customElements.define("cosmoz-keybinding-provider",Tl.Provider);const $e=t=>{const e=M(()=>({}),[]);return M(()=>Object.assign(e,t),[e,...Object.values(t)])},wp=(t,e)=>{const i=bi(Tl),n=$e(t);$(()=>i(n),e)},Ca=t=>t.matches(":focus-within"),Pl=({disabled:t,onFocus:e})=>{const[i,n]=J(),{focused:o,closed:r}=i||{},a=o&&!t,s=$e({closed:r,onFocus:e}),l=S(u=>n(d=>({...d,closed:u})),[]),c=S(u=>{const d=u.currentTarget;return Ca(d)?n(p=>({focused:!0,closed:!p?.closed})):d.focus()},[]);return $(()=>{if(!a)return;const u=d=>{if(d.defaultPrevented)return;const{closed:p}=s;d.key==="Escape"&&!p?(d.preventDefault(),l(!0)):["ArrowUp","Up"].includes(d.key)&&p&&(d.preventDefault(),l(!1))};return document.addEventListener("keydown",u,!0),()=>document.removeEventListener("keydown",u,!0)},[a]),{focused:a,active:a&&!r,setClosed:l,onToggle:c,onFocus:S(u=>{const d=Ca(u.currentTarget);n({focused:d}),s.onFocus?.(d)},[s])}},za=["focusin","focusout"],Cp=t=>{const e=Pl(t),{onFocus:i}=e;return $(()=>(t.setAttribute("tabindex","0"),za.forEach(n=>t.addEventListener(n,i)),()=>{za.forEach(n=>t.removeEventListener(n,i))}),[]),e},zp=xe`
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
`,Sp=()=>_` <slot></slot> `;customElements.define("cosmoz-dropdown-list",V(Sp,{styleSheets:[zp]}));const Ap=({placement:t})=>_` <cosmoz-dropdown
		.placement=${t}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;customElements.define("cosmoz-dropdown-menu",V(Ap));/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function q(t,e,i){return t?e(t):i?.(t)}const ho=new WeakMap,Qe=Oe(class extends Dn{render(t){return de}update(t,[e]){const i=e!==this.G;return i&&this.G!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),de}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let i=ho.get(e);i===void 0&&(i=new WeakMap,ho.set(e,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?ho.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Il="important",Ep=" !"+Il,Hl=Oe(class extends St{constructor(t){if(super(t),t.type!==ge.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const n=t[i];return n==null?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`}),"")}update(t,[e]){const{style:i}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const n of this.ft)e[n]==null&&(this.ft.delete(n),n.includes("-")?i.removeProperty(n):i[n]=null);for(const n in e){const o=e[n];if(o!=null){this.ft.add(n);const r=typeof o=="string"&&o.endsWith(Ep);n.includes("-")||r?i.setProperty(n,r?o.slice(0,-11):o,r?Il:""):i[n]=o}}return ne}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mp={},yr=Oe(class extends St{constructor(){super(...arguments),this.ot=Mp}render(t,e){return e()}update(t,[e,i]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every(((n,o)=>n===this.ot[o])))return ne}else if(this.ot===e)return ne;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,i)}}),Nl=(t=HTMLElement)=>class extends t{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},Lp=xe`
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
`,kp=()=>_`<div class="wrap" part="wrap"><slot></slot></div>`;customElements.define("cosmoz-dropdown-content",Nl(V(kp,{styleSheets:[Lp]})));const yt=Math.min,le=Math.max,hn=Math.round,ki=Math.floor,_e=t=>({x:t,y:t}),Op={left:"right",right:"left",bottom:"top",top:"bottom"},$p={start:"end",end:"start"};function Sa(t,e,i){return le(t,yt(e,i))}function Bn(t,e){return typeof t=="function"?t(e):t}function et(t){return t.split("-")[0]}function jn(t){return t.split("-")[1]}function Fl(t){return t==="x"?"y":"x"}function Vl(t){return t==="y"?"height":"width"}const Tp=new Set(["top","bottom"]);function Ie(t){return Tp.has(et(t))?"y":"x"}function Rl(t){return Fl(Ie(t))}function Pp(t,e,i){i===void 0&&(i=!1);const n=jn(t),o=Rl(t),r=Vl(o);let a=o==="x"?n===(i?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(a=mn(a)),[a,mn(a)]}function Ip(t){const e=mn(t);return[qo(t),e,qo(e)]}function qo(t){return t.replace(/start|end/g,e=>$p[e])}const Aa=["left","right"],Ea=["right","left"],Hp=["top","bottom"],Np=["bottom","top"];function Fp(t,e,i){switch(t){case"top":case"bottom":return i?e?Ea:Aa:e?Aa:Ea;case"left":case"right":return e?Hp:Np;default:return[]}}function Vp(t,e,i,n){const o=jn(t);let r=Fp(et(t),i==="start",n);return o&&(r=r.map(a=>a+"-"+o),e&&(r=r.concat(r.map(qo)))),r}function mn(t){return t.replace(/left|right|bottom|top/g,e=>Op[e])}function Rp(t){return{top:0,right:0,bottom:0,left:0,...t}}function Dp(t){return typeof t!="number"?Rp(t):{top:t,right:t,bottom:t,left:t}}function fn(t){const{x:e,y:i,width:n,height:o}=t;return{width:n,height:o,top:i,left:e,right:e+n,bottom:i+o,x:e,y:i}}function Ma(t,e,i){let{reference:n,floating:o}=t;const r=Ie(e),a=Rl(e),s=Vl(a),l=et(e),c=r==="y",u=n.x+n.width/2-o.width/2,d=n.y+n.height/2-o.height/2,p=n[s]/2-o[s]/2;let h;switch(l){case"top":h={x:u,y:n.y-o.height};break;case"bottom":h={x:u,y:n.y+n.height};break;case"right":h={x:n.x+n.width,y:d};break;case"left":h={x:n.x-o.width,y:d};break;default:h={x:n.x,y:n.y}}switch(jn(e)){case"start":h[a]-=p*(i&&c?-1:1);break;case"end":h[a]+=p*(i&&c?-1:1);break}return h}const qp=async(t,e,i)=>{const{placement:n="bottom",strategy:o="absolute",middleware:r=[],platform:a}=i,s=r.filter(Boolean),l=await(a.isRTL==null?void 0:a.isRTL(e));let c=await a.getElementRects({reference:t,floating:e,strategy:o}),{x:u,y:d}=Ma(c,n,l),p=n,h={},m=0;for(let f=0;f<s.length;f++){const{name:b,fn:v}=s[f],{x:g,y:x,data:y,reset:w}=await v({x:u,y:d,initialPlacement:n,placement:p,strategy:o,middlewareData:h,rects:c,platform:a,elements:{reference:t,floating:e}});u=g??u,d=x??d,h={...h,[b]:{...h[b],...y}},w&&m<=50&&(m++,typeof w=="object"&&(w.placement&&(p=w.placement),w.rects&&(c=w.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:o}):w.rects),{x:u,y:d}=Ma(c,p,l)),f=-1)}return{x:u,y:d,placement:p,strategy:o,middlewareData:h}};async function _r(t,e){var i;e===void 0&&(e={});const{x:n,y:o,platform:r,rects:a,elements:s,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:p=!1,padding:h=0}=Bn(e,t),m=Dp(h),b=s[p?d==="floating"?"reference":"floating":d],v=fn(await r.getClippingRect({element:(i=await(r.isElement==null?void 0:r.isElement(b)))==null||i?b:b.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(s.floating)),boundary:c,rootBoundary:u,strategy:l})),g=d==="floating"?{x:n,y:o,width:a.floating.width,height:a.floating.height}:a.reference,x=await(r.getOffsetParent==null?void 0:r.getOffsetParent(s.floating)),y=await(r.isElement==null?void 0:r.isElement(x))?await(r.getScale==null?void 0:r.getScale(x))||{x:1,y:1}:{x:1,y:1},w=fn(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:g,offsetParent:x,strategy:l}):g);return{top:(v.top-w.top+m.top)/y.y,bottom:(w.bottom-v.bottom+m.bottom)/y.y,left:(v.left-w.left+m.left)/y.x,right:(w.right-v.right+m.right)/y.x}}const Bp=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var i,n;const{placement:o,middlewareData:r,rects:a,initialPlacement:s,platform:l,elements:c}=e,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:f=!0,...b}=Bn(t,e);if((i=r.arrow)!=null&&i.alignmentOffset)return{};const v=et(o),g=Ie(s),x=et(s)===s,y=await(l.isRTL==null?void 0:l.isRTL(c.floating)),w=p||(x||!f?[mn(s)]:Ip(s)),z=m!=="none";!p&&z&&w.push(...Vp(s,f,m,y));const C=[s,...w],E=await _r(e,b),T=[];let D=((n=r.flip)==null?void 0:n.overflows)||[];if(u&&T.push(E[v]),d){const B=Pp(o,a,y);T.push(E[B[0]],E[B[1]])}if(D=[...D,{placement:o,overflows:T}],!T.every(B=>B<=0)){var Y,ie;const B=(((Y=r.flip)==null?void 0:Y.index)||0)+1,j=C[B];if(j&&(!(d==="alignment"?g!==Ie(j):!1)||D.every(R=>Ie(R.placement)===g?R.overflows[0]>0:!0)))return{data:{index:B,overflows:D},reset:{placement:j}};let K=(ie=D.filter(P=>P.overflows[0]<=0).sort((P,R)=>P.overflows[1]-R.overflows[1])[0])==null?void 0:ie.placement;if(!K)switch(h){case"bestFit":{var X;const P=(X=D.filter(R=>{if(z){const Z=Ie(R.placement);return Z===g||Z==="y"}return!0}).map(R=>[R.placement,R.overflows.filter(Z=>Z>0).reduce((Z,Se)=>Z+Se,0)]).sort((R,Z)=>R[1]-Z[1])[0])==null?void 0:X[0];P&&(K=P);break}case"initialPlacement":K=s;break}if(o!==K)return{reset:{placement:K}}}return{}}}},jp=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:n,placement:o}=e,{mainAxis:r=!0,crossAxis:a=!1,limiter:s={fn:b=>{let{x:v,y:g}=b;return{x:v,y:g}}},...l}=Bn(t,e),c={x:i,y:n},u=await _r(e,l),d=Ie(et(o)),p=Fl(d);let h=c[p],m=c[d];if(r){const b=p==="y"?"top":"left",v=p==="y"?"bottom":"right",g=h+u[b],x=h-u[v];h=Sa(g,h,x)}if(a){const b=d==="y"?"top":"left",v=d==="y"?"bottom":"right",g=m+u[b],x=m-u[v];m=Sa(g,m,x)}const f=s.fn({...e,[p]:h,[d]:m});return{...f,data:{x:f.x-i,y:f.y-n,enabled:{[p]:r,[d]:a}}}}}},Up=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var i,n;const{placement:o,rects:r,platform:a,elements:s}=e,{apply:l=()=>{},...c}=Bn(t,e),u=await _r(e,c),d=et(o),p=jn(o),h=Ie(o)==="y",{width:m,height:f}=r.floating;let b,v;d==="top"||d==="bottom"?(b=d,v=p===(await(a.isRTL==null?void 0:a.isRTL(s.floating))?"start":"end")?"left":"right"):(v=d,b=p==="end"?"top":"bottom");const g=f-u.top-u.bottom,x=m-u.left-u.right,y=yt(f-u[b],g),w=yt(m-u[v],x),z=!e.middlewareData.shift;let C=y,E=w;if((i=e.middlewareData.shift)!=null&&i.enabled.x&&(E=x),(n=e.middlewareData.shift)!=null&&n.enabled.y&&(C=g),z&&!p){const D=le(u.left,0),Y=le(u.right,0),ie=le(u.top,0),X=le(u.bottom,0);h?E=m-2*(D!==0||Y!==0?D+Y:le(u.left,u.right)):C=f-2*(ie!==0||X!==0?ie+X:le(u.top,u.bottom))}await l({...e,availableWidth:E,availableHeight:C});const T=await a.getDimensions(s.floating);return m!==T.width||f!==T.height?{reset:{rects:!0}}:{}}}};function Un(){return typeof window<"u"}function At(t){return Dl(t)?(t.nodeName||"").toLowerCase():"#document"}function ue(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Ce(t){var e;return(e=(Dl(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Dl(t){return Un()?t instanceof Node||t instanceof ue(t).Node:!1}function pe(t){return Un()?t instanceof Element||t instanceof ue(t).Element:!1}function we(t){return Un()?t instanceof HTMLElement||t instanceof ue(t).HTMLElement:!1}function La(t){return!Un()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof ue(t).ShadowRoot}const Kp=new Set(["inline","contents"]);function yi(t){const{overflow:e,overflowX:i,overflowY:n,display:o}=he(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+i)&&!Kp.has(o)}const Wp=new Set(["table","td","th"]);function Gp(t){return Wp.has(At(t))}const Yp=[":popover-open",":modal"];function Kn(t){return Yp.some(e=>{try{return t.matches(e)}catch{return!1}})}const Jp=["transform","translate","scale","rotate","perspective"],Xp=["transform","translate","scale","rotate","perspective","filter"],Zp=["paint","layout","strict","content"];function xr(t){const e=wr(),i=pe(t)?he(t):t;return Jp.some(n=>i[n]?i[n]!=="none":!1)||(i.containerType?i.containerType!=="normal":!1)||!e&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!e&&(i.filter?i.filter!=="none":!1)||Xp.some(n=>(i.willChange||"").includes(n))||Zp.some(n=>(i.contain||"").includes(n))}function Qp(t){let e=Ve(t);for(;we(e)&&!_t(e);){if(xr(e))return e;if(Kn(e))return null;e=Ve(e)}return null}function wr(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const eh=new Set(["html","body","#document"]);function _t(t){return eh.has(At(t))}function he(t){return ue(t).getComputedStyle(t)}function Wn(t){return pe(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Ve(t){if(At(t)==="html")return t;const e=t.assignedSlot||t.parentNode||La(t)&&t.host||Ce(t);return La(e)?e.host:e}function ql(t){const e=Ve(t);return _t(e)?t.ownerDocument?t.ownerDocument.body:t.body:we(e)&&yi(e)?e:ql(e)}function di(t,e,i){var n;e===void 0&&(e=[]),i===void 0&&(i=!0);const o=ql(t),r=o===((n=t.ownerDocument)==null?void 0:n.body),a=ue(o);if(r){const s=Bo(a);return e.concat(a,a.visualViewport||[],yi(o)?o:[],s&&i?di(s):[])}return e.concat(o,di(o,[],i))}function Bo(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Bl(t){const e=he(t);let i=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const o=we(t),r=o?t.offsetWidth:i,a=o?t.offsetHeight:n,s=hn(i)!==r||hn(n)!==a;return s&&(i=r,n=a),{width:i,height:n,$:s}}function Cr(t){return pe(t)?t:t.contextElement}function pt(t){const e=Cr(t);if(!we(e))return _e(1);const i=e.getBoundingClientRect(),{width:n,height:o,$:r}=Bl(e);let a=(r?hn(i.width):i.width)/n,s=(r?hn(i.height):i.height)/o;return(!a||!Number.isFinite(a))&&(a=1),(!s||!Number.isFinite(s))&&(s=1),{x:a,y:s}}const th=_e(0);function jl(t){const e=ue(t);return!wr()||!e.visualViewport?th:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ih(t,e,i){return e===void 0&&(e=!1),!i||e&&i!==ue(t)?!1:e}function tt(t,e,i,n){e===void 0&&(e=!1),i===void 0&&(i=!1);const o=t.getBoundingClientRect(),r=Cr(t);let a=_e(1);e&&(n?pe(n)&&(a=pt(n)):a=pt(t));const s=ih(r,i,n)?jl(r):_e(0);let l=(o.left+s.x)/a.x,c=(o.top+s.y)/a.y,u=o.width/a.x,d=o.height/a.y;if(r){const p=ue(r),h=n&&pe(n)?ue(n):n;let m=p,f=Bo(m);for(;f&&n&&h!==m;){const b=pt(f),v=f.getBoundingClientRect(),g=he(f),x=v.left+(f.clientLeft+parseFloat(g.paddingLeft))*b.x,y=v.top+(f.clientTop+parseFloat(g.paddingTop))*b.y;l*=b.x,c*=b.y,u*=b.x,d*=b.y,l+=x,c+=y,m=ue(f),f=Bo(m)}}return fn({width:u,height:d,x:l,y:c})}function Gn(t,e){const i=Wn(t).scrollLeft;return e?e.left+i:tt(Ce(t)).left+i}function Ul(t,e){const i=t.getBoundingClientRect(),n=i.left+e.scrollLeft-Gn(t,i),o=i.top+e.scrollTop;return{x:n,y:o}}function nh(t){let{elements:e,rect:i,offsetParent:n,strategy:o}=t;const r=o==="fixed",a=Ce(n),s=e?Kn(e.floating):!1;if(n===a||s&&r)return i;let l={scrollLeft:0,scrollTop:0},c=_e(1);const u=_e(0),d=we(n);if((d||!d&&!r)&&((At(n)!=="body"||yi(a))&&(l=Wn(n)),we(n))){const h=tt(n);c=pt(n),u.x=h.x+n.clientLeft,u.y=h.y+n.clientTop}const p=a&&!d&&!r?Ul(a,l):_e(0);return{width:i.width*c.x,height:i.height*c.y,x:i.x*c.x-l.scrollLeft*c.x+u.x+p.x,y:i.y*c.y-l.scrollTop*c.y+u.y+p.y}}function oh(t){return Array.from(t.getClientRects())}function rh(t){const e=Ce(t),i=Wn(t),n=t.ownerDocument.body,o=le(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),r=le(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let a=-i.scrollLeft+Gn(t);const s=-i.scrollTop;return he(n).direction==="rtl"&&(a+=le(e.clientWidth,n.clientWidth)-o),{width:o,height:r,x:a,y:s}}const ka=25;function ah(t,e){const i=ue(t),n=Ce(t),o=i.visualViewport;let r=n.clientWidth,a=n.clientHeight,s=0,l=0;if(o){r=o.width,a=o.height;const u=wr();(!u||u&&e==="fixed")&&(s=o.offsetLeft,l=o.offsetTop)}const c=Gn(n);if(c<=0){const u=n.ownerDocument,d=u.body,p=getComputedStyle(d),h=u.compatMode==="CSS1Compat"&&parseFloat(p.marginLeft)+parseFloat(p.marginRight)||0,m=Math.abs(n.clientWidth-d.clientWidth-h);m<=ka&&(r-=m)}else c<=ka&&(r+=c);return{width:r,height:a,x:s,y:l}}const sh=new Set(["absolute","fixed"]);function lh(t,e){const i=tt(t,!0,e==="fixed"),n=i.top+t.clientTop,o=i.left+t.clientLeft,r=we(t)?pt(t):_e(1),a=t.clientWidth*r.x,s=t.clientHeight*r.y,l=o*r.x,c=n*r.y;return{width:a,height:s,x:l,y:c}}function Oa(t,e,i){let n;if(e==="viewport")n=ah(t,i);else if(e==="document")n=rh(Ce(t));else if(pe(e))n=lh(e,i);else{const o=jl(t);n={x:e.x-o.x,y:e.y-o.y,width:e.width,height:e.height}}return fn(n)}function Kl(t,e){const i=Ve(t);return i===e||!pe(i)||_t(i)?!1:he(i).position==="fixed"||Kl(i,e)}function ch(t,e){const i=e.get(t);if(i)return i;let n=di(t,[],!1).filter(s=>pe(s)&&At(s)!=="body"),o=null;const r=he(t).position==="fixed";let a=r?Ve(t):t;for(;pe(a)&&!_t(a);){const s=he(a),l=xr(a);!l&&s.position==="fixed"&&(o=null),(r?!l&&!o:!l&&s.position==="static"&&!!o&&sh.has(o.position)||yi(a)&&!l&&Kl(t,a))?n=n.filter(u=>u!==a):o=s,a=Ve(a)}return e.set(t,n),n}function uh(t){let{element:e,boundary:i,rootBoundary:n,strategy:o}=t;const a=[...i==="clippingAncestors"?Kn(e)?[]:ch(e,this._c):[].concat(i),n],s=a[0],l=a.reduce((c,u)=>{const d=Oa(e,u,o);return c.top=le(d.top,c.top),c.right=yt(d.right,c.right),c.bottom=yt(d.bottom,c.bottom),c.left=le(d.left,c.left),c},Oa(e,s,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function dh(t){const{width:e,height:i}=Bl(t);return{width:e,height:i}}function ph(t,e,i){const n=we(e),o=Ce(e),r=i==="fixed",a=tt(t,!0,r,e);let s={scrollLeft:0,scrollTop:0};const l=_e(0);function c(){l.x=Gn(o)}if(n||!n&&!r)if((At(e)!=="body"||yi(o))&&(s=Wn(e)),n){const h=tt(e,!0,r,e);l.x=h.x+e.clientLeft,l.y=h.y+e.clientTop}else o&&c();r&&!n&&o&&c();const u=o&&!n&&!r?Ul(o,s):_e(0),d=a.left+s.scrollLeft-l.x-u.x,p=a.top+s.scrollTop-l.y-u.y;return{x:d,y:p,width:a.width,height:a.height}}function mo(t){return he(t).position==="static"}function $a(t,e){if(!we(t)||he(t).position==="fixed")return null;if(e)return e(t);let i=t.offsetParent;return Ce(t)===i&&(i=i.ownerDocument.body),i}function Wl(t,e){const i=ue(t);if(Kn(t))return i;if(!we(t)){let o=Ve(t);for(;o&&!_t(o);){if(pe(o)&&!mo(o))return o;o=Ve(o)}return i}let n=$a(t,e);for(;n&&Gp(n)&&mo(n);)n=$a(n,e);return n&&_t(n)&&mo(n)&&!xr(n)?i:n||Qp(t)||i}const hh=async function(t){const e=this.getOffsetParent||Wl,i=this.getDimensions,n=await i(t.floating);return{reference:ph(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function mh(t){return he(t).direction==="rtl"}const fh={convertOffsetParentRelativeRectToViewportRelativeRect:nh,getDocumentElement:Ce,getClippingRect:uh,getOffsetParent:Wl,getElementRects:hh,getClientRects:oh,getDimensions:dh,getScale:pt,isElement:pe,isRTL:mh};function Gl(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function gh(t,e){let i=null,n;const o=Ce(t);function r(){var s;clearTimeout(n),(s=i)==null||s.disconnect(),i=null}function a(s,l){s===void 0&&(s=!1),l===void 0&&(l=1),r();const c=t.getBoundingClientRect(),{left:u,top:d,width:p,height:h}=c;if(s||e(),!p||!h)return;const m=ki(d),f=ki(o.clientWidth-(u+p)),b=ki(o.clientHeight-(d+h)),v=ki(u),x={rootMargin:-m+"px "+-f+"px "+-b+"px "+-v+"px",threshold:le(0,yt(1,l))||1};let y=!0;function w(z){const C=z[0].intersectionRatio;if(C!==l){if(!y)return a();C?a(!1,C):n=setTimeout(()=>{a(!1,1e-7)},1e3)}C===1&&!Gl(c,t.getBoundingClientRect())&&a(),y=!1}try{i=new IntersectionObserver(w,{...x,root:o.ownerDocument})}catch{i=new IntersectionObserver(w,x)}i.observe(t)}return a(!0),r}function bh(t,e,i,n){n===void 0&&(n={});const{ancestorScroll:o=!0,ancestorResize:r=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,c=Cr(t),u=o||r?[...c?di(c):[],...di(e)]:[];u.forEach(v=>{o&&v.addEventListener("scroll",i,{passive:!0}),r&&v.addEventListener("resize",i)});const d=c&&s?gh(c,i):null;let p=-1,h=null;a&&(h=new ResizeObserver(v=>{let[g]=v;g&&g.target===c&&h&&(h.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var x;(x=h)==null||x.observe(e)})),i()}),c&&!l&&h.observe(c),h.observe(e));let m,f=l?tt(t):null;l&&b();function b(){const v=tt(t);f&&!Gl(f,v)&&i(),f=v,m=requestAnimationFrame(b)}return i(),()=>{var v;u.forEach(g=>{o&&g.removeEventListener("scroll",i),r&&g.removeEventListener("resize",i)}),d?.(),(v=h)==null||v.disconnect(),h=null,l&&cancelAnimationFrame(m)}}const vh=jp,yh=Bp,Yl=Up,_h=(t,e,i)=>{const n=new Map,o={platform:fh,...i},r={...o.platform,_c:n};return qp(t,e,{...o,platform:r})},zr=[yh({fallbackAxisSideDirection:"start",crossAxis:!1}),vh()],Jl=({placement:t="bottom-start",strategy:e,middleware:i=zr}={})=>{const[n,o]=J(),[r,a]=J(),[s,l]=J();return $(()=>{if(!n||!(r instanceof HTMLElement)){l(void 0);return}return bh(n,r,()=>_h(n,r,{placement:t,strategy:e,middleware:i}).then(l))},[n,r,t,e,i]),{setReference:o,setFloating:a,styles:M(()=>s?{left:`${s.x}px`,top:`${s.y}px`}:{},[s?.x,s?.y])}},xh=t=>t.preventDefault(),wh=xe`
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
		--color: var(
			--cosmoz-dropdown-button-color,
			var(--cosmoz-button-color, #fff)
		);
		color: var(--color);
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
		color: var(--cosmoz-dropdown-button-hover-color, var(--color));
	}
	::slotted(svg) {
		pointer-events: none;
	}
	@-moz-document url-prefix() {
		#content {
			left: auto;
		}
	}
`,Ch=t=>{const{placement:e,strategy:i,middleware:n,render:o}=t,{active:r,onToggle:a}=Cp(t),{styles:s,setReference:l,setFloating:c}=Jl({placement:e,strategy:i,middleware:n});return _` <div class="anchor" part="anchor" ${Qe(l)}>
			<button
				@mousedown=${xh}
				@click=${a}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		${q(r,()=>_`<cosmoz-dropdown-content
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					style="${Hl(s)}"
					@connected=${u=>u.target.showPopover?.()}
					${Qe(c)}
					><slot></slot>${yr([o],()=>o?.()||de)}</cosmoz-dropdown-content
				> `)}`};customElements.define("cosmoz-dropdown",V(Ch,{styleSheets:[wh]}));function zh(t){return t.boundingClientRect.height===0}function Sh(t){return t.getBoundingClientRect().height===0}const Ah=t=>{if(t.element.tagName!=="SLOT")throw new Error("Overflow directive must be used on a slot element")};function Eh(t,e){t.forEach(i=>{Sh(i)||(e.add(i),t.delete(i))})}const Mh=(t,e)=>{let i=new Set,n=new Set,o=new Set;const r=new IntersectionObserver(s=>{s.forEach(l=>{const c=l.target;l.boundingClientRect.width===l.intersectionRect.width&&l.intersectionRect.height!==0?(i.add(c),n.delete(c),o.delete(c)):zh(l)?(i.delete(c),n.delete(c),o.add(c)):(i.delete(c),n.add(c),o.delete(c))}),Eh(o,n),e({visible:i,overflowing:n,hidden:o})},{root:t.parentElement,threshold:[0,.5,1]}),a=()=>{const s=Array.from(t.assignedElements({flatten:!0})),l=new Set,c=new Set,u=new Set;for(const d of s)i.has(d)?l.add(d):n.has(d)?c.add(d):o.has(d)?u.add(d):r.observe(d);i=l,n=c,o=u,e({visible:i,overflowing:n,hidden:o})};return a(),t.addEventListener("slotchange",a),()=>{t.removeEventListener("slotchange",a),r.disconnect()}};class Lh extends Dn{observer;slot;cleanup;render(){return ne}update(e,[i]){return Ah(e),this.slot!==e.element&&(this.cleanup&&(this.cleanup(),this.cleanup=void 0),this.slot=e.element,this.cleanup=Mh(this.slot,i)),ne}}const kh=Oe(Lh),Oh=xe`
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
	}
	#bottomBarToolbar::slotted(
			:not(slot):not([unstyled])[data-visibility='hidden']
		) {
		visibility: hidden;
		width: 100%;
		order: 9999;
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
`,$h=Symbol("openMenu"),Th=t=>{const e=t.shadowRoot?.querySelector("#dropdown");if(!e||e.hasAttribute("hidden"))return;e.shadowRoot?.querySelector("cosmoz-dropdown")?.shadowRoot?.querySelector("#dropdownButton")?.click()},Ph=t=>{const[e,i]=J({visible:new Set,overflowing:new Set});$(()=>{t.dispatchEvent(new CustomEvent("reflow",{detail:e}))},[e]);const n=M(()=>[...e.visible,...e.overflowing],[e]),o=M(()=>n.map(l=>({element:l,priority:Number(l.dataset.priority??0),text:l.textContent?.trim()||""})).toSorted((l,c)=>c.priority-l.priority),[n]),{maxToolbarItems:r=1}=t,a=Math.min(r,e.visible.size);$(()=>{o.forEach(({element:l,priority:c},u)=>{const d=u<a;l.dataset.visibility=d?"visible":"hidden",l.style.order=String(-c)})},[o,a]);const s=M(()=>o.slice(a).sort((l,c)=>c.element.compareDocumentPosition(l.element)-l.element.compareDocumentPosition(c.element)),[o,a]);return $(()=>{t.toggleAttribute("has-menu-items",s.length>0)},[s.length]),{setButtonStates:i,menuButtons:s}},Ih=t=>{const{active:e=!1}=t;wp({activity:$h,callback:()=>Th(t),check:()=>e&&!t.hasAttribute("hide-actions"),element:()=>t.shadowRoot?.querySelector("#dropdown")},[e]);const{setButtonStates:i,menuButtons:n}=Ph(t),o=M(()=>$l("height"),[]);return ui(()=>{o(t,e)},[e]),_` <div id="bar" part="bar">
		<div id="info" part="info"><slot name="info"></slot></div>
		<div id="buttonContainer" part="buttons">
			<slot id="bottomBarToolbar" ${kh(i)}></slot>
		</div>

		<cosmoz-dropdown-menu id="dropdown" part="dropdown">
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
					fill="currentColor"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M1.50996e-07 8C1.02714e-07 9.10457 0.89543 10 2 10C3.10457 10 4 9.10457 4 8C4 6.89543 3.10457 6 2 6C0.895431 6 1.99278e-07 6.89543 1.50996e-07 8Z"
					fill="currentColor"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M1.50996e-07 14C1.02714e-07 15.1046 0.89543 16 2 16C3.10457 16 4 15.1046 4 14C4 12.8954 3.10457 12 2 12C0.895431 12 1.99278e-07 12.8954 1.50996e-07 14Z"
					fill="currentColor"
				/>
			</svg>
			${al(n,r=>_`
					<button @click=${()=>r.element.click()}>
						${r.text}
					</button>
				`)}
		</cosmoz-dropdown-menu>
		<slot name="extra" id="extraSlot"></slot>
	</div>`};customElements.define("cosmoz-bottom-bar",V(Ih,{observedAttributes:["active","max-toolbar-items"],styleSheets:[Oh]}));const gn=`
	<slot name="extra" slot="extra"></slot>
`;_(Object.assign([gn],{raw:[gn]}));U(Object.assign([gn],{raw:[gn]}));/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Yn=!(window.ShadyDOM&&window.ShadyDOM.inUse);let bn;function Ta(t){t&&t.shimcssproperties?bn=!1:bn=Yn||!!(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)"))}let pi;window.ShadyCSS&&window.ShadyCSS.cssBuild!==void 0&&(pi=window.ShadyCSS.cssBuild);const Xl=!!(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&window.ShadyCSS.nativeCss!==void 0?bn=window.ShadyCSS.nativeCss:window.ShadyCSS?(Ta(window.ShadyCSS),window.ShadyCSS=void 0):Ta(window.WebComponents&&window.WebComponents.flags);const Sr=bn;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class Pa{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function Zl(t){return t=Hh(t),Ql(Nh(t),t)}function Hh(t){return t.replace(Ee.comments,"").replace(Ee.port,"")}function Nh(t){let e=new Pa;e.start=0,e.end=t.length;let i=e;for(let n=0,o=t.length;n<o;n++)if(t[n]===tc){i.rules||(i.rules=[]);let r=i,a=r.rules[r.rules.length-1]||null;i=new Pa,i.start=n+1,i.parent=r,i.previous=a,r.rules.push(i)}else t[n]===ic&&(i.end=n+1,i=i.parent||e);return e}function Ql(t,e){let i=e.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=i.trim(),t.parent){let o=t.previous?t.previous.end:t.parent.start;i=e.substring(o,t.start-1),i=Fh(i),i=i.replace(Ee.multipleSpaces," "),i=i.substring(i.lastIndexOf(";")+1);let r=t.parsedSelector=t.selector=i.trim();t.atRule=r.indexOf(jh)===0,t.atRule?r.indexOf(Bh)===0?t.type=ct.MEDIA_RULE:r.match(Ee.keyframesRule)&&(t.type=ct.KEYFRAMES_RULE,t.keyframesName=t.selector.split(Ee.multipleSpaces).pop()):r.indexOf(nc)===0?t.type=ct.MIXIN_RULE:t.type=ct.STYLE_RULE}let n=t.rules;if(n)for(let o=0,r=n.length,a;o<r&&(a=n[o]);o++)Ql(a,e);return t}function Fh(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let e=arguments[1],i=6-e.length;for(;i--;)e="0"+e;return"\\"+e})}function ec(t,e,i=""){let n="";if(t.cssText||t.rules){let o=t.rules;if(o&&!Vh(o))for(let r=0,a=o.length,s;r<a&&(s=o[r]);r++)n=ec(s,e,n);else n=e?t.cssText:Rh(t.cssText),n=n.trim(),n&&(n="  "+n+`
`)}return n&&(t.selector&&(i+=t.selector+" "+tc+`
`),i+=n,t.selector&&(i+=ic+`

`)),i}function Vh(t){let e=t[0];return!!e&&!!e.selector&&e.selector.indexOf(nc)===0}function Rh(t){return t=Dh(t),qh(t)}function Dh(t){return t.replace(Ee.customProp,"").replace(Ee.mixinProp,"")}function qh(t){return t.replace(Ee.mixinApply,"").replace(Ee.varApply,"")}const ct={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},tc="{",ic="}",Ee={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},nc="--",Bh="@media",jh="@";/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const jo=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,vn=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ia=new Set,Uh="shady-unscoped";function Kh(t){const e=t.textContent;if(!Ia.has(e)){Ia.add(e);const i=document.createElement("style");i.setAttribute("shady-unscoped",""),i.textContent=e,document.head.appendChild(i)}}function Wh(t){return t.hasAttribute(Uh)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Uo(t,e){return t?(typeof t=="string"&&(t=Zl(t)),ec(t,Sr)):""}function Ha(t){return!t.__cssRules&&t.textContent&&(t.__cssRules=Zl(t.textContent)),t.__cssRules||null}function tn(t,e,i,n){if(!t)return;let o=!1,r=t.type;r===ct.STYLE_RULE?e(t):r===ct.MIXIN_RULE&&(o=!0);let a=t.rules;if(a&&!o)for(let s=0,l=a.length,c;s<l&&(c=a[s]);s++)tn(c,e)}function Gh(t,e){let i=0;for(let n=e,o=t.length;n<o;n++)if(t[n]==="(")i++;else if(t[n]===")"&&--i===0)return n;return-1}function oc(t,e){let i=t.indexOf("var(");if(i===-1)return e(t,"","","");let n=Gh(t,i+3),o=t.substring(i+4,n),r=t.substring(0,i),a=oc(t.substring(n+1),e),s=o.indexOf(",");if(s===-1)return e(r,o.trim(),"",a);let l=o.substring(0,s).trim(),c=o.substring(s+1).trim();return e(r,l,c,a)}window.ShadyDOM&&window.ShadyDOM.wrap;function Yh(t){let e=t.localName,i="",n="";return e?e.indexOf("-")>-1?i=e:(n=e,i=t.getAttribute&&t.getAttribute("is")||""):(i=t.is,n=t.extends),{is:i,typeExtension:n}}function Jh(t){const e=[],i=t.querySelectorAll("style");for(let n=0;n<i.length;n++){const o=i[n];Wh(o)?Yn||(Kh(o),o.parentNode.removeChild(o)):(e.push(o.textContent),o.parentNode.removeChild(o))}return e.join("").trim()}const rc="css-build";function Xh(t){if(pi!==void 0)return pi;if(t.__cssBuild===void 0){const e=t.getAttribute(rc);if(e)t.__cssBuild=e;else{const i=Zh(t);i!==""&&Qh(t),t.__cssBuild=i}}return t.__cssBuild||""}function Na(t){return Xh(t)!==""}function Zh(t){const e=t.localName==="template"?t.content.firstChild:t.firstChild;if(e instanceof Comment){const i=e.textContent.trim().split(":");if(i[0]===rc)return i[1]}return""}function Qh(t){const e=t.localName==="template"?t.content.firstChild:t.firstChild;e.parentNode.removeChild(e)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ko(t,e){for(let i in e)i===null?t.style.removeProperty(i):t.style.setProperty(i,e[i])}function ac(t,e){const i=window.getComputedStyle(t).getPropertyValue(e);return i?i.trim():""}function e1(t){const e=vn.test(t)||jo.test(t);return vn.lastIndex=0,jo.lastIndex=0,e}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const t1=/;\s*/m,i1=/^\s*(initial)|(inherit)\s*$/,Fa=/\s*!important/,Wo="_-_";class n1{constructor(){this._map={}}set(e,i){e=e.trim(),this._map[e]={properties:i,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let yn=null;class oe{constructor(){this._currentElement=null,this._measureElement=null,this._map=new n1}detectMixin(e){return e1(e)}gatherStyles(e){const i=Jh(e.content);if(i){const n=document.createElement("style");return n.textContent=i,e.content.insertBefore(n,e.content.firstChild),n}return null}transformTemplate(e,i){e._gatheredStyle===void 0&&(e._gatheredStyle=this.gatherStyles(e));const n=e._gatheredStyle;return n?this.transformStyle(n,i):null}transformStyle(e,i=""){let n=Ha(e);return this.transformRules(n,i),e.textContent=Uo(n),n}transformCustomStyle(e){let i=Ha(e);return tn(i,n=>{n.selector===":root"&&(n.selector="html"),this.transformRule(n)}),e.textContent=Uo(i),i}transformRules(e,i){this._currentElement=i,tn(e,n=>{this.transformRule(n)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),e.selector===":root"&&(e.selector=":host > *")}transformCssText(e,i){return e=e.replace(jo,(n,o,r,a)=>this._produceCssProperties(n,o,r,a,i)),this._consumeCssProperties(e,i)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let i=e;for(;i.parent;)i=i.parent;const n={};let o=!1;return tn(i,r=>{o=o||r===e,!o&&r.selector===e.selector&&Object.assign(n,this._cssTextToMap(r.parsedCssText))}),n}_consumeCssProperties(e,i){let n=null;for(;n=vn.exec(e);){let o=n[0],r=n[1],a=n.index,s=a+o.indexOf("@apply"),l=a+o.length,c=e.slice(0,s),u=e.slice(l),d=i?this._fallbacksFromPreviousRules(i):{};Object.assign(d,this._cssTextToMap(c));let p=this._atApplyToCssProperties(r,d);e=`${c}${p}${u}`,vn.lastIndex=a+p.length}return e}_atApplyToCssProperties(e,i){e=e.replace(t1,"");let n=[],o=this._map.get(e);if(o||(this._map.set(e,{}),o=this._map.get(e)),o){this._currentElement&&(o.dependants[this._currentElement]=!0);let r,a,s;const l=o.properties;for(r in l)s=i&&i[r],a=[r,": var(",e,Wo,r],s&&a.push(",",s.replace(Fa,"")),a.push(")"),Fa.test(l[r])&&a.push(" !important"),n.push(a.join(""))}return n.join("; ")}_replaceInitialOrInherit(e,i){let n=i1.exec(i);return n&&(n[1]?i=this._getInitialValueForProperty(e):i="apply-shim-inherit"),i}_cssTextToMap(e,i=!1){let n=e.split(";"),o,r,a={};for(let s=0,l,c;s<n.length;s++)l=n[s],l&&(c=l.split(":"),c.length>1&&(o=c[0].trim(),r=c.slice(1).join(":"),i&&(r=this._replaceInitialOrInherit(o,r)),a[o]=r));return a}_invalidateMixinEntry(e){if(yn)for(let i in e.dependants)i!==this._currentElement&&yn(i)}_produceCssProperties(e,i,n,o,r){if(n&&oc(n,(b,v)=>{v&&this._map.get(v)&&(o=`@apply ${v};`)}),!o)return e;let a=this._consumeCssProperties(""+o,r),s=e.slice(0,e.indexOf("--")),l=this._cssTextToMap(a,!0),c=l,u=this._map.get(i),d=u&&u.properties;d?c=Object.assign(Object.create(d),l):this._map.set(i,c);let p=[],h,m,f=!1;for(h in c)m=l[h],m===void 0&&(m="initial"),d&&!(h in d)&&(f=!0),p.push(`${i}${Wo}${h}: ${m}`);return f&&this._invalidateMixinEntry(u),u&&(u.properties=c),n&&(s=`${e};${s}`),`${s}${p.join("; ")};`}}oe.prototype.detectMixin=oe.prototype.detectMixin;oe.prototype.transformStyle=oe.prototype.transformStyle;oe.prototype.transformCustomStyle=oe.prototype.transformCustomStyle;oe.prototype.transformRules=oe.prototype.transformRules;oe.prototype.transformRule=oe.prototype.transformRule;oe.prototype.transformTemplate=oe.prototype.transformTemplate;oe.prototype._separator=Wo;Object.defineProperty(oe.prototype,"invalidCallback",{get(){return yn},set(t){yn=t}});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Go={};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const _n="_applyShimCurrentVersion",xt="_applyShimNextVersion",xn="_applyShimValidatingVersion",o1=Promise.resolve();function r1(t){let e=Go[t];e&&a1(e)}function a1(t){t[_n]=t[_n]||0,t[xn]=t[xn]||0,t[xt]=(t[xt]||0)+1}function sc(t){return t[_n]===t[xt]}function s1(t){return!sc(t)&&t[xn]===t[xt]}function l1(t){t[xn]=t[xt],t._validating||(t._validating=!0,o1.then(function(){t[_n]=t[xt],t._validating=!1}))}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let fo=null,Va=window.HTMLImports&&window.HTMLImports.whenReady||null,go;function Ra(t){requestAnimationFrame(function(){Va?Va(t):(fo||(fo=new Promise(e=>{go=e}),document.readyState==="complete"?go():document.addEventListener("readystatechange",()=>{document.readyState==="complete"&&go()})),fo.then(function(){t&&t()}))})}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Da="__seenByShadyCSS",Oi="__shadyCSSCachedStyle";let wn=null,Zt=null,Re=class{constructor(){this.customStyles=[],this.enqueued=!1,Ra(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){this.enqueued||!Zt||(this.enqueued=!0,Ra(Zt))}addCustomStyle(e){e[Da]||(e[Da]=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[Oi])return e[Oi];let i;return e.getStyle?i=e.getStyle():i=e,i}processStyles(){const e=this.customStyles;for(let i=0;i<e.length;i++){const n=e[i];if(n[Oi])continue;const o=this.getStyleForCustomStyle(n);if(o){const r=o.__appliedElement||o;wn&&wn(r),n[Oi]=r}}return e}};Re.prototype.addCustomStyle=Re.prototype.addCustomStyle;Re.prototype.getStyleForCustomStyle=Re.prototype.getStyleForCustomStyle;Re.prototype.processStyles=Re.prototype.processStyles;Object.defineProperties(Re.prototype,{transformCallback:{get(){return wn},set(t){wn=t}},validateCallback:{get(){return Zt},set(t){let e=!1;Zt||(e=!0),Zt=t,e&&this.enqueueDocumentValidation()}}});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Rt=new oe;class c1{constructor(){this.customStyleInterface=null,Rt.invalidCallback=r1}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{Rt.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(e,i){if(this.ensure(),Na(e))return;Go[i]=e;let n=Rt.transformTemplate(e,i);e._styleAst=n}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let i=0;i<e.length;i++){let n=e[i],o=this.customStyleInterface.getStyleForCustomStyle(n);o&&Rt.transformCustomStyle(o)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,i){if(this.ensure(),i&&Ko(e,i),e.shadowRoot){this.styleElement(e);let n=e.shadowRoot.children||e.shadowRoot.childNodes;for(let o=0;o<n.length;o++)this.styleSubtree(n[o])}else{let n=e.children||e.childNodes;for(let o=0;o<n.length;o++)this.styleSubtree(n[o])}}styleElement(e){this.ensure();let{is:i}=Yh(e),n=Go[i];if(!(n&&Na(n))&&n&&!sc(n)){s1(n)||(this.prepareTemplate(n,i),l1(n));let o=e.shadowRoot;if(o){let r=o.querySelector("style");r&&(r.__cssRules=n._styleAst,r.textContent=Uo(n._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const t=new c1;let e=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(i,n,o){t.flushCustomStyles(),t.prepareTemplate(i,n)},prepareTemplateStyles(i,n,o){window.ShadyCSS.prepareTemplate(i,n,o)},prepareTemplateDom(i,n){},styleSubtree(i,n){t.flushCustomStyles(),t.styleSubtree(i,n)},styleElement(i){t.flushCustomStyles(),t.styleElement(i)},styleDocument(i){t.flushCustomStyles(),t.styleDocument(i)},getComputedStyleValue(i,n){return ac(i,n)},flushCustomStyles(){t.flushCustomStyles()},nativeCss:Sr,nativeShadow:Yn,cssBuild:pi,disableRuntime:Xl},e&&(window.ShadyCSS.CustomStyleInterface=e)}window.ShadyCSS.ApplyShim=Rt;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class De{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,i){this._asyncModule=e,this._callback=i,this._timer=this._asyncModule.run(()=>{this._timer=null,hi.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),hi.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(e,i,n){return e instanceof De?e._cancelAsync():e=new De,e.setConfig(i,n),e}}let hi=new Set;const Ar=function(t){hi.add(t)},u1=function(){const t=!!hi.size;return hi.forEach(e=>{try{e.flush()}catch(i){setTimeout(()=>{throw i})}}),t};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Er=typeof document.head.style.touchAction=="string",Cn="__polymerGestures",nn="__polymerGesturesHandled",Yo="__polymerGesturesTouchAction",qa=25,Ba=5,d1=2,p1=2500,lc=["mousedown","mousemove","mouseup","click"],h1=[0,1,4,2],m1=(function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}})();function Mr(t){return lc.indexOf(t)>-1}let Lr=!1;(function(){try{let t=Object.defineProperty({},"passive",{get(){Lr=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch{}})();function cc(t){if(!(Mr(t)||t==="touchend")&&Er&&Lr&&Iu)return{passive:!0}}let uc=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const Jo=[],f1={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},g1={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function b1(t){return f1[t.localName]||!1}function v1(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];try{let i=t.getRootNode();if(t.id){let n=i.querySelectorAll(`label[for = '${t.id}']`);for(let o=0;o<n.length;o++)e.push(n[o])}}catch{}}return e}let ja=function(t){let e=t.sourceCapabilities;if(!(e&&!e.firesTouchEvents)&&(t[nn]={skip:!0},t.type==="click")){let i=!1,n=Jn(t);for(let o=0;o<n.length;o++){if(n[o].nodeType===Node.ELEMENT_NODE){if(n[o].localName==="label")Jo.push(n[o]);else if(b1(n[o])){let r=v1(n[o]);for(let a=0;a<r.length;a++)i=i||Jo.indexOf(r[a])>-1}}if(n[o]===ee.mouse.target)return}if(i)return;t.preventDefault(),t.stopPropagation()}};function Ua(t){let e=uc?["click"]:lc;for(let i=0,n;i<e.length;i++)n=e[i],t?(Jo.length=0,document.addEventListener(n,ja,!0)):document.removeEventListener(n,ja,!0)}function y1(t){ee.mouse.mouseIgnoreJob||Ua(!0);let e=function(){Ua(),ee.mouse.target=null,ee.mouse.mouseIgnoreJob=null};ee.mouse.target=Jn(t)[0],ee.mouse.mouseIgnoreJob=De.debounce(ee.mouse.mouseIgnoreJob,dt.after(p1),e)}function Je(t){let e=t.type;if(!Mr(e))return!1;if(e==="mousemove"){let i=t.buttons===void 0?1:t.buttons;return t instanceof window.MouseEvent&&!m1&&(i=h1[t.which]||0),!!(i&1)}else return(t.button===void 0?0:t.button)===0}function _1(t){if(t.type==="click"){if(t.detail===0)return!0;let e=Me(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let i=e.getBoundingClientRect(),n=t.pageX,o=t.pageY;return!(n>=i.left&&n<=i.right&&o>=i.top&&o<=i.bottom)}return!1}let ee={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function x1(t){let e="auto",i=Jn(t);for(let n=0,o;n<i.length;n++)if(o=i[n],o[Yo]){e=o[Yo];break}return e}function dc(t,e,i){t.movefn=e,t.upfn=i,document.addEventListener("mousemove",e),document.addEventListener("mouseup",i)}function ht(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}document.addEventListener("touchend",y1,Lr?{passive:!0}:!1);const Jn=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],_i={},Ge=[];function w1(t,e){let i=document.elementFromPoint(t,e),n=i;for(;n&&n.shadowRoot&&!window.ShadyDOM;){let o=n;if(n=n.shadowRoot.elementFromPoint(t,e),o===n)break;n&&(i=n)}return i}function Me(t){const e=Jn(t);return e.length>0?e[0]:t.target}function pc(t){let e,i=t.type,o=t.currentTarget[Cn];if(!o)return;let r=o[i];if(r){if(!t[nn]&&(t[nn]={},i.slice(0,5)==="touch")){t=t;let a=t.changedTouches[0];if(i==="touchstart"&&t.touches.length===1&&(ee.touch.id=a.identifier),ee.touch.id!==a.identifier)return;Er||(i==="touchstart"||i==="touchmove")&&C1(t)}if(e=t[nn],!e.skip){for(let a=0,s;a<Ge.length;a++)s=Ge[a],r[s.name]&&!e[s.name]&&s.flow&&s.flow.start.indexOf(t.type)>-1&&s.reset&&s.reset();for(let a=0,s;a<Ge.length;a++)s=Ge[a],r[s.name]&&!e[s.name]&&(e[s.name]=!0,s[i](t))}}}function C1(t){let e=t.changedTouches[0],i=t.type;if(i==="touchstart")ee.touch.x=e.clientX,ee.touch.y=e.clientY,ee.touch.scrollDecided=!1;else if(i==="touchmove"){if(ee.touch.scrollDecided)return;ee.touch.scrollDecided=!0;let n=x1(t),o=!1,r=Math.abs(ee.touch.x-e.clientX),a=Math.abs(ee.touch.y-e.clientY);t.cancelable&&(n==="none"?o=!0:n==="pan-x"?o=a>r:n==="pan-y"&&(o=r>a)),o?t.preventDefault():zn("track")}}function hc(t,e,i){return _i[e]?(S1(t,e,i),!0):!1}function z1(t,e,i){return _i[e]?(A1(t,e,i),!0):!1}function S1(t,e,i){let n=_i[e],o=n.deps,r=n.name,a=t[Cn];a||(t[Cn]=a={});for(let s=0,l,c;s<o.length;s++)l=o[s],!(uc&&Mr(l)&&l!=="click")&&(c=a[l],c||(a[l]=c={_count:0}),c._count===0&&t.addEventListener(l,pc,cc(l)),c[r]=(c[r]||0)+1,c._count=(c._count||0)+1);t.addEventListener(e,i),n.touchAction&&mc(t,n.touchAction)}function A1(t,e,i){let n=_i[e],o=n.deps,r=n.name,a=t[Cn];if(a)for(let s=0,l,c;s<o.length;s++)l=o[s],c=a[l],c&&c[r]&&(c[r]=(c[r]||1)-1,c._count=(c._count||1)-1,c._count===0&&t.removeEventListener(l,pc,cc(l)));t.removeEventListener(e,i)}function kr(t){Ge.push(t);for(let e=0;e<t.emits.length;e++)_i[t.emits[e]]=t}function E1(t){for(let e=0,i;e<Ge.length;e++){i=Ge[e];for(let n=0,o;n<i.emits.length;n++)if(o=i.emits[n],o===t)return i}return null}function mc(t,e){Er&&t instanceof HTMLElement&&Ne.run(()=>{t.style.touchAction=e}),t[Yo]=e}function Or(t,e,i){let n=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=i,A(t).dispatchEvent(n),n.defaultPrevented){let o=i.preventer||i.sourceEvent;o&&o.preventDefault&&o.preventDefault()}}function zn(t){let e=E1(t);e.info&&(e.info.prevent=!0)}kr({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){ht(this.info)},mousedown:function(t){if(!Je(t))return;let e=Me(t),i=this,n=function(a){Je(a)||($t("up",e,a),ht(i.info))},o=function(a){Je(a)&&$t("up",e,a),ht(i.info)};dc(this.info,n,o),$t("down",e,t)},touchstart:function(t){$t("down",Me(t),t.changedTouches[0],t)},touchend:function(t){$t("up",Me(t),t.changedTouches[0],t)}});function $t(t,e,i,n){e&&Or(e,t,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:n,prevent:function(o){return zn(o)}})}kr({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>d1&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,ht(this.info)},mousedown:function(t){if(!Je(t))return;let e=Me(t),i=this,n=function(a){let s=a.clientX,l=a.clientY;Ka(i.info,s,l)&&(i.info.state=i.info.started?a.type==="mouseup"?"end":"track":"start",i.info.state==="start"&&zn("tap"),i.info.addMove({x:s,y:l}),Je(a)||(i.info.state="end",ht(i.info)),e&&bo(i.info,e,a),i.info.started=!0)},o=function(a){i.info.started&&n(a),ht(i.info)};dc(this.info,n,o),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=Me(t),i=t.changedTouches[0],n=i.clientX,o=i.clientY;Ka(this.info,n,o)&&(this.info.state==="start"&&zn("tap"),this.info.addMove({x:n,y:o}),bo(this.info,e,i),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=Me(t),i=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),bo(this.info,e,i))}});function Ka(t,e,i){if(t.prevent)return!1;if(t.started)return!0;let n=Math.abs(t.x-e),o=Math.abs(t.y-i);return n>=Ba||o>=Ba}function bo(t,e,i){if(!e)return;let n=t.moves[t.moves.length-2],o=t.moves[t.moves.length-1],r=o.x-t.x,a=o.y-t.y,s,l=0;n&&(s=o.x-n.x,l=o.y-n.y),Or(e,"track",{state:t.state,x:i.clientX,y:i.clientY,dx:r,dy:a,ddx:s,ddy:l,sourceEvent:i,hover:function(){return w1(i.clientX,i.clientY)}})}kr({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){Je(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){Je(t)&&Wa(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){Wa(this.info,t.changedTouches[0],t)}});function Wa(t,e,i){let n=Math.abs(e.clientX-t.x),o=Math.abs(e.clientY-t.y),r=Me(i||e);!r||g1[r.localName]&&r.hasAttribute("disabled")||(isNaN(n)||isNaN(o)||n<=qa&&o<=qa||_1(e))&&(t.prevent||Or(r,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:i}))}const M1=Me;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const fc=ae(t=>{class e extends t{_addEventListenerToNode(n,o,r){hc(n,o,r)||super._addEventListenerToNode(n,o,r)}_removeEventListenerFromNode(n,o,r){z1(n,o,r)||super._removeEventListenerFromNode(n,o,r)}}return e});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const L1=/:host\(:dir\((ltr|rtl)\)\)/g,k1=':host([dir="$1"])',O1=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,$1=':host([dir="$2"]) $1',T1=/:dir\((?:ltr|rtl)\)/,Ga=!!(window.ShadyDOM&&window.ShadyDOM.inUse),Qt=[];let ei=null,$r="";function gc(){$r=document.documentElement.getAttribute("dir")}function bc(t){t.__autoDirOptOut||t.setAttribute("dir",$r)}function vc(){gc(),$r=document.documentElement.getAttribute("dir");for(let t=0;t<Qt.length;t++)bc(Qt[t])}function P1(){ei&&ei.takeRecords().length&&vc()}const I1=ae(t=>{Ga||ei||(gc(),ei=new MutationObserver(vc),ei.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const e=gl(t);class i extends e{static _processStyleText(o,r){return o=e._processStyleText.call(this,o,r),!Ga&&T1.test(o)&&(o=this._replaceDirInCssText(o),this.__activateDir=!0),o}static _replaceDirInCssText(o){let r=o;return r=r.replace(L1,k1),r=r.replace(O1,$1),r}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){e.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(P1(),Qt.push(this),bc(this))}disconnectedCallback(){if(e.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const o=Qt.indexOf(this);o>-1&&Qt.splice(o,1)}}}return i.__activateDir=!1,i});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ya(){document.body.removeAttribute("unresolved")}document.readyState==="interactive"||document.readyState==="complete"?Ya():window.addEventListener("DOMContentLoaded",Ya);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Tt(t,e,i){return{index:t,removed:e,addedCount:i}}const yc=0,_c=1,Xo=2,Zo=3;function H1(t,e,i,n,o,r){let a=r-o+1,s=i-e+1,l=new Array(a);for(let c=0;c<a;c++)l[c]=new Array(s),l[c][0]=c;for(let c=0;c<s;c++)l[0][c]=c;for(let c=1;c<a;c++)for(let u=1;u<s;u++)if(Tr(t[e+u-1],n[o+c-1]))l[c][u]=l[c-1][u-1];else{let d=l[c-1][u]+1,p=l[c][u-1]+1;l[c][u]=d<p?d:p}return l}function N1(t){let e=t.length-1,i=t[0].length-1,n=t[e][i],o=[];for(;e>0||i>0;){if(e==0){o.push(Xo),i--;continue}if(i==0){o.push(Zo),e--;continue}let r=t[e-1][i-1],a=t[e-1][i],s=t[e][i-1],l;a<s?l=a<r?a:r:l=s<r?s:r,l==r?(r==n?o.push(yc):(o.push(_c),n=r),e--,i--):l==a?(o.push(Zo),e--,n=a):(o.push(Xo),i--,n=s)}return o.reverse(),o}function F1(t,e,i,n,o,r){let a=0,s=0,l,c=Math.min(i-e,r-o);if(e==0&&o==0&&(a=V1(t,n,c)),i==t.length&&r==n.length&&(s=R1(t,n,c-a)),e+=a,o+=a,i-=s,r-=s,i-e==0&&r-o==0)return[];if(e==i){for(l=Tt(e,[],0);o<r;)l.removed.push(n[o++]);return[l]}else if(o==r)return[Tt(e,[],i-e)];let u=N1(H1(t,e,i,n,o,r));l=void 0;let d=[],p=e,h=o;for(let m=0;m<u.length;m++)switch(u[m]){case yc:l&&(d.push(l),l=void 0),p++,h++;break;case _c:l||(l=Tt(p,[],0)),l.addedCount++,p++,l.removed.push(n[h]),h++;break;case Xo:l||(l=Tt(p,[],0)),l.addedCount++,p++;break;case Zo:l||(l=Tt(p,[],0)),l.removed.push(n[h]),h++;break}return l&&d.push(l),d}function V1(t,e,i){for(let n=0;n<i;n++)if(!Tr(t[n],e[n]))return n;return i}function R1(t,e,i){let n=t.length,o=e.length,r=0;for(;r<i&&Tr(t[--n],e[--o]);)r++;return r}function xc(t,e){return F1(t,0,t.length,e,0,e.length)}function Tr(t,e){return t===e}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ot(t){return t.localName==="slot"}let Ja=class{static getFlattenedNodes(t){const e=A(t);if(ot(t))return t=t,e.assignedNodes({flatten:!0});{const i=[];for(let n=0;n<e.childNodes.length;n++){const o=e.childNodes[n];if(ot(o)){const r=o;i.push(...A(r).assignedNodes({flatten:!0}))}else i.push(o)}return i}}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){ot(this._target)?this._listenSlots([this._target]):A(this._target).children&&(this._listenSlots(A(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){ot(this._target)?this._unlistenSlots([this._target]):A(this._target).children&&(this._unlistenSlots(A(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,Ne.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let i=t[e];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),i=xc(e,this._effectiveNodes);for(let o=0,r;o<i.length&&(r=i[o]);o++)for(let a=0,s;a<r.removed.length&&(s=r.removed[a]);a++)t.removedNodes.push(s);for(let o=0,r;o<i.length&&(r=i[o]);o++)for(let a=r.index;a<r.index+r.addedCount;a++)t.addedNodes.push(e[a]);this._effectiveNodes=e;let n=!1;return(t.addedNodes.length||t.removedNodes.length)&&(n=!0,this.callback.call(this._target,t)),n}_listenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];ot(i)&&i.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];ot(i)&&i.removeEventListener("slotchange",this._boundSchedule)}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const wc=function(){let t,e;do t=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=u1();while(t||e)};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const rt=Element.prototype,D1=rt.matches||rt.matchesSelector||rt.mozMatchesSelector||rt.msMatchesSelector||rt.oMatchesSelector||rt.webkitMatchesSelector,Cc=function(t,e){return D1.call(t,e)};class N{constructor(e){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(e),this.node=e}observeNodes(e){return new Ja(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(A(this.node).contains(e))return!0;let i=e,n=e.ownerDocument;for(;i&&i!==n&&i!==this.node;)i=A(i).parentNode||A(i).host;return i===this.node}getOwnerRoot(){return A(this.node).getRootNode()}getDistributedNodes(){return this.node.localName==="slot"?A(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],i=A(this.node).assignedSlot;for(;i;)e.push(i),i=A(i).assignedSlot;return e}importNode(e,i){let n=this.node instanceof Document?this.node:this.node.ownerDocument;return A(n).importNode(e,i)}getEffectiveChildNodes(){return Ja.getFlattenedNodes(this.node)}queryDistributedElements(e){let i=this.getEffectiveChildNodes(),n=[];for(let o=0,r=i.length,a;o<r&&(a=i[o]);o++)a.nodeType===Node.ELEMENT_NODE&&Cc(a,e)&&n.push(a);return n}get activeElement(){let e=this.node;return e._activeElement!==void 0?e._activeElement:e.activeElement}}function q1(t,e){for(let i=0;i<e.length;i++){let n=e[i];t[n]=function(){return this.node[n].apply(this.node,arguments)}}}function Xa(t,e){for(let i=0;i<e.length;i++){let n=e[i];Object.defineProperty(t,n,{get:function(){return this.node[n]},configurable:!0})}}function B1(t,e){for(let i=0;i<e.length;i++){let n=e[i];Object.defineProperty(t,n,{get:function(){return this.node[n]},set:function(o){this.node[n]=o},configurable:!0})}}class Qo{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}N.prototype.cloneNode;N.prototype.appendChild;N.prototype.insertBefore;N.prototype.removeChild;N.prototype.replaceChild;N.prototype.setAttribute;N.prototype.removeAttribute;N.prototype.querySelector;N.prototype.querySelectorAll;N.prototype.parentNode;N.prototype.firstChild;N.prototype.lastChild;N.prototype.nextSibling;N.prototype.previousSibling;N.prototype.firstElementChild;N.prototype.lastElementChild;N.prototype.nextElementSibling;N.prototype.previousElementSibling;N.prototype.childNodes;N.prototype.children;N.prototype.classList;N.prototype.textContent;N.prototype.innerHTML;let er=N;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class t extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(N.prototype).forEach(e=>{e!="activeElement"&&(t.prototype[e]=N.prototype[e])}),Xa(t.prototype,["classList"]),er=t,Object.defineProperties(Qo.prototype,{localTarget:{get(){const e=this.event.currentTarget,i=e&&O(e).getOwnerRoot(),n=this.path;for(let o=0;o<n.length;o++){const r=n[o];if(O(r).getOwnerRoot()===i)return r}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else q1(N.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll","attachShadow"]),Xa(N.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList","shadowRoot"]),B1(N.prototype,["textContent","innerHTML","className"]);const O=function(t){if(t=t||document,t instanceof er||t instanceof Qo)return t;let e=t.__domApi;return e||(t instanceof Event?e=new Qo(t):e=new er(t),t.__domApi=e),e};/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const vo=window.ShadyDOM,Za=window.ShadyCSS;function Qa(t,e){return A(t).getRootNode()===e}function j1(t,e=!1){if(!vo||!Za||!vo.handlesDynamicScoping)return null;const i=Za.ScopingShim;if(!i)return null;const n=i.scopeForNode(t),o=A(t).getRootNode(),r=a=>{if(!Qa(a,o))return;const s=Array.from(vo.nativeMethods.querySelectorAll.call(a,"*"));s.push(a);for(let l=0;l<s.length;l++){const c=s[l];if(!Qa(c,o))continue;const u=i.currentScopeForNode(c);u!==n&&(u!==""&&i.unscopeNode(c,u),i.scopeNode(c,n))}};if(r(t),e){const a=new MutationObserver(s=>{for(let l=0;l<s.length;l++){const c=s[l];for(let u=0;u<c.addedNodes.length;u++){const d=c.addedNodes[u];d.nodeType===Node.ELEMENT_NODE&&r(d)}}});return a.observe(t,{childList:!0,subtree:!0}),a}else return null}/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const yo="disable-upgrade",zc=t=>{for(;t;){const e=Object.getOwnPropertyDescriptor(t,"observedAttributes");if(e)return e.get;t=Object.getPrototypeOf(t.prototype).constructor}return()=>[]};ae(t=>{const e=Rn(t);let i=zc(e);class n extends e{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return i.call(this).concat(yo)}_initializeProperties(){this.hasAttribute(yo)?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(r){return super._canApplyPropertyDefault(r)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(r))}attributeChangedCallback(r,a,s,l){r==yo?this.__isUpgradeDisabled&&s==null&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,A(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(r,a,s,l)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}return n});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const $i="disable-upgrade";let U1=window.ShadyCSS;const Pr=ae(t=>{const e=fc(Rn(t)),i=Ro?e:I1(e),n=zc(i),o={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class r extends i{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(s,l,c){(this.__dataAttributes&&this.__dataAttributes[s]||s===$i)&&this.attributeChangedCallback(s,l,c,null)}setAttribute(s,l){if(Mi&&!this._legacyForceObservedAttributes){const c=this.getAttribute(s);super.setAttribute(s,l),this.__attributeReaction(s,c,String(l))}else super.setAttribute(s,l)}removeAttribute(s){if(Mi&&!this._legacyForceObservedAttributes){const l=this.getAttribute(s);super.removeAttribute(s),this.__attributeReaction(s,l,null)}else super.removeAttribute(s)}static get observedAttributes(){return Mi&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],this.prototype,void 0),this.__observedAttributes):n.call(this).concat($i)}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(s){return super._canApplyPropertyDefault(s)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(s))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(s,l,c,u){l!==c&&(s==$i?this.__isUpgradeDisabled&&c==null&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,A(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(s,l,c,u),this.attributeChanged(s,l,c)))}attributeChanged(s,l,c){}_initializeProperties(){if(oi&&this.hasAttribute($i))this.__isUpgradeDisabled=!0;else{let s=Object.getPrototypeOf(this);s.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",s))||(this._registered(),s.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),Mi&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const s=this.attributes;for(let l=0,c=s.length;l<c;l++){const u=s[l];this.__attributeReaction(u.name,null,u.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(s){return this._serializeValue(s)}deserialize(s,l){return this._deserializeValue(s,l)}reflectPropertyToAttribute(s,l,c){this._propertyToAttribute(s,l,c)}serializeValueToAttribute(s,l,c){this._valueToNodeAttribute(c||this,s,l)}extend(s,l){if(!(s&&l))return s||l;let c=Object.getOwnPropertyNames(l);for(let u=0,d;u<c.length&&(d=c[u]);u++){let p=Object.getOwnPropertyDescriptor(l,d);p&&Object.defineProperty(s,d,p)}return s}mixin(s,l){for(let c in l)s[c]=l[c];return s}chainObject(s,l){return s&&l&&s!==l&&(s.__proto__=l),s}instanceTemplate(s){let l=this.constructor._contentForTemplate(s);return document.importNode(l,!0)}fire(s,l,c){c=c||{},l=l??{};let u=new Event(s,{bubbles:c.bubbles===void 0?!0:c.bubbles,cancelable:!!c.cancelable,composed:c.composed===void 0?!0:c.composed});u.detail=l;let d=c.node||this;return A(d).dispatchEvent(u),u}listen(s,l,c){s=s||this;let u=this.__boundListeners||(this.__boundListeners=new WeakMap),d=u.get(s);d||(d={},u.set(s,d));let p=l+c;d[p]||(d[p]=this._addMethodEventListenerToNode(s,l,c,this))}unlisten(s,l,c){s=s||this;let u=this.__boundListeners&&this.__boundListeners.get(s),d=l+c,p=u&&u[d];p&&(this._removeEventListenerFromNode(s,l,p),u[d]=null)}setScrollDirection(s,l){mc(l||this,o[s]||"auto")}$$(s){return this.root.querySelector(s)}get domHost(){let s=A(this).getRootNode();return s instanceof DocumentFragment?s.host:s}distributeContent(){const l=O(this);window.ShadyDOM&&l.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return O(this).getEffectiveChildNodes()}queryDistributedElements(s){return O(this).queryDistributedElements(s)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter(function(l){return l.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let s=this.getEffectiveChildNodes(),l=[];for(let c=0,u;u=s[c];c++)u.nodeType!==Node.COMMENT_NODE&&l.push(u.textContent);return l.join("")}queryEffectiveChildren(s){let l=this.queryDistributedElements(s);return l&&l[0]}queryAllEffectiveChildren(s){return this.queryDistributedElements(s)}getContentChildNodes(s){let l=this.root.querySelector(s||"slot");return l?O(l).getDistributedNodes():[]}getContentChildren(s){return this.getContentChildNodes(s).filter(function(c){return c.nodeType===Node.ELEMENT_NODE})}isLightDescendant(s){const l=this;return l!==s&&A(l).contains(s)&&A(l).getRootNode()===A(s).getRootNode()}isLocalDescendant(s){return this.root===A(s).getRootNode()}scopeSubtree(s,l=!1){return j1(s,l)}getComputedStyleValue(s){return U1.getComputedStyleValue(this,s)}debounce(s,l,c){return this._debouncers=this._debouncers||{},this._debouncers[s]=De.debounce(this._debouncers[s],c>0?dt.after(c):Ne,l.bind(this))}isDebouncerActive(s){this._debouncers=this._debouncers||{};let l=this._debouncers[s];return!!(l&&l.isActive())}flushDebouncer(s){this._debouncers=this._debouncers||{};let l=this._debouncers[s];l&&l.flush()}cancelDebouncer(s){this._debouncers=this._debouncers||{};let l=this._debouncers[s];l&&l.cancel()}async(s,l){return l>0?dt.run(s.bind(this),l):~Ne.run(s.bind(this))}cancelAsync(s){s<0?Ne.cancel(~s):dt.cancel(s)}create(s,l){let c=document.createElement(s);if(l)if(c.setProperties)c.setProperties(l);else for(let u in l)c[u]=l[u];return c}elementMatches(s,l){return Cc(l||this,s)}toggleAttribute(s,l){let c=this;return arguments.length===3&&(c=arguments[2]),arguments.length==1&&(l=!c.hasAttribute(s)),l?(A(c).setAttribute(s,""),!0):(A(c).removeAttribute(s),!1)}toggleClass(s,l,c){c=c||this,arguments.length==1&&(l=!c.classList.contains(s)),l?c.classList.add(s):c.classList.remove(s)}transform(s,l){l=l||this,l.style.webkitTransform=s,l.style.transform=s}translate3d(s,l,c,u){u=u||this,this.transform("translate3d("+s+","+l+","+c+")",u)}arrayDelete(s,l){let c;if(Array.isArray(s)){if(c=s.indexOf(l),c>=0)return s.splice(c,1)}else if(c=L(this,s).indexOf(l),c>=0)return this.splice(s,c,1);return null}_logger(s,l){switch(Array.isArray(l)&&l.length===1&&Array.isArray(l[0])&&(l=l[0]),s){case"log":case"warn":case"error":console[s](...l)}}_log(...s){this._logger("log",s)}_warn(...s){this._logger("warn",s)}_error(...s){this._logger("error",s)}_logf(s,...l){return["[%s::%s]",this.is,s,...l]}}return r.prototype.is="",r});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const K1={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},Sc={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},W1=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},Sc);function G1(t,e,i){const n=t._noAccessors,o=Object.getOwnPropertyNames(t);for(let r=0;r<o.length;r++){let a=o[r];if(!(a in i))if(n)e[a]=t[a];else{let s=Object.getOwnPropertyDescriptor(t,a);s&&(s.configurable=!0,Object.defineProperty(e,a,s))}}}function Y1(t,e,i){for(let n=0;n<e.length;n++)Ac(t,e[n],i,W1)}function Ac(t,e,i,n){G1(e,t,n);for(let o in K1)e[o]&&(i[o]=i[o]||[],i[o].push(e[o]))}function Ec(t,e,i){e=e||[];for(let n=t.length-1;n>=0;n--){let o=t[n];o?Array.isArray(o)?Ec(o,e):e.indexOf(o)<0&&(!i||i.indexOf(o)<0)&&e.unshift(o):console.warn("behavior is null, check for missing or 404 import")}return e}function es(t,e){for(const i in e){const n=t[i],o=e[i];!("value"in o)&&n&&"value"in n?t[i]=Object.assign({value:n.value},o):t[i]=o}}const ts=Pr(HTMLElement);function J1(t,e,i){let n;const o={};class r extends e{static _finalizeClass(){if(!this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this)))e._finalizeClass.call(this);else{if(n)for(let l=0,c;l<n.length;l++)c=n[l],c.properties&&this.createProperties(c.properties),c.observers&&this.createObservers(c.observers,c.properties);t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties),this._prepareTemplate()}}static get properties(){const l={};if(n)for(let c=0;c<n.length;c++)es(l,n[c].properties);return es(l,t.properties),l}static get observers(){let l=[];if(n)for(let c=0,u;c<n.length;c++)u=n[c],u.observers&&(l=l.concat(u.observers));return t.observers&&(l=l.concat(t.observers)),l}created(){super.created();const l=o.created;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}_registered(){const l=r.prototype;if(!l.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",l))){l.__hasRegisterFinished=!0,super._registered(),oi&&a(l);const c=Object.getPrototypeOf(this);let u=o.beforeRegister;if(u)for(let d=0;d<u.length;d++)u[d].call(c);if(u=o.registered,u)for(let d=0;d<u.length;d++)u[d].call(c)}}_applyListeners(){super._applyListeners();const l=o.listeners;if(l)for(let c=0;c<l.length;c++){const u=l[c];if(u)for(let d in u)this._addMethodEventListenerToNode(this,d,u[d])}}_ensureAttributes(){const l=o.hostAttributes;if(l)for(let c=l.length-1;c>=0;c--){const u=l[c];for(let d in u)this._ensureAttribute(d,u[d])}super._ensureAttributes()}ready(){super.ready();let l=o.ready;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}attached(){super.attached();let l=o.attached;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}detached(){super.detached();let l=o.detached;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}attributeChanged(l,c,u){super.attributeChanged();let d=o.attributeChanged;if(d)for(let p=0;p<d.length;p++)d[p].call(this,l,c,u)}}if(i){Array.isArray(i)||(i=[i]);let s=e.prototype.behaviors;n=Ec(i,null,s),r.prototype.behaviors=s?s.concat(i):n}const a=s=>{n&&Y1(s,n,o),Ac(s,t,o,Sc)};return oi||a(r.prototype),r.generatedFrom=t,r}const X1=function(t,e){t||console.warn("Polymer.Class requires `info` argument");let i=e?e(ts):ts;return i=J1(t,i,t.behaviors),i.is=i.prototype.is=t.is,i};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const W=function(t){let e;return typeof t=="function"?e=t:e=W.Class(t),t._legacyForceObservedAttributes&&(e.prototype._legacyForceObservedAttributes=t._legacyForceObservedAttributes),customElements.define(e.is,e),e};W.Class=X1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ir(t,e,i,n,o){let r;o&&(r=typeof i=="object"&&i!==null,r&&(n=t.__dataTemp[e]));let a=n!==i&&(n===n||i===i);return r&&a&&(t.__dataTemp[e]=i),a}const Hr=ae(t=>{class e extends t{_shouldPropertyChange(n,o,r){return Ir(this,n,o,r,!0)}}return e}),Mc=ae(t=>{class e extends t{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(n,o,r){return Ir(this,n,o,r,this.mutableData)}}return e});Hr._mutablePropertyChange=Ir;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let tr=null;function ir(){return tr}ir.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:ir,writable:!0}});const Lc=Vn(ir),Z1=Hr(Lc);function Q1(t,e){tr=t,Object.setPrototypeOf(t,e.prototype),new e,tr=null}const em=Vn(class{});function kc(t,e){for(let i=0;i<e.length;i++){let n=e[i];if(!!t!=!!n.__hideTemplateChildren__)if(n.nodeType===Node.TEXT_NODE)t?(n.__polymerTextContent__=n.textContent,n.textContent=""):n.textContent=n.__polymerTextContent__;else if(n.localName==="slot")if(t)n.__polymerReplaced__=document.createComment("hidden-slot"),A(A(n).parentNode).replaceChild(n.__polymerReplaced__,n);else{const o=n.__polymerReplaced__;o&&A(A(o).parentNode).replaceChild(n,o)}else n.style&&(t?(n.__polymerDisplay__=n.style.display,n.style.display="none"):n.style.display=n.__polymerDisplay__);n.__hideTemplateChildren__=t,n._showHideChildren&&n._showHideChildren(t)}}class Ue extends em{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let i=[];this.children=i;for(let o=this.root.firstChild;o;o=o.nextSibling)i.push(o),o.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let n=this.__templatizeOptions;(e&&n.instanceProps||!n.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let n in this.__hostProps)this._setPendingProperty(n,this.__dataHost["_host_"+n]);for(let n in e)this._setPendingProperty(n,e[n])}forwardHostProp(e,i){this._setPendingPropertyOrPath(e,i,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,i,n){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,i,o=>{o.model=this,n(o)});else{let o=this.__dataHost.__dataHost;o&&o._addEventListenerToNode(e,i,n)}}_showHideChildren(e){kc(e,this.children)}_setUnmanagedPropertyToNode(e,i,n){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&i=="textContent"?e.__polymerTextContent__=n:super._setUnmanagedPropertyToNode(e,i,n)}get parentModel(){let e=this.__parentModel;if(!e){let i;e=this;do e=e.__dataHost.__dataHost;while((i=e.__templatizeOptions)&&!i.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}Ue.prototype.__dataHost;Ue.prototype.__templatizeOptions;Ue.prototype._methodHost;Ue.prototype.__templatizeOwner;Ue.prototype.__hostProps;const tm=Hr(Ue);function is(t){let e=t.__dataHost;return e&&e._methodHost||e}function im(t,e,i){let n=i.mutableData?tm:Ue;Sn.mixin&&(n=Sn.mixin(n));let o=class extends n{};return o.prototype.__templatizeOptions=i,o.prototype._bindTemplate(t),rm(o,t,e,i),o}function nm(t,e,i,n){let o=i.forwardHostProp;if(o&&e.hasHostProps){const r=t.localName=="template";let a=e.templatizeTemplateClass;if(!a){if(r){let l=i.mutableData?Z1:Lc;class c extends l{}a=e.templatizeTemplateClass=c}else{const l=t.constructor;class c extends l{}a=e.templatizeTemplateClass=c}let s=e.hostProps;for(let l in s)a.prototype._addPropertyEffect("_host_"+l,a.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:om(l,o)}),a.prototype._createNotifyingProperty("_host_"+l);sl&&n&&lm(e,i,n)}if(t.__dataProto&&Object.assign(t.__data,t.__dataProto),r)Q1(t,a),t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties();else{Object.setPrototypeOf(t,a.prototype);const s=e.hostProps;for(let l in s)if(l="_host_"+l,l in t){const c=t[l];delete t[l],t.__data[l]=c}}}}function om(t,e){return function(n,o,r){e.call(n.__templatizeOwner,o.substring(6),r[o])}}function rm(t,e,i,n){let o=i.hostProps||{};for(let r in n.instanceProps){delete o[r];let a=n.notifyInstanceProp;a&&t.prototype._addPropertyEffect(r,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:am(r,a)})}if(n.forwardHostProp&&e.__dataHost)for(let r in o)i.hasHostProps||(i.hasHostProps=!0),t.prototype._addPropertyEffect(r,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:sm()})}function am(t,e){return function(n,o,r){e.call(n.__templatizeOwner,n,o,r[o])}}function sm(){return function(e,i,n){e.__dataHost._setPendingPropertyOrPath("_host_"+i,n[i],!0,!0)}}function Sn(t,e,i){if(vt&&!is(t))throw new Error("strictTemplatePolicy: template owner not trusted");if(i=i||{},t.__templatizeOwner)throw new Error("A <template> can only be templatized once");t.__templatizeOwner=e;let o=(e?e.constructor:Ue)._parseTemplate(t),r=o.templatizeInstanceClass;r||(r=im(t,o,i),o.templatizeInstanceClass=r);const a=is(t);nm(t,o,i,a);let s=class extends r{};return s.prototype._methodHost=a,s.prototype.__dataHost=t,s.prototype.__templatizeOwner=e,s.prototype.__hostProps=o.hostProps,s=s,s}function lm(t,e,i){const n=i.constructor._properties,{propertyEffects:o}=t,{instanceProps:r}=e;for(let a in o)if(!n[a]&&!(r&&r[a])){const s=o[a];for(let l=0;l<s.length;l++){const{part:c}=s[l].info;if(!(c.signature&&c.signature.static)){console.warn(`Property '${a}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}function cm(t,e){let i;for(;e;)if(i=e.__dataHost?e:e.__templatizeInstance)if(i.__dataHost!=t)e=i.__dataHost;else return i;else e=A(e).parentNode;return null}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ns=!1;function Nr(){if(oi&&!Nn){if(!ns){ns=!0;const t=document.createElement("style");t.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(t)}return!0}return!1}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const um=fc(Mc(Vn(HTMLElement)));class dm extends um{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),vt)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(e,i,n,o){this.mutableData=!0}connectedCallback(){Nr()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){A(A(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e=e||this.querySelector("template"),!e){let i=new MutationObserver(()=>{if(e=this.querySelector("template"),e)i.disconnect(),this.render();else throw new Error("dom-bind requires a <template> child")});i.observe(this,{childList:!0});return}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let i=this.root.firstChild;i;i=i.nextSibling)this.__children[this.__children.length]=i;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}}customElements.define("dom-bind",dm);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const pm=Mc(G);class os extends pm{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!Io,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e);this.__chunkingId&&cancelAnimationFrame(this.__chunkingId)}connectedCallback(){if(super.connectedCallback(),Nr()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let e=A(A(this).parentNode);for(let i=0;i<this.__instances.length;i++)this.__attachInstance(i,e);this.__chunkingId&&this.__render()}}__ensureTemplatized(){if(!this.__ctor){const e=this;let i=this.template=e._templateInfo?e:this.querySelector("template");if(!i){let o=new MutationObserver(()=>{if(this.querySelector("template"))o.disconnect(),this.__render();else throw new Error("dom-repeat requires a <template> child")});return o.observe(this,{childList:!0}),!1}let n={};n[this.as]=!0,n[this.indexAs]=!0,n[this.itemsIndexAs]=!0,this.__ctor=Sn(i,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:n,forwardHostProp:function(o,r){let a=this.__instances;for(let s=0,l;s<a.length&&(l=a[s]);s++)l.forwardHostProp(o,r)},notifyInstanceProp:function(o,r,a){if(Xu(this.as,r)){let s=o[this.itemsIndexAs];r==this.as&&(this.items[s]=a);let l=si(this.as,`${JSCompiler_renameProperty("items",this)}.${s}`,r);this.notifyPath(l,a)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if(typeof e=="string"){let i=e,n=this.__getMethodHost();return function(){return n[i].apply(n,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn){if(!e)this.__debounceRender(this.__render,this.delay);else if(this.__observePaths){let i=this.__observePaths;for(let n=0;n<i.length;n++)e.indexOf(i[n])===0&&this.__debounceRender(this.__render,this.delay)}}}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||(e.path==="items"&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(e,i=0){this.__renderDebouncer=De.debounce(this.__renderDebouncer,i>0?dt.after(i):Ne,e.bind(this)),Ar(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),wc()}__render(){if(!this.__ensureTemplatized())return;let e=this.items||[];const i=this.__sortAndFilterItems(e),n=this.__calculateLimit(i.length);this.__updateInstances(e,n,i),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>{this.__chunkingId=null,this.__continueChunking()})),this._setRenderedItemCount(this.__instances.length),(!Io||this.notifyDomChange)&&this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(e){let i=new Array(e.length);for(let n=0;n<e.length;n++)i[n]=n;return this.__filterFn&&(i=i.filter((n,o,r)=>this.__filterFn(e[n],o,r))),this.__sortFn&&i.sort((n,o)=>this.__sortFn(e[n],e[o])),i}__calculateLimit(e){let i=e;const n=this.__instances.length;if(this.initialCount){let o;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(i=Math.min(e,this.initialCount),o=Math.max(i-n,0),this.__chunkCount=o||1):(o=Math.min(Math.max(e-n,0),this.__chunkCount),i=Math.min(n+o,e)),this.__shouldMeasureChunk=o===this.__chunkCount,this.__shouldContinueChunking=i<e,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,i}__continueChunking(){if(this.__shouldMeasureChunk){const e=performance.now()-this.__renderStartTime,i=this._targetFrameTime/e;this.__chunkCount=Math.round(this.__chunkCount*i)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(e,i,n){const o=this.__itemsIdxToInstIdx={};let r;for(r=0;r<i;r++){let a=this.__instances[r],s=n[r],l=e[s];o[s]=r,a?(a._setPendingProperty(this.as,l),a._setPendingProperty(this.indexAs,r),a._setPendingProperty(this.itemsIndexAs,s),a._flushProperties()):this.__insertInstance(l,r,s)}for(let a=this.__instances.length-1;a>=r;a--)this.__detachAndRemoveInstance(a)}__detachInstance(e){let i=this.__instances[e];const n=A(i.root);for(let o=0;o<i.children.length;o++){let r=i.children[o];n.appendChild(r)}return i}__attachInstance(e,i){let n=this.__instances[e];i.insertBefore(n.root,this)}__detachAndRemoveInstance(e){this.__detachInstance(e),this.__instances.splice(e,1)}__stampInstance(e,i,n){let o={};return o[this.as]=e,o[this.indexAs]=i,o[this.itemsIndexAs]=n,new this.__ctor(o)}__insertInstance(e,i,n){const o=this.__stampInstance(e,i,n);let r=this.__instances[i+1],a=r?r.children[0]:this;return A(A(this).parentNode).insertBefore(o.root,a),this.__instances[i]=o,o}_showHideChildren(e){for(let i=0;i<this.__instances.length;i++)this.__instances[i]._showHideChildren(e)}__handleItemPath(e,i){let n=e.slice(6),o=n.indexOf("."),r=o<0?n:n.substring(0,o);if(r==parseInt(r,10)){let a=o<0?"":n.substring(o+1);this.__handleObservedPaths(a);let s=this.__itemsIdxToInstIdx[r],l=this.__instances[s];if(l){let c=this.as+(a?"."+a:"");l._setPendingPropertyOrPath(c,i,!1,!0),l._flushProperties()}return!0}}itemForElement(e){let i=this.modelForElement(e);return i&&i[this.as]}indexForElement(e){let i=this.modelForElement(e);return i&&i[this.indexAs]}modelForElement(e){return cm(this.template,e)}}customElements.define(os.is,os);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class Oc extends G{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=De.debounce(this.__renderDebouncer,Ne,()=>this.__render()),Ar(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const e=A(this).parentNode;(!e||e.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!A(e).host)&&this.__teardownInstance()}connectedCallback(){super.connectedCallback(),Nr()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const e=this;let i=e._templateInfo?e:A(e).querySelector("template");if(!i){let n=new MutationObserver(()=>{if(A(this).querySelector("template"))n.disconnect(),this.__render();else throw new Error("dom-if requires a <template> child")});return n.observe(this,{childList:!0}),!1}this.__template=i}return!0}__ensureInstance(){let e=A(this).parentNode;if(this.__hasInstance()){let i=this.__getInstanceNodes();if(i&&i.length&&A(this).previousSibling!==i[i.length-1])for(let o=0,r;o<i.length&&(r=i[o]);o++)A(e).insertBefore(r,this)}else{if(!e||!this.__ensureTemplate())return!1;this.__createAndInsertInstance(e)}return!0}render(){wc()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),(!Io||this.notifyDomChange)&&this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(e){}__teardownInstance(){}_showHideChildren(){}}class hm extends Oc{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(e){const i=this.__dataHost||this;if(vt&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const n=i._bindTemplate(this.__template,!0);n.runEffects=(o,r,a)=>{let s=this.__syncInfo;if(this.if)s&&(this.__syncInfo=null,this._showHideChildren(),r=Object.assign(s.changedProps,r)),o(r,a);else if(this.__instance)if(s||(s=this.__syncInfo={runEffects:o,changedProps:{}}),a)for(const l in r){const c=ke(l);s.changedProps[c]=this.__dataHost[c]}else Object.assign(s.changedProps,r)},this.__instance=i._stampTemplate(this.__template,n),A(e).insertBefore(this.__instance,this)}__syncHostProperties(){const e=this.__syncInfo;e&&(this.__syncInfo=null,e.runEffects(e.changedProps,!1))}__teardownInstance(){const e=this.__dataHost||this;this.__instance&&(e._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==e&&(this.__instance.__hidden=e,kc(e,this.__instance.templateInfo.childNodes)),e||this.__syncHostProperties()}}class mm extends Oc{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(e){this.__ctor||(this.__ctor=Sn(this.__template,this,{mutableData:!0,forwardHostProp:function(i,n){this.__instance&&(this.if?this.__instance.forwardHostProp(i,n):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[ke(i)]=!0))}})),this.__instance=new this.__ctor,A(e).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let i=A(e[0]).parentNode;if(i){i=A(i);for(let n=0,o;n<e.length&&(o=e[n]);n++)i.removeChild(o)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let e=this.__invalidProps;if(e){this.__invalidProps=null;for(let i in e)this.__instance._setPendingProperty(i,this.__dataHost[i]);this.__instance._flushProperties()}}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==e&&(this.__instance.__hidden=e,this.__instance._showHideChildren(e)),e||this.__syncHostProperties()}}const rs=ll?hm:mm;customElements.define(rs.is,rs);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let fm=ae(t=>{let e=Rn(t);class i extends e{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(o,r){let a=r.path;if(a==JSCompiler_renameProperty("items",this)){let s=r.base||[],l=this.__lastItems,c=this.__lastMulti;if(o!==c&&this.clearSelection(),l){let u=xc(s,l);this.__applySplices(u)}this.__lastItems=s,this.__lastMulti=o}else if(r.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(r.value.indexSplices);else{let s=a.slice(`${JSCompiler_renameProperty("items",this)}.`.length),l=parseInt(s,10);s.indexOf(".")<0&&s==l&&this.__deselectChangedIdx(l)}}__applySplices(o){let r=this.__selectedMap;for(let s=0;s<o.length;s++){let l=o[s];r.forEach((c,u)=>{c<l.index||(c>=l.index+l.removed.length?r.set(u,c+l.addedCount-l.removed.length):r.set(u,-1))});for(let c=0;c<l.addedCount;c++){let u=l.index+c;r.has(this.items[u])&&r.set(this.items[u],u)}}this.__updateLinks();let a=0;r.forEach((s,l)=>{s<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),a,1):this.selected=this.selectedItem=null,r.delete(l)):a++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let o=0;this.__selectedMap.forEach(r=>{r>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${r}`,`${JSCompiler_renameProperty("selected",this)}.${o++}`)})}else this.__selectedMap.forEach(o=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${o}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${o}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(o){return this.__selectedMap.has(o)}isIndexSelected(o){return this.isSelected(this.items[o])}__deselectChangedIdx(o){let r=this.__selectedIndexForItemIndex(o);if(r>=0){let a=0;this.__selectedMap.forEach((s,l)=>{r==a++&&this.deselect(l)})}}__selectedIndexForItemIndex(o){let r=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${o}`];if(r)return parseInt(r.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(o){let r=this.__selectedMap.get(o);if(r>=0){this.__selectedMap.delete(o);let a;this.multi&&(a=this.__selectedIndexForItemIndex(r)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),a,1):this.selected=this.selectedItem=null}}deselectIndex(o){this.deselect(this.items[o])}select(o){this.selectIndex(this.items.indexOf(o))}selectIndex(o){let r=this.items[o];this.isSelected(r)?this.toggle&&this.deselectIndex(o):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(r,o),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),r):this.selected=this.selectedItem=r)}}return i}),gm=fm(G);class as extends gm{static get is(){return"array-selector"}static get template(){return null}}customElements.define(as.is,as);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const on=new Re;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,i){},prepareTemplateDom(t,e){},prepareTemplateStyles(t,e,i){},styleSubtree(t,e){on.processStyles(),Ko(t,e)},styleElement(t){on.processStyles()},styleDocument(t){on.processStyles(),Ko(document.body,t)},getComputedStyleValue(t,e){return ac(t,e)},flushCustomStyles(){},nativeCss:Sr,nativeShadow:Yn,cssBuild:pi,disableRuntime:Xl});window.ShadyCSS.CustomStyleInterface=on;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ss="include",bm=window.ShadyCSS.CustomStyleInterface;class vm extends HTMLElement{constructor(){super(),this._style=null,bm.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const i=e.getAttribute(ss);return i&&(e.removeAttribute(ss),e.textContent=Wu(i)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",vm);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ym=Pr(HTMLElement).prototype;/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const $c=U`
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
</custom-style>`;$c.setAttribute("style","display: none;");document.head.appendChild($c.content);var Tc=document.createElement("style");Tc.textContent="[hidden] { display: none !important; }";document.head.appendChild(Tc);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class re{constructor(e){re[" "](e),this.type=e&&e.type||"default",this.key=e&&e.key,e&&"value"in e&&(this.value=e.value)}get value(){var e=this.type,i=this.key;if(e&&i)return re.types[e]&&re.types[e][i]}set value(e){var i=this.type,n=this.key;i&&n&&(i=re.types[i]=re.types[i]||{},e==null?delete i[n]:i[n]=e)}get list(){var e=this.type;if(e){var i=re.types[this.type];return i?Object.keys(i).map(function(n){return _m[this.type][n]},this):[]}}byKey(e){return this.key=e,this.value}}re[" "]=function(){};re.types={};var _m=re.types;W({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(t,e,i){var n=new re({type:t,key:e});return i!==void 0&&i!==n.value?n.value=i:this.value!==n.value&&(this.value=n.value),n},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(t){t&&(this.value=this)},byKey:function(t){return new re({type:this.type,key:t}).value}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/W({_template:U`
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
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:ym.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(t){var e=(t||"").split(":");this._iconName=e.pop(),this._iconsetName=e.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(t){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&O(this.root).removeChild(this._img),this._iconName===""?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,O(this.root).appendChild(this._img))}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/W({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new re({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map(function(t){return this.name+":"+t},this)},applyIcon:function(t,e){this.removeIcon(t);var i=this._cloneIcon(e,this.rtlMirroring&&this._targetIsRTL(t));if(i){var n=O(t.root||t);return n.insertBefore(i,n.childNodes[0]),t._svgIcon=i}return null},removeIcon:function(t){t._svgIcon&&(O(t.root||t).removeChild(t._svgIcon),t._svgIcon=null)},_targetIsRTL:function(t){if(this.__targetIsRTL==null)if(this.useGlobalRtlAttribute){var e=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL=e.getAttribute("dir")==="rtl"}else t&&t.nodeType!==Node.ELEMENT_NODE&&(t=t.host),this.__targetIsRTL=t&&window.getComputedStyle(t).direction==="rtl";return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async(function(){this.fire("iron-iconset-added",this,{node:window})})},_createIconMap:function(){var t=Object.create(null);return O(this).querySelectorAll("[id]").forEach(function(e){t[e.id]=e}),t},_cloneIcon:function(t,e){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[t],this.size,e)},_prepareSvgClone:function(t,e,i){if(t){var n=t.cloneNode(!0),o=document.createElementNS("http://www.w3.org/2000/svg","svg"),r=n.getAttribute("viewBox")||"0 0 "+e+" "+e,a="pointer-events: none; display: block; width: 100%; height: 100%;";return i&&n.hasAttribute("mirror-in-rtl")&&(a+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),o.setAttribute("viewBox",r),o.setAttribute("preserveAspectRatio","xMidYMid meet"),o.setAttribute("focusable","false"),o.style.cssText=a,o.appendChild(n).removeAttribute("id"),o}return null}});/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const xm=U`<iron-iconset-svg name="icons" size="24">
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
</iron-iconset-svg>`;document.head.appendChild(xm.content);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fr=Oe(class extends St{constructor(t){if(super(t),t.type!==ge.PROPERTY&&t.type!==ge.ATTRIBUTE&&t.type!==ge.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ol(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===ne||e===de)return e;const i=t.element,n=t.name;if(t.type===ge.PROPERTY){if(e===i[n])return ne}else if(t.type===ge.BOOLEAN_ATTRIBUTE){if(!!e===i.hasAttribute(n))return ne}else if(t.type===ge.ATTRIBUTE&&i.getAttribute(n)===e+"")return ne;return rl(t),e}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Q=t=>t??de,wt=je(class extends Be{values;constructor(t,e,i,n){super(t,e),Object.assign(e.host,i),this.values=n}update(t,e){this.hasChanged(e)&&(this.values=e,Object.assign(this.state.host,t))}hasChanged(t=[]){return t.some((e,i)=>this.values[i]!==e)}}),xi=je(class extends Be{update(){return this.state.host}}),wm=/([A-Z])/gu,Fe=(t,e,i)=>{t[e]=i,t.dispatchEvent(new CustomEvent(e.replace(wm,"-$1").toLowerCase()+"-changed",{detail:{value:i}}))},Pe=(t,e,i=[e])=>{const n=xi();$(()=>{Fe(n,t,e)},i)},Pc=t=>{const e=vi(void 0),i=S(c=>e.current=c,[]),n=t.shadowRoot,o=S(c=>t.dispatchEvent(new Event(c.type,{bubbles:c.bubbles})),[]),r=S(c=>Fe(t,"value",c.target.value),[]),a=S(c=>Fe(t,"focused",c.type==="focus"),[]),s=S(()=>e.current?.focus(),[]),l=S(()=>{const c=e.current?.checkValidity();return t.toggleAttribute("invalid",!c),c},[]);return wt({focus:s,validate:l},[s,l]),$(()=>{const c=u=>{u.defaultPrevented||t.disabled||u.target.matches("input, textarea, label")||(u.preventDefault(),t.matches(":focus-within")||s())};return n.addEventListener("mousedown",c),()=>n.removeEventListener("mousedown",c)},[s]),{onChange:o,onFocus:a,onInput:r,onRef:i}},Cm=t=>M(()=>{if(t==null)return;const e=new RegExp(t,"u");return i=>{!i.defaultPrevented&&i.data&&!e.test(i.data)&&i.preventDefault()}},[t]),Ic=(t,{label:e,invalid:i,errorMessage:n})=>_`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${t}
				${q(e,()=>_`<label for="input" part="label">${e}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${q(i&&n,()=>_`<div class="error" part="error">${n}</div>`)}
	`,Hc=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],zm=({placeholder:t,noLabelFloat:e,label:i})=>(e?i:void 0)||t||" ",Sm=Math.abs,Am=(...t)=>t.some(e=>!!e),Em=(...t)=>t.join(""),Mm=(t,e,i)=>t?e:i,Lm=(t,e)=>e.indexOf(t)>-1,km=(t,e)=>t===e,Xn=t=>!!(t==null||Array.isArray(t)&&t.length===0||typeof t=="string"&&t.length===0||typeof t=="number"&&t===0),Om=(t,e)=>typeof t!="number"?"":t.toFixed(e),$m=Object.freeze(Object.defineProperty({__proto__:null,abs:Sm,anyTrue:Am,concat:Em,ifElse:Mm,inArray:Lm,isEmpty:Xn,isEqual:km,toFixed:Om},Symbol.toStringTag,{value:"Module"})),Tm={isoBasic:/^\d{4}-\d{2}-\d{2}$/iu},Pm=t=>typeof t=="string"&&Tm.isoBasic.test(t)?new Date(`${t}T00:00`):new Date(t),Im=t=>{if(t==null)return;if(t instanceof Date&&!isNaN(t.getTime()))return t;if(!(typeof t=="number"||typeof t=="string"))return;const e=Pm(t);if(!(e instanceof Date&&isNaN(e.getTime())))return e},Pt=t=>t<10?"0"+t:t,Zn=t=>t instanceof Date?t.getFullYear()+"-"+Pt(t.getMonth()+1)+"-"+Pt(t.getDate())+"T"+Pt(t.getHours())+":"+Pt(t.getMinutes())+":"+Pt(t.getSeconds())+"."+(t.getMilliseconds()/1e3).toFixed(3).slice(2,5):null,Te=(t,...e)=>t.flatMap((i,n)=>[i,e[n]??""]).join(""),Et=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},Hm=(t,e)=>{const i=class extends e{};return Object.assign(i.prototype,t),i},Nc=Te`
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
`,Nm=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...Hc],Fm=t=>{const{type:e="text",pattern:i,allowedPattern:n,autocomplete:o,value:r,readonly:a,disabled:s,min:l,max:c,step:u,maxlength:d}=t,{onChange:p,onFocus:h,onInput:m,onRef:f}=Pc(t),b=Cm(n);return wt({focus:()=>t.shadowRoot?.querySelector("#input")?.focus()},[]),Ic(_`
			<input
				${Qe(f)}
				style="--chars: ${r?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${e}
				pattern=${Q(i)}
				autocomplete=${Q(o)}
				placeholder=${zm(t)}
				?readonly=${a}
				?aria-disabled=${s}
				?disabled=${s}
				.value=${Fr(r??"")}
				maxlength=${Q(d)}
				@beforeinput=${b}
				@input=${m}
				@change=${p}
				@focus=${h}
				@blur=${h}
				min=${Q(l)}
				max=${Q(c)}
				step=${Q(u)}
			/>
		`,t)};customElements.define("cosmoz-input",V(Fm,{observedAttributes:Nm,styleSheets:[gr(Nc)]}));const ls=t=>{t.style.height="",t.style.height=`${t.scrollHeight}px`},Vm=(t,e=0)=>{if(e>0){const i=t.getAttribute("rows")??"",n=t.style.height;t.style.height="",t.setAttribute("rows",e),t.style.maxHeight=t.getBoundingClientRect().height+"px",t.style.height=n,t.setAttribute("rows",i)}},Rm=t=>{const{value:e,maxRows:i}=t,n=M(()=>()=>t.shadowRoot.querySelector("#input"),[]);$(()=>Vm(n(),i),[i,n]),$(()=>ls(n()),[n,e]),$(()=>{const o=n(),r=new ResizeObserver(()=>requestAnimationFrame(()=>ls(o)));return r.observe(o),()=>r.unobserve(o)},[n])},Dm=["rows","placeholder",...Hc],qm=t=>{const{autocomplete:e,value:i,placeholder:n,readonly:o,disabled:r,rows:a,cols:s,maxlength:l}=t,{onChange:c,onFocus:u,onInput:d,onRef:p}=Pc(t);return Rm(t),Ic(_`
			<textarea id="input" part="input"
				${Qe(p)}
				autocomplete=${Q(e)}
				placeholder=${n||" "}
				rows=${a??1} cols=${Q(s)}
				?readonly=${o} ?aria-disabled=${r} ?disabled=${r}
				.value=${Fr(i??"")} maxlength=${Q(l)} @input=${d}
				@change=${c} @focus=${u} @blur=${u}>`,t)};customElements.define("cosmoz-textarea",V(qm,{observedAttributes:Dm,styleSheets:[gr(Nc)]}));const Bm=Te`
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
`,jm=()=>_`
	<style>
		${Bm}
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
`;customElements.define("cosmoz-clear-button",V(jm));const it=({valuePath:t},e)=>L(e,t),Um=it,Km=it,Wm=({valuePath:t},e)=>i=>{const n=L(i,t);return n==null?!1:n.toString().toLowerCase().trim().includes(e.toLowerCase().trim())},Gm=(t,e)=>e===""||e==null?null:e,ze=t=>class extends t{static get properties(){return{isOmnitableColumn:{type:Boolean,value:!0},title:{type:String},valuePath:{type:String,notify:!0},values:{type:Array,notify:!0},filter:{type:Object},noLocalFilter:{type:Boolean},disabled:{type:Boolean,value:!1,notify:!0},editable:{type:Boolean,notify:!0},loading:{type:Boolean,value:!1,notify:!0},externalValues:{type:Boolean,value:!1,notify:!0},name:{type:String},sortOn:{type:String},groupOn:{type:String},width:{type:String,value:"75px"},minWidth:{type:String,value:"40px"},flex:{type:String,value:"1"},cellClass:{type:String,value:"default-cell"},headerCellClass:{type:String,value:"default-header-cell"},priority:{type:Number,value:0},hidden:{type:Boolean,notify:!0},preferredDropdownHorizontalAlign:{type:String,value:"right"},renderHeader:{type:Function},renderCell:{type:Function},renderEditCell:{type:Function},renderGroup:{type:Function},mini:{type:Number,value:null},renderMini:{type:Function}}}static get observers(){return["notifyFilterChange(filter)"]}notifyFilterChange(e){this.__ownChange||this.dispatchEvent(new CustomEvent("legacy-filter-changed",{detail:{name:this.name,state:this.legacyFilterToState(e)},bubbles:!0}))}legacyFilterToState(e){return{filter:e}}getFilterFn(){}getString(e,i){return it(e,i)}toXlsxValue(e,i){return Um(e,i)}cellTitleFn(e,i){return it(e,i)}serializeFilter(e,i){return Gm(e,i)}deserializeFilter(e,i){return i==null?null:typeof i=="string"?window.decodeURIComponent(i):i}getComparableValue(e,i){return Km(e,i)}computeSource(e,i){return i}_propertiesChanged(e,i,n){super._propertiesChanged(e,i,n),this.dispatchEvent(new CustomEvent("cosmoz-column-prop-changed",{bubbles:!0}))}},Ym=t=>e=>t(i=>{if(i.inputValue===void 0&&e.target.value==="")return i;clearTimeout(i.t);const n=setTimeout(()=>t(o=>({...o,filter:o.inputValue})),1e3);return{...i,inputValue:e.target.value,t:n}}),Jm=t=>()=>t(e=>({...e,filter:e.inputValue})),Xm=t=>e=>{e.keyCode===13&&(e.preventDefault(),t(i=>({...i,filter:i.inputValue})))},Zm=t=>e=>t(i=>({...i,headerFocused:e.detail.value})),Qm=t=>()=>t(e=>({...e,filter:null,inputValue:null})),ef=t=>t!=null&&t!=="";class tf extends ze(G){static get properties(){return{minWidth:{type:String,value:"55px"},editMinWidth:{type:String,value:"55px"},inputValue:{type:Object,notify:!0}}}getFilterFn(e,i){if(!(i==null||i===""))return Wm(e,i)}renderCell(e,{item:i}){return _`<span class="default-column">${it(e,i)}</span>`}renderEditCell(e,{item:i},n){return _`<cosmoz-input
			no-label-float
			type="text"
			@change=${r=>n(r.target.value)}
			.value=${it(e,i)}
		></cosmoz-input>`}renderHeader(e,{filter:i,inputValue:n,headerFocused:o},r){return _`<cosmoz-input
			label=${e.title}
			.value=${n??i}
			@value-changed=${Ym(r)}
			focused=${o}
			@focused-changed=${Zm(r)}
			@keydown=${Xm(r)}
			@blur=${Jm(r)}
		>
			<cosmoz-clear-button
				suffix
				slot="suffix"
				?visible=${ef(i)}
				light
				@click=${Qm(r)}
			></cosmoz-clear-button>
		</cosmoz-input>`}legacyFilterToState(e){return{filter:e,inputValue:e}}}customElements.define("cosmoz-omnitable-column",tf);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var cs={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},nf={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},us={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},of=/[a-z0-9*]/,rf=/U\+/,af=/^arrow/,sf=/^space(bar)?/,lf=/^escape$/;function ds(t,e){var i="";if(t){var n=t.toLowerCase();n===" "||sf.test(n)?i="space":lf.test(n)?i="esc":n.length==1?(!e||of.test(n))&&(i=n):af.test(n)?i=n.replace("arrow",""):n=="multiply"?i="*":i=n}return i}function cf(t){var e="";return t&&(t in cs?e=cs[t]:rf.test(t)?(t=parseInt(t.replace("U+","0x"),16),e=String.fromCharCode(t).toLowerCase()):e=t.toLowerCase()),e}function uf(t){var e="";return Number(t)&&(t>=65&&t<=90?e=String.fromCharCode(32+t):t>=112&&t<=123?e="f"+(t-112+1):t>=48&&t<=57?e=String(t-48):t>=96&&t<=105?e=String(t-96):e=nf[t]),e}function df(t,e){return t.key?ds(t.key,e):t.detail&&t.detail.key?ds(t.detail.key,e):cf(t.keyIdentifier)||uf(t.keyCode)||""}function ps(t,e){var i=df(e,t.hasModifiers);return i===t.key&&(!t.hasModifiers||!!e.shiftKey==!!t.shiftKey&&!!e.ctrlKey==!!t.ctrlKey&&!!e.altKey==!!t.altKey&&!!e.metaKey==!!t.metaKey)}function pf(t){return t.length===1?{combo:t,key:t,event:"keydown"}:t.split("+").reduce(function(e,i){var n=i.split(":"),o=n[0],r=n[1];return o in us?(e[us[o]]=!0,e.hasModifiers=!0):(e.key=o,e.event=r||"keydown"),e},{combo:t.split(":").shift()})}function hs(t){return t.trim().split(" ").map(function(e){return pf(e)})}const nt={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(t,e){this._imperativeKeyBindings[t]=e,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(t,e){for(var i=hs(e),n=0;n<i.length;++n)if(ps(i[n],t))return!0;return!1},_collectKeyBindings:function(){var t=this.behaviors.map(function(e){return e.keyBindings});return t.indexOf(this.keyBindings)===-1&&t.push(this.keyBindings),t},_prepKeyBindings:function(){this._keyBindings={},this._collectKeyBindings().forEach(function(i){for(var n in i)this._addKeyBinding(n,i[n])},this);for(var t in this._imperativeKeyBindings)this._addKeyBinding(t,this._imperativeKeyBindings[t]);for(var e in this._keyBindings)this._keyBindings[e].sort(function(i,n){var o=i[0].hasModifiers,r=n[0].hasModifiers;return o===r?0:o?-1:1})},_addKeyBinding:function(t,e){hs(t).forEach(function(i){this._keyBindings[i.event]=this._keyBindings[i.event]||[],this._keyBindings[i.event].push([i,e])},this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach(function(t){var e=this._keyBindings[t],i=this._onKeyBindingEvent.bind(this,e);this._boundKeyHandlers.push([this.keyEventTarget,t,i]),this.keyEventTarget.addEventListener(t,i)},this)},_unlistenKeyEventListeners:function(){for(var t,e,i,n;this._boundKeyHandlers.length;)t=this._boundKeyHandlers.pop(),e=t[0],i=t[1],n=t[2],e.removeEventListener(i,n)},_onKeyBindingEvent:function(t,e){if(this.stopKeyboardEventPropagation&&e.stopPropagation(),!e.defaultPrevented)for(var i=0;i<t.length;i++){var n=t[i][0],o=t[i][1];if(ps(n,e)&&(this._triggerKeyHandler(n,o,e),e.defaultPrevented))return}},_triggerKeyHandler:function(t,e,i){var n=Object.create(t);n.keyboardEvent=i;var o=new CustomEvent(t.event,{detail:n,cancelable:!0});this[e].call(this,o),o.defaultPrevented&&i.preventDefault()}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Ae=W({_template:U`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},timeout:{type:Number,value:150},_text:{type:String,value:""}},created:function(){Ae.instance||(Ae.instance=this),document.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(t){this._text="",this.async(function(){this._text=t},this.timeout)},_onIronAnnounce:function(t){t.detail&&t.detail.text&&this.announce(t.detail.text)}});Ae.instance=null;Ae.requestAvailability=function(){Ae.instance||(Ae.instance=document.createElement("iron-a11y-announcer")),document.body?document.body.appendChild(Ae.instance):document.addEventListener("load",function(){document.body.appendChild(Ae.instance)})};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/let _o=null;const nr={properties:{validator:{type:String},invalid:{notify:!0,reflectToAttribute:!0,type:Boolean,value:!1,observer:"_invalidChanged"}},registered:function(){_o=new re({type:"validator"})},_invalidChanged:function(){this.invalid?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")},get _validator(){return _o&&_o.byKey(this.validator)},hasValidator:function(){return this._validator!=null},validate:function(t){return t===void 0&&this.value!==void 0?this.invalid=!this._getValidity(this.value):this.invalid=!this._getValidity(t),!this.invalid},_getValidity:function(t){return this.hasValidator()?this._validator.validate(t):!0}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/W({_template:U`
    <style>
      :host {
        display: inline-block;
      }
    </style>
    <slot id="content"></slot>
`,is:"iron-input",behaviors:[nr],properties:{bindValue:{type:String,value:""},value:{type:String,computed:"_computeValue(bindValue)"},allowedPattern:{type:String},autoValidate:{type:Boolean,value:!1},_inputElement:Object},observers:["_bindValueChanged(bindValue, _inputElement)"],listeners:{input:"_onInput",keypress:"_onKeypress"},created:function(){Ae.requestAvailability(),this._previousValidInput="",this._patternAlreadyChecked=!1},attached:function(){this._observer=O(this).observeNodes((function(t){this._initSlottedInput()}).bind(this))},detached:function(){this._observer&&(O(this).unobserveNodes(this._observer),this._observer=null)},get inputElement(){return this._inputElement},_initSlottedInput:function(){this._inputElement=this.getEffectiveChildren()[0],this.inputElement&&this.inputElement.value&&(this.bindValue=this.inputElement.value),this.fire("iron-input-ready")},get _patternRegExp(){var t;if(this.allowedPattern)t=new RegExp(this.allowedPattern);else switch(this.inputElement.type){case"number":t=/[0-9.,e-]/;break}return t},_bindValueChanged:function(t,e){e&&(t===void 0?e.value=null:t!==e.value&&(this.inputElement.value=t),this.autoValidate&&this.validate(),this.fire("bind-value-changed",{value:t}))},_onInput:function(){if(this.allowedPattern&&!this._patternAlreadyChecked){var t=this._checkPatternValidity();t||(this._announceInvalidCharacter("Invalid string of characters not entered."),this.inputElement.value=this._previousValidInput)}this.bindValue=this._previousValidInput=this.inputElement.value,this._patternAlreadyChecked=!1},_isPrintable:function(t){var e=t.keyCode==8||t.keyCode==9||t.keyCode==13||t.keyCode==27,i=t.keyCode==19||t.keyCode==20||t.keyCode==45||t.keyCode==46||t.keyCode==144||t.keyCode==145||t.keyCode>32&&t.keyCode<41||t.keyCode>111&&t.keyCode<124;return!e&&!(t.charCode==0&&i)},_onKeypress:function(t){if(!(!this.allowedPattern&&this.inputElement.type!=="number")){var e=this._patternRegExp;if(e&&!(t.metaKey||t.ctrlKey||t.altKey)){this._patternAlreadyChecked=!0;var i=String.fromCharCode(t.charCode);this._isPrintable(t)&&!e.test(i)&&(t.preventDefault(),this._announceInvalidCharacter("Invalid character "+i+" not entered."))}}},_checkPatternValidity:function(){var t=this._patternRegExp;if(!t)return!0;for(var e=0;e<this.inputElement.value.length;e++)if(!t.test(this.inputElement.value[e]))return!1;return!0},validate:function(){if(!this.inputElement)return this.invalid=!1,!0;var t=this.inputElement.checkValidity();return t&&(this.required&&this.bindValue===""?t=!1:this.hasValidator()&&(t=nr.validate.call(this,this.bindValue))),this.invalid=!t,this.fire("iron-input-validate"),t},_announceInvalidCharacter:function(t){this.fire("iron-announce",{text:t})},_computeValue:function(t){return t}});/**
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
*/const Fc=U`<custom-style>
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
</custom-style>`;Fc.setAttribute("style","display: none;");document.head.appendChild(Fc.content);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Vc={attached:function(){this.fire("addon-attached")},update:function(t){}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/W({_template:U`
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
`,is:"paper-input-char-counter",behaviors:[Vc],properties:{_charCounterStr:{type:String,value:"0"}},update:function(t){if(t.inputElement){t.value=t.value||"";var e=t.value.toString().length.toString();t.inputElement.hasAttribute("maxlength")&&(e+="/"+t.inputElement.getAttribute("maxlength")),this._charCounterStr=e}}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Rc=U`
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
`;Rc.setAttribute("style","display: none;");document.head.appendChild(Rc.content);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Dc=U`
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
</custom-style>`;Dc.setAttribute("style","display: none;");document.head.appendChild(Dc.content);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const qc=U`
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
`;qc.setAttribute("style","display: none;");document.head.appendChild(qc.content);W({_template:U`
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
`,is:"paper-input-container",properties:{noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},attrForValue:{type:String,value:"bind-value"},autoValidate:{type:Boolean,value:!1},invalid:{observer:"_invalidChanged",type:Boolean,value:!1},focused:{readOnly:!0,type:Boolean,value:!1,notify:!0},_addons:{type:Array},_inputHasContent:{type:Boolean,value:!1},_inputSelector:{type:String,value:"input,iron-input,textarea,.paper-input-input"},_boundOnFocus:{type:Function,value:function(){return this._onFocus.bind(this)}},_boundOnBlur:{type:Function,value:function(){return this._onBlur.bind(this)}},_boundOnInput:{type:Function,value:function(){return this._onInput.bind(this)}},_boundValueChanged:{type:Function,value:function(){return this._onValueChanged.bind(this)}}},listeners:{"addon-attached":"_onAddonAttached","iron-input-validate":"_onIronInputValidate"},get _valueChangedEvent(){return this.attrForValue+"-changed"},get _propertyForValue(){return mr(this.attrForValue)},get _inputElement(){return O(this).querySelector(this._inputSelector)},get _inputElementValue(){return this._inputElement[this._propertyForValue]||this._inputElement.value},ready:function(){this.__isFirstValueUpdate=!0,this._addons||(this._addons=[]),this.addEventListener("focus",this._boundOnFocus,!0),this.addEventListener("blur",this._boundOnBlur,!0)},attached:function(){this.attrForValue?this._inputElement.addEventListener(this._valueChangedEvent,this._boundValueChanged):this.addEventListener("input",this._onInput),this._inputElementValue&&this._inputElementValue!=""?this._handleValueAndAutoValidate(this._inputElement):this._handleValue(this._inputElement)},_onAddonAttached:function(t){this._addons||(this._addons=[]);var e=t.target;this._addons.indexOf(e)===-1&&(this._addons.push(e),this.isAttached&&this._handleValue(this._inputElement))},_onFocus:function(){this._setFocused(!0)},_onBlur:function(){this._setFocused(!1),this._handleValueAndAutoValidate(this._inputElement)},_onInput:function(t){this._handleValueAndAutoValidate(t.target)},_onValueChanged:function(t){var e=t.target;this.__isFirstValueUpdate&&(this.__isFirstValueUpdate=!1,e.value===void 0||e.value==="")||this._handleValueAndAutoValidate(t.target)},_handleValue:function(t){var e=this._inputElementValue;e||e===0||t.type==="number"&&!t.checkValidity()?this._inputHasContent=!0:this._inputHasContent=!1,this.updateAddons({inputElement:t,value:e,invalid:this.invalid})},_handleValueAndAutoValidate:function(t){if(this.autoValidate&&t){var e;t.validate?e=t.validate(this._inputElementValue):e=t.checkValidity(),this.invalid=!e}this._handleValue(t)},_onIronInputValidate:function(t){this.invalid=this._inputElement.invalid},_invalidChanged:function(){this._addons&&this.updateAddons({invalid:this.invalid})},updateAddons:function(t){for(var e,i=0;e=this._addons[i];i++)e.update(t)},_computeInputContentClass:function(t,e,i,n,o){var r="input-content";if(t)o&&(r+=" label-is-hidden"),n&&(r+=" is-invalid");else{var a=this.querySelector("label");e||o?(r+=" label-is-floating",this.$.labelAndInputContainer.style.position="static",n?r+=" is-invalid":i&&(r+=" label-is-highlighted")):(a&&(this.$.labelAndInputContainer.style.position="relative"),n&&(r+=" is-invalid"))}return i&&(r+=" focused"),r},_computeUnderlineClass:function(t,e){var i="underline";return e?i+=" is-invalid":t&&(i+=" is-highlighted"),i},_computeAddOnContentClass:function(t,e){var i="add-on-content";return e?i+=" is-invalid":t&&(i+=" is-highlighted"),i}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/W({_template:U`
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
`,is:"paper-input-error",behaviors:[Vc],properties:{invalid:{readOnly:!0,reflectToAttribute:!0,type:Boolean}},update:function(t){this._setInvalid(t.invalid)}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Bc={properties:{name:{type:String},value:{notify:!0,type:String},required:{type:Boolean,value:!1}},attached:function(){},detached:function(){}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Ct={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0),this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(t){this._setFocused(t.type==="focus")},_disabledChanged:function(t,e){this.setAttribute("aria-disabled",t?"true":"false"),this.style.pointerEvents=t?"none":"",t?(this._oldTabIndex=this.getAttribute("tabindex"),this._setFocused(!1),this.tabIndex=-1,this.blur()):this._oldTabIndex!==void 0&&(this._oldTabIndex===null?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const mt={};mt.NextLabelID=1;mt.NextAddonID=1;mt.NextInputID=1;const hf={properties:{label:{type:String},value:{notify:!0,type:String},disabled:{type:Boolean,value:!1},invalid:{type:Boolean,value:!1,notify:!0},allowedPattern:{type:String},type:{type:String},list:{type:String},pattern:{type:String},required:{type:Boolean,value:!1},errorMessage:{type:String},charCounter:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},autoValidate:{type:Boolean,value:!1},validator:{type:String},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,observer:"_autofocusChanged"},inputmode:{type:String},minlength:{type:Number},maxlength:{type:Number},min:{type:String},max:{type:String},step:{type:String},name:{type:String},placeholder:{type:String,value:""},readonly:{type:Boolean,value:!1},size:{type:Number},autocapitalize:{type:String,value:"none"},autocorrect:{type:String,value:"off"},autosave:{type:String},results:{type:Number},accept:{type:String},multiple:{type:Boolean},_ariaDescribedBy:{type:String,value:""},_ariaLabelledBy:{type:String,value:""},_inputId:{type:String,value:""}},listeners:{"addon-attached":"_onAddonAttached"},keyBindings:{"shift+tab:keydown":"_onShiftTabDown"},hostAttributes:{tabindex:0},get inputElement(){return this.$||(this.$={}),this.$.input||(this._generateInputId(),this.$.input=this.$$("#"+this._inputId)),this.$.input},get _focusableElement(){return this.inputElement},created:function(){this._typesThatHaveText=["date","datetime","datetime-local","month","time","week","file"]},attached:function(){this._updateAriaLabelledBy(),!G&&this.inputElement&&this._typesThatHaveText.indexOf(this.inputElement.type)!==-1&&(this.alwaysFloatLabel=!0)},_appendStringWithSpace:function(t,e){return t?t=t+" "+e:t=e,t},_onAddonAttached:function(t){var e=O(t).rootTarget;if(e.id)this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,e.id);else{var i="paper-input-add-on-"+mt.NextAddonID++;e.id=i,this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,i)}},validate:function(){return this.inputElement.validate()},_focusBlurHandler:function(t){Ct._focusBlurHandler.call(this,t),this.focused&&!this._shiftTabPressed&&this._focusableElement&&this._focusableElement.focus()},_onShiftTabDown:function(t){var e=this.getAttribute("tabindex");this._shiftTabPressed=!0,this.setAttribute("tabindex","-1"),this.async(function(){this.setAttribute("tabindex",e),this._shiftTabPressed=!1},1)},_handleAutoValidate:function(){this.autoValidate&&this.validate()},updateValueAndPreserveCaret:function(t){try{var e=this.inputElement.selectionStart;this.value=t,this.inputElement.selectionStart=e,this.inputElement.selectionEnd=e}catch{this.value=t}},_computeAlwaysFloatLabel:function(t,e){return e||t},_updateAriaLabelledBy:function(){var t=O(this.root).querySelector("label");if(!t){this._ariaLabelledBy="";return}var e;t.id?e=t.id:(e="paper-input-label-"+mt.NextLabelID++,t.id=e),this._ariaLabelledBy=e},_generateInputId:function(){(!this._inputId||this._inputId==="")&&(this._inputId="input-"+mt.NextInputID++)},_onChange:function(t){this.shadowRoot&&this.fire(t.type,{sourceEvent:t},{node:this,bubbles:t.bubbles,cancelable:t.cancelable})},_autofocusChanged:function(){if(this.autofocus&&this._focusableElement){var t=document.activeElement,e=t instanceof HTMLElement,i=e&&t!==document.body&&t!==document.documentElement;i||this._focusableElement.focus()}}},mf=[Ct,nt,hf];/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/W({is:"paper-input",_template:U`
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
  `,behaviors:[mf,Bc],properties:{value:{type:String},inputRole:{type:String,value:void 0},inputAriaHaspopup:{type:String,value:void 0}},get _focusableElement(){return this.inputElement._inputElement},listeners:{"iron-input-ready":"_onIronInputReady"},_onIronInputReady:function(){this.$.nativeInput||(this.$.nativeInput=this.$$("input")),this.inputElement&&this._typesThatHaveText.indexOf(this.$.nativeInput.type)!==-1&&(this.alwaysFloatLabel=!0),this.inputElement.bindValue&&this.$.container._handleValueAndAutoValidate(this.inputElement)}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/let Ti;const ff=()=>{if(Ti!==void 0)return Ti;const t=document.createElement("div");Object.assign(t.style,{overflow:"auto",position:"fixed",left:"0px",top:"0px",maxWidth:"100px",maxHeight:"100px"});const e=document.createElement("div");return e.style.width="200px",e.style.height="200px",t.appendChild(e),document.body.appendChild(t),Ti=Math.abs(t.offsetWidth-100)>1?t.offsetWidth-t.clientWidth:0,document.body.removeChild(t),Ti},gf={properties:{sizingTarget:{type:Object,value:function(){return this}},fitInto:{type:Object,value:window},noOverlap:{type:Boolean},positionTarget:{type:Element},horizontalAlign:{type:String},verticalAlign:{type:String},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},autoFitOnAttach:{type:Boolean,value:!1},expandSizingTargetForScrollbars:{type:Boolean,value:!1},_fitInfo:{type:Object}},get _fitWidth(){var t;return this.fitInto===window?t=this.fitInto.innerWidth:t=this.fitInto.getBoundingClientRect().width,t},get _fitHeight(){var t;return this.fitInto===window?t=this.fitInto.innerHeight:t=this.fitInto.getBoundingClientRect().height,t},get _fitLeft(){var t;return this.fitInto===window?t=0:t=this.fitInto.getBoundingClientRect().left,t},get _fitTop(){var t;return this.fitInto===window?t=0:t=this.fitInto.getBoundingClientRect().top,t},get _defaultPositionTarget(){var t=O(this).parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&(t=t.host),t},get _localeHorizontalAlign(){if(this._isRTL){if(this.horizontalAlign==="right")return"left";if(this.horizontalAlign==="left")return"right"}return this.horizontalAlign},get __shouldPosition(){return(this.horizontalAlign||this.verticalAlign)&&this.positionTarget},get _isRTL(){return typeof this._memoizedIsRTL>"u"&&(this._memoizedIsRTL=window.getComputedStyle(this).direction=="rtl"),this._memoizedIsRTL},attached:function(){this.positionTarget=this.positionTarget||this._defaultPositionTarget,this.autoFitOnAttach&&(window.getComputedStyle(this).display==="none"?setTimeout((function(){this.fit()}).bind(this)):(window.ShadyDOM&&ShadyDOM.flush(),this.fit()))},detached:function(){this.__deferredFit&&(clearTimeout(this.__deferredFit),this.__deferredFit=null)},fit:function(){this.position(),this.constrain(),this.center()},_discoverInfo:function(){if(!this._fitInfo){var t=window.getComputedStyle(this),e=window.getComputedStyle(this.sizingTarget);this._fitInfo={inlineStyle:{top:this.style.top||"",left:this.style.left||"",position:this.style.position||""},sizerInlineStyle:{maxWidth:this.sizingTarget.style.maxWidth||"",maxHeight:this.sizingTarget.style.maxHeight||"",boxSizing:this.sizingTarget.style.boxSizing||""},positionedBy:{vertically:t.top!=="auto"?"top":t.bottom!=="auto"?"bottom":null,horizontally:t.left!=="auto"?"left":t.right!=="auto"?"right":null},sizedBy:{height:e.maxHeight!=="none",width:e.maxWidth!=="none",minWidth:parseInt(e.minWidth,10)||0,minHeight:parseInt(e.minHeight,10)||0},margin:{top:parseInt(t.marginTop,10)||0,right:parseInt(t.marginRight,10)||0,bottom:parseInt(t.marginBottom,10)||0,left:parseInt(t.marginLeft,10)||0}}}},resetFit:function(){var t=this._fitInfo||{};for(var e in t.sizerInlineStyle)this.sizingTarget.style[e]=t.sizerInlineStyle[e];for(var e in t.inlineStyle)this.style[e]=t.inlineStyle[e];this._fitInfo=null},refit:function(){var t=this.sizingTarget.scrollLeft,e=this.sizingTarget.scrollTop;this.resetFit(),this.fit(),this.sizingTarget.scrollLeft=t,this.sizingTarget.scrollTop=e},position:function(){if(!this.__shouldPosition)return;this._discoverInfo(),window.ShadyDOM&&window.ShadyDOM.flush(),this.style.position="fixed",this.sizingTarget.style.boxSizing="border-box",this.style.left="0px",this.style.top="0px";var t=this.getBoundingClientRect(),e=this.__getNormalizedRect(this.positionTarget),i=this.__getNormalizedRect(this.fitInto);let n,o,r,a;this.expandSizingTargetForScrollbars&&(n=this.sizingTarget.offsetWidth,o=this.sizingTarget.offsetHeight,r=this.sizingTarget.clientWidth,a=this.sizingTarget.clientHeight);var s=this._fitInfo.margin,l={width:t.width+s.left+s.right,height:t.height+s.top+s.bottom},c=this.__getPosition(this._localeHorizontalAlign,this.verticalAlign,l,t,e,i),u=c.left+s.left,d=c.top+s.top,p=Math.min(i.right-s.right,u+t.width),h=Math.min(i.bottom-s.bottom,d+t.height);u=Math.max(i.left+s.left,Math.min(u,p-this._fitInfo.sizedBy.minWidth)),d=Math.max(i.top+s.top,Math.min(d,h-this._fitInfo.sizedBy.minHeight));const m=Math.max(p-u,this._fitInfo.sizedBy.minWidth),f=Math.max(h-d,this._fitInfo.sizedBy.minHeight);this.sizingTarget.style.maxWidth=m+"px",this.sizingTarget.style.maxHeight=f+"px";const b=u-t.left,v=d-t.top;if(this.style.left=`${b}px`,this.style.top=`${v}px`,this.expandSizingTargetForScrollbars){const g=this.sizingTarget.offsetHeight,x=this.sizingTarget.clientHeight,y=o-a,z=g-x-y;if(z>0){const ie=i.height-s.top-s.bottom,X=Math.min(ie,f+z);this.sizingTarget.style.maxHeight=`${X}px`;const B=this.sizingTarget.offsetHeight,j=B-g;let K;c.verticalAlign==="top"?K=v:c.verticalAlign==="middle"?K=v-j/2:c.verticalAlign==="bottom"&&(K=v-j),K=Math.max(i.top+s.top,Math.min(K,i.bottom-s.bottom-B)),this.style.top=`${K}px`}const C=this.sizingTarget.offsetWidth,E=this.sizingTarget.clientWidth,T=n-r,Y=C-E-T;if(Y>0){const ie=ff(),X=i.width-s.left-s.right,B=Math.min(X,m+Y-ie);this.sizingTarget.style.maxWidth=`${B}px`;const j=this.sizingTarget.offsetWidth+ie,K=j-C;let P;c.horizontalAlign==="left"?P=b:c.horizontalAlign==="center"?P=b-K/2:c.horizontalAlign==="right"&&(P=b-K),P=Math.max(i.left+s.left,Math.min(P,i.right-s.right-j)),this.style.left=`${P}px`}}},constrain:function(){if(!this.__shouldPosition){this._discoverInfo();var t=this._fitInfo;t.positionedBy.vertically||(this.style.position="fixed",this.style.top="0px"),t.positionedBy.horizontally||(this.style.position="fixed",this.style.left="0px"),this.sizingTarget.style.boxSizing="border-box";var e=this.getBoundingClientRect();t.sizedBy.height||this.__sizeDimension(e,t.positionedBy.vertically,"top","bottom","Height"),t.sizedBy.width||this.__sizeDimension(e,t.positionedBy.horizontally,"left","right","Width")}},_sizeDimension:function(t,e,i,n,o){this.__sizeDimension(t,e,i,n,o)},__sizeDimension:function(t,e,i,n,o){var r=this._fitInfo,a=this.__getNormalizedRect(this.fitInto),s=o==="Width"?a.width:a.height,l=e===n,c=l?s-t[n]:t[i],u=r.margin[l?i:n],d="offset"+o,p=this[d]-this.sizingTarget[d];this.sizingTarget.style["max"+o]=s-u-c-p+"px"},center:function(){if(!this.__shouldPosition){this._discoverInfo();var t=this._fitInfo.positionedBy;if(!(t.vertically&&t.horizontally)){this.style.position="fixed",t.vertically||(this.style.top="0px"),t.horizontally||(this.style.left="0px");var e=this.getBoundingClientRect(),i=this.__getNormalizedRect(this.fitInto);if(!t.vertically){var n=i.top-e.top+(i.height-e.height)/2;this.style.top=n+"px"}if(!t.horizontally){var o=i.left-e.left+(i.width-e.width)/2;this.style.left=o+"px"}}}},__getNormalizedRect:function(t){return t===document.documentElement||t===window?{top:0,left:0,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth,bottom:window.innerHeight}:t.getBoundingClientRect()},__getOffscreenArea:function(t,e,i){var n=Math.min(0,t.top)+Math.min(0,i.bottom-(t.top+e.height)),o=Math.min(0,t.left)+Math.min(0,i.right-(t.left+e.width));return Math.abs(n)*e.width+Math.abs(o)*e.height},__getPosition:function(t,e,i,n,o,r){var a=[{verticalAlign:"top",horizontalAlign:"left",top:o.top+this.verticalOffset,left:o.left+this.horizontalOffset},{verticalAlign:"top",horizontalAlign:"right",top:o.top+this.verticalOffset,left:o.right-i.width-this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"left",top:o.bottom-i.height-this.verticalOffset,left:o.left+this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"right",top:o.bottom-i.height-this.verticalOffset,left:o.right-i.width-this.horizontalOffset}];if(this.noOverlap){for(var s=0,l=a.length;s<l;s++){var c={};for(var u in a[s])c[u]=a[s][u];a.push(c)}a[0].top=a[1].top+=o.height,a[2].top=a[3].top-=o.height,a[4].left=a[6].left+=o.width,a[5].left=a[7].left-=o.width}e=e==="auto"?null:e,t=t==="auto"?null:t,(!t||t==="center")&&(a.push({verticalAlign:"top",horizontalAlign:"center",top:o.top+this.verticalOffset+(this.noOverlap?o.height:0),left:o.left-n.width/2+o.width/2+this.horizontalOffset}),a.push({verticalAlign:"bottom",horizontalAlign:"center",top:o.bottom-i.height-this.verticalOffset-(this.noOverlap?o.height:0),left:o.left-n.width/2+o.width/2+this.horizontalOffset})),(!e||e==="middle")&&(a.push({verticalAlign:"middle",horizontalAlign:"left",top:o.top-n.height/2+o.height/2+this.verticalOffset,left:o.left+this.horizontalOffset+(this.noOverlap?o.width:0)}),a.push({verticalAlign:"middle",horizontalAlign:"right",top:o.top-n.height/2+o.height/2+this.verticalOffset,left:o.right-i.width-this.horizontalOffset-(this.noOverlap?o.width:0)})),e==="middle"&&t==="center"&&a.push({verticalAlign:"middle",horizontalAlign:"center",top:o.top-n.height/2+o.height/2+this.verticalOffset,left:o.left-n.width/2+o.width/2+this.horizontalOffset});for(var d,s=0;s<a.length;s++){var p=a[s],h=p.verticalAlign===e,m=p.horizontalAlign===t;if(!this.dynamicAlign&&!this.noOverlap&&h&&m){d=p;break}var f=(!e||h)&&(!t||m);if(!(!this.dynamicAlign&&!f)){if(p.offscreenArea=this.__getOffscreenArea(p,i,r),p.offscreenArea===0&&f){d=p;break}d=d||p;var b=p.offscreenArea-d.offscreenArea;(b<0||b===0&&(h||m))&&(d=p)}}return d}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var Pi=new Set;const bf={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(Pi.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach(function(t){this.resizerShouldNotify(t)&&this._notifyDescendant(t)},this),this._fireResize())},assignParentResizable:function(t){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=t,t&&t._interestedResizables.indexOf(this)===-1&&(t._interestedResizables.push(this),t._subscribeIronResize(this))},stopResizeNotificationsFor:function(t){var e=this._interestedResizables.indexOf(t);e>-1&&(this._interestedResizables.splice(e,1),this._unsubscribeIronResize(t))},_subscribeIronResize:function(t){t.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(t){t.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(t){return!0},_onDescendantIronResize:function(t){if(this._notifyingDescendant){t.stopPropagation();return}Nn||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(t){var e=O(t).rootTarget;e!==this&&(e.assignParentResizable(this),this._notifyDescendant(e),t.stopPropagation())},_parentResizableChanged:function(t){t&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(t){this.isAttached&&(this._notifyingDescendant=!0,t.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if(document.readyState==="loading"){var t=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",function e(){document.removeEventListener("readystatechange",e),t()})}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach(function(e){e!==this&&e._findParent()},this):(Pi.forEach(function(e){e!==this&&e._findParent()},this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?Pi.delete(this):Pi.add(this)}};/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var at=Element.prototype,Ii=at.matches||at.matchesSelector||at.mozMatchesSelector||at.msMatchesSelector||at.oMatchesSelector||at.webkitMatchesSelector;class vf{getTabbableNodes(e){var i=[],n=this._collectTabbableNodes(e,i);return n?this._sortByTabIndex(i):i}isFocusable(e){return Ii.call(e,"input, select, textarea, button, object")?Ii.call(e,":not([disabled])"):Ii.call(e,"a[href], area[href], iframe, [tabindex], [contentEditable]")}isTabbable(e){return this.isFocusable(e)&&Ii.call(e,':not([tabindex="-1"])')&&this._isVisible(e)}_normalizedTabIndex(e){if(this.isFocusable(e)){var i=e.getAttribute("tabindex")||0;return Number(i)}return-1}_collectTabbableNodes(e,i){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var n=e;if(!this._isVisible(n))return!1;var o=this._normalizedTabIndex(n),r=o>0;o>=0&&i.push(n);var a;n.localName==="content"||n.localName==="slot"?a=O(n).getDistributedNodes():a=O(n.root||n).children;for(var s=0;s<a.length;s++)r=this._collectTabbableNodes(a[s],i)||r;return r}_isVisible(e){var i=e.style;return i.visibility!=="hidden"&&i.display!=="none"?(i=window.getComputedStyle(e),i.visibility!=="hidden"&&i.display!=="none"):!1}_sortByTabIndex(e){var i=e.length;if(i<2)return e;var n=Math.ceil(i/2),o=this._sortByTabIndex(e.slice(0,n)),r=this._sortByTabIndex(e.slice(n));return this._mergeSortByTabIndex(o,r)}_mergeSortByTabIndex(e,i){for(var n=[];e.length>0&&i.length>0;)this._hasLowerTabOrder(e[0],i[0])?n.push(i.shift()):n.push(e.shift());return n.concat(e,i)}_hasLowerTabOrder(e,i){var n=Math.max(e.tabIndex,0),o=Math.max(i.tabIndex,0);return n===0||o===0?o>n:n>o}}const yf=new vf;/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/W({_template:U`
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
`,is:"iron-overlay-backdrop",properties:{opened:{reflectToAttribute:!0,type:Boolean,value:!1,observer:"_openedChanged"}},listeners:{transitionend:"_onTransitionend"},created:function(){this.__openedRaf=null},attached:function(){this.opened&&this._openedChanged(this.opened)},prepare:function(){this.opened&&!this.parentNode&&O(document.body).appendChild(this)},open:function(){this.opened=!0},close:function(){this.opened=!1},complete:function(){!this.opened&&this.parentNode===document.body&&O(this.parentNode).removeChild(this)},_onTransitionend:function(t){t&&t.target===this&&this.complete()},_openedChanged:function(t){if(t)this.prepare();else{var e=window.getComputedStyle(this);(e.transitionDuration==="0s"||e.opacity==0)&&this.complete()}this.isAttached&&(this.__openedRaf&&(window.cancelAnimationFrame(this.__openedRaf),this.__openedRaf=null),this.scrollTop=this.scrollTop,this.__openedRaf=window.requestAnimationFrame((function(){this.__openedRaf=null,this.toggleClass("opened",this.opened)}).bind(this)))}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class _f{constructor(){this._overlays=[],this._minimumZ=101,this._backdropElement=null,hc(document.documentElement,"tap",function(){}),document.addEventListener("tap",this._onCaptureClick.bind(this),!0),document.addEventListener("focus",this._onCaptureFocus.bind(this),!0),document.addEventListener("keydown",this._onCaptureKeyDown.bind(this),!0)}get backdropElement(){return this._backdropElement||(this._backdropElement=document.createElement("iron-overlay-backdrop")),this._backdropElement}get deepActiveElement(){var e=document.activeElement;for((!e||!(e instanceof Element))&&(e=document.body);e.root&&O(e.root).activeElement;)e=O(e.root).activeElement;return e}_bringOverlayAtIndexToFront(e){var i=this._overlays[e];if(i){var n=this._overlays.length-1,o=this._overlays[n];if(o&&this._shouldBeBehindOverlay(i,o)&&n--,!(e>=n)){var r=Math.max(this.currentOverlayZ(),this._minimumZ);for(this._getZ(i)<=r&&this._applyOverlayZ(i,r);e<n;)this._overlays[e]=this._overlays[e+1],e++;this._overlays[n]=i}}}addOrRemoveOverlay(e){e.opened?this.addOverlay(e):this.removeOverlay(e)}addOverlay(e){var i=this._overlays.indexOf(e);if(i>=0){this._bringOverlayAtIndexToFront(i),this.trackBackdrop();return}var n=this._overlays.length,o=this._overlays[n-1],r=Math.max(this._getZ(o),this._minimumZ),a=this._getZ(e);if(o&&this._shouldBeBehindOverlay(e,o)){this._applyOverlayZ(o,r),n--;var s=this._overlays[n-1];r=Math.max(this._getZ(s),this._minimumZ)}a<=r&&this._applyOverlayZ(e,r),this._overlays.splice(n,0,e),this.trackBackdrop()}removeOverlay(e){var i=this._overlays.indexOf(e);i!==-1&&(this._overlays.splice(i,1),this.trackBackdrop())}currentOverlay(){var e=this._overlays.length-1;return this._overlays[e]}currentOverlayZ(){return this._getZ(this.currentOverlay())}ensureMinimumZ(e){this._minimumZ=Math.max(this._minimumZ,e)}focusOverlay(){var e=this.currentOverlay();e&&e._applyFocus()}trackBackdrop(){var e=this._overlayWithBackdrop();!e&&!this._backdropElement||(this.backdropElement.style.zIndex=this._getZ(e)-1,this.backdropElement.opened=!!e,this.backdropElement.prepare())}getBackdrops(){for(var e=[],i=0;i<this._overlays.length;i++)this._overlays[i].withBackdrop&&e.push(this._overlays[i]);return e}backdropZ(){return this._getZ(this._overlayWithBackdrop())-1}_overlayWithBackdrop(){for(var e=this._overlays.length-1;e>=0;e--)if(this._overlays[e].withBackdrop)return this._overlays[e]}_getZ(e){var i=this._minimumZ;if(e){var n=Number(e.style.zIndex||window.getComputedStyle(e).zIndex);n===n&&(i=n)}return i}_setZ(e,i){e.style.zIndex=i}_applyOverlayZ(e,i){this._setZ(e,i+2)}_overlayInPath(e){e=e||[];for(var i=0;i<e.length;i++)if(e[i]._manager===this)return e[i]}_onCaptureClick(e){var i=this._overlays.length-1;if(i!==-1)for(var n=O(e).path,o;(o=this._overlays[i])&&this._overlayInPath(n)!==o&&(o._onCaptureClick(e),o.allowClickThrough);)i--}_onCaptureFocus(e){var i=this.currentOverlay();i&&i._onCaptureFocus(e)}_onCaptureKeyDown(e){var i=this.currentOverlay();i&&(nt.keyboardEventMatchesKeys(e,"esc")?i._onCaptureEsc(e):nt.keyboardEventMatchesKeys(e,"tab")&&i._onCaptureTab(e))}_shouldBeBehindOverlay(e,i){return!e.alwaysOnTop&&i.alwaysOnTop}}const xf=new _f;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var An={pageX:0,pageY:0},ms=null,xo=[],En=["wheel","mousewheel","DOMMouseScroll","touchstart","touchmove"],rn,Vr;function wf(t){ve.indexOf(t)>=0||(ve.length===0&&Sf(),ve.push(t),Vr=ve[ve.length-1])}function Cf(t){var e=ve.indexOf(t);e!==-1&&(ve.splice(e,1),Vr=ve[ve.length-1],ve.length===0&&Af())}const ve=[];function zf(t){if(t.cancelable&&Ef(t)&&t.preventDefault(),t.targetTouches){var e=t.targetTouches[0];An.pageX=e.pageX,An.pageY=e.pageY}}function Sf(){rn=rn||zf.bind(void 0);for(var t=0,e=En.length;t<e;t++)document.addEventListener(En[t],rn,{capture:!0,passive:!1})}function Af(){for(var t=0,e=En.length;t<e;t++)document.removeEventListener(En[t],rn,{capture:!0,passive:!1})}function Ef(t){var e=O(t).rootTarget;if(t.type!=="touchmove"&&ms!==e&&(ms=e,xo=Mf(O(t).path)),!xo.length)return!0;if(t.type==="touchstart")return!1;var i=kf(t);return!Lf(xo,i.deltaX,i.deltaY)}function Mf(t){for(var e=[],i=t.indexOf(Vr),n=0;n<=i;n++)if(t[n].nodeType===Node.ELEMENT_NODE){var o=t[n],r=o.style;r.overflow!=="scroll"&&r.overflow!=="auto"&&(r=window.getComputedStyle(o)),(r.overflow==="scroll"||r.overflow==="auto")&&e.push(o)}return e}function Lf(t,e,i){if(!(!e&&!i))for(var n=Math.abs(i)>=Math.abs(e),o=0;o<t.length;o++){var r=t[o],a=!1;if(n?a=i<0?r.scrollTop>0:r.scrollTop<r.scrollHeight-r.clientHeight:a=e<0?r.scrollLeft>0:r.scrollLeft<r.scrollWidth-r.clientWidth,a)return r}}function kf(t){var e={deltaX:t.deltaX,deltaY:t.deltaY};if(!("deltaX"in t)){if("wheelDeltaX"in t&&"wheelDeltaY"in t)e.deltaX=-t.wheelDeltaX,e.deltaY=-t.wheelDeltaY;else if("wheelDelta"in t)e.deltaX=0,e.deltaY=-t.wheelDelta;else if("axis"in t)e.deltaX=t.axis===1?t.detail:0,e.deltaY=t.axis===2?t.detail:0;else if(t.targetTouches){var i=t.targetTouches[0];e.deltaX=An.pageX-i.pageX,e.deltaY=An.pageY-i.pageY}}return e}/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Dt={properties:{opened:{observer:"_openedChanged",type:Boolean,value:!1,notify:!0},canceled:{observer:"_canceledChanged",readOnly:!0,type:Boolean,value:!1},withBackdrop:{observer:"_withBackdropChanged",type:Boolean},noAutoFocus:{type:Boolean,value:!1},noCancelOnEscKey:{type:Boolean,value:!1},noCancelOnOutsideClick:{type:Boolean,value:!1},closingReason:{type:Object},restoreFocusOnClose:{type:Boolean,value:!1},allowClickThrough:{type:Boolean},alwaysOnTop:{type:Boolean},scrollAction:{type:String},_manager:{type:Object,value:xf},_focusedChild:{type:Object}},listeners:{"iron-resize":"_onIronResize"},observers:["__updateScrollObservers(isAttached, opened, scrollAction)"],get backdropElement(){return this._manager.backdropElement},get _focusNode(){return this._focusedChild||O(this).querySelector("[autofocus]")||this},get _focusableNodes(){return yf.getTabbableNodes(this)},ready:function(){this.__isAnimating=!1,this.__shouldRemoveTabIndex=!1,this.__firstFocusableNode=this.__lastFocusableNode=null,this.__rafs={},this.__restoreFocusNode=null,this.__scrollTop=this.__scrollLeft=null,this.__onCaptureScroll=this.__onCaptureScroll.bind(this),this.__rootNodes=null,this._ensureSetup()},attached:function(){this.opened&&this._openedChanged(this.opened),this._observer=O(this).observeNodes(this._onNodesChange)},detached:function(){this._observer&&O(this).unobserveNodes(this._observer),this._observer=null;for(var t in this.__rafs)this.__rafs[t]!==null&&cancelAnimationFrame(this.__rafs[t]);this.__rafs={},this._manager.removeOverlay(this),this.__isAnimating&&(this.opened?this._finishRenderOpened():(this._applyFocus(),this._finishRenderClosed()))},toggle:function(){this._setCanceled(!1),this.opened=!this.opened},open:function(){this._setCanceled(!1),this.opened=!0},close:function(){this._setCanceled(!1),this.opened=!1},cancel:function(t){var e=this.fire("iron-overlay-canceled",t,{cancelable:!0});e.defaultPrevented||(this._setCanceled(!0),this.opened=!1)},invalidateTabbables:function(){this.__firstFocusableNode=this.__lastFocusableNode=null},_ensureSetup:function(){this._overlaySetup||(this._overlaySetup=!0,this.style.outline="none",this.style.display="none")},_openedChanged:function(t){t?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true"),this.isAttached&&(this.__isAnimating=!0,this.__deraf("__openedChanged",this.__openedChanged))},_canceledChanged:function(){this.closingReason=this.closingReason||{},this.closingReason.canceled=this.canceled},_withBackdropChanged:function(){this.withBackdrop&&!this.hasAttribute("tabindex")?(this.setAttribute("tabindex","-1"),this.__shouldRemoveTabIndex=!0):this.__shouldRemoveTabIndex&&(this.removeAttribute("tabindex"),this.__shouldRemoveTabIndex=!1),this.opened&&this.isAttached&&this._manager.trackBackdrop()},_prepareRenderOpened:function(){this.__restoreFocusNode=this._manager.deepActiveElement,this._preparePositioning(),this.refit(),this._finishPositioning(),this.noAutoFocus&&document.activeElement===this._focusNode&&(this._focusNode.blur(),this.__restoreFocusNode.focus())},_renderOpened:function(){this._finishRenderOpened()},_renderClosed:function(){this._finishRenderClosed()},_finishRenderOpened:function(){this.notifyResize(),this.__isAnimating=!1,this.fire("iron-overlay-opened")},_finishRenderClosed:function(){this.style.display="none",this.style.zIndex="",this.notifyResize(),this.__isAnimating=!1,this.fire("iron-overlay-closed",this.closingReason)},_preparePositioning:function(){this.style.transition=this.style.webkitTransition="none",this.style.transform=this.style.webkitTransform="none",this.style.display=""},_finishPositioning:function(){this.style.display="none",this.scrollTop=this.scrollTop,this.style.transition=this.style.webkitTransition="",this.style.transform=this.style.webkitTransform="",this.style.display="",this.scrollTop=this.scrollTop},_applyFocus:function(){if(this.opened)this.noAutoFocus||this._focusNode.focus();else{if(this.restoreFocusOnClose&&this.__restoreFocusNode){var t=this._manager.deepActiveElement;(t===document.body||$f(this,t))&&this.__restoreFocusNode.focus()}this.__restoreFocusNode=null,this._focusNode.blur(),this._focusedChild=null}},_onCaptureClick:function(t){this.noCancelOnOutsideClick||this.cancel(t)},_onCaptureFocus:function(t){if(this.withBackdrop){var e=O(t).path;e.indexOf(this)===-1?(t.stopPropagation(),this._applyFocus()):this._focusedChild=e[0]}},_onCaptureEsc:function(t){this.noCancelOnEscKey||this.cancel(t)},_onCaptureTab:function(t){if(this.withBackdrop){this.__ensureFirstLastFocusables();var e=t.shiftKey,i=e?this.__firstFocusableNode:this.__lastFocusableNode,n=e?this.__lastFocusableNode:this.__firstFocusableNode,o=!1;if(i===n)o=!0;else{var r=this._manager.deepActiveElement;o=r===i||r===this}o&&(t.preventDefault(),this._focusedChild=n,this._applyFocus())}},_onIronResize:function(){this.opened&&!this.__isAnimating&&this.__deraf("refit",this.refit)},_onNodesChange:function(){this.opened&&!this.__isAnimating&&(this.invalidateTabbables(),this.notifyResize())},__ensureFirstLastFocusables:function(){var t=this._focusableNodes;this.__firstFocusableNode=t[0],this.__lastFocusableNode=t[t.length-1]},__openedChanged:function(){this.opened?(this._prepareRenderOpened(),this._manager.addOverlay(this),this._applyFocus(),this._renderOpened()):(this._manager.removeOverlay(this),this._applyFocus(),this._renderClosed())},__deraf:function(t,e){var i=this.__rafs;i[t]!==null&&cancelAnimationFrame(i[t]),i[t]=requestAnimationFrame((function(){i[t]=null,e.call(this)}).bind(this))},__updateScrollObservers:function(t,e,i){!t||!e||!this.__isValidScrollAction(i)?(Cf(this),this.__removeScrollListeners()):(i==="lock"&&(this.__saveScrollPosition(),wf(this)),this.__addScrollListeners())},__addScrollListeners:function(){if(!this.__rootNodes){if(this.__rootNodes=[],Nn)for(var t=this;t;)t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host&&this.__rootNodes.push(t),t=t.host||t.assignedSlot||t.parentNode;this.__rootNodes.push(document)}this.__rootNodes.forEach(function(e){e.addEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})},this)},__removeScrollListeners:function(){this.__rootNodes&&this.__rootNodes.forEach(function(t){t.removeEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})},this),this.isAttached||(this.__rootNodes=null)},__isValidScrollAction:function(t){return t==="lock"||t==="refit"||t==="cancel"},__onCaptureScroll:function(t){if(!this.__isAnimating&&!(O(t).path.indexOf(this)>=0))switch(this.scrollAction){case"lock":this.__restoreScrollPosition();break;case"refit":this.__deraf("refit",this.refit);break;case"cancel":this.cancel(t);break}},__saveScrollPosition:function(){document.scrollingElement?(this.__scrollTop=document.scrollingElement.scrollTop,this.__scrollLeft=document.scrollingElement.scrollLeft):(this.__scrollTop=Math.max(document.documentElement.scrollTop,document.body.scrollTop),this.__scrollLeft=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft))},__restoreScrollPosition:function(){document.scrollingElement?(document.scrollingElement.scrollTop=this.__scrollTop,document.scrollingElement.scrollLeft=this.__scrollLeft):(document.documentElement.scrollTop=document.body.scrollTop=this.__scrollTop,document.documentElement.scrollLeft=document.body.scrollLeft=this.__scrollLeft)}},Of=t=>t.assignedSlot||t.parentNode||t.host,$f=(t,e)=>{for(let i=e;i;i=Of(i))if(i===t)return!0;return!1},Tf=[gf,bf,Dt];/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Pf={properties:{animationConfig:{type:Object},entryAnimation:{observer:"_entryAnimationChanged",type:String},exitAnimation:{observer:"_exitAnimationChanged",type:String}},_entryAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.entry=[{name:this.entryAnimation,node:this}]},_exitAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.exit=[{name:this.exitAnimation,node:this}]},_copyProperties:function(t,e){for(var i in e)t[i]=e[i]},_cloneConfig:function(t){var e={isClone:!0};return this._copyProperties(e,t),e},_getAnimationConfigRecursive:function(t,e,i){if(this.animationConfig){if(this.animationConfig.value&&typeof this.animationConfig.value=="function"){this._warn(this._logf("playAnimation","Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."));return}var n;if(t?n=this.animationConfig[t]:n=this.animationConfig,Array.isArray(n)||(n=[n]),n)for(var o,r=0;o=n[r];r++)if(o.animatable)o.animatable._getAnimationConfigRecursive(o.type||t,e,i);else if(o.id){var a=e[o.id];a?(a.isClone||(e[o.id]=this._cloneConfig(a),a=e[o.id]),this._copyProperties(a,o)):e[o.id]=o}else i.push(o)}},getAnimationConfig:function(t){var e={},i=[];this._getAnimationConfigRecursive(t,e,i);for(var n in e)i.push(e[n]);return i}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const If={_configureAnimations:function(t){var e=[],i=[];if(t.length>0)for(let o,r=0;o=t[r];r++){let a=document.createElement(o.name);if(a.isNeonAnimation){let s=null;a.configure||(a.configure=function(l){return null}),s=a.configure(o),i.push({result:s,config:o,neonAnimation:a})}else console.warn(this.is+":",o.name,"not found!")}for(var n=0;n<i.length;n++){let o=i[n].result,r=i[n].config,a=i[n].neonAnimation;try{typeof o.cancel!="function"&&(o=document.timeline.play(o))}catch(s){o=null,console.warn("Couldnt play","(",r.name,").",s)}o&&e.push({neonAnimation:a,config:r,animation:o})}return e},_shouldComplete:function(t){for(var e=!0,i=0;i<t.length;i++)if(t[i].animation.playState!="finished"){e=!1;break}return e},_complete:function(t){for(var e=0;e<t.length;e++)t[e].neonAnimation.complete(t[e].config);for(var e=0;e<t.length;e++)t[e].animation.cancel()},playAnimation:function(t,e){var i=this.getAnimationConfig(t);if(i){this._active=this._active||{},this._active[t]&&(this._complete(this._active[t]),delete this._active[t]);var n=this._configureAnimations(i);if(n.length==0){this.fire("neon-animation-finish",e,{bubbles:!1});return}this._active[t]=n;for(var o=0;o<n.length;o++)n[o].animation.onfinish=(function(){this._shouldComplete(n)&&(this._complete(n),delete this._active[t],this.fire("neon-animation-finish",e,{bubbles:!1}))}).bind(this)}},cancelAnimation:function(){for(var t in this._active){var e=this._active[t];for(var i in e)e[i].animation.cancel()}this._active={}}},Hf=[Pf,If];/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/W({_template:U`
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
`,is:"iron-dropdown",behaviors:[Ct,nt,Tf,Hf],properties:{horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},openAnimationConfig:{type:Object},closeAnimationConfig:{type:Object},focusTarget:{type:Object},noAnimations:{type:Boolean,value:!1},allowOutsideScroll:{type:Boolean,value:!1,observer:"_allowOutsideScrollChanged"}},listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},observers:["_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)"],get containedElement(){for(var t=O(this.$.content).getDistributedNodes(),e=0,i=t.length;e<i;e++)if(t[e].nodeType===Node.ELEMENT_NODE)return t[e]},ready:function(){this.scrollAction||(this.scrollAction=this.allowOutsideScroll?"refit":"lock"),this._readied=!0},attached:function(){(!this.sizingTarget||this.sizingTarget===this)&&(this.sizingTarget=this.containedElement||this)},detached:function(){this.cancelAnimation()},_openedChanged:function(){this.opened&&this.disabled?this.cancel():(this.cancelAnimation(),this._updateAnimationConfig(),Dt._openedChanged.apply(this,arguments))},_renderOpened:function(){!this.noAnimations&&this.animationConfig.open?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("open")):Dt._renderOpened.apply(this,arguments)},_renderClosed:function(){!this.noAnimations&&this.animationConfig.close?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("close")):Dt._renderClosed.apply(this,arguments)},_onNeonAnimationFinish:function(){this.$.contentWrapper.classList.remove("animating"),this.opened?this._finishRenderOpened():this._finishRenderClosed()},_updateAnimationConfig:function(){for(var t=this.containedElement,e=[].concat(this.openAnimationConfig||[]).concat(this.closeAnimationConfig||[]),i=0;i<e.length;i++)e[i].node=t;this.animationConfig={open:this.openAnimationConfig,close:this.closeAnimationConfig}},_updateOverlayPosition:function(){this.isAttached&&this.notifyResize()},_allowOutsideScrollChanged:function(t){this._readied&&(t?(!this.scrollAction||this.scrollAction==="lock")&&(this.scrollAction="refit"):this.scrollAction="lock")},_applyFocus:function(){var t=this.focusTarget||this.containedElement;t&&this.opened&&!this.noAutoFocus?t.focus():Dt._applyFocus.apply(this,arguments)}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Mt={properties:{animationTiming:{type:Object,value:function(){return{duration:500,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"both"}}}},isNeonAnimation:!0,created:function(){document.body.animate||console.warn("No web animations detected. This element will not function without a web animations polyfill.")},timingFromConfig:function(t){if(t.timing)for(var e in t.timing)this.animationTiming[e]=t.timing[e];return this.animationTiming},setPrefixedProperty:function(t,e,i){for(var n={transform:["webkitTransform"],transformOrigin:["mozTransformOrigin","webkitTransformOrigin"]},o=n[e],r,a=0;r=o[a];a++)t.style[r]=i;t.style[e]=i},complete:function(t){}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/W({is:"fade-in-animation",behaviors:[Mt],configure:function(t){var e=t.node;return this._effect=new KeyframeEffect(e,[{opacity:"0"},{opacity:"1"}],this.timingFromConfig(t)),this._effect}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/W({is:"fade-out-animation",behaviors:[Mt],configure:function(t){var e=t.node;return this._effect=new KeyframeEffect(e,[{opacity:"1"},{opacity:"0"}],this.timingFromConfig(t)),this._effect}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const jc=U`
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
</custom-style>`;jc.setAttribute("style","display: none;");document.head.appendChild(jc.content);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/W({is:"paper-menu-grow-height-animation",_template:null,behaviors:[Mt],configure:function(t){var e=t.node,i=e.getBoundingClientRect(),n=i.height;return this._effect=new KeyframeEffect(e,[{height:n/2+"px"},{height:n+"px"}],this.timingFromConfig(t)),this._effect}});W({is:"paper-menu-grow-width-animation",_template:null,behaviors:[Mt],configure:function(t){var e=t.node,i=e.getBoundingClientRect(),n=i.width;return this._effect=new KeyframeEffect(e,[{width:n/2+"px"},{width:n+"px"}],this.timingFromConfig(t)),this._effect}});W({is:"paper-menu-shrink-width-animation",_template:null,behaviors:[Mt],configure:function(t){var e=t.node,i=e.getBoundingClientRect(),n=i.width;return this._effect=new KeyframeEffect(e,[{width:n+"px"},{width:n-n/20+"px"}],this.timingFromConfig(t)),this._effect}});W({is:"paper-menu-shrink-height-animation",_template:null,behaviors:[Mt],configure:function(t){var e=t.node,i=e.getBoundingClientRect(),n=i.height;return this.setPrefixedProperty(e,"transformOrigin","0 0"),this._effect=new KeyframeEffect(e,[{height:n+"px",transform:"translateY(0)"},{height:n/2+"px",transform:"translateY(-20px)"}],this.timingFromConfig(t)),this._effect}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var ti={ANIMATION_CUBIC_BEZIER:"cubic-bezier(.3,.95,.5,1)",MAX_ANIMATION_TIME_MS:400};const Nf=W({_template:U`
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
`,is:"paper-menu-button",behaviors:[nt,Ct],properties:{opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},noOverlap:{type:Boolean},noAnimations:{type:Boolean,value:!1},ignoreSelect:{type:Boolean,value:!1},closeOnActivate:{type:Boolean,value:!1},openAnimationConfig:{type:Object,value:function(){return[{name:"fade-in-animation",timing:{delay:100,duration:200}},{name:"paper-menu-grow-width-animation",timing:{delay:100,duration:150,easing:ti.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-grow-height-animation",timing:{delay:100,duration:275,easing:ti.ANIMATION_CUBIC_BEZIER}}]}},closeAnimationConfig:{type:Object,value:function(){return[{name:"fade-out-animation",timing:{duration:150}},{name:"paper-menu-shrink-width-animation",timing:{delay:100,duration:50,easing:ti.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-shrink-height-animation",timing:{duration:200,easing:"ease-in"}}]}},allowOutsideScroll:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!0},expandSizingTargetForScrollbars:{type:Boolean,value:!1},_dropdownContent:{type:Object}},hostAttributes:{role:"group","aria-haspopup":"true"},listeners:{"iron-activate":"_onIronActivate","iron-select":"_onIronSelect"},get contentElement(){for(var t=O(this.$.content).getDistributedNodes(),e=0,i=t.length;e<i;e++)if(t[e].nodeType===Node.ELEMENT_NODE)return t[e]},toggle:function(){this.opened?this.close():this.open()},open:function(){this.disabled||this.$.dropdown.open()},close:function(){this.$.dropdown.close()},_onIronSelect:function(t){this.ignoreSelect||this.close()},_onIronActivate:function(t){this.closeOnActivate&&this.close()},_openedChanged:function(t,e){t?(this._dropdownContent=this.contentElement,this.fire("paper-dropdown-open")):e!=null&&this.fire("paper-dropdown-close")},_disabledChanged:function(t){Ct._disabledChanged.apply(this,arguments),t&&this.opened&&this.close()},__onIronOverlayCanceled:function(t){var e=t.detail,i=this.$.trigger,n=O(e).path;n.indexOf(i)>-1&&t.preventDefault()}});Object.keys(ti).forEach(function(t){Nf[t]=ti[t]});/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var be={distance:function(t,e,i,n){var o=t-i,r=e-n;return Math.sqrt(o*o+r*r)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};function Uc(t){this.element=t,this.width=this.boundingRect.width,this.height=this.boundingRect.height,this.size=Math.max(this.width,this.height)}Uc.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function(t,e){var i=be.distance(t,e,0,0),n=be.distance(t,e,this.width,0),o=be.distance(t,e,0,this.height),r=be.distance(t,e,this.width,this.height);return Math.max(i,n,o,r)}};function We(t){this.element=t,this.color=window.getComputedStyle(t).color,this.wave=document.createElement("div"),this.waveContainer=document.createElement("div"),this.wave.style.backgroundColor=this.color,this.wave.classList.add("wave"),this.waveContainer.classList.add("wave-container"),O(this.waveContainer).appendChild(this.wave),this.resetInteractionState()}We.MAX_RADIUS=300;We.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var t;return this.mouseDownStart?(t=be.now()-this.mouseDownStart,this.mouseUpStart&&(t-=this.mouseUpElapsed),t):0},get mouseUpElapsed(){return this.mouseUpStart?be.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var t=this.containerMetrics.width*this.containerMetrics.width,e=this.containerMetrics.height*this.containerMetrics.height,i=Math.min(Math.sqrt(t+e),We.MAX_RADIUS)*1.1+5,n=1.1-.2*(i/We.MAX_RADIUS),o=this.mouseInteractionSeconds/n,r=i*(1-Math.pow(80,-o));return Math.abs(r)},get opacity(){return this.mouseUpStart?Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity):this.initialOpacity},get outerOpacity(){var t=this.mouseUpElapsedSeconds*.3,e=this.opacity;return Math.max(0,Math.min(t,e))},get isOpacityFullyDecayed(){return this.opacity<.01&&this.radius>=Math.min(this.maxRadius,We.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,We.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return Math.min(1,this.radius/this.containerMetrics.size*2/Math.sqrt(2))},get xNow(){return this.xEnd?this.xStart+this.translationFraction*(this.xEnd-this.xStart):this.xStart},get yNow(){return this.yEnd?this.yStart+this.translationFraction*(this.yEnd-this.yStart):this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function(){this.maxRadius=0,this.mouseDownStart=0,this.mouseUpStart=0,this.xStart=0,this.yStart=0,this.xEnd=0,this.yEnd=0,this.slideDistance=0,this.containerMetrics=new Uc(this.element)},draw:function(){var t,e,i;this.wave.style.opacity=this.opacity,t=this.radius/(this.containerMetrics.size/2),e=this.xNow-this.containerMetrics.width/2,i=this.yNow-this.containerMetrics.height/2,this.waveContainer.style.webkitTransform="translate("+e+"px, "+i+"px)",this.waveContainer.style.transform="translate3d("+e+"px, "+i+"px, 0)",this.wave.style.webkitTransform="scale("+t+","+t+")",this.wave.style.transform="scale3d("+t+","+t+",1)"},downAction:function(t){var e=this.containerMetrics.width/2,i=this.containerMetrics.height/2;this.resetInteractionState(),this.mouseDownStart=be.now(),this.center?(this.xStart=e,this.yStart=i,this.slideDistance=be.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)):(this.xStart=t?t.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2,this.yStart=t?t.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2),this.recenters&&(this.xEnd=e,this.yEnd=i,this.slideDistance=be.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)),this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart),this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px",this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px",this.waveContainer.style.width=this.containerMetrics.size+"px",this.waveContainer.style.height=this.containerMetrics.size+"px"},upAction:function(t){this.isMouseDown&&(this.mouseUpStart=be.now())},remove:function(){O(O(this.waveContainer).parentNode).removeChild(this.waveContainer)}};W({_template:U`
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
`,is:"paper-ripple",behaviors:[nt],properties:{initialOpacity:{type:Number,value:.25},opacityDecayVelocity:{type:Number,value:.8},recenters:{type:Boolean,value:!1},center:{type:Boolean,value:!1},ripples:{type:Array,value:function(){return[]}},animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},attached:function(){O(this).parentNode.nodeType==11?this.keyEventTarget=O(this).getOwnerRoot().host:this.keyEventTarget=O(this).parentNode;var t=this.keyEventTarget;this.listen(t,"up","uiUpAction"),this.listen(t,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction"),this.unlisten(this.keyEventTarget,"down","uiDownAction"),this.keyEventTarget=null},get shouldKeepAnimating(){for(var t=0;t<this.ripples.length;++t)if(!this.ripples[t].isAnimationComplete)return!0;return!1},simulatedRipple:function(){this.downAction(null),this.async(function(){this.upAction()},1)},uiDownAction:function(t){this.noink||this.downAction(t)},downAction:function(t){if(!(this.holdDown&&this.ripples.length>0)){var e=this.addRipple();e.downAction(t),this._animating||(this._animating=!0,this.animate())}},uiUpAction:function(t){this.noink||this.upAction(t)},upAction:function(t){this.holdDown||(this.ripples.forEach(function(e){e.upAction(t)}),this._animating=!0,this.animate())},onAnimationComplete:function(){this._animating=!1,this.$.background.style.backgroundColor="",this.fire("transitionend")},addRipple:function(){var t=new We(this);return O(this.$.waves).appendChild(t.waveContainer),this.$.background.style.backgroundColor=t.color,this.ripples.push(t),this._setAnimating(!0),t},removeRipple:function(t){var e=this.ripples.indexOf(t);e<0||(this.ripples.splice(e,1),t.remove(),this.ripples.length||this._setAnimating(!1))},animate:function(){if(this._animating){var t,e;for(t=0;t<this.ripples.length;++t)e=this.ripples[t],e.draw(),this.$.background.style.opacity=e.outerOpacity,e.isOpacityFullyDecayed&&!e.isRestingAtMaxRadius&&this.removeRipple(e);!this.shouldKeepAnimating&&this.ripples.length===0?this.onAnimationComplete():window.requestAnimationFrame(this._boundAnimate)}},animateRipple:function(){return this.animate()},_onEnterKeydown:function(){this.uiDownAction(),this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(t,e){e!==void 0&&(t?this.downAction():this.upAction())}});/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Rr=document.createElement("template");Rr.setAttribute("style","display: none;");Rr.innerHTML=`<iron-iconset-svg name="paper-dropdown-menu" size="24">
<svg><defs>
<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(Rr.content);/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Dr=document.createElement("template");Dr.setAttribute("style","display: none;");Dr.innerHTML=`<dom-module id="paper-dropdown-menu-shared-styles">
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
</dom-module>`;document.head.appendChild(Dr.content);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Ff={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){this.toggles?this._userActivate(!this.active):this.active=!1},_focusChanged:function(t){this._detectKeyboardFocus(t),t||this._setPressed(!1)},_detectKeyboardFocus:function(t){this._setReceivedFocusFromKeyboard(!this.pointerDown&&t)},_userActivate:function(t){this.active!==t&&(this.active=t,this.fire("change"))},_downHandler:function(t){this._setPointerDown(!0),this._setPressed(!0),this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1),this._setPressed(!1)},_spaceKeyDownHandler:function(t){var e=t.detail.keyboardEvent,i=O(e).localTarget;this.isLightDescendant(i)||(e.preventDefault(),e.stopImmediatePropagation(),this._setPressed(!0))},_spaceKeyUpHandler:function(t){var e=t.detail.keyboardEvent,i=O(e).localTarget;this.isLightDescendant(i)||(this.pressed&&this._asyncClick(),this._setPressed(!1))},_asyncClick:function(){this.async(function(){this.click()},1)},_pressedChanged:function(t){this._changedButtonState()},_ariaActiveAttributeChanged:function(t,e){e&&e!=t&&this.hasAttribute(e)&&this.removeAttribute(e)},_activeChanged:function(t,e){this.toggles?this.setAttribute(this.ariaActiveAttribute,t?"true":"false"):this.removeAttribute(this.ariaActiveAttribute),this._changedButtonState()},_controlStateChanged:function(){this.disabled?this._setPressed(!1):this._changedButtonState()},_changedButtonState:function(){this._buttonStateChanged&&this._buttonStateChanged()}},Vf=[nt,Ff];/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Rf=Pr(HTMLElement);W({_template:U`
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
`,is:"paper-dropdown-menu",behaviors:[Vf,Ct,Bc,nr],properties:{selectedItemLabel:{type:String,notify:!0,readOnly:!0},selectedItem:{type:Object,notify:!0,readOnly:!0},value:{type:String,notify:!0},label:{type:String},placeholder:{type:String},errorMessage:{type:String},opened:{type:Boolean,notify:!0,value:!1,observer:"_openedChanged"},allowOutsideScroll:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1,reflectToAttribute:!0},alwaysFloatLabel:{type:Boolean,value:!1},noAnimations:{type:Boolean,value:!1},horizontalAlign:{type:String,value:"right"},verticalAlign:{type:String,value:"top"},verticalOffset:Number,dynamicAlign:{type:Boolean},restoreFocusOnClose:{type:Boolean,value:!0},expandSizingTargetForScrollbars:{type:Boolean,value:!1}},listeners:{tap:"_onTap"},keyBindings:{"up down":"open",esc:"close"},observers:["_selectedItemChanged(selectedItem)"],_attachDom(t){const e=A(this);return e.attachShadow({mode:"open",delegatesFocus:!0,shadyUpgradeFragment:t}),e.shadowRoot.appendChild(t),Rf.prototype._attachDom.call(this,t)},focus(){this.$.input._focusableElement.focus()},attached:function(){var t=this.contentElement;t&&t.selectedItem&&this._setSelectedItem(t.selectedItem)},get contentElement(){for(var t=O(this.$.content).getDistributedNodes(),e=0,i=t.length;e<i;e++)if(t[e].nodeType===Node.ELEMENT_NODE)return t[e]},open:function(){this.$.menuButton.open()},close:function(){this.$.menuButton.close()},_onIronSelect:function(t){this._setSelectedItem(t.detail.item)},_onIronDeselect:function(t){this._setSelectedItem(null)},_onTap:function(t){M1(t)===this&&this.open()},_selectedItemChanged:function(t){var e="";t?e=t.label||t.getAttribute("label")||t.textContent.trim():e="",this.value=e,this._setSelectedItemLabel(e)},_computeMenuVerticalOffset:function(t,e){return e||(t?-4:8)},_getValidity:function(t){return this.disabled||!this.required||this.required&&!!this.value},_openedChanged:function(){var t=this.opened?"true":"false",e=this.contentElement;e&&e.setAttribute("aria-expanded",t)}});const ii=Symbol("memo"),Kc=t=>{let e=ii,i=ii,n;return function(o,r){if(e===o&&i===r)return n;const a=t(o,r);return n=a,e=o,i=r,a}},Df=t=>{let e=ii,i=ii,n=ii,o;return function(r,a,s){if(e===r&&i===a&&n===s)return o;const l=t(r,a,s);return o=l,e=r,i=a,n=s,l}},He=Symbol("column"),qf=t=>{let e=!0;const i=t.map(n=>n.name);return t.forEach(n=>{n.name==null&&(e=!1,console.error("The name attribute needs to be set on all columns! Missing on column",n))}),t.forEach(n=>{i.indexOf(n.name)!==i.lastIndexOf(n.name)&&(e=!1,console.error("The name attribute needs to be unique among all columns! Not unique on column",n))}),e},Bf=t=>{const e=t.valuePath??t.name;return{name:t.name,title:t.title,valuePath:e,groupOn:t.groupOn??e,sortOn:t.sortOn??e,minWidth:t.minWidth,width:t.width,flex:t.flex,priority:t.priority,getString:t.getString,getComparableValue:t.getComparableValue,serializeFilter:t.serializeFilter,deserializeFilter:t.deserializeFilter,toXlsxValue:t.toXlsxValue,renderHeader:t.renderHeader,renderCell:t.renderCell,renderEditCell:t.renderEditCell,renderGroup:t.renderGroup,cellTitleFn:t.cellTitleFn,getFilterFn:t.getFilterFn,headerCellClass:t.headerCellClass,cellClass:t.cellClass,editable:t.editable,values:t.values,source:Kc(t.computeSource),noLocalFilter:t.noLocalFilter,mini:t.mini,renderMini:t.renderMini,loading:t.loading,externalValues:t.externalValues,computeSource:t.computeSource,trueLabel:t.trueLabel,falseLabel:t.falseLabel,valueProperty:t.valueProperty,textProperty:t.textProperty,emptyLabel:t.emptyLabel,emptyValue:t.emptyValue,min:t.min,max:t.max,locale:t.locale,autoupdate:t.autoupdate,maximumFractionDigits:t.maximumFractionDigits,minimumFractionDigits:t.minimumFractionDigits,currency:t.currency,rates:t.rates,autodetect:t.autodetect,ownerTree:t.ownerTree,keyProperty:t.keyProperty,...t.getConfig?.(t),[He]:t}},jf=t=>t.isOmnitableColumn&&!t.hidden,Uf=t=>{const e=t.assignedElements({flatten:!0}).filter(jf);return qf(e)?e:[]},Kf=(t,e)=>(Array.isArray(e)?t.filter(n=>e.includes(n.name)):t.filter(n=>!n.disabled)).map(Bf),Wf=(t,{enabledColumns:e})=>{const[i,n]=J([]);return ui(()=>{let o;const r=t.shadowRoot.querySelector("#columnsSlot"),a=()=>{n(Kf(Uf(r),e))},s=()=>{cancelAnimationFrame(o),o=requestAnimationFrame(a)};return s(),r.addEventListener("slotchange",s),t.addEventListener("cosmoz-column-prop-changed",s),()=>{r.removeEventListener("slotchange",s),t.removeEventListener("cosmoz-column-prop-changed",s),cancelAnimationFrame(o)}},[e]),i},Wc=(t,e)=>Array.isArray(t)?t.map(i=>L(i,e)).filter((i,n,o)=>i!=null&&o.indexOf(i)===n):void 0,wi=({externalValues:t,values:e,valuePath:i},n)=>t||typeof e=="function"?e:Wc(n,i),Gf=(t,e,i,n)=>{const{valuePath:o}=e,r=L(i,o);if(n===r)return;No(i,o,n);const a={item:i,valuePath:o,value:n,oldValue:r,column:e[He]};t.dispatchEvent(new CustomEvent("column-item-changed",{bubbles:!0,composed:!0,detail:a}))},k=t=>typeof t=="string",It=()=>{let t,e;const i=new Promise((n,o)=>{t=n,e=o});return i.resolve=t,i.reject=e,i},fs=t=>t==null?"":""+t,Yf=(t,e,i)=>{t.forEach(n=>{e[n]&&(i[n]=e[n])})},Jf=/###/g,gs=t=>t&&t.indexOf("###")>-1?t.replace(Jf,"."):t,bs=t=>!t||k(t),ni=(t,e,i)=>{const n=k(e)?e.split("."):e;let o=0;for(;o<n.length-1;){if(bs(t))return{};const r=gs(n[o]);!t[r]&&i&&(t[r]=new i),Object.prototype.hasOwnProperty.call(t,r)?t=t[r]:t={},++o}return bs(t)?{}:{obj:t,k:gs(n[o])}},vs=(t,e,i)=>{const{obj:n,k:o}=ni(t,e,Object);if(n!==void 0||e.length===1){n[o]=i;return}let r=e[e.length-1],a=e.slice(0,e.length-1),s=ni(t,a,Object);for(;s.obj===void 0&&a.length;)r=`${a[a.length-1]}.${r}`,a=a.slice(0,a.length-1),s=ni(t,a,Object),s&&s.obj&&typeof s.obj[`${s.k}.${r}`]<"u"&&(s.obj=void 0);s.obj[`${s.k}.${r}`]=i},Xf=(t,e,i,n)=>{const{obj:o,k:r}=ni(t,e,Object);o[r]=o[r]||[],o[r].push(i)},Mn=(t,e)=>{const{obj:i,k:n}=ni(t,e);if(i)return i[n]},Zf=(t,e,i)=>{const n=Mn(t,i);return n!==void 0?n:Mn(e,i)},Gc=(t,e,i)=>{for(const n in e)n!=="__proto__"&&n!=="constructor"&&(n in t?k(t[n])||t[n]instanceof String||k(e[n])||e[n]instanceof String?i&&(t[n]=e[n]):Gc(t[n],e[n],i):t[n]=e[n]);return t},st=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Qf={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const e2=t=>k(t)?t.replace(/[&<>"'\/]/g,e=>Qf[e]):t;class t2{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const i=this.regExpMap.get(e);if(i!==void 0)return i;const n=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,n),this.regExpQueue.push(e),n}}const i2=[" ",",","?","!",";"],n2=new t2(20),o2=(t,e,i)=>{e=e||"",i=i||"";const n=i2.filter(a=>e.indexOf(a)<0&&i.indexOf(a)<0);if(n.length===0)return!0;const o=n2.getRegExp(`(${n.map(a=>a==="?"?"\\?":a).join("|")})`);let r=!o.test(t);if(!r){const a=t.indexOf(i);a>0&&!o.test(t.substring(0,a))&&(r=!0)}return r},or=function(t,e){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!t)return;if(t[e])return t[e];const n=e.split(i);let o=t;for(let r=0;r<n.length;){if(!o||typeof o!="object")return;let a,s="";for(let l=r;l<n.length;++l)if(l!==r&&(s+=i),s+=n[l],a=o[s],a!==void 0){if(["string","number","boolean"].indexOf(typeof a)>-1&&l<n.length-1)continue;r+=l-r+1;break}o=a}return o},Ln=t=>t&&t.replace("_","-"),r2={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){console&&console[t]&&console[t].apply(console,e)}};class kn{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,i)}init(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=i.prefix||"i18next:",this.logger=e||r2,this.options=i,this.debug=i.debug}log(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return this.forward(i,"log","",!0)}warn(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return this.forward(i,"warn","",!0)}error(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return this.forward(i,"error","")}deprecate(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return this.forward(i,"warn","WARNING DEPRECATED: ",!0)}forward(e,i,n,o){return o&&!this.debug?null:(k(e[0])&&(e[0]=`${n}${this.prefix} ${e[0]}`),this.logger[i](e))}create(e){return new kn(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new kn(this.logger,e)}}var ye=new kn;class Qn{constructor(){this.observers={}}on(e,i){return e.split(" ").forEach(n=>{this.observers[n]||(this.observers[n]=new Map);const o=this.observers[n].get(i)||0;this.observers[n].set(i,o+1)}),this}off(e,i){if(this.observers[e]){if(!i){delete this.observers[e];return}this.observers[e].delete(i)}}emit(e){for(var i=arguments.length,n=new Array(i>1?i-1:0),o=1;o<i;o++)n[o-1]=arguments[o];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(a=>{let[s,l]=a;for(let c=0;c<l;c++)s(...n)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(a=>{let[s,l]=a;for(let c=0;c<l;c++)s.apply(s,[e,...n])})}}class ys extends Qn{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const i=this.options.ns.indexOf(e);i>-1&&this.options.ns.splice(i,1)}getResource(e,i,n){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,a=o.ignoreJSONStructure!==void 0?o.ignoreJSONStructure:this.options.ignoreJSONStructure;let s;e.indexOf(".")>-1?s=e.split("."):(s=[e,i],n&&(Array.isArray(n)?s.push(...n):k(n)&&r?s.push(...n.split(r)):s.push(n)));const l=Mn(this.data,s);return!l&&!i&&!n&&e.indexOf(".")>-1&&(e=s[0],i=s[1],n=s.slice(2).join(".")),l||!a||!k(n)?l:or(this.data&&this.data[e]&&this.data[e][i],n,r)}addResource(e,i,n,o){let r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const a=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let s=[e,i];n&&(s=s.concat(a?n.split(a):n)),e.indexOf(".")>-1&&(s=e.split("."),o=i,i=s[1]),this.addNamespaces(i),vs(this.data,s,o),r.silent||this.emit("added",e,i,n,o)}addResources(e,i,n){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const r in n)(k(n[r])||Array.isArray(n[r]))&&this.addResource(e,i,r,n[r],{silent:!0});o.silent||this.emit("added",e,i,n)}addResourceBundle(e,i,n,o,r){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},s=[e,i];e.indexOf(".")>-1&&(s=e.split("."),o=n,n=i,i=s[1]),this.addNamespaces(i);let l=Mn(this.data,s)||{};a.skipCopy||(n=JSON.parse(JSON.stringify(n))),o?Gc(l,n,r):l={...l,...n},vs(this.data,s,l),a.silent||this.emit("added",e,i,n)}removeResourceBundle(e,i){this.hasResourceBundle(e,i)&&delete this.data[e][i],this.removeNamespaces(i),this.emit("removed",e,i)}hasResourceBundle(e,i){return this.getResource(e,i)!==void 0}getResourceBundle(e,i){return i||(i=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,i)}:this.getResource(e,i)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const i=this.getDataByLanguage(e);return!!(i&&Object.keys(i)||[]).find(o=>i[o]&&Object.keys(i[o]).length>0)}toJSON(){return this.data}}var Yc={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,i,n,o){return t.forEach(r=>{this.processors[r]&&(e=this.processors[r].process(e,i,n,o))}),e}};const _s={};class On extends Qn{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Yf(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=ye.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const n=this.resolve(e,i);return n&&n.res!==void 0}extractFromKey(e,i){let n=i.nsSeparator!==void 0?i.nsSeparator:this.options.nsSeparator;n===void 0&&(n=":");const o=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator;let r=i.ns||this.options.defaultNS||[];const a=n&&e.indexOf(n)>-1,s=!this.options.userDefinedKeySeparator&&!i.keySeparator&&!this.options.userDefinedNsSeparator&&!i.nsSeparator&&!o2(e,n,o);if(a&&!s){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:k(r)?[r]:r};const c=e.split(n);(n!==o||n===o&&this.options.ns.indexOf(c[0])>-1)&&(r=c.shift()),e=c.join(o)}return{key:e,namespaces:k(r)?[r]:r}}translate(e,i,n){if(typeof i!="object"&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),typeof i=="object"&&(i={...i}),i||(i={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const o=i.returnDetails!==void 0?i.returnDetails:this.options.returnDetails,r=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,{key:a,namespaces:s}=this.extractFromKey(e[e.length-1],i),l=s[s.length-1],c=i.lng||this.language,u=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&c.toLowerCase()==="cimode"){if(u){const y=i.nsSeparator||this.options.nsSeparator;return o?{res:`${l}${y}${a}`,usedKey:a,exactUsedKey:a,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:`${l}${y}${a}`}return o?{res:a,usedKey:a,exactUsedKey:a,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:a}const d=this.resolve(e,i);let p=d&&d.res;const h=d&&d.usedKey||a,m=d&&d.exactUsedKey||a,f=Object.prototype.toString.apply(p),b=["[object Number]","[object Function]","[object RegExp]"],v=i.joinArrays!==void 0?i.joinArrays:this.options.joinArrays,g=!this.i18nFormat||this.i18nFormat.handleAsObject,x=!k(p)&&typeof p!="boolean"&&typeof p!="number";if(g&&p&&x&&b.indexOf(f)<0&&!(k(v)&&Array.isArray(p))){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const y=this.options.returnedObjectHandler?this.options.returnedObjectHandler(h,p,{...i,ns:s}):`key '${a} (${this.language})' returned an object instead of string.`;return o?(d.res=y,d.usedParams=this.getUsedParamsDetails(i),d):y}if(r){const y=Array.isArray(p),w=y?[]:{},z=y?m:h;for(const C in p)if(Object.prototype.hasOwnProperty.call(p,C)){const E=`${z}${r}${C}`;w[C]=this.translate(E,{...i,joinArrays:!1,ns:s}),w[C]===E&&(w[C]=p[C])}p=w}}else if(g&&k(v)&&Array.isArray(p))p=p.join(v),p&&(p=this.extendTranslation(p,e,i,n));else{let y=!1,w=!1;const z=i.count!==void 0&&!k(i.count),C=On.hasDefaultValue(i),E=z?this.pluralResolver.getSuffix(c,i.count,i):"",T=i.ordinal&&z?this.pluralResolver.getSuffix(c,i.count,{ordinal:!1}):"",D=z&&!i.ordinal&&i.count===0&&this.pluralResolver.shouldUseIntlApi(),Y=D&&i[`defaultValue${this.options.pluralSeparator}zero`]||i[`defaultValue${E}`]||i[`defaultValue${T}`]||i.defaultValue;!this.isValidLookup(p)&&C&&(y=!0,p=Y),this.isValidLookup(p)||(w=!0,p=a);const X=(i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&w?void 0:p,B=C&&Y!==p&&this.options.updateMissing;if(w||y||B){if(this.logger.log(B?"updateKey":"missingKey",c,l,a,B?Y:p),r){const R=this.resolve(a,{...i,keySeparator:!1});R&&R.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let j=[];const K=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo==="fallback"&&K&&K[0])for(let R=0;R<K.length;R++)j.push(K[R]);else this.options.saveMissingTo==="all"?j=this.languageUtils.toResolveHierarchy(i.lng||this.language):j.push(i.lng||this.language);const P=(R,Z,Se)=>{const Si=C&&Se!==p?Se:X;this.options.missingKeyHandler?this.options.missingKeyHandler(R,l,Z,Si,B,i):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(R,l,Z,Si,B,i),this.emit("missingKey",R,l,Z,p)};this.options.saveMissing&&(this.options.saveMissingPlurals&&z?j.forEach(R=>{const Z=this.pluralResolver.getSuffixes(R,i);D&&i[`defaultValue${this.options.pluralSeparator}zero`]&&Z.indexOf(`${this.options.pluralSeparator}zero`)<0&&Z.push(`${this.options.pluralSeparator}zero`),Z.forEach(Se=>{P([R],a+Se,i[`defaultValue${Se}`]||Y)})}):P(j,a,Y))}p=this.extendTranslation(p,e,i,d,n),w&&p===a&&this.options.appendNamespaceToMissingKey&&(p=`${l}:${a}`),(w||y)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?p=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${a}`:a,y?p:void 0):p=this.options.parseMissingKeyHandler(p))}return o?(d.res=p,d.usedParams=this.getUsedParamsDetails(i),d):p}extendTranslation(e,i,n,o,r){var a=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});const c=k(e)&&(n&&n.interpolation&&n.interpolation.skipOnVariables!==void 0?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let u;if(c){const p=e.match(this.interpolator.nestingRegexp);u=p&&p.length}let d=n.replace&&!k(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(d={...this.options.interpolation.defaultVariables,...d}),e=this.interpolator.interpolate(e,d,n.lng||this.language||o.usedLng,n),c){const p=e.match(this.interpolator.nestingRegexp),h=p&&p.length;u<h&&(n.nest=!1)}!n.lng&&this.options.compatibilityAPI!=="v1"&&o&&o.res&&(n.lng=this.language||o.usedLng),n.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var p=arguments.length,h=new Array(p),m=0;m<p;m++)h[m]=arguments[m];return r&&r[0]===h[0]&&!n.context?(a.logger.warn(`It seems you are nesting recursively key: ${h[0]} in key: ${i[0]}`),null):a.translate(...h,i)},n)),n.interpolation&&this.interpolator.reset()}const s=n.postProcess||this.options.postProcess,l=k(s)?[s]:s;return e!=null&&l&&l.length&&n.applyPostProcessor!==!1&&(e=Yc.handle(l,e,i,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...o,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),e}resolve(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n,o,r,a,s;return k(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(n))return;const c=this.extractFromKey(l,i),u=c.key;o=u;let d=c.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const p=i.count!==void 0&&!k(i.count),h=p&&!i.ordinal&&i.count===0&&this.pluralResolver.shouldUseIntlApi(),m=i.context!==void 0&&(k(i.context)||typeof i.context=="number")&&i.context!=="",f=i.lngs?i.lngs:this.languageUtils.toResolveHierarchy(i.lng||this.language,i.fallbackLng);d.forEach(b=>{this.isValidLookup(n)||(s=b,!_s[`${f[0]}-${b}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(s)&&(_s[`${f[0]}-${b}`]=!0,this.logger.warn(`key "${o}" for languages "${f.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),f.forEach(v=>{if(this.isValidLookup(n))return;a=v;const g=[u];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(g,u,v,b,i);else{let y;p&&(y=this.pluralResolver.getSuffix(v,i.count,i));const w=`${this.options.pluralSeparator}zero`,z=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(p&&(g.push(u+y),i.ordinal&&y.indexOf(z)===0&&g.push(u+y.replace(z,this.options.pluralSeparator)),h&&g.push(u+w)),m){const C=`${u}${this.options.contextSeparator}${i.context}`;g.push(C),p&&(g.push(C+y),i.ordinal&&y.indexOf(z)===0&&g.push(C+y.replace(z,this.options.pluralSeparator)),h&&g.push(C+w))}}let x;for(;x=g.pop();)this.isValidLookup(n)||(r=x,n=this.getResource(v,b,x,i))}))})}),{res:n,usedKey:o,exactUsedKey:r,usedLng:a,usedNS:s}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,i,n){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,i,n,o):this.resourceStore.getResource(e,i,n,o)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const i=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],n=e.replace&&!k(e.replace);let o=n?e.replace:e;if(n&&typeof e.count<"u"&&(o.count=e.count),this.options.interpolation.defaultVariables&&(o={...this.options.interpolation.defaultVariables,...o}),!n){o={...o};for(const r of i)delete o[r]}return o}static hasDefaultValue(e){const i="defaultValue";for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&i===n.substring(0,i.length)&&e[n]!==void 0)return!0;return!1}}const wo=t=>t.charAt(0).toUpperCase()+t.slice(1);class xs{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=ye.create("languageUtils")}getScriptPartFromCode(e){if(e=Ln(e),!e||e.indexOf("-")<0)return null;const i=e.split("-");return i.length===2||(i.pop(),i[i.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(i.join("-"))}getLanguagePartFromCode(e){if(e=Ln(e),!e||e.indexOf("-")<0)return e;const i=e.split("-");return this.formatLanguageCode(i[0])}formatLanguageCode(e){if(k(e)&&e.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let o=Intl.getCanonicalLocales(e)[0];if(o&&this.options.lowerCaseLng&&(o=o.toLowerCase()),o)return o}catch{}const i=["hans","hant","latn","cyrl","cans","mong","arab"];let n=e.split("-");return this.options.lowerCaseLng?n=n.map(o=>o.toLowerCase()):n.length===2?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),i.indexOf(n[1].toLowerCase())>-1&&(n[1]=wo(n[1].toLowerCase()))):n.length===3&&(n[0]=n[0].toLowerCase(),n[1].length===2&&(n[1]=n[1].toUpperCase()),n[0]!=="sgn"&&n[2].length===2&&(n[2]=n[2].toUpperCase()),i.indexOf(n[1].toLowerCase())>-1&&(n[1]=wo(n[1].toLowerCase())),i.indexOf(n[2].toLowerCase())>-1&&(n[2]=wo(n[2].toLowerCase()))),n.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let i;return e.forEach(n=>{if(i)return;const o=this.formatLanguageCode(n);(!this.options.supportedLngs||this.isSupportedCode(o))&&(i=o)}),!i&&this.options.supportedLngs&&e.forEach(n=>{if(i)return;const o=this.getLanguagePartFromCode(n);if(this.isSupportedCode(o))return i=o;i=this.options.supportedLngs.find(r=>{if(r===o)return r;if(!(r.indexOf("-")<0&&o.indexOf("-")<0)&&(r.indexOf("-")>0&&o.indexOf("-")<0&&r.substring(0,r.indexOf("-"))===o||r.indexOf(o)===0&&o.length>1))return r})}),i||(i=this.getFallbackCodes(this.options.fallbackLng)[0]),i}getFallbackCodes(e,i){if(!e)return[];if(typeof e=="function"&&(e=e(i)),k(e)&&(e=[e]),Array.isArray(e))return e;if(!i)return e.default||[];let n=e[i];return n||(n=e[this.getScriptPartFromCode(i)]),n||(n=e[this.formatLanguageCode(i)]),n||(n=e[this.getLanguagePartFromCode(i)]),n||(n=e.default),n||[]}toResolveHierarchy(e,i){const n=this.getFallbackCodes(i||this.options.fallbackLng||[],e),o=[],r=a=>{a&&(this.isSupportedCode(a)?o.push(a):this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`))};return k(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&r(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&r(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&r(this.getLanguagePartFromCode(e))):k(e)&&r(this.formatLanguageCode(e)),n.forEach(a=>{o.indexOf(a)<0&&r(this.formatLanguageCode(a))}),o}}let a2=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],s2={1:t=>+(t>1),2:t=>+(t!=1),3:t=>0,4:t=>t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,5:t=>t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5,6:t=>t==1?0:t>=2&&t<=4?1:2,7:t=>t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,8:t=>t==1?0:t==2?1:t!=8&&t!=11?2:3,9:t=>+(t>=2),10:t=>t==1?0:t==2?1:t<7?2:t<11?3:4,11:t=>t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3,12:t=>+(t%10!=1||t%100==11),13:t=>+(t!==0),14:t=>t==1?0:t==2?1:t==3?2:3,15:t=>t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2,16:t=>t%10==1&&t%100!=11?0:t!==0?1:2,17:t=>t==1||t%10==1&&t%100!=11?0:1,18:t=>t==0?0:t==1?1:2,19:t=>t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3,20:t=>t==1?0:t==0||t%100>0&&t%100<20?1:2,21:t=>t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0,22:t=>t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3};const l2=["v1","v2","v3"],c2=["v4"],ws={zero:0,one:1,two:2,few:3,many:4,other:5},u2=()=>{const t={};return a2.forEach(e=>{e.lngs.forEach(i=>{t[i]={numbers:e.nr,plurals:s2[e.fc]}})}),t};class d2{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=i,this.logger=ye.create("pluralResolver"),(!this.options.compatibilityJSON||c2.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=u2(),this.pluralRulesCache={}}addRule(e,i){this.rules[e]=i}clearCache(){this.pluralRulesCache={}}getRule(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const n=Ln(e==="dev"?"en":e),o=i.ordinal?"ordinal":"cardinal",r=JSON.stringify({cleanedCode:n,type:o});if(r in this.pluralRulesCache)return this.pluralRulesCache[r];let a;try{a=new Intl.PluralRules(n,{type:o})}catch{if(!e.match(/-|_/))return;const l=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(l,i)}return this.pluralRulesCache[r]=a,a}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=this.getRule(e,i);return this.shouldUseIntlApi()?n&&n.resolvedOptions().pluralCategories.length>1:n&&n.numbers.length>1}getPluralFormsOfKey(e,i){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,n).map(o=>`${i}${o}`)}getSuffixes(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=this.getRule(e,i);return n?this.shouldUseIntlApi()?n.resolvedOptions().pluralCategories.sort((o,r)=>ws[o]-ws[r]).map(o=>`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${o}`):n.numbers.map(o=>this.getSuffix(e,o,i)):[]}getSuffix(e,i){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const o=this.getRule(e,n);return o?this.shouldUseIntlApi()?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${o.select(i)}`:this.getSuffixRetroCompatible(o,i):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,i){const n=e.noAbs?e.plurals(i):e.plurals(Math.abs(i));let o=e.numbers[n];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(o===2?o="plural":o===1&&(o=""));const r=()=>this.options.prepend&&o.toString()?this.options.prepend+o.toString():o.toString();return this.options.compatibilityJSON==="v1"?o===1?"":typeof o=="number"?`_plural_${o.toString()}`:r():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?r():this.options.prepend&&n.toString()?this.options.prepend+n.toString():n.toString()}shouldUseIntlApi(){return!l2.includes(this.options.compatibilityJSON)}}const Cs=function(t,e,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,r=Zf(t,e,i);return!r&&o&&k(i)&&(r=or(t,i,n),r===void 0&&(r=or(e,i,n))),r},Co=t=>t.replace(/\$/g,"$$$$");class p2{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=ye.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(i=>i),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:i,escapeValue:n,useRawValueToEscape:o,prefix:r,prefixEscaped:a,suffix:s,suffixEscaped:l,formatSeparator:c,unescapeSuffix:u,unescapePrefix:d,nestingPrefix:p,nestingPrefixEscaped:h,nestingSuffix:m,nestingSuffixEscaped:f,nestingOptionsSeparator:b,maxReplaces:v,alwaysFormat:g}=e.interpolation;this.escape=i!==void 0?i:e2,this.escapeValue=n!==void 0?n:!0,this.useRawValueToEscape=o!==void 0?o:!1,this.prefix=r?st(r):a||"{{",this.suffix=s?st(s):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=u?"":d||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=p?st(p):h||st("$t("),this.nestingSuffix=m?st(m):f||st(")"),this.nestingOptionsSeparator=b||",",this.maxReplaces=v||1e3,this.alwaysFormat=g!==void 0?g:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(i,n)=>i&&i.source===n?(i.lastIndex=0,i):new RegExp(n,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,i,n,o){let r,a,s;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=h=>{if(h.indexOf(this.formatSeparator)<0){const v=Cs(i,l,h,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(v,void 0,n,{...o,...i,interpolationkey:h}):v}const m=h.split(this.formatSeparator),f=m.shift().trim(),b=m.join(this.formatSeparator).trim();return this.format(Cs(i,l,f,this.options.keySeparator,this.options.ignoreJSONStructure),b,n,{...o,...i,interpolationkey:f})};this.resetRegExp();const u=o&&o.missingInterpolationHandler||this.options.missingInterpolationHandler,d=o&&o.interpolation&&o.interpolation.skipOnVariables!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:h=>Co(h)},{regex:this.regexp,safeValue:h=>this.escapeValue?Co(this.escape(h)):Co(h)}].forEach(h=>{for(s=0;r=h.regex.exec(e);){const m=r[1].trim();if(a=c(m),a===void 0)if(typeof u=="function"){const b=u(e,r,o);a=k(b)?b:""}else if(o&&Object.prototype.hasOwnProperty.call(o,m))a="";else if(d){a=r[0];continue}else this.logger.warn(`missed to pass in variable ${m} for interpolating ${e}`),a="";else!k(a)&&!this.useRawValueToEscape&&(a=fs(a));const f=h.safeValue(a);if(e=e.replace(r[0],f),d?(h.regex.lastIndex+=a.length,h.regex.lastIndex-=r[0].length):h.regex.lastIndex=0,s++,s>=this.maxReplaces)break}}),e}nest(e,i){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o,r,a;const s=(l,c)=>{const u=this.nestingOptionsSeparator;if(l.indexOf(u)<0)return l;const d=l.split(new RegExp(`${u}[ ]*{`));let p=`{${d[1]}`;l=d[0],p=this.interpolate(p,a);const h=p.match(/'/g),m=p.match(/"/g);(h&&h.length%2===0&&!m||m.length%2!==0)&&(p=p.replace(/'/g,'"'));try{a=JSON.parse(p),c&&(a={...c,...a})}catch(f){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,f),`${l}${u}${p}`}return a.defaultValue&&a.defaultValue.indexOf(this.prefix)>-1&&delete a.defaultValue,l};for(;o=this.nestingRegexp.exec(e);){let l=[];a={...n},a=a.replace&&!k(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let c=!1;if(o[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(o[1])){const u=o[1].split(this.formatSeparator).map(d=>d.trim());o[1]=u.shift(),l=u,c=!0}if(r=i(s.call(this,o[1].trim(),a),a),r&&o[0]===e&&!k(r))return r;k(r)||(r=fs(r)),r||(this.logger.warn(`missed to resolve ${o[1]} for nesting ${e}`),r=""),c&&(r=l.reduce((u,d)=>this.format(u,d,n.lng,{...n,interpolationkey:o[1].trim()}),r.trim())),e=e.replace(o[0],r),this.regexp.lastIndex=0}return e}}const h2=t=>{let e=t.toLowerCase().trim();const i={};if(t.indexOf("(")>-1){const n=t.split("(");e=n[0].toLowerCase().trim();const o=n[1].substring(0,n[1].length-1);e==="currency"&&o.indexOf(":")<0?i.currency||(i.currency=o.trim()):e==="relativetime"&&o.indexOf(":")<0?i.range||(i.range=o.trim()):o.split(";").forEach(a=>{if(a){const[s,...l]=a.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),u=s.trim();i[u]||(i[u]=c),c==="false"&&(i[u]=!1),c==="true"&&(i[u]=!0),isNaN(c)||(i[u]=parseInt(c,10))}})}return{formatName:e,formatOptions:i}},lt=t=>{const e={};return(i,n,o)=>{let r=o;o&&o.interpolationkey&&o.formatParams&&o.formatParams[o.interpolationkey]&&o[o.interpolationkey]&&(r={...r,[o.interpolationkey]:void 0});const a=n+JSON.stringify(r);let s=e[a];return s||(s=t(Ln(n),o),e[a]=s),s(i)}};class m2{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=ye.create("formatter"),this.options=e,this.formats={number:lt((i,n)=>{const o=new Intl.NumberFormat(i,{...n});return r=>o.format(r)}),currency:lt((i,n)=>{const o=new Intl.NumberFormat(i,{...n,style:"currency"});return r=>o.format(r)}),datetime:lt((i,n)=>{const o=new Intl.DateTimeFormat(i,{...n});return r=>o.format(r)}),relativetime:lt((i,n)=>{const o=new Intl.RelativeTimeFormat(i,{...n});return r=>o.format(r,n.range||"day")}),list:lt((i,n)=>{const o=new Intl.ListFormat(i,{...n});return r=>o.format(r)})},this.init(e)}init(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=i.interpolation.formatSeparator||","}add(e,i){this.formats[e.toLowerCase().trim()]=i}addCached(e,i){this.formats[e.toLowerCase().trim()]=lt(i)}format(e,i,n){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=i.split(this.formatSeparator);if(r.length>1&&r[0].indexOf("(")>1&&r[0].indexOf(")")<0&&r.find(s=>s.indexOf(")")>-1)){const s=r.findIndex(l=>l.indexOf(")")>-1);r[0]=[r[0],...r.splice(1,s)].join(this.formatSeparator)}return r.reduce((s,l)=>{const{formatName:c,formatOptions:u}=h2(l);if(this.formats[c]){let d=s;try{const p=o&&o.formatParams&&o.formatParams[o.interpolationkey]||{},h=p.locale||p.lng||o.locale||o.lng||n;d=this.formats[c](s,h,{...u,...o,...p})}catch(p){this.logger.warn(p)}return d}else this.logger.warn(`there was no format function for ${c}`);return s},e)}}const f2=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};class g2 extends Qn{constructor(e,i,n){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=i,this.services=n,this.languageUtils=n.languageUtils,this.options=o,this.logger=ye.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=o.maxParallelReads||10,this.readingCalls=0,this.maxRetries=o.maxRetries>=0?o.maxRetries:5,this.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(n,o.backend,o)}queueLoad(e,i,n,o){const r={},a={},s={},l={};return e.forEach(c=>{let u=!0;i.forEach(d=>{const p=`${c}|${d}`;!n.reload&&this.store.hasResourceBundle(c,d)?this.state[p]=2:this.state[p]<0||(this.state[p]===1?a[p]===void 0&&(a[p]=!0):(this.state[p]=1,u=!1,a[p]===void 0&&(a[p]=!0),r[p]===void 0&&(r[p]=!0),l[d]===void 0&&(l[d]=!0)))}),u||(s[c]=!0)}),(Object.keys(r).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(r),pending:Object.keys(a),toLoadLanguages:Object.keys(s),toLoadNamespaces:Object.keys(l)}}loaded(e,i,n){const o=e.split("|"),r=o[0],a=o[1];i&&this.emit("failedLoading",r,a,i),!i&&n&&this.store.addResourceBundle(r,a,n,void 0,void 0,{skipCopy:!0}),this.state[e]=i?-1:2,i&&n&&(this.state[e]=0);const s={};this.queue.forEach(l=>{Xf(l.loaded,[r],a),f2(l,e),i&&l.errors.push(i),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{s[c]||(s[c]={});const u=l.loaded[c];u.length&&u.forEach(d=>{s[c][d]===void 0&&(s[c][d]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",s),this.queue=this.queue.filter(l=>!l.done)}read(e,i,n){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,a=arguments.length>5?arguments[5]:void 0;if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:i,fcName:n,tried:o,wait:r,callback:a});return}this.readingCalls++;const s=(c,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(c&&u&&o<this.maxRetries){setTimeout(()=>{this.read.call(this,e,i,n,o+1,r*2,a)},r);return}a(c,u)},l=this.backend[n].bind(this.backend);if(l.length===2){try{const c=l(e,i);c&&typeof c.then=="function"?c.then(u=>s(null,u)).catch(s):s(null,c)}catch(c){s(c)}return}return l(e,i,s)}prepareLoading(e,i){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();k(e)&&(e=this.languageUtils.toResolveHierarchy(e)),k(i)&&(i=[i]);const r=this.queueLoad(e,i,n,o);if(!r.toLoad.length)return r.pending.length||o(),null;r.toLoad.forEach(a=>{this.loadOne(a)})}load(e,i,n){this.prepareLoading(e,i,{},n)}reload(e,i,n){this.prepareLoading(e,i,{reload:!0},n)}loadOne(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const n=e.split("|"),o=n[0],r=n[1];this.read(o,r,"read",void 0,void 0,(a,s)=>{a&&this.logger.warn(`${i}loading namespace ${r} for language ${o} failed`,a),!a&&s&&this.logger.log(`${i}loaded namespace ${r} for language ${o}`,s),this.loaded(e,a,s)})}saveMissing(e,i,n,o,r){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},s=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(i)){this.logger.warn(`did not save key "${n}" as the namespace "${i}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(n==null||n==="")){if(this.backend&&this.backend.create){const l={...a,isUpdate:r},c=this.backend.create.bind(this.backend);if(c.length<6)try{let u;c.length===5?u=c(e,i,n,o,l):u=c(e,i,n,o),u&&typeof u.then=="function"?u.then(d=>s(null,d)).catch(s):s(null,u)}catch(u){s(u)}else c(e,i,n,o,s,l)}!e||!e[0]||this.store.addResource(e[0],i,n,o)}}}const zs=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),k(t[1])&&(e.defaultValue=t[1]),k(t[2])&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const i=t[3]||t[2];Object.keys(i).forEach(n=>{e[n]=i[n]})}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Ss=t=>(k(t.ns)&&(t.ns=[t.ns]),k(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),k(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&t.supportedLngs.indexOf("cimode")<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t),Hi=()=>{},b2=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(i=>{typeof t[i]=="function"&&(t[i]=t[i].bind(t))})};class mi extends Qn{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Ss(e),this.services={},this.logger=ye,this.modules={external:[]},b2(this),i&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,i),this;setTimeout(()=>{this.init(e,i)},0)}}init(){var e=this;let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof i=="function"&&(n=i,i={}),!i.defaultNS&&i.defaultNS!==!1&&i.ns&&(k(i.ns)?i.defaultNS=i.ns:i.ns.indexOf("translation")<0&&(i.defaultNS=i.ns[0]));const o=zs();this.options={...o,...this.options,...Ss(i)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...o.interpolation,...this.options.interpolation}),i.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=i.keySeparator),i.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=i.nsSeparator);const r=u=>u?typeof u=="function"?new u:u:null;if(!this.options.isClone){this.modules.logger?ye.init(r(this.modules.logger),this.options):ye.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:typeof Intl<"u"&&(u=m2);const d=new xs(this.options);this.store=new ys(this.options.resources,this.options);const p=this.services;p.logger=ye,p.resourceStore=this.store,p.languageUtils=d,p.pluralResolver=new d2(d,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(p.formatter=r(u),p.formatter.init(p,this.options),this.options.interpolation.format=p.formatter.format.bind(p.formatter)),p.interpolator=new p2(this.options),p.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},p.backendConnector=new g2(r(this.modules.backend),p.resourceStore,p,this.options),p.backendConnector.on("*",function(h){for(var m=arguments.length,f=new Array(m>1?m-1:0),b=1;b<m;b++)f[b-1]=arguments[b];e.emit(h,...f)}),this.modules.languageDetector&&(p.languageDetector=r(this.modules.languageDetector),p.languageDetector.init&&p.languageDetector.init(p,this.options.detection,this.options)),this.modules.i18nFormat&&(p.i18nFormat=r(this.modules.i18nFormat),p.i18nFormat.init&&p.i18nFormat.init(this)),this.translator=new On(this.services,this.options),this.translator.on("*",function(h){for(var m=arguments.length,f=new Array(m>1?m-1:0),b=1;b<m;b++)f[b-1]=arguments[b];e.emit(h,...f)}),this.modules.external.forEach(h=>{h.init&&h.init(this)})}if(this.format=this.options.interpolation.format,n||(n=Hi),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=function(){return e.store[u](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=function(){return e.store[u](...arguments),e}});const l=It(),c=()=>{const u=(d,p)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(p),n(d,p)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initImmediate?c():setTimeout(c,0),l}loadResources(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Hi;const o=k(e)?e:this.language;if(typeof e=="function"&&(n=e),!this.options.resources||this.options.partialBundledLanguages){if(o&&o.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return n();const r=[],a=s=>{if(!s||s==="cimode")return;this.services.languageUtils.toResolveHierarchy(s).forEach(c=>{c!=="cimode"&&r.indexOf(c)<0&&r.push(c)})};o?a(o):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>a(l)),this.options.preload&&this.options.preload.forEach(s=>a(s)),this.services.backendConnector.load(r,this.options.ns,s=>{!s&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),n(s)})}else n(null)}reloadResources(e,i,n){const o=It();return typeof e=="function"&&(n=e,e=void 0),typeof i=="function"&&(n=i,i=void 0),e||(e=this.languages),i||(i=this.options.ns),n||(n=Hi),this.services.backendConnector.reload(e,i,r=>{o.resolve(),n(r)}),o}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&Yc.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let i=0;i<this.languages.length;i++){const n=this.languages[i];if(!(["cimode","dev"].indexOf(n)>-1)&&this.store.hasLanguageSomeTranslations(n)){this.resolvedLanguage=n;break}}}changeLanguage(e,i){var n=this;this.isLanguageChangingTo=e;const o=It();this.emit("languageChanging",e);const r=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},a=(l,c)=>{c?(r(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,o.resolve(function(){return n.t(...arguments)}),i&&i(l,function(){return n.t(...arguments)})},s=l=>{!e&&!l&&this.services.languageDetector&&(l=[]);const c=k(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);c&&(this.language||r(c),this.translator.language||this.translator.changeLanguage(c),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(c)),this.loadResources(c,u=>{a(u,c)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?s(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(s):this.services.languageDetector.detect(s):s(e),o}getFixedT(e,i,n){var o=this;const r=function(a,s){let l;if(typeof s!="object"){for(var c=arguments.length,u=new Array(c>2?c-2:0),d=2;d<c;d++)u[d-2]=arguments[d];l=o.options.overloadTranslationOptionHandler([a,s].concat(u))}else l={...s};l.lng=l.lng||r.lng,l.lngs=l.lngs||r.lngs,l.ns=l.ns||r.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||n||r.keyPrefix);const p=o.options.keySeparator||".";let h;return l.keyPrefix&&Array.isArray(a)?h=a.map(m=>`${l.keyPrefix}${p}${m}`):h=l.keyPrefix?`${l.keyPrefix}${p}${a}`:a,o.t(h,l)};return k(e)?r.lng=e:r.lngs=e,r.ns=i,r.keyPrefix=n,r}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const n=i.lng||this.resolvedLanguage||this.languages[0],o=this.options?this.options.fallbackLng:!1,r=this.languages[this.languages.length-1];if(n.toLowerCase()==="cimode")return!0;const a=(s,l)=>{const c=this.services.backendConnector.state[`${s}|${l}`];return c===-1||c===0||c===2};if(i.precheck){const s=i.precheck(this,a);if(s!==void 0)return s}return!!(this.hasResourceBundle(n,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(n,e)&&(!o||a(r,e)))}loadNamespaces(e,i){const n=It();return this.options.ns?(k(e)&&(e=[e]),e.forEach(o=>{this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}),this.loadResources(o=>{n.resolve(),i&&i(o)}),n):(i&&i(),Promise.resolve())}loadLanguages(e,i){const n=It();k(e)&&(e=[e]);const o=this.options.preload||[],r=e.filter(a=>o.indexOf(a)<0&&this.services.languageUtils.isSupportedCode(a));return r.length?(this.options.preload=o.concat(r),this.loadResources(a=>{n.resolve(),i&&i(a)}),n):(i&&i(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const i=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],n=this.services&&this.services.languageUtils||new xs(zs());return i.indexOf(n.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;return new mi(e,i)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Hi;const n=e.forkResourceStore;n&&delete e.forkResourceStore;const o={...this.options,...e,isClone:!0},r=new mi(o);return(e.debug!==void 0||e.prefix!==void 0)&&(r.logger=r.logger.clone(e)),["store","services","language"].forEach(s=>{r[s]=this[s]}),r.services={...this.services},r.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},n&&(r.store=new ys(this.store.data,o),r.services.resourceStore=r.store),r.translator=new On(r.services,o),r.translator.on("*",function(s){for(var l=arguments.length,c=new Array(l>1?l-1:0),u=1;u<l;u++)c[u-1]=arguments[u];r.emit(s,...c)}),r.init(o,i),r.translator.options=o,r.translator.backendConnector.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},r}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const F=mi.createInstance();F.createInstance=mi.createInstance;F.createInstance;F.dir;F.init;F.loadResources;F.reloadResources;F.use;F.changeLanguage;F.getFixedT;F.t;F.exists;F.setDefaultNamespace;F.hasLoadedNamespace;F.loadNamespaces;F.loadLanguages;const an=[],eo=()=>{F.isInitialized||F.init({lng:"en",resStore:{en:{}},fallbackLng:!1})},to=t=>t.reduce((e,i,n)=>(e.count===void 0&&typeof i=="number"&&(e.count=i),typeof i=="object"?{...e,...i}:(e[n]=i,e)),{}),H=function(t){eo();const e=to([...arguments].slice(1));return delete e.count,F.t(t,e)},Jc=function(t,e){eo();const i=to([...arguments].slice(2)),n=i.count;let o;delete i.count;const r=F.services.pluralResolver.getSuffix(F.language,n);return r?(i.defaultValue=e,o=t+r):(o=t,i.defaultValue=t),F.t(o,i)},v2=function(t,e){eo();const i=to([...arguments].slice(2));return i.context=t,delete i.count,F.t(e,i)},y2=function(t,e,i){eo();const n=to([...arguments].slice(3)),o=n.count,r=t?"_"+t:"";let a=e;delete n.count;const s=F.services.pluralResolver.getSuffix(F.language,o);return s?(n.defaultValue=i,a=e+r+s):(a=e,n.context=t),F.t(a,n)},_2=(t,e,i)=>{F.init({resources:{}}),F.addResourceBundle(t,e,i)},x2=ae(t=>class extends t{static get properties(){return{t:{type:Object,value(){return{}}}}}_filterT(e){return e.filter(i=>i!==this.t)}_(){return H.apply(null,this._filterT([...arguments]))}connectedCallback(){super.connectedCallback(),an.push(this)}disconnectedCallback(){super.disconnectedCallback();const e=an.indexOf(this);e>=0&&an.splice(e,1)}gettext(){return H.apply(null,this._filterT([...arguments]))}ngettext(){return Jc.apply(null,this._filterT([...arguments]))}pgettext(){return v2.apply(null,this._filterT([...arguments]))}npgettext(){return y2.apply(null,this._filterT([...arguments]))}});class w2 extends G{static get properties(){return{compatibilityJSON:{type:String,value:"v3"},domain:{type:String,value:"messages"},interpolationPrefix:{type:String,value:"__"},interpolationSuffix:{type:String,value:"__"},language:{type:String,value:"en"},namespace:{type:String,value:"translation"},translations:{type:Object,observer(e){e!=null&&(_2(this.language,this.namespace,e),an.forEach(i=>i.set("t",{})))}},keySeparator:{type:String,value:"."},nsSeparator:{type:String,value:":"}}}ready(){super.ready(),F.init({compatibilityJSON:this.compatibilityJSON,interpolation:{escapeValue:!1,prefix:this.interpolationPrefix,suffix:this.interpolationSuffix},keySeparator:this.keySeparator,lng:this.language,nsSeparator:this.nsSeparator,resStore:{}})}}customElements.define("cosmoz-i18next",w2);const Xc=t=>typeof t.close=="function"?t:Xc(t.parentElement),qr=t=>class extends t{static get properties(){return{filter:{type:Object,notify:!0},values:{type:Array,value(){return[]}},headerFocused:{type:Boolean,notify:!0},min:{type:Number,value:null},max:{type:Number,value:null},limits:{type:Function},autoupdate:{type:String,value:!0},locale:{type:String,value:null},_filterInput:{type:Object,value(){return{min:null,max:null}}},_range:{type:Object,computed:"_computeRange(values.*)"},_limit:{type:Object,computed:"_computeLimit(_range, _filterInput.*, min, max)",value(){return{}}},_tooltip:{type:String,computed:"_computeTooltip(title, _filterText)"},_fromClasses:{type:String,computed:"_computeInputClasses(_filterInput.min)"},_toClasses:{type:String,computed:"_computeInputClasses(_filterInput.max)"}}}static get observers(){return["_filterInputChanged(_filterInput.*, autoupdate)","_filterChanged(filter.*)","_updateLimits(limits, headerFocused)"]}disconnectedCallback(){this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),super.disconnectedCallback()}_computeInputClasses(e){return e!=null&&e!==""?"has-value":""}toNumber(e,i,n){if(e==null||e==="")return;const o=typeof e=="number"?e:Number(e);if(Number.isNaN(o))return;if(n==null||i==null)return o;const r=this.toNumber(i);return r==null?o:n(o,r)}toValue(){return this.toNumber.apply(this,arguments)}getComparableValue(e,i){if(e==null)return;let n=e;return i!=null&&(n=this.get(i,e)),this.toValue(n)}renderValue(){}getInputString(e,i=this.valuePath){const n=this.toValue(this.get(i,e));return this._toInputString(n)}_computeRange(e){const i=e.base,n=Array.isArray(i)&&i.length&&i.map(o=>this.toValue(o)).filter(o=>o!=null);return!n||n.length<1?{min:null,max:null}:n.reduce((o,r)=>({min:this.toValue(r,o.min,Math.min),max:this.toValue(r,o.max,Math.max)}),{})}_computeLimit(e,i,n,o){if(!e)return;const r=i.base,a=this.toValue(n),s=this.toValue(o),l=a??this.toValue(e.min),c=s??this.toValue(e.max);return{fromMin:l,fromMax:this.toValue(c,this._fromInputString(r.max,"max"),Math.min),toMin:this.toValue(l,this._fromInputString(r.min,"min"),Math.max),toMax:c}}_computeFilterText(e){if(e.base==null)return;const i=e.base,n=this.toValue(i.min),o=this.toValue(i.max),r=[];return n!=null&&r.push(this.renderValue(n)),r.push(" - "),o!=null&&r.push(this.renderValue(o)),r.length>1?r.join(""):void 0}_computeTooltip(e,i){return i==null?e:`${e}: ${i}`}_fromInputString(e){return this.toValue(e)}_toInputString(e){const i=this.toValue(e);return i??null}_getDefaultFilter(){return{min:null,max:null}}_filterInputChanged(e,i){const n=e.path.split(".")[1];this.__inputChangePath=n||null,i&&(this._limitInputDebouncer=De.debounce(this._limitInputDebouncer,dt.after(600),()=>{this._limitInput(),this._updateFilter()}),Ar(this._limitInputDebouncer))}_clearFrom(){this.set("_filterInput.min",null),this._updateFilter()}_clearTo(){this.set("_filterInput.max",null),this._updateFilter()}_onBlur(){this._limitInput(),this._updateFilter()}_onKeyDown(e){const i=e.currentTarget,n=Array.from(i.parentElement.querySelectorAll("cosmoz-input")),o=n[n.findIndex(s=>s===i)+1],r=!o,a=n[0]===i;switch(e.keyCode){case 13:if(e.preventDefault(),!r)o.focus();else{const s=this._limitInput();this._updateFilter(),s||this._closeParent(i)}break;case 9:(r&&!e.shiftKey||a&&e.shiftKey)&&this._closeParent(i)}}_closeParent(e){Xc(e).close()}_onDropdownOpenedChanged({currentTarget:e,detail:{value:i}}){i&&setTimeout(()=>e.querySelector("cosmoz-input").focus(),100)}_limitInput(){const e=this._filterInput,i=this.__inputChangePath,n=i?this._fromInputString(this.get(i,e),i):null;if(this.__inputChangePath=null,n==null)return!1;const o=this._limit,r=i==="min"?"from":"to",a=this.get(r+"Min",o),s=this.get(r+"Max",o),l=this.toValue(n,a,Math.max),c=this.toValue(l,s,Math.min);return this.getComparableValue(n)!==this.getComparableValue(c)?(this.set(["_filterInput",i],this._toInputString(c,i)),this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),!0):!1}_updateFilter(){const e=this._filterInput,i=this.filter,n=this._fromInputString(e.min,"min"),o=this._fromInputString(e.max,"max");this.getComparableValue(n)===this.getComparableValue(i,"min")&&this.getComparableValue(o)===this.getComparableValue(i,"max")||this.set("filter",{min:n,max:o})}_filterChanged(e){if(this._filterInput==null)return;const i=this._filterInput,n=e.base,o=this._fromInputString(i.min,"min"),r=this._fromInputString(i.max,"max");this.getComparableValue(o)===this.getComparableValue(n,"min")&&this.getComparableValue(r)===this.getComparableValue(n,"max")||(this.set("_filterInput",{min:this._toInputString(n.min),max:this._toInputString(n.max)}),this._limitInputDebouncer&&this._limitInputDebouncer.cancel())}hasFilter(){const e=this.filter;return e==null?!1:this.toValue(e.min)!=null||this.toValue(e.max)!=null}resetFilter(){this.filter=this._getDefaultFilter()}_updateLimits(e,i){e&&Promise.resolve(qn(e,{active:i})).then(n=>{const{min:o,max:r}=n??{};Object.assign(this,{...o!=null?{min:o}:{},...r!=null?{max:r}:{}})})}},Ci=t=>class extends t{static get template(){return U`<div id="output" style="position:relative;"></div>`}connectedCallback(){super.connectedCallback(),ln(this.render(),this.$.output)}_propertiesChanged(e,i,n){super._propertiesChanged(e,i,n),requestAnimationFrame(()=>ln(this.render(),this.$.output))}};class C2 extends qr(Ci(G)){static get properties(){return{currency:{type:String},autodetect:{type:Boolean,value:!1},rates:{type:Object},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:"_computeFilterText(filter.*, _formatters)"}}}static get observers(){return["_valuesChanged(autodetect, currency, values)"]}render(){const e=i=>{this.headerFocused=i.detail.value,this._onDropdownOpenedChanged(i)};return _`
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
				placeholder=${Q(this._filterText)}
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
						title=${H("Minimum amount")}
						label=${H("Min amount")}
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
						title=${H("Maximum amount")}
						label=${H("Max amount")}
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
		`}_valuesChanged(e,i,n){if(!Array.isArray(n)||n.length<1||!e&&i)return;const o=n.reduce((a,s)=>{if(s.currency){const l=s.currency;a[l]=(a[l]||0)+1}return a},{});let r=Object.keys(o)[0];Object.keys(o).reduce((a,s)=>{const l=Math.max(a,o[s]);return l===o[s]&&(r=s),l},0),this.set("currency",r)}toAmount(e,i,n){if(e==null||e==="")return;if(typeof e!="object"||e.currency==null||e.currency==="")return null;const o=this.toNumber(e.amount);if(o==null||Number.isNaN(o))return null;const r={currency:e.currency,amount:o};if(n==null||i==null)return r;const a=this.toAmount(i);if(a==null)return r;const s=this.rates||{},l=r.amount*(s[r.currency]||1),c=a.amount*(s[a.currency]||1);return this.toNumber(l,c,n)===l?r:a}toValue(){return this.toAmount.apply(this,arguments)}getComparableValue(e,i){const n=super.getComparableValue(e,i);if(n==null)return;const o=this.toNumber(n.amount),r=this.rates;return r==null?o:o*(r[n.currency]||1)}getString(e,i=this.valuePath){const n=this.toValue(this.get(i,e));return n===void 0?"":n===null?"Invalid value":this.renderValue(n)}getCurrency(e,i){const n=this.get(i,e);return n&&n.currency}getFormatter(e,i){const n=i||"",o=e+n||"",r=this._formatters=this._formatters||{};return r[o]||(r[o]=new Intl.NumberFormat(i||void 0,{style:"currency",currency:e})),r[o]}renderValue(e){const i=this.toAmount(e);return i==null?"":this.getFormatter(i.currency,this.locale).format(e.amount)}_amountValueChanged(e){const i=e.target,n=i.value,o=e.model.item,r=this.get(this.valuePath,o),a=Number(n),s={amount:a,currency:r.currency};this.set(this.valuePath,s,o),this._fireItemChangeEvent(o,this.valuePath,r,this.renderValue.bind(this))}_toInputString(e){const i=this.toValue(e);return i==null?null:this.toNumber(i.amount)}_toInputStringAmount(e){const i=this.rates;if(i==null)return this._toInputString(e);const n=this.toValue(e);return n==null?null:(this.toNumber(n.amount)*(i[n.currency]||1)/(i[this.currency]||1)).toFixed(2)}_fromInputString(e,i){const n=this.toNumber(e);if(n!=null)return this.toValue({amount:n,currency:i&&this.get(["filter",i,"currency"])||this.currency})}}customElements.define("cosmoz-omnitable-amount-range-input",C2);const ce=(t,e,i)=>{if(t==null||t==="")return;const n=typeof t=="number"?t:Number(t);if(!Number.isNaN(n))return n},Zc=t=>{const e=ce(t);return e==null?null:e.toString()},z2=({valuePath:t},e)=>{const i=ce(t?L(e,t):e);return Zc(i)},As=t=>{const e=Zc(t);return e??""},ft=({valuePath:t,maximumFractionDigits:e},i)=>{if(i==null)return;const n=t?L(i,t):i,o=ce(n);if(o!=null)return e!==null?ce(o.toFixed(e)):o},S2=Df((t,e,i)=>{const n={localeMatcher:"best fit"};return e!==null&&(n.minimumFractionDigits=e),i!==null&&(n.maximumFractionDigits=i),new Intl.NumberFormat(t||void 0,n)}),zo=({valuePath:t,locale:e,minimumFractionDigits:i,maximumFractionDigits:n},o)=>{const r=t?L(o,t):o;if(r==null)return"";const a=ce(r);return a==null?void 0:S2(e,i,n).format(a)},A2=(t,e)=>i=>{const n=ft(t,i);if(n==null)return!1;const o=ft({...t,valuePath:"min"},e),r=ft({...t,valuePath:"max"},e);return!(n<(o??-1/0)||n>(r??1/0))},fi=(t={},e,i,n)=>{if(e==null||e==="")return;if(typeof e!="object"||e.currency==null||e.currency==="")return null;const o=ce(e.amount);return o==null||Number.isNaN(o)?null:{currency:e.currency,amount:o}},gt=({valuePath:t,rates:e},i)=>{if(i==null)return;let n=i;if(t!=null&&(n=L(i,t)),n=fi(e,n),n==null)return;const o=ce(n.amount);return e==null?o:o*(e[n.currency]||1)},E2=(t,e)=>i=>{const n=gt(t,i);if(n==null)return!1;const o=gt({...t,valuePath:"min"},e),r=gt({...t,valuePath:"max"},e);return!(n<o||n>r)},Ni={},M2=(t,e)=>{const i=e||"",n=t+i||"";return Ni[n]||(Ni[n]=new Intl.NumberFormat(e||void 0,{style:"currency",currency:t})),Ni[n]},L2=(t,e,i)=>{const n=fi(t,e);return n==null?"":M2(n.currency,i).format(n.amount)},So=({valuePath:t,rates:e,locale:i},n)=>{const o=fi(e,L(n,t));return o===void 0?"":o===null?"Invalid value":L2(e,o,i)},Es=t=>t?t.amount+t.currency:"",Ms=t=>{if(t==null||t==="")return;const e=t.match(/^(-?[\d]+)([\D]+?)$/iu);return!Array.isArray(e)||e.length<0?null:{amount:e[1],currency:e[2]}},k2=({valuePath:t},e)=>L(e,t)?.currency,O2=({valuePath:t},e)=>L(e,t)?.amount;class $2 extends ze(G){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},currency:{type:String,notify:!0},autodetect:{type:Boolean,value:!1,notify:!0},rates:{type:Object,notify:!0},width:{type:String,value:"70px"},cellClass:{type:String,value:"amount-cell align-right"},headerCellClass:{type:String,value:"amount-header-cell"}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,i){const n=gt({...e,valuePath:"min"},i),o=gt({...e,valuePath:"max"},i);if(!(n==null&&o==null))return E2(e,i)}getString(e,i){return So(e,i)}toXlsxValue(e,i){return So(e,i)}cellTitleFn(e,i){return So(e,i)}getComparableValue(e,i){return gt(e,i)}serializeFilter({rates:e},i){if(i==null)return;const n=fi(e,i.min),o=fi(e,i.max);if(!(n==null&&o==null))return Es(n)+"~"+Es(o)}deserializeFilter(e,i){if(i==null||i==="")return null;const n=i.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Ms(n[1]),max:Ms(n[2])}:null}renderCell(e,{item:i}){return _`<span>${e.getString(e,i)}</span>`}renderEditCell(e,{item:i},n){return _`<cosmoz-input
			no-label-float
			type="number"
			@change=${r=>n({amount:r.target.value,currency:L(i,e.valuePath)?.currency})}
			.value=${O2(e,i)}
		>
			<div slot="suffix">${k2(e,i)}</div>
		</cosmoz-input>`}renderHeader({title:e,min:i,max:n,limits:o,locale:r,rates:a,currency:s,autoupdate:l,autodetect:c},{filter:u},d,p){return _`<cosmoz-omnitable-amount-range-input
			.title=${e}
			.filter=${u}
			.values=${p}
			.rates=${a}
			.min=${i}
			.max=${n}
			.limits=${o}
			.locale=${r}
			.currency=${s}
			.autoupdate=${l}
			.autodetect=${c}
			@filter-changed=${({detail:{value:h}})=>d(m=>({...m,filter:h}))}
			@header-focused-changed=${({detail:{value:h}})=>d(m=>({...m,headerFocused:h}))}
		></cosmoz-omnitable-amount-range-input>`}computeSource(e,i){return wi(e,i)}}customElements.define("cosmoz-omnitable-column-amount",$2);const T2=xe`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",V(()=>de,{styleSheets:[T2]}));/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class P2{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class I2{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise((e=>this.Z=e))}resume(){this.Z?.(),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ls=t=>!Mu(t)&&typeof t.then=="function",ks=1073741823;let H2=class extends Dn{constructor(){super(...arguments),this._$Cwt=ks,this._$Cbt=[],this._$CK=new P2(this),this._$CX=new I2}render(...e){return e.find((i=>!Ls(i)))??ne}update(e,i){const n=this._$Cbt;let o=n.length;this._$Cbt=i;const r=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let s=0;s<i.length&&!(s>this._$Cwt);s++){const l=i[s];if(!Ls(l))return this._$Cwt=s,l;s<o&&l===n[s]||(this._$Cwt=ks,o=0,Promise.resolve(l).then((async c=>{for(;a.get();)await a.get();const u=r.deref();if(u!==void 0){const d=u._$Cbt.indexOf(l);d>-1&&d<u._$Cwt&&(u._$Cwt=d,u.setValue(c))}})))}return ne}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const rr=Oe(H2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Os=(t,e,i)=>{const n=new Map;for(let o=e;o<=i;o++)n.set(t[o],o);return n},Br=Oe(class extends St{constructor(t){if(super(t),t.type!==ge.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let n;i===void 0?i=e:e!==void 0&&(n=e);const o=[],r=[];let a=0;for(const s of t)o[a]=n?n(s,a):a,r[a]=i(s,a),a++;return{values:r,keys:o}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,n]){const o=Lu(t),{values:r,keys:a}=this.dt(e,i,n);if(!Array.isArray(o))return this.ut=a,r;const s=this.ut??=[],l=[];let c,u,d=0,p=o.length-1,h=0,m=r.length-1;for(;d<=p&&h<=m;)if(o[d]===null)d++;else if(o[p]===null)p--;else if(s[d]===a[h])l[h]=Ke(o[d],r[h]),d++,h++;else if(s[p]===a[m])l[m]=Ke(o[p],r[m]),p--,m--;else if(s[d]===a[m])l[m]=Ke(o[d],r[m]),Lt(t,l[m+1],o[d]),d++,m--;else if(s[p]===a[h])l[h]=Ke(o[p],r[h]),Lt(t,o[d],o[p]),p--,h++;else if(c===void 0&&(c=Os(a,h,m),u=Os(s,d,p)),c.has(s[d]))if(c.has(s[p])){const f=u.get(a[h]),b=f!==void 0?o[f]:null;if(b===null){const v=Lt(t,o[d]);Ke(v,r[h]),l[h]=v}else l[h]=Ke(b,r[h]),Lt(t,o[d],b),o[f]=null;h++}else so(o[p]),p--;else so(o[d]),d++;for(;h<=m;){const f=Lt(t,l[m+1]);Ke(f,r[h]),l[h++]=f}for(;d<=p;){const f=o[d++];f!==null&&so(f)}return this.ut=a,rl(t,l),ne}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class io extends Event{constructor(e){super(io.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}io.eventName="rangeChanged";class no extends Event{constructor(e){super(no.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}no.eventName="visibilityChanged";class oo extends Event{constructor(){super(oo.eventName,{bubbles:!1})}}oo.eventName="unpinned";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class N2{constructor(e){this._element=null;const i=e??window;this._node=i,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class F2 extends N2{constructor(e,i){super(i),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const n=this._node;this._originalScrollTo=n.scrollTo,this._originalScrollBy=n.scrollBy,this._originalScroll=n.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(e,i){const n=typeof e=="number"&&typeof i=="number"?{left:e,top:i}:e;this._scrollTo(n)}scrollBy(e,i){const n=typeof e=="number"&&typeof i=="number"?{left:e,top:i}:e;n.top!==void 0&&(n.top+=this.scrollTop),n.left!==void 0&&(n.left+=this.scrollLeft),this._scrollTo(n)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,i=null,n=null){this._end!==null&&this._end(),e.behavior==="smooth"?(this._setDestination(e),this._retarget=i,this._end=n):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:i,left:n}=e;return i=i===void 0?void 0:Math.max(0,Math.min(i,this.maxScrollTop)),n=n===void 0?void 0:Math.max(0,Math.min(n,this.maxScrollLeft)),this._destination!==null&&n===this._destination.left&&i===this._destination.top?!1:(this.__destination={top:i,left:n,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,i,n){return this._scrollTo(e,i,n),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:e,scrollLeft:i}=this;let{top:n,left:o}=this._destination;n=Math.min(n||0,this.maxScrollTop),o=Math.min(o||0,this.maxScrollLeft);const r=Math.abs(n-e),a=Math.abs(o-i);r<1&&a<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(e){this._clients.add(e),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let $s=typeof window<"u"?window.ResizeObserver:void 0;const ar=Symbol("virtualizerRef"),Fi="virtualizer-sizer";let Ts;class V2{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw new Error("Virtualizer constructor requires a configuration object");if(e.hostElement)this._init(e);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);const i=e.layout||{};this._layoutInitialized=this._initLayout(i)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new $s(()=>this._hostElementSizeChanged()),this._childrenRO=new $s(this._childrenSizeChanged.bind(this))}_initHostElement(e){const i=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),i[ar]=this}connected(){this._initObservers();const e=this._isScroller;this._clippingAncestors=q2(this._hostElement,e),this._scrollerController=new F2(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(e=>e.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const i=this._hostElement.style;i.display=i.display||"block",i.position=i.position||"relative",i.contain=i.contain||"size layout",this._isScroller&&(i.overflow=i.overflow||"auto",i.minHeight=i.minHeight||"150px")}_getSizer(){const e=this._hostElement;if(!this._sizer){let i=e.querySelector(`[${Fi}]`);i||(i=document.createElement("div"),i.setAttribute(Fi,""),e.appendChild(i)),Object.assign(i.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),i.textContent="&nbsp;",i.setAttribute(Fi,""),this._sizer=i}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;const i=e.type||Ts;if(typeof i=="function"&&this._layout instanceof i){const n={...e};return delete n.type,this._layout.config=n,!0}return!1}async _initLayout(e){let i,n;if(typeof e.type=="function"){n=e.type;const o={...e};delete o.type,i=o}else i=e;n===void 0&&(Ts=n=(await ku(()=>import("./flow-Cd2WZlRY.js"),[],import.meta.url)).FlowLayout),this._layout=new n(o=>this._handleLayoutMessage(o),i),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const e=window.performance.now(),i=e-this._benchmarkStart,o=performance.getEntriesByName("uv-virtualizing","measure").filter(r=>r.startTime>=this._benchmarkStart&&r.startTime<e).reduce((r,a)=>r+a.duration,0);return this._benchmarkStart=null,{timeElapsed:i,virtualizationTime:o}}return null}_measureChildren(){const e={},i=this._children,n=this._measureChildOverride||this._measureChild;for(let o=0;o<i.length;o++){const r=i[o],a=this._first+o;(this._itemsChanged||this._toBeMeasured.has(r))&&(e[a]=n.call(this,r,this._items[a]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){const{width:i,height:n}=e.getBoundingClientRect();return Object.assign({width:i,height:n},R2(e))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;const{_rangeChanged:i,_itemsChanged:n}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(i||n)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(e){console.warn("Error measuring performance data: ",e)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(e){switch(e.type){case"scroll":(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent();break;default:console.warn("event not handled",e)}}_handleLayoutMessage(e){e.type==="stateChanged"?this._updateDOM(e):e.type==="visibilityChanged"?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):e.type==="unpinned"&&this._hostElement.dispatchEvent(new oo)}get _children(){const e=[];let i=this._hostElement.firstElementChild;for(;i;)i.hasAttribute(Fi)||e.push(i),i=i.nextElementSibling;return e}_updateView(){const e=this._hostElement,i=this._scrollerController?.element,n=this._layout;if(e&&i&&n){let o,r,a,s;const l=e.getBoundingClientRect();o=0,r=0,a=window.innerHeight,s=window.innerWidth;const c=this._clippingAncestors.map(v=>v.getBoundingClientRect());c.unshift(l);for(const v of c)o=Math.max(o,v.top),r=Math.max(r,v.left),a=Math.min(a,v.bottom),s=Math.min(s,v.right);const u=i.getBoundingClientRect(),d={left:l.left-u.left,top:l.top-u.top},p={width:i.scrollWidth,height:i.scrollHeight},h=o-l.top+e.scrollTop,m=r-l.left+e.scrollLeft,f=Math.max(0,a-o),b=Math.max(0,s-r);n.viewportSize={width:b,height:f},n.viewportScroll={top:h,left:m},n.totalScrollSize=p,n.offsetWithinScroller=d}}_sizeHostElement(e){const n=e&&e.width!==null?Math.min(82e5,e.width):0,o=e&&e.height!==null?Math.min(82e5,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${n}px, ${o}px)`;else{const r=this._hostElement.style;r.minWidth=n?`${n}px`:"100%",r.minHeight=o?`${o}px`:"100%"}}_positionChildren(e){e&&e.forEach(({top:i,left:n,width:o,height:r,xOffset:a,yOffset:s},l)=>{const c=this._children[l-this._first];c&&(c.style.position="absolute",c.style.boxSizing="border-box",c.style.transform=`translate(${n}px, ${i}px)`,o!==void 0&&(c.style.width=o+"px"),r!==void 0&&(c.style.height=r+"px"),c.style.left=a===void 0?null:a+"px",c.style.top=s===void 0?null:s+"px")})}async _adjustRange(e){const{_first:i,_last:n,_firstVisible:o,_lastVisible:r}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==i||this._last!==n,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==o||this._lastVisible!==r}_correctScrollError(){if(this._scrollError){const{scrollTop:e,scrollLeft:i}=this._scrollerController,{top:n,left:o}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-n,left:i-o})}}element(e){return e===1/0&&(e=this._items.length-1),this._items?.[e]===void 0?void 0:{scrollIntoView:(i={})=>this._scrollElementIntoView({...i,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),e.behavior==="smooth"){const i=this._layout.getScrollIntoViewCoordinates(e),{behavior:n}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(i,{behavior:n}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){const{index:i}=this._scrollIntoViewTarget||{};i&&e?.has(i)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new io({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new no({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((e,i)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=i})),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){if(this._layout?.measureChildren){for(const i of e)this._toBeMeasured.set(i.target,i.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function R2(t){const e=window.getComputedStyle(t);return{marginTop:Vi(e.marginTop),marginRight:Vi(e.marginRight),marginBottom:Vi(e.marginBottom),marginLeft:Vi(e.marginLeft)}}function Vi(t){const e=t?parseFloat(t):NaN;return Number.isNaN(e)?0:e}function Ps(t){if(t.assignedSlot!==null)return t.assignedSlot;if(t.parentElement!==null)return t.parentElement;const e=t.parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host||null}function D2(t,e=!1){const i=[];let n=e?t:Ps(t);for(;n!==null;)i.push(n),n=Ps(n);return i}function q2(t,e=!1){let i=!1;return D2(t,e).filter(n=>{if(i)return!1;const o=getComputedStyle(n);return i=o.position==="fixed",o.overflow!=="visible"})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B2=t=>t,j2=(t,e)=>_`${e}: ${JSON.stringify(t,null,2)}`;class U2 extends Dn{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(i,n)=>j2(i,n+this._first),this._keyFunction=(i,n)=>B2(i,n+this._first),this._items=[],e.type!==ge.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(e){e&&this._setFunctions(e);const i=[];if(this._first>=0&&this._last>=this._first)for(let n=this._first;n<=this._last;n++)i.push(this._items[n]);return Br(i,this._keyFunction,this._renderItem)}update(e,[i]){this._setFunctions(i);const n=this._items!==i.items;return this._items=i.items||[],this._virtualizer?this._updateVirtualizerConfig(e,i):this._initialize(e,i),n?ne:this.render()}async _updateVirtualizerConfig(e,i){if(!await this._virtualizer.updateLayoutConfig(i.layout||{})){const o=e.parentNode;this._makeVirtualizer(o,i)}this._virtualizer.items=this._items}_setFunctions(e){const{renderItem:i,keyFunction:n}=e;i&&(this._renderItem=(o,r)=>i(o,r+this._first)),n&&(this._keyFunction=(o,r)=>n(o,r+this._first))}_makeVirtualizer(e,i){this._virtualizer&&this._virtualizer.disconnected();const{layout:n,scroller:o,items:r}=i;this._virtualizer=new V2({hostElement:e,layout:n,scroller:o}),this._virtualizer.items=r,this._virtualizer.connected()}_initialize(e,i){const n=e.parentNode;n&&n.nodeType===1&&(n.addEventListener("rangeChanged",o=>{this._first=o.first,this._last=o.last,this.setValue(this.render())}),this._makeVirtualizer(n,i))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const Qc=Oe(U2),K2=(t,e)=>{if(!t||!e)return;const i=Object.keys(e);return Object.fromEntries(Object.keys(t).flatMap(n=>i.includes(n)?[]:[[n,void 0]]))};class W2 extends St{_props;render(e){return ne}update(e,[i]){return this._props!==i&&Object.assign(e.element,K2(this._props,i),this._props=i),ne}}const G2=Oe(W2),Y2=t=>{const e=xi(),i=M(()=>new CSSStyleSheet,[]);$(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,i]},[]),$(()=>{i.replaceSync(t)},[t])};function zt(t){return t?e=>e?.[t]:Ze}const eu=t=>{const e=zt(t);return i=>typeof i=="string"?i:e(i)?.toString()||""},$n=t=>e=>{const i={};for(const n in e)t.includes(n)&&(i[n]=e[n]);return i},J2="data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1L5.20039 7.04766L1.66348 3.46152' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",X2=xe`
	:host {
		position: fixed;
		z-index: 1000;
		font-family: var(--paper-font-subhead_-_font-family, inherit);
		background: var(--cosmoz-autocomplete-listbox-bg, rgba(255, 255, 255, 0.75));
		min-width: 50px;
		backdrop-filter: blur(16px) saturate(180%);
		-webkit-backdrop-filter: blur(16px) saturate(180%);
		border-radius: 6px;
		box-shadow:
			0 4px 24px 0 rgba(0, 0, 0, 0.18),
			0 1.5px 6px 0 rgba(0, 0, 0, 0.1);
		text-transform: var(--cosmoz-autocomplete-listbox-text-transform, initial);
		overflow: hidden;
		transition:
			opacity 150ms ease-in-out,
			transform 100ms ease-in-out;
	}
	:host(:popover-open) {
		box-sizing: border-box;
		display: block;
		margin: 0;
		border: 1px solid rgba(200, 200, 200, 0.25);

		opacity: 1;
		transform: translateY(0);

		@starting-style {
			opacity: 0;
			transform: translateY(-50px);
		}
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
		font-size: var(--cosmoz-autocomplete-listbox-font-size, 13px);
		font-weight: var(--cosmoz-autocomplete-listbox-font-weight, 400);
		padding: 0 22px;
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
		background: url("${J2}") #5881f6 no-repeat 50%;
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
	}
	[virtualizer-sizer]:not(.sizer) {
		line-height: 1;
	}
`,Z2=({index:t,itemHeight:e,auto:i})=>xe`
	${q(!i,()=>xe`
			.item {
				line-height: ${e}px;
				height: ${e}px;
			}
		`)}

	.item[data-index='${t||"0"}'] {
		background: var(
			--cosmoz-listbox-active-color,
			var(--cosmoz-selection-color, rgba(58, 145, 226, 0.1))
		);
	}
`,Q2=t=>typeof t=="object"&&t!==null&&Symbol.iterator in t;function me(t){return t==null?[]:Array.isArray(t)?t:typeof t=="string"?[t]:Q2(t)?Array.from(t):[t]}const Ao=(t,e=Ze)=>i=>{const n=me(t).map(e);return me(i).filter(o=>!n.includes(e(o)))},eg=(t,e)=>e?i=>me(t).find(n=>n[e]===i[e]):i=>me(t).includes(i),tg=(t,e)=>{if(!e||!t)return t;const i=t.toLowerCase().indexOf(e.toLowerCase());if(i<0)return t;const n=i+e.length;return[t.slice(0,i),_`<mark>${t.slice(i,n)}</mark>`,t.slice(n)]},ig=t=>{const e=$e(t);$(()=>{const i=n=>{if(!(n.ctrlKey&&n.altKey||n.defaultPrevented))switch(n.key){case"Up":case"ArrowUp":n.preventDefault(),e.onUp();break;case"Down":case"ArrowDown":n.preventDefault(),e.onDown();break;case"Enter":n.preventDefault(),e.onEnter();break}};return document.addEventListener("keydown",i,!0),()=>document.removeEventListener("keydown",i,!0)},[e])},ng=({items:t,onSelect:e,defaultIndex:i=0})=>{const[n,o]=J({index:i}),{index:r}=n,{length:a}=t;return $(()=>{o({index:n.index<0?i:Math.min(n.index,t.length-1),scroll:!0})},[t,i]),ig({onUp:S(()=>o(s=>({index:s.index>0?s.index-1:a-1,scroll:!0})),[a]),onDown:S(()=>o(s=>({index:s.index<a-1?s.index+1:0,scroll:!0})),[a]),onEnter:S(()=>r>-1&&r<a&&e?.(t[r],r),[r,t,e])}),{position:n,highlight:S(s=>o({index:s}),[]),select:S(s=>e?.(s),[e])}},og=(t=Ze)=>(e,i,{highlight:n,select:o,textual:r=Ze,query:a,isSelected:s})=>{const l=r(e),c=tg(l,a),u=t(c,e,i);return _`<div
				class="item"
				role="option"
				part="option"
				?aria-selected=${s(e)}
				data-index=${i}
				@mouseenter=${()=>n(i)}
				@click=${()=>o(e)}
				@mousedown=${d=>d.preventDefault()}
				title=${l}
			>
				${u}
			</div>
			<div class="sizer" virtualizer-sizer>${u}</div>`},rg=({itemRenderer:t=og(),...e})=>{const i=$e(e);return S((n,o)=>t(n,o,i),[i,t])},ag=t=>{const e=t==="auto",[i,n]=J(e?40:t);return[i,o=>e?n(o):void 0]},sg=["query","items","onSelect","textual","anchor","itemHeight","itemLimit","itemRenderer","defaultIndex","value","valueProperty","loading"],lg=({value:t,valueProperty:e,items:i,onSelect:n,defaultIndex:o,query:r,textual:a,itemRenderer:s,itemHeight:l=40,itemLimit:c=5})=>{const u=M(()=>eg(t,e),[t,e]),d=M(()=>i.slice(),[i,u]),{position:p,highlight:h,select:m}=ng({items:d,onSelect:n,defaultIndex:isNaN(o)?void 0:Number(o)}),[f,b]=ag(l);return{position:p,items:d,height:Math.min(c,d.length)*f,highlight:h,select:m,itemHeight:f,setItemHeight:b,renderItem:rg({itemRenderer:s,items:d,position:p,highlight:h,select:m,textual:a,query:r,isSelected:u})}},Is=vr,cg=t=>{const e=vi(void 0),{position:i,items:n,renderItem:o,height:r,itemHeight:a,setItemHeight:s}=lg(t);return $(()=>{const l=e.current?.[ar];l&&l.layoutComplete.then(()=>{t.dispatchEvent(new CustomEvent("layout-complete"));const{averageChildSize:c,averageMarginSize:u}=l._layout._metricsCache;return s(c+u*2)},Is)},[n]),$(()=>{if(!i.scroll)return;const l=e.current?.[ar];if(l){if(!l?._layout){l.layoutComplete.then(()=>l.element(i.index)?.scrollIntoView({block:"nearest"}),Is);return}l.element(i.index)?.scrollIntoView({block:"nearest"})}},[i]),Y2(Z2({...i,itemHeight:a,auto:t.itemHeight==="auto"})),_`<div
			class="items"
			style="min-height: ${r}px"
			${Qe(l=>e.current=l)}
		>
			<div virtualizer-sizer></div>
			${Qc({items:n,renderItem:o,scroller:!0})}
		</div>
		<slot></slot>`};customElements.define("cosmoz-listbox",Nl(V(cg,{styleSheets:[Et(X2)]})));const ug=({multi:t,setFloating:e,styles:i,...n},o)=>_`<cosmoz-listbox
		style="${Hl(i)}"
		@connected="${r=>r.target.showPopover?.()}"
		popover="manual"
		part="listbox"
		?multi=${t}
		${Qe(e)}
		...=${G2($n(sg)(n))}
		>${o}</cosmoz-listbox
	>`,dg=Te`
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
		font-family: var(--cosmoz-autocomplete-chip-text-font-family, 'Inter', sans-serif);
		font-size: var(--cosmoz-autocomplete-chip-text-font-size, 12px);
		font-weight: var(--cosmoz-autocomplete-chip-text-font-weight, 400);
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
`,pg=_`
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
`,hg=({onClear:t,disabled:e})=>_`
	<div class="content" part="content chip-text"><slot></slot></div>
	${q(t&&!e,()=>_`<span
				class="clear"
				part="clear chip-clear"
				@mousedown=${i=>i.preventDefault()}
				@click=${t}
			>
				${pg}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",V(hg,{observedAttributes:["disabled"],styleSheets:[Et(dg)]}));const Hs=({content:t,onClear:e,disabled:i,hidden:n,className:o="chip",slot:r})=>_`<cosmoz-autocomplete-chip
		class=${Q(o)}
		slot=${Q(r)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${i}
		?hidden=${n}
		.onClear=${e}
		title=${Q(typeof t=="string"?t:void 0)}
		>${t}</cosmoz-autocomplete-chip
	>`,mg=({value:t,min:e=0,onDeselect:i,textual:n,disabled:o})=>[...t.filter(Boolean).map(r=>Hs({content:n(r),onClear:t.length>e&&(()=>i(r)),disabled:o,slot:"control"})),Hs({content:_`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],fg=Te`
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
`,gg=({focused:t,empty:e,...i})=>{const n=t&&e&&i.limit!==1,o=$e(i);$(()=>{if(!n)return;const r=a=>{if(a.defaultPrevented)return;const{key:s}=a,l=me(o.value),c=o.limit==1;if(l.length>0&&(s==="Backspace"||c&&s.length===1))return o.onChange(l.slice(0,-1))};return document.addEventListener("keydown",r,!0),()=>document.removeEventListener("keydown",r,!0)},[n,o])},Ns=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),bg=(t,e,i)=>{if(!e)return t;const n=Ns(e.toLowerCase()),o=[];for(const r of t){const s=Ns(i(r).toLowerCase()).indexOf(n);s<0||o.push({item:r,index:s})}return o.sort((r,a)=>r.index-a.index).map(({item:r})=>r)},vg=t=>t===!1||t==null?[]:t,tu=(t,e,i)=>t.dispatchEvent(new CustomEvent(e,{detail:i})),yg=(t,e,i)=>S(n=>{e?.(n),tu(t,i,n)},[e]),_g=[],xg=t=>(...e)=>{let i;const n=()=>{i&&cancelAnimationFrame(i)};return n(),i=requestAnimationFrame(()=>{i=void 0,t(...e)}),n},jr=(t,e=()=>({}))=>{const i={type:t,toString(){return t}};return Object.assign((...o)=>Object.assign(e(...o),i),i)},Fs=t=>t.type||t.toString(),Vs=t=>Array.isArray(t)?t:[t],wg=(t,e)=>{const i=Vs(e),n=(i.every(Array.isArray)?i:[i]).map(([o,r])=>({actions:Vs(o).map(Fs),handle:r}));return(o=t,r)=>{const a=n.find(s=>s.actions.includes(Fs(r)));return a?a.handle(o,r):o}},Xe={pending:"pending",rejected:"rejected",resolved:"resolved"},iu={error:void 0,result:void 0,state:Xe.pending},nu=jr(Xe.pending),ou=jr(Xe.resolved,t=>({result:t})),ru=jr(Xe.rejected,t=>({error:t})),Cg=wg(iu,[[nu,()=>({error:void 0,result:void 0,state:Xe.pending})],[ou,(t,{result:e})=>({error:void 0,result:e,state:Xe.resolved})],[ru,(t,{error:e})=>({error:e,result:void 0,state:Xe.rejected})]]),zg=t=>{const[{error:e,result:i,state:n},o]=hp(Cg,iu);return $(()=>{if(!t)return;let r=!1;return o(nu()),t.then(a=>!r&&o(ou(a)),a=>!r&&o(ru(a))),()=>{r=!0}},[t]),[i,e,n]},Sg=({value:t,text:e,onChange:i,onText:n,onSelect:o,limit:r,min:a,source:s,textProperty:l,textual:c,valueProperty:u,keepOpened:d,keepQuery:p,preserveOrder:h,defaultIndex:m,externalSearch:f,...b})=>{const v=M(()=>(c??eu)(l),[c,l]),{active:g,focused:x,onFocus:y,setClosed:w}=Pl(b),z=!e,C=M(()=>e?.trim(),[e]),E=xi(),T=yg(E,n,"text"),D=S(P=>{i?.(P,()=>w(!0)),tu(E,"value",P)},[i]),[Y,ie]=J([]),X=M(()=>Promise.resolve(typeof s=="function"?s({query:C,active:g}):s).then(vg),[s,g,C]),B=M(()=>me(t),[t]);$(()=>X.then(ie),[X]),gg({focused:x,empty:z,limit:r,value:B,onChange:D,onText:T}),$(()=>{x||T("")},[x]);const j=$e({onText:T,onChange:D,value:B,limit:r,min:a,keepQuery:p,keepOpened:d,setClosed:w,onSelect:o}),[,,K]=zg(X);return{active:g,query:C,textual:v,value:B,source$:X,loading:K==="pending",items:M(()=>{if(!g)return _g;const P=h?Y:[...B,...Ao(B,zt(u))(Y)];return f?P:bg(P,C,v)},[Y,g,C,v,z,B,h,u,f]),onClick:S(()=>w(!1),[]),onFocus:y,onText:S(P=>{T(P.target.value),w(!1)},[T,e,w]),onSelect:S(P=>{j.onSelect?.(P,j);const{onChange:R,onText:Z,limit:Se,min:Si,value:zu,keepQuery:Su,keepOpened:Au,setClosed:Eu}=j;Su||Z(""),Au||Eu(!0);const Ai=me(zu),ia=Ai.includes(P);ia&&Ai.length===Si||R((ia?Ao(P)(Ai):[...Ai,P]).slice(-Se))},[j]),onDeselect:S(P=>j.onChange(Ao(P)(j.value)),[j]),defaultIndex:C!==void 0&&C?.length>0?0:m}},Ag=t=>{const e=t.shadowRoot.querySelectorAll(".chip"),i=t.shadowRoot.querySelector(".badge");i.hidden=!0;for(const s of e)s.hidden=!1;const o=t.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let r;for(r=0;r<e.length;r++){const l=e[r].getBoundingClientRect();if(!(l.x+l.width<=o.x+o.width-24))break}const a=e.length-r;for(i.querySelector("span").textContent="+"+a.toString(),i.hidden=a<1;r<e.length;r++)e[r].hidden=!0},Eg=({value:t,active:e,wrap:i,limit:n})=>{const o=xi(),r=!(i||n==1),a=M(()=>xg(()=>Ag(o)),[]),[s,l]=J(0);ui(()=>{if(!r)return;const c=o.shadowRoot.querySelector("cosmoz-input"),u=new ResizeObserver(d=>{l(d[0].contentRect.width)});return u.observe(c),()=>u.disconnect()},[r]),ui(()=>r?a():void 0,[r,s,e,t])},Mg=["input","control","label","line","error","wrap"].map(t=>`${t}: input-${t}`).join(),Lg=[Yl({apply({rects:t,elements:e}){Object.assign(e.floating.style,{minWidth:`${Math.max(t.reference.width,t.floating.width)}px`})}}),...zr],kg=({active:t,loading:e,items:i,text:n,isSingle:o,showSingle:r})=>t?(e||i.length>0||n!=null&&n.length>0)&&!(o&&!r):!1,Og=t=>{const{active:e,invalid:i,errorMessage:n,label:o,placeholder:r,disabled:a,noLabelFloat:s,alwaysFloatLabel:l,textual:c,text:u,onText:d,onFocus:p,onClick:h,onDeselect:m,value:f,limit:b,min:v,showSingle:g,items:x,source$:y,placement:w,loading:z}=t,C=xi(),E=b==1,T=E&&f?.[0]!=null,{styles:D,setReference:Y,setFloating:ie}=Jl({placement:w,middleware:Lg});return $(()=>(C.addEventListener("focusin",p),C.addEventListener("focusout",p),()=>{C.removeEventListener("focusin",p),C.removeEventListener("focusout",p)}),[p]),wt({focus:()=>C.shadowRoot?.querySelector("#input")?.focus()},[]),_`<cosmoz-input
				id="input"
				part="input"
				${Qe(Y)}
				.label=${o}
				.placeholder=${T?void 0:r}
				?no-label-float=${s}
				?always-float-label=${f?.length>0||l}
				?readonly=${T}
				?disabled=${a}
				?invalid=${rr(y.then(()=>i,()=>!0),i)}
				.errorMessage=${rr(y.then(()=>n,X=>X.message),n)}
				.value=${Fr(u)}
				@value-changed=${d}
				@click=${h}
				autocomplete="off"
				exportparts=${Mg}
				?data-one=${E}
				?data-single=${T}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${mg({value:f,min:v,onDeselect:m,textual:c,disabled:a})}
			</cosmoz-input>

			${q(kg({active:e,loading:z,items:x,text:u,isSingle:T,showSingle:g}),()=>ug({...t,items:x,multi:!E,setFloating:ie,styles:D},q(z,()=>_`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>q(u!=null&&u.length>0&&x.length===0,()=>_`<slot name="no-result"></slot>`))))}`},au=t=>{const e={...t,...Sg(t)};return Eg(e),Og(e)},su=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap"],$g=t=>{const{onChange:e,onText:i,...n}=t;return au({...n,onChange:S((o,...r)=>{t.value=o,e?.(o,...r)},[e]),onText:S(o=>{t.text=o,i?.(o)},[i])})},lu=[Et(fg)];customElements.define("cosmoz-autocomplete-ui",V(au,{observedAttributes:su,styleSheets:lu}));customElements.define("cosmoz-autocomplete",V($g,{observedAttributes:su,styleSheets:lu}));const Tg=xe`
	@keyframes rotating {
		100% {
			transform: rotate(360deg);
		}
	}

	:host {
		--cosmoz-spinner-width: 20px;
		--cosmoz-spinner-height: 20px;
		display: inline-block;
		vertical-align: middle;
		border-radius: 50%;
		width: var(--cosmoz-spinner-width, 22px);
		height: var(--cosmoz-spinner-height, 22px);
		border: 2px solid rgba(0, 0, 0, 0.1);
		border-top: 2px solid #5f5a92;
		animation: rotating 1.2s infinite cubic-bezier(0.785, 0.135, 0.15, 0.86);
		box-sizing: border-box;
		margin: 0 4px;
		flex: none !important;
	}
`,Pg=()=>de,Ig=V(Pg,{styleSheets:[Tg]});customElements.define("cosmoz-spinner",Ig);const Hg=(t,e)=>{if(!Array.isArray(t))return;const i=[];return t.reduce((n,o)=>Array.isArray(o)?(o.forEach(r=>{n.push(r)}),n):(n.push(o),n),[]).filter((n,o,r)=>{if(r.indexOf(n)!==o)return!1;if(e){const a=L(n,e);if(i.indexOf(a)!==-1)return!1;i.push(a)}return!0})},Ng=(t,e,i)=>{if(t==null)return[];if(Array.isArray(t))return Hg(t,e);if(typeof t=="object"){const n=e??"id",o=i??"label";return Object.entries(t).map(([r,a])=>({[n]:r,[o]:a})).sort((r,a)=>r[o]<a[o]?-1:r[o]>a[o]?1:0)}return[]},Ur=(t,e,i)=>me(e&&L(t,e)).map(zt(i)),Tn=({valuePath:t,textProperty:e},i)=>Ur(i,t,e).filter(n=>n!=null).join(", "),Fg=Tn,Vg=({valueProperty:t,valuePath:e,emptyValue:i,emptyProperty:n},o)=>r=>{const a=zt(t),s=me(L(r,e));return o.some(l=>s.length===0&&zt(n||t)(l)===i||s.some(c=>a(c)===a(l)))},Kr=t=>e=>t(i=>({...i,filter:e})),Wr=t=>e=>t(i=>({...i,headerFocused:e})),Gr=t=>e=>t(i=>({...i,query:e})),cu=({emptyValue:t,emptyLabel:e,emptyProperty:i,textProperty:n,valueProperty:o},r)=>{const a=Ng(r,o,n);return!e||t===void 0||!n||!(i||o)||!a?a:[{[n]:e,[i||o]:t},...a]},Rg=(t,e)=>cu(t,Wc(e,t.valuePath)),Yr=t=>class extends t{static get properties(){return{textProperty:{type:String},valueProperty:{type:String},emptyLabel:{type:String},emptyValue:{type:Object},emptyProperty:{type:String}}}getConfig(e){return{emptyProperty:e.emptyProperty}}getString(e,i){return Tn(e,i)}toXlsxValue(e,i){return Fg(e,i)}cellTitleFn(e,i){return Tn(e,i)}getComparableValue({valuePath:e,valueProperty:i},n){const o=L(n,e);return i==null?o:me(o).reduce((a,s)=>(a.push(L(s,i)),a),[]).sort().join(" ")}getFilterFn(e,i){if(!(!i||!Array.isArray(i)||i.length===0))return Vg(e,i)}serializeFilter(e,i){return i.length===0?null:JSON.stringify(i)}deserializeFilter(e,i){return JSON.parse(decodeURIComponent(i))}computeSource(e,i){return e.externalValues||typeof e.values=="function"?async(...n)=>cu(e,await Promise.resolve(qn(e.values,...n))):Rg(e,i)}},Dg=({valuePath:t,textProperty:e,valueProperty:i},n)=>{const o=e?eu(e):zt(i),r=me(t&&L(n,t)).map(o);return r.length>1?r.filter(Boolean).join(","):r[0]};class qg extends Yr(ze(G)){static get properties(){return{headerCellClass:{type:String,value:"autocomplete-header-cell"},minWidth:{type:String,value:"55px"},editMinWidth:{type:String,value:"55px"},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:i}){return _`<span class="default-column"
			>${e.getString(e,i)}</span
		>`}renderEditCell(e,{item:i},n){return _`<cosmoz-input
			no-label-float
			type="text"
			@change=${r=>n(r.target.value)}
			.value=${it(e,i)}
		></cosmoz-input>`}renderHeader(e,{filter:i,query:n},o,r){return _`<cosmoz-autocomplete-ui
			class="external-values-${e.externalValues}"
			?keep-opened=${e.keepOpened}
			?keep-query=${e.keepQuery}
			?show-single=${e.showSingle}
			?preserve-order=${e.preserveOrder}
			.textual=${e.textual}
			.label=${e.title}
			.source=${r}
			.textProperty=${e.textProperty}
			.valueProperty=${e.valueProperty}
			.itemRenderer=${e[He]?.itemRenderer}
			.value=${i}
			.text=${n}
			.limit=${e.limit}
			.onChange=${Kr(o)}
			.onFocus=${Wr(o)}
			.onText=${Gr(o)}
			>${q(e.loading,()=>_`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}getComparableValue(e,i){return Dg(e,i)}}customElements.define("cosmoz-omnitable-column-autocomplete",qg);const Jr=(t,e)=>e.find(({value:i})=>t===i),Bg=(t,e,i)=>{const n=Jr(e,i);return n?n.text:t},Rs=(t,e,i,n)=>Bg(t,L(e,i),n),jg=({valuePath:t},e,i)=>Jr(L(e,t),i),Ug=t=>e=>{t(i=>({...i,filter:e?.[0]?.value??null}))},Kg=t=>e=>{t(i=>({...i,headerFocused:e}))},Wg=t=>e=>{t(i=>({...i,query:e}))},Gg=t=>e=>t(e?.[0]?.value),Eo=({valuePath:t,trueLabel:e,falseLabel:i},n)=>L(n,t)?e:i,Yg=({valuePath:t},e)=>i=>L(i,t)===e,Ri=Kc((t,e)=>[{text:t,value:!0},{text:e,value:!1}]),Jg=({valuePath:t,trueLabel:e,falseLabel:i},n)=>t?L(n,t)?e:i:"",Xg=(t,e)=>{try{return JSON.parse(e)}catch{return null}};class Zg extends ze(G){static get properties(){return{trueLabel:{type:String,value:"True"},falseLabel:{type:String,value:"False"},flex:{type:String,value:"0"},cellClass:{type:String,value:"boolean-cell"}}}getString(e,i){return Eo(e,i)}renderCell(e,{item:i}){return Eo(e,i)}cellTitleFn(e,i){return Eo(e,i)}renderEditCell(e,{item:i},n){const{trueLabel:o,falseLabel:r}=e;return _`<cosmoz-autocomplete
			no-label-float
			.title=${Rs(e.title,i,e.valuePath,Ri(o,r))}
			.source=${Ri(o,r)}
			.textProperty=${"text"}
			.value=${jg(e,i,Ri(o,r))}
			.onChange=${Gg(n)}
			.limit=${1}
			>${q(e.loading,()=>_`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete
		>`}renderHeader(e,{filter:i,query:n},o,r){return _`<cosmoz-autocomplete-ui
			.label=${e.title}
			.title=${Rs(e.title,i,e.valuePath,r)}
			.source=${r}
			.textProperty=${"text"}
			.value=${Jr(i,r)}
			.text=${n}
			.onChange=${Ug(o)}
			.onFocus=${Kg(o)}
			.onText=${Wg(o)}
			.limit=${1}
			>${q(e.loading,()=>_`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}computeSource({trueLabel:e,falseLabel:i}){return Ri(e,i)}getFilterFn(e,i){if(i!=null)return Yg(e,i)}toXlsxValue(e,i){return Jg(e,i)}deserializeFilter(e,i){return Xg(e,i)}}customElements.define("cosmoz-omnitable-column-boolean",Zg);const Xr=t=>class extends qr(t){static get properties(){return{max:{type:Date,value:null},min:{type:Date,value:null},_filterText:{type:String,computed:"_computeFilterText(filter.*, formatter)"},formatter:{type:Object,computed:"_computeFormatter(locale)"}}}toDate(e,i,n){if(e==null||e==="")return;let o=e;if(o instanceof Date||(typeof e=="string"&&(o=this.getAbsoluteISOString(o)),o=new Date(o)),Number.isNaN(o.getTime()))return null;if(n==null||i==null)return o;const r=this.toDate(i);if(r==null)return o;const a=this.getComparableValue(o),s=this.getComparableValue(r);return n(a,s)===a?o:r}toValue(){return this.toDate.apply(this,arguments)}getComparableValue(e,i){const n=super.getComparableValue(e,i);if(n!=null)return this.toNumber(n.getTime())}getString(e,i=this.valuePath,n=this.formatter){const o=this.toValue(this.get(i,e));return o===void 0?"":o===null?"Invalid Date":this.renderValue(o,n)}getAbsoluteISOString(e){return e.length===19?e+this._getTimezoneString(e):e}_getTimezoneString(e){const i=-new Date(e).getTimezoneOffset()/60;return(i<0?"-":"+")+["0",Math.abs(i)].join("").substr(-2)+":00"}renderValue(e,i=this.formatter){if(i==null)return;const n=this.toValue(e);if(n!=null)return i.format(n)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0)}_toInputString(e){const i=this.toValue(e);return i==null?null:this._toLocalISOString(i).slice(0,10)}_dateValueChanged(e){const i=e.currentTarget,n=i.value,o=e.model.item,r=this.get(this.valuePath,o),a=this._fromInputString(n);this.set(this.valuePath,a,o),this._fireItemChangeEvent(o,this.valuePath,r,this.renderValue.bind(this))}_toLocalISOString(e){return Zn(e)}};class Qg extends Xr(Ci(G)){render(){return _`
			<style>
				paper-dropdown-menu {
					--iron-icon-width: 0;
					display: block;
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
				placeholder=${Q(this._filterText)}
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
						label=${H("From date")}
						min=${this._toInputString(this._limit.fromMin)}
						max=${this._toInputString(this._limit.fromMax)}
						.value=${this._filterInput?.min}
						@value-changed=${e=>this.set("_filterInput.min",e.detail.value)}
					></cosmoz-input>
					<cosmoz-input
						type="date"
						label=${H("Until date")}
						min=${this._toInputString(this._limit.toMin)}
						max=${this._toInputString(this._limit.toMax)}
						.value=${this._filterInput?.max}
						@value-changed=${e=>this.set("_filterInput.max",e.detail.value)}
					></cosmoz-input>
				</div>
			</paper-dropdown-menu>
		`}_fromInputString(e,i){const n=this.toDate(e);if(n!=null)return i==="min"&&n.setHours(0,0,0,0),i==="max"&&n.setHours(23,59,59),n}_filterInputChanged(e,i){const n=e.path.split(".")[1],o=n&&e.value;if(o&&o.match(/^0+/u)){this._limitInputDebouncer.cancel();return}super._filterInputChanged(e,i)}}customElements.define("cosmoz-omnitable-date-range-input",Qg);const e0=t=>{const e=-new Date(t).getTimezoneOffset()/60;return(e<0?"-":"+")+["0",Math.abs(e)].join("").substr(-2)+":00"},Zr=t=>t.length===19?t+e0(t):t,uu=t=>{if(t==null||t==="")return;let e=t;return!(e instanceof Date)&&(typeof t=="string"&&(e=Zr(e)),e=Im(e),!e)||Number.isNaN(e.getTime())?null:e},Le=({valuePath:t},e)=>{if(e==null)return;let i=e;t!=null&&(i=L(e,t));const n=uu(i);if(n!=null)return ce(n.getTime())},te=(t,e,i)=>{const n=uu(t);return n??null},Qr=(t,e)=>{if(e==null)return;const i=te(t);if(i!=null)return e.format(i)},Di={},t0=t=>{const e=t||"";return Di[e]||(Di[e]=new Intl.DateTimeFormat(t||void 0)),Di[e]},Mo=({valuePath:t,locale:e},i)=>{let n=L(i,t||"");return n===void 0?"":(n=te(n),n===null?"Invalid Date":Qr(n,t0(e)))},du=t=>{const e=te(t);if(e==null)return null;const i=Zn(e);return i==null?null:i.slice(0,10)},i0=({valuePath:t},e)=>du(L(e,t||"")),pu=(t,e)=>{const i=te(t);if(i!=null)return i},Ds=t=>{const e=du(t);return e??""},n0=({valuePath:t},e)=>{if(!t)return"";const i=te(L(e,t));if(!i)return"";const n=te(Zn(i));return n?(n.setHours(0,0,0,0),n):""},hu=(t,e)=>i=>{const n=Le(t,i);if(n==null)return!1;const o=Le({...t,valuePath:"min"},e),r=Le({...t,valuePath:"max"},e);return o==null||r==null?!1:!(n<o||n>r)};class o0 extends ze(G){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"date-header-cell"},width:{type:String,value:"100px"},minWidth:{type:String,value:"82px"},flex:{type:String,value:"0"}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,i){const n=Le({...e,valuePath:"min"},i),o=Le({...e,valuePath:"max"},i);if(!(n==null&&o==null))return hu(e,i)}getString(e,i){return Mo(e,i)}toXlsxValue(e,i){return n0(e,i)}cellTitleFn(e,i){return Mo(e,i)}getComparableValue(e,i){return Le(e,i)}serializeFilter(e,i){if(i==null)return;const n=te(i.min),o=te(i.max);if(!(n==null&&o==null))return Ds(n)+"~"+Ds(o)}deserializeFilter(e,i){if(i==null||i==="")return null;const n=i.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:te(n[1]),max:te(n[2])}:null}renderCell(e,{item:i}){return _`<div class="omnitable-cell-date">
			${Mo(e,i)}
		</div>`}renderEditCell(e,{item:i},n){return _`<cosmoz-input
			no-label-float
			type="date"
			@change=${r=>n(pu(r.target.value))}
			.value=${i0(e,i)}
		></cosmoz-input>`}renderHeader({title:e,min:i,max:n,limits:o,locale:r},{filter:a},s,l){return _`<cosmoz-omnitable-date-range-input
			.title=${e}
			.filter=${a}
			.values=${l}
			.min=${i}
			.max=${n}
			.limits=${o}
			.locale=${r}
			@filter-changed=${({detail:{value:c}})=>s(u=>({...u,filter:c}))}
			@header-focused-changed=${({detail:{value:c}})=>s(u=>({...u,headerFocused:c}))}
		></cosmoz-omnitable-date-range-input>`}computeSource(e,i){return wi(e,i)}}customElements.define("cosmoz-omnitable-column-date",o0);class r0 extends Yr(ze(G)){renderCell({valuePath:e,textProperty:i},{item:n}){const o=Ur(n,e,i).map(r=>_`<li>${r}</li>`);return _`
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
				${o}
			</ul>
		`}renderEditCell(){return"not implemented"}renderHeader(e,{filter:i,query:n},o,r){return _`<cosmoz-autocomplete-ui
			class="external-values-${e.externalValues}"
			.label=${e.title}
			.source=${r}
			.textProperty=${e.textProperty}
			.value=${i}
			.text=${n}
			.onChange=${Kr(o)}
			.onFocus=${Wr(o)}
			.onText=${Gr(o)}
			>${q(e.loading,()=>_`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		> `}}customElements.define("cosmoz-omnitable-column-list-horizontal",r0);window.Cosmoz=window.Cosmoz||{};class qs extends x2(Hm($m,G)){static get template(){return U`
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
		`}static get is(){return"cosmoz-omnitable-column-list-data"}static get properties(){return{items:{type:Array},_expanded:{type:Boolean,value:!1},_othersCount:{type:Number,computed:"_computeOthersCount(items)"}}}static get observers(){return["_itemsLengthChanged(items.length)"]}_itemsLengthChanged(){requestAnimationFrame(()=>this.dispatchEvent(new CustomEvent("expand",{bubbles:!0})))}_firstItem(e){if(e!=null&&e.length>0)return e[0]}_hideExpand(e,i){return e!==void 0&&e.length!==null?e.length<=2||i:!0}_hideCollapse(e,i){return e!==void 0&&e.length!==null?e.length<=2||!i:!0}_otherItems(e,i){if(e!=null&&(e.length<=2||i))return e.slice(1)}_computeOthersCount(e){if(e!=null)return e.length-1}_toggleExpand(e){this._expanded=!this._expanded,e.stopPropagation(),e.preventDefault()}}customElements.define(qs.is,qs);class a0 extends Yr(ze(G)){static get properties(){return{keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,textual:e.textual}}renderCell({valuePath:e,textProperty:i},{item:n}){return _`<cosmoz-omnitable-column-list-data
			.items=${Ur(n,e,i)}
		></cosmoz-omnitable-column-list-data>`}renderEditCell(e,{item:i},n){const o=r=>n(r.target.value.split(/,\s*/gu));return _`<cosmoz-input
			no-label-float
			type="text"
			.value=${Tn(e,i)}
			@change=${o}
		></cosmoz-input>`}renderHeader(e,{filter:i,query:n},o,r){return _`<cosmoz-autocomplete-ui
			class="external-values-${e.externalValues}"
			?keep-opened=${e.keepOpened}
			?keep-query=${e.keepQuery}
			.textual=${e.textual}
			.column=${e}
			.label=${e.title}
			.source=${r}
			.textProperty=${e.textProperty}
			.valueProperty=${e.valueProperty}
			.itemRenderer=${e[He]?.itemRenderer}
			.value=${i}
			.text=${n}
			.onChange=${Kr(o)}
			.onFocus=${Wr(o)}
			.onText=${Gr(o)}
			>${q(e.loading,()=>_`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}}customElements.define("cosmoz-omnitable-column-list",a0);class s0 extends qr(Ci(G)){static get properties(){return{maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},formatter:{type:Object,computed:"_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)"},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:"_computeFilterText(filter.*, formatter)"}}}render(){const e=i=>{this.headerFocused=i.detail.value,this._onDropdownOpenedChanged(i)};return _`
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
				placeholder=${Q(this._filterText)}
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
						label=${H("From")}
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
						label=${H("To")}
						.value=${this._filterInput?.max}
						@value-changed=${i=>{this.set("_filterInput.max",i.detail.value)}}
						@blur=${i=>this._onBlur(i)}
						@keydown=${i=>this._onKeyDown(i)}
						min=${this._toInputString(this._limit.toMin)}
						max=${this._toInputString(this._limit.toMax)}
					></cosmoz-input>
				</div>
			</paper-dropdown-menu>
		`}_computeFormatter(e,i,n){const o={localeMatcher:"best fit"};return i!==null&&(o.minimumFractionDigits=i),n!==null&&(o.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,o)}getComparableValue(e,i){if(e==null)return;let n=e;if(i!=null&&(n=this.get(i,e)),n=this.toValue(n),n==null)return;const o=this.maximumFractionDigits;return o!==null?this.toValue(n.toFixed(o)):n}renderValue(e,i=this.formatter){const n=this.toNumber(e);if(n!=null)return i.format(n)}}customElements.define("cosmoz-omnitable-number-range-input",s0);class l0 extends ze(G){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},cellClass:{type:String,value:"number-cell align-right"},width:{type:String,value:"30px"},minWidth:{type:String,value:"30px"},headerCellClass:{type:String,value:"number-header-cell"},maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,i){const n=ft({...e,valuePath:"min"},i),o=ft({...e,valuePath:"max"},i);if(!(n==null&&o==null))return A2(e,i)}getString(e,i){return zo(e,i)}toXlsxValue({valuePath:e},i){return L(i,e)}cellTitleFn(e,i){return zo(e,i)}getComparableValue(e,i){return ft(e,i)}serializeFilter(e,i){if(i==null)return;const n=ce(i.min),o=ce(i.max);if(!(n==null&&o==null))return As(n)+"~"+As(o)}deserializeFilter(e,i){if(i==null||i==="")return null;const n=i.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:ce(n[1]),max:ce(n[2])}:null}renderCell(e,{item:i}){return _`<div class="omnitable-cell-number">
			${zo(e,i)}
		</div>`}renderEditCell(e,{item:i},n){return _`<cosmoz-input
			no-label-float
			type="number"
			@change=${r=>n(r.target.value)}
			.value=${z2(e,i)}
		></cosmoz-input>`}renderHeader({title:e,min:i,max:n,limits:o,locale:r,maximumFractionDigits:a,minimumFractionDigits:s,autoupdate:l},{filter:c},u,d){return _`<cosmoz-omnitable-number-range-input
			.title=${e}
			.filter=${c}
			.values=${d}
			.min=${i}
			.max=${n}
			.limits=${o}
			.locale=${r}
			.maximumFractionDigits=${a}
			.minimumFractionDigsits=${s}
			.autoupdate=${l}
			@filter-changed=${({detail:{value:p}})=>u(h=>({...h,filter:p}))}
			@header-focused-changed=${({detail:{value:p}})=>u(h=>({...h,headerFocused:p}))}
		></cosmoz-omnitable-number-range-input>`}computeSource(e,i){return wi(e,i)}}customElements.define("cosmoz-omnitable-column-number",l0);const mu="1970-01-01",qe=(t,e,i)=>{const n=typeof t=="string"&&t.length>3&&t.length<=9?Zr(mu+"T"+t):t;return te(n)},qi={},c0=t=>{const e=t||"";if(qi[e])return qi[e];const i={hour:"numeric",minute:"numeric",second:"numeric"};return qi[e]=new Intl.DateTimeFormat(t||void 0,i),qi[e]},qt=({valuePath:t,locale:e},i)=>{const n=qe(L(i,t||""));return n===void 0?"":n===null?"Invalid Date":Qr(n,c0(e))},u0=(t,e)=>t.valuePath?qt(t,e):"",d0=t=>{const e=qe(t);if(e==null)return null;const i=Zn(e);return i&&i.slice(11,19)},bt=({valuePath:t},e)=>{if(e==null)return;const i=d0(t==null?e:L(e,t));if(i==null)return;const n=qe(Zr(mu+"T"+i));return n==null?n:ce(n.getTime())},p0=(t,e)=>i=>{const n=bt(t,i);if(n==null)return!1;const o=bt({...t,valuePath:"min"},e),r=bt({...t,valuePath:"max"},e);return o==null||r==null?!1:!(n<o||n>r)},Bs=t=>{const e=qe(t);return e==null?"":e.toISOString().slice(11,19).replace(/:/gu,".")},js=t=>{if(!(t==null||t===""))return qe(typeof t=="string"?t.replace(/\./gu,":")+"Z":t)};class h0 extends Xr(Ci(G)){render(){return _`
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
				placeholder=${Q(this._filterText)}
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
						label=${H("From time")}
						step=${this.filterStep}
						.value=${this._filterInput.min}
						@value-changed=${e=>this.set("_filterInput.min",e.detail.value)}
					></cosmoz-input>
					<cosmoz-input
						type="time"
						label=${H("Until time")}
						step=${this.filterStep}
						.value=${this._filterInput.max}
						@value-changed=${e=>this.set("_filterInput.max",e.detail.value)}
					></cosmoz-input>
				</div>
			</paper-dropdown-menu>
		`}get _fixedDate(){return"1970-01-01"}toDate(e,i,n){const o=typeof e=="string"&&e.length>3&&e.length<=9?this.getAbsoluteISOString(this._fixedDate+"T"+e):e;return super.toDate(o,i,n)}_toInputString(e){const i=this.toValue(e);return i==null?null:this._toLocalISOString(i).slice(11,19)}getComparableValue(e,i){if(e==null)return;let n=this._toInputString(i==null?e:this.get(i,e));if(n!=null&&(n=this.toValue(this.getAbsoluteISOString(this._fixedDate+"T"+n)),n!=null))return this.toNumber(n.getTime())}_timeValueChanged(e){const i=e.target,n=i.value,o=e.model.item,r=this.toDate(o.date),a=this.toDate(r!=null?r.toISOString().slice(0,10)+"T"+n:n),s=l=>l;a==null&&(this.set(this.valuePath,a,o),this._fireItemChangeEvent(o,this.valuePath,r,s.bind(this)))}_computeFormatter(e){const i={hour:"numeric",minute:"numeric",second:"numeric"};return new Intl.DateTimeFormat(e||void 0,i)}}customElements.define("cosmoz-omnitable-time-range-input",h0);class m0 extends ze(G){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"time-header-cell"},minWidth:{type:String,value:"63px"},width:{type:String,value:"210px"},flex:{type:String,value:"0"},filterStep:{type:String,value:"1"}}}getFilterFn(e,i){const n=bt({...e,valuePath:"min"},i),o=bt({...e,valuePath:"max"},i);if(!(n==null&&o==null))return p0(e,i)}getString(e,i){return qt(e,i)}toXlsxValue(e,i){return u0(e,i)}cellTitleFn(e,i){return qt(e,i)}getComparableValue(e,i){return bt(e,i)}serializeFilter(e,i){if(i==null)return;const n=qe(i.min),o=qe(i.max);if(!(n==null&&o==null))return Bs(n)+"~"+Bs(o)}deserializeFilter(e,i){if(i==null||i==="")return null;const n=i.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:js(n[1]),max:js(n[2])}:null}renderCell(e,{item:i}){return qt(e,i)}renderEditCell(e,{item:i},n){return _`<cosmoz-input
			no-label-float
			type="text"
			@change=${r=>n(r.target.value)}
			.value=${qt(e,i)}
		></cosmoz-input>`}renderHeader({title:e,min:i,max:n,locale:o,filterStep:r},{filter:a},s,l){return _`<cosmoz-omnitable-time-range-input
			.title=${e}
			.filter=${a}
			.values=${l}
			.min=${i}
			.max=${n}
			.locale=${o}
			.filterStep=${r}
			@filter-changed=${({detail:{value:c}})=>s(u=>({...u,filter:c}))}
			@header-focused-changed=${({detail:{value:c}})=>s(u=>({...u,headerFocused:c}))}
		></cosmoz-omnitable-time-range-input>`}computeSource(e,i){return wi(e,i)}}customElements.define("cosmoz-omnitable-column-time",m0);const fu=["T"," "],Us=t=>{if(!t||typeof t!="string")return;let e;return fu.some(i=>t.match(i)?(e=t.split(i),!0):!1),e||[t]},f0=(t,e)=>{const i=Us(t),n=Us(e);return{minDate:Array.isArray(i)?i.shift():null,minTime:Array.isArray(i)?i.shift():null,maxDate:Array.isArray(n)?n.shift():null,maxTime:Array.isArray(n)?n.shift():null}},Ks=(t,e)=>{if(!(!t&&!e))return!t&&e?`T${e}`:t&&!e?t:`${t}T${e}`},g0=t=>{if(t){for(const e of fu)if(t.match(e)){const i=t.split(e);return{date:i.shift(),time:i.shift()}}return{date:t}}},b0=t=>{const{dateLabel:e,timeLabel:i,min:n,max:o,step:r="1",value:a}=t,{minDate:s,maxDate:l,minTime:c,maxTime:u}=M(()=>f0(n,o),[n,o]),{date:d,time:p}=M(()=>g0(a)??{},[a]);return $(()=>{t.dispatchEvent(new CustomEvent("cosmoz-datetime-input-value-changed",{bubbles:!0,composed:!0}))},[a]),_`
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
			@value-changed="${h=>Fe(t,"value",Ks(h.target.value,p))}"
			.min="${s}"
			.max="${l}"
		></cosmoz-input>
		<cosmoz-input
			label="${i}"
			type="time"
			.value="${p}"
			@value-changed="${h=>Fe(t,"value",Ks(d,h.target.value))}"
			step="${r}"
			.min="${c}"
			.max="${u}"
		></cosmoz-input>
	`};customElements.define("cosmoz-datetime-input",V(b0,{observedAttributes:["date-label","time-label","min","max","step"]}));const Bi={},v0=t=>{const e=t||"";if(Bi[e])return Bi[e];const i={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return Bi[e]=new Intl.DateTimeFormat(t||void 0,i),Bi[e]},ji=({valuePath:t,locale:e},i)=>{const n=te(L(i,t||""));return n===void 0?"":n===null?"Invalid Date":Qr(n,v0(e))},y0=({valuePath:t},e)=>t?L(e,t):"",Ws=t=>{const e=te(t);return e==null?"":e.toISOString().slice(0,19).replace(/:/gu,".")},Gs=t=>{if(!(t==null||t==="")&&typeof t=="string")return te(t.replace(/\./gu,":")+"Z")};class _0 extends Xr(Ci(G)){render(){return _`
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
				placeholder=${Q(this._filterText)}
				class="external-values-${this.externalValues}"
				title=${this._tooltip}
				horizontal-align="right"
				?opened=${this.headerFocused}
				@opened-changed=${e=>this.set("headerFocused",e.detail.value)}
			>
				<div class="dropdown-content" slot="dropdown-content">
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-datetime-input
						date-label=${H("From date")}
						time-label=${H("From time")}
						min=${this._toInputString(this._limit.fromMin)}
						max=${this._toInputString(this._limit.fromMax)}
						step=${this.filterStep}
						.value=${this._filterInput?.min}
						@value-changed=${e=>this.set("_filterInput.min",e.detail.value)}
					></cosmoz-datetime-input>
					<cosmoz-datetime-input
						date-label=${H("To date")}
						time-label=${H("To time")}
						min=${this._toInputString(this._limit.toMin)}
						max=${this._toInputString(this._limit.toMax)}
						step=${this.filterStep}
						.value=${this._filterInput?.max}
						@value-changed=${e=>this.set("_filterInput.max",e.detail.value)}
					></cosmoz-datetime-input>
				</div>
			</paper-dropdown-menu>
		`}_toInputString(e){const i=this.toValue(e);if(i!=null)return this._toLocalISOString(i).slice(0,19)}_computeFormatter(e){const i={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return new Intl.DateTimeFormat(e||void 0,i)}}customElements.define("cosmoz-omnitable-datetime-range-input",_0);class Ys extends ze(G){static get is(){return"cosmoz-omnitable-column-datetime"}static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"datetime-header-cell"},width:{type:String,value:"210px"},minWidth:{type:String,value:"128px"},flex:{type:String,value:"0"},filterStep:{type:Number,value:1}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,i){const n=Le({...e,valuePath:"min"},i),o=Le({...e,valuePath:"max"},i);if(!(n==null&&o==null))return hu(e,i)}getString(e,i){return ji(e,i)}toXlsxValue(e,i){return y0(e,i)}cellTitleFn(e,i){return ji(e,i)}getComparableValue(e,i){return Le(e,i)}serializeFilter(e,i){if(i==null)return;const n=te(i.min),o=te(i.max);if(!(n==null&&o==null))return Ws(n)+"~"+Ws(o)}deserializeFilter(e,i){if(i==null||i==="")return null;const n=i.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Gs(n[1]),max:Gs(n[2])}:null}renderCell(e,{item:i}){return ji(e,i)}renderEditCell(e,{item:i},n){return _`<cosmoz-input
			no-label-float
			type="text"
			@change=${r=>n(pu(r.target.value))}
			.value=${ji(e,i)}
		></cosmoz-input>`}renderHeader({title:e,min:i,max:n,limits:o,locale:r,filterStep:a},{filter:s},l,c){return _`<cosmoz-omnitable-datetime-range-input
			.title=${e}
			.filter=${s}
			.values=${c}
			.min=${i}
			.max=${n}
			.limits=${o}
			.locale=${r}
			.filterStep=${a}
			@filter-changed=${({detail:{value:u}})=>l(d=>({...d,filter:u}))}
			@header-focused-changed=${({detail:{value:u}})=>l(d=>({...d,headerFocused:u}))}
		></cosmoz-omnitable-datetime-range-input>`}computeSource(e,i){return wi(e,i)}}customElements.define(Ys.is,Ys);const x0=({column:t,item:e,selected:i,folded:n,group:o})=>t?(t.renderGroup??t.renderCell)(t,{item:e,selected:i,folded:n,group:o}):de;customElements.define("cosmoz-omnitable-group-row",V(x0,{useShadowDOM:!1}));const w0=t=>{const{column:e}=t;return $(()=>{let i=0,n=0;const o=s=>{t.dispatchEvent(new CustomEvent("column-resize",{bubbles:!0,composed:!0,detail:{newWidth:Math.ceil(n+s.pageX-i),column:e}}))},r=()=>{document.removeEventListener("pointermove",o),document.removeEventListener("pointerup",r)},a=s=>{i=s.pageX,n=t.previousElementSibling.getBoundingClientRect().width,document.addEventListener("pointermove",o),document.addEventListener("pointerup",r)};return t.addEventListener("pointerdown",a),()=>t.removeEventListener("pointerdown",a)},[e]),de};customElements.define("cosmoz-omnitable-resize-nub",V(w0));const C0=_`<svg
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
</svg>`,z0=_`
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
`,Lo=_` <svg
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
</svg>`,S0=_`<svg
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
</svg> `,gu=({column:t,on:e,descending:i,setOn:n,setDescending:o})=>{const{name:r,title:a}=t??{};return _`<button
		class="sg"
		title=${a}
		data-on=${Q(r===e&&(i?"desc":"asc")||void 0)}
		@click=${s=>{const l=s.currentTarget?.dataset.on;l||(n(r),o(!1)),l==="asc"?o(!0):l==="desc"&&(n(),o(!1))}}
	>
		<span>${a}</span> ${S0}
	</button>`},bu=({columns:t,...e})=>t?.map(i=>gu({column:i,...e})),A0=()=>_`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:t,groupOn:e,setGroupOn:i,groupOnDescending:n,setGroupOnDescending:o}={})=>bu({columns:t?.filter?.(r=>r.groupOn),on:e,setOn:i,descending:n,setDescending:o})}
	>
	</sort-and-group-consumer>
`,E0=()=>_`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:t,sortOn:e,setSortOn:i,descending:n,setDescending:o}={})=>bu({columns:t?.filter?.(r=>r.sortOn),on:e,setOn:i,descending:n,setDescending:o})}
	>
	</sort-and-group-consumer>
`,M0=t=>e=>{const i=e.match(t);return i&&{result:i,url:new URL(e,document.location.origin)}},L0=(t,e)=>{for(const i of t){const n=i.rule,o=typeof n=="function"?n(e):M0(n)(e);if(o)return{...i,route:i,match:o,url:e}}},Js=()=>window.location.href.replace(window.location.origin,""),k0=()=>{const[t,e]=J(Js);return $(()=>{const i=()=>e(Js);return window.addEventListener("popstate",i),()=>window.removeEventListener("popstate",i)},[e]),t},O0=t=>{const e=k0();return M(()=>L0(t,e),[t,e])},$0=(t,e=null,{notify:i=!0,replace:n=!0}={})=>{(n?history.replaceState:history.pushState).call(history,e,"",t),i&&queueMicrotask(()=>window.dispatchEvent(new CustomEvent("popstate",{bubbles:!1})))},T0=t=>{const e=O0(t);return{route:e,result:M(()=>{if(e){const{handle:i,...n}=e;return i(n)}},[e])}},Ui=(t,e,i)=>t.dispatchEvent(new CustomEvent(e,{bubbles:!1,cancelable:!1,composed:!0,...i})),P0=(t,e,i)=>{$(()=>{if(!i){Ui(t,"route-not-found");return}Ui(t,"route-loading",{detail:e}),Promise.resolve(i).then(()=>Ui(t,"route-loaded",{detail:e})).catch(n=>Ui(t,"route-error",{detail:{route:e,error:n}}))},[i])},I0=t=>{const e=t.routes,{route:i,result:n}=T0(e);return P0(t,i,n),yr([n],()=>rr(Promise.resolve(n).catch(()=>de),de))};customElements.define("cosmoz-router",V(I0));const ea=()=>new URL(location.hash.replace(/^#!?/iu,"").replace("%23","#"),location.origin),H0=(t,e=Ze)=>{const i=new URLSearchParams(ea().hash.replace("#","")).getAll(t);switch(i.length){case 0:return;case 1:return e(i[0]);default:return i.map(e)}},N0=(t,e=Ze)=>{const i=Array.from(new URLSearchParams(ea().hash.replace("#","")).entries()).filter(([n])=>n.startsWith(t)).map(([n,o])=>e([n.replace(t,""),o])).filter(([,n])=>n!=null);return Object.fromEntries(i)},vu=t=>(e,i,n=Ze)=>{const o=ea(),r=new URLSearchParams(o.hash.replace("#",""));return t(e,i,n,r),"#!"+Object.assign(o,{hash:r}).href.replace(location.origin,"")},yu=t=>t==null||t==="",F0=vu((t,e,i,n)=>yu(i(e))?n.delete(t):n.set(t,i(e))),V0=vu((t,e,i,n)=>Object.entries(e).map(i).forEach(([o,r])=>yu(r)?n.delete(t+o):n.set(t+o,r))),Bt=(t,e,{suffix:i="",read:n,write:o,multi:r}={})=>{const[a,s]=r?[V0,N0]:[F0,H0],[l,c]=J(()=>e==null?t:s(e+i,n)??t),u=S(d=>c(p=>{const h=qn(d,p);return e!=null&&$0(a(e+i,h,o),null,{notify:!1}),h}),[e,i,a,o]);return[l,u]},R0=t=>[!0,"true",1,"yes","on"].includes(t),Ki=t=>t===""||(t==null?void 0:R0(t)),Wi=(t,e,i)=>S(n=>{t(n),i(o=>({...o,[e]:n}))},[t,e,i]),D0=(t,e,i,n,o)=>{const[r,a]=Bt(i.sortOn,e,{suffix:"-sortOn"}),[s,l]=Bt(Ki(i.descending),e,{suffix:"-descending",read:Ki}),[c,u]=Bt(i.groupOn,e,{suffix:"-groupOn"}),[d,p]=Bt(Ki(i.groupOnDescending),e,{suffix:"-groupOnDescending",read:Ki}),h=M(()=>t.find(g=>g.name===r),[t,r]),m=M(()=>t.find(g=>g.name===c),[t,c]),f={groupOn:c,setGroupOn:Wi(u,"groupOn",n),groupOnDescending:d,setGroupOnDescending:Wi(p,"groupOnDescending",n),sortOn:r,setSortOn:Wi(a,"sortOn",n),descending:s,setDescending:Wi(l,"descending",n),columns:t},b=M(()=>f,Object.values(f)),v=S(g=>{a(g.sortOn),u(g.groupOn),l(g.descending),p(g.groupOnDescending)},[]);return $(()=>void(o.current=v),[]),{...b,sortAndGroup:b,groupOnColumn:m,sortOnColumn:h}},ta=br();customElements.define("sort-and-group-provider",ta.Provider);customElements.define("sort-and-group-consumer",V(({render:t})=>t(bi(ta)),{useShadowDOM:!1}));const q0=({data:t,columns:e,groupOnColumn:i,filters:n,setFilterState:o,sortAndGroup:{sortOn:r,setSortOn:a,descending:s,setDescending:l}={}})=>Br(e,c=>c.name,c=>[_`<div
				class="cell ${c.headerCellClass} header-cell"
				part="cell header-cell cell-${c.name} header-cell-${c.name}"
				?hidden="${c===i}"
				title="${c.title}"
				name="${c.name}"
			>
				${c.renderHeader(c,n[c.name]??{},u=>o(c.name,u),c.source(c,t))}
				${gu({on:r,setOn:a,descending:s,setDescending:l,column:c})}
			</div>`,_`<cosmoz-omnitable-resize-nub
				.column="${c}"
				name="${c.name}"
			></cosmoz-omnitable-resize-nub>`]),B0=({columns:t,settingsConfig:e,hideSelectAll:i,...n})=>{const o=bi(ta);return _`
		${q(t,r=>q0({columns:r,sortAndGroup:o,...n}))}
		${q(!i,()=>_` <cosmoz-omnitable-settings
					.config=${e}
					part="settings"
				></cosmoz-omnitable-settings>`)}
	`};customElements.define("cosmoz-omnitable-header-row",V(B0,{useShadowDOM:!1}));const j0=Te`
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
`,U0=({column:t})=>_`
	<div class="label" title="${t.title}" part="item-expand-label">
		${t.title}
	</div>
	<div class="value" part="item-expand-value">
		<slot></slot>
	</div>
`;customElements.define("cosmoz-omnitable-item-expand-line",V(U0,{styleSheets:[Et(j0)]}));const K0=({columns:t,item:e,selected:i,expanded:n,groupOnColumn:o})=>al(t,r=>_`<cosmoz-omnitable-item-expand-line
				.column=${r}
				?hidden=${r===o}
				exportparts="item-expand-label, item-expand-value"
				>${r.renderCell(r,{item:e,selected:i,expanded:n})}</cosmoz-omnitable-item-expand-line
			>`);customElements.define("cosmoz-omnitable-item-expand",V(K0,{useShadowDOM:!1}));const W0=(t,e,i)=>t.editable?t.renderEditCell(t,e,i(t,e.item)):t.renderCell(t,e),G0=({columns:t,groupOnColumn:e,item:i,index:n,selected:o,expanded:r,onItemChange:a})=>Br(t,s=>s.name,s=>_`<div
				class="cell itemRow-cell ${s.cellClass??""}"
				part="cell itemRow-cell cell-${s.name} itemRow-cell-${s.name}"
				?hidden="${s===e}"
				?editable="${s.editable}"
				title="${s.cellTitleFn(s,i)}"
				name="${s.name}"
			>
				${W0(s,{item:i,index:n,selected:o,expanded:r},a)}
			</div>`);customElements.define("cosmoz-omnitable-item-row",V(G0,{useShadowDOM:!1}));const _u=Te`
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
`,Y0=Te`
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
			display: var(--cosmoz-omnitable-paper-input-underline-display, block);
		}
		--paper-input-container-underline-focus {
			border-color: var(--cosmoz-omnitable-header-line-focused-color);
			display: var(--cosmoz-omnitable-paper-input-underline-display, block);
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
	.tableContent:has(.tableContent-empty.spinner) {
		opacity: 0.3;
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

	${_u}

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

	cz-spinner {
		width: 48px;
		height: 48px;
		position: absolute;
		top: 40%;
		right: 50%;
		border-color: rgba(0, 0, 0, 0.2);
		border-top-color: #000;
	}
`;var fe=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:void 0;function J0(t,e){return typeof e>"u"?e={autoBom:!1}:typeof e!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\uFEFF",t],{type:t.type}):t}function ko(t,e,i){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){gi(n.response,e,i)},n.onerror=function(){console.error("could not download file")},n.send()}function Xs(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch{}return e.status>=200&&e.status<=299}function Gi(t){try{t.dispatchEvent(new MouseEvent("click"))}catch{var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var Zs=fe.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),gi=fe.saveAs||(typeof window!="object"||window!==fe?function(){}:"download"in HTMLAnchorElement.prototype&&!Zs?function(e,i,n){var o=fe.URL||fe.webkitURL,r=document.createElement("a");i=i||e.name||"download",r.download=i,r.rel="noopener",typeof e=="string"?(r.href=e,r.origin!==location.origin?Xs(r.href)?ko(e,i,n):Gi(r,r.target="_blank"):Gi(r)):(r.href=o.createObjectURL(e),setTimeout(function(){o.revokeObjectURL(r.href)},4e4),setTimeout(function(){Gi(r)},0))}:"msSaveOrOpenBlob"in navigator?function(e,i,n){if(i=i||e.name||"download",typeof e=="string")if(Xs(e))ko(e,i,n);else{var o=document.createElement("a");o.href=e,o.target="_blank",setTimeout(function(){Gi(o)})}else navigator.msSaveOrOpenBlob(J0(e,n),i)}:function(e,i,n,o){if(o=o||open("","_blank"),o&&(o.document.title=o.document.body.innerText="downloading..."),typeof e=="string")return ko(e,i,n);var r=e.type==="application/octet-stream",a=/constructor/i.test(fe.HTMLElement)||fe.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||r&&a||Zs)&&typeof FileReader<"u"){var l=new FileReader;l.onloadend=function(){var d=l.result;d=s?d:d.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=d:location=d,o=null},l.readAsDataURL(e)}else{var c=fe.URL||fe.webkitURL,u=c.createObjectURL(e);o?o.location=u:location.href=u,o=null,setTimeout(function(){c.revokeObjectURL(u)},4e4)}});fe.saveAs=gi.saveAs=gi;const Qs=t=>{const e=t.replace(/"/gu,'""');return e.search(/("|,|\n)/gu)>=0?'"'+e+'"':t},X0=(t,e,i)=>{const r=t.map(s=>Qs(s.title)).join(";")+`
`,a=e.map(s=>t.map(l=>{const c=l.getString(l,s);return c==null?"":Qs(String(c))}).join(";")+`
`);a.unshift(r),gi(new File(a,i,{type:"text/csv;charset=utf-8"}))},sn=function(t){t&&console.log(t)};class xu{constructor(e,i){this._filename=e,this.buffer=null,this.lastDownloadBlobUrl=null,this._mimeType=i}generate(){}createDownloadUrl(){this.buffer||this.generate();const e=new Blob([this.buffer],{type:this._mimeType});return this.lastDownloadBlobUrl&&window.URL.revokeObjectURL(this.lastDownloadBlobUrl),this.lastDownloadBlobUrl=URL.createObjectURL(e),this.lastDownloadBlobUrl}createDownloadLink(e){const i=e instanceof HTMLAnchorElement?e:document.createElement("a");return typeof e=="string"&&(i.innerHTML=e),i.href=this.createDownloadUrl(),i.download=this._filename,i.hasChildNodes||(i.innerText=this._filename),sn("Link created for file "+this._filename),i}}let Yi=null;class Z0 extends xu{constructor(e,i){super(e,"application/zip"),this.files=[],this.createFolderEntries=!!i;const n=new Date;this.timeInt=Math.round(n.getSeconds()/2)|n.getMinutes()<<5|n.getHours()<<11,this.dateInt=n.getFullYear()-1980<<9|n.getMonth()+1<<5|n.getDate()}addFileFromString(e,i){const n=new TextEncoder("utf-8").encode(i);return this.addFileFromUint8Array(e,n),this}addFileFromUint8Array(e,i){if(!(i instanceof Uint8Array))throw new Error("invalid parameter");return this.files.push({name:e.replace("\\","/"),data:i}),this}generate(){sn("NullZip archive generation started");const e={};for(const c of this.files)c.size=c.data?c.data.byteLength:0,c.crc=c.data?this.crc(c.data):0,e[c.name]=c;const i=[];if(this.createFolderEntries){const c=/\//giu;for(const u of this.files){const d=u.name;for(let p=c.exec(d);p!==null;p=c.exec(d)){const h={name:d.substr(0,p.index+1),size:0,crc:0,data:new Uint8Array(0)};typeof e[h.name]>"u"&&(e[h.name]=h,i.push(h))}}}Array.prototype.push.apply(this.files,i),this.files.sort((c,u)=>c.name.length-u.name.length||c.name.localeCompare(u.name));const n=this.files.reduce((c,u)=>c+76+u.name.length*2+u.size,22);sn("Estimated file size: "+n),this.buffer=new ArrayBuffer(n);const o=new Q0(this.buffer),r=this.hex2u8a("504b0304140000000000");for(const c of this.files)c.offs=o.i,o.writeByteArray(r),o.uint16(this.timeInt),o.uint16(this.dateInt),o.uint32(c.crc),o.uint32(c.size),o.uint32(c.size),o.uint16(c.name.length),o.uint16(0),o.writeASCII(c.name),c.size>0&&o.writeByteArray(c.data);const a=o.i,s=this.hex2u8a("504b01023f00140000000000");for(const c of this.files)o.writeByteArray(s),o.uint16(this.timeInt),o.uint16(this.dateInt),o.uint32(c.crc),o.uint32(c.size),o.uint32(c.size),o.uint16(c.name.length),o.uint16(0),o.uint16(0),o.uint16(0),o.uint16(0),o.uint32(c.size?32:48),o.uint32(c.offs),o.writeASCII(c.name);const l=o.i-a;return o.writeByteArray(this.hex2u8a("504b050600000000")),o.uint16(this.files.length),o.uint16(this.files.length),o.uint32(l),o.uint32(a),o.uint16(0),sn("Finished creating zip. size="+o.i+", predicted size="+n),this.buffer}crc(e){let i,n,o=-1;if(!Yi)for(Yi=[],n=0;n<256;i=++n){for(let r=0;r<8;r++)i=i&1?3988292384^i>>>1:i>>>1;Yi[n]=i}for(let r=0;r<e.byteLength;r++)o=o>>>8^Yi[(o^e[r])&255];return(o^-1)>>>0}hex2u8a(e){const i=new Uint8Array(Math.ceil(e.length/2));for(let n=0;n<i.length;n++)i[n]=parseInt(e.substr(n*2,2),16);return i}}class Q0{constructor(e){this.dw=new DataView(e),this.i=0,this.le=!0,this.utf8encoder=new TextEncoder("utf-8")}uint8(e){this.dw.setUint8(this.i++,e)}uint16(e){this.dw.setUint16(this.i,e,this.le),this.i+=2}uint32(e){this.dw.setUint32(this.i,e,this.le),this.i+=4}writeByteArray(e){if(!(e instanceof Uint8Array))throw new Error("invalid parameter");new Uint8Array(this.dw.buffer).set(e,this.i),this.i+=e.byteLength}writeASCII(e){for(let i=0;i<e.length;i++)this.dw.setUint8(this.i++,e.charCodeAt(i)&255)}}const Ht="application/vnd.openxmlformats-officedocument.spreadsheetml",ro="http://schemas.openxmlformats.org",Ji=`${ro}/spreadsheetml/2006/main`,Oo=`${ro}/package/2006`,Nt=`${ro}/officeDocument/2006/relationships`,el=[{id:164,code:"yyyy&quot;-&quot;mm&quot;-&quot;dd"},{id:165,code:"yyyy&quot;-&quot;mm&quot;-&quot;dd&quot; &quot;h&quot;:&quot;mm&quot;:&quot;ss"}];class eb extends xu{constructor(e,i){super(e,`${Ht}.sheet`),this.sheets=[],this.frozen=!!(i&&i.frozen),this.autoFilter=!!(i&&i.filter)}addSheetFromData(e,i){const n=this.sheets.length+1;return this.sheets.push({id:n,name:this.escapeXml(i||"Sheet"+n),data:e}),this}generate(){const e=[{name:"xl/styles.xml",xml:`<styleSheet xmlns="${Ji}" xmlns:mc="${ro}/markup-compatibility/2006"><numFmts count="${el.length}">${el.map(o=>`<numFmt numFmtId="${o.id}" formatCode="${o.code}" />`)}</numFmts><fonts count="2"><font><sz val="10.0"/><color rgb="FF000000"/><name val="Arial"/></font><font><b/></font></fonts><fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="lightGray"/></fill></fills><borders count="1"><border><left/><right/><top/><bottom/></border></borders><cellStyleXfs count="1"><xf borderId="0" fillId="0" fontId="0" numFmtId="0" applyAlignment="1" applyFont="1"/></cellStyleXfs><cellXfs><xf borderId="0" fillId="0" fontId="0" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment/></xf><xf borderId="0" fillId="0" fontId="1" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment/></xf><xf borderId="0" fillId="0" fontId="0" numFmtId="164" xfId="0" applyAlignment="1" applyFont="1" applyNumberFormat="1"><alignment /></xf><xf borderId="0" fillId="0" fontId="0" numFmtId="165" xfId="0" applyAlignment="1" applyFont="1" applyNumberFormat="1"><alignment /></xf></cellXfs><cellStyles count="1"><cellStyle xfId="0" name="Normal" builtinId="0"/></cellStyles><dxfs count="0"/></styleSheet>`},{name:"xl/sharedStrings.xml",xml:`<sst xmlns="${Ji}" count="2" uniqueCount="2"><si><t>text here</t></si></sst>`},{name:"xl/workbook.xml",xml:`<workbook xmlns="${Ji}" xmlns:r="${Nt}"><workbookPr/><sheets>`+this.sheets.map(o=>`<sheet state="visible" name="${o.name}" sheetId="${o.id}" r:id="rId${o.id+2}"/>`).join("")+"</sheets><definedNames/><calcPr/></workbook>"},{name:"xl/_rels/workbook.xml.rels",xml:`<Relationships xmlns="${Oo}/relationships"><Relationship Id="rId1" Type="${Nt}/styles" Target="styles.xml" /><Relationship Id="rId2" Type="${Nt}/sharedStrings" Target="sharedStrings.xml"/>`+this.sheets.map(o=>`<Relationship Id="rId${o.id+2}" Type="${Nt}/worksheet" Target="worksheets/sheet${o.id}.xml"/>`).join("")+"</Relationships>"},{name:"[Content_Types].xml",xml:`<Types xmlns="${Oo}/content-types"><Default ContentType="application/xml" Extension="xml"/><Default ContentType="application/vnd.openxmlformats-package.relationships+xml" Extension="rels"/>`+this.sheets.map(o=>`<Override ContentType="${Ht}.worksheet+xml" PartName="/xl/worksheets/sheet${o.id}.xml"/>`).join("")+`<Override ContentType="${Ht}.sharedStrings+xml" PartName="/xl/sharedStrings.xml"/><Override ContentType="${Ht}.styles+xml" PartName="/xl/styles.xml" /><Override ContentType="${Ht}.sheet.main+xml" PartName="/xl/workbook.xml"/></Types>`},{name:"_rels/.rels",xml:`<Relationships xmlns="${Oo}/relationships"><Relationship Id="rId1" Type="${Nt}/officeDocument" Target="xl/workbook.xml"/></Relationships>`}],i=this.sheets.map(o=>{let r=0;const a=o.data.map((s,l)=>{const c=this.frozen&&l===0?' s="1"':"";s.length>r&&(r=s.length);const u=s.map((d,p)=>{const h=this.colName(p)+(l+1);return typeof d=="number"?`<c r="${h}"${c}><v>${d}</v></c>`:d instanceof Date?`<c s="${d.getHours()||d.getMinutes()||d.getSeconds()?3:2}"><v>${this.dateToExcelDate(d)}</v></c>`:`<c t="inlineStr"${c}><is><t>${this.escapeXml(d.toString())}</t></is></c>`});return`<row r="${l+1}">${u.join("")}</row>`});return{name:`xl/worksheets/sheet${o.id}.xml`,xml:`<worksheet xmlns="${Ji}"><sheetViews><sheetView workbookViewId="0"`+(this.frozen?' tabSelected="1"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView>':"/>")+`</sheetViews><sheetFormatPr customHeight="1" defaultColWidth="17.5" defaultRowHeight="15.75"/><sheetData>${a.join("")}</sheetData>`+(this.autoFilter?`<autoFilter ref="A1:${this.colName(r)}${o.data.length}"/>`:"")+"</worksheet>"}}),n=new Z0(this._filename,!1);return[...e,...i].forEach(o=>n.addFileFromString(o.name,o.xml)),this.buffer=n.generate(),this.buffer}colName(e){return e<26?String.fromCharCode(e+65):String.fromCharCode(Math.floor(e/26+64))+String.fromCharCode(Math.floor(e%26+65))}escapeXml(e){return e.replace(/[<>&'"]/gu,i=>["&lt;","&gt;","&amp;","&apos;","&quot;"][`<>&'"`.indexOf(i)])}dateToExcelDate(e){return 25569+(e.getTime()-e.getTimezoneOffset()*6e4)/864e5}}const tb=(t,e)=>{const i=t.map(o=>o.title),n=e.map(o=>t.map(r=>{const a=r.toXlsxValue(r,o);return a??""}));return n.unshift(i),n},ib=(t,e,i,n)=>{const o=tb(t,e),r=new eb(i).addSheetFromData(o,n).generate();gi(new File([r],i,{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}))},nb=({columns:t,selectedItems:e,csvFilename:i,xlsxFilename:n,xlsxSheetname:o,topPlacement:r})=>_`<cosmoz-bottom-bar
		id="bottomBar"
		?active=${!Xn(e.length)}
		part="bottomBar"
		exportparts="bar: bottomBar-bar, info: bottomBar-info, buttons: bottomBar-buttons"
	>
		<slot name="info" slot="info">
			${Jc("{0} selected item","{0} selected items",e.length)}
		</slot>
		<slot name="actions" id="actions"></slot>
		<!-- These slots are needed by cosmoz-bottom-bar
        as it might change the slot of the actions to distribute them in the menu -->
		<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
		<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
		<cosmoz-dropdown-menu part="extra" slot="extra" .placement=${r}>
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
				@click=${()=>X0(t,e,i)}
			>
				${H("Save as CSV")}
			</button>
			<button
				@click=${()=>ib(t,e,n,o)}
			>
				${H("Save as XLSX")}
			</button>
			<slot name="download-menu"></slot>
		</cosmoz-dropdown-menu>
	</cosmoz-bottom-bar>`,ob=({allSelected:t,onAllCheckboxChange:e,sortAndGroup:i,dataIsValid:n,data:o,columns:r,filters:a,groupOnColumn:s,setFilterState:l,settingsConfig:c,hideSelectAll:u})=>_`<sort-and-group-provider .value=${i}>
		<div class="header" id="header" part="header">
			${q(!u,()=>_`<input
						class="checkbox all"
						type="checkbox"
						.checked=${t}
						@input=${e}
						?disabled=${!n}
						part="all"
					/>`)}
			${q(u,()=>_` <cosmoz-omnitable-settings
						.newLayout="${!0}"
						.config=${c}
					></cosmoz-omnitable-settings>`)}

			<cosmoz-omnitable-header-row
				part="headerRow"
				.data=${o}
				.columns=${r}
				.filters=${a}
				.groupOnColumn=${s}
				.setFilterState=${l}
				.settingsConfig=${c}
				.hideSelectAll=${u}
			></cosmoz-omnitable-header-row>
		</div>
	</sort-and-group-provider>`,rb=xe`
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
		background-image: linear-gradient(
			90deg, 
			var(--cosmoz-omnitable-skeleton-bg-from, #e0e0e0), 
			var(--cosmoz-omnitable-skeleton-bg-middle, #f5f5f5), 
			var(--cosmoz-omnitable-skeleton-bg-to, #e0e0e0)
		);
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
`,ab=({settingsConfig:t})=>{const{columns:e,collapsed:i}=t,n=e.filter(o=>!i.some(r=>r.name===o.name));return _`<div class="skeleton">
		${Array.from({length:5},()=>_`<div>
					<div class="checkbox"></div>
					${n.map(o=>_`<div
								class="cell"
								part=${`cell-${o.name}`}
								name=${o.name}
							></div>`)}
				</div>`)}
	</div>`};customElements.define("cosmoz-omnitable-skeleton",V(ab,{styleSheets:[rb]}));const sb=(t,e)=>{const{settingsConfig:i}=t,{processedItems:n,dataIsValid:o,filterIsTooStrict:r,loading:a,displayEmptyGroups:s,compareItemsFn:l,setSelectedItems:c,renderItem:u,renderGroup:d,error:p}=e;return _`${q(!a&&!o&&!p,()=>_`<div class="tableContent-empty">
					<slot name="empty-set-message">
						<iron-icon icon="icons:announcement"></iron-icon>
						<div class="tableContent-empty-message">
							<h3>${H("Working set empty")}</h3>
							<p>${H("No data to display")}</p>
						</div>
					</slot>
				</div>`)}
		${q(r,()=>_`<div class="tableContent-empty">
					<iron-icon icon="icons:announcement"></iron-icon>
					<div>
						<h3>${H("Filter too strict")}</h3>
						<p>${H("No matches for selection")}</p>
					</div>
				</div>`)}
		${q(a&&!n.length,()=>_`<div class="tableContent-empty overlay">
					<cosmoz-omnitable-skeleton
						.settingsConfig=${i}
					></cosmoz-omnitable-skeleton>
				</div>`)}
		${q(a&&n.length,()=>_`<div class="tableContent-empty overlay spinner">
					<cz-spinner></cz-spinner>
				</div>`)}
		${q(p,()=>_`<div class="tableContent-empty overlay">
					<iron-icon icon="icons:error"></iron-icon>
					<div class="tableContent-empty-message">
						<h3>${H("Error loading data")}</h3>
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
		</div>`},tl=(t,e)=>{Object.assign(t.style,{display:e?"":"none"})};class lb extends HTMLElement{static get observedAttributes(){return["opened"]}toggle=$l("height");constructor(){super();const e=new CSSStyleSheet;e.replaceSync(`
      :host { display: block; overflow: hidden; }
		`);const i=this.attachShadow({mode:"open"});i.appendChild(document.createElement("slot")),i.adoptedStyleSheets=[e]}connectedCallback(){tl(this,this.getAttribute("opened")!=null)}attributeChangedCallback(e,i,n){switch(e){case"opened":{const o=n!=null;return this.isConnected?this.toggle(this,o):tl(this,o)}}}}customElements.define("cosmoz-collapse",lb);const cb=Te`
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
	${_u}
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
`,ub=Te`
	:host {
		display: contents;
		color: var(
			--cosmoz-omnitable-settings-color,
			var(--cz-text-color, #101010)
		);
		--cosmoz-dropdown-box-shadow:
			0 3px 4px 0 rgb(0 0 0 / 14%), 0 1px 8px 0 rgb(0 0 0 / 12%),
			0 3px 3px -2px rgb(0 0 0 / 40%);
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
`,Xi=t=>{const e=parseInt(t,10);return isFinite(e)?e:void 0},db=t=>{const{config:e}=t,{settings:i,setSettings:n,collapsed:o}=e,r=$e({collapsed:o,settings:i.columns,setSettings:S(a=>n(s=>({...s,columns:a})),[n])});return{...e,onDown:S(a=>{a.target.closest(".pull")&&(r.handle=a.currentTarget)},[r]),onDragStart:S(a=>{const{target:s}=a,l=Xi(s.dataset.index);if(!r.handle?.contains(s)||l==null)return a.preventDefault();r.handle=null,a.dataTransfer.effectAllowed="move",a.dataTransfer.setData("omnitable/sort-index",l),a.dataTransfer.setData("text/plain",l),setTimeout(()=>s.classList.add("drag"),0),s.addEventListener("dragend",c=>c.target.classList.remove("drag"),{once:!0})},[r]),onDragEnter:S(a=>{const s=a.currentTarget;s===a.target&&(a.preventDefault(),a.dataTransfer.dropEffect="move",s.classList.add("dragover"))},[]),onDragOver:S(a=>{a.preventDefault(),a.currentTarget.classList.add("dragover")},[]),onDragLeave:S(a=>{const s=a.currentTarget;s.contains(a.relatedTarget)||s.classList.remove("dragover")},[]),onDrop:S(a=>{const s=Xi(a.dataTransfer.getData("omnitable/sort-index")),l=Xi(a.currentTarget.dataset.index),{settings:c,setSettings:u}=r;a.currentTarget.classList.remove("dragover"),a.preventDefault();const d=c.slice();d.splice(l+(s>=l?0:-1),0,d.splice(s,1)[0]),u(d)},[r]),onToggle:S(a=>{const{settings:s,setSettings:l}=r,c=s.map(d=>({...d,disabled:d.disabled||r.collapsed?.some(p=>p.name===d.name)})),u=Xi(a.target.closest("[data-index]")?.dataset.index);c.splice(u,1,{...s[u],disabled:!a.target.checked,priority:a.target.checked?s.reduce((d,p)=>Math.max(d,p.priority),0)+1:s[u].priority}),l(c)},[r])}},pb=[Yl({apply({availableHeight:t,elements:e}){Object.assign(e.floating.style,{maxHeight:`${Math.max(0,t)}px`})}}),...zr],hb=({onDragStart:t,onDragEnter:e,onDragOver:i,onDragLeave:n,onDrop:o,onDown:r,onToggle:a,collapsed:s,filters:l})=>(c,u)=>{const d=!!s?.find(h=>h.name===c.name),p=!c.disabled&&!d;return _` <div
			class="item"
			data-index=${u}
			@mousedown=${r}
			draggable="true"
			@dragstart=${t}
			@dragenter=${e}
			@dragover=${i}
			@dragleave=${n}
			@drop=${o}
		>
			<button class="pull">${z0}</button>
			<label class="title" ?has-filter=${!Xn(l[c.name]?.filter)}
				>${c.title}</label
			>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${p}
				@click=${a}
				.indeterminate=${d}
			/>
		</div>`},mb=t=>{const{settings:e,settingsId:i,onSave:n,onReset:o,hasChanges:r,opened:a,setOpened:s,...l}=db(t);return _` <div class="headline">
			${H("Sort and filter")}
			<button
				class="close"
				@click=${c=>{const u=c.currentTarget;u?.focus(),u?.blur()}}
			>
				${C0}
			</button>
		</div>

		<div class="contents">
			<div
				class="heading"
				?data-opened=${a.columns}
				@click=${()=>s(c=>({...c,columns:!c.columns}))}
				part="columns columns-heading"
			>
				${H("Columns")} ${Lo}
			</div>
			<cosmoz-collapse
				?opened="${a.columns}"
				part="columns columns-content"
			>
				<div class="list">${e.columns?.map(hb(l))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${a.sort}
				@click=${()=>s(c=>({...c,sort:!c.sort}))}
			>
				${H("Sort on")} ${Lo}
			</div>
			<cosmoz-collapse ?opened=${a.sort}> ${E0()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${a.group}
				@click=${()=>s(c=>({...c,group:!c.group}))}
				part="groups groups-heading"
			>
				${H("Group on")} ${Lo}
			</div>
			<cosmoz-collapse ?opened=${a.group} part="groups groups-heading"
				>${A0()}</cosmoz-collapse
			>
		</div>

		${q(i,()=>_`<div class="buttons">
					<button
						class="button reset"
						@click=${o}
						?disabled=${!r}
					>
						${H("Reset")}
					</button>
					<button class="button" @click=${n} ?disabled=${!r}>
						${H("Save")}
					</button>
				</div>`)}`};customElements.define("cosmoz-omnitable-settings-ui",V(mb,{styleSheets:[Et(cb)]}));const fb=({config:t,newLayout:e})=>_`
	<cosmoz-dropdown
		.placement="${e?"bottom-start":"bottom-end"}"
		.middleware="${pb}"
	>
		${q(e,()=>_`<div class="headerDots" slot="button">...</div>`,()=>_` <svg
					viewBox="0 0 24 24"
					width="24"
					slot="button"
					fill="currentColor"
				>
					<circle cx="10" cy="18" r="2"></circle>
					<circle cx="10" cy="12" r="2"></circle>
					<circle cx="10" cy="6" r="2"></circle>
				</svg>`)}
		${q(t?.badge,()=>_`<div class="badge" slot="button"></div>`)}
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${t}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`;customElements.define("cosmoz-omnitable-settings",V(fb,{styleSheets:[Et(ub)]}));const Pn=["sortOn","descending","groupOn","groupOnDescending"],Zi=t=>e=>typeof e=="object"&&e!==null&&"name"in e&&e.name===t,gb=(t=[],e=[],i=[])=>{const n=e.filter(a=>t.some(Zi(a.name))),o=t.filter(a=>a.name!=null&&!e.some(Zi(a.name))&&!i.some(Zi(a.name))),r=i.filter(a=>!e.some(Zi(a.name)));return[...n,...r.flatMap(a=>{const s=t.find(l=>l.name===a.name);return s?{...a,title:s.title??a.title??"",minWidth:parseInt(s.minWidth??"0",10)}:[]}),...o.map(a=>{const{name:s,title:l,priority:c,minWidth:u,width:d,flex:p}=a;return{name:s??"",title:l??"",priority:c??0,minWidth:parseInt(u??"0",10),width:parseInt(d??"0",10),flex:parseInt(p??"0",10)}})]},bb=(t,e)=>({...e,...$n(Array.from(Pn))(t),columns:t.columns?.map($n(["name","priority","width","flex","disabled"]))}),vb=({columns:t,settings:e,savedSettings:i,initial:n})=>({...Object.fromEntries(Pn.flatMap(r=>n?.[r]!=null?[[r,n[r]]]:[])),...i?$n(Array.from(Pn))(i):{},...e,columns:gb(t,e?.columns,i?.columns)}),yb=({prefix:t="omnitable-"}={})=>({write:async(i,n)=>{const o=t+i;try{n?localStorage.setItem(o,JSON.stringify(n)):localStorage.removeItem(o)}catch(r){console.error(r)}},read:async i=>{if(i)try{return JSON.parse(localStorage.getItem(t+i))}catch(n){console.error(n)}}}),_b=br(yb),xb=()=>{const t=bi(_b);return M(()=>t(),[t])},wb=(t,e,i,n)=>{const[o,r]=J(),{read:a,write:s}=xb();return $(async()=>{t&&r(await a(t))},[t,a]),{settingsId:t,savedSettings:o,onSave:S(async()=>{if(!t)return;const l=bb(e,o);await s(t,l),i(),r(l)},[e,o]),onReset:S(async l=>{i(),l.shiftKey&&(await s(t),r()),n?.()},[n]),hasChanges:e!=null}},Cb=({settingsId:t,host:e})=>{const i=M(()=>Object.fromEntries(Pn.map(f=>[f,e[f]])),[]),n=vi(),o=S(()=>{n.current?.(i)},[i]),[r,a]=J(),[s,l]=J({columns:!0,sort:!0}),{savedSettings:c,...u}=wb(t,r,a,o),{enabledColumns:d}=e,p=Wf(e,{enabledColumns:d}),h=M(()=>vb({columns:p,settings:r,savedSettings:c,initial:i}),[p,r,c]),m=M(()=>h.columns.map(f=>p.find(b=>b.name===f.name)).filter(Boolean),[p,...h.columns.map(f=>f.name)]);return{...u,opened:s,setOpened:l,settings:h,columns:m,setSettings:a,resetRef:n}},il=t=>Number.isFinite(t)?t:0,zb=(t,e)=>{const i=[];let[n,o]=t.reduce(([u,d],{width:p,flex:h})=>[u+p,d+h],[0,0]),r=e-n,a=il(r/o),s=0,l=0,c=0;for(let u=0;u<t.length;u++){const{width:d,minWidth:p,flex:h}=t[u],m=r>=0?a*h:d*r/n;if(p>d+m){s+=d,l+=p,c+=h,i[u]=p;continue}if(h===0){s+=d,l+=d,i[u]=d;continue}}n-=s,r=e-l-n,o-=c,a=il(r/o);for(let u=0;u<t.length;u++){if(i[u]!=null)continue;const{width:d,flex:p}=t[u],h=r>=0?a*p:d*r/n;i[u]=d+h}return i},In=Symbol("index"),Sb=(t,e)=>{if(typeof t.findLastIndex=="function")return t.findLastIndex(e);for(let i=t.length-1;i>=0;i--)if(e(t[i],i,t))return i;return-1},Ab=(t,e)=>{const i=Sb(t,a=>a!=null&&a>0),n=(a,s)=>`.cell[name="${a}"], cosmoz-omnitable-skeleton::part(cell-${a}){width: ${Math.floor(s)}px;padding: 0 min(3px, ${s/2}px)}`,o=a=>`cosmoz-omnitable-resize-nub[name="${a}"]{display:none}`,r=a=>`cosmoz-omnitable-resize-nub[name="${a}"], .cell[name="${a}"]{display:none}`;return e.map((a,s)=>{const l=t[s];if(l==null||l===0)return r(a.name);const c=n(a.name,l);return s===i?`${c}
${o(a.name)}`:c}).join(`
`)},wu=(t,e,i)=>{const n=t.filter(s=>!s.hidden),o=n.reduce((s,{width:l})=>s+l,0);if(n.length>1&&o>e)return wu(n.slice(1),e,i);const r=n.reduce(([s,l],c,u)=>[Math.max(s,c.index),c.index>s?u:l],[-1,-1])[1];return r!==-1&&(n[r].flex=1),zb(n,e).reduce((s,l,c)=>(s[n[c].index]=l,s),new Array(i).fill(void 0))},Eb=(t,e)=>t.length===0?".cell {display: none;}":Ab(t,e),Mb=({host:t,canvasWidth:e,layout:i,setSettings:n})=>{const o=vi();o.current=r=>n(a=>{const s=a.columns,{detail:{newWidth:l,column:c}}=r,u=s.findIndex(h=>h.name===c.name),d=[],p=s.reduce((h,m)=>Math.max(h,m.priority),-1/0);for(let h=0;h<i.length;h++)if(d[h]={...s[h]},h<u&&i[h]&&(d[h].width=i[h],d[h].flex=0,d[h].priority=p),h===u){const m=i.reduce((f,b,v)=>v<u&&b?f-b:f,e);d[h].width=Math.min(m,Math.max(l,s[h].minWidth)),d[h].flex=0,d[h].priority=p}return{...a,columns:d}}),$(()=>{const r=a=>o.current(a);return t.addEventListener("column-resize",r),()=>t.removeEventListener("column-resize",r)},[])},Lb=(t,e)=>$(()=>{const i=([o])=>{o.contentRect?.width!==0&&requestAnimationFrame(()=>e(o.contentRect?.width-20-44-24))},n=new ResizeObserver(i);return n.observe(t),()=>n.unobserve(t)},[]),kb=t=>{const[e,i]=J(()=>t.getBoundingClientRect().width);return Lb(t,i),e},Ob=(t,e)=>{const i=M(()=>{let n=!1,o;const r=()=>{if(!n)return;o=requestAnimationFrame(r),t()&&(n=!1)};return{start:()=>{n=!0,cancelAnimationFrame(o),o=requestAnimationFrame(r)},stop:()=>{n=!1,cancelAnimationFrame(o)}}},[]);$(()=>{i.start()},e),$(()=>()=>i.stop(),[])},$b=(t=0,e=0)=>Math.abs(t-e)<.1,Tb=(t,e=1.9,i=vr)=>{const n=$e({target:t}),o=S(()=>{if(n.tween||(n.tween=n.target),n.target.every((r,a)=>n.tween[a]===r))return i(n.tween),!0;n.tween=n.target.map((r,a)=>$b(n.tween[a],r)?r:(n.tween[a]??0)+((r??0)-(n.tween[a]??0))/e||0),i(n.tween)},[]);Ob(o,[t])},Pb=({canvasWidth:t,groupOnColumn:e,config:i,miniColumn:n})=>M(()=>{if(!Array.isArray(i)||t==null||t===0)return[];const o=i.map((r,a)=>({minWidth:r.minWidth,width:r.width,flex:r.flex,priority:r.priority,name:r.name,index:a,hidden:r.name===e?.name||r.disabled})).map(r=>n?{...r,hidden:n.name!==r.name}:r).sort(({index:r,priority:a},{index:s,priority:l})=>a===l?s-r:a-l);return wu(o,t,o.length)},[t,e,i]),Ib=({host:t,canvasWidth:e,columns:i})=>{const n=t.miniBreakpoint??480,o=M(()=>e<=n,[e,n]),r=M(()=>o?i?.filter(c=>c.mini!=null).sort((c,u)=>(c.mini??0)-(u.mini??0)):[],[i,o]),[a,...s]=r??[],l=!!a;return $(()=>{t.toggleAttribute("mini",l)},[l]),{isMini:l&&o,miniColumn:a,miniColumns:s}},Hb=t=>{const e=M(()=>new CSSStyleSheet,[]);return $(()=>{t.shadowRoot.adoptedStyleSheets=[...t.shadowRoot.adoptedStyleSheets,e]},[]),e},Nb=({host:t,columns:e,settings:i,setSettings:n,resizeSpeedFactor:o,sortAndGroupOptions:r})=>{const a=kb(t),{isMini:s,miniColumn:l,miniColumns:c}=Ib({host:t,canvasWidth:a,columns:e}),{groupOnColumn:u}=r,d=Pb({canvasWidth:a,groupOnColumn:u,miniColumn:l,config:i.columns}),p=Hb(t),h=M(()=>i.columns.reduce((f,b,v)=>d[v]!=null||b.name===u?.name||b.disabled?f:[...f,e.find(g=>g.name===b.name)],[]),[e,i,d]),m=$e({columns:i.columns});return Tb(d,o,f=>{const b=Eb(f,m.columns);p.replace(b)}),Mb({host:t,canvasWidth:a,layout:d,setSettings:f=>n(f(i))}),{isMini:s,collapsedColumns:h,miniColumns:c}},Fb=({host:t,...e})=>{const{csvFilename:i="omnitable.csv",xlsxFilename:n="omnitable.xlsx",xlsxSheetname:o="Omnitable",topPlacement:r="top-end"}=t;return{csvFilename:i,xlsxFilename:n,xlsxSheetname:o,topPlacement:r,...e}},Vb=({host:t,selectedItems:e,data:i,sortAndGroupOptions:n,collapsedColumns:o,settings:r,filterFunctions:a,settingS:s,filters:l,...c})=>{const u=i&&i.length>0&&e.length===i.length,d=f=>{f.target.checked?t.shadowRoot.querySelector("#groupedList").selectAll():t.shadowRoot.querySelector("#groupedList").deselectAll()},{groupOnColumn:p}=n,h=M(()=>[p,...o,...r.columns.filter(f=>f.disabled)].some(f=>f&&Object.keys(a).includes(f.name)),[a,r,o]),m=M(()=>({...s,collapsed:o,badge:h,filters:l}),[s,o,h,l]);return $(()=>{const f=t.shadowRoot.querySelector("#tableContent"),b=new ResizeObserver(v=>requestAnimationFrame(()=>{t.style.setProperty("--ot-height",v[0]?.contentRect.height+"px")}));return b.observe(f),()=>b.unobserve(f)},[]),{allSelected:u,onAllCheckboxChange:d,data:i,settingsConfig:m,filters:l,groupOnColumn:p,sortAndGroup:n.sortAndGroup,...c}},Cu=_`
	<svg
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
	>
		<g>
			<path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
		</g>
	</svg>
`,Rb=t=>t?"groupRow groupRow-folded":"groupRow",Db=({item:t,index:e})=>i=>q(i?.length>0,()=>_`
				<div class="itemRow-minis" part="item-minis">
					${i.map(n=>_`<div
								class="itemRow-mini"
								part="item-mini item-mini-${n.name}"
							>
								${(n.renderMini??n.renderCell)(n,{item:t,index:e})}
							</div>`)}
				</div>
			`),qb=({columns:t,collapsedColumns:e,miniColumns:i,onItemClick:n,onCheckboxChange:o,dataIsValid:r,groupOnColumn:a,onItemChange:s,rowPartFn:l})=>(c,u,{selected:d,expanded:p,toggleCollapse:h})=>_`
		<div
			?selected=${d}
			part="${["itemRow",`itemRow-${c[In]}`,l?.(c,u)].filter(Boolean).join(" ")}"
			.dataIndex=${c[In]}
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
					@input=${o}
					?disabled=${!r}
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
					?hidden="${Xn(e.length)}"
					?aria-expanded="${p}"
					@click="${h}"
				>
					${Cu}
				</button>
			</div>
			${Db({item:c,index:u})(i)}
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
	`,Bb=({onCheckboxChange:t,dataIsValid:e,groupOnColumn:i})=>(n,o,{selected:r,folded:a,toggleFold:s})=>_` <div
			class="${Rb(a)}"
			part="groupRow groupRow-${n[In]}"
		>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${r}
				.dataItem=${n}
				@input=${t}
				?disabled=${!e}
			/>
			<h3 class="groupRow-label">
				<div><span>${i?.title}</span>: &nbsp;</div>
				<cosmoz-omnitable-group-row
					.column=${i}
					.item=${n.items?.[0]}
					.selected=${r}
					.folded=${a}
					.group=${n}
				></cosmoz-omnitable-group-row>
			</h3>
			<div class="groupRow-badge">${n.items.length}</div>
			<button class="expand" ?aria-expanded="${a}" @click=${s}>
				${Cu}
			</button>
		</div>`,jb=({host:t,error:e,dataIsValid:i,processedItems:n,columns:o,collapsedColumns:r,miniColumns:a,sortAndGroupOptions:s,rowPartFn:l,...c})=>{const{loading:u=!1,displayEmptyGroups:d=!1,compareItemsFn:p}=t,h=vi({shiftKey:!1,ctrlKey:!1}),m=S(g=>{const x=g.target.dataItem,y=g.target.checked;h.current.shiftKey?t.shadowRoot.querySelector("#groupedList").toggleSelectTo(x,y):h.current.ctrlKey?(g.target.checked=!0,t.shadowRoot.querySelector("#groupedList").selectOnly(x)):t.shadowRoot.querySelector("#groupedList").toggleSelect(x,y),g.preventDefault(),g.stopPropagation()},[]);$(()=>{const g=({shiftKey:x,ctrlKey:y})=>{h.current={shiftKey:x,ctrlKey:y}};return window.addEventListener("keydown",g),window.addEventListener("keyup",g),()=>{window.removeEventListener("keydown",g),window.removeEventListener("keyup",g)}},[]);const f=S(g=>{const x=g.composedPath();x.slice(0,x.indexOf(g.currentTarget)).find(w=>w.matches?.("a, .checkbox, .expand"))||t.dispatchEvent(new window.CustomEvent("omnitable-item-click",{bubbles:!0,composed:!0,detail:{item:g.currentTarget.dataItem,index:g.currentTarget.dataIndex}}))},[]),{groupOnColumn:b}=s,v=S((g,x)=>y=>Gf(t,g,x,y),[]);return{...c,processedItems:n,dataIsValid:i,filterIsTooStrict:i&&n.length<1,loading:u,compareItemsFn:p,displayEmptyGroups:d,error:e,renderItem:M(()=>qb({columns:o,collapsedColumns:r,miniColumns:a,onItemClick:f,onCheckboxChange:m,dataIsValid:i,groupOnColumn:b,onItemChange:v,rowPartFn:l}),[o,r,f,m,i,b,v,l]),renderGroup:M(()=>Bb({onCheckboxChange:m,dataIsValid:i,groupOnColumn:b}),[m,i,b])}},Ub=(t,e)=>{if(t===e)return 0;if(t==null)return-1;if(e==null)return 1;const i=typeof t,n=typeof e;return i==="object"&&n==="object"?t.toString()<e.toString()?-1:1:i==="number"&&n==="number"?t-e:i==="string"&&n==="string"?t<e?-1:1:i==="boolean"&&n==="boolean"?t?-1:1:(console.warn("unsupported sort",i,t,n,e),0)},$o=(t,e)=>(i,n)=>Ub(t(i),t(n))*(e?-1:1),Kb=t=>t.replace(/([a-z0-9])([A-Z])/gu,"$1-$2").toLowerCase(),nl=(t,e)=>{!t||!e||Object.entries(e).forEach(([i,n])=>{t[He].__ownChange=!0,t[He][i]=n,t[He].__ownChange=!1,t[He].dispatchEvent(new CustomEvent(`${Kb(i)}-changed`,{bubbles:!0,detail:{value:n}}))})},To=(t,e)=>Object.assign(t,{[In]:e}),Qi=Symbol("unparsed"),Wb=({data:t,columns:e,hashParam:i,sortAndGroupOptions:n,noLocalSort:o,noLocalFilter:r})=>{const{groupOnColumn:a,groupOnDescending:s,sortOnColumn:l,descending:c}=n,u=S(([y,w])=>{const z=e.find(({name:C})=>C===y);return z==null?[y,void 0]:[y,w.filter&&z.serializeFilter(z,w.filter)]},[e]),d=S(([y,w])=>{const z=e.find(({name:E})=>E===y);if(z==null)return[y,{[Qi]:w}];const C={filter:z.deserializeFilter(z,w)};return nl(z,C),[y,C]},[e]),[p,h]=Bt({},i,{multi:!0,suffix:"-filter--",write:u,read:d}),m=S((y,w)=>h(z=>{const C=qn(w,z[y]);return nl(e.find(E=>E.name===y),C),{...z,[y]:{...z[y],...C}}}),[e,h]),f=M(()=>Object.values(p).map(y=>y.filter),[p]),b=M(()=>Object.fromEntries(e.map(y=>[y.name,!y.noLocalFilter&&y.getFilterFn(y,p[y.name]?.filter)]).filter(([,y])=>!!y)),[e,...f]),v=M(()=>!Array.isArray(t)||t.length===0?[]:Object.entries(b).length===0||r?t.slice():t.filter(y=>Object.values(b).every(w=>w(y))),[t,b,r]),g=M(()=>{if(!o&&!a&&l!=null&&l.sortOn!=null)return v.slice().sort($o(y=>l.getComparableValue({...l,valuePath:l.sortOn},y),c));if(a!=null&&a.groupOn!=null){const y=v.reduce((w,z)=>{const C=a.getComparableValue({...a,valuePath:a.groupOn},z);if(C===void 0)return w;let E=w.find(T=>T.id===C);return E?(E.items.push(z),w):(E={id:C,name:C,items:[z]},[...w,E])},[]);return y.sort($o(w=>a.getComparableValue({...a,valuePath:a.groupOn},w.items[0]),s)),!l||o?y:y.filter(w=>Array.isArray(w.items)).map(w=>(w.items.sort($o(z=>l.getComparableValue({...l,valuePath:l.sortOn},z),c)),w))}return v},[v,a,s,l,c,o]),x=M(()=>{let y=0,w=0;const z=[];return g.forEach(C=>{if(Array.isArray(C.items)){To(C,w++),C.items.forEach(E=>{To(E,y++),z.push(E)});return}return To(C,y++),z.push(C)},[]),z},[g]);return $(()=>{h(y=>Object.values(y).some(z=>z[Qi]!=null)?Object.fromEntries(Object.entries(y).map(([z,C])=>C[Qi]==null?[z,C]:d([z,C[Qi]]))):y)},[d]),{processedItems:g,visibleData:x,filters:p,filterFunctions:b,setFilterState:m}},Gb=t=>{const e=n=>{const o=t.data.indexOf(n);if(o<0)return null;const r=t.data.splice(o,1);if(t.data=t.data.slice(),Array.isArray(r)&&r.length>0)return r[0]},i=(n,o)=>{t.data.splice(n,1,o),t.data=t.data.slice()};return{removeItem:e,removeItems(n){const o=[];for(let r=n.length-1;r>=0;r-=1){const a=t.removeItem(n[r]);a!=null&&o.push(a)}return o},replaceItemAtIndex:i,replaceItem(n,o){const r=t.data.indexOf(n);if(r>-1)return i(r,o)},selectItem(n){t.shadowRoot.querySelector("#groupedList").select(n)},selectAll(){t.shadowRoot.querySelector("#groupedList").selectAll()},deselectAll(){t.shadowRoot.querySelector("#groupedList").deselectAll()},deselectItem(n){t.shadowRoot.querySelector("#groupedList").deselect(n)},isItemSelected(n){return t.shadowRoot.querySelector("#groupedList").isItemSelected(n)}}},Yb=({host:t,visibleData:e,filters:i,...n})=>{const{setFilterState:o}=n,r=M(()=>Gb(t),[]);wt(n,Object.values(n)),wt(r,Object.values(r)),$(()=>{const s=l=>o(l.detail.name,c=>({...c,...l.detail.state}));return t.addEventListener("legacy-filter-changed",s),()=>t.removeEventListener("legacy-filter-changed",s)},[]),Pe("visibleData",e),Pe("sortedFilteredGroupedItems",n.sortedFilteredGroupedItems),Pe("selectedItems",n.selectedItems),Pe("sortOn",n.sortOn),Pe("descending",n.descending),Pe("isMini",n.isMini);const a=M(()=>Object.fromEntries(Object.entries(i).filter(([,{filter:s}])=>s!==void 0).map(([s,{filter:l}])=>[s,l])),[i]);Pe("filters",a,Object.values(a))},Jb=t=>{const{hashParam:e,settingsId:i,data:n,resizeSpeedFactor:o,noLocal:r,noLocalSort:a=r,noLocalFilter:s=r,error:l,rowPartFn:c}=t,u=Cb({settingsId:i,host:t}),{settings:d,setSettings:p,columns:h,resetRef:m}=u,f=D0(h,e,d,p,m),{processedItems:b,visibleData:v,filters:g,setFilterState:x,filterFunctions:y}=Wb({data:n,columns:h,hashParam:e,sortAndGroupOptions:f,noLocalSort:a,noLocalFilter:s}),{isMini:w,collapsedColumns:z,miniColumns:C}=Nb({host:t,columns:h,settings:d,setSettings:p,resizeSpeedFactor:o,sortAndGroupOptions:f}),E=n&&Array.isArray(n)&&n.length>0,[T,D]=J([]);return Yb({host:t,visibleData:v,sortedFilteredGroupedItems:b,columns:h,filters:g,setFilterState:x,selectedItems:T,isMini:w,...f}),{header:Vb({host:t,selectedItems:T,sortAndGroupOptions:f,dataIsValid:E,data:n,columns:h,filters:g,collapsedColumns:z,settings:d,filterFunctions:y,settingS:u,setFilterState:x,hideSelectAll:t.hideSelectAll===!0}),list:jb({host:t,error:l,dataIsValid:E,processedItems:b,setSelectedItems:D,columns:h,collapsedColumns:z,miniColumns:C,sortAndGroupOptions:f,rowPartFn:c}),footer:Fb({host:t,selectedItems:T,columns:h})}};customElements.define("cosmoz-grouped-list-row",class extends HTMLElement{get item(){return this._item}set item(e){this._item=e,this._render()}get index(){return this._index}set index(e){this._index=e,this._render()}get renderFn(){return this._renderFn}set renderFn(e){this._renderFn=e,this._render()}_render(){this._item==null||this._index==null||this._renderFn==null||ln(this._renderFn(this._item,this._index),this)}});const Xb={group:Symbol("group")},ao=(t,e)=>(e.has(t)||e.set(t,{}),e.get(t)),Zb=(t,e)=>!!ao(t,e).expanded,Qb=(t,e)=>!!ao(t,e).folded,sr=t=>t?t.items instanceof Array:!1,ev=t=>{if(!Array.isArray(t)||t.length===0)return;const e=Array.isArray(t[0].items);if(!t.every(n=>Array.isArray(n.items)===e))throw new Error("Data must be homogeneous.")},tv=(t,e,i)=>Array.isArray(t)?(ev(t),t.reduce((o,r)=>r.items?r.items.length?ao(r,i).folded?o.concat(r):o.concat(r,r.items.map(a=>Object.assign(a,{[Xb.group]:r}))):e?o.concat(r):o:o.concat(r),[])):void 0,iv=(t,...e)=>typeof t=="function"?t(...e):t,nv=(t,e)=>t===e,ov=()=>{const[t,e]=J(()=>[new WeakMap]);return{setItemState:S((n,o)=>e(([r])=>{const a=ao(n,r);return Object.assign(a,iv(o,a)),[r]}),[]),state:t[0],signal:t}},rv=()=>{const{setItemState:t,state:e,signal:i}=ov(),n=S((r,a)=>{sr(r)&&t(r,s=>({folded:a!==void 0?a:!s.folded}))},[]),o=S((r,a)=>{sr(r)||t(r,s=>({expanded:a!==void 0?!a:!s.expanded}))},[]);return{state:e,signal:i,toggleFold:n,toggleCollapse:o}},av=({initial:t,compareItemsFn:e,data:i,flatData:n})=>{const[o,r]=J(t),[a,s]=J(),l=S(g=>o.includes(g),[o]),c=S(g=>g?.items?.every(l),[l]),u=S(g=>l(g)||c(g),[l,c]),d=S(g=>{const x=g.items??[g];r(y=>[...y,...x.filter(w=>!y.includes(w))]),s(g)},[]),p=S(g=>{const x=g.items??[g];r(y=>y.filter(w=>!x.includes(w))),s(g)},[]),h=S(g=>{r(g.items?.slice()||[g]),s(g)},[]),m=S(()=>{r(i.flatMap(g=>g.items||g)),s(void 0)},[i]),f=S(()=>{r([]),s(void 0)},[]),b=S((g,x=!u(g))=>x?d(g):p(g),[u]),v=S((g,x)=>{const y=a?n.findIndex(C=>e(C,a)):-1;if(y<0)return b(g,x);const[w,z]=[y,n.indexOf(g)].sort((C,E)=>C-E);n.slice(w,z+1).forEach((C,E,T)=>{E>0&&E<T.length-1&&sr(C)||b(C,x)}),s(g)},[n,e,b]);return $(()=>r(g=>g.length>0?n.filter(x=>g.find(y=>e(x,y))):g),[n]),{selectedItems:o,isItemSelected:l,isGroupSelected:c,isSelected:u,select:d,deselect:p,selectOnly:h,selectAll:m,deselectAll:f,toggleSelect:b,toggleSelectTo:v}},sv={host:{position:"relative",display:"flex",flexDirection:"column"}},lv=t=>{const{data:e,renderItem:i,renderGroup:n,displayEmptyGroups:o,compareItemsFn:r=nv}=t,{toggleFold:a,toggleCollapse:s,state:l,signal:c}=rv(),u=M(()=>tv(e,o,l),[e,o,c]),{selectedItems:d,isItemSelected:p,isGroupSelected:h,isSelected:m,select:f,deselect:b,selectOnly:v,selectAll:g,deselectAll:x,toggleSelect:y,toggleSelectTo:w}=av({initial:[],compareItemsFn:r,data:e,flatData:u}),z=S((E,T)=>Array.isArray(E.items)?n(E,T,{selected:h(E,d),folded:Qb(E,l),toggleSelect:D=>y(E,typeof D=="boolean"?D:void 0),toggleFold:()=>a(E)}):i(E,T,{selected:d.includes(E),expanded:Zb(E,l),toggleSelect:D=>y(E,typeof D=="boolean"?D:void 0),toggleCollapse:()=>s(E)}),[i,n,d,y,c]);ui(()=>Object.assign(t.style,sv.host),[]),Pe("selectedItems",d);const C={toggleFold:a,toggleCollapse:s,isItemSelected:p,isGroupSelected:h,isSelected:m,select:f,deselect:b,selectOnly:v,selectAll:g,deselectAll:x,toggleSelect:y,toggleSelectTo:w};return wt(C,Object.values(C)),{renderRow:z,flatData:u}},cv=({renderRow:t,flatData:e})=>Qc({items:e,renderItem:(i,n)=>_`<cosmoz-grouped-list-row
				.item=${i}
				.index=${n}
				.renderFn=${t}
			></cosmoz-grouped-list-row>`}),uv=t=>cv(lv(t));customElements.define("cosmoz-grouped-list",V(uv,{useShadowDOM:!1}));const dv=t=>window.ShadyCSS?.ApplyShim?.transformCssText?.(t)||t,pv=t=>{const{header:e,list:i,footer:n}=Jb(t);return _`
		<style>
			${yr([],()=>dv(Y0))}
		</style>

		<div class="mainContainer">
			${ob(e)}
			<div class="tableContent" id="tableContent">
				${sb(e,i)}
			</div>
			${nb(n)}
		</div>

		<div id="columns">
			<slot id="columnsSlot"></slot>
		</div>
	`};customElements.define("cosmoz-omnitable",class extends V(pv,{observedAttributes:["hash-param","sort-on","group-on","descending","group-on-descending","hide-select-all","settings-id","no-local","no-local-sort","no-local-filter","loading","mini-breakpoint"]}){connectedCallback(){super.connectedCallback(),Fe(this,"selectedItems",[]),Fe(this,"visibleData",[]),Fe(this,"sortedFilteredGroupedItems",[])}});const Hn=`
	<slot name="actions" slot="actions"></slot>
`;_(Object.assign([Hn],{raw:[Hn]}));U(Object.assign([Hn],{raw:[Hn]}));const hv=JSON.parse('[{"_id":"59a7035c3c3f3854a788085c","index":0,"guid":"f3f7f587-575a-4339-8af6-09a46b75d4c8","isActive":true,"balance":"$1,749.46","picture":"http://placehold.it/32x32","age":20,"eyeColor":"brown","name":{"first":"Linda","last":"Rios"},"company":"EXOTERIC","email":"linda.rios@exoteric.io","phone":"+1 (930) 590-3443","address":"357 Beaver Street, Sims, Nebraska, 5471","about":"Esse aliquip mollit amet veniam incididunt minim id. Aliqua enim id aliquip sunt anim. Cupidatat sint enim Lorem velit pariatur ut. Excepteur proident cillum mollit sint incididunt. Consectetur commodo exercitation enim quis sunt ad. Deserunt consectetur commodo laborum exercitation occaecat sunt est eu enim minim mollit adipisicing laboris. Cillum labore ex sit commodo.","registered":"Tuesday, September 2, 2014 8:17 PM","latitude":"-44.454422","longitude":"2.933608","tags":["exercitation","ad","occaecat","exercitation","nulla"],"favoriteFruit":"strawberry"},{"_id":"59a7035cfd448c2124e2d2e1","index":1,"guid":"592b55b6-9cf2-4977-881d-328d332e0c28","isActive":true,"balance":"$3,685.52","picture":"http://placehold.it/32x32","age":34,"eyeColor":"blue","name":{"first":"Shepard","last":"Sykes"},"company":"COMSTAR","email":"shepard.sykes@comstar.biz","phone":"+1 (902) 596-2183","address":"561 Emmons Avenue, Freelandville, South Carolina, 263","about":"Incididunt consequat mollit laborum adipisicing. Veniam occaecat pariatur aliqua nisi adipisicing. Dolor minim cupidatat cupidatat ad officia irure consectetur consectetur nostrud elit laboris enim aliquip est. Enim sunt eu veniam et incididunt dolore et anim laboris cupidatat minim veniam culpa. Laborum mollit nulla aute proident velit sint officia nisi ad amet Lorem in commodo ipsum. Enim ex deserunt ullamco ex anim velit officia culpa ut. Officia consectetur est ipsum ex do fugiat enim nulla.","registered":"Wednesday, March 29, 2017 2:43 PM","latitude":"4.738078","longitude":"78.425259","tags":["commodo","fugiat","veniam","do","ullamco"],"favoriteFruit":"apple"},{"_id":"59a7035c2c3fdc2132b75ce1","index":2,"guid":"9e5a4bc8-cda3-40e4-a7cc-45d60d4b9298","isActive":false,"balance":"$1,111.57","picture":"http://placehold.it/32x32","age":32,"eyeColor":"green","name":{"first":"Dean","last":"Giles"},"company":"PANZENT","email":"dean.giles@panzent.ca","phone":"+1 (987) 442-3557","address":"522 Meadow Street, Chase, Texas, 8590","about":"Ut amet sint est eiusmod deserunt reprehenderit aliquip laborum quis anim qui commodo do anim. Dolor anim ullamco mollit nulla adipisicing incididunt. Culpa laboris voluptate adipisicing adipisicing. Culpa pariatur exercitation ea nisi Lorem quis cillum dolore magna velit dolore aliqua aliqua. Dolore ea sint ex proident consectetur do ullamco elit nostrud nostrud. Nulla aliquip consectetur officia quis minim minim laborum deserunt.","registered":"Wednesday, December 10, 2014 6:10 PM","latitude":"-7.970468","longitude":"-27.062504","tags":["sint","eiusmod","magna","non","consectetur"],"favoriteFruit":"strawberry"},{"_id":"59a7035c755454cd6d25074b","index":3,"guid":"e586cb29-3d23-4f08-b287-1b2907a2df03","isActive":false,"balance":"$1,060.21","picture":"http://placehold.it/32x32","age":34,"eyeColor":"brown","name":{"first":"Celina","last":"French"},"company":"NAMEGEN","email":"celina.french@namegen.name","phone":"+1 (818) 435-3328","address":"499 Matthews Court, Dante, Florida, 9119","about":"Reprehenderit est pariatur dolore culpa amet irure occaecat quis tempor consectetur duis non eiusmod. Et ut quis enim occaecat eu duis anim magna magna amet commodo ut est ullamco. Ex ex ex enim et fugiat deserunt enim. Veniam pariatur est ullamco cupidatat. Esse magna veniam sunt consequat excepteur ad dolor qui do eiusmod. Sit mollit consequat cupidatat deserunt occaecat. Esse ut est minim ut occaecat consequat irure irure adipisicing culpa minim deserunt aliquip.","registered":"Wednesday, February 5, 2014 9:30 PM","latitude":"-56.117732","longitude":"28.272471","tags":["est","dolore","tempor","sint","reprehenderit"],"favoriteFruit":"apple"},{"_id":"59a7035cd142c5382245806d","index":4,"guid":"d349763f-a096-4000-9729-2aa56f48930a","isActive":true,"balance":"$1,941.06","picture":"http://placehold.it/32x32","age":20,"eyeColor":"green","name":{"first":"Jordan","last":"Hays"},"company":"CODACT","email":"jordan.hays@codact.com","phone":"+1 (869) 519-3768","address":"193 Harman Street, Osmond, Louisiana, 2271","about":"Proident aliqua ut ea ipsum. Velit ipsum reprehenderit irure occaecat ut consequat. Officia esse non eiusmod qui.","registered":"Monday, April 28, 2014 1:28 AM","latitude":"-89.041531","longitude":"-160.159812","tags":["quis","deserunt","do","voluptate","occaecat"],"favoriteFruit":"apple"},{"_id":"59a7035c8fff5d3333b4fe39","index":5,"guid":"3d14ae73-ff24-40fe-9053-e7cb2b8a9c15","isActive":false,"balance":"$3,108.51","picture":"http://placehold.it/32x32","age":20,"eyeColor":"green","name":{"first":"Rosa","last":"Roberts"},"company":"EXOSPEED","email":"rosa.roberts@exospeed.co.uk","phone":"+1 (998) 497-3272","address":"769 Barwell Terrace, Orin, New Mexico, 8896","about":"Et aliqua fugiat aliqua qui anim dolore ex nostrud aute cupidatat esse et sit. Labore fugiat aute nostrud laborum eiusmod esse occaecat. Voluptate qui nostrud reprehenderit elit ex commodo ut dolore adipisicing voluptate. Ea adipisicing elit Lorem dolor sint nostrud laborum sunt velit dolor occaecat incididunt. Fugiat et velit et laborum laborum est nulla id est eiusmod et tempor ad officia. Aliquip do voluptate aliquip dolor reprehenderit do qui incididunt deserunt ex dolore. Nulla dolore quis velit esse non nulla minim eiusmod voluptate occaecat labore.","registered":"Thursday, October 16, 2014 6:38 AM","latitude":"37.51662","longitude":"-174.567784","tags":["mollit","dolor","dolore","ad","nisi"],"favoriteFruit":"banana"},{"_id":"59a7035c8de046ebba5f59ee","index":6,"guid":"86adfcea-5212-41f1-a481-50fd039731ad","isActive":false,"balance":"$1,638.80","picture":"http://placehold.it/32x32","age":37,"eyeColor":"brown","name":{"first":"Twila","last":"Richard"},"company":"ANACHO","email":"twila.richard@anacho.info","phone":"+1 (804) 546-2248","address":"431 Paerdegat Avenue, Tioga, Northern Mariana Islands, 9395","about":"Excepteur ipsum nostrud occaecat quis. Excepteur mollit aute sunt sunt. Minim consequat magna ut quis officia sit ut magna excepteur dolor aliquip ad. Velit aliquip eiusmod qui proident dolore voluptate consectetur minim aliquip.","registered":"Monday, October 13, 2014 2:00 PM","latitude":"47.176743","longitude":"49.680616","tags":["et","enim","quis","est","eu"],"favoriteFruit":"banana"},{"_id":"59a7035c38e8215d200313f4","index":7,"guid":"3658b420-9457-45df-95f5-d7c67b20b179","isActive":false,"balance":"$1,077.13","picture":"http://placehold.it/32x32","age":31,"eyeColor":"blue","name":{"first":"Elsie","last":"Dyer"},"company":"INQUALA","email":"elsie.dyer@inquala.org","phone":"+1 (874) 419-3985","address":"800 McKibbin Street, Dola, Utah, 3188","about":"Labore veniam ea velit proident amet exercitation quis ullamco. Labore ad aute aliquip veniam deserunt fugiat. Tempor tempor qui eiusmod sunt aliqua.","registered":"Sunday, October 11, 2015 2:29 PM","latitude":"-25.364163","longitude":"70.888205","tags":["ipsum","est","adipisicing","occaecat","esse"],"favoriteFruit":"apple"},{"_id":"59a7035c76c334a6b24e7006","index":8,"guid":"844bad84-5eaa-4f19-ae1c-9f0457ddf2a7","isActive":false,"balance":"$1,450.12","picture":"http://placehold.it/32x32","age":35,"eyeColor":"green","name":{"first":"Chrystal","last":"Vega"},"company":"TALKOLA","email":"chrystal.vega@talkola.me","phone":"+1 (840) 479-2105","address":"294 Greenwood Avenue, Jackpot, Indiana, 5299","about":"Ipsum irure non fugiat do sit aute eiusmod laboris. Laboris duis anim occaecat commodo id elit consequat culpa ex qui. Aute ea Lorem proident commodo minim. Deserunt non occaecat laboris velit sit. Elit nisi amet consectetur aliqua sint quis veniam consectetur cupidatat incididunt sunt. Do aute irure irure nisi laborum officia do ad ex veniam aliquip enim voluptate nisi.","registered":"Sunday, May 1, 2016 4:47 AM","latitude":"65.873664","longitude":"75.550181","tags":["eu","tempor","est","amet","non"],"favoriteFruit":"strawberry"},{"_id":"59a7035cd4a9a2a1edc42ab3","index":9,"guid":"858e9092-389a-4052-9bc4-57b9a694dd68","isActive":false,"balance":"$1,861.41","picture":"http://placehold.it/32x32","age":33,"eyeColor":"brown","name":{"first":"Ellison","last":"Waters"},"company":"REVERSUS","email":"ellison.waters@reversus.us","phone":"+1 (862) 537-3521","address":"586 Lewis Place, Manitou, Tennessee, 7985","about":"Pariatur voluptate culpa velit ullamco labore pariatur magna sit aliqua. Elit deserunt pariatur minim dolor eu ex do qui. Culpa minim amet dolor mollit voluptate minim. Nostrud eiusmod cupidatat fugiat do laboris duis nisi et officia. Lorem labore nulla voluptate ex eu excepteur nostrud qui proident nulla dolor ea in. Minim ipsum id Lorem minim enim. Ad aliquip ex Lorem in excepteur excepteur eiusmod ad.","registered":"Wednesday, June 14, 2017 6:20 AM","latitude":"-34.20548","longitude":"-75.451382","tags":["mollit","labore","quis","aliquip","aliqua"],"favoriteFruit":"apple"},{"_id":"59a7035c109f497ba9ac56b9","index":10,"guid":"1cfba083-eeef-453b-b9fc-b7078a1464be","isActive":true,"balance":"$2,000.50","picture":"http://placehold.it/32x32","age":22,"eyeColor":"green","name":{"first":"Summer","last":"Stevens"},"company":"ISONUS","email":"summer.stevens@isonus.tv","phone":"+1 (872) 424-2890","address":"894 Nichols Avenue, Summertown, Mississippi, 4356","about":"Consequat mollit eiusmod non reprehenderit Lorem esse est sit dolore laborum amet do. Tempor excepteur do esse irure sint elit tempor amet proident Lorem minim. Quis id mollit id ad labore minim sunt ipsum aliqua aliquip et cupidatat id. Deserunt commodo laborum exercitation cupidatat laborum laboris nostrud labore eu. Excepteur ex duis esse Lorem anim commodo irure reprehenderit excepteur laboris Lorem anim. Pariatur labore labore officia voluptate officia ex amet nostrud exercitation consequat tempor fugiat. Ea reprehenderit occaecat culpa quis reprehenderit eiusmod officia aliquip aliqua nisi.","registered":"Thursday, June 22, 2017 10:35 PM","latitude":"89.231184","longitude":"-110.234136","tags":["enim","cillum","labore","aliqua","aute"],"favoriteFruit":"apple"},{"_id":"59a7035c51f4cce963a70e0b","index":11,"guid":"9517b4f4-60d6-4b23-82c7-013e1a8f3d89","isActive":false,"balance":"$1,744.33","picture":"http://placehold.it/32x32","age":36,"eyeColor":"brown","name":{"first":"Roach","last":"Mccoy"},"company":"RUBADUB","email":"roach.mccoy@rubadub.net","phone":"+1 (820) 452-3141","address":"600 Centre Street, Tooleville, Ohio, 7044","about":"Amet incididunt duis nisi mollit amet consectetur. Sunt officia veniam incididunt dolore minim deserunt occaecat nostrud est. Aliqua deserunt anim Lorem ipsum elit in ea enim est magna velit. Consectetur eiusmod in cillum culpa.","registered":"Monday, October 3, 2016 6:46 AM","latitude":"81.385787","longitude":"14.146369","tags":["nulla","et","ullamco","non","cupidatat"],"favoriteFruit":"apple"},{"_id":"59a7035c93884daa0668d951","index":12,"guid":"2fbe934b-bdb6-4b2d-957a-33cc7f094e48","isActive":true,"balance":"$2,992.96","picture":"http://placehold.it/32x32","age":20,"eyeColor":"blue","name":{"first":"Rachel","last":"Perry"},"company":"INTERLOO","email":"rachel.perry@interloo.io","phone":"+1 (959) 502-3649","address":"640 Hausman Street, Walland, New York, 9676","about":"Veniam eu veniam magna Lorem pariatur sunt minim reprehenderit nulla proident. Eiusmod ipsum qui eu amet qui officia sunt. Elit et esse sit elit cillum eiusmod.","registered":"Sunday, July 30, 2017 4:32 PM","latitude":"-10.871728","longitude":"147.135976","tags":["ullamco","enim","voluptate","anim","exercitation"],"favoriteFruit":"strawberry"},{"_id":"59a7035c67f269f9c70b9b97","index":13,"guid":"4bd0c91a-850c-4754-90df-be98cedd6d32","isActive":true,"balance":"$1,851.74","picture":"http://placehold.it/32x32","age":40,"eyeColor":"green","name":{"first":"Sims","last":"Rogers"},"company":"APEXTRI","email":"sims.rogers@apextri.biz","phone":"+1 (948) 503-2531","address":"312 Mill Avenue, Movico, Maryland, 3515","about":"Excepteur sit est consectetur voluptate sit veniam occaecat non. Laboris quis amet officia sint minim. Eiusmod culpa magna in officia ipsum irure incididunt. Esse et culpa et laboris ex. Nulla sunt ex proident nisi nulla non enim eu. Excepteur esse culpa consectetur incididunt elit.","registered":"Tuesday, November 4, 2014 9:03 PM","latitude":"-33.25626","longitude":"-76.988402","tags":["laboris","quis","officia","nostrud","voluptate"],"favoriteFruit":"banana"},{"_id":"59a7035cf30ca465187c684e","index":14,"guid":"fd7ac270-5bd4-4d37-aebd-9a862d7c5758","isActive":false,"balance":"$2,720.13","picture":"http://placehold.it/32x32","age":22,"eyeColor":"brown","name":{"first":"Velasquez","last":"Oneil"},"company":"POLARIUM","email":"velasquez.oneil@polarium.ca","phone":"+1 (923) 469-3429","address":"900 Ash Street, Stonybrook, Montana, 3865","about":"Non quis eiusmod eiusmod culpa irure culpa Lorem est nulla Lorem dolore aliqua nostrud. Quis sunt amet qui id in amet in ad consectetur id. Mollit exercitation eiusmod ea sit ea id et sint cupidatat non ipsum excepteur. Magna ullamco ipsum tempor dolore.","registered":"Monday, March 16, 2015 12:39 PM","latitude":"37.362897","longitude":"-24.30902","tags":["Lorem","ipsum","consectetur","reprehenderit","ad"],"favoriteFruit":"apple"},{"_id":"59a7035cdebe34c7394c6efe","index":15,"guid":"ff8ebe48-a9ba-484f-932c-5d3c586b447e","isActive":true,"balance":"$1,622.24","picture":"http://placehold.it/32x32","age":25,"eyeColor":"blue","name":{"first":"Mckay","last":"Wiggins"},"company":"OVERFORK","email":"mckay.wiggins@overfork.name","phone":"+1 (960) 587-3564","address":"275 Ferry Place, Boykin, New Jersey, 3918","about":"Consequat nisi qui excepteur eiusmod consequat adipisicing laborum. Irure officia qui nisi nisi ut elit nostrud sit consequat consequat enim qui ullamco sit. Laborum cupidatat aute nostrud aute sit ex ex laborum.","registered":"Saturday, June 28, 2014 12:32 PM","latitude":"-3.221893","longitude":"-108.718689","tags":["consectetur","proident","ut","mollit","reprehenderit"],"favoriteFruit":"banana"},{"_id":"59a7035ca8c295ab38f923d8","index":16,"guid":"8be8d88b-62ef-4845-b37b-714e3dbc7044","isActive":true,"balance":"$1,747.26","picture":"http://placehold.it/32x32","age":36,"eyeColor":"brown","name":{"first":"Fox","last":"Dean"},"company":"SULTRAX","email":"fox.dean@sultrax.com","phone":"+1 (903) 587-2021","address":"181 Linden Street, Swartzville, Kansas, 1953","about":"Eiusmod sint ex deserunt aliqua deserunt cillum eu esse commodo et ad consequat adipisicing. Sint cupidatat qui do excepteur fugiat deserunt veniam est eiusmod velit. Laborum ad ex minim ea aliqua nisi nulla eu adipisicing. Voluptate qui incididunt pariatur labore et eiusmod tempor. Irure in commodo ex anim quis ex. Ex aliqua id in Lorem. Pariatur ullamco adipisicing et tempor ut proident irure voluptate dolore Lorem irure velit velit dolor.","registered":"Thursday, December 25, 2014 1:51 PM","latitude":"70.092261","longitude":"137.024184","tags":["nulla","dolor","quis","veniam","ex"],"favoriteFruit":"apple"},{"_id":"59a7035cbb6cff56beb77712","index":17,"guid":"fa0a5d41-ea46-4848-8811-1c711c8a09da","isActive":true,"balance":"$3,736.32","picture":"http://placehold.it/32x32","age":38,"eyeColor":"blue","name":{"first":"Savage","last":"Herring"},"company":"LIQUICOM","email":"savage.herring@liquicom.co.uk","phone":"+1 (935) 408-3913","address":"513 Elliott Place, Katonah, Delaware, 9510","about":"Laboris eu ullamco dolore cupidatat consectetur consequat nostrud. Veniam laborum nulla aute enim aute ut velit. Et ullamco dolore officia ex do. Lorem elit officia commodo pariatur cillum sit officia dolore.","registered":"Thursday, February 5, 2015 9:34 PM","latitude":"71.095484","longitude":"158.028683","tags":["velit","quis","magna","voluptate","ullamco"],"favoriteFruit":"banana"},{"_id":"59a7035c2621173c3db49132","index":18,"guid":"34ed9369-db1a-4531-b3a8-a26ab5818a1e","isActive":true,"balance":"$3,559.17","picture":"http://placehold.it/32x32","age":39,"eyeColor":"green","name":{"first":"Moon","last":"Conway"},"company":"HALAP","email":"moon.conway@halap.info","phone":"+1 (954) 475-2559","address":"242 Dupont Street, Blanco, Connecticut, 6962","about":"Esse adipisicing quis cupidatat mollit velit velit cillum. Nostrud cupidatat eu in commodo proident. Nisi veniam magna sint culpa minim commodo do aliqua enim minim consequat ad amet. Mollit amet culpa commodo ea reprehenderit.","registered":"Sunday, April 27, 2014 4:47 PM","latitude":"89.076813","longitude":"-158.156226","tags":["sit","adipisicing","Lorem","cillum","non"],"favoriteFruit":"apple"},{"_id":"59a7035cae04cd3b0b1c4ebe","index":19,"guid":"3134798e-4154-436d-a2df-9c6d622bd570","isActive":false,"balance":"$3,017.21","picture":"http://placehold.it/32x32","age":33,"eyeColor":"green","name":{"first":"Steele","last":"Gill"},"company":"TASMANIA","email":"steele.gill@tasmania.org","phone":"+1 (870) 424-2065","address":"702 High Street, Thomasville, Washington, 8973","about":"Voluptate pariatur laboris laborum dolore anim. Sit exercitation sint nisi qui sunt amet laborum aliqua nulla est ut. Cupidatat sunt fugiat anim consectetur commodo elit consequat.","registered":"Monday, August 24, 2015 9:41 AM","latitude":"-73.125779","longitude":"158.426667","tags":["proident","reprehenderit","elit","dolore","voluptate"],"favoriteFruit":"apple"},{"_id":"59a7035c3ff747576abe0ce4","index":20,"guid":"53462778-e892-41e6-9661-bd3837cf4fdb","isActive":true,"balance":"$1,339.97","picture":"http://placehold.it/32x32","age":36,"eyeColor":"green","name":{"first":"Wiley","last":"Jimenez"},"company":"ENAUT","email":"wiley.jimenez@enaut.me","phone":"+1 (800) 495-2091","address":"730 Gunnison Court, Bennett, Georgia, 3983","about":"Mollit eu dolor dolore incididunt ex nisi duis do magna in. Dolore et eiusmod velit sint consequat officia ad veniam qui cupidatat. Nulla dolor sit ipsum do. Esse dolor commodo qui ad dolore mollit dolore nulla nostrud culpa consectetur elit voluptate. Cupidatat irure adipisicing et enim officia. Aliquip velit id cupidatat non cupidatat reprehenderit enim irure incididunt commodo ipsum cupidatat.","registered":"Tuesday, March 18, 2014 7:58 PM","latitude":"-41.676046","longitude":"51.435099","tags":["cupidatat","reprehenderit","exercitation","occaecat","commodo"],"favoriteFruit":"banana"},{"_id":"59a7035c7ab804d6508045ad","index":21,"guid":"c3b56fa4-1b35-4142-8687-18eacd39f3ff","isActive":false,"balance":"$1,661.76","picture":"http://placehold.it/32x32","age":35,"eyeColor":"green","name":{"first":"Vazquez","last":"Goodman"},"company":"ROUGHIES","email":"vazquez.goodman@roughies.us","phone":"+1 (982) 410-2800","address":"105 Green Street, Cutter, Rhode Island, 6634","about":"Lorem exercitation quis et consectetur id mollit labore ea enim nulla. Quis ea aliqua irure dolore ut cupidatat dolore labore quis mollit culpa culpa quis qui. Fugiat aliqua non ex deserunt exercitation ut cillum aliquip ipsum ex. Consequat do nostrud officia tempor elit tempor amet laborum non. Nulla in velit exercitation veniam in fugiat cupidatat.","registered":"Tuesday, July 4, 2017 12:38 AM","latitude":"-42.644916","longitude":"-11.217395","tags":["ut","minim","ut","aliqua","veniam"],"favoriteFruit":"strawberry"},{"_id":"59a7035c526b5608e65cf21b","index":22,"guid":"14fe6b2e-b139-4989-a6f6-a17ecd830c28","isActive":true,"balance":"$2,516.68","picture":"http://placehold.it/32x32","age":22,"eyeColor":"green","name":{"first":"Castaneda","last":"Tanner"},"company":"QUAREX","email":"castaneda.tanner@quarex.tv","phone":"+1 (940) 527-3149","address":"654 Stockholm Street, Cazadero, Oklahoma, 3236","about":"Aute commodo ex ex qui qui amet. Sunt qui irure mollit exercitation culpa aliquip eiusmod dolor mollit laborum et irure exercitation aute. Qui ad ullamco anim laborum mollit et est incididunt sit anim ullamco dolor reprehenderit. Lorem non ea pariatur non dolor.","registered":"Tuesday, October 14, 2014 7:55 AM","latitude":"-66.185306","longitude":"-13.503575","tags":["tempor","pariatur","proident","mollit","consectetur"],"favoriteFruit":"banana"},{"_id":"59a7035c8316916dc8650037","index":23,"guid":"4e2338f8-827b-4772-bfda-7b3e0f3172e8","isActive":false,"balance":"$3,630.85","picture":"http://placehold.it/32x32","age":26,"eyeColor":"brown","name":{"first":"Kirby","last":"Holt"},"company":"WARETEL","email":"kirby.holt@waretel.net","phone":"+1 (857) 494-2330","address":"649 Dinsmore Place, Day, North Carolina, 9524","about":"Ex consectetur laborum aliquip est duis in adipisicing aliqua minim. Exercitation dolor quis voluptate quis eu labore esse. Tempor et cupidatat occaecat magna duis non et ad amet non dolore non. Sunt qui id ullamco reprehenderit qui ex nisi elit ut cupidatat magna enim fugiat officia. Et enim excepteur qui est. Quis ut enim eiusmod consequat ipsum anim occaecat.","registered":"Sunday, March 26, 2017 1:35 PM","latitude":"37.646166","longitude":"-69.921208","tags":["irure","deserunt","laborum","do","laboris"],"favoriteFruit":"strawberry"},{"_id":"59a7035c615510a6f629ae78","index":24,"guid":"1c1fb554-5a33-487f-9790-893540af3969","isActive":true,"balance":"$2,016.60","picture":"http://placehold.it/32x32","age":20,"eyeColor":"blue","name":{"first":"Arline","last":"Norton"},"company":"REPETWIRE","email":"arline.norton@repetwire.io","phone":"+1 (816) 524-2522","address":"552 Dewitt Avenue, Edgewater, Maine, 203","about":"Officia tempor magna dolore ex. Non mollit elit proident sint veniam irure qui laboris laboris dolore reprehenderit. Nisi fugiat nulla pariatur veniam esse id dolor est deserunt commodo.","registered":"Saturday, February 11, 2017 7:47 AM","latitude":"88.125487","longitude":"108.126647","tags":["sint","velit","quis","ut","sint"],"favoriteFruit":"banana"},{"_id":"59a7035ccf388074ba52a49a","index":25,"guid":"00f81875-bcbf-482e-897b-b3819259ec10","isActive":false,"balance":"$2,846.52","picture":"http://placehold.it/32x32","age":39,"eyeColor":"green","name":{"first":"Chan","last":"Hansen"},"company":"MICRONAUT","email":"chan.hansen@micronaut.biz","phone":"+1 (833) 595-2815","address":"525 Rutland Road, Muse, Pennsylvania, 9512","about":"Cupidatat elit laboris elit duis duis duis eiusmod veniam id aliqua ea qui sunt. Ex ea ullamco do sint. Anim aliquip incididunt voluptate pariatur amet proident cillum. Aliqua ad fugiat est ea. Eu ullamco dolore elit nostrud.","registered":"Sunday, April 19, 2015 7:45 PM","latitude":"-43.064419","longitude":"50.672979","tags":["excepteur","nostrud","ea","sint","enim"],"favoriteFruit":"banana"},{"_id":"59a7035cc0324a9841c61b82","index":26,"guid":"655ddaf6-cf4b-4df9-a333-15d01bd98ffe","isActive":false,"balance":"$3,410.69","picture":"http://placehold.it/32x32","age":29,"eyeColor":"blue","name":{"first":"Aida","last":"Mueller"},"company":"GEEKOL","email":"aida.mueller@geekol.ca","phone":"+1 (907) 458-3337","address":"608 Herkimer Street, Caron, North Dakota, 1283","about":"Qui officia cupidatat nostrud est laboris nisi cupidatat veniam excepteur aute et reprehenderit ea deserunt. Deserunt anim duis non aliqua et non reprehenderit. Excepteur sunt magna fugiat incididunt esse esse eiusmod cupidatat magna elit nostrud laborum. Pariatur ullamco laborum cupidatat exercitation aliquip consectetur culpa dolore mollit eiusmod. Veniam aliquip commodo mollit sunt et aute voluptate officia aliquip. Veniam exercitation exercitation sunt proident occaecat veniam labore consectetur laborum.","registered":"Wednesday, October 7, 2015 9:39 AM","latitude":"-75.452339","longitude":"102.759886","tags":["cupidatat","esse","ex","ut","culpa"],"favoriteFruit":"apple"},{"_id":"59a7035c69bf27034fc83efb","index":27,"guid":"52d4926e-74b5-4b74-ae54-9da7808f924e","isActive":false,"balance":"$3,905.82","picture":"http://placehold.it/32x32","age":24,"eyeColor":"green","name":{"first":"Reyes","last":"Johnston"},"company":"CIRCUM","email":"reyes.johnston@circum.name","phone":"+1 (860) 459-3108","address":"319 Alabama Avenue, Stollings, Iowa, 7144","about":"Veniam et magna proident elit culpa est incididunt dolore. Et esse incididunt occaecat nostrud reprehenderit excepteur cupidatat id elit id eiusmod sint consequat. Voluptate fugiat cupidatat proident qui veniam cupidatat aliqua consequat exercitation irure id fugiat dolor. Ullamco esse et eiusmod ullamco. Consequat labore elit amet voluptate fugiat consequat aute cupidatat sunt deserunt et ad quis esse.","registered":"Saturday, August 2, 2014 10:31 AM","latitude":"-3.236452","longitude":"112.018362","tags":["eu","cupidatat","deserunt","culpa","sint"],"favoriteFruit":"apple"},{"_id":"59a7035c5466da4d8723624d","index":28,"guid":"f14cd57c-112f-4e05-be74-dcd217ffcd8d","isActive":true,"balance":"$1,541.40","picture":"http://placehold.it/32x32","age":37,"eyeColor":"green","name":{"first":"Nash","last":"Lane"},"company":"GEOFARM","email":"nash.lane@geofarm.com","phone":"+1 (925) 410-3330","address":"138 Just Court, Loomis, Marshall Islands, 360","about":"Minim aliquip ea minim nulla excepteur adipisicing. Labore magna ad minim ex eiusmod id consequat occaecat ea ea cupidatat id do consectetur. Mollit officia dolor qui eiusmod aute laboris incididunt dolore anim nulla ut excepteur aliquip est. Ipsum mollit esse elit dolor quis do laboris ad fugiat ullamco incididunt. Non non sit sunt culpa qui irure irure aliqua exercitation et incididunt. Esse amet id in fugiat.","registered":"Monday, June 26, 2017 9:25 AM","latitude":"-79.044765","longitude":"-102.699496","tags":["Lorem","voluptate","id","sit","et"],"favoriteFruit":"strawberry"},{"_id":"59a7035c0136625e4b0cf495","index":29,"guid":"209e068f-910c-4497-8e68-87b08bbff4f4","isActive":true,"balance":"$3,881.49","picture":"http://placehold.it/32x32","age":26,"eyeColor":"green","name":{"first":"Aline","last":"Dale"},"company":"ZOINAGE","email":"aline.dale@zoinage.co.uk","phone":"+1 (963) 421-3067","address":"844 Freeman Street, Cornucopia, Alaska, 8933","about":"Est aliqua ea exercitation labore est non cillum velit elit tempor est ex. Sunt sit non excepteur sit dolor quis excepteur dolore commodo deserunt consequat fugiat fugiat excepteur. Sit sunt ad officia ea deserunt fugiat Lorem elit consectetur qui. Do aliqua dolore reprehenderit ullamco elit eiusmod laboris elit velit proident amet proident quis sunt.","registered":"Sunday, November 16, 2014 5:32 PM","latitude":"-5.445644","longitude":"57.217008","tags":["sint","sit","ea","commodo","ex"],"favoriteFruit":"apple"},{"_id":"59a7035ccde7c6362570428b","index":30,"guid":"de265047-a6b8-4dca-988a-82ae04462a6a","isActive":true,"balance":"$1,630.59","picture":"http://placehold.it/32x32","age":40,"eyeColor":"blue","name":{"first":"Bates","last":"Meyer"},"company":"KIDGREASE","email":"bates.meyer@kidgrease.info","phone":"+1 (832) 599-3279","address":"140 Newport Street, Needmore, Arkansas, 2736","about":"Irure exercitation aute non laboris anim dolore velit ut enim nostrud sit. Laboris reprehenderit laboris velit in laborum id mollit do deserunt et. Adipisicing labore et non tempor est commodo labore. Sit ut veniam cupidatat adipisicing amet.","registered":"Thursday, July 17, 2014 3:58 PM","latitude":"66.724748","longitude":"-176.746077","tags":["eiusmod","exercitation","proident","aliqua","do"],"favoriteFruit":"apple"},{"_id":"59a7035ce132271d5fa94348","index":31,"guid":"e8305fec-8bf2-40f3-8015-d87610cfc7ea","isActive":false,"balance":"$2,318.75","picture":"http://placehold.it/32x32","age":28,"eyeColor":"green","name":{"first":"Stevens","last":"Snider"},"company":"BIOSPAN","email":"stevens.snider@biospan.org","phone":"+1 (811) 592-3620","address":"105 Dunham Place, Malott, Virginia, 1579","about":"Laborum labore elit amet irure qui quis labore proident velit veniam eiusmod aliquip. Ea nostrud et cupidatat Lorem qui. Minim ex sint duis officia anim sit sit et amet incididunt eu nulla.","registered":"Thursday, August 28, 2014 1:59 AM","latitude":"51.741171","longitude":"-167.91722","tags":["enim","deserunt","duis","est","eiusmod"],"favoriteFruit":"strawberry"},{"_id":"59a7035c98fce222722467df","index":32,"guid":"efae3f87-8d6a-4d84-af43-3a8e778bb3f2","isActive":false,"balance":"$2,937.56","picture":"http://placehold.it/32x32","age":31,"eyeColor":"blue","name":{"first":"Doreen","last":"Carroll"},"company":"TECHTRIX","email":"doreen.carroll@techtrix.me","phone":"+1 (847) 505-2539","address":"154 Alice Court, Marshall, Arizona, 6156","about":"Occaecat duis consectetur consectetur sint. Laboris ut esse Lorem duis labore deserunt consectetur ex sunt dolor non minim occaecat magna. Id qui magna occaecat elit consequat aliquip ex mollit magna. Tempor deserunt voluptate tempor magna pariatur ex fugiat veniam occaecat incididunt reprehenderit fugiat adipisicing. Occaecat magna voluptate proident cillum minim occaecat.","registered":"Tuesday, October 28, 2014 7:06 AM","latitude":"87.516681","longitude":"81.720297","tags":["irure","est","sint","consectetur","labore"],"favoriteFruit":"strawberry"},{"_id":"59a7035c4447df5e0d76d793","index":33,"guid":"ed9619fb-eed3-4e03-9d3f-eb0cfa247e9b","isActive":false,"balance":"$1,095.64","picture":"http://placehold.it/32x32","age":31,"eyeColor":"green","name":{"first":"Mcclain","last":"Berry"},"company":"SHEPARD","email":"mcclain.berry@shepard.us","phone":"+1 (919) 411-2370","address":"736 Aviation Road, Breinigsville, Guam, 1225","about":"Aliqua deserunt et dolor eiusmod quis consequat veniam nisi dolore laborum. Sit irure incididunt excepteur sint non. Aliqua esse culpa id cupidatat. Laboris irure eu do irure labore pariatur sunt exercitation aliquip anim commodo eu laboris aliqua. Mollit nostrud est quis nisi irure reprehenderit. Ullamco ipsum culpa esse proident do nulla nostrud do. Nisi pariatur voluptate occaecat sint veniam ex occaecat.","registered":"Friday, March 20, 2015 3:27 AM","latitude":"-54.396135","longitude":"-105.425605","tags":["anim","eiusmod","officia","eiusmod","ut"],"favoriteFruit":"strawberry"},{"_id":"59a7035c7fa79cfdce33ed47","index":34,"guid":"f9bfc8c7-9c60-49d6-a6ca-899d0abb6821","isActive":true,"balance":"$1,976.75","picture":"http://placehold.it/32x32","age":30,"eyeColor":"brown","name":{"first":"Bullock","last":"Kane"},"company":"BULLJUICE","email":"bullock.kane@bulljuice.tv","phone":"+1 (978) 466-3528","address":"407 Kensington Street, Talpa, Oregon, 9641","about":"Et duis ex sit quis sunt qui ullamco nisi. Sit Lorem deserunt do magna eiusmod ad tempor consectetur. Tempor duis ea eiusmod ea qui ad veniam aute culpa ut aute sint et nisi.","registered":"Tuesday, July 29, 2014 7:54 PM","latitude":"-50.495738","longitude":"-47.802041","tags":["velit","ad","aliqua","ut","eiusmod"],"favoriteFruit":"strawberry"},{"_id":"59a7035cded1262c1ea8cd10","index":35,"guid":"13731f59-5080-42f7-a160-0d88ad8df56e","isActive":false,"balance":"$1,623.47","picture":"http://placehold.it/32x32","age":26,"eyeColor":"green","name":{"first":"Whitfield","last":"Love"},"company":"GEEKNET","email":"whitfield.love@geeknet.net","phone":"+1 (983) 406-3585","address":"633 Gilmore Court, Haring, Wyoming, 570","about":"Adipisicing consectetur pariatur nostrud labore ea commodo sit commodo deserunt irure. Duis tempor culpa cillum voluptate. Mollit dolore dolore ullamco eu aliqua. Commodo voluptate enim commodo magna est exercitation eu dolore occaecat deserunt occaecat non. Non duis cupidatat laborum ex duis tempor velit eiusmod do qui consequat ipsum enim in.","registered":"Saturday, September 13, 2014 5:06 AM","latitude":"89.899137","longitude":"85.210926","tags":["sunt","velit","amet","aute","exercitation"],"favoriteFruit":"strawberry"},{"_id":"59a7035ca48b45cbb5592453","index":36,"guid":"410cc140-1eda-4eed-a7e4-aa6b7b6e9aa5","isActive":false,"balance":"$2,155.95","picture":"http://placehold.it/32x32","age":39,"eyeColor":"green","name":{"first":"Jeannine","last":"Higgins"},"company":"ZOGAK","email":"jeannine.higgins@zogak.io","phone":"+1 (905) 580-2033","address":"796 Wyona Street, Whitmer, Hawaii, 3220","about":"Culpa occaecat eu Lorem elit officia ullamco velit labore officia occaecat esse quis in. Aute velit laboris nostrud cillum esse. Aute ullamco id consequat anim occaecat deserunt velit eu laborum amet dolor culpa. In fugiat magna commodo ipsum ea labore amet commodo culpa adipisicing. Ullamco ut velit ut sunt tempor pariatur consequat aute.","registered":"Sunday, November 15, 2015 7:41 AM","latitude":"28.630291","longitude":"116.437262","tags":["magna","laboris","aliqua","veniam","cillum"],"favoriteFruit":"banana"},{"_id":"59a7035c19fa4081667fec10","index":37,"guid":"fc527a60-87dc-4973-b29b-ae6c6a3a02a3","isActive":true,"balance":"$1,791.22","picture":"http://placehold.it/32x32","age":27,"eyeColor":"brown","name":{"first":"Kemp","last":"Combs"},"company":"PETIGEMS","email":"kemp.combs@petigems.biz","phone":"+1 (971) 558-2694","address":"248 Milton Street, Torboy, Wisconsin, 9525","about":"Dolor culpa occaecat occaecat magna Lorem officia laborum duis reprehenderit elit dolor. Dolor nisi sit id eiusmod elit aliqua minim. Aliqua sunt duis nisi do mollit voluptate nulla enim reprehenderit. Anim incididunt nulla anim cupidatat occaecat ea nulla Lorem.","registered":"Thursday, March 16, 2017 8:02 AM","latitude":"86.949155","longitude":"-10.576148","tags":["officia","proident","reprehenderit","eiusmod","et"],"favoriteFruit":"apple"},{"_id":"59a7035c353252c0b5bb78de","index":38,"guid":"185271ff-7cb7-4273-896c-801e927d69c7","isActive":true,"balance":"$2,800.39","picture":"http://placehold.it/32x32","age":28,"eyeColor":"brown","name":{"first":"Opal","last":"Bryan"},"company":"XOGGLE","email":"opal.bryan@xoggle.ca","phone":"+1 (853) 550-3730","address":"448 Crooke Avenue, Loyalhanna, Alabama, 2883","about":"Est laborum ad duis cupidatat pariatur velit adipisicing. Commodo cillum ex eiusmod qui exercitation enim excepteur qui. Lorem dolore mollit dolore id veniam in qui reprehenderit nulla. Nisi cupidatat occaecat reprehenderit ex non elit fugiat cupidatat cupidatat esse minim aute incididunt ea. Id adipisicing ex aute est ex in. Aliquip fugiat consequat in aliquip amet.","registered":"Saturday, May 13, 2017 3:33 AM","latitude":"-7.901608","longitude":"28.712133","tags":["officia","veniam","incididunt","proident","elit"],"favoriteFruit":"banana"},{"_id":"59a7035cf1abac8eda4dc81a","index":39,"guid":"2c60d9c5-71e7-4132-b520-7a66f3c6ee80","isActive":true,"balance":"$1,144.49","picture":"http://placehold.it/32x32","age":24,"eyeColor":"green","name":{"first":"Hurley","last":"Farley"},"company":"SENSATE","email":"hurley.farley@sensate.name","phone":"+1 (825) 493-3055","address":"310 Kings Place, Matheny, Michigan, 9118","about":"Ex irure do velit amet irure qui consectetur magna qui nulla. Mollit voluptate aute voluptate anim minim. Ea nisi nostrud laboris officia consequat voluptate ullamco. Consectetur et et ullamco occaecat consequat mollit dolore. Elit aliqua ex elit sit dolor elit nostrud. Mollit in quis cupidatat dolore. Anim anim reprehenderit elit quis consectetur velit sunt culpa pariatur esse amet cupidatat.","registered":"Wednesday, February 4, 2015 4:44 PM","latitude":"-13.003628","longitude":"-53.151513","tags":["nostrud","ipsum","sit","pariatur","eu"],"favoriteFruit":"banana"},{"_id":"59a7035cab834659496f07e6","index":40,"guid":"9b314f77-2132-4d67-a2e7-e321b1425489","isActive":false,"balance":"$1,695.47","picture":"http://placehold.it/32x32","age":38,"eyeColor":"green","name":{"first":"Gena","last":"Erickson"},"company":"SUREMAX","email":"gena.erickson@suremax.com","phone":"+1 (808) 587-3031","address":"953 Hamilton Walk, Grapeview, West Virginia, 5414","about":"Commodo adipisicing esse amet cupidatat aliquip non quis fugiat amet adipisicing proident irure. Officia officia amet est sit ea dolore nostrud. Magna veniam exercitation fugiat pariatur tempor aliquip pariatur laboris. Nisi magna consectetur mollit ex.","registered":"Sunday, January 22, 2017 4:08 AM","latitude":"66.697714","longitude":"-31.518386","tags":["reprehenderit","officia","consequat","officia","tempor"],"favoriteFruit":"apple"},{"_id":"59a7035cdf3d9271510da94f","index":41,"guid":"8add5d93-0a23-48c6-8f06-ae3eeb19b588","isActive":false,"balance":"$3,580.72","picture":"http://placehold.it/32x32","age":21,"eyeColor":"green","name":{"first":"Rivers","last":"Ray"},"company":"APPLICA","email":"rivers.ray@applica.co.uk","phone":"+1 (950) 599-2480","address":"362 Broome Street, Hickory, Nevada, 8639","about":"Eiusmod veniam cupidatat esse amet exercitation mollit nostrud cillum excepteur adipisicing qui irure. Velit laboris nulla ad dolor sint aute duis consectetur dolor do sit Lorem pariatur veniam. Adipisicing ullamco nisi id nostrud tempor esse pariatur id esse eu adipisicing laborum ut velit. Tempor et mollit ullamco ad nulla nulla exercitation tempor ullamco magna consequat dolor ea eu. Magna enim nisi ipsum exercitation labore eiusmod nulla et. Tempor est nisi commodo adipisicing culpa ipsum enim. Sint officia ea magna adipisicing ex aute cupidatat aliqua anim id laborum sunt.","registered":"Wednesday, April 15, 2015 9:15 AM","latitude":"4.898258","longitude":"86.671363","tags":["ullamco","deserunt","eu","sint","velit"],"favoriteFruit":"strawberry"},{"_id":"59a7035c27915d318dc46605","index":42,"guid":"391406a2-8a33-4dba-8188-703efc28ee6a","isActive":true,"balance":"$3,408.64","picture":"http://placehold.it/32x32","age":22,"eyeColor":"brown","name":{"first":"Pierce","last":"Warner"},"company":"GEEKKO","email":"pierce.warner@geekko.info","phone":"+1 (976) 432-3810","address":"620 Vandam Street, Churchill, District Of Columbia, 7273","about":"Deserunt nisi culpa voluptate non. Ex incididunt commodo incididunt duis aute pariatur minim. Aliquip labore et laborum qui tempor eu culpa anim cupidatat elit culpa id. Consequat consequat aute sint incididunt non proident Lorem. Tempor adipisicing ullamco enim ea incididunt pariatur minim incididunt dolore labore elit do exercitation velit.","registered":"Tuesday, January 26, 2016 5:09 PM","latitude":"18.840446","longitude":"-140.288934","tags":["pariatur","non","velit","ad","ipsum"],"favoriteFruit":"strawberry"},{"_id":"59a7035c121cb0d353274b8e","index":43,"guid":"601e5899-1adb-4034-83fb-a408d73eed3e","isActive":false,"balance":"$2,166.09","picture":"http://placehold.it/32x32","age":32,"eyeColor":"green","name":{"first":"Agnes","last":"Klein"},"company":"IPLAX","email":"agnes.klein@iplax.org","phone":"+1 (803) 526-2302","address":"873 Lynch Street, Epworth, Minnesota, 7604","about":"Commodo laboris ea mollit voluptate qui ea non consectetur consequat do est culpa in fugiat. Dolor dolore ea eiusmod aute labore non aliquip. Aliquip elit dolore consectetur veniam sit aliquip dolor nisi nulla in velit. Amet in enim velit pariatur fugiat cupidatat minim tempor id anim. Duis elit dolor in amet nostrud est. Qui dolor labore commodo ea ad officia.","registered":"Thursday, February 19, 2015 2:24 PM","latitude":"-67.101097","longitude":"50.717088","tags":["magna","veniam","do","ea","occaecat"],"favoriteFruit":"strawberry"},{"_id":"59a7035ce2051f3ecf26a443","index":44,"guid":"575f5eb2-764e-40ae-b7e7-df6e9ad613fd","isActive":true,"balance":"$2,790.19","picture":"http://placehold.it/32x32","age":24,"eyeColor":"green","name":{"first":"Mcconnell","last":"Flores"},"company":"INTRADISK","email":"mcconnell.flores@intradisk.me","phone":"+1 (941) 478-2925","address":"186 Noel Avenue, Gwynn, Kentucky, 7885","about":"Culpa officia proident aute laborum nulla reprehenderit veniam. In ex elit ut laborum aliquip voluptate Lorem cillum fugiat sunt magna aliqua. Ut ea ullamco aliqua est non Lorem sunt aliqua occaecat laborum sunt consectetur cillum.","registered":"Wednesday, April 8, 2015 2:31 AM","latitude":"-81.25321","longitude":"133.72738","tags":["cupidatat","excepteur","aute","in","aute"],"favoriteFruit":"strawberry"},{"_id":"59a7035c47fb9f9fde38fcd7","index":45,"guid":"e7b47778-d925-4b8e-ab14-84ba73def2b4","isActive":false,"balance":"$1,674.58","picture":"http://placehold.it/32x32","age":36,"eyeColor":"green","name":{"first":"Hunt","last":"Tyler"},"company":"SAVVY","email":"hunt.tyler@savvy.us","phone":"+1 (863) 598-2691","address":"611 Beadel Street, Roy, Federated States Of Micronesia, 2629","about":"Eiusmod aliquip eu sit sint sint duis Lorem minim adipisicing magna proident occaecat. Deserunt ex est et adipisicing nulla commodo est voluptate nulla. Voluptate cupidatat sit officia mollit elit laboris Lorem elit enim amet tempor cillum ullamco. Est dolor exercitation duis dolor.","registered":"Wednesday, March 15, 2017 11:03 AM","latitude":"69.912349","longitude":"153.385815","tags":["enim","aute","Lorem","magna","culpa"],"favoriteFruit":"apple"},{"_id":"59a7035ca9c9cde01a506db2","index":46,"guid":"7d592c62-decf-4783-a09e-50b17540385b","isActive":false,"balance":"$2,144.62","picture":"http://placehold.it/32x32","age":36,"eyeColor":"green","name":{"first":"Kayla","last":"Hines"},"company":"LUNCHPOD","email":"kayla.hines@lunchpod.tv","phone":"+1 (898) 445-3215","address":"387 Farragut Place, Keyport, Palau, 6584","about":"Officia cillum do adipisicing dolor Lorem laboris voluptate nulla nisi amet voluptate aliquip. Nostrud adipisicing elit incididunt minim consectetur magna et do excepteur ipsum occaecat occaecat laborum. Cupidatat veniam et qui Lorem anim non in quis tempor ullamco consectetur.","registered":"Thursday, December 10, 2015 11:19 AM","latitude":"-56.974919","longitude":"81.24329","tags":["amet","aute","officia","ea","eu"],"favoriteFruit":"strawberry"},{"_id":"59a7035c0e69eb2d00523cd6","index":47,"guid":"0e944922-c8b4-41d4-b772-fda678044be3","isActive":false,"balance":"$2,414.81","picture":"http://placehold.it/32x32","age":29,"eyeColor":"blue","name":{"first":"Galloway","last":"Martin"},"company":"GRONK","email":"galloway.martin@gronk.net","phone":"+1 (992) 421-2108","address":"782 Wyckoff Avenue, Austinburg, Missouri, 2703","about":"Exercitation adipisicing eiusmod quis culpa labore ipsum est labore occaecat enim. Occaecat et aute ipsum ea consectetur Lorem cupidatat ea aliquip amet exercitation enim magna laborum. Fugiat eiusmod anim amet veniam eiusmod enim pariatur. Dolore ex voluptate elit qui in in occaecat elit non commodo proident ea ad. Do fugiat ex reprehenderit dolor proident laboris et proident dolor quis.","registered":"Saturday, July 25, 2015 8:58 AM","latitude":"-67.079903","longitude":"45.040108","tags":["laborum","veniam","nulla","minim","labore"],"favoriteFruit":"apple"},{"_id":"59a7035cd0e6865eee4a787b","index":48,"guid":"311f5a7e-8c80-4e13-ba78-de4877c421ae","isActive":true,"balance":"$1,216.24","picture":"http://placehold.it/32x32","age":21,"eyeColor":"brown","name":{"first":"Delgado","last":"Logan"},"company":"ECOSYS","email":"delgado.logan@ecosys.io","phone":"+1 (817) 488-2527","address":"530 Montana Place, Longbranch, Puerto Rico, 2384","about":"Nulla est occaecat amet aliquip. Tempor eiusmod ullamco velit reprehenderit velit qui proident duis elit labore tempor esse pariatur. Adipisicing anim est quis veniam incididunt ipsum. Minim adipisicing amet adipisicing incididunt proident amet consequat id tempor veniam ullamco laboris ex nulla. Aliquip aute minim id laborum esse ut do ullamco. Duis duis officia incididunt fugiat aute velit laborum eu sit nulla.","registered":"Saturday, May 17, 2014 6:46 PM","latitude":"-31.5656","longitude":"-177.850334","tags":["aute","occaecat","do","sit","mollit"],"favoriteFruit":"apple"},{"_id":"59a7035cdc9d3370f810dae3","index":49,"guid":"c075d96d-9d39-4d1f-81ef-f5f3827a3ec5","isActive":false,"balance":"$1,487.55","picture":"http://placehold.it/32x32","age":32,"eyeColor":"blue","name":{"first":"Francine","last":"Williams"},"company":"ISODRIVE","email":"francine.williams@isodrive.biz","phone":"+1 (827) 552-3345","address":"184 Huron Street, Brady, Virgin Islands, 4981","about":"Mollit magna incididunt eiusmod esse. Et cillum cupidatat eiusmod magna. Officia commodo et nulla nisi duis.","registered":"Sunday, January 26, 2014 7:54 PM","latitude":"52.628824","longitude":"-162.282948","tags":["ex","do","ullamco","labore","qui"],"favoriteFruit":"strawberry"},{"_id":"59a7035c2d9fc6a61983949b","index":50,"guid":"cb0b9d70-84f7-42f9-a598-a9614ba5df34","isActive":true,"balance":"$3,458.93","picture":"http://placehold.it/32x32","age":31,"eyeColor":"brown","name":{"first":"Sheree","last":"Potter"},"company":"BICOL","email":"sheree.potter@bicol.ca","phone":"+1 (911) 520-2486","address":"536 Homecrest Court, Wilsonia, California, 7465","about":"Cillum nostrud eu eiusmod quis veniam nulla adipisicing. Minim irure aute veniam eiusmod mollit ex anim reprehenderit dolore id tempor laboris veniam nisi. Eiusmod ex et Lorem ea enim non aliqua. Minim consequat nisi mollit sint. Do consectetur nostrud irure culpa minim ea exercitation commodo cillum et incididunt fugiat incididunt. Aliqua exercitation elit ut et aliqua.","registered":"Sunday, October 18, 2015 2:26 PM","latitude":"89.490889","longitude":"-80.854052","tags":["id","mollit","exercitation","ullamco","enim"],"favoriteFruit":"apple"},{"_id":"59a7035c405328ddeaff8904","index":51,"guid":"99a63d65-324a-481a-9cac-05c1f9cac100","isActive":true,"balance":"$3,341.72","picture":"http://placehold.it/32x32","age":29,"eyeColor":"brown","name":{"first":"Miranda","last":"Sexton"},"company":"MARQET","email":"miranda.sexton@marqet.name","phone":"+1 (946) 415-3797","address":"340 Bath Avenue, Eagletown, Idaho, 5384","about":"Magna esse sint fugiat consequat consequat fugiat sint incididunt laboris elit do duis velit id. Cillum sint ut qui proident mollit duis et occaecat qui aliquip proident. Lorem exercitation ut in cupidatat anim cupidatat exercitation duis in.","registered":"Thursday, January 22, 2015 7:09 AM","latitude":"19.12383","longitude":"90.784467","tags":["in","commodo","amet","aute","anim"],"favoriteFruit":"apple"},{"_id":"59a7035cfd92740227c0f6b1","index":52,"guid":"b4c25087-f039-498a-a373-313af6acb6ef","isActive":false,"balance":"$1,126.25","picture":"http://placehold.it/32x32","age":20,"eyeColor":"blue","name":{"first":"Ofelia","last":"Carr"},"company":"ENTROPIX","email":"ofelia.carr@entropix.com","phone":"+1 (820) 593-2737","address":"142 Ocean Avenue, Condon, American Samoa, 4622","about":"Est voluptate nostrud deserunt proident deserunt. Enim voluptate enim officia duis consectetur aute cillum dolore. Anim nisi irure do nostrud incididunt qui velit velit. Officia laboris ullamco laboris aliqua ea adipisicing minim consectetur.","registered":"Thursday, January 28, 2016 11:39 PM","latitude":"19.542017","longitude":"-3.713091","tags":["culpa","commodo","fugiat","aliqua","tempor"],"favoriteFruit":"apple"},{"_id":"59a7035c248c6ba65270e46e","index":53,"guid":"7829626c-45e0-4c44-935f-3f44a6580e4a","isActive":true,"balance":"$2,456.51","picture":"http://placehold.it/32x32","age":32,"eyeColor":"brown","name":{"first":"Kasey","last":"Cooley"},"company":"NORALI","email":"kasey.cooley@norali.co.uk","phone":"+1 (861) 491-3340","address":"250 Hull Street, Alleghenyville, Massachusetts, 7051","about":"Eiusmod deserunt quis in culpa ipsum nulla labore pariatur qui occaecat veniam laborum commodo. Laboris veniam sit aliquip do veniam consequat amet. Labore nisi deserunt deserunt aliquip incididunt esse fugiat sunt dolore non reprehenderit. Sunt laboris ut irure aliquip veniam ullamco enim elit esse consequat eiusmod non. Dolor eu qui velit occaecat aliqua incididunt proident laboris.","registered":"Thursday, July 23, 2015 7:32 PM","latitude":"16.512867","longitude":"146.71739","tags":["officia","eu","Lorem","esse","commodo"],"favoriteFruit":"apple"},{"_id":"59a7035cbf98406486822269","index":54,"guid":"32812ecf-ac5d-4297-92f6-c35bb954b085","isActive":false,"balance":"$2,328.11","picture":"http://placehold.it/32x32","age":25,"eyeColor":"green","name":{"first":"Jordan","last":"Robbins"},"company":"GEEKOSIS","email":"jordan.robbins@geekosis.info","phone":"+1 (839) 498-2949","address":"957 Clymer Street, Fedora, New Hampshire, 5337","about":"Ad culpa ea amet voluptate commodo esse. Minim incididunt mollit nostrud incididunt ut id aute consequat consequat eiusmod. In et aute quis laborum ut pariatur tempor consequat laboris. Aliqua commodo ullamco sint sint ex ea nostrud qui veniam mollit. Voluptate cillum anim aliquip elit laboris et proident fugiat. Id laboris ut tempor magna quis dolor ea. Cupidatat sint dolor sunt minim sunt labore officia dolor mollit est.","registered":"Saturday, October 10, 2015 12:28 PM","latitude":"32.067311","longitude":"145.237322","tags":["in","magna","nisi","nisi","adipisicing"],"favoriteFruit":"apple"},{"_id":"59a7035c24b395b422e21bdd","index":55,"guid":"ddbeb6d9-ccc2-4bd3-b910-0197a5a3e978","isActive":false,"balance":"$3,534.04","picture":"http://placehold.it/32x32","age":34,"eyeColor":"brown","name":{"first":"Lewis","last":"Peck"},"company":"APEX","email":"lewis.peck@apex.org","phone":"+1 (980) 536-3987","address":"849 Covert Street, Clayville, Colorado, 1350","about":"Consequat dolore mollit mollit do voluptate cillum commodo. Enim reprehenderit sit amet do. Ullamco culpa sit veniam sint do labore voluptate adipisicing consequat. Occaecat velit adipisicing officia do duis ut ad minim ad. Nulla elit occaecat proident do ipsum occaecat. Dolore qui labore proident dolore ex nisi exercitation ut.","registered":"Sunday, July 6, 2014 4:13 PM","latitude":"-70.298709","longitude":"-164.729062","tags":["sit","sint","culpa","tempor","duis"],"favoriteFruit":"apple"},{"_id":"59a7035c75fbbf78833a6c43","index":56,"guid":"ff49457c-793d-443c-ac86-7b917352212a","isActive":false,"balance":"$2,224.91","picture":"http://placehold.it/32x32","age":36,"eyeColor":"blue","name":{"first":"Carlson","last":"Boone"},"company":"INSOURCE","email":"carlson.boone@insource.me","phone":"+1 (894) 513-2192","address":"478 Walker Court, Trinway, South Dakota, 7897","about":"Irure sit laborum laboris sint dolore in. Labore reprehenderit proident ad exercitation nulla pariatur nostrud non dolore quis laborum sit mollit reprehenderit. Esse cillum irure reprehenderit fugiat aute est id laborum commodo fugiat nulla magna tempor minim. Non irure officia sint aute dolor consectetur. Eu est incididunt aliqua sint id. Eiusmod cillum esse eu cupidatat deserunt eu Lorem enim nisi fugiat non. Ullamco cillum velit ex aute aute irure ad esse officia sint magna ex ad.","registered":"Thursday, February 20, 2014 12:28 AM","latitude":"-67.923152","longitude":"150.385512","tags":["Lorem","qui","adipisicing","ex","sunt"],"favoriteFruit":"banana"},{"_id":"59a7035c2cf8d9e54a6439d5","index":57,"guid":"df0727f4-2681-4bfe-8353-1712ef5a7b86","isActive":true,"balance":"$2,717.06","picture":"http://placehold.it/32x32","age":33,"eyeColor":"blue","name":{"first":"Warren","last":"Tate"},"company":"PAWNAGRA","email":"warren.tate@pawnagra.us","phone":"+1 (855) 426-3132","address":"695 Jamison Lane, Kent, Vermont, 5411","about":"Exercitation dolor et amet do incididunt in occaecat. Esse deserunt et nisi esse tempor enim minim excepteur sint. Culpa esse ipsum duis minim. Exercitation mollit reprehenderit laborum commodo.","registered":"Wednesday, January 27, 2016 5:49 PM","latitude":"16.929183","longitude":"-162.313654","tags":["non","anim","tempor","est","laboris"],"favoriteFruit":"banana"},{"_id":"59a7035c7f1fd5e7b8d1018e","index":58,"guid":"b1ce4a04-3ec6-46ed-9232-172ef5be3080","isActive":false,"balance":"$1,462.40","picture":"http://placehold.it/32x32","age":28,"eyeColor":"blue","name":{"first":"Adeline","last":"Salinas"},"company":"TROPOLIS","email":"adeline.salinas@tropolis.tv","phone":"+1 (879) 591-2242","address":"906 Haring Street, Helen, Nebraska, 8880","about":"Consectetur ad ad eu elit ullamco aute cillum labore id in deserunt. Irure laborum duis elit incididunt laborum cillum duis aliqua consectetur commodo. Et ex consectetur voluptate sunt enim sit tempor sunt aliqua. Mollit sit voluptate duis culpa qui nulla. Mollit duis irure laboris consectetur labore magna Lorem incididunt do mollit.","registered":"Tuesday, September 29, 2015 6:14 PM","latitude":"57.034722","longitude":"-32.396938","tags":["deserunt","incididunt","consectetur","in","tempor"],"favoriteFruit":"apple"},{"_id":"59a7035cfc2501326316c206","index":59,"guid":"12800369-5ca4-4078-8969-9858d5390982","isActive":false,"balance":"$1,108.78","picture":"http://placehold.it/32x32","age":30,"eyeColor":"green","name":{"first":"Newton","last":"Singleton"},"company":"PLAYCE","email":"newton.singleton@playce.net","phone":"+1 (869) 527-3116","address":"373 Vanderbilt Avenue, Germanton, South Carolina, 2961","about":"Cillum ullamco incididunt excepteur duis aliqua laborum exercitation quis cillum nulla aute ut cupidatat. Anim irure laboris non aliquip tempor dolore ipsum. Fugiat ea velit Lorem incididunt ex.","registered":"Friday, February 12, 2016 12:42 PM","latitude":"-52.203091","longitude":"-159.820805","tags":["culpa","qui","amet","amet","quis"],"favoriteFruit":"banana"},{"_id":"59a7035c487c20261c897e35","index":60,"guid":"a49ba126-7e12-448b-b6c7-358122c8be09","isActive":true,"balance":"$3,466.32","picture":"http://placehold.it/32x32","age":27,"eyeColor":"blue","name":{"first":"Noel","last":"Carney"},"company":"BUGSALL","email":"noel.carney@bugsall.io","phone":"+1 (868) 532-3842","address":"784 Danforth Street, Websterville, Texas, 4199","about":"Excepteur culpa laboris esse quis quis elit aliquip. Sit commodo eu enim elit in ea. Labore magna mollit minim veniam sint aliquip sit dolor.","registered":"Friday, May 22, 2015 10:16 PM","latitude":"-71.199536","longitude":"55.775326","tags":["ex","elit","in","id","occaecat"],"favoriteFruit":"banana"},{"_id":"59a7035c06a9abb1922bf0ce","index":61,"guid":"c6a670d5-a5f8-427a-bbd0-0bee7c36b334","isActive":false,"balance":"$3,769.45","picture":"http://placehold.it/32x32","age":33,"eyeColor":"brown","name":{"first":"Patrick","last":"Guerrero"},"company":"SOLGAN","email":"patrick.guerrero@solgan.biz","phone":"+1 (901) 586-2395","address":"523 Louisiana Avenue, Hampstead, Florida, 7360","about":"Consectetur mollit elit sunt minim. Ea deserunt elit sint culpa magna magna sit. Tempor ut eu nisi mollit minim non aliquip nisi eiusmod pariatur ullamco. Adipisicing ad esse dolor ipsum.","registered":"Wednesday, May 28, 2014 9:41 PM","latitude":"-48.779034","longitude":"42.915054","tags":["nulla","aliquip","proident","et","aliquip"],"favoriteFruit":"banana"},{"_id":"59a7035cbc3a0c2b0a2ad1c4","index":62,"guid":"995d2615-e8a9-4fd0-89d0-4e9f3237c47f","isActive":true,"balance":"$2,673.93","picture":"http://placehold.it/32x32","age":40,"eyeColor":"blue","name":{"first":"Chelsea","last":"Wood"},"company":"TYPHONICA","email":"chelsea.wood@typhonica.ca","phone":"+1 (876) 413-2919","address":"611 Seigel Court, Shawmut, Louisiana, 3898","about":"Officia labore ad id cupidatat dolore non irure id ut sit excepteur magna ea. Sint velit et do excepteur incididunt est proident veniam sit exercitation enim sit. Esse tempor ea reprehenderit ullamco consequat dolore. Pariatur qui voluptate mollit occaecat nisi dolore est ad duis non. Fugiat exercitation quis pariatur mollit ipsum mollit reprehenderit nostrud sint eu nisi ullamco officia. Consectetur veniam incididunt minim aliqua magna duis occaecat.","registered":"Thursday, January 5, 2017 3:32 PM","latitude":"-69.891714","longitude":"-0.420051","tags":["aliquip","non","dolor","ex","Lorem"],"favoriteFruit":"apple"},{"_id":"59a7035c493471e65ae4ae1f","index":63,"guid":"2cccc299-0164-4301-98af-f3b29855a599","isActive":true,"balance":"$1,641.77","picture":"http://placehold.it/32x32","age":21,"eyeColor":"green","name":{"first":"Stacy","last":"Drake"},"company":"ENJOLA","email":"stacy.drake@enjola.name","phone":"+1 (894) 485-3245","address":"218 Boardwalk , Vaughn, New Mexico, 1904","about":"Fugiat duis Lorem exercitation veniam ullamco aute occaecat ullamco non Lorem. Ex officia sint culpa magna occaecat laborum proident do. Aliquip quis elit tempor ullamco aliqua proident sunt incididunt sit. Velit Lorem veniam consectetur cillum sit. Id occaecat et labore duis ipsum consectetur.","registered":"Wednesday, June 22, 2016 6:20 PM","latitude":"33.843736","longitude":"-51.883471","tags":["ullamco","nulla","laborum","aliquip","reprehenderit"],"favoriteFruit":"strawberry"},{"_id":"59a7035c5274723c7c54778e","index":64,"guid":"c550c3f1-9d23-449a-879b-caeecafbcca0","isActive":false,"balance":"$2,052.86","picture":"http://placehold.it/32x32","age":40,"eyeColor":"blue","name":{"first":"Bridgette","last":"Lindsay"},"company":"HIVEDOM","email":"bridgette.lindsay@hivedom.com","phone":"+1 (999) 591-2448","address":"268 Bay Avenue, Rosine, Northern Mariana Islands, 3239","about":"Ea do exercitation ad cupidatat. Commodo officia adipisicing culpa eiusmod. Sint aliquip et anim commodo dolor quis officia. Ullamco proident magna cillum mollit exercitation consequat fugiat. Incididunt culpa cupidatat amet eiusmod aute est proident officia elit non proident cillum elit occaecat. Veniam amet ad laborum ad aute id dolore sint ipsum consequat nostrud cillum.","registered":"Saturday, January 9, 2016 9:39 AM","latitude":"77.293657","longitude":"-167.06726","tags":["laborum","fugiat","tempor","nisi","adipisicing"],"favoriteFruit":"banana"},{"_id":"59a7035ca370378bfeaa38a5","index":65,"guid":"94c8d9a6-2e5a-40e9-a6e3-85e79b53b6ed","isActive":true,"balance":"$3,379.77","picture":"http://placehold.it/32x32","age":22,"eyeColor":"brown","name":{"first":"Lorena","last":"Eaton"},"company":"CEPRENE","email":"lorena.eaton@ceprene.co.uk","phone":"+1 (938) 403-2437","address":"283 Quentin Street, Enoree, Utah, 5172","about":"Cupidatat aliqua sint elit sint proident non occaecat elit aute ullamco consectetur in. Exercitation enim laboris irure do deserunt velit aliquip fugiat labore commodo aliquip laboris cupidatat. Occaecat esse minim enim ex fugiat tempor dolore cillum adipisicing qui laborum id nostrud sunt. Nisi laboris sint eiusmod id ipsum eu non velit.","registered":"Sunday, July 26, 2015 5:17 AM","latitude":"16.813018","longitude":"-72.052378","tags":["elit","labore","magna","in","voluptate"],"favoriteFruit":"apple"},{"_id":"59a7035c0ee5430ec8ec7d91","index":66,"guid":"8990fead-c907-47f0-80a5-c53049dffeeb","isActive":true,"balance":"$1,851.38","picture":"http://placehold.it/32x32","age":36,"eyeColor":"blue","name":{"first":"Herminia","last":"Daniels"},"company":"NIKUDA","email":"herminia.daniels@nikuda.info","phone":"+1 (956) 481-3195","address":"809 Neptune Avenue, Chestnut, Indiana, 819","about":"Ea commodo aute nulla commodo consectetur. Dolor duis anim amet voluptate eu elit est in. Aliqua veniam nostrud ad laborum officia anim dolor. Tempor excepteur occaecat eiusmod amet officia labore commodo Lorem nisi magna officia excepteur qui. Duis ad consectetur quis dolor sunt proident aliqua. Eu amet ea sint cupidatat culpa ea aliqua enim culpa veniam quis nulla aliquip.","registered":"Tuesday, July 11, 2017 7:35 AM","latitude":"47.247143","longitude":"-145.360494","tags":["cupidatat","magna","do","aliquip","ullamco"],"favoriteFruit":"strawberry"},{"_id":"59a7035c97657752e87ea50f","index":67,"guid":"e7c4b864-736b-4e83-a71c-b9593d392198","isActive":false,"balance":"$1,416.49","picture":"http://placehold.it/32x32","age":36,"eyeColor":"brown","name":{"first":"Nola","last":"Solis"},"company":"POLARAX","email":"nola.solis@polarax.org","phone":"+1 (974) 576-3054","address":"648 Noll Street, Felt, Tennessee, 4071","about":"Consequat non cupidatat quis elit sunt. Ad voluptate consequat labore id velit in. Nostrud quis commodo dolor eu dolor eiusmod sint sint dolore consectetur exercitation sit consequat ipsum. Veniam proident culpa id laborum dolor consectetur laborum adipisicing occaecat ullamco eu nisi id. Do quis duis velit ad aute aute dolor laborum aliqua cillum tempor. Labore ad occaecat amet aliquip eu id aute dolore in.","registered":"Saturday, June 21, 2014 8:46 AM","latitude":"66.266244","longitude":"-21.606844","tags":["reprehenderit","consectetur","non","veniam","esse"],"favoriteFruit":"banana"},{"_id":"59a7035ca90f3c48271f8556","index":68,"guid":"eaef8eff-d3bc-4be4-8356-3dfa414cca49","isActive":false,"balance":"$1,392.02","picture":"http://placehold.it/32x32","age":33,"eyeColor":"brown","name":{"first":"Leona","last":"Owens"},"company":"SPACEWAX","email":"leona.owens@spacewax.me","phone":"+1 (926) 433-2717","address":"760 Glenwood Road, Dowling, Mississippi, 7230","about":"Enim amet mollit eu duis Lorem. Irure officia nostrud id nostrud excepteur. Fugiat minim in incididunt nostrud sint deserunt sit qui commodo.","registered":"Monday, September 19, 2016 11:45 AM","latitude":"41.817328","longitude":"108.002872","tags":["minim","enim","consequat","nulla","excepteur"],"favoriteFruit":"banana"},{"_id":"59a7035cd3d6556665c80d6c","index":69,"guid":"eab03c09-6238-4b56-bbf5-3a70bb62dce2","isActive":true,"balance":"$3,539.53","picture":"http://placehold.it/32x32","age":24,"eyeColor":"blue","name":{"first":"Hobbs","last":"Jones"},"company":"EMOLTRA","email":"hobbs.jones@emoltra.us","phone":"+1 (963) 441-3365","address":"215 Whitwell Place, Richford, Ohio, 4608","about":"Sunt ullamco deserunt veniam ipsum amet proident duis. Veniam laboris Lorem minim in. Aliquip ipsum eu consectetur cupidatat amet sint aliqua nostrud excepteur tempor velit consectetur. Minim mollit non qui in laborum ad in aute. Consequat qui consequat enim officia laboris cupidatat culpa ullamco eu magna consequat cillum quis cillum. Laboris consequat et adipisicing eiusmod ex Lorem laboris excepteur do. Duis elit excepteur mollit id id occaecat eiusmod anim aliquip ex est non aliqua adipisicing.","registered":"Saturday, December 5, 2015 2:27 PM","latitude":"1.167543","longitude":"-127.155785","tags":["consectetur","reprehenderit","exercitation","consectetur","nisi"],"favoriteFruit":"apple"},{"_id":"59a7035c62d1feaa93ca4a3a","index":70,"guid":"346f6dcf-2913-4a02-b743-51b967cea03f","isActive":false,"balance":"$1,454.96","picture":"http://placehold.it/32x32","age":40,"eyeColor":"blue","name":{"first":"Summers","last":"Huff"},"company":"COMTRACT","email":"summers.huff@comtract.tv","phone":"+1 (966) 424-2354","address":"867 Willoughby Street, Dargan, New York, 6440","about":"Magna proident sunt cillum aliqua aute non et occaecat. Ad sit laboris sit deserunt officia ullamco reprehenderit fugiat id sunt. Quis nostrud mollit nostrud velit voluptate mollit.","registered":"Tuesday, March 14, 2017 4:29 AM","latitude":"38.996569","longitude":"-5.565663","tags":["veniam","ea","cupidatat","sunt","qui"],"favoriteFruit":"banana"},{"_id":"59a7035c3a02db49a4163774","index":71,"guid":"74aef096-4441-4094-9d56-2be53310a19a","isActive":true,"balance":"$3,786.73","picture":"http://placehold.it/32x32","age":39,"eyeColor":"green","name":{"first":"Wilkinson","last":"Howard"},"company":"MOTOVATE","email":"wilkinson.howard@motovate.net","phone":"+1 (954) 411-2468","address":"819 Hanson Place, Sisquoc, Maryland, 4699","about":"Cupidatat labore exercitation quis in tempor est id deserunt. Esse eu ex aute veniam officia aliqua minim ipsum. Sunt ipsum elit excepteur cupidatat qui commodo. Enim labore dolor eu ullamco laborum ad ut ut veniam labore non elit commodo enim. Magna laborum dolore minim adipisicing ullamco laboris commodo aliquip cupidatat consequat.","registered":"Friday, December 23, 2016 12:50 PM","latitude":"79.991901","longitude":"-110.683079","tags":["exercitation","quis","aliqua","aliqua","minim"],"favoriteFruit":"banana"},{"_id":"59a7035ca3df915eedd92aeb","index":72,"guid":"09f7ea7a-7033-4973-ba4f-7438d1e707ed","isActive":true,"balance":"$1,059.27","picture":"http://placehold.it/32x32","age":21,"eyeColor":"green","name":{"first":"Navarro","last":"Grant"},"company":"HAWKSTER","email":"navarro.grant@hawkster.io","phone":"+1 (947) 411-2315","address":"694 Boerum Place, Urie, Montana, 2584","about":"Lorem nostrud cillum nulla commodo officia. Irure aliqua irure ex in voluptate est Lorem labore eiusmod sunt non et consectetur. Laborum amet duis ullamco fugiat laboris do nisi sit. Eu fugiat nostrud non consequat. Reprehenderit nostrud laborum minim cillum magna enim consectetur incididunt laborum sunt incididunt dolore do. Nostrud nisi ea pariatur velit veniam veniam duis pariatur tempor aute. Velit laborum minim excepteur eu irure nulla excepteur incididunt.","registered":"Sunday, April 9, 2017 8:34 AM","latitude":"-66.519848","longitude":"48.685848","tags":["fugiat","labore","elit","laborum","minim"],"favoriteFruit":"banana"},{"_id":"59a7035c7b6ad28ac5fd4e73","index":73,"guid":"d1b37b5f-e453-4f3e-a94b-365359a7d1bc","isActive":true,"balance":"$1,640.35","picture":"http://placehold.it/32x32","age":27,"eyeColor":"blue","name":{"first":"Walton","last":"Henderson"},"company":"EVIDENDS","email":"walton.henderson@evidends.biz","phone":"+1 (871) 490-2002","address":"193 Barbey Street, Dunbar, New Jersey, 8593","about":"Exercitation enim eiusmod dolore proident nulla non. Incididunt Lorem do et ea minim esse labore. Eiusmod velit sit ullamco consequat. Ex et est et officia aliquip Lorem pariatur. Labore excepteur cillum qui commodo aute non incididunt velit consectetur sunt velit. Eu non qui ut quis.","registered":"Friday, September 25, 2015 5:06 PM","latitude":"28.063406","longitude":"-44.937807","tags":["Lorem","Lorem","enim","velit","enim"],"favoriteFruit":"strawberry"},{"_id":"59a7035c2832582a974c8806","index":74,"guid":"0ac54662-a5b7-48bd-abbd-6211f1345bd4","isActive":true,"balance":"$3,975.36","picture":"http://placehold.it/32x32","age":38,"eyeColor":"green","name":{"first":"Parks","last":"Good"},"company":"GEEKULAR","email":"parks.good@geekular.ca","phone":"+1 (822) 403-2275","address":"685 Monitor Street, Fowlerville, Kansas, 6486","about":"Enim culpa nisi nostrud est qui magna laborum aliquip irure duis nostrud nulla. Sit commodo excepteur amet nostrud esse mollit magna voluptate amet officia. Exercitation enim aliquip aute velit laboris. Laborum deserunt esse nulla minim occaecat sunt duis cillum esse sit velit. Esse ut pariatur anim anim eiusmod ea duis. Sint non irure nostrud labore id minim esse. Eu aliqua ex magna sunt excepteur commodo reprehenderit.","registered":"Monday, August 15, 2016 12:32 PM","latitude":"-34.737543","longitude":"-131.226158","tags":["officia","qui","esse","eu","ex"],"favoriteFruit":"banana"},{"_id":"59a7035c0829691744bbaaf7","index":75,"guid":"19d63c85-d2c0-4216-9b3e-50879765681a","isActive":false,"balance":"$3,833.80","picture":"http://placehold.it/32x32","age":33,"eyeColor":"blue","name":{"first":"Suzanne","last":"Arnold"},"company":"ACCRUEX","email":"suzanne.arnold@accruex.name","phone":"+1 (800) 412-2663","address":"623 Blake Avenue, Oretta, Delaware, 5458","about":"Irure proident incididunt in ut sint labore incididunt sint. Nulla nulla anim commodo mollit laborum. Aliqua reprehenderit do quis laboris non aliquip exercitation id veniam velit fugiat elit tempor. Anim veniam id cupidatat esse amet. Nisi pariatur amet pariatur tempor aliqua cupidatat dolore velit duis laborum. Magna proident exercitation aliqua dolore tempor proident voluptate in elit non.","registered":"Thursday, June 29, 2017 6:20 PM","latitude":"-67.201586","longitude":"1.39753","tags":["esse","non","aute","mollit","est"],"favoriteFruit":"banana"},{"_id":"59a7035c23c34fbce0dacb32","index":76,"guid":"0f2bf805-c5ac-4125-9f42-f912195e5de5","isActive":true,"balance":"$3,592.47","picture":"http://placehold.it/32x32","age":38,"eyeColor":"blue","name":{"first":"Robinson","last":"Travis"},"company":"OVIUM","email":"robinson.travis@ovium.com","phone":"+1 (979) 498-2934","address":"275 Irwin Street, Snowville, Connecticut, 5995","about":"Deserunt adipisicing Lorem exercitation cupidatat ut laborum consectetur. Sunt veniam do ut reprehenderit aliqua do amet ad aute incididunt consectetur pariatur. Pariatur exercitation ad tempor dolore proident sint. Cillum exercitation elit dolor consequat anim irure commodo ex adipisicing excepteur nulla sunt. Ad consequat veniam id aliquip ea ad in minim quis exercitation aliqua ea ex. Aliqua consequat tempor officia ullamco cillum elit excepteur sit tempor ex minim occaecat. Aliquip aliqua laboris occaecat et sint ut ullamco fugiat occaecat est sint eu ut aute.","registered":"Monday, April 10, 2017 4:08 PM","latitude":"64.239375","longitude":"137.324483","tags":["aliquip","pariatur","proident","nostrud","deserunt"],"favoriteFruit":"strawberry"},{"_id":"59a7035c1972243aafc69a04","index":77,"guid":"2550fe7c-1d3c-4068-aa7e-9c22a1951f5c","isActive":false,"balance":"$3,685.33","picture":"http://placehold.it/32x32","age":23,"eyeColor":"blue","name":{"first":"Katrina","last":"Wallace"},"company":"EARBANG","email":"katrina.wallace@earbang.co.uk","phone":"+1 (954) 534-2751","address":"950 Brighton Avenue, Roderfield, Washington, 4701","about":"Duis commodo ipsum mollit qui esse. In id ad velit consectetur enim dolore veniam consequat. Quis anim nostrud aute laboris occaecat consequat aliqua nisi. Incididunt laboris velit esse culpa velit quis irure consectetur. Sint Lorem aliquip do laborum consequat officia cillum est labore. Tempor pariatur aliqua duis ex ad eu.","registered":"Monday, March 16, 2015 11:14 PM","latitude":"18.70309","longitude":"-142.809837","tags":["proident","irure","nisi","sunt","labore"],"favoriteFruit":"strawberry"},{"_id":"59a7035cb658685639994e87","index":78,"guid":"058ce69e-d0e7-4cb4-99a4-be9c26701a52","isActive":false,"balance":"$1,697.78","picture":"http://placehold.it/32x32","age":25,"eyeColor":"brown","name":{"first":"Fuentes","last":"Mercado"},"company":"ARCHITAX","email":"fuentes.mercado@architax.info","phone":"+1 (959) 576-3132","address":"353 Mill Street, Cashtown, Georgia, 1768","about":"Reprehenderit dolor cupidatat aute do duis. Nostrud mollit laborum sint dolor veniam voluptate occaecat amet ad. Magna non reprehenderit ad quis ipsum Lorem irure ad do culpa sunt. Qui elit nisi reprehenderit aliqua eu minim velit reprehenderit. Enim exercitation sunt aliquip veniam ea deserunt Lorem veniam ex. Quis ut et consequat amet enim irure mollit ea minim eiusmod consequat commodo excepteur. Nulla adipisicing in quis sunt excepteur eiusmod id.","registered":"Monday, May 19, 2014 4:23 AM","latitude":"-0.578208","longitude":"70.90583","tags":["non","nisi","culpa","id","nostrud"],"favoriteFruit":"banana"},{"_id":"59a7035c4492f07cdb06f3bc","index":79,"guid":"d1ff2173-63b3-4be7-9de8-80374fe05409","isActive":false,"balance":"$3,403.33","picture":"http://placehold.it/32x32","age":33,"eyeColor":"blue","name":{"first":"Aurora","last":"Blake"},"company":"ISOPLEX","email":"aurora.blake@isoplex.org","phone":"+1 (900) 481-2991","address":"364 Tillary Street, Tetherow, Rhode Island, 8261","about":"Amet ut do enim quis mollit commodo enim adipisicing dolor ad culpa nulla culpa. Amet adipisicing reprehenderit labore consequat. Dolore ut Lorem non deserunt irure aute nisi non irure occaecat. Anim ullamco enim enim ipsum occaecat culpa ullamco fugiat ullamco tempor. Ea dolor mollit sunt ipsum et amet laboris. Culpa proident laborum aliquip officia laboris sit cillum. Laborum ex velit culpa velit.","registered":"Friday, October 31, 2014 12:32 PM","latitude":"-71.77671","longitude":"101.056755","tags":["officia","eu","excepteur","et","incididunt"],"favoriteFruit":"strawberry"},{"_id":"59a7035c626202551c0687cb","index":80,"guid":"e74a4405-84aa-4b67-809e-15f6b56ae501","isActive":false,"balance":"$1,388.99","picture":"http://placehold.it/32x32","age":25,"eyeColor":"blue","name":{"first":"Joanne","last":"Oconnor"},"company":"DARWINIUM","email":"joanne.oconnor@darwinium.me","phone":"+1 (943) 410-3599","address":"117 Bragg Street, Temperanceville, Oklahoma, 4977","about":"Magna ad aliquip excepteur id. Duis enim sit adipisicing est esse labore reprehenderit minim. Reprehenderit adipisicing deserunt culpa excepteur mollit elit culpa duis anim labore cupidatat dolor. Labore nisi reprehenderit irure mollit occaecat culpa. Pariatur dolor pariatur tempor commodo consectetur anim magna commodo enim ut fugiat. Labore amet cupidatat officia veniam irure elit proident duis cupidatat reprehenderit eu. Quis commodo fugiat reprehenderit eu adipisicing amet officia.","registered":"Sunday, November 27, 2016 5:43 AM","latitude":"87.333345","longitude":"-6.03891","tags":["amet","ut","tempor","deserunt","magna"],"favoriteFruit":"apple"},{"_id":"59a7035c1a455ae94ad5f555","index":81,"guid":"1545dcb4-fca2-4991-94af-53ccce60f81a","isActive":false,"balance":"$3,936.24","picture":"http://placehold.it/32x32","age":29,"eyeColor":"green","name":{"first":"Sanders","last":"Parsons"},"company":"XUMONK","email":"sanders.parsons@xumonk.us","phone":"+1 (836) 504-3288","address":"162 Prospect Avenue, Tecolotito, North Carolina, 203","about":"Ad nisi sint aliqua tempor deserunt adipisicing ex magna excepteur adipisicing. Commodo sunt eu nostrud reprehenderit dolor nulla nisi exercitation non. Occaecat deserunt eiusmod eu Lorem magna sint consequat ex nulla occaecat magna ipsum ullamco cillum. Deserunt proident non dolor adipisicing culpa ad deserunt exercitation adipisicing excepteur amet ad ex dolor. Tempor ullamco nulla nisi dolore officia aute excepteur esse ullamco. Eu sint irure commodo fugiat consequat aliquip est.","registered":"Friday, March 25, 2016 5:08 PM","latitude":"4.02693","longitude":"-26.79332","tags":["ipsum","et","elit","amet","ut"],"favoriteFruit":"strawberry"},{"_id":"59a7035c0deb19988f17aa77","index":82,"guid":"67d68126-174d-41bb-ae38-77794218d70a","isActive":true,"balance":"$2,352.55","picture":"http://placehold.it/32x32","age":28,"eyeColor":"green","name":{"first":"Little","last":"May"},"company":"APPLIDECK","email":"little.may@applideck.tv","phone":"+1 (939) 567-3305","address":"367 Crawford Avenue, Eureka, Maine, 5784","about":"Dolore laboris consequat duis deserunt voluptate pariatur enim commodo eiusmod labore labore duis. Qui labore aliquip et quis. Aliqua laboris cupidatat in do qui duis quis. Consectetur laborum occaecat ad eiusmod consequat irure amet culpa. Aute magna cillum deserunt sunt enim aliquip dolore dolor tempor nostrud. Lorem duis elit esse commodo aliqua nulla. Non aliquip occaecat cupidatat culpa.","registered":"Friday, October 28, 2016 3:54 AM","latitude":"61.075581","longitude":"51.153595","tags":["commodo","sunt","sunt","dolore","consectetur"],"favoriteFruit":"apple"},{"_id":"59a7035ca83b8ad3adcd08ce","index":83,"guid":"c203159a-808b-4942-b9f6-153f0519f54e","isActive":false,"balance":"$3,183.36","picture":"http://placehold.it/32x32","age":38,"eyeColor":"brown","name":{"first":"Brandi","last":"Navarro"},"company":"MANTRIX","email":"brandi.navarro@mantrix.net","phone":"+1 (821) 507-2658","address":"926 Verona Place, Longoria, Pennsylvania, 9051","about":"Non qui anim et officia eiusmod cupidatat veniam cillum enim sint ad. Excepteur sit cillum culpa veniam consectetur aliqua dolore dolor sint ut. Cupidatat sint adipisicing aute nostrud enim amet velit. Culpa et minim magna commodo aliqua labore laboris nisi anim qui.","registered":"Tuesday, May 17, 2016 2:47 PM","latitude":"-75.956827","longitude":"10.213558","tags":["sint","pariatur","nulla","duis","dolor"],"favoriteFruit":"strawberry"},{"_id":"59a7035cbe29a6da748090b7","index":84,"guid":"af5c99e9-77ce-4df2-b923-b41920d7f00d","isActive":true,"balance":"$1,793.30","picture":"http://placehold.it/32x32","age":39,"eyeColor":"brown","name":{"first":"Rosie","last":"Rowland"},"company":"GLUKGLUK","email":"rosie.rowland@glukgluk.io","phone":"+1 (997) 548-2274","address":"511 Benson Avenue, Taft, North Dakota, 7668","about":"Reprehenderit aliqua sit duis labore esse cupidatat quis incididunt commodo ea culpa. Ut tempor adipisicing anim sunt qui esse cupidatat aute aliqua minim. In est minim proident ipsum dolor ex. Pariatur commodo culpa incididunt enim mollit amet ea. Laborum nulla ex deserunt aute id aute. Irure exercitation proident ullamco veniam adipisicing id labore sit incididunt sint est. Consectetur amet non nostrud culpa mollit reprehenderit proident est consectetur minim aliquip elit proident Lorem.","registered":"Saturday, September 26, 2015 6:00 AM","latitude":"62.537599","longitude":"-117.981601","tags":["consectetur","exercitation","excepteur","esse","veniam"],"favoriteFruit":"banana"},{"_id":"59a7035ce366d83e9c497b63","index":85,"guid":"00cfd94e-5dcc-4872-b8db-10ed9ebfe1b1","isActive":true,"balance":"$2,245.84","picture":"http://placehold.it/32x32","age":29,"eyeColor":"brown","name":{"first":"Rich","last":"Ortiz"},"company":"VINCH","email":"rich.ortiz@vinch.biz","phone":"+1 (886) 509-2030","address":"667 Lenox Road, Nelson, Iowa, 1112","about":"Eiusmod pariatur voluptate fugiat in aliqua quis voluptate ipsum proident. Ullamco elit occaecat sint ipsum mollit esse incididunt quis incididunt. Incididunt pariatur incididunt ut reprehenderit aute elit veniam officia enim. Incididunt incididunt ex labore aliquip excepteur id ipsum incididunt non mollit occaecat. Nostrud ut laboris ea officia commodo esse consectetur aute ipsum anim.","registered":"Friday, January 22, 2016 3:46 AM","latitude":"-56.524315","longitude":"-13.796753","tags":["consectetur","aliquip","voluptate","reprehenderit","minim"],"favoriteFruit":"apple"},{"_id":"59a7035ce64e5cf2cb2c5dbd","index":86,"guid":"956d4ae4-59aa-439f-8496-ab9cf2db8401","isActive":false,"balance":"$3,269.51","picture":"http://placehold.it/32x32","age":33,"eyeColor":"brown","name":{"first":"Lolita","last":"Pitts"},"company":"CEDWARD","email":"lolita.pitts@cedward.ca","phone":"+1 (962) 548-2756","address":"575 Halleck Street, Warsaw, Marshall Islands, 5786","about":"Ex aute et dolore magna mollit quis. Deserunt esse exercitation ea id ullamco occaecat occaecat mollit magna fugiat sint. Elit voluptate consequat occaecat duis labore ut. Minim adipisicing do sunt aliquip ipsum nulla.","registered":"Thursday, July 7, 2016 8:23 PM","latitude":"72.65006","longitude":"130.043692","tags":["enim","id","id","commodo","id"],"favoriteFruit":"apple"},{"_id":"59a7035c9c4570394ffa599d","index":87,"guid":"736241d1-243a-423a-a8d4-eebe18815840","isActive":true,"balance":"$3,619.45","picture":"http://placehold.it/32x32","age":20,"eyeColor":"brown","name":{"first":"Head","last":"Hodge"},"company":"OPTYK","email":"head.hodge@optyk.name","phone":"+1 (968) 530-3840","address":"714 Adler Place, Greenwich, Alaska, 6463","about":"Eu nisi aute et irure aliquip. Ullamco fugiat occaecat adipisicing consequat do laboris id veniam proident est. Elit esse aliquip irure pariatur Lorem ipsum duis ad ad qui enim culpa duis voluptate. Mollit ut sit nulla aliquip eu commodo eiusmod dolore ad dolore culpa ipsum nostrud sunt. Dolor nostrud labore culpa irure mollit dolore occaecat magna incididunt culpa sunt anim officia. Excepteur esse eiusmod culpa incididunt et qui mollit sint tempor. Enim quis ipsum anim commodo reprehenderit ut.","registered":"Tuesday, January 21, 2014 1:18 PM","latitude":"46.89198","longitude":"30.630046","tags":["ex","nisi","sit","nisi","ullamco"],"favoriteFruit":"banana"},{"_id":"59a7035c22d650f8dc32b276","index":88,"guid":"7835601e-6c62-4f23-845f-f37b23b4bfa5","isActive":true,"balance":"$1,335.42","picture":"http://placehold.it/32x32","age":24,"eyeColor":"green","name":{"first":"Yvette","last":"Lee"},"company":"FUELWORKS","email":"yvette.lee@fuelworks.com","phone":"+1 (893) 483-2423","address":"359 Logan Street, Inkerman, Arkansas, 8607","about":"Commodo nisi eu fugiat quis minim tempor amet officia aliqua velit mollit pariatur sit. Et enim anim eu ipsum et adipisicing culpa. Ipsum reprehenderit dolor amet dolor nulla culpa Lorem dolore aliqua et occaecat laborum nulla. Dolor labore occaecat mollit et ipsum in enim.","registered":"Sunday, August 30, 2015 3:43 AM","latitude":"-1.177192","longitude":"-176.072586","tags":["deserunt","deserunt","ullamco","nisi","et"],"favoriteFruit":"banana"},{"_id":"59a7035c845ab1f46cc313f3","index":89,"guid":"90a77242-736f-43b2-a926-f5776cf5a0fc","isActive":true,"balance":"$2,413.09","picture":"http://placehold.it/32x32","age":24,"eyeColor":"blue","name":{"first":"Queen","last":"Bush"},"company":"CODAX","email":"queen.bush@codax.co.uk","phone":"+1 (887) 408-2294","address":"652 Livonia Avenue, Springdale, Virginia, 8288","about":"Officia cupidatat proident consectetur officia tempor velit excepteur mollit et irure in mollit. Proident officia cupidatat eiusmod et aliqua fugiat Lorem ipsum mollit. Proident adipisicing proident velit occaecat labore mollit et elit mollit labore.","registered":"Monday, April 11, 2016 3:33 PM","latitude":"40.174924","longitude":"-169.264042","tags":["adipisicing","irure","excepteur","labore","fugiat"],"favoriteFruit":"strawberry"},{"_id":"59a7035cf4047f065c27810d","index":90,"guid":"e9bbb717-cacf-4734-8d21-c1983a4fb19d","isActive":false,"balance":"$1,180.56","picture":"http://placehold.it/32x32","age":37,"eyeColor":"blue","name":{"first":"Shanna","last":"Gay"},"company":"CAPSCREEN","email":"shanna.gay@capscreen.info","phone":"+1 (867) 526-2674","address":"809 Elmwood Avenue, Southview, Arizona, 3898","about":"Anim minim in sint culpa fugiat ad do. Ex fugiat laborum ullamco mollit irure quis in culpa in veniam aliquip irure mollit. Occaecat sint dolor in do labore. Proident mollit consequat pariatur labore laboris nulla incididunt duis proident. Veniam dolore in esse non.","registered":"Wednesday, November 9, 2016 3:10 AM","latitude":"27.646782","longitude":"-151.385329","tags":["labore","id","sint","non","nisi"],"favoriteFruit":"banana"},{"_id":"59a7035c2fb8999bcafecdc2","index":91,"guid":"12c9dc32-2d6b-4973-8651-d6188a7dabc8","isActive":false,"balance":"$3,424.83","picture":"http://placehold.it/32x32","age":34,"eyeColor":"blue","name":{"first":"Ella","last":"Carpenter"},"company":"ZENTIX","email":"ella.carpenter@zentix.org","phone":"+1 (975) 408-2611","address":"574 Radde Place, Beaverdale, Guam, 7123","about":"Veniam minim laborum eiusmod laborum esse dolor ullamco. Consequat mollit anim sit aliqua exercitation. Labore minim qui et ut deserunt ex nisi aliqua nostrud ad tempor commodo duis. Tempor duis nisi eu ullamco voluptate occaecat cillum. Cupidatat occaecat exercitation pariatur non non aliqua voluptate fugiat laborum elit. Est fugiat nostrud eu in cupidatat consectetur ad Lorem culpa est. Laborum officia voluptate in aliqua anim excepteur est et.","registered":"Friday, March 11, 2016 8:58 AM","latitude":"2.273755","longitude":"-88.510162","tags":["velit","aliqua","consequat","est","dolor"],"favoriteFruit":"strawberry"},{"_id":"59a7035c2f40c10c920c6b13","index":92,"guid":"ffb19003-45da-4d37-a67e-bcba3ab853b3","isActive":true,"balance":"$3,553.34","picture":"http://placehold.it/32x32","age":29,"eyeColor":"green","name":{"first":"Dominguez","last":"Andrews"},"company":"BITENDREX","email":"dominguez.andrews@bitendrex.me","phone":"+1 (948) 455-2358","address":"859 Lombardy Street, Innsbrook, Oregon, 1038","about":"Laborum sunt laboris dolor nulla labore et sint eiusmod velit reprehenderit velit exercitation sunt magna. Enim sunt magna nostrud consectetur deserunt nostrud est commodo. Fugiat sint nisi qui voluptate. Mollit ullamco id ad aute commodo pariatur. Ut quis id elit Lorem veniam ullamco tempor dolor commodo. Occaecat fugiat et consectetur amet do eiusmod et laboris eiusmod commodo tempor ipsum Lorem. Labore Lorem est do minim ad voluptate velit.","registered":"Friday, September 23, 2016 1:49 PM","latitude":"41.049962","longitude":"82.866048","tags":["officia","esse","et","laborum","adipisicing"],"favoriteFruit":"banana"},{"_id":"59a7035c7693669d4a2341fc","index":93,"guid":"fe2cbad4-40e5-45a9-afc9-dbdfbb39c5e1","isActive":false,"balance":"$1,712.21","picture":"http://placehold.it/32x32","age":21,"eyeColor":"brown","name":{"first":"Mcdonald","last":"Spence"},"company":"RUGSTARS","email":"mcdonald.spence@rugstars.us","phone":"+1 (988) 547-3230","address":"868 Baycliff Terrace, Lloyd, Wyoming, 485","about":"Do irure eu duis velit mollit ullamco commodo. Non excepteur enim consequat esse reprehenderit veniam dolore. Pariatur do laboris est proident adipisicing nisi deserunt cupidatat in id et nisi id. Enim excepteur tempor anim ad esse anim ullamco quis nisi proident mollit aute ipsum.","registered":"Sunday, June 4, 2017 2:42 AM","latitude":"18.376296","longitude":"-146.83597","tags":["ex","duis","qui","esse","voluptate"],"favoriteFruit":"strawberry"},{"_id":"59a7035c4caf37e13a927434","index":94,"guid":"e20016f9-9f1a-41df-828e-def56cf7ac3a","isActive":false,"balance":"$1,453.58","picture":"http://placehold.it/32x32","age":33,"eyeColor":"blue","name":{"first":"Foster","last":"Dennis"},"company":"REMOTION","email":"foster.dennis@remotion.tv","phone":"+1 (866) 535-3792","address":"691 Louisa Street, Cecilia, Hawaii, 2862","about":"Officia eiusmod consectetur irure amet et esse pariatur non aliquip do cillum. Eu anim ex velit non esse. Fugiat minim consequat pariatur exercitation laborum Lorem.","registered":"Saturday, November 1, 2014 11:04 AM","latitude":"59.797693","longitude":"121.515418","tags":["laboris","ullamco","excepteur","exercitation","sunt"],"favoriteFruit":"apple"},{"_id":"59a7035cb37d952c09b1db05","index":95,"guid":"bea34c38-52c6-43c8-9ef1-553c6881a460","isActive":true,"balance":"$3,823.29","picture":"http://placehold.it/32x32","age":34,"eyeColor":"green","name":{"first":"Virgie","last":"Pearson"},"company":"ORGANICA","email":"virgie.pearson@organica.net","phone":"+1 (904) 555-2662","address":"265 Bayview Avenue, Hillsboro, Wisconsin, 1774","about":"Mollit officia laboris et esse anim Lorem commodo. Ex magna commodo elit occaecat quis dolor eu pariatur. Velit officia mollit ad esse pariatur fugiat anim. Ea incididunt tempor in mollit consectetur sit amet officia esse aute et. Duis qui fugiat enim occaecat est irure aliqua officia.","registered":"Thursday, August 28, 2014 2:19 PM","latitude":"48.435984","longitude":"39.085544","tags":["ipsum","quis","non","sit","quis"],"favoriteFruit":"banana"},{"_id":"59a7035c55ec65f65e251a32","index":96,"guid":"b32cf788-ddc2-433f-986e-74112c39584f","isActive":true,"balance":"$1,794.43","picture":"http://placehold.it/32x32","age":40,"eyeColor":"blue","name":{"first":"Arlene","last":"Leon"},"company":"DUOFLEX","email":"arlene.leon@duoflex.io","phone":"+1 (927) 496-3663","address":"113 Fillmore Avenue, Enetai, Alabama, 4366","about":"Dolor magna tempor eiusmod consectetur irure officia culpa aute cupidatat. Et et veniam tempor fugiat aute excepteur aliquip laborum culpa nulla nostrud. Aute quis eu mollit do non ut amet. Aliquip non aliqua eu fugiat aliqua sunt ut elit consequat magna aliquip. Ad culpa eu fugiat occaecat culpa cupidatat incididunt excepteur.","registered":"Sunday, March 29, 2015 4:05 AM","latitude":"-26.602809","longitude":"146.305625","tags":["proident","sit","cillum","duis","veniam"],"favoriteFruit":"banana"},{"_id":"59a7035c8cbdfccd78c807a2","index":97,"guid":"628d3858-1f68-49e2-9924-8302d0c48afd","isActive":false,"balance":"$2,082.32","picture":"http://placehold.it/32x32","age":26,"eyeColor":"blue","name":{"first":"Kristen","last":"Holman"},"company":"COLUMELLA","email":"kristen.holman@columella.biz","phone":"+1 (885) 443-2216","address":"220 Guernsey Street, Bergoo, Michigan, 5982","about":"Sint Lorem minim ex nostrud amet in. Sunt dolore consequat minim sunt quis nostrud ut. Magna occaecat Lorem pariatur ipsum amet non eiusmod cupidatat deserunt magna sit. Exercitation eiusmod magna fugiat officia in sint elit reprehenderit laboris aliquip mollit aliquip. Cupidatat veniam sint amet non consectetur reprehenderit ut eiusmod elit et ut. Dolor reprehenderit duis ad sit velit est commodo.","registered":"Tuesday, June 6, 2017 5:33 AM","latitude":"-2.307265","longitude":"-82.751171","tags":["consectetur","consequat","ex","exercitation","elit"],"favoriteFruit":"apple"},{"_id":"59a7035cf9eca03873bb57a0","index":98,"guid":"9c1b37ef-f431-44c7-bcb8-fc47fe923cb9","isActive":true,"balance":"$1,761.63","picture":"http://placehold.it/32x32","age":27,"eyeColor":"green","name":{"first":"Eliza","last":"Phillips"},"company":"BLANET","email":"eliza.phillips@blanet.ca","phone":"+1 (978) 577-2073","address":"541 Pulaski Street, Cartwright, West Virginia, 2342","about":"Lorem pariatur nulla occaecat cupidatat reprehenderit exercitation do officia. Occaecat elit in ut dolor mollit proident proident est exercitation reprehenderit tempor nulla aute irure. Culpa id eu magna elit ipsum cillum esse est amet sit. Esse elit reprehenderit duis ipsum nostrud laboris ex consequat culpa enim elit consectetur laborum cillum.","registered":"Monday, February 6, 2017 5:47 PM","latitude":"-45.258264","longitude":"179.218865","tags":["cupidatat","qui","cupidatat","ex","ullamco"],"favoriteFruit":"banana"},{"_id":"59a7035cd4a7afcd642db334","index":99,"guid":"80f5af6a-f72f-4b5c-8406-1a15385a4335","isActive":false,"balance":"$1,014.12","picture":"http://placehold.it/32x32","age":20,"eyeColor":"blue","name":{"first":"Carissa","last":"Sweeney"},"company":"DANCERITY","email":"carissa.sweeney@dancerity.name","phone":"+1 (919) 424-2419","address":"122 Ferris Street, Trexlertown, Nevada, 1930","about":"Tempor nostrud Lorem officia eiusmod velit. Fugiat deserunt do ex dolore aliquip eu qui eiusmod ipsum. Occaecat aliquip nulla occaecat ea sit culpa aliqua ullamco. Reprehenderit elit ullamco sint laboris eu elit labore ut id laborum. Sit elit sit velit commodo dolore nostrud laboris exercitation minim. Deserunt quis exercitation ullamco est sunt.","registered":"Tuesday, March 10, 2015 4:10 PM","latitude":"65.234266","longitude":"156.854022","tags":["duis","ad","ad","commodo","esse"],"favoriteFruit":"strawberry"}]'),xv={title:"Components/CosmozOmnitable",component:"cosmoz-omnitable",parameters:{docs:{description:{component:"A data table component with sorting, filtering, grouping."}}}},zi=t=>_`
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
                .data=${hv}
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
    `,jt=zi.bind({});jt.args={};const Ut=zi.bind({});Ut.args={sortOn:"company",descending:!1};const Kt=zi.bind({});Kt.args={groupOn:"eyeColor",groupOnDescending:!1};const Wt=zi.bind({});Wt.args={loading:!0};const Gt=zi.bind({});Gt.args={hideSelectAll:!0};jt.parameters={...jt.parameters,docs:{...jt.parameters?.docs,source:{originalSource:`args => {
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
}`,...Kt.parameters?.docs?.source}}};Wt.parameters={...Wt.parameters,docs:{...Wt.parameters?.docs,source:{originalSource:`args => {
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
}`,...Wt.parameters?.docs?.source}}};Gt.parameters={...Gt.parameters,docs:{...Gt.parameters?.docs,source:{originalSource:`args => {
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
}`,...Gt.parameters?.docs?.source}}};const wv=["Default","Sorting","Grouping","Loading","HideSelectAll"];export{jt as Default,Kt as Grouping,Gt as HideSelectAll,Wt as Loading,Ut as Sorting,wv as __namedExportsOrder,xv as default};
