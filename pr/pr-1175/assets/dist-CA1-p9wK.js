const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./flow-BcvU3Oud.js","./rolldown-runtime-DkW27tQK.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./preload-helper-wdlQj8DP.js";var r,i,a,o,s,c,l,u;function d(){return(d=e((()=>{r=globalThis,i=r.ShadowRoot&&(r.ShadyCSS===void 0||r.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,a=Symbol(),o=new WeakMap,s=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(i&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=o.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&o.set(t,e))}return e}toString(){return this.cssText}},c=e=>new s(typeof e==`string`?e:e+``,void 0,a),l=(e,t)=>{if(i)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),i=r.litNonce;i!==void 0&&t.setAttribute(`nonce`,i),t.textContent=n.cssText,e.appendChild(t)}},u=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return c(t)})(e):e})))()}var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{d(),{is:f,defineProperty:p,getOwnPropertyDescriptor:m,getOwnPropertyNames:h,getOwnPropertySymbols:g,getPrototypeOf:_}=Object,v=globalThis,y=v.trustedTypes,b=y?y.emptyScript:``,x=v.reactiveElementPolyfillSupport,S=(e,t)=>e,C={toAttribute(e,t){switch(t){case Boolean:e=e?b:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},w=(e,t)=>!f(e,t),T={attribute:!0,type:String,converter:C,reflect:!1,useDefault:!1,hasChanged:w},Symbol.metadata??=Symbol(`metadata`),v.litPropertyMetadata??=new WeakMap,E=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=T){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&p(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=m(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??T}static _$Ei(){if(this.hasOwnProperty(S(`elementProperties`)))return;let e=_(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(S(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S(`properties`))){let e=this.properties,t=[...h(e),...g(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(u(e))}else e!==void 0&&t.push(u(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return l(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?C:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?C:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??w)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}},E.elementStyles=[],E.shadowRootOptions={mode:`open`},E[S(`elementProperties`)]=new Map,E[S(`finalized`)]=new Map,x?.({ReactiveElement:E}),(v.reactiveElementVersions??=[]).push(`2.1.2`)})))()}function ee(e,t){if(!ue(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ie===void 0?t:ie.createHTML(t)}function O(e,t,n=e,r){if(t===M)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=le(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=O(e,i._$AS(e,t.values),i,r)),t}var te,ne,re,ie,k,A,ae,oe,se,ce,le,ue,de,fe,pe,me,he,ge,_e,ve,ye,be,j,xe,M,N,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe;function P(){return(P=e((()=>{te=globalThis,ne=e=>e,re=te.trustedTypes,ie=re?re.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,k=`$lit$`,A=`lit$${Math.random().toFixed(9).slice(2)}$`,ae=`?`+A,oe=`<${ae}>`,se=document,ce=()=>se.createComment(``),le=e=>e===null||typeof e!=`object`&&typeof e!=`function`,ue=Array.isArray,de=e=>ue(e)||typeof e?.[Symbol.iterator]==`function`,fe=`[ 	
\f\r]`,pe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,me=/-->/g,he=/>/g,ge=RegExp(`>|${fe}(?:([^\\s"'>=/]+)(${fe}*=${fe}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),_e=/'/g,ve=/"/g,ye=/^(?:script|style|textarea|title)$/i,be=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),j=be(1),xe=be(2),be(3),M=Symbol.for(`lit-noChange`),N=Symbol.for(`lit-nothing`),Se=new WeakMap,Ce=se.createTreeWalker(se,129),we=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=pe;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===pe?c[1]===`!--`?o=me:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=ge):(ye.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=ge):o=he:o===ge?c[0]===`>`?(o=i??pe,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?ge:c[3]===`"`?ve:_e):o===ve||o===_e?o=ge:o===me||o===he?o=pe:(o=ge,i=void 0);let d=o===ge&&e[t+1].startsWith(`/>`)?` `:``;a+=o===pe?n+oe:l>=0?(r.push(s),n.slice(0,l)+k+n.slice(l)+A+d):n+A+(l===-2?t:d)}return[ee(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},Te=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=we(t,n);if(this.el=e.createElement(l,r),Ce.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Ce.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(k)){let t=u[o++],n=i.getAttribute(e).split(A),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?ke:r[1]===`?`?Ae:r[1]===`@`?je:Oe}),i.removeAttribute(e)}else e.startsWith(A)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(ye.test(i.tagName)){let e=i.textContent.split(A),t=e.length-1;if(t>0){i.textContent=re?re.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],ce()),Ce.nextNode(),c.push({type:2,index:++a});i.append(e[t],ce())}}}else if(i.nodeType===8){if(i.data===ae)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(A,e+1))!==-1;)c.push({type:7,index:a}),e+=A.length-1}}a++}}static createElement(e,t){let n=se.createElement(`template`);return n.innerHTML=e,n}},Ee=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??se).importNode(t,!0);Ce.currentNode=r;let i=Ce.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new De(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Me(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Ce.nextNode(),a++)}return Ce.currentNode=se,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},De=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=O(this,e,t),le(e)?e===N||e==null||e===``?(this._$AH!==N&&this._$AR(),this._$AH=N):e!==this._$AH&&e!==M&&this._(e):e._$litType$===void 0?e.nodeType===void 0?de(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==N&&le(this._$AH)?this._$AA.nextSibling.data=e:this.T(se.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Te.createElement(ee(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Ee(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Se.get(e.strings);return t===void 0&&Se.set(e.strings,t=new Te(e)),t}k(t){ue(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(ce()),this.O(ce()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=ne(e).nextSibling;ne(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Oe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=N,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=N}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=O(this,e,t,0),a=!le(e)||e!==this._$AH&&e!==M,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=O(this,r[n+o],t,o),s===M&&(s=this._$AH[o]),a||=!le(s)||s!==this._$AH[o],s===N?e=N:e!==N&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},ke=class extends Oe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===N?void 0:e}},Ae=class extends Oe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==N)}},je=class extends Oe{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=O(this,e,t,0)??N)===M)return;let n=this._$AH,r=e===N&&n!==N||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==N&&(n===N||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Me=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){O(this,e)}},Ne={M:k,P:A,A:ae,C:1,L:we,R:Ee,D:de,V:O,I:De,H:Oe,N:Ae,U:je,B:ke,F:Me},Pe=te.litHtmlPolyfillSupport,Pe?.(Te,De),(te.litHtmlVersions??=[]).push(`3.3.3`),Fe=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new De(t.insertBefore(ce(),e),e,void 0,n??{})}return i._$AI(e),i}})))()}var Ie,Le,Re;function ze(){return(ze=e((()=>{D(),P(),Ie=globalThis,Le=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Fe(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return M}},Le._$litElement$=!0,Le.finalized=!0,Ie.litElementHydrateSupport?.({LitElement:Le}),Re=Ie.litElementPolyfillSupport,Re?.({LitElement:Le}),(Ie.litElementVersions??=[]).push(`4.2.2`)})))()}function Be(){return(Be=e((()=>{D(),P(),ze()})))()}var Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe;function $e(){return($e=e((()=>{P(),{I:Ve}=Ne,He=e=>e,Ue=e=>e===null||typeof e!=`object`&&typeof e!=`function`,We=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,Ge=e=>e.strings===void 0,Ke=()=>document.createComment(``),qe=(e,t,n)=>{let r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0){let t=r.insertBefore(Ke(),i),a=r.insertBefore(Ke(),i);n=new Ve(t,a,e,e.options)}else{let t=n._$AB.nextSibling,a=n._$AM,o=a!==e;if(o){let t;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(t=e._$AU)!==a._$AU&&n._$AP(t)}if(t!==i||o){let e=n._$AA;for(;e!==t;){let t=He(e).nextSibling;He(r).insertBefore(e,i),e=t}}}return n},Je=(e,t,n=e)=>(e._$AI(t,n),e),Ye={},Xe=(e,t=Ye)=>e._$AH=t,Ze=e=>e._$AH,Qe=e=>{e._$AR(),e._$AA.remove()}})))()}function et(e){rt=e}function tt(){rt=null,it=0}function nt(){return it++}var rt,it;function at(){return(at=e((()=>{it=0})))()}var ot,st,ct,lt,ut,dt,ft;function pt(){return(pt=e((()=>{ot=Symbol(`haunted.phase`),st=Symbol(`haunted.hook`),ct=Symbol(`haunted.update`),lt=Symbol(`haunted.commit`),ut=Symbol(`haunted.effects`),dt=Symbol(`haunted.layoutEffects`),ft=`haunted.context`})))()}var mt;function ht(){return(ht=e((()=>{at(),pt(),mt=class{update;host;virtual;[st];[ut];[dt];constructor(e,t){this.update=e,this.host=t,this[st]=new Map,this[ut]=[],this[dt]=[]}run(e){et(this);let t=e();return tt(),t}_runEffects(e){let t=this[e];et(this);for(let e of t)e.call(this);tt()}runEffects(){this._runEffects(ut)}runLayoutEffects(){this._runEffects(dt)}teardown(){this[st].forEach(e=>{typeof e.teardown==`function`&&e.teardown(!0)})}}})))()}var gt;function _t(){return(_t=e((()=>{gt=class extends Error{constructor(e){let t=e?` <${e}>`:``;super(`Infinite update loop detected in component${t}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name=`InfiniteLoopError`}}})))()}function vt(){let e=[],t;function n(){t=null;let n=e;e=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(r){e.push(r),t??=bt(n)}}var yt,bt,xt,St,Ct;function wt(){return(wt=e((()=>{ht(),pt(),_t(),yt=100,bt=Promise.resolve().then.bind(Promise.resolve()),xt=vt(),St=vt(),Ct=class e{renderer;host;state;[ot];_updateQueued;_active;_updateCount;_processing;static maxUpdates=yt;constructor(e,t){this.renderer=e,this.host=t,this.state=new mt(this.update.bind(this),t),this[ot]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>e.maxUpdates){let e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new gt(e)}}update(){this._active&&(this._updateQueued||=(this._checkForInfiniteLoop(),this._processing=!0,xt(()=>{let e=this.handlePhase(ct);St(()=>{this.handlePhase(lt,e),St(()=>{this.handlePhase(ut),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),!0))}handlePhase(e,t){switch(this[ot]=e,e){case lt:this.commit(t),this.runEffects(dt);return;case ct:return this.render();case ut:return this.runEffects(ut)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}})))()}var Tt,Et,Dt,F;function Ot(){return(Ot=e((()=>{Tt=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t},Et=e=>e?.map(e=>typeof e==`string`?Tt(e):e),Dt=(e,...t)=>e.flatMap((e,n)=>[e,t[n]||``]).join(``),F=Dt})))()}function kt(e){class t extends Ct{frag;renderResult;constructor(e,t,n){super(e,n||t),this.frag=t}commit(t){this.renderResult=e(t,this.frag)}}function n(e,n,r){let i=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:o=!0,shadowRootInit:s={},styleSheets:c}=r||n||{},l=Et(e.styleSheets||c);class u extends i{_scheduler;static get observedAttributes(){return e.observedAttributes||a||[]}constructor(){if(super(),o===!1)this._scheduler=new t(e,this);else{let n=this.attachShadow({mode:`open`,...s});l&&(n.adoptedStyleSheets=l),this._scheduler=new t(e,n,this)}}connectedCallback(){super.connectedCallback?.(),this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback?.(),this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(e,t,n){if(t===n)return;let r=n===``||n;Reflect.set(this,At(e),r)}}function d(e){let t=e,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return t},set(e){n&&t===e||(n=!0,t=e,this._scheduler&&this._scheduler.update())}})}let f=new Proxy(i.prototype,{getPrototypeOf(e){return e},set(e,t,n,r){let i;return t in e?(i=Object.getOwnPropertyDescriptor(e,t),i&&i.set?(i.set.call(r,n),r._scheduler?.update(),!0):(Reflect.set(e,t,n,r),r._scheduler?.update(),!0)):(i=typeof t==`symbol`||t[0]===`_`?{enumerable:!0,configurable:!0,writable:!0,value:n}:d(n),Object.defineProperty(r,t,i),i.set&&i.set.call(r,n),!0)}});return Object.setPrototypeOf(u.prototype,f),u}return n}var At;function jt(){return(jt=e((()=>{wt(),Ot(),At=(e=``)=>e.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():``)})))()}function Mt(e,...t){let n=nt(),r=rt[st],i=r.get(n);return i||(i=new e(n,rt,...t),r.set(n,i)),i.update(...t)}function Nt(e){return Mt.bind(null,e)}var I;function Pt(){return(Pt=e((()=>{at(),pt(),I=class{id;state;constructor(e,t){this.id=e,this.state=t}}})))()}function Ft(e){return Nt(class extends I{callback;lastValues;values;_teardown;constructor(t,n,r,i){super(t,n),e(n,this)}update(e,t){this.callback=e,this.values=t}call(){let e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown==`function`&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}function It(){return(It=e((()=>{Pt()})))()}function Lt(e,t){e[ut].push(t)}var L;function Rt(){return(Rt=e((()=>{pt(),It(),L=Ft(Lt)})))()}var zt,Bt;function Vt(){return(Vt=e((()=>{Pt(),pt(),Rt(),zt=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,Bt=Nt(class extends I{Context;value;_ranEffect;_unsubscribe;constructor(e,t,n){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Lt(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){let t={Context:e,callback:this._updater};zt(this.state.host).dispatchEvent(new CustomEvent(ft,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));let{unsubscribe:n=null,value:r}=t;this.value=n?r:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}})})))()}function Ht(e){return t=>{let n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display=`contents`,this.listeners=new Set,this.addEventListener(ft,this)}disconnectedCallback(){this.removeEventListener(ft,this)}handleEvent(e){let{detail:t}=e;t.Context===n&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}unsubscribe(e){this.listeners.delete(e)}set value(e){this._value=e;for(let t of this.listeners)t(e)}get value(){return this._value}},Consumer:e(function({render:e}){return e(Bt(n))},{useShadowDOM:!1}),defaultValue:t};return n}}function Ut(){return(Ut=e((()=>{pt(),Vt()})))()}var R;function Wt(){return(Wt=e((()=>{Pt(),R=Nt(class extends I{value;values;constructor(e,t,n,r){super(e,t),this.value=n(),this.values=r}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})))()}var z;function Gt(){return(Gt=e((()=>{Wt(),z=(e,t)=>R(()=>e,t)})))()}function Kt(e,t){e[dt].push(t)}var qt;function Jt(){return(Jt=e((()=>{pt(),It(),qt=Ft(Kt)})))()}var Yt;function Xt(){return(Xt=e((()=>{Pt(),Yt=Nt(class extends I{args;constructor(e,t,n){super(e,t),this.updater=this.updater.bind(this),typeof n==`function`&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){let[t]=this.args;typeof e==`function`&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}})})))()}var Zt;function Qt(){return(Qt=e((()=>{Pt(),Zt=Nt(class extends I{reducer;currentState;constructor(e,t,n,r,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i===void 0?r:i(r)}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}})})))()}var $t,en,tn;function nn(){return(nn=e((()=>{Pt(),$t=/([A-Z])/gu,en=Nt(class extends I{property;eventName;constructor(e,t,n,r){if(super(e,t),this.state.virtual)throw Error(`Can't be used with virtual components.`);this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace($t,`-$1`).toLowerCase()+`-changed`,this.state.host[this.property]??(typeof r==`function`&&(r=r()),r!=null&&this.updater(r,!0))}update(e,t){return[this.state.host[this.property],this.updater]}resolve(e){let t=this.state.host[this.property],n=typeof e==`function`?e:void 0;return[t,n?n(t):e,n]}notify(e,t){let n=new CustomEvent(this.eventName,{detail:{value:e,updater:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,t=!1){let[n,r,i]=this.resolve(e),a=this.notify(r,i);(t||!a.defaultPrevented)&&(Object.is(n,r)||(this.state.host[this.property]=r))}}),tn=e=>t=>{t.preventDefault(),e(t.detail.updater??t.detail.value)}})))()}function rn(e){let t=e;return{get current(){return t},set current(e){t=e},get value(){return t},set value(e){t=e}}}function B(e){return R(()=>rn(e),[])}function an(){return(an=e((()=>{Wt()})))()}function on(){return(on=e((()=>{Pt(),Nt(class extends I{update(){return this.state.host}})})))()}function sn({render:e}){let t=kt(e);return{component:t,createContext:Ht(t)}}function cn(){return(cn=e((()=>{jt(),Ut(),Gt(),Rt(),Jt(),Xt(),Qt(),Wt(),Vt(),nn(),an(),on(),Pt(),wt()})))()}var V,H,ln;function U(){return(U=e((()=>{V={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},H=e=>(...t)=>({_$litDirective$:e,values:t}),ln=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}})))()}function un(e){this._$AN===void 0?this._$AM=e:(pn(this),this._$AM=e,mn(this))}function dn(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0){if(t){if(Array.isArray(r))for(let e=n;e<r.length;e++)fn(r[e],!1),pn(r[e]);else r!=null&&(fn(r,!1),pn(r))}else fn(this,e)}}var fn,pn,mn,hn,gn;function _n(){return(_n=e((()=>{$e(),U(),fn=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),fn(e,t);return!0},pn=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},mn=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),hn(t)}},hn=e=>{e.type==V.CHILD&&(e._$AP??=dn,e._$AQ??=un)},gn=class extends ln{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),mn(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(fn(this,e),pn(this))}setValue(e){if(Ge(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}})))()}function vn(){return(vn=e((()=>{U(),P(),_n(),wt(),Array.prototype.includes})))()}var W,yn;function bn(){return(bn=e((()=>{P(),cn(),vn(),{component:W,createContext:yn}=sn({render:Fe})})))()}function G(){return(G=e((()=>{bn(),cn(),Ot()})))()}function xn(){return(xn=e((()=>{G()})))()}var Sn;function Cn(){return(Cn=e((()=>{Sn=(e,...t)=>e.flatMap((e,n)=>[e,t[n]??``]).join(``)})))()}var wn;function Tn(){return(Tn=e((()=>{wn=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t}})))()}function En(){return(En=e((()=>{xn(),Cn(),Tn()})))()}var Dn,On;function kn(){return(kn=e((()=>{P(),_n(),Dn=class extends gn{_slot;_ref;#e=()=>{this._slot&&this._ref&&(this._ref.current=this._slot.assignedElements({flatten:!0}))};#t=()=>this.#e();update(e,[t]){this._ref=t;let n=e.element;this._slot!==n&&(this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=n,n.addEventListener(`slotchange`,this.#t)),this.#e()}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=void 0}render(e){return M}},On=H(Dn)})))()}function An(e){return()=>e}var jn,Mn,Nn,Pn;function Fn(){return(Fn=e((()=>{jn=An(),Mn=jn,Nn=e=>e,Pn=(e,...t)=>typeof e==`function`?e(...t):e})))()}var In,Ln,Rn,zn;function Bn(){return(Bn=e((()=>{P(),_n(),Fn(),In=(e,t,n)=>{n==null?e.removeAttribute(t):e.setAttribute(t,n)},Ln=(e,t)=>{for(let[n,r]of Object.entries(e))In(t,n,Pn(r,t))},Rn=class extends gn{_slot;_attrs;#e=()=>{if(!this._slot||!this._attrs)return;let e=this._slot.assignedElements({flatten:!0});for(let t of e)Ln(this._attrs,t)};#t=()=>this.#e();render(e){return M}update(e,[t]){this._attrs=t;let n=e.element;return this._slot!==n&&(this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=n,n.addEventListener(`slotchange`,this.#t)),this.#e(),M}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=void 0}},zn=H(Rn)})))()}var Vn,Hn;function Un(){return(Un=e((()=>{P(),_n(),U(),Vn=new WeakMap,Hn=H(class extends gn{render(e){return N}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),N}rt(e){if(this.G!==void 0){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=Vn.get(t);n===void 0&&(n=new WeakMap,Vn.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}}get lt(){return typeof this.G==`function`?Vn.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})))()}var Wn;function Gn(){return(Gn=e((()=>{G(),Wn=e=>{let t=R(()=>({}),[]);return R(()=>Object.assign(t,e),[t,...Object.values(e)])}})))()}var Kn,qn;function Jn(){return(Jn=e((()=>{Gn(),G(),Kn=e=>{for(let t of e.current??[]){let e=t.matches(`[autofocus]`)?t:t.querySelector(`[autofocus]`);if(e instanceof HTMLElement){e.focus();break}}},qn=e=>{let{placement:t=`bottom span-right`,disabled:n,passthrough:r,openOnHover:i,openOnFocus:a}=e,o=B(),[s,c]=en(`opened`,!1),l=B(),u=B(),d=Wn({disabled:n,openOnHover:i}),f=z(()=>{let e=l.current?.[0];return e instanceof HTMLElement?e:void 0},[]),p=z(()=>{d.disabled||(c(!0),o.current?.showPopover?.())},[]),m=z(()=>{c(!1),o.current?.hidePopover?.()},[]),h=z(()=>{o.current?.matches(`:popover-open`)?m():p()},[]),g=z(()=>{clearTimeout(d.closeTimeout)},[]),_=z(e=>{d.disabled||e.target===f()&&(g(),p())},[]),v=z(()=>{d.disabled||(g(),p())},[]),y=z(()=>{clearTimeout(d.closeTimeout),d.closeTimeout=setTimeout(()=>{let t=o.current;d.openOnHover&&(e.matches(`:hover`)||t?.matches(`:hover`))||e.matches(`:focus-within`)||t?.matches(`:focus-within`)||m()},100)},[]),b=z(()=>{let t=document.activeElement;for(;t?.shadowRoot;)t=t.shadowRoot.activeElement;if(t!=null&&t!==document.body&&t.offsetParent!=null)return;let n=f();n&&(e.removeEventListener(`focusin`,_),n.focus(),e.addEventListener(`focusin`,_))},[]),x=z(t=>{let n=t.newState===`open`;c(n),n?Kn(u):b(),e.dispatchEvent(new ToggleEvent(`dropdown-toggle`,{newState:t.newState,oldState:t.oldState,composed:!0}))},[]);return L(()=>{let e=o.current;e&&(s?e.showPopover?.():e.hidePopover?.())},[s]),L(()=>{e.toggleAttribute(`opened`,!!s)},[s]),L(()=>{if(a&&!n)return e.addEventListener(`focusin`,_),e.addEventListener(`focusout`,y),()=>{e.removeEventListener(`focusin`,_),e.removeEventListener(`focusout`,y)}},[a,n]),L(()=>{if(i&&!n)return e.addEventListener(`pointerenter`,v),e.addEventListener(`pointerleave`,y),()=>{e.removeEventListener(`pointerenter`,v),e.removeEventListener(`pointerleave`,y)}},[i,n]),{placement:t,disabled:n,passthrough:r,opened:s,triggers:l,content:u,popoverRef:o,handleClick:a?p:h,onToggle:x,close:m,scheduleClose:y,cancelClose:g}}})))()}var Yn,Xn,Zn;function Qn(){return(Qn=e((()=>{kn(),Bn(),G(),P(),Un(),Jn(),Yn=F`
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

		opacity: 1;
		transform: translateY(0) scale(1);

		/* overlay/display transitions need allow-discrete to animate
		 * between display:none and display:block */
		transition:
			opacity 150ms ease-out,
			transform 150ms ease-out,
			overlay 150ms ease-out allow-discrete,
			display 150ms ease-out allow-discrete;
	}

	@starting-style {
		[popover]:popover-open {
			opacity: 0;
			transform: translateY(-4px) scale(0.96);
		}
	}

	[popover]:not(:popover-open) {
		opacity: 0;
		transform: translateY(-4px) scale(0.96);
	}

	@media (prefers-reduced-motion: reduce) {
		[popover] {
			transition: none;
		}
	}
`,Xn=({placement:e,disabled:t,passthrough:n,opened:r,triggers:i,content:a,popoverRef:o,handleClick:s,onToggle:c,close:l,scheduleClose:u,cancelClose:d})=>j`
		<slot
			name="button"
			${On(i)}
			${zn({"aria-expanded":n?null:String(r),disabled:t&&!n?``:null})}
			@click=${s}
		></slot>
		${t&&n?j`<slot></slot>`:j`<div
					popover
					style="position-area: ${e}"
					@toggle=${c}
					@select=${l}
					@focusout=${u}
					@focusin=${d}
					${Hn(e=>e&&(o.current=e))}
				>
					<slot ${On(a)}></slot>
				</div>`}
	`,Zn=e=>Xn(qn(e)),customElements.define(`cosmoz-dropdown-next`,W(Zn,{styleSheets:[Yn],observedAttributes:[`placement`,`disabled`,`passthrough`,`open-on-hover`,`open-on-focus`],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}var K;function q(){return(q=e((()=>{P(),K=e=>e??N})))()}function J(e,t,n){return e?t(e):n?.(e)}function $n(){return($n=e((()=>{})))()}function er(){return(er=e((()=>{P(),q()})))()}function tr(){return(tr=e((()=>{P(),q()})))()}function nr(){return(nr=e((()=>{P(),q()})))()}function rr(){return(rr=e((()=>{P(),q()})))()}function ir(){return(ir=e((()=>{P(),q()})))()}function ar(){return(ar=e((()=>{P(),q()})))()}function or(){return(or=e((()=>{P(),q()})))()}function sr(){return(sr=e((()=>{P(),q()})))()}function cr(){return(cr=e((()=>{P(),q()})))()}function lr(){return(lr=e((()=>{P(),q()})))()}function ur(){return(ur=e((()=>{P(),q()})))()}function dr(){return(dr=e((()=>{P(),q()})))()}function fr(){return(fr=e((()=>{P(),q()})))()}function pr(){return(pr=e((()=>{P(),q()})))()}function mr(){return(mr=e((()=>{P(),q()})))()}function hr(){return(hr=e((()=>{P(),q()})))()}function gr(){return(gr=e((()=>{P(),q()})))()}function _r(){return(_r=e((()=>{P(),q()})))()}function vr(){return(vr=e((()=>{P(),q()})))()}function yr(){return(yr=e((()=>{P(),q()})))()}function br(){return(br=e((()=>{P(),q()})))()}function xr(){return(xr=e((()=>{P(),q()})))()}function Sr(){return(Sr=e((()=>{P(),q()})))()}function Cr(){return(Cr=e((()=>{P(),q()})))()}function wr(){return(wr=e((()=>{P(),q()})))()}function Tr(){return(Tr=e((()=>{P(),q()})))()}function Er(){return(Er=e((()=>{P(),q()})))()}function Dr(){return(Dr=e((()=>{P(),q()})))()}function Or(){return(Or=e((()=>{P(),q()})))()}function kr(){return(kr=e((()=>{P(),q()})))()}function Ar(){return(Ar=e((()=>{P(),q()})))()}function jr(){return(jr=e((()=>{P(),q()})))()}function Mr(){return(Mr=e((()=>{P(),q()})))()}function Nr(){return(Nr=e((()=>{P(),q()})))()}function Pr(){return(Pr=e((()=>{P(),q()})))()}function Fr(){return(Fr=e((()=>{P(),q()})))()}function Ir(){return(Ir=e((()=>{P(),q()})))()}function Lr(){return(Lr=e((()=>{P(),q()})))()}function Rr(){return(Rr=e((()=>{P(),q()})))()}function zr(){return(zr=e((()=>{P(),q()})))()}function Br(){return(Br=e((()=>{P(),q()})))()}function Vr(){return(Vr=e((()=>{P(),q()})))()}function Hr(){return(Hr=e((()=>{P(),q()})))()}function Ur(){return(Ur=e((()=>{P(),q()})))()}function Wr(){return(Wr=e((()=>{P(),q()})))()}function Gr(){return(Gr=e((()=>{P(),q()})))()}function Kr(){return(Kr=e((()=>{P(),q()})))()}function qr(){return(qr=e((()=>{P(),q()})))()}function Jr(){return(Jr=e((()=>{P(),q()})))()}function Yr(){return(Yr=e((()=>{P(),q()})))()}function Xr(){return(Xr=e((()=>{P(),q()})))()}function Zr(){return(Zr=e((()=>{P(),q()})))()}function Qr(){return(Qr=e((()=>{P(),q()})))()}function $r(){return($r=e((()=>{P(),q()})))()}function ei(){return(ei=e((()=>{P(),q()})))()}function ti(){return(ti=e((()=>{P(),q()})))()}function ni(){return(ni=e((()=>{P(),q()})))()}function ri(){return(ri=e((()=>{P(),q()})))()}function ii(){return(ii=e((()=>{P(),q()})))()}function ai(){return(ai=e((()=>{P(),q()})))()}function oi(){return(oi=e((()=>{P(),q()})))()}function si(){return(si=e((()=>{P(),q()})))()}function ci(){return(ci=e((()=>{P(),q()})))()}function li(){return(li=e((()=>{P(),q()})))()}function ui(){return(ui=e((()=>{P(),q()})))()}function di(){return(di=e((()=>{P(),q()})))()}function fi(){return(fi=e((()=>{P(),q()})))()}function pi(){return(pi=e((()=>{P(),q()})))()}function mi(){return(mi=e((()=>{P(),q()})))()}function hi(){return(hi=e((()=>{P(),q()})))()}function gi(){return(gi=e((()=>{P(),q()})))()}function _i(){return(_i=e((()=>{P(),q()})))()}function vi(){return(vi=e((()=>{P(),q()})))()}function yi(){return(yi=e((()=>{P(),q()})))()}function bi(){return(bi=e((()=>{P(),q()})))()}function xi(){return(xi=e((()=>{P(),q()})))()}function Si(){return(Si=e((()=>{P(),q()})))()}function Ci(){return(Ci=e((()=>{P(),q()})))()}function wi(){return(wi=e((()=>{P(),q()})))()}function Ti(){return(Ti=e((()=>{P(),q()})))()}function Ei(){return(Ei=e((()=>{P(),q()})))()}function Di(){return(Di=e((()=>{P(),q()})))()}function Oi(){return(Oi=e((()=>{P(),q()})))()}function ki(){return(ki=e((()=>{P(),q()})))()}function Ai(){return(Ai=e((()=>{P(),q()})))()}function ji(){return(ji=e((()=>{P(),q()})))()}function Mi(){return(Mi=e((()=>{P(),q()})))()}function Ni(){return(Ni=e((()=>{P(),q()})))()}function Pi(){return(Pi=e((()=>{P(),q()})))()}function Fi(){return(Fi=e((()=>{P(),q()})))()}function Ii(){return(Ii=e((()=>{P(),q()})))()}function Li(){return(Li=e((()=>{P(),q()})))()}function Ri(){return(Ri=e((()=>{P(),q()})))()}function zi(){return(zi=e((()=>{P(),q()})))()}function Bi(){return(Bi=e((()=>{P(),q()})))()}function Vi(){return(Vi=e((()=>{P(),q()})))()}function Hi(){return(Hi=e((()=>{P(),q()})))()}function Ui(){return(Ui=e((()=>{P(),q()})))()}function Wi(){return(Wi=e((()=>{P(),q()})))()}function Gi(){return(Gi=e((()=>{P(),q()})))()}function Ki(){return(Ki=e((()=>{P(),q()})))()}function qi(){return(qi=e((()=>{P(),q()})))()}function Ji(){return(Ji=e((()=>{P(),q()})))()}function Yi(){return(Yi=e((()=>{P(),q()})))()}function Xi(){return(Xi=e((()=>{P(),q()})))()}function Zi(){return(Zi=e((()=>{P(),q()})))()}function Qi(){return(Qi=e((()=>{P(),q()})))()}function $i(){return($i=e((()=>{P(),q()})))()}function ea(){return(ea=e((()=>{P(),q()})))()}function ta(){return(ta=e((()=>{P(),q()})))()}function na(){return(na=e((()=>{P(),q()})))()}function ra(){return(ra=e((()=>{P(),q()})))()}function ia(){return(ia=e((()=>{P(),q()})))()}function aa(){return(aa=e((()=>{P(),q()})))()}function oa(){return(oa=e((()=>{P(),q()})))()}function sa(){return(sa=e((()=>{P(),q()})))()}function ca(){return(ca=e((()=>{P(),q()})))()}function la(){return(la=e((()=>{P(),q()})))()}function ua(){return(ua=e((()=>{P(),q()})))()}function da(){return(da=e((()=>{P(),q()})))()}function fa(){return(fa=e((()=>{P(),q()})))()}function pa(){return(pa=e((()=>{P(),q()})))()}function ma(){return(ma=e((()=>{P(),q()})))()}function ha(){return(ha=e((()=>{P(),q()})))()}function ga(){return(ga=e((()=>{P(),q()})))()}function _a(){return(_a=e((()=>{P(),q()})))()}function va(){return(va=e((()=>{P(),q()})))()}function ya(){return(ya=e((()=>{P(),q()})))()}function ba(){return(ba=e((()=>{P(),q()})))()}function xa(){return(xa=e((()=>{P(),q()})))()}function Sa(){return(Sa=e((()=>{P(),q()})))()}function Ca(){return(Ca=e((()=>{P(),q()})))()}function wa(){return(wa=e((()=>{P(),q()})))()}function Ta(){return(Ta=e((()=>{P(),q()})))()}function Ea(){return(Ea=e((()=>{P(),q()})))()}function Da(){return(Da=e((()=>{P(),q()})))()}function Oa(){return(Oa=e((()=>{P(),q()})))()}function ka(){return(ka=e((()=>{P(),q()})))()}function Aa(){return(Aa=e((()=>{P(),q()})))()}function ja(){return(ja=e((()=>{P(),q()})))()}function Ma(){return(Ma=e((()=>{P(),q()})))()}function Na(){return(Na=e((()=>{P(),q()})))()}function Pa(){return(Pa=e((()=>{P(),q()})))()}function Fa(){return(Fa=e((()=>{P(),q()})))()}function Ia(){return(Ia=e((()=>{P(),q()})))()}function La(){return(La=e((()=>{P(),q()})))()}function Ra(){return(Ra=e((()=>{P(),q()})))()}function za(){return(za=e((()=>{P(),q()})))()}function Ba(){return(Ba=e((()=>{P(),q()})))()}function Va(){return(Va=e((()=>{P(),q()})))()}function Ha(){return(Ha=e((()=>{P(),q()})))()}function Ua(){return(Ua=e((()=>{P(),q()})))()}function Wa(){return(Wa=e((()=>{P(),q()})))()}function Ga(){return(Ga=e((()=>{P(),q()})))()}function Ka(){return(Ka=e((()=>{P(),q()})))()}function qa(){return(qa=e((()=>{P(),q()})))()}function Ja(){return(Ja=e((()=>{P(),q()})))()}function Ya(){return(Ya=e((()=>{P(),q()})))()}function Xa(){return(Xa=e((()=>{P(),q()})))()}function Za(){return(Za=e((()=>{P(),q()})))()}function Qa(){return(Qa=e((()=>{P(),q()})))()}function $a(){return($a=e((()=>{P(),q()})))()}function eo(){return(eo=e((()=>{P(),q()})))()}function to(){return(to=e((()=>{P(),q()})))()}function no(){return(no=e((()=>{P(),q()})))()}function ro(){return(ro=e((()=>{P(),q()})))()}function io(){return(io=e((()=>{P(),q()})))()}function ao(){return(ao=e((()=>{P(),q()})))()}function oo(){return(oo=e((()=>{P(),q()})))()}function so(){return(so=e((()=>{P(),q()})))()}function co(){return(co=e((()=>{P(),q()})))()}function lo(){return(lo=e((()=>{P(),q()})))()}function uo(){return(uo=e((()=>{P(),q()})))()}function fo(){return(fo=e((()=>{P(),q()})))()}function po(){return(po=e((()=>{P(),q()})))()}function mo(){return(mo=e((()=>{P(),q()})))()}function ho(){return(ho=e((()=>{P(),q()})))()}function go(){return(go=e((()=>{P(),q()})))()}function _o(){return(_o=e((()=>{P(),q()})))()}function vo(){return(vo=e((()=>{P(),q()})))()}function yo(){return(yo=e((()=>{P(),q()})))()}function bo(){return(bo=e((()=>{P(),q()})))()}function xo(){return(xo=e((()=>{P(),q()})))()}function So(){return(So=e((()=>{P(),q()})))()}function Co(){return(Co=e((()=>{P(),q()})))()}function wo(){return(wo=e((()=>{P(),q()})))()}function To(){return(To=e((()=>{P(),q()})))()}function Eo(){return(Eo=e((()=>{P(),q()})))()}function Do(){return(Do=e((()=>{P(),q()})))()}function Oo(){return(Oo=e((()=>{P(),q()})))()}function ko(){return(ko=e((()=>{P(),q()})))()}function Ao(){return(Ao=e((()=>{P(),q()})))()}function jo(){return(jo=e((()=>{P(),q()})))()}function Mo(){return(Mo=e((()=>{P(),q()})))()}function No(){return(No=e((()=>{P(),q()})))()}function Po(){return(Po=e((()=>{P(),q()})))()}function Fo(){return(Fo=e((()=>{P(),q()})))()}function Io(){return(Io=e((()=>{P(),q()})))()}function Lo(){return(Lo=e((()=>{P(),q()})))()}function Ro(){return(Ro=e((()=>{P(),q()})))()}function zo(){return(zo=e((()=>{P(),q()})))()}function Bo(){return(Bo=e((()=>{P(),q()})))()}function Vo(){return(Vo=e((()=>{P(),q()})))()}function Ho(){return(Ho=e((()=>{P(),q()})))()}function Uo(){return(Uo=e((()=>{P(),q()})))()}function Wo(){return(Wo=e((()=>{P(),q()})))()}function Go(){return(Go=e((()=>{P(),q()})))()}function Ko(){return(Ko=e((()=>{P(),q()})))()}function qo(){return(qo=e((()=>{P(),q()})))()}function Jo(){return(Jo=e((()=>{P(),q()})))()}function Yo(){return(Yo=e((()=>{P(),q()})))()}function Xo(){return(Xo=e((()=>{P(),q()})))()}function Zo(){return(Zo=e((()=>{P(),q()})))()}function Qo(){return(Qo=e((()=>{P(),q()})))()}function $o(){return($o=e((()=>{P(),q()})))()}function es(){return(es=e((()=>{P(),q()})))()}function ts(){return(ts=e((()=>{P(),q()})))()}function ns(){return(ns=e((()=>{P(),q()})))()}function rs(){return(rs=e((()=>{P(),q()})))()}function is(){return(is=e((()=>{P(),q()})))()}function as(){return(as=e((()=>{P(),q()})))()}function os(){return(os=e((()=>{P(),q()})))()}function ss(){return(ss=e((()=>{P(),q()})))()}function cs(){return(cs=e((()=>{P(),q()})))()}function ls(){return(ls=e((()=>{P(),q()})))()}function us(){return(us=e((()=>{P(),q()})))()}function ds(){return(ds=e((()=>{P(),q()})))()}function fs(){return(fs=e((()=>{P(),q()})))()}function ps(){return(ps=e((()=>{P(),q()})))()}var ms;function hs(){return(hs=e((()=>{P(),q(),ms=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>j`
  <svg
    slot=${K(e)}
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
    style=${K(a)}
  >
    ${J(t,()=>xe`<title>${t}</title>`)}
    <path d="m6 9 6 6 6-6" />
  </svg>
`})))()}function gs(){return(gs=e((()=>{P(),q()})))()}function _s(){return(_s=e((()=>{P(),q()})))()}function vs(){return(vs=e((()=>{P(),q()})))()}function ys(){return(ys=e((()=>{P(),q()})))()}function bs(){return(bs=e((()=>{P(),q()})))()}function xs(){return(xs=e((()=>{P(),q()})))()}var Ss;function Cs(){return(Cs=e((()=>{P(),q(),Ss=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>j`
  <svg
    slot=${K(e)}
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
    style=${K(a)}
  >
    ${J(t,()=>xe`<title>${t}</title>`)}
    <path d="m7 15 5 5 5-5M7 9l5-5 5 5" />
  </svg>
`})))()}function ws(){return(ws=e((()=>{P(),q()})))()}function Ts(){return(Ts=e((()=>{P(),q()})))()}function Es(){return(Es=e((()=>{P(),q()})))()}function Ds(){return(Ds=e((()=>{P(),q()})))()}function Os(){return(Os=e((()=>{P(),q()})))()}function ks(){return(ks=e((()=>{P(),q()})))()}function As(){return(As=e((()=>{P(),q()})))()}function js(){return(js=e((()=>{P(),q()})))()}function Ms(){return(Ms=e((()=>{P(),q()})))()}function Ns(){return(Ns=e((()=>{P(),q()})))()}function Ps(){return(Ps=e((()=>{P(),q()})))()}function Fs(){return(Fs=e((()=>{P(),q()})))()}function Is(){return(Is=e((()=>{P(),q()})))()}function Ls(){return(Ls=e((()=>{P(),q()})))()}function Rs(){return(Rs=e((()=>{P(),q()})))()}function zs(){return(zs=e((()=>{P(),q()})))()}function Bs(){return(Bs=e((()=>{P(),q()})))()}function Vs(){return(Vs=e((()=>{P(),q()})))()}function Hs(){return(Hs=e((()=>{P(),q()})))()}function Us(){return(Us=e((()=>{P(),q()})))()}function Ws(){return(Ws=e((()=>{P(),q()})))()}function Gs(){return(Gs=e((()=>{P(),q()})))()}function Ks(){return(Ks=e((()=>{P(),q()})))()}function qs(){return(qs=e((()=>{P(),q()})))()}function Js(){return(Js=e((()=>{P(),q()})))()}function Ys(){return(Ys=e((()=>{P(),q()})))()}function Xs(){return(Xs=e((()=>{P(),q()})))()}function Zs(){return(Zs=e((()=>{P(),q()})))()}function Qs(){return(Qs=e((()=>{P(),q()})))()}function $s(){return($s=e((()=>{P(),q()})))()}function ec(){return(ec=e((()=>{P(),q()})))()}function tc(){return(tc=e((()=>{P(),q()})))()}function nc(){return(nc=e((()=>{P(),q()})))()}function rc(){return(rc=e((()=>{P(),q()})))()}function ic(){return(ic=e((()=>{P(),q()})))()}function ac(){return(ac=e((()=>{P(),q()})))()}function oc(){return(oc=e((()=>{P(),q()})))()}function sc(){return(sc=e((()=>{P(),q()})))()}function cc(){return(cc=e((()=>{P(),q()})))()}function lc(){return(lc=e((()=>{P(),q()})))()}function uc(){return(uc=e((()=>{P(),q()})))()}function dc(){return(dc=e((()=>{P(),q()})))()}function fc(){return(fc=e((()=>{P(),q()})))()}function pc(){return(pc=e((()=>{P(),q()})))()}function mc(){return(mc=e((()=>{P(),q()})))()}function hc(){return(hc=e((()=>{P(),q()})))()}function gc(){return(gc=e((()=>{P(),q()})))()}function _c(){return(_c=e((()=>{P(),q()})))()}function vc(){return(vc=e((()=>{P(),q()})))()}function yc(){return(yc=e((()=>{P(),q()})))()}function bc(){return(bc=e((()=>{P(),q()})))()}function xc(){return(xc=e((()=>{P(),q()})))()}function Sc(){return(Sc=e((()=>{P(),q()})))()}function Cc(){return(Cc=e((()=>{P(),q()})))()}function wc(){return(wc=e((()=>{P(),q()})))()}function Tc(){return(Tc=e((()=>{P(),q()})))()}function Ec(){return(Ec=e((()=>{P(),q()})))()}function Dc(){return(Dc=e((()=>{P(),q()})))()}function Oc(){return(Oc=e((()=>{P(),q()})))()}function kc(){return(kc=e((()=>{P(),q()})))()}function Ac(){return(Ac=e((()=>{P(),q()})))()}function jc(){return(jc=e((()=>{P(),q()})))()}function Mc(){return(Mc=e((()=>{P(),q()})))()}function Nc(){return(Nc=e((()=>{P(),q()})))()}function Pc(){return(Pc=e((()=>{P(),q()})))()}function Fc(){return(Fc=e((()=>{P(),q()})))()}function Ic(){return(Ic=e((()=>{P(),q()})))()}function Lc(){return(Lc=e((()=>{P(),q()})))()}function Rc(){return(Rc=e((()=>{P(),q()})))()}function zc(){return(zc=e((()=>{P(),q()})))()}function Bc(){return(Bc=e((()=>{P(),q()})))()}function Vc(){return(Vc=e((()=>{P(),q()})))()}function Hc(){return(Hc=e((()=>{P(),q()})))()}function Uc(){return(Uc=e((()=>{P(),q()})))()}function Wc(){return(Wc=e((()=>{P(),q()})))()}function Gc(){return(Gc=e((()=>{P(),q()})))()}function Kc(){return(Kc=e((()=>{P(),q()})))()}function qc(){return(qc=e((()=>{P(),q()})))()}function Jc(){return(Jc=e((()=>{P(),q()})))()}function Yc(){return(Yc=e((()=>{P(),q()})))()}function Xc(){return(Xc=e((()=>{P(),q()})))()}function Zc(){return(Zc=e((()=>{P(),q()})))()}function Qc(){return(Qc=e((()=>{P(),q()})))()}function $c(){return($c=e((()=>{P(),q()})))()}function el(){return(el=e((()=>{P(),q()})))()}function tl(){return(tl=e((()=>{P(),q()})))()}function nl(){return(nl=e((()=>{P(),q()})))()}function rl(){return(rl=e((()=>{P(),q()})))()}function il(){return(il=e((()=>{P(),q()})))()}function al(){return(al=e((()=>{P(),q()})))()}function ol(){return(ol=e((()=>{P(),q()})))()}function sl(){return(sl=e((()=>{P(),q()})))()}function cl(){return(cl=e((()=>{P(),q()})))()}function ll(){return(ll=e((()=>{P(),q()})))()}function ul(){return(ul=e((()=>{P(),q()})))()}function dl(){return(dl=e((()=>{P(),q()})))()}function fl(){return(fl=e((()=>{P(),q()})))()}function pl(){return(pl=e((()=>{P(),q()})))()}function ml(){return(ml=e((()=>{P(),q()})))()}function hl(){return(hl=e((()=>{P(),q()})))()}function gl(){return(gl=e((()=>{P(),q()})))()}function _l(){return(_l=e((()=>{P(),q()})))()}function vl(){return(vl=e((()=>{P(),q()})))()}function yl(){return(yl=e((()=>{P(),q()})))()}function bl(){return(bl=e((()=>{P(),q()})))()}function xl(){return(xl=e((()=>{P(),q()})))()}function Sl(){return(Sl=e((()=>{P(),q()})))()}function Cl(){return(Cl=e((()=>{P(),q()})))()}function wl(){return(wl=e((()=>{P(),q()})))()}function Tl(){return(Tl=e((()=>{P(),q()})))()}function El(){return(El=e((()=>{P(),q()})))()}function Dl(){return(Dl=e((()=>{P(),q()})))()}function Ol(){return(Ol=e((()=>{P(),q()})))()}function kl(){return(kl=e((()=>{P(),q()})))()}function Al(){return(Al=e((()=>{P(),q()})))()}function jl(){return(jl=e((()=>{P(),q()})))()}function Ml(){return(Ml=e((()=>{P(),q()})))()}function Nl(){return(Nl=e((()=>{P(),q()})))()}function Pl(){return(Pl=e((()=>{P(),q()})))()}function Fl(){return(Fl=e((()=>{P(),q()})))()}function Il(){return(Il=e((()=>{P(),q()})))()}function Ll(){return(Ll=e((()=>{P(),q()})))()}function Rl(){return(Rl=e((()=>{P(),q()})))()}function zl(){return(zl=e((()=>{P(),q()})))()}function Bl(){return(Bl=e((()=>{P(),q()})))()}function Vl(){return(Vl=e((()=>{P(),q()})))()}function Hl(){return(Hl=e((()=>{P(),q()})))()}function Ul(){return(Ul=e((()=>{P(),q()})))()}function Wl(){return(Wl=e((()=>{P(),q()})))()}function Gl(){return(Gl=e((()=>{P(),q()})))()}function Kl(){return(Kl=e((()=>{P(),q()})))()}function ql(){return(ql=e((()=>{P(),q()})))()}function Jl(){return(Jl=e((()=>{P(),q()})))()}function Yl(){return(Yl=e((()=>{P(),q()})))()}function Xl(){return(Xl=e((()=>{P(),q()})))()}function Zl(){return(Zl=e((()=>{P(),q()})))()}function Ql(){return(Ql=e((()=>{P(),q()})))()}function $l(){return($l=e((()=>{P(),q()})))()}function eu(){return(eu=e((()=>{P(),q()})))()}function tu(){return(tu=e((()=>{P(),q()})))()}function nu(){return(nu=e((()=>{P(),q()})))()}function ru(){return(ru=e((()=>{P(),q()})))()}function iu(){return(iu=e((()=>{P(),q()})))()}function au(){return(au=e((()=>{P(),q()})))()}function ou(){return(ou=e((()=>{P(),q()})))()}function su(){return(su=e((()=>{P(),q()})))()}function cu(){return(cu=e((()=>{P(),q()})))()}function lu(){return(lu=e((()=>{P(),q()})))()}function uu(){return(uu=e((()=>{P(),q()})))()}function du(){return(du=e((()=>{P(),q()})))()}function fu(){return(fu=e((()=>{P(),q()})))()}function pu(){return(pu=e((()=>{P(),q()})))()}function mu(){return(mu=e((()=>{P(),q()})))()}function hu(){return(hu=e((()=>{P(),q()})))()}function gu(){return(gu=e((()=>{P(),q()})))()}function _u(){return(_u=e((()=>{P(),q()})))()}function vu(){return(vu=e((()=>{P(),q()})))()}function yu(){return(yu=e((()=>{P(),q()})))()}function bu(){return(bu=e((()=>{P(),q()})))()}function xu(){return(xu=e((()=>{P(),q()})))()}function Su(){return(Su=e((()=>{P(),q()})))()}function Cu(){return(Cu=e((()=>{P(),q()})))()}function wu(){return(wu=e((()=>{P(),q()})))()}function Tu(){return(Tu=e((()=>{P(),q()})))()}function Eu(){return(Eu=e((()=>{P(),q()})))()}function Du(){return(Du=e((()=>{P(),q()})))()}function Ou(){return(Ou=e((()=>{P(),q()})))()}function ku(){return(ku=e((()=>{P(),q()})))()}function Au(){return(Au=e((()=>{P(),q()})))()}function ju(){return(ju=e((()=>{P(),q()})))()}function Mu(){return(Mu=e((()=>{P(),q()})))()}var Nu;function Pu(){return(Pu=e((()=>{P(),q(),Nu=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>j`
  <svg
    slot=${K(e)}
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
    style=${K(a)}
  >
    ${J(t,()=>xe`<title>${t}</title>`)}
    <path
      d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
  </svg>
`})))()}var Fu;function Iu(){return(Iu=e((()=>{P(),q(),Fu=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>j`
  <svg
    slot=${K(e)}
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
    style=${K(a)}
  >
    ${J(t,()=>xe`<title>${t}</title>`)}
    <path
      d="M21 15v1.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V15m14-5-5 5m0 0-5-5m5 5V3"
    />
  </svg>
`})))()}function Lu(){return(Lu=e((()=>{P(),q()})))()}function Ru(){return(Ru=e((()=>{P(),q()})))()}function zu(){return(zu=e((()=>{P(),q()})))()}function Bu(){return(Bu=e((()=>{P(),q()})))()}function Vu(){return(Vu=e((()=>{P(),q()})))()}function Hu(){return(Hu=e((()=>{P(),q()})))()}function Uu(){return(Uu=e((()=>{P(),q()})))()}function Wu(){return(Wu=e((()=>{P(),q()})))()}function Gu(){return(Gu=e((()=>{P(),q()})))()}function Ku(){return(Ku=e((()=>{P(),q()})))()}function qu(){return(qu=e((()=>{P(),q()})))()}function Ju(){return(Ju=e((()=>{P(),q()})))()}function Yu(){return(Yu=e((()=>{P(),q()})))()}function Xu(){return(Xu=e((()=>{P(),q()})))()}function Zu(){return(Zu=e((()=>{P(),q()})))()}var Qu;function $u(){return($u=e((()=>{P(),q(),Qu=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>j`
  <svg
    slot=${K(e)}
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
    style=${K(a)}
  >
    ${J(t,()=>xe`<title>${t}</title>`)}
    <path d="M5 9h14M5 15h14" />
  </svg>
`})))()}function ed(){return(ed=e((()=>{P(),q()})))()}function td(){return(td=e((()=>{P(),q()})))()}function nd(){return(nd=e((()=>{P(),q()})))()}function rd(){return(rd=e((()=>{P(),q()})))()}function id(){return(id=e((()=>{P(),q()})))()}function ad(){return(ad=e((()=>{P(),q()})))()}function od(){return(od=e((()=>{P(),q()})))()}function sd(){return(sd=e((()=>{P(),q()})))()}function cd(){return(cd=e((()=>{P(),q()})))()}function ld(){return(ld=e((()=>{P(),q()})))()}function ud(){return(ud=e((()=>{P(),q()})))()}function dd(){return(dd=e((()=>{P(),q()})))()}function fd(){return(fd=e((()=>{P(),q()})))()}function pd(){return(pd=e((()=>{P(),q()})))()}function md(){return(md=e((()=>{P(),q()})))()}function hd(){return(hd=e((()=>{P(),q()})))()}function gd(){return(gd=e((()=>{P(),q()})))()}function _d(){return(_d=e((()=>{P(),q()})))()}function vd(){return(vd=e((()=>{P(),q()})))()}function yd(){return(yd=e((()=>{P(),q()})))()}function bd(){return(bd=e((()=>{P(),q()})))()}function xd(){return(xd=e((()=>{P(),q()})))()}function Sd(){return(Sd=e((()=>{P(),q()})))()}function Cd(){return(Cd=e((()=>{P(),q()})))()}function wd(){return(wd=e((()=>{P(),q()})))()}function Td(){return(Td=e((()=>{P(),q()})))()}function Ed(){return(Ed=e((()=>{P(),q()})))()}function Dd(){return(Dd=e((()=>{P(),q()})))()}function Od(){return(Od=e((()=>{P(),q()})))()}function kd(){return(kd=e((()=>{P(),q()})))()}function Ad(){return(Ad=e((()=>{P(),q()})))()}function jd(){return(jd=e((()=>{P(),q()})))()}function Md(){return(Md=e((()=>{P(),q()})))()}function Nd(){return(Nd=e((()=>{P(),q()})))()}function Pd(){return(Pd=e((()=>{P(),q()})))()}function Fd(){return(Fd=e((()=>{P(),q()})))()}function Id(){return(Id=e((()=>{P(),q()})))()}function Ld(){return(Ld=e((()=>{P(),q()})))()}function Rd(){return(Rd=e((()=>{P(),q()})))()}function zd(){return(zd=e((()=>{P(),q()})))()}function Bd(){return(Bd=e((()=>{P(),q()})))()}function Vd(){return(Vd=e((()=>{P(),q()})))()}function Hd(){return(Hd=e((()=>{P(),q()})))()}function Ud(){return(Ud=e((()=>{P(),q()})))()}function Wd(){return(Wd=e((()=>{P(),q()})))()}function Gd(){return(Gd=e((()=>{P(),q()})))()}function Kd(){return(Kd=e((()=>{P(),q()})))()}function qd(){return(qd=e((()=>{P(),q()})))()}function Jd(){return(Jd=e((()=>{P(),q()})))()}function Yd(){return(Yd=e((()=>{P(),q()})))()}function Xd(){return(Xd=e((()=>{P(),q()})))()}function Zd(){return(Zd=e((()=>{P(),q()})))()}function Qd(){return(Qd=e((()=>{P(),q()})))()}function $d(){return($d=e((()=>{P(),q()})))()}function ef(){return(ef=e((()=>{P(),q()})))()}function tf(){return(tf=e((()=>{P(),q()})))()}function nf(){return(nf=e((()=>{P(),q()})))()}function rf(){return(rf=e((()=>{P(),q()})))()}function af(){return(af=e((()=>{P(),q()})))()}function of(){return(of=e((()=>{P(),q()})))()}function sf(){return(sf=e((()=>{P(),q()})))()}function cf(){return(cf=e((()=>{P(),q()})))()}function lf(){return(lf=e((()=>{P(),q()})))()}function uf(){return(uf=e((()=>{P(),q()})))()}function df(){return(df=e((()=>{P(),q()})))()}function ff(){return(ff=e((()=>{P(),q()})))()}function pf(){return(pf=e((()=>{P(),q()})))()}function mf(){return(mf=e((()=>{P(),q()})))()}function hf(){return(hf=e((()=>{P(),q()})))()}function gf(){return(gf=e((()=>{P(),q()})))()}function _f(){return(_f=e((()=>{P(),q()})))()}function vf(){return(vf=e((()=>{P(),q()})))()}function yf(){return(yf=e((()=>{P(),q()})))()}function bf(){return(bf=e((()=>{P(),q()})))()}function xf(){return(xf=e((()=>{P(),q()})))()}function Sf(){return(Sf=e((()=>{P(),q()})))()}function Cf(){return(Cf=e((()=>{P(),q()})))()}function wf(){return(wf=e((()=>{P(),q()})))()}function Tf(){return(Tf=e((()=>{P(),q()})))()}function Ef(){return(Ef=e((()=>{P(),q()})))()}function Df(){return(Df=e((()=>{P(),q()})))()}function Of(){return(Of=e((()=>{P(),q()})))()}function kf(){return(kf=e((()=>{P(),q()})))()}function Af(){return(Af=e((()=>{P(),q()})))()}function jf(){return(jf=e((()=>{P(),q()})))()}function Mf(){return(Mf=e((()=>{P(),q()})))()}function Nf(){return(Nf=e((()=>{P(),q()})))()}function Pf(){return(Pf=e((()=>{P(),q()})))()}function Ff(){return(Ff=e((()=>{P(),q()})))()}function If(){return(If=e((()=>{P(),q()})))()}function Lf(){return(Lf=e((()=>{P(),q()})))()}function Rf(){return(Rf=e((()=>{P(),q()})))()}function zf(){return(zf=e((()=>{P(),q()})))()}function Bf(){return(Bf=e((()=>{P(),q()})))()}function Vf(){return(Vf=e((()=>{P(),q()})))()}function Hf(){return(Hf=e((()=>{P(),q()})))()}function Uf(){return(Uf=e((()=>{P(),q()})))()}function Wf(){return(Wf=e((()=>{P(),q()})))()}function Gf(){return(Gf=e((()=>{P(),q()})))()}function Kf(){return(Kf=e((()=>{P(),q()})))()}function qf(){return(qf=e((()=>{P(),q()})))()}function Jf(){return(Jf=e((()=>{P(),q()})))()}function Yf(){return(Yf=e((()=>{P(),q()})))()}function Xf(){return(Xf=e((()=>{P(),q()})))()}function Zf(){return(Zf=e((()=>{P(),q()})))()}function Qf(){return(Qf=e((()=>{P(),q()})))()}function $f(){return($f=e((()=>{P(),q()})))()}function ep(){return(ep=e((()=>{P(),q()})))()}function tp(){return(tp=e((()=>{P(),q()})))()}function np(){return(np=e((()=>{P(),q()})))()}function rp(){return(rp=e((()=>{P(),q()})))()}function ip(){return(ip=e((()=>{P(),q()})))()}function ap(){return(ap=e((()=>{P(),q()})))()}function op(){return(op=e((()=>{P(),q()})))()}function sp(){return(sp=e((()=>{P(),q()})))()}function cp(){return(cp=e((()=>{P(),q()})))()}function lp(){return(lp=e((()=>{P(),q()})))()}function up(){return(up=e((()=>{P(),q()})))()}function dp(){return(dp=e((()=>{P(),q()})))()}function fp(){return(fp=e((()=>{P(),q()})))()}function pp(){return(pp=e((()=>{P(),q()})))()}function mp(){return(mp=e((()=>{P(),q()})))()}function hp(){return(hp=e((()=>{P(),q()})))()}function gp(){return(gp=e((()=>{P(),q()})))()}function _p(){return(_p=e((()=>{P(),q()})))()}function vp(){return(vp=e((()=>{P(),q()})))()}function yp(){return(yp=e((()=>{P(),q()})))()}function bp(){return(bp=e((()=>{P(),q()})))()}function xp(){return(xp=e((()=>{P(),q()})))()}function Sp(){return(Sp=e((()=>{P(),q()})))()}function Cp(){return(Cp=e((()=>{P(),q()})))()}function wp(){return(wp=e((()=>{P(),q()})))()}function Tp(){return(Tp=e((()=>{P(),q()})))()}function Ep(){return(Ep=e((()=>{P(),q()})))()}function Dp(){return(Dp=e((()=>{P(),q()})))()}function Op(){return(Op=e((()=>{P(),q()})))()}function kp(){return(kp=e((()=>{P(),q()})))()}function Ap(){return(Ap=e((()=>{P(),q()})))()}function jp(){return(jp=e((()=>{P(),q()})))()}function Mp(){return(Mp=e((()=>{P(),q()})))()}function Np(){return(Np=e((()=>{P(),q()})))()}function Pp(){return(Pp=e((()=>{P(),q()})))()}function Fp(){return(Fp=e((()=>{P(),q()})))()}function Ip(){return(Ip=e((()=>{P(),q()})))()}function Lp(){return(Lp=e((()=>{P(),q()})))()}function Rp(){return(Rp=e((()=>{P(),q()})))()}function zp(){return(zp=e((()=>{P(),q()})))()}function Bp(){return(Bp=e((()=>{P(),q()})))()}function Vp(){return(Vp=e((()=>{P(),q()})))()}function Hp(){return(Hp=e((()=>{P(),q()})))()}function Up(){return(Up=e((()=>{P(),q()})))()}function Wp(){return(Wp=e((()=>{P(),q()})))()}function Gp(){return(Gp=e((()=>{P(),q()})))()}function Kp(){return(Kp=e((()=>{P(),q()})))()}function qp(){return(qp=e((()=>{P(),q()})))()}function Jp(){return(Jp=e((()=>{P(),q()})))()}function Yp(){return(Yp=e((()=>{P(),q()})))()}function Xp(){return(Xp=e((()=>{P(),q()})))()}function Zp(){return(Zp=e((()=>{P(),q()})))()}function Qp(){return(Qp=e((()=>{P(),q()})))()}function $p(){return($p=e((()=>{P(),q()})))()}function em(){return(em=e((()=>{P(),q()})))()}function tm(){return(tm=e((()=>{P(),q()})))()}function nm(){return(nm=e((()=>{P(),q()})))()}function rm(){return(rm=e((()=>{P(),q()})))()}function im(){return(im=e((()=>{P(),q()})))()}function am(){return(am=e((()=>{P(),q()})))()}function om(){return(om=e((()=>{P(),q()})))()}function sm(){return(sm=e((()=>{P(),q()})))()}function cm(){return(cm=e((()=>{P(),q()})))()}function lm(){return(lm=e((()=>{P(),q()})))()}function um(){return(um=e((()=>{P(),q()})))()}function dm(){return(dm=e((()=>{P(),q()})))()}function fm(){return(fm=e((()=>{P(),q()})))()}function pm(){return(pm=e((()=>{P(),q()})))()}function mm(){return(mm=e((()=>{P(),q()})))()}function hm(){return(hm=e((()=>{P(),q()})))()}function gm(){return(gm=e((()=>{P(),q()})))()}function _m(){return(_m=e((()=>{P(),q()})))()}function vm(){return(vm=e((()=>{P(),q()})))()}function ym(){return(ym=e((()=>{P(),q()})))()}function bm(){return(bm=e((()=>{P(),q()})))()}function xm(){return(xm=e((()=>{P(),q()})))()}function Sm(){return(Sm=e((()=>{P(),q()})))()}function Cm(){return(Cm=e((()=>{P(),q()})))()}function wm(){return(wm=e((()=>{P(),q()})))()}function Tm(){return(Tm=e((()=>{P(),q()})))()}function Em(){return(Em=e((()=>{P(),q()})))()}function Dm(){return(Dm=e((()=>{P(),q()})))()}function Om(){return(Om=e((()=>{P(),q()})))()}function km(){return(km=e((()=>{P(),q()})))()}function Am(){return(Am=e((()=>{P(),q()})))()}function jm(){return(jm=e((()=>{P(),q()})))()}function Mm(){return(Mm=e((()=>{P(),q()})))()}function Nm(){return(Nm=e((()=>{P(),q()})))()}function Pm(){return(Pm=e((()=>{P(),q()})))()}function Fm(){return(Fm=e((()=>{P(),q()})))()}function Im(){return(Im=e((()=>{P(),q()})))()}function Lm(){return(Lm=e((()=>{P(),q()})))()}function Rm(){return(Rm=e((()=>{P(),q()})))()}function zm(){return(zm=e((()=>{P(),q()})))()}var Bm;function Vm(){return(Vm=e((()=>{P(),q(),Bm=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>j`
  <svg
    slot=${K(e)}
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
    style=${K(a)}
  >
    ${J(t,()=>xe`<title>${t}</title>`)}
    <path
      d="M12 16v-4m0-4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
`})))()}function Hm(){return(Hm=e((()=>{P(),q()})))()}function Um(){return(Um=e((()=>{P(),q()})))()}function Wm(){return(Wm=e((()=>{P(),q()})))()}function Gm(){return(Gm=e((()=>{P(),q()})))()}function Km(){return(Km=e((()=>{P(),q()})))()}function qm(){return(qm=e((()=>{P(),q()})))()}function Jm(){return(Jm=e((()=>{P(),q()})))()}function Ym(){return(Ym=e((()=>{P(),q()})))()}function Xm(){return(Xm=e((()=>{P(),q()})))()}function Zm(){return(Zm=e((()=>{P(),q()})))()}function Qm(){return(Qm=e((()=>{P(),q()})))()}function $m(){return($m=e((()=>{P(),q()})))()}function eh(){return(eh=e((()=>{P(),q()})))()}function th(){return(th=e((()=>{P(),q()})))()}function nh(){return(nh=e((()=>{P(),q()})))()}function rh(){return(rh=e((()=>{P(),q()})))()}function ih(){return(ih=e((()=>{P(),q()})))()}function ah(){return(ah=e((()=>{P(),q()})))()}function oh(){return(oh=e((()=>{P(),q()})))()}function sh(){return(sh=e((()=>{P(),q()})))()}function ch(){return(ch=e((()=>{P(),q()})))()}function lh(){return(lh=e((()=>{P(),q()})))()}function uh(){return(uh=e((()=>{P(),q()})))()}function dh(){return(dh=e((()=>{P(),q()})))()}function fh(){return(fh=e((()=>{P(),q()})))()}function ph(){return(ph=e((()=>{P(),q()})))()}function mh(){return(mh=e((()=>{P(),q()})))()}function hh(){return(hh=e((()=>{P(),q()})))()}function gh(){return(gh=e((()=>{P(),q()})))()}function _h(){return(_h=e((()=>{P(),q()})))()}function vh(){return(vh=e((()=>{P(),q()})))()}function yh(){return(yh=e((()=>{P(),q()})))()}function bh(){return(bh=e((()=>{P(),q()})))()}function xh(){return(xh=e((()=>{P(),q()})))()}function Sh(){return(Sh=e((()=>{P(),q()})))()}function Ch(){return(Ch=e((()=>{P(),q()})))()}function wh(){return(wh=e((()=>{P(),q()})))()}function Th(){return(Th=e((()=>{P(),q()})))()}function Eh(){return(Eh=e((()=>{P(),q()})))()}function Dh(){return(Dh=e((()=>{P(),q()})))()}function Oh(){return(Oh=e((()=>{P(),q()})))()}function kh(){return(kh=e((()=>{P(),q()})))()}function Ah(){return(Ah=e((()=>{P(),q()})))()}function jh(){return(jh=e((()=>{P(),q()})))()}function Mh(){return(Mh=e((()=>{P(),q()})))()}function Nh(){return(Nh=e((()=>{P(),q()})))()}function Ph(){return(Ph=e((()=>{P(),q()})))()}function Fh(){return(Fh=e((()=>{P(),q()})))()}function Ih(){return(Ih=e((()=>{P(),q()})))()}function Lh(){return(Lh=e((()=>{P(),q()})))()}function Rh(){return(Rh=e((()=>{P(),q()})))()}function zh(){return(zh=e((()=>{P(),q()})))()}function Bh(){return(Bh=e((()=>{P(),q()})))()}function Vh(){return(Vh=e((()=>{P(),q()})))()}function Hh(){return(Hh=e((()=>{P(),q()})))()}function Uh(){return(Uh=e((()=>{P(),q()})))()}function Wh(){return(Wh=e((()=>{P(),q()})))()}function Gh(){return(Gh=e((()=>{P(),q()})))()}function Kh(){return(Kh=e((()=>{P(),q()})))()}function qh(){return(qh=e((()=>{P(),q()})))()}function Jh(){return(Jh=e((()=>{P(),q()})))()}function Yh(){return(Yh=e((()=>{P(),q()})))()}function Xh(){return(Xh=e((()=>{P(),q()})))()}function Zh(){return(Zh=e((()=>{P(),q()})))()}function Qh(){return(Qh=e((()=>{P(),q()})))()}function $h(){return($h=e((()=>{P(),q()})))()}function eg(){return(eg=e((()=>{P(),q()})))()}function tg(){return(tg=e((()=>{P(),q()})))()}function ng(){return(ng=e((()=>{P(),q()})))()}function rg(){return(rg=e((()=>{P(),q()})))()}function ig(){return(ig=e((()=>{P(),q()})))()}function ag(){return(ag=e((()=>{P(),q()})))()}function og(){return(og=e((()=>{P(),q()})))()}function sg(){return(sg=e((()=>{P(),q()})))()}function cg(){return(cg=e((()=>{P(),q()})))()}function lg(){return(lg=e((()=>{P(),q()})))()}function ug(){return(ug=e((()=>{P(),q()})))()}function dg(){return(dg=e((()=>{P(),q()})))()}function fg(){return(fg=e((()=>{P(),q()})))()}function pg(){return(pg=e((()=>{P(),q()})))()}function mg(){return(mg=e((()=>{P(),q()})))()}function hg(){return(hg=e((()=>{P(),q()})))()}function gg(){return(gg=e((()=>{P(),q()})))()}function _g(){return(_g=e((()=>{P(),q()})))()}function vg(){return(vg=e((()=>{P(),q()})))()}function yg(){return(yg=e((()=>{P(),q()})))()}function bg(){return(bg=e((()=>{P(),q()})))()}function xg(){return(xg=e((()=>{P(),q()})))()}function Sg(){return(Sg=e((()=>{P(),q()})))()}function Cg(){return(Cg=e((()=>{P(),q()})))()}function wg(){return(wg=e((()=>{P(),q()})))()}function Tg(){return(Tg=e((()=>{P(),q()})))()}function Eg(){return(Eg=e((()=>{P(),q()})))()}function Dg(){return(Dg=e((()=>{P(),q()})))()}function Og(){return(Og=e((()=>{P(),q()})))()}function kg(){return(kg=e((()=>{P(),q()})))()}function Ag(){return(Ag=e((()=>{P(),q()})))()}function jg(){return(jg=e((()=>{P(),q()})))()}function Mg(){return(Mg=e((()=>{P(),q()})))()}function Ng(){return(Ng=e((()=>{P(),q()})))()}function Pg(){return(Pg=e((()=>{P(),q()})))()}function Fg(){return(Fg=e((()=>{P(),q()})))()}function Ig(){return(Ig=e((()=>{P(),q()})))()}function Lg(){return(Lg=e((()=>{P(),q()})))()}function Rg(){return(Rg=e((()=>{P(),q()})))()}function zg(){return(zg=e((()=>{P(),q()})))()}function Bg(){return(Bg=e((()=>{P(),q()})))()}function Vg(){return(Vg=e((()=>{P(),q()})))()}function Hg(){return(Hg=e((()=>{P(),q()})))()}function Ug(){return(Ug=e((()=>{P(),q()})))()}function Wg(){return(Wg=e((()=>{P(),q()})))()}function Gg(){return(Gg=e((()=>{P(),q()})))()}function Kg(){return(Kg=e((()=>{P(),q()})))()}function qg(){return(qg=e((()=>{P(),q()})))()}function Jg(){return(Jg=e((()=>{P(),q()})))()}function Yg(){return(Yg=e((()=>{P(),q()})))()}function Xg(){return(Xg=e((()=>{P(),q()})))()}function Zg(){return(Zg=e((()=>{P(),q()})))()}function Qg(){return(Qg=e((()=>{P(),q()})))()}function $g(){return($g=e((()=>{P(),q()})))()}function e_(){return(e_=e((()=>{P(),q()})))()}function t_(){return(t_=e((()=>{P(),q()})))()}function n_(){return(n_=e((()=>{P(),q()})))()}function r_(){return(r_=e((()=>{P(),q()})))()}function i_(){return(i_=e((()=>{P(),q()})))()}function a_(){return(a_=e((()=>{P(),q()})))()}function o_(){return(o_=e((()=>{P(),q()})))()}function s_(){return(s_=e((()=>{P(),q()})))()}function c_(){return(c_=e((()=>{P(),q()})))()}function l_(){return(l_=e((()=>{P(),q()})))()}function u_(){return(u_=e((()=>{P(),q()})))()}function d_(){return(d_=e((()=>{P(),q()})))()}function f_(){return(f_=e((()=>{P(),q()})))()}function p_(){return(p_=e((()=>{P(),q()})))()}function m_(){return(m_=e((()=>{P(),q()})))()}function h_(){return(h_=e((()=>{P(),q()})))()}function g_(){return(g_=e((()=>{P(),q()})))()}function __(){return(__=e((()=>{P(),q()})))()}function v_(){return(v_=e((()=>{P(),q()})))()}function y_(){return(y_=e((()=>{P(),q()})))()}function b_(){return(b_=e((()=>{P(),q()})))()}function x_(){return(x_=e((()=>{P(),q()})))()}function S_(){return(S_=e((()=>{P(),q()})))()}function C_(){return(C_=e((()=>{P(),q()})))()}function w_(){return(w_=e((()=>{P(),q()})))()}function T_(){return(T_=e((()=>{P(),q()})))()}function E_(){return(E_=e((()=>{P(),q()})))()}function D_(){return(D_=e((()=>{P(),q()})))()}function O_(){return(O_=e((()=>{P(),q()})))()}function k_(){return(k_=e((()=>{P(),q()})))()}function A_(){return(A_=e((()=>{P(),q()})))()}function j_(){return(j_=e((()=>{P(),q()})))()}function M_(){return(M_=e((()=>{P(),q()})))()}function N_(){return(N_=e((()=>{P(),q()})))()}function P_(){return(P_=e((()=>{P(),q()})))()}function F_(){return(F_=e((()=>{P(),q()})))()}function I_(){return(I_=e((()=>{P(),q()})))()}function L_(){return(L_=e((()=>{P(),q()})))()}function R_(){return(R_=e((()=>{P(),q()})))()}function z_(){return(z_=e((()=>{P(),q()})))()}function B_(){return(B_=e((()=>{P(),q()})))()}function V_(){return(V_=e((()=>{P(),q()})))()}function H_(){return(H_=e((()=>{P(),q()})))()}function U_(){return(U_=e((()=>{P(),q()})))()}function W_(){return(W_=e((()=>{P(),q()})))()}function G_(){return(G_=e((()=>{P(),q()})))()}function K_(){return(K_=e((()=>{P(),q()})))()}function q_(){return(q_=e((()=>{P(),q()})))()}function J_(){return(J_=e((()=>{P(),q()})))()}function Y_(){return(Y_=e((()=>{P(),q()})))()}function X_(){return(X_=e((()=>{P(),q()})))()}function Z_(){return(Z_=e((()=>{P(),q()})))()}function Q_(){return(Q_=e((()=>{P(),q()})))()}function $_(){return($_=e((()=>{P(),q()})))()}function ev(){return(ev=e((()=>{P(),q()})))()}function tv(){return(tv=e((()=>{P(),q()})))()}function nv(){return(nv=e((()=>{P(),q()})))()}function rv(){return(rv=e((()=>{P(),q()})))()}function iv(){return(iv=e((()=>{P(),q()})))()}function av(){return(av=e((()=>{P(),q()})))()}function ov(){return(ov=e((()=>{P(),q()})))()}function sv(){return(sv=e((()=>{P(),q()})))()}function cv(){return(cv=e((()=>{P(),q()})))()}function lv(){return(lv=e((()=>{P(),q()})))()}function uv(){return(uv=e((()=>{P(),q()})))()}function dv(){return(dv=e((()=>{P(),q()})))()}function fv(){return(fv=e((()=>{P(),q()})))()}function pv(){return(pv=e((()=>{P(),q()})))()}function mv(){return(mv=e((()=>{P(),q()})))()}function hv(){return(hv=e((()=>{P(),q()})))()}function gv(){return(gv=e((()=>{P(),q()})))()}function _v(){return(_v=e((()=>{P(),q()})))()}function vv(){return(vv=e((()=>{P(),q()})))()}function yv(){return(yv=e((()=>{P(),q()})))()}function bv(){return(bv=e((()=>{P(),q()})))()}function xv(){return(xv=e((()=>{P(),q()})))()}function Sv(){return(Sv=e((()=>{P(),q()})))()}function Cv(){return(Cv=e((()=>{P(),q()})))()}function wv(){return(wv=e((()=>{P(),q()})))()}function Tv(){return(Tv=e((()=>{P(),q()})))()}function Ev(){return(Ev=e((()=>{P(),q()})))()}function Dv(){return(Dv=e((()=>{P(),q()})))()}function Ov(){return(Ov=e((()=>{P(),q()})))()}function kv(){return(kv=e((()=>{P(),q()})))()}function Av(){return(Av=e((()=>{P(),q()})))()}function jv(){return(jv=e((()=>{P(),q()})))()}function Mv(){return(Mv=e((()=>{P(),q()})))()}function Nv(){return(Nv=e((()=>{P(),q()})))()}function Pv(){return(Pv=e((()=>{P(),q()})))()}function Fv(){return(Fv=e((()=>{P(),q()})))()}function Iv(){return(Iv=e((()=>{P(),q()})))()}function Lv(){return(Lv=e((()=>{P(),q()})))()}function Rv(){return(Rv=e((()=>{P(),q()})))()}function zv(){return(zv=e((()=>{P(),q()})))()}function Bv(){return(Bv=e((()=>{P(),q()})))()}function Vv(){return(Vv=e((()=>{P(),q()})))()}function Hv(){return(Hv=e((()=>{P(),q()})))()}function Uv(){return(Uv=e((()=>{P(),q()})))()}function Wv(){return(Wv=e((()=>{P(),q()})))()}function Gv(){return(Gv=e((()=>{P(),q()})))()}function Kv(){return(Kv=e((()=>{P(),q()})))()}function qv(){return(qv=e((()=>{P(),q()})))()}function Jv(){return(Jv=e((()=>{P(),q()})))()}function Yv(){return(Yv=e((()=>{P(),q()})))()}function Xv(){return(Xv=e((()=>{P(),q()})))()}function Zv(){return(Zv=e((()=>{P(),q()})))()}function Qv(){return(Qv=e((()=>{P(),q()})))()}function $v(){return($v=e((()=>{P(),q()})))()}function ey(){return(ey=e((()=>{P(),q()})))()}function ty(){return(ty=e((()=>{P(),q()})))()}function ny(){return(ny=e((()=>{P(),q()})))()}function ry(){return(ry=e((()=>{P(),q()})))()}function iy(){return(iy=e((()=>{P(),q()})))()}function ay(){return(ay=e((()=>{P(),q()})))()}function oy(){return(oy=e((()=>{P(),q()})))()}function sy(){return(sy=e((()=>{P(),q()})))()}function cy(){return(cy=e((()=>{P(),q()})))()}function ly(){return(ly=e((()=>{P(),q()})))()}function uy(){return(uy=e((()=>{P(),q()})))()}function dy(){return(dy=e((()=>{P(),q()})))()}function fy(){return(fy=e((()=>{P(),q()})))()}function py(){return(py=e((()=>{P(),q()})))()}function my(){return(my=e((()=>{P(),q()})))()}function hy(){return(hy=e((()=>{P(),q()})))()}function gy(){return(gy=e((()=>{P(),q()})))()}function _y(){return(_y=e((()=>{P(),q()})))()}function vy(){return(vy=e((()=>{P(),q()})))()}function yy(){return(yy=e((()=>{P(),q()})))()}function by(){return(by=e((()=>{P(),q()})))()}function xy(){return(xy=e((()=>{P(),q()})))()}function Sy(){return(Sy=e((()=>{P(),q()})))()}function Cy(){return(Cy=e((()=>{P(),q()})))()}function wy(){return(wy=e((()=>{P(),q()})))()}function Ty(){return(Ty=e((()=>{P(),q()})))()}function Ey(){return(Ey=e((()=>{P(),q()})))()}function Dy(){return(Dy=e((()=>{P(),q()})))()}function Oy(){return(Oy=e((()=>{P(),q()})))()}function ky(){return(ky=e((()=>{P(),q()})))()}function Ay(){return(Ay=e((()=>{P(),q()})))()}function jy(){return(jy=e((()=>{P(),q()})))()}function My(){return(My=e((()=>{P(),q()})))()}function Ny(){return(Ny=e((()=>{P(),q()})))()}function Py(){return(Py=e((()=>{P(),q()})))()}function Fy(){return(Fy=e((()=>{P(),q()})))()}function Iy(){return(Iy=e((()=>{P(),q()})))()}function Ly(){return(Ly=e((()=>{P(),q()})))()}function Ry(){return(Ry=e((()=>{P(),q()})))()}function zy(){return(zy=e((()=>{P(),q()})))()}function By(){return(By=e((()=>{P(),q()})))()}function Vy(){return(Vy=e((()=>{P(),q()})))()}function Hy(){return(Hy=e((()=>{P(),q()})))()}function Uy(){return(Uy=e((()=>{P(),q()})))()}function Wy(){return(Wy=e((()=>{P(),q()})))()}function Gy(){return(Gy=e((()=>{P(),q()})))()}function Ky(){return(Ky=e((()=>{P(),q()})))()}function qy(){return(qy=e((()=>{P(),q()})))()}function Jy(){return(Jy=e((()=>{P(),q()})))()}function Yy(){return(Yy=e((()=>{P(),q()})))()}function Xy(){return(Xy=e((()=>{P(),q()})))()}function Zy(){return(Zy=e((()=>{P(),q()})))()}function Qy(){return(Qy=e((()=>{P(),q()})))()}function $y(){return($y=e((()=>{P(),q()})))()}function eb(){return(eb=e((()=>{P(),q()})))()}function tb(){return(tb=e((()=>{P(),q()})))()}function nb(){return(nb=e((()=>{P(),q()})))()}function rb(){return(rb=e((()=>{P(),q()})))()}function ib(){return(ib=e((()=>{P(),q()})))()}function ab(){return(ab=e((()=>{P(),q()})))()}function ob(){return(ob=e((()=>{P(),q()})))()}function sb(){return(sb=e((()=>{P(),q()})))()}function cb(){return(cb=e((()=>{P(),q()})))()}function lb(){return(lb=e((()=>{P(),q()})))()}function ub(){return(ub=e((()=>{P(),q()})))()}function db(){return(db=e((()=>{P(),q()})))()}function fb(){return(fb=e((()=>{P(),q()})))()}function pb(){return(pb=e((()=>{P(),q()})))()}function mb(){return(mb=e((()=>{P(),q()})))()}function hb(){return(hb=e((()=>{P(),q()})))()}function gb(){return(gb=e((()=>{P(),q()})))()}function _b(){return(_b=e((()=>{P(),q()})))()}function vb(){return(vb=e((()=>{P(),q()})))()}function yb(){return(yb=e((()=>{P(),q()})))()}function bb(){return(bb=e((()=>{P(),q()})))()}function xb(){return(xb=e((()=>{P(),q()})))()}function Sb(){return(Sb=e((()=>{P(),q()})))()}function Cb(){return(Cb=e((()=>{P(),q()})))()}function wb(){return(wb=e((()=>{P(),q()})))()}function Tb(){return(Tb=e((()=>{P(),q()})))()}function Eb(){return(Eb=e((()=>{P(),q()})))()}function Db(){return(Db=e((()=>{P(),q()})))()}function Ob(){return(Ob=e((()=>{P(),q()})))()}function kb(){return(kb=e((()=>{P(),q()})))()}function Ab(){return(Ab=e((()=>{P(),q()})))()}function jb(){return(jb=e((()=>{P(),q()})))()}function Mb(){return(Mb=e((()=>{P(),q()})))()}function Nb(){return(Nb=e((()=>{P(),q()})))()}function Pb(){return(Pb=e((()=>{P(),q()})))()}function Fb(){return(Fb=e((()=>{P(),q()})))()}function Ib(){return(Ib=e((()=>{P(),q()})))()}function Lb(){return(Lb=e((()=>{P(),q()})))()}function Rb(){return(Rb=e((()=>{P(),q()})))()}function zb(){return(zb=e((()=>{P(),q()})))()}function Bb(){return(Bb=e((()=>{P(),q()})))()}function Vb(){return(Vb=e((()=>{P(),q()})))()}function Hb(){return(Hb=e((()=>{P(),q()})))()}function Ub(){return(Ub=e((()=>{P(),q()})))()}function Wb(){return(Wb=e((()=>{P(),q()})))()}function Gb(){return(Gb=e((()=>{P(),q()})))()}function Kb(){return(Kb=e((()=>{P(),q()})))()}function qb(){return(qb=e((()=>{P(),q()})))()}function Jb(){return(Jb=e((()=>{P(),q()})))()}function Yb(){return(Yb=e((()=>{P(),q()})))()}function Xb(){return(Xb=e((()=>{P(),q()})))()}function Zb(){return(Zb=e((()=>{P(),q()})))()}function Qb(){return(Qb=e((()=>{P(),q()})))()}function $b(){return($b=e((()=>{P(),q()})))()}function ex(){return(ex=e((()=>{P(),q()})))()}function tx(){return(tx=e((()=>{P(),q()})))()}function nx(){return(nx=e((()=>{P(),q()})))()}function rx(){return(rx=e((()=>{P(),q()})))()}function ix(){return(ix=e((()=>{P(),q()})))()}function ax(){return(ax=e((()=>{P(),q()})))()}function ox(){return(ox=e((()=>{P(),q()})))()}function sx(){return(sx=e((()=>{P(),q()})))()}function cx(){return(cx=e((()=>{P(),q()})))()}function lx(){return(lx=e((()=>{P(),q()})))()}function ux(){return(ux=e((()=>{P(),q()})))()}function dx(){return(dx=e((()=>{P(),q()})))()}function fx(){return(fx=e((()=>{P(),q()})))()}function px(){return(px=e((()=>{P(),q()})))()}function mx(){return(mx=e((()=>{P(),q()})))()}function hx(){return(hx=e((()=>{P(),q()})))()}function gx(){return(gx=e((()=>{P(),q()})))()}function _x(){return(_x=e((()=>{P(),q()})))()}function vx(){return(vx=e((()=>{P(),q()})))()}function yx(){return(yx=e((()=>{P(),q()})))()}function bx(){return(bx=e((()=>{P(),q()})))()}function xx(){return(xx=e((()=>{P(),q()})))()}function Sx(){return(Sx=e((()=>{P(),q()})))()}function Cx(){return(Cx=e((()=>{P(),q()})))()}function wx(){return(wx=e((()=>{P(),q()})))()}function Tx(){return(Tx=e((()=>{P(),q()})))()}function Ex(){return(Ex=e((()=>{P(),q()})))()}function Dx(){return(Dx=e((()=>{P(),q()})))()}function Ox(){return(Ox=e((()=>{P(),q()})))()}function kx(){return(kx=e((()=>{P(),q()})))()}function Ax(){return(Ax=e((()=>{P(),q()})))()}function jx(){return(jx=e((()=>{P(),q()})))()}function Mx(){return(Mx=e((()=>{P(),q()})))()}function Nx(){return(Nx=e((()=>{P(),q()})))()}function Px(){return(Px=e((()=>{P(),q()})))()}function Fx(){return(Fx=e((()=>{P(),q()})))()}function Ix(){return(Ix=e((()=>{P(),q()})))()}function Lx(){return(Lx=e((()=>{P(),q()})))()}function Rx(){return(Rx=e((()=>{P(),q()})))()}function zx(){return(zx=e((()=>{P(),q()})))()}function Bx(){return(Bx=e((()=>{P(),q()})))()}function Vx(){return(Vx=e((()=>{P(),q()})))()}function Hx(){return(Hx=e((()=>{P(),q()})))()}function Ux(){return(Ux=e((()=>{P(),q()})))()}function Wx(){return(Wx=e((()=>{P(),q()})))()}function Gx(){return(Gx=e((()=>{P(),q()})))()}function Kx(){return(Kx=e((()=>{P(),q()})))()}function qx(){return(qx=e((()=>{P(),q()})))()}function Jx(){return(Jx=e((()=>{P(),q()})))()}function Yx(){return(Yx=e((()=>{P(),q()})))()}function Xx(){return(Xx=e((()=>{P(),q()})))()}function Zx(){return(Zx=e((()=>{P(),q()})))()}function Qx(){return(Qx=e((()=>{P(),q()})))()}function $x(){return($x=e((()=>{P(),q()})))()}function eS(){return(eS=e((()=>{P(),q()})))()}function tS(){return(tS=e((()=>{P(),q()})))()}function nS(){return(nS=e((()=>{P(),q()})))()}function rS(){return(rS=e((()=>{P(),q()})))()}function iS(){return(iS=e((()=>{P(),q()})))()}function aS(){return(aS=e((()=>{P(),q()})))()}function oS(){return(oS=e((()=>{P(),q()})))()}function sS(){return(sS=e((()=>{P(),q()})))()}function cS(){return(cS=e((()=>{P(),q()})))()}function lS(){return(lS=e((()=>{P(),q()})))()}function uS(){return(uS=e((()=>{P(),q()})))()}function dS(){return(dS=e((()=>{P(),q()})))()}function fS(){return(fS=e((()=>{P(),q()})))()}function pS(){return(pS=e((()=>{P(),q()})))()}function mS(){return(mS=e((()=>{P(),q()})))()}function hS(){return(hS=e((()=>{P(),q()})))()}function gS(){return(gS=e((()=>{P(),q()})))()}function _S(){return(_S=e((()=>{P(),q()})))()}function vS(){return(vS=e((()=>{P(),q()})))()}function yS(){return(yS=e((()=>{P(),q()})))()}function bS(){return(bS=e((()=>{P(),q()})))()}function xS(){return(xS=e((()=>{P(),q()})))()}function SS(){return(SS=e((()=>{P(),q()})))()}function CS(){return(CS=e((()=>{P(),q()})))()}function wS(){return(wS=e((()=>{P(),q()})))()}function TS(){return(TS=e((()=>{P(),q()})))()}function ES(){return(ES=e((()=>{P(),q()})))()}function DS(){return(DS=e((()=>{P(),q()})))()}function OS(){return(OS=e((()=>{P(),q()})))()}function kS(){return(kS=e((()=>{P(),q()})))()}function AS(){return(AS=e((()=>{P(),q()})))()}function jS(){return(jS=e((()=>{P(),q()})))()}function MS(){return(MS=e((()=>{P(),q()})))()}function NS(){return(NS=e((()=>{P(),q()})))()}function PS(){return(PS=e((()=>{P(),q()})))()}function FS(){return(FS=e((()=>{P(),q()})))()}function IS(){return(IS=e((()=>{P(),q()})))()}function LS(){return(LS=e((()=>{P(),q()})))()}function RS(){return(RS=e((()=>{P(),q()})))()}function zS(){return(zS=e((()=>{P(),q()})))()}function BS(){return(BS=e((()=>{P(),q()})))()}function VS(){return(VS=e((()=>{P(),q()})))()}function HS(){return(HS=e((()=>{P(),q()})))()}function US(){return(US=e((()=>{P(),q()})))()}function WS(){return(WS=e((()=>{P(),q()})))()}function GS(){return(GS=e((()=>{P(),q()})))()}function KS(){return(KS=e((()=>{P(),q()})))()}function qS(){return(qS=e((()=>{P(),q()})))()}function JS(){return(JS=e((()=>{P(),q()})))()}function YS(){return(YS=e((()=>{P(),q()})))()}function XS(){return(XS=e((()=>{P(),q()})))()}function ZS(){return(ZS=e((()=>{P(),q()})))()}function QS(){return(QS=e((()=>{P(),q()})))()}function $S(){return($S=e((()=>{P(),q()})))()}function eC(){return(eC=e((()=>{P(),q()})))()}function tC(){return(tC=e((()=>{P(),q()})))()}function nC(){return(nC=e((()=>{P(),q()})))()}function rC(){return(rC=e((()=>{P(),q()})))()}function iC(){return(iC=e((()=>{P(),q()})))()}function aC(){return(aC=e((()=>{P(),q()})))()}function oC(){return(oC=e((()=>{P(),q()})))()}function sC(){return(sC=e((()=>{P(),q()})))()}function cC(){return(cC=e((()=>{P(),q()})))()}function lC(){return(lC=e((()=>{P(),q()})))()}function uC(){return(uC=e((()=>{P(),q()})))()}function dC(){return(dC=e((()=>{P(),q()})))()}function fC(){return(fC=e((()=>{P(),q()})))()}function pC(){return(pC=e((()=>{P(),q()})))()}function mC(){return(mC=e((()=>{P(),q()})))()}function hC(){return(hC=e((()=>{P(),q()})))()}function gC(){return(gC=e((()=>{P(),q()})))()}function _C(){return(_C=e((()=>{P(),q()})))()}function vC(){return(vC=e((()=>{P(),q()})))()}function yC(){return(yC=e((()=>{P(),q()})))()}function bC(){return(bC=e((()=>{P(),q()})))()}function xC(){return(xC=e((()=>{P(),q()})))()}function SC(){return(SC=e((()=>{P(),q()})))()}function CC(){return(CC=e((()=>{P(),q()})))()}function wC(){return(wC=e((()=>{P(),q()})))()}function TC(){return(TC=e((()=>{P(),q()})))()}function EC(){return(EC=e((()=>{P(),q()})))()}function DC(){return(DC=e((()=>{P(),q()})))()}function OC(){return(OC=e((()=>{P(),q()})))()}function kC(){return(kC=e((()=>{P(),q()})))()}function AC(){return(AC=e((()=>{P(),q()})))()}function jC(){return(jC=e((()=>{P(),q()})))()}function MC(){return(MC=e((()=>{P(),q()})))()}function NC(){return(NC=e((()=>{P(),q()})))()}function PC(){return(PC=e((()=>{P(),q()})))()}function FC(){return(FC=e((()=>{P(),q()})))()}function IC(){return(IC=e((()=>{P(),q()})))()}function LC(){return(LC=e((()=>{P(),q()})))()}function RC(){return(RC=e((()=>{P(),q()})))()}function zC(){return(zC=e((()=>{P(),q()})))()}function BC(){return(BC=e((()=>{P(),q()})))()}function VC(){return(VC=e((()=>{P(),q()})))()}function HC(){return(HC=e((()=>{P(),q()})))()}function UC(){return(UC=e((()=>{P(),q()})))()}function WC(){return(WC=e((()=>{P(),q()})))()}function GC(){return(GC=e((()=>{P(),q()})))()}function KC(){return(KC=e((()=>{P(),q()})))()}function qC(){return(qC=e((()=>{P(),q()})))()}function JC(){return(JC=e((()=>{P(),q()})))()}function YC(){return(YC=e((()=>{P(),q()})))()}function XC(){return(XC=e((()=>{P(),q()})))()}function ZC(){return(ZC=e((()=>{P(),q()})))()}function QC(){return(QC=e((()=>{P(),q()})))()}function $C(){return($C=e((()=>{P(),q()})))()}function ew(){return(ew=e((()=>{P(),q()})))()}function tw(){return(tw=e((()=>{P(),q()})))()}function nw(){return(nw=e((()=>{P(),q()})))()}function rw(){return(rw=e((()=>{P(),q()})))()}function iw(){return(iw=e((()=>{P(),q()})))()}function aw(){return(aw=e((()=>{P(),q()})))()}function ow(){return(ow=e((()=>{P(),q()})))()}function sw(){return(sw=e((()=>{P(),q()})))()}function cw(){return(cw=e((()=>{P(),q()})))()}function lw(){return(lw=e((()=>{P(),q()})))()}function uw(){return(uw=e((()=>{P(),q()})))()}function dw(){return(dw=e((()=>{P(),q()})))()}function fw(){return(fw=e((()=>{P(),q()})))()}function pw(){return(pw=e((()=>{P(),q()})))()}function mw(){return(mw=e((()=>{P(),q()})))()}function hw(){return(hw=e((()=>{P(),q()})))()}function gw(){return(gw=e((()=>{P(),q()})))()}function _w(){return(_w=e((()=>{P(),q()})))()}function vw(){return(vw=e((()=>{P(),q()})))()}function yw(){return(yw=e((()=>{P(),q()})))()}function bw(){return(bw=e((()=>{P(),q()})))()}function xw(){return(xw=e((()=>{P(),q()})))()}function Sw(){return(Sw=e((()=>{P(),q()})))()}function Cw(){return(Cw=e((()=>{P(),q()})))()}function ww(){return(ww=e((()=>{P(),q()})))()}function Tw(){return(Tw=e((()=>{P(),q()})))()}function Ew(){return(Ew=e((()=>{P(),q()})))()}function Dw(){return(Dw=e((()=>{P(),q()})))()}function Ow(){return(Ow=e((()=>{P(),q()})))()}function kw(){return(kw=e((()=>{P(),q()})))()}function Aw(){return(Aw=e((()=>{P(),q()})))()}function jw(){return(jw=e((()=>{P(),q()})))()}function Mw(){return(Mw=e((()=>{P(),q()})))()}function Nw(){return(Nw=e((()=>{P(),q()})))()}function Pw(){return(Pw=e((()=>{P(),q()})))()}function Fw(){return(Fw=e((()=>{P(),q()})))()}var Iw;function Lw(){return(Lw=e((()=>{P(),q(),Iw=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>j`
  <svg
    slot=${K(e)}
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
    style=${K(a)}
  >
    ${J(t,()=>xe`<title>${t}</title>`)}
    <path
      d="m15 9-6 6m0-6 6 6m7-3c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
`})))()}var Rw;function zw(){return(zw=e((()=>{P(),q(),Rw=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>j`
  <svg
    slot=${K(e)}
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
    style=${K(a)}
  >
    ${J(t,()=>xe`<title>${t}</title>`)}
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
`})))()}function Bw(){return(Bw=e((()=>{P(),q()})))()}function Vw(){return(Vw=e((()=>{P(),q()})))()}function Hw(){return(Hw=e((()=>{P(),q()})))()}function Uw(){return(Uw=e((()=>{P(),q()})))()}function Ww(){return(Ww=e((()=>{P(),q()})))()}function Gw(){return(Gw=e((()=>{P(),q()})))()}function Kw(){return(Kw=e((()=>{P(),q()})))()}function qw(){return(qw=e((()=>{P(),q()})))()}function Jw(){return(Jw=e((()=>{P(),q()})))()}function Yw(){return(Yw=e((()=>{er(),tr(),nr(),rr(),ir(),ar(),or(),sr(),cr(),lr(),ur(),dr(),fr(),pr(),mr(),hr(),gr(),_r(),vr(),yr(),br(),xr(),Sr(),Cr(),wr(),Tr(),Er(),Dr(),Or(),kr(),Ar(),jr(),Mr(),Nr(),Pr(),Fr(),Ir(),Lr(),Rr(),zr(),Br(),Vr(),Hr(),Ur(),Wr(),Gr(),Kr(),qr(),Jr(),Yr(),Xr(),Zr(),Qr(),$r(),ei(),ti(),ni(),ri(),ii(),ai(),oi(),si(),ci(),li(),ui(),di(),fi(),pi(),mi(),hi(),gi(),_i(),vi(),yi(),bi(),xi(),Si(),Ci(),wi(),Ti(),Ei(),Di(),Oi(),ki(),Ai(),ji(),Mi(),Ni(),Pi(),Fi(),Ii(),Li(),Ri(),zi(),Bi(),Vi(),Hi(),Ui(),Wi(),Gi(),Ki(),qi(),Ji(),Yi(),Xi(),Zi(),Qi(),$i(),ea(),ta(),na(),ra(),ia(),aa(),oa(),sa(),ca(),la(),ua(),da(),fa(),pa(),ma(),ha(),ga(),_a(),va(),ya(),ba(),xa(),Sa(),Ca(),wa(),Ta(),Ea(),Da(),Oa(),ka(),Aa(),ja(),Ma(),Na(),Pa(),Fa(),Ia(),La(),Ra(),za(),Ba(),Va(),Ha(),Ua(),Wa(),Ga(),Ka(),qa(),Ja(),Ya(),Xa(),Za(),Qa(),$a(),eo(),to(),no(),ro(),io(),ao(),oo(),so(),co(),lo(),uo(),fo(),po(),mo(),ho(),go(),_o(),vo(),yo(),bo(),xo(),So(),Co(),wo(),To(),Eo(),Do(),Oo(),ko(),Ao(),jo(),Mo(),No(),Po(),Fo(),Io(),Lo(),Ro(),zo(),Bo(),Vo(),Ho(),Uo(),Wo(),Go(),Ko(),qo(),Jo(),Yo(),Xo(),Zo(),Qo(),$o(),es(),ts(),ns(),rs(),is(),as(),os(),ss(),cs(),ls(),us(),ds(),fs(),ps(),hs(),gs(),_s(),vs(),ys(),bs(),xs(),Cs(),ws(),Ts(),Es(),Ds(),Os(),ks(),As(),js(),Ms(),Ns(),Ps(),Fs(),Is(),Ls(),Rs(),zs(),Bs(),Vs(),Hs(),Us(),Ws(),Gs(),Ks(),qs(),Js(),Ys(),Xs(),Zs(),Qs(),$s(),ec(),tc(),nc(),rc(),ic(),ac(),oc(),sc(),cc(),lc(),uc(),dc(),fc(),pc(),mc(),hc(),gc(),_c(),vc(),yc(),bc(),xc(),Sc(),Cc(),wc(),Tc(),Ec(),Dc(),Oc(),kc(),Ac(),jc(),Mc(),Nc(),Pc(),Fc(),Ic(),Lc(),Rc(),zc(),Bc(),Vc(),Hc(),Uc(),Wc(),Gc(),Kc(),qc(),Jc(),Yc(),Xc(),Zc(),Qc(),$c(),el(),tl(),nl(),rl(),il(),al(),ol(),sl(),cl(),ll(),ul(),dl(),fl(),pl(),ml(),hl(),gl(),_l(),vl(),yl(),bl(),xl(),Sl(),Cl(),wl(),Tl(),El(),Dl(),Ol(),kl(),Al(),jl(),Ml(),Nl(),Pl(),Fl(),Il(),Ll(),Rl(),zl(),Bl(),Vl(),Hl(),Ul(),Wl(),Gl(),Kl(),ql(),Jl(),Yl(),Xl(),Zl(),Ql(),$l(),eu(),tu(),nu(),ru(),iu(),au(),ou(),su(),cu(),lu(),uu(),du(),fu(),pu(),mu(),hu(),gu(),_u(),vu(),yu(),bu(),xu(),Su(),Cu(),wu(),Tu(),Eu(),Du(),Ou(),ku(),Au(),ju(),Mu(),Pu(),Iu(),Lu(),Ru(),zu(),Bu(),Vu(),Hu(),Uu(),Wu(),Gu(),Ku(),qu(),Ju(),Yu(),Xu(),Zu(),$u(),ed(),td(),nd(),rd(),id(),ad(),od(),sd(),cd(),ld(),ud(),dd(),fd(),pd(),md(),hd(),gd(),_d(),vd(),yd(),bd(),xd(),Sd(),Cd(),wd(),Td(),Ed(),Dd(),Od(),kd(),Ad(),jd(),Md(),Nd(),Pd(),Fd(),Id(),Ld(),Rd(),zd(),Bd(),Vd(),Hd(),Ud(),Wd(),Gd(),Kd(),qd(),Jd(),Yd(),Xd(),Zd(),Qd(),$d(),ef(),tf(),nf(),rf(),af(),of(),sf(),cf(),lf(),uf(),df(),ff(),pf(),mf(),hf(),gf(),_f(),vf(),yf(),bf(),xf(),Sf(),Cf(),wf(),Tf(),Ef(),Df(),Of(),kf(),Af(),jf(),Mf(),Nf(),Pf(),Ff(),If(),Lf(),Rf(),zf(),Bf(),Vf(),Hf(),Uf(),Wf(),Gf(),Kf(),qf(),Jf(),Yf(),Xf(),Zf(),Qf(),$f(),ep(),tp(),np(),rp(),ip(),ap(),op(),sp(),cp(),lp(),up(),dp(),fp(),pp(),mp(),hp(),gp(),_p(),vp(),yp(),bp(),xp(),Sp(),Cp(),wp(),Tp(),Ep(),Dp(),Op(),kp(),Ap(),jp(),Mp(),Np(),Pp(),Fp(),Ip(),Lp(),Rp(),zp(),Bp(),Vp(),Hp(),Up(),Wp(),Gp(),Kp(),qp(),Jp(),Yp(),Xp(),Zp(),Qp(),$p(),em(),tm(),nm(),rm(),im(),am(),om(),sm(),cm(),lm(),um(),dm(),fm(),pm(),mm(),hm(),gm(),_m(),vm(),ym(),bm(),xm(),Sm(),Cm(),wm(),Tm(),Em(),Dm(),Om(),km(),Am(),jm(),Mm(),Nm(),Pm(),Fm(),Im(),Lm(),Rm(),zm(),Vm(),Hm(),Um(),Wm(),Gm(),Km(),qm(),Jm(),Ym(),Xm(),Zm(),Qm(),$m(),eh(),th(),nh(),rh(),ih(),ah(),oh(),sh(),ch(),lh(),uh(),dh(),fh(),ph(),mh(),hh(),gh(),_h(),vh(),yh(),bh(),xh(),Sh(),Ch(),wh(),Th(),Eh(),Dh(),Oh(),kh(),Ah(),jh(),Mh(),Nh(),Ph(),Fh(),Ih(),Lh(),Rh(),zh(),Bh(),Vh(),Hh(),Uh(),Wh(),Gh(),Kh(),qh(),Jh(),Yh(),Xh(),Zh(),Qh(),$h(),eg(),tg(),ng(),rg(),ig(),ag(),og(),sg(),cg(),lg(),ug(),dg(),fg(),pg(),mg(),hg(),gg(),_g(),vg(),yg(),bg(),xg(),Sg(),Cg(),wg(),Tg(),Eg(),Dg(),Og(),kg(),Ag(),jg(),Mg(),Ng(),Pg(),Fg(),Ig(),Lg(),Rg(),zg(),Bg(),Vg(),Hg(),Ug(),Wg(),Gg(),Kg(),qg(),Jg(),Yg(),Xg(),Zg(),Qg(),$g(),e_(),t_(),n_(),r_(),i_(),a_(),o_(),s_(),c_(),l_(),u_(),d_(),f_(),p_(),m_(),h_(),g_(),__(),v_(),y_(),b_(),x_(),S_(),C_(),w_(),T_(),E_(),D_(),O_(),k_(),A_(),j_(),M_(),N_(),P_(),F_(),I_(),L_(),R_(),z_(),B_(),V_(),H_(),U_(),W_(),G_(),K_(),q_(),J_(),Y_(),X_(),Z_(),Q_(),$_(),ev(),tv(),nv(),rv(),iv(),av(),ov(),sv(),cv(),lv(),uv(),dv(),fv(),pv(),mv(),hv(),gv(),_v(),vv(),yv(),bv(),xv(),Sv(),Cv(),wv(),Tv(),Ev(),Dv(),Ov(),kv(),Av(),jv(),Mv(),Nv(),Pv(),Fv(),Iv(),Lv(),Rv(),zv(),Bv(),Vv(),Hv(),Uv(),Wv(),Gv(),Kv(),qv(),Jv(),Yv(),Xv(),Zv(),Qv(),$v(),ey(),ty(),ny(),ry(),iy(),ay(),oy(),sy(),cy(),ly(),uy(),dy(),fy(),py(),my(),hy(),gy(),_y(),vy(),yy(),by(),xy(),Sy(),Cy(),wy(),Ty(),Ey(),Dy(),Oy(),ky(),Ay(),jy(),My(),Ny(),Py(),Fy(),Iy(),Ly(),Ry(),zy(),By(),Vy(),Hy(),Uy(),Wy(),Gy(),Ky(),qy(),Jy(),Yy(),Xy(),Zy(),Qy(),$y(),eb(),tb(),nb(),rb(),ib(),ab(),ob(),sb(),cb(),lb(),ub(),db(),fb(),pb(),mb(),hb(),gb(),_b(),vb(),yb(),bb(),xb(),Sb(),Cb(),wb(),Tb(),Eb(),Db(),Ob(),kb(),Ab(),jb(),Mb(),Nb(),Pb(),Fb(),Ib(),Lb(),Rb(),zb(),Bb(),Vb(),Hb(),Ub(),Wb(),Gb(),Kb(),qb(),Jb(),Yb(),Xb(),Zb(),Qb(),$b(),ex(),tx(),nx(),rx(),ix(),ax(),ox(),sx(),cx(),lx(),ux(),dx(),fx(),px(),mx(),hx(),gx(),_x(),vx(),yx(),bx(),xx(),Sx(),Cx(),wx(),Tx(),Ex(),Dx(),Ox(),kx(),Ax(),jx(),Mx(),Nx(),Px(),Fx(),Ix(),Lx(),Rx(),zx(),Bx(),Vx(),Hx(),Ux(),Wx(),Gx(),Kx(),qx(),Jx(),Yx(),Xx(),Zx(),Qx(),$x(),eS(),tS(),nS(),rS(),iS(),aS(),oS(),sS(),cS(),lS(),uS(),dS(),fS(),pS(),mS(),hS(),gS(),_S(),vS(),yS(),bS(),xS(),SS(),CS(),wS(),TS(),ES(),DS(),OS(),kS(),AS(),jS(),MS(),NS(),PS(),FS(),IS(),LS(),RS(),zS(),BS(),VS(),HS(),US(),WS(),GS(),KS(),qS(),JS(),YS(),XS(),ZS(),QS(),$S(),eC(),tC(),nC(),rC(),iC(),aC(),oC(),sC(),cC(),lC(),uC(),dC(),fC(),pC(),mC(),hC(),gC(),_C(),vC(),yC(),bC(),xC(),SC(),CC(),wC(),TC(),EC(),DC(),OC(),kC(),AC(),jC(),MC(),NC(),PC(),FC(),IC(),LC(),RC(),zC(),BC(),VC(),HC(),UC(),WC(),GC(),KC(),qC(),JC(),YC(),XC(),ZC(),QC(),$C(),ew(),tw(),nw(),rw(),iw(),aw(),ow(),sw(),cw(),lw(),uw(),dw(),fw(),pw(),mw(),hw(),gw(),_w(),vw(),yw(),bw(),xw(),Sw(),Cw(),ww(),Tw(),Ew(),Dw(),Ow(),kw(),Aw(),jw(),Mw(),Nw(),Pw(),Fw(),Lw(),zw(),Bw(),Vw(),Hw(),Uw(),Ww(),Gw(),Kw(),qw(),Jw()})))()}var Xw;function Zw(){return(Zw=e((()=>{P(),U(),$e(),Xw=H(class extends ln{constructor(e){if(super(e),e.type!==V.PROPERTY&&e.type!==V.ATTRIBUTE&&e.type!==V.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ge(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===M||t===N)return t;let n=e.element,r=e.name;if(e.type===V.PROPERTY){if(t===n[r])return M}else if(e.type===V.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return M}else if(e.type===V.ATTRIBUTE&&n.getAttribute(r)===t+``)return M;return Xe(e),t}})})))()}var Qw;function $w(){return($w=e((()=>{G(),Qw=Tt(F`
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
`)})))()}var eT;function tT(){return(tT=e((()=>{$w(),G(),P(),eT=F`
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
`,customElements.define(`cosmoz-tooltip-content`,W(()=>j`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[Qw,eT]}))})))()}var nT;function rT(){return(rT=e((()=>{G(),nT=Tt(F`
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
`)})))()}var iT,aT;function oT(){return(oT=e((()=>{G(),P(),tT(),rT(),iT=(e,t,n)=>Fe(j`<cosmoz-tooltip-content>
			${J(t,()=>j`<strong slot="heading">${t}</strong>`)}
			${J(n,()=>j`<p slot="description">${n}</p>`)}
		</cosmoz-tooltip-content>`,e),aT=(e,t)=>{let{for:n,heading:r,description:i,placement:a=`top`,delay:o=300,disabled:s=!1}=t,c=B(),l=!!(r||i)&&!s;L(()=>{if(!n||!l)return;let t=e.getRootNode(),u=t.adoptedStyleSheets??[];u.includes(nT)||(t.adoptedStyleSheets=[...u,nT]);let d=document.createElement(`div`);d.setAttribute(`popover`,`manual`),d.setAttribute(`role`,`tooltip`),d.classList.add(`cosmoz-tooltip-popover`),e.after(d),c.current=d,iT(d,r,i);let f=`[name="${n}"]`,p=`--tooltip-anchor-${n}`,m,h=e=>{s||(clearTimeout(m),e.style.anchorName=p,d.style.positionAnchor=p,d.style.positionArea=a,m=window.setTimeout(()=>d.showPopover(),o))},g=()=>{clearTimeout(m),d.hidePopover()},_=e=>{let t=e.target.closest?.(f);t&&h(t)},v=e=>{let t=e.target.closest?.(f);if(!t)return;let n=e.relatedTarget;n&&t.contains(n)||g()},y=e=>{let t=e.target.closest?.(f);t&&h(t)},b=e=>{e.target.closest?.(f)&&g()};return t.addEventListener(`pointerover`,_),t.addEventListener(`pointerout`,v),t.addEventListener(`focusin`,y),t.addEventListener(`focusout`,b),()=>{clearTimeout(m),t.removeEventListener(`pointerover`,_),t.removeEventListener(`pointerout`,v),t.removeEventListener(`focusin`,y),t.removeEventListener(`focusout`,b),d.hidePopover(),d.remove(),c.current=void 0}},[n,a,o,l]),L(()=>{n&&c.current&&iT(c.current,r,i)},[r,i,n]),L(()=>{s&&c.current&&c.current.hidePopover()},[s])}})))()}var sT;function cT(){return(cT=e((()=>{G(),sT=e=>{let[t,n]=Yt(!1);return L(()=>{let t=e.current;if(!t)return;let r=()=>{n(t.assignedElements().length>0)};return r(),t.addEventListener(`slotchange`,r),()=>t.removeEventListener(`slotchange`,r)},[e.current]),t}})))()}var lT,uT;function dT(){return(dT=e((()=>{$w(),G(),P(),Un(),tT(),rT(),oT(),cT(),lT=F`
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
`,uT=e=>{let{heading:t,description:n,for:r,placement:i=`top`,delay:a=300,disabled:o=!1}=e,s=B(),c=B(),l=B(),u=sT(l),d=!!(t||n||u)&&!o,f=z(()=>{d&&(clearTimeout(c.current),c.current=window.setTimeout(()=>{s.current?.showPopover()},a))},[a,d]);L(()=>{o&&(clearTimeout(c.current),s.current?.hidePopover())},[o]);let p=z(()=>{clearTimeout(c.current),s.current?.hidePopover()},[]);return L(()=>{if(r)return;let t=t=>{let n=t.relatedTarget;n&&e.contains(n)||p()};return e.addEventListener(`pointerover`,f),e.addEventListener(`pointerout`,t),()=>{e.removeEventListener(`pointerover`,f),e.removeEventListener(`pointerout`,t)}},[r,f,p]),aT(e,{for:r,heading:t,description:n,placement:i,delay:a,disabled:o}),r?N:d?j`
		<slot @focusin=${f} @focusout=${p}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${i}"
			${Hn(s)}
		>
			<cosmoz-tooltip-content>
				${J(t,()=>j`<strong slot="heading">${t}</strong>`)}
				${J(n,()=>j`<p slot="description">${n}</p>`)}
				<slot name="content" ${Hn(l)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:j`
			<slot></slot>
			<slot name="content" ${Hn(l)} hidden></slot>
		`},customElements.define(`cosmoz-tooltip`,W(uT,{styleSheets:[Qw,nT,lT],observedAttributes:[`heading`,`description`,`for`,`placement`,`delay`,`disabled`]}))})))()}function fT(){return(fT=e((()=>{dT()})))()}var pT,mT;function hT(){return(hT=e((()=>{Yw(),fT(),P(),pT=(e,{hint:t,label:n,invalid:r,errorMessage:i,compact:a,required:o})=>j`
		<!-- label: hidden in compact mode -->
		${J(!a&&n,()=>j`<label for="input" part="label"
					>${n}
					${J(o,()=>j`<span class="required">*</span>`)}
				</label>`)}
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
			</div>
			<!-- compact: tooltip always visible, red icon when invalid -->
			${J(a&&r&&i,()=>j`<cosmoz-tooltip
						placement="top"
						description=${i}
						delay="300"
					>
						${Bm({width:`16px`,height:`16px`})}
					</cosmoz-tooltip>`)}

			<slot name="suffix"></slot>
		</div>
		<!-- hint: visible when valid, hidden when invalid or compact -->
		${J(!a&&t&&!r,()=>j`<span class="hint" part="hint">${t}</span>`)}
		<!-- error: replaces hint when invalid, hidden in compact -->
		${J(!a&&r&&i,()=>j`<span class="error" part="error">${i}</span>`)}
	`,mT=[`autocomplete`,`readonly`,`disabled`,`maxlength`,`invalid`]})))()}var gT;function _T(){return(_T=e((()=>{En(),gT=Sn`
	/* === Host === */

	:host {
		display: flex;
		flex-direction: column;
		gap: calc(var(--cz-spacing) * 1.5);
		position: relative;
		--control-height: var(--cz-control-height-md);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-family: var(--cz-font-body);
	}

	:host(:not([compact])) {
		margin-bottom: calc(var(--cz-spacing) * 3);
	}

	:host(:focus-within) {
		caret-color: var(--cz-color-text-primary);
	}

	:host([disabled]) .wrap {
		color: var(--cz-color-text-disabled);
		background: var(--cz-color-bg-disabled-subtle);
		box-shadow: inset 0 0 0 1px var(--cz-color-border-disabled);
		cursor: not-allowed;
	}

	:host([disabled]) #input {
		color: var(--cz-color-text-disabled);
		cursor: not-allowed;
	}

	:host([readonly]) .wrap {
		background: var(--cz-color-bg-secondary);
		box-shadow: inset 0 0 0 1px var(--cz-color-border-secondary);
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
		background: var(--cz-color-bg-primary);
		box-shadow:
			inset 0 0 0 1px var(--cz-color-border-primary),
			var(--cz-shadow-xs);
		overflow: hidden;
		transition-duration: 0.1s;
		transition-timing-function: linear;
		transition-property: box-shadow, background;
	}

	.wrap:has(#input:focus) {
		box-shadow: var(--cz-focus-ring), var(--cz-shadow-xs);
	}

	:host([invalid]) .wrap {
		box-shadow:
			inset 0 0 0 1px var(--cz-color-border-error),
			var(--cz-shadow-xs);
	}

	:host([invalid]) .wrap:has(#input:focus) {
		box-shadow: var(--cz-focus-ring-error), var(--cz-shadow-xs);
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
		padding-block: calc((var(--control-height) - 1lh) / 2);
		padding-inline: calc(var(--cz-spacing) * 3);
	}

	#input::placeholder {
		color: var(--cz-color-text-placeholder);
	}

	/* Paint over the browser's autofill background, which can't be overridden. */
	#input:autofill {
		box-shadow: inset 0 0 0 100vmax var(--cz-color-bg-primary);
		-webkit-text-fill-color: var(--cz-color-text-primary);
	}

	#input::-webkit-inner-spin-button {
		z-index: 1;
	}

	/* === Label === */

	label {
		position: relative;
		font-size: var(--cz-text-sm);
		font-weight: var(--cz-font-weight-medium);
		color: var(--cz-color-text-secondary);
	}

	/* === Hint & Error === */

	.hint {
		font-size: var(--cz-text-xs);
		color: var(--cz-color-text-tertiary);
	}

	.error {
		font-size: var(--cz-text-xs);
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
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
	}

	:host([variant='inline']) .wrap {
		margin-top: calc(var(--cz-spacing) * 2.5);
	}

	:host([variant='inline']) #input {
		padding-block: calc(var(--cz-spacing) * 2);
		padding-inline: 0;
	}

	:host([variant='inline']) #input::placeholder {
		color: transparent;
	}

	:host([variant='inline']) .wrap {
		border-radius: 0;
		background: transparent;
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
		font-weight: var(--cz-font-weight-regular);
		top: 25%;
		left: 0;
		width: 100%;
		pointer-events: none;
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

	:host([variant='cell']) #input {
		padding-block: calc(var(--cz-spacing) * 2);
	}

	:host([variant='cell']) label {
		display: none;
	}

	:host([variant='cell']) .error {
		position: absolute;
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
`})))()}var vT;function yT(){return(yT=e((()=>{G(),vT=e=>R(()=>{if(e==null)return;let t=new RegExp(e,`u`);return e=>{!e.defaultPrevented&&e.data&&!t.test(e.data)&&e.preventDefault()}},[e])})))()}var bT;function xT(){return(xT=e((()=>{G(),bT=Nt(class extends I{values;constructor(e,t,n,r){super(e,t),Object.assign(t.host,n),this.values=r}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})))()}var ST;function CT(){return(CT=e((()=>{G(),ST=Nt(class extends I{update(){return this.state.host}})})))()}var wT,TT,ET;function DT(){return(DT=e((()=>{G(),CT(),wT=/([A-Z])/gu,TT=(e,t,n)=>{e[t]=n,e.dispatchEvent(new CustomEvent(t.replace(wT,`-$1`).toLowerCase()+`-changed`,{detail:{value:n}}))},ET=(e,t,n=[t])=>{let r=ST();L(()=>{TT(r,e,t)},n)}})))()}var OT;function kT(){return(kT=e((()=>{xT(),DT(),G(),OT=e=>{let t=B(void 0),n=z(e=>t.current=e,[]),r=e.shadowRoot,i=z(t=>e.dispatchEvent(new Event(t.type,{bubbles:t.bubbles})),[]),a=z(t=>TT(e,`value`,t.target.value),[]),o=z(t=>TT(e,`focused`,t.type===`focus`),[]),s=z(()=>{let n=t.current?.checkValidity();return e.toggleAttribute(`invalid`,!n),n},[]);return bT({validate:s},[s]),L(()=>{let e=e=>{e.composedPath()[0]?.closest?.(`input, textarea, label`)||(e.preventDefault(),t.current?.focus())};return r.addEventListener(`mousedown`,e),()=>r.removeEventListener(`mousedown`,e)},[]),{onChange:i,onFocus:o,onInput:a,onRef:n}}})))()}var AT,jT;function MT(){return(MT=e((()=>{AT=({placeholder:e})=>e||` `,jT=(e,t)=>t??(e===`date`?`9999-12-31`:void 0)})))()}var NT,PT;function FT(){return(FT=e((()=>{G(),P(),q(),Zw(),Un(),hT(),_T(),yT(),kT(),MT(),NT=[`type`,`variant`,`hint`,`compact`,`required`,`pattern`,`allowed-pattern`,`min`,`max`,`step`,`autosize`,`label`,`placeholder`,...mT],PT=e=>{let{type:t=`text`,pattern:n,allowedPattern:r,autocomplete:i,value:a,readonly:o,disabled:s,min:c,max:l,step:u,maxlength:d,required:f}=e,{onChange:p,onFocus:m,onInput:h,onRef:g}=OT(e),_=vT(r);return e.toggleAttribute(`has-value`,!!a),pT(j`
			<input
				${Hn(g)}
				style="--chars: ${a?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${K(n)}
				autocomplete=${K(i)}
				placeholder=${AT({placeholder:e.placeholder})}
				?readonly=${o}
				aria-disabled=${s?`true`:`false`}
				?disabled=${s}
				?required=${f}
				.value=${Xw(a??``)}
				maxlength=${K(d)}
				@beforeinput=${_}
				@input=${h}
				@change=${p}
				@focus=${m}
				@blur=${m}
				min=${K(c)}
				max=${K(jT(t,l))}
				step=${K(u)}
			/>
		`,e)},customElements.define(`cosmoz-input`,W(PT,{observedAttributes:NT,styleSheets:[Tt(gT)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}var IT,LT,RT;function zT(){return(zT=e((()=>{G(),IT=e=>{e.style.height=``,e.style.height=`${e.scrollHeight}px`},LT=(e,t=0)=>{if(t>0){let n=e.getAttribute(`rows`)??``,r=e.style.height;e.style.height=``,e.setAttribute(`rows`,t),e.style.maxHeight=e.getBoundingClientRect().height+`px`,e.style.height=r,e.setAttribute(`rows`,n)}},RT=e=>{let{value:t,maxRows:n}=e,r=R(()=>()=>e.shadowRoot.querySelector(`#input`),[]);L(()=>LT(r(),n),[n,r]),L(()=>IT(r()),[r,t]),L(()=>{let e=r(),t=new ResizeObserver(()=>requestAnimationFrame(()=>IT(e)));return t.observe(e),()=>t.unobserve(e)},[r])}})))()}var BT,VT;function HT(){return(HT=e((()=>{P(),q(),Zw(),Un(),G(),hT(),_T(),zT(),kT(),BT=[`rows`,`placeholder`,`label`,`hint`,`compact`,`required`,...mT],VT=e=>{let{autocomplete:t,value:n,placeholder:r,readonly:i,disabled:a,rows:o,cols:s,maxlength:c}=e,{onChange:l,onFocus:u,onInput:d,onRef:f}=OT(e);return RT(e),pT(j`
			<textarea id="input" part="input"
				${Hn(f)}
				autocomplete=${K(t)}
				placeholder=${r||` `}
				rows=${o??1} cols=${K(s)}
				?readonly=${i} ?aria-disabled=${a} ?disabled=${a}
				.value=${Xw(n??``)} maxlength=${K(c)} @input=${d}
				@change=${l} @focus=${u} @blur=${u}>`,e)},customElements.define(`cosmoz-textarea`,W(VT,{observedAttributes:BT,styleSheets:[Tt(gT)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}var UT,WT,GT;function KT(){return(KT=e((()=>{G(),Zw(),UT=e=>{let{label:t,value:n,disabled:r,error:i}=e,a=z(t=>e.dispatchEvent(new CustomEvent(`change`,{detail:t.target.checked})),[]);return j`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${Xw(!!n)}
			?disabled=${r}
			@change=${a}
		/>
		${J(t,()=>j`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${J(i,e=>j`<div class="failure">${e}</div>`)} `},WT=F`
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
`,GT=F`
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
`,customElements.define(`cosmoz-toggle`,W(UT,{styleSheets:[GT,WT],observedAttributes:[`label`,`disabled`,`error`]}))})))()}function qT(){return(qT=e((()=>{FT(),HT(),KT(),kT(),hT(),_T()})))()}function JT(){let e=[],t=Object.create(null),n;return t.get=(r,i)=>(n?.revoke?.(),i===SE?e:(e.push(i),n=Proxy.revocable(r,t),n.proxy)),Proxy.revocable(Object.create(null),t).proxy}function YT(e,t){let{[SE]:n}=e(JT()),r=t?.keySeparator??`.`,i=t?.nsSeparator??`:`,a=t?.enableSelector===`strict`;if(n.length>1&&i){let e=t?.ns,o=a?Array.isArray(e)?e:e?[e]:null:Array.isArray(e)?e:null;if(o&&(a?o:o.length>1?o.slice(1):[]).includes(n[0]))return`${n[0]}${i}${n.slice(1).join(r)}`}return n.join(r)}var Y,XT,ZT,QT,$T,eE,tE,nE,rE,iE,aE,oE,sE,X,cE,lE,uE,dE,fE,pE,mE,hE,gE,_E,Z,vE,yE,bE,xE,SE,CE,wE,TE,EE,DE,OE,kE,AE,jE,ME,NE,PE,FE,IE,LE,RE,zE,BE,VE,HE,Q,UE;function WE(){return(WE=e((()=>{Y=e=>typeof e==`string`,XT=()=>{let e,t,n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n},ZT=e=>e==null?``:String(e),QT=(e,t,n)=>{e.forEach(e=>{t[e]&&(n[e]=t[e])})},$T=/###/g,eE=e=>e&&e.includes(`###`)?e.replace($T,`.`):e,tE=e=>!e||Y(e),nE=(e,t,n)=>{let r=Y(t)?t.split(`.`):t,i=0;for(;i<r.length-1;){if(tE(e))return{};let t=eE(r[i]);!e[t]&&n&&(e[t]=new n),e=Object.prototype.hasOwnProperty.call(e,t)?e[t]:{},++i}return tE(e)?{}:{obj:e,k:eE(r[i])}},rE=(e,t,n)=>{let{obj:r,k:i}=nE(e,t,Object);if(r!==void 0||t.length===1){r[i]=n;return}let a=t[t.length-1],o=t.slice(0,t.length-1),s=nE(e,o,Object);for(;s.obj===void 0&&o.length;)a=`${o[o.length-1]}.${a}`,o=o.slice(0,o.length-1),s=nE(e,o,Object),s?.obj&&s.obj[`${s.k}.${a}`]!==void 0&&(s.obj=void 0);s.obj[`${s.k}.${a}`]=n},iE=(e,t,n,r)=>{let{obj:i,k:a}=nE(e,t,Object);i[a]=i[a]||[],i[a].push(n)},aE=(e,t)=>{let{obj:n,k:r}=nE(e,t);if(n&&Object.prototype.hasOwnProperty.call(n,r))return n[r]},oE=(e,t,n)=>{let r=aE(e,n);return r===void 0?aE(t,n):r},sE=(e,t,n)=>{for(let r in t)r!==`__proto__`&&r!==`constructor`&&(Object.prototype.hasOwnProperty.call(e,r)?Y(e[r])||e[r]instanceof String||Y(t[r])||t[r]instanceof String?n&&(e[r]=t[r]):sE(e[r],t[r],n):e[r]=t[r]);return e},X=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,`\\$&`),cE={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`,"/":`&#x2F;`},lE=e=>Y(e)?e.replace(/[&<>"'\/]/g,e=>cE[e]):e,uE=class{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){let t=this.regExpMap.get(e);if(t!==void 0)return t;let n=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,n),this.regExpQueue.push(e),n}},dE=[` `,`,`,`?`,`!`,`;`],fE=new uE(20),pE=(e,t,n)=>{t||=``,n||=``;let r=dE.filter(e=>!t.includes(e)&&!n.includes(e));if(r.length===0)return!0;let i=fE.getRegExp(`(${r.map(e=>e===`?`?`\\?`:e).join(`|`)})`),a=!i.test(e);if(!a){let t=e.indexOf(n);t>0&&!i.test(e.substring(0,t))&&(a=!0)}return a},mE=(e,t,n=`.`)=>{if(!e)return;if(e[t])return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0;let r=t.split(n),i=e;for(let e=0;e<r.length;){if(!i||typeof i!=`object`)return;let t,a=``;for(let o=e;o<r.length;++o)if(o!==e&&(a+=n),a+=r[o],t=i[a],t!==void 0){if([`string`,`number`,`boolean`].includes(typeof t)&&o<r.length-1)continue;e+=o-e+1;break}i=t}return i},hE=e=>e?.replace(/_/g,`-`),gE={type:`logger`,log(e){this.output(`log`,e)},warn(e){this.output(`warn`,e)},error(e){this.output(`error`,e)},output(e,t){console?.[e]?.apply?.(console,t)}},_E=class e{constructor(e,t={}){this.init(e,t)}init(e,t={}){this.prefix=t.prefix||`i18next:`,this.logger=e||gE,this.options=t,this.debug=t.debug}log(...e){return this.forward(e,`log`,``,!0)}warn(...e){return this.forward(e,`warn`,``,!0)}error(...e){return this.forward(e,`error`,``)}deprecate(...e){return this.forward(e,`warn`,`WARNING DEPRECATED: `,!0)}forward(e,t,n,r){return r&&!this.debug?null:(e=e.map(e=>Y(e)?e.replace(/[\r\n\x00-\x1F\x7F]/g,` `):e),Y(e[0])&&(e[0]=`${n}${this.prefix} ${e[0]}`),this.logger[t](e))}create(t){return new e(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t||=this.options,t.prefix=t.prefix||this.prefix,new e(this.logger,t)}},Z=new _E,vE=class{constructor(){this.observers={}}on(e,t){return e.split(` `).forEach(e=>{this.observers[e]||(this.observers[e]=new Map);let n=this.observers[e].get(t)||0;this.observers[e].set(t,n+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}once(e,t){let n=(...r)=>{t(...r),this.off(e,n)};return this.on(e,n),this}emit(e,...t){this.observers[e]&&Array.from(this.observers[e].entries()).forEach(([e,n])=>{for(let r=0;r<n;r++)e(...t)}),this.observers[`*`]&&Array.from(this.observers[`*`].entries()).forEach(([n,r])=>{for(let i=0;i<r;i++)n(e,...t)})}},yE=new WeakSet,bE=class extends vE{constructor(e,t={ns:[`translation`],defaultNS:`translation`}){super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator=`.`),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.includes(e)||this.options.ns.push(e)}removeNamespaces(e){let t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,n,r={}){let i=r.keySeparator===void 0?this.options.keySeparator:r.keySeparator,a=r.ignoreJSONStructure===void 0?this.options.ignoreJSONStructure:r.ignoreJSONStructure,o;e.includes(`.`)?o=e.split(`.`):(o=[e,t],n&&(Array.isArray(n)?o.push(...n):Y(n)&&i?o.push(...n.split(i)):o.push(n)));let s=aE(this.data,o);return!s&&!t&&!n&&e.includes(`.`)&&(e=o[0],t=o[1],n=o.slice(2).join(`.`)),s||!a||!Y(n)?s:mE(this.data?.[e]?.[t],n,i)}addResource(e,t,n,r,i={silent:!1}){let a=i.keySeparator===void 0?this.options.keySeparator:i.keySeparator,o=[e,t];n&&(o=o.concat(a?n.split(a):n)),e.includes(`.`)&&(o=e.split(`.`),r=t,t=o[1]),this.addNamespaces(t),rE(this.data,o,r),i.silent||this.emit(`added`,e,t,n,r)}addResources(e,t,n,r={silent:!1}){for(let r in n)(Y(n[r])||Array.isArray(n[r]))&&this.addResource(e,t,r,n[r],{silent:!0});r.silent||this.emit(`added`,e,t,n)}addResourceBundle(e,t,n,r,i,a={silent:!1,skipCopy:!1}){let o=[e,t];e.includes(`.`)&&(o=e.split(`.`),r=n,n=t,t=o[1]),this.addNamespaces(t);let s=aE(this.data,o)||{};a.skipCopy||(n=JSON.parse(JSON.stringify(n))),r?sE(s,n,i):s={...s,...n},rE(this.data,o,s),a.silent||this.emit(`added`,e,t,n)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit(`removed`,e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||=this.options.defaultNS,this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){let t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(e=>{let n=t[e];return yE.has(n)?!0:!n||Object.keys(n).length===0?!1:(typeof n==`object`&&yE.add(n),!0)})}toJSON(){return this.data}},xE={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,i){return e.forEach(e=>{t=this.processors[e]?.process(t,n,r,i)??t}),t}},SE=Symbol(`i18next/PATH_KEY`),CE=e=>!Y(e)&&typeof e!=`boolean`&&typeof e!=`number`,wE=class e extends vE{constructor(e,t={}){super(),QT([`resourceStore`,`languageUtils`,`pluralResolver`,`interpolator`,`backendConnector`,`i18nFormat`,`utils`],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator=`.`),this.logger=Z.create(`translator`),this.checkedLoadedFor={}}changeLanguage(e){e&&(this.language=e)}exists(e,t={interpolation:{}}){let n={...t};if(e==null)return!1;let r=this.resolve(e,n);if(r?.res===void 0)return!1;let i=CE(r.res);return!(n.returnObjects===!1&&i)}extractFromKey(e,t){let n=t.nsSeparator===void 0?this.options.nsSeparator:t.nsSeparator;n===void 0&&(n=`:`);let r=t.keySeparator===void 0?this.options.keySeparator:t.keySeparator,i=t.ns||this.options.defaultNS||[],a=n&&e.includes(n),o=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!pE(e,n,r);if(a&&!o){let t=e.match(this.interpolator.nestingRegexp);if(t&&t.length>0)return{key:e,namespaces:Y(i)?[i]:i};let a=e.split(n);(n!==r||n===r&&this.options.ns.includes(a[0]))&&(i=a.shift()),e=a.join(r)}return{key:e,namespaces:Y(i)?[i]:i}}translate(t,n,r){let i=typeof n==`object`?{...n}:n;if(typeof i!=`object`&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),typeof i==`object`&&(i={...i}),i||={},t==null)return``;typeof t==`function`&&(t=YT(t,{...this.options,...i})),Array.isArray(t)||(t=[String(t)]),t=t.map(e=>typeof e==`function`?YT(e,{...this.options,...i}):String(e));let a=i.returnDetails===void 0?this.options.returnDetails:i.returnDetails,o=i.keySeparator===void 0?this.options.keySeparator:i.keySeparator,{key:s,namespaces:c}=this.extractFromKey(t[t.length-1],i),l=c[c.length-1],u=i.nsSeparator===void 0?this.options.nsSeparator:i.nsSeparator;u===void 0&&(u=`:`);let d=i.lng||this.language,f=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(d?.toLowerCase()===`cimode`)return f?a?{res:`${l}${u}${s}`,usedKey:s,exactUsedKey:s,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:`${l}${u}${s}`:a?{res:s,usedKey:s,exactUsedKey:s,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:s;let p=this.resolve(t,i),m=p?.res,h=p?.usedKey||s,g=p?.exactUsedKey||s,_=[`[object Number]`,`[object Function]`,`[object RegExp]`],v=i.joinArrays===void 0?this.options.joinArrays:i.joinArrays,y=!this.i18nFormat||this.i18nFormat.handleAsObject,b=i.count!==void 0&&!Y(i.count),x=e.hasDefaultValue(i),S=b?this.pluralResolver.getSuffix(d,i.count,i):``,C=i.ordinal&&b?this.pluralResolver.getSuffix(d,i.count,{ordinal:!1}):``,w=b&&!i.ordinal&&i.count===0,T=w&&i[`defaultValue${this.options.pluralSeparator}zero`]||i[`defaultValue${S}`]||i[`defaultValue${C}`]||i.defaultValue,E=m;y&&!m&&x&&(E=T);let D=CE(E),ee=Object.prototype.toString.apply(E);if(y&&E&&D&&!_.includes(ee)&&!(Y(v)&&Array.isArray(E))){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn(`accessing an object - but returnObjects options is not enabled!`);let e=this.options.returnedObjectHandler?this.options.returnedObjectHandler(h,E,{...i,ns:c}):`key '${s} (${this.language})' returned an object instead of string.`;return a?(p.res=e,p.usedParams=this.getUsedParamsDetails(i),p):e}if(o){let e=Array.isArray(E),t=e?[]:{},n=e?g:h;for(let e in E)if(Object.prototype.hasOwnProperty.call(E,e)){let r=`${n}${o}${e}`;t[e]=x&&!m?this.translate(r,{...i,defaultValue:CE(T)?T[e]:void 0,joinArrays:!1,ns:c}):this.translate(r,{...i,joinArrays:!1,ns:c}),t[e]===r&&(t[e]=E[e])}m=t}}else if(y&&Y(v)&&Array.isArray(m))m=m.join(v),m&&=this.extendTranslation(m,t,i,r);else{let e=!1,n=!1;!this.isValidLookup(m)&&x&&(e=!0,m=T),this.isValidLookup(m)||(n=!0,m=s);let a=(i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&n?void 0:m,c=x&&T!==m&&this.options.updateMissing;if(n||e||c){if(this.logger.log(c?`updateKey`:`missingKey`,d,l,b&&!c?`${s}${this.pluralResolver.getSuffix(d,i.count,i)}`:s,c?T:m),o){let e=this.resolve(s,{...i,keySeparator:!1});e&&e.res&&this.logger.warn(`Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.`)}let e=[],t=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo===`fallback`&&t&&t[0])for(let n=0;n<t.length;n++)e.push(t[n]);else this.options.saveMissingTo===`all`?e=this.languageUtils.toResolveHierarchy(i.lng||this.language):e.push(i.lng||this.language);let n=(e,t,n)=>{let r=x&&n!==m?n:a;this.options.missingKeyHandler?this.options.missingKeyHandler(e,l,t,r,c,i):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(e,l,t,r,c,i),this.emit(`missingKey`,e,l,t,m)};this.options.saveMissing&&(this.options.saveMissingPlurals&&b?e.forEach(e=>{let t=this.pluralResolver.getSuffixes(e,i);w&&i[`defaultValue${this.options.pluralSeparator}zero`]&&!t.includes(`${this.options.pluralSeparator}zero`)&&t.push(`${this.options.pluralSeparator}zero`),t.forEach(t=>{n([e],s+t,i[`defaultValue${t}`]||T)})}):n(e,s,T))}m=this.extendTranslation(m,t,i,p,r),n&&m===s&&this.options.appendNamespaceToMissingKey&&(m=`${l}${u}${s}`),(n||e)&&this.options.parseMissingKeyHandler&&(m=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}${u}${s}`:s,e?m:void 0,i))}return a?(p.res=m,p.usedParams=this.getUsedParamsDetails(i),p):m}extendTranslation(e,t,n,r,i){if(this.i18nFormat?.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});let a=Y(e)&&(n?.interpolation?.skipOnVariables===void 0?this.options.interpolation.skipOnVariables:n.interpolation.skipOnVariables),o;if(a){let t=e.match(this.interpolator.nestingRegexp);o=t&&t.length}let s=n.replace&&!Y(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),e=this.interpolator.interpolate(e,s,n.lng||this.language||r.usedLng,n),a){let t=e.match(this.interpolator.nestingRegexp),r=t&&t.length;o<r&&(n.nest=!1)}!n.lng&&r&&r.res&&(n.lng=this.language||r.usedLng),n.nest!==!1&&(e=this.interpolator.nest(e,(...e)=>i?.[0]===e[0]&&!n.context?(this.logger.warn(`It seems you are nesting recursively key: ${e[0]} in key: ${t[0]}`),null):this.translate(...e,t),n)),n.interpolation&&this.interpolator.reset()}let a=n.postProcess||this.options.postProcess,o=Y(a)?[a]:a;return e!=null&&o?.length&&n.applyPostProcessor!==!1&&(e=xE.handle(o,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),e}resolve(e,t={}){let n,r,i,a,o;return Y(e)&&(e=[e]),Array.isArray(e)&&(e=e.map(e=>typeof e==`function`?YT(e,{...this.options,...t}):e)),e.forEach(e=>{if(this.isValidLookup(n))return;let s=this.extractFromKey(e,t),c=s.key;r=c;let l=s.namespaces;this.options.fallbackNS&&(l=l.concat(this.options.fallbackNS));let u=t.count!==void 0&&!Y(t.count),d=u&&!t.ordinal&&t.count===0,f=t.context!==void 0&&(Y(t.context)||typeof t.context==`number`)&&t.context!==``,p=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);l.forEach(e=>{this.isValidLookup(n)||(o=e,!this.checkedLoadedFor[`${p[0]}-${e}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(o)&&(this.checkedLoadedFor[`${p[0]}-${e}`]=!0,this.logger.warn(`key "${r}" for languages "${p.join(`, `)}" won't get resolved as namespace "${o}" was not yet loaded`,`This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`)),p.forEach(r=>{if(this.isValidLookup(n))return;a=r;let o=[c];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(o,c,r,e,t);else{let e;u&&(e=this.pluralResolver.getSuffix(r,t.count,t));let n=`${this.options.pluralSeparator}zero`,i=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(u&&(t.ordinal&&e.startsWith(i)&&o.push(c+e.replace(i,this.options.pluralSeparator)),o.push(c+e),d&&o.push(c+n)),f){let r=`${c}${this.options.contextSeparator||`_`}${t.context}`;o.push(r),u&&(t.ordinal&&e.startsWith(i)&&o.push(r+e.replace(i,this.options.pluralSeparator)),o.push(r+e),d&&o.push(r+n))}}let s;for(;s=o.pop();)this.isValidLookup(n)||(i=s,n=this.getResource(r,e,s,t))}))})}),{res:n,usedKey:r,exactUsedKey:i,usedLng:a,usedNS:o}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e===``)}getResource(e,t,n,r={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(e,t,n,r):this.resourceStore.getResource(e,t,n,r)}getUsedParamsDetails(e={}){let t=[`defaultValue`,`ordinal`,`context`,`replace`,`lng`,`lngs`,`fallbackLng`,`ns`,`keySeparator`,`nsSeparator`,`returnObjects`,`returnDetails`,`joinArrays`,`postProcess`,`interpolation`],n=e.replace&&!Y(e.replace),r=n?e.replace:e;if(n&&e.count!==void 0&&(r={...r,count:e.count}),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!n){r={...r};for(let e of t)delete r[e]}return r}static hasDefaultValue(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&t.startsWith(`defaultValue`)&&e[t]!==void 0)return!0;return!1}},TE=class{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Z.create(`languageUtils`),this.resolveHierarchyCache={}}clearCache(){this.resolveHierarchyCache={}}getScriptPartFromCode(e){if(e=hE(e),!e||!e.includes(`-`))return null;let t=e.split(`-`);return t.length===2||(t.pop(),t[t.length-1].toLowerCase()===`x`)?null:this.formatLanguageCode(t.join(`-`))}getLanguagePartFromCode(e){if(e=hE(e),!e||!e.includes(`-`))return e;let t=e.split(`-`);return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(Y(e)&&e.includes(`-`)){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load===`languageOnly`||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.includes(e)}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(e=>{if(t)return;let n=this.formatLanguageCode(e);(!this.options.supportedLngs||this.isSupportedCode(n))&&(t=n)}),!t&&this.options.supportedLngs&&e.forEach(e=>{if(t)return;let n=this.getScriptPartFromCode(e);if(this.isSupportedCode(n))return t=n;let r=this.getLanguagePartFromCode(e);if(this.isSupportedCode(r))return t=r;t=this.options.supportedLngs.find(e=>e===r?!0:!e.includes(`-`)&&!r.includes(`-`)?!1:!!(e.includes(`-`)&&!r.includes(`-`)&&e.slice(0,e.indexOf(`-`))===r||e.startsWith(r)&&r.length>1))}),t||=this.getFallbackCodes(this.options.fallbackLng)[0],t}getFallbackCodes(e,t){if(!e)return[];if(typeof e==`function`&&(e=e(t)),Y(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let n=e[t];return n||=e[this.getScriptPartFromCode(t)],n||=e[this.formatLanguageCode(t)],n||=e[this.getLanguagePartFromCode(t)],n||=e.default,n||[]}toResolveHierarchy(e,t){let n=this.options.fallbackLng,r=Array.isArray(n)?n.join(`|`):n;r!==this._cachedFallbackLng&&(this.resolveHierarchyCache={},this._cachedFallbackLng=r);let i=t===void 0||t===!1||Y(t),a=t===void 0&&typeof this.options.fallbackLng==`function`,o=Y(e)&&i&&!a,s=null;if(o){let n;n=t===void 0?`undefined`:t===!1?`boolean:false`:`string:${t}`,s=`${e.length}:${e}|${n}`}if(s!==null){let e=this.resolveHierarchyCache[s];if(e!==void 0)return e.slice()}let c=this.getFallbackCodes((t===!1?[]:t)||this.options.fallbackLng||[],e),l=[],u=e=>{e&&(this.isSupportedCode(e)?l.push(e):this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))};return Y(e)&&(e.includes(`-`)||e.includes(`_`))?(this.options.load!==`languageOnly`&&u(this.formatLanguageCode(e)),this.options.load!==`languageOnly`&&this.options.load!==`currentOnly`&&u(this.getScriptPartFromCode(e)),this.options.load!==`currentOnly`&&u(this.getLanguagePartFromCode(e))):Y(e)&&u(this.formatLanguageCode(e)),c.forEach(e=>{let t=this.formatLanguageCode(e);l.includes(t)||u(t)}),s===null?l:(this.resolveHierarchyCache[s]=l,l.slice())}},EE={zero:0,one:1,two:2,few:3,many:4,other:5},DE={select:e=>e===1?`one`:`other`,resolvedOptions:()=>({pluralCategories:[`one`,`other`]})},OE=class{constructor(e,t={}){this.languageUtils=e,this.options=t,this.logger=Z.create(`pluralResolver`),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(e,t={}){let n=hE(e===`dev`?`en`:e),r=t.ordinal?`ordinal`:`cardinal`,i=JSON.stringify({cleanedCode:n,type:r});if(i in this.pluralRulesCache)return this.pluralRulesCache[i];let a;try{a=new Intl.PluralRules(n,{type:r})}catch{if(typeof Intl>`u`)return this.logger.error(`No Intl support, please use an Intl polyfill!`),DE;if(!e.match(/-|_/))return DE;let n=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(n,t)}return this.pluralRulesCache[i]=a,a}needsPlural(e,t={}){let n=this.getRule(e,t);return n||=this.getRule(`dev`,t),n?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(e,t,n={}){return this.getSuffixes(e,n).map(e=>`${t}${e}`)}getSuffixes(e,t={}){let n=this.getRule(e,t);return n||=this.getRule(`dev`,t),n?n.resolvedOptions().pluralCategories.sort((e,t)=>EE[e]-EE[t]).map(e=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:``}${e}`):[]}getSuffix(e,t,n={}){let r=this.getRule(e,n);return r?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:``}${r.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix(`dev`,t,n))}},kE=(e,t,n,r=`.`,i=!0)=>{let a=oE(e,t,n);return!a&&i&&Y(n)&&(a=mE(e,n,r),a===void 0&&(a=mE(t,n,r))),a},AE=e=>e.replace(/\$/g,`$$$$`),jE=class{constructor(e={}){this.logger=Z.create(`interpolator`),this.options=e,this.format=e?.interpolation?.format||(e=>e),this.init(e)}init(e={}){e.interpolation||={escapeValue:!0};let{escape:t,escapeValue:n,useRawValueToEscape:r,prefix:i,prefixEscaped:a,suffix:o,suffixEscaped:s,formatSeparator:c,unescapeSuffix:l,unescapePrefix:u,nestingPrefix:d,nestingPrefixEscaped:f,nestingSuffix:p,nestingSuffixEscaped:m,nestingOptionsSeparator:h,maxReplaces:g,alwaysFormat:_}=e.interpolation;this.escape=t===void 0?lE:t,this.escapeValue=n===void 0||n,this.useRawValueToEscape=r!==void 0&&r,this.prefix=i?X(i):a||`{{`,this.suffix=o?X(o):s||`}}`,this.formatSeparator=c||`,`,this.unescapePrefix=l?``:u?X(u):`-`,this.unescapeSuffix=this.unescapePrefix?``:l?X(l):``,this.nestingPrefix=d?X(d):f||X(`$t(`),this.nestingSuffix=p?X(p):m||X(`)`),this.nestingOptionsSeparator=h||`,`,this.maxReplaces=g||1e3,this.alwaysFormat=_!==void 0&&_,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){let e=(e,t)=>e?.source===t?(e.lastIndex=0,e):new RegExp(t,`g`);this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']|"[^"]*"|'[^']*'|\\((?:[^()"']|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,t,n,r){let i,a,o,s=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=e=>{if(!e.includes(this.formatSeparator)){let i=kE(t,s,e,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(i,void 0,n,{...r,...t,interpolationkey:e}):i}let i=e.split(this.formatSeparator),a=i.shift().trim(),o=i.join(this.formatSeparator).trim();return this.format(kE(t,s,a,this.options.keySeparator,this.options.ignoreJSONStructure),o,n,{...r,...t,interpolationkey:a})};this.resetRegExp(),!this.escapeValue&&typeof e==`string`&&/\$t\([^)]*\{[^}]*\{\{/.test(e)&&this.logger.warn(`nesting options string contains interpolated variables with escapeValue: false — if any of those values are attacker-controlled they can inject additional nesting options (e.g. redirect lng/ns). Sanitise untrusted input before passing it to t(), or keep escapeValue: true.`);let l=r?.missingInterpolationHandler||this.options.missingInterpolationHandler,u=r?.interpolation?.skipOnVariables===void 0?this.options.interpolation.skipOnVariables:r.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:e=>e},{regex:this.regexp,safeValue:e=>this.escapeValue?this.escape(e):e}].forEach(t=>{for(o=0;i=t.regex.exec(e);){let n=i[1].trim();if(a=c(n),a===void 0){if(typeof l==`function`){let t=l(e,i,r);a=Y(t)?t:``}else if(r&&Object.prototype.hasOwnProperty.call(r,n))a=``;else if(u){a=i[0];continue}else this.logger.warn(`missed to pass in variable ${n} for interpolating ${e}`),a=``}else!Y(a)&&!this.useRawValueToEscape&&(a=ZT(a));let s=t.safeValue(a);if(e=e.replace(i[0],AE(s)),u?(t.regex.lastIndex+=s.length,t.regex.lastIndex-=i[0].length):t.regex.lastIndex=0,o++,o>=this.maxReplaces)break}}),e}nest(e,t,n={}){let r,i,a,o=(e,t)=>{let n=this.nestingOptionsSeparator;if(!e.includes(n))return e;let r=e.split(RegExp(`${X(n)}[ ]*{`)),i=`{${r[1]}`;e=r[0],i=this.interpolate(i,a);let o=i.match(/'/g),s=i.match(/"/g);((o?.length??0)%2==0&&!s||(s?.length??0)%2!=0)&&(i=i.replace(/'/g,`"`));try{a=JSON.parse(i),t&&(a={...t,...a})}catch(t){return this.logger.warn(`failed parsing options string in nesting for key ${e}`,t),`${e}${n}${i}`}return a.defaultValue&&a.defaultValue.includes(this.prefix)&&delete a.defaultValue,e},s=new RegExp(this.nestingRegexp),c=``,l=0;for(;r=s.exec(e);){let u=[];a={...n},a=a.replace&&!Y(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let d=/{.*}/s.test(r[1])?r[1].lastIndexOf(`}`)+1:r[1].indexOf(this.formatSeparator);if(d!==-1&&(u=r[1].slice(d).split(this.formatSeparator).map(e=>e.trim()).filter(Boolean),r[1]=r[1].slice(0,d)),i=t(o.call(this,r[1].trim(),a),a),i&&r[0]===e&&!Y(i))return i;Y(i)||(i=ZT(i)),i||=(this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`),``),u.length&&(i=u.reduce((e,t)=>this.format(e,t,n.lng,{...n,interpolationkey:r[1].trim()}),i.trim())),c+=e.slice(l,r.index)+ZT(i),l=s.lastIndex,this.regexp.lastIndex=0}return l?c+e.slice(l):e}},ME=e=>{let t=e.toLowerCase().trim(),n={};if(e.includes(`(`)){let r=e.split(`(`);t=r[0].toLowerCase().trim();let i=r[1].slice(0,-1);t===`currency`&&!i.includes(`:`)?n.currency||=i.trim():t===`relativetime`&&!i.includes(`:`)?n.range||=i.trim():i.split(`;`).forEach(e=>{if(e){let[t,...r]=e.split(`:`),i=r.join(`:`).trim().replace(/^'+|'+$/g,``),a=t.trim();n[a]||(n[a]=i),i===`false`&&(n[a]=!1),i===`true`&&(n[a]=!0),isNaN(i)||(n[a]=parseInt(i,10))}})}return{formatName:t,formatOptions:n}},NE=e=>{let t={};return(n,r,i)=>{let a=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(a={...a,[i.interpolationkey]:void 0});let o=r+JSON.stringify(a),s=t[o];return s||(s=e(hE(r),i),t[o]=s),s(n)}},PE=e=>(t,n,r)=>e(hE(n),r)(t),FE=class{constructor(e={}){this.logger=Z.create(`formatter`),this.options=e,this.init(e)}init(e,t={interpolation:{}}){this.formatSeparator=t.interpolation.formatSeparator||`,`;let n=t.cacheInBuiltFormats?NE:PE;this.formats={number:n((e,t)=>{let n=new Intl.NumberFormat(e,{...t});return e=>n.format(e)}),currency:n((e,t)=>{let n=new Intl.NumberFormat(e,{...t,style:`currency`});return e=>n.format(e)}),datetime:n((e,t)=>{let n=new Intl.DateTimeFormat(e,{...t});return e=>n.format(e)}),relativetime:n((e,t)=>{let n=new Intl.RelativeTimeFormat(e,{...t});return e=>n.format(e,t.range||`day`)}),list:n((e,t)=>{let n=new Intl.ListFormat(e,{...t});return e=>n.format(e)})}}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=NE(t)}format(e,t,n,r={}){if(!t||e==null)return e;let i=t.split(this.formatSeparator),a=[];for(let e=0;e<i.length;e++){let t=i[e];for(;t.indexOf(`(`)>-1&&!t.includes(`)`)&&e+1<i.length;)t=`${t}${this.formatSeparator}${i[++e]}`;a.push(t)}return a.reduce((e,t)=>{let{formatName:i,formatOptions:a}=ME(t);if(this.formats[i]){let t=e;try{let o=r?.formatParams?.[r.interpolationkey]||{},s=o.locale||o.lng||r.locale||r.lng||n;t=this.formats[i](e,s,{...a,...r,...o})}catch(e){this.logger.warn(e)}return t}return this.logger.warn(`there was no format function for ${i}`),e},e)}},IE=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)},LE=class extends vE{constructor(e,t,n,r={}){super(),this.backend=e,this.store=t,this.services=n,this.languageUtils=n.languageUtils,this.options=r,this.logger=Z.create(`backendConnector`),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(n,r.backend,r)}queueLoad(e,t,n,r){let i={},a={},o={},s={};return e.forEach(e=>{let r=!0;t.forEach(t=>{let o=`${e}|${t}`;!n.reload&&this.store.hasResourceBundle(e,t)?this.state[o]=2:this.state[o]<0||(this.state[o]===1?a[o]===void 0&&(a[o]=!0):(this.state[o]=1,r=!1,a[o]===void 0&&(a[o]=!0),i[o]===void 0&&(i[o]=!0),s[t]===void 0&&(s[t]=!0)))}),r||(o[e]=!0)}),(Object.keys(i).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(i),pending:Object.keys(a),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(s)}}loaded(e,t,n){let r=e.split(`|`),i=r[0],a=r[1];t&&this.emit(`failedLoading`,i,a,t),!t&&n&&this.store.addResourceBundle(i,a,n,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&n&&(this.state[e]=0);let o={};this.queue.forEach(n=>{iE(n.loaded,[i],a),IE(n,e),t&&n.errors.push(t),n.pendingCount===0&&!n.done&&(Object.keys(n.loaded).forEach(e=>{o[e]||(o[e]={});let t=n.loaded[e];t.length&&t.forEach(t=>{o[e][t]===void 0&&(o[e][t]=!0)})}),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())}),this.emit(`loaded`,o),this.queue=this.queue.filter(e=>!e.done)}read(e,t,n,r=0,i=this.retryTimeout,a){if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:n,tried:r,wait:i,callback:a});return}this.readingCalls++;let o=(o,s)=>{if(this.readingCalls--,this.waitingReads.length>0){let e=this.waitingReads.shift();this.read(e.lng,e.ns,e.fcName,e.tried,e.wait,e.callback)}if(o&&s&&r<this.maxRetries){setTimeout(()=>{this.read(e,t,n,r+1,i*2,a)},i);return}a(o,s)},s=this.backend[n].bind(this.backend);if(s.length===2){try{let n=s(e,t);n&&typeof n.then==`function`?n.then(e=>o(null,e)).catch(o):o(null,n)}catch(e){o(e)}return}return s(e,t,o)}prepareLoading(e,t,n={},r){if(!this.backend)return this.logger.warn(`No backend was added via i18next.use. Will not load resources.`),r&&r();Y(e)&&(e=this.languageUtils.toResolveHierarchy(e)),Y(t)&&(t=[t]);let i=this.queueLoad(e,t,n,r);if(!i.toLoad.length)return i.pending.length||r(),null;i.toLoad.forEach(e=>{this.loadOne(e)})}load(e,t,n){this.prepareLoading(e,t,{},n)}reload(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}loadOne(e,t=``){let n=e.split(`|`),r=n[0],i=n[1];this.read(r,i,`read`,void 0,void 0,(n,a)=>{n&&this.logger.warn(`${t}loading namespace ${i} for language ${r} failed`,n),!n&&a&&this.logger.log(`${t}loaded namespace ${i} for language ${r}`,a),this.loaded(e,n,a)})}saveMissing(e,t,n,r,i,a={},o=()=>{}){if(this.services?.utils?.hasLoadedNamespace&&!this.services?.utils?.hasLoadedNamespace(t)){this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`,`This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`);return}if(n!=null&&n!==``){if(this.backend?.create){let s={...a,isUpdate:i},c=this.backend.create.bind(this.backend);if(c.length<6)try{let i;i=c.length===5?c(e,t,n,r,s):c(e,t,n,r),i&&typeof i.then==`function`?i.then(e=>o(null,e)).catch(o):o(null,i)}catch(e){o(e)}else c(e,t,n,r,o,s)}e&&e[0]&&this.store.addResource(e[0],t,n,r)}}},RE=()=>({debug:!1,initAsync:!0,ns:[`translation`],defaultNS:[`translation`],fallbackLng:[`dev`],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:`all`,preload:!1,keySeparator:`.`,nsSeparator:`:`,pluralSeparator:`_`,contextSeparator:`_`,enableSelector:!1,partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:`fallback`,saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]==`object`&&(t=e[1]),Y(e[1])&&(t.defaultValue=e[1]),Y(e[2])&&(t.tDescription=e[2]),typeof e[2]==`object`||typeof e[3]==`object`){let n=e[3]||e[2];Object.keys(n).forEach(e=>{t[e]=n[e]})}return t},interpolation:{escapeValue:!0,prefix:`{{`,suffix:`}}`,formatSeparator:`,`,unescapePrefix:`-`,nestingPrefix:`$t(`,nestingSuffix:`)`,nestingOptionsSeparator:`,`,maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),zE=e=>(Y(e.ns)&&(e.ns=[e.ns]),Y(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),Y(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&!e.supportedLngs.includes(`cimode`)&&(e.supportedLngs=e.supportedLngs.concat([`cimode`])),e),BE=()=>{},VE=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(t=>{typeof e[t]==`function`&&(e[t]=e[t].bind(e))})},HE=class e extends vE{constructor(e={},t){if(super(),this.options=zE(e),this.services={},this.logger=Z,this.modules={external:[]},VE(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(e={},t){this.isInitializing=!0,typeof e==`function`&&(t=e,e={}),e.defaultNS==null&&e.ns&&(Y(e.ns)?e.defaultNS=e.ns:e.ns.includes(`translation`)||(e.defaultNS=e.ns[0]));let n=RE();this.options={...n,...this.options,...zE(e)},this.options.interpolation={...n.interpolation,...this.options.interpolation},e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator),typeof this.options.overloadTranslationOptionHandler!=`function`&&(this.options.overloadTranslationOptionHandler=n.overloadTranslationOptionHandler);let r=e=>e?typeof e==`function`?new e:e:null;if(!this.options.isClone){this.modules.logger?Z.init(r(this.modules.logger),this.options):Z.init(null,this.options);let e;e=this.modules.formatter?this.modules.formatter:FE;let t=new TE(this.options);this.store=new bE(this.options.resources,this.options);let n=this.services;n.logger=Z,n.resourceStore=this.store,n.languageUtils=t,n.pluralResolver=new OE(t,{prepend:this.options.pluralSeparator}),e&&(n.formatter=r(e),n.formatter.init&&n.formatter.init(n,this.options),this.options.interpolation.format=n.formatter.format.bind(n.formatter)),n.interpolator=new jE(this.options),n.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},n.backendConnector=new LE(r(this.modules.backend),n.resourceStore,n,this.options),n.backendConnector.on(`*`,(e,...t)=>{this.emit(e,...t)}),this.modules.languageDetector&&(n.languageDetector=r(this.modules.languageDetector),n.languageDetector.init&&n.languageDetector.init(n,this.options.detection,this.options)),this.modules.i18nFormat&&(n.i18nFormat=r(this.modules.i18nFormat),n.i18nFormat.init&&n.i18nFormat.init(this)),this.translator=new wE(this.services,this.options),this.translator.on(`*`,(e,...t)=>{this.emit(e,...t)}),this.modules.external.forEach(e=>{e.init&&e.init(this)})}if(this.format=this.options.interpolation.format,t||=BE,this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){let e=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);e.length>0&&e[0]!==`dev`&&(this.options.lng=e[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn(`init: no languageDetector is used and no lng is defined`),[`getResource`,`hasResourceBundle`,`getResourceBundle`,`getDataByLanguage`].forEach(e=>{this[e]=(...t)=>this.store[e](...t)}),[`addResource`,`addResources`,`addResourceBundle`,`removeResourceBundle`].forEach(e=>{this[e]=(...t)=>(this.store[e](...t),this)});let i=XT(),a=()=>{let e=(e,n)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn(`init: i18next is already initialized. You should call init just once!`),this.isInitialized=!0,this.options.isClone||this.logger.log(`initialized`,this.options),this.emit(`initialized`,this.options),i.resolve(n),t(e,n)};if((this.languages||this.isLanguageChangingTo)&&!this.isInitialized)return e(null,this.t.bind(this));this.changeLanguage(this.options.lng,e)};return this.options.resources||!this.options.initAsync?a():setTimeout(a,0),i}loadResources(e,t=BE){let n=t,r=Y(e)?e:this.language;if(typeof e==`function`&&(n=e),!this.options.resources||this.options.partialBundledLanguages){if(r?.toLowerCase()===`cimode`&&(!this.options.preload||this.options.preload.length===0))return n();let e=[],t=t=>{t&&t!==`cimode`&&this.services.languageUtils.toResolveHierarchy(t).forEach(t=>{t!==`cimode`&&(e.includes(t)||e.push(t))})};r?t(r):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(e=>t(e)),this.options.preload?.forEach?.(e=>t(e)),this.services.backendConnector.load(e,this.options.ns,e=>{!e&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),n(e)})}else n(null)}reloadResources(e,t,n){let r=XT();return typeof e==`function`&&(n=e,e=void 0),typeof t==`function`&&(n=t,t=void 0),e||=this.languages,t||=this.options.ns,n||=BE,this.services.backendConnector.reload(e,t,e=>{r.resolve(),n(e)}),r}use(e){if(!e)throw Error(`You are passing an undefined module! Please check the object you are passing to i18next.use()`);if(!e.type)throw Error(`You are passing a wrong module! Please check the object you are passing to i18next.use()`);return e.type===`backend`&&(this.modules.backend=e),(e.type===`logger`||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type===`languageDetector`&&(this.modules.languageDetector=e),e.type===`i18nFormat`&&(this.modules.i18nFormat=e),e.type===`postProcessor`&&xE.addPostProcessor(e),e.type===`formatter`&&(this.modules.formatter=e),e.type===`3rdParty`&&this.modules.external.push(e),this}setResolvedLanguage(e){if(e&&this.languages&&![`cimode`,`dev`].includes(e)){for(let e=0;e<this.languages.length;e++){let t=this.languages[e];if(![`cimode`,`dev`].includes(t)&&this.store.hasLanguageSomeTranslations(t)){this.resolvedLanguage=t;break}}!this.resolvedLanguage&&!this.languages.includes(e)&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,t){this.isLanguageChangingTo=e;let n=XT();this.emit(`languageChanging`,e);let r=e=>{this.language=e,this.languages=this.services.languageUtils.toResolveHierarchy(e),this.resolvedLanguage=void 0,this.setResolvedLanguage(e)},i=(i,a)=>{a?this.isLanguageChangingTo===e&&(r(a),this.translator.changeLanguage(a),this.isLanguageChangingTo=void 0,this.emit(`languageChanged`,a),this.logger.log(`languageChanged`,a)):this.isLanguageChangingTo=void 0,n.resolve((...e)=>this.t(...e)),t&&t(i,(...e)=>this.t(...e))},a=t=>{!e&&!t&&this.services.languageDetector&&(t=[]);let n=Y(t)?t:t&&t[0],a=this.store.hasLanguageSomeTranslations(n)?n:this.services.languageUtils.getBestMatchFromCodes(Y(t)?[t]:t);a&&(this.language||r(a),this.translator.language||this.translator.changeLanguage(a),this.services.languageDetector?.cacheUserLanguage?.(a)),this.loadResources(a,e=>{i(e,a)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),n}getFixedT(e,t,n,r){let i=r?.scopeNs,a=(e,t,...r)=>{let o;o=typeof t==`object`?{...t}:this.options.overloadTranslationOptionHandler([e,t].concat(r)),o.lng=o.lng||a.lng,o.lngs=o.lngs||a.lngs;let s=o.ns!==void 0&&o.ns!==null;o.ns=o.ns||a.ns,o.keyPrefix!==``&&(o.keyPrefix=o.keyPrefix||n||a.keyPrefix);let c={...this.options,...o};Array.isArray(i)&&!s&&(c.ns=i),typeof o.keyPrefix==`function`&&(o.keyPrefix=YT(o.keyPrefix,c));let l=this.options.keySeparator||`.`,u;return o.keyPrefix&&Array.isArray(e)?u=e.map(e=>(typeof e==`function`&&(e=YT(e,c)),`${o.keyPrefix}${l}${e}`)):(typeof e==`function`&&(e=YT(e,c)),u=o.keyPrefix?`${o.keyPrefix}${l}${e}`:e),this.t(u,o)};return Y(e)?a.lng=e:a.lngs=e,a.ns=t,a.keyPrefix=n,a}t(...e){return this.translator?.translate(...e)}exists(...e){return this.translator?.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,t={}){if(!this.isInitialized)return this.logger.warn(`hasLoadedNamespace: i18next was not initialized`,this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn(`hasLoadedNamespace: i18n.languages were undefined or empty`,this.languages),!1;let n=t.lng||this.resolvedLanguage||this.languages[0],r=this.options?this.options.fallbackLng:!1,i=this.languages[this.languages.length-1];if(n.toLowerCase()===`cimode`)return!0;let a=(e,t)=>{let n=this.services.backendConnector.state[`${e}|${t}`];return n===-1||n===0||n===2};if(t.precheck){let e=t.precheck(this,a);if(e!==void 0)return e}if(this.hasResourceBundle(n,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages)return!0;let{languageUtils:o}=this.services,s=t.lng?o.isSupportedCode(n)&&o.toResolveHierarchy(n,!1)[0]:n;return!(s&&!a(s,e)||r&&!a(i,e))}loadNamespaces(e,t){let n=XT();return this.options.ns?(Y(e)&&(e=[e]),e.forEach(e=>{this.options.ns.includes(e)||this.options.ns.push(e)}),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}loadLanguages(e,t){let n=XT();Y(e)&&(e=[e]);let r=this.options.preload||[],i=e.filter(e=>!r.includes(e)&&this.services.languageUtils.isSupportedCode(e));return i.length?(this.options.preload=r.concat(i),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}dir(e){if(e||=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language),!e)return`rtl`;try{let t=new Intl.Locale(e);if(t&&t.getTextInfo){let e=t.getTextInfo();if(e&&e.direction)return e.direction}}catch{}let t=`ar.shu.sqr.ssh.xaa.yhd.yud.aao.abh.abv.acm.acq.acw.acx.acy.adf.ads.aeb.aec.afb.ajp.apc.apd.arb.arq.ars.ary.arz.auz.avl.ayh.ayl.ayn.ayp.bbz.pga.he.iw.ps.pbt.pbu.pst.prp.prd.ug.ur.ydd.yds.yih.ji.yi.hbo.men.xmn.fa.jpr.peo.pes.prs.dv.sam.ckb`.split(`.`),n=this.services?.languageUtils||new TE(RE());return e.toLowerCase().indexOf(`-latn`)>1?`ltr`:t.includes(n.getLanguagePartFromCode(e))||e.toLowerCase().indexOf(`-arab`)>1?`rtl`:`ltr`}static createInstance(t={},n){let r=new e(t,n);return r.createInstance=e.createInstance,r}cloneInstance(t={},n=BE){let r=t.forkResourceStore;r&&delete t.forkResourceStore;let i={...this.options,...t,isClone:!0},a=new e(i);if((t.debug!==void 0||t.prefix!==void 0)&&(a.logger=a.logger.clone(t)),[`store`,`services`,`language`].forEach(e=>{a[e]=this[e]}),a.services={...this.services},a.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},r){let e=Object.keys(this.store.data).reduce((e,t)=>(e[t]={...this.store.data[t]},e[t]=Object.keys(e[t]).reduce((n,r)=>(n[r]={...e[t][r]},n),e[t]),e),{});a.store=new bE(e,i),a.services.resourceStore=a.store}if(t.interpolation){let e={...RE().interpolation,...this.options.interpolation,...t.interpolation},n={...i,interpolation:e};a.services.interpolator=new jE(n)}return a.translator=new wE(a.services,i),a.translator.on(`*`,(e,...t)=>{a.emit(e,...t)}),a.init(i,n),a.translator.options=i,a.translator.backendConnector.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}},Q=HE.createInstance(),Q.createInstance,Q.dir,Q.init,Q.loadResources,Q.reloadResources,Q.use,Q.changeLanguage,Q.getFixedT,UE=Q.t,Q.exists,Q.setDefaultNamespace,Q.hasLoadedNamespace,Q.loadNamespaces,Q.loadLanguages})))()}var GE,KE;function qE(){return(qE=e((()=>{P(),U(),GE={},KE=H(class extends ln{constructor(){super(...arguments),this.ot=GE}render(e,t){return t()}update(e,[t,n]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((e,t)=>e===this.ot[t]))return M}else if(this.ot===t)return M;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,n)}})})))()}var JE,YE;function XE(){return(XE=e((()=>{JE=class{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}},YE=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}}})))()}var ZE,QE,$E,eD;function tD(){return(tD=e((()=>{P(),$e(),_n(),XE(),U(),ZE=e=>!Ue(e)&&typeof e.then==`function`,QE=1073741823,$E=class extends gn{constructor(){super(...arguments),this._$Cwt=QE,this._$Cbt=[],this._$CK=new JE(this),this._$CX=new YE}render(...e){return e.find(e=>!ZE(e))??M}update(e,t){let n=this._$Cbt,r=n.length;this._$Cbt=t;let i=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let o=t[e];if(!ZE(o))return this._$Cwt=e,o;e<r&&o===n[e]||(this._$Cwt=QE,r=0,Promise.resolve(o).then(async e=>{for(;a.get();)await a.get();let t=i.deref();if(t!==void 0){let n=t._$Cbt.indexOf(o);n>-1&&n<t._$Cwt&&(t._$Cwt=n,t.setValue(e))}}))}return M}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}},eD=H($E)})))()}function nD(){return(nD=e((()=>{_n()})))()}var rD,iD;function aD(){return(aD=e((()=>{P(),U(),$e(),rD=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},iD=H(class extends ln{constructor(e){if(super(e),e.type!==V.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){let i=Ze(e),{values:a,keys:o}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=o,a;let s=this.ut??=[],c=[],l,u,d=0,f=i.length-1,p=0,m=a.length-1;for(;d<=f&&p<=m;)if(i[d]===null)d++;else if(i[f]===null)f--;else if(s[d]===o[p])c[p]=Je(i[d],a[p]),d++,p++;else if(s[f]===o[m])c[m]=Je(i[f],a[m]),f--,m--;else if(s[d]===o[m])c[m]=Je(i[d],a[m]),qe(e,c[m+1],i[d]),d++,m--;else if(s[f]===o[p])c[p]=Je(i[f],a[p]),qe(e,i[d],i[f]),f--,p++;else if(l===void 0&&(l=rD(o,p,m),u=rD(s,d,f)),l.has(s[d])){if(l.has(s[f])){let t=u.get(o[p]),n=t===void 0?null:i[t];if(n===null){let t=qe(e,i[d]);Je(t,a[p]),c[p]=t}else c[p]=Je(n,a[p]),qe(e,i[d],n),i[t]=null;p++}else Qe(i[f]),f--}else Qe(i[d]),d++;for(;p<=m;){let t=qe(e,c[m+1]);Je(t,a[p]),c[p++]=t}for(;d<=f;){let e=i[d++];e!==null&&Qe(e)}return this.ut=o,Xe(e,c),M}})})))()}function oD(){return(oD=e((()=>{aD()})))()}var sD,cD,lD;function uD(){return(uD=e((()=>{sD=class e extends Event{constructor(t){super(e.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}},sD.eventName=`rangeChanged`,cD=class e extends Event{constructor(t){super(e.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}},cD.eventName=`visibilityChanged`,lD=class e extends Event{constructor(){super(e.eventName,{bubbles:!1})}},lD.eventName=`unpinned`})))()}var dD,fD;function pD(){return(pD=e((()=>{dD=class{constructor(e){this._element=null;let t=e??window;this._node=t,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}},fD=class extends dD{constructor(e,t){super(t),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);let n=this._node;this._originalScrollTo=n.scrollTo,this._originalScrollBy=n.scrollBy,this._originalScroll=n.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(e,t){let n=typeof e==`number`&&typeof t==`number`?{left:e,top:t}:e;this._scrollTo(n)}scrollBy(e,t){let n=typeof e==`number`&&typeof t==`number`?{left:e,top:t}:e;n.top!==void 0&&(n.top+=this.scrollTop),n.left!==void 0&&(n.left+=this.scrollLeft),this._scrollTo(n)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,t=null,n=null){this._end!==null&&this._end(),e.behavior===`smooth`?(this._setDestination(e),this._retarget=t,this._end=n):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:t,left:n}=e;return t=t===void 0?void 0:Math.max(0,Math.min(t,this.maxScrollTop)),n=n===void 0?void 0:Math.max(0,Math.min(n,this.maxScrollLeft)),this._destination!==null&&n===this._destination.left&&t===this._destination.top?!1:(this.__destination={top:t,left:n,behavior:`smooth`},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,t,n){return this._scrollTo(e,t,n),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){let{scrollTop:e,scrollLeft:t}=this,{top:n,left:r}=this._destination;n=Math.min(n||0,this.maxScrollTop),r=Math.min(r||0,this.maxScrollLeft);let i=Math.abs(n-e),a=Math.abs(r-t);i<1&&a<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener(`scroll`,this._checkForArrival)),null}_attach(e){this._clients.add(e),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener(`scroll`,this._checkForArrival))}}})))()}function mD(e){let t=window.getComputedStyle(e);return{marginTop:hD(t.marginTop),marginRight:hD(t.marginRight),marginBottom:hD(t.marginBottom),marginLeft:hD(t.marginLeft)}}function hD(e){let t=e?parseFloat(e):NaN;return Number.isNaN(t)?0:t}function gD(e){if(e.assignedSlot!==null)return e.assignedSlot;if(e.parentElement!==null)return e.parentElement;let t=e.parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host||null}function _D(e,t=!1){let n=[],r=t?e:gD(e);for(;r!==null;)n.push(r),r=gD(r);return n}function vD(e,t=!1){let n=!1;return _D(e,t).filter(e=>{if(n)return!1;let t=getComputedStyle(e);return n=t.position===`fixed`,t.overflow!==`visible`})}var yD,bD,xD,SD,CD;function wD(){return(wD=e((()=>{uD(),pD(),t(),yD=typeof window<`u`?window.ResizeObserver:void 0,bD=Symbol(`virtualizerRef`),xD=`virtualizer-sizer`,CD=class{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw Error(`Virtualizer constructor requires a configuration object`);if(e.hostElement)this._init(e);else throw Error(`Virtualizer configuration requires the "hostElement" property`)}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);let t=e.layout||{};this._layoutInitialized=this._initLayout(t)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new yD(()=>this._hostElementSizeChanged()),this._childrenRO=new yD(this._childrenSizeChanged.bind(this))}_initHostElement(e){let t=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),t[bD]=this}connected(){this._initObservers();let e=this._isScroller;this._clippingAncestors=vD(this._hostElement,e),this._scrollerController=new fD(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener(`scroll`,this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener(`scroll`,this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener(`scroll`,this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(e=>e.removeEventListener(`scroll`,this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise(`disconnected`),this._connected=!1}_applyVirtualizerStyles(){let e=this._hostElement.style;e.display=e.display||`block`,e.position=e.position||`relative`,e.contain=e.contain||`size layout`,this._isScroller&&(e.overflow=e.overflow||`auto`,e.minHeight=e.minHeight||`150px`)}_getSizer(){let e=this._hostElement;if(!this._sizer){let t=e.querySelector(`[${xD}]`);t||(t=document.createElement(`div`),t.setAttribute(xD,``),e.appendChild(t)),Object.assign(t.style,{position:`absolute`,margin:`-2px 0 0 0`,padding:0,visibility:`hidden`,fontSize:`2px`}),t.textContent=`&nbsp;`,t.setAttribute(xD,``),this._sizer=t}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;let t=e.type||SD;if(typeof t==`function`&&this._layout instanceof t){let t={...e};return delete t.type,this._layout.config=t,!0}return!1}async _initLayout(e){let t,r;if(typeof e.type==`function`){r=e.type;let n={...e};delete n.type,t=n}else t=e;r===void 0&&(SD=r=(await n(async()=>{let{FlowLayout:e}=await import(`./flow-BcvU3Oud.js`);return{FlowLayout:e}},__vite__mapDeps([0,1]),import.meta.url)).FlowLayout),this._layout=new r(e=>this._handleLayoutMessage(e),t),this._layout.measureChildren&&typeof this._layout.updateItemSizes==`function`&&(typeof this._layout.measureChildren==`function`&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener(`load`,this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){let e=window.performance.now(),t=e-this._benchmarkStart,n=performance.getEntriesByName(`uv-virtualizing`,`measure`).filter(t=>t.startTime>=this._benchmarkStart&&t.startTime<e).reduce((e,t)=>e+t.duration,0);return this._benchmarkStart=null,{timeElapsed:t,virtualizationTime:n}}return null}_measureChildren(){let e={},t=this._children,n=this._measureChildOverride||this._measureChild;for(let r=0;r<t.length;r++){let i=t[r],a=this._first+r;(this._itemsChanged||this._toBeMeasured.has(i))&&(e[a]=n.call(this,i,this._items[a]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){let{width:t,height:n}=e.getBoundingClientRect();return Object.assign({width:t,height:n},mD(e))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;let{_rangeChanged:t,_itemsChanged:n}=this;this._visibilityChanged&&=(this._notifyVisibility(),!1),(t||n)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&`mark`in window.performance&&window.performance.mark(`uv-end`))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&`mark`in window.performance&&window.performance.mark(`uv-end`))}_handleScrollEvent(){if(this._benchmarkStart&&`mark`in window.performance){try{window.performance.measure(`uv-virtualizing`,`uv-start`,`uv-end`)}catch(e){console.warn(`Error measuring performance data: `,e)}window.performance.mark(`uv-start`)}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(e){switch(e.type){case`scroll`:(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent();break;default:console.warn(`event not handled`,e)}}_handleLayoutMessage(e){e.type===`stateChanged`?this._updateDOM(e):e.type===`visibilityChanged`?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):e.type===`unpinned`&&this._hostElement.dispatchEvent(new lD)}get _children(){let e=[],t=this._hostElement.firstElementChild;for(;t;)t.hasAttribute(xD)||e.push(t),t=t.nextElementSibling;return e}_updateView(){let e=this._hostElement,t=this._scrollerController?.element,n=this._layout;if(e&&t&&n){let r,i,a,o,s=e.getBoundingClientRect();r=0,i=0,a=window.innerHeight,o=window.innerWidth;let c=this._clippingAncestors.map(e=>e.getBoundingClientRect());c.unshift(s);for(let e of c)r=Math.max(r,e.top),i=Math.max(i,e.left),a=Math.min(a,e.bottom),o=Math.min(o,e.right);let l=t.getBoundingClientRect(),u={left:s.left-l.left,top:s.top-l.top},d={width:t.scrollWidth,height:t.scrollHeight},f=r-s.top+e.scrollTop,p=i-s.left+e.scrollLeft,m=Math.max(0,a-r);n.viewportSize={width:Math.max(0,o-i),height:m},n.viewportScroll={top:f,left:p},n.totalScrollSize=d,n.offsetWithinScroller=u}}_sizeHostElement(e){let t=82e5,n=e&&e.width!==null?Math.min(t,e.width):0,r=e&&e.height!==null?Math.min(t,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${n}px, ${r}px)`;else{let e=this._hostElement.style;e.minWidth=n?`${n}px`:`100%`,e.minHeight=r?`${r}px`:`100%`}}_positionChildren(e){e&&e.forEach(({top:e,left:t,width:n,height:r,xOffset:i,yOffset:a},o)=>{let s=this._children[o-this._first];s&&(s.style.position=`absolute`,s.style.boxSizing=`border-box`,s.style.transform=`translate(${t}px, ${e}px)`,n!==void 0&&(s.style.width=n+`px`),r!==void 0&&(s.style.height=r+`px`),s.style.left=i===void 0?null:i+`px`,s.style.top=a===void 0?null:a+`px`)})}async _adjustRange(e){let{_first:t,_last:n,_firstVisible:r,_lastVisible:i}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==t||this._last!==n,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==r||this._lastVisible!==i}_correctScrollError(){if(this._scrollError){let{scrollTop:e,scrollLeft:t}=this._scrollerController,{top:n,left:r}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-n,left:t-r})}}element(e){return e===1/0&&(e=this._items.length-1),this._items?.[e]===void 0?void 0:{scrollIntoView:(t={})=>this._scrollElementIntoView({...t,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),e.behavior===`smooth`){let t=this._layout.getScrollIntoViewCoordinates(e),{behavior:n}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(t,{behavior:n}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){let{index:t}=this._scrollIntoViewTarget||{};t&&e?.has(t)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new sD({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new cD({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||=new Promise((e,t)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=t}),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){if(this._layout?.measureChildren){for(let t of e)this._toBeMeasured.set(t.target,t.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}})))()}var TD,ED,DD,OD;function kD(){return(kD=e((()=>{Be(),U(),nD(),oD(),wD(),TD=e=>e,ED=(e,t)=>j`${t}: ${JSON.stringify(e,null,2)}`,DD=class extends gn{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(e,t)=>ED(e,t+this._first),this._keyFunction=(e,t)=>TD(e,t+this._first),this._items=[],e.type!==V.CHILD)throw Error(`The virtualize directive can only be used in child expressions`)}render(e){e&&this._setFunctions(e);let t=[];if(this._first>=0&&this._last>=this._first)for(let e=this._first;e<=this._last;e++)t.push(this._items[e]);return iD(t,this._keyFunction,this._renderItem)}update(e,[t]){this._setFunctions(t);let n=this._items!==t.items;return this._items=t.items||[],this._virtualizer?this._updateVirtualizerConfig(e,t):this._initialize(e,t),n?M:this.render()}async _updateVirtualizerConfig(e,t){if(!await this._virtualizer.updateLayoutConfig(t.layout||{})){let n=e.parentNode;this._makeVirtualizer(n,t)}this._virtualizer.items=this._items}_setFunctions(e){let{renderItem:t,keyFunction:n}=e;t&&(this._renderItem=(e,n)=>t(e,n+this._first)),n&&(this._keyFunction=(e,t)=>n(e,t+this._first))}_makeVirtualizer(e,t){this._virtualizer&&this._virtualizer.disconnected();let{layout:n,scroller:r,items:i}=t;this._virtualizer=new CD({hostElement:e,layout:n,scroller:r}),this._virtualizer.items=i,this._virtualizer.connected()}_initialize(e,t){let n=e.parentNode;n&&n.nodeType===1&&(n.addEventListener(`rangeChanged`,e=>{this._first=e.first,this._last=e.last,this.setValue(this.render())}),this._makeVirtualizer(n,t))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}},OD=H(DD)})))()}var AD,jD,MD;function ND(){return(ND=e((()=>{P(),U(),AD=(e,t)=>{if(!e||!t)return;let n=Object.keys(t);return Object.fromEntries(Object.keys(e).flatMap(e=>n.includes(e)?[]:[[e,void 0]]))},jD=class extends ln{_props;render(e){return M}update(e,[t]){return this._props!==t&&Object.assign(e.element,AD(this._props,t),this._props=t),M}},MD=H(jD)})))()}var PD;function FD(){return(FD=e((()=>{G(),CT(),PD=e=>{let t=ST(),n=R(()=>new CSSStyleSheet,[]);L(()=>{t.shadowRoot.adoptedStyleSheets=[...t.shadowRoot.adoptedStyleSheets,n]},[]),L(()=>{n.replaceSync(e)},[e])}})))()}function ID(e){return e?t=>typeof t==`object`&&t?t[e]:t:Nn}var LD,RD;function zD(){return(zD=e((()=>{Fn(),LD=e=>{let t=ID(e);return e=>typeof e==`string`?e:t(e)?.toString()||``},RD=e=>t=>{let n={};for(let r in t)e.includes(r)&&(n[r]=t[r]);return n}})))()}var BD,VD;function HD(){return(HD=e((()=>{G(),BD=F`
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
		background: rgb(from var(--cz-color-alpha-black) r g b / 0.22);
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
`,VD=({index:e,itemHeight:t,auto:n})=>F`
	${J(!n,()=>F`
			.item {
				line-height: ${t}px;
				height: ${t}px;
			}
		`)}
	.item[data-index='${e||`0`}'] {
		background: rgb(from var(--cz-color-alpha-black) r g b / 0.14);
	}
	.item[data-index='${e||`0`}'][part~='error'] {
		background: var(--cz-color-bg-error);
	}
`})))()}var UD;function WD(){return(WD=e((()=>{G(),UD=e=>{let t=e===`auto`,[n,r]=Yt(t?40:e);return[n,e=>t?r(e):void 0]}})))()}var GD;function KD(){return(KD=e((()=>{GD=Symbol(`any key`)})))()}var qD;function JD(){return(JD=e((()=>{G(),Fn(),qD=yn(()=>Mn),customElements.define(`cosmoz-keybinding-provider`,qD.Provider)})))()}var YD;function XD(){return(XD=e((()=>{G(),JD(),Gn(),YD=(e,t)=>{let n=Bt(qD),r=Wn(e);L(()=>n(r),t)}})))()}var ZD,QD,$D,eO;function tO(){return(tO=e((()=>{KD(),ZD=e=>([t])=>Object.entries(t).every(([t,n])=>e[t]===n||n===GD),QD=e=>{if(e==null)return!1;let t=e.getBoundingClientRect(),n=e.getRootNode().elementFromPoint(t.x+t.width/2,t.y+t.height/2);return n!=null&&(e===n||e.contains(n))},$D=(e=document)=>{let t=e.activeElement;return t?t.shadowRoot?$D(t.shadowRoot):t:null},eO=()=>{let e=$D(document);return e?!!(e.matches(`input:not([type="checkbox"]), textarea`)||`isContentEditable`in e&&e.isContentEditable):!1}})))()}var nO;function rO(){return(rO=e((()=>{G(),Gn(),tO(),nO=e=>{let t=Wn({bindings:e});return L(()=>{let e=e=>{if(e.defaultPrevented)return;let n=t.bindings.find(ZD(e));if(!n)return;let[,r,,i]=n;if(!i?.allowInEditable&&eO())return;let a=r.flatMap(e=>t[e]??[]);if(a.length===0)return;let o=a.find(e=>e.check&&!e.check()||e.element&&!QD(e.element())?!1:e);o&&(o.allowDefault||e.preventDefault(),o.callback(e))};return document.addEventListener(`keydown`,e,!0),()=>document.removeEventListener(`keydown`,e,!0)},[]),z(e=>(t[e.activity]=[e,...t[e.activity]??[]],()=>{t[e.activity]=t[e.activity]?.filter(t=>t!==e)}),[])}})))()}function iO(){return(iO=e((()=>{JD(),XD(),rO()})))()}var aO,oO,sO,cO;function lO(){return(lO=e((()=>{aO=Symbol(`listbox.navigate.up`),oO=Symbol(`listbox.navigate.down`),sO=Symbol(`listbox.select`),cO=[[{key:`ArrowUp`},[aO],{title:`Navigate up`,description:`Move to previous listbox item`},{allowInEditable:!0}],[{key:`ArrowDown`},[oO],{title:`Navigate down`,description:`Move to next listbox item`},{allowInEditable:!0}],[{key:`Enter`},[sO],{title:`Select`,description:`Select current listbox item`},{allowInEditable:!0}]]})))()}var uO;function dO(){return(dO=e((()=>{CT(),iO(),lO(),uO=({onUp:e,onDown:t,onEnter:n})=>{let r=ST();YD({activity:aO,callback:e,element:()=>r},[]),YD({activity:oO,callback:t,element:()=>r},[]),YD({activity:sO,callback:n,element:()=>r},[])}})))()}var fO;function pO(){return(pO=e((()=>{G(),dO(),fO=({items:e,onSelect:t,defaultIndex:n=0})=>{let[r,i]=Yt({index:n}),{index:a}=r,{length:o}=e;return L(()=>{i({index:r.index<0?n:Math.min(r.index,e.length-1),scroll:!0})},[e,n]),uO({onUp:z(()=>i(e=>({index:e.index>0?e.index-1:o-1,scroll:!0})),[o]),onDown:z(()=>i(e=>({index:e.index<o-1?e.index+1:0,scroll:!0})),[o]),onEnter:z(()=>a>-1&&a<o&&t?.(e[a],a),[a,e,t])}),{position:r,highlight:z(e=>i({index:e}),[]),select:z(e=>t?.(e),[t])}}})))()}function mO(e){return e==null?[]:Array.isArray(e)?e:typeof e==`string`?[e]:hO(e)?Array.from(e):[e]}var hO,gO;function _O(){return(_O=e((()=>{Fn(),hO=e=>typeof e==`object`&&!!e&&Symbol.iterator in e,gO=(e,t=Nn)=>n=>{let r=mO(e).map(t);return mO(n).filter(e=>!r.includes(t(e)))}})))()}var vO,yO;function bO(){return(bO=e((()=>{_O(),P(),vO=(e,t)=>t?n=>n!=null&&mO(e).find(e=>e[t]===n[t]):t=>t!=null&&mO(e).includes(t),yO=(e,t)=>{if(!t||!e)return e;let n=e.toLowerCase().indexOf(t.toLowerCase());if(n<0)return e;let r=n+t.length;return[e.slice(0,n),j`<mark>${e.slice(n,r)}</mark>`,e.slice(r)]}})))()}var xO;function SO(){return(SO=e((()=>{Fn(),P(),bO(),xO=(e=Nn)=>(t,n,{highlight:r,select:i,textual:a=Nn,query:o,isSelected:s})=>{let c=a(t),l=e(yO(c,o),t,n);return j`<div
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
			<div class="sizer" virtualizer-sizer>${l}</div>`},xO()})))()}var CO;function wO(){return(wO=e((()=>{Gn(),G(),SO(),CO=({itemRenderer:e=xO(),...t})=>{let n=Wn(t);return z((t,r)=>e(t,r,n),[n,e])}})))()}var TO,EO;function DO(){return(DO=e((()=>{G(),WD(),pO(),wO(),bO(),TO=[`query`,`items`,`onSelect`,`textual`,`anchor`,`itemHeight`,`itemLimit`,`itemRenderer`,`defaultIndex`,`value`,`valueProperty`,`loading`],EO=({value:e,valueProperty:t,items:n,onSelect:r,defaultIndex:i,query:a,textual:o,itemRenderer:s,itemHeight:c=40,itemLimit:l=5})=>{let u=R(()=>vO(e,t),[e,t]),d=R(()=>n.slice(),[n,u]),{position:f,highlight:p,select:m}=fO({items:d,onSelect:r,defaultIndex:isNaN(i)?void 0:Number(i)}),[h,g]=UD(c);return{position:f,items:d,height:Math.min(l,d.length)*h,highlight:p,select:m,itemHeight:h,setItemHeight:g,renderItem:CO({itemRenderer:s,items:d,position:f,highlight:p,select:m,textual:o,query:a,isSelected:u})}}})))()}var OO,kO,AO;function jO(){return(jO=e((()=>{kD(),En(),ND(),Fn(),FD(),zD(),G(),Un(),HD(),DO(),OO=Mn,kO=e=>{let t=B(void 0),{position:n,items:r,renderItem:i,height:a,itemHeight:o,setItemHeight:s}=EO(e);return L(()=>{let n=t.current?.[bD];n&&n.layoutComplete.then(()=>{e.dispatchEvent(new CustomEvent(`layout-complete`));let{averageChildSize:t,averageMarginSize:r}=n._layout._metricsCache;return s(t+r*2)},OO)},[r]),L(()=>{if(!n.scroll)return;let e=t.current?.[bD];if(e){if(!e?._layout){e.layoutComplete.then(()=>e.element(n.index)?.scrollIntoView({block:`nearest`}),OO);return}e.element(n.index)?.scrollIntoView({block:`nearest`})}},[n]),PD(VD({...n,itemHeight:o,auto:e.itemHeight===`auto`})),j`<div
			class="items"
			style="min-height: ${a}px"
			${Hn(e=>t.current=e)}
		>
			<div virtualizer-sizer></div>
			${OD({items:r,renderItem:i,scroller:!0})}
		</div>
		<slot></slot>`},customElements.define(`cosmoz-listbox`,W(kO,{styleSheets:[wn(BD)]})),AO=({multi:e,...t},n)=>j`<cosmoz-listbox
		part="listbox"
		?multi=${e}
		...=${MD(RD(TO)(t))}
		>${n}</cosmoz-listbox
	>`})))()}var MO;function NO(){return(NO=e((()=>{G(),MO=Tt(F`
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
`)})))()}var $,PO;function FO(){return(FO=e((()=>{G(),$=e=>`calc(var(--cz-spacing) * ${e})`,PO=F`
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
`})))()}var IO;function LO(){return(LO=e((()=>{NO(),G(),FO(),IO=()=>j`<span class="badge" part="badge" role="status">
		<span class="dot" part="dot"></span>
		<slot name="prefix"></slot>
		<span class="content"><slot></slot></span>
		<slot name="suffix"></slot>
	</span>`,customElements.define(`cosmoz-badge`,W(IO,{styleSheets:[MO,PO]}))})))()}function RO(){return(RO=e((()=>{LO()})))()}var zO;function BO(){return(BO=e((()=>{G(),zO=Tt(F`
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
`)})))()}var VO,HO;function UO(){return(UO=e((()=>{G(),VO=e=>`calc(var(--cz-spacing) * ${e})`,HO=F`
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
		width: ${VO(2.5)};
		height: ${VO(2.5)};
	}

	:host([size='md']) .close svg,
	:host(:not([size])) .close svg {
		width: ${VO(3)};
		height: ${VO(3)};
	}

	:host([size='lg']) .close svg {
		width: ${VO(3.5)};
		height: ${VO(3.5)};
	}

	/* =========================================
	 * SLOTTED CONTENT (icons, images, flags)
	 * ========================================= */
	::slotted(svg) {
		width: ${VO(3.5)};
		height: ${VO(3.5)};
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
`})))()}var WO;function GO(){return(GO=e((()=>{RO(),Yw(),BO(),G(),q(),UO(),WO=e=>{let{color:t,size:n,disabled:r,removable:i}=e,a=()=>{r||e.dispatchEvent(new CustomEvent(`remove`))};return j`<cosmoz-badge
		color=${K(t)}
		size=${K(n)}
		?disabled=${r}
		type="color"
	>
		<slot name="prefix" slot="prefix"></slot>
		<slot></slot>
		<slot name="suffix" slot="suffix"></slot>
		${J(i,()=>j` <button
					slot="suffix"
					class="close"
					aria-label="Remove"
					@mousedown=${e=>e.preventDefault()}
					@click=${a}
				>
					${Rw()}
				</button>`)}
	</cosmoz-badge>`},customElements.define(`cosmoz-tag`,W(WO,{observedAttributes:[`color`,`size`,`disabled`,`removable`],styleSheets:[zO,HO]}))})))()}function KO(){return(KO=e((()=>{GO()})))()}var qO;function JO(){return(JO=e((()=>{KO(),G(),q(),qO=({content:e,onClear:t,disabled:n,className:r=`chip`,hidden:i,slot:a})=>j`<cosmoz-tag
		class=${K(r)}
		slot=${K(a)}
		exportparts="chip-text, chip-clear"
		?disabled=${n}
		?hidden=${i}
		?removable=${!!t&&!n}
		@remove=${t}
		title=${K(typeof e==`string`?e:void 0)}
		>${e}</cosmoz-tag
	>`})))()}var YO;function XO(){return(XO=e((()=>{P(),JO(),YO=({value:e,min:t=0,onDeselect:n,textual:r,disabled:i,chipRenderer:a=qO})=>[...e.filter(Boolean).map(o=>a({item:o,content:r(o),onClear:e.length>t&&(()=>n(o)),disabled:i,slot:`control`})),a({item:null,content:j`<span></span>`,className:`badge`,disabled:!0,slot:`control`,hidden:!0})]})))()}var ZO;function QO(){return(QO=e((()=>{G(),P(),ZO=F`
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
`,customElements.define(`cosmoz-autocomplete-skeleton-span`,W(()=>N,{styleSheets:[ZO]}))})))()}var $O;function ek(){return(ek=e((()=>{En(),$O=Sn`
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
	cosmoz-input[variant='inline'][disabled]:has(cosmoz-tag:not([hidden]))::part(
			label
		) {
		transform: translate(var(--cz-spacing), -75%) scale(0.85);
	}

	cosmoz-input::part(input) {
		flex: 1 calc(var(--cz-spacing) * 6);
		min-width: 0;
	}

	cosmoz-input[data-one] cosmoz-tag {
		max-width: calc(100% - 16px);
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
`})))()}var tk,nk;function rk(){return(rk=e((()=>{tk=(e,t=()=>({}))=>{let n={type:e,toString(){return e}};return Object.assign((...e)=>Object.assign(t(...e),n),n)},nk=e=>e.type||e.toString()})))()}var ik,ak;function ok(){return(ok=e((()=>{rk(),ik=e=>Array.isArray(e)?e:[e],ak=(e,t)=>{let n=ik(t),r=(n.every(Array.isArray)?n:[n]).map(([e,t])=>({actions:ik(e).map(nk),handle:t}));return(t=e,n)=>{let i=r.find(e=>e.actions.includes(nk(n)));return i?i.handle(t,n):t}}})))()}var sk,ck,lk,uk,dk,fk,pk;function mk(){return(mk=e((()=>{G(),ok(),rk(),sk={pending:`pending`,rejected:`rejected`,resolved:`resolved`},ck={error:void 0,result:void 0,state:sk.pending},lk=tk(sk.pending),uk=tk(sk.resolved,e=>({result:e})),dk=tk(sk.rejected,e=>({error:e})),fk=ak(ck,[[lk,()=>({error:void 0,result:void 0,state:sk.pending})],[uk,(e,{result:t})=>({error:void 0,result:t,state:sk.resolved})],[dk,(e,{error:t})=>({error:t,result:void 0,state:sk.rejected})]]),pk=e=>{let[{error:t,result:n,state:r},i]=Zt(fk,ck);return L(()=>{if(!e)return;let t=!1;return i(lk()),e.then(e=>!t&&i(uk(e)),e=>!t&&i(dk(e))),()=>{t=!0}},[e]),[n,t,r]}})))()}var hk,gk;function _k(){return(_k=e((()=>{lO(),hk=Symbol(`autocomplete.deselect.last`),gk=[...cO,[{key:`Backspace`},[hk],{title:`Deselect last`,description:`Remove the last selected item`},{allowInEditable:!0}]]})))()}var vk,yk,bk,xk,Sk,Ck;function wk(){return(wk=e((()=>{vk=e=>e.normalize(`NFD`).replace(/[\u0300-\u036f]/gu,``),yk=(e,t,n)=>{if(!t)return e;let r=vk(t.toLowerCase()),i=[];for(let t of e){let e=vk(n(t).toLowerCase()).indexOf(r);e<0||i.push({item:t,index:e})}return i.sort((e,t)=>e.index-t.index).map(({item:e})=>e)},bk=e=>e===!1||e==null?[]:e,xk=(e,t,n)=>e.dispatchEvent(new CustomEvent(t,{detail:n})),Sk=[],Ck=e=>(...t)=>{let n,r=()=>{n&&cancelAnimationFrame(n)};return r(),n=requestAnimationFrame(()=>{n=void 0,e(...t)}),r}})))()}var Tk,Ek;function Dk(){return(Dk=e((()=>{_O(),CT(),Gn(),mk(),iO(),zD(),G(),_k(),wk(),Tk=(e,t,n)=>z(r=>{t?.(r),e.dispatchEvent(new CustomEvent(n,{detail:r}))},[t]),Ek=({value:e,text:t,mode:n,onChange:r,onText:i,onSelect:a,limit:o,min:s,source:c,textProperty:l,textual:u,valueProperty:d,keepOpened:f,keepQuery:p,preserveOrder:m,defaultIndex:h,externalSearch:g,disabled:_,lazyOpen:v})=>{let y=o==null?void 0:Number(o),b=s==null?void 0:Number(s),x=n===`select`,S=R(()=>(u??LD)(l),[u,l]),C=ST(),[w,T]=en(`opened`,!1),E=!t,D=R(()=>t?.trim(),[t]),ee=Tk(C,i,`text`),O=z(e=>{r?.(e,()=>T(!1));let t=x?e[0]:e;xk(C,`value`,t)},[r]),[te,ne]=Yt([]),re=!(!v||D),ie=R(()=>re?Promise.resolve([]):Promise.resolve(typeof c==`function`?c({query:D,active:w}):c).then(bk),[c,w,D,re]),k=R(()=>mO(e),[e]);L(()=>ie.then(ne),[ie]),YD({activity:hk,callback:()=>{let e=mO(k);e.length>(b??0)&&O(e.slice(0,-1))},check:()=>!_&&E&&C.matches(`:focus-within`),element:()=>C},[]),L(()=>{!w&&!p&&ee(``)},[w,p]),L(()=>{C.toggleAttribute(`opened`,!!w)},[w]);let A=Wn({onText:ee,onChange:O,value:k,limit:y,min:b,keepQuery:p,keepOpened:f,setOpened:T,onSelect:a,valueProperty:d}),[,,ae]=pk(ie);return{limit:y,opened:w,query:D,textual:S,value:k,source$:ie,loading:ae===`pending`,items:R(()=>{if(!w||re)return Sk;let e=m?te:[...k,...gO(k,ID(d))(te)];return g?e:yk(e,D,S)},[te,w,D,S,E,k,m,d,g,re]),onToggle:z(e=>{_||T(e.newState===`open`)},[_]),onText:z(e=>{if(_)return;let t=e.target.value;t&&y===1&&k.length>0&&O([]),ee(t),T(!0)},[_,ee,T,y,k,O]),onSelect:z(e=>{if(_)return;A.onSelect?.(e,A);let{onChange:t,onText:n,limit:r,min:i,value:a,keepQuery:o,keepOpened:s,setOpened:c,valueProperty:l}=A;o||n(``),s||c(!1);let u=mO(a),d=ID(l),f=u.some(t=>d(t)===d(e));f&&u.length===i||t((f?gO(e,d)(u):[...u,e]).slice(-r))},[_,A]),onDeselect:z(e=>{_||A.onChange(gO(e,ID(A.valueProperty))(A.value))},[_,A]),defaultIndex:D!==void 0&&D?.length>0?0:h}}})))()}var Ok,kk;function Ak(){return(Ak=e((()=>{CT(),G(),wk(),Ok=e=>{let t=e.shadowRoot.querySelectorAll(`.chip`),n=e.shadowRoot.querySelector(`.badge`);if(!n)return;n.hidden=!0;for(let e of t)e.hidden=!1;let r=e.shadowRoot.querySelector(`cosmoz-input`).shadowRoot?.querySelector(`.control`)?.getBoundingClientRect(),i=0;for(;i<t.length;i++){let e=t[i].getBoundingClientRect();if(!(e.x+e.width<=r.x+r.width-24))break}let a=t.length-i;for(n.querySelector(`span`).textContent=`+`+a.toString(),n.hidden=a<1;i<t.length;i++)t[i].hidden=!0},kk=({value:e,opened:t,wrap:n,limit:r})=>{let i=ST(),a=!(n||r===1)&&e.length>0,o=R(()=>Ck(()=>Ok(i)),[]),[s,c]=Yt(0);qt(()=>{if(!a)return;let e=i.shadowRoot.querySelector(`cosmoz-input`),t=new ResizeObserver(e=>{c(e[0].contentRect.width)});return t.observe(e),()=>t.disconnect()},[a]),qt(()=>a?o():void 0,[a,s,t,e])}})))()}var jk,Mk,Nk,Pk,Fk;function Ik(){return(Ik=e((()=>{Qn(),Yw(),qT(),WE(),P(),qE(),q(),Zw(),tD(),jO(),XO(),QO(),ek(),Dk(),Ak(),jk=[`input`,`control`,`label`,`line`,`error`,`wrap`].map(e=>`${e}: input-${e}`).join(),Mk=({opened:e,isSingle:t,showSingle:n,hasResultsOrQuery:r})=>!e||t&&!n?!1:r,Nk=e=>{let{variant:t,opened:n,invalid:r,errorMessage:i,hint:a,label:o,placeholder:s,compact:c,required:l,disabled:u,textual:d,text:f,onText:p,onToggle:m,onDeselect:h,value:g,limit:_,min:v,showSingle:y,items:b,source$:x,loading:S,chipRenderer:C,mode:w}=e,T=_===1,E=T&&g?.[0]!=null,D=S||b.length>0||f!=null&&f.length>0;return j`<cosmoz-dropdown-next
			open-on-focus
			?disabled=${u}
			.opened=${n}
			@dropdown-toggle=${m}
			part="dropdown"
		>
			<cosmoz-input
				slot="button"
				id="input"
				part="input"
				.label=${o}
				.placeholder=${E?void 0:s}
				hint=${K(a)}
				variant=${K(t)}
				?compact=${c}
				?disabled=${u}
				?required=${l}
				?invalid=${KE([x,r],()=>eD(x.then(()=>r,()=>!0),r))}
				.errorMessage=${KE([x,i],()=>eD(x.then(()=>i,e=>e.message),i))}
				.value=${Xw(f)}
				@value-changed=${p}
				autocomplete="off"
				exportparts=${jk}
				?data-one=${T}
				?data-single=${E}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix">
					${J(w===`select`,()=>ms({styles:`margin-right: calc(var(--cz-spacing) * 2);color: var(--cz-color-text-secondary);`,width:`16`,height:`16`}))}
				</slot>
				${YO({value:g,min:v,isOne:T,onDeselect:h,textual:d,disabled:u,chipRenderer:C})}
			</cosmoz-input>

			${J(Mk({opened:n,isSingle:E,showSingle:y,hasResultsOrQuery:D}),()=>AO({...e,items:b,multi:!T},J(S,()=>j`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>J(f!=null&&f.length>0&&b.length===0,()=>j`<slot name="no-result">
											<span class="no-result">${UE(`No results found`)}</span>
										</slot>`))))}
		</cosmoz-dropdown-next>`},Pk=e=>{let t={...e,...Ek(e)};return kk(t),Nk(t)},Fk=[`variant`,`disabled`,`invalid`,`required`,`compact`,`hint`,`text-property`,`value-property`,`limit`,`min`,`show-single`,`preserve-order`,`keep-opened`,`keep-query`,`default-index`,`external-search`,`item-height`,`item-limit`,`wrap`,`lazy-open`,`mode`]})))()}var Lk,Rk,zk;function Bk(){return(Bk=e((()=>{En(),G(),Ik(),Lk=e=>{let{onChange:t,onText:n,mode:r,...i}=e,a=r===`select`,[o,s]=en(`value`);return L(()=>{e.onChange!=null&&console.warn(`onChange is deprecated; use value-changed and lift instead`)},[]),Pk({...i,...a&&{limit:1,min:1,showSingle:!0},mode:r,value:o,onChange:z((e,...n)=>{s(a?e[0]:e),t?.(e,...n)},[t,a]),onText:z(t=>{e.text=t,n?.(t)},[n])})},Rk=[wn($O)],zk={mode:`open`,delegatesFocus:!0},customElements.define(`cosmoz-autocomplete-ui`,W(Pk,{observedAttributes:Fk,styleSheets:Rk,shadowRootInit:zk})),customElements.define(`cosmoz-autocomplete`,W(Lk,{observedAttributes:Fk,styleSheets:Rk,shadowRootInit:zk}))})))()}var Vk;function Hk(){return(Hk=e((()=>{G(),Vk=F`
	cosmoz-listbox::part(error)::before {
		border-color: var(--cz-color-border-error);
		/* prettier-ignore */
		background: url("${`data:image/svg+xml,%3Csvg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.5 2.5L8.5 8.5M8.5 2.5L2.5 8.5' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E`}") var(--cz-color-border-error) no-repeat 50%;
	}

	cosmoz-listbox::part(error):hover {
		background: var(--cz-color-bg-error);
	}
`})))()}var Uk,Wk;function Gk(){return(Gk=e((()=>{Uk=e=>({item:e,excluded:!1}),Wk=e=>e.item})))()}var Kk;function qk(){return(qk=e((()=>{Fn(),G(),Bk(),Gk(),Kk=e=>{let[t,n]=en(e);return{value:t,setExcludingValue:z(e=>n(t=>{let n=Pn(e,t?.map(Wk));if(!n)return;if(!t)return n.map(Uk);let r=t.reduce((e,t)=>n.includes(t.item)?[...e,t]:t.excluded?e:[...e,{...t,excluded:!0}],[]),i=n.filter(e=>!t.some(t=>t.item===e)).map(Uk);return[...r,...i]}),[]),setValue:n}}})))()}var Jk,Yk,Xk,Zk,Qk;function $k(){return($k=e((()=>{KO(),G(),q(),Bk(),Ik(),Hk(),qk(),Gk(),Jk=(e,t)=>e?.some(e=>e.item===t&&e.excluded),Yk=(e,t)=>t&&Jk(e,t)?`error`:`gray`,Xk=e=>(t,n,{highlight:r,select:i,textual:a,isSelected:o})=>{let s=a(t);return j`<div
				class="item"
				role="option"
				part="option ${Yk(e,t)}"
				?aria-selected=${o(t)}
				data-index=${n}
				@mouseenter=${()=>r(n)}
				@click=${()=>i(t)}
				@mousedown=${e=>e.preventDefault()}
			>
				${s}
			</div>
			<div class="sizer" virtualizer-sizer>${s}</div>`},Zk=(e,t)=>({item:n,content:r,disabled:i,hidden:a,className:o=`chip`,slot:s})=>j`<cosmoz-tag
			class=${K(o)}
			slot=${K(s)}
			exportparts="chip-text, chip-clear"
			color=${Yk(e,n)}
			?disabled=${i}
			?hidden=${a}
			?removable=${!!n}
			@remove=${()=>t(n)}
			title=${K(typeof r==`string`?r:void 0)}
		>
			${r}
		</cosmoz-tag>`,Qk=e=>{let{value:t,setValue:n,setExcludingValue:r}=Kk(`value`),[i,a]=en(`text`),o=z(e=>n(t=>t?.filter(t=>t.item!==e)),[]);return Pk({...e,value:R(()=>t?.map(Wk),[t]),onChange:z(e=>{r(e)},[]),text:i,onText:z(e=>{a(e)},[]),itemRenderer:R(()=>Xk(t),[t]),chipRenderer:R(()=>Zk(t,o),[t,o])})},customElements.define(`cosmoz-autocomplete-excluding`,W(Qk,{observedAttributes:Fk,styleSheets:[$O,Vk],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}function eA(){return(eA=e((()=>{Bk(),$k(),_k()})))()}export{hs as $,P as $t,xT as A,en as At,zw as B,Bt,WE as C,ln as Ct,DT as D,B as Dt,qT as E,an as Et,pT as F,Gt as Ft,$u as G,Tt as Gt,Lw as H,L as Ht,fT as I,z as It,Nu as J,Be as Jt,Fu as K,$e as Kt,$w as L,Wt as Lt,_T as M,Yt as Mt,gT as N,Jt as Nt,TT as O,nn as Ot,hT as P,qt as Pt,ms as Q,j as Qt,Qw as R,R as Rt,qE as S,H as St,UE as T,V as Tt,Iw as U,F as Ut,Rw as V,Rt as Vt,Qu as W,Ot as Wt,Ss as X,Fe as Xt,Pu as Y,N as Yt,Cs as Z,M as Zt,iD as _,Sn as _t,_O as a,Gn as at,eD as b,yn as bt,nO as c,Hn as ct,zD as d,Pn as dt,xe as en,$n as et,ID as f,Mn as ft,OD as g,Cn as gt,kD as h,wn as ht,mO as i,Qn as it,bT as j,Xt as jt,ET as k,tn as kt,XD as l,Nn as lt,LD as m,Tn as mt,gk as n,q as nt,iO as o,Wn as ot,RD as p,En as pt,Iu as q,We as qt,_k as r,K as rt,rO as s,Un as st,eA as t,J as tt,YD as u,Fn as ut,aD as v,G as vt,Q as w,U as wt,KE as x,bn as xt,tD as y,W as yt,Yw as z,Vt as zt};