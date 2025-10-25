import{f as Kr,B as Qa,x as P,E as mt,T as j,m as Wr,i as Za,p as tl,v as Et,s as Zt,M as Us}from"./iframe-iEL86sss.js";import{_ as el}from"./preload-helper-PPVm8Dsz.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*sl(e,t){if(e!==void 0){let s=0;for(const i of e)yield t(i,s++)}}/**
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
*/let il=/(url\()([^)]*)(\))/g,nl=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,Re,J;function de(e,t){if(e&&nl.test(e)||e==="//")return e;if(Re===void 0){Re=!1;try{const s=new URL("b","http://a");s.pathname="c%20d",Re=s.href==="http://a/c%20d"}catch{}}if(t||(t=document.baseURI||window.location.href),Re)try{return new URL(e,t).href}catch{return e}return J||(J=document.implementation.createHTMLDocument("temp"),J.base=J.createElement("base"),J.head.appendChild(J.base),J.anchor=J.createElement("a"),J.body.appendChild(J.anchor)),J.base.href=t,J.anchor.href=e,J.anchor.href||e}function ki(e,t){return e.replace(il,function(s,i,n,r){return i+"'"+de(n.replace(/["']/g,""),t)+"'"+r})}function Vi(e){return e.substring(0,e.lastIndexOf("/")+1)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Jr=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const rl=Jr&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const e=new CSSStyleSheet;e.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch{return!1}})();let ol=window.Polymer&&window.Polymer.rootPath||Vi(document.baseURI||window.location.href),ss=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,al=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,Yt=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,ll=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,be=window.Polymer&&window.Polymer.legacyOptimizations||!1,Gr=window.Polymer&&window.Polymer.legacyWarnings||!1,cl=window.Polymer&&window.Polymer.syncInitialRender||!1,ai=window.Polymer&&window.Polymer.legacyUndefined||!1,hl=window.Polymer&&window.Polymer.orderedComputed||!1,hn=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Xr=window.Polymer&&window.Polymer.fastDomIf||!1,li=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,Ie=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,dl=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ul=0;const W=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let s=ul++;function i(n){let r=n.__mixinSet;if(r&&r[s])return n;let o=t,a=o.get(n);if(!a){a=e(n),o.set(n,a);let l=Object.create(a.__mixinSet||r||null);l[s]=!0,a.__mixinSet=l}return a}return i};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Ni={},Qr={};function dn(e,t){Ni[e]=Qr[e.toLowerCase()]=t}function un(e){return Ni[e]||Qr[e.toLowerCase()]}function pl(e){e.querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}class we extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,s){if(t){let i=un(t);return i&&s?i.querySelector(s):i}return null}attributeChangedCallback(t,s,i,n){s!==i&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,s=de(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=Vi(s)}return this.__assetpath}register(t){if(t=t||this.id,t){if(Yt&&un(t)!==void 0)throw dn(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,dn(t,this),pl(this)}}}we.prototype.modules=Ni;customElements.define("dom-module",we);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const fl="link[rel=import][type~=css]",ml="include",pn="shady-unscoped";function Ri(e){return we.import(e)}function fn(e){let t=e.body?e.body:e;const s=ki(t.textContent,e.baseURI),i=document.createElement("style");return i.textContent=s,i}function gl(e){const t=e.trim().split(/\s+/),s=[];for(let i=0;i<t.length;i++)s.push(..._l(t[i]));return s}function _l(e){const t=Ri(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(t._styles===void 0){const s=[];s.push(...$i(t));const i=t.querySelector("template");i&&s.push(...Ii(i,t.assetpath)),t._styles=s}return t._styles}function Ii(e,t){if(!e._styles){const s=[],i=e.content.querySelectorAll("style");for(let n=0;n<i.length;n++){let r=i[n],o=r.getAttribute(ml);o&&s.push(...gl(o).filter(function(a,l,c){return c.indexOf(a)===l})),t&&(r.textContent=ki(r.textContent,t)),s.push(r)}e._styles=s}return e._styles}function vl(e){let t=Ri(e);return t?$i(t):[]}function $i(e){const t=[],s=e.querySelectorAll(fl);for(let i=0;i<s.length;i++){let n=s[i];if(n.import){const r=n.import,o=n.hasAttribute(pn);if(o&&!r._unscopedStyle){const a=fn(r);a.setAttribute(pn,""),r._unscopedStyle=a}else r._style||(r._style=fn(r));t.push(o?r._unscopedStyle:r._style)}}return t}function yl(e){let t=e.trim().split(/\s+/),s="";for(let i=0;i<t.length;i++)s+=bl(t[i]);return s}function bl(e){let t=Ri(e);if(t&&t._cssText===void 0){let s=zl(t),i=t.querySelector("template");i&&(s+=wl(i,t.assetpath)),t._cssText=s||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}function wl(e,t){let s="";const i=Ii(e,t);for(let n=0;n<i.length;n++){let r=i[n];r.parentNode&&r.parentNode.removeChild(r),s+=r.textContent}return s}function zl(e){let t="",s=$i(e);for(let i=0;i<s.length;i++)t+=s[i].textContent;return t}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const y=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ci(e){return e.indexOf(".")>=0}function _t(e){let t=e.indexOf(".");return t===-1?e:e.slice(0,t)}function Zr(e,t){return e.indexOf(t+".")===0}function ze(e,t){return t.indexOf(e+".")===0}function xe(e,t,s){return t+s.slice(e.length)}function xl(e,t){return e===t||Zr(e,t)||ze(e,t)}function le(e){if(Array.isArray(e)){let t=[];for(let s=0;s<e.length;s++){let i=e[s].toString().split(".");for(let n=0;n<i.length;n++)t.push(i[n])}return t.join(".")}else return e}function to(e){return Array.isArray(e)?le(e).split("."):e.toString().split(".")}function U(e,t,s){let i=e,n=to(t);for(let r=0;r<n.length;r++){if(!i)return;let o=n[r];i=i[o]}return s&&(s.path=n.join(".")),i}function mn(e,t,s){let i=e,n=to(t),r=n[n.length-1];if(n.length>1){for(let o=0;o<n.length-1;o++){let a=n[o];if(i=i[a],!i)return}i[r]=s}else i[t]=s;return n.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const is={},Cl=/-[a-z]/g,Sl=/([A-Z])/g;function eo(e){return is[e]||(is[e]=e.indexOf("-")<0?e:e.replace(Cl,t=>t[1].toUpperCase()))}function xs(e){return is[e]||(is[e]=e.replace(Sl,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Ml=0,so=0,jt=[],El=0,hi=!1,io=document.createTextNode("");new window.MutationObserver(Ll).observe(io,{characterData:!0});function Ll(){hi=!1;const e=jt.length;for(let t=0;t<e;t++){let s=jt[t];if(s)try{s()}catch(i){setTimeout(()=>{throw i})}}jt.splice(0,e),so+=e}const ue={after(e){return{run(t){return window.setTimeout(t,e)},cancel(t){window.clearTimeout(t)}}},run(e,t){return window.setTimeout(e,t)},cancel(e){window.clearTimeout(e)}},yt={run(e){return hi||(hi=!0,io.textContent=El++),jt.push(e),Ml++},cancel(e){const t=e-so;if(t>=0){if(!jt[t])throw new Error("invalid async handle: "+e);jt[t]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Pl=yt,no=W(e=>{class t extends e{static createProperties(i){const n=this.prototype;for(let r in i)r in n||n._createPropertyAccessor(r)}static attributeNameForProperty(i){return i.toLowerCase()}static typeForProperty(i){}_createPropertyAccessor(i,n){this._addPropertyToAttributeMap(i),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[i]||(this.__dataHasAccessor[i]=!0,this._definePropertyAccessor(i,n))}_addPropertyToAttributeMap(i){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let n=this.__dataAttributes[i];return n||(n=this.constructor.attributeNameForProperty(i),this.__dataAttributes[n]=i),n}_definePropertyAccessor(i,n){Object.defineProperty(this,i,{get(){return this.__data[i]},set:n?function(){}:function(r){this._setPendingProperty(i,r,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let i in this.__dataHasAccessor)this.hasOwnProperty(i)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[i]=this[i],delete this[i])}_initializeInstanceProperties(i){Object.assign(this,i)}_setProperty(i,n){this._setPendingProperty(i,n)&&this._invalidateProperties()}_getProperty(i){return this.__data[i]}_setPendingProperty(i,n,r){let o=this.__data[i],a=this._shouldPropertyChange(i,n,o);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(i in this.__dataOld)&&(this.__dataOld[i]=o),this.__data[i]=n,this.__dataPending[i]=n),a}_isPropertyPending(i){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(i))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Pl.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const i=this.__data,n=this.__dataPending,r=this.__dataOld;this._shouldPropertiesChange(i,n,r)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(i,n,r)),this.__dataCounter--}_shouldPropertiesChange(i,n,r){return!!n}_propertiesChanged(i,n,r){}_shouldPropertyChange(i,n,r){return r!==n&&(r===r||n===n)}attributeChangedCallback(i,n,r,o){n!==r&&this._attributeToProperty(i,r),super.attributeChangedCallback&&super.attributeChangedCallback(i,n,r,o)}_attributeToProperty(i,n,r){if(!this.__serializing){const o=this.__dataAttributes,a=o&&o[i]||i;this[a]=this._deserializeValue(n,r||this.constructor.typeForProperty(a))}}_propertyToAttribute(i,n,r){this.__serializing=!0,r=arguments.length<3?this[i]:r,this._valueToNodeAttribute(this,r,n||this.constructor.attributeNameForProperty(i)),this.__serializing=!1}_valueToNodeAttribute(i,n,r){const o=this._serializeValue(n);(r==="class"||r==="name"||r==="slot")&&(i=y(i)),o===void 0?i.removeAttribute(r):i.setAttribute(r,o===""&&window.trustedTypes?window.trustedTypes.emptyScript:o)}_serializeValue(i){switch(typeof i){case"boolean":return i?"":void 0;default:return i?.toString()}}_deserializeValue(i,n){switch(n){case Boolean:return i!==null;case Number:return Number(i);default:return i}}}return t});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ro={};let $e=HTMLElement.prototype;for(;$e;){let e=Object.getOwnPropertyNames($e);for(let t=0;t<e.length;t++)ro[e[t]]=!0;$e=Object.getPrototypeOf($e)}const Hl=window.trustedTypes?e=>trustedTypes.isHTML(e)||trustedTypes.isScript(e)||trustedTypes.isScriptURL(e):()=>!1;function Tl(e,t){if(!ro[t]){let s=e[t];s!==void 0&&(e.__data?e._setPendingProperty(t,s):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=s))}}const oo=W(e=>{const t=no(e);class s extends t{static createPropertiesForAttributes(){let n=this.observedAttributes;for(let r=0;r<n.length;r++)this.prototype._createPropertyAccessor(eo(n[r]))}static attributeNameForProperty(n){return xs(n)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(n){for(let r in n)this._setProperty(r,n[r])}_ensureAttribute(n,r){const o=this;o.hasAttribute(n)||this._valueToNodeAttribute(o,r,n)}_serializeValue(n){switch(typeof n){case"object":if(n instanceof Date)return n.toString();if(n){if(Hl(n))return n;try{return JSON.stringify(n)}catch{return""}}default:return super._serializeValue(n)}}_deserializeValue(n,r){let o;switch(r){case Object:try{o=JSON.parse(n)}catch{o=n}break;case Array:try{o=JSON.parse(n)}catch{o=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${n}`)}break;case Date:o=isNaN(n)?String(n):Number(n),o=new Date(o);break;default:o=super._deserializeValue(n,r);break}return o}_definePropertyAccessor(n,r){Tl(this,n),super._definePropertyAccessor(n,r)}_hasAccessor(n){return this.__dataHasAccessor&&this.__dataHasAccessor[n]}_isPropertyPending(n){return!!(this.__dataPending&&n in this.__dataPending)}}return s});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ol={"dom-if":!0,"dom-repeat":!0};let gn=!1,_n=!1;function Al(){if(!gn){gn=!0;const e=document.createElement("textarea");e.placeholder="a",_n=e.placeholder===e.textContent}return _n}function kl(e){Al()&&e.localName==="textarea"&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}const Vl=(()=>{const e=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(t,s,i)=>{const n=s.getAttribute(i);if(e&&i.startsWith("on-")){t.setAttribute(i,e.createScript(n,i));return}t.setAttribute(i,n)}})();function Nl(e){let t=e.getAttribute("is");if(t&&Ol[t]){let s=e;for(s.removeAttribute("is"),e=s.ownerDocument.createElement(t),s.parentNode.replaceChild(e,s),e.appendChild(s);s.attributes.length;){const{name:i}=s.attributes[0];Vl(e,s,i),s.removeAttribute(i)}}return e}function ao(e,t){let s=t.parentInfo&&ao(e,t.parentInfo);if(s){for(let i=s.firstChild,n=0;i;i=i.nextSibling)if(t.parentIndex===n++)return i}else return e}function Rl(e,t,s,i){i.id&&(t[i.id]=s)}function Il(e,t,s){if(s.events&&s.events.length)for(let i=0,n=s.events,r;i<n.length&&(r=n[i]);i++)e._addMethodEventListenerToNode(t,r.name,r.value,e)}function $l(e,t,s,i){s.templateInfo&&(t._templateInfo=s.templateInfo,t._parentTemplateInfo=i)}function Dl(e,t,s){return e=e._methodHost||e,function(n){e[s]?e[s](n,n.detail):console.warn("listener method `"+s+"` not defined")}}const Fl=W(e=>{class t extends e{static _parseTemplate(i,n){if(!i._templateInfo){let r=i._templateInfo={};r.nodeInfoList=[],r.nestedTemplate=!!n,r.stripWhiteSpace=n&&n.stripWhiteSpace||i.hasAttribute&&i.hasAttribute("strip-whitespace"),this._parseTemplateContent(i,r,{parent:null})}return i._templateInfo}static _parseTemplateContent(i,n,r){return this._parseTemplateNode(i.content,n,r)}static _parseTemplateNode(i,n,r){let o=!1,a=i;return a.localName=="template"&&!a.hasAttribute("preserve-content")?o=this._parseTemplateNestedTemplate(a,n,r)||o:a.localName==="slot"&&(n.hasInsertionPoint=!0),kl(a),a.firstChild&&this._parseTemplateChildNodes(a,n,r),a.hasAttributes&&a.hasAttributes()&&(o=this._parseTemplateNodeAttributes(a,n,r)||o),o||r.noted}static _parseTemplateChildNodes(i,n,r){if(!(i.localName==="script"||i.localName==="style"))for(let o=i.firstChild,a=0,l;o;o=l){if(o.localName=="template"&&(o=Nl(o)),l=o.nextSibling,o.nodeType===Node.TEXT_NODE){let h=l;for(;h&&h.nodeType===Node.TEXT_NODE;)o.textContent+=h.textContent,l=h.nextSibling,i.removeChild(h),h=l;if(n.stripWhiteSpace&&!o.textContent.trim()){i.removeChild(o);continue}}let c={parentIndex:a,parentInfo:r};this._parseTemplateNode(o,n,c)&&(c.infoIndex=n.nodeInfoList.push(c)-1),o.parentNode&&a++}}static _parseTemplateNestedTemplate(i,n,r){let o=i,a=this._parseTemplate(o,n);return(a.content=o.content.ownerDocument.createDocumentFragment()).appendChild(o.content),r.templateInfo=a,!0}static _parseTemplateNodeAttributes(i,n,r){let o=!1,a=Array.from(i.attributes);for(let l=a.length-1,c;c=a[l];l--)o=this._parseTemplateNodeAttribute(i,n,r,c.name,c.value)||o;return o}static _parseTemplateNodeAttribute(i,n,r,o,a){return o.slice(0,3)==="on-"?(i.removeAttribute(o),r.events=r.events||[],r.events.push({name:o.slice(3),value:a}),!0):o==="id"?(r.id=a,!0):!1}static _contentForTemplate(i){let n=i._templateInfo;return n&&n.content||i.content}_stampTemplate(i,n){i&&!i.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(i),n=n||this.constructor._parseTemplate(i);let r=n.nodeInfoList,o=n.content||i.content,a=document.importNode(o,!0);a.__noInsertionPoint=!n.hasInsertionPoint;let l=a.nodeList=new Array(r.length);a.$={};for(let c=0,h=r.length,d;c<h&&(d=r[c]);c++){let u=l[c]=ao(a,d);Rl(this,a.$,u,d),$l(this,u,d,n),Il(this,u,d)}return a=a,a}_addMethodEventListenerToNode(i,n,r,o){o=o||i;let a=Dl(o,n,r);return this._addEventListenerToNode(i,n,a),a}_addEventListenerToNode(i,n,r){i.addEventListener(n,r)}_removeEventListenerFromNode(i,n,r){i.removeEventListener(n,r)}}return t});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let Ce=0;const Se=[],S={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},lo="__computeInfo",Bl=/[A-Z]/;function qs(e,t,s){let i=e[t];if(!i)i=e[t]={};else if(!e.hasOwnProperty(t)&&(i=e[t]=Object.create(e[t]),s))for(let n in i){let r=i[n],o=i[n]=Array(r.length);for(let a=0;a<r.length;a++)o[a]=r[a]}return i}function ce(e,t,s,i,n,r){if(t){let o=!1;const a=Ce++;for(let l in s){let c=n?_t(l):l,h=t[c];if(h)for(let d=0,u=h.length,p;d<u&&(p=h[d]);d++)(!p.info||p.info.lastRun!==a)&&(!n||Di(l,p.trigger))&&(p.info&&(p.info.lastRun=a),p.fn(e,l,s,i,p.info,n,r),o=!0)}return o}return!1}function jl(e,t,s,i,n,r,o,a){let l=!1,c=o?_t(i):i,h=t[c];if(h)for(let d=0,u=h.length,p;d<u&&(p=h[d]);d++)(!p.info||p.info.lastRun!==s)&&(!o||Di(i,p.trigger))&&(p.info&&(p.info.lastRun=s),p.fn(e,i,n,r,p.info,o,a),l=!0);return l}function Di(e,t){if(t){let s=t.name;return s==e||!!(t.structured&&Zr(s,e))||!!(t.wildcard&&ze(s,e))}else return!0}function vn(e,t,s,i,n){let r=typeof n.method=="string"?e[n.method]:n.method,o=n.property;r?r.call(e,e.__data[o],i[o]):n.dynamicFn||console.warn("observer method `"+n.method+"` not defined")}function Ul(e,t,s,i,n){let r=e[S.NOTIFY],o,a=Ce++;for(let c in t)t[c]&&(r&&jl(e,r,a,c,s,i,n)||n&&ql(e,c,s))&&(o=!0);let l;o&&(l=e.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function ql(e,t,s){let i=_t(t);if(i!==t){let n=xs(i)+"-changed";return co(e,n,s[t],t),!0}return!1}function co(e,t,s,i){let n={value:s,queueProperty:!0};i&&(n.path=i),y(e).dispatchEvent(new CustomEvent(t,{detail:n}))}function Yl(e,t,s,i,n,r){let a=(r?_t(t):t)!=t?t:null,l=a?U(e,a):e.__data[t];a&&l===void 0&&(l=s[t]),co(e,n.eventName,l,a)}function Kl(e,t,s,i,n){let r,o=e.detail,a=o&&o.path;a?(i=xe(s,i,a),r=o&&o.value):r=e.currentTarget[s],r=n?!r:r,(!t[S.READ_ONLY]||!t[S.READ_ONLY][i])&&t._setPendingPropertyOrPath(i,r,!0,!!a)&&(!o||!o.queueProperty)&&t._invalidateProperties()}function Wl(e,t,s,i,n){let r=e.__data[t];ss&&(r=ss(r,n.attrName,"attribute",e)),e._propertyToAttribute(t,n.attrName,r)}function Jl(e,t,s,i){let n=e[S.COMPUTE];if(n)if(hl){Ce++;const r=Xl(e),o=[];for(let l in t)yn(l,n,o,r,i);let a;for(;a=o.shift();)ho(e,"",t,s,a)&&yn(a.methodInfo,n,o,r,i);Object.assign(s,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let r=t;for(;ce(e,n,r,s,i);)Object.assign(s,e.__dataOld),Object.assign(t,e.__dataPending),r=e.__dataPending,e.__dataPending=null}}const Gl=(e,t,s)=>{let i=0,n=t.length-1,r=-1;for(;i<=n;){const o=i+n>>1,a=s.get(t[o].methodInfo)-s.get(e.methodInfo);if(a<0)i=o+1;else if(a>0)n=o-1;else{r=o;break}}r<0&&(r=n+1),t.splice(r,0,e)},yn=(e,t,s,i,n)=>{const r=n?_t(e):e,o=t[r];if(o)for(let a=0;a<o.length;a++){const l=o[a];l.info.lastRun!==Ce&&(!n||Di(e,l.trigger))&&(l.info.lastRun=Ce,Gl(l.info,s,i))}};function Xl(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;const s=e[S.COMPUTE];let{counts:i,ready:n,total:r}=Ql(e),o;for(;o=n.shift();){t.set(o,t.size);const a=s[o];a&&a.forEach(l=>{const c=l.info.methodInfo;--r,--i[c]===0&&n.push(c)})}r!==0&&console.warn(`Computed graph for ${e.localName} incomplete; circular?`),e.constructor.__orderedComputedDeps=t}return t}function Ql(e){const t=e[lo],s={},i=e[S.COMPUTE],n=[];let r=0;for(let o in t){const a=t[o];r+=s[o]=a.args.filter(l=>!l.literal).length+(a.dynamicFn?1:0)}for(let o in i)t[o]||n.push(o);return{counts:s,ready:n,total:r}}function ho(e,t,s,i,n){let r=di(e,t,s,i,n);if(r===Se)return!1;let o=n.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,r,!0):(e[o]=r,!1)}function Zl(e,t,s){let i=e.__dataLinkedPaths;if(i){let n;for(let r in i){let o=i[r];ze(r,t)?(n=xe(r,o,t),e._setPendingPropertyOrPath(n,s,!0,!0)):ze(o,t)&&(n=xe(o,r,t),e._setPendingPropertyOrPath(n,s,!0,!0))}}}function Ys(e,t,s,i,n,r,o){s.bindings=s.bindings||[];let a={kind:i,target:n,parts:r,literal:o,isCompound:r.length!==1};if(s.bindings.push(a),nc(a)){let{event:c,negate:h}=a.parts[0];a.listenerEvent=c||xs(n)+"-changed",a.listenerNegate=h}let l=t.nodeInfoList.length;for(let c=0;c<a.parts.length;c++){let h=a.parts[c];h.compoundIndex=c,tc(e,t,a,h,l)}}function tc(e,t,s,i,n){if(!i.literal)if(s.kind==="attribute"&&s.target[0]==="-")console.warn("Cannot set attribute "+s.target+' because "-" is not a valid attribute starting character');else{let r=i.dependencies,o={index:n,binding:s,part:i,evaluator:e};for(let a=0;a<r.length;a++){let l=r[a];typeof l=="string"&&(l=po(l),l.wildcard=!0),e._addTemplatePropertyEffect(t,l.rootProperty,{fn:ec,info:o,trigger:l})}}}function ec(e,t,s,i,n,r,o){let a=o[n.index],l=n.binding,c=n.part;if(r&&c.source&&t.length>c.source.length&&l.kind=="property"&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let h=s[t];t=xe(c.source,l.target,t),a._setPendingPropertyOrPath(t,h,!1,!0)&&e._enqueueClient(a)}else{let h=n.evaluator._evaluateBinding(e,c,t,s,i,r);h!==Se&&sc(e,a,l,c,h)}}function sc(e,t,s,i,n){if(n=ic(t,n,s,i),ss&&(n=ss(n,s.target,s.kind,t)),s.kind=="attribute")e._valueToNodeAttribute(t,n,s.target);else{let r=s.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[r]?(!t[S.READ_ONLY]||!t[S.READ_ONLY][r])&&t._setPendingProperty(r,n)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,r,n)}}function ic(e,t,s,i){if(s.isCompound){let n=e.__dataCompoundStorage[s.target];n[i.compoundIndex]=t,t=n.join("")}return s.kind!=="attribute"&&(s.target==="textContent"||s.target==="value"&&(e.localName==="input"||e.localName==="textarea"))&&(t=t??""),t}function nc(e){return!!e.target&&e.kind!="attribute"&&e.kind!="text"&&!e.isCompound&&e.parts[0].mode==="{"}function rc(e,t){let{nodeList:s,nodeInfoList:i}=t;if(i.length)for(let n=0;n<i.length;n++){let r=i[n],o=s[n],a=r.bindings;if(a)for(let l=0;l<a.length;l++){let c=a[l];oc(o,c),ac(o,e,c)}o.__dataHost=e}}function oc(e,t){if(t.isCompound){let s=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),i=t.parts,n=new Array(i.length);for(let o=0;o<i.length;o++)n[o]=i[o].literal;let r=t.target;s[r]=n,t.literal&&t.kind=="property"&&(r==="className"&&(e=y(e)),e[r]=t.literal)}}function ac(e,t,s){if(s.listenerEvent){let i=s.parts[0];e.addEventListener(s.listenerEvent,function(n){Kl(n,t,s.target,i.source,i.negate)})}}function bn(e,t,s,i,n,r){r=t.static||r&&(typeof r!="object"||r[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:n,dynamicFn:r};for(let a=0,l;a<t.args.length&&(l=t.args[a]);a++)l.literal||e._addPropertyEffect(l.rootProperty,s,{fn:i,info:o,trigger:l});return r&&e._addPropertyEffect(t.methodName,s,{fn:i,info:o}),o}function di(e,t,s,i,n){let r=e._methodHost||e,o=r[n.methodName];if(o){let a=e._marshalArgs(n.args,t,s);return a===Se?Se:o.apply(r,a)}else n.dynamicFn||console.warn("method `"+n.methodName+"` not defined")}const lc=[],uo="(?:[a-zA-Z_$][\\w.:$\\-*]*)",cc="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",hc="(?:'(?:[^'\\\\]|\\\\.)*')",dc='(?:"(?:[^"\\\\]|\\\\.)*")',uc="(?:"+hc+"|"+dc+")",wn="(?:("+uo+"|"+cc+"|"+uc+")\\s*)",pc="(?:"+wn+"(?:,\\s*"+wn+")*)",fc="(?:\\(\\s*(?:"+pc+"?)\\)\\s*)",mc="("+uo+"\\s*"+fc+"?)",gc="(\\[\\[|{{)\\s*",_c="(?:]]|}})",vc="(?:(!)\\s*)?",yc=gc+vc+mc+_c,zn=new RegExp(yc,"g");function xn(e){let t="";for(let s=0;s<e.length;s++){let i=e[s].literal;t+=i||""}return t}function Ks(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let i={methodName:t[1],static:!0,args:lc};if(t[2].trim()){let n=t[2].replace(/\\,/g,"&comma;").split(",");return bc(n,i)}else return i}return null}function bc(e,t){return t.args=e.map(function(s){let i=po(s);return i.literal||(t.static=!1),i},this),t}function po(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),s={name:t,value:"",literal:!1},i=t[0];switch(i==="-"&&(i=t[1]),i>="0"&&i<="9"&&(i="#"),i){case"'":case'"':s.value=t.slice(1,-1),s.literal=!0;break;case"#":s.value=Number(t),s.literal=!0;break}return s.literal||(s.rootProperty=_t(t),s.structured=ci(t),s.structured&&(s.wildcard=t.slice(-2)==".*",s.wildcard&&(s.name=t.slice(0,-2)))),s}function Cn(e,t,s){let i=U(e,s);return i===void 0&&(i=t[s]),i}function fo(e,t,s,i){const n={indexSplices:i};ai&&!e._overrideLegacyUndefined&&(t.splices=n),e.notifyPath(s+".splices",n),e.notifyPath(s+".length",t.length),ai&&!e._overrideLegacyUndefined&&(n.indexSplices=[])}function te(e,t,s,i,n,r){fo(e,t,s,[{index:i,addedCount:n,removed:r,object:t,type:"splice"}])}function wc(e){return e[0].toUpperCase()+e.substring(1)}const Cs=W(e=>{const t=Fl(oo(e));class s extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return S}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(ee.length){let n=ee[ee.length-1];n._enqueueClient(this),this.__dataHost=n}}_initializeProtoProperties(n){this.__data=Object.create(n),this.__dataPending=Object.create(n),this.__dataOld={}}_initializeInstanceProperties(n){let r=this[S.READ_ONLY];for(let o in n)(!r||!r[o])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[o]=this.__dataPending[o]=n[o])}_addPropertyEffect(n,r,o){this._createPropertyAccessor(n,r==S.READ_ONLY);let a=qs(this,r,!0)[n];a||(a=this[r][n]=[]),a.push(o)}_removePropertyEffect(n,r,o){let a=qs(this,r,!0)[n],l=a.indexOf(o);l>=0&&a.splice(l,1)}_hasPropertyEffect(n,r){let o=this[r];return!!(o&&o[n])}_hasReadOnlyEffect(n){return this._hasPropertyEffect(n,S.READ_ONLY)}_hasNotifyEffect(n){return this._hasPropertyEffect(n,S.NOTIFY)}_hasReflectEffect(n){return this._hasPropertyEffect(n,S.REFLECT)}_hasComputedEffect(n){return this._hasPropertyEffect(n,S.COMPUTE)}_setPendingPropertyOrPath(n,r,o,a){if(a||_t(Array.isArray(n)?n[0]:n)!==n){if(!a){let l=U(this,n);if(n=mn(this,n,r),!n||!super._shouldPropertyChange(n,r,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(n,r,o))return Zl(this,n,r),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[n])return this._setPendingProperty(n,r,o);this[n]=r}return!1}_setUnmanagedPropertyToNode(n,r,o){(o!==n[r]||typeof o=="object")&&(r==="className"&&(n=y(n)),n[r]=o)}_setPendingProperty(n,r,o){let a=this.__dataHasPaths&&ci(n),l=a?this.__dataTemp:this.__data;return this._shouldPropertyChange(n,r,l[n])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),n in this.__dataOld||(this.__dataOld[n]=this.__data[n]),a?this.__dataTemp[n]=r:this.__data[n]=r,this.__dataPending[n]=r,(a||this[S.NOTIFY]&&this[S.NOTIFY][n])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[n]=o),!0):!1}_setProperty(n,r){this._setPendingProperty(n,r,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(n){this.__dataPendingClients=this.__dataPendingClients||[],n!==this&&this.__dataPendingClients.push(n)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let n=this.__dataPendingClients;if(n){this.__dataPendingClients=null;for(let r=0;r<n.length;r++){let o=n[r];o.__dataEnabled?o.__dataPending&&o._flushProperties():o._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(n,r){for(let o in n)(r||!this[S.READ_ONLY]||!this[S.READ_ONLY][o])&&this._setPendingPropertyOrPath(o,n[o],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(n,r,o){let a=this.__dataHasPaths;this.__dataHasPaths=!1;let l;Jl(this,r,o,a),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(r,o,a),this._flushClients(),ce(this,this[S.REFLECT],r,o,a),ce(this,this[S.OBSERVE],r,o,a),l&&Ul(this,l,r,o,a),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(n,r,o){this[S.PROPAGATE]&&ce(this,this[S.PROPAGATE],n,r,o),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,n,r,o)}_runEffectsForTemplate(n,r,o,a){const l=(c,h)=>{ce(this,n.propertyEffects,c,o,h,n.nodeList);for(let d=n.firstChild;d;d=d.nextSibling)this._runEffectsForTemplate(d,c,o,h)};n.runEffects?n.runEffects(l,r,a):l(r,a)}linkPaths(n,r){n=le(n),r=le(r),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[n]=r}unlinkPaths(n){n=le(n),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[n]}notifySplices(n,r){let o={path:""},a=U(this,n,o);fo(this,a,o.path,r)}get(n,r){return U(r||this,n)}set(n,r,o){o?mn(o,n,r):(!this[S.READ_ONLY]||!this[S.READ_ONLY][n])&&this._setPendingPropertyOrPath(n,r,!0)&&this._invalidateProperties()}push(n,...r){let o={path:""},a=U(this,n,o),l=a.length,c=a.push(...r);return r.length&&te(this,a,o.path,l,r.length,[]),c}pop(n){let r={path:""},o=U(this,n,r),a=!!o.length,l=o.pop();return a&&te(this,o,r.path,o.length,0,[l]),l}splice(n,r,o,...a){let l={path:""},c=U(this,n,l);r<0?r=c.length-Math.floor(-r):r&&(r=Math.floor(r));let h;return arguments.length===2?h=c.splice(r):h=c.splice(r,o,...a),(a.length||h.length)&&te(this,c,l.path,r,a.length,h),h}shift(n){let r={path:""},o=U(this,n,r),a=!!o.length,l=o.shift();return a&&te(this,o,r.path,0,0,[l]),l}unshift(n,...r){let o={path:""},a=U(this,n,o),l=a.unshift(...r);return r.length&&te(this,a,o.path,0,r.length,[]),l}notifyPath(n,r){let o;if(arguments.length==1){let a={path:""};r=U(this,n,a),o=a.path}else Array.isArray(n)?o=le(n):o=n;this._setPendingPropertyOrPath(o,r,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(n,r){this._addPropertyEffect(n,S.READ_ONLY),r&&(this["_set"+wc(n)]=function(o){this._setProperty(n,o)})}_createPropertyObserver(n,r,o){let a={property:n,method:r,dynamicFn:!!o};this._addPropertyEffect(n,S.OBSERVE,{fn:vn,info:a,trigger:{name:n}}),o&&this._addPropertyEffect(r,S.OBSERVE,{fn:vn,info:a,trigger:{name:r}})}_createMethodObserver(n,r){let o=Ks(n);if(!o)throw new Error("Malformed observer expression '"+n+"'");bn(this,o,S.OBSERVE,di,null,r)}_createNotifyingProperty(n){this._addPropertyEffect(n,S.NOTIFY,{fn:Yl,info:{eventName:xs(n)+"-changed",property:n}})}_createReflectedProperty(n){let r=this.constructor.attributeNameForProperty(n);r[0]==="-"?console.warn("Property "+n+" cannot be reflected to attribute "+r+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(n,S.REFLECT,{fn:Wl,info:{attrName:r}})}_createComputedProperty(n,r,o){let a=Ks(r);if(!a)throw new Error("Malformed computed expression '"+r+"'");const l=bn(this,a,S.COMPUTE,ho,n,o);qs(this,lo)[n]=l}_marshalArgs(n,r,o){const a=this.__data,l=[];for(let c=0,h=n.length;c<h;c++){let{name:d,structured:u,wildcard:p,value:f,literal:m}=n[c];if(!m)if(p){const g=ze(d,r),_=Cn(a,o,g?r:d);f={path:g?r:d,value:_,base:g?U(a,d):_}}else f=u?Cn(a,o,d):a[d];if(ai&&!this._overrideLegacyUndefined&&f===void 0&&n.length>1)return Se;l[c]=f}return l}static addPropertyEffect(n,r,o){this.prototype._addPropertyEffect(n,r,o)}static createPropertyObserver(n,r,o){this.prototype._createPropertyObserver(n,r,o)}static createMethodObserver(n,r){this.prototype._createMethodObserver(n,r)}static createNotifyingProperty(n){this.prototype._createNotifyingProperty(n)}static createReadOnlyProperty(n,r){this.prototype._createReadOnlyProperty(n,r)}static createReflectedProperty(n){this.prototype._createReflectedProperty(n)}static createComputedProperty(n,r,o){this.prototype._createComputedProperty(n,r,o)}static bindTemplate(n){return this.prototype._bindTemplate(n)}_bindTemplate(n,r){let o=this.constructor._parseTemplate(n),a=this.__preBoundTemplateInfo==o;if(!a)for(let l in o.propertyEffects)this._createPropertyAccessor(l);if(r)if(o=Object.create(o),o.wasPreBound=a,!this.__templateInfo)this.__templateInfo=o;else{const l=n._parentTemplateInfo||this.__templateInfo,c=l.lastChild;o.parent=l,l.lastChild=o,o.previousSibling=c,c?c.nextSibling=o:l.firstChild=o}else this.__preBoundTemplateInfo=o;return o}static _addTemplatePropertyEffect(n,r,o){let a=n.hostProps=n.hostProps||{};a[r]=!0;let l=n.propertyEffects=n.propertyEffects||{};(l[r]=l[r]||[]).push(o)}_stampTemplate(n,r){r=r||this._bindTemplate(n,!0),ee.push(this);let o=super._stampTemplate(n,r);if(ee.pop(),r.nodeList=o.nodeList,!r.wasPreBound){let a=r.childNodes=[];for(let l=o.firstChild;l;l=l.nextSibling)a.push(l)}return o.templateInfo=r,rc(this,r),this.__dataClientsReady&&(this._runEffectsForTemplate(r,this.__data,null,!1),this._flushClients()),o}_removeBoundDom(n){const r=n.templateInfo,{previousSibling:o,nextSibling:a,parent:l}=r;o?o.nextSibling=a:l&&(l.firstChild=a),a?a.previousSibling=o:l&&(l.lastChild=o),r.nextSibling=r.previousSibling=null;let c=r.childNodes;for(let h=0;h<c.length;h++){let d=c[h];y(y(d).parentNode).removeChild(d)}}static _parseTemplateNode(n,r,o){let a=t._parseTemplateNode.call(this,n,r,o);if(n.nodeType===Node.TEXT_NODE){let l=this._parseBindings(n.textContent,r);l&&(n.textContent=xn(l)||" ",Ys(this,r,o,"text","textContent",l),a=!0)}return a}static _parseTemplateNodeAttribute(n,r,o,a,l){let c=this._parseBindings(l,r);if(c){let h=a,d="property";Bl.test(a)?d="attribute":a[a.length-1]=="$"&&(a=a.slice(0,-1),d="attribute");let u=xn(c);return u&&d=="attribute"&&(a=="class"&&n.hasAttribute("class")&&(u+=" "+n.getAttribute(a)),n.setAttribute(a,u)),d=="attribute"&&h=="disable-upgrade$"&&n.setAttribute(a,""),n.localName==="input"&&h==="value"&&n.setAttribute(h,""),n.removeAttribute(h),d==="property"&&(a=eo(a)),Ys(this,r,o,d,a,c,u),!0}else return t._parseTemplateNodeAttribute.call(this,n,r,o,a,l)}static _parseTemplateNestedTemplate(n,r,o){let a=t._parseTemplateNestedTemplate.call(this,n,r,o);const l=n.parentNode,c=o.templateInfo,h=l.localName==="dom-if",d=l.localName==="dom-repeat";hn&&(h||d)&&(l.removeChild(n),o=o.parentInfo,o.templateInfo=c,o.noted=!0,a=!1);let u=c.hostProps;if(Xr&&h)u&&(r.hostProps=Object.assign(r.hostProps||{},u),hn||(o.parentInfo.noted=!0));else{let p="{";for(let f in u){let m=[{mode:p,source:f,dependencies:[f],hostProp:!0}];Ys(this,r,o,"property","_host_"+f,m)}}return a}static _parseBindings(n,r){let o=[],a=0,l;for(;(l=zn.exec(n))!==null;){l.index>a&&o.push({literal:n.slice(a,l.index)});let c=l[1][0],h=!!l[2],d=l[3].trim(),u=!1,p="",f=-1;c=="{"&&(f=d.indexOf("::"))>0&&(p=d.substring(f+2),d=d.substring(0,f),u=!0);let m=Ks(d),g=[];if(m){let{args:_,methodName:v}=m;for(let w=0;w<_.length;w++){let z=_[w];z.literal||g.push(z)}let b=r.dynamicFns;(b&&b[v]||m.static)&&(g.push(v),m.dynamicFn=!0)}else g.push(d);o.push({source:d,mode:c,negate:h,customEvent:u,signature:m,dependencies:g,event:p}),a=zn.lastIndex}if(a&&a<n.length){let c=n.substring(a);c&&o.push({literal:c})}return o.length?o:null}static _evaluateBinding(n,r,o,a,l,c){let h;return r.signature?h=di(n,o,a,l,r.signature):o!=r.source?h=U(n,r.source):c&&ci(o)?h=U(n,o):h=n.__data[o],r.negate&&(h=!h),h}}return s}),ee=[];/**
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
*/function zc(e){const t={};for(let s in e){const i=e[s];t[s]=typeof i=="function"?{type:i}:i}return t}const xc=W(e=>{const t=no(e);function s(r){const o=Object.getPrototypeOf(r);return o.prototype instanceof n?o:null}function i(r){if(!r.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",r))){let o=null;if(r.hasOwnProperty(JSCompiler_renameProperty("properties",r))){const a=r.properties;a&&(o=zc(a))}r.__ownProperties=o}return r.__ownProperties}class n extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const o=this._properties;this.__observedAttributes=o?Object.keys(o).map(a=>this.prototype._addPropertyToAttributeMap(a)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const o=s(this);o&&o.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const o=i(this);o&&this.createProperties(o)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const o=s(this);this.__properties=Object.assign({},o&&o._properties,i(this))}return this.__properties}static typeForProperty(o){const a=this._properties[o];return a&&a.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return n});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const Cc="3.5.2",ui=window.ShadyCSS&&window.ShadyCSS.cssBuild,Ss=W(e=>{const t=xc(Cs(e));function s(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let c=l._properties;for(let h in c){let d=c[h];"value"in d&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[h]=d)}}return l.__propertyDefaults}function i(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function n(l,c,h,d){h.computed&&(h.readOnly=!0),h.computed&&(l._hasReadOnlyEffect(c)?console.warn(`Cannot redefine computed property '${c}'.`):l._createComputedProperty(c,h.computed,d)),h.readOnly&&!l._hasReadOnlyEffect(c)?l._createReadOnlyProperty(c,!h.computed):h.readOnly===!1&&l._hasReadOnlyEffect(c)&&console.warn(`Cannot make readOnly property '${c}' non-readOnly.`),h.reflectToAttribute&&!l._hasReflectEffect(c)?l._createReflectedProperty(c):h.reflectToAttribute===!1&&l._hasReflectEffect(c)&&console.warn(`Cannot make reflected property '${c}' non-reflected.`),h.notify&&!l._hasNotifyEffect(c)?l._createNotifyingProperty(c):h.notify===!1&&l._hasNotifyEffect(c)&&console.warn(`Cannot make notify property '${c}' non-notify.`),h.observer&&l._createPropertyObserver(c,h.observer,d[h.observer]),l._addPropertyToAttributeMap(c)}function r(l,c,h,d){if(!ui){const u=c.content.querySelectorAll("style"),p=Ii(c),f=vl(h),m=c.content.firstElementChild;for(let _=0;_<f.length;_++){let v=f[_];v.textContent=l._processStyleText(v.textContent,d),c.content.insertBefore(v,m)}let g=0;for(let _=0;_<p.length;_++){let v=p[_],b=u[g];b!==v?(v=v.cloneNode(!0),b.parentNode.insertBefore(v,b)):g++,v.textContent=l._processStyleText(v.textContent,d)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(c,h),dl&&ui&&rl){const u=c.content.querySelectorAll("style");if(u){let p="";Array.from(u).forEach(f=>{p+=f.textContent,f.parentNode.removeChild(f)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(p)}}}function o(l){let c=null;if(l&&(!Yt||ll)&&(c=we.import(l,"template"),Yt&&!c))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return c}class a extends t{static get polymerElementVersion(){return Cc}static _finalizeClass(){t._finalizeClass.call(this);const c=i(this);c&&this.createObservers(c,this._properties),this._prepareTemplate()}static _prepareTemplate(){let c=this.template;c&&(typeof c=="string"?(console.error("template getter must return HTMLTemplateElement"),c=null):be||(c=c.cloneNode(!0))),this.prototype._template=c}static createProperties(c){for(let h in c)n(this.prototype,h,c[h],c)}static createObservers(c,h){const d=this.prototype;for(let u=0;u<c.length;u++)d._createMethodObserver(c[u],h)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let c=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof c=="function"&&(c=c()),this._template=c!==void 0?c:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&o(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(c){this._template=c}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const c=this.importMeta;if(c)this._importPath=Vi(c.url);else{const h=we.import(this.is);this._importPath=h&&h.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=ol,this.importPath=this.constructor.importPath;let c=s(this.constructor);if(c)for(let h in c){let d=c[h];if(this._canApplyPropertyDefault(h)){let u=typeof d.value=="function"?d.value.call(this):d.value;this._hasAccessor(h)?this._setPendingProperty(h,u,!0):this[h]=u}}}_canApplyPropertyDefault(c){return!this.hasOwnProperty(c)}static _processStyleText(c,h){return ki(c,h)}static _finalizeTemplate(c){const h=this.prototype._template;if(h&&!h.__polymerFinalized){h.__polymerFinalized=!0;const d=this.importPath,u=d?de(d):"";r(this,h,c,u),this.prototype._bindTemplate(h)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(c){const h=y(this);if(h.attachShadow)return c?(h.shadowRoot||(h.attachShadow({mode:"open",shadyUpgradeFragment:c}),h.shadowRoot.appendChild(c),this.constructor._styleSheet&&(h.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),cl&&window.ShadyDOM&&window.ShadyDOM.flushInitial(h.shadowRoot),h.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(c){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,c)}resolveUrl(c,h){return!h&&this.importPath&&(h=de(this.importPath)),de(c,h)}static _parseTemplateContent(c,h,d){return h.dynamicFns=h.dynamicFns||this._properties,t._parseTemplateContent.call(this,c,h,d)}static _addTemplatePropertyEffect(c,h,d){return Gr&&!(h in this._properties)&&!(d.info.part.signature&&d.info.part.signature.static)&&!d.info.part.hostProp&&!c.nestedTemplate&&console.warn(`Property '${h}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,c,h,d)}}return a});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Sn=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:e=>e});class mo{constructor(t,s){_o(t,s);const i=s.reduce((n,r,o)=>n+go(r)+t[o+1],t[0]);this.value=i.toString()}toString(){return this.value}}function go(e){if(e instanceof mo)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}function Sc(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof mo)return go(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}const Ms=function(t,...s){_o(t,s);const i=document.createElement("template");let n=s.reduce((r,o,a)=>r+Sc(o)+t[a+1],t[0]);return Sn&&(n=Sn.createHTML(n)),i.innerHTML=n,i},_o=(e,t)=>{if(!Array.isArray(e)||!Array.isArray(e.raw)||t.length!==e.length-1)throw new TypeError("Invalid call to the html template tag")};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Es=Ss(HTMLElement);let ns,vo=0;function Mn(e){ns=e}function En(){ns=null,vo=0}function Mc(){return vo++}const Ws=Symbol("haunted.phase"),Ge=Symbol("haunted.hook"),Ln=Symbol("haunted.update"),Pn=Symbol("haunted.commit"),Pt=Symbol("haunted.effects"),pe=Symbol("haunted.layoutEffects"),pi="haunted.context";class Ec{update;host;virtual;[Ge];[Pt];[pe];constructor(t,s){this.update=t,this.host=s,this[Ge]=new Map,this[Pt]=[],this[pe]=[]}run(t){Mn(this);let s=t();return En(),s}_runEffects(t){let s=this[t];Mn(this);for(let i of s)i.call(this);En()}runEffects(){this._runEffects(Pt)}runLayoutEffects(){this._runEffects(pe)}teardown(){this[Ge].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}const Lc=Promise.resolve().then.bind(Promise.resolve());function yo(){let e=[],t;function s(){t=null;let i=e;e=[];for(var n=0,r=i.length;n<r;n++)i[n]()}return function(i){e.push(i),t==null&&(t=Lc(s))}}const Pc=yo(),Hn=yo();class Hc{renderer;host;state;[Ws];_updateQueued;_active;constructor(t,s){this.renderer=t,this.host=s,this.state=new Ec(this.update.bind(this),s),this[Ws]=null,this._updateQueued=!1,this._active=!0}update(){this._active&&(this._updateQueued||(Pc(()=>{let t=this.handlePhase(Ln);Hn(()=>{this.handlePhase(Pn,t),Hn(()=>{this.handlePhase(Pt)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(t,s){switch(this[Ws]=t,t){case Pn:this.commit(s),this.runEffects(pe);return;case Ln:return this.render();case Pt:return this.runEffects(Pt)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(t){this.state._runEffects(t)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const Fi=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},Tc=e=>e?.map(t=>typeof t=="string"?Fi(t):t),Oc=(e,...t)=>e.flatMap((s,i)=>[s,t[i]||""]).join(""),gt=Oc,Ac=(e="")=>e.replace(/-+([a-z])?/g,(t,s)=>s?s.toUpperCase():"");function kc(e){class t extends Hc{frag;renderResult;constructor(n,r,o){super(n,o||r),this.frag=r}commit(n){this.renderResult=e(n,this.frag)}}function s(i,n,r){const o=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:l=!0,shadowRootInit:c={},styleSheets:h}=r||n||{},d=Tc(i.styleSheets||h);class u extends o{_scheduler;static get observedAttributes(){return i.observedAttributes||a||[]}constructor(){if(super(),l===!1)this._scheduler=new t(i,this);else{const g=this.attachShadow({mode:"open",...c});d&&(g.adoptedStyleSheets=d),this._scheduler=new t(i,g,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(g,_,v){if(_===v)return;let b=v===""?!0:v;Reflect.set(this,Ac(g),b)}}function p(m){let g=m,_=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return g},set(v){_&&g===v||(_=!0,g=v,this._scheduler&&this._scheduler.update())}})}const f=new Proxy(o.prototype,{getPrototypeOf(m){return m},set(m,g,_,v){let b;return g in m?(b=Object.getOwnPropertyDescriptor(m,g),b&&b.set?(b.set.call(v,_),!0):(Reflect.set(m,g,_,v),!0)):(typeof g=="symbol"||g[0]==="_"?b={enumerable:!0,configurable:!0,writable:!0,value:_}:b=p(_),Object.defineProperty(v,g,b),b.set&&b.set.call(v,_),!0)}});return Object.setPrototypeOf(u.prototype,f),u}return s}class Ct{id;state;constructor(t,s){this.id=t,this.state=s}}function Vc(e,...t){let s=Mc(),i=ns[Ge],n=i.get(s);return n||(n=new e(s,ns,...t),i.set(s,n)),n.update(...t)}function St(e){return Vc.bind(null,e)}function bo(e){return St(class extends Ct{callback;lastValues;values;_teardown;constructor(t,s,i,n){super(t,s),e(s,this)}update(t,s){this.callback=t,this.values=s}call(){const t=!this.values||this.hasChanged();this.lastValues=this.values,t&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(t){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),t&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((t,s)=>this.lastValues[s]!==t)}})}function wo(e,t){e[Pt].push(t)}const H=bo(wo),Nc=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,zo=St(class extends Ct{Context;value;_ranEffect;_unsubscribe;constructor(e,t,s){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,wo(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const t={Context:e,callback:this._updater};Nc(this.state.host).dispatchEvent(new CustomEvent(pi,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:i=null,value:n}=t;this.value=i?n:e.defaultValue,this._unsubscribe=i}teardown(){this._unsubscribe&&this._unsubscribe()}});function Rc(e){return t=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(pi,this)}disconnectedCallback(){this.removeEventListener(pi,this)}handleEvent(i){const{detail:n}=i;n.Context===s&&(n.value=this.value,n.unsubscribe=this.unsubscribe.bind(this,n.callback),this.listeners.add(n.callback),i.stopPropagation())}unsubscribe(i){this.listeners.delete(i)}set value(i){this._value=i;for(let n of this.listeners)n(i)}get value(){return this._value}},Consumer:e(function({render:i}){const n=zo(s);return i(n)},{useShadowDOM:!1}),defaultValue:t};return s}}const A=St(class extends Ct{value;values;constructor(e,t,s,i){super(e,t),this.value=s(),this.values=i}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((t,s)=>this.values[s]!==t)}}),k=(e,t)=>A(()=>e,t);function Ic(e,t){e[pe].push(t)}const fi=bo(Ic),lt=St(class extends Ct{args;constructor(e,t,s){super(e,t),this.updater=this.updater.bind(this),typeof s=="function"&&(s=s()),this.makeArgs(s)}update(){return this.args}updater(e){const[t]=this.args;typeof e=="function"&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}}),$c=St(class extends Ct{reducer;currentState;constructor(e,t,s,i,n){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=n!==void 0?n(i):i}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}}),Dc=/([A-Z])/gu;St(class extends Ct{property;eventName;constructor(e,t,s,i){if(super(e,t),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=s,this.eventName=s.replace(Dc,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof i=="function"&&(i=i()),i!=null&&this.updateProp(i))}update(e,t){return[this.state.host[this.property],this.updater]}updater(e){const t=this.state.host[this.property];typeof e=="function"&&(e=e(t)),!Object.is(t,e)&&this.updateProp(e)}updateProp(e){this.notify(e).defaultPrevented||(this.state.host[this.property]=e)}notify(e){const t=new CustomEvent(this.eventName,{detail:{value:e,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(t),t}});function xo(e){return A(()=>({current:e}),[])}function Fc({render:e}){const t=kc(e),s=Rc(t);return{component:t,createContext:s}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},dt=e=>(...t)=>({_$litDirective$:e,values:t});let Rt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,i){this._$Ct=t,this._$AM=s,this._$Ci=i}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe=(e,t)=>{const s=e._$AN;if(s===void 0)return!1;for(const i of s)i._$AO?.(t,!1),fe(i,t);return!0},rs=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while(s?.size===0)},Co=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),Uc(t)}};function Bc(e){this._$AN!==void 0?(rs(this),this._$AM=e,Co(this)):this._$AM=e}function jc(e,t=!1,s=0){const i=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(i))for(let r=s;r<i.length;r++)fe(i[r],!1),rs(i[r]);else i!=null&&(fe(i,!1),rs(i));else fe(this,e)}const Uc=e=>{e.type==et.CHILD&&(e._$AP??=jc,e._$AQ??=Bc)};class Ls extends Rt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,i){super._$AT(t,s,i),Co(this),this.isConnected=t._$AU}_$AO(t,s=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),s&&(fe(this,t),rs(this))}setValue(t){if(Kr(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:Y,createContext:qc}=Fc({render:Qa}),Yc={duration:250},So=e=>(t,s,i)=>{const n="max"+e.charAt(0).toUpperCase()+e.slice(1);Object.assign(t.style,{[n]:"",display:""});const{[e]:r}=t.getBoundingClientRect(),o=[0,r],[a,l]=s?o:o.slice().reverse(),c=t.animate([{[n]:`${a}px`},{[n]:`${l}px`}],{...Yc,...i});c.onfinish=()=>Object.assign(t.style,{[n]:"",display:s?"":"none"})};function Kc(e){return()=>e}const Wc=Kc(),Mo=Wc,Kt=e=>e;function pp(e,...t){return typeof e=="function"?e(...t):e}const Eo=qc(()=>Mo);customElements.define("cosmoz-keybinding-provider",Eo.Provider);const Xt=e=>{const t=A(()=>({}),[]);return A(()=>Object.assign(t,e),[t,...Object.values(e)])},Jc=(e,t)=>{const s=zo(Eo),i=Xt(e);H(()=>s(i),t)},Tn=e=>e.matches(":focus-within"),Lo=({disabled:e,onFocus:t})=>{const[s,i]=lt(),{focused:n,closed:r}=s||{},o=n&&!e,a=Xt({closed:r,onFocus:t}),l=k(h=>i(d=>({...d,closed:h})),[]),c=k(h=>{const d=h.currentTarget;return Tn(d)?i(u=>({focused:!0,closed:!u?.closed})):d.focus()},[]);return H(()=>{if(!o)return;const h=d=>{if(d.defaultPrevented)return;const{closed:u}=a;d.key==="Escape"&&!u?(d.preventDefault(),l(!0)):["ArrowUp","Up"].includes(d.key)&&u&&(d.preventDefault(),l(!1))};return document.addEventListener("keydown",h,!0),()=>document.removeEventListener("keydown",h,!0)},[o]),{focused:o,active:o&&!r,setClosed:l,onToggle:c,onFocus:k(h=>{const d=Tn(h.currentTarget);i({focused:d}),a.onFocus?.(d)},[a])}},On=["focusin","focusout"],Gc=e=>{const t=Lo(e),{onFocus:s}=t;return H(()=>(e.setAttribute("tabindex","0"),On.forEach(i=>e.addEventListener(i,s)),()=>{On.forEach(i=>e.removeEventListener(i,s))}),[]),t},Xc=gt`
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
`,Qc=()=>P` <slot></slot> `;customElements.define("cosmoz-dropdown-list",Y(Qc,{styleSheets:[Xc]}));const Zc=({placement:e})=>P` <cosmoz-dropdown
		.placement=${e}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;customElements.define("cosmoz-dropdown-menu",Y(Zc));/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function bt(e,t,s){return e?t(e):s?.(e)}const Js=new WeakMap,Ot=dt(class extends Ls{render(e){return mt}update(e,[t]){const s=t!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),mt}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let s=Js.get(t);s===void 0&&(s=new WeakMap,Js.set(t,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?Js.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Po="important",t1=" !"+Po,Ho=dt(class extends Rt{constructor(e){if(super(e),e.type!==et.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,s)=>{const i=e[s];return i==null?t:t+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(e,[t]){const{style:s}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const i of this.ft)t[i]==null&&(this.ft.delete(i),i.includes("-")?s.removeProperty(i):s[i]=null);for(const i in t){const n=t[i];if(n!=null){this.ft.add(i);const r=typeof n=="string"&&n.endsWith(t1);i.includes("-")||r?s.setProperty(i,r?n.slice(0,-11):n,r?Po:""):s[i]=n}}return j}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e1={},To=dt(class extends Rt{constructor(){super(...arguments),this.ot=e1}render(e,t){return t()}update(e,[t,s]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every(((i,n)=>i===this.ot[n])))return j}else if(this.ot===t)return j;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,s)}}),Oo=(e=HTMLElement)=>class extends e{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},s1=gt`
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
`,i1=()=>P`<div class="wrap" part="wrap"><slot></slot></div>`;customElements.define("cosmoz-dropdown-content",Oo(Y(i1,{styleSheets:[s1]})));const Wt=Math.min,G=Math.max,os=Math.round,De=Math.floor,ct=e=>({x:e,y:e}),n1={left:"right",right:"left",bottom:"top",top:"bottom"},r1={start:"end",end:"start"};function An(e,t,s){return G(e,Wt(t,s))}function Ps(e,t){return typeof e=="function"?e(t):e}function At(e){return e.split("-")[0]}function Hs(e){return e.split("-")[1]}function Ao(e){return e==="x"?"y":"x"}function ko(e){return e==="y"?"height":"width"}const o1=new Set(["top","bottom"]);function vt(e){return o1.has(At(e))?"y":"x"}function Vo(e){return Ao(vt(e))}function a1(e,t,s){s===void 0&&(s=!1);const i=Hs(e),n=Vo(e),r=ko(n);let o=n==="x"?i===(s?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(o=as(o)),[o,as(o)]}function l1(e){const t=as(e);return[mi(e),t,mi(t)]}function mi(e){return e.replace(/start|end/g,t=>r1[t])}const kn=["left","right"],Vn=["right","left"],c1=["top","bottom"],h1=["bottom","top"];function d1(e,t,s){switch(e){case"top":case"bottom":return s?t?Vn:kn:t?kn:Vn;case"left":case"right":return t?c1:h1;default:return[]}}function u1(e,t,s,i){const n=Hs(e);let r=d1(At(e),s==="start",i);return n&&(r=r.map(o=>o+"-"+n),t&&(r=r.concat(r.map(mi)))),r}function as(e){return e.replace(/left|right|bottom|top/g,t=>n1[t])}function p1(e){return{top:0,right:0,bottom:0,left:0,...e}}function f1(e){return typeof e!="number"?p1(e):{top:e,right:e,bottom:e,left:e}}function ls(e){const{x:t,y:s,width:i,height:n}=e;return{width:i,height:n,top:s,left:t,right:t+i,bottom:s+n,x:t,y:s}}function Nn(e,t,s){let{reference:i,floating:n}=e;const r=vt(t),o=Vo(t),a=ko(o),l=At(t),c=r==="y",h=i.x+i.width/2-n.width/2,d=i.y+i.height/2-n.height/2,u=i[a]/2-n[a]/2;let p;switch(l){case"top":p={x:h,y:i.y-n.height};break;case"bottom":p={x:h,y:i.y+i.height};break;case"right":p={x:i.x+i.width,y:d};break;case"left":p={x:i.x-n.width,y:d};break;default:p={x:i.x,y:i.y}}switch(Hs(t)){case"start":p[o]-=u*(s&&c?-1:1);break;case"end":p[o]+=u*(s&&c?-1:1);break}return p}const m1=async(e,t,s)=>{const{placement:i="bottom",strategy:n="absolute",middleware:r=[],platform:o}=s,a=r.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(t));let c=await o.getElementRects({reference:e,floating:t,strategy:n}),{x:h,y:d}=Nn(c,i,l),u=i,p={},f=0;for(let m=0;m<a.length;m++){const{name:g,fn:_}=a[m],{x:v,y:b,data:w,reset:z}=await _({x:h,y:d,initialPlacement:i,placement:u,strategy:n,middlewareData:p,rects:c,platform:o,elements:{reference:e,floating:t}});h=v??h,d=b??d,p={...p,[g]:{...p[g],...w}},z&&f<=50&&(f++,typeof z=="object"&&(z.placement&&(u=z.placement),z.rects&&(c=z.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:n}):z.rects),{x:h,y:d}=Nn(c,u,l)),m=-1)}return{x:h,y:d,placement:u,strategy:n,middlewareData:p}};async function Bi(e,t){var s;t===void 0&&(t={});const{x:i,y:n,platform:r,rects:o,elements:a,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:u=!1,padding:p=0}=Ps(t,e),f=f1(p),g=a[u?d==="floating"?"reference":"floating":d],_=ls(await r.getClippingRect({element:(s=await(r.isElement==null?void 0:r.isElement(g)))==null||s?g:g.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:c,rootBoundary:h,strategy:l})),v=d==="floating"?{x:i,y:n,width:o.floating.width,height:o.floating.height}:o.reference,b=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),w=await(r.isElement==null?void 0:r.isElement(b))?await(r.getScale==null?void 0:r.getScale(b))||{x:1,y:1}:{x:1,y:1},z=ls(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:v,offsetParent:b,strategy:l}):v);return{top:(_.top-z.top+f.top)/w.y,bottom:(z.bottom-_.bottom+f.bottom)/w.y,left:(_.left-z.left+f.left)/w.x,right:(z.right-_.right+f.right)/w.x}}const g1=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var s,i;const{placement:n,middlewareData:r,rects:o,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:u,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:m=!0,...g}=Ps(e,t);if((s=r.arrow)!=null&&s.alignmentOffset)return{};const _=At(n),v=vt(a),b=At(a)===a,w=await(l.isRTL==null?void 0:l.isRTL(c.floating)),z=u||(b||!m?[as(a)]:l1(a)),T=f!=="none";!u&&T&&z.push(...u1(a,m,f,w));const C=[a,...z],R=await Bi(t,g),V=[];let $=((i=r.flip)==null?void 0:i.overflows)||[];if(h&&V.push(R[_]),d){const N=a1(n,o,w);V.push(R[N[0]],R[N[1]])}if($=[...$,{placement:n,overflows:V}],!V.every(N=>N<=0)){var D,rt;const N=(((D=r.flip)==null?void 0:D.index)||0)+1,F=C[N];if(F&&(!(d==="alignment"?v!==vt(F):!1)||$.every(L=>vt(L.placement)===v?L.overflows[0]>0:!0)))return{data:{index:N,overflows:$},reset:{placement:F}};let Z=(rt=$.filter(O=>O.overflows[0]<=0).sort((O,L)=>O.overflows[1]-L.overflows[1])[0])==null?void 0:rt.placement;if(!Z)switch(p){case"bestFit":{var K;const O=(K=$.filter(L=>{if(T){const I=vt(L.placement);return I===v||I==="y"}return!0}).map(L=>[L.placement,L.overflows.filter(I=>I>0).reduce((I,pt)=>I+pt,0)]).sort((L,I)=>L[1]-I[1])[0])==null?void 0:K[0];O&&(Z=O);break}case"initialPlacement":Z=a;break}if(n!==Z)return{reset:{placement:Z}}}return{}}}},_1=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:s,y:i,placement:n}=t,{mainAxis:r=!0,crossAxis:o=!1,limiter:a={fn:g=>{let{x:_,y:v}=g;return{x:_,y:v}}},...l}=Ps(e,t),c={x:s,y:i},h=await Bi(t,l),d=vt(At(n)),u=Ao(d);let p=c[u],f=c[d];if(r){const g=u==="y"?"top":"left",_=u==="y"?"bottom":"right",v=p+h[g],b=p-h[_];p=An(v,p,b)}if(o){const g=d==="y"?"top":"left",_=d==="y"?"bottom":"right",v=f+h[g],b=f-h[_];f=An(v,f,b)}const m=a.fn({...t,[u]:p,[d]:f});return{...m,data:{x:m.x-s,y:m.y-i,enabled:{[u]:r,[d]:o}}}}}},v1=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var s,i;const{placement:n,rects:r,platform:o,elements:a}=t,{apply:l=()=>{},...c}=Ps(e,t),h=await Bi(t,c),d=At(n),u=Hs(n),p=vt(n)==="y",{width:f,height:m}=r.floating;let g,_;d==="top"||d==="bottom"?(g=d,_=u===(await(o.isRTL==null?void 0:o.isRTL(a.floating))?"start":"end")?"left":"right"):(_=d,g=u==="end"?"top":"bottom");const v=m-h.top-h.bottom,b=f-h.left-h.right,w=Wt(m-h[g],v),z=Wt(f-h[_],b),T=!t.middlewareData.shift;let C=w,R=z;if((s=t.middlewareData.shift)!=null&&s.enabled.x&&(R=b),(i=t.middlewareData.shift)!=null&&i.enabled.y&&(C=v),T&&!u){const $=G(h.left,0),D=G(h.right,0),rt=G(h.top,0),K=G(h.bottom,0);p?R=f-2*($!==0||D!==0?$+D:G(h.left,h.right)):C=m-2*(rt!==0||K!==0?rt+K:G(h.top,h.bottom))}await l({...t,availableWidth:R,availableHeight:C});const V=await o.getDimensions(a.floating);return f!==V.width||m!==V.height?{reset:{rects:!0}}:{}}}};function Ts(){return typeof window<"u"}function Qt(e){return No(e)?(e.nodeName||"").toLowerCase():"#document"}function Q(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function ut(e){var t;return(t=(No(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function No(e){return Ts()?e instanceof Node||e instanceof Q(e).Node:!1}function it(e){return Ts()?e instanceof Element||e instanceof Q(e).Element:!1}function ht(e){return Ts()?e instanceof HTMLElement||e instanceof Q(e).HTMLElement:!1}function Rn(e){return!Ts()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Q(e).ShadowRoot}const y1=new Set(["inline","contents"]);function Te(e){const{overflow:t,overflowX:s,overflowY:i,display:n}=nt(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+s)&&!y1.has(n)}const b1=new Set(["table","td","th"]);function w1(e){return b1.has(Qt(e))}const z1=[":popover-open",":modal"];function Os(e){return z1.some(t=>{try{return e.matches(t)}catch{return!1}})}const x1=["transform","translate","scale","rotate","perspective"],C1=["transform","translate","scale","rotate","perspective","filter"],S1=["paint","layout","strict","content"];function ji(e){const t=Ui(),s=it(e)?nt(e):e;return x1.some(i=>s[i]?s[i]!=="none":!1)||(s.containerType?s.containerType!=="normal":!1)||!t&&(s.backdropFilter?s.backdropFilter!=="none":!1)||!t&&(s.filter?s.filter!=="none":!1)||C1.some(i=>(s.willChange||"").includes(i))||S1.some(i=>(s.contain||"").includes(i))}function M1(e){let t=zt(e);for(;ht(t)&&!Jt(t);){if(ji(t))return t;if(Os(t))return null;t=zt(t)}return null}function Ui(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const E1=new Set(["html","body","#document"]);function Jt(e){return E1.has(Qt(e))}function nt(e){return Q(e).getComputedStyle(e)}function As(e){return it(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function zt(e){if(Qt(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Rn(e)&&e.host||ut(e);return Rn(t)?t.host:t}function Ro(e){const t=zt(e);return Jt(t)?e.ownerDocument?e.ownerDocument.body:e.body:ht(t)&&Te(t)?t:Ro(t)}function Me(e,t,s){var i;t===void 0&&(t=[]),s===void 0&&(s=!0);const n=Ro(e),r=n===((i=e.ownerDocument)==null?void 0:i.body),o=Q(n);if(r){const a=gi(o);return t.concat(o,o.visualViewport||[],Te(n)?n:[],a&&s?Me(a):[])}return t.concat(n,Me(n,[],s))}function gi(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Io(e){const t=nt(e);let s=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const n=ht(e),r=n?e.offsetWidth:s,o=n?e.offsetHeight:i,a=os(s)!==r||os(i)!==o;return a&&(s=r,i=o),{width:s,height:i,$:a}}function qi(e){return it(e)?e:e.contextElement}function Ut(e){const t=qi(e);if(!ht(t))return ct(1);const s=t.getBoundingClientRect(),{width:i,height:n,$:r}=Io(t);let o=(r?os(s.width):s.width)/i,a=(r?os(s.height):s.height)/n;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const L1=ct(0);function $o(e){const t=Q(e);return!Ui()||!t.visualViewport?L1:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function P1(e,t,s){return t===void 0&&(t=!1),!s||t&&s!==Q(e)?!1:t}function kt(e,t,s,i){t===void 0&&(t=!1),s===void 0&&(s=!1);const n=e.getBoundingClientRect(),r=qi(e);let o=ct(1);t&&(i?it(i)&&(o=Ut(i)):o=Ut(e));const a=P1(r,s,i)?$o(r):ct(0);let l=(n.left+a.x)/o.x,c=(n.top+a.y)/o.y,h=n.width/o.x,d=n.height/o.y;if(r){const u=Q(r),p=i&&it(i)?Q(i):i;let f=u,m=gi(f);for(;m&&i&&p!==f;){const g=Ut(m),_=m.getBoundingClientRect(),v=nt(m),b=_.left+(m.clientLeft+parseFloat(v.paddingLeft))*g.x,w=_.top+(m.clientTop+parseFloat(v.paddingTop))*g.y;l*=g.x,c*=g.y,h*=g.x,d*=g.y,l+=b,c+=w,f=Q(m),m=gi(f)}}return ls({width:h,height:d,x:l,y:c})}function ks(e,t){const s=As(e).scrollLeft;return t?t.left+s:kt(ut(e)).left+s}function Do(e,t){const s=e.getBoundingClientRect(),i=s.left+t.scrollLeft-ks(e,s),n=s.top+t.scrollTop;return{x:i,y:n}}function H1(e){let{elements:t,rect:s,offsetParent:i,strategy:n}=e;const r=n==="fixed",o=ut(i),a=t?Os(t.floating):!1;if(i===o||a&&r)return s;let l={scrollLeft:0,scrollTop:0},c=ct(1);const h=ct(0),d=ht(i);if((d||!d&&!r)&&((Qt(i)!=="body"||Te(o))&&(l=As(i)),ht(i))){const p=kt(i);c=Ut(i),h.x=p.x+i.clientLeft,h.y=p.y+i.clientTop}const u=o&&!d&&!r?Do(o,l):ct(0);return{width:s.width*c.x,height:s.height*c.y,x:s.x*c.x-l.scrollLeft*c.x+h.x+u.x,y:s.y*c.y-l.scrollTop*c.y+h.y+u.y}}function T1(e){return Array.from(e.getClientRects())}function O1(e){const t=ut(e),s=As(e),i=e.ownerDocument.body,n=G(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),r=G(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let o=-s.scrollLeft+ks(e);const a=-s.scrollTop;return nt(i).direction==="rtl"&&(o+=G(t.clientWidth,i.clientWidth)-n),{width:n,height:r,x:o,y:a}}const In=25;function A1(e,t){const s=Q(e),i=ut(e),n=s.visualViewport;let r=i.clientWidth,o=i.clientHeight,a=0,l=0;if(n){r=n.width,o=n.height;const h=Ui();(!h||h&&t==="fixed")&&(a=n.offsetLeft,l=n.offsetTop)}const c=ks(i);if(c<=0){const h=i.ownerDocument,d=h.body,u=getComputedStyle(d),p=h.compatMode==="CSS1Compat"&&parseFloat(u.marginLeft)+parseFloat(u.marginRight)||0,f=Math.abs(i.clientWidth-d.clientWidth-p);f<=In&&(r-=f)}else c<=In&&(r+=c);return{width:r,height:o,x:a,y:l}}const k1=new Set(["absolute","fixed"]);function V1(e,t){const s=kt(e,!0,t==="fixed"),i=s.top+e.clientTop,n=s.left+e.clientLeft,r=ht(e)?Ut(e):ct(1),o=e.clientWidth*r.x,a=e.clientHeight*r.y,l=n*r.x,c=i*r.y;return{width:o,height:a,x:l,y:c}}function $n(e,t,s){let i;if(t==="viewport")i=A1(e,s);else if(t==="document")i=O1(ut(e));else if(it(t))i=V1(t,s);else{const n=$o(e);i={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return ls(i)}function Fo(e,t){const s=zt(e);return s===t||!it(s)||Jt(s)?!1:nt(s).position==="fixed"||Fo(s,t)}function N1(e,t){const s=t.get(e);if(s)return s;let i=Me(e,[],!1).filter(a=>it(a)&&Qt(a)!=="body"),n=null;const r=nt(e).position==="fixed";let o=r?zt(e):e;for(;it(o)&&!Jt(o);){const a=nt(o),l=ji(o);!l&&a.position==="fixed"&&(n=null),(r?!l&&!n:!l&&a.position==="static"&&!!n&&k1.has(n.position)||Te(o)&&!l&&Fo(e,o))?i=i.filter(h=>h!==o):n=a,o=zt(o)}return t.set(e,i),i}function R1(e){let{element:t,boundary:s,rootBoundary:i,strategy:n}=e;const o=[...s==="clippingAncestors"?Os(t)?[]:N1(t,this._c):[].concat(s),i],a=o[0],l=o.reduce((c,h)=>{const d=$n(t,h,n);return c.top=G(d.top,c.top),c.right=Wt(d.right,c.right),c.bottom=Wt(d.bottom,c.bottom),c.left=G(d.left,c.left),c},$n(t,a,n));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function I1(e){const{width:t,height:s}=Io(e);return{width:t,height:s}}function $1(e,t,s){const i=ht(t),n=ut(t),r=s==="fixed",o=kt(e,!0,r,t);let a={scrollLeft:0,scrollTop:0};const l=ct(0);function c(){l.x=ks(n)}if(i||!i&&!r)if((Qt(t)!=="body"||Te(n))&&(a=As(t)),i){const p=kt(t,!0,r,t);l.x=p.x+t.clientLeft,l.y=p.y+t.clientTop}else n&&c();r&&!i&&n&&c();const h=n&&!i&&!r?Do(n,a):ct(0),d=o.left+a.scrollLeft-l.x-h.x,u=o.top+a.scrollTop-l.y-h.y;return{x:d,y:u,width:o.width,height:o.height}}function Gs(e){return nt(e).position==="static"}function Dn(e,t){if(!ht(e)||nt(e).position==="fixed")return null;if(t)return t(e);let s=e.offsetParent;return ut(e)===s&&(s=s.ownerDocument.body),s}function Bo(e,t){const s=Q(e);if(Os(e))return s;if(!ht(e)){let n=zt(e);for(;n&&!Jt(n);){if(it(n)&&!Gs(n))return n;n=zt(n)}return s}let i=Dn(e,t);for(;i&&w1(i)&&Gs(i);)i=Dn(i,t);return i&&Jt(i)&&Gs(i)&&!ji(i)?s:i||M1(e)||s}const D1=async function(e){const t=this.getOffsetParent||Bo,s=this.getDimensions,i=await s(e.floating);return{reference:$1(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function F1(e){return nt(e).direction==="rtl"}const B1={convertOffsetParentRelativeRectToViewportRelativeRect:H1,getDocumentElement:ut,getClippingRect:R1,getOffsetParent:Bo,getElementRects:D1,getClientRects:T1,getDimensions:I1,getScale:Ut,isElement:it,isRTL:F1};function jo(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function j1(e,t){let s=null,i;const n=ut(e);function r(){var a;clearTimeout(i),(a=s)==null||a.disconnect(),s=null}function o(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),r();const c=e.getBoundingClientRect(),{left:h,top:d,width:u,height:p}=c;if(a||t(),!u||!p)return;const f=De(d),m=De(n.clientWidth-(h+u)),g=De(n.clientHeight-(d+p)),_=De(h),b={rootMargin:-f+"px "+-m+"px "+-g+"px "+-_+"px",threshold:G(0,Wt(1,l))||1};let w=!0;function z(T){const C=T[0].intersectionRatio;if(C!==l){if(!w)return o();C?o(!1,C):i=setTimeout(()=>{o(!1,1e-7)},1e3)}C===1&&!jo(c,e.getBoundingClientRect())&&o(),w=!1}try{s=new IntersectionObserver(z,{...b,root:n.ownerDocument})}catch{s=new IntersectionObserver(z,b)}s.observe(e)}return o(!0),r}function U1(e,t,s,i){i===void 0&&(i={});const{ancestorScroll:n=!0,ancestorResize:r=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,c=qi(e),h=n||r?[...c?Me(c):[],...Me(t)]:[];h.forEach(_=>{n&&_.addEventListener("scroll",s,{passive:!0}),r&&_.addEventListener("resize",s)});const d=c&&a?j1(c,s):null;let u=-1,p=null;o&&(p=new ResizeObserver(_=>{let[v]=_;v&&v.target===c&&p&&(p.unobserve(t),cancelAnimationFrame(u),u=requestAnimationFrame(()=>{var b;(b=p)==null||b.observe(t)})),s()}),c&&!l&&p.observe(c),p.observe(t));let f,m=l?kt(e):null;l&&g();function g(){const _=kt(e);m&&!jo(m,_)&&s(),m=_,f=requestAnimationFrame(g)}return s(),()=>{var _;h.forEach(v=>{n&&v.removeEventListener("scroll",s),r&&v.removeEventListener("resize",s)}),d?.(),(_=p)==null||_.disconnect(),p=null,l&&cancelAnimationFrame(f)}}const q1=_1,Y1=g1,K1=v1,W1=(e,t,s)=>{const i=new Map,n={platform:B1,...s},r={...n.platform,_c:i};return m1(e,t,{...n,platform:r})},Uo=[Y1({fallbackAxisSideDirection:"start",crossAxis:!1}),q1()],qo=({placement:e="bottom-start",strategy:t,middleware:s=Uo}={})=>{const[i,n]=lt(),[r,o]=lt(),[a,l]=lt();return H(()=>{if(!i||!(r instanceof HTMLElement)){l(void 0);return}return U1(i,r,()=>W1(i,r,{placement:e,strategy:t,middleware:s}).then(l))},[i,r,e,t,s]),{setReference:n,setFloating:o,styles:A(()=>a?{left:`${a.x}px`,top:`${a.y}px`}:{},[a?.x,a?.y])}},J1=e=>e.preventDefault(),G1=gt`
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
`,X1=e=>{const{placement:t,strategy:s,middleware:i,render:n}=e,{active:r,onToggle:o}=Gc(e),{styles:a,setReference:l,setFloating:c}=qo({placement:t,strategy:s,middleware:i});return P` <div class="anchor" part="anchor" ${Ot(l)}>
			<button
				@mousedown=${J1}
				@click=${o}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		${bt(r,()=>P`<cosmoz-dropdown-content
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					style="${Ho(a)}"
					@connected=${h=>h.target.showPopover?.()}
					${Ot(c)}
					><slot></slot>${To([n],()=>n?.()||mt)}</cosmoz-dropdown-content
				> `)}`};customElements.define("cosmoz-dropdown",Y(X1,{styleSheets:[G1]}));function Q1(e){return e.boundingClientRect.height===0}function Z1(e){return e.getBoundingClientRect().height===0}const th=e=>{if(e.element.tagName!=="SLOT")throw new Error("Overflow directive must be used on a slot element")};function eh(e,t){e.forEach(s=>{Z1(s)||(t.add(s),e.delete(s))})}const sh=(e,t)=>{let s=new Set,i=new Set,n=new Set;const r=new IntersectionObserver(a=>{a.forEach(l=>{const c=l.target;l.boundingClientRect.width===l.intersectionRect.width&&l.intersectionRect.height!==0?(s.add(c),i.delete(c),n.delete(c)):Q1(l)?(s.delete(c),i.delete(c),n.add(c)):(s.delete(c),i.add(c),n.delete(c))}),eh(n,i),t({visible:s,overflowing:i,hidden:n})},{root:e.parentElement,threshold:[0,.5,1]}),o=()=>{const a=Array.from(e.assignedElements({flatten:!0})),l=new Set,c=new Set,h=new Set;for(const d of a)s.has(d)?l.add(d):i.has(d)?c.add(d):n.has(d)?h.add(d):r.observe(d);s=l,i=c,n=h,t({visible:s,overflowing:i,hidden:n})};return o(),e.addEventListener("slotchange",o),()=>{e.removeEventListener("slotchange",o),r.disconnect()}};class ih extends Ls{observer;slot;cleanup;render(){return j}update(t,[s]){return th(t),this.slot!==t.element&&(this.cleanup&&(this.cleanup(),this.cleanup=void 0),this.slot=t.element,this.cleanup=sh(this.slot,s)),j}}const nh=dt(ih),rh=gt`
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
`,oh=Symbol("openMenu"),ah=e=>{const t=e.shadowRoot?.querySelector("#dropdown");if(!t||t.hasAttribute("hidden"))return;t.shadowRoot?.querySelector("cosmoz-dropdown")?.shadowRoot?.querySelector("#dropdownButton")?.click()},lh=e=>{const[t,s]=lt({visible:new Set,overflowing:new Set});H(()=>{e.dispatchEvent(new CustomEvent("reflow",{detail:t}))},[t]);const i=A(()=>[...t.visible,...t.overflowing],[t]),n=A(()=>i.map(l=>({element:l,priority:Number(l.dataset.priority??0),text:l.textContent?.trim()||""})).toSorted((l,c)=>c.priority-l.priority),[i]),{maxToolbarItems:r=1}=e,o=Math.min(r,t.visible.size);H(()=>{n.forEach(({element:l,priority:c},h)=>{const d=h<o;l.dataset.visibility=d?"visible":"hidden",l.style.order=String(-c)})},[n,o]);const a=A(()=>n.slice(o).sort((l,c)=>c.element.compareDocumentPosition(l.element)-l.element.compareDocumentPosition(c.element)),[n,o]);return H(()=>{e.toggleAttribute("has-menu-items",a.length>0)},[a.length]),{setButtonStates:s,menuButtons:a}},ch=e=>{const{active:t=!1}=e;Jc({activity:oh,callback:()=>ah(e),check:()=>t&&!e.hasAttribute("hide-actions"),element:()=>e.shadowRoot?.querySelector("#dropdown")},[t]);const{setButtonStates:s,menuButtons:i}=lh(e),n=A(()=>So("height"),[]);return fi(()=>{n(e,t)},[t]),P` <div id="bar" part="bar">
		<div id="info" part="info"><slot name="info"></slot></div>
		<div id="buttonContainer" part="buttons">
			<slot id="bottomBarToolbar" ${nh(s)}></slot>
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
			${sl(i,r=>P`
					<button @click=${()=>r.element.click()}>
						${r.text}
					</button>
				`)}
		</cosmoz-dropdown-menu>
		<slot name="extra" id="extraSlot"></slot>
	</div>`};customElements.define("cosmoz-bottom-bar",Y(ch,{observedAttributes:["active","max-toolbar-items"],styleSheets:[rh]}));const cs=`
	<slot name="extra" slot="extra"></slot>
`;P(Object.assign([cs],{raw:[cs]}));Ms(Object.assign([cs],{raw:[cs]}));/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Vs=!(window.ShadyDOM&&window.ShadyDOM.inUse);let hs;function Fn(e){e&&e.shimcssproperties?hs=!1:hs=Vs||!!(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)"))}let Ee;window.ShadyCSS&&window.ShadyCSS.cssBuild!==void 0&&(Ee=window.ShadyCSS.cssBuild);const Yo=!!(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&window.ShadyCSS.nativeCss!==void 0?hs=window.ShadyCSS.nativeCss:window.ShadyCSS?(Fn(window.ShadyCSS),window.ShadyCSS=void 0):Fn(window.WebComponents&&window.WebComponents.flags);const Yi=hs;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class Bn{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function Ko(e){return e=hh(e),Wo(dh(e),e)}function hh(e){return e.replace(ft.comments,"").replace(ft.port,"")}function dh(e){let t=new Bn;t.start=0,t.end=e.length;let s=t;for(let i=0,n=e.length;i<n;i++)if(e[i]===Go){s.rules||(s.rules=[]);let r=s,o=r.rules[r.rules.length-1]||null;s=new Bn,s.start=i+1,s.parent=r,s.previous=o,r.rules.push(s)}else e[i]===Xo&&(s.end=i+1,s=s.parent||t);return t}function Wo(e,t){let s=t.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=s.trim(),e.parent){let n=e.previous?e.previous.end:e.parent.start;s=t.substring(n,e.start-1),s=uh(s),s=s.replace(ft.multipleSpaces," "),s=s.substring(s.lastIndexOf(";")+1);let r=e.parsedSelector=e.selector=s.trim();e.atRule=r.indexOf(vh)===0,e.atRule?r.indexOf(_h)===0?e.type=Bt.MEDIA_RULE:r.match(ft.keyframesRule)&&(e.type=Bt.KEYFRAMES_RULE,e.keyframesName=e.selector.split(ft.multipleSpaces).pop()):r.indexOf(Qo)===0?e.type=Bt.MIXIN_RULE:e.type=Bt.STYLE_RULE}let i=e.rules;if(i)for(let n=0,r=i.length,o;n<r&&(o=i[n]);n++)Wo(o,t);return e}function uh(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let t=arguments[1],s=6-t.length;for(;s--;)t="0"+t;return"\\"+t})}function Jo(e,t,s=""){let i="";if(e.cssText||e.rules){let n=e.rules;if(n&&!ph(n))for(let r=0,o=n.length,a;r<o&&(a=n[r]);r++)i=Jo(a,t,i);else i=t?e.cssText:fh(e.cssText),i=i.trim(),i&&(i="  "+i+`
`)}return i&&(e.selector&&(s+=e.selector+" "+Go+`
`),s+=i,e.selector&&(s+=Xo+`

`)),s}function ph(e){let t=e[0];return!!t&&!!t.selector&&t.selector.indexOf(Qo)===0}function fh(e){return e=mh(e),gh(e)}function mh(e){return e.replace(ft.customProp,"").replace(ft.mixinProp,"")}function gh(e){return e.replace(ft.mixinApply,"").replace(ft.varApply,"")}const Bt={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},Go="{",Xo="}",ft={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},Qo="--",_h="@media",vh="@";/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const _i=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,ds=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const jn=new Set,yh="shady-unscoped";function bh(e){const t=e.textContent;if(!jn.has(t)){jn.add(t);const s=document.createElement("style");s.setAttribute("shady-unscoped",""),s.textContent=t,document.head.appendChild(s)}}function wh(e){return e.hasAttribute(yh)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function vi(e,t){return e?(typeof e=="string"&&(e=Ko(e)),Jo(e,Yi)):""}function Un(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=Ko(e.textContent)),e.__cssRules||null}function Xe(e,t,s,i){if(!e)return;let n=!1,r=e.type;r===Bt.STYLE_RULE?t(e):r===Bt.MIXIN_RULE&&(n=!0);let o=e.rules;if(o&&!n)for(let a=0,l=o.length,c;a<l&&(c=o[a]);a++)Xe(c,t)}function zh(e,t){let s=0;for(let i=t,n=e.length;i<n;i++)if(e[i]==="(")s++;else if(e[i]===")"&&--s===0)return i;return-1}function Zo(e,t){let s=e.indexOf("var(");if(s===-1)return t(e,"","","");let i=zh(e,s+3),n=e.substring(s+4,i),r=e.substring(0,s),o=Zo(e.substring(i+1),t),a=n.indexOf(",");if(a===-1)return t(r,n.trim(),"",o);let l=n.substring(0,a).trim(),c=n.substring(a+1).trim();return t(r,l,c,o)}window.ShadyDOM&&window.ShadyDOM.wrap;function xh(e){let t=e.localName,s="",i="";return t?t.indexOf("-")>-1?s=t:(i=t,s=e.getAttribute&&e.getAttribute("is")||""):(s=e.is,i=e.extends),{is:s,typeExtension:i}}function Ch(e){const t=[],s=e.querySelectorAll("style");for(let i=0;i<s.length;i++){const n=s[i];wh(n)?Vs||(bh(n),n.parentNode.removeChild(n)):(t.push(n.textContent),n.parentNode.removeChild(n))}return t.join("").trim()}const ta="css-build";function Sh(e){if(Ee!==void 0)return Ee;if(e.__cssBuild===void 0){const t=e.getAttribute(ta);if(t)e.__cssBuild=t;else{const s=Mh(e);s!==""&&Eh(e),e.__cssBuild=s}}return e.__cssBuild||""}function qn(e){return Sh(e)!==""}function Mh(e){const t=e.localName==="template"?e.content.firstChild:e.firstChild;if(t instanceof Comment){const s=t.textContent.trim().split(":");if(s[0]===ta)return s[1]}return""}function Eh(e){const t=e.localName==="template"?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function yi(e,t){for(let s in t)s===null?e.style.removeProperty(s):e.style.setProperty(s,t[s])}function ea(e,t){const s=window.getComputedStyle(e).getPropertyValue(t);return s?s.trim():""}function Lh(e){const t=ds.test(e)||_i.test(e);return ds.lastIndex=0,_i.lastIndex=0,t}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ph=/;\s*/m,Hh=/^\s*(initial)|(inherit)\s*$/,Yn=/\s*!important/,bi="_-_";class Th{constructor(){this._map={}}set(t,s){t=t.trim(),this._map[t]={properties:s,dependants:{}}}get(t){return t=t.trim(),this._map[t]||null}}let us=null;class q{constructor(){this._currentElement=null,this._measureElement=null,this._map=new Th}detectMixin(t){return Lh(t)}gatherStyles(t){const s=Ch(t.content);if(s){const i=document.createElement("style");return i.textContent=s,t.content.insertBefore(i,t.content.firstChild),i}return null}transformTemplate(t,s){t._gatheredStyle===void 0&&(t._gatheredStyle=this.gatherStyles(t));const i=t._gatheredStyle;return i?this.transformStyle(i,s):null}transformStyle(t,s=""){let i=Un(t);return this.transformRules(i,s),t.textContent=vi(i),i}transformCustomStyle(t){let s=Un(t);return Xe(s,i=>{i.selector===":root"&&(i.selector="html"),this.transformRule(i)}),t.textContent=vi(s),s}transformRules(t,s){this._currentElement=s,Xe(t,i=>{this.transformRule(i)}),this._currentElement=null}transformRule(t){t.cssText=this.transformCssText(t.parsedCssText,t),t.selector===":root"&&(t.selector=":host > *")}transformCssText(t,s){return t=t.replace(_i,(i,n,r,o)=>this._produceCssProperties(i,n,r,o,s)),this._consumeCssProperties(t,s)}_getInitialValueForProperty(t){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(t)}_fallbacksFromPreviousRules(t){let s=t;for(;s.parent;)s=s.parent;const i={};let n=!1;return Xe(s,r=>{n=n||r===t,!n&&r.selector===t.selector&&Object.assign(i,this._cssTextToMap(r.parsedCssText))}),i}_consumeCssProperties(t,s){let i=null;for(;i=ds.exec(t);){let n=i[0],r=i[1],o=i.index,a=o+n.indexOf("@apply"),l=o+n.length,c=t.slice(0,a),h=t.slice(l),d=s?this._fallbacksFromPreviousRules(s):{};Object.assign(d,this._cssTextToMap(c));let u=this._atApplyToCssProperties(r,d);t=`${c}${u}${h}`,ds.lastIndex=o+u.length}return t}_atApplyToCssProperties(t,s){t=t.replace(Ph,"");let i=[],n=this._map.get(t);if(n||(this._map.set(t,{}),n=this._map.get(t)),n){this._currentElement&&(n.dependants[this._currentElement]=!0);let r,o,a;const l=n.properties;for(r in l)a=s&&s[r],o=[r,": var(",t,bi,r],a&&o.push(",",a.replace(Yn,"")),o.push(")"),Yn.test(l[r])&&o.push(" !important"),i.push(o.join(""))}return i.join("; ")}_replaceInitialOrInherit(t,s){let i=Hh.exec(s);return i&&(i[1]?s=this._getInitialValueForProperty(t):s="apply-shim-inherit"),s}_cssTextToMap(t,s=!1){let i=t.split(";"),n,r,o={};for(let a=0,l,c;a<i.length;a++)l=i[a],l&&(c=l.split(":"),c.length>1&&(n=c[0].trim(),r=c.slice(1).join(":"),s&&(r=this._replaceInitialOrInherit(n,r)),o[n]=r));return o}_invalidateMixinEntry(t){if(us)for(let s in t.dependants)s!==this._currentElement&&us(s)}_produceCssProperties(t,s,i,n,r){if(i&&Zo(i,(g,_)=>{_&&this._map.get(_)&&(n=`@apply ${_};`)}),!n)return t;let o=this._consumeCssProperties(""+n,r),a=t.slice(0,t.indexOf("--")),l=this._cssTextToMap(o,!0),c=l,h=this._map.get(s),d=h&&h.properties;d?c=Object.assign(Object.create(d),l):this._map.set(s,c);let u=[],p,f,m=!1;for(p in c)f=l[p],f===void 0&&(f="initial"),d&&!(p in d)&&(m=!0),u.push(`${s}${bi}${p}: ${f}`);return m&&this._invalidateMixinEntry(h),h&&(h.properties=c),i&&(a=`${t};${a}`),`${a}${u.join("; ")};`}}q.prototype.detectMixin=q.prototype.detectMixin;q.prototype.transformStyle=q.prototype.transformStyle;q.prototype.transformCustomStyle=q.prototype.transformCustomStyle;q.prototype.transformRules=q.prototype.transformRules;q.prototype.transformRule=q.prototype.transformRule;q.prototype.transformTemplate=q.prototype.transformTemplate;q.prototype._separator=bi;Object.defineProperty(q.prototype,"invalidCallback",{get(){return us},set(e){us=e}});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const wi={};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ps="_applyShimCurrentVersion",Gt="_applyShimNextVersion",fs="_applyShimValidatingVersion",Oh=Promise.resolve();function Ah(e){let t=wi[e];t&&kh(t)}function kh(e){e[ps]=e[ps]||0,e[fs]=e[fs]||0,e[Gt]=(e[Gt]||0)+1}function sa(e){return e[ps]===e[Gt]}function Vh(e){return!sa(e)&&e[fs]===e[Gt]}function Nh(e){e[fs]=e[Gt],e._validating||(e._validating=!0,Oh.then(function(){e[ps]=e[Gt],e._validating=!1}))}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Xs=null,Kn=window.HTMLImports&&window.HTMLImports.whenReady||null,Qs;function Wn(e){requestAnimationFrame(function(){Kn?Kn(e):(Xs||(Xs=new Promise(t=>{Qs=t}),document.readyState==="complete"?Qs():document.addEventListener("readystatechange",()=>{document.readyState==="complete"&&Qs()})),Xs.then(function(){e&&e()}))})}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Jn="__seenByShadyCSS",Fe="__shadyCSSCachedStyle";let ms=null,me=null,xt=class{constructor(){this.customStyles=[],this.enqueued=!1,Wn(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){this.enqueued||!me||(this.enqueued=!0,Wn(me))}addCustomStyle(t){t[Jn]||(t[Jn]=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[Fe])return t[Fe];let s;return t.getStyle?s=t.getStyle():s=t,s}processStyles(){const t=this.customStyles;for(let s=0;s<t.length;s++){const i=t[s];if(i[Fe])continue;const n=this.getStyleForCustomStyle(i);if(n){const r=n.__appliedElement||n;ms&&ms(r),i[Fe]=r}}return t}};xt.prototype.addCustomStyle=xt.prototype.addCustomStyle;xt.prototype.getStyleForCustomStyle=xt.prototype.getStyleForCustomStyle;xt.prototype.processStyles=xt.prototype.processStyles;Object.defineProperties(xt.prototype,{transformCallback:{get(){return ms},set(e){ms=e}},validateCallback:{get(){return me},set(e){let t=!1;me||(t=!0),me=e,t&&this.enqueueDocumentValidation()}}});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const he=new q;class Rh{constructor(){this.customStyleInterface=null,he.invalidCallback=Ah}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=t=>{he.transformCustomStyle(t)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(t,s){if(this.ensure(),qn(t))return;wi[s]=t;let i=he.transformTemplate(t,s);t._styleAst=i}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let t=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let s=0;s<t.length;s++){let i=t[s],n=this.customStyleInterface.getStyleForCustomStyle(i);n&&he.transformCustomStyle(n)}this.customStyleInterface.enqueued=!1}}styleSubtree(t,s){if(this.ensure(),s&&yi(t,s),t.shadowRoot){this.styleElement(t);let i=t.shadowRoot.children||t.shadowRoot.childNodes;for(let n=0;n<i.length;n++)this.styleSubtree(i[n])}else{let i=t.children||t.childNodes;for(let n=0;n<i.length;n++)this.styleSubtree(i[n])}}styleElement(t){this.ensure();let{is:s}=xh(t),i=wi[s];if(!(i&&qn(i))&&i&&!sa(i)){Vh(i)||(this.prepareTemplate(i,s),Nh(i));let n=t.shadowRoot;if(n){let r=n.querySelector("style");r&&(r.__cssRules=i._styleAst,r.textContent=vi(i._styleAst))}}}styleDocument(t){this.ensure(),this.styleSubtree(document.body,t)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new Rh;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(s,i,n){e.flushCustomStyles(),e.prepareTemplate(s,i)},prepareTemplateStyles(s,i,n){window.ShadyCSS.prepareTemplate(s,i,n)},prepareTemplateDom(s,i){},styleSubtree(s,i){e.flushCustomStyles(),e.styleSubtree(s,i)},styleElement(s){e.flushCustomStyles(),e.styleElement(s)},styleDocument(s){e.flushCustomStyles(),e.styleDocument(s)},getComputedStyleValue(s,i){return ea(s,i)},flushCustomStyles(){e.flushCustomStyles()},nativeCss:Yi,nativeShadow:Vs,cssBuild:Ee,disableRuntime:Yo},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=he;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class Vt{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,s){this._asyncModule=t,this._callback=s,this._timer=this._asyncModule.run(()=>{this._timer=null,Le.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Le.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(t,s,i){return t instanceof Vt?t._cancelAsync():t=new Vt,t.setConfig(s,i),t}}let Le=new Set;const ia=function(e){Le.add(e)},Ih=function(){const e=!!Le.size;return Le.forEach(t=>{try{t.flush()}catch(s){setTimeout(()=>{throw s})}}),e};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Ki=typeof document.head.style.touchAction=="string",gs="__polymerGestures",Qe="__polymerGesturesHandled",zi="__polymerGesturesTouchAction",Gn=25,Xn=5,$h=2,Dh=2500,na=["mousedown","mousemove","mouseup","click"],Fh=[0,1,4,2],Bh=(function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}})();function Wi(e){return na.indexOf(e)>-1}let Ji=!1;(function(){try{let e=Object.defineProperty({},"passive",{get(){Ji=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch{}})();function ra(e){if(!(Wi(e)||e==="touchend")&&Ki&&Ji&&al)return{passive:!0}}let oa=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const xi=[],jh={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},Uh={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function qh(e){return jh[e.localName]||!1}function Yh(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];try{let s=e.getRootNode();if(e.id){let i=s.querySelectorAll(`label[for = '${e.id}']`);for(let n=0;n<i.length;n++)t.push(i[n])}}catch{}}return t}let Qn=function(e){let t=e.sourceCapabilities;if(!(t&&!t.firesTouchEvents)&&(e[Qe]={skip:!0},e.type==="click")){let s=!1,i=Ns(e);for(let n=0;n<i.length;n++){if(i[n].nodeType===Node.ELEMENT_NODE){if(i[n].localName==="label")xi.push(i[n]);else if(qh(i[n])){let r=Yh(i[n]);for(let o=0;o<r.length;o++)s=s||xi.indexOf(r[o])>-1}}if(i[n]===B.mouse.target)return}if(s)return;e.preventDefault(),e.stopPropagation()}};function Zn(e){let t=oa?["click"]:na;for(let s=0,i;s<t.length;s++)i=t[s],e?(xi.length=0,document.addEventListener(i,Qn,!0)):document.removeEventListener(i,Qn,!0)}function Kh(e){B.mouse.mouseIgnoreJob||Zn(!0);let t=function(){Zn(),B.mouse.target=null,B.mouse.mouseIgnoreJob=null};B.mouse.target=Ns(e)[0],B.mouse.mouseIgnoreJob=Vt.debounce(B.mouse.mouseIgnoreJob,ue.after(Dh),t)}function Ht(e){let t=e.type;if(!Wi(t))return!1;if(t==="mousemove"){let s=e.buttons===void 0?1:e.buttons;return e instanceof window.MouseEvent&&!Bh&&(s=Fh[e.which]||0),!!(s&1)}else return(e.button===void 0?0:e.button)===0}function Wh(e){if(e.type==="click"){if(e.detail===0)return!0;let t=wt(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let s=t.getBoundingClientRect(),i=e.pageX,n=e.pageY;return!(i>=s.left&&i<=s.right&&n>=s.top&&n<=s.bottom)}return!1}let B={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Jh(e){let t="auto",s=Ns(e);for(let i=0,n;i<s.length;i++)if(n=s[i],n[zi]){t=n[zi];break}return t}function aa(e,t,s){e.movefn=t,e.upfn=s,document.addEventListener("mousemove",t),document.addEventListener("mouseup",s)}function qt(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}document.addEventListener("touchend",Kh,Ji?{passive:!0}:!1);const Ns=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],Oe={},Lt=[];function Gh(e,t){let s=document.elementFromPoint(e,t),i=s;for(;i&&i.shadowRoot&&!window.ShadyDOM;){let n=i;if(i=i.shadowRoot.elementFromPoint(e,t),n===i)break;i&&(s=i)}return s}function wt(e){const t=Ns(e);return t.length>0?t[0]:e.target}function la(e){let t,s=e.type,n=e.currentTarget[gs];if(!n)return;let r=n[s];if(r){if(!e[Qe]&&(e[Qe]={},s.slice(0,5)==="touch")){e=e;let o=e.changedTouches[0];if(s==="touchstart"&&e.touches.length===1&&(B.touch.id=o.identifier),B.touch.id!==o.identifier)return;Ki||(s==="touchstart"||s==="touchmove")&&Xh(e)}if(t=e[Qe],!t.skip){for(let o=0,a;o<Lt.length;o++)a=Lt[o],r[a.name]&&!t[a.name]&&a.flow&&a.flow.start.indexOf(e.type)>-1&&a.reset&&a.reset();for(let o=0,a;o<Lt.length;o++)a=Lt[o],r[a.name]&&!t[a.name]&&(t[a.name]=!0,a[s](e))}}}function Xh(e){let t=e.changedTouches[0],s=e.type;if(s==="touchstart")B.touch.x=t.clientX,B.touch.y=t.clientY,B.touch.scrollDecided=!1;else if(s==="touchmove"){if(B.touch.scrollDecided)return;B.touch.scrollDecided=!0;let i=Jh(e),n=!1,r=Math.abs(B.touch.x-t.clientX),o=Math.abs(B.touch.y-t.clientY);e.cancelable&&(i==="none"?n=!0:i==="pan-x"?n=o>r:i==="pan-y"&&(n=r>o)),n?e.preventDefault():_s("track")}}function Qh(e,t,s){return Oe[t]?(td(e,t,s),!0):!1}function Zh(e,t,s){return Oe[t]?(ed(e,t,s),!0):!1}function td(e,t,s){let i=Oe[t],n=i.deps,r=i.name,o=e[gs];o||(e[gs]=o={});for(let a=0,l,c;a<n.length;a++)l=n[a],!(oa&&Wi(l)&&l!=="click")&&(c=o[l],c||(o[l]=c={_count:0}),c._count===0&&e.addEventListener(l,la,ra(l)),c[r]=(c[r]||0)+1,c._count=(c._count||0)+1);e.addEventListener(t,s),i.touchAction&&ca(e,i.touchAction)}function ed(e,t,s){let i=Oe[t],n=i.deps,r=i.name,o=e[gs];if(o)for(let a=0,l,c;a<n.length;a++)l=n[a],c=o[l],c&&c[r]&&(c[r]=(c[r]||1)-1,c._count=(c._count||1)-1,c._count===0&&e.removeEventListener(l,la,ra(l)));e.removeEventListener(t,s)}function Gi(e){Lt.push(e);for(let t=0;t<e.emits.length;t++)Oe[e.emits[t]]=e}function sd(e){for(let t=0,s;t<Lt.length;t++){s=Lt[t];for(let i=0,n;i<s.emits.length;i++)if(n=s.emits[i],n===e)return s}return null}function ca(e,t){Ki&&e instanceof HTMLElement&&yt.run(()=>{e.style.touchAction=t}),e[zi]=t}function Xi(e,t,s){let i=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(i.detail=s,y(e).dispatchEvent(i),i.defaultPrevented){let n=s.preventer||s.sourceEvent;n&&n.preventDefault&&n.preventDefault()}}function _s(e){let t=sd(e);t.info&&(t.info.prevent=!0)}Gi({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){qt(this.info)},mousedown:function(e){if(!Ht(e))return;let t=wt(e),s=this,i=function(o){Ht(o)||(se("up",t,o),qt(s.info))},n=function(o){Ht(o)&&se("up",t,o),qt(s.info)};aa(this.info,i,n),se("down",t,e)},touchstart:function(e){se("down",wt(e),e.changedTouches[0],e)},touchend:function(e){se("up",wt(e),e.changedTouches[0],e)}});function se(e,t,s,i){t&&Xi(t,e,{x:s.clientX,y:s.clientY,sourceEvent:s,preventer:i,prevent:function(n){return _s(n)}})}Gi({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>$h&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,qt(this.info)},mousedown:function(e){if(!Ht(e))return;let t=wt(e),s=this,i=function(o){let a=o.clientX,l=o.clientY;tr(s.info,a,l)&&(s.info.state=s.info.started?o.type==="mouseup"?"end":"track":"start",s.info.state==="start"&&_s("tap"),s.info.addMove({x:a,y:l}),Ht(o)||(s.info.state="end",qt(s.info)),t&&Zs(s.info,t,o),s.info.started=!0)},n=function(o){s.info.started&&i(o),qt(s.info)};aa(this.info,i,n),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=wt(e),s=e.changedTouches[0],i=s.clientX,n=s.clientY;tr(this.info,i,n)&&(this.info.state==="start"&&_s("tap"),this.info.addMove({x:i,y:n}),Zs(this.info,t,s),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=wt(e),s=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:s.clientX,y:s.clientY}),Zs(this.info,t,s))}});function tr(e,t,s){if(e.prevent)return!1;if(e.started)return!0;let i=Math.abs(e.x-t),n=Math.abs(e.y-s);return i>=Xn||n>=Xn}function Zs(e,t,s){if(!t)return;let i=e.moves[e.moves.length-2],n=e.moves[e.moves.length-1],r=n.x-e.x,o=n.y-e.y,a,l=0;i&&(a=n.x-i.x,l=n.y-i.y),Xi(t,"track",{state:e.state,x:s.clientX,y:s.clientY,dx:r,dy:o,ddx:a,ddy:l,sourceEvent:s,hover:function(){return Gh(s.clientX,s.clientY)}})}Gi({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){Ht(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){Ht(e)&&er(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){er(this.info,e.changedTouches[0],e)}});function er(e,t,s){let i=Math.abs(t.clientX-e.x),n=Math.abs(t.clientY-e.y),r=wt(s||t);!r||Uh[r.localName]&&r.hasAttribute("disabled")||(isNaN(i)||isNaN(n)||i<=Gn&&n<=Gn||Wh(t))&&(e.prevent||Xi(r,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:s}))}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ha=W(e=>{class t extends e{_addEventListenerToNode(i,n,r){Qh(i,n,r)||super._addEventListenerToNode(i,n,r)}_removeEventListenerFromNode(i,n,r){Zh(i,n,r)||super._removeEventListenerFromNode(i,n,r)}}return t});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const id=/:host\(:dir\((ltr|rtl)\)\)/g,nd=':host([dir="$1"])',rd=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,od=':host([dir="$2"]) $1',ad=/:dir\((?:ltr|rtl)\)/,sr=!!(window.ShadyDOM&&window.ShadyDOM.inUse),ge=[];let _e=null,Qi="";function da(){Qi=document.documentElement.getAttribute("dir")}function ua(e){e.__autoDirOptOut||e.setAttribute("dir",Qi)}function pa(){da(),Qi=document.documentElement.getAttribute("dir");for(let e=0;e<ge.length;e++)ua(ge[e])}function ld(){_e&&_e.takeRecords().length&&pa()}const cd=W(e=>{sr||_e||(da(),_e=new MutationObserver(pa),_e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=oo(e);class s extends t{static _processStyleText(n,r){return n=t._processStyleText.call(this,n,r),!sr&&ad.test(n)&&(n=this._replaceDirInCssText(n),this.__activateDir=!0),n}static _replaceDirInCssText(n){let r=n;return r=r.replace(id,nd),r=r.replace(rd,od),r}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(ld(),ge.push(this),ua(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const n=ge.indexOf(this);n>-1&&ge.splice(n,1)}}}return s.__activateDir=!1,s});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ir(){document.body.removeAttribute("unresolved")}document.readyState==="interactive"||document.readyState==="complete"?ir():window.addEventListener("DOMContentLoaded",ir);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ie(e,t,s){return{index:e,removed:t,addedCount:s}}const fa=0,ma=1,Ci=2,Si=3;function hd(e,t,s,i,n,r){let o=r-n+1,a=s-t+1,l=new Array(o);for(let c=0;c<o;c++)l[c]=new Array(a),l[c][0]=c;for(let c=0;c<a;c++)l[0][c]=c;for(let c=1;c<o;c++)for(let h=1;h<a;h++)if(Zi(e[t+h-1],i[n+c-1]))l[c][h]=l[c-1][h-1];else{let d=l[c-1][h]+1,u=l[c][h-1]+1;l[c][h]=d<u?d:u}return l}function dd(e){let t=e.length-1,s=e[0].length-1,i=e[t][s],n=[];for(;t>0||s>0;){if(t==0){n.push(Ci),s--;continue}if(s==0){n.push(Si),t--;continue}let r=e[t-1][s-1],o=e[t-1][s],a=e[t][s-1],l;o<a?l=o<r?o:r:l=a<r?a:r,l==r?(r==i?n.push(fa):(n.push(ma),i=r),t--,s--):l==o?(n.push(Si),t--,i=o):(n.push(Ci),s--,i=a)}return n.reverse(),n}function ud(e,t,s,i,n,r){let o=0,a=0,l,c=Math.min(s-t,r-n);if(t==0&&n==0&&(o=pd(e,i,c)),s==e.length&&r==i.length&&(a=fd(e,i,c-o)),t+=o,n+=o,s-=a,r-=a,s-t==0&&r-n==0)return[];if(t==s){for(l=ie(t,[],0);n<r;)l.removed.push(i[n++]);return[l]}else if(n==r)return[ie(t,[],s-t)];let h=dd(hd(e,t,s,i,n,r));l=void 0;let d=[],u=t,p=n;for(let f=0;f<h.length;f++)switch(h[f]){case fa:l&&(d.push(l),l=void 0),u++,p++;break;case ma:l||(l=ie(u,[],0)),l.addedCount++,u++,l.removed.push(i[p]),p++;break;case Ci:l||(l=ie(u,[],0)),l.addedCount++,u++;break;case Si:l||(l=ie(u,[],0)),l.removed.push(i[p]),p++;break}return l&&d.push(l),d}function pd(e,t,s){for(let i=0;i<s;i++)if(!Zi(e[i],t[i]))return i;return s}function fd(e,t,s){let i=e.length,n=t.length,r=0;for(;r<s&&Zi(e[--i],t[--n]);)r++;return r}function ga(e,t){return ud(e,0,e.length,t,0,t.length)}function Zi(e,t){return e===t}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function It(e){return e.localName==="slot"}let nr=class{static getFlattenedNodes(e){const t=y(e);if(It(e))return e=e,t.assignedNodes({flatten:!0});{const s=[];for(let i=0;i<t.childNodes.length;i++){const n=t.childNodes[i];if(It(n)){const r=n;s.push(...y(r).assignedNodes({flatten:!0}))}else s.push(n)}return s}}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){It(this._target)?this._listenSlots([this._target]):y(this._target).children&&(this._listenSlots(y(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){It(this._target)?this._unlistenSlots([this._target]):y(this._target).children&&(this._unlistenSlots(y(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,yt.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let s=e[t];s.addedNodes&&this._listenSlots(s.addedNodes),s.removedNodes&&this._unlistenSlots(s.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),s=ga(t,this._effectiveNodes);for(let n=0,r;n<s.length&&(r=s[n]);n++)for(let o=0,a;o<r.removed.length&&(a=r.removed[o]);o++)e.removedNodes.push(a);for(let n=0,r;n<s.length&&(r=s[n]);n++)for(let o=r.index;o<r.index+r.addedCount;o++)e.addedNodes.push(t[o]);this._effectiveNodes=t;let i=!1;return(e.addedNodes.length||e.removedNodes.length)&&(i=!0,this.callback.call(this._target,e)),i}_listenSlots(e){for(let t=0;t<e.length;t++){let s=e[t];It(s)&&s.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let s=e[t];It(s)&&s.removeEventListener("slotchange",this._boundSchedule)}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const _a=function(){let e,t;do e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=Ih();while(e||t)};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const $t=Element.prototype,md=$t.matches||$t.matchesSelector||$t.mozMatchesSelector||$t.msMatchesSelector||$t.oMatchesSelector||$t.webkitMatchesSelector,va=function(e,t){return md.call(e,t)};class M{constructor(t){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(t),this.node=t}observeNodes(t){return new nr(this.node,t)}unobserveNodes(t){t.disconnect()}notifyObserver(){}deepContains(t){if(y(this.node).contains(t))return!0;let s=t,i=t.ownerDocument;for(;s&&s!==i&&s!==this.node;)s=y(s).parentNode||y(s).host;return s===this.node}getOwnerRoot(){return y(this.node).getRootNode()}getDistributedNodes(){return this.node.localName==="slot"?y(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let t=[],s=y(this.node).assignedSlot;for(;s;)t.push(s),s=y(s).assignedSlot;return t}importNode(t,s){let i=this.node instanceof Document?this.node:this.node.ownerDocument;return y(i).importNode(t,s)}getEffectiveChildNodes(){return nr.getFlattenedNodes(this.node)}queryDistributedElements(t){let s=this.getEffectiveChildNodes(),i=[];for(let n=0,r=s.length,o;n<r&&(o=s[n]);n++)o.nodeType===Node.ELEMENT_NODE&&va(o,t)&&i.push(o);return i}get activeElement(){let t=this.node;return t._activeElement!==void 0?t._activeElement:t.activeElement}}function gd(e,t){for(let s=0;s<t.length;s++){let i=t[s];e[i]=function(){return this.node[i].apply(this.node,arguments)}}}function rr(e,t){for(let s=0;s<t.length;s++){let i=t[s];Object.defineProperty(e,i,{get:function(){return this.node[i]},configurable:!0})}}function _d(e,t){for(let s=0;s<t.length;s++){let i=t[s];Object.defineProperty(e,i,{get:function(){return this.node[i]},set:function(n){this.node[i]=n},configurable:!0})}}class Mi{constructor(t){this.event=t}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}M.prototype.cloneNode;M.prototype.appendChild;M.prototype.insertBefore;M.prototype.removeChild;M.prototype.replaceChild;M.prototype.setAttribute;M.prototype.removeAttribute;M.prototype.querySelector;M.prototype.querySelectorAll;M.prototype.parentNode;M.prototype.firstChild;M.prototype.lastChild;M.prototype.nextSibling;M.prototype.previousSibling;M.prototype.firstElementChild;M.prototype.lastElementChild;M.prototype.nextElementSibling;M.prototype.previousElementSibling;M.prototype.childNodes;M.prototype.children;M.prototype.classList;M.prototype.textContent;M.prototype.innerHTML;let Ei=M;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(M.prototype).forEach(t=>{t!="activeElement"&&(e.prototype[t]=M.prototype[t])}),rr(e.prototype,["classList"]),Ei=e,Object.defineProperties(Mi.prototype,{localTarget:{get(){const t=this.event.currentTarget,s=t&&st(t).getOwnerRoot(),i=this.path;for(let n=0;n<i.length;n++){const r=i[n];if(st(r).getOwnerRoot()===s)return r}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else gd(M.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll","attachShadow"]),rr(M.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList","shadowRoot"]),_d(M.prototype,["textContent","innerHTML","className"]);const st=function(e){if(e=e||document,e instanceof Ei||e instanceof Mi)return e;let t=e.__domApi;return t||(e instanceof Event?t=new Mi(e):t=new Ei(e),e.__domApi=t),t};/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ti=window.ShadyDOM,or=window.ShadyCSS;function ar(e,t){return y(e).getRootNode()===t}function vd(e,t=!1){if(!ti||!or||!ti.handlesDynamicScoping)return null;const s=or.ScopingShim;if(!s)return null;const i=s.scopeForNode(e),n=y(e).getRootNode(),r=o=>{if(!ar(o,n))return;const a=Array.from(ti.nativeMethods.querySelectorAll.call(o,"*"));a.push(o);for(let l=0;l<a.length;l++){const c=a[l];if(!ar(c,n))continue;const h=s.currentScopeForNode(c);h!==i&&(h!==""&&s.unscopeNode(c,h),s.scopeNode(c,i))}};if(r(e),t){const o=new MutationObserver(a=>{for(let l=0;l<a.length;l++){const c=a[l];for(let h=0;h<c.addedNodes.length;h++){const d=c.addedNodes[h];d.nodeType===Node.ELEMENT_NODE&&r(d)}}});return o.observe(e,{childList:!0,subtree:!0}),o}else return null}/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const ei="disable-upgrade",ya=e=>{for(;e;){const t=Object.getOwnPropertyDescriptor(e,"observedAttributes");if(t)return t.get;e=Object.getPrototypeOf(e.prototype).constructor}return()=>[]};W(e=>{const t=Ss(e);let s=ya(t);class i extends t{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return s.call(this).concat(ei)}_initializeProperties(){this.hasAttribute(ei)?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(r){return super._canApplyPropertyDefault(r)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(r))}attributeChangedCallback(r,o,a,l){r==ei?this.__isUpgradeDisabled&&a==null&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,y(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(r,o,a,l)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}return i});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Be="disable-upgrade";let yd=window.ShadyCSS;const ba=W(e=>{const t=ha(Ss(e)),s=ui?t:cd(t),i=ya(s),n={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class r extends s{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(a,l,c){(this.__dataAttributes&&this.__dataAttributes[a]||a===Be)&&this.attributeChangedCallback(a,l,c,null)}setAttribute(a,l){if(Ie&&!this._legacyForceObservedAttributes){const c=this.getAttribute(a);super.setAttribute(a,l),this.__attributeReaction(a,c,String(l))}else super.setAttribute(a,l)}removeAttribute(a){if(Ie&&!this._legacyForceObservedAttributes){const l=this.getAttribute(a);super.removeAttribute(a),this.__attributeReaction(a,l,null)}else super.removeAttribute(a)}static get observedAttributes(){return Ie&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],this.prototype,void 0),this.__observedAttributes):i.call(this).concat(Be)}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(a){return super._canApplyPropertyDefault(a)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(a))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(a,l,c,h){l!==c&&(a==Be?this.__isUpgradeDisabled&&c==null&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,y(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(a,l,c,h),this.attributeChanged(a,l,c)))}attributeChanged(a,l,c){}_initializeProperties(){if(be&&this.hasAttribute(Be))this.__isUpgradeDisabled=!0;else{let a=Object.getPrototypeOf(this);a.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",a))||(this._registered(),a.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),Ie&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const a=this.attributes;for(let l=0,c=a.length;l<c;l++){const h=a[l];this.__attributeReaction(h.name,null,h.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(a){return this._serializeValue(a)}deserialize(a,l){return this._deserializeValue(a,l)}reflectPropertyToAttribute(a,l,c){this._propertyToAttribute(a,l,c)}serializeValueToAttribute(a,l,c){this._valueToNodeAttribute(c||this,a,l)}extend(a,l){if(!(a&&l))return a||l;let c=Object.getOwnPropertyNames(l);for(let h=0,d;h<c.length&&(d=c[h]);h++){let u=Object.getOwnPropertyDescriptor(l,d);u&&Object.defineProperty(a,d,u)}return a}mixin(a,l){for(let c in l)a[c]=l[c];return a}chainObject(a,l){return a&&l&&a!==l&&(a.__proto__=l),a}instanceTemplate(a){let l=this.constructor._contentForTemplate(a);return document.importNode(l,!0)}fire(a,l,c){c=c||{},l=l??{};let h=new Event(a,{bubbles:c.bubbles===void 0?!0:c.bubbles,cancelable:!!c.cancelable,composed:c.composed===void 0?!0:c.composed});h.detail=l;let d=c.node||this;return y(d).dispatchEvent(h),h}listen(a,l,c){a=a||this;let h=this.__boundListeners||(this.__boundListeners=new WeakMap),d=h.get(a);d||(d={},h.set(a,d));let u=l+c;d[u]||(d[u]=this._addMethodEventListenerToNode(a,l,c,this))}unlisten(a,l,c){a=a||this;let h=this.__boundListeners&&this.__boundListeners.get(a),d=l+c,u=h&&h[d];u&&(this._removeEventListenerFromNode(a,l,u),h[d]=null)}setScrollDirection(a,l){ca(l||this,n[a]||"auto")}$$(a){return this.root.querySelector(a)}get domHost(){let a=y(this).getRootNode();return a instanceof DocumentFragment?a.host:a}distributeContent(){const l=st(this);window.ShadyDOM&&l.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return st(this).getEffectiveChildNodes()}queryDistributedElements(a){return st(this).queryDistributedElements(a)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter(function(l){return l.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let a=this.getEffectiveChildNodes(),l=[];for(let c=0,h;h=a[c];c++)h.nodeType!==Node.COMMENT_NODE&&l.push(h.textContent);return l.join("")}queryEffectiveChildren(a){let l=this.queryDistributedElements(a);return l&&l[0]}queryAllEffectiveChildren(a){return this.queryDistributedElements(a)}getContentChildNodes(a){let l=this.root.querySelector(a||"slot");return l?st(l).getDistributedNodes():[]}getContentChildren(a){return this.getContentChildNodes(a).filter(function(c){return c.nodeType===Node.ELEMENT_NODE})}isLightDescendant(a){const l=this;return l!==a&&y(l).contains(a)&&y(l).getRootNode()===y(a).getRootNode()}isLocalDescendant(a){return this.root===y(a).getRootNode()}scopeSubtree(a,l=!1){return vd(a,l)}getComputedStyleValue(a){return yd.getComputedStyleValue(this,a)}debounce(a,l,c){return this._debouncers=this._debouncers||{},this._debouncers[a]=Vt.debounce(this._debouncers[a],c>0?ue.after(c):yt,l.bind(this))}isDebouncerActive(a){this._debouncers=this._debouncers||{};let l=this._debouncers[a];return!!(l&&l.isActive())}flushDebouncer(a){this._debouncers=this._debouncers||{};let l=this._debouncers[a];l&&l.flush()}cancelDebouncer(a){this._debouncers=this._debouncers||{};let l=this._debouncers[a];l&&l.cancel()}async(a,l){return l>0?ue.run(a.bind(this),l):~yt.run(a.bind(this))}cancelAsync(a){a<0?yt.cancel(~a):ue.cancel(a)}create(a,l){let c=document.createElement(a);if(l)if(c.setProperties)c.setProperties(l);else for(let h in l)c[h]=l[h];return c}elementMatches(a,l){return va(l||this,a)}toggleAttribute(a,l){let c=this;return arguments.length===3&&(c=arguments[2]),arguments.length==1&&(l=!c.hasAttribute(a)),l?(y(c).setAttribute(a,""),!0):(y(c).removeAttribute(a),!1)}toggleClass(a,l,c){c=c||this,arguments.length==1&&(l=!c.classList.contains(a)),l?c.classList.add(a):c.classList.remove(a)}transform(a,l){l=l||this,l.style.webkitTransform=a,l.style.transform=a}translate3d(a,l,c,h){h=h||this,this.transform("translate3d("+a+","+l+","+c+")",h)}arrayDelete(a,l){let c;if(Array.isArray(a)){if(c=a.indexOf(l),c>=0)return a.splice(c,1)}else if(c=U(this,a).indexOf(l),c>=0)return this.splice(a,c,1);return null}_logger(a,l){switch(Array.isArray(l)&&l.length===1&&Array.isArray(l[0])&&(l=l[0]),a){case"log":case"warn":case"error":console[a](...l)}}_log(...a){this._logger("log",a)}_warn(...a){this._logger("warn",a)}_error(...a){this._logger("error",a)}_logf(a,...l){return["[%s::%s]",this.is,a,...l]}}return r.prototype.is="",r});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const bd={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},wa={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},wd=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},wa);function zd(e,t,s){const i=e._noAccessors,n=Object.getOwnPropertyNames(e);for(let r=0;r<n.length;r++){let o=n[r];if(!(o in s))if(i)t[o]=e[o];else{let a=Object.getOwnPropertyDescriptor(e,o);a&&(a.configurable=!0,Object.defineProperty(t,o,a))}}}function xd(e,t,s){for(let i=0;i<t.length;i++)za(e,t[i],s,wd)}function za(e,t,s,i){zd(t,e,i);for(let n in bd)t[n]&&(s[n]=s[n]||[],s[n].push(t[n]))}function xa(e,t,s){t=t||[];for(let i=e.length-1;i>=0;i--){let n=e[i];n?Array.isArray(n)?xa(n,t):t.indexOf(n)<0&&(!s||s.indexOf(n)<0)&&t.unshift(n):console.warn("behavior is null, check for missing or 404 import")}return t}function lr(e,t){for(const s in t){const i=e[s],n=t[s];!("value"in n)&&i&&"value"in i?e[s]=Object.assign({value:i.value},n):e[s]=n}}const cr=ba(HTMLElement);function Cd(e,t,s){let i;const n={};class r extends t{static _finalizeClass(){if(!this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this)))t._finalizeClass.call(this);else{if(i)for(let l=0,c;l<i.length;l++)c=i[l],c.properties&&this.createProperties(c.properties),c.observers&&this.createObservers(c.observers,c.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}}static get properties(){const l={};if(i)for(let c=0;c<i.length;c++)lr(l,i[c].properties);return lr(l,e.properties),l}static get observers(){let l=[];if(i)for(let c=0,h;c<i.length;c++)h=i[c],h.observers&&(l=l.concat(h.observers));return e.observers&&(l=l.concat(e.observers)),l}created(){super.created();const l=n.created;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}_registered(){const l=r.prototype;if(!l.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",l))){l.__hasRegisterFinished=!0,super._registered(),be&&o(l);const c=Object.getPrototypeOf(this);let h=n.beforeRegister;if(h)for(let d=0;d<h.length;d++)h[d].call(c);if(h=n.registered,h)for(let d=0;d<h.length;d++)h[d].call(c)}}_applyListeners(){super._applyListeners();const l=n.listeners;if(l)for(let c=0;c<l.length;c++){const h=l[c];if(h)for(let d in h)this._addMethodEventListenerToNode(this,d,h[d])}}_ensureAttributes(){const l=n.hostAttributes;if(l)for(let c=l.length-1;c>=0;c--){const h=l[c];for(let d in h)this._ensureAttribute(d,h[d])}super._ensureAttributes()}ready(){super.ready();let l=n.ready;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}attached(){super.attached();let l=n.attached;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}detached(){super.detached();let l=n.detached;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}attributeChanged(l,c,h){super.attributeChanged();let d=n.attributeChanged;if(d)for(let u=0;u<d.length;u++)d[u].call(this,l,c,h)}}if(s){Array.isArray(s)||(s=[s]);let a=t.prototype.behaviors;i=xa(s,null,a),r.prototype.behaviors=a?a.concat(s):i}const o=a=>{i&&xd(a,i,n),za(a,e,n,wa)};return be||o(r.prototype),r.generatedFrom=e,r}const Sd=function(e,t){e||console.warn("Polymer.Class requires `info` argument");let s=t?t(cr):cr;return s=Cd(e,s,e.behaviors),s.is=s.prototype.is=e.is,s};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ae=function(e){let t;return typeof e=="function"?t=e:t=Ae.Class(e),e._legacyForceObservedAttributes&&(t.prototype._legacyForceObservedAttributes=e._legacyForceObservedAttributes),customElements.define(t.is,t),t};Ae.Class=Sd;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function tn(e,t,s,i,n){let r;n&&(r=typeof s=="object"&&s!==null,r&&(i=e.__dataTemp[t]));let o=i!==s&&(i===i||s===s);return r&&o&&(e.__dataTemp[t]=s),o}const en=W(e=>{class t extends e{_shouldPropertyChange(i,n,r){return tn(this,i,n,r,!0)}}return t}),Ca=W(e=>{class t extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(i,n,r){return tn(this,i,n,r,this.mutableData)}}return t});en._mutablePropertyChange=tn;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Li=null;function Pi(){return Li}Pi.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:Pi,writable:!0}});const Sa=Cs(Pi),Md=en(Sa);function Ed(e,t){Li=e,Object.setPrototypeOf(e,t.prototype),new t,Li=null}const Ld=Cs(class{});function Ma(e,t){for(let s=0;s<t.length;s++){let i=t[s];if(!!e!=!!i.__hideTemplateChildren__)if(i.nodeType===Node.TEXT_NODE)e?(i.__polymerTextContent__=i.textContent,i.textContent=""):i.textContent=i.__polymerTextContent__;else if(i.localName==="slot")if(e)i.__polymerReplaced__=document.createComment("hidden-slot"),y(y(i).parentNode).replaceChild(i.__polymerReplaced__,i);else{const n=i.__polymerReplaced__;n&&y(y(n).parentNode).replaceChild(i,n)}else i.style&&(e?(i.__polymerDisplay__=i.style.display,i.style.display="none"):i.style.display=i.__polymerDisplay__);i.__hideTemplateChildren__=e,i._showHideChildren&&i._showHideChildren(e)}}class Mt extends Ld{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let s=[];this.children=s;for(let n=this.root.firstChild;n;n=n.nextSibling)s.push(n),n.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let i=this.__templatizeOptions;(t&&i.instanceProps||!i.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let i in this.__hostProps)this._setPendingProperty(i,this.__dataHost["_host_"+i]);for(let i in t)this._setPendingProperty(i,t[i])}forwardHostProp(t,s){this._setPendingPropertyOrPath(t,s,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,s,i){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,s,n=>{n.model=this,i(n)});else{let n=this.__dataHost.__dataHost;n&&n._addEventListenerToNode(t,s,i)}}_showHideChildren(t){Ma(t,this.children)}_setUnmanagedPropertyToNode(t,s,i){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&s=="textContent"?t.__polymerTextContent__=i:super._setUnmanagedPropertyToNode(t,s,i)}get parentModel(){let t=this.__parentModel;if(!t){let s;t=this;do t=t.__dataHost.__dataHost;while((s=t.__templatizeOptions)&&!s.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}Mt.prototype.__dataHost;Mt.prototype.__templatizeOptions;Mt.prototype._methodHost;Mt.prototype.__templatizeOwner;Mt.prototype.__hostProps;const Pd=en(Mt);function hr(e){let t=e.__dataHost;return t&&t._methodHost||t}function Hd(e,t,s){let i=s.mutableData?Pd:Mt;vs.mixin&&(i=vs.mixin(i));let n=class extends i{};return n.prototype.__templatizeOptions=s,n.prototype._bindTemplate(e),Ad(n,e,t,s),n}function Td(e,t,s,i){let n=s.forwardHostProp;if(n&&t.hasHostProps){const r=e.localName=="template";let o=t.templatizeTemplateClass;if(!o){if(r){let l=s.mutableData?Md:Sa;class c extends l{}o=t.templatizeTemplateClass=c}else{const l=e.constructor;class c extends l{}o=t.templatizeTemplateClass=c}let a=t.hostProps;for(let l in a)o.prototype._addPropertyEffect("_host_"+l,o.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:Od(l,n)}),o.prototype._createNotifyingProperty("_host_"+l);Gr&&i&&Nd(t,s,i)}if(e.__dataProto&&Object.assign(e.__data,e.__dataProto),r)Ed(e,o),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties();else{Object.setPrototypeOf(e,o.prototype);const a=t.hostProps;for(let l in a)if(l="_host_"+l,l in e){const c=e[l];delete e[l],e.__data[l]=c}}}}function Od(e,t){return function(i,n,r){t.call(i.__templatizeOwner,n.substring(6),r[n])}}function Ad(e,t,s,i){let n=s.hostProps||{};for(let r in i.instanceProps){delete n[r];let o=i.notifyInstanceProp;o&&e.prototype._addPropertyEffect(r,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:kd(r,o)})}if(i.forwardHostProp&&t.__dataHost)for(let r in n)s.hasHostProps||(s.hasHostProps=!0),e.prototype._addPropertyEffect(r,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Vd()})}function kd(e,t){return function(i,n,r){t.call(i.__templatizeOwner,i,n,r[n])}}function Vd(){return function(t,s,i){t.__dataHost._setPendingPropertyOrPath("_host_"+s,i[s],!0,!0)}}function vs(e,t,s){if(Yt&&!hr(e))throw new Error("strictTemplatePolicy: template owner not trusted");if(s=s||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let n=(t?t.constructor:Mt)._parseTemplate(e),r=n.templatizeInstanceClass;r||(r=Hd(e,n,s),n.templatizeInstanceClass=r);const o=hr(e);Td(e,n,s,o);let a=class extends r{};return a.prototype._methodHost=o,a.prototype.__dataHost=e,a.prototype.__templatizeOwner=t,a.prototype.__hostProps=n.hostProps,a=a,a}function Nd(e,t,s){const i=s.constructor._properties,{propertyEffects:n}=e,{instanceProps:r}=t;for(let o in n)if(!i[o]&&!(r&&r[o])){const a=n[o];for(let l=0;l<a.length;l++){const{part:c}=a[l].info;if(!(c.signature&&c.signature.static)){console.warn(`Property '${o}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}function Rd(e,t){let s;for(;t;)if(s=t.__dataHost?t:t.__templatizeInstance)if(s.__dataHost!=e)t=s.__dataHost;else return s;else t=y(t).parentNode;return null}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let dr=!1;function sn(){if(be&&!Jr){if(!dr){dr=!0;const e=document.createElement("style");e.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(e)}return!0}return!1}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Id=ha(Ca(Cs(HTMLElement)));class $d extends Id{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),Yt)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(t,s,i,n){this.mutableData=!0}connectedCallback(){sn()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){y(y(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let t=0;t<this.__children.length;t++)this.root.appendChild(this.__children[t])}render(){let t;if(!this.__children){if(t=t||this.querySelector("template"),!t){let s=new MutationObserver(()=>{if(t=this.querySelector("template"),t)s.disconnect(),this.render();else throw new Error("dom-bind requires a <template> child")});s.observe(this,{childList:!0});return}this.root=this._stampTemplate(t),this.$=this.root.$,this.__children=[];for(let s=this.root.firstChild;s;s=s.nextSibling)this.__children[this.__children.length]=s;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}}customElements.define("dom-bind",$d);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Dd=Ca(Es);class ur extends Dd{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!li,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t);this.__chunkingId&&cancelAnimationFrame(this.__chunkingId)}connectedCallback(){if(super.connectedCallback(),sn()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let t=y(y(this).parentNode);for(let s=0;s<this.__instances.length;s++)this.__attachInstance(s,t);this.__chunkingId&&this.__render()}}__ensureTemplatized(){if(!this.__ctor){const t=this;let s=this.template=t._templateInfo?t:this.querySelector("template");if(!s){let n=new MutationObserver(()=>{if(this.querySelector("template"))n.disconnect(),this.__render();else throw new Error("dom-repeat requires a <template> child")});return n.observe(this,{childList:!0}),!1}let i={};i[this.as]=!0,i[this.indexAs]=!0,i[this.itemsIndexAs]=!0,this.__ctor=vs(s,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:i,forwardHostProp:function(n,r){let o=this.__instances;for(let a=0,l;a<o.length&&(l=o[a]);a++)l.forwardHostProp(n,r)},notifyInstanceProp:function(n,r,o){if(xl(this.as,r)){let a=n[this.itemsIndexAs];r==this.as&&(this.items[a]=o);let l=xe(this.as,`${JSCompiler_renameProperty("items",this)}.${a}`,r);this.notifyPath(l,o)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if(typeof t=="string"){let s=t,i=this.__getMethodHost();return function(){return i[s].apply(i,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn){if(!t)this.__debounceRender(this.__render,this.delay);else if(this.__observePaths){let s=this.__observePaths;for(let i=0;i<s.length;i++)t.indexOf(s[i])===0&&this.__debounceRender(this.__render,this.delay)}}}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||(t.path==="items"&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(t,s=0){this.__renderDebouncer=Vt.debounce(this.__renderDebouncer,s>0?ue.after(s):yt,t.bind(this)),ia(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),_a()}__render(){if(!this.__ensureTemplatized())return;let t=this.items||[];const s=this.__sortAndFilterItems(t),i=this.__calculateLimit(s.length);this.__updateInstances(t,i,s),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>{this.__chunkingId=null,this.__continueChunking()})),this._setRenderedItemCount(this.__instances.length),(!li||this.notifyDomChange)&&this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(t){let s=new Array(t.length);for(let i=0;i<t.length;i++)s[i]=i;return this.__filterFn&&(s=s.filter((i,n,r)=>this.__filterFn(t[i],n,r))),this.__sortFn&&s.sort((i,n)=>this.__sortFn(t[i],t[n])),s}__calculateLimit(t){let s=t;const i=this.__instances.length;if(this.initialCount){let n;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(s=Math.min(t,this.initialCount),n=Math.max(s-i,0),this.__chunkCount=n||1):(n=Math.min(Math.max(t-i,0),this.__chunkCount),s=Math.min(i+n,t)),this.__shouldMeasureChunk=n===this.__chunkCount,this.__shouldContinueChunking=s<t,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,s}__continueChunking(){if(this.__shouldMeasureChunk){const t=performance.now()-this.__renderStartTime,s=this._targetFrameTime/t;this.__chunkCount=Math.round(this.__chunkCount*s)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(t,s,i){const n=this.__itemsIdxToInstIdx={};let r;for(r=0;r<s;r++){let o=this.__instances[r],a=i[r],l=t[a];n[a]=r,o?(o._setPendingProperty(this.as,l),o._setPendingProperty(this.indexAs,r),o._setPendingProperty(this.itemsIndexAs,a),o._flushProperties()):this.__insertInstance(l,r,a)}for(let o=this.__instances.length-1;o>=r;o--)this.__detachAndRemoveInstance(o)}__detachInstance(t){let s=this.__instances[t];const i=y(s.root);for(let n=0;n<s.children.length;n++){let r=s.children[n];i.appendChild(r)}return s}__attachInstance(t,s){let i=this.__instances[t];s.insertBefore(i.root,this)}__detachAndRemoveInstance(t){this.__detachInstance(t),this.__instances.splice(t,1)}__stampInstance(t,s,i){let n={};return n[this.as]=t,n[this.indexAs]=s,n[this.itemsIndexAs]=i,new this.__ctor(n)}__insertInstance(t,s,i){const n=this.__stampInstance(t,s,i);let r=this.__instances[s+1],o=r?r.children[0]:this;return y(y(this).parentNode).insertBefore(n.root,o),this.__instances[s]=n,n}_showHideChildren(t){for(let s=0;s<this.__instances.length;s++)this.__instances[s]._showHideChildren(t)}__handleItemPath(t,s){let i=t.slice(6),n=i.indexOf("."),r=n<0?i:i.substring(0,n);if(r==parseInt(r,10)){let o=n<0?"":i.substring(n+1);this.__handleObservedPaths(o);let a=this.__itemsIdxToInstIdx[r],l=this.__instances[a];if(l){let c=this.as+(o?"."+o:"");l._setPendingPropertyOrPath(c,s,!1,!0),l._flushProperties()}return!0}}itemForElement(t){let s=this.modelForElement(t);return s&&s[this.as]}indexForElement(t){let s=this.modelForElement(t);return s&&s[this.indexAs]}modelForElement(t){return Rd(this.template,t)}}customElements.define(ur.is,ur);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class Ea extends Es{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=Vt.debounce(this.__renderDebouncer,yt,()=>this.__render()),ia(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const t=y(this).parentNode;(!t||t.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!y(t).host)&&this.__teardownInstance()}connectedCallback(){super.connectedCallback(),sn()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const t=this;let s=t._templateInfo?t:y(t).querySelector("template");if(!s){let i=new MutationObserver(()=>{if(y(this).querySelector("template"))i.disconnect(),this.__render();else throw new Error("dom-if requires a <template> child")});return i.observe(this,{childList:!0}),!1}this.__template=s}return!0}__ensureInstance(){let t=y(this).parentNode;if(this.__hasInstance()){let s=this.__getInstanceNodes();if(s&&s.length&&y(this).previousSibling!==s[s.length-1])for(let n=0,r;n<s.length&&(r=s[n]);n++)y(t).insertBefore(r,this)}else{if(!t||!this.__ensureTemplate())return!1;this.__createAndInsertInstance(t)}return!0}render(){_a()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),(!li||this.notifyDomChange)&&this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(t){}__teardownInstance(){}_showHideChildren(){}}class Fd extends Ea{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(t){const s=this.__dataHost||this;if(Yt&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const i=s._bindTemplate(this.__template,!0);i.runEffects=(n,r,o)=>{let a=this.__syncInfo;if(this.if)a&&(this.__syncInfo=null,this._showHideChildren(),r=Object.assign(a.changedProps,r)),n(r,o);else if(this.__instance)if(a||(a=this.__syncInfo={runEffects:n,changedProps:{}}),o)for(const l in r){const c=_t(l);a.changedProps[c]=this.__dataHost[c]}else Object.assign(a.changedProps,r)},this.__instance=s._stampTemplate(this.__template,i),y(t).insertBefore(this.__instance,this)}__syncHostProperties(){const t=this.__syncInfo;t&&(this.__syncInfo=null,t.runEffects(t.changedProps,!1))}__teardownInstance(){const t=this.__dataHost||this;this.__instance&&(t._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==t&&(this.__instance.__hidden=t,Ma(t,this.__instance.templateInfo.childNodes)),t||this.__syncHostProperties()}}class Bd extends Ea{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(t){this.__ctor||(this.__ctor=vs(this.__template,this,{mutableData:!0,forwardHostProp:function(s,i){this.__instance&&(this.if?this.__instance.forwardHostProp(s,i):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[_t(s)]=!0))}})),this.__instance=new this.__ctor,y(t).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){let s=y(t[0]).parentNode;if(s){s=y(s);for(let i=0,n;i<t.length&&(n=t[i]);i++)s.removeChild(n)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let t=this.__invalidProps;if(t){this.__invalidProps=null;for(let s in t)this.__instance._setPendingProperty(s,this.__dataHost[s]);this.__instance._flushProperties()}}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==t&&(this.__instance.__hidden=t,this.__instance._showHideChildren(t)),t||this.__syncHostProperties()}}const pr=Xr?Fd:Bd;customElements.define(pr.is,pr);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let jd=W(e=>{let t=Ss(e);class s extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(n,r){let o=r.path;if(o==JSCompiler_renameProperty("items",this)){let a=r.base||[],l=this.__lastItems,c=this.__lastMulti;if(n!==c&&this.clearSelection(),l){let h=ga(a,l);this.__applySplices(h)}this.__lastItems=a,this.__lastMulti=n}else if(r.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(r.value.indexSplices);else{let a=o.slice(`${JSCompiler_renameProperty("items",this)}.`.length),l=parseInt(a,10);a.indexOf(".")<0&&a==l&&this.__deselectChangedIdx(l)}}__applySplices(n){let r=this.__selectedMap;for(let a=0;a<n.length;a++){let l=n[a];r.forEach((c,h)=>{c<l.index||(c>=l.index+l.removed.length?r.set(h,c+l.addedCount-l.removed.length):r.set(h,-1))});for(let c=0;c<l.addedCount;c++){let h=l.index+c;r.has(this.items[h])&&r.set(this.items[h],h)}}this.__updateLinks();let o=0;r.forEach((a,l)=>{a<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),o,1):this.selected=this.selectedItem=null,r.delete(l)):o++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let n=0;this.__selectedMap.forEach(r=>{r>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${r}`,`${JSCompiler_renameProperty("selected",this)}.${n++}`)})}else this.__selectedMap.forEach(n=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${n}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${n}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(n){return this.__selectedMap.has(n)}isIndexSelected(n){return this.isSelected(this.items[n])}__deselectChangedIdx(n){let r=this.__selectedIndexForItemIndex(n);if(r>=0){let o=0;this.__selectedMap.forEach((a,l)=>{r==o++&&this.deselect(l)})}}__selectedIndexForItemIndex(n){let r=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${n}`];if(r)return parseInt(r.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(n){let r=this.__selectedMap.get(n);if(r>=0){this.__selectedMap.delete(n);let o;this.multi&&(o=this.__selectedIndexForItemIndex(r)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),o,1):this.selected=this.selectedItem=null}}deselectIndex(n){this.deselect(this.items[n])}select(n){this.selectIndex(this.items.indexOf(n))}selectIndex(n){let r=this.items[n];this.isSelected(r)?this.toggle&&this.deselectIndex(n):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(r,n),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),r):this.selected=this.selectedItem=r)}}return s}),Ud=jd(Es);class fr extends Ud{static get is(){return"array-selector"}static get template(){return null}}customElements.define(fr.is,fr);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ze=new xt;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,s){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,s){},styleSubtree(e,t){Ze.processStyles(),yi(e,t)},styleElement(e){Ze.processStyles()},styleDocument(e){Ze.processStyles(),yi(document.body,e)},getComputedStyleValue(e,t){return ea(e,t)},flushCustomStyles(){},nativeCss:Yi,nativeShadow:Vs,cssBuild:Ee,disableRuntime:Yo});window.ShadyCSS.CustomStyleInterface=Ze;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const mr="include",qd=window.ShadyCSS.CustomStyleInterface;class Yd extends HTMLElement{constructor(){super(),this._style=null,qd.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");if(!t)return null;this._style=t;const s=t.getAttribute(mr);return s&&(t.removeAttribute(mr),t.textContent=yl(s)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",Yd);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Kd=ba(HTMLElement).prototype;/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const La=Ms`
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
</custom-style>`;La.setAttribute("style","display: none;");document.head.appendChild(La.content);var Pa=document.createElement("style");Pa.textContent="[hidden] { display: none !important; }";document.head.appendChild(Pa);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class X{constructor(t){X[" "](t),this.type=t&&t.type||"default",this.key=t&&t.key,t&&"value"in t&&(this.value=t.value)}get value(){var t=this.type,s=this.key;if(t&&s)return X.types[t]&&X.types[t][s]}set value(t){var s=this.type,i=this.key;s&&i&&(s=X.types[s]=X.types[s]||{},t==null?delete s[i]:s[i]=t)}get list(){var t=this.type;if(t){var s=X.types[this.type];return s?Object.keys(s).map(function(i){return Wd[this.type][i]},this):[]}}byKey(t){return this.key=t,this.value}}X[" "]=function(){};X.types={};var Wd=X.types;Ae({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(e,t,s){var i=new X({type:e,key:t});return s!==void 0&&s!==i.value?i.value=s:this.value!==i.value&&(this.value=i.value),i},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(e){e&&(this.value=this)},byKey:function(e){return new X({type:this.type,key:e}).value}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Ae({_template:Ms`
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
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:Kd.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(e){var t=(e||"").split(":");this._iconName=t.pop(),this._iconsetName=t.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(e){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&st(this.root).removeChild(this._img),this._iconName===""?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,st(this.root).appendChild(this._img))}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Ae({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new X({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map(function(e){return this.name+":"+e},this)},applyIcon:function(e,t){this.removeIcon(e);var s=this._cloneIcon(t,this.rtlMirroring&&this._targetIsRTL(e));if(s){var i=st(e.root||e);return i.insertBefore(s,i.childNodes[0]),e._svgIcon=s}return null},removeIcon:function(e){e._svgIcon&&(st(e.root||e).removeChild(e._svgIcon),e._svgIcon=null)},_targetIsRTL:function(e){if(this.__targetIsRTL==null)if(this.useGlobalRtlAttribute){var t=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL=t.getAttribute("dir")==="rtl"}else e&&e.nodeType!==Node.ELEMENT_NODE&&(e=e.host),this.__targetIsRTL=e&&window.getComputedStyle(e).direction==="rtl";return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async(function(){this.fire("iron-iconset-added",this,{node:window})})},_createIconMap:function(){var e=Object.create(null);return st(this).querySelectorAll("[id]").forEach(function(t){e[t.id]=t}),e},_cloneIcon:function(e,t){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[e],this.size,t)},_prepareSvgClone:function(e,t,s){if(e){var i=e.cloneNode(!0),n=document.createElementNS("http://www.w3.org/2000/svg","svg"),r=i.getAttribute("viewBox")||"0 0 "+t+" "+t,o="pointer-events: none; display: block; width: 100%; height: 100%;";return s&&i.hasAttribute("mirror-in-rtl")&&(o+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),n.setAttribute("viewBox",r),n.setAttribute("preserveAspectRatio","xMidYMid meet"),n.setAttribute("focusable","false"),n.style.cssText=o,n.appendChild(i).removeAttribute("id"),n}return null}});/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Jd=Ms`<iron-iconset-svg name="icons" size="24">
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
</iron-iconset-svg>`;document.head.appendChild(Jd.content);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nn=dt(class extends Rt{constructor(e){if(super(e),e.type!==et.PROPERTY&&e.type!==et.ATTRIBUTE&&e.type!==et.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Kr(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===j||t===mt)return t;const s=e.element,i=e.name;if(e.type===et.PROPERTY){if(t===s[i])return j}else if(e.type===et.BOOLEAN_ATTRIBUTE){if(!!t===s.hasAttribute(i))return j}else if(e.type===et.ATTRIBUTE&&s.getAttribute(i)===t+"")return j;return Wr(e),t}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tt=e=>e??mt,rn=St(class extends Ct{values;constructor(e,t,s,i){super(e,t),Object.assign(t.host,s),this.values=i}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((t,s)=>this.values[s]!==t)}}),ke=St(class extends Ct{update(){return this.state.host}}),Gd=/([A-Z])/gu,Pe=(e,t,s)=>{e[t]=s,e.dispatchEvent(new CustomEvent(t.replace(Gd,"-$1").toLowerCase()+"-changed",{detail:{value:s}}))},gp=(e,t,s=[t])=>{const i=ke();H(()=>{Pe(i,e,t)},s)},Ha=e=>{const t=xo(void 0),s=k(c=>t.current=c,[]),i=e.shadowRoot,n=k(c=>e.dispatchEvent(new Event(c.type,{bubbles:c.bubbles})),[]),r=k(c=>Pe(e,"value",c.target.value),[]),o=k(c=>Pe(e,"focused",c.type==="focus"),[]),a=k(()=>t.current?.focus(),[]),l=k(()=>{const c=t.current?.checkValidity();return e.toggleAttribute("invalid",!c),c},[]);return rn({focus:a,validate:l},[a,l]),H(()=>{const c=h=>{h.defaultPrevented||e.disabled||h.target.matches("input, textarea, label")||(h.preventDefault(),e.matches(":focus-within")||a())};return i.addEventListener("mousedown",c),()=>i.removeEventListener("mousedown",c)},[a]),{onChange:n,onFocus:o,onInput:r,onRef:s}},Xd=e=>A(()=>{if(e==null)return;const t=new RegExp(e,"u");return s=>{!s.defaultPrevented&&s.data&&!t.test(s.data)&&s.preventDefault()}},[e]),Ta=(e,{label:t,invalid:s,errorMessage:i})=>P`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
				${bt(t,()=>P`<label for="input" part="label">${t}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${bt(s&&i,()=>P`<div class="error" part="error">${i}</div>`)}
	`,Oa=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],Qd=({placeholder:e,noLabelFloat:t,label:s})=>(t?s:void 0)||e||" ",Zd=Math.abs,tu=(...e)=>e.some(t=>!!t),eu=(...e)=>e.join(""),su=(e,t,s)=>e?t:s,iu=(e,t)=>t.indexOf(e)>-1,nu=(e,t)=>e===t,ru=e=>!!(e==null||Array.isArray(e)&&e.length===0||typeof e=="string"&&e.length===0||typeof e=="number"&&e===0),ou=(e,t)=>typeof e!="number"?"":e.toFixed(t),_p=Object.freeze(Object.defineProperty({__proto__:null,abs:Zd,anyTrue:tu,concat:eu,ifElse:su,inArray:iu,isEmpty:ru,isEqual:nu,toFixed:ou},Symbol.toStringTag,{value:"Module"})),au={isoBasic:/^\d{4}-\d{2}-\d{2}$/iu},lu=e=>typeof e=="string"&&au.isoBasic.test(e)?new Date(`${e}T00:00`):new Date(e),vp=e=>{if(e==null)return;if(e instanceof Date&&!isNaN(e.getTime()))return e;if(!(typeof e=="number"||typeof e=="string"))return;const t=lu(e);if(!(t instanceof Date&&isNaN(t.getTime())))return t},ne=e=>e<10?"0"+e:e,yp=e=>e instanceof Date?e.getFullYear()+"-"+ne(e.getMonth()+1)+"-"+ne(e.getDate())+"T"+ne(e.getHours())+":"+ne(e.getMinutes())+":"+ne(e.getSeconds())+"."+(e.getMilliseconds()/1e3).toFixed(3).slice(2,5):null,on=(e,...t)=>e.flatMap((s,i)=>[s,t[i]??""]).join(""),an=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},bp=(e,t)=>{const s=class extends t{};return Object.assign(s.prototype,e),s},Aa=on`
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
`,cu=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...Oa],hu=e=>{const{type:t="text",pattern:s,allowedPattern:i,autocomplete:n,value:r,readonly:o,disabled:a,min:l,max:c,step:h,maxlength:d}=e,{onChange:u,onFocus:p,onInput:f,onRef:m}=Ha(e),g=Xd(i);return rn({focus:()=>e.shadowRoot?.querySelector("#input")?.focus()},[]),Ta(P`
			<input
				${Ot(m)}
				style="--chars: ${r?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${tt(s)}
				autocomplete=${tt(n)}
				placeholder=${Qd(e)}
				?readonly=${o}
				?aria-disabled=${a}
				?disabled=${a}
				.value=${nn(r??"")}
				maxlength=${tt(d)}
				@beforeinput=${g}
				@input=${f}
				@change=${u}
				@focus=${p}
				@blur=${p}
				min=${tt(l)}
				max=${tt(c)}
				step=${tt(h)}
			/>
		`,e)};customElements.define("cosmoz-input",Y(hu,{observedAttributes:cu,styleSheets:[Fi(Aa)]}));const gr=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},du=(e,t=0)=>{if(t>0){const s=e.getAttribute("rows")??"",i=e.style.height;e.style.height="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=i,e.setAttribute("rows",s)}},uu=e=>{const{value:t,maxRows:s}=e,i=A(()=>()=>e.shadowRoot.querySelector("#input"),[]);H(()=>du(i(),s),[s,i]),H(()=>gr(i()),[i,t]),H(()=>{const n=i(),r=new ResizeObserver(()=>requestAnimationFrame(()=>gr(n)));return r.observe(n),()=>r.unobserve(n)},[i])},pu=["rows","placeholder",...Oa],fu=e=>{const{autocomplete:t,value:s,placeholder:i,readonly:n,disabled:r,rows:o,cols:a,maxlength:l}=e,{onChange:c,onFocus:h,onInput:d,onRef:u}=Ha(e);return uu(e),Ta(P`
			<textarea id="input" part="input"
				${Ot(u)}
				autocomplete=${tt(t)}
				placeholder=${i||" "}
				rows=${o??1} cols=${tt(a)}
				?readonly=${n} ?aria-disabled=${r} ?disabled=${r}
				.value=${nn(s??"")} maxlength=${tt(l)} @input=${d}
				@change=${c} @focus=${h} @blur=${h}>`,e)};customElements.define("cosmoz-textarea",Y(fu,{observedAttributes:pu,styleSheets:[Fi(Aa)]}));const ve=Symbol("memo"),wp=e=>{let t=ve,s=ve,i;return function(n,r){if(t===n&&s===r)return i;const o=e(n,r);return i=o,t=n,s=r,o}},zp=e=>{let t=ve,s=ve,i=ve,n;return function(r,o,a){if(t===r&&s===o&&i===a)return n;const l=e(r,o,a);return n=l,t=r,s=o,i=a,l}},x=e=>typeof e=="string",re=()=>{let e,t;const s=new Promise((i,n)=>{e=i,t=n});return s.resolve=e,s.reject=t,s},_r=e=>e==null?"":""+e,mu=(e,t,s)=>{e.forEach(i=>{t[i]&&(s[i]=t[i])})},gu=/###/g,vr=e=>e&&e.indexOf("###")>-1?e.replace(gu,"."):e,yr=e=>!e||x(e),ye=(e,t,s)=>{const i=x(t)?t.split("."):t;let n=0;for(;n<i.length-1;){if(yr(e))return{};const r=vr(i[n]);!e[r]&&s&&(e[r]=new s),Object.prototype.hasOwnProperty.call(e,r)?e=e[r]:e={},++n}return yr(e)?{}:{obj:e,k:vr(i[n])}},br=(e,t,s)=>{const{obj:i,k:n}=ye(e,t,Object);if(i!==void 0||t.length===1){i[n]=s;return}let r=t[t.length-1],o=t.slice(0,t.length-1),a=ye(e,o,Object);for(;a.obj===void 0&&o.length;)r=`${o[o.length-1]}.${r}`,o=o.slice(0,o.length-1),a=ye(e,o,Object),a&&a.obj&&typeof a.obj[`${a.k}.${r}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${r}`]=s},_u=(e,t,s,i)=>{const{obj:n,k:r}=ye(e,t,Object);n[r]=n[r]||[],n[r].push(s)},ys=(e,t)=>{const{obj:s,k:i}=ye(e,t);if(s)return s[i]},vu=(e,t,s)=>{const i=ys(e,s);return i!==void 0?i:ys(t,s)},ka=(e,t,s)=>{for(const i in t)i!=="__proto__"&&i!=="constructor"&&(i in e?x(e[i])||e[i]instanceof String||x(t[i])||t[i]instanceof String?s&&(e[i]=t[i]):ka(e[i],t[i],s):e[i]=t[i]);return e},Dt=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var yu={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const bu=e=>x(e)?e.replace(/[&<>"'\/]/g,t=>yu[t]):e;class wu{constructor(t){this.capacity=t,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(t){const s=this.regExpMap.get(t);if(s!==void 0)return s;const i=new RegExp(t);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(t,i),this.regExpQueue.push(t),i}}const zu=[" ",",","?","!",";"],xu=new wu(20),Cu=(e,t,s)=>{t=t||"",s=s||"";const i=zu.filter(o=>t.indexOf(o)<0&&s.indexOf(o)<0);if(i.length===0)return!0;const n=xu.getRegExp(`(${i.map(o=>o==="?"?"\\?":o).join("|")})`);let r=!n.test(e);if(!r){const o=e.indexOf(s);o>0&&!n.test(e.substring(0,o))&&(r=!0)}return r},Hi=function(e,t){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!e)return;if(e[t])return e[t];const i=t.split(s);let n=e;for(let r=0;r<i.length;){if(!n||typeof n!="object")return;let o,a="";for(let l=r;l<i.length;++l)if(l!==r&&(a+=s),a+=i[l],o=n[a],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&l<i.length-1)continue;r+=l-r+1;break}n=o}return n},bs=e=>e&&e.replace("_","-"),Su={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console&&console[e]&&console[e].apply(console,t)}};class ws{constructor(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,s)}init(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=s.prefix||"i18next:",this.logger=t||Su,this.options=s,this.debug=s.debug}log(){for(var t=arguments.length,s=new Array(t),i=0;i<t;i++)s[i]=arguments[i];return this.forward(s,"log","",!0)}warn(){for(var t=arguments.length,s=new Array(t),i=0;i<t;i++)s[i]=arguments[i];return this.forward(s,"warn","",!0)}error(){for(var t=arguments.length,s=new Array(t),i=0;i<t;i++)s[i]=arguments[i];return this.forward(s,"error","")}deprecate(){for(var t=arguments.length,s=new Array(t),i=0;i<t;i++)s[i]=arguments[i];return this.forward(s,"warn","WARNING DEPRECATED: ",!0)}forward(t,s,i,n){return n&&!this.debug?null:(x(t[0])&&(t[0]=`${i}${this.prefix} ${t[0]}`),this.logger[s](t))}create(t){return new ws(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new ws(this.logger,t)}}var at=new ws;class Rs{constructor(){this.observers={}}on(t,s){return t.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const n=this.observers[i].get(s)||0;this.observers[i].set(s,n+1)}),this}off(t,s){if(this.observers[t]){if(!s){delete this.observers[t];return}this.observers[t].delete(s)}}emit(t){for(var s=arguments.length,i=new Array(s>1?s-1:0),n=1;n<s;n++)i[n-1]=arguments[n];this.observers[t]&&Array.from(this.observers[t].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a.apply(a,[t,...i])})}}class wr extends Rs{constructor(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=s,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const s=this.options.ns.indexOf(t);s>-1&&this.options.ns.splice(s,1)}getResource(t,s,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,o=n.ignoreJSONStructure!==void 0?n.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;t.indexOf(".")>-1?a=t.split("."):(a=[t,s],i&&(Array.isArray(i)?a.push(...i):x(i)&&r?a.push(...i.split(r)):a.push(i)));const l=ys(this.data,a);return!l&&!s&&!i&&t.indexOf(".")>-1&&(t=a[0],s=a[1],i=a.slice(2).join(".")),l||!o||!x(i)?l:Hi(this.data&&this.data[t]&&this.data[t][s],i,r)}addResource(t,s,i,n){let r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let a=[t,s];i&&(a=a.concat(o?i.split(o):i)),t.indexOf(".")>-1&&(a=t.split("."),n=s,s=a[1]),this.addNamespaces(s),br(this.data,a,n),r.silent||this.emit("added",t,s,i,n)}addResources(t,s,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const r in i)(x(i[r])||Array.isArray(i[r]))&&this.addResource(t,s,r,i[r],{silent:!0});n.silent||this.emit("added",t,s,i)}addResourceBundle(t,s,i,n,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},a=[t,s];t.indexOf(".")>-1&&(a=t.split("."),n=i,i=s,s=a[1]),this.addNamespaces(s);let l=ys(this.data,a)||{};o.skipCopy||(i=JSON.parse(JSON.stringify(i))),n?ka(l,i,r):l={...l,...i},br(this.data,a,l),o.silent||this.emit("added",t,s,i)}removeResourceBundle(t,s){this.hasResourceBundle(t,s)&&delete this.data[t][s],this.removeNamespaces(s),this.emit("removed",t,s)}hasResourceBundle(t,s){return this.getResource(t,s)!==void 0}getResourceBundle(t,s){return s||(s=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(t,s)}:this.getResource(t,s)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const s=this.getDataByLanguage(t);return!!(s&&Object.keys(s)||[]).find(n=>s[n]&&Object.keys(s[n]).length>0)}toJSON(){return this.data}}var Va={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,s,i,n){return e.forEach(r=>{this.processors[r]&&(t=this.processors[r].process(t,s,i,n))}),t}};const zr={};class zs extends Rs{constructor(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),mu(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=s,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=at.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const i=this.resolve(t,s);return i&&i.res!==void 0}extractFromKey(t,s){let i=s.nsSeparator!==void 0?s.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const n=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator;let r=s.ns||this.options.defaultNS||[];const o=i&&t.indexOf(i)>-1,a=!this.options.userDefinedKeySeparator&&!s.keySeparator&&!this.options.userDefinedNsSeparator&&!s.nsSeparator&&!Cu(t,i,n);if(o&&!a){const l=t.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:t,namespaces:x(r)?[r]:r};const c=t.split(i);(i!==n||i===n&&this.options.ns.indexOf(c[0])>-1)&&(r=c.shift()),t=c.join(n)}return{key:t,namespaces:x(r)?[r]:r}}translate(t,s,i){if(typeof s!="object"&&this.options.overloadTranslationOptionHandler&&(s=this.options.overloadTranslationOptionHandler(arguments)),typeof s=="object"&&(s={...s}),s||(s={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const n=s.returnDetails!==void 0?s.returnDetails:this.options.returnDetails,r=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,{key:o,namespaces:a}=this.extractFromKey(t[t.length-1],s),l=a[a.length-1],c=s.lng||this.language,h=s.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&c.toLowerCase()==="cimode"){if(h){const w=s.nsSeparator||this.options.nsSeparator;return n?{res:`${l}${w}${o}`,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(s)}:`${l}${w}${o}`}return n?{res:o,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(s)}:o}const d=this.resolve(t,s);let u=d&&d.res;const p=d&&d.usedKey||o,f=d&&d.exactUsedKey||o,m=Object.prototype.toString.apply(u),g=["[object Number]","[object Function]","[object RegExp]"],_=s.joinArrays!==void 0?s.joinArrays:this.options.joinArrays,v=!this.i18nFormat||this.i18nFormat.handleAsObject,b=!x(u)&&typeof u!="boolean"&&typeof u!="number";if(v&&u&&b&&g.indexOf(m)<0&&!(x(_)&&Array.isArray(u))){if(!s.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const w=this.options.returnedObjectHandler?this.options.returnedObjectHandler(p,u,{...s,ns:a}):`key '${o} (${this.language})' returned an object instead of string.`;return n?(d.res=w,d.usedParams=this.getUsedParamsDetails(s),d):w}if(r){const w=Array.isArray(u),z=w?[]:{},T=w?f:p;for(const C in u)if(Object.prototype.hasOwnProperty.call(u,C)){const R=`${T}${r}${C}`;z[C]=this.translate(R,{...s,joinArrays:!1,ns:a}),z[C]===R&&(z[C]=u[C])}u=z}}else if(v&&x(_)&&Array.isArray(u))u=u.join(_),u&&(u=this.extendTranslation(u,t,s,i));else{let w=!1,z=!1;const T=s.count!==void 0&&!x(s.count),C=zs.hasDefaultValue(s),R=T?this.pluralResolver.getSuffix(c,s.count,s):"",V=s.ordinal&&T?this.pluralResolver.getSuffix(c,s.count,{ordinal:!1}):"",$=T&&!s.ordinal&&s.count===0&&this.pluralResolver.shouldUseIntlApi(),D=$&&s[`defaultValue${this.options.pluralSeparator}zero`]||s[`defaultValue${R}`]||s[`defaultValue${V}`]||s.defaultValue;!this.isValidLookup(u)&&C&&(w=!0,u=D),this.isValidLookup(u)||(z=!0,u=o);const K=(s.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&z?void 0:u,N=C&&D!==u&&this.options.updateMissing;if(z||w||N){if(this.logger.log(N?"updateKey":"missingKey",c,l,o,N?D:u),r){const L=this.resolve(o,{...s,keySeparator:!1});L&&L.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let F=[];const Z=this.languageUtils.getFallbackCodes(this.options.fallbackLng,s.lng||this.language);if(this.options.saveMissingTo==="fallback"&&Z&&Z[0])for(let L=0;L<Z.length;L++)F.push(Z[L]);else this.options.saveMissingTo==="all"?F=this.languageUtils.toResolveHierarchy(s.lng||this.language):F.push(s.lng||this.language);const O=(L,I,pt)=>{const Ve=C&&pt!==u?pt:K;this.options.missingKeyHandler?this.options.missingKeyHandler(L,l,I,Ve,N,s):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(L,l,I,Ve,N,s),this.emit("missingKey",L,l,I,u)};this.options.saveMissing&&(this.options.saveMissingPlurals&&T?F.forEach(L=>{const I=this.pluralResolver.getSuffixes(L,s);$&&s[`defaultValue${this.options.pluralSeparator}zero`]&&I.indexOf(`${this.options.pluralSeparator}zero`)<0&&I.push(`${this.options.pluralSeparator}zero`),I.forEach(pt=>{O([L],o+pt,s[`defaultValue${pt}`]||D)})}):O(F,o,D))}u=this.extendTranslation(u,t,s,d,i),z&&u===o&&this.options.appendNamespaceToMissingKey&&(u=`${l}:${o}`),(z||w)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?u=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${o}`:o,w?u:void 0):u=this.options.parseMissingKeyHandler(u))}return n?(d.res=u,d.usedParams=this.getUsedParamsDetails(s),d):u}extendTranslation(t,s,i,n,r){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||n.usedLng,n.usedNS,n.usedKey,{resolved:n});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const c=x(t)&&(i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let h;if(c){const u=t.match(this.interpolator.nestingRegexp);h=u&&u.length}let d=i.replace&&!x(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(d={...this.options.interpolation.defaultVariables,...d}),t=this.interpolator.interpolate(t,d,i.lng||this.language||n.usedLng,i),c){const u=t.match(this.interpolator.nestingRegexp),p=u&&u.length;h<p&&(i.nest=!1)}!i.lng&&this.options.compatibilityAPI!=="v1"&&n&&n.res&&(i.lng=this.language||n.usedLng),i.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var u=arguments.length,p=new Array(u),f=0;f<u;f++)p[f]=arguments[f];return r&&r[0]===p[0]&&!i.context?(o.logger.warn(`It seems you are nesting recursively key: ${p[0]} in key: ${s[0]}`),null):o.translate(...p,s)},i)),i.interpolation&&this.interpolator.reset()}const a=i.postProcess||this.options.postProcess,l=x(a)?[a]:a;return t!=null&&l&&l.length&&i.applyPostProcessor!==!1&&(t=Va.handle(l,t,s,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...n,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),t}resolve(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,n,r,o,a;return x(t)&&(t=[t]),t.forEach(l=>{if(this.isValidLookup(i))return;const c=this.extractFromKey(l,s),h=c.key;n=h;let d=c.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const u=s.count!==void 0&&!x(s.count),p=u&&!s.ordinal&&s.count===0&&this.pluralResolver.shouldUseIntlApi(),f=s.context!==void 0&&(x(s.context)||typeof s.context=="number")&&s.context!=="",m=s.lngs?s.lngs:this.languageUtils.toResolveHierarchy(s.lng||this.language,s.fallbackLng);d.forEach(g=>{this.isValidLookup(i)||(a=g,!zr[`${m[0]}-${g}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&(zr[`${m[0]}-${g}`]=!0,this.logger.warn(`key "${n}" for languages "${m.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),m.forEach(_=>{if(this.isValidLookup(i))return;o=_;const v=[h];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(v,h,_,g,s);else{let w;u&&(w=this.pluralResolver.getSuffix(_,s.count,s));const z=`${this.options.pluralSeparator}zero`,T=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(u&&(v.push(h+w),s.ordinal&&w.indexOf(T)===0&&v.push(h+w.replace(T,this.options.pluralSeparator)),p&&v.push(h+z)),f){const C=`${h}${this.options.contextSeparator}${s.context}`;v.push(C),u&&(v.push(C+w),s.ordinal&&w.indexOf(T)===0&&v.push(C+w.replace(T,this.options.pluralSeparator)),p&&v.push(C+z))}}let b;for(;b=v.pop();)this.isValidLookup(i)||(r=b,i=this.getResource(_,g,b,s))}))})}),{res:i,usedKey:n,exactUsedKey:r,usedLng:o,usedNS:a}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,s,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(t,s,i,n):this.resourceStore.getResource(t,s,i,n)}getUsedParamsDetails(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const s=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=t.replace&&!x(t.replace);let n=i?t.replace:t;if(i&&typeof t.count<"u"&&(n.count=t.count),this.options.interpolation.defaultVariables&&(n={...this.options.interpolation.defaultVariables,...n}),!i){n={...n};for(const r of s)delete n[r]}return n}static hasDefaultValue(t){const s="defaultValue";for(const i in t)if(Object.prototype.hasOwnProperty.call(t,i)&&s===i.substring(0,s.length)&&t[i]!==void 0)return!0;return!1}}const si=e=>e.charAt(0).toUpperCase()+e.slice(1);class xr{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=at.create("languageUtils")}getScriptPartFromCode(t){if(t=bs(t),!t||t.indexOf("-")<0)return null;const s=t.split("-");return s.length===2||(s.pop(),s[s.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(s.join("-"))}getLanguagePartFromCode(t){if(t=bs(t),!t||t.indexOf("-")<0)return t;const s=t.split("-");return this.formatLanguageCode(s[0])}formatLanguageCode(t){if(x(t)&&t.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let n=Intl.getCanonicalLocales(t)[0];if(n&&this.options.lowerCaseLng&&(n=n.toLowerCase()),n)return n}catch{}const s=["hans","hant","latn","cyrl","cans","mong","arab"];let i=t.split("-");return this.options.lowerCaseLng?i=i.map(n=>n.toLowerCase()):i.length===2?(i[0]=i[0].toLowerCase(),i[1]=i[1].toUpperCase(),s.indexOf(i[1].toLowerCase())>-1&&(i[1]=si(i[1].toLowerCase()))):i.length===3&&(i[0]=i[0].toLowerCase(),i[1].length===2&&(i[1]=i[1].toUpperCase()),i[0]!=="sgn"&&i[2].length===2&&(i[2]=i[2].toUpperCase()),s.indexOf(i[1].toLowerCase())>-1&&(i[1]=si(i[1].toLowerCase())),s.indexOf(i[2].toLowerCase())>-1&&(i[2]=si(i[2].toLowerCase()))),i.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let s;return t.forEach(i=>{if(s)return;const n=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(n))&&(s=n)}),!s&&this.options.supportedLngs&&t.forEach(i=>{if(s)return;const n=this.getLanguagePartFromCode(i);if(this.isSupportedCode(n))return s=n;s=this.options.supportedLngs.find(r=>{if(r===n)return r;if(!(r.indexOf("-")<0&&n.indexOf("-")<0)&&(r.indexOf("-")>0&&n.indexOf("-")<0&&r.substring(0,r.indexOf("-"))===n||r.indexOf(n)===0&&n.length>1))return r})}),s||(s=this.getFallbackCodes(this.options.fallbackLng)[0]),s}getFallbackCodes(t,s){if(!t)return[];if(typeof t=="function"&&(t=t(s)),x(t)&&(t=[t]),Array.isArray(t))return t;if(!s)return t.default||[];let i=t[s];return i||(i=t[this.getScriptPartFromCode(s)]),i||(i=t[this.formatLanguageCode(s)]),i||(i=t[this.getLanguagePartFromCode(s)]),i||(i=t.default),i||[]}toResolveHierarchy(t,s){const i=this.getFallbackCodes(s||this.options.fallbackLng||[],t),n=[],r=o=>{o&&(this.isSupportedCode(o)?n.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return x(t)&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&r(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&r(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&r(this.getLanguagePartFromCode(t))):x(t)&&r(this.formatLanguageCode(t)),i.forEach(o=>{n.indexOf(o)<0&&r(this.formatLanguageCode(o))}),n}}let Mu=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],Eu={1:e=>+(e>1),2:e=>+(e!=1),3:e=>0,4:e=>e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2,5:e=>e==0?0:e==1?1:e==2?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5,6:e=>e==1?0:e>=2&&e<=4?1:2,7:e=>e==1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2,8:e=>e==1?0:e==2?1:e!=8&&e!=11?2:3,9:e=>+(e>=2),10:e=>e==1?0:e==2?1:e<7?2:e<11?3:4,11:e=>e==1||e==11?0:e==2||e==12?1:e>2&&e<20?2:3,12:e=>+(e%10!=1||e%100==11),13:e=>+(e!==0),14:e=>e==1?0:e==2?1:e==3?2:3,15:e=>e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2,16:e=>e%10==1&&e%100!=11?0:e!==0?1:2,17:e=>e==1||e%10==1&&e%100!=11?0:1,18:e=>e==0?0:e==1?1:2,19:e=>e==1?0:e==0||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3,20:e=>e==1?0:e==0||e%100>0&&e%100<20?1:2,21:e=>e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0,22:e=>e==1?0:e==2?1:(e<0||e>10)&&e%10==0?2:3};const Lu=["v1","v2","v3"],Pu=["v4"],Cr={zero:0,one:1,two:2,few:3,many:4,other:5},Hu=()=>{const e={};return Mu.forEach(t=>{t.lngs.forEach(s=>{e[s]={numbers:t.nr,plurals:Eu[t.fc]}})}),e};class Tu{constructor(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=s,this.logger=at.create("pluralResolver"),(!this.options.compatibilityJSON||Pu.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=Hu(),this.pluralRulesCache={}}addRule(t,s){this.rules[t]=s}clearCache(){this.pluralRulesCache={}}getRule(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const i=bs(t==="dev"?"en":t),n=s.ordinal?"ordinal":"cardinal",r=JSON.stringify({cleanedCode:i,type:n});if(r in this.pluralRulesCache)return this.pluralRulesCache[r];let o;try{o=new Intl.PluralRules(i,{type:n})}catch{if(!t.match(/-|_/))return;const l=this.languageUtils.getLanguagePartFromCode(t);o=this.getRule(l,s)}return this.pluralRulesCache[r]=o,o}return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]}needsPlural(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(t,s);return this.shouldUseIntlApi()?i&&i.resolvedOptions().pluralCategories.length>1:i&&i.numbers.length>1}getPluralFormsOfKey(t,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,i).map(n=>`${s}${n}`)}getSuffixes(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(t,s);return i?this.shouldUseIntlApi()?i.resolvedOptions().pluralCategories.sort((n,r)=>Cr[n]-Cr[r]).map(n=>`${this.options.prepend}${s.ordinal?`ordinal${this.options.prepend}`:""}${n}`):i.numbers.map(n=>this.getSuffix(t,n,s)):[]}getSuffix(t,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const n=this.getRule(t,i);return n?this.shouldUseIntlApi()?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${n.select(s)}`:this.getSuffixRetroCompatible(n,s):(this.logger.warn(`no plural rule found for: ${t}`),"")}getSuffixRetroCompatible(t,s){const i=t.noAbs?t.plurals(s):t.plurals(Math.abs(s));let n=t.numbers[i];this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1&&(n===2?n="plural":n===1&&(n=""));const r=()=>this.options.prepend&&n.toString()?this.options.prepend+n.toString():n.toString();return this.options.compatibilityJSON==="v1"?n===1?"":typeof n=="number"?`_plural_${n.toString()}`:r():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1?r():this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString()}shouldUseIntlApi(){return!Lu.includes(this.options.compatibilityJSON)}}const Sr=function(e,t,s){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,r=vu(e,t,s);return!r&&n&&x(s)&&(r=Hi(e,s,i),r===void 0&&(r=Hi(t,s,i))),r},ii=e=>e.replace(/\$/g,"$$$$");class Ou{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=at.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||(s=>s),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const{escape:s,escapeValue:i,useRawValueToEscape:n,prefix:r,prefixEscaped:o,suffix:a,suffixEscaped:l,formatSeparator:c,unescapeSuffix:h,unescapePrefix:d,nestingPrefix:u,nestingPrefixEscaped:p,nestingSuffix:f,nestingSuffixEscaped:m,nestingOptionsSeparator:g,maxReplaces:_,alwaysFormat:v}=t.interpolation;this.escape=s!==void 0?s:bu,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=n!==void 0?n:!1,this.prefix=r?Dt(r):o||"{{",this.suffix=a?Dt(a):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=h?"":d||"-",this.unescapeSuffix=this.unescapePrefix?"":h||"",this.nestingPrefix=u?Dt(u):p||Dt("$t("),this.nestingSuffix=f?Dt(f):m||Dt(")"),this.nestingOptionsSeparator=g||",",this.maxReplaces=_||1e3,this.alwaysFormat=v!==void 0?v:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=(s,i)=>s&&s.source===i?(s.lastIndex=0,s):new RegExp(i,"g");this.regexp=t(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=t(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=t(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(t,s,i,n){let r,o,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=p=>{if(p.indexOf(this.formatSeparator)<0){const _=Sr(s,l,p,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(_,void 0,i,{...n,...s,interpolationkey:p}):_}const f=p.split(this.formatSeparator),m=f.shift().trim(),g=f.join(this.formatSeparator).trim();return this.format(Sr(s,l,m,this.options.keySeparator,this.options.ignoreJSONStructure),g,i,{...n,...s,interpolationkey:m})};this.resetRegExp();const h=n&&n.missingInterpolationHandler||this.options.missingInterpolationHandler,d=n&&n.interpolation&&n.interpolation.skipOnVariables!==void 0?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:p=>ii(p)},{regex:this.regexp,safeValue:p=>this.escapeValue?ii(this.escape(p)):ii(p)}].forEach(p=>{for(a=0;r=p.regex.exec(t);){const f=r[1].trim();if(o=c(f),o===void 0)if(typeof h=="function"){const g=h(t,r,n);o=x(g)?g:""}else if(n&&Object.prototype.hasOwnProperty.call(n,f))o="";else if(d){o=r[0];continue}else this.logger.warn(`missed to pass in variable ${f} for interpolating ${t}`),o="";else!x(o)&&!this.useRawValueToEscape&&(o=_r(o));const m=p.safeValue(o);if(t=t.replace(r[0],m),d?(p.regex.lastIndex+=o.length,p.regex.lastIndex-=r[0].length):p.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),t}nest(t,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n,r,o;const a=(l,c)=>{const h=this.nestingOptionsSeparator;if(l.indexOf(h)<0)return l;const d=l.split(new RegExp(`${h}[ ]*{`));let u=`{${d[1]}`;l=d[0],u=this.interpolate(u,o);const p=u.match(/'/g),f=u.match(/"/g);(p&&p.length%2===0&&!f||f.length%2!==0)&&(u=u.replace(/'/g,'"'));try{o=JSON.parse(u),c&&(o={...c,...o})}catch(m){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,m),`${l}${h}${u}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,l};for(;n=this.nestingRegexp.exec(t);){let l=[];o={...i},o=o.replace&&!x(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let c=!1;if(n[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(n[1])){const h=n[1].split(this.formatSeparator).map(d=>d.trim());n[1]=h.shift(),l=h,c=!0}if(r=s(a.call(this,n[1].trim(),o),o),r&&n[0]===t&&!x(r))return r;x(r)||(r=_r(r)),r||(this.logger.warn(`missed to resolve ${n[1]} for nesting ${t}`),r=""),c&&(r=l.reduce((h,d)=>this.format(h,d,i.lng,{...i,interpolationkey:n[1].trim()}),r.trim())),t=t.replace(n[0],r),this.regexp.lastIndex=0}return t}}const Au=e=>{let t=e.toLowerCase().trim();const s={};if(e.indexOf("(")>-1){const i=e.split("(");t=i[0].toLowerCase().trim();const n=i[1].substring(0,i[1].length-1);t==="currency"&&n.indexOf(":")<0?s.currency||(s.currency=n.trim()):t==="relativetime"&&n.indexOf(":")<0?s.range||(s.range=n.trim()):n.split(";").forEach(o=>{if(o){const[a,...l]=o.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),h=a.trim();s[h]||(s[h]=c),c==="false"&&(s[h]=!1),c==="true"&&(s[h]=!0),isNaN(c)||(s[h]=parseInt(c,10))}})}return{formatName:t,formatOptions:s}},Ft=e=>{const t={};return(s,i,n)=>{let r=n;n&&n.interpolationkey&&n.formatParams&&n.formatParams[n.interpolationkey]&&n[n.interpolationkey]&&(r={...r,[n.interpolationkey]:void 0});const o=i+JSON.stringify(r);let a=t[o];return a||(a=e(bs(i),n),t[o]=a),a(s)}};class ku{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=at.create("formatter"),this.options=t,this.formats={number:Ft((s,i)=>{const n=new Intl.NumberFormat(s,{...i});return r=>n.format(r)}),currency:Ft((s,i)=>{const n=new Intl.NumberFormat(s,{...i,style:"currency"});return r=>n.format(r)}),datetime:Ft((s,i)=>{const n=new Intl.DateTimeFormat(s,{...i});return r=>n.format(r)}),relativetime:Ft((s,i)=>{const n=new Intl.RelativeTimeFormat(s,{...i});return r=>n.format(r,i.range||"day")}),list:Ft((s,i)=>{const n=new Intl.ListFormat(s,{...i});return r=>n.format(r)})},this.init(t)}init(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=s.interpolation.formatSeparator||","}add(t,s){this.formats[t.toLowerCase().trim()]=s}addCached(t,s){this.formats[t.toLowerCase().trim()]=Ft(s)}format(t,s,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=s.split(this.formatSeparator);if(r.length>1&&r[0].indexOf("(")>1&&r[0].indexOf(")")<0&&r.find(a=>a.indexOf(")")>-1)){const a=r.findIndex(l=>l.indexOf(")")>-1);r[0]=[r[0],...r.splice(1,a)].join(this.formatSeparator)}return r.reduce((a,l)=>{const{formatName:c,formatOptions:h}=Au(l);if(this.formats[c]){let d=a;try{const u=n&&n.formatParams&&n.formatParams[n.interpolationkey]||{},p=u.locale||u.lng||n.locale||n.lng||i;d=this.formats[c](a,p,{...h,...n,...u})}catch(u){this.logger.warn(u)}return d}else this.logger.warn(`there was no format function for ${c}`);return a},t)}}const Vu=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)};class Nu extends Rs{constructor(t,s,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=s,this.services=i,this.languageUtils=i.languageUtils,this.options=n,this.logger=at.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=n.maxParallelReads||10,this.readingCalls=0,this.maxRetries=n.maxRetries>=0?n.maxRetries:5,this.retryTimeout=n.retryTimeout>=1?n.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(i,n.backend,n)}queueLoad(t,s,i,n){const r={},o={},a={},l={};return t.forEach(c=>{let h=!0;s.forEach(d=>{const u=`${c}|${d}`;!i.reload&&this.store.hasResourceBundle(c,d)?this.state[u]=2:this.state[u]<0||(this.state[u]===1?o[u]===void 0&&(o[u]=!0):(this.state[u]=1,h=!1,o[u]===void 0&&(o[u]=!0),r[u]===void 0&&(r[u]=!0),l[d]===void 0&&(l[d]=!0)))}),h||(a[c]=!0)}),(Object.keys(r).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:n}),{toLoad:Object.keys(r),pending:Object.keys(o),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(t,s,i){const n=t.split("|"),r=n[0],o=n[1];s&&this.emit("failedLoading",r,o,s),!s&&i&&this.store.addResourceBundle(r,o,i,void 0,void 0,{skipCopy:!0}),this.state[t]=s?-1:2,s&&i&&(this.state[t]=0);const a={};this.queue.forEach(l=>{_u(l.loaded,[r],o),Vu(l,t),s&&l.errors.push(s),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{a[c]||(a[c]={});const h=l.loaded[c];h.length&&h.forEach(d=>{a[c][d]===void 0&&(a[c][d]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(t,s,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!t.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:s,fcName:i,tried:n,wait:r,callback:o});return}this.readingCalls++;const a=(c,h)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(c&&h&&n<this.maxRetries){setTimeout(()=>{this.read.call(this,t,s,i,n+1,r*2,o)},r);return}o(c,h)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const c=l(t,s);c&&typeof c.then=="function"?c.then(h=>a(null,h)).catch(a):a(null,c)}catch(c){a(c)}return}return l(t,s,a)}prepareLoading(t,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),n&&n();x(t)&&(t=this.languageUtils.toResolveHierarchy(t)),x(s)&&(s=[s]);const r=this.queueLoad(t,s,i,n);if(!r.toLoad.length)return r.pending.length||n(),null;r.toLoad.forEach(o=>{this.loadOne(o)})}load(t,s,i){this.prepareLoading(t,s,{},i)}reload(t,s,i){this.prepareLoading(t,s,{reload:!0},i)}loadOne(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=t.split("|"),n=i[0],r=i[1];this.read(n,r,"read",void 0,void 0,(o,a)=>{o&&this.logger.warn(`${s}loading namespace ${r} for language ${n} failed`,o),!o&&a&&this.logger.log(`${s}loaded namespace ${r} for language ${n}`,a),this.loaded(t,o,a)})}saveMissing(t,s,i,n,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(s)){this.logger.warn(`did not save key "${i}" as the namespace "${s}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if(this.backend&&this.backend.create){const l={...o,isUpdate:r},c=this.backend.create.bind(this.backend);if(c.length<6)try{let h;c.length===5?h=c(t,s,i,n,l):h=c(t,s,i,n),h&&typeof h.then=="function"?h.then(d=>a(null,d)).catch(a):a(null,h)}catch(h){a(h)}else c(t,s,i,n,a,l)}!t||!t[0]||this.store.addResource(t[0],s,i,n)}}}const Mr=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]=="object"&&(t=e[1]),x(e[1])&&(t.defaultValue=e[1]),x(e[2])&&(t.tDescription=e[2]),typeof e[2]=="object"||typeof e[3]=="object"){const s=e[3]||e[2];Object.keys(s).forEach(i=>{t[i]=s[i]})}return t},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Er=e=>(x(e.ns)&&(e.ns=[e.ns]),x(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),x(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e),je=()=>{},Ru=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(s=>{typeof e[s]=="function"&&(e[s]=e[s].bind(e))})};class He extends Rs{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Er(t),this.services={},this.logger=at,this.modules={external:[]},Ru(this),s&&!this.isInitialized&&!t.isClone){if(!this.options.initImmediate)return this.init(t,s),this;setTimeout(()=>{this.init(t,s)},0)}}init(){var t=this;let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof s=="function"&&(i=s,s={}),!s.defaultNS&&s.defaultNS!==!1&&s.ns&&(x(s.ns)?s.defaultNS=s.ns:s.ns.indexOf("translation")<0&&(s.defaultNS=s.ns[0]));const n=Mr();this.options={...n,...this.options,...Er(s)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...n.interpolation,...this.options.interpolation}),s.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=s.keySeparator),s.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=s.nsSeparator);const r=h=>h?typeof h=="function"?new h:h:null;if(!this.options.isClone){this.modules.logger?at.init(r(this.modules.logger),this.options):at.init(null,this.options);let h;this.modules.formatter?h=this.modules.formatter:typeof Intl<"u"&&(h=ku);const d=new xr(this.options);this.store=new wr(this.options.resources,this.options);const u=this.services;u.logger=at,u.resourceStore=this.store,u.languageUtils=d,u.pluralResolver=new Tu(d,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),h&&(!this.options.interpolation.format||this.options.interpolation.format===n.interpolation.format)&&(u.formatter=r(h),u.formatter.init(u,this.options),this.options.interpolation.format=u.formatter.format.bind(u.formatter)),u.interpolator=new Ou(this.options),u.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},u.backendConnector=new Nu(r(this.modules.backend),u.resourceStore,u,this.options),u.backendConnector.on("*",function(p){for(var f=arguments.length,m=new Array(f>1?f-1:0),g=1;g<f;g++)m[g-1]=arguments[g];t.emit(p,...m)}),this.modules.languageDetector&&(u.languageDetector=r(this.modules.languageDetector),u.languageDetector.init&&u.languageDetector.init(u,this.options.detection,this.options)),this.modules.i18nFormat&&(u.i18nFormat=r(this.modules.i18nFormat),u.i18nFormat.init&&u.i18nFormat.init(this)),this.translator=new zs(this.services,this.options),this.translator.on("*",function(p){for(var f=arguments.length,m=new Array(f>1?f-1:0),g=1;g<f;g++)m[g-1]=arguments[g];t.emit(p,...m)}),this.modules.external.forEach(p=>{p.init&&p.init(this)})}if(this.format=this.options.interpolation.format,i||(i=je),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const h=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);h.length>0&&h[0]!=="dev"&&(this.options.lng=h[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(h=>{this[h]=function(){return t.store[h](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(h=>{this[h]=function(){return t.store[h](...arguments),t}});const l=re(),c=()=>{const h=(d,u)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(u),i(d,u)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return h(null,this.t.bind(this));this.changeLanguage(this.options.lng,h)};return this.options.resources||!this.options.initImmediate?c():setTimeout(c,0),l}loadResources(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:je;const n=x(t)?t:this.language;if(typeof t=="function"&&(i=t),!this.options.resources||this.options.partialBundledLanguages){if(n&&n.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const r=[],o=a=>{if(!a||a==="cimode")return;this.services.languageUtils.toResolveHierarchy(a).forEach(c=>{c!=="cimode"&&r.indexOf(c)<0&&r.push(c)})};n?o(n):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>o(l)),this.options.preload&&this.options.preload.forEach(a=>o(a)),this.services.backendConnector.load(r,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(a)})}else i(null)}reloadResources(t,s,i){const n=re();return typeof t=="function"&&(i=t,t=void 0),typeof s=="function"&&(i=s,s=void 0),t||(t=this.languages),s||(s=this.options.ns),i||(i=je),this.services.backendConnector.reload(t,s,r=>{n.resolve(),i(r)}),n}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&Va.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let s=0;s<this.languages.length;s++){const i=this.languages[s];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(t,s){var i=this;this.isLanguageChangingTo=t;const n=re();this.emit("languageChanging",t);const r=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},o=(l,c)=>{c?(r(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,n.resolve(function(){return i.t(...arguments)}),s&&s(l,function(){return i.t(...arguments)})},a=l=>{!t&&!l&&this.services.languageDetector&&(l=[]);const c=x(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);c&&(this.language||r(c),this.translator.language||this.translator.changeLanguage(c),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(c)),this.loadResources(c,h=>{o(h,c)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(t),n}getFixedT(t,s,i){var n=this;const r=function(o,a){let l;if(typeof a!="object"){for(var c=arguments.length,h=new Array(c>2?c-2:0),d=2;d<c;d++)h[d-2]=arguments[d];l=n.options.overloadTranslationOptionHandler([o,a].concat(h))}else l={...a};l.lng=l.lng||r.lng,l.lngs=l.lngs||r.lngs,l.ns=l.ns||r.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||i||r.keyPrefix);const u=n.options.keySeparator||".";let p;return l.keyPrefix&&Array.isArray(o)?p=o.map(f=>`${l.keyPrefix}${u}${f}`):p=l.keyPrefix?`${l.keyPrefix}${u}${o}`:o,n.t(p,l)};return x(t)?r.lng=t:r.lngs=t,r.ns=s,r.keyPrefix=i,r}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=s.lng||this.resolvedLanguage||this.languages[0],n=this.options?this.options.fallbackLng:!1,r=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const o=(a,l)=>{const c=this.services.backendConnector.state[`${a}|${l}`];return c===-1||c===0||c===2};if(s.precheck){const a=s.precheck(this,o);if(a!==void 0)return a}return!!(this.hasResourceBundle(i,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(i,t)&&(!n||o(r,t)))}loadNamespaces(t,s){const i=re();return this.options.ns?(x(t)&&(t=[t]),t.forEach(n=>{this.options.ns.indexOf(n)<0&&this.options.ns.push(n)}),this.loadResources(n=>{i.resolve(),s&&s(n)}),i):(s&&s(),Promise.resolve())}loadLanguages(t,s){const i=re();x(t)&&(t=[t]);const n=this.options.preload||[],r=t.filter(o=>n.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return r.length?(this.options.preload=n.concat(r),this.loadResources(o=>{i.resolve(),s&&s(o)}),i):(s&&s(),Promise.resolve())}dir(t){if(t||(t=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!t)return"rtl";const s=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=this.services&&this.services.languageUtils||new xr(Mr());return s.indexOf(i.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;return new He(t,s)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:je;const i=t.forkResourceStore;i&&delete t.forkResourceStore;const n={...this.options,...t,isClone:!0},r=new He(n);return(t.debug!==void 0||t.prefix!==void 0)&&(r.logger=r.logger.clone(t)),["store","services","language"].forEach(a=>{r[a]=this[a]}),r.services={...this.services},r.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},i&&(r.store=new wr(this.store.data,n),r.services.resourceStore=r.store),r.translator=new zs(r.services,n),r.translator.on("*",function(a){for(var l=arguments.length,c=new Array(l>1?l-1:0),h=1;h<l;h++)c[h-1]=arguments[h];r.emit(a,...c)}),r.init(n,s),r.translator.options=n,r.translator.backendConnector.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},r}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const E=He.createInstance();E.createInstance=He.createInstance;E.createInstance;E.dir;E.init;E.loadResources;E.reloadResources;E.use;E.changeLanguage;E.getFixedT;E.t;E.exists;E.setDefaultNamespace;E.hasLoadedNamespace;E.loadNamespaces;E.loadLanguages;const ts=[],Is=()=>{E.isInitialized||E.init({lng:"en",resStore:{en:{}},fallbackLng:!1})},$s=e=>e.reduce((t,s,i)=>(t.count===void 0&&typeof s=="number"&&(t.count=s),typeof s=="object"?{...t,...s}:(t[i]=s,t)),{}),Lr=function(e){Is();const t=$s([...arguments].slice(1));return delete t.count,E.t(e,t)},Iu=function(e,t){Is();const s=$s([...arguments].slice(2)),i=s.count;let n;delete s.count;const r=E.services.pluralResolver.getSuffix(E.language,i);return r?(s.defaultValue=t,n=e+r):(n=e,s.defaultValue=e),E.t(n,s)},$u=function(e,t){Is();const s=$s([...arguments].slice(2));return s.context=e,delete s.count,E.t(t,s)},Du=function(e,t,s){Is();const i=$s([...arguments].slice(3)),n=i.count,r=e?"_"+e:"";let o=t;delete i.count;const a=E.services.pluralResolver.getSuffix(E.language,n);return a?(i.defaultValue=s,o=t+r+a):(o=t,i.context=e),E.t(o,i)},Fu=(e,t,s)=>{E.init({resources:{}}),E.addResourceBundle(e,t,s)},xp=W(e=>class extends e{static get properties(){return{t:{type:Object,value(){return{}}}}}_filterT(t){return t.filter(s=>s!==this.t)}_(){return Lr.apply(null,this._filterT([...arguments]))}connectedCallback(){super.connectedCallback(),ts.push(this)}disconnectedCallback(){super.disconnectedCallback();const t=ts.indexOf(this);t>=0&&ts.splice(t,1)}gettext(){return Lr.apply(null,this._filterT([...arguments]))}ngettext(){return Iu.apply(null,this._filterT([...arguments]))}pgettext(){return $u.apply(null,this._filterT([...arguments]))}npgettext(){return Du.apply(null,this._filterT([...arguments]))}});class Bu extends Es{static get properties(){return{compatibilityJSON:{type:String,value:"v3"},domain:{type:String,value:"messages"},interpolationPrefix:{type:String,value:"__"},interpolationSuffix:{type:String,value:"__"},language:{type:String,value:"en"},namespace:{type:String,value:"translation"},translations:{type:Object,observer(t){t!=null&&(Fu(this.language,this.namespace,t),ts.forEach(s=>s.set("t",{})))}},keySeparator:{type:String,value:"."},nsSeparator:{type:String,value:":"}}}ready(){super.ready(),E.init({compatibilityJSON:this.compatibilityJSON,interpolation:{escapeValue:!1,prefix:this.interpolationPrefix,suffix:this.interpolationSuffix},keySeparator:this.keySeparator,lng:this.language,nsSeparator:this.nsSeparator,resStore:{}})}}customElements.define("cosmoz-i18next",Bu);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cp=dt(class extends Rt{constructor(e){if(super(e),e.type!==et.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((i=>i!==""))));for(const i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}const s=e.element.classList;for(const i of this.st)i in t||(s.remove(i),this.st.delete(i));for(const i in t){const n=!!t[i];n===this.st.has(i)||this.nt?.has(i)||(n?(s.add(i),this.st.add(i)):(s.remove(i),this.st.delete(i)))}return j}}),ju=gt`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",Y(()=>mt,{styleSheets:[ju]}));/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Uu{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class qu{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise((t=>this.Z=t))}resume(){this.Z?.(),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pr=e=>!Za(e)&&typeof e.then=="function",Hr=1073741823;let Yu=class extends Ls{constructor(){super(...arguments),this._$Cwt=Hr,this._$Cbt=[],this._$CK=new Uu(this),this._$CX=new qu}render(...t){return t.find((s=>!Pr(s)))??j}update(t,s){const i=this._$Cbt;let n=i.length;this._$Cbt=s;const r=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<s.length&&!(a>this._$Cwt);a++){const l=s[a];if(!Pr(l))return this._$Cwt=a,l;a<n&&l===i[a]||(this._$Cwt=Hr,n=0,Promise.resolve(l).then((async c=>{for(;o.get();)await o.get();const h=r.deref();if(h!==void 0){const d=h._$Cbt.indexOf(l);d>-1&&d<h._$Cwt&&(h._$Cwt=d,h.setValue(c))}})))}return j}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const Ti=dt(Yu);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tr=(e,t,s)=>{const i=new Map;for(let n=t;n<=s;n++)i.set(e[n],n);return i},Ku=dt(class extends Rt{constructor(e){if(super(e),e.type!==et.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,s){let i;s===void 0?s=t:t!==void 0&&(i=t);const n=[],r=[];let o=0;for(const a of e)n[o]=i?i(a,o):o,r[o]=s(a,o),o++;return{values:r,keys:n}}render(e,t,s){return this.dt(e,t,s).values}update(e,[t,s,i]){const n=tl(e),{values:r,keys:o}=this.dt(t,s,i);if(!Array.isArray(n))return this.ut=o,r;const a=this.ut??=[],l=[];let c,h,d=0,u=n.length-1,p=0,f=r.length-1;for(;d<=u&&p<=f;)if(n[d]===null)d++;else if(n[u]===null)u--;else if(a[d]===o[p])l[p]=Et(n[d],r[p]),d++,p++;else if(a[u]===o[f])l[f]=Et(n[u],r[f]),u--,f--;else if(a[d]===o[f])l[f]=Et(n[d],r[f]),Zt(e,l[f+1],n[d]),d++,f--;else if(a[u]===o[p])l[p]=Et(n[u],r[p]),Zt(e,n[d],n[u]),u--,p++;else if(c===void 0&&(c=Tr(o,p,f),h=Tr(a,d,u)),c.has(a[d]))if(c.has(a[u])){const m=h.get(o[p]),g=m!==void 0?n[m]:null;if(g===null){const _=Zt(e,n[d]);Et(_,r[p]),l[p]=_}else l[p]=Et(g,r[p]),Zt(e,n[d],g),n[m]=null;p++}else Us(n[u]),u--;else Us(n[d]),d++;for(;p<=f;){const m=Zt(e,l[f+1]);Et(m,r[p]),l[p++]=m}for(;d<=u;){const m=n[d++];m!==null&&Us(m)}return this.ut=o,Wr(e,l),j}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ds extends Event{constructor(t){super(Ds.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}Ds.eventName="rangeChanged";class Fs extends Event{constructor(t){super(Fs.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}Fs.eventName="visibilityChanged";class Bs extends Event{constructor(){super(Bs.eventName,{bubbles:!1})}}Bs.eventName="unpinned";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Wu{constructor(t){this._element=null;const s=t??window;this._node=s,t&&(this._element=t)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class Ju extends Wu{constructor(t,s){super(s),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const i=this._node;this._originalScrollTo=i.scrollTo,this._originalScrollBy=i.scrollBy,this._originalScroll=i.scroll,this._attach(t)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(t,s){const i=typeof t=="number"&&typeof s=="number"?{left:t,top:s}:t;this._scrollTo(i)}scrollBy(t,s){const i=typeof t=="number"&&typeof s=="number"?{left:t,top:s}:t;i.top!==void 0&&(i.top+=this.scrollTop),i.left!==void 0&&(i.left+=this.scrollLeft),this._scrollTo(i)}_nativeScrollTo(t){this._originalScrollTo.bind(this._element||window)(t)}_scrollTo(t,s=null,i=null){this._end!==null&&this._end(),t.behavior==="smooth"?(this._setDestination(t),this._retarget=s,this._end=i):this._resetScrollState(),this._nativeScrollTo(t)}_setDestination(t){let{top:s,left:i}=t;return s=s===void 0?void 0:Math.max(0,Math.min(s,this.maxScrollTop)),i=i===void 0?void 0:Math.max(0,Math.min(i,this.maxScrollLeft)),this._destination!==null&&i===this._destination.left&&s===this._destination.top?!1:(this.__destination={top:s,left:i,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(t){this._destination&&this._setDestination(t)&&this._nativeScrollTo(this._destination)}managedScrollTo(t,s,i){return this._scrollTo(t,s,i),this._updateManagedScrollTo}correctScrollError(t){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(t),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:t,scrollLeft:s}=this;let{top:i,left:n}=this._destination;i=Math.min(i||0,this.maxScrollTop),n=Math.min(n||0,this.maxScrollLeft);const r=Math.abs(i-t),o=Math.abs(n-s);r<1&&o<1&&(this._end&&this._end(),this._resetScrollState())}}detach(t){return this._clients.delete(t),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(t){this._clients.add(t),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let Or=typeof window<"u"?window.ResizeObserver:void 0;const Oi=Symbol("virtualizerRef"),Ue="virtualizer-sizer";let Ar;class Gu{constructor(t){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!t)throw new Error("Virtualizer constructor requires a configuration object");if(t.hostElement)this._init(t);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(t){Array.isArray(t)&&t!==this._items&&(this._itemsChanged=!0,this._items=t,this._schedule(this._updateLayout))}_init(t){this._isScroller=!!t.scroller,this._initHostElement(t);const s=t.layout||{};this._layoutInitialized=this._initLayout(s)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new Or(()=>this._hostElementSizeChanged()),this._childrenRO=new Or(this._childrenSizeChanged.bind(this))}_initHostElement(t){const s=this._hostElement=t.hostElement;this._applyVirtualizerStyles(),s[Oi]=this}connected(){this._initObservers();const t=this._isScroller;this._clippingAncestors=Zu(this._hostElement,t),this._scrollerController=new Ju(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(t=>{t.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(t),this._hostElementRO.observe(t)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(t=>this._childrenRO.observe(t)),this._scrollEventListeners.forEach(t=>t.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(t=>t.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const s=this._hostElement.style;s.display=s.display||"block",s.position=s.position||"relative",s.contain=s.contain||"size layout",this._isScroller&&(s.overflow=s.overflow||"auto",s.minHeight=s.minHeight||"150px")}_getSizer(){const t=this._hostElement;if(!this._sizer){let s=t.querySelector(`[${Ue}]`);s||(s=document.createElement("div"),s.setAttribute(Ue,""),t.appendChild(s)),Object.assign(s.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),s.textContent="&nbsp;",s.setAttribute(Ue,""),this._sizer=s}return this._sizer}async updateLayoutConfig(t){await this._layoutInitialized;const s=t.type||Ar;if(typeof s=="function"&&this._layout instanceof s){const i={...t};return delete i.type,this._layout.config=i,!0}return!1}async _initLayout(t){let s,i;if(typeof t.type=="function"){i=t.type;const n={...t};delete n.type,s=n}else s=t;i===void 0&&(Ar=i=(await el(()=>import("./flow-Cd2WZlRY.js"),[],import.meta.url)).FlowLayout),this._layout=new i(n=>this._handleLayoutMessage(n),s),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const t=window.performance.now(),s=t-this._benchmarkStart,n=performance.getEntriesByName("uv-virtualizing","measure").filter(r=>r.startTime>=this._benchmarkStart&&r.startTime<t).reduce((r,o)=>r+o.duration,0);return this._benchmarkStart=null,{timeElapsed:s,virtualizationTime:n}}return null}_measureChildren(){const t={},s=this._children,i=this._measureChildOverride||this._measureChild;for(let n=0;n<s.length;n++){const r=s[n],o=this._first+n;(this._itemsChanged||this._toBeMeasured.has(r))&&(t[o]=i.call(this,r,this._items[o]))}this._childMeasurements=t,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(t){const{width:s,height:i}=t.getBoundingClientRect();return Object.assign({width:s,height:i},Xu(t))}async _schedule(t){this._scheduled.has(t)||(this._scheduled.add(t),await Promise.resolve(),this._scheduled.delete(t),t.call(this))}async _updateDOM(t){this._scrollSize=t.scrollSize,this._adjustRange(t.range),this._childrenPos=t.childPositions,this._scrollError=t.scrollError||null;const{_rangeChanged:s,_itemsChanged:i}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(s||i)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(t=>this._childrenRO.observe(t)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(t){console.warn("Error measuring performance data: ",t)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(t){switch(t.type){case"scroll":(t.currentTarget===window||this._clippingAncestors.includes(t.currentTarget))&&this._handleScrollEvent();break;default:console.warn("event not handled",t)}}_handleLayoutMessage(t){t.type==="stateChanged"?this._updateDOM(t):t.type==="visibilityChanged"?(this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._notifyVisibility()):t.type==="unpinned"&&this._hostElement.dispatchEvent(new Bs)}get _children(){const t=[];let s=this._hostElement.firstElementChild;for(;s;)s.hasAttribute(Ue)||t.push(s),s=s.nextElementSibling;return t}_updateView(){const t=this._hostElement,s=this._scrollerController?.element,i=this._layout;if(t&&s&&i){let n,r,o,a;const l=t.getBoundingClientRect();n=0,r=0,o=window.innerHeight,a=window.innerWidth;const c=this._clippingAncestors.map(_=>_.getBoundingClientRect());c.unshift(l);for(const _ of c)n=Math.max(n,_.top),r=Math.max(r,_.left),o=Math.min(o,_.bottom),a=Math.min(a,_.right);const h=s.getBoundingClientRect(),d={left:l.left-h.left,top:l.top-h.top},u={width:s.scrollWidth,height:s.scrollHeight},p=n-l.top+t.scrollTop,f=r-l.left+t.scrollLeft,m=Math.max(0,o-n),g=Math.max(0,a-r);i.viewportSize={width:g,height:m},i.viewportScroll={top:p,left:f},i.totalScrollSize=u,i.offsetWithinScroller=d}}_sizeHostElement(t){const i=t&&t.width!==null?Math.min(82e5,t.width):0,n=t&&t.height!==null?Math.min(82e5,t.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${i}px, ${n}px)`;else{const r=this._hostElement.style;r.minWidth=i?`${i}px`:"100%",r.minHeight=n?`${n}px`:"100%"}}_positionChildren(t){t&&t.forEach(({top:s,left:i,width:n,height:r,xOffset:o,yOffset:a},l)=>{const c=this._children[l-this._first];c&&(c.style.position="absolute",c.style.boxSizing="border-box",c.style.transform=`translate(${i}px, ${s}px)`,n!==void 0&&(c.style.width=n+"px"),r!==void 0&&(c.style.height=r+"px"),c.style.left=o===void 0?null:o+"px",c.style.top=a===void 0?null:a+"px")})}async _adjustRange(t){const{_first:s,_last:i,_firstVisible:n,_lastVisible:r}=this;this._first=t.first,this._last=t.last,this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==s||this._last!==i,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==n||this._lastVisible!==r}_correctScrollError(){if(this._scrollError){const{scrollTop:t,scrollLeft:s}=this._scrollerController,{top:i,left:n}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:t-i,left:s-n})}}element(t){return t===1/0&&(t=this._items.length-1),this._items?.[t]===void 0?void 0:{scrollIntoView:(s={})=>this._scrollElementIntoView({...s,index:t})}}_scrollElementIntoView(t){if(t.index>=this._first&&t.index<=this._last)this._children[t.index-this._first].scrollIntoView(t);else if(t.index=Math.min(t.index,this._items.length-1),t.behavior==="smooth"){const s=this._layout.getScrollIntoViewCoordinates(t),{behavior:i}=t;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(s,{behavior:i}),()=>this._layout.getScrollIntoViewCoordinates(t),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=t}else this._layout.pin=t}_checkScrollIntoViewTarget(t){const{index:s}=this._scrollIntoViewTarget||{};s&&t?.has(s)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new Ds({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new Fs({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((t,s)=>{this._layoutCompleteResolver=t,this._layoutCompleteRejecter=s})),this._layoutCompletePromise}_rejectLayoutCompletePromise(t){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(t),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(t){if(this._layout?.measureChildren){for(const s of t)this._toBeMeasured.set(s.target,s.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function Xu(e){const t=window.getComputedStyle(e);return{marginTop:qe(t.marginTop),marginRight:qe(t.marginRight),marginBottom:qe(t.marginBottom),marginLeft:qe(t.marginLeft)}}function qe(e){const t=e?parseFloat(e):NaN;return Number.isNaN(t)?0:t}function kr(e){if(e.assignedSlot!==null)return e.assignedSlot;if(e.parentElement!==null)return e.parentElement;const t=e.parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host||null}function Qu(e,t=!1){const s=[];let i=t?e:kr(e);for(;i!==null;)s.push(i),i=kr(i);return s}function Zu(e,t=!1){let s=!1;return Qu(e,t).filter(i=>{if(s)return!1;const n=getComputedStyle(i);return s=n.position==="fixed",n.overflow!=="visible"})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t2=e=>e,e2=(e,t)=>P`${t}: ${JSON.stringify(e,null,2)}`;class s2 extends Ls{constructor(t){if(super(t),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(s,i)=>e2(s,i+this._first),this._keyFunction=(s,i)=>t2(s,i+this._first),this._items=[],t.type!==et.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(t){t&&this._setFunctions(t);const s=[];if(this._first>=0&&this._last>=this._first)for(let i=this._first;i<=this._last;i++)s.push(this._items[i]);return Ku(s,this._keyFunction,this._renderItem)}update(t,[s]){this._setFunctions(s);const i=this._items!==s.items;return this._items=s.items||[],this._virtualizer?this._updateVirtualizerConfig(t,s):this._initialize(t,s),i?j:this.render()}async _updateVirtualizerConfig(t,s){if(!await this._virtualizer.updateLayoutConfig(s.layout||{})){const n=t.parentNode;this._makeVirtualizer(n,s)}this._virtualizer.items=this._items}_setFunctions(t){const{renderItem:s,keyFunction:i}=t;s&&(this._renderItem=(n,r)=>s(n,r+this._first)),i&&(this._keyFunction=(n,r)=>i(n,r+this._first))}_makeVirtualizer(t,s){this._virtualizer&&this._virtualizer.disconnected();const{layout:i,scroller:n,items:r}=s;this._virtualizer=new Gu({hostElement:t,layout:i,scroller:n}),this._virtualizer.items=r,this._virtualizer.connected()}_initialize(t,s){const i=t.parentNode;i&&i.nodeType===1&&(i.addEventListener("rangeChanged",n=>{this._first=n.first,this._last=n.last,this.setValue(this.render())}),this._makeVirtualizer(i,s))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const i2=dt(s2),n2=(e,t)=>{if(!e||!t)return;const s=Object.keys(t);return Object.fromEntries(Object.keys(e).flatMap(i=>s.includes(i)?[]:[[i,void 0]]))};class r2 extends Rt{_props;render(t){return j}update(t,[s]){return this._props!==s&&Object.assign(t.element,n2(this._props,s),this._props=s),j}}const o2=dt(r2),a2=e=>{const t=ke(),s=A(()=>new CSSStyleSheet,[]);H(()=>{t.shadowRoot.adoptedStyleSheets=[...t.shadowRoot.adoptedStyleSheets,s]},[]),H(()=>{s.replaceSync(e)},[e])};function Na(e){return e?t=>t?.[e]:Kt}const l2=e=>{const t=Na(e);return s=>typeof s=="string"?s:t(s)?.toString()||""},c2=e=>t=>{const s={};for(const i in t)e.includes(i)&&(s[i]=t[i]);return s},h2="data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1L5.20039 7.04766L1.66348 3.46152' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",d2=gt`
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
`,u2=({index:e,itemHeight:t,auto:s})=>gt`
	${bt(!s,()=>gt`
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
`,p2=e=>typeof e=="object"&&e!==null&&Symbol.iterator in e;function Nt(e){return e==null?[]:Array.isArray(e)?e:typeof e=="string"?[e]:p2(e)?Array.from(e):[e]}const ni=(e,t=Kt)=>s=>{const i=Nt(e).map(t);return Nt(s).filter(n=>!i.includes(t(n)))},f2=(e,t)=>t?s=>Nt(e).find(i=>i[t]===s[t]):s=>Nt(e).includes(s),m2=(e,t)=>{if(!t||!e)return e;const s=e.toLowerCase().indexOf(t.toLowerCase());if(s<0)return e;const i=s+t.length;return[e.slice(0,s),P`<mark>${e.slice(s,i)}</mark>`,e.slice(i)]},g2=e=>{const t=Xt(e);H(()=>{const s=i=>{if(!(i.ctrlKey&&i.altKey||i.defaultPrevented))switch(i.key){case"Up":case"ArrowUp":i.preventDefault(),t.onUp();break;case"Down":case"ArrowDown":i.preventDefault(),t.onDown();break;case"Enter":i.preventDefault(),t.onEnter();break}};return document.addEventListener("keydown",s,!0),()=>document.removeEventListener("keydown",s,!0)},[t])},_2=({items:e,onSelect:t,defaultIndex:s=0})=>{const[i,n]=lt({index:s}),{index:r}=i,{length:o}=e;return H(()=>{n({index:i.index<0?s:Math.min(i.index,e.length-1),scroll:!0})},[e,s]),g2({onUp:k(()=>n(a=>({index:a.index>0?a.index-1:o-1,scroll:!0})),[o]),onDown:k(()=>n(a=>({index:a.index<o-1?a.index+1:0,scroll:!0})),[o]),onEnter:k(()=>r>-1&&r<o&&t?.(e[r],r),[r,e,t])}),{position:i,highlight:k(a=>n({index:a}),[]),select:k(a=>t?.(a),[t])}},v2=(e=Kt)=>(t,s,{highlight:i,select:n,textual:r=Kt,query:o,isSelected:a})=>{const l=r(t),c=m2(l,o),h=e(c,t,s);return P`<div
				class="item"
				role="option"
				part="option"
				?aria-selected=${a(t)}
				data-index=${s}
				@mouseenter=${()=>i(s)}
				@click=${()=>n(t)}
				@mousedown=${d=>d.preventDefault()}
				title=${l}
			>
				${h}
			</div>
			<div class="sizer" virtualizer-sizer>${h}</div>`},y2=({itemRenderer:e=v2(),...t})=>{const s=Xt(t);return k((i,n)=>e(i,n,s),[s,e])},b2=e=>{const t=e==="auto",[s,i]=lt(t?40:e);return[s,n=>t?i(n):void 0]},w2=["query","items","onSelect","textual","anchor","itemHeight","itemLimit","itemRenderer","defaultIndex","value","valueProperty","loading"],z2=({value:e,valueProperty:t,items:s,onSelect:i,defaultIndex:n,query:r,textual:o,itemRenderer:a,itemHeight:l=40,itemLimit:c=5})=>{const h=A(()=>f2(e,t),[e,t]),d=A(()=>s.slice(),[s,h]),{position:u,highlight:p,select:f}=_2({items:d,onSelect:i,defaultIndex:isNaN(n)?void 0:Number(n)}),[m,g]=b2(l);return{position:u,items:d,height:Math.min(c,d.length)*m,highlight:p,select:f,itemHeight:m,setItemHeight:g,renderItem:y2({itemRenderer:a,items:d,position:u,highlight:p,select:f,textual:o,query:r,isSelected:h})}},Vr=Mo,x2=e=>{const t=xo(void 0),{position:s,items:i,renderItem:n,height:r,itemHeight:o,setItemHeight:a}=z2(e);return H(()=>{const l=t.current?.[Oi];l&&l.layoutComplete.then(()=>{e.dispatchEvent(new CustomEvent("layout-complete"));const{averageChildSize:c,averageMarginSize:h}=l._layout._metricsCache;return a(c+h*2)},Vr)},[i]),H(()=>{if(!s.scroll)return;const l=t.current?.[Oi];if(l){if(!l?._layout){l.layoutComplete.then(()=>l.element(s.index)?.scrollIntoView({block:"nearest"}),Vr);return}l.element(s.index)?.scrollIntoView({block:"nearest"})}},[s]),a2(u2({...s,itemHeight:o,auto:e.itemHeight==="auto"})),P`<div
			class="items"
			style="min-height: ${r}px"
			${Ot(l=>t.current=l)}
		>
			<div virtualizer-sizer></div>
			${i2({items:i,renderItem:n,scroller:!0})}
		</div>
		<slot></slot>`};customElements.define("cosmoz-listbox",Oo(Y(x2,{styleSheets:[an(d2)]})));const C2=({multi:e,setFloating:t,styles:s,...i},n)=>P`<cosmoz-listbox
		style="${Ho(s)}"
		@connected="${r=>r.target.showPopover?.()}"
		popover="manual"
		part="listbox"
		?multi=${e}
		${Ot(t)}
		...=${o2(c2(w2)(i))}
		>${n}</cosmoz-listbox
	>`,S2=on`
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
`,M2=P`
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
`,E2=({onClear:e,disabled:t})=>P`
	<div class="content" part="content chip-text"><slot></slot></div>
	${bt(e&&!t,()=>P`<span
				class="clear"
				part="clear chip-clear"
				@mousedown=${s=>s.preventDefault()}
				@click=${e}
			>
				${M2}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",Y(E2,{observedAttributes:["disabled"],styleSheets:[an(S2)]}));const Nr=({content:e,onClear:t,disabled:s,hidden:i,className:n="chip",slot:r})=>P`<cosmoz-autocomplete-chip
		class=${tt(n)}
		slot=${tt(r)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${s}
		?hidden=${i}
		.onClear=${t}
		title=${tt(typeof e=="string"?e:void 0)}
		>${e}</cosmoz-autocomplete-chip
	>`,L2=({value:e,min:t=0,onDeselect:s,textual:i,disabled:n})=>[...e.filter(Boolean).map(r=>Nr({content:i(r),onClear:e.length>t&&(()=>s(r)),disabled:n,slot:"control"})),Nr({content:P`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],P2=on`
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
`,H2=({focused:e,empty:t,...s})=>{const i=e&&t&&s.limit!==1,n=Xt(s);H(()=>{if(!i)return;const r=o=>{if(o.defaultPrevented)return;const{key:a}=o,l=Nt(n.value),c=n.limit==1;if(l.length>0&&(a==="Backspace"||c&&a.length===1))return n.onChange(l.slice(0,-1))};return document.addEventListener("keydown",r,!0),()=>document.removeEventListener("keydown",r,!0)},[i,n])},Rr=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),T2=(e,t,s)=>{if(!t)return e;const i=Rr(t.toLowerCase()),n=[];for(const r of e){const a=Rr(s(r).toLowerCase()).indexOf(i);a<0||n.push({item:r,index:a})}return n.sort((r,o)=>r.index-o.index).map(({item:r})=>r)},O2=e=>e===!1||e==null?[]:e,Ra=(e,t,s)=>e.dispatchEvent(new CustomEvent(t,{detail:s})),A2=(e,t,s)=>k(i=>{t?.(i),Ra(e,s,i)},[t]),k2=[],V2=e=>(...t)=>{let s;const i=()=>{s&&cancelAnimationFrame(s)};return i(),s=requestAnimationFrame(()=>{s=void 0,e(...t)}),i},ln=(e,t=()=>({}))=>{const s={type:e,toString(){return e}};return Object.assign((...n)=>Object.assign(t(...n),s),s)},Ir=e=>e.type||e.toString(),$r=e=>Array.isArray(e)?e:[e],N2=(e,t)=>{const s=$r(t),i=(s.every(Array.isArray)?s:[s]).map(([n,r])=>({actions:$r(n).map(Ir),handle:r}));return(n=e,r)=>{const o=i.find(a=>a.actions.includes(Ir(r)));return o?o.handle(n,r):n}},Tt={pending:"pending",rejected:"rejected",resolved:"resolved"},Ia={error:void 0,result:void 0,state:Tt.pending},$a=ln(Tt.pending),Da=ln(Tt.resolved,e=>({result:e})),Fa=ln(Tt.rejected,e=>({error:e})),R2=N2(Ia,[[$a,()=>({error:void 0,result:void 0,state:Tt.pending})],[Da,(e,{result:t})=>({error:void 0,result:t,state:Tt.resolved})],[Fa,(e,{error:t})=>({error:t,result:void 0,state:Tt.rejected})]]),I2=e=>{const[{error:t,result:s,state:i},n]=$c(R2,Ia);return H(()=>{if(!e)return;let r=!1;return n($a()),e.then(o=>!r&&n(Da(o)),o=>!r&&n(Fa(o))),()=>{r=!0}},[e]),[s,t,i]},$2=({value:e,text:t,onChange:s,onText:i,onSelect:n,limit:r,min:o,source:a,textProperty:l,textual:c,valueProperty:h,keepOpened:d,keepQuery:u,preserveOrder:p,defaultIndex:f,externalSearch:m,...g})=>{const _=A(()=>(c??l2)(l),[c,l]),{active:v,focused:b,onFocus:w,setClosed:z}=Lo(g),T=!t,C=A(()=>t?.trim(),[t]),R=ke(),V=A2(R,i,"text"),$=k(O=>{s?.(O,()=>z(!0)),Ra(R,"value",O)},[s]),[D,rt]=lt([]),K=A(()=>Promise.resolve(typeof a=="function"?a({query:C,active:v}):a).then(O2),[a,v,C]),N=A(()=>Nt(e),[e]);H(()=>K.then(rt),[K]),H2({focused:b,empty:T,limit:r,value:N,onChange:$,onText:V}),H(()=>{b||V("")},[b]);const F=Xt({onText:V,onChange:$,value:N,limit:r,min:o,keepQuery:u,keepOpened:d,setClosed:z,onSelect:n}),[,,Z]=I2(K);return{active:v,query:C,textual:_,value:N,source$:K,loading:Z==="pending",items:A(()=>{if(!v)return k2;const O=p?D:[...N,...ni(N,Na(h))(D)];return m?O:T2(O,C,_)},[D,v,C,_,T,N,p,h,m]),onClick:k(()=>z(!1),[]),onFocus:w,onText:k(O=>{V(O.target.value),z(!1)},[V,t,z]),onSelect:k(O=>{F.onSelect?.(O,F);const{onChange:L,onText:I,limit:pt,min:Ve,value:Wa,keepQuery:Ja,keepOpened:Ga,setClosed:Xa}=F;Ja||I(""),Ga||Xa(!0);const Ne=Nt(Wa),cn=Ne.includes(O);cn&&Ne.length===Ve||L((cn?ni(O)(Ne):[...Ne,O]).slice(-pt))},[F]),onDeselect:k(O=>F.onChange(ni(O)(F.value)),[F]),defaultIndex:C!==void 0&&C?.length>0?0:f}},D2=e=>{const t=e.shadowRoot.querySelectorAll(".chip"),s=e.shadowRoot.querySelector(".badge");s.hidden=!0;for(const a of t)a.hidden=!1;const n=e.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let r;for(r=0;r<t.length;r++){const l=t[r].getBoundingClientRect();if(!(l.x+l.width<=n.x+n.width-24))break}const o=t.length-r;for(s.querySelector("span").textContent="+"+o.toString(),s.hidden=o<1;r<t.length;r++)t[r].hidden=!0},F2=({value:e,active:t,wrap:s,limit:i})=>{const n=ke(),r=!(s||i==1),o=A(()=>V2(()=>D2(n)),[]),[a,l]=lt(0);fi(()=>{if(!r)return;const c=n.shadowRoot.querySelector("cosmoz-input"),h=new ResizeObserver(d=>{l(d[0].contentRect.width)});return h.observe(c),()=>h.disconnect()},[r]),fi(()=>r?o():void 0,[r,a,t,e])},B2=["input","control","label","line","error","wrap"].map(e=>`${e}: input-${e}`).join(),j2=[K1({apply({rects:e,elements:t}){Object.assign(t.floating.style,{minWidth:`${Math.max(e.reference.width,e.floating.width)}px`})}}),...Uo],U2=({active:e,loading:t,items:s,text:i,isSingle:n,showSingle:r})=>e?(t||s.length>0||i!=null&&i.length>0)&&!(n&&!r):!1,q2=e=>{const{active:t,invalid:s,errorMessage:i,label:n,placeholder:r,disabled:o,noLabelFloat:a,alwaysFloatLabel:l,textual:c,text:h,onText:d,onFocus:u,onClick:p,onDeselect:f,value:m,limit:g,min:_,showSingle:v,items:b,source$:w,placement:z,loading:T}=e,C=ke(),R=g==1,V=R&&m?.[0]!=null,{styles:$,setReference:D,setFloating:rt}=qo({placement:z,middleware:j2});return H(()=>(C.addEventListener("focusin",u),C.addEventListener("focusout",u),()=>{C.removeEventListener("focusin",u),C.removeEventListener("focusout",u)}),[u]),rn({focus:()=>C.shadowRoot?.querySelector("#input")?.focus()},[]),P`<cosmoz-input
				id="input"
				part="input"
				${Ot(D)}
				.label=${n}
				.placeholder=${V?void 0:r}
				?no-label-float=${a}
				?always-float-label=${m?.length>0||l}
				?readonly=${V}
				?disabled=${o}
				?invalid=${Ti(w.then(()=>s,()=>!0),s)}
				.errorMessage=${Ti(w.then(()=>i,K=>K.message),i)}
				.value=${nn(h)}
				@value-changed=${d}
				@click=${p}
				autocomplete="off"
				exportparts=${B2}
				?data-one=${R}
				?data-single=${V}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${L2({value:m,min:_,onDeselect:f,textual:c,disabled:o})}
			</cosmoz-input>

			${bt(U2({active:t,loading:T,items:b,text:h,isSingle:V,showSingle:v}),()=>C2({...e,items:b,multi:!R,setFloating:rt,styles:$},bt(T,()=>P`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>bt(h!=null&&h.length>0&&b.length===0,()=>P`<slot name="no-result"></slot>`))))}`},Ba=e=>{const t={...e,...$2(e)};return F2(t),q2(t)},ja=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap"],Y2=e=>{const{onChange:t,onText:s,...i}=e;return Ba({...i,onChange:k((n,...r)=>{e.value=n,t?.(n,...r)},[t]),onText:k(n=>{e.text=n,s?.(n)},[s])})},Ua=[an(P2)];customElements.define("cosmoz-autocomplete-ui",Y(Ba,{observedAttributes:ja,styleSheets:Ua}));customElements.define("cosmoz-autocomplete",Y(Y2,{observedAttributes:ja,styleSheets:Ua}));const K2=gt`
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
`,W2=()=>mt,J2=Y(W2,{styleSheets:[K2]});customElements.define("cosmoz-spinner",J2);const qa=["T"," "],Dr=e=>{if(!e||typeof e!="string")return;let t;return qa.some(s=>e.match(s)?(t=e.split(s),!0):!1),t||[e]},G2=(e,t)=>{const s=Dr(e),i=Dr(t);return{minDate:Array.isArray(s)?s.shift():null,minTime:Array.isArray(s)?s.shift():null,maxDate:Array.isArray(i)?i.shift():null,maxTime:Array.isArray(i)?i.shift():null}},Fr=(e,t)=>{if(!(!e&&!t))return!e&&t?`T${t}`:e&&!t?e:`${e}T${t}`},X2=e=>{if(e){for(const t of qa)if(e.match(t)){const s=e.split(t);return{date:s.shift(),time:s.shift()}}return{date:e}}},Q2=e=>{const{dateLabel:t,timeLabel:s,min:i,max:n,step:r="1",value:o}=e,{minDate:a,maxDate:l,minTime:c,maxTime:h}=A(()=>G2(i,n),[i,n]),{date:d,time:u}=A(()=>X2(o)??{},[o]);return H(()=>{e.dispatchEvent(new CustomEvent("cosmoz-datetime-input-value-changed",{bubbles:!0,composed:!0}))},[o]),P`
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
			@value-changed="${p=>Pe(e,"value",Fr(p.target.value,u))}"
			.min="${a}"
			.max="${l}"
		></cosmoz-input>
		<cosmoz-input
			label="${s}"
			type="time"
			.value="${u}"
			@value-changed="${p=>Pe(e,"value",Fr(d,p.target.value))}"
			step="${r}"
			.min="${c}"
			.max="${h}"
		></cosmoz-input>
	`};customElements.define("cosmoz-datetime-input",Y(Q2,{observedAttributes:["date-label","time-label","min","max","step"]}));const Z2=e=>t=>{const s=t.match(e);return s&&{result:s,url:new URL(t,document.location.origin)}},tp=(e,t)=>{for(const s of e){const i=s.rule,n=typeof i=="function"?i(t):Z2(i)(t);if(n)return{...s,route:s,match:n,url:t}}},Br=()=>window.location.href.replace(window.location.origin,""),ep=()=>{const[e,t]=lt(Br);return H(()=>{const s=()=>t(Br);return window.addEventListener("popstate",s),()=>window.removeEventListener("popstate",s)},[t]),e},sp=e=>{const t=ep();return A(()=>tp(e,t),[e,t])},Mp=(e,t=null,{notify:s=!0,replace:i=!0}={})=>{(i?history.replaceState:history.pushState).call(history,t,"",e),s&&queueMicrotask(()=>window.dispatchEvent(new CustomEvent("popstate",{bubbles:!1})))},ip=e=>{const t=sp(e);return{route:t,result:A(()=>{if(t){const{handle:s,...i}=t;return s(i)}},[t])}},Ye=(e,t,s)=>e.dispatchEvent(new CustomEvent(t,{bubbles:!1,cancelable:!1,composed:!0,...s})),np=(e,t,s)=>{H(()=>{if(!s){Ye(e,"route-not-found");return}Ye(e,"route-loading",{detail:t}),Promise.resolve(s).then(()=>Ye(e,"route-loaded",{detail:t})).catch(i=>Ye(e,"route-error",{detail:{route:t,error:i}}))},[s])},rp=e=>{const t=e.routes,{route:s,result:i}=ip(t);return np(e,s,i),To([i],()=>Ti(Promise.resolve(i).catch(()=>mt),mt))};customElements.define("cosmoz-router",Y(rp));const Ya=()=>new URL(location.hash.replace(/^#!?/iu,"").replace("%23","#"),location.origin),Ep=(e,t=Kt)=>{const s=new URLSearchParams(Ya().hash.replace("#","")).getAll(e);switch(s.length){case 0:return;case 1:return t(s[0]);default:return s.map(t)}},Lp=(e,t=Kt)=>{const s=Array.from(new URLSearchParams(Ya().hash.replace("#","")).entries()).filter(([i])=>i.startsWith(e)).map(([i,n])=>t([i.replace(e,""),n])).filter(([,i])=>i!=null);return Object.fromEntries(s)};var ot=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:void 0;function op(e,t){return typeof t>"u"?t={autoBom:!1}:typeof t!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\uFEFF",e],{type:e.type}):e}function ri(e,t,s){var i=new XMLHttpRequest;i.open("GET",e),i.responseType="blob",i.onload=function(){Ai(i.response,t,s)},i.onerror=function(){console.error("could not download file")},i.send()}function jr(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch{}return t.status>=200&&t.status<=299}function Ke(e){try{e.dispatchEvent(new MouseEvent("click"))}catch{var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var Ur=ot.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),Ai=ot.saveAs||(typeof window!="object"||window!==ot?function(){}:"download"in HTMLAnchorElement.prototype&&!Ur?function(t,s,i){var n=ot.URL||ot.webkitURL,r=document.createElement("a");s=s||t.name||"download",r.download=s,r.rel="noopener",typeof t=="string"?(r.href=t,r.origin!==location.origin?jr(r.href)?ri(t,s,i):Ke(r,r.target="_blank"):Ke(r)):(r.href=n.createObjectURL(t),setTimeout(function(){n.revokeObjectURL(r.href)},4e4),setTimeout(function(){Ke(r)},0))}:"msSaveOrOpenBlob"in navigator?function(t,s,i){if(s=s||t.name||"download",typeof t=="string")if(jr(t))ri(t,s,i);else{var n=document.createElement("a");n.href=t,n.target="_blank",setTimeout(function(){Ke(n)})}else navigator.msSaveOrOpenBlob(op(t,i),s)}:function(t,s,i,n){if(n=n||open("","_blank"),n&&(n.document.title=n.document.body.innerText="downloading..."),typeof t=="string")return ri(t,s,i);var r=t.type==="application/octet-stream",o=/constructor/i.test(ot.HTMLElement)||ot.safari,a=/CriOS\/[\d]+/.test(navigator.userAgent);if((a||r&&o||Ur)&&typeof FileReader<"u"){var l=new FileReader;l.onloadend=function(){var d=l.result;d=a?d:d.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=d:location=d,n=null},l.readAsDataURL(t)}else{var c=ot.URL||ot.webkitURL,h=c.createObjectURL(t);n?n.location=h:location.href=h,n=null,setTimeout(function(){c.revokeObjectURL(h)},4e4)}});ot.saveAs=Ai.saveAs=Ai;const es=function(e){e&&console.log(e)};class Ka{constructor(t,s){this._filename=t,this.buffer=null,this.lastDownloadBlobUrl=null,this._mimeType=s}generate(){}createDownloadUrl(){this.buffer||this.generate();const t=new Blob([this.buffer],{type:this._mimeType});return this.lastDownloadBlobUrl&&window.URL.revokeObjectURL(this.lastDownloadBlobUrl),this.lastDownloadBlobUrl=URL.createObjectURL(t),this.lastDownloadBlobUrl}createDownloadLink(t){const s=t instanceof HTMLAnchorElement?t:document.createElement("a");return typeof t=="string"&&(s.innerHTML=t),s.href=this.createDownloadUrl(),s.download=this._filename,s.hasChildNodes||(s.innerText=this._filename),es("Link created for file "+this._filename),s}}let We=null;class ap extends Ka{constructor(t,s){super(t,"application/zip"),this.files=[],this.createFolderEntries=!!s;const i=new Date;this.timeInt=Math.round(i.getSeconds()/2)|i.getMinutes()<<5|i.getHours()<<11,this.dateInt=i.getFullYear()-1980<<9|i.getMonth()+1<<5|i.getDate()}addFileFromString(t,s){const i=new TextEncoder("utf-8").encode(s);return this.addFileFromUint8Array(t,i),this}addFileFromUint8Array(t,s){if(!(s instanceof Uint8Array))throw new Error("invalid parameter");return this.files.push({name:t.replace("\\","/"),data:s}),this}generate(){es("NullZip archive generation started");const t={};for(const c of this.files)c.size=c.data?c.data.byteLength:0,c.crc=c.data?this.crc(c.data):0,t[c.name]=c;const s=[];if(this.createFolderEntries){const c=/\//giu;for(const h of this.files){const d=h.name;for(let u=c.exec(d);u!==null;u=c.exec(d)){const p={name:d.substr(0,u.index+1),size:0,crc:0,data:new Uint8Array(0)};typeof t[p.name]>"u"&&(t[p.name]=p,s.push(p))}}}Array.prototype.push.apply(this.files,s),this.files.sort((c,h)=>c.name.length-h.name.length||c.name.localeCompare(h.name));const i=this.files.reduce((c,h)=>c+76+h.name.length*2+h.size,22);es("Estimated file size: "+i),this.buffer=new ArrayBuffer(i);const n=new lp(this.buffer),r=this.hex2u8a("504b0304140000000000");for(const c of this.files)c.offs=n.i,n.writeByteArray(r),n.uint16(this.timeInt),n.uint16(this.dateInt),n.uint32(c.crc),n.uint32(c.size),n.uint32(c.size),n.uint16(c.name.length),n.uint16(0),n.writeASCII(c.name),c.size>0&&n.writeByteArray(c.data);const o=n.i,a=this.hex2u8a("504b01023f00140000000000");for(const c of this.files)n.writeByteArray(a),n.uint16(this.timeInt),n.uint16(this.dateInt),n.uint32(c.crc),n.uint32(c.size),n.uint32(c.size),n.uint16(c.name.length),n.uint16(0),n.uint16(0),n.uint16(0),n.uint16(0),n.uint32(c.size?32:48),n.uint32(c.offs),n.writeASCII(c.name);const l=n.i-o;return n.writeByteArray(this.hex2u8a("504b050600000000")),n.uint16(this.files.length),n.uint16(this.files.length),n.uint32(l),n.uint32(o),n.uint16(0),es("Finished creating zip. size="+n.i+", predicted size="+i),this.buffer}crc(t){let s,i,n=-1;if(!We)for(We=[],i=0;i<256;s=++i){for(let r=0;r<8;r++)s=s&1?3988292384^s>>>1:s>>>1;We[i]=s}for(let r=0;r<t.byteLength;r++)n=n>>>8^We[(n^t[r])&255];return(n^-1)>>>0}hex2u8a(t){const s=new Uint8Array(Math.ceil(t.length/2));for(let i=0;i<s.length;i++)s[i]=parseInt(t.substr(i*2,2),16);return s}}class lp{constructor(t){this.dw=new DataView(t),this.i=0,this.le=!0,this.utf8encoder=new TextEncoder("utf-8")}uint8(t){this.dw.setUint8(this.i++,t)}uint16(t){this.dw.setUint16(this.i,t,this.le),this.i+=2}uint32(t){this.dw.setUint32(this.i,t,this.le),this.i+=4}writeByteArray(t){if(!(t instanceof Uint8Array))throw new Error("invalid parameter");new Uint8Array(this.dw.buffer).set(t,this.i),this.i+=t.byteLength}writeASCII(t){for(let s=0;s<t.length;s++)this.dw.setUint8(this.i++,t.charCodeAt(s)&255)}}const oe="application/vnd.openxmlformats-officedocument.spreadsheetml",js="http://schemas.openxmlformats.org",Je=`${js}/spreadsheetml/2006/main`,oi=`${js}/package/2006`,ae=`${js}/officeDocument/2006/relationships`,qr=[{id:164,code:"yyyy&quot;-&quot;mm&quot;-&quot;dd"},{id:165,code:"yyyy&quot;-&quot;mm&quot;-&quot;dd&quot; &quot;h&quot;:&quot;mm&quot;:&quot;ss"}];class Pp extends Ka{constructor(t,s){super(t,`${oe}.sheet`),this.sheets=[],this.frozen=!!(s&&s.frozen),this.autoFilter=!!(s&&s.filter)}addSheetFromData(t,s){const i=this.sheets.length+1;return this.sheets.push({id:i,name:this.escapeXml(s||"Sheet"+i),data:t}),this}generate(){const t=[{name:"xl/styles.xml",xml:`<styleSheet xmlns="${Je}" xmlns:mc="${js}/markup-compatibility/2006"><numFmts count="${qr.length}">${qr.map(n=>`<numFmt numFmtId="${n.id}" formatCode="${n.code}" />`)}</numFmts><fonts count="2"><font><sz val="10.0"/><color rgb="FF000000"/><name val="Arial"/></font><font><b/></font></fonts><fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="lightGray"/></fill></fills><borders count="1"><border><left/><right/><top/><bottom/></border></borders><cellStyleXfs count="1"><xf borderId="0" fillId="0" fontId="0" numFmtId="0" applyAlignment="1" applyFont="1"/></cellStyleXfs><cellXfs><xf borderId="0" fillId="0" fontId="0" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment/></xf><xf borderId="0" fillId="0" fontId="1" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment/></xf><xf borderId="0" fillId="0" fontId="0" numFmtId="164" xfId="0" applyAlignment="1" applyFont="1" applyNumberFormat="1"><alignment /></xf><xf borderId="0" fillId="0" fontId="0" numFmtId="165" xfId="0" applyAlignment="1" applyFont="1" applyNumberFormat="1"><alignment /></xf></cellXfs><cellStyles count="1"><cellStyle xfId="0" name="Normal" builtinId="0"/></cellStyles><dxfs count="0"/></styleSheet>`},{name:"xl/sharedStrings.xml",xml:`<sst xmlns="${Je}" count="2" uniqueCount="2"><si><t>text here</t></si></sst>`},{name:"xl/workbook.xml",xml:`<workbook xmlns="${Je}" xmlns:r="${ae}"><workbookPr/><sheets>`+this.sheets.map(n=>`<sheet state="visible" name="${n.name}" sheetId="${n.id}" r:id="rId${n.id+2}"/>`).join("")+"</sheets><definedNames/><calcPr/></workbook>"},{name:"xl/_rels/workbook.xml.rels",xml:`<Relationships xmlns="${oi}/relationships"><Relationship Id="rId1" Type="${ae}/styles" Target="styles.xml" /><Relationship Id="rId2" Type="${ae}/sharedStrings" Target="sharedStrings.xml"/>`+this.sheets.map(n=>`<Relationship Id="rId${n.id+2}" Type="${ae}/worksheet" Target="worksheets/sheet${n.id}.xml"/>`).join("")+"</Relationships>"},{name:"[Content_Types].xml",xml:`<Types xmlns="${oi}/content-types"><Default ContentType="application/xml" Extension="xml"/><Default ContentType="application/vnd.openxmlformats-package.relationships+xml" Extension="rels"/>`+this.sheets.map(n=>`<Override ContentType="${oe}.worksheet+xml" PartName="/xl/worksheets/sheet${n.id}.xml"/>`).join("")+`<Override ContentType="${oe}.sharedStrings+xml" PartName="/xl/sharedStrings.xml"/><Override ContentType="${oe}.styles+xml" PartName="/xl/styles.xml" /><Override ContentType="${oe}.sheet.main+xml" PartName="/xl/workbook.xml"/></Types>`},{name:"_rels/.rels",xml:`<Relationships xmlns="${oi}/relationships"><Relationship Id="rId1" Type="${ae}/officeDocument" Target="xl/workbook.xml"/></Relationships>`}],s=this.sheets.map(n=>{let r=0;const o=n.data.map((a,l)=>{const c=this.frozen&&l===0?' s="1"':"";a.length>r&&(r=a.length);const h=a.map((d,u)=>{const p=this.colName(u)+(l+1);return typeof d=="number"?`<c r="${p}"${c}><v>${d}</v></c>`:d instanceof Date?`<c s="${d.getHours()||d.getMinutes()||d.getSeconds()?3:2}"><v>${this.dateToExcelDate(d)}</v></c>`:`<c t="inlineStr"${c}><is><t>${this.escapeXml(d.toString())}</t></is></c>`});return`<row r="${l+1}">${h.join("")}</row>`});return{name:`xl/worksheets/sheet${n.id}.xml`,xml:`<worksheet xmlns="${Je}"><sheetViews><sheetView workbookViewId="0"`+(this.frozen?' tabSelected="1"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView>':"/>")+`</sheetViews><sheetFormatPr customHeight="1" defaultColWidth="17.5" defaultRowHeight="15.75"/><sheetData>${o.join("")}</sheetData>`+(this.autoFilter?`<autoFilter ref="A1:${this.colName(r)}${n.data.length}"/>`:"")+"</worksheet>"}}),i=new ap(this._filename,!1);return[...t,...s].forEach(n=>i.addFileFromString(n.name,n.xml)),this.buffer=i.generate(),this.buffer}colName(t){return t<26?String.fromCharCode(t+65):String.fromCharCode(Math.floor(t/26+64))+String.fromCharCode(Math.floor(t%26+65))}escapeXml(t){return t.replace(/[<>&'"]/gu,s=>["&lt;","&gt;","&amp;","&apos;","&quot;"][`<>&'"`.indexOf(s)])}dateToExcelDate(t){return 25569+(t.getTime()-t.getTimezoneOffset()*6e4)/864e5}}const Yr=(e,t)=>{Object.assign(e.style,{display:t?"":"none"})};class cp extends HTMLElement{static get observedAttributes(){return["opened"]}toggle=So("height");constructor(){super();const t=new CSSStyleSheet;t.replaceSync(`
      :host { display: block; overflow: hidden; }
		`);const s=this.attachShadow({mode:"open"});s.appendChild(document.createElement("slot")),s.adoptedStyleSheets=[t]}connectedCallback(){Yr(this,this.getAttribute("opened")!=null)}attributeChangedCallback(t,s,i){switch(t){case"opened":{const n=i!=null;return this.isConnected?this.toggle(this,n):Yr(this,n)}}}}customElements.define("cosmoz-collapse",cp);export{Pe as $,Ep as A,k as B,Mp as C,Vt as D,Ya as E,qc as F,zo as G,A as H,Ku as I,an as J,sl as K,Ai as L,Iu as M,Pp as N,ru as O,Es as P,gt as Q,Xt as R,K1 as S,_p as T,Uo as U,c2 as V,xo as W,Mo as X,rn as Y,gp as Z,i2 as _,fi as a,To as a0,ue as b,Y as c,Cp as d,ia as e,Lr as f,U as g,Ms as h,pp as i,zp as j,Nt as k,l2 as l,wp as m,bt as n,yp as o,Na as p,vp as q,xp as r,mn as s,on as t,lt as u,bp as v,H as w,tt as x,Kt as y,Lp as z};
