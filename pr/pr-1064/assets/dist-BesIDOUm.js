const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./flow-Bk5W63PM.js","./rolldown-runtime-DaJ6WEGw.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{n as t,t as n}from"./preload-helper-si3HNj2m.js";var r,i,a,o,s,c,l,u,d=e((()=>{r=globalThis,i=r.ShadowRoot&&(r.ShadyCSS===void 0||r.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,a=Symbol(),o=new WeakMap,s=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(i&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=o.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&o.set(t,e))}return e}toString(){return this.cssText}},c=e=>new s(typeof e==`string`?e:e+``,void 0,a),l=(e,t)=>{if(i)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),i=r.litNonce;i!==void 0&&t.setAttribute(`nonce`,i),t.textContent=n.cssText,e.appendChild(t)}},u=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return c(t)})(e):e})),f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D=e((()=>{d(),{is:f,defineProperty:p,getOwnPropertyDescriptor:m,getOwnPropertyNames:h,getOwnPropertySymbols:g,getPrototypeOf:_}=Object,v=globalThis,y=v.trustedTypes,b=y?y.emptyScript:``,x=v.reactiveElementPolyfillSupport,S=(e,t)=>e,C={toAttribute(e,t){switch(t){case Boolean:e=e?b:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},w=(e,t)=>!f(e,t),T={attribute:!0,type:String,converter:C,reflect:!1,useDefault:!1,hasChanged:w},Symbol.metadata??=Symbol(`metadata`),v.litPropertyMetadata??=new WeakMap,E=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=T){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&p(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=m(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??T}static _$Ei(){if(this.hasOwnProperty(S(`elementProperties`)))return;let e=_(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(S(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S(`properties`))){let e=this.properties,t=[...h(e),...g(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(u(e))}else e!==void 0&&t.push(u(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return l(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?C:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?C:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??w)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}},E.elementStyles=[],E.shadowRootOptions={mode:`open`},E[S(`elementProperties`)]=new Map,E[S(`finalized`)]=new Map,x?.({ReactiveElement:E}),(v.reactiveElementVersions??=[]).push(`2.1.2`)}));function ee(e,t){if(!ue(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ie===void 0?t:ie.createHTML(t)}function O(e,t,n=e,r){if(t===N)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=le(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=O(e,i._$AS(e,t.values),i,r)),t}var te,ne,re,ie,k,A,ae,oe,se,ce,le,ue,de,fe,pe,me,he,ge,_e,ve,ye,be,j,M,N,P,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,F=e((()=>{te=globalThis,ne=e=>e,re=te.trustedTypes,ie=re?re.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,k=`$lit$`,A=`lit$${Math.random().toFixed(9).slice(2)}$`,ae=`?`+A,oe=`<${ae}>`,se=document,ce=()=>se.createComment(``),le=e=>e===null||typeof e!=`object`&&typeof e!=`function`,ue=Array.isArray,de=e=>ue(e)||typeof e?.[Symbol.iterator]==`function`,fe=`[ 	
\f\r]`,pe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,me=/-->/g,he=/>/g,ge=RegExp(`>|${fe}(?:([^\\s"'>=/]+)(${fe}*=${fe}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),_e=/'/g,ve=/"/g,ye=/^(?:script|style|textarea|title)$/i,be=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),j=be(1),M=be(2),be(3),N=Symbol.for(`lit-noChange`),P=Symbol.for(`lit-nothing`),xe=new WeakMap,Se=se.createTreeWalker(se,129),Ce=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=pe;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===pe?c[1]===`!--`?o=me:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=ge):(ye.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=ge):o=he:o===ge?c[0]===`>`?(o=i??pe,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?ge:c[3]===`"`?ve:_e):o===ve||o===_e?o=ge:o===me||o===he?o=pe:(o=ge,i=void 0);let d=o===ge&&e[t+1].startsWith(`/>`)?` `:``;a+=o===pe?n+oe:l>=0?(r.push(s),n.slice(0,l)+k+n.slice(l)+A+d):n+A+(l===-2?t:d)}return[ee(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},we=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Ce(t,n);if(this.el=e.createElement(l,r),Se.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Se.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(k)){let t=u[o++],n=i.getAttribute(e).split(A),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Oe:r[1]===`?`?ke:r[1]===`@`?Ae:De}),i.removeAttribute(e)}else e.startsWith(A)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(ye.test(i.tagName)){let e=i.textContent.split(A),t=e.length-1;if(t>0){i.textContent=re?re.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],ce()),Se.nextNode(),c.push({type:2,index:++a});i.append(e[t],ce())}}}else if(i.nodeType===8)if(i.data===ae)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(A,e+1))!==-1;)c.push({type:7,index:a}),e+=A.length-1}a++}}static createElement(e,t){let n=se.createElement(`template`);return n.innerHTML=e,n}},Te=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??se).importNode(t,!0);Se.currentNode=r;let i=Se.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Ee(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new je(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Se.nextNode(),a++)}return Se.currentNode=se,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Ee=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=O(this,e,t),le(e)?e===P||e==null||e===``?(this._$AH!==P&&this._$AR(),this._$AH=P):e!==this._$AH&&e!==N&&this._(e):e._$litType$===void 0?e.nodeType===void 0?de(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==P&&le(this._$AH)?this._$AA.nextSibling.data=e:this.T(se.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=we.createElement(ee(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Te(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=xe.get(e.strings);return t===void 0&&xe.set(e.strings,t=new we(e)),t}k(t){ue(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(ce()),this.O(ce()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=ne(e).nextSibling;ne(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},De=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=P,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=P}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=O(this,e,t,0),a=!le(e)||e!==this._$AH&&e!==N,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=O(this,r[n+o],t,o),s===N&&(s=this._$AH[o]),a||=!le(s)||s!==this._$AH[o],s===P?e=P:e!==P&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Oe=class extends De{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===P?void 0:e}},ke=class extends De{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==P)}},Ae=class extends De{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=O(this,e,t,0)??P)===N)return;let n=this._$AH,r=e===P&&n!==P||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==P&&(n===P||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},je=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){O(this,e)}},Me={M:k,P:A,A:ae,C:1,L:Ce,R:Te,D:de,V:O,I:Ee,H:De,N:ke,U:Ae,B:Oe,F:je},Ne=te.litHtmlPolyfillSupport,Ne?.(we,Ee),(te.litHtmlVersions??=[]).push(`3.3.3`),Pe=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Ee(t.insertBefore(ce(),e),e,void 0,n??{})}return i._$AI(e),i}})),Fe,Ie,Le,Re=e((()=>{D(),D(),F(),F(),Fe=globalThis,Ie=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Pe(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return N}},Ie._$litElement$=!0,Ie.finalized=!0,Fe.litElementHydrateSupport?.({LitElement:Ie}),Le=Fe.litElementPolyfillSupport,Le?.({LitElement:Ie}),(Fe.litElementVersions??=[]).push(`4.2.2`)})),ze=e((()=>{})),Be=e((()=>{D(),F(),Re(),ze()})),Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e=e((()=>{F(),{I:Ve}=Me,He=e=>e,Ue=e=>e===null||typeof e!=`object`&&typeof e!=`function`,We=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,Ge=e=>e.strings===void 0,Ke=()=>document.createComment(``),qe=(e,t,n)=>{let r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0){let t=r.insertBefore(Ke(),i),a=r.insertBefore(Ke(),i);n=new Ve(t,a,e,e.options)}else{let t=n._$AB.nextSibling,a=n._$AM,o=a!==e;if(o){let t;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(t=e._$AU)!==a._$AU&&n._$AP(t)}if(t!==i||o){let e=n._$AA;for(;e!==t;){let t=He(e).nextSibling;He(r).insertBefore(e,i),e=t}}}return n},Je=(e,t,n=e)=>(e._$AI(t,n),e),Ye={},Xe=(e,t=Ye)=>e._$AH=t,Ze=e=>e._$AH,Qe=e=>{e._$AR(),e._$AA.remove()}}));function et(e){rt=e}function tt(){rt=null,it=0}function nt(){return it++}var rt,it,at=e((()=>{it=0})),ot,st,ct,lt,ut,dt,ft,pt=e((()=>{ot=Symbol(`haunted.phase`),st=Symbol(`haunted.hook`),ct=Symbol(`haunted.update`),lt=Symbol(`haunted.commit`),ut=Symbol(`haunted.effects`),dt=Symbol(`haunted.layoutEffects`),ft=`haunted.context`})),mt,ht=e((()=>{at(),pt(),mt=class{update;host;virtual;[st];[ut];[dt];constructor(e,t){this.update=e,this.host=t,this[st]=new Map,this[ut]=[],this[dt]=[]}run(e){et(this);let t=e();return tt(),t}_runEffects(e){let t=this[e];et(this);for(let e of t)e.call(this);tt()}runEffects(){this._runEffects(ut)}runLayoutEffects(){this._runEffects(dt)}teardown(){this[st].forEach(e=>{typeof e.teardown==`function`&&e.teardown(!0)})}}})),gt,_t=e((()=>{gt=class extends Error{constructor(e){let t=e?` <${e}>`:``;super(`Infinite update loop detected in component${t}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name=`InfiniteLoopError`}}}));function vt(){let e=[],t;function n(){t=null;let n=e;e=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(r){e.push(r),t??=bt(n)}}var yt,bt,xt,St,Ct,wt=e((()=>{ht(),pt(),_t(),yt=100,bt=Promise.resolve().then.bind(Promise.resolve()),xt=vt(),St=vt(),Ct=class e{renderer;host;state;[ot];_updateQueued;_active;_updateCount;_processing;static maxUpdates=yt;constructor(e,t){this.renderer=e,this.host=t,this.state=new mt(this.update.bind(this),t),this[ot]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>e.maxUpdates){let e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new gt(e)}}update(){this._active&&(this._updateQueued||=(this._checkForInfiniteLoop(),this._processing=!0,xt(()=>{let e=this.handlePhase(ct);St(()=>{this.handlePhase(lt,e),St(()=>{this.handlePhase(ut),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),!0))}handlePhase(e,t){switch(this[ot]=e,e){case lt:this.commit(t),this.runEffects(dt);return;case ct:return this.render();case ut:return this.runEffects(ut)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}})),Tt,Et,Dt,I,Ot=e((()=>{Tt=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t},Et=e=>e?.map(e=>typeof e==`string`?Tt(e):e),Dt=(e,...t)=>e.flatMap((e,n)=>[e,t[n]||``]).join(``),I=Dt}));function kt(e){class t extends Ct{frag;renderResult;constructor(e,t,n){super(e,n||t),this.frag=t}commit(t){this.renderResult=e(t,this.frag)}}function n(e,n,r){let i=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:o=!0,shadowRootInit:s={},styleSheets:c}=r||n||{},l=Et(e.styleSheets||c);class u extends i{_scheduler;static get observedAttributes(){return e.observedAttributes||a||[]}constructor(){if(super(),o===!1)this._scheduler=new t(e,this);else{let n=this.attachShadow({mode:`open`,...s});l&&(n.adoptedStyleSheets=l),this._scheduler=new t(e,n,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(e,t,n){if(t===n)return;let r=n===``||n;Reflect.set(this,At(e),r)}}function d(e){let t=e,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return t},set(e){n&&t===e||(n=!0,t=e,this._scheduler&&this._scheduler.update())}})}let f=new Proxy(i.prototype,{getPrototypeOf(e){return e},set(e,t,n,r){let i;return t in e?(i=Object.getOwnPropertyDescriptor(e,t),i&&i.set?(i.set.call(r,n),!0):(Reflect.set(e,t,n,r),!0)):(i=typeof t==`symbol`||t[0]===`_`?{enumerable:!0,configurable:!0,writable:!0,value:n}:d(n),Object.defineProperty(r,t,i),i.set&&i.set.call(r,n),!0)}});return Object.setPrototypeOf(u.prototype,f),u}return n}var At,jt=e((()=>{wt(),Ot(),At=(e=``)=>e.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():``)}));function Mt(e,...t){let n=nt(),r=rt[st],i=r.get(n);return i||(i=new e(n,rt,...t),r.set(n,i)),i.update(...t)}function Nt(e){return Mt.bind(null,e)}var L,Pt=e((()=>{at(),pt(),L=class{id;state;constructor(e,t){this.id=e,this.state=t}}}));function Ft(e){return Nt(class extends L{callback;lastValues;values;_teardown;constructor(t,n,r,i){super(t,n),e(n,this)}update(e,t){this.callback=e,this.values=t}call(){let e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown==`function`&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}var It=e((()=>{Pt()}));function Lt(e,t){e[ut].push(t)}var R,Rt=e((()=>{pt(),It(),R=Ft(Lt)})),zt,Bt,Vt=e((()=>{Pt(),pt(),Rt(),zt=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,Bt=Nt(class extends L{Context;value;_ranEffect;_unsubscribe;constructor(e,t,n){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Lt(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){let t={Context:e,callback:this._updater};zt(this.state.host).dispatchEvent(new CustomEvent(ft,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));let{unsubscribe:n=null,value:r}=t;this.value=n?r:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}})}));function Ht(e){return t=>{let n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display=`contents`,this.listeners=new Set,this.addEventListener(ft,this)}disconnectedCallback(){this.removeEventListener(ft,this)}handleEvent(e){let{detail:t}=e;t.Context===n&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}unsubscribe(e){this.listeners.delete(e)}set value(e){this._value=e;for(let t of this.listeners)t(e)}get value(){return this._value}},Consumer:e(function({render:e}){return e(Bt(n))},{useShadowDOM:!1}),defaultValue:t};return n}}var Ut=e((()=>{pt(),Vt()})),z,Wt=e((()=>{Pt(),z=Nt(class extends L{value;values;constructor(e,t,n,r){super(e,t),this.value=n(),this.values=r}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})),B,Gt=e((()=>{Wt(),B=(e,t)=>z(()=>e,t)}));function Kt(e,t){e[dt].push(t)}var qt,Jt=e((()=>{pt(),It(),qt=Ft(Kt)})),Yt,Xt=e((()=>{Pt(),Yt=Nt(class extends L{args;constructor(e,t,n){super(e,t),this.updater=this.updater.bind(this),typeof n==`function`&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){let[t]=this.args;typeof e==`function`&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}})})),Zt,Qt=e((()=>{Pt(),Zt=Nt(class extends L{reducer;currentState;constructor(e,t,n,r,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i===void 0?r:i(r)}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}})})),$t,en,tn,nn=e((()=>{Pt(),$t=/([A-Z])/gu,en=Nt(class extends L{property;eventName;constructor(e,t,n,r){if(super(e,t),this.state.virtual)throw Error(`Can't be used with virtual components.`);this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace($t,`-$1`).toLowerCase()+`-changed`,this.state.host[this.property]??(typeof r==`function`&&(r=r()),r!=null&&this.updater(r,!0))}update(e,t){return[this.state.host[this.property],this.updater]}resolve(e){let t=this.state.host[this.property],n=typeof e==`function`?e:void 0;return[t,n?n(t):e,n]}notify(e,t){let n=new CustomEvent(this.eventName,{detail:{value:e,updater:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,t=!1){let[n,r,i]=this.resolve(e),a=this.notify(r,i);!t&&a.defaultPrevented||Object.is(n,r)||(this.state.host[this.property]=r)}}),tn=e=>t=>{t.preventDefault(),e(t.detail.updater??t.detail.value)}}));function rn(e){let t=e;return{get current(){return t},set current(e){t=e},get value(){return t},set value(e){t=e}}}function an(e){return z(()=>rn(e),[])}var on=e((()=>{Wt()})),sn=e((()=>{Pt(),Nt(class extends L{update(){return this.state.host}})}));function cn({render:e}){let t=kt(e);return{component:t,createContext:Ht(t)}}var ln=e((()=>{jt(),Ut(),Gt(),Rt(),Jt(),Xt(),Qt(),Wt(),Vt(),nn(),on(),sn(),Pt(),wt(),ht(),_t()})),V,un,dn,H=e((()=>{V={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},un=e=>(...t)=>({_$litDirective$:e,values:t}),dn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}}));function fn(e){this._$AN===void 0?this._$AM=e:(hn(this),this._$AM=e,gn(this))}function pn(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)mn(r[e],!1),hn(r[e]);else r!=null&&(mn(r,!1),hn(r));else mn(this,e)}var mn,hn,gn,_n,vn,yn=e((()=>{$e(),H(),mn=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),mn(e,t);return!0},hn=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},gn=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),_n(t)}},_n=e=>{e.type==V.CHILD&&(e._$AP??=pn,e._$AQ??=fn)},vn=class extends dn{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),gn(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(mn(this,e),hn(this))}setValue(e){if(Ge(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}}));function bn(e,t,n=t.startNode){let r=n.parentNode,i=new MutationObserver(r=>{for(let a of r)if(xn.call(a.removedNodes,n)){i.disconnect(),n.parentNode instanceof ShadowRoot?bn(e,t):e.teardown();break}else if(xn.call(a.addedNodes,n.nextSibling)){i.disconnect(),bn(e,t,n.nextSibling||void 0);break}});i.observe(r,{childList:!0})}var xn,Sn=e((()=>{H(),F(),yn(),wt(),xn=Array.prototype.includes})),U,Cn,wn=e((()=>{F(),ln(),Sn(),{component:U,createContext:Cn}=cn({render:Pe})})),W=e((()=>{wn(),ln(),Ot(),ln()})),Tn=e((()=>{W()})),En,Dn=e((()=>{En=(e,...t)=>e.flatMap((e,n)=>[e,t[n]??``]).join(``)})),On,kn=e((()=>{On=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t}})),An=e((()=>{Tn(),Dn(),kn()})),jn,Mn,Nn=e((()=>{F(),yn(),H(),jn=new WeakMap,Mn=un(class extends vn{render(e){return P}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),P}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=jn.get(t);n===void 0&&(n=new WeakMap,jn.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G==`function`?jn.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})),Pn,Fn=e((()=>{W(),Pn=({host:e,popoverRef:t,disabled:n,openOnHover:r,openOnFocus:i,open:a,close:o})=>{let s=an(),c=()=>clearTimeout(s.current),l=()=>{clearTimeout(s.current),s.current=setTimeout(()=>{let n=t.current;r&&(e.matches(`:hover`)||n?.matches(`:hover`))||e.matches(`:focus-within`)||n?.matches(`:focus-within`)||o()},100)},u=()=>{n||(c(),a())};return R(()=>{if(!(!r||n))return e.addEventListener(`pointerenter`,u),e.addEventListener(`pointerleave`,l),()=>{c(),e.removeEventListener(`pointerenter`,u),e.removeEventListener(`pointerleave`,l)}},[r,n,e]),R(()=>{if(!(!i||n))return e.addEventListener(`focusin`,u),e.addEventListener(`focusout`,l),()=>{c(),e.removeEventListener(`focusin`,u),e.removeEventListener(`focusout`,l)}},[i,n,e]),{scheduleClose:l,cancelClose:c}}})),In,Ln,Rn,zn=e((()=>{W(),F(),Nn(),Fn(),In=e=>{if(e.newState!==`open`)return;let t=e.target.querySelector(`slot:not([name])`)?.assignedElements({flatten:!0})??[];for(let e of t){let t=e.matches(`[autofocus]`)?e:e.querySelector(`[autofocus]`);if(t instanceof HTMLElement){t.focus();break}}},Ln=I`
	:host {
		display: inline-block;
		anchor-name: --dropdown-anchor;
	}

	[popover] {
		position: fixed;
		position-anchor: --dropdown-anchor;
		inset: unset;
		margin-block: var(--cz-spacing, 0.25rem);
		position-try-fallbacks:
			flip-block,
			flip-inline,
			flip-block flip-inline;

		border: none;
		padding: 0;
		background: transparent;
		overflow: visible;
		min-width: anchor-size(width);

		/* Animation - open state */
		opacity: 1;
		transform: translateY(0) scale(1);

		/* Transitions for smooth open/close animation */
		transition:
			opacity 150ms ease-out,
			transform 150ms ease-out,
			overlay 150ms ease-out allow-discrete,
			display 150ms ease-out allow-discrete;
	}

	/* Starting state when popover opens */
	@starting-style {
		[popover]:popover-open {
			opacity: 0;
			transform: translateY(-4px) scale(0.96);
		}
	}

	/* Closing state */
	[popover]:not(:popover-open) {
		opacity: 0;
		transform: translateY(-4px) scale(0.96);
	}

	@media (prefers-reduced-motion: reduce) {
		[popover] {
			transition: none;
		}
	}
`,Rn=e=>{let{placement:t=`bottom span-right`,disabled:n,passthrough:r,openOnHover:i,openOnFocus:a}=e,o=an(),[s,c]=en(`opened`,!1),l=B(()=>{n||(c(!0),o.current?.showPopover?.())},[n]),u=B(()=>{c(!1),o.current?.hidePopover?.()},[]),d=B(()=>{n||(o.current?.matches(`:popover-open`)?u():l())},[n]);R(()=>{let e=o.current;e&&(s?e.showPopover?.():e.hidePopover?.())},[s]),R(()=>{e.toggleAttribute(`opened`,!!s)},[s]);let{scheduleClose:f,cancelClose:p}=Pn({host:e,popoverRef:o,disabled:n,openOnHover:i,openOnFocus:a,open:l,close:u}),m=a?l:d,h=B(t=>{In(t),c(t.newState===`open`),e.dispatchEvent(new ToggleEvent(`dropdown-toggle`,{newState:t.newState,oldState:t.oldState,composed:!0}))},[]);return j`
		<slot name="button" @click=${m}></slot>
		${n&&r?j`<slot></slot>`:j`<div
					popover
					style="position-area: ${t}"
					@toggle=${h}
					@select=${u}
					@focusout=${f}
					@focusin=${p}
					${Mn(e=>e&&(o.current=e))}
				>
					<slot></slot>
				</div>`}
	`},customElements.define(`cosmoz-dropdown-next`,U(Rn,{styleSheets:[Ln],observedAttributes:[`placement`,`disabled`,`passthrough`,`open-on-hover`,`open-on-focus`],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),G,K=e((()=>{F(),G=e=>e??P}));function q(e,t,n){return e?t(e):n?.(e)}var J=e((()=>{})),Bn=e((()=>{F(),K()})),Vn=e((()=>{F(),K()})),Hn=e((()=>{F(),K()})),Un=e((()=>{F(),K()})),Wn=e((()=>{F(),K()})),Gn=e((()=>{F(),K()})),Kn=e((()=>{F(),K()})),qn=e((()=>{F(),K()})),Jn=e((()=>{F(),K()})),Yn=e((()=>{F(),K()})),Xn=e((()=>{F(),K()})),Zn=e((()=>{F(),K()})),Qn=e((()=>{F(),K()})),$n=e((()=>{F(),K()})),er=e((()=>{F(),K()})),tr=e((()=>{F(),K()})),nr=e((()=>{F(),K()})),rr=e((()=>{F(),K()})),ir=e((()=>{F(),K()})),ar=e((()=>{F(),K()})),or=e((()=>{F(),K()})),sr=e((()=>{F(),K()})),cr=e((()=>{F(),K()})),lr=e((()=>{F(),K()})),ur=e((()=>{F(),K()})),dr=e((()=>{F(),K()})),fr=e((()=>{F(),K()})),pr=e((()=>{F(),K()})),mr=e((()=>{F(),K()})),hr=e((()=>{F(),K()})),gr=e((()=>{F(),K()})),_r=e((()=>{F(),K()})),vr=e((()=>{F(),K()})),yr=e((()=>{F(),K()})),br=e((()=>{F(),K()})),xr=e((()=>{F(),K()})),Sr=e((()=>{F(),K()})),Cr=e((()=>{F(),K()})),wr=e((()=>{F(),K()})),Tr=e((()=>{F(),K()})),Er=e((()=>{F(),K()})),Dr=e((()=>{F(),K()})),Or=e((()=>{F(),K()})),kr=e((()=>{F(),K()})),Ar=e((()=>{F(),K()})),jr=e((()=>{F(),K()})),Mr=e((()=>{F(),K()})),Nr=e((()=>{F(),K()})),Pr=e((()=>{F(),K()})),Fr=e((()=>{F(),K()})),Ir=e((()=>{F(),K()})),Lr=e((()=>{F(),K()})),Rr=e((()=>{F(),K()})),zr=e((()=>{F(),K()})),Br=e((()=>{F(),K()})),Vr=e((()=>{F(),K()})),Hr=e((()=>{F(),K()})),Ur=e((()=>{F(),K()})),Wr=e((()=>{F(),K()})),Gr=e((()=>{F(),K()})),Kr=e((()=>{F(),K()})),qr=e((()=>{F(),K()})),Jr=e((()=>{F(),K()})),Yr=e((()=>{F(),K()})),Xr=e((()=>{F(),K()})),Zr=e((()=>{F(),K()})),Qr=e((()=>{F(),K()})),$r=e((()=>{F(),K()})),ei=e((()=>{F(),K()})),ti=e((()=>{F(),K()})),ni=e((()=>{F(),K()})),ri=e((()=>{F(),K()})),ii=e((()=>{F(),K()})),ai=e((()=>{F(),K()})),oi=e((()=>{F(),K()})),si=e((()=>{F(),K()})),ci=e((()=>{F(),K()})),li=e((()=>{F(),K()})),ui=e((()=>{F(),K()})),di=e((()=>{F(),K()})),fi=e((()=>{F(),K()})),pi=e((()=>{F(),K()})),mi=e((()=>{F(),K()})),hi=e((()=>{F(),K()})),gi=e((()=>{F(),K()})),_i=e((()=>{F(),K()})),vi=e((()=>{F(),K()})),yi=e((()=>{F(),K()})),bi=e((()=>{F(),K()})),xi=e((()=>{F(),K()})),Si=e((()=>{F(),K()})),Ci=e((()=>{F(),K()})),wi=e((()=>{F(),K()})),Ti=e((()=>{F(),K()})),Ei=e((()=>{F(),K()})),Di=e((()=>{F(),K()})),Oi=e((()=>{F(),K()})),ki=e((()=>{F(),K()})),Ai=e((()=>{F(),K()})),ji=e((()=>{F(),K()})),Mi=e((()=>{F(),K()})),Ni=e((()=>{F(),K()})),Pi=e((()=>{F(),K()})),Fi=e((()=>{F(),K()})),Ii=e((()=>{F(),K()})),Li=e((()=>{F(),K()})),Ri=e((()=>{F(),K()})),zi=e((()=>{F(),K()})),Bi=e((()=>{F(),K()})),Vi=e((()=>{F(),K()})),Hi=e((()=>{F(),K()})),Ui=e((()=>{F(),K()})),Wi=e((()=>{F(),K()})),Gi=e((()=>{F(),K()})),Ki=e((()=>{F(),K()})),qi=e((()=>{F(),K()})),Ji=e((()=>{F(),K()})),Yi=e((()=>{F(),K()})),Xi=e((()=>{F(),K()})),Zi=e((()=>{F(),K()})),Qi=e((()=>{F(),K()})),$i=e((()=>{F(),K()})),ea=e((()=>{F(),K()})),ta=e((()=>{F(),K()})),na=e((()=>{F(),K()})),ra=e((()=>{F(),K()})),ia=e((()=>{F(),K()})),aa=e((()=>{F(),K()})),oa=e((()=>{F(),K()})),sa=e((()=>{F(),K()})),ca=e((()=>{F(),K()})),la=e((()=>{F(),K()})),ua=e((()=>{F(),K()})),da=e((()=>{F(),K()})),fa=e((()=>{F(),K()})),pa=e((()=>{F(),K()})),ma=e((()=>{F(),K()})),ha=e((()=>{F(),K()})),ga=e((()=>{F(),K()})),_a=e((()=>{F(),K()})),va=e((()=>{F(),K()})),ya=e((()=>{F(),K()})),ba=e((()=>{F(),K()})),xa=e((()=>{F(),K()})),Sa=e((()=>{F(),K()})),Ca=e((()=>{F(),K()})),wa=e((()=>{F(),K()})),Ta=e((()=>{F(),K()})),Ea=e((()=>{F(),K()})),Da=e((()=>{F(),K()})),Oa=e((()=>{F(),K()})),ka=e((()=>{F(),K()})),Aa=e((()=>{F(),K()})),ja=e((()=>{F(),K()})),Ma=e((()=>{F(),K()})),Na=e((()=>{F(),K()})),Pa=e((()=>{F(),K()})),Fa=e((()=>{F(),K()})),Ia=e((()=>{F(),K()})),La=e((()=>{F(),K()})),Ra=e((()=>{F(),K()})),za=e((()=>{F(),K()})),Ba=e((()=>{F(),K()})),Va=e((()=>{F(),K()})),Ha=e((()=>{F(),K()})),Ua=e((()=>{F(),K()})),Wa=e((()=>{F(),K()})),Ga=e((()=>{F(),K()})),Ka=e((()=>{F(),K()})),qa=e((()=>{F(),K()})),Ja=e((()=>{F(),K()})),Ya=e((()=>{F(),K()})),Xa=e((()=>{F(),K()})),Za=e((()=>{F(),K()})),Qa=e((()=>{F(),K()})),$a=e((()=>{F(),K()})),eo=e((()=>{F(),K()})),to=e((()=>{F(),K()})),no=e((()=>{F(),K()})),ro=e((()=>{F(),K()})),io=e((()=>{F(),K()})),ao=e((()=>{F(),K()})),oo=e((()=>{F(),K()})),so=e((()=>{F(),K()})),co=e((()=>{F(),K()})),lo=e((()=>{F(),K()})),uo=e((()=>{F(),K()})),fo=e((()=>{F(),K()})),po=e((()=>{F(),K()})),mo=e((()=>{F(),K()})),ho=e((()=>{F(),K()})),go=e((()=>{F(),K()})),_o=e((()=>{F(),K()})),vo=e((()=>{F(),K()})),yo=e((()=>{F(),K()})),bo=e((()=>{F(),K()})),xo=e((()=>{F(),K()})),So=e((()=>{F(),K()})),Co=e((()=>{F(),K()})),wo=e((()=>{F(),K()})),To=e((()=>{F(),K()})),Eo=e((()=>{F(),K()})),Do=e((()=>{F(),K()})),Oo=e((()=>{F(),K()})),ko=e((()=>{F(),K()})),Ao=e((()=>{F(),K()})),jo=e((()=>{F(),K()})),Mo=e((()=>{F(),K()})),No=e((()=>{F(),K()})),Po=e((()=>{F(),K()})),Fo=e((()=>{F(),K()})),Io=e((()=>{F(),K()})),Lo=e((()=>{F(),K()})),Ro=e((()=>{F(),K()})),zo=e((()=>{F(),K()})),Bo=e((()=>{F(),K()})),Vo=e((()=>{F(),K()})),Ho=e((()=>{F(),K()})),Uo=e((()=>{F(),K()})),Wo=e((()=>{F(),K()})),Go=e((()=>{F(),K()})),Ko=e((()=>{F(),K()})),qo=e((()=>{F(),K()})),Jo=e((()=>{F(),K()})),Yo=e((()=>{F(),K()})),Xo=e((()=>{F(),K()})),Zo=e((()=>{F(),K()})),Qo=e((()=>{F(),K()})),$o=e((()=>{F(),K()})),es,ts=e((()=>{F(),K(),J(),es=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>j`
  <svg
    slot=${G(e)}
    class=${`chevron-down-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${r}
    height=${i}
    style=${G(a)}
  >
    ${q(t,()=>M`<title>${t}</title>`)}
    <path d="m6 9 6 6 6-6" />
  </svg>
`})),ns=e((()=>{F(),K()})),rs=e((()=>{F(),K()})),is=e((()=>{F(),K()})),as=e((()=>{F(),K()})),os=e((()=>{F(),K()})),ss=e((()=>{F(),K()})),cs,ls=e((()=>{F(),K(),J(),cs=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>j`
  <svg
    slot=${G(e)}
    class=${`chevron-selector-vertical-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${r}
    height=${i}
    style=${G(a)}
  >
    ${q(t,()=>M`<title>${t}</title>`)}
    <path d="m7 15 5 5 5-5M7 9l5-5 5 5" />
  </svg>
`})),us=e((()=>{F(),K()})),ds=e((()=>{F(),K()})),fs=e((()=>{F(),K()})),ps=e((()=>{F(),K()})),ms=e((()=>{F(),K()})),hs=e((()=>{F(),K()})),gs=e((()=>{F(),K()})),_s=e((()=>{F(),K()})),vs=e((()=>{F(),K()})),ys=e((()=>{F(),K()})),bs=e((()=>{F(),K()})),xs=e((()=>{F(),K()})),Ss=e((()=>{F(),K()})),Cs=e((()=>{F(),K()})),ws=e((()=>{F(),K()})),Ts=e((()=>{F(),K()})),Es=e((()=>{F(),K()})),Ds=e((()=>{F(),K()})),Os=e((()=>{F(),K()})),ks=e((()=>{F(),K()})),As=e((()=>{F(),K()})),js=e((()=>{F(),K()})),Ms=e((()=>{F(),K()})),Ns=e((()=>{F(),K()})),Ps=e((()=>{F(),K()})),Fs=e((()=>{F(),K()})),Is=e((()=>{F(),K()})),Ls=e((()=>{F(),K()})),Rs=e((()=>{F(),K()})),zs=e((()=>{F(),K()})),Bs=e((()=>{F(),K()})),Vs=e((()=>{F(),K()})),Hs=e((()=>{F(),K()})),Us=e((()=>{F(),K()})),Ws=e((()=>{F(),K()})),Gs=e((()=>{F(),K()})),Ks=e((()=>{F(),K()})),qs=e((()=>{F(),K()})),Js=e((()=>{F(),K()})),Ys=e((()=>{F(),K()})),Xs=e((()=>{F(),K()})),Zs=e((()=>{F(),K()})),Qs=e((()=>{F(),K()})),$s=e((()=>{F(),K()})),ec=e((()=>{F(),K()})),tc=e((()=>{F(),K()})),nc=e((()=>{F(),K()})),rc=e((()=>{F(),K()})),ic=e((()=>{F(),K()})),ac=e((()=>{F(),K()})),oc=e((()=>{F(),K()})),sc=e((()=>{F(),K()})),cc=e((()=>{F(),K()})),lc=e((()=>{F(),K()})),uc=e((()=>{F(),K()})),dc=e((()=>{F(),K()})),fc=e((()=>{F(),K()})),pc=e((()=>{F(),K()})),mc=e((()=>{F(),K()})),hc=e((()=>{F(),K()})),gc=e((()=>{F(),K()})),_c=e((()=>{F(),K()})),vc=e((()=>{F(),K()})),yc=e((()=>{F(),K()})),bc=e((()=>{F(),K()})),xc=e((()=>{F(),K()})),Sc=e((()=>{F(),K()})),Cc=e((()=>{F(),K()})),wc=e((()=>{F(),K()})),Tc=e((()=>{F(),K()})),Ec=e((()=>{F(),K()})),Dc=e((()=>{F(),K()})),Oc=e((()=>{F(),K()})),kc=e((()=>{F(),K()})),Ac=e((()=>{F(),K()})),jc=e((()=>{F(),K()})),Mc=e((()=>{F(),K()})),Nc=e((()=>{F(),K()})),Pc=e((()=>{F(),K()})),Fc=e((()=>{F(),K()})),Ic=e((()=>{F(),K()})),Lc=e((()=>{F(),K()})),Rc=e((()=>{F(),K()})),zc=e((()=>{F(),K()})),Bc=e((()=>{F(),K()})),Vc=e((()=>{F(),K()})),Hc=e((()=>{F(),K()})),Uc=e((()=>{F(),K()})),Wc=e((()=>{F(),K()})),Gc=e((()=>{F(),K()})),Kc=e((()=>{F(),K()})),qc=e((()=>{F(),K()})),Jc=e((()=>{F(),K()})),Yc=e((()=>{F(),K()})),Xc=e((()=>{F(),K()})),Zc=e((()=>{F(),K()})),Qc=e((()=>{F(),K()})),$c=e((()=>{F(),K()})),el=e((()=>{F(),K()})),tl=e((()=>{F(),K()})),nl=e((()=>{F(),K()})),rl=e((()=>{F(),K()})),il=e((()=>{F(),K()})),al=e((()=>{F(),K()})),ol=e((()=>{F(),K()})),sl=e((()=>{F(),K()})),cl=e((()=>{F(),K()})),ll=e((()=>{F(),K()})),ul=e((()=>{F(),K()})),dl=e((()=>{F(),K()})),fl=e((()=>{F(),K()})),pl=e((()=>{F(),K()})),ml=e((()=>{F(),K()})),hl=e((()=>{F(),K()})),gl=e((()=>{F(),K()})),_l=e((()=>{F(),K()})),vl=e((()=>{F(),K()})),yl=e((()=>{F(),K()})),bl=e((()=>{F(),K()})),xl=e((()=>{F(),K()})),Sl=e((()=>{F(),K()})),Cl=e((()=>{F(),K()})),wl=e((()=>{F(),K()})),Tl=e((()=>{F(),K()})),El=e((()=>{F(),K()})),Dl=e((()=>{F(),K()})),Ol=e((()=>{F(),K()})),kl=e((()=>{F(),K()})),Al=e((()=>{F(),K()})),jl=e((()=>{F(),K()})),Ml=e((()=>{F(),K()})),Nl=e((()=>{F(),K()})),Pl=e((()=>{F(),K()})),Fl=e((()=>{F(),K()})),Il=e((()=>{F(),K()})),Ll=e((()=>{F(),K()})),Rl=e((()=>{F(),K()})),zl=e((()=>{F(),K()})),Bl=e((()=>{F(),K()})),Vl=e((()=>{F(),K()})),Hl=e((()=>{F(),K()})),Ul=e((()=>{F(),K()})),Wl=e((()=>{F(),K()})),Gl=e((()=>{F(),K()})),Kl=e((()=>{F(),K()})),ql=e((()=>{F(),K()})),Jl=e((()=>{F(),K()})),Yl=e((()=>{F(),K()})),Xl=e((()=>{F(),K()})),Zl=e((()=>{F(),K()})),Ql=e((()=>{F(),K()})),$l=e((()=>{F(),K()})),eu=e((()=>{F(),K()})),tu=e((()=>{F(),K()})),nu=e((()=>{F(),K()})),ru=e((()=>{F(),K()})),iu=e((()=>{F(),K()})),au=e((()=>{F(),K()})),ou=e((()=>{F(),K()})),su=e((()=>{F(),K()})),cu=e((()=>{F(),K()})),lu=e((()=>{F(),K()})),uu=e((()=>{F(),K()})),du=e((()=>{F(),K()})),fu=e((()=>{F(),K()})),pu=e((()=>{F(),K()})),mu=e((()=>{F(),K()})),hu=e((()=>{F(),K()})),gu=e((()=>{F(),K()})),_u=e((()=>{F(),K()})),vu=e((()=>{F(),K()})),yu,bu=e((()=>{F(),K(),J(),yu=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>j`
  <svg
    slot=${G(e)}
    class=${`dots-vertical-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${r}
    height=${i}
    style=${G(a)}
  >
    ${q(t,()=>M`<title>${t}</title>`)}
    <path
      d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
  </svg>
`})),xu,Su=e((()=>{F(),K(),J(),xu=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>j`
  <svg
    slot=${G(e)}
    class=${`download-01-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${r}
    height=${i}
    style=${G(a)}
  >
    ${q(t,()=>M`<title>${t}</title>`)}
    <path
      d="M21 15v1.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V15m14-5-5 5m0 0-5-5m5 5V3"
    />
  </svg>
`})),Cu=e((()=>{F(),K()})),wu=e((()=>{F(),K()})),Tu=e((()=>{F(),K()})),Eu=e((()=>{F(),K()})),Du=e((()=>{F(),K()})),Ou=e((()=>{F(),K()})),ku=e((()=>{F(),K()})),Au=e((()=>{F(),K()})),ju=e((()=>{F(),K()})),Mu=e((()=>{F(),K()})),Nu=e((()=>{F(),K()})),Pu=e((()=>{F(),K()})),Fu=e((()=>{F(),K()})),Iu=e((()=>{F(),K()})),Lu=e((()=>{F(),K()})),Ru,zu=e((()=>{F(),K(),J(),Ru=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>j`
  <svg
    slot=${G(e)}
    class=${`equal-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${r}
    height=${i}
    style=${G(a)}
  >
    ${q(t,()=>M`<title>${t}</title>`)}
    <path d="M5 9h14M5 15h14" />
  </svg>
`})),Bu=e((()=>{F(),K()})),Vu=e((()=>{F(),K()})),Hu=e((()=>{F(),K()})),Uu=e((()=>{F(),K()})),Wu=e((()=>{F(),K()})),Gu=e((()=>{F(),K()})),Ku=e((()=>{F(),K()})),qu=e((()=>{F(),K()})),Ju=e((()=>{F(),K()})),Yu=e((()=>{F(),K()})),Xu=e((()=>{F(),K()})),Zu=e((()=>{F(),K()})),Qu=e((()=>{F(),K()})),$u=e((()=>{F(),K()})),ed=e((()=>{F(),K()})),td=e((()=>{F(),K()})),nd=e((()=>{F(),K()})),rd=e((()=>{F(),K()})),id=e((()=>{F(),K()})),ad=e((()=>{F(),K()})),od=e((()=>{F(),K()})),sd=e((()=>{F(),K()})),cd=e((()=>{F(),K()})),ld=e((()=>{F(),K()})),ud=e((()=>{F(),K()})),dd=e((()=>{F(),K()})),fd=e((()=>{F(),K()})),pd=e((()=>{F(),K()})),md=e((()=>{F(),K()})),hd=e((()=>{F(),K()})),gd=e((()=>{F(),K()})),_d=e((()=>{F(),K()})),vd=e((()=>{F(),K()})),yd=e((()=>{F(),K()})),bd=e((()=>{F(),K()})),xd=e((()=>{F(),K()})),Sd=e((()=>{F(),K()})),Cd=e((()=>{F(),K()})),wd=e((()=>{F(),K()})),Td=e((()=>{F(),K()})),Ed=e((()=>{F(),K()})),Dd=e((()=>{F(),K()})),Od=e((()=>{F(),K()})),kd=e((()=>{F(),K()})),Ad=e((()=>{F(),K()})),jd=e((()=>{F(),K()})),Md=e((()=>{F(),K()})),Nd=e((()=>{F(),K()})),Pd=e((()=>{F(),K()})),Fd=e((()=>{F(),K()})),Id=e((()=>{F(),K()})),Ld=e((()=>{F(),K()})),Rd=e((()=>{F(),K()})),zd=e((()=>{F(),K()})),Bd=e((()=>{F(),K()})),Vd=e((()=>{F(),K()})),Hd=e((()=>{F(),K()})),Ud=e((()=>{F(),K()})),Wd=e((()=>{F(),K()})),Gd=e((()=>{F(),K()})),Kd=e((()=>{F(),K()})),qd=e((()=>{F(),K()})),Jd=e((()=>{F(),K()})),Yd=e((()=>{F(),K()})),Xd=e((()=>{F(),K()})),Zd=e((()=>{F(),K()})),Qd=e((()=>{F(),K()})),$d=e((()=>{F(),K()})),ef=e((()=>{F(),K()})),tf=e((()=>{F(),K()})),nf=e((()=>{F(),K()})),rf=e((()=>{F(),K()})),af=e((()=>{F(),K()})),of=e((()=>{F(),K()})),sf=e((()=>{F(),K()})),cf=e((()=>{F(),K()})),lf=e((()=>{F(),K()})),uf=e((()=>{F(),K()})),df=e((()=>{F(),K()})),ff=e((()=>{F(),K()})),pf=e((()=>{F(),K()})),mf=e((()=>{F(),K()})),hf=e((()=>{F(),K()})),gf=e((()=>{F(),K()})),_f=e((()=>{F(),K()})),vf=e((()=>{F(),K()})),yf=e((()=>{F(),K()})),bf=e((()=>{F(),K()})),xf=e((()=>{F(),K()})),Sf=e((()=>{F(),K()})),Cf=e((()=>{F(),K()})),wf=e((()=>{F(),K()})),Tf=e((()=>{F(),K()})),Ef=e((()=>{F(),K()})),Df=e((()=>{F(),K()})),Of=e((()=>{F(),K()})),kf=e((()=>{F(),K()})),Af=e((()=>{F(),K()})),jf=e((()=>{F(),K()})),Mf=e((()=>{F(),K()})),Nf=e((()=>{F(),K()})),Pf=e((()=>{F(),K()})),Ff=e((()=>{F(),K()})),If=e((()=>{F(),K()})),Lf=e((()=>{F(),K()})),Rf=e((()=>{F(),K()})),zf=e((()=>{F(),K()})),Bf=e((()=>{F(),K()})),Vf=e((()=>{F(),K()})),Hf=e((()=>{F(),K()})),Uf=e((()=>{F(),K()})),Wf=e((()=>{F(),K()})),Gf=e((()=>{F(),K()})),Kf=e((()=>{F(),K()})),qf=e((()=>{F(),K()})),Jf=e((()=>{F(),K()})),Yf=e((()=>{F(),K()})),Xf=e((()=>{F(),K()})),Zf=e((()=>{F(),K()})),Qf=e((()=>{F(),K()})),$f=e((()=>{F(),K()})),ep=e((()=>{F(),K()})),tp=e((()=>{F(),K()})),np=e((()=>{F(),K()})),rp=e((()=>{F(),K()})),ip=e((()=>{F(),K()})),ap=e((()=>{F(),K()})),op=e((()=>{F(),K()})),sp=e((()=>{F(),K()})),cp=e((()=>{F(),K()})),lp=e((()=>{F(),K()})),up=e((()=>{F(),K()})),dp=e((()=>{F(),K()})),fp=e((()=>{F(),K()})),pp=e((()=>{F(),K()})),mp=e((()=>{F(),K()})),hp=e((()=>{F(),K()})),gp=e((()=>{F(),K()})),_p=e((()=>{F(),K()})),vp=e((()=>{F(),K()})),yp=e((()=>{F(),K()})),bp=e((()=>{F(),K()})),xp=e((()=>{F(),K()})),Sp=e((()=>{F(),K()})),Cp=e((()=>{F(),K()})),wp=e((()=>{F(),K()})),Tp=e((()=>{F(),K()})),Ep=e((()=>{F(),K()})),Dp=e((()=>{F(),K()})),Op=e((()=>{F(),K()})),kp=e((()=>{F(),K()})),Ap=e((()=>{F(),K()})),jp=e((()=>{F(),K()})),Mp=e((()=>{F(),K()})),Np=e((()=>{F(),K()})),Pp=e((()=>{F(),K()})),Fp=e((()=>{F(),K()})),Ip=e((()=>{F(),K()})),Lp=e((()=>{F(),K()})),Rp=e((()=>{F(),K()})),zp=e((()=>{F(),K()})),Bp=e((()=>{F(),K()})),Vp=e((()=>{F(),K()})),Hp=e((()=>{F(),K()})),Up=e((()=>{F(),K()})),Wp=e((()=>{F(),K()})),Gp=e((()=>{F(),K()})),Kp=e((()=>{F(),K()})),qp=e((()=>{F(),K()})),Jp=e((()=>{F(),K()})),Yp=e((()=>{F(),K()})),Xp=e((()=>{F(),K()})),Zp=e((()=>{F(),K()})),Qp=e((()=>{F(),K()})),$p=e((()=>{F(),K()})),em=e((()=>{F(),K()})),tm=e((()=>{F(),K()})),nm=e((()=>{F(),K()})),rm=e((()=>{F(),K()})),im=e((()=>{F(),K()})),am=e((()=>{F(),K()})),om=e((()=>{F(),K()})),sm=e((()=>{F(),K()})),cm=e((()=>{F(),K()})),lm=e((()=>{F(),K()})),um=e((()=>{F(),K()})),dm=e((()=>{F(),K()})),fm=e((()=>{F(),K()})),pm=e((()=>{F(),K()})),mm=e((()=>{F(),K()})),hm=e((()=>{F(),K()})),gm=e((()=>{F(),K()})),_m=e((()=>{F(),K()})),vm=e((()=>{F(),K()})),ym=e((()=>{F(),K()})),bm=e((()=>{F(),K()})),xm=e((()=>{F(),K()})),Sm=e((()=>{F(),K()})),Cm=e((()=>{F(),K()})),wm=e((()=>{F(),K()})),Tm=e((()=>{F(),K()})),Em,Dm=e((()=>{F(),K(),J(),Em=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>j`
  <svg
    slot=${G(e)}
    class=${`info-circle-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${r}
    height=${i}
    style=${G(a)}
  >
    ${q(t,()=>M`<title>${t}</title>`)}
    <path
      d="M12 16v-4m0-4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
`})),Om=e((()=>{F(),K()})),km=e((()=>{F(),K()})),Am=e((()=>{F(),K()})),jm=e((()=>{F(),K()})),Mm=e((()=>{F(),K()})),Nm=e((()=>{F(),K()})),Pm=e((()=>{F(),K()})),Fm=e((()=>{F(),K()})),Im=e((()=>{F(),K()})),Lm=e((()=>{F(),K()})),Rm=e((()=>{F(),K()})),zm=e((()=>{F(),K()})),Bm=e((()=>{F(),K()})),Vm=e((()=>{F(),K()})),Hm=e((()=>{F(),K()})),Um=e((()=>{F(),K()})),Wm=e((()=>{F(),K()})),Gm=e((()=>{F(),K()})),Km=e((()=>{F(),K()})),qm=e((()=>{F(),K()})),Jm=e((()=>{F(),K()})),Ym=e((()=>{F(),K()})),Xm=e((()=>{F(),K()})),Zm=e((()=>{F(),K()})),Qm=e((()=>{F(),K()})),$m=e((()=>{F(),K()})),eh=e((()=>{F(),K()})),th=e((()=>{F(),K()})),nh=e((()=>{F(),K()})),rh=e((()=>{F(),K()})),ih=e((()=>{F(),K()})),ah=e((()=>{F(),K()})),oh=e((()=>{F(),K()})),sh=e((()=>{F(),K()})),ch=e((()=>{F(),K()})),lh=e((()=>{F(),K()})),uh=e((()=>{F(),K()})),dh=e((()=>{F(),K()})),fh=e((()=>{F(),K()})),ph=e((()=>{F(),K()})),mh=e((()=>{F(),K()})),hh=e((()=>{F(),K()})),gh=e((()=>{F(),K()})),_h=e((()=>{F(),K()})),vh=e((()=>{F(),K()})),yh=e((()=>{F(),K()})),bh=e((()=>{F(),K()})),xh=e((()=>{F(),K()})),Sh=e((()=>{F(),K()})),Ch=e((()=>{F(),K()})),wh=e((()=>{F(),K()})),Th=e((()=>{F(),K()})),Eh=e((()=>{F(),K()})),Dh=e((()=>{F(),K()})),Oh=e((()=>{F(),K()})),kh=e((()=>{F(),K()})),Ah=e((()=>{F(),K()})),jh=e((()=>{F(),K()})),Mh=e((()=>{F(),K()})),Nh=e((()=>{F(),K()})),Ph=e((()=>{F(),K()})),Fh=e((()=>{F(),K()})),Ih=e((()=>{F(),K()})),Lh=e((()=>{F(),K()})),Rh=e((()=>{F(),K()})),zh=e((()=>{F(),K()})),Bh=e((()=>{F(),K()})),Vh=e((()=>{F(),K()})),Hh=e((()=>{F(),K()})),Uh=e((()=>{F(),K()})),Wh=e((()=>{F(),K()})),Gh=e((()=>{F(),K()})),Kh=e((()=>{F(),K()})),qh=e((()=>{F(),K()})),Jh=e((()=>{F(),K()})),Yh=e((()=>{F(),K()})),Xh=e((()=>{F(),K()})),Zh=e((()=>{F(),K()})),Qh=e((()=>{F(),K()})),$h=e((()=>{F(),K()})),eg=e((()=>{F(),K()})),tg=e((()=>{F(),K()})),ng=e((()=>{F(),K()})),rg=e((()=>{F(),K()})),ig=e((()=>{F(),K()})),ag=e((()=>{F(),K()})),og=e((()=>{F(),K()})),sg=e((()=>{F(),K()})),cg=e((()=>{F(),K()})),lg=e((()=>{F(),K()})),ug=e((()=>{F(),K()})),dg=e((()=>{F(),K()})),fg=e((()=>{F(),K()})),pg=e((()=>{F(),K()})),mg=e((()=>{F(),K()})),hg=e((()=>{F(),K()})),gg=e((()=>{F(),K()})),_g=e((()=>{F(),K()})),vg=e((()=>{F(),K()})),yg=e((()=>{F(),K()})),bg=e((()=>{F(),K()})),xg=e((()=>{F(),K()})),Sg=e((()=>{F(),K()})),Cg=e((()=>{F(),K()})),wg=e((()=>{F(),K()})),Tg=e((()=>{F(),K()})),Eg=e((()=>{F(),K()})),Dg=e((()=>{F(),K()})),Og=e((()=>{F(),K()})),kg=e((()=>{F(),K()})),Ag=e((()=>{F(),K()})),jg=e((()=>{F(),K()})),Mg=e((()=>{F(),K()})),Ng=e((()=>{F(),K()})),Pg=e((()=>{F(),K()})),Fg=e((()=>{F(),K()})),Ig=e((()=>{F(),K()})),Lg=e((()=>{F(),K()})),Rg=e((()=>{F(),K()})),zg=e((()=>{F(),K()})),Bg=e((()=>{F(),K()})),Vg=e((()=>{F(),K()})),Hg=e((()=>{F(),K()})),Ug=e((()=>{F(),K()})),Wg=e((()=>{F(),K()})),Gg=e((()=>{F(),K()})),Kg=e((()=>{F(),K()})),qg=e((()=>{F(),K()})),Jg=e((()=>{F(),K()})),Yg=e((()=>{F(),K()})),Xg=e((()=>{F(),K()})),Zg=e((()=>{F(),K()})),Qg=e((()=>{F(),K()})),$g=e((()=>{F(),K()})),e_=e((()=>{F(),K()})),t_=e((()=>{F(),K()})),n_=e((()=>{F(),K()})),r_=e((()=>{F(),K()})),i_=e((()=>{F(),K()})),a_=e((()=>{F(),K()})),o_=e((()=>{F(),K()})),s_=e((()=>{F(),K()})),c_=e((()=>{F(),K()})),l_=e((()=>{F(),K()})),u_=e((()=>{F(),K()})),d_=e((()=>{F(),K()})),f_=e((()=>{F(),K()})),p_=e((()=>{F(),K()})),m_=e((()=>{F(),K()})),h_=e((()=>{F(),K()})),g_=e((()=>{F(),K()})),__=e((()=>{F(),K()})),v_=e((()=>{F(),K()})),y_=e((()=>{F(),K()})),b_=e((()=>{F(),K()})),x_=e((()=>{F(),K()})),S_=e((()=>{F(),K()})),C_=e((()=>{F(),K()})),w_=e((()=>{F(),K()})),T_=e((()=>{F(),K()})),E_=e((()=>{F(),K()})),D_=e((()=>{F(),K()})),O_=e((()=>{F(),K()})),k_=e((()=>{F(),K()})),A_=e((()=>{F(),K()})),j_=e((()=>{F(),K()})),M_=e((()=>{F(),K()})),N_=e((()=>{F(),K()})),P_=e((()=>{F(),K()})),F_=e((()=>{F(),K()})),I_=e((()=>{F(),K()})),L_=e((()=>{F(),K()})),R_=e((()=>{F(),K()})),z_=e((()=>{F(),K()})),B_=e((()=>{F(),K()})),V_=e((()=>{F(),K()})),H_=e((()=>{F(),K()})),U_=e((()=>{F(),K()})),W_=e((()=>{F(),K()})),G_=e((()=>{F(),K()})),K_=e((()=>{F(),K()})),q_=e((()=>{F(),K()})),J_=e((()=>{F(),K()})),Y_=e((()=>{F(),K()})),X_=e((()=>{F(),K()})),Z_=e((()=>{F(),K()})),Q_=e((()=>{F(),K()})),$_=e((()=>{F(),K()})),ev=e((()=>{F(),K()})),tv=e((()=>{F(),K()})),nv=e((()=>{F(),K()})),rv=e((()=>{F(),K()})),iv=e((()=>{F(),K()})),av=e((()=>{F(),K()})),ov=e((()=>{F(),K()})),sv=e((()=>{F(),K()})),cv=e((()=>{F(),K()})),lv=e((()=>{F(),K()})),uv=e((()=>{F(),K()})),dv=e((()=>{F(),K()})),fv=e((()=>{F(),K()})),pv=e((()=>{F(),K()})),mv=e((()=>{F(),K()})),hv=e((()=>{F(),K()})),gv=e((()=>{F(),K()})),_v=e((()=>{F(),K()})),vv=e((()=>{F(),K()})),yv=e((()=>{F(),K()})),bv=e((()=>{F(),K()})),xv=e((()=>{F(),K()})),Sv=e((()=>{F(),K()})),Cv=e((()=>{F(),K()})),wv=e((()=>{F(),K()})),Tv=e((()=>{F(),K()})),Ev=e((()=>{F(),K()})),Dv=e((()=>{F(),K()})),Ov=e((()=>{F(),K()})),kv=e((()=>{F(),K()})),Av=e((()=>{F(),K()})),jv=e((()=>{F(),K()})),Mv=e((()=>{F(),K()})),Nv=e((()=>{F(),K()})),Pv=e((()=>{F(),K()})),Fv=e((()=>{F(),K()})),Iv=e((()=>{F(),K()})),Lv=e((()=>{F(),K()})),Rv=e((()=>{F(),K()})),zv=e((()=>{F(),K()})),Bv=e((()=>{F(),K()})),Vv=e((()=>{F(),K()})),Hv=e((()=>{F(),K()})),Uv=e((()=>{F(),K()})),Wv=e((()=>{F(),K()})),Gv=e((()=>{F(),K()})),Kv=e((()=>{F(),K()})),qv=e((()=>{F(),K()})),Jv=e((()=>{F(),K()})),Yv=e((()=>{F(),K()})),Xv=e((()=>{F(),K()})),Zv=e((()=>{F(),K()})),Qv=e((()=>{F(),K()})),$v=e((()=>{F(),K()})),ey=e((()=>{F(),K()})),ty=e((()=>{F(),K()})),ny=e((()=>{F(),K()})),ry=e((()=>{F(),K()})),iy=e((()=>{F(),K()})),ay=e((()=>{F(),K()})),oy=e((()=>{F(),K()})),sy=e((()=>{F(),K()})),cy=e((()=>{F(),K()})),ly=e((()=>{F(),K()})),uy=e((()=>{F(),K()})),dy=e((()=>{F(),K()})),fy=e((()=>{F(),K()})),py=e((()=>{F(),K()})),my=e((()=>{F(),K()})),hy=e((()=>{F(),K()})),gy=e((()=>{F(),K()})),_y=e((()=>{F(),K()})),vy=e((()=>{F(),K()})),yy=e((()=>{F(),K()})),by=e((()=>{F(),K()})),xy=e((()=>{F(),K()})),Sy=e((()=>{F(),K()})),Cy=e((()=>{F(),K()})),wy=e((()=>{F(),K()})),Ty=e((()=>{F(),K()})),Ey=e((()=>{F(),K()})),Dy=e((()=>{F(),K()})),Oy=e((()=>{F(),K()})),ky=e((()=>{F(),K()})),Ay=e((()=>{F(),K()})),jy=e((()=>{F(),K()})),My=e((()=>{F(),K()})),Ny=e((()=>{F(),K()})),Py=e((()=>{F(),K()})),Fy=e((()=>{F(),K()})),Iy=e((()=>{F(),K()})),Ly=e((()=>{F(),K()})),Ry=e((()=>{F(),K()})),zy=e((()=>{F(),K()})),By=e((()=>{F(),K()})),Vy=e((()=>{F(),K()})),Hy=e((()=>{F(),K()})),Uy=e((()=>{F(),K()})),Wy=e((()=>{F(),K()})),Gy=e((()=>{F(),K()})),Ky=e((()=>{F(),K()})),qy=e((()=>{F(),K()})),Jy=e((()=>{F(),K()})),Yy=e((()=>{F(),K()})),Xy=e((()=>{F(),K()})),Zy=e((()=>{F(),K()})),Qy=e((()=>{F(),K()})),$y=e((()=>{F(),K()})),eb=e((()=>{F(),K()})),tb=e((()=>{F(),K()})),nb=e((()=>{F(),K()})),rb=e((()=>{F(),K()})),ib=e((()=>{F(),K()})),ab=e((()=>{F(),K()})),ob=e((()=>{F(),K()})),sb=e((()=>{F(),K()})),cb=e((()=>{F(),K()})),lb=e((()=>{F(),K()})),ub=e((()=>{F(),K()})),db=e((()=>{F(),K()})),fb=e((()=>{F(),K()})),pb=e((()=>{F(),K()})),mb=e((()=>{F(),K()})),hb=e((()=>{F(),K()})),gb=e((()=>{F(),K()})),_b=e((()=>{F(),K()})),vb=e((()=>{F(),K()})),yb=e((()=>{F(),K()})),bb=e((()=>{F(),K()})),xb=e((()=>{F(),K()})),Sb=e((()=>{F(),K()})),Cb=e((()=>{F(),K()})),wb=e((()=>{F(),K()})),Tb=e((()=>{F(),K()})),Eb=e((()=>{F(),K()})),Db=e((()=>{F(),K()})),Ob=e((()=>{F(),K()})),kb=e((()=>{F(),K()})),Ab=e((()=>{F(),K()})),jb=e((()=>{F(),K()})),Mb=e((()=>{F(),K()})),Nb=e((()=>{F(),K()})),Pb=e((()=>{F(),K()})),Fb=e((()=>{F(),K()})),Ib=e((()=>{F(),K()})),Lb=e((()=>{F(),K()})),Rb=e((()=>{F(),K()})),zb=e((()=>{F(),K()})),Bb=e((()=>{F(),K()})),Vb=e((()=>{F(),K()})),Hb=e((()=>{F(),K()})),Ub=e((()=>{F(),K()})),Wb=e((()=>{F(),K()})),Gb=e((()=>{F(),K()})),Kb=e((()=>{F(),K()})),qb=e((()=>{F(),K()})),Jb=e((()=>{F(),K()})),Yb=e((()=>{F(),K()})),Xb=e((()=>{F(),K()})),Zb=e((()=>{F(),K()})),Qb=e((()=>{F(),K()})),$b=e((()=>{F(),K()})),ex=e((()=>{F(),K()})),tx=e((()=>{F(),K()})),nx=e((()=>{F(),K()})),rx=e((()=>{F(),K()})),ix=e((()=>{F(),K()})),ax=e((()=>{F(),K()})),ox=e((()=>{F(),K()})),sx=e((()=>{F(),K()})),cx=e((()=>{F(),K()})),lx=e((()=>{F(),K()})),ux=e((()=>{F(),K()})),dx=e((()=>{F(),K()})),fx=e((()=>{F(),K()})),px=e((()=>{F(),K()})),mx=e((()=>{F(),K()})),hx=e((()=>{F(),K()})),gx=e((()=>{F(),K()})),_x=e((()=>{F(),K()})),vx=e((()=>{F(),K()})),yx=e((()=>{F(),K()})),bx=e((()=>{F(),K()})),xx=e((()=>{F(),K()})),Sx=e((()=>{F(),K()})),Cx=e((()=>{F(),K()})),wx=e((()=>{F(),K()})),Tx=e((()=>{F(),K()})),Ex=e((()=>{F(),K()})),Dx=e((()=>{F(),K()})),Ox=e((()=>{F(),K()})),kx=e((()=>{F(),K()})),Ax=e((()=>{F(),K()})),jx=e((()=>{F(),K()})),Mx=e((()=>{F(),K()})),Nx=e((()=>{F(),K()})),Px=e((()=>{F(),K()})),Fx=e((()=>{F(),K()})),Ix=e((()=>{F(),K()})),Lx=e((()=>{F(),K()})),Rx=e((()=>{F(),K()})),zx=e((()=>{F(),K()})),Bx=e((()=>{F(),K()})),Vx=e((()=>{F(),K()})),Hx=e((()=>{F(),K()})),Ux=e((()=>{F(),K()})),Wx=e((()=>{F(),K()})),Gx=e((()=>{F(),K()})),Kx=e((()=>{F(),K()})),qx=e((()=>{F(),K()})),Jx=e((()=>{F(),K()})),Yx=e((()=>{F(),K()})),Xx=e((()=>{F(),K()})),Zx=e((()=>{F(),K()})),Qx=e((()=>{F(),K()})),$x=e((()=>{F(),K()})),eS=e((()=>{F(),K()})),tS=e((()=>{F(),K()})),nS=e((()=>{F(),K()})),rS=e((()=>{F(),K()})),iS=e((()=>{F(),K()})),aS=e((()=>{F(),K()})),oS=e((()=>{F(),K()})),sS=e((()=>{F(),K()})),cS=e((()=>{F(),K()})),lS=e((()=>{F(),K()})),uS=e((()=>{F(),K()})),dS=e((()=>{F(),K()})),fS=e((()=>{F(),K()})),pS=e((()=>{F(),K()})),mS=e((()=>{F(),K()})),hS=e((()=>{F(),K()})),gS=e((()=>{F(),K()})),_S=e((()=>{F(),K()})),vS=e((()=>{F(),K()})),yS=e((()=>{F(),K()})),bS=e((()=>{F(),K()})),xS=e((()=>{F(),K()})),SS=e((()=>{F(),K()})),CS=e((()=>{F(),K()})),wS=e((()=>{F(),K()})),TS=e((()=>{F(),K()})),ES=e((()=>{F(),K()})),DS=e((()=>{F(),K()})),OS=e((()=>{F(),K()})),kS=e((()=>{F(),K()})),AS=e((()=>{F(),K()})),jS=e((()=>{F(),K()})),MS=e((()=>{F(),K()})),NS=e((()=>{F(),K()})),PS=e((()=>{F(),K()})),FS=e((()=>{F(),K()})),IS=e((()=>{F(),K()})),LS=e((()=>{F(),K()})),RS=e((()=>{F(),K()})),zS=e((()=>{F(),K()})),BS=e((()=>{F(),K()})),VS=e((()=>{F(),K()})),HS=e((()=>{F(),K()})),US=e((()=>{F(),K()})),WS=e((()=>{F(),K()})),GS=e((()=>{F(),K()})),KS=e((()=>{F(),K()})),qS=e((()=>{F(),K()})),JS=e((()=>{F(),K()})),YS=e((()=>{F(),K()})),XS=e((()=>{F(),K()})),ZS=e((()=>{F(),K()})),QS=e((()=>{F(),K()})),$S=e((()=>{F(),K()})),eC=e((()=>{F(),K()})),tC=e((()=>{F(),K()})),nC=e((()=>{F(),K()})),rC=e((()=>{F(),K()})),iC=e((()=>{F(),K()})),aC=e((()=>{F(),K()})),oC=e((()=>{F(),K()})),sC=e((()=>{F(),K()})),cC=e((()=>{F(),K()})),lC=e((()=>{F(),K()})),uC=e((()=>{F(),K()})),dC=e((()=>{F(),K()})),fC=e((()=>{F(),K()})),pC=e((()=>{F(),K()})),mC=e((()=>{F(),K()})),hC=e((()=>{F(),K()})),gC=e((()=>{F(),K()})),_C=e((()=>{F(),K()})),vC=e((()=>{F(),K()})),yC=e((()=>{F(),K()})),bC=e((()=>{F(),K()})),xC=e((()=>{F(),K()})),SC=e((()=>{F(),K()})),CC=e((()=>{F(),K()})),wC=e((()=>{F(),K()})),TC=e((()=>{F(),K()})),EC=e((()=>{F(),K()})),DC=e((()=>{F(),K()})),OC=e((()=>{F(),K()})),kC=e((()=>{F(),K()})),AC=e((()=>{F(),K()})),jC=e((()=>{F(),K()})),MC=e((()=>{F(),K()})),NC=e((()=>{F(),K()})),PC=e((()=>{F(),K()})),FC=e((()=>{F(),K()})),IC=e((()=>{F(),K()})),LC=e((()=>{F(),K()})),RC=e((()=>{F(),K()})),zC=e((()=>{F(),K()})),BC=e((()=>{F(),K()})),VC=e((()=>{F(),K()})),HC=e((()=>{F(),K()})),UC=e((()=>{F(),K()})),WC=e((()=>{F(),K()})),GC=e((()=>{F(),K()})),KC=e((()=>{F(),K()})),qC=e((()=>{F(),K()})),JC=e((()=>{F(),K()})),YC=e((()=>{F(),K()})),XC=e((()=>{F(),K()})),ZC=e((()=>{F(),K()})),QC=e((()=>{F(),K()})),$C=e((()=>{F(),K()})),ew=e((()=>{F(),K()})),tw=e((()=>{F(),K()})),nw=e((()=>{F(),K()})),rw=e((()=>{F(),K()})),iw=e((()=>{F(),K()})),aw=e((()=>{F(),K()})),ow=e((()=>{F(),K()})),sw=e((()=>{F(),K()})),cw=e((()=>{F(),K()})),lw=e((()=>{F(),K()})),uw=e((()=>{F(),K()})),dw=e((()=>{F(),K()})),fw=e((()=>{F(),K()})),pw=e((()=>{F(),K()})),mw=e((()=>{F(),K()})),hw=e((()=>{F(),K()})),gw=e((()=>{F(),K()})),_w=e((()=>{F(),K()})),vw=e((()=>{F(),K()})),yw=e((()=>{F(),K()})),bw=e((()=>{F(),K()})),xw=e((()=>{F(),K()})),Sw,Cw=e((()=>{F(),K(),J(),Sw=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>j`
  <svg
    slot=${G(e)}
    class=${`x-circle-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${r}
    height=${i}
    style=${G(a)}
  >
    ${q(t,()=>M`<title>${t}</title>`)}
    <path
      d="m15 9-6 6m0-6 6 6m7-3c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
`})),ww,Tw=e((()=>{F(),K(),J(),ww=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>j`
  <svg
    slot=${G(e)}
    class=${`x-close-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${r}
    height=${i}
    style=${G(a)}
  >
    ${q(t,()=>M`<title>${t}</title>`)}
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
`})),Ew=e((()=>{F(),K()})),Dw=e((()=>{F(),K()})),Ow=e((()=>{F(),K()})),kw=e((()=>{F(),K()})),Aw=e((()=>{F(),K()})),jw=e((()=>{F(),K()})),Mw=e((()=>{F(),K()})),Nw=e((()=>{F(),K()})),Pw=e((()=>{F(),K()})),Fw=e((()=>{Bn(),Vn(),Hn(),Un(),Wn(),Gn(),Kn(),qn(),Jn(),Yn(),Xn(),Zn(),Qn(),$n(),er(),tr(),nr(),rr(),ir(),ar(),or(),sr(),cr(),lr(),ur(),dr(),fr(),pr(),mr(),hr(),gr(),_r(),vr(),yr(),br(),xr(),Sr(),Cr(),wr(),Tr(),Er(),Dr(),Or(),kr(),Ar(),jr(),Mr(),Nr(),Pr(),Fr(),Ir(),Lr(),Rr(),zr(),Br(),Vr(),Hr(),Ur(),Wr(),Gr(),Kr(),qr(),Jr(),Yr(),Xr(),Zr(),Qr(),$r(),ei(),ti(),ni(),ri(),ii(),ai(),oi(),si(),ci(),li(),ui(),di(),fi(),pi(),mi(),hi(),gi(),_i(),vi(),yi(),bi(),xi(),Si(),Ci(),wi(),Ti(),Ei(),Di(),Oi(),ki(),Ai(),ji(),Mi(),Ni(),Pi(),Fi(),Ii(),Li(),Ri(),zi(),Bi(),Vi(),Hi(),Ui(),Wi(),Gi(),Ki(),qi(),Ji(),Yi(),Xi(),Zi(),Qi(),$i(),ea(),ta(),na(),ra(),ia(),aa(),oa(),sa(),ca(),la(),ua(),da(),fa(),pa(),ma(),ha(),ga(),_a(),va(),ya(),ba(),xa(),Sa(),Ca(),wa(),Ta(),Ea(),Da(),Oa(),ka(),Aa(),ja(),Ma(),Na(),Pa(),Fa(),Ia(),La(),Ra(),za(),Ba(),Va(),Ha(),Ua(),Wa(),Ga(),Ka(),qa(),Ja(),Ya(),Xa(),Za(),Qa(),$a(),eo(),to(),no(),ro(),io(),ao(),oo(),so(),co(),lo(),uo(),fo(),po(),mo(),ho(),go(),_o(),vo(),yo(),bo(),xo(),So(),Co(),wo(),To(),Eo(),Do(),Oo(),ko(),Ao(),jo(),Mo(),No(),Po(),Fo(),Io(),Lo(),Ro(),zo(),Bo(),Vo(),Ho(),Uo(),Wo(),Go(),Ko(),qo(),Jo(),Yo(),Xo(),Zo(),Qo(),$o(),ts(),ns(),rs(),is(),as(),os(),ss(),ls(),us(),ds(),fs(),ps(),ms(),hs(),gs(),_s(),vs(),ys(),bs(),xs(),Ss(),Cs(),ws(),Ts(),Es(),Ds(),Os(),ks(),As(),js(),Ms(),Ns(),Ps(),Fs(),Is(),Ls(),Rs(),zs(),Bs(),Vs(),Hs(),Us(),Ws(),Gs(),Ks(),qs(),Js(),Ys(),Xs(),Zs(),Qs(),$s(),ec(),tc(),nc(),rc(),ic(),ac(),oc(),sc(),cc(),lc(),uc(),dc(),fc(),pc(),mc(),hc(),gc(),_c(),vc(),yc(),bc(),xc(),Sc(),Cc(),wc(),Tc(),Ec(),Dc(),Oc(),kc(),Ac(),jc(),Mc(),Nc(),Pc(),Fc(),Ic(),Lc(),Rc(),zc(),Bc(),Vc(),Hc(),Uc(),Wc(),Gc(),Kc(),qc(),Jc(),Yc(),Xc(),Zc(),Qc(),$c(),el(),tl(),nl(),rl(),il(),al(),ol(),sl(),cl(),ll(),ul(),dl(),fl(),pl(),ml(),hl(),gl(),_l(),vl(),yl(),bl(),xl(),Sl(),Cl(),wl(),Tl(),El(),Dl(),Ol(),kl(),Al(),jl(),Ml(),Nl(),Pl(),Fl(),Il(),Ll(),Rl(),zl(),Bl(),Vl(),Hl(),Ul(),Wl(),Gl(),Kl(),ql(),Jl(),Yl(),Xl(),Zl(),Ql(),$l(),eu(),tu(),nu(),ru(),iu(),au(),ou(),su(),cu(),lu(),uu(),du(),fu(),pu(),mu(),hu(),gu(),_u(),vu(),bu(),Su(),Cu(),wu(),Tu(),Eu(),Du(),Ou(),ku(),Au(),ju(),Mu(),Nu(),Pu(),Fu(),Iu(),Lu(),zu(),Bu(),Vu(),Hu(),Uu(),Wu(),Gu(),Ku(),qu(),Ju(),Yu(),Xu(),Zu(),Qu(),$u(),ed(),td(),nd(),rd(),id(),ad(),od(),sd(),cd(),ld(),ud(),dd(),fd(),pd(),md(),hd(),gd(),_d(),vd(),yd(),bd(),xd(),Sd(),Cd(),wd(),Td(),Ed(),Dd(),Od(),kd(),Ad(),jd(),Md(),Nd(),Pd(),Fd(),Id(),Ld(),Rd(),zd(),Bd(),Vd(),Hd(),Ud(),Wd(),Gd(),Kd(),qd(),Jd(),Yd(),Xd(),Zd(),Qd(),$d(),ef(),tf(),nf(),rf(),af(),of(),sf(),cf(),lf(),uf(),df(),ff(),pf(),mf(),hf(),gf(),_f(),vf(),yf(),bf(),xf(),Sf(),Cf(),wf(),Tf(),Ef(),Df(),Of(),kf(),Af(),jf(),Mf(),Nf(),Pf(),Ff(),If(),Lf(),Rf(),zf(),Bf(),Vf(),Hf(),Uf(),Wf(),Gf(),Kf(),qf(),Jf(),Yf(),Xf(),Zf(),Qf(),$f(),ep(),tp(),np(),rp(),ip(),ap(),op(),sp(),cp(),lp(),up(),dp(),fp(),pp(),mp(),hp(),gp(),_p(),vp(),yp(),bp(),xp(),Sp(),Cp(),wp(),Tp(),Ep(),Dp(),Op(),kp(),Ap(),jp(),Mp(),Np(),Pp(),Fp(),Ip(),Lp(),Rp(),zp(),Bp(),Vp(),Hp(),Up(),Wp(),Gp(),Kp(),qp(),Jp(),Yp(),Xp(),Zp(),Qp(),$p(),em(),tm(),nm(),rm(),im(),am(),om(),sm(),cm(),lm(),um(),dm(),fm(),pm(),mm(),hm(),gm(),_m(),vm(),ym(),bm(),xm(),Sm(),Cm(),wm(),Tm(),Dm(),Om(),km(),Am(),jm(),Mm(),Nm(),Pm(),Fm(),Im(),Lm(),Rm(),zm(),Bm(),Vm(),Hm(),Um(),Wm(),Gm(),Km(),qm(),Jm(),Ym(),Xm(),Zm(),Qm(),$m(),eh(),th(),nh(),rh(),ih(),ah(),oh(),sh(),ch(),lh(),uh(),dh(),fh(),ph(),mh(),hh(),gh(),_h(),vh(),yh(),bh(),xh(),Sh(),Ch(),wh(),Th(),Eh(),Dh(),Oh(),kh(),Ah(),jh(),Mh(),Nh(),Ph(),Fh(),Ih(),Lh(),Rh(),zh(),Bh(),Vh(),Hh(),Uh(),Wh(),Gh(),Kh(),qh(),Jh(),Yh(),Xh(),Zh(),Qh(),$h(),eg(),tg(),ng(),rg(),ig(),ag(),og(),sg(),cg(),lg(),ug(),dg(),fg(),pg(),mg(),hg(),gg(),_g(),vg(),yg(),bg(),xg(),Sg(),Cg(),wg(),Tg(),Eg(),Dg(),Og(),kg(),Ag(),jg(),Mg(),Ng(),Pg(),Fg(),Ig(),Lg(),Rg(),zg(),Bg(),Vg(),Hg(),Ug(),Wg(),Gg(),Kg(),qg(),Jg(),Yg(),Xg(),Zg(),Qg(),$g(),e_(),t_(),n_(),r_(),i_(),a_(),o_(),s_(),c_(),l_(),u_(),d_(),f_(),p_(),m_(),h_(),g_(),__(),v_(),y_(),b_(),x_(),S_(),C_(),w_(),T_(),E_(),D_(),O_(),k_(),A_(),j_(),M_(),N_(),P_(),F_(),I_(),L_(),R_(),z_(),B_(),V_(),H_(),U_(),W_(),G_(),K_(),q_(),J_(),Y_(),X_(),Z_(),Q_(),$_(),ev(),tv(),nv(),rv(),iv(),av(),ov(),sv(),cv(),lv(),uv(),dv(),fv(),pv(),mv(),hv(),gv(),_v(),vv(),yv(),bv(),xv(),Sv(),Cv(),wv(),Tv(),Ev(),Dv(),Ov(),kv(),Av(),jv(),Mv(),Nv(),Pv(),Fv(),Iv(),Lv(),Rv(),zv(),Bv(),Vv(),Hv(),Uv(),Wv(),Gv(),Kv(),qv(),Jv(),Yv(),Xv(),Zv(),Qv(),$v(),ey(),ty(),ny(),ry(),iy(),ay(),oy(),sy(),cy(),ly(),uy(),dy(),fy(),py(),my(),hy(),gy(),_y(),vy(),yy(),by(),xy(),Sy(),Cy(),wy(),Ty(),Ey(),Dy(),Oy(),ky(),Ay(),jy(),My(),Ny(),Py(),Fy(),Iy(),Ly(),Ry(),zy(),By(),Vy(),Hy(),Uy(),Wy(),Gy(),Ky(),qy(),Jy(),Yy(),Xy(),Zy(),Qy(),$y(),eb(),tb(),nb(),rb(),ib(),ab(),ob(),sb(),cb(),lb(),ub(),db(),fb(),pb(),mb(),hb(),gb(),_b(),vb(),yb(),bb(),xb(),Sb(),Cb(),wb(),Tb(),Eb(),Db(),Ob(),kb(),Ab(),jb(),Mb(),Nb(),Pb(),Fb(),Ib(),Lb(),Rb(),zb(),Bb(),Vb(),Hb(),Ub(),Wb(),Gb(),Kb(),qb(),Jb(),Yb(),Xb(),Zb(),Qb(),$b(),ex(),tx(),nx(),rx(),ix(),ax(),ox(),sx(),cx(),lx(),ux(),dx(),fx(),px(),mx(),hx(),gx(),_x(),vx(),yx(),bx(),xx(),Sx(),Cx(),wx(),Tx(),Ex(),Dx(),Ox(),kx(),Ax(),jx(),Mx(),Nx(),Px(),Fx(),Ix(),Lx(),Rx(),zx(),Bx(),Vx(),Hx(),Ux(),Wx(),Gx(),Kx(),qx(),Jx(),Yx(),Xx(),Zx(),Qx(),$x(),eS(),tS(),nS(),rS(),iS(),aS(),oS(),sS(),cS(),lS(),uS(),dS(),fS(),pS(),mS(),hS(),gS(),_S(),vS(),yS(),bS(),xS(),SS(),CS(),wS(),TS(),ES(),DS(),OS(),kS(),AS(),jS(),MS(),NS(),PS(),FS(),IS(),LS(),RS(),zS(),BS(),VS(),HS(),US(),WS(),GS(),KS(),qS(),JS(),YS(),XS(),ZS(),QS(),$S(),eC(),tC(),nC(),rC(),iC(),aC(),oC(),sC(),cC(),lC(),uC(),dC(),fC(),pC(),mC(),hC(),gC(),_C(),vC(),yC(),bC(),xC(),SC(),CC(),wC(),TC(),EC(),DC(),OC(),kC(),AC(),jC(),MC(),NC(),PC(),FC(),IC(),LC(),RC(),zC(),BC(),VC(),HC(),UC(),WC(),GC(),KC(),qC(),JC(),YC(),XC(),ZC(),QC(),$C(),ew(),tw(),nw(),rw(),iw(),aw(),ow(),sw(),cw(),lw(),uw(),dw(),fw(),pw(),mw(),hw(),gw(),_w(),vw(),yw(),bw(),xw(),Cw(),Tw(),Ew(),Dw(),Ow(),kw(),Aw(),jw(),Mw(),Nw(),Pw()})),Iw,Lw=e((()=>{F(),H(),$e(),Iw=un(class extends dn{constructor(e){if(super(e),e.type!==V.PROPERTY&&e.type!==V.ATTRIBUTE&&e.type!==V.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ge(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===N||t===P)return t;let n=e.element,r=e.name;if(e.type===V.PROPERTY){if(t===n[r])return N}else if(e.type===V.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return N}else if(e.type===V.ATTRIBUTE&&n.getAttribute(r)===t+``)return N;return Xe(e),t}})})),Rw,zw=e((()=>{W(),Rw=Tt(I`
	/*
	 * Use border-box sizing for all elements.
	 * This is safe and doesn't conflict with child component styles.
	 */
	*,
	::before,
	::after,
	::backdrop,
	::file-selector-button {
		box-sizing: border-box;
	}

	/*
	 * Reset margins and padding on elements that typically have browser defaults.
	 * This is more targeted than using * to avoid affecting custom elements.
	 */
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	ul,
	ol,
	li,
	dl,
	dt,
	dd,
	figure,
	figcaption,
	fieldset,
	legend,
	form,
	hr,
	table,
	th,
	td {
		margin: 0;
		padding: 0;
	}

	/*
	 * Reset borders on elements that typically have them.
	 */
	fieldset,
	hr,
	iframe {
		border: 0 solid;
	}

	/*
	 * 1. Use a consistent sensible line-height in all browsers.
	 * 2. Prevent adjustments of font size after orientation changes in iOS.
	 * 3. Use a more readable tab size.
	 * 4. Use the configured font-family.
	 * 5. Disable tap highlights on iOS.
	 */
	:host {
		line-height: 1.5;
		-webkit-text-size-adjust: 100%;
		tab-size: 4;
		font-family: var(--cz-font-body);
		-webkit-tap-highlight-color: transparent;
	}

	/*
	 * Reset links to optimize for opt-in styling.
	 */
	a {
		color: inherit;
		text-decoration: inherit;
	}

	/*
	 * Add the correct font weight in Edge and Safari.
	 */
	b,
	strong {
		font-weight: bolder;
	}

	/*
	 * 1. Use the configured mono font-family.
	 * 2. Correct the odd em font sizing in all browsers.
	 */
	code,
	kbd,
	samp,
	pre {
		font-family: var(--cz-font-mono);
		font-size: 1em;
	}

	/*
	 * Add the correct font size in all browsers.
	 */
	small {
		font-size: 80%;
	}

	/*
	 * Prevent sub and sup from affecting line height.
	 */
	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}

	sub {
		bottom: -0.25em;
	}

	sup {
		top: -0.5em;
	}

	/*
	 * 1. Make replaced elements display: block by default.
	 * 2. Add vertical-align: middle for better alignment.
	 */
	img,
	svg,
	video,
	canvas,
	audio,
	iframe,
	embed,
	object {
		display: block;
		vertical-align: middle;
	}

	/*
	 * Constrain images and videos to parent width.
	 */
	img,
	video {
		max-width: 100%;
		height: auto;
	}

	/*
	 * Reset form controls:
	 * 1. Inherit font styles in all browsers.
	 * 2. Remove default margins, padding, and borders.
	 * 3. Remove border radius.
	 * 4. Remove background color.
	 */
	button,
	input,
	select,
	optgroup,
	textarea,
	::file-selector-button {
		margin: 0;
		padding: 0;
		border: 0 solid;
		font: inherit;
		font-feature-settings: inherit;
		font-variation-settings: inherit;
		letter-spacing: inherit;
		color: inherit;
		border-radius: 0;
		background-color: transparent;
	}

	/*
	 * Reset placeholder opacity in Firefox.
	 */
	::placeholder {
		opacity: 1;
		color: var(--cz-color-text-placeholder, currentcolor);
	}

	/*
	 * Prevent horizontal textarea resize.
	 */
	textarea {
		resize: vertical;
	}

	/*
	 * Remove the inner padding in Chrome and Safari on macOS.
	 */
	::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	/*
	 * Correct the inability to style the border radius in iOS Safari.
	 */
	button,
	input:where([type='button'], [type='reset'], [type='submit']),
	::file-selector-button {
		appearance: button;
	}

	/*
	 * Make elements with hidden attribute stay hidden.
	 */
	[hidden]:where(:not([hidden='until-found'])) {
		display: none !important;
	}
`)})),Bw,Vw=e((()=>{zw(),W(),F(),Bw=I`
	:host {
		display: flex;
		flex-direction: column;
		gap: var(--cosmoz-tooltip-gap, var(--cz-spacing));
		font-family: var(--cz-font-body);
	}

	::slotted([slot='heading']) {
		display: block;
	}

	::slotted([slot='description']) {
		margin: 0;
	}
`,customElements.define(`cosmoz-tooltip-content`,U(()=>j`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[Rw,Bw]}))})),Hw,Uw=e((()=>{W(),Hw=Tt(I`
	.cosmoz-tooltip-popover {
		position: fixed;
		inset: unset;
		pointer-events: none;
		text-align: left;
		margin: calc(var(--cz-spacing) * 2);
		position-try-fallbacks:
			flip-block,
			flip-inline,
			flip-block flip-inline;

		/* Reset popover defaults */
		border: none;
		white-space: normal;
		padding: var(--cosmoz-tooltip-padding, calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 3));
		border-radius: var(--cosmoz-tooltip-border-radius, var(--cz-radius-sm));
		max-width: var(--cosmoz-tooltip-max-width, 20rem);
		box-shadow: var(--cosmoz-tooltip-box-shadow, var(--cz-shadow-lg));
		background: var(--cosmoz-tooltip-bg-color, var(--cz-color-gray-900));
		font-size: var(--cosmoz-tooltip-font-size, var(--cz-text-xs));
		font-weight: var(--cosmoz-tooltip-font-weight, 400);
		line-height: var(--cosmoz-tooltip-line-height, var(--cz-text-xs-line-height));
		color: var(--cosmoz-tooltip-text-color, var(--cz-color-white));

		cosmoz-tooltip-content strong {
			font-weight: var(
	 			--cosmoz-tooltip-heading-font-weight,
	 			var(--cz-font-weight-semibold)
	 		);

			color: var(--cosmoz-tooltip-heading-color);
		}

		/* Animation - open state */
		opacity: 1;
		transform: translateY(0) scale(1);

		transition:
			opacity 150ms ease-out,
			transform 150ms ease-out,
			overlay 150ms ease-out allow-discrete,
			display 150ms ease-out allow-discrete;
	}

	@starting-style {
		.cosmoz-tooltip-popover:popover-open {
			opacity: 0;
			transform: translateY(4px) scale(0.96);
		}
	}

	.cosmoz-tooltip-popover:not(:popover-open) {
		opacity: 0;
		transform: translateY(4px) scale(0.96);
	}

	@media (prefers-reduced-motion: reduce) {
		.cosmoz-tooltip-popover {
			transition: none;
		}
	}
`)})),Ww,Gw,Kw=e((()=>{W(),F(),J(),Vw(),Uw(),Ww=(e,t,n)=>Pe(j`<cosmoz-tooltip-content>
			${q(t,()=>j`<strong slot="heading">${t}</strong>`)}
			${q(n,()=>j`<p slot="description">${n}</p>`)}
		</cosmoz-tooltip-content>`,e),Gw=(e,t)=>{let{for:n,heading:r,description:i,placement:a=`top`,delay:o=300,disabled:s=!1}=t,c=an(),l=!!(r||i)&&!s;R(()=>{if(!n||!l)return;let t=e.getRootNode(),u=t.adoptedStyleSheets??[];u.includes(Hw)||(t.adoptedStyleSheets=[...u,Hw]);let d=document.createElement(`div`);d.setAttribute(`popover`,`manual`),d.setAttribute(`role`,`tooltip`),d.classList.add(`cosmoz-tooltip-popover`),e.after(d),c.current=d,Ww(d,r,i);let f=`[name="${n}"]`,p=`--tooltip-anchor-${n}`,m,h=e=>{s||(clearTimeout(m),e.style.anchorName=p,d.style.positionAnchor=p,d.style.positionArea=a,m=window.setTimeout(()=>d.showPopover(),o))},g=()=>{clearTimeout(m),d.hidePopover()},_=e=>{let t=e.target.closest?.(f);t&&h(t)},v=e=>{let t=e.target.closest?.(f);if(!t)return;let n=e.relatedTarget;n&&t.contains(n)||g()},y=e=>{let t=e.target.closest?.(f);t&&h(t)},b=e=>{e.target.closest?.(f)&&g()};return t.addEventListener(`pointerover`,_),t.addEventListener(`pointerout`,v),t.addEventListener(`focusin`,y),t.addEventListener(`focusout`,b),()=>{clearTimeout(m),t.removeEventListener(`pointerover`,_),t.removeEventListener(`pointerout`,v),t.removeEventListener(`focusin`,y),t.removeEventListener(`focusout`,b),d.hidePopover(),d.remove(),c.current=void 0}},[n,a,o,l]),R(()=>{!n||!c.current||Ww(c.current,r,i)},[r,i,n]),R(()=>{!s||!c.current||c.current.hidePopover()},[s])}})),qw,Jw=e((()=>{W(),qw=e=>{let[t,n]=Yt(!1);return R(()=>{let t=e.current;if(!t)return;let r=()=>{n(t.assignedElements().length>0)};return r(),t.addEventListener(`slotchange`,r),()=>t.removeEventListener(`slotchange`,r)},[e.current]),t}})),Yw,Xw,Zw=e((()=>{zw(),W(),F(),Nn(),J(),Vw(),Uw(),Kw(),Jw(),Yw=I`
	:host {
		display: inline-block;
		anchor-name: --tooltip-anchor;
	}

	:host([for]) {
		display: contents;
		anchor-name: unset;
	}

	.cosmoz-tooltip-popover {
		position-anchor: --tooltip-anchor;
	}
`,Xw=e=>{let{heading:t,description:n,for:r,placement:i=`top`,delay:a=300,disabled:o=!1}=e,s=an(),c=an(),l=an(),u=qw(l),d=!!(t||n||u)&&!o,f=B(()=>{d&&(clearTimeout(c.current),c.current=window.setTimeout(()=>{s.current?.showPopover()},a))},[a,d]);R(()=>{o&&(clearTimeout(c.current),s.current?.hidePopover())},[o]);let p=B(()=>{clearTimeout(c.current),s.current?.hidePopover()},[]);return R(()=>{if(r)return;let t=t=>{let n=t.relatedTarget;n&&e.contains(n)||p()};return e.addEventListener(`pointerover`,f),e.addEventListener(`pointerout`,t),()=>{e.removeEventListener(`pointerover`,f),e.removeEventListener(`pointerout`,t)}},[r,f,p]),Gw(e,{for:r,heading:t,description:n,placement:i,delay:a,disabled:o}),r?P:d?j`
		<slot @focusin=${f} @focusout=${p}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${i}"
			${Mn(s)}
		>
			<cosmoz-tooltip-content>
				${q(t,()=>j`<strong slot="heading">${t}</strong>`)}
				${q(n,()=>j`<p slot="description">${n}</p>`)}
				<slot name="content" ${Mn(l)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:j`
			<slot></slot>
			<slot name="content" ${Mn(l)} hidden></slot>
		`},customElements.define(`cosmoz-tooltip`,U(Xw,{styleSheets:[Rw,Hw,Yw],observedAttributes:[`heading`,`description`,`for`,`placement`,`delay`,`disabled`]}))})),Qw=e((()=>{Zw()})),$w,eT,tT=e((()=>{Fw(),Qw(),F(),J(),$w=(e,{hint:t,label:n,invalid:r,errorMessage:i,compact:a,required:o})=>j`
		<!-- label: hidden in compact mode -->
		${q(!a&&n,()=>j`<label for="input" part="label"
					>${n}
					${q(o,()=>j`<span class="required">*</span>`)}
				</label>`)}
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
			</div>
			<!-- compact: tooltip always visible, red icon when invalid -->
			${q(a&&r&&i,()=>j`<cosmoz-tooltip
						placement="top"
						description=${i}
						delay="300"
					>
						${Em({width:`16px`,height:`16px`})}
					</cosmoz-tooltip>`)}

			<slot name="suffix"></slot>
		</div>
		<!-- hint: visible when valid, hidden when invalid or compact -->
		${q(!a&&t&&!r,()=>j`<span class="hint" part="hint">${t}</span>`)}
		<!-- error: replaces hint when invalid, hidden in compact -->
		${q(!a&&r&&i,()=>j`<span class="error" part="error">${i}</span>`)}
	`,eT=[`autocomplete`,`readonly`,`disabled`,`maxlength`,`invalid`]})),nT,rT=e((()=>{An(),nT=En`
	/* === Host === */

	:host {
		display: flex;
		flex-direction: column;
		gap: calc(var(--cz-spacing) * 1.5);
		position: relative;
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		font-family: var(--cz-font-body);
		margin-bottom: calc(var(--cz-spacing) * 6);
	}

	:host(:focus-within) {
		caret-color: var(--cz-color-text-primary);
	}

	:host([disabled]) .wrap {
		color: var(--cz-color-text-disabled);
		opacity: 0.5;
		cursor: not-allowed;
	}

	:host([disabled]) #input {
		cursor: not-allowed;
	}

	:host([invalid]) {
		caret-color: var(--cz-color-text-error);
	}

	:host([invalid]) .required,
	.error {
		color: var(--cz-color-text-error);
	}

	/* === Layout === */

	.wrap {
		display: flex;
		align-items: center;
		position: relative;
		width: 100%;
		border-radius: var(--cz-radius-md);
		box-shadow: inset 0 0 0 1px var(--cz-color-border-primary);
		overflow: hidden;
		transition-duration: 0.1s;
		transition-timing-function: linear;
		transition-property: box-shadow, background;
	}

	.wrap:has(#input:focus) {
		box-shadow: var(--cz-focus-ring);
	}

	:host([invalid]) .wrap {
		box-shadow: inset 0 0 0 1px var(--cz-color-border-error);
	}

	:host([invalid]) .wrap:has(#input:focus) {
		box-shadow: var(--cz-focus-ring-error);
	}

	.control {
		flex: 1;
		position: relative;
	}

	/* === Input === */

	#input {
		box-sizing: border-box;
		margin: 0;
		outline: none;
		border: none;
		width: 100%;
		display: block;
		background: transparent;
		line-height: inherit;
		font-size: inherit;
		font-family: inherit;
		resize: none;
		color: var(--cz-color-text-primary);
		padding-block: calc(var(--cz-spacing) * 2);
		padding-inline: calc(var(--cz-spacing) * 3);
	}

	#input::placeholder {
		color: var(--cz-color-text-placeholder);
	}

	#input::-webkit-inner-spin-button {
		z-index: 1;
	}

	/* === Label === */

	label {
		position: relative;
		font-size: var(--cz-text-sm);
		color: var(--cz-color-text-secondary);
	}

	/* === Hint & Error === */

	.hint {
		font-size: var(--cz-text-xs);
		color: var(--cz-color-text-tertiary);
		position: absolute;
		bottom: calc(var(--cz-spacing) * -6);
	}

	.error {
		font-size: var(--cz-text-xs);
		position: absolute;
		bottom: calc(var(--cz-spacing) * -6);
	}

	/* === Tooltip (fluid error indicator) === */

	cosmoz-tooltip {
		display: flex;
		align-items: center;
		margin-right: calc(var(--cz-spacing) * 2);
	}

	:host([invalid]) cosmoz-tooltip {
		color: var(--cz-color-text-error);
	}

	:host([variant='inline']) cosmoz-tooltip {
		display: none;
	}

	/* === Slots === */

	.wrap:has(#input:not(:placeholder-shown)) {
		slot[name='suffix']::slotted(*),
		slot[name='prefix']::slotted(*) {
			transform: translateY(var(--label-translate-y));
		}
	}

	/* === Variant: inline === */
	:host([variant='inline']) {
		margin-bottom: 0;
	}

	:host([variant='inline']) .wrap {
		margin-top: calc(var(--cz-spacing) * 2.5);
	}

	:host([variant='inline']) #input {
		padding-inline: 0;
	}

	:host([variant='inline']) #input::placeholder {
		color: transparent;
	}

	:host([variant='inline']) .wrap {
		border-radius: 0;
		box-shadow: none;
		padding-inline: 0;
	}

	:host([variant='inline']) .wrap:has(#input:focus) {
		box-shadow: none;
	}

	:host([variant='inline']) .hint,
	:host([variant='inline']) .error {
		display: none;
	}
	:host([variant='inline'][disabled]) label {
		color: var(--cz-color-text-disabled);
		opacity: 0.5;
		cursor: not-allowed;
	}
	:host([variant='inline']) label {
		position: absolute;
		top: 25%;
		left: 0;
		width: 100%;
		transform-origin: left;
		transition:
			transform 0.25s,
			width 0.25s;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		z-index: 1;
	}

	:host([variant='inline']:focus-within) label,
	:host([variant='inline'][has-value]) label {
		transform: translateY(-75%) scale(0.85);
	}

	:host([variant='inline']) {
		slot[name='suffix']::slotted(*),
		slot[name='prefix']::slotted(*) {
			transform: translateY(0);
		}
	}

	/* === Variant: cell === */

	:host([variant='cell']) {
		margin-bottom: 0;
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
	}

	:host([variant='cell']) .wrap:has(#input) {
		border: 0.5px solid var(--cz-color-bg-quaternary);
		border-radius: 0;
		box-shadow: none;
	}

	:host([variant='cell']) .wrap:has(#input:focus) {
		background: var(--cz-color-bg-quaternary);
	}

	:host([variant='cell'][invalid]) .wrap:has(#input) {
		border-color: var(--cz-color-border-error);
		box-shadow: none;
	}

	:host([variant='cell'][invalid]) .wrap:has(#input:focus) {
		background: var(--cz-color-bg-error);
		border: 0.5px solid transparent;
	}

	:host([variant='cell']) label {
		display: none;
	}

	:host([variant='cell']) .error {
		left: calc(var(--cz-spacing) * 3);
		bottom: 50%;
		transform: translateY(50%);
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		max-width: calc(100% - calc(var(--cz-spacing) * 6));
	}

	:host([variant='cell']:focus-within) .error,
	:host([variant='cell'][has-value]) .error {
		visibility: hidden;
	}

	/* === No spinner === */

	:host([no-spinner]) #input::-webkit-inner-spin-button {
		display: none;
	}
	:host([no-spinner]) #input {
		-moz-appearance: textfield;
		appearance: textfield;
	}

	/* === Autosize === */

	:host([autosize]) {
		width: min-content;
	}
	:host([autosize]) #input {
		--_pad: calc(var(--cz-spacing) * 12);
		min-width: calc(2ch + var(--_pad));
		width: calc(var(--chars) + var(--_pad));
	}
	:host([autosize]) .control {
		max-width: 100%;
	}

	:host([autosize][type='number']) #input {
		--width: calc(var(--chars) + 0.25em);
	}
	:host([autosize][type='number']:not([no-spinner])) #input {
		width: calc(var(--width) + 15px + var(--_pad));
		min-width: calc(2ch + 0.25em + 15px + var(--_pad));
	}
	:host([autosize][type='number'][no-spinner]) #input {
		width: calc(var(--width) + var(--_pad));
		min-width: calc(2ch + 0.25em + var(--_pad));
	}
	slot[name='prefix']::slotted(*) {
		padding-inline-start: calc(var(--cz-spacing) * 2);
	}

	slot[name='suffix']::slotted(*) {
		padding-inline-end: calc(var(--cz-spacing) * 2);
	}
`})),iT,aT=e((()=>{W(),iT=e=>z(()=>{if(e==null)return;let t=new RegExp(e,`u`);return e=>{!e.defaultPrevented&&e.data&&!t.test(e.data)&&e.preventDefault()}},[e])})),oT,sT=e((()=>{W(),oT=Nt(class extends L{values;constructor(e,t,n,r){super(e,t),Object.assign(t.host,n),this.values=r}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})),cT,lT=e((()=>{W(),cT=Nt(class extends L{update(){return this.state.host}})})),uT,dT,fT,pT=e((()=>{W(),lT(),uT=/([A-Z])/gu,dT=(e,t,n)=>{e[t]=n,e.dispatchEvent(new CustomEvent(t.replace(uT,`-$1`).toLowerCase()+`-changed`,{detail:{value:n}}))},fT=(e,t,n=[t])=>{let r=cT();R(()=>{dT(r,e,t)},n)}})),mT,hT=e((()=>{sT(),pT(),W(),mT=e=>{let t=an(void 0),n=B(e=>t.current=e,[]),r=e.shadowRoot,i=B(t=>e.dispatchEvent(new Event(t.type,{bubbles:t.bubbles})),[]),a=B(t=>dT(e,`value`,t.target.value),[]),o=B(t=>dT(e,`focused`,t.type===`focus`),[]),s=B(()=>{let n=t.current?.checkValidity();return e.toggleAttribute(`invalid`,!n),n},[]);return oT({validate:s},[s]),R(()=>{let e=e=>{e.composedPath()[0]?.closest?.(`input, textarea`)||(e.preventDefault(),t.current?.focus())};return r.addEventListener(`mousedown`,e),()=>r.removeEventListener(`mousedown`,e)},[]),{onChange:i,onFocus:o,onInput:a,onRef:n}}})),gT,_T,vT=e((()=>{gT=({placeholder:e})=>e||` `,_T=(e,t)=>t??(e===`date`?`9999-12-31`:void 0)})),yT,bT,xT=e((()=>{W(),F(),K(),Lw(),Nn(),tT(),rT(),aT(),hT(),vT(),yT=[`type`,`variant`,`hint`,`compact`,`required`,`pattern`,`allowed-pattern`,`min`,`max`,`step`,`autosize`,`label`,`placeholder`,...eT],bT=e=>{let{type:t=`text`,pattern:n,allowedPattern:r,autocomplete:i,value:a,readonly:o,disabled:s,min:c,max:l,step:u,maxlength:d,required:f}=e,{onChange:p,onFocus:m,onInput:h,onRef:g}=mT(e),_=iT(r);return e.toggleAttribute(`has-value`,!!a),$w(j`
			<input
				${Mn(g)}
				style="--chars: ${a?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${G(n)}
				autocomplete=${G(i)}
				placeholder=${gT({placeholder:e.placeholder})}
				?readonly=${o}
				aria-disabled=${s?`true`:`false`}
				?disabled=${s}
				?required=${f}
				.value=${Iw(a??``)}
				maxlength=${G(d)}
				@beforeinput=${_}
				@input=${h}
				@change=${p}
				@focus=${m}
				@blur=${m}
				min=${G(c)}
				max=${G(_T(t,l))}
				step=${G(u)}
			/>
		`,e)},customElements.define(`cosmoz-input`,U(bT,{observedAttributes:yT,styleSheets:[Tt(nT)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),ST,CT,wT,TT=e((()=>{W(),ST=e=>{e.style.height=``,e.style.height=`${e.scrollHeight}px`},CT=(e,t=0)=>{if(t>0){let n=e.getAttribute(`rows`)??``,r=e.style.height;e.style.height=``,e.setAttribute(`rows`,t),e.style.maxHeight=e.getBoundingClientRect().height+`px`,e.style.height=r,e.setAttribute(`rows`,n)}},wT=e=>{let{value:t,maxRows:n}=e,r=z(()=>()=>e.shadowRoot.querySelector(`#input`),[]);R(()=>CT(r(),n),[n,r]),R(()=>ST(r()),[r,t]),R(()=>{let e=r(),t=new ResizeObserver(()=>requestAnimationFrame(()=>ST(e)));return t.observe(e),()=>t.unobserve(e)},[r])}})),ET,DT,OT=e((()=>{F(),K(),Lw(),Nn(),W(),tT(),rT(),TT(),hT(),ET=[`rows`,`placeholder`,`label`,`hint`,`required`,...eT],DT=e=>{let{autocomplete:t,value:n,placeholder:r,readonly:i,disabled:a,rows:o,cols:s,maxlength:c}=e,{onChange:l,onFocus:u,onInput:d,onRef:f}=mT(e);return wT(e),$w(j`
			<textarea id="input" part="input"
				${Mn(f)}
				autocomplete=${G(t)}
				placeholder=${r||` `}
				rows=${o??1} cols=${G(s)}
				?readonly=${i} ?aria-disabled=${a} ?disabled=${a}
				.value=${Iw(n??``)} maxlength=${G(c)} @input=${d}
				@change=${l} @focus=${u} @blur=${u}>`,e)},customElements.define(`cosmoz-textarea`,U(DT,{observedAttributes:ET,styleSheets:[Tt(nT)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),kT,AT,jT,MT=e((()=>{W(),Lw(),J(),kT=e=>{let{label:t,value:n,disabled:r,error:i}=e,a=B(t=>e.dispatchEvent(new CustomEvent(`change`,{detail:t.target.checked})),[]);return j`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${Iw(!!n)}
			?disabled=${r}
			@change=${a}
		/>
		${q(t,()=>j`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${q(i,e=>j`<div class="failure">${e}</div>`)} `},AT=I`
	.toggle {
		appearance: none;
		width: calc(var(--cz-spacing) * 9);
		height: calc(var(--cz-spacing) * 4.5);
		display: inline-block;
		position: relative;
		border-radius: var(--cz-radius-3xl);
		overflow: hidden;
		outline: none;
		border: none;
		cursor: pointer;
		background: var(--cz-color-bg-quaternary);
		transition: background-color ease 0.25s;
		margin: 0;
	}
	.toggle::before {
		content: '';
		display: block;
		position: absolute;
		z-index: 2;
		width: calc(var(--cz-spacing) * 3.5);
		height: calc(var(--cz-spacing) * 3.5);
		background: var(--cz-color-brand-25);
		left: calc(var(--cz-spacing) * 0.5);
		top: calc(var(--cz-spacing) * 0.5);
		border-radius: var(--cz-radius-full);
		transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.25s;
	}
	.toggle:checked {
		background: var(--cz-color-bg-brand-solid);
	}
	.toggle:checked::before {
		left: calc(var(--cz-spacing) * 5);
	}
	label {
		padding-left: calc(var(--cz-spacing) * 4);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		color: var(--cz-color-text-secondary);
		cursor: pointer;
		user-select: none;
	}

	.failure {
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		color: var(--cz-color-text-secondary);
	}
	.toggle[disabled] {
		opacity: 0.6;
	}
`,jT=I`
	:host {
		display: block;
	}

	:host > * {
		vertical-align: middle;
		line-height: 0px;
	}

	::slotted(*) {
		margin-left: calc(var(--cz-spacing) * 1);
	}
`,customElements.define(`cosmoz-toggle`,U(kT,{styleSheets:[jT,AT],observedAttributes:[`label`,`disabled`,`error`]}))})),NT=e((()=>{xT(),OT(),MT(),hT(),tT(),rT()}));function PT(){let e=[],t=Object.create(null),n;return t.get=(r,i)=>(n?.revoke?.(),i===sE?e:(e.push(i),n=Proxy.revocable(r,t),n.proxy)),Proxy.revocable(Object.create(null),t).proxy}function FT(e,t){let{[sE]:n}=e(PT()),r=t?.keySeparator??`.`,i=t?.nsSeparator??`:`,a=t?.enableSelector===`strict`;if(n.length>1&&i){let e=t?.ns,o=a?Array.isArray(e)?e:e?[e]:null:Array.isArray(e)?e:null;if(o&&(a?o:o.length>1?o.slice(1):[]).includes(n[0]))return`${n[0]}${i}${n.slice(1).join(r)}`}return n.join(r)}var Y,IT,LT,RT,zT,BT,VT,HT,UT,WT,GT,KT,qT,X,JT,YT,XT,ZT,QT,$T,eE,tE,nE,rE,Z,iE,aE,oE,sE,cE,lE,uE,dE,fE,pE,mE,hE,gE,_E,vE,yE,bE,xE,SE,CE,wE,TE,EE,DE,Q,OE,kE=e((()=>{Y=e=>typeof e==`string`,IT=()=>{let e,t,n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n},LT=e=>e==null?``:String(e),RT=(e,t,n)=>{e.forEach(e=>{t[e]&&(n[e]=t[e])})},zT=/###/g,BT=e=>e&&e.includes(`###`)?e.replace(zT,`.`):e,VT=e=>!e||Y(e),HT=(e,t,n)=>{let r=Y(t)?t.split(`.`):t,i=0;for(;i<r.length-1;){if(VT(e))return{};let t=BT(r[i]);!e[t]&&n&&(e[t]=new n),e=Object.prototype.hasOwnProperty.call(e,t)?e[t]:{},++i}return VT(e)?{}:{obj:e,k:BT(r[i])}},UT=(e,t,n)=>{let{obj:r,k:i}=HT(e,t,Object);if(r!==void 0||t.length===1){r[i]=n;return}let a=t[t.length-1],o=t.slice(0,t.length-1),s=HT(e,o,Object);for(;s.obj===void 0&&o.length;)a=`${o[o.length-1]}.${a}`,o=o.slice(0,o.length-1),s=HT(e,o,Object),s?.obj&&s.obj[`${s.k}.${a}`]!==void 0&&(s.obj=void 0);s.obj[`${s.k}.${a}`]=n},WT=(e,t,n,r)=>{let{obj:i,k:a}=HT(e,t,Object);i[a]=i[a]||[],i[a].push(n)},GT=(e,t)=>{let{obj:n,k:r}=HT(e,t);if(n&&Object.prototype.hasOwnProperty.call(n,r))return n[r]},KT=(e,t,n)=>{let r=GT(e,n);return r===void 0?GT(t,n):r},qT=(e,t,n)=>{for(let r in t)r!==`__proto__`&&r!==`constructor`&&(Object.prototype.hasOwnProperty.call(e,r)?Y(e[r])||e[r]instanceof String||Y(t[r])||t[r]instanceof String?n&&(e[r]=t[r]):qT(e[r],t[r],n):e[r]=t[r]);return e},X=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,`\\$&`),JT={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`,"/":`&#x2F;`},YT=e=>Y(e)?e.replace(/[&<>"'\/]/g,e=>JT[e]):e,XT=class{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){let t=this.regExpMap.get(e);if(t!==void 0)return t;let n=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,n),this.regExpQueue.push(e),n}},ZT=[` `,`,`,`?`,`!`,`;`],QT=new XT(20),$T=(e,t,n)=>{t||=``,n||=``;let r=ZT.filter(e=>!t.includes(e)&&!n.includes(e));if(r.length===0)return!0;let i=QT.getRegExp(`(${r.map(e=>e===`?`?`\\?`:e).join(`|`)})`),a=!i.test(e);if(!a){let t=e.indexOf(n);t>0&&!i.test(e.substring(0,t))&&(a=!0)}return a},eE=(e,t,n=`.`)=>{if(!e)return;if(e[t])return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0;let r=t.split(n),i=e;for(let e=0;e<r.length;){if(!i||typeof i!=`object`)return;let t,a=``;for(let o=e;o<r.length;++o)if(o!==e&&(a+=n),a+=r[o],t=i[a],t!==void 0){if([`string`,`number`,`boolean`].includes(typeof t)&&o<r.length-1)continue;e+=o-e+1;break}i=t}return i},tE=e=>e?.replace(/_/g,`-`),nE={type:`logger`,log(e){this.output(`log`,e)},warn(e){this.output(`warn`,e)},error(e){this.output(`error`,e)},output(e,t){console?.[e]?.apply?.(console,t)}},rE=class e{constructor(e,t={}){this.init(e,t)}init(e,t={}){this.prefix=t.prefix||`i18next:`,this.logger=e||nE,this.options=t,this.debug=t.debug}log(...e){return this.forward(e,`log`,``,!0)}warn(...e){return this.forward(e,`warn`,``,!0)}error(...e){return this.forward(e,`error`,``)}deprecate(...e){return this.forward(e,`warn`,`WARNING DEPRECATED: `,!0)}forward(e,t,n,r){return r&&!this.debug?null:(e=e.map(e=>Y(e)?e.replace(/[\r\n\x00-\x1F\x7F]/g,` `):e),Y(e[0])&&(e[0]=`${n}${this.prefix} ${e[0]}`),this.logger[t](e))}create(t){return new e(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t||=this.options,t.prefix=t.prefix||this.prefix,new e(this.logger,t)}},Z=new rE,iE=class{constructor(){this.observers={}}on(e,t){return e.split(` `).forEach(e=>{this.observers[e]||(this.observers[e]=new Map);let n=this.observers[e].get(t)||0;this.observers[e].set(t,n+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}once(e,t){let n=(...r)=>{t(...r),this.off(e,n)};return this.on(e,n),this}emit(e,...t){this.observers[e]&&Array.from(this.observers[e].entries()).forEach(([e,n])=>{for(let r=0;r<n;r++)e(...t)}),this.observers[`*`]&&Array.from(this.observers[`*`].entries()).forEach(([n,r])=>{for(let i=0;i<r;i++)n(e,...t)})}},aE=class extends iE{constructor(e,t={ns:[`translation`],defaultNS:`translation`}){super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator=`.`),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.includes(e)||this.options.ns.push(e)}removeNamespaces(e){let t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,n,r={}){let i=r.keySeparator===void 0?this.options.keySeparator:r.keySeparator,a=r.ignoreJSONStructure===void 0?this.options.ignoreJSONStructure:r.ignoreJSONStructure,o;e.includes(`.`)?o=e.split(`.`):(o=[e,t],n&&(Array.isArray(n)?o.push(...n):Y(n)&&i?o.push(...n.split(i)):o.push(n)));let s=GT(this.data,o);return!s&&!t&&!n&&e.includes(`.`)&&(e=o[0],t=o[1],n=o.slice(2).join(`.`)),s||!a||!Y(n)?s:eE(this.data?.[e]?.[t],n,i)}addResource(e,t,n,r,i={silent:!1}){let a=i.keySeparator===void 0?this.options.keySeparator:i.keySeparator,o=[e,t];n&&(o=o.concat(a?n.split(a):n)),e.includes(`.`)&&(o=e.split(`.`),r=t,t=o[1]),this.addNamespaces(t),UT(this.data,o,r),i.silent||this.emit(`added`,e,t,n,r)}addResources(e,t,n,r={silent:!1}){for(let r in n)(Y(n[r])||Array.isArray(n[r]))&&this.addResource(e,t,r,n[r],{silent:!0});r.silent||this.emit(`added`,e,t,n)}addResourceBundle(e,t,n,r,i,a={silent:!1,skipCopy:!1}){let o=[e,t];e.includes(`.`)&&(o=e.split(`.`),r=n,n=t,t=o[1]),this.addNamespaces(t);let s=GT(this.data,o)||{};a.skipCopy||(n=JSON.parse(JSON.stringify(n))),r?qT(s,n,i):s={...s,...n},UT(this.data,o,s),a.silent||this.emit(`added`,e,t,n)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit(`removed`,e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||=this.options.defaultNS,this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){let t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(e=>t[e]&&Object.keys(t[e]).length>0)}toJSON(){return this.data}},oE={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,i){return e.forEach(e=>{t=this.processors[e]?.process(t,n,r,i)??t}),t}},sE=Symbol(`i18next/PATH_KEY`),cE=e=>!Y(e)&&typeof e!=`boolean`&&typeof e!=`number`,lE=class e extends iE{constructor(e,t={}){super(),RT([`resourceStore`,`languageUtils`,`pluralResolver`,`interpolator`,`backendConnector`,`i18nFormat`,`utils`],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator=`.`),this.logger=Z.create(`translator`),this.checkedLoadedFor={}}changeLanguage(e){e&&(this.language=e)}exists(e,t={interpolation:{}}){let n={...t};if(e==null)return!1;let r=this.resolve(e,n);if(r?.res===void 0)return!1;let i=cE(r.res);return!(n.returnObjects===!1&&i)}extractFromKey(e,t){let n=t.nsSeparator===void 0?this.options.nsSeparator:t.nsSeparator;n===void 0&&(n=`:`);let r=t.keySeparator===void 0?this.options.keySeparator:t.keySeparator,i=t.ns||this.options.defaultNS||[],a=n&&e.includes(n),o=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!$T(e,n,r);if(a&&!o){let t=e.match(this.interpolator.nestingRegexp);if(t&&t.length>0)return{key:e,namespaces:Y(i)?[i]:i};let a=e.split(n);(n!==r||n===r&&this.options.ns.includes(a[0]))&&(i=a.shift()),e=a.join(r)}return{key:e,namespaces:Y(i)?[i]:i}}translate(t,n,r){let i=typeof n==`object`?{...n}:n;if(typeof i!=`object`&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),typeof i==`object`&&(i={...i}),i||={},t==null)return``;typeof t==`function`&&(t=FT(t,{...this.options,...i})),Array.isArray(t)||(t=[String(t)]),t=t.map(e=>typeof e==`function`?FT(e,{...this.options,...i}):String(e));let a=i.returnDetails===void 0?this.options.returnDetails:i.returnDetails,o=i.keySeparator===void 0?this.options.keySeparator:i.keySeparator,{key:s,namespaces:c}=this.extractFromKey(t[t.length-1],i),l=c[c.length-1],u=i.nsSeparator===void 0?this.options.nsSeparator:i.nsSeparator;u===void 0&&(u=`:`);let d=i.lng||this.language,f=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(d?.toLowerCase()===`cimode`)return f?a?{res:`${l}${u}${s}`,usedKey:s,exactUsedKey:s,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:`${l}${u}${s}`:a?{res:s,usedKey:s,exactUsedKey:s,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:s;let p=this.resolve(t,i),m=p?.res,h=p?.usedKey||s,g=p?.exactUsedKey||s,_=[`[object Number]`,`[object Function]`,`[object RegExp]`],v=i.joinArrays===void 0?this.options.joinArrays:i.joinArrays,y=!this.i18nFormat||this.i18nFormat.handleAsObject,b=i.count!==void 0&&!Y(i.count),x=e.hasDefaultValue(i),S=b?this.pluralResolver.getSuffix(d,i.count,i):``,C=i.ordinal&&b?this.pluralResolver.getSuffix(d,i.count,{ordinal:!1}):``,w=b&&!i.ordinal&&i.count===0,T=w&&i[`defaultValue${this.options.pluralSeparator}zero`]||i[`defaultValue${S}`]||i[`defaultValue${C}`]||i.defaultValue,E=m;y&&!m&&x&&(E=T);let D=cE(E),ee=Object.prototype.toString.apply(E);if(y&&E&&D&&!_.includes(ee)&&!(Y(v)&&Array.isArray(E))){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn(`accessing an object - but returnObjects options is not enabled!`);let e=this.options.returnedObjectHandler?this.options.returnedObjectHandler(h,E,{...i,ns:c}):`key '${s} (${this.language})' returned an object instead of string.`;return a?(p.res=e,p.usedParams=this.getUsedParamsDetails(i),p):e}if(o){let e=Array.isArray(E),t=e?[]:{},n=e?g:h;for(let e in E)if(Object.prototype.hasOwnProperty.call(E,e)){let r=`${n}${o}${e}`;x&&!m?t[e]=this.translate(r,{...i,defaultValue:cE(T)?T[e]:void 0,joinArrays:!1,ns:c}):t[e]=this.translate(r,{...i,joinArrays:!1,ns:c}),t[e]===r&&(t[e]=E[e])}m=t}}else if(y&&Y(v)&&Array.isArray(m))m=m.join(v),m&&=this.extendTranslation(m,t,i,r);else{let e=!1,n=!1;!this.isValidLookup(m)&&x&&(e=!0,m=T),this.isValidLookup(m)||(n=!0,m=s);let a=(i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&n?void 0:m,c=x&&T!==m&&this.options.updateMissing;if(n||e||c){if(this.logger.log(c?`updateKey`:`missingKey`,d,l,b&&!c?`${s}${this.pluralResolver.getSuffix(d,i.count,i)}`:s,c?T:m),o){let e=this.resolve(s,{...i,keySeparator:!1});e&&e.res&&this.logger.warn(`Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.`)}let e=[],t=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo===`fallback`&&t&&t[0])for(let n=0;n<t.length;n++)e.push(t[n]);else this.options.saveMissingTo===`all`?e=this.languageUtils.toResolveHierarchy(i.lng||this.language):e.push(i.lng||this.language);let n=(e,t,n)=>{let r=x&&n!==m?n:a;this.options.missingKeyHandler?this.options.missingKeyHandler(e,l,t,r,c,i):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(e,l,t,r,c,i),this.emit(`missingKey`,e,l,t,m)};this.options.saveMissing&&(this.options.saveMissingPlurals&&b?e.forEach(e=>{let t=this.pluralResolver.getSuffixes(e,i);w&&i[`defaultValue${this.options.pluralSeparator}zero`]&&!t.includes(`${this.options.pluralSeparator}zero`)&&t.push(`${this.options.pluralSeparator}zero`),t.forEach(t=>{n([e],s+t,i[`defaultValue${t}`]||T)})}):n(e,s,T))}m=this.extendTranslation(m,t,i,p,r),n&&m===s&&this.options.appendNamespaceToMissingKey&&(m=`${l}${u}${s}`),(n||e)&&this.options.parseMissingKeyHandler&&(m=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}${u}${s}`:s,e?m:void 0,i))}return a?(p.res=m,p.usedParams=this.getUsedParamsDetails(i),p):m}extendTranslation(e,t,n,r,i){if(this.i18nFormat?.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});let a=Y(e)&&(n?.interpolation?.skipOnVariables===void 0?this.options.interpolation.skipOnVariables:n.interpolation.skipOnVariables),o;if(a){let t=e.match(this.interpolator.nestingRegexp);o=t&&t.length}let s=n.replace&&!Y(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),e=this.interpolator.interpolate(e,s,n.lng||this.language||r.usedLng,n),a){let t=e.match(this.interpolator.nestingRegexp),r=t&&t.length;o<r&&(n.nest=!1)}!n.lng&&r&&r.res&&(n.lng=this.language||r.usedLng),n.nest!==!1&&(e=this.interpolator.nest(e,(...e)=>i?.[0]===e[0]&&!n.context?(this.logger.warn(`It seems you are nesting recursively key: ${e[0]} in key: ${t[0]}`),null):this.translate(...e,t),n)),n.interpolation&&this.interpolator.reset()}let a=n.postProcess||this.options.postProcess,o=Y(a)?[a]:a;return e!=null&&o?.length&&n.applyPostProcessor!==!1&&(e=oE.handle(o,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),e}resolve(e,t={}){let n,r,i,a,o;return Y(e)&&(e=[e]),Array.isArray(e)&&(e=e.map(e=>typeof e==`function`?FT(e,{...this.options,...t}):e)),e.forEach(e=>{if(this.isValidLookup(n))return;let s=this.extractFromKey(e,t),c=s.key;r=c;let l=s.namespaces;this.options.fallbackNS&&(l=l.concat(this.options.fallbackNS));let u=t.count!==void 0&&!Y(t.count),d=u&&!t.ordinal&&t.count===0,f=t.context!==void 0&&(Y(t.context)||typeof t.context==`number`)&&t.context!==``,p=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);l.forEach(e=>{this.isValidLookup(n)||(o=e,!this.checkedLoadedFor[`${p[0]}-${e}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(o)&&(this.checkedLoadedFor[`${p[0]}-${e}`]=!0,this.logger.warn(`key "${r}" for languages "${p.join(`, `)}" won't get resolved as namespace "${o}" was not yet loaded`,`This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`)),p.forEach(r=>{if(this.isValidLookup(n))return;a=r;let o=[c];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(o,c,r,e,t);else{let e;u&&(e=this.pluralResolver.getSuffix(r,t.count,t));let n=`${this.options.pluralSeparator}zero`,i=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(u&&(t.ordinal&&e.startsWith(i)&&o.push(c+e.replace(i,this.options.pluralSeparator)),o.push(c+e),d&&o.push(c+n)),f){let r=`${c}${this.options.contextSeparator||`_`}${t.context}`;o.push(r),u&&(t.ordinal&&e.startsWith(i)&&o.push(r+e.replace(i,this.options.pluralSeparator)),o.push(r+e),d&&o.push(r+n))}}let s;for(;s=o.pop();)this.isValidLookup(n)||(i=s,n=this.getResource(r,e,s,t))}))})}),{res:n,usedKey:r,exactUsedKey:i,usedLng:a,usedNS:o}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e===``)}getResource(e,t,n,r={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(e,t,n,r):this.resourceStore.getResource(e,t,n,r)}getUsedParamsDetails(e={}){let t=[`defaultValue`,`ordinal`,`context`,`replace`,`lng`,`lngs`,`fallbackLng`,`ns`,`keySeparator`,`nsSeparator`,`returnObjects`,`returnDetails`,`joinArrays`,`postProcess`,`interpolation`],n=e.replace&&!Y(e.replace),r=n?e.replace:e;if(n&&e.count!==void 0&&(r={...r,count:e.count}),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!n){r={...r};for(let e of t)delete r[e]}return r}static hasDefaultValue(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&t.startsWith(`defaultValue`)&&e[t]!==void 0)return!0;return!1}},uE=class{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Z.create(`languageUtils`)}getScriptPartFromCode(e){if(e=tE(e),!e||!e.includes(`-`))return null;let t=e.split(`-`);return t.length===2||(t.pop(),t[t.length-1].toLowerCase()===`x`)?null:this.formatLanguageCode(t.join(`-`))}getLanguagePartFromCode(e){if(e=tE(e),!e||!e.includes(`-`))return e;let t=e.split(`-`);return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(Y(e)&&e.includes(`-`)){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load===`languageOnly`||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.includes(e)}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(e=>{if(t)return;let n=this.formatLanguageCode(e);(!this.options.supportedLngs||this.isSupportedCode(n))&&(t=n)}),!t&&this.options.supportedLngs&&e.forEach(e=>{if(t)return;let n=this.getScriptPartFromCode(e);if(this.isSupportedCode(n))return t=n;let r=this.getLanguagePartFromCode(e);if(this.isSupportedCode(r))return t=r;t=this.options.supportedLngs.find(e=>e===r?!0:!e.includes(`-`)&&!r.includes(`-`)?!1:!!(e.includes(`-`)&&!r.includes(`-`)&&e.slice(0,e.indexOf(`-`))===r||e.startsWith(r)&&r.length>1))}),t||=this.getFallbackCodes(this.options.fallbackLng)[0],t}getFallbackCodes(e,t){if(!e)return[];if(typeof e==`function`&&(e=e(t)),Y(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let n=e[t];return n||=e[this.getScriptPartFromCode(t)],n||=e[this.formatLanguageCode(t)],n||=e[this.getLanguagePartFromCode(t)],n||=e.default,n||[]}toResolveHierarchy(e,t){let n=this.getFallbackCodes((t===!1?[]:t)||this.options.fallbackLng||[],e),r=[],i=e=>{e&&(this.isSupportedCode(e)?r.push(e):this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))};return Y(e)&&(e.includes(`-`)||e.includes(`_`))?(this.options.load!==`languageOnly`&&i(this.formatLanguageCode(e)),this.options.load!==`languageOnly`&&this.options.load!==`currentOnly`&&i(this.getScriptPartFromCode(e)),this.options.load!==`currentOnly`&&i(this.getLanguagePartFromCode(e))):Y(e)&&i(this.formatLanguageCode(e)),n.forEach(e=>{r.includes(e)||i(this.formatLanguageCode(e))}),r}},dE={zero:0,one:1,two:2,few:3,many:4,other:5},fE={select:e=>e===1?`one`:`other`,resolvedOptions:()=>({pluralCategories:[`one`,`other`]})},pE=class{constructor(e,t={}){this.languageUtils=e,this.options=t,this.logger=Z.create(`pluralResolver`),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(e,t={}){let n=tE(e===`dev`?`en`:e),r=t.ordinal?`ordinal`:`cardinal`,i=JSON.stringify({cleanedCode:n,type:r});if(i in this.pluralRulesCache)return this.pluralRulesCache[i];let a;try{a=new Intl.PluralRules(n,{type:r})}catch{if(typeof Intl>`u`)return this.logger.error(`No Intl support, please use an Intl polyfill!`),fE;if(!e.match(/-|_/))return fE;let n=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(n,t)}return this.pluralRulesCache[i]=a,a}needsPlural(e,t={}){let n=this.getRule(e,t);return n||=this.getRule(`dev`,t),n?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(e,t,n={}){return this.getSuffixes(e,n).map(e=>`${t}${e}`)}getSuffixes(e,t={}){let n=this.getRule(e,t);return n||=this.getRule(`dev`,t),n?n.resolvedOptions().pluralCategories.sort((e,t)=>dE[e]-dE[t]).map(e=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:``}${e}`):[]}getSuffix(e,t,n={}){let r=this.getRule(e,n);return r?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:``}${r.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix(`dev`,t,n))}},mE=(e,t,n,r=`.`,i=!0)=>{let a=KT(e,t,n);return!a&&i&&Y(n)&&(a=eE(e,n,r),a===void 0&&(a=eE(t,n,r))),a},hE=e=>e.replace(/\$/g,`$$$$`),gE=class{constructor(e={}){this.logger=Z.create(`interpolator`),this.options=e,this.format=e?.interpolation?.format||(e=>e),this.init(e)}init(e={}){e.interpolation||={escapeValue:!0};let{escape:t,escapeValue:n,useRawValueToEscape:r,prefix:i,prefixEscaped:a,suffix:o,suffixEscaped:s,formatSeparator:c,unescapeSuffix:l,unescapePrefix:u,nestingPrefix:d,nestingPrefixEscaped:f,nestingSuffix:p,nestingSuffixEscaped:m,nestingOptionsSeparator:h,maxReplaces:g,alwaysFormat:_}=e.interpolation;this.escape=t===void 0?YT:t,this.escapeValue=n===void 0||n,this.useRawValueToEscape=r!==void 0&&r,this.prefix=i?X(i):a||`{{`,this.suffix=o?X(o):s||`}}`,this.formatSeparator=c||`,`,this.unescapePrefix=l?``:u?X(u):`-`,this.unescapeSuffix=this.unescapePrefix?``:l?X(l):``,this.nestingPrefix=d?X(d):f||X(`$t(`),this.nestingSuffix=p?X(p):m||X(`)`),this.nestingOptionsSeparator=h||`,`,this.maxReplaces=g||1e3,this.alwaysFormat=_!==void 0&&_,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){let e=(e,t)=>e?.source===t?(e.lastIndex=0,e):new RegExp(t,`g`);this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,t,n,r){let i,a,o,s=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=e=>{if(!e.includes(this.formatSeparator)){let i=mE(t,s,e,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(i,void 0,n,{...r,...t,interpolationkey:e}):i}let i=e.split(this.formatSeparator),a=i.shift().trim(),o=i.join(this.formatSeparator).trim();return this.format(mE(t,s,a,this.options.keySeparator,this.options.ignoreJSONStructure),o,n,{...r,...t,interpolationkey:a})};this.resetRegExp(),!this.escapeValue&&typeof e==`string`&&/\$t\([^)]*\{[^}]*\{\{/.test(e)&&this.logger.warn(`nesting options string contains interpolated variables with escapeValue: false — if any of those values are attacker-controlled they can inject additional nesting options (e.g. redirect lng/ns). Sanitise untrusted input before passing it to t(), or keep escapeValue: true.`);let l=r?.missingInterpolationHandler||this.options.missingInterpolationHandler,u=r?.interpolation?.skipOnVariables===void 0?this.options.interpolation.skipOnVariables:r.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:e=>e},{regex:this.regexp,safeValue:e=>this.escapeValue?this.escape(e):e}].forEach(t=>{for(o=0;i=t.regex.exec(e);){let n=i[1].trim();if(a=c(n),a===void 0)if(typeof l==`function`){let t=l(e,i,r);a=Y(t)?t:``}else if(r&&Object.prototype.hasOwnProperty.call(r,n))a=``;else if(u){a=i[0];continue}else this.logger.warn(`missed to pass in variable ${n} for interpolating ${e}`),a=``;else!Y(a)&&!this.useRawValueToEscape&&(a=LT(a));let s=t.safeValue(a);if(e=e.replace(i[0],hE(s)),u?(t.regex.lastIndex+=s.length,t.regex.lastIndex-=i[0].length):t.regex.lastIndex=0,o++,o>=this.maxReplaces)break}}),e}nest(e,t,n={}){let r,i,a,o=(e,t)=>{let n=this.nestingOptionsSeparator;if(!e.includes(n))return e;let r=e.split(RegExp(`${X(n)}[ ]*{`)),i=`{${r[1]}`;e=r[0],i=this.interpolate(i,a);let o=i.match(/'/g),s=i.match(/"/g);((o?.length??0)%2==0&&!s||(s?.length??0)%2!=0)&&(i=i.replace(/'/g,`"`));try{a=JSON.parse(i),t&&(a={...t,...a})}catch(t){return this.logger.warn(`failed parsing options string in nesting for key ${e}`,t),`${e}${n}${i}`}return a.defaultValue&&a.defaultValue.includes(this.prefix)&&delete a.defaultValue,e};for(;r=this.nestingRegexp.exec(e);){let s=[];a={...n},a=a.replace&&!Y(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let c=/{.*}/s.test(r[1])?r[1].lastIndexOf(`}`)+1:r[1].indexOf(this.formatSeparator);if(c!==-1&&(s=r[1].slice(c).split(this.formatSeparator).map(e=>e.trim()).filter(Boolean),r[1]=r[1].slice(0,c)),i=t(o.call(this,r[1].trim(),a),a),i&&r[0]===e&&!Y(i))return i;Y(i)||(i=LT(i)),i||=(this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`),``),s.length&&(i=s.reduce((e,t)=>this.format(e,t,n.lng,{...n,interpolationkey:r[1].trim()}),i.trim())),e=e.replace(r[0],i),this.regexp.lastIndex=0}return e}},_E=e=>{let t=e.toLowerCase().trim(),n={};if(e.includes(`(`)){let r=e.split(`(`);t=r[0].toLowerCase().trim();let i=r[1].slice(0,-1);t===`currency`&&!i.includes(`:`)?n.currency||=i.trim():t===`relativetime`&&!i.includes(`:`)?n.range||=i.trim():i.split(`;`).forEach(e=>{if(e){let[t,...r]=e.split(`:`),i=r.join(`:`).trim().replace(/^'+|'+$/g,``),a=t.trim();n[a]||(n[a]=i),i===`false`&&(n[a]=!1),i===`true`&&(n[a]=!0),isNaN(i)||(n[a]=parseInt(i,10))}})}return{formatName:t,formatOptions:n}},vE=e=>{let t={};return(n,r,i)=>{let a=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(a={...a,[i.interpolationkey]:void 0});let o=r+JSON.stringify(a),s=t[o];return s||(s=e(tE(r),i),t[o]=s),s(n)}},yE=e=>(t,n,r)=>e(tE(n),r)(t),bE=class{constructor(e={}){this.logger=Z.create(`formatter`),this.options=e,this.init(e)}init(e,t={interpolation:{}}){this.formatSeparator=t.interpolation.formatSeparator||`,`;let n=t.cacheInBuiltFormats?vE:yE;this.formats={number:n((e,t)=>{let n=new Intl.NumberFormat(e,{...t});return e=>n.format(e)}),currency:n((e,t)=>{let n=new Intl.NumberFormat(e,{...t,style:`currency`});return e=>n.format(e)}),datetime:n((e,t)=>{let n=new Intl.DateTimeFormat(e,{...t});return e=>n.format(e)}),relativetime:n((e,t)=>{let n=new Intl.RelativeTimeFormat(e,{...t});return e=>n.format(e,t.range||`day`)}),list:n((e,t)=>{let n=new Intl.ListFormat(e,{...t});return e=>n.format(e)})}}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=vE(t)}format(e,t,n,r={}){if(!t||e==null)return e;let i=t.split(this.formatSeparator),a=[];for(let e=0;e<i.length;e++){let t=i[e];for(;t.indexOf(`(`)>-1&&!t.includes(`)`)&&e+1<i.length;)t=`${t}${this.formatSeparator}${i[++e]}`;a.push(t)}return a.reduce((e,t)=>{let{formatName:i,formatOptions:a}=_E(t);if(this.formats[i]){let t=e;try{let o=r?.formatParams?.[r.interpolationkey]||{},s=o.locale||o.lng||r.locale||r.lng||n;t=this.formats[i](e,s,{...a,...r,...o})}catch(e){this.logger.warn(e)}return t}else this.logger.warn(`there was no format function for ${i}`);return e},e)}},xE=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)},SE=class extends iE{constructor(e,t,n,r={}){super(),this.backend=e,this.store=t,this.services=n,this.languageUtils=n.languageUtils,this.options=r,this.logger=Z.create(`backendConnector`),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(n,r.backend,r)}queueLoad(e,t,n,r){let i={},a={},o={},s={};return e.forEach(e=>{let r=!0;t.forEach(t=>{let o=`${e}|${t}`;!n.reload&&this.store.hasResourceBundle(e,t)?this.state[o]=2:this.state[o]<0||(this.state[o]===1?a[o]===void 0&&(a[o]=!0):(this.state[o]=1,r=!1,a[o]===void 0&&(a[o]=!0),i[o]===void 0&&(i[o]=!0),s[t]===void 0&&(s[t]=!0)))}),r||(o[e]=!0)}),(Object.keys(i).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(i),pending:Object.keys(a),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(s)}}loaded(e,t,n){let r=e.split(`|`),i=r[0],a=r[1];t&&this.emit(`failedLoading`,i,a,t),!t&&n&&this.store.addResourceBundle(i,a,n,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&n&&(this.state[e]=0);let o={};this.queue.forEach(n=>{WT(n.loaded,[i],a),xE(n,e),t&&n.errors.push(t),n.pendingCount===0&&!n.done&&(Object.keys(n.loaded).forEach(e=>{o[e]||(o[e]={});let t=n.loaded[e];t.length&&t.forEach(t=>{o[e][t]===void 0&&(o[e][t]=!0)})}),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())}),this.emit(`loaded`,o),this.queue=this.queue.filter(e=>!e.done)}read(e,t,n,r=0,i=this.retryTimeout,a){if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:n,tried:r,wait:i,callback:a});return}this.readingCalls++;let o=(o,s)=>{if(this.readingCalls--,this.waitingReads.length>0){let e=this.waitingReads.shift();this.read(e.lng,e.ns,e.fcName,e.tried,e.wait,e.callback)}if(o&&s&&r<this.maxRetries){setTimeout(()=>{this.read(e,t,n,r+1,i*2,a)},i);return}a(o,s)},s=this.backend[n].bind(this.backend);if(s.length===2){try{let n=s(e,t);n&&typeof n.then==`function`?n.then(e=>o(null,e)).catch(o):o(null,n)}catch(e){o(e)}return}return s(e,t,o)}prepareLoading(e,t,n={},r){if(!this.backend)return this.logger.warn(`No backend was added via i18next.use. Will not load resources.`),r&&r();Y(e)&&(e=this.languageUtils.toResolveHierarchy(e)),Y(t)&&(t=[t]);let i=this.queueLoad(e,t,n,r);if(!i.toLoad.length)return i.pending.length||r(),null;i.toLoad.forEach(e=>{this.loadOne(e)})}load(e,t,n){this.prepareLoading(e,t,{},n)}reload(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}loadOne(e,t=``){let n=e.split(`|`),r=n[0],i=n[1];this.read(r,i,`read`,void 0,void 0,(n,a)=>{n&&this.logger.warn(`${t}loading namespace ${i} for language ${r} failed`,n),!n&&a&&this.logger.log(`${t}loaded namespace ${i} for language ${r}`,a),this.loaded(e,n,a)})}saveMissing(e,t,n,r,i,a={},o=()=>{}){if(this.services?.utils?.hasLoadedNamespace&&!this.services?.utils?.hasLoadedNamespace(t)){this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`,`This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`);return}if(!(n==null||n===``)){if(this.backend?.create){let s={...a,isUpdate:i},c=this.backend.create.bind(this.backend);if(c.length<6)try{let i;i=c.length===5?c(e,t,n,r,s):c(e,t,n,r),i&&typeof i.then==`function`?i.then(e=>o(null,e)).catch(o):o(null,i)}catch(e){o(e)}else c(e,t,n,r,o,s)}!e||!e[0]||this.store.addResource(e[0],t,n,r)}}},CE=()=>({debug:!1,initAsync:!0,ns:[`translation`],defaultNS:[`translation`],fallbackLng:[`dev`],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:`all`,preload:!1,keySeparator:`.`,nsSeparator:`:`,pluralSeparator:`_`,contextSeparator:`_`,enableSelector:!1,partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:`fallback`,saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]==`object`&&(t=e[1]),Y(e[1])&&(t.defaultValue=e[1]),Y(e[2])&&(t.tDescription=e[2]),typeof e[2]==`object`||typeof e[3]==`object`){let n=e[3]||e[2];Object.keys(n).forEach(e=>{t[e]=n[e]})}return t},interpolation:{escapeValue:!0,prefix:`{{`,suffix:`}}`,formatSeparator:`,`,unescapePrefix:`-`,nestingPrefix:`$t(`,nestingSuffix:`)`,nestingOptionsSeparator:`,`,maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),wE=e=>(Y(e.ns)&&(e.ns=[e.ns]),Y(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),Y(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&!e.supportedLngs.includes(`cimode`)&&(e.supportedLngs=e.supportedLngs.concat([`cimode`])),e),TE=()=>{},EE=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(t=>{typeof e[t]==`function`&&(e[t]=e[t].bind(e))})},DE=class e extends iE{constructor(e={},t){if(super(),this.options=wE(e),this.services={},this.logger=Z,this.modules={external:[]},EE(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(e={},t){this.isInitializing=!0,typeof e==`function`&&(t=e,e={}),e.defaultNS==null&&e.ns&&(Y(e.ns)?e.defaultNS=e.ns:e.ns.includes(`translation`)||(e.defaultNS=e.ns[0]));let n=CE();this.options={...n,...this.options,...wE(e)},this.options.interpolation={...n.interpolation,...this.options.interpolation},e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator),typeof this.options.overloadTranslationOptionHandler!=`function`&&(this.options.overloadTranslationOptionHandler=n.overloadTranslationOptionHandler);let r=e=>e?typeof e==`function`?new e:e:null;if(!this.options.isClone){this.modules.logger?Z.init(r(this.modules.logger),this.options):Z.init(null,this.options);let e;e=this.modules.formatter?this.modules.formatter:bE;let t=new uE(this.options);this.store=new aE(this.options.resources,this.options);let n=this.services;n.logger=Z,n.resourceStore=this.store,n.languageUtils=t,n.pluralResolver=new pE(t,{prepend:this.options.pluralSeparator}),e&&(n.formatter=r(e),n.formatter.init&&n.formatter.init(n,this.options),this.options.interpolation.format=n.formatter.format.bind(n.formatter)),n.interpolator=new gE(this.options),n.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},n.backendConnector=new SE(r(this.modules.backend),n.resourceStore,n,this.options),n.backendConnector.on(`*`,(e,...t)=>{this.emit(e,...t)}),this.modules.languageDetector&&(n.languageDetector=r(this.modules.languageDetector),n.languageDetector.init&&n.languageDetector.init(n,this.options.detection,this.options)),this.modules.i18nFormat&&(n.i18nFormat=r(this.modules.i18nFormat),n.i18nFormat.init&&n.i18nFormat.init(this)),this.translator=new lE(this.services,this.options),this.translator.on(`*`,(e,...t)=>{this.emit(e,...t)}),this.modules.external.forEach(e=>{e.init&&e.init(this)})}if(this.format=this.options.interpolation.format,t||=TE,this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){let e=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);e.length>0&&e[0]!==`dev`&&(this.options.lng=e[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn(`init: no languageDetector is used and no lng is defined`),[`getResource`,`hasResourceBundle`,`getResourceBundle`,`getDataByLanguage`].forEach(e=>{this[e]=(...t)=>this.store[e](...t)}),[`addResource`,`addResources`,`addResourceBundle`,`removeResourceBundle`].forEach(e=>{this[e]=(...t)=>(this.store[e](...t),this)});let i=IT(),a=()=>{let e=(e,n)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn(`init: i18next is already initialized. You should call init just once!`),this.isInitialized=!0,this.options.isClone||this.logger.log(`initialized`,this.options),this.emit(`initialized`,this.options),i.resolve(n),t(e,n)};if((this.languages||this.isLanguageChangingTo)&&!this.isInitialized)return e(null,this.t.bind(this));this.changeLanguage(this.options.lng,e)};return this.options.resources||!this.options.initAsync?a():setTimeout(a,0),i}loadResources(e,t=TE){let n=t,r=Y(e)?e:this.language;if(typeof e==`function`&&(n=e),!this.options.resources||this.options.partialBundledLanguages){if(r?.toLowerCase()===`cimode`&&(!this.options.preload||this.options.preload.length===0))return n();let e=[],t=t=>{t&&t!==`cimode`&&this.services.languageUtils.toResolveHierarchy(t).forEach(t=>{t!==`cimode`&&(e.includes(t)||e.push(t))})};r?t(r):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(e=>t(e)),this.options.preload?.forEach?.(e=>t(e)),this.services.backendConnector.load(e,this.options.ns,e=>{!e&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),n(e)})}else n(null)}reloadResources(e,t,n){let r=IT();return typeof e==`function`&&(n=e,e=void 0),typeof t==`function`&&(n=t,t=void 0),e||=this.languages,t||=this.options.ns,n||=TE,this.services.backendConnector.reload(e,t,e=>{r.resolve(),n(e)}),r}use(e){if(!e)throw Error(`You are passing an undefined module! Please check the object you are passing to i18next.use()`);if(!e.type)throw Error(`You are passing a wrong module! Please check the object you are passing to i18next.use()`);return e.type===`backend`&&(this.modules.backend=e),(e.type===`logger`||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type===`languageDetector`&&(this.modules.languageDetector=e),e.type===`i18nFormat`&&(this.modules.i18nFormat=e),e.type===`postProcessor`&&oE.addPostProcessor(e),e.type===`formatter`&&(this.modules.formatter=e),e.type===`3rdParty`&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&![`cimode`,`dev`].includes(e)){for(let e=0;e<this.languages.length;e++){let t=this.languages[e];if(![`cimode`,`dev`].includes(t)&&this.store.hasLanguageSomeTranslations(t)){this.resolvedLanguage=t;break}}!this.resolvedLanguage&&!this.languages.includes(e)&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,t){this.isLanguageChangingTo=e;let n=IT();this.emit(`languageChanging`,e);let r=e=>{this.language=e,this.languages=this.services.languageUtils.toResolveHierarchy(e),this.resolvedLanguage=void 0,this.setResolvedLanguage(e)},i=(i,a)=>{a?this.isLanguageChangingTo===e&&(r(a),this.translator.changeLanguage(a),this.isLanguageChangingTo=void 0,this.emit(`languageChanged`,a),this.logger.log(`languageChanged`,a)):this.isLanguageChangingTo=void 0,n.resolve((...e)=>this.t(...e)),t&&t(i,(...e)=>this.t(...e))},a=t=>{!e&&!t&&this.services.languageDetector&&(t=[]);let n=Y(t)?t:t&&t[0],a=this.store.hasLanguageSomeTranslations(n)?n:this.services.languageUtils.getBestMatchFromCodes(Y(t)?[t]:t);a&&(this.language||r(a),this.translator.language||this.translator.changeLanguage(a),this.services.languageDetector?.cacheUserLanguage?.(a)),this.loadResources(a,e=>{i(e,a)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),n}getFixedT(e,t,n,r){let i=r?.scopeNs,a=(e,t,...r)=>{let o;o=typeof t==`object`?{...t}:this.options.overloadTranslationOptionHandler([e,t].concat(r)),o.lng=o.lng||a.lng,o.lngs=o.lngs||a.lngs;let s=o.ns!==void 0&&o.ns!==null;o.ns=o.ns||a.ns,o.keyPrefix!==``&&(o.keyPrefix=o.keyPrefix||n||a.keyPrefix);let c={...this.options,...o};Array.isArray(i)&&!s&&(c.ns=i),typeof o.keyPrefix==`function`&&(o.keyPrefix=FT(o.keyPrefix,c));let l=this.options.keySeparator||`.`,u;return o.keyPrefix&&Array.isArray(e)?u=e.map(e=>(typeof e==`function`&&(e=FT(e,c)),`${o.keyPrefix}${l}${e}`)):(typeof e==`function`&&(e=FT(e,c)),u=o.keyPrefix?`${o.keyPrefix}${l}${e}`:e),this.t(u,o)};return Y(e)?a.lng=e:a.lngs=e,a.ns=t,a.keyPrefix=n,a}t(...e){return this.translator?.translate(...e)}exists(...e){return this.translator?.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,t={}){if(!this.isInitialized)return this.logger.warn(`hasLoadedNamespace: i18next was not initialized`,this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn(`hasLoadedNamespace: i18n.languages were undefined or empty`,this.languages),!1;let n=t.lng||this.resolvedLanguage||this.languages[0],r=this.options?this.options.fallbackLng:!1,i=this.languages[this.languages.length-1];if(n.toLowerCase()===`cimode`)return!0;let a=(e,t)=>{let n=this.services.backendConnector.state[`${e}|${t}`];return n===-1||n===0||n===2};if(t.precheck){let e=t.precheck(this,a);if(e!==void 0)return e}return!!(this.hasResourceBundle(n,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(n,e)&&(!r||a(i,e)))}loadNamespaces(e,t){let n=IT();return this.options.ns?(Y(e)&&(e=[e]),e.forEach(e=>{this.options.ns.includes(e)||this.options.ns.push(e)}),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}loadLanguages(e,t){let n=IT();Y(e)&&(e=[e]);let r=this.options.preload||[],i=e.filter(e=>!r.includes(e)&&this.services.languageUtils.isSupportedCode(e));return i.length?(this.options.preload=r.concat(i),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}dir(e){if(e||=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language),!e)return`rtl`;try{let t=new Intl.Locale(e);if(t&&t.getTextInfo){let e=t.getTextInfo();if(e&&e.direction)return e.direction}}catch{}let t=`ar.shu.sqr.ssh.xaa.yhd.yud.aao.abh.abv.acm.acq.acw.acx.acy.adf.ads.aeb.aec.afb.ajp.apc.apd.arb.arq.ars.ary.arz.auz.avl.ayh.ayl.ayn.ayp.bbz.pga.he.iw.ps.pbt.pbu.pst.prp.prd.ug.ur.ydd.yds.yih.ji.yi.hbo.men.xmn.fa.jpr.peo.pes.prs.dv.sam.ckb`.split(`.`),n=this.services?.languageUtils||new uE(CE());return e.toLowerCase().indexOf(`-latn`)>1?`ltr`:t.includes(n.getLanguagePartFromCode(e))||e.toLowerCase().indexOf(`-arab`)>1?`rtl`:`ltr`}static createInstance(t={},n){let r=new e(t,n);return r.createInstance=e.createInstance,r}cloneInstance(t={},n=TE){let r=t.forkResourceStore;r&&delete t.forkResourceStore;let i={...this.options,...t,isClone:!0},a=new e(i);if((t.debug!==void 0||t.prefix!==void 0)&&(a.logger=a.logger.clone(t)),[`store`,`services`,`language`].forEach(e=>{a[e]=this[e]}),a.services={...this.services},a.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},r){let e=Object.keys(this.store.data).reduce((e,t)=>(e[t]={...this.store.data[t]},e[t]=Object.keys(e[t]).reduce((n,r)=>(n[r]={...e[t][r]},n),e[t]),e),{});a.store=new aE(e,i),a.services.resourceStore=a.store}if(t.interpolation){let e={...CE().interpolation,...this.options.interpolation,...t.interpolation},n={...i,interpolation:e};a.services.interpolator=new gE(n)}return a.translator=new lE(a.services,i),a.translator.on(`*`,(e,...t)=>{a.emit(e,...t)}),a.init(i,n),a.translator.options=i,a.translator.backendConnector.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}},Q=DE.createInstance(),Q.createInstance,Q.dir,Q.init,Q.loadResources,Q.reloadResources,Q.use,Q.changeLanguage,Q.getFixedT,OE=Q.t,Q.exists,Q.setDefaultNamespace,Q.hasLoadedNamespace,Q.loadNamespaces,Q.loadLanguages})),AE,jE,ME=e((()=>{F(),H(),AE={},jE=un(class extends dn{constructor(){super(...arguments),this.ot=AE}render(e,t){return t()}update(e,[t,n]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((e,t)=>e===this.ot[t]))return N}else if(this.ot===t)return N;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,n)}})})),NE,PE,FE=e((()=>{NE=class{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}},PE=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}}})),IE,LE,RE,zE,BE=e((()=>{F(),$e(),yn(),FE(),H(),IE=e=>!Ue(e)&&typeof e.then==`function`,LE=1073741823,RE=class extends vn{constructor(){super(...arguments),this._$Cwt=LE,this._$Cbt=[],this._$CK=new NE(this),this._$CX=new PE}render(...e){return e.find(e=>!IE(e))??N}update(e,t){let n=this._$Cbt,r=n.length;this._$Cbt=t;let i=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let o=t[e];if(!IE(o))return this._$Cwt=e,o;e<r&&o===n[e]||(this._$Cwt=LE,r=0,Promise.resolve(o).then(async e=>{for(;a.get();)await a.get();let t=i.deref();if(t!==void 0){let n=t._$Cbt.indexOf(o);n>-1&&n<t._$Cwt&&(t._$Cwt=n,t.setValue(e))}}))}return N}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}},zE=un(RE)})),VE=e((()=>{H()})),HE=e((()=>{yn()})),UE,WE,GE=e((()=>{F(),H(),$e(),UE=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},WE=un(class extends dn{constructor(e){if(super(e),e.type!==V.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){let i=Ze(e),{values:a,keys:o}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=o,a;let s=this.ut??=[],c=[],l,u,d=0,f=i.length-1,p=0,m=a.length-1;for(;d<=f&&p<=m;)if(i[d]===null)d++;else if(i[f]===null)f--;else if(s[d]===o[p])c[p]=Je(i[d],a[p]),d++,p++;else if(s[f]===o[m])c[m]=Je(i[f],a[m]),f--,m--;else if(s[d]===o[m])c[m]=Je(i[d],a[m]),qe(e,c[m+1],i[d]),d++,m--;else if(s[f]===o[p])c[p]=Je(i[f],a[p]),qe(e,i[d],i[f]),f--,p++;else if(l===void 0&&(l=UE(o,p,m),u=UE(s,d,f)),l.has(s[d]))if(l.has(s[f])){let t=u.get(o[p]),n=t===void 0?null:i[t];if(n===null){let t=qe(e,i[d]);Je(t,a[p]),c[p]=t}else c[p]=Je(n,a[p]),qe(e,i[d],n),i[t]=null;p++}else Qe(i[f]),f--;else Qe(i[d]),d++;for(;p<=m;){let t=qe(e,c[m+1]);Je(t,a[p]),c[p++]=t}for(;d<=f;){let e=i[d++];e!==null&&Qe(e)}return this.ut=o,Xe(e,c),N}})})),KE=e((()=>{GE()})),qE,JE,YE,XE=e((()=>{qE=class e extends Event{constructor(t){super(e.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}},qE.eventName=`rangeChanged`,JE=class e extends Event{constructor(t){super(e.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}},JE.eventName=`visibilityChanged`,YE=class e extends Event{constructor(){super(e.eventName,{bubbles:!1})}},YE.eventName=`unpinned`})),ZE,QE,$E=e((()=>{ZE=class{constructor(e){this._element=null;let t=e??window;this._node=t,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}},QE=class extends ZE{constructor(e,t){super(t),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);let n=this._node;this._originalScrollTo=n.scrollTo,this._originalScrollBy=n.scrollBy,this._originalScroll=n.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(e,t){let n=typeof e==`number`&&typeof t==`number`?{left:e,top:t}:e;this._scrollTo(n)}scrollBy(e,t){let n=typeof e==`number`&&typeof t==`number`?{left:e,top:t}:e;n.top!==void 0&&(n.top+=this.scrollTop),n.left!==void 0&&(n.left+=this.scrollLeft),this._scrollTo(n)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,t=null,n=null){this._end!==null&&this._end(),e.behavior===`smooth`?(this._setDestination(e),this._retarget=t,this._end=n):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:t,left:n}=e;return t=t===void 0?void 0:Math.max(0,Math.min(t,this.maxScrollTop)),n=n===void 0?void 0:Math.max(0,Math.min(n,this.maxScrollLeft)),this._destination!==null&&n===this._destination.left&&t===this._destination.top?!1:(this.__destination={top:t,left:n,behavior:`smooth`},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,t,n){return this._scrollTo(e,t,n),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){let{scrollTop:e,scrollLeft:t}=this,{top:n,left:r}=this._destination;n=Math.min(n||0,this.maxScrollTop),r=Math.min(r||0,this.maxScrollLeft);let i=Math.abs(n-e),a=Math.abs(r-t);i<1&&a<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener(`scroll`,this._checkForArrival)),null}_attach(e){this._clients.add(e),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener(`scroll`,this._checkForArrival))}}}));function eD(e){let t=window.getComputedStyle(e);return{marginTop:tD(t.marginTop),marginRight:tD(t.marginRight),marginBottom:tD(t.marginBottom),marginLeft:tD(t.marginLeft)}}function tD(e){let t=e?parseFloat(e):NaN;return Number.isNaN(t)?0:t}function nD(e){if(e.assignedSlot!==null)return e.assignedSlot;if(e.parentElement!==null)return e.parentElement;let t=e.parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host||null}function rD(e,t=!1){let n=[],r=t?e:nD(e);for(;r!==null;)n.push(r),r=nD(r);return n}function iD(e,t=!1){let n=!1;return rD(e,t).filter(e=>{if(n)return!1;let t=getComputedStyle(e);return n=t.position===`fixed`,t.overflow!==`visible`})}var aD,oD,sD,cD,lD,uD=e((()=>{XE(),$E(),t(),aD=typeof window<`u`?window.ResizeObserver:void 0,oD=Symbol(`virtualizerRef`),sD=`virtualizer-sizer`,lD=class{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw Error(`Virtualizer constructor requires a configuration object`);if(e.hostElement)this._init(e);else throw Error(`Virtualizer configuration requires the "hostElement" property`)}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);let t=e.layout||{};this._layoutInitialized=this._initLayout(t)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new aD(()=>this._hostElementSizeChanged()),this._childrenRO=new aD(this._childrenSizeChanged.bind(this))}_initHostElement(e){let t=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),t[oD]=this}connected(){this._initObservers();let e=this._isScroller;this._clippingAncestors=iD(this._hostElement,e),this._scrollerController=new QE(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener(`scroll`,this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener(`scroll`,this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener(`scroll`,this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(e=>e.removeEventListener(`scroll`,this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise(`disconnected`),this._connected=!1}_applyVirtualizerStyles(){let e=this._hostElement.style;e.display=e.display||`block`,e.position=e.position||`relative`,e.contain=e.contain||`size layout`,this._isScroller&&(e.overflow=e.overflow||`auto`,e.minHeight=e.minHeight||`150px`)}_getSizer(){let e=this._hostElement;if(!this._sizer){let t=e.querySelector(`[${sD}]`);t||(t=document.createElement(`div`),t.setAttribute(sD,``),e.appendChild(t)),Object.assign(t.style,{position:`absolute`,margin:`-2px 0 0 0`,padding:0,visibility:`hidden`,fontSize:`2px`}),t.textContent=`&nbsp;`,t.setAttribute(sD,``),this._sizer=t}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;let t=e.type||cD;if(typeof t==`function`&&this._layout instanceof t){let t={...e};return delete t.type,this._layout.config=t,!0}return!1}async _initLayout(e){let t,r;if(typeof e.type==`function`){r=e.type;let n={...e};delete n.type,t=n}else t=e;r===void 0&&(cD=r=(await n(async()=>{let{FlowLayout:e}=await import(`./flow-Bk5W63PM.js`);return{FlowLayout:e}},__vite__mapDeps([0,1]),import.meta.url)).FlowLayout),this._layout=new r(e=>this._handleLayoutMessage(e),t),this._layout.measureChildren&&typeof this._layout.updateItemSizes==`function`&&(typeof this._layout.measureChildren==`function`&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener(`load`,this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){let e=window.performance.now(),t=e-this._benchmarkStart,n=performance.getEntriesByName(`uv-virtualizing`,`measure`).filter(t=>t.startTime>=this._benchmarkStart&&t.startTime<e).reduce((e,t)=>e+t.duration,0);return this._benchmarkStart=null,{timeElapsed:t,virtualizationTime:n}}return null}_measureChildren(){let e={},t=this._children,n=this._measureChildOverride||this._measureChild;for(let r=0;r<t.length;r++){let i=t[r],a=this._first+r;(this._itemsChanged||this._toBeMeasured.has(i))&&(e[a]=n.call(this,i,this._items[a]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){let{width:t,height:n}=e.getBoundingClientRect();return Object.assign({width:t,height:n},eD(e))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;let{_rangeChanged:t,_itemsChanged:n}=this;this._visibilityChanged&&=(this._notifyVisibility(),!1),(t||n)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&`mark`in window.performance&&window.performance.mark(`uv-end`))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&`mark`in window.performance&&window.performance.mark(`uv-end`))}_handleScrollEvent(){if(this._benchmarkStart&&`mark`in window.performance){try{window.performance.measure(`uv-virtualizing`,`uv-start`,`uv-end`)}catch(e){console.warn(`Error measuring performance data: `,e)}window.performance.mark(`uv-start`)}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(e){switch(e.type){case`scroll`:(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent();break;default:console.warn(`event not handled`,e)}}_handleLayoutMessage(e){e.type===`stateChanged`?this._updateDOM(e):e.type===`visibilityChanged`?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):e.type===`unpinned`&&this._hostElement.dispatchEvent(new YE)}get _children(){let e=[],t=this._hostElement.firstElementChild;for(;t;)t.hasAttribute(sD)||e.push(t),t=t.nextElementSibling;return e}_updateView(){let e=this._hostElement,t=this._scrollerController?.element,n=this._layout;if(e&&t&&n){let r,i,a,o,s=e.getBoundingClientRect();r=0,i=0,a=window.innerHeight,o=window.innerWidth;let c=this._clippingAncestors.map(e=>e.getBoundingClientRect());c.unshift(s);for(let e of c)r=Math.max(r,e.top),i=Math.max(i,e.left),a=Math.min(a,e.bottom),o=Math.min(o,e.right);let l=t.getBoundingClientRect(),u={left:s.left-l.left,top:s.top-l.top},d={width:t.scrollWidth,height:t.scrollHeight},f=r-s.top+e.scrollTop,p=i-s.left+e.scrollLeft,m=Math.max(0,a-r);n.viewportSize={width:Math.max(0,o-i),height:m},n.viewportScroll={top:f,left:p},n.totalScrollSize=d,n.offsetWithinScroller=u}}_sizeHostElement(e){let t=82e5,n=e&&e.width!==null?Math.min(t,e.width):0,r=e&&e.height!==null?Math.min(t,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${n}px, ${r}px)`;else{let e=this._hostElement.style;e.minWidth=n?`${n}px`:`100%`,e.minHeight=r?`${r}px`:`100%`}}_positionChildren(e){e&&e.forEach(({top:e,left:t,width:n,height:r,xOffset:i,yOffset:a},o)=>{let s=this._children[o-this._first];s&&(s.style.position=`absolute`,s.style.boxSizing=`border-box`,s.style.transform=`translate(${t}px, ${e}px)`,n!==void 0&&(s.style.width=n+`px`),r!==void 0&&(s.style.height=r+`px`),s.style.left=i===void 0?null:i+`px`,s.style.top=a===void 0?null:a+`px`)})}async _adjustRange(e){let{_first:t,_last:n,_firstVisible:r,_lastVisible:i}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==t||this._last!==n,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==r||this._lastVisible!==i}_correctScrollError(){if(this._scrollError){let{scrollTop:e,scrollLeft:t}=this._scrollerController,{top:n,left:r}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-n,left:t-r})}}element(e){return e===1/0&&(e=this._items.length-1),this._items?.[e]===void 0?void 0:{scrollIntoView:(t={})=>this._scrollElementIntoView({...t,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),e.behavior===`smooth`){let t=this._layout.getScrollIntoViewCoordinates(e),{behavior:n}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(t,{behavior:n}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){let{index:t}=this._scrollIntoViewTarget||{};t&&e?.has(t)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new qE({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new JE({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||=new Promise((e,t)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=t}),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){if(this._layout?.measureChildren){for(let t of e)this._toBeMeasured.set(t.target,t.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}})),dD,fD,pD,mD,hD=e((()=>{Be(),VE(),HE(),KE(),uD(),dD=e=>e,fD=(e,t)=>j`${t}: ${JSON.stringify(e,null,2)}`,pD=class extends vn{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(e,t)=>fD(e,t+this._first),this._keyFunction=(e,t)=>dD(e,t+this._first),this._items=[],e.type!==V.CHILD)throw Error(`The virtualize directive can only be used in child expressions`)}render(e){e&&this._setFunctions(e);let t=[];if(this._first>=0&&this._last>=this._first)for(let e=this._first;e<=this._last;e++)t.push(this._items[e]);return WE(t,this._keyFunction,this._renderItem)}update(e,[t]){this._setFunctions(t);let n=this._items!==t.items;return this._items=t.items||[],this._virtualizer?this._updateVirtualizerConfig(e,t):this._initialize(e,t),n?N:this.render()}async _updateVirtualizerConfig(e,t){if(!await this._virtualizer.updateLayoutConfig(t.layout||{})){let n=e.parentNode;this._makeVirtualizer(n,t)}this._virtualizer.items=this._items}_setFunctions(e){let{renderItem:t,keyFunction:n}=e;t&&(this._renderItem=(e,n)=>t(e,n+this._first)),n&&(this._keyFunction=(e,t)=>n(e,t+this._first))}_makeVirtualizer(e,t){this._virtualizer&&this._virtualizer.disconnected();let{layout:n,scroller:r,items:i}=t;this._virtualizer=new lD({hostElement:e,layout:n,scroller:r}),this._virtualizer.items=i,this._virtualizer.connected()}_initialize(e,t){let n=e.parentNode;n&&n.nodeType===1&&(n.addEventListener(`rangeChanged`,e=>{this._first=e.first,this._last=e.last,this.setValue(this.render())}),this._makeVirtualizer(n,t))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}},mD=un(pD)})),gD,_D,vD,yD=e((()=>{F(),H(),gD=(e,t)=>{if(!e||!t)return;let n=Object.keys(t);return Object.fromEntries(Object.keys(e).flatMap(e=>n.includes(e)?[]:[[e,void 0]]))},_D=class extends dn{_props;render(e){return N}update(e,[t]){return this._props!==t&&Object.assign(e.element,gD(this._props,t),this._props=t),N}},vD=un(_D)}));function bD(e){return()=>e}var xD,SD,CD,wD,TD=e((()=>{xD=bD(),SD=xD,CD=e=>e,wD=(e,...t)=>typeof e==`function`?e(...t):e})),ED,DD=e((()=>{W(),lT(),ED=e=>{let t=cT(),n=z(()=>new CSSStyleSheet,[]);R(()=>{t.shadowRoot.adoptedStyleSheets=[...t.shadowRoot.adoptedStyleSheets,n]},[]),R(()=>{n.replaceSync(e)},[e])}}));function OD(e){return e?t=>typeof t==`object`&&t?t[e]:t:CD}var kD,AD,jD=e((()=>{TD(),kD=e=>{let t=OD(e);return e=>typeof e==`string`?e:t(e)?.toString()||``},AD=e=>t=>{let n={};for(let r in t)e.includes(r)&&(n[r]=t[r]);return n}})),MD,ND,PD=e((()=>{W(),J(),MD=I`
	:host {
		display: block;
		font-family: var(--cz-font-body);
		background: var(--cz-color-bg-primary);
		backdrop-filter: blur(16px) saturate(180%);
		-webkit-backdrop-filter: blur(16px) saturate(180%);
		border-radius: var(--cz-radius-md);
		box-shadow: 0 0 0 1px var(--cz-color-border-primary);
		text-transform: var(--cosmoz-autocomplete-listbox-text-transform, initial);
		overflow: hidden;
		padding-block: var(--cz-spacing);
	}
	.items {
		position: relative;
		overflow-y: auto;
		scrollbar-width: thin;
		contain: layout paint !important;
		padding-inline: calc(var(--cz-spacing) * 1.5);
		min-width: calc(var(--cz-spacing) * 20);
	}
	:host(:focus-within) {
		outline: none;
		box-shadow: var(--cz-focus-ring);
	}
	.items:focus-visible {
		outline: none;
	}
	.item {
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-regular);
		box-sizing: border-box;
		border-radius: var(--cz-radius-sm);
		width: calc(100% - var(--cz-spacing) * 3);
		cursor: pointer;
		text-overflow: ellipsis;
		white-space: nowrap;
		transition: background 0.25s;
		color: var(--cz-color-text-primary);
		overflow: hidden;
		padding-inline: calc(var(--cz-spacing) * 2);
		margin-block: 1px;
	}

	.sizer {
		position: relative;
		visibility: hidden;
		opacity: 0;
		pointer-events: none;
		z-index: -1;
		height: 0;
		width: auto;
		padding: 0 calc(var(--cz-spacing) * 5);
		overflow: hidden;
		max-width: inherit;
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
	}

	:host(:not([multi])) .item[aria-selected] {
		background: rgb(
			from var(--cz-color-bg-brand-solid) r g b / calc(alpha * 0.25)
		);
	}

	:host([multi]) .item::before {
		content: '';
		font-size: 0;
		padding: calc(var(--cz-spacing) * 2);
		margin-right: calc(var(--cz-spacing) * 2);
		background: var(--cz-color-bg-tertiary);
		border: 1px solid var(--cz-color-bg-quaternary);
		border-radius: var(--cz-radius-xs);
		vertical-align: top;
	}

	:host([multi]) .item[aria-selected]::before {
		border-color: var(--cz-color-bg-brand-solid);
		/* prettier-ignore */
		background: url("${`data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1L5.20039 7.04766L1.66348 3.46152' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E`}") var(--cz-color-bg-brand-solid) no-repeat 50%;
	}

	[virtualizer-sizer]:not(.sizer) {
		line-height: 1;
	}
`,ND=({index:e,itemHeight:t,auto:n})=>I`
	${q(!n,()=>I`
			.item {
				line-height: ${t}px;
				height: ${t}px;
			}
		`)}
	.item[data-index='${e||`0`}'] {
		background: rgb(
			from var(--cz-color-bg-brand-solid) r g b / calc(alpha * 0.15)
		);
	}
	.item[data-index='${e||`0`}'][part~='error'] {
		background: var(--cz-color-bg-error);
	}
`})),FD,ID=e((()=>{W(),FD=e=>{let t=e===`auto`,[n,r]=Yt(t?40:e);return[n,e=>t?r(e):void 0]}})),LD,RD=e((()=>{LD=Symbol(`any key`)})),zD,BD=e((()=>{W(),TD(),zD=Cn(()=>SD),customElements.define(`cosmoz-keybinding-provider`,zD.Provider)})),VD,HD=e((()=>{W(),VD=e=>{let t=z(()=>({}),[]);return z(()=>Object.assign(t,e),[t,...Object.values(e)])}})),UD,WD=e((()=>{W(),BD(),HD(),UD=(e,t)=>{let n=Bt(zD),r=VD(e);R(()=>n(r),t)}})),GD,KD,qD,JD,YD=e((()=>{RD(),GD=e=>([t])=>Object.entries(t).every(([t,n])=>e[t]===n||n===LD),KD=e=>{if(e==null)return!1;let t=e.getBoundingClientRect(),n=e.getRootNode().elementFromPoint(t.x+t.width/2,t.y+t.height/2);return n!=null&&(e===n||e.contains(n))},qD=(e=document)=>{let t=e.activeElement;return t?t.shadowRoot?qD(t.shadowRoot):t:null},JD=()=>{let e=qD(document);return e?!!(e.matches(`input:not([type="checkbox"]), textarea`)||`isContentEditable`in e&&e.isContentEditable):!1}})),XD,ZD=e((()=>{W(),HD(),YD(),XD=e=>{let t=VD({bindings:e});return R(()=>{let e=e=>{if(e.defaultPrevented)return;let n=t.bindings.find(GD(e));if(!n)return;let[,r,,i]=n;if(!i?.allowInEditable&&JD())return;let a=r.flatMap(e=>t[e]??[]);if(a.length===0)return;let o=a.find(e=>e.check&&!e.check()||e.element&&!KD(e.element())?!1:e);o&&(o.allowDefault||e.preventDefault(),o.callback(e))};return document.addEventListener(`keydown`,e,!0),()=>document.removeEventListener(`keydown`,e,!0)},[]),B(e=>(t[e.activity]=[e,...t[e.activity]??[]],()=>{t[e.activity]=t[e.activity]?.filter(t=>t!==e)}),[])}})),QD=e((()=>{RD(),BD(),WD(),ZD()})),$D,eO,tO,nO,rO=e((()=>{$D=Symbol(`listbox.navigate.up`),eO=Symbol(`listbox.navigate.down`),tO=Symbol(`listbox.select`),nO=[[{key:`ArrowUp`},[$D],{title:`Navigate up`,description:`Move to previous listbox item`},{allowInEditable:!0}],[{key:`ArrowDown`},[eO],{title:`Navigate down`,description:`Move to next listbox item`},{allowInEditable:!0}],[{key:`Enter`},[tO],{title:`Select`,description:`Select current listbox item`},{allowInEditable:!0}]]})),iO,aO=e((()=>{lT(),QD(),rO(),iO=({onUp:e,onDown:t,onEnter:n})=>{let r=cT();UD({activity:$D,callback:e,element:()=>r},[]),UD({activity:eO,callback:t,element:()=>r},[]),UD({activity:tO,callback:n,element:()=>r},[])}})),oO,sO=e((()=>{W(),aO(),oO=({items:e,onSelect:t,defaultIndex:n=0})=>{let[r,i]=Yt({index:n}),{index:a}=r,{length:o}=e;return R(()=>{i({index:r.index<0?n:Math.min(r.index,e.length-1),scroll:!0})},[e,n]),iO({onUp:B(()=>i(e=>({index:e.index>0?e.index-1:o-1,scroll:!0})),[o]),onDown:B(()=>i(e=>({index:e.index<o-1?e.index+1:0,scroll:!0})),[o]),onEnter:B(()=>a>-1&&a<o&&t?.(e[a],a),[a,e,t])}),{position:r,highlight:B(e=>i({index:e}),[]),select:B(e=>t?.(e),[t])}}}));function cO(e){return e==null?[]:Array.isArray(e)?e:typeof e==`string`?[e]:lO(e)?Array.from(e):[e]}var lO,uO,dO=e((()=>{TD(),lO=e=>typeof e==`object`&&!!e&&Symbol.iterator in e,uO=(e,t=CD)=>n=>{let r=cO(e).map(t);return cO(n).filter(e=>!r.includes(t(e)))}})),fO,pO,mO=e((()=>{dO(),F(),fO=(e,t)=>t?n=>n!=null&&cO(e).find(e=>e[t]===n[t]):t=>t!=null&&cO(e).includes(t),pO=(e,t)=>{if(!t||!e)return e;let n=e.toLowerCase().indexOf(t.toLowerCase());if(n<0)return e;let r=n+t.length;return[e.slice(0,n),j`<mark>${e.slice(n,r)}</mark>`,e.slice(r)]}})),hO,gO=e((()=>{TD(),F(),mO(),hO=(e=CD)=>(t,n,{highlight:r,select:i,textual:a=CD,query:o,isSelected:s})=>{let c=a(t),l=e(pO(c,o),t,n);return j`<div
				class="item"
				role="option"
				part="option"
				?aria-selected=${s(t)}
				data-index=${n}
				@mouseenter=${()=>r(n)}
				@click=${()=>i(t)}
				@mousedown=${e=>e.preventDefault()}
				title=${c}
			>
				${l}
			</div>
			<div class="sizer" virtualizer-sizer>${l}</div>`},hO()})),_O,vO=e((()=>{HD(),W(),gO(),_O=({itemRenderer:e=hO(),...t})=>{let n=VD(t);return B((t,r)=>e(t,r,n),[n,e])}})),yO,bO,xO=e((()=>{W(),ID(),sO(),vO(),mO(),yO=[`query`,`items`,`onSelect`,`textual`,`anchor`,`itemHeight`,`itemLimit`,`itemRenderer`,`defaultIndex`,`value`,`valueProperty`,`loading`],bO=({value:e,valueProperty:t,items:n,onSelect:r,defaultIndex:i,query:a,textual:o,itemRenderer:s,itemHeight:c=40,itemLimit:l=5})=>{let u=z(()=>fO(e,t),[e,t]),d=z(()=>n.slice(),[n,u]),{position:f,highlight:p,select:m}=oO({items:d,onSelect:r,defaultIndex:isNaN(i)?void 0:Number(i)}),[h,g]=FD(c);return{position:f,items:d,height:Math.min(l,d.length)*h,highlight:p,select:m,itemHeight:h,setItemHeight:g,renderItem:_O({itemRenderer:s,items:d,position:f,highlight:p,select:m,textual:o,query:a,isSelected:u})}}})),SO,CO,wO,TO=e((()=>{hD(),An(),yD(),TD(),DD(),jD(),W(),Nn(),PD(),xO(),SO=SD,CO=e=>{let t=an(void 0),{position:n,items:r,renderItem:i,height:a,itemHeight:o,setItemHeight:s}=bO(e);return R(()=>{let n=t.current?.[oD];n&&n.layoutComplete.then(()=>{e.dispatchEvent(new CustomEvent(`layout-complete`));let{averageChildSize:t,averageMarginSize:r}=n._layout._metricsCache;return s(t+r*2)},SO)},[r]),R(()=>{if(!n.scroll)return;let e=t.current?.[oD];if(e){if(!e?._layout){e.layoutComplete.then(()=>e.element(n.index)?.scrollIntoView({block:`nearest`}),SO);return}e.element(n.index)?.scrollIntoView({block:`nearest`})}},[n]),ED(ND({...n,itemHeight:o,auto:e.itemHeight===`auto`})),j`<div
			class="items"
			style="min-height: ${a}px"
			${Mn(e=>t.current=e)}
		>
			<div virtualizer-sizer></div>
			${mD({items:r,renderItem:i,scroller:!0})}
		</div>
		<slot></slot>`},customElements.define(`cosmoz-listbox`,U(CO,{styleSheets:[On(MD)]})),wO=({multi:e,...t},n)=>j`<cosmoz-listbox
		part="listbox"
		?multi=${e}
		...=${vD(AD(yO)(t))}
		>${n}</cosmoz-listbox
	>`})),$,EO,DO=e((()=>{W(),$=e=>`calc(var(--cz-spacing) * ${e})`,EO=I`
	/* =========================================
	 * HOST
	 * ========================================= */
	:host {
		display: inline-block;
		max-width: 100%;
		min-width: 0;
	}

	/* =========================================
	 * BADGE BASE (default: pill, md)
	 * ========================================= */
	.badge {
		display: inline-flex;
		align-items: center;
		gap: ${$(1.5)};
		max-width: 100%;
		min-width: calc(var(--cz-spacing) * 2);
		white-space: nowrap;
		font-family: var(--cz-font-body);
		font-weight: var(--cz-font-weight-medium);
		border: 1px solid
			var(--cosmoz-badge-border-color, var(--cz-color-border-secondary));
		background-color: var(
			--cosmoz-badge-bg-color,
			var(--cz-color-bg-secondary)
		);
		color: var(--cz-color-text-secondary);
		border-radius: var(--cz-radius-full);
		padding: ${$(.5)} ${$(2)};
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
	}

	.content {
		overflow: hidden;
		text-overflow: ellipsis;
		min-width: 0;
	}

	/* =========================================
	 * COLOR VARIANTS
	 * ========================================= */

	:host([color='brand']) .badge {
		background-color: var(--cz-color-brand-50);
		color: var(--cz-color-brand-800);
		border-color: var(--cz-color-brand-300);
	}

	:host([color='error']) .badge {
		background-color: var(--cz-color-bg-error);
		color: var(--cz-color-text-error);
		border-color: var(--cz-color-error-200);
	}

	:host([color='warning']) .badge {
		background-color: var(--cz-color-bg-warning);
		color: var(--cz-color-text-warning);
		border-color: var(--cz-color-warning-200);
	}

	:host([color='success']) .badge {
		background-color: var(--cz-color-bg-success);
		color: var(--cz-color-text-success);
		border-color: var(--cz-color-success-200);
	}

	:host([color='processing']) .badge {
		background-color: var(--cz-color-indigo-100);
		color: var(--cz-color-indigo-800);
		border-color: var(--cz-color-indigo-300);
	}

	/* Modern type: neutral bg/text/border regardless of color */
	:host([type='modern']) .badge {
		background-color: var(--cz-color-bg-primary);
		color: var(--cz-color-text-secondary);
		border-color: var(--cz-color-border-primary);
	}

	/* =========================================
	 * TYPE VARIANTS (shape)
	 * ========================================= */
	:host([type='color']) .badge,
	:host([type='modern']) .badge {
		border-radius: var(--cz-radius-sm);
		padding: ${$(.5)} ${$(2)};
	}

	:host([type='modern']) .badge {
		box-shadow: var(--cz-shadow-xs);
	}

	/* =========================================
	 * SIZE VARIANTS
	 * ========================================= */

	/* --- Pill sizes --- */
	:host([size='sm']) .badge {
		padding: ${$(.5)} ${$(2)};
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		gap: ${$(1)};
	}

	:host([size='lg']) .badge {
		padding: ${$(1)} ${$(3)};
	}

	/* --- Badge sizes --- */
	:host([type='color'][size='sm']) .badge,
	:host([type='modern'][size='sm']) .badge {
		padding: ${$(.5)} ${$(1.5)};
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		gap: ${$(1)};
	}

	:host([type='color'][size='lg']) .badge,
	:host([type='modern'][size='lg']) .badge {
		padding: ${$(1)} ${$(2.5)};
		border-radius: var(--cz-radius-md);
	}

	/* =========================================
	 * DOT INDICATOR
	 * ========================================= */
	.dot {
		width: ${$(2)};
		height: ${$(2)};
		border-radius: var(--cz-radius-full);
		background-color: var(--cz-color-fg-quaternary);
		flex-shrink: 0;
	}
	:host(:not([dot])) .dot {
		display: none;
	}
	:host([color='brand']) .dot {
		background-color: var(--cz-color-fg-brand-secondary);
	}
	:host([color='error']) .dot {
		background-color: var(--cz-color-fg-error-secondary);
	}
	:host([color='warning']) .dot {
		background-color: var(--cz-color-fg-warning-secondary);
	}
	:host([color='success']) .dot {
		background-color: var(--cz-color-fg-success-secondary);
	}
	:host([color='processing']) .dot {
		background-color: var(--cz-color-indigo-800);
	}
	/* Pill + dot: asymmetric padding (tighter left) */
	:host([dot]) .badge {
		padding: ${$(.5)} ${$(2.5)} ${$(.5)} ${$(2)};
	}

	:host([dot][size='sm']) .badge {
		padding: ${$(.5)} ${$(2)} ${$(.5)} ${$(1.5)};
	}

	:host([dot][size='lg']) .badge {
		padding: ${$(1)} ${$(3)} ${$(1)} ${$(2.5)};
	}

	/* Badge + dot: symmetric padding (same as base badge) */
	:host([dot][type='color']) .badge,
	:host([dot][type='modern']) .badge {
		padding: ${$(.5)} ${$(2)};
	}

	:host([dot][type='color'][size='sm']) .badge,
	:host([dot][type='modern'][size='sm']) .badge {
		padding: ${$(.5)} ${$(1.5)};
	}

	:host([dot][type='color'][size='lg']) .badge,
	:host([dot][type='modern'][size='lg']) .badge {
		padding: ${$(1)} ${$(2.5)};
	}

	/* =========================================
	 * ICON-ONLY TYPE
	 * ========================================= */
	:host([type='icon']) .badge {
		padding: ${$(2)};
		gap: 0;
	}

	:host([type='icon'][size='sm']) .badge {
		padding: ${$(1.5)};
	}

	:host([type='icon'][size='lg']) .badge {
		padding: ${$(2.5)};
	}

	:host([type='icon']) .dot,
	:host([type='icon']) slot[name='prefix'],
	:host([type='icon']) slot[name='suffix'] {
		display: none;
	}

	:host([type='icon']) ::slotted(svg) {
		width: ${$(4)};
		height: ${$(4)};
	}

	:host([type='icon'][size='sm']) ::slotted(svg) {
		width: ${$(3)};
		height: ${$(3)};
	}
	:host([type='icon'][size='lg']) ::slotted(svg) {
		width: ${$(5)};
		height: ${$(5)};
	}

	/* =========================================
	 * SLOTTED CONTENT (icons, images, flags)
	 * ========================================= */
	::slotted(svg) {
		display: block;
		width: ${$(3)};
		height: ${$(3)};
		flex-shrink: 0;
		color: var(--cz-color-fg-quaternary);
	}

	:host([color='brand']) ::slotted(svg) {
		color: var(--cz-color-fg-brand-secondary);
	}
	:host([color='error']) ::slotted(svg) {
		color: var(--cz-color-fg-error-secondary);
	}
	:host([color='warning']) ::slotted(svg) {
		color: var(--cz-color-fg-warning-secondary);
	}
	:host([color='success']) ::slotted(svg) {
		color: var(--cz-color-fg-success-secondary);
	}
	:host([color='processing']) ::slotted(svg) {
		color: var(--cz-color-indigo-800);
	}
`})),OO,kO=e((()=>{zw(),W(),DO(),OO=()=>j`<span class="badge" part="badge" role="status">
		<span class="dot" part="dot"></span>
		<slot name="prefix"></slot>
		<span class="content"><slot></slot></span>
		<slot name="suffix"></slot>
	</span>`,customElements.define(`cosmoz-badge`,U(OO,{styleSheets:[Rw,EO]}))})),AO=e((()=>{kO()})),jO,MO,NO=e((()=>{W(),jO=e=>`calc(var(--cz-spacing) * ${e})`,MO=I`
	/* =========================================
	 * HOST
	 * ========================================= */
	:host {
		display: inline-flex;
	}

	:host([disabled]) {
		opacity: 0.5;
		pointer-events: none;
	}

	/* =========================================
	 * REMOVE BUTTON
	 * ========================================= */
	.close {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0;
		border: none;
		background: none;
		cursor: pointer;
		color: inherit;
		opacity: 0.7;
		transition: opacity 0.1s;
		flex-shrink: 0;
		border-radius: var(--cz-radius-full);
		line-height: 0;
	}

	.close:hover {
		opacity: 1;
	}

	.close:focus-visible {
		outline: 2px solid currentColor;
		outline-offset: 1px;
	}

	.close svg {
		width: ${jO(2.5)};
		height: ${jO(2.5)};
	}

	:host([size='md']) .close svg,
	:host(:not([size])) .close svg {
		width: ${jO(3)};
		height: ${jO(3)};
	}

	:host([size='lg']) .close svg {
		width: ${jO(3.5)};
		height: ${jO(3.5)};
	}

	/* =========================================
	 * SLOTTED CONTENT (icons, images, flags)
	 * ========================================= */
	::slotted(svg) {
		width: ${jO(3.5)};
		height: ${jO(3.5)};
		color: var(--cz-color-fg-quaternary);
	}

	:host([color='brand']) ::slotted(svg) {
		color: var(--cz-color-fg-brand-secondary);
	}
	:host([color='error']) ::slotted(svg) {
		color: var(--cz-color-fg-error-secondary);
	}
	:host([color='warning']) ::slotted(svg) {
		color: var(--cz-color-fg-warning-secondary);
	}
	:host([color='success']) ::slotted(svg) {
		color: var(--cz-color-fg-success-secondary);
	}
`})),PO,FO=e((()=>{AO(),Fw(),zw(),W(),K(),J(),NO(),PO=e=>{let{color:t,size:n,disabled:r,removable:i}=e,a=()=>{r||e.dispatchEvent(new CustomEvent(`remove`))};return j`<cosmoz-badge
		color=${G(t)}
		size=${G(n)}
		?disabled=${r}
		type="color"
	>
		<slot name="prefix" slot="prefix"></slot>
		<slot></slot>
		<slot name="suffix" slot="suffix"></slot>
		${q(i,()=>j` <button
					slot="suffix"
					class="close"
					aria-label="Remove"
					@mousedown=${e=>e.preventDefault()}
					@click=${a}
				>
					${ww()}
				</button>`)}
	</cosmoz-badge>`},customElements.define(`cosmoz-tag`,U(PO,{observedAttributes:[`color`,`size`,`disabled`,`removable`],styleSheets:[Rw,MO]}))})),IO=e((()=>{FO()})),LO,RO=e((()=>{IO(),W(),K(),LO=({content:e,onClear:t,disabled:n,className:r=`chip`,hidden:i,slot:a})=>j`<cosmoz-tag
		class=${G(r)}
		slot=${G(a)}
		exportparts="chip-text, chip-clear"
		?disabled=${n}
		?hidden=${i}
		?removable=${!!t&&!n}
		@remove=${t}
		title=${G(typeof e==`string`?e:void 0)}
		>${e}</cosmoz-tag
	>`})),zO,BO=e((()=>{F(),RO(),zO=({value:e,min:t=0,onDeselect:n,textual:r,disabled:i,chipRenderer:a=LO})=>[...e.filter(Boolean).map(o=>a({item:o,content:r(o),onClear:e.length>t&&(()=>n(o)),disabled:i,slot:`control`})),a({item:null,content:j`<span></span>`,className:`badge`,disabled:!0,slot:`control`,hidden:!0})]})),VO,HO=e((()=>{W(),F(),VO=I`
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
`,customElements.define(`cosmoz-autocomplete-skeleton-span`,U(()=>P,{styleSheets:[VO]}))})),UO,WO=e((()=>{An(),UO=En`
	:host {
		display: block;
		position: relative;
		min-width: calc(var(--cz-spacing) * 9);
	}

	:host([mode='select']) {
		--cosmoz-badge-border-color: transparent;
		--cosmoz-badge-bg-color: transparent;
	}

	cosmoz-dropdown-next {
		display: block;
	}

	:host(:not([variant='inline'])) cosmoz-listbox {
		margin-top: var(--cz-spacing);
	}

	cosmoz-input[variant='inline'] cosmoz-tag {
		align-items: center;
		margin-left: var(--cz-spacing);
	}

	cosmoz-input[variant='inline'] cosmoz-tag:first-of-type {
		margin-left: 0;
	}

	cosmoz-tag {
		align-items: center;
		margin-left: calc(var(--cz-spacing) * 2);
	}

	cosmoz-input::part(control) {
		display: flex;
		min-width: calc(var(--cz-spacing) * 9);
	}

	cosmoz-input[variant='inline']:has(cosmoz-tag[removable])::part(label),
	cosmoz-input[variant='inline'][disabled]:has(cosmoz-tag)::part(label) {
		transform: translate(var(--cz-spacing), -75%) scale(0.85);
	}

	cosmoz-input::part(input) {
		flex: 1 calc(var(--cz-spacing) * 6);
		min-width: 0;
	}

	cosmoz-input:not([data-one])::part(input):focus {
		flex: 4 0.00001 calc(var(--cz-spacing) * 12.5);
		min-width: calc(var(--cz-spacing) * 5);
	}

	.badge {
		min-width: initial;
		flex: none;
		text-align: center;
		padding: 0 var(--cz-spacing);
	}

	[data-single]::part(input) {
		flex: 0;
	}

	[data-one] .badge {
		display: none;
	}

	[hidden] {
		display: none;
	}

	:host([wrap]) cosmoz-input::part(control) {
		flex-wrap: wrap;
		padding-right: calc(var(--cz-spacing) * 2);
	}

	:host([wrap]) cosmoz-tag {
		padding-block: calc(var(--cz-spacing) * 1.5);
	}

	slot {
		display: contents !important;
	}

	.no-result {
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-regular);
		padding: 0 calc(var(--cz-spacing) * 3);
		color: var(--cz-color-text-secondary);
	}
`})),GO,KO,qO=e((()=>{GO=(e,t=()=>({}))=>{let n={type:e,toString(){return e}};return Object.assign((...e)=>Object.assign(t(...e),n),n)},KO=e=>e.type||e.toString()})),JO,YO,XO=e((()=>{qO(),JO=e=>Array.isArray(e)?e:[e],YO=(e,t)=>{let n=JO(t),r=(n.every(Array.isArray)?n:[n]).map(([e,t])=>({actions:JO(e).map(KO),handle:t}));return(t=e,n)=>{let i=r.find(e=>e.actions.includes(KO(n)));return i?i.handle(t,n):t}}})),ZO=e((()=>{qO(),XO()})),QO,$O,ek,tk,nk,rk,ik,ak=e((()=>{W(),ZO(),QO={pending:`pending`,rejected:`rejected`,resolved:`resolved`},$O={error:void 0,result:void 0,state:QO.pending},ek=GO(QO.pending),tk=GO(QO.resolved,e=>({result:e})),nk=GO(QO.rejected,e=>({error:e})),rk=YO($O,[[ek,()=>({error:void 0,result:void 0,state:QO.pending})],[tk,(e,{result:t})=>({error:void 0,result:t,state:QO.resolved})],[nk,(e,{error:t})=>({error:t,result:void 0,state:QO.rejected})]]),ik=e=>{let[{error:t,result:n,state:r},i]=Zt(rk,$O);return R(()=>{if(!e)return;let t=!1;return i(ek()),e.then(e=>!t&&i(tk(e)),e=>!t&&i(nk(e))),()=>{t=!0}},[e]),[n,t,r]}})),ok,sk,ck,lk=e((()=>{QD(),rO(),ok=Symbol(`autocomplete.deselect.last`),sk=Symbol(`autocomplete.search.when.selected`),ck=[...nO,[{key:`Backspace`},[ok],{title:`Deselect last`,description:`Remove the last selected item`},{allowInEditable:!0}],[{key:LD},[sk],{title:`Start searching`,description:`Start searching when you start typing when an item is selected`},{allowInEditable:!0}]]})),uk,dk,fk,pk,mk,hk,gk=e((()=>{uk=e=>e.normalize(`NFD`).replace(/[\u0300-\u036f]/gu,``),dk=(e,t,n)=>{if(!t)return e;let r=uk(t.toLowerCase()),i=[];for(let t of e){let e=uk(n(t).toLowerCase()).indexOf(r);e<0||i.push({item:t,index:e})}return i.sort((e,t)=>e.index-t.index).map(({item:e})=>e)},fk=e=>e===!1||e==null?[]:e,pk=(e,t,n)=>e.dispatchEvent(new CustomEvent(t,{detail:n})),mk=[],hk=e=>(...t)=>{let n,r=()=>{n&&cancelAnimationFrame(n)};return r(),n=requestAnimationFrame(()=>{n=void 0,e(...t)}),r}})),_k,vk,yk=e((()=>{dO(),lT(),HD(),ak(),QD(),jD(),W(),lk(),gk(),_k=(e,t,n)=>B(r=>{t?.(r),e.dispatchEvent(new CustomEvent(n,{detail:r}))},[t]),vk=({value:e,text:t,mode:n,onChange:r,onText:i,onSelect:a,limit:o,min:s,source:c,textProperty:l,textual:u,valueProperty:d,keepOpened:f,keepQuery:p,preserveOrder:m,defaultIndex:h,externalSearch:g,disabled:_,lazyOpen:v})=>{let y=o==null?void 0:Number(o),b=s==null?void 0:Number(s),x=n===`select`,S=z(()=>(u??kD)(l),[u,l]),C=cT(),[w,T]=en(`opened`,!1),E=!t,D=z(()=>t?.trim(),[t]),ee=_k(C,i,`text`),O=B(e=>{r?.(e,()=>T(!1));let t=x?e[0]:e;pk(C,`value`,t)},[r]),[te,ne]=Yt([]),re=!!(v&&!D),ie=z(()=>re?Promise.resolve([]):Promise.resolve(typeof c==`function`?c({query:D,active:w}):c).then(fk),[c,w,D,re]),k=z(()=>cO(e),[e]);R(()=>ie.then(ne),[ie]),UD({activity:ok,callback:()=>{let e=cO(k);e.length>(b??0)&&O(e.slice(0,-1))},check:()=>!_&&E&&C.matches(`:focus-within`),element:()=>C},[]),UD({activity:sk,callback:e=>{let t=cO(k),n=y===1;t.length>0&&n&&e.key.length===1&&O(t.slice(0,-1))},allowDefault:!0,check:()=>!_&&E&&C.matches(`:focus-within`),element:()=>C},[y]),R(()=>{!w&&!p&&ee(``)},[w,p]),R(()=>{C.toggleAttribute(`opened`,!!w)},[w]);let A=VD({onText:ee,onChange:O,value:k,limit:y,min:b,keepQuery:p,keepOpened:f,setOpened:T,onSelect:a,valueProperty:d}),[,,ae]=ik(ie);return{limit:y,opened:w,query:D,textual:S,value:k,source$:ie,loading:ae===`pending`,items:z(()=>{if(!w||re)return mk;let e=m?te:[...k,...uO(k,OD(d))(te)];return g?e:dk(e,D,S)},[te,w,D,S,E,k,m,d,g,re]),onToggle:B(e=>{_||T(e.newState===`open`)},[_]),onText:B(e=>{_||(ee(e.target.value),T(!0))},[_,ee,t,T]),onSelect:B(e=>{if(_)return;A.onSelect?.(e,A);let{onChange:t,onText:n,limit:r,min:i,value:a,keepQuery:o,keepOpened:s,setOpened:c,valueProperty:l}=A;o||n(``),s||c(!1);let u=cO(a),d=OD(l),f=u.some(t=>d(t)===d(e));f&&u.length===i||t((f?uO(e,d)(u):[...u,e]).slice(-r))},[_,A]),onDeselect:B(e=>{_||A.onChange(uO(e,OD(A.valueProperty))(A.value))},[_,A]),defaultIndex:D!==void 0&&D?.length>0?0:h}}})),bk,xk,Sk=e((()=>{lT(),W(),gk(),bk=e=>{let t=e.shadowRoot.querySelectorAll(`.chip`),n=e.shadowRoot.querySelector(`.badge`);if(!n)return;n.hidden=!0;for(let e of t)e.hidden=!1;let r=e.shadowRoot.querySelector(`cosmoz-input`).shadowRoot?.querySelector(`.control`)?.getBoundingClientRect(),i;for(i=0;i<t.length;i++){let e=t[i].getBoundingClientRect();if(!(e.x+e.width<=r.x+r.width-24))break}let a=t.length-i;for(n.querySelector(`span`).textContent=`+`+a.toString(),n.hidden=a<1;i<t.length;i++)t[i].hidden=!0},xk=({value:e,opened:t,wrap:n,limit:r})=>{let i=cT(),a=!(n||r===1)&&e.length>0,o=z(()=>hk(()=>bk(i)),[]),[s,c]=Yt(0);qt(()=>{if(!a)return;let e=i.shadowRoot.querySelector(`cosmoz-input`),t=new ResizeObserver(e=>{c(e[0].contentRect.width)});return t.observe(e),()=>t.disconnect()},[a]),qt(()=>a?o():void 0,[a,s,t,e])}})),Ck,wk,Tk,Ek,Dk,Ok=e((()=>{zn(),Fw(),NT(),kE(),F(),ME(),K(),Lw(),BE(),J(),TO(),BO(),HO(),WO(),yk(),Sk(),Ck=[`input`,`control`,`label`,`line`,`error`,`wrap`].map(e=>`${e}: input-${e}`).join(),wk=({opened:e,isSingle:t,showSingle:n,hasResultsOrQuery:r})=>!e||t&&!n?!1:r,Tk=e=>{let{variant:t,opened:n,invalid:r,errorMessage:i,hint:a,label:o,placeholder:s,required:c,disabled:l,textual:u,text:d,onText:f,onToggle:p,onDeselect:m,value:h,limit:g,min:_,showSingle:v,items:y,source$:b,loading:x,chipRenderer:S,mode:C}=e,w=g===1,T=w&&h?.[0]!=null,E=x||y.length>0||d!=null&&d.length>0;return j`<cosmoz-dropdown-next
			open-on-focus
			?disabled=${l}
			.opened=${n}
			@dropdown-toggle=${p}
			part="dropdown"
		>
			<cosmoz-input
				slot="button"
				id="input"
				part="input"
				.label=${o}
				.placeholder=${T?void 0:s}
				hint=${G(a)}
				variant=${G(t)}
				?readonly=${T}
				?disabled=${l}
				?required=${c}
				?invalid=${jE([b,r],()=>zE(b.then(()=>r,()=>!0),r))}
				.errorMessage=${jE([b,i],()=>zE(b.then(()=>i,e=>e.message),i))}
				.value=${Iw(d)}
				@value-changed=${f}
				autocomplete="off"
				exportparts=${Ck}
				?data-one=${w}
				?data-single=${T}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix">
					${q(C===`select`,()=>es({styles:`margin-right: calc(var(--cz-spacing) * 2);color: var(--cz-color-text-secondary);`,width:`16`,height:`16`}))}
				</slot>
				${zO({value:h,min:_,isOne:w,onDeselect:m,textual:u,disabled:l,chipRenderer:S})}
			</cosmoz-input>

			${q(wk({opened:n,isSingle:T,showSingle:v,hasResultsOrQuery:E}),()=>wO({...e,items:y,multi:!w},q(x,()=>j`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>q(d!=null&&d.length>0&&y.length===0,()=>j`<slot name="no-result">
											<span class="no-result">${OE(`No results found`)}</span>
										</slot>`))))}
		</cosmoz-dropdown-next>`},Ek=e=>{let t={...e,...vk(e)};return xk(t),Tk(t)},Dk=[`variant`,`disabled`,`invalid`,`required`,`hint`,`text-property`,`value-property`,`limit`,`min`,`show-single`,`preserve-order`,`keep-opened`,`keep-query`,`default-index`,`external-search`,`item-height`,`item-limit`,`wrap`,`lazy-open`,`mode`]})),kk,Ak,jk,Mk=e((()=>{An(),W(),Ok(),kk=e=>{let{onChange:t,onText:n,mode:r,...i}=e,a=r===`select`,[o,s]=en(`value`);return R(()=>{e.onChange!=null&&console.warn(`onChange is deprecated; use value-changed and lift instead`)},[]),Ek({...i,...a&&{limit:1,min:1,showSingle:!0},mode:r,value:o,onChange:B((e,...n)=>{s(a?e[0]:e),t?.(e,...n)},[t,a]),onText:B(t=>{e.text=t,n?.(t)},[n])})},Ak=[On(UO)],jk={mode:`open`,delegatesFocus:!0},customElements.define(`cosmoz-autocomplete-ui`,U(Ek,{observedAttributes:Dk,styleSheets:Ak,shadowRootInit:jk})),customElements.define(`cosmoz-autocomplete`,U(kk,{observedAttributes:Dk,styleSheets:Ak,shadowRootInit:jk}))})),Nk,Pk=e((()=>{W(),Nk=I`
	cosmoz-listbox::part(error)::before {
		border-color: var(--cz-color-border-error);
		/* prettier-ignore */
		background: url("${`data:image/svg+xml,%3Csvg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.5 2.5L8.5 8.5M8.5 2.5L2.5 8.5' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E`}") var(--cz-color-border-error) no-repeat 50%;
	}

	cosmoz-listbox::part(error):hover {
		background: var(--cz-color-bg-error);
	}
`})),Fk,Ik,Lk=e((()=>{Fk=e=>({item:e,excluded:!1}),Ik=e=>e.item})),Rk,zk=e((()=>{TD(),W(),Mk(),Lk(),Rk=e=>{let[t,n]=en(e);return{value:t,setExcludingValue:B(e=>n(t=>{let n=wD(e,t?.map(Ik));if(!n)return;if(!t)return n.map(Fk);let r=t.reduce((e,t)=>n.includes(t.item)?[...e,t]:t.excluded?e:[...e,{...t,excluded:!0}],[]),i=n.filter(e=>!t.some(t=>t.item===e)).map(Fk);return[...r,...i]}),[]),setValue:n}}})),Bk,Vk,Hk,Uk,Wk,Gk=e((()=>{IO(),W(),K(),Mk(),Ok(),Pk(),zk(),Lk(),Bk=(e,t)=>e?.some(e=>e.item===t&&e.excluded),Vk=(e,t)=>t&&Bk(e,t)?`error`:`gray`,Hk=e=>(t,n,{highlight:r,select:i,textual:a,isSelected:o})=>{let s=a(t);return j`<div
				class="item"
				role="option"
				part="option ${Vk(e,t)}"
				?aria-selected=${o(t)}
				data-index=${n}
				@mouseenter=${()=>r(n)}
				@click=${()=>i(t)}
				@mousedown=${e=>e.preventDefault()}
			>
				${s}
			</div>
			<div class="sizer" virtualizer-sizer>${s}</div>`},Uk=(e,t)=>({item:n,content:r,disabled:i,hidden:a,className:o=`chip`,slot:s})=>j`<cosmoz-tag
			class=${G(o)}
			slot=${G(s)}
			exportparts="chip-text, chip-clear"
			color=${Vk(e,n)}
			?disabled=${i}
			?hidden=${a}
			?removable=${!!n}
			@remove=${()=>t(n)}
			title=${G(typeof r==`string`?r:void 0)}
		>
			${r}
		</cosmoz-tag>`,Wk=e=>{let{value:t,setValue:n,setExcludingValue:r}=Rk(`value`),[i,a]=en(`text`),o=B(e=>n(t=>t?.filter(t=>t.item!==e)),[]);return Ek({...e,value:z(()=>t?.map(Ik),[t]),onChange:B(e=>{r(e)},[]),text:i,onText:B(e=>{a(e)},[]),itemRenderer:z(()=>Hk(t),[t]),chipRenderer:z(()=>Uk(t,o),[t,o])})},customElements.define(`cosmoz-autocomplete-excluding`,U(Wk,{observedAttributes:Dk,styleSheets:[UO,Nk],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),Kk=e((()=>{Mk(),Gk(),lk(),rO()}));export{yu as $,Q as A,Xt as At,tT as B,Rt as Bt,WE as C,H as Ct,jE as D,nn as Dt,zE as E,an as Et,fT as F,B as Ft,Tw as G,We as Gt,zw as H,I as Ht,sT as I,Wt as It,Sw as J,Pe as Jt,ww as K,Be as Kt,oT as L,z as Lt,NT as M,Jt as Mt,pT as N,qt as Nt,ME as O,tn as Ot,dT as P,Gt as Pt,Su as Q,M as Qt,rT as R,Vt as Rt,mD as S,dn as St,BE as T,on as Tt,Rw as U,Ot as Ut,$w as V,R as Vt,Fw as W,$e as Wt,zu as X,j as Xt,Ru as Y,N as Yt,xu as Z,F as Zt,CD as _,W as _t,dO as a,J as at,SD as b,wn as bt,XD as c,G as ct,HD as d,Mn as dt,bu as et,VD as f,An as ft,kD as g,En as gt,AD as h,Dn as ht,cO as i,ts as it,OE as j,Yt as jt,kE as k,en as kt,WD as l,zn as lt,OD as m,On as mt,ck as n,ls as nt,QD as o,q as ot,jD as p,kn as pt,Cw as q,P as qt,lk as r,es as rt,ZD as s,K as st,Kk as t,cs as tt,UD as u,Nn as ut,TD as v,U as vt,GE as w,V as wt,hD as x,un as xt,wD as y,Cn as yt,nT as z,Bt as zt};