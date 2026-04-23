const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./flow-BNFwcXeG.js","./chunk-BneVvdWh.js"])))=>i.map(i=>d[i]);
import{n as e,r as t}from"./chunk-BneVvdWh.js";import{n,t as r}from"./preload-helper-CV6hqhE5.js";import{$ as i,G as a,H as o,J as s,K as c,Q as l,U as u,W as d,X as f,Y as p,Z as m,et as h,n as g,nt as _,q as v,r as y,t as b,tt as x}from"./iframe-Cw1AIwAY.js";var S,C,w=e((()=>{S={duration:250},C=e=>(t,n,r)=>{let i=`max`+e.charAt(0).toUpperCase()+e.slice(1);Object.assign(t.style,{[i]:``,display:``});let{[e]:a}=t.getBoundingClientRect(),o=[0,a],[s,c]=n?o:o.slice().reverse(),l=t.animate([{[i]:`${s}px`},{[i]:`${c}px`}],{...S,...r});l.onfinish=()=>Object.assign(t.style,{[i]:``,display:n?``:`none`})}}));function T(e){te=e}function E(){te=null,ne=0}function ee(){return ne++}var te,ne,re=e((()=>{ne=0})),ie,D,O,ae,oe,se,ce,le=e((()=>{ie=Symbol(`haunted.phase`),D=Symbol(`haunted.hook`),O=Symbol(`haunted.update`),ae=Symbol(`haunted.commit`),oe=Symbol(`haunted.effects`),se=Symbol(`haunted.layoutEffects`),ce=`haunted.context`})),ue,de=e((()=>{re(),le(),ue=class{update;host;virtual;[D];[oe];[se];constructor(e,t){this.update=e,this.host=t,this[D]=new Map,this[oe]=[],this[se]=[]}run(e){T(this);let t=e();return E(),t}_runEffects(e){let t=this[e];T(this);for(let e of t)e.call(this);E()}runEffects(){this._runEffects(oe)}runLayoutEffects(){this._runEffects(se)}teardown(){this[D].forEach(e=>{typeof e.teardown==`function`&&e.teardown(!0)})}}}));function fe(){let e=[];function t(){let t=e;e=[];for(var n=0,r=t.length;n<r;n++)t[n]()}return function(n){e.push(n),pe(t)}}var pe,me,he,ge,_e=e((()=>{de(),le(),pe=Promise.resolve().then.bind(Promise.resolve()),me=fe(),he=fe(),ge=class{renderer;host;state;[ie];_updateQueued;_active;constructor(e,t){this.renderer=e,this.host=t,this.state=new ue(this.update.bind(this),t),this[ie]=null,this._updateQueued=!1,this._active=!1}update(){this._active&&(this._updateQueued||=(me(()=>{let e=this.handlePhase(O);he(()=>{this.handlePhase(ae,e),he(()=>{this.handlePhase(oe)})}),this._updateQueued=!1}),!0))}handlePhase(e,t){switch(this[ie]=e,e){case ae:this.commit(t),this.runEffects(se);return;case O:return this.render();case oe:return this.runEffects(oe)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}})),ve,ye,be,k,xe=e((()=>{ve=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t},ye=e=>e?.map(e=>typeof e==`string`?ve(e):e),be=(e,...t)=>e.flatMap((e,n)=>[e,t[n]||``]).join(``),k=be}));function Se(e){class t extends ge{frag;renderResult;constructor(e,t,n){super(e,n||t),this.frag=t}commit(t){this.renderResult=e(t,this.frag)}}function n(e,n,r){let i=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:o=!0,shadowRootInit:s={},styleSheets:c}=r||n||{},l=ye(e.styleSheets||c);class u extends i{_scheduler;static get observedAttributes(){return e.observedAttributes||a||[]}constructor(){if(super(),o===!1)this._scheduler=new t(e,this);else{let n=this.attachShadow({mode:`open`,...s});l&&(n.adoptedStyleSheets=l),this._scheduler=new t(e,n,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(e,t,n){if(t===n)return;let r=n===``?!0:n;Reflect.set(this,Ce(e),r)}}function d(e){let t=e,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return t},set(e){n&&t===e||(n=!0,t=e,this._scheduler&&this._scheduler.update())}})}let f=new Proxy(i.prototype,{getPrototypeOf(e){return e},set(e,t,n,r){let i;return t in e?(i=Object.getOwnPropertyDescriptor(e,t),i&&i.set?(i.set.call(r,n),!0):(Reflect.set(e,t,n,r),!0)):(i=typeof t==`symbol`||t[0]===`_`?{enumerable:!0,configurable:!0,writable:!0,value:n}:d(n),Object.defineProperty(r,t,i),i.set&&i.set.call(r,n),!0)}});return Object.setPrototypeOf(u.prototype,f),u}return n}var Ce,we=e((()=>{_e(),xe(),Ce=(e=``)=>e.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():``)}));function Te(e,...t){let n=ee(),r=te[D],i=r.get(n);return i||(i=new e(n,te,...t),r.set(n,i)),i.update(...t)}function Ee(e){return Te.bind(null,e)}var A,De=e((()=>{re(),le(),A=class{id;state;constructor(e,t){this.id=e,this.state=t}}}));function Oe(e){return Ee(class extends A{callback;lastValues;values;_teardown;constructor(t,n,r,i){super(t,n),e(n,this)}update(e,t){this.callback=e,this.values=t}call(){let e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown==`function`&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}var ke=e((()=>{De()}));function Ae(e,t){e[oe].push(t)}var j,je=e((()=>{le(),ke(),j=Oe(Ae)})),Me,Ne,Pe=e((()=>{De(),le(),je(),Me=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,Ne=Ee(class extends A{Context;value;_ranEffect;_unsubscribe;constructor(e,t,n){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Ae(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){let t={Context:e,callback:this._updater};Me(this.state.host).dispatchEvent(new CustomEvent(ce,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));let{unsubscribe:n=null,value:r}=t;this.value=n?r:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}})}));function Fe(e){return t=>{let n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display=`contents`,this.listeners=new Set,this.addEventListener(ce,this)}disconnectedCallback(){this.removeEventListener(ce,this)}handleEvent(e){let{detail:t}=e;t.Context===n&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}unsubscribe(e){this.listeners.delete(e)}set value(e){this._value=e;for(let t of this.listeners)t(e)}get value(){return this._value}},Consumer:e(function({render:e}){return e(Ne(n))},{useShadowDOM:!1}),defaultValue:t};return n}}var Ie=e((()=>{le(),Pe()})),M,Le=e((()=>{De(),M=Ee(class extends A{value;values;constructor(e,t,n,r){super(e,t),this.value=n(),this.values=r}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})),N,Re=e((()=>{Le(),N=(e,t)=>M(()=>e,t)}));function ze(e,t){e[se].push(t)}var Be,Ve=e((()=>{le(),ke(),Be=Oe(ze)})),P,He=e((()=>{De(),P=Ee(class extends A{args;constructor(e,t,n){super(e,t),this.updater=this.updater.bind(this),typeof n==`function`&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){let[t]=this.args;typeof e==`function`&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}})})),Ue,We=e((()=>{De(),Ue=Ee(class extends A{reducer;currentState;constructor(e,t,n,r,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i===void 0?r:i(r)}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}})})),Ge,Ke,qe,Je=e((()=>{De(),Ge=/([A-Z])/gu,Ke=Ee(class extends A{property;eventName;constructor(e,t,n,r){if(super(e,t),this.state.virtual)throw Error(`Can't be used with virtual components.`);this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(Ge,`-$1`).toLowerCase()+`-changed`,this.state.host[this.property]??(typeof r==`function`&&(r=r()),r!=null&&this.updateProp(r))}update(e,t){return[this.state.host[this.property],this.updater]}updater(e){let t=this.state.host[this.property];typeof e==`function`&&(e=e(t)),!Object.is(t,e)&&this.updateProp(e)}updateProp(e){this.notify(e).defaultPrevented||(this.state.host[this.property]=e)}notify(e){let t=new CustomEvent(this.eventName,{detail:{value:e,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(t),t}}),qe=e=>t=>{t.preventDefault(),e(t.detail.value)}}));function Ye(e){let t=e;return{get current(){return t},set current(e){t=e},get value(){return t},set value(e){t=e}}}function Xe(e){return M(()=>Ye(e),[])}var Ze=e((()=>{Le()})),Qe=e((()=>{De(),Ee(class extends A{update(){return this.state.host}})}));function $e({render:e}){let t=Se(e);return{component:t,createContext:Fe(t)}}var et=e((()=>{we(),Ie(),Re(),je(),Ve(),He(),We(),Le(),Pe(),Je(),Ze(),Qe(),De(),_e()})),F,tt,nt,I=e((()=>{F={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},tt=e=>(...t)=>({_$litDirective$:e,values:t}),nt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}}));function rt(e){this._$AN===void 0?this._$AM=e:(ot(this),this._$AM=e,st(this))}function it(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)at(r[e],!1),ot(r[e]);else r!=null&&(at(r,!1),ot(r));else at(this,e)}var at,ot,st,ct,lt,ut=e((()=>{d(),I(),at=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),at(e,t);return!0},ot=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},st=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),ct(t)}},ct=e=>{e.type==F.CHILD&&(e._$AP??=it,e._$AQ??=rt)},lt=class extends nt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),st(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(at(this,e),ot(this))}setValue(e){if(v(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}}));function dt(e,t,n=t.startNode){let r=n.parentNode,i=new MutationObserver(r=>{for(let a of r)if(ft.call(a.removedNodes,n)){i.disconnect(),n.parentNode instanceof ShadowRoot?dt(e,t):e.teardown();break}else if(ft.call(a.addedNodes,n.nextSibling)){i.disconnect(),dt(e,t,n.nextSibling||void 0);break}});i.observe(r,{childList:!0})}var ft,pt=e((()=>{I(),x(),ut(),_e(),ft=Array.prototype.includes})),L,mt,ht=e((()=>{x(),et(),pt(),{component:L,createContext:mt}=$e({render:l})})),R=e((()=>{ht(),et(),xe(),et()})),gt,_t,vt=e((()=>{x(),I(),gt={},_t=tt(class extends nt{constructor(){super(...arguments),this.ot=gt}render(e,t){return t()}update(e,[t,n]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((e,t)=>e===this.ot[t]))return i}else if(this.ot===t)return i;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,n)}})})),yt,bt,xt=e((()=>{x(),ut(),I(),yt=new WeakMap,bt=tt(class extends lt{render(e){return m}update(e,[t]){let n=t!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),m}rt(e){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=yt.get(t);n===void 0&&(n=new WeakMap,yt.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G==`function`?yt.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})),St,Ct,wt,Tt=e((()=>{x(),I(),St=`important`,Ct=` !`+St,wt=tt(class extends nt{constructor(e){if(super(e),e.type!==F.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(Ct);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?St:``):n[e]=r}}return i}})}));function z(e,t,n){return e?t(e):n?.(e)}var B=e((()=>{})),Et,Dt=e((()=>{Et=(e=HTMLElement)=>class extends e{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent(`connected`))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent(`disconnected`))}}})),Ot=e((()=>{Dt()})),kt,At,jt=e((()=>{R(),x(),Ot(),kt=k`
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
`,At=()=>h`<div class="wrap" part="wrap"><slot></slot></div>`,customElements.define(`cosmoz-dropdown-content`,Et(L(At,{styleSheets:[kt]})))}));function Mt(e,t,n){return V(e,Yt(t,n))}function Nt(e,t){return typeof e==`function`?e(t):e}function Pt(e){return e.split(`-`)[0]}function Ft(e){return e.split(`-`)[1]}function It(e){return e===`x`?`y`:`x`}function Lt(e){return e===`y`?`height`:`width`}function Rt(e){return en.has(Pt(e))?`y`:`x`}function zt(e){return It(Rt(e))}function Bt(e,t,n){n===void 0&&(n=!1);let r=Ft(e),i=zt(e),a=Lt(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=Gt(o)),[o,Gt(o)]}function Vt(e){let t=Gt(e);return[Ht(e),t,Ht(t)]}function Ht(e){return e.replace(/start|end/g,e=>$t[e])}function Ut(e,t,n){switch(e){case`top`:case`bottom`:return n?t?nn:tn:t?tn:nn;case`left`:case`right`:return t?rn:an;default:return[]}}function Wt(e,t,n,r){let i=Ft(e),a=Ut(Pt(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(Ht)))),a}function Gt(e){return e.replace(/left|right|bottom|top/g,e=>Qt[e])}function Kt(e){return{top:0,right:0,bottom:0,left:0,...e}}function qt(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:Kt(e)}function Jt(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}var Yt,V,Xt,Zt,H,Qt,$t,en,tn,nn,rn,an,on=e((()=>{Yt=Math.min,V=Math.max,Xt=Math.round,Zt=Math.floor,H=e=>({x:e,y:e}),Qt={left:`right`,right:`left`,bottom:`top`,top:`bottom`},$t={start:`end`,end:`start`},en=new Set([`top`,`bottom`]),tn=[`left`,`right`],nn=[`right`,`left`],rn=[`top`,`bottom`],an=[`bottom`,`top`]}));function sn(e,t,n){let{reference:r,floating:i}=e,a=Rt(t),o=zt(t),s=Lt(o),c=Pt(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}switch(Ft(t)){case`start`:p[o]-=f*(n&&l?-1:1);break;case`end`:p[o]+=f*(n&&l?-1:1);break}return p}async function cn(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=Nt(t,e),p=qt(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=Jt(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=Jt(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var ln,un,dn,fn,pn=e((()=>{on(),ln=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=a.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=sn(l,r,c),f=r,p={},m=0;for(let n=0;n<s.length;n++){let{name:a,fn:h}=s[n],{x:g,y:_,data:v,reset:y}=await h({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:p,rects:l,platform:{...o,detectOverflow:o.detectOverflow??cn},elements:{reference:e,floating:t}});u=g??u,d=_??d,p={...p,[a]:{...p[a],...v}},y&&m<=50&&(m++,typeof y==`object`&&(y.placement&&(f=y.placement),y.rects&&(l=y.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):y.rects),{x:u,y:d}=sn(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:p}},un=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=Nt(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=Pt(r),_=Rt(o),v=Pt(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[Gt(o)]:Vt(o)),x=p!==`none`;!d&&x&&b.push(...Wt(o,m,p,y));let S=[o,...b],C=await s.detectOverflow(t,h),w=[],T=i.flip?.overflows||[];if(l&&w.push(C[g]),u){let e=Bt(r,a,y);w.push(C[e[0]],C[e[1]])}if(T=[...T,{placement:r,overflows:w}],!w.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(!(u===`alignment`&&_!==Rt(t))||T.every(e=>Rt(e.placement)===_?e.overflows[0]>0:!0)))return{data:{index:e,overflows:T},reset:{placement:t}};let n=T.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=T.filter(e=>{if(x){let t=Rt(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o;break}if(r!==n)return{reset:{placement:n}}}return{}}}},dn=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=Nt(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=Rt(Pt(i)),p=It(f),m=u[p],h=u[f];if(o){let e=p===`y`?`top`:`left`,t=p===`y`?`bottom`:`right`,n=m+d[e],r=m-d[t];m=Mt(n,m,r)}if(s){let e=f===`y`?`top`:`left`,t=f===`y`?`bottom`:`right`,n=h+d[e],r=h-d[t];h=Mt(n,h,r)}let g=c.fn({...t,[p]:m,[f]:h});return{...g,data:{x:g.x-n,y:g.y-r,enabled:{[p]:o,[f]:s}}}}}},fn=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){var n,r;let{placement:i,rects:a,platform:o,elements:s}=t,{apply:c=()=>{},...l}=Nt(e,t),u=await o.detectOverflow(t,l),d=Pt(i),f=Ft(i),p=Rt(i)===`y`,{width:m,height:h}=a.floating,g,_;d===`top`||d===`bottom`?(g=d,_=f===(await(o.isRTL==null?void 0:o.isRTL(s.floating))?`start`:`end`)?`left`:`right`):(_=d,g=f===`end`?`top`:`bottom`);let v=h-u.top-u.bottom,y=m-u.left-u.right,b=Yt(h-u[g],v),x=Yt(m-u[_],y),S=!t.middlewareData.shift,C=b,w=x;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(w=y),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(C=v),S&&!f){let e=V(u.left,0),t=V(u.right,0),n=V(u.top,0),r=V(u.bottom,0);p?w=m-2*(e!==0||t!==0?e+t:V(u.left,u.right)):C=h-2*(n!==0||r!==0?n+r:V(u.top,u.bottom))}await c({...t,availableWidth:w,availableHeight:C});let T=await o.getDimensions(s.floating);return m!==T.width||h!==T.height?{reset:{rects:!0}}:{}}}}}));function mn(){return typeof window<`u`}function hn(e){return _n(e)?(e.nodeName||``).toLowerCase():`#document`}function U(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function gn(e){return((_n(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function _n(e){return mn()?e instanceof Node||e instanceof U(e).Node:!1}function W(e){return mn()?e instanceof Element||e instanceof U(e).Element:!1}function vn(e){return mn()?e instanceof HTMLElement||e instanceof U(e).HTMLElement:!1}function yn(e){return!mn()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof U(e).ShadowRoot}function bn(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=G(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!Mn.has(i)}function xn(e){return Nn.has(hn(e))}function Sn(e){return Pn.some(t=>{try{return e.matches(t)}catch{return!1}})}function Cn(e){let t=Tn(),n=W(e)?G(e):e;return Fn.some(e=>n[e]?n[e]!==`none`:!1)||(n.containerType?n.containerType!==`normal`:!1)||!t&&(n.backdropFilter?n.backdropFilter!==`none`:!1)||!t&&(n.filter?n.filter!==`none`:!1)||In.some(e=>(n.willChange||``).includes(e))||Ln.some(e=>(n.contain||``).includes(e))}function wn(e){let t=On(e);for(;vn(t)&&!En(t);){if(Cn(t))return t;if(Sn(t))return null;t=On(t)}return null}function Tn(){return typeof CSS>`u`||!CSS.supports?!1:CSS.supports(`-webkit-backdrop-filter`,`none`)}function En(e){return Rn.has(hn(e))}function G(e){return U(e).getComputedStyle(e)}function Dn(e){return W(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function On(e){if(hn(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||yn(e)&&e.host||gn(e);return yn(t)?t.host:t}function kn(e){let t=On(e);return En(t)?e.ownerDocument?e.ownerDocument.body:e.body:vn(t)&&bn(t)?t:kn(t)}function An(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=kn(e),i=r===e.ownerDocument?.body,a=U(r);if(i){let e=jn(a);return t.concat(a,a.visualViewport||[],bn(r)?r:[],e&&n?An(e):[])}return t.concat(r,An(r,[],n))}function jn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}var Mn,Nn,Pn,Fn,In,Ln,Rn,zn=e((()=>{Mn=new Set([`inline`,`contents`]),Nn=new Set([`table`,`td`,`th`]),Pn=[`:popover-open`,`:modal`],Fn=[`transform`,`translate`,`scale`,`rotate`,`perspective`],In=[`transform`,`translate`,`scale`,`rotate`,`perspective`,`filter`],Ln=[`paint`,`layout`,`strict`,`content`],Rn=new Set([`html`,`body`,`#document`])}));function Bn(e){let t=G(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=vn(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=Xt(n)!==a||Xt(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function Vn(e){return W(e)?e:e.contextElement}function Hn(e){let t=Vn(e);if(!vn(t))return H(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Bn(t),o=(a?Xt(n.width):n.width)/r,s=(a?Xt(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}function Un(e){let t=U(e);return!Tn()||!t.visualViewport?fr:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Wn(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==U(e)?!1:t}function Gn(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=Vn(e),o=H(1);t&&(r?W(r)&&(o=Hn(r)):o=Hn(e));let s=Wn(a,n,r)?Un(a):H(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a){let e=U(a),t=r&&W(r)?U(r):r,n=e,i=jn(n);for(;i&&r&&t!==n;){let e=Hn(i),t=i.getBoundingClientRect(),r=G(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=U(i),i=jn(n)}}return Jt({width:u,height:d,x:c,y:l})}function Kn(e,t){let n=Dn(e).scrollLeft;return t?t.left+n:Gn(gn(e)).left+n}function qn(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-Kn(e,n),y:n.top+t.scrollTop}}function Jn(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=gn(r),s=t?Sn(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=H(1),u=H(0),d=vn(r);if((d||!d&&!a)&&((hn(r)!==`body`||bn(o))&&(c=Dn(r)),vn(r))){let e=Gn(r);l=Hn(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?qn(o,c):H(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function Yn(e){return Array.from(e.getClientRects())}function Xn(e){let t=gn(e),n=Dn(e),r=e.ownerDocument.body,i=V(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=V(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),o=-n.scrollLeft+Kn(e),s=-n.scrollTop;return G(r).direction===`rtl`&&(o+=V(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:o,y:s}}function Zn(e,t){let n=U(e),r=gn(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;let e=Tn();(!e||e&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}let l=Kn(r);if(l<=0){let e=r.ownerDocument,t=e.body,n=getComputedStyle(t),i=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,o=Math.abs(r.clientWidth-t.clientWidth-i);o<=pr&&(a-=o)}else l<=pr&&(a+=l);return{width:a,height:o,x:s,y:c}}function Qn(e,t){let n=Gn(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=vn(e)?Hn(e):H(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function $n(e,t,n){let r;if(t===`viewport`)r=Zn(e,n);else if(t===`document`)r=Xn(gn(e));else if(W(t))r=Qn(t,n);else{let n=Un(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return Jt(r)}function er(e,t){let n=On(e);return n===t||!W(n)||En(n)?!1:G(n).position===`fixed`||er(n,t)}function tr(e,t){let n=t.get(e);if(n)return n;let r=An(e,[],!1).filter(e=>W(e)&&hn(e)!==`body`),i=null,a=G(e).position===`fixed`,o=a?On(e):e;for(;W(o)&&!En(o);){let t=G(o),n=Cn(o);!n&&t.position===`fixed`&&(i=null),(a?!n&&!i:!n&&t.position===`static`&&i&&mr.has(i.position)||bn(o)&&!n&&er(e,o))?r=r.filter(e=>e!==o):i=t,o=On(o)}return t.set(e,r),r}function nr(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Sn(t)?[]:tr(t,this._c):[].concat(n),r],o=a[0],s=a.reduce((e,n)=>{let r=$n(t,n,i);return e.top=V(r.top,e.top),e.right=Yt(r.right,e.right),e.bottom=Yt(r.bottom,e.bottom),e.left=V(r.left,e.left),e},$n(t,o,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}}function rr(e){let{width:t,height:n}=Bn(e);return{width:t,height:n}}function ir(e,t,n){let r=vn(t),i=gn(t),a=n===`fixed`,o=Gn(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=H(0);function l(){c.x=Kn(i)}if(r||!r&&!a)if((hn(t)!==`body`||bn(i))&&(s=Dn(t)),r){let e=Gn(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else i&&l();a&&!r&&i&&l();let u=i&&!r&&!a?qn(i,s):H(0);return{x:o.left+s.scrollLeft-c.x-u.x,y:o.top+s.scrollTop-c.y-u.y,width:o.width,height:o.height}}function ar(e){return G(e).position===`static`}function or(e,t){if(!vn(e)||G(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return gn(e)===n&&(n=n.ownerDocument.body),n}function sr(e,t){let n=U(e);if(Sn(e))return n;if(!vn(e)){let t=On(e);for(;t&&!En(t);){if(W(t)&&!ar(t))return t;t=On(t)}return n}let r=or(e,t);for(;r&&xn(r)&&ar(r);)r=or(r,t);return r&&En(r)&&ar(r)&&!Cn(r)?n:r||wn(e)||n}function cr(e){return G(e).direction===`rtl`}function lr(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function ur(e,t){let n=null,r,i=gn(e);function a(){var e;clearTimeout(r),(e=n)==null||e.disconnect(),n=null}function o(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),a();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(s||t(),!f||!p)return;let m=Zt(d),h=Zt(i.clientWidth-(u+f)),g=Zt(i.clientHeight-(d+p)),_=Zt(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:V(0,Yt(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(n!==c){if(!y)return o();n?o(!1,n):r=setTimeout(()=>{o(!1,1e-7)},1e3)}n===1&&!lr(l,e.getBoundingClientRect())&&o(),y=!1}try{n=new IntersectionObserver(b,{...v,root:i.ownerDocument})}catch{n=new IntersectionObserver(b,v)}n.observe(e)}return o(!0),a}function dr(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=Vn(e),u=i||a?[...l?An(l):[],...An(t)]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n,{passive:!0}),a&&e.addEventListener(`resize`,n)});let d=l&&s?ur(l,n):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),p.observe(t));let m,h=c?Gn(e):null;c&&g();function g(){let t=Gn(e);h&&!lr(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var fr,pr,mr,hr,gr,_r,vr,yr,br,xr=e((()=>{pn(),on(),zn(),fr=H(0),pr=25,mr=new Set([`absolute`,`fixed`]),hr=async function(e){let t=this.getOffsetParent||sr,n=this.getDimensions,r=await n(e.floating);return{reference:ir(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},gr={convertOffsetParentRelativeRectToViewportRelativeRect:Jn,getDocumentElement:gn,getClippingRect:nr,getOffsetParent:sr,getElementRects:hr,getClientRects:Yn,getDimensions:rr,getScale:Hn,isElement:W,isRTL:cr},_r=dn,vr=un,yr=fn,br=(e,t,n)=>{let r=new Map,i={platform:gr,...n},a={...i.platform,_c:r};return ln(e,t,{...i,platform:a})}})),Sr,Cr,wr=e((()=>{R(),xr(),Sr=[vr({fallbackAxisSideDirection:`start`,crossAxis:!1}),_r()],Cr=({placement:e=`bottom-start`,strategy:t,middleware:n=Sr}={})=>{let[r,i]=P(),[a,o]=P(),[s,c]=P();return j(()=>{if(!r||!(a instanceof HTMLElement)){c(void 0);return}return dr(r,a,()=>br(r,a,{placement:e,strategy:t,middleware:n}).then(c))},[r,a,e,t,n]),{setReference:i,setFloating:o,styles:M(()=>s?{left:`${s.x}px`,top:`${s.y}px`}:{},[s?.x,s?.y])}}})),Tr,Er=e((()=>{R(),Tr=e=>{let t=M(()=>({}),[]);return M(()=>Object.assign(t,e),[t,...Object.values(e)])}})),Dr,Or,kr,Ar,jr=e((()=>{R(),Er(),Dr=e=>e.matches(`:focus-within`),Or=({disabled:e,onFocus:t})=>{let[n,r]=P(),{focused:i,closed:a}=n||{},o=i&&!e,s=Tr({closed:a,onFocus:t}),c=N(e=>r(t=>({...t,closed:e})),[]),l=N(e=>{let t=e.currentTarget;return Dr(t)?r(e=>({focused:!0,closed:!e?.closed})):t.focus()},[]);return j(()=>{if(!o)return;let e=e=>{if(e.defaultPrevented)return;let{closed:t}=s;e.key===`Escape`&&!t?(e.preventDefault(),c(!0)):[`ArrowUp`,`Up`].includes(e.key)&&t&&(e.preventDefault(),c(!1))};return document.addEventListener(`keydown`,e,!0),()=>document.removeEventListener(`keydown`,e,!0)},[o]),{focused:o,active:o&&!a,setClosed:c,onToggle:l,onFocus:N(e=>{let t=Dr(e.currentTarget);r({focused:t}),s.onFocus?.(t)},[s])}},kr=[`focusin`,`focusout`],Ar=e=>{let t=Or(e),{onFocus:n}=t;return j(()=>(e.setAttribute(`tabindex`,`0`),kr.forEach(t=>e.addEventListener(t,n)),()=>{kr.forEach(t=>e.removeEventListener(t,n))}),[]),t}})),Mr,Nr,Pr,Fr=e((()=>{R(),x(),vt(),xt(),Tt(),B(),jt(),wr(),jr(),Mr=e=>e.preventDefault(),Nr=k`
	.anchor {
		pointer-events: none;
		padding: var(--cosmoz-dropdown-anchor-spacing);
	}
	button {
		pointer-events: auto;
		border: none;
		cursor: pointer;
		background: transparent;
		padding: 0;
	}
	::slotted(svg) {
		pointer-events: none;
	}
	@-moz-document url-prefix() {
		#content {
			left: auto;
		}
	}
`,Pr=e=>{let{placement:t,strategy:n,middleware:r,render:i}=e,{active:a,onToggle:o}=Ar(e),{styles:s,setReference:c,setFloating:l}=Cr({placement:t,strategy:n,middleware:r});return h` <div class="anchor" part="anchor" ${bt(c)}>
			<button
				@mousedown=${Mr}
				@click=${o}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		${z(a,()=>h`<cosmoz-dropdown-content
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					style="${wt(s)}"
					@connected=${e=>e.target.showPopover?.()}
					${bt(l)}
					><slot></slot>${_t([i],()=>i?.()||m)}</cosmoz-dropdown-content
				> `)}`},customElements.define(`cosmoz-dropdown`,L(Pr,{styleSheets:[Nr]}))})),Ir,Lr,Rr,zr=e((()=>{R(),x(),Ir=k`
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
`,Lr=()=>h` <slot></slot> `,customElements.define(`cosmoz-dropdown-list`,L(Lr,{styleSheets:[Ir]})),Rr=({placement:e})=>h` <cosmoz-dropdown
		.placement=${e}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`,customElements.define(`cosmoz-dropdown-menu`,L(Rr))})),Br,Vr=e((()=>{R(),Br=({host:e,popoverRef:t,disabled:n,openOnHover:r,openOnFocus:i,open:a,close:o})=>{let s=Xe(),c=()=>clearTimeout(s.current),l=()=>{clearTimeout(s.current),s.current=setTimeout(()=>{let n=t.current;r&&(e.matches(`:hover`)||n?.matches(`:hover`))||e.matches(`:focus-within`)||n?.matches(`:focus-within`)||o()},100)},u=()=>{n||(c(),a())};return j(()=>{if(!(!r||n))return e.addEventListener(`pointerenter`,u),e.addEventListener(`pointerleave`,l),()=>{c(),e.removeEventListener(`pointerenter`,u),e.removeEventListener(`pointerleave`,l)}},[r,n,e]),j(()=>{if(!(!i||n))return e.addEventListener(`focusin`,u),e.addEventListener(`focusout`,l),()=>{c(),e.removeEventListener(`focusin`,u),e.removeEventListener(`focusout`,l)}},[i,n,e]),{scheduleClose:l,cancelClose:c}}})),Hr,Ur,Wr,Gr=e((()=>{R(),x(),xt(),Vr(),Hr=e=>{if(e.newState!==`open`)return;let t=e.target.querySelector(`slot:not([name])`)?.assignedElements({flatten:!0})??[];for(let e of t){let t=e.matches(`[autofocus]`)?e:e.querySelector(`[autofocus]`);if(t instanceof HTMLElement){t.focus();break}}},Ur=k`
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
`,Wr=e=>{let{placement:t=`bottom span-right`,disabled:n,openOnHover:r,openOnFocus:i}=e,a=Xe(),[o,s]=Ke(`opened`,!1),c=N(()=>{n||(s(!0),a.current?.showPopover())},[n]),l=N(()=>{s(!1),a.current?.hidePopover()},[]),u=N(()=>{n||(a.current?.matches(`:popover-open`)?l():c())},[n]);j(()=>{let e=a.current;e&&(o?e.showPopover():e.hidePopover())},[o]),j(()=>{e.toggleAttribute(`opened`,!!o)},[o]);let{scheduleClose:d,cancelClose:f}=Br({host:e,popoverRef:a,disabled:n,openOnHover:r,openOnFocus:i,open:c,close:l});return h`
		<slot name="button" @click=${i?c:u}></slot>
		<div
			popover
			style="position-area: ${t}"
			@toggle=${N(t=>{Hr(t),s(t.newState===`open`),e.dispatchEvent(new ToggleEvent(`dropdown-toggle`,{newState:t.newState,oldState:t.oldState,composed:!0}))},[])}
			@select=${l}
			@focusout=${d}
			@focusin=${f}
			${bt(e=>e&&(a.current=e))}
		>
			<slot></slot>
		</div>
	`},customElements.define(`cosmoz-dropdown-next`,L(Wr,{styleSheets:[Ur],observedAttributes:[`placement`,`disabled`,`open-on-hover`,`open-on-focus`],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),Kr=e((()=>{Fr(),zr(),jr(),Gr()}));function qr(e){return()=>e}var Jr,Yr,Xr,Zr,Qr=e((()=>{Jr=qr(),Yr=Jr,Xr=e=>e,Zr=(e,...t)=>typeof e==`function`?e(...t):e})),$r,ei=e((()=>{R(),Qr(),$r=mt(()=>Yr),customElements.define(`cosmoz-keybinding-provider`,$r.Provider)})),ti,ni=e((()=>{R(),ei(),Er(),ti=(e,t)=>{let n=Ne($r),r=Tr(e);j(()=>n(r),t)}})),K=e((()=>{window.JSCompiler_renameProperty=function(e,t){return e}}));function ri(e,t){if(e&&si.test(e)||e===`//`)return e;if(ci===void 0){ci=!1;try{let e=new URL(`b`,`http://a`);e.pathname=`c%20d`,ci=e.href===`http://a/c%20d`}catch{}}if(t||=document.baseURI||window.location.href,ci)try{return new URL(e,t).href}catch{return e}return q||(q=document.implementation.createHTMLDocument(`temp`),q.base=q.createElement(`base`),q.head.appendChild(q.base),q.anchor=q.createElement(`a`),q.body.appendChild(q.anchor)),q.base.href=t,q.anchor.href=e,q.anchor.href||e}function ii(e,t){return e.replace(oi,function(e,n,r,i){return n+`'`+ri(r.replace(/["']/g,``),t)+`'`+i})}function ai(e){return e.substring(0,e.lastIndexOf(`/`)+1)}var oi,si,ci,q,li=e((()=>{K(),oi=/(url\()([^)]*)(\))/g,si=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/})),ui,di,fi,pi,mi,hi,gi,_i,vi,yi,bi,xi,Si,Ci,wi=e((()=>{K(),li(),ui=!window.ShadyDOM||!window.ShadyDOM.inUse,!window.ShadyCSS||window.ShadyCSS.nativeCss,window.customElements.polyfillWrapFlushCallback,di=ui&&`adoptedStyleSheets`in Document.prototype&&`replaceSync`in CSSStyleSheet.prototype&&(()=>{try{let e=new CSSStyleSheet;e.replaceSync(``);let t=document.createElement(`div`);return t.attachShadow({mode:`open`}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch{return!1}})(),fi=window.Polymer&&window.Polymer.rootPath||ai(document.baseURI||window.location.href),pi=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,window.Polymer&&window.Polymer.setPassiveTouchGestures,mi=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,hi=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,gi=window.Polymer&&window.Polymer.legacyOptimizations||!1,_i=window.Polymer&&window.Polymer.legacyWarnings||!1,vi=window.Polymer&&window.Polymer.syncInitialRender||!1,yi=window.Polymer&&window.Polymer.legacyUndefined||!1,bi=window.Polymer&&window.Polymer.orderedComputed||!1,xi=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Si=window.Polymer&&window.Polymer.fastDomIf||!1,window.Polymer&&window.Polymer.suppressTemplateNotifications,window.Polymer&&window.Polymer.legacyNoObservedAttributes,Ci=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1}));function Ti(){}var Ei,Di,Oi=e((()=>{K(),Ei=0,Ti.prototype.__mixinApplications,Ti.prototype.__mixinSet,Di=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let n=Ei++;function r(r){let i=r.__mixinSet;if(i&&i[n])return r;let a=t,o=a.get(r);if(!o){o=e(r),a.set(r,o);let t=Object.create(o.__mixinSet||i||null);t[n]=!0,o.__mixinSet=t}return o}return r}}));function ki(e,t){Mi[e]=Ni[e.toLowerCase()]=t}function Ai(e){return Mi[e]||Ni[e.toLowerCase()]}function ji(e){e.querySelector(`style`)&&console.warn(`dom-module %s has style outside template`,e.id)}var Mi,Ni,Pi,Fi=e((()=>{K(),li(),wi(),Mi={},Ni={},Pi=class extends HTMLElement{static get observedAttributes(){return[`id`]}static import(e,t){if(e){let n=Ai(e);return n&&t?n.querySelector(t):n}return null}attributeChangedCallback(e,t,n,r){t!==n&&this.register()}get assetpath(){if(!this.__assetpath){let e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument;this.__assetpath=ai(ri(this.getAttribute(`assetpath`)||``,e.baseURI))}return this.__assetpath}register(e){if(e||=this.id,e){if(mi&&Ai(e)!==void 0)throw ki(e,null),Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,ki(e,this),ji(this)}}},Pi.prototype.modules=Mi,customElements.define(`dom-module`,Pi)}));function Ii(e){return Pi.import(e)}function Li(e){let t=ii((e.body?e.body:e).textContent,e.baseURI),n=document.createElement(`style`);return n.textContent=t,n}function Ri(e){let t=e.trim().split(/\s+/),n=[];for(let e=0;e<t.length;e++)n.push(...zi(t[e]));return n}function zi(e){let t=Ii(e);if(!t)return console.warn(`Could not find style data in module named`,e),[];if(t._styles===void 0){let e=[];e.push(...Hi(t));let n=t.querySelector(`template`);n&&e.push(...Bi(n,t.assetpath)),t._styles=e}return t._styles}function Bi(e,t){if(!e._styles){let n=[],r=e.content.querySelectorAll(`style`);for(let e=0;e<r.length;e++){let i=r[e],a=i.getAttribute(Wi);a&&n.push(...Ri(a).filter(function(e,t,n){return n.indexOf(e)===t})),t&&(i.textContent=ii(i.textContent,t)),n.push(i)}e._styles=n}return e._styles}function Vi(e){let t=Ii(e);return t?Hi(t):[]}function Hi(e){let t=[],n=e.querySelectorAll(Ui);for(let e=0;e<n.length;e++){let r=n[e];if(r.import){let e=r.import,n=r.hasAttribute(Gi);if(n&&!e._unscopedStyle){let t=Li(e);t.setAttribute(Gi,``),e._unscopedStyle=t}else e._style||=Li(e);t.push(n?e._unscopedStyle:e._style)}}return t}var Ui,Wi,Gi,Ki=e((()=>{Fi(),li(),Ui=`link[rel=import][type~=css]`,Wi=`include`,Gi=`shady-unscoped`})),qi,Ji=e((()=>{qi=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e}));function Yi(e){return e.indexOf(`.`)>=0}function Xi(e){let t=e.indexOf(`.`);return t===-1?e:e.slice(0,t)}function Zi(e,t){return e.indexOf(t+`.`)===0}function Qi(e,t){return t.indexOf(e+`.`)===0}function $i(e,t,n){return t+n.slice(e.length)}function ea(e){if(Array.isArray(e)){let t=[];for(let n=0;n<e.length;n++){let r=e[n].toString().split(`.`);for(let e=0;e<r.length;e++)t.push(r[e])}return t.join(`.`)}else return e}function ta(e){return Array.isArray(e)?ea(e).split(`.`):e.toString().split(`.`)}function J(e,t,n){let r=e,i=ta(t);for(let e=0;e<i.length;e++){if(!r)return;let t=i[e];r=r[t]}return n&&(n.path=i.join(`.`)),r}function na(e,t,n){let r=e,i=ta(t),a=i[i.length-1];if(i.length>1){for(let e=0;e<i.length-1;e++){let t=i[e];if(r=r[t],!r)return}r[a]=n}else r[t]=n;return i.join(`.`)}var ra=e((()=>{K()}));function ia(e){return oa[e]||(oa[e]=e.indexOf(`-`)<0?e:e.replace(sa,e=>e[1].toUpperCase()))}function aa(e){return oa[e]||(oa[e]=e.replace(ca,`-$1`).toLowerCase())}var oa,sa,ca,la=e((()=>{K(),oa={},sa=/-[a-z]/g,ca=/([A-Z])/g}));function ua(){ha=!1;let e=pa.length;for(let t=0;t<e;t++){let e=pa[t];if(e)try{e()}catch(e){setTimeout(()=>{throw e})}}pa.splice(0,e),fa+=e}var da,fa,pa,ma,ha,ga,_a,va,ya=e((()=>{K(),da=0,fa=0,pa=[],ma=0,ha=!1,ga=document.createTextNode(``),new window.MutationObserver(ua).observe(ga,{characterData:!0}),_a={after(e){return{run(t){return window.setTimeout(t,e)},cancel(e){window.clearTimeout(e)}}},run(e,t){return window.setTimeout(e,t)},cancel(e){window.clearTimeout(e)}},va={run(e){return ha||(ha=!0,ga.textContent=ma++),pa.push(e),da++},cancel(e){let t=e-fa;if(t>=0){if(!pa[t])throw Error(`invalid async handle: `+e);pa[t]=null}}}})),ba,xa,Sa=e((()=>{K(),Oi(),ya(),Ji(),ba=va,xa=Di(e=>{class t extends e{static createProperties(e){let t=this.prototype;for(let n in e)n in t||t._createPropertyAccessor(n)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty(`__dataHasAccessor`,this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){this.hasOwnProperty(JSCompiler_renameProperty(`__dataAttributes`,this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let t=this.__dataAttributes[e];return t||(t=this.constructor.attributeNameForProperty(e),this.__dataAttributes[t]=e),t}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this.__data[e]},set:t?function(){}:function(t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,n){let r=this.__data[e],i=this._shouldPropertyChange(e,t,r);return i&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=r),this.__data[e]=t,this.__dataPending[e]=t),i}_isPropertyPending(e){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(e))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,ba.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&=(this._initializeInstanceProperties(this.__dataInstanceProps),null),this.ready())}_flushProperties(){this.__dataCounter++;let e=this.__data,t=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(e,t,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,n)),this.__dataCounter--}_shouldPropertiesChange(e,t,n){return!!t}_propertiesChanged(e,t,n){}_shouldPropertyChange(e,t,n){return n!==t&&(n===n||t===t)}attributeChangedCallback(e,t,n,r){t!==n&&this._attributeToProperty(e,n),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,n,r)}_attributeToProperty(e,t,n){if(!this.__serializing){let r=this.__dataAttributes,i=r&&r[e]||e;this[i]=this._deserializeValue(t,n||this.constructor.typeForProperty(i))}}_propertyToAttribute(e,t,n){this.__serializing=!0,n=arguments.length<3?this[e]:n,this._valueToNodeAttribute(this,n,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,n){let r=this._serializeValue(t);(n===`class`||n===`name`||n===`slot`)&&(e=qi(e)),r===void 0?e.removeAttribute(n):e.setAttribute(n,r===``&&window.trustedTypes?window.trustedTypes.emptyScript:r)}_serializeValue(e){switch(typeof e){case`boolean`:return e?``:void 0;default:return e?.toString()}}_deserializeValue(e,t){switch(t){case Boolean:return e!==null;case Number:return Number(e);default:return e}}}return t})}));function Ca(e,t){if(!wa[t]){let n=e[t];n!==void 0&&(e.__data?e._setPendingProperty(t,n):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty(`__dataProto`,e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=n))}}var wa,Ta,Ea,Da,Oa=e((()=>{for(K(),Oi(),la(),Sa(),wa={},Ta=HTMLElement.prototype;Ta;){let e=Object.getOwnPropertyNames(Ta);for(let t=0;t<e.length;t++)wa[e[t]]=!0;Ta=Object.getPrototypeOf(Ta)}Ea=window.trustedTypes?e=>trustedTypes.isHTML(e)||trustedTypes.isScript(e)||trustedTypes.isScriptURL(e):()=>!1,Da=Di(e=>{let t=xa(e);class n extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(ia(e[t]))}static attributeNameForProperty(e){return aa(e)}_initializeProperties(){this.__dataProto&&=(this._initializeProtoProperties(this.__dataProto),null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){let n=this;n.hasAttribute(e)||this._valueToNodeAttribute(n,t,e)}_serializeValue(e){switch(typeof e){case`object`:if(e instanceof Date)return e.toString();if(e){if(Ea(e))return e;try{return JSON.stringify(e)}catch{return``}}default:return super._serializeValue(e)}}_deserializeValue(e,t){let n;switch(t){case Object:try{n=JSON.parse(e)}catch{n=e}break;case Array:try{n=JSON.parse(e)}catch{n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:n=isNaN(e)?String(e):Number(e),n=new Date(n);break;default:n=super._deserializeValue(e,t);break}return n}_definePropertyAccessor(e,t){Ca(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return!!(this.__dataPending&&e in this.__dataPending)}}return n})}));function ka(){if(!Ra){Ra=!0;let e=document.createElement(`textarea`);e.placeholder=`a`,za=e.placeholder===e.textContent}return za}function Aa(e){ka()&&e.localName===`textarea`&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}function ja(e){let t=e.getAttribute(`is`);if(t&&La[t]){let n=e;for(n.removeAttribute(`is`),e=n.ownerDocument.createElement(t),n.parentNode.replaceChild(e,n),e.appendChild(n);n.attributes.length;){let{name:t}=n.attributes[0];Ba(e,n,t),n.removeAttribute(t)}}return e}function Ma(e,t){let n=t.parentInfo&&Ma(e,t.parentInfo);if(n){for(let e=n.firstChild,r=0;e;e=e.nextSibling)if(t.parentIndex===r++)return e}else return e}function Na(e,t,n,r){r.id&&(t[r.id]=n)}function Pa(e,t,n){if(n.events&&n.events.length)for(let r=0,i=n.events,a;r<i.length&&(a=i[r]);r++)e._addMethodEventListenerToNode(t,a.name,a.value,e)}function Fa(e,t,n,r){n.templateInfo&&(t._templateInfo=n.templateInfo,t._parentTemplateInfo=r)}function Ia(e,t,n){return e=e._methodHost||e,function(t){e[n]?e[n](t,t.detail):console.warn("listener method `"+n+"` not defined")}}var La,Ra,za,Ba,Va,Ha=e((()=>{K(),Oi(),La={"dom-if":!0,"dom-repeat":!0},Ra=!1,za=!1,Ba=(()=>{let e=window.trustedTypes&&window.trustedTypes.createPolicy(`polymer-template-event-attribute-policy`,{createScript:e=>e});return(t,n,r)=>{let i=n.getAttribute(r);if(e&&r.startsWith(`on-`)){t.setAttribute(r,e.createScript(i,r));return}t.setAttribute(r,i)}})(),Va=Di(e=>{class t extends e{static _parseTemplate(e,t){if(!e._templateInfo){let n=e._templateInfo={};n.nodeInfoList=[],n.nestedTemplate=!!t,n.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute&&e.hasAttribute(`strip-whitespace`),this._parseTemplateContent(e,n,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,n){return this._parseTemplateNode(e.content,t,n)}static _parseTemplateNode(e,t,n){let r=!1,i=e;return i.localName==`template`&&!i.hasAttribute(`preserve-content`)?r=this._parseTemplateNestedTemplate(i,t,n)||r:i.localName===`slot`&&(t.hasInsertionPoint=!0),Aa(i),i.firstChild&&this._parseTemplateChildNodes(i,t,n),i.hasAttributes&&i.hasAttributes()&&(r=this._parseTemplateNodeAttributes(i,t,n)||r),r||n.noted}static _parseTemplateChildNodes(e,t,n){if(!(e.localName===`script`||e.localName===`style`))for(let r=e.firstChild,i=0,a;r;r=a){if(r.localName==`template`&&(r=ja(r)),a=r.nextSibling,r.nodeType===Node.TEXT_NODE){let n=a;for(;n&&n.nodeType===Node.TEXT_NODE;)r.textContent+=n.textContent,a=n.nextSibling,e.removeChild(n),n=a;if(t.stripWhiteSpace&&!r.textContent.trim()){e.removeChild(r);continue}}let o={parentIndex:i,parentInfo:n};this._parseTemplateNode(r,t,o)&&(o.infoIndex=t.nodeInfoList.push(o)-1),r.parentNode&&i++}}static _parseTemplateNestedTemplate(e,t,n){let r=e,i=this._parseTemplate(r,t);return(i.content=r.content.ownerDocument.createDocumentFragment()).appendChild(r.content),n.templateInfo=i,!0}static _parseTemplateNodeAttributes(e,t,n){let r=!1,i=Array.from(e.attributes);for(let a=i.length-1,o;o=i[a];a--)r=this._parseTemplateNodeAttribute(e,t,n,o.name,o.value)||r;return r}static _parseTemplateNodeAttribute(e,t,n,r,i){return r.slice(0,3)===`on-`?(e.removeAttribute(r),n.events=n.events||[],n.events.push({name:r.slice(3),value:i}),!0):r===`id`?(n.id=i,!0):!1}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e,t){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e),t||=this.constructor._parseTemplate(e);let n=t.nodeInfoList,r=t.content||e.content,i=document.importNode(r,!0);i.__noInsertionPoint=!t.hasInsertionPoint;let a=i.nodeList=Array(n.length);i.$={};for(let e=0,r=n.length,o;e<r&&(o=n[e]);e++){let n=a[e]=Ma(i,o);Na(this,i.$,n,o),Fa(this,n,o,t),Pa(this,n,o)}return i=i,i}_addMethodEventListenerToNode(e,t,n,r){r||=e;let i=Ia(r,t,n);return this._addEventListenerToNode(e,t,i),i}_addEventListenerToNode(e,t,n){e.addEventListener(t,n)}_removeEventListenerFromNode(e,t,n){e.removeEventListener(t,n)}}return t})}));function Ua(e,t,n){let r=e[t];if(!r)r=e[t]={};else if(!e.hasOwnProperty(t)&&(r=e[t]=Object.create(e[t]),n))for(let e in r){let t=r[e],n=r[e]=Array(t.length);for(let e=0;e<t.length;e++)n[e]=t[e]}return r}function Wa(e,t,n,r,i,a){if(t){let o=!1,s=To++;for(let c in n){let l=t[i?Xi(c):c];if(l)for(let t=0,u=l.length,d;t<u&&(d=l[t]);t++)(!d.info||d.info.lastRun!==s)&&(!i||Ka(c,d.trigger))&&(d.info&&(d.info.lastRun=s),d.fn(e,c,n,r,d.info,i,a),o=!0)}return o}return!1}function Ga(e,t,n,r,i,a,o,s){let c=!1,l=t[o?Xi(r):r];if(l)for(let t=0,u=l.length,d;t<u&&(d=l[t]);t++)(!d.info||d.info.lastRun!==n)&&(!o||Ka(r,d.trigger))&&(d.info&&(d.info.lastRun=n),d.fn(e,r,i,a,d.info,o,s),c=!0);return c}function Ka(e,t){if(t){let n=t.name;return n==e||!!(t.structured&&Zi(n,e))||!!(t.wildcard&&Qi(n,e))}else return!0}function qa(e,t,n,r,i){let a=typeof i.method==`string`?e[i.method]:i.method,o=i.property;a?a.call(e,e.__data[o],r[o]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function Ja(e,t,n,r,i){let a=e[Y.NOTIFY],o,s=To++;for(let c in t)t[c]&&(a&&Ga(e,a,s,c,n,r,i)||i&&Ya(e,c,n))&&(o=!0);let c;o&&(c=e.__dataHost)&&c._invalidateProperties&&c._invalidateProperties()}function Ya(e,t,n){let r=Xi(t);return r===t?!1:(Xa(e,aa(r)+`-changed`,n[t],t),!0)}function Xa(e,t,n,r){let i={value:n,queueProperty:!0};r&&(i.path=r),qi(e).dispatchEvent(new CustomEvent(t,{detail:i}))}function Za(e,t,n,r,i,a){let o=(a?Xi(t):t)==t?null:t,s=o?J(e,o):e.__data[t];o&&s===void 0&&(s=n[t]),Xa(e,i.eventName,s,o)}function Qa(e,t,n,r,i){let a,o=e.detail,s=o&&o.path;s?(r=$i(n,r,s),a=o&&o.value):a=e.currentTarget[n],a=i?!a:a,(!t[Y.READ_ONLY]||!t[Y.READ_ONLY][r])&&t._setPendingPropertyOrPath(r,a,!0,!!s)&&(!o||!o.queueProperty)&&t._invalidateProperties()}function $a(e,t,n,r,i){let a=e.__data[t];pi&&(a=pi(a,i.attrName,`attribute`,e)),e._propertyToAttribute(t,i.attrName,a)}function eo(e,t,n,r){let i=e[Y.COMPUTE];if(i)if(bi){To++;let a=to(e),o=[];for(let e in t)Ao(e,i,o,a,r);let s;for(;s=o.shift();)ro(e,``,t,n,s)&&Ao(s.methodInfo,i,o,a,r);Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let a=t;for(;Wa(e,i,a,n,r);)Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),a=e.__dataPending,e.__dataPending=null}}function to(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;let n=e[Y.COMPUTE],{counts:r,ready:i,total:a}=no(e),o;for(;o=i.shift();){t.set(o,t.size);let e=n[o];e&&e.forEach(e=>{let t=e.info.methodInfo;--a,--r[t]===0&&i.push(t)})}a!==0&&console.warn(`Computed graph for ${e.localName} incomplete; circular?`),e.constructor.__orderedComputedDeps=t}return t}function no(e){let t=e[Do],n={},r=e[Y.COMPUTE],i=[],a=0;for(let e in t){let r=t[e];a+=n[e]=r.args.filter(e=>!e.literal).length+(r.dynamicFn?1:0)}for(let e in r)t[e]||i.push(e);return{counts:n,ready:i,total:a}}function ro(e,t,n,r,i){let a=go(e,t,n,r,i);if(a===Eo)return!1;let o=i.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,a,!0):(e[o]=a,!1)}function io(e,t,n){let r=e.__dataLinkedPaths;if(r){let i;for(let a in r){let o=r[a];Qi(a,t)?(i=$i(a,o,t),e._setPendingPropertyOrPath(i,n,!0,!0)):Qi(o,t)&&(i=$i(o,a,t),e._setPendingPropertyOrPath(i,n,!0,!0))}}}function ao(e,t,n,r,i,a,o){n.bindings=n.bindings||[];let s={kind:r,target:i,parts:a,literal:o,isCompound:a.length!==1};if(n.bindings.push(s),uo(s)){let{event:e,negate:t}=s.parts[0];s.listenerEvent=e||aa(i)+`-changed`,s.listenerNegate=t}let c=t.nodeInfoList.length;for(let n=0;n<s.parts.length;n++){let r=s.parts[n];r.compoundIndex=n,oo(e,t,s,r,c)}}function oo(e,t,n,r,i){if(!r.literal)if(n.kind===`attribute`&&n.target[0]===`-`)console.warn(`Cannot set attribute `+n.target+` because "-" is not a valid attribute starting character`);else{let a=r.dependencies,o={index:i,binding:n,part:r,evaluator:e};for(let n=0;n<a.length;n++){let r=a[n];typeof r==`string`&&(r=bo(r),r.wildcard=!0),e._addTemplatePropertyEffect(t,r.rootProperty,{fn:so,info:o,trigger:r})}}}function so(e,t,n,r,i,a,o){let s=o[i.index],c=i.binding,l=i.part;if(a&&l.source&&t.length>l.source.length&&c.kind==`property`&&!c.isCompound&&s.__isPropertyEffectsClient&&s.__dataHasAccessor&&s.__dataHasAccessor[c.target]){let r=n[t];t=$i(l.source,c.target,t),s._setPendingPropertyOrPath(t,r,!1,!0)&&e._enqueueClient(s)}else{let o=i.evaluator._evaluateBinding(e,l,t,n,r,a);o!==Eo&&co(e,s,c,l,o)}}function co(e,t,n,r,i){if(i=lo(t,i,n,r),pi&&(i=pi(i,n.target,n.kind,t)),n.kind==`attribute`)e._valueToNodeAttribute(t,i,n.target);else{let r=n.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[r]?(!t[Y.READ_ONLY]||!t[Y.READ_ONLY][r])&&t._setPendingProperty(r,i)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,r,i)}}function lo(e,t,n,r){if(n.isCompound){let i=e.__dataCompoundStorage[n.target];i[r.compoundIndex]=t,t=i.join(``)}return n.kind!==`attribute`&&(n.target===`textContent`||n.target===`value`&&(e.localName===`input`||e.localName===`textarea`))&&(t??=``),t}function uo(e){return!!e.target&&e.kind!=`attribute`&&e.kind!=`text`&&!e.isCompound&&e.parts[0].mode===`{`}function fo(e,t){let{nodeList:n,nodeInfoList:r}=t;if(r.length)for(let t=0;t<r.length;t++){let i=r[t],a=n[t],o=i.bindings;if(o)for(let t=0;t<o.length;t++){let n=o[t];po(a,n),mo(a,e,n)}a.__dataHost=e}}function po(e,t){if(t.isCompound){let n=e.__dataCompoundStorage||={},r=t.parts,i=Array(r.length);for(let e=0;e<r.length;e++)i[e]=r[e].literal;let a=t.target;n[a]=i,t.literal&&t.kind==`property`&&(a===`className`&&(e=qi(e)),e[a]=t.literal)}}function mo(e,t,n){if(n.listenerEvent){let r=n.parts[0];e.addEventListener(n.listenerEvent,function(e){Qa(e,t,n.target,r.source,r.negate)})}}function ho(e,t,n,r,i,a){a=t.static||a&&(typeof a!=`object`||a[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:i,dynamicFn:a};for(let i=0,a;i<t.args.length&&(a=t.args[i]);i++)a.literal||e._addPropertyEffect(a.rootProperty,n,{fn:r,info:o,trigger:a});return a&&e._addPropertyEffect(t.methodName,n,{fn:r,info:o}),o}function go(e,t,n,r,i){let a=e._methodHost||e,o=a[i.methodName];if(o){let r=e._marshalArgs(i.args,t,n);return r===Eo?Eo:o.apply(a,r)}else i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}function _o(e){let t=``;for(let n=0;n<e.length;n++){let r=e[n].literal;t+=r||``}return t}function vo(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:jo};return t[2].trim()?yo(t[2].replace(/\\,/g,`&comma;`).split(`,`),e):e}return null}function yo(e,t){return t.args=e.map(function(e){let n=bo(e);return n.literal||(t.static=!1),n},this),t}function bo(e){let t=e.trim().replace(/&comma;/g,`,`).replace(/\\(.)/g,`$1`),n={name:t,value:``,literal:!1},r=t[0];switch(r===`-`&&(r=t[1]),r>=`0`&&r<=`9`&&(r=`#`),r){case`'`:case`"`:n.value=t.slice(1,-1),n.literal=!0;break;case`#`:n.value=Number(t),n.literal=!0;break}return n.literal||(n.rootProperty=Xi(t),n.structured=Yi(t),n.structured&&(n.wildcard=t.slice(-2)==`.*`,n.wildcard&&(n.name=t.slice(0,-2)))),n}function xo(e,t,n){let r=J(e,n);return r===void 0&&(r=t[n]),r}function So(e,t,n,r){let i={indexSplices:r};yi&&!e._overrideLegacyUndefined&&(t.splices=i),e.notifyPath(n+`.splices`,i),e.notifyPath(n+`.length`,t.length),yi&&!e._overrideLegacyUndefined&&(i.indexSplices=[])}function Co(e,t,n,r,i,a){So(e,t,n,[{index:r,addedCount:i,removed:a,object:t,type:`splice`}])}function wo(e){return e[0].toUpperCase()+e.substring(1)}var To,Eo,Y,Do,Oo,ko,Ao,jo,Mo,No,Po,Fo,Io,Lo=e((()=>{K(),Ji(),Oi(),ra(),la(),Oa(),Ha(),wi(),To=0,Eo=[],Y={COMPUTE:`__computeEffects`,REFLECT:`__reflectEffects`,NOTIFY:`__notifyEffects`,PROPAGATE:`__propagateEffects`,OBSERVE:`__observeEffects`,READ_ONLY:`__readOnly`},Do=`__computeInfo`,Oo=/[A-Z]/,ko=(e,t,n)=>{let r=0,i=t.length-1,a=-1;for(;r<=i;){let o=r+i>>1,s=n.get(t[o].methodInfo)-n.get(e.methodInfo);if(s<0)r=o+1;else if(s>0)i=o-1;else{a=o;break}}a<0&&(a=i+1),t.splice(a,0,e)},Ao=(e,t,n,r,i)=>{let a=t[i?Xi(e):e];if(a)for(let t=0;t<a.length;t++){let o=a[t];o.info.lastRun!==To&&(!i||Ka(e,o.trigger))&&(o.info.lastRun=To,ko(o.info,n,r))}},jo=[],Mo=`(?:[a-zA-Z_$][\\w.:$\\-*]*)`,``+Mo,No=`(\\[\\[|{{)\\s*(?:(!)\\s*)?`+(`(`+Mo+`\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:"(?:[^"\\\\]|\\\\.)*")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:"(?:[^"\\\\]|\\\\.)*")))\\s*))*)?)\\)\\s*)?)`)+`(?:]]|}})`,Po=new RegExp(No,`g`),Fo=Di(e=>{let t=Va(Da(e));class n extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return Y}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(Io.length){let e=Io[Io.length-1];e._enqueueClient(this),this.__dataHost=e}}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[Y.READ_ONLY];for(let n in e)(!t||!t[n])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=e[n])}_addPropertyEffect(e,t,n){this._createPropertyAccessor(e,t==Y.READ_ONLY);let r=Ua(this,t,!0)[e];r||=this[t][e]=[],r.push(n)}_removePropertyEffect(e,t,n){let r=Ua(this,t,!0)[e],i=r.indexOf(n);i>=0&&r.splice(i,1)}_hasPropertyEffect(e,t){let n=this[t];return!!(n&&n[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,Y.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,Y.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,Y.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,Y.COMPUTE)}_setPendingPropertyOrPath(e,t,n,r){if(r||Xi(Array.isArray(e)?e[0]:e)!==e){if(!r){let n=J(this,e);if(e=na(this,e,t),!e||!super._shouldPropertyChange(e,t,n))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,n))return io(this,e,t),!0}else if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,n);else this[e]=t;return!1}_setUnmanagedPropertyToNode(e,t,n){(n!==e[t]||typeof n==`object`)&&(t===`className`&&(e=qi(e)),e[t]=n)}_setPendingProperty(e,t,n){let r=this.__dataHasPaths&&Yi(e),i=r?this.__dataTemp:this.__data;return this._shouldPropertyChange(e,t,i[e])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),r?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(r||this[Y.NOTIFY]&&this[Y.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=n),!0):!1}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let n=e[t];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let n in e)(t||!this[Y.READ_ONLY]||!this[Y.READ_ONLY][n])&&this._setPendingPropertyOrPath(n,e[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,n){let r=this.__dataHasPaths;this.__dataHasPaths=!1;let i;eo(this,t,n,r),i=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(t,n,r),this._flushClients(),Wa(this,this[Y.REFLECT],t,n,r),Wa(this,this[Y.OBSERVE],t,n,r),i&&Ja(this,i,t,n,r),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,n){this[Y.PROPAGATE]&&Wa(this,this[Y.PROPAGATE],e,t,n),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,e,t,n)}_runEffectsForTemplate(e,t,n,r){let i=(t,r)=>{Wa(this,e.propertyEffects,t,n,r,e.nodeList);for(let i=e.firstChild;i;i=i.nextSibling)this._runEffectsForTemplate(i,t,n,r)};e.runEffects?e.runEffects(i,t,r):i(t,r)}linkPaths(e,t){e=ea(e),t=ea(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=ea(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let n={path:``},r=J(this,e,n);So(this,r,n.path,t)}get(e,t){return J(t||this,e)}set(e,t,n){n?na(n,e,t):(!this[Y.READ_ONLY]||!this[Y.READ_ONLY][e])&&this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let n={path:``},r=J(this,e,n),i=r.length,a=r.push(...t);return t.length&&Co(this,r,n.path,i,t.length,[]),a}pop(e){let t={path:``},n=J(this,e,t),r=!!n.length,i=n.pop();return r&&Co(this,n,t.path,n.length,0,[i]),i}splice(e,t,n,...r){let i={path:``},a=J(this,e,i);t<0?t=a.length-Math.floor(-t):t&&=Math.floor(t);let o;return o=arguments.length===2?a.splice(t):a.splice(t,n,...r),(r.length||o.length)&&Co(this,a,i.path,t,r.length,o),o}shift(e){let t={path:``},n=J(this,e,t),r=!!n.length,i=n.shift();return r&&Co(this,n,t.path,0,0,[i]),i}unshift(e,...t){let n={path:``},r=J(this,e,n),i=r.unshift(...t);return t.length&&Co(this,r,n.path,0,t.length,[]),i}notifyPath(e,t){let n;if(arguments.length==1){let r={path:``};t=J(this,e,r),n=r.path}else n=Array.isArray(e)?ea(e):e;this._setPendingPropertyOrPath(n,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){this._addPropertyEffect(e,Y.READ_ONLY),t&&(this[`_set`+wo(e)]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,n){let r={property:e,method:t,dynamicFn:!!n};this._addPropertyEffect(e,Y.OBSERVE,{fn:qa,info:r,trigger:{name:e}}),n&&this._addPropertyEffect(t,Y.OBSERVE,{fn:qa,info:r,trigger:{name:t}})}_createMethodObserver(e,t){let n=vo(e);if(!n)throw Error(`Malformed observer expression '`+e+`'`);ho(this,n,Y.OBSERVE,go,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,Y.NOTIFY,{fn:Za,info:{eventName:aa(e)+`-changed`,property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);t[0]===`-`?console.warn(`Property `+e+` cannot be reflected to attribute `+t+` because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.`):this._addPropertyEffect(e,Y.REFLECT,{fn:$a,info:{attrName:t}})}_createComputedProperty(e,t,n){let r=vo(t);if(!r)throw Error(`Malformed computed expression '`+t+`'`);let i=ho(this,r,Y.COMPUTE,ro,e,n);Ua(this,Do)[e]=i}_marshalArgs(e,t,n){let r=this.__data,i=[];for(let a=0,o=e.length;a<o;a++){let{name:o,structured:s,wildcard:c,value:l,literal:u}=e[a];if(!u)if(c){let e=Qi(o,t),i=xo(r,n,e?t:o);l={path:e?t:o,value:i,base:e?J(r,o):i}}else l=s?xo(r,n,o):r[o];if(yi&&!this._overrideLegacyUndefined&&l===void 0&&e.length>1)return Eo;i[a]=l}return i}static addPropertyEffect(e,t,n){this.prototype._addPropertyEffect(e,t,n)}static createPropertyObserver(e,t,n){this.prototype._createPropertyObserver(e,t,n)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,n){this.prototype._createComputedProperty(e,t,n)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let n=this.constructor._parseTemplate(e),r=this.__preBoundTemplateInfo==n;if(!r)for(let e in n.propertyEffects)this._createPropertyAccessor(e);if(t)if(n=Object.create(n),n.wasPreBound=r,!this.__templateInfo)this.__templateInfo=n;else{let t=e._parentTemplateInfo||this.__templateInfo,r=t.lastChild;n.parent=t,t.lastChild=n,n.previousSibling=r,r?r.nextSibling=n:t.firstChild=n}else this.__preBoundTemplateInfo=n;return n}static _addTemplatePropertyEffect(e,t,n){let r=e.hostProps=e.hostProps||{};r[t]=!0;let i=e.propertyEffects=e.propertyEffects||{};(i[t]=i[t]||[]).push(n)}_stampTemplate(e,t){t||=this._bindTemplate(e,!0),Io.push(this);let n=super._stampTemplate(e,t);if(Io.pop(),t.nodeList=n.nodeList,!t.wasPreBound){let e=t.childNodes=[];for(let t=n.firstChild;t;t=t.nextSibling)e.push(t)}return n.templateInfo=t,fo(this,t),this.__dataClientsReady&&(this._runEffectsForTemplate(t,this.__data,null,!1),this._flushClients()),n}_removeBoundDom(e){let t=e.templateInfo,{previousSibling:n,nextSibling:r,parent:i}=t;n?n.nextSibling=r:i&&(i.firstChild=r),r?r.previousSibling=n:i&&(i.lastChild=n),t.nextSibling=t.previousSibling=null;let a=t.childNodes;for(let e=0;e<a.length;e++){let t=a[e];qi(qi(t).parentNode).removeChild(t)}}static _parseTemplateNode(e,n,r){let i=t._parseTemplateNode.call(this,e,n,r);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,n);t&&(e.textContent=_o(t)||` `,ao(this,n,r,`text`,`textContent`,t),i=!0)}return i}static _parseTemplateNodeAttribute(e,n,r,i,a){let o=this._parseBindings(a,n);if(o){let t=i,a=`property`;Oo.test(i)?a=`attribute`:i[i.length-1]==`$`&&(i=i.slice(0,-1),a=`attribute`);let s=_o(o);return s&&a==`attribute`&&(i==`class`&&e.hasAttribute(`class`)&&(s+=` `+e.getAttribute(i)),e.setAttribute(i,s)),a==`attribute`&&t==`disable-upgrade$`&&e.setAttribute(i,``),e.localName===`input`&&t===`value`&&e.setAttribute(t,``),e.removeAttribute(t),a===`property`&&(i=ia(i)),ao(this,n,r,a,i,o,s),!0}else return t._parseTemplateNodeAttribute.call(this,e,n,r,i,a)}static _parseTemplateNestedTemplate(e,n,r){let i=t._parseTemplateNestedTemplate.call(this,e,n,r),a=e.parentNode,o=r.templateInfo,s=a.localName===`dom-if`,c=a.localName===`dom-repeat`;xi&&(s||c)&&(a.removeChild(e),r=r.parentInfo,r.templateInfo=o,r.noted=!0,i=!1);let l=o.hostProps;if(Si&&s)l&&(n.hostProps=Object.assign(n.hostProps||{},l),xi||(r.parentInfo.noted=!0));else for(let e in l){let t=[{mode:`{`,source:e,dependencies:[e],hostProp:!0}];ao(this,n,r,`property`,`_host_`+e,t)}return i}static _parseBindings(e,t){let n=[],r=0,i;for(;(i=Po.exec(e))!==null;){i.index>r&&n.push({literal:e.slice(r,i.index)});let a=i[1][0],o=!!i[2],s=i[3].trim(),c=!1,l=``,u=-1;a==`{`&&(u=s.indexOf(`::`))>0&&(l=s.substring(u+2),s=s.substring(0,u),c=!0);let d=vo(s),f=[];if(d){let{args:e,methodName:n}=d;for(let t=0;t<e.length;t++){let n=e[t];n.literal||f.push(n)}let r=t.dynamicFns;(r&&r[n]||d.static)&&(f.push(n),d.dynamicFn=!0)}else f.push(s);n.push({source:s,mode:a,negate:o,customEvent:c,signature:d,dependencies:f,event:l}),r=Po.lastIndex}if(r&&r<e.length){let t=e.substring(r);t&&n.push({literal:t})}return n.length?n:null}static _evaluateBinding(e,t,n,r,i,a){let o;return o=t.signature?go(e,n,r,i,t.signature):n==t.source?a&&Yi(n)?J(e,n):e.__data[n]:J(e,t.source),t.negate&&(o=!o),o}}return n}),Io=[]}));function Ro(){Bo++}function zo(e){Vo.push(e)}var Bo,Vo,Ho=e((()=>{Bo=0,Vo=[]}));function Uo(e){let t={};for(let n in e){let r=e[n];t[n]=typeof r==`function`?{type:r}:r}return t}var Wo,Go=e((()=>{K(),Oi(),Ho(),Sa(),Wo=Di(e=>{let t=xa(e);function n(e){let t=Object.getPrototypeOf(e);return t.prototype instanceof i?t:null}function r(e){if(!e.hasOwnProperty(JSCompiler_renameProperty(`__ownProperties`,e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty(`properties`,e))){let n=e.properties;n&&(t=Uo(n))}e.__ownProperties=t}return e.__ownProperties}class i extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__observedAttributes`,this))){zo(this.prototype);let e=this._properties;this.__observedAttributes=e?Object.keys(e).map(e=>this.prototype._addPropertyToAttributeMap(e)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__finalized`,this))){let e=n(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){let e=r(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__properties`,this))){let e=n(this);this.__properties=Object.assign({},e&&e._properties,r(this))}return this.__properties}static typeForProperty(e){let t=this._properties[e];return t&&t.type}_initializeProperties(){Ro(),this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i})})),Ko,qo,Jo,Yo=e((()=>{K(),wi(),Oi(),Ki(),li(),Fi(),Lo(),Go(),Ji(),Ko=`3.5.2`,qo=window.ShadyCSS&&window.ShadyCSS.cssBuild,Jo=Di(e=>{let t=Wo(Fo(e));function n(e){if(!e.hasOwnProperty(JSCompiler_renameProperty(`__propertyDefaults`,e))){e.__propertyDefaults=null;let t=e._properties;for(let n in t){let r=t[n];`value`in r&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[n]=r)}}return e.__propertyDefaults}function r(e){return e.hasOwnProperty(JSCompiler_renameProperty(`__ownObservers`,e))||(e.__ownObservers=e.hasOwnProperty(JSCompiler_renameProperty(`observers`,e))?e.observers:null),e.__ownObservers}function i(e,t,n,r){n.computed&&(n.readOnly=!0),n.computed&&(e._hasReadOnlyEffect(t)?console.warn(`Cannot redefine computed property '${t}'.`):e._createComputedProperty(t,n.computed,r)),n.readOnly&&!e._hasReadOnlyEffect(t)?e._createReadOnlyProperty(t,!n.computed):n.readOnly===!1&&e._hasReadOnlyEffect(t)&&console.warn(`Cannot make readOnly property '${t}' non-readOnly.`),n.reflectToAttribute&&!e._hasReflectEffect(t)?e._createReflectedProperty(t):n.reflectToAttribute===!1&&e._hasReflectEffect(t)&&console.warn(`Cannot make reflected property '${t}' non-reflected.`),n.notify&&!e._hasNotifyEffect(t)?e._createNotifyingProperty(t):n.notify===!1&&e._hasNotifyEffect(t)&&console.warn(`Cannot make notify property '${t}' non-notify.`),n.observer&&e._createPropertyObserver(t,n.observer,r[n.observer]),e._addPropertyToAttributeMap(t)}function a(e,t,n,r){if(!qo){let i=t.content.querySelectorAll(`style`),a=Bi(t),o=Vi(n),s=t.content.firstElementChild;for(let n=0;n<o.length;n++){let i=o[n];i.textContent=e._processStyleText(i.textContent,r),t.content.insertBefore(i,s)}let c=0;for(let t=0;t<a.length;t++){let n=a[t],o=i[c];o===n?c++:(n=n.cloneNode(!0),o.parentNode.insertBefore(n,o)),n.textContent=e._processStyleText(n.textContent,r)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,n),Ci&&qo&&di){let n=t.content.querySelectorAll(`style`);if(n){let t=``;Array.from(n).forEach(e=>{t+=e.textContent,e.parentNode.removeChild(e)}),e._styleSheet=new CSSStyleSheet,e._styleSheet.replaceSync(t)}}}function o(e){let t=null;if(e&&(!mi||hi)&&(t=Pi.import(e,`template`),mi&&!t))throw Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}class s extends t{static get polymerElementVersion(){return Ko}static _finalizeClass(){t._finalizeClass.call(this);let e=r(this);e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&(typeof e==`string`?(console.error(`template getter must return HTMLTemplateElement`),e=null):gi||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(let t in e)i(this.prototype,t,e[t],e)}static createObservers(e,t){let n=this.prototype;for(let r=0;r<e.length;r++)n._createMethodObserver(e[r],t)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`_template`,this))){let e=this.prototype.hasOwnProperty(JSCompiler_renameProperty(`_template`,this.prototype))?this.prototype._template:void 0;typeof e==`function`&&(e=e()),this._template=e===void 0?this.hasOwnProperty(JSCompiler_renameProperty(`is`,this))&&o(this.is)||Object.getPrototypeOf(this.prototype).constructor.template:e}return this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`_importPath`,this))){let e=this.importMeta;if(e)this._importPath=ai(e.url);else{let e=Pi.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=fi,this.importPath=this.constructor.importPath;let e=n(this.constructor);if(e)for(let t in e){let n=e[t];if(this._canApplyPropertyDefault(t)){let e=typeof n.value==`function`?n.value.call(this):n.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}_canApplyPropertyDefault(e){return!this.hasOwnProperty(e)}static _processStyleText(e,t){return ii(e,t)}static _finalizeTemplate(e){let t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;let n=this.importPath,r=n?ri(n):``;a(this,t,e,r),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){let t=qi(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:`open`,shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e),this.constructor._styleSheet&&(t.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),vi&&window.ShadyDOM&&window.ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=ri(this.importPath)),ri(e,t)}static _parseTemplateContent(e,n,r){return n.dynamicFns=n.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,n,r)}static _addTemplatePropertyEffect(e,n,r){return _i&&!(n in this._properties)&&!(r.info.part.signature&&r.info.part.signature.static)&&!r.info.part.hostProp&&!e.nestedTemplate&&console.warn(`Property '${n}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,e,n,r)}}return s})}));function Xo(e){if(e instanceof $o)return e.value;throw Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}function Zo(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof $o)return Xo(e);throw Error(`non-template value passed to Polymer's html function: ${e}`)}var Qo,$o,es,ts,ns=e((()=>{K(),Qo=window.trustedTypes&&trustedTypes.createPolicy(`polymer-html-literal`,{createHTML:e=>e}),$o=class{constructor(e,t){ts(e,t),this.value=t.reduce((t,n,r)=>t+Xo(n)+e[r+1],e[0]).toString()}toString(){return this.value}},es=function(e,...t){ts(e,t);let n=document.createElement(`template`),r=t.reduce((t,n,r)=>t+Zo(n)+e[r+1],e[0]);return Qo&&(r=Qo.createHTML(r)),n.innerHTML=r,n},ts=(e,t)=>{if(!Array.isArray(e)||!Array.isArray(e.raw)||t.length!==e.length-1)throw TypeError(`Invalid call to the html template tag`)}})),rs,is=e((()=>{Yo(),ns(),rs=Jo(HTMLElement)})),as,os,ss,cs,ls,us,ds,fs,ps,ms,hs,gs,_s=e((()=>{w(),Kr(),ni(),R(),is(),x(),as=`bottom-bar-toolbar`,os=`bottom-bar-menu`,ss=k`
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
		min-width: 5px;
		padding-right: 3%;
		margin-right: auto;
		white-space: nowrap;
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
		border-color: transparent;
		padding: 0 18px;
		font-size: 14px;
		font-weight: 500;
		line-height: 40px;
		overflow: hidden;
		flex: 0 0 auto;
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

	#dropdown::part(button) {
		border: none;
		cursor: pointer;
		outline: none;
		background: var(
			--cosmoz-bottom-bar-button-bg-color,
			var(--cosmoz-button-bg-color, #101010)
		);
		color: var(
			--cosmoz-bottom-bar-button-color,
			var(--cosmoz-button-color, #fff)
		);
		border-radius: 2px;
		width: 40px;
		height: 40px;
	}

	#dropdown::part(button):hover {
		background: var(
			--cosmoz-bottom-bar-button-hover-bg-color,
			var(--cosmoz-button-hover-bg-color, #3a3f44)
		);
	}

	:host([hide-actions]) #bottomBarToolbar,
	:host([hide-actions]) #bottomBarMenu,
	:host([hide-actions]) #dropdown {
		display: none;
	}

	:host(:not([has-menu-items])) cosmoz-dropdown-menu {
		display: none;
	}
`,cs=Symbol(`openMenu`),ls=e=>{let t=e.shadowRoot?.querySelector(`#dropdown`);!t||t.hasAttribute(`hidden`)||((t.shadowRoot?.querySelector(`cosmoz-dropdown`))?.shadowRoot?.querySelector(`#dropdownButton`))?.click()},us=e=>e.nodeType===Node.ELEMENT_NODE&&e.getAttribute(`slot`)!==`info`&&e.tagName!==`TEMPLATE`&&e.tagName!==`STYLE`&&e.tagName!==`DOM-REPEAT`&&e.tagName!==`DOM-IF`&&e.getAttribute(`slot`)!==`extra`,ds=e=>{let t=[...e.childNodes],n=[];for(let e of t)if(e.tagName===`SLOT`){let t=e.assignedElements({flatten:!0});n.push(...t)}else n.push(e);return n},fs=e=>{let t=ds(e).filter(us).filter(e=>!e.hidden).sort((e,t)=>(Number(e.dataset.index)||0)-(Number(t.dataset.index)||0));if(t.length===0)return t;let n=t.reduce((e,t)=>parseInt(e.dataset.priority??`0`,10)>=parseInt(t.dataset.priority??`0`,10)?e:t,{dataset:{priority:`-1000`}});return[n,...t.filter(e=>e!==n)]},ps=(e,t,n,r)=>{let i=t?as:os;e.setAttribute(`slot`,i),e.setAttribute(`tabindex`,`0`),e.classList.toggle(r,!t),e.classList.toggle(n,t)},ms=(e,t,n)=>{let r=fs(e),{maxToolbarItems:i=1}=e;if(!(r.length>0)){e.toggleAttribute(`has-menu-items`,!1);return}let a=r.slice(0,i),o=r.slice(a.length);a.forEach(e=>ps(e,!0,t,n)),o.forEach(e=>ps(e,!1,t,n)),e.toggleAttribute(`has-menu-items`,o.length>0)},hs=e=>{let{active:t=!1,maxToolbarItems:n=1}=e,r=Xe(!1);ti({activity:cs,callback:()=>ls(e),check:()=>t&&!e.hasAttribute(`hide-actions`),element:()=>e.shadowRoot?.querySelector(`#dropdown`)},[t]);let i=M(()=>C(`height`),[]);Be(()=>{r.current?i(e,t):i(e,t,{duration:0}),r.current=!0},[t]);let a=N(()=>ms(e,`cosmoz-bottom-bar-toolbar`,`cosmoz-bottom-bar-menu`),[n]),o=Xe(null),s=N(()=>{let t=o.current;t&&(t.disconnect(),ds(e).filter(us).forEach(e=>{t.observe(e,{attributes:!0,attributeFilter:[`hidden`]})}))},[]);j(()=>{o.current=new MutationObserver(()=>{s(),a()}),s();let t=new MutationObserver(()=>{s(),a()});return t.observe(e,{childList:!0}),()=>{o.current?.disconnect(),o.current=null,t.disconnect()}},[a]);let c=N(()=>{s(),a()},[a]);return h` <div id="bar" part="bar">
			<div id="info" part="info"><slot name="info"></slot></div>
			<slot
				id="bottomBarToolbar"
				name="bottom-bar-toolbar"
				@slotchange=${c}
			></slot>
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
				<slot id="bottomBarMenu" name="bottom-bar-menu"></slot>
			</cosmoz-dropdown-menu>
			<slot name="extra" id="extraSlot"></slot>
		</div>
		<div hidden style="display:none">
			<slot id="content" @slotchange=${c}></slot>
		</div>`},customElements.define(`cosmoz-bottom-bar`,L(hs,{observedAttributes:[`active`,`max-toolbar-items`],styleSheets:[ss]})),gs=`
	<slot name="extra" slot="extra"></slot>
	<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
	<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
`,h(Object.assign([gs],{raw:[gs]})),es(Object.assign([gs],{raw:[gs]}))})),vs=e((()=>{_s()})),X,Z=e((()=>{x(),X=e=>e??m})),ys,bs=e((()=>{x(),I(),d(),ys=tt(class extends nt{constructor(e){if(super(e),e.type!==F.PROPERTY&&e.type!==F.ATTRIBUTE&&e.type!==F.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!v(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===i||t===m)return t;let n=e.element,r=e.name;if(e.type===F.PROPERTY){if(t===n[r])return i}else if(e.type===F.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return i}else if(e.type===F.ATTRIBUTE&&n.getAttribute(r)===t+``)return i;return c(e),t}})})),xs=e((()=>{x(),Z()})),Ss=e((()=>{x(),Z()})),Cs=e((()=>{x(),Z()})),ws=e((()=>{x(),Z()})),Ts=e((()=>{x(),Z()})),Es=e((()=>{x(),Z()})),Ds=e((()=>{x(),Z()})),Os=e((()=>{x(),Z()})),ks=e((()=>{x(),Z()})),As=e((()=>{x(),Z()})),js=e((()=>{x(),Z()})),Ms=e((()=>{x(),Z()})),Ns=e((()=>{x(),Z()})),Ps=e((()=>{x(),Z()})),Fs=e((()=>{x(),Z()})),Is=e((()=>{x(),Z()})),Ls=e((()=>{x(),Z()})),Rs=e((()=>{x(),Z()})),zs=e((()=>{x(),Z()})),Bs=e((()=>{x(),Z()})),Vs=e((()=>{x(),Z()})),Hs=e((()=>{x(),Z()})),Us=e((()=>{x(),Z()})),Ws=e((()=>{x(),Z()})),Gs=e((()=>{x(),Z()})),Ks=e((()=>{x(),Z()})),qs=e((()=>{x(),Z()})),Js=e((()=>{x(),Z()})),Ys=e((()=>{x(),Z()})),Xs=e((()=>{x(),Z()})),Zs=e((()=>{x(),Z()})),Qs=e((()=>{x(),Z()})),$s=e((()=>{x(),Z()})),ec=e((()=>{x(),Z()})),tc=e((()=>{x(),Z()})),nc=e((()=>{x(),Z()})),rc=e((()=>{x(),Z()})),ic=e((()=>{x(),Z()})),ac=e((()=>{x(),Z()})),oc=e((()=>{x(),Z()})),sc=e((()=>{x(),Z()})),cc=e((()=>{x(),Z()})),lc=e((()=>{x(),Z()})),uc=e((()=>{x(),Z()})),dc=e((()=>{x(),Z()})),fc=e((()=>{x(),Z()})),pc=e((()=>{x(),Z()})),mc=e((()=>{x(),Z()})),hc=e((()=>{x(),Z()})),gc=e((()=>{x(),Z()})),_c=e((()=>{x(),Z()})),vc=e((()=>{x(),Z()})),yc=e((()=>{x(),Z()})),bc=e((()=>{x(),Z()})),xc=e((()=>{x(),Z()})),Sc=e((()=>{x(),Z()})),Cc=e((()=>{x(),Z()})),wc=e((()=>{x(),Z()})),Tc=e((()=>{x(),Z()})),Ec=e((()=>{x(),Z()})),Dc=e((()=>{x(),Z()})),Oc=e((()=>{x(),Z()})),kc=e((()=>{x(),Z()})),Ac=e((()=>{x(),Z()})),jc=e((()=>{x(),Z()})),Mc=e((()=>{x(),Z()})),Nc=e((()=>{x(),Z()})),Pc=e((()=>{x(),Z()})),Fc=e((()=>{x(),Z()})),Ic=e((()=>{x(),Z()})),Lc=e((()=>{x(),Z()})),Rc=e((()=>{x(),Z()})),zc=e((()=>{x(),Z()})),Bc=e((()=>{x(),Z()})),Vc=e((()=>{x(),Z()})),Hc=e((()=>{x(),Z()})),Uc=e((()=>{x(),Z()})),Wc=e((()=>{x(),Z()})),Gc=e((()=>{x(),Z()})),Kc=e((()=>{x(),Z()})),qc=e((()=>{x(),Z()})),Jc=e((()=>{x(),Z()})),Yc=e((()=>{x(),Z()})),Xc=e((()=>{x(),Z()})),Zc=e((()=>{x(),Z()})),Qc=e((()=>{x(),Z()})),$c=e((()=>{x(),Z()})),el=e((()=>{x(),Z()})),tl=e((()=>{x(),Z()})),nl=e((()=>{x(),Z()})),rl=e((()=>{x(),Z()})),il=e((()=>{x(),Z()})),al=e((()=>{x(),Z()})),ol=e((()=>{x(),Z()})),sl=e((()=>{x(),Z()})),cl=e((()=>{x(),Z()})),ll=e((()=>{x(),Z()})),ul=e((()=>{x(),Z()})),dl=e((()=>{x(),Z()})),fl=e((()=>{x(),Z()})),pl=e((()=>{x(),Z()})),ml=e((()=>{x(),Z()})),hl=e((()=>{x(),Z()})),gl=e((()=>{x(),Z()})),_l=e((()=>{x(),Z()})),vl=e((()=>{x(),Z()})),yl=e((()=>{x(),Z()})),bl=e((()=>{x(),Z()})),xl=e((()=>{x(),Z()})),Sl=e((()=>{x(),Z()})),Cl=e((()=>{x(),Z()})),wl=e((()=>{x(),Z()})),Tl=e((()=>{x(),Z()})),El=e((()=>{x(),Z()})),Dl=e((()=>{x(),Z()})),Ol=e((()=>{x(),Z()})),kl=e((()=>{x(),Z()})),Al=e((()=>{x(),Z()})),jl=e((()=>{x(),Z()})),Ml=e((()=>{x(),Z()})),Nl=e((()=>{x(),Z()})),Pl=e((()=>{x(),Z()})),Fl=e((()=>{x(),Z()})),Il=e((()=>{x(),Z()})),Ll=e((()=>{x(),Z()})),Rl=e((()=>{x(),Z()})),zl=e((()=>{x(),Z()})),Bl=e((()=>{x(),Z()})),Vl=e((()=>{x(),Z()})),Hl=e((()=>{x(),Z()})),Ul=e((()=>{x(),Z()})),Wl=e((()=>{x(),Z()})),Gl=e((()=>{x(),Z()})),Kl=e((()=>{x(),Z()})),ql=e((()=>{x(),Z()})),Jl=e((()=>{x(),Z()})),Yl=e((()=>{x(),Z()})),Xl=e((()=>{x(),Z()})),Zl=e((()=>{x(),Z()})),Ql=e((()=>{x(),Z()})),$l=e((()=>{x(),Z()})),eu=e((()=>{x(),Z()})),tu=e((()=>{x(),Z()})),nu=e((()=>{x(),Z()})),ru=e((()=>{x(),Z()})),iu=e((()=>{x(),Z()})),au=e((()=>{x(),Z()})),ou=e((()=>{x(),Z()})),su=e((()=>{x(),Z()})),cu=e((()=>{x(),Z()})),lu=e((()=>{x(),Z()})),uu=e((()=>{x(),Z()})),du=e((()=>{x(),Z()})),fu=e((()=>{x(),Z()})),pu=e((()=>{x(),Z()})),mu=e((()=>{x(),Z()})),hu=e((()=>{x(),Z()})),gu=e((()=>{x(),Z()})),_u=e((()=>{x(),Z()})),vu=e((()=>{x(),Z()})),yu=e((()=>{x(),Z()})),bu=e((()=>{x(),Z()})),xu=e((()=>{x(),Z()})),Su=e((()=>{x(),Z()})),Cu=e((()=>{x(),Z()})),wu=e((()=>{x(),Z()})),Tu=e((()=>{x(),Z()})),Eu=e((()=>{x(),Z()})),Du=e((()=>{x(),Z()})),Ou=e((()=>{x(),Z()})),ku=e((()=>{x(),Z()})),Au=e((()=>{x(),Z()})),ju=e((()=>{x(),Z()})),Mu=e((()=>{x(),Z()})),Nu=e((()=>{x(),Z()})),Pu=e((()=>{x(),Z()})),Fu=e((()=>{x(),Z()})),Iu=e((()=>{x(),Z()})),Lu=e((()=>{x(),Z()})),Ru=e((()=>{x(),Z()})),zu=e((()=>{x(),Z()})),Bu=e((()=>{x(),Z()})),Vu=e((()=>{x(),Z()})),Hu=e((()=>{x(),Z()})),Uu=e((()=>{x(),Z()})),Wu=e((()=>{x(),Z()})),Gu=e((()=>{x(),Z()})),Ku=e((()=>{x(),Z()})),qu=e((()=>{x(),Z()})),Ju=e((()=>{x(),Z()})),Yu=e((()=>{x(),Z()})),Xu=e((()=>{x(),Z()})),Zu=e((()=>{x(),Z()})),Qu=e((()=>{x(),Z()})),$u=e((()=>{x(),Z()})),ed=e((()=>{x(),Z()})),td=e((()=>{x(),Z()})),nd=e((()=>{x(),Z()})),rd=e((()=>{x(),Z()})),id=e((()=>{x(),Z()})),ad=e((()=>{x(),Z()})),od=e((()=>{x(),Z()})),sd=e((()=>{x(),Z()})),cd=e((()=>{x(),Z()})),ld=e((()=>{x(),Z()})),ud=e((()=>{x(),Z()})),dd=e((()=>{x(),Z()})),fd=e((()=>{x(),Z()})),pd=e((()=>{x(),Z()})),md=e((()=>{x(),Z()})),hd=e((()=>{x(),Z()})),gd=e((()=>{x(),Z()})),_d=e((()=>{x(),Z()})),vd=e((()=>{x(),Z()})),yd=e((()=>{x(),Z()})),bd=e((()=>{x(),Z()})),xd=e((()=>{x(),Z()})),Sd=e((()=>{x(),Z()})),Cd=e((()=>{x(),Z()})),wd=e((()=>{x(),Z()})),Td=e((()=>{x(),Z()})),Ed=e((()=>{x(),Z()})),Dd=e((()=>{x(),Z()})),Od=e((()=>{x(),Z()})),kd=e((()=>{x(),Z()})),Ad=e((()=>{x(),Z()})),jd=e((()=>{x(),Z()})),Md=e((()=>{x(),Z()})),Nd=e((()=>{x(),Z()})),Pd,Fd=e((()=>{x(),Z(),B(),Pd=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>h`
  <svg
    slot=${X(e)}
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
    style=${X(a)}
  >
    ${z(t,()=>_`<title>${t}</title>`)}
    <path d="m6 9 6 6 6-6" />
  </svg>
`})),Id=e((()=>{x(),Z()})),Ld=e((()=>{x(),Z()})),Rd=e((()=>{x(),Z()})),zd=e((()=>{x(),Z()})),Bd=e((()=>{x(),Z()})),Vd=e((()=>{x(),Z()})),Hd=e((()=>{x(),Z()})),Ud=e((()=>{x(),Z()})),Wd=e((()=>{x(),Z()})),Gd=e((()=>{x(),Z()})),Kd=e((()=>{x(),Z()})),qd=e((()=>{x(),Z()})),Jd=e((()=>{x(),Z()})),Yd=e((()=>{x(),Z()})),Xd=e((()=>{x(),Z()})),Zd=e((()=>{x(),Z()})),Qd=e((()=>{x(),Z()})),$d=e((()=>{x(),Z()})),ef=e((()=>{x(),Z()})),tf=e((()=>{x(),Z()})),nf=e((()=>{x(),Z()})),rf=e((()=>{x(),Z()})),af=e((()=>{x(),Z()})),of=e((()=>{x(),Z()})),sf=e((()=>{x(),Z()})),cf=e((()=>{x(),Z()})),lf=e((()=>{x(),Z()})),uf=e((()=>{x(),Z()})),df=e((()=>{x(),Z()})),ff=e((()=>{x(),Z()})),pf=e((()=>{x(),Z()})),mf=e((()=>{x(),Z()})),hf=e((()=>{x(),Z()})),gf=e((()=>{x(),Z()})),_f=e((()=>{x(),Z()})),vf=e((()=>{x(),Z()})),yf=e((()=>{x(),Z()})),bf=e((()=>{x(),Z()})),xf=e((()=>{x(),Z()})),Sf=e((()=>{x(),Z()})),Cf=e((()=>{x(),Z()})),wf=e((()=>{x(),Z()})),Tf=e((()=>{x(),Z()})),Ef=e((()=>{x(),Z()})),Df=e((()=>{x(),Z()})),Of=e((()=>{x(),Z()})),kf=e((()=>{x(),Z()})),Af=e((()=>{x(),Z()})),jf=e((()=>{x(),Z()})),Mf=e((()=>{x(),Z()})),Nf=e((()=>{x(),Z()})),Pf=e((()=>{x(),Z()})),Ff=e((()=>{x(),Z()})),If=e((()=>{x(),Z()})),Lf=e((()=>{x(),Z()})),Rf=e((()=>{x(),Z()})),zf=e((()=>{x(),Z()})),Bf=e((()=>{x(),Z()})),Vf=e((()=>{x(),Z()})),Hf=e((()=>{x(),Z()})),Uf=e((()=>{x(),Z()})),Wf=e((()=>{x(),Z()})),Gf=e((()=>{x(),Z()})),Kf=e((()=>{x(),Z()})),qf=e((()=>{x(),Z()})),Jf=e((()=>{x(),Z()})),Yf=e((()=>{x(),Z()})),Xf=e((()=>{x(),Z()})),Zf=e((()=>{x(),Z()})),Qf=e((()=>{x(),Z()})),$f=e((()=>{x(),Z()})),ep=e((()=>{x(),Z()})),tp=e((()=>{x(),Z()})),np=e((()=>{x(),Z()})),rp=e((()=>{x(),Z()})),ip=e((()=>{x(),Z()})),ap=e((()=>{x(),Z()})),op=e((()=>{x(),Z()})),sp=e((()=>{x(),Z()})),cp=e((()=>{x(),Z()})),lp=e((()=>{x(),Z()})),up=e((()=>{x(),Z()})),dp=e((()=>{x(),Z()})),fp=e((()=>{x(),Z()})),pp=e((()=>{x(),Z()})),mp=e((()=>{x(),Z()})),hp=e((()=>{x(),Z()})),gp=e((()=>{x(),Z()})),_p=e((()=>{x(),Z()})),vp=e((()=>{x(),Z()})),yp=e((()=>{x(),Z()})),bp=e((()=>{x(),Z()})),xp=e((()=>{x(),Z()})),Sp=e((()=>{x(),Z()})),Cp=e((()=>{x(),Z()})),wp=e((()=>{x(),Z()})),Tp=e((()=>{x(),Z()})),Ep=e((()=>{x(),Z()})),Dp=e((()=>{x(),Z()})),Op=e((()=>{x(),Z()})),kp=e((()=>{x(),Z()})),Ap=e((()=>{x(),Z()})),jp=e((()=>{x(),Z()})),Mp=e((()=>{x(),Z()})),Np=e((()=>{x(),Z()})),Pp=e((()=>{x(),Z()})),Fp=e((()=>{x(),Z()})),Ip=e((()=>{x(),Z()})),Lp=e((()=>{x(),Z()})),Rp=e((()=>{x(),Z()})),zp=e((()=>{x(),Z()})),Bp=e((()=>{x(),Z()})),Vp=e((()=>{x(),Z()})),Hp=e((()=>{x(),Z()})),Up=e((()=>{x(),Z()})),Wp=e((()=>{x(),Z()})),Gp=e((()=>{x(),Z()})),Kp=e((()=>{x(),Z()})),qp=e((()=>{x(),Z()})),Jp=e((()=>{x(),Z()})),Yp=e((()=>{x(),Z()})),Xp=e((()=>{x(),Z()})),Zp=e((()=>{x(),Z()})),Qp=e((()=>{x(),Z()})),$p=e((()=>{x(),Z()})),em=e((()=>{x(),Z()})),tm=e((()=>{x(),Z()})),nm=e((()=>{x(),Z()})),rm=e((()=>{x(),Z()})),im=e((()=>{x(),Z()})),am=e((()=>{x(),Z()})),om=e((()=>{x(),Z()})),sm=e((()=>{x(),Z()})),cm=e((()=>{x(),Z()})),lm=e((()=>{x(),Z()})),um=e((()=>{x(),Z()})),dm=e((()=>{x(),Z()})),fm=e((()=>{x(),Z()})),pm=e((()=>{x(),Z()})),mm=e((()=>{x(),Z()})),hm=e((()=>{x(),Z()})),gm=e((()=>{x(),Z()})),_m=e((()=>{x(),Z()})),vm=e((()=>{x(),Z()})),ym=e((()=>{x(),Z()})),bm=e((()=>{x(),Z()})),xm=e((()=>{x(),Z()})),Sm=e((()=>{x(),Z()})),Cm=e((()=>{x(),Z()})),wm=e((()=>{x(),Z()})),Tm=e((()=>{x(),Z()})),Em=e((()=>{x(),Z()})),Dm=e((()=>{x(),Z()})),Om=e((()=>{x(),Z()})),km=e((()=>{x(),Z()})),Am=e((()=>{x(),Z()})),jm=e((()=>{x(),Z()})),Mm=e((()=>{x(),Z()})),Nm=e((()=>{x(),Z()})),Pm=e((()=>{x(),Z()})),Fm=e((()=>{x(),Z()})),Im=e((()=>{x(),Z()})),Lm=e((()=>{x(),Z()})),Rm=e((()=>{x(),Z()})),zm=e((()=>{x(),Z()})),Bm=e((()=>{x(),Z()})),Vm=e((()=>{x(),Z()})),Hm=e((()=>{x(),Z()})),Um=e((()=>{x(),Z()})),Wm=e((()=>{x(),Z()})),Gm=e((()=>{x(),Z()})),Km=e((()=>{x(),Z()})),qm=e((()=>{x(),Z()})),Jm=e((()=>{x(),Z()})),Ym=e((()=>{x(),Z()})),Xm=e((()=>{x(),Z()})),Zm=e((()=>{x(),Z()})),Qm=e((()=>{x(),Z()})),$m=e((()=>{x(),Z()})),eh=e((()=>{x(),Z()})),th=e((()=>{x(),Z()})),nh=e((()=>{x(),Z()})),rh=e((()=>{x(),Z()})),ih=e((()=>{x(),Z()})),ah=e((()=>{x(),Z()})),oh=e((()=>{x(),Z()})),sh=e((()=>{x(),Z()})),ch=e((()=>{x(),Z()})),lh=e((()=>{x(),Z()})),uh=e((()=>{x(),Z()})),dh=e((()=>{x(),Z()})),fh=e((()=>{x(),Z()})),ph=e((()=>{x(),Z()})),mh=e((()=>{x(),Z()})),hh=e((()=>{x(),Z()})),gh=e((()=>{x(),Z()})),_h=e((()=>{x(),Z()})),vh=e((()=>{x(),Z()})),yh=e((()=>{x(),Z()})),bh=e((()=>{x(),Z()})),xh=e((()=>{x(),Z()})),Sh=e((()=>{x(),Z()})),Ch=e((()=>{x(),Z()})),wh=e((()=>{x(),Z()})),Th=e((()=>{x(),Z()})),Eh=e((()=>{x(),Z()})),Dh=e((()=>{x(),Z()})),Oh=e((()=>{x(),Z()})),kh=e((()=>{x(),Z()})),Ah=e((()=>{x(),Z()})),jh=e((()=>{x(),Z()})),Mh=e((()=>{x(),Z()})),Nh=e((()=>{x(),Z()})),Ph=e((()=>{x(),Z()})),Fh=e((()=>{x(),Z()})),Ih=e((()=>{x(),Z()})),Lh=e((()=>{x(),Z()})),Rh=e((()=>{x(),Z()})),zh=e((()=>{x(),Z()})),Bh=e((()=>{x(),Z()})),Vh=e((()=>{x(),Z()})),Hh=e((()=>{x(),Z()})),Uh=e((()=>{x(),Z()})),Wh=e((()=>{x(),Z()})),Gh=e((()=>{x(),Z()})),Kh=e((()=>{x(),Z()})),qh=e((()=>{x(),Z()})),Jh=e((()=>{x(),Z()})),Yh=e((()=>{x(),Z()})),Xh=e((()=>{x(),Z()})),Zh=e((()=>{x(),Z()})),Qh=e((()=>{x(),Z()})),$h=e((()=>{x(),Z()})),eg=e((()=>{x(),Z()})),tg=e((()=>{x(),Z()})),ng=e((()=>{x(),Z()})),rg=e((()=>{x(),Z()})),ig=e((()=>{x(),Z()})),ag=e((()=>{x(),Z()})),og=e((()=>{x(),Z()})),sg=e((()=>{x(),Z()})),cg=e((()=>{x(),Z()})),lg=e((()=>{x(),Z()})),ug=e((()=>{x(),Z()})),dg=e((()=>{x(),Z()})),fg=e((()=>{x(),Z()})),pg=e((()=>{x(),Z()})),mg=e((()=>{x(),Z()})),hg=e((()=>{x(),Z()})),gg=e((()=>{x(),Z()})),_g=e((()=>{x(),Z()})),vg=e((()=>{x(),Z()})),yg=e((()=>{x(),Z()})),bg=e((()=>{x(),Z()})),xg=e((()=>{x(),Z()})),Sg=e((()=>{x(),Z()})),Cg=e((()=>{x(),Z()})),wg=e((()=>{x(),Z()})),Tg=e((()=>{x(),Z()})),Eg=e((()=>{x(),Z()})),Dg=e((()=>{x(),Z()})),Og=e((()=>{x(),Z()})),kg=e((()=>{x(),Z()})),Ag=e((()=>{x(),Z()})),jg=e((()=>{x(),Z()})),Mg=e((()=>{x(),Z()})),Ng=e((()=>{x(),Z()})),Pg=e((()=>{x(),Z()})),Fg=e((()=>{x(),Z()})),Ig=e((()=>{x(),Z()})),Lg=e((()=>{x(),Z()})),Rg=e((()=>{x(),Z()})),zg=e((()=>{x(),Z()})),Bg=e((()=>{x(),Z()})),Vg=e((()=>{x(),Z()})),Hg=e((()=>{x(),Z()})),Ug=e((()=>{x(),Z()})),Wg=e((()=>{x(),Z()})),Gg=e((()=>{x(),Z()})),Kg=e((()=>{x(),Z()})),qg=e((()=>{x(),Z()})),Jg=e((()=>{x(),Z()})),Yg=e((()=>{x(),Z()})),Xg=e((()=>{x(),Z()})),Zg=e((()=>{x(),Z()})),Qg=e((()=>{x(),Z()})),$g=e((()=>{x(),Z()})),e_=e((()=>{x(),Z()})),t_=e((()=>{x(),Z()})),n_=e((()=>{x(),Z()})),r_=e((()=>{x(),Z()})),i_=e((()=>{x(),Z()})),a_=e((()=>{x(),Z()})),o_=e((()=>{x(),Z()})),s_=e((()=>{x(),Z()})),c_=e((()=>{x(),Z()})),l_=e((()=>{x(),Z()})),u_=e((()=>{x(),Z()})),d_=e((()=>{x(),Z()})),f_=e((()=>{x(),Z()})),p_=e((()=>{x(),Z()})),m_=e((()=>{x(),Z()})),h_=e((()=>{x(),Z()})),g_=e((()=>{x(),Z()})),__=e((()=>{x(),Z()})),v_=e((()=>{x(),Z()})),y_=e((()=>{x(),Z()})),b_=e((()=>{x(),Z()})),x_=e((()=>{x(),Z()})),S_=e((()=>{x(),Z()})),C_=e((()=>{x(),Z()})),w_=e((()=>{x(),Z()})),T_=e((()=>{x(),Z()})),E_=e((()=>{x(),Z()})),D_=e((()=>{x(),Z()})),O_=e((()=>{x(),Z()})),k_=e((()=>{x(),Z()})),A_=e((()=>{x(),Z()})),j_=e((()=>{x(),Z()})),M_=e((()=>{x(),Z()})),N_=e((()=>{x(),Z()})),P_=e((()=>{x(),Z()})),F_=e((()=>{x(),Z()})),I_=e((()=>{x(),Z()})),L_=e((()=>{x(),Z()})),R_=e((()=>{x(),Z()})),z_=e((()=>{x(),Z()})),B_=e((()=>{x(),Z()})),V_=e((()=>{x(),Z()})),H_=e((()=>{x(),Z()})),U_=e((()=>{x(),Z()})),W_=e((()=>{x(),Z()})),G_=e((()=>{x(),Z()})),K_=e((()=>{x(),Z()})),q_=e((()=>{x(),Z()})),J_=e((()=>{x(),Z()})),Y_=e((()=>{x(),Z()})),X_=e((()=>{x(),Z()})),Z_=e((()=>{x(),Z()})),Q_=e((()=>{x(),Z()})),$_=e((()=>{x(),Z()})),ev=e((()=>{x(),Z()})),tv=e((()=>{x(),Z()})),nv=e((()=>{x(),Z()})),rv=e((()=>{x(),Z()})),iv=e((()=>{x(),Z()})),av=e((()=>{x(),Z()})),ov=e((()=>{x(),Z()})),sv=e((()=>{x(),Z()})),cv=e((()=>{x(),Z()})),lv=e((()=>{x(),Z()})),uv=e((()=>{x(),Z()})),dv=e((()=>{x(),Z()})),fv=e((()=>{x(),Z()})),pv=e((()=>{x(),Z()})),mv=e((()=>{x(),Z()})),hv=e((()=>{x(),Z()})),gv=e((()=>{x(),Z()})),_v=e((()=>{x(),Z()})),vv=e((()=>{x(),Z()})),yv=e((()=>{x(),Z()})),bv=e((()=>{x(),Z()})),xv=e((()=>{x(),Z()})),Sv=e((()=>{x(),Z()})),Cv=e((()=>{x(),Z()})),wv=e((()=>{x(),Z()})),Tv=e((()=>{x(),Z()})),Ev=e((()=>{x(),Z()})),Dv=e((()=>{x(),Z()})),Ov=e((()=>{x(),Z()})),kv=e((()=>{x(),Z()})),Av=e((()=>{x(),Z()})),jv=e((()=>{x(),Z()})),Mv=e((()=>{x(),Z()})),Nv=e((()=>{x(),Z()})),Pv=e((()=>{x(),Z()})),Fv=e((()=>{x(),Z()})),Iv=e((()=>{x(),Z()})),Lv=e((()=>{x(),Z()})),Rv=e((()=>{x(),Z()})),zv=e((()=>{x(),Z()})),Bv=e((()=>{x(),Z()})),Vv=e((()=>{x(),Z()})),Hv=e((()=>{x(),Z()})),Uv=e((()=>{x(),Z()})),Wv=e((()=>{x(),Z()})),Gv=e((()=>{x(),Z()})),Kv=e((()=>{x(),Z()})),qv=e((()=>{x(),Z()})),Jv=e((()=>{x(),Z()})),Yv=e((()=>{x(),Z()})),Xv=e((()=>{x(),Z()})),Zv=e((()=>{x(),Z()})),Qv=e((()=>{x(),Z()})),$v=e((()=>{x(),Z()})),ey=e((()=>{x(),Z()})),ty=e((()=>{x(),Z()})),ny,ry=e((()=>{x(),Z(),B(),ny=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>h`
  <svg
    slot=${X(e)}
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
    style=${X(a)}
  >
    ${z(t,()=>_`<title>${t}</title>`)}
    <path
      d="M12 16v-4m0-4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
`})),iy=e((()=>{x(),Z()})),ay=e((()=>{x(),Z()})),oy=e((()=>{x(),Z()})),sy=e((()=>{x(),Z()})),cy=e((()=>{x(),Z()})),ly=e((()=>{x(),Z()})),uy=e((()=>{x(),Z()})),dy=e((()=>{x(),Z()})),fy=e((()=>{x(),Z()})),py=e((()=>{x(),Z()})),my=e((()=>{x(),Z()})),hy=e((()=>{x(),Z()})),gy=e((()=>{x(),Z()})),_y=e((()=>{x(),Z()})),vy=e((()=>{x(),Z()})),yy=e((()=>{x(),Z()})),by=e((()=>{x(),Z()})),xy=e((()=>{x(),Z()})),Sy=e((()=>{x(),Z()})),Cy=e((()=>{x(),Z()})),wy=e((()=>{x(),Z()})),Ty=e((()=>{x(),Z()})),Ey=e((()=>{x(),Z()})),Dy=e((()=>{x(),Z()})),Oy=e((()=>{x(),Z()})),ky=e((()=>{x(),Z()})),Ay=e((()=>{x(),Z()})),jy=e((()=>{x(),Z()})),My=e((()=>{x(),Z()})),Ny=e((()=>{x(),Z()})),Py=e((()=>{x(),Z()})),Fy=e((()=>{x(),Z()})),Iy=e((()=>{x(),Z()})),Ly=e((()=>{x(),Z()})),Ry=e((()=>{x(),Z()})),zy=e((()=>{x(),Z()})),By=e((()=>{x(),Z()})),Vy=e((()=>{x(),Z()})),Hy=e((()=>{x(),Z()})),Uy=e((()=>{x(),Z()})),Wy=e((()=>{x(),Z()})),Gy=e((()=>{x(),Z()})),Ky=e((()=>{x(),Z()})),qy=e((()=>{x(),Z()})),Jy=e((()=>{x(),Z()})),Yy=e((()=>{x(),Z()})),Xy=e((()=>{x(),Z()})),Zy=e((()=>{x(),Z()})),Qy=e((()=>{x(),Z()})),$y=e((()=>{x(),Z()})),eb=e((()=>{x(),Z()})),tb=e((()=>{x(),Z()})),nb=e((()=>{x(),Z()})),rb=e((()=>{x(),Z()})),ib=e((()=>{x(),Z()})),ab=e((()=>{x(),Z()})),ob=e((()=>{x(),Z()})),sb=e((()=>{x(),Z()})),cb=e((()=>{x(),Z()})),lb=e((()=>{x(),Z()})),ub=e((()=>{x(),Z()})),db=e((()=>{x(),Z()})),fb=e((()=>{x(),Z()})),pb=e((()=>{x(),Z()})),mb=e((()=>{x(),Z()})),hb=e((()=>{x(),Z()})),gb=e((()=>{x(),Z()})),_b=e((()=>{x(),Z()})),vb=e((()=>{x(),Z()})),yb=e((()=>{x(),Z()})),bb=e((()=>{x(),Z()})),xb=e((()=>{x(),Z()})),Sb=e((()=>{x(),Z()})),Cb=e((()=>{x(),Z()})),wb=e((()=>{x(),Z()})),Tb=e((()=>{x(),Z()})),Eb=e((()=>{x(),Z()})),Db=e((()=>{x(),Z()})),Ob=e((()=>{x(),Z()})),kb=e((()=>{x(),Z()})),Ab=e((()=>{x(),Z()})),jb=e((()=>{x(),Z()})),Mb=e((()=>{x(),Z()})),Nb=e((()=>{x(),Z()})),Pb=e((()=>{x(),Z()})),Fb=e((()=>{x(),Z()})),Ib=e((()=>{x(),Z()})),Lb=e((()=>{x(),Z()})),Rb=e((()=>{x(),Z()})),zb=e((()=>{x(),Z()})),Bb=e((()=>{x(),Z()})),Vb=e((()=>{x(),Z()})),Hb=e((()=>{x(),Z()})),Ub=e((()=>{x(),Z()})),Wb=e((()=>{x(),Z()})),Gb=e((()=>{x(),Z()})),Kb=e((()=>{x(),Z()})),qb=e((()=>{x(),Z()})),Jb=e((()=>{x(),Z()})),Yb=e((()=>{x(),Z()})),Xb=e((()=>{x(),Z()})),Zb=e((()=>{x(),Z()})),Qb=e((()=>{x(),Z()})),$b=e((()=>{x(),Z()})),ex=e((()=>{x(),Z()})),tx=e((()=>{x(),Z()})),nx=e((()=>{x(),Z()})),rx=e((()=>{x(),Z()})),ix=e((()=>{x(),Z()})),ax=e((()=>{x(),Z()})),ox=e((()=>{x(),Z()})),sx=e((()=>{x(),Z()})),cx=e((()=>{x(),Z()})),lx=e((()=>{x(),Z()})),ux=e((()=>{x(),Z()})),dx=e((()=>{x(),Z()})),fx=e((()=>{x(),Z()})),px=e((()=>{x(),Z()})),mx=e((()=>{x(),Z()})),hx=e((()=>{x(),Z()})),gx=e((()=>{x(),Z()})),_x=e((()=>{x(),Z()})),vx=e((()=>{x(),Z()})),yx=e((()=>{x(),Z()})),bx=e((()=>{x(),Z()})),xx=e((()=>{x(),Z()})),Sx=e((()=>{x(),Z()})),Cx=e((()=>{x(),Z()})),wx=e((()=>{x(),Z()})),Tx=e((()=>{x(),Z()})),Ex=e((()=>{x(),Z()})),Dx=e((()=>{x(),Z()})),Ox=e((()=>{x(),Z()})),kx=e((()=>{x(),Z()})),Ax=e((()=>{x(),Z()})),jx=e((()=>{x(),Z()})),Mx=e((()=>{x(),Z()})),Nx=e((()=>{x(),Z()})),Px=e((()=>{x(),Z()})),Fx=e((()=>{x(),Z()})),Ix=e((()=>{x(),Z()})),Lx=e((()=>{x(),Z()})),Rx=e((()=>{x(),Z()})),zx=e((()=>{x(),Z()})),Bx=e((()=>{x(),Z()})),Vx=e((()=>{x(),Z()})),Hx=e((()=>{x(),Z()})),Ux=e((()=>{x(),Z()})),Wx=e((()=>{x(),Z()})),Gx=e((()=>{x(),Z()})),Kx=e((()=>{x(),Z()})),qx=e((()=>{x(),Z()})),Jx=e((()=>{x(),Z()})),Yx=e((()=>{x(),Z()})),Xx=e((()=>{x(),Z()})),Zx=e((()=>{x(),Z()})),Qx=e((()=>{x(),Z()})),$x=e((()=>{x(),Z()})),eS=e((()=>{x(),Z()})),tS=e((()=>{x(),Z()})),nS=e((()=>{x(),Z()})),rS=e((()=>{x(),Z()})),iS=e((()=>{x(),Z()})),aS=e((()=>{x(),Z()})),oS=e((()=>{x(),Z()})),sS=e((()=>{x(),Z()})),cS=e((()=>{x(),Z()})),lS=e((()=>{x(),Z()})),uS=e((()=>{x(),Z()})),dS=e((()=>{x(),Z()})),fS=e((()=>{x(),Z()})),pS=e((()=>{x(),Z()})),mS=e((()=>{x(),Z()})),hS=e((()=>{x(),Z()})),gS=e((()=>{x(),Z()})),_S=e((()=>{x(),Z()})),vS=e((()=>{x(),Z()})),yS=e((()=>{x(),Z()})),bS=e((()=>{x(),Z()})),xS=e((()=>{x(),Z()})),SS=e((()=>{x(),Z()})),CS=e((()=>{x(),Z()})),wS=e((()=>{x(),Z()})),TS=e((()=>{x(),Z()})),ES=e((()=>{x(),Z()})),DS=e((()=>{x(),Z()})),OS=e((()=>{x(),Z()})),kS=e((()=>{x(),Z()})),AS=e((()=>{x(),Z()})),jS=e((()=>{x(),Z()})),MS=e((()=>{x(),Z()})),NS=e((()=>{x(),Z()})),PS=e((()=>{x(),Z()})),FS=e((()=>{x(),Z()})),IS=e((()=>{x(),Z()})),LS=e((()=>{x(),Z()})),RS=e((()=>{x(),Z()})),zS=e((()=>{x(),Z()})),BS=e((()=>{x(),Z()})),VS=e((()=>{x(),Z()})),HS=e((()=>{x(),Z()})),US=e((()=>{x(),Z()})),WS=e((()=>{x(),Z()})),GS=e((()=>{x(),Z()})),KS=e((()=>{x(),Z()})),qS=e((()=>{x(),Z()})),JS=e((()=>{x(),Z()})),YS=e((()=>{x(),Z()})),XS=e((()=>{x(),Z()})),ZS=e((()=>{x(),Z()})),QS=e((()=>{x(),Z()})),$S=e((()=>{x(),Z()})),eC=e((()=>{x(),Z()})),tC=e((()=>{x(),Z()})),nC=e((()=>{x(),Z()})),rC=e((()=>{x(),Z()})),iC=e((()=>{x(),Z()})),aC=e((()=>{x(),Z()})),oC=e((()=>{x(),Z()})),sC=e((()=>{x(),Z()})),cC=e((()=>{x(),Z()})),lC=e((()=>{x(),Z()})),uC=e((()=>{x(),Z()})),dC=e((()=>{x(),Z()})),fC=e((()=>{x(),Z()})),pC=e((()=>{x(),Z()})),mC=e((()=>{x(),Z()})),hC=e((()=>{x(),Z()})),gC=e((()=>{x(),Z()})),_C=e((()=>{x(),Z()})),vC=e((()=>{x(),Z()})),yC=e((()=>{x(),Z()})),bC=e((()=>{x(),Z()})),xC=e((()=>{x(),Z()})),SC=e((()=>{x(),Z()})),CC=e((()=>{x(),Z()})),wC=e((()=>{x(),Z()})),TC=e((()=>{x(),Z()})),EC=e((()=>{x(),Z()})),DC=e((()=>{x(),Z()})),OC=e((()=>{x(),Z()})),kC=e((()=>{x(),Z()})),AC=e((()=>{x(),Z()})),jC=e((()=>{x(),Z()})),MC=e((()=>{x(),Z()})),NC=e((()=>{x(),Z()})),PC=e((()=>{x(),Z()})),FC=e((()=>{x(),Z()})),IC=e((()=>{x(),Z()})),LC=e((()=>{x(),Z()})),RC=e((()=>{x(),Z()})),zC=e((()=>{x(),Z()})),BC=e((()=>{x(),Z()})),VC=e((()=>{x(),Z()})),HC=e((()=>{x(),Z()})),UC=e((()=>{x(),Z()})),WC=e((()=>{x(),Z()})),GC=e((()=>{x(),Z()})),KC=e((()=>{x(),Z()})),qC=e((()=>{x(),Z()})),JC=e((()=>{x(),Z()})),YC=e((()=>{x(),Z()})),XC=e((()=>{x(),Z()})),ZC=e((()=>{x(),Z()})),QC=e((()=>{x(),Z()})),$C=e((()=>{x(),Z()})),ew=e((()=>{x(),Z()})),tw=e((()=>{x(),Z()})),nw=e((()=>{x(),Z()})),rw=e((()=>{x(),Z()})),iw=e((()=>{x(),Z()})),aw=e((()=>{x(),Z()})),ow=e((()=>{x(),Z()})),sw=e((()=>{x(),Z()})),cw=e((()=>{x(),Z()})),lw=e((()=>{x(),Z()})),uw=e((()=>{x(),Z()})),dw=e((()=>{x(),Z()})),fw=e((()=>{x(),Z()})),pw=e((()=>{x(),Z()})),mw=e((()=>{x(),Z()})),hw=e((()=>{x(),Z()})),gw=e((()=>{x(),Z()})),_w=e((()=>{x(),Z()})),vw=e((()=>{x(),Z()})),yw=e((()=>{x(),Z()})),bw=e((()=>{x(),Z()})),xw=e((()=>{x(),Z()})),Sw=e((()=>{x(),Z()})),Cw=e((()=>{x(),Z()})),ww=e((()=>{x(),Z()})),Tw=e((()=>{x(),Z()})),Ew=e((()=>{x(),Z()})),Dw=e((()=>{x(),Z()})),Ow=e((()=>{x(),Z()})),kw=e((()=>{x(),Z()})),Aw=e((()=>{x(),Z()})),jw=e((()=>{x(),Z()})),Mw=e((()=>{x(),Z()})),Nw=e((()=>{x(),Z()})),Pw=e((()=>{x(),Z()})),Fw=e((()=>{x(),Z()})),Iw=e((()=>{x(),Z()})),Lw=e((()=>{x(),Z()})),Rw=e((()=>{x(),Z()})),zw=e((()=>{x(),Z()})),Bw=e((()=>{x(),Z()})),Vw=e((()=>{x(),Z()})),Hw=e((()=>{x(),Z()})),Uw=e((()=>{x(),Z()})),Ww=e((()=>{x(),Z()})),Gw=e((()=>{x(),Z()})),Kw=e((()=>{x(),Z()})),qw=e((()=>{x(),Z()})),Jw=e((()=>{x(),Z()})),Yw=e((()=>{x(),Z()})),Xw=e((()=>{x(),Z()})),Zw=e((()=>{x(),Z()})),Qw=e((()=>{x(),Z()})),$w=e((()=>{x(),Z()})),eT=e((()=>{x(),Z()})),tT=e((()=>{x(),Z()})),nT=e((()=>{x(),Z()})),rT=e((()=>{x(),Z()})),iT=e((()=>{x(),Z()})),aT=e((()=>{x(),Z()})),oT=e((()=>{x(),Z()})),sT=e((()=>{x(),Z()})),cT=e((()=>{x(),Z()})),lT=e((()=>{x(),Z()})),uT=e((()=>{x(),Z()})),dT=e((()=>{x(),Z()})),fT=e((()=>{x(),Z()})),pT=e((()=>{x(),Z()})),mT=e((()=>{x(),Z()})),hT=e((()=>{x(),Z()})),gT=e((()=>{x(),Z()})),_T=e((()=>{x(),Z()})),vT=e((()=>{x(),Z()})),yT=e((()=>{x(),Z()})),bT=e((()=>{x(),Z()})),xT=e((()=>{x(),Z()})),ST=e((()=>{x(),Z()})),CT=e((()=>{x(),Z()})),wT=e((()=>{x(),Z()})),TT=e((()=>{x(),Z()})),ET=e((()=>{x(),Z()})),DT=e((()=>{x(),Z()})),OT=e((()=>{x(),Z()})),kT=e((()=>{x(),Z()})),AT=e((()=>{x(),Z()})),jT=e((()=>{x(),Z()})),MT=e((()=>{x(),Z()})),NT=e((()=>{x(),Z()})),PT=e((()=>{x(),Z()})),FT=e((()=>{x(),Z()})),IT=e((()=>{x(),Z()})),LT=e((()=>{x(),Z()})),RT=e((()=>{x(),Z()})),zT=e((()=>{x(),Z()})),BT=e((()=>{x(),Z()})),VT=e((()=>{x(),Z()})),HT=e((()=>{x(),Z()})),UT=e((()=>{x(),Z()})),WT=e((()=>{x(),Z()})),GT=e((()=>{x(),Z()})),KT=e((()=>{x(),Z()})),qT=e((()=>{x(),Z()})),JT=e((()=>{x(),Z()})),YT=e((()=>{x(),Z()})),XT=e((()=>{x(),Z()})),ZT=e((()=>{x(),Z()})),QT=e((()=>{x(),Z()})),$T=e((()=>{x(),Z()})),eE=e((()=>{x(),Z()})),tE=e((()=>{x(),Z()})),nE=e((()=>{x(),Z()})),rE=e((()=>{x(),Z()})),iE=e((()=>{x(),Z()})),aE=e((()=>{x(),Z()})),oE=e((()=>{x(),Z()})),sE=e((()=>{x(),Z()})),cE=e((()=>{x(),Z()})),lE=e((()=>{x(),Z()})),uE=e((()=>{x(),Z()})),dE=e((()=>{x(),Z()})),fE=e((()=>{x(),Z()})),pE=e((()=>{x(),Z()})),mE=e((()=>{x(),Z()})),hE=e((()=>{x(),Z()})),gE=e((()=>{x(),Z()})),_E=e((()=>{x(),Z()})),vE=e((()=>{x(),Z()})),yE=e((()=>{x(),Z()})),bE=e((()=>{x(),Z()})),xE=e((()=>{x(),Z()})),SE=e((()=>{x(),Z()})),CE=e((()=>{x(),Z()})),wE=e((()=>{x(),Z()})),TE=e((()=>{x(),Z()})),EE=e((()=>{x(),Z()})),DE=e((()=>{x(),Z()})),OE=e((()=>{x(),Z()})),kE=e((()=>{x(),Z()})),AE=e((()=>{x(),Z()})),jE=e((()=>{x(),Z()})),ME=e((()=>{x(),Z()})),NE=e((()=>{x(),Z()})),PE=e((()=>{x(),Z()})),FE=e((()=>{x(),Z()})),IE=e((()=>{x(),Z()})),LE=e((()=>{x(),Z()})),RE=e((()=>{x(),Z()})),zE=e((()=>{x(),Z()})),BE=e((()=>{x(),Z()})),VE=e((()=>{x(),Z()})),HE=e((()=>{x(),Z()})),UE=e((()=>{x(),Z()})),WE=e((()=>{x(),Z()})),GE=e((()=>{x(),Z()})),KE=e((()=>{x(),Z()})),qE=e((()=>{x(),Z()})),JE=e((()=>{x(),Z()})),YE=e((()=>{x(),Z()})),XE=e((()=>{x(),Z()})),ZE=e((()=>{x(),Z()})),QE=e((()=>{x(),Z()})),$E=e((()=>{x(),Z()})),eD=e((()=>{x(),Z()})),tD=e((()=>{x(),Z()})),nD=e((()=>{x(),Z()})),rD=e((()=>{x(),Z()})),iD=e((()=>{x(),Z()})),aD=e((()=>{x(),Z()})),oD=e((()=>{x(),Z()})),sD=e((()=>{x(),Z()})),cD=e((()=>{x(),Z()})),lD=e((()=>{x(),Z()})),uD=e((()=>{x(),Z()})),dD=e((()=>{x(),Z()})),fD=e((()=>{x(),Z()})),pD=e((()=>{x(),Z()})),mD=e((()=>{x(),Z()})),hD=e((()=>{x(),Z()})),gD=e((()=>{x(),Z()})),_D=e((()=>{x(),Z()})),vD=e((()=>{x(),Z()})),yD=e((()=>{x(),Z()})),bD=e((()=>{x(),Z()})),xD=e((()=>{x(),Z()})),SD=e((()=>{x(),Z()})),CD=e((()=>{x(),Z()})),wD=e((()=>{x(),Z()})),TD=e((()=>{x(),Z()})),ED=e((()=>{x(),Z()})),DD=e((()=>{x(),Z()})),OD=e((()=>{x(),Z()})),kD=e((()=>{x(),Z()})),AD=e((()=>{x(),Z()})),jD=e((()=>{x(),Z()})),MD=e((()=>{x(),Z()})),ND=e((()=>{x(),Z()})),PD=e((()=>{x(),Z()})),FD=e((()=>{x(),Z()})),ID=e((()=>{x(),Z()})),LD=e((()=>{x(),Z()})),RD=e((()=>{x(),Z()})),zD=e((()=>{x(),Z()})),BD=e((()=>{x(),Z()})),VD=e((()=>{x(),Z()})),HD=e((()=>{x(),Z()})),UD=e((()=>{x(),Z()})),WD=e((()=>{x(),Z()})),GD=e((()=>{x(),Z()})),KD=e((()=>{x(),Z()})),qD=e((()=>{x(),Z()})),JD=e((()=>{x(),Z()})),YD=e((()=>{x(),Z()})),XD=e((()=>{x(),Z()})),ZD=e((()=>{x(),Z()})),QD=e((()=>{x(),Z()})),$D=e((()=>{x(),Z()})),eO=e((()=>{x(),Z()})),tO=e((()=>{x(),Z()})),nO=e((()=>{x(),Z()})),rO=e((()=>{x(),Z()})),iO=e((()=>{x(),Z()})),aO=e((()=>{x(),Z()})),oO=e((()=>{x(),Z()})),sO=e((()=>{x(),Z()})),cO=e((()=>{x(),Z()})),lO=e((()=>{x(),Z()})),uO=e((()=>{x(),Z()})),dO=e((()=>{x(),Z()})),fO=e((()=>{x(),Z()})),pO=e((()=>{x(),Z()})),mO=e((()=>{x(),Z()})),hO=e((()=>{x(),Z()})),gO=e((()=>{x(),Z()})),_O=e((()=>{x(),Z()})),vO=e((()=>{x(),Z()})),yO=e((()=>{x(),Z()})),bO=e((()=>{x(),Z()})),xO=e((()=>{x(),Z()})),SO=e((()=>{x(),Z()})),CO=e((()=>{x(),Z()})),wO=e((()=>{x(),Z()})),TO=e((()=>{x(),Z()})),EO=e((()=>{x(),Z()})),DO=e((()=>{x(),Z()})),OO=e((()=>{x(),Z()})),kO=e((()=>{x(),Z()})),AO=e((()=>{x(),Z()})),jO=e((()=>{x(),Z()})),MO=e((()=>{x(),Z()})),NO=e((()=>{x(),Z()})),PO=e((()=>{x(),Z()})),FO=e((()=>{x(),Z()})),IO=e((()=>{x(),Z()})),LO=e((()=>{x(),Z()})),RO=e((()=>{x(),Z()})),zO=e((()=>{x(),Z()})),BO=e((()=>{x(),Z()})),VO=e((()=>{x(),Z()})),HO=e((()=>{x(),Z()})),UO=e((()=>{x(),Z()})),WO=e((()=>{x(),Z()})),GO=e((()=>{x(),Z()})),KO=e((()=>{x(),Z()})),qO=e((()=>{x(),Z()})),JO=e((()=>{x(),Z()})),YO=e((()=>{x(),Z()})),XO=e((()=>{x(),Z()})),ZO=e((()=>{x(),Z()})),QO=e((()=>{x(),Z()})),$O,ek=e((()=>{x(),Z(),B(),$O=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>h`
  <svg
    slot=${X(e)}
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
    style=${X(a)}
  >
    ${z(t,()=>_`<title>${t}</title>`)}
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
`})),tk=e((()=>{x(),Z()})),nk=e((()=>{x(),Z()})),rk=e((()=>{x(),Z()})),ik=e((()=>{x(),Z()})),ak=e((()=>{x(),Z()})),ok=e((()=>{x(),Z()})),sk=e((()=>{x(),Z()})),ck=e((()=>{x(),Z()})),lk=e((()=>{x(),Z()})),uk=e((()=>{xs(),Ss(),Cs(),ws(),Ts(),Es(),Ds(),Os(),ks(),As(),js(),Ms(),Ns(),Ps(),Fs(),Is(),Ls(),Rs(),zs(),Bs(),Vs(),Hs(),Us(),Ws(),Gs(),Ks(),qs(),Js(),Ys(),Xs(),Zs(),Qs(),$s(),ec(),tc(),nc(),rc(),ic(),ac(),oc(),sc(),cc(),lc(),uc(),dc(),fc(),pc(),mc(),hc(),gc(),_c(),vc(),yc(),bc(),xc(),Sc(),Cc(),wc(),Tc(),Ec(),Dc(),Oc(),kc(),Ac(),jc(),Mc(),Nc(),Pc(),Fc(),Ic(),Lc(),Rc(),zc(),Bc(),Vc(),Hc(),Uc(),Wc(),Gc(),Kc(),qc(),Jc(),Yc(),Xc(),Zc(),Qc(),$c(),el(),tl(),nl(),rl(),il(),al(),ol(),sl(),cl(),ll(),ul(),dl(),fl(),pl(),ml(),hl(),gl(),_l(),vl(),yl(),bl(),xl(),Sl(),Cl(),wl(),Tl(),El(),Dl(),Ol(),kl(),Al(),jl(),Ml(),Nl(),Pl(),Fl(),Il(),Ll(),Rl(),zl(),Bl(),Vl(),Hl(),Ul(),Wl(),Gl(),Kl(),ql(),Jl(),Yl(),Xl(),Zl(),Ql(),$l(),eu(),tu(),nu(),ru(),iu(),au(),ou(),su(),cu(),lu(),uu(),du(),fu(),pu(),mu(),hu(),gu(),_u(),vu(),yu(),bu(),xu(),Su(),Cu(),wu(),Tu(),Eu(),Du(),Ou(),ku(),Au(),ju(),Mu(),Nu(),Pu(),Fu(),Iu(),Lu(),Ru(),zu(),Bu(),Vu(),Hu(),Uu(),Wu(),Gu(),Ku(),qu(),Ju(),Yu(),Xu(),Zu(),Qu(),$u(),ed(),td(),nd(),rd(),id(),ad(),od(),sd(),cd(),ld(),ud(),dd(),fd(),pd(),md(),hd(),gd(),_d(),vd(),yd(),bd(),xd(),Sd(),Cd(),wd(),Td(),Ed(),Dd(),Od(),kd(),Ad(),jd(),Md(),Nd(),Fd(),Id(),Ld(),Rd(),zd(),Bd(),Vd(),Hd(),Ud(),Wd(),Gd(),Kd(),qd(),Jd(),Yd(),Xd(),Zd(),Qd(),$d(),ef(),tf(),nf(),rf(),af(),of(),sf(),cf(),lf(),uf(),df(),ff(),pf(),mf(),hf(),gf(),_f(),vf(),yf(),bf(),xf(),Sf(),Cf(),wf(),Tf(),Ef(),Df(),Of(),kf(),Af(),jf(),Mf(),Nf(),Pf(),Ff(),If(),Lf(),Rf(),zf(),Bf(),Vf(),Hf(),Uf(),Wf(),Gf(),Kf(),qf(),Jf(),Yf(),Xf(),Zf(),Qf(),$f(),ep(),tp(),np(),rp(),ip(),ap(),op(),sp(),cp(),lp(),up(),dp(),fp(),pp(),mp(),hp(),gp(),_p(),vp(),yp(),bp(),xp(),Sp(),Cp(),wp(),Tp(),Ep(),Dp(),Op(),kp(),Ap(),jp(),Mp(),Np(),Pp(),Fp(),Ip(),Lp(),Rp(),zp(),Bp(),Vp(),Hp(),Up(),Wp(),Gp(),Kp(),qp(),Jp(),Yp(),Xp(),Zp(),Qp(),$p(),em(),tm(),nm(),rm(),im(),am(),om(),sm(),cm(),lm(),um(),dm(),fm(),pm(),mm(),hm(),gm(),_m(),vm(),ym(),bm(),xm(),Sm(),Cm(),wm(),Tm(),Em(),Dm(),Om(),km(),Am(),jm(),Mm(),Nm(),Pm(),Fm(),Im(),Lm(),Rm(),zm(),Bm(),Vm(),Hm(),Um(),Wm(),Gm(),Km(),qm(),Jm(),Ym(),Xm(),Zm(),Qm(),$m(),eh(),th(),nh(),rh(),ih(),ah(),oh(),sh(),ch(),lh(),uh(),dh(),fh(),ph(),mh(),hh(),gh(),_h(),vh(),yh(),bh(),xh(),Sh(),Ch(),wh(),Th(),Eh(),Dh(),Oh(),kh(),Ah(),jh(),Mh(),Nh(),Ph(),Fh(),Ih(),Lh(),Rh(),zh(),Bh(),Vh(),Hh(),Uh(),Wh(),Gh(),Kh(),qh(),Jh(),Yh(),Xh(),Zh(),Qh(),$h(),eg(),tg(),ng(),rg(),ig(),ag(),og(),sg(),cg(),lg(),ug(),dg(),fg(),pg(),mg(),hg(),gg(),_g(),vg(),yg(),bg(),xg(),Sg(),Cg(),wg(),Tg(),Eg(),Dg(),Og(),kg(),Ag(),jg(),Mg(),Ng(),Pg(),Fg(),Ig(),Lg(),Rg(),zg(),Bg(),Vg(),Hg(),Ug(),Wg(),Gg(),Kg(),qg(),Jg(),Yg(),Xg(),Zg(),Qg(),$g(),e_(),t_(),n_(),r_(),i_(),a_(),o_(),s_(),c_(),l_(),u_(),d_(),f_(),p_(),m_(),h_(),g_(),__(),v_(),y_(),b_(),x_(),S_(),C_(),w_(),T_(),E_(),D_(),O_(),k_(),A_(),j_(),M_(),N_(),P_(),F_(),I_(),L_(),R_(),z_(),B_(),V_(),H_(),U_(),W_(),G_(),K_(),q_(),J_(),Y_(),X_(),Z_(),Q_(),$_(),ev(),tv(),nv(),rv(),iv(),av(),ov(),sv(),cv(),lv(),uv(),dv(),fv(),pv(),mv(),hv(),gv(),_v(),vv(),yv(),bv(),xv(),Sv(),Cv(),wv(),Tv(),Ev(),Dv(),Ov(),kv(),Av(),jv(),Mv(),Nv(),Pv(),Fv(),Iv(),Lv(),Rv(),zv(),Bv(),Vv(),Hv(),Uv(),Wv(),Gv(),Kv(),qv(),Jv(),Yv(),Xv(),Zv(),Qv(),$v(),ey(),ty(),ry(),iy(),ay(),oy(),sy(),cy(),ly(),uy(),dy(),fy(),py(),my(),hy(),gy(),_y(),vy(),yy(),by(),xy(),Sy(),Cy(),wy(),Ty(),Ey(),Dy(),Oy(),ky(),Ay(),jy(),My(),Ny(),Py(),Fy(),Iy(),Ly(),Ry(),zy(),By(),Vy(),Hy(),Uy(),Wy(),Gy(),Ky(),qy(),Jy(),Yy(),Xy(),Zy(),Qy(),$y(),eb(),tb(),nb(),rb(),ib(),ab(),ob(),sb(),cb(),lb(),ub(),db(),fb(),pb(),mb(),hb(),gb(),_b(),vb(),yb(),bb(),xb(),Sb(),Cb(),wb(),Tb(),Eb(),Db(),Ob(),kb(),Ab(),jb(),Mb(),Nb(),Pb(),Fb(),Ib(),Lb(),Rb(),zb(),Bb(),Vb(),Hb(),Ub(),Wb(),Gb(),Kb(),qb(),Jb(),Yb(),Xb(),Zb(),Qb(),$b(),ex(),tx(),nx(),rx(),ix(),ax(),ox(),sx(),cx(),lx(),ux(),dx(),fx(),px(),mx(),hx(),gx(),_x(),vx(),yx(),bx(),xx(),Sx(),Cx(),wx(),Tx(),Ex(),Dx(),Ox(),kx(),Ax(),jx(),Mx(),Nx(),Px(),Fx(),Ix(),Lx(),Rx(),zx(),Bx(),Vx(),Hx(),Ux(),Wx(),Gx(),Kx(),qx(),Jx(),Yx(),Xx(),Zx(),Qx(),$x(),eS(),tS(),nS(),rS(),iS(),aS(),oS(),sS(),cS(),lS(),uS(),dS(),fS(),pS(),mS(),hS(),gS(),_S(),vS(),yS(),bS(),xS(),SS(),CS(),wS(),TS(),ES(),DS(),OS(),kS(),AS(),jS(),MS(),NS(),PS(),FS(),IS(),LS(),RS(),zS(),BS(),VS(),HS(),US(),WS(),GS(),KS(),qS(),JS(),YS(),XS(),ZS(),QS(),$S(),eC(),tC(),nC(),rC(),iC(),aC(),oC(),sC(),cC(),lC(),uC(),dC(),fC(),pC(),mC(),hC(),gC(),_C(),vC(),yC(),bC(),xC(),SC(),CC(),wC(),TC(),EC(),DC(),OC(),kC(),AC(),jC(),MC(),NC(),PC(),FC(),IC(),LC(),RC(),zC(),BC(),VC(),HC(),UC(),WC(),GC(),KC(),qC(),JC(),YC(),XC(),ZC(),QC(),$C(),ew(),tw(),nw(),rw(),iw(),aw(),ow(),sw(),cw(),lw(),uw(),dw(),fw(),pw(),mw(),hw(),gw(),_w(),vw(),yw(),bw(),xw(),Sw(),Cw(),ww(),Tw(),Ew(),Dw(),Ow(),kw(),Aw(),jw(),Mw(),Nw(),Pw(),Fw(),Iw(),Lw(),Rw(),zw(),Bw(),Vw(),Hw(),Uw(),Ww(),Gw(),Kw(),qw(),Jw(),Yw(),Xw(),Zw(),Qw(),$w(),eT(),tT(),nT(),rT(),iT(),aT(),oT(),sT(),cT(),lT(),uT(),dT(),fT(),pT(),mT(),hT(),gT(),_T(),vT(),yT(),bT(),xT(),ST(),CT(),wT(),TT(),ET(),DT(),OT(),kT(),AT(),jT(),MT(),NT(),PT(),FT(),IT(),LT(),RT(),zT(),BT(),VT(),HT(),UT(),WT(),GT(),KT(),qT(),JT(),YT(),XT(),ZT(),QT(),$T(),eE(),tE(),nE(),rE(),iE(),aE(),oE(),sE(),cE(),lE(),uE(),dE(),fE(),pE(),mE(),hE(),gE(),_E(),vE(),yE(),bE(),xE(),SE(),CE(),wE(),TE(),EE(),DE(),OE(),kE(),AE(),jE(),ME(),NE(),PE(),FE(),IE(),LE(),RE(),zE(),BE(),VE(),HE(),UE(),WE(),GE(),KE(),qE(),JE(),YE(),XE(),ZE(),QE(),$E(),eD(),tD(),nD(),rD(),iD(),aD(),oD(),sD(),cD(),lD(),uD(),dD(),fD(),pD(),mD(),hD(),gD(),_D(),vD(),yD(),bD(),xD(),SD(),CD(),wD(),TD(),ED(),DD(),OD(),kD(),AD(),jD(),MD(),ND(),PD(),FD(),ID(),LD(),RD(),zD(),BD(),VD(),HD(),UD(),WD(),GD(),KD(),qD(),JD(),YD(),XD(),ZD(),QD(),$D(),eO(),tO(),nO(),rO(),iO(),aO(),oO(),sO(),cO(),lO(),uO(),dO(),fO(),pO(),mO(),hO(),gO(),_O(),vO(),yO(),bO(),xO(),SO(),CO(),wO(),TO(),EO(),DO(),OO(),kO(),AO(),jO(),MO(),NO(),PO(),FO(),IO(),LO(),RO(),zO(),BO(),VO(),HO(),UO(),WO(),GO(),KO(),qO(),JO(),YO(),XO(),ZO(),QO(),ek(),tk(),nk(),rk(),ik(),ak(),ok(),sk(),ck(),lk()})),dk,fk=e((()=>{R(),dk=ve(k`
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
`)})),pk,mk=e((()=>{fk(),R(),x(),pk=k`
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
`,customElements.define(`cosmoz-tooltip-content`,L(()=>h`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[dk,pk]}))})),hk,gk=e((()=>{R(),hk=ve(k`
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
		max-width: var(--cosmoz-tooltips-max-width, 20rem);
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
`)})),_k,vk,yk=e((()=>{R(),x(),B(),mk(),gk(),_k=(e,t,n)=>l(h`<cosmoz-tooltip-content>
			${z(t,()=>h`<strong slot="heading">${t}</strong>`)}
			${z(n,()=>h`<p slot="description">${n}</p>`)}
		</cosmoz-tooltip-content>`,e),vk=(e,t)=>{let{for:n,heading:r,description:i,placement:a=`top`,delay:o=300,disabled:s=!1}=t,c=Xe();j(()=>{if(!n)return;let t=e.getRootNode(),l=t.adoptedStyleSheets??[];l.includes(hk)||(t.adoptedStyleSheets=[...l,hk]);let u=document.createElement(`div`);u.setAttribute(`popover`,`manual`),u.setAttribute(`role`,`tooltip`),u.classList.add(`cosmoz-tooltip-popover`),e.after(u),c.current=u,_k(u,r,i);let d=`[name="${n}"]`,f=`--tooltip-anchor-${n}`,p,m=e=>{s||(clearTimeout(p),e.style.anchorName=f,u.style.positionAnchor=f,u.style.positionArea=a,p=window.setTimeout(()=>u.showPopover(),o))},h=()=>{clearTimeout(p),u.hidePopover()},g=e=>{let t=e.target.closest?.(d);t&&m(t)},_=e=>{let t=e.target.closest?.(d);if(!t)return;let n=e.relatedTarget;n&&t.contains(n)||h()},v=e=>{let t=e.target.closest?.(d);t&&m(t)},y=e=>{e.target.closest?.(d)&&h()};return t.addEventListener(`pointerover`,g),t.addEventListener(`pointerout`,_),t.addEventListener(`focusin`,v),t.addEventListener(`focusout`,y),()=>{clearTimeout(p),t.removeEventListener(`pointerover`,g),t.removeEventListener(`pointerout`,_),t.removeEventListener(`focusin`,v),t.removeEventListener(`focusout`,y),u.hidePopover(),u.remove(),c.current=void 0}},[n,a,o,s]),j(()=>{!n||!c.current||_k(c.current,r,i)},[r,i,n]),j(()=>{!s||!c.current||c.current.hidePopover()},[s])}})),bk,xk,Sk=e((()=>{fk(),R(),x(),xt(),B(),mk(),gk(),yk(),bk=k`
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
`,xk=e=>{let{heading:t,description:n,for:r,placement:i=`top`,delay:a=300,disabled:o=!1}=e,s=Xe(),c=Xe(),l=N(()=>{o||(clearTimeout(c.current),c.current=window.setTimeout(()=>{s.current?.showPopover()},a))},[a,o]);j(()=>{o&&(clearTimeout(c.current),s.current?.hidePopover())},[o]);let u=N(()=>{clearTimeout(c.current),s.current?.hidePopover()},[]);return j(()=>{if(r)return;let t=t=>{let n=t.relatedTarget;n&&e.contains(n)||u()};return e.addEventListener(`pointerover`,l),e.addEventListener(`pointerout`,t),()=>{e.removeEventListener(`pointerover`,l),e.removeEventListener(`pointerout`,t)}},[r,l,u]),vk(e,{for:r,heading:t,description:n,placement:i,delay:a,disabled:o}),r?m:h`
		<slot @focusin=${l} @focusout=${u}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${i}"
			${bt(e=>{s.current=e})}
		>
			<cosmoz-tooltip-content>
				${z(t,()=>h`<strong slot="heading">${t}</strong>`)}
				${z(n,()=>h`<p slot="description">${n}</p>`)}
				<slot name="content"></slot>
			</cosmoz-tooltip-content>
		</div>
	`},customElements.define(`cosmoz-tooltip`,L(xk,{styleSheets:[dk,hk,bk],observedAttributes:[`heading`,`description`,`for`,`placement`,`delay`,`disabled`]}))})),Ck=e((()=>{Sk()})),wk,Tk,Ek=e((()=>{uk(),Ck(),x(),B(),wk=(e,{hint:t,label:n,invalid:r,errorMessage:i,compact:a,required:o})=>h`
		<!-- label: hidden in compact mode -->
		${z(!a&&n,()=>h`<label for="input" part="label"
					>${n}
					${z(o,()=>h`<span class="required">*</span>`)}
				</label>`)}
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
			</div>
			<!-- compact: tooltip always visible, red icon when invalid -->
			${z(a&&r&&i,()=>h`<cosmoz-tooltip
						placement="top"
						description=${i}
						delay="300"
					>
						${ny({width:`16px`,height:`16px`})}
					</cosmoz-tooltip>`)}

			<slot name="suffix"></slot>
		</div>
		<!-- hint: visible when valid, hidden when invalid or compact -->
		${z(!a&&t&&!r,()=>h`<span class="hint" part="hint">${t}</span>`)}
		<!-- error: replaces hint when invalid, hidden in compact -->
		${z(!a&&r&&i,()=>h`<span class="error" part="error">${i}</span>`)}
	`,Tk=[`autocomplete`,`readonly`,`disabled`,`maxlength`,`invalid`]})),Dk=e((()=>{R()})),Ok=t({abs:()=>kk,anyTrue:()=>Ak,concat:()=>jk,ifElse:()=>Mk,inArray:()=>Nk,isEmpty:()=>Fk,isEqual:()=>Pk,toFixed:()=>Ik}),kk,Ak,jk,Mk,Nk,Pk,Fk,Ik,Lk=e((()=>{kk=Math.abs,Ak=(...e)=>e.some(e=>!!e),jk=(...e)=>e.join(``),Mk=(e,t,n)=>e?t:n,Nk=(e,t)=>t.indexOf(e)>-1,Pk=(e,t)=>e===t,Fk=e=>!!(e==null||Array.isArray(e)&&e.length===0||typeof e==`string`&&e.length===0||typeof e==`number`&&e===0),Ik=(e,t)=>typeof e==`number`?e.toFixed(t):``})),Rk,zk,Bk,Vk,Hk,Uk=e((()=>{Rk={isoBasic:/^\d{4}-\d{2}-\d{2}$/iu},zk=e=>typeof e==`string`&&Rk.isoBasic.test(e)?new Date(`${e}T00:00`):new Date(e),Bk=e=>{if(e==null)return;if(e instanceof Date&&!isNaN(e.getTime()))return e;if(!(typeof e==`number`||typeof e==`string`))return;let t=zk(e);if(!(t instanceof Date&&isNaN(t.getTime())))return t},Vk=e=>e<10?`0`+e:e,Hk=e=>e instanceof Date?e.getFullYear()+`-`+Vk(e.getMonth()+1)+`-`+Vk(e.getDate())+`T`+Vk(e.getHours())+`:`+Vk(e.getMinutes())+`:`+Vk(e.getSeconds())+`.`+(e.getMilliseconds()/1e3).toFixed(3).slice(2,5):null})),Wk,Gk=e((()=>{Wk=(e,...t)=>e.flatMap((e,n)=>[e,t[n]??``]).join(``)})),Kk,qk=e((()=>{Kk=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t}})),Jk,Yk=e((()=>{Dk(),Lk(),Gk(),qk(),Jk=(e,t)=>{let n=class extends t{};return Object.assign(n.prototype,e),n}})),Xk,Zk=e((()=>{Yk(),Xk=Wk`
	/* === Host === */

	:host {
		display: flex;
		flex-direction: column;
		gap: calc(var(--cz-spacing) * 1.5);
		position: relative;
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		font-family: var(--cz-font-body);
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
		box-shadow: 0 0 0 1px var(--cz-color-border-primary);
		overflow: hidden;
	}

	.wrap:has(#input:focus) {
		box-shadow: var(--cz-focus-ring);
	}

	:host([invalid]) .wrap {
		box-shadow: 0 0 0 1px var(--cz-color-border-error);
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

	:host([variant='cell']) .wrap {
		border: 0.5px solid var(--cz-color-bg-quaternary);
		border-radius: 0;
		box-shadow: none;
	}
	:host([variant='cell'][invalid]) .wrap {
		border-color: var(--cz-color-border-error);
	}
	:host([variant='cell'][invalid]) .wrap:has(#input:focus) {
		background: var(--cz-color-bg-error);
		border: 0.5px solid transparent;
	}
	:host([variant='cell']) .wrap:has(#input:focus) {
		background: var(--cz-color-bg-quaternary);
	}

	:host([variant='cell']) label {
		display: none;
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
`})),Qk,$k=e((()=>{R(),Qk=e=>M(()=>{if(e==null)return;let t=new RegExp(e,`u`);return e=>{!e.defaultPrevented&&e.data&&!t.test(e.data)&&e.preventDefault()}},[e])})),eA,tA=e((()=>{R(),eA=Ee(class extends A{values;constructor(e,t,n,r){super(e,t),Object.assign(t.host,n),this.values=r}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})),nA,rA=e((()=>{R(),nA=Ee(class extends A{update(){return this.state.host}})})),iA,aA,oA,sA=e((()=>{R(),rA(),iA=/([A-Z])/gu,aA=(e,t,n)=>{e[t]=n,e.dispatchEvent(new CustomEvent(t.replace(iA,`-$1`).toLowerCase()+`-changed`,{detail:{value:n}}))},oA=(e,t,n=[t])=>{let r=nA();j(()=>{aA(r,e,t)},n)}})),cA,lA=e((()=>{tA(),sA(),R(),cA=e=>{let t=Xe(void 0),n=N(e=>t.current=e,[]),r=e.shadowRoot,i=N(t=>e.dispatchEvent(new Event(t.type,{bubbles:t.bubbles})),[]),a=N(t=>aA(e,`value`,t.target.value),[]),o=N(t=>aA(e,`focused`,t.type===`focus`),[]),s=N(()=>{let n=t.current?.checkValidity();return e.toggleAttribute(`invalid`,!n),n},[]);return eA({validate:s},[s]),j(()=>{let e=e=>{e.composedPath()[0]?.closest?.(`input, textarea`)||(e.preventDefault(),t.current?.focus())};return r.addEventListener(`mousedown`,e),()=>r.removeEventListener(`mousedown`,e)},[]),{onChange:i,onFocus:o,onInput:a,onRef:n}}})),uA,dA=e((()=>{uA=({placeholder:e})=>e||` `})),fA,pA,mA=e((()=>{R(),x(),Z(),bs(),xt(),Ek(),Zk(),$k(),lA(),dA(),fA=[`type`,`variant`,`hint`,`error-message`,`compact`,`required`,`pattern`,`allowed-pattern`,`min`,`max`,`step`,`autosize`,`label`,`placeholder`,...Tk],pA=e=>{let{type:t=`text`,pattern:n,allowedPattern:r,autocomplete:i,value:a,readonly:o,disabled:s,min:c,max:l,step:u,maxlength:d,required:f}=e,{onChange:p,onFocus:m,onInput:g,onRef:_}=cA(e),v=Qk(r);return e.toggleAttribute(`has-value`,!!a),wk(h`
			<input
				${bt(_)}
				style="--chars: ${a?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${X(n)}
				autocomplete=${X(i)}
				placeholder=${uA({placeholder:e.placeholder})}
				?readonly=${o}
				aria-disabled=${s?`true`:`false`}
				?disabled=${s}
				?required=${f}
				.value=${ys(a??``)}
				maxlength=${X(d)}
				@beforeinput=${v}
				@input=${g}
				@change=${p}
				@focus=${m}
				@blur=${m}
				min=${X(c)}
				max=${X(l)}
				step=${X(u)}
			/>
		`,e)},customElements.define(`cosmoz-input`,L(pA,{observedAttributes:fA,styleSheets:[ve(Xk)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),hA,gA,_A,vA=e((()=>{R(),hA=e=>{e.style.height=``,e.style.height=`${e.scrollHeight}px`},gA=(e,t=0)=>{if(t>0){let n=e.getAttribute(`rows`)??``,r=e.style.height;e.style.height=``,e.setAttribute(`rows`,t),e.style.maxHeight=e.getBoundingClientRect().height+`px`,e.style.height=r,e.setAttribute(`rows`,n)}},_A=e=>{let{value:t,maxRows:n}=e,r=M(()=>()=>e.shadowRoot.querySelector(`#input`),[]);j(()=>gA(r(),n),[n,r]),j(()=>hA(r()),[r,t]),j(()=>{let e=r(),t=new ResizeObserver(()=>requestAnimationFrame(()=>hA(e)));return t.observe(e),()=>t.unobserve(e)},[r])}})),yA,bA,xA=e((()=>{x(),Z(),bs(),xt(),R(),Ek(),Zk(),vA(),lA(),yA=[`rows`,`placeholder`,`label`,`hint`,`error-message`,`required`,...Tk],bA=e=>{let{autocomplete:t,value:n,placeholder:r,readonly:i,disabled:a,rows:o,cols:s,maxlength:c}=e,{onChange:l,onFocus:u,onInput:d,onRef:f}=cA(e);return _A(e),wk(h`
			<textarea id="input" part="input"
				${bt(f)}
				autocomplete=${X(t)}
				placeholder=${r||` `}
				rows=${o??1} cols=${X(s)}
				?readonly=${i} ?aria-disabled=${a} ?disabled=${a}
				.value=${ys(n??``)} maxlength=${X(c)} @input=${d}
				@change=${l} @focus=${u} @blur=${u}>`,e)},customElements.define(`cosmoz-textarea`,L(bA,{observedAttributes:yA,styleSheets:[ve(Xk)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),SA,CA,wA,TA=e((()=>{R(),bs(),B(),SA=e=>{let{label:t,value:n,disabled:r,error:i}=e,a=N(t=>e.dispatchEvent(new CustomEvent(`change`,{detail:t.target.checked})),[]);return h`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${ys(!!n)}
			?disabled=${r}
			@change=${a}
		/>
		${z(t,()=>h`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${z(i,e=>h`<div class="failure">${e}</div>`)} `},CA=k`
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
`,wA=k`
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
`,customElements.define(`cosmoz-toggle`,L(SA,{styleSheets:[wA,CA],observedAttributes:[`label`,`disabled`,`error`]}))})),EA=e((()=>{mA(),xA(),TA(),lA(),Ek(),Zk()})),DA,OA=e((()=>{x(),I(),DA=tt(class extends nt{constructor(e){if(super(e),e.type!==F.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return i}})})),kA,AA,jA,MA=e((()=>{K(),Oi(),ya(),kA=class e{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,AA.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),AA.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(t,n,r){return t instanceof e?t._cancelAsync():t=new e,t.setConfig(n,r),t}},AA=new Set,jA=function(e){AA.add(e)}})),NA=e((()=>{K(),MA()})),PA,FA,IA,LA=e((()=>{PA=Symbol(`memo`),FA=e=>{let t=PA,n=PA,r;return function(i,a){if(t===i&&n===a)return r;let o=e(i,a);return r=o,t=i,n=a,o}},IA=e=>{let t=PA,n=PA,r=PA,i;return function(a,o,s){if(t===a&&n===o&&r===s)return i;let c=e(a,o,s);return i=c,t=a,n=o,r=s,c}}})),RA,zA,BA=e((()=>{RA=class{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}},zA=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}}})),VA,HA,UA,WA,GA=e((()=>{x(),d(),ut(),BA(),I(),VA=e=>!a(e)&&typeof e.then==`function`,HA=1073741823,UA=class extends lt{constructor(){super(...arguments),this._$Cwt=HA,this._$Cbt=[],this._$CK=new RA(this),this._$CX=new zA}render(...e){return e.find(e=>!VA(e))??i}update(e,t){let n=this._$Cbt,r=n.length;this._$Cbt=t;let a=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let i=t[e];if(!VA(i))return this._$Cwt=e,i;e<r&&i===n[e]||(this._$Cwt=HA,r=0,Promise.resolve(i).then(async e=>{for(;o.get();)await o.get();let t=a.deref();if(t!==void 0){let n=t._$Cbt.indexOf(i);n>-1&&n<t._$Cwt&&(t._$Cwt=n,t.setValue(e))}}))}return i}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}},WA=tt(UA)})),KA=e((()=>{I()})),qA=e((()=>{ut()})),JA,YA,XA=e((()=>{x(),I(),d(),JA=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},YA=tt(class extends nt{constructor(e){if(super(e),e.type!==F.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){let a=o(e),{values:l,keys:d}=this.dt(t,n,r);if(!Array.isArray(a))return this.ut=d,l;let f=this.ut??=[],m=[],h,g,_=0,v=a.length-1,y=0,b=l.length-1;for(;_<=v&&y<=b;)if(a[_]===null)_++;else if(a[v]===null)v--;else if(f[_]===d[y])m[y]=s(a[_],l[y]),_++,y++;else if(f[v]===d[b])m[b]=s(a[v],l[b]),v--,b--;else if(f[_]===d[b])m[b]=s(a[_],l[b]),p(e,m[b+1],a[_]),_++,b--;else if(f[v]===d[y])m[y]=s(a[v],l[y]),p(e,a[_],a[v]),v--,y++;else if(h===void 0&&(h=JA(d,y,b),g=JA(f,_,v)),h.has(f[_]))if(h.has(f[v])){let t=g.get(d[y]),n=t===void 0?null:a[t];if(n===null){let t=p(e,a[_]);s(t,l[y]),m[y]=t}else m[y]=s(n,l[y]),p(e,a[_],n),a[t]=null;y++}else u(a[v]),v--;else u(a[_]),_++;for(;y<=b;){let t=p(e,m[b+1]);s(t,l[y]),m[y++]=t}for(;_<=v;){let e=a[_++];e!==null&&u(e)}return this.ut=d,c(e,m),i}})})),ZA=e((()=>{XA()})),QA,$A,ej,tj=e((()=>{QA=class e extends Event{constructor(t){super(e.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}},QA.eventName=`rangeChanged`,$A=class e extends Event{constructor(t){super(e.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}},$A.eventName=`visibilityChanged`,ej=class e extends Event{constructor(){super(e.eventName,{bubbles:!1})}},ej.eventName=`unpinned`})),nj,rj,ij=e((()=>{nj=class{constructor(e){this._element=null,this._node=e??window,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}},rj=class extends nj{constructor(e,t){super(t),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);let n=this._node;this._originalScrollTo=n.scrollTo,this._originalScrollBy=n.scrollBy,this._originalScroll=n.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(e,t){let n=typeof e==`number`&&typeof t==`number`?{left:e,top:t}:e;this._scrollTo(n)}scrollBy(e,t){let n=typeof e==`number`&&typeof t==`number`?{left:e,top:t}:e;n.top!==void 0&&(n.top+=this.scrollTop),n.left!==void 0&&(n.left+=this.scrollLeft),this._scrollTo(n)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,t=null,n=null){this._end!==null&&this._end(),e.behavior===`smooth`?(this._setDestination(e),this._retarget=t,this._end=n):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:t,left:n}=e;return t=t===void 0?void 0:Math.max(0,Math.min(t,this.maxScrollTop)),n=n===void 0?void 0:Math.max(0,Math.min(n,this.maxScrollLeft)),this._destination!==null&&n===this._destination.left&&t===this._destination.top?!1:(this.__destination={top:t,left:n,behavior:`smooth`},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,t,n){return this._scrollTo(e,t,n),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){let{scrollTop:e,scrollLeft:t}=this,{top:n,left:r}=this._destination;n=Math.min(n||0,this.maxScrollTop),r=Math.min(r||0,this.maxScrollLeft);let i=Math.abs(n-e),a=Math.abs(r-t);i<1&&a<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener(`scroll`,this._checkForArrival)),null}_attach(e){this._clients.add(e),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener(`scroll`,this._checkForArrival))}}}));function aj(e){let t=window.getComputedStyle(e);return{marginTop:oj(t.marginTop),marginRight:oj(t.marginRight),marginBottom:oj(t.marginBottom),marginLeft:oj(t.marginLeft)}}function oj(e){let t=e?parseFloat(e):NaN;return Number.isNaN(t)?0:t}function sj(e){if(e.assignedSlot!==null)return e.assignedSlot;if(e.parentElement!==null)return e.parentElement;let t=e.parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host||null}function cj(e,t=!1){let n=[],r=t?e:sj(e);for(;r!==null;)n.push(r),r=sj(r);return n}function lj(e,t=!1){let n=!1;return cj(e,t).filter(e=>{if(n)return!1;let t=getComputedStyle(e);return n=t.position===`fixed`,t.overflow!==`visible`})}var uj,dj,fj,pj,mj,hj=e((()=>{tj(),ij(),n(),uj=typeof window<`u`?window.ResizeObserver:void 0,dj=Symbol(`virtualizerRef`),fj=`virtualizer-sizer`,mj=class{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw Error(`Virtualizer constructor requires a configuration object`);if(e.hostElement)this._init(e);else throw Error(`Virtualizer configuration requires the "hostElement" property`)}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);let t=e.layout||{};this._layoutInitialized=this._initLayout(t)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new uj(()=>this._hostElementSizeChanged()),this._childrenRO=new uj(this._childrenSizeChanged.bind(this))}_initHostElement(e){let t=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),t[dj]=this}connected(){this._initObservers();let e=this._isScroller;this._clippingAncestors=lj(this._hostElement,e),this._scrollerController=new rj(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener(`scroll`,this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener(`scroll`,this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener(`scroll`,this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(e=>e.removeEventListener(`scroll`,this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise(`disconnected`),this._connected=!1}_applyVirtualizerStyles(){let e=this._hostElement.style;e.display=e.display||`block`,e.position=e.position||`relative`,e.contain=e.contain||`size layout`,this._isScroller&&(e.overflow=e.overflow||`auto`,e.minHeight=e.minHeight||`150px`)}_getSizer(){let e=this._hostElement;if(!this._sizer){let t=e.querySelector(`[${fj}]`);t||(t=document.createElement(`div`),t.setAttribute(fj,``),e.appendChild(t)),Object.assign(t.style,{position:`absolute`,margin:`-2px 0 0 0`,padding:0,visibility:`hidden`,fontSize:`2px`}),t.textContent=`&nbsp;`,t.setAttribute(fj,``),this._sizer=t}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;let t=e.type||pj;if(typeof t==`function`&&this._layout instanceof t){let t={...e};return delete t.type,this._layout.config=t,!0}return!1}async _initLayout(e){let t,n;if(typeof e.type==`function`){n=e.type;let r={...e};delete r.type,t=r}else t=e;n===void 0&&(pj=n=(await r(async()=>{let{FlowLayout:e}=await import(`./flow-BNFwcXeG.js`);return{FlowLayout:e}},__vite__mapDeps([0,1]),import.meta.url)).FlowLayout),this._layout=new n(e=>this._handleLayoutMessage(e),t),this._layout.measureChildren&&typeof this._layout.updateItemSizes==`function`&&(typeof this._layout.measureChildren==`function`&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener(`load`,this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){let e=window.performance.now(),t=e-this._benchmarkStart,n=performance.getEntriesByName(`uv-virtualizing`,`measure`).filter(t=>t.startTime>=this._benchmarkStart&&t.startTime<e).reduce((e,t)=>e+t.duration,0);return this._benchmarkStart=null,{timeElapsed:t,virtualizationTime:n}}return null}_measureChildren(){let e={},t=this._children,n=this._measureChildOverride||this._measureChild;for(let r=0;r<t.length;r++){let i=t[r],a=this._first+r;(this._itemsChanged||this._toBeMeasured.has(i))&&(e[a]=n.call(this,i,this._items[a]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){let{width:t,height:n}=e.getBoundingClientRect();return Object.assign({width:t,height:n},aj(e))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;let{_rangeChanged:t,_itemsChanged:n}=this;this._visibilityChanged&&=(this._notifyVisibility(),!1),(t||n)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&`mark`in window.performance&&window.performance.mark(`uv-end`))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&`mark`in window.performance&&window.performance.mark(`uv-end`))}_handleScrollEvent(){if(this._benchmarkStart&&`mark`in window.performance){try{window.performance.measure(`uv-virtualizing`,`uv-start`,`uv-end`)}catch(e){console.warn(`Error measuring performance data: `,e)}window.performance.mark(`uv-start`)}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(e){switch(e.type){case`scroll`:(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent();break;default:console.warn(`event not handled`,e)}}_handleLayoutMessage(e){e.type===`stateChanged`?this._updateDOM(e):e.type===`visibilityChanged`?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):e.type===`unpinned`&&this._hostElement.dispatchEvent(new ej)}get _children(){let e=[],t=this._hostElement.firstElementChild;for(;t;)t.hasAttribute(fj)||e.push(t),t=t.nextElementSibling;return e}_updateView(){let e=this._hostElement,t=this._scrollerController?.element,n=this._layout;if(e&&t&&n){let r,i,a,o,s=e.getBoundingClientRect();r=0,i=0,a=window.innerHeight,o=window.innerWidth;let c=this._clippingAncestors.map(e=>e.getBoundingClientRect());c.unshift(s);for(let e of c)r=Math.max(r,e.top),i=Math.max(i,e.left),a=Math.min(a,e.bottom),o=Math.min(o,e.right);let l=t.getBoundingClientRect(),u={left:s.left-l.left,top:s.top-l.top},d={width:t.scrollWidth,height:t.scrollHeight},f=r-s.top+e.scrollTop,p=i-s.left+e.scrollLeft,m=Math.max(0,a-r);n.viewportSize={width:Math.max(0,o-i),height:m},n.viewportScroll={top:f,left:p},n.totalScrollSize=d,n.offsetWithinScroller=u}}_sizeHostElement(e){let t=82e5,n=e&&e.width!==null?Math.min(t,e.width):0,r=e&&e.height!==null?Math.min(t,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${n}px, ${r}px)`;else{let e=this._hostElement.style;e.minWidth=n?`${n}px`:`100%`,e.minHeight=r?`${r}px`:`100%`}}_positionChildren(e){e&&e.forEach(({top:e,left:t,width:n,height:r,xOffset:i,yOffset:a},o)=>{let s=this._children[o-this._first];s&&(s.style.position=`absolute`,s.style.boxSizing=`border-box`,s.style.transform=`translate(${t}px, ${e}px)`,n!==void 0&&(s.style.width=n+`px`),r!==void 0&&(s.style.height=r+`px`),s.style.left=i===void 0?null:i+`px`,s.style.top=a===void 0?null:a+`px`)})}async _adjustRange(e){let{_first:t,_last:n,_firstVisible:r,_lastVisible:i}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==t||this._last!==n,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==r||this._lastVisible!==i}_correctScrollError(){if(this._scrollError){let{scrollTop:e,scrollLeft:t}=this._scrollerController,{top:n,left:r}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-n,left:t-r})}}element(e){return e===1/0&&(e=this._items.length-1),this._items?.[e]===void 0?void 0:{scrollIntoView:(t={})=>this._scrollElementIntoView({...t,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),e.behavior===`smooth`){let t=this._layout.getScrollIntoViewCoordinates(e),{behavior:n}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(t,{behavior:n}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){let{index:t}=this._scrollIntoViewTarget||{};t&&e?.has(t)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new QA({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new $A({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||=new Promise((e,t)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=t}),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){if(this._layout?.measureChildren){for(let t of e)this._toBeMeasured.set(t.target,t.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}})),gj,_j,vj,yj,bj=e((()=>{f(),KA(),qA(),ZA(),hj(),gj=e=>e,_j=(e,t)=>h`${t}: ${JSON.stringify(e,null,2)}`,vj=class extends lt{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(e,t)=>_j(e,t+this._first),this._keyFunction=(e,t)=>gj(e,t+this._first),this._items=[],e.type!==F.CHILD)throw Error(`The virtualize directive can only be used in child expressions`)}render(e){e&&this._setFunctions(e);let t=[];if(this._first>=0&&this._last>=this._first)for(let e=this._first;e<=this._last;e++)t.push(this._items[e]);return YA(t,this._keyFunction,this._renderItem)}update(e,[t]){this._setFunctions(t);let n=this._items!==t.items;return this._items=t.items||[],this._virtualizer?this._updateVirtualizerConfig(e,t):this._initialize(e,t),n?i:this.render()}async _updateVirtualizerConfig(e,t){if(!await this._virtualizer.updateLayoutConfig(t.layout||{})){let n=e.parentNode;this._makeVirtualizer(n,t)}this._virtualizer.items=this._items}_setFunctions(e){let{renderItem:t,keyFunction:n}=e;t&&(this._renderItem=(e,n)=>t(e,n+this._first)),n&&(this._keyFunction=(e,t)=>n(e,t+this._first))}_makeVirtualizer(e,t){this._virtualizer&&this._virtualizer.disconnected();let{layout:n,scroller:r,items:i}=t;this._virtualizer=new mj({hostElement:e,layout:n,scroller:r}),this._virtualizer.items=i,this._virtualizer.connected()}_initialize(e,t){let n=e.parentNode;n&&n.nodeType===1&&(n.addEventListener(`rangeChanged`,e=>{this._first=e.first,this._last=e.last,this.setValue(this.render())}),this._makeVirtualizer(n,t))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}},yj=tt(vj)})),xj,Sj,Cj,wj=e((()=>{x(),I(),xj=(e,t)=>{if(!e||!t)return;let n=Object.keys(t);return Object.fromEntries(Object.keys(e).flatMap(e=>n.includes(e)?[]:[[e,void 0]]))},Sj=class extends nt{_props;render(e){return i}update(e,[t]){return this._props!==t&&Object.assign(e.element,xj(this._props,t),this._props=t),i}},Cj=tt(Sj)})),Tj,Ej=e((()=>{R(),rA(),Tj=e=>{let t=nA(),n=M(()=>new CSSStyleSheet,[]);j(()=>{t.shadowRoot.adoptedStyleSheets=[...t.shadowRoot.adoptedStyleSheets,n]},[]),j(()=>{n.replaceSync(e)},[e])}}));function Dj(e){return e?t=>t?.[e]:Xr}var Oj,kj,Aj=e((()=>{Qr(),Oj=e=>{let t=Dj(e);return e=>typeof e==`string`?e:t(e)?.toString()||``},kj=e=>t=>{let n={};for(let r in t)e.includes(r)&&(n[r]=t[r]);return n}})),jj,Mj,Nj=e((()=>{R(),B(),jj=k`
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
`,Mj=({index:e,itemHeight:t,auto:n})=>k`
	${z(!n,()=>k`
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
`})),Pj,Fj=e((()=>{R(),Pj=e=>{let t=e===`auto`,[n,r]=P(t?40:e);return[n,e=>t?r(e):void 0]}})),Ij=e((()=>{})),Lj=e((()=>{R(),Er()})),Rj=e((()=>{Ij(),ei(),ni(),Lj()})),zj,Bj,Vj,Hj,Uj=e((()=>{zj=Symbol(`listbox.navigate.up`),Bj=Symbol(`listbox.navigate.down`),Vj=Symbol(`listbox.select`),Hj=[[{key:`ArrowUp`},[zj],{title:`Navigate up`,description:`Move to previous listbox item`},{allowInEditable:!0}],[{key:`ArrowDown`},[Bj],{title:`Navigate down`,description:`Move to next listbox item`},{allowInEditable:!0}],[{key:`Enter`},[Vj],{title:`Select`,description:`Select current listbox item`},{allowInEditable:!0}]]})),Wj,Gj=e((()=>{rA(),Rj(),Uj(),Wj=({onUp:e,onDown:t,onEnter:n})=>{let r=nA();ti({activity:zj,callback:e,element:()=>r},[]),ti({activity:Bj,callback:t,element:()=>r},[]),ti({activity:Vj,callback:n,element:()=>r},[])}})),Kj,qj=e((()=>{R(),Gj(),Kj=({items:e,onSelect:t,defaultIndex:n=0})=>{let[r,i]=P({index:n}),{index:a}=r,{length:o}=e;return j(()=>{i({index:r.index<0?n:Math.min(r.index,e.length-1),scroll:!0})},[e,n]),Wj({onUp:N(()=>i(e=>({index:e.index>0?e.index-1:o-1,scroll:!0})),[o]),onDown:N(()=>i(e=>({index:e.index<o-1?e.index+1:0,scroll:!0})),[o]),onEnter:N(()=>a>-1&&a<o&&t?.(e[a],a),[a,e,t])}),{position:r,highlight:N(e=>i({index:e}),[]),select:N(e=>t?.(e),[t])}}}));function Jj(e){return e==null?[]:Array.isArray(e)?e:typeof e==`string`?[e]:Yj(e)?Array.from(e):[e]}var Yj,Xj,Zj=e((()=>{Qr(),Yj=e=>typeof e==`object`&&!!e&&Symbol.iterator in e,Xj=(e,t=Xr)=>n=>{let r=Jj(e).map(t);return Jj(n).filter(e=>!r.includes(t(e)))}})),Qj,$j,eM=e((()=>{Zj(),x(),Qj=(e,t)=>t?n=>n!=null&&Jj(e).find(e=>e[t]===n[t]):t=>t!=null&&Jj(e).includes(t),$j=(e,t)=>{if(!t||!e)return e;let n=e.toLowerCase().indexOf(t.toLowerCase());if(n<0)return e;let r=n+t.length;return[e.slice(0,n),h`<mark>${e.slice(n,r)}</mark>`,e.slice(r)]}})),tM,nM=e((()=>{Qr(),x(),eM(),tM=(e=Xr)=>(t,n,{highlight:r,select:i,textual:a=Xr,query:o,isSelected:s})=>{let c=a(t),l=e($j(c,o),t,n);return h`<div
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
			<div class="sizer" virtualizer-sizer>${l}</div>`},tM()})),rM,iM=e((()=>{Er(),R(),nM(),rM=({itemRenderer:e=tM(),...t})=>{let n=Tr(t);return N((t,r)=>e(t,r,n),[n,e])}})),aM,oM,sM=e((()=>{R(),Fj(),qj(),iM(),eM(),aM=[`query`,`items`,`onSelect`,`textual`,`anchor`,`itemHeight`,`itemLimit`,`itemRenderer`,`defaultIndex`,`value`,`valueProperty`,`loading`],oM=({value:e,valueProperty:t,items:n,onSelect:r,defaultIndex:i,query:a,textual:o,itemRenderer:s,itemHeight:c=40,itemLimit:l=5})=>{let u=M(()=>Qj(e,t),[e,t]),d=M(()=>n.slice(),[n,u]),{position:f,highlight:p,select:m}=Kj({items:d,onSelect:r,defaultIndex:isNaN(i)?void 0:Number(i)}),[h,g]=Pj(c);return{position:f,items:d,height:Math.min(l,d.length)*h,highlight:p,select:m,itemHeight:h,setItemHeight:g,renderItem:rM({itemRenderer:s,items:d,position:f,highlight:p,select:m,textual:o,query:a,isSelected:u})}}})),cM,lM,uM,dM=e((()=>{bj(),Yk(),wj(),Qr(),Ej(),Aj(),R(),xt(),Nj(),sM(),cM=Yr,lM=e=>{let t=Xe(void 0),{position:n,items:r,renderItem:i,height:a,itemHeight:o,setItemHeight:s}=oM(e);return j(()=>{let n=t.current?.[dj];n&&n.layoutComplete.then(()=>{e.dispatchEvent(new CustomEvent(`layout-complete`));let{averageChildSize:t,averageMarginSize:r}=n._layout._metricsCache;return s(t+r*2)},cM)},[r]),j(()=>{if(!n.scroll)return;let e=t.current?.[dj];if(e){if(!e?._layout){e.layoutComplete.then(()=>e.element(n.index)?.scrollIntoView({block:`nearest`}),cM);return}e.element(n.index)?.scrollIntoView({block:`nearest`})}},[n]),Tj(Mj({...n,itemHeight:o,auto:e.itemHeight===`auto`})),h`<div
			class="items"
			style="min-height: ${a}px"
			${bt(e=>t.current=e)}
		>
			<div virtualizer-sizer></div>
			${yj({items:r,renderItem:i,scroller:!0})}
		</div>
		<slot></slot>`},customElements.define(`cosmoz-listbox`,L(lM,{styleSheets:[Kk(jj)]})),uM=({multi:e,...t},n)=>h`<cosmoz-listbox
		part="listbox"
		?multi=${e}
		...=${Cj(kj(aM)(t))}
		>${n}</cosmoz-listbox
	>`})),Q,fM,pM=e((()=>{R(),Q=e=>`calc(var(--cz-spacing) * ${e})`,fM=k`
	/* =========================================
	 * HOST
	 * ========================================= */
	:host {
		display: inline-flex;
	}

	/* =========================================
	 * BADGE BASE (default: pill, md)
	 * ========================================= */
	.badge {
		display: inline-flex;
		align-items: center;
		gap: ${Q(1.5)};
		width: max-content;
		height: max-content;
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
		padding: ${Q(.5)} ${Q(2)};
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
	}

	/* =========================================
	 * COLOR VARIANTS
	 * ========================================= */

	:host([color='brand']) .badge {
		background-color: var(--cz-color-bg-brand);
		color: var(--cz-color-text-secondary);
		border-color: var(--cz-color-brand-200);
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
		padding: ${Q(.5)} ${Q(2)};
	}

	:host([type='modern']) .badge {
		box-shadow: var(--cz-shadow-xs);
	}

	/* =========================================
	 * SIZE VARIANTS
	 * ========================================= */

	/* --- Pill sizes --- */
	:host([size='sm']) .badge {
		padding: ${Q(.5)} ${Q(2)};
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		gap: ${Q(1)};
	}

	:host([size='lg']) .badge {
		padding: ${Q(1)} ${Q(3)};
	}

	/* --- Badge sizes --- */
	:host([type='color'][size='sm']) .badge,
	:host([type='modern'][size='sm']) .badge {
		padding: ${Q(.5)} ${Q(1.5)};
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		gap: ${Q(1)};
	}

	:host([type='color'][size='lg']) .badge,
	:host([type='modern'][size='lg']) .badge {
		padding: ${Q(1)} ${Q(2.5)};
		border-radius: var(--cz-radius-md);
	}

	/* =========================================
	 * DOT INDICATOR
	 * ========================================= */
	.dot {
		width: ${Q(2)};
		height: ${Q(2)};
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

	/* Pill + dot: asymmetric padding (tighter left) */
	:host([dot]) .badge {
		padding: ${Q(.5)} ${Q(2.5)} ${Q(.5)} ${Q(2)};
	}

	:host([dot][size='sm']) .badge {
		padding: ${Q(.5)} ${Q(2)} ${Q(.5)} ${Q(1.5)};
	}

	:host([dot][size='lg']) .badge {
		padding: ${Q(1)} ${Q(3)} ${Q(1)} ${Q(2.5)};
	}

	/* Badge + dot: symmetric padding (same as base badge) */
	:host([dot][type='color']) .badge,
	:host([dot][type='modern']) .badge {
		padding: ${Q(.5)} ${Q(2)};
	}

	:host([dot][type='color'][size='sm']) .badge,
	:host([dot][type='modern'][size='sm']) .badge {
		padding: ${Q(.5)} ${Q(1.5)};
	}

	:host([dot][type='color'][size='lg']) .badge,
	:host([dot][type='modern'][size='lg']) .badge {
		padding: ${Q(1)} ${Q(2.5)};
	}

	/* =========================================
	 * ICON-ONLY TYPE
	 * ========================================= */
	:host([type='icon']) .badge {
		padding: ${Q(2)};
		gap: 0;
	}

	:host([type='icon'][size='sm']) .badge {
		padding: ${Q(1.5)};
	}

	:host([type='icon'][size='lg']) .badge {
		padding: ${Q(2.5)};
	}

	:host([type='icon']) .dot,
	:host([type='icon']) slot[name='prefix'],
	:host([type='icon']) slot[name='suffix'] {
		display: none;
	}

	:host([type='icon']) ::slotted(svg) {
		width: ${Q(3)};
		height: ${Q(3)};
	}

	/* =========================================
	 * SLOTTED CONTENT (icons, images, flags)
	 * ========================================= */
	::slotted(svg) {
		width: ${Q(3)};
		height: ${Q(3)};
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
`})),mM,hM=e((()=>{fk(),R(),pM(),mM=()=>h`<span class="badge" part="badge" role="status">
		<span class="dot" part="dot"></span>
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	</span>`,customElements.define(`cosmoz-badge`,L(mM,{styleSheets:[dk,fM]}))})),gM=e((()=>{hM()})),_M,vM,yM=e((()=>{R(),_M=e=>`calc(var(--cz-spacing) * ${e})`,vM=k`
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
		width: ${_M(2.5)};
		height: ${_M(2.5)};
	}

	:host([size='md']) .close svg,
	:host(:not([size])) .close svg {
		width: ${_M(3)};
		height: ${_M(3)};
	}

	:host([size='lg']) .close svg {
		width: ${_M(3.5)};
		height: ${_M(3.5)};
	}

	/* =========================================
	 * SLOTTED CONTENT (icons, images, flags)
	 * ========================================= */
	::slotted(svg) {
		width: ${_M(3.5)};
		height: ${_M(3.5)};
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
`})),bM,xM=e((()=>{gM(),uk(),fk(),R(),Z(),B(),yM(),bM=e=>{let{color:t,size:n,disabled:r,removable:i}=e,a=()=>{r||e.dispatchEvent(new CustomEvent(`remove`))};return h`<cosmoz-badge
		color=${X(t)}
		size=${X(n)}
		?disabled=${r}
		type="color"
	>
		<slot name="prefix" slot="prefix"></slot>
		<slot></slot>
		<slot name="suffix" slot="suffix"></slot>
		${z(i,()=>h` <button
					slot="suffix"
					class="close"
					aria-label="Remove"
					@mousedown=${e=>e.preventDefault()}
					@click=${a}
				>
					${$O()}
				</button>`)}
	</cosmoz-badge>`},customElements.define(`cosmoz-tag`,L(bM,{observedAttributes:[`color`,`size`,`disabled`,`removable`],styleSheets:[dk,vM]}))})),SM=e((()=>{xM()})),CM,wM=e((()=>{SM(),R(),Z(),CM=({content:e,onClear:t,disabled:n,className:r=`chip`,hidden:i,slot:a})=>h`<cosmoz-tag
		class=${X(r)}
		slot=${X(a)}
		exportparts="chip-text, chip-clear"
		?disabled=${n}
		?hidden=${i}
		?removable=${!!t&&!n}
		@remove=${t}
		title=${X(typeof e==`string`?e:void 0)}
		>${e}</cosmoz-tag
	>`})),TM,EM=e((()=>{x(),wM(),TM=({value:e,min:t=0,onDeselect:n,textual:r,disabled:i,chipRenderer:a=CM})=>[...e.filter(Boolean).map(o=>a({item:o,content:r(o),onClear:e.length>t&&(()=>n(o)),disabled:i,slot:`control`})),a({item:null,content:h`<span></span>`,className:`badge`,disabled:!0,slot:`control`,hidden:!0})]})),DM,OM=e((()=>{R(),x(),DM=k`
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
`,customElements.define(`cosmoz-autocomplete-skeleton-span`,L(()=>m,{styleSheets:[DM]}))})),kM,AM=e((()=>{Yk(),kM=Wk`
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

	:host([error-message]) cosmoz-listbox,
	:host([hint]) cosmoz-listbox {
		margin-top: calc((var(--cz-spacing) * -5));
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
`})),jM,MM,NM=e((()=>{jM=(e,t=()=>({}))=>{let n={type:e,toString(){return e}};return Object.assign((...e)=>Object.assign(t(...e),n),n)},MM=e=>e.type||e.toString()})),PM,FM,IM=e((()=>{NM(),PM=e=>Array.isArray(e)?e:[e],FM=(e,t)=>{let n=PM(t),r=(n.every(Array.isArray)?n:[n]).map(([e,t])=>({actions:PM(e).map(MM),handle:t}));return(t=e,n)=>{let i=r.find(e=>e.actions.includes(MM(n)));return i?i.handle(t,n):t}}})),LM=e((()=>{NM(),IM()})),RM,zM,BM,VM,HM,UM,WM,GM=e((()=>{R(),LM(),RM={pending:`pending`,rejected:`rejected`,resolved:`resolved`},zM={error:void 0,result:void 0,state:RM.pending},BM=jM(RM.pending),VM=jM(RM.resolved,e=>({result:e})),HM=jM(RM.rejected,e=>({error:e})),UM=FM(zM,[[BM,()=>({error:void 0,result:void 0,state:RM.pending})],[VM,(e,{result:t})=>({error:void 0,result:t,state:RM.resolved})],[HM,(e,{error:t})=>({error:t,result:void 0,state:RM.rejected})]]),WM=e=>{let[{error:t,result:n,state:r},i]=Ue(UM,zM);return j(()=>{if(!e)return;let t=!1;return i(BM()),e.then(e=>!t&&i(VM(e)),e=>!t&&i(HM(e))),()=>{t=!0}},[e]),[n,t,r]}})),KM,qM,JM=e((()=>{Rj(),Uj(),KM=Symbol(`autocomplete.deselect.last`),qM=Symbol(`autocomplete.search.when.selected`),[...Hj]})),YM,XM,ZM,QM,$M,eN,tN=e((()=>{YM=e=>e.normalize(`NFD`).replace(/[\u0300-\u036f]/gu,``),XM=(e,t,n)=>{if(!t)return e;let r=YM(t.toLowerCase()),i=[];for(let t of e){let e=YM(n(t).toLowerCase()).indexOf(r);e<0||i.push({item:t,index:e})}return i.sort((e,t)=>e.index-t.index).map(({item:e})=>e)},ZM=e=>e===!1||e==null?[]:e,QM=(e,t,n)=>e.dispatchEvent(new CustomEvent(t,{detail:n})),$M=[],eN=e=>(...t)=>{let n,r=()=>{n&&cancelAnimationFrame(n)};return r(),n=requestAnimationFrame(()=>{n=void 0,e(...t)}),r}})),nN,rN,iN=e((()=>{Zj(),rA(),Er(),GM(),Rj(),Aj(),R(),JM(),tN(),nN=(e,t,n)=>N(r=>{t?.(r),e.dispatchEvent(new CustomEvent(n,{detail:r}))},[t]),rN=({value:e,text:t,onChange:n,onText:r,onSelect:i,limit:a,min:o,source:s,textProperty:c,textual:l,valueProperty:u,keepOpened:d,keepQuery:f,preserveOrder:p,defaultIndex:m,externalSearch:h,disabled:g,lazyOpen:_})=>{let v=a==null?void 0:Number(a),y=o==null?void 0:Number(o),b=M(()=>(l??Oj)(c),[l,c]),x=nA(),[S,C]=Ke(`opened`,!1),w=!t,T=M(()=>t?.trim(),[t]),E=nN(x,r,`text`),ee=N(e=>{n?.(e,()=>C(!1)),QM(x,`value`,e)},[n]),[te,ne]=P([]),re=!!(_&&!T),ie=M(()=>re?Promise.resolve([]):Promise.resolve(typeof s==`function`?s({query:T,active:S}):s).then(ZM),[s,S,T,re]),D=M(()=>Jj(e),[e]);j(()=>ie.then(ne),[ie]),ti({activity:KM,callback:()=>{let e=Jj(D);e.length>(y??0)&&ee(e.slice(0,-1))},check:()=>!g&&w&&x.matches(`:focus-within`),element:()=>x},[]),ti({activity:qM,callback:e=>{let t=Jj(D),n=v===1;t.length>0&&n&&e.key.length===1&&ee(t.slice(0,-1))},allowDefault:!0,check:()=>!g&&w&&x.matches(`:focus-within`),element:()=>x},[v]),j(()=>{!S&&!f&&E(``)},[S,f]),j(()=>{x.toggleAttribute(`opened`,!!S)},[S]);let O=Tr({onText:E,onChange:ee,value:D,limit:v,min:y,keepQuery:f,keepOpened:d,setOpened:C,onSelect:i,valueProperty:u}),[,,ae]=WM(ie);return{limit:v,opened:S,query:T,textual:b,value:D,source$:ie,loading:ae===`pending`,items:M(()=>{if(!S||re)return $M;let e=p?te:[...D,...Xj(D,Dj(u))(te)];return h?e:XM(e,T,b)},[te,S,T,b,w,D,p,u,h,re]),onToggle:N(e=>{g||C(e.newState===`open`)},[g]),onText:N(e=>{g||(E(e.target.value),C(!0))},[g,E,t,C]),onSelect:N(e=>{if(g)return;O.onSelect?.(e,O);let{onChange:t,onText:n,limit:r,min:i,value:a,keepQuery:o,keepOpened:s,setOpened:c,valueProperty:l}=O;o||n(``),s||c(!1);let u=Jj(a),d=Dj(l),f=u.some(t=>d(t)===d(e));f&&u.length===i||t((f?Xj(e,d)(u):[...u,e]).slice(-r))},[g,O]),onDeselect:N(e=>{g||O.onChange(Xj(e,Dj(O.valueProperty))(O.value))},[g,O]),defaultIndex:T!==void 0&&T?.length>0?0:m}}})),aN,oN,sN=e((()=>{rA(),R(),tN(),aN=e=>{let t=e.shadowRoot.querySelectorAll(`.chip`),n=e.shadowRoot.querySelector(`.badge`);if(!n)return;n.hidden=!0;for(let e of t)e.hidden=!1;let r=e.shadowRoot.querySelector(`cosmoz-input`).shadowRoot?.querySelector(`.control`)?.getBoundingClientRect(),i;for(i=0;i<t.length;i++){let e=t[i].getBoundingClientRect();if(!(e.x+e.width<=r.x+r.width-24))break}let a=t.length-i;for(n.querySelector(`span`).textContent=`+`+a.toString(),n.hidden=a<1;i<t.length;i++)t[i].hidden=!0},oN=({value:e,opened:t,wrap:n,limit:r})=>{let i=nA(),a=!(n||r===1),o=M(()=>eN(()=>aN(i)),[]),[s,c]=P(0);Be(()=>{if(!a)return;let e=i.shadowRoot.querySelector(`cosmoz-input`),t=new ResizeObserver(e=>{c(e[0].contentRect.width)});return t.observe(e),()=>t.disconnect()},[a]),Be(()=>a?o():void 0,[a,s,t,e])}})),cN,lN,uN,dN,fN,pN=e((()=>{Gr(),uk(),EA(),b(),x(),vt(),Z(),bs(),GA(),B(),dM(),EM(),OM(),AM(),iN(),sN(),cN=[`input`,`control`,`label`,`line`,`error`,`wrap`].map(e=>`${e}: input-${e}`).join(),lN=({opened:e,isSingle:t,showSingle:n,hasResultsOrQuery:r})=>!e||t&&!n?!1:r,uN=e=>{let{variant:t,opened:n,invalid:r,errorMessage:i,hint:a,label:o,placeholder:s,disabled:c,textual:l,text:u,onText:d,onToggle:f,onDeselect:p,value:m,limit:g,min:_,showSingle:v,items:b,source$:x,loading:S,chipRenderer:C,mode:w}=e,T=g===1,E=T&&m?.[0]!=null,ee=S||b.length>0||u!=null&&u.length>0;return h`<cosmoz-dropdown-next
			open-on-focus
			?disabled=${c}
			.opened=${n}
			@dropdown-toggle=${f}
			part="dropdown"
		>
			<cosmoz-input
				slot="button"
				id="input"
				part="input"
				.label=${o}
				.placeholder=${E?void 0:s}
				hint=${X(a)}
				variant=${X(t)}
				?readonly=${E}
				?disabled=${c}
				?invalid=${_t([x,r],()=>WA(x.then(()=>r,()=>!0),r))}
				.errorMessage=${_t([x,i],()=>WA(x.then(()=>i,e=>e.message),i))}
				.value=${ys(u)}
				@value-changed=${d}
				autocomplete="off"
				exportparts=${cN}
				?data-one=${T}
				?data-single=${E}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix">
					${z(w===`select`,()=>Pd({styles:`margin-right: calc(var(--cz-spacing) * 2);color: var(--cz-color-text-secondary);`,width:`16`,height:`16`}))}
				</slot>
				${TM({value:m,min:_,isOne:T,onDeselect:p,textual:l,disabled:c,chipRenderer:C})}
			</cosmoz-input>

			${z(lN({opened:n,isSingle:E,showSingle:v,hasResultsOrQuery:ee}),()=>uM({...e,items:b,multi:!T},z(S,()=>h`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>z(u!=null&&u.length>0&&b.length===0,()=>h`<slot name="no-result">
											<span class="no-result">${y(`No results found`)}</span>
										</slot>`))))}
		</cosmoz-dropdown-next>`},dN=e=>{let t={...e,...rN(e)};return oN(t),uN(t)},fN=[`variant`,`disabled`,`invalid`,`hint`,`error-message`,`text-property`,`value-property`,`limit`,`min`,`show-single`,`preserve-order`,`keep-opened`,`keep-query`,`default-index`,`external-search`,`item-height`,`item-limit`,`wrap`,`lazy-open`,`mode`]})),mN,hN,gN,_N=e((()=>{Yk(),R(),pN(),mN=e=>{let{onChange:t,onText:n,mode:r,...i}=e,a=r===`select`,[o,s]=Ke(`value`);return j(()=>{e.onChange!=null&&console.warn(`onChange is deprecated; use value-changed and lift instead`)},[]),dN({...i,...a&&{limit:1,min:1,showSingle:!0},mode:r,value:o,onChange:N((e,...n)=>{s(e),t?.(e,...n)},[t]),onText:N(t=>{e.text=t,n?.(t)},[n])})},hN=[Kk(kM)],gN={mode:`open`,delegatesFocus:!0},customElements.define(`cosmoz-autocomplete-ui`,L(dN,{observedAttributes:fN,styleSheets:hN,shadowRootInit:gN})),customElements.define(`cosmoz-autocomplete`,L(mN,{observedAttributes:fN,styleSheets:hN,shadowRootInit:gN}))})),vN,yN=e((()=>{R(),vN=k`
	cosmoz-listbox::part(error)::before {
		border-color: var(--cz-color-border-error);
		/* prettier-ignore */
		background: url("${`data:image/svg+xml,%3Csvg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.5 2.5L8.5 8.5M8.5 2.5L2.5 8.5' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E`}") var(--cz-color-border-error) no-repeat 50%;
	}

	cosmoz-listbox::part(error):hover {
		background: var(--cz-color-bg-error);
	}
`})),bN,xN,SN=e((()=>{bN=e=>({item:e,excluded:!1}),xN=e=>e.item})),CN,wN=e((()=>{Qr(),R(),_N(),SN(),CN=e=>{let[t,n]=Ke(e);return{value:t,setExcludingValue:N(e=>n(t=>{let n=Zr(e,t?.map(xN));if(!n)return;if(!t)return n.map(bN);let r=t.reduce((e,t)=>n.includes(t.item)?[...e,t]:t.excluded?e:[...e,{...t,excluded:!0}],[]),i=n.filter(e=>!t.some(t=>t.item===e)).map(bN);return[...r,...i]}),[]),setValue:n}}})),TN,EN,DN,ON,kN,AN=e((()=>{SM(),R(),Z(),_N(),pN(),yN(),wN(),SN(),TN=(e,t)=>e?.some(e=>e.item===t&&e.excluded),EN=(e,t)=>t&&TN(e,t)?`error`:`gray`,DN=e=>(t,n,{highlight:r,select:i,textual:a,isSelected:o})=>{let s=a(t);return h`<div
				class="item"
				role="option"
				part="option ${EN(e,t)}"
				?aria-selected=${o(t)}
				data-index=${n}
				@mouseenter=${()=>r(n)}
				@click=${()=>i(t)}
				@mousedown=${e=>e.preventDefault()}
			>
				${s}
			</div>
			<div class="sizer" virtualizer-sizer>${s}</div>`},ON=(e,t)=>({item:n,content:r,disabled:i,hidden:a,className:o=`chip`,slot:s})=>h`<cosmoz-tag
			class=${X(o)}
			slot=${X(s)}
			exportparts="chip-text, chip-clear"
			color=${EN(e,n)}
			?disabled=${i}
			?hidden=${a}
			?removable=${!!n}
			@remove=${()=>t(n)}
			title=${X(typeof r==`string`?r:void 0)}
		>
			${r}
		</cosmoz-tag>`,kN=e=>{let{value:t,setValue:n,setExcludingValue:r}=CN(`value`),[i,a]=Ke(`text`),o=N(e=>n(t=>t?.filter(t=>t.item!==e)),[]);return dN({...e,value:M(()=>t?.map(xN),[t]),onChange:N(e=>{r(e)},[]),text:i,onText:N(e=>{a(e)},[]),itemRenderer:M(()=>DN(t),[t]),chipRenderer:M(()=>ON(t,o),[t,o])})},customElements.define(`cosmoz-autocomplete-excluding`,L(kN,{observedAttributes:fN,styleSheets:[kM,vN],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),jN=e((()=>{_N(),AN(),JM()})),MN,NN,PN,FN=e((()=>{R(),x(),MN=k`
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
`,NN=()=>m,PN=L(NN,{styleSheets:[MN]}),customElements.define(`cosmoz-spinner`,PN)})),IN=e((()=>{FN()})),LN,RN,zN,BN,VN,HN,UN=e((()=>{EA(),fk(),sA(),R(),LN=[`T`,` `],RN=e=>{if(!e||typeof e!=`string`)return;let t;return LN.some(n=>e.match(n)?(t=e.split(n),!0):!1),t||[e]},zN=(e,t)=>{let n=RN(e),r=RN(t);return{minDate:Array.isArray(n)?n.shift():null,minTime:Array.isArray(n)?n.shift():null,maxDate:Array.isArray(r)?r.shift():null,maxTime:Array.isArray(r)?r.shift():null}},BN=(e,t)=>{if(!(!e&&!t))return!e&&t?`T${t}`:e&&!t?e:`${e}T${t}`},VN=e=>{if(e){for(let t of LN)if(e.match(t)){let n=e.split(t);return{date:n.shift(),time:n.shift()}}return{date:e}}},HN=e=>{let{dateLabel:t,timeLabel:n,min:r,max:i,step:a=`1`,value:o}=e,{minDate:s,maxDate:c,minTime:l,maxTime:u}=M(()=>zN(r,i),[r,i]),{date:d,time:f}=M(()=>VN(o)??{},[o]);return j(()=>{e.dispatchEvent(new CustomEvent(`cosmoz-datetime-input-value-changed`,{bubbles:!0,composed:!0}))},[o]),h`
		<style>
			:host {
				display: flex;
				flex-direction: row;
				gap: var(--cz-spacing);
			}
		</style>
		<cosmoz-input
			label="${t}"
			type="date"
			.value="${d}"
			@value-changed="${t=>aA(e,`value`,BN(t.target.value,f))}"
			.min="${s}"
			.max="${c}"
		></cosmoz-input>
		<cosmoz-input
			label="${n}"
			type="time"
			.value="${f}"
			@value-changed="${t=>aA(e,`value`,BN(d,t.target.value))}"
			step="${a}"
			.min="${l}"
			.max="${u}"
		></cosmoz-input>
	`},customElements.define(`cosmoz-datetime-input`,L(HN,{observedAttributes:[`date-label`,`time-label`,`min`,`max`,`step`],styleSheets:[dk]}))})),WN=e((()=>{UN()})),GN,KN,qN,JN,YN,XN,ZN,QN,$N,eP,tP=e((()=>{is(),Oi(),b(),GN=[],KN=()=>{g.isInitialized||g.init({lng:`en`,resStore:{en:{}},fallbackLng:!1})},qN=e=>e.reduce((e,t,n)=>(e.count===void 0&&typeof t==`number`&&(e.count=t),typeof t==`object`?{...e,...t}:(e[n]=t,e)),{}),JN=function(e){KN();let t=qN([...arguments].slice(1));return delete t.count,g.t(e,t)},YN=function(e,t){KN();let n=qN([...arguments].slice(2)),r=n.count,i;delete n.count;let a=g.services.pluralResolver.getSuffix(g.language,r);return a?(n.defaultValue=t,i=e+a):(i=e,n.defaultValue=e),g.t(i,n)},XN=function(e,t){KN();let n=qN([...arguments].slice(2));return n.context=e,delete n.count,g.t(t,n)},ZN=function(e,t,n){KN();let r=qN([...arguments].slice(3)),i=r.count,a=e?`_`+e:``,o=t;delete r.count;let s=g.services.pluralResolver.getSuffix(g.language,i);return s?(r.defaultValue=n,o=t+a+s):(o=t,r.context=e),g.t(o,r)},QN=(e,t,n)=>{g.init({resources:{}}),g.addResourceBundle(e,t,n)},$N=Di(e=>class extends e{static get properties(){return{t:{type:Object,value(){return{}}}}}_filterT(e){return e.filter(e=>e!==this.t)}_(){return JN.apply(null,this._filterT([...arguments]))}connectedCallback(){super.connectedCallback(),GN.push(this)}disconnectedCallback(){super.disconnectedCallback();let e=GN.indexOf(this);e>=0&&GN.splice(e,1)}gettext(){return JN.apply(null,this._filterT([...arguments]))}ngettext(){return YN.apply(null,this._filterT([...arguments]))}pgettext(){return XN.apply(null,this._filterT([...arguments]))}npgettext(){return ZN.apply(null,this._filterT([...arguments]))}}),eP=class extends rs{static get properties(){return{compatibilityJSON:{type:String,value:`v3`},domain:{type:String,value:`messages`},interpolationPrefix:{type:String,value:`__`},interpolationSuffix:{type:String,value:`__`},language:{type:String,value:`en`},namespace:{type:String,value:`translation`},translations:{type:Object,observer(e){e!=null&&(QN(this.language,this.namespace,e),GN.forEach(e=>e.set(`t`,{})))}},keySeparator:{type:String,value:`.`},nsSeparator:{type:String,value:`:`}}}ready(){super.ready(),g.init({compatibilityJSON:this.compatibilityJSON,interpolation:{escapeValue:!1,prefix:this.interpolationPrefix,suffix:this.interpolationSuffix},keySeparator:this.keySeparator,lng:this.language,nsSeparator:this.nsSeparator,resStore:{}})}},customElements.define(`cosmoz-i18next`,eP)})),nP,rP,iP=e((()=>{nP=e=>t=>{let n=t.match(e);return n&&{result:n,url:new URL(t,document.location.origin)}},rP=(e,t)=>{for(let n of e){let e=n.rule,r=typeof e==`function`?e(t):nP(e)(t);if(r)return{...n,route:n,match:r,url:t}}}})),aP=e((()=>{R()})),oP,sP,cP,lP,uP=e((()=>{R(),iP(),oP=()=>window.location.href.replace(window.location.origin,``),sP=()=>{let[e,t]=P(oP);return j(()=>{let e=()=>t(oP);return window.addEventListener(`popstate`,e),()=>window.removeEventListener(`popstate`,e)},[t]),e},cP=e=>{let t=sP();return M(()=>rP(e,t),[e,t])},lP=(e,t=null,{notify:n=!0,replace:r=!0}={})=>{(r?history.replaceState:history.pushState).call(history,t,``,e),n&&queueMicrotask(()=>window.dispatchEvent(new CustomEvent(`popstate`,{bubbles:!1})))}})),dP,fP=e((()=>{R(),uP(),dP=e=>{let t=cP(e);return{route:t,result:M(()=>{if(t){let{handle:e,...n}=t;return e(n)}},[t])}}})),pP,mP,hP=e((()=>{R(),pP=(e,t,n)=>e.dispatchEvent(new CustomEvent(t,{bubbles:!1,cancelable:!1,composed:!0,...n})),mP=(e,t,n)=>{j(()=>{if(!n){pP(e,`route-not-found`);return}pP(e,`route-loading`,{detail:t}),Promise.resolve(n).then(()=>pP(e,`route-loaded`,{detail:t})).catch(n=>pP(e,`route-error`,{detail:{route:t,error:n}}))},[n])}})),gP,_P=e((()=>{x(),vt(),GA(),R(),fP(),hP(),gP=e=>{let t=e.routes,{route:n,result:r}=dP(t);return mP(e,n,r),_t([r],()=>WA(Promise.resolve(r).catch(()=>m),m))},customElements.define(`cosmoz-router`,L(gP))})),vP=e((()=>{iP(),aP(),uP(),fP(),_P()})),yP,bP,xP,SP=e((()=>{Qr(),yP=()=>new URL(location.hash.replace(/^#!?/iu,``).replace(`%23`,`#`),location.origin),bP=(e,t=Xr)=>{let n=new URLSearchParams(yP().hash.replace(`#`,``)).getAll(e);switch(n.length){case 0:return;case 1:return t(n[0]);default:return n.map(t)}},xP=(e,t=Xr)=>{let n=Array.from(new URLSearchParams(yP().hash.replace(`#`,``)).entries()).filter(([t])=>t.startsWith(e)).map(([n,r])=>t([n.replace(e,``),r])).filter(([,e])=>e!=null);return Object.fromEntries(n)}}));function*CP(e,t){if(e!==void 0){let n=0;for(let r of e)yield t(r,n++)}}var wP=e((()=>{}));function TP(e,t){return t===void 0?t={autoBom:!1}:typeof t!=`object`&&(console.warn(`Deprecated: Expected third argument to be a object`),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([`﻿`,e],{type:e.type}):e}function EP(e,t,n){var r=new XMLHttpRequest;r.open(`GET`,e),r.responseType=`blob`,r.onload=function(){AP(r.response,t,n)},r.onerror=function(){console.error(`could not download file`)},r.send()}function DP(e){var t=new XMLHttpRequest;t.open(`HEAD`,e,!1);try{t.send()}catch{}return t.status>=200&&t.status<=299}function OP(e){try{e.dispatchEvent(new MouseEvent(`click`))}catch{var t=document.createEvent(`MouseEvents`);t.initMouseEvent(`click`,!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var $,kP,AP,jP=e((()=>{$=typeof window==`object`&&window.window===window?window:typeof self==`object`&&self.self===self?self:typeof global==`object`&&global.global===global?global:void 0,kP=$.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),AP=$.saveAs||(typeof window!=`object`||window!==$?function(){}:`download`in HTMLAnchorElement.prototype&&!kP?function(e,t,n){var r=$.URL||$.webkitURL,i=document.createElement(`a`);t=t||e.name||`download`,i.download=t,i.rel=`noopener`,typeof e==`string`?(i.href=e,i.origin===location.origin?OP(i):DP(i.href)?EP(e,t,n):OP(i,i.target=`_blank`)):(i.href=r.createObjectURL(e),setTimeout(function(){r.revokeObjectURL(i.href)},4e4),setTimeout(function(){OP(i)},0))}:`msSaveOrOpenBlob`in navigator?function(e,t,n){if(t=t||e.name||`download`,typeof e==`string`)if(DP(e))EP(e,t,n);else{var r=document.createElement(`a`);r.href=e,r.target=`_blank`,setTimeout(function(){OP(r)})}else navigator.msSaveOrOpenBlob(TP(e,n),t)}:function(e,t,n,r){if(r||=open(``,`_blank`),r&&(r.document.title=r.document.body.innerText=`downloading...`),typeof e==`string`)return EP(e,t,n);var i=e.type===`application/octet-stream`,a=/constructor/i.test($.HTMLElement)||$.safari,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||i&&a||kP)&&typeof FileReader<`u`){var s=new FileReader;s.onloadend=function(){var e=s.result;e=o?e:e.replace(/^data:[^;]*;/,`data:attachment/file;`),r?r.location.href=e:location=e,r=null},s.readAsDataURL(e)}else{var c=$.URL||$.webkitURL,l=c.createObjectURL(e);r?r.location=l:location.href=l,r=null,setTimeout(function(){c.revokeObjectURL(l)},4e4)}}),$.saveAs=AP.saveAs=AP})),MP,NP=e((()=>{MP=function(e){e&&console.log(e)}})),PP,FP=e((()=>{NP(),PP=class{constructor(e,t){this._filename=e,this.buffer=null,this.lastDownloadBlobUrl=null,this._mimeType=t}generate(){}createDownloadUrl(){this.buffer||this.generate();let e=new Blob([this.buffer],{type:this._mimeType});return this.lastDownloadBlobUrl&&window.URL.revokeObjectURL(this.lastDownloadBlobUrl),this.lastDownloadBlobUrl=URL.createObjectURL(e),this.lastDownloadBlobUrl}createDownloadLink(e){let t=e instanceof HTMLAnchorElement?e:document.createElement(`a`);return typeof e==`string`&&(t.innerHTML=e),t.href=this.createDownloadUrl(),t.download=this._filename,t.hasChildNodes||(t.innerText=this._filename),MP(`Link created for file `+this._filename),t}}})),IP,LP,RP,zP=e((()=>{NP(),FP(),IP=null,LP=class extends PP{constructor(e,t){super(e,`application/zip`),this.files=[],this.createFolderEntries=!!t;let n=new Date;this.timeInt=Math.round(n.getSeconds()/2)|n.getMinutes()<<5|n.getHours()<<11,this.dateInt=n.getFullYear()-1980<<9|n.getMonth()+1<<5|n.getDate()}addFileFromString(e,t){let n=new TextEncoder(`utf-8`).encode(t);return this.addFileFromUint8Array(e,n),this}addFileFromUint8Array(e,t){if(!(t instanceof Uint8Array))throw Error(`invalid parameter`);return this.files.push({name:e.replace(`\\`,`/`),data:t}),this}generate(){MP(`NullZip archive generation started`);let e={};for(let t of this.files)t.size=t.data?t.data.byteLength:0,t.crc=t.data?this.crc(t.data):0,e[t.name]=t;let t=[];if(this.createFolderEntries){let n=/\//giu;for(let r of this.files){let i=r.name;for(let r=n.exec(i);r!==null;r=n.exec(i)){let n={name:i.substr(0,r.index+1),size:0,crc:0,data:new Uint8Array};e[n.name]===void 0&&(e[n.name]=n,t.push(n))}}}Array.prototype.push.apply(this.files,t),this.files.sort((e,t)=>e.name.length-t.name.length||e.name.localeCompare(t.name));let n=this.files.reduce((e,t)=>e+76+t.name.length*2+t.size,22);MP(`Estimated file size: `+n),this.buffer=new ArrayBuffer(n);let r=new RP(this.buffer),i=this.hex2u8a(`504b0304140000000000`);for(let e of this.files)e.offs=r.i,r.writeByteArray(i),r.uint16(this.timeInt),r.uint16(this.dateInt),r.uint32(e.crc),r.uint32(e.size),r.uint32(e.size),r.uint16(e.name.length),r.uint16(0),r.writeASCII(e.name),e.size>0&&r.writeByteArray(e.data);let a=r.i,o=this.hex2u8a(`504b01023f00140000000000`);for(let e of this.files)r.writeByteArray(o),r.uint16(this.timeInt),r.uint16(this.dateInt),r.uint32(e.crc),r.uint32(e.size),r.uint32(e.size),r.uint16(e.name.length),r.uint16(0),r.uint16(0),r.uint16(0),r.uint16(0),r.uint32(e.size?32:48),r.uint32(e.offs),r.writeASCII(e.name);let s=r.i-a;return r.writeByteArray(this.hex2u8a(`504b050600000000`)),r.uint16(this.files.length),r.uint16(this.files.length),r.uint32(s),r.uint32(a),r.uint16(0),MP(`Finished creating zip. size=`+r.i+`, predicted size=`+n),this.buffer}crc(e){let t,n,r=-1;if(!IP)for(IP=[],n=0;n<256;t=++n){for(let e=0;e<8;e++)t=t&1?3988292384^t>>>1:t>>>1;IP[n]=t}for(let t=0;t<e.byteLength;t++)r=r>>>8^IP[(r^e[t])&255];return(r^-1)>>>0}hex2u8a(e){let t=new Uint8Array(Math.ceil(e.length/2));for(let n=0;n<t.length;n++)t[n]=parseInt(e.substr(n*2,2),16);return t}},RP=class{constructor(e){this.dw=new DataView(e),this.i=0,this.le=!0,this.utf8encoder=new TextEncoder(`utf-8`)}uint8(e){this.dw.setUint8(this.i++,e)}uint16(e){this.dw.setUint16(this.i,e,this.le),this.i+=2}uint32(e){this.dw.setUint32(this.i,e,this.le),this.i+=4}writeByteArray(e){if(!(e instanceof Uint8Array))throw Error(`invalid parameter`);new Uint8Array(this.dw.buffer).set(e,this.i),this.i+=e.byteLength}writeASCII(e){for(let t=0;t<e.length;t++)this.dw.setUint8(this.i++,e.charCodeAt(t)&255)}}})),BP,VP,HP,UP,WP,GP,KP,qP=e((()=>{FP(),zP(),BP=`application/vnd.openxmlformats-officedocument.spreadsheetml`,VP=`http://schemas.openxmlformats.org`,HP=`${VP}/spreadsheetml/2006/main`,UP=`${VP}/package/2006`,WP=`${VP}/officeDocument/2006/relationships`,GP=[{id:164,code:`yyyy&quot;-&quot;mm&quot;-&quot;dd`},{id:165,code:`yyyy&quot;-&quot;mm&quot;-&quot;dd&quot; &quot;h&quot;:&quot;mm&quot;:&quot;ss`}],KP=class extends PP{constructor(e,t){super(e,`${BP}.sheet`),this.sheets=[],this.frozen=!!(t&&t.frozen),this.autoFilter=!!(t&&t.filter)}addSheetFromData(e,t){let n=this.sheets.length+1;return this.sheets.push({id:n,name:this.escapeXml(t||`Sheet`+n),data:e}),this}generate(){let e=[{name:`xl/styles.xml`,xml:`<styleSheet xmlns="${HP}" xmlns:mc="${VP}/markup-compatibility/2006"><numFmts count="${GP.length}">${GP.map(e=>`<numFmt numFmtId="${e.id}" formatCode="${e.code}" />`)}</numFmts><fonts count="2"><font><sz val="10.0"/><color rgb="FF000000"/><name val="Arial"/></font><font><b/></font></fonts><fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="lightGray"/></fill></fills><borders count="1"><border><left/><right/><top/><bottom/></border></borders><cellStyleXfs count="1"><xf borderId="0" fillId="0" fontId="0" numFmtId="0" applyAlignment="1" applyFont="1"/></cellStyleXfs><cellXfs><xf borderId="0" fillId="0" fontId="0" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment/></xf><xf borderId="0" fillId="0" fontId="1" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment/></xf><xf borderId="0" fillId="0" fontId="0" numFmtId="164" xfId="0" applyAlignment="1" applyFont="1" applyNumberFormat="1"><alignment /></xf><xf borderId="0" fillId="0" fontId="0" numFmtId="165" xfId="0" applyAlignment="1" applyFont="1" applyNumberFormat="1"><alignment /></xf></cellXfs><cellStyles count="1"><cellStyle xfId="0" name="Normal" builtinId="0"/></cellStyles><dxfs count="0"/></styleSheet>`},{name:`xl/sharedStrings.xml`,xml:`<sst xmlns="${HP}" count="2" uniqueCount="2"><si><t>text here</t></si></sst>`},{name:`xl/workbook.xml`,xml:`<workbook xmlns="${HP}" xmlns:r="${WP}"><workbookPr/><sheets>`+this.sheets.map(e=>`<sheet state="visible" name="${e.name}" sheetId="${e.id}" r:id="rId${e.id+2}"/>`).join(``)+`</sheets><definedNames/><calcPr/></workbook>`},{name:`xl/_rels/workbook.xml.rels`,xml:`<Relationships xmlns="${UP}/relationships"><Relationship Id="rId1" Type="${WP}/styles" Target="styles.xml" /><Relationship Id="rId2" Type="${WP}/sharedStrings" Target="sharedStrings.xml"/>`+this.sheets.map(e=>`<Relationship Id="rId${e.id+2}" Type="${WP}/worksheet" Target="worksheets/sheet${e.id}.xml"/>`).join(``)+`</Relationships>`},{name:`[Content_Types].xml`,xml:`<Types xmlns="${UP}/content-types"><Default ContentType="application/xml" Extension="xml"/><Default ContentType="application/vnd.openxmlformats-package.relationships+xml" Extension="rels"/>`+this.sheets.map(e=>`<Override ContentType="${BP}.worksheet+xml" PartName="/xl/worksheets/sheet${e.id}.xml"/>`).join(``)+`<Override ContentType="${BP}.sharedStrings+xml" PartName="/xl/sharedStrings.xml"/><Override ContentType="${BP}.styles+xml" PartName="/xl/styles.xml" /><Override ContentType="${BP}.sheet.main+xml" PartName="/xl/workbook.xml"/></Types>`},{name:`_rels/.rels`,xml:`<Relationships xmlns="${UP}/relationships"><Relationship Id="rId1" Type="${WP}/officeDocument" Target="xl/workbook.xml"/></Relationships>`}],t=this.sheets.map(e=>{let t=0,n=e.data.map((e,n)=>{let r=this.frozen&&n===0?` s="1"`:``;e.length>t&&(t=e.length);let i=e.map((e,t)=>{let i=this.colName(t)+(n+1);return typeof e==`number`?`<c r="${i}"${r}><v>${e}</v></c>`:e instanceof Date?`<c s="${e.getHours()||e.getMinutes()||e.getSeconds()?3:2}"><v>${this.dateToExcelDate(e)}</v></c>`:`<c t="inlineStr"${r}><is><t>${this.escapeXml(e.toString())}</t></is></c>`});return`<row r="${n+1}">${i.join(``)}</row>`});return{name:`xl/worksheets/sheet${e.id}.xml`,xml:`<worksheet xmlns="${HP}"><sheetViews><sheetView workbookViewId="0"`+(this.frozen?` tabSelected="1"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView>`:`/>`)+`</sheetViews><sheetFormatPr customHeight="1" defaultColWidth="17.5" defaultRowHeight="15.75"/><sheetData>${n.join(``)}</sheetData>`+(this.autoFilter?`<autoFilter ref="A1:${this.colName(t)}${e.data.length}"/>`:``)+`</worksheet>`}}),n=new LP(this._filename,!1);return[...e,...t].forEach(e=>n.addFileFromString(e.name,e.xml)),this.buffer=n.generate(),this.buffer}colName(e){return e<26?String.fromCharCode(e+65):String.fromCharCode(Math.floor(e/26+64))+String.fromCharCode(Math.floor(e%26+65))}escapeXml(e){return e.replace(/[<>&'"]/gu,e=>[`&lt;`,`&gt;`,`&amp;`,`&apos;`,`&quot;`][`<>&'"`.indexOf(e)])}dateToExcelDate(e){let t=60*1e3;return t*60*24,25569+(e.getTime()-e.getTimezoneOffset()*t)/864e5}}})),JP=e((()=>{qP(),zP(),FP()})),YP=e((()=>{x(),Z()})),XP=e((()=>{x(),Z()})),ZP=e((()=>{x(),Z()})),QP=e((()=>{x(),Z()})),$P=e((()=>{x(),Z()})),eF,tF=e((()=>{x(),Z(),B(),eF=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>h`
  <svg
    slot=${X(e)}
    class=${`announcement-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${r}
    height=${i}
    style=${X(a)}
  >
    ${z(t,()=>_`<title>${t}</title>`)}
    <path
      d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"
    />
  </svg>
`})),nF=e((()=>{x(),Z()})),rF=e((()=>{x(),Z()})),iF=e((()=>{x(),Z()})),aF=e((()=>{x(),Z()})),oF=e((()=>{x(),Z()})),sF=e((()=>{x(),Z()})),cF=e((()=>{x(),Z()})),lF=e((()=>{x(),Z()})),uF=e((()=>{x(),Z()})),dF=e((()=>{x(),Z()})),fF,pF=e((()=>{x(),Z(),B(),fF=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>h`
  <svg
    slot=${X(e)}
    class=${`delete-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${r}
    height=${i}
    style=${X(a)}
  >
    ${z(t,()=>_`<title>${t}</title>`)}
    <path
      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
    />
  </svg>
`})),mF=e((()=>{x(),Z()})),hF=e((()=>{x(),Z()})),gF=e((()=>{x(),Z()})),_F,vF=e((()=>{x(),Z(),B(),_F=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>h`
  <svg
    slot=${X(e)}
    class=${`error-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${r}
    height=${i}
    style=${X(a)}
  >
    ${z(t,()=>_`<title>${t}</title>`)}
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
    />
  </svg>
`})),yF=e((()=>{x(),Z()})),bF=e((()=>{x(),Z()})),xF=e((()=>{x(),Z()})),SF=e((()=>{x(),Z()})),CF=e((()=>{x(),Z()})),wF=e((()=>{x(),Z()})),TF=e((()=>{x(),Z()})),EF=e((()=>{x(),Z()})),DF=e((()=>{x(),Z()})),OF=e((()=>{x(),Z()})),kF=e((()=>{x(),Z()})),AF=e((()=>{x(),Z()})),jF=e((()=>{x(),Z()})),MF=e((()=>{x(),Z()})),NF=e((()=>{x(),Z()})),PF=e((()=>{x(),Z()})),FF=e((()=>{x(),Z()})),IF=e((()=>{x(),Z()})),LF=e((()=>{x(),Z()})),RF=e((()=>{x(),Z()})),zF=e((()=>{x(),Z()})),BF=e((()=>{x(),Z()})),VF=e((()=>{x(),Z()})),HF=e((()=>{x(),Z()})),UF=e((()=>{x(),Z()})),WF=e((()=>{x(),Z()})),GF=e((()=>{x(),Z()})),KF=e((()=>{x(),Z()})),qF=e((()=>{x(),Z()})),JF=e((()=>{x(),Z()})),YF=e((()=>{x(),Z()})),XF=e((()=>{x(),Z()})),ZF=e((()=>{x(),Z()})),QF=e((()=>{x(),Z()})),$F=e((()=>{x(),Z()})),eI=e((()=>{x(),Z()})),tI=e((()=>{x(),Z()})),nI=e((()=>{x(),Z()})),rI=e((()=>{x(),Z()})),iI=e((()=>{x(),Z()})),aI=e((()=>{x(),Z()})),oI=e((()=>{x(),Z()})),sI=e((()=>{x(),Z()})),cI=e((()=>{x(),Z()})),lI=e((()=>{x(),Z()})),uI=e((()=>{YP(),XP(),ZP(),QP(),$P(),tF(),nF(),rF(),iF(),aF(),oF(),sF(),cF(),lF(),uF(),dF(),pF(),mF(),hF(),gF(),vF(),yF(),bF(),xF(),SF(),CF(),wF(),TF(),EF(),DF(),OF(),kF(),AF(),jF(),MF(),NF(),PF(),FF(),IF(),LF(),RF(),zF(),BF(),VF(),HF(),UF(),WF(),GF(),KF(),qF(),JF(),YF(),XF(),ZF(),QF(),$F(),eI(),tI(),nI(),rI(),iI(),aI(),oI(),sI(),cI(),lI()})),dI,fI,pI=e((()=>{w(),dI=(e,t)=>{Object.assign(e.style,{display:t?``:`none`})},fI=class extends HTMLElement{static get observedAttributes(){return[`opened`]}toggle=C(`height`);constructor(){super();let e=new CSSStyleSheet;e.replaceSync(`
      :host { display: block; overflow: hidden; }
		`);let t=this.attachShadow({mode:`open`});t.appendChild(document.createElement(`slot`)),t.adoptedStyleSheets=[e]}connectedCallback(){dI(this,this.getAttribute(`opened`)!=null)}attributeChangedCallback(e,t,n){switch(e){case`opened`:{let e=n!=null;return this.isConnected?this.toggle(this,e):dI(this,e)}}}},customElements.define(`cosmoz-collapse`,fI)})),mI=e((()=>{pI(),w()}));export{Bk as $,yj as A,_t as At,DA as B,M as Bt,Jj as C,Er as Ct,kj as D,yr as Dt,Dj as E,wr as Et,IA as F,Xe as Ft,oA as G,EA as H,j as Ht,NA as I,qe as It,Xk as J,tA as K,kA as L,P as Lt,XA as M,R as Mt,LA as N,L as Nt,Oj as O,B as Ot,FA as P,mt as Pt,Wk as Q,jA as R,Be as Rt,jN as S,Kr as St,Aj as T,Sr as Tt,sA as U,k as Ut,OA as V,Ne as Vt,aA as W,Jk as X,Yk as Y,Kk as Z,lP as _,na as _t,eF as a,wk as at,WN as b,Zr as bt,jP as c,vs as ct,CP as d,es as dt,Uk as et,yP as f,ns as ft,vP as g,ra as gt,bP as h,J as ht,fF as i,Ok as it,YA as j,vt as jt,bj as k,z as kt,AP as l,rs as lt,xP as m,_a as mt,uI as n,Lk as nt,JP as o,Z as ot,SP as p,ya as pt,eA as q,_F as r,Fk as rt,KP as s,X as st,mI as t,Hk as tt,wP as u,is as ut,tP as v,Xr as vt,Zj as w,Tr as wt,IN as x,Yr as xt,$N as y,Qr as yt,MA as z,N as zt};