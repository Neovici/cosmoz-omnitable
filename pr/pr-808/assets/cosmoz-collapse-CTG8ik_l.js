import{f as sa,B as mc,x as R,E as Le,T as Q,m as ra,i as yc,p as vc,v as Ve,s as yt,M as zn}from"./iframe-DdOEiWeh.js";import{_ as _c}from"./preload-helper-PPVm8Dsz.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*bc(t,e){if(t!==void 0){let i=0;for(const n of t)yield e(n,i++)}}/**
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
*/let wc=/(url\()([^)]*)(\))/g,xc=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,oi,se;function Pt(t,e){if(t&&xc.test(t)||t==="//")return t;if(oi===void 0){oi=!1;try{const i=new URL("b","http://a");i.pathname="c%20d",oi=i.href==="http://a/c%20d"}catch{}}if(e||(e=document.baseURI||window.location.href),oi)try{return new URL(t,e).href}catch{return t}return se||(se=document.implementation.createHTMLDocument("temp"),se.base=se.createElement("base"),se.head.appendChild(se.base),se.anchor=se.createElement("a"),se.body.appendChild(se.anchor)),se.base.href=e,se.anchor.href=t,se.anchor.href||t}function Cs(t,e){return t.replace(wc,function(i,n,s,r){return n+"'"+Pt(s.replace(/["']/g,""),e)+"'"+r})}function Ss(t){return t.substring(0,t.lastIndexOf("/")+1)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const tn=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const Cc=tn&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch{return!1}})();let Sc=window.Polymer&&window.Polymer.rootPath||Ss(document.baseURI||window.location.href),Pi=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,zc=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,at=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,Ec=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,Bt=window.Polymer&&window.Polymer.legacyOptimizations||!1,oa=window.Polymer&&window.Polymer.legacyWarnings||!1,Lc=window.Polymer&&window.Polymer.syncInitialRender||!1,Wn=window.Polymer&&window.Polymer.legacyUndefined||!1,Oc=window.Polymer&&window.Polymer.orderedComputed||!1,er=window.Polymer&&window.Polymer.removeNestedTemplates||!1,aa=window.Polymer&&window.Polymer.fastDomIf||!1,qn=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,ai=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,Ac=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Mc=0;const ie=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let i=Mc++;function n(s){let r=s.__mixinSet;if(r&&r[i])return s;let o=e,a=o.get(s);if(!a){a=t(s),o.set(s,a);let l=Object.create(a.__mixinSet||r||null);l[i]=!0,a.__mixinSet=l}return a}return n};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let zs={},la={};function tr(t,e){zs[t]=la[t.toLowerCase()]=e}function ir(t){return zs[t]||la[t.toLowerCase()]}function Pc(t){t.querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}class jt extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,i){if(e){let n=ir(e);return n&&i?n.querySelector(i):n}return null}attributeChangedCallback(e,i,n,s){i!==n&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,i=Pt(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=Ss(i)}return this.__assetpath}register(e){if(e=e||this.id,e){if(at&&ir(e)!==void 0)throw tr(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,tr(e,this),Pc(this)}}}jt.prototype.modules=zs;customElements.define("dom-module",jt);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Tc="link[rel=import][type~=css]",kc="include",nr="shady-unscoped";function Es(t){return jt.import(t)}function sr(t){let e=t.body?t.body:t;const i=Cs(e.textContent,t.baseURI),n=document.createElement("style");return n.textContent=i,n}function Hc(t){const e=t.trim().split(/\s+/),i=[];for(let n=0;n<e.length;n++)i.push(...Rc(e[n]));return i}function Rc(t){const e=Es(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(e._styles===void 0){const i=[];i.push(...Os(e));const n=e.querySelector("template");n&&i.push(...Ls(n,e.assetpath)),e._styles=i}return e._styles}function Ls(t,e){if(!t._styles){const i=[],n=t.content.querySelectorAll("style");for(let s=0;s<n.length;s++){let r=n[s],o=r.getAttribute(kc);o&&i.push(...Hc(o).filter(function(a,l,c){return c.indexOf(a)===l})),e&&(r.textContent=Cs(r.textContent,e)),i.push(r)}t._styles=i}return t._styles}function Nc(t){let e=Es(t);return e?Os(e):[]}function Os(t){const e=[],i=t.querySelectorAll(Tc);for(let n=0;n<i.length;n++){let s=i[n];if(s.import){const r=s.import,o=s.hasAttribute(nr);if(o&&!r._unscopedStyle){const a=sr(r);a.setAttribute(nr,""),r._unscopedStyle=a}else r._style||(r._style=sr(r));e.push(o?r._unscopedStyle:r._style)}}return e}function Ic(t){let e=t.trim().split(/\s+/),i="";for(let n=0;n<e.length;n++)i+=Vc(e[n]);return i}function Vc(t){let e=Es(t);if(e&&e._cssText===void 0){let i=Dc(e),n=e.querySelector("template");n&&(i+=$c(n,e.assetpath)),e._cssText=i||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}function $c(t,e){let i="";const n=Ls(t,e);for(let s=0;s<n.length;s++){let r=n[s];r.parentNode&&r.parentNode.removeChild(r),i+=r.textContent}return i}function Dc(t){let e="",i=Os(t);for(let n=0;n<i.length;n++)e+=i[n].textContent;return e}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const w=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Yn(t){return t.indexOf(".")>=0}function Oe(t){let e=t.indexOf(".");return e===-1?t:t.slice(0,e)}function ca(t,e){return t.indexOf(e+".")===0}function Ut(t,e){return e.indexOf(t+".")===0}function Kt(t,e,i){return e+i.slice(t.length)}function Fc(t,e){return t===e||ca(t,e)||Ut(t,e)}function Lt(t){if(Array.isArray(t)){let e=[];for(let i=0;i<t.length;i++){let n=t[i].toString().split(".");for(let s=0;s<n.length;s++)e.push(n[s])}return e.join(".")}else return t}function ha(t){return Array.isArray(t)?Lt(t).split("."):t.toString().split(".")}function Z(t,e,i){let n=t,s=ha(e);for(let r=0;r<s.length;r++){if(!n)return;let o=s[r];n=n[o]}return i&&(i.path=s.join(".")),n}function rr(t,e,i){let n=t,s=ha(e),r=s[s.length-1];if(s.length>1){for(let o=0;o<s.length-1;o++){let a=s[o];if(n=n[a],!n)return}n[r]=i}else n[e]=i;return s.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ti={},Bc=/-[a-z]/g,jc=/([A-Z])/g;function As(t){return Ti[t]||(Ti[t]=t.indexOf("-")<0?t:t.replace(Bc,e=>e[1].toUpperCase()))}function nn(t){return Ti[t]||(Ti[t]=t.replace(jc,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Uc=0,da=0,nt=[],Kc=0,Jn=!1,ua=document.createTextNode("");new window.MutationObserver(Wc).observe(ua,{characterData:!0});function Wc(){Jn=!1;const t=nt.length;for(let e=0;e<t;e++){let i=nt[e];if(i)try{i()}catch(n){setTimeout(()=>{throw n})}}nt.splice(0,t),da+=t}const Tt={after(t){return{run(e){return window.setTimeout(e,t)},cancel(e){window.clearTimeout(e)}}},run(t,e){return window.setTimeout(t,e)},cancel(t){window.clearTimeout(t)}},Pe={run(t){return Jn||(Jn=!0,ua.textContent=Kc++),nt.push(t),Uc++},cancel(t){const e=t-da;if(e>=0){if(!nt[e])throw new Error("invalid async handle: "+t);nt[e]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const qc=Pe,pa=ie(t=>{class e extends t{static createProperties(n){const s=this.prototype;for(let r in n)r in s||s._createPropertyAccessor(r)}static attributeNameForProperty(n){return n.toLowerCase()}static typeForProperty(n){}_createPropertyAccessor(n,s){this._addPropertyToAttributeMap(n),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[n]||(this.__dataHasAccessor[n]=!0,this._definePropertyAccessor(n,s))}_addPropertyToAttributeMap(n){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let s=this.__dataAttributes[n];return s||(s=this.constructor.attributeNameForProperty(n),this.__dataAttributes[s]=n),s}_definePropertyAccessor(n,s){Object.defineProperty(this,n,{get(){return this.__data[n]},set:s?function(){}:function(r){this._setPendingProperty(n,r,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let n in this.__dataHasAccessor)this.hasOwnProperty(n)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[n]=this[n],delete this[n])}_initializeInstanceProperties(n){Object.assign(this,n)}_setProperty(n,s){this._setPendingProperty(n,s)&&this._invalidateProperties()}_getProperty(n){return this.__data[n]}_setPendingProperty(n,s,r){let o=this.__data[n],a=this._shouldPropertyChange(n,s,o);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(n in this.__dataOld)&&(this.__dataOld[n]=o),this.__data[n]=s,this.__dataPending[n]=s),a}_isPropertyPending(n){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(n))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,qc.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const n=this.__data,s=this.__dataPending,r=this.__dataOld;this._shouldPropertiesChange(n,s,r)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(n,s,r)),this.__dataCounter--}_shouldPropertiesChange(n,s,r){return!!s}_propertiesChanged(n,s,r){}_shouldPropertyChange(n,s,r){return r!==s&&(r===r||s===s)}attributeChangedCallback(n,s,r,o){s!==r&&this._attributeToProperty(n,r),super.attributeChangedCallback&&super.attributeChangedCallback(n,s,r,o)}_attributeToProperty(n,s,r){if(!this.__serializing){const o=this.__dataAttributes,a=o&&o[n]||n;this[a]=this._deserializeValue(s,r||this.constructor.typeForProperty(a))}}_propertyToAttribute(n,s,r){this.__serializing=!0,r=arguments.length<3?this[n]:r,this._valueToNodeAttribute(this,r,s||this.constructor.attributeNameForProperty(n)),this.__serializing=!1}_valueToNodeAttribute(n,s,r){const o=this._serializeValue(s);(r==="class"||r==="name"||r==="slot")&&(n=w(n)),o===void 0?n.removeAttribute(r):n.setAttribute(r,o===""&&window.trustedTypes?window.trustedTypes.emptyScript:o)}_serializeValue(n){switch(typeof n){case"boolean":return n?"":void 0;default:return n?.toString()}}_deserializeValue(n,s){switch(s){case Boolean:return n!==null;case Number:return Number(n);default:return n}}}return e});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const fa={};let li=HTMLElement.prototype;for(;li;){let t=Object.getOwnPropertyNames(li);for(let e=0;e<t.length;e++)fa[t[e]]=!0;li=Object.getPrototypeOf(li)}const Yc=window.trustedTypes?t=>trustedTypes.isHTML(t)||trustedTypes.isScript(t)||trustedTypes.isScriptURL(t):()=>!1;function Jc(t,e){if(!fa[e]){let i=t[e];i!==void 0&&(t.__data?t._setPendingProperty(e,i):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=i))}}const ga=ie(t=>{const e=pa(t);class i extends e{static createPropertiesForAttributes(){let s=this.observedAttributes;for(let r=0;r<s.length;r++)this.prototype._createPropertyAccessor(As(s[r]))}static attributeNameForProperty(s){return nn(s)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(s){for(let r in s)this._setProperty(r,s[r])}_ensureAttribute(s,r){const o=this;o.hasAttribute(s)||this._valueToNodeAttribute(o,r,s)}_serializeValue(s){switch(typeof s){case"object":if(s instanceof Date)return s.toString();if(s){if(Yc(s))return s;try{return JSON.stringify(s)}catch{return""}}default:return super._serializeValue(s)}}_deserializeValue(s,r){let o;switch(r){case Object:try{o=JSON.parse(s)}catch{o=s}break;case Array:try{o=JSON.parse(s)}catch{o=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${s}`)}break;case Date:o=isNaN(s)?String(s):Number(s),o=new Date(o);break;default:o=super._deserializeValue(s,r);break}return o}_definePropertyAccessor(s,r){Jc(this,s),super._definePropertyAccessor(s,r)}_hasAccessor(s){return this.__dataHasAccessor&&this.__dataHasAccessor[s]}_isPropertyPending(s){return!!(this.__dataPending&&s in this.__dataPending)}}return i});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Xc={"dom-if":!0,"dom-repeat":!0};let or=!1,ar=!1;function Gc(){if(!or){or=!0;const t=document.createElement("textarea");t.placeholder="a",ar=t.placeholder===t.textContent}return ar}function Zc(t){Gc()&&t.localName==="textarea"&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}const Qc=(()=>{const t=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:e=>e});return(e,i,n)=>{const s=i.getAttribute(n);if(t&&n.startsWith("on-")){e.setAttribute(n,t.createScript(s,n));return}e.setAttribute(n,s)}})();function eh(t){let e=t.getAttribute("is");if(e&&Xc[e]){let i=t;for(i.removeAttribute("is"),t=i.ownerDocument.createElement(e),i.parentNode.replaceChild(t,i),t.appendChild(i);i.attributes.length;){const{name:n}=i.attributes[0];Qc(t,i,n),i.removeAttribute(n)}}return t}function ma(t,e){let i=e.parentInfo&&ma(t,e.parentInfo);if(i){for(let n=i.firstChild,s=0;n;n=n.nextSibling)if(e.parentIndex===s++)return n}else return t}function th(t,e,i,n){n.id&&(e[n.id]=i)}function ih(t,e,i){if(i.events&&i.events.length)for(let n=0,s=i.events,r;n<s.length&&(r=s[n]);n++)t._addMethodEventListenerToNode(e,r.name,r.value,t)}function nh(t,e,i,n){i.templateInfo&&(e._templateInfo=i.templateInfo,e._parentTemplateInfo=n)}function sh(t,e,i){return t=t._methodHost||t,function(s){t[i]?t[i](s,s.detail):console.warn("listener method `"+i+"` not defined")}}const rh=ie(t=>{class e extends t{static _parseTemplate(n,s){if(!n._templateInfo){let r=n._templateInfo={};r.nodeInfoList=[],r.nestedTemplate=!!s,r.stripWhiteSpace=s&&s.stripWhiteSpace||n.hasAttribute&&n.hasAttribute("strip-whitespace"),this._parseTemplateContent(n,r,{parent:null})}return n._templateInfo}static _parseTemplateContent(n,s,r){return this._parseTemplateNode(n.content,s,r)}static _parseTemplateNode(n,s,r){let o=!1,a=n;return a.localName=="template"&&!a.hasAttribute("preserve-content")?o=this._parseTemplateNestedTemplate(a,s,r)||o:a.localName==="slot"&&(s.hasInsertionPoint=!0),Zc(a),a.firstChild&&this._parseTemplateChildNodes(a,s,r),a.hasAttributes&&a.hasAttributes()&&(o=this._parseTemplateNodeAttributes(a,s,r)||o),o||r.noted}static _parseTemplateChildNodes(n,s,r){if(!(n.localName==="script"||n.localName==="style"))for(let o=n.firstChild,a=0,l;o;o=l){if(o.localName=="template"&&(o=eh(o)),l=o.nextSibling,o.nodeType===Node.TEXT_NODE){let h=l;for(;h&&h.nodeType===Node.TEXT_NODE;)o.textContent+=h.textContent,l=h.nextSibling,n.removeChild(h),h=l;if(s.stripWhiteSpace&&!o.textContent.trim()){n.removeChild(o);continue}}let c={parentIndex:a,parentInfo:r};this._parseTemplateNode(o,s,c)&&(c.infoIndex=s.nodeInfoList.push(c)-1),o.parentNode&&a++}}static _parseTemplateNestedTemplate(n,s,r){let o=n,a=this._parseTemplate(o,s);return(a.content=o.content.ownerDocument.createDocumentFragment()).appendChild(o.content),r.templateInfo=a,!0}static _parseTemplateNodeAttributes(n,s,r){let o=!1,a=Array.from(n.attributes);for(let l=a.length-1,c;c=a[l];l--)o=this._parseTemplateNodeAttribute(n,s,r,c.name,c.value)||o;return o}static _parseTemplateNodeAttribute(n,s,r,o,a){return o.slice(0,3)==="on-"?(n.removeAttribute(o),r.events=r.events||[],r.events.push({name:o.slice(3),value:a}),!0):o==="id"?(r.id=a,!0):!1}static _contentForTemplate(n){let s=n._templateInfo;return s&&s.content||n.content}_stampTemplate(n,s){n&&!n.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(n),s=s||this.constructor._parseTemplate(n);let r=s.nodeInfoList,o=s.content||n.content,a=document.importNode(o,!0);a.__noInsertionPoint=!s.hasInsertionPoint;let l=a.nodeList=new Array(r.length);a.$={};for(let c=0,h=r.length,d;c<h&&(d=r[c]);c++){let u=l[c]=ma(a,d);th(this,a.$,u,d),nh(this,u,d,s),ih(this,u,d)}return a=a,a}_addMethodEventListenerToNode(n,s,r,o){o=o||n;let a=sh(o,s,r);return this._addEventListenerToNode(n,s,a),a}_addEventListenerToNode(n,s,r){n.addEventListener(s,r)}_removeEventListenerFromNode(n,s,r){n.removeEventListener(s,r)}}return e});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let Wt=0;const qt=[],k={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},ya="__computeInfo",oh=/[A-Z]/;function En(t,e,i){let n=t[e];if(!n)n=t[e]={};else if(!t.hasOwnProperty(e)&&(n=t[e]=Object.create(t[e]),i))for(let s in n){let r=n[s],o=n[s]=Array(r.length);for(let a=0;a<r.length;a++)o[a]=r[a]}return n}function Ot(t,e,i,n,s,r){if(e){let o=!1;const a=Wt++;for(let l in i){let c=s?Oe(l):l,h=e[c];if(h)for(let d=0,u=h.length,p;d<u&&(p=h[d]);d++)(!p.info||p.info.lastRun!==a)&&(!s||Ms(l,p.trigger))&&(p.info&&(p.info.lastRun=a),p.fn(t,l,i,n,p.info,s,r),o=!0)}return o}return!1}function ah(t,e,i,n,s,r,o,a){let l=!1,c=o?Oe(n):n,h=e[c];if(h)for(let d=0,u=h.length,p;d<u&&(p=h[d]);d++)(!p.info||p.info.lastRun!==i)&&(!o||Ms(n,p.trigger))&&(p.info&&(p.info.lastRun=i),p.fn(t,n,s,r,p.info,o,a),l=!0);return l}function Ms(t,e){if(e){let i=e.name;return i==t||!!(e.structured&&ca(i,t))||!!(e.wildcard&&Ut(i,t))}else return!0}function lr(t,e,i,n,s){let r=typeof s.method=="string"?t[s.method]:s.method,o=s.property;r?r.call(t,t.__data[o],n[o]):s.dynamicFn||console.warn("observer method `"+s.method+"` not defined")}function lh(t,e,i,n,s){let r=t[k.NOTIFY],o,a=Wt++;for(let c in e)e[c]&&(r&&ah(t,r,a,c,i,n,s)||s&&ch(t,c,i))&&(o=!0);let l;o&&(l=t.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function ch(t,e,i){let n=Oe(e);if(n!==e){let s=nn(n)+"-changed";return va(t,s,i[e],e),!0}return!1}function va(t,e,i,n){let s={value:i,queueProperty:!0};n&&(s.path=n),w(t).dispatchEvent(new CustomEvent(e,{detail:s}))}function hh(t,e,i,n,s,r){let a=(r?Oe(e):e)!=e?e:null,l=a?Z(t,a):t.__data[e];a&&l===void 0&&(l=i[e]),va(t,s.eventName,l,a)}function dh(t,e,i,n,s){let r,o=t.detail,a=o&&o.path;a?(n=Kt(i,n,a),r=o&&o.value):r=t.currentTarget[i],r=s?!r:r,(!e[k.READ_ONLY]||!e[k.READ_ONLY][n])&&e._setPendingPropertyOrPath(n,r,!0,!!a)&&(!o||!o.queueProperty)&&e._invalidateProperties()}function uh(t,e,i,n,s){let r=t.__data[e];Pi&&(r=Pi(r,s.attrName,"attribute",t)),t._propertyToAttribute(e,s.attrName,r)}function ph(t,e,i,n){let s=t[k.COMPUTE];if(s)if(Oc){Wt++;const r=gh(t),o=[];for(let l in e)cr(l,s,o,r,n);let a;for(;a=o.shift();)_a(t,"",e,i,a)&&cr(a.methodInfo,s,o,r,n);Object.assign(i,t.__dataOld),Object.assign(e,t.__dataPending),t.__dataPending=null}else{let r=e;for(;Ot(t,s,r,i,n);)Object.assign(i,t.__dataOld),Object.assign(e,t.__dataPending),r=t.__dataPending,t.__dataPending=null}}const fh=(t,e,i)=>{let n=0,s=e.length-1,r=-1;for(;n<=s;){const o=n+s>>1,a=i.get(e[o].methodInfo)-i.get(t.methodInfo);if(a<0)n=o+1;else if(a>0)s=o-1;else{r=o;break}}r<0&&(r=s+1),e.splice(r,0,t)},cr=(t,e,i,n,s)=>{const r=s?Oe(t):t,o=e[r];if(o)for(let a=0;a<o.length;a++){const l=o[a];l.info.lastRun!==Wt&&(!s||Ms(t,l.trigger))&&(l.info.lastRun=Wt,fh(l.info,i,n))}};function gh(t){let e=t.constructor.__orderedComputedDeps;if(!e){e=new Map;const i=t[k.COMPUTE];let{counts:n,ready:s,total:r}=mh(t),o;for(;o=s.shift();){e.set(o,e.size);const a=i[o];a&&a.forEach(l=>{const c=l.info.methodInfo;--r,--n[c]===0&&s.push(c)})}r!==0&&console.warn(`Computed graph for ${t.localName} incomplete; circular?`),t.constructor.__orderedComputedDeps=e}return e}function mh(t){const e=t[ya],i={},n=t[k.COMPUTE],s=[];let r=0;for(let o in e){const a=e[o];r+=i[o]=a.args.filter(l=>!l.literal).length+(a.dynamicFn?1:0)}for(let o in n)e[o]||s.push(o);return{counts:i,ready:s,total:r}}function _a(t,e,i,n,s){let r=Xn(t,e,i,n,s);if(r===qt)return!1;let o=s.methodInfo;return t.__dataHasAccessor&&t.__dataHasAccessor[o]?t._setPendingProperty(o,r,!0):(t[o]=r,!1)}function yh(t,e,i){let n=t.__dataLinkedPaths;if(n){let s;for(let r in n){let o=n[r];Ut(r,e)?(s=Kt(r,o,e),t._setPendingPropertyOrPath(s,i,!0,!0)):Ut(o,e)&&(s=Kt(o,r,e),t._setPendingPropertyOrPath(s,i,!0,!0))}}}function Ln(t,e,i,n,s,r,o){i.bindings=i.bindings||[];let a={kind:n,target:s,parts:r,literal:o,isCompound:r.length!==1};if(i.bindings.push(a),xh(a)){let{event:c,negate:h}=a.parts[0];a.listenerEvent=c||nn(s)+"-changed",a.listenerNegate=h}let l=e.nodeInfoList.length;for(let c=0;c<a.parts.length;c++){let h=a.parts[c];h.compoundIndex=c,vh(t,e,a,h,l)}}function vh(t,e,i,n,s){if(!n.literal)if(i.kind==="attribute"&&i.target[0]==="-")console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let r=n.dependencies,o={index:s,binding:i,part:n,evaluator:t};for(let a=0;a<r.length;a++){let l=r[a];typeof l=="string"&&(l=wa(l),l.wildcard=!0),t._addTemplatePropertyEffect(e,l.rootProperty,{fn:_h,info:o,trigger:l})}}}function _h(t,e,i,n,s,r,o){let a=o[s.index],l=s.binding,c=s.part;if(r&&c.source&&e.length>c.source.length&&l.kind=="property"&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let h=i[e];e=Kt(c.source,l.target,e),a._setPendingPropertyOrPath(e,h,!1,!0)&&t._enqueueClient(a)}else{let h=s.evaluator._evaluateBinding(t,c,e,i,n,r);h!==qt&&bh(t,a,l,c,h)}}function bh(t,e,i,n,s){if(s=wh(e,s,i,n),Pi&&(s=Pi(s,i.target,i.kind,e)),i.kind=="attribute")t._valueToNodeAttribute(e,s,i.target);else{let r=i.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[r]?(!e[k.READ_ONLY]||!e[k.READ_ONLY][r])&&e._setPendingProperty(r,s)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,r,s)}}function wh(t,e,i,n){if(i.isCompound){let s=t.__dataCompoundStorage[i.target];s[n.compoundIndex]=e,e=s.join("")}return i.kind!=="attribute"&&(i.target==="textContent"||i.target==="value"&&(t.localName==="input"||t.localName==="textarea"))&&(e=e??""),e}function xh(t){return!!t.target&&t.kind!="attribute"&&t.kind!="text"&&!t.isCompound&&t.parts[0].mode==="{"}function Ch(t,e){let{nodeList:i,nodeInfoList:n}=e;if(n.length)for(let s=0;s<n.length;s++){let r=n[s],o=i[s],a=r.bindings;if(a)for(let l=0;l<a.length;l++){let c=a[l];Sh(o,c),zh(o,t,c)}o.__dataHost=t}}function Sh(t,e){if(e.isCompound){let i=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),n=e.parts,s=new Array(n.length);for(let o=0;o<n.length;o++)s[o]=n[o].literal;let r=e.target;i[r]=s,e.literal&&e.kind=="property"&&(r==="className"&&(t=w(t)),t[r]=e.literal)}}function zh(t,e,i){if(i.listenerEvent){let n=i.parts[0];t.addEventListener(i.listenerEvent,function(s){dh(s,e,i.target,n.source,n.negate)})}}function hr(t,e,i,n,s,r){r=e.static||r&&(typeof r!="object"||r[e.methodName]);let o={methodName:e.methodName,args:e.args,methodInfo:s,dynamicFn:r};for(let a=0,l;a<e.args.length&&(l=e.args[a]);a++)l.literal||t._addPropertyEffect(l.rootProperty,i,{fn:n,info:o,trigger:l});return r&&t._addPropertyEffect(e.methodName,i,{fn:n,info:o}),o}function Xn(t,e,i,n,s){let r=t._methodHost||t,o=r[s.methodName];if(o){let a=t._marshalArgs(s.args,e,i);return a===qt?qt:o.apply(r,a)}else s.dynamicFn||console.warn("method `"+s.methodName+"` not defined")}const Eh=[],ba="(?:[a-zA-Z_$][\\w.:$\\-*]*)",Lh="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",Oh="(?:'(?:[^'\\\\]|\\\\.)*')",Ah='(?:"(?:[^"\\\\]|\\\\.)*")',Mh="(?:"+Oh+"|"+Ah+")",dr="(?:("+ba+"|"+Lh+"|"+Mh+")\\s*)",Ph="(?:"+dr+"(?:,\\s*"+dr+")*)",Th="(?:\\(\\s*(?:"+Ph+"?)\\)\\s*)",kh="("+ba+"\\s*"+Th+"?)",Hh="(\\[\\[|{{)\\s*",Rh="(?:]]|}})",Nh="(?:(!)\\s*)?",Ih=Hh+Nh+kh+Rh,ur=new RegExp(Ih,"g");function pr(t){let e="";for(let i=0;i<t.length;i++){let n=t[i].literal;e+=n||""}return e}function On(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let n={methodName:e[1],static:!0,args:Eh};if(e[2].trim()){let s=e[2].replace(/\\,/g,"&comma;").split(",");return Vh(s,n)}else return n}return null}function Vh(t,e){return e.args=t.map(function(i){let n=wa(i);return n.literal||(e.static=!1),n},this),e}function wa(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:e,value:"",literal:!1},n=e[0];switch(n==="-"&&(n=e[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':i.value=e.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(e),i.literal=!0;break}return i.literal||(i.rootProperty=Oe(e),i.structured=Yn(e),i.structured&&(i.wildcard=e.slice(-2)==".*",i.wildcard&&(i.name=e.slice(0,-2)))),i}function fr(t,e,i){let n=Z(t,i);return n===void 0&&(n=e[i]),n}function xa(t,e,i,n){const s={indexSplices:n};Wn&&!t._overrideLegacyUndefined&&(e.splices=s),t.notifyPath(i+".splices",s),t.notifyPath(i+".length",e.length),Wn&&!t._overrideLegacyUndefined&&(s.indexSplices=[])}function vt(t,e,i,n,s,r){xa(t,e,i,[{index:n,addedCount:s,removed:r,object:e,type:"splice"}])}function $h(t){return t[0].toUpperCase()+t.substring(1)}const sn=ie(t=>{const e=rh(ga(t));class i extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return k}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(_t.length){let s=_t[_t.length-1];s._enqueueClient(this),this.__dataHost=s}}_initializeProtoProperties(s){this.__data=Object.create(s),this.__dataPending=Object.create(s),this.__dataOld={}}_initializeInstanceProperties(s){let r=this[k.READ_ONLY];for(let o in s)(!r||!r[o])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[o]=this.__dataPending[o]=s[o])}_addPropertyEffect(s,r,o){this._createPropertyAccessor(s,r==k.READ_ONLY);let a=En(this,r,!0)[s];a||(a=this[r][s]=[]),a.push(o)}_removePropertyEffect(s,r,o){let a=En(this,r,!0)[s],l=a.indexOf(o);l>=0&&a.splice(l,1)}_hasPropertyEffect(s,r){let o=this[r];return!!(o&&o[s])}_hasReadOnlyEffect(s){return this._hasPropertyEffect(s,k.READ_ONLY)}_hasNotifyEffect(s){return this._hasPropertyEffect(s,k.NOTIFY)}_hasReflectEffect(s){return this._hasPropertyEffect(s,k.REFLECT)}_hasComputedEffect(s){return this._hasPropertyEffect(s,k.COMPUTE)}_setPendingPropertyOrPath(s,r,o,a){if(a||Oe(Array.isArray(s)?s[0]:s)!==s){if(!a){let l=Z(this,s);if(s=rr(this,s,r),!s||!super._shouldPropertyChange(s,r,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(s,r,o))return yh(this,s,r),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[s])return this._setPendingProperty(s,r,o);this[s]=r}return!1}_setUnmanagedPropertyToNode(s,r,o){(o!==s[r]||typeof o=="object")&&(r==="className"&&(s=w(s)),s[r]=o)}_setPendingProperty(s,r,o){let a=this.__dataHasPaths&&Yn(s),l=a?this.__dataTemp:this.__data;return this._shouldPropertyChange(s,r,l[s])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),s in this.__dataOld||(this.__dataOld[s]=this.__data[s]),a?this.__dataTemp[s]=r:this.__data[s]=r,this.__dataPending[s]=r,(a||this[k.NOTIFY]&&this[k.NOTIFY][s])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[s]=o),!0):!1}_setProperty(s,r){this._setPendingProperty(s,r,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(s){this.__dataPendingClients=this.__dataPendingClients||[],s!==this&&this.__dataPendingClients.push(s)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let s=this.__dataPendingClients;if(s){this.__dataPendingClients=null;for(let r=0;r<s.length;r++){let o=s[r];o.__dataEnabled?o.__dataPending&&o._flushProperties():o._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(s,r){for(let o in s)(r||!this[k.READ_ONLY]||!this[k.READ_ONLY][o])&&this._setPendingPropertyOrPath(o,s[o],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(s,r,o){let a=this.__dataHasPaths;this.__dataHasPaths=!1;let l;ph(this,r,o,a),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(r,o,a),this._flushClients(),Ot(this,this[k.REFLECT],r,o,a),Ot(this,this[k.OBSERVE],r,o,a),l&&lh(this,l,r,o,a),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(s,r,o){this[k.PROPAGATE]&&Ot(this,this[k.PROPAGATE],s,r,o),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,s,r,o)}_runEffectsForTemplate(s,r,o,a){const l=(c,h)=>{Ot(this,s.propertyEffects,c,o,h,s.nodeList);for(let d=s.firstChild;d;d=d.nextSibling)this._runEffectsForTemplate(d,c,o,h)};s.runEffects?s.runEffects(l,r,a):l(r,a)}linkPaths(s,r){s=Lt(s),r=Lt(r),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[s]=r}unlinkPaths(s){s=Lt(s),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[s]}notifySplices(s,r){let o={path:""},a=Z(this,s,o);xa(this,a,o.path,r)}get(s,r){return Z(r||this,s)}set(s,r,o){o?rr(o,s,r):(!this[k.READ_ONLY]||!this[k.READ_ONLY][s])&&this._setPendingPropertyOrPath(s,r,!0)&&this._invalidateProperties()}push(s,...r){let o={path:""},a=Z(this,s,o),l=a.length,c=a.push(...r);return r.length&&vt(this,a,o.path,l,r.length,[]),c}pop(s){let r={path:""},o=Z(this,s,r),a=!!o.length,l=o.pop();return a&&vt(this,o,r.path,o.length,0,[l]),l}splice(s,r,o,...a){let l={path:""},c=Z(this,s,l);r<0?r=c.length-Math.floor(-r):r&&(r=Math.floor(r));let h;return arguments.length===2?h=c.splice(r):h=c.splice(r,o,...a),(a.length||h.length)&&vt(this,c,l.path,r,a.length,h),h}shift(s){let r={path:""},o=Z(this,s,r),a=!!o.length,l=o.shift();return a&&vt(this,o,r.path,0,0,[l]),l}unshift(s,...r){let o={path:""},a=Z(this,s,o),l=a.unshift(...r);return r.length&&vt(this,a,o.path,0,r.length,[]),l}notifyPath(s,r){let o;if(arguments.length==1){let a={path:""};r=Z(this,s,a),o=a.path}else Array.isArray(s)?o=Lt(s):o=s;this._setPendingPropertyOrPath(o,r,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(s,r){this._addPropertyEffect(s,k.READ_ONLY),r&&(this["_set"+$h(s)]=function(o){this._setProperty(s,o)})}_createPropertyObserver(s,r,o){let a={property:s,method:r,dynamicFn:!!o};this._addPropertyEffect(s,k.OBSERVE,{fn:lr,info:a,trigger:{name:s}}),o&&this._addPropertyEffect(r,k.OBSERVE,{fn:lr,info:a,trigger:{name:r}})}_createMethodObserver(s,r){let o=On(s);if(!o)throw new Error("Malformed observer expression '"+s+"'");hr(this,o,k.OBSERVE,Xn,null,r)}_createNotifyingProperty(s){this._addPropertyEffect(s,k.NOTIFY,{fn:hh,info:{eventName:nn(s)+"-changed",property:s}})}_createReflectedProperty(s){let r=this.constructor.attributeNameForProperty(s);r[0]==="-"?console.warn("Property "+s+" cannot be reflected to attribute "+r+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(s,k.REFLECT,{fn:uh,info:{attrName:r}})}_createComputedProperty(s,r,o){let a=On(r);if(!a)throw new Error("Malformed computed expression '"+r+"'");const l=hr(this,a,k.COMPUTE,_a,s,o);En(this,ya)[s]=l}_marshalArgs(s,r,o){const a=this.__data,l=[];for(let c=0,h=s.length;c<h;c++){let{name:d,structured:u,wildcard:p,value:f,literal:g}=s[c];if(!g)if(p){const m=Ut(d,r),y=fr(a,o,m?r:d);f={path:m?r:d,value:y,base:m?Z(a,d):y}}else f=u?fr(a,o,d):a[d];if(Wn&&!this._overrideLegacyUndefined&&f===void 0&&s.length>1)return qt;l[c]=f}return l}static addPropertyEffect(s,r,o){this.prototype._addPropertyEffect(s,r,o)}static createPropertyObserver(s,r,o){this.prototype._createPropertyObserver(s,r,o)}static createMethodObserver(s,r){this.prototype._createMethodObserver(s,r)}static createNotifyingProperty(s){this.prototype._createNotifyingProperty(s)}static createReadOnlyProperty(s,r){this.prototype._createReadOnlyProperty(s,r)}static createReflectedProperty(s){this.prototype._createReflectedProperty(s)}static createComputedProperty(s,r,o){this.prototype._createComputedProperty(s,r,o)}static bindTemplate(s){return this.prototype._bindTemplate(s)}_bindTemplate(s,r){let o=this.constructor._parseTemplate(s),a=this.__preBoundTemplateInfo==o;if(!a)for(let l in o.propertyEffects)this._createPropertyAccessor(l);if(r)if(o=Object.create(o),o.wasPreBound=a,!this.__templateInfo)this.__templateInfo=o;else{const l=s._parentTemplateInfo||this.__templateInfo,c=l.lastChild;o.parent=l,l.lastChild=o,o.previousSibling=c,c?c.nextSibling=o:l.firstChild=o}else this.__preBoundTemplateInfo=o;return o}static _addTemplatePropertyEffect(s,r,o){let a=s.hostProps=s.hostProps||{};a[r]=!0;let l=s.propertyEffects=s.propertyEffects||{};(l[r]=l[r]||[]).push(o)}_stampTemplate(s,r){r=r||this._bindTemplate(s,!0),_t.push(this);let o=super._stampTemplate(s,r);if(_t.pop(),r.nodeList=o.nodeList,!r.wasPreBound){let a=r.childNodes=[];for(let l=o.firstChild;l;l=l.nextSibling)a.push(l)}return o.templateInfo=r,Ch(this,r),this.__dataClientsReady&&(this._runEffectsForTemplate(r,this.__data,null,!1),this._flushClients()),o}_removeBoundDom(s){const r=s.templateInfo,{previousSibling:o,nextSibling:a,parent:l}=r;o?o.nextSibling=a:l&&(l.firstChild=a),a?a.previousSibling=o:l&&(l.lastChild=o),r.nextSibling=r.previousSibling=null;let c=r.childNodes;for(let h=0;h<c.length;h++){let d=c[h];w(w(d).parentNode).removeChild(d)}}static _parseTemplateNode(s,r,o){let a=e._parseTemplateNode.call(this,s,r,o);if(s.nodeType===Node.TEXT_NODE){let l=this._parseBindings(s.textContent,r);l&&(s.textContent=pr(l)||" ",Ln(this,r,o,"text","textContent",l),a=!0)}return a}static _parseTemplateNodeAttribute(s,r,o,a,l){let c=this._parseBindings(l,r);if(c){let h=a,d="property";oh.test(a)?d="attribute":a[a.length-1]=="$"&&(a=a.slice(0,-1),d="attribute");let u=pr(c);return u&&d=="attribute"&&(a=="class"&&s.hasAttribute("class")&&(u+=" "+s.getAttribute(a)),s.setAttribute(a,u)),d=="attribute"&&h=="disable-upgrade$"&&s.setAttribute(a,""),s.localName==="input"&&h==="value"&&s.setAttribute(h,""),s.removeAttribute(h),d==="property"&&(a=As(a)),Ln(this,r,o,d,a,c,u),!0}else return e._parseTemplateNodeAttribute.call(this,s,r,o,a,l)}static _parseTemplateNestedTemplate(s,r,o){let a=e._parseTemplateNestedTemplate.call(this,s,r,o);const l=s.parentNode,c=o.templateInfo,h=l.localName==="dom-if",d=l.localName==="dom-repeat";er&&(h||d)&&(l.removeChild(s),o=o.parentInfo,o.templateInfo=c,o.noted=!0,a=!1);let u=c.hostProps;if(aa&&h)u&&(r.hostProps=Object.assign(r.hostProps||{},u),er||(o.parentInfo.noted=!0));else{let p="{";for(let f in u){let g=[{mode:p,source:f,dependencies:[f],hostProp:!0}];Ln(this,r,o,"property","_host_"+f,g)}}return a}static _parseBindings(s,r){let o=[],a=0,l;for(;(l=ur.exec(s))!==null;){l.index>a&&o.push({literal:s.slice(a,l.index)});let c=l[1][0],h=!!l[2],d=l[3].trim(),u=!1,p="",f=-1;c=="{"&&(f=d.indexOf("::"))>0&&(p=d.substring(f+2),d=d.substring(0,f),u=!0);let g=On(d),m=[];if(g){let{args:y,methodName:v}=g;for(let b=0;b<y.length;b++){let x=y[b];x.literal||m.push(x)}let _=r.dynamicFns;(_&&_[v]||g.static)&&(m.push(v),g.dynamicFn=!0)}else m.push(d);o.push({source:d,mode:c,negate:h,customEvent:u,signature:g,dependencies:m,event:p}),a=ur.lastIndex}if(a&&a<s.length){let c=s.substring(a);c&&o.push({literal:c})}return o.length?o:null}static _evaluateBinding(s,r,o,a,l,c){let h;return r.signature?h=Xn(s,o,a,l,r.signature):o!=r.source?h=Z(s,r.source):c&&Yn(o)?h=Z(s,o):h=s.__data[o],r.negate&&(h=!h),h}}return i}),_t=[];/**
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
*/function Dh(t){const e={};for(let i in t){const n=t[i];e[i]=typeof n=="function"?{type:n}:n}return e}const Fh=ie(t=>{const e=pa(t);function i(r){const o=Object.getPrototypeOf(r);return o.prototype instanceof s?o:null}function n(r){if(!r.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",r))){let o=null;if(r.hasOwnProperty(JSCompiler_renameProperty("properties",r))){const a=r.properties;a&&(o=Dh(a))}r.__ownProperties=o}return r.__ownProperties}class s extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const o=this._properties;this.__observedAttributes=o?Object.keys(o).map(a=>this.prototype._addPropertyToAttributeMap(a)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const o=i(this);o&&o.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const o=n(this);o&&this.createProperties(o)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const o=i(this);this.__properties=Object.assign({},o&&o._properties,n(this))}return this.__properties}static typeForProperty(o){const a=this._properties[o];return a&&a.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return s});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const Bh="3.5.2",Gn=window.ShadyCSS&&window.ShadyCSS.cssBuild,rn=ie(t=>{const e=Fh(sn(t));function i(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let c=l._properties;for(let h in c){let d=c[h];"value"in d&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[h]=d)}}return l.__propertyDefaults}function n(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function s(l,c,h,d){h.computed&&(h.readOnly=!0),h.computed&&(l._hasReadOnlyEffect(c)?console.warn(`Cannot redefine computed property '${c}'.`):l._createComputedProperty(c,h.computed,d)),h.readOnly&&!l._hasReadOnlyEffect(c)?l._createReadOnlyProperty(c,!h.computed):h.readOnly===!1&&l._hasReadOnlyEffect(c)&&console.warn(`Cannot make readOnly property '${c}' non-readOnly.`),h.reflectToAttribute&&!l._hasReflectEffect(c)?l._createReflectedProperty(c):h.reflectToAttribute===!1&&l._hasReflectEffect(c)&&console.warn(`Cannot make reflected property '${c}' non-reflected.`),h.notify&&!l._hasNotifyEffect(c)?l._createNotifyingProperty(c):h.notify===!1&&l._hasNotifyEffect(c)&&console.warn(`Cannot make notify property '${c}' non-notify.`),h.observer&&l._createPropertyObserver(c,h.observer,d[h.observer]),l._addPropertyToAttributeMap(c)}function r(l,c,h,d){if(!Gn){const u=c.content.querySelectorAll("style"),p=Ls(c),f=Nc(h),g=c.content.firstElementChild;for(let y=0;y<f.length;y++){let v=f[y];v.textContent=l._processStyleText(v.textContent,d),c.content.insertBefore(v,g)}let m=0;for(let y=0;y<p.length;y++){let v=p[y],_=u[m];_!==v?(v=v.cloneNode(!0),_.parentNode.insertBefore(v,_)):m++,v.textContent=l._processStyleText(v.textContent,d)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(c,h),Ac&&Gn&&Cc){const u=c.content.querySelectorAll("style");if(u){let p="";Array.from(u).forEach(f=>{p+=f.textContent,f.parentNode.removeChild(f)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(p)}}}function o(l){let c=null;if(l&&(!at||Ec)&&(c=jt.import(l,"template"),at&&!c))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return c}class a extends e{static get polymerElementVersion(){return Bh}static _finalizeClass(){e._finalizeClass.call(this);const c=n(this);c&&this.createObservers(c,this._properties),this._prepareTemplate()}static _prepareTemplate(){let c=this.template;c&&(typeof c=="string"?(console.error("template getter must return HTMLTemplateElement"),c=null):Bt||(c=c.cloneNode(!0))),this.prototype._template=c}static createProperties(c){for(let h in c)s(this.prototype,h,c[h],c)}static createObservers(c,h){const d=this.prototype;for(let u=0;u<c.length;u++)d._createMethodObserver(c[u],h)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let c=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof c=="function"&&(c=c()),this._template=c!==void 0?c:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&o(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(c){this._template=c}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const c=this.importMeta;if(c)this._importPath=Ss(c.url);else{const h=jt.import(this.is);this._importPath=h&&h.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Sc,this.importPath=this.constructor.importPath;let c=i(this.constructor);if(c)for(let h in c){let d=c[h];if(this._canApplyPropertyDefault(h)){let u=typeof d.value=="function"?d.value.call(this):d.value;this._hasAccessor(h)?this._setPendingProperty(h,u,!0):this[h]=u}}}_canApplyPropertyDefault(c){return!this.hasOwnProperty(c)}static _processStyleText(c,h){return Cs(c,h)}static _finalizeTemplate(c){const h=this.prototype._template;if(h&&!h.__polymerFinalized){h.__polymerFinalized=!0;const d=this.importPath,u=d?Pt(d):"";r(this,h,c,u),this.prototype._bindTemplate(h)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(c){const h=w(this);if(h.attachShadow)return c?(h.shadowRoot||(h.attachShadow({mode:"open",shadyUpgradeFragment:c}),h.shadowRoot.appendChild(c),this.constructor._styleSheet&&(h.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Lc&&window.ShadyDOM&&window.ShadyDOM.flushInitial(h.shadowRoot),h.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(c){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,c)}resolveUrl(c,h){return!h&&this.importPath&&(h=Pt(this.importPath)),Pt(c,h)}static _parseTemplateContent(c,h,d){return h.dynamicFns=h.dynamicFns||this._properties,e._parseTemplateContent.call(this,c,h,d)}static _addTemplatePropertyEffect(c,h,d){return oa&&!(h in this._properties)&&!(d.info.part.signature&&d.info.part.signature.static)&&!d.info.part.hostProp&&!c.nestedTemplate&&console.warn(`Property '${h}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,c,h,d)}}return a});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const gr=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:t=>t});class Ca{constructor(e,i){za(e,i);const n=i.reduce((s,r,o)=>s+Sa(r)+e[o+1],e[0]);this.value=n.toString()}toString(){return this.value}}function Sa(t){if(t instanceof Ca)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}function jh(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof Ca)return Sa(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}const q=function(e,...i){za(e,i);const n=document.createElement("template");let s=i.reduce((r,o,a)=>r+jh(o)+e[a+1],e[0]);return gr&&(s=gr.createHTML(s)),n.innerHTML=s,n},za=(t,e)=>{if(!Array.isArray(t)||!Array.isArray(t.raw)||e.length!==t.length-1)throw new TypeError("Invalid call to the html template tag")};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ei=rn(HTMLElement);let ki,Ea=0;function mr(t){ki=t}function yr(){ki=null,Ea=0}function Uh(){return Ea++}const An=Symbol("haunted.phase"),Ci=Symbol("haunted.hook"),vr=Symbol("haunted.update"),_r=Symbol("haunted.commit"),Fe=Symbol("haunted.effects"),kt=Symbol("haunted.layoutEffects"),Zn="haunted.context";class Kh{update;host;virtual;[Ci];[Fe];[kt];constructor(e,i){this.update=e,this.host=i,this[Ci]=new Map,this[Fe]=[],this[kt]=[]}run(e){mr(this);let i=e();return yr(),i}_runEffects(e){let i=this[e];mr(this);for(let n of i)n.call(this);yr()}runEffects(){this._runEffects(Fe)}runLayoutEffects(){this._runEffects(kt)}teardown(){this[Ci].forEach(i=>{typeof i.teardown=="function"&&i.teardown(!0)})}}const Wh=Promise.resolve().then.bind(Promise.resolve());function La(){let t=[],e;function i(){e=null;let n=t;t=[];for(var s=0,r=n.length;s<r;s++)n[s]()}return function(n){t.push(n),e==null&&(e=Wh(i))}}const qh=La(),br=La();class Yh{renderer;host;state;[An];_updateQueued;_active;constructor(e,i){this.renderer=e,this.host=i,this.state=new Kh(this.update.bind(this),i),this[An]=null,this._updateQueued=!1,this._active=!0}update(){this._active&&(this._updateQueued||(qh(()=>{let e=this.handlePhase(vr);br(()=>{this.handlePhase(_r,e),br(()=>{this.handlePhase(Fe)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,i){switch(this[An]=e,e){case _r:this.commit(i),this.runEffects(kt);return;case vr:return this.render();case Fe:return this.runEffects(Fe)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const Ps=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},Jh=t=>t?.map(e=>typeof e=="string"?Ps(e):e),Xh=(t,...e)=>t.flatMap((i,n)=>[i,e[n]||""]).join(""),ce=Xh,Gh=(t="")=>t.replace(/-+([a-z])?/g,(e,i)=>i?i.toUpperCase():"");function Zh(t){class e extends Yh{frag;renderResult;constructor(s,r,o){super(s,o||r),this.frag=r}commit(s){this.renderResult=t(s,this.frag)}}function i(n,s,r){const o=(r||s||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:l=!0,shadowRootInit:c={},styleSheets:h}=r||s||{},d=Jh(n.styleSheets||h);class u extends o{_scheduler;static get observedAttributes(){return n.observedAttributes||a||[]}constructor(){if(super(),l===!1)this._scheduler=new e(n,this);else{const m=this.attachShadow({mode:"open",...c});d&&(m.adoptedStyleSheets=d),this._scheduler=new e(n,m,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(m,y,v){if(y===v)return;let _=v===""?!0:v;Reflect.set(this,Gh(m),_)}}function p(g){let m=g,y=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return m},set(v){y&&m===v||(y=!0,m=v,this._scheduler&&this._scheduler.update())}})}const f=new Proxy(o.prototype,{getPrototypeOf(g){return g},set(g,m,y,v){let _;return m in g?(_=Object.getOwnPropertyDescriptor(g,m),_&&_.set?(_.set.call(v,y),!0):(Reflect.set(g,m,y,v),!0)):(typeof m=="symbol"||m[0]==="_"?_={enumerable:!0,configurable:!0,writable:!0,value:y}:_=p(y),Object.defineProperty(v,m,_),_.set&&_.set.call(v,y),!0)}});return Object.setPrototypeOf(u.prototype,f),u}return i}class He{id;state;constructor(e,i){this.id=e,this.state=i}}function Qh(t,...e){let i=Uh(),n=ki[Ci],s=n.get(i);return s||(s=new t(i,ki,...e),n.set(i,s)),s.update(...e)}function Re(t){return Qh.bind(null,t)}function Oa(t){return Re(class extends He{callback;lastValues;values;_teardown;constructor(e,i,n,s){super(e,i),t(i,this)}update(e,i){this.callback=e,this.values=i}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,i)=>this.lastValues[i]!==e)}})}function Aa(t,e){t[Fe].push(e)}const D=Oa(Aa),ed=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,Ma=Re(class extends He{Context;value;_ranEffect;_unsubscribe;constructor(t,e,i){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Aa(e,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};ed(this.state.host).dispatchEvent(new CustomEvent(Zn,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:n=null,value:s}=e;this.value=n?s:t.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}});function td(t){return e=>{const i={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(Zn,this)}disconnectedCallback(){this.removeEventListener(Zn,this)}handleEvent(n){const{detail:s}=n;s.Context===i&&(s.value=this.value,s.unsubscribe=this.unsubscribe.bind(this,s.callback),this.listeners.add(s.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let s of this.listeners)s(n)}get value(){return this._value}},Consumer:t(function({render:n}){const s=Ma(i);return n(s)},{useShadowDOM:!1}),defaultValue:e};return i}}const j=Re(class extends He{value;values;constructor(t,e,i,n){super(t,e),this.value=i(),this.values=n}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((e,i)=>this.values[i]!==e)}}),B=(t,e)=>j(()=>t,e);function id(t,e){t[kt].push(e)}const Qn=Oa(id),ve=Re(class extends He{args;constructor(t,e,i){super(t,e),this.updater=this.updater.bind(this),typeof i=="function"&&(i=i()),this.makeArgs(i)}update(){return this.args}updater(t){const[e]=this.args;typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}}),nd=Re(class extends He{reducer;currentState;constructor(t,e,i,n,s){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=s!==void 0?s(n):n}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}}),sd=/([A-Z])/gu,rd=Re(class extends He{property;eventName;constructor(t,e,i,n){if(super(t,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=i,this.eventName=i.replace(sd,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof n=="function"&&(n=n()),n!=null&&this.updateProp(n))}update(t,e){return[this.state.host[this.property],this.updater]}updater(t){const e=this.state.host[this.property];typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&this.updateProp(t)}updateProp(t){this.notify(t).defaultPrevented||(this.state.host[this.property]=t)}notify(t){const e=new CustomEvent(this.eventName,{detail:{value:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(e),e}});function Pa(t){return j(()=>({current:t}),[])}function od({render:t}){const e=Zh(t),i=td(e);return{component:e,createContext:i}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pe={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Ae=t=>(...e)=>({_$litDirective$:t,values:e});let pt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,n){this._$Ct=e,this._$AM=i,this._$Ci=n}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht=(t,e)=>{const i=t._$AN;if(i===void 0)return!1;for(const n of i)n._$AO?.(e,!1),Ht(n,e);return!0},Hi=t=>{let e,i;do{if((e=t._$AM)===void 0)break;i=e._$AN,i.delete(t),t=e}while(i?.size===0)},Ta=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(i===void 0)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),cd(e)}};function ad(t){this._$AN!==void 0?(Hi(this),this._$AM=t,Ta(this)):this._$AM=t}function ld(t,e=!1,i=0){const n=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(n))for(let r=i;r<n.length;r++)Ht(n[r],!1),Hi(n[r]);else n!=null&&(Ht(n,!1),Hi(n));else Ht(this,t)}const cd=t=>{t.type==pe.CHILD&&(t._$AP??=ld,t._$AQ??=ad)};class on extends pt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,i,n){super._$AT(e,i,n),Ta(this),this.isConnected=e._$AU}_$AO(e,i=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),i&&(Ht(this,e),Hi(this))}setValue(e){if(sa(this._$Ct))this._$Ct._$AI(e,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=e,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}const{component:G,createContext:hd}=od({render:mc}),dd={duration:250},ka=t=>(e,i,n)=>{const s="max"+t.charAt(0).toUpperCase()+t.slice(1);Object.assign(e.style,{[s]:"",display:""});const{[t]:r}=e.getBoundingClientRect(),o=[0,r],[a,l]=i?o:o.slice().reverse(),c=e.animate([{[s]:`${a}px`},{[s]:`${l}px`}],{...dd,...n});c.onfinish=()=>Object.assign(e.style,{[s]:"",display:i?"":"none"})};function ud(t){return()=>t}const pd=ud(),Ha=pd,lt=t=>t,jg=(t,...e)=>typeof t=="function"?t(...e):t,Ra=hd(()=>Ha);customElements.define("cosmoz-keybinding-provider",Ra.Provider);const ft=t=>{const e=j(()=>({}),[]);return j(()=>Object.assign(e,t),[e,...Object.values(t)])},fd=(t,e)=>{const i=Ma(Ra),n=ft(t);D(()=>i(n),e)},wr=t=>t.matches(":focus-within"),Na=({disabled:t,onFocus:e})=>{const[i,n]=ve(),{focused:s,closed:r}=i||{},o=s&&!t,a=ft({closed:r,onFocus:e}),l=B(h=>n(d=>({...d,closed:h})),[]),c=B(h=>{const d=h.currentTarget;return wr(d)?n(u=>({focused:!0,closed:!u?.closed})):d.focus()},[]);return D(()=>{if(!o)return;const h=d=>{if(d.defaultPrevented)return;const{closed:u}=a;d.key==="Escape"&&!u?(d.preventDefault(),l(!0)):["ArrowUp","Up"].includes(d.key)&&u&&(d.preventDefault(),l(!1))};return document.addEventListener("keydown",h,!0),()=>document.removeEventListener("keydown",h,!0)},[o]),{focused:o,active:o&&!r,setClosed:l,onToggle:c,onFocus:B(h=>{const d=wr(h.currentTarget);n({focused:d}),a.onFocus?.(d)},[a])}},xr=["focusin","focusout"],gd=t=>{const e=Na(t),{onFocus:i}=e;return D(()=>(t.setAttribute("tabindex","0"),xr.forEach(n=>t.addEventListener(n,i)),()=>{xr.forEach(n=>t.removeEventListener(n,i))}),[]),e},md=ce`
	:host {
		display: contents;
		max-height: var(--cosmoz-dropdown-menu-max-height, calc(96vh - 64px));
		overflow-y: auto;
		border-radius: var(--cosmoz-dropdown-border-radius, 15px);
	}
	::slotted(:not(slot)) {
		display: block;
		--paper-button_-_display: block;
		box-sizing: border-box;
		padding: 10px 24px;
		background: var(--cosmoz-dropdown-menu-bg-color, transparent);
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
`,yd=()=>R` <slot></slot> `;customElements.define("cosmoz-dropdown-list",G(yd,{styleSheets:[md]}));const vd=({placement:t})=>R` <cosmoz-dropdown
		.placement=${t}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;customElements.define("cosmoz-dropdown-menu",G(vd));/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _e(t,e,i){return t?e(t):i?.(t)}const Mn=new WeakMap,Ue=Ae(class extends on{render(t){return Le}update(t,[e]){const i=e!==this.G;return i&&this.G!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),Le}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let i=Mn.get(e);i===void 0&&(i=new WeakMap,Mn.set(e,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?Mn.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ia="important",_d=" !"+Ia,Va=Ae(class extends pt{constructor(t){if(super(t),t.type!==pe.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const n=t[i];return n==null?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`}),"")}update(t,[e]){const{style:i}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const n of this.ft)e[n]==null&&(this.ft.delete(n),n.includes("-")?i.removeProperty(n):i[n]=null);for(const n in e){const s=e[n];if(s!=null){this.ft.add(n);const r=typeof s=="string"&&s.endsWith(_d);n.includes("-")||r?i.setProperty(n,r?s.slice(0,-11):s,r?Ia:""):i[n]=s}}return Q}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bd={},$a=Ae(class extends pt{constructor(){super(...arguments),this.ot=bd}render(t,e){return e()}update(t,[e,i]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every(((n,s)=>n===this.ot[s])))return Q}else if(this.ot===e)return Q;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,i)}}),Da=(t=HTMLElement)=>class extends t{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},wd=ce`
	:host {
		position: fixed;
		left: -9999999999px;
		min-width: 72px;
		box-sizing: border-box;
		padding: var(--cosmoz-dropdown-spacing, 0px);
		z-index: var(--cosmoz-dropdown-z-index, 2);
		border-radius: var(--cosmoz-dropdown-border-radius, 15px);
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
		border-radius: var(--cosmoz-dropdown-border-radius, 15px);
	}
	::slotted(*) {
		display: block;
	}
`,xd=()=>R`<div class="wrap" part="wrap"><slot></slot></div>`;customElements.define("cosmoz-dropdown-content",Da(G(xd,{styleSheets:[wd]})));const ct=Math.min,re=Math.max,Ri=Math.round,ci=Math.floor,be=t=>({x:t,y:t}),Cd={left:"right",right:"left",bottom:"top",top:"bottom"},Sd={start:"end",end:"start"};function Cr(t,e,i){return re(t,ct(e,i))}function an(t,e){return typeof t=="function"?t(e):t}function Ke(t){return t.split("-")[0]}function ln(t){return t.split("-")[1]}function Fa(t){return t==="x"?"y":"x"}function Ba(t){return t==="y"?"height":"width"}const zd=new Set(["top","bottom"]);function Me(t){return zd.has(Ke(t))?"y":"x"}function ja(t){return Fa(Me(t))}function Ed(t,e,i){i===void 0&&(i=!1);const n=ln(t),s=ja(t),r=Ba(s);let o=s==="x"?n===(i?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(o=Ni(o)),[o,Ni(o)]}function Ld(t){const e=Ni(t);return[es(t),e,es(e)]}function es(t){return t.replace(/start|end/g,e=>Sd[e])}const Sr=["left","right"],zr=["right","left"],Od=["top","bottom"],Ad=["bottom","top"];function Md(t,e,i){switch(t){case"top":case"bottom":return i?e?zr:Sr:e?Sr:zr;case"left":case"right":return e?Od:Ad;default:return[]}}function Pd(t,e,i,n){const s=ln(t);let r=Md(Ke(t),i==="start",n);return s&&(r=r.map(o=>o+"-"+s),e&&(r=r.concat(r.map(es)))),r}function Ni(t){return t.replace(/left|right|bottom|top/g,e=>Cd[e])}function Td(t){return{top:0,right:0,bottom:0,left:0,...t}}function kd(t){return typeof t!="number"?Td(t):{top:t,right:t,bottom:t,left:t}}function Ii(t){const{x:e,y:i,width:n,height:s}=t;return{width:n,height:s,top:i,left:e,right:e+n,bottom:i+s,x:e,y:i}}function Er(t,e,i){let{reference:n,floating:s}=t;const r=Me(e),o=ja(e),a=Ba(o),l=Ke(e),c=r==="y",h=n.x+n.width/2-s.width/2,d=n.y+n.height/2-s.height/2,u=n[a]/2-s[a]/2;let p;switch(l){case"top":p={x:h,y:n.y-s.height};break;case"bottom":p={x:h,y:n.y+n.height};break;case"right":p={x:n.x+n.width,y:d};break;case"left":p={x:n.x-s.width,y:d};break;default:p={x:n.x,y:n.y}}switch(ln(e)){case"start":p[o]-=u*(i&&c?-1:1);break;case"end":p[o]+=u*(i&&c?-1:1);break}return p}const Hd=async(t,e,i)=>{const{placement:n="bottom",strategy:s="absolute",middleware:r=[],platform:o}=i,a=r.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(e));let c=await o.getElementRects({reference:t,floating:e,strategy:s}),{x:h,y:d}=Er(c,n,l),u=n,p={},f=0;for(let g=0;g<a.length;g++){const{name:m,fn:y}=a[g],{x:v,y:_,data:b,reset:x}=await y({x:h,y:d,initialPlacement:n,placement:u,strategy:s,middlewareData:p,rects:c,platform:o,elements:{reference:t,floating:e}});h=v??h,d=_??d,p={...p,[m]:{...p[m],...b}},x&&f<=50&&(f++,typeof x=="object"&&(x.placement&&(u=x.placement),x.rects&&(c=x.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:s}):x.rects),{x:h,y:d}=Er(c,u,l)),g=-1)}return{x:h,y:d,placement:u,strategy:s,middlewareData:p}};async function Ts(t,e){var i;e===void 0&&(e={});const{x:n,y:s,platform:r,rects:o,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:u=!1,padding:p=0}=an(e,t),f=kd(p),m=a[u?d==="floating"?"reference":"floating":d],y=Ii(await r.getClippingRect({element:(i=await(r.isElement==null?void 0:r.isElement(m)))==null||i?m:m.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:c,rootBoundary:h,strategy:l})),v=d==="floating"?{x:n,y:s,width:o.floating.width,height:o.floating.height}:o.reference,_=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),b=await(r.isElement==null?void 0:r.isElement(_))?await(r.getScale==null?void 0:r.getScale(_))||{x:1,y:1}:{x:1,y:1},x=Ii(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:v,offsetParent:_,strategy:l}):v);return{top:(y.top-x.top+f.top)/b.y,bottom:(x.bottom-y.bottom+f.bottom)/b.y,left:(y.left-x.left+f.left)/b.x,right:(x.right-y.right+f.right)/b.x}}const Rd=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var i,n;const{placement:s,middlewareData:r,rects:o,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:u,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:g=!0,...m}=an(t,e);if((i=r.arrow)!=null&&i.alignmentOffset)return{};const y=Ke(s),v=Me(a),_=Ke(a)===a,b=await(l.isRTL==null?void 0:l.isRTL(c.floating)),x=u||(_||!g?[Ni(a)]:Ld(a)),A=f!=="none";!u&&A&&x.push(...Pd(a,g,f,b));const C=[a,...x],F=await Ts(e,m),H=[];let T=((n=r.flip)==null?void 0:n.overflows)||[];if(h&&H.push(F[y]),d){const O=Ed(s,o,b);H.push(F[O[0]],F[O[1]])}if(T=[...T,{placement:s,overflows:H}],!H.every(O=>O<=0)){var K,J;const O=(((K=r.flip)==null?void 0:K.index)||0)+1,V=C[O];if(V&&(!(d==="alignment"?v!==Me(V):!1)||T.every(P=>Me(P.placement)===v?P.overflows[0]>0:!0)))return{data:{index:O,overflows:T},reset:{placement:V}};let M=(J=T.filter(L=>L.overflows[0]<=0).sort((L,P)=>L.overflows[1]-P.overflows[1])[0])==null?void 0:J.placement;if(!M)switch(p){case"bestFit":{var N;const L=(N=T.filter(P=>{if(A){const U=Me(P.placement);return U===v||U==="y"}return!0}).map(P=>[P.placement,P.overflows.filter(U=>U>0).reduce((U,ae)=>U+ae,0)]).sort((P,U)=>P[1]-U[1])[0])==null?void 0:N[0];L&&(M=L);break}case"initialPlacement":M=a;break}if(s!==M)return{reset:{placement:M}}}return{}}}},Nd=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:n,placement:s}=e,{mainAxis:r=!0,crossAxis:o=!1,limiter:a={fn:m=>{let{x:y,y:v}=m;return{x:y,y:v}}},...l}=an(t,e),c={x:i,y:n},h=await Ts(e,l),d=Me(Ke(s)),u=Fa(d);let p=c[u],f=c[d];if(r){const m=u==="y"?"top":"left",y=u==="y"?"bottom":"right",v=p+h[m],_=p-h[y];p=Cr(v,p,_)}if(o){const m=d==="y"?"top":"left",y=d==="y"?"bottom":"right",v=f+h[m],_=f-h[y];f=Cr(v,f,_)}const g=a.fn({...e,[u]:p,[d]:f});return{...g,data:{x:g.x-i,y:g.y-n,enabled:{[u]:r,[d]:o}}}}}},Id=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var i,n;const{placement:s,rects:r,platform:o,elements:a}=e,{apply:l=()=>{},...c}=an(t,e),h=await Ts(e,c),d=Ke(s),u=ln(s),p=Me(s)==="y",{width:f,height:g}=r.floating;let m,y;d==="top"||d==="bottom"?(m=d,y=u===(await(o.isRTL==null?void 0:o.isRTL(a.floating))?"start":"end")?"left":"right"):(y=d,m=u==="end"?"top":"bottom");const v=g-h.top-h.bottom,_=f-h.left-h.right,b=ct(g-h[m],v),x=ct(f-h[y],_),A=!e.middlewareData.shift;let C=b,F=x;if((i=e.middlewareData.shift)!=null&&i.enabled.x&&(F=_),(n=e.middlewareData.shift)!=null&&n.enabled.y&&(C=v),A&&!u){const T=re(h.left,0),K=re(h.right,0),J=re(h.top,0),N=re(h.bottom,0);p?F=f-2*(T!==0||K!==0?T+K:re(h.left,h.right)):C=g-2*(J!==0||N!==0?J+N:re(h.top,h.bottom))}await l({...e,availableWidth:F,availableHeight:C});const H=await o.getDimensions(a.floating);return f!==H.width||g!==H.height?{reset:{rects:!0}}:{}}}};function cn(){return typeof window<"u"}function gt(t){return Ua(t)?(t.nodeName||"").toLowerCase():"#document"}function oe(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function xe(t){var e;return(e=(Ua(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Ua(t){return cn()?t instanceof Node||t instanceof oe(t).Node:!1}function he(t){return cn()?t instanceof Element||t instanceof oe(t).Element:!1}function we(t){return cn()?t instanceof HTMLElement||t instanceof oe(t).HTMLElement:!1}function Lr(t){return!cn()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof oe(t).ShadowRoot}const Vd=new Set(["inline","contents"]);function ti(t){const{overflow:e,overflowX:i,overflowY:n,display:s}=de(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+i)&&!Vd.has(s)}const $d=new Set(["table","td","th"]);function Dd(t){return $d.has(gt(t))}const Fd=[":popover-open",":modal"];function hn(t){return Fd.some(e=>{try{return t.matches(e)}catch{return!1}})}const Bd=["transform","translate","scale","rotate","perspective"],jd=["transform","translate","scale","rotate","perspective","filter"],Ud=["paint","layout","strict","content"];function ks(t){const e=Hs(),i=he(t)?de(t):t;return Bd.some(n=>i[n]?i[n]!=="none":!1)||(i.containerType?i.containerType!=="normal":!1)||!e&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!e&&(i.filter?i.filter!=="none":!1)||jd.some(n=>(i.willChange||"").includes(n))||Ud.some(n=>(i.contain||"").includes(n))}function Kd(t){let e=Te(t);for(;we(e)&&!ht(e);){if(ks(e))return e;if(hn(e))return null;e=Te(e)}return null}function Hs(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Wd=new Set(["html","body","#document"]);function ht(t){return Wd.has(gt(t))}function de(t){return oe(t).getComputedStyle(t)}function dn(t){return he(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Te(t){if(gt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Lr(t)&&t.host||xe(t);return Lr(e)?e.host:e}function Ka(t){const e=Te(t);return ht(e)?t.ownerDocument?t.ownerDocument.body:t.body:we(e)&&ti(e)?e:Ka(e)}function Yt(t,e,i){var n;e===void 0&&(e=[]),i===void 0&&(i=!0);const s=Ka(t),r=s===((n=t.ownerDocument)==null?void 0:n.body),o=oe(s);if(r){const a=ts(o);return e.concat(o,o.visualViewport||[],ti(s)?s:[],a&&i?Yt(a):[])}return e.concat(s,Yt(s,[],i))}function ts(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Wa(t){const e=de(t);let i=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const s=we(t),r=s?t.offsetWidth:i,o=s?t.offsetHeight:n,a=Ri(i)!==r||Ri(n)!==o;return a&&(i=r,n=o),{width:i,height:n,$:a}}function Rs(t){return he(t)?t:t.contextElement}function st(t){const e=Rs(t);if(!we(e))return be(1);const i=e.getBoundingClientRect(),{width:n,height:s,$:r}=Wa(e);let o=(r?Ri(i.width):i.width)/n,a=(r?Ri(i.height):i.height)/s;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const qd=be(0);function qa(t){const e=oe(t);return!Hs()||!e.visualViewport?qd:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Yd(t,e,i){return e===void 0&&(e=!1),!i||e&&i!==oe(t)?!1:e}function We(t,e,i,n){e===void 0&&(e=!1),i===void 0&&(i=!1);const s=t.getBoundingClientRect(),r=Rs(t);let o=be(1);e&&(n?he(n)&&(o=st(n)):o=st(t));const a=Yd(r,i,n)?qa(r):be(0);let l=(s.left+a.x)/o.x,c=(s.top+a.y)/o.y,h=s.width/o.x,d=s.height/o.y;if(r){const u=oe(r),p=n&&he(n)?oe(n):n;let f=u,g=ts(f);for(;g&&n&&p!==f;){const m=st(g),y=g.getBoundingClientRect(),v=de(g),_=y.left+(g.clientLeft+parseFloat(v.paddingLeft))*m.x,b=y.top+(g.clientTop+parseFloat(v.paddingTop))*m.y;l*=m.x,c*=m.y,h*=m.x,d*=m.y,l+=_,c+=b,f=oe(g),g=ts(f)}}return Ii({width:h,height:d,x:l,y:c})}function un(t,e){const i=dn(t).scrollLeft;return e?e.left+i:We(xe(t)).left+i}function Ya(t,e){const i=t.getBoundingClientRect(),n=i.left+e.scrollLeft-un(t,i),s=i.top+e.scrollTop;return{x:n,y:s}}function Jd(t){let{elements:e,rect:i,offsetParent:n,strategy:s}=t;const r=s==="fixed",o=xe(n),a=e?hn(e.floating):!1;if(n===o||a&&r)return i;let l={scrollLeft:0,scrollTop:0},c=be(1);const h=be(0),d=we(n);if((d||!d&&!r)&&((gt(n)!=="body"||ti(o))&&(l=dn(n)),we(n))){const p=We(n);c=st(n),h.x=p.x+n.clientLeft,h.y=p.y+n.clientTop}const u=o&&!d&&!r?Ya(o,l):be(0);return{width:i.width*c.x,height:i.height*c.y,x:i.x*c.x-l.scrollLeft*c.x+h.x+u.x,y:i.y*c.y-l.scrollTop*c.y+h.y+u.y}}function Xd(t){return Array.from(t.getClientRects())}function Gd(t){const e=xe(t),i=dn(t),n=t.ownerDocument.body,s=re(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),r=re(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let o=-i.scrollLeft+un(t);const a=-i.scrollTop;return de(n).direction==="rtl"&&(o+=re(e.clientWidth,n.clientWidth)-s),{width:s,height:r,x:o,y:a}}const Or=25;function Zd(t,e){const i=oe(t),n=xe(t),s=i.visualViewport;let r=n.clientWidth,o=n.clientHeight,a=0,l=0;if(s){r=s.width,o=s.height;const h=Hs();(!h||h&&e==="fixed")&&(a=s.offsetLeft,l=s.offsetTop)}const c=un(n);if(c<=0){const h=n.ownerDocument,d=h.body,u=getComputedStyle(d),p=h.compatMode==="CSS1Compat"&&parseFloat(u.marginLeft)+parseFloat(u.marginRight)||0,f=Math.abs(n.clientWidth-d.clientWidth-p);f<=Or&&(r-=f)}else c<=Or&&(r+=c);return{width:r,height:o,x:a,y:l}}const Qd=new Set(["absolute","fixed"]);function eu(t,e){const i=We(t,!0,e==="fixed"),n=i.top+t.clientTop,s=i.left+t.clientLeft,r=we(t)?st(t):be(1),o=t.clientWidth*r.x,a=t.clientHeight*r.y,l=s*r.x,c=n*r.y;return{width:o,height:a,x:l,y:c}}function Ar(t,e,i){let n;if(e==="viewport")n=Zd(t,i);else if(e==="document")n=Gd(xe(t));else if(he(e))n=eu(e,i);else{const s=qa(t);n={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return Ii(n)}function Ja(t,e){const i=Te(t);return i===e||!he(i)||ht(i)?!1:de(i).position==="fixed"||Ja(i,e)}function tu(t,e){const i=e.get(t);if(i)return i;let n=Yt(t,[],!1).filter(a=>he(a)&&gt(a)!=="body"),s=null;const r=de(t).position==="fixed";let o=r?Te(t):t;for(;he(o)&&!ht(o);){const a=de(o),l=ks(o);!l&&a.position==="fixed"&&(s=null),(r?!l&&!s:!l&&a.position==="static"&&!!s&&Qd.has(s.position)||ti(o)&&!l&&Ja(t,o))?n=n.filter(h=>h!==o):s=a,o=Te(o)}return e.set(t,n),n}function iu(t){let{element:e,boundary:i,rootBoundary:n,strategy:s}=t;const o=[...i==="clippingAncestors"?hn(e)?[]:tu(e,this._c):[].concat(i),n],a=o[0],l=o.reduce((c,h)=>{const d=Ar(e,h,s);return c.top=re(d.top,c.top),c.right=ct(d.right,c.right),c.bottom=ct(d.bottom,c.bottom),c.left=re(d.left,c.left),c},Ar(e,a,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function nu(t){const{width:e,height:i}=Wa(t);return{width:e,height:i}}function su(t,e,i){const n=we(e),s=xe(e),r=i==="fixed",o=We(t,!0,r,e);let a={scrollLeft:0,scrollTop:0};const l=be(0);function c(){l.x=un(s)}if(n||!n&&!r)if((gt(e)!=="body"||ti(s))&&(a=dn(e)),n){const p=We(e,!0,r,e);l.x=p.x+e.clientLeft,l.y=p.y+e.clientTop}else s&&c();r&&!n&&s&&c();const h=s&&!n&&!r?Ya(s,a):be(0),d=o.left+a.scrollLeft-l.x-h.x,u=o.top+a.scrollTop-l.y-h.y;return{x:d,y:u,width:o.width,height:o.height}}function Pn(t){return de(t).position==="static"}function Mr(t,e){if(!we(t)||de(t).position==="fixed")return null;if(e)return e(t);let i=t.offsetParent;return xe(t)===i&&(i=i.ownerDocument.body),i}function Xa(t,e){const i=oe(t);if(hn(t))return i;if(!we(t)){let s=Te(t);for(;s&&!ht(s);){if(he(s)&&!Pn(s))return s;s=Te(s)}return i}let n=Mr(t,e);for(;n&&Dd(n)&&Pn(n);)n=Mr(n,e);return n&&ht(n)&&Pn(n)&&!ks(n)?i:n||Kd(t)||i}const ru=async function(t){const e=this.getOffsetParent||Xa,i=this.getDimensions,n=await i(t.floating);return{reference:su(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function ou(t){return de(t).direction==="rtl"}const au={convertOffsetParentRelativeRectToViewportRelativeRect:Jd,getDocumentElement:xe,getClippingRect:iu,getOffsetParent:Xa,getElementRects:ru,getClientRects:Xd,getDimensions:nu,getScale:st,isElement:he,isRTL:ou};function Ga(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function lu(t,e){let i=null,n;const s=xe(t);function r(){var a;clearTimeout(n),(a=i)==null||a.disconnect(),i=null}function o(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),r();const c=t.getBoundingClientRect(),{left:h,top:d,width:u,height:p}=c;if(a||e(),!u||!p)return;const f=ci(d),g=ci(s.clientWidth-(h+u)),m=ci(s.clientHeight-(d+p)),y=ci(h),_={rootMargin:-f+"px "+-g+"px "+-m+"px "+-y+"px",threshold:re(0,ct(1,l))||1};let b=!0;function x(A){const C=A[0].intersectionRatio;if(C!==l){if(!b)return o();C?o(!1,C):n=setTimeout(()=>{o(!1,1e-7)},1e3)}C===1&&!Ga(c,t.getBoundingClientRect())&&o(),b=!1}try{i=new IntersectionObserver(x,{..._,root:s.ownerDocument})}catch{i=new IntersectionObserver(x,_)}i.observe(t)}return o(!0),r}function cu(t,e,i,n){n===void 0&&(n={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,c=Rs(t),h=s||r?[...c?Yt(c):[],...Yt(e)]:[];h.forEach(y=>{s&&y.addEventListener("scroll",i,{passive:!0}),r&&y.addEventListener("resize",i)});const d=c&&a?lu(c,i):null;let u=-1,p=null;o&&(p=new ResizeObserver(y=>{let[v]=y;v&&v.target===c&&p&&(p.unobserve(e),cancelAnimationFrame(u),u=requestAnimationFrame(()=>{var _;(_=p)==null||_.observe(e)})),i()}),c&&!l&&p.observe(c),p.observe(e));let f,g=l?We(t):null;l&&m();function m(){const y=We(t);g&&!Ga(g,y)&&i(),g=y,f=requestAnimationFrame(m)}return i(),()=>{var y;h.forEach(v=>{s&&v.removeEventListener("scroll",i),r&&v.removeEventListener("resize",i)}),d?.(),(y=p)==null||y.disconnect(),p=null,l&&cancelAnimationFrame(f)}}const hu=Nd,du=Rd,uu=Id,pu=(t,e,i)=>{const n=new Map,s={platform:au,...i},r={...s.platform,_c:n};return Hd(t,e,{...s,platform:r})},Za=[du({fallbackAxisSideDirection:"start",crossAxis:!1}),hu()],Qa=({placement:t="bottom-start",strategy:e,middleware:i=Za}={})=>{const[n,s]=ve(),[r,o]=ve(),[a,l]=ve();return D(()=>{if(!n||!(r instanceof HTMLElement)){l(void 0);return}return cu(n,r,()=>pu(n,r,{placement:t,strategy:e,middleware:i}).then(l))},[n,r,t,e,i]),{setReference:s,setFloating:o,styles:j(()=>a?{left:`${a.x}px`,top:`${a.y}px`}:{},[a?.x,a?.y])}},fu=t=>t.preventDefault(),gu=ce`
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
`,mu=t=>{const{placement:e,strategy:i,middleware:n,render:s}=t,{active:r,onToggle:o}=gd(t),{styles:a,setReference:l,setFloating:c}=Qa({placement:e,strategy:i,middleware:n});return R` <div class="anchor" part="anchor" ${Ue(l)}>
			<button
				@mousedown=${fu}
				@click=${o}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		${_e(r,()=>R`<cosmoz-dropdown-content
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					style="${Va(a)}"
					@connected=${h=>h.target.showPopover?.()}
					${Ue(c)}
					><slot></slot>${$a([s],()=>s?.()||Le)}</cosmoz-dropdown-content
				> `)}`};customElements.define("cosmoz-dropdown",G(mu,{styleSheets:[gu]}));function yu(t){return t.boundingClientRect.height===0}function vu(t){return t.getBoundingClientRect().height===0}const _u=t=>{if(t.element.tagName!=="SLOT")throw new Error("Overflow directive must be used on a slot element")};function bu(t,e){t.forEach(i=>{vu(i)||(e.add(i),t.delete(i))})}const wu=(t,e)=>{let i=new Set,n=new Set,s=new Set;const r=new IntersectionObserver(a=>{a.forEach(l=>{const c=l.target;l.boundingClientRect.width===l.intersectionRect.width&&l.intersectionRect.height!==0?(i.add(c),n.delete(c),s.delete(c)):yu(l)?(i.delete(c),n.delete(c),s.add(c)):(i.delete(c),n.add(c),s.delete(c))}),bu(s,n),e({visible:i,overflowing:n,hidden:s})},{root:t.parentElement,threshold:[0,.5,1]}),o=()=>{const a=Array.from(t.assignedElements({flatten:!0})),l=new Set,c=new Set,h=new Set;for(const d of a)i.has(d)?l.add(d):n.has(d)?c.add(d):s.has(d)?h.add(d):r.observe(d);i=l,n=c,s=h,e({visible:i,overflowing:n,hidden:s})};return o(),t.addEventListener("slotchange",o),()=>{t.removeEventListener("slotchange",o),r.disconnect()}};class xu extends on{observer;slot;cleanup;render(){return Q}update(e,[i]){return _u(e),this.slot!==e.element&&(this.cleanup&&(this.cleanup(),this.cleanup=void 0),this.slot=e.element,this.cleanup=wu(this.slot,i)),Q}}const Cu=Ae(xu),Su=ce`
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
`,zu=Symbol("openMenu"),Eu=t=>{const e=t.shadowRoot?.querySelector("#dropdown");if(!e||e.hasAttribute("hidden"))return;e.shadowRoot?.querySelector("cosmoz-dropdown")?.shadowRoot?.querySelector("#dropdownButton")?.click()},Lu=t=>{const[e,i]=ve({visible:new Set,overflowing:new Set});D(()=>{t.dispatchEvent(new CustomEvent("reflow",{detail:e}))},[e]);const n=j(()=>[...e.visible,...e.overflowing],[e]),s=j(()=>n.map(l=>({element:l,priority:Number(l.dataset.priority??0),text:l.textContent?.trim()||""})).toSorted((l,c)=>c.priority-l.priority),[n]),{maxToolbarItems:r=1}=t,o=Math.min(r,e.visible.size);D(()=>{s.forEach(({element:l,priority:c},h)=>{const d=h<o;l.dataset.visibility=d?"visible":"hidden",l.style.order=String(-c)})},[s,o]);const a=j(()=>s.slice(o).sort((l,c)=>c.element.compareDocumentPosition(l.element)-l.element.compareDocumentPosition(c.element)),[s,o]);return D(()=>{t.toggleAttribute("has-menu-items",a.length>0)},[a.length]),{setButtonStates:i,menuButtons:a}},Ou=t=>{const{active:e=!1}=t;fd({activity:zu,callback:()=>Eu(t),check:()=>e&&!t.hasAttribute("hide-actions"),element:()=>t.shadowRoot?.querySelector("#dropdown")},[e]);const{setButtonStates:i,menuButtons:n}=Lu(t),s=j(()=>ka("height"),[]);return Qn(()=>{s(t,e)},[e]),R` <div id="bar" part="bar">
		<div id="info" part="info"><slot name="info"></slot></div>
		<div id="buttonContainer" part="buttons">
			<slot id="bottomBarToolbar" ${Cu(i)}></slot>
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
			${bc(n,r=>R`
					<button @click=${()=>r.element.click()}>
						${r.text}
					</button>
				`)}
		</cosmoz-dropdown-menu>
		<slot name="extra" id="extraSlot"></slot>
	</div>`};customElements.define("cosmoz-bottom-bar",G(Ou,{observedAttributes:["active","max-toolbar-items"],styleSheets:[Su]}));const Vi=`
	<slot name="extra" slot="extra"></slot>
`;R(Object.assign([Vi],{raw:[Vi]}));q(Object.assign([Vi],{raw:[Vi]}));/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const pn=!(window.ShadyDOM&&window.ShadyDOM.inUse);let $i;function Pr(t){t&&t.shimcssproperties?$i=!1:$i=pn||!!(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)"))}let Jt;window.ShadyCSS&&window.ShadyCSS.cssBuild!==void 0&&(Jt=window.ShadyCSS.cssBuild);const el=!!(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&window.ShadyCSS.nativeCss!==void 0?$i=window.ShadyCSS.nativeCss:window.ShadyCSS?(Pr(window.ShadyCSS),window.ShadyCSS=void 0):Pr(window.WebComponents&&window.WebComponents.flags);const Ns=$i;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class Tr{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function tl(t){return t=Au(t),il(Mu(t),t)}function Au(t){return t.replace(ze.comments,"").replace(ze.port,"")}function Mu(t){let e=new Tr;e.start=0,e.end=t.length;let i=e;for(let n=0,s=t.length;n<s;n++)if(t[n]===sl){i.rules||(i.rules=[]);let r=i,o=r.rules[r.rules.length-1]||null;i=new Tr,i.start=n+1,i.parent=r,i.previous=o,r.rules.push(i)}else t[n]===rl&&(i.end=n+1,i=i.parent||e);return e}function il(t,e){let i=e.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=i.trim(),t.parent){let s=t.previous?t.previous.end:t.parent.start;i=e.substring(s,t.start-1),i=Pu(i),i=i.replace(ze.multipleSpaces," "),i=i.substring(i.lastIndexOf(";")+1);let r=t.parsedSelector=t.selector=i.trim();t.atRule=r.indexOf(Iu)===0,t.atRule?r.indexOf(Nu)===0?t.type=it.MEDIA_RULE:r.match(ze.keyframesRule)&&(t.type=it.KEYFRAMES_RULE,t.keyframesName=t.selector.split(ze.multipleSpaces).pop()):r.indexOf(ol)===0?t.type=it.MIXIN_RULE:t.type=it.STYLE_RULE}let n=t.rules;if(n)for(let s=0,r=n.length,o;s<r&&(o=n[s]);s++)il(o,e);return t}function Pu(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let e=arguments[1],i=6-e.length;for(;i--;)e="0"+e;return"\\"+e})}function nl(t,e,i=""){let n="";if(t.cssText||t.rules){let s=t.rules;if(s&&!Tu(s))for(let r=0,o=s.length,a;r<o&&(a=s[r]);r++)n=nl(a,e,n);else n=e?t.cssText:ku(t.cssText),n=n.trim(),n&&(n="  "+n+`
`)}return n&&(t.selector&&(i+=t.selector+" "+sl+`
`),i+=n,t.selector&&(i+=rl+`

`)),i}function Tu(t){let e=t[0];return!!e&&!!e.selector&&e.selector.indexOf(ol)===0}function ku(t){return t=Hu(t),Ru(t)}function Hu(t){return t.replace(ze.customProp,"").replace(ze.mixinProp,"")}function Ru(t){return t.replace(ze.mixinApply,"").replace(ze.varApply,"")}const it={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},sl="{",rl="}",ze={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},ol="--",Nu="@media",Iu="@";/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const is=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,Di=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const kr=new Set,Vu="shady-unscoped";function $u(t){const e=t.textContent;if(!kr.has(e)){kr.add(e);const i=document.createElement("style");i.setAttribute("shady-unscoped",""),i.textContent=e,document.head.appendChild(i)}}function Du(t){return t.hasAttribute(Vu)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ns(t,e){return t?(typeof t=="string"&&(t=tl(t)),nl(t,Ns)):""}function Hr(t){return!t.__cssRules&&t.textContent&&(t.__cssRules=tl(t.textContent)),t.__cssRules||null}function Si(t,e,i,n){if(!t)return;let s=!1,r=t.type;r===it.STYLE_RULE?e(t):r===it.MIXIN_RULE&&(s=!0);let o=t.rules;if(o&&!s)for(let a=0,l=o.length,c;a<l&&(c=o[a]);a++)Si(c,e)}function Fu(t,e){let i=0;for(let n=e,s=t.length;n<s;n++)if(t[n]==="(")i++;else if(t[n]===")"&&--i===0)return n;return-1}function al(t,e){let i=t.indexOf("var(");if(i===-1)return e(t,"","","");let n=Fu(t,i+3),s=t.substring(i+4,n),r=t.substring(0,i),o=al(t.substring(n+1),e),a=s.indexOf(",");if(a===-1)return e(r,s.trim(),"",o);let l=s.substring(0,a).trim(),c=s.substring(a+1).trim();return e(r,l,c,o)}window.ShadyDOM&&window.ShadyDOM.wrap;function Bu(t){let e=t.localName,i="",n="";return e?e.indexOf("-")>-1?i=e:(n=e,i=t.getAttribute&&t.getAttribute("is")||""):(i=t.is,n=t.extends),{is:i,typeExtension:n}}function ju(t){const e=[],i=t.querySelectorAll("style");for(let n=0;n<i.length;n++){const s=i[n];Du(s)?pn||($u(s),s.parentNode.removeChild(s)):(e.push(s.textContent),s.parentNode.removeChild(s))}return e.join("").trim()}const ll="css-build";function Uu(t){if(Jt!==void 0)return Jt;if(t.__cssBuild===void 0){const e=t.getAttribute(ll);if(e)t.__cssBuild=e;else{const i=Ku(t);i!==""&&Wu(t),t.__cssBuild=i}}return t.__cssBuild||""}function Rr(t){return Uu(t)!==""}function Ku(t){const e=t.localName==="template"?t.content.firstChild:t.firstChild;if(e instanceof Comment){const i=e.textContent.trim().split(":");if(i[0]===ll)return i[1]}return""}function Wu(t){const e=t.localName==="template"?t.content.firstChild:t.firstChild;e.parentNode.removeChild(e)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ss(t,e){for(let i in e)i===null?t.style.removeProperty(i):t.style.setProperty(i,e[i])}function cl(t,e){const i=window.getComputedStyle(t).getPropertyValue(e);return i?i.trim():""}function qu(t){const e=Di.test(t)||is.test(t);return Di.lastIndex=0,is.lastIndex=0,e}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Yu=/;\s*/m,Ju=/^\s*(initial)|(inherit)\s*$/,Nr=/\s*!important/,rs="_-_";class Xu{constructor(){this._map={}}set(e,i){e=e.trim(),this._map[e]={properties:i,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let Fi=null;class ee{constructor(){this._currentElement=null,this._measureElement=null,this._map=new Xu}detectMixin(e){return qu(e)}gatherStyles(e){const i=ju(e.content);if(i){const n=document.createElement("style");return n.textContent=i,e.content.insertBefore(n,e.content.firstChild),n}return null}transformTemplate(e,i){e._gatheredStyle===void 0&&(e._gatheredStyle=this.gatherStyles(e));const n=e._gatheredStyle;return n?this.transformStyle(n,i):null}transformStyle(e,i=""){let n=Hr(e);return this.transformRules(n,i),e.textContent=ns(n),n}transformCustomStyle(e){let i=Hr(e);return Si(i,n=>{n.selector===":root"&&(n.selector="html"),this.transformRule(n)}),e.textContent=ns(i),i}transformRules(e,i){this._currentElement=i,Si(e,n=>{this.transformRule(n)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),e.selector===":root"&&(e.selector=":host > *")}transformCssText(e,i){return e=e.replace(is,(n,s,r,o)=>this._produceCssProperties(n,s,r,o,i)),this._consumeCssProperties(e,i)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let i=e;for(;i.parent;)i=i.parent;const n={};let s=!1;return Si(i,r=>{s=s||r===e,!s&&r.selector===e.selector&&Object.assign(n,this._cssTextToMap(r.parsedCssText))}),n}_consumeCssProperties(e,i){let n=null;for(;n=Di.exec(e);){let s=n[0],r=n[1],o=n.index,a=o+s.indexOf("@apply"),l=o+s.length,c=e.slice(0,a),h=e.slice(l),d=i?this._fallbacksFromPreviousRules(i):{};Object.assign(d,this._cssTextToMap(c));let u=this._atApplyToCssProperties(r,d);e=`${c}${u}${h}`,Di.lastIndex=o+u.length}return e}_atApplyToCssProperties(e,i){e=e.replace(Yu,"");let n=[],s=this._map.get(e);if(s||(this._map.set(e,{}),s=this._map.get(e)),s){this._currentElement&&(s.dependants[this._currentElement]=!0);let r,o,a;const l=s.properties;for(r in l)a=i&&i[r],o=[r,": var(",e,rs,r],a&&o.push(",",a.replace(Nr,"")),o.push(")"),Nr.test(l[r])&&o.push(" !important"),n.push(o.join(""))}return n.join("; ")}_replaceInitialOrInherit(e,i){let n=Ju.exec(i);return n&&(n[1]?i=this._getInitialValueForProperty(e):i="apply-shim-inherit"),i}_cssTextToMap(e,i=!1){let n=e.split(";"),s,r,o={};for(let a=0,l,c;a<n.length;a++)l=n[a],l&&(c=l.split(":"),c.length>1&&(s=c[0].trim(),r=c.slice(1).join(":"),i&&(r=this._replaceInitialOrInherit(s,r)),o[s]=r));return o}_invalidateMixinEntry(e){if(Fi)for(let i in e.dependants)i!==this._currentElement&&Fi(i)}_produceCssProperties(e,i,n,s,r){if(n&&al(n,(m,y)=>{y&&this._map.get(y)&&(s=`@apply ${y};`)}),!s)return e;let o=this._consumeCssProperties(""+s,r),a=e.slice(0,e.indexOf("--")),l=this._cssTextToMap(o,!0),c=l,h=this._map.get(i),d=h&&h.properties;d?c=Object.assign(Object.create(d),l):this._map.set(i,c);let u=[],p,f,g=!1;for(p in c)f=l[p],f===void 0&&(f="initial"),d&&!(p in d)&&(g=!0),u.push(`${i}${rs}${p}: ${f}`);return g&&this._invalidateMixinEntry(h),h&&(h.properties=c),n&&(a=`${e};${a}`),`${a}${u.join("; ")};`}}ee.prototype.detectMixin=ee.prototype.detectMixin;ee.prototype.transformStyle=ee.prototype.transformStyle;ee.prototype.transformCustomStyle=ee.prototype.transformCustomStyle;ee.prototype.transformRules=ee.prototype.transformRules;ee.prototype.transformRule=ee.prototype.transformRule;ee.prototype.transformTemplate=ee.prototype.transformTemplate;ee.prototype._separator=rs;Object.defineProperty(ee.prototype,"invalidCallback",{get(){return Fi},set(t){Fi=t}});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const os={};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Bi="_applyShimCurrentVersion",dt="_applyShimNextVersion",ji="_applyShimValidatingVersion",Gu=Promise.resolve();function Zu(t){let e=os[t];e&&Qu(e)}function Qu(t){t[Bi]=t[Bi]||0,t[ji]=t[ji]||0,t[dt]=(t[dt]||0)+1}function hl(t){return t[Bi]===t[dt]}function ep(t){return!hl(t)&&t[ji]===t[dt]}function tp(t){t[ji]=t[dt],t._validating||(t._validating=!0,Gu.then(function(){t[Bi]=t[dt],t._validating=!1}))}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Tn=null,Ir=window.HTMLImports&&window.HTMLImports.whenReady||null,kn;function Vr(t){requestAnimationFrame(function(){Ir?Ir(t):(Tn||(Tn=new Promise(e=>{kn=e}),document.readyState==="complete"?kn():document.addEventListener("readystatechange",()=>{document.readyState==="complete"&&kn()})),Tn.then(function(){t&&t()}))})}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const $r="__seenByShadyCSS",hi="__shadyCSSCachedStyle";let Ui=null,Rt=null,ke=class{constructor(){this.customStyles=[],this.enqueued=!1,Vr(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){this.enqueued||!Rt||(this.enqueued=!0,Vr(Rt))}addCustomStyle(e){e[$r]||(e[$r]=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[hi])return e[hi];let i;return e.getStyle?i=e.getStyle():i=e,i}processStyles(){const e=this.customStyles;for(let i=0;i<e.length;i++){const n=e[i];if(n[hi])continue;const s=this.getStyleForCustomStyle(n);if(s){const r=s.__appliedElement||s;Ui&&Ui(r),n[hi]=r}}return e}};ke.prototype.addCustomStyle=ke.prototype.addCustomStyle;ke.prototype.getStyleForCustomStyle=ke.prototype.getStyleForCustomStyle;ke.prototype.processStyles=ke.prototype.processStyles;Object.defineProperties(ke.prototype,{transformCallback:{get(){return Ui},set(t){Ui=t}},validateCallback:{get(){return Rt},set(t){let e=!1;Rt||(e=!0),Rt=t,e&&this.enqueueDocumentValidation()}}});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const At=new ee;class ip{constructor(){this.customStyleInterface=null,At.invalidCallback=Zu}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{At.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(e,i){if(this.ensure(),Rr(e))return;os[i]=e;let n=At.transformTemplate(e,i);e._styleAst=n}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let i=0;i<e.length;i++){let n=e[i],s=this.customStyleInterface.getStyleForCustomStyle(n);s&&At.transformCustomStyle(s)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,i){if(this.ensure(),i&&ss(e,i),e.shadowRoot){this.styleElement(e);let n=e.shadowRoot.children||e.shadowRoot.childNodes;for(let s=0;s<n.length;s++)this.styleSubtree(n[s])}else{let n=e.children||e.childNodes;for(let s=0;s<n.length;s++)this.styleSubtree(n[s])}}styleElement(e){this.ensure();let{is:i}=Bu(e),n=os[i];if(!(n&&Rr(n))&&n&&!hl(n)){ep(n)||(this.prepareTemplate(n,i),tp(n));let s=e.shadowRoot;if(s){let r=s.querySelector("style");r&&(r.__cssRules=n._styleAst,r.textContent=ns(n._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const t=new ip;let e=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(i,n,s){t.flushCustomStyles(),t.prepareTemplate(i,n)},prepareTemplateStyles(i,n,s){window.ShadyCSS.prepareTemplate(i,n,s)},prepareTemplateDom(i,n){},styleSubtree(i,n){t.flushCustomStyles(),t.styleSubtree(i,n)},styleElement(i){t.flushCustomStyles(),t.styleElement(i)},styleDocument(i){t.flushCustomStyles(),t.styleDocument(i)},getComputedStyleValue(i,n){return cl(i,n)},flushCustomStyles(){t.flushCustomStyles()},nativeCss:Ns,nativeShadow:pn,cssBuild:Jt,disableRuntime:el},e&&(window.ShadyCSS.CustomStyleInterface=e)}window.ShadyCSS.ApplyShim=At;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class qe{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,i){this._asyncModule=e,this._callback=i,this._timer=this._asyncModule.run(()=>{this._timer=null,Xt.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Xt.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(e,i,n){return e instanceof qe?e._cancelAsync():e=new qe,e.setConfig(i,n),e}}let Xt=new Set;const dl=function(t){Xt.add(t)},np=function(){const t=!!Xt.size;return Xt.forEach(e=>{try{e.flush()}catch(i){setTimeout(()=>{throw i})}}),t};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Is=typeof document.head.style.touchAction=="string",Ki="__polymerGestures",zi="__polymerGesturesHandled",as="__polymerGesturesTouchAction",Dr=25,Fr=5,sp=2,rp=2500,ul=["mousedown","mousemove","mouseup","click"],op=[0,1,4,2],ap=(function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}})();function Vs(t){return ul.indexOf(t)>-1}let $s=!1;(function(){try{let t=Object.defineProperty({},"passive",{get(){$s=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch{}})();function pl(t){if(!(Vs(t)||t==="touchend")&&Is&&$s&&zc)return{passive:!0}}let fl=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const ls=[],lp={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},cp={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function hp(t){return lp[t.localName]||!1}function dp(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];try{let i=t.getRootNode();if(t.id){let n=i.querySelectorAll(`label[for = '${t.id}']`);for(let s=0;s<n.length;s++)e.push(n[s])}}catch{}}return e}let Br=function(t){let e=t.sourceCapabilities;if(!(e&&!e.firesTouchEvents)&&(t[zi]={skip:!0},t.type==="click")){let i=!1,n=fn(t);for(let s=0;s<n.length;s++){if(n[s].nodeType===Node.ELEMENT_NODE){if(n[s].localName==="label")ls.push(n[s]);else if(hp(n[s])){let r=dp(n[s]);for(let o=0;o<r.length;o++)i=i||ls.indexOf(r[o])>-1}}if(n[s]===X.mouse.target)return}if(i)return;t.preventDefault(),t.stopPropagation()}};function jr(t){let e=fl?["click"]:ul;for(let i=0,n;i<e.length;i++)n=e[i],t?(ls.length=0,document.addEventListener(n,Br,!0)):document.removeEventListener(n,Br,!0)}function up(t){X.mouse.mouseIgnoreJob||jr(!0);let e=function(){jr(),X.mouse.target=null,X.mouse.mouseIgnoreJob=null};X.mouse.target=fn(t)[0],X.mouse.mouseIgnoreJob=qe.debounce(X.mouse.mouseIgnoreJob,Tt.after(rp),e)}function Be(t){let e=t.type;if(!Vs(e))return!1;if(e==="mousemove"){let i=t.buttons===void 0?1:t.buttons;return t instanceof window.MouseEvent&&!ap&&(i=op[t.which]||0),!!(i&1)}else return(t.button===void 0?0:t.button)===0}function pp(t){if(t.type==="click"){if(t.detail===0)return!0;let e=Ee(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let i=e.getBoundingClientRect(),n=t.pageX,s=t.pageY;return!(n>=i.left&&n<=i.right&&s>=i.top&&s<=i.bottom)}return!1}let X={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function fp(t){let e="auto",i=fn(t);for(let n=0,s;n<i.length;n++)if(s=i[n],s[as]){e=s[as];break}return e}function gl(t,e,i){t.movefn=e,t.upfn=i,document.addEventListener("mousemove",e),document.addEventListener("mouseup",i)}function rt(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}document.addEventListener("touchend",up,$s?{passive:!0}:!1);const fn=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],ii={},De=[];function gp(t,e){let i=document.elementFromPoint(t,e),n=i;for(;n&&n.shadowRoot&&!window.ShadyDOM;){let s=n;if(n=n.shadowRoot.elementFromPoint(t,e),s===n)break;n&&(i=n)}return i}function Ee(t){const e=fn(t);return e.length>0?e[0]:t.target}function ml(t){let e,i=t.type,s=t.currentTarget[Ki];if(!s)return;let r=s[i];if(r){if(!t[zi]&&(t[zi]={},i.slice(0,5)==="touch")){t=t;let o=t.changedTouches[0];if(i==="touchstart"&&t.touches.length===1&&(X.touch.id=o.identifier),X.touch.id!==o.identifier)return;Is||(i==="touchstart"||i==="touchmove")&&mp(t)}if(e=t[zi],!e.skip){for(let o=0,a;o<De.length;o++)a=De[o],r[a.name]&&!e[a.name]&&a.flow&&a.flow.start.indexOf(t.type)>-1&&a.reset&&a.reset();for(let o=0,a;o<De.length;o++)a=De[o],r[a.name]&&!e[a.name]&&(e[a.name]=!0,a[i](t))}}}function mp(t){let e=t.changedTouches[0],i=t.type;if(i==="touchstart")X.touch.x=e.clientX,X.touch.y=e.clientY,X.touch.scrollDecided=!1;else if(i==="touchmove"){if(X.touch.scrollDecided)return;X.touch.scrollDecided=!0;let n=fp(t),s=!1,r=Math.abs(X.touch.x-e.clientX),o=Math.abs(X.touch.y-e.clientY);t.cancelable&&(n==="none"?s=!0:n==="pan-x"?s=o>r:n==="pan-y"&&(s=r>o)),s?t.preventDefault():Wi("track")}}function yl(t,e,i){return ii[e]?(vp(t,e,i),!0):!1}function yp(t,e,i){return ii[e]?(_p(t,e,i),!0):!1}function vp(t,e,i){let n=ii[e],s=n.deps,r=n.name,o=t[Ki];o||(t[Ki]=o={});for(let a=0,l,c;a<s.length;a++)l=s[a],!(fl&&Vs(l)&&l!=="click")&&(c=o[l],c||(o[l]=c={_count:0}),c._count===0&&t.addEventListener(l,ml,pl(l)),c[r]=(c[r]||0)+1,c._count=(c._count||0)+1);t.addEventListener(e,i),n.touchAction&&vl(t,n.touchAction)}function _p(t,e,i){let n=ii[e],s=n.deps,r=n.name,o=t[Ki];if(o)for(let a=0,l,c;a<s.length;a++)l=s[a],c=o[l],c&&c[r]&&(c[r]=(c[r]||1)-1,c._count=(c._count||1)-1,c._count===0&&t.removeEventListener(l,ml,pl(l)));t.removeEventListener(e,i)}function Ds(t){De.push(t);for(let e=0;e<t.emits.length;e++)ii[t.emits[e]]=t}function bp(t){for(let e=0,i;e<De.length;e++){i=De[e];for(let n=0,s;n<i.emits.length;n++)if(s=i.emits[n],s===t)return i}return null}function vl(t,e){Is&&t instanceof HTMLElement&&Pe.run(()=>{t.style.touchAction=e}),t[as]=e}function Fs(t,e,i){let n=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=i,w(t).dispatchEvent(n),n.defaultPrevented){let s=i.preventer||i.sourceEvent;s&&s.preventDefault&&s.preventDefault()}}function Wi(t){let e=bp(t);e.info&&(e.info.prevent=!0)}Ds({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){rt(this.info)},mousedown:function(t){if(!Be(t))return;let e=Ee(t),i=this,n=function(o){Be(o)||(bt("up",e,o),rt(i.info))},s=function(o){Be(o)&&bt("up",e,o),rt(i.info)};gl(this.info,n,s),bt("down",e,t)},touchstart:function(t){bt("down",Ee(t),t.changedTouches[0],t)},touchend:function(t){bt("up",Ee(t),t.changedTouches[0],t)}});function bt(t,e,i,n){e&&Fs(e,t,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:n,prevent:function(s){return Wi(s)}})}Ds({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>sp&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,rt(this.info)},mousedown:function(t){if(!Be(t))return;let e=Ee(t),i=this,n=function(o){let a=o.clientX,l=o.clientY;Ur(i.info,a,l)&&(i.info.state=i.info.started?o.type==="mouseup"?"end":"track":"start",i.info.state==="start"&&Wi("tap"),i.info.addMove({x:a,y:l}),Be(o)||(i.info.state="end",rt(i.info)),e&&Hn(i.info,e,o),i.info.started=!0)},s=function(o){i.info.started&&n(o),rt(i.info)};gl(this.info,n,s),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=Ee(t),i=t.changedTouches[0],n=i.clientX,s=i.clientY;Ur(this.info,n,s)&&(this.info.state==="start"&&Wi("tap"),this.info.addMove({x:n,y:s}),Hn(this.info,e,i),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=Ee(t),i=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),Hn(this.info,e,i))}});function Ur(t,e,i){if(t.prevent)return!1;if(t.started)return!0;let n=Math.abs(t.x-e),s=Math.abs(t.y-i);return n>=Fr||s>=Fr}function Hn(t,e,i){if(!e)return;let n=t.moves[t.moves.length-2],s=t.moves[t.moves.length-1],r=s.x-t.x,o=s.y-t.y,a,l=0;n&&(a=s.x-n.x,l=s.y-n.y),Fs(e,"track",{state:t.state,x:i.clientX,y:i.clientY,dx:r,dy:o,ddx:a,ddy:l,sourceEvent:i,hover:function(){return gp(i.clientX,i.clientY)}})}Ds({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){Be(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){Be(t)&&Kr(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){Kr(this.info,t.changedTouches[0],t)}});function Kr(t,e,i){let n=Math.abs(e.clientX-t.x),s=Math.abs(e.clientY-t.y),r=Ee(i||e);!r||cp[r.localName]&&r.hasAttribute("disabled")||(isNaN(n)||isNaN(s)||n<=Dr&&s<=Dr||pp(e))&&(t.prevent||Fs(r,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:i}))}const wp=Ee;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const _l=ie(t=>{class e extends t{_addEventListenerToNode(n,s,r){yl(n,s,r)||super._addEventListenerToNode(n,s,r)}_removeEventListenerFromNode(n,s,r){yp(n,s,r)||super._removeEventListenerFromNode(n,s,r)}}return e});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const xp=/:host\(:dir\((ltr|rtl)\)\)/g,Cp=':host([dir="$1"])',Sp=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,zp=':host([dir="$2"]) $1',Ep=/:dir\((?:ltr|rtl)\)/,Wr=!!(window.ShadyDOM&&window.ShadyDOM.inUse),Nt=[];let It=null,Bs="";function bl(){Bs=document.documentElement.getAttribute("dir")}function wl(t){t.__autoDirOptOut||t.setAttribute("dir",Bs)}function xl(){bl(),Bs=document.documentElement.getAttribute("dir");for(let t=0;t<Nt.length;t++)wl(Nt[t])}function Lp(){It&&It.takeRecords().length&&xl()}const Op=ie(t=>{Wr||It||(bl(),It=new MutationObserver(xl),It.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const e=ga(t);class i extends e{static _processStyleText(s,r){return s=e._processStyleText.call(this,s,r),!Wr&&Ep.test(s)&&(s=this._replaceDirInCssText(s),this.__activateDir=!0),s}static _replaceDirInCssText(s){let r=s;return r=r.replace(xp,Cp),r=r.replace(Sp,zp),r}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){e.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(Lp(),Nt.push(this),wl(this))}disconnectedCallback(){if(e.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const s=Nt.indexOf(this);s>-1&&Nt.splice(s,1)}}}return i.__activateDir=!1,i});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function qr(){document.body.removeAttribute("unresolved")}document.readyState==="interactive"||document.readyState==="complete"?qr():window.addEventListener("DOMContentLoaded",qr);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function wt(t,e,i){return{index:t,removed:e,addedCount:i}}const Cl=0,Sl=1,cs=2,hs=3;function Ap(t,e,i,n,s,r){let o=r-s+1,a=i-e+1,l=new Array(o);for(let c=0;c<o;c++)l[c]=new Array(a),l[c][0]=c;for(let c=0;c<a;c++)l[0][c]=c;for(let c=1;c<o;c++)for(let h=1;h<a;h++)if(js(t[e+h-1],n[s+c-1]))l[c][h]=l[c-1][h-1];else{let d=l[c-1][h]+1,u=l[c][h-1]+1;l[c][h]=d<u?d:u}return l}function Mp(t){let e=t.length-1,i=t[0].length-1,n=t[e][i],s=[];for(;e>0||i>0;){if(e==0){s.push(cs),i--;continue}if(i==0){s.push(hs),e--;continue}let r=t[e-1][i-1],o=t[e-1][i],a=t[e][i-1],l;o<a?l=o<r?o:r:l=a<r?a:r,l==r?(r==n?s.push(Cl):(s.push(Sl),n=r),e--,i--):l==o?(s.push(hs),e--,n=o):(s.push(cs),i--,n=a)}return s.reverse(),s}function Pp(t,e,i,n,s,r){let o=0,a=0,l,c=Math.min(i-e,r-s);if(e==0&&s==0&&(o=Tp(t,n,c)),i==t.length&&r==n.length&&(a=kp(t,n,c-o)),e+=o,s+=o,i-=a,r-=a,i-e==0&&r-s==0)return[];if(e==i){for(l=wt(e,[],0);s<r;)l.removed.push(n[s++]);return[l]}else if(s==r)return[wt(e,[],i-e)];let h=Mp(Ap(t,e,i,n,s,r));l=void 0;let d=[],u=e,p=s;for(let f=0;f<h.length;f++)switch(h[f]){case Cl:l&&(d.push(l),l=void 0),u++,p++;break;case Sl:l||(l=wt(u,[],0)),l.addedCount++,u++,l.removed.push(n[p]),p++;break;case cs:l||(l=wt(u,[],0)),l.addedCount++,u++;break;case hs:l||(l=wt(u,[],0)),l.removed.push(n[p]),p++;break}return l&&d.push(l),d}function Tp(t,e,i){for(let n=0;n<i;n++)if(!js(t[n],e[n]))return n;return i}function kp(t,e,i){let n=t.length,s=e.length,r=0;for(;r<i&&js(t[--n],e[--s]);)r++;return r}function zl(t,e){return Pp(t,0,t.length,e,0,e.length)}function js(t,e){return t===e}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Xe(t){return t.localName==="slot"}let Yr=class{static getFlattenedNodes(t){const e=w(t);if(Xe(t))return t=t,e.assignedNodes({flatten:!0});{const i=[];for(let n=0;n<e.childNodes.length;n++){const s=e.childNodes[n];if(Xe(s)){const r=s;i.push(...w(r).assignedNodes({flatten:!0}))}else i.push(s)}return i}}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){Xe(this._target)?this._listenSlots([this._target]):w(this._target).children&&(this._listenSlots(w(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){Xe(this._target)?this._unlistenSlots([this._target]):w(this._target).children&&(this._unlistenSlots(w(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,Pe.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let i=t[e];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),i=zl(e,this._effectiveNodes);for(let s=0,r;s<i.length&&(r=i[s]);s++)for(let o=0,a;o<r.removed.length&&(a=r.removed[o]);o++)t.removedNodes.push(a);for(let s=0,r;s<i.length&&(r=i[s]);s++)for(let o=r.index;o<r.index+r.addedCount;o++)t.addedNodes.push(e[o]);this._effectiveNodes=e;let n=!1;return(t.addedNodes.length||t.removedNodes.length)&&(n=!0,this.callback.call(this._target,t)),n}_listenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];Xe(i)&&i.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];Xe(i)&&i.removeEventListener("slotchange",this._boundSchedule)}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const El=function(){let t,e;do t=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=np();while(t||e)};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ge=Element.prototype,Hp=Ge.matches||Ge.matchesSelector||Ge.mozMatchesSelector||Ge.msMatchesSelector||Ge.oMatchesSelector||Ge.webkitMatchesSelector,Ll=function(t,e){return Hp.call(t,e)};class I{constructor(e){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(e),this.node=e}observeNodes(e){return new Yr(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(w(this.node).contains(e))return!0;let i=e,n=e.ownerDocument;for(;i&&i!==n&&i!==this.node;)i=w(i).parentNode||w(i).host;return i===this.node}getOwnerRoot(){return w(this.node).getRootNode()}getDistributedNodes(){return this.node.localName==="slot"?w(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],i=w(this.node).assignedSlot;for(;i;)e.push(i),i=w(i).assignedSlot;return e}importNode(e,i){let n=this.node instanceof Document?this.node:this.node.ownerDocument;return w(n).importNode(e,i)}getEffectiveChildNodes(){return Yr.getFlattenedNodes(this.node)}queryDistributedElements(e){let i=this.getEffectiveChildNodes(),n=[];for(let s=0,r=i.length,o;s<r&&(o=i[s]);s++)o.nodeType===Node.ELEMENT_NODE&&Ll(o,e)&&n.push(o);return n}get activeElement(){let e=this.node;return e._activeElement!==void 0?e._activeElement:e.activeElement}}function Rp(t,e){for(let i=0;i<e.length;i++){let n=e[i];t[n]=function(){return this.node[n].apply(this.node,arguments)}}}function Jr(t,e){for(let i=0;i<e.length;i++){let n=e[i];Object.defineProperty(t,n,{get:function(){return this.node[n]},configurable:!0})}}function Np(t,e){for(let i=0;i<e.length;i++){let n=e[i];Object.defineProperty(t,n,{get:function(){return this.node[n]},set:function(s){this.node[n]=s},configurable:!0})}}class ds{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}I.prototype.cloneNode;I.prototype.appendChild;I.prototype.insertBefore;I.prototype.removeChild;I.prototype.replaceChild;I.prototype.setAttribute;I.prototype.removeAttribute;I.prototype.querySelector;I.prototype.querySelectorAll;I.prototype.parentNode;I.prototype.firstChild;I.prototype.lastChild;I.prototype.nextSibling;I.prototype.previousSibling;I.prototype.firstElementChild;I.prototype.lastElementChild;I.prototype.nextElementSibling;I.prototype.previousElementSibling;I.prototype.childNodes;I.prototype.children;I.prototype.classList;I.prototype.textContent;I.prototype.innerHTML;let us=I;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class t extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(I.prototype).forEach(e=>{e!="activeElement"&&(t.prototype[e]=I.prototype[e])}),Jr(t.prototype,["classList"]),us=t,Object.defineProperties(ds.prototype,{localTarget:{get(){const e=this.event.currentTarget,i=e&&E(e).getOwnerRoot(),n=this.path;for(let s=0;s<n.length;s++){const r=n[s];if(E(r).getOwnerRoot()===i)return r}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else Rp(I.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll","attachShadow"]),Jr(I.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList","shadowRoot"]),Np(I.prototype,["textContent","innerHTML","className"]);const E=function(t){if(t=t||document,t instanceof us||t instanceof ds)return t;let e=t.__domApi;return e||(t instanceof Event?e=new ds(t):e=new us(t),t.__domApi=e),e};/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Rn=window.ShadyDOM,Xr=window.ShadyCSS;function Gr(t,e){return w(t).getRootNode()===e}function Ip(t,e=!1){if(!Rn||!Xr||!Rn.handlesDynamicScoping)return null;const i=Xr.ScopingShim;if(!i)return null;const n=i.scopeForNode(t),s=w(t).getRootNode(),r=o=>{if(!Gr(o,s))return;const a=Array.from(Rn.nativeMethods.querySelectorAll.call(o,"*"));a.push(o);for(let l=0;l<a.length;l++){const c=a[l];if(!Gr(c,s))continue;const h=i.currentScopeForNode(c);h!==n&&(h!==""&&i.unscopeNode(c,h),i.scopeNode(c,n))}};if(r(t),e){const o=new MutationObserver(a=>{for(let l=0;l<a.length;l++){const c=a[l];for(let h=0;h<c.addedNodes.length;h++){const d=c.addedNodes[h];d.nodeType===Node.ELEMENT_NODE&&r(d)}}});return o.observe(t,{childList:!0,subtree:!0}),o}else return null}/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const Nn="disable-upgrade",Ol=t=>{for(;t;){const e=Object.getOwnPropertyDescriptor(t,"observedAttributes");if(e)return e.get;t=Object.getPrototypeOf(t.prototype).constructor}return()=>[]};ie(t=>{const e=rn(t);let i=Ol(e);class n extends e{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return i.call(this).concat(Nn)}_initializeProperties(){this.hasAttribute(Nn)?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(r){return super._canApplyPropertyDefault(r)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(r))}attributeChangedCallback(r,o,a,l){r==Nn?this.__isUpgradeDisabled&&a==null&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,w(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(r,o,a,l)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}return n});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const di="disable-upgrade";let Vp=window.ShadyCSS;const Us=ie(t=>{const e=_l(rn(t)),i=Gn?e:Op(e),n=Ol(i),s={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class r extends i{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(a,l,c){(this.__dataAttributes&&this.__dataAttributes[a]||a===di)&&this.attributeChangedCallback(a,l,c,null)}setAttribute(a,l){if(ai&&!this._legacyForceObservedAttributes){const c=this.getAttribute(a);super.setAttribute(a,l),this.__attributeReaction(a,c,String(l))}else super.setAttribute(a,l)}removeAttribute(a){if(ai&&!this._legacyForceObservedAttributes){const l=this.getAttribute(a);super.removeAttribute(a),this.__attributeReaction(a,l,null)}else super.removeAttribute(a)}static get observedAttributes(){return ai&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],this.prototype,void 0),this.__observedAttributes):n.call(this).concat(di)}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(a){return super._canApplyPropertyDefault(a)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(a))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(a,l,c,h){l!==c&&(a==di?this.__isUpgradeDisabled&&c==null&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,w(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(a,l,c,h),this.attributeChanged(a,l,c)))}attributeChanged(a,l,c){}_initializeProperties(){if(Bt&&this.hasAttribute(di))this.__isUpgradeDisabled=!0;else{let a=Object.getPrototypeOf(this);a.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",a))||(this._registered(),a.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),ai&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const a=this.attributes;for(let l=0,c=a.length;l<c;l++){const h=a[l];this.__attributeReaction(h.name,null,h.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(a){return this._serializeValue(a)}deserialize(a,l){return this._deserializeValue(a,l)}reflectPropertyToAttribute(a,l,c){this._propertyToAttribute(a,l,c)}serializeValueToAttribute(a,l,c){this._valueToNodeAttribute(c||this,a,l)}extend(a,l){if(!(a&&l))return a||l;let c=Object.getOwnPropertyNames(l);for(let h=0,d;h<c.length&&(d=c[h]);h++){let u=Object.getOwnPropertyDescriptor(l,d);u&&Object.defineProperty(a,d,u)}return a}mixin(a,l){for(let c in l)a[c]=l[c];return a}chainObject(a,l){return a&&l&&a!==l&&(a.__proto__=l),a}instanceTemplate(a){let l=this.constructor._contentForTemplate(a);return document.importNode(l,!0)}fire(a,l,c){c=c||{},l=l??{};let h=new Event(a,{bubbles:c.bubbles===void 0?!0:c.bubbles,cancelable:!!c.cancelable,composed:c.composed===void 0?!0:c.composed});h.detail=l;let d=c.node||this;return w(d).dispatchEvent(h),h}listen(a,l,c){a=a||this;let h=this.__boundListeners||(this.__boundListeners=new WeakMap),d=h.get(a);d||(d={},h.set(a,d));let u=l+c;d[u]||(d[u]=this._addMethodEventListenerToNode(a,l,c,this))}unlisten(a,l,c){a=a||this;let h=this.__boundListeners&&this.__boundListeners.get(a),d=l+c,u=h&&h[d];u&&(this._removeEventListenerFromNode(a,l,u),h[d]=null)}setScrollDirection(a,l){vl(l||this,s[a]||"auto")}$$(a){return this.root.querySelector(a)}get domHost(){let a=w(this).getRootNode();return a instanceof DocumentFragment?a.host:a}distributeContent(){const l=E(this);window.ShadyDOM&&l.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return E(this).getEffectiveChildNodes()}queryDistributedElements(a){return E(this).queryDistributedElements(a)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter(function(l){return l.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let a=this.getEffectiveChildNodes(),l=[];for(let c=0,h;h=a[c];c++)h.nodeType!==Node.COMMENT_NODE&&l.push(h.textContent);return l.join("")}queryEffectiveChildren(a){let l=this.queryDistributedElements(a);return l&&l[0]}queryAllEffectiveChildren(a){return this.queryDistributedElements(a)}getContentChildNodes(a){let l=this.root.querySelector(a||"slot");return l?E(l).getDistributedNodes():[]}getContentChildren(a){return this.getContentChildNodes(a).filter(function(c){return c.nodeType===Node.ELEMENT_NODE})}isLightDescendant(a){const l=this;return l!==a&&w(l).contains(a)&&w(l).getRootNode()===w(a).getRootNode()}isLocalDescendant(a){return this.root===w(a).getRootNode()}scopeSubtree(a,l=!1){return Ip(a,l)}getComputedStyleValue(a){return Vp.getComputedStyleValue(this,a)}debounce(a,l,c){return this._debouncers=this._debouncers||{},this._debouncers[a]=qe.debounce(this._debouncers[a],c>0?Tt.after(c):Pe,l.bind(this))}isDebouncerActive(a){this._debouncers=this._debouncers||{};let l=this._debouncers[a];return!!(l&&l.isActive())}flushDebouncer(a){this._debouncers=this._debouncers||{};let l=this._debouncers[a];l&&l.flush()}cancelDebouncer(a){this._debouncers=this._debouncers||{};let l=this._debouncers[a];l&&l.cancel()}async(a,l){return l>0?Tt.run(a.bind(this),l):~Pe.run(a.bind(this))}cancelAsync(a){a<0?Pe.cancel(~a):Tt.cancel(a)}create(a,l){let c=document.createElement(a);if(l)if(c.setProperties)c.setProperties(l);else for(let h in l)c[h]=l[h];return c}elementMatches(a,l){return Ll(l||this,a)}toggleAttribute(a,l){let c=this;return arguments.length===3&&(c=arguments[2]),arguments.length==1&&(l=!c.hasAttribute(a)),l?(w(c).setAttribute(a,""),!0):(w(c).removeAttribute(a),!1)}toggleClass(a,l,c){c=c||this,arguments.length==1&&(l=!c.classList.contains(a)),l?c.classList.add(a):c.classList.remove(a)}transform(a,l){l=l||this,l.style.webkitTransform=a,l.style.transform=a}translate3d(a,l,c,h){h=h||this,this.transform("translate3d("+a+","+l+","+c+")",h)}arrayDelete(a,l){let c;if(Array.isArray(a)){if(c=a.indexOf(l),c>=0)return a.splice(c,1)}else if(c=Z(this,a).indexOf(l),c>=0)return this.splice(a,c,1);return null}_logger(a,l){switch(Array.isArray(l)&&l.length===1&&Array.isArray(l[0])&&(l=l[0]),a){case"log":case"warn":case"error":console[a](...l)}}_log(...a){this._logger("log",a)}_warn(...a){this._logger("warn",a)}_error(...a){this._logger("error",a)}_logf(a,...l){return["[%s::%s]",this.is,a,...l]}}return r.prototype.is="",r});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const $p={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},Al={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},Dp=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},Al);function Fp(t,e,i){const n=t._noAccessors,s=Object.getOwnPropertyNames(t);for(let r=0;r<s.length;r++){let o=s[r];if(!(o in i))if(n)e[o]=t[o];else{let a=Object.getOwnPropertyDescriptor(t,o);a&&(a.configurable=!0,Object.defineProperty(e,o,a))}}}function Bp(t,e,i){for(let n=0;n<e.length;n++)Ml(t,e[n],i,Dp)}function Ml(t,e,i,n){Fp(e,t,n);for(let s in $p)e[s]&&(i[s]=i[s]||[],i[s].push(e[s]))}function Pl(t,e,i){e=e||[];for(let n=t.length-1;n>=0;n--){let s=t[n];s?Array.isArray(s)?Pl(s,e):e.indexOf(s)<0&&(!i||i.indexOf(s)<0)&&e.unshift(s):console.warn("behavior is null, check for missing or 404 import")}return e}function Zr(t,e){for(const i in e){const n=t[i],s=e[i];!("value"in s)&&n&&"value"in n?t[i]=Object.assign({value:n.value},s):t[i]=s}}const Qr=Us(HTMLElement);function jp(t,e,i){let n;const s={};class r extends e{static _finalizeClass(){if(!this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this)))e._finalizeClass.call(this);else{if(n)for(let l=0,c;l<n.length;l++)c=n[l],c.properties&&this.createProperties(c.properties),c.observers&&this.createObservers(c.observers,c.properties);t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties),this._prepareTemplate()}}static get properties(){const l={};if(n)for(let c=0;c<n.length;c++)Zr(l,n[c].properties);return Zr(l,t.properties),l}static get observers(){let l=[];if(n)for(let c=0,h;c<n.length;c++)h=n[c],h.observers&&(l=l.concat(h.observers));return t.observers&&(l=l.concat(t.observers)),l}created(){super.created();const l=s.created;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}_registered(){const l=r.prototype;if(!l.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",l))){l.__hasRegisterFinished=!0,super._registered(),Bt&&o(l);const c=Object.getPrototypeOf(this);let h=s.beforeRegister;if(h)for(let d=0;d<h.length;d++)h[d].call(c);if(h=s.registered,h)for(let d=0;d<h.length;d++)h[d].call(c)}}_applyListeners(){super._applyListeners();const l=s.listeners;if(l)for(let c=0;c<l.length;c++){const h=l[c];if(h)for(let d in h)this._addMethodEventListenerToNode(this,d,h[d])}}_ensureAttributes(){const l=s.hostAttributes;if(l)for(let c=l.length-1;c>=0;c--){const h=l[c];for(let d in h)this._ensureAttribute(d,h[d])}super._ensureAttributes()}ready(){super.ready();let l=s.ready;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}attached(){super.attached();let l=s.attached;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}detached(){super.detached();let l=s.detached;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}attributeChanged(l,c,h){super.attributeChanged();let d=s.attributeChanged;if(d)for(let u=0;u<d.length;u++)d[u].call(this,l,c,h)}}if(i){Array.isArray(i)||(i=[i]);let a=e.prototype.behaviors;n=Pl(i,null,a),r.prototype.behaviors=a?a.concat(i):n}const o=a=>{n&&Bp(a,n,s),Ml(a,t,s,Al)};return Bt||o(r.prototype),r.generatedFrom=t,r}const Up=function(t,e){t||console.warn("Polymer.Class requires `info` argument");let i=e?e(Qr):Qr;return i=jp(t,i,t.behaviors),i.is=i.prototype.is=t.is,i};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const W=function(t){let e;return typeof t=="function"?e=t:e=W.Class(t),t._legacyForceObservedAttributes&&(e.prototype._legacyForceObservedAttributes=t._legacyForceObservedAttributes),customElements.define(e.is,e),e};W.Class=Up;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ks(t,e,i,n,s){let r;s&&(r=typeof i=="object"&&i!==null,r&&(n=t.__dataTemp[e]));let o=n!==i&&(n===n||i===i);return r&&o&&(t.__dataTemp[e]=i),o}const Ws=ie(t=>{class e extends t{_shouldPropertyChange(n,s,r){return Ks(this,n,s,r,!0)}}return e}),Tl=ie(t=>{class e extends t{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(n,s,r){return Ks(this,n,s,r,this.mutableData)}}return e});Ws._mutablePropertyChange=Ks;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ps=null;function fs(){return ps}fs.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:fs,writable:!0}});const kl=sn(fs),Kp=Ws(kl);function Wp(t,e){ps=t,Object.setPrototypeOf(t,e.prototype),new e,ps=null}const qp=sn(class{});function Hl(t,e){for(let i=0;i<e.length;i++){let n=e[i];if(!!t!=!!n.__hideTemplateChildren__)if(n.nodeType===Node.TEXT_NODE)t?(n.__polymerTextContent__=n.textContent,n.textContent=""):n.textContent=n.__polymerTextContent__;else if(n.localName==="slot")if(t)n.__polymerReplaced__=document.createComment("hidden-slot"),w(w(n).parentNode).replaceChild(n.__polymerReplaced__,n);else{const s=n.__polymerReplaced__;s&&w(w(s).parentNode).replaceChild(n,s)}else n.style&&(t?(n.__polymerDisplay__=n.style.display,n.style.display="none"):n.style.display=n.__polymerDisplay__);n.__hideTemplateChildren__=t,n._showHideChildren&&n._showHideChildren(t)}}class Ne extends qp{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let i=[];this.children=i;for(let s=this.root.firstChild;s;s=s.nextSibling)i.push(s),s.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let n=this.__templatizeOptions;(e&&n.instanceProps||!n.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let n in this.__hostProps)this._setPendingProperty(n,this.__dataHost["_host_"+n]);for(let n in e)this._setPendingProperty(n,e[n])}forwardHostProp(e,i){this._setPendingPropertyOrPath(e,i,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,i,n){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,i,s=>{s.model=this,n(s)});else{let s=this.__dataHost.__dataHost;s&&s._addEventListenerToNode(e,i,n)}}_showHideChildren(e){Hl(e,this.children)}_setUnmanagedPropertyToNode(e,i,n){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&i=="textContent"?e.__polymerTextContent__=n:super._setUnmanagedPropertyToNode(e,i,n)}get parentModel(){let e=this.__parentModel;if(!e){let i;e=this;do e=e.__dataHost.__dataHost;while((i=e.__templatizeOptions)&&!i.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}Ne.prototype.__dataHost;Ne.prototype.__templatizeOptions;Ne.prototype._methodHost;Ne.prototype.__templatizeOwner;Ne.prototype.__hostProps;const Yp=Ws(Ne);function eo(t){let e=t.__dataHost;return e&&e._methodHost||e}function Jp(t,e,i){let n=i.mutableData?Yp:Ne;qi.mixin&&(n=qi.mixin(n));let s=class extends n{};return s.prototype.__templatizeOptions=i,s.prototype._bindTemplate(t),Zp(s,t,e,i),s}function Xp(t,e,i,n){let s=i.forwardHostProp;if(s&&e.hasHostProps){const r=t.localName=="template";let o=e.templatizeTemplateClass;if(!o){if(r){let l=i.mutableData?Kp:kl;class c extends l{}o=e.templatizeTemplateClass=c}else{const l=t.constructor;class c extends l{}o=e.templatizeTemplateClass=c}let a=e.hostProps;for(let l in a)o.prototype._addPropertyEffect("_host_"+l,o.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:Gp(l,s)}),o.prototype._createNotifyingProperty("_host_"+l);oa&&n&&t1(e,i,n)}if(t.__dataProto&&Object.assign(t.__data,t.__dataProto),r)Wp(t,o),t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties();else{Object.setPrototypeOf(t,o.prototype);const a=e.hostProps;for(let l in a)if(l="_host_"+l,l in t){const c=t[l];delete t[l],t.__data[l]=c}}}}function Gp(t,e){return function(n,s,r){e.call(n.__templatizeOwner,s.substring(6),r[s])}}function Zp(t,e,i,n){let s=i.hostProps||{};for(let r in n.instanceProps){delete s[r];let o=n.notifyInstanceProp;o&&t.prototype._addPropertyEffect(r,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Qp(r,o)})}if(n.forwardHostProp&&e.__dataHost)for(let r in s)i.hasHostProps||(i.hasHostProps=!0),t.prototype._addPropertyEffect(r,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:e1()})}function Qp(t,e){return function(n,s,r){e.call(n.__templatizeOwner,n,s,r[s])}}function e1(){return function(e,i,n){e.__dataHost._setPendingPropertyOrPath("_host_"+i,n[i],!0,!0)}}function qi(t,e,i){if(at&&!eo(t))throw new Error("strictTemplatePolicy: template owner not trusted");if(i=i||{},t.__templatizeOwner)throw new Error("A <template> can only be templatized once");t.__templatizeOwner=e;let s=(e?e.constructor:Ne)._parseTemplate(t),r=s.templatizeInstanceClass;r||(r=Jp(t,s,i),s.templatizeInstanceClass=r);const o=eo(t);Xp(t,s,i,o);let a=class extends r{};return a.prototype._methodHost=o,a.prototype.__dataHost=t,a.prototype.__templatizeOwner=e,a.prototype.__hostProps=s.hostProps,a=a,a}function t1(t,e,i){const n=i.constructor._properties,{propertyEffects:s}=t,{instanceProps:r}=e;for(let o in s)if(!n[o]&&!(r&&r[o])){const a=s[o];for(let l=0;l<a.length;l++){const{part:c}=a[l].info;if(!(c.signature&&c.signature.static)){console.warn(`Property '${o}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}function i1(t,e){let i;for(;e;)if(i=e.__dataHost?e:e.__templatizeInstance)if(i.__dataHost!=t)e=i.__dataHost;else return i;else e=w(e).parentNode;return null}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let to=!1;function qs(){if(Bt&&!tn){if(!to){to=!0;const t=document.createElement("style");t.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(t)}return!0}return!1}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const n1=_l(Tl(sn(HTMLElement)));class s1 extends n1{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),at)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(e,i,n,s){this.mutableData=!0}connectedCallback(){qs()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){w(w(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e=e||this.querySelector("template"),!e){let i=new MutationObserver(()=>{if(e=this.querySelector("template"),e)i.disconnect(),this.render();else throw new Error("dom-bind requires a <template> child")});i.observe(this,{childList:!0});return}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let i=this.root.firstChild;i;i=i.nextSibling)this.__children[this.__children.length]=i;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}}customElements.define("dom-bind",s1);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const r1=Tl(ei);class io extends r1{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!qn,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e);this.__chunkingId&&cancelAnimationFrame(this.__chunkingId)}connectedCallback(){if(super.connectedCallback(),qs()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let e=w(w(this).parentNode);for(let i=0;i<this.__instances.length;i++)this.__attachInstance(i,e);this.__chunkingId&&this.__render()}}__ensureTemplatized(){if(!this.__ctor){const e=this;let i=this.template=e._templateInfo?e:this.querySelector("template");if(!i){let s=new MutationObserver(()=>{if(this.querySelector("template"))s.disconnect(),this.__render();else throw new Error("dom-repeat requires a <template> child")});return s.observe(this,{childList:!0}),!1}let n={};n[this.as]=!0,n[this.indexAs]=!0,n[this.itemsIndexAs]=!0,this.__ctor=qi(i,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:n,forwardHostProp:function(s,r){let o=this.__instances;for(let a=0,l;a<o.length&&(l=o[a]);a++)l.forwardHostProp(s,r)},notifyInstanceProp:function(s,r,o){if(Fc(this.as,r)){let a=s[this.itemsIndexAs];r==this.as&&(this.items[a]=o);let l=Kt(this.as,`${JSCompiler_renameProperty("items",this)}.${a}`,r);this.notifyPath(l,o)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if(typeof e=="string"){let i=e,n=this.__getMethodHost();return function(){return n[i].apply(n,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn){if(!e)this.__debounceRender(this.__render,this.delay);else if(this.__observePaths){let i=this.__observePaths;for(let n=0;n<i.length;n++)e.indexOf(i[n])===0&&this.__debounceRender(this.__render,this.delay)}}}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||(e.path==="items"&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(e,i=0){this.__renderDebouncer=qe.debounce(this.__renderDebouncer,i>0?Tt.after(i):Pe,e.bind(this)),dl(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),El()}__render(){if(!this.__ensureTemplatized())return;let e=this.items||[];const i=this.__sortAndFilterItems(e),n=this.__calculateLimit(i.length);this.__updateInstances(e,n,i),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>{this.__chunkingId=null,this.__continueChunking()})),this._setRenderedItemCount(this.__instances.length),(!qn||this.notifyDomChange)&&this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(e){let i=new Array(e.length);for(let n=0;n<e.length;n++)i[n]=n;return this.__filterFn&&(i=i.filter((n,s,r)=>this.__filterFn(e[n],s,r))),this.__sortFn&&i.sort((n,s)=>this.__sortFn(e[n],e[s])),i}__calculateLimit(e){let i=e;const n=this.__instances.length;if(this.initialCount){let s;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(i=Math.min(e,this.initialCount),s=Math.max(i-n,0),this.__chunkCount=s||1):(s=Math.min(Math.max(e-n,0),this.__chunkCount),i=Math.min(n+s,e)),this.__shouldMeasureChunk=s===this.__chunkCount,this.__shouldContinueChunking=i<e,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,i}__continueChunking(){if(this.__shouldMeasureChunk){const e=performance.now()-this.__renderStartTime,i=this._targetFrameTime/e;this.__chunkCount=Math.round(this.__chunkCount*i)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(e,i,n){const s=this.__itemsIdxToInstIdx={};let r;for(r=0;r<i;r++){let o=this.__instances[r],a=n[r],l=e[a];s[a]=r,o?(o._setPendingProperty(this.as,l),o._setPendingProperty(this.indexAs,r),o._setPendingProperty(this.itemsIndexAs,a),o._flushProperties()):this.__insertInstance(l,r,a)}for(let o=this.__instances.length-1;o>=r;o--)this.__detachAndRemoveInstance(o)}__detachInstance(e){let i=this.__instances[e];const n=w(i.root);for(let s=0;s<i.children.length;s++){let r=i.children[s];n.appendChild(r)}return i}__attachInstance(e,i){let n=this.__instances[e];i.insertBefore(n.root,this)}__detachAndRemoveInstance(e){this.__detachInstance(e),this.__instances.splice(e,1)}__stampInstance(e,i,n){let s={};return s[this.as]=e,s[this.indexAs]=i,s[this.itemsIndexAs]=n,new this.__ctor(s)}__insertInstance(e,i,n){const s=this.__stampInstance(e,i,n);let r=this.__instances[i+1],o=r?r.children[0]:this;return w(w(this).parentNode).insertBefore(s.root,o),this.__instances[i]=s,s}_showHideChildren(e){for(let i=0;i<this.__instances.length;i++)this.__instances[i]._showHideChildren(e)}__handleItemPath(e,i){let n=e.slice(6),s=n.indexOf("."),r=s<0?n:n.substring(0,s);if(r==parseInt(r,10)){let o=s<0?"":n.substring(s+1);this.__handleObservedPaths(o);let a=this.__itemsIdxToInstIdx[r],l=this.__instances[a];if(l){let c=this.as+(o?"."+o:"");l._setPendingPropertyOrPath(c,i,!1,!0),l._flushProperties()}return!0}}itemForElement(e){let i=this.modelForElement(e);return i&&i[this.as]}indexForElement(e){let i=this.modelForElement(e);return i&&i[this.indexAs]}modelForElement(e){return i1(this.template,e)}}customElements.define(io.is,io);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class Rl extends ei{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=qe.debounce(this.__renderDebouncer,Pe,()=>this.__render()),dl(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const e=w(this).parentNode;(!e||e.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!w(e).host)&&this.__teardownInstance()}connectedCallback(){super.connectedCallback(),qs()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const e=this;let i=e._templateInfo?e:w(e).querySelector("template");if(!i){let n=new MutationObserver(()=>{if(w(this).querySelector("template"))n.disconnect(),this.__render();else throw new Error("dom-if requires a <template> child")});return n.observe(this,{childList:!0}),!1}this.__template=i}return!0}__ensureInstance(){let e=w(this).parentNode;if(this.__hasInstance()){let i=this.__getInstanceNodes();if(i&&i.length&&w(this).previousSibling!==i[i.length-1])for(let s=0,r;s<i.length&&(r=i[s]);s++)w(e).insertBefore(r,this)}else{if(!e||!this.__ensureTemplate())return!1;this.__createAndInsertInstance(e)}return!0}render(){El()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),(!qn||this.notifyDomChange)&&this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(e){}__teardownInstance(){}_showHideChildren(){}}class o1 extends Rl{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(e){const i=this.__dataHost||this;if(at&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const n=i._bindTemplate(this.__template,!0);n.runEffects=(s,r,o)=>{let a=this.__syncInfo;if(this.if)a&&(this.__syncInfo=null,this._showHideChildren(),r=Object.assign(a.changedProps,r)),s(r,o);else if(this.__instance)if(a||(a=this.__syncInfo={runEffects:s,changedProps:{}}),o)for(const l in r){const c=Oe(l);a.changedProps[c]=this.__dataHost[c]}else Object.assign(a.changedProps,r)},this.__instance=i._stampTemplate(this.__template,n),w(e).insertBefore(this.__instance,this)}__syncHostProperties(){const e=this.__syncInfo;e&&(this.__syncInfo=null,e.runEffects(e.changedProps,!1))}__teardownInstance(){const e=this.__dataHost||this;this.__instance&&(e._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==e&&(this.__instance.__hidden=e,Hl(e,this.__instance.templateInfo.childNodes)),e||this.__syncHostProperties()}}class a1 extends Rl{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(e){this.__ctor||(this.__ctor=qi(this.__template,this,{mutableData:!0,forwardHostProp:function(i,n){this.__instance&&(this.if?this.__instance.forwardHostProp(i,n):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Oe(i)]=!0))}})),this.__instance=new this.__ctor,w(e).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let i=w(e[0]).parentNode;if(i){i=w(i);for(let n=0,s;n<e.length&&(s=e[n]);n++)i.removeChild(s)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let e=this.__invalidProps;if(e){this.__invalidProps=null;for(let i in e)this.__instance._setPendingProperty(i,this.__dataHost[i]);this.__instance._flushProperties()}}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==e&&(this.__instance.__hidden=e,this.__instance._showHideChildren(e)),e||this.__syncHostProperties()}}const no=aa?o1:a1;customElements.define(no.is,no);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let l1=ie(t=>{let e=rn(t);class i extends e{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(s,r){let o=r.path;if(o==JSCompiler_renameProperty("items",this)){let a=r.base||[],l=this.__lastItems,c=this.__lastMulti;if(s!==c&&this.clearSelection(),l){let h=zl(a,l);this.__applySplices(h)}this.__lastItems=a,this.__lastMulti=s}else if(r.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(r.value.indexSplices);else{let a=o.slice(`${JSCompiler_renameProperty("items",this)}.`.length),l=parseInt(a,10);a.indexOf(".")<0&&a==l&&this.__deselectChangedIdx(l)}}__applySplices(s){let r=this.__selectedMap;for(let a=0;a<s.length;a++){let l=s[a];r.forEach((c,h)=>{c<l.index||(c>=l.index+l.removed.length?r.set(h,c+l.addedCount-l.removed.length):r.set(h,-1))});for(let c=0;c<l.addedCount;c++){let h=l.index+c;r.has(this.items[h])&&r.set(this.items[h],h)}}this.__updateLinks();let o=0;r.forEach((a,l)=>{a<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),o,1):this.selected=this.selectedItem=null,r.delete(l)):o++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let s=0;this.__selectedMap.forEach(r=>{r>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${r}`,`${JSCompiler_renameProperty("selected",this)}.${s++}`)})}else this.__selectedMap.forEach(s=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${s}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${s}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(s){return this.__selectedMap.has(s)}isIndexSelected(s){return this.isSelected(this.items[s])}__deselectChangedIdx(s){let r=this.__selectedIndexForItemIndex(s);if(r>=0){let o=0;this.__selectedMap.forEach((a,l)=>{r==o++&&this.deselect(l)})}}__selectedIndexForItemIndex(s){let r=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${s}`];if(r)return parseInt(r.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(s){let r=this.__selectedMap.get(s);if(r>=0){this.__selectedMap.delete(s);let o;this.multi&&(o=this.__selectedIndexForItemIndex(r)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),o,1):this.selected=this.selectedItem=null}}deselectIndex(s){this.deselect(this.items[s])}select(s){this.selectIndex(this.items.indexOf(s))}selectIndex(s){let r=this.items[s];this.isSelected(r)?this.toggle&&this.deselectIndex(s):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(r,s),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),r):this.selected=this.selectedItem=r)}}return i}),c1=l1(ei);class so extends c1{static get is(){return"array-selector"}static get template(){return null}}customElements.define(so.is,so);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ei=new ke;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,i){},prepareTemplateDom(t,e){},prepareTemplateStyles(t,e,i){},styleSubtree(t,e){Ei.processStyles(),ss(t,e)},styleElement(t){Ei.processStyles()},styleDocument(t){Ei.processStyles(),ss(document.body,t)},getComputedStyleValue(t,e){return cl(t,e)},flushCustomStyles(){},nativeCss:Ns,nativeShadow:pn,cssBuild:Jt,disableRuntime:el});window.ShadyCSS.CustomStyleInterface=Ei;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ro="include",h1=window.ShadyCSS.CustomStyleInterface;class d1 extends HTMLElement{constructor(){super(),this._style=null,h1.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const i=e.getAttribute(ro);return i&&(e.removeAttribute(ro),e.textContent=Ic(i)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",d1);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const u1=Us(HTMLElement).prototype;/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Nl=q`
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
</custom-style>`;Nl.setAttribute("style","display: none;");document.head.appendChild(Nl.content);var Il=document.createElement("style");Il.textContent="[hidden] { display: none !important; }";document.head.appendChild(Il);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class te{constructor(e){te[" "](e),this.type=e&&e.type||"default",this.key=e&&e.key,e&&"value"in e&&(this.value=e.value)}get value(){var e=this.type,i=this.key;if(e&&i)return te.types[e]&&te.types[e][i]}set value(e){var i=this.type,n=this.key;i&&n&&(i=te.types[i]=te.types[i]||{},e==null?delete i[n]:i[n]=e)}get list(){var e=this.type;if(e){var i=te.types[this.type];return i?Object.keys(i).map(function(n){return p1[this.type][n]},this):[]}}byKey(e){return this.key=e,this.value}}te[" "]=function(){};te.types={};var p1=te.types;W({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(t,e,i){var n=new te({type:t,key:e});return i!==void 0&&i!==n.value?n.value=i:this.value!==n.value&&(this.value=n.value),n},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(t){t&&(this.value=this)},byKey:function(t){return new te({type:this.type,key:t}).value}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/W({_template:q`
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
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:u1.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(t){var e=(t||"").split(":");this._iconName=e.pop(),this._iconsetName=e.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(t){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&E(this.root).removeChild(this._img),this._iconName===""?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,E(this.root).appendChild(this._img))}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/W({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new te({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map(function(t){return this.name+":"+t},this)},applyIcon:function(t,e){this.removeIcon(t);var i=this._cloneIcon(e,this.rtlMirroring&&this._targetIsRTL(t));if(i){var n=E(t.root||t);return n.insertBefore(i,n.childNodes[0]),t._svgIcon=i}return null},removeIcon:function(t){t._svgIcon&&(E(t.root||t).removeChild(t._svgIcon),t._svgIcon=null)},_targetIsRTL:function(t){if(this.__targetIsRTL==null)if(this.useGlobalRtlAttribute){var e=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL=e.getAttribute("dir")==="rtl"}else t&&t.nodeType!==Node.ELEMENT_NODE&&(t=t.host),this.__targetIsRTL=t&&window.getComputedStyle(t).direction==="rtl";return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async(function(){this.fire("iron-iconset-added",this,{node:window})})},_createIconMap:function(){var t=Object.create(null);return E(this).querySelectorAll("[id]").forEach(function(e){t[e.id]=e}),t},_cloneIcon:function(t,e){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[t],this.size,e)},_prepareSvgClone:function(t,e,i){if(t){var n=t.cloneNode(!0),s=document.createElementNS("http://www.w3.org/2000/svg","svg"),r=n.getAttribute("viewBox")||"0 0 "+e+" "+e,o="pointer-events: none; display: block; width: 100%; height: 100%;";return i&&n.hasAttribute("mirror-in-rtl")&&(o+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),s.setAttribute("viewBox",r),s.setAttribute("preserveAspectRatio","xMidYMid meet"),s.setAttribute("focusable","false"),s.style.cssText=o,s.appendChild(n).removeAttribute("id"),s}return null}});/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const f1=q`<iron-iconset-svg name="icons" size="24">
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
</iron-iconset-svg>`;document.head.appendChild(f1.content);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gn=Ae(class extends pt{constructor(t){if(super(t),t.type!==pe.PROPERTY&&t.type!==pe.ATTRIBUTE&&t.type!==pe.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!sa(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===Q||e===Le)return e;const i=t.element,n=t.name;if(t.type===pe.PROPERTY){if(e===i[n])return Q}else if(t.type===pe.BOOLEAN_ATTRIBUTE){if(!!e===i.hasAttribute(n))return Q}else if(t.type===pe.ATTRIBUTE&&i.getAttribute(n)===e+"")return Q;return ra(t),e}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const le=t=>t??Le,Vl=Re(class extends He{values;constructor(t,e,i,n){super(t,e),Object.assign(e.host,i),this.values=n}update(t,e){this.hasChanged(e)&&(this.values=e,Object.assign(this.state.host,t))}hasChanged(t=[]){return t.some((e,i)=>this.values[i]!==e)}}),ni=Re(class extends He{update(){return this.state.host}}),g1=/([A-Z])/gu,Gt=(t,e,i)=>{t[e]=i,t.dispatchEvent(new CustomEvent(e.replace(g1,"-$1").toLowerCase()+"-changed",{detail:{value:i}}))},Wg=(t,e,i=[e])=>{const n=ni();D(()=>{Gt(n,t,e)},i)},$l=t=>{const e=Pa(void 0),i=B(c=>e.current=c,[]),n=t.shadowRoot,s=B(c=>t.dispatchEvent(new Event(c.type,{bubbles:c.bubbles})),[]),r=B(c=>Gt(t,"value",c.target.value),[]),o=B(c=>Gt(t,"focused",c.type==="focus"),[]),a=B(()=>e.current?.focus(),[]),l=B(()=>{const c=e.current?.checkValidity();return t.toggleAttribute("invalid",!c),c},[]);return Vl({focus:a,validate:l},[a,l]),D(()=>{const c=h=>{h.defaultPrevented||t.disabled||h.target.matches("input, textarea, label")||(h.preventDefault(),t.matches(":focus-within")||a())};return n.addEventListener("mousedown",c),()=>n.removeEventListener("mousedown",c)},[a]),{onChange:s,onFocus:o,onInput:r,onRef:i}},m1=t=>j(()=>{if(t==null)return;const e=new RegExp(t,"u");return i=>{!i.defaultPrevented&&i.data&&!e.test(i.data)&&i.preventDefault()}},[t]),Dl=(t,{label:e,invalid:i,errorMessage:n})=>R`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${t}
				${_e(e,()=>R`<label for="input" part="label">${e}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${_e(i&&n,()=>R`<div class="error" part="error">${n}</div>`)}
	`,Fl=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],y1=({placeholder:t,noLabelFloat:e,label:i})=>(e?i:void 0)||t||" ",v1=Math.abs,_1=(...t)=>t.some(e=>!!e),b1=(...t)=>t.join(""),w1=(t,e,i)=>t?e:i,x1=(t,e)=>e.indexOf(t)>-1,C1=(t,e)=>t===e,S1=t=>!!(t==null||Array.isArray(t)&&t.length===0||typeof t=="string"&&t.length===0||typeof t=="number"&&t===0),z1=(t,e)=>typeof t!="number"?"":t.toFixed(e),qg=Object.freeze(Object.defineProperty({__proto__:null,abs:v1,anyTrue:_1,concat:b1,ifElse:w1,inArray:x1,isEmpty:S1,isEqual:C1,toFixed:z1},Symbol.toStringTag,{value:"Module"})),E1={isoBasic:/^\d{4}-\d{2}-\d{2}$/iu},L1=t=>typeof t=="string"&&E1.isoBasic.test(t)?new Date(`${t}T00:00`):new Date(t),Yg=t=>{if(t==null)return;if(t instanceof Date&&!isNaN(t.getTime()))return t;if(!(typeof t=="number"||typeof t=="string"))return;const e=L1(t);if(!(e instanceof Date&&isNaN(e.getTime())))return e},xt=t=>t<10?"0"+t:t,Jg=t=>t instanceof Date?t.getFullYear()+"-"+xt(t.getMonth()+1)+"-"+xt(t.getDate())+"T"+xt(t.getHours())+":"+xt(t.getMinutes())+":"+xt(t.getSeconds())+"."+(t.getMilliseconds()/1e3).toFixed(3).slice(2,5):null,mn=(t,...e)=>t.flatMap((i,n)=>[i,e[n]??""]).join(""),Ys=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},Xg=(t,e)=>{const i=class extends e{};return Object.assign(i.prototype,t),i},oo=mn`
	.wrap {
		--contour-color: var(--focused-color);
		background: var(--focused-bg);
	}

	#input::placeholder,
	label {
		color: var(--focused-color);
		opacity: 1;
	}

	.line {
		border-bottom-color: var(--focused-color);
	}

	.line::before {
		transform: none;
		transition: 0.25s transform ease;
	}
`,Bl=mn`
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
		--focused: var(--cosmoz-input-focused, none);

		display: block;
		padding: var(--cosmoz-input-padding, 8px 0);
		position: relative;
		max-height: var(--cosmoz-input-max-height);
		font-size: var(--font-size);
		line-height: var(--line-height);
		font-family: var(--font-family);
		caret-color: var(--focused-color);
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

	:host(:focus-within) {
		${oo}
	}
	@container style(--focused: focused) {
		${oo}
	}
`,O1=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...Fl],A1=t=>{const{type:e="text",pattern:i,allowedPattern:n,autocomplete:s,value:r,readonly:o,disabled:a,min:l,max:c,step:h,maxlength:d}=t,{onChange:u,onFocus:p,onInput:f,onRef:g}=$l(t),m=m1(n);return Dl(R`
			<input
				${Ue(g)}
				style="--chars: ${r?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${e}
				pattern=${le(i)}
				autocomplete=${le(s)}
				placeholder=${y1(t)}
				?readonly=${o}
				?aria-disabled=${a}
				?disabled=${a}
				.value=${gn(r??"")}
				maxlength=${le(d)}
				@beforeinput=${m}
				@input=${f}
				@change=${u}
				@focus=${p}
				@blur=${p}
				min=${le(l)}
				max=${le(c)}
				step=${le(h)}
			/>
		`,t)};customElements.define("cosmoz-input",G(A1,{observedAttributes:O1,styleSheets:[Ps(Bl)]}));const ao=t=>{t.style.height="",t.style.height=`${t.scrollHeight}px`},M1=(t,e=0)=>{if(e>0){const i=t.getAttribute("rows")??"",n=t.style.height;t.style.height="",t.setAttribute("rows",e),t.style.maxHeight=t.getBoundingClientRect().height+"px",t.style.height=n,t.setAttribute("rows",i)}},P1=t=>{const{value:e,maxRows:i}=t,n=j(()=>()=>t.shadowRoot.querySelector("#input"),[]);D(()=>M1(n(),i),[i,n]),D(()=>ao(n()),[n,e]),D(()=>{const s=n(),r=new ResizeObserver(()=>requestAnimationFrame(()=>ao(s)));return r.observe(s),()=>r.unobserve(s)},[n])},T1=["rows","placeholder",...Fl],k1=t=>{const{autocomplete:e,value:i,placeholder:n,readonly:s,disabled:r,rows:o,cols:a,maxlength:l}=t,{onChange:c,onFocus:h,onInput:d,onRef:u}=$l(t);return P1(t),Dl(R`
			<textarea id="input" part="input"
				${Ue(u)}
				autocomplete=${le(e)}
				placeholder=${n||" "}
				rows=${o??1} cols=${le(a)}
				?readonly=${s} ?aria-disabled=${r} ?disabled=${r}
				.value=${gn(i??"")} maxlength=${le(l)} @input=${d}
				@change=${c} @focus=${h} @blur=${h}>`,t)};customElements.define("cosmoz-textarea",G(k1,{observedAttributes:T1,styleSheets:[Ps(Bl)]}));const H1=t=>{const{label:e,value:i,disabled:n,error:s}=t,r=B(o=>t.dispatchEvent(new CustomEvent("change",{detail:o.target.checked})),[]);return R`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${gn(!!i)}
			?disabled=${n}
			@change=${r}
		/>
		${_e(e,()=>R`<label for="toggle">${e}</label>`)}
		<slot name="suffix"></slot>
		${_e(s,o=>R`<div class="failure">${o}</div>`)} `},R1=ce`
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
`,N1=ce`
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
`;customElements.define("cosmoz-toggle",G(H1,{styleSheets:[N1,R1],observedAttributes:["disabled"]}));/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var lo={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},I1={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},co={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},V1=/[a-z0-9*]/,$1=/U\+/,D1=/^arrow/,F1=/^space(bar)?/,B1=/^escape$/;function ho(t,e){var i="";if(t){var n=t.toLowerCase();n===" "||F1.test(n)?i="space":B1.test(n)?i="esc":n.length==1?(!e||V1.test(n))&&(i=n):D1.test(n)?i=n.replace("arrow",""):n=="multiply"?i="*":i=n}return i}function j1(t){var e="";return t&&(t in lo?e=lo[t]:$1.test(t)?(t=parseInt(t.replace("U+","0x"),16),e=String.fromCharCode(t).toLowerCase()):e=t.toLowerCase()),e}function U1(t){var e="";return Number(t)&&(t>=65&&t<=90?e=String.fromCharCode(32+t):t>=112&&t<=123?e="f"+(t-112+1):t>=48&&t<=57?e=String(t-48):t>=96&&t<=105?e=String(t-96):e=I1[t]),e}function K1(t,e){return t.key?ho(t.key,e):t.detail&&t.detail.key?ho(t.detail.key,e):j1(t.keyIdentifier)||U1(t.keyCode)||""}function uo(t,e){var i=K1(e,t.hasModifiers);return i===t.key&&(!t.hasModifiers||!!e.shiftKey==!!t.shiftKey&&!!e.ctrlKey==!!t.ctrlKey&&!!e.altKey==!!t.altKey&&!!e.metaKey==!!t.metaKey)}function W1(t){return t.length===1?{combo:t,key:t,event:"keydown"}:t.split("+").reduce(function(e,i){var n=i.split(":"),s=n[0],r=n[1];return s in co?(e[co[s]]=!0,e.hasModifiers=!0):(e.key=s,e.event=r||"keydown"),e},{combo:t.split(":").shift()})}function po(t){return t.trim().split(" ").map(function(e){return W1(e)})}const Ye={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(t,e){this._imperativeKeyBindings[t]=e,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(t,e){for(var i=po(e),n=0;n<i.length;++n)if(uo(i[n],t))return!0;return!1},_collectKeyBindings:function(){var t=this.behaviors.map(function(e){return e.keyBindings});return t.indexOf(this.keyBindings)===-1&&t.push(this.keyBindings),t},_prepKeyBindings:function(){this._keyBindings={},this._collectKeyBindings().forEach(function(i){for(var n in i)this._addKeyBinding(n,i[n])},this);for(var t in this._imperativeKeyBindings)this._addKeyBinding(t,this._imperativeKeyBindings[t]);for(var e in this._keyBindings)this._keyBindings[e].sort(function(i,n){var s=i[0].hasModifiers,r=n[0].hasModifiers;return s===r?0:s?-1:1})},_addKeyBinding:function(t,e){po(t).forEach(function(i){this._keyBindings[i.event]=this._keyBindings[i.event]||[],this._keyBindings[i.event].push([i,e])},this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach(function(t){var e=this._keyBindings[t],i=this._onKeyBindingEvent.bind(this,e);this._boundKeyHandlers.push([this.keyEventTarget,t,i]),this.keyEventTarget.addEventListener(t,i)},this)},_unlistenKeyEventListeners:function(){for(var t,e,i,n;this._boundKeyHandlers.length;)t=this._boundKeyHandlers.pop(),e=t[0],i=t[1],n=t[2],e.removeEventListener(i,n)},_onKeyBindingEvent:function(t,e){if(this.stopKeyboardEventPropagation&&e.stopPropagation(),!e.defaultPrevented)for(var i=0;i<t.length;i++){var n=t[i][0],s=t[i][1];if(uo(n,e)&&(this._triggerKeyHandler(n,s,e),e.defaultPrevented))return}},_triggerKeyHandler:function(t,e,i){var n=Object.create(t);n.keyboardEvent=i;var s=new CustomEvent(t.event,{detail:n,cancelable:!0});this[e].call(this,s),s.defaultPrevented&&i.preventDefault()}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Se=W({_template:q`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},timeout:{type:Number,value:150},_text:{type:String,value:""}},created:function(){Se.instance||(Se.instance=this),document.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(t){this._text="",this.async(function(){this._text=t},this.timeout)},_onIronAnnounce:function(t){t.detail&&t.detail.text&&this.announce(t.detail.text)}});Se.instance=null;Se.requestAvailability=function(){Se.instance||(Se.instance=document.createElement("iron-a11y-announcer")),document.body?document.body.appendChild(Se.instance):document.addEventListener("load",function(){document.body.appendChild(Se.instance)})};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/let In=null;const gs={properties:{validator:{type:String},invalid:{notify:!0,reflectToAttribute:!0,type:Boolean,value:!1,observer:"_invalidChanged"}},registered:function(){In=new te({type:"validator"})},_invalidChanged:function(){this.invalid?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")},get _validator(){return In&&In.byKey(this.validator)},hasValidator:function(){return this._validator!=null},validate:function(t){return t===void 0&&this.value!==void 0?this.invalid=!this._getValidity(this.value):this.invalid=!this._getValidity(t),!this.invalid},_getValidity:function(t){return this.hasValidator()?this._validator.validate(t):!0}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/W({_template:q`
    <style>
      :host {
        display: inline-block;
      }
    </style>
    <slot id="content"></slot>
`,is:"iron-input",behaviors:[gs],properties:{bindValue:{type:String,value:""},value:{type:String,computed:"_computeValue(bindValue)"},allowedPattern:{type:String},autoValidate:{type:Boolean,value:!1},_inputElement:Object},observers:["_bindValueChanged(bindValue, _inputElement)"],listeners:{input:"_onInput",keypress:"_onKeypress"},created:function(){Se.requestAvailability(),this._previousValidInput="",this._patternAlreadyChecked=!1},attached:function(){this._observer=E(this).observeNodes((function(t){this._initSlottedInput()}).bind(this))},detached:function(){this._observer&&(E(this).unobserveNodes(this._observer),this._observer=null)},get inputElement(){return this._inputElement},_initSlottedInput:function(){this._inputElement=this.getEffectiveChildren()[0],this.inputElement&&this.inputElement.value&&(this.bindValue=this.inputElement.value),this.fire("iron-input-ready")},get _patternRegExp(){var t;if(this.allowedPattern)t=new RegExp(this.allowedPattern);else switch(this.inputElement.type){case"number":t=/[0-9.,e-]/;break}return t},_bindValueChanged:function(t,e){e&&(t===void 0?e.value=null:t!==e.value&&(this.inputElement.value=t),this.autoValidate&&this.validate(),this.fire("bind-value-changed",{value:t}))},_onInput:function(){if(this.allowedPattern&&!this._patternAlreadyChecked){var t=this._checkPatternValidity();t||(this._announceInvalidCharacter("Invalid string of characters not entered."),this.inputElement.value=this._previousValidInput)}this.bindValue=this._previousValidInput=this.inputElement.value,this._patternAlreadyChecked=!1},_isPrintable:function(t){var e=t.keyCode==8||t.keyCode==9||t.keyCode==13||t.keyCode==27,i=t.keyCode==19||t.keyCode==20||t.keyCode==45||t.keyCode==46||t.keyCode==144||t.keyCode==145||t.keyCode>32&&t.keyCode<41||t.keyCode>111&&t.keyCode<124;return!e&&!(t.charCode==0&&i)},_onKeypress:function(t){if(!(!this.allowedPattern&&this.inputElement.type!=="number")){var e=this._patternRegExp;if(e&&!(t.metaKey||t.ctrlKey||t.altKey)){this._patternAlreadyChecked=!0;var i=String.fromCharCode(t.charCode);this._isPrintable(t)&&!e.test(i)&&(t.preventDefault(),this._announceInvalidCharacter("Invalid character "+i+" not entered."))}}},_checkPatternValidity:function(){var t=this._patternRegExp;if(!t)return!0;for(var e=0;e<this.inputElement.value.length;e++)if(!t.test(this.inputElement.value[e]))return!1;return!0},validate:function(){if(!this.inputElement)return this.invalid=!1,!0;var t=this.inputElement.checkValidity();return t&&(this.required&&this.bindValue===""?t=!1:this.hasValidator()&&(t=gs.validate.call(this,this.bindValue))),this.invalid=!t,this.fire("iron-input-validate"),t},_announceInvalidCharacter:function(t){this.fire("iron-announce",{text:t})},_computeValue:function(t){return t}});/**
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
*/const jl=q`<custom-style>
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
</custom-style>`;jl.setAttribute("style","display: none;");document.head.appendChild(jl.content);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Ul={attached:function(){this.fire("addon-attached")},update:function(t){}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/W({_template:q`
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
`,is:"paper-input-char-counter",behaviors:[Ul],properties:{_charCounterStr:{type:String,value:"0"}},update:function(t){if(t.inputElement){t.value=t.value||"";var e=t.value.toString().length.toString();t.inputElement.hasAttribute("maxlength")&&(e+="/"+t.inputElement.getAttribute("maxlength")),this._charCounterStr=e}}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Kl=q`
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
`;Kl.setAttribute("style","display: none;");document.head.appendChild(Kl.content);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Wl=q`
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
</custom-style>`;Wl.setAttribute("style","display: none;");document.head.appendChild(Wl.content);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const ql=q`
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
`;ql.setAttribute("style","display: none;");document.head.appendChild(ql.content);W({_template:q`
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
`,is:"paper-input-container",properties:{noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},attrForValue:{type:String,value:"bind-value"},autoValidate:{type:Boolean,value:!1},invalid:{observer:"_invalidChanged",type:Boolean,value:!1},focused:{readOnly:!0,type:Boolean,value:!1,notify:!0},_addons:{type:Array},_inputHasContent:{type:Boolean,value:!1},_inputSelector:{type:String,value:"input,iron-input,textarea,.paper-input-input"},_boundOnFocus:{type:Function,value:function(){return this._onFocus.bind(this)}},_boundOnBlur:{type:Function,value:function(){return this._onBlur.bind(this)}},_boundOnInput:{type:Function,value:function(){return this._onInput.bind(this)}},_boundValueChanged:{type:Function,value:function(){return this._onValueChanged.bind(this)}}},listeners:{"addon-attached":"_onAddonAttached","iron-input-validate":"_onIronInputValidate"},get _valueChangedEvent(){return this.attrForValue+"-changed"},get _propertyForValue(){return As(this.attrForValue)},get _inputElement(){return E(this).querySelector(this._inputSelector)},get _inputElementValue(){return this._inputElement[this._propertyForValue]||this._inputElement.value},ready:function(){this.__isFirstValueUpdate=!0,this._addons||(this._addons=[]),this.addEventListener("focus",this._boundOnFocus,!0),this.addEventListener("blur",this._boundOnBlur,!0)},attached:function(){this.attrForValue?this._inputElement.addEventListener(this._valueChangedEvent,this._boundValueChanged):this.addEventListener("input",this._onInput),this._inputElementValue&&this._inputElementValue!=""?this._handleValueAndAutoValidate(this._inputElement):this._handleValue(this._inputElement)},_onAddonAttached:function(t){this._addons||(this._addons=[]);var e=t.target;this._addons.indexOf(e)===-1&&(this._addons.push(e),this.isAttached&&this._handleValue(this._inputElement))},_onFocus:function(){this._setFocused(!0)},_onBlur:function(){this._setFocused(!1),this._handleValueAndAutoValidate(this._inputElement)},_onInput:function(t){this._handleValueAndAutoValidate(t.target)},_onValueChanged:function(t){var e=t.target;this.__isFirstValueUpdate&&(this.__isFirstValueUpdate=!1,e.value===void 0||e.value==="")||this._handleValueAndAutoValidate(t.target)},_handleValue:function(t){var e=this._inputElementValue;e||e===0||t.type==="number"&&!t.checkValidity()?this._inputHasContent=!0:this._inputHasContent=!1,this.updateAddons({inputElement:t,value:e,invalid:this.invalid})},_handleValueAndAutoValidate:function(t){if(this.autoValidate&&t){var e;t.validate?e=t.validate(this._inputElementValue):e=t.checkValidity(),this.invalid=!e}this._handleValue(t)},_onIronInputValidate:function(t){this.invalid=this._inputElement.invalid},_invalidChanged:function(){this._addons&&this.updateAddons({invalid:this.invalid})},updateAddons:function(t){for(var e,i=0;e=this._addons[i];i++)e.update(t)},_computeInputContentClass:function(t,e,i,n,s){var r="input-content";if(t)s&&(r+=" label-is-hidden"),n&&(r+=" is-invalid");else{var o=this.querySelector("label");e||s?(r+=" label-is-floating",this.$.labelAndInputContainer.style.position="static",n?r+=" is-invalid":i&&(r+=" label-is-highlighted")):(o&&(this.$.labelAndInputContainer.style.position="relative"),n&&(r+=" is-invalid"))}return i&&(r+=" focused"),r},_computeUnderlineClass:function(t,e){var i="underline";return e?i+=" is-invalid":t&&(i+=" is-highlighted"),i},_computeAddOnContentClass:function(t,e){var i="add-on-content";return e?i+=" is-invalid":t&&(i+=" is-highlighted"),i}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/W({_template:q`
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
`,is:"paper-input-error",behaviors:[Ul],properties:{invalid:{readOnly:!0,reflectToAttribute:!0,type:Boolean}},update:function(t){this._setInvalid(t.invalid)}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Yl={properties:{name:{type:String},value:{notify:!0,type:String},required:{type:Boolean,value:!1}},attached:function(){},detached:function(){}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const ut={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0),this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(t){this._setFocused(t.type==="focus")},_disabledChanged:function(t,e){this.setAttribute("aria-disabled",t?"true":"false"),this.style.pointerEvents=t?"none":"",t?(this._oldTabIndex=this.getAttribute("tabindex"),this._setFocused(!1),this.tabIndex=-1,this.blur()):this._oldTabIndex!==void 0&&(this._oldTabIndex===null?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const ot={};ot.NextLabelID=1;ot.NextAddonID=1;ot.NextInputID=1;const q1={properties:{label:{type:String},value:{notify:!0,type:String},disabled:{type:Boolean,value:!1},invalid:{type:Boolean,value:!1,notify:!0},allowedPattern:{type:String},type:{type:String},list:{type:String},pattern:{type:String},required:{type:Boolean,value:!1},errorMessage:{type:String},charCounter:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},autoValidate:{type:Boolean,value:!1},validator:{type:String},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,observer:"_autofocusChanged"},inputmode:{type:String},minlength:{type:Number},maxlength:{type:Number},min:{type:String},max:{type:String},step:{type:String},name:{type:String},placeholder:{type:String,value:""},readonly:{type:Boolean,value:!1},size:{type:Number},autocapitalize:{type:String,value:"none"},autocorrect:{type:String,value:"off"},autosave:{type:String},results:{type:Number},accept:{type:String},multiple:{type:Boolean},_ariaDescribedBy:{type:String,value:""},_ariaLabelledBy:{type:String,value:""},_inputId:{type:String,value:""}},listeners:{"addon-attached":"_onAddonAttached"},keyBindings:{"shift+tab:keydown":"_onShiftTabDown"},hostAttributes:{tabindex:0},get inputElement(){return this.$||(this.$={}),this.$.input||(this._generateInputId(),this.$.input=this.$$("#"+this._inputId)),this.$.input},get _focusableElement(){return this.inputElement},created:function(){this._typesThatHaveText=["date","datetime","datetime-local","month","time","week","file"]},attached:function(){this._updateAriaLabelledBy(),!ei&&this.inputElement&&this._typesThatHaveText.indexOf(this.inputElement.type)!==-1&&(this.alwaysFloatLabel=!0)},_appendStringWithSpace:function(t,e){return t?t=t+" "+e:t=e,t},_onAddonAttached:function(t){var e=E(t).rootTarget;if(e.id)this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,e.id);else{var i="paper-input-add-on-"+ot.NextAddonID++;e.id=i,this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,i)}},validate:function(){return this.inputElement.validate()},_focusBlurHandler:function(t){ut._focusBlurHandler.call(this,t),this.focused&&!this._shiftTabPressed&&this._focusableElement&&this._focusableElement.focus()},_onShiftTabDown:function(t){var e=this.getAttribute("tabindex");this._shiftTabPressed=!0,this.setAttribute("tabindex","-1"),this.async(function(){this.setAttribute("tabindex",e),this._shiftTabPressed=!1},1)},_handleAutoValidate:function(){this.autoValidate&&this.validate()},updateValueAndPreserveCaret:function(t){try{var e=this.inputElement.selectionStart;this.value=t,this.inputElement.selectionStart=e,this.inputElement.selectionEnd=e}catch{this.value=t}},_computeAlwaysFloatLabel:function(t,e){return e||t},_updateAriaLabelledBy:function(){var t=E(this.root).querySelector("label");if(!t){this._ariaLabelledBy="";return}var e;t.id?e=t.id:(e="paper-input-label-"+ot.NextLabelID++,t.id=e),this._ariaLabelledBy=e},_generateInputId:function(){(!this._inputId||this._inputId==="")&&(this._inputId="input-"+ot.NextInputID++)},_onChange:function(t){this.shadowRoot&&this.fire(t.type,{sourceEvent:t},{node:this,bubbles:t.bubbles,cancelable:t.cancelable})},_autofocusChanged:function(){if(this.autofocus&&this._focusableElement){var t=document.activeElement,e=t instanceof HTMLElement,i=e&&t!==document.body&&t!==document.documentElement;i||this._focusableElement.focus()}}},Y1=[ut,Ye,q1];/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/W({is:"paper-input",_template:q`
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
  `,behaviors:[Y1,Yl],properties:{value:{type:String},inputRole:{type:String,value:void 0},inputAriaHaspopup:{type:String,value:void 0}},get _focusableElement(){return this.inputElement._inputElement},listeners:{"iron-input-ready":"_onIronInputReady"},_onIronInputReady:function(){this.$.nativeInput||(this.$.nativeInput=this.$$("input")),this.inputElement&&this._typesThatHaveText.indexOf(this.$.nativeInput.type)!==-1&&(this.alwaysFloatLabel=!0),this.inputElement.bindValue&&this.$.container._handleValueAndAutoValidate(this.inputElement)}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/let ui;const J1=()=>{if(ui!==void 0)return ui;const t=document.createElement("div");Object.assign(t.style,{overflow:"auto",position:"fixed",left:"0px",top:"0px",maxWidth:"100px",maxHeight:"100px"});const e=document.createElement("div");return e.style.width="200px",e.style.height="200px",t.appendChild(e),document.body.appendChild(t),ui=Math.abs(t.offsetWidth-100)>1?t.offsetWidth-t.clientWidth:0,document.body.removeChild(t),ui},X1={properties:{sizingTarget:{type:Object,value:function(){return this}},fitInto:{type:Object,value:window},noOverlap:{type:Boolean},positionTarget:{type:Element},horizontalAlign:{type:String},verticalAlign:{type:String},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},autoFitOnAttach:{type:Boolean,value:!1},expandSizingTargetForScrollbars:{type:Boolean,value:!1},_fitInfo:{type:Object}},get _fitWidth(){var t;return this.fitInto===window?t=this.fitInto.innerWidth:t=this.fitInto.getBoundingClientRect().width,t},get _fitHeight(){var t;return this.fitInto===window?t=this.fitInto.innerHeight:t=this.fitInto.getBoundingClientRect().height,t},get _fitLeft(){var t;return this.fitInto===window?t=0:t=this.fitInto.getBoundingClientRect().left,t},get _fitTop(){var t;return this.fitInto===window?t=0:t=this.fitInto.getBoundingClientRect().top,t},get _defaultPositionTarget(){var t=E(this).parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&(t=t.host),t},get _localeHorizontalAlign(){if(this._isRTL){if(this.horizontalAlign==="right")return"left";if(this.horizontalAlign==="left")return"right"}return this.horizontalAlign},get __shouldPosition(){return(this.horizontalAlign||this.verticalAlign)&&this.positionTarget},get _isRTL(){return typeof this._memoizedIsRTL>"u"&&(this._memoizedIsRTL=window.getComputedStyle(this).direction=="rtl"),this._memoizedIsRTL},attached:function(){this.positionTarget=this.positionTarget||this._defaultPositionTarget,this.autoFitOnAttach&&(window.getComputedStyle(this).display==="none"?setTimeout((function(){this.fit()}).bind(this)):(window.ShadyDOM&&ShadyDOM.flush(),this.fit()))},detached:function(){this.__deferredFit&&(clearTimeout(this.__deferredFit),this.__deferredFit=null)},fit:function(){this.position(),this.constrain(),this.center()},_discoverInfo:function(){if(!this._fitInfo){var t=window.getComputedStyle(this),e=window.getComputedStyle(this.sizingTarget);this._fitInfo={inlineStyle:{top:this.style.top||"",left:this.style.left||"",position:this.style.position||""},sizerInlineStyle:{maxWidth:this.sizingTarget.style.maxWidth||"",maxHeight:this.sizingTarget.style.maxHeight||"",boxSizing:this.sizingTarget.style.boxSizing||""},positionedBy:{vertically:t.top!=="auto"?"top":t.bottom!=="auto"?"bottom":null,horizontally:t.left!=="auto"?"left":t.right!=="auto"?"right":null},sizedBy:{height:e.maxHeight!=="none",width:e.maxWidth!=="none",minWidth:parseInt(e.minWidth,10)||0,minHeight:parseInt(e.minHeight,10)||0},margin:{top:parseInt(t.marginTop,10)||0,right:parseInt(t.marginRight,10)||0,bottom:parseInt(t.marginBottom,10)||0,left:parseInt(t.marginLeft,10)||0}}}},resetFit:function(){var t=this._fitInfo||{};for(var e in t.sizerInlineStyle)this.sizingTarget.style[e]=t.sizerInlineStyle[e];for(var e in t.inlineStyle)this.style[e]=t.inlineStyle[e];this._fitInfo=null},refit:function(){var t=this.sizingTarget.scrollLeft,e=this.sizingTarget.scrollTop;this.resetFit(),this.fit(),this.sizingTarget.scrollLeft=t,this.sizingTarget.scrollTop=e},position:function(){if(!this.__shouldPosition)return;this._discoverInfo(),window.ShadyDOM&&window.ShadyDOM.flush(),this.style.position="fixed",this.sizingTarget.style.boxSizing="border-box",this.style.left="0px",this.style.top="0px";var t=this.getBoundingClientRect(),e=this.__getNormalizedRect(this.positionTarget),i=this.__getNormalizedRect(this.fitInto);let n,s,r,o;this.expandSizingTargetForScrollbars&&(n=this.sizingTarget.offsetWidth,s=this.sizingTarget.offsetHeight,r=this.sizingTarget.clientWidth,o=this.sizingTarget.clientHeight);var a=this._fitInfo.margin,l={width:t.width+a.left+a.right,height:t.height+a.top+a.bottom},c=this.__getPosition(this._localeHorizontalAlign,this.verticalAlign,l,t,e,i),h=c.left+a.left,d=c.top+a.top,u=Math.min(i.right-a.right,h+t.width),p=Math.min(i.bottom-a.bottom,d+t.height);h=Math.max(i.left+a.left,Math.min(h,u-this._fitInfo.sizedBy.minWidth)),d=Math.max(i.top+a.top,Math.min(d,p-this._fitInfo.sizedBy.minHeight));const f=Math.max(u-h,this._fitInfo.sizedBy.minWidth),g=Math.max(p-d,this._fitInfo.sizedBy.minHeight);this.sizingTarget.style.maxWidth=f+"px",this.sizingTarget.style.maxHeight=g+"px";const m=h-t.left,y=d-t.top;if(this.style.left=`${m}px`,this.style.top=`${y}px`,this.expandSizingTargetForScrollbars){const v=this.sizingTarget.offsetHeight,_=this.sizingTarget.clientHeight,b=s-o,A=v-_-b;if(A>0){const J=i.height-a.top-a.bottom,N=Math.min(J,g+A);this.sizingTarget.style.maxHeight=`${N}px`;const O=this.sizingTarget.offsetHeight,V=O-v;let M;c.verticalAlign==="top"?M=y:c.verticalAlign==="middle"?M=y-V/2:c.verticalAlign==="bottom"&&(M=y-V),M=Math.max(i.top+a.top,Math.min(M,i.bottom-a.bottom-O)),this.style.top=`${M}px`}const C=this.sizingTarget.offsetWidth,F=this.sizingTarget.clientWidth,H=n-r,K=C-F-H;if(K>0){const J=J1(),N=i.width-a.left-a.right,O=Math.min(N,f+K-J);this.sizingTarget.style.maxWidth=`${O}px`;const V=this.sizingTarget.offsetWidth+J,M=V-C;let L;c.horizontalAlign==="left"?L=m:c.horizontalAlign==="center"?L=m-M/2:c.horizontalAlign==="right"&&(L=m-M),L=Math.max(i.left+a.left,Math.min(L,i.right-a.right-V)),this.style.left=`${L}px`}}},constrain:function(){if(!this.__shouldPosition){this._discoverInfo();var t=this._fitInfo;t.positionedBy.vertically||(this.style.position="fixed",this.style.top="0px"),t.positionedBy.horizontally||(this.style.position="fixed",this.style.left="0px"),this.sizingTarget.style.boxSizing="border-box";var e=this.getBoundingClientRect();t.sizedBy.height||this.__sizeDimension(e,t.positionedBy.vertically,"top","bottom","Height"),t.sizedBy.width||this.__sizeDimension(e,t.positionedBy.horizontally,"left","right","Width")}},_sizeDimension:function(t,e,i,n,s){this.__sizeDimension(t,e,i,n,s)},__sizeDimension:function(t,e,i,n,s){var r=this._fitInfo,o=this.__getNormalizedRect(this.fitInto),a=s==="Width"?o.width:o.height,l=e===n,c=l?a-t[n]:t[i],h=r.margin[l?i:n],d="offset"+s,u=this[d]-this.sizingTarget[d];this.sizingTarget.style["max"+s]=a-h-c-u+"px"},center:function(){if(!this.__shouldPosition){this._discoverInfo();var t=this._fitInfo.positionedBy;if(!(t.vertically&&t.horizontally)){this.style.position="fixed",t.vertically||(this.style.top="0px"),t.horizontally||(this.style.left="0px");var e=this.getBoundingClientRect(),i=this.__getNormalizedRect(this.fitInto);if(!t.vertically){var n=i.top-e.top+(i.height-e.height)/2;this.style.top=n+"px"}if(!t.horizontally){var s=i.left-e.left+(i.width-e.width)/2;this.style.left=s+"px"}}}},__getNormalizedRect:function(t){return t===document.documentElement||t===window?{top:0,left:0,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth,bottom:window.innerHeight}:t.getBoundingClientRect()},__getOffscreenArea:function(t,e,i){var n=Math.min(0,t.top)+Math.min(0,i.bottom-(t.top+e.height)),s=Math.min(0,t.left)+Math.min(0,i.right-(t.left+e.width));return Math.abs(n)*e.width+Math.abs(s)*e.height},__getPosition:function(t,e,i,n,s,r){var o=[{verticalAlign:"top",horizontalAlign:"left",top:s.top+this.verticalOffset,left:s.left+this.horizontalOffset},{verticalAlign:"top",horizontalAlign:"right",top:s.top+this.verticalOffset,left:s.right-i.width-this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"left",top:s.bottom-i.height-this.verticalOffset,left:s.left+this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"right",top:s.bottom-i.height-this.verticalOffset,left:s.right-i.width-this.horizontalOffset}];if(this.noOverlap){for(var a=0,l=o.length;a<l;a++){var c={};for(var h in o[a])c[h]=o[a][h];o.push(c)}o[0].top=o[1].top+=s.height,o[2].top=o[3].top-=s.height,o[4].left=o[6].left+=s.width,o[5].left=o[7].left-=s.width}e=e==="auto"?null:e,t=t==="auto"?null:t,(!t||t==="center")&&(o.push({verticalAlign:"top",horizontalAlign:"center",top:s.top+this.verticalOffset+(this.noOverlap?s.height:0),left:s.left-n.width/2+s.width/2+this.horizontalOffset}),o.push({verticalAlign:"bottom",horizontalAlign:"center",top:s.bottom-i.height-this.verticalOffset-(this.noOverlap?s.height:0),left:s.left-n.width/2+s.width/2+this.horizontalOffset})),(!e||e==="middle")&&(o.push({verticalAlign:"middle",horizontalAlign:"left",top:s.top-n.height/2+s.height/2+this.verticalOffset,left:s.left+this.horizontalOffset+(this.noOverlap?s.width:0)}),o.push({verticalAlign:"middle",horizontalAlign:"right",top:s.top-n.height/2+s.height/2+this.verticalOffset,left:s.right-i.width-this.horizontalOffset-(this.noOverlap?s.width:0)})),e==="middle"&&t==="center"&&o.push({verticalAlign:"middle",horizontalAlign:"center",top:s.top-n.height/2+s.height/2+this.verticalOffset,left:s.left-n.width/2+s.width/2+this.horizontalOffset});for(var d,a=0;a<o.length;a++){var u=o[a],p=u.verticalAlign===e,f=u.horizontalAlign===t;if(!this.dynamicAlign&&!this.noOverlap&&p&&f){d=u;break}var g=(!e||p)&&(!t||f);if(!(!this.dynamicAlign&&!g)){if(u.offscreenArea=this.__getOffscreenArea(u,i,r),u.offscreenArea===0&&g){d=u;break}d=d||u;var m=u.offscreenArea-d.offscreenArea;(m<0||m===0&&(p||f))&&(d=u)}}return d}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var pi=new Set;const G1={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(pi.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach(function(t){this.resizerShouldNotify(t)&&this._notifyDescendant(t)},this),this._fireResize())},assignParentResizable:function(t){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=t,t&&t._interestedResizables.indexOf(this)===-1&&(t._interestedResizables.push(this),t._subscribeIronResize(this))},stopResizeNotificationsFor:function(t){var e=this._interestedResizables.indexOf(t);e>-1&&(this._interestedResizables.splice(e,1),this._unsubscribeIronResize(t))},_subscribeIronResize:function(t){t.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(t){t.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(t){return!0},_onDescendantIronResize:function(t){if(this._notifyingDescendant){t.stopPropagation();return}tn||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(t){var e=E(t).rootTarget;e!==this&&(e.assignParentResizable(this),this._notifyDescendant(e),t.stopPropagation())},_parentResizableChanged:function(t){t&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(t){this.isAttached&&(this._notifyingDescendant=!0,t.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if(document.readyState==="loading"){var t=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",function e(){document.removeEventListener("readystatechange",e),t()})}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach(function(e){e!==this&&e._findParent()},this):(pi.forEach(function(e){e!==this&&e._findParent()},this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?pi.delete(this):pi.add(this)}};/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var Ze=Element.prototype,fi=Ze.matches||Ze.matchesSelector||Ze.mozMatchesSelector||Ze.msMatchesSelector||Ze.oMatchesSelector||Ze.webkitMatchesSelector;class Z1{getTabbableNodes(e){var i=[],n=this._collectTabbableNodes(e,i);return n?this._sortByTabIndex(i):i}isFocusable(e){return fi.call(e,"input, select, textarea, button, object")?fi.call(e,":not([disabled])"):fi.call(e,"a[href], area[href], iframe, [tabindex], [contentEditable]")}isTabbable(e){return this.isFocusable(e)&&fi.call(e,':not([tabindex="-1"])')&&this._isVisible(e)}_normalizedTabIndex(e){if(this.isFocusable(e)){var i=e.getAttribute("tabindex")||0;return Number(i)}return-1}_collectTabbableNodes(e,i){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var n=e;if(!this._isVisible(n))return!1;var s=this._normalizedTabIndex(n),r=s>0;s>=0&&i.push(n);var o;n.localName==="content"||n.localName==="slot"?o=E(n).getDistributedNodes():o=E(n.root||n).children;for(var a=0;a<o.length;a++)r=this._collectTabbableNodes(o[a],i)||r;return r}_isVisible(e){var i=e.style;return i.visibility!=="hidden"&&i.display!=="none"?(i=window.getComputedStyle(e),i.visibility!=="hidden"&&i.display!=="none"):!1}_sortByTabIndex(e){var i=e.length;if(i<2)return e;var n=Math.ceil(i/2),s=this._sortByTabIndex(e.slice(0,n)),r=this._sortByTabIndex(e.slice(n));return this._mergeSortByTabIndex(s,r)}_mergeSortByTabIndex(e,i){for(var n=[];e.length>0&&i.length>0;)this._hasLowerTabOrder(e[0],i[0])?n.push(i.shift()):n.push(e.shift());return n.concat(e,i)}_hasLowerTabOrder(e,i){var n=Math.max(e.tabIndex,0),s=Math.max(i.tabIndex,0);return n===0||s===0?s>n:n>s}}const Q1=new Z1;/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/W({_template:q`
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
`,is:"iron-overlay-backdrop",properties:{opened:{reflectToAttribute:!0,type:Boolean,value:!1,observer:"_openedChanged"}},listeners:{transitionend:"_onTransitionend"},created:function(){this.__openedRaf=null},attached:function(){this.opened&&this._openedChanged(this.opened)},prepare:function(){this.opened&&!this.parentNode&&E(document.body).appendChild(this)},open:function(){this.opened=!0},close:function(){this.opened=!1},complete:function(){!this.opened&&this.parentNode===document.body&&E(this.parentNode).removeChild(this)},_onTransitionend:function(t){t&&t.target===this&&this.complete()},_openedChanged:function(t){if(t)this.prepare();else{var e=window.getComputedStyle(this);(e.transitionDuration==="0s"||e.opacity==0)&&this.complete()}this.isAttached&&(this.__openedRaf&&(window.cancelAnimationFrame(this.__openedRaf),this.__openedRaf=null),this.scrollTop=this.scrollTop,this.__openedRaf=window.requestAnimationFrame((function(){this.__openedRaf=null,this.toggleClass("opened",this.opened)}).bind(this)))}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class ef{constructor(){this._overlays=[],this._minimumZ=101,this._backdropElement=null,yl(document.documentElement,"tap",function(){}),document.addEventListener("tap",this._onCaptureClick.bind(this),!0),document.addEventListener("focus",this._onCaptureFocus.bind(this),!0),document.addEventListener("keydown",this._onCaptureKeyDown.bind(this),!0)}get backdropElement(){return this._backdropElement||(this._backdropElement=document.createElement("iron-overlay-backdrop")),this._backdropElement}get deepActiveElement(){var e=document.activeElement;for((!e||!(e instanceof Element))&&(e=document.body);e.root&&E(e.root).activeElement;)e=E(e.root).activeElement;return e}_bringOverlayAtIndexToFront(e){var i=this._overlays[e];if(i){var n=this._overlays.length-1,s=this._overlays[n];if(s&&this._shouldBeBehindOverlay(i,s)&&n--,!(e>=n)){var r=Math.max(this.currentOverlayZ(),this._minimumZ);for(this._getZ(i)<=r&&this._applyOverlayZ(i,r);e<n;)this._overlays[e]=this._overlays[e+1],e++;this._overlays[n]=i}}}addOrRemoveOverlay(e){e.opened?this.addOverlay(e):this.removeOverlay(e)}addOverlay(e){var i=this._overlays.indexOf(e);if(i>=0){this._bringOverlayAtIndexToFront(i),this.trackBackdrop();return}var n=this._overlays.length,s=this._overlays[n-1],r=Math.max(this._getZ(s),this._minimumZ),o=this._getZ(e);if(s&&this._shouldBeBehindOverlay(e,s)){this._applyOverlayZ(s,r),n--;var a=this._overlays[n-1];r=Math.max(this._getZ(a),this._minimumZ)}o<=r&&this._applyOverlayZ(e,r),this._overlays.splice(n,0,e),this.trackBackdrop()}removeOverlay(e){var i=this._overlays.indexOf(e);i!==-1&&(this._overlays.splice(i,1),this.trackBackdrop())}currentOverlay(){var e=this._overlays.length-1;return this._overlays[e]}currentOverlayZ(){return this._getZ(this.currentOverlay())}ensureMinimumZ(e){this._minimumZ=Math.max(this._minimumZ,e)}focusOverlay(){var e=this.currentOverlay();e&&e._applyFocus()}trackBackdrop(){var e=this._overlayWithBackdrop();!e&&!this._backdropElement||(this.backdropElement.style.zIndex=this._getZ(e)-1,this.backdropElement.opened=!!e,this.backdropElement.prepare())}getBackdrops(){for(var e=[],i=0;i<this._overlays.length;i++)this._overlays[i].withBackdrop&&e.push(this._overlays[i]);return e}backdropZ(){return this._getZ(this._overlayWithBackdrop())-1}_overlayWithBackdrop(){for(var e=this._overlays.length-1;e>=0;e--)if(this._overlays[e].withBackdrop)return this._overlays[e]}_getZ(e){var i=this._minimumZ;if(e){var n=Number(e.style.zIndex||window.getComputedStyle(e).zIndex);n===n&&(i=n)}return i}_setZ(e,i){e.style.zIndex=i}_applyOverlayZ(e,i){this._setZ(e,i+2)}_overlayInPath(e){e=e||[];for(var i=0;i<e.length;i++)if(e[i]._manager===this)return e[i]}_onCaptureClick(e){var i=this._overlays.length-1;if(i!==-1)for(var n=E(e).path,s;(s=this._overlays[i])&&this._overlayInPath(n)!==s&&(s._onCaptureClick(e),s.allowClickThrough);)i--}_onCaptureFocus(e){var i=this.currentOverlay();i&&i._onCaptureFocus(e)}_onCaptureKeyDown(e){var i=this.currentOverlay();i&&(Ye.keyboardEventMatchesKeys(e,"esc")?i._onCaptureEsc(e):Ye.keyboardEventMatchesKeys(e,"tab")&&i._onCaptureTab(e))}_shouldBeBehindOverlay(e,i){return!e.alwaysOnTop&&i.alwaysOnTop}}const tf=new ef;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var Yi={pageX:0,pageY:0},fo=null,Vn=[],Ji=["wheel","mousewheel","DOMMouseScroll","touchstart","touchmove"],Li,Js;function nf(t){ge.indexOf(t)>=0||(ge.length===0&&of(),ge.push(t),Js=ge[ge.length-1])}function sf(t){var e=ge.indexOf(t);e!==-1&&(ge.splice(e,1),Js=ge[ge.length-1],ge.length===0&&af())}const ge=[];function rf(t){if(t.cancelable&&lf(t)&&t.preventDefault(),t.targetTouches){var e=t.targetTouches[0];Yi.pageX=e.pageX,Yi.pageY=e.pageY}}function of(){Li=Li||rf.bind(void 0);for(var t=0,e=Ji.length;t<e;t++)document.addEventListener(Ji[t],Li,{capture:!0,passive:!1})}function af(){for(var t=0,e=Ji.length;t<e;t++)document.removeEventListener(Ji[t],Li,{capture:!0,passive:!1})}function lf(t){var e=E(t).rootTarget;if(t.type!=="touchmove"&&fo!==e&&(fo=e,Vn=cf(E(t).path)),!Vn.length)return!0;if(t.type==="touchstart")return!1;var i=df(t);return!hf(Vn,i.deltaX,i.deltaY)}function cf(t){for(var e=[],i=t.indexOf(Js),n=0;n<=i;n++)if(t[n].nodeType===Node.ELEMENT_NODE){var s=t[n],r=s.style;r.overflow!=="scroll"&&r.overflow!=="auto"&&(r=window.getComputedStyle(s)),(r.overflow==="scroll"||r.overflow==="auto")&&e.push(s)}return e}function hf(t,e,i){if(!(!e&&!i))for(var n=Math.abs(i)>=Math.abs(e),s=0;s<t.length;s++){var r=t[s],o=!1;if(n?o=i<0?r.scrollTop>0:r.scrollTop<r.scrollHeight-r.clientHeight:o=e<0?r.scrollLeft>0:r.scrollLeft<r.scrollWidth-r.clientWidth,o)return r}}function df(t){var e={deltaX:t.deltaX,deltaY:t.deltaY};if(!("deltaX"in t)){if("wheelDeltaX"in t&&"wheelDeltaY"in t)e.deltaX=-t.wheelDeltaX,e.deltaY=-t.wheelDeltaY;else if("wheelDelta"in t)e.deltaX=0,e.deltaY=-t.wheelDelta;else if("axis"in t)e.deltaX=t.axis===1?t.detail:0,e.deltaY=t.axis===2?t.detail:0;else if(t.targetTouches){var i=t.targetTouches[0];e.deltaX=Yi.pageX-i.pageX,e.deltaY=Yi.pageY-i.pageY}}return e}/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Mt={properties:{opened:{observer:"_openedChanged",type:Boolean,value:!1,notify:!0},canceled:{observer:"_canceledChanged",readOnly:!0,type:Boolean,value:!1},withBackdrop:{observer:"_withBackdropChanged",type:Boolean},noAutoFocus:{type:Boolean,value:!1},noCancelOnEscKey:{type:Boolean,value:!1},noCancelOnOutsideClick:{type:Boolean,value:!1},closingReason:{type:Object},restoreFocusOnClose:{type:Boolean,value:!1},allowClickThrough:{type:Boolean},alwaysOnTop:{type:Boolean},scrollAction:{type:String},_manager:{type:Object,value:tf},_focusedChild:{type:Object}},listeners:{"iron-resize":"_onIronResize"},observers:["__updateScrollObservers(isAttached, opened, scrollAction)"],get backdropElement(){return this._manager.backdropElement},get _focusNode(){return this._focusedChild||E(this).querySelector("[autofocus]")||this},get _focusableNodes(){return Q1.getTabbableNodes(this)},ready:function(){this.__isAnimating=!1,this.__shouldRemoveTabIndex=!1,this.__firstFocusableNode=this.__lastFocusableNode=null,this.__rafs={},this.__restoreFocusNode=null,this.__scrollTop=this.__scrollLeft=null,this.__onCaptureScroll=this.__onCaptureScroll.bind(this),this.__rootNodes=null,this._ensureSetup()},attached:function(){this.opened&&this._openedChanged(this.opened),this._observer=E(this).observeNodes(this._onNodesChange)},detached:function(){this._observer&&E(this).unobserveNodes(this._observer),this._observer=null;for(var t in this.__rafs)this.__rafs[t]!==null&&cancelAnimationFrame(this.__rafs[t]);this.__rafs={},this._manager.removeOverlay(this),this.__isAnimating&&(this.opened?this._finishRenderOpened():(this._applyFocus(),this._finishRenderClosed()))},toggle:function(){this._setCanceled(!1),this.opened=!this.opened},open:function(){this._setCanceled(!1),this.opened=!0},close:function(){this._setCanceled(!1),this.opened=!1},cancel:function(t){var e=this.fire("iron-overlay-canceled",t,{cancelable:!0});e.defaultPrevented||(this._setCanceled(!0),this.opened=!1)},invalidateTabbables:function(){this.__firstFocusableNode=this.__lastFocusableNode=null},_ensureSetup:function(){this._overlaySetup||(this._overlaySetup=!0,this.style.outline="none",this.style.display="none")},_openedChanged:function(t){t?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true"),this.isAttached&&(this.__isAnimating=!0,this.__deraf("__openedChanged",this.__openedChanged))},_canceledChanged:function(){this.closingReason=this.closingReason||{},this.closingReason.canceled=this.canceled},_withBackdropChanged:function(){this.withBackdrop&&!this.hasAttribute("tabindex")?(this.setAttribute("tabindex","-1"),this.__shouldRemoveTabIndex=!0):this.__shouldRemoveTabIndex&&(this.removeAttribute("tabindex"),this.__shouldRemoveTabIndex=!1),this.opened&&this.isAttached&&this._manager.trackBackdrop()},_prepareRenderOpened:function(){this.__restoreFocusNode=this._manager.deepActiveElement,this._preparePositioning(),this.refit(),this._finishPositioning(),this.noAutoFocus&&document.activeElement===this._focusNode&&(this._focusNode.blur(),this.__restoreFocusNode.focus())},_renderOpened:function(){this._finishRenderOpened()},_renderClosed:function(){this._finishRenderClosed()},_finishRenderOpened:function(){this.notifyResize(),this.__isAnimating=!1,this.fire("iron-overlay-opened")},_finishRenderClosed:function(){this.style.display="none",this.style.zIndex="",this.notifyResize(),this.__isAnimating=!1,this.fire("iron-overlay-closed",this.closingReason)},_preparePositioning:function(){this.style.transition=this.style.webkitTransition="none",this.style.transform=this.style.webkitTransform="none",this.style.display=""},_finishPositioning:function(){this.style.display="none",this.scrollTop=this.scrollTop,this.style.transition=this.style.webkitTransition="",this.style.transform=this.style.webkitTransform="",this.style.display="",this.scrollTop=this.scrollTop},_applyFocus:function(){if(this.opened)this.noAutoFocus||this._focusNode.focus();else{if(this.restoreFocusOnClose&&this.__restoreFocusNode){var t=this._manager.deepActiveElement;(t===document.body||pf(this,t))&&this.__restoreFocusNode.focus()}this.__restoreFocusNode=null,this._focusNode.blur(),this._focusedChild=null}},_onCaptureClick:function(t){this.noCancelOnOutsideClick||this.cancel(t)},_onCaptureFocus:function(t){if(this.withBackdrop){var e=E(t).path;e.indexOf(this)===-1?(t.stopPropagation(),this._applyFocus()):this._focusedChild=e[0]}},_onCaptureEsc:function(t){this.noCancelOnEscKey||this.cancel(t)},_onCaptureTab:function(t){if(this.withBackdrop){this.__ensureFirstLastFocusables();var e=t.shiftKey,i=e?this.__firstFocusableNode:this.__lastFocusableNode,n=e?this.__lastFocusableNode:this.__firstFocusableNode,s=!1;if(i===n)s=!0;else{var r=this._manager.deepActiveElement;s=r===i||r===this}s&&(t.preventDefault(),this._focusedChild=n,this._applyFocus())}},_onIronResize:function(){this.opened&&!this.__isAnimating&&this.__deraf("refit",this.refit)},_onNodesChange:function(){this.opened&&!this.__isAnimating&&(this.invalidateTabbables(),this.notifyResize())},__ensureFirstLastFocusables:function(){var t=this._focusableNodes;this.__firstFocusableNode=t[0],this.__lastFocusableNode=t[t.length-1]},__openedChanged:function(){this.opened?(this._prepareRenderOpened(),this._manager.addOverlay(this),this._applyFocus(),this._renderOpened()):(this._manager.removeOverlay(this),this._applyFocus(),this._renderClosed())},__deraf:function(t,e){var i=this.__rafs;i[t]!==null&&cancelAnimationFrame(i[t]),i[t]=requestAnimationFrame((function(){i[t]=null,e.call(this)}).bind(this))},__updateScrollObservers:function(t,e,i){!t||!e||!this.__isValidScrollAction(i)?(sf(this),this.__removeScrollListeners()):(i==="lock"&&(this.__saveScrollPosition(),nf(this)),this.__addScrollListeners())},__addScrollListeners:function(){if(!this.__rootNodes){if(this.__rootNodes=[],tn)for(var t=this;t;)t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host&&this.__rootNodes.push(t),t=t.host||t.assignedSlot||t.parentNode;this.__rootNodes.push(document)}this.__rootNodes.forEach(function(e){e.addEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})},this)},__removeScrollListeners:function(){this.__rootNodes&&this.__rootNodes.forEach(function(t){t.removeEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})},this),this.isAttached||(this.__rootNodes=null)},__isValidScrollAction:function(t){return t==="lock"||t==="refit"||t==="cancel"},__onCaptureScroll:function(t){if(!this.__isAnimating&&!(E(t).path.indexOf(this)>=0))switch(this.scrollAction){case"lock":this.__restoreScrollPosition();break;case"refit":this.__deraf("refit",this.refit);break;case"cancel":this.cancel(t);break}},__saveScrollPosition:function(){document.scrollingElement?(this.__scrollTop=document.scrollingElement.scrollTop,this.__scrollLeft=document.scrollingElement.scrollLeft):(this.__scrollTop=Math.max(document.documentElement.scrollTop,document.body.scrollTop),this.__scrollLeft=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft))},__restoreScrollPosition:function(){document.scrollingElement?(document.scrollingElement.scrollTop=this.__scrollTop,document.scrollingElement.scrollLeft=this.__scrollLeft):(document.documentElement.scrollTop=document.body.scrollTop=this.__scrollTop,document.documentElement.scrollLeft=document.body.scrollLeft=this.__scrollLeft)}},uf=t=>t.assignedSlot||t.parentNode||t.host,pf=(t,e)=>{for(let i=e;i;i=uf(i))if(i===t)return!0;return!1},ff=[X1,G1,Mt];/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const gf={properties:{animationConfig:{type:Object},entryAnimation:{observer:"_entryAnimationChanged",type:String},exitAnimation:{observer:"_exitAnimationChanged",type:String}},_entryAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.entry=[{name:this.entryAnimation,node:this}]},_exitAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.exit=[{name:this.exitAnimation,node:this}]},_copyProperties:function(t,e){for(var i in e)t[i]=e[i]},_cloneConfig:function(t){var e={isClone:!0};return this._copyProperties(e,t),e},_getAnimationConfigRecursive:function(t,e,i){if(this.animationConfig){if(this.animationConfig.value&&typeof this.animationConfig.value=="function"){this._warn(this._logf("playAnimation","Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."));return}var n;if(t?n=this.animationConfig[t]:n=this.animationConfig,Array.isArray(n)||(n=[n]),n)for(var s,r=0;s=n[r];r++)if(s.animatable)s.animatable._getAnimationConfigRecursive(s.type||t,e,i);else if(s.id){var o=e[s.id];o?(o.isClone||(e[s.id]=this._cloneConfig(o),o=e[s.id]),this._copyProperties(o,s)):e[s.id]=s}else i.push(s)}},getAnimationConfig:function(t){var e={},i=[];this._getAnimationConfigRecursive(t,e,i);for(var n in e)i.push(e[n]);return i}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const mf={_configureAnimations:function(t){var e=[],i=[];if(t.length>0)for(let s,r=0;s=t[r];r++){let o=document.createElement(s.name);if(o.isNeonAnimation){let a=null;o.configure||(o.configure=function(l){return null}),a=o.configure(s),i.push({result:a,config:s,neonAnimation:o})}else console.warn(this.is+":",s.name,"not found!")}for(var n=0;n<i.length;n++){let s=i[n].result,r=i[n].config,o=i[n].neonAnimation;try{typeof s.cancel!="function"&&(s=document.timeline.play(s))}catch(a){s=null,console.warn("Couldnt play","(",r.name,").",a)}s&&e.push({neonAnimation:o,config:r,animation:s})}return e},_shouldComplete:function(t){for(var e=!0,i=0;i<t.length;i++)if(t[i].animation.playState!="finished"){e=!1;break}return e},_complete:function(t){for(var e=0;e<t.length;e++)t[e].neonAnimation.complete(t[e].config);for(var e=0;e<t.length;e++)t[e].animation.cancel()},playAnimation:function(t,e){var i=this.getAnimationConfig(t);if(i){this._active=this._active||{},this._active[t]&&(this._complete(this._active[t]),delete this._active[t]);var n=this._configureAnimations(i);if(n.length==0){this.fire("neon-animation-finish",e,{bubbles:!1});return}this._active[t]=n;for(var s=0;s<n.length;s++)n[s].animation.onfinish=(function(){this._shouldComplete(n)&&(this._complete(n),delete this._active[t],this.fire("neon-animation-finish",e,{bubbles:!1}))}).bind(this)}},cancelAnimation:function(){for(var t in this._active){var e=this._active[t];for(var i in e)e[i].animation.cancel()}this._active={}}},yf=[gf,mf];/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/W({_template:q`
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
`,is:"iron-dropdown",behaviors:[ut,Ye,ff,yf],properties:{horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},openAnimationConfig:{type:Object},closeAnimationConfig:{type:Object},focusTarget:{type:Object},noAnimations:{type:Boolean,value:!1},allowOutsideScroll:{type:Boolean,value:!1,observer:"_allowOutsideScrollChanged"}},listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},observers:["_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)"],get containedElement(){for(var t=E(this.$.content).getDistributedNodes(),e=0,i=t.length;e<i;e++)if(t[e].nodeType===Node.ELEMENT_NODE)return t[e]},ready:function(){this.scrollAction||(this.scrollAction=this.allowOutsideScroll?"refit":"lock"),this._readied=!0},attached:function(){(!this.sizingTarget||this.sizingTarget===this)&&(this.sizingTarget=this.containedElement||this)},detached:function(){this.cancelAnimation()},_openedChanged:function(){this.opened&&this.disabled?this.cancel():(this.cancelAnimation(),this._updateAnimationConfig(),Mt._openedChanged.apply(this,arguments))},_renderOpened:function(){!this.noAnimations&&this.animationConfig.open?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("open")):Mt._renderOpened.apply(this,arguments)},_renderClosed:function(){!this.noAnimations&&this.animationConfig.close?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("close")):Mt._renderClosed.apply(this,arguments)},_onNeonAnimationFinish:function(){this.$.contentWrapper.classList.remove("animating"),this.opened?this._finishRenderOpened():this._finishRenderClosed()},_updateAnimationConfig:function(){for(var t=this.containedElement,e=[].concat(this.openAnimationConfig||[]).concat(this.closeAnimationConfig||[]),i=0;i<e.length;i++)e[i].node=t;this.animationConfig={open:this.openAnimationConfig,close:this.closeAnimationConfig}},_updateOverlayPosition:function(){this.isAttached&&this.notifyResize()},_allowOutsideScrollChanged:function(t){this._readied&&(t?(!this.scrollAction||this.scrollAction==="lock")&&(this.scrollAction="refit"):this.scrollAction="lock")},_applyFocus:function(){var t=this.focusTarget||this.containedElement;t&&this.opened&&!this.noAutoFocus?t.focus():Mt._applyFocus.apply(this,arguments)}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const mt={properties:{animationTiming:{type:Object,value:function(){return{duration:500,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"both"}}}},isNeonAnimation:!0,created:function(){document.body.animate||console.warn("No web animations detected. This element will not function without a web animations polyfill.")},timingFromConfig:function(t){if(t.timing)for(var e in t.timing)this.animationTiming[e]=t.timing[e];return this.animationTiming},setPrefixedProperty:function(t,e,i){for(var n={transform:["webkitTransform"],transformOrigin:["mozTransformOrigin","webkitTransformOrigin"]},s=n[e],r,o=0;r=s[o];o++)t.style[r]=i;t.style[e]=i},complete:function(t){}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/W({is:"fade-in-animation",behaviors:[mt],configure:function(t){var e=t.node;return this._effect=new KeyframeEffect(e,[{opacity:"0"},{opacity:"1"}],this.timingFromConfig(t)),this._effect}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/W({is:"fade-out-animation",behaviors:[mt],configure:function(t){var e=t.node;return this._effect=new KeyframeEffect(e,[{opacity:"1"},{opacity:"0"}],this.timingFromConfig(t)),this._effect}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Jl=q`
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
</custom-style>`;Jl.setAttribute("style","display: none;");document.head.appendChild(Jl.content);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/W({is:"paper-menu-grow-height-animation",_template:null,behaviors:[mt],configure:function(t){var e=t.node,i=e.getBoundingClientRect(),n=i.height;return this._effect=new KeyframeEffect(e,[{height:n/2+"px"},{height:n+"px"}],this.timingFromConfig(t)),this._effect}});W({is:"paper-menu-grow-width-animation",_template:null,behaviors:[mt],configure:function(t){var e=t.node,i=e.getBoundingClientRect(),n=i.width;return this._effect=new KeyframeEffect(e,[{width:n/2+"px"},{width:n+"px"}],this.timingFromConfig(t)),this._effect}});W({is:"paper-menu-shrink-width-animation",_template:null,behaviors:[mt],configure:function(t){var e=t.node,i=e.getBoundingClientRect(),n=i.width;return this._effect=new KeyframeEffect(e,[{width:n+"px"},{width:n-n/20+"px"}],this.timingFromConfig(t)),this._effect}});W({is:"paper-menu-shrink-height-animation",_template:null,behaviors:[mt],configure:function(t){var e=t.node,i=e.getBoundingClientRect(),n=i.height;return this.setPrefixedProperty(e,"transformOrigin","0 0"),this._effect=new KeyframeEffect(e,[{height:n+"px",transform:"translateY(0)"},{height:n/2+"px",transform:"translateY(-20px)"}],this.timingFromConfig(t)),this._effect}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var Vt={ANIMATION_CUBIC_BEZIER:"cubic-bezier(.3,.95,.5,1)",MAX_ANIMATION_TIME_MS:400};const vf=W({_template:q`
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
`,is:"paper-menu-button",behaviors:[Ye,ut],properties:{opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},noOverlap:{type:Boolean},noAnimations:{type:Boolean,value:!1},ignoreSelect:{type:Boolean,value:!1},closeOnActivate:{type:Boolean,value:!1},openAnimationConfig:{type:Object,value:function(){return[{name:"fade-in-animation",timing:{delay:100,duration:200}},{name:"paper-menu-grow-width-animation",timing:{delay:100,duration:150,easing:Vt.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-grow-height-animation",timing:{delay:100,duration:275,easing:Vt.ANIMATION_CUBIC_BEZIER}}]}},closeAnimationConfig:{type:Object,value:function(){return[{name:"fade-out-animation",timing:{duration:150}},{name:"paper-menu-shrink-width-animation",timing:{delay:100,duration:50,easing:Vt.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-shrink-height-animation",timing:{duration:200,easing:"ease-in"}}]}},allowOutsideScroll:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!0},expandSizingTargetForScrollbars:{type:Boolean,value:!1},_dropdownContent:{type:Object}},hostAttributes:{role:"group","aria-haspopup":"true"},listeners:{"iron-activate":"_onIronActivate","iron-select":"_onIronSelect"},get contentElement(){for(var t=E(this.$.content).getDistributedNodes(),e=0,i=t.length;e<i;e++)if(t[e].nodeType===Node.ELEMENT_NODE)return t[e]},toggle:function(){this.opened?this.close():this.open()},open:function(){this.disabled||this.$.dropdown.open()},close:function(){this.$.dropdown.close()},_onIronSelect:function(t){this.ignoreSelect||this.close()},_onIronActivate:function(t){this.closeOnActivate&&this.close()},_openedChanged:function(t,e){t?(this._dropdownContent=this.contentElement,this.fire("paper-dropdown-open")):e!=null&&this.fire("paper-dropdown-close")},_disabledChanged:function(t){ut._disabledChanged.apply(this,arguments),t&&this.opened&&this.close()},__onIronOverlayCanceled:function(t){var e=t.detail,i=this.$.trigger,n=E(e).path;n.indexOf(i)>-1&&t.preventDefault()}});Object.keys(Vt).forEach(function(t){vf[t]=Vt[t]});/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var fe={distance:function(t,e,i,n){var s=t-i,r=e-n;return Math.sqrt(s*s+r*r)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};function Xl(t){this.element=t,this.width=this.boundingRect.width,this.height=this.boundingRect.height,this.size=Math.max(this.width,this.height)}Xl.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function(t,e){var i=fe.distance(t,e,0,0),n=fe.distance(t,e,this.width,0),s=fe.distance(t,e,0,this.height),r=fe.distance(t,e,this.width,this.height);return Math.max(i,n,s,r)}};function $e(t){this.element=t,this.color=window.getComputedStyle(t).color,this.wave=document.createElement("div"),this.waveContainer=document.createElement("div"),this.wave.style.backgroundColor=this.color,this.wave.classList.add("wave"),this.waveContainer.classList.add("wave-container"),E(this.waveContainer).appendChild(this.wave),this.resetInteractionState()}$e.MAX_RADIUS=300;$e.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var t;return this.mouseDownStart?(t=fe.now()-this.mouseDownStart,this.mouseUpStart&&(t-=this.mouseUpElapsed),t):0},get mouseUpElapsed(){return this.mouseUpStart?fe.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var t=this.containerMetrics.width*this.containerMetrics.width,e=this.containerMetrics.height*this.containerMetrics.height,i=Math.min(Math.sqrt(t+e),$e.MAX_RADIUS)*1.1+5,n=1.1-.2*(i/$e.MAX_RADIUS),s=this.mouseInteractionSeconds/n,r=i*(1-Math.pow(80,-s));return Math.abs(r)},get opacity(){return this.mouseUpStart?Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity):this.initialOpacity},get outerOpacity(){var t=this.mouseUpElapsedSeconds*.3,e=this.opacity;return Math.max(0,Math.min(t,e))},get isOpacityFullyDecayed(){return this.opacity<.01&&this.radius>=Math.min(this.maxRadius,$e.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,$e.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return Math.min(1,this.radius/this.containerMetrics.size*2/Math.sqrt(2))},get xNow(){return this.xEnd?this.xStart+this.translationFraction*(this.xEnd-this.xStart):this.xStart},get yNow(){return this.yEnd?this.yStart+this.translationFraction*(this.yEnd-this.yStart):this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function(){this.maxRadius=0,this.mouseDownStart=0,this.mouseUpStart=0,this.xStart=0,this.yStart=0,this.xEnd=0,this.yEnd=0,this.slideDistance=0,this.containerMetrics=new Xl(this.element)},draw:function(){var t,e,i;this.wave.style.opacity=this.opacity,t=this.radius/(this.containerMetrics.size/2),e=this.xNow-this.containerMetrics.width/2,i=this.yNow-this.containerMetrics.height/2,this.waveContainer.style.webkitTransform="translate("+e+"px, "+i+"px)",this.waveContainer.style.transform="translate3d("+e+"px, "+i+"px, 0)",this.wave.style.webkitTransform="scale("+t+","+t+")",this.wave.style.transform="scale3d("+t+","+t+",1)"},downAction:function(t){var e=this.containerMetrics.width/2,i=this.containerMetrics.height/2;this.resetInteractionState(),this.mouseDownStart=fe.now(),this.center?(this.xStart=e,this.yStart=i,this.slideDistance=fe.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)):(this.xStart=t?t.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2,this.yStart=t?t.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2),this.recenters&&(this.xEnd=e,this.yEnd=i,this.slideDistance=fe.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)),this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart),this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px",this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px",this.waveContainer.style.width=this.containerMetrics.size+"px",this.waveContainer.style.height=this.containerMetrics.size+"px"},upAction:function(t){this.isMouseDown&&(this.mouseUpStart=fe.now())},remove:function(){E(E(this.waveContainer).parentNode).removeChild(this.waveContainer)}};W({_template:q`
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
`,is:"paper-ripple",behaviors:[Ye],properties:{initialOpacity:{type:Number,value:.25},opacityDecayVelocity:{type:Number,value:.8},recenters:{type:Boolean,value:!1},center:{type:Boolean,value:!1},ripples:{type:Array,value:function(){return[]}},animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},attached:function(){E(this).parentNode.nodeType==11?this.keyEventTarget=E(this).getOwnerRoot().host:this.keyEventTarget=E(this).parentNode;var t=this.keyEventTarget;this.listen(t,"up","uiUpAction"),this.listen(t,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction"),this.unlisten(this.keyEventTarget,"down","uiDownAction"),this.keyEventTarget=null},get shouldKeepAnimating(){for(var t=0;t<this.ripples.length;++t)if(!this.ripples[t].isAnimationComplete)return!0;return!1},simulatedRipple:function(){this.downAction(null),this.async(function(){this.upAction()},1)},uiDownAction:function(t){this.noink||this.downAction(t)},downAction:function(t){if(!(this.holdDown&&this.ripples.length>0)){var e=this.addRipple();e.downAction(t),this._animating||(this._animating=!0,this.animate())}},uiUpAction:function(t){this.noink||this.upAction(t)},upAction:function(t){this.holdDown||(this.ripples.forEach(function(e){e.upAction(t)}),this._animating=!0,this.animate())},onAnimationComplete:function(){this._animating=!1,this.$.background.style.backgroundColor="",this.fire("transitionend")},addRipple:function(){var t=new $e(this);return E(this.$.waves).appendChild(t.waveContainer),this.$.background.style.backgroundColor=t.color,this.ripples.push(t),this._setAnimating(!0),t},removeRipple:function(t){var e=this.ripples.indexOf(t);e<0||(this.ripples.splice(e,1),t.remove(),this.ripples.length||this._setAnimating(!1))},animate:function(){if(this._animating){var t,e;for(t=0;t<this.ripples.length;++t)e=this.ripples[t],e.draw(),this.$.background.style.opacity=e.outerOpacity,e.isOpacityFullyDecayed&&!e.isRestingAtMaxRadius&&this.removeRipple(e);!this.shouldKeepAnimating&&this.ripples.length===0?this.onAnimationComplete():window.requestAnimationFrame(this._boundAnimate)}},animateRipple:function(){return this.animate()},_onEnterKeydown:function(){this.uiDownAction(),this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(t,e){e!==void 0&&(t?this.downAction():this.upAction())}});/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Xs=document.createElement("template");Xs.setAttribute("style","display: none;");Xs.innerHTML=`<iron-iconset-svg name="paper-dropdown-menu" size="24">
<svg><defs>
<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(Xs.content);/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Gs=document.createElement("template");Gs.setAttribute("style","display: none;");Gs.innerHTML=`<dom-module id="paper-dropdown-menu-shared-styles">
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
</dom-module>`;document.head.appendChild(Gs.content);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const _f={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){this.toggles?this._userActivate(!this.active):this.active=!1},_focusChanged:function(t){this._detectKeyboardFocus(t),t||this._setPressed(!1)},_detectKeyboardFocus:function(t){this._setReceivedFocusFromKeyboard(!this.pointerDown&&t)},_userActivate:function(t){this.active!==t&&(this.active=t,this.fire("change"))},_downHandler:function(t){this._setPointerDown(!0),this._setPressed(!0),this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1),this._setPressed(!1)},_spaceKeyDownHandler:function(t){var e=t.detail.keyboardEvent,i=E(e).localTarget;this.isLightDescendant(i)||(e.preventDefault(),e.stopImmediatePropagation(),this._setPressed(!0))},_spaceKeyUpHandler:function(t){var e=t.detail.keyboardEvent,i=E(e).localTarget;this.isLightDescendant(i)||(this.pressed&&this._asyncClick(),this._setPressed(!1))},_asyncClick:function(){this.async(function(){this.click()},1)},_pressedChanged:function(t){this._changedButtonState()},_ariaActiveAttributeChanged:function(t,e){e&&e!=t&&this.hasAttribute(e)&&this.removeAttribute(e)},_activeChanged:function(t,e){this.toggles?this.setAttribute(this.ariaActiveAttribute,t?"true":"false"):this.removeAttribute(this.ariaActiveAttribute),this._changedButtonState()},_controlStateChanged:function(){this.disabled?this._setPressed(!1):this._changedButtonState()},_changedButtonState:function(){this._buttonStateChanged&&this._buttonStateChanged()}},bf=[Ye,_f];/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const wf=Us(HTMLElement);W({_template:q`
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
`,is:"paper-dropdown-menu",behaviors:[bf,ut,Yl,gs],properties:{selectedItemLabel:{type:String,notify:!0,readOnly:!0},selectedItem:{type:Object,notify:!0,readOnly:!0},value:{type:String,notify:!0},label:{type:String},placeholder:{type:String},errorMessage:{type:String},opened:{type:Boolean,notify:!0,value:!1,observer:"_openedChanged"},allowOutsideScroll:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1,reflectToAttribute:!0},alwaysFloatLabel:{type:Boolean,value:!1},noAnimations:{type:Boolean,value:!1},horizontalAlign:{type:String,value:"right"},verticalAlign:{type:String,value:"top"},verticalOffset:Number,dynamicAlign:{type:Boolean},restoreFocusOnClose:{type:Boolean,value:!0},expandSizingTargetForScrollbars:{type:Boolean,value:!1}},listeners:{tap:"_onTap"},keyBindings:{"up down":"open",esc:"close"},observers:["_selectedItemChanged(selectedItem)"],_attachDom(t){const e=w(this);return e.attachShadow({mode:"open",delegatesFocus:!0,shadyUpgradeFragment:t}),e.shadowRoot.appendChild(t),wf.prototype._attachDom.call(this,t)},focus(){this.$.input._focusableElement.focus()},attached:function(){var t=this.contentElement;t&&t.selectedItem&&this._setSelectedItem(t.selectedItem)},get contentElement(){for(var t=E(this.$.content).getDistributedNodes(),e=0,i=t.length;e<i;e++)if(t[e].nodeType===Node.ELEMENT_NODE)return t[e]},open:function(){this.$.menuButton.open()},close:function(){this.$.menuButton.close()},_onIronSelect:function(t){this._setSelectedItem(t.detail.item)},_onIronDeselect:function(t){this._setSelectedItem(null)},_onTap:function(t){wp(t)===this&&this.open()},_selectedItemChanged:function(t){var e="";t?e=t.label||t.getAttribute("label")||t.textContent.trim():e="",this.value=e,this._setSelectedItemLabel(e)},_computeMenuVerticalOffset:function(t,e){return e||(t?-4:8)},_getValidity:function(t){return this.disabled||!this.required||this.required&&!!this.value},_openedChanged:function(){var t=this.opened?"true":"false",e=this.contentElement;e&&e.setAttribute("aria-expanded",t)}});const $t=Symbol("memo"),Gg=t=>{let e=$t,i=$t,n;return function(s,r){if(e===s&&i===r)return n;const o=t(s,r);return n=o,e=s,i=r,o}},Zg=t=>{let e=$t,i=$t,n=$t,s;return function(r,o,a){if(e===r&&i===o&&n===a)return s;const l=t(r,o,a);return s=l,e=r,i=o,n=a,l}},S=t=>typeof t=="string",Ct=()=>{let t,e;const i=new Promise((n,s)=>{t=n,e=s});return i.resolve=t,i.reject=e,i},go=t=>t==null?"":""+t,xf=(t,e,i)=>{t.forEach(n=>{e[n]&&(i[n]=e[n])})},Cf=/###/g,mo=t=>t&&t.indexOf("###")>-1?t.replace(Cf,"."):t,yo=t=>!t||S(t),Dt=(t,e,i)=>{const n=S(e)?e.split("."):e;let s=0;for(;s<n.length-1;){if(yo(t))return{};const r=mo(n[s]);!t[r]&&i&&(t[r]=new i),Object.prototype.hasOwnProperty.call(t,r)?t=t[r]:t={},++s}return yo(t)?{}:{obj:t,k:mo(n[s])}},vo=(t,e,i)=>{const{obj:n,k:s}=Dt(t,e,Object);if(n!==void 0||e.length===1){n[s]=i;return}let r=e[e.length-1],o=e.slice(0,e.length-1),a=Dt(t,o,Object);for(;a.obj===void 0&&o.length;)r=`${o[o.length-1]}.${r}`,o=o.slice(0,o.length-1),a=Dt(t,o,Object),a?.obj&&typeof a.obj[`${a.k}.${r}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${r}`]=i},Sf=(t,e,i,n)=>{const{obj:s,k:r}=Dt(t,e,Object);s[r]=s[r]||[],s[r].push(i)},Xi=(t,e)=>{const{obj:i,k:n}=Dt(t,e);if(i&&Object.prototype.hasOwnProperty.call(i,n))return i[n]},zf=(t,e,i)=>{const n=Xi(t,i);return n!==void 0?n:Xi(e,i)},Gl=(t,e,i)=>{for(const n in e)n!=="__proto__"&&n!=="constructor"&&(n in t?S(t[n])||t[n]instanceof String||S(e[n])||e[n]instanceof String?i&&(t[n]=e[n]):Gl(t[n],e[n],i):t[n]=e[n]);return t},Qe=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Ef={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const Lf=t=>S(t)?t.replace(/[&<>"'\/]/g,e=>Ef[e]):t;let Of=class{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const i=this.regExpMap.get(e);if(i!==void 0)return i;const n=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,n),this.regExpQueue.push(e),n}};const Af=[" ",",","?","!",";"],Mf=new Of(20),Pf=(t,e,i)=>{e=e||"",i=i||"";const n=Af.filter(o=>e.indexOf(o)<0&&i.indexOf(o)<0);if(n.length===0)return!0;const s=Mf.getRegExp(`(${n.map(o=>o==="?"?"\\?":o).join("|")})`);let r=!s.test(t);if(!r){const o=t.indexOf(i);o>0&&!s.test(t.substring(0,o))&&(r=!0)}return r},ms=(t,e,i=".")=>{if(!t)return;if(t[e])return Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0;const n=e.split(i);let s=t;for(let r=0;r<n.length;){if(!s||typeof s!="object")return;let o,a="";for(let l=r;l<n.length;++l)if(l!==r&&(a+=i),a+=n[l],o=s[a],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&l<n.length-1)continue;r+=l-r+1;break}s=o}return s},Zt=t=>t?.replace("_","-"),Tf={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){console?.[t]?.apply?.(console,e)}};let kf=class ys{constructor(e,i={}){this.init(e,i)}init(e,i={}){this.prefix=i.prefix||"i18next:",this.logger=e||Tf,this.options=i,this.debug=i.debug}log(...e){return this.forward(e,"log","",!0)}warn(...e){return this.forward(e,"warn","",!0)}error(...e){return this.forward(e,"error","")}deprecate(...e){return this.forward(e,"warn","WARNING DEPRECATED: ",!0)}forward(e,i,n,s){return s&&!this.debug?null:(S(e[0])&&(e[0]=`${n}${this.prefix} ${e[0]}`),this.logger[i](e))}create(e){return new ys(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new ys(this.logger,e)}};var me=new kf;let yn=class{constructor(){this.observers={}}on(e,i){return e.split(" ").forEach(n=>{this.observers[n]||(this.observers[n]=new Map);const s=this.observers[n].get(i)||0;this.observers[n].set(i,s+1)}),this}off(e,i){if(this.observers[e]){if(!i){delete this.observers[e];return}this.observers[e].delete(i)}}emit(e,...i){this.observers[e]&&Array.from(this.observers[e].entries()).forEach(([s,r])=>{for(let o=0;o<r;o++)s(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(([s,r])=>{for(let o=0;o<r;o++)s.apply(s,[e,...i])})}},_o=class extends yn{constructor(e,i={ns:["translation"],defaultNS:"translation"}){super(),this.data=e||{},this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const i=this.options.ns.indexOf(e);i>-1&&this.options.ns.splice(i,1)}getResource(e,i,n,s={}){const r=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,o=s.ignoreJSONStructure!==void 0?s.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.indexOf(".")>-1?a=e.split("."):(a=[e,i],n&&(Array.isArray(n)?a.push(...n):S(n)&&r?a.push(...n.split(r)):a.push(n)));const l=Xi(this.data,a);return!l&&!i&&!n&&e.indexOf(".")>-1&&(e=a[0],i=a[1],n=a.slice(2).join(".")),l||!o||!S(n)?l:ms(this.data?.[e]?.[i],n,r)}addResource(e,i,n,s,r={silent:!1}){const o=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let a=[e,i];n&&(a=a.concat(o?n.split(o):n)),e.indexOf(".")>-1&&(a=e.split("."),s=i,i=a[1]),this.addNamespaces(i),vo(this.data,a,s),r.silent||this.emit("added",e,i,n,s)}addResources(e,i,n,s={silent:!1}){for(const r in n)(S(n[r])||Array.isArray(n[r]))&&this.addResource(e,i,r,n[r],{silent:!0});s.silent||this.emit("added",e,i,n)}addResourceBundle(e,i,n,s,r,o={silent:!1,skipCopy:!1}){let a=[e,i];e.indexOf(".")>-1&&(a=e.split("."),s=n,n=i,i=a[1]),this.addNamespaces(i);let l=Xi(this.data,a)||{};o.skipCopy||(n=JSON.parse(JSON.stringify(n))),s?Gl(l,n,r):l={...l,...n},vo(this.data,a,l),o.silent||this.emit("added",e,i,n)}removeResourceBundle(e,i){this.hasResourceBundle(e,i)&&delete this.data[e][i],this.removeNamespaces(i),this.emit("removed",e,i)}hasResourceBundle(e,i){return this.getResource(e,i)!==void 0}getResourceBundle(e,i){return i||(i=this.options.defaultNS),this.getResource(e,i)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const i=this.getDataByLanguage(e);return!!(i&&Object.keys(i)||[]).find(s=>i[s]&&Object.keys(i[s]).length>0)}toJSON(){return this.data}};var Zl={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,i,n,s){return t.forEach(r=>{e=this.processors[r]?.process(e,i,n,s)??e}),e}};const Ql=Symbol("i18next/PATH_KEY");function Hf(){const t=[],e=Object.create(null);let i;return e.get=(n,s)=>(i?.revoke?.(),s===Ql?t:(t.push(s),i=Proxy.revocable(n,e),i.proxy)),Proxy.revocable(Object.create(null),e).proxy}function vs(t,e){const{[Ql]:i}=t(Hf());return i.join(e?.keySeparator??".")}const bo={},$n=t=>!S(t)&&typeof t!="boolean"&&typeof t!="number";let wo=class ec extends yn{constructor(e,i={}){super(),xf(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=me.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e,i={interpolation:{}}){const n={...i};if(e==null)return!1;const s=this.resolve(e,n);if(s?.res===void 0)return!1;const r=$n(s.res);return!(n.returnObjects===!1&&r)}extractFromKey(e,i){let n=i.nsSeparator!==void 0?i.nsSeparator:this.options.nsSeparator;n===void 0&&(n=":");const s=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator;let r=i.ns||this.options.defaultNS||[];const o=n&&e.indexOf(n)>-1,a=!this.options.userDefinedKeySeparator&&!i.keySeparator&&!this.options.userDefinedNsSeparator&&!i.nsSeparator&&!Pf(e,n,s);if(o&&!a){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:S(r)?[r]:r};const c=e.split(n);(n!==s||n===s&&this.options.ns.indexOf(c[0])>-1)&&(r=c.shift()),e=c.join(s)}return{key:e,namespaces:S(r)?[r]:r}}translate(e,i,n){let s=typeof i=="object"?{...i}:i;if(typeof s!="object"&&this.options.overloadTranslationOptionHandler&&(s=this.options.overloadTranslationOptionHandler(arguments)),typeof s=="object"&&(s={...s}),s||(s={}),e==null)return"";typeof e=="function"&&(e=vs(e,{...this.options,...s})),Array.isArray(e)||(e=[String(e)]);const r=s.returnDetails!==void 0?s.returnDetails:this.options.returnDetails,o=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,{key:a,namespaces:l}=this.extractFromKey(e[e.length-1],s),c=l[l.length-1];let h=s.nsSeparator!==void 0?s.nsSeparator:this.options.nsSeparator;h===void 0&&(h=":");const d=s.lng||this.language,u=s.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(d?.toLowerCase()==="cimode")return u?r?{res:`${c}${h}${a}`,usedKey:a,exactUsedKey:a,usedLng:d,usedNS:c,usedParams:this.getUsedParamsDetails(s)}:`${c}${h}${a}`:r?{res:a,usedKey:a,exactUsedKey:a,usedLng:d,usedNS:c,usedParams:this.getUsedParamsDetails(s)}:a;const p=this.resolve(e,s);let f=p?.res;const g=p?.usedKey||a,m=p?.exactUsedKey||a,y=["[object Number]","[object Function]","[object RegExp]"],v=s.joinArrays!==void 0?s.joinArrays:this.options.joinArrays,_=!this.i18nFormat||this.i18nFormat.handleAsObject,b=s.count!==void 0&&!S(s.count),x=ec.hasDefaultValue(s),A=b?this.pluralResolver.getSuffix(d,s.count,s):"",C=s.ordinal&&b?this.pluralResolver.getSuffix(d,s.count,{ordinal:!1}):"",F=b&&!s.ordinal&&s.count===0,H=F&&s[`defaultValue${this.options.pluralSeparator}zero`]||s[`defaultValue${A}`]||s[`defaultValue${C}`]||s.defaultValue;let T=f;_&&!f&&x&&(T=H);const K=$n(T),J=Object.prototype.toString.apply(T);if(_&&T&&K&&y.indexOf(J)<0&&!(S(v)&&Array.isArray(T))){if(!s.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const N=this.options.returnedObjectHandler?this.options.returnedObjectHandler(g,T,{...s,ns:l}):`key '${a} (${this.language})' returned an object instead of string.`;return r?(p.res=N,p.usedParams=this.getUsedParamsDetails(s),p):N}if(o){const N=Array.isArray(T),O=N?[]:{},V=N?m:g;for(const M in T)if(Object.prototype.hasOwnProperty.call(T,M)){const L=`${V}${o}${M}`;x&&!f?O[M]=this.translate(L,{...s,defaultValue:$n(H)?H[M]:void 0,joinArrays:!1,ns:l}):O[M]=this.translate(L,{...s,joinArrays:!1,ns:l}),O[M]===L&&(O[M]=T[M])}f=O}}else if(_&&S(v)&&Array.isArray(f))f=f.join(v),f&&(f=this.extendTranslation(f,e,s,n));else{let N=!1,O=!1;!this.isValidLookup(f)&&x&&(N=!0,f=H),this.isValidLookup(f)||(O=!0,f=a);const M=(s.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&O?void 0:f,L=x&&H!==f&&this.options.updateMissing;if(O||N||L){if(this.logger.log(L?"updateKey":"missingKey",d,c,a,L?H:f),o){const Y=this.resolve(a,{...s,keySeparator:!1});Y&&Y.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let P=[];const U=this.languageUtils.getFallbackCodes(this.options.fallbackLng,s.lng||this.language);if(this.options.saveMissingTo==="fallback"&&U&&U[0])for(let Y=0;Y<U.length;Y++)P.push(U[Y]);else this.options.saveMissingTo==="all"?P=this.languageUtils.toResolveHierarchy(s.lng||this.language):P.push(s.lng||this.language);const ae=(Y,Ce,Ie)=>{const si=x&&Ie!==f?Ie:M;this.options.missingKeyHandler?this.options.missingKeyHandler(Y,c,Ce,si,L,s):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(Y,c,Ce,si,L,s),this.emit("missingKey",Y,c,Ce,f)};this.options.saveMissing&&(this.options.saveMissingPlurals&&b?P.forEach(Y=>{const Ce=this.pluralResolver.getSuffixes(Y,s);F&&s[`defaultValue${this.options.pluralSeparator}zero`]&&Ce.indexOf(`${this.options.pluralSeparator}zero`)<0&&Ce.push(`${this.options.pluralSeparator}zero`),Ce.forEach(Ie=>{ae([Y],a+Ie,s[`defaultValue${Ie}`]||H)})}):ae(P,a,H))}f=this.extendTranslation(f,e,s,p,n),O&&f===a&&this.options.appendNamespaceToMissingKey&&(f=`${c}${h}${a}`),(O||N)&&this.options.parseMissingKeyHandler&&(f=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${c}${h}${a}`:a,N?f:void 0,s))}return r?(p.res=f,p.usedParams=this.getUsedParamsDetails(s),p):f}extendTranslation(e,i,n,s,r){if(this.i18nFormat?.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||s.usedLng,s.usedNS,s.usedKey,{resolved:s});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});const l=S(e)&&(n?.interpolation?.skipOnVariables!==void 0?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let c;if(l){const d=e.match(this.interpolator.nestingRegexp);c=d&&d.length}let h=n.replace&&!S(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(h={...this.options.interpolation.defaultVariables,...h}),e=this.interpolator.interpolate(e,h,n.lng||this.language||s.usedLng,n),l){const d=e.match(this.interpolator.nestingRegexp),u=d&&d.length;c<u&&(n.nest=!1)}!n.lng&&s&&s.res&&(n.lng=this.language||s.usedLng),n.nest!==!1&&(e=this.interpolator.nest(e,(...d)=>r?.[0]===d[0]&&!n.context?(this.logger.warn(`It seems you are nesting recursively key: ${d[0]} in key: ${i[0]}`),null):this.translate(...d,i),n)),n.interpolation&&this.interpolator.reset()}const o=n.postProcess||this.options.postProcess,a=S(o)?[o]:o;return e!=null&&a?.length&&n.applyPostProcessor!==!1&&(e=Zl.handle(a,e,i,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...s,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),e}resolve(e,i={}){let n,s,r,o,a;return S(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(n))return;const c=this.extractFromKey(l,i),h=c.key;s=h;let d=c.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const u=i.count!==void 0&&!S(i.count),p=u&&!i.ordinal&&i.count===0,f=i.context!==void 0&&(S(i.context)||typeof i.context=="number")&&i.context!=="",g=i.lngs?i.lngs:this.languageUtils.toResolveHierarchy(i.lng||this.language,i.fallbackLng);d.forEach(m=>{this.isValidLookup(n)||(a=m,!bo[`${g[0]}-${m}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(a)&&(bo[`${g[0]}-${m}`]=!0,this.logger.warn(`key "${s}" for languages "${g.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),g.forEach(y=>{if(this.isValidLookup(n))return;o=y;const v=[h];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(v,h,y,m,i);else{let b;u&&(b=this.pluralResolver.getSuffix(y,i.count,i));const x=`${this.options.pluralSeparator}zero`,A=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(u&&(i.ordinal&&b.indexOf(A)===0&&v.push(h+b.replace(A,this.options.pluralSeparator)),v.push(h+b),p&&v.push(h+x)),f){const C=`${h}${this.options.contextSeparator||"_"}${i.context}`;v.push(C),u&&(i.ordinal&&b.indexOf(A)===0&&v.push(C+b.replace(A,this.options.pluralSeparator)),v.push(C+b),p&&v.push(C+x))}}let _;for(;_=v.pop();)this.isValidLookup(n)||(r=_,n=this.getResource(y,m,_,i))}))})}),{res:n,usedKey:s,exactUsedKey:r,usedLng:o,usedNS:a}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,i,n,s={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(e,i,n,s):this.resourceStore.getResource(e,i,n,s)}getUsedParamsDetails(e={}){const i=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],n=e.replace&&!S(e.replace);let s=n?e.replace:e;if(n&&typeof e.count<"u"&&(s.count=e.count),this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),!n){s={...s};for(const r of i)delete s[r]}return s}static hasDefaultValue(e){const i="defaultValue";for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&i===n.substring(0,i.length)&&e[n]!==void 0)return!0;return!1}},xo=class{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=me.create("languageUtils")}getScriptPartFromCode(e){if(e=Zt(e),!e||e.indexOf("-")<0)return null;const i=e.split("-");return i.length===2||(i.pop(),i[i.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(i.join("-"))}getLanguagePartFromCode(e){if(e=Zt(e),!e||e.indexOf("-")<0)return e;const i=e.split("-");return this.formatLanguageCode(i[0])}formatLanguageCode(e){if(S(e)&&e.indexOf("-")>-1){let i;try{i=Intl.getCanonicalLocales(e)[0]}catch{}return i&&this.options.lowerCaseLng&&(i=i.toLowerCase()),i||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let i;return e.forEach(n=>{if(i)return;const s=this.formatLanguageCode(n);(!this.options.supportedLngs||this.isSupportedCode(s))&&(i=s)}),!i&&this.options.supportedLngs&&e.forEach(n=>{if(i)return;const s=this.getScriptPartFromCode(n);if(this.isSupportedCode(s))return i=s;const r=this.getLanguagePartFromCode(n);if(this.isSupportedCode(r))return i=r;i=this.options.supportedLngs.find(o=>{if(o===r)return o;if(!(o.indexOf("-")<0&&r.indexOf("-")<0)&&(o.indexOf("-")>0&&r.indexOf("-")<0&&o.substring(0,o.indexOf("-"))===r||o.indexOf(r)===0&&r.length>1))return o})}),i||(i=this.getFallbackCodes(this.options.fallbackLng)[0]),i}getFallbackCodes(e,i){if(!e)return[];if(typeof e=="function"&&(e=e(i)),S(e)&&(e=[e]),Array.isArray(e))return e;if(!i)return e.default||[];let n=e[i];return n||(n=e[this.getScriptPartFromCode(i)]),n||(n=e[this.formatLanguageCode(i)]),n||(n=e[this.getLanguagePartFromCode(i)]),n||(n=e.default),n||[]}toResolveHierarchy(e,i){const n=this.getFallbackCodes((i===!1?[]:i)||this.options.fallbackLng||[],e),s=[],r=o=>{o&&(this.isSupportedCode(o)?s.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return S(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&r(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&r(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&r(this.getLanguagePartFromCode(e))):S(e)&&r(this.formatLanguageCode(e)),n.forEach(o=>{s.indexOf(o)<0&&r(this.formatLanguageCode(o))}),s}};const Co={zero:0,one:1,two:2,few:3,many:4,other:5},So={select:t=>t===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};let Rf=class{constructor(e,i={}){this.languageUtils=e,this.options=i,this.logger=me.create("pluralResolver"),this.pluralRulesCache={}}addRule(e,i){this.rules[e]=i}clearCache(){this.pluralRulesCache={}}getRule(e,i={}){const n=Zt(e==="dev"?"en":e),s=i.ordinal?"ordinal":"cardinal",r=JSON.stringify({cleanedCode:n,type:s});if(r in this.pluralRulesCache)return this.pluralRulesCache[r];let o;try{o=new Intl.PluralRules(n,{type:s})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),So;if(!e.match(/-|_/))return So;const l=this.languageUtils.getLanguagePartFromCode(e);o=this.getRule(l,i)}return this.pluralRulesCache[r]=o,o}needsPlural(e,i={}){let n=this.getRule(e,i);return n||(n=this.getRule("dev",i)),n?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(e,i,n={}){return this.getSuffixes(e,n).map(s=>`${i}${s}`)}getSuffixes(e,i={}){let n=this.getRule(e,i);return n||(n=this.getRule("dev",i)),n?n.resolvedOptions().pluralCategories.sort((s,r)=>Co[s]-Co[r]).map(s=>`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${s}`):[]}getSuffix(e,i,n={}){const s=this.getRule(e,n);return s?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${s.select(i)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",i,n))}};const zo=(t,e,i,n=".",s=!0)=>{let r=zf(t,e,i);return!r&&s&&S(i)&&(r=ms(t,i,n),r===void 0&&(r=ms(e,i,n))),r},Dn=t=>t.replace(/\$/g,"$$$$");let Nf=class{constructor(e={}){this.logger=me.create("interpolator"),this.options=e,this.format=e?.interpolation?.format||(i=>i),this.init(e)}init(e={}){e.interpolation||(e.interpolation={escapeValue:!0});const{escape:i,escapeValue:n,useRawValueToEscape:s,prefix:r,prefixEscaped:o,suffix:a,suffixEscaped:l,formatSeparator:c,unescapeSuffix:h,unescapePrefix:d,nestingPrefix:u,nestingPrefixEscaped:p,nestingSuffix:f,nestingSuffixEscaped:g,nestingOptionsSeparator:m,maxReplaces:y,alwaysFormat:v}=e.interpolation;this.escape=i!==void 0?i:Lf,this.escapeValue=n!==void 0?n:!0,this.useRawValueToEscape=s!==void 0?s:!1,this.prefix=r?Qe(r):o||"{{",this.suffix=a?Qe(a):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=h?"":d||"-",this.unescapeSuffix=this.unescapePrefix?"":h||"",this.nestingPrefix=u?Qe(u):p||Qe("$t("),this.nestingSuffix=f?Qe(f):g||Qe(")"),this.nestingOptionsSeparator=m||",",this.maxReplaces=y||1e3,this.alwaysFormat=v!==void 0?v:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(i,n)=>i?.source===n?(i.lastIndex=0,i):new RegExp(n,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,i,n,s){let r,o,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=p=>{if(p.indexOf(this.formatSeparator)<0){const y=zo(i,l,p,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(y,void 0,n,{...s,...i,interpolationkey:p}):y}const f=p.split(this.formatSeparator),g=f.shift().trim(),m=f.join(this.formatSeparator).trim();return this.format(zo(i,l,g,this.options.keySeparator,this.options.ignoreJSONStructure),m,n,{...s,...i,interpolationkey:g})};this.resetRegExp();const h=s?.missingInterpolationHandler||this.options.missingInterpolationHandler,d=s?.interpolation?.skipOnVariables!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:p=>Dn(p)},{regex:this.regexp,safeValue:p=>this.escapeValue?Dn(this.escape(p)):Dn(p)}].forEach(p=>{for(a=0;r=p.regex.exec(e);){const f=r[1].trim();if(o=c(f),o===void 0)if(typeof h=="function"){const m=h(e,r,s);o=S(m)?m:""}else if(s&&Object.prototype.hasOwnProperty.call(s,f))o="";else if(d){o=r[0];continue}else this.logger.warn(`missed to pass in variable ${f} for interpolating ${e}`),o="";else!S(o)&&!this.useRawValueToEscape&&(o=go(o));const g=p.safeValue(o);if(e=e.replace(r[0],g),d?(p.regex.lastIndex+=o.length,p.regex.lastIndex-=r[0].length):p.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),e}nest(e,i,n={}){let s,r,o;const a=(l,c)=>{const h=this.nestingOptionsSeparator;if(l.indexOf(h)<0)return l;const d=l.split(new RegExp(`${h}[ ]*{`));let u=`{${d[1]}`;l=d[0],u=this.interpolate(u,o);const p=u.match(/'/g),f=u.match(/"/g);((p?.length??0)%2===0&&!f||f.length%2!==0)&&(u=u.replace(/'/g,'"'));try{o=JSON.parse(u),c&&(o={...c,...o})}catch(g){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,g),`${l}${h}${u}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,l};for(;s=this.nestingRegexp.exec(e);){let l=[];o={...n},o=o.replace&&!S(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;const c=/{.*}/.test(s[1])?s[1].lastIndexOf("}")+1:s[1].indexOf(this.formatSeparator);if(c!==-1&&(l=s[1].slice(c).split(this.formatSeparator).map(h=>h.trim()).filter(Boolean),s[1]=s[1].slice(0,c)),r=i(a.call(this,s[1].trim(),o),o),r&&s[0]===e&&!S(r))return r;S(r)||(r=go(r)),r||(this.logger.warn(`missed to resolve ${s[1]} for nesting ${e}`),r=""),l.length&&(r=l.reduce((h,d)=>this.format(h,d,n.lng,{...n,interpolationkey:s[1].trim()}),r.trim())),e=e.replace(s[0],r),this.regexp.lastIndex=0}return e}};const If=t=>{let e=t.toLowerCase().trim();const i={};if(t.indexOf("(")>-1){const n=t.split("(");e=n[0].toLowerCase().trim();const s=n[1].substring(0,n[1].length-1);e==="currency"&&s.indexOf(":")<0?i.currency||(i.currency=s.trim()):e==="relativetime"&&s.indexOf(":")<0?i.range||(i.range=s.trim()):s.split(";").forEach(o=>{if(o){const[a,...l]=o.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),h=a.trim();i[h]||(i[h]=c),c==="false"&&(i[h]=!1),c==="true"&&(i[h]=!0),isNaN(c)||(i[h]=parseInt(c,10))}})}return{formatName:e,formatOptions:i}},Eo=t=>{const e={};return(i,n,s)=>{let r=s;s&&s.interpolationkey&&s.formatParams&&s.formatParams[s.interpolationkey]&&s[s.interpolationkey]&&(r={...r,[s.interpolationkey]:void 0});const o=n+JSON.stringify(r);let a=e[o];return a||(a=t(Zt(n),s),e[o]=a),a(i)}},Vf=t=>(e,i,n)=>t(Zt(i),n)(e);let $f=class{constructor(e={}){this.logger=me.create("formatter"),this.options=e,this.init(e)}init(e,i={interpolation:{}}){this.formatSeparator=i.interpolation.formatSeparator||",";const n=i.cacheInBuiltFormats?Eo:Vf;this.formats={number:n((s,r)=>{const o=new Intl.NumberFormat(s,{...r});return a=>o.format(a)}),currency:n((s,r)=>{const o=new Intl.NumberFormat(s,{...r,style:"currency"});return a=>o.format(a)}),datetime:n((s,r)=>{const o=new Intl.DateTimeFormat(s,{...r});return a=>o.format(a)}),relativetime:n((s,r)=>{const o=new Intl.RelativeTimeFormat(s,{...r});return a=>o.format(a,r.range||"day")}),list:n((s,r)=>{const o=new Intl.ListFormat(s,{...r});return a=>o.format(a)})}}add(e,i){this.formats[e.toLowerCase().trim()]=i}addCached(e,i){this.formats[e.toLowerCase().trim()]=Eo(i)}format(e,i,n,s={}){const r=i.split(this.formatSeparator);if(r.length>1&&r[0].indexOf("(")>1&&r[0].indexOf(")")<0&&r.find(a=>a.indexOf(")")>-1)){const a=r.findIndex(l=>l.indexOf(")")>-1);r[0]=[r[0],...r.splice(1,a)].join(this.formatSeparator)}return r.reduce((a,l)=>{const{formatName:c,formatOptions:h}=If(l);if(this.formats[c]){let d=a;try{const u=s?.formatParams?.[s.interpolationkey]||{},p=u.locale||u.lng||s.locale||s.lng||n;d=this.formats[c](a,p,{...h,...s,...u})}catch(u){this.logger.warn(u)}return d}else this.logger.warn(`there was no format function for ${c}`);return a},e)}};const Df=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};let Ff=class extends yn{constructor(e,i,n,s={}){super(),this.backend=e,this.store=i,this.services=n,this.languageUtils=n.languageUtils,this.options=s,this.logger=me.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=s.maxParallelReads||10,this.readingCalls=0,this.maxRetries=s.maxRetries>=0?s.maxRetries:5,this.retryTimeout=s.retryTimeout>=1?s.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(n,s.backend,s)}queueLoad(e,i,n,s){const r={},o={},a={},l={};return e.forEach(c=>{let h=!0;i.forEach(d=>{const u=`${c}|${d}`;!n.reload&&this.store.hasResourceBundle(c,d)?this.state[u]=2:this.state[u]<0||(this.state[u]===1?o[u]===void 0&&(o[u]=!0):(this.state[u]=1,h=!1,o[u]===void 0&&(o[u]=!0),r[u]===void 0&&(r[u]=!0),l[d]===void 0&&(l[d]=!0)))}),h||(a[c]=!0)}),(Object.keys(r).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:s}),{toLoad:Object.keys(r),pending:Object.keys(o),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(e,i,n){const s=e.split("|"),r=s[0],o=s[1];i&&this.emit("failedLoading",r,o,i),!i&&n&&this.store.addResourceBundle(r,o,n,void 0,void 0,{skipCopy:!0}),this.state[e]=i?-1:2,i&&n&&(this.state[e]=0);const a={};this.queue.forEach(l=>{Sf(l.loaded,[r],o),Df(l,e),i&&l.errors.push(i),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{a[c]||(a[c]={});const h=l.loaded[c];h.length&&h.forEach(d=>{a[c][d]===void 0&&(a[c][d]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(e,i,n,s=0,r=this.retryTimeout,o){if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:i,fcName:n,tried:s,wait:r,callback:o});return}this.readingCalls++;const a=(c,h)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(c&&h&&s<this.maxRetries){setTimeout(()=>{this.read.call(this,e,i,n,s+1,r*2,o)},r);return}o(c,h)},l=this.backend[n].bind(this.backend);if(l.length===2){try{const c=l(e,i);c&&typeof c.then=="function"?c.then(h=>a(null,h)).catch(a):a(null,c)}catch(c){a(c)}return}return l(e,i,a)}prepareLoading(e,i,n={},s){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),s&&s();S(e)&&(e=this.languageUtils.toResolveHierarchy(e)),S(i)&&(i=[i]);const r=this.queueLoad(e,i,n,s);if(!r.toLoad.length)return r.pending.length||s(),null;r.toLoad.forEach(o=>{this.loadOne(o)})}load(e,i,n){this.prepareLoading(e,i,{},n)}reload(e,i,n){this.prepareLoading(e,i,{reload:!0},n)}loadOne(e,i=""){const n=e.split("|"),s=n[0],r=n[1];this.read(s,r,"read",void 0,void 0,(o,a)=>{o&&this.logger.warn(`${i}loading namespace ${r} for language ${s} failed`,o),!o&&a&&this.logger.log(`${i}loaded namespace ${r} for language ${s}`,a),this.loaded(e,o,a)})}saveMissing(e,i,n,s,r,o={},a=()=>{}){if(this.services?.utils?.hasLoadedNamespace&&!this.services?.utils?.hasLoadedNamespace(i)){this.logger.warn(`did not save key "${n}" as the namespace "${i}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(n==null||n==="")){if(this.backend?.create){const l={...o,isUpdate:r},c=this.backend.create.bind(this.backend);if(c.length<6)try{let h;c.length===5?h=c(e,i,n,s,l):h=c(e,i,n,s),h&&typeof h.then=="function"?h.then(d=>a(null,d)).catch(a):a(null,h)}catch(h){a(h)}else c(e,i,n,s,a,l)}!e||!e[0]||this.store.addResource(e[0],i,n,s)}}};const Lo=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),S(t[1])&&(e.defaultValue=t[1]),S(t[2])&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const i=t[3]||t[2];Object.keys(i).forEach(n=>{e[n]=i[n]})}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),Oo=t=>(S(t.ns)&&(t.ns=[t.ns]),S(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),S(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs?.indexOf?.("cimode")<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),typeof t.initImmediate=="boolean"&&(t.initAsync=t.initImmediate),t),gi=()=>{},Bf=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(i=>{typeof t[i]=="function"&&(t[i]=t[i].bind(t))})};let jf=class Oi extends yn{constructor(e={},i){if(super(),this.options=Oo(e),this.services={},this.logger=me,this.modules={external:[]},Bf(this),i&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,i),this;setTimeout(()=>{this.init(e,i)},0)}}init(e={},i){this.isInitializing=!0,typeof e=="function"&&(i=e,e={}),e.defaultNS==null&&e.ns&&(S(e.ns)?e.defaultNS=e.ns:e.ns.indexOf("translation")<0&&(e.defaultNS=e.ns[0]));const n=Lo();this.options={...n,...this.options,...Oo(e)},this.options.interpolation={...n.interpolation,...this.options.interpolation},e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator);const s=c=>c?typeof c=="function"?new c:c:null;if(!this.options.isClone){this.modules.logger?me.init(s(this.modules.logger),this.options):me.init(null,this.options);let c;this.modules.formatter?c=this.modules.formatter:c=$f;const h=new xo(this.options);this.store=new _o(this.options.resources,this.options);const d=this.services;d.logger=me,d.resourceStore=this.store,d.languageUtils=h,d.pluralResolver=new Rf(h,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),this.options.interpolation.format&&this.options.interpolation.format!==n.interpolation.format&&this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"),c&&(!this.options.interpolation.format||this.options.interpolation.format===n.interpolation.format)&&(d.formatter=s(c),d.formatter.init&&d.formatter.init(d,this.options),this.options.interpolation.format=d.formatter.format.bind(d.formatter)),d.interpolator=new Nf(this.options),d.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},d.backendConnector=new Ff(s(this.modules.backend),d.resourceStore,d,this.options),d.backendConnector.on("*",(p,...f)=>{this.emit(p,...f)}),this.modules.languageDetector&&(d.languageDetector=s(this.modules.languageDetector),d.languageDetector.init&&d.languageDetector.init(d,this.options.detection,this.options)),this.modules.i18nFormat&&(d.i18nFormat=s(this.modules.i18nFormat),d.i18nFormat.init&&d.i18nFormat.init(this)),this.translator=new wo(this.services,this.options),this.translator.on("*",(p,...f)=>{this.emit(p,...f)}),this.modules.external.forEach(p=>{p.init&&p.init(this)})}if(this.format=this.options.interpolation.format,i||(i=gi),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const c=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);c.length>0&&c[0]!=="dev"&&(this.options.lng=c[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(c=>{this[c]=(...h)=>this.store[c](...h)}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(c=>{this[c]=(...h)=>(this.store[c](...h),this)});const a=Ct(),l=()=>{const c=(h,d)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),a.resolve(d),i(h,d)};if(this.languages&&!this.isInitialized)return c(null,this.t.bind(this));this.changeLanguage(this.options.lng,c)};return this.options.resources||!this.options.initAsync?l():setTimeout(l,0),a}loadResources(e,i=gi){let n=i;const s=S(e)?e:this.language;if(typeof e=="function"&&(n=e),!this.options.resources||this.options.partialBundledLanguages){if(s?.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return n();const r=[],o=a=>{if(!a||a==="cimode")return;this.services.languageUtils.toResolveHierarchy(a).forEach(c=>{c!=="cimode"&&r.indexOf(c)<0&&r.push(c)})};s?o(s):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>o(l)),this.options.preload?.forEach?.(a=>o(a)),this.services.backendConnector.load(r,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),n(a)})}else n(null)}reloadResources(e,i,n){const s=Ct();return typeof e=="function"&&(n=e,e=void 0),typeof i=="function"&&(n=i,i=void 0),e||(e=this.languages),i||(i=this.options.ns),n||(n=gi),this.services.backendConnector.reload(e,i,r=>{s.resolve(),n(r)}),s}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&Zl.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1)){for(let i=0;i<this.languages.length;i++){const n=this.languages[i];if(!(["cimode","dev"].indexOf(n)>-1)&&this.store.hasLanguageSomeTranslations(n)){this.resolvedLanguage=n;break}}!this.resolvedLanguage&&this.languages.indexOf(e)<0&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,i){this.isLanguageChangingTo=e;const n=Ct();this.emit("languageChanging",e);const s=a=>{this.language=a,this.languages=this.services.languageUtils.toResolveHierarchy(a),this.resolvedLanguage=void 0,this.setResolvedLanguage(a)},r=(a,l)=>{l?this.isLanguageChangingTo===e&&(s(l),this.translator.changeLanguage(l),this.isLanguageChangingTo=void 0,this.emit("languageChanged",l),this.logger.log("languageChanged",l)):this.isLanguageChangingTo=void 0,n.resolve((...c)=>this.t(...c)),i&&i(a,(...c)=>this.t(...c))},o=a=>{!e&&!a&&this.services.languageDetector&&(a=[]);const l=S(a)?a:a&&a[0],c=this.store.hasLanguageSomeTranslations(l)?l:this.services.languageUtils.getBestMatchFromCodes(S(a)?[a]:a);c&&(this.language||s(c),this.translator.language||this.translator.changeLanguage(c),this.services.languageDetector?.cacheUserLanguage?.(c)),this.loadResources(c,h=>{r(h,c)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?o(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(o):this.services.languageDetector.detect(o):o(e),n}getFixedT(e,i,n){const s=(r,o,...a)=>{let l;typeof o!="object"?l=this.options.overloadTranslationOptionHandler([r,o].concat(a)):l={...o},l.lng=l.lng||s.lng,l.lngs=l.lngs||s.lngs,l.ns=l.ns||s.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||n||s.keyPrefix);const c=this.options.keySeparator||".";let h;return l.keyPrefix&&Array.isArray(r)?h=r.map(d=>(typeof d=="function"&&(d=vs(d,{...this.options,...o})),`${l.keyPrefix}${c}${d}`)):(typeof r=="function"&&(r=vs(r,{...this.options,...o})),h=l.keyPrefix?`${l.keyPrefix}${c}${r}`:r),this.t(h,l)};return S(e)?s.lng=e:s.lngs=e,s.ns=i,s.keyPrefix=n,s}t(...e){return this.translator?.translate(...e)}exists(...e){return this.translator?.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,i={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const n=i.lng||this.resolvedLanguage||this.languages[0],s=this.options?this.options.fallbackLng:!1,r=this.languages[this.languages.length-1];if(n.toLowerCase()==="cimode")return!0;const o=(a,l)=>{const c=this.services.backendConnector.state[`${a}|${l}`];return c===-1||c===0||c===2};if(i.precheck){const a=i.precheck(this,o);if(a!==void 0)return a}return!!(this.hasResourceBundle(n,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(n,e)&&(!s||o(r,e)))}loadNamespaces(e,i){const n=Ct();return this.options.ns?(S(e)&&(e=[e]),e.forEach(s=>{this.options.ns.indexOf(s)<0&&this.options.ns.push(s)}),this.loadResources(s=>{n.resolve(),i&&i(s)}),n):(i&&i(),Promise.resolve())}loadLanguages(e,i){const n=Ct();S(e)&&(e=[e]);const s=this.options.preload||[],r=e.filter(o=>s.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return r.length?(this.options.preload=s.concat(r),this.loadResources(o=>{n.resolve(),i&&i(o)}),n):(i&&i(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language)),!e)return"rtl";try{const s=new Intl.Locale(e);if(s&&s.getTextInfo){const r=s.getTextInfo();if(r&&r.direction)return r.direction}}catch{}const i=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],n=this.services?.languageUtils||new xo(Lo());return e.toLowerCase().indexOf("-latn")>1?"ltr":i.indexOf(n.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(e={},i){const n=new Oi(e,i);return n.createInstance=Oi.createInstance,n}cloneInstance(e={},i=gi){const n=e.forkResourceStore;n&&delete e.forkResourceStore;const s={...this.options,...e,isClone:!0},r=new Oi(s);if((e.debug!==void 0||e.prefix!==void 0)&&(r.logger=r.logger.clone(e)),["store","services","language"].forEach(a=>{r[a]=this[a]}),r.services={...this.services},r.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},n){const a=Object.keys(this.store.data).reduce((l,c)=>(l[c]={...this.store.data[c]},l[c]=Object.keys(l[c]).reduce((h,d)=>(h[d]={...l[c][d]},h),l[c]),l),{});r.store=new _o(a,s),r.services.resourceStore=r.store}return r.translator=new wo(r.services,s),r.translator.on("*",(a,...l)=>{r.emit(a,...l)}),r.init(s,i),r.translator.options=s,r.translator.backendConnector.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},r}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}};const ne=jf.createInstance();ne.createInstance;ne.dir;ne.init;ne.loadResources;ne.reloadResources;ne.use;ne.changeLanguage;ne.getFixedT;const am=ne.t;ne.exists;ne.setDefaultNamespace;ne.hasLoadedNamespace;ne.loadNamespaces;ne.loadLanguages;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Uf{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class Kf{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise((e=>this.Z=e))}resume(){this.Z?.(),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ao=t=>!yc(t)&&typeof t.then=="function",Mo=1073741823;let Wf=class extends on{constructor(){super(...arguments),this._$Cwt=Mo,this._$Cbt=[],this._$CK=new Uf(this),this._$CX=new Kf}render(...e){return e.find((i=>!Ao(i)))??Q}update(e,i){const n=this._$Cbt;let s=n.length;this._$Cbt=i;const r=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<i.length&&!(a>this._$Cwt);a++){const l=i[a];if(!Ao(l))return this._$Cwt=a,l;a<s&&l===n[a]||(this._$Cwt=Mo,s=0,Promise.resolve(l).then((async c=>{for(;o.get();)await o.get();const h=r.deref();if(h!==void 0){const d=h._$Cbt.indexOf(l);d>-1&&d<h._$Cwt&&(h._$Cwt=d,h.setValue(c))}})))}return Q}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const _s=Ae(Wf);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Po=(t,e,i)=>{const n=new Map;for(let s=e;s<=i;s++)n.set(t[s],s);return n},qf=Ae(class extends pt{constructor(t){if(super(t),t.type!==pe.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let n;i===void 0?i=e:e!==void 0&&(n=e);const s=[],r=[];let o=0;for(const a of t)s[o]=n?n(a,o):o,r[o]=i(a,o),o++;return{values:r,keys:s}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,n]){const s=vc(t),{values:r,keys:o}=this.dt(e,i,n);if(!Array.isArray(s))return this.ut=o,r;const a=this.ut??=[],l=[];let c,h,d=0,u=s.length-1,p=0,f=r.length-1;for(;d<=u&&p<=f;)if(s[d]===null)d++;else if(s[u]===null)u--;else if(a[d]===o[p])l[p]=Ve(s[d],r[p]),d++,p++;else if(a[u]===o[f])l[f]=Ve(s[u],r[f]),u--,f--;else if(a[d]===o[f])l[f]=Ve(s[d],r[f]),yt(t,l[f+1],s[d]),d++,f--;else if(a[u]===o[p])l[p]=Ve(s[u],r[p]),yt(t,s[d],s[u]),u--,p++;else if(c===void 0&&(c=Po(o,p,f),h=Po(a,d,u)),c.has(a[d]))if(c.has(a[u])){const g=h.get(o[p]),m=g!==void 0?s[g]:null;if(m===null){const y=yt(t,s[d]);Ve(y,r[p]),l[p]=y}else l[p]=Ve(m,r[p]),yt(t,s[d],m),s[g]=null;p++}else zn(s[u]),u--;else zn(s[d]),d++;for(;p<=f;){const g=yt(t,l[f+1]);Ve(g,r[p]),l[p++]=g}for(;d<=u;){const g=s[d++];g!==null&&zn(g)}return this.ut=o,ra(t,l),Q}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class vn extends Event{constructor(e){super(vn.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}vn.eventName="rangeChanged";class _n extends Event{constructor(e){super(_n.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}_n.eventName="visibilityChanged";class bn extends Event{constructor(){super(bn.eventName,{bubbles:!1})}}bn.eventName="unpinned";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Yf{constructor(e){this._element=null;const i=e??window;this._node=i,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class Jf extends Yf{constructor(e,i){super(i),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const n=this._node;this._originalScrollTo=n.scrollTo,this._originalScrollBy=n.scrollBy,this._originalScroll=n.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(e,i){const n=typeof e=="number"&&typeof i=="number"?{left:e,top:i}:e;this._scrollTo(n)}scrollBy(e,i){const n=typeof e=="number"&&typeof i=="number"?{left:e,top:i}:e;n.top!==void 0&&(n.top+=this.scrollTop),n.left!==void 0&&(n.left+=this.scrollLeft),this._scrollTo(n)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,i=null,n=null){this._end!==null&&this._end(),e.behavior==="smooth"?(this._setDestination(e),this._retarget=i,this._end=n):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:i,left:n}=e;return i=i===void 0?void 0:Math.max(0,Math.min(i,this.maxScrollTop)),n=n===void 0?void 0:Math.max(0,Math.min(n,this.maxScrollLeft)),this._destination!==null&&n===this._destination.left&&i===this._destination.top?!1:(this.__destination={top:i,left:n,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,i,n){return this._scrollTo(e,i,n),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:e,scrollLeft:i}=this;let{top:n,left:s}=this._destination;n=Math.min(n||0,this.maxScrollTop),s=Math.min(s||0,this.maxScrollLeft);const r=Math.abs(n-e),o=Math.abs(s-i);r<1&&o<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(e){this._clients.add(e),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let To=typeof window<"u"?window.ResizeObserver:void 0;const bs=Symbol("virtualizerRef"),mi="virtualizer-sizer";let ko;class Xf{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw new Error("Virtualizer constructor requires a configuration object");if(e.hostElement)this._init(e);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);const i=e.layout||{};this._layoutInitialized=this._initLayout(i)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new To(()=>this._hostElementSizeChanged()),this._childrenRO=new To(this._childrenSizeChanged.bind(this))}_initHostElement(e){const i=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),i[bs]=this}connected(){this._initObservers();const e=this._isScroller;this._clippingAncestors=Qf(this._hostElement,e),this._scrollerController=new Jf(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(e=>e.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const i=this._hostElement.style;i.display=i.display||"block",i.position=i.position||"relative",i.contain=i.contain||"size layout",this._isScroller&&(i.overflow=i.overflow||"auto",i.minHeight=i.minHeight||"150px")}_getSizer(){const e=this._hostElement;if(!this._sizer){let i=e.querySelector(`[${mi}]`);i||(i=document.createElement("div"),i.setAttribute(mi,""),e.appendChild(i)),Object.assign(i.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),i.textContent="&nbsp;",i.setAttribute(mi,""),this._sizer=i}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;const i=e.type||ko;if(typeof i=="function"&&this._layout instanceof i){const n={...e};return delete n.type,this._layout.config=n,!0}return!1}async _initLayout(e){let i,n;if(typeof e.type=="function"){n=e.type;const s={...e};delete s.type,i=s}else i=e;n===void 0&&(ko=n=(await _c(()=>import("./flow-Cd2WZlRY.js"),[],import.meta.url)).FlowLayout),this._layout=new n(s=>this._handleLayoutMessage(s),i),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const e=window.performance.now(),i=e-this._benchmarkStart,s=performance.getEntriesByName("uv-virtualizing","measure").filter(r=>r.startTime>=this._benchmarkStart&&r.startTime<e).reduce((r,o)=>r+o.duration,0);return this._benchmarkStart=null,{timeElapsed:i,virtualizationTime:s}}return null}_measureChildren(){const e={},i=this._children,n=this._measureChildOverride||this._measureChild;for(let s=0;s<i.length;s++){const r=i[s],o=this._first+s;(this._itemsChanged||this._toBeMeasured.has(r))&&(e[o]=n.call(this,r,this._items[o]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){const{width:i,height:n}=e.getBoundingClientRect();return Object.assign({width:i,height:n},Gf(e))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;const{_rangeChanged:i,_itemsChanged:n}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(i||n)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(e){console.warn("Error measuring performance data: ",e)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(e){switch(e.type){case"scroll":(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent();break;default:console.warn("event not handled",e)}}_handleLayoutMessage(e){e.type==="stateChanged"?this._updateDOM(e):e.type==="visibilityChanged"?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):e.type==="unpinned"&&this._hostElement.dispatchEvent(new bn)}get _children(){const e=[];let i=this._hostElement.firstElementChild;for(;i;)i.hasAttribute(mi)||e.push(i),i=i.nextElementSibling;return e}_updateView(){const e=this._hostElement,i=this._scrollerController?.element,n=this._layout;if(e&&i&&n){let s,r,o,a;const l=e.getBoundingClientRect();s=0,r=0,o=window.innerHeight,a=window.innerWidth;const c=this._clippingAncestors.map(y=>y.getBoundingClientRect());c.unshift(l);for(const y of c)s=Math.max(s,y.top),r=Math.max(r,y.left),o=Math.min(o,y.bottom),a=Math.min(a,y.right);const h=i.getBoundingClientRect(),d={left:l.left-h.left,top:l.top-h.top},u={width:i.scrollWidth,height:i.scrollHeight},p=s-l.top+e.scrollTop,f=r-l.left+e.scrollLeft,g=Math.max(0,o-s),m=Math.max(0,a-r);n.viewportSize={width:m,height:g},n.viewportScroll={top:p,left:f},n.totalScrollSize=u,n.offsetWithinScroller=d}}_sizeHostElement(e){const n=e&&e.width!==null?Math.min(82e5,e.width):0,s=e&&e.height!==null?Math.min(82e5,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${n}px, ${s}px)`;else{const r=this._hostElement.style;r.minWidth=n?`${n}px`:"100%",r.minHeight=s?`${s}px`:"100%"}}_positionChildren(e){e&&e.forEach(({top:i,left:n,width:s,height:r,xOffset:o,yOffset:a},l)=>{const c=this._children[l-this._first];c&&(c.style.position="absolute",c.style.boxSizing="border-box",c.style.transform=`translate(${n}px, ${i}px)`,s!==void 0&&(c.style.width=s+"px"),r!==void 0&&(c.style.height=r+"px"),c.style.left=o===void 0?null:o+"px",c.style.top=a===void 0?null:a+"px")})}async _adjustRange(e){const{_first:i,_last:n,_firstVisible:s,_lastVisible:r}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==i||this._last!==n,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==s||this._lastVisible!==r}_correctScrollError(){if(this._scrollError){const{scrollTop:e,scrollLeft:i}=this._scrollerController,{top:n,left:s}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-n,left:i-s})}}element(e){return e===1/0&&(e=this._items.length-1),this._items?.[e]===void 0?void 0:{scrollIntoView:(i={})=>this._scrollElementIntoView({...i,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),e.behavior==="smooth"){const i=this._layout.getScrollIntoViewCoordinates(e),{behavior:n}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(i,{behavior:n}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){const{index:i}=this._scrollIntoViewTarget||{};i&&e?.has(i)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new vn({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new _n({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((e,i)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=i})),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){if(this._layout?.measureChildren){for(const i of e)this._toBeMeasured.set(i.target,i.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function Gf(t){const e=window.getComputedStyle(t);return{marginTop:yi(e.marginTop),marginRight:yi(e.marginRight),marginBottom:yi(e.marginBottom),marginLeft:yi(e.marginLeft)}}function yi(t){const e=t?parseFloat(t):NaN;return Number.isNaN(e)?0:e}function Ho(t){if(t.assignedSlot!==null)return t.assignedSlot;if(t.parentElement!==null)return t.parentElement;const e=t.parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host||null}function Zf(t,e=!1){const i=[];let n=e?t:Ho(t);for(;n!==null;)i.push(n),n=Ho(n);return i}function Qf(t,e=!1){let i=!1;return Zf(t,e).filter(n=>{if(i)return!1;const s=getComputedStyle(n);return i=s.position==="fixed",s.overflow!=="visible"})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e2=t=>t,t2=(t,e)=>R`${e}: ${JSON.stringify(t,null,2)}`;class i2 extends on{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(i,n)=>t2(i,n+this._first),this._keyFunction=(i,n)=>e2(i,n+this._first),this._items=[],e.type!==pe.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(e){e&&this._setFunctions(e);const i=[];if(this._first>=0&&this._last>=this._first)for(let n=this._first;n<=this._last;n++)i.push(this._items[n]);return qf(i,this._keyFunction,this._renderItem)}update(e,[i]){this._setFunctions(i);const n=this._items!==i.items;return this._items=i.items||[],this._virtualizer?this._updateVirtualizerConfig(e,i):this._initialize(e,i),n?Q:this.render()}async _updateVirtualizerConfig(e,i){if(!await this._virtualizer.updateLayoutConfig(i.layout||{})){const s=e.parentNode;this._makeVirtualizer(s,i)}this._virtualizer.items=this._items}_setFunctions(e){const{renderItem:i,keyFunction:n}=e;i&&(this._renderItem=(s,r)=>i(s,r+this._first)),n&&(this._keyFunction=(s,r)=>n(s,r+this._first))}_makeVirtualizer(e,i){this._virtualizer&&this._virtualizer.disconnected();const{layout:n,scroller:s,items:r}=i;this._virtualizer=new Xf({hostElement:e,layout:n,scroller:s}),this._virtualizer.items=r,this._virtualizer.connected()}_initialize(e,i){const n=e.parentNode;n&&n.nodeType===1&&(n.addEventListener("rangeChanged",s=>{this._first=s.first,this._last=s.last,this.setValue(this.render())}),this._makeVirtualizer(n,i))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const n2=Ae(i2),s2=(t,e)=>{if(!t||!e)return;const i=Object.keys(e);return Object.fromEntries(Object.keys(t).flatMap(n=>i.includes(n)?[]:[[n,void 0]]))};class r2 extends pt{_props;render(e){return Q}update(e,[i]){return this._props!==i&&Object.assign(e.element,s2(this._props,i),this._props=i),Q}}const o2=Ae(r2),a2=t=>{const e=ni(),i=j(()=>new CSSStyleSheet,[]);D(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,i]},[]),D(()=>{i.replaceSync(t)},[t])};function tc(t){return t?e=>e?.[t]:lt}const l2=t=>{const e=tc(t);return i=>typeof i=="string"?i:e(i)?.toString()||""},c2=t=>e=>{const i={};for(const n in e)t.includes(n)&&(i[n]=e[n]);return i},h2="data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1L5.20039 7.04766L1.66348 3.46152' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",d2=ce`
	:host {
		position: fixed;
		z-index: 1000;
		font-family: var(--paper-font-subhead_-_font-family, inherit);
		background: var(
			--cosmoz-autocomplete-listbox-bg,
			rgba(255, 255, 255, 0.75)
		);
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
		background: url("${h2}") #5881f6 no-repeat 50%;
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
`,u2=({index:t,itemHeight:e,auto:i})=>ce`
	${_e(!i,()=>ce`
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
`,p2=t=>typeof t=="object"&&t!==null&&Symbol.iterator in t;function Je(t){return t==null?[]:Array.isArray(t)?t:typeof t=="string"?[t]:p2(t)?Array.from(t):[t]}const Fn=(t,e=lt)=>i=>{const n=Je(t).map(e);return Je(i).filter(s=>!n.includes(e(s)))},f2=(t,e)=>e?i=>Je(t).find(n=>n[e]===i[e]):i=>Je(t).includes(i),g2=(t,e)=>{if(!e||!t)return t;const i=t.toLowerCase().indexOf(e.toLowerCase());if(i<0)return t;const n=i+e.length;return[t.slice(0,i),R`<mark>${t.slice(i,n)}</mark>`,t.slice(n)]},m2=t=>{const e=ft(t);D(()=>{const i=n=>{if(!(n.ctrlKey&&n.altKey||n.defaultPrevented))switch(n.key){case"Up":case"ArrowUp":n.preventDefault(),e.onUp();break;case"Down":case"ArrowDown":n.preventDefault(),e.onDown();break;case"Enter":n.preventDefault(),e.onEnter();break}};return document.addEventListener("keydown",i,!0),()=>document.removeEventListener("keydown",i,!0)},[e])},y2=({items:t,onSelect:e,defaultIndex:i=0})=>{const[n,s]=ve({index:i}),{index:r}=n,{length:o}=t;return D(()=>{s({index:n.index<0?i:Math.min(n.index,t.length-1),scroll:!0})},[t,i]),m2({onUp:B(()=>s(a=>({index:a.index>0?a.index-1:o-1,scroll:!0})),[o]),onDown:B(()=>s(a=>({index:a.index<o-1?a.index+1:0,scroll:!0})),[o]),onEnter:B(()=>r>-1&&r<o&&e?.(t[r],r),[r,t,e])}),{position:n,highlight:B(a=>s({index:a}),[]),select:B(a=>e?.(a),[e])}},v2=(t=lt)=>(e,i,{highlight:n,select:s,textual:r=lt,query:o,isSelected:a})=>{const l=r(e),c=g2(l,o),h=t(c,e,i);return R`<div
				class="item"
				role="option"
				part="option"
				?aria-selected=${a(e)}
				data-index=${i}
				@mouseenter=${()=>n(i)}
				@click=${()=>s(e)}
				@mousedown=${d=>d.preventDefault()}
				title=${l}
			>
				${h}
			</div>
			<div class="sizer" virtualizer-sizer>${h}</div>`},_2=({itemRenderer:t=v2(),...e})=>{const i=ft(e);return B((n,s)=>t(n,s,i),[i,t])},b2=t=>{const e=t==="auto",[i,n]=ve(e?40:t);return[i,s=>e?n(s):void 0]},w2=["query","items","onSelect","textual","anchor","itemHeight","itemLimit","itemRenderer","defaultIndex","value","valueProperty","loading"],x2=({value:t,valueProperty:e,items:i,onSelect:n,defaultIndex:s,query:r,textual:o,itemRenderer:a,itemHeight:l=40,itemLimit:c=5})=>{const h=j(()=>f2(t,e),[t,e]),d=j(()=>i.slice(),[i,h]),{position:u,highlight:p,select:f}=y2({items:d,onSelect:n,defaultIndex:isNaN(s)?void 0:Number(s)}),[g,m]=b2(l);return{position:u,items:d,height:Math.min(c,d.length)*g,highlight:p,select:f,itemHeight:g,setItemHeight:m,renderItem:_2({itemRenderer:a,items:d,position:u,highlight:p,select:f,textual:o,query:r,isSelected:h})}},Ro=Ha,C2=t=>{const e=Pa(void 0),{position:i,items:n,renderItem:s,height:r,itemHeight:o,setItemHeight:a}=x2(t);return D(()=>{const l=e.current?.[bs];l&&l.layoutComplete.then(()=>{t.dispatchEvent(new CustomEvent("layout-complete"));const{averageChildSize:c,averageMarginSize:h}=l._layout._metricsCache;return a(c+h*2)},Ro)},[n]),D(()=>{if(!i.scroll)return;const l=e.current?.[bs];if(l){if(!l?._layout){l.layoutComplete.then(()=>l.element(i.index)?.scrollIntoView({block:"nearest"}),Ro);return}l.element(i.index)?.scrollIntoView({block:"nearest"})}},[i]),a2(u2({...i,itemHeight:o,auto:t.itemHeight==="auto"})),R`<div
			class="items"
			style="min-height: ${r}px"
			${Ue(l=>e.current=l)}
		>
			<div virtualizer-sizer></div>
			${n2({items:n,renderItem:s,scroller:!0})}
		</div>
		<slot></slot>`};customElements.define("cosmoz-listbox",Da(G(C2,{styleSheets:[Ys(d2)]})));const S2=({multi:t,setFloating:e,styles:i,...n},s)=>R`<cosmoz-listbox
		style="${Va(i)}"
		@connected="${r=>r.target.showPopover?.()}"
		popover="manual"
		part="listbox"
		?multi=${t}
		${Ue(e)}
		...=${o2(c2(w2)(n))}
		>${s}</cosmoz-listbox
	>`,z2=mn`
	:host {
		border-radius: var(--cosmoz-autocomplete-chip-border-radius, 500px);
		background: var(--cosmoz-autocomplete-chip-bg-color, #cbcfdb);
		margin-bottom: 2px;
		display: flex;
		align-items: center;
		flex: 0.0001 1 fit-content;
		max-width: 18ch;
		min-width: 40px;
		padding-inline: 8px;
		gap: 4px;
		cursor: pointer;
		transform: translateY(var(--cosmoz-autocomplete-chip-translate-y, 0));
	}

	.content {
		color: var(--cosmoz-autocomplete-chip-color, #424242);
		font-family: var(
			--cosmoz-autocomplete-chip-text-font-family,
			'Inter',
			sans-serif
		);
		font-size: var(--cosmoz-autocomplete-chip-text-font-size, 12px);
		font-weight: var(--cosmoz-autocomplete-chip-text-font-weight, 400);
		line-height: var(--cosmoz-autocomplete-chip-text-line-height, 22px);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		flex: auto;
		min-width: 16px;
		text-align: center;
	}

	.clear {
		background-color: var(--cosmoz-autocomplete-chip-clear-bg-color, #81899b);
		border-radius: 50%;
		cursor: pointer;
		width: 16px;
		height: 16px;
		margin-right: -4px;
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
`,E2=R`
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
`,L2=({onClear:t,disabled:e})=>R`
	<div class="content" part="content chip-text"><slot></slot></div>
	${_e(t&&!e,()=>R`<span
				class="clear"
				part="clear chip-clear"
				@mousedown=${i=>i.preventDefault()}
				@click=${t}
			>
				${E2}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",G(L2,{observedAttributes:["disabled"],styleSheets:[Ys(z2)]}));const O2=({content:t,onClear:e,disabled:i,hidden:n,className:s="chip",slot:r})=>R`<cosmoz-autocomplete-chip
		class=${le(s)}
		slot=${le(r)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${i}
		?hidden=${n}
		.onClear=${e}
		title=${le(typeof t=="string"?t:void 0)}
		>${t}</cosmoz-autocomplete-chip
	>`,A2=({value:t,min:e=0,onDeselect:i,textual:n,disabled:s,chipRenderer:r=O2})=>[...t.filter(Boolean).map(o=>r({item:o,content:n(o),onClear:t.length>e&&(()=>i(o)),disabled:s,slot:"control"})),r({item:null,content:R`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],M2=ce`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",G(()=>Le,{styleSheets:[M2]}));const P2=mn`
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
`,T2=({focused:t,empty:e,...i})=>{const n=t&&e&&i.limit!==1,s=ft(i);D(()=>{if(!n)return;const r=o=>{if(o.defaultPrevented)return;const{key:a}=o,l=Je(s.value),c=s.limit==1;if(l.length>0&&(a==="Backspace"||c&&a.length===1))return s.onChange(l.slice(0,-1))};return document.addEventListener("keydown",r,!0),()=>document.removeEventListener("keydown",r,!0)},[n,s])},No=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),k2=(t,e,i)=>{if(!e)return t;const n=No(e.toLowerCase()),s=[];for(const r of t){const a=No(i(r).toLowerCase()).indexOf(n);a<0||s.push({item:r,index:a})}return s.sort((r,o)=>r.index-o.index).map(({item:r})=>r)},H2=t=>t===!1||t==null?[]:t,ic=(t,e,i)=>t.dispatchEvent(new CustomEvent(e,{detail:i})),R2=(t,e,i)=>B(n=>{e?.(n),ic(t,i,n)},[e]),N2=[],I2=t=>(...e)=>{let i;const n=()=>{i&&cancelAnimationFrame(i)};return n(),i=requestAnimationFrame(()=>{i=void 0,t(...e)}),n},Zs=(t,e=()=>({}))=>{const i={type:t,toString(){return t}};return Object.assign((...s)=>Object.assign(e(...s),i),i)},Io=t=>t.type||t.toString(),Vo=t=>Array.isArray(t)?t:[t],V2=(t,e)=>{const i=Vo(e),n=(i.every(Array.isArray)?i:[i]).map(([s,r])=>({actions:Vo(s).map(Io),handle:r}));return(s=t,r)=>{const o=n.find(a=>a.actions.includes(Io(r)));return o?o.handle(s,r):s}},je={pending:"pending",rejected:"rejected",resolved:"resolved"},nc={error:void 0,result:void 0,state:je.pending},sc=Zs(je.pending),rc=Zs(je.resolved,t=>({result:t})),oc=Zs(je.rejected,t=>({error:t})),$2=V2(nc,[[sc,()=>({error:void 0,result:void 0,state:je.pending})],[rc,(t,{result:e})=>({error:void 0,result:e,state:je.resolved})],[oc,(t,{error:e})=>({error:e,result:void 0,state:je.rejected})]]),D2=t=>{const[{error:e,result:i,state:n},s]=nd($2,nc);return D(()=>{if(!t)return;let r=!1;return s(sc()),t.then(o=>!r&&s(rc(o)),o=>!r&&s(oc(o))),()=>{r=!0}},[t]),[i,e,n]},F2=({value:t,text:e,onChange:i,onText:n,onSelect:s,limit:r,min:o,source:a,textProperty:l,textual:c,valueProperty:h,keepOpened:d,keepQuery:u,preserveOrder:p,defaultIndex:f,externalSearch:g,...m})=>{const y=j(()=>(c??l2)(l),[c,l]),{active:v,focused:_,onFocus:b,setClosed:x}=Na(m),A=!e,C=j(()=>e?.trim(),[e]),F=ni(),H=R2(F,n,"text"),T=B(L=>{i?.(L,()=>x(!0)),ic(F,"value",L)},[i]),[K,J]=ve([]),N=j(()=>Promise.resolve(typeof a=="function"?a({query:C,active:v}):a).then(H2),[a,v,C]),O=j(()=>Je(t),[t]);D(()=>N.then(J),[N]),T2({focused:_,empty:A,limit:r,value:O,onChange:T,onText:H}),D(()=>{_||H("")},[_]);const V=ft({onText:H,onChange:T,value:O,limit:r,min:o,keepQuery:u,keepOpened:d,setClosed:x,onSelect:s}),[,,M]=D2(N);return{active:v,query:C,textual:y,value:O,source$:N,loading:M==="pending",items:j(()=>{if(!v)return N2;const L=p?K:[...O,...Fn(O,tc(h))(K)];return g?L:k2(L,C,y)},[K,v,C,y,A,O,p,h,g]),onClick:B(()=>x(!1),[]),onFocus:b,onText:B(L=>{H(L.target.value),x(!1)},[H,e,x]),onSelect:B(L=>{V.onSelect?.(L,V);const{onChange:P,onText:U,limit:ae,min:Y,value:Ce,keepQuery:Ie,keepOpened:si,setClosed:gc}=V;Ie||U(""),si||gc(!0);const ri=Je(Ce),Qs=ri.includes(L);Qs&&ri.length===Y||P((Qs?Fn(L)(ri):[...ri,L]).slice(-ae))},[V]),onDeselect:B(L=>V.onChange(Fn(L)(V.value)),[V]),defaultIndex:C!==void 0&&C?.length>0?0:f}},B2=t=>{const e=t.shadowRoot.querySelectorAll(".chip"),i=t.shadowRoot.querySelector(".badge");i.hidden=!0;for(const a of e)a.hidden=!1;const s=t.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let r;for(r=0;r<e.length;r++){const l=e[r].getBoundingClientRect();if(!(l.x+l.width<=s.x+s.width-24))break}const o=e.length-r;for(i.querySelector("span").textContent="+"+o.toString(),i.hidden=o<1;r<e.length;r++)e[r].hidden=!0},j2=({value:t,active:e,wrap:i,limit:n})=>{const s=ni(),r=!(i||n==1),o=j(()=>I2(()=>B2(s)),[]),[a,l]=ve(0);Qn(()=>{if(!r)return;const c=s.shadowRoot.querySelector("cosmoz-input"),h=new ResizeObserver(d=>{l(d[0].contentRect.width)});return h.observe(c),()=>h.disconnect()},[r]),Qn(()=>r?o():void 0,[r,a,e,t])},U2=["input","control","label","line","error","wrap"].map(t=>`${t}: input-${t}`).join(),K2=[uu({apply({rects:t,elements:e}){Object.assign(e.floating.style,{minWidth:`${Math.max(t.reference.width,t.floating.width)}px`})}}),...Za],W2=({active:t,isSingle:e,showSingle:i})=>t?!(e&&!i):!1,q2=t=>{const{active:e,invalid:i,errorMessage:n,label:s,placeholder:r,disabled:o,noLabelFloat:a,alwaysFloatLabel:l,textual:c,text:h,onText:d,onFocus:u,onClick:p,onDeselect:f,value:g,limit:m,min:y,showSingle:v,items:_,source$:b,placement:x,loading:A,chipRenderer:C}=t,F=ni(),H=m==1,T=H&&g?.[0]!=null,{styles:K,setReference:J,setFloating:N}=Qa({placement:x,middleware:K2});D(()=>(F.addEventListener("focusin",u),F.addEventListener("focusout",u),()=>{F.removeEventListener("focusin",u),F.removeEventListener("focusout",u)}),[u]),Vl({focus:()=>F.shadowRoot?.querySelector("#input")?.focus()},[]);const O=A||_.length>0||h!=null&&h.length>0;return R`<cosmoz-input
				id="input"
				part="input"
				${Ue(J)}
				.label=${s}
				.placeholder=${T?void 0:r}
				?no-label-float=${a}
				?always-float-label=${g?.length>0||l}
				?readonly=${T}
				?disabled=${o}
				?invalid=${_s(b.then(()=>i,()=>!0),i)}
				.errorMessage=${_s(b.then(()=>n,V=>V.message),n)}
				.value=${gn(h)}
				@value-changed=${d}
				@click=${p}
				autocomplete="off"
				exportparts=${U2}
				?data-one=${H}
				?data-single=${T}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${A2({value:g,min:y,onDeselect:f,textual:c,disabled:o,chipRenderer:C})}
			</cosmoz-input>

			${_e(W2({active:e,isSingle:T,showSingle:v}),()=>S2({...t,items:_,multi:!H,setFloating:N,styles:{...K,display:O?void 0:"none"}},_e(A,()=>R`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>_e(h!=null&&h.length>0&&_.length===0,()=>R`<slot name="no-result"></slot>`))))}`},ac=t=>{const e={...t,...F2(t)};return j2(e),q2(e)},lc=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap"],Y2=t=>{const{onChange:e,onText:i,...n}=t,[s,r]=rd("value");return D(()=>{t.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),ac({...n,value:s,onChange:B((o,...a)=>{r(o),e?.(o,...a)},[e]),onText:B(o=>{t.text=o,i?.(o)},[i])})},cc=[Ys(P2)];customElements.define("cosmoz-autocomplete-ui",G(ac,{observedAttributes:lc,styleSheets:cc}));customElements.define("cosmoz-autocomplete",G(Y2,{observedAttributes:lc,styleSheets:cc}));const J2=ce`
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
`,X2=()=>Le,G2=G(X2,{styleSheets:[J2]});customElements.define("cosmoz-spinner",G2);const z=t=>typeof t=="string",St=()=>{let t,e;const i=new Promise((n,s)=>{t=n,e=s});return i.resolve=t,i.reject=e,i},$o=t=>t==null?"":""+t,Z2=(t,e,i)=>{t.forEach(n=>{e[n]&&(i[n]=e[n])})},Q2=/###/g,Do=t=>t&&t.indexOf("###")>-1?t.replace(Q2,"."):t,Fo=t=>!t||z(t),Ft=(t,e,i)=>{const n=z(e)?e.split("."):e;let s=0;for(;s<n.length-1;){if(Fo(t))return{};const r=Do(n[s]);!t[r]&&i&&(t[r]=new i),Object.prototype.hasOwnProperty.call(t,r)?t=t[r]:t={},++s}return Fo(t)?{}:{obj:t,k:Do(n[s])}},Bo=(t,e,i)=>{const{obj:n,k:s}=Ft(t,e,Object);if(n!==void 0||e.length===1){n[s]=i;return}let r=e[e.length-1],o=e.slice(0,e.length-1),a=Ft(t,o,Object);for(;a.obj===void 0&&o.length;)r=`${o[o.length-1]}.${r}`,o=o.slice(0,o.length-1),a=Ft(t,o,Object),a&&a.obj&&typeof a.obj[`${a.k}.${r}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${r}`]=i},eg=(t,e,i,n)=>{const{obj:s,k:r}=Ft(t,e,Object);s[r]=s[r]||[],s[r].push(i)},Gi=(t,e)=>{const{obj:i,k:n}=Ft(t,e);if(i)return i[n]},tg=(t,e,i)=>{const n=Gi(t,i);return n!==void 0?n:Gi(e,i)},hc=(t,e,i)=>{for(const n in e)n!=="__proto__"&&n!=="constructor"&&(n in t?z(t[n])||t[n]instanceof String||z(e[n])||e[n]instanceof String?i&&(t[n]=e[n]):hc(t[n],e[n],i):t[n]=e[n]);return t},et=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var ig={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const ng=t=>z(t)?t.replace(/[&<>"'\/]/g,e=>ig[e]):t;class sg{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const i=this.regExpMap.get(e);if(i!==void 0)return i;const n=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,n),this.regExpQueue.push(e),n}}const rg=[" ",",","?","!",";"],og=new sg(20),ag=(t,e,i)=>{e=e||"",i=i||"";const n=rg.filter(o=>e.indexOf(o)<0&&i.indexOf(o)<0);if(n.length===0)return!0;const s=og.getRegExp(`(${n.map(o=>o==="?"?"\\?":o).join("|")})`);let r=!s.test(t);if(!r){const o=t.indexOf(i);o>0&&!s.test(t.substring(0,o))&&(r=!0)}return r},ws=function(t,e){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!t)return;if(t[e])return t[e];const n=e.split(i);let s=t;for(let r=0;r<n.length;){if(!s||typeof s!="object")return;let o,a="";for(let l=r;l<n.length;++l)if(l!==r&&(a+=i),a+=n[l],o=s[a],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&l<n.length-1)continue;r+=l-r+1;break}s=o}return s},Zi=t=>t&&t.replace("_","-"),lg={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){console&&console[t]&&console[t].apply(console,e)}};class Qi{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,i)}init(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=i.prefix||"i18next:",this.logger=e||lg,this.options=i,this.debug=i.debug}log(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return this.forward(i,"log","",!0)}warn(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return this.forward(i,"warn","",!0)}error(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return this.forward(i,"error","")}deprecate(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return this.forward(i,"warn","WARNING DEPRECATED: ",!0)}forward(e,i,n,s){return s&&!this.debug?null:(z(e[0])&&(e[0]=`${n}${this.prefix} ${e[0]}`),this.logger[i](e))}create(e){return new Qi(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new Qi(this.logger,e)}}var ye=new Qi;class wn{constructor(){this.observers={}}on(e,i){return e.split(" ").forEach(n=>{this.observers[n]||(this.observers[n]=new Map);const s=this.observers[n].get(i)||0;this.observers[n].set(i,s+1)}),this}off(e,i){if(this.observers[e]){if(!i){delete this.observers[e];return}this.observers[e].delete(i)}}emit(e){for(var i=arguments.length,n=new Array(i>1?i-1:0),s=1;s<i;s++)n[s-1]=arguments[s];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a(...n)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a.apply(a,[e,...n])})}}class jo extends wn{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const i=this.options.ns.indexOf(e);i>-1&&this.options.ns.splice(i,1)}getResource(e,i,n){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,o=s.ignoreJSONStructure!==void 0?s.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.indexOf(".")>-1?a=e.split("."):(a=[e,i],n&&(Array.isArray(n)?a.push(...n):z(n)&&r?a.push(...n.split(r)):a.push(n)));const l=Gi(this.data,a);return!l&&!i&&!n&&e.indexOf(".")>-1&&(e=a[0],i=a[1],n=a.slice(2).join(".")),l||!o||!z(n)?l:ws(this.data&&this.data[e]&&this.data[e][i],n,r)}addResource(e,i,n,s){let r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let a=[e,i];n&&(a=a.concat(o?n.split(o):n)),e.indexOf(".")>-1&&(a=e.split("."),s=i,i=a[1]),this.addNamespaces(i),Bo(this.data,a,s),r.silent||this.emit("added",e,i,n,s)}addResources(e,i,n){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const r in n)(z(n[r])||Array.isArray(n[r]))&&this.addResource(e,i,r,n[r],{silent:!0});s.silent||this.emit("added",e,i,n)}addResourceBundle(e,i,n,s,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},a=[e,i];e.indexOf(".")>-1&&(a=e.split("."),s=n,n=i,i=a[1]),this.addNamespaces(i);let l=Gi(this.data,a)||{};o.skipCopy||(n=JSON.parse(JSON.stringify(n))),s?hc(l,n,r):l={...l,...n},Bo(this.data,a,l),o.silent||this.emit("added",e,i,n)}removeResourceBundle(e,i){this.hasResourceBundle(e,i)&&delete this.data[e][i],this.removeNamespaces(i),this.emit("removed",e,i)}hasResourceBundle(e,i){return this.getResource(e,i)!==void 0}getResourceBundle(e,i){return i||(i=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,i)}:this.getResource(e,i)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const i=this.getDataByLanguage(e);return!!(i&&Object.keys(i)||[]).find(s=>i[s]&&Object.keys(i[s]).length>0)}toJSON(){return this.data}}var dc={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,i,n,s){return t.forEach(r=>{this.processors[r]&&(e=this.processors[r].process(e,i,n,s))}),e}};const Uo={};class en extends wn{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Z2(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=ye.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const n=this.resolve(e,i);return n&&n.res!==void 0}extractFromKey(e,i){let n=i.nsSeparator!==void 0?i.nsSeparator:this.options.nsSeparator;n===void 0&&(n=":");const s=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator;let r=i.ns||this.options.defaultNS||[];const o=n&&e.indexOf(n)>-1,a=!this.options.userDefinedKeySeparator&&!i.keySeparator&&!this.options.userDefinedNsSeparator&&!i.nsSeparator&&!ag(e,n,s);if(o&&!a){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:z(r)?[r]:r};const c=e.split(n);(n!==s||n===s&&this.options.ns.indexOf(c[0])>-1)&&(r=c.shift()),e=c.join(s)}return{key:e,namespaces:z(r)?[r]:r}}translate(e,i,n){if(typeof i!="object"&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),typeof i=="object"&&(i={...i}),i||(i={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const s=i.returnDetails!==void 0?i.returnDetails:this.options.returnDetails,r=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,{key:o,namespaces:a}=this.extractFromKey(e[e.length-1],i),l=a[a.length-1],c=i.lng||this.language,h=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&c.toLowerCase()==="cimode"){if(h){const b=i.nsSeparator||this.options.nsSeparator;return s?{res:`${l}${b}${o}`,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:`${l}${b}${o}`}return s?{res:o,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:o}const d=this.resolve(e,i);let u=d&&d.res;const p=d&&d.usedKey||o,f=d&&d.exactUsedKey||o,g=Object.prototype.toString.apply(u),m=["[object Number]","[object Function]","[object RegExp]"],y=i.joinArrays!==void 0?i.joinArrays:this.options.joinArrays,v=!this.i18nFormat||this.i18nFormat.handleAsObject,_=!z(u)&&typeof u!="boolean"&&typeof u!="number";if(v&&u&&_&&m.indexOf(g)<0&&!(z(y)&&Array.isArray(u))){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const b=this.options.returnedObjectHandler?this.options.returnedObjectHandler(p,u,{...i,ns:a}):`key '${o} (${this.language})' returned an object instead of string.`;return s?(d.res=b,d.usedParams=this.getUsedParamsDetails(i),d):b}if(r){const b=Array.isArray(u),x=b?[]:{},A=b?f:p;for(const C in u)if(Object.prototype.hasOwnProperty.call(u,C)){const F=`${A}${r}${C}`;x[C]=this.translate(F,{...i,joinArrays:!1,ns:a}),x[C]===F&&(x[C]=u[C])}u=x}}else if(v&&z(y)&&Array.isArray(u))u=u.join(y),u&&(u=this.extendTranslation(u,e,i,n));else{let b=!1,x=!1;const A=i.count!==void 0&&!z(i.count),C=en.hasDefaultValue(i),F=A?this.pluralResolver.getSuffix(c,i.count,i):"",H=i.ordinal&&A?this.pluralResolver.getSuffix(c,i.count,{ordinal:!1}):"",T=A&&!i.ordinal&&i.count===0&&this.pluralResolver.shouldUseIntlApi(),K=T&&i[`defaultValue${this.options.pluralSeparator}zero`]||i[`defaultValue${F}`]||i[`defaultValue${H}`]||i.defaultValue;!this.isValidLookup(u)&&C&&(b=!0,u=K),this.isValidLookup(u)||(x=!0,u=o);const N=(i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&x?void 0:u,O=C&&K!==u&&this.options.updateMissing;if(x||b||O){if(this.logger.log(O?"updateKey":"missingKey",c,l,o,O?K:u),r){const P=this.resolve(o,{...i,keySeparator:!1});P&&P.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let V=[];const M=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo==="fallback"&&M&&M[0])for(let P=0;P<M.length;P++)V.push(M[P]);else this.options.saveMissingTo==="all"?V=this.languageUtils.toResolveHierarchy(i.lng||this.language):V.push(i.lng||this.language);const L=(P,U,ae)=>{const Y=C&&ae!==u?ae:N;this.options.missingKeyHandler?this.options.missingKeyHandler(P,l,U,Y,O,i):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(P,l,U,Y,O,i),this.emit("missingKey",P,l,U,u)};this.options.saveMissing&&(this.options.saveMissingPlurals&&A?V.forEach(P=>{const U=this.pluralResolver.getSuffixes(P,i);T&&i[`defaultValue${this.options.pluralSeparator}zero`]&&U.indexOf(`${this.options.pluralSeparator}zero`)<0&&U.push(`${this.options.pluralSeparator}zero`),U.forEach(ae=>{L([P],o+ae,i[`defaultValue${ae}`]||K)})}):L(V,o,K))}u=this.extendTranslation(u,e,i,d,n),x&&u===o&&this.options.appendNamespaceToMissingKey&&(u=`${l}:${o}`),(x||b)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?u=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${o}`:o,b?u:void 0):u=this.options.parseMissingKeyHandler(u))}return s?(d.res=u,d.usedParams=this.getUsedParamsDetails(i),d):u}extendTranslation(e,i,n,s,r){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||s.usedLng,s.usedNS,s.usedKey,{resolved:s});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});const c=z(e)&&(n&&n.interpolation&&n.interpolation.skipOnVariables!==void 0?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let h;if(c){const u=e.match(this.interpolator.nestingRegexp);h=u&&u.length}let d=n.replace&&!z(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(d={...this.options.interpolation.defaultVariables,...d}),e=this.interpolator.interpolate(e,d,n.lng||this.language||s.usedLng,n),c){const u=e.match(this.interpolator.nestingRegexp),p=u&&u.length;h<p&&(n.nest=!1)}!n.lng&&this.options.compatibilityAPI!=="v1"&&s&&s.res&&(n.lng=this.language||s.usedLng),n.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var u=arguments.length,p=new Array(u),f=0;f<u;f++)p[f]=arguments[f];return r&&r[0]===p[0]&&!n.context?(o.logger.warn(`It seems you are nesting recursively key: ${p[0]} in key: ${i[0]}`),null):o.translate(...p,i)},n)),n.interpolation&&this.interpolator.reset()}const a=n.postProcess||this.options.postProcess,l=z(a)?[a]:a;return e!=null&&l&&l.length&&n.applyPostProcessor!==!1&&(e=dc.handle(l,e,i,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...s,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),e}resolve(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n,s,r,o,a;return z(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(n))return;const c=this.extractFromKey(l,i),h=c.key;s=h;let d=c.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const u=i.count!==void 0&&!z(i.count),p=u&&!i.ordinal&&i.count===0&&this.pluralResolver.shouldUseIntlApi(),f=i.context!==void 0&&(z(i.context)||typeof i.context=="number")&&i.context!=="",g=i.lngs?i.lngs:this.languageUtils.toResolveHierarchy(i.lng||this.language,i.fallbackLng);d.forEach(m=>{this.isValidLookup(n)||(a=m,!Uo[`${g[0]}-${m}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&(Uo[`${g[0]}-${m}`]=!0,this.logger.warn(`key "${s}" for languages "${g.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),g.forEach(y=>{if(this.isValidLookup(n))return;o=y;const v=[h];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(v,h,y,m,i);else{let b;u&&(b=this.pluralResolver.getSuffix(y,i.count,i));const x=`${this.options.pluralSeparator}zero`,A=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(u&&(v.push(h+b),i.ordinal&&b.indexOf(A)===0&&v.push(h+b.replace(A,this.options.pluralSeparator)),p&&v.push(h+x)),f){const C=`${h}${this.options.contextSeparator}${i.context}`;v.push(C),u&&(v.push(C+b),i.ordinal&&b.indexOf(A)===0&&v.push(C+b.replace(A,this.options.pluralSeparator)),p&&v.push(C+x))}}let _;for(;_=v.pop();)this.isValidLookup(n)||(r=_,n=this.getResource(y,m,_,i))}))})}),{res:n,usedKey:s,exactUsedKey:r,usedLng:o,usedNS:a}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,i,n){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,i,n,s):this.resourceStore.getResource(e,i,n,s)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const i=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],n=e.replace&&!z(e.replace);let s=n?e.replace:e;if(n&&typeof e.count<"u"&&(s.count=e.count),this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),!n){s={...s};for(const r of i)delete s[r]}return s}static hasDefaultValue(e){const i="defaultValue";for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&i===n.substring(0,i.length)&&e[n]!==void 0)return!0;return!1}}const Bn=t=>t.charAt(0).toUpperCase()+t.slice(1);class Ko{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=ye.create("languageUtils")}getScriptPartFromCode(e){if(e=Zi(e),!e||e.indexOf("-")<0)return null;const i=e.split("-");return i.length===2||(i.pop(),i[i.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(i.join("-"))}getLanguagePartFromCode(e){if(e=Zi(e),!e||e.indexOf("-")<0)return e;const i=e.split("-");return this.formatLanguageCode(i[0])}formatLanguageCode(e){if(z(e)&&e.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let s=Intl.getCanonicalLocales(e)[0];if(s&&this.options.lowerCaseLng&&(s=s.toLowerCase()),s)return s}catch{}const i=["hans","hant","latn","cyrl","cans","mong","arab"];let n=e.split("-");return this.options.lowerCaseLng?n=n.map(s=>s.toLowerCase()):n.length===2?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),i.indexOf(n[1].toLowerCase())>-1&&(n[1]=Bn(n[1].toLowerCase()))):n.length===3&&(n[0]=n[0].toLowerCase(),n[1].length===2&&(n[1]=n[1].toUpperCase()),n[0]!=="sgn"&&n[2].length===2&&(n[2]=n[2].toUpperCase()),i.indexOf(n[1].toLowerCase())>-1&&(n[1]=Bn(n[1].toLowerCase())),i.indexOf(n[2].toLowerCase())>-1&&(n[2]=Bn(n[2].toLowerCase()))),n.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let i;return e.forEach(n=>{if(i)return;const s=this.formatLanguageCode(n);(!this.options.supportedLngs||this.isSupportedCode(s))&&(i=s)}),!i&&this.options.supportedLngs&&e.forEach(n=>{if(i)return;const s=this.getLanguagePartFromCode(n);if(this.isSupportedCode(s))return i=s;i=this.options.supportedLngs.find(r=>{if(r===s)return r;if(!(r.indexOf("-")<0&&s.indexOf("-")<0)&&(r.indexOf("-")>0&&s.indexOf("-")<0&&r.substring(0,r.indexOf("-"))===s||r.indexOf(s)===0&&s.length>1))return r})}),i||(i=this.getFallbackCodes(this.options.fallbackLng)[0]),i}getFallbackCodes(e,i){if(!e)return[];if(typeof e=="function"&&(e=e(i)),z(e)&&(e=[e]),Array.isArray(e))return e;if(!i)return e.default||[];let n=e[i];return n||(n=e[this.getScriptPartFromCode(i)]),n||(n=e[this.formatLanguageCode(i)]),n||(n=e[this.getLanguagePartFromCode(i)]),n||(n=e.default),n||[]}toResolveHierarchy(e,i){const n=this.getFallbackCodes(i||this.options.fallbackLng||[],e),s=[],r=o=>{o&&(this.isSupportedCode(o)?s.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return z(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&r(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&r(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&r(this.getLanguagePartFromCode(e))):z(e)&&r(this.formatLanguageCode(e)),n.forEach(o=>{s.indexOf(o)<0&&r(this.formatLanguageCode(o))}),s}}let cg=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],hg={1:t=>+(t>1),2:t=>+(t!=1),3:t=>0,4:t=>t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,5:t=>t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5,6:t=>t==1?0:t>=2&&t<=4?1:2,7:t=>t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,8:t=>t==1?0:t==2?1:t!=8&&t!=11?2:3,9:t=>+(t>=2),10:t=>t==1?0:t==2?1:t<7?2:t<11?3:4,11:t=>t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3,12:t=>+(t%10!=1||t%100==11),13:t=>+(t!==0),14:t=>t==1?0:t==2?1:t==3?2:3,15:t=>t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2,16:t=>t%10==1&&t%100!=11?0:t!==0?1:2,17:t=>t==1||t%10==1&&t%100!=11?0:1,18:t=>t==0?0:t==1?1:2,19:t=>t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3,20:t=>t==1?0:t==0||t%100>0&&t%100<20?1:2,21:t=>t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0,22:t=>t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3};const dg=["v1","v2","v3"],ug=["v4"],Wo={zero:0,one:1,two:2,few:3,many:4,other:5},pg=()=>{const t={};return cg.forEach(e=>{e.lngs.forEach(i=>{t[i]={numbers:e.nr,plurals:hg[e.fc]}})}),t};class fg{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=i,this.logger=ye.create("pluralResolver"),(!this.options.compatibilityJSON||ug.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=pg(),this.pluralRulesCache={}}addRule(e,i){this.rules[e]=i}clearCache(){this.pluralRulesCache={}}getRule(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const n=Zi(e==="dev"?"en":e),s=i.ordinal?"ordinal":"cardinal",r=JSON.stringify({cleanedCode:n,type:s});if(r in this.pluralRulesCache)return this.pluralRulesCache[r];let o;try{o=new Intl.PluralRules(n,{type:s})}catch{if(!e.match(/-|_/))return;const l=this.languageUtils.getLanguagePartFromCode(e);o=this.getRule(l,i)}return this.pluralRulesCache[r]=o,o}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=this.getRule(e,i);return this.shouldUseIntlApi()?n&&n.resolvedOptions().pluralCategories.length>1:n&&n.numbers.length>1}getPluralFormsOfKey(e,i){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,n).map(s=>`${i}${s}`)}getSuffixes(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=this.getRule(e,i);return n?this.shouldUseIntlApi()?n.resolvedOptions().pluralCategories.sort((s,r)=>Wo[s]-Wo[r]).map(s=>`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${s}`):n.numbers.map(s=>this.getSuffix(e,s,i)):[]}getSuffix(e,i){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const s=this.getRule(e,n);return s?this.shouldUseIntlApi()?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${s.select(i)}`:this.getSuffixRetroCompatible(s,i):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,i){const n=e.noAbs?e.plurals(i):e.plurals(Math.abs(i));let s=e.numbers[n];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(s===2?s="plural":s===1&&(s=""));const r=()=>this.options.prepend&&s.toString()?this.options.prepend+s.toString():s.toString();return this.options.compatibilityJSON==="v1"?s===1?"":typeof s=="number"?`_plural_${s.toString()}`:r():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?r():this.options.prepend&&n.toString()?this.options.prepend+n.toString():n.toString()}shouldUseIntlApi(){return!dg.includes(this.options.compatibilityJSON)}}const qo=function(t,e,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,r=tg(t,e,i);return!r&&s&&z(i)&&(r=ws(t,i,n),r===void 0&&(r=ws(e,i,n))),r},jn=t=>t.replace(/\$/g,"$$$$");class gg{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=ye.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(i=>i),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:i,escapeValue:n,useRawValueToEscape:s,prefix:r,prefixEscaped:o,suffix:a,suffixEscaped:l,formatSeparator:c,unescapeSuffix:h,unescapePrefix:d,nestingPrefix:u,nestingPrefixEscaped:p,nestingSuffix:f,nestingSuffixEscaped:g,nestingOptionsSeparator:m,maxReplaces:y,alwaysFormat:v}=e.interpolation;this.escape=i!==void 0?i:ng,this.escapeValue=n!==void 0?n:!0,this.useRawValueToEscape=s!==void 0?s:!1,this.prefix=r?et(r):o||"{{",this.suffix=a?et(a):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=h?"":d||"-",this.unescapeSuffix=this.unescapePrefix?"":h||"",this.nestingPrefix=u?et(u):p||et("$t("),this.nestingSuffix=f?et(f):g||et(")"),this.nestingOptionsSeparator=m||",",this.maxReplaces=y||1e3,this.alwaysFormat=v!==void 0?v:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(i,n)=>i&&i.source===n?(i.lastIndex=0,i):new RegExp(n,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,i,n,s){let r,o,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=p=>{if(p.indexOf(this.formatSeparator)<0){const y=qo(i,l,p,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(y,void 0,n,{...s,...i,interpolationkey:p}):y}const f=p.split(this.formatSeparator),g=f.shift().trim(),m=f.join(this.formatSeparator).trim();return this.format(qo(i,l,g,this.options.keySeparator,this.options.ignoreJSONStructure),m,n,{...s,...i,interpolationkey:g})};this.resetRegExp();const h=s&&s.missingInterpolationHandler||this.options.missingInterpolationHandler,d=s&&s.interpolation&&s.interpolation.skipOnVariables!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:p=>jn(p)},{regex:this.regexp,safeValue:p=>this.escapeValue?jn(this.escape(p)):jn(p)}].forEach(p=>{for(a=0;r=p.regex.exec(e);){const f=r[1].trim();if(o=c(f),o===void 0)if(typeof h=="function"){const m=h(e,r,s);o=z(m)?m:""}else if(s&&Object.prototype.hasOwnProperty.call(s,f))o="";else if(d){o=r[0];continue}else this.logger.warn(`missed to pass in variable ${f} for interpolating ${e}`),o="";else!z(o)&&!this.useRawValueToEscape&&(o=$o(o));const g=p.safeValue(o);if(e=e.replace(r[0],g),d?(p.regex.lastIndex+=o.length,p.regex.lastIndex-=r[0].length):p.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),e}nest(e,i){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s,r,o;const a=(l,c)=>{const h=this.nestingOptionsSeparator;if(l.indexOf(h)<0)return l;const d=l.split(new RegExp(`${h}[ ]*{`));let u=`{${d[1]}`;l=d[0],u=this.interpolate(u,o);const p=u.match(/'/g),f=u.match(/"/g);(p&&p.length%2===0&&!f||f.length%2!==0)&&(u=u.replace(/'/g,'"'));try{o=JSON.parse(u),c&&(o={...c,...o})}catch(g){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,g),`${l}${h}${u}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,l};for(;s=this.nestingRegexp.exec(e);){let l=[];o={...n},o=o.replace&&!z(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let c=!1;if(s[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(s[1])){const h=s[1].split(this.formatSeparator).map(d=>d.trim());s[1]=h.shift(),l=h,c=!0}if(r=i(a.call(this,s[1].trim(),o),o),r&&s[0]===e&&!z(r))return r;z(r)||(r=$o(r)),r||(this.logger.warn(`missed to resolve ${s[1]} for nesting ${e}`),r=""),c&&(r=l.reduce((h,d)=>this.format(h,d,n.lng,{...n,interpolationkey:s[1].trim()}),r.trim())),e=e.replace(s[0],r),this.regexp.lastIndex=0}return e}}const mg=t=>{let e=t.toLowerCase().trim();const i={};if(t.indexOf("(")>-1){const n=t.split("(");e=n[0].toLowerCase().trim();const s=n[1].substring(0,n[1].length-1);e==="currency"&&s.indexOf(":")<0?i.currency||(i.currency=s.trim()):e==="relativetime"&&s.indexOf(":")<0?i.range||(i.range=s.trim()):s.split(";").forEach(o=>{if(o){const[a,...l]=o.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),h=a.trim();i[h]||(i[h]=c),c==="false"&&(i[h]=!1),c==="true"&&(i[h]=!0),isNaN(c)||(i[h]=parseInt(c,10))}})}return{formatName:e,formatOptions:i}},tt=t=>{const e={};return(i,n,s)=>{let r=s;s&&s.interpolationkey&&s.formatParams&&s.formatParams[s.interpolationkey]&&s[s.interpolationkey]&&(r={...r,[s.interpolationkey]:void 0});const o=n+JSON.stringify(r);let a=e[o];return a||(a=t(Zi(n),s),e[o]=a),a(i)}};class yg{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=ye.create("formatter"),this.options=e,this.formats={number:tt((i,n)=>{const s=new Intl.NumberFormat(i,{...n});return r=>s.format(r)}),currency:tt((i,n)=>{const s=new Intl.NumberFormat(i,{...n,style:"currency"});return r=>s.format(r)}),datetime:tt((i,n)=>{const s=new Intl.DateTimeFormat(i,{...n});return r=>s.format(r)}),relativetime:tt((i,n)=>{const s=new Intl.RelativeTimeFormat(i,{...n});return r=>s.format(r,n.range||"day")}),list:tt((i,n)=>{const s=new Intl.ListFormat(i,{...n});return r=>s.format(r)})},this.init(e)}init(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=i.interpolation.formatSeparator||","}add(e,i){this.formats[e.toLowerCase().trim()]=i}addCached(e,i){this.formats[e.toLowerCase().trim()]=tt(i)}format(e,i,n){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=i.split(this.formatSeparator);if(r.length>1&&r[0].indexOf("(")>1&&r[0].indexOf(")")<0&&r.find(a=>a.indexOf(")")>-1)){const a=r.findIndex(l=>l.indexOf(")")>-1);r[0]=[r[0],...r.splice(1,a)].join(this.formatSeparator)}return r.reduce((a,l)=>{const{formatName:c,formatOptions:h}=mg(l);if(this.formats[c]){let d=a;try{const u=s&&s.formatParams&&s.formatParams[s.interpolationkey]||{},p=u.locale||u.lng||s.locale||s.lng||n;d=this.formats[c](a,p,{...h,...s,...u})}catch(u){this.logger.warn(u)}return d}else this.logger.warn(`there was no format function for ${c}`);return a},e)}}const vg=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};class _g extends wn{constructor(e,i,n){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=i,this.services=n,this.languageUtils=n.languageUtils,this.options=s,this.logger=ye.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=s.maxParallelReads||10,this.readingCalls=0,this.maxRetries=s.maxRetries>=0?s.maxRetries:5,this.retryTimeout=s.retryTimeout>=1?s.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(n,s.backend,s)}queueLoad(e,i,n,s){const r={},o={},a={},l={};return e.forEach(c=>{let h=!0;i.forEach(d=>{const u=`${c}|${d}`;!n.reload&&this.store.hasResourceBundle(c,d)?this.state[u]=2:this.state[u]<0||(this.state[u]===1?o[u]===void 0&&(o[u]=!0):(this.state[u]=1,h=!1,o[u]===void 0&&(o[u]=!0),r[u]===void 0&&(r[u]=!0),l[d]===void 0&&(l[d]=!0)))}),h||(a[c]=!0)}),(Object.keys(r).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:s}),{toLoad:Object.keys(r),pending:Object.keys(o),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(e,i,n){const s=e.split("|"),r=s[0],o=s[1];i&&this.emit("failedLoading",r,o,i),!i&&n&&this.store.addResourceBundle(r,o,n,void 0,void 0,{skipCopy:!0}),this.state[e]=i?-1:2,i&&n&&(this.state[e]=0);const a={};this.queue.forEach(l=>{eg(l.loaded,[r],o),vg(l,e),i&&l.errors.push(i),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{a[c]||(a[c]={});const h=l.loaded[c];h.length&&h.forEach(d=>{a[c][d]===void 0&&(a[c][d]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(e,i,n){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:i,fcName:n,tried:s,wait:r,callback:o});return}this.readingCalls++;const a=(c,h)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(c&&h&&s<this.maxRetries){setTimeout(()=>{this.read.call(this,e,i,n,s+1,r*2,o)},r);return}o(c,h)},l=this.backend[n].bind(this.backend);if(l.length===2){try{const c=l(e,i);c&&typeof c.then=="function"?c.then(h=>a(null,h)).catch(a):a(null,c)}catch(c){a(c)}return}return l(e,i,a)}prepareLoading(e,i){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),s&&s();z(e)&&(e=this.languageUtils.toResolveHierarchy(e)),z(i)&&(i=[i]);const r=this.queueLoad(e,i,n,s);if(!r.toLoad.length)return r.pending.length||s(),null;r.toLoad.forEach(o=>{this.loadOne(o)})}load(e,i,n){this.prepareLoading(e,i,{},n)}reload(e,i,n){this.prepareLoading(e,i,{reload:!0},n)}loadOne(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const n=e.split("|"),s=n[0],r=n[1];this.read(s,r,"read",void 0,void 0,(o,a)=>{o&&this.logger.warn(`${i}loading namespace ${r} for language ${s} failed`,o),!o&&a&&this.logger.log(`${i}loaded namespace ${r} for language ${s}`,a),this.loaded(e,o,a)})}saveMissing(e,i,n,s,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(i)){this.logger.warn(`did not save key "${n}" as the namespace "${i}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(n==null||n==="")){if(this.backend&&this.backend.create){const l={...o,isUpdate:r},c=this.backend.create.bind(this.backend);if(c.length<6)try{let h;c.length===5?h=c(e,i,n,s,l):h=c(e,i,n,s),h&&typeof h.then=="function"?h.then(d=>a(null,d)).catch(a):a(null,h)}catch(h){a(h)}else c(e,i,n,s,a,l)}!e||!e[0]||this.store.addResource(e[0],i,n,s)}}}const Yo=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),z(t[1])&&(e.defaultValue=t[1]),z(t[2])&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const i=t[3]||t[2];Object.keys(i).forEach(n=>{e[n]=i[n]})}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Jo=t=>(z(t.ns)&&(t.ns=[t.ns]),z(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),z(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&t.supportedLngs.indexOf("cimode")<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t),vi=()=>{},bg=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(i=>{typeof t[i]=="function"&&(t[i]=t[i].bind(t))})};class Qt extends wn{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Jo(e),this.services={},this.logger=ye,this.modules={external:[]},bg(this),i&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,i),this;setTimeout(()=>{this.init(e,i)},0)}}init(){var e=this;let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof i=="function"&&(n=i,i={}),!i.defaultNS&&i.defaultNS!==!1&&i.ns&&(z(i.ns)?i.defaultNS=i.ns:i.ns.indexOf("translation")<0&&(i.defaultNS=i.ns[0]));const s=Yo();this.options={...s,...this.options,...Jo(i)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...s.interpolation,...this.options.interpolation}),i.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=i.keySeparator),i.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=i.nsSeparator);const r=h=>h?typeof h=="function"?new h:h:null;if(!this.options.isClone){this.modules.logger?ye.init(r(this.modules.logger),this.options):ye.init(null,this.options);let h;this.modules.formatter?h=this.modules.formatter:typeof Intl<"u"&&(h=yg);const d=new Ko(this.options);this.store=new jo(this.options.resources,this.options);const u=this.services;u.logger=ye,u.resourceStore=this.store,u.languageUtils=d,u.pluralResolver=new fg(d,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),h&&(!this.options.interpolation.format||this.options.interpolation.format===s.interpolation.format)&&(u.formatter=r(h),u.formatter.init(u,this.options),this.options.interpolation.format=u.formatter.format.bind(u.formatter)),u.interpolator=new gg(this.options),u.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},u.backendConnector=new _g(r(this.modules.backend),u.resourceStore,u,this.options),u.backendConnector.on("*",function(p){for(var f=arguments.length,g=new Array(f>1?f-1:0),m=1;m<f;m++)g[m-1]=arguments[m];e.emit(p,...g)}),this.modules.languageDetector&&(u.languageDetector=r(this.modules.languageDetector),u.languageDetector.init&&u.languageDetector.init(u,this.options.detection,this.options)),this.modules.i18nFormat&&(u.i18nFormat=r(this.modules.i18nFormat),u.i18nFormat.init&&u.i18nFormat.init(this)),this.translator=new en(this.services,this.options),this.translator.on("*",function(p){for(var f=arguments.length,g=new Array(f>1?f-1:0),m=1;m<f;m++)g[m-1]=arguments[m];e.emit(p,...g)}),this.modules.external.forEach(p=>{p.init&&p.init(this)})}if(this.format=this.options.interpolation.format,n||(n=vi),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const h=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);h.length>0&&h[0]!=="dev"&&(this.options.lng=h[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(h=>{this[h]=function(){return e.store[h](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(h=>{this[h]=function(){return e.store[h](...arguments),e}});const l=St(),c=()=>{const h=(d,u)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(u),n(d,u)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return h(null,this.t.bind(this));this.changeLanguage(this.options.lng,h)};return this.options.resources||!this.options.initImmediate?c():setTimeout(c,0),l}loadResources(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vi;const s=z(e)?e:this.language;if(typeof e=="function"&&(n=e),!this.options.resources||this.options.partialBundledLanguages){if(s&&s.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return n();const r=[],o=a=>{if(!a||a==="cimode")return;this.services.languageUtils.toResolveHierarchy(a).forEach(c=>{c!=="cimode"&&r.indexOf(c)<0&&r.push(c)})};s?o(s):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>o(l)),this.options.preload&&this.options.preload.forEach(a=>o(a)),this.services.backendConnector.load(r,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),n(a)})}else n(null)}reloadResources(e,i,n){const s=St();return typeof e=="function"&&(n=e,e=void 0),typeof i=="function"&&(n=i,i=void 0),e||(e=this.languages),i||(i=this.options.ns),n||(n=vi),this.services.backendConnector.reload(e,i,r=>{s.resolve(),n(r)}),s}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&dc.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let i=0;i<this.languages.length;i++){const n=this.languages[i];if(!(["cimode","dev"].indexOf(n)>-1)&&this.store.hasLanguageSomeTranslations(n)){this.resolvedLanguage=n;break}}}changeLanguage(e,i){var n=this;this.isLanguageChangingTo=e;const s=St();this.emit("languageChanging",e);const r=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},o=(l,c)=>{c?(r(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,s.resolve(function(){return n.t(...arguments)}),i&&i(l,function(){return n.t(...arguments)})},a=l=>{!e&&!l&&this.services.languageDetector&&(l=[]);const c=z(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);c&&(this.language||r(c),this.translator.language||this.translator.changeLanguage(c),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(c)),this.loadResources(c,h=>{o(h,c)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),s}getFixedT(e,i,n){var s=this;const r=function(o,a){let l;if(typeof a!="object"){for(var c=arguments.length,h=new Array(c>2?c-2:0),d=2;d<c;d++)h[d-2]=arguments[d];l=s.options.overloadTranslationOptionHandler([o,a].concat(h))}else l={...a};l.lng=l.lng||r.lng,l.lngs=l.lngs||r.lngs,l.ns=l.ns||r.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||n||r.keyPrefix);const u=s.options.keySeparator||".";let p;return l.keyPrefix&&Array.isArray(o)?p=o.map(f=>`${l.keyPrefix}${u}${f}`):p=l.keyPrefix?`${l.keyPrefix}${u}${o}`:o,s.t(p,l)};return z(e)?r.lng=e:r.lngs=e,r.ns=i,r.keyPrefix=n,r}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const n=i.lng||this.resolvedLanguage||this.languages[0],s=this.options?this.options.fallbackLng:!1,r=this.languages[this.languages.length-1];if(n.toLowerCase()==="cimode")return!0;const o=(a,l)=>{const c=this.services.backendConnector.state[`${a}|${l}`];return c===-1||c===0||c===2};if(i.precheck){const a=i.precheck(this,o);if(a!==void 0)return a}return!!(this.hasResourceBundle(n,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(n,e)&&(!s||o(r,e)))}loadNamespaces(e,i){const n=St();return this.options.ns?(z(e)&&(e=[e]),e.forEach(s=>{this.options.ns.indexOf(s)<0&&this.options.ns.push(s)}),this.loadResources(s=>{n.resolve(),i&&i(s)}),n):(i&&i(),Promise.resolve())}loadLanguages(e,i){const n=St();z(e)&&(e=[e]);const s=this.options.preload||[],r=e.filter(o=>s.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return r.length?(this.options.preload=s.concat(r),this.loadResources(o=>{n.resolve(),i&&i(o)}),n):(i&&i(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const i=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],n=this.services&&this.services.languageUtils||new Ko(Yo());return i.indexOf(n.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;return new Qt(e,i)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vi;const n=e.forkResourceStore;n&&delete e.forkResourceStore;const s={...this.options,...e,isClone:!0},r=new Qt(s);return(e.debug!==void 0||e.prefix!==void 0)&&(r.logger=r.logger.clone(e)),["store","services","language"].forEach(a=>{r[a]=this[a]}),r.services={...this.services},r.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},n&&(r.store=new jo(this.store.data,s),r.services.resourceStore=r.store),r.translator=new en(r.services,s),r.translator.on("*",function(a){for(var l=arguments.length,c=new Array(l>1?l-1:0),h=1;h<l;h++)c[h-1]=arguments[h];r.emit(a,...c)}),r.init(s,i),r.translator.options=s,r.translator.backendConnector.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},r}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const $=Qt.createInstance();$.createInstance=Qt.createInstance;$.createInstance;$.dir;$.init;$.loadResources;$.reloadResources;$.use;$.changeLanguage;$.getFixedT;$.t;$.exists;$.setDefaultNamespace;$.hasLoadedNamespace;$.loadNamespaces;$.loadLanguages;const Ai=[],xn=()=>{$.isInitialized||$.init({lng:"en",resStore:{en:{}},fallbackLng:!1})},Cn=t=>t.reduce((e,i,n)=>(e.count===void 0&&typeof i=="number"&&(e.count=i),typeof i=="object"?{...e,...i}:(e[n]=i,e)),{}),Xo=function(t){xn();const e=Cn([...arguments].slice(1));return delete e.count,$.t(t,e)},wg=function(t,e){xn();const i=Cn([...arguments].slice(2)),n=i.count;let s;delete i.count;const r=$.services.pluralResolver.getSuffix($.language,n);return r?(i.defaultValue=e,s=t+r):(s=t,i.defaultValue=t),$.t(s,i)},xg=function(t,e){xn();const i=Cn([...arguments].slice(2));return i.context=t,delete i.count,$.t(e,i)},Cg=function(t,e,i){xn();const n=Cn([...arguments].slice(3)),s=n.count,r=t?"_"+t:"";let o=e;delete n.count;const a=$.services.pluralResolver.getSuffix($.language,s);return a?(n.defaultValue=i,o=e+r+a):(o=e,n.context=t),$.t(o,n)},Sg=(t,e,i)=>{$.init({resources:{}}),$.addResourceBundle(t,e,i)},cm=ie(t=>class extends t{static get properties(){return{t:{type:Object,value(){return{}}}}}_filterT(e){return e.filter(i=>i!==this.t)}_(){return Xo.apply(null,this._filterT([...arguments]))}connectedCallback(){super.connectedCallback(),Ai.push(this)}disconnectedCallback(){super.disconnectedCallback();const e=Ai.indexOf(this);e>=0&&Ai.splice(e,1)}gettext(){return Xo.apply(null,this._filterT([...arguments]))}ngettext(){return wg.apply(null,this._filterT([...arguments]))}pgettext(){return xg.apply(null,this._filterT([...arguments]))}npgettext(){return Cg.apply(null,this._filterT([...arguments]))}});class zg extends ei{static get properties(){return{compatibilityJSON:{type:String,value:"v3"},domain:{type:String,value:"messages"},interpolationPrefix:{type:String,value:"__"},interpolationSuffix:{type:String,value:"__"},language:{type:String,value:"en"},namespace:{type:String,value:"translation"},translations:{type:Object,observer(e){e!=null&&(Sg(this.language,this.namespace,e),Ai.forEach(i=>i.set("t",{})))}},keySeparator:{type:String,value:"."},nsSeparator:{type:String,value:":"}}}ready(){super.ready(),$.init({compatibilityJSON:this.compatibilityJSON,interpolation:{escapeValue:!1,prefix:this.interpolationPrefix,suffix:this.interpolationSuffix},keySeparator:this.keySeparator,lng:this.language,nsSeparator:this.nsSeparator,resStore:{}})}}customElements.define("cosmoz-i18next",zg);const uc=["T"," "],Go=t=>{if(!t||typeof t!="string")return;let e;return uc.some(i=>t.match(i)?(e=t.split(i),!0):!1),e||[t]},Eg=(t,e)=>{const i=Go(t),n=Go(e);return{minDate:Array.isArray(i)?i.shift():null,minTime:Array.isArray(i)?i.shift():null,maxDate:Array.isArray(n)?n.shift():null,maxTime:Array.isArray(n)?n.shift():null}},Zo=(t,e)=>{if(!(!t&&!e))return!t&&e?`T${e}`:t&&!e?t:`${t}T${e}`},Lg=t=>{if(t){for(const e of uc)if(t.match(e)){const i=t.split(e);return{date:i.shift(),time:i.shift()}}return{date:t}}},Og=t=>{const{dateLabel:e,timeLabel:i,min:n,max:s,step:r="1",value:o}=t,{minDate:a,maxDate:l,minTime:c,maxTime:h}=j(()=>Eg(n,s),[n,s]),{date:d,time:u}=j(()=>Lg(o)??{},[o]);return D(()=>{t.dispatchEvent(new CustomEvent("cosmoz-datetime-input-value-changed",{bubbles:!0,composed:!0}))},[o]),R`
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
			@value-changed="${p=>Gt(t,"value",Zo(p.target.value,u))}"
			.min="${a}"
			.max="${l}"
		></cosmoz-input>
		<cosmoz-input
			label="${i}"
			type="time"
			.value="${u}"
			@value-changed="${p=>Gt(t,"value",Zo(d,p.target.value))}"
			step="${r}"
			.min="${c}"
			.max="${h}"
		></cosmoz-input>
	`};customElements.define("cosmoz-datetime-input",G(Og,{observedAttributes:["date-label","time-label","min","max","step"]}));const Ag=t=>e=>{const i=e.match(t);return i&&{result:i,url:new URL(e,document.location.origin)}},Mg=(t,e)=>{for(const i of t){const n=i.rule,s=typeof n=="function"?n(e):Ag(n)(e);if(s)return{...i,route:i,match:s,url:e}}},Qo=()=>window.location.href.replace(window.location.origin,""),Pg=()=>{const[t,e]=ve(Qo);return D(()=>{const i=()=>e(Qo);return window.addEventListener("popstate",i),()=>window.removeEventListener("popstate",i)},[e]),t},Tg=t=>{const e=Pg();return j(()=>Mg(t,e),[t,e])},hm=(t,e=null,{notify:i=!0,replace:n=!0}={})=>{(n?history.replaceState:history.pushState).call(history,e,"",t),i&&queueMicrotask(()=>window.dispatchEvent(new CustomEvent("popstate",{bubbles:!1})))},kg=t=>{const e=Tg(t);return{route:e,result:j(()=>{if(e){const{handle:i,...n}=e;return i(n)}},[e])}},_i=(t,e,i)=>t.dispatchEvent(new CustomEvent(e,{bubbles:!1,cancelable:!1,composed:!0,...i})),Hg=(t,e,i)=>{D(()=>{if(!i){_i(t,"route-not-found");return}_i(t,"route-loading",{detail:e}),Promise.resolve(i).then(()=>_i(t,"route-loaded",{detail:e})).catch(n=>_i(t,"route-error",{detail:{route:e,error:n}}))},[i])},Rg=t=>{const e=t.routes,{route:i,result:n}=kg(e);return Hg(t,i,n),$a([n],()=>_s(Promise.resolve(n).catch(()=>Le),Le))};customElements.define("cosmoz-router",G(Rg));const pc=()=>new URL(location.hash.replace(/^#!?/iu,"").replace("%23","#"),location.origin),dm=(t,e=lt)=>{const i=new URLSearchParams(pc().hash.replace("#","")).getAll(t);switch(i.length){case 0:return;case 1:return e(i[0]);default:return i.map(e)}},um=(t,e=lt)=>{const i=Array.from(new URLSearchParams(pc().hash.replace("#","")).entries()).filter(([n])=>n.startsWith(t)).map(([n,s])=>e([n.replace(t,""),s])).filter(([,n])=>n!=null);return Object.fromEntries(i)};var ue=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:void 0;function Ng(t,e){return typeof e>"u"?e={autoBom:!1}:typeof e!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\uFEFF",t],{type:t.type}):t}function Un(t,e,i){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){xs(n.response,e,i)},n.onerror=function(){console.error("could not download file")},n.send()}function ea(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch{}return e.status>=200&&e.status<=299}function bi(t){try{t.dispatchEvent(new MouseEvent("click"))}catch{var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var ta=ue.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),xs=ue.saveAs||(typeof window!="object"||window!==ue?function(){}:"download"in HTMLAnchorElement.prototype&&!ta?function(e,i,n){var s=ue.URL||ue.webkitURL,r=document.createElement("a");i=i||e.name||"download",r.download=i,r.rel="noopener",typeof e=="string"?(r.href=e,r.origin!==location.origin?ea(r.href)?Un(e,i,n):bi(r,r.target="_blank"):bi(r)):(r.href=s.createObjectURL(e),setTimeout(function(){s.revokeObjectURL(r.href)},4e4),setTimeout(function(){bi(r)},0))}:"msSaveOrOpenBlob"in navigator?function(e,i,n){if(i=i||e.name||"download",typeof e=="string")if(ea(e))Un(e,i,n);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout(function(){bi(s)})}else navigator.msSaveOrOpenBlob(Ng(e,n),i)}:function(e,i,n,s){if(s=s||open("","_blank"),s&&(s.document.title=s.document.body.innerText="downloading..."),typeof e=="string")return Un(e,i,n);var r=e.type==="application/octet-stream",o=/constructor/i.test(ue.HTMLElement)||ue.safari,a=/CriOS\/[\d]+/.test(navigator.userAgent);if((a||r&&o||ta)&&typeof FileReader<"u"){var l=new FileReader;l.onloadend=function(){var d=l.result;d=a?d:d.replace(/^data:[^;]*;/,"data:attachment/file;"),s?s.location.href=d:location=d,s=null},l.readAsDataURL(e)}else{var c=ue.URL||ue.webkitURL,h=c.createObjectURL(e);s?s.location=h:location.href=h,s=null,setTimeout(function(){c.revokeObjectURL(h)},4e4)}});ue.saveAs=xs.saveAs=xs;const Mi=function(t){t&&console.log(t)};class fc{constructor(e,i){this._filename=e,this.buffer=null,this.lastDownloadBlobUrl=null,this._mimeType=i}generate(){}createDownloadUrl(){this.buffer||this.generate();const e=new Blob([this.buffer],{type:this._mimeType});return this.lastDownloadBlobUrl&&window.URL.revokeObjectURL(this.lastDownloadBlobUrl),this.lastDownloadBlobUrl=URL.createObjectURL(e),this.lastDownloadBlobUrl}createDownloadLink(e){const i=e instanceof HTMLAnchorElement?e:document.createElement("a");return typeof e=="string"&&(i.innerHTML=e),i.href=this.createDownloadUrl(),i.download=this._filename,i.hasChildNodes||(i.innerText=this._filename),Mi("Link created for file "+this._filename),i}}let wi=null;class Ig extends fc{constructor(e,i){super(e,"application/zip"),this.files=[],this.createFolderEntries=!!i;const n=new Date;this.timeInt=Math.round(n.getSeconds()/2)|n.getMinutes()<<5|n.getHours()<<11,this.dateInt=n.getFullYear()-1980<<9|n.getMonth()+1<<5|n.getDate()}addFileFromString(e,i){const n=new TextEncoder("utf-8").encode(i);return this.addFileFromUint8Array(e,n),this}addFileFromUint8Array(e,i){if(!(i instanceof Uint8Array))throw new Error("invalid parameter");return this.files.push({name:e.replace("\\","/"),data:i}),this}generate(){Mi("NullZip archive generation started");const e={};for(const c of this.files)c.size=c.data?c.data.byteLength:0,c.crc=c.data?this.crc(c.data):0,e[c.name]=c;const i=[];if(this.createFolderEntries){const c=/\//giu;for(const h of this.files){const d=h.name;for(let u=c.exec(d);u!==null;u=c.exec(d)){const p={name:d.substr(0,u.index+1),size:0,crc:0,data:new Uint8Array(0)};typeof e[p.name]>"u"&&(e[p.name]=p,i.push(p))}}}Array.prototype.push.apply(this.files,i),this.files.sort((c,h)=>c.name.length-h.name.length||c.name.localeCompare(h.name));const n=this.files.reduce((c,h)=>c+76+h.name.length*2+h.size,22);Mi("Estimated file size: "+n),this.buffer=new ArrayBuffer(n);const s=new Vg(this.buffer),r=this.hex2u8a("504b0304140000000000");for(const c of this.files)c.offs=s.i,s.writeByteArray(r),s.uint16(this.timeInt),s.uint16(this.dateInt),s.uint32(c.crc),s.uint32(c.size),s.uint32(c.size),s.uint16(c.name.length),s.uint16(0),s.writeASCII(c.name),c.size>0&&s.writeByteArray(c.data);const o=s.i,a=this.hex2u8a("504b01023f00140000000000");for(const c of this.files)s.writeByteArray(a),s.uint16(this.timeInt),s.uint16(this.dateInt),s.uint32(c.crc),s.uint32(c.size),s.uint32(c.size),s.uint16(c.name.length),s.uint16(0),s.uint16(0),s.uint16(0),s.uint16(0),s.uint32(c.size?32:48),s.uint32(c.offs),s.writeASCII(c.name);const l=s.i-o;return s.writeByteArray(this.hex2u8a("504b050600000000")),s.uint16(this.files.length),s.uint16(this.files.length),s.uint32(l),s.uint32(o),s.uint16(0),Mi("Finished creating zip. size="+s.i+", predicted size="+n),this.buffer}crc(e){let i,n,s=-1;if(!wi)for(wi=[],n=0;n<256;i=++n){for(let r=0;r<8;r++)i=i&1?3988292384^i>>>1:i>>>1;wi[n]=i}for(let r=0;r<e.byteLength;r++)s=s>>>8^wi[(s^e[r])&255];return(s^-1)>>>0}hex2u8a(e){const i=new Uint8Array(Math.ceil(e.length/2));for(let n=0;n<i.length;n++)i[n]=parseInt(e.substr(n*2,2),16);return i}}class Vg{constructor(e){this.dw=new DataView(e),this.i=0,this.le=!0,this.utf8encoder=new TextEncoder("utf-8")}uint8(e){this.dw.setUint8(this.i++,e)}uint16(e){this.dw.setUint16(this.i,e,this.le),this.i+=2}uint32(e){this.dw.setUint32(this.i,e,this.le),this.i+=4}writeByteArray(e){if(!(e instanceof Uint8Array))throw new Error("invalid parameter");new Uint8Array(this.dw.buffer).set(e,this.i),this.i+=e.byteLength}writeASCII(e){for(let i=0;i<e.length;i++)this.dw.setUint8(this.i++,e.charCodeAt(i)&255)}}const zt="application/vnd.openxmlformats-officedocument.spreadsheetml",Sn="http://schemas.openxmlformats.org",xi=`${Sn}/spreadsheetml/2006/main`,Kn=`${Sn}/package/2006`,Et=`${Sn}/officeDocument/2006/relationships`,ia=[{id:164,code:"yyyy&quot;-&quot;mm&quot;-&quot;dd"},{id:165,code:"yyyy&quot;-&quot;mm&quot;-&quot;dd&quot; &quot;h&quot;:&quot;mm&quot;:&quot;ss"}];class pm extends fc{constructor(e,i){super(e,`${zt}.sheet`),this.sheets=[],this.frozen=!!(i&&i.frozen),this.autoFilter=!!(i&&i.filter)}addSheetFromData(e,i){const n=this.sheets.length+1;return this.sheets.push({id:n,name:this.escapeXml(i||"Sheet"+n),data:e}),this}generate(){const e=[{name:"xl/styles.xml",xml:`<styleSheet xmlns="${xi}" xmlns:mc="${Sn}/markup-compatibility/2006"><numFmts count="${ia.length}">${ia.map(s=>`<numFmt numFmtId="${s.id}" formatCode="${s.code}" />`)}</numFmts><fonts count="2"><font><sz val="10.0"/><color rgb="FF000000"/><name val="Arial"/></font><font><b/></font></fonts><fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="lightGray"/></fill></fills><borders count="1"><border><left/><right/><top/><bottom/></border></borders><cellStyleXfs count="1"><xf borderId="0" fillId="0" fontId="0" numFmtId="0" applyAlignment="1" applyFont="1"/></cellStyleXfs><cellXfs><xf borderId="0" fillId="0" fontId="0" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment/></xf><xf borderId="0" fillId="0" fontId="1" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment/></xf><xf borderId="0" fillId="0" fontId="0" numFmtId="164" xfId="0" applyAlignment="1" applyFont="1" applyNumberFormat="1"><alignment /></xf><xf borderId="0" fillId="0" fontId="0" numFmtId="165" xfId="0" applyAlignment="1" applyFont="1" applyNumberFormat="1"><alignment /></xf></cellXfs><cellStyles count="1"><cellStyle xfId="0" name="Normal" builtinId="0"/></cellStyles><dxfs count="0"/></styleSheet>`},{name:"xl/sharedStrings.xml",xml:`<sst xmlns="${xi}" count="2" uniqueCount="2"><si><t>text here</t></si></sst>`},{name:"xl/workbook.xml",xml:`<workbook xmlns="${xi}" xmlns:r="${Et}"><workbookPr/><sheets>`+this.sheets.map(s=>`<sheet state="visible" name="${s.name}" sheetId="${s.id}" r:id="rId${s.id+2}"/>`).join("")+"</sheets><definedNames/><calcPr/></workbook>"},{name:"xl/_rels/workbook.xml.rels",xml:`<Relationships xmlns="${Kn}/relationships"><Relationship Id="rId1" Type="${Et}/styles" Target="styles.xml" /><Relationship Id="rId2" Type="${Et}/sharedStrings" Target="sharedStrings.xml"/>`+this.sheets.map(s=>`<Relationship Id="rId${s.id+2}" Type="${Et}/worksheet" Target="worksheets/sheet${s.id}.xml"/>`).join("")+"</Relationships>"},{name:"[Content_Types].xml",xml:`<Types xmlns="${Kn}/content-types"><Default ContentType="application/xml" Extension="xml"/><Default ContentType="application/vnd.openxmlformats-package.relationships+xml" Extension="rels"/>`+this.sheets.map(s=>`<Override ContentType="${zt}.worksheet+xml" PartName="/xl/worksheets/sheet${s.id}.xml"/>`).join("")+`<Override ContentType="${zt}.sharedStrings+xml" PartName="/xl/sharedStrings.xml"/><Override ContentType="${zt}.styles+xml" PartName="/xl/styles.xml" /><Override ContentType="${zt}.sheet.main+xml" PartName="/xl/workbook.xml"/></Types>`},{name:"_rels/.rels",xml:`<Relationships xmlns="${Kn}/relationships"><Relationship Id="rId1" Type="${Et}/officeDocument" Target="xl/workbook.xml"/></Relationships>`}],i=this.sheets.map(s=>{let r=0;const o=s.data.map((a,l)=>{const c=this.frozen&&l===0?' s="1"':"";a.length>r&&(r=a.length);const h=a.map((d,u)=>{const p=this.colName(u)+(l+1);return typeof d=="number"?`<c r="${p}"${c}><v>${d}</v></c>`:d instanceof Date?`<c s="${d.getHours()||d.getMinutes()||d.getSeconds()?3:2}"><v>${this.dateToExcelDate(d)}</v></c>`:`<c t="inlineStr"${c}><is><t>${this.escapeXml(d.toString())}</t></is></c>`});return`<row r="${l+1}">${h.join("")}</row>`});return{name:`xl/worksheets/sheet${s.id}.xml`,xml:`<worksheet xmlns="${xi}"><sheetViews><sheetView workbookViewId="0"`+(this.frozen?' tabSelected="1"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView>':"/>")+`</sheetViews><sheetFormatPr customHeight="1" defaultColWidth="17.5" defaultRowHeight="15.75"/><sheetData>${o.join("")}</sheetData>`+(this.autoFilter?`<autoFilter ref="A1:${this.colName(r)}${s.data.length}"/>`:"")+"</worksheet>"}}),n=new Ig(this._filename,!1);return[...e,...i].forEach(s=>n.addFileFromString(s.name,s.xml)),this.buffer=n.generate(),this.buffer}colName(e){return e<26?String.fromCharCode(e+65):String.fromCharCode(Math.floor(e/26+64))+String.fromCharCode(Math.floor(e%26+65))}escapeXml(e){return e.replace(/[<>&'"]/gu,i=>["&lt;","&gt;","&amp;","&apos;","&quot;"][`<>&'"`.indexOf(i)])}dateToExcelDate(e){return 25569+(e.getTime()-e.getTimezoneOffset()*6e4)/864e5}}const na=(t,e)=>{Object.assign(t.style,{display:e?"":"none"})};class $g extends HTMLElement{static get observedAttributes(){return["opened"]}toggle=ka("height");constructor(){super();const e=new CSSStyleSheet;e.replaceSync(`
      :host { display: block; overflow: hidden; }
		`);const i=this.attachShadow({mode:"open"});i.appendChild(document.createElement("slot")),i.adoptedStyleSheets=[e]}connectedCallback(){na(this,this.getAttribute("opened")!=null)}attributeChangedCallback(e,i,n){switch(e){case"opened":{const s=n!=null;return this.isConnected?this.toggle(this,s):na(this,s)}}}}customElements.define("cosmoz-collapse",$g);export{B as A,hm as B,pc as C,qe as D,hd as E,Ma as F,j as G,qf as H,Ys as I,bc as J,xs as K,S1 as L,ce as M,pm as N,ft as O,ei as P,uu as Q,Za as R,c2 as S,qg as T,Pa as U,Ha as V,Vl as W,Wg as X,n2 as Y,Gt as Z,$a as _,Qn as a,Tt as b,G as c,am as d,dl as e,Zg as f,Z as g,q as h,jg as i,Je as j,l2 as k,Jg as l,Gg as m,_e as n,le as o,tc as p,Yg as q,cm as r,rr as s,mn as t,ve as u,Xg as v,D as w,lt as x,um as y,dm as z};
