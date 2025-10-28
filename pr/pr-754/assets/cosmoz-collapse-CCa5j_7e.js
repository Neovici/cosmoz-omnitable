import{f as Ao,B as Dl,x as O,E as xe,T as J,m as Po,i as $l,p as Fl,v as Ne,s as ut,M as cn,b as To}from"./iframe-BiJrYApv.js";import{_ as Bl}from"./preload-helper-PPVm8Dsz.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Hl(t,e){if(t!==void 0){let i=0;for(const n of t)yield e(n,i++)}}/**
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
*/let Vl=/(url\()([^)]*)(\))/g,jl=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,Xt,ie;function Ct(t,e){if(t&&jl.test(t)||t==="//")return t;if(Xt===void 0){Xt=!1;try{const i=new URL("b","http://a");i.pathname="c%20d",Xt=i.href==="http://a/c%20d"}catch{}}if(e||(e=document.baseURI||window.location.href),Xt)try{return new URL(t,e).href}catch{return t}return ie||(ie=document.implementation.createHTMLDocument("temp"),ie.base=ie.createElement("base"),ie.head.appendChild(ie.base),ie.anchor=ie.createElement("a"),ie.body.appendChild(ie.anchor)),ie.base.href=e,ie.anchor.href=t,ie.anchor.href||t}function is(t,e){return t.replace(Vl,function(i,n,s,r){return n+"'"+Ct(s.replace(/["']/g,""),e)+"'"+r})}function ns(t){return t.substring(0,t.lastIndexOf("/")+1)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Vi=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const Ul=Vi&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch{return!1}})();let Kl=window.Polymer&&window.Polymer.rootPath||ns(document.baseURI||window.location.href),bi=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,Wl=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,tt=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,ql=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,Rt=window.Polymer&&window.Polymer.legacyOptimizations||!1,Oo=window.Polymer&&window.Polymer.legacyWarnings||!1,Yl=window.Polymer&&window.Polymer.syncInitialRender||!1,Tn=window.Polymer&&window.Polymer.legacyUndefined||!1,Jl=window.Polymer&&window.Polymer.orderedComputed||!1,Ms=window.Polymer&&window.Polymer.removeNestedTemplates||!1,ko=window.Polymer&&window.Polymer.fastDomIf||!1,On=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,Gt=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,Xl=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Gl=0;const te=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let i=Gl++;function n(s){let r=s.__mixinSet;if(r&&r[i])return s;let o=e,a=o.get(s);if(!a){a=t(s),o.set(s,a);let l=Object.create(a.__mixinSet||r||null);l[i]=!0,a.__mixinSet=l}return a}return n};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ss={},Io={};function Ds(t,e){ss[t]=Io[t.toLowerCase()]=e}function $s(t){return ss[t]||Io[t.toLowerCase()]}function Zl(t){t.querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}class Lt extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,i){if(e){let n=$s(e);return n&&i?n.querySelector(i):n}return null}attributeChangedCallback(e,i,n,s){i!==n&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,i=Ct(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=ns(i)}return this.__assetpath}register(e){if(e=e||this.id,e){if(tt&&$s(e)!==void 0)throw Ds(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,Ds(e,this),Zl(this)}}}Lt.prototype.modules=ss;customElements.define("dom-module",Lt);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ql="link[rel=import][type~=css]",ec="include",Fs="shady-unscoped";function rs(t){return Lt.import(t)}function Bs(t){let e=t.body?t.body:t;const i=is(e.textContent,t.baseURI),n=document.createElement("style");return n.textContent=i,n}function tc(t){const e=t.trim().split(/\s+/),i=[];for(let n=0;n<e.length;n++)i.push(...ic(e[n]));return i}function ic(t){const e=rs(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(e._styles===void 0){const i=[];i.push(...as(e));const n=e.querySelector("template");n&&i.push(...os(n,e.assetpath)),e._styles=i}return e._styles}function os(t,e){if(!t._styles){const i=[],n=t.content.querySelectorAll("style");for(let s=0;s<n.length;s++){let r=n[s],o=r.getAttribute(ec);o&&i.push(...tc(o).filter(function(a,l,c){return c.indexOf(a)===l})),e&&(r.textContent=is(r.textContent,e)),i.push(r)}t._styles=i}return t._styles}function nc(t){let e=rs(t);return e?as(e):[]}function as(t){const e=[],i=t.querySelectorAll(Ql);for(let n=0;n<i.length;n++){let s=i[n];if(s.import){const r=s.import,o=s.hasAttribute(Fs);if(o&&!r._unscopedStyle){const a=Bs(r);a.setAttribute(Fs,""),r._unscopedStyle=a}else r._style||(r._style=Bs(r));e.push(o?r._unscopedStyle:r._style)}}return e}function sc(t){let e=t.trim().split(/\s+/),i="";for(let n=0;n<e.length;n++)i+=rc(e[n]);return i}function rc(t){let e=rs(t);if(e&&e._cssText===void 0){let i=ac(e),n=e.querySelector("template");n&&(i+=oc(n,e.assetpath)),e._cssText=i||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}function oc(t,e){let i="";const n=os(t,e);for(let s=0;s<n.length;s++){let r=n[s];r.parentNode&&r.parentNode.removeChild(r),i+=r.textContent}return i}function ac(t){let e="",i=as(t);for(let n=0;n<i.length;n++)e+=i[n].textContent;return e}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const v=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function kn(t){return t.indexOf(".")>=0}function Se(t){let e=t.indexOf(".");return e===-1?t:t.slice(0,e)}function No(t,e){return t.indexOf(e+".")===0}function zt(t,e){return e.indexOf(t+".")===0}function Mt(t,e,i){return e+i.slice(t.length)}function lc(t,e){return t===e||No(t,e)||zt(t,e)}function bt(t){if(Array.isArray(t)){let e=[];for(let i=0;i<t.length;i++){let n=t[i].toString().split(".");for(let s=0;s<n.length;s++)e.push(n[s])}return e.join(".")}else return t}function Ro(t){return Array.isArray(t)?bt(t).split("."):t.toString().split(".")}function G(t,e,i){let n=t,s=Ro(e);for(let r=0;r<s.length;r++){if(!n)return;let o=s[r];n=n[o]}return i&&(i.path=s.join(".")),n}function Hs(t,e,i){let n=t,s=Ro(e),r=s[s.length-1];if(s.length>1){for(let o=0;o<s.length-1;o++){let a=s[o];if(n=n[a],!n)return}n[r]=i}else n[e]=i;return s.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const vi={},cc=/-[a-z]/g,uc=/([A-Z])/g;function ls(t){return vi[t]||(vi[t]=t.indexOf("-")<0?t:t.replace(cc,e=>e[1].toUpperCase()))}function ji(t){return vi[t]||(vi[t]=t.replace(uc,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let hc=0,Lo=0,Ge=[],dc=0,In=!1,zo=document.createTextNode("");new window.MutationObserver(pc).observe(zo,{characterData:!0});function pc(){In=!1;const t=Ge.length;for(let e=0;e<t;e++){let i=Ge[e];if(i)try{i()}catch(n){setTimeout(()=>{throw n})}}Ge.splice(0,t),Lo+=t}const St={after(t){return{run(e){return window.setTimeout(e,t)},cancel(e){window.clearTimeout(e)}}},run(t,e){return window.setTimeout(t,e)},cancel(t){window.clearTimeout(t)}},Ae={run(t){return In||(In=!0,zo.textContent=dc++),Ge.push(t),hc++},cancel(t){const e=t-Lo;if(e>=0){if(!Ge[e])throw new Error("invalid async handle: "+t);Ge[e]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const fc=Ae,Mo=te(t=>{class e extends t{static createProperties(n){const s=this.prototype;for(let r in n)r in s||s._createPropertyAccessor(r)}static attributeNameForProperty(n){return n.toLowerCase()}static typeForProperty(n){}_createPropertyAccessor(n,s){this._addPropertyToAttributeMap(n),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[n]||(this.__dataHasAccessor[n]=!0,this._definePropertyAccessor(n,s))}_addPropertyToAttributeMap(n){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let s=this.__dataAttributes[n];return s||(s=this.constructor.attributeNameForProperty(n),this.__dataAttributes[s]=n),s}_definePropertyAccessor(n,s){Object.defineProperty(this,n,{get(){return this.__data[n]},set:s?function(){}:function(r){this._setPendingProperty(n,r,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let n in this.__dataHasAccessor)this.hasOwnProperty(n)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[n]=this[n],delete this[n])}_initializeInstanceProperties(n){Object.assign(this,n)}_setProperty(n,s){this._setPendingProperty(n,s)&&this._invalidateProperties()}_getProperty(n){return this.__data[n]}_setPendingProperty(n,s,r){let o=this.__data[n],a=this._shouldPropertyChange(n,s,o);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(n in this.__dataOld)&&(this.__dataOld[n]=o),this.__data[n]=s,this.__dataPending[n]=s),a}_isPropertyPending(n){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(n))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,fc.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const n=this.__data,s=this.__dataPending,r=this.__dataOld;this._shouldPropertiesChange(n,s,r)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(n,s,r)),this.__dataCounter--}_shouldPropertiesChange(n,s,r){return!!s}_propertiesChanged(n,s,r){}_shouldPropertyChange(n,s,r){return r!==s&&(r===r||s===s)}attributeChangedCallback(n,s,r,o){s!==r&&this._attributeToProperty(n,r),super.attributeChangedCallback&&super.attributeChangedCallback(n,s,r,o)}_attributeToProperty(n,s,r){if(!this.__serializing){const o=this.__dataAttributes,a=o&&o[n]||n;this[a]=this._deserializeValue(s,r||this.constructor.typeForProperty(a))}}_propertyToAttribute(n,s,r){this.__serializing=!0,r=arguments.length<3?this[n]:r,this._valueToNodeAttribute(this,r,s||this.constructor.attributeNameForProperty(n)),this.__serializing=!1}_valueToNodeAttribute(n,s,r){const o=this._serializeValue(s);(r==="class"||r==="name"||r==="slot")&&(n=v(n)),o===void 0?n.removeAttribute(r):n.setAttribute(r,o===""&&window.trustedTypes?window.trustedTypes.emptyScript:o)}_serializeValue(n){switch(typeof n){case"boolean":return n?"":void 0;default:return n?.toString()}}_deserializeValue(n,s){switch(s){case Boolean:return n!==null;case Number:return Number(n);default:return n}}}return e});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Do={};let Zt=HTMLElement.prototype;for(;Zt;){let t=Object.getOwnPropertyNames(Zt);for(let e=0;e<t.length;e++)Do[t[e]]=!0;Zt=Object.getPrototypeOf(Zt)}const mc=window.trustedTypes?t=>trustedTypes.isHTML(t)||trustedTypes.isScript(t)||trustedTypes.isScriptURL(t):()=>!1;function gc(t,e){if(!Do[e]){let i=t[e];i!==void 0&&(t.__data?t._setPendingProperty(e,i):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=i))}}const $o=te(t=>{const e=Mo(t);class i extends e{static createPropertiesForAttributes(){let s=this.observedAttributes;for(let r=0;r<s.length;r++)this.prototype._createPropertyAccessor(ls(s[r]))}static attributeNameForProperty(s){return ji(s)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(s){for(let r in s)this._setProperty(r,s[r])}_ensureAttribute(s,r){const o=this;o.hasAttribute(s)||this._valueToNodeAttribute(o,r,s)}_serializeValue(s){switch(typeof s){case"object":if(s instanceof Date)return s.toString();if(s){if(mc(s))return s;try{return JSON.stringify(s)}catch{return""}}default:return super._serializeValue(s)}}_deserializeValue(s,r){let o;switch(r){case Object:try{o=JSON.parse(s)}catch{o=s}break;case Array:try{o=JSON.parse(s)}catch{o=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${s}`)}break;case Date:o=isNaN(s)?String(s):Number(s),o=new Date(o);break;default:o=super._deserializeValue(s,r);break}return o}_definePropertyAccessor(s,r){gc(this,s),super._definePropertyAccessor(s,r)}_hasAccessor(s){return this.__dataHasAccessor&&this.__dataHasAccessor[s]}_isPropertyPending(s){return!!(this.__dataPending&&s in this.__dataPending)}}return i});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const _c={"dom-if":!0,"dom-repeat":!0};let Vs=!1,js=!1;function yc(){if(!Vs){Vs=!0;const t=document.createElement("textarea");t.placeholder="a",js=t.placeholder===t.textContent}return js}function bc(t){yc()&&t.localName==="textarea"&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}const vc=(()=>{const t=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:e=>e});return(e,i,n)=>{const s=i.getAttribute(n);if(t&&n.startsWith("on-")){e.setAttribute(n,t.createScript(s,n));return}e.setAttribute(n,s)}})();function wc(t){let e=t.getAttribute("is");if(e&&_c[e]){let i=t;for(i.removeAttribute("is"),t=i.ownerDocument.createElement(e),i.parentNode.replaceChild(t,i),t.appendChild(i);i.attributes.length;){const{name:n}=i.attributes[0];vc(t,i,n),i.removeAttribute(n)}}return t}function Fo(t,e){let i=e.parentInfo&&Fo(t,e.parentInfo);if(i){for(let n=i.firstChild,s=0;n;n=n.nextSibling)if(e.parentIndex===s++)return n}else return t}function xc(t,e,i,n){n.id&&(e[n.id]=i)}function Cc(t,e,i){if(i.events&&i.events.length)for(let n=0,s=i.events,r;n<s.length&&(r=s[n]);n++)t._addMethodEventListenerToNode(e,r.name,r.value,t)}function Sc(t,e,i,n){i.templateInfo&&(e._templateInfo=i.templateInfo,e._parentTemplateInfo=n)}function Ec(t,e,i){return t=t._methodHost||t,function(s){t[i]?t[i](s,s.detail):console.warn("listener method `"+i+"` not defined")}}const Ac=te(t=>{class e extends t{static _parseTemplate(n,s){if(!n._templateInfo){let r=n._templateInfo={};r.nodeInfoList=[],r.nestedTemplate=!!s,r.stripWhiteSpace=s&&s.stripWhiteSpace||n.hasAttribute&&n.hasAttribute("strip-whitespace"),this._parseTemplateContent(n,r,{parent:null})}return n._templateInfo}static _parseTemplateContent(n,s,r){return this._parseTemplateNode(n.content,s,r)}static _parseTemplateNode(n,s,r){let o=!1,a=n;return a.localName=="template"&&!a.hasAttribute("preserve-content")?o=this._parseTemplateNestedTemplate(a,s,r)||o:a.localName==="slot"&&(s.hasInsertionPoint=!0),bc(a),a.firstChild&&this._parseTemplateChildNodes(a,s,r),a.hasAttributes&&a.hasAttributes()&&(o=this._parseTemplateNodeAttributes(a,s,r)||o),o||r.noted}static _parseTemplateChildNodes(n,s,r){if(!(n.localName==="script"||n.localName==="style"))for(let o=n.firstChild,a=0,l;o;o=l){if(o.localName=="template"&&(o=wc(o)),l=o.nextSibling,o.nodeType===Node.TEXT_NODE){let u=l;for(;u&&u.nodeType===Node.TEXT_NODE;)o.textContent+=u.textContent,l=u.nextSibling,n.removeChild(u),u=l;if(s.stripWhiteSpace&&!o.textContent.trim()){n.removeChild(o);continue}}let c={parentIndex:a,parentInfo:r};this._parseTemplateNode(o,s,c)&&(c.infoIndex=s.nodeInfoList.push(c)-1),o.parentNode&&a++}}static _parseTemplateNestedTemplate(n,s,r){let o=n,a=this._parseTemplate(o,s);return(a.content=o.content.ownerDocument.createDocumentFragment()).appendChild(o.content),r.templateInfo=a,!0}static _parseTemplateNodeAttributes(n,s,r){let o=!1,a=Array.from(n.attributes);for(let l=a.length-1,c;c=a[l];l--)o=this._parseTemplateNodeAttribute(n,s,r,c.name,c.value)||o;return o}static _parseTemplateNodeAttribute(n,s,r,o,a){return o.slice(0,3)==="on-"?(n.removeAttribute(o),r.events=r.events||[],r.events.push({name:o.slice(3),value:a}),!0):o==="id"?(r.id=a,!0):!1}static _contentForTemplate(n){let s=n._templateInfo;return s&&s.content||n.content}_stampTemplate(n,s){n&&!n.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(n),s=s||this.constructor._parseTemplate(n);let r=s.nodeInfoList,o=s.content||n.content,a=document.importNode(o,!0);a.__noInsertionPoint=!s.hasInsertionPoint;let l=a.nodeList=new Array(r.length);a.$={};for(let c=0,u=r.length,h;c<u&&(h=r[c]);c++){let d=l[c]=Fo(a,h);xc(this,a.$,d,h),Sc(this,d,h,s),Cc(this,d,h)}return a=a,a}_addMethodEventListenerToNode(n,s,r,o){o=o||n;let a=Ec(o,s,r);return this._addEventListenerToNode(n,s,a),a}_addEventListenerToNode(n,s,r){n.addEventListener(s,r)}_removeEventListenerFromNode(n,s,r){n.removeEventListener(s,r)}}return e});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let Dt=0;const $t=[],P={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Bo="__computeInfo",Pc=/[A-Z]/;function un(t,e,i){let n=t[e];if(!n)n=t[e]={};else if(!t.hasOwnProperty(e)&&(n=t[e]=Object.create(t[e]),i))for(let s in n){let r=n[s],o=n[s]=Array(r.length);for(let a=0;a<r.length;a++)o[a]=r[a]}return n}function vt(t,e,i,n,s,r){if(e){let o=!1;const a=Dt++;for(let l in i){let c=s?Se(l):l,u=e[c];if(u)for(let h=0,d=u.length,p;h<d&&(p=u[h]);h++)(!p.info||p.info.lastRun!==a)&&(!s||cs(l,p.trigger))&&(p.info&&(p.info.lastRun=a),p.fn(t,l,i,n,p.info,s,r),o=!0)}return o}return!1}function Tc(t,e,i,n,s,r,o,a){let l=!1,c=o?Se(n):n,u=e[c];if(u)for(let h=0,d=u.length,p;h<d&&(p=u[h]);h++)(!p.info||p.info.lastRun!==i)&&(!o||cs(n,p.trigger))&&(p.info&&(p.info.lastRun=i),p.fn(t,n,s,r,p.info,o,a),l=!0);return l}function cs(t,e){if(e){let i=e.name;return i==t||!!(e.structured&&No(i,t))||!!(e.wildcard&&zt(i,t))}else return!0}function Us(t,e,i,n,s){let r=typeof s.method=="string"?t[s.method]:s.method,o=s.property;r?r.call(t,t.__data[o],n[o]):s.dynamicFn||console.warn("observer method `"+s.method+"` not defined")}function Oc(t,e,i,n,s){let r=t[P.NOTIFY],o,a=Dt++;for(let c in e)e[c]&&(r&&Tc(t,r,a,c,i,n,s)||s&&kc(t,c,i))&&(o=!0);let l;o&&(l=t.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function kc(t,e,i){let n=Se(e);if(n!==e){let s=ji(n)+"-changed";return Ho(t,s,i[e],e),!0}return!1}function Ho(t,e,i,n){let s={value:i,queueProperty:!0};n&&(s.path=n),v(t).dispatchEvent(new CustomEvent(e,{detail:s}))}function Ic(t,e,i,n,s,r){let a=(r?Se(e):e)!=e?e:null,l=a?G(t,a):t.__data[e];a&&l===void 0&&(l=i[e]),Ho(t,s.eventName,l,a)}function Nc(t,e,i,n,s){let r,o=t.detail,a=o&&o.path;a?(n=Mt(i,n,a),r=o&&o.value):r=t.currentTarget[i],r=s?!r:r,(!e[P.READ_ONLY]||!e[P.READ_ONLY][n])&&e._setPendingPropertyOrPath(n,r,!0,!!a)&&(!o||!o.queueProperty)&&e._invalidateProperties()}function Rc(t,e,i,n,s){let r=t.__data[e];bi&&(r=bi(r,s.attrName,"attribute",t)),t._propertyToAttribute(e,s.attrName,r)}function Lc(t,e,i,n){let s=t[P.COMPUTE];if(s)if(Jl){Dt++;const r=Mc(t),o=[];for(let l in e)Ks(l,s,o,r,n);let a;for(;a=o.shift();)Vo(t,"",e,i,a)&&Ks(a.methodInfo,s,o,r,n);Object.assign(i,t.__dataOld),Object.assign(e,t.__dataPending),t.__dataPending=null}else{let r=e;for(;vt(t,s,r,i,n);)Object.assign(i,t.__dataOld),Object.assign(e,t.__dataPending),r=t.__dataPending,t.__dataPending=null}}const zc=(t,e,i)=>{let n=0,s=e.length-1,r=-1;for(;n<=s;){const o=n+s>>1,a=i.get(e[o].methodInfo)-i.get(t.methodInfo);if(a<0)n=o+1;else if(a>0)s=o-1;else{r=o;break}}r<0&&(r=s+1),e.splice(r,0,t)},Ks=(t,e,i,n,s)=>{const r=s?Se(t):t,o=e[r];if(o)for(let a=0;a<o.length;a++){const l=o[a];l.info.lastRun!==Dt&&(!s||cs(t,l.trigger))&&(l.info.lastRun=Dt,zc(l.info,i,n))}};function Mc(t){let e=t.constructor.__orderedComputedDeps;if(!e){e=new Map;const i=t[P.COMPUTE];let{counts:n,ready:s,total:r}=Dc(t),o;for(;o=s.shift();){e.set(o,e.size);const a=i[o];a&&a.forEach(l=>{const c=l.info.methodInfo;--r,--n[c]===0&&s.push(c)})}r!==0&&console.warn(`Computed graph for ${t.localName} incomplete; circular?`),t.constructor.__orderedComputedDeps=e}return e}function Dc(t){const e=t[Bo],i={},n=t[P.COMPUTE],s=[];let r=0;for(let o in e){const a=e[o];r+=i[o]=a.args.filter(l=>!l.literal).length+(a.dynamicFn?1:0)}for(let o in n)e[o]||s.push(o);return{counts:i,ready:s,total:r}}function Vo(t,e,i,n,s){let r=Nn(t,e,i,n,s);if(r===$t)return!1;let o=s.methodInfo;return t.__dataHasAccessor&&t.__dataHasAccessor[o]?t._setPendingProperty(o,r,!0):(t[o]=r,!1)}function $c(t,e,i){let n=t.__dataLinkedPaths;if(n){let s;for(let r in n){let o=n[r];zt(r,e)?(s=Mt(r,o,e),t._setPendingPropertyOrPath(s,i,!0,!0)):zt(o,e)&&(s=Mt(o,r,e),t._setPendingPropertyOrPath(s,i,!0,!0))}}}function hn(t,e,i,n,s,r,o){i.bindings=i.bindings||[];let a={kind:n,target:s,parts:r,literal:o,isCompound:r.length!==1};if(i.bindings.push(a),jc(a)){let{event:c,negate:u}=a.parts[0];a.listenerEvent=c||ji(s)+"-changed",a.listenerNegate=u}let l=e.nodeInfoList.length;for(let c=0;c<a.parts.length;c++){let u=a.parts[c];u.compoundIndex=c,Fc(t,e,a,u,l)}}function Fc(t,e,i,n,s){if(!n.literal)if(i.kind==="attribute"&&i.target[0]==="-")console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let r=n.dependencies,o={index:s,binding:i,part:n,evaluator:t};for(let a=0;a<r.length;a++){let l=r[a];typeof l=="string"&&(l=Uo(l),l.wildcard=!0),t._addTemplatePropertyEffect(e,l.rootProperty,{fn:Bc,info:o,trigger:l})}}}function Bc(t,e,i,n,s,r,o){let a=o[s.index],l=s.binding,c=s.part;if(r&&c.source&&e.length>c.source.length&&l.kind=="property"&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let u=i[e];e=Mt(c.source,l.target,e),a._setPendingPropertyOrPath(e,u,!1,!0)&&t._enqueueClient(a)}else{let u=s.evaluator._evaluateBinding(t,c,e,i,n,r);u!==$t&&Hc(t,a,l,c,u)}}function Hc(t,e,i,n,s){if(s=Vc(e,s,i,n),bi&&(s=bi(s,i.target,i.kind,e)),i.kind=="attribute")t._valueToNodeAttribute(e,s,i.target);else{let r=i.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[r]?(!e[P.READ_ONLY]||!e[P.READ_ONLY][r])&&e._setPendingProperty(r,s)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,r,s)}}function Vc(t,e,i,n){if(i.isCompound){let s=t.__dataCompoundStorage[i.target];s[n.compoundIndex]=e,e=s.join("")}return i.kind!=="attribute"&&(i.target==="textContent"||i.target==="value"&&(t.localName==="input"||t.localName==="textarea"))&&(e=e??""),e}function jc(t){return!!t.target&&t.kind!="attribute"&&t.kind!="text"&&!t.isCompound&&t.parts[0].mode==="{"}function Uc(t,e){let{nodeList:i,nodeInfoList:n}=e;if(n.length)for(let s=0;s<n.length;s++){let r=n[s],o=i[s],a=r.bindings;if(a)for(let l=0;l<a.length;l++){let c=a[l];Kc(o,c),Wc(o,t,c)}o.__dataHost=t}}function Kc(t,e){if(e.isCompound){let i=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),n=e.parts,s=new Array(n.length);for(let o=0;o<n.length;o++)s[o]=n[o].literal;let r=e.target;i[r]=s,e.literal&&e.kind=="property"&&(r==="className"&&(t=v(t)),t[r]=e.literal)}}function Wc(t,e,i){if(i.listenerEvent){let n=i.parts[0];t.addEventListener(i.listenerEvent,function(s){Nc(s,e,i.target,n.source,n.negate)})}}function Ws(t,e,i,n,s,r){r=e.static||r&&(typeof r!="object"||r[e.methodName]);let o={methodName:e.methodName,args:e.args,methodInfo:s,dynamicFn:r};for(let a=0,l;a<e.args.length&&(l=e.args[a]);a++)l.literal||t._addPropertyEffect(l.rootProperty,i,{fn:n,info:o,trigger:l});return r&&t._addPropertyEffect(e.methodName,i,{fn:n,info:o}),o}function Nn(t,e,i,n,s){let r=t._methodHost||t,o=r[s.methodName];if(o){let a=t._marshalArgs(s.args,e,i);return a===$t?$t:o.apply(r,a)}else s.dynamicFn||console.warn("method `"+s.methodName+"` not defined")}const qc=[],jo="(?:[a-zA-Z_$][\\w.:$\\-*]*)",Yc="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",Jc="(?:'(?:[^'\\\\]|\\\\.)*')",Xc='(?:"(?:[^"\\\\]|\\\\.)*")',Gc="(?:"+Jc+"|"+Xc+")",qs="(?:("+jo+"|"+Yc+"|"+Gc+")\\s*)",Zc="(?:"+qs+"(?:,\\s*"+qs+")*)",Qc="(?:\\(\\s*(?:"+Zc+"?)\\)\\s*)",eu="("+jo+"\\s*"+Qc+"?)",tu="(\\[\\[|{{)\\s*",iu="(?:]]|}})",nu="(?:(!)\\s*)?",su=tu+nu+eu+iu,Ys=new RegExp(su,"g");function Js(t){let e="";for(let i=0;i<t.length;i++){let n=t[i].literal;e+=n||""}return e}function dn(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let n={methodName:e[1],static:!0,args:qc};if(e[2].trim()){let s=e[2].replace(/\\,/g,"&comma;").split(",");return ru(s,n)}else return n}return null}function ru(t,e){return e.args=t.map(function(i){let n=Uo(i);return n.literal||(e.static=!1),n},this),e}function Uo(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:e,value:"",literal:!1},n=e[0];switch(n==="-"&&(n=e[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':i.value=e.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(e),i.literal=!0;break}return i.literal||(i.rootProperty=Se(e),i.structured=kn(e),i.structured&&(i.wildcard=e.slice(-2)==".*",i.wildcard&&(i.name=e.slice(0,-2)))),i}function Xs(t,e,i){let n=G(t,i);return n===void 0&&(n=e[i]),n}function Ko(t,e,i,n){const s={indexSplices:n};Tn&&!t._overrideLegacyUndefined&&(e.splices=s),t.notifyPath(i+".splices",s),t.notifyPath(i+".length",e.length),Tn&&!t._overrideLegacyUndefined&&(s.indexSplices=[])}function ht(t,e,i,n,s,r){Ko(t,e,i,[{index:n,addedCount:s,removed:r,object:e,type:"splice"}])}function ou(t){return t[0].toUpperCase()+t.substring(1)}const Ui=te(t=>{const e=Ac($o(t));class i extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return P}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(dt.length){let s=dt[dt.length-1];s._enqueueClient(this),this.__dataHost=s}}_initializeProtoProperties(s){this.__data=Object.create(s),this.__dataPending=Object.create(s),this.__dataOld={}}_initializeInstanceProperties(s){let r=this[P.READ_ONLY];for(let o in s)(!r||!r[o])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[o]=this.__dataPending[o]=s[o])}_addPropertyEffect(s,r,o){this._createPropertyAccessor(s,r==P.READ_ONLY);let a=un(this,r,!0)[s];a||(a=this[r][s]=[]),a.push(o)}_removePropertyEffect(s,r,o){let a=un(this,r,!0)[s],l=a.indexOf(o);l>=0&&a.splice(l,1)}_hasPropertyEffect(s,r){let o=this[r];return!!(o&&o[s])}_hasReadOnlyEffect(s){return this._hasPropertyEffect(s,P.READ_ONLY)}_hasNotifyEffect(s){return this._hasPropertyEffect(s,P.NOTIFY)}_hasReflectEffect(s){return this._hasPropertyEffect(s,P.REFLECT)}_hasComputedEffect(s){return this._hasPropertyEffect(s,P.COMPUTE)}_setPendingPropertyOrPath(s,r,o,a){if(a||Se(Array.isArray(s)?s[0]:s)!==s){if(!a){let l=G(this,s);if(s=Hs(this,s,r),!s||!super._shouldPropertyChange(s,r,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(s,r,o))return $c(this,s,r),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[s])return this._setPendingProperty(s,r,o);this[s]=r}return!1}_setUnmanagedPropertyToNode(s,r,o){(o!==s[r]||typeof o=="object")&&(r==="className"&&(s=v(s)),s[r]=o)}_setPendingProperty(s,r,o){let a=this.__dataHasPaths&&kn(s),l=a?this.__dataTemp:this.__data;return this._shouldPropertyChange(s,r,l[s])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),s in this.__dataOld||(this.__dataOld[s]=this.__data[s]),a?this.__dataTemp[s]=r:this.__data[s]=r,this.__dataPending[s]=r,(a||this[P.NOTIFY]&&this[P.NOTIFY][s])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[s]=o),!0):!1}_setProperty(s,r){this._setPendingProperty(s,r,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(s){this.__dataPendingClients=this.__dataPendingClients||[],s!==this&&this.__dataPendingClients.push(s)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let s=this.__dataPendingClients;if(s){this.__dataPendingClients=null;for(let r=0;r<s.length;r++){let o=s[r];o.__dataEnabled?o.__dataPending&&o._flushProperties():o._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(s,r){for(let o in s)(r||!this[P.READ_ONLY]||!this[P.READ_ONLY][o])&&this._setPendingPropertyOrPath(o,s[o],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(s,r,o){let a=this.__dataHasPaths;this.__dataHasPaths=!1;let l;Lc(this,r,o,a),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(r,o,a),this._flushClients(),vt(this,this[P.REFLECT],r,o,a),vt(this,this[P.OBSERVE],r,o,a),l&&Oc(this,l,r,o,a),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(s,r,o){this[P.PROPAGATE]&&vt(this,this[P.PROPAGATE],s,r,o),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,s,r,o)}_runEffectsForTemplate(s,r,o,a){const l=(c,u)=>{vt(this,s.propertyEffects,c,o,u,s.nodeList);for(let h=s.firstChild;h;h=h.nextSibling)this._runEffectsForTemplate(h,c,o,u)};s.runEffects?s.runEffects(l,r,a):l(r,a)}linkPaths(s,r){s=bt(s),r=bt(r),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[s]=r}unlinkPaths(s){s=bt(s),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[s]}notifySplices(s,r){let o={path:""},a=G(this,s,o);Ko(this,a,o.path,r)}get(s,r){return G(r||this,s)}set(s,r,o){o?Hs(o,s,r):(!this[P.READ_ONLY]||!this[P.READ_ONLY][s])&&this._setPendingPropertyOrPath(s,r,!0)&&this._invalidateProperties()}push(s,...r){let o={path:""},a=G(this,s,o),l=a.length,c=a.push(...r);return r.length&&ht(this,a,o.path,l,r.length,[]),c}pop(s){let r={path:""},o=G(this,s,r),a=!!o.length,l=o.pop();return a&&ht(this,o,r.path,o.length,0,[l]),l}splice(s,r,o,...a){let l={path:""},c=G(this,s,l);r<0?r=c.length-Math.floor(-r):r&&(r=Math.floor(r));let u;return arguments.length===2?u=c.splice(r):u=c.splice(r,o,...a),(a.length||u.length)&&ht(this,c,l.path,r,a.length,u),u}shift(s){let r={path:""},o=G(this,s,r),a=!!o.length,l=o.shift();return a&&ht(this,o,r.path,0,0,[l]),l}unshift(s,...r){let o={path:""},a=G(this,s,o),l=a.unshift(...r);return r.length&&ht(this,a,o.path,0,r.length,[]),l}notifyPath(s,r){let o;if(arguments.length==1){let a={path:""};r=G(this,s,a),o=a.path}else Array.isArray(s)?o=bt(s):o=s;this._setPendingPropertyOrPath(o,r,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(s,r){this._addPropertyEffect(s,P.READ_ONLY),r&&(this["_set"+ou(s)]=function(o){this._setProperty(s,o)})}_createPropertyObserver(s,r,o){let a={property:s,method:r,dynamicFn:!!o};this._addPropertyEffect(s,P.OBSERVE,{fn:Us,info:a,trigger:{name:s}}),o&&this._addPropertyEffect(r,P.OBSERVE,{fn:Us,info:a,trigger:{name:r}})}_createMethodObserver(s,r){let o=dn(s);if(!o)throw new Error("Malformed observer expression '"+s+"'");Ws(this,o,P.OBSERVE,Nn,null,r)}_createNotifyingProperty(s){this._addPropertyEffect(s,P.NOTIFY,{fn:Ic,info:{eventName:ji(s)+"-changed",property:s}})}_createReflectedProperty(s){let r=this.constructor.attributeNameForProperty(s);r[0]==="-"?console.warn("Property "+s+" cannot be reflected to attribute "+r+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(s,P.REFLECT,{fn:Rc,info:{attrName:r}})}_createComputedProperty(s,r,o){let a=dn(r);if(!a)throw new Error("Malformed computed expression '"+r+"'");const l=Ws(this,a,P.COMPUTE,Vo,s,o);un(this,Bo)[s]=l}_marshalArgs(s,r,o){const a=this.__data,l=[];for(let c=0,u=s.length;c<u;c++){let{name:h,structured:d,wildcard:p,value:f,literal:m}=s[c];if(!m)if(p){const g=zt(h,r),_=Xs(a,o,g?r:h);f={path:g?r:h,value:_,base:g?G(a,h):_}}else f=d?Xs(a,o,h):a[h];if(Tn&&!this._overrideLegacyUndefined&&f===void 0&&s.length>1)return $t;l[c]=f}return l}static addPropertyEffect(s,r,o){this.prototype._addPropertyEffect(s,r,o)}static createPropertyObserver(s,r,o){this.prototype._createPropertyObserver(s,r,o)}static createMethodObserver(s,r){this.prototype._createMethodObserver(s,r)}static createNotifyingProperty(s){this.prototype._createNotifyingProperty(s)}static createReadOnlyProperty(s,r){this.prototype._createReadOnlyProperty(s,r)}static createReflectedProperty(s){this.prototype._createReflectedProperty(s)}static createComputedProperty(s,r,o){this.prototype._createComputedProperty(s,r,o)}static bindTemplate(s){return this.prototype._bindTemplate(s)}_bindTemplate(s,r){let o=this.constructor._parseTemplate(s),a=this.__preBoundTemplateInfo==o;if(!a)for(let l in o.propertyEffects)this._createPropertyAccessor(l);if(r)if(o=Object.create(o),o.wasPreBound=a,!this.__templateInfo)this.__templateInfo=o;else{const l=s._parentTemplateInfo||this.__templateInfo,c=l.lastChild;o.parent=l,l.lastChild=o,o.previousSibling=c,c?c.nextSibling=o:l.firstChild=o}else this.__preBoundTemplateInfo=o;return o}static _addTemplatePropertyEffect(s,r,o){let a=s.hostProps=s.hostProps||{};a[r]=!0;let l=s.propertyEffects=s.propertyEffects||{};(l[r]=l[r]||[]).push(o)}_stampTemplate(s,r){r=r||this._bindTemplate(s,!0),dt.push(this);let o=super._stampTemplate(s,r);if(dt.pop(),r.nodeList=o.nodeList,!r.wasPreBound){let a=r.childNodes=[];for(let l=o.firstChild;l;l=l.nextSibling)a.push(l)}return o.templateInfo=r,Uc(this,r),this.__dataClientsReady&&(this._runEffectsForTemplate(r,this.__data,null,!1),this._flushClients()),o}_removeBoundDom(s){const r=s.templateInfo,{previousSibling:o,nextSibling:a,parent:l}=r;o?o.nextSibling=a:l&&(l.firstChild=a),a?a.previousSibling=o:l&&(l.lastChild=o),r.nextSibling=r.previousSibling=null;let c=r.childNodes;for(let u=0;u<c.length;u++){let h=c[u];v(v(h).parentNode).removeChild(h)}}static _parseTemplateNode(s,r,o){let a=e._parseTemplateNode.call(this,s,r,o);if(s.nodeType===Node.TEXT_NODE){let l=this._parseBindings(s.textContent,r);l&&(s.textContent=Js(l)||" ",hn(this,r,o,"text","textContent",l),a=!0)}return a}static _parseTemplateNodeAttribute(s,r,o,a,l){let c=this._parseBindings(l,r);if(c){let u=a,h="property";Pc.test(a)?h="attribute":a[a.length-1]=="$"&&(a=a.slice(0,-1),h="attribute");let d=Js(c);return d&&h=="attribute"&&(a=="class"&&s.hasAttribute("class")&&(d+=" "+s.getAttribute(a)),s.setAttribute(a,d)),h=="attribute"&&u=="disable-upgrade$"&&s.setAttribute(a,""),s.localName==="input"&&u==="value"&&s.setAttribute(u,""),s.removeAttribute(u),h==="property"&&(a=ls(a)),hn(this,r,o,h,a,c,d),!0}else return e._parseTemplateNodeAttribute.call(this,s,r,o,a,l)}static _parseTemplateNestedTemplate(s,r,o){let a=e._parseTemplateNestedTemplate.call(this,s,r,o);const l=s.parentNode,c=o.templateInfo,u=l.localName==="dom-if",h=l.localName==="dom-repeat";Ms&&(u||h)&&(l.removeChild(s),o=o.parentInfo,o.templateInfo=c,o.noted=!0,a=!1);let d=c.hostProps;if(ko&&u)d&&(r.hostProps=Object.assign(r.hostProps||{},d),Ms||(o.parentInfo.noted=!0));else{let p="{";for(let f in d){let m=[{mode:p,source:f,dependencies:[f],hostProp:!0}];hn(this,r,o,"property","_host_"+f,m)}}return a}static _parseBindings(s,r){let o=[],a=0,l;for(;(l=Ys.exec(s))!==null;){l.index>a&&o.push({literal:s.slice(a,l.index)});let c=l[1][0],u=!!l[2],h=l[3].trim(),d=!1,p="",f=-1;c=="{"&&(f=h.indexOf("::"))>0&&(p=h.substring(f+2),h=h.substring(0,f),d=!0);let m=dn(h),g=[];if(m){let{args:_,methodName:y}=m;for(let w=0;w<_.length;w++){let x=_[w];x.literal||g.push(x)}let b=r.dynamicFns;(b&&b[y]||m.static)&&(g.push(y),m.dynamicFn=!0)}else g.push(h);o.push({source:h,mode:c,negate:u,customEvent:d,signature:m,dependencies:g,event:p}),a=Ys.lastIndex}if(a&&a<s.length){let c=s.substring(a);c&&o.push({literal:c})}return o.length?o:null}static _evaluateBinding(s,r,o,a,l,c){let u;return r.signature?u=Nn(s,o,a,l,r.signature):o!=r.source?u=G(s,r.source):c&&kn(o)?u=G(s,o):u=s.__data[o],r.negate&&(u=!u),u}}return i}),dt=[];/**
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
*/function au(t){const e={};for(let i in t){const n=t[i];e[i]=typeof n=="function"?{type:n}:n}return e}const lu=te(t=>{const e=Mo(t);function i(r){const o=Object.getPrototypeOf(r);return o.prototype instanceof s?o:null}function n(r){if(!r.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",r))){let o=null;if(r.hasOwnProperty(JSCompiler_renameProperty("properties",r))){const a=r.properties;a&&(o=au(a))}r.__ownProperties=o}return r.__ownProperties}class s extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const o=this._properties;this.__observedAttributes=o?Object.keys(o).map(a=>this.prototype._addPropertyToAttributeMap(a)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const o=i(this);o&&o.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const o=n(this);o&&this.createProperties(o)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const o=i(this);this.__properties=Object.assign({},o&&o._properties,n(this))}return this.__properties}static typeForProperty(o){const a=this._properties[o];return a&&a.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return s});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const cu="3.5.2",Rn=window.ShadyCSS&&window.ShadyCSS.cssBuild,Ki=te(t=>{const e=lu(Ui(t));function i(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let c=l._properties;for(let u in c){let h=c[u];"value"in h&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[u]=h)}}return l.__propertyDefaults}function n(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function s(l,c,u,h){u.computed&&(u.readOnly=!0),u.computed&&(l._hasReadOnlyEffect(c)?console.warn(`Cannot redefine computed property '${c}'.`):l._createComputedProperty(c,u.computed,h)),u.readOnly&&!l._hasReadOnlyEffect(c)?l._createReadOnlyProperty(c,!u.computed):u.readOnly===!1&&l._hasReadOnlyEffect(c)&&console.warn(`Cannot make readOnly property '${c}' non-readOnly.`),u.reflectToAttribute&&!l._hasReflectEffect(c)?l._createReflectedProperty(c):u.reflectToAttribute===!1&&l._hasReflectEffect(c)&&console.warn(`Cannot make reflected property '${c}' non-reflected.`),u.notify&&!l._hasNotifyEffect(c)?l._createNotifyingProperty(c):u.notify===!1&&l._hasNotifyEffect(c)&&console.warn(`Cannot make notify property '${c}' non-notify.`),u.observer&&l._createPropertyObserver(c,u.observer,h[u.observer]),l._addPropertyToAttributeMap(c)}function r(l,c,u,h){if(!Rn){const d=c.content.querySelectorAll("style"),p=os(c),f=nc(u),m=c.content.firstElementChild;for(let _=0;_<f.length;_++){let y=f[_];y.textContent=l._processStyleText(y.textContent,h),c.content.insertBefore(y,m)}let g=0;for(let _=0;_<p.length;_++){let y=p[_],b=d[g];b!==y?(y=y.cloneNode(!0),b.parentNode.insertBefore(y,b)):g++,y.textContent=l._processStyleText(y.textContent,h)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(c,u),Xl&&Rn&&Ul){const d=c.content.querySelectorAll("style");if(d){let p="";Array.from(d).forEach(f=>{p+=f.textContent,f.parentNode.removeChild(f)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(p)}}}function o(l){let c=null;if(l&&(!tt||ql)&&(c=Lt.import(l,"template"),tt&&!c))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return c}class a extends e{static get polymerElementVersion(){return cu}static _finalizeClass(){e._finalizeClass.call(this);const c=n(this);c&&this.createObservers(c,this._properties),this._prepareTemplate()}static _prepareTemplate(){let c=this.template;c&&(typeof c=="string"?(console.error("template getter must return HTMLTemplateElement"),c=null):Rt||(c=c.cloneNode(!0))),this.prototype._template=c}static createProperties(c){for(let u in c)s(this.prototype,u,c[u],c)}static createObservers(c,u){const h=this.prototype;for(let d=0;d<c.length;d++)h._createMethodObserver(c[d],u)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let c=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof c=="function"&&(c=c()),this._template=c!==void 0?c:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&o(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(c){this._template=c}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const c=this.importMeta;if(c)this._importPath=ns(c.url);else{const u=Lt.import(this.is);this._importPath=u&&u.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Kl,this.importPath=this.constructor.importPath;let c=i(this.constructor);if(c)for(let u in c){let h=c[u];if(this._canApplyPropertyDefault(u)){let d=typeof h.value=="function"?h.value.call(this):h.value;this._hasAccessor(u)?this._setPendingProperty(u,d,!0):this[u]=d}}}_canApplyPropertyDefault(c){return!this.hasOwnProperty(c)}static _processStyleText(c,u){return is(c,u)}static _finalizeTemplate(c){const u=this.prototype._template;if(u&&!u.__polymerFinalized){u.__polymerFinalized=!0;const h=this.importPath,d=h?Ct(h):"";r(this,u,c,d),this.prototype._bindTemplate(u)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(c){const u=v(this);if(u.attachShadow)return c?(u.shadowRoot||(u.attachShadow({mode:"open",shadyUpgradeFragment:c}),u.shadowRoot.appendChild(c),this.constructor._styleSheet&&(u.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Yl&&window.ShadyDOM&&window.ShadyDOM.flushInitial(u.shadowRoot),u.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(c){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,c)}resolveUrl(c,u){return!u&&this.importPath&&(u=Ct(this.importPath)),Ct(c,u)}static _parseTemplateContent(c,u,h){return u.dynamicFns=u.dynamicFns||this._properties,e._parseTemplateContent.call(this,c,u,h)}static _addTemplatePropertyEffect(c,u,h){return Oo&&!(u in this._properties)&&!(h.info.part.signature&&h.info.part.signature.static)&&!h.info.part.hostProp&&!c.nestedTemplate&&console.warn(`Property '${u}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,c,u,h)}}return a});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Gs=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:t=>t});class Wo{constructor(e,i){Yo(e,i);const n=i.reduce((s,r,o)=>s+qo(r)+e[o+1],e[0]);this.value=n.toString()}toString(){return this.value}}function qo(t){if(t instanceof Wo)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}function uu(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof Wo)return qo(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}const j=function(e,...i){Yo(e,i);const n=document.createElement("template");let s=i.reduce((r,o,a)=>r+uu(o)+e[a+1],e[0]);return Gs&&(s=Gs.createHTML(s)),n.innerHTML=s,n},Yo=(t,e)=>{if(!Array.isArray(t)||!Array.isArray(t.raw)||e.length!==t.length-1)throw new TypeError("Invalid call to the html template tag")};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ut=Ki(HTMLElement);let wi,Jo=0;function Zs(t){wi=t}function Qs(){wi=null,Jo=0}function hu(){return Jo++}const pn=Symbol("haunted.phase"),di=Symbol("haunted.hook"),er=Symbol("haunted.update"),tr=Symbol("haunted.commit"),ze=Symbol("haunted.effects"),Et=Symbol("haunted.layoutEffects"),Ln="haunted.context";class du{update;host;virtual;[di];[ze];[Et];constructor(e,i){this.update=e,this.host=i,this[di]=new Map,this[ze]=[],this[Et]=[]}run(e){Zs(this);let i=e();return Qs(),i}_runEffects(e){let i=this[e];Zs(this);for(let n of i)n.call(this);Qs()}runEffects(){this._runEffects(ze)}runLayoutEffects(){this._runEffects(Et)}teardown(){this[di].forEach(i=>{typeof i.teardown=="function"&&i.teardown(!0)})}}const pu=Promise.resolve().then.bind(Promise.resolve());function Xo(){let t=[],e;function i(){e=null;let n=t;t=[];for(var s=0,r=n.length;s<r;s++)n[s]()}return function(n){t.push(n),e==null&&(e=pu(i))}}const fu=Xo(),ir=Xo();class mu{renderer;host;state;[pn];_updateQueued;_active;constructor(e,i){this.renderer=e,this.host=i,this.state=new du(this.update.bind(this),i),this[pn]=null,this._updateQueued=!1,this._active=!0}update(){this._active&&(this._updateQueued||(fu(()=>{let e=this.handlePhase(er);ir(()=>{this.handlePhase(tr,e),ir(()=>{this.handlePhase(ze)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,i){switch(this[pn]=e,e){case tr:this.commit(i),this.runEffects(Et);return;case er:return this.render();case ze:return this.runEffects(ze)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const us=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},gu=t=>t?.map(e=>typeof e=="string"?us(e):e),_u=(t,...e)=>t.flatMap((i,n)=>[i,e[n]||""]).join(""),Ce=_u,yu=(t="")=>t.replace(/-+([a-z])?/g,(e,i)=>i?i.toUpperCase():"");function bu(t){class e extends mu{frag;renderResult;constructor(s,r,o){super(s,o||r),this.frag=r}commit(s){this.renderResult=t(s,this.frag)}}function i(n,s,r){const o=(r||s||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:l=!0,shadowRootInit:c={},styleSheets:u}=r||s||{},h=gu(n.styleSheets||u);class d extends o{_scheduler;static get observedAttributes(){return n.observedAttributes||a||[]}constructor(){if(super(),l===!1)this._scheduler=new e(n,this);else{const g=this.attachShadow({mode:"open",...c});h&&(g.adoptedStyleSheets=h),this._scheduler=new e(n,g,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(g,_,y){if(_===y)return;let b=y===""?!0:y;Reflect.set(this,yu(g),b)}}function p(m){let g=m,_=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return g},set(y){_&&g===y||(_=!0,g=y,this._scheduler&&this._scheduler.update())}})}const f=new Proxy(o.prototype,{getPrototypeOf(m){return m},set(m,g,_,y){let b;return g in m?(b=Object.getOwnPropertyDescriptor(m,g),b&&b.set?(b.set.call(y,_),!0):(Reflect.set(m,g,_,y),!0)):(typeof g=="symbol"||g[0]==="_"?b={enumerable:!0,configurable:!0,writable:!0,value:_}:b=p(_),Object.defineProperty(y,g,b),b.set&&b.set.call(y,_),!0)}});return Object.setPrototypeOf(d.prototype,f),d}return i}class Oe{id;state;constructor(e,i){this.id=e,this.state=i}}function vu(t,...e){let i=hu(),n=wi[di],s=n.get(i);return s||(s=new t(i,wi,...e),n.set(i,s)),s.update(...e)}function ke(t){return vu.bind(null,t)}function Go(t){return ke(class extends Oe{callback;lastValues;values;_teardown;constructor(e,i,n,s){super(e,i),t(i,this)}update(e,i){this.callback=e,this.values=i}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,i)=>this.lastValues[i]!==e)}})}function Zo(t,e){t[ze].push(e)}const R=Go(Zo),wu=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,Qo=ke(class extends Oe{Context;value;_ranEffect;_unsubscribe;constructor(t,e,i){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Zo(e,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};wu(this.state.host).dispatchEvent(new CustomEvent(Ln,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:n=null,value:s}=e;this.value=n?s:t.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}});function xu(t){return e=>{const i={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(Ln,this)}disconnectedCallback(){this.removeEventListener(Ln,this)}handleEvent(n){const{detail:s}=n;s.Context===i&&(s.value=this.value,s.unsubscribe=this.unsubscribe.bind(this,s.callback),this.listeners.add(s.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let s of this.listeners)s(n)}get value(){return this._value}},Consumer:t(function({render:n}){const s=Qo(i);return n(s)},{useShadowDOM:!1}),defaultValue:e};return i}}const z=ke(class extends Oe{value;values;constructor(t,e,i,n){super(t,e),this.value=i(),this.values=n}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((e,i)=>this.values[i]!==e)}}),D=(t,e)=>z(()=>t,e);function Cu(t,e){t[Et].push(e)}const zn=Go(Cu),de=ke(class extends Oe{args;constructor(t,e,i){super(t,e),this.updater=this.updater.bind(this),typeof i=="function"&&(i=i()),this.makeArgs(i)}update(){return this.args}updater(t){const[e]=this.args;typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}}),Su=ke(class extends Oe{reducer;currentState;constructor(t,e,i,n,s){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=s!==void 0?s(n):n}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}}),Eu=/([A-Z])/gu;ke(class extends Oe{property;eventName;constructor(t,e,i,n){if(super(t,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=i,this.eventName=i.replace(Eu,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof n=="function"&&(n=n()),n!=null&&this.updateProp(n))}update(t,e){return[this.state.host[this.property],this.updater]}updater(t){const e=this.state.host[this.property];typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&this.updateProp(t)}updateProp(t){this.notify(t).defaultPrevented||(this.state.host[this.property]=t)}notify(t){const e=new CustomEvent(this.eventName,{detail:{value:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(e),e}});function ea(t){return z(()=>({current:t}),[])}function Au({render:t}){const e=bu(t),i=xu(e);return{component:e,createContext:i}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},ge=t=>(...e)=>({_$litDirective$:t,values:e});let Ue=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,n){this._$Ct=e,this._$AM=i,this._$Ci=n}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const At=(t,e)=>{const i=t._$AN;if(i===void 0)return!1;for(const n of i)n._$AO?.(e,!1),At(n,e);return!0},xi=t=>{let e,i;do{if((e=t._$AM)===void 0)break;i=e._$AN,i.delete(t),t=e}while(i?.size===0)},ta=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(i===void 0)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),Ou(e)}};function Pu(t){this._$AN!==void 0?(xi(this),this._$AM=t,ta(this)):this._$AM=t}function Tu(t,e=!1,i=0){const n=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(n))for(let r=i;r<n.length;r++)At(n[r],!1),xi(n[r]);else n!=null&&(At(n,!1),xi(n));else At(this,t)}const Ou=t=>{t.type==re.CHILD&&(t._$AP??=Tu,t._$AQ??=Pu)};class Wi extends Ue{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,i,n){super._$AT(e,i,n),ta(this),this.isConnected=e._$AU}_$AO(e,i=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),i&&(At(this,e),xi(this))}setValue(e){if(Ao(this._$Ct))this._$Ct._$AI(e,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=e,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}const{component:Q,createContext:ku}=Au({render:Dl}),Iu={duration:250},ia=t=>(e,i,n)=>{const s="max"+t.charAt(0).toUpperCase()+t.slice(1);Object.assign(e.style,{[s]:"",display:""});const{[t]:r}=e.getBoundingClientRect(),o=[0,r],[a,l]=i?o:o.slice().reverse(),c=e.animate([{[s]:`${a}px`},{[s]:`${l}px`}],{...Iu,...n});c.onfinish=()=>Object.assign(e.style,{[s]:"",display:i?"":"none"})};function Nu(t){return()=>t}const Ru=Nu(),na=Ru,it=t=>t;function Mg(t,...e){return typeof t=="function"?t(...e):t}const sa=ku(()=>na);customElements.define("cosmoz-keybinding-provider",sa.Provider);const at=t=>{const e=z(()=>({}),[]);return z(()=>Object.assign(e,t),[e,...Object.values(t)])},Lu=(t,e)=>{const i=Qo(sa),n=at(t);R(()=>i(n),e)},nr=t=>t.matches(":focus-within"),ra=({disabled:t,onFocus:e})=>{const[i,n]=de(),{focused:s,closed:r}=i||{},o=s&&!t,a=at({closed:r,onFocus:e}),l=D(u=>n(h=>({...h,closed:u})),[]),c=D(u=>{const h=u.currentTarget;return nr(h)?n(d=>({focused:!0,closed:!d?.closed})):h.focus()},[]);return R(()=>{if(!o)return;const u=h=>{if(h.defaultPrevented)return;const{closed:d}=a;h.key==="Escape"&&!d?(h.preventDefault(),l(!0)):["ArrowUp","Up"].includes(h.key)&&d&&(h.preventDefault(),l(!1))};return document.addEventListener("keydown",u,!0),()=>document.removeEventListener("keydown",u,!0)},[o]),{focused:o,active:o&&!r,setClosed:l,onToggle:c,onFocus:D(u=>{const h=nr(u.currentTarget);n({focused:h}),a.onFocus?.(h)},[a])}},sr=["focusin","focusout"],zu=t=>{const e=ra(t),{onFocus:i}=e;return R(()=>(t.setAttribute("tabindex","0"),sr.forEach(n=>t.addEventListener(n,i)),()=>{sr.forEach(n=>t.removeEventListener(n,i))}),[]),e},Mu=Ce`
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
`,Du=()=>O` <slot></slot> `;customElements.define("cosmoz-dropdown-list",Q(Du,{styleSheets:[Mu]}));const $u=({placement:t})=>O` <cosmoz-dropdown
		.placement=${t}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;customElements.define("cosmoz-dropdown-menu",Q($u));/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pe(t,e,i){return t?e(t):i?.(t)}const fn=new WeakMap,$e=ge(class extends Wi{render(t){return xe}update(t,[e]){const i=e!==this.G;return i&&this.G!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),xe}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let i=fn.get(e);i===void 0&&(i=new WeakMap,fn.set(e,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?fn.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oa="important",Fu=" !"+oa,aa=ge(class extends Ue{constructor(t){if(super(t),t.type!==re.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const n=t[i];return n==null?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`}),"")}update(t,[e]){const{style:i}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const n of this.ft)e[n]==null&&(this.ft.delete(n),n.includes("-")?i.removeProperty(n):i[n]=null);for(const n in e){const s=e[n];if(s!=null){this.ft.add(n);const r=typeof s=="string"&&s.endsWith(Fu);n.includes("-")||r?i.setProperty(n,r?s.slice(0,-11):s,r?oa:""):i[n]=s}}return J}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bu={},la=ge(class extends Ue{constructor(){super(...arguments),this.ot=Bu}render(t,e){return e()}update(t,[e,i]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every(((n,s)=>n===this.ot[s])))return J}else if(this.ot===e)return J;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,i)}}),ca=(t=HTMLElement)=>class extends t{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},Hu=Ce`
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
`,Vu=()=>O`<div class="wrap" part="wrap"><slot></slot></div>`;customElements.define("cosmoz-dropdown-content",ca(Q(Vu,{styleSheets:[Hu]})));const nt=Math.min,ne=Math.max,Ci=Math.round,Qt=Math.floor,fe=t=>({x:t,y:t}),ju={left:"right",right:"left",bottom:"top",top:"bottom"},Uu={start:"end",end:"start"};function rr(t,e,i){return ne(t,nt(e,i))}function qi(t,e){return typeof t=="function"?t(e):t}function Fe(t){return t.split("-")[0]}function Yi(t){return t.split("-")[1]}function ua(t){return t==="x"?"y":"x"}function ha(t){return t==="y"?"height":"width"}const Ku=new Set(["top","bottom"]);function Ee(t){return Ku.has(Fe(t))?"y":"x"}function da(t){return ua(Ee(t))}function Wu(t,e,i){i===void 0&&(i=!1);const n=Yi(t),s=da(t),r=ha(s);let o=s==="x"?n===(i?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(o=Si(o)),[o,Si(o)]}function qu(t){const e=Si(t);return[Mn(t),e,Mn(e)]}function Mn(t){return t.replace(/start|end/g,e=>Uu[e])}const or=["left","right"],ar=["right","left"],Yu=["top","bottom"],Ju=["bottom","top"];function Xu(t,e,i){switch(t){case"top":case"bottom":return i?e?ar:or:e?or:ar;case"left":case"right":return e?Yu:Ju;default:return[]}}function Gu(t,e,i,n){const s=Yi(t);let r=Xu(Fe(t),i==="start",n);return s&&(r=r.map(o=>o+"-"+s),e&&(r=r.concat(r.map(Mn)))),r}function Si(t){return t.replace(/left|right|bottom|top/g,e=>ju[e])}function Zu(t){return{top:0,right:0,bottom:0,left:0,...t}}function Qu(t){return typeof t!="number"?Zu(t):{top:t,right:t,bottom:t,left:t}}function Ei(t){const{x:e,y:i,width:n,height:s}=t;return{width:n,height:s,top:i,left:e,right:e+n,bottom:i+s,x:e,y:i}}function lr(t,e,i){let{reference:n,floating:s}=t;const r=Ee(e),o=da(e),a=ha(o),l=Fe(e),c=r==="y",u=n.x+n.width/2-s.width/2,h=n.y+n.height/2-s.height/2,d=n[a]/2-s[a]/2;let p;switch(l){case"top":p={x:u,y:n.y-s.height};break;case"bottom":p={x:u,y:n.y+n.height};break;case"right":p={x:n.x+n.width,y:h};break;case"left":p={x:n.x-s.width,y:h};break;default:p={x:n.x,y:n.y}}switch(Yi(e)){case"start":p[o]-=d*(i&&c?-1:1);break;case"end":p[o]+=d*(i&&c?-1:1);break}return p}const eh=async(t,e,i)=>{const{placement:n="bottom",strategy:s="absolute",middleware:r=[],platform:o}=i,a=r.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(e));let c=await o.getElementRects({reference:t,floating:e,strategy:s}),{x:u,y:h}=lr(c,n,l),d=n,p={},f=0;for(let m=0;m<a.length;m++){const{name:g,fn:_}=a[m],{x:y,y:b,data:w,reset:x}=await _({x:u,y:h,initialPlacement:n,placement:d,strategy:s,middlewareData:p,rects:c,platform:o,elements:{reference:t,floating:e}});u=y??u,h=b??h,p={...p,[g]:{...p[g],...w}},x&&f<=50&&(f++,typeof x=="object"&&(x.placement&&(d=x.placement),x.rects&&(c=x.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:s}):x.rects),{x:u,y:h}=lr(c,d,l)),m=-1)}return{x:u,y:h,placement:d,strategy:s,middlewareData:p}};async function hs(t,e){var i;e===void 0&&(e={});const{x:n,y:s,platform:r,rects:o,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:h="floating",altBoundary:d=!1,padding:p=0}=qi(e,t),f=Qu(p),g=a[d?h==="floating"?"reference":"floating":h],_=Ei(await r.getClippingRect({element:(i=await(r.isElement==null?void 0:r.isElement(g)))==null||i?g:g.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),y=h==="floating"?{x:n,y:s,width:o.floating.width,height:o.floating.height}:o.reference,b=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),w=await(r.isElement==null?void 0:r.isElement(b))?await(r.getScale==null?void 0:r.getScale(b))||{x:1,y:1}:{x:1,y:1},x=Ei(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:y,offsetParent:b,strategy:l}):y);return{top:(_.top-x.top+f.top)/w.y,bottom:(x.bottom-_.bottom+f.bottom)/w.y,left:(_.left-x.left+f.left)/w.x,right:(x.right-_.right+f.right)/w.x}}const th=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var i,n;const{placement:s,middlewareData:r,rects:o,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:u=!0,crossAxis:h=!0,fallbackPlacements:d,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:m=!0,...g}=qi(t,e);if((i=r.arrow)!=null&&i.alignmentOffset)return{};const _=Fe(s),y=Ee(a),b=Fe(a)===a,w=await(l.isRTL==null?void 0:l.isRTL(c.floating)),x=d||(b||!m?[Si(a)]:qu(a)),k=f!=="none";!d&&k&&x.push(...Gu(a,m,f,w));const E=[a,...x],H=await hs(e,g),$=[];let U=((n=r.flip)==null?void 0:n.overflows)||[];if(u&&$.push(H[_]),h){const L=Wu(s,o,w);$.push(H[L[0]],H[L[1]])}if(U=[...U,{placement:s,overflows:$}],!$.every(L=>L<=0)){var V,X;const L=(((V=r.flip)==null?void 0:V.index)||0)+1,M=E[L];if(M&&(!(h==="alignment"?y!==Ee(M):!1)||U.every(N=>Ee(N.placement)===y?N.overflows[0]>0:!0)))return{data:{index:L,overflows:U},reset:{placement:M}};let F=(X=U.filter(A=>A.overflows[0]<=0).sort((A,N)=>A.overflows[1]-N.overflows[1])[0])==null?void 0:X.placement;if(!F)switch(p){case"bestFit":{var K;const A=(K=U.filter(N=>{if(k){const W=Ee(N.placement);return W===y||W==="y"}return!0}).map(N=>[N.placement,N.overflows.filter(W=>W>0).reduce((W,ye)=>W+ye,0)]).sort((N,W)=>N[1]-W[1])[0])==null?void 0:K[0];A&&(F=A);break}case"initialPlacement":F=a;break}if(s!==F)return{reset:{placement:F}}}return{}}}},ih=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:n,placement:s}=e,{mainAxis:r=!0,crossAxis:o=!1,limiter:a={fn:g=>{let{x:_,y}=g;return{x:_,y}}},...l}=qi(t,e),c={x:i,y:n},u=await hs(e,l),h=Ee(Fe(s)),d=ua(h);let p=c[d],f=c[h];if(r){const g=d==="y"?"top":"left",_=d==="y"?"bottom":"right",y=p+u[g],b=p-u[_];p=rr(y,p,b)}if(o){const g=h==="y"?"top":"left",_=h==="y"?"bottom":"right",y=f+u[g],b=f-u[_];f=rr(y,f,b)}const m=a.fn({...e,[d]:p,[h]:f});return{...m,data:{x:m.x-i,y:m.y-n,enabled:{[d]:r,[h]:o}}}}}},nh=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var i,n;const{placement:s,rects:r,platform:o,elements:a}=e,{apply:l=()=>{},...c}=qi(t,e),u=await hs(e,c),h=Fe(s),d=Yi(s),p=Ee(s)==="y",{width:f,height:m}=r.floating;let g,_;h==="top"||h==="bottom"?(g=h,_=d===(await(o.isRTL==null?void 0:o.isRTL(a.floating))?"start":"end")?"left":"right"):(_=h,g=d==="end"?"top":"bottom");const y=m-u.top-u.bottom,b=f-u.left-u.right,w=nt(m-u[g],y),x=nt(f-u[_],b),k=!e.middlewareData.shift;let E=w,H=x;if((i=e.middlewareData.shift)!=null&&i.enabled.x&&(H=b),(n=e.middlewareData.shift)!=null&&n.enabled.y&&(E=y),k&&!d){const U=ne(u.left,0),V=ne(u.right,0),X=ne(u.top,0),K=ne(u.bottom,0);p?H=f-2*(U!==0||V!==0?U+V:ne(u.left,u.right)):E=m-2*(X!==0||K!==0?X+K:ne(u.top,u.bottom))}await l({...e,availableWidth:H,availableHeight:E});const $=await o.getDimensions(a.floating);return f!==$.width||m!==$.height?{reset:{rects:!0}}:{}}}};function Ji(){return typeof window<"u"}function lt(t){return pa(t)?(t.nodeName||"").toLowerCase():"#document"}function se(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function _e(t){var e;return(e=(pa(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function pa(t){return Ji()?t instanceof Node||t instanceof se(t).Node:!1}function oe(t){return Ji()?t instanceof Element||t instanceof se(t).Element:!1}function me(t){return Ji()?t instanceof HTMLElement||t instanceof se(t).HTMLElement:!1}function cr(t){return!Ji()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof se(t).ShadowRoot}const sh=new Set(["inline","contents"]);function Kt(t){const{overflow:e,overflowX:i,overflowY:n,display:s}=ae(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+i)&&!sh.has(s)}const rh=new Set(["table","td","th"]);function oh(t){return rh.has(lt(t))}const ah=[":popover-open",":modal"];function Xi(t){return ah.some(e=>{try{return t.matches(e)}catch{return!1}})}const lh=["transform","translate","scale","rotate","perspective"],ch=["transform","translate","scale","rotate","perspective","filter"],uh=["paint","layout","strict","content"];function ds(t){const e=ps(),i=oe(t)?ae(t):t;return lh.some(n=>i[n]?i[n]!=="none":!1)||(i.containerType?i.containerType!=="normal":!1)||!e&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!e&&(i.filter?i.filter!=="none":!1)||ch.some(n=>(i.willChange||"").includes(n))||uh.some(n=>(i.contain||"").includes(n))}function hh(t){let e=Pe(t);for(;me(e)&&!st(e);){if(ds(e))return e;if(Xi(e))return null;e=Pe(e)}return null}function ps(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const dh=new Set(["html","body","#document"]);function st(t){return dh.has(lt(t))}function ae(t){return se(t).getComputedStyle(t)}function Gi(t){return oe(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Pe(t){if(lt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||cr(t)&&t.host||_e(t);return cr(e)?e.host:e}function fa(t){const e=Pe(t);return st(e)?t.ownerDocument?t.ownerDocument.body:t.body:me(e)&&Kt(e)?e:fa(e)}function Ft(t,e,i){var n;e===void 0&&(e=[]),i===void 0&&(i=!0);const s=fa(t),r=s===((n=t.ownerDocument)==null?void 0:n.body),o=se(s);if(r){const a=Dn(o);return e.concat(o,o.visualViewport||[],Kt(s)?s:[],a&&i?Ft(a):[])}return e.concat(s,Ft(s,[],i))}function Dn(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function ma(t){const e=ae(t);let i=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const s=me(t),r=s?t.offsetWidth:i,o=s?t.offsetHeight:n,a=Ci(i)!==r||Ci(n)!==o;return a&&(i=r,n=o),{width:i,height:n,$:a}}function fs(t){return oe(t)?t:t.contextElement}function Ze(t){const e=fs(t);if(!me(e))return fe(1);const i=e.getBoundingClientRect(),{width:n,height:s,$:r}=ma(e);let o=(r?Ci(i.width):i.width)/n,a=(r?Ci(i.height):i.height)/s;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const ph=fe(0);function ga(t){const e=se(t);return!ps()||!e.visualViewport?ph:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function fh(t,e,i){return e===void 0&&(e=!1),!i||e&&i!==se(t)?!1:e}function Be(t,e,i,n){e===void 0&&(e=!1),i===void 0&&(i=!1);const s=t.getBoundingClientRect(),r=fs(t);let o=fe(1);e&&(n?oe(n)&&(o=Ze(n)):o=Ze(t));const a=fh(r,i,n)?ga(r):fe(0);let l=(s.left+a.x)/o.x,c=(s.top+a.y)/o.y,u=s.width/o.x,h=s.height/o.y;if(r){const d=se(r),p=n&&oe(n)?se(n):n;let f=d,m=Dn(f);for(;m&&n&&p!==f;){const g=Ze(m),_=m.getBoundingClientRect(),y=ae(m),b=_.left+(m.clientLeft+parseFloat(y.paddingLeft))*g.x,w=_.top+(m.clientTop+parseFloat(y.paddingTop))*g.y;l*=g.x,c*=g.y,u*=g.x,h*=g.y,l+=b,c+=w,f=se(m),m=Dn(f)}}return Ei({width:u,height:h,x:l,y:c})}function Zi(t,e){const i=Gi(t).scrollLeft;return e?e.left+i:Be(_e(t)).left+i}function _a(t,e){const i=t.getBoundingClientRect(),n=i.left+e.scrollLeft-Zi(t,i),s=i.top+e.scrollTop;return{x:n,y:s}}function mh(t){let{elements:e,rect:i,offsetParent:n,strategy:s}=t;const r=s==="fixed",o=_e(n),a=e?Xi(e.floating):!1;if(n===o||a&&r)return i;let l={scrollLeft:0,scrollTop:0},c=fe(1);const u=fe(0),h=me(n);if((h||!h&&!r)&&((lt(n)!=="body"||Kt(o))&&(l=Gi(n)),me(n))){const p=Be(n);c=Ze(n),u.x=p.x+n.clientLeft,u.y=p.y+n.clientTop}const d=o&&!h&&!r?_a(o,l):fe(0);return{width:i.width*c.x,height:i.height*c.y,x:i.x*c.x-l.scrollLeft*c.x+u.x+d.x,y:i.y*c.y-l.scrollTop*c.y+u.y+d.y}}function gh(t){return Array.from(t.getClientRects())}function _h(t){const e=_e(t),i=Gi(t),n=t.ownerDocument.body,s=ne(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),r=ne(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let o=-i.scrollLeft+Zi(t);const a=-i.scrollTop;return ae(n).direction==="rtl"&&(o+=ne(e.clientWidth,n.clientWidth)-s),{width:s,height:r,x:o,y:a}}const ur=25;function yh(t,e){const i=se(t),n=_e(t),s=i.visualViewport;let r=n.clientWidth,o=n.clientHeight,a=0,l=0;if(s){r=s.width,o=s.height;const u=ps();(!u||u&&e==="fixed")&&(a=s.offsetLeft,l=s.offsetTop)}const c=Zi(n);if(c<=0){const u=n.ownerDocument,h=u.body,d=getComputedStyle(h),p=u.compatMode==="CSS1Compat"&&parseFloat(d.marginLeft)+parseFloat(d.marginRight)||0,f=Math.abs(n.clientWidth-h.clientWidth-p);f<=ur&&(r-=f)}else c<=ur&&(r+=c);return{width:r,height:o,x:a,y:l}}const bh=new Set(["absolute","fixed"]);function vh(t,e){const i=Be(t,!0,e==="fixed"),n=i.top+t.clientTop,s=i.left+t.clientLeft,r=me(t)?Ze(t):fe(1),o=t.clientWidth*r.x,a=t.clientHeight*r.y,l=s*r.x,c=n*r.y;return{width:o,height:a,x:l,y:c}}function hr(t,e,i){let n;if(e==="viewport")n=yh(t,i);else if(e==="document")n=_h(_e(t));else if(oe(e))n=vh(e,i);else{const s=ga(t);n={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return Ei(n)}function ya(t,e){const i=Pe(t);return i===e||!oe(i)||st(i)?!1:ae(i).position==="fixed"||ya(i,e)}function wh(t,e){const i=e.get(t);if(i)return i;let n=Ft(t,[],!1).filter(a=>oe(a)&&lt(a)!=="body"),s=null;const r=ae(t).position==="fixed";let o=r?Pe(t):t;for(;oe(o)&&!st(o);){const a=ae(o),l=ds(o);!l&&a.position==="fixed"&&(s=null),(r?!l&&!s:!l&&a.position==="static"&&!!s&&bh.has(s.position)||Kt(o)&&!l&&ya(t,o))?n=n.filter(u=>u!==o):s=a,o=Pe(o)}return e.set(t,n),n}function xh(t){let{element:e,boundary:i,rootBoundary:n,strategy:s}=t;const o=[...i==="clippingAncestors"?Xi(e)?[]:wh(e,this._c):[].concat(i),n],a=o[0],l=o.reduce((c,u)=>{const h=hr(e,u,s);return c.top=ne(h.top,c.top),c.right=nt(h.right,c.right),c.bottom=nt(h.bottom,c.bottom),c.left=ne(h.left,c.left),c},hr(e,a,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Ch(t){const{width:e,height:i}=ma(t);return{width:e,height:i}}function Sh(t,e,i){const n=me(e),s=_e(e),r=i==="fixed",o=Be(t,!0,r,e);let a={scrollLeft:0,scrollTop:0};const l=fe(0);function c(){l.x=Zi(s)}if(n||!n&&!r)if((lt(e)!=="body"||Kt(s))&&(a=Gi(e)),n){const p=Be(e,!0,r,e);l.x=p.x+e.clientLeft,l.y=p.y+e.clientTop}else s&&c();r&&!n&&s&&c();const u=s&&!n&&!r?_a(s,a):fe(0),h=o.left+a.scrollLeft-l.x-u.x,d=o.top+a.scrollTop-l.y-u.y;return{x:h,y:d,width:o.width,height:o.height}}function mn(t){return ae(t).position==="static"}function dr(t,e){if(!me(t)||ae(t).position==="fixed")return null;if(e)return e(t);let i=t.offsetParent;return _e(t)===i&&(i=i.ownerDocument.body),i}function ba(t,e){const i=se(t);if(Xi(t))return i;if(!me(t)){let s=Pe(t);for(;s&&!st(s);){if(oe(s)&&!mn(s))return s;s=Pe(s)}return i}let n=dr(t,e);for(;n&&oh(n)&&mn(n);)n=dr(n,e);return n&&st(n)&&mn(n)&&!ds(n)?i:n||hh(t)||i}const Eh=async function(t){const e=this.getOffsetParent||ba,i=this.getDimensions,n=await i(t.floating);return{reference:Sh(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function Ah(t){return ae(t).direction==="rtl"}const Ph={convertOffsetParentRelativeRectToViewportRelativeRect:mh,getDocumentElement:_e,getClippingRect:xh,getOffsetParent:ba,getElementRects:Eh,getClientRects:gh,getDimensions:Ch,getScale:Ze,isElement:oe,isRTL:Ah};function va(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Th(t,e){let i=null,n;const s=_e(t);function r(){var a;clearTimeout(n),(a=i)==null||a.disconnect(),i=null}function o(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),r();const c=t.getBoundingClientRect(),{left:u,top:h,width:d,height:p}=c;if(a||e(),!d||!p)return;const f=Qt(h),m=Qt(s.clientWidth-(u+d)),g=Qt(s.clientHeight-(h+p)),_=Qt(u),b={rootMargin:-f+"px "+-m+"px "+-g+"px "+-_+"px",threshold:ne(0,nt(1,l))||1};let w=!0;function x(k){const E=k[0].intersectionRatio;if(E!==l){if(!w)return o();E?o(!1,E):n=setTimeout(()=>{o(!1,1e-7)},1e3)}E===1&&!va(c,t.getBoundingClientRect())&&o(),w=!1}try{i=new IntersectionObserver(x,{...b,root:s.ownerDocument})}catch{i=new IntersectionObserver(x,b)}i.observe(t)}return o(!0),r}function Oh(t,e,i,n){n===void 0&&(n={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,c=fs(t),u=s||r?[...c?Ft(c):[],...Ft(e)]:[];u.forEach(_=>{s&&_.addEventListener("scroll",i,{passive:!0}),r&&_.addEventListener("resize",i)});const h=c&&a?Th(c,i):null;let d=-1,p=null;o&&(p=new ResizeObserver(_=>{let[y]=_;y&&y.target===c&&p&&(p.unobserve(e),cancelAnimationFrame(d),d=requestAnimationFrame(()=>{var b;(b=p)==null||b.observe(e)})),i()}),c&&!l&&p.observe(c),p.observe(e));let f,m=l?Be(t):null;l&&g();function g(){const _=Be(t);m&&!va(m,_)&&i(),m=_,f=requestAnimationFrame(g)}return i(),()=>{var _;u.forEach(y=>{s&&y.removeEventListener("scroll",i),r&&y.removeEventListener("resize",i)}),h?.(),(_=p)==null||_.disconnect(),p=null,l&&cancelAnimationFrame(f)}}const kh=ih,Ih=th,Nh=nh,Rh=(t,e,i)=>{const n=new Map,s={platform:Ph,...i},r={...s.platform,_c:n};return eh(t,e,{...s,platform:r})},wa=[Ih({fallbackAxisSideDirection:"start",crossAxis:!1}),kh()],xa=({placement:t="bottom-start",strategy:e,middleware:i=wa}={})=>{const[n,s]=de(),[r,o]=de(),[a,l]=de();return R(()=>{if(!n||!(r instanceof HTMLElement)){l(void 0);return}return Oh(n,r,()=>Rh(n,r,{placement:t,strategy:e,middleware:i}).then(l))},[n,r,t,e,i]),{setReference:s,setFloating:o,styles:z(()=>a?{left:`${a.x}px`,top:`${a.y}px`}:{},[a?.x,a?.y])}},Lh=t=>t.preventDefault(),zh=Ce`
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
`,Mh=t=>{const{placement:e,strategy:i,middleware:n,render:s}=t,{active:r,onToggle:o}=zu(t),{styles:a,setReference:l,setFloating:c}=xa({placement:e,strategy:i,middleware:n});return O` <div class="anchor" part="anchor" ${$e(l)}>
			<button
				@mousedown=${Lh}
				@click=${o}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		${pe(r,()=>O`<cosmoz-dropdown-content
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					style="${aa(a)}"
					@connected=${u=>u.target.showPopover?.()}
					${$e(c)}
					><slot></slot>${la([s],()=>s?.()||xe)}</cosmoz-dropdown-content
				> `)}`};customElements.define("cosmoz-dropdown",Q(Mh,{styleSheets:[zh]}));function Dh(t){return t.boundingClientRect.height===0}function $h(t){return t.getBoundingClientRect().height===0}const Fh=t=>{if(t.element.tagName!=="SLOT")throw new Error("Overflow directive must be used on a slot element")};function Bh(t,e){t.forEach(i=>{$h(i)||(e.add(i),t.delete(i))})}const Hh=(t,e)=>{let i=new Set,n=new Set,s=new Set;const r=new IntersectionObserver(a=>{a.forEach(l=>{const c=l.target;l.boundingClientRect.width===l.intersectionRect.width&&l.intersectionRect.height!==0?(i.add(c),n.delete(c),s.delete(c)):Dh(l)?(i.delete(c),n.delete(c),s.add(c)):(i.delete(c),n.add(c),s.delete(c))}),Bh(s,n),e({visible:i,overflowing:n,hidden:s})},{root:t.parentElement,threshold:[0,.5,1]}),o=()=>{const a=Array.from(t.assignedElements({flatten:!0})),l=new Set,c=new Set,u=new Set;for(const h of a)i.has(h)?l.add(h):n.has(h)?c.add(h):s.has(h)?u.add(h):r.observe(h);i=l,n=c,s=u,e({visible:i,overflowing:n,hidden:s})};return o(),t.addEventListener("slotchange",o),()=>{t.removeEventListener("slotchange",o),r.disconnect()}};class Vh extends Wi{observer;slot;cleanup;render(){return J}update(e,[i]){return Fh(e),this.slot!==e.element&&(this.cleanup&&(this.cleanup(),this.cleanup=void 0),this.slot=e.element,this.cleanup=Hh(this.slot,i)),J}}const jh=ge(Vh),Uh=Ce`
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
`,Kh=Symbol("openMenu"),Wh=t=>{const e=t.shadowRoot?.querySelector("#dropdown");if(!e||e.hasAttribute("hidden"))return;e.shadowRoot?.querySelector("cosmoz-dropdown")?.shadowRoot?.querySelector("#dropdownButton")?.click()},qh=t=>{const[e,i]=de({visible:new Set,overflowing:new Set});R(()=>{t.dispatchEvent(new CustomEvent("reflow",{detail:e}))},[e]);const n=z(()=>[...e.visible,...e.overflowing],[e]),s=z(()=>n.map(l=>({element:l,priority:Number(l.dataset.priority??0),text:l.textContent?.trim()||""})).toSorted((l,c)=>c.priority-l.priority),[n]),{maxToolbarItems:r=1}=t,o=Math.min(r,e.visible.size);R(()=>{s.forEach(({element:l,priority:c},u)=>{const h=u<o;l.dataset.visibility=h?"visible":"hidden",l.style.order=String(-c)})},[s,o]);const a=z(()=>s.slice(o).sort((l,c)=>c.element.compareDocumentPosition(l.element)-l.element.compareDocumentPosition(c.element)),[s,o]);return R(()=>{t.toggleAttribute("has-menu-items",a.length>0)},[a.length]),{setButtonStates:i,menuButtons:a}},Yh=t=>{const{active:e=!1}=t;Lu({activity:Kh,callback:()=>Wh(t),check:()=>e&&!t.hasAttribute("hide-actions"),element:()=>t.shadowRoot?.querySelector("#dropdown")},[e]);const{setButtonStates:i,menuButtons:n}=qh(t),s=z(()=>ia("height"),[]);return zn(()=>{s(t,e)},[e]),O` <div id="bar" part="bar">
		<div id="info" part="info"><slot name="info"></slot></div>
		<div id="buttonContainer" part="buttons">
			<slot id="bottomBarToolbar" ${jh(i)}></slot>
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
			${Hl(n,r=>O`
					<button @click=${()=>r.element.click()}>
						${r.text}
					</button>
				`)}
		</cosmoz-dropdown-menu>
		<slot name="extra" id="extraSlot"></slot>
	</div>`};customElements.define("cosmoz-bottom-bar",Q(Yh,{observedAttributes:["active","max-toolbar-items"],styleSheets:[Uh]}));const Ai=`
	<slot name="extra" slot="extra"></slot>
`;O(Object.assign([Ai],{raw:[Ai]}));j(Object.assign([Ai],{raw:[Ai]}));/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ms=ge(class extends Ue{constructor(t){if(super(t),t.type!==re.PROPERTY&&t.type!==re.ATTRIBUTE&&t.type!==re.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ao(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===J||e===xe)return e;const i=t.element,n=t.name;if(t.type===re.PROPERTY){if(e===i[n])return J}else if(t.type===re.BOOLEAN_ATTRIBUTE){if(!!e===i.hasAttribute(n))return J}else if(t.type===re.ATTRIBUTE&&i.getAttribute(n)===e+"")return J;return Po(t),e}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=t=>t??xe,gs=ke(class extends Oe{values;constructor(t,e,i,n){super(t,e),Object.assign(e.host,i),this.values=n}update(t,e){this.hasChanged(e)&&(this.values=e,Object.assign(this.state.host,t))}hasChanged(t=[]){return t.some((e,i)=>this.values[i]!==e)}}),Wt=ke(class extends Oe{update(){return this.state.host}}),Jh=/([A-Z])/gu,Bt=(t,e,i)=>{t[e]=i,t.dispatchEvent(new CustomEvent(e.replace(Jh,"-$1").toLowerCase()+"-changed",{detail:{value:i}}))},Dg=(t,e,i=[e])=>{const n=Wt();R(()=>{Bt(n,t,e)},i)},Ca=t=>{const e=ea(void 0),i=D(c=>e.current=c,[]),n=t.shadowRoot,s=D(c=>t.dispatchEvent(new Event(c.type,{bubbles:c.bubbles})),[]),r=D(c=>Bt(t,"value",c.target.value),[]),o=D(c=>Bt(t,"focused",c.type==="focus"),[]),a=D(()=>e.current?.focus(),[]),l=D(()=>{const c=e.current?.checkValidity();return t.toggleAttribute("invalid",!c),c},[]);return gs({focus:a,validate:l},[a,l]),R(()=>{const c=u=>{u.defaultPrevented||t.disabled||u.target.matches("input, textarea, label")||(u.preventDefault(),t.matches(":focus-within")||a())};return n.addEventListener("mousedown",c),()=>n.removeEventListener("mousedown",c)},[a]),{onChange:s,onFocus:o,onInput:r,onRef:i}},Xh=t=>z(()=>{if(t==null)return;const e=new RegExp(t,"u");return i=>{!i.defaultPrevented&&i.data&&!e.test(i.data)&&i.preventDefault()}},[t]),Sa=(t,{label:e,invalid:i,errorMessage:n})=>O`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${t}
				${pe(e,()=>O`<label for="input" part="label">${e}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${pe(i&&n,()=>O`<div class="error" part="error">${n}</div>`)}
	`,Ea=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],Gh=({placeholder:t,noLabelFloat:e,label:i})=>(e?i:void 0)||t||" ",Zh=Math.abs,Qh=(...t)=>t.some(e=>!!e),ed=(...t)=>t.join(""),td=(t,e,i)=>t?e:i,id=(t,e)=>e.indexOf(t)>-1,nd=(t,e)=>t===e,sd=t=>!!(t==null||Array.isArray(t)&&t.length===0||typeof t=="string"&&t.length===0||typeof t=="number"&&t===0),rd=(t,e)=>typeof t!="number"?"":t.toFixed(e),$g=Object.freeze(Object.defineProperty({__proto__:null,abs:Zh,anyTrue:Qh,concat:ed,ifElse:td,inArray:id,isEmpty:sd,isEqual:nd,toFixed:rd},Symbol.toStringTag,{value:"Module"})),od={isoBasic:/^\d{4}-\d{2}-\d{2}$/iu},ad=t=>typeof t=="string"&&od.isoBasic.test(t)?new Date(`${t}T00:00`):new Date(t),Fg=t=>{if(t==null)return;if(t instanceof Date&&!isNaN(t.getTime()))return t;if(!(typeof t=="number"||typeof t=="string"))return;const e=ad(t);if(!(e instanceof Date&&isNaN(e.getTime())))return e},pt=t=>t<10?"0"+t:t,Bg=t=>t instanceof Date?t.getFullYear()+"-"+pt(t.getMonth()+1)+"-"+pt(t.getDate())+"T"+pt(t.getHours())+":"+pt(t.getMinutes())+":"+pt(t.getSeconds())+"."+(t.getMilliseconds()/1e3).toFixed(3).slice(2,5):null,_s=(t,...e)=>t.flatMap((i,n)=>[i,e[n]??""]).join(""),ys=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},Hg=(t,e)=>{const i=class extends e{};return Object.assign(i.prototype,t),i},Aa=_s`
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
`,ld=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...Ea],cd=t=>{const{type:e="text",pattern:i,allowedPattern:n,autocomplete:s,value:r,readonly:o,disabled:a,min:l,max:c,step:u,maxlength:h}=t,{onChange:d,onFocus:p,onInput:f,onRef:m}=Ca(t),g=Xh(n);return gs({focus:()=>t.shadowRoot?.querySelector("#input")?.focus()},[]),Sa(O`
			<input
				${$e(m)}
				style="--chars: ${r?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${e}
				pattern=${Y(i)}
				autocomplete=${Y(s)}
				placeholder=${Gh(t)}
				?readonly=${o}
				?aria-disabled=${a}
				?disabled=${a}
				.value=${ms(r??"")}
				maxlength=${Y(h)}
				@beforeinput=${g}
				@input=${f}
				@change=${d}
				@focus=${p}
				@blur=${p}
				min=${Y(l)}
				max=${Y(c)}
				step=${Y(u)}
			/>
		`,t)};customElements.define("cosmoz-input",Q(cd,{observedAttributes:ld,styleSheets:[us(Aa)]}));const pr=t=>{t.style.height="",t.style.height=`${t.scrollHeight}px`},ud=(t,e=0)=>{if(e>0){const i=t.getAttribute("rows")??"",n=t.style.height;t.style.height="",t.setAttribute("rows",e),t.style.maxHeight=t.getBoundingClientRect().height+"px",t.style.height=n,t.setAttribute("rows",i)}},hd=t=>{const{value:e,maxRows:i}=t,n=z(()=>()=>t.shadowRoot.querySelector("#input"),[]);R(()=>ud(n(),i),[i,n]),R(()=>pr(n()),[n,e]),R(()=>{const s=n(),r=new ResizeObserver(()=>requestAnimationFrame(()=>pr(s)));return r.observe(s),()=>r.unobserve(s)},[n])},dd=["rows","placeholder",...Ea],pd=t=>{const{autocomplete:e,value:i,placeholder:n,readonly:s,disabled:r,rows:o,cols:a,maxlength:l}=t,{onChange:c,onFocus:u,onInput:h,onRef:d}=Ca(t);return hd(t),Sa(O`
			<textarea id="input" part="input"
				${$e(d)}
				autocomplete=${Y(e)}
				placeholder=${n||" "}
				rows=${o??1} cols=${Y(a)}
				?readonly=${s} ?aria-disabled=${r} ?disabled=${r}
				.value=${ms(i??"")} maxlength=${Y(l)} @input=${h}
				@change=${c} @focus=${u} @blur=${u}>`,t)};customElements.define("cosmoz-textarea",Q(pd,{observedAttributes:dd,styleSheets:[us(Aa)]}));/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Qi=!(window.ShadyDOM&&window.ShadyDOM.inUse);let Pi;function fr(t){t&&t.shimcssproperties?Pi=!1:Pi=Qi||!!(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)"))}let Ht;window.ShadyCSS&&window.ShadyCSS.cssBuild!==void 0&&(Ht=window.ShadyCSS.cssBuild);const Pa=!!(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&window.ShadyCSS.nativeCss!==void 0?Pi=window.ShadyCSS.nativeCss:window.ShadyCSS?(fr(window.ShadyCSS),window.ShadyCSS=void 0):fr(window.WebComponents&&window.WebComponents.flags);const bs=Pi;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class mr{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function Ta(t){return t=fd(t),Oa(md(t),t)}function fd(t){return t.replace(ve.comments,"").replace(ve.port,"")}function md(t){let e=new mr;e.start=0,e.end=t.length;let i=e;for(let n=0,s=t.length;n<s;n++)if(t[n]===Ia){i.rules||(i.rules=[]);let r=i,o=r.rules[r.rules.length-1]||null;i=new mr,i.start=n+1,i.parent=r,i.previous=o,r.rules.push(i)}else t[n]===Na&&(i.end=n+1,i=i.parent||e);return e}function Oa(t,e){let i=e.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=i.trim(),t.parent){let s=t.previous?t.previous.end:t.parent.start;i=e.substring(s,t.start-1),i=gd(i),i=i.replace(ve.multipleSpaces," "),i=i.substring(i.lastIndexOf(";")+1);let r=t.parsedSelector=t.selector=i.trim();t.atRule=r.indexOf(xd)===0,t.atRule?r.indexOf(wd)===0?t.type=Xe.MEDIA_RULE:r.match(ve.keyframesRule)&&(t.type=Xe.KEYFRAMES_RULE,t.keyframesName=t.selector.split(ve.multipleSpaces).pop()):r.indexOf(Ra)===0?t.type=Xe.MIXIN_RULE:t.type=Xe.STYLE_RULE}let n=t.rules;if(n)for(let s=0,r=n.length,o;s<r&&(o=n[s]);s++)Oa(o,e);return t}function gd(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let e=arguments[1],i=6-e.length;for(;i--;)e="0"+e;return"\\"+e})}function ka(t,e,i=""){let n="";if(t.cssText||t.rules){let s=t.rules;if(s&&!_d(s))for(let r=0,o=s.length,a;r<o&&(a=s[r]);r++)n=ka(a,e,n);else n=e?t.cssText:yd(t.cssText),n=n.trim(),n&&(n="  "+n+`
`)}return n&&(t.selector&&(i+=t.selector+" "+Ia+`
`),i+=n,t.selector&&(i+=Na+`

`)),i}function _d(t){let e=t[0];return!!e&&!!e.selector&&e.selector.indexOf(Ra)===0}function yd(t){return t=bd(t),vd(t)}function bd(t){return t.replace(ve.customProp,"").replace(ve.mixinProp,"")}function vd(t){return t.replace(ve.mixinApply,"").replace(ve.varApply,"")}const Xe={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},Ia="{",Na="}",ve={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},Ra="--",wd="@media",xd="@";/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const $n=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,Ti=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const gr=new Set,Cd="shady-unscoped";function Sd(t){const e=t.textContent;if(!gr.has(e)){gr.add(e);const i=document.createElement("style");i.setAttribute("shady-unscoped",""),i.textContent=e,document.head.appendChild(i)}}function Ed(t){return t.hasAttribute(Cd)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Fn(t,e){return t?(typeof t=="string"&&(t=Ta(t)),ka(t,bs)):""}function _r(t){return!t.__cssRules&&t.textContent&&(t.__cssRules=Ta(t.textContent)),t.__cssRules||null}function pi(t,e,i,n){if(!t)return;let s=!1,r=t.type;r===Xe.STYLE_RULE?e(t):r===Xe.MIXIN_RULE&&(s=!0);let o=t.rules;if(o&&!s)for(let a=0,l=o.length,c;a<l&&(c=o[a]);a++)pi(c,e)}function Ad(t,e){let i=0;for(let n=e,s=t.length;n<s;n++)if(t[n]==="(")i++;else if(t[n]===")"&&--i===0)return n;return-1}function La(t,e){let i=t.indexOf("var(");if(i===-1)return e(t,"","","");let n=Ad(t,i+3),s=t.substring(i+4,n),r=t.substring(0,i),o=La(t.substring(n+1),e),a=s.indexOf(",");if(a===-1)return e(r,s.trim(),"",o);let l=s.substring(0,a).trim(),c=s.substring(a+1).trim();return e(r,l,c,o)}window.ShadyDOM&&window.ShadyDOM.wrap;function Pd(t){let e=t.localName,i="",n="";return e?e.indexOf("-")>-1?i=e:(n=e,i=t.getAttribute&&t.getAttribute("is")||""):(i=t.is,n=t.extends),{is:i,typeExtension:n}}function Td(t){const e=[],i=t.querySelectorAll("style");for(let n=0;n<i.length;n++){const s=i[n];Ed(s)?Qi||(Sd(s),s.parentNode.removeChild(s)):(e.push(s.textContent),s.parentNode.removeChild(s))}return e.join("").trim()}const za="css-build";function Od(t){if(Ht!==void 0)return Ht;if(t.__cssBuild===void 0){const e=t.getAttribute(za);if(e)t.__cssBuild=e;else{const i=kd(t);i!==""&&Id(t),t.__cssBuild=i}}return t.__cssBuild||""}function yr(t){return Od(t)!==""}function kd(t){const e=t.localName==="template"?t.content.firstChild:t.firstChild;if(e instanceof Comment){const i=e.textContent.trim().split(":");if(i[0]===za)return i[1]}return""}function Id(t){const e=t.localName==="template"?t.content.firstChild:t.firstChild;e.parentNode.removeChild(e)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Bn(t,e){for(let i in e)i===null?t.style.removeProperty(i):t.style.setProperty(i,e[i])}function Ma(t,e){const i=window.getComputedStyle(t).getPropertyValue(e);return i?i.trim():""}function Nd(t){const e=Ti.test(t)||$n.test(t);return Ti.lastIndex=0,$n.lastIndex=0,e}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Rd=/;\s*/m,Ld=/^\s*(initial)|(inherit)\s*$/,br=/\s*!important/,Hn="_-_";class zd{constructor(){this._map={}}set(e,i){e=e.trim(),this._map[e]={properties:i,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let Oi=null;class Z{constructor(){this._currentElement=null,this._measureElement=null,this._map=new zd}detectMixin(e){return Nd(e)}gatherStyles(e){const i=Td(e.content);if(i){const n=document.createElement("style");return n.textContent=i,e.content.insertBefore(n,e.content.firstChild),n}return null}transformTemplate(e,i){e._gatheredStyle===void 0&&(e._gatheredStyle=this.gatherStyles(e));const n=e._gatheredStyle;return n?this.transformStyle(n,i):null}transformStyle(e,i=""){let n=_r(e);return this.transformRules(n,i),e.textContent=Fn(n),n}transformCustomStyle(e){let i=_r(e);return pi(i,n=>{n.selector===":root"&&(n.selector="html"),this.transformRule(n)}),e.textContent=Fn(i),i}transformRules(e,i){this._currentElement=i,pi(e,n=>{this.transformRule(n)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),e.selector===":root"&&(e.selector=":host > *")}transformCssText(e,i){return e=e.replace($n,(n,s,r,o)=>this._produceCssProperties(n,s,r,o,i)),this._consumeCssProperties(e,i)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let i=e;for(;i.parent;)i=i.parent;const n={};let s=!1;return pi(i,r=>{s=s||r===e,!s&&r.selector===e.selector&&Object.assign(n,this._cssTextToMap(r.parsedCssText))}),n}_consumeCssProperties(e,i){let n=null;for(;n=Ti.exec(e);){let s=n[0],r=n[1],o=n.index,a=o+s.indexOf("@apply"),l=o+s.length,c=e.slice(0,a),u=e.slice(l),h=i?this._fallbacksFromPreviousRules(i):{};Object.assign(h,this._cssTextToMap(c));let d=this._atApplyToCssProperties(r,h);e=`${c}${d}${u}`,Ti.lastIndex=o+d.length}return e}_atApplyToCssProperties(e,i){e=e.replace(Rd,"");let n=[],s=this._map.get(e);if(s||(this._map.set(e,{}),s=this._map.get(e)),s){this._currentElement&&(s.dependants[this._currentElement]=!0);let r,o,a;const l=s.properties;for(r in l)a=i&&i[r],o=[r,": var(",e,Hn,r],a&&o.push(",",a.replace(br,"")),o.push(")"),br.test(l[r])&&o.push(" !important"),n.push(o.join(""))}return n.join("; ")}_replaceInitialOrInherit(e,i){let n=Ld.exec(i);return n&&(n[1]?i=this._getInitialValueForProperty(e):i="apply-shim-inherit"),i}_cssTextToMap(e,i=!1){let n=e.split(";"),s,r,o={};for(let a=0,l,c;a<n.length;a++)l=n[a],l&&(c=l.split(":"),c.length>1&&(s=c[0].trim(),r=c.slice(1).join(":"),i&&(r=this._replaceInitialOrInherit(s,r)),o[s]=r));return o}_invalidateMixinEntry(e){if(Oi)for(let i in e.dependants)i!==this._currentElement&&Oi(i)}_produceCssProperties(e,i,n,s,r){if(n&&La(n,(g,_)=>{_&&this._map.get(_)&&(s=`@apply ${_};`)}),!s)return e;let o=this._consumeCssProperties(""+s,r),a=e.slice(0,e.indexOf("--")),l=this._cssTextToMap(o,!0),c=l,u=this._map.get(i),h=u&&u.properties;h?c=Object.assign(Object.create(h),l):this._map.set(i,c);let d=[],p,f,m=!1;for(p in c)f=l[p],f===void 0&&(f="initial"),h&&!(p in h)&&(m=!0),d.push(`${i}${Hn}${p}: ${f}`);return m&&this._invalidateMixinEntry(u),u&&(u.properties=c),n&&(a=`${e};${a}`),`${a}${d.join("; ")};`}}Z.prototype.detectMixin=Z.prototype.detectMixin;Z.prototype.transformStyle=Z.prototype.transformStyle;Z.prototype.transformCustomStyle=Z.prototype.transformCustomStyle;Z.prototype.transformRules=Z.prototype.transformRules;Z.prototype.transformRule=Z.prototype.transformRule;Z.prototype.transformTemplate=Z.prototype.transformTemplate;Z.prototype._separator=Hn;Object.defineProperty(Z.prototype,"invalidCallback",{get(){return Oi},set(t){Oi=t}});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Vn={};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ki="_applyShimCurrentVersion",rt="_applyShimNextVersion",Ii="_applyShimValidatingVersion",Md=Promise.resolve();function Dd(t){let e=Vn[t];e&&$d(e)}function $d(t){t[ki]=t[ki]||0,t[Ii]=t[Ii]||0,t[rt]=(t[rt]||0)+1}function Da(t){return t[ki]===t[rt]}function Fd(t){return!Da(t)&&t[Ii]===t[rt]}function Bd(t){t[Ii]=t[rt],t._validating||(t._validating=!0,Md.then(function(){t[ki]=t[rt],t._validating=!1}))}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let gn=null,vr=window.HTMLImports&&window.HTMLImports.whenReady||null,_n;function wr(t){requestAnimationFrame(function(){vr?vr(t):(gn||(gn=new Promise(e=>{_n=e}),document.readyState==="complete"?_n():document.addEventListener("readystatechange",()=>{document.readyState==="complete"&&_n()})),gn.then(function(){t&&t()}))})}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const xr="__seenByShadyCSS",ei="__shadyCSSCachedStyle";let Ni=null,Pt=null,Te=class{constructor(){this.customStyles=[],this.enqueued=!1,wr(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){this.enqueued||!Pt||(this.enqueued=!0,wr(Pt))}addCustomStyle(e){e[xr]||(e[xr]=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[ei])return e[ei];let i;return e.getStyle?i=e.getStyle():i=e,i}processStyles(){const e=this.customStyles;for(let i=0;i<e.length;i++){const n=e[i];if(n[ei])continue;const s=this.getStyleForCustomStyle(n);if(s){const r=s.__appliedElement||s;Ni&&Ni(r),n[ei]=r}}return e}};Te.prototype.addCustomStyle=Te.prototype.addCustomStyle;Te.prototype.getStyleForCustomStyle=Te.prototype.getStyleForCustomStyle;Te.prototype.processStyles=Te.prototype.processStyles;Object.defineProperties(Te.prototype,{transformCallback:{get(){return Ni},set(t){Ni=t}},validateCallback:{get(){return Pt},set(t){let e=!1;Pt||(e=!0),Pt=t,e&&this.enqueueDocumentValidation()}}});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const wt=new Z;class Hd{constructor(){this.customStyleInterface=null,wt.invalidCallback=Dd}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{wt.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(e,i){if(this.ensure(),yr(e))return;Vn[i]=e;let n=wt.transformTemplate(e,i);e._styleAst=n}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let i=0;i<e.length;i++){let n=e[i],s=this.customStyleInterface.getStyleForCustomStyle(n);s&&wt.transformCustomStyle(s)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,i){if(this.ensure(),i&&Bn(e,i),e.shadowRoot){this.styleElement(e);let n=e.shadowRoot.children||e.shadowRoot.childNodes;for(let s=0;s<n.length;s++)this.styleSubtree(n[s])}else{let n=e.children||e.childNodes;for(let s=0;s<n.length;s++)this.styleSubtree(n[s])}}styleElement(e){this.ensure();let{is:i}=Pd(e),n=Vn[i];if(!(n&&yr(n))&&n&&!Da(n)){Fd(n)||(this.prepareTemplate(n,i),Bd(n));let s=e.shadowRoot;if(s){let r=s.querySelector("style");r&&(r.__cssRules=n._styleAst,r.textContent=Fn(n._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const t=new Hd;let e=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(i,n,s){t.flushCustomStyles(),t.prepareTemplate(i,n)},prepareTemplateStyles(i,n,s){window.ShadyCSS.prepareTemplate(i,n,s)},prepareTemplateDom(i,n){},styleSubtree(i,n){t.flushCustomStyles(),t.styleSubtree(i,n)},styleElement(i){t.flushCustomStyles(),t.styleElement(i)},styleDocument(i){t.flushCustomStyles(),t.styleDocument(i)},getComputedStyleValue(i,n){return Ma(i,n)},flushCustomStyles(){t.flushCustomStyles()},nativeCss:bs,nativeShadow:Qi,cssBuild:Ht,disableRuntime:Pa},e&&(window.ShadyCSS.CustomStyleInterface=e)}window.ShadyCSS.ApplyShim=wt;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class He{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,i){this._asyncModule=e,this._callback=i,this._timer=this._asyncModule.run(()=>{this._timer=null,Vt.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Vt.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(e,i,n){return e instanceof He?e._cancelAsync():e=new He,e.setConfig(i,n),e}}let Vt=new Set;const $a=function(t){Vt.add(t)},Vd=function(){const t=!!Vt.size;return Vt.forEach(e=>{try{e.flush()}catch(i){setTimeout(()=>{throw i})}}),t};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let vs=typeof document.head.style.touchAction=="string",Ri="__polymerGestures",fi="__polymerGesturesHandled",jn="__polymerGesturesTouchAction",Cr=25,Sr=5,jd=2,Ud=2500,Fa=["mousedown","mousemove","mouseup","click"],Kd=[0,1,4,2],Wd=(function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}})();function ws(t){return Fa.indexOf(t)>-1}let xs=!1;(function(){try{let t=Object.defineProperty({},"passive",{get(){xs=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch{}})();function Ba(t){if(!(ws(t)||t==="touchend")&&vs&&xs&&Wl)return{passive:!0}}let Ha=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const Un=[],qd={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},Yd={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Jd(t){return qd[t.localName]||!1}function Xd(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];try{let i=t.getRootNode();if(t.id){let n=i.querySelectorAll(`label[for = '${t.id}']`);for(let s=0;s<n.length;s++)e.push(n[s])}}catch{}}return e}let Er=function(t){let e=t.sourceCapabilities;if(!(e&&!e.firesTouchEvents)&&(t[fi]={skip:!0},t.type==="click")){let i=!1,n=en(t);for(let s=0;s<n.length;s++){if(n[s].nodeType===Node.ELEMENT_NODE){if(n[s].localName==="label")Un.push(n[s]);else if(Jd(n[s])){let r=Xd(n[s]);for(let o=0;o<r.length;o++)i=i||Un.indexOf(r[o])>-1}}if(n[s]===q.mouse.target)return}if(i)return;t.preventDefault(),t.stopPropagation()}};function Ar(t){let e=Ha?["click"]:Fa;for(let i=0,n;i<e.length;i++)n=e[i],t?(Un.length=0,document.addEventListener(n,Er,!0)):document.removeEventListener(n,Er,!0)}function Gd(t){q.mouse.mouseIgnoreJob||Ar(!0);let e=function(){Ar(),q.mouse.target=null,q.mouse.mouseIgnoreJob=null};q.mouse.target=en(t)[0],q.mouse.mouseIgnoreJob=He.debounce(q.mouse.mouseIgnoreJob,St.after(Ud),e)}function Me(t){let e=t.type;if(!ws(e))return!1;if(e==="mousemove"){let i=t.buttons===void 0?1:t.buttons;return t instanceof window.MouseEvent&&!Wd&&(i=Kd[t.which]||0),!!(i&1)}else return(t.button===void 0?0:t.button)===0}function Zd(t){if(t.type==="click"){if(t.detail===0)return!0;let e=we(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let i=e.getBoundingClientRect(),n=t.pageX,s=t.pageY;return!(n>=i.left&&n<=i.right&&s>=i.top&&s<=i.bottom)}return!1}let q={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Qd(t){let e="auto",i=en(t);for(let n=0,s;n<i.length;n++)if(s=i[n],s[jn]){e=s[jn];break}return e}function Va(t,e,i){t.movefn=e,t.upfn=i,document.addEventListener("mousemove",e),document.addEventListener("mouseup",i)}function Qe(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}document.addEventListener("touchend",Gd,xs?{passive:!0}:!1);const en=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],qt={},Le=[];function ep(t,e){let i=document.elementFromPoint(t,e),n=i;for(;n&&n.shadowRoot&&!window.ShadyDOM;){let s=n;if(n=n.shadowRoot.elementFromPoint(t,e),s===n)break;n&&(i=n)}return i}function we(t){const e=en(t);return e.length>0?e[0]:t.target}function ja(t){let e,i=t.type,s=t.currentTarget[Ri];if(!s)return;let r=s[i];if(r){if(!t[fi]&&(t[fi]={},i.slice(0,5)==="touch")){t=t;let o=t.changedTouches[0];if(i==="touchstart"&&t.touches.length===1&&(q.touch.id=o.identifier),q.touch.id!==o.identifier)return;vs||(i==="touchstart"||i==="touchmove")&&tp(t)}if(e=t[fi],!e.skip){for(let o=0,a;o<Le.length;o++)a=Le[o],r[a.name]&&!e[a.name]&&a.flow&&a.flow.start.indexOf(t.type)>-1&&a.reset&&a.reset();for(let o=0,a;o<Le.length;o++)a=Le[o],r[a.name]&&!e[a.name]&&(e[a.name]=!0,a[i](t))}}}function tp(t){let e=t.changedTouches[0],i=t.type;if(i==="touchstart")q.touch.x=e.clientX,q.touch.y=e.clientY,q.touch.scrollDecided=!1;else if(i==="touchmove"){if(q.touch.scrollDecided)return;q.touch.scrollDecided=!0;let n=Qd(t),s=!1,r=Math.abs(q.touch.x-e.clientX),o=Math.abs(q.touch.y-e.clientY);t.cancelable&&(n==="none"?s=!0:n==="pan-x"?s=o>r:n==="pan-y"&&(s=r>o)),s?t.preventDefault():Li("track")}}function Ua(t,e,i){return qt[e]?(np(t,e,i),!0):!1}function ip(t,e,i){return qt[e]?(sp(t,e,i),!0):!1}function np(t,e,i){let n=qt[e],s=n.deps,r=n.name,o=t[Ri];o||(t[Ri]=o={});for(let a=0,l,c;a<s.length;a++)l=s[a],!(Ha&&ws(l)&&l!=="click")&&(c=o[l],c||(o[l]=c={_count:0}),c._count===0&&t.addEventListener(l,ja,Ba(l)),c[r]=(c[r]||0)+1,c._count=(c._count||0)+1);t.addEventListener(e,i),n.touchAction&&Ka(t,n.touchAction)}function sp(t,e,i){let n=qt[e],s=n.deps,r=n.name,o=t[Ri];if(o)for(let a=0,l,c;a<s.length;a++)l=s[a],c=o[l],c&&c[r]&&(c[r]=(c[r]||1)-1,c._count=(c._count||1)-1,c._count===0&&t.removeEventListener(l,ja,Ba(l)));t.removeEventListener(e,i)}function Cs(t){Le.push(t);for(let e=0;e<t.emits.length;e++)qt[t.emits[e]]=t}function rp(t){for(let e=0,i;e<Le.length;e++){i=Le[e];for(let n=0,s;n<i.emits.length;n++)if(s=i.emits[n],s===t)return i}return null}function Ka(t,e){vs&&t instanceof HTMLElement&&Ae.run(()=>{t.style.touchAction=e}),t[jn]=e}function Ss(t,e,i){let n=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=i,v(t).dispatchEvent(n),n.defaultPrevented){let s=i.preventer||i.sourceEvent;s&&s.preventDefault&&s.preventDefault()}}function Li(t){let e=rp(t);e.info&&(e.info.prevent=!0)}Cs({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){Qe(this.info)},mousedown:function(t){if(!Me(t))return;let e=we(t),i=this,n=function(o){Me(o)||(ft("up",e,o),Qe(i.info))},s=function(o){Me(o)&&ft("up",e,o),Qe(i.info)};Va(this.info,n,s),ft("down",e,t)},touchstart:function(t){ft("down",we(t),t.changedTouches[0],t)},touchend:function(t){ft("up",we(t),t.changedTouches[0],t)}});function ft(t,e,i,n){e&&Ss(e,t,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:n,prevent:function(s){return Li(s)}})}Cs({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>jd&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Qe(this.info)},mousedown:function(t){if(!Me(t))return;let e=we(t),i=this,n=function(o){let a=o.clientX,l=o.clientY;Pr(i.info,a,l)&&(i.info.state=i.info.started?o.type==="mouseup"?"end":"track":"start",i.info.state==="start"&&Li("tap"),i.info.addMove({x:a,y:l}),Me(o)||(i.info.state="end",Qe(i.info)),e&&yn(i.info,e,o),i.info.started=!0)},s=function(o){i.info.started&&n(o),Qe(i.info)};Va(this.info,n,s),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=we(t),i=t.changedTouches[0],n=i.clientX,s=i.clientY;Pr(this.info,n,s)&&(this.info.state==="start"&&Li("tap"),this.info.addMove({x:n,y:s}),yn(this.info,e,i),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=we(t),i=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),yn(this.info,e,i))}});function Pr(t,e,i){if(t.prevent)return!1;if(t.started)return!0;let n=Math.abs(t.x-e),s=Math.abs(t.y-i);return n>=Sr||s>=Sr}function yn(t,e,i){if(!e)return;let n=t.moves[t.moves.length-2],s=t.moves[t.moves.length-1],r=s.x-t.x,o=s.y-t.y,a,l=0;n&&(a=s.x-n.x,l=s.y-n.y),Ss(e,"track",{state:t.state,x:i.clientX,y:i.clientY,dx:r,dy:o,ddx:a,ddy:l,sourceEvent:i,hover:function(){return ep(i.clientX,i.clientY)}})}Cs({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){Me(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){Me(t)&&Tr(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){Tr(this.info,t.changedTouches[0],t)}});function Tr(t,e,i){let n=Math.abs(e.clientX-t.x),s=Math.abs(e.clientY-t.y),r=we(i||e);!r||Yd[r.localName]&&r.hasAttribute("disabled")||(isNaN(n)||isNaN(s)||n<=Cr&&s<=Cr||Zd(e))&&(t.prevent||Ss(r,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:i}))}const op=we;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Wa=te(t=>{class e extends t{_addEventListenerToNode(n,s,r){Ua(n,s,r)||super._addEventListenerToNode(n,s,r)}_removeEventListenerFromNode(n,s,r){ip(n,s,r)||super._removeEventListenerFromNode(n,s,r)}}return e});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const ap=/:host\(:dir\((ltr|rtl)\)\)/g,lp=':host([dir="$1"])',cp=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,up=':host([dir="$2"]) $1',hp=/:dir\((?:ltr|rtl)\)/,Or=!!(window.ShadyDOM&&window.ShadyDOM.inUse),Tt=[];let Ot=null,Es="";function qa(){Es=document.documentElement.getAttribute("dir")}function Ya(t){t.__autoDirOptOut||t.setAttribute("dir",Es)}function Ja(){qa(),Es=document.documentElement.getAttribute("dir");for(let t=0;t<Tt.length;t++)Ya(Tt[t])}function dp(){Ot&&Ot.takeRecords().length&&Ja()}const pp=te(t=>{Or||Ot||(qa(),Ot=new MutationObserver(Ja),Ot.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const e=$o(t);class i extends e{static _processStyleText(s,r){return s=e._processStyleText.call(this,s,r),!Or&&hp.test(s)&&(s=this._replaceDirInCssText(s),this.__activateDir=!0),s}static _replaceDirInCssText(s){let r=s;return r=r.replace(ap,lp),r=r.replace(cp,up),r}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){e.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(dp(),Tt.push(this),Ya(this))}disconnectedCallback(){if(e.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const s=Tt.indexOf(this);s>-1&&Tt.splice(s,1)}}}return i.__activateDir=!1,i});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function kr(){document.body.removeAttribute("unresolved")}document.readyState==="interactive"||document.readyState==="complete"?kr():window.addEventListener("DOMContentLoaded",kr);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function mt(t,e,i){return{index:t,removed:e,addedCount:i}}const Xa=0,Ga=1,Kn=2,Wn=3;function fp(t,e,i,n,s,r){let o=r-s+1,a=i-e+1,l=new Array(o);for(let c=0;c<o;c++)l[c]=new Array(a),l[c][0]=c;for(let c=0;c<a;c++)l[0][c]=c;for(let c=1;c<o;c++)for(let u=1;u<a;u++)if(As(t[e+u-1],n[s+c-1]))l[c][u]=l[c-1][u-1];else{let h=l[c-1][u]+1,d=l[c][u-1]+1;l[c][u]=h<d?h:d}return l}function mp(t){let e=t.length-1,i=t[0].length-1,n=t[e][i],s=[];for(;e>0||i>0;){if(e==0){s.push(Kn),i--;continue}if(i==0){s.push(Wn),e--;continue}let r=t[e-1][i-1],o=t[e-1][i],a=t[e][i-1],l;o<a?l=o<r?o:r:l=a<r?a:r,l==r?(r==n?s.push(Xa):(s.push(Ga),n=r),e--,i--):l==o?(s.push(Wn),e--,n=o):(s.push(Kn),i--,n=a)}return s.reverse(),s}function gp(t,e,i,n,s,r){let o=0,a=0,l,c=Math.min(i-e,r-s);if(e==0&&s==0&&(o=_p(t,n,c)),i==t.length&&r==n.length&&(a=yp(t,n,c-o)),e+=o,s+=o,i-=a,r-=a,i-e==0&&r-s==0)return[];if(e==i){for(l=mt(e,[],0);s<r;)l.removed.push(n[s++]);return[l]}else if(s==r)return[mt(e,[],i-e)];let u=mp(fp(t,e,i,n,s,r));l=void 0;let h=[],d=e,p=s;for(let f=0;f<u.length;f++)switch(u[f]){case Xa:l&&(h.push(l),l=void 0),d++,p++;break;case Ga:l||(l=mt(d,[],0)),l.addedCount++,d++,l.removed.push(n[p]),p++;break;case Kn:l||(l=mt(d,[],0)),l.addedCount++,d++;break;case Wn:l||(l=mt(d,[],0)),l.removed.push(n[p]),p++;break}return l&&h.push(l),h}function _p(t,e,i){for(let n=0;n<i;n++)if(!As(t[n],e[n]))return n;return i}function yp(t,e,i){let n=t.length,s=e.length,r=0;for(;r<i&&As(t[--n],e[--s]);)r++;return r}function Za(t,e){return gp(t,0,t.length,e,0,e.length)}function As(t,e){return t===e}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ke(t){return t.localName==="slot"}let Ir=class{static getFlattenedNodes(t){const e=v(t);if(Ke(t))return t=t,e.assignedNodes({flatten:!0});{const i=[];for(let n=0;n<e.childNodes.length;n++){const s=e.childNodes[n];if(Ke(s)){const r=s;i.push(...v(r).assignedNodes({flatten:!0}))}else i.push(s)}return i}}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){Ke(this._target)?this._listenSlots([this._target]):v(this._target).children&&(this._listenSlots(v(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){Ke(this._target)?this._unlistenSlots([this._target]):v(this._target).children&&(this._unlistenSlots(v(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,Ae.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let i=t[e];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),i=Za(e,this._effectiveNodes);for(let s=0,r;s<i.length&&(r=i[s]);s++)for(let o=0,a;o<r.removed.length&&(a=r.removed[o]);o++)t.removedNodes.push(a);for(let s=0,r;s<i.length&&(r=i[s]);s++)for(let o=r.index;o<r.index+r.addedCount;o++)t.addedNodes.push(e[o]);this._effectiveNodes=e;let n=!1;return(t.addedNodes.length||t.removedNodes.length)&&(n=!0,this.callback.call(this._target,t)),n}_listenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];Ke(i)&&i.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];Ke(i)&&i.removeEventListener("slotchange",this._boundSchedule)}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Qa=function(){let t,e;do t=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=Vd();while(t||e)};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const We=Element.prototype,bp=We.matches||We.matchesSelector||We.mozMatchesSelector||We.msMatchesSelector||We.oMatchesSelector||We.webkitMatchesSelector,el=function(t,e){return bp.call(t,e)};class T{constructor(e){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(e),this.node=e}observeNodes(e){return new Ir(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(v(this.node).contains(e))return!0;let i=e,n=e.ownerDocument;for(;i&&i!==n&&i!==this.node;)i=v(i).parentNode||v(i).host;return i===this.node}getOwnerRoot(){return v(this.node).getRootNode()}getDistributedNodes(){return this.node.localName==="slot"?v(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],i=v(this.node).assignedSlot;for(;i;)e.push(i),i=v(i).assignedSlot;return e}importNode(e,i){let n=this.node instanceof Document?this.node:this.node.ownerDocument;return v(n).importNode(e,i)}getEffectiveChildNodes(){return Ir.getFlattenedNodes(this.node)}queryDistributedElements(e){let i=this.getEffectiveChildNodes(),n=[];for(let s=0,r=i.length,o;s<r&&(o=i[s]);s++)o.nodeType===Node.ELEMENT_NODE&&el(o,e)&&n.push(o);return n}get activeElement(){let e=this.node;return e._activeElement!==void 0?e._activeElement:e.activeElement}}function vp(t,e){for(let i=0;i<e.length;i++){let n=e[i];t[n]=function(){return this.node[n].apply(this.node,arguments)}}}function Nr(t,e){for(let i=0;i<e.length;i++){let n=e[i];Object.defineProperty(t,n,{get:function(){return this.node[n]},configurable:!0})}}function wp(t,e){for(let i=0;i<e.length;i++){let n=e[i];Object.defineProperty(t,n,{get:function(){return this.node[n]},set:function(s){this.node[n]=s},configurable:!0})}}class qn{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}T.prototype.cloneNode;T.prototype.appendChild;T.prototype.insertBefore;T.prototype.removeChild;T.prototype.replaceChild;T.prototype.setAttribute;T.prototype.removeAttribute;T.prototype.querySelector;T.prototype.querySelectorAll;T.prototype.parentNode;T.prototype.firstChild;T.prototype.lastChild;T.prototype.nextSibling;T.prototype.previousSibling;T.prototype.firstElementChild;T.prototype.lastElementChild;T.prototype.nextElementSibling;T.prototype.previousElementSibling;T.prototype.childNodes;T.prototype.children;T.prototype.classList;T.prototype.textContent;T.prototype.innerHTML;let Yn=T;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class t extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(T.prototype).forEach(e=>{e!="activeElement"&&(t.prototype[e]=T.prototype[e])}),Nr(t.prototype,["classList"]),Yn=t,Object.defineProperties(qn.prototype,{localTarget:{get(){const e=this.event.currentTarget,i=e&&S(e).getOwnerRoot(),n=this.path;for(let s=0;s<n.length;s++){const r=n[s];if(S(r).getOwnerRoot()===i)return r}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else vp(T.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll","attachShadow"]),Nr(T.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList","shadowRoot"]),wp(T.prototype,["textContent","innerHTML","className"]);const S=function(t){if(t=t||document,t instanceof Yn||t instanceof qn)return t;let e=t.__domApi;return e||(t instanceof Event?e=new qn(t):e=new Yn(t),t.__domApi=e),e};/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const bn=window.ShadyDOM,Rr=window.ShadyCSS;function Lr(t,e){return v(t).getRootNode()===e}function xp(t,e=!1){if(!bn||!Rr||!bn.handlesDynamicScoping)return null;const i=Rr.ScopingShim;if(!i)return null;const n=i.scopeForNode(t),s=v(t).getRootNode(),r=o=>{if(!Lr(o,s))return;const a=Array.from(bn.nativeMethods.querySelectorAll.call(o,"*"));a.push(o);for(let l=0;l<a.length;l++){const c=a[l];if(!Lr(c,s))continue;const u=i.currentScopeForNode(c);u!==n&&(u!==""&&i.unscopeNode(c,u),i.scopeNode(c,n))}};if(r(t),e){const o=new MutationObserver(a=>{for(let l=0;l<a.length;l++){const c=a[l];for(let u=0;u<c.addedNodes.length;u++){const h=c.addedNodes[u];h.nodeType===Node.ELEMENT_NODE&&r(h)}}});return o.observe(t,{childList:!0,subtree:!0}),o}else return null}/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const vn="disable-upgrade",tl=t=>{for(;t;){const e=Object.getOwnPropertyDescriptor(t,"observedAttributes");if(e)return e.get;t=Object.getPrototypeOf(t.prototype).constructor}return()=>[]};te(t=>{const e=Ki(t);let i=tl(e);class n extends e{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return i.call(this).concat(vn)}_initializeProperties(){this.hasAttribute(vn)?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(r){return super._canApplyPropertyDefault(r)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(r))}attributeChangedCallback(r,o,a,l){r==vn?this.__isUpgradeDisabled&&a==null&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,v(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(r,o,a,l)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}return n});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ti="disable-upgrade";let Cp=window.ShadyCSS;const Ps=te(t=>{const e=Wa(Ki(t)),i=Rn?e:pp(e),n=tl(i),s={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class r extends i{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(a,l,c){(this.__dataAttributes&&this.__dataAttributes[a]||a===ti)&&this.attributeChangedCallback(a,l,c,null)}setAttribute(a,l){if(Gt&&!this._legacyForceObservedAttributes){const c=this.getAttribute(a);super.setAttribute(a,l),this.__attributeReaction(a,c,String(l))}else super.setAttribute(a,l)}removeAttribute(a){if(Gt&&!this._legacyForceObservedAttributes){const l=this.getAttribute(a);super.removeAttribute(a),this.__attributeReaction(a,l,null)}else super.removeAttribute(a)}static get observedAttributes(){return Gt&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],this.prototype,void 0),this.__observedAttributes):n.call(this).concat(ti)}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(a){return super._canApplyPropertyDefault(a)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(a))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(a,l,c,u){l!==c&&(a==ti?this.__isUpgradeDisabled&&c==null&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,v(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(a,l,c,u),this.attributeChanged(a,l,c)))}attributeChanged(a,l,c){}_initializeProperties(){if(Rt&&this.hasAttribute(ti))this.__isUpgradeDisabled=!0;else{let a=Object.getPrototypeOf(this);a.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",a))||(this._registered(),a.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),Gt&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const a=this.attributes;for(let l=0,c=a.length;l<c;l++){const u=a[l];this.__attributeReaction(u.name,null,u.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(a){return this._serializeValue(a)}deserialize(a,l){return this._deserializeValue(a,l)}reflectPropertyToAttribute(a,l,c){this._propertyToAttribute(a,l,c)}serializeValueToAttribute(a,l,c){this._valueToNodeAttribute(c||this,a,l)}extend(a,l){if(!(a&&l))return a||l;let c=Object.getOwnPropertyNames(l);for(let u=0,h;u<c.length&&(h=c[u]);u++){let d=Object.getOwnPropertyDescriptor(l,h);d&&Object.defineProperty(a,h,d)}return a}mixin(a,l){for(let c in l)a[c]=l[c];return a}chainObject(a,l){return a&&l&&a!==l&&(a.__proto__=l),a}instanceTemplate(a){let l=this.constructor._contentForTemplate(a);return document.importNode(l,!0)}fire(a,l,c){c=c||{},l=l??{};let u=new Event(a,{bubbles:c.bubbles===void 0?!0:c.bubbles,cancelable:!!c.cancelable,composed:c.composed===void 0?!0:c.composed});u.detail=l;let h=c.node||this;return v(h).dispatchEvent(u),u}listen(a,l,c){a=a||this;let u=this.__boundListeners||(this.__boundListeners=new WeakMap),h=u.get(a);h||(h={},u.set(a,h));let d=l+c;h[d]||(h[d]=this._addMethodEventListenerToNode(a,l,c,this))}unlisten(a,l,c){a=a||this;let u=this.__boundListeners&&this.__boundListeners.get(a),h=l+c,d=u&&u[h];d&&(this._removeEventListenerFromNode(a,l,d),u[h]=null)}setScrollDirection(a,l){Ka(l||this,s[a]||"auto")}$$(a){return this.root.querySelector(a)}get domHost(){let a=v(this).getRootNode();return a instanceof DocumentFragment?a.host:a}distributeContent(){const l=S(this);window.ShadyDOM&&l.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return S(this).getEffectiveChildNodes()}queryDistributedElements(a){return S(this).queryDistributedElements(a)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter(function(l){return l.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let a=this.getEffectiveChildNodes(),l=[];for(let c=0,u;u=a[c];c++)u.nodeType!==Node.COMMENT_NODE&&l.push(u.textContent);return l.join("")}queryEffectiveChildren(a){let l=this.queryDistributedElements(a);return l&&l[0]}queryAllEffectiveChildren(a){return this.queryDistributedElements(a)}getContentChildNodes(a){let l=this.root.querySelector(a||"slot");return l?S(l).getDistributedNodes():[]}getContentChildren(a){return this.getContentChildNodes(a).filter(function(c){return c.nodeType===Node.ELEMENT_NODE})}isLightDescendant(a){const l=this;return l!==a&&v(l).contains(a)&&v(l).getRootNode()===v(a).getRootNode()}isLocalDescendant(a){return this.root===v(a).getRootNode()}scopeSubtree(a,l=!1){return xp(a,l)}getComputedStyleValue(a){return Cp.getComputedStyleValue(this,a)}debounce(a,l,c){return this._debouncers=this._debouncers||{},this._debouncers[a]=He.debounce(this._debouncers[a],c>0?St.after(c):Ae,l.bind(this))}isDebouncerActive(a){this._debouncers=this._debouncers||{};let l=this._debouncers[a];return!!(l&&l.isActive())}flushDebouncer(a){this._debouncers=this._debouncers||{};let l=this._debouncers[a];l&&l.flush()}cancelDebouncer(a){this._debouncers=this._debouncers||{};let l=this._debouncers[a];l&&l.cancel()}async(a,l){return l>0?St.run(a.bind(this),l):~Ae.run(a.bind(this))}cancelAsync(a){a<0?Ae.cancel(~a):St.cancel(a)}create(a,l){let c=document.createElement(a);if(l)if(c.setProperties)c.setProperties(l);else for(let u in l)c[u]=l[u];return c}elementMatches(a,l){return el(l||this,a)}toggleAttribute(a,l){let c=this;return arguments.length===3&&(c=arguments[2]),arguments.length==1&&(l=!c.hasAttribute(a)),l?(v(c).setAttribute(a,""),!0):(v(c).removeAttribute(a),!1)}toggleClass(a,l,c){c=c||this,arguments.length==1&&(l=!c.classList.contains(a)),l?c.classList.add(a):c.classList.remove(a)}transform(a,l){l=l||this,l.style.webkitTransform=a,l.style.transform=a}translate3d(a,l,c,u){u=u||this,this.transform("translate3d("+a+","+l+","+c+")",u)}arrayDelete(a,l){let c;if(Array.isArray(a)){if(c=a.indexOf(l),c>=0)return a.splice(c,1)}else if(c=G(this,a).indexOf(l),c>=0)return this.splice(a,c,1);return null}_logger(a,l){switch(Array.isArray(l)&&l.length===1&&Array.isArray(l[0])&&(l=l[0]),a){case"log":case"warn":case"error":console[a](...l)}}_log(...a){this._logger("log",a)}_warn(...a){this._logger("warn",a)}_error(...a){this._logger("error",a)}_logf(a,...l){return["[%s::%s]",this.is,a,...l]}}return r.prototype.is="",r});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Sp={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},il={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},Ep=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},il);function Ap(t,e,i){const n=t._noAccessors,s=Object.getOwnPropertyNames(t);for(let r=0;r<s.length;r++){let o=s[r];if(!(o in i))if(n)e[o]=t[o];else{let a=Object.getOwnPropertyDescriptor(t,o);a&&(a.configurable=!0,Object.defineProperty(e,o,a))}}}function Pp(t,e,i){for(let n=0;n<e.length;n++)nl(t,e[n],i,Ep)}function nl(t,e,i,n){Ap(e,t,n);for(let s in Sp)e[s]&&(i[s]=i[s]||[],i[s].push(e[s]))}function sl(t,e,i){e=e||[];for(let n=t.length-1;n>=0;n--){let s=t[n];s?Array.isArray(s)?sl(s,e):e.indexOf(s)<0&&(!i||i.indexOf(s)<0)&&e.unshift(s):console.warn("behavior is null, check for missing or 404 import")}return e}function zr(t,e){for(const i in e){const n=t[i],s=e[i];!("value"in s)&&n&&"value"in n?t[i]=Object.assign({value:n.value},s):t[i]=s}}const Mr=Ps(HTMLElement);function Tp(t,e,i){let n;const s={};class r extends e{static _finalizeClass(){if(!this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this)))e._finalizeClass.call(this);else{if(n)for(let l=0,c;l<n.length;l++)c=n[l],c.properties&&this.createProperties(c.properties),c.observers&&this.createObservers(c.observers,c.properties);t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties),this._prepareTemplate()}}static get properties(){const l={};if(n)for(let c=0;c<n.length;c++)zr(l,n[c].properties);return zr(l,t.properties),l}static get observers(){let l=[];if(n)for(let c=0,u;c<n.length;c++)u=n[c],u.observers&&(l=l.concat(u.observers));return t.observers&&(l=l.concat(t.observers)),l}created(){super.created();const l=s.created;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}_registered(){const l=r.prototype;if(!l.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",l))){l.__hasRegisterFinished=!0,super._registered(),Rt&&o(l);const c=Object.getPrototypeOf(this);let u=s.beforeRegister;if(u)for(let h=0;h<u.length;h++)u[h].call(c);if(u=s.registered,u)for(let h=0;h<u.length;h++)u[h].call(c)}}_applyListeners(){super._applyListeners();const l=s.listeners;if(l)for(let c=0;c<l.length;c++){const u=l[c];if(u)for(let h in u)this._addMethodEventListenerToNode(this,h,u[h])}}_ensureAttributes(){const l=s.hostAttributes;if(l)for(let c=l.length-1;c>=0;c--){const u=l[c];for(let h in u)this._ensureAttribute(h,u[h])}super._ensureAttributes()}ready(){super.ready();let l=s.ready;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}attached(){super.attached();let l=s.attached;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}detached(){super.detached();let l=s.detached;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}attributeChanged(l,c,u){super.attributeChanged();let h=s.attributeChanged;if(h)for(let d=0;d<h.length;d++)h[d].call(this,l,c,u)}}if(i){Array.isArray(i)||(i=[i]);let a=e.prototype.behaviors;n=sl(i,null,a),r.prototype.behaviors=a?a.concat(i):n}const o=a=>{n&&Pp(a,n,s),nl(a,t,s,il)};return Rt||o(r.prototype),r.generatedFrom=t,r}const Op=function(t,e){t||console.warn("Polymer.Class requires `info` argument");let i=e?e(Mr):Mr;return i=Tp(t,i,t.behaviors),i.is=i.prototype.is=t.is,i};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const B=function(t){let e;return typeof t=="function"?e=t:e=B.Class(t),t._legacyForceObservedAttributes&&(e.prototype._legacyForceObservedAttributes=t._legacyForceObservedAttributes),customElements.define(e.is,e),e};B.Class=Op;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ts(t,e,i,n,s){let r;s&&(r=typeof i=="object"&&i!==null,r&&(n=t.__dataTemp[e]));let o=n!==i&&(n===n||i===i);return r&&o&&(t.__dataTemp[e]=i),o}const Os=te(t=>{class e extends t{_shouldPropertyChange(n,s,r){return Ts(this,n,s,r,!0)}}return e}),rl=te(t=>{class e extends t{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(n,s,r){return Ts(this,n,s,r,this.mutableData)}}return e});Os._mutablePropertyChange=Ts;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Jn=null;function Xn(){return Jn}Xn.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:Xn,writable:!0}});const ol=Ui(Xn),kp=Os(ol);function Ip(t,e){Jn=t,Object.setPrototypeOf(t,e.prototype),new e,Jn=null}const Np=Ui(class{});function al(t,e){for(let i=0;i<e.length;i++){let n=e[i];if(!!t!=!!n.__hideTemplateChildren__)if(n.nodeType===Node.TEXT_NODE)t?(n.__polymerTextContent__=n.textContent,n.textContent=""):n.textContent=n.__polymerTextContent__;else if(n.localName==="slot")if(t)n.__polymerReplaced__=document.createComment("hidden-slot"),v(v(n).parentNode).replaceChild(n.__polymerReplaced__,n);else{const s=n.__polymerReplaced__;s&&v(v(s).parentNode).replaceChild(n,s)}else n.style&&(t?(n.__polymerDisplay__=n.style.display,n.style.display="none"):n.style.display=n.__polymerDisplay__);n.__hideTemplateChildren__=t,n._showHideChildren&&n._showHideChildren(t)}}class Ie extends Np{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let i=[];this.children=i;for(let s=this.root.firstChild;s;s=s.nextSibling)i.push(s),s.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let n=this.__templatizeOptions;(e&&n.instanceProps||!n.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let n in this.__hostProps)this._setPendingProperty(n,this.__dataHost["_host_"+n]);for(let n in e)this._setPendingProperty(n,e[n])}forwardHostProp(e,i){this._setPendingPropertyOrPath(e,i,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,i,n){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,i,s=>{s.model=this,n(s)});else{let s=this.__dataHost.__dataHost;s&&s._addEventListenerToNode(e,i,n)}}_showHideChildren(e){al(e,this.children)}_setUnmanagedPropertyToNode(e,i,n){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&i=="textContent"?e.__polymerTextContent__=n:super._setUnmanagedPropertyToNode(e,i,n)}get parentModel(){let e=this.__parentModel;if(!e){let i;e=this;do e=e.__dataHost.__dataHost;while((i=e.__templatizeOptions)&&!i.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}Ie.prototype.__dataHost;Ie.prototype.__templatizeOptions;Ie.prototype._methodHost;Ie.prototype.__templatizeOwner;Ie.prototype.__hostProps;const Rp=Os(Ie);function Dr(t){let e=t.__dataHost;return e&&e._methodHost||e}function Lp(t,e,i){let n=i.mutableData?Rp:Ie;zi.mixin&&(n=zi.mixin(n));let s=class extends n{};return s.prototype.__templatizeOptions=i,s.prototype._bindTemplate(t),Dp(s,t,e,i),s}function zp(t,e,i,n){let s=i.forwardHostProp;if(s&&e.hasHostProps){const r=t.localName=="template";let o=e.templatizeTemplateClass;if(!o){if(r){let l=i.mutableData?kp:ol;class c extends l{}o=e.templatizeTemplateClass=c}else{const l=t.constructor;class c extends l{}o=e.templatizeTemplateClass=c}let a=e.hostProps;for(let l in a)o.prototype._addPropertyEffect("_host_"+l,o.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:Mp(l,s)}),o.prototype._createNotifyingProperty("_host_"+l);Oo&&n&&Bp(e,i,n)}if(t.__dataProto&&Object.assign(t.__data,t.__dataProto),r)Ip(t,o),t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties();else{Object.setPrototypeOf(t,o.prototype);const a=e.hostProps;for(let l in a)if(l="_host_"+l,l in t){const c=t[l];delete t[l],t.__data[l]=c}}}}function Mp(t,e){return function(n,s,r){e.call(n.__templatizeOwner,s.substring(6),r[s])}}function Dp(t,e,i,n){let s=i.hostProps||{};for(let r in n.instanceProps){delete s[r];let o=n.notifyInstanceProp;o&&t.prototype._addPropertyEffect(r,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:$p(r,o)})}if(n.forwardHostProp&&e.__dataHost)for(let r in s)i.hasHostProps||(i.hasHostProps=!0),t.prototype._addPropertyEffect(r,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Fp()})}function $p(t,e){return function(n,s,r){e.call(n.__templatizeOwner,n,s,r[s])}}function Fp(){return function(e,i,n){e.__dataHost._setPendingPropertyOrPath("_host_"+i,n[i],!0,!0)}}function zi(t,e,i){if(tt&&!Dr(t))throw new Error("strictTemplatePolicy: template owner not trusted");if(i=i||{},t.__templatizeOwner)throw new Error("A <template> can only be templatized once");t.__templatizeOwner=e;let s=(e?e.constructor:Ie)._parseTemplate(t),r=s.templatizeInstanceClass;r||(r=Lp(t,s,i),s.templatizeInstanceClass=r);const o=Dr(t);zp(t,s,i,o);let a=class extends r{};return a.prototype._methodHost=o,a.prototype.__dataHost=t,a.prototype.__templatizeOwner=e,a.prototype.__hostProps=s.hostProps,a=a,a}function Bp(t,e,i){const n=i.constructor._properties,{propertyEffects:s}=t,{instanceProps:r}=e;for(let o in s)if(!n[o]&&!(r&&r[o])){const a=s[o];for(let l=0;l<a.length;l++){const{part:c}=a[l].info;if(!(c.signature&&c.signature.static)){console.warn(`Property '${o}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}function Hp(t,e){let i;for(;e;)if(i=e.__dataHost?e:e.__templatizeInstance)if(i.__dataHost!=t)e=i.__dataHost;else return i;else e=v(e).parentNode;return null}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let $r=!1;function ks(){if(Rt&&!Vi){if(!$r){$r=!0;const t=document.createElement("style");t.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(t)}return!0}return!1}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Vp=Wa(rl(Ui(HTMLElement)));class jp extends Vp{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),tt)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(e,i,n,s){this.mutableData=!0}connectedCallback(){ks()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){v(v(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e=e||this.querySelector("template"),!e){let i=new MutationObserver(()=>{if(e=this.querySelector("template"),e)i.disconnect(),this.render();else throw new Error("dom-bind requires a <template> child")});i.observe(this,{childList:!0});return}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let i=this.root.firstChild;i;i=i.nextSibling)this.__children[this.__children.length]=i;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}}customElements.define("dom-bind",jp);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Up=rl(Ut);class Fr extends Up{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!On,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e);this.__chunkingId&&cancelAnimationFrame(this.__chunkingId)}connectedCallback(){if(super.connectedCallback(),ks()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let e=v(v(this).parentNode);for(let i=0;i<this.__instances.length;i++)this.__attachInstance(i,e);this.__chunkingId&&this.__render()}}__ensureTemplatized(){if(!this.__ctor){const e=this;let i=this.template=e._templateInfo?e:this.querySelector("template");if(!i){let s=new MutationObserver(()=>{if(this.querySelector("template"))s.disconnect(),this.__render();else throw new Error("dom-repeat requires a <template> child")});return s.observe(this,{childList:!0}),!1}let n={};n[this.as]=!0,n[this.indexAs]=!0,n[this.itemsIndexAs]=!0,this.__ctor=zi(i,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:n,forwardHostProp:function(s,r){let o=this.__instances;for(let a=0,l;a<o.length&&(l=o[a]);a++)l.forwardHostProp(s,r)},notifyInstanceProp:function(s,r,o){if(lc(this.as,r)){let a=s[this.itemsIndexAs];r==this.as&&(this.items[a]=o);let l=Mt(this.as,`${JSCompiler_renameProperty("items",this)}.${a}`,r);this.notifyPath(l,o)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if(typeof e=="string"){let i=e,n=this.__getMethodHost();return function(){return n[i].apply(n,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn){if(!e)this.__debounceRender(this.__render,this.delay);else if(this.__observePaths){let i=this.__observePaths;for(let n=0;n<i.length;n++)e.indexOf(i[n])===0&&this.__debounceRender(this.__render,this.delay)}}}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||(e.path==="items"&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(e,i=0){this.__renderDebouncer=He.debounce(this.__renderDebouncer,i>0?St.after(i):Ae,e.bind(this)),$a(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Qa()}__render(){if(!this.__ensureTemplatized())return;let e=this.items||[];const i=this.__sortAndFilterItems(e),n=this.__calculateLimit(i.length);this.__updateInstances(e,n,i),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>{this.__chunkingId=null,this.__continueChunking()})),this._setRenderedItemCount(this.__instances.length),(!On||this.notifyDomChange)&&this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(e){let i=new Array(e.length);for(let n=0;n<e.length;n++)i[n]=n;return this.__filterFn&&(i=i.filter((n,s,r)=>this.__filterFn(e[n],s,r))),this.__sortFn&&i.sort((n,s)=>this.__sortFn(e[n],e[s])),i}__calculateLimit(e){let i=e;const n=this.__instances.length;if(this.initialCount){let s;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(i=Math.min(e,this.initialCount),s=Math.max(i-n,0),this.__chunkCount=s||1):(s=Math.min(Math.max(e-n,0),this.__chunkCount),i=Math.min(n+s,e)),this.__shouldMeasureChunk=s===this.__chunkCount,this.__shouldContinueChunking=i<e,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,i}__continueChunking(){if(this.__shouldMeasureChunk){const e=performance.now()-this.__renderStartTime,i=this._targetFrameTime/e;this.__chunkCount=Math.round(this.__chunkCount*i)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(e,i,n){const s=this.__itemsIdxToInstIdx={};let r;for(r=0;r<i;r++){let o=this.__instances[r],a=n[r],l=e[a];s[a]=r,o?(o._setPendingProperty(this.as,l),o._setPendingProperty(this.indexAs,r),o._setPendingProperty(this.itemsIndexAs,a),o._flushProperties()):this.__insertInstance(l,r,a)}for(let o=this.__instances.length-1;o>=r;o--)this.__detachAndRemoveInstance(o)}__detachInstance(e){let i=this.__instances[e];const n=v(i.root);for(let s=0;s<i.children.length;s++){let r=i.children[s];n.appendChild(r)}return i}__attachInstance(e,i){let n=this.__instances[e];i.insertBefore(n.root,this)}__detachAndRemoveInstance(e){this.__detachInstance(e),this.__instances.splice(e,1)}__stampInstance(e,i,n){let s={};return s[this.as]=e,s[this.indexAs]=i,s[this.itemsIndexAs]=n,new this.__ctor(s)}__insertInstance(e,i,n){const s=this.__stampInstance(e,i,n);let r=this.__instances[i+1],o=r?r.children[0]:this;return v(v(this).parentNode).insertBefore(s.root,o),this.__instances[i]=s,s}_showHideChildren(e){for(let i=0;i<this.__instances.length;i++)this.__instances[i]._showHideChildren(e)}__handleItemPath(e,i){let n=e.slice(6),s=n.indexOf("."),r=s<0?n:n.substring(0,s);if(r==parseInt(r,10)){let o=s<0?"":n.substring(s+1);this.__handleObservedPaths(o);let a=this.__itemsIdxToInstIdx[r],l=this.__instances[a];if(l){let c=this.as+(o?"."+o:"");l._setPendingPropertyOrPath(c,i,!1,!0),l._flushProperties()}return!0}}itemForElement(e){let i=this.modelForElement(e);return i&&i[this.as]}indexForElement(e){let i=this.modelForElement(e);return i&&i[this.indexAs]}modelForElement(e){return Hp(this.template,e)}}customElements.define(Fr.is,Fr);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class ll extends Ut{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=He.debounce(this.__renderDebouncer,Ae,()=>this.__render()),$a(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const e=v(this).parentNode;(!e||e.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!v(e).host)&&this.__teardownInstance()}connectedCallback(){super.connectedCallback(),ks()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const e=this;let i=e._templateInfo?e:v(e).querySelector("template");if(!i){let n=new MutationObserver(()=>{if(v(this).querySelector("template"))n.disconnect(),this.__render();else throw new Error("dom-if requires a <template> child")});return n.observe(this,{childList:!0}),!1}this.__template=i}return!0}__ensureInstance(){let e=v(this).parentNode;if(this.__hasInstance()){let i=this.__getInstanceNodes();if(i&&i.length&&v(this).previousSibling!==i[i.length-1])for(let s=0,r;s<i.length&&(r=i[s]);s++)v(e).insertBefore(r,this)}else{if(!e||!this.__ensureTemplate())return!1;this.__createAndInsertInstance(e)}return!0}render(){Qa()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),(!On||this.notifyDomChange)&&this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(e){}__teardownInstance(){}_showHideChildren(){}}class Kp extends ll{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(e){const i=this.__dataHost||this;if(tt&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const n=i._bindTemplate(this.__template,!0);n.runEffects=(s,r,o)=>{let a=this.__syncInfo;if(this.if)a&&(this.__syncInfo=null,this._showHideChildren(),r=Object.assign(a.changedProps,r)),s(r,o);else if(this.__instance)if(a||(a=this.__syncInfo={runEffects:s,changedProps:{}}),o)for(const l in r){const c=Se(l);a.changedProps[c]=this.__dataHost[c]}else Object.assign(a.changedProps,r)},this.__instance=i._stampTemplate(this.__template,n),v(e).insertBefore(this.__instance,this)}__syncHostProperties(){const e=this.__syncInfo;e&&(this.__syncInfo=null,e.runEffects(e.changedProps,!1))}__teardownInstance(){const e=this.__dataHost||this;this.__instance&&(e._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==e&&(this.__instance.__hidden=e,al(e,this.__instance.templateInfo.childNodes)),e||this.__syncHostProperties()}}class Wp extends ll{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(e){this.__ctor||(this.__ctor=zi(this.__template,this,{mutableData:!0,forwardHostProp:function(i,n){this.__instance&&(this.if?this.__instance.forwardHostProp(i,n):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Se(i)]=!0))}})),this.__instance=new this.__ctor,v(e).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let i=v(e[0]).parentNode;if(i){i=v(i);for(let n=0,s;n<e.length&&(s=e[n]);n++)i.removeChild(s)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let e=this.__invalidProps;if(e){this.__invalidProps=null;for(let i in e)this.__instance._setPendingProperty(i,this.__dataHost[i]);this.__instance._flushProperties()}}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==e&&(this.__instance.__hidden=e,this.__instance._showHideChildren(e)),e||this.__syncHostProperties()}}const Br=ko?Kp:Wp;customElements.define(Br.is,Br);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let qp=te(t=>{let e=Ki(t);class i extends e{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(s,r){let o=r.path;if(o==JSCompiler_renameProperty("items",this)){let a=r.base||[],l=this.__lastItems,c=this.__lastMulti;if(s!==c&&this.clearSelection(),l){let u=Za(a,l);this.__applySplices(u)}this.__lastItems=a,this.__lastMulti=s}else if(r.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(r.value.indexSplices);else{let a=o.slice(`${JSCompiler_renameProperty("items",this)}.`.length),l=parseInt(a,10);a.indexOf(".")<0&&a==l&&this.__deselectChangedIdx(l)}}__applySplices(s){let r=this.__selectedMap;for(let a=0;a<s.length;a++){let l=s[a];r.forEach((c,u)=>{c<l.index||(c>=l.index+l.removed.length?r.set(u,c+l.addedCount-l.removed.length):r.set(u,-1))});for(let c=0;c<l.addedCount;c++){let u=l.index+c;r.has(this.items[u])&&r.set(this.items[u],u)}}this.__updateLinks();let o=0;r.forEach((a,l)=>{a<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),o,1):this.selected=this.selectedItem=null,r.delete(l)):o++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let s=0;this.__selectedMap.forEach(r=>{r>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${r}`,`${JSCompiler_renameProperty("selected",this)}.${s++}`)})}else this.__selectedMap.forEach(s=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${s}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${s}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(s){return this.__selectedMap.has(s)}isIndexSelected(s){return this.isSelected(this.items[s])}__deselectChangedIdx(s){let r=this.__selectedIndexForItemIndex(s);if(r>=0){let o=0;this.__selectedMap.forEach((a,l)=>{r==o++&&this.deselect(l)})}}__selectedIndexForItemIndex(s){let r=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${s}`];if(r)return parseInt(r.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(s){let r=this.__selectedMap.get(s);if(r>=0){this.__selectedMap.delete(s);let o;this.multi&&(o=this.__selectedIndexForItemIndex(r)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),o,1):this.selected=this.selectedItem=null}}deselectIndex(s){this.deselect(this.items[s])}select(s){this.selectIndex(this.items.indexOf(s))}selectIndex(s){let r=this.items[s];this.isSelected(r)?this.toggle&&this.deselectIndex(s):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(r,s),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),r):this.selected=this.selectedItem=r)}}return i}),Yp=qp(Ut);class Hr extends Yp{static get is(){return"array-selector"}static get template(){return null}}customElements.define(Hr.is,Hr);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const mi=new Te;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,i){},prepareTemplateDom(t,e){},prepareTemplateStyles(t,e,i){},styleSubtree(t,e){mi.processStyles(),Bn(t,e)},styleElement(t){mi.processStyles()},styleDocument(t){mi.processStyles(),Bn(document.body,t)},getComputedStyleValue(t,e){return Ma(t,e)},flushCustomStyles(){},nativeCss:bs,nativeShadow:Qi,cssBuild:Ht,disableRuntime:Pa});window.ShadyCSS.CustomStyleInterface=mi;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Vr="include",Jp=window.ShadyCSS.CustomStyleInterface;class Xp extends HTMLElement{constructor(){super(),this._style=null,Jp.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const i=e.getAttribute(Vr);return i&&(e.removeAttribute(Vr),e.textContent=sc(i)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",Xp);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Gp=Ps(HTMLElement).prototype;/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var jr={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},Zp={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},Ur={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},Qp=/[a-z0-9*]/,ef=/U\+/,tf=/^arrow/,nf=/^space(bar)?/,sf=/^escape$/;function Kr(t,e){var i="";if(t){var n=t.toLowerCase();n===" "||nf.test(n)?i="space":sf.test(n)?i="esc":n.length==1?(!e||Qp.test(n))&&(i=n):tf.test(n)?i=n.replace("arrow",""):n=="multiply"?i="*":i=n}return i}function rf(t){var e="";return t&&(t in jr?e=jr[t]:ef.test(t)?(t=parseInt(t.replace("U+","0x"),16),e=String.fromCharCode(t).toLowerCase()):e=t.toLowerCase()),e}function of(t){var e="";return Number(t)&&(t>=65&&t<=90?e=String.fromCharCode(32+t):t>=112&&t<=123?e="f"+(t-112+1):t>=48&&t<=57?e=String(t-48):t>=96&&t<=105?e=String(t-96):e=Zp[t]),e}function af(t,e){return t.key?Kr(t.key,e):t.detail&&t.detail.key?Kr(t.detail.key,e):rf(t.keyIdentifier)||of(t.keyCode)||""}function Wr(t,e){var i=af(e,t.hasModifiers);return i===t.key&&(!t.hasModifiers||!!e.shiftKey==!!t.shiftKey&&!!e.ctrlKey==!!t.ctrlKey&&!!e.altKey==!!t.altKey&&!!e.metaKey==!!t.metaKey)}function lf(t){return t.length===1?{combo:t,key:t,event:"keydown"}:t.split("+").reduce(function(e,i){var n=i.split(":"),s=n[0],r=n[1];return s in Ur?(e[Ur[s]]=!0,e.hasModifiers=!0):(e.key=s,e.event=r||"keydown"),e},{combo:t.split(":").shift()})}function qr(t){return t.trim().split(" ").map(function(e){return lf(e)})}const Ve={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(t,e){this._imperativeKeyBindings[t]=e,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(t,e){for(var i=qr(e),n=0;n<i.length;++n)if(Wr(i[n],t))return!0;return!1},_collectKeyBindings:function(){var t=this.behaviors.map(function(e){return e.keyBindings});return t.indexOf(this.keyBindings)===-1&&t.push(this.keyBindings),t},_prepKeyBindings:function(){this._keyBindings={},this._collectKeyBindings().forEach(function(i){for(var n in i)this._addKeyBinding(n,i[n])},this);for(var t in this._imperativeKeyBindings)this._addKeyBinding(t,this._imperativeKeyBindings[t]);for(var e in this._keyBindings)this._keyBindings[e].sort(function(i,n){var s=i[0].hasModifiers,r=n[0].hasModifiers;return s===r?0:s?-1:1})},_addKeyBinding:function(t,e){qr(t).forEach(function(i){this._keyBindings[i.event]=this._keyBindings[i.event]||[],this._keyBindings[i.event].push([i,e])},this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach(function(t){var e=this._keyBindings[t],i=this._onKeyBindingEvent.bind(this,e);this._boundKeyHandlers.push([this.keyEventTarget,t,i]),this.keyEventTarget.addEventListener(t,i)},this)},_unlistenKeyEventListeners:function(){for(var t,e,i,n;this._boundKeyHandlers.length;)t=this._boundKeyHandlers.pop(),e=t[0],i=t[1],n=t[2],e.removeEventListener(i,n)},_onKeyBindingEvent:function(t,e){if(this.stopKeyboardEventPropagation&&e.stopPropagation(),!e.defaultPrevented)for(var i=0;i<t.length;i++){var n=t[i][0],s=t[i][1];if(Wr(n,e)&&(this._triggerKeyHandler(n,s,e),e.defaultPrevented))return}},_triggerKeyHandler:function(t,e,i){var n=Object.create(t);n.keyboardEvent=i;var s=new CustomEvent(t.event,{detail:n,cancelable:!0});this[e].call(this,s),s.defaultPrevented&&i.preventDefault()}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const cl=j`
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
</custom-style>`;cl.setAttribute("style","display: none;");document.head.appendChild(cl.content);var ul=document.createElement("style");ul.textContent="[hidden] { display: none !important; }";document.head.appendChild(ul);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class ee{constructor(e){ee[" "](e),this.type=e&&e.type||"default",this.key=e&&e.key,e&&"value"in e&&(this.value=e.value)}get value(){var e=this.type,i=this.key;if(e&&i)return ee.types[e]&&ee.types[e][i]}set value(e){var i=this.type,n=this.key;i&&n&&(i=ee.types[i]=ee.types[i]||{},e==null?delete i[n]:i[n]=e)}get list(){var e=this.type;if(e){var i=ee.types[this.type];return i?Object.keys(i).map(function(n){return cf[this.type][n]},this):[]}}byKey(e){return this.key=e,this.value}}ee[" "]=function(){};ee.types={};var cf=ee.types;B({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(t,e,i){var n=new ee({type:t,key:e});return i!==void 0&&i!==n.value?n.value=i:this.value!==n.value&&(this.value=n.value),n},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(t){t&&(this.value=this)},byKey:function(t){return new ee({type:this.type,key:t}).value}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/B({_template:j`
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
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:Gp.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(t){var e=(t||"").split(":");this._iconName=e.pop(),this._iconsetName=e.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(t){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&S(this.root).removeChild(this._img),this._iconName===""?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,S(this.root).appendChild(this._img))}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const be=B({_template:j`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},timeout:{type:Number,value:150},_text:{type:String,value:""}},created:function(){be.instance||(be.instance=this),document.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(t){this._text="",this.async(function(){this._text=t},this.timeout)},_onIronAnnounce:function(t){t.detail&&t.detail.text&&this.announce(t.detail.text)}});be.instance=null;be.requestAvailability=function(){be.instance||(be.instance=document.createElement("iron-a11y-announcer")),document.body?document.body.appendChild(be.instance):document.addEventListener("load",function(){document.body.appendChild(be.instance)})};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/let wn=null;const Gn={properties:{validator:{type:String},invalid:{notify:!0,reflectToAttribute:!0,type:Boolean,value:!1,observer:"_invalidChanged"}},registered:function(){wn=new ee({type:"validator"})},_invalidChanged:function(){this.invalid?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")},get _validator(){return wn&&wn.byKey(this.validator)},hasValidator:function(){return this._validator!=null},validate:function(t){return t===void 0&&this.value!==void 0?this.invalid=!this._getValidity(this.value):this.invalid=!this._getValidity(t),!this.invalid},_getValidity:function(t){return this.hasValidator()?this._validator.validate(t):!0}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/B({_template:j`
    <style>
      :host {
        display: inline-block;
      }
    </style>
    <slot id="content"></slot>
`,is:"iron-input",behaviors:[Gn],properties:{bindValue:{type:String,value:""},value:{type:String,computed:"_computeValue(bindValue)"},allowedPattern:{type:String},autoValidate:{type:Boolean,value:!1},_inputElement:Object},observers:["_bindValueChanged(bindValue, _inputElement)"],listeners:{input:"_onInput",keypress:"_onKeypress"},created:function(){be.requestAvailability(),this._previousValidInput="",this._patternAlreadyChecked=!1},attached:function(){this._observer=S(this).observeNodes((function(t){this._initSlottedInput()}).bind(this))},detached:function(){this._observer&&(S(this).unobserveNodes(this._observer),this._observer=null)},get inputElement(){return this._inputElement},_initSlottedInput:function(){this._inputElement=this.getEffectiveChildren()[0],this.inputElement&&this.inputElement.value&&(this.bindValue=this.inputElement.value),this.fire("iron-input-ready")},get _patternRegExp(){var t;if(this.allowedPattern)t=new RegExp(this.allowedPattern);else switch(this.inputElement.type){case"number":t=/[0-9.,e-]/;break}return t},_bindValueChanged:function(t,e){e&&(t===void 0?e.value=null:t!==e.value&&(this.inputElement.value=t),this.autoValidate&&this.validate(),this.fire("bind-value-changed",{value:t}))},_onInput:function(){if(this.allowedPattern&&!this._patternAlreadyChecked){var t=this._checkPatternValidity();t||(this._announceInvalidCharacter("Invalid string of characters not entered."),this.inputElement.value=this._previousValidInput)}this.bindValue=this._previousValidInput=this.inputElement.value,this._patternAlreadyChecked=!1},_isPrintable:function(t){var e=t.keyCode==8||t.keyCode==9||t.keyCode==13||t.keyCode==27,i=t.keyCode==19||t.keyCode==20||t.keyCode==45||t.keyCode==46||t.keyCode==144||t.keyCode==145||t.keyCode>32&&t.keyCode<41||t.keyCode>111&&t.keyCode<124;return!e&&!(t.charCode==0&&i)},_onKeypress:function(t){if(!(!this.allowedPattern&&this.inputElement.type!=="number")){var e=this._patternRegExp;if(e&&!(t.metaKey||t.ctrlKey||t.altKey)){this._patternAlreadyChecked=!0;var i=String.fromCharCode(t.charCode);this._isPrintable(t)&&!e.test(i)&&(t.preventDefault(),this._announceInvalidCharacter("Invalid character "+i+" not entered."))}}},_checkPatternValidity:function(){var t=this._patternRegExp;if(!t)return!0;for(var e=0;e<this.inputElement.value.length;e++)if(!t.test(this.inputElement.value[e]))return!1;return!0},validate:function(){if(!this.inputElement)return this.invalid=!1,!0;var t=this.inputElement.checkValidity();return t&&(this.required&&this.bindValue===""?t=!1:this.hasValidator()&&(t=Gn.validate.call(this,this.bindValue))),this.invalid=!t,this.fire("iron-input-validate"),t},_announceInvalidCharacter:function(t){this.fire("iron-announce",{text:t})},_computeValue:function(t){return t}});/**
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
*/const hl=j`<custom-style>
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
</custom-style>`;hl.setAttribute("style","display: none;");document.head.appendChild(hl.content);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const dl={attached:function(){this.fire("addon-attached")},update:function(t){}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/B({_template:j`
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
`,is:"paper-input-char-counter",behaviors:[dl],properties:{_charCounterStr:{type:String,value:"0"}},update:function(t){if(t.inputElement){t.value=t.value||"";var e=t.value.toString().length.toString();t.inputElement.hasAttribute("maxlength")&&(e+="/"+t.inputElement.getAttribute("maxlength")),this._charCounterStr=e}}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const pl=j`
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
`;pl.setAttribute("style","display: none;");document.head.appendChild(pl.content);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const fl=j`
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
</custom-style>`;fl.setAttribute("style","display: none;");document.head.appendChild(fl.content);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const ml=j`
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
`;ml.setAttribute("style","display: none;");document.head.appendChild(ml.content);B({_template:j`
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
`,is:"paper-input-container",properties:{noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},attrForValue:{type:String,value:"bind-value"},autoValidate:{type:Boolean,value:!1},invalid:{observer:"_invalidChanged",type:Boolean,value:!1},focused:{readOnly:!0,type:Boolean,value:!1,notify:!0},_addons:{type:Array},_inputHasContent:{type:Boolean,value:!1},_inputSelector:{type:String,value:"input,iron-input,textarea,.paper-input-input"},_boundOnFocus:{type:Function,value:function(){return this._onFocus.bind(this)}},_boundOnBlur:{type:Function,value:function(){return this._onBlur.bind(this)}},_boundOnInput:{type:Function,value:function(){return this._onInput.bind(this)}},_boundValueChanged:{type:Function,value:function(){return this._onValueChanged.bind(this)}}},listeners:{"addon-attached":"_onAddonAttached","iron-input-validate":"_onIronInputValidate"},get _valueChangedEvent(){return this.attrForValue+"-changed"},get _propertyForValue(){return ls(this.attrForValue)},get _inputElement(){return S(this).querySelector(this._inputSelector)},get _inputElementValue(){return this._inputElement[this._propertyForValue]||this._inputElement.value},ready:function(){this.__isFirstValueUpdate=!0,this._addons||(this._addons=[]),this.addEventListener("focus",this._boundOnFocus,!0),this.addEventListener("blur",this._boundOnBlur,!0)},attached:function(){this.attrForValue?this._inputElement.addEventListener(this._valueChangedEvent,this._boundValueChanged):this.addEventListener("input",this._onInput),this._inputElementValue&&this._inputElementValue!=""?this._handleValueAndAutoValidate(this._inputElement):this._handleValue(this._inputElement)},_onAddonAttached:function(t){this._addons||(this._addons=[]);var e=t.target;this._addons.indexOf(e)===-1&&(this._addons.push(e),this.isAttached&&this._handleValue(this._inputElement))},_onFocus:function(){this._setFocused(!0)},_onBlur:function(){this._setFocused(!1),this._handleValueAndAutoValidate(this._inputElement)},_onInput:function(t){this._handleValueAndAutoValidate(t.target)},_onValueChanged:function(t){var e=t.target;this.__isFirstValueUpdate&&(this.__isFirstValueUpdate=!1,e.value===void 0||e.value==="")||this._handleValueAndAutoValidate(t.target)},_handleValue:function(t){var e=this._inputElementValue;e||e===0||t.type==="number"&&!t.checkValidity()?this._inputHasContent=!0:this._inputHasContent=!1,this.updateAddons({inputElement:t,value:e,invalid:this.invalid})},_handleValueAndAutoValidate:function(t){if(this.autoValidate&&t){var e;t.validate?e=t.validate(this._inputElementValue):e=t.checkValidity(),this.invalid=!e}this._handleValue(t)},_onIronInputValidate:function(t){this.invalid=this._inputElement.invalid},_invalidChanged:function(){this._addons&&this.updateAddons({invalid:this.invalid})},updateAddons:function(t){for(var e,i=0;e=this._addons[i];i++)e.update(t)},_computeInputContentClass:function(t,e,i,n,s){var r="input-content";if(t)s&&(r+=" label-is-hidden"),n&&(r+=" is-invalid");else{var o=this.querySelector("label");e||s?(r+=" label-is-floating",this.$.labelAndInputContainer.style.position="static",n?r+=" is-invalid":i&&(r+=" label-is-highlighted")):(o&&(this.$.labelAndInputContainer.style.position="relative"),n&&(r+=" is-invalid"))}return i&&(r+=" focused"),r},_computeUnderlineClass:function(t,e){var i="underline";return e?i+=" is-invalid":t&&(i+=" is-highlighted"),i},_computeAddOnContentClass:function(t,e){var i="add-on-content";return e?i+=" is-invalid":t&&(i+=" is-highlighted"),i}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/B({_template:j`
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
`,is:"paper-input-error",behaviors:[dl],properties:{invalid:{readOnly:!0,reflectToAttribute:!0,type:Boolean}},update:function(t){this._setInvalid(t.invalid)}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const gl={properties:{name:{type:String},value:{notify:!0,type:String},required:{type:Boolean,value:!1}},attached:function(){},detached:function(){}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const ot={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0),this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(t){this._setFocused(t.type==="focus")},_disabledChanged:function(t,e){this.setAttribute("aria-disabled",t?"true":"false"),this.style.pointerEvents=t?"none":"",t?(this._oldTabIndex=this.getAttribute("tabindex"),this._setFocused(!1),this.tabIndex=-1,this.blur()):this._oldTabIndex!==void 0&&(this._oldTabIndex===null?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const et={};et.NextLabelID=1;et.NextAddonID=1;et.NextInputID=1;const uf={properties:{label:{type:String},value:{notify:!0,type:String},disabled:{type:Boolean,value:!1},invalid:{type:Boolean,value:!1,notify:!0},allowedPattern:{type:String},type:{type:String},list:{type:String},pattern:{type:String},required:{type:Boolean,value:!1},errorMessage:{type:String},charCounter:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},autoValidate:{type:Boolean,value:!1},validator:{type:String},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,observer:"_autofocusChanged"},inputmode:{type:String},minlength:{type:Number},maxlength:{type:Number},min:{type:String},max:{type:String},step:{type:String},name:{type:String},placeholder:{type:String,value:""},readonly:{type:Boolean,value:!1},size:{type:Number},autocapitalize:{type:String,value:"none"},autocorrect:{type:String,value:"off"},autosave:{type:String},results:{type:Number},accept:{type:String},multiple:{type:Boolean},_ariaDescribedBy:{type:String,value:""},_ariaLabelledBy:{type:String,value:""},_inputId:{type:String,value:""}},listeners:{"addon-attached":"_onAddonAttached"},keyBindings:{"shift+tab:keydown":"_onShiftTabDown"},hostAttributes:{tabindex:0},get inputElement(){return this.$||(this.$={}),this.$.input||(this._generateInputId(),this.$.input=this.$$("#"+this._inputId)),this.$.input},get _focusableElement(){return this.inputElement},created:function(){this._typesThatHaveText=["date","datetime","datetime-local","month","time","week","file"]},attached:function(){this._updateAriaLabelledBy(),!Ut&&this.inputElement&&this._typesThatHaveText.indexOf(this.inputElement.type)!==-1&&(this.alwaysFloatLabel=!0)},_appendStringWithSpace:function(t,e){return t?t=t+" "+e:t=e,t},_onAddonAttached:function(t){var e=S(t).rootTarget;if(e.id)this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,e.id);else{var i="paper-input-add-on-"+et.NextAddonID++;e.id=i,this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,i)}},validate:function(){return this.inputElement.validate()},_focusBlurHandler:function(t){ot._focusBlurHandler.call(this,t),this.focused&&!this._shiftTabPressed&&this._focusableElement&&this._focusableElement.focus()},_onShiftTabDown:function(t){var e=this.getAttribute("tabindex");this._shiftTabPressed=!0,this.setAttribute("tabindex","-1"),this.async(function(){this.setAttribute("tabindex",e),this._shiftTabPressed=!1},1)},_handleAutoValidate:function(){this.autoValidate&&this.validate()},updateValueAndPreserveCaret:function(t){try{var e=this.inputElement.selectionStart;this.value=t,this.inputElement.selectionStart=e,this.inputElement.selectionEnd=e}catch{this.value=t}},_computeAlwaysFloatLabel:function(t,e){return e||t},_updateAriaLabelledBy:function(){var t=S(this.root).querySelector("label");if(!t){this._ariaLabelledBy="";return}var e;t.id?e=t.id:(e="paper-input-label-"+et.NextLabelID++,t.id=e),this._ariaLabelledBy=e},_generateInputId:function(){(!this._inputId||this._inputId==="")&&(this._inputId="input-"+et.NextInputID++)},_onChange:function(t){this.shadowRoot&&this.fire(t.type,{sourceEvent:t},{node:this,bubbles:t.bubbles,cancelable:t.cancelable})},_autofocusChanged:function(){if(this.autofocus&&this._focusableElement){var t=document.activeElement,e=t instanceof HTMLElement,i=e&&t!==document.body&&t!==document.documentElement;i||this._focusableElement.focus()}}},hf=[ot,Ve,uf];/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/B({is:"paper-input",_template:j`
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
  `,behaviors:[hf,gl],properties:{value:{type:String},inputRole:{type:String,value:void 0},inputAriaHaspopup:{type:String,value:void 0}},get _focusableElement(){return this.inputElement._inputElement},listeners:{"iron-input-ready":"_onIronInputReady"},_onIronInputReady:function(){this.$.nativeInput||(this.$.nativeInput=this.$$("input")),this.inputElement&&this._typesThatHaveText.indexOf(this.$.nativeInput.type)!==-1&&(this.alwaysFloatLabel=!0),this.inputElement.bindValue&&this.$.container._handleValueAndAutoValidate(this.inputElement)}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/let ii;const df=()=>{if(ii!==void 0)return ii;const t=document.createElement("div");Object.assign(t.style,{overflow:"auto",position:"fixed",left:"0px",top:"0px",maxWidth:"100px",maxHeight:"100px"});const e=document.createElement("div");return e.style.width="200px",e.style.height="200px",t.appendChild(e),document.body.appendChild(t),ii=Math.abs(t.offsetWidth-100)>1?t.offsetWidth-t.clientWidth:0,document.body.removeChild(t),ii},pf={properties:{sizingTarget:{type:Object,value:function(){return this}},fitInto:{type:Object,value:window},noOverlap:{type:Boolean},positionTarget:{type:Element},horizontalAlign:{type:String},verticalAlign:{type:String},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},autoFitOnAttach:{type:Boolean,value:!1},expandSizingTargetForScrollbars:{type:Boolean,value:!1},_fitInfo:{type:Object}},get _fitWidth(){var t;return this.fitInto===window?t=this.fitInto.innerWidth:t=this.fitInto.getBoundingClientRect().width,t},get _fitHeight(){var t;return this.fitInto===window?t=this.fitInto.innerHeight:t=this.fitInto.getBoundingClientRect().height,t},get _fitLeft(){var t;return this.fitInto===window?t=0:t=this.fitInto.getBoundingClientRect().left,t},get _fitTop(){var t;return this.fitInto===window?t=0:t=this.fitInto.getBoundingClientRect().top,t},get _defaultPositionTarget(){var t=S(this).parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&(t=t.host),t},get _localeHorizontalAlign(){if(this._isRTL){if(this.horizontalAlign==="right")return"left";if(this.horizontalAlign==="left")return"right"}return this.horizontalAlign},get __shouldPosition(){return(this.horizontalAlign||this.verticalAlign)&&this.positionTarget},get _isRTL(){return typeof this._memoizedIsRTL>"u"&&(this._memoizedIsRTL=window.getComputedStyle(this).direction=="rtl"),this._memoizedIsRTL},attached:function(){this.positionTarget=this.positionTarget||this._defaultPositionTarget,this.autoFitOnAttach&&(window.getComputedStyle(this).display==="none"?setTimeout((function(){this.fit()}).bind(this)):(window.ShadyDOM&&ShadyDOM.flush(),this.fit()))},detached:function(){this.__deferredFit&&(clearTimeout(this.__deferredFit),this.__deferredFit=null)},fit:function(){this.position(),this.constrain(),this.center()},_discoverInfo:function(){if(!this._fitInfo){var t=window.getComputedStyle(this),e=window.getComputedStyle(this.sizingTarget);this._fitInfo={inlineStyle:{top:this.style.top||"",left:this.style.left||"",position:this.style.position||""},sizerInlineStyle:{maxWidth:this.sizingTarget.style.maxWidth||"",maxHeight:this.sizingTarget.style.maxHeight||"",boxSizing:this.sizingTarget.style.boxSizing||""},positionedBy:{vertically:t.top!=="auto"?"top":t.bottom!=="auto"?"bottom":null,horizontally:t.left!=="auto"?"left":t.right!=="auto"?"right":null},sizedBy:{height:e.maxHeight!=="none",width:e.maxWidth!=="none",minWidth:parseInt(e.minWidth,10)||0,minHeight:parseInt(e.minHeight,10)||0},margin:{top:parseInt(t.marginTop,10)||0,right:parseInt(t.marginRight,10)||0,bottom:parseInt(t.marginBottom,10)||0,left:parseInt(t.marginLeft,10)||0}}}},resetFit:function(){var t=this._fitInfo||{};for(var e in t.sizerInlineStyle)this.sizingTarget.style[e]=t.sizerInlineStyle[e];for(var e in t.inlineStyle)this.style[e]=t.inlineStyle[e];this._fitInfo=null},refit:function(){var t=this.sizingTarget.scrollLeft,e=this.sizingTarget.scrollTop;this.resetFit(),this.fit(),this.sizingTarget.scrollLeft=t,this.sizingTarget.scrollTop=e},position:function(){if(!this.__shouldPosition)return;this._discoverInfo(),window.ShadyDOM&&window.ShadyDOM.flush(),this.style.position="fixed",this.sizingTarget.style.boxSizing="border-box",this.style.left="0px",this.style.top="0px";var t=this.getBoundingClientRect(),e=this.__getNormalizedRect(this.positionTarget),i=this.__getNormalizedRect(this.fitInto);let n,s,r,o;this.expandSizingTargetForScrollbars&&(n=this.sizingTarget.offsetWidth,s=this.sizingTarget.offsetHeight,r=this.sizingTarget.clientWidth,o=this.sizingTarget.clientHeight);var a=this._fitInfo.margin,l={width:t.width+a.left+a.right,height:t.height+a.top+a.bottom},c=this.__getPosition(this._localeHorizontalAlign,this.verticalAlign,l,t,e,i),u=c.left+a.left,h=c.top+a.top,d=Math.min(i.right-a.right,u+t.width),p=Math.min(i.bottom-a.bottom,h+t.height);u=Math.max(i.left+a.left,Math.min(u,d-this._fitInfo.sizedBy.minWidth)),h=Math.max(i.top+a.top,Math.min(h,p-this._fitInfo.sizedBy.minHeight));const f=Math.max(d-u,this._fitInfo.sizedBy.minWidth),m=Math.max(p-h,this._fitInfo.sizedBy.minHeight);this.sizingTarget.style.maxWidth=f+"px",this.sizingTarget.style.maxHeight=m+"px";const g=u-t.left,_=h-t.top;if(this.style.left=`${g}px`,this.style.top=`${_}px`,this.expandSizingTargetForScrollbars){const y=this.sizingTarget.offsetHeight,b=this.sizingTarget.clientHeight,w=s-o,k=y-b-w;if(k>0){const X=i.height-a.top-a.bottom,K=Math.min(X,m+k);this.sizingTarget.style.maxHeight=`${K}px`;const L=this.sizingTarget.offsetHeight,M=L-y;let F;c.verticalAlign==="top"?F=_:c.verticalAlign==="middle"?F=_-M/2:c.verticalAlign==="bottom"&&(F=_-M),F=Math.max(i.top+a.top,Math.min(F,i.bottom-a.bottom-L)),this.style.top=`${F}px`}const E=this.sizingTarget.offsetWidth,H=this.sizingTarget.clientWidth,$=n-r,V=E-H-$;if(V>0){const X=df(),K=i.width-a.left-a.right,L=Math.min(K,f+V-X);this.sizingTarget.style.maxWidth=`${L}px`;const M=this.sizingTarget.offsetWidth+X,F=M-E;let A;c.horizontalAlign==="left"?A=g:c.horizontalAlign==="center"?A=g-F/2:c.horizontalAlign==="right"&&(A=g-F),A=Math.max(i.left+a.left,Math.min(A,i.right-a.right-M)),this.style.left=`${A}px`}}},constrain:function(){if(!this.__shouldPosition){this._discoverInfo();var t=this._fitInfo;t.positionedBy.vertically||(this.style.position="fixed",this.style.top="0px"),t.positionedBy.horizontally||(this.style.position="fixed",this.style.left="0px"),this.sizingTarget.style.boxSizing="border-box";var e=this.getBoundingClientRect();t.sizedBy.height||this.__sizeDimension(e,t.positionedBy.vertically,"top","bottom","Height"),t.sizedBy.width||this.__sizeDimension(e,t.positionedBy.horizontally,"left","right","Width")}},_sizeDimension:function(t,e,i,n,s){this.__sizeDimension(t,e,i,n,s)},__sizeDimension:function(t,e,i,n,s){var r=this._fitInfo,o=this.__getNormalizedRect(this.fitInto),a=s==="Width"?o.width:o.height,l=e===n,c=l?a-t[n]:t[i],u=r.margin[l?i:n],h="offset"+s,d=this[h]-this.sizingTarget[h];this.sizingTarget.style["max"+s]=a-u-c-d+"px"},center:function(){if(!this.__shouldPosition){this._discoverInfo();var t=this._fitInfo.positionedBy;if(!(t.vertically&&t.horizontally)){this.style.position="fixed",t.vertically||(this.style.top="0px"),t.horizontally||(this.style.left="0px");var e=this.getBoundingClientRect(),i=this.__getNormalizedRect(this.fitInto);if(!t.vertically){var n=i.top-e.top+(i.height-e.height)/2;this.style.top=n+"px"}if(!t.horizontally){var s=i.left-e.left+(i.width-e.width)/2;this.style.left=s+"px"}}}},__getNormalizedRect:function(t){return t===document.documentElement||t===window?{top:0,left:0,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth,bottom:window.innerHeight}:t.getBoundingClientRect()},__getOffscreenArea:function(t,e,i){var n=Math.min(0,t.top)+Math.min(0,i.bottom-(t.top+e.height)),s=Math.min(0,t.left)+Math.min(0,i.right-(t.left+e.width));return Math.abs(n)*e.width+Math.abs(s)*e.height},__getPosition:function(t,e,i,n,s,r){var o=[{verticalAlign:"top",horizontalAlign:"left",top:s.top+this.verticalOffset,left:s.left+this.horizontalOffset},{verticalAlign:"top",horizontalAlign:"right",top:s.top+this.verticalOffset,left:s.right-i.width-this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"left",top:s.bottom-i.height-this.verticalOffset,left:s.left+this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"right",top:s.bottom-i.height-this.verticalOffset,left:s.right-i.width-this.horizontalOffset}];if(this.noOverlap){for(var a=0,l=o.length;a<l;a++){var c={};for(var u in o[a])c[u]=o[a][u];o.push(c)}o[0].top=o[1].top+=s.height,o[2].top=o[3].top-=s.height,o[4].left=o[6].left+=s.width,o[5].left=o[7].left-=s.width}e=e==="auto"?null:e,t=t==="auto"?null:t,(!t||t==="center")&&(o.push({verticalAlign:"top",horizontalAlign:"center",top:s.top+this.verticalOffset+(this.noOverlap?s.height:0),left:s.left-n.width/2+s.width/2+this.horizontalOffset}),o.push({verticalAlign:"bottom",horizontalAlign:"center",top:s.bottom-i.height-this.verticalOffset-(this.noOverlap?s.height:0),left:s.left-n.width/2+s.width/2+this.horizontalOffset})),(!e||e==="middle")&&(o.push({verticalAlign:"middle",horizontalAlign:"left",top:s.top-n.height/2+s.height/2+this.verticalOffset,left:s.left+this.horizontalOffset+(this.noOverlap?s.width:0)}),o.push({verticalAlign:"middle",horizontalAlign:"right",top:s.top-n.height/2+s.height/2+this.verticalOffset,left:s.right-i.width-this.horizontalOffset-(this.noOverlap?s.width:0)})),e==="middle"&&t==="center"&&o.push({verticalAlign:"middle",horizontalAlign:"center",top:s.top-n.height/2+s.height/2+this.verticalOffset,left:s.left-n.width/2+s.width/2+this.horizontalOffset});for(var h,a=0;a<o.length;a++){var d=o[a],p=d.verticalAlign===e,f=d.horizontalAlign===t;if(!this.dynamicAlign&&!this.noOverlap&&p&&f){h=d;break}var m=(!e||p)&&(!t||f);if(!(!this.dynamicAlign&&!m)){if(d.offscreenArea=this.__getOffscreenArea(d,i,r),d.offscreenArea===0&&m){h=d;break}h=h||d;var g=d.offscreenArea-h.offscreenArea;(g<0||g===0&&(p||f))&&(h=d)}}return h}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var ni=new Set;const ff={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(ni.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach(function(t){this.resizerShouldNotify(t)&&this._notifyDescendant(t)},this),this._fireResize())},assignParentResizable:function(t){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=t,t&&t._interestedResizables.indexOf(this)===-1&&(t._interestedResizables.push(this),t._subscribeIronResize(this))},stopResizeNotificationsFor:function(t){var e=this._interestedResizables.indexOf(t);e>-1&&(this._interestedResizables.splice(e,1),this._unsubscribeIronResize(t))},_subscribeIronResize:function(t){t.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(t){t.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(t){return!0},_onDescendantIronResize:function(t){if(this._notifyingDescendant){t.stopPropagation();return}Vi||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(t){var e=S(t).rootTarget;e!==this&&(e.assignParentResizable(this),this._notifyDescendant(e),t.stopPropagation())},_parentResizableChanged:function(t){t&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(t){this.isAttached&&(this._notifyingDescendant=!0,t.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if(document.readyState==="loading"){var t=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",function e(){document.removeEventListener("readystatechange",e),t()})}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach(function(e){e!==this&&e._findParent()},this):(ni.forEach(function(e){e!==this&&e._findParent()},this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?ni.delete(this):ni.add(this)}};/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var qe=Element.prototype,si=qe.matches||qe.matchesSelector||qe.mozMatchesSelector||qe.msMatchesSelector||qe.oMatchesSelector||qe.webkitMatchesSelector;class mf{getTabbableNodes(e){var i=[],n=this._collectTabbableNodes(e,i);return n?this._sortByTabIndex(i):i}isFocusable(e){return si.call(e,"input, select, textarea, button, object")?si.call(e,":not([disabled])"):si.call(e,"a[href], area[href], iframe, [tabindex], [contentEditable]")}isTabbable(e){return this.isFocusable(e)&&si.call(e,':not([tabindex="-1"])')&&this._isVisible(e)}_normalizedTabIndex(e){if(this.isFocusable(e)){var i=e.getAttribute("tabindex")||0;return Number(i)}return-1}_collectTabbableNodes(e,i){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var n=e;if(!this._isVisible(n))return!1;var s=this._normalizedTabIndex(n),r=s>0;s>=0&&i.push(n);var o;n.localName==="content"||n.localName==="slot"?o=S(n).getDistributedNodes():o=S(n.root||n).children;for(var a=0;a<o.length;a++)r=this._collectTabbableNodes(o[a],i)||r;return r}_isVisible(e){var i=e.style;return i.visibility!=="hidden"&&i.display!=="none"?(i=window.getComputedStyle(e),i.visibility!=="hidden"&&i.display!=="none"):!1}_sortByTabIndex(e){var i=e.length;if(i<2)return e;var n=Math.ceil(i/2),s=this._sortByTabIndex(e.slice(0,n)),r=this._sortByTabIndex(e.slice(n));return this._mergeSortByTabIndex(s,r)}_mergeSortByTabIndex(e,i){for(var n=[];e.length>0&&i.length>0;)this._hasLowerTabOrder(e[0],i[0])?n.push(i.shift()):n.push(e.shift());return n.concat(e,i)}_hasLowerTabOrder(e,i){var n=Math.max(e.tabIndex,0),s=Math.max(i.tabIndex,0);return n===0||s===0?s>n:n>s}}const gf=new mf;/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/B({_template:j`
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
`,is:"iron-overlay-backdrop",properties:{opened:{reflectToAttribute:!0,type:Boolean,value:!1,observer:"_openedChanged"}},listeners:{transitionend:"_onTransitionend"},created:function(){this.__openedRaf=null},attached:function(){this.opened&&this._openedChanged(this.opened)},prepare:function(){this.opened&&!this.parentNode&&S(document.body).appendChild(this)},open:function(){this.opened=!0},close:function(){this.opened=!1},complete:function(){!this.opened&&this.parentNode===document.body&&S(this.parentNode).removeChild(this)},_onTransitionend:function(t){t&&t.target===this&&this.complete()},_openedChanged:function(t){if(t)this.prepare();else{var e=window.getComputedStyle(this);(e.transitionDuration==="0s"||e.opacity==0)&&this.complete()}this.isAttached&&(this.__openedRaf&&(window.cancelAnimationFrame(this.__openedRaf),this.__openedRaf=null),this.scrollTop=this.scrollTop,this.__openedRaf=window.requestAnimationFrame((function(){this.__openedRaf=null,this.toggleClass("opened",this.opened)}).bind(this)))}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class _f{constructor(){this._overlays=[],this._minimumZ=101,this._backdropElement=null,Ua(document.documentElement,"tap",function(){}),document.addEventListener("tap",this._onCaptureClick.bind(this),!0),document.addEventListener("focus",this._onCaptureFocus.bind(this),!0),document.addEventListener("keydown",this._onCaptureKeyDown.bind(this),!0)}get backdropElement(){return this._backdropElement||(this._backdropElement=document.createElement("iron-overlay-backdrop")),this._backdropElement}get deepActiveElement(){var e=document.activeElement;for((!e||!(e instanceof Element))&&(e=document.body);e.root&&S(e.root).activeElement;)e=S(e.root).activeElement;return e}_bringOverlayAtIndexToFront(e){var i=this._overlays[e];if(i){var n=this._overlays.length-1,s=this._overlays[n];if(s&&this._shouldBeBehindOverlay(i,s)&&n--,!(e>=n)){var r=Math.max(this.currentOverlayZ(),this._minimumZ);for(this._getZ(i)<=r&&this._applyOverlayZ(i,r);e<n;)this._overlays[e]=this._overlays[e+1],e++;this._overlays[n]=i}}}addOrRemoveOverlay(e){e.opened?this.addOverlay(e):this.removeOverlay(e)}addOverlay(e){var i=this._overlays.indexOf(e);if(i>=0){this._bringOverlayAtIndexToFront(i),this.trackBackdrop();return}var n=this._overlays.length,s=this._overlays[n-1],r=Math.max(this._getZ(s),this._minimumZ),o=this._getZ(e);if(s&&this._shouldBeBehindOverlay(e,s)){this._applyOverlayZ(s,r),n--;var a=this._overlays[n-1];r=Math.max(this._getZ(a),this._minimumZ)}o<=r&&this._applyOverlayZ(e,r),this._overlays.splice(n,0,e),this.trackBackdrop()}removeOverlay(e){var i=this._overlays.indexOf(e);i!==-1&&(this._overlays.splice(i,1),this.trackBackdrop())}currentOverlay(){var e=this._overlays.length-1;return this._overlays[e]}currentOverlayZ(){return this._getZ(this.currentOverlay())}ensureMinimumZ(e){this._minimumZ=Math.max(this._minimumZ,e)}focusOverlay(){var e=this.currentOverlay();e&&e._applyFocus()}trackBackdrop(){var e=this._overlayWithBackdrop();!e&&!this._backdropElement||(this.backdropElement.style.zIndex=this._getZ(e)-1,this.backdropElement.opened=!!e,this.backdropElement.prepare())}getBackdrops(){for(var e=[],i=0;i<this._overlays.length;i++)this._overlays[i].withBackdrop&&e.push(this._overlays[i]);return e}backdropZ(){return this._getZ(this._overlayWithBackdrop())-1}_overlayWithBackdrop(){for(var e=this._overlays.length-1;e>=0;e--)if(this._overlays[e].withBackdrop)return this._overlays[e]}_getZ(e){var i=this._minimumZ;if(e){var n=Number(e.style.zIndex||window.getComputedStyle(e).zIndex);n===n&&(i=n)}return i}_setZ(e,i){e.style.zIndex=i}_applyOverlayZ(e,i){this._setZ(e,i+2)}_overlayInPath(e){e=e||[];for(var i=0;i<e.length;i++)if(e[i]._manager===this)return e[i]}_onCaptureClick(e){var i=this._overlays.length-1;if(i!==-1)for(var n=S(e).path,s;(s=this._overlays[i])&&this._overlayInPath(n)!==s&&(s._onCaptureClick(e),s.allowClickThrough);)i--}_onCaptureFocus(e){var i=this.currentOverlay();i&&i._onCaptureFocus(e)}_onCaptureKeyDown(e){var i=this.currentOverlay();i&&(Ve.keyboardEventMatchesKeys(e,"esc")?i._onCaptureEsc(e):Ve.keyboardEventMatchesKeys(e,"tab")&&i._onCaptureTab(e))}_shouldBeBehindOverlay(e,i){return!e.alwaysOnTop&&i.alwaysOnTop}}const yf=new _f;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var Mi={pageX:0,pageY:0},Yr=null,xn=[],Di=["wheel","mousewheel","DOMMouseScroll","touchstart","touchmove"],gi,Is;function bf(t){ue.indexOf(t)>=0||(ue.length===0&&xf(),ue.push(t),Is=ue[ue.length-1])}function vf(t){var e=ue.indexOf(t);e!==-1&&(ue.splice(e,1),Is=ue[ue.length-1],ue.length===0&&Cf())}const ue=[];function wf(t){if(t.cancelable&&Sf(t)&&t.preventDefault(),t.targetTouches){var e=t.targetTouches[0];Mi.pageX=e.pageX,Mi.pageY=e.pageY}}function xf(){gi=gi||wf.bind(void 0);for(var t=0,e=Di.length;t<e;t++)document.addEventListener(Di[t],gi,{capture:!0,passive:!1})}function Cf(){for(var t=0,e=Di.length;t<e;t++)document.removeEventListener(Di[t],gi,{capture:!0,passive:!1})}function Sf(t){var e=S(t).rootTarget;if(t.type!=="touchmove"&&Yr!==e&&(Yr=e,xn=Ef(S(t).path)),!xn.length)return!0;if(t.type==="touchstart")return!1;var i=Pf(t);return!Af(xn,i.deltaX,i.deltaY)}function Ef(t){for(var e=[],i=t.indexOf(Is),n=0;n<=i;n++)if(t[n].nodeType===Node.ELEMENT_NODE){var s=t[n],r=s.style;r.overflow!=="scroll"&&r.overflow!=="auto"&&(r=window.getComputedStyle(s)),(r.overflow==="scroll"||r.overflow==="auto")&&e.push(s)}return e}function Af(t,e,i){if(!(!e&&!i))for(var n=Math.abs(i)>=Math.abs(e),s=0;s<t.length;s++){var r=t[s],o=!1;if(n?o=i<0?r.scrollTop>0:r.scrollTop<r.scrollHeight-r.clientHeight:o=e<0?r.scrollLeft>0:r.scrollLeft<r.scrollWidth-r.clientWidth,o)return r}}function Pf(t){var e={deltaX:t.deltaX,deltaY:t.deltaY};if(!("deltaX"in t)){if("wheelDeltaX"in t&&"wheelDeltaY"in t)e.deltaX=-t.wheelDeltaX,e.deltaY=-t.wheelDeltaY;else if("wheelDelta"in t)e.deltaX=0,e.deltaY=-t.wheelDelta;else if("axis"in t)e.deltaX=t.axis===1?t.detail:0,e.deltaY=t.axis===2?t.detail:0;else if(t.targetTouches){var i=t.targetTouches[0];e.deltaX=Mi.pageX-i.pageX,e.deltaY=Mi.pageY-i.pageY}}return e}/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const xt={properties:{opened:{observer:"_openedChanged",type:Boolean,value:!1,notify:!0},canceled:{observer:"_canceledChanged",readOnly:!0,type:Boolean,value:!1},withBackdrop:{observer:"_withBackdropChanged",type:Boolean},noAutoFocus:{type:Boolean,value:!1},noCancelOnEscKey:{type:Boolean,value:!1},noCancelOnOutsideClick:{type:Boolean,value:!1},closingReason:{type:Object},restoreFocusOnClose:{type:Boolean,value:!1},allowClickThrough:{type:Boolean},alwaysOnTop:{type:Boolean},scrollAction:{type:String},_manager:{type:Object,value:yf},_focusedChild:{type:Object}},listeners:{"iron-resize":"_onIronResize"},observers:["__updateScrollObservers(isAttached, opened, scrollAction)"],get backdropElement(){return this._manager.backdropElement},get _focusNode(){return this._focusedChild||S(this).querySelector("[autofocus]")||this},get _focusableNodes(){return gf.getTabbableNodes(this)},ready:function(){this.__isAnimating=!1,this.__shouldRemoveTabIndex=!1,this.__firstFocusableNode=this.__lastFocusableNode=null,this.__rafs={},this.__restoreFocusNode=null,this.__scrollTop=this.__scrollLeft=null,this.__onCaptureScroll=this.__onCaptureScroll.bind(this),this.__rootNodes=null,this._ensureSetup()},attached:function(){this.opened&&this._openedChanged(this.opened),this._observer=S(this).observeNodes(this._onNodesChange)},detached:function(){this._observer&&S(this).unobserveNodes(this._observer),this._observer=null;for(var t in this.__rafs)this.__rafs[t]!==null&&cancelAnimationFrame(this.__rafs[t]);this.__rafs={},this._manager.removeOverlay(this),this.__isAnimating&&(this.opened?this._finishRenderOpened():(this._applyFocus(),this._finishRenderClosed()))},toggle:function(){this._setCanceled(!1),this.opened=!this.opened},open:function(){this._setCanceled(!1),this.opened=!0},close:function(){this._setCanceled(!1),this.opened=!1},cancel:function(t){var e=this.fire("iron-overlay-canceled",t,{cancelable:!0});e.defaultPrevented||(this._setCanceled(!0),this.opened=!1)},invalidateTabbables:function(){this.__firstFocusableNode=this.__lastFocusableNode=null},_ensureSetup:function(){this._overlaySetup||(this._overlaySetup=!0,this.style.outline="none",this.style.display="none")},_openedChanged:function(t){t?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true"),this.isAttached&&(this.__isAnimating=!0,this.__deraf("__openedChanged",this.__openedChanged))},_canceledChanged:function(){this.closingReason=this.closingReason||{},this.closingReason.canceled=this.canceled},_withBackdropChanged:function(){this.withBackdrop&&!this.hasAttribute("tabindex")?(this.setAttribute("tabindex","-1"),this.__shouldRemoveTabIndex=!0):this.__shouldRemoveTabIndex&&(this.removeAttribute("tabindex"),this.__shouldRemoveTabIndex=!1),this.opened&&this.isAttached&&this._manager.trackBackdrop()},_prepareRenderOpened:function(){this.__restoreFocusNode=this._manager.deepActiveElement,this._preparePositioning(),this.refit(),this._finishPositioning(),this.noAutoFocus&&document.activeElement===this._focusNode&&(this._focusNode.blur(),this.__restoreFocusNode.focus())},_renderOpened:function(){this._finishRenderOpened()},_renderClosed:function(){this._finishRenderClosed()},_finishRenderOpened:function(){this.notifyResize(),this.__isAnimating=!1,this.fire("iron-overlay-opened")},_finishRenderClosed:function(){this.style.display="none",this.style.zIndex="",this.notifyResize(),this.__isAnimating=!1,this.fire("iron-overlay-closed",this.closingReason)},_preparePositioning:function(){this.style.transition=this.style.webkitTransition="none",this.style.transform=this.style.webkitTransform="none",this.style.display=""},_finishPositioning:function(){this.style.display="none",this.scrollTop=this.scrollTop,this.style.transition=this.style.webkitTransition="",this.style.transform=this.style.webkitTransform="",this.style.display="",this.scrollTop=this.scrollTop},_applyFocus:function(){if(this.opened)this.noAutoFocus||this._focusNode.focus();else{if(this.restoreFocusOnClose&&this.__restoreFocusNode){var t=this._manager.deepActiveElement;(t===document.body||Of(this,t))&&this.__restoreFocusNode.focus()}this.__restoreFocusNode=null,this._focusNode.blur(),this._focusedChild=null}},_onCaptureClick:function(t){this.noCancelOnOutsideClick||this.cancel(t)},_onCaptureFocus:function(t){if(this.withBackdrop){var e=S(t).path;e.indexOf(this)===-1?(t.stopPropagation(),this._applyFocus()):this._focusedChild=e[0]}},_onCaptureEsc:function(t){this.noCancelOnEscKey||this.cancel(t)},_onCaptureTab:function(t){if(this.withBackdrop){this.__ensureFirstLastFocusables();var e=t.shiftKey,i=e?this.__firstFocusableNode:this.__lastFocusableNode,n=e?this.__lastFocusableNode:this.__firstFocusableNode,s=!1;if(i===n)s=!0;else{var r=this._manager.deepActiveElement;s=r===i||r===this}s&&(t.preventDefault(),this._focusedChild=n,this._applyFocus())}},_onIronResize:function(){this.opened&&!this.__isAnimating&&this.__deraf("refit",this.refit)},_onNodesChange:function(){this.opened&&!this.__isAnimating&&(this.invalidateTabbables(),this.notifyResize())},__ensureFirstLastFocusables:function(){var t=this._focusableNodes;this.__firstFocusableNode=t[0],this.__lastFocusableNode=t[t.length-1]},__openedChanged:function(){this.opened?(this._prepareRenderOpened(),this._manager.addOverlay(this),this._applyFocus(),this._renderOpened()):(this._manager.removeOverlay(this),this._applyFocus(),this._renderClosed())},__deraf:function(t,e){var i=this.__rafs;i[t]!==null&&cancelAnimationFrame(i[t]),i[t]=requestAnimationFrame((function(){i[t]=null,e.call(this)}).bind(this))},__updateScrollObservers:function(t,e,i){!t||!e||!this.__isValidScrollAction(i)?(vf(this),this.__removeScrollListeners()):(i==="lock"&&(this.__saveScrollPosition(),bf(this)),this.__addScrollListeners())},__addScrollListeners:function(){if(!this.__rootNodes){if(this.__rootNodes=[],Vi)for(var t=this;t;)t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host&&this.__rootNodes.push(t),t=t.host||t.assignedSlot||t.parentNode;this.__rootNodes.push(document)}this.__rootNodes.forEach(function(e){e.addEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})},this)},__removeScrollListeners:function(){this.__rootNodes&&this.__rootNodes.forEach(function(t){t.removeEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})},this),this.isAttached||(this.__rootNodes=null)},__isValidScrollAction:function(t){return t==="lock"||t==="refit"||t==="cancel"},__onCaptureScroll:function(t){if(!this.__isAnimating&&!(S(t).path.indexOf(this)>=0))switch(this.scrollAction){case"lock":this.__restoreScrollPosition();break;case"refit":this.__deraf("refit",this.refit);break;case"cancel":this.cancel(t);break}},__saveScrollPosition:function(){document.scrollingElement?(this.__scrollTop=document.scrollingElement.scrollTop,this.__scrollLeft=document.scrollingElement.scrollLeft):(this.__scrollTop=Math.max(document.documentElement.scrollTop,document.body.scrollTop),this.__scrollLeft=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft))},__restoreScrollPosition:function(){document.scrollingElement?(document.scrollingElement.scrollTop=this.__scrollTop,document.scrollingElement.scrollLeft=this.__scrollLeft):(document.documentElement.scrollTop=document.body.scrollTop=this.__scrollTop,document.documentElement.scrollLeft=document.body.scrollLeft=this.__scrollLeft)}},Tf=t=>t.assignedSlot||t.parentNode||t.host,Of=(t,e)=>{for(let i=e;i;i=Tf(i))if(i===t)return!0;return!1},kf=[pf,ff,xt];/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const If={properties:{animationConfig:{type:Object},entryAnimation:{observer:"_entryAnimationChanged",type:String},exitAnimation:{observer:"_exitAnimationChanged",type:String}},_entryAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.entry=[{name:this.entryAnimation,node:this}]},_exitAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.exit=[{name:this.exitAnimation,node:this}]},_copyProperties:function(t,e){for(var i in e)t[i]=e[i]},_cloneConfig:function(t){var e={isClone:!0};return this._copyProperties(e,t),e},_getAnimationConfigRecursive:function(t,e,i){if(this.animationConfig){if(this.animationConfig.value&&typeof this.animationConfig.value=="function"){this._warn(this._logf("playAnimation","Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."));return}var n;if(t?n=this.animationConfig[t]:n=this.animationConfig,Array.isArray(n)||(n=[n]),n)for(var s,r=0;s=n[r];r++)if(s.animatable)s.animatable._getAnimationConfigRecursive(s.type||t,e,i);else if(s.id){var o=e[s.id];o?(o.isClone||(e[s.id]=this._cloneConfig(o),o=e[s.id]),this._copyProperties(o,s)):e[s.id]=s}else i.push(s)}},getAnimationConfig:function(t){var e={},i=[];this._getAnimationConfigRecursive(t,e,i);for(var n in e)i.push(e[n]);return i}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Nf={_configureAnimations:function(t){var e=[],i=[];if(t.length>0)for(let s,r=0;s=t[r];r++){let o=document.createElement(s.name);if(o.isNeonAnimation){let a=null;o.configure||(o.configure=function(l){return null}),a=o.configure(s),i.push({result:a,config:s,neonAnimation:o})}else console.warn(this.is+":",s.name,"not found!")}for(var n=0;n<i.length;n++){let s=i[n].result,r=i[n].config,o=i[n].neonAnimation;try{typeof s.cancel!="function"&&(s=document.timeline.play(s))}catch(a){s=null,console.warn("Couldnt play","(",r.name,").",a)}s&&e.push({neonAnimation:o,config:r,animation:s})}return e},_shouldComplete:function(t){for(var e=!0,i=0;i<t.length;i++)if(t[i].animation.playState!="finished"){e=!1;break}return e},_complete:function(t){for(var e=0;e<t.length;e++)t[e].neonAnimation.complete(t[e].config);for(var e=0;e<t.length;e++)t[e].animation.cancel()},playAnimation:function(t,e){var i=this.getAnimationConfig(t);if(i){this._active=this._active||{},this._active[t]&&(this._complete(this._active[t]),delete this._active[t]);var n=this._configureAnimations(i);if(n.length==0){this.fire("neon-animation-finish",e,{bubbles:!1});return}this._active[t]=n;for(var s=0;s<n.length;s++)n[s].animation.onfinish=(function(){this._shouldComplete(n)&&(this._complete(n),delete this._active[t],this.fire("neon-animation-finish",e,{bubbles:!1}))}).bind(this)}},cancelAnimation:function(){for(var t in this._active){var e=this._active[t];for(var i in e)e[i].animation.cancel()}this._active={}}},Rf=[If,Nf];/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/B({_template:j`
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
`,is:"iron-dropdown",behaviors:[ot,Ve,kf,Rf],properties:{horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},openAnimationConfig:{type:Object},closeAnimationConfig:{type:Object},focusTarget:{type:Object},noAnimations:{type:Boolean,value:!1},allowOutsideScroll:{type:Boolean,value:!1,observer:"_allowOutsideScrollChanged"}},listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},observers:["_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)"],get containedElement(){for(var t=S(this.$.content).getDistributedNodes(),e=0,i=t.length;e<i;e++)if(t[e].nodeType===Node.ELEMENT_NODE)return t[e]},ready:function(){this.scrollAction||(this.scrollAction=this.allowOutsideScroll?"refit":"lock"),this._readied=!0},attached:function(){(!this.sizingTarget||this.sizingTarget===this)&&(this.sizingTarget=this.containedElement||this)},detached:function(){this.cancelAnimation()},_openedChanged:function(){this.opened&&this.disabled?this.cancel():(this.cancelAnimation(),this._updateAnimationConfig(),xt._openedChanged.apply(this,arguments))},_renderOpened:function(){!this.noAnimations&&this.animationConfig.open?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("open")):xt._renderOpened.apply(this,arguments)},_renderClosed:function(){!this.noAnimations&&this.animationConfig.close?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("close")):xt._renderClosed.apply(this,arguments)},_onNeonAnimationFinish:function(){this.$.contentWrapper.classList.remove("animating"),this.opened?this._finishRenderOpened():this._finishRenderClosed()},_updateAnimationConfig:function(){for(var t=this.containedElement,e=[].concat(this.openAnimationConfig||[]).concat(this.closeAnimationConfig||[]),i=0;i<e.length;i++)e[i].node=t;this.animationConfig={open:this.openAnimationConfig,close:this.closeAnimationConfig}},_updateOverlayPosition:function(){this.isAttached&&this.notifyResize()},_allowOutsideScrollChanged:function(t){this._readied&&(t?(!this.scrollAction||this.scrollAction==="lock")&&(this.scrollAction="refit"):this.scrollAction="lock")},_applyFocus:function(){var t=this.focusTarget||this.containedElement;t&&this.opened&&!this.noAutoFocus?t.focus():xt._applyFocus.apply(this,arguments)}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const ct={properties:{animationTiming:{type:Object,value:function(){return{duration:500,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"both"}}}},isNeonAnimation:!0,created:function(){document.body.animate||console.warn("No web animations detected. This element will not function without a web animations polyfill.")},timingFromConfig:function(t){if(t.timing)for(var e in t.timing)this.animationTiming[e]=t.timing[e];return this.animationTiming},setPrefixedProperty:function(t,e,i){for(var n={transform:["webkitTransform"],transformOrigin:["mozTransformOrigin","webkitTransformOrigin"]},s=n[e],r,o=0;r=s[o];o++)t.style[r]=i;t.style[e]=i},complete:function(t){}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/B({is:"fade-in-animation",behaviors:[ct],configure:function(t){var e=t.node;return this._effect=new KeyframeEffect(e,[{opacity:"0"},{opacity:"1"}],this.timingFromConfig(t)),this._effect}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/B({is:"fade-out-animation",behaviors:[ct],configure:function(t){var e=t.node;return this._effect=new KeyframeEffect(e,[{opacity:"1"},{opacity:"0"}],this.timingFromConfig(t)),this._effect}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const _l=j`
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
</custom-style>`;_l.setAttribute("style","display: none;");document.head.appendChild(_l.content);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/B({is:"paper-menu-grow-height-animation",_template:null,behaviors:[ct],configure:function(t){var e=t.node,i=e.getBoundingClientRect(),n=i.height;return this._effect=new KeyframeEffect(e,[{height:n/2+"px"},{height:n+"px"}],this.timingFromConfig(t)),this._effect}});B({is:"paper-menu-grow-width-animation",_template:null,behaviors:[ct],configure:function(t){var e=t.node,i=e.getBoundingClientRect(),n=i.width;return this._effect=new KeyframeEffect(e,[{width:n/2+"px"},{width:n+"px"}],this.timingFromConfig(t)),this._effect}});B({is:"paper-menu-shrink-width-animation",_template:null,behaviors:[ct],configure:function(t){var e=t.node,i=e.getBoundingClientRect(),n=i.width;return this._effect=new KeyframeEffect(e,[{width:n+"px"},{width:n-n/20+"px"}],this.timingFromConfig(t)),this._effect}});B({is:"paper-menu-shrink-height-animation",_template:null,behaviors:[ct],configure:function(t){var e=t.node,i=e.getBoundingClientRect(),n=i.height;return this.setPrefixedProperty(e,"transformOrigin","0 0"),this._effect=new KeyframeEffect(e,[{height:n+"px",transform:"translateY(0)"},{height:n/2+"px",transform:"translateY(-20px)"}],this.timingFromConfig(t)),this._effect}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var kt={ANIMATION_CUBIC_BEZIER:"cubic-bezier(.3,.95,.5,1)",MAX_ANIMATION_TIME_MS:400};const Lf=B({_template:j`
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
`,is:"paper-menu-button",behaviors:[Ve,ot],properties:{opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},noOverlap:{type:Boolean},noAnimations:{type:Boolean,value:!1},ignoreSelect:{type:Boolean,value:!1},closeOnActivate:{type:Boolean,value:!1},openAnimationConfig:{type:Object,value:function(){return[{name:"fade-in-animation",timing:{delay:100,duration:200}},{name:"paper-menu-grow-width-animation",timing:{delay:100,duration:150,easing:kt.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-grow-height-animation",timing:{delay:100,duration:275,easing:kt.ANIMATION_CUBIC_BEZIER}}]}},closeAnimationConfig:{type:Object,value:function(){return[{name:"fade-out-animation",timing:{duration:150}},{name:"paper-menu-shrink-width-animation",timing:{delay:100,duration:50,easing:kt.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-shrink-height-animation",timing:{duration:200,easing:"ease-in"}}]}},allowOutsideScroll:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!0},expandSizingTargetForScrollbars:{type:Boolean,value:!1},_dropdownContent:{type:Object}},hostAttributes:{role:"group","aria-haspopup":"true"},listeners:{"iron-activate":"_onIronActivate","iron-select":"_onIronSelect"},get contentElement(){for(var t=S(this.$.content).getDistributedNodes(),e=0,i=t.length;e<i;e++)if(t[e].nodeType===Node.ELEMENT_NODE)return t[e]},toggle:function(){this.opened?this.close():this.open()},open:function(){this.disabled||this.$.dropdown.open()},close:function(){this.$.dropdown.close()},_onIronSelect:function(t){this.ignoreSelect||this.close()},_onIronActivate:function(t){this.closeOnActivate&&this.close()},_openedChanged:function(t,e){t?(this._dropdownContent=this.contentElement,this.fire("paper-dropdown-open")):e!=null&&this.fire("paper-dropdown-close")},_disabledChanged:function(t){ot._disabledChanged.apply(this,arguments),t&&this.opened&&this.close()},__onIronOverlayCanceled:function(t){var e=t.detail,i=this.$.trigger,n=S(e).path;n.indexOf(i)>-1&&t.preventDefault()}});Object.keys(kt).forEach(function(t){Lf[t]=kt[t]});/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var ce={distance:function(t,e,i,n){var s=t-i,r=e-n;return Math.sqrt(s*s+r*r)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};function yl(t){this.element=t,this.width=this.boundingRect.width,this.height=this.boundingRect.height,this.size=Math.max(this.width,this.height)}yl.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function(t,e){var i=ce.distance(t,e,0,0),n=ce.distance(t,e,this.width,0),s=ce.distance(t,e,0,this.height),r=ce.distance(t,e,this.width,this.height);return Math.max(i,n,s,r)}};function Re(t){this.element=t,this.color=window.getComputedStyle(t).color,this.wave=document.createElement("div"),this.waveContainer=document.createElement("div"),this.wave.style.backgroundColor=this.color,this.wave.classList.add("wave"),this.waveContainer.classList.add("wave-container"),S(this.waveContainer).appendChild(this.wave),this.resetInteractionState()}Re.MAX_RADIUS=300;Re.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var t;return this.mouseDownStart?(t=ce.now()-this.mouseDownStart,this.mouseUpStart&&(t-=this.mouseUpElapsed),t):0},get mouseUpElapsed(){return this.mouseUpStart?ce.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var t=this.containerMetrics.width*this.containerMetrics.width,e=this.containerMetrics.height*this.containerMetrics.height,i=Math.min(Math.sqrt(t+e),Re.MAX_RADIUS)*1.1+5,n=1.1-.2*(i/Re.MAX_RADIUS),s=this.mouseInteractionSeconds/n,r=i*(1-Math.pow(80,-s));return Math.abs(r)},get opacity(){return this.mouseUpStart?Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity):this.initialOpacity},get outerOpacity(){var t=this.mouseUpElapsedSeconds*.3,e=this.opacity;return Math.max(0,Math.min(t,e))},get isOpacityFullyDecayed(){return this.opacity<.01&&this.radius>=Math.min(this.maxRadius,Re.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,Re.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return Math.min(1,this.radius/this.containerMetrics.size*2/Math.sqrt(2))},get xNow(){return this.xEnd?this.xStart+this.translationFraction*(this.xEnd-this.xStart):this.xStart},get yNow(){return this.yEnd?this.yStart+this.translationFraction*(this.yEnd-this.yStart):this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function(){this.maxRadius=0,this.mouseDownStart=0,this.mouseUpStart=0,this.xStart=0,this.yStart=0,this.xEnd=0,this.yEnd=0,this.slideDistance=0,this.containerMetrics=new yl(this.element)},draw:function(){var t,e,i;this.wave.style.opacity=this.opacity,t=this.radius/(this.containerMetrics.size/2),e=this.xNow-this.containerMetrics.width/2,i=this.yNow-this.containerMetrics.height/2,this.waveContainer.style.webkitTransform="translate("+e+"px, "+i+"px)",this.waveContainer.style.transform="translate3d("+e+"px, "+i+"px, 0)",this.wave.style.webkitTransform="scale("+t+","+t+")",this.wave.style.transform="scale3d("+t+","+t+",1)"},downAction:function(t){var e=this.containerMetrics.width/2,i=this.containerMetrics.height/2;this.resetInteractionState(),this.mouseDownStart=ce.now(),this.center?(this.xStart=e,this.yStart=i,this.slideDistance=ce.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)):(this.xStart=t?t.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2,this.yStart=t?t.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2),this.recenters&&(this.xEnd=e,this.yEnd=i,this.slideDistance=ce.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)),this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart),this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px",this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px",this.waveContainer.style.width=this.containerMetrics.size+"px",this.waveContainer.style.height=this.containerMetrics.size+"px"},upAction:function(t){this.isMouseDown&&(this.mouseUpStart=ce.now())},remove:function(){S(S(this.waveContainer).parentNode).removeChild(this.waveContainer)}};B({_template:j`
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
`,is:"paper-ripple",behaviors:[Ve],properties:{initialOpacity:{type:Number,value:.25},opacityDecayVelocity:{type:Number,value:.8},recenters:{type:Boolean,value:!1},center:{type:Boolean,value:!1},ripples:{type:Array,value:function(){return[]}},animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},attached:function(){S(this).parentNode.nodeType==11?this.keyEventTarget=S(this).getOwnerRoot().host:this.keyEventTarget=S(this).parentNode;var t=this.keyEventTarget;this.listen(t,"up","uiUpAction"),this.listen(t,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction"),this.unlisten(this.keyEventTarget,"down","uiDownAction"),this.keyEventTarget=null},get shouldKeepAnimating(){for(var t=0;t<this.ripples.length;++t)if(!this.ripples[t].isAnimationComplete)return!0;return!1},simulatedRipple:function(){this.downAction(null),this.async(function(){this.upAction()},1)},uiDownAction:function(t){this.noink||this.downAction(t)},downAction:function(t){if(!(this.holdDown&&this.ripples.length>0)){var e=this.addRipple();e.downAction(t),this._animating||(this._animating=!0,this.animate())}},uiUpAction:function(t){this.noink||this.upAction(t)},upAction:function(t){this.holdDown||(this.ripples.forEach(function(e){e.upAction(t)}),this._animating=!0,this.animate())},onAnimationComplete:function(){this._animating=!1,this.$.background.style.backgroundColor="",this.fire("transitionend")},addRipple:function(){var t=new Re(this);return S(this.$.waves).appendChild(t.waveContainer),this.$.background.style.backgroundColor=t.color,this.ripples.push(t),this._setAnimating(!0),t},removeRipple:function(t){var e=this.ripples.indexOf(t);e<0||(this.ripples.splice(e,1),t.remove(),this.ripples.length||this._setAnimating(!1))},animate:function(){if(this._animating){var t,e;for(t=0;t<this.ripples.length;++t)e=this.ripples[t],e.draw(),this.$.background.style.opacity=e.outerOpacity,e.isOpacityFullyDecayed&&!e.isRestingAtMaxRadius&&this.removeRipple(e);!this.shouldKeepAnimating&&this.ripples.length===0?this.onAnimationComplete():window.requestAnimationFrame(this._boundAnimate)}},animateRipple:function(){return this.animate()},_onEnterKeydown:function(){this.uiDownAction(),this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(t,e){e!==void 0&&(t?this.downAction():this.upAction())}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/B({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new ee({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map(function(t){return this.name+":"+t},this)},applyIcon:function(t,e){this.removeIcon(t);var i=this._cloneIcon(e,this.rtlMirroring&&this._targetIsRTL(t));if(i){var n=S(t.root||t);return n.insertBefore(i,n.childNodes[0]),t._svgIcon=i}return null},removeIcon:function(t){t._svgIcon&&(S(t.root||t).removeChild(t._svgIcon),t._svgIcon=null)},_targetIsRTL:function(t){if(this.__targetIsRTL==null)if(this.useGlobalRtlAttribute){var e=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL=e.getAttribute("dir")==="rtl"}else t&&t.nodeType!==Node.ELEMENT_NODE&&(t=t.host),this.__targetIsRTL=t&&window.getComputedStyle(t).direction==="rtl";return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async(function(){this.fire("iron-iconset-added",this,{node:window})})},_createIconMap:function(){var t=Object.create(null);return S(this).querySelectorAll("[id]").forEach(function(e){t[e.id]=e}),t},_cloneIcon:function(t,e){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[t],this.size,e)},_prepareSvgClone:function(t,e,i){if(t){var n=t.cloneNode(!0),s=document.createElementNS("http://www.w3.org/2000/svg","svg"),r=n.getAttribute("viewBox")||"0 0 "+e+" "+e,o="pointer-events: none; display: block; width: 100%; height: 100%;";return i&&n.hasAttribute("mirror-in-rtl")&&(o+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),s.setAttribute("viewBox",r),s.setAttribute("preserveAspectRatio","xMidYMid meet"),s.setAttribute("focusable","false"),s.style.cssText=o,s.appendChild(n).removeAttribute("id"),s}return null}});/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Ns=document.createElement("template");Ns.setAttribute("style","display: none;");Ns.innerHTML=`<iron-iconset-svg name="paper-dropdown-menu" size="24">
<svg><defs>
<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(Ns.content);/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Rs=document.createElement("template");Rs.setAttribute("style","display: none;");Rs.innerHTML=`<dom-module id="paper-dropdown-menu-shared-styles">
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
</dom-module>`;document.head.appendChild(Rs.content);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const zf={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){this.toggles?this._userActivate(!this.active):this.active=!1},_focusChanged:function(t){this._detectKeyboardFocus(t),t||this._setPressed(!1)},_detectKeyboardFocus:function(t){this._setReceivedFocusFromKeyboard(!this.pointerDown&&t)},_userActivate:function(t){this.active!==t&&(this.active=t,this.fire("change"))},_downHandler:function(t){this._setPointerDown(!0),this._setPressed(!0),this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1),this._setPressed(!1)},_spaceKeyDownHandler:function(t){var e=t.detail.keyboardEvent,i=S(e).localTarget;this.isLightDescendant(i)||(e.preventDefault(),e.stopImmediatePropagation(),this._setPressed(!0))},_spaceKeyUpHandler:function(t){var e=t.detail.keyboardEvent,i=S(e).localTarget;this.isLightDescendant(i)||(this.pressed&&this._asyncClick(),this._setPressed(!1))},_asyncClick:function(){this.async(function(){this.click()},1)},_pressedChanged:function(t){this._changedButtonState()},_ariaActiveAttributeChanged:function(t,e){e&&e!=t&&this.hasAttribute(e)&&this.removeAttribute(e)},_activeChanged:function(t,e){this.toggles?this.setAttribute(this.ariaActiveAttribute,t?"true":"false"):this.removeAttribute(this.ariaActiveAttribute),this._changedButtonState()},_controlStateChanged:function(){this.disabled?this._setPressed(!1):this._changedButtonState()},_changedButtonState:function(){this._buttonStateChanged&&this._buttonStateChanged()}},Mf=[Ve,zf];/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Df=Ps(HTMLElement);B({_template:j`
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
`,is:"paper-dropdown-menu",behaviors:[Mf,ot,gl,Gn],properties:{selectedItemLabel:{type:String,notify:!0,readOnly:!0},selectedItem:{type:Object,notify:!0,readOnly:!0},value:{type:String,notify:!0},label:{type:String},placeholder:{type:String},errorMessage:{type:String},opened:{type:Boolean,notify:!0,value:!1,observer:"_openedChanged"},allowOutsideScroll:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1,reflectToAttribute:!0},alwaysFloatLabel:{type:Boolean,value:!1},noAnimations:{type:Boolean,value:!1},horizontalAlign:{type:String,value:"right"},verticalAlign:{type:String,value:"top"},verticalOffset:Number,dynamicAlign:{type:Boolean},restoreFocusOnClose:{type:Boolean,value:!0},expandSizingTargetForScrollbars:{type:Boolean,value:!1}},listeners:{tap:"_onTap"},keyBindings:{"up down":"open",esc:"close"},observers:["_selectedItemChanged(selectedItem)"],_attachDom(t){const e=v(this);return e.attachShadow({mode:"open",delegatesFocus:!0,shadyUpgradeFragment:t}),e.shadowRoot.appendChild(t),Df.prototype._attachDom.call(this,t)},focus(){this.$.input._focusableElement.focus()},attached:function(){var t=this.contentElement;t&&t.selectedItem&&this._setSelectedItem(t.selectedItem)},get contentElement(){for(var t=S(this.$.content).getDistributedNodes(),e=0,i=t.length;e<i;e++)if(t[e].nodeType===Node.ELEMENT_NODE)return t[e]},open:function(){this.$.menuButton.open()},close:function(){this.$.menuButton.close()},_onIronSelect:function(t){this._setSelectedItem(t.detail.item)},_onIronDeselect:function(t){this._setSelectedItem(null)},_onTap:function(t){op(t)===this&&this.open()},_selectedItemChanged:function(t){var e="";t?e=t.label||t.getAttribute("label")||t.textContent.trim():e="",this.value=e,this._setSelectedItemLabel(e)},_computeMenuVerticalOffset:function(t,e){return e||(t?-4:8)},_getValidity:function(t){return this.disabled||!this.required||this.required&&!!this.value},_openedChanged:function(){var t=this.opened?"true":"false",e=this.contentElement;e&&e.setAttribute("aria-expanded",t)}});const It=Symbol("memo"),Ug=t=>{let e=It,i=It,n;return function(s,r){if(e===s&&i===r)return n;const o=t(s,r);return n=o,e=s,i=r,o}},Kg=t=>{let e=It,i=It,n=It,s;return function(r,o,a){if(e===r&&i===o&&n===a)return s;const l=t(r,o,a);return s=l,e=r,i=o,n=a,l}},C=t=>typeof t=="string",gt=()=>{let t,e;const i=new Promise((n,s)=>{t=n,e=s});return i.resolve=t,i.reject=e,i},Jr=t=>t==null?"":""+t,$f=(t,e,i)=>{t.forEach(n=>{e[n]&&(i[n]=e[n])})},Ff=/###/g,Xr=t=>t&&t.indexOf("###")>-1?t.replace(Ff,"."):t,Gr=t=>!t||C(t),Nt=(t,e,i)=>{const n=C(e)?e.split("."):e;let s=0;for(;s<n.length-1;){if(Gr(t))return{};const r=Xr(n[s]);!t[r]&&i&&(t[r]=new i),Object.prototype.hasOwnProperty.call(t,r)?t=t[r]:t={},++s}return Gr(t)?{}:{obj:t,k:Xr(n[s])}},Zr=(t,e,i)=>{const{obj:n,k:s}=Nt(t,e,Object);if(n!==void 0||e.length===1){n[s]=i;return}let r=e[e.length-1],o=e.slice(0,e.length-1),a=Nt(t,o,Object);for(;a.obj===void 0&&o.length;)r=`${o[o.length-1]}.${r}`,o=o.slice(0,o.length-1),a=Nt(t,o,Object),a&&a.obj&&typeof a.obj[`${a.k}.${r}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${r}`]=i},Bf=(t,e,i,n)=>{const{obj:s,k:r}=Nt(t,e,Object);s[r]=s[r]||[],s[r].push(i)},$i=(t,e)=>{const{obj:i,k:n}=Nt(t,e);if(i)return i[n]},Hf=(t,e,i)=>{const n=$i(t,i);return n!==void 0?n:$i(e,i)},bl=(t,e,i)=>{for(const n in e)n!=="__proto__"&&n!=="constructor"&&(n in t?C(t[n])||t[n]instanceof String||C(e[n])||e[n]instanceof String?i&&(t[n]=e[n]):bl(t[n],e[n],i):t[n]=e[n]);return t},Ye=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Vf={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const jf=t=>C(t)?t.replace(/[&<>"'\/]/g,e=>Vf[e]):t;class Uf{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const i=this.regExpMap.get(e);if(i!==void 0)return i;const n=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,n),this.regExpQueue.push(e),n}}const Kf=[" ",",","?","!",";"],Wf=new Uf(20),qf=(t,e,i)=>{e=e||"",i=i||"";const n=Kf.filter(o=>e.indexOf(o)<0&&i.indexOf(o)<0);if(n.length===0)return!0;const s=Wf.getRegExp(`(${n.map(o=>o==="?"?"\\?":o).join("|")})`);let r=!s.test(t);if(!r){const o=t.indexOf(i);o>0&&!s.test(t.substring(0,o))&&(r=!0)}return r},Zn=function(t,e){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!t)return;if(t[e])return t[e];const n=e.split(i);let s=t;for(let r=0;r<n.length;){if(!s||typeof s!="object")return;let o,a="";for(let l=r;l<n.length;++l)if(l!==r&&(a+=i),a+=n[l],o=s[a],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&l<n.length-1)continue;r+=l-r+1;break}s=o}return s},Fi=t=>t&&t.replace("_","-"),Yf={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){console&&console[t]&&console[t].apply(console,e)}};class Bi{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,i)}init(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=i.prefix||"i18next:",this.logger=e||Yf,this.options=i,this.debug=i.debug}log(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return this.forward(i,"log","",!0)}warn(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return this.forward(i,"warn","",!0)}error(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return this.forward(i,"error","")}deprecate(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return this.forward(i,"warn","WARNING DEPRECATED: ",!0)}forward(e,i,n,s){return s&&!this.debug?null:(C(e[0])&&(e[0]=`${n}${this.prefix} ${e[0]}`),this.logger[i](e))}create(e){return new Bi(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new Bi(this.logger,e)}}var he=new Bi;class tn{constructor(){this.observers={}}on(e,i){return e.split(" ").forEach(n=>{this.observers[n]||(this.observers[n]=new Map);const s=this.observers[n].get(i)||0;this.observers[n].set(i,s+1)}),this}off(e,i){if(this.observers[e]){if(!i){delete this.observers[e];return}this.observers[e].delete(i)}}emit(e){for(var i=arguments.length,n=new Array(i>1?i-1:0),s=1;s<i;s++)n[s-1]=arguments[s];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a(...n)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a.apply(a,[e,...n])})}}class Qr extends tn{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const i=this.options.ns.indexOf(e);i>-1&&this.options.ns.splice(i,1)}getResource(e,i,n){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,o=s.ignoreJSONStructure!==void 0?s.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.indexOf(".")>-1?a=e.split("."):(a=[e,i],n&&(Array.isArray(n)?a.push(...n):C(n)&&r?a.push(...n.split(r)):a.push(n)));const l=$i(this.data,a);return!l&&!i&&!n&&e.indexOf(".")>-1&&(e=a[0],i=a[1],n=a.slice(2).join(".")),l||!o||!C(n)?l:Zn(this.data&&this.data[e]&&this.data[e][i],n,r)}addResource(e,i,n,s){let r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let a=[e,i];n&&(a=a.concat(o?n.split(o):n)),e.indexOf(".")>-1&&(a=e.split("."),s=i,i=a[1]),this.addNamespaces(i),Zr(this.data,a,s),r.silent||this.emit("added",e,i,n,s)}addResources(e,i,n){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const r in n)(C(n[r])||Array.isArray(n[r]))&&this.addResource(e,i,r,n[r],{silent:!0});s.silent||this.emit("added",e,i,n)}addResourceBundle(e,i,n,s,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},a=[e,i];e.indexOf(".")>-1&&(a=e.split("."),s=n,n=i,i=a[1]),this.addNamespaces(i);let l=$i(this.data,a)||{};o.skipCopy||(n=JSON.parse(JSON.stringify(n))),s?bl(l,n,r):l={...l,...n},Zr(this.data,a,l),o.silent||this.emit("added",e,i,n)}removeResourceBundle(e,i){this.hasResourceBundle(e,i)&&delete this.data[e][i],this.removeNamespaces(i),this.emit("removed",e,i)}hasResourceBundle(e,i){return this.getResource(e,i)!==void 0}getResourceBundle(e,i){return i||(i=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,i)}:this.getResource(e,i)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const i=this.getDataByLanguage(e);return!!(i&&Object.keys(i)||[]).find(s=>i[s]&&Object.keys(i[s]).length>0)}toJSON(){return this.data}}var vl={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,i,n,s){return t.forEach(r=>{this.processors[r]&&(e=this.processors[r].process(e,i,n,s))}),e}};const eo={};class Hi extends tn{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),$f(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=he.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const n=this.resolve(e,i);return n&&n.res!==void 0}extractFromKey(e,i){let n=i.nsSeparator!==void 0?i.nsSeparator:this.options.nsSeparator;n===void 0&&(n=":");const s=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator;let r=i.ns||this.options.defaultNS||[];const o=n&&e.indexOf(n)>-1,a=!this.options.userDefinedKeySeparator&&!i.keySeparator&&!this.options.userDefinedNsSeparator&&!i.nsSeparator&&!qf(e,n,s);if(o&&!a){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:C(r)?[r]:r};const c=e.split(n);(n!==s||n===s&&this.options.ns.indexOf(c[0])>-1)&&(r=c.shift()),e=c.join(s)}return{key:e,namespaces:C(r)?[r]:r}}translate(e,i,n){if(typeof i!="object"&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),typeof i=="object"&&(i={...i}),i||(i={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const s=i.returnDetails!==void 0?i.returnDetails:this.options.returnDetails,r=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,{key:o,namespaces:a}=this.extractFromKey(e[e.length-1],i),l=a[a.length-1],c=i.lng||this.language,u=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&c.toLowerCase()==="cimode"){if(u){const w=i.nsSeparator||this.options.nsSeparator;return s?{res:`${l}${w}${o}`,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:`${l}${w}${o}`}return s?{res:o,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:o}const h=this.resolve(e,i);let d=h&&h.res;const p=h&&h.usedKey||o,f=h&&h.exactUsedKey||o,m=Object.prototype.toString.apply(d),g=["[object Number]","[object Function]","[object RegExp]"],_=i.joinArrays!==void 0?i.joinArrays:this.options.joinArrays,y=!this.i18nFormat||this.i18nFormat.handleAsObject,b=!C(d)&&typeof d!="boolean"&&typeof d!="number";if(y&&d&&b&&g.indexOf(m)<0&&!(C(_)&&Array.isArray(d))){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const w=this.options.returnedObjectHandler?this.options.returnedObjectHandler(p,d,{...i,ns:a}):`key '${o} (${this.language})' returned an object instead of string.`;return s?(h.res=w,h.usedParams=this.getUsedParamsDetails(i),h):w}if(r){const w=Array.isArray(d),x=w?[]:{},k=w?f:p;for(const E in d)if(Object.prototype.hasOwnProperty.call(d,E)){const H=`${k}${r}${E}`;x[E]=this.translate(H,{...i,joinArrays:!1,ns:a}),x[E]===H&&(x[E]=d[E])}d=x}}else if(y&&C(_)&&Array.isArray(d))d=d.join(_),d&&(d=this.extendTranslation(d,e,i,n));else{let w=!1,x=!1;const k=i.count!==void 0&&!C(i.count),E=Hi.hasDefaultValue(i),H=k?this.pluralResolver.getSuffix(c,i.count,i):"",$=i.ordinal&&k?this.pluralResolver.getSuffix(c,i.count,{ordinal:!1}):"",U=k&&!i.ordinal&&i.count===0&&this.pluralResolver.shouldUseIntlApi(),V=U&&i[`defaultValue${this.options.pluralSeparator}zero`]||i[`defaultValue${H}`]||i[`defaultValue${$}`]||i.defaultValue;!this.isValidLookup(d)&&E&&(w=!0,d=V),this.isValidLookup(d)||(x=!0,d=o);const K=(i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&x?void 0:d,L=E&&V!==d&&this.options.updateMissing;if(x||w||L){if(this.logger.log(L?"updateKey":"missingKey",c,l,o,L?V:d),r){const N=this.resolve(o,{...i,keySeparator:!1});N&&N.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let M=[];const F=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo==="fallback"&&F&&F[0])for(let N=0;N<F.length;N++)M.push(F[N]);else this.options.saveMissingTo==="all"?M=this.languageUtils.toResolveHierarchy(i.lng||this.language):M.push(i.lng||this.language);const A=(N,W,ye)=>{const Yt=E&&ye!==d?ye:K;this.options.missingKeyHandler?this.options.missingKeyHandler(N,l,W,Yt,L,i):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(N,l,W,Yt,L,i),this.emit("missingKey",N,l,W,d)};this.options.saveMissing&&(this.options.saveMissingPlurals&&k?M.forEach(N=>{const W=this.pluralResolver.getSuffixes(N,i);U&&i[`defaultValue${this.options.pluralSeparator}zero`]&&W.indexOf(`${this.options.pluralSeparator}zero`)<0&&W.push(`${this.options.pluralSeparator}zero`),W.forEach(ye=>{A([N],o+ye,i[`defaultValue${ye}`]||V)})}):A(M,o,V))}d=this.extendTranslation(d,e,i,h,n),x&&d===o&&this.options.appendNamespaceToMissingKey&&(d=`${l}:${o}`),(x||w)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?d=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${o}`:o,w?d:void 0):d=this.options.parseMissingKeyHandler(d))}return s?(h.res=d,h.usedParams=this.getUsedParamsDetails(i),h):d}extendTranslation(e,i,n,s,r){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||s.usedLng,s.usedNS,s.usedKey,{resolved:s});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});const c=C(e)&&(n&&n.interpolation&&n.interpolation.skipOnVariables!==void 0?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let u;if(c){const d=e.match(this.interpolator.nestingRegexp);u=d&&d.length}let h=n.replace&&!C(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(h={...this.options.interpolation.defaultVariables,...h}),e=this.interpolator.interpolate(e,h,n.lng||this.language||s.usedLng,n),c){const d=e.match(this.interpolator.nestingRegexp),p=d&&d.length;u<p&&(n.nest=!1)}!n.lng&&this.options.compatibilityAPI!=="v1"&&s&&s.res&&(n.lng=this.language||s.usedLng),n.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var d=arguments.length,p=new Array(d),f=0;f<d;f++)p[f]=arguments[f];return r&&r[0]===p[0]&&!n.context?(o.logger.warn(`It seems you are nesting recursively key: ${p[0]} in key: ${i[0]}`),null):o.translate(...p,i)},n)),n.interpolation&&this.interpolator.reset()}const a=n.postProcess||this.options.postProcess,l=C(a)?[a]:a;return e!=null&&l&&l.length&&n.applyPostProcessor!==!1&&(e=vl.handle(l,e,i,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...s,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),e}resolve(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n,s,r,o,a;return C(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(n))return;const c=this.extractFromKey(l,i),u=c.key;s=u;let h=c.namespaces;this.options.fallbackNS&&(h=h.concat(this.options.fallbackNS));const d=i.count!==void 0&&!C(i.count),p=d&&!i.ordinal&&i.count===0&&this.pluralResolver.shouldUseIntlApi(),f=i.context!==void 0&&(C(i.context)||typeof i.context=="number")&&i.context!=="",m=i.lngs?i.lngs:this.languageUtils.toResolveHierarchy(i.lng||this.language,i.fallbackLng);h.forEach(g=>{this.isValidLookup(n)||(a=g,!eo[`${m[0]}-${g}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&(eo[`${m[0]}-${g}`]=!0,this.logger.warn(`key "${s}" for languages "${m.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),m.forEach(_=>{if(this.isValidLookup(n))return;o=_;const y=[u];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(y,u,_,g,i);else{let w;d&&(w=this.pluralResolver.getSuffix(_,i.count,i));const x=`${this.options.pluralSeparator}zero`,k=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(d&&(y.push(u+w),i.ordinal&&w.indexOf(k)===0&&y.push(u+w.replace(k,this.options.pluralSeparator)),p&&y.push(u+x)),f){const E=`${u}${this.options.contextSeparator}${i.context}`;y.push(E),d&&(y.push(E+w),i.ordinal&&w.indexOf(k)===0&&y.push(E+w.replace(k,this.options.pluralSeparator)),p&&y.push(E+x))}}let b;for(;b=y.pop();)this.isValidLookup(n)||(r=b,n=this.getResource(_,g,b,i))}))})}),{res:n,usedKey:s,exactUsedKey:r,usedLng:o,usedNS:a}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,i,n){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,i,n,s):this.resourceStore.getResource(e,i,n,s)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const i=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],n=e.replace&&!C(e.replace);let s=n?e.replace:e;if(n&&typeof e.count<"u"&&(s.count=e.count),this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),!n){s={...s};for(const r of i)delete s[r]}return s}static hasDefaultValue(e){const i="defaultValue";for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&i===n.substring(0,i.length)&&e[n]!==void 0)return!0;return!1}}const Cn=t=>t.charAt(0).toUpperCase()+t.slice(1);class to{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=he.create("languageUtils")}getScriptPartFromCode(e){if(e=Fi(e),!e||e.indexOf("-")<0)return null;const i=e.split("-");return i.length===2||(i.pop(),i[i.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(i.join("-"))}getLanguagePartFromCode(e){if(e=Fi(e),!e||e.indexOf("-")<0)return e;const i=e.split("-");return this.formatLanguageCode(i[0])}formatLanguageCode(e){if(C(e)&&e.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let s=Intl.getCanonicalLocales(e)[0];if(s&&this.options.lowerCaseLng&&(s=s.toLowerCase()),s)return s}catch{}const i=["hans","hant","latn","cyrl","cans","mong","arab"];let n=e.split("-");return this.options.lowerCaseLng?n=n.map(s=>s.toLowerCase()):n.length===2?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),i.indexOf(n[1].toLowerCase())>-1&&(n[1]=Cn(n[1].toLowerCase()))):n.length===3&&(n[0]=n[0].toLowerCase(),n[1].length===2&&(n[1]=n[1].toUpperCase()),n[0]!=="sgn"&&n[2].length===2&&(n[2]=n[2].toUpperCase()),i.indexOf(n[1].toLowerCase())>-1&&(n[1]=Cn(n[1].toLowerCase())),i.indexOf(n[2].toLowerCase())>-1&&(n[2]=Cn(n[2].toLowerCase()))),n.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let i;return e.forEach(n=>{if(i)return;const s=this.formatLanguageCode(n);(!this.options.supportedLngs||this.isSupportedCode(s))&&(i=s)}),!i&&this.options.supportedLngs&&e.forEach(n=>{if(i)return;const s=this.getLanguagePartFromCode(n);if(this.isSupportedCode(s))return i=s;i=this.options.supportedLngs.find(r=>{if(r===s)return r;if(!(r.indexOf("-")<0&&s.indexOf("-")<0)&&(r.indexOf("-")>0&&s.indexOf("-")<0&&r.substring(0,r.indexOf("-"))===s||r.indexOf(s)===0&&s.length>1))return r})}),i||(i=this.getFallbackCodes(this.options.fallbackLng)[0]),i}getFallbackCodes(e,i){if(!e)return[];if(typeof e=="function"&&(e=e(i)),C(e)&&(e=[e]),Array.isArray(e))return e;if(!i)return e.default||[];let n=e[i];return n||(n=e[this.getScriptPartFromCode(i)]),n||(n=e[this.formatLanguageCode(i)]),n||(n=e[this.getLanguagePartFromCode(i)]),n||(n=e.default),n||[]}toResolveHierarchy(e,i){const n=this.getFallbackCodes(i||this.options.fallbackLng||[],e),s=[],r=o=>{o&&(this.isSupportedCode(o)?s.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return C(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&r(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&r(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&r(this.getLanguagePartFromCode(e))):C(e)&&r(this.formatLanguageCode(e)),n.forEach(o=>{s.indexOf(o)<0&&r(this.formatLanguageCode(o))}),s}}let Jf=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],Xf={1:t=>+(t>1),2:t=>+(t!=1),3:t=>0,4:t=>t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,5:t=>t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5,6:t=>t==1?0:t>=2&&t<=4?1:2,7:t=>t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,8:t=>t==1?0:t==2?1:t!=8&&t!=11?2:3,9:t=>+(t>=2),10:t=>t==1?0:t==2?1:t<7?2:t<11?3:4,11:t=>t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3,12:t=>+(t%10!=1||t%100==11),13:t=>+(t!==0),14:t=>t==1?0:t==2?1:t==3?2:3,15:t=>t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2,16:t=>t%10==1&&t%100!=11?0:t!==0?1:2,17:t=>t==1||t%10==1&&t%100!=11?0:1,18:t=>t==0?0:t==1?1:2,19:t=>t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3,20:t=>t==1?0:t==0||t%100>0&&t%100<20?1:2,21:t=>t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0,22:t=>t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3};const Gf=["v1","v2","v3"],Zf=["v4"],io={zero:0,one:1,two:2,few:3,many:4,other:5},Qf=()=>{const t={};return Jf.forEach(e=>{e.lngs.forEach(i=>{t[i]={numbers:e.nr,plurals:Xf[e.fc]}})}),t};class em{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=i,this.logger=he.create("pluralResolver"),(!this.options.compatibilityJSON||Zf.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=Qf(),this.pluralRulesCache={}}addRule(e,i){this.rules[e]=i}clearCache(){this.pluralRulesCache={}}getRule(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const n=Fi(e==="dev"?"en":e),s=i.ordinal?"ordinal":"cardinal",r=JSON.stringify({cleanedCode:n,type:s});if(r in this.pluralRulesCache)return this.pluralRulesCache[r];let o;try{o=new Intl.PluralRules(n,{type:s})}catch{if(!e.match(/-|_/))return;const l=this.languageUtils.getLanguagePartFromCode(e);o=this.getRule(l,i)}return this.pluralRulesCache[r]=o,o}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=this.getRule(e,i);return this.shouldUseIntlApi()?n&&n.resolvedOptions().pluralCategories.length>1:n&&n.numbers.length>1}getPluralFormsOfKey(e,i){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,n).map(s=>`${i}${s}`)}getSuffixes(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=this.getRule(e,i);return n?this.shouldUseIntlApi()?n.resolvedOptions().pluralCategories.sort((s,r)=>io[s]-io[r]).map(s=>`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${s}`):n.numbers.map(s=>this.getSuffix(e,s,i)):[]}getSuffix(e,i){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const s=this.getRule(e,n);return s?this.shouldUseIntlApi()?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${s.select(i)}`:this.getSuffixRetroCompatible(s,i):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,i){const n=e.noAbs?e.plurals(i):e.plurals(Math.abs(i));let s=e.numbers[n];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(s===2?s="plural":s===1&&(s=""));const r=()=>this.options.prepend&&s.toString()?this.options.prepend+s.toString():s.toString();return this.options.compatibilityJSON==="v1"?s===1?"":typeof s=="number"?`_plural_${s.toString()}`:r():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?r():this.options.prepend&&n.toString()?this.options.prepend+n.toString():n.toString()}shouldUseIntlApi(){return!Gf.includes(this.options.compatibilityJSON)}}const no=function(t,e,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,r=Hf(t,e,i);return!r&&s&&C(i)&&(r=Zn(t,i,n),r===void 0&&(r=Zn(e,i,n))),r},Sn=t=>t.replace(/\$/g,"$$$$");class tm{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=he.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(i=>i),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:i,escapeValue:n,useRawValueToEscape:s,prefix:r,prefixEscaped:o,suffix:a,suffixEscaped:l,formatSeparator:c,unescapeSuffix:u,unescapePrefix:h,nestingPrefix:d,nestingPrefixEscaped:p,nestingSuffix:f,nestingSuffixEscaped:m,nestingOptionsSeparator:g,maxReplaces:_,alwaysFormat:y}=e.interpolation;this.escape=i!==void 0?i:jf,this.escapeValue=n!==void 0?n:!0,this.useRawValueToEscape=s!==void 0?s:!1,this.prefix=r?Ye(r):o||"{{",this.suffix=a?Ye(a):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=u?"":h||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=d?Ye(d):p||Ye("$t("),this.nestingSuffix=f?Ye(f):m||Ye(")"),this.nestingOptionsSeparator=g||",",this.maxReplaces=_||1e3,this.alwaysFormat=y!==void 0?y:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(i,n)=>i&&i.source===n?(i.lastIndex=0,i):new RegExp(n,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,i,n,s){let r,o,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=p=>{if(p.indexOf(this.formatSeparator)<0){const _=no(i,l,p,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(_,void 0,n,{...s,...i,interpolationkey:p}):_}const f=p.split(this.formatSeparator),m=f.shift().trim(),g=f.join(this.formatSeparator).trim();return this.format(no(i,l,m,this.options.keySeparator,this.options.ignoreJSONStructure),g,n,{...s,...i,interpolationkey:m})};this.resetRegExp();const u=s&&s.missingInterpolationHandler||this.options.missingInterpolationHandler,h=s&&s.interpolation&&s.interpolation.skipOnVariables!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:p=>Sn(p)},{regex:this.regexp,safeValue:p=>this.escapeValue?Sn(this.escape(p)):Sn(p)}].forEach(p=>{for(a=0;r=p.regex.exec(e);){const f=r[1].trim();if(o=c(f),o===void 0)if(typeof u=="function"){const g=u(e,r,s);o=C(g)?g:""}else if(s&&Object.prototype.hasOwnProperty.call(s,f))o="";else if(h){o=r[0];continue}else this.logger.warn(`missed to pass in variable ${f} for interpolating ${e}`),o="";else!C(o)&&!this.useRawValueToEscape&&(o=Jr(o));const m=p.safeValue(o);if(e=e.replace(r[0],m),h?(p.regex.lastIndex+=o.length,p.regex.lastIndex-=r[0].length):p.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),e}nest(e,i){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s,r,o;const a=(l,c)=>{const u=this.nestingOptionsSeparator;if(l.indexOf(u)<0)return l;const h=l.split(new RegExp(`${u}[ ]*{`));let d=`{${h[1]}`;l=h[0],d=this.interpolate(d,o);const p=d.match(/'/g),f=d.match(/"/g);(p&&p.length%2===0&&!f||f.length%2!==0)&&(d=d.replace(/'/g,'"'));try{o=JSON.parse(d),c&&(o={...c,...o})}catch(m){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,m),`${l}${u}${d}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,l};for(;s=this.nestingRegexp.exec(e);){let l=[];o={...n},o=o.replace&&!C(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let c=!1;if(s[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(s[1])){const u=s[1].split(this.formatSeparator).map(h=>h.trim());s[1]=u.shift(),l=u,c=!0}if(r=i(a.call(this,s[1].trim(),o),o),r&&s[0]===e&&!C(r))return r;C(r)||(r=Jr(r)),r||(this.logger.warn(`missed to resolve ${s[1]} for nesting ${e}`),r=""),c&&(r=l.reduce((u,h)=>this.format(u,h,n.lng,{...n,interpolationkey:s[1].trim()}),r.trim())),e=e.replace(s[0],r),this.regexp.lastIndex=0}return e}}const im=t=>{let e=t.toLowerCase().trim();const i={};if(t.indexOf("(")>-1){const n=t.split("(");e=n[0].toLowerCase().trim();const s=n[1].substring(0,n[1].length-1);e==="currency"&&s.indexOf(":")<0?i.currency||(i.currency=s.trim()):e==="relativetime"&&s.indexOf(":")<0?i.range||(i.range=s.trim()):s.split(";").forEach(o=>{if(o){const[a,...l]=o.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),u=a.trim();i[u]||(i[u]=c),c==="false"&&(i[u]=!1),c==="true"&&(i[u]=!0),isNaN(c)||(i[u]=parseInt(c,10))}})}return{formatName:e,formatOptions:i}},Je=t=>{const e={};return(i,n,s)=>{let r=s;s&&s.interpolationkey&&s.formatParams&&s.formatParams[s.interpolationkey]&&s[s.interpolationkey]&&(r={...r,[s.interpolationkey]:void 0});const o=n+JSON.stringify(r);let a=e[o];return a||(a=t(Fi(n),s),e[o]=a),a(i)}};class nm{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=he.create("formatter"),this.options=e,this.formats={number:Je((i,n)=>{const s=new Intl.NumberFormat(i,{...n});return r=>s.format(r)}),currency:Je((i,n)=>{const s=new Intl.NumberFormat(i,{...n,style:"currency"});return r=>s.format(r)}),datetime:Je((i,n)=>{const s=new Intl.DateTimeFormat(i,{...n});return r=>s.format(r)}),relativetime:Je((i,n)=>{const s=new Intl.RelativeTimeFormat(i,{...n});return r=>s.format(r,n.range||"day")}),list:Je((i,n)=>{const s=new Intl.ListFormat(i,{...n});return r=>s.format(r)})},this.init(e)}init(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=i.interpolation.formatSeparator||","}add(e,i){this.formats[e.toLowerCase().trim()]=i}addCached(e,i){this.formats[e.toLowerCase().trim()]=Je(i)}format(e,i,n){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=i.split(this.formatSeparator);if(r.length>1&&r[0].indexOf("(")>1&&r[0].indexOf(")")<0&&r.find(a=>a.indexOf(")")>-1)){const a=r.findIndex(l=>l.indexOf(")")>-1);r[0]=[r[0],...r.splice(1,a)].join(this.formatSeparator)}return r.reduce((a,l)=>{const{formatName:c,formatOptions:u}=im(l);if(this.formats[c]){let h=a;try{const d=s&&s.formatParams&&s.formatParams[s.interpolationkey]||{},p=d.locale||d.lng||s.locale||s.lng||n;h=this.formats[c](a,p,{...u,...s,...d})}catch(d){this.logger.warn(d)}return h}else this.logger.warn(`there was no format function for ${c}`);return a},e)}}const sm=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};class rm extends tn{constructor(e,i,n){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=i,this.services=n,this.languageUtils=n.languageUtils,this.options=s,this.logger=he.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=s.maxParallelReads||10,this.readingCalls=0,this.maxRetries=s.maxRetries>=0?s.maxRetries:5,this.retryTimeout=s.retryTimeout>=1?s.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(n,s.backend,s)}queueLoad(e,i,n,s){const r={},o={},a={},l={};return e.forEach(c=>{let u=!0;i.forEach(h=>{const d=`${c}|${h}`;!n.reload&&this.store.hasResourceBundle(c,h)?this.state[d]=2:this.state[d]<0||(this.state[d]===1?o[d]===void 0&&(o[d]=!0):(this.state[d]=1,u=!1,o[d]===void 0&&(o[d]=!0),r[d]===void 0&&(r[d]=!0),l[h]===void 0&&(l[h]=!0)))}),u||(a[c]=!0)}),(Object.keys(r).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:s}),{toLoad:Object.keys(r),pending:Object.keys(o),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(e,i,n){const s=e.split("|"),r=s[0],o=s[1];i&&this.emit("failedLoading",r,o,i),!i&&n&&this.store.addResourceBundle(r,o,n,void 0,void 0,{skipCopy:!0}),this.state[e]=i?-1:2,i&&n&&(this.state[e]=0);const a={};this.queue.forEach(l=>{Bf(l.loaded,[r],o),sm(l,e),i&&l.errors.push(i),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{a[c]||(a[c]={});const u=l.loaded[c];u.length&&u.forEach(h=>{a[c][h]===void 0&&(a[c][h]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(e,i,n){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:i,fcName:n,tried:s,wait:r,callback:o});return}this.readingCalls++;const a=(c,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const h=this.waitingReads.shift();this.read(h.lng,h.ns,h.fcName,h.tried,h.wait,h.callback)}if(c&&u&&s<this.maxRetries){setTimeout(()=>{this.read.call(this,e,i,n,s+1,r*2,o)},r);return}o(c,u)},l=this.backend[n].bind(this.backend);if(l.length===2){try{const c=l(e,i);c&&typeof c.then=="function"?c.then(u=>a(null,u)).catch(a):a(null,c)}catch(c){a(c)}return}return l(e,i,a)}prepareLoading(e,i){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),s&&s();C(e)&&(e=this.languageUtils.toResolveHierarchy(e)),C(i)&&(i=[i]);const r=this.queueLoad(e,i,n,s);if(!r.toLoad.length)return r.pending.length||s(),null;r.toLoad.forEach(o=>{this.loadOne(o)})}load(e,i,n){this.prepareLoading(e,i,{},n)}reload(e,i,n){this.prepareLoading(e,i,{reload:!0},n)}loadOne(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const n=e.split("|"),s=n[0],r=n[1];this.read(s,r,"read",void 0,void 0,(o,a)=>{o&&this.logger.warn(`${i}loading namespace ${r} for language ${s} failed`,o),!o&&a&&this.logger.log(`${i}loaded namespace ${r} for language ${s}`,a),this.loaded(e,o,a)})}saveMissing(e,i,n,s,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(i)){this.logger.warn(`did not save key "${n}" as the namespace "${i}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(n==null||n==="")){if(this.backend&&this.backend.create){const l={...o,isUpdate:r},c=this.backend.create.bind(this.backend);if(c.length<6)try{let u;c.length===5?u=c(e,i,n,s,l):u=c(e,i,n,s),u&&typeof u.then=="function"?u.then(h=>a(null,h)).catch(a):a(null,u)}catch(u){a(u)}else c(e,i,n,s,a,l)}!e||!e[0]||this.store.addResource(e[0],i,n,s)}}}const so=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),C(t[1])&&(e.defaultValue=t[1]),C(t[2])&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const i=t[3]||t[2];Object.keys(i).forEach(n=>{e[n]=i[n]})}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),ro=t=>(C(t.ns)&&(t.ns=[t.ns]),C(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),C(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&t.supportedLngs.indexOf("cimode")<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t),ri=()=>{},om=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(i=>{typeof t[i]=="function"&&(t[i]=t[i].bind(t))})};class jt extends tn{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(super(),this.options=ro(e),this.services={},this.logger=he,this.modules={external:[]},om(this),i&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,i),this;setTimeout(()=>{this.init(e,i)},0)}}init(){var e=this;let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof i=="function"&&(n=i,i={}),!i.defaultNS&&i.defaultNS!==!1&&i.ns&&(C(i.ns)?i.defaultNS=i.ns:i.ns.indexOf("translation")<0&&(i.defaultNS=i.ns[0]));const s=so();this.options={...s,...this.options,...ro(i)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...s.interpolation,...this.options.interpolation}),i.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=i.keySeparator),i.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=i.nsSeparator);const r=u=>u?typeof u=="function"?new u:u:null;if(!this.options.isClone){this.modules.logger?he.init(r(this.modules.logger),this.options):he.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:typeof Intl<"u"&&(u=nm);const h=new to(this.options);this.store=new Qr(this.options.resources,this.options);const d=this.services;d.logger=he,d.resourceStore=this.store,d.languageUtils=h,d.pluralResolver=new em(h,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===s.interpolation.format)&&(d.formatter=r(u),d.formatter.init(d,this.options),this.options.interpolation.format=d.formatter.format.bind(d.formatter)),d.interpolator=new tm(this.options),d.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},d.backendConnector=new rm(r(this.modules.backend),d.resourceStore,d,this.options),d.backendConnector.on("*",function(p){for(var f=arguments.length,m=new Array(f>1?f-1:0),g=1;g<f;g++)m[g-1]=arguments[g];e.emit(p,...m)}),this.modules.languageDetector&&(d.languageDetector=r(this.modules.languageDetector),d.languageDetector.init&&d.languageDetector.init(d,this.options.detection,this.options)),this.modules.i18nFormat&&(d.i18nFormat=r(this.modules.i18nFormat),d.i18nFormat.init&&d.i18nFormat.init(this)),this.translator=new Hi(this.services,this.options),this.translator.on("*",function(p){for(var f=arguments.length,m=new Array(f>1?f-1:0),g=1;g<f;g++)m[g-1]=arguments[g];e.emit(p,...m)}),this.modules.external.forEach(p=>{p.init&&p.init(this)})}if(this.format=this.options.interpolation.format,n||(n=ri),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=function(){return e.store[u](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=function(){return e.store[u](...arguments),e}});const l=gt(),c=()=>{const u=(h,d)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(d),n(h,d)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initImmediate?c():setTimeout(c,0),l}loadResources(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ri;const s=C(e)?e:this.language;if(typeof e=="function"&&(n=e),!this.options.resources||this.options.partialBundledLanguages){if(s&&s.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return n();const r=[],o=a=>{if(!a||a==="cimode")return;this.services.languageUtils.toResolveHierarchy(a).forEach(c=>{c!=="cimode"&&r.indexOf(c)<0&&r.push(c)})};s?o(s):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>o(l)),this.options.preload&&this.options.preload.forEach(a=>o(a)),this.services.backendConnector.load(r,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),n(a)})}else n(null)}reloadResources(e,i,n){const s=gt();return typeof e=="function"&&(n=e,e=void 0),typeof i=="function"&&(n=i,i=void 0),e||(e=this.languages),i||(i=this.options.ns),n||(n=ri),this.services.backendConnector.reload(e,i,r=>{s.resolve(),n(r)}),s}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&vl.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let i=0;i<this.languages.length;i++){const n=this.languages[i];if(!(["cimode","dev"].indexOf(n)>-1)&&this.store.hasLanguageSomeTranslations(n)){this.resolvedLanguage=n;break}}}changeLanguage(e,i){var n=this;this.isLanguageChangingTo=e;const s=gt();this.emit("languageChanging",e);const r=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},o=(l,c)=>{c?(r(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,s.resolve(function(){return n.t(...arguments)}),i&&i(l,function(){return n.t(...arguments)})},a=l=>{!e&&!l&&this.services.languageDetector&&(l=[]);const c=C(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);c&&(this.language||r(c),this.translator.language||this.translator.changeLanguage(c),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(c)),this.loadResources(c,u=>{o(u,c)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),s}getFixedT(e,i,n){var s=this;const r=function(o,a){let l;if(typeof a!="object"){for(var c=arguments.length,u=new Array(c>2?c-2:0),h=2;h<c;h++)u[h-2]=arguments[h];l=s.options.overloadTranslationOptionHandler([o,a].concat(u))}else l={...a};l.lng=l.lng||r.lng,l.lngs=l.lngs||r.lngs,l.ns=l.ns||r.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||n||r.keyPrefix);const d=s.options.keySeparator||".";let p;return l.keyPrefix&&Array.isArray(o)?p=o.map(f=>`${l.keyPrefix}${d}${f}`):p=l.keyPrefix?`${l.keyPrefix}${d}${o}`:o,s.t(p,l)};return C(e)?r.lng=e:r.lngs=e,r.ns=i,r.keyPrefix=n,r}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const n=i.lng||this.resolvedLanguage||this.languages[0],s=this.options?this.options.fallbackLng:!1,r=this.languages[this.languages.length-1];if(n.toLowerCase()==="cimode")return!0;const o=(a,l)=>{const c=this.services.backendConnector.state[`${a}|${l}`];return c===-1||c===0||c===2};if(i.precheck){const a=i.precheck(this,o);if(a!==void 0)return a}return!!(this.hasResourceBundle(n,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(n,e)&&(!s||o(r,e)))}loadNamespaces(e,i){const n=gt();return this.options.ns?(C(e)&&(e=[e]),e.forEach(s=>{this.options.ns.indexOf(s)<0&&this.options.ns.push(s)}),this.loadResources(s=>{n.resolve(),i&&i(s)}),n):(i&&i(),Promise.resolve())}loadLanguages(e,i){const n=gt();C(e)&&(e=[e]);const s=this.options.preload||[],r=e.filter(o=>s.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return r.length?(this.options.preload=s.concat(r),this.loadResources(o=>{n.resolve(),i&&i(o)}),n):(i&&i(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const i=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],n=this.services&&this.services.languageUtils||new to(so());return i.indexOf(n.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;return new jt(e,i)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ri;const n=e.forkResourceStore;n&&delete e.forkResourceStore;const s={...this.options,...e,isClone:!0},r=new jt(s);return(e.debug!==void 0||e.prefix!==void 0)&&(r.logger=r.logger.clone(e)),["store","services","language"].forEach(a=>{r[a]=this[a]}),r.services={...this.services},r.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},n&&(r.store=new Qr(this.store.data,s),r.services.resourceStore=r.store),r.translator=new Hi(r.services,s),r.translator.on("*",function(a){for(var l=arguments.length,c=new Array(l>1?l-1:0),u=1;u<l;u++)c[u-1]=arguments[u];r.emit(a,...c)}),r.init(s,i),r.translator.options=s,r.translator.backendConnector.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},r}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const I=jt.createInstance();I.createInstance=jt.createInstance;I.createInstance;I.dir;I.init;I.loadResources;I.reloadResources;I.use;I.changeLanguage;I.getFixedT;I.t;I.exists;I.setDefaultNamespace;I.hasLoadedNamespace;I.loadNamespaces;I.loadLanguages;const _i=[],nn=()=>{I.isInitialized||I.init({lng:"en",resStore:{en:{}},fallbackLng:!1})},sn=t=>t.reduce((e,i,n)=>(e.count===void 0&&typeof i=="number"&&(e.count=i),typeof i=="object"?{...e,...i}:(e[n]=i,e)),{}),oo=function(t){nn();const e=sn([...arguments].slice(1));return delete e.count,I.t(t,e)},am=function(t,e){nn();const i=sn([...arguments].slice(2)),n=i.count;let s;delete i.count;const r=I.services.pluralResolver.getSuffix(I.language,n);return r?(i.defaultValue=e,s=t+r):(s=t,i.defaultValue=t),I.t(s,i)},lm=function(t,e){nn();const i=sn([...arguments].slice(2));return i.context=t,delete i.count,I.t(e,i)},cm=function(t,e,i){nn();const n=sn([...arguments].slice(3)),s=n.count,r=t?"_"+t:"";let o=e;delete n.count;const a=I.services.pluralResolver.getSuffix(I.language,s);return a?(n.defaultValue=i,o=e+r+a):(o=e,n.context=t),I.t(o,n)},um=(t,e,i)=>{I.init({resources:{}}),I.addResourceBundle(t,e,i)},Wg=te(t=>class extends t{static get properties(){return{t:{type:Object,value(){return{}}}}}_filterT(e){return e.filter(i=>i!==this.t)}_(){return oo.apply(null,this._filterT([...arguments]))}connectedCallback(){super.connectedCallback(),_i.push(this)}disconnectedCallback(){super.disconnectedCallback();const e=_i.indexOf(this);e>=0&&_i.splice(e,1)}gettext(){return oo.apply(null,this._filterT([...arguments]))}ngettext(){return am.apply(null,this._filterT([...arguments]))}pgettext(){return lm.apply(null,this._filterT([...arguments]))}npgettext(){return cm.apply(null,this._filterT([...arguments]))}});class hm extends Ut{static get properties(){return{compatibilityJSON:{type:String,value:"v3"},domain:{type:String,value:"messages"},interpolationPrefix:{type:String,value:"__"},interpolationSuffix:{type:String,value:"__"},language:{type:String,value:"en"},namespace:{type:String,value:"translation"},translations:{type:Object,observer(e){e!=null&&(um(this.language,this.namespace,e),_i.forEach(i=>i.set("t",{})))}},keySeparator:{type:String,value:"."},nsSeparator:{type:String,value:":"}}}ready(){super.ready(),I.init({compatibilityJSON:this.compatibilityJSON,interpolation:{escapeValue:!1,prefix:this.interpolationPrefix,suffix:this.interpolationSuffix},keySeparator:this.keySeparator,lng:this.language,nsSeparator:this.nsSeparator,resStore:{}})}}customElements.define("cosmoz-i18next",hm);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qg=ge(class extends Ue{constructor(t){if(super(t),t.type!==re.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((n=>n!==""))));for(const n in e)e[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(e)}const i=t.element.classList;for(const n of this.st)n in e||(i.remove(n),this.st.delete(n));for(const n in e){const s=!!e[n];s===this.st.has(n)||this.nt?.has(n)||(s?(i.add(n),this.st.add(n)):(i.remove(n),this.st.delete(n)))}return J}}),dm=Ce`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",Q(()=>xe,{styleSheets:[dm]}));/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class pm{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class fm{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise((e=>this.Z=e))}resume(){this.Z?.(),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ao=t=>!$l(t)&&typeof t.then=="function",lo=1073741823;let mm=class extends Wi{constructor(){super(...arguments),this._$Cwt=lo,this._$Cbt=[],this._$CK=new pm(this),this._$CX=new fm}render(...e){return e.find((i=>!ao(i)))??J}update(e,i){const n=this._$Cbt;let s=n.length;this._$Cbt=i;const r=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<i.length&&!(a>this._$Cwt);a++){const l=i[a];if(!ao(l))return this._$Cwt=a,l;a<s&&l===n[a]||(this._$Cwt=lo,s=0,Promise.resolve(l).then((async c=>{for(;o.get();)await o.get();const u=r.deref();if(u!==void 0){const h=u._$Cbt.indexOf(l);h>-1&&h<u._$Cwt&&(u._$Cwt=h,u.setValue(c))}})))}return J}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const Qn=ge(mm);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const co=(t,e,i)=>{const n=new Map;for(let s=e;s<=i;s++)n.set(t[s],s);return n},gm=ge(class extends Ue{constructor(t){if(super(t),t.type!==re.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let n;i===void 0?i=e:e!==void 0&&(n=e);const s=[],r=[];let o=0;for(const a of t)s[o]=n?n(a,o):o,r[o]=i(a,o),o++;return{values:r,keys:s}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,n]){const s=Fl(t),{values:r,keys:o}=this.dt(e,i,n);if(!Array.isArray(s))return this.ut=o,r;const a=this.ut??=[],l=[];let c,u,h=0,d=s.length-1,p=0,f=r.length-1;for(;h<=d&&p<=f;)if(s[h]===null)h++;else if(s[d]===null)d--;else if(a[h]===o[p])l[p]=Ne(s[h],r[p]),h++,p++;else if(a[d]===o[f])l[f]=Ne(s[d],r[f]),d--,f--;else if(a[h]===o[f])l[f]=Ne(s[h],r[f]),ut(t,l[f+1],s[h]),h++,f--;else if(a[d]===o[p])l[p]=Ne(s[d],r[p]),ut(t,s[h],s[d]),d--,p++;else if(c===void 0&&(c=co(o,p,f),u=co(a,h,d)),c.has(a[h]))if(c.has(a[d])){const m=u.get(o[p]),g=m!==void 0?s[m]:null;if(g===null){const _=ut(t,s[h]);Ne(_,r[p]),l[p]=_}else l[p]=Ne(g,r[p]),ut(t,s[h],g),s[m]=null;p++}else cn(s[d]),d--;else cn(s[h]),h++;for(;p<=f;){const m=ut(t,l[f+1]);Ne(m,r[p]),l[p++]=m}for(;h<=d;){const m=s[h++];m!==null&&cn(m)}return this.ut=o,Po(t,l),J}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class rn extends Event{constructor(e){super(rn.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}rn.eventName="rangeChanged";class on extends Event{constructor(e){super(on.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}on.eventName="visibilityChanged";class an extends Event{constructor(){super(an.eventName,{bubbles:!1})}}an.eventName="unpinned";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class _m{constructor(e){this._element=null;const i=e??window;this._node=i,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class ym extends _m{constructor(e,i){super(i),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const n=this._node;this._originalScrollTo=n.scrollTo,this._originalScrollBy=n.scrollBy,this._originalScroll=n.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(e,i){const n=typeof e=="number"&&typeof i=="number"?{left:e,top:i}:e;this._scrollTo(n)}scrollBy(e,i){const n=typeof e=="number"&&typeof i=="number"?{left:e,top:i}:e;n.top!==void 0&&(n.top+=this.scrollTop),n.left!==void 0&&(n.left+=this.scrollLeft),this._scrollTo(n)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,i=null,n=null){this._end!==null&&this._end(),e.behavior==="smooth"?(this._setDestination(e),this._retarget=i,this._end=n):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:i,left:n}=e;return i=i===void 0?void 0:Math.max(0,Math.min(i,this.maxScrollTop)),n=n===void 0?void 0:Math.max(0,Math.min(n,this.maxScrollLeft)),this._destination!==null&&n===this._destination.left&&i===this._destination.top?!1:(this.__destination={top:i,left:n,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,i,n){return this._scrollTo(e,i,n),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:e,scrollLeft:i}=this;let{top:n,left:s}=this._destination;n=Math.min(n||0,this.maxScrollTop),s=Math.min(s||0,this.maxScrollLeft);const r=Math.abs(n-e),o=Math.abs(s-i);r<1&&o<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(e){this._clients.add(e),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let uo=typeof window<"u"?window.ResizeObserver:void 0;const es=Symbol("virtualizerRef"),oi="virtualizer-sizer";let ho;class bm{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw new Error("Virtualizer constructor requires a configuration object");if(e.hostElement)this._init(e);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);const i=e.layout||{};this._layoutInitialized=this._initLayout(i)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new uo(()=>this._hostElementSizeChanged()),this._childrenRO=new uo(this._childrenSizeChanged.bind(this))}_initHostElement(e){const i=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),i[es]=this}connected(){this._initObservers();const e=this._isScroller;this._clippingAncestors=xm(this._hostElement,e),this._scrollerController=new ym(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(e=>e.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const i=this._hostElement.style;i.display=i.display||"block",i.position=i.position||"relative",i.contain=i.contain||"size layout",this._isScroller&&(i.overflow=i.overflow||"auto",i.minHeight=i.minHeight||"150px")}_getSizer(){const e=this._hostElement;if(!this._sizer){let i=e.querySelector(`[${oi}]`);i||(i=document.createElement("div"),i.setAttribute(oi,""),e.appendChild(i)),Object.assign(i.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),i.textContent="&nbsp;",i.setAttribute(oi,""),this._sizer=i}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;const i=e.type||ho;if(typeof i=="function"&&this._layout instanceof i){const n={...e};return delete n.type,this._layout.config=n,!0}return!1}async _initLayout(e){let i,n;if(typeof e.type=="function"){n=e.type;const s={...e};delete s.type,i=s}else i=e;n===void 0&&(ho=n=(await Bl(()=>import("./flow-Cd2WZlRY.js"),[],import.meta.url)).FlowLayout),this._layout=new n(s=>this._handleLayoutMessage(s),i),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const e=window.performance.now(),i=e-this._benchmarkStart,s=performance.getEntriesByName("uv-virtualizing","measure").filter(r=>r.startTime>=this._benchmarkStart&&r.startTime<e).reduce((r,o)=>r+o.duration,0);return this._benchmarkStart=null,{timeElapsed:i,virtualizationTime:s}}return null}_measureChildren(){const e={},i=this._children,n=this._measureChildOverride||this._measureChild;for(let s=0;s<i.length;s++){const r=i[s],o=this._first+s;(this._itemsChanged||this._toBeMeasured.has(r))&&(e[o]=n.call(this,r,this._items[o]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){const{width:i,height:n}=e.getBoundingClientRect();return Object.assign({width:i,height:n},vm(e))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;const{_rangeChanged:i,_itemsChanged:n}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(i||n)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(e){console.warn("Error measuring performance data: ",e)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(e){switch(e.type){case"scroll":(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent();break;default:console.warn("event not handled",e)}}_handleLayoutMessage(e){e.type==="stateChanged"?this._updateDOM(e):e.type==="visibilityChanged"?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):e.type==="unpinned"&&this._hostElement.dispatchEvent(new an)}get _children(){const e=[];let i=this._hostElement.firstElementChild;for(;i;)i.hasAttribute(oi)||e.push(i),i=i.nextElementSibling;return e}_updateView(){const e=this._hostElement,i=this._scrollerController?.element,n=this._layout;if(e&&i&&n){let s,r,o,a;const l=e.getBoundingClientRect();s=0,r=0,o=window.innerHeight,a=window.innerWidth;const c=this._clippingAncestors.map(_=>_.getBoundingClientRect());c.unshift(l);for(const _ of c)s=Math.max(s,_.top),r=Math.max(r,_.left),o=Math.min(o,_.bottom),a=Math.min(a,_.right);const u=i.getBoundingClientRect(),h={left:l.left-u.left,top:l.top-u.top},d={width:i.scrollWidth,height:i.scrollHeight},p=s-l.top+e.scrollTop,f=r-l.left+e.scrollLeft,m=Math.max(0,o-s),g=Math.max(0,a-r);n.viewportSize={width:g,height:m},n.viewportScroll={top:p,left:f},n.totalScrollSize=d,n.offsetWithinScroller=h}}_sizeHostElement(e){const n=e&&e.width!==null?Math.min(82e5,e.width):0,s=e&&e.height!==null?Math.min(82e5,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${n}px, ${s}px)`;else{const r=this._hostElement.style;r.minWidth=n?`${n}px`:"100%",r.minHeight=s?`${s}px`:"100%"}}_positionChildren(e){e&&e.forEach(({top:i,left:n,width:s,height:r,xOffset:o,yOffset:a},l)=>{const c=this._children[l-this._first];c&&(c.style.position="absolute",c.style.boxSizing="border-box",c.style.transform=`translate(${n}px, ${i}px)`,s!==void 0&&(c.style.width=s+"px"),r!==void 0&&(c.style.height=r+"px"),c.style.left=o===void 0?null:o+"px",c.style.top=a===void 0?null:a+"px")})}async _adjustRange(e){const{_first:i,_last:n,_firstVisible:s,_lastVisible:r}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==i||this._last!==n,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==s||this._lastVisible!==r}_correctScrollError(){if(this._scrollError){const{scrollTop:e,scrollLeft:i}=this._scrollerController,{top:n,left:s}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-n,left:i-s})}}element(e){return e===1/0&&(e=this._items.length-1),this._items?.[e]===void 0?void 0:{scrollIntoView:(i={})=>this._scrollElementIntoView({...i,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),e.behavior==="smooth"){const i=this._layout.getScrollIntoViewCoordinates(e),{behavior:n}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(i,{behavior:n}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){const{index:i}=this._scrollIntoViewTarget||{};i&&e?.has(i)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new rn({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new on({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((e,i)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=i})),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){if(this._layout?.measureChildren){for(const i of e)this._toBeMeasured.set(i.target,i.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function vm(t){const e=window.getComputedStyle(t);return{marginTop:ai(e.marginTop),marginRight:ai(e.marginRight),marginBottom:ai(e.marginBottom),marginLeft:ai(e.marginLeft)}}function ai(t){const e=t?parseFloat(t):NaN;return Number.isNaN(e)?0:e}function po(t){if(t.assignedSlot!==null)return t.assignedSlot;if(t.parentElement!==null)return t.parentElement;const e=t.parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host||null}function wm(t,e=!1){const i=[];let n=e?t:po(t);for(;n!==null;)i.push(n),n=po(n);return i}function xm(t,e=!1){let i=!1;return wm(t,e).filter(n=>{if(i)return!1;const s=getComputedStyle(n);return i=s.position==="fixed",s.overflow!=="visible"})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cm=t=>t,Sm=(t,e)=>O`${e}: ${JSON.stringify(t,null,2)}`;class Em extends Wi{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(i,n)=>Sm(i,n+this._first),this._keyFunction=(i,n)=>Cm(i,n+this._first),this._items=[],e.type!==re.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(e){e&&this._setFunctions(e);const i=[];if(this._first>=0&&this._last>=this._first)for(let n=this._first;n<=this._last;n++)i.push(this._items[n]);return gm(i,this._keyFunction,this._renderItem)}update(e,[i]){this._setFunctions(i);const n=this._items!==i.items;return this._items=i.items||[],this._virtualizer?this._updateVirtualizerConfig(e,i):this._initialize(e,i),n?J:this.render()}async _updateVirtualizerConfig(e,i){if(!await this._virtualizer.updateLayoutConfig(i.layout||{})){const s=e.parentNode;this._makeVirtualizer(s,i)}this._virtualizer.items=this._items}_setFunctions(e){const{renderItem:i,keyFunction:n}=e;i&&(this._renderItem=(s,r)=>i(s,r+this._first)),n&&(this._keyFunction=(s,r)=>n(s,r+this._first))}_makeVirtualizer(e,i){this._virtualizer&&this._virtualizer.disconnected();const{layout:n,scroller:s,items:r}=i;this._virtualizer=new bm({hostElement:e,layout:n,scroller:s}),this._virtualizer.items=r,this._virtualizer.connected()}_initialize(e,i){const n=e.parentNode;n&&n.nodeType===1&&(n.addEventListener("rangeChanged",s=>{this._first=s.first,this._last=s.last,this.setValue(this.render())}),this._makeVirtualizer(n,i))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const Am=ge(Em),Pm=(t,e)=>{if(!t||!e)return;const i=Object.keys(e);return Object.fromEntries(Object.keys(t).flatMap(n=>i.includes(n)?[]:[[n,void 0]]))};class Tm extends Ue{_props;render(e){return J}update(e,[i]){return this._props!==i&&Object.assign(e.element,Pm(this._props,i),this._props=i),J}}const Om=ge(Tm),km=t=>{const e=Wt(),i=z(()=>new CSSStyleSheet,[]);R(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,i]},[]),R(()=>{i.replaceSync(t)},[t])};function wl(t){return t?e=>e?.[t]:it}const Im=t=>{const e=wl(t);return i=>typeof i=="string"?i:e(i)?.toString()||""},Nm=t=>e=>{const i={};for(const n in e)t.includes(n)&&(i[n]=e[n]);return i},Rm="data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1L5.20039 7.04766L1.66348 3.46152' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",Lm=Ce`
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
		background: url("${Rm}") #5881f6 no-repeat 50%;
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
`,zm=({index:t,itemHeight:e,auto:i})=>Ce`
	${pe(!i,()=>Ce`
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
`,Mm=t=>typeof t=="object"&&t!==null&&Symbol.iterator in t;function je(t){return t==null?[]:Array.isArray(t)?t:typeof t=="string"?[t]:Mm(t)?Array.from(t):[t]}const En=(t,e=it)=>i=>{const n=je(t).map(e);return je(i).filter(s=>!n.includes(e(s)))},Dm=(t,e)=>e?i=>je(t).find(n=>n[e]===i[e]):i=>je(t).includes(i),$m=(t,e)=>{if(!e||!t)return t;const i=t.toLowerCase().indexOf(e.toLowerCase());if(i<0)return t;const n=i+e.length;return[t.slice(0,i),O`<mark>${t.slice(i,n)}</mark>`,t.slice(n)]},Fm=t=>{const e=at(t);R(()=>{const i=n=>{if(!(n.ctrlKey&&n.altKey||n.defaultPrevented))switch(n.key){case"Up":case"ArrowUp":n.preventDefault(),e.onUp();break;case"Down":case"ArrowDown":n.preventDefault(),e.onDown();break;case"Enter":n.preventDefault(),e.onEnter();break}};return document.addEventListener("keydown",i,!0),()=>document.removeEventListener("keydown",i,!0)},[e])},Bm=({items:t,onSelect:e,defaultIndex:i=0})=>{const[n,s]=de({index:i}),{index:r}=n,{length:o}=t;return R(()=>{s({index:n.index<0?i:Math.min(n.index,t.length-1),scroll:!0})},[t,i]),Fm({onUp:D(()=>s(a=>({index:a.index>0?a.index-1:o-1,scroll:!0})),[o]),onDown:D(()=>s(a=>({index:a.index<o-1?a.index+1:0,scroll:!0})),[o]),onEnter:D(()=>r>-1&&r<o&&e?.(t[r],r),[r,t,e])}),{position:n,highlight:D(a=>s({index:a}),[]),select:D(a=>e?.(a),[e])}},Hm=(t=it)=>(e,i,{highlight:n,select:s,textual:r=it,query:o,isSelected:a})=>{const l=r(e),c=$m(l,o),u=t(c,e,i);return O`<div
				class="item"
				role="option"
				part="option"
				?aria-selected=${a(e)}
				data-index=${i}
				@mouseenter=${()=>n(i)}
				@click=${()=>s(e)}
				@mousedown=${h=>h.preventDefault()}
				title=${l}
			>
				${u}
			</div>
			<div class="sizer" virtualizer-sizer>${u}</div>`},Vm=({itemRenderer:t=Hm(),...e})=>{const i=at(e);return D((n,s)=>t(n,s,i),[i,t])},jm=t=>{const e=t==="auto",[i,n]=de(e?40:t);return[i,s=>e?n(s):void 0]},Um=["query","items","onSelect","textual","anchor","itemHeight","itemLimit","itemRenderer","defaultIndex","value","valueProperty","loading"],Km=({value:t,valueProperty:e,items:i,onSelect:n,defaultIndex:s,query:r,textual:o,itemRenderer:a,itemHeight:l=40,itemLimit:c=5})=>{const u=z(()=>Dm(t,e),[t,e]),h=z(()=>i.slice(),[i,u]),{position:d,highlight:p,select:f}=Bm({items:h,onSelect:n,defaultIndex:isNaN(s)?void 0:Number(s)}),[m,g]=jm(l);return{position:d,items:h,height:Math.min(c,h.length)*m,highlight:p,select:f,itemHeight:m,setItemHeight:g,renderItem:Vm({itemRenderer:a,items:h,position:d,highlight:p,select:f,textual:o,query:r,isSelected:u})}},fo=na,Wm=t=>{const e=ea(void 0),{position:i,items:n,renderItem:s,height:r,itemHeight:o,setItemHeight:a}=Km(t);return R(()=>{const l=e.current?.[es];l&&l.layoutComplete.then(()=>{t.dispatchEvent(new CustomEvent("layout-complete"));const{averageChildSize:c,averageMarginSize:u}=l._layout._metricsCache;return a(c+u*2)},fo)},[n]),R(()=>{if(!i.scroll)return;const l=e.current?.[es];if(l){if(!l?._layout){l.layoutComplete.then(()=>l.element(i.index)?.scrollIntoView({block:"nearest"}),fo);return}l.element(i.index)?.scrollIntoView({block:"nearest"})}},[i]),km(zm({...i,itemHeight:o,auto:t.itemHeight==="auto"})),O`<div
			class="items"
			style="min-height: ${r}px"
			${$e(l=>e.current=l)}
		>
			<div virtualizer-sizer></div>
			${Am({items:n,renderItem:s,scroller:!0})}
		</div>
		<slot></slot>`};customElements.define("cosmoz-listbox",ca(Q(Wm,{styleSheets:[ys(Lm)]})));const qm=({multi:t,setFloating:e,styles:i,...n},s)=>O`<cosmoz-listbox
		style="${aa(i)}"
		@connected="${r=>r.target.showPopover?.()}"
		popover="manual"
		part="listbox"
		?multi=${t}
		${$e(e)}
		...=${Om(Nm(Um)(n))}
		>${s}</cosmoz-listbox
	>`,Ym=_s`
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
`,Jm=O`
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
`,Xm=({onClear:t,disabled:e})=>O`
	<div class="content" part="content chip-text"><slot></slot></div>
	${pe(t&&!e,()=>O`<span
				class="clear"
				part="clear chip-clear"
				@mousedown=${i=>i.preventDefault()}
				@click=${t}
			>
				${Jm}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",Q(Xm,{observedAttributes:["disabled"],styleSheets:[ys(Ym)]}));const mo=({content:t,onClear:e,disabled:i,hidden:n,className:s="chip",slot:r})=>O`<cosmoz-autocomplete-chip
		class=${Y(s)}
		slot=${Y(r)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${i}
		?hidden=${n}
		.onClear=${e}
		title=${Y(typeof t=="string"?t:void 0)}
		>${t}</cosmoz-autocomplete-chip
	>`,Gm=({value:t,min:e=0,onDeselect:i,textual:n,disabled:s})=>[...t.filter(Boolean).map(r=>mo({content:n(r),onClear:t.length>e&&(()=>i(r)),disabled:s,slot:"control"})),mo({content:O`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],Zm=_s`
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
`,Qm=({focused:t,empty:e,...i})=>{const n=t&&e&&i.limit!==1,s=at(i);R(()=>{if(!n)return;const r=o=>{if(o.defaultPrevented)return;const{key:a}=o,l=je(s.value),c=s.limit==1;if(l.length>0&&(a==="Backspace"||c&&a.length===1))return s.onChange(l.slice(0,-1))};return document.addEventListener("keydown",r,!0),()=>document.removeEventListener("keydown",r,!0)},[n,s])},go=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),eg=(t,e,i)=>{if(!e)return t;const n=go(e.toLowerCase()),s=[];for(const r of t){const a=go(i(r).toLowerCase()).indexOf(n);a<0||s.push({item:r,index:a})}return s.sort((r,o)=>r.index-o.index).map(({item:r})=>r)},tg=t=>t===!1||t==null?[]:t,xl=(t,e,i)=>t.dispatchEvent(new CustomEvent(e,{detail:i})),ig=(t,e,i)=>D(n=>{e?.(n),xl(t,i,n)},[e]),ng=[],sg=t=>(...e)=>{let i;const n=()=>{i&&cancelAnimationFrame(i)};return n(),i=requestAnimationFrame(()=>{i=void 0,t(...e)}),n},Ls=(t,e=()=>({}))=>{const i={type:t,toString(){return t}};return Object.assign((...s)=>Object.assign(e(...s),i),i)},_o=t=>t.type||t.toString(),yo=t=>Array.isArray(t)?t:[t],rg=(t,e)=>{const i=yo(e),n=(i.every(Array.isArray)?i:[i]).map(([s,r])=>({actions:yo(s).map(_o),handle:r}));return(s=t,r)=>{const o=n.find(a=>a.actions.includes(_o(r)));return o?o.handle(s,r):s}},De={pending:"pending",rejected:"rejected",resolved:"resolved"},Cl={error:void 0,result:void 0,state:De.pending},Sl=Ls(De.pending),El=Ls(De.resolved,t=>({result:t})),Al=Ls(De.rejected,t=>({error:t})),og=rg(Cl,[[Sl,()=>({error:void 0,result:void 0,state:De.pending})],[El,(t,{result:e})=>({error:void 0,result:e,state:De.resolved})],[Al,(t,{error:e})=>({error:e,result:void 0,state:De.rejected})]]),ag=t=>{const[{error:e,result:i,state:n},s]=Su(og,Cl);return R(()=>{if(!t)return;let r=!1;return s(Sl()),t.then(o=>!r&&s(El(o)),o=>!r&&s(Al(o))),()=>{r=!0}},[t]),[i,e,n]},lg=({value:t,text:e,onChange:i,onText:n,onSelect:s,limit:r,min:o,source:a,textProperty:l,textual:c,valueProperty:u,keepOpened:h,keepQuery:d,preserveOrder:p,defaultIndex:f,externalSearch:m,...g})=>{const _=z(()=>(c??Im)(l),[c,l]),{active:y,focused:b,onFocus:w,setClosed:x}=ra(g),k=!e,E=z(()=>e?.trim(),[e]),H=Wt(),$=ig(H,n,"text"),U=D(A=>{i?.(A,()=>x(!0)),xl(H,"value",A)},[i]),[V,X]=de([]),K=z(()=>Promise.resolve(typeof a=="function"?a({query:E,active:y}):a).then(tg),[a,y,E]),L=z(()=>je(t),[t]);R(()=>K.then(X),[K]),Qm({focused:b,empty:k,limit:r,value:L,onChange:U,onText:$}),R(()=>{b||$("")},[b]);const M=at({onText:$,onChange:U,value:L,limit:r,min:o,keepQuery:d,keepOpened:h,setClosed:x,onSelect:s}),[,,F]=ag(K);return{active:y,query:E,textual:_,value:L,source$:K,loading:F==="pending",items:z(()=>{if(!y)return ng;const A=p?V:[...L,...En(L,wl(u))(V)];return m?A:eg(A,E,_)},[V,y,E,_,k,L,p,u,m]),onClick:D(()=>x(!1),[]),onFocus:w,onText:D(A=>{$(A.target.value),x(!1)},[$,e,x]),onSelect:D(A=>{M.onSelect?.(A,M);const{onChange:N,onText:W,limit:ye,min:Yt,value:Rl,keepQuery:Ll,keepOpened:zl,setClosed:Ml}=M;Ll||W(""),zl||Ml(!0);const Jt=je(Rl),zs=Jt.includes(A);zs&&Jt.length===Yt||N((zs?En(A)(Jt):[...Jt,A]).slice(-ye))},[M]),onDeselect:D(A=>M.onChange(En(A)(M.value)),[M]),defaultIndex:E!==void 0&&E?.length>0?0:f}},cg=t=>{const e=t.shadowRoot.querySelectorAll(".chip"),i=t.shadowRoot.querySelector(".badge");i.hidden=!0;for(const a of e)a.hidden=!1;const s=t.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let r;for(r=0;r<e.length;r++){const l=e[r].getBoundingClientRect();if(!(l.x+l.width<=s.x+s.width-24))break}const o=e.length-r;for(i.querySelector("span").textContent="+"+o.toString(),i.hidden=o<1;r<e.length;r++)e[r].hidden=!0},ug=({value:t,active:e,wrap:i,limit:n})=>{const s=Wt(),r=!(i||n==1),o=z(()=>sg(()=>cg(s)),[]),[a,l]=de(0);zn(()=>{if(!r)return;const c=s.shadowRoot.querySelector("cosmoz-input"),u=new ResizeObserver(h=>{l(h[0].contentRect.width)});return u.observe(c),()=>u.disconnect()},[r]),zn(()=>r?o():void 0,[r,a,e,t])},hg=["input","control","label","line","error","wrap"].map(t=>`${t}: input-${t}`).join(),dg=[Nh({apply({rects:t,elements:e}){Object.assign(e.floating.style,{minWidth:`${Math.max(t.reference.width,t.floating.width)}px`})}}),...wa],pg=({active:t,loading:e,items:i,text:n,isSingle:s,showSingle:r})=>t?(e||i.length>0||n!=null&&n.length>0)&&!(s&&!r):!1,fg=t=>{const{active:e,invalid:i,errorMessage:n,label:s,placeholder:r,disabled:o,noLabelFloat:a,alwaysFloatLabel:l,textual:c,text:u,onText:h,onFocus:d,onClick:p,onDeselect:f,value:m,limit:g,min:_,showSingle:y,items:b,source$:w,placement:x,loading:k}=t,E=Wt(),H=g==1,$=H&&m?.[0]!=null,{styles:U,setReference:V,setFloating:X}=xa({placement:x,middleware:dg});return R(()=>(E.addEventListener("focusin",d),E.addEventListener("focusout",d),()=>{E.removeEventListener("focusin",d),E.removeEventListener("focusout",d)}),[d]),gs({focus:()=>E.shadowRoot?.querySelector("#input")?.focus()},[]),O`<cosmoz-input
				id="input"
				part="input"
				${$e(V)}
				.label=${s}
				.placeholder=${$?void 0:r}
				?no-label-float=${a}
				?always-float-label=${m?.length>0||l}
				?readonly=${$}
				?disabled=${o}
				?invalid=${Qn(w.then(()=>i,()=>!0),i)}
				.errorMessage=${Qn(w.then(()=>n,K=>K.message),n)}
				.value=${ms(u)}
				@value-changed=${h}
				@click=${p}
				autocomplete="off"
				exportparts=${hg}
				?data-one=${H}
				?data-single=${$}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${Gm({value:m,min:_,onDeselect:f,textual:c,disabled:o})}
			</cosmoz-input>

			${pe(pg({active:e,loading:k,items:b,text:u,isSingle:$,showSingle:y}),()=>qm({...t,items:b,multi:!H,setFloating:X,styles:U},pe(k,()=>O`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>pe(u!=null&&u.length>0&&b.length===0,()=>O`<slot name="no-result"></slot>`))))}`},Pl=t=>{const e={...t,...lg(t)};return ug(e),fg(e)},Tl=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap"],mg=t=>{const{onChange:e,onText:i,...n}=t;return Pl({...n,onChange:D((s,...r)=>{t.value=s,e?.(s,...r)},[e]),onText:D(s=>{t.text=s,i?.(s)},[i])})},Ol=[ys(Zm)];customElements.define("cosmoz-autocomplete-ui",Q(Pl,{observedAttributes:Tl,styleSheets:Ol}));customElements.define("cosmoz-autocomplete",Q(mg,{observedAttributes:Tl,styleSheets:Ol}));const gg=Ce`
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
`,_g=()=>xe,yg=Q(_g,{styleSheets:[gg]});customElements.define("cosmoz-spinner",yg);const kl=["T"," "],bo=t=>{if(!t||typeof t!="string")return;let e;return kl.some(i=>t.match(i)?(e=t.split(i),!0):!1),e||[t]},bg=(t,e)=>{const i=bo(t),n=bo(e);return{minDate:Array.isArray(i)?i.shift():null,minTime:Array.isArray(i)?i.shift():null,maxDate:Array.isArray(n)?n.shift():null,maxTime:Array.isArray(n)?n.shift():null}},vo=(t,e)=>{if(!(!t&&!e))return!t&&e?`T${e}`:t&&!e?t:`${t}T${e}`},vg=t=>{if(t){for(const e of kl)if(t.match(e)){const i=t.split(e);return{date:i.shift(),time:i.shift()}}return{date:t}}},wg=t=>{const{dateLabel:e,timeLabel:i,min:n,max:s,step:r="1",value:o}=t,{minDate:a,maxDate:l,minTime:c,maxTime:u}=z(()=>bg(n,s),[n,s]),{date:h,time:d}=z(()=>vg(o)??{},[o]);return R(()=>{t.dispatchEvent(new CustomEvent("cosmoz-datetime-input-value-changed",{bubbles:!0,composed:!0}))},[o]),O`
		<style>
			:host {
				display: flex;
				flex-direction: row;
			}
		</style>
		<cosmoz-input
			label="${e}"
			type="date"
			.value="${h}"
			@value-changed="${p=>Bt(t,"value",vo(p.target.value,d))}"
			.min="${a}"
			.max="${l}"
		></cosmoz-input>
		<cosmoz-input
			label="${i}"
			type="time"
			.value="${d}"
			@value-changed="${p=>Bt(t,"value",vo(h,p.target.value))}"
			step="${r}"
			.min="${c}"
			.max="${u}"
		></cosmoz-input>
	`};customElements.define("cosmoz-datetime-input",Q(wg,{observedAttributes:["date-label","time-label","min","max","step"]}));const xg=t=>e=>{const i=e.match(t);return i&&{result:i,url:new URL(e,document.location.origin)}},Cg=(t,e)=>{for(const i of t){const n=i.rule,s=typeof n=="function"?n(e):xg(n)(e);if(s)return{...i,route:i,match:s,url:e}}},wo=()=>window.location.href.replace(window.location.origin,""),Sg=()=>{const[t,e]=de(wo);return R(()=>{const i=()=>e(wo);return window.addEventListener("popstate",i),()=>window.removeEventListener("popstate",i)},[e]),t},Eg=t=>{const e=Sg();return z(()=>Cg(t,e),[t,e])},Jg=(t,e=null,{notify:i=!0,replace:n=!0}={})=>{(n?history.replaceState:history.pushState).call(history,e,"",t),i&&queueMicrotask(()=>window.dispatchEvent(new CustomEvent("popstate",{bubbles:!1})))},Ag=t=>{const e=Eg(t);return{route:e,result:z(()=>{if(e){const{handle:i,...n}=e;return i(n)}},[e])}},li=(t,e,i)=>t.dispatchEvent(new CustomEvent(e,{bubbles:!1,cancelable:!1,composed:!0,...i})),Pg=(t,e,i)=>{R(()=>{if(!i){li(t,"route-not-found");return}li(t,"route-loading",{detail:e}),Promise.resolve(i).then(()=>li(t,"route-loaded",{detail:e})).catch(n=>li(t,"route-error",{detail:{route:e,error:n}}))},[i])},Tg=t=>{const e=t.routes,{route:i,result:n}=Ag(e);return Pg(t,i,n),la([n],()=>Qn(Promise.resolve(n).catch(()=>xe),xe))};customElements.define("cosmoz-router",Q(Tg));const Il=()=>new URL(location.hash.replace(/^#!?/iu,"").replace("%23","#"),location.origin),Xg=(t,e=it)=>{const i=new URLSearchParams(Il().hash.replace("#","")).getAll(t);switch(i.length){case 0:return;case 1:return e(i[0]);default:return i.map(e)}},Gg=(t,e=it)=>{const i=Array.from(new URLSearchParams(Il().hash.replace("#","")).entries()).filter(([n])=>n.startsWith(t)).map(([n,s])=>e([n.replace(t,""),s])).filter(([,n])=>n!=null);return Object.fromEntries(i)};var le=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:void 0;function Og(t,e){return typeof e>"u"?e={autoBom:!1}:typeof e!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\uFEFF",t],{type:t.type}):t}function An(t,e,i){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){ts(n.response,e,i)},n.onerror=function(){console.error("could not download file")},n.send()}function xo(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch{}return e.status>=200&&e.status<=299}function ci(t){try{t.dispatchEvent(new MouseEvent("click"))}catch{var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var Co=le.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),ts=le.saveAs||(typeof window!="object"||window!==le?function(){}:"download"in HTMLAnchorElement.prototype&&!Co?function(e,i,n){var s=le.URL||le.webkitURL,r=document.createElement("a");i=i||e.name||"download",r.download=i,r.rel="noopener",typeof e=="string"?(r.href=e,r.origin!==location.origin?xo(r.href)?An(e,i,n):ci(r,r.target="_blank"):ci(r)):(r.href=s.createObjectURL(e),setTimeout(function(){s.revokeObjectURL(r.href)},4e4),setTimeout(function(){ci(r)},0))}:"msSaveOrOpenBlob"in navigator?function(e,i,n){if(i=i||e.name||"download",typeof e=="string")if(xo(e))An(e,i,n);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout(function(){ci(s)})}else navigator.msSaveOrOpenBlob(Og(e,n),i)}:function(e,i,n,s){if(s=s||open("","_blank"),s&&(s.document.title=s.document.body.innerText="downloading..."),typeof e=="string")return An(e,i,n);var r=e.type==="application/octet-stream",o=/constructor/i.test(le.HTMLElement)||le.safari,a=/CriOS\/[\d]+/.test(navigator.userAgent);if((a||r&&o||Co)&&typeof FileReader<"u"){var l=new FileReader;l.onloadend=function(){var h=l.result;h=a?h:h.replace(/^data:[^;]*;/,"data:attachment/file;"),s?s.location.href=h:location=h,s=null},l.readAsDataURL(e)}else{var c=le.URL||le.webkitURL,u=c.createObjectURL(e);s?s.location=u:location.href=u,s=null,setTimeout(function(){c.revokeObjectURL(u)},4e4)}});le.saveAs=ts.saveAs=ts;const yi=function(t){t&&console.log(t)};class Nl{constructor(e,i){this._filename=e,this.buffer=null,this.lastDownloadBlobUrl=null,this._mimeType=i}generate(){}createDownloadUrl(){this.buffer||this.generate();const e=new Blob([this.buffer],{type:this._mimeType});return this.lastDownloadBlobUrl&&window.URL.revokeObjectURL(this.lastDownloadBlobUrl),this.lastDownloadBlobUrl=URL.createObjectURL(e),this.lastDownloadBlobUrl}createDownloadLink(e){const i=e instanceof HTMLAnchorElement?e:document.createElement("a");return typeof e=="string"&&(i.innerHTML=e),i.href=this.createDownloadUrl(),i.download=this._filename,i.hasChildNodes||(i.innerText=this._filename),yi("Link created for file "+this._filename),i}}let ui=null;class kg extends Nl{constructor(e,i){super(e,"application/zip"),this.files=[],this.createFolderEntries=!!i;const n=new Date;this.timeInt=Math.round(n.getSeconds()/2)|n.getMinutes()<<5|n.getHours()<<11,this.dateInt=n.getFullYear()-1980<<9|n.getMonth()+1<<5|n.getDate()}addFileFromString(e,i){const n=new TextEncoder("utf-8").encode(i);return this.addFileFromUint8Array(e,n),this}addFileFromUint8Array(e,i){if(!(i instanceof Uint8Array))throw new Error("invalid parameter");return this.files.push({name:e.replace("\\","/"),data:i}),this}generate(){yi("NullZip archive generation started");const e={};for(const c of this.files)c.size=c.data?c.data.byteLength:0,c.crc=c.data?this.crc(c.data):0,e[c.name]=c;const i=[];if(this.createFolderEntries){const c=/\//giu;for(const u of this.files){const h=u.name;for(let d=c.exec(h);d!==null;d=c.exec(h)){const p={name:h.substr(0,d.index+1),size:0,crc:0,data:new Uint8Array(0)};typeof e[p.name]>"u"&&(e[p.name]=p,i.push(p))}}}Array.prototype.push.apply(this.files,i),this.files.sort((c,u)=>c.name.length-u.name.length||c.name.localeCompare(u.name));const n=this.files.reduce((c,u)=>c+76+u.name.length*2+u.size,22);yi("Estimated file size: "+n),this.buffer=new ArrayBuffer(n);const s=new Ig(this.buffer),r=this.hex2u8a("504b0304140000000000");for(const c of this.files)c.offs=s.i,s.writeByteArray(r),s.uint16(this.timeInt),s.uint16(this.dateInt),s.uint32(c.crc),s.uint32(c.size),s.uint32(c.size),s.uint16(c.name.length),s.uint16(0),s.writeASCII(c.name),c.size>0&&s.writeByteArray(c.data);const o=s.i,a=this.hex2u8a("504b01023f00140000000000");for(const c of this.files)s.writeByteArray(a),s.uint16(this.timeInt),s.uint16(this.dateInt),s.uint32(c.crc),s.uint32(c.size),s.uint32(c.size),s.uint16(c.name.length),s.uint16(0),s.uint16(0),s.uint16(0),s.uint16(0),s.uint32(c.size?32:48),s.uint32(c.offs),s.writeASCII(c.name);const l=s.i-o;return s.writeByteArray(this.hex2u8a("504b050600000000")),s.uint16(this.files.length),s.uint16(this.files.length),s.uint32(l),s.uint32(o),s.uint16(0),yi("Finished creating zip. size="+s.i+", predicted size="+n),this.buffer}crc(e){let i,n,s=-1;if(!ui)for(ui=[],n=0;n<256;i=++n){for(let r=0;r<8;r++)i=i&1?3988292384^i>>>1:i>>>1;ui[n]=i}for(let r=0;r<e.byteLength;r++)s=s>>>8^ui[(s^e[r])&255];return(s^-1)>>>0}hex2u8a(e){const i=new Uint8Array(Math.ceil(e.length/2));for(let n=0;n<i.length;n++)i[n]=parseInt(e.substr(n*2,2),16);return i}}class Ig{constructor(e){this.dw=new DataView(e),this.i=0,this.le=!0,this.utf8encoder=new TextEncoder("utf-8")}uint8(e){this.dw.setUint8(this.i++,e)}uint16(e){this.dw.setUint16(this.i,e,this.le),this.i+=2}uint32(e){this.dw.setUint32(this.i,e,this.le),this.i+=4}writeByteArray(e){if(!(e instanceof Uint8Array))throw new Error("invalid parameter");new Uint8Array(this.dw.buffer).set(e,this.i),this.i+=e.byteLength}writeASCII(e){for(let i=0;i<e.length;i++)this.dw.setUint8(this.i++,e.charCodeAt(i)&255)}}const _t="application/vnd.openxmlformats-officedocument.spreadsheetml",ln="http://schemas.openxmlformats.org",hi=`${ln}/spreadsheetml/2006/main`,Pn=`${ln}/package/2006`,yt=`${ln}/officeDocument/2006/relationships`,So=[{id:164,code:"yyyy&quot;-&quot;mm&quot;-&quot;dd"},{id:165,code:"yyyy&quot;-&quot;mm&quot;-&quot;dd&quot; &quot;h&quot;:&quot;mm&quot;:&quot;ss"}];class Zg extends Nl{constructor(e,i){super(e,`${_t}.sheet`),this.sheets=[],this.frozen=!!(i&&i.frozen),this.autoFilter=!!(i&&i.filter)}addSheetFromData(e,i){const n=this.sheets.length+1;return this.sheets.push({id:n,name:this.escapeXml(i||"Sheet"+n),data:e}),this}generate(){const e=[{name:"xl/styles.xml",xml:`<styleSheet xmlns="${hi}" xmlns:mc="${ln}/markup-compatibility/2006"><numFmts count="${So.length}">${So.map(s=>`<numFmt numFmtId="${s.id}" formatCode="${s.code}" />`)}</numFmts><fonts count="2"><font><sz val="10.0"/><color rgb="FF000000"/><name val="Arial"/></font><font><b/></font></fonts><fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="lightGray"/></fill></fills><borders count="1"><border><left/><right/><top/><bottom/></border></borders><cellStyleXfs count="1"><xf borderId="0" fillId="0" fontId="0" numFmtId="0" applyAlignment="1" applyFont="1"/></cellStyleXfs><cellXfs><xf borderId="0" fillId="0" fontId="0" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment/></xf><xf borderId="0" fillId="0" fontId="1" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment/></xf><xf borderId="0" fillId="0" fontId="0" numFmtId="164" xfId="0" applyAlignment="1" applyFont="1" applyNumberFormat="1"><alignment /></xf><xf borderId="0" fillId="0" fontId="0" numFmtId="165" xfId="0" applyAlignment="1" applyFont="1" applyNumberFormat="1"><alignment /></xf></cellXfs><cellStyles count="1"><cellStyle xfId="0" name="Normal" builtinId="0"/></cellStyles><dxfs count="0"/></styleSheet>`},{name:"xl/sharedStrings.xml",xml:`<sst xmlns="${hi}" count="2" uniqueCount="2"><si><t>text here</t></si></sst>`},{name:"xl/workbook.xml",xml:`<workbook xmlns="${hi}" xmlns:r="${yt}"><workbookPr/><sheets>`+this.sheets.map(s=>`<sheet state="visible" name="${s.name}" sheetId="${s.id}" r:id="rId${s.id+2}"/>`).join("")+"</sheets><definedNames/><calcPr/></workbook>"},{name:"xl/_rels/workbook.xml.rels",xml:`<Relationships xmlns="${Pn}/relationships"><Relationship Id="rId1" Type="${yt}/styles" Target="styles.xml" /><Relationship Id="rId2" Type="${yt}/sharedStrings" Target="sharedStrings.xml"/>`+this.sheets.map(s=>`<Relationship Id="rId${s.id+2}" Type="${yt}/worksheet" Target="worksheets/sheet${s.id}.xml"/>`).join("")+"</Relationships>"},{name:"[Content_Types].xml",xml:`<Types xmlns="${Pn}/content-types"><Default ContentType="application/xml" Extension="xml"/><Default ContentType="application/vnd.openxmlformats-package.relationships+xml" Extension="rels"/>`+this.sheets.map(s=>`<Override ContentType="${_t}.worksheet+xml" PartName="/xl/worksheets/sheet${s.id}.xml"/>`).join("")+`<Override ContentType="${_t}.sharedStrings+xml" PartName="/xl/sharedStrings.xml"/><Override ContentType="${_t}.styles+xml" PartName="/xl/styles.xml" /><Override ContentType="${_t}.sheet.main+xml" PartName="/xl/workbook.xml"/></Types>`},{name:"_rels/.rels",xml:`<Relationships xmlns="${Pn}/relationships"><Relationship Id="rId1" Type="${yt}/officeDocument" Target="xl/workbook.xml"/></Relationships>`}],i=this.sheets.map(s=>{let r=0;const o=s.data.map((a,l)=>{const c=this.frozen&&l===0?' s="1"':"";a.length>r&&(r=a.length);const u=a.map((h,d)=>{const p=this.colName(d)+(l+1);return typeof h=="number"?`<c r="${p}"${c}><v>${h}</v></c>`:h instanceof Date?`<c s="${h.getHours()||h.getMinutes()||h.getSeconds()?3:2}"><v>${this.dateToExcelDate(h)}</v></c>`:`<c t="inlineStr"${c}><is><t>${this.escapeXml(h.toString())}</t></is></c>`});return`<row r="${l+1}">${u.join("")}</row>`});return{name:`xl/worksheets/sheet${s.id}.xml`,xml:`<worksheet xmlns="${hi}"><sheetViews><sheetView workbookViewId="0"`+(this.frozen?' tabSelected="1"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView>':"/>")+`</sheetViews><sheetFormatPr customHeight="1" defaultColWidth="17.5" defaultRowHeight="15.75"/><sheetData>${o.join("")}</sheetData>`+(this.autoFilter?`<autoFilter ref="A1:${this.colName(r)}${s.data.length}"/>`:"")+"</worksheet>"}}),n=new kg(this._filename,!1);return[...e,...i].forEach(s=>n.addFileFromString(s.name,s.xml)),this.buffer=n.generate(),this.buffer}colName(e){return e<26?String.fromCharCode(e+65):String.fromCharCode(Math.floor(e/26+64))+String.fromCharCode(Math.floor(e%26+65))}escapeXml(e){return e.replace(/[<>&'"]/gu,i=>["&lt;","&gt;","&amp;","&apos;","&quot;"][`<>&'"`.indexOf(i)])}dateToExcelDate(e){return 25569+(e.getTime()-e.getTimezoneOffset()*6e4)/864e5}}const Qg=({slot:t,title:e,className:i,width:n="24",height:s="24",styles:r}={})=>O`
  <svg
    slot=${Y(t)}
    class=${`announcement-icon ${i??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${n}
    height=${s}
    style=${Y(r)}
  >
    ${pe(e,()=>To`<title>${e}</title>`)}
    <path
      d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"
    />
  </svg>
`,e_=({slot:t,title:e,className:i,width:n="24",height:s="24",styles:r}={})=>O`
  <svg
    slot=${Y(t)}
    class=${`error-icon ${i??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${n}
    height=${s}
    style=${Y(r)}
  >
    ${pe(e,()=>To`<title>${e}</title>`)}
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
    />
  </svg>
`,Eo=(t,e)=>{Object.assign(t.style,{display:e?"":"none"})};class Ng extends HTMLElement{static get observedAttributes(){return["opened"]}toggle=ia("height");constructor(){super();const e=new CSSStyleSheet;e.replaceSync(`
      :host { display: block; overflow: hidden; }
		`);const i=this.attachShadow({mode:"open"});i.appendChild(document.createElement("slot")),i.adoptedStyleSheets=[e]}connectedCallback(){Eo(this,this.getAttribute("opened")!=null)}attributeChangedCallback(e,i,n){switch(e){case"opened":{const s=n!=null;return this.isConnected?this.toggle(this,s):Eo(this,s)}}}}customElements.define("cosmoz-collapse",Ng);export{Dg as $,Xg as A,D as B,Jg as C,He as D,Il as E,ku as F,Qo as G,z as H,gm as I,ys as J,Hl as K,ts as L,am as M,Zg as N,sd as O,Ut as P,Ce as Q,Qg as R,e_ as S,$g as T,at as U,Nh as V,wa as W,Nm as X,ea as Y,na as Z,gs as _,zn as a,Am as a0,Bt as a1,la as a2,St as b,Q as c,qg as d,$a as e,oo as f,G as g,j as h,Mg as i,Kg as j,je as k,Im as l,Ug as m,pe as n,Bg as o,wl as p,Fg as q,Wg as r,Hs as s,_s as t,de as u,Hg as v,R as w,Y as x,it as y,Gg as z};
