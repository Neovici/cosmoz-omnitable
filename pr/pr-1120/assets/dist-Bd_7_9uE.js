const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./flow-BcvU3Oud.js","./rolldown-runtime-DkW27tQK.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./preload-helper-wdlQj8DP.js";var r,i,a,o,s,c,l,u;function d(){return(d=e((()=>{r=globalThis,i=r.ShadowRoot&&(r.ShadyCSS===void 0||r.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,a=Symbol(),o=new WeakMap,s=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(i&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=o.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&o.set(t,e))}return e}toString(){return this.cssText}},c=e=>new s(typeof e==`string`?e:e+``,void 0,a),l=(e,t)=>{if(i)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),i=r.litNonce;i!==void 0&&t.setAttribute(`nonce`,i),t.textContent=n.cssText,e.appendChild(t)}},u=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return c(t)})(e):e})))()}var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{d(),{is:f,defineProperty:p,getOwnPropertyDescriptor:m,getOwnPropertyNames:h,getOwnPropertySymbols:g,getPrototypeOf:_}=Object,v=globalThis,y=v.trustedTypes,b=y?y.emptyScript:``,x=v.reactiveElementPolyfillSupport,S=(e,t)=>e,C={toAttribute(e,t){switch(t){case Boolean:e=e?b:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},w=(e,t)=>!f(e,t),T={attribute:!0,type:String,converter:C,reflect:!1,useDefault:!1,hasChanged:w},Symbol.metadata??=Symbol(`metadata`),v.litPropertyMetadata??=new WeakMap,E=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=T){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&p(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=m(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??T}static _$Ei(){if(this.hasOwnProperty(S(`elementProperties`)))return;let e=_(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(S(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S(`properties`))){let e=this.properties,t=[...h(e),...g(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(u(e))}else e!==void 0&&t.push(u(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return l(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?C:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?C:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??w)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}},E.elementStyles=[],E.shadowRootOptions={mode:`open`},E[S(`elementProperties`)]=new Map,E[S(`finalized`)]=new Map,x?.({ReactiveElement:E}),(v.reactiveElementVersions??=[]).push(`2.1.2`)})))()}function ee(e,t){if(!ue(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ie===void 0?t:ie.createHTML(t)}function O(e,t,n=e,r){if(t===N)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=le(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=O(e,i._$AS(e,t.values),i,r)),t}var te,ne,re,ie,k,A,ae,oe,se,ce,le,ue,de,fe,pe,me,he,ge,_e,ve,ye,be,j,M,N,P,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe;function F(){return(F=e((()=>{te=globalThis,ne=e=>e,re=te.trustedTypes,ie=re?re.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,k=`$lit$`,A=`lit$${Math.random().toFixed(9).slice(2)}$`,ae=`?`+A,oe=`<${ae}>`,se=document,ce=()=>se.createComment(``),le=e=>e===null||typeof e!=`object`&&typeof e!=`function`,ue=Array.isArray,de=e=>ue(e)||typeof e?.[Symbol.iterator]==`function`,fe=`[ 	
\f\r]`,pe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,me=/-->/g,he=/>/g,ge=RegExp(`>|${fe}(?:([^\\s"'>=/]+)(${fe}*=${fe}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),_e=/'/g,ve=/"/g,ye=/^(?:script|style|textarea|title)$/i,be=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),j=be(1),M=be(2),be(3),N=Symbol.for(`lit-noChange`),P=Symbol.for(`lit-nothing`),xe=new WeakMap,Se=se.createTreeWalker(se,129),Ce=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=pe;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===pe?c[1]===`!--`?o=me:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=ge):(ye.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=ge):o=he:o===ge?c[0]===`>`?(o=i??pe,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?ge:c[3]===`"`?ve:_e):o===ve||o===_e?o=ge:o===me||o===he?o=pe:(o=ge,i=void 0);let d=o===ge&&e[t+1].startsWith(`/>`)?` `:``;a+=o===pe?n+oe:l>=0?(r.push(s),n.slice(0,l)+k+n.slice(l)+A+d):n+A+(l===-2?t:d)}return[ee(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},we=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Ce(t,n);if(this.el=e.createElement(l,r),Se.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Se.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(k)){let t=u[o++],n=i.getAttribute(e).split(A),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Oe:r[1]===`?`?ke:r[1]===`@`?Ae:De}),i.removeAttribute(e)}else e.startsWith(A)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(ye.test(i.tagName)){let e=i.textContent.split(A),t=e.length-1;if(t>0){i.textContent=re?re.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],ce()),Se.nextNode(),c.push({type:2,index:++a});i.append(e[t],ce())}}}else if(i.nodeType===8){if(i.data===ae)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(A,e+1))!==-1;)c.push({type:7,index:a}),e+=A.length-1}}a++}}static createElement(e,t){let n=se.createElement(`template`);return n.innerHTML=e,n}},Te=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??se).importNode(t,!0);Se.currentNode=r;let i=Se.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Ee(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new je(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Se.nextNode(),a++)}return Se.currentNode=se,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Ee=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=O(this,e,t),le(e)?e===P||e==null||e===``?(this._$AH!==P&&this._$AR(),this._$AH=P):e!==this._$AH&&e!==N&&this._(e):e._$litType$===void 0?e.nodeType===void 0?de(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==P&&le(this._$AH)?this._$AA.nextSibling.data=e:this.T(se.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=we.createElement(ee(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Te(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=xe.get(e.strings);return t===void 0&&xe.set(e.strings,t=new we(e)),t}k(t){ue(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(ce()),this.O(ce()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=ne(e).nextSibling;ne(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},De=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=P,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=P}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=O(this,e,t,0),a=!le(e)||e!==this._$AH&&e!==N,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=O(this,r[n+o],t,o),s===N&&(s=this._$AH[o]),a||=!le(s)||s!==this._$AH[o],s===P?e=P:e!==P&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Oe=class extends De{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===P?void 0:e}},ke=class extends De{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==P)}},Ae=class extends De{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=O(this,e,t,0)??P)===N)return;let n=this._$AH,r=e===P&&n!==P||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==P&&(n===P||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},je=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){O(this,e)}},Me={M:k,P:A,A:ae,C:1,L:Ce,R:Te,D:de,V:O,I:Ee,H:De,N:ke,U:Ae,B:Oe,F:je},Ne=te.litHtmlPolyfillSupport,Ne?.(we,Ee),(te.litHtmlVersions??=[]).push(`3.3.3`),Pe=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Ee(t.insertBefore(ce(),e),e,void 0,n??{})}return i._$AI(e),i}})))()}var Fe,Ie,Le;function Re(){return(Re=e((()=>{D(),F(),Fe=globalThis,Ie=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Pe(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return N}},Ie._$litElement$=!0,Ie.finalized=!0,Fe.litElementHydrateSupport?.({LitElement:Ie}),Le=Fe.litElementPolyfillSupport,Le?.({LitElement:Ie}),(Fe.litElementVersions??=[]).push(`4.2.2`)})))()}function ze(){return(ze=e((()=>{D(),F(),Re()})))()}var Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze;function Qe(){return(Qe=e((()=>{F(),{I:Be}=Me,Ve=e=>e,He=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Ue=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,We=e=>e.strings===void 0,Ge=()=>document.createComment(``),Ke=(e,t,n)=>{let r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0){let t=r.insertBefore(Ge(),i),a=r.insertBefore(Ge(),i);n=new Be(t,a,e,e.options)}else{let t=n._$AB.nextSibling,a=n._$AM,o=a!==e;if(o){let t;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(t=e._$AU)!==a._$AU&&n._$AP(t)}if(t!==i||o){let e=n._$AA;for(;e!==t;){let t=Ve(e).nextSibling;Ve(r).insertBefore(e,i),e=t}}}return n},qe=(e,t,n=e)=>(e._$AI(t,n),e),Je={},Ye=(e,t=Je)=>e._$AH=t,Xe=e=>e._$AH,Ze=e=>{e._$AR(),e._$AA.remove()}})))()}function $e(e){nt=e}function et(){nt=null,rt=0}function tt(){return rt++}var nt,rt;function it(){return(it=e((()=>{rt=0})))()}var at,ot,st,ct,lt,ut,dt;function ft(){return(ft=e((()=>{at=Symbol(`haunted.phase`),ot=Symbol(`haunted.hook`),st=Symbol(`haunted.update`),ct=Symbol(`haunted.commit`),lt=Symbol(`haunted.effects`),ut=Symbol(`haunted.layoutEffects`),dt=`haunted.context`})))()}var pt;function mt(){return(mt=e((()=>{it(),ft(),pt=class{update;host;virtual;[ot];[lt];[ut];constructor(e,t){this.update=e,this.host=t,this[ot]=new Map,this[lt]=[],this[ut]=[]}run(e){$e(this);let t=e();return et(),t}_runEffects(e){let t=this[e];$e(this);for(let e of t)e.call(this);et()}runEffects(){this._runEffects(lt)}runLayoutEffects(){this._runEffects(ut)}teardown(){this[ot].forEach(e=>{typeof e.teardown==`function`&&e.teardown(!0)})}}})))()}var ht;function gt(){return(gt=e((()=>{ht=class extends Error{constructor(e){let t=e?` <${e}>`:``;super(`Infinite update loop detected in component${t}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name=`InfiniteLoopError`}}})))()}function _t(){let e=[],t;function n(){t=null;let n=e;e=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(r){e.push(r),t??=yt(n)}}var vt,yt,bt,xt,St;function Ct(){return(Ct=e((()=>{mt(),ft(),gt(),vt=100,yt=Promise.resolve().then.bind(Promise.resolve()),bt=_t(),xt=_t(),St=class e{renderer;host;state;[at];_updateQueued;_active;_updateCount;_processing;static maxUpdates=vt;constructor(e,t){this.renderer=e,this.host=t,this.state=new pt(this.update.bind(this),t),this[at]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>e.maxUpdates){let e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new ht(e)}}update(){this._active&&(this._updateQueued||=(this._checkForInfiniteLoop(),this._processing=!0,bt(()=>{let e=this.handlePhase(st);xt(()=>{this.handlePhase(ct,e),xt(()=>{this.handlePhase(lt),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),!0))}handlePhase(e,t){switch(this[at]=e,e){case ct:this.commit(t),this.runEffects(ut);return;case st:return this.render();case lt:return this.runEffects(lt)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}})))()}var wt,Tt,Et,I;function Dt(){return(Dt=e((()=>{wt=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t},Tt=e=>e?.map(e=>typeof e==`string`?wt(e):e),Et=(e,...t)=>e.flatMap((e,n)=>[e,t[n]||``]).join(``),I=Et})))()}function Ot(e){class t extends St{frag;renderResult;constructor(e,t,n){super(e,n||t),this.frag=t}commit(t){this.renderResult=e(t,this.frag)}}function n(e,n,r){let i=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:o=!0,shadowRootInit:s={},styleSheets:c}=r||n||{},l=Tt(e.styleSheets||c);class u extends i{_scheduler;static get observedAttributes(){return e.observedAttributes||a||[]}constructor(){if(super(),o===!1)this._scheduler=new t(e,this);else{let n=this.attachShadow({mode:`open`,...s});l&&(n.adoptedStyleSheets=l),this._scheduler=new t(e,n,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(e,t,n){if(t===n)return;let r=n===``||n;Reflect.set(this,kt(e),r)}}function d(e){let t=e,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return t},set(e){n&&t===e||(n=!0,t=e,this._scheduler&&this._scheduler.update())}})}let f=new Proxy(i.prototype,{getPrototypeOf(e){return e},set(e,t,n,r){let i;return t in e?(i=Object.getOwnPropertyDescriptor(e,t),i&&i.set?(i.set.call(r,n),!0):(Reflect.set(e,t,n,r),!0)):(i=typeof t==`symbol`||t[0]===`_`?{enumerable:!0,configurable:!0,writable:!0,value:n}:d(n),Object.defineProperty(r,t,i),i.set&&i.set.call(r,n),!0)}});return Object.setPrototypeOf(u.prototype,f),u}return n}var kt;function At(){return(At=e((()=>{Ct(),Dt(),kt=(e=``)=>e.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():``)})))()}function jt(e,...t){let n=tt(),r=nt[ot],i=r.get(n);return i||(i=new e(n,nt,...t),r.set(n,i)),i.update(...t)}function Mt(e){return jt.bind(null,e)}var L;function Nt(){return(Nt=e((()=>{it(),ft(),L=class{id;state;constructor(e,t){this.id=e,this.state=t}}})))()}function Pt(e){return Mt(class extends L{callback;lastValues;values;_teardown;constructor(t,n,r,i){super(t,n),e(n,this)}update(e,t){this.callback=e,this.values=t}call(){let e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown==`function`&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}function Ft(){return(Ft=e((()=>{Nt()})))()}function It(e,t){e[lt].push(t)}var R;function Lt(){return(Lt=e((()=>{ft(),Ft(),R=Pt(It)})))()}var Rt,zt;function Bt(){return(Bt=e((()=>{Nt(),ft(),Lt(),Rt=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,zt=Mt(class extends L{Context;value;_ranEffect;_unsubscribe;constructor(e,t,n){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,It(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){let t={Context:e,callback:this._updater};Rt(this.state.host).dispatchEvent(new CustomEvent(dt,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));let{unsubscribe:n=null,value:r}=t;this.value=n?r:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}})})))()}function Vt(e){return t=>{let n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display=`contents`,this.listeners=new Set,this.addEventListener(dt,this)}disconnectedCallback(){this.removeEventListener(dt,this)}handleEvent(e){let{detail:t}=e;t.Context===n&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}unsubscribe(e){this.listeners.delete(e)}set value(e){this._value=e;for(let t of this.listeners)t(e)}get value(){return this._value}},Consumer:e(function({render:e}){return e(zt(n))},{useShadowDOM:!1}),defaultValue:t};return n}}function Ht(){return(Ht=e((()=>{ft(),Bt()})))()}var z;function Ut(){return(Ut=e((()=>{Nt(),z=Mt(class extends L{value;values;constructor(e,t,n,r){super(e,t),this.value=n(),this.values=r}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})))()}var B;function Wt(){return(Wt=e((()=>{Ut(),B=(e,t)=>z(()=>e,t)})))()}function Gt(e,t){e[ut].push(t)}var Kt;function qt(){return(qt=e((()=>{ft(),Ft(),Kt=Pt(Gt)})))()}var Jt;function Yt(){return(Yt=e((()=>{Nt(),Jt=Mt(class extends L{args;constructor(e,t,n){super(e,t),this.updater=this.updater.bind(this),typeof n==`function`&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){let[t]=this.args;typeof e==`function`&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}})})))()}var Xt;function Zt(){return(Zt=e((()=>{Nt(),Xt=Mt(class extends L{reducer;currentState;constructor(e,t,n,r,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i===void 0?r:i(r)}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}})})))()}var Qt,$t,en;function tn(){return(tn=e((()=>{Nt(),Qt=/([A-Z])/gu,$t=Mt(class extends L{property;eventName;constructor(e,t,n,r){if(super(e,t),this.state.virtual)throw Error(`Can't be used with virtual components.`);this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(Qt,`-$1`).toLowerCase()+`-changed`,this.state.host[this.property]??(typeof r==`function`&&(r=r()),r!=null&&this.updater(r,!0))}update(e,t){return[this.state.host[this.property],this.updater]}resolve(e){let t=this.state.host[this.property],n=typeof e==`function`?e:void 0;return[t,n?n(t):e,n]}notify(e,t){let n=new CustomEvent(this.eventName,{detail:{value:e,updater:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,t=!1){let[n,r,i]=this.resolve(e),a=this.notify(r,i);(t||!a.defaultPrevented)&&(Object.is(n,r)||(this.state.host[this.property]=r))}}),en=e=>t=>{t.preventDefault(),e(t.detail.updater??t.detail.value)}})))()}function nn(e){let t=e;return{get current(){return t},set current(e){t=e},get value(){return t},set value(e){t=e}}}function rn(e){return z(()=>nn(e),[])}function an(){return(an=e((()=>{Ut()})))()}function on(){return(on=e((()=>{Nt(),Mt(class extends L{update(){return this.state.host}})})))()}function sn({render:e}){let t=Ot(e);return{component:t,createContext:Vt(t)}}function cn(){return(cn=e((()=>{At(),Ht(),Wt(),Lt(),qt(),Yt(),Zt(),Ut(),Bt(),tn(),an(),on(),Nt(),Ct()})))()}var V,H,ln;function U(){return(U=e((()=>{V={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},H=e=>(...t)=>({_$litDirective$:e,values:t}),ln=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}})))()}function un(e){this._$AN===void 0?this._$AM=e:(pn(this),this._$AM=e,mn(this))}function dn(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0){if(t){if(Array.isArray(r))for(let e=n;e<r.length;e++)fn(r[e],!1),pn(r[e]);else r!=null&&(fn(r,!1),pn(r))}else fn(this,e)}}var fn,pn,mn,hn,gn;function _n(){return(_n=e((()=>{Qe(),U(),fn=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),fn(e,t);return!0},pn=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},mn=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),hn(t)}},hn=e=>{e.type==V.CHILD&&(e._$AP??=dn,e._$AQ??=un)},gn=class extends ln{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),mn(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(fn(this,e),pn(this))}setValue(e){if(We(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}})))()}function vn(){return(vn=e((()=>{U(),F(),_n(),Ct(),Array.prototype.includes})))()}var W,yn;function bn(){return(bn=e((()=>{F(),cn(),vn(),{component:W,createContext:yn}=sn({render:Pe})})))()}function G(){return(G=e((()=>{bn(),cn(),Dt()})))()}function xn(){return(xn=e((()=>{G()})))()}var Sn;function Cn(){return(Cn=e((()=>{Sn=(e,...t)=>e.flatMap((e,n)=>[e,t[n]??``]).join(``)})))()}var wn;function Tn(){return(Tn=e((()=>{wn=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t}})))()}function En(){return(En=e((()=>{xn(),Cn(),Tn()})))()}var Dn,On;function kn(){return(kn=e((()=>{F(),_n(),U(),Dn=new WeakMap,On=H(class extends gn{render(e){return P}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),P}rt(e){if(this.G!==void 0){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=Dn.get(t);n===void 0&&(n=new WeakMap,Dn.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}}get lt(){return typeof this.G==`function`?Dn.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})))()}var An;function jn(){return(jn=e((()=>{G(),An=({host:e,popoverRef:t,disabled:n,openOnHover:r,openOnFocus:i,open:a,close:o})=>{let s=rn(),c=()=>clearTimeout(s.current),l=()=>{clearTimeout(s.current),s.current=setTimeout(()=>{let n=t.current;r&&(e.matches(`:hover`)||n?.matches(`:hover`))||e.matches(`:focus-within`)||n?.matches(`:focus-within`)||o()},100)},u=()=>{n||(c(),a())};return R(()=>{if(r&&!n)return e.addEventListener(`pointerenter`,u),e.addEventListener(`pointerleave`,l),()=>{c(),e.removeEventListener(`pointerenter`,u),e.removeEventListener(`pointerleave`,l)}},[r,n,e]),R(()=>{if(i&&!n)return e.addEventListener(`focusin`,u),e.addEventListener(`focusout`,l),()=>{c(),e.removeEventListener(`focusin`,u),e.removeEventListener(`focusout`,l)}},[i,n,e]),{scheduleClose:l,cancelClose:c}}})))()}var Mn,Nn,Pn;function Fn(){return(Fn=e((()=>{G(),F(),kn(),jn(),Mn=e=>{if(e.newState!==`open`)return;let t=e.target.querySelector(`slot:not([name])`)?.assignedElements({flatten:!0})??[];for(let e of t){let t=e.matches(`[autofocus]`)?e:e.querySelector(`[autofocus]`);if(t instanceof HTMLElement){t.focus();break}}},Nn=I`
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
`,Pn=e=>{let{placement:t=`bottom span-right`,disabled:n,passthrough:r,openOnHover:i,openOnFocus:a}=e,o=rn(),[s,c]=$t(`opened`,!1),l=B(()=>{n||(c(!0),o.current?.showPopover?.())},[n]),u=B(()=>{c(!1),o.current?.hidePopover?.()},[]),d=B(()=>{n||(o.current?.matches(`:popover-open`)?u():l())},[n]);R(()=>{let e=o.current;e&&(s?e.showPopover?.():e.hidePopover?.())},[s]),R(()=>{e.toggleAttribute(`opened`,!!s)},[s]);let{scheduleClose:f,cancelClose:p}=An({host:e,popoverRef:o,disabled:n,openOnHover:i,openOnFocus:a,open:l,close:u}),m=a?l:d,h=B(t=>{Mn(t),c(t.newState===`open`),e.dispatchEvent(new ToggleEvent(`dropdown-toggle`,{newState:t.newState,oldState:t.oldState,composed:!0}))},[]);return j`
		<slot name="button" @click=${m}></slot>
		${n&&r?j`<slot></slot>`:j`<div
					popover
					style="position-area: ${t}"
					@toggle=${h}
					@select=${u}
					@focusout=${f}
					@focusin=${p}
					${On(e=>e&&(o.current=e))}
				>
					<slot></slot>
				</div>`}
	`},customElements.define(`cosmoz-dropdown-next`,W(Pn,{styleSheets:[Nn],observedAttributes:[`placement`,`disabled`,`passthrough`,`open-on-hover`,`open-on-focus`],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}var K;function q(){return(q=e((()=>{F(),K=e=>e??P})))()}function J(e,t,n){return e?t(e):n?.(e)}function In(){return(In=e((()=>{})))()}function Ln(){return(Ln=e((()=>{F(),q()})))()}function Rn(){return(Rn=e((()=>{F(),q()})))()}function zn(){return(zn=e((()=>{F(),q()})))()}function Bn(){return(Bn=e((()=>{F(),q()})))()}function Vn(){return(Vn=e((()=>{F(),q()})))()}function Hn(){return(Hn=e((()=>{F(),q()})))()}function Un(){return(Un=e((()=>{F(),q()})))()}function Wn(){return(Wn=e((()=>{F(),q()})))()}function Gn(){return(Gn=e((()=>{F(),q()})))()}function Kn(){return(Kn=e((()=>{F(),q()})))()}function qn(){return(qn=e((()=>{F(),q()})))()}function Jn(){return(Jn=e((()=>{F(),q()})))()}function Yn(){return(Yn=e((()=>{F(),q()})))()}function Xn(){return(Xn=e((()=>{F(),q()})))()}function Zn(){return(Zn=e((()=>{F(),q()})))()}function Qn(){return(Qn=e((()=>{F(),q()})))()}function $n(){return($n=e((()=>{F(),q()})))()}function er(){return(er=e((()=>{F(),q()})))()}function tr(){return(tr=e((()=>{F(),q()})))()}function nr(){return(nr=e((()=>{F(),q()})))()}function rr(){return(rr=e((()=>{F(),q()})))()}function ir(){return(ir=e((()=>{F(),q()})))()}function ar(){return(ar=e((()=>{F(),q()})))()}function or(){return(or=e((()=>{F(),q()})))()}function sr(){return(sr=e((()=>{F(),q()})))()}function cr(){return(cr=e((()=>{F(),q()})))()}function lr(){return(lr=e((()=>{F(),q()})))()}function ur(){return(ur=e((()=>{F(),q()})))()}function dr(){return(dr=e((()=>{F(),q()})))()}function fr(){return(fr=e((()=>{F(),q()})))()}function pr(){return(pr=e((()=>{F(),q()})))()}function mr(){return(mr=e((()=>{F(),q()})))()}function hr(){return(hr=e((()=>{F(),q()})))()}function gr(){return(gr=e((()=>{F(),q()})))()}function _r(){return(_r=e((()=>{F(),q()})))()}function vr(){return(vr=e((()=>{F(),q()})))()}function yr(){return(yr=e((()=>{F(),q()})))()}function br(){return(br=e((()=>{F(),q()})))()}function xr(){return(xr=e((()=>{F(),q()})))()}function Sr(){return(Sr=e((()=>{F(),q()})))()}function Cr(){return(Cr=e((()=>{F(),q()})))()}function wr(){return(wr=e((()=>{F(),q()})))()}function Tr(){return(Tr=e((()=>{F(),q()})))()}function Er(){return(Er=e((()=>{F(),q()})))()}function Dr(){return(Dr=e((()=>{F(),q()})))()}function Or(){return(Or=e((()=>{F(),q()})))()}function kr(){return(kr=e((()=>{F(),q()})))()}function Ar(){return(Ar=e((()=>{F(),q()})))()}function jr(){return(jr=e((()=>{F(),q()})))()}function Mr(){return(Mr=e((()=>{F(),q()})))()}function Nr(){return(Nr=e((()=>{F(),q()})))()}function Pr(){return(Pr=e((()=>{F(),q()})))()}function Fr(){return(Fr=e((()=>{F(),q()})))()}function Ir(){return(Ir=e((()=>{F(),q()})))()}function Lr(){return(Lr=e((()=>{F(),q()})))()}function Rr(){return(Rr=e((()=>{F(),q()})))()}function zr(){return(zr=e((()=>{F(),q()})))()}function Br(){return(Br=e((()=>{F(),q()})))()}function Vr(){return(Vr=e((()=>{F(),q()})))()}function Hr(){return(Hr=e((()=>{F(),q()})))()}function Ur(){return(Ur=e((()=>{F(),q()})))()}function Wr(){return(Wr=e((()=>{F(),q()})))()}function Gr(){return(Gr=e((()=>{F(),q()})))()}function Kr(){return(Kr=e((()=>{F(),q()})))()}function qr(){return(qr=e((()=>{F(),q()})))()}function Jr(){return(Jr=e((()=>{F(),q()})))()}function Yr(){return(Yr=e((()=>{F(),q()})))()}function Xr(){return(Xr=e((()=>{F(),q()})))()}function Zr(){return(Zr=e((()=>{F(),q()})))()}function Qr(){return(Qr=e((()=>{F(),q()})))()}function $r(){return($r=e((()=>{F(),q()})))()}function ei(){return(ei=e((()=>{F(),q()})))()}function ti(){return(ti=e((()=>{F(),q()})))()}function ni(){return(ni=e((()=>{F(),q()})))()}function ri(){return(ri=e((()=>{F(),q()})))()}function ii(){return(ii=e((()=>{F(),q()})))()}function ai(){return(ai=e((()=>{F(),q()})))()}function oi(){return(oi=e((()=>{F(),q()})))()}function si(){return(si=e((()=>{F(),q()})))()}function ci(){return(ci=e((()=>{F(),q()})))()}function li(){return(li=e((()=>{F(),q()})))()}function ui(){return(ui=e((()=>{F(),q()})))()}function di(){return(di=e((()=>{F(),q()})))()}function fi(){return(fi=e((()=>{F(),q()})))()}function pi(){return(pi=e((()=>{F(),q()})))()}function mi(){return(mi=e((()=>{F(),q()})))()}function hi(){return(hi=e((()=>{F(),q()})))()}function gi(){return(gi=e((()=>{F(),q()})))()}function _i(){return(_i=e((()=>{F(),q()})))()}function vi(){return(vi=e((()=>{F(),q()})))()}function yi(){return(yi=e((()=>{F(),q()})))()}function bi(){return(bi=e((()=>{F(),q()})))()}function xi(){return(xi=e((()=>{F(),q()})))()}function Si(){return(Si=e((()=>{F(),q()})))()}function Ci(){return(Ci=e((()=>{F(),q()})))()}function wi(){return(wi=e((()=>{F(),q()})))()}function Ti(){return(Ti=e((()=>{F(),q()})))()}function Ei(){return(Ei=e((()=>{F(),q()})))()}function Di(){return(Di=e((()=>{F(),q()})))()}function Oi(){return(Oi=e((()=>{F(),q()})))()}function ki(){return(ki=e((()=>{F(),q()})))()}function Ai(){return(Ai=e((()=>{F(),q()})))()}function ji(){return(ji=e((()=>{F(),q()})))()}function Mi(){return(Mi=e((()=>{F(),q()})))()}function Ni(){return(Ni=e((()=>{F(),q()})))()}function Pi(){return(Pi=e((()=>{F(),q()})))()}function Fi(){return(Fi=e((()=>{F(),q()})))()}function Ii(){return(Ii=e((()=>{F(),q()})))()}function Li(){return(Li=e((()=>{F(),q()})))()}function Ri(){return(Ri=e((()=>{F(),q()})))()}function zi(){return(zi=e((()=>{F(),q()})))()}function Bi(){return(Bi=e((()=>{F(),q()})))()}function Vi(){return(Vi=e((()=>{F(),q()})))()}function Hi(){return(Hi=e((()=>{F(),q()})))()}function Ui(){return(Ui=e((()=>{F(),q()})))()}function Wi(){return(Wi=e((()=>{F(),q()})))()}function Gi(){return(Gi=e((()=>{F(),q()})))()}function Ki(){return(Ki=e((()=>{F(),q()})))()}function qi(){return(qi=e((()=>{F(),q()})))()}function Ji(){return(Ji=e((()=>{F(),q()})))()}function Yi(){return(Yi=e((()=>{F(),q()})))()}function Xi(){return(Xi=e((()=>{F(),q()})))()}function Zi(){return(Zi=e((()=>{F(),q()})))()}function Qi(){return(Qi=e((()=>{F(),q()})))()}function $i(){return($i=e((()=>{F(),q()})))()}function ea(){return(ea=e((()=>{F(),q()})))()}function ta(){return(ta=e((()=>{F(),q()})))()}function na(){return(na=e((()=>{F(),q()})))()}function ra(){return(ra=e((()=>{F(),q()})))()}function ia(){return(ia=e((()=>{F(),q()})))()}function aa(){return(aa=e((()=>{F(),q()})))()}function oa(){return(oa=e((()=>{F(),q()})))()}function sa(){return(sa=e((()=>{F(),q()})))()}function ca(){return(ca=e((()=>{F(),q()})))()}function la(){return(la=e((()=>{F(),q()})))()}function ua(){return(ua=e((()=>{F(),q()})))()}function da(){return(da=e((()=>{F(),q()})))()}function fa(){return(fa=e((()=>{F(),q()})))()}function pa(){return(pa=e((()=>{F(),q()})))()}function ma(){return(ma=e((()=>{F(),q()})))()}function ha(){return(ha=e((()=>{F(),q()})))()}function ga(){return(ga=e((()=>{F(),q()})))()}function _a(){return(_a=e((()=>{F(),q()})))()}function va(){return(va=e((()=>{F(),q()})))()}function ya(){return(ya=e((()=>{F(),q()})))()}function ba(){return(ba=e((()=>{F(),q()})))()}function xa(){return(xa=e((()=>{F(),q()})))()}function Sa(){return(Sa=e((()=>{F(),q()})))()}function Ca(){return(Ca=e((()=>{F(),q()})))()}function wa(){return(wa=e((()=>{F(),q()})))()}function Ta(){return(Ta=e((()=>{F(),q()})))()}function Ea(){return(Ea=e((()=>{F(),q()})))()}function Da(){return(Da=e((()=>{F(),q()})))()}function Oa(){return(Oa=e((()=>{F(),q()})))()}function ka(){return(ka=e((()=>{F(),q()})))()}function Aa(){return(Aa=e((()=>{F(),q()})))()}function ja(){return(ja=e((()=>{F(),q()})))()}function Ma(){return(Ma=e((()=>{F(),q()})))()}function Na(){return(Na=e((()=>{F(),q()})))()}function Pa(){return(Pa=e((()=>{F(),q()})))()}function Fa(){return(Fa=e((()=>{F(),q()})))()}function Ia(){return(Ia=e((()=>{F(),q()})))()}function La(){return(La=e((()=>{F(),q()})))()}function Ra(){return(Ra=e((()=>{F(),q()})))()}function za(){return(za=e((()=>{F(),q()})))()}function Ba(){return(Ba=e((()=>{F(),q()})))()}function Va(){return(Va=e((()=>{F(),q()})))()}function Ha(){return(Ha=e((()=>{F(),q()})))()}function Ua(){return(Ua=e((()=>{F(),q()})))()}function Wa(){return(Wa=e((()=>{F(),q()})))()}function Ga(){return(Ga=e((()=>{F(),q()})))()}function Ka(){return(Ka=e((()=>{F(),q()})))()}function qa(){return(qa=e((()=>{F(),q()})))()}function Ja(){return(Ja=e((()=>{F(),q()})))()}function Ya(){return(Ya=e((()=>{F(),q()})))()}function Xa(){return(Xa=e((()=>{F(),q()})))()}function Za(){return(Za=e((()=>{F(),q()})))()}function Qa(){return(Qa=e((()=>{F(),q()})))()}function $a(){return($a=e((()=>{F(),q()})))()}function eo(){return(eo=e((()=>{F(),q()})))()}function to(){return(to=e((()=>{F(),q()})))()}function no(){return(no=e((()=>{F(),q()})))()}function ro(){return(ro=e((()=>{F(),q()})))()}function io(){return(io=e((()=>{F(),q()})))()}function ao(){return(ao=e((()=>{F(),q()})))()}function oo(){return(oo=e((()=>{F(),q()})))()}function so(){return(so=e((()=>{F(),q()})))()}function co(){return(co=e((()=>{F(),q()})))()}function lo(){return(lo=e((()=>{F(),q()})))()}function uo(){return(uo=e((()=>{F(),q()})))()}function fo(){return(fo=e((()=>{F(),q()})))()}function po(){return(po=e((()=>{F(),q()})))()}function mo(){return(mo=e((()=>{F(),q()})))()}function ho(){return(ho=e((()=>{F(),q()})))()}function go(){return(go=e((()=>{F(),q()})))()}function _o(){return(_o=e((()=>{F(),q()})))()}function vo(){return(vo=e((()=>{F(),q()})))()}function yo(){return(yo=e((()=>{F(),q()})))()}function bo(){return(bo=e((()=>{F(),q()})))()}function xo(){return(xo=e((()=>{F(),q()})))()}function So(){return(So=e((()=>{F(),q()})))()}function Co(){return(Co=e((()=>{F(),q()})))()}function wo(){return(wo=e((()=>{F(),q()})))()}function To(){return(To=e((()=>{F(),q()})))()}function Eo(){return(Eo=e((()=>{F(),q()})))()}function Do(){return(Do=e((()=>{F(),q()})))()}function Oo(){return(Oo=e((()=>{F(),q()})))()}function ko(){return(ko=e((()=>{F(),q()})))()}function Ao(){return(Ao=e((()=>{F(),q()})))()}function jo(){return(jo=e((()=>{F(),q()})))()}function Mo(){return(Mo=e((()=>{F(),q()})))()}function No(){return(No=e((()=>{F(),q()})))()}function Po(){return(Po=e((()=>{F(),q()})))()}function Fo(){return(Fo=e((()=>{F(),q()})))()}function Io(){return(Io=e((()=>{F(),q()})))()}function Lo(){return(Lo=e((()=>{F(),q()})))()}function Ro(){return(Ro=e((()=>{F(),q()})))()}function zo(){return(zo=e((()=>{F(),q()})))()}function Bo(){return(Bo=e((()=>{F(),q()})))()}function Vo(){return(Vo=e((()=>{F(),q()})))()}function Ho(){return(Ho=e((()=>{F(),q()})))()}function Uo(){return(Uo=e((()=>{F(),q()})))()}function Wo(){return(Wo=e((()=>{F(),q()})))()}function Go(){return(Go=e((()=>{F(),q()})))()}function Ko(){return(Ko=e((()=>{F(),q()})))()}function qo(){return(qo=e((()=>{F(),q()})))()}function Jo(){return(Jo=e((()=>{F(),q()})))()}function Yo(){return(Yo=e((()=>{F(),q()})))()}function Xo(){return(Xo=e((()=>{F(),q()})))()}var Zo;function Qo(){return(Qo=e((()=>{F(),q(),Zo=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>j`
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
    ${J(t,()=>M`<title>${t}</title>`)}
    <path d="m6 9 6 6 6-6" />
  </svg>
`})))()}function $o(){return($o=e((()=>{F(),q()})))()}function es(){return(es=e((()=>{F(),q()})))()}function ts(){return(ts=e((()=>{F(),q()})))()}function ns(){return(ns=e((()=>{F(),q()})))()}function rs(){return(rs=e((()=>{F(),q()})))()}function is(){return(is=e((()=>{F(),q()})))()}var as;function os(){return(os=e((()=>{F(),q(),as=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>j`
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
    ${J(t,()=>M`<title>${t}</title>`)}
    <path d="m7 15 5 5 5-5M7 9l5-5 5 5" />
  </svg>
`})))()}function ss(){return(ss=e((()=>{F(),q()})))()}function cs(){return(cs=e((()=>{F(),q()})))()}function ls(){return(ls=e((()=>{F(),q()})))()}function us(){return(us=e((()=>{F(),q()})))()}function ds(){return(ds=e((()=>{F(),q()})))()}function fs(){return(fs=e((()=>{F(),q()})))()}function ps(){return(ps=e((()=>{F(),q()})))()}function ms(){return(ms=e((()=>{F(),q()})))()}function hs(){return(hs=e((()=>{F(),q()})))()}function gs(){return(gs=e((()=>{F(),q()})))()}function _s(){return(_s=e((()=>{F(),q()})))()}function vs(){return(vs=e((()=>{F(),q()})))()}function ys(){return(ys=e((()=>{F(),q()})))()}function bs(){return(bs=e((()=>{F(),q()})))()}function xs(){return(xs=e((()=>{F(),q()})))()}function Ss(){return(Ss=e((()=>{F(),q()})))()}function Cs(){return(Cs=e((()=>{F(),q()})))()}function ws(){return(ws=e((()=>{F(),q()})))()}function Ts(){return(Ts=e((()=>{F(),q()})))()}function Es(){return(Es=e((()=>{F(),q()})))()}function Ds(){return(Ds=e((()=>{F(),q()})))()}function Os(){return(Os=e((()=>{F(),q()})))()}function ks(){return(ks=e((()=>{F(),q()})))()}function As(){return(As=e((()=>{F(),q()})))()}function js(){return(js=e((()=>{F(),q()})))()}function Ms(){return(Ms=e((()=>{F(),q()})))()}function Ns(){return(Ns=e((()=>{F(),q()})))()}function Ps(){return(Ps=e((()=>{F(),q()})))()}function Fs(){return(Fs=e((()=>{F(),q()})))()}function Is(){return(Is=e((()=>{F(),q()})))()}function Ls(){return(Ls=e((()=>{F(),q()})))()}function Rs(){return(Rs=e((()=>{F(),q()})))()}function zs(){return(zs=e((()=>{F(),q()})))()}function Bs(){return(Bs=e((()=>{F(),q()})))()}function Vs(){return(Vs=e((()=>{F(),q()})))()}function Hs(){return(Hs=e((()=>{F(),q()})))()}function Us(){return(Us=e((()=>{F(),q()})))()}function Ws(){return(Ws=e((()=>{F(),q()})))()}function Gs(){return(Gs=e((()=>{F(),q()})))()}function Ks(){return(Ks=e((()=>{F(),q()})))()}function qs(){return(qs=e((()=>{F(),q()})))()}function Js(){return(Js=e((()=>{F(),q()})))()}function Ys(){return(Ys=e((()=>{F(),q()})))()}function Xs(){return(Xs=e((()=>{F(),q()})))()}function Zs(){return(Zs=e((()=>{F(),q()})))()}function Qs(){return(Qs=e((()=>{F(),q()})))()}function $s(){return($s=e((()=>{F(),q()})))()}function ec(){return(ec=e((()=>{F(),q()})))()}function tc(){return(tc=e((()=>{F(),q()})))()}function nc(){return(nc=e((()=>{F(),q()})))()}function rc(){return(rc=e((()=>{F(),q()})))()}function ic(){return(ic=e((()=>{F(),q()})))()}function ac(){return(ac=e((()=>{F(),q()})))()}function oc(){return(oc=e((()=>{F(),q()})))()}function sc(){return(sc=e((()=>{F(),q()})))()}function cc(){return(cc=e((()=>{F(),q()})))()}function lc(){return(lc=e((()=>{F(),q()})))()}function uc(){return(uc=e((()=>{F(),q()})))()}function dc(){return(dc=e((()=>{F(),q()})))()}function fc(){return(fc=e((()=>{F(),q()})))()}function pc(){return(pc=e((()=>{F(),q()})))()}function mc(){return(mc=e((()=>{F(),q()})))()}function hc(){return(hc=e((()=>{F(),q()})))()}function gc(){return(gc=e((()=>{F(),q()})))()}function _c(){return(_c=e((()=>{F(),q()})))()}function vc(){return(vc=e((()=>{F(),q()})))()}function yc(){return(yc=e((()=>{F(),q()})))()}function bc(){return(bc=e((()=>{F(),q()})))()}function xc(){return(xc=e((()=>{F(),q()})))()}function Sc(){return(Sc=e((()=>{F(),q()})))()}function Cc(){return(Cc=e((()=>{F(),q()})))()}function wc(){return(wc=e((()=>{F(),q()})))()}function Tc(){return(Tc=e((()=>{F(),q()})))()}function Ec(){return(Ec=e((()=>{F(),q()})))()}function Dc(){return(Dc=e((()=>{F(),q()})))()}function Oc(){return(Oc=e((()=>{F(),q()})))()}function kc(){return(kc=e((()=>{F(),q()})))()}function Ac(){return(Ac=e((()=>{F(),q()})))()}function jc(){return(jc=e((()=>{F(),q()})))()}function Mc(){return(Mc=e((()=>{F(),q()})))()}function Nc(){return(Nc=e((()=>{F(),q()})))()}function Pc(){return(Pc=e((()=>{F(),q()})))()}function Fc(){return(Fc=e((()=>{F(),q()})))()}function Ic(){return(Ic=e((()=>{F(),q()})))()}function Lc(){return(Lc=e((()=>{F(),q()})))()}function Rc(){return(Rc=e((()=>{F(),q()})))()}function zc(){return(zc=e((()=>{F(),q()})))()}function Bc(){return(Bc=e((()=>{F(),q()})))()}function Vc(){return(Vc=e((()=>{F(),q()})))()}function Hc(){return(Hc=e((()=>{F(),q()})))()}function Uc(){return(Uc=e((()=>{F(),q()})))()}function Wc(){return(Wc=e((()=>{F(),q()})))()}function Gc(){return(Gc=e((()=>{F(),q()})))()}function Kc(){return(Kc=e((()=>{F(),q()})))()}function qc(){return(qc=e((()=>{F(),q()})))()}function Jc(){return(Jc=e((()=>{F(),q()})))()}function Yc(){return(Yc=e((()=>{F(),q()})))()}function Xc(){return(Xc=e((()=>{F(),q()})))()}function Zc(){return(Zc=e((()=>{F(),q()})))()}function Qc(){return(Qc=e((()=>{F(),q()})))()}function $c(){return($c=e((()=>{F(),q()})))()}function el(){return(el=e((()=>{F(),q()})))()}function tl(){return(tl=e((()=>{F(),q()})))()}function nl(){return(nl=e((()=>{F(),q()})))()}function rl(){return(rl=e((()=>{F(),q()})))()}function il(){return(il=e((()=>{F(),q()})))()}function al(){return(al=e((()=>{F(),q()})))()}function ol(){return(ol=e((()=>{F(),q()})))()}function sl(){return(sl=e((()=>{F(),q()})))()}function cl(){return(cl=e((()=>{F(),q()})))()}function ll(){return(ll=e((()=>{F(),q()})))()}function ul(){return(ul=e((()=>{F(),q()})))()}function dl(){return(dl=e((()=>{F(),q()})))()}function fl(){return(fl=e((()=>{F(),q()})))()}function pl(){return(pl=e((()=>{F(),q()})))()}function ml(){return(ml=e((()=>{F(),q()})))()}function hl(){return(hl=e((()=>{F(),q()})))()}function gl(){return(gl=e((()=>{F(),q()})))()}function _l(){return(_l=e((()=>{F(),q()})))()}function vl(){return(vl=e((()=>{F(),q()})))()}function yl(){return(yl=e((()=>{F(),q()})))()}function bl(){return(bl=e((()=>{F(),q()})))()}function xl(){return(xl=e((()=>{F(),q()})))()}function Sl(){return(Sl=e((()=>{F(),q()})))()}function Cl(){return(Cl=e((()=>{F(),q()})))()}function wl(){return(wl=e((()=>{F(),q()})))()}function Tl(){return(Tl=e((()=>{F(),q()})))()}function El(){return(El=e((()=>{F(),q()})))()}function Dl(){return(Dl=e((()=>{F(),q()})))()}function Ol(){return(Ol=e((()=>{F(),q()})))()}function kl(){return(kl=e((()=>{F(),q()})))()}function Al(){return(Al=e((()=>{F(),q()})))()}function jl(){return(jl=e((()=>{F(),q()})))()}function Ml(){return(Ml=e((()=>{F(),q()})))()}function Nl(){return(Nl=e((()=>{F(),q()})))()}function Pl(){return(Pl=e((()=>{F(),q()})))()}function Fl(){return(Fl=e((()=>{F(),q()})))()}function Il(){return(Il=e((()=>{F(),q()})))()}function Ll(){return(Ll=e((()=>{F(),q()})))()}function Rl(){return(Rl=e((()=>{F(),q()})))()}function zl(){return(zl=e((()=>{F(),q()})))()}function Bl(){return(Bl=e((()=>{F(),q()})))()}function Vl(){return(Vl=e((()=>{F(),q()})))()}function Hl(){return(Hl=e((()=>{F(),q()})))()}function Ul(){return(Ul=e((()=>{F(),q()})))()}function Wl(){return(Wl=e((()=>{F(),q()})))()}function Gl(){return(Gl=e((()=>{F(),q()})))()}function Kl(){return(Kl=e((()=>{F(),q()})))()}function ql(){return(ql=e((()=>{F(),q()})))()}function Jl(){return(Jl=e((()=>{F(),q()})))()}function Yl(){return(Yl=e((()=>{F(),q()})))()}function Xl(){return(Xl=e((()=>{F(),q()})))()}function Zl(){return(Zl=e((()=>{F(),q()})))()}function Ql(){return(Ql=e((()=>{F(),q()})))()}function $l(){return($l=e((()=>{F(),q()})))()}function eu(){return(eu=e((()=>{F(),q()})))()}function tu(){return(tu=e((()=>{F(),q()})))()}function nu(){return(nu=e((()=>{F(),q()})))()}function ru(){return(ru=e((()=>{F(),q()})))()}function iu(){return(iu=e((()=>{F(),q()})))()}function au(){return(au=e((()=>{F(),q()})))()}function ou(){return(ou=e((()=>{F(),q()})))()}function su(){return(su=e((()=>{F(),q()})))()}function cu(){return(cu=e((()=>{F(),q()})))()}function lu(){return(lu=e((()=>{F(),q()})))()}function uu(){return(uu=e((()=>{F(),q()})))()}function du(){return(du=e((()=>{F(),q()})))()}function fu(){return(fu=e((()=>{F(),q()})))()}function pu(){return(pu=e((()=>{F(),q()})))()}function mu(){return(mu=e((()=>{F(),q()})))()}function hu(){return(hu=e((()=>{F(),q()})))()}var gu;function _u(){return(_u=e((()=>{F(),q(),gu=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>j`
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
    ${J(t,()=>M`<title>${t}</title>`)}
    <path
      d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
  </svg>
`})))()}var vu;function yu(){return(yu=e((()=>{F(),q(),vu=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>j`
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
    ${J(t,()=>M`<title>${t}</title>`)}
    <path
      d="M21 15v1.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V15m14-5-5 5m0 0-5-5m5 5V3"
    />
  </svg>
`})))()}function bu(){return(bu=e((()=>{F(),q()})))()}function xu(){return(xu=e((()=>{F(),q()})))()}function Su(){return(Su=e((()=>{F(),q()})))()}function Cu(){return(Cu=e((()=>{F(),q()})))()}function wu(){return(wu=e((()=>{F(),q()})))()}function Tu(){return(Tu=e((()=>{F(),q()})))()}function Eu(){return(Eu=e((()=>{F(),q()})))()}function Du(){return(Du=e((()=>{F(),q()})))()}function Ou(){return(Ou=e((()=>{F(),q()})))()}function ku(){return(ku=e((()=>{F(),q()})))()}function Au(){return(Au=e((()=>{F(),q()})))()}function ju(){return(ju=e((()=>{F(),q()})))()}function Mu(){return(Mu=e((()=>{F(),q()})))()}function Nu(){return(Nu=e((()=>{F(),q()})))()}function Pu(){return(Pu=e((()=>{F(),q()})))()}var Fu;function Iu(){return(Iu=e((()=>{F(),q(),Fu=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>j`
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
    ${J(t,()=>M`<title>${t}</title>`)}
    <path d="M5 9h14M5 15h14" />
  </svg>
`})))()}function Lu(){return(Lu=e((()=>{F(),q()})))()}function Ru(){return(Ru=e((()=>{F(),q()})))()}function zu(){return(zu=e((()=>{F(),q()})))()}function Bu(){return(Bu=e((()=>{F(),q()})))()}function Vu(){return(Vu=e((()=>{F(),q()})))()}function Hu(){return(Hu=e((()=>{F(),q()})))()}function Uu(){return(Uu=e((()=>{F(),q()})))()}function Wu(){return(Wu=e((()=>{F(),q()})))()}function Gu(){return(Gu=e((()=>{F(),q()})))()}function Ku(){return(Ku=e((()=>{F(),q()})))()}function qu(){return(qu=e((()=>{F(),q()})))()}function Ju(){return(Ju=e((()=>{F(),q()})))()}function Yu(){return(Yu=e((()=>{F(),q()})))()}function Xu(){return(Xu=e((()=>{F(),q()})))()}function Zu(){return(Zu=e((()=>{F(),q()})))()}function Qu(){return(Qu=e((()=>{F(),q()})))()}function $u(){return($u=e((()=>{F(),q()})))()}function ed(){return(ed=e((()=>{F(),q()})))()}function td(){return(td=e((()=>{F(),q()})))()}function nd(){return(nd=e((()=>{F(),q()})))()}function rd(){return(rd=e((()=>{F(),q()})))()}function id(){return(id=e((()=>{F(),q()})))()}function ad(){return(ad=e((()=>{F(),q()})))()}function od(){return(od=e((()=>{F(),q()})))()}function sd(){return(sd=e((()=>{F(),q()})))()}function cd(){return(cd=e((()=>{F(),q()})))()}function ld(){return(ld=e((()=>{F(),q()})))()}function ud(){return(ud=e((()=>{F(),q()})))()}function dd(){return(dd=e((()=>{F(),q()})))()}function fd(){return(fd=e((()=>{F(),q()})))()}function pd(){return(pd=e((()=>{F(),q()})))()}function md(){return(md=e((()=>{F(),q()})))()}function hd(){return(hd=e((()=>{F(),q()})))()}function gd(){return(gd=e((()=>{F(),q()})))()}function _d(){return(_d=e((()=>{F(),q()})))()}function vd(){return(vd=e((()=>{F(),q()})))()}function yd(){return(yd=e((()=>{F(),q()})))()}function bd(){return(bd=e((()=>{F(),q()})))()}function xd(){return(xd=e((()=>{F(),q()})))()}function Sd(){return(Sd=e((()=>{F(),q()})))()}function Cd(){return(Cd=e((()=>{F(),q()})))()}function wd(){return(wd=e((()=>{F(),q()})))()}function Td(){return(Td=e((()=>{F(),q()})))()}function Ed(){return(Ed=e((()=>{F(),q()})))()}function Dd(){return(Dd=e((()=>{F(),q()})))()}function Od(){return(Od=e((()=>{F(),q()})))()}function kd(){return(kd=e((()=>{F(),q()})))()}function Ad(){return(Ad=e((()=>{F(),q()})))()}function jd(){return(jd=e((()=>{F(),q()})))()}function Md(){return(Md=e((()=>{F(),q()})))()}function Nd(){return(Nd=e((()=>{F(),q()})))()}function Pd(){return(Pd=e((()=>{F(),q()})))()}function Fd(){return(Fd=e((()=>{F(),q()})))()}function Id(){return(Id=e((()=>{F(),q()})))()}function Ld(){return(Ld=e((()=>{F(),q()})))()}function Rd(){return(Rd=e((()=>{F(),q()})))()}function zd(){return(zd=e((()=>{F(),q()})))()}function Bd(){return(Bd=e((()=>{F(),q()})))()}function Vd(){return(Vd=e((()=>{F(),q()})))()}function Hd(){return(Hd=e((()=>{F(),q()})))()}function Ud(){return(Ud=e((()=>{F(),q()})))()}function Wd(){return(Wd=e((()=>{F(),q()})))()}function Gd(){return(Gd=e((()=>{F(),q()})))()}function Kd(){return(Kd=e((()=>{F(),q()})))()}function qd(){return(qd=e((()=>{F(),q()})))()}function Jd(){return(Jd=e((()=>{F(),q()})))()}function Yd(){return(Yd=e((()=>{F(),q()})))()}function Xd(){return(Xd=e((()=>{F(),q()})))()}function Zd(){return(Zd=e((()=>{F(),q()})))()}function Qd(){return(Qd=e((()=>{F(),q()})))()}function $d(){return($d=e((()=>{F(),q()})))()}function ef(){return(ef=e((()=>{F(),q()})))()}function tf(){return(tf=e((()=>{F(),q()})))()}function nf(){return(nf=e((()=>{F(),q()})))()}function rf(){return(rf=e((()=>{F(),q()})))()}function af(){return(af=e((()=>{F(),q()})))()}function of(){return(of=e((()=>{F(),q()})))()}function sf(){return(sf=e((()=>{F(),q()})))()}function cf(){return(cf=e((()=>{F(),q()})))()}function lf(){return(lf=e((()=>{F(),q()})))()}function uf(){return(uf=e((()=>{F(),q()})))()}function df(){return(df=e((()=>{F(),q()})))()}function ff(){return(ff=e((()=>{F(),q()})))()}function pf(){return(pf=e((()=>{F(),q()})))()}function mf(){return(mf=e((()=>{F(),q()})))()}function hf(){return(hf=e((()=>{F(),q()})))()}function gf(){return(gf=e((()=>{F(),q()})))()}function _f(){return(_f=e((()=>{F(),q()})))()}function vf(){return(vf=e((()=>{F(),q()})))()}function yf(){return(yf=e((()=>{F(),q()})))()}function bf(){return(bf=e((()=>{F(),q()})))()}function xf(){return(xf=e((()=>{F(),q()})))()}function Sf(){return(Sf=e((()=>{F(),q()})))()}function Cf(){return(Cf=e((()=>{F(),q()})))()}function wf(){return(wf=e((()=>{F(),q()})))()}function Tf(){return(Tf=e((()=>{F(),q()})))()}function Ef(){return(Ef=e((()=>{F(),q()})))()}function Df(){return(Df=e((()=>{F(),q()})))()}function Of(){return(Of=e((()=>{F(),q()})))()}function kf(){return(kf=e((()=>{F(),q()})))()}function Af(){return(Af=e((()=>{F(),q()})))()}function jf(){return(jf=e((()=>{F(),q()})))()}function Mf(){return(Mf=e((()=>{F(),q()})))()}function Nf(){return(Nf=e((()=>{F(),q()})))()}function Pf(){return(Pf=e((()=>{F(),q()})))()}function Ff(){return(Ff=e((()=>{F(),q()})))()}function If(){return(If=e((()=>{F(),q()})))()}function Lf(){return(Lf=e((()=>{F(),q()})))()}function Rf(){return(Rf=e((()=>{F(),q()})))()}function zf(){return(zf=e((()=>{F(),q()})))()}function Bf(){return(Bf=e((()=>{F(),q()})))()}function Vf(){return(Vf=e((()=>{F(),q()})))()}function Hf(){return(Hf=e((()=>{F(),q()})))()}function Uf(){return(Uf=e((()=>{F(),q()})))()}function Wf(){return(Wf=e((()=>{F(),q()})))()}function Gf(){return(Gf=e((()=>{F(),q()})))()}function Kf(){return(Kf=e((()=>{F(),q()})))()}function qf(){return(qf=e((()=>{F(),q()})))()}function Jf(){return(Jf=e((()=>{F(),q()})))()}function Yf(){return(Yf=e((()=>{F(),q()})))()}function Xf(){return(Xf=e((()=>{F(),q()})))()}function Zf(){return(Zf=e((()=>{F(),q()})))()}function Qf(){return(Qf=e((()=>{F(),q()})))()}function $f(){return($f=e((()=>{F(),q()})))()}function ep(){return(ep=e((()=>{F(),q()})))()}function tp(){return(tp=e((()=>{F(),q()})))()}function np(){return(np=e((()=>{F(),q()})))()}function rp(){return(rp=e((()=>{F(),q()})))()}function ip(){return(ip=e((()=>{F(),q()})))()}function ap(){return(ap=e((()=>{F(),q()})))()}function op(){return(op=e((()=>{F(),q()})))()}function sp(){return(sp=e((()=>{F(),q()})))()}function cp(){return(cp=e((()=>{F(),q()})))()}function lp(){return(lp=e((()=>{F(),q()})))()}function up(){return(up=e((()=>{F(),q()})))()}function dp(){return(dp=e((()=>{F(),q()})))()}function fp(){return(fp=e((()=>{F(),q()})))()}function pp(){return(pp=e((()=>{F(),q()})))()}function mp(){return(mp=e((()=>{F(),q()})))()}function hp(){return(hp=e((()=>{F(),q()})))()}function gp(){return(gp=e((()=>{F(),q()})))()}function _p(){return(_p=e((()=>{F(),q()})))()}function vp(){return(vp=e((()=>{F(),q()})))()}function yp(){return(yp=e((()=>{F(),q()})))()}function bp(){return(bp=e((()=>{F(),q()})))()}function xp(){return(xp=e((()=>{F(),q()})))()}function Sp(){return(Sp=e((()=>{F(),q()})))()}function Cp(){return(Cp=e((()=>{F(),q()})))()}function wp(){return(wp=e((()=>{F(),q()})))()}function Tp(){return(Tp=e((()=>{F(),q()})))()}function Ep(){return(Ep=e((()=>{F(),q()})))()}function Dp(){return(Dp=e((()=>{F(),q()})))()}function Op(){return(Op=e((()=>{F(),q()})))()}function kp(){return(kp=e((()=>{F(),q()})))()}function Ap(){return(Ap=e((()=>{F(),q()})))()}function jp(){return(jp=e((()=>{F(),q()})))()}function Mp(){return(Mp=e((()=>{F(),q()})))()}function Np(){return(Np=e((()=>{F(),q()})))()}function Pp(){return(Pp=e((()=>{F(),q()})))()}function Fp(){return(Fp=e((()=>{F(),q()})))()}function Ip(){return(Ip=e((()=>{F(),q()})))()}function Lp(){return(Lp=e((()=>{F(),q()})))()}function Rp(){return(Rp=e((()=>{F(),q()})))()}function zp(){return(zp=e((()=>{F(),q()})))()}function Bp(){return(Bp=e((()=>{F(),q()})))()}function Vp(){return(Vp=e((()=>{F(),q()})))()}function Hp(){return(Hp=e((()=>{F(),q()})))()}function Up(){return(Up=e((()=>{F(),q()})))()}function Wp(){return(Wp=e((()=>{F(),q()})))()}function Gp(){return(Gp=e((()=>{F(),q()})))()}function Kp(){return(Kp=e((()=>{F(),q()})))()}function qp(){return(qp=e((()=>{F(),q()})))()}function Jp(){return(Jp=e((()=>{F(),q()})))()}function Yp(){return(Yp=e((()=>{F(),q()})))()}function Xp(){return(Xp=e((()=>{F(),q()})))()}function Zp(){return(Zp=e((()=>{F(),q()})))()}function Qp(){return(Qp=e((()=>{F(),q()})))()}function $p(){return($p=e((()=>{F(),q()})))()}function em(){return(em=e((()=>{F(),q()})))()}function tm(){return(tm=e((()=>{F(),q()})))()}function nm(){return(nm=e((()=>{F(),q()})))()}function rm(){return(rm=e((()=>{F(),q()})))()}function im(){return(im=e((()=>{F(),q()})))()}function am(){return(am=e((()=>{F(),q()})))()}function om(){return(om=e((()=>{F(),q()})))()}function sm(){return(sm=e((()=>{F(),q()})))()}function cm(){return(cm=e((()=>{F(),q()})))()}function lm(){return(lm=e((()=>{F(),q()})))()}function um(){return(um=e((()=>{F(),q()})))()}function dm(){return(dm=e((()=>{F(),q()})))()}function fm(){return(fm=e((()=>{F(),q()})))()}function pm(){return(pm=e((()=>{F(),q()})))()}function mm(){return(mm=e((()=>{F(),q()})))()}function hm(){return(hm=e((()=>{F(),q()})))()}function gm(){return(gm=e((()=>{F(),q()})))()}function _m(){return(_m=e((()=>{F(),q()})))()}function vm(){return(vm=e((()=>{F(),q()})))()}function ym(){return(ym=e((()=>{F(),q()})))()}function bm(){return(bm=e((()=>{F(),q()})))()}function xm(){return(xm=e((()=>{F(),q()})))()}function Sm(){return(Sm=e((()=>{F(),q()})))()}var Cm;function wm(){return(wm=e((()=>{F(),q(),Cm=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>j`
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
    ${J(t,()=>M`<title>${t}</title>`)}
    <path
      d="M12 16v-4m0-4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
`})))()}function Tm(){return(Tm=e((()=>{F(),q()})))()}function Em(){return(Em=e((()=>{F(),q()})))()}function Dm(){return(Dm=e((()=>{F(),q()})))()}function Om(){return(Om=e((()=>{F(),q()})))()}function km(){return(km=e((()=>{F(),q()})))()}function Am(){return(Am=e((()=>{F(),q()})))()}function jm(){return(jm=e((()=>{F(),q()})))()}function Mm(){return(Mm=e((()=>{F(),q()})))()}function Nm(){return(Nm=e((()=>{F(),q()})))()}function Pm(){return(Pm=e((()=>{F(),q()})))()}function Fm(){return(Fm=e((()=>{F(),q()})))()}function Im(){return(Im=e((()=>{F(),q()})))()}function Lm(){return(Lm=e((()=>{F(),q()})))()}function Rm(){return(Rm=e((()=>{F(),q()})))()}function zm(){return(zm=e((()=>{F(),q()})))()}function Bm(){return(Bm=e((()=>{F(),q()})))()}function Vm(){return(Vm=e((()=>{F(),q()})))()}function Hm(){return(Hm=e((()=>{F(),q()})))()}function Um(){return(Um=e((()=>{F(),q()})))()}function Wm(){return(Wm=e((()=>{F(),q()})))()}function Gm(){return(Gm=e((()=>{F(),q()})))()}function Km(){return(Km=e((()=>{F(),q()})))()}function qm(){return(qm=e((()=>{F(),q()})))()}function Jm(){return(Jm=e((()=>{F(),q()})))()}function Ym(){return(Ym=e((()=>{F(),q()})))()}function Xm(){return(Xm=e((()=>{F(),q()})))()}function Zm(){return(Zm=e((()=>{F(),q()})))()}function Qm(){return(Qm=e((()=>{F(),q()})))()}function $m(){return($m=e((()=>{F(),q()})))()}function eh(){return(eh=e((()=>{F(),q()})))()}function th(){return(th=e((()=>{F(),q()})))()}function nh(){return(nh=e((()=>{F(),q()})))()}function rh(){return(rh=e((()=>{F(),q()})))()}function ih(){return(ih=e((()=>{F(),q()})))()}function ah(){return(ah=e((()=>{F(),q()})))()}function oh(){return(oh=e((()=>{F(),q()})))()}function sh(){return(sh=e((()=>{F(),q()})))()}function ch(){return(ch=e((()=>{F(),q()})))()}function lh(){return(lh=e((()=>{F(),q()})))()}function uh(){return(uh=e((()=>{F(),q()})))()}function dh(){return(dh=e((()=>{F(),q()})))()}function fh(){return(fh=e((()=>{F(),q()})))()}function ph(){return(ph=e((()=>{F(),q()})))()}function mh(){return(mh=e((()=>{F(),q()})))()}function hh(){return(hh=e((()=>{F(),q()})))()}function gh(){return(gh=e((()=>{F(),q()})))()}function _h(){return(_h=e((()=>{F(),q()})))()}function vh(){return(vh=e((()=>{F(),q()})))()}function yh(){return(yh=e((()=>{F(),q()})))()}function bh(){return(bh=e((()=>{F(),q()})))()}function xh(){return(xh=e((()=>{F(),q()})))()}function Sh(){return(Sh=e((()=>{F(),q()})))()}function Ch(){return(Ch=e((()=>{F(),q()})))()}function wh(){return(wh=e((()=>{F(),q()})))()}function Th(){return(Th=e((()=>{F(),q()})))()}function Eh(){return(Eh=e((()=>{F(),q()})))()}function Dh(){return(Dh=e((()=>{F(),q()})))()}function Oh(){return(Oh=e((()=>{F(),q()})))()}function kh(){return(kh=e((()=>{F(),q()})))()}function Ah(){return(Ah=e((()=>{F(),q()})))()}function jh(){return(jh=e((()=>{F(),q()})))()}function Mh(){return(Mh=e((()=>{F(),q()})))()}function Nh(){return(Nh=e((()=>{F(),q()})))()}function Ph(){return(Ph=e((()=>{F(),q()})))()}function Fh(){return(Fh=e((()=>{F(),q()})))()}function Ih(){return(Ih=e((()=>{F(),q()})))()}function Lh(){return(Lh=e((()=>{F(),q()})))()}function Rh(){return(Rh=e((()=>{F(),q()})))()}function zh(){return(zh=e((()=>{F(),q()})))()}function Bh(){return(Bh=e((()=>{F(),q()})))()}function Vh(){return(Vh=e((()=>{F(),q()})))()}function Hh(){return(Hh=e((()=>{F(),q()})))()}function Uh(){return(Uh=e((()=>{F(),q()})))()}function Wh(){return(Wh=e((()=>{F(),q()})))()}function Gh(){return(Gh=e((()=>{F(),q()})))()}function Kh(){return(Kh=e((()=>{F(),q()})))()}function qh(){return(qh=e((()=>{F(),q()})))()}function Jh(){return(Jh=e((()=>{F(),q()})))()}function Yh(){return(Yh=e((()=>{F(),q()})))()}function Xh(){return(Xh=e((()=>{F(),q()})))()}function Zh(){return(Zh=e((()=>{F(),q()})))()}function Qh(){return(Qh=e((()=>{F(),q()})))()}function $h(){return($h=e((()=>{F(),q()})))()}function eg(){return(eg=e((()=>{F(),q()})))()}function tg(){return(tg=e((()=>{F(),q()})))()}function ng(){return(ng=e((()=>{F(),q()})))()}function rg(){return(rg=e((()=>{F(),q()})))()}function ig(){return(ig=e((()=>{F(),q()})))()}function ag(){return(ag=e((()=>{F(),q()})))()}function og(){return(og=e((()=>{F(),q()})))()}function sg(){return(sg=e((()=>{F(),q()})))()}function cg(){return(cg=e((()=>{F(),q()})))()}function lg(){return(lg=e((()=>{F(),q()})))()}function ug(){return(ug=e((()=>{F(),q()})))()}function dg(){return(dg=e((()=>{F(),q()})))()}function fg(){return(fg=e((()=>{F(),q()})))()}function pg(){return(pg=e((()=>{F(),q()})))()}function mg(){return(mg=e((()=>{F(),q()})))()}function hg(){return(hg=e((()=>{F(),q()})))()}function gg(){return(gg=e((()=>{F(),q()})))()}function _g(){return(_g=e((()=>{F(),q()})))()}function vg(){return(vg=e((()=>{F(),q()})))()}function yg(){return(yg=e((()=>{F(),q()})))()}function bg(){return(bg=e((()=>{F(),q()})))()}function xg(){return(xg=e((()=>{F(),q()})))()}function Sg(){return(Sg=e((()=>{F(),q()})))()}function Cg(){return(Cg=e((()=>{F(),q()})))()}function wg(){return(wg=e((()=>{F(),q()})))()}function Tg(){return(Tg=e((()=>{F(),q()})))()}function Eg(){return(Eg=e((()=>{F(),q()})))()}function Dg(){return(Dg=e((()=>{F(),q()})))()}function Og(){return(Og=e((()=>{F(),q()})))()}function kg(){return(kg=e((()=>{F(),q()})))()}function Ag(){return(Ag=e((()=>{F(),q()})))()}function jg(){return(jg=e((()=>{F(),q()})))()}function Mg(){return(Mg=e((()=>{F(),q()})))()}function Ng(){return(Ng=e((()=>{F(),q()})))()}function Pg(){return(Pg=e((()=>{F(),q()})))()}function Fg(){return(Fg=e((()=>{F(),q()})))()}function Ig(){return(Ig=e((()=>{F(),q()})))()}function Lg(){return(Lg=e((()=>{F(),q()})))()}function Rg(){return(Rg=e((()=>{F(),q()})))()}function zg(){return(zg=e((()=>{F(),q()})))()}function Bg(){return(Bg=e((()=>{F(),q()})))()}function Vg(){return(Vg=e((()=>{F(),q()})))()}function Hg(){return(Hg=e((()=>{F(),q()})))()}function Ug(){return(Ug=e((()=>{F(),q()})))()}function Wg(){return(Wg=e((()=>{F(),q()})))()}function Gg(){return(Gg=e((()=>{F(),q()})))()}function Kg(){return(Kg=e((()=>{F(),q()})))()}function qg(){return(qg=e((()=>{F(),q()})))()}function Jg(){return(Jg=e((()=>{F(),q()})))()}function Yg(){return(Yg=e((()=>{F(),q()})))()}function Xg(){return(Xg=e((()=>{F(),q()})))()}function Zg(){return(Zg=e((()=>{F(),q()})))()}function Qg(){return(Qg=e((()=>{F(),q()})))()}function $g(){return($g=e((()=>{F(),q()})))()}function e_(){return(e_=e((()=>{F(),q()})))()}function t_(){return(t_=e((()=>{F(),q()})))()}function n_(){return(n_=e((()=>{F(),q()})))()}function r_(){return(r_=e((()=>{F(),q()})))()}function i_(){return(i_=e((()=>{F(),q()})))()}function a_(){return(a_=e((()=>{F(),q()})))()}function o_(){return(o_=e((()=>{F(),q()})))()}function s_(){return(s_=e((()=>{F(),q()})))()}function c_(){return(c_=e((()=>{F(),q()})))()}function l_(){return(l_=e((()=>{F(),q()})))()}function u_(){return(u_=e((()=>{F(),q()})))()}function d_(){return(d_=e((()=>{F(),q()})))()}function f_(){return(f_=e((()=>{F(),q()})))()}function p_(){return(p_=e((()=>{F(),q()})))()}function m_(){return(m_=e((()=>{F(),q()})))()}function h_(){return(h_=e((()=>{F(),q()})))()}function g_(){return(g_=e((()=>{F(),q()})))()}function __(){return(__=e((()=>{F(),q()})))()}function v_(){return(v_=e((()=>{F(),q()})))()}function y_(){return(y_=e((()=>{F(),q()})))()}function b_(){return(b_=e((()=>{F(),q()})))()}function x_(){return(x_=e((()=>{F(),q()})))()}function S_(){return(S_=e((()=>{F(),q()})))()}function C_(){return(C_=e((()=>{F(),q()})))()}function w_(){return(w_=e((()=>{F(),q()})))()}function T_(){return(T_=e((()=>{F(),q()})))()}function E_(){return(E_=e((()=>{F(),q()})))()}function D_(){return(D_=e((()=>{F(),q()})))()}function O_(){return(O_=e((()=>{F(),q()})))()}function k_(){return(k_=e((()=>{F(),q()})))()}function A_(){return(A_=e((()=>{F(),q()})))()}function j_(){return(j_=e((()=>{F(),q()})))()}function M_(){return(M_=e((()=>{F(),q()})))()}function N_(){return(N_=e((()=>{F(),q()})))()}function P_(){return(P_=e((()=>{F(),q()})))()}function F_(){return(F_=e((()=>{F(),q()})))()}function I_(){return(I_=e((()=>{F(),q()})))()}function L_(){return(L_=e((()=>{F(),q()})))()}function R_(){return(R_=e((()=>{F(),q()})))()}function z_(){return(z_=e((()=>{F(),q()})))()}function B_(){return(B_=e((()=>{F(),q()})))()}function V_(){return(V_=e((()=>{F(),q()})))()}function H_(){return(H_=e((()=>{F(),q()})))()}function U_(){return(U_=e((()=>{F(),q()})))()}function W_(){return(W_=e((()=>{F(),q()})))()}function G_(){return(G_=e((()=>{F(),q()})))()}function K_(){return(K_=e((()=>{F(),q()})))()}function q_(){return(q_=e((()=>{F(),q()})))()}function J_(){return(J_=e((()=>{F(),q()})))()}function Y_(){return(Y_=e((()=>{F(),q()})))()}function X_(){return(X_=e((()=>{F(),q()})))()}function Z_(){return(Z_=e((()=>{F(),q()})))()}function Q_(){return(Q_=e((()=>{F(),q()})))()}function $_(){return($_=e((()=>{F(),q()})))()}function ev(){return(ev=e((()=>{F(),q()})))()}function tv(){return(tv=e((()=>{F(),q()})))()}function nv(){return(nv=e((()=>{F(),q()})))()}function rv(){return(rv=e((()=>{F(),q()})))()}function iv(){return(iv=e((()=>{F(),q()})))()}function av(){return(av=e((()=>{F(),q()})))()}function ov(){return(ov=e((()=>{F(),q()})))()}function sv(){return(sv=e((()=>{F(),q()})))()}function cv(){return(cv=e((()=>{F(),q()})))()}function lv(){return(lv=e((()=>{F(),q()})))()}function uv(){return(uv=e((()=>{F(),q()})))()}function dv(){return(dv=e((()=>{F(),q()})))()}function fv(){return(fv=e((()=>{F(),q()})))()}function pv(){return(pv=e((()=>{F(),q()})))()}function mv(){return(mv=e((()=>{F(),q()})))()}function hv(){return(hv=e((()=>{F(),q()})))()}function gv(){return(gv=e((()=>{F(),q()})))()}function _v(){return(_v=e((()=>{F(),q()})))()}function vv(){return(vv=e((()=>{F(),q()})))()}function yv(){return(yv=e((()=>{F(),q()})))()}function bv(){return(bv=e((()=>{F(),q()})))()}function xv(){return(xv=e((()=>{F(),q()})))()}function Sv(){return(Sv=e((()=>{F(),q()})))()}function Cv(){return(Cv=e((()=>{F(),q()})))()}function wv(){return(wv=e((()=>{F(),q()})))()}function Tv(){return(Tv=e((()=>{F(),q()})))()}function Ev(){return(Ev=e((()=>{F(),q()})))()}function Dv(){return(Dv=e((()=>{F(),q()})))()}function Ov(){return(Ov=e((()=>{F(),q()})))()}function kv(){return(kv=e((()=>{F(),q()})))()}function Av(){return(Av=e((()=>{F(),q()})))()}function jv(){return(jv=e((()=>{F(),q()})))()}function Mv(){return(Mv=e((()=>{F(),q()})))()}function Nv(){return(Nv=e((()=>{F(),q()})))()}function Pv(){return(Pv=e((()=>{F(),q()})))()}function Fv(){return(Fv=e((()=>{F(),q()})))()}function Iv(){return(Iv=e((()=>{F(),q()})))()}function Lv(){return(Lv=e((()=>{F(),q()})))()}function Rv(){return(Rv=e((()=>{F(),q()})))()}function zv(){return(zv=e((()=>{F(),q()})))()}function Bv(){return(Bv=e((()=>{F(),q()})))()}function Vv(){return(Vv=e((()=>{F(),q()})))()}function Hv(){return(Hv=e((()=>{F(),q()})))()}function Uv(){return(Uv=e((()=>{F(),q()})))()}function Wv(){return(Wv=e((()=>{F(),q()})))()}function Gv(){return(Gv=e((()=>{F(),q()})))()}function Kv(){return(Kv=e((()=>{F(),q()})))()}function qv(){return(qv=e((()=>{F(),q()})))()}function Jv(){return(Jv=e((()=>{F(),q()})))()}function Yv(){return(Yv=e((()=>{F(),q()})))()}function Xv(){return(Xv=e((()=>{F(),q()})))()}function Zv(){return(Zv=e((()=>{F(),q()})))()}function Qv(){return(Qv=e((()=>{F(),q()})))()}function $v(){return($v=e((()=>{F(),q()})))()}function ey(){return(ey=e((()=>{F(),q()})))()}function ty(){return(ty=e((()=>{F(),q()})))()}function ny(){return(ny=e((()=>{F(),q()})))()}function ry(){return(ry=e((()=>{F(),q()})))()}function iy(){return(iy=e((()=>{F(),q()})))()}function ay(){return(ay=e((()=>{F(),q()})))()}function oy(){return(oy=e((()=>{F(),q()})))()}function sy(){return(sy=e((()=>{F(),q()})))()}function cy(){return(cy=e((()=>{F(),q()})))()}function ly(){return(ly=e((()=>{F(),q()})))()}function uy(){return(uy=e((()=>{F(),q()})))()}function dy(){return(dy=e((()=>{F(),q()})))()}function fy(){return(fy=e((()=>{F(),q()})))()}function py(){return(py=e((()=>{F(),q()})))()}function my(){return(my=e((()=>{F(),q()})))()}function hy(){return(hy=e((()=>{F(),q()})))()}function gy(){return(gy=e((()=>{F(),q()})))()}function _y(){return(_y=e((()=>{F(),q()})))()}function vy(){return(vy=e((()=>{F(),q()})))()}function yy(){return(yy=e((()=>{F(),q()})))()}function by(){return(by=e((()=>{F(),q()})))()}function xy(){return(xy=e((()=>{F(),q()})))()}function Sy(){return(Sy=e((()=>{F(),q()})))()}function Cy(){return(Cy=e((()=>{F(),q()})))()}function wy(){return(wy=e((()=>{F(),q()})))()}function Ty(){return(Ty=e((()=>{F(),q()})))()}function Ey(){return(Ey=e((()=>{F(),q()})))()}function Dy(){return(Dy=e((()=>{F(),q()})))()}function Oy(){return(Oy=e((()=>{F(),q()})))()}function ky(){return(ky=e((()=>{F(),q()})))()}function Ay(){return(Ay=e((()=>{F(),q()})))()}function jy(){return(jy=e((()=>{F(),q()})))()}function My(){return(My=e((()=>{F(),q()})))()}function Ny(){return(Ny=e((()=>{F(),q()})))()}function Py(){return(Py=e((()=>{F(),q()})))()}function Fy(){return(Fy=e((()=>{F(),q()})))()}function Iy(){return(Iy=e((()=>{F(),q()})))()}function Ly(){return(Ly=e((()=>{F(),q()})))()}function Ry(){return(Ry=e((()=>{F(),q()})))()}function zy(){return(zy=e((()=>{F(),q()})))()}function By(){return(By=e((()=>{F(),q()})))()}function Vy(){return(Vy=e((()=>{F(),q()})))()}function Hy(){return(Hy=e((()=>{F(),q()})))()}function Uy(){return(Uy=e((()=>{F(),q()})))()}function Wy(){return(Wy=e((()=>{F(),q()})))()}function Gy(){return(Gy=e((()=>{F(),q()})))()}function Ky(){return(Ky=e((()=>{F(),q()})))()}function qy(){return(qy=e((()=>{F(),q()})))()}function Jy(){return(Jy=e((()=>{F(),q()})))()}function Yy(){return(Yy=e((()=>{F(),q()})))()}function Xy(){return(Xy=e((()=>{F(),q()})))()}function Zy(){return(Zy=e((()=>{F(),q()})))()}function Qy(){return(Qy=e((()=>{F(),q()})))()}function $y(){return($y=e((()=>{F(),q()})))()}function eb(){return(eb=e((()=>{F(),q()})))()}function tb(){return(tb=e((()=>{F(),q()})))()}function nb(){return(nb=e((()=>{F(),q()})))()}function rb(){return(rb=e((()=>{F(),q()})))()}function ib(){return(ib=e((()=>{F(),q()})))()}function ab(){return(ab=e((()=>{F(),q()})))()}function ob(){return(ob=e((()=>{F(),q()})))()}function sb(){return(sb=e((()=>{F(),q()})))()}function cb(){return(cb=e((()=>{F(),q()})))()}function lb(){return(lb=e((()=>{F(),q()})))()}function ub(){return(ub=e((()=>{F(),q()})))()}function db(){return(db=e((()=>{F(),q()})))()}function fb(){return(fb=e((()=>{F(),q()})))()}function pb(){return(pb=e((()=>{F(),q()})))()}function mb(){return(mb=e((()=>{F(),q()})))()}function hb(){return(hb=e((()=>{F(),q()})))()}function gb(){return(gb=e((()=>{F(),q()})))()}function _b(){return(_b=e((()=>{F(),q()})))()}function vb(){return(vb=e((()=>{F(),q()})))()}function yb(){return(yb=e((()=>{F(),q()})))()}function bb(){return(bb=e((()=>{F(),q()})))()}function xb(){return(xb=e((()=>{F(),q()})))()}function Sb(){return(Sb=e((()=>{F(),q()})))()}function Cb(){return(Cb=e((()=>{F(),q()})))()}function wb(){return(wb=e((()=>{F(),q()})))()}function Tb(){return(Tb=e((()=>{F(),q()})))()}function Eb(){return(Eb=e((()=>{F(),q()})))()}function Db(){return(Db=e((()=>{F(),q()})))()}function Ob(){return(Ob=e((()=>{F(),q()})))()}function kb(){return(kb=e((()=>{F(),q()})))()}function Ab(){return(Ab=e((()=>{F(),q()})))()}function jb(){return(jb=e((()=>{F(),q()})))()}function Mb(){return(Mb=e((()=>{F(),q()})))()}function Nb(){return(Nb=e((()=>{F(),q()})))()}function Pb(){return(Pb=e((()=>{F(),q()})))()}function Fb(){return(Fb=e((()=>{F(),q()})))()}function Ib(){return(Ib=e((()=>{F(),q()})))()}function Lb(){return(Lb=e((()=>{F(),q()})))()}function Rb(){return(Rb=e((()=>{F(),q()})))()}function zb(){return(zb=e((()=>{F(),q()})))()}function Bb(){return(Bb=e((()=>{F(),q()})))()}function Vb(){return(Vb=e((()=>{F(),q()})))()}function Hb(){return(Hb=e((()=>{F(),q()})))()}function Ub(){return(Ub=e((()=>{F(),q()})))()}function Wb(){return(Wb=e((()=>{F(),q()})))()}function Gb(){return(Gb=e((()=>{F(),q()})))()}function Kb(){return(Kb=e((()=>{F(),q()})))()}function qb(){return(qb=e((()=>{F(),q()})))()}function Jb(){return(Jb=e((()=>{F(),q()})))()}function Yb(){return(Yb=e((()=>{F(),q()})))()}function Xb(){return(Xb=e((()=>{F(),q()})))()}function Zb(){return(Zb=e((()=>{F(),q()})))()}function Qb(){return(Qb=e((()=>{F(),q()})))()}function $b(){return($b=e((()=>{F(),q()})))()}function ex(){return(ex=e((()=>{F(),q()})))()}function tx(){return(tx=e((()=>{F(),q()})))()}function nx(){return(nx=e((()=>{F(),q()})))()}function rx(){return(rx=e((()=>{F(),q()})))()}function ix(){return(ix=e((()=>{F(),q()})))()}function ax(){return(ax=e((()=>{F(),q()})))()}function ox(){return(ox=e((()=>{F(),q()})))()}function sx(){return(sx=e((()=>{F(),q()})))()}function cx(){return(cx=e((()=>{F(),q()})))()}function lx(){return(lx=e((()=>{F(),q()})))()}function ux(){return(ux=e((()=>{F(),q()})))()}function dx(){return(dx=e((()=>{F(),q()})))()}function fx(){return(fx=e((()=>{F(),q()})))()}function px(){return(px=e((()=>{F(),q()})))()}function mx(){return(mx=e((()=>{F(),q()})))()}function hx(){return(hx=e((()=>{F(),q()})))()}function gx(){return(gx=e((()=>{F(),q()})))()}function _x(){return(_x=e((()=>{F(),q()})))()}function vx(){return(vx=e((()=>{F(),q()})))()}function yx(){return(yx=e((()=>{F(),q()})))()}function bx(){return(bx=e((()=>{F(),q()})))()}function xx(){return(xx=e((()=>{F(),q()})))()}function Sx(){return(Sx=e((()=>{F(),q()})))()}function Cx(){return(Cx=e((()=>{F(),q()})))()}function wx(){return(wx=e((()=>{F(),q()})))()}function Tx(){return(Tx=e((()=>{F(),q()})))()}function Ex(){return(Ex=e((()=>{F(),q()})))()}function Dx(){return(Dx=e((()=>{F(),q()})))()}function Ox(){return(Ox=e((()=>{F(),q()})))()}function kx(){return(kx=e((()=>{F(),q()})))()}function Ax(){return(Ax=e((()=>{F(),q()})))()}function jx(){return(jx=e((()=>{F(),q()})))()}function Mx(){return(Mx=e((()=>{F(),q()})))()}function Nx(){return(Nx=e((()=>{F(),q()})))()}function Px(){return(Px=e((()=>{F(),q()})))()}function Fx(){return(Fx=e((()=>{F(),q()})))()}function Ix(){return(Ix=e((()=>{F(),q()})))()}function Lx(){return(Lx=e((()=>{F(),q()})))()}function Rx(){return(Rx=e((()=>{F(),q()})))()}function zx(){return(zx=e((()=>{F(),q()})))()}function Bx(){return(Bx=e((()=>{F(),q()})))()}function Vx(){return(Vx=e((()=>{F(),q()})))()}function Hx(){return(Hx=e((()=>{F(),q()})))()}function Ux(){return(Ux=e((()=>{F(),q()})))()}function Wx(){return(Wx=e((()=>{F(),q()})))()}function Gx(){return(Gx=e((()=>{F(),q()})))()}function Kx(){return(Kx=e((()=>{F(),q()})))()}function qx(){return(qx=e((()=>{F(),q()})))()}function Jx(){return(Jx=e((()=>{F(),q()})))()}function Yx(){return(Yx=e((()=>{F(),q()})))()}function Xx(){return(Xx=e((()=>{F(),q()})))()}function Zx(){return(Zx=e((()=>{F(),q()})))()}function Qx(){return(Qx=e((()=>{F(),q()})))()}function $x(){return($x=e((()=>{F(),q()})))()}function eS(){return(eS=e((()=>{F(),q()})))()}function tS(){return(tS=e((()=>{F(),q()})))()}function nS(){return(nS=e((()=>{F(),q()})))()}function rS(){return(rS=e((()=>{F(),q()})))()}function iS(){return(iS=e((()=>{F(),q()})))()}function aS(){return(aS=e((()=>{F(),q()})))()}function oS(){return(oS=e((()=>{F(),q()})))()}function sS(){return(sS=e((()=>{F(),q()})))()}function cS(){return(cS=e((()=>{F(),q()})))()}function lS(){return(lS=e((()=>{F(),q()})))()}function uS(){return(uS=e((()=>{F(),q()})))()}function dS(){return(dS=e((()=>{F(),q()})))()}function fS(){return(fS=e((()=>{F(),q()})))()}function pS(){return(pS=e((()=>{F(),q()})))()}function mS(){return(mS=e((()=>{F(),q()})))()}function hS(){return(hS=e((()=>{F(),q()})))()}function gS(){return(gS=e((()=>{F(),q()})))()}function _S(){return(_S=e((()=>{F(),q()})))()}function vS(){return(vS=e((()=>{F(),q()})))()}function yS(){return(yS=e((()=>{F(),q()})))()}function bS(){return(bS=e((()=>{F(),q()})))()}function xS(){return(xS=e((()=>{F(),q()})))()}function SS(){return(SS=e((()=>{F(),q()})))()}function CS(){return(CS=e((()=>{F(),q()})))()}function wS(){return(wS=e((()=>{F(),q()})))()}function TS(){return(TS=e((()=>{F(),q()})))()}function ES(){return(ES=e((()=>{F(),q()})))()}function DS(){return(DS=e((()=>{F(),q()})))()}function OS(){return(OS=e((()=>{F(),q()})))()}function kS(){return(kS=e((()=>{F(),q()})))()}function AS(){return(AS=e((()=>{F(),q()})))()}function jS(){return(jS=e((()=>{F(),q()})))()}function MS(){return(MS=e((()=>{F(),q()})))()}function NS(){return(NS=e((()=>{F(),q()})))()}function PS(){return(PS=e((()=>{F(),q()})))()}function FS(){return(FS=e((()=>{F(),q()})))()}function IS(){return(IS=e((()=>{F(),q()})))()}function LS(){return(LS=e((()=>{F(),q()})))()}function RS(){return(RS=e((()=>{F(),q()})))()}function zS(){return(zS=e((()=>{F(),q()})))()}function BS(){return(BS=e((()=>{F(),q()})))()}function VS(){return(VS=e((()=>{F(),q()})))()}function HS(){return(HS=e((()=>{F(),q()})))()}function US(){return(US=e((()=>{F(),q()})))()}function WS(){return(WS=e((()=>{F(),q()})))()}function GS(){return(GS=e((()=>{F(),q()})))()}function KS(){return(KS=e((()=>{F(),q()})))()}function qS(){return(qS=e((()=>{F(),q()})))()}function JS(){return(JS=e((()=>{F(),q()})))()}function YS(){return(YS=e((()=>{F(),q()})))()}function XS(){return(XS=e((()=>{F(),q()})))()}function ZS(){return(ZS=e((()=>{F(),q()})))()}function QS(){return(QS=e((()=>{F(),q()})))()}function $S(){return($S=e((()=>{F(),q()})))()}function eC(){return(eC=e((()=>{F(),q()})))()}function tC(){return(tC=e((()=>{F(),q()})))()}function nC(){return(nC=e((()=>{F(),q()})))()}function rC(){return(rC=e((()=>{F(),q()})))()}function iC(){return(iC=e((()=>{F(),q()})))()}function aC(){return(aC=e((()=>{F(),q()})))()}function oC(){return(oC=e((()=>{F(),q()})))()}function sC(){return(sC=e((()=>{F(),q()})))()}function cC(){return(cC=e((()=>{F(),q()})))()}function lC(){return(lC=e((()=>{F(),q()})))()}function uC(){return(uC=e((()=>{F(),q()})))()}function dC(){return(dC=e((()=>{F(),q()})))()}function fC(){return(fC=e((()=>{F(),q()})))()}function pC(){return(pC=e((()=>{F(),q()})))()}function mC(){return(mC=e((()=>{F(),q()})))()}function hC(){return(hC=e((()=>{F(),q()})))()}function gC(){return(gC=e((()=>{F(),q()})))()}function _C(){return(_C=e((()=>{F(),q()})))()}function vC(){return(vC=e((()=>{F(),q()})))()}function yC(){return(yC=e((()=>{F(),q()})))()}function bC(){return(bC=e((()=>{F(),q()})))()}function xC(){return(xC=e((()=>{F(),q()})))()}function SC(){return(SC=e((()=>{F(),q()})))()}function CC(){return(CC=e((()=>{F(),q()})))()}function wC(){return(wC=e((()=>{F(),q()})))()}function TC(){return(TC=e((()=>{F(),q()})))()}function EC(){return(EC=e((()=>{F(),q()})))()}function DC(){return(DC=e((()=>{F(),q()})))()}function OC(){return(OC=e((()=>{F(),q()})))()}function kC(){return(kC=e((()=>{F(),q()})))()}function AC(){return(AC=e((()=>{F(),q()})))()}function jC(){return(jC=e((()=>{F(),q()})))()}function MC(){return(MC=e((()=>{F(),q()})))()}function NC(){return(NC=e((()=>{F(),q()})))()}function PC(){return(PC=e((()=>{F(),q()})))()}function FC(){return(FC=e((()=>{F(),q()})))()}function IC(){return(IC=e((()=>{F(),q()})))()}function LC(){return(LC=e((()=>{F(),q()})))()}function RC(){return(RC=e((()=>{F(),q()})))()}function zC(){return(zC=e((()=>{F(),q()})))()}function BC(){return(BC=e((()=>{F(),q()})))()}function VC(){return(VC=e((()=>{F(),q()})))()}function HC(){return(HC=e((()=>{F(),q()})))()}function UC(){return(UC=e((()=>{F(),q()})))()}function WC(){return(WC=e((()=>{F(),q()})))()}function GC(){return(GC=e((()=>{F(),q()})))()}function KC(){return(KC=e((()=>{F(),q()})))()}function qC(){return(qC=e((()=>{F(),q()})))()}function JC(){return(JC=e((()=>{F(),q()})))()}function YC(){return(YC=e((()=>{F(),q()})))()}function XC(){return(XC=e((()=>{F(),q()})))()}function ZC(){return(ZC=e((()=>{F(),q()})))()}function QC(){return(QC=e((()=>{F(),q()})))()}function $C(){return($C=e((()=>{F(),q()})))()}function ew(){return(ew=e((()=>{F(),q()})))()}function tw(){return(tw=e((()=>{F(),q()})))()}function nw(){return(nw=e((()=>{F(),q()})))()}function rw(){return(rw=e((()=>{F(),q()})))()}function iw(){return(iw=e((()=>{F(),q()})))()}function aw(){return(aw=e((()=>{F(),q()})))()}function ow(){return(ow=e((()=>{F(),q()})))()}function sw(){return(sw=e((()=>{F(),q()})))()}function cw(){return(cw=e((()=>{F(),q()})))()}function lw(){return(lw=e((()=>{F(),q()})))()}function uw(){return(uw=e((()=>{F(),q()})))()}function dw(){return(dw=e((()=>{F(),q()})))()}function fw(){return(fw=e((()=>{F(),q()})))()}function pw(){return(pw=e((()=>{F(),q()})))()}function mw(){return(mw=e((()=>{F(),q()})))()}function hw(){return(hw=e((()=>{F(),q()})))()}function gw(){return(gw=e((()=>{F(),q()})))()}function _w(){return(_w=e((()=>{F(),q()})))()}function vw(){return(vw=e((()=>{F(),q()})))()}var yw;function bw(){return(bw=e((()=>{F(),q(),yw=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>j`
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
    ${J(t,()=>M`<title>${t}</title>`)}
    <path
      d="m15 9-6 6m0-6 6 6m7-3c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
`})))()}var xw;function Sw(){return(Sw=e((()=>{F(),q(),xw=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>j`
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
    ${J(t,()=>M`<title>${t}</title>`)}
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
`})))()}function Cw(){return(Cw=e((()=>{F(),q()})))()}function ww(){return(ww=e((()=>{F(),q()})))()}function Tw(){return(Tw=e((()=>{F(),q()})))()}function Ew(){return(Ew=e((()=>{F(),q()})))()}function Dw(){return(Dw=e((()=>{F(),q()})))()}function Ow(){return(Ow=e((()=>{F(),q()})))()}function kw(){return(kw=e((()=>{F(),q()})))()}function Aw(){return(Aw=e((()=>{F(),q()})))()}function jw(){return(jw=e((()=>{F(),q()})))()}function Mw(){return(Mw=e((()=>{Ln(),Rn(),zn(),Bn(),Vn(),Hn(),Un(),Wn(),Gn(),Kn(),qn(),Jn(),Yn(),Xn(),Zn(),Qn(),$n(),er(),tr(),nr(),rr(),ir(),ar(),or(),sr(),cr(),lr(),ur(),dr(),fr(),pr(),mr(),hr(),gr(),_r(),vr(),yr(),br(),xr(),Sr(),Cr(),wr(),Tr(),Er(),Dr(),Or(),kr(),Ar(),jr(),Mr(),Nr(),Pr(),Fr(),Ir(),Lr(),Rr(),zr(),Br(),Vr(),Hr(),Ur(),Wr(),Gr(),Kr(),qr(),Jr(),Yr(),Xr(),Zr(),Qr(),$r(),ei(),ti(),ni(),ri(),ii(),ai(),oi(),si(),ci(),li(),ui(),di(),fi(),pi(),mi(),hi(),gi(),_i(),vi(),yi(),bi(),xi(),Si(),Ci(),wi(),Ti(),Ei(),Di(),Oi(),ki(),Ai(),ji(),Mi(),Ni(),Pi(),Fi(),Ii(),Li(),Ri(),zi(),Bi(),Vi(),Hi(),Ui(),Wi(),Gi(),Ki(),qi(),Ji(),Yi(),Xi(),Zi(),Qi(),$i(),ea(),ta(),na(),ra(),ia(),aa(),oa(),sa(),ca(),la(),ua(),da(),fa(),pa(),ma(),ha(),ga(),_a(),va(),ya(),ba(),xa(),Sa(),Ca(),wa(),Ta(),Ea(),Da(),Oa(),ka(),Aa(),ja(),Ma(),Na(),Pa(),Fa(),Ia(),La(),Ra(),za(),Ba(),Va(),Ha(),Ua(),Wa(),Ga(),Ka(),qa(),Ja(),Ya(),Xa(),Za(),Qa(),$a(),eo(),to(),no(),ro(),io(),ao(),oo(),so(),co(),lo(),uo(),fo(),po(),mo(),ho(),go(),_o(),vo(),yo(),bo(),xo(),So(),Co(),wo(),To(),Eo(),Do(),Oo(),ko(),Ao(),jo(),Mo(),No(),Po(),Fo(),Io(),Lo(),Ro(),zo(),Bo(),Vo(),Ho(),Uo(),Wo(),Go(),Ko(),qo(),Jo(),Yo(),Xo(),Qo(),$o(),es(),ts(),ns(),rs(),is(),os(),ss(),cs(),ls(),us(),ds(),fs(),ps(),ms(),hs(),gs(),_s(),vs(),ys(),bs(),xs(),Ss(),Cs(),ws(),Ts(),Es(),Ds(),Os(),ks(),As(),js(),Ms(),Ns(),Ps(),Fs(),Is(),Ls(),Rs(),zs(),Bs(),Vs(),Hs(),Us(),Ws(),Gs(),Ks(),qs(),Js(),Ys(),Xs(),Zs(),Qs(),$s(),ec(),tc(),nc(),rc(),ic(),ac(),oc(),sc(),cc(),lc(),uc(),dc(),fc(),pc(),mc(),hc(),gc(),_c(),vc(),yc(),bc(),xc(),Sc(),Cc(),wc(),Tc(),Ec(),Dc(),Oc(),kc(),Ac(),jc(),Mc(),Nc(),Pc(),Fc(),Ic(),Lc(),Rc(),zc(),Bc(),Vc(),Hc(),Uc(),Wc(),Gc(),Kc(),qc(),Jc(),Yc(),Xc(),Zc(),Qc(),$c(),el(),tl(),nl(),rl(),il(),al(),ol(),sl(),cl(),ll(),ul(),dl(),fl(),pl(),ml(),hl(),gl(),_l(),vl(),yl(),bl(),xl(),Sl(),Cl(),wl(),Tl(),El(),Dl(),Ol(),kl(),Al(),jl(),Ml(),Nl(),Pl(),Fl(),Il(),Ll(),Rl(),zl(),Bl(),Vl(),Hl(),Ul(),Wl(),Gl(),Kl(),ql(),Jl(),Yl(),Xl(),Zl(),Ql(),$l(),eu(),tu(),nu(),ru(),iu(),au(),ou(),su(),cu(),lu(),uu(),du(),fu(),pu(),mu(),hu(),_u(),yu(),bu(),xu(),Su(),Cu(),wu(),Tu(),Eu(),Du(),Ou(),ku(),Au(),ju(),Mu(),Nu(),Pu(),Iu(),Lu(),Ru(),zu(),Bu(),Vu(),Hu(),Uu(),Wu(),Gu(),Ku(),qu(),Ju(),Yu(),Xu(),Zu(),Qu(),$u(),ed(),td(),nd(),rd(),id(),ad(),od(),sd(),cd(),ld(),ud(),dd(),fd(),pd(),md(),hd(),gd(),_d(),vd(),yd(),bd(),xd(),Sd(),Cd(),wd(),Td(),Ed(),Dd(),Od(),kd(),Ad(),jd(),Md(),Nd(),Pd(),Fd(),Id(),Ld(),Rd(),zd(),Bd(),Vd(),Hd(),Ud(),Wd(),Gd(),Kd(),qd(),Jd(),Yd(),Xd(),Zd(),Qd(),$d(),ef(),tf(),nf(),rf(),af(),of(),sf(),cf(),lf(),uf(),df(),ff(),pf(),mf(),hf(),gf(),_f(),vf(),yf(),bf(),xf(),Sf(),Cf(),wf(),Tf(),Ef(),Df(),Of(),kf(),Af(),jf(),Mf(),Nf(),Pf(),Ff(),If(),Lf(),Rf(),zf(),Bf(),Vf(),Hf(),Uf(),Wf(),Gf(),Kf(),qf(),Jf(),Yf(),Xf(),Zf(),Qf(),$f(),ep(),tp(),np(),rp(),ip(),ap(),op(),sp(),cp(),lp(),up(),dp(),fp(),pp(),mp(),hp(),gp(),_p(),vp(),yp(),bp(),xp(),Sp(),Cp(),wp(),Tp(),Ep(),Dp(),Op(),kp(),Ap(),jp(),Mp(),Np(),Pp(),Fp(),Ip(),Lp(),Rp(),zp(),Bp(),Vp(),Hp(),Up(),Wp(),Gp(),Kp(),qp(),Jp(),Yp(),Xp(),Zp(),Qp(),$p(),em(),tm(),nm(),rm(),im(),am(),om(),sm(),cm(),lm(),um(),dm(),fm(),pm(),mm(),hm(),gm(),_m(),vm(),ym(),bm(),xm(),Sm(),wm(),Tm(),Em(),Dm(),Om(),km(),Am(),jm(),Mm(),Nm(),Pm(),Fm(),Im(),Lm(),Rm(),zm(),Bm(),Vm(),Hm(),Um(),Wm(),Gm(),Km(),qm(),Jm(),Ym(),Xm(),Zm(),Qm(),$m(),eh(),th(),nh(),rh(),ih(),ah(),oh(),sh(),ch(),lh(),uh(),dh(),fh(),ph(),mh(),hh(),gh(),_h(),vh(),yh(),bh(),xh(),Sh(),Ch(),wh(),Th(),Eh(),Dh(),Oh(),kh(),Ah(),jh(),Mh(),Nh(),Ph(),Fh(),Ih(),Lh(),Rh(),zh(),Bh(),Vh(),Hh(),Uh(),Wh(),Gh(),Kh(),qh(),Jh(),Yh(),Xh(),Zh(),Qh(),$h(),eg(),tg(),ng(),rg(),ig(),ag(),og(),sg(),cg(),lg(),ug(),dg(),fg(),pg(),mg(),hg(),gg(),_g(),vg(),yg(),bg(),xg(),Sg(),Cg(),wg(),Tg(),Eg(),Dg(),Og(),kg(),Ag(),jg(),Mg(),Ng(),Pg(),Fg(),Ig(),Lg(),Rg(),zg(),Bg(),Vg(),Hg(),Ug(),Wg(),Gg(),Kg(),qg(),Jg(),Yg(),Xg(),Zg(),Qg(),$g(),e_(),t_(),n_(),r_(),i_(),a_(),o_(),s_(),c_(),l_(),u_(),d_(),f_(),p_(),m_(),h_(),g_(),__(),v_(),y_(),b_(),x_(),S_(),C_(),w_(),T_(),E_(),D_(),O_(),k_(),A_(),j_(),M_(),N_(),P_(),F_(),I_(),L_(),R_(),z_(),B_(),V_(),H_(),U_(),W_(),G_(),K_(),q_(),J_(),Y_(),X_(),Z_(),Q_(),$_(),ev(),tv(),nv(),rv(),iv(),av(),ov(),sv(),cv(),lv(),uv(),dv(),fv(),pv(),mv(),hv(),gv(),_v(),vv(),yv(),bv(),xv(),Sv(),Cv(),wv(),Tv(),Ev(),Dv(),Ov(),kv(),Av(),jv(),Mv(),Nv(),Pv(),Fv(),Iv(),Lv(),Rv(),zv(),Bv(),Vv(),Hv(),Uv(),Wv(),Gv(),Kv(),qv(),Jv(),Yv(),Xv(),Zv(),Qv(),$v(),ey(),ty(),ny(),ry(),iy(),ay(),oy(),sy(),cy(),ly(),uy(),dy(),fy(),py(),my(),hy(),gy(),_y(),vy(),yy(),by(),xy(),Sy(),Cy(),wy(),Ty(),Ey(),Dy(),Oy(),ky(),Ay(),jy(),My(),Ny(),Py(),Fy(),Iy(),Ly(),Ry(),zy(),By(),Vy(),Hy(),Uy(),Wy(),Gy(),Ky(),qy(),Jy(),Yy(),Xy(),Zy(),Qy(),$y(),eb(),tb(),nb(),rb(),ib(),ab(),ob(),sb(),cb(),lb(),ub(),db(),fb(),pb(),mb(),hb(),gb(),_b(),vb(),yb(),bb(),xb(),Sb(),Cb(),wb(),Tb(),Eb(),Db(),Ob(),kb(),Ab(),jb(),Mb(),Nb(),Pb(),Fb(),Ib(),Lb(),Rb(),zb(),Bb(),Vb(),Hb(),Ub(),Wb(),Gb(),Kb(),qb(),Jb(),Yb(),Xb(),Zb(),Qb(),$b(),ex(),tx(),nx(),rx(),ix(),ax(),ox(),sx(),cx(),lx(),ux(),dx(),fx(),px(),mx(),hx(),gx(),_x(),vx(),yx(),bx(),xx(),Sx(),Cx(),wx(),Tx(),Ex(),Dx(),Ox(),kx(),Ax(),jx(),Mx(),Nx(),Px(),Fx(),Ix(),Lx(),Rx(),zx(),Bx(),Vx(),Hx(),Ux(),Wx(),Gx(),Kx(),qx(),Jx(),Yx(),Xx(),Zx(),Qx(),$x(),eS(),tS(),nS(),rS(),iS(),aS(),oS(),sS(),cS(),lS(),uS(),dS(),fS(),pS(),mS(),hS(),gS(),_S(),vS(),yS(),bS(),xS(),SS(),CS(),wS(),TS(),ES(),DS(),OS(),kS(),AS(),jS(),MS(),NS(),PS(),FS(),IS(),LS(),RS(),zS(),BS(),VS(),HS(),US(),WS(),GS(),KS(),qS(),JS(),YS(),XS(),ZS(),QS(),$S(),eC(),tC(),nC(),rC(),iC(),aC(),oC(),sC(),cC(),lC(),uC(),dC(),fC(),pC(),mC(),hC(),gC(),_C(),vC(),yC(),bC(),xC(),SC(),CC(),wC(),TC(),EC(),DC(),OC(),kC(),AC(),jC(),MC(),NC(),PC(),FC(),IC(),LC(),RC(),zC(),BC(),VC(),HC(),UC(),WC(),GC(),KC(),qC(),JC(),YC(),XC(),ZC(),QC(),$C(),ew(),tw(),nw(),rw(),iw(),aw(),ow(),sw(),cw(),lw(),uw(),dw(),fw(),pw(),mw(),hw(),gw(),_w(),vw(),bw(),Sw(),Cw(),ww(),Tw(),Ew(),Dw(),Ow(),kw(),Aw(),jw()})))()}var Nw;function Pw(){return(Pw=e((()=>{F(),U(),Qe(),Nw=H(class extends ln{constructor(e){if(super(e),e.type!==V.PROPERTY&&e.type!==V.ATTRIBUTE&&e.type!==V.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!We(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===N||t===P)return t;let n=e.element,r=e.name;if(e.type===V.PROPERTY){if(t===n[r])return N}else if(e.type===V.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return N}else if(e.type===V.ATTRIBUTE&&n.getAttribute(r)===t+``)return N;return Ye(e),t}})})))()}var Fw;function Iw(){return(Iw=e((()=>{G(),Fw=wt(I`
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
`)})))()}var Lw;function Rw(){return(Rw=e((()=>{Iw(),G(),F(),Lw=I`
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
		`,{styleSheets:[Fw,Lw]}))})))()}var zw;function Bw(){return(Bw=e((()=>{G(),zw=wt(I`
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
`)})))()}var Vw,Hw;function Uw(){return(Uw=e((()=>{G(),F(),Rw(),Bw(),Vw=(e,t,n)=>Pe(j`<cosmoz-tooltip-content>
			${J(t,()=>j`<strong slot="heading">${t}</strong>`)}
			${J(n,()=>j`<p slot="description">${n}</p>`)}
		</cosmoz-tooltip-content>`,e),Hw=(e,t)=>{let{for:n,heading:r,description:i,placement:a=`top`,delay:o=300,disabled:s=!1}=t,c=rn(),l=!!(r||i)&&!s;R(()=>{if(!n||!l)return;let t=e.getRootNode(),u=t.adoptedStyleSheets??[];u.includes(zw)||(t.adoptedStyleSheets=[...u,zw]);let d=document.createElement(`div`);d.setAttribute(`popover`,`manual`),d.setAttribute(`role`,`tooltip`),d.classList.add(`cosmoz-tooltip-popover`),e.after(d),c.current=d,Vw(d,r,i);let f=`[name="${n}"]`,p=`--tooltip-anchor-${n}`,m,h=e=>{s||(clearTimeout(m),e.style.anchorName=p,d.style.positionAnchor=p,d.style.positionArea=a,m=window.setTimeout(()=>d.showPopover(),o))},g=()=>{clearTimeout(m),d.hidePopover()},_=e=>{let t=e.target.closest?.(f);t&&h(t)},v=e=>{let t=e.target.closest?.(f);if(!t)return;let n=e.relatedTarget;n&&t.contains(n)||g()},y=e=>{let t=e.target.closest?.(f);t&&h(t)},b=e=>{e.target.closest?.(f)&&g()};return t.addEventListener(`pointerover`,_),t.addEventListener(`pointerout`,v),t.addEventListener(`focusin`,y),t.addEventListener(`focusout`,b),()=>{clearTimeout(m),t.removeEventListener(`pointerover`,_),t.removeEventListener(`pointerout`,v),t.removeEventListener(`focusin`,y),t.removeEventListener(`focusout`,b),d.hidePopover(),d.remove(),c.current=void 0}},[n,a,o,l]),R(()=>{n&&c.current&&Vw(c.current,r,i)},[r,i,n]),R(()=>{s&&c.current&&c.current.hidePopover()},[s])}})))()}var Ww;function Gw(){return(Gw=e((()=>{G(),Ww=e=>{let[t,n]=Jt(!1);return R(()=>{let t=e.current;if(!t)return;let r=()=>{n(t.assignedElements().length>0)};return r(),t.addEventListener(`slotchange`,r),()=>t.removeEventListener(`slotchange`,r)},[e.current]),t}})))()}var Kw,qw;function Jw(){return(Jw=e((()=>{Iw(),G(),F(),kn(),Rw(),Bw(),Uw(),Gw(),Kw=I`
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
`,qw=e=>{let{heading:t,description:n,for:r,placement:i=`top`,delay:a=300,disabled:o=!1}=e,s=rn(),c=rn(),l=rn(),u=Ww(l),d=!!(t||n||u)&&!o,f=B(()=>{d&&(clearTimeout(c.current),c.current=window.setTimeout(()=>{s.current?.showPopover()},a))},[a,d]);R(()=>{o&&(clearTimeout(c.current),s.current?.hidePopover())},[o]);let p=B(()=>{clearTimeout(c.current),s.current?.hidePopover()},[]);return R(()=>{if(r)return;let t=t=>{let n=t.relatedTarget;n&&e.contains(n)||p()};return e.addEventListener(`pointerover`,f),e.addEventListener(`pointerout`,t),()=>{e.removeEventListener(`pointerover`,f),e.removeEventListener(`pointerout`,t)}},[r,f,p]),Hw(e,{for:r,heading:t,description:n,placement:i,delay:a,disabled:o}),r?P:d?j`
		<slot @focusin=${f} @focusout=${p}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${i}"
			${On(s)}
		>
			<cosmoz-tooltip-content>
				${J(t,()=>j`<strong slot="heading">${t}</strong>`)}
				${J(n,()=>j`<p slot="description">${n}</p>`)}
				<slot name="content" ${On(l)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:j`
			<slot></slot>
			<slot name="content" ${On(l)} hidden></slot>
		`},customElements.define(`cosmoz-tooltip`,W(qw,{styleSheets:[Fw,zw,Kw],observedAttributes:[`heading`,`description`,`for`,`placement`,`delay`,`disabled`]}))})))()}function Yw(){return(Yw=e((()=>{Jw()})))()}var Xw,Zw;function Qw(){return(Qw=e((()=>{Mw(),Yw(),F(),Xw=(e,{hint:t,label:n,invalid:r,errorMessage:i,compact:a,required:o})=>j`
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
						${Cm({width:`16px`,height:`16px`})}
					</cosmoz-tooltip>`)}

			<slot name="suffix"></slot>
		</div>
		<!-- hint: visible when valid, hidden when invalid or compact -->
		${J(!a&&t&&!r,()=>j`<span class="hint" part="hint">${t}</span>`)}
		<!-- error: replaces hint when invalid, hidden in compact -->
		${J(!a&&r&&i,()=>j`<span class="error" part="error">${i}</span>`)}
	`,Zw=[`autocomplete`,`readonly`,`disabled`,`maxlength`,`invalid`]})))()}var $w;function eT(){return(eT=e((()=>{En(),$w=Sn`
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
`})))()}var tT;function nT(){return(nT=e((()=>{G(),tT=e=>z(()=>{if(e==null)return;let t=new RegExp(e,`u`);return e=>{!e.defaultPrevented&&e.data&&!t.test(e.data)&&e.preventDefault()}},[e])})))()}var rT;function iT(){return(iT=e((()=>{G(),rT=Mt(class extends L{values;constructor(e,t,n,r){super(e,t),Object.assign(t.host,n),this.values=r}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})))()}var aT;function oT(){return(oT=e((()=>{G(),aT=Mt(class extends L{update(){return this.state.host}})})))()}var sT,cT,lT;function uT(){return(uT=e((()=>{G(),oT(),sT=/([A-Z])/gu,cT=(e,t,n)=>{e[t]=n,e.dispatchEvent(new CustomEvent(t.replace(sT,`-$1`).toLowerCase()+`-changed`,{detail:{value:n}}))},lT=(e,t,n=[t])=>{let r=aT();R(()=>{cT(r,e,t)},n)}})))()}var dT;function fT(){return(fT=e((()=>{iT(),uT(),G(),dT=e=>{let t=rn(void 0),n=B(e=>t.current=e,[]),r=e.shadowRoot,i=B(t=>e.dispatchEvent(new Event(t.type,{bubbles:t.bubbles})),[]),a=B(t=>cT(e,`value`,t.target.value),[]),o=B(t=>cT(e,`focused`,t.type===`focus`),[]),s=B(()=>{let n=t.current?.checkValidity();return e.toggleAttribute(`invalid`,!n),n},[]);return rT({validate:s},[s]),R(()=>{let e=e=>{e.composedPath()[0]?.closest?.(`input, textarea, label`)||(e.preventDefault(),t.current?.focus())};return r.addEventListener(`mousedown`,e),()=>r.removeEventListener(`mousedown`,e)},[]),{onChange:i,onFocus:o,onInput:a,onRef:n}}})))()}var pT,mT;function hT(){return(hT=e((()=>{pT=({placeholder:e})=>e||` `,mT=(e,t)=>t??(e===`date`?`9999-12-31`:void 0)})))()}var gT,_T;function vT(){return(vT=e((()=>{G(),F(),q(),Pw(),kn(),Qw(),eT(),nT(),fT(),hT(),gT=[`type`,`variant`,`hint`,`compact`,`required`,`pattern`,`allowed-pattern`,`min`,`max`,`step`,`autosize`,`label`,`placeholder`,...Zw],_T=e=>{let{type:t=`text`,pattern:n,allowedPattern:r,autocomplete:i,value:a,readonly:o,disabled:s,min:c,max:l,step:u,maxlength:d,required:f}=e,{onChange:p,onFocus:m,onInput:h,onRef:g}=dT(e),_=tT(r);return e.toggleAttribute(`has-value`,!!a),Xw(j`
			<input
				${On(g)}
				style="--chars: ${a?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${K(n)}
				autocomplete=${K(i)}
				placeholder=${pT({placeholder:e.placeholder})}
				?readonly=${o}
				aria-disabled=${s?`true`:`false`}
				?disabled=${s}
				?required=${f}
				.value=${Nw(a??``)}
				maxlength=${K(d)}
				@beforeinput=${_}
				@input=${h}
				@change=${p}
				@focus=${m}
				@blur=${m}
				min=${K(c)}
				max=${K(mT(t,l))}
				step=${K(u)}
			/>
		`,e)},customElements.define(`cosmoz-input`,W(_T,{observedAttributes:gT,styleSheets:[wt($w)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}var yT,bT,xT;function ST(){return(ST=e((()=>{G(),yT=e=>{e.style.height=``,e.style.height=`${e.scrollHeight}px`},bT=(e,t=0)=>{if(t>0){let n=e.getAttribute(`rows`)??``,r=e.style.height;e.style.height=``,e.setAttribute(`rows`,t),e.style.maxHeight=e.getBoundingClientRect().height+`px`,e.style.height=r,e.setAttribute(`rows`,n)}},xT=e=>{let{value:t,maxRows:n}=e,r=z(()=>()=>e.shadowRoot.querySelector(`#input`),[]);R(()=>bT(r(),n),[n,r]),R(()=>yT(r()),[r,t]),R(()=>{let e=r(),t=new ResizeObserver(()=>requestAnimationFrame(()=>yT(e)));return t.observe(e),()=>t.unobserve(e)},[r])}})))()}var CT,wT;function TT(){return(TT=e((()=>{F(),q(),Pw(),kn(),G(),Qw(),eT(),ST(),fT(),CT=[`rows`,`placeholder`,`label`,`hint`,`required`,...Zw],wT=e=>{let{autocomplete:t,value:n,placeholder:r,readonly:i,disabled:a,rows:o,cols:s,maxlength:c}=e,{onChange:l,onFocus:u,onInput:d,onRef:f}=dT(e);return xT(e),Xw(j`
			<textarea id="input" part="input"
				${On(f)}
				autocomplete=${K(t)}
				placeholder=${r||` `}
				rows=${o??1} cols=${K(s)}
				?readonly=${i} ?aria-disabled=${a} ?disabled=${a}
				.value=${Nw(n??``)} maxlength=${K(c)} @input=${d}
				@change=${l} @focus=${u} @blur=${u}>`,e)},customElements.define(`cosmoz-textarea`,W(wT,{observedAttributes:CT,styleSheets:[wt($w)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}var ET,DT,OT;function kT(){return(kT=e((()=>{G(),Pw(),ET=e=>{let{label:t,value:n,disabled:r,error:i}=e,a=B(t=>e.dispatchEvent(new CustomEvent(`change`,{detail:t.target.checked})),[]);return j`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${Nw(!!n)}
			?disabled=${r}
			@change=${a}
		/>
		${J(t,()=>j`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${J(i,e=>j`<div class="failure">${e}</div>`)} `},DT=I`
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
`,OT=I`
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
`,customElements.define(`cosmoz-toggle`,W(ET,{styleSheets:[OT,DT],observedAttributes:[`label`,`disabled`,`error`]}))})))()}function AT(){return(AT=e((()=>{vT(),TT(),kT(),fT(),Qw(),eT()})))()}function jT(){let e=[],t=Object.create(null),n;return t.get=(r,i)=>(n?.revoke?.(),i===iE?e:(e.push(i),n=Proxy.revocable(r,t),n.proxy)),Proxy.revocable(Object.create(null),t).proxy}function MT(e,t){let{[iE]:n}=e(jT()),r=t?.keySeparator??`.`,i=t?.nsSeparator??`:`,a=t?.enableSelector===`strict`;if(n.length>1&&i){let e=t?.ns,o=a?Array.isArray(e)?e:e?[e]:null:Array.isArray(e)?e:null;if(o&&(a?o:o.length>1?o.slice(1):[]).includes(n[0]))return`${n[0]}${i}${n.slice(1).join(r)}`}return n.join(r)}var Y,NT,PT,FT,IT,LT,RT,zT,BT,VT,HT,UT,WT,X,GT,KT,qT,JT,YT,XT,ZT,QT,$T,eE,Z,tE,nE,rE,iE,aE,oE,sE,cE,lE,uE,dE,fE,pE,mE,hE,gE,_E,vE,yE,bE,xE,SE,CE,wE,Q,TE;function EE(){return(EE=e((()=>{Y=e=>typeof e==`string`,NT=()=>{let e,t,n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n},PT=e=>e==null?``:String(e),FT=(e,t,n)=>{e.forEach(e=>{t[e]&&(n[e]=t[e])})},IT=/###/g,LT=e=>e&&e.includes(`###`)?e.replace(IT,`.`):e,RT=e=>!e||Y(e),zT=(e,t,n)=>{let r=Y(t)?t.split(`.`):t,i=0;for(;i<r.length-1;){if(RT(e))return{};let t=LT(r[i]);!e[t]&&n&&(e[t]=new n),e=Object.prototype.hasOwnProperty.call(e,t)?e[t]:{},++i}return RT(e)?{}:{obj:e,k:LT(r[i])}},BT=(e,t,n)=>{let{obj:r,k:i}=zT(e,t,Object);if(r!==void 0||t.length===1){r[i]=n;return}let a=t[t.length-1],o=t.slice(0,t.length-1),s=zT(e,o,Object);for(;s.obj===void 0&&o.length;)a=`${o[o.length-1]}.${a}`,o=o.slice(0,o.length-1),s=zT(e,o,Object),s?.obj&&s.obj[`${s.k}.${a}`]!==void 0&&(s.obj=void 0);s.obj[`${s.k}.${a}`]=n},VT=(e,t,n,r)=>{let{obj:i,k:a}=zT(e,t,Object);i[a]=i[a]||[],i[a].push(n)},HT=(e,t)=>{let{obj:n,k:r}=zT(e,t);if(n&&Object.prototype.hasOwnProperty.call(n,r))return n[r]},UT=(e,t,n)=>{let r=HT(e,n);return r===void 0?HT(t,n):r},WT=(e,t,n)=>{for(let r in t)r!==`__proto__`&&r!==`constructor`&&(Object.prototype.hasOwnProperty.call(e,r)?Y(e[r])||e[r]instanceof String||Y(t[r])||t[r]instanceof String?n&&(e[r]=t[r]):WT(e[r],t[r],n):e[r]=t[r]);return e},X=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,`\\$&`),GT={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`,"/":`&#x2F;`},KT=e=>Y(e)?e.replace(/[&<>"'\/]/g,e=>GT[e]):e,qT=class{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){let t=this.regExpMap.get(e);if(t!==void 0)return t;let n=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,n),this.regExpQueue.push(e),n}},JT=[` `,`,`,`?`,`!`,`;`],YT=new qT(20),XT=(e,t,n)=>{t||=``,n||=``;let r=JT.filter(e=>!t.includes(e)&&!n.includes(e));if(r.length===0)return!0;let i=YT.getRegExp(`(${r.map(e=>e===`?`?`\\?`:e).join(`|`)})`),a=!i.test(e);if(!a){let t=e.indexOf(n);t>0&&!i.test(e.substring(0,t))&&(a=!0)}return a},ZT=(e,t,n=`.`)=>{if(!e)return;if(e[t])return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0;let r=t.split(n),i=e;for(let e=0;e<r.length;){if(!i||typeof i!=`object`)return;let t,a=``;for(let o=e;o<r.length;++o)if(o!==e&&(a+=n),a+=r[o],t=i[a],t!==void 0){if([`string`,`number`,`boolean`].includes(typeof t)&&o<r.length-1)continue;e+=o-e+1;break}i=t}return i},QT=e=>e?.replace(/_/g,`-`),$T={type:`logger`,log(e){this.output(`log`,e)},warn(e){this.output(`warn`,e)},error(e){this.output(`error`,e)},output(e,t){console?.[e]?.apply?.(console,t)}},eE=class e{constructor(e,t={}){this.init(e,t)}init(e,t={}){this.prefix=t.prefix||`i18next:`,this.logger=e||$T,this.options=t,this.debug=t.debug}log(...e){return this.forward(e,`log`,``,!0)}warn(...e){return this.forward(e,`warn`,``,!0)}error(...e){return this.forward(e,`error`,``)}deprecate(...e){return this.forward(e,`warn`,`WARNING DEPRECATED: `,!0)}forward(e,t,n,r){return r&&!this.debug?null:(e=e.map(e=>Y(e)?e.replace(/[\r\n\x00-\x1F\x7F]/g,` `):e),Y(e[0])&&(e[0]=`${n}${this.prefix} ${e[0]}`),this.logger[t](e))}create(t){return new e(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t||=this.options,t.prefix=t.prefix||this.prefix,new e(this.logger,t)}},Z=new eE,tE=class{constructor(){this.observers={}}on(e,t){return e.split(` `).forEach(e=>{this.observers[e]||(this.observers[e]=new Map);let n=this.observers[e].get(t)||0;this.observers[e].set(t,n+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}once(e,t){let n=(...r)=>{t(...r),this.off(e,n)};return this.on(e,n),this}emit(e,...t){this.observers[e]&&Array.from(this.observers[e].entries()).forEach(([e,n])=>{for(let r=0;r<n;r++)e(...t)}),this.observers[`*`]&&Array.from(this.observers[`*`].entries()).forEach(([n,r])=>{for(let i=0;i<r;i++)n(e,...t)})}},nE=class extends tE{constructor(e,t={ns:[`translation`],defaultNS:`translation`}){super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator=`.`),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.includes(e)||this.options.ns.push(e)}removeNamespaces(e){let t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,n,r={}){let i=r.keySeparator===void 0?this.options.keySeparator:r.keySeparator,a=r.ignoreJSONStructure===void 0?this.options.ignoreJSONStructure:r.ignoreJSONStructure,o;e.includes(`.`)?o=e.split(`.`):(o=[e,t],n&&(Array.isArray(n)?o.push(...n):Y(n)&&i?o.push(...n.split(i)):o.push(n)));let s=HT(this.data,o);return!s&&!t&&!n&&e.includes(`.`)&&(e=o[0],t=o[1],n=o.slice(2).join(`.`)),s||!a||!Y(n)?s:ZT(this.data?.[e]?.[t],n,i)}addResource(e,t,n,r,i={silent:!1}){let a=i.keySeparator===void 0?this.options.keySeparator:i.keySeparator,o=[e,t];n&&(o=o.concat(a?n.split(a):n)),e.includes(`.`)&&(o=e.split(`.`),r=t,t=o[1]),this.addNamespaces(t),BT(this.data,o,r),i.silent||this.emit(`added`,e,t,n,r)}addResources(e,t,n,r={silent:!1}){for(let r in n)(Y(n[r])||Array.isArray(n[r]))&&this.addResource(e,t,r,n[r],{silent:!0});r.silent||this.emit(`added`,e,t,n)}addResourceBundle(e,t,n,r,i,a={silent:!1,skipCopy:!1}){let o=[e,t];e.includes(`.`)&&(o=e.split(`.`),r=n,n=t,t=o[1]),this.addNamespaces(t);let s=HT(this.data,o)||{};a.skipCopy||(n=JSON.parse(JSON.stringify(n))),r?WT(s,n,i):s={...s,...n},BT(this.data,o,s),a.silent||this.emit(`added`,e,t,n)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit(`removed`,e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||=this.options.defaultNS,this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){let t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(e=>t[e]&&Object.keys(t[e]).length>0)}toJSON(){return this.data}},rE={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,i){return e.forEach(e=>{t=this.processors[e]?.process(t,n,r,i)??t}),t}},iE=Symbol(`i18next/PATH_KEY`),aE=e=>!Y(e)&&typeof e!=`boolean`&&typeof e!=`number`,oE=class e extends tE{constructor(e,t={}){super(),FT([`resourceStore`,`languageUtils`,`pluralResolver`,`interpolator`,`backendConnector`,`i18nFormat`,`utils`],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator=`.`),this.logger=Z.create(`translator`),this.checkedLoadedFor={}}changeLanguage(e){e&&(this.language=e)}exists(e,t={interpolation:{}}){let n={...t};if(e==null)return!1;let r=this.resolve(e,n);if(r?.res===void 0)return!1;let i=aE(r.res);return!(n.returnObjects===!1&&i)}extractFromKey(e,t){let n=t.nsSeparator===void 0?this.options.nsSeparator:t.nsSeparator;n===void 0&&(n=`:`);let r=t.keySeparator===void 0?this.options.keySeparator:t.keySeparator,i=t.ns||this.options.defaultNS||[],a=n&&e.includes(n),o=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!XT(e,n,r);if(a&&!o){let t=e.match(this.interpolator.nestingRegexp);if(t&&t.length>0)return{key:e,namespaces:Y(i)?[i]:i};let a=e.split(n);(n!==r||n===r&&this.options.ns.includes(a[0]))&&(i=a.shift()),e=a.join(r)}return{key:e,namespaces:Y(i)?[i]:i}}translate(t,n,r){let i=typeof n==`object`?{...n}:n;if(typeof i!=`object`&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),typeof i==`object`&&(i={...i}),i||={},t==null)return``;typeof t==`function`&&(t=MT(t,{...this.options,...i})),Array.isArray(t)||(t=[String(t)]),t=t.map(e=>typeof e==`function`?MT(e,{...this.options,...i}):String(e));let a=i.returnDetails===void 0?this.options.returnDetails:i.returnDetails,o=i.keySeparator===void 0?this.options.keySeparator:i.keySeparator,{key:s,namespaces:c}=this.extractFromKey(t[t.length-1],i),l=c[c.length-1],u=i.nsSeparator===void 0?this.options.nsSeparator:i.nsSeparator;u===void 0&&(u=`:`);let d=i.lng||this.language,f=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(d?.toLowerCase()===`cimode`)return f?a?{res:`${l}${u}${s}`,usedKey:s,exactUsedKey:s,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:`${l}${u}${s}`:a?{res:s,usedKey:s,exactUsedKey:s,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:s;let p=this.resolve(t,i),m=p?.res,h=p?.usedKey||s,g=p?.exactUsedKey||s,_=[`[object Number]`,`[object Function]`,`[object RegExp]`],v=i.joinArrays===void 0?this.options.joinArrays:i.joinArrays,y=!this.i18nFormat||this.i18nFormat.handleAsObject,b=i.count!==void 0&&!Y(i.count),x=e.hasDefaultValue(i),S=b?this.pluralResolver.getSuffix(d,i.count,i):``,C=i.ordinal&&b?this.pluralResolver.getSuffix(d,i.count,{ordinal:!1}):``,w=b&&!i.ordinal&&i.count===0,T=w&&i[`defaultValue${this.options.pluralSeparator}zero`]||i[`defaultValue${S}`]||i[`defaultValue${C}`]||i.defaultValue,E=m;y&&!m&&x&&(E=T);let D=aE(E),ee=Object.prototype.toString.apply(E);if(y&&E&&D&&!_.includes(ee)&&!(Y(v)&&Array.isArray(E))){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn(`accessing an object - but returnObjects options is not enabled!`);let e=this.options.returnedObjectHandler?this.options.returnedObjectHandler(h,E,{...i,ns:c}):`key '${s} (${this.language})' returned an object instead of string.`;return a?(p.res=e,p.usedParams=this.getUsedParamsDetails(i),p):e}if(o){let e=Array.isArray(E),t=e?[]:{},n=e?g:h;for(let e in E)if(Object.prototype.hasOwnProperty.call(E,e)){let r=`${n}${o}${e}`;t[e]=x&&!m?this.translate(r,{...i,defaultValue:aE(T)?T[e]:void 0,joinArrays:!1,ns:c}):this.translate(r,{...i,joinArrays:!1,ns:c}),t[e]===r&&(t[e]=E[e])}m=t}}else if(y&&Y(v)&&Array.isArray(m))m=m.join(v),m&&=this.extendTranslation(m,t,i,r);else{let e=!1,n=!1;!this.isValidLookup(m)&&x&&(e=!0,m=T),this.isValidLookup(m)||(n=!0,m=s);let a=(i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&n?void 0:m,c=x&&T!==m&&this.options.updateMissing;if(n||e||c){if(this.logger.log(c?`updateKey`:`missingKey`,d,l,b&&!c?`${s}${this.pluralResolver.getSuffix(d,i.count,i)}`:s,c?T:m),o){let e=this.resolve(s,{...i,keySeparator:!1});e&&e.res&&this.logger.warn(`Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.`)}let e=[],t=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo===`fallback`&&t&&t[0])for(let n=0;n<t.length;n++)e.push(t[n]);else this.options.saveMissingTo===`all`?e=this.languageUtils.toResolveHierarchy(i.lng||this.language):e.push(i.lng||this.language);let n=(e,t,n)=>{let r=x&&n!==m?n:a;this.options.missingKeyHandler?this.options.missingKeyHandler(e,l,t,r,c,i):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(e,l,t,r,c,i),this.emit(`missingKey`,e,l,t,m)};this.options.saveMissing&&(this.options.saveMissingPlurals&&b?e.forEach(e=>{let t=this.pluralResolver.getSuffixes(e,i);w&&i[`defaultValue${this.options.pluralSeparator}zero`]&&!t.includes(`${this.options.pluralSeparator}zero`)&&t.push(`${this.options.pluralSeparator}zero`),t.forEach(t=>{n([e],s+t,i[`defaultValue${t}`]||T)})}):n(e,s,T))}m=this.extendTranslation(m,t,i,p,r),n&&m===s&&this.options.appendNamespaceToMissingKey&&(m=`${l}${u}${s}`),(n||e)&&this.options.parseMissingKeyHandler&&(m=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}${u}${s}`:s,e?m:void 0,i))}return a?(p.res=m,p.usedParams=this.getUsedParamsDetails(i),p):m}extendTranslation(e,t,n,r,i){if(this.i18nFormat?.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});let a=Y(e)&&(n?.interpolation?.skipOnVariables===void 0?this.options.interpolation.skipOnVariables:n.interpolation.skipOnVariables),o;if(a){let t=e.match(this.interpolator.nestingRegexp);o=t&&t.length}let s=n.replace&&!Y(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),e=this.interpolator.interpolate(e,s,n.lng||this.language||r.usedLng,n),a){let t=e.match(this.interpolator.nestingRegexp),r=t&&t.length;o<r&&(n.nest=!1)}!n.lng&&r&&r.res&&(n.lng=this.language||r.usedLng),n.nest!==!1&&(e=this.interpolator.nest(e,(...e)=>i?.[0]===e[0]&&!n.context?(this.logger.warn(`It seems you are nesting recursively key: ${e[0]} in key: ${t[0]}`),null):this.translate(...e,t),n)),n.interpolation&&this.interpolator.reset()}let a=n.postProcess||this.options.postProcess,o=Y(a)?[a]:a;return e!=null&&o?.length&&n.applyPostProcessor!==!1&&(e=rE.handle(o,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),e}resolve(e,t={}){let n,r,i,a,o;return Y(e)&&(e=[e]),Array.isArray(e)&&(e=e.map(e=>typeof e==`function`?MT(e,{...this.options,...t}):e)),e.forEach(e=>{if(this.isValidLookup(n))return;let s=this.extractFromKey(e,t),c=s.key;r=c;let l=s.namespaces;this.options.fallbackNS&&(l=l.concat(this.options.fallbackNS));let u=t.count!==void 0&&!Y(t.count),d=u&&!t.ordinal&&t.count===0,f=t.context!==void 0&&(Y(t.context)||typeof t.context==`number`)&&t.context!==``,p=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);l.forEach(e=>{this.isValidLookup(n)||(o=e,!this.checkedLoadedFor[`${p[0]}-${e}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(o)&&(this.checkedLoadedFor[`${p[0]}-${e}`]=!0,this.logger.warn(`key "${r}" for languages "${p.join(`, `)}" won't get resolved as namespace "${o}" was not yet loaded`,`This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`)),p.forEach(r=>{if(this.isValidLookup(n))return;a=r;let o=[c];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(o,c,r,e,t);else{let e;u&&(e=this.pluralResolver.getSuffix(r,t.count,t));let n=`${this.options.pluralSeparator}zero`,i=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(u&&(t.ordinal&&e.startsWith(i)&&o.push(c+e.replace(i,this.options.pluralSeparator)),o.push(c+e),d&&o.push(c+n)),f){let r=`${c}${this.options.contextSeparator||`_`}${t.context}`;o.push(r),u&&(t.ordinal&&e.startsWith(i)&&o.push(r+e.replace(i,this.options.pluralSeparator)),o.push(r+e),d&&o.push(r+n))}}let s;for(;s=o.pop();)this.isValidLookup(n)||(i=s,n=this.getResource(r,e,s,t))}))})}),{res:n,usedKey:r,exactUsedKey:i,usedLng:a,usedNS:o}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e===``)}getResource(e,t,n,r={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(e,t,n,r):this.resourceStore.getResource(e,t,n,r)}getUsedParamsDetails(e={}){let t=[`defaultValue`,`ordinal`,`context`,`replace`,`lng`,`lngs`,`fallbackLng`,`ns`,`keySeparator`,`nsSeparator`,`returnObjects`,`returnDetails`,`joinArrays`,`postProcess`,`interpolation`],n=e.replace&&!Y(e.replace),r=n?e.replace:e;if(n&&e.count!==void 0&&(r={...r,count:e.count}),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!n){r={...r};for(let e of t)delete r[e]}return r}static hasDefaultValue(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&t.startsWith(`defaultValue`)&&e[t]!==void 0)return!0;return!1}},sE=class{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Z.create(`languageUtils`)}getScriptPartFromCode(e){if(e=QT(e),!e||!e.includes(`-`))return null;let t=e.split(`-`);return t.length===2||(t.pop(),t[t.length-1].toLowerCase()===`x`)?null:this.formatLanguageCode(t.join(`-`))}getLanguagePartFromCode(e){if(e=QT(e),!e||!e.includes(`-`))return e;let t=e.split(`-`);return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(Y(e)&&e.includes(`-`)){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load===`languageOnly`||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.includes(e)}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(e=>{if(t)return;let n=this.formatLanguageCode(e);(!this.options.supportedLngs||this.isSupportedCode(n))&&(t=n)}),!t&&this.options.supportedLngs&&e.forEach(e=>{if(t)return;let n=this.getScriptPartFromCode(e);if(this.isSupportedCode(n))return t=n;let r=this.getLanguagePartFromCode(e);if(this.isSupportedCode(r))return t=r;t=this.options.supportedLngs.find(e=>e===r?!0:!e.includes(`-`)&&!r.includes(`-`)?!1:!!(e.includes(`-`)&&!r.includes(`-`)&&e.slice(0,e.indexOf(`-`))===r||e.startsWith(r)&&r.length>1))}),t||=this.getFallbackCodes(this.options.fallbackLng)[0],t}getFallbackCodes(e,t){if(!e)return[];if(typeof e==`function`&&(e=e(t)),Y(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let n=e[t];return n||=e[this.getScriptPartFromCode(t)],n||=e[this.formatLanguageCode(t)],n||=e[this.getLanguagePartFromCode(t)],n||=e.default,n||[]}toResolveHierarchy(e,t){let n=this.getFallbackCodes((t===!1?[]:t)||this.options.fallbackLng||[],e),r=[],i=e=>{e&&(this.isSupportedCode(e)?r.push(e):this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))};return Y(e)&&(e.includes(`-`)||e.includes(`_`))?(this.options.load!==`languageOnly`&&i(this.formatLanguageCode(e)),this.options.load!==`languageOnly`&&this.options.load!==`currentOnly`&&i(this.getScriptPartFromCode(e)),this.options.load!==`currentOnly`&&i(this.getLanguagePartFromCode(e))):Y(e)&&i(this.formatLanguageCode(e)),n.forEach(e=>{r.includes(e)||i(this.formatLanguageCode(e))}),r}},cE={zero:0,one:1,two:2,few:3,many:4,other:5},lE={select:e=>e===1?`one`:`other`,resolvedOptions:()=>({pluralCategories:[`one`,`other`]})},uE=class{constructor(e,t={}){this.languageUtils=e,this.options=t,this.logger=Z.create(`pluralResolver`),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(e,t={}){let n=QT(e===`dev`?`en`:e),r=t.ordinal?`ordinal`:`cardinal`,i=JSON.stringify({cleanedCode:n,type:r});if(i in this.pluralRulesCache)return this.pluralRulesCache[i];let a;try{a=new Intl.PluralRules(n,{type:r})}catch{if(typeof Intl>`u`)return this.logger.error(`No Intl support, please use an Intl polyfill!`),lE;if(!e.match(/-|_/))return lE;let n=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(n,t)}return this.pluralRulesCache[i]=a,a}needsPlural(e,t={}){let n=this.getRule(e,t);return n||=this.getRule(`dev`,t),n?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(e,t,n={}){return this.getSuffixes(e,n).map(e=>`${t}${e}`)}getSuffixes(e,t={}){let n=this.getRule(e,t);return n||=this.getRule(`dev`,t),n?n.resolvedOptions().pluralCategories.sort((e,t)=>cE[e]-cE[t]).map(e=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:``}${e}`):[]}getSuffix(e,t,n={}){let r=this.getRule(e,n);return r?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:``}${r.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix(`dev`,t,n))}},dE=(e,t,n,r=`.`,i=!0)=>{let a=UT(e,t,n);return!a&&i&&Y(n)&&(a=ZT(e,n,r),a===void 0&&(a=ZT(t,n,r))),a},fE=e=>e.replace(/\$/g,`$$$$`),pE=class{constructor(e={}){this.logger=Z.create(`interpolator`),this.options=e,this.format=e?.interpolation?.format||(e=>e),this.init(e)}init(e={}){e.interpolation||={escapeValue:!0};let{escape:t,escapeValue:n,useRawValueToEscape:r,prefix:i,prefixEscaped:a,suffix:o,suffixEscaped:s,formatSeparator:c,unescapeSuffix:l,unescapePrefix:u,nestingPrefix:d,nestingPrefixEscaped:f,nestingSuffix:p,nestingSuffixEscaped:m,nestingOptionsSeparator:h,maxReplaces:g,alwaysFormat:_}=e.interpolation;this.escape=t===void 0?KT:t,this.escapeValue=n===void 0||n,this.useRawValueToEscape=r!==void 0&&r,this.prefix=i?X(i):a||`{{`,this.suffix=o?X(o):s||`}}`,this.formatSeparator=c||`,`,this.unescapePrefix=l?``:u?X(u):`-`,this.unescapeSuffix=this.unescapePrefix?``:l?X(l):``,this.nestingPrefix=d?X(d):f||X(`$t(`),this.nestingSuffix=p?X(p):m||X(`)`),this.nestingOptionsSeparator=h||`,`,this.maxReplaces=g||1e3,this.alwaysFormat=_!==void 0&&_,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){let e=(e,t)=>e?.source===t?(e.lastIndex=0,e):new RegExp(t,`g`);this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,t,n,r){let i,a,o,s=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=e=>{if(!e.includes(this.formatSeparator)){let i=dE(t,s,e,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(i,void 0,n,{...r,...t,interpolationkey:e}):i}let i=e.split(this.formatSeparator),a=i.shift().trim(),o=i.join(this.formatSeparator).trim();return this.format(dE(t,s,a,this.options.keySeparator,this.options.ignoreJSONStructure),o,n,{...r,...t,interpolationkey:a})};this.resetRegExp(),!this.escapeValue&&typeof e==`string`&&/\$t\([^)]*\{[^}]*\{\{/.test(e)&&this.logger.warn(`nesting options string contains interpolated variables with escapeValue: false — if any of those values are attacker-controlled they can inject additional nesting options (e.g. redirect lng/ns). Sanitise untrusted input before passing it to t(), or keep escapeValue: true.`);let l=r?.missingInterpolationHandler||this.options.missingInterpolationHandler,u=r?.interpolation?.skipOnVariables===void 0?this.options.interpolation.skipOnVariables:r.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:e=>e},{regex:this.regexp,safeValue:e=>this.escapeValue?this.escape(e):e}].forEach(t=>{for(o=0;i=t.regex.exec(e);){let n=i[1].trim();if(a=c(n),a===void 0){if(typeof l==`function`){let t=l(e,i,r);a=Y(t)?t:``}else if(r&&Object.prototype.hasOwnProperty.call(r,n))a=``;else if(u){a=i[0];continue}else this.logger.warn(`missed to pass in variable ${n} for interpolating ${e}`),a=``}else!Y(a)&&!this.useRawValueToEscape&&(a=PT(a));let s=t.safeValue(a);if(e=e.replace(i[0],fE(s)),u?(t.regex.lastIndex+=s.length,t.regex.lastIndex-=i[0].length):t.regex.lastIndex=0,o++,o>=this.maxReplaces)break}}),e}nest(e,t,n={}){let r,i,a,o=(e,t)=>{let n=this.nestingOptionsSeparator;if(!e.includes(n))return e;let r=e.split(RegExp(`${X(n)}[ ]*{`)),i=`{${r[1]}`;e=r[0],i=this.interpolate(i,a);let o=i.match(/'/g),s=i.match(/"/g);((o?.length??0)%2==0&&!s||(s?.length??0)%2!=0)&&(i=i.replace(/'/g,`"`));try{a=JSON.parse(i),t&&(a={...t,...a})}catch(t){return this.logger.warn(`failed parsing options string in nesting for key ${e}`,t),`${e}${n}${i}`}return a.defaultValue&&a.defaultValue.includes(this.prefix)&&delete a.defaultValue,e};for(;r=this.nestingRegexp.exec(e);){let s=[];a={...n},a=a.replace&&!Y(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let c=/{.*}/s.test(r[1])?r[1].lastIndexOf(`}`)+1:r[1].indexOf(this.formatSeparator);if(c!==-1&&(s=r[1].slice(c).split(this.formatSeparator).map(e=>e.trim()).filter(Boolean),r[1]=r[1].slice(0,c)),i=t(o.call(this,r[1].trim(),a),a),i&&r[0]===e&&!Y(i))return i;Y(i)||(i=PT(i)),i||=(this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`),``),s.length&&(i=s.reduce((e,t)=>this.format(e,t,n.lng,{...n,interpolationkey:r[1].trim()}),i.trim())),e=e.replace(r[0],i),this.regexp.lastIndex=0}return e}},mE=e=>{let t=e.toLowerCase().trim(),n={};if(e.includes(`(`)){let r=e.split(`(`);t=r[0].toLowerCase().trim();let i=r[1].slice(0,-1);t===`currency`&&!i.includes(`:`)?n.currency||=i.trim():t===`relativetime`&&!i.includes(`:`)?n.range||=i.trim():i.split(`;`).forEach(e=>{if(e){let[t,...r]=e.split(`:`),i=r.join(`:`).trim().replace(/^'+|'+$/g,``),a=t.trim();n[a]||(n[a]=i),i===`false`&&(n[a]=!1),i===`true`&&(n[a]=!0),isNaN(i)||(n[a]=parseInt(i,10))}})}return{formatName:t,formatOptions:n}},hE=e=>{let t={};return(n,r,i)=>{let a=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(a={...a,[i.interpolationkey]:void 0});let o=r+JSON.stringify(a),s=t[o];return s||(s=e(QT(r),i),t[o]=s),s(n)}},gE=e=>(t,n,r)=>e(QT(n),r)(t),_E=class{constructor(e={}){this.logger=Z.create(`formatter`),this.options=e,this.init(e)}init(e,t={interpolation:{}}){this.formatSeparator=t.interpolation.formatSeparator||`,`;let n=t.cacheInBuiltFormats?hE:gE;this.formats={number:n((e,t)=>{let n=new Intl.NumberFormat(e,{...t});return e=>n.format(e)}),currency:n((e,t)=>{let n=new Intl.NumberFormat(e,{...t,style:`currency`});return e=>n.format(e)}),datetime:n((e,t)=>{let n=new Intl.DateTimeFormat(e,{...t});return e=>n.format(e)}),relativetime:n((e,t)=>{let n=new Intl.RelativeTimeFormat(e,{...t});return e=>n.format(e,t.range||`day`)}),list:n((e,t)=>{let n=new Intl.ListFormat(e,{...t});return e=>n.format(e)})}}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=hE(t)}format(e,t,n,r={}){if(!t||e==null)return e;let i=t.split(this.formatSeparator),a=[];for(let e=0;e<i.length;e++){let t=i[e];for(;t.indexOf(`(`)>-1&&!t.includes(`)`)&&e+1<i.length;)t=`${t}${this.formatSeparator}${i[++e]}`;a.push(t)}return a.reduce((e,t)=>{let{formatName:i,formatOptions:a}=mE(t);if(this.formats[i]){let t=e;try{let o=r?.formatParams?.[r.interpolationkey]||{},s=o.locale||o.lng||r.locale||r.lng||n;t=this.formats[i](e,s,{...a,...r,...o})}catch(e){this.logger.warn(e)}return t}return this.logger.warn(`there was no format function for ${i}`),e},e)}},vE=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)},yE=class extends tE{constructor(e,t,n,r={}){super(),this.backend=e,this.store=t,this.services=n,this.languageUtils=n.languageUtils,this.options=r,this.logger=Z.create(`backendConnector`),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(n,r.backend,r)}queueLoad(e,t,n,r){let i={},a={},o={},s={};return e.forEach(e=>{let r=!0;t.forEach(t=>{let o=`${e}|${t}`;!n.reload&&this.store.hasResourceBundle(e,t)?this.state[o]=2:this.state[o]<0||(this.state[o]===1?a[o]===void 0&&(a[o]=!0):(this.state[o]=1,r=!1,a[o]===void 0&&(a[o]=!0),i[o]===void 0&&(i[o]=!0),s[t]===void 0&&(s[t]=!0)))}),r||(o[e]=!0)}),(Object.keys(i).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(i),pending:Object.keys(a),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(s)}}loaded(e,t,n){let r=e.split(`|`),i=r[0],a=r[1];t&&this.emit(`failedLoading`,i,a,t),!t&&n&&this.store.addResourceBundle(i,a,n,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&n&&(this.state[e]=0);let o={};this.queue.forEach(n=>{VT(n.loaded,[i],a),vE(n,e),t&&n.errors.push(t),n.pendingCount===0&&!n.done&&(Object.keys(n.loaded).forEach(e=>{o[e]||(o[e]={});let t=n.loaded[e];t.length&&t.forEach(t=>{o[e][t]===void 0&&(o[e][t]=!0)})}),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())}),this.emit(`loaded`,o),this.queue=this.queue.filter(e=>!e.done)}read(e,t,n,r=0,i=this.retryTimeout,a){if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:n,tried:r,wait:i,callback:a});return}this.readingCalls++;let o=(o,s)=>{if(this.readingCalls--,this.waitingReads.length>0){let e=this.waitingReads.shift();this.read(e.lng,e.ns,e.fcName,e.tried,e.wait,e.callback)}if(o&&s&&r<this.maxRetries){setTimeout(()=>{this.read(e,t,n,r+1,i*2,a)},i);return}a(o,s)},s=this.backend[n].bind(this.backend);if(s.length===2){try{let n=s(e,t);n&&typeof n.then==`function`?n.then(e=>o(null,e)).catch(o):o(null,n)}catch(e){o(e)}return}return s(e,t,o)}prepareLoading(e,t,n={},r){if(!this.backend)return this.logger.warn(`No backend was added via i18next.use. Will not load resources.`),r&&r();Y(e)&&(e=this.languageUtils.toResolveHierarchy(e)),Y(t)&&(t=[t]);let i=this.queueLoad(e,t,n,r);if(!i.toLoad.length)return i.pending.length||r(),null;i.toLoad.forEach(e=>{this.loadOne(e)})}load(e,t,n){this.prepareLoading(e,t,{},n)}reload(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}loadOne(e,t=``){let n=e.split(`|`),r=n[0],i=n[1];this.read(r,i,`read`,void 0,void 0,(n,a)=>{n&&this.logger.warn(`${t}loading namespace ${i} for language ${r} failed`,n),!n&&a&&this.logger.log(`${t}loaded namespace ${i} for language ${r}`,a),this.loaded(e,n,a)})}saveMissing(e,t,n,r,i,a={},o=()=>{}){if(this.services?.utils?.hasLoadedNamespace&&!this.services?.utils?.hasLoadedNamespace(t)){this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`,`This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`);return}if(n!=null&&n!==``){if(this.backend?.create){let s={...a,isUpdate:i},c=this.backend.create.bind(this.backend);if(c.length<6)try{let i;i=c.length===5?c(e,t,n,r,s):c(e,t,n,r),i&&typeof i.then==`function`?i.then(e=>o(null,e)).catch(o):o(null,i)}catch(e){o(e)}else c(e,t,n,r,o,s)}e&&e[0]&&this.store.addResource(e[0],t,n,r)}}},bE=()=>({debug:!1,initAsync:!0,ns:[`translation`],defaultNS:[`translation`],fallbackLng:[`dev`],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:`all`,preload:!1,keySeparator:`.`,nsSeparator:`:`,pluralSeparator:`_`,contextSeparator:`_`,enableSelector:!1,partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:`fallback`,saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]==`object`&&(t=e[1]),Y(e[1])&&(t.defaultValue=e[1]),Y(e[2])&&(t.tDescription=e[2]),typeof e[2]==`object`||typeof e[3]==`object`){let n=e[3]||e[2];Object.keys(n).forEach(e=>{t[e]=n[e]})}return t},interpolation:{escapeValue:!0,prefix:`{{`,suffix:`}}`,formatSeparator:`,`,unescapePrefix:`-`,nestingPrefix:`$t(`,nestingSuffix:`)`,nestingOptionsSeparator:`,`,maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),xE=e=>(Y(e.ns)&&(e.ns=[e.ns]),Y(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),Y(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&!e.supportedLngs.includes(`cimode`)&&(e.supportedLngs=e.supportedLngs.concat([`cimode`])),e),SE=()=>{},CE=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(t=>{typeof e[t]==`function`&&(e[t]=e[t].bind(e))})},wE=class e extends tE{constructor(e={},t){if(super(),this.options=xE(e),this.services={},this.logger=Z,this.modules={external:[]},CE(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(e={},t){this.isInitializing=!0,typeof e==`function`&&(t=e,e={}),e.defaultNS==null&&e.ns&&(Y(e.ns)?e.defaultNS=e.ns:e.ns.includes(`translation`)||(e.defaultNS=e.ns[0]));let n=bE();this.options={...n,...this.options,...xE(e)},this.options.interpolation={...n.interpolation,...this.options.interpolation},e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator),typeof this.options.overloadTranslationOptionHandler!=`function`&&(this.options.overloadTranslationOptionHandler=n.overloadTranslationOptionHandler);let r=e=>e?typeof e==`function`?new e:e:null;if(!this.options.isClone){this.modules.logger?Z.init(r(this.modules.logger),this.options):Z.init(null,this.options);let e;e=this.modules.formatter?this.modules.formatter:_E;let t=new sE(this.options);this.store=new nE(this.options.resources,this.options);let n=this.services;n.logger=Z,n.resourceStore=this.store,n.languageUtils=t,n.pluralResolver=new uE(t,{prepend:this.options.pluralSeparator}),e&&(n.formatter=r(e),n.formatter.init&&n.formatter.init(n,this.options),this.options.interpolation.format=n.formatter.format.bind(n.formatter)),n.interpolator=new pE(this.options),n.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},n.backendConnector=new yE(r(this.modules.backend),n.resourceStore,n,this.options),n.backendConnector.on(`*`,(e,...t)=>{this.emit(e,...t)}),this.modules.languageDetector&&(n.languageDetector=r(this.modules.languageDetector),n.languageDetector.init&&n.languageDetector.init(n,this.options.detection,this.options)),this.modules.i18nFormat&&(n.i18nFormat=r(this.modules.i18nFormat),n.i18nFormat.init&&n.i18nFormat.init(this)),this.translator=new oE(this.services,this.options),this.translator.on(`*`,(e,...t)=>{this.emit(e,...t)}),this.modules.external.forEach(e=>{e.init&&e.init(this)})}if(this.format=this.options.interpolation.format,t||=SE,this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){let e=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);e.length>0&&e[0]!==`dev`&&(this.options.lng=e[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn(`init: no languageDetector is used and no lng is defined`),[`getResource`,`hasResourceBundle`,`getResourceBundle`,`getDataByLanguage`].forEach(e=>{this[e]=(...t)=>this.store[e](...t)}),[`addResource`,`addResources`,`addResourceBundle`,`removeResourceBundle`].forEach(e=>{this[e]=(...t)=>(this.store[e](...t),this)});let i=NT(),a=()=>{let e=(e,n)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn(`init: i18next is already initialized. You should call init just once!`),this.isInitialized=!0,this.options.isClone||this.logger.log(`initialized`,this.options),this.emit(`initialized`,this.options),i.resolve(n),t(e,n)};if((this.languages||this.isLanguageChangingTo)&&!this.isInitialized)return e(null,this.t.bind(this));this.changeLanguage(this.options.lng,e)};return this.options.resources||!this.options.initAsync?a():setTimeout(a,0),i}loadResources(e,t=SE){let n=t,r=Y(e)?e:this.language;if(typeof e==`function`&&(n=e),!this.options.resources||this.options.partialBundledLanguages){if(r?.toLowerCase()===`cimode`&&(!this.options.preload||this.options.preload.length===0))return n();let e=[],t=t=>{t&&t!==`cimode`&&this.services.languageUtils.toResolveHierarchy(t).forEach(t=>{t!==`cimode`&&(e.includes(t)||e.push(t))})};r?t(r):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(e=>t(e)),this.options.preload?.forEach?.(e=>t(e)),this.services.backendConnector.load(e,this.options.ns,e=>{!e&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),n(e)})}else n(null)}reloadResources(e,t,n){let r=NT();return typeof e==`function`&&(n=e,e=void 0),typeof t==`function`&&(n=t,t=void 0),e||=this.languages,t||=this.options.ns,n||=SE,this.services.backendConnector.reload(e,t,e=>{r.resolve(),n(e)}),r}use(e){if(!e)throw Error(`You are passing an undefined module! Please check the object you are passing to i18next.use()`);if(!e.type)throw Error(`You are passing a wrong module! Please check the object you are passing to i18next.use()`);return e.type===`backend`&&(this.modules.backend=e),(e.type===`logger`||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type===`languageDetector`&&(this.modules.languageDetector=e),e.type===`i18nFormat`&&(this.modules.i18nFormat=e),e.type===`postProcessor`&&rE.addPostProcessor(e),e.type===`formatter`&&(this.modules.formatter=e),e.type===`3rdParty`&&this.modules.external.push(e),this}setResolvedLanguage(e){if(e&&this.languages&&![`cimode`,`dev`].includes(e)){for(let e=0;e<this.languages.length;e++){let t=this.languages[e];if(![`cimode`,`dev`].includes(t)&&this.store.hasLanguageSomeTranslations(t)){this.resolvedLanguage=t;break}}!this.resolvedLanguage&&!this.languages.includes(e)&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,t){this.isLanguageChangingTo=e;let n=NT();this.emit(`languageChanging`,e);let r=e=>{this.language=e,this.languages=this.services.languageUtils.toResolveHierarchy(e),this.resolvedLanguage=void 0,this.setResolvedLanguage(e)},i=(i,a)=>{a?this.isLanguageChangingTo===e&&(r(a),this.translator.changeLanguage(a),this.isLanguageChangingTo=void 0,this.emit(`languageChanged`,a),this.logger.log(`languageChanged`,a)):this.isLanguageChangingTo=void 0,n.resolve((...e)=>this.t(...e)),t&&t(i,(...e)=>this.t(...e))},a=t=>{!e&&!t&&this.services.languageDetector&&(t=[]);let n=Y(t)?t:t&&t[0],a=this.store.hasLanguageSomeTranslations(n)?n:this.services.languageUtils.getBestMatchFromCodes(Y(t)?[t]:t);a&&(this.language||r(a),this.translator.language||this.translator.changeLanguage(a),this.services.languageDetector?.cacheUserLanguage?.(a)),this.loadResources(a,e=>{i(e,a)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),n}getFixedT(e,t,n,r){let i=r?.scopeNs,a=(e,t,...r)=>{let o;o=typeof t==`object`?{...t}:this.options.overloadTranslationOptionHandler([e,t].concat(r)),o.lng=o.lng||a.lng,o.lngs=o.lngs||a.lngs;let s=o.ns!==void 0&&o.ns!==null;o.ns=o.ns||a.ns,o.keyPrefix!==``&&(o.keyPrefix=o.keyPrefix||n||a.keyPrefix);let c={...this.options,...o};Array.isArray(i)&&!s&&(c.ns=i),typeof o.keyPrefix==`function`&&(o.keyPrefix=MT(o.keyPrefix,c));let l=this.options.keySeparator||`.`,u;return o.keyPrefix&&Array.isArray(e)?u=e.map(e=>(typeof e==`function`&&(e=MT(e,c)),`${o.keyPrefix}${l}${e}`)):(typeof e==`function`&&(e=MT(e,c)),u=o.keyPrefix?`${o.keyPrefix}${l}${e}`:e),this.t(u,o)};return Y(e)?a.lng=e:a.lngs=e,a.ns=t,a.keyPrefix=n,a}t(...e){return this.translator?.translate(...e)}exists(...e){return this.translator?.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,t={}){if(!this.isInitialized)return this.logger.warn(`hasLoadedNamespace: i18next was not initialized`,this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn(`hasLoadedNamespace: i18n.languages were undefined or empty`,this.languages),!1;let n=t.lng||this.resolvedLanguage||this.languages[0],r=this.options?this.options.fallbackLng:!1,i=this.languages[this.languages.length-1];if(n.toLowerCase()===`cimode`)return!0;let a=(e,t)=>{let n=this.services.backendConnector.state[`${e}|${t}`];return n===-1||n===0||n===2};if(t.precheck){let e=t.precheck(this,a);if(e!==void 0)return e}return!!(this.hasResourceBundle(n,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(n,e)&&(!r||a(i,e)))}loadNamespaces(e,t){let n=NT();return this.options.ns?(Y(e)&&(e=[e]),e.forEach(e=>{this.options.ns.includes(e)||this.options.ns.push(e)}),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}loadLanguages(e,t){let n=NT();Y(e)&&(e=[e]);let r=this.options.preload||[],i=e.filter(e=>!r.includes(e)&&this.services.languageUtils.isSupportedCode(e));return i.length?(this.options.preload=r.concat(i),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}dir(e){if(e||=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language),!e)return`rtl`;try{let t=new Intl.Locale(e);if(t&&t.getTextInfo){let e=t.getTextInfo();if(e&&e.direction)return e.direction}}catch{}let t=`ar.shu.sqr.ssh.xaa.yhd.yud.aao.abh.abv.acm.acq.acw.acx.acy.adf.ads.aeb.aec.afb.ajp.apc.apd.arb.arq.ars.ary.arz.auz.avl.ayh.ayl.ayn.ayp.bbz.pga.he.iw.ps.pbt.pbu.pst.prp.prd.ug.ur.ydd.yds.yih.ji.yi.hbo.men.xmn.fa.jpr.peo.pes.prs.dv.sam.ckb`.split(`.`),n=this.services?.languageUtils||new sE(bE());return e.toLowerCase().indexOf(`-latn`)>1?`ltr`:t.includes(n.getLanguagePartFromCode(e))||e.toLowerCase().indexOf(`-arab`)>1?`rtl`:`ltr`}static createInstance(t={},n){let r=new e(t,n);return r.createInstance=e.createInstance,r}cloneInstance(t={},n=SE){let r=t.forkResourceStore;r&&delete t.forkResourceStore;let i={...this.options,...t,isClone:!0},a=new e(i);if((t.debug!==void 0||t.prefix!==void 0)&&(a.logger=a.logger.clone(t)),[`store`,`services`,`language`].forEach(e=>{a[e]=this[e]}),a.services={...this.services},a.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},r){let e=Object.keys(this.store.data).reduce((e,t)=>(e[t]={...this.store.data[t]},e[t]=Object.keys(e[t]).reduce((n,r)=>(n[r]={...e[t][r]},n),e[t]),e),{});a.store=new nE(e,i),a.services.resourceStore=a.store}if(t.interpolation){let e={...bE().interpolation,...this.options.interpolation,...t.interpolation},n={...i,interpolation:e};a.services.interpolator=new pE(n)}return a.translator=new oE(a.services,i),a.translator.on(`*`,(e,...t)=>{a.emit(e,...t)}),a.init(i,n),a.translator.options=i,a.translator.backendConnector.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}},Q=wE.createInstance(),Q.createInstance,Q.dir,Q.init,Q.loadResources,Q.reloadResources,Q.use,Q.changeLanguage,Q.getFixedT,TE=Q.t,Q.exists,Q.setDefaultNamespace,Q.hasLoadedNamespace,Q.loadNamespaces,Q.loadLanguages})))()}var DE,OE;function kE(){return(kE=e((()=>{F(),U(),DE={},OE=H(class extends ln{constructor(){super(...arguments),this.ot=DE}render(e,t){return t()}update(e,[t,n]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((e,t)=>e===this.ot[t]))return N}else if(this.ot===t)return N;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,n)}})})))()}var AE,jE;function ME(){return(ME=e((()=>{AE=class{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}},jE=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}}})))()}var NE,PE,FE,IE;function LE(){return(LE=e((()=>{F(),Qe(),_n(),ME(),U(),NE=e=>!He(e)&&typeof e.then==`function`,PE=1073741823,FE=class extends gn{constructor(){super(...arguments),this._$Cwt=PE,this._$Cbt=[],this._$CK=new AE(this),this._$CX=new jE}render(...e){return e.find(e=>!NE(e))??N}update(e,t){let n=this._$Cbt,r=n.length;this._$Cbt=t;let i=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let o=t[e];if(!NE(o))return this._$Cwt=e,o;e<r&&o===n[e]||(this._$Cwt=PE,r=0,Promise.resolve(o).then(async e=>{for(;a.get();)await a.get();let t=i.deref();if(t!==void 0){let n=t._$Cbt.indexOf(o);n>-1&&n<t._$Cwt&&(t._$Cwt=n,t.setValue(e))}}))}return N}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}},IE=H(FE)})))()}function RE(){return(RE=e((()=>{_n()})))()}var zE,BE;function VE(){return(VE=e((()=>{F(),U(),Qe(),zE=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},BE=H(class extends ln{constructor(e){if(super(e),e.type!==V.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){let i=Xe(e),{values:a,keys:o}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=o,a;let s=this.ut??=[],c=[],l,u,d=0,f=i.length-1,p=0,m=a.length-1;for(;d<=f&&p<=m;)if(i[d]===null)d++;else if(i[f]===null)f--;else if(s[d]===o[p])c[p]=qe(i[d],a[p]),d++,p++;else if(s[f]===o[m])c[m]=qe(i[f],a[m]),f--,m--;else if(s[d]===o[m])c[m]=qe(i[d],a[m]),Ke(e,c[m+1],i[d]),d++,m--;else if(s[f]===o[p])c[p]=qe(i[f],a[p]),Ke(e,i[d],i[f]),f--,p++;else if(l===void 0&&(l=zE(o,p,m),u=zE(s,d,f)),l.has(s[d])){if(l.has(s[f])){let t=u.get(o[p]),n=t===void 0?null:i[t];if(n===null){let t=Ke(e,i[d]);qe(t,a[p]),c[p]=t}else c[p]=qe(n,a[p]),Ke(e,i[d],n),i[t]=null;p++}else Ze(i[f]),f--}else Ze(i[d]),d++;for(;p<=m;){let t=Ke(e,c[m+1]);qe(t,a[p]),c[p++]=t}for(;d<=f;){let e=i[d++];e!==null&&Ze(e)}return this.ut=o,Ye(e,c),N}})})))()}function HE(){return(HE=e((()=>{VE()})))()}var UE,WE,GE;function KE(){return(KE=e((()=>{UE=class e extends Event{constructor(t){super(e.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}},UE.eventName=`rangeChanged`,WE=class e extends Event{constructor(t){super(e.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}},WE.eventName=`visibilityChanged`,GE=class e extends Event{constructor(){super(e.eventName,{bubbles:!1})}},GE.eventName=`unpinned`})))()}var qE,JE;function YE(){return(YE=e((()=>{qE=class{constructor(e){this._element=null;let t=e??window;this._node=t,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}},JE=class extends qE{constructor(e,t){super(t),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);let n=this._node;this._originalScrollTo=n.scrollTo,this._originalScrollBy=n.scrollBy,this._originalScroll=n.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(e,t){let n=typeof e==`number`&&typeof t==`number`?{left:e,top:t}:e;this._scrollTo(n)}scrollBy(e,t){let n=typeof e==`number`&&typeof t==`number`?{left:e,top:t}:e;n.top!==void 0&&(n.top+=this.scrollTop),n.left!==void 0&&(n.left+=this.scrollLeft),this._scrollTo(n)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,t=null,n=null){this._end!==null&&this._end(),e.behavior===`smooth`?(this._setDestination(e),this._retarget=t,this._end=n):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:t,left:n}=e;return t=t===void 0?void 0:Math.max(0,Math.min(t,this.maxScrollTop)),n=n===void 0?void 0:Math.max(0,Math.min(n,this.maxScrollLeft)),this._destination!==null&&n===this._destination.left&&t===this._destination.top?!1:(this.__destination={top:t,left:n,behavior:`smooth`},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,t,n){return this._scrollTo(e,t,n),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){let{scrollTop:e,scrollLeft:t}=this,{top:n,left:r}=this._destination;n=Math.min(n||0,this.maxScrollTop),r=Math.min(r||0,this.maxScrollLeft);let i=Math.abs(n-e),a=Math.abs(r-t);i<1&&a<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener(`scroll`,this._checkForArrival)),null}_attach(e){this._clients.add(e),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener(`scroll`,this._checkForArrival))}}})))()}function XE(e){let t=window.getComputedStyle(e);return{marginTop:ZE(t.marginTop),marginRight:ZE(t.marginRight),marginBottom:ZE(t.marginBottom),marginLeft:ZE(t.marginLeft)}}function ZE(e){let t=e?parseFloat(e):NaN;return Number.isNaN(t)?0:t}function QE(e){if(e.assignedSlot!==null)return e.assignedSlot;if(e.parentElement!==null)return e.parentElement;let t=e.parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host||null}function $E(e,t=!1){let n=[],r=t?e:QE(e);for(;r!==null;)n.push(r),r=QE(r);return n}function eD(e,t=!1){let n=!1;return $E(e,t).filter(e=>{if(n)return!1;let t=getComputedStyle(e);return n=t.position===`fixed`,t.overflow!==`visible`})}var tD,nD,rD,iD,aD;function oD(){return(oD=e((()=>{KE(),YE(),t(),tD=typeof window<`u`?window.ResizeObserver:void 0,nD=Symbol(`virtualizerRef`),rD=`virtualizer-sizer`,aD=class{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw Error(`Virtualizer constructor requires a configuration object`);if(e.hostElement)this._init(e);else throw Error(`Virtualizer configuration requires the "hostElement" property`)}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);let t=e.layout||{};this._layoutInitialized=this._initLayout(t)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new tD(()=>this._hostElementSizeChanged()),this._childrenRO=new tD(this._childrenSizeChanged.bind(this))}_initHostElement(e){let t=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),t[nD]=this}connected(){this._initObservers();let e=this._isScroller;this._clippingAncestors=eD(this._hostElement,e),this._scrollerController=new JE(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener(`scroll`,this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener(`scroll`,this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener(`scroll`,this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(e=>e.removeEventListener(`scroll`,this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise(`disconnected`),this._connected=!1}_applyVirtualizerStyles(){let e=this._hostElement.style;e.display=e.display||`block`,e.position=e.position||`relative`,e.contain=e.contain||`size layout`,this._isScroller&&(e.overflow=e.overflow||`auto`,e.minHeight=e.minHeight||`150px`)}_getSizer(){let e=this._hostElement;if(!this._sizer){let t=e.querySelector(`[${rD}]`);t||(t=document.createElement(`div`),t.setAttribute(rD,``),e.appendChild(t)),Object.assign(t.style,{position:`absolute`,margin:`-2px 0 0 0`,padding:0,visibility:`hidden`,fontSize:`2px`}),t.textContent=`&nbsp;`,t.setAttribute(rD,``),this._sizer=t}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;let t=e.type||iD;if(typeof t==`function`&&this._layout instanceof t){let t={...e};return delete t.type,this._layout.config=t,!0}return!1}async _initLayout(e){let t,r;if(typeof e.type==`function`){r=e.type;let n={...e};delete n.type,t=n}else t=e;r===void 0&&(iD=r=(await n(async()=>{let{FlowLayout:e}=await import(`./flow-BcvU3Oud.js`);return{FlowLayout:e}},__vite__mapDeps([0,1]),import.meta.url)).FlowLayout),this._layout=new r(e=>this._handleLayoutMessage(e),t),this._layout.measureChildren&&typeof this._layout.updateItemSizes==`function`&&(typeof this._layout.measureChildren==`function`&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener(`load`,this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){let e=window.performance.now(),t=e-this._benchmarkStart,n=performance.getEntriesByName(`uv-virtualizing`,`measure`).filter(t=>t.startTime>=this._benchmarkStart&&t.startTime<e).reduce((e,t)=>e+t.duration,0);return this._benchmarkStart=null,{timeElapsed:t,virtualizationTime:n}}return null}_measureChildren(){let e={},t=this._children,n=this._measureChildOverride||this._measureChild;for(let r=0;r<t.length;r++){let i=t[r],a=this._first+r;(this._itemsChanged||this._toBeMeasured.has(i))&&(e[a]=n.call(this,i,this._items[a]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){let{width:t,height:n}=e.getBoundingClientRect();return Object.assign({width:t,height:n},XE(e))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;let{_rangeChanged:t,_itemsChanged:n}=this;this._visibilityChanged&&=(this._notifyVisibility(),!1),(t||n)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&`mark`in window.performance&&window.performance.mark(`uv-end`))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&`mark`in window.performance&&window.performance.mark(`uv-end`))}_handleScrollEvent(){if(this._benchmarkStart&&`mark`in window.performance){try{window.performance.measure(`uv-virtualizing`,`uv-start`,`uv-end`)}catch(e){console.warn(`Error measuring performance data: `,e)}window.performance.mark(`uv-start`)}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(e){switch(e.type){case`scroll`:(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent();break;default:console.warn(`event not handled`,e)}}_handleLayoutMessage(e){e.type===`stateChanged`?this._updateDOM(e):e.type===`visibilityChanged`?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):e.type===`unpinned`&&this._hostElement.dispatchEvent(new GE)}get _children(){let e=[],t=this._hostElement.firstElementChild;for(;t;)t.hasAttribute(rD)||e.push(t),t=t.nextElementSibling;return e}_updateView(){let e=this._hostElement,t=this._scrollerController?.element,n=this._layout;if(e&&t&&n){let r,i,a,o,s=e.getBoundingClientRect();r=0,i=0,a=window.innerHeight,o=window.innerWidth;let c=this._clippingAncestors.map(e=>e.getBoundingClientRect());c.unshift(s);for(let e of c)r=Math.max(r,e.top),i=Math.max(i,e.left),a=Math.min(a,e.bottom),o=Math.min(o,e.right);let l=t.getBoundingClientRect(),u={left:s.left-l.left,top:s.top-l.top},d={width:t.scrollWidth,height:t.scrollHeight},f=r-s.top+e.scrollTop,p=i-s.left+e.scrollLeft,m=Math.max(0,a-r);n.viewportSize={width:Math.max(0,o-i),height:m},n.viewportScroll={top:f,left:p},n.totalScrollSize=d,n.offsetWithinScroller=u}}_sizeHostElement(e){let t=82e5,n=e&&e.width!==null?Math.min(t,e.width):0,r=e&&e.height!==null?Math.min(t,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${n}px, ${r}px)`;else{let e=this._hostElement.style;e.minWidth=n?`${n}px`:`100%`,e.minHeight=r?`${r}px`:`100%`}}_positionChildren(e){e&&e.forEach(({top:e,left:t,width:n,height:r,xOffset:i,yOffset:a},o)=>{let s=this._children[o-this._first];s&&(s.style.position=`absolute`,s.style.boxSizing=`border-box`,s.style.transform=`translate(${t}px, ${e}px)`,n!==void 0&&(s.style.width=n+`px`),r!==void 0&&(s.style.height=r+`px`),s.style.left=i===void 0?null:i+`px`,s.style.top=a===void 0?null:a+`px`)})}async _adjustRange(e){let{_first:t,_last:n,_firstVisible:r,_lastVisible:i}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==t||this._last!==n,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==r||this._lastVisible!==i}_correctScrollError(){if(this._scrollError){let{scrollTop:e,scrollLeft:t}=this._scrollerController,{top:n,left:r}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-n,left:t-r})}}element(e){return e===1/0&&(e=this._items.length-1),this._items?.[e]===void 0?void 0:{scrollIntoView:(t={})=>this._scrollElementIntoView({...t,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),e.behavior===`smooth`){let t=this._layout.getScrollIntoViewCoordinates(e),{behavior:n}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(t,{behavior:n}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){let{index:t}=this._scrollIntoViewTarget||{};t&&e?.has(t)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new UE({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new WE({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||=new Promise((e,t)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=t}),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){if(this._layout?.measureChildren){for(let t of e)this._toBeMeasured.set(t.target,t.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}})))()}var sD,cD,lD,uD;function dD(){return(dD=e((()=>{ze(),U(),RE(),HE(),oD(),sD=e=>e,cD=(e,t)=>j`${t}: ${JSON.stringify(e,null,2)}`,lD=class extends gn{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(e,t)=>cD(e,t+this._first),this._keyFunction=(e,t)=>sD(e,t+this._first),this._items=[],e.type!==V.CHILD)throw Error(`The virtualize directive can only be used in child expressions`)}render(e){e&&this._setFunctions(e);let t=[];if(this._first>=0&&this._last>=this._first)for(let e=this._first;e<=this._last;e++)t.push(this._items[e]);return BE(t,this._keyFunction,this._renderItem)}update(e,[t]){this._setFunctions(t);let n=this._items!==t.items;return this._items=t.items||[],this._virtualizer?this._updateVirtualizerConfig(e,t):this._initialize(e,t),n?N:this.render()}async _updateVirtualizerConfig(e,t){if(!await this._virtualizer.updateLayoutConfig(t.layout||{})){let n=e.parentNode;this._makeVirtualizer(n,t)}this._virtualizer.items=this._items}_setFunctions(e){let{renderItem:t,keyFunction:n}=e;t&&(this._renderItem=(e,n)=>t(e,n+this._first)),n&&(this._keyFunction=(e,t)=>n(e,t+this._first))}_makeVirtualizer(e,t){this._virtualizer&&this._virtualizer.disconnected();let{layout:n,scroller:r,items:i}=t;this._virtualizer=new aD({hostElement:e,layout:n,scroller:r}),this._virtualizer.items=i,this._virtualizer.connected()}_initialize(e,t){let n=e.parentNode;n&&n.nodeType===1&&(n.addEventListener(`rangeChanged`,e=>{this._first=e.first,this._last=e.last,this.setValue(this.render())}),this._makeVirtualizer(n,t))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}},uD=H(lD)})))()}var fD,pD,mD;function hD(){return(hD=e((()=>{F(),U(),fD=(e,t)=>{if(!e||!t)return;let n=Object.keys(t);return Object.fromEntries(Object.keys(e).flatMap(e=>n.includes(e)?[]:[[e,void 0]]))},pD=class extends ln{_props;render(e){return N}update(e,[t]){return this._props!==t&&Object.assign(e.element,fD(this._props,t),this._props=t),N}},mD=H(pD)})))()}function gD(e){return()=>e}var _D,vD,yD,bD;function xD(){return(xD=e((()=>{_D=gD(),vD=_D,yD=e=>e,bD=(e,...t)=>typeof e==`function`?e(...t):e})))()}var SD;function CD(){return(CD=e((()=>{G(),oT(),SD=e=>{let t=aT(),n=z(()=>new CSSStyleSheet,[]);R(()=>{t.shadowRoot.adoptedStyleSheets=[...t.shadowRoot.adoptedStyleSheets,n]},[]),R(()=>{n.replaceSync(e)},[e])}})))()}function wD(e){return e?t=>typeof t==`object`&&t?t[e]:t:yD}var TD,ED;function DD(){return(DD=e((()=>{xD(),TD=e=>{let t=wD(e);return e=>typeof e==`string`?e:t(e)?.toString()||``},ED=e=>t=>{let n={};for(let r in t)e.includes(r)&&(n[r]=t[r]);return n}})))()}var OD,kD;function AD(){return(AD=e((()=>{G(),OD=I`
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
`,kD=({index:e,itemHeight:t,auto:n})=>I`
	${J(!n,()=>I`
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
`})))()}var jD;function MD(){return(MD=e((()=>{G(),jD=e=>{let t=e===`auto`,[n,r]=Jt(t?40:e);return[n,e=>t?r(e):void 0]}})))()}var ND;function PD(){return(PD=e((()=>{ND=Symbol(`any key`)})))()}var FD;function ID(){return(ID=e((()=>{G(),xD(),FD=yn(()=>vD),customElements.define(`cosmoz-keybinding-provider`,FD.Provider)})))()}var LD;function RD(){return(RD=e((()=>{G(),LD=e=>{let t=z(()=>({}),[]);return z(()=>Object.assign(t,e),[t,...Object.values(e)])}})))()}var zD;function BD(){return(BD=e((()=>{G(),ID(),RD(),zD=(e,t)=>{let n=zt(FD),r=LD(e);R(()=>n(r),t)}})))()}var VD,HD,UD,WD;function GD(){return(GD=e((()=>{PD(),VD=e=>([t])=>Object.entries(t).every(([t,n])=>e[t]===n||n===ND),HD=e=>{if(e==null)return!1;let t=e.getBoundingClientRect(),n=e.getRootNode().elementFromPoint(t.x+t.width/2,t.y+t.height/2);return n!=null&&(e===n||e.contains(n))},UD=(e=document)=>{let t=e.activeElement;return t?t.shadowRoot?UD(t.shadowRoot):t:null},WD=()=>{let e=UD(document);return e?!!(e.matches(`input:not([type="checkbox"]), textarea`)||`isContentEditable`in e&&e.isContentEditable):!1}})))()}var KD;function qD(){return(qD=e((()=>{G(),RD(),GD(),KD=e=>{let t=LD({bindings:e});return R(()=>{let e=e=>{if(e.defaultPrevented)return;let n=t.bindings.find(VD(e));if(!n)return;let[,r,,i]=n;if(!i?.allowInEditable&&WD())return;let a=r.flatMap(e=>t[e]??[]);if(a.length===0)return;let o=a.find(e=>e.check&&!e.check()||e.element&&!HD(e.element())?!1:e);o&&(o.allowDefault||e.preventDefault(),o.callback(e))};return document.addEventListener(`keydown`,e,!0),()=>document.removeEventListener(`keydown`,e,!0)},[]),B(e=>(t[e.activity]=[e,...t[e.activity]??[]],()=>{t[e.activity]=t[e.activity]?.filter(t=>t!==e)}),[])}})))()}function JD(){return(JD=e((()=>{PD(),ID(),BD(),qD()})))()}var YD,XD,ZD,QD;function $D(){return($D=e((()=>{YD=Symbol(`listbox.navigate.up`),XD=Symbol(`listbox.navigate.down`),ZD=Symbol(`listbox.select`),QD=[[{key:`ArrowUp`},[YD],{title:`Navigate up`,description:`Move to previous listbox item`},{allowInEditable:!0}],[{key:`ArrowDown`},[XD],{title:`Navigate down`,description:`Move to next listbox item`},{allowInEditable:!0}],[{key:`Enter`},[ZD],{title:`Select`,description:`Select current listbox item`},{allowInEditable:!0}]]})))()}var eO;function tO(){return(tO=e((()=>{oT(),JD(),$D(),eO=({onUp:e,onDown:t,onEnter:n})=>{let r=aT();zD({activity:YD,callback:e,element:()=>r},[]),zD({activity:XD,callback:t,element:()=>r},[]),zD({activity:ZD,callback:n,element:()=>r},[])}})))()}var nO;function rO(){return(rO=e((()=>{G(),tO(),nO=({items:e,onSelect:t,defaultIndex:n=0})=>{let[r,i]=Jt({index:n}),{index:a}=r,{length:o}=e;return R(()=>{i({index:r.index<0?n:Math.min(r.index,e.length-1),scroll:!0})},[e,n]),eO({onUp:B(()=>i(e=>({index:e.index>0?e.index-1:o-1,scroll:!0})),[o]),onDown:B(()=>i(e=>({index:e.index<o-1?e.index+1:0,scroll:!0})),[o]),onEnter:B(()=>a>-1&&a<o&&t?.(e[a],a),[a,e,t])}),{position:r,highlight:B(e=>i({index:e}),[]),select:B(e=>t?.(e),[t])}}})))()}function iO(e){return e==null?[]:Array.isArray(e)?e:typeof e==`string`?[e]:aO(e)?Array.from(e):[e]}var aO,oO;function sO(){return(sO=e((()=>{xD(),aO=e=>typeof e==`object`&&!!e&&Symbol.iterator in e,oO=(e,t=yD)=>n=>{let r=iO(e).map(t);return iO(n).filter(e=>!r.includes(t(e)))}})))()}var cO,lO;function uO(){return(uO=e((()=>{sO(),F(),cO=(e,t)=>t?n=>n!=null&&iO(e).find(e=>e[t]===n[t]):t=>t!=null&&iO(e).includes(t),lO=(e,t)=>{if(!t||!e)return e;let n=e.toLowerCase().indexOf(t.toLowerCase());if(n<0)return e;let r=n+t.length;return[e.slice(0,n),j`<mark>${e.slice(n,r)}</mark>`,e.slice(r)]}})))()}var dO;function fO(){return(fO=e((()=>{xD(),F(),uO(),dO=(e=yD)=>(t,n,{highlight:r,select:i,textual:a=yD,query:o,isSelected:s})=>{let c=a(t),l=e(lO(c,o),t,n);return j`<div
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
			<div class="sizer" virtualizer-sizer>${l}</div>`},dO()})))()}var pO;function mO(){return(mO=e((()=>{RD(),G(),fO(),pO=({itemRenderer:e=dO(),...t})=>{let n=LD(t);return B((t,r)=>e(t,r,n),[n,e])}})))()}var hO,gO;function _O(){return(_O=e((()=>{G(),MD(),rO(),mO(),uO(),hO=[`query`,`items`,`onSelect`,`textual`,`anchor`,`itemHeight`,`itemLimit`,`itemRenderer`,`defaultIndex`,`value`,`valueProperty`,`loading`],gO=({value:e,valueProperty:t,items:n,onSelect:r,defaultIndex:i,query:a,textual:o,itemRenderer:s,itemHeight:c=40,itemLimit:l=5})=>{let u=z(()=>cO(e,t),[e,t]),d=z(()=>n.slice(),[n,u]),{position:f,highlight:p,select:m}=nO({items:d,onSelect:r,defaultIndex:isNaN(i)?void 0:Number(i)}),[h,g]=jD(c);return{position:f,items:d,height:Math.min(l,d.length)*h,highlight:p,select:m,itemHeight:h,setItemHeight:g,renderItem:pO({itemRenderer:s,items:d,position:f,highlight:p,select:m,textual:o,query:a,isSelected:u})}}})))()}var vO,yO,bO;function xO(){return(xO=e((()=>{dD(),En(),hD(),xD(),CD(),DD(),G(),kn(),AD(),_O(),vO=vD,yO=e=>{let t=rn(void 0),{position:n,items:r,renderItem:i,height:a,itemHeight:o,setItemHeight:s}=gO(e);return R(()=>{let n=t.current?.[nD];n&&n.layoutComplete.then(()=>{e.dispatchEvent(new CustomEvent(`layout-complete`));let{averageChildSize:t,averageMarginSize:r}=n._layout._metricsCache;return s(t+r*2)},vO)},[r]),R(()=>{if(!n.scroll)return;let e=t.current?.[nD];if(e){if(!e?._layout){e.layoutComplete.then(()=>e.element(n.index)?.scrollIntoView({block:`nearest`}),vO);return}e.element(n.index)?.scrollIntoView({block:`nearest`})}},[n]),SD(kD({...n,itemHeight:o,auto:e.itemHeight===`auto`})),j`<div
			class="items"
			style="min-height: ${a}px"
			${On(e=>t.current=e)}
		>
			<div virtualizer-sizer></div>
			${uD({items:r,renderItem:i,scroller:!0})}
		</div>
		<slot></slot>`},customElements.define(`cosmoz-listbox`,W(yO,{styleSheets:[wn(OD)]})),bO=({multi:e,...t},n)=>j`<cosmoz-listbox
		part="listbox"
		?multi=${e}
		...=${mD(ED(hO)(t))}
		>${n}</cosmoz-listbox
	>`})))()}var $,SO;function CO(){return(CO=e((()=>{G(),$=e=>`calc(var(--cz-spacing) * ${e})`,SO=I`
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
`})))()}var wO;function TO(){return(TO=e((()=>{Iw(),G(),CO(),wO=()=>j`<span class="badge" part="badge" role="status">
		<span class="dot" part="dot"></span>
		<slot name="prefix"></slot>
		<span class="content"><slot></slot></span>
		<slot name="suffix"></slot>
	</span>`,customElements.define(`cosmoz-badge`,W(wO,{styleSheets:[Fw,SO]}))})))()}function EO(){return(EO=e((()=>{TO()})))()}var DO,OO;function kO(){return(kO=e((()=>{G(),DO=e=>`calc(var(--cz-spacing) * ${e})`,OO=I`
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
		width: ${DO(2.5)};
		height: ${DO(2.5)};
	}

	:host([size='md']) .close svg,
	:host(:not([size])) .close svg {
		width: ${DO(3)};
		height: ${DO(3)};
	}

	:host([size='lg']) .close svg {
		width: ${DO(3.5)};
		height: ${DO(3.5)};
	}

	/* =========================================
	 * SLOTTED CONTENT (icons, images, flags)
	 * ========================================= */
	::slotted(svg) {
		width: ${DO(3.5)};
		height: ${DO(3.5)};
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
`})))()}var AO;function jO(){return(jO=e((()=>{EO(),Mw(),Iw(),G(),q(),kO(),AO=e=>{let{color:t,size:n,disabled:r,removable:i}=e,a=()=>{r||e.dispatchEvent(new CustomEvent(`remove`))};return j`<cosmoz-badge
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
					${xw()}
				</button>`)}
	</cosmoz-badge>`},customElements.define(`cosmoz-tag`,W(AO,{observedAttributes:[`color`,`size`,`disabled`,`removable`],styleSheets:[Fw,OO]}))})))()}function MO(){return(MO=e((()=>{jO()})))()}var NO;function PO(){return(PO=e((()=>{MO(),G(),q(),NO=({content:e,onClear:t,disabled:n,className:r=`chip`,hidden:i,slot:a})=>j`<cosmoz-tag
		class=${K(r)}
		slot=${K(a)}
		exportparts="chip-text, chip-clear"
		?disabled=${n}
		?hidden=${i}
		?removable=${!!t&&!n}
		@remove=${t}
		title=${K(typeof e==`string`?e:void 0)}
		>${e}</cosmoz-tag
	>`})))()}var FO;function IO(){return(IO=e((()=>{F(),PO(),FO=({value:e,min:t=0,onDeselect:n,textual:r,disabled:i,chipRenderer:a=NO})=>[...e.filter(Boolean).map(o=>a({item:o,content:r(o),onClear:e.length>t&&(()=>n(o)),disabled:i,slot:`control`})),a({item:null,content:j`<span></span>`,className:`badge`,disabled:!0,slot:`control`,hidden:!0})]})))()}var LO;function RO(){return(RO=e((()=>{G(),F(),LO=I`
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
`,customElements.define(`cosmoz-autocomplete-skeleton-span`,W(()=>P,{styleSheets:[LO]}))})))()}var zO;function BO(){return(BO=e((()=>{En(),zO=Sn`
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
`})))()}var VO,HO;function UO(){return(UO=e((()=>{VO=(e,t=()=>({}))=>{let n={type:e,toString(){return e}};return Object.assign((...e)=>Object.assign(t(...e),n),n)},HO=e=>e.type||e.toString()})))()}var WO,GO;function KO(){return(KO=e((()=>{UO(),WO=e=>Array.isArray(e)?e:[e],GO=(e,t)=>{let n=WO(t),r=(n.every(Array.isArray)?n:[n]).map(([e,t])=>({actions:WO(e).map(HO),handle:t}));return(t=e,n)=>{let i=r.find(e=>e.actions.includes(HO(n)));return i?i.handle(t,n):t}}})))()}var qO,JO,YO,XO,ZO,QO,$O;function ek(){return(ek=e((()=>{G(),KO(),UO(),qO={pending:`pending`,rejected:`rejected`,resolved:`resolved`},JO={error:void 0,result:void 0,state:qO.pending},YO=VO(qO.pending),XO=VO(qO.resolved,e=>({result:e})),ZO=VO(qO.rejected,e=>({error:e})),QO=GO(JO,[[YO,()=>({error:void 0,result:void 0,state:qO.pending})],[XO,(e,{result:t})=>({error:void 0,result:t,state:qO.resolved})],[ZO,(e,{error:t})=>({error:t,result:void 0,state:qO.rejected})]]),$O=e=>{let[{error:t,result:n,state:r},i]=Xt(QO,JO);return R(()=>{if(!e)return;let t=!1;return i(YO()),e.then(e=>!t&&i(XO(e)),e=>!t&&i(ZO(e))),()=>{t=!0}},[e]),[n,t,r]}})))()}var tk,nk,rk;function ik(){return(ik=e((()=>{JD(),$D(),tk=Symbol(`autocomplete.deselect.last`),nk=Symbol(`autocomplete.search.when.selected`),rk=[...QD,[{key:`Backspace`},[tk],{title:`Deselect last`,description:`Remove the last selected item`},{allowInEditable:!0}],[{key:ND},[nk],{title:`Start searching`,description:`Start searching when you start typing when an item is selected`},{allowInEditable:!0}]]})))()}var ak,ok,sk,ck,lk,uk;function dk(){return(dk=e((()=>{ak=e=>e.normalize(`NFD`).replace(/[\u0300-\u036f]/gu,``),ok=(e,t,n)=>{if(!t)return e;let r=ak(t.toLowerCase()),i=[];for(let t of e){let e=ak(n(t).toLowerCase()).indexOf(r);e<0||i.push({item:t,index:e})}return i.sort((e,t)=>e.index-t.index).map(({item:e})=>e)},sk=e=>e===!1||e==null?[]:e,ck=(e,t,n)=>e.dispatchEvent(new CustomEvent(t,{detail:n})),lk=[],uk=e=>(...t)=>{let n,r=()=>{n&&cancelAnimationFrame(n)};return r(),n=requestAnimationFrame(()=>{n=void 0,e(...t)}),r}})))()}var fk,pk;function mk(){return(mk=e((()=>{sO(),oT(),RD(),ek(),JD(),DD(),G(),ik(),dk(),fk=(e,t,n)=>B(r=>{t?.(r),e.dispatchEvent(new CustomEvent(n,{detail:r}))},[t]),pk=({value:e,text:t,mode:n,onChange:r,onText:i,onSelect:a,limit:o,min:s,source:c,textProperty:l,textual:u,valueProperty:d,keepOpened:f,keepQuery:p,preserveOrder:m,defaultIndex:h,externalSearch:g,disabled:_,lazyOpen:v})=>{let y=o==null?void 0:Number(o),b=s==null?void 0:Number(s),x=n===`select`,S=z(()=>(u??TD)(l),[u,l]),C=aT(),[w,T]=$t(`opened`,!1),E=!t,D=z(()=>t?.trim(),[t]),ee=fk(C,i,`text`),O=B(e=>{r?.(e,()=>T(!1));let t=x?e[0]:e;ck(C,`value`,t)},[r]),[te,ne]=Jt([]),re=!(!v||D),ie=z(()=>re?Promise.resolve([]):Promise.resolve(typeof c==`function`?c({query:D,active:w}):c).then(sk),[c,w,D,re]),k=z(()=>iO(e),[e]);R(()=>ie.then(ne),[ie]),zD({activity:tk,callback:()=>{let e=iO(k);e.length>(b??0)&&O(e.slice(0,-1))},check:()=>!_&&E&&C.matches(`:focus-within`),element:()=>C},[]),zD({activity:nk,callback:e=>{let t=iO(k),n=y===1;t.length>0&&n&&e.key.length===1&&O(t.slice(0,-1))},allowDefault:!0,check:()=>!_&&E&&C.matches(`:focus-within`),element:()=>C},[y]),R(()=>{!w&&!p&&ee(``)},[w,p]),R(()=>{C.toggleAttribute(`opened`,!!w)},[w]);let A=LD({onText:ee,onChange:O,value:k,limit:y,min:b,keepQuery:p,keepOpened:f,setOpened:T,onSelect:a,valueProperty:d}),[,,ae]=$O(ie);return{limit:y,opened:w,query:D,textual:S,value:k,source$:ie,loading:ae===`pending`,items:z(()=>{if(!w||re)return lk;let e=m?te:[...k,...oO(k,wD(d))(te)];return g?e:ok(e,D,S)},[te,w,D,S,E,k,m,d,g,re]),onToggle:B(e=>{_||T(e.newState===`open`)},[_]),onText:B(e=>{_||(ee(e.target.value),T(!0))},[_,ee,t,T]),onSelect:B(e=>{if(_)return;A.onSelect?.(e,A);let{onChange:t,onText:n,limit:r,min:i,value:a,keepQuery:o,keepOpened:s,setOpened:c,valueProperty:l}=A;o||n(``),s||c(!1);let u=iO(a),d=wD(l),f=u.some(t=>d(t)===d(e));f&&u.length===i||t((f?oO(e,d)(u):[...u,e]).slice(-r))},[_,A]),onDeselect:B(e=>{_||A.onChange(oO(e,wD(A.valueProperty))(A.value))},[_,A]),defaultIndex:D!==void 0&&D?.length>0?0:h}}})))()}var hk,gk;function _k(){return(_k=e((()=>{oT(),G(),dk(),hk=e=>{let t=e.shadowRoot.querySelectorAll(`.chip`),n=e.shadowRoot.querySelector(`.badge`);if(!n)return;n.hidden=!0;for(let e of t)e.hidden=!1;let r=e.shadowRoot.querySelector(`cosmoz-input`).shadowRoot?.querySelector(`.control`)?.getBoundingClientRect(),i=0;for(;i<t.length;i++){let e=t[i].getBoundingClientRect();if(!(e.x+e.width<=r.x+r.width-24))break}let a=t.length-i;for(n.querySelector(`span`).textContent=`+`+a.toString(),n.hidden=a<1;i<t.length;i++)t[i].hidden=!0},gk=({value:e,opened:t,wrap:n,limit:r})=>{let i=aT(),a=!(n||r===1)&&e.length>0,o=z(()=>uk(()=>hk(i)),[]),[s,c]=Jt(0);Kt(()=>{if(!a)return;let e=i.shadowRoot.querySelector(`cosmoz-input`),t=new ResizeObserver(e=>{c(e[0].contentRect.width)});return t.observe(e),()=>t.disconnect()},[a]),Kt(()=>a?o():void 0,[a,s,t,e])}})))()}var vk,yk,bk,xk,Sk;function Ck(){return(Ck=e((()=>{Fn(),Mw(),AT(),EE(),F(),kE(),q(),Pw(),LE(),xO(),IO(),RO(),BO(),mk(),_k(),vk=[`input`,`control`,`label`,`line`,`error`,`wrap`].map(e=>`${e}: input-${e}`).join(),yk=({opened:e,isSingle:t,showSingle:n,hasResultsOrQuery:r})=>!e||t&&!n?!1:r,bk=e=>{let{variant:t,opened:n,invalid:r,errorMessage:i,hint:a,label:o,placeholder:s,required:c,disabled:l,textual:u,text:d,onText:f,onToggle:p,onDeselect:m,value:h,limit:g,min:_,showSingle:v,items:y,source$:b,loading:x,chipRenderer:S,mode:C}=e,w=g===1,T=w&&h?.[0]!=null,E=x||y.length>0||d!=null&&d.length>0;return j`<cosmoz-dropdown-next
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
				hint=${K(a)}
				variant=${K(t)}
				?readonly=${T}
				?disabled=${l}
				?required=${c}
				?invalid=${OE([b,r],()=>IE(b.then(()=>r,()=>!0),r))}
				.errorMessage=${OE([b,i],()=>IE(b.then(()=>i,e=>e.message),i))}
				.value=${Nw(d)}
				@value-changed=${f}
				autocomplete="off"
				exportparts=${vk}
				?data-one=${w}
				?data-single=${T}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix">
					${J(C===`select`,()=>Zo({styles:`margin-right: calc(var(--cz-spacing) * 2);color: var(--cz-color-text-secondary);`,width:`16`,height:`16`}))}
				</slot>
				${FO({value:h,min:_,isOne:w,onDeselect:m,textual:u,disabled:l,chipRenderer:S})}
			</cosmoz-input>

			${J(yk({opened:n,isSingle:T,showSingle:v,hasResultsOrQuery:E}),()=>bO({...e,items:y,multi:!w},J(x,()=>j`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>J(d!=null&&d.length>0&&y.length===0,()=>j`<slot name="no-result">
											<span class="no-result">${TE(`No results found`)}</span>
										</slot>`))))}
		</cosmoz-dropdown-next>`},xk=e=>{let t={...e,...pk(e)};return gk(t),bk(t)},Sk=[`variant`,`disabled`,`invalid`,`required`,`hint`,`text-property`,`value-property`,`limit`,`min`,`show-single`,`preserve-order`,`keep-opened`,`keep-query`,`default-index`,`external-search`,`item-height`,`item-limit`,`wrap`,`lazy-open`,`mode`]})))()}var wk,Tk,Ek;function Dk(){return(Dk=e((()=>{En(),G(),Ck(),wk=e=>{let{onChange:t,onText:n,mode:r,...i}=e,a=r===`select`,[o,s]=$t(`value`);return R(()=>{e.onChange!=null&&console.warn(`onChange is deprecated; use value-changed and lift instead`)},[]),xk({...i,...a&&{limit:1,min:1,showSingle:!0},mode:r,value:o,onChange:B((e,...n)=>{s(a?e[0]:e),t?.(e,...n)},[t,a]),onText:B(t=>{e.text=t,n?.(t)},[n])})},Tk=[wn(zO)],Ek={mode:`open`,delegatesFocus:!0},customElements.define(`cosmoz-autocomplete-ui`,W(xk,{observedAttributes:Sk,styleSheets:Tk,shadowRootInit:Ek})),customElements.define(`cosmoz-autocomplete`,W(wk,{observedAttributes:Sk,styleSheets:Tk,shadowRootInit:Ek}))})))()}var Ok;function kk(){return(kk=e((()=>{G(),Ok=I`
	cosmoz-listbox::part(error)::before {
		border-color: var(--cz-color-border-error);
		/* prettier-ignore */
		background: url("${`data:image/svg+xml,%3Csvg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.5 2.5L8.5 8.5M8.5 2.5L2.5 8.5' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E`}") var(--cz-color-border-error) no-repeat 50%;
	}

	cosmoz-listbox::part(error):hover {
		background: var(--cz-color-bg-error);
	}
`})))()}var Ak,jk;function Mk(){return(Mk=e((()=>{Ak=e=>({item:e,excluded:!1}),jk=e=>e.item})))()}var Nk;function Pk(){return(Pk=e((()=>{xD(),G(),Dk(),Mk(),Nk=e=>{let[t,n]=$t(e);return{value:t,setExcludingValue:B(e=>n(t=>{let n=bD(e,t?.map(jk));if(!n)return;if(!t)return n.map(Ak);let r=t.reduce((e,t)=>n.includes(t.item)?[...e,t]:t.excluded?e:[...e,{...t,excluded:!0}],[]),i=n.filter(e=>!t.some(t=>t.item===e)).map(Ak);return[...r,...i]}),[]),setValue:n}}})))()}var Fk,Ik,Lk,Rk,zk;function Bk(){return(Bk=e((()=>{MO(),G(),q(),Dk(),Ck(),kk(),Pk(),Mk(),Fk=(e,t)=>e?.some(e=>e.item===t&&e.excluded),Ik=(e,t)=>t&&Fk(e,t)?`error`:`gray`,Lk=e=>(t,n,{highlight:r,select:i,textual:a,isSelected:o})=>{let s=a(t);return j`<div
				class="item"
				role="option"
				part="option ${Ik(e,t)}"
				?aria-selected=${o(t)}
				data-index=${n}
				@mouseenter=${()=>r(n)}
				@click=${()=>i(t)}
				@mousedown=${e=>e.preventDefault()}
			>
				${s}
			</div>
			<div class="sizer" virtualizer-sizer>${s}</div>`},Rk=(e,t)=>({item:n,content:r,disabled:i,hidden:a,className:o=`chip`,slot:s})=>j`<cosmoz-tag
			class=${K(o)}
			slot=${K(s)}
			exportparts="chip-text, chip-clear"
			color=${Ik(e,n)}
			?disabled=${i}
			?hidden=${a}
			?removable=${!!n}
			@remove=${()=>t(n)}
			title=${K(typeof r==`string`?r:void 0)}
		>
			${r}
		</cosmoz-tag>`,zk=e=>{let{value:t,setValue:n,setExcludingValue:r}=Nk(`value`),[i,a]=$t(`text`),o=B(e=>n(t=>t?.filter(t=>t.item!==e)),[]);return xk({...e,value:z(()=>t?.map(jk),[t]),onChange:B(e=>{r(e)},[]),text:i,onText:B(e=>{a(e)},[]),itemRenderer:z(()=>Lk(t),[t]),chipRenderer:z(()=>Rk(t,o),[t,o])})},customElements.define(`cosmoz-autocomplete-excluding`,W(zk,{observedAttributes:Sk,styleSheets:[zO,Ok],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}function Vk(){return(Vk=e((()=>{Dk(),Bk(),ik()})))()}export{gu as $,Q as A,Yt as At,Qw as B,Lt as Bt,BE as C,U as Ct,OE as D,tn as Dt,IE as E,rn as Et,lT as F,B as Ft,Sw as G,Ue as Gt,Iw as H,I as Ht,iT as I,Ut as It,yw as J,Pe as Jt,xw as K,ze as Kt,rT as L,z as Lt,AT as M,qt as Mt,uT as N,Kt as Nt,kE as O,en as Ot,cT as P,Wt as Pt,yu as Q,M as Qt,eT as R,Bt as Rt,uD as S,ln as St,LE as T,an as Tt,Fw as U,Dt as Ut,Xw as V,R as Vt,Mw as W,Qe as Wt,Iu as X,j as Xt,Fu as Y,N as Yt,vu as Z,F as Zt,yD as _,G as _t,sO as a,In as at,vD as b,bn as bt,KD as c,K as ct,RD as d,On as dt,_u as et,LD as f,En as ft,TD as g,Sn as gt,ED as h,Cn as ht,iO as i,Qo as it,TE as j,Jt as jt,EE as k,$t as kt,BD as l,Fn as lt,wD as m,wn as mt,rk as n,os as nt,JD as o,J as ot,DD as p,Tn as pt,bw as q,P as qt,ik as r,Zo as rt,qD as s,q as st,Vk as t,as as tt,zD as u,kn as ut,xD as v,W as vt,VE as w,V as wt,dD as x,H as xt,bD as y,yn as yt,$w as z,zt};