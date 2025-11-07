import{f as Hn,B as cr,x as P,E as ct,T as j,m as Un,i as ur,p as dr,v as pt,s as zt,M as qe,b as Kn}from"./iframe-Fd6JbpsV.js";import{_ as hr}from"./preload-helper-D9Z9MdNV.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*fr(e,t){if(e!==void 0){let s=0;for(const n of e)yield t(n,s++)}}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(e,t){return e};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let pr=/(url\()([^)]*)(\))/g,mr=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,ie,K;function Ht(e,t){if(e&&mr.test(e)||e==="//")return e;if(ie===void 0){ie=!1;try{const s=new URL("b","http://a");s.pathname="c%20d",ie=s.href==="http://a/c%20d"}catch{}}if(t||(t=document.baseURI||window.location.href),ie)try{return new URL(e,t).href}catch{return e}return K||(K=document.implementation.createHTMLDocument("temp"),K.base=K.createElement("base"),K.head.appendChild(K.base),K.anchor=K.createElement("a"),K.body.appendChild(K.anchor)),K.base.href=t,K.anchor.href=e,K.anchor.href||e}function ws(e,t){return e.replace(pr,function(s,n,i,r){return n+"'"+Ht(i.replace(/["']/g,""),t)+"'"+r})}function vs(e){return e.substring(0,e.lastIndexOf("/")+1)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const gr=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const yr=gr&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const e=new CSSStyleSheet;e.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch{return!1}})();let _r=window.Polymer&&window.Polymer.rootPath||vs(document.baseURI||window.location.href),ye=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let rs=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,br=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,wr=window.Polymer&&window.Polymer.legacyOptimizations||!1,vr=window.Polymer&&window.Polymer.legacyWarnings||!1,xr=window.Polymer&&window.Polymer.syncInitialRender||!1,os=window.Polymer&&window.Polymer.legacyUndefined||!1,Sr=window.Polymer&&window.Polymer.orderedComputed||!1,ks=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Cr=window.Polymer&&window.Polymer.fastDomIf||!1;window.Polymer&&window.Polymer.suppressTemplateNotifications;window.Polymer&&window.Polymer.legacyNoObservedAttributes;let Pr=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Er=0;const xt=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let s=Er++;function n(i){let r=i.__mixinSet;if(r&&r[s])return i;let o=t,a=o.get(i);if(!a){a=e(i),o.set(i,a);let l=Object.create(a.__mixinSet||r||null);l[s]=!0,a.__mixinSet=l}return a}return n};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let xs={},Wn={};function zs(e,t){xs[e]=Wn[e.toLowerCase()]=t}function Ns(e){return xs[e]||Wn[e.toLowerCase()]}function Or(e){e.querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}class Yt extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,s){if(t){let n=Ns(t);return n&&s?n.querySelector(s):n}return null}attributeChangedCallback(t,s,n,i){s!==n&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,s=Ht(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=vs(s)}return this.__assetpath}register(t){if(t=t||this.id,t){if(rs&&Ns(t)!==void 0)throw zs(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,zs(t,this),Or(this)}}}Yt.prototype.modules=xs;customElements.define("dom-module",Yt);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Tr="link[rel=import][type~=css]",Ar="include",Ms="shady-unscoped";function qn(e){return Yt.import(e)}function Fs(e){let t=e.body?e.body:e;const s=ws(t.textContent,e.baseURI),n=document.createElement("style");return n.textContent=s,n}function Lr(e){const t=e.trim().split(/\s+/),s=[];for(let n=0;n<t.length;n++)s.push(...$r(t[n]));return s}function $r(e){const t=qn(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(t._styles===void 0){const s=[];s.push(...Jn(t));const n=t.querySelector("template");n&&s.push(...Yn(n,t.assetpath)),t._styles=s}return t._styles}function Yn(e,t){if(!e._styles){const s=[],n=e.content.querySelectorAll("style");for(let i=0;i<n.length;i++){let r=n[i],o=r.getAttribute(Ar);o&&s.push(...Lr(o).filter(function(a,l,c){return c.indexOf(a)===l})),t&&(r.textContent=ws(r.textContent,t)),s.push(r)}e._styles=s}return e._styles}function Rr(e){let t=qn(e);return t?Jn(t):[]}function Jn(e){const t=[],s=e.querySelectorAll(Tr);for(let n=0;n<s.length;n++){let i=s[n];if(i.import){const r=i.import,o=i.hasAttribute(Ms);if(o&&!r._unscopedStyle){const a=Fs(r);a.setAttribute(Ms,""),r._unscopedStyle=a}else r._style||(r._style=Fs(r));t.push(o?r._unscopedStyle:r._style)}}return t}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const mt=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function as(e){return e.indexOf(".")>=0}function St(e){let t=e.indexOf(".");return t===-1?e:e.slice(0,t)}function kr(e,t){return e.indexOf(t+".")===0}function _e(e,t){return t.indexOf(e+".")===0}function be(e,t,s){return t+s.slice(e.length)}function jt(e){if(Array.isArray(e)){let t=[];for(let s=0;s<e.length;s++){let n=e[s].toString().split(".");for(let i=0;i<n.length;i++)t.push(n[i])}return t.join(".")}else return e}function Gn(e){return Array.isArray(e)?jt(e).split("."):e.toString().split(".")}function U(e,t,s){let n=e,i=Gn(t);for(let r=0;r<i.length;r++){if(!n)return;let o=i[r];n=n[o]}return s&&(s.path=i.join(".")),n}function Is(e,t,s){let n=e,i=Gn(t),r=i[i.length-1];if(i.length>1){for(let o=0;o<i.length-1;o++){let a=i[o];if(n=n[a],!n)return}n[r]=s}else n[t]=s;return i.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const we={},zr=/-[a-z]/g,Nr=/([A-Z])/g;function Xn(e){return we[e]||(we[e]=e.indexOf("-")<0?e:e.replace(zr,t=>t[1].toUpperCase()))}function $e(e){return we[e]||(we[e]=e.replace(Nr,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Mr=0,Qn=0,Ot=[],Fr=0,ls=!1,Zn=document.createTextNode("");new window.MutationObserver(Ir).observe(Zn,{characterData:!0});function Ir(){ls=!1;const e=Ot.length;for(let t=0;t<e;t++){let s=Ot[t];if(s)try{s()}catch(n){setTimeout(()=>{throw n})}}Ot.splice(0,e),Qn+=e}const qu={after(e){return{run(t){return window.setTimeout(t,e)},cancel(t){window.clearTimeout(t)}}},run(e,t){return window.setTimeout(e,t)},cancel(e){window.clearTimeout(e)}},Dr={run(e){return ls||(ls=!0,Zn.textContent=Fr++),Ot.push(e),Mr++},cancel(e){const t=e-Qn;if(t>=0){if(!Ot[t])throw new Error("invalid async handle: "+e);Ot[t]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Br=Dr,ti=xt(e=>{class t extends e{static createProperties(n){const i=this.prototype;for(let r in n)r in i||i._createPropertyAccessor(r)}static attributeNameForProperty(n){return n.toLowerCase()}static typeForProperty(n){}_createPropertyAccessor(n,i){this._addPropertyToAttributeMap(n),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[n]||(this.__dataHasAccessor[n]=!0,this._definePropertyAccessor(n,i))}_addPropertyToAttributeMap(n){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let i=this.__dataAttributes[n];return i||(i=this.constructor.attributeNameForProperty(n),this.__dataAttributes[i]=n),i}_definePropertyAccessor(n,i){Object.defineProperty(this,n,{get(){return this.__data[n]},set:i?function(){}:function(r){this._setPendingProperty(n,r,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let n in this.__dataHasAccessor)this.hasOwnProperty(n)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[n]=this[n],delete this[n])}_initializeInstanceProperties(n){Object.assign(this,n)}_setProperty(n,i){this._setPendingProperty(n,i)&&this._invalidateProperties()}_getProperty(n){return this.__data[n]}_setPendingProperty(n,i,r){let o=this.__data[n],a=this._shouldPropertyChange(n,i,o);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(n in this.__dataOld)&&(this.__dataOld[n]=o),this.__data[n]=i,this.__dataPending[n]=i),a}_isPropertyPending(n){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(n))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Br.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const n=this.__data,i=this.__dataPending,r=this.__dataOld;this._shouldPropertiesChange(n,i,r)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(n,i,r)),this.__dataCounter--}_shouldPropertiesChange(n,i,r){return!!i}_propertiesChanged(n,i,r){}_shouldPropertyChange(n,i,r){return r!==i&&(r===r||i===i)}attributeChangedCallback(n,i,r,o){i!==r&&this._attributeToProperty(n,r),super.attributeChangedCallback&&super.attributeChangedCallback(n,i,r,o)}_attributeToProperty(n,i,r){if(!this.__serializing){const o=this.__dataAttributes,a=o&&o[n]||n;this[a]=this._deserializeValue(i,r||this.constructor.typeForProperty(a))}}_propertyToAttribute(n,i,r){this.__serializing=!0,r=arguments.length<3?this[n]:r,this._valueToNodeAttribute(this,r,i||this.constructor.attributeNameForProperty(n)),this.__serializing=!1}_valueToNodeAttribute(n,i,r){const o=this._serializeValue(i);(r==="class"||r==="name"||r==="slot")&&(n=mt(n)),o===void 0?n.removeAttribute(r):n.setAttribute(r,o===""&&window.trustedTypes?window.trustedTypes.emptyScript:o)}_serializeValue(n){switch(typeof n){case"boolean":return n?"":void 0;default:return n?.toString()}}_deserializeValue(n,i){switch(i){case Boolean:return n!==null;case Number:return Number(n);default:return n}}}return t});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ei={};let re=HTMLElement.prototype;for(;re;){let e=Object.getOwnPropertyNames(re);for(let t=0;t<e.length;t++)ei[e[t]]=!0;re=Object.getPrototypeOf(re)}const jr=window.trustedTypes?e=>trustedTypes.isHTML(e)||trustedTypes.isScript(e)||trustedTypes.isScriptURL(e):()=>!1;function Vr(e,t){if(!ei[t]){let s=e[t];s!==void 0&&(e.__data?e._setPendingProperty(t,s):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=s))}}const Hr=xt(e=>{const t=ti(e);class s extends t{static createPropertiesForAttributes(){let i=this.observedAttributes;for(let r=0;r<i.length;r++)this.prototype._createPropertyAccessor(Xn(i[r]))}static attributeNameForProperty(i){return $e(i)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(i){for(let r in i)this._setProperty(r,i[r])}_ensureAttribute(i,r){const o=this;o.hasAttribute(i)||this._valueToNodeAttribute(o,r,i)}_serializeValue(i){switch(typeof i){case"object":if(i instanceof Date)return i.toString();if(i){if(jr(i))return i;try{return JSON.stringify(i)}catch{return""}}default:return super._serializeValue(i)}}_deserializeValue(i,r){let o;switch(r){case Object:try{o=JSON.parse(i)}catch{o=i}break;case Array:try{o=JSON.parse(i)}catch{o=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${i}`)}break;case Date:o=isNaN(i)?String(i):Number(i),o=new Date(o);break;default:o=super._deserializeValue(i,r);break}return o}_definePropertyAccessor(i,r){Vr(this,i),super._definePropertyAccessor(i,r)}_hasAccessor(i){return this.__dataHasAccessor&&this.__dataHasAccessor[i]}_isPropertyPending(i){return!!(this.__dataPending&&i in this.__dataPending)}}return s});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ur={"dom-if":!0,"dom-repeat":!0};let Ds=!1,Bs=!1;function Kr(){if(!Ds){Ds=!0;const e=document.createElement("textarea");e.placeholder="a",Bs=e.placeholder===e.textContent}return Bs}function Wr(e){Kr()&&e.localName==="textarea"&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}const qr=(()=>{const e=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(t,s,n)=>{const i=s.getAttribute(n);if(e&&n.startsWith("on-")){t.setAttribute(n,e.createScript(i,n));return}t.setAttribute(n,i)}})();function Yr(e){let t=e.getAttribute("is");if(t&&Ur[t]){let s=e;for(s.removeAttribute("is"),e=s.ownerDocument.createElement(t),s.parentNode.replaceChild(e,s),e.appendChild(s);s.attributes.length;){const{name:n}=s.attributes[0];qr(e,s,n),s.removeAttribute(n)}}return e}function si(e,t){let s=t.parentInfo&&si(e,t.parentInfo);if(s){for(let n=s.firstChild,i=0;n;n=n.nextSibling)if(t.parentIndex===i++)return n}else return e}function Jr(e,t,s,n){n.id&&(t[n.id]=s)}function Gr(e,t,s){if(s.events&&s.events.length)for(let n=0,i=s.events,r;n<i.length&&(r=i[n]);n++)e._addMethodEventListenerToNode(t,r.name,r.value,e)}function Xr(e,t,s,n){s.templateInfo&&(t._templateInfo=s.templateInfo,t._parentTemplateInfo=n)}function Qr(e,t,s){return e=e._methodHost||e,function(i){e[s]?e[s](i,i.detail):console.warn("listener method `"+s+"` not defined")}}const Zr=xt(e=>{class t extends e{static _parseTemplate(n,i){if(!n._templateInfo){let r=n._templateInfo={};r.nodeInfoList=[],r.nestedTemplate=!!i,r.stripWhiteSpace=i&&i.stripWhiteSpace||n.hasAttribute&&n.hasAttribute("strip-whitespace"),this._parseTemplateContent(n,r,{parent:null})}return n._templateInfo}static _parseTemplateContent(n,i,r){return this._parseTemplateNode(n.content,i,r)}static _parseTemplateNode(n,i,r){let o=!1,a=n;return a.localName=="template"&&!a.hasAttribute("preserve-content")?o=this._parseTemplateNestedTemplate(a,i,r)||o:a.localName==="slot"&&(i.hasInsertionPoint=!0),Wr(a),a.firstChild&&this._parseTemplateChildNodes(a,i,r),a.hasAttributes&&a.hasAttributes()&&(o=this._parseTemplateNodeAttributes(a,i,r)||o),o||r.noted}static _parseTemplateChildNodes(n,i,r){if(!(n.localName==="script"||n.localName==="style"))for(let o=n.firstChild,a=0,l;o;o=l){if(o.localName=="template"&&(o=Yr(o)),l=o.nextSibling,o.nodeType===Node.TEXT_NODE){let u=l;for(;u&&u.nodeType===Node.TEXT_NODE;)o.textContent+=u.textContent,l=u.nextSibling,n.removeChild(u),u=l;if(i.stripWhiteSpace&&!o.textContent.trim()){n.removeChild(o);continue}}let c={parentIndex:a,parentInfo:r};this._parseTemplateNode(o,i,c)&&(c.infoIndex=i.nodeInfoList.push(c)-1),o.parentNode&&a++}}static _parseTemplateNestedTemplate(n,i,r){let o=n,a=this._parseTemplate(o,i);return(a.content=o.content.ownerDocument.createDocumentFragment()).appendChild(o.content),r.templateInfo=a,!0}static _parseTemplateNodeAttributes(n,i,r){let o=!1,a=Array.from(n.attributes);for(let l=a.length-1,c;c=a[l];l--)o=this._parseTemplateNodeAttribute(n,i,r,c.name,c.value)||o;return o}static _parseTemplateNodeAttribute(n,i,r,o,a){return o.slice(0,3)==="on-"?(n.removeAttribute(o),r.events=r.events||[],r.events.push({name:o.slice(3),value:a}),!0):o==="id"?(r.id=a,!0):!1}static _contentForTemplate(n){let i=n._templateInfo;return i&&i.content||n.content}_stampTemplate(n,i){n&&!n.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(n),i=i||this.constructor._parseTemplate(n);let r=i.nodeInfoList,o=i.content||n.content,a=document.importNode(o,!0);a.__noInsertionPoint=!i.hasInsertionPoint;let l=a.nodeList=new Array(r.length);a.$={};for(let c=0,u=r.length,d;c<u&&(d=r[c]);c++){let h=l[c]=si(a,d);Jr(this,a.$,h,d),Xr(this,h,d,i),Gr(this,h,d)}return a=a,a}_addMethodEventListenerToNode(n,i,r,o){o=o||n;let a=Qr(o,i,r);return this._addEventListenerToNode(n,i,a),a}_addEventListenerToNode(n,i,r){n.addEventListener(i,r)}_removeEventListenerFromNode(n,i,r){n.removeEventListener(i,r)}}return t});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let Jt=0;const Gt=[],C={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},ni="__computeInfo",to=/[A-Z]/;function Ye(e,t,s){let n=e[t];if(!n)n=e[t]={};else if(!e.hasOwnProperty(t)&&(n=e[t]=Object.create(e[t]),s))for(let i in n){let r=n[i],o=n[i]=Array(r.length);for(let a=0;a<r.length;a++)o[a]=r[a]}return n}function Vt(e,t,s,n,i,r){if(t){let o=!1;const a=Jt++;for(let l in s){let c=i?St(l):l,u=t[c];if(u)for(let d=0,h=u.length,f;d<h&&(f=u[d]);d++)(!f.info||f.info.lastRun!==a)&&(!i||Ss(l,f.trigger))&&(f.info&&(f.info.lastRun=a),f.fn(e,l,s,n,f.info,i,r),o=!0)}return o}return!1}function eo(e,t,s,n,i,r,o,a){let l=!1,c=o?St(n):n,u=t[c];if(u)for(let d=0,h=u.length,f;d<h&&(f=u[d]);d++)(!f.info||f.info.lastRun!==s)&&(!o||Ss(n,f.trigger))&&(f.info&&(f.info.lastRun=s),f.fn(e,n,i,r,f.info,o,a),l=!0);return l}function Ss(e,t){if(t){let s=t.name;return s==e||!!(t.structured&&kr(s,e))||!!(t.wildcard&&_e(s,e))}else return!0}function js(e,t,s,n,i){let r=typeof i.method=="string"?e[i.method]:i.method,o=i.property;r?r.call(e,e.__data[o],n[o]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function so(e,t,s,n,i){let r=e[C.NOTIFY],o,a=Jt++;for(let c in t)t[c]&&(r&&eo(e,r,a,c,s,n,i)||i&&no(e,c,s))&&(o=!0);let l;o&&(l=e.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function no(e,t,s){let n=St(t);if(n!==t){let i=$e(n)+"-changed";return ii(e,i,s[t],t),!0}return!1}function ii(e,t,s,n){let i={value:s,queueProperty:!0};n&&(i.path=n),mt(e).dispatchEvent(new CustomEvent(t,{detail:i}))}function io(e,t,s,n,i,r){let a=(r?St(t):t)!=t?t:null,l=a?U(e,a):e.__data[t];a&&l===void 0&&(l=s[t]),ii(e,i.eventName,l,a)}function ro(e,t,s,n,i){let r,o=e.detail,a=o&&o.path;a?(n=be(s,n,a),r=o&&o.value):r=e.currentTarget[s],r=i?!r:r,(!t[C.READ_ONLY]||!t[C.READ_ONLY][n])&&t._setPendingPropertyOrPath(n,r,!0,!!a)&&(!o||!o.queueProperty)&&t._invalidateProperties()}function oo(e,t,s,n,i){let r=e.__data[t];ye&&(r=ye(r,i.attrName,"attribute",e)),e._propertyToAttribute(t,i.attrName,r)}function ao(e,t,s,n){let i=e[C.COMPUTE];if(i)if(Sr){Jt++;const r=co(e),o=[];for(let l in t)Vs(l,i,o,r,n);let a;for(;a=o.shift();)ri(e,"",t,s,a)&&Vs(a.methodInfo,i,o,r,n);Object.assign(s,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let r=t;for(;Vt(e,i,r,s,n);)Object.assign(s,e.__dataOld),Object.assign(t,e.__dataPending),r=e.__dataPending,e.__dataPending=null}}const lo=(e,t,s)=>{let n=0,i=t.length-1,r=-1;for(;n<=i;){const o=n+i>>1,a=s.get(t[o].methodInfo)-s.get(e.methodInfo);if(a<0)n=o+1;else if(a>0)i=o-1;else{r=o;break}}r<0&&(r=i+1),t.splice(r,0,e)},Vs=(e,t,s,n,i)=>{const r=i?St(e):e,o=t[r];if(o)for(let a=0;a<o.length;a++){const l=o[a];l.info.lastRun!==Jt&&(!i||Ss(e,l.trigger))&&(l.info.lastRun=Jt,lo(l.info,s,n))}};function co(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;const s=e[C.COMPUTE];let{counts:n,ready:i,total:r}=uo(e),o;for(;o=i.shift();){t.set(o,t.size);const a=s[o];a&&a.forEach(l=>{const c=l.info.methodInfo;--r,--n[c]===0&&i.push(c)})}r!==0&&console.warn(`Computed graph for ${e.localName} incomplete; circular?`),e.constructor.__orderedComputedDeps=t}return t}function uo(e){const t=e[ni],s={},n=e[C.COMPUTE],i=[];let r=0;for(let o in t){const a=t[o];r+=s[o]=a.args.filter(l=>!l.literal).length+(a.dynamicFn?1:0)}for(let o in n)t[o]||i.push(o);return{counts:s,ready:i,total:r}}function ri(e,t,s,n,i){let r=cs(e,t,s,n,i);if(r===Gt)return!1;let o=i.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,r,!0):(e[o]=r,!1)}function ho(e,t,s){let n=e.__dataLinkedPaths;if(n){let i;for(let r in n){let o=n[r];_e(r,t)?(i=be(r,o,t),e._setPendingPropertyOrPath(i,s,!0,!0)):_e(o,t)&&(i=be(o,r,t),e._setPendingPropertyOrPath(i,s,!0,!0))}}}function Je(e,t,s,n,i,r,o){s.bindings=s.bindings||[];let a={kind:n,target:i,parts:r,literal:o,isCompound:r.length!==1};if(s.bindings.push(a),yo(a)){let{event:c,negate:u}=a.parts[0];a.listenerEvent=c||$e(i)+"-changed",a.listenerNegate=u}let l=t.nodeInfoList.length;for(let c=0;c<a.parts.length;c++){let u=a.parts[c];u.compoundIndex=c,fo(e,t,a,u,l)}}function fo(e,t,s,n,i){if(!n.literal)if(s.kind==="attribute"&&s.target[0]==="-")console.warn("Cannot set attribute "+s.target+' because "-" is not a valid attribute starting character');else{let r=n.dependencies,o={index:i,binding:s,part:n,evaluator:e};for(let a=0;a<r.length;a++){let l=r[a];typeof l=="string"&&(l=ai(l),l.wildcard=!0),e._addTemplatePropertyEffect(t,l.rootProperty,{fn:po,info:o,trigger:l})}}}function po(e,t,s,n,i,r,o){let a=o[i.index],l=i.binding,c=i.part;if(r&&c.source&&t.length>c.source.length&&l.kind=="property"&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let u=s[t];t=be(c.source,l.target,t),a._setPendingPropertyOrPath(t,u,!1,!0)&&e._enqueueClient(a)}else{let u=i.evaluator._evaluateBinding(e,c,t,s,n,r);u!==Gt&&mo(e,a,l,c,u)}}function mo(e,t,s,n,i){if(i=go(t,i,s,n),ye&&(i=ye(i,s.target,s.kind,t)),s.kind=="attribute")e._valueToNodeAttribute(t,i,s.target);else{let r=s.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[r]?(!t[C.READ_ONLY]||!t[C.READ_ONLY][r])&&t._setPendingProperty(r,i)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,r,i)}}function go(e,t,s,n){if(s.isCompound){let i=e.__dataCompoundStorage[s.target];i[n.compoundIndex]=t,t=i.join("")}return s.kind!=="attribute"&&(s.target==="textContent"||s.target==="value"&&(e.localName==="input"||e.localName==="textarea"))&&(t=t??""),t}function yo(e){return!!e.target&&e.kind!="attribute"&&e.kind!="text"&&!e.isCompound&&e.parts[0].mode==="{"}function _o(e,t){let{nodeList:s,nodeInfoList:n}=t;if(n.length)for(let i=0;i<n.length;i++){let r=n[i],o=s[i],a=r.bindings;if(a)for(let l=0;l<a.length;l++){let c=a[l];bo(o,c),wo(o,e,c)}o.__dataHost=e}}function bo(e,t){if(t.isCompound){let s=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),n=t.parts,i=new Array(n.length);for(let o=0;o<n.length;o++)i[o]=n[o].literal;let r=t.target;s[r]=i,t.literal&&t.kind=="property"&&(r==="className"&&(e=mt(e)),e[r]=t.literal)}}function wo(e,t,s){if(s.listenerEvent){let n=s.parts[0];e.addEventListener(s.listenerEvent,function(i){ro(i,t,s.target,n.source,n.negate)})}}function Hs(e,t,s,n,i,r){r=t.static||r&&(typeof r!="object"||r[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:i,dynamicFn:r};for(let a=0,l;a<t.args.length&&(l=t.args[a]);a++)l.literal||e._addPropertyEffect(l.rootProperty,s,{fn:n,info:o,trigger:l});return r&&e._addPropertyEffect(t.methodName,s,{fn:n,info:o}),o}function cs(e,t,s,n,i){let r=e._methodHost||e,o=r[i.methodName];if(o){let a=e._marshalArgs(i.args,t,s);return a===Gt?Gt:o.apply(r,a)}else i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}const vo=[],oi="(?:[a-zA-Z_$][\\w.:$\\-*]*)",xo="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",So="(?:'(?:[^'\\\\]|\\\\.)*')",Co='(?:"(?:[^"\\\\]|\\\\.)*")',Po="(?:"+So+"|"+Co+")",Us="(?:("+oi+"|"+xo+"|"+Po+")\\s*)",Eo="(?:"+Us+"(?:,\\s*"+Us+")*)",Oo="(?:\\(\\s*(?:"+Eo+"?)\\)\\s*)",To="("+oi+"\\s*"+Oo+"?)",Ao="(\\[\\[|{{)\\s*",Lo="(?:]]|}})",$o="(?:(!)\\s*)?",Ro=Ao+$o+To+Lo,Ks=new RegExp(Ro,"g");function Ws(e){let t="";for(let s=0;s<e.length;s++){let n=e[s].literal;t+=n||""}return t}function Ge(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let n={methodName:t[1],static:!0,args:vo};if(t[2].trim()){let i=t[2].replace(/\\,/g,"&comma;").split(",");return ko(i,n)}else return n}return null}function ko(e,t){return t.args=e.map(function(s){let n=ai(s);return n.literal||(t.static=!1),n},this),t}function ai(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),s={name:t,value:"",literal:!1},n=t[0];switch(n==="-"&&(n=t[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':s.value=t.slice(1,-1),s.literal=!0;break;case"#":s.value=Number(t),s.literal=!0;break}return s.literal||(s.rootProperty=St(t),s.structured=as(t),s.structured&&(s.wildcard=t.slice(-2)==".*",s.wildcard&&(s.name=t.slice(0,-2)))),s}function qs(e,t,s){let n=U(e,s);return n===void 0&&(n=t[s]),n}function li(e,t,s,n){const i={indexSplices:n};os&&!e._overrideLegacyUndefined&&(t.splices=i),e.notifyPath(s+".splices",i),e.notifyPath(s+".length",t.length),os&&!e._overrideLegacyUndefined&&(i.indexSplices=[])}function Nt(e,t,s,n,i,r){li(e,t,s,[{index:n,addedCount:i,removed:r,object:t,type:"splice"}])}function zo(e){return e[0].toUpperCase()+e.substring(1)}const No=xt(e=>{const t=Zr(Hr(e));class s extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return C}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(Mt.length){let i=Mt[Mt.length-1];i._enqueueClient(this),this.__dataHost=i}}_initializeProtoProperties(i){this.__data=Object.create(i),this.__dataPending=Object.create(i),this.__dataOld={}}_initializeInstanceProperties(i){let r=this[C.READ_ONLY];for(let o in i)(!r||!r[o])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[o]=this.__dataPending[o]=i[o])}_addPropertyEffect(i,r,o){this._createPropertyAccessor(i,r==C.READ_ONLY);let a=Ye(this,r,!0)[i];a||(a=this[r][i]=[]),a.push(o)}_removePropertyEffect(i,r,o){let a=Ye(this,r,!0)[i],l=a.indexOf(o);l>=0&&a.splice(l,1)}_hasPropertyEffect(i,r){let o=this[r];return!!(o&&o[i])}_hasReadOnlyEffect(i){return this._hasPropertyEffect(i,C.READ_ONLY)}_hasNotifyEffect(i){return this._hasPropertyEffect(i,C.NOTIFY)}_hasReflectEffect(i){return this._hasPropertyEffect(i,C.REFLECT)}_hasComputedEffect(i){return this._hasPropertyEffect(i,C.COMPUTE)}_setPendingPropertyOrPath(i,r,o,a){if(a||St(Array.isArray(i)?i[0]:i)!==i){if(!a){let l=U(this,i);if(i=Is(this,i,r),!i||!super._shouldPropertyChange(i,r,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(i,r,o))return ho(this,i,r),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[i])return this._setPendingProperty(i,r,o);this[i]=r}return!1}_setUnmanagedPropertyToNode(i,r,o){(o!==i[r]||typeof o=="object")&&(r==="className"&&(i=mt(i)),i[r]=o)}_setPendingProperty(i,r,o){let a=this.__dataHasPaths&&as(i),l=a?this.__dataTemp:this.__data;return this._shouldPropertyChange(i,r,l[i])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),i in this.__dataOld||(this.__dataOld[i]=this.__data[i]),a?this.__dataTemp[i]=r:this.__data[i]=r,this.__dataPending[i]=r,(a||this[C.NOTIFY]&&this[C.NOTIFY][i])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[i]=o),!0):!1}_setProperty(i,r){this._setPendingProperty(i,r,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(i){this.__dataPendingClients=this.__dataPendingClients||[],i!==this&&this.__dataPendingClients.push(i)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let i=this.__dataPendingClients;if(i){this.__dataPendingClients=null;for(let r=0;r<i.length;r++){let o=i[r];o.__dataEnabled?o.__dataPending&&o._flushProperties():o._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(i,r){for(let o in i)(r||!this[C.READ_ONLY]||!this[C.READ_ONLY][o])&&this._setPendingPropertyOrPath(o,i[o],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(i,r,o){let a=this.__dataHasPaths;this.__dataHasPaths=!1;let l;ao(this,r,o,a),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(r,o,a),this._flushClients(),Vt(this,this[C.REFLECT],r,o,a),Vt(this,this[C.OBSERVE],r,o,a),l&&so(this,l,r,o,a),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(i,r,o){this[C.PROPAGATE]&&Vt(this,this[C.PROPAGATE],i,r,o),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,i,r,o)}_runEffectsForTemplate(i,r,o,a){const l=(c,u)=>{Vt(this,i.propertyEffects,c,o,u,i.nodeList);for(let d=i.firstChild;d;d=d.nextSibling)this._runEffectsForTemplate(d,c,o,u)};i.runEffects?i.runEffects(l,r,a):l(r,a)}linkPaths(i,r){i=jt(i),r=jt(r),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[i]=r}unlinkPaths(i){i=jt(i),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[i]}notifySplices(i,r){let o={path:""},a=U(this,i,o);li(this,a,o.path,r)}get(i,r){return U(r||this,i)}set(i,r,o){o?Is(o,i,r):(!this[C.READ_ONLY]||!this[C.READ_ONLY][i])&&this._setPendingPropertyOrPath(i,r,!0)&&this._invalidateProperties()}push(i,...r){let o={path:""},a=U(this,i,o),l=a.length,c=a.push(...r);return r.length&&Nt(this,a,o.path,l,r.length,[]),c}pop(i){let r={path:""},o=U(this,i,r),a=!!o.length,l=o.pop();return a&&Nt(this,o,r.path,o.length,0,[l]),l}splice(i,r,o,...a){let l={path:""},c=U(this,i,l);r<0?r=c.length-Math.floor(-r):r&&(r=Math.floor(r));let u;return arguments.length===2?u=c.splice(r):u=c.splice(r,o,...a),(a.length||u.length)&&Nt(this,c,l.path,r,a.length,u),u}shift(i){let r={path:""},o=U(this,i,r),a=!!o.length,l=o.shift();return a&&Nt(this,o,r.path,0,0,[l]),l}unshift(i,...r){let o={path:""},a=U(this,i,o),l=a.unshift(...r);return r.length&&Nt(this,a,o.path,0,r.length,[]),l}notifyPath(i,r){let o;if(arguments.length==1){let a={path:""};r=U(this,i,a),o=a.path}else Array.isArray(i)?o=jt(i):o=i;this._setPendingPropertyOrPath(o,r,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(i,r){this._addPropertyEffect(i,C.READ_ONLY),r&&(this["_set"+zo(i)]=function(o){this._setProperty(i,o)})}_createPropertyObserver(i,r,o){let a={property:i,method:r,dynamicFn:!!o};this._addPropertyEffect(i,C.OBSERVE,{fn:js,info:a,trigger:{name:i}}),o&&this._addPropertyEffect(r,C.OBSERVE,{fn:js,info:a,trigger:{name:r}})}_createMethodObserver(i,r){let o=Ge(i);if(!o)throw new Error("Malformed observer expression '"+i+"'");Hs(this,o,C.OBSERVE,cs,null,r)}_createNotifyingProperty(i){this._addPropertyEffect(i,C.NOTIFY,{fn:io,info:{eventName:$e(i)+"-changed",property:i}})}_createReflectedProperty(i){let r=this.constructor.attributeNameForProperty(i);r[0]==="-"?console.warn("Property "+i+" cannot be reflected to attribute "+r+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(i,C.REFLECT,{fn:oo,info:{attrName:r}})}_createComputedProperty(i,r,o){let a=Ge(r);if(!a)throw new Error("Malformed computed expression '"+r+"'");const l=Hs(this,a,C.COMPUTE,ri,i,o);Ye(this,ni)[i]=l}_marshalArgs(i,r,o){const a=this.__data,l=[];for(let c=0,u=i.length;c<u;c++){let{name:d,structured:h,wildcard:f,value:p,literal:m}=i[c];if(!m)if(f){const g=_e(d,r),y=qs(a,o,g?r:d);p={path:g?r:d,value:y,base:g?U(a,d):y}}else p=h?qs(a,o,d):a[d];if(os&&!this._overrideLegacyUndefined&&p===void 0&&i.length>1)return Gt;l[c]=p}return l}static addPropertyEffect(i,r,o){this.prototype._addPropertyEffect(i,r,o)}static createPropertyObserver(i,r,o){this.prototype._createPropertyObserver(i,r,o)}static createMethodObserver(i,r){this.prototype._createMethodObserver(i,r)}static createNotifyingProperty(i){this.prototype._createNotifyingProperty(i)}static createReadOnlyProperty(i,r){this.prototype._createReadOnlyProperty(i,r)}static createReflectedProperty(i){this.prototype._createReflectedProperty(i)}static createComputedProperty(i,r,o){this.prototype._createComputedProperty(i,r,o)}static bindTemplate(i){return this.prototype._bindTemplate(i)}_bindTemplate(i,r){let o=this.constructor._parseTemplate(i),a=this.__preBoundTemplateInfo==o;if(!a)for(let l in o.propertyEffects)this._createPropertyAccessor(l);if(r)if(o=Object.create(o),o.wasPreBound=a,!this.__templateInfo)this.__templateInfo=o;else{const l=i._parentTemplateInfo||this.__templateInfo,c=l.lastChild;o.parent=l,l.lastChild=o,o.previousSibling=c,c?c.nextSibling=o:l.firstChild=o}else this.__preBoundTemplateInfo=o;return o}static _addTemplatePropertyEffect(i,r,o){let a=i.hostProps=i.hostProps||{};a[r]=!0;let l=i.propertyEffects=i.propertyEffects||{};(l[r]=l[r]||[]).push(o)}_stampTemplate(i,r){r=r||this._bindTemplate(i,!0),Mt.push(this);let o=super._stampTemplate(i,r);if(Mt.pop(),r.nodeList=o.nodeList,!r.wasPreBound){let a=r.childNodes=[];for(let l=o.firstChild;l;l=l.nextSibling)a.push(l)}return o.templateInfo=r,_o(this,r),this.__dataClientsReady&&(this._runEffectsForTemplate(r,this.__data,null,!1),this._flushClients()),o}_removeBoundDom(i){const r=i.templateInfo,{previousSibling:o,nextSibling:a,parent:l}=r;o?o.nextSibling=a:l&&(l.firstChild=a),a?a.previousSibling=o:l&&(l.lastChild=o),r.nextSibling=r.previousSibling=null;let c=r.childNodes;for(let u=0;u<c.length;u++){let d=c[u];mt(mt(d).parentNode).removeChild(d)}}static _parseTemplateNode(i,r,o){let a=t._parseTemplateNode.call(this,i,r,o);if(i.nodeType===Node.TEXT_NODE){let l=this._parseBindings(i.textContent,r);l&&(i.textContent=Ws(l)||" ",Je(this,r,o,"text","textContent",l),a=!0)}return a}static _parseTemplateNodeAttribute(i,r,o,a,l){let c=this._parseBindings(l,r);if(c){let u=a,d="property";to.test(a)?d="attribute":a[a.length-1]=="$"&&(a=a.slice(0,-1),d="attribute");let h=Ws(c);return h&&d=="attribute"&&(a=="class"&&i.hasAttribute("class")&&(h+=" "+i.getAttribute(a)),i.setAttribute(a,h)),d=="attribute"&&u=="disable-upgrade$"&&i.setAttribute(a,""),i.localName==="input"&&u==="value"&&i.setAttribute(u,""),i.removeAttribute(u),d==="property"&&(a=Xn(a)),Je(this,r,o,d,a,c,h),!0}else return t._parseTemplateNodeAttribute.call(this,i,r,o,a,l)}static _parseTemplateNestedTemplate(i,r,o){let a=t._parseTemplateNestedTemplate.call(this,i,r,o);const l=i.parentNode,c=o.templateInfo,u=l.localName==="dom-if",d=l.localName==="dom-repeat";ks&&(u||d)&&(l.removeChild(i),o=o.parentInfo,o.templateInfo=c,o.noted=!0,a=!1);let h=c.hostProps;if(Cr&&u)h&&(r.hostProps=Object.assign(r.hostProps||{},h),ks||(o.parentInfo.noted=!0));else{let f="{";for(let p in h){let m=[{mode:f,source:p,dependencies:[p],hostProp:!0}];Je(this,r,o,"property","_host_"+p,m)}}return a}static _parseBindings(i,r){let o=[],a=0,l;for(;(l=Ks.exec(i))!==null;){l.index>a&&o.push({literal:i.slice(a,l.index)});let c=l[1][0],u=!!l[2],d=l[3].trim(),h=!1,f="",p=-1;c=="{"&&(p=d.indexOf("::"))>0&&(f=d.substring(p+2),d=d.substring(0,p),h=!0);let m=Ge(d),g=[];if(m){let{args:y,methodName:_}=m;for(let w=0;w<y.length;w++){let v=y[w];v.literal||g.push(v)}let b=r.dynamicFns;(b&&b[_]||m.static)&&(g.push(_),m.dynamicFn=!0)}else g.push(d);o.push({source:d,mode:c,negate:u,customEvent:h,signature:m,dependencies:g,event:f}),a=Ks.lastIndex}if(a&&a<i.length){let c=i.substring(a);c&&o.push({literal:c})}return o.length?o:null}static _evaluateBinding(i,r,o,a,l,c){let u;return r.signature?u=cs(i,o,a,l,r.signature):o!=r.source?u=U(i,r.source):c&&as(o)?u=U(i,o):u=i.__data[o],r.negate&&(u=!u),u}}return s}),Mt=[];/**
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
*/function Mo(e){const t={};for(let s in e){const n=e[s];t[s]=typeof n=="function"?{type:n}:n}return t}const Fo=xt(e=>{const t=ti(e);function s(r){const o=Object.getPrototypeOf(r);return o.prototype instanceof i?o:null}function n(r){if(!r.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",r))){let o=null;if(r.hasOwnProperty(JSCompiler_renameProperty("properties",r))){const a=r.properties;a&&(o=Mo(a))}r.__ownProperties=o}return r.__ownProperties}class i extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const o=this._properties;this.__observedAttributes=o?Object.keys(o).map(a=>this.prototype._addPropertyToAttributeMap(a)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const o=s(this);o&&o.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const o=n(this);o&&this.createProperties(o)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const o=s(this);this.__properties=Object.assign({},o&&o._properties,n(this))}return this.__properties}static typeForProperty(o){const a=this._properties[o];return a&&a.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const Io="3.5.2",Ys=window.ShadyCSS&&window.ShadyCSS.cssBuild,Do=xt(e=>{const t=Fo(No(e));function s(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let c=l._properties;for(let u in c){let d=c[u];"value"in d&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[u]=d)}}return l.__propertyDefaults}function n(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function i(l,c,u,d){u.computed&&(u.readOnly=!0),u.computed&&(l._hasReadOnlyEffect(c)?console.warn(`Cannot redefine computed property '${c}'.`):l._createComputedProperty(c,u.computed,d)),u.readOnly&&!l._hasReadOnlyEffect(c)?l._createReadOnlyProperty(c,!u.computed):u.readOnly===!1&&l._hasReadOnlyEffect(c)&&console.warn(`Cannot make readOnly property '${c}' non-readOnly.`),u.reflectToAttribute&&!l._hasReflectEffect(c)?l._createReflectedProperty(c):u.reflectToAttribute===!1&&l._hasReflectEffect(c)&&console.warn(`Cannot make reflected property '${c}' non-reflected.`),u.notify&&!l._hasNotifyEffect(c)?l._createNotifyingProperty(c):u.notify===!1&&l._hasNotifyEffect(c)&&console.warn(`Cannot make notify property '${c}' non-notify.`),u.observer&&l._createPropertyObserver(c,u.observer,d[u.observer]),l._addPropertyToAttributeMap(c)}function r(l,c,u,d){if(!Ys){const h=c.content.querySelectorAll("style"),f=Yn(c),p=Rr(u),m=c.content.firstElementChild;for(let y=0;y<p.length;y++){let _=p[y];_.textContent=l._processStyleText(_.textContent,d),c.content.insertBefore(_,m)}let g=0;for(let y=0;y<f.length;y++){let _=f[y],b=h[g];b!==_?(_=_.cloneNode(!0),b.parentNode.insertBefore(_,b)):g++,_.textContent=l._processStyleText(_.textContent,d)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(c,u),Pr&&Ys&&yr){const h=c.content.querySelectorAll("style");if(h){let f="";Array.from(h).forEach(p=>{f+=p.textContent,p.parentNode.removeChild(p)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(f)}}}function o(l){let c=null;if(l&&(!rs||br)&&(c=Yt.import(l,"template"),rs&&!c))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return c}class a extends t{static get polymerElementVersion(){return Io}static _finalizeClass(){t._finalizeClass.call(this);const c=n(this);c&&this.createObservers(c,this._properties),this._prepareTemplate()}static _prepareTemplate(){let c=this.template;c&&(typeof c=="string"?(console.error("template getter must return HTMLTemplateElement"),c=null):wr||(c=c.cloneNode(!0))),this.prototype._template=c}static createProperties(c){for(let u in c)i(this.prototype,u,c[u],c)}static createObservers(c,u){const d=this.prototype;for(let h=0;h<c.length;h++)d._createMethodObserver(c[h],u)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let c=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof c=="function"&&(c=c()),this._template=c!==void 0?c:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&o(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(c){this._template=c}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const c=this.importMeta;if(c)this._importPath=vs(c.url);else{const u=Yt.import(this.is);this._importPath=u&&u.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=_r,this.importPath=this.constructor.importPath;let c=s(this.constructor);if(c)for(let u in c){let d=c[u];if(this._canApplyPropertyDefault(u)){let h=typeof d.value=="function"?d.value.call(this):d.value;this._hasAccessor(u)?this._setPendingProperty(u,h,!0):this[u]=h}}}_canApplyPropertyDefault(c){return!this.hasOwnProperty(c)}static _processStyleText(c,u){return ws(c,u)}static _finalizeTemplate(c){const u=this.prototype._template;if(u&&!u.__polymerFinalized){u.__polymerFinalized=!0;const d=this.importPath,h=d?Ht(d):"";r(this,u,c,h),this.prototype._bindTemplate(u)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(c){const u=mt(this);if(u.attachShadow)return c?(u.shadowRoot||(u.attachShadow({mode:"open",shadyUpgradeFragment:c}),u.shadowRoot.appendChild(c),this.constructor._styleSheet&&(u.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),xr&&window.ShadyDOM&&window.ShadyDOM.flushInitial(u.shadowRoot),u.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(c){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,c)}resolveUrl(c,u){return!u&&this.importPath&&(u=Ht(this.importPath)),Ht(c,u)}static _parseTemplateContent(c,u,d){return u.dynamicFns=u.dynamicFns||this._properties,t._parseTemplateContent.call(this,c,u,d)}static _addTemplatePropertyEffect(c,u,d){return vr&&!(u in this._properties)&&!(d.info.part.signature&&d.info.part.signature.static)&&!d.info.part.hostProp&&!c.nestedTemplate&&console.warn(`Property '${u}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,c,u,d)}}return a});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Js=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:e=>e});class ci{constructor(t,s){di(t,s);const n=s.reduce((i,r,o)=>i+ui(r)+t[o+1],t[0]);this.value=n.toString()}toString(){return this.value}}function ui(e){if(e instanceof ci)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}function Bo(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof ci)return ui(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}const jo=function(t,...s){di(t,s);const n=document.createElement("template");let i=s.reduce((r,o,a)=>r+Bo(o)+t[a+1],t[0]);return Js&&(i=Js.createHTML(i)),n.innerHTML=i,n},di=(e,t)=>{if(!Array.isArray(e)||!Array.isArray(e.raw)||t.length!==e.length-1)throw new TypeError("Invalid call to the html template tag")};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Vo=Do(HTMLElement);let ve,hi=0;function Gs(e){ve=e}function Xs(){ve=null,hi=0}function Ho(){return hi++}const Xe=Symbol("haunted.phase"),pe=Symbol("haunted.hook"),Qs=Symbol("haunted.update"),Zs=Symbol("haunted.commit"),gt=Symbol("haunted.effects"),Ut=Symbol("haunted.layoutEffects"),us="haunted.context";class Uo{update;host;virtual;[pe];[gt];[Ut];constructor(t,s){this.update=t,this.host=s,this[pe]=new Map,this[gt]=[],this[Ut]=[]}run(t){Gs(this);let s=t();return Xs(),s}_runEffects(t){let s=this[t];Gs(this);for(let n of s)n.call(this);Xs()}runEffects(){this._runEffects(gt)}runLayoutEffects(){this._runEffects(Ut)}teardown(){this[pe].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}const Ko=Promise.resolve().then.bind(Promise.resolve());function fi(){let e=[],t;function s(){t=null;let n=e;e=[];for(var i=0,r=n.length;i<r;i++)n[i]()}return function(n){e.push(n),t==null&&(t=Ko(s))}}const Wo=fi(),tn=fi();class qo{renderer;host;state;[Xe];_updateQueued;_active;constructor(t,s){this.renderer=t,this.host=s,this.state=new Uo(this.update.bind(this),s),this[Xe]=null,this._updateQueued=!1,this._active=!0}update(){this._active&&(this._updateQueued||(Wo(()=>{let t=this.handlePhase(Qs);tn(()=>{this.handlePhase(Zs,t),tn(()=>{this.handlePhase(gt)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(t,s){switch(this[Xe]=t,t){case Zs:this.commit(s),this.runEffects(Ut);return;case Qs:return this.render();case gt:return this.runEffects(gt)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(t){this.state._runEffects(t)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const Cs=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},Yo=e=>e?.map(t=>typeof t=="string"?Cs(t):t),Jo=(e,...t)=>e.flatMap((s,n)=>[s,t[n]||""]).join(""),X=Jo,Go=(e="")=>e.replace(/-+([a-z])?/g,(t,s)=>s?s.toUpperCase():"");function Xo(e){class t extends qo{frag;renderResult;constructor(i,r,o){super(i,o||r),this.frag=r}commit(i){this.renderResult=e(i,this.frag)}}function s(n,i,r){const o=(r||i||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:l=!0,shadowRootInit:c={},styleSheets:u}=r||i||{},d=Yo(n.styleSheets||u);class h extends o{_scheduler;static get observedAttributes(){return n.observedAttributes||a||[]}constructor(){if(super(),l===!1)this._scheduler=new t(n,this);else{const g=this.attachShadow({mode:"open",...c});d&&(g.adoptedStyleSheets=d),this._scheduler=new t(n,g,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(g,y,_){if(y===_)return;let b=_===""?!0:_;Reflect.set(this,Go(g),b)}}function f(m){let g=m,y=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return g},set(_){y&&g===_||(y=!0,g=_,this._scheduler&&this._scheduler.update())}})}const p=new Proxy(o.prototype,{getPrototypeOf(m){return m},set(m,g,y,_){let b;return g in m?(b=Object.getOwnPropertyDescriptor(m,g),b&&b.set?(b.set.call(_,y),!0):(Reflect.set(m,g,y,_),!0)):(typeof g=="symbol"||g[0]==="_"?b={enumerable:!0,configurable:!0,writable:!0,value:y}:b=f(y),Object.defineProperty(_,g,b),b.set&&b.set.call(_,y),!0)}});return Object.setPrototypeOf(h.prototype,p),h}return s}class ht{id;state;constructor(t,s){this.id=t,this.state=s}}function Qo(e,...t){let s=Ho(),n=ve[pe],i=n.get(s);return i||(i=new e(s,ve,...t),n.set(s,i)),i.update(...t)}function ft(e){return Qo.bind(null,e)}function pi(e){return ft(class extends ht{callback;lastValues;values;_teardown;constructor(t,s,n,i){super(t,s),e(s,this)}update(t,s){this.callback=t,this.values=s}call(){const t=!this.values||this.hasChanged();this.lastValues=this.values,t&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(t){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),t&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((t,s)=>this.lastValues[s]!==t)}})}function mi(e,t){e[gt].push(t)}const T=pi(mi),Zo=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,gi=ft(class extends ht{Context;value;_ranEffect;_unsubscribe;constructor(e,t,s){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,mi(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const t={Context:e,callback:this._updater};Zo(this.state.host).dispatchEvent(new CustomEvent(us,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:n=null,value:i}=t;this.value=n?i:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}});function ta(e){return t=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(us,this)}disconnectedCallback(){this.removeEventListener(us,this)}handleEvent(n){const{detail:i}=n;i.Context===s&&(i.value=this.value,i.unsubscribe=this.unsubscribe.bind(this,i.callback),this.listeners.add(i.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let i of this.listeners)i(n)}get value(){return this._value}},Consumer:e(function({render:n}){const i=gi(s);return n(i)},{useShadowDOM:!1}),defaultValue:t};return s}}const R=ft(class extends ht{value;values;constructor(e,t,s,n){super(e,t),this.value=s(),this.values=n}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((t,s)=>this.values[s]!==t)}}),$=(e,t)=>R(()=>e,t);function ea(e,t){e[Ut].push(t)}const ds=pi(ea),nt=ft(class extends ht{args;constructor(e,t,s){super(e,t),this.updater=this.updater.bind(this),typeof s=="function"&&(s=s()),this.makeArgs(s)}update(){return this.args}updater(e){const[t]=this.args;typeof e=="function"&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}}),sa=ft(class extends ht{reducer;currentState;constructor(e,t,s,n,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i!==void 0?i(n):n}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}}),na=/([A-Z])/gu,ia=ft(class extends ht{property;eventName;constructor(e,t,s,n){if(super(e,t),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=s,this.eventName=s.replace(na,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof n=="function"&&(n=n()),n!=null&&this.updateProp(n))}update(e,t){return[this.state.host[this.property],this.updater]}updater(e){const t=this.state.host[this.property];typeof e=="function"&&(e=e(t)),!Object.is(t,e)&&this.updateProp(e)}updateProp(e){this.notify(e).defaultPrevented||(this.state.host[this.property]=e)}notify(e){const t=new CustomEvent(this.eventName,{detail:{value:e,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(t),t}});function yi(e){return R(()=>({current:e}),[])}function ra({render:e}){const t=Xo(e),s=ta(t);return{component:t,createContext:s}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},ot=e=>(...t)=>({_$litDirective$:e,values:t});let Ct=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,n){this._$Ct=t,this._$AM=s,this._$Ci=n}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kt=(e,t)=>{const s=e._$AN;if(s===void 0)return!1;for(const n of s)n._$AO?.(t,!1),Kt(n,t);return!0},xe=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while(s?.size===0)},_i=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),la(t)}};function oa(e){this._$AN!==void 0?(xe(this),this._$AM=e,_i(this)):this._$AM=e}function aa(e,t=!1,s=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(n))for(let r=s;r<n.length;r++)Kt(n[r],!1),xe(n[r]);else n!=null&&(Kt(n,!1),xe(n));else Kt(this,e)}const la=e=>{e.type==G.CHILD&&(e._$AP??=aa,e._$AQ??=oa)};class Re extends Ct{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,n){super._$AT(t,s,n),_i(this),this.isConnected=t._$AU}_$AO(t,s=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),s&&(Kt(this,t),xe(this))}setValue(t){if(Hn(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:V,createContext:ca}=ra({render:cr}),ua={duration:250},bi=e=>(t,s,n)=>{const i="max"+e.charAt(0).toUpperCase()+e.slice(1);Object.assign(t.style,{[i]:"",display:""});const{[e]:r}=t.getBoundingClientRect(),o=[0,r],[a,l]=s?o:o.slice().reverse(),c=t.animate([{[i]:`${a}px`},{[i]:`${l}px`}],{...ua,...n});c.onfinish=()=>Object.assign(t.style,{[i]:"",display:s?"":"none"})};function da(e){return()=>e}const ha=da(),wi=ha,At=e=>e;function Ju(e,...t){return typeof e=="function"?e(...t):e}const vi=ca(()=>wi);customElements.define("cosmoz-keybinding-provider",vi.Provider);const Rt=e=>{const t=R(()=>({}),[]);return R(()=>Object.assign(t,e),[t,...Object.values(e)])},fa=(e,t)=>{const s=gi(vi),n=Rt(e);T(()=>s(n),t)},en=e=>e.matches(":focus-within"),xi=({disabled:e,onFocus:t})=>{const[s,n]=nt(),{focused:i,closed:r}=s||{},o=i&&!e,a=Rt({closed:r,onFocus:t}),l=$(u=>n(d=>({...d,closed:u})),[]),c=$(u=>{const d=u.currentTarget;return en(d)?n(h=>({focused:!0,closed:!h?.closed})):d.focus()},[]);return T(()=>{if(!o)return;const u=d=>{if(d.defaultPrevented)return;const{closed:h}=a;d.key==="Escape"&&!h?(d.preventDefault(),l(!0)):["ArrowUp","Up"].includes(d.key)&&h&&(d.preventDefault(),l(!1))};return document.addEventListener("keydown",u,!0),()=>document.removeEventListener("keydown",u,!0)},[o]),{focused:o,active:o&&!r,setClosed:l,onToggle:c,onFocus:$(u=>{const d=en(u.currentTarget);n({focused:d}),a.onFocus?.(d)},[a])}},sn=["focusin","focusout"],pa=e=>{const t=xi(e),{onFocus:s}=t;return T(()=>(e.setAttribute("tabindex","0"),sn.forEach(n=>e.addEventListener(n,s)),()=>{sn.forEach(n=>e.removeEventListener(n,s))}),[]),t},ma=X`
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
`,ga=()=>P` <slot></slot> `;customElements.define("cosmoz-dropdown-list",V(ga,{styleSheets:[ma]}));const ya=({placement:e})=>P` <cosmoz-dropdown
		.placement=${e}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;customElements.define("cosmoz-dropdown-menu",V(ya));/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function J(e,t,s){return e?t(e):s?.(e)}const Qe=new WeakMap,_t=ot(class extends Re{render(e){return ct}update(e,[t]){const s=t!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),ct}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let s=Qe.get(t);s===void 0&&(s=new WeakMap,Qe.set(t,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?Qe.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Si="important",_a=" !"+Si,Ci=ot(class extends Ct{constructor(e){if(super(e),e.type!==G.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,s)=>{const n=e[s];return n==null?t:t+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`}),"")}update(e,[t]){const{style:s}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const n of this.ft)t[n]==null&&(this.ft.delete(n),n.includes("-")?s.removeProperty(n):s[n]=null);for(const n in t){const i=t[n];if(i!=null){this.ft.add(n);const r=typeof i=="string"&&i.endsWith(_a);n.includes("-")||r?s.setProperty(n,r?i.slice(0,-11):i,r?Si:""):s[n]=i}}return j}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ba={},Pi=ot(class extends Ct{constructor(){super(...arguments),this.ot=ba}render(e,t){return t()}update(e,[t,s]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every(((n,i)=>n===this.ot[i])))return j}else if(this.ot===t)return j;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,s)}}),Ei=(e=HTMLElement)=>class extends e{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},wa=X`
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
`,va=()=>P`<div class="wrap" part="wrap"><slot></slot></div>`;customElements.define("cosmoz-dropdown-content",Ei(V(va,{styleSheets:[wa]})));const Lt=Math.min,W=Math.max,Se=Math.round,oe=Math.floor,it=e=>({x:e,y:e}),xa={left:"right",right:"left",bottom:"top",top:"bottom"},Sa={start:"end",end:"start"};function nn(e,t,s){return W(e,Lt(t,s))}function ke(e,t){return typeof e=="function"?e(t):e}function bt(e){return e.split("-")[0]}function ze(e){return e.split("-")[1]}function Oi(e){return e==="x"?"y":"x"}function Ti(e){return e==="y"?"height":"width"}const Ca=new Set(["top","bottom"]);function ut(e){return Ca.has(bt(e))?"y":"x"}function Ai(e){return Oi(ut(e))}function Pa(e,t,s){s===void 0&&(s=!1);const n=ze(e),i=Ai(e),r=Ti(i);let o=i==="x"?n===(s?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(o=Ce(o)),[o,Ce(o)]}function Ea(e){const t=Ce(e);return[hs(e),t,hs(t)]}function hs(e){return e.replace(/start|end/g,t=>Sa[t])}const rn=["left","right"],on=["right","left"],Oa=["top","bottom"],Ta=["bottom","top"];function Aa(e,t,s){switch(e){case"top":case"bottom":return s?t?on:rn:t?rn:on;case"left":case"right":return t?Oa:Ta;default:return[]}}function La(e,t,s,n){const i=ze(e);let r=Aa(bt(e),s==="start",n);return i&&(r=r.map(o=>o+"-"+i),t&&(r=r.concat(r.map(hs)))),r}function Ce(e){return e.replace(/left|right|bottom|top/g,t=>xa[t])}function $a(e){return{top:0,right:0,bottom:0,left:0,...e}}function Ra(e){return typeof e!="number"?$a(e):{top:e,right:e,bottom:e,left:e}}function Pe(e){const{x:t,y:s,width:n,height:i}=e;return{width:n,height:i,top:s,left:t,right:t+n,bottom:s+i,x:t,y:s}}function an(e,t,s){let{reference:n,floating:i}=e;const r=ut(t),o=Ai(t),a=Ti(o),l=bt(t),c=r==="y",u=n.x+n.width/2-i.width/2,d=n.y+n.height/2-i.height/2,h=n[a]/2-i[a]/2;let f;switch(l){case"top":f={x:u,y:n.y-i.height};break;case"bottom":f={x:u,y:n.y+n.height};break;case"right":f={x:n.x+n.width,y:d};break;case"left":f={x:n.x-i.width,y:d};break;default:f={x:n.x,y:n.y}}switch(ze(t)){case"start":f[o]-=h*(s&&c?-1:1);break;case"end":f[o]+=h*(s&&c?-1:1);break}return f}const ka=async(e,t,s)=>{const{placement:n="bottom",strategy:i="absolute",middleware:r=[],platform:o}=s,a=r.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(t));let c=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=an(c,n,l),h=n,f={},p=0;for(let m=0;m<a.length;m++){const{name:g,fn:y}=a[m],{x:_,y:b,data:w,reset:v}=await y({x:u,y:d,initialPlacement:n,placement:h,strategy:i,middlewareData:f,rects:c,platform:o,elements:{reference:e,floating:t}});u=_??u,d=b??d,f={...f,[g]:{...f[g],...w}},v&&p<=50&&(p++,typeof v=="object"&&(v.placement&&(h=v.placement),v.rects&&(c=v.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):v.rects),{x:u,y:d}=an(c,h,l)),m=-1)}return{x:u,y:d,placement:h,strategy:i,middlewareData:f}};async function Ps(e,t){var s;t===void 0&&(t={});const{x:n,y:i,platform:r,rects:o,elements:a,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:h=!1,padding:f=0}=ke(t,e),p=Ra(f),g=a[h?d==="floating"?"reference":"floating":d],y=Pe(await r.getClippingRect({element:(s=await(r.isElement==null?void 0:r.isElement(g)))==null||s?g:g.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),_=d==="floating"?{x:n,y:i,width:o.floating.width,height:o.floating.height}:o.reference,b=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),w=await(r.isElement==null?void 0:r.isElement(b))?await(r.getScale==null?void 0:r.getScale(b))||{x:1,y:1}:{x:1,y:1},v=Pe(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:_,offsetParent:b,strategy:l}):_);return{top:(y.top-v.top+p.top)/w.y,bottom:(v.bottom-y.bottom+p.bottom)/w.y,left:(y.left-v.left+p.left)/w.x,right:(v.right-y.right+p.right)/w.x}}const za=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var s,n;const{placement:i,middlewareData:r,rects:o,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:h,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:m=!0,...g}=ke(e,t);if((s=r.arrow)!=null&&s.alignmentOffset)return{};const y=bt(i),_=ut(a),b=bt(a)===a,w=await(l.isRTL==null?void 0:l.isRTL(c.floating)),v=h||(b||!m?[Ce(a)]:Ea(a)),A=p!=="none";!h&&A&&v.push(...La(a,m,p,w));const S=[a,...v],N=await Ps(t,g),z=[];let F=((n=r.flip)==null?void 0:n.overflows)||[];if(u&&z.push(N[y]),d){const k=Pa(i,o,w);z.push(N[k[0]],N[k[1]])}if(F=[...F,{placement:i,overflows:z}],!z.every(k=>k<=0)){var I,tt;const k=(((I=r.flip)==null?void 0:I.index)||0)+1,D=S[k];if(D&&(!(d==="alignment"?_!==ut(D):!1)||F.every(O=>ut(O.placement)===_?O.overflows[0]>0:!0)))return{data:{index:k,overflows:F},reset:{placement:D}};let Y=(tt=F.filter(L=>L.overflows[0]<=0).sort((L,O)=>L.overflows[1]-O.overflows[1])[0])==null?void 0:tt.placement;if(!Y)switch(f){case"bestFit":{var H;const L=(H=F.filter(O=>{if(A){const M=ut(O.placement);return M===_||M==="y"}return!0}).map(O=>[O.placement,O.overflows.filter(M=>M>0).reduce((M,lt)=>M+lt,0)]).sort((O,M)=>O[1]-M[1])[0])==null?void 0:H[0];L&&(Y=L);break}case"initialPlacement":Y=a;break}if(i!==Y)return{reset:{placement:Y}}}return{}}}},Na=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:s,y:n,placement:i}=t,{mainAxis:r=!0,crossAxis:o=!1,limiter:a={fn:g=>{let{x:y,y:_}=g;return{x:y,y:_}}},...l}=ke(e,t),c={x:s,y:n},u=await Ps(t,l),d=ut(bt(i)),h=Oi(d);let f=c[h],p=c[d];if(r){const g=h==="y"?"top":"left",y=h==="y"?"bottom":"right",_=f+u[g],b=f-u[y];f=nn(_,f,b)}if(o){const g=d==="y"?"top":"left",y=d==="y"?"bottom":"right",_=p+u[g],b=p-u[y];p=nn(_,p,b)}const m=a.fn({...t,[h]:f,[d]:p});return{...m,data:{x:m.x-s,y:m.y-n,enabled:{[h]:r,[d]:o}}}}}},Ma=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var s,n;const{placement:i,rects:r,platform:o,elements:a}=t,{apply:l=()=>{},...c}=ke(e,t),u=await Ps(t,c),d=bt(i),h=ze(i),f=ut(i)==="y",{width:p,height:m}=r.floating;let g,y;d==="top"||d==="bottom"?(g=d,y=h===(await(o.isRTL==null?void 0:o.isRTL(a.floating))?"start":"end")?"left":"right"):(y=d,g=h==="end"?"top":"bottom");const _=m-u.top-u.bottom,b=p-u.left-u.right,w=Lt(m-u[g],_),v=Lt(p-u[y],b),A=!t.middlewareData.shift;let S=w,N=v;if((s=t.middlewareData.shift)!=null&&s.enabled.x&&(N=b),(n=t.middlewareData.shift)!=null&&n.enabled.y&&(S=_),A&&!h){const F=W(u.left,0),I=W(u.right,0),tt=W(u.top,0),H=W(u.bottom,0);f?N=p-2*(F!==0||I!==0?F+I:W(u.left,u.right)):S=m-2*(tt!==0||H!==0?tt+H:W(u.top,u.bottom))}await l({...t,availableWidth:N,availableHeight:S});const z=await o.getDimensions(a.floating);return p!==z.width||m!==z.height?{reset:{rects:!0}}:{}}}};function Ne(){return typeof window<"u"}function kt(e){return Li(e)?(e.nodeName||"").toLowerCase():"#document"}function q(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function at(e){var t;return(t=(Li(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Li(e){return Ne()?e instanceof Node||e instanceof q(e).Node:!1}function Q(e){return Ne()?e instanceof Element||e instanceof q(e).Element:!1}function rt(e){return Ne()?e instanceof HTMLElement||e instanceof q(e).HTMLElement:!1}function ln(e){return!Ne()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof q(e).ShadowRoot}const Fa=new Set(["inline","contents"]);function te(e){const{overflow:t,overflowX:s,overflowY:n,display:i}=Z(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+s)&&!Fa.has(i)}const Ia=new Set(["table","td","th"]);function Da(e){return Ia.has(kt(e))}const Ba=[":popover-open",":modal"];function Me(e){return Ba.some(t=>{try{return e.matches(t)}catch{return!1}})}const ja=["transform","translate","scale","rotate","perspective"],Va=["transform","translate","scale","rotate","perspective","filter"],Ha=["paint","layout","strict","content"];function Es(e){const t=Os(),s=Q(e)?Z(e):e;return ja.some(n=>s[n]?s[n]!=="none":!1)||(s.containerType?s.containerType!=="normal":!1)||!t&&(s.backdropFilter?s.backdropFilter!=="none":!1)||!t&&(s.filter?s.filter!=="none":!1)||Va.some(n=>(s.willChange||"").includes(n))||Ha.some(n=>(s.contain||"").includes(n))}function Ua(e){let t=dt(e);for(;rt(t)&&!$t(t);){if(Es(t))return t;if(Me(t))return null;t=dt(t)}return null}function Os(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Ka=new Set(["html","body","#document"]);function $t(e){return Ka.has(kt(e))}function Z(e){return q(e).getComputedStyle(e)}function Fe(e){return Q(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function dt(e){if(kt(e)==="html")return e;const t=e.assignedSlot||e.parentNode||ln(e)&&e.host||at(e);return ln(t)?t.host:t}function $i(e){const t=dt(e);return $t(t)?e.ownerDocument?e.ownerDocument.body:e.body:rt(t)&&te(t)?t:$i(t)}function Xt(e,t,s){var n;t===void 0&&(t=[]),s===void 0&&(s=!0);const i=$i(e),r=i===((n=e.ownerDocument)==null?void 0:n.body),o=q(i);if(r){const a=fs(o);return t.concat(o,o.visualViewport||[],te(i)?i:[],a&&s?Xt(a):[])}return t.concat(i,Xt(i,[],s))}function fs(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Ri(e){const t=Z(e);let s=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const i=rt(e),r=i?e.offsetWidth:s,o=i?e.offsetHeight:n,a=Se(s)!==r||Se(n)!==o;return a&&(s=r,n=o),{width:s,height:n,$:a}}function Ts(e){return Q(e)?e:e.contextElement}function Tt(e){const t=Ts(e);if(!rt(t))return it(1);const s=t.getBoundingClientRect(),{width:n,height:i,$:r}=Ri(t);let o=(r?Se(s.width):s.width)/n,a=(r?Se(s.height):s.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const Wa=it(0);function ki(e){const t=q(e);return!Os()||!t.visualViewport?Wa:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function qa(e,t,s){return t===void 0&&(t=!1),!s||t&&s!==q(e)?!1:t}function wt(e,t,s,n){t===void 0&&(t=!1),s===void 0&&(s=!1);const i=e.getBoundingClientRect(),r=Ts(e);let o=it(1);t&&(n?Q(n)&&(o=Tt(n)):o=Tt(e));const a=qa(r,s,n)?ki(r):it(0);let l=(i.left+a.x)/o.x,c=(i.top+a.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(r){const h=q(r),f=n&&Q(n)?q(n):n;let p=h,m=fs(p);for(;m&&n&&f!==p;){const g=Tt(m),y=m.getBoundingClientRect(),_=Z(m),b=y.left+(m.clientLeft+parseFloat(_.paddingLeft))*g.x,w=y.top+(m.clientTop+parseFloat(_.paddingTop))*g.y;l*=g.x,c*=g.y,u*=g.x,d*=g.y,l+=b,c+=w,p=q(m),m=fs(p)}}return Pe({width:u,height:d,x:l,y:c})}function Ie(e,t){const s=Fe(e).scrollLeft;return t?t.left+s:wt(at(e)).left+s}function zi(e,t){const s=e.getBoundingClientRect(),n=s.left+t.scrollLeft-Ie(e,s),i=s.top+t.scrollTop;return{x:n,y:i}}function Ya(e){let{elements:t,rect:s,offsetParent:n,strategy:i}=e;const r=i==="fixed",o=at(n),a=t?Me(t.floating):!1;if(n===o||a&&r)return s;let l={scrollLeft:0,scrollTop:0},c=it(1);const u=it(0),d=rt(n);if((d||!d&&!r)&&((kt(n)!=="body"||te(o))&&(l=Fe(n)),rt(n))){const f=wt(n);c=Tt(n),u.x=f.x+n.clientLeft,u.y=f.y+n.clientTop}const h=o&&!d&&!r?zi(o,l):it(0);return{width:s.width*c.x,height:s.height*c.y,x:s.x*c.x-l.scrollLeft*c.x+u.x+h.x,y:s.y*c.y-l.scrollTop*c.y+u.y+h.y}}function Ja(e){return Array.from(e.getClientRects())}function Ga(e){const t=at(e),s=Fe(e),n=e.ownerDocument.body,i=W(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),r=W(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let o=-s.scrollLeft+Ie(e);const a=-s.scrollTop;return Z(n).direction==="rtl"&&(o+=W(t.clientWidth,n.clientWidth)-i),{width:i,height:r,x:o,y:a}}const cn=25;function Xa(e,t){const s=q(e),n=at(e),i=s.visualViewport;let r=n.clientWidth,o=n.clientHeight,a=0,l=0;if(i){r=i.width,o=i.height;const u=Os();(!u||u&&t==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}const c=Ie(n);if(c<=0){const u=n.ownerDocument,d=u.body,h=getComputedStyle(d),f=u.compatMode==="CSS1Compat"&&parseFloat(h.marginLeft)+parseFloat(h.marginRight)||0,p=Math.abs(n.clientWidth-d.clientWidth-f);p<=cn&&(r-=p)}else c<=cn&&(r+=c);return{width:r,height:o,x:a,y:l}}const Qa=new Set(["absolute","fixed"]);function Za(e,t){const s=wt(e,!0,t==="fixed"),n=s.top+e.clientTop,i=s.left+e.clientLeft,r=rt(e)?Tt(e):it(1),o=e.clientWidth*r.x,a=e.clientHeight*r.y,l=i*r.x,c=n*r.y;return{width:o,height:a,x:l,y:c}}function un(e,t,s){let n;if(t==="viewport")n=Xa(e,s);else if(t==="document")n=Ga(at(e));else if(Q(t))n=Za(t,s);else{const i=ki(e);n={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return Pe(n)}function Ni(e,t){const s=dt(e);return s===t||!Q(s)||$t(s)?!1:Z(s).position==="fixed"||Ni(s,t)}function tl(e,t){const s=t.get(e);if(s)return s;let n=Xt(e,[],!1).filter(a=>Q(a)&&kt(a)!=="body"),i=null;const r=Z(e).position==="fixed";let o=r?dt(e):e;for(;Q(o)&&!$t(o);){const a=Z(o),l=Es(o);!l&&a.position==="fixed"&&(i=null),(r?!l&&!i:!l&&a.position==="static"&&!!i&&Qa.has(i.position)||te(o)&&!l&&Ni(e,o))?n=n.filter(u=>u!==o):i=a,o=dt(o)}return t.set(e,n),n}function el(e){let{element:t,boundary:s,rootBoundary:n,strategy:i}=e;const o=[...s==="clippingAncestors"?Me(t)?[]:tl(t,this._c):[].concat(s),n],a=o[0],l=o.reduce((c,u)=>{const d=un(t,u,i);return c.top=W(d.top,c.top),c.right=Lt(d.right,c.right),c.bottom=Lt(d.bottom,c.bottom),c.left=W(d.left,c.left),c},un(t,a,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function sl(e){const{width:t,height:s}=Ri(e);return{width:t,height:s}}function nl(e,t,s){const n=rt(t),i=at(t),r=s==="fixed",o=wt(e,!0,r,t);let a={scrollLeft:0,scrollTop:0};const l=it(0);function c(){l.x=Ie(i)}if(n||!n&&!r)if((kt(t)!=="body"||te(i))&&(a=Fe(t)),n){const f=wt(t,!0,r,t);l.x=f.x+t.clientLeft,l.y=f.y+t.clientTop}else i&&c();r&&!n&&i&&c();const u=i&&!n&&!r?zi(i,a):it(0),d=o.left+a.scrollLeft-l.x-u.x,h=o.top+a.scrollTop-l.y-u.y;return{x:d,y:h,width:o.width,height:o.height}}function Ze(e){return Z(e).position==="static"}function dn(e,t){if(!rt(e)||Z(e).position==="fixed")return null;if(t)return t(e);let s=e.offsetParent;return at(e)===s&&(s=s.ownerDocument.body),s}function Mi(e,t){const s=q(e);if(Me(e))return s;if(!rt(e)){let i=dt(e);for(;i&&!$t(i);){if(Q(i)&&!Ze(i))return i;i=dt(i)}return s}let n=dn(e,t);for(;n&&Da(n)&&Ze(n);)n=dn(n,t);return n&&$t(n)&&Ze(n)&&!Es(n)?s:n||Ua(e)||s}const il=async function(e){const t=this.getOffsetParent||Mi,s=this.getDimensions,n=await s(e.floating);return{reference:nl(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function rl(e){return Z(e).direction==="rtl"}const ol={convertOffsetParentRelativeRectToViewportRelativeRect:Ya,getDocumentElement:at,getClippingRect:el,getOffsetParent:Mi,getElementRects:il,getClientRects:Ja,getDimensions:sl,getScale:Tt,isElement:Q,isRTL:rl};function Fi(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function al(e,t){let s=null,n;const i=at(e);function r(){var a;clearTimeout(n),(a=s)==null||a.disconnect(),s=null}function o(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),r();const c=e.getBoundingClientRect(),{left:u,top:d,width:h,height:f}=c;if(a||t(),!h||!f)return;const p=oe(d),m=oe(i.clientWidth-(u+h)),g=oe(i.clientHeight-(d+f)),y=oe(u),b={rootMargin:-p+"px "+-m+"px "+-g+"px "+-y+"px",threshold:W(0,Lt(1,l))||1};let w=!0;function v(A){const S=A[0].intersectionRatio;if(S!==l){if(!w)return o();S?o(!1,S):n=setTimeout(()=>{o(!1,1e-7)},1e3)}S===1&&!Fi(c,e.getBoundingClientRect())&&o(),w=!1}try{s=new IntersectionObserver(v,{...b,root:i.ownerDocument})}catch{s=new IntersectionObserver(v,b)}s.observe(e)}return o(!0),r}function ll(e,t,s,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,c=Ts(e),u=i||r?[...c?Xt(c):[],...Xt(t)]:[];u.forEach(y=>{i&&y.addEventListener("scroll",s,{passive:!0}),r&&y.addEventListener("resize",s)});const d=c&&a?al(c,s):null;let h=-1,f=null;o&&(f=new ResizeObserver(y=>{let[_]=y;_&&_.target===c&&f&&(f.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var b;(b=f)==null||b.observe(t)})),s()}),c&&!l&&f.observe(c),f.observe(t));let p,m=l?wt(e):null;l&&g();function g(){const y=wt(e);m&&!Fi(m,y)&&s(),m=y,p=requestAnimationFrame(g)}return s(),()=>{var y;u.forEach(_=>{i&&_.removeEventListener("scroll",s),r&&_.removeEventListener("resize",s)}),d?.(),(y=f)==null||y.disconnect(),f=null,l&&cancelAnimationFrame(p)}}const cl=Na,ul=za,dl=Ma,hl=(e,t,s)=>{const n=new Map,i={platform:ol,...s},r={...i.platform,_c:n};return ka(e,t,{...i,platform:r})},Ii=[ul({fallbackAxisSideDirection:"start",crossAxis:!1}),cl()],Di=({placement:e="bottom-start",strategy:t,middleware:s=Ii}={})=>{const[n,i]=nt(),[r,o]=nt(),[a,l]=nt();return T(()=>{if(!n||!(r instanceof HTMLElement)){l(void 0);return}return ll(n,r,()=>hl(n,r,{placement:e,strategy:t,middleware:s}).then(l))},[n,r,e,t,s]),{setReference:i,setFloating:o,styles:R(()=>a?{left:`${a.x}px`,top:`${a.y}px`}:{},[a?.x,a?.y])}},fl=e=>e.preventDefault(),pl=X`
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
`,ml=e=>{const{placement:t,strategy:s,middleware:n,render:i}=e,{active:r,onToggle:o}=pa(e),{styles:a,setReference:l,setFloating:c}=Di({placement:t,strategy:s,middleware:n});return P` <div class="anchor" part="anchor" ${_t(l)}>
			<button
				@mousedown=${fl}
				@click=${o}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		${J(r,()=>P`<cosmoz-dropdown-content
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					style="${Ci(a)}"
					@connected=${u=>u.target.showPopover?.()}
					${_t(c)}
					><slot></slot>${Pi([i],()=>i?.()||ct)}</cosmoz-dropdown-content
				> `)}`};customElements.define("cosmoz-dropdown",V(ml,{styleSheets:[pl]}));function gl(e){return e.boundingClientRect.height===0}function yl(e){return e.getBoundingClientRect().height===0}const _l=e=>{if(e.element.tagName!=="SLOT")throw new Error("Overflow directive must be used on a slot element")};function bl(e,t){e.forEach(s=>{yl(s)||(t.add(s),e.delete(s))})}const wl=(e,t)=>{let s=new Set,n=new Set,i=new Set;const r=new IntersectionObserver(a=>{a.forEach(l=>{const c=l.target;l.boundingClientRect.width===l.intersectionRect.width&&l.intersectionRect.height!==0?(s.add(c),n.delete(c),i.delete(c)):gl(l)?(s.delete(c),n.delete(c),i.add(c)):(s.delete(c),n.add(c),i.delete(c))}),bl(i,n),t({visible:s,overflowing:n,hidden:i})},{root:e.parentElement,threshold:[0,.5,1]}),o=()=>{const a=Array.from(e.assignedElements({flatten:!0})),l=new Set,c=new Set,u=new Set;for(const d of a)s.has(d)?l.add(d):n.has(d)?c.add(d):i.has(d)?u.add(d):r.observe(d);s=l,n=c,i=u,t({visible:s,overflowing:n,hidden:i})};return o(),e.addEventListener("slotchange",o),()=>{e.removeEventListener("slotchange",o),r.disconnect()}};class vl extends Re{observer;slot;cleanup;render(){return j}update(t,[s]){return _l(t),this.slot!==t.element&&(this.cleanup&&(this.cleanup(),this.cleanup=void 0),this.slot=t.element,this.cleanup=wl(this.slot,s)),j}}const xl=ot(vl),Sl=X`
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
`,Cl=Symbol("openMenu"),Pl=e=>{const t=e.shadowRoot?.querySelector("#dropdown");if(!t||t.hasAttribute("hidden"))return;t.shadowRoot?.querySelector("cosmoz-dropdown")?.shadowRoot?.querySelector("#dropdownButton")?.click()},El=e=>{const[t,s]=nt({visible:new Set,overflowing:new Set});T(()=>{e.dispatchEvent(new CustomEvent("reflow",{detail:t}))},[t]);const n=R(()=>[...t.visible,...t.overflowing],[t]),i=R(()=>n.map(l=>({element:l,priority:Number(l.dataset.priority??0),text:l.textContent?.trim()||""})).toSorted((l,c)=>c.priority-l.priority),[n]),{maxToolbarItems:r=1}=e,o=Math.min(r,t.visible.size);T(()=>{i.forEach(({element:l,priority:c},u)=>{const d=u<o;l.dataset.visibility=d?"visible":"hidden",l.style.order=String(-c)})},[i,o]);const a=R(()=>i.slice(o).sort((l,c)=>c.element.compareDocumentPosition(l.element)-l.element.compareDocumentPosition(c.element)),[i,o]);return T(()=>{e.toggleAttribute("has-menu-items",a.length>0)},[a.length]),{setButtonStates:s,menuButtons:a}},Ol=e=>{const{active:t=!1}=e;fa({activity:Cl,callback:()=>Pl(e),check:()=>t&&!e.hasAttribute("hide-actions"),element:()=>e.shadowRoot?.querySelector("#dropdown")},[t]);const{setButtonStates:s,menuButtons:n}=El(e),i=R(()=>bi("height"),[]);return ds(()=>{i(e,t)},[t]),P` <div id="bar" part="bar">
		<div id="info" part="info"><slot name="info"></slot></div>
		<div id="buttonContainer" part="buttons">
			<slot id="bottomBarToolbar" ${xl(s)}></slot>
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
			${fr(n,r=>P`
					<button @click=${()=>r.element.click()}>
						${r.text}
					</button>
				`)}
		</cosmoz-dropdown-menu>
		<slot name="extra" id="extraSlot"></slot>
	</div>`};customElements.define("cosmoz-bottom-bar",V(Ol,{observedAttributes:["active","max-toolbar-items"],styleSheets:[Sl]}));const Ee=`
	<slot name="extra" slot="extra"></slot>
`;P(Object.assign([Ee],{raw:[Ee]}));jo(Object.assign([Ee],{raw:[Ee]}));/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const De=ot(class extends Ct{constructor(e){if(super(e),e.type!==G.PROPERTY&&e.type!==G.ATTRIBUTE&&e.type!==G.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Hn(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===j||t===ct)return t;const s=e.element,n=e.name;if(e.type===G.PROPERTY){if(t===s[n])return j}else if(e.type===G.BOOLEAN_ATTRIBUTE){if(!!t===s.hasAttribute(n))return j}else if(e.type===G.ATTRIBUTE&&s.getAttribute(n)===t+"")return j;return Un(e),t}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=e=>e??ct,Bi=ft(class extends ht{values;constructor(e,t,s,n){super(e,t),Object.assign(t.host,s),this.values=n}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((t,s)=>this.values[s]!==t)}}),ee=ft(class extends ht{update(){return this.state.host}}),Tl=/([A-Z])/gu,Qt=(e,t,s)=>{e[t]=s,e.dispatchEvent(new CustomEvent(t.replace(Tl,"-$1").toLowerCase()+"-changed",{detail:{value:s}}))},Gu=(e,t,s=[t])=>{const n=ee();T(()=>{Qt(n,e,t)},s)},ji=e=>{const t=yi(void 0),s=$(c=>t.current=c,[]),n=e.shadowRoot,i=$(c=>e.dispatchEvent(new Event(c.type,{bubbles:c.bubbles})),[]),r=$(c=>Qt(e,"value",c.target.value),[]),o=$(c=>Qt(e,"focused",c.type==="focus"),[]),a=$(()=>t.current?.focus(),[]),l=$(()=>{const c=t.current?.checkValidity();return e.toggleAttribute("invalid",!c),c},[]);return Bi({focus:a,validate:l},[a,l]),T(()=>{const c=u=>{u.defaultPrevented||e.disabled||u.target.matches("input, textarea, label")||(u.preventDefault(),e.matches(":focus-within")||a())};return n.addEventListener("mousedown",c),()=>n.removeEventListener("mousedown",c)},[a]),{onChange:i,onFocus:o,onInput:r,onRef:s}},Al=e=>R(()=>{if(e==null)return;const t=new RegExp(e,"u");return s=>{!s.defaultPrevented&&s.data&&!t.test(s.data)&&s.preventDefault()}},[e]),Vi=(e,{label:t,invalid:s,errorMessage:n})=>P`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
				${J(t,()=>P`<label for="input" part="label">${t}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${J(s&&n,()=>P`<div class="error" part="error">${n}</div>`)}
	`,Hi=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],Ll=({placeholder:e,noLabelFloat:t,label:s})=>(t?s:void 0)||e||" ",$l=Math.abs,Rl=(...e)=>e.some(t=>!!t),kl=(...e)=>e.join(""),zl=(e,t,s)=>e?t:s,Nl=(e,t)=>t.indexOf(e)>-1,Ml=(e,t)=>e===t,Fl=e=>!!(e==null||Array.isArray(e)&&e.length===0||typeof e=="string"&&e.length===0||typeof e=="number"&&e===0),Il=(e,t)=>typeof e!="number"?"":e.toFixed(t),Xu=Object.freeze(Object.defineProperty({__proto__:null,abs:$l,anyTrue:Rl,concat:kl,ifElse:zl,inArray:Nl,isEmpty:Fl,isEqual:Ml,toFixed:Il},Symbol.toStringTag,{value:"Module"})),Dl={isoBasic:/^\d{4}-\d{2}-\d{2}$/iu},Bl=e=>typeof e=="string"&&Dl.isoBasic.test(e)?new Date(`${e}T00:00`):new Date(e),Qu=e=>{if(e==null)return;if(e instanceof Date&&!isNaN(e.getTime()))return e;if(!(typeof e=="number"||typeof e=="string"))return;const t=Bl(e);if(!(t instanceof Date&&isNaN(t.getTime())))return t},Ft=e=>e<10?"0"+e:e,Zu=e=>e instanceof Date?e.getFullYear()+"-"+Ft(e.getMonth()+1)+"-"+Ft(e.getDate())+"T"+Ft(e.getHours())+":"+Ft(e.getMinutes())+":"+Ft(e.getSeconds())+"."+(e.getMilliseconds()/1e3).toFixed(3).slice(2,5):null,As=(e,...t)=>e.flatMap((s,n)=>[s,t[n]??""]).join(""),Ls=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},td=(e,t)=>{const s=class extends t{};return Object.assign(s.prototype,e),s},Ui=As`
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
		user-select: none;
	}

	.wrap:has(#input:not(:placeholder-shown)) {
		slot[name='suffix']::slotted(*),
		slot[name='prefix']::slotted(*) {
			transform: translateY(var(--label-translate-y));
		}
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

	:host([always-float-label]) {
		slot[name='suffix']::slotted(*),
		slot[name='prefix']::slotted(*) {
			transform: translateY(var(--label-translate-y));
		}
	}

	:host(:not(always-float-label):focus-within) #input::placeholder,
	:host(:focus-within) label {
		color: var(--focused-color);
		opacity: 1;
	}

	:host([no-label-float]) {
		.float,
		label {
			display: none;
		}

		#input:not(:placeholder-shown) {
			transform: translateY(0%);
		}

		.wrap:has(#input:not(:placeholder-shown)) slot[name='suffix']::slotted(*),
		.wrap:has(#input:not(:placeholder-shown)) slot[name='prefix']::slotted(*) {
			transform: translateY(0%);
		}
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
`,jl=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...Hi],Vl=e=>{const{type:t="text",pattern:s,allowedPattern:n,autocomplete:i,value:r,readonly:o,disabled:a,min:l,max:c,step:u,maxlength:d}=e,{onChange:h,onFocus:f,onInput:p,onRef:m}=ji(e),g=Al(n);return Vi(P`
			<input
				${_t(m)}
				style="--chars: ${r?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${B(s)}
				autocomplete=${B(i)}
				placeholder=${Ll(e)}
				?readonly=${o}
				?aria-disabled=${a}
				?disabled=${a}
				.value=${De(r??"")}
				maxlength=${B(d)}
				@beforeinput=${g}
				@input=${p}
				@change=${h}
				@focus=${f}
				@blur=${f}
				min=${B(l)}
				max=${B(c)}
				step=${B(u)}
			/>
		`,e)};customElements.define("cosmoz-input",V(Vl,{observedAttributes:jl,styleSheets:[Cs(Ui)]}));const hn=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},Hl=(e,t=0)=>{if(t>0){const s=e.getAttribute("rows")??"",n=e.style.height;e.style.height="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=n,e.setAttribute("rows",s)}},Ul=e=>{const{value:t,maxRows:s}=e,n=R(()=>()=>e.shadowRoot.querySelector("#input"),[]);T(()=>Hl(n(),s),[s,n]),T(()=>hn(n()),[n,t]),T(()=>{const i=n(),r=new ResizeObserver(()=>requestAnimationFrame(()=>hn(i)));return r.observe(i),()=>r.unobserve(i)},[n])},Kl=["rows","placeholder",...Hi],Wl=e=>{const{autocomplete:t,value:s,placeholder:n,readonly:i,disabled:r,rows:o,cols:a,maxlength:l}=e,{onChange:c,onFocus:u,onInput:d,onRef:h}=ji(e);return Ul(e),Vi(P`
			<textarea id="input" part="input"
				${_t(h)}
				autocomplete=${B(t)}
				placeholder=${n||" "}
				rows=${o??1} cols=${B(a)}
				?readonly=${i} ?aria-disabled=${r} ?disabled=${r}
				.value=${De(s??"")} maxlength=${B(l)} @input=${d}
				@change=${c} @focus=${u} @blur=${u}>`,e)};customElements.define("cosmoz-textarea",V(Wl,{observedAttributes:Kl,styleSheets:[Cs(Ui)]}));const ql=e=>{const{label:t,value:s,disabled:n,error:i}=e,r=$(o=>e.dispatchEvent(new CustomEvent("change",{detail:o.target.checked})),[]);return P`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${De(!!s)}
			?disabled=${n}
			@change=${r}
		/>
		${J(t,()=>P`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${J(i,o=>P`<div class="failure">${o}</div>`)} `},Yl=X`
	.toggle {
		appearance: none;
		width: 35px;
		height: 18px;
		display: inline-block;
		position: relative;
		border-radius: 18px;
		overflow: hidden;
		outline: none;
		border: none;
		cursor: pointer;
		background: var(--cz-toggle-color, #101010);
		transition: background-color ease 0.25s;
		margin: 0;
	}
	.toggle::before {
		content: '';
		display: block;
		position: absolute;
		z-index: 2;
		width: 14px;
		height: 14px;
		background: var(--cz-toggle-thumb-color, #15b0d3);
		left: 2px;
		top: 2px;
		border-radius: 50%;
		transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.25s;
	}
	.toggle:checked {
		background: var(--cz-toggle-checked-color, #66d7f0);
	}
	.toggle:checked::before {
		left: 19px;
	}
	.toggle + label {
		padding-left: 16px;
		font-size: 14px;
		line-height: 18px;
		cursor: pointer;
		user-select: none;
	}
	.toggle[disabled] {
		opacity: 0.6;
	}
`,Jl=X`
	:host {
		display: block;
	}

	:host > * {
		vertical-align: middle;
		line-height: 0px;
	}

	::slotted(*) {
		margin-left: 5px;
	}
`;customElements.define("cosmoz-toggle",V(ql,{styleSheets:[Jl,Yl],observedAttributes:["disabled"]}));const Wt=Symbol("memo"),ed=e=>{let t=Wt,s=Wt,n;return function(i,r){if(t===i&&s===r)return n;const o=e(i,r);return n=o,t=i,s=r,o}},sd=e=>{let t=Wt,s=Wt,n=Wt,i;return function(r,o,a){if(t===r&&s===o&&n===a)return i;const l=e(r,o,a);return i=l,t=r,s=o,n=a,l}},x=e=>typeof e=="string",It=()=>{let e,t;const s=new Promise((n,i)=>{e=n,t=i});return s.resolve=e,s.reject=t,s},fn=e=>e==null?"":""+e,Gl=(e,t,s)=>{e.forEach(n=>{t[n]&&(s[n]=t[n])})},Xl=/###/g,pn=e=>e&&e.indexOf("###")>-1?e.replace(Xl,"."):e,mn=e=>!e||x(e),qt=(e,t,s)=>{const n=x(t)?t.split("."):t;let i=0;for(;i<n.length-1;){if(mn(e))return{};const r=pn(n[i]);!e[r]&&s&&(e[r]=new s),Object.prototype.hasOwnProperty.call(e,r)?e=e[r]:e={},++i}return mn(e)?{}:{obj:e,k:pn(n[i])}},gn=(e,t,s)=>{const{obj:n,k:i}=qt(e,t,Object);if(n!==void 0||t.length===1){n[i]=s;return}let r=t[t.length-1],o=t.slice(0,t.length-1),a=qt(e,o,Object);for(;a.obj===void 0&&o.length;)r=`${o[o.length-1]}.${r}`,o=o.slice(0,o.length-1),a=qt(e,o,Object),a&&a.obj&&typeof a.obj[`${a.k}.${r}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${r}`]=s},Ql=(e,t,s,n)=>{const{obj:i,k:r}=qt(e,t,Object);i[r]=i[r]||[],i[r].push(s)},Oe=(e,t)=>{const{obj:s,k:n}=qt(e,t);if(s)return s[n]},Zl=(e,t,s)=>{const n=Oe(e,s);return n!==void 0?n:Oe(t,s)},Ki=(e,t,s)=>{for(const n in t)n!=="__proto__"&&n!=="constructor"&&(n in e?x(e[n])||e[n]instanceof String||x(t[n])||t[n]instanceof String?s&&(e[n]=t[n]):Ki(e[n],t[n],s):e[n]=t[n]);return e},Pt=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var tc={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const ec=e=>x(e)?e.replace(/[&<>"'\/]/g,t=>tc[t]):e;class sc{constructor(t){this.capacity=t,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(t){const s=this.regExpMap.get(t);if(s!==void 0)return s;const n=new RegExp(t);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(t,n),this.regExpQueue.push(t),n}}const nc=[" ",",","?","!",";"],ic=new sc(20),rc=(e,t,s)=>{t=t||"",s=s||"";const n=nc.filter(o=>t.indexOf(o)<0&&s.indexOf(o)<0);if(n.length===0)return!0;const i=ic.getRegExp(`(${n.map(o=>o==="?"?"\\?":o).join("|")})`);let r=!i.test(e);if(!r){const o=e.indexOf(s);o>0&&!i.test(e.substring(0,o))&&(r=!0)}return r},ps=function(e,t){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!e)return;if(e[t])return e[t];const n=t.split(s);let i=e;for(let r=0;r<n.length;){if(!i||typeof i!="object")return;let o,a="";for(let l=r;l<n.length;++l)if(l!==r&&(a+=s),a+=n[l],o=i[a],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&l<n.length-1)continue;r+=l-r+1;break}i=o}return i},Te=e=>e&&e.replace("_","-"),oc={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console&&console[e]&&console[e].apply(console,t)}};class Ae{constructor(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,s)}init(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=s.prefix||"i18next:",this.logger=t||oc,this.options=s,this.debug=s.debug}log(){for(var t=arguments.length,s=new Array(t),n=0;n<t;n++)s[n]=arguments[n];return this.forward(s,"log","",!0)}warn(){for(var t=arguments.length,s=new Array(t),n=0;n<t;n++)s[n]=arguments[n];return this.forward(s,"warn","",!0)}error(){for(var t=arguments.length,s=new Array(t),n=0;n<t;n++)s[n]=arguments[n];return this.forward(s,"error","")}deprecate(){for(var t=arguments.length,s=new Array(t),n=0;n<t;n++)s[n]=arguments[n];return this.forward(s,"warn","WARNING DEPRECATED: ",!0)}forward(t,s,n,i){return i&&!this.debug?null:(x(t[0])&&(t[0]=`${n}${this.prefix} ${t[0]}`),this.logger[s](t))}create(t){return new Ae(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new Ae(this.logger,t)}}var st=new Ae;class Be{constructor(){this.observers={}}on(t,s){return t.split(" ").forEach(n=>{this.observers[n]||(this.observers[n]=new Map);const i=this.observers[n].get(s)||0;this.observers[n].set(s,i+1)}),this}off(t,s){if(this.observers[t]){if(!s){delete this.observers[t];return}this.observers[t].delete(s)}}emit(t){for(var s=arguments.length,n=new Array(s>1?s-1:0),i=1;i<s;i++)n[i-1]=arguments[i];this.observers[t]&&Array.from(this.observers[t].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a(...n)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a.apply(a,[t,...n])})}}class yn extends Be{constructor(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=s,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const s=this.options.ns.indexOf(t);s>-1&&this.options.ns.splice(s,1)}getResource(t,s,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,o=i.ignoreJSONStructure!==void 0?i.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;t.indexOf(".")>-1?a=t.split("."):(a=[t,s],n&&(Array.isArray(n)?a.push(...n):x(n)&&r?a.push(...n.split(r)):a.push(n)));const l=Oe(this.data,a);return!l&&!s&&!n&&t.indexOf(".")>-1&&(t=a[0],s=a[1],n=a.slice(2).join(".")),l||!o||!x(n)?l:ps(this.data&&this.data[t]&&this.data[t][s],n,r)}addResource(t,s,n,i){let r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let a=[t,s];n&&(a=a.concat(o?n.split(o):n)),t.indexOf(".")>-1&&(a=t.split("."),i=s,s=a[1]),this.addNamespaces(s),gn(this.data,a,i),r.silent||this.emit("added",t,s,n,i)}addResources(t,s,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const r in n)(x(n[r])||Array.isArray(n[r]))&&this.addResource(t,s,r,n[r],{silent:!0});i.silent||this.emit("added",t,s,n)}addResourceBundle(t,s,n,i,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},a=[t,s];t.indexOf(".")>-1&&(a=t.split("."),i=n,n=s,s=a[1]),this.addNamespaces(s);let l=Oe(this.data,a)||{};o.skipCopy||(n=JSON.parse(JSON.stringify(n))),i?Ki(l,n,r):l={...l,...n},gn(this.data,a,l),o.silent||this.emit("added",t,s,n)}removeResourceBundle(t,s){this.hasResourceBundle(t,s)&&delete this.data[t][s],this.removeNamespaces(s),this.emit("removed",t,s)}hasResourceBundle(t,s){return this.getResource(t,s)!==void 0}getResourceBundle(t,s){return s||(s=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(t,s)}:this.getResource(t,s)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const s=this.getDataByLanguage(t);return!!(s&&Object.keys(s)||[]).find(i=>s[i]&&Object.keys(s[i]).length>0)}toJSON(){return this.data}}var Wi={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,s,n,i){return e.forEach(r=>{this.processors[r]&&(t=this.processors[r].process(t,s,n,i))}),t}};const _n={};class Le extends Be{constructor(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Gl(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=s,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=st.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const n=this.resolve(t,s);return n&&n.res!==void 0}extractFromKey(t,s){let n=s.nsSeparator!==void 0?s.nsSeparator:this.options.nsSeparator;n===void 0&&(n=":");const i=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator;let r=s.ns||this.options.defaultNS||[];const o=n&&t.indexOf(n)>-1,a=!this.options.userDefinedKeySeparator&&!s.keySeparator&&!this.options.userDefinedNsSeparator&&!s.nsSeparator&&!rc(t,n,i);if(o&&!a){const l=t.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:t,namespaces:x(r)?[r]:r};const c=t.split(n);(n!==i||n===i&&this.options.ns.indexOf(c[0])>-1)&&(r=c.shift()),t=c.join(i)}return{key:t,namespaces:x(r)?[r]:r}}translate(t,s,n){if(typeof s!="object"&&this.options.overloadTranslationOptionHandler&&(s=this.options.overloadTranslationOptionHandler(arguments)),typeof s=="object"&&(s={...s}),s||(s={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const i=s.returnDetails!==void 0?s.returnDetails:this.options.returnDetails,r=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,{key:o,namespaces:a}=this.extractFromKey(t[t.length-1],s),l=a[a.length-1],c=s.lng||this.language,u=s.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&c.toLowerCase()==="cimode"){if(u){const w=s.nsSeparator||this.options.nsSeparator;return i?{res:`${l}${w}${o}`,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(s)}:`${l}${w}${o}`}return i?{res:o,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(s)}:o}const d=this.resolve(t,s);let h=d&&d.res;const f=d&&d.usedKey||o,p=d&&d.exactUsedKey||o,m=Object.prototype.toString.apply(h),g=["[object Number]","[object Function]","[object RegExp]"],y=s.joinArrays!==void 0?s.joinArrays:this.options.joinArrays,_=!this.i18nFormat||this.i18nFormat.handleAsObject,b=!x(h)&&typeof h!="boolean"&&typeof h!="number";if(_&&h&&b&&g.indexOf(m)<0&&!(x(y)&&Array.isArray(h))){if(!s.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const w=this.options.returnedObjectHandler?this.options.returnedObjectHandler(f,h,{...s,ns:a}):`key '${o} (${this.language})' returned an object instead of string.`;return i?(d.res=w,d.usedParams=this.getUsedParamsDetails(s),d):w}if(r){const w=Array.isArray(h),v=w?[]:{},A=w?p:f;for(const S in h)if(Object.prototype.hasOwnProperty.call(h,S)){const N=`${A}${r}${S}`;v[S]=this.translate(N,{...s,joinArrays:!1,ns:a}),v[S]===N&&(v[S]=h[S])}h=v}}else if(_&&x(y)&&Array.isArray(h))h=h.join(y),h&&(h=this.extendTranslation(h,t,s,n));else{let w=!1,v=!1;const A=s.count!==void 0&&!x(s.count),S=Le.hasDefaultValue(s),N=A?this.pluralResolver.getSuffix(c,s.count,s):"",z=s.ordinal&&A?this.pluralResolver.getSuffix(c,s.count,{ordinal:!1}):"",F=A&&!s.ordinal&&s.count===0&&this.pluralResolver.shouldUseIntlApi(),I=F&&s[`defaultValue${this.options.pluralSeparator}zero`]||s[`defaultValue${N}`]||s[`defaultValue${z}`]||s.defaultValue;!this.isValidLookup(h)&&S&&(w=!0,h=I),this.isValidLookup(h)||(v=!0,h=o);const H=(s.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&v?void 0:h,k=S&&I!==h&&this.options.updateMissing;if(v||w||k){if(this.logger.log(k?"updateKey":"missingKey",c,l,o,k?I:h),r){const O=this.resolve(o,{...s,keySeparator:!1});O&&O.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let D=[];const Y=this.languageUtils.getFallbackCodes(this.options.fallbackLng,s.lng||this.language);if(this.options.saveMissingTo==="fallback"&&Y&&Y[0])for(let O=0;O<Y.length;O++)D.push(Y[O]);else this.options.saveMissingTo==="all"?D=this.languageUtils.toResolveHierarchy(s.lng||this.language):D.push(s.lng||this.language);const L=(O,M,lt)=>{const se=S&&lt!==h?lt:H;this.options.missingKeyHandler?this.options.missingKeyHandler(O,l,M,se,k,s):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(O,l,M,se,k,s),this.emit("missingKey",O,l,M,h)};this.options.saveMissing&&(this.options.saveMissingPlurals&&A?D.forEach(O=>{const M=this.pluralResolver.getSuffixes(O,s);F&&s[`defaultValue${this.options.pluralSeparator}zero`]&&M.indexOf(`${this.options.pluralSeparator}zero`)<0&&M.push(`${this.options.pluralSeparator}zero`),M.forEach(lt=>{L([O],o+lt,s[`defaultValue${lt}`]||I)})}):L(D,o,I))}h=this.extendTranslation(h,t,s,d,n),v&&h===o&&this.options.appendNamespaceToMissingKey&&(h=`${l}:${o}`),(v||w)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?h=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${o}`:o,w?h:void 0):h=this.options.parseMissingKeyHandler(h))}return i?(d.res=h,d.usedParams=this.getUsedParamsDetails(s),d):h}extendTranslation(t,s,n,i,r){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});const c=x(t)&&(n&&n.interpolation&&n.interpolation.skipOnVariables!==void 0?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let u;if(c){const h=t.match(this.interpolator.nestingRegexp);u=h&&h.length}let d=n.replace&&!x(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(d={...this.options.interpolation.defaultVariables,...d}),t=this.interpolator.interpolate(t,d,n.lng||this.language||i.usedLng,n),c){const h=t.match(this.interpolator.nestingRegexp),f=h&&h.length;u<f&&(n.nest=!1)}!n.lng&&this.options.compatibilityAPI!=="v1"&&i&&i.res&&(n.lng=this.language||i.usedLng),n.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var h=arguments.length,f=new Array(h),p=0;p<h;p++)f[p]=arguments[p];return r&&r[0]===f[0]&&!n.context?(o.logger.warn(`It seems you are nesting recursively key: ${f[0]} in key: ${s[0]}`),null):o.translate(...f,s)},n)),n.interpolation&&this.interpolator.reset()}const a=n.postProcess||this.options.postProcess,l=x(a)?[a]:a;return t!=null&&l&&l.length&&n.applyPostProcessor!==!1&&(t=Wi.handle(l,t,s,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...i,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),t}resolve(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n,i,r,o,a;return x(t)&&(t=[t]),t.forEach(l=>{if(this.isValidLookup(n))return;const c=this.extractFromKey(l,s),u=c.key;i=u;let d=c.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const h=s.count!==void 0&&!x(s.count),f=h&&!s.ordinal&&s.count===0&&this.pluralResolver.shouldUseIntlApi(),p=s.context!==void 0&&(x(s.context)||typeof s.context=="number")&&s.context!=="",m=s.lngs?s.lngs:this.languageUtils.toResolveHierarchy(s.lng||this.language,s.fallbackLng);d.forEach(g=>{this.isValidLookup(n)||(a=g,!_n[`${m[0]}-${g}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&(_n[`${m[0]}-${g}`]=!0,this.logger.warn(`key "${i}" for languages "${m.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),m.forEach(y=>{if(this.isValidLookup(n))return;o=y;const _=[u];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(_,u,y,g,s);else{let w;h&&(w=this.pluralResolver.getSuffix(y,s.count,s));const v=`${this.options.pluralSeparator}zero`,A=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(h&&(_.push(u+w),s.ordinal&&w.indexOf(A)===0&&_.push(u+w.replace(A,this.options.pluralSeparator)),f&&_.push(u+v)),p){const S=`${u}${this.options.contextSeparator}${s.context}`;_.push(S),h&&(_.push(S+w),s.ordinal&&w.indexOf(A)===0&&_.push(S+w.replace(A,this.options.pluralSeparator)),f&&_.push(S+v))}}let b;for(;b=_.pop();)this.isValidLookup(n)||(r=b,n=this.getResource(y,g,b,s))}))})}),{res:n,usedKey:i,exactUsedKey:r,usedLng:o,usedNS:a}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,s,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(t,s,n,i):this.resourceStore.getResource(t,s,n,i)}getUsedParamsDetails(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const s=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],n=t.replace&&!x(t.replace);let i=n?t.replace:t;if(n&&typeof t.count<"u"&&(i.count=t.count),this.options.interpolation.defaultVariables&&(i={...this.options.interpolation.defaultVariables,...i}),!n){i={...i};for(const r of s)delete i[r]}return i}static hasDefaultValue(t){const s="defaultValue";for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&s===n.substring(0,s.length)&&t[n]!==void 0)return!0;return!1}}const ts=e=>e.charAt(0).toUpperCase()+e.slice(1);class bn{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=st.create("languageUtils")}getScriptPartFromCode(t){if(t=Te(t),!t||t.indexOf("-")<0)return null;const s=t.split("-");return s.length===2||(s.pop(),s[s.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(s.join("-"))}getLanguagePartFromCode(t){if(t=Te(t),!t||t.indexOf("-")<0)return t;const s=t.split("-");return this.formatLanguageCode(s[0])}formatLanguageCode(t){if(x(t)&&t.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let i=Intl.getCanonicalLocales(t)[0];if(i&&this.options.lowerCaseLng&&(i=i.toLowerCase()),i)return i}catch{}const s=["hans","hant","latn","cyrl","cans","mong","arab"];let n=t.split("-");return this.options.lowerCaseLng?n=n.map(i=>i.toLowerCase()):n.length===2?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),s.indexOf(n[1].toLowerCase())>-1&&(n[1]=ts(n[1].toLowerCase()))):n.length===3&&(n[0]=n[0].toLowerCase(),n[1].length===2&&(n[1]=n[1].toUpperCase()),n[0]!=="sgn"&&n[2].length===2&&(n[2]=n[2].toUpperCase()),s.indexOf(n[1].toLowerCase())>-1&&(n[1]=ts(n[1].toLowerCase())),s.indexOf(n[2].toLowerCase())>-1&&(n[2]=ts(n[2].toLowerCase()))),n.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let s;return t.forEach(n=>{if(s)return;const i=this.formatLanguageCode(n);(!this.options.supportedLngs||this.isSupportedCode(i))&&(s=i)}),!s&&this.options.supportedLngs&&t.forEach(n=>{if(s)return;const i=this.getLanguagePartFromCode(n);if(this.isSupportedCode(i))return s=i;s=this.options.supportedLngs.find(r=>{if(r===i)return r;if(!(r.indexOf("-")<0&&i.indexOf("-")<0)&&(r.indexOf("-")>0&&i.indexOf("-")<0&&r.substring(0,r.indexOf("-"))===i||r.indexOf(i)===0&&i.length>1))return r})}),s||(s=this.getFallbackCodes(this.options.fallbackLng)[0]),s}getFallbackCodes(t,s){if(!t)return[];if(typeof t=="function"&&(t=t(s)),x(t)&&(t=[t]),Array.isArray(t))return t;if(!s)return t.default||[];let n=t[s];return n||(n=t[this.getScriptPartFromCode(s)]),n||(n=t[this.formatLanguageCode(s)]),n||(n=t[this.getLanguagePartFromCode(s)]),n||(n=t.default),n||[]}toResolveHierarchy(t,s){const n=this.getFallbackCodes(s||this.options.fallbackLng||[],t),i=[],r=o=>{o&&(this.isSupportedCode(o)?i.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return x(t)&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&r(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&r(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&r(this.getLanguagePartFromCode(t))):x(t)&&r(this.formatLanguageCode(t)),n.forEach(o=>{i.indexOf(o)<0&&r(this.formatLanguageCode(o))}),i}}let ac=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],lc={1:e=>+(e>1),2:e=>+(e!=1),3:e=>0,4:e=>e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2,5:e=>e==0?0:e==1?1:e==2?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5,6:e=>e==1?0:e>=2&&e<=4?1:2,7:e=>e==1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2,8:e=>e==1?0:e==2?1:e!=8&&e!=11?2:3,9:e=>+(e>=2),10:e=>e==1?0:e==2?1:e<7?2:e<11?3:4,11:e=>e==1||e==11?0:e==2||e==12?1:e>2&&e<20?2:3,12:e=>+(e%10!=1||e%100==11),13:e=>+(e!==0),14:e=>e==1?0:e==2?1:e==3?2:3,15:e=>e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2,16:e=>e%10==1&&e%100!=11?0:e!==0?1:2,17:e=>e==1||e%10==1&&e%100!=11?0:1,18:e=>e==0?0:e==1?1:2,19:e=>e==1?0:e==0||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3,20:e=>e==1?0:e==0||e%100>0&&e%100<20?1:2,21:e=>e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0,22:e=>e==1?0:e==2?1:(e<0||e>10)&&e%10==0?2:3};const cc=["v1","v2","v3"],uc=["v4"],wn={zero:0,one:1,two:2,few:3,many:4,other:5},dc=()=>{const e={};return ac.forEach(t=>{t.lngs.forEach(s=>{e[s]={numbers:t.nr,plurals:lc[t.fc]}})}),e};class hc{constructor(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=s,this.logger=st.create("pluralResolver"),(!this.options.compatibilityJSON||uc.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=dc(),this.pluralRulesCache={}}addRule(t,s){this.rules[t]=s}clearCache(){this.pluralRulesCache={}}getRule(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const n=Te(t==="dev"?"en":t),i=s.ordinal?"ordinal":"cardinal",r=JSON.stringify({cleanedCode:n,type:i});if(r in this.pluralRulesCache)return this.pluralRulesCache[r];let o;try{o=new Intl.PluralRules(n,{type:i})}catch{if(!t.match(/-|_/))return;const l=this.languageUtils.getLanguagePartFromCode(t);o=this.getRule(l,s)}return this.pluralRulesCache[r]=o,o}return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]}needsPlural(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=this.getRule(t,s);return this.shouldUseIntlApi()?n&&n.resolvedOptions().pluralCategories.length>1:n&&n.numbers.length>1}getPluralFormsOfKey(t,s){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,n).map(i=>`${s}${i}`)}getSuffixes(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=this.getRule(t,s);return n?this.shouldUseIntlApi()?n.resolvedOptions().pluralCategories.sort((i,r)=>wn[i]-wn[r]).map(i=>`${this.options.prepend}${s.ordinal?`ordinal${this.options.prepend}`:""}${i}`):n.numbers.map(i=>this.getSuffix(t,i,s)):[]}getSuffix(t,s){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const i=this.getRule(t,n);return i?this.shouldUseIntlApi()?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${i.select(s)}`:this.getSuffixRetroCompatible(i,s):(this.logger.warn(`no plural rule found for: ${t}`),"")}getSuffixRetroCompatible(t,s){const n=t.noAbs?t.plurals(s):t.plurals(Math.abs(s));let i=t.numbers[n];this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1&&(i===2?i="plural":i===1&&(i=""));const r=()=>this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString();return this.options.compatibilityJSON==="v1"?i===1?"":typeof i=="number"?`_plural_${i.toString()}`:r():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1?r():this.options.prepend&&n.toString()?this.options.prepend+n.toString():n.toString()}shouldUseIntlApi(){return!cc.includes(this.options.compatibilityJSON)}}const vn=function(e,t,s){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,r=Zl(e,t,s);return!r&&i&&x(s)&&(r=ps(e,s,n),r===void 0&&(r=ps(t,s,n))),r},es=e=>e.replace(/\$/g,"$$$$");class fc{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=st.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||(s=>s),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const{escape:s,escapeValue:n,useRawValueToEscape:i,prefix:r,prefixEscaped:o,suffix:a,suffixEscaped:l,formatSeparator:c,unescapeSuffix:u,unescapePrefix:d,nestingPrefix:h,nestingPrefixEscaped:f,nestingSuffix:p,nestingSuffixEscaped:m,nestingOptionsSeparator:g,maxReplaces:y,alwaysFormat:_}=t.interpolation;this.escape=s!==void 0?s:ec,this.escapeValue=n!==void 0?n:!0,this.useRawValueToEscape=i!==void 0?i:!1,this.prefix=r?Pt(r):o||"{{",this.suffix=a?Pt(a):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=u?"":d||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=h?Pt(h):f||Pt("$t("),this.nestingSuffix=p?Pt(p):m||Pt(")"),this.nestingOptionsSeparator=g||",",this.maxReplaces=y||1e3,this.alwaysFormat=_!==void 0?_:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=(s,n)=>s&&s.source===n?(s.lastIndex=0,s):new RegExp(n,"g");this.regexp=t(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=t(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=t(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(t,s,n,i){let r,o,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=f=>{if(f.indexOf(this.formatSeparator)<0){const y=vn(s,l,f,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(y,void 0,n,{...i,...s,interpolationkey:f}):y}const p=f.split(this.formatSeparator),m=p.shift().trim(),g=p.join(this.formatSeparator).trim();return this.format(vn(s,l,m,this.options.keySeparator,this.options.ignoreJSONStructure),g,n,{...i,...s,interpolationkey:m})};this.resetRegExp();const u=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,d=i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:f=>es(f)},{regex:this.regexp,safeValue:f=>this.escapeValue?es(this.escape(f)):es(f)}].forEach(f=>{for(a=0;r=f.regex.exec(t);){const p=r[1].trim();if(o=c(p),o===void 0)if(typeof u=="function"){const g=u(t,r,i);o=x(g)?g:""}else if(i&&Object.prototype.hasOwnProperty.call(i,p))o="";else if(d){o=r[0];continue}else this.logger.warn(`missed to pass in variable ${p} for interpolating ${t}`),o="";else!x(o)&&!this.useRawValueToEscape&&(o=fn(o));const m=f.safeValue(o);if(t=t.replace(r[0],m),d?(f.regex.lastIndex+=o.length,f.regex.lastIndex-=r[0].length):f.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),t}nest(t,s){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i,r,o;const a=(l,c)=>{const u=this.nestingOptionsSeparator;if(l.indexOf(u)<0)return l;const d=l.split(new RegExp(`${u}[ ]*{`));let h=`{${d[1]}`;l=d[0],h=this.interpolate(h,o);const f=h.match(/'/g),p=h.match(/"/g);(f&&f.length%2===0&&!p||p.length%2!==0)&&(h=h.replace(/'/g,'"'));try{o=JSON.parse(h),c&&(o={...c,...o})}catch(m){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,m),`${l}${u}${h}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,l};for(;i=this.nestingRegexp.exec(t);){let l=[];o={...n},o=o.replace&&!x(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let c=!1;if(i[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(i[1])){const u=i[1].split(this.formatSeparator).map(d=>d.trim());i[1]=u.shift(),l=u,c=!0}if(r=s(a.call(this,i[1].trim(),o),o),r&&i[0]===t&&!x(r))return r;x(r)||(r=fn(r)),r||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`),r=""),c&&(r=l.reduce((u,d)=>this.format(u,d,n.lng,{...n,interpolationkey:i[1].trim()}),r.trim())),t=t.replace(i[0],r),this.regexp.lastIndex=0}return t}}const pc=e=>{let t=e.toLowerCase().trim();const s={};if(e.indexOf("(")>-1){const n=e.split("(");t=n[0].toLowerCase().trim();const i=n[1].substring(0,n[1].length-1);t==="currency"&&i.indexOf(":")<0?s.currency||(s.currency=i.trim()):t==="relativetime"&&i.indexOf(":")<0?s.range||(s.range=i.trim()):i.split(";").forEach(o=>{if(o){const[a,...l]=o.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),u=a.trim();s[u]||(s[u]=c),c==="false"&&(s[u]=!1),c==="true"&&(s[u]=!0),isNaN(c)||(s[u]=parseInt(c,10))}})}return{formatName:t,formatOptions:s}},Et=e=>{const t={};return(s,n,i)=>{let r=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(r={...r,[i.interpolationkey]:void 0});const o=n+JSON.stringify(r);let a=t[o];return a||(a=e(Te(n),i),t[o]=a),a(s)}};class mc{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=st.create("formatter"),this.options=t,this.formats={number:Et((s,n)=>{const i=new Intl.NumberFormat(s,{...n});return r=>i.format(r)}),currency:Et((s,n)=>{const i=new Intl.NumberFormat(s,{...n,style:"currency"});return r=>i.format(r)}),datetime:Et((s,n)=>{const i=new Intl.DateTimeFormat(s,{...n});return r=>i.format(r)}),relativetime:Et((s,n)=>{const i=new Intl.RelativeTimeFormat(s,{...n});return r=>i.format(r,n.range||"day")}),list:Et((s,n)=>{const i=new Intl.ListFormat(s,{...n});return r=>i.format(r)})},this.init(t)}init(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=s.interpolation.formatSeparator||","}add(t,s){this.formats[t.toLowerCase().trim()]=s}addCached(t,s){this.formats[t.toLowerCase().trim()]=Et(s)}format(t,s,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=s.split(this.formatSeparator);if(r.length>1&&r[0].indexOf("(")>1&&r[0].indexOf(")")<0&&r.find(a=>a.indexOf(")")>-1)){const a=r.findIndex(l=>l.indexOf(")")>-1);r[0]=[r[0],...r.splice(1,a)].join(this.formatSeparator)}return r.reduce((a,l)=>{const{formatName:c,formatOptions:u}=pc(l);if(this.formats[c]){let d=a;try{const h=i&&i.formatParams&&i.formatParams[i.interpolationkey]||{},f=h.locale||h.lng||i.locale||i.lng||n;d=this.formats[c](a,f,{...u,...i,...h})}catch(h){this.logger.warn(h)}return d}else this.logger.warn(`there was no format function for ${c}`);return a},t)}}const gc=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)};class yc extends Be{constructor(t,s,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=s,this.services=n,this.languageUtils=n.languageUtils,this.options=i,this.logger=st.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=i.maxParallelReads||10,this.readingCalls=0,this.maxRetries=i.maxRetries>=0?i.maxRetries:5,this.retryTimeout=i.retryTimeout>=1?i.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(n,i.backend,i)}queueLoad(t,s,n,i){const r={},o={},a={},l={};return t.forEach(c=>{let u=!0;s.forEach(d=>{const h=`${c}|${d}`;!n.reload&&this.store.hasResourceBundle(c,d)?this.state[h]=2:this.state[h]<0||(this.state[h]===1?o[h]===void 0&&(o[h]=!0):(this.state[h]=1,u=!1,o[h]===void 0&&(o[h]=!0),r[h]===void 0&&(r[h]=!0),l[d]===void 0&&(l[d]=!0)))}),u||(a[c]=!0)}),(Object.keys(r).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:i}),{toLoad:Object.keys(r),pending:Object.keys(o),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(t,s,n){const i=t.split("|"),r=i[0],o=i[1];s&&this.emit("failedLoading",r,o,s),!s&&n&&this.store.addResourceBundle(r,o,n,void 0,void 0,{skipCopy:!0}),this.state[t]=s?-1:2,s&&n&&(this.state[t]=0);const a={};this.queue.forEach(l=>{Ql(l.loaded,[r],o),gc(l,t),s&&l.errors.push(s),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{a[c]||(a[c]={});const u=l.loaded[c];u.length&&u.forEach(d=>{a[c][d]===void 0&&(a[c][d]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(t,s,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!t.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:s,fcName:n,tried:i,wait:r,callback:o});return}this.readingCalls++;const a=(c,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(c&&u&&i<this.maxRetries){setTimeout(()=>{this.read.call(this,t,s,n,i+1,r*2,o)},r);return}o(c,u)},l=this.backend[n].bind(this.backend);if(l.length===2){try{const c=l(t,s);c&&typeof c.then=="function"?c.then(u=>a(null,u)).catch(a):a(null,c)}catch(c){a(c)}return}return l(t,s,a)}prepareLoading(t,s){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();x(t)&&(t=this.languageUtils.toResolveHierarchy(t)),x(s)&&(s=[s]);const r=this.queueLoad(t,s,n,i);if(!r.toLoad.length)return r.pending.length||i(),null;r.toLoad.forEach(o=>{this.loadOne(o)})}load(t,s,n){this.prepareLoading(t,s,{},n)}reload(t,s,n){this.prepareLoading(t,s,{reload:!0},n)}loadOne(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const n=t.split("|"),i=n[0],r=n[1];this.read(i,r,"read",void 0,void 0,(o,a)=>{o&&this.logger.warn(`${s}loading namespace ${r} for language ${i} failed`,o),!o&&a&&this.logger.log(`${s}loaded namespace ${r} for language ${i}`,a),this.loaded(t,o,a)})}saveMissing(t,s,n,i,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(s)){this.logger.warn(`did not save key "${n}" as the namespace "${s}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(n==null||n==="")){if(this.backend&&this.backend.create){const l={...o,isUpdate:r},c=this.backend.create.bind(this.backend);if(c.length<6)try{let u;c.length===5?u=c(t,s,n,i,l):u=c(t,s,n,i),u&&typeof u.then=="function"?u.then(d=>a(null,d)).catch(a):a(null,u)}catch(u){a(u)}else c(t,s,n,i,a,l)}!t||!t[0]||this.store.addResource(t[0],s,n,i)}}}const xn=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]=="object"&&(t=e[1]),x(e[1])&&(t.defaultValue=e[1]),x(e[2])&&(t.tDescription=e[2]),typeof e[2]=="object"||typeof e[3]=="object"){const s=e[3]||e[2];Object.keys(s).forEach(n=>{t[n]=s[n]})}return t},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Sn=e=>(x(e.ns)&&(e.ns=[e.ns]),x(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),x(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e),ae=()=>{},_c=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(s=>{typeof e[s]=="function"&&(e[s]=e[s].bind(e))})};class Zt extends Be{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Sn(t),this.services={},this.logger=st,this.modules={external:[]},_c(this),s&&!this.isInitialized&&!t.isClone){if(!this.options.initImmediate)return this.init(t,s),this;setTimeout(()=>{this.init(t,s)},0)}}init(){var t=this;let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof s=="function"&&(n=s,s={}),!s.defaultNS&&s.defaultNS!==!1&&s.ns&&(x(s.ns)?s.defaultNS=s.ns:s.ns.indexOf("translation")<0&&(s.defaultNS=s.ns[0]));const i=xn();this.options={...i,...this.options,...Sn(s)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...i.interpolation,...this.options.interpolation}),s.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=s.keySeparator),s.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=s.nsSeparator);const r=u=>u?typeof u=="function"?new u:u:null;if(!this.options.isClone){this.modules.logger?st.init(r(this.modules.logger),this.options):st.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:typeof Intl<"u"&&(u=mc);const d=new bn(this.options);this.store=new yn(this.options.resources,this.options);const h=this.services;h.logger=st,h.resourceStore=this.store,h.languageUtils=d,h.pluralResolver=new hc(d,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===i.interpolation.format)&&(h.formatter=r(u),h.formatter.init(h,this.options),this.options.interpolation.format=h.formatter.format.bind(h.formatter)),h.interpolator=new fc(this.options),h.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},h.backendConnector=new yc(r(this.modules.backend),h.resourceStore,h,this.options),h.backendConnector.on("*",function(f){for(var p=arguments.length,m=new Array(p>1?p-1:0),g=1;g<p;g++)m[g-1]=arguments[g];t.emit(f,...m)}),this.modules.languageDetector&&(h.languageDetector=r(this.modules.languageDetector),h.languageDetector.init&&h.languageDetector.init(h,this.options.detection,this.options)),this.modules.i18nFormat&&(h.i18nFormat=r(this.modules.i18nFormat),h.i18nFormat.init&&h.i18nFormat.init(this)),this.translator=new Le(this.services,this.options),this.translator.on("*",function(f){for(var p=arguments.length,m=new Array(p>1?p-1:0),g=1;g<p;g++)m[g-1]=arguments[g];t.emit(f,...m)}),this.modules.external.forEach(f=>{f.init&&f.init(this)})}if(this.format=this.options.interpolation.format,n||(n=ae),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=function(){return t.store[u](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=function(){return t.store[u](...arguments),t}});const l=It(),c=()=>{const u=(d,h)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(h),n(d,h)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initImmediate?c():setTimeout(c,0),l}loadResources(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ae;const i=x(t)?t:this.language;if(typeof t=="function"&&(n=t),!this.options.resources||this.options.partialBundledLanguages){if(i&&i.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return n();const r=[],o=a=>{if(!a||a==="cimode")return;this.services.languageUtils.toResolveHierarchy(a).forEach(c=>{c!=="cimode"&&r.indexOf(c)<0&&r.push(c)})};i?o(i):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>o(l)),this.options.preload&&this.options.preload.forEach(a=>o(a)),this.services.backendConnector.load(r,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),n(a)})}else n(null)}reloadResources(t,s,n){const i=It();return typeof t=="function"&&(n=t,t=void 0),typeof s=="function"&&(n=s,s=void 0),t||(t=this.languages),s||(s=this.options.ns),n||(n=ae),this.services.backendConnector.reload(t,s,r=>{i.resolve(),n(r)}),i}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&Wi.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let s=0;s<this.languages.length;s++){const n=this.languages[s];if(!(["cimode","dev"].indexOf(n)>-1)&&this.store.hasLanguageSomeTranslations(n)){this.resolvedLanguage=n;break}}}changeLanguage(t,s){var n=this;this.isLanguageChangingTo=t;const i=It();this.emit("languageChanging",t);const r=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},o=(l,c)=>{c?(r(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,i.resolve(function(){return n.t(...arguments)}),s&&s(l,function(){return n.t(...arguments)})},a=l=>{!t&&!l&&this.services.languageDetector&&(l=[]);const c=x(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);c&&(this.language||r(c),this.translator.language||this.translator.changeLanguage(c),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(c)),this.loadResources(c,u=>{o(u,c)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(t),i}getFixedT(t,s,n){var i=this;const r=function(o,a){let l;if(typeof a!="object"){for(var c=arguments.length,u=new Array(c>2?c-2:0),d=2;d<c;d++)u[d-2]=arguments[d];l=i.options.overloadTranslationOptionHandler([o,a].concat(u))}else l={...a};l.lng=l.lng||r.lng,l.lngs=l.lngs||r.lngs,l.ns=l.ns||r.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||n||r.keyPrefix);const h=i.options.keySeparator||".";let f;return l.keyPrefix&&Array.isArray(o)?f=o.map(p=>`${l.keyPrefix}${h}${p}`):f=l.keyPrefix?`${l.keyPrefix}${h}${o}`:o,i.t(f,l)};return x(t)?r.lng=t:r.lngs=t,r.ns=s,r.keyPrefix=n,r}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const n=s.lng||this.resolvedLanguage||this.languages[0],i=this.options?this.options.fallbackLng:!1,r=this.languages[this.languages.length-1];if(n.toLowerCase()==="cimode")return!0;const o=(a,l)=>{const c=this.services.backendConnector.state[`${a}|${l}`];return c===-1||c===0||c===2};if(s.precheck){const a=s.precheck(this,o);if(a!==void 0)return a}return!!(this.hasResourceBundle(n,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(n,t)&&(!i||o(r,t)))}loadNamespaces(t,s){const n=It();return this.options.ns?(x(t)&&(t=[t]),t.forEach(i=>{this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}),this.loadResources(i=>{n.resolve(),s&&s(i)}),n):(s&&s(),Promise.resolve())}loadLanguages(t,s){const n=It();x(t)&&(t=[t]);const i=this.options.preload||[],r=t.filter(o=>i.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return r.length?(this.options.preload=i.concat(r),this.loadResources(o=>{n.resolve(),s&&s(o)}),n):(s&&s(),Promise.resolve())}dir(t){if(t||(t=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!t)return"rtl";const s=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],n=this.services&&this.services.languageUtils||new bn(xn());return s.indexOf(n.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;return new Zt(t,s)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ae;const n=t.forkResourceStore;n&&delete t.forkResourceStore;const i={...this.options,...t,isClone:!0},r=new Zt(i);return(t.debug!==void 0||t.prefix!==void 0)&&(r.logger=r.logger.clone(t)),["store","services","language"].forEach(a=>{r[a]=this[a]}),r.services={...this.services},r.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},n&&(r.store=new yn(this.store.data,i),r.services.resourceStore=r.store),r.translator=new Le(r.services,i),r.translator.on("*",function(a){for(var l=arguments.length,c=new Array(l>1?l-1:0),u=1;u<l;u++)c[u-1]=arguments[u];r.emit(a,...c)}),r.init(i,s),r.translator.options=i,r.translator.backendConnector.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},r}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const E=Zt.createInstance();E.createInstance=Zt.createInstance;E.createInstance;E.dir;E.init;E.loadResources;E.reloadResources;E.use;E.changeLanguage;E.getFixedT;const nd=E.t;E.exists;E.setDefaultNamespace;E.hasLoadedNamespace;E.loadNamespaces;E.loadLanguages;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class ms{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,s){this._asyncModule=t,this._callback=s,this._timer=this._asyncModule.run(()=>{this._timer=null,gs.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),gs.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(t,s,n){return t instanceof ms?t._cancelAsync():t=new ms,t.setConfig(s,n),t}}let gs=new Set;const id=function(e){gs.add(e)};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rd=ot(class extends Ct{constructor(e){if(super(e),e.type!==G.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((n=>n!==""))));for(const n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}const s=e.element.classList;for(const n of this.st)n in t||(s.remove(n),this.st.delete(n));for(const n in t){const i=!!t[n];i===this.st.has(n)||this.nt?.has(n)||(i?(s.add(n),this.st.add(n)):(s.remove(n),this.st.delete(n)))}return j}}),bc=X`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",V(()=>ct,{styleSheets:[bc]}));/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class wc{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class vc{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise((t=>this.Z=t))}resume(){this.Z?.(),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cn=e=>!ur(e)&&typeof e.then=="function",Pn=1073741823;let xc=class extends Re{constructor(){super(...arguments),this._$Cwt=Pn,this._$Cbt=[],this._$CK=new wc(this),this._$CX=new vc}render(...t){return t.find((s=>!Cn(s)))??j}update(t,s){const n=this._$Cbt;let i=n.length;this._$Cbt=s;const r=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<s.length&&!(a>this._$Cwt);a++){const l=s[a];if(!Cn(l))return this._$Cwt=a,l;a<i&&l===n[a]||(this._$Cwt=Pn,i=0,Promise.resolve(l).then((async c=>{for(;o.get();)await o.get();const u=r.deref();if(u!==void 0){const d=u._$Cbt.indexOf(l);d>-1&&d<u._$Cwt&&(u._$Cwt=d,u.setValue(c))}})))}return j}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const ys=ot(xc);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const En=(e,t,s)=>{const n=new Map;for(let i=t;i<=s;i++)n.set(e[i],i);return n},Sc=ot(class extends Ct{constructor(e){if(super(e),e.type!==G.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,s){let n;s===void 0?s=t:t!==void 0&&(n=t);const i=[],r=[];let o=0;for(const a of e)i[o]=n?n(a,o):o,r[o]=s(a,o),o++;return{values:r,keys:i}}render(e,t,s){return this.dt(e,t,s).values}update(e,[t,s,n]){const i=dr(e),{values:r,keys:o}=this.dt(t,s,n);if(!Array.isArray(i))return this.ut=o,r;const a=this.ut??=[],l=[];let c,u,d=0,h=i.length-1,f=0,p=r.length-1;for(;d<=h&&f<=p;)if(i[d]===null)d++;else if(i[h]===null)h--;else if(a[d]===o[f])l[f]=pt(i[d],r[f]),d++,f++;else if(a[h]===o[p])l[p]=pt(i[h],r[p]),h--,p--;else if(a[d]===o[p])l[p]=pt(i[d],r[p]),zt(e,l[p+1],i[d]),d++,p--;else if(a[h]===o[f])l[f]=pt(i[h],r[f]),zt(e,i[d],i[h]),h--,f++;else if(c===void 0&&(c=En(o,f,p),u=En(a,d,h)),c.has(a[d]))if(c.has(a[h])){const m=u.get(o[f]),g=m!==void 0?i[m]:null;if(g===null){const y=zt(e,i[d]);pt(y,r[f]),l[f]=y}else l[f]=pt(g,r[f]),zt(e,i[d],g),i[m]=null;f++}else qe(i[h]),h--;else qe(i[d]),d++;for(;f<=p;){const m=zt(e,l[p+1]);pt(m,r[f]),l[f++]=m}for(;d<=h;){const m=i[d++];m!==null&&qe(m)}return this.ut=o,Un(e,l),j}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class je extends Event{constructor(t){super(je.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}je.eventName="rangeChanged";class Ve extends Event{constructor(t){super(Ve.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}Ve.eventName="visibilityChanged";class He extends Event{constructor(){super(He.eventName,{bubbles:!1})}}He.eventName="unpinned";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Cc{constructor(t){this._element=null;const s=t??window;this._node=s,t&&(this._element=t)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class Pc extends Cc{constructor(t,s){super(s),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const n=this._node;this._originalScrollTo=n.scrollTo,this._originalScrollBy=n.scrollBy,this._originalScroll=n.scroll,this._attach(t)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(t,s){const n=typeof t=="number"&&typeof s=="number"?{left:t,top:s}:t;this._scrollTo(n)}scrollBy(t,s){const n=typeof t=="number"&&typeof s=="number"?{left:t,top:s}:t;n.top!==void 0&&(n.top+=this.scrollTop),n.left!==void 0&&(n.left+=this.scrollLeft),this._scrollTo(n)}_nativeScrollTo(t){this._originalScrollTo.bind(this._element||window)(t)}_scrollTo(t,s=null,n=null){this._end!==null&&this._end(),t.behavior==="smooth"?(this._setDestination(t),this._retarget=s,this._end=n):this._resetScrollState(),this._nativeScrollTo(t)}_setDestination(t){let{top:s,left:n}=t;return s=s===void 0?void 0:Math.max(0,Math.min(s,this.maxScrollTop)),n=n===void 0?void 0:Math.max(0,Math.min(n,this.maxScrollLeft)),this._destination!==null&&n===this._destination.left&&s===this._destination.top?!1:(this.__destination={top:s,left:n,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(t){this._destination&&this._setDestination(t)&&this._nativeScrollTo(this._destination)}managedScrollTo(t,s,n){return this._scrollTo(t,s,n),this._updateManagedScrollTo}correctScrollError(t){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(t),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:t,scrollLeft:s}=this;let{top:n,left:i}=this._destination;n=Math.min(n||0,this.maxScrollTop),i=Math.min(i||0,this.maxScrollLeft);const r=Math.abs(n-t),o=Math.abs(i-s);r<1&&o<1&&(this._end&&this._end(),this._resetScrollState())}}detach(t){return this._clients.delete(t),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(t){this._clients.add(t),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let On=typeof window<"u"?window.ResizeObserver:void 0;const _s=Symbol("virtualizerRef"),le="virtualizer-sizer";let Tn;class Ec{constructor(t){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!t)throw new Error("Virtualizer constructor requires a configuration object");if(t.hostElement)this._init(t);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(t){Array.isArray(t)&&t!==this._items&&(this._itemsChanged=!0,this._items=t,this._schedule(this._updateLayout))}_init(t){this._isScroller=!!t.scroller,this._initHostElement(t);const s=t.layout||{};this._layoutInitialized=this._initLayout(s)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new On(()=>this._hostElementSizeChanged()),this._childrenRO=new On(this._childrenSizeChanged.bind(this))}_initHostElement(t){const s=this._hostElement=t.hostElement;this._applyVirtualizerStyles(),s[_s]=this}connected(){this._initObservers();const t=this._isScroller;this._clippingAncestors=Ac(this._hostElement,t),this._scrollerController=new Pc(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(t=>{t.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(t),this._hostElementRO.observe(t)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(t=>this._childrenRO.observe(t)),this._scrollEventListeners.forEach(t=>t.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(t=>t.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const s=this._hostElement.style;s.display=s.display||"block",s.position=s.position||"relative",s.contain=s.contain||"size layout",this._isScroller&&(s.overflow=s.overflow||"auto",s.minHeight=s.minHeight||"150px")}_getSizer(){const t=this._hostElement;if(!this._sizer){let s=t.querySelector(`[${le}]`);s||(s=document.createElement("div"),s.setAttribute(le,""),t.appendChild(s)),Object.assign(s.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),s.textContent="&nbsp;",s.setAttribute(le,""),this._sizer=s}return this._sizer}async updateLayoutConfig(t){await this._layoutInitialized;const s=t.type||Tn;if(typeof s=="function"&&this._layout instanceof s){const n={...t};return delete n.type,this._layout.config=n,!0}return!1}async _initLayout(t){let s,n;if(typeof t.type=="function"){n=t.type;const i={...t};delete i.type,s=i}else s=t;n===void 0&&(Tn=n=(await hr(()=>import("./flow-Cd2WZlRY.js"),[],import.meta.url)).FlowLayout),this._layout=new n(i=>this._handleLayoutMessage(i),s),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const t=window.performance.now(),s=t-this._benchmarkStart,i=performance.getEntriesByName("uv-virtualizing","measure").filter(r=>r.startTime>=this._benchmarkStart&&r.startTime<t).reduce((r,o)=>r+o.duration,0);return this._benchmarkStart=null,{timeElapsed:s,virtualizationTime:i}}return null}_measureChildren(){const t={},s=this._children,n=this._measureChildOverride||this._measureChild;for(let i=0;i<s.length;i++){const r=s[i],o=this._first+i;(this._itemsChanged||this._toBeMeasured.has(r))&&(t[o]=n.call(this,r,this._items[o]))}this._childMeasurements=t,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(t){const{width:s,height:n}=t.getBoundingClientRect();return Object.assign({width:s,height:n},Oc(t))}async _schedule(t){this._scheduled.has(t)||(this._scheduled.add(t),await Promise.resolve(),this._scheduled.delete(t),t.call(this))}async _updateDOM(t){this._scrollSize=t.scrollSize,this._adjustRange(t.range),this._childrenPos=t.childPositions,this._scrollError=t.scrollError||null;const{_rangeChanged:s,_itemsChanged:n}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(s||n)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(t=>this._childrenRO.observe(t)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(t){console.warn("Error measuring performance data: ",t)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(t){switch(t.type){case"scroll":(t.currentTarget===window||this._clippingAncestors.includes(t.currentTarget))&&this._handleScrollEvent();break;default:console.warn("event not handled",t)}}_handleLayoutMessage(t){t.type==="stateChanged"?this._updateDOM(t):t.type==="visibilityChanged"?(this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._notifyVisibility()):t.type==="unpinned"&&this._hostElement.dispatchEvent(new He)}get _children(){const t=[];let s=this._hostElement.firstElementChild;for(;s;)s.hasAttribute(le)||t.push(s),s=s.nextElementSibling;return t}_updateView(){const t=this._hostElement,s=this._scrollerController?.element,n=this._layout;if(t&&s&&n){let i,r,o,a;const l=t.getBoundingClientRect();i=0,r=0,o=window.innerHeight,a=window.innerWidth;const c=this._clippingAncestors.map(y=>y.getBoundingClientRect());c.unshift(l);for(const y of c)i=Math.max(i,y.top),r=Math.max(r,y.left),o=Math.min(o,y.bottom),a=Math.min(a,y.right);const u=s.getBoundingClientRect(),d={left:l.left-u.left,top:l.top-u.top},h={width:s.scrollWidth,height:s.scrollHeight},f=i-l.top+t.scrollTop,p=r-l.left+t.scrollLeft,m=Math.max(0,o-i),g=Math.max(0,a-r);n.viewportSize={width:g,height:m},n.viewportScroll={top:f,left:p},n.totalScrollSize=h,n.offsetWithinScroller=d}}_sizeHostElement(t){const n=t&&t.width!==null?Math.min(82e5,t.width):0,i=t&&t.height!==null?Math.min(82e5,t.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${n}px, ${i}px)`;else{const r=this._hostElement.style;r.minWidth=n?`${n}px`:"100%",r.minHeight=i?`${i}px`:"100%"}}_positionChildren(t){t&&t.forEach(({top:s,left:n,width:i,height:r,xOffset:o,yOffset:a},l)=>{const c=this._children[l-this._first];c&&(c.style.position="absolute",c.style.boxSizing="border-box",c.style.transform=`translate(${n}px, ${s}px)`,i!==void 0&&(c.style.width=i+"px"),r!==void 0&&(c.style.height=r+"px"),c.style.left=o===void 0?null:o+"px",c.style.top=a===void 0?null:a+"px")})}async _adjustRange(t){const{_first:s,_last:n,_firstVisible:i,_lastVisible:r}=this;this._first=t.first,this._last=t.last,this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==s||this._last!==n,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==i||this._lastVisible!==r}_correctScrollError(){if(this._scrollError){const{scrollTop:t,scrollLeft:s}=this._scrollerController,{top:n,left:i}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:t-n,left:s-i})}}element(t){return t===1/0&&(t=this._items.length-1),this._items?.[t]===void 0?void 0:{scrollIntoView:(s={})=>this._scrollElementIntoView({...s,index:t})}}_scrollElementIntoView(t){if(t.index>=this._first&&t.index<=this._last)this._children[t.index-this._first].scrollIntoView(t);else if(t.index=Math.min(t.index,this._items.length-1),t.behavior==="smooth"){const s=this._layout.getScrollIntoViewCoordinates(t),{behavior:n}=t;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(s,{behavior:n}),()=>this._layout.getScrollIntoViewCoordinates(t),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=t}else this._layout.pin=t}_checkScrollIntoViewTarget(t){const{index:s}=this._scrollIntoViewTarget||{};s&&t?.has(s)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new je({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new Ve({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((t,s)=>{this._layoutCompleteResolver=t,this._layoutCompleteRejecter=s})),this._layoutCompletePromise}_rejectLayoutCompletePromise(t){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(t),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(t){if(this._layout?.measureChildren){for(const s of t)this._toBeMeasured.set(s.target,s.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function Oc(e){const t=window.getComputedStyle(e);return{marginTop:ce(t.marginTop),marginRight:ce(t.marginRight),marginBottom:ce(t.marginBottom),marginLeft:ce(t.marginLeft)}}function ce(e){const t=e?parseFloat(e):NaN;return Number.isNaN(t)?0:t}function An(e){if(e.assignedSlot!==null)return e.assignedSlot;if(e.parentElement!==null)return e.parentElement;const t=e.parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host||null}function Tc(e,t=!1){const s=[];let n=t?e:An(e);for(;n!==null;)s.push(n),n=An(n);return s}function Ac(e,t=!1){let s=!1;return Tc(e,t).filter(n=>{if(s)return!1;const i=getComputedStyle(n);return s=i.position==="fixed",i.overflow!=="visible"})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lc=e=>e,$c=(e,t)=>P`${t}: ${JSON.stringify(e,null,2)}`;class Rc extends Re{constructor(t){if(super(t),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(s,n)=>$c(s,n+this._first),this._keyFunction=(s,n)=>Lc(s,n+this._first),this._items=[],t.type!==G.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(t){t&&this._setFunctions(t);const s=[];if(this._first>=0&&this._last>=this._first)for(let n=this._first;n<=this._last;n++)s.push(this._items[n]);return Sc(s,this._keyFunction,this._renderItem)}update(t,[s]){this._setFunctions(s);const n=this._items!==s.items;return this._items=s.items||[],this._virtualizer?this._updateVirtualizerConfig(t,s):this._initialize(t,s),n?j:this.render()}async _updateVirtualizerConfig(t,s){if(!await this._virtualizer.updateLayoutConfig(s.layout||{})){const i=t.parentNode;this._makeVirtualizer(i,s)}this._virtualizer.items=this._items}_setFunctions(t){const{renderItem:s,keyFunction:n}=t;s&&(this._renderItem=(i,r)=>s(i,r+this._first)),n&&(this._keyFunction=(i,r)=>n(i,r+this._first))}_makeVirtualizer(t,s){this._virtualizer&&this._virtualizer.disconnected();const{layout:n,scroller:i,items:r}=s;this._virtualizer=new Ec({hostElement:t,layout:n,scroller:i}),this._virtualizer.items=r,this._virtualizer.connected()}_initialize(t,s){const n=t.parentNode;n&&n.nodeType===1&&(n.addEventListener("rangeChanged",i=>{this._first=i.first,this._last=i.last,this.setValue(this.render())}),this._makeVirtualizer(n,s))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const kc=ot(Rc),zc=(e,t)=>{if(!e||!t)return;const s=Object.keys(t);return Object.fromEntries(Object.keys(e).flatMap(n=>s.includes(n)?[]:[[n,void 0]]))};class Nc extends Ct{_props;render(t){return j}update(t,[s]){return this._props!==s&&Object.assign(t.element,zc(this._props,s),this._props=s),j}}const Mc=ot(Nc),Fc=e=>{const t=ee(),s=R(()=>new CSSStyleSheet,[]);T(()=>{t.shadowRoot.adoptedStyleSheets=[...t.shadowRoot.adoptedStyleSheets,s]},[]),T(()=>{s.replaceSync(e)},[e])};function qi(e){return e?t=>t?.[e]:At}const Ic=e=>{const t=qi(e);return s=>typeof s=="string"?s:t(s)?.toString()||""},Dc=e=>t=>{const s={};for(const n in t)e.includes(n)&&(s[n]=t[n]);return s},Bc="data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1L5.20039 7.04766L1.66348 3.46152' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",jc=X`
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
		background: url("${Bc}") #5881f6 no-repeat 50%;
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
`,Vc=({index:e,itemHeight:t,auto:s})=>X`
	${J(!s,()=>X`
			.item {
				line-height: ${t}px;
				height: ${t}px;
			}
		`)}

	.item[data-index='${e||"0"}'] {
		background: var(
			--cosmoz-listbox-active-color,
			var(--cosmoz-selection-color, rgba(58, 145, 226, 0.1))
		);
	}
`,Hc=e=>typeof e=="object"&&e!==null&&Symbol.iterator in e;function vt(e){return e==null?[]:Array.isArray(e)?e:typeof e=="string"?[e]:Hc(e)?Array.from(e):[e]}const ss=(e,t=At)=>s=>{const n=vt(e).map(t);return vt(s).filter(i=>!n.includes(t(i)))},Uc=(e,t)=>t?s=>vt(e).find(n=>n[t]===s[t]):s=>vt(e).includes(s),Kc=(e,t)=>{if(!t||!e)return e;const s=e.toLowerCase().indexOf(t.toLowerCase());if(s<0)return e;const n=s+t.length;return[e.slice(0,s),P`<mark>${e.slice(s,n)}</mark>`,e.slice(n)]},Wc=e=>{const t=Rt(e);T(()=>{const s=n=>{if(!(n.ctrlKey&&n.altKey||n.defaultPrevented))switch(n.key){case"Up":case"ArrowUp":n.preventDefault(),t.onUp();break;case"Down":case"ArrowDown":n.preventDefault(),t.onDown();break;case"Enter":n.preventDefault(),t.onEnter();break}};return document.addEventListener("keydown",s,!0),()=>document.removeEventListener("keydown",s,!0)},[t])},qc=({items:e,onSelect:t,defaultIndex:s=0})=>{const[n,i]=nt({index:s}),{index:r}=n,{length:o}=e;return T(()=>{i({index:n.index<0?s:Math.min(n.index,e.length-1),scroll:!0})},[e,s]),Wc({onUp:$(()=>i(a=>({index:a.index>0?a.index-1:o-1,scroll:!0})),[o]),onDown:$(()=>i(a=>({index:a.index<o-1?a.index+1:0,scroll:!0})),[o]),onEnter:$(()=>r>-1&&r<o&&t?.(e[r],r),[r,e,t])}),{position:n,highlight:$(a=>i({index:a}),[]),select:$(a=>t?.(a),[t])}},Yc=(e=At)=>(t,s,{highlight:n,select:i,textual:r=At,query:o,isSelected:a})=>{const l=r(t),c=Kc(l,o),u=e(c,t,s);return P`<div
				class="item"
				role="option"
				part="option"
				?aria-selected=${a(t)}
				data-index=${s}
				@mouseenter=${()=>n(s)}
				@click=${()=>i(t)}
				@mousedown=${d=>d.preventDefault()}
				title=${l}
			>
				${u}
			</div>
			<div class="sizer" virtualizer-sizer>${u}</div>`},Jc=({itemRenderer:e=Yc(),...t})=>{const s=Rt(t);return $((n,i)=>e(n,i,s),[s,e])},Gc=e=>{const t=e==="auto",[s,n]=nt(t?40:e);return[s,i=>t?n(i):void 0]},Xc=["query","items","onSelect","textual","anchor","itemHeight","itemLimit","itemRenderer","defaultIndex","value","valueProperty","loading"],Qc=({value:e,valueProperty:t,items:s,onSelect:n,defaultIndex:i,query:r,textual:o,itemRenderer:a,itemHeight:l=40,itemLimit:c=5})=>{const u=R(()=>Uc(e,t),[e,t]),d=R(()=>s.slice(),[s,u]),{position:h,highlight:f,select:p}=qc({items:d,onSelect:n,defaultIndex:isNaN(i)?void 0:Number(i)}),[m,g]=Gc(l);return{position:h,items:d,height:Math.min(c,d.length)*m,highlight:f,select:p,itemHeight:m,setItemHeight:g,renderItem:Jc({itemRenderer:a,items:d,position:h,highlight:f,select:p,textual:o,query:r,isSelected:u})}},Ln=wi,Zc=e=>{const t=yi(void 0),{position:s,items:n,renderItem:i,height:r,itemHeight:o,setItemHeight:a}=Qc(e);return T(()=>{const l=t.current?.[_s];l&&l.layoutComplete.then(()=>{e.dispatchEvent(new CustomEvent("layout-complete"));const{averageChildSize:c,averageMarginSize:u}=l._layout._metricsCache;return a(c+u*2)},Ln)},[n]),T(()=>{if(!s.scroll)return;const l=t.current?.[_s];if(l){if(!l?._layout){l.layoutComplete.then(()=>l.element(s.index)?.scrollIntoView({block:"nearest"}),Ln);return}l.element(s.index)?.scrollIntoView({block:"nearest"})}},[s]),Fc(Vc({...s,itemHeight:o,auto:e.itemHeight==="auto"})),P`<div
			class="items"
			style="min-height: ${r}px"
			${_t(l=>t.current=l)}
		>
			<div virtualizer-sizer></div>
			${kc({items:n,renderItem:i,scroller:!0})}
		</div>
		<slot></slot>`};customElements.define("cosmoz-listbox",Ei(V(Zc,{styleSheets:[Ls(jc)]})));const tu=({multi:e,setFloating:t,styles:s,...n},i)=>P`<cosmoz-listbox
		style="${Ci(s)}"
		@connected="${r=>r.target.showPopover?.()}"
		popover="manual"
		part="listbox"
		?multi=${e}
		${_t(t)}
		...=${Mc(Dc(Xc)(n))}
		>${i}</cosmoz-listbox
	>`,eu=As`
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
`,su=P`
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
`,nu=({onClear:e,disabled:t})=>P`
	<div class="content" part="content chip-text"><slot></slot></div>
	${J(e&&!t,()=>P`<span
				class="clear"
				part="clear chip-clear"
				@mousedown=${s=>s.preventDefault()}
				@click=${e}
			>
				${su}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",V(nu,{observedAttributes:["disabled"],styleSheets:[Ls(eu)]}));const $n=({content:e,onClear:t,disabled:s,hidden:n,className:i="chip",slot:r})=>P`<cosmoz-autocomplete-chip
		class=${B(i)}
		slot=${B(r)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${s}
		?hidden=${n}
		.onClear=${t}
		title=${B(typeof e=="string"?e:void 0)}
		>${e}</cosmoz-autocomplete-chip
	>`,iu=({value:e,min:t=0,onDeselect:s,textual:n,disabled:i})=>[...e.filter(Boolean).map(r=>$n({content:n(r),onClear:e.length>t&&(()=>s(r)),disabled:i,slot:"control"})),$n({content:P`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],ru=As`
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
`,ou=({focused:e,empty:t,...s})=>{const n=e&&t&&s.limit!==1,i=Rt(s);T(()=>{if(!n)return;const r=o=>{if(o.defaultPrevented)return;const{key:a}=o,l=vt(i.value),c=i.limit==1;if(l.length>0&&(a==="Backspace"||c&&a.length===1))return i.onChange(l.slice(0,-1))};return document.addEventListener("keydown",r,!0),()=>document.removeEventListener("keydown",r,!0)},[n,i])},Rn=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),au=(e,t,s)=>{if(!t)return e;const n=Rn(t.toLowerCase()),i=[];for(const r of e){const a=Rn(s(r).toLowerCase()).indexOf(n);a<0||i.push({item:r,index:a})}return i.sort((r,o)=>r.index-o.index).map(({item:r})=>r)},lu=e=>e===!1||e==null?[]:e,Yi=(e,t,s)=>e.dispatchEvent(new CustomEvent(t,{detail:s})),cu=(e,t,s)=>$(n=>{t?.(n),Yi(e,s,n)},[t]),uu=[],du=e=>(...t)=>{let s;const n=()=>{s&&cancelAnimationFrame(s)};return n(),s=requestAnimationFrame(()=>{s=void 0,e(...t)}),n},$s=(e,t=()=>({}))=>{const s={type:e,toString(){return e}};return Object.assign((...i)=>Object.assign(t(...i),s),s)},kn=e=>e.type||e.toString(),zn=e=>Array.isArray(e)?e:[e],hu=(e,t)=>{const s=zn(t),n=(s.every(Array.isArray)?s:[s]).map(([i,r])=>({actions:zn(i).map(kn),handle:r}));return(i=e,r)=>{const o=n.find(a=>a.actions.includes(kn(r)));return o?o.handle(i,r):i}},yt={pending:"pending",rejected:"rejected",resolved:"resolved"},Ji={error:void 0,result:void 0,state:yt.pending},Gi=$s(yt.pending),Xi=$s(yt.resolved,e=>({result:e})),Qi=$s(yt.rejected,e=>({error:e})),fu=hu(Ji,[[Gi,()=>({error:void 0,result:void 0,state:yt.pending})],[Xi,(e,{result:t})=>({error:void 0,result:t,state:yt.resolved})],[Qi,(e,{error:t})=>({error:t,result:void 0,state:yt.rejected})]]),pu=e=>{const[{error:t,result:s,state:n},i]=sa(fu,Ji);return T(()=>{if(!e)return;let r=!1;return i(Gi()),e.then(o=>!r&&i(Xi(o)),o=>!r&&i(Qi(o))),()=>{r=!0}},[e]),[s,t,n]},mu=({value:e,text:t,onChange:s,onText:n,onSelect:i,limit:r,min:o,source:a,textProperty:l,textual:c,valueProperty:u,keepOpened:d,keepQuery:h,preserveOrder:f,defaultIndex:p,externalSearch:m,...g})=>{const y=R(()=>(c??Ic)(l),[c,l]),{active:_,focused:b,onFocus:w,setClosed:v}=xi(g),A=!t,S=R(()=>t?.trim(),[t]),N=ee(),z=cu(N,n,"text"),F=$(L=>{s?.(L,()=>v(!0)),Yi(N,"value",L)},[s]),[I,tt]=nt([]),H=R(()=>Promise.resolve(typeof a=="function"?a({query:S,active:_}):a).then(lu),[a,_,S]),k=R(()=>vt(e),[e]);T(()=>H.then(tt),[H]),ou({focused:b,empty:A,limit:r,value:k,onChange:F,onText:z}),T(()=>{b||z("")},[b]);const D=Rt({onText:z,onChange:F,value:k,limit:r,min:o,keepQuery:h,keepOpened:d,setClosed:v,onSelect:i}),[,,Y]=pu(H);return{active:_,query:S,textual:y,value:k,source$:H,loading:Y==="pending",items:R(()=>{if(!_)return uu;const L=f?I:[...k,...ss(k,qi(u))(I)];return m?L:au(L,S,y)},[I,_,S,y,A,k,f,u,m]),onClick:$(()=>v(!1),[]),onFocus:w,onText:$(L=>{z(L.target.value),v(!1)},[z,t,v]),onSelect:$(L=>{D.onSelect?.(L,D);const{onChange:O,onText:M,limit:lt,min:se,value:rr,keepQuery:or,keepOpened:ar,setClosed:lr}=D;or||M(""),ar||lr(!0);const ne=vt(rr),Rs=ne.includes(L);Rs&&ne.length===se||O((Rs?ss(L)(ne):[...ne,L]).slice(-lt))},[D]),onDeselect:$(L=>D.onChange(ss(L)(D.value)),[D]),defaultIndex:S!==void 0&&S?.length>0?0:p}},gu=e=>{const t=e.shadowRoot.querySelectorAll(".chip"),s=e.shadowRoot.querySelector(".badge");s.hidden=!0;for(const a of t)a.hidden=!1;const i=e.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let r;for(r=0;r<t.length;r++){const l=t[r].getBoundingClientRect();if(!(l.x+l.width<=i.x+i.width-24))break}const o=t.length-r;for(s.querySelector("span").textContent="+"+o.toString(),s.hidden=o<1;r<t.length;r++)t[r].hidden=!0},yu=({value:e,active:t,wrap:s,limit:n})=>{const i=ee(),r=!(s||n==1),o=R(()=>du(()=>gu(i)),[]),[a,l]=nt(0);ds(()=>{if(!r)return;const c=i.shadowRoot.querySelector("cosmoz-input"),u=new ResizeObserver(d=>{l(d[0].contentRect.width)});return u.observe(c),()=>u.disconnect()},[r]),ds(()=>r?o():void 0,[r,a,t,e])},_u=["input","control","label","line","error","wrap"].map(e=>`${e}: input-${e}`).join(),bu=[dl({apply({rects:e,elements:t}){Object.assign(t.floating.style,{minWidth:`${Math.max(e.reference.width,e.floating.width)}px`})}}),...Ii],wu=({active:e,isSingle:t,showSingle:s})=>e?!(t&&!s):!1,vu=e=>{const{active:t,invalid:s,errorMessage:n,label:i,placeholder:r,disabled:o,noLabelFloat:a,alwaysFloatLabel:l,textual:c,text:u,onText:d,onFocus:h,onClick:f,onDeselect:p,value:m,limit:g,min:y,showSingle:_,items:b,source$:w,placement:v,loading:A}=e,S=ee(),N=g==1,z=N&&m?.[0]!=null,{styles:F,setReference:I,setFloating:tt}=Di({placement:v,middleware:bu});T(()=>(S.addEventListener("focusin",h),S.addEventListener("focusout",h),()=>{S.removeEventListener("focusin",h),S.removeEventListener("focusout",h)}),[h]),Bi({focus:()=>S.shadowRoot?.querySelector("#input")?.focus()},[]);const H=A||b.length>0||u!=null&&u.length>0;return P`<cosmoz-input
				id="input"
				part="input"
				${_t(I)}
				.label=${i}
				.placeholder=${z?void 0:r}
				?no-label-float=${a}
				?always-float-label=${m?.length>0||l}
				?readonly=${z}
				?disabled=${o}
				?invalid=${ys(w.then(()=>s,()=>!0),s)}
				.errorMessage=${ys(w.then(()=>n,k=>k.message),n)}
				.value=${De(u)}
				@value-changed=${d}
				@click=${f}
				autocomplete="off"
				exportparts=${_u}
				?data-one=${N}
				?data-single=${z}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${iu({value:m,min:y,onDeselect:p,textual:c,disabled:o})}
			</cosmoz-input>

			${J(wu({active:t,isSingle:z,showSingle:_}),()=>tu({...e,items:b,multi:!N,setFloating:tt,styles:{...F,display:H?void 0:"none"}},J(A,()=>P`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>J(u!=null&&u.length>0&&b.length===0,()=>P`<slot name="no-result"></slot>`))))}`},Zi=e=>{const t={...e,...mu(e)};return yu(t),vu(t)},tr=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap"],xu=e=>{const{onChange:t,onText:s,...n}=e,[i,r]=ia("value");return T(()=>{e.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),Zi({...n,value:i,onChange:$((o,...a)=>{r(o),t?.(o,...a)},[t]),onText:$(o=>{e.text=o,s?.(o)},[s])})},er=[Ls(ru)];customElements.define("cosmoz-autocomplete-ui",V(Zi,{observedAttributes:tr,styleSheets:er}));customElements.define("cosmoz-autocomplete",V(xu,{observedAttributes:tr,styleSheets:er}));const Su=X`
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
`,Cu=()=>ct,Pu=V(Cu,{styleSheets:[Su]});customElements.define("cosmoz-spinner",Pu);const me=[],Ue=()=>{E.isInitialized||E.init({lng:"en",resStore:{en:{}},fallbackLng:!1})},Ke=e=>e.reduce((t,s,n)=>(t.count===void 0&&typeof s=="number"&&(t.count=s),typeof s=="object"?{...t,...s}:(t[n]=s,t)),{}),Nn=function(e){Ue();const t=Ke([...arguments].slice(1));return delete t.count,E.t(e,t)},Eu=function(e,t){Ue();const s=Ke([...arguments].slice(2)),n=s.count;let i;delete s.count;const r=E.services.pluralResolver.getSuffix(E.language,n);return r?(s.defaultValue=t,i=e+r):(i=e,s.defaultValue=e),E.t(i,s)},Ou=function(e,t){Ue();const s=Ke([...arguments].slice(2));return s.context=e,delete s.count,E.t(t,s)},Tu=function(e,t,s){Ue();const n=Ke([...arguments].slice(3)),i=n.count,r=e?"_"+e:"";let o=t;delete n.count;const a=E.services.pluralResolver.getSuffix(E.language,i);return a?(n.defaultValue=s,o=t+r+a):(o=t,n.context=e),E.t(o,n)},Au=(e,t,s)=>{E.init({resources:{}}),E.addResourceBundle(e,t,s)},ad=xt(e=>class extends e{static get properties(){return{t:{type:Object,value(){return{}}}}}_filterT(t){return t.filter(s=>s!==this.t)}_(){return Nn.apply(null,this._filterT([...arguments]))}connectedCallback(){super.connectedCallback(),me.push(this)}disconnectedCallback(){super.disconnectedCallback();const t=me.indexOf(this);t>=0&&me.splice(t,1)}gettext(){return Nn.apply(null,this._filterT([...arguments]))}ngettext(){return Eu.apply(null,this._filterT([...arguments]))}pgettext(){return Ou.apply(null,this._filterT([...arguments]))}npgettext(){return Tu.apply(null,this._filterT([...arguments]))}});class Lu extends Vo{static get properties(){return{compatibilityJSON:{type:String,value:"v3"},domain:{type:String,value:"messages"},interpolationPrefix:{type:String,value:"__"},interpolationSuffix:{type:String,value:"__"},language:{type:String,value:"en"},namespace:{type:String,value:"translation"},translations:{type:Object,observer(t){t!=null&&(Au(this.language,this.namespace,t),me.forEach(s=>s.set("t",{})))}},keySeparator:{type:String,value:"."},nsSeparator:{type:String,value:":"}}}ready(){super.ready(),E.init({compatibilityJSON:this.compatibilityJSON,interpolation:{escapeValue:!1,prefix:this.interpolationPrefix,suffix:this.interpolationSuffix},keySeparator:this.keySeparator,lng:this.language,nsSeparator:this.nsSeparator,resStore:{}})}}customElements.define("cosmoz-i18next",Lu);const sr=["T"," "],Mn=e=>{if(!e||typeof e!="string")return;let t;return sr.some(s=>e.match(s)?(t=e.split(s),!0):!1),t||[e]},$u=(e,t)=>{const s=Mn(e),n=Mn(t);return{minDate:Array.isArray(s)?s.shift():null,minTime:Array.isArray(s)?s.shift():null,maxDate:Array.isArray(n)?n.shift():null,maxTime:Array.isArray(n)?n.shift():null}},Fn=(e,t)=>{if(!(!e&&!t))return!e&&t?`T${t}`:e&&!t?e:`${e}T${t}`},Ru=e=>{if(e){for(const t of sr)if(e.match(t)){const s=e.split(t);return{date:s.shift(),time:s.shift()}}return{date:e}}},ku=e=>{const{dateLabel:t,timeLabel:s,min:n,max:i,step:r="1",value:o}=e,{minDate:a,maxDate:l,minTime:c,maxTime:u}=R(()=>$u(n,i),[n,i]),{date:d,time:h}=R(()=>Ru(o)??{},[o]);return T(()=>{e.dispatchEvent(new CustomEvent("cosmoz-datetime-input-value-changed",{bubbles:!0,composed:!0}))},[o]),P`
		<style>
			:host {
				display: flex;
				flex-direction: row;
			}
		</style>
		<cosmoz-input
			label="${t}"
			type="date"
			.value="${d}"
			@value-changed="${f=>Qt(e,"value",Fn(f.target.value,h))}"
			.min="${a}"
			.max="${l}"
		></cosmoz-input>
		<cosmoz-input
			label="${s}"
			type="time"
			.value="${h}"
			@value-changed="${f=>Qt(e,"value",Fn(d,f.target.value))}"
			step="${r}"
			.min="${c}"
			.max="${u}"
		></cosmoz-input>
	`};customElements.define("cosmoz-datetime-input",V(ku,{observedAttributes:["date-label","time-label","min","max","step"]}));const zu=e=>t=>{const s=t.match(e);return s&&{result:s,url:new URL(t,document.location.origin)}},Nu=(e,t)=>{for(const s of e){const n=s.rule,i=typeof n=="function"?n(t):zu(n)(t);if(i)return{...s,route:s,match:i,url:t}}},In=()=>window.location.href.replace(window.location.origin,""),Mu=()=>{const[e,t]=nt(In);return T(()=>{const s=()=>t(In);return window.addEventListener("popstate",s),()=>window.removeEventListener("popstate",s)},[t]),e},Fu=e=>{const t=Mu();return R(()=>Nu(e,t),[e,t])},ld=(e,t=null,{notify:s=!0,replace:n=!0}={})=>{(n?history.replaceState:history.pushState).call(history,t,"",e),s&&queueMicrotask(()=>window.dispatchEvent(new CustomEvent("popstate",{bubbles:!1})))},Iu=e=>{const t=Fu(e);return{route:t,result:R(()=>{if(t){const{handle:s,...n}=t;return s(n)}},[t])}},ue=(e,t,s)=>e.dispatchEvent(new CustomEvent(t,{bubbles:!1,cancelable:!1,composed:!0,...s})),Du=(e,t,s)=>{T(()=>{if(!s){ue(e,"route-not-found");return}ue(e,"route-loading",{detail:t}),Promise.resolve(s).then(()=>ue(e,"route-loaded",{detail:t})).catch(n=>ue(e,"route-error",{detail:{route:t,error:n}}))},[s])},Bu=e=>{const t=e.routes,{route:s,result:n}=Iu(t);return Du(e,s,n),Pi([n],()=>ys(Promise.resolve(n).catch(()=>ct),ct))};customElements.define("cosmoz-router",V(Bu));const nr=()=>new URL(location.hash.replace(/^#!?/iu,"").replace("%23","#"),location.origin),cd=(e,t=At)=>{const s=new URLSearchParams(nr().hash.replace("#","")).getAll(e);switch(s.length){case 0:return;case 1:return t(s[0]);default:return s.map(t)}},ud=(e,t=At)=>{const s=Array.from(new URLSearchParams(nr().hash.replace("#","")).entries()).filter(([n])=>n.startsWith(e)).map(([n,i])=>t([n.replace(e,""),i])).filter(([,n])=>n!=null);return Object.fromEntries(s)};var et=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:void 0;function ju(e,t){return typeof t>"u"?t={autoBom:!1}:typeof t!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\uFEFF",e],{type:e.type}):e}function ns(e,t,s){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){bs(n.response,t,s)},n.onerror=function(){console.error("could not download file")},n.send()}function Dn(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch{}return t.status>=200&&t.status<=299}function de(e){try{e.dispatchEvent(new MouseEvent("click"))}catch{var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var Bn=et.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),bs=et.saveAs||(typeof window!="object"||window!==et?function(){}:"download"in HTMLAnchorElement.prototype&&!Bn?function(t,s,n){var i=et.URL||et.webkitURL,r=document.createElement("a");s=s||t.name||"download",r.download=s,r.rel="noopener",typeof t=="string"?(r.href=t,r.origin!==location.origin?Dn(r.href)?ns(t,s,n):de(r,r.target="_blank"):de(r)):(r.href=i.createObjectURL(t),setTimeout(function(){i.revokeObjectURL(r.href)},4e4),setTimeout(function(){de(r)},0))}:"msSaveOrOpenBlob"in navigator?function(t,s,n){if(s=s||t.name||"download",typeof t=="string")if(Dn(t))ns(t,s,n);else{var i=document.createElement("a");i.href=t,i.target="_blank",setTimeout(function(){de(i)})}else navigator.msSaveOrOpenBlob(ju(t,n),s)}:function(t,s,n,i){if(i=i||open("","_blank"),i&&(i.document.title=i.document.body.innerText="downloading..."),typeof t=="string")return ns(t,s,n);var r=t.type==="application/octet-stream",o=/constructor/i.test(et.HTMLElement)||et.safari,a=/CriOS\/[\d]+/.test(navigator.userAgent);if((a||r&&o||Bn)&&typeof FileReader<"u"){var l=new FileReader;l.onloadend=function(){var d=l.result;d=a?d:d.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=d:location=d,i=null},l.readAsDataURL(t)}else{var c=et.URL||et.webkitURL,u=c.createObjectURL(t);i?i.location=u:location.href=u,i=null,setTimeout(function(){c.revokeObjectURL(u)},4e4)}});et.saveAs=bs.saveAs=bs;const ge=function(e){e&&console.log(e)};class ir{constructor(t,s){this._filename=t,this.buffer=null,this.lastDownloadBlobUrl=null,this._mimeType=s}generate(){}createDownloadUrl(){this.buffer||this.generate();const t=new Blob([this.buffer],{type:this._mimeType});return this.lastDownloadBlobUrl&&window.URL.revokeObjectURL(this.lastDownloadBlobUrl),this.lastDownloadBlobUrl=URL.createObjectURL(t),this.lastDownloadBlobUrl}createDownloadLink(t){const s=t instanceof HTMLAnchorElement?t:document.createElement("a");return typeof t=="string"&&(s.innerHTML=t),s.href=this.createDownloadUrl(),s.download=this._filename,s.hasChildNodes||(s.innerText=this._filename),ge("Link created for file "+this._filename),s}}let he=null;class Vu extends ir{constructor(t,s){super(t,"application/zip"),this.files=[],this.createFolderEntries=!!s;const n=new Date;this.timeInt=Math.round(n.getSeconds()/2)|n.getMinutes()<<5|n.getHours()<<11,this.dateInt=n.getFullYear()-1980<<9|n.getMonth()+1<<5|n.getDate()}addFileFromString(t,s){const n=new TextEncoder("utf-8").encode(s);return this.addFileFromUint8Array(t,n),this}addFileFromUint8Array(t,s){if(!(s instanceof Uint8Array))throw new Error("invalid parameter");return this.files.push({name:t.replace("\\","/"),data:s}),this}generate(){ge("NullZip archive generation started");const t={};for(const c of this.files)c.size=c.data?c.data.byteLength:0,c.crc=c.data?this.crc(c.data):0,t[c.name]=c;const s=[];if(this.createFolderEntries){const c=/\//giu;for(const u of this.files){const d=u.name;for(let h=c.exec(d);h!==null;h=c.exec(d)){const f={name:d.substr(0,h.index+1),size:0,crc:0,data:new Uint8Array(0)};typeof t[f.name]>"u"&&(t[f.name]=f,s.push(f))}}}Array.prototype.push.apply(this.files,s),this.files.sort((c,u)=>c.name.length-u.name.length||c.name.localeCompare(u.name));const n=this.files.reduce((c,u)=>c+76+u.name.length*2+u.size,22);ge("Estimated file size: "+n),this.buffer=new ArrayBuffer(n);const i=new Hu(this.buffer),r=this.hex2u8a("504b0304140000000000");for(const c of this.files)c.offs=i.i,i.writeByteArray(r),i.uint16(this.timeInt),i.uint16(this.dateInt),i.uint32(c.crc),i.uint32(c.size),i.uint32(c.size),i.uint16(c.name.length),i.uint16(0),i.writeASCII(c.name),c.size>0&&i.writeByteArray(c.data);const o=i.i,a=this.hex2u8a("504b01023f00140000000000");for(const c of this.files)i.writeByteArray(a),i.uint16(this.timeInt),i.uint16(this.dateInt),i.uint32(c.crc),i.uint32(c.size),i.uint32(c.size),i.uint16(c.name.length),i.uint16(0),i.uint16(0),i.uint16(0),i.uint16(0),i.uint32(c.size?32:48),i.uint32(c.offs),i.writeASCII(c.name);const l=i.i-o;return i.writeByteArray(this.hex2u8a("504b050600000000")),i.uint16(this.files.length),i.uint16(this.files.length),i.uint32(l),i.uint32(o),i.uint16(0),ge("Finished creating zip. size="+i.i+", predicted size="+n),this.buffer}crc(t){let s,n,i=-1;if(!he)for(he=[],n=0;n<256;s=++n){for(let r=0;r<8;r++)s=s&1?3988292384^s>>>1:s>>>1;he[n]=s}for(let r=0;r<t.byteLength;r++)i=i>>>8^he[(i^t[r])&255];return(i^-1)>>>0}hex2u8a(t){const s=new Uint8Array(Math.ceil(t.length/2));for(let n=0;n<s.length;n++)s[n]=parseInt(t.substr(n*2,2),16);return s}}class Hu{constructor(t){this.dw=new DataView(t),this.i=0,this.le=!0,this.utf8encoder=new TextEncoder("utf-8")}uint8(t){this.dw.setUint8(this.i++,t)}uint16(t){this.dw.setUint16(this.i,t,this.le),this.i+=2}uint32(t){this.dw.setUint32(this.i,t,this.le),this.i+=4}writeByteArray(t){if(!(t instanceof Uint8Array))throw new Error("invalid parameter");new Uint8Array(this.dw.buffer).set(t,this.i),this.i+=t.byteLength}writeASCII(t){for(let s=0;s<t.length;s++)this.dw.setUint8(this.i++,t.charCodeAt(s)&255)}}const Dt="application/vnd.openxmlformats-officedocument.spreadsheetml",We="http://schemas.openxmlformats.org",fe=`${We}/spreadsheetml/2006/main`,is=`${We}/package/2006`,Bt=`${We}/officeDocument/2006/relationships`,jn=[{id:164,code:"yyyy&quot;-&quot;mm&quot;-&quot;dd"},{id:165,code:"yyyy&quot;-&quot;mm&quot;-&quot;dd&quot; &quot;h&quot;:&quot;mm&quot;:&quot;ss"}];class dd extends ir{constructor(t,s){super(t,`${Dt}.sheet`),this.sheets=[],this.frozen=!!(s&&s.frozen),this.autoFilter=!!(s&&s.filter)}addSheetFromData(t,s){const n=this.sheets.length+1;return this.sheets.push({id:n,name:this.escapeXml(s||"Sheet"+n),data:t}),this}generate(){const t=[{name:"xl/styles.xml",xml:`<styleSheet xmlns="${fe}" xmlns:mc="${We}/markup-compatibility/2006"><numFmts count="${jn.length}">${jn.map(i=>`<numFmt numFmtId="${i.id}" formatCode="${i.code}" />`)}</numFmts><fonts count="2"><font><sz val="10.0"/><color rgb="FF000000"/><name val="Arial"/></font><font><b/></font></fonts><fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="lightGray"/></fill></fills><borders count="1"><border><left/><right/><top/><bottom/></border></borders><cellStyleXfs count="1"><xf borderId="0" fillId="0" fontId="0" numFmtId="0" applyAlignment="1" applyFont="1"/></cellStyleXfs><cellXfs><xf borderId="0" fillId="0" fontId="0" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment/></xf><xf borderId="0" fillId="0" fontId="1" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment/></xf><xf borderId="0" fillId="0" fontId="0" numFmtId="164" xfId="0" applyAlignment="1" applyFont="1" applyNumberFormat="1"><alignment /></xf><xf borderId="0" fillId="0" fontId="0" numFmtId="165" xfId="0" applyAlignment="1" applyFont="1" applyNumberFormat="1"><alignment /></xf></cellXfs><cellStyles count="1"><cellStyle xfId="0" name="Normal" builtinId="0"/></cellStyles><dxfs count="0"/></styleSheet>`},{name:"xl/sharedStrings.xml",xml:`<sst xmlns="${fe}" count="2" uniqueCount="2"><si><t>text here</t></si></sst>`},{name:"xl/workbook.xml",xml:`<workbook xmlns="${fe}" xmlns:r="${Bt}"><workbookPr/><sheets>`+this.sheets.map(i=>`<sheet state="visible" name="${i.name}" sheetId="${i.id}" r:id="rId${i.id+2}"/>`).join("")+"</sheets><definedNames/><calcPr/></workbook>"},{name:"xl/_rels/workbook.xml.rels",xml:`<Relationships xmlns="${is}/relationships"><Relationship Id="rId1" Type="${Bt}/styles" Target="styles.xml" /><Relationship Id="rId2" Type="${Bt}/sharedStrings" Target="sharedStrings.xml"/>`+this.sheets.map(i=>`<Relationship Id="rId${i.id+2}" Type="${Bt}/worksheet" Target="worksheets/sheet${i.id}.xml"/>`).join("")+"</Relationships>"},{name:"[Content_Types].xml",xml:`<Types xmlns="${is}/content-types"><Default ContentType="application/xml" Extension="xml"/><Default ContentType="application/vnd.openxmlformats-package.relationships+xml" Extension="rels"/>`+this.sheets.map(i=>`<Override ContentType="${Dt}.worksheet+xml" PartName="/xl/worksheets/sheet${i.id}.xml"/>`).join("")+`<Override ContentType="${Dt}.sharedStrings+xml" PartName="/xl/sharedStrings.xml"/><Override ContentType="${Dt}.styles+xml" PartName="/xl/styles.xml" /><Override ContentType="${Dt}.sheet.main+xml" PartName="/xl/workbook.xml"/></Types>`},{name:"_rels/.rels",xml:`<Relationships xmlns="${is}/relationships"><Relationship Id="rId1" Type="${Bt}/officeDocument" Target="xl/workbook.xml"/></Relationships>`}],s=this.sheets.map(i=>{let r=0;const o=i.data.map((a,l)=>{const c=this.frozen&&l===0?' s="1"':"";a.length>r&&(r=a.length);const u=a.map((d,h)=>{const f=this.colName(h)+(l+1);return typeof d=="number"?`<c r="${f}"${c}><v>${d}</v></c>`:d instanceof Date?`<c s="${d.getHours()||d.getMinutes()||d.getSeconds()?3:2}"><v>${this.dateToExcelDate(d)}</v></c>`:`<c t="inlineStr"${c}><is><t>${this.escapeXml(d.toString())}</t></is></c>`});return`<row r="${l+1}">${u.join("")}</row>`});return{name:`xl/worksheets/sheet${i.id}.xml`,xml:`<worksheet xmlns="${fe}"><sheetViews><sheetView workbookViewId="0"`+(this.frozen?' tabSelected="1"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView>':"/>")+`</sheetViews><sheetFormatPr customHeight="1" defaultColWidth="17.5" defaultRowHeight="15.75"/><sheetData>${o.join("")}</sheetData>`+(this.autoFilter?`<autoFilter ref="A1:${this.colName(r)}${i.data.length}"/>`:"")+"</worksheet>"}}),n=new Vu(this._filename,!1);return[...t,...s].forEach(i=>n.addFileFromString(i.name,i.xml)),this.buffer=n.generate(),this.buffer}colName(t){return t<26?String.fromCharCode(t+65):String.fromCharCode(Math.floor(t/26+64))+String.fromCharCode(Math.floor(t%26+65))}escapeXml(t){return t.replace(/[<>&'"]/gu,s=>["&lt;","&gt;","&amp;","&apos;","&quot;"][`<>&'"`.indexOf(s)])}dateToExcelDate(t){return 25569+(t.getTime()-t.getTimezoneOffset()*6e4)/864e5}}const hd=({slot:e,title:t,className:s,width:n="24",height:i="24",styles:r}={})=>P`
  <svg
    slot=${B(e)}
    class=${`announcement-icon ${s??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${n}
    height=${i}
    style=${B(r)}
  >
    ${J(t,()=>Kn`<title>${t}</title>`)}
    <path
      d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"
    />
  </svg>
`,fd=({slot:e,title:t,className:s,width:n="24",height:i="24",styles:r}={})=>P`
  <svg
    slot=${B(e)}
    class=${`error-icon ${s??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${n}
    height=${i}
    style=${B(r)}
  >
    ${J(t,()=>Kn`<title>${t}</title>`)}
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
    />
  </svg>
`,Vn=(e,t)=>{Object.assign(e.style,{display:t?"":"none"})};class Uu extends HTMLElement{static get observedAttributes(){return["opened"]}toggle=bi("height");constructor(){super();const t=new CSSStyleSheet;t.replaceSync(`
      :host { display: block; overflow: hidden; }
		`);const s=this.attachShadow({mode:"open"});s.appendChild(document.createElement("slot")),s.adoptedStyleSheets=[t]}connectedCallback(){Vn(this,this.getAttribute("opened")!=null)}attributeChangedCallback(t,s,n){switch(t){case"opened":{const i=n!=null;return this.isConnected?this.toggle(this,i):Vn(this,i)}}}}customElements.define("cosmoz-collapse",Uu);export{wi as $,B as A,At as B,ud as C,ms as D,cd as E,$ as F,ld as G,nr as H,ca as I,gi as J,R as K,Sc as L,Ls as M,fr as N,bs as O,Vo as P,dd as Q,Fl as R,X as S,Xu as T,hd as U,fd as V,Rt as W,dl as X,Ii as Y,Dc as Z,yi as _,ds as a,Bi as a0,Gu as a1,kc as a2,Qt as a3,Pi as a4,qu as b,V as c,Cs as d,id as e,Ui as f,U as g,jo as h,Ju as i,rd as j,nd as k,sd as l,ed as m,vt as n,J as o,qi as p,Ic as q,Vi as r,Is as s,As as t,nt as u,Zu as v,Qu as w,ad as x,td as y,T as z};
