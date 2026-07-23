import{A as Z,w as vs,e as w,r as xs,D as Do,E as M,p as Cs,n as Fo,M as Bo,u as dt,v as Ot,h as Me,t as Ho}from"./iframe-B6A6qcs8.js";import{_ as Vo}from"./preload-helper-PPVm8Dsz.js";const O=e=>e??Z;function q(e,t,n){return e?t(e):n?.(e)}const su=({slot:e,title:t,className:n,width:o="24",height:s="24",styles:i}={})=>w`
  <svg
    slot=${O(e)}
    class=${`announcement-icon ${n??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${o}
    height=${s}
    style=${O(i)}
  >
    ${q(t,()=>vs`<title>${t}</title>`)}
    <path
      d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"
    />
  </svg>
`,ou=({slot:e,title:t,className:n,width:o="24",height:s="24",styles:i}={})=>w`
  <svg
    slot=${O(e)}
    class=${`error-icon ${n??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${o}
    height=${s}
    style=${O(i)}
  >
    ${q(t,()=>vs`<title>${t}</title>`)}
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
    />
  </svg>
`;let ce,Es=0;function xn(e){ce=e}function Cn(){ce=null,Es=0}function Uo(){return Es++}const Ie=Symbol("haunted.phase"),re=Symbol("haunted.hook"),En=Symbol("haunted.update"),Sn=Symbol("haunted.commit"),ht=Symbol("haunted.effects"),Dt=Symbol("haunted.layoutEffects"),We="haunted.context";class jo{update;host;virtual;[re];[ht];[Dt];constructor(t,n){this.update=t,this.host=n,this[re]=new Map,this[ht]=[],this[Dt]=[]}run(t){xn(this);let n=t();return Cn(),n}_runEffects(t){let n=this[t];xn(this);for(let o of n)o.call(this);Cn()}runEffects(){this._runEffects(ht)}runLayoutEffects(){this._runEffects(Dt)}teardown(){this[re].forEach(n=>{typeof n.teardown=="function"&&n.teardown(!0)})}}class qo extends Error{constructor(t){const n=t?` <${t}>`:"";super(`Infinite update loop detected in component${n}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name="InfiniteLoopError"}}const Wo=100,Yo=Promise.resolve().then.bind(Promise.resolve());function Ss(){let e=[],t;function n(){t=null;let o=e;e=[];for(var s=0,i=o.length;s<i;s++)o[s]()}return function(o){e.push(o),t==null&&(t=Yo(n))}}const Go=Ss(),Pn=Ss();class ln{renderer;host;state;[Ie];_updateQueued;_active;_updateCount;_processing;static maxUpdates=Wo;constructor(t,n){this.renderer=t,this.host=n,this.state=new jo(this.update.bind(this),n),this[Ie]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>ln.maxUpdates){const t=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new qo(t)}}update(){this._active&&(this._updateQueued||(this._checkForInfiniteLoop(),this._processing=!0,Go(()=>{let t=this.handlePhase(En);Pn(()=>{this.handlePhase(Sn,t),Pn(()=>{this.handlePhase(ht),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(t,n){switch(this[Ie]=t,t){case Sn:this.commit(n),this.runEffects(Dt);return;case En:return this.render();case ht:return this.runEffects(ht)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(t){this.state._runEffects(t)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}const an=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},Xo=e=>e?.map(t=>typeof t=="string"?an(t):t),Jo=(e,...t)=>e.flatMap((n,o)=>[n,t[o]||""]).join(""),U=Jo,Zo=(e="")=>e.replace(/-+([a-z])?/g,(t,n)=>n?n.toUpperCase():"");function Ko(e){class t extends ln{frag;renderResult;constructor(s,i,r){super(s,r||i),this.frag=i}commit(s){this.renderResult=e(s,this.frag)}}function n(o,s,i){const r=(i||s||{}).baseElement||HTMLElement,{observedAttributes:l=[],useShadowDOM:a=!0,shadowRootInit:c={},styleSheets:u}=i||s||{},d=Xo(o.styleSheets||u);class f extends r{_scheduler;static get observedAttributes(){return o.observedAttributes||l||[]}constructor(){if(super(),a===!1)this._scheduler=new t(o,this);else{const p=this.attachShadow({mode:"open",...c});d&&(p.adoptedStyleSheets=d),this._scheduler=new t(o,p,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(p,g,y){if(g===y)return;let b=y===""?!0:y;Reflect.set(this,Zo(p),b)}}function h(_){let p=_,g=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return p},set(y){g&&p===y||(g=!0,p=y,this._scheduler&&this._scheduler.update())}})}const m=new Proxy(r.prototype,{getPrototypeOf(_){return _},set(_,p,g,y){let b;return p in _?(b=Object.getOwnPropertyDescriptor(_,p),b&&b.set?(b.set.call(y,g),!0):(Reflect.set(_,p,g,y),!0)):(typeof p=="symbol"||p[0]==="_"?b={enumerable:!0,configurable:!0,writable:!0,value:g}:b=h(g),Object.defineProperty(y,p,b),b.set&&b.set.call(y,g),!0)}});return Object.setPrototypeOf(f.prototype,m),f}return n}class st{id;state;constructor(t,n){this.id=t,this.state=n}}function Qo(e,...t){let n=Uo(),o=ce[re],s=o.get(n);return s||(s=new e(n,ce,...t),o.set(n,s)),s.update(...t)}function ot(e){return Qo.bind(null,e)}function Ps(e){return ot(class extends st{callback;lastValues;values;_teardown;constructor(t,n,o,s){super(t,n),e(n,this)}update(t,n){this.callback=t,this.values=n}call(){const t=!this.values||this.hasChanged();this.lastValues=this.values,t&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(t){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),t&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((t,n)=>this.lastValues[n]!==t)}})}function Ts(e,t){e[ht].push(t)}const T=Ps(Ts),ti=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,As=ot(class extends st{Context;value;_ranEffect;_unsubscribe;constructor(e,t,n){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Ts(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const t={Context:e,callback:this._updater};ti(this.state.host).dispatchEvent(new CustomEvent(We,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:o=null,value:s}=t;this.value=o?s:e.defaultValue,this._unsubscribe=o}teardown(){this._unsubscribe&&this._unsubscribe()}});function ei(e){return t=>{const n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(We,this)}disconnectedCallback(){this.removeEventListener(We,this)}handleEvent(o){const{detail:s}=o;s.Context===n&&(s.value=this.value,s.unsubscribe=this.unsubscribe.bind(this,s.callback),this.listeners.add(s.callback),o.stopPropagation())}unsubscribe(o){this.listeners.delete(o)}set value(o){this._value=o;for(let s of this.listeners)s(o)}get value(){return this._value}},Consumer:e(function({render:o}){const s=As(n);return o(s)},{useShadowDOM:!1}),defaultValue:t};return n}}const A=ot(class extends st{value;values;constructor(e,t,n,o){super(e,t),this.value=n(),this.values=o}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((t,n)=>this.values[n]!==t)}}),v=(e,t)=>A(()=>e,t);function ni(e,t){e[Dt].push(t)}const Ye=Ps(ni),nt=ot(class extends st{args;constructor(e,t,n){super(e,t),this.updater=this.updater.bind(this),typeof n=="function"&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){const[t]=this.args;typeof e=="function"&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}}),si=ot(class extends st{reducer;currentState;constructor(e,t,n,o,s){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=s!==void 0?s(o):o}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}}),oi=/([A-Z])/gu,Yt=ot(class extends st{property;eventName;constructor(e,t,n,o){if(super(e,t),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(oi,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof o=="function"&&(o=o()),o!=null&&this.updater(o,!0))}update(e,t){return[this.state.host[this.property],this.updater]}resolve(e){const t=this.state.host[this.property],n=typeof e=="function"?e:void 0,o=n?n(t):e;return[t,o,n]}notify(e,t){const n=new CustomEvent(this.eventName,{detail:{value:e,updater:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,t=!1){const[n,o,s]=this.resolve(e),i=this.notify(o,s);!t&&i.defaultPrevented||Object.is(n,o)||(this.state.host[this.property]=o)}}),iu=e=>t=>{t.preventDefault(),e(t.detail.updater??t.detail.value)};function ii(e){let t=e;return{get current(){return t},set current(n){t=n},get value(){return t},set value(n){t=n}}}function mt(e){return A(()=>ii(e),[])}ot(class extends st{update(){return this.state.host}});function ri({render:e}){const t=Ko(e),n=ei(t);return{component:t,createContext:n}}const W={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},it=e=>(...t)=>({_$litDirective$:e,values:t});let yt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,o){this._$Ct=t,this._$AM=n,this._$Ci=o}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};const Ft=(e,t)=>{const n=e._$AN;if(n===void 0)return!1;for(const o of n)o._$AO?.(t,!1),Ft(o,t);return!0},ue=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},zs=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),ci(t)}};function li(e){this._$AN!==void 0?(ue(this),this._$AM=e,zs(this)):this._$AM=e}function ai(e,t=!1,n=0){const o=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(o))for(let i=n;i<o.length;i++)Ft(o[i],!1),ue(o[i]);else o!=null&&(Ft(o,!1),ue(o));else Ft(this,e)}const ci=e=>{e.type==W.CHILD&&(e._$AP??=ai,e._$AQ??=li)};class cn extends yt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,n,o){super._$AT(t,n,o),zs(this),this.isConnected=t._$AU}_$AO(t,n=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),n&&(Ft(this,t),ue(this))}setValue(t){if(xs(this._$Ct))this._$Ct._$AI(t,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=t,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}const{component:k,createContext:ui}=ri({render:Do}),di={duration:250},Os=e=>(t,n,o)=>{const s="max"+e.charAt(0).toUpperCase()+e.slice(1);Object.assign(t.style,{[s]:"",display:"",overflow:"hidden"});const{[e]:i}=t.getBoundingClientRect(),r=[0,i],[l,a]=n?r:r.slice().reverse(),c=t.animate([{[s]:`${l}px`},{[s]:`${a}px`}],{...di,...o});c.onfinish=()=>Object.assign(t.style,{[s]:"",display:n?"":"none",overflow:n?"":"visible"})};const hi={},de=it(class extends yt{constructor(){super(...arguments),this.ot=hi}render(e,t){return t()}update(e,[t,n]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((o,s)=>o===this.ot[s]))return M}else if(this.ot===t)return M;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,n)}}),De=new WeakMap,Et=it(class extends cn{render(e){return Z}update(e,[t]){const n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),Z}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let n=De.get(t);n===void 0&&(n=new WeakMap,De.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?De.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});const $s="important",fi=" !"+$s,pi=it(class extends yt{constructor(e){if(super(e),e.type!==W.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{const o=e[n];return o==null?t:t+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[t]){const{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const o of this.ft)t[o]==null&&(this.ft.delete(o),o.includes("-")?n.removeProperty(o):n[o]=null);for(const o in t){const s=t[o];if(s!=null){this.ft.add(o);const i=typeof s=="string"&&s.endsWith(fi);o.includes("-")||i?n.setProperty(o,i?s.slice(0,-11):s,i?$s:""):n[o]=s}}return M}}),mi=(e=HTMLElement)=>class extends e{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},_i=U`
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
`,gi=()=>w`<div class="wrap" part="wrap"><slot></slot></div>`;customElements.define("cosmoz-dropdown-content",mi(k(gi,{styleSheets:[_i]})));const St=Math.min,H=Math.max,he=Math.round,Zt=Math.floor,J=e=>({x:e,y:e}),yi={left:"right",right:"left",bottom:"top",top:"bottom"},bi={start:"end",end:"start"};function Tn(e,t,n){return H(e,St(t,n))}function we(e,t){return typeof e=="function"?e(t):e}function _t(e){return e.split("-")[0]}function ve(e){return e.split("-")[1]}function ks(e){return e==="x"?"y":"x"}function Ls(e){return e==="y"?"height":"width"}const wi=new Set(["top","bottom"]);function lt(e){return wi.has(_t(e))?"y":"x"}function Rs(e){return ks(lt(e))}function vi(e,t,n){n===void 0&&(n=!1);const o=ve(e),s=Rs(e),i=Ls(s);let r=s==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(r=fe(r)),[r,fe(r)]}function xi(e){const t=fe(e);return[Ge(e),t,Ge(t)]}function Ge(e){return e.replace(/start|end/g,t=>bi[t])}const An=["left","right"],zn=["right","left"],Ci=["top","bottom"],Ei=["bottom","top"];function Si(e,t,n){switch(e){case"top":case"bottom":return n?t?zn:An:t?An:zn;case"left":case"right":return t?Ci:Ei;default:return[]}}function Pi(e,t,n,o){const s=ve(e);let i=Si(_t(e),n==="start",o);return s&&(i=i.map(r=>r+"-"+s),t&&(i=i.concat(i.map(Ge)))),i}function fe(e){return e.replace(/left|right|bottom|top/g,t=>yi[t])}function Ti(e){return{top:0,right:0,bottom:0,left:0,...e}}function Ai(e){return typeof e!="number"?Ti(e):{top:e,right:e,bottom:e,left:e}}function pe(e){const{x:t,y:n,width:o,height:s}=e;return{width:o,height:s,top:n,left:t,right:t+o,bottom:n+s,x:t,y:n}}function On(e,t,n){let{reference:o,floating:s}=e;const i=lt(t),r=Rs(t),l=Ls(r),a=_t(t),c=i==="y",u=o.x+o.width/2-s.width/2,d=o.y+o.height/2-s.height/2,f=o[l]/2-s[l]/2;let h;switch(a){case"top":h={x:u,y:o.y-s.height};break;case"bottom":h={x:u,y:o.y+o.height};break;case"right":h={x:o.x+o.width,y:d};break;case"left":h={x:o.x-s.width,y:d};break;default:h={x:o.x,y:o.y}}switch(ve(t)){case"start":h[r]-=f*(n&&c?-1:1);break;case"end":h[r]+=f*(n&&c?-1:1);break}return h}async function zi(e,t){var n;t===void 0&&(t={});const{x:o,y:s,platform:i,rects:r,elements:l,strategy:a}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:h=0}=we(t,e),m=Ai(h),p=l[f?d==="floating"?"reference":"floating":d],g=pe(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(p)))==null||n?p:p.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(l.floating)),boundary:c,rootBoundary:u,strategy:a})),y=d==="floating"?{x:o,y:s,width:r.floating.width,height:r.floating.height}:r.reference,b=await(i.getOffsetParent==null?void 0:i.getOffsetParent(l.floating)),x=await(i.isElement==null?void 0:i.isElement(b))?await(i.getScale==null?void 0:i.getScale(b))||{x:1,y:1}:{x:1,y:1},P=pe(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:y,offsetParent:b,strategy:a}):y);return{top:(g.top-P.top+m.top)/x.y,bottom:(P.bottom-g.bottom+m.bottom)/x.y,left:(g.left-P.left+m.left)/x.x,right:(P.right-g.right+m.right)/x.x}}const Oi=async(e,t,n)=>{const{placement:o="bottom",strategy:s="absolute",middleware:i=[],platform:r}=n,l=i.filter(Boolean),a=await(r.isRTL==null?void 0:r.isRTL(t));let c=await r.getElementRects({reference:e,floating:t,strategy:s}),{x:u,y:d}=On(c,o,a),f=o,h={},m=0;for(let p=0;p<l.length;p++){var _;const{name:g,fn:y}=l[p],{x:b,y:x,data:P,reset:S}=await y({x:u,y:d,initialPlacement:o,placement:f,strategy:s,middlewareData:h,rects:c,platform:{...r,detectOverflow:(_=r.detectOverflow)!=null?_:zi},elements:{reference:e,floating:t}});u=b??u,d=x??d,h={...h,[g]:{...h[g],...P}},S&&m<=50&&(m++,typeof S=="object"&&(S.placement&&(f=S.placement),S.rects&&(c=S.rects===!0?await r.getElementRects({reference:e,floating:t,strategy:s}):S.rects),{x:u,y:d}=On(c,f,a)),p=-1)}return{x:u,y:d,placement:f,strategy:s,middlewareData:h}},$i=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,o;const{placement:s,middlewareData:i,rects:r,initialPlacement:l,platform:a,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:_=!0,...p}=we(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const g=_t(s),y=lt(l),b=_t(l)===l,x=await(a.isRTL==null?void 0:a.isRTL(c.floating)),P=f||(b||!_?[fe(l)]:xi(l)),S=m!=="none";!f&&S&&P.push(...Pi(l,_,m,x));const z=[l,...P],I=await a.detectOverflow(t,p),$=[];let R=((o=i.flip)==null?void 0:o.overflows)||[];if(u&&$.push(I[g]),d){const j=vi(s,r,x);$.push(I[j[0]],I[j[1]])}if(R=[...R,{placement:s,overflows:$}],!$.every(j=>j<=0)){var tt,et;const j=(((tt=i.flip)==null?void 0:tt.index)||0)+1,rt=z[j];if(rt&&(!(d==="alignment"?y!==lt(rt):!1)||R.every(F=>lt(F.placement)===y?F.overflows[0]>0:!0)))return{data:{index:j,overflows:R},reset:{placement:rt}};let D=(et=R.filter(L=>L.overflows[0]<=0).sort((L,F)=>L.overflows[1]-F.overflows[1])[0])==null?void 0:et.placement;if(!D)switch(h){case"bestFit":{var ut;const L=(ut=R.filter(F=>{if(S){const E=lt(F.placement);return E===y||E==="y"}return!0}).map(F=>[F.placement,F.overflows.filter(E=>E>0).reduce((E,wt)=>E+wt,0)]).sort((F,E)=>F[1]-E[1])[0])==null?void 0:ut[0];L&&(D=L);break}case"initialPlacement":D=l;break}if(s!==D)return{reset:{placement:D}}}return{}}}},ki=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:o,placement:s,platform:i}=t,{mainAxis:r=!0,crossAxis:l=!1,limiter:a={fn:g=>{let{x:y,y:b}=g;return{x:y,y:b}}},...c}=we(e,t),u={x:n,y:o},d=await i.detectOverflow(t,c),f=lt(_t(s)),h=ks(f);let m=u[h],_=u[f];if(r){const g=h==="y"?"top":"left",y=h==="y"?"bottom":"right",b=m+d[g],x=m-d[y];m=Tn(b,m,x)}if(l){const g=f==="y"?"top":"left",y=f==="y"?"bottom":"right",b=_+d[g],x=_-d[y];_=Tn(b,_,x)}const p=a.fn({...t,[h]:m,[f]:_});return{...p,data:{x:p.x-n,y:p.y-o,enabled:{[h]:r,[f]:l}}}}}},Li=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,o;const{placement:s,rects:i,platform:r,elements:l}=t,{apply:a=()=>{},...c}=we(e,t),u=await r.detectOverflow(t,c),d=_t(s),f=ve(s),h=lt(s)==="y",{width:m,height:_}=i.floating;let p,g;d==="top"||d==="bottom"?(p=d,g=f===(await(r.isRTL==null?void 0:r.isRTL(l.floating))?"start":"end")?"left":"right"):(g=d,p=f==="end"?"top":"bottom");const y=_-u.top-u.bottom,b=m-u.left-u.right,x=St(_-u[p],y),P=St(m-u[g],b),S=!t.middlewareData.shift;let z=x,I=P;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(I=b),(o=t.middlewareData.shift)!=null&&o.enabled.y&&(z=y),S&&!f){const R=H(u.left,0),tt=H(u.right,0),et=H(u.top,0),ut=H(u.bottom,0);h?I=m-2*(R!==0||tt!==0?R+tt:H(u.left,u.right)):z=_-2*(et!==0||ut!==0?et+ut:H(u.top,u.bottom))}await a({...t,availableWidth:I,availableHeight:z});const $=await r.getDimensions(l.floating);return m!==$.width||_!==$.height?{reset:{rects:!0}}:{}}}};function xe(){return typeof window<"u"}function At(e){return Ns(e)?(e.nodeName||"").toLowerCase():"#document"}function V(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Q(e){var t;return(t=(Ns(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Ns(e){return xe()?e instanceof Node||e instanceof V(e).Node:!1}function Y(e){return xe()?e instanceof Element||e instanceof V(e).Element:!1}function K(e){return xe()?e instanceof HTMLElement||e instanceof V(e).HTMLElement:!1}function $n(e){return!xe()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof V(e).ShadowRoot}const Ri=new Set(["inline","contents"]);function Gt(e){const{overflow:t,overflowX:n,overflowY:o,display:s}=G(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+n)&&!Ri.has(s)}const Ni=new Set(["table","td","th"]);function Mi(e){return Ni.has(At(e))}const Ii=[":popover-open",":modal"];function Ce(e){return Ii.some(t=>{try{return e.matches(t)}catch{return!1}})}const Di=["transform","translate","scale","rotate","perspective"],Fi=["transform","translate","scale","rotate","perspective","filter"],Bi=["paint","layout","strict","content"];function un(e){const t=dn(),n=Y(e)?G(e):e;return Di.some(o=>n[o]?n[o]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||Fi.some(o=>(n.willChange||"").includes(o))||Bi.some(o=>(n.contain||"").includes(o))}function Hi(e){let t=ct(e);for(;K(t)&&!Pt(t);){if(un(t))return t;if(Ce(t))return null;t=ct(t)}return null}function dn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Vi=new Set(["html","body","#document"]);function Pt(e){return Vi.has(At(e))}function G(e){return V(e).getComputedStyle(e)}function Ee(e){return Y(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ct(e){if(At(e)==="html")return e;const t=e.assignedSlot||e.parentNode||$n(e)&&e.host||Q(e);return $n(t)?t.host:t}function Ms(e){const t=ct(e);return Pt(t)?e.ownerDocument?e.ownerDocument.body:e.body:K(t)&&Gt(t)?t:Ms(t)}function Vt(e,t,n){var o;t===void 0&&(t=[]),n===void 0&&(n=!0);const s=Ms(e),i=s===((o=e.ownerDocument)==null?void 0:o.body),r=V(s);if(i){const l=Xe(r);return t.concat(r,r.visualViewport||[],Gt(s)?s:[],l&&n?Vt(l):[])}return t.concat(s,Vt(s,[],n))}function Xe(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Is(e){const t=G(e);let n=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const s=K(e),i=s?e.offsetWidth:n,r=s?e.offsetHeight:o,l=he(n)!==i||he(o)!==r;return l&&(n=i,o=r),{width:n,height:o,$:l}}function hn(e){return Y(e)?e:e.contextElement}function vt(e){const t=hn(e);if(!K(t))return J(1);const n=t.getBoundingClientRect(),{width:o,height:s,$:i}=Is(t);let r=(i?he(n.width):n.width)/o,l=(i?he(n.height):n.height)/s;return(!r||!Number.isFinite(r))&&(r=1),(!l||!Number.isFinite(l))&&(l=1),{x:r,y:l}}const Ui=J(0);function Ds(e){const t=V(e);return!dn()||!t.visualViewport?Ui:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ji(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==V(e)?!1:t}function gt(e,t,n,o){t===void 0&&(t=!1),n===void 0&&(n=!1);const s=e.getBoundingClientRect(),i=hn(e);let r=J(1);t&&(o?Y(o)&&(r=vt(o)):r=vt(e));const l=ji(i,n,o)?Ds(i):J(0);let a=(s.left+l.x)/r.x,c=(s.top+l.y)/r.y,u=s.width/r.x,d=s.height/r.y;if(i){const f=V(i),h=o&&Y(o)?V(o):o;let m=f,_=Xe(m);for(;_&&o&&h!==m;){const p=vt(_),g=_.getBoundingClientRect(),y=G(_),b=g.left+(_.clientLeft+parseFloat(y.paddingLeft))*p.x,x=g.top+(_.clientTop+parseFloat(y.paddingTop))*p.y;a*=p.x,c*=p.y,u*=p.x,d*=p.y,a+=b,c+=x,m=V(_),_=Xe(m)}}return pe({width:u,height:d,x:a,y:c})}function Se(e,t){const n=Ee(e).scrollLeft;return t?t.left+n:gt(Q(e)).left+n}function Fs(e,t){const n=e.getBoundingClientRect(),o=n.left+t.scrollLeft-Se(e,n),s=n.top+t.scrollTop;return{x:o,y:s}}function qi(e){let{elements:t,rect:n,offsetParent:o,strategy:s}=e;const i=s==="fixed",r=Q(o),l=t?Ce(t.floating):!1;if(o===r||l&&i)return n;let a={scrollLeft:0,scrollTop:0},c=J(1);const u=J(0),d=K(o);if((d||!d&&!i)&&((At(o)!=="body"||Gt(r))&&(a=Ee(o)),K(o))){const h=gt(o);c=vt(o),u.x=h.x+o.clientLeft,u.y=h.y+o.clientTop}const f=r&&!d&&!i?Fs(r,a):J(0);return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-a.scrollLeft*c.x+u.x+f.x,y:n.y*c.y-a.scrollTop*c.y+u.y+f.y}}function Wi(e){return Array.from(e.getClientRects())}function Yi(e){const t=Q(e),n=Ee(e),o=e.ownerDocument.body,s=H(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),i=H(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+Se(e);const l=-n.scrollTop;return G(o).direction==="rtl"&&(r+=H(t.clientWidth,o.clientWidth)-s),{width:s,height:i,x:r,y:l}}const kn=25;function Gi(e,t){const n=V(e),o=Q(e),s=n.visualViewport;let i=o.clientWidth,r=o.clientHeight,l=0,a=0;if(s){i=s.width,r=s.height;const u=dn();(!u||u&&t==="fixed")&&(l=s.offsetLeft,a=s.offsetTop)}const c=Se(o);if(c<=0){const u=o.ownerDocument,d=u.body,f=getComputedStyle(d),h=u.compatMode==="CSS1Compat"&&parseFloat(f.marginLeft)+parseFloat(f.marginRight)||0,m=Math.abs(o.clientWidth-d.clientWidth-h);m<=kn&&(i-=m)}else c<=kn&&(i+=c);return{width:i,height:r,x:l,y:a}}const Xi=new Set(["absolute","fixed"]);function Ji(e,t){const n=gt(e,!0,t==="fixed"),o=n.top+e.clientTop,s=n.left+e.clientLeft,i=K(e)?vt(e):J(1),r=e.clientWidth*i.x,l=e.clientHeight*i.y,a=s*i.x,c=o*i.y;return{width:r,height:l,x:a,y:c}}function Ln(e,t,n){let o;if(t==="viewport")o=Gi(e,n);else if(t==="document")o=Yi(Q(e));else if(Y(t))o=Ji(t,n);else{const s=Ds(e);o={x:t.x-s.x,y:t.y-s.y,width:t.width,height:t.height}}return pe(o)}function Bs(e,t){const n=ct(e);return n===t||!Y(n)||Pt(n)?!1:G(n).position==="fixed"||Bs(n,t)}function Zi(e,t){const n=t.get(e);if(n)return n;let o=Vt(e,[],!1).filter(l=>Y(l)&&At(l)!=="body"),s=null;const i=G(e).position==="fixed";let r=i?ct(e):e;for(;Y(r)&&!Pt(r);){const l=G(r),a=un(r);!a&&l.position==="fixed"&&(s=null),(i?!a&&!s:!a&&l.position==="static"&&!!s&&Xi.has(s.position)||Gt(r)&&!a&&Bs(e,r))?o=o.filter(u=>u!==r):s=l,r=ct(r)}return t.set(e,o),o}function Ki(e){let{element:t,boundary:n,rootBoundary:o,strategy:s}=e;const r=[...n==="clippingAncestors"?Ce(t)?[]:Zi(t,this._c):[].concat(n),o],l=r[0],a=r.reduce((c,u)=>{const d=Ln(t,u,s);return c.top=H(d.top,c.top),c.right=St(d.right,c.right),c.bottom=St(d.bottom,c.bottom),c.left=H(d.left,c.left),c},Ln(t,l,s));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function Qi(e){const{width:t,height:n}=Is(e);return{width:t,height:n}}function tr(e,t,n){const o=K(t),s=Q(t),i=n==="fixed",r=gt(e,!0,i,t);let l={scrollLeft:0,scrollTop:0};const a=J(0);function c(){a.x=Se(s)}if(o||!o&&!i)if((At(t)!=="body"||Gt(s))&&(l=Ee(t)),o){const h=gt(t,!0,i,t);a.x=h.x+t.clientLeft,a.y=h.y+t.clientTop}else s&&c();i&&!o&&s&&c();const u=s&&!o&&!i?Fs(s,l):J(0),d=r.left+l.scrollLeft-a.x-u.x,f=r.top+l.scrollTop-a.y-u.y;return{x:d,y:f,width:r.width,height:r.height}}function Fe(e){return G(e).position==="static"}function Rn(e,t){if(!K(e)||G(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return Q(e)===n&&(n=n.ownerDocument.body),n}function Hs(e,t){const n=V(e);if(Ce(e))return n;if(!K(e)){let s=ct(e);for(;s&&!Pt(s);){if(Y(s)&&!Fe(s))return s;s=ct(s)}return n}let o=Rn(e,t);for(;o&&Mi(o)&&Fe(o);)o=Rn(o,t);return o&&Pt(o)&&Fe(o)&&!un(o)?n:o||Hi(e)||n}const er=async function(e){const t=this.getOffsetParent||Hs,n=this.getDimensions,o=await n(e.floating);return{reference:tr(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function nr(e){return G(e).direction==="rtl"}const sr={convertOffsetParentRelativeRectToViewportRelativeRect:qi,getDocumentElement:Q,getClippingRect:Ki,getOffsetParent:Hs,getElementRects:er,getClientRects:Wi,getDimensions:Qi,getScale:vt,isElement:Y,isRTL:nr};function Vs(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function or(e,t){let n=null,o;const s=Q(e);function i(){var l;clearTimeout(o),(l=n)==null||l.disconnect(),n=null}function r(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),i();const c=e.getBoundingClientRect(),{left:u,top:d,width:f,height:h}=c;if(l||t(),!f||!h)return;const m=Zt(d),_=Zt(s.clientWidth-(u+f)),p=Zt(s.clientHeight-(d+h)),g=Zt(u),b={rootMargin:-m+"px "+-_+"px "+-p+"px "+-g+"px",threshold:H(0,St(1,a))||1};let x=!0;function P(S){const z=S[0].intersectionRatio;if(z!==a){if(!x)return r();z?r(!1,z):o=setTimeout(()=>{r(!1,1e-7)},1e3)}z===1&&!Vs(c,e.getBoundingClientRect())&&r(),x=!1}try{n=new IntersectionObserver(P,{...b,root:s.ownerDocument})}catch{n=new IntersectionObserver(P,b)}n.observe(e)}return r(!0),i}function ir(e,t,n,o){o===void 0&&(o={});const{ancestorScroll:s=!0,ancestorResize:i=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=o,c=hn(e),u=s||i?[...c?Vt(c):[],...Vt(t)]:[];u.forEach(g=>{s&&g.addEventListener("scroll",n,{passive:!0}),i&&g.addEventListener("resize",n)});const d=c&&l?or(c,n):null;let f=-1,h=null;r&&(h=new ResizeObserver(g=>{let[y]=g;y&&y.target===c&&h&&(h.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var b;(b=h)==null||b.observe(t)})),n()}),c&&!a&&h.observe(c),h.observe(t));let m,_=a?gt(e):null;a&&p();function p(){const g=gt(e);_&&!Vs(_,g)&&n(),_=g,m=requestAnimationFrame(p)}return n(),()=>{var g;u.forEach(y=>{s&&y.removeEventListener("scroll",n),i&&y.removeEventListener("resize",n)}),d?.(),(g=h)==null||g.disconnect(),h=null,a&&cancelAnimationFrame(m)}}const rr=ki,lr=$i,lu=Li,ar=(e,t,n)=>{const o=new Map,s={platform:sr,...n},i={...s.platform,_c:o};return Oi(e,t,{...s,platform:i})},cr=[lr({fallbackAxisSideDirection:"start",crossAxis:!1}),rr()],ur=({placement:e="bottom-start",strategy:t,middleware:n=cr}={})=>{const[o,s]=nt(),[i,r]=nt(),[l,a]=nt();return T(()=>{if(!o||!(i instanceof HTMLElement)){a(void 0);return}return ir(o,i,()=>ar(o,i,{placement:e,strategy:t,middleware:n}).then(a))},[o,i,e,t,n]),{setReference:s,setFloating:r,styles:A(()=>l?{left:`${l.x}px`,top:`${l.y}px`}:{},[l?.x,l?.y])}},Pe=e=>{const t=A(()=>({}),[]);return A(()=>Object.assign(t,e),[t,...Object.values(e)])},Nn=e=>e.matches(":focus-within")?!0:e.shadowRoot?.querySelector("[popover]")?.matches(":focus-within")??!1,dr=({disabled:e,onFocus:t})=>{const[n,o]=nt(),{focused:s,closed:i}=n||{},r=s&&!e,l=Pe({closed:i,onFocus:t}),a=v(u=>o(d=>({...d,closed:u})),[]),c=v(u=>{const d=u.currentTarget;return Nn(d)?o(f=>({focused:!0,closed:!f?.closed})):d.focus()},[]);return T(()=>{if(!r)return;const u=d=>{if(d.defaultPrevented)return;const{closed:f}=l;d.key==="Escape"&&!f?(d.preventDefault(),a(!0)):["ArrowUp","Up"].includes(d.key)&&f&&(d.preventDefault(),a(!1))};return document.addEventListener("keydown",u,!0),()=>document.removeEventListener("keydown",u,!0)},[r]),{focused:r,active:r&&!i,setClosed:a,onToggle:c,onFocus:v(u=>{const d=Nn(u.currentTarget);o({focused:d}),l.onFocus?.(d)},[l])}},hr=e=>{const t=dr(e),{onFocus:n}=t,o=mt();return T(()=>{e.setAttribute("tabindex","0");const s=r=>{clearTimeout(o.current),n(r)},i=r=>{clearTimeout(o.current);const l=r.currentTarget;o.current=setTimeout(()=>n({currentTarget:l}),30)};return e.addEventListener("focusin",s),e.addEventListener("focusout",i),()=>{clearTimeout(o.current),e.removeEventListener("focusin",s),e.removeEventListener("focusout",i)}},[n]),t},fr=e=>e.preventDefault(),pr=U`
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
`,mr=e=>{const{placement:t,strategy:n,middleware:o,render:s}=e,{active:i,onToggle:r}=hr(e),{styles:l,setReference:a,setFloating:c}=ur({placement:t,strategy:n,middleware:o});return w` <div class="anchor" part="anchor" ${Et(a)}>
			<button
				@mousedown=${fr}
				@click=${r}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		${q(i,()=>w`<cosmoz-dropdown-content
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					style="${pi(l)}"
					@connected=${u=>u.target.showPopover?.()}
					${Et(c)}
					><slot></slot>${de([s],()=>s?.()||Z)}</cosmoz-dropdown-content
				> `)}`};customElements.define("cosmoz-dropdown",k(mr,{styleSheets:[pr]}));const _r=U`
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
`,gr=()=>w` <slot></slot> `;customElements.define("cosmoz-dropdown-list",k(gr,{styleSheets:[_r]}));const yr=({placement:e})=>w` <cosmoz-dropdown
		.placement=${e}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;customElements.define("cosmoz-dropdown-menu",k(yr));const br=({host:e,popoverRef:t,disabled:n,openOnHover:o,openOnFocus:s,open:i,close:r})=>{const l=mt(),a=()=>clearTimeout(l.current),c=()=>{clearTimeout(l.current),l.current=setTimeout(()=>{const d=t.current;o&&(e.matches(":hover")||d?.matches(":hover"))||e.matches(":focus-within")||d?.matches(":focus-within")||r()},100)},u=()=>{n||(a(),i())};return T(()=>{if(!(!o||n))return e.addEventListener("pointerenter",u),e.addEventListener("pointerleave",c),()=>{a(),e.removeEventListener("pointerenter",u),e.removeEventListener("pointerleave",c)}},[o,n,e]),T(()=>{if(!(!s||n))return e.addEventListener("focusin",u),e.addEventListener("focusout",c),()=>{a(),e.removeEventListener("focusin",u),e.removeEventListener("focusout",c)}},[s,n,e]),{scheduleClose:c,cancelClose:a}},wr=e=>{if(e.newState!=="open")return;const o=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const s of o){const i=s.matches("[autofocus]")?s:s.querySelector("[autofocus]");if(i instanceof HTMLElement){i.focus();break}}},vr=U`
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
`,xr=e=>{const{placement:t="bottom span-right",disabled:n,passthrough:o,openOnHover:s,openOnFocus:i}=e,r=mt(),[l,a]=Yt("opened",!1),c=v(()=>{n||(a(!0),r.current?.showPopover?.())},[n]),u=v(()=>{a(!1),r.current?.hidePopover?.()},[]),d=v(()=>{if(n)return;r.current?.matches(":popover-open")?u():c()},[n]);T(()=>{const p=r.current;p&&(l?p.showPopover?.():p.hidePopover?.())},[l]),T(()=>{e.toggleAttribute("opened",!!l)},[l]);const{scheduleClose:f,cancelClose:h}=br({host:e,popoverRef:r,disabled:n,openOnHover:s,openOnFocus:i,open:c,close:u}),m=i?c:d,_=v(p=>{wr(p),a(p.newState==="open"),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:p.newState,oldState:p.oldState,composed:!0}))},[]);return w`
		<slot name="button" @click=${m}></slot>
		${n&&o?w`<slot></slot>`:w`<div
					popover
					style="position-area: ${t}"
					@toggle=${_}
					@select=${u}
					@focusout=${f}
					@focusin=${h}
					${Et(p=>p&&(r.current=p))}
				>
					<slot></slot>
				</div>`}
	`};customElements.define("cosmoz-dropdown-next",k(xr,{styleSheets:[vr],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));function Cr(e){return()=>e}const Er=Cr(),Us=Er,Tt=e=>e,Sr=(e,...t)=>typeof e=="function"?e(...t):e,js=ui(()=>Us);customElements.define("cosmoz-keybinding-provider",js.Provider);const xt=(e,t)=>{const n=As(js),o=Pe(e);T(()=>n(o),t)};window.JSCompiler_renameProperty=function(e,t){return e};let Pr=/(url\()([^)]*)(\))/g,Tr=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,Kt,B;function Bt(e,t){if(e&&Tr.test(e)||e==="//")return e;if(Kt===void 0){Kt=!1;try{const n=new URL("b","http://a");n.pathname="c%20d",Kt=n.href==="http://a/c%20d"}catch{}}if(t||(t=document.baseURI||window.location.href),Kt)try{return new URL(e,t).href}catch{return e}return B||(B=document.implementation.createHTMLDocument("temp"),B.base=B.createElement("base"),B.head.appendChild(B.base),B.anchor=B.createElement("a"),B.body.appendChild(B.anchor)),B.base.href=t,B.anchor.href=e,B.anchor.href||e}function fn(e,t){return e.replace(Pr,function(n,o,s,i){return o+"'"+Bt(s.replace(/["']/g,""),t)+"'"+i})}function pn(e){return e.substring(0,e.lastIndexOf("/")+1)}const Ar=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const zr=Ar&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const e=new CSSStyleSheet;e.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch{return!1}})();let Or=window.Polymer&&window.Polymer.rootPath||pn(document.baseURI||window.location.href),me=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let Je=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,$r=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,kr=window.Polymer&&window.Polymer.legacyOptimizations||!1,Lr=window.Polymer&&window.Polymer.legacyWarnings||!1,Rr=window.Polymer&&window.Polymer.syncInitialRender||!1,Ze=window.Polymer&&window.Polymer.legacyUndefined||!1,Nr=window.Polymer&&window.Polymer.orderedComputed||!1,Mn=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Mr=window.Polymer&&window.Polymer.fastDomIf||!1;window.Polymer&&window.Polymer.suppressTemplateNotifications;window.Polymer&&window.Polymer.legacyNoObservedAttributes;let Ir=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;let Dr=0;const zt=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let n=Dr++;function o(s){let i=s.__mixinSet;if(i&&i[n])return s;let r=t,l=r.get(s);if(!l){l=e(s),r.set(s,l);let a=Object.create(l.__mixinSet||i||null);a[n]=!0,l.__mixinSet=a}return l}return o};let mn={},qs={};function In(e,t){mn[e]=qs[e.toLowerCase()]=t}function Dn(e){return mn[e]||qs[e.toLowerCase()]}function Fr(e){e.querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}class Ut extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,n){if(t){let o=Dn(t);return o&&n?o.querySelector(n):o}return null}attributeChangedCallback(t,n,o,s){n!==o&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,n=Bt(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=pn(n)}return this.__assetpath}register(t){if(t=t||this.id,t){if(Je&&Dn(t)!==void 0)throw In(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,In(t,this),Fr(this)}}}Ut.prototype.modules=mn;customElements.define("dom-module",Ut);const Br="link[rel=import][type~=css]",Hr="include",Fn="shady-unscoped";function Ws(e){return Ut.import(e)}function Bn(e){let t=e.body?e.body:e;const n=fn(t.textContent,e.baseURI),o=document.createElement("style");return o.textContent=n,o}function Vr(e){const t=e.trim().split(/\s+/),n=[];for(let o=0;o<t.length;o++)n.push(...Ur(t[o]));return n}function Ur(e){const t=Ws(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(t._styles===void 0){const n=[];n.push(...Gs(t));const o=t.querySelector("template");o&&n.push(...Ys(o,t.assetpath)),t._styles=n}return t._styles}function Ys(e,t){if(!e._styles){const n=[],o=e.content.querySelectorAll("style");for(let s=0;s<o.length;s++){let i=o[s],r=i.getAttribute(Hr);r&&n.push(...Vr(r).filter(function(l,a,c){return c.indexOf(l)===a})),t&&(i.textContent=fn(i.textContent,t)),n.push(i)}e._styles=n}return e._styles}function jr(e){let t=Ws(e);return t?Gs(t):[]}function Gs(e){const t=[],n=e.querySelectorAll(Br);for(let o=0;o<n.length;o++){let s=n[o];if(s.import){const i=s.import,r=s.hasAttribute(Fn);if(r&&!i._unscopedStyle){const l=Bn(i);l.setAttribute(Fn,""),i._unscopedStyle=l}else i._style||(i._style=Bn(i));t.push(r?i._unscopedStyle:i._style)}}return t}const ft=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;function Ke(e){return e.indexOf(".")>=0}function bt(e){let t=e.indexOf(".");return t===-1?e:e.slice(0,t)}function qr(e,t){return e.indexOf(t+".")===0}function _e(e,t){return t.indexOf(e+".")===0}function ge(e,t,n){return t+n.slice(e.length)}function Mt(e){if(Array.isArray(e)){let t=[];for(let n=0;n<e.length;n++){let o=e[n].toString().split(".");for(let s=0;s<o.length;s++)t.push(o[s])}return t.join(".")}else return e}function Xs(e){return Array.isArray(e)?Mt(e).split("."):e.toString().split(".")}function N(e,t,n){let o=e,s=Xs(t);for(let i=0;i<s.length;i++){if(!o)return;let r=s[i];o=o[r]}return n&&(n.path=s.join(".")),o}function Hn(e,t,n){let o=e,s=Xs(t),i=s[s.length-1];if(s.length>1){for(let r=0;r<s.length-1;r++){let l=s[r];if(o=o[l],!o)return}o[i]=n}else o[t]=n;return s.join(".")}const ye={},Wr=/-[a-z]/g,Yr=/([A-Z])/g;function Js(e){return ye[e]||(ye[e]=e.indexOf("-")<0?e:e.replace(Wr,t=>t[1].toUpperCase()))}function Te(e){return ye[e]||(ye[e]=e.replace(Yr,"-$1").toLowerCase())}let Gr=0,Zs=0,Ct=[],Xr=0,Qe=!1,Ks=document.createTextNode("");new window.MutationObserver(Jr).observe(Ks,{characterData:!0});function Jr(){Qe=!1;const e=Ct.length;for(let t=0;t<e;t++){let n=Ct[t];if(n)try{n()}catch(o){setTimeout(()=>{throw o})}}Ct.splice(0,e),Zs+=e}const au={after(e){return{run(t){return window.setTimeout(t,e)},cancel(t){window.clearTimeout(t)}}},run(e,t){return window.setTimeout(e,t)},cancel(e){window.clearTimeout(e)}},Zr={run(e){return Qe||(Qe=!0,Ks.textContent=Xr++),Ct.push(e),Gr++},cancel(e){const t=e-Zs;if(t>=0){if(!Ct[t])throw new Error("invalid async handle: "+e);Ct[t]=null}}};const Kr=Zr,Qs=zt(e=>{class t extends e{static createProperties(o){const s=this.prototype;for(let i in o)i in s||s._createPropertyAccessor(i)}static attributeNameForProperty(o){return o.toLowerCase()}static typeForProperty(o){}_createPropertyAccessor(o,s){this._addPropertyToAttributeMap(o),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[o]||(this.__dataHasAccessor[o]=!0,this._definePropertyAccessor(o,s))}_addPropertyToAttributeMap(o){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let s=this.__dataAttributes[o];return s||(s=this.constructor.attributeNameForProperty(o),this.__dataAttributes[s]=o),s}_definePropertyAccessor(o,s){Object.defineProperty(this,o,{get(){return this.__data[o]},set:s?function(){}:function(i){this._setPendingProperty(o,i,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let o in this.__dataHasAccessor)this.hasOwnProperty(o)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[o]=this[o],delete this[o])}_initializeInstanceProperties(o){Object.assign(this,o)}_setProperty(o,s){this._setPendingProperty(o,s)&&this._invalidateProperties()}_getProperty(o){return this.__data[o]}_setPendingProperty(o,s,i){let r=this.__data[o],l=this._shouldPropertyChange(o,s,r);return l&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(o in this.__dataOld)&&(this.__dataOld[o]=r),this.__data[o]=s,this.__dataPending[o]=s),l}_isPropertyPending(o){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(o))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Kr.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const o=this.__data,s=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(o,s,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(o,s,i)),this.__dataCounter--}_shouldPropertiesChange(o,s,i){return!!s}_propertiesChanged(o,s,i){}_shouldPropertyChange(o,s,i){return i!==s&&(i===i||s===s)}attributeChangedCallback(o,s,i,r){s!==i&&this._attributeToProperty(o,i),super.attributeChangedCallback&&super.attributeChangedCallback(o,s,i,r)}_attributeToProperty(o,s,i){if(!this.__serializing){const r=this.__dataAttributes,l=r&&r[o]||o;this[l]=this._deserializeValue(s,i||this.constructor.typeForProperty(l))}}_propertyToAttribute(o,s,i){this.__serializing=!0,i=arguments.length<3?this[o]:i,this._valueToNodeAttribute(this,i,s||this.constructor.attributeNameForProperty(o)),this.__serializing=!1}_valueToNodeAttribute(o,s,i){const r=this._serializeValue(s);(i==="class"||i==="name"||i==="slot")&&(o=ft(o)),r===void 0?o.removeAttribute(i):o.setAttribute(i,r===""&&window.trustedTypes?window.trustedTypes.emptyScript:r)}_serializeValue(o){return typeof o==="boolean"?o?"":void 0:o?.toString()}_deserializeValue(o,s){switch(s){case Boolean:return o!==null;case Number:return Number(o);default:return o}}}return t});const to={};let Qt=HTMLElement.prototype;for(;Qt;){let e=Object.getOwnPropertyNames(Qt);for(let t=0;t<e.length;t++)to[e[t]]=!0;Qt=Object.getPrototypeOf(Qt)}const Qr=window.trustedTypes?e=>trustedTypes.isHTML(e)||trustedTypes.isScript(e)||trustedTypes.isScriptURL(e):()=>!1;function tl(e,t){if(!to[t]){let n=e[t];n!==void 0&&(e.__data?e._setPendingProperty(t,n):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=n))}}const el=zt(e=>{const t=Qs(e);class n extends t{static createPropertiesForAttributes(){let s=this.observedAttributes;for(let i=0;i<s.length;i++)this.prototype._createPropertyAccessor(Js(s[i]))}static attributeNameForProperty(s){return Te(s)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(s){for(let i in s)this._setProperty(i,s[i])}_ensureAttribute(s,i){const r=this;r.hasAttribute(s)||this._valueToNodeAttribute(r,i,s)}_serializeValue(s){switch(typeof s){case"object":if(s instanceof Date)return s.toString();if(s){if(Qr(s))return s;try{return JSON.stringify(s)}catch{return""}}default:return super._serializeValue(s)}}_deserializeValue(s,i){let r;switch(i){case Object:try{r=JSON.parse(s)}catch{r=s}break;case Array:try{r=JSON.parse(s)}catch{r=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${s}`)}break;case Date:r=isNaN(s)?String(s):Number(s),r=new Date(r);break;default:r=super._deserializeValue(s,i);break}return r}_definePropertyAccessor(s,i){tl(this,s),super._definePropertyAccessor(s,i)}_hasAccessor(s){return this.__dataHasAccessor&&this.__dataHasAccessor[s]}_isPropertyPending(s){return!!(this.__dataPending&&s in this.__dataPending)}}return n});const nl={"dom-if":!0,"dom-repeat":!0};let Vn=!1,Un=!1;function sl(){if(!Vn){Vn=!0;const e=document.createElement("textarea");e.placeholder="a",Un=e.placeholder===e.textContent}return Un}function ol(e){sl()&&e.localName==="textarea"&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}const il=(()=>{const e=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(t,n,o)=>{const s=n.getAttribute(o);if(e&&o.startsWith("on-")){t.setAttribute(o,e.createScript(s,o));return}t.setAttribute(o,s)}})();function rl(e){let t=e.getAttribute("is");if(t&&nl[t]){let n=e;for(n.removeAttribute("is"),e=n.ownerDocument.createElement(t),n.parentNode.replaceChild(e,n),e.appendChild(n);n.attributes.length;){const{name:o}=n.attributes[0];il(e,n,o),n.removeAttribute(o)}}return e}function eo(e,t){let n=t.parentInfo&&eo(e,t.parentInfo);if(n){for(let o=n.firstChild,s=0;o;o=o.nextSibling)if(t.parentIndex===s++)return o}else return e}function ll(e,t,n,o){o.id&&(t[o.id]=n)}function al(e,t,n){if(n.events&&n.events.length)for(let o=0,s=n.events,i;o<s.length&&(i=s[o]);o++)e._addMethodEventListenerToNode(t,i.name,i.value,e)}function cl(e,t,n,o){n.templateInfo&&(t._templateInfo=n.templateInfo,t._parentTemplateInfo=o)}function ul(e,t,n){return e=e._methodHost||e,function(s){e[n]?e[n](s,s.detail):console.warn("listener method `"+n+"` not defined")}}const dl=zt(e=>{class t extends e{static _parseTemplate(o,s){if(!o._templateInfo){let i=o._templateInfo={};i.nodeInfoList=[],i.nestedTemplate=!!s,i.stripWhiteSpace=s&&s.stripWhiteSpace||o.hasAttribute&&o.hasAttribute("strip-whitespace"),this._parseTemplateContent(o,i,{parent:null})}return o._templateInfo}static _parseTemplateContent(o,s,i){return this._parseTemplateNode(o.content,s,i)}static _parseTemplateNode(o,s,i){let r=!1,l=o;return l.localName=="template"&&!l.hasAttribute("preserve-content")?r=this._parseTemplateNestedTemplate(l,s,i)||r:l.localName==="slot"&&(s.hasInsertionPoint=!0),ol(l),l.firstChild&&this._parseTemplateChildNodes(l,s,i),l.hasAttributes&&l.hasAttributes()&&(r=this._parseTemplateNodeAttributes(l,s,i)||r),r||i.noted}static _parseTemplateChildNodes(o,s,i){if(!(o.localName==="script"||o.localName==="style"))for(let r=o.firstChild,l=0,a;r;r=a){if(r.localName=="template"&&(r=rl(r)),a=r.nextSibling,r.nodeType===Node.TEXT_NODE){let u=a;for(;u&&u.nodeType===Node.TEXT_NODE;)r.textContent+=u.textContent,a=u.nextSibling,o.removeChild(u),u=a;if(s.stripWhiteSpace&&!r.textContent.trim()){o.removeChild(r);continue}}let c={parentIndex:l,parentInfo:i};this._parseTemplateNode(r,s,c)&&(c.infoIndex=s.nodeInfoList.push(c)-1),r.parentNode&&l++}}static _parseTemplateNestedTemplate(o,s,i){let r=o,l=this._parseTemplate(r,s);return(l.content=r.content.ownerDocument.createDocumentFragment()).appendChild(r.content),i.templateInfo=l,!0}static _parseTemplateNodeAttributes(o,s,i){let r=!1,l=Array.from(o.attributes);for(let a=l.length-1,c;c=l[a];a--)r=this._parseTemplateNodeAttribute(o,s,i,c.name,c.value)||r;return r}static _parseTemplateNodeAttribute(o,s,i,r,l){return r.slice(0,3)==="on-"?(o.removeAttribute(r),i.events=i.events||[],i.events.push({name:r.slice(3),value:l}),!0):r==="id"?(i.id=l,!0):!1}static _contentForTemplate(o){let s=o._templateInfo;return s&&s.content||o.content}_stampTemplate(o,s){o&&!o.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(o),s=s||this.constructor._parseTemplate(o);let i=s.nodeInfoList,r=s.content||o.content,l=document.importNode(r,!0);l.__noInsertionPoint=!s.hasInsertionPoint;let a=l.nodeList=new Array(i.length);l.$={};for(let c=0,u=i.length,d;c<u&&(d=i[c]);c++){let f=a[c]=eo(l,d);ll(this,l.$,f,d),cl(this,f,d,s),al(this,f,d)}return l=l,l}_addMethodEventListenerToNode(o,s,i,r){r=r||o;let l=ul(r,s,i);return this._addEventListenerToNode(o,s,l),l}_addEventListenerToNode(o,s,i){o.addEventListener(s,i)}_removeEventListenerFromNode(o,s,i){o.removeEventListener(s,i)}}return t});let jt=0;const qt=[],C={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},no="__computeInfo",hl=/[A-Z]/;function Be(e,t,n){let o=e[t];if(!o)o=e[t]={};else if(!e.hasOwnProperty(t)&&(o=e[t]=Object.create(e[t]),n))for(let s in o){let i=o[s],r=o[s]=Array(i.length);for(let l=0;l<i.length;l++)r[l]=i[l]}return o}function It(e,t,n,o,s,i){if(t){let r=!1;const l=jt++;for(let a in n){let c=s?bt(a):a,u=t[c];if(u)for(let d=0,f=u.length,h;d<f&&(h=u[d]);d++)(!h.info||h.info.lastRun!==l)&&(!s||_n(a,h.trigger))&&(h.info&&(h.info.lastRun=l),h.fn(e,a,n,o,h.info,s,i),r=!0)}return r}return!1}function fl(e,t,n,o,s,i,r,l){let a=!1,c=r?bt(o):o,u=t[c];if(u)for(let d=0,f=u.length,h;d<f&&(h=u[d]);d++)(!h.info||h.info.lastRun!==n)&&(!r||_n(o,h.trigger))&&(h.info&&(h.info.lastRun=n),h.fn(e,o,s,i,h.info,r,l),a=!0);return a}function _n(e,t){if(t){let n=t.name;return n==e||!!(t.structured&&qr(n,e))||!!(t.wildcard&&_e(n,e))}else return!0}function jn(e,t,n,o,s){let i=typeof s.method=="string"?e[s.method]:s.method,r=s.property;i?i.call(e,e.__data[r],o[r]):s.dynamicFn||console.warn("observer method `"+s.method+"` not defined")}function pl(e,t,n,o,s){let i=e[C.NOTIFY],r,l=jt++;for(let c in t)t[c]&&(i&&fl(e,i,l,c,n,o,s)||s&&ml(e,c,n))&&(r=!0);let a;r&&(a=e.__dataHost)&&a._invalidateProperties&&a._invalidateProperties()}function ml(e,t,n){let o=bt(t);if(o!==t){let s=Te(o)+"-changed";return so(e,s,n[t],t),!0}return!1}function so(e,t,n,o){let s={value:n,queueProperty:!0};o&&(s.path=o),ft(e).dispatchEvent(new CustomEvent(t,{detail:s}))}function _l(e,t,n,o,s,i){let l=(i?bt(t):t)!=t?t:null,a=l?N(e,l):e.__data[t];l&&a===void 0&&(a=n[t]),so(e,s.eventName,a,l)}function gl(e,t,n,o,s){let i,r=e.detail,l=r&&r.path;l?(o=ge(n,o,l),i=r&&r.value):i=e.currentTarget[n],i=s?!i:i,(!t[C.READ_ONLY]||!t[C.READ_ONLY][o])&&t._setPendingPropertyOrPath(o,i,!0,!!l)&&(!r||!r.queueProperty)&&t._invalidateProperties()}function yl(e,t,n,o,s){let i=e.__data[t];me&&(i=me(i,s.attrName,"attribute",e)),e._propertyToAttribute(t,s.attrName,i)}function bl(e,t,n,o){let s=e[C.COMPUTE];if(s)if(Nr){jt++;const i=vl(e),r=[];for(let a in t)qn(a,s,r,i,o);let l;for(;l=r.shift();)oo(e,"",t,n,l)&&qn(l.methodInfo,s,r,i,o);Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let i=t;for(;It(e,s,i,n,o);)Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),i=e.__dataPending,e.__dataPending=null}}const wl=(e,t,n)=>{let o=0,s=t.length-1,i=-1;for(;o<=s;){const r=o+s>>1,l=n.get(t[r].methodInfo)-n.get(e.methodInfo);if(l<0)o=r+1;else if(l>0)s=r-1;else{i=r;break}}i<0&&(i=s+1),t.splice(i,0,e)},qn=(e,t,n,o,s)=>{const i=s?bt(e):e,r=t[i];if(r)for(let l=0;l<r.length;l++){const a=r[l];a.info.lastRun!==jt&&(!s||_n(e,a.trigger))&&(a.info.lastRun=jt,wl(a.info,n,o))}};function vl(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;const n=e[C.COMPUTE];let{counts:o,ready:s,total:i}=xl(e),r;for(;r=s.shift();){t.set(r,t.size);const l=n[r];l&&l.forEach(a=>{const c=a.info.methodInfo;--i,--o[c]===0&&s.push(c)})}i!==0&&console.warn(`Computed graph for ${e.localName} incomplete; circular?`),e.constructor.__orderedComputedDeps=t}return t}function xl(e){const t=e[no],n={},o=e[C.COMPUTE],s=[];let i=0;for(let r in t){const l=t[r];i+=n[r]=l.args.filter(a=>!a.literal).length+(l.dynamicFn?1:0)}for(let r in o)t[r]||s.push(r);return{counts:n,ready:s,total:i}}function oo(e,t,n,o,s){let i=tn(e,t,n,o,s);if(i===qt)return!1;let r=s.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[r]?e._setPendingProperty(r,i,!0):(e[r]=i,!1)}function Cl(e,t,n){let o=e.__dataLinkedPaths;if(o){let s;for(let i in o){let r=o[i];_e(i,t)?(s=ge(i,r,t),e._setPendingPropertyOrPath(s,n,!0,!0)):_e(r,t)&&(s=ge(r,i,t),e._setPendingPropertyOrPath(s,n,!0,!0))}}}function He(e,t,n,o,s,i,r){n.bindings=n.bindings||[];let l={kind:o,target:s,parts:i,literal:r,isCompound:i.length!==1};if(n.bindings.push(l),Al(l)){let{event:c,negate:u}=l.parts[0];l.listenerEvent=c||Te(s)+"-changed",l.listenerNegate=u}let a=t.nodeInfoList.length;for(let c=0;c<l.parts.length;c++){let u=l.parts[c];u.compoundIndex=c,El(e,t,l,u,a)}}function El(e,t,n,o,s){if(!o.literal)if(n.kind==="attribute"&&n.target[0]==="-")console.warn("Cannot set attribute "+n.target+' because "-" is not a valid attribute starting character');else{let i=o.dependencies,r={index:s,binding:n,part:o,evaluator:e};for(let l=0;l<i.length;l++){let a=i[l];typeof a=="string"&&(a=ro(a),a.wildcard=!0),e._addTemplatePropertyEffect(t,a.rootProperty,{fn:Sl,info:r,trigger:a})}}}function Sl(e,t,n,o,s,i,r){let l=r[s.index],a=s.binding,c=s.part;if(i&&c.source&&t.length>c.source.length&&a.kind=="property"&&!a.isCompound&&l.__isPropertyEffectsClient&&l.__dataHasAccessor&&l.__dataHasAccessor[a.target]){let u=n[t];t=ge(c.source,a.target,t),l._setPendingPropertyOrPath(t,u,!1,!0)&&e._enqueueClient(l)}else{let u=s.evaluator._evaluateBinding(e,c,t,n,o,i);u!==qt&&Pl(e,l,a,c,u)}}function Pl(e,t,n,o,s){if(s=Tl(t,s,n,o),me&&(s=me(s,n.target,n.kind,t)),n.kind=="attribute")e._valueToNodeAttribute(t,s,n.target);else{let i=n.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[i]?(!t[C.READ_ONLY]||!t[C.READ_ONLY][i])&&t._setPendingProperty(i,s)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,i,s)}}function Tl(e,t,n,o){if(n.isCompound){let s=e.__dataCompoundStorage[n.target];s[o.compoundIndex]=t,t=s.join("")}return n.kind!=="attribute"&&(n.target==="textContent"||n.target==="value"&&(e.localName==="input"||e.localName==="textarea"))&&(t=t??""),t}function Al(e){return!!e.target&&e.kind!="attribute"&&e.kind!="text"&&!e.isCompound&&e.parts[0].mode==="{"}function zl(e,t){let{nodeList:n,nodeInfoList:o}=t;if(o.length)for(let s=0;s<o.length;s++){let i=o[s],r=n[s],l=i.bindings;if(l)for(let a=0;a<l.length;a++){let c=l[a];Ol(r,c),$l(r,e,c)}r.__dataHost=e}}function Ol(e,t){if(t.isCompound){let n=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),o=t.parts,s=new Array(o.length);for(let r=0;r<o.length;r++)s[r]=o[r].literal;let i=t.target;n[i]=s,t.literal&&t.kind=="property"&&(i==="className"&&(e=ft(e)),e[i]=t.literal)}}function $l(e,t,n){if(n.listenerEvent){let o=n.parts[0];e.addEventListener(n.listenerEvent,function(s){gl(s,t,n.target,o.source,o.negate)})}}function Wn(e,t,n,o,s,i){i=t.static||i&&(typeof i!="object"||i[t.methodName]);let r={methodName:t.methodName,args:t.args,methodInfo:s,dynamicFn:i};for(let l=0,a;l<t.args.length&&(a=t.args[l]);l++)a.literal||e._addPropertyEffect(a.rootProperty,n,{fn:o,info:r,trigger:a});return i&&e._addPropertyEffect(t.methodName,n,{fn:o,info:r}),r}function tn(e,t,n,o,s){let i=e._methodHost||e,r=i[s.methodName];if(r){let l=e._marshalArgs(s.args,t,n);return l===qt?qt:r.apply(i,l)}else s.dynamicFn||console.warn("method `"+s.methodName+"` not defined")}const kl=[],io="(?:[a-zA-Z_$][\\w.:$\\-*]*)",Ll="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",Rl="(?:'(?:[^'\\\\]|\\\\.)*')",Nl='(?:"(?:[^"\\\\]|\\\\.)*")',Ml="(?:"+Rl+"|"+Nl+")",Yn="(?:("+io+"|"+Ll+"|"+Ml+")\\s*)",Il="(?:"+Yn+"(?:,\\s*"+Yn+")*)",Dl="(?:\\(\\s*(?:"+Il+"?)\\)\\s*)",Fl="("+io+"\\s*"+Dl+"?)",Bl="(\\[\\[|{{)\\s*",Hl="(?:]]|}})",Vl="(?:(!)\\s*)?",Ul=Bl+Vl+Fl+Hl,Gn=new RegExp(Ul,"g");function Xn(e){let t="";for(let n=0;n<e.length;n++){let o=e[n].literal;t+=o||""}return t}function Ve(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let o={methodName:t[1],static:!0,args:kl};if(t[2].trim()){let s=t[2].replace(/\\,/g,"&comma;").split(",");return jl(s,o)}else return o}return null}function jl(e,t){return t.args=e.map(function(n){let o=ro(n);return o.literal||(t.static=!1),o},this),t}function ro(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),n={name:t,value:"",literal:!1},o=t[0];switch(o==="-"&&(o=t[1]),o>="0"&&o<="9"&&(o="#"),o){case"'":case'"':n.value=t.slice(1,-1),n.literal=!0;break;case"#":n.value=Number(t),n.literal=!0;break}return n.literal||(n.rootProperty=bt(t),n.structured=Ke(t),n.structured&&(n.wildcard=t.slice(-2)==".*",n.wildcard&&(n.name=t.slice(0,-2)))),n}function Jn(e,t,n){let o=N(e,n);return o===void 0&&(o=t[n]),o}function lo(e,t,n,o){const s={indexSplices:o};Ze&&!e._overrideLegacyUndefined&&(t.splices=s),e.notifyPath(n+".splices",s),e.notifyPath(n+".length",t.length),Ze&&!e._overrideLegacyUndefined&&(s.indexSplices=[])}function $t(e,t,n,o,s,i){lo(e,t,n,[{index:o,addedCount:s,removed:i,object:t,type:"splice"}])}function ql(e){return e[0].toUpperCase()+e.substring(1)}const Wl=zt(e=>{const t=dl(el(e));class n extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return C}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(kt.length){let s=kt[kt.length-1];s._enqueueClient(this),this.__dataHost=s}}_initializeProtoProperties(s){this.__data=Object.create(s),this.__dataPending=Object.create(s),this.__dataOld={}}_initializeInstanceProperties(s){let i=this[C.READ_ONLY];for(let r in s)(!i||!i[r])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[r]=this.__dataPending[r]=s[r])}_addPropertyEffect(s,i,r){this._createPropertyAccessor(s,i==C.READ_ONLY);let l=Be(this,i,!0)[s];l||(l=this[i][s]=[]),l.push(r)}_removePropertyEffect(s,i,r){let l=Be(this,i,!0)[s],a=l.indexOf(r);a>=0&&l.splice(a,1)}_hasPropertyEffect(s,i){let r=this[i];return!!(r&&r[s])}_hasReadOnlyEffect(s){return this._hasPropertyEffect(s,C.READ_ONLY)}_hasNotifyEffect(s){return this._hasPropertyEffect(s,C.NOTIFY)}_hasReflectEffect(s){return this._hasPropertyEffect(s,C.REFLECT)}_hasComputedEffect(s){return this._hasPropertyEffect(s,C.COMPUTE)}_setPendingPropertyOrPath(s,i,r,l){if(l||bt(Array.isArray(s)?s[0]:s)!==s){if(!l){let a=N(this,s);if(s=Hn(this,s,i),!s||!super._shouldPropertyChange(s,i,a))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(s,i,r))return Cl(this,s,i),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[s])return this._setPendingProperty(s,i,r);this[s]=i}return!1}_setUnmanagedPropertyToNode(s,i,r){(r!==s[i]||typeof r=="object")&&(i==="className"&&(s=ft(s)),s[i]=r)}_setPendingProperty(s,i,r){let l=this.__dataHasPaths&&Ke(s),a=l?this.__dataTemp:this.__data;return this._shouldPropertyChange(s,i,a[s])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),s in this.__dataOld||(this.__dataOld[s]=this.__data[s]),l?this.__dataTemp[s]=i:this.__data[s]=i,this.__dataPending[s]=i,(l||this[C.NOTIFY]&&this[C.NOTIFY][s])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[s]=r),!0):!1}_setProperty(s,i){this._setPendingProperty(s,i,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(s){this.__dataPendingClients=this.__dataPendingClients||[],s!==this&&this.__dataPendingClients.push(s)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let s=this.__dataPendingClients;if(s){this.__dataPendingClients=null;for(let i=0;i<s.length;i++){let r=s[i];r.__dataEnabled?r.__dataPending&&r._flushProperties():r._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(s,i){for(let r in s)(i||!this[C.READ_ONLY]||!this[C.READ_ONLY][r])&&this._setPendingPropertyOrPath(r,s[r],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(s,i,r){let l=this.__dataHasPaths;this.__dataHasPaths=!1;let a;bl(this,i,r,l),a=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(i,r,l),this._flushClients(),It(this,this[C.REFLECT],i,r,l),It(this,this[C.OBSERVE],i,r,l),a&&pl(this,a,i,r,l),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(s,i,r){this[C.PROPAGATE]&&It(this,this[C.PROPAGATE],s,i,r),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,s,i,r)}_runEffectsForTemplate(s,i,r,l){const a=(c,u)=>{It(this,s.propertyEffects,c,r,u,s.nodeList);for(let d=s.firstChild;d;d=d.nextSibling)this._runEffectsForTemplate(d,c,r,u)};s.runEffects?s.runEffects(a,i,l):a(i,l)}linkPaths(s,i){s=Mt(s),i=Mt(i),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[s]=i}unlinkPaths(s){s=Mt(s),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[s]}notifySplices(s,i){let r={path:""},l=N(this,s,r);lo(this,l,r.path,i)}get(s,i){return N(i||this,s)}set(s,i,r){r?Hn(r,s,i):(!this[C.READ_ONLY]||!this[C.READ_ONLY][s])&&this._setPendingPropertyOrPath(s,i,!0)&&this._invalidateProperties()}push(s,...i){let r={path:""},l=N(this,s,r),a=l.length,c=l.push(...i);return i.length&&$t(this,l,r.path,a,i.length,[]),c}pop(s){let i={path:""},r=N(this,s,i),l=!!r.length,a=r.pop();return l&&$t(this,r,i.path,r.length,0,[a]),a}splice(s,i,r,...l){let a={path:""},c=N(this,s,a);i<0?i=c.length-Math.floor(-i):i&&(i=Math.floor(i));let u;return arguments.length===2?u=c.splice(i):u=c.splice(i,r,...l),(l.length||u.length)&&$t(this,c,a.path,i,l.length,u),u}shift(s){let i={path:""},r=N(this,s,i),l=!!r.length,a=r.shift();return l&&$t(this,r,i.path,0,0,[a]),a}unshift(s,...i){let r={path:""},l=N(this,s,r),a=l.unshift(...i);return i.length&&$t(this,l,r.path,0,i.length,[]),a}notifyPath(s,i){let r;if(arguments.length==1){let l={path:""};i=N(this,s,l),r=l.path}else Array.isArray(s)?r=Mt(s):r=s;this._setPendingPropertyOrPath(r,i,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(s,i){this._addPropertyEffect(s,C.READ_ONLY),i&&(this["_set"+ql(s)]=function(r){this._setProperty(s,r)})}_createPropertyObserver(s,i,r){let l={property:s,method:i,dynamicFn:!!r};this._addPropertyEffect(s,C.OBSERVE,{fn:jn,info:l,trigger:{name:s}}),r&&this._addPropertyEffect(i,C.OBSERVE,{fn:jn,info:l,trigger:{name:i}})}_createMethodObserver(s,i){let r=Ve(s);if(!r)throw new Error("Malformed observer expression '"+s+"'");Wn(this,r,C.OBSERVE,tn,null,i)}_createNotifyingProperty(s){this._addPropertyEffect(s,C.NOTIFY,{fn:_l,info:{eventName:Te(s)+"-changed",property:s}})}_createReflectedProperty(s){let i=this.constructor.attributeNameForProperty(s);i[0]==="-"?console.warn("Property "+s+" cannot be reflected to attribute "+i+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(s,C.REFLECT,{fn:yl,info:{attrName:i}})}_createComputedProperty(s,i,r){let l=Ve(i);if(!l)throw new Error("Malformed computed expression '"+i+"'");const a=Wn(this,l,C.COMPUTE,oo,s,r);Be(this,no)[s]=a}_marshalArgs(s,i,r){const l=this.__data,a=[];for(let c=0,u=s.length;c<u;c++){let{name:d,structured:f,wildcard:h,value:m,literal:_}=s[c];if(!_)if(h){const p=_e(d,i),g=Jn(l,r,p?i:d);m={path:p?i:d,value:g,base:p?N(l,d):g}}else m=f?Jn(l,r,d):l[d];if(Ze&&!this._overrideLegacyUndefined&&m===void 0&&s.length>1)return qt;a[c]=m}return a}static addPropertyEffect(s,i,r){this.prototype._addPropertyEffect(s,i,r)}static createPropertyObserver(s,i,r){this.prototype._createPropertyObserver(s,i,r)}static createMethodObserver(s,i){this.prototype._createMethodObserver(s,i)}static createNotifyingProperty(s){this.prototype._createNotifyingProperty(s)}static createReadOnlyProperty(s,i){this.prototype._createReadOnlyProperty(s,i)}static createReflectedProperty(s){this.prototype._createReflectedProperty(s)}static createComputedProperty(s,i,r){this.prototype._createComputedProperty(s,i,r)}static bindTemplate(s){return this.prototype._bindTemplate(s)}_bindTemplate(s,i){let r=this.constructor._parseTemplate(s),l=this.__preBoundTemplateInfo==r;if(!l)for(let a in r.propertyEffects)this._createPropertyAccessor(a);if(i)if(r=Object.create(r),r.wasPreBound=l,!this.__templateInfo)this.__templateInfo=r;else{const a=s._parentTemplateInfo||this.__templateInfo,c=a.lastChild;r.parent=a,a.lastChild=r,r.previousSibling=c,c?c.nextSibling=r:a.firstChild=r}else this.__preBoundTemplateInfo=r;return r}static _addTemplatePropertyEffect(s,i,r){let l=s.hostProps=s.hostProps||{};l[i]=!0;let a=s.propertyEffects=s.propertyEffects||{};(a[i]=a[i]||[]).push(r)}_stampTemplate(s,i){i=i||this._bindTemplate(s,!0),kt.push(this);let r=super._stampTemplate(s,i);if(kt.pop(),i.nodeList=r.nodeList,!i.wasPreBound){let l=i.childNodes=[];for(let a=r.firstChild;a;a=a.nextSibling)l.push(a)}return r.templateInfo=i,zl(this,i),this.__dataClientsReady&&(this._runEffectsForTemplate(i,this.__data,null,!1),this._flushClients()),r}_removeBoundDom(s){const i=s.templateInfo,{previousSibling:r,nextSibling:l,parent:a}=i;r?r.nextSibling=l:a&&(a.firstChild=l),l?l.previousSibling=r:a&&(a.lastChild=r),i.nextSibling=i.previousSibling=null;let c=i.childNodes;for(let u=0;u<c.length;u++){let d=c[u];ft(ft(d).parentNode).removeChild(d)}}static _parseTemplateNode(s,i,r){let l=t._parseTemplateNode.call(this,s,i,r);if(s.nodeType===Node.TEXT_NODE){let a=this._parseBindings(s.textContent,i);a&&(s.textContent=Xn(a)||" ",He(this,i,r,"text","textContent",a),l=!0)}return l}static _parseTemplateNodeAttribute(s,i,r,l,a){let c=this._parseBindings(a,i);if(c){let u=l,d="property";hl.test(l)?d="attribute":l[l.length-1]=="$"&&(l=l.slice(0,-1),d="attribute");let f=Xn(c);return f&&d=="attribute"&&(l=="class"&&s.hasAttribute("class")&&(f+=" "+s.getAttribute(l)),s.setAttribute(l,f)),d=="attribute"&&u=="disable-upgrade$"&&s.setAttribute(l,""),s.localName==="input"&&u==="value"&&s.setAttribute(u,""),s.removeAttribute(u),d==="property"&&(l=Js(l)),He(this,i,r,d,l,c,f),!0}else return t._parseTemplateNodeAttribute.call(this,s,i,r,l,a)}static _parseTemplateNestedTemplate(s,i,r){let l=t._parseTemplateNestedTemplate.call(this,s,i,r);const a=s.parentNode,c=r.templateInfo,u=a.localName==="dom-if",d=a.localName==="dom-repeat";Mn&&(u||d)&&(a.removeChild(s),r=r.parentInfo,r.templateInfo=c,r.noted=!0,l=!1);let f=c.hostProps;if(Mr&&u)f&&(i.hostProps=Object.assign(i.hostProps||{},f),Mn||(r.parentInfo.noted=!0));else{let h="{";for(let m in f){let _=[{mode:h,source:m,dependencies:[m],hostProp:!0}];He(this,i,r,"property","_host_"+m,_)}}return l}static _parseBindings(s,i){let r=[],l=0,a;for(;(a=Gn.exec(s))!==null;){a.index>l&&r.push({literal:s.slice(l,a.index)});let c=a[1][0],u=!!a[2],d=a[3].trim(),f=!1,h="",m=-1;c=="{"&&(m=d.indexOf("::"))>0&&(h=d.substring(m+2),d=d.substring(0,m),f=!0);let _=Ve(d),p=[];if(_){let{args:g,methodName:y}=_;for(let x=0;x<g.length;x++){let P=g[x];P.literal||p.push(P)}let b=i.dynamicFns;(b&&b[y]||_.static)&&(p.push(y),_.dynamicFn=!0)}else p.push(d);r.push({source:d,mode:c,negate:u,customEvent:f,signature:_,dependencies:p,event:h}),l=Gn.lastIndex}if(l&&l<s.length){let c=s.substring(l);c&&r.push({literal:c})}return r.length?r:null}static _evaluateBinding(s,i,r,l,a,c){let u;return i.signature?u=tn(s,r,l,a,i.signature):r!=i.source?u=N(s,i.source):c&&Ke(r)?u=N(s,r):u=s.__data[r],i.negate&&(u=!u),u}}return n}),kt=[];function Yl(e){const t={};for(let n in e){const o=e[n];t[n]=typeof o=="function"?{type:o}:o}return t}const Gl=zt(e=>{const t=Qs(e);function n(i){const r=Object.getPrototypeOf(i);return r.prototype instanceof s?r:null}function o(i){if(!i.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",i))){let r=null;if(i.hasOwnProperty(JSCompiler_renameProperty("properties",i))){const l=i.properties;l&&(r=Yl(l))}i.__ownProperties=r}return i.__ownProperties}class s extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const r=this._properties;this.__observedAttributes=r?Object.keys(r).map(l=>this.prototype._addPropertyToAttributeMap(l)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const r=n(this);r&&r.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const r=o(this);r&&this.createProperties(r)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const r=n(this);this.__properties=Object.assign({},r&&r._properties,o(this))}return this.__properties}static typeForProperty(r){const l=this._properties[r];return l&&l.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return s});const Xl="3.5.2",Zn=window.ShadyCSS&&window.ShadyCSS.cssBuild,Jl=zt(e=>{const t=Gl(Wl(e));function n(a){if(!a.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",a))){a.__propertyDefaults=null;let c=a._properties;for(let u in c){let d=c[u];"value"in d&&(a.__propertyDefaults=a.__propertyDefaults||{},a.__propertyDefaults[u]=d)}}return a.__propertyDefaults}function o(a){return a.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",a))||(a.__ownObservers=a.hasOwnProperty(JSCompiler_renameProperty("observers",a))?a.observers:null),a.__ownObservers}function s(a,c,u,d){u.computed&&(u.readOnly=!0),u.computed&&(a._hasReadOnlyEffect(c)?console.warn(`Cannot redefine computed property '${c}'.`):a._createComputedProperty(c,u.computed,d)),u.readOnly&&!a._hasReadOnlyEffect(c)?a._createReadOnlyProperty(c,!u.computed):u.readOnly===!1&&a._hasReadOnlyEffect(c)&&console.warn(`Cannot make readOnly property '${c}' non-readOnly.`),u.reflectToAttribute&&!a._hasReflectEffect(c)?a._createReflectedProperty(c):u.reflectToAttribute===!1&&a._hasReflectEffect(c)&&console.warn(`Cannot make reflected property '${c}' non-reflected.`),u.notify&&!a._hasNotifyEffect(c)?a._createNotifyingProperty(c):u.notify===!1&&a._hasNotifyEffect(c)&&console.warn(`Cannot make notify property '${c}' non-notify.`),u.observer&&a._createPropertyObserver(c,u.observer,d[u.observer]),a._addPropertyToAttributeMap(c)}function i(a,c,u,d){if(!Zn){const f=c.content.querySelectorAll("style"),h=Ys(c),m=jr(u),_=c.content.firstElementChild;for(let g=0;g<m.length;g++){let y=m[g];y.textContent=a._processStyleText(y.textContent,d),c.content.insertBefore(y,_)}let p=0;for(let g=0;g<h.length;g++){let y=h[g],b=f[p];b!==y?(y=y.cloneNode(!0),b.parentNode.insertBefore(y,b)):p++,y.textContent=a._processStyleText(y.textContent,d)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(c,u),Ir&&Zn&&zr){const f=c.content.querySelectorAll("style");if(f){let h="";Array.from(f).forEach(m=>{h+=m.textContent,m.parentNode.removeChild(m)}),a._styleSheet=new CSSStyleSheet,a._styleSheet.replaceSync(h)}}}function r(a){let c=null;if(a&&(!Je||$r)&&(c=Ut.import(a,"template"),Je&&!c))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${a}`);return c}class l extends t{static get polymerElementVersion(){return Xl}static _finalizeClass(){t._finalizeClass.call(this);const c=o(this);c&&this.createObservers(c,this._properties),this._prepareTemplate()}static _prepareTemplate(){let c=this.template;c&&(typeof c=="string"?(console.error("template getter must return HTMLTemplateElement"),c=null):kr||(c=c.cloneNode(!0))),this.prototype._template=c}static createProperties(c){for(let u in c)s(this.prototype,u,c[u],c)}static createObservers(c,u){const d=this.prototype;for(let f=0;f<c.length;f++)d._createMethodObserver(c[f],u)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let c=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof c=="function"&&(c=c()),this._template=c!==void 0?c:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&r(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(c){this._template=c}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const c=this.importMeta;if(c)this._importPath=pn(c.url);else{const u=Ut.import(this.is);this._importPath=u&&u.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Or,this.importPath=this.constructor.importPath;let c=n(this.constructor);if(c)for(let u in c){let d=c[u];if(this._canApplyPropertyDefault(u)){let f=typeof d.value=="function"?d.value.call(this):d.value;this._hasAccessor(u)?this._setPendingProperty(u,f,!0):this[u]=f}}}_canApplyPropertyDefault(c){return!this.hasOwnProperty(c)}static _processStyleText(c,u){return fn(c,u)}static _finalizeTemplate(c){const u=this.prototype._template;if(u&&!u.__polymerFinalized){u.__polymerFinalized=!0;const d=this.importPath,f=d?Bt(d):"";i(this,u,c,f),this.prototype._bindTemplate(u)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(c){const u=ft(this);if(u.attachShadow)return c?(u.shadowRoot||(u.attachShadow({mode:"open",shadyUpgradeFragment:c}),u.shadowRoot.appendChild(c),this.constructor._styleSheet&&(u.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Rr&&window.ShadyDOM&&window.ShadyDOM.flushInitial(u.shadowRoot),u.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(c){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,c)}resolveUrl(c,u){return!u&&this.importPath&&(u=Bt(this.importPath)),Bt(c,u)}static _parseTemplateContent(c,u,d){return u.dynamicFns=u.dynamicFns||this._properties,t._parseTemplateContent.call(this,c,u,d)}static _addTemplatePropertyEffect(c,u,d){return Lr&&!(u in this._properties)&&!(d.info.part.signature&&d.info.part.signature.static)&&!d.info.part.hostProp&&!c.nestedTemplate&&console.warn(`Property '${u}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,c,u,d)}}return l});const Kn=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:e=>e});class ao{constructor(t,n){uo(t,n);const o=n.reduce((s,i,r)=>s+co(i)+t[r+1],t[0]);this.value=o.toString()}toString(){return this.value}}function co(e){if(e instanceof ao)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}function Zl(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof ao)return co(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}const Kl=function(t,...n){uo(t,n);const o=document.createElement("template");let s=n.reduce((i,r,l)=>i+Zl(r)+t[l+1],t[0]);return Kn&&(s=Kn.createHTML(s)),o.innerHTML=s,o},uo=(e,t)=>{if(!Array.isArray(e)||!Array.isArray(e.raw)||t.length!==e.length-1)throw new TypeError("Invalid call to the html template tag")};const cu=Jl(HTMLElement),Ql="bottom-bar-toolbar",ta="bottom-bar-menu",ea=U`
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
`,na=Symbol("openMenu"),sa=e=>{const t=e.shadowRoot?.querySelector("#dropdown");if(!t||t.hasAttribute("hidden"))return;t.shadowRoot?.querySelector("cosmoz-dropdown")?.shadowRoot?.querySelector("#dropdownButton")?.click()},ho=e=>e.nodeType===Node.ELEMENT_NODE&&e.getAttribute("slot")!=="info"&&e.tagName!=="TEMPLATE"&&e.tagName!=="STYLE"&&e.tagName!=="DOM-REPEAT"&&e.tagName!=="DOM-IF"&&e.getAttribute("slot")!=="extra",fo=e=>{const t=[...e.childNodes],n=[];for(const o of t)if(o.tagName==="SLOT"){const s=o.assignedElements({flatten:!0});n.push(...s)}else n.push(o);return n},oa=e=>{const t=fo(e).filter(ho).filter(o=>!o.hidden).sort((o,s)=>(Number(o.dataset.index)||0)-(Number(s.dataset.index)||0));if(t.length===0)return t;const n=t.reduce((o,s)=>parseInt(o.dataset.priority??"0",10)>=parseInt(s.dataset.priority??"0",10)?o:s,{dataset:{priority:"-1000"}});return[n,...t.filter(o=>o!==n)]},Qn=(e,t,n,o)=>{const s=t?Ql:ta;e.setAttribute("slot",s),e.setAttribute("tabindex","0"),e.classList.toggle(o,!t),e.classList.toggle(n,t)},ia=(e,t,n)=>{const o=oa(e),{maxToolbarItems:s=1}=e;if(!(o.length>0)){e.toggleAttribute("has-menu-items",!1);return}const r=o.slice(0,s),l=o.slice(r.length);r.forEach(a=>Qn(a,!0,t,n)),l.forEach(a=>Qn(a,!1,t,n)),e.toggleAttribute("has-menu-items",l.length>0)},ra=e=>{const{active:t=!1,maxToolbarItems:n=1}=e,o=mt(!1),s="cosmoz-bottom-bar-toolbar",i="cosmoz-bottom-bar-menu";xt({activity:na,callback:()=>sa(e),check:()=>t&&!e.hasAttribute("hide-actions"),element:()=>e.shadowRoot?.querySelector("#dropdown")},[t]);const r=A(()=>Os("height"),[]);Ye(()=>{o.current?r(e,t):r(e,t,{duration:0}),o.current=!0},[t]);const l=v(()=>ia(e,s,i),[n]),a=mt(null),c=v(()=>{const d=a.current;if(!d)return;d.disconnect(),fo(e).filter(ho).forEach(h=>{d.observe(h,{attributes:!0,attributeFilter:["hidden"]})})},[]);T(()=>{a.current=new MutationObserver(()=>{c(),l()}),c();const d=new MutationObserver(()=>{c(),l()});return d.observe(e,{childList:!0}),()=>{a.current?.disconnect(),a.current=null,d.disconnect()}},[l]);const u=v(()=>{c(),l()},[l]);return w` <div id="bar" part="bar">
			<div id="info" part="info"><slot name="info"></slot></div>
			<slot
				id="bottomBarToolbar"
				name="bottom-bar-toolbar"
				@slotchange=${u}
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
			<slot id="content" @slotchange=${u}></slot>
		</div>`};customElements.define("cosmoz-bottom-bar",k(ra,{observedAttributes:["active","max-toolbar-items"],styleSheets:[ea]}));const be=`
	<slot name="extra" slot="extra"></slot>
	<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
	<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
`;w(Object.assign([be],{raw:[be]}));Kl(Object.assign([be],{raw:[be]}));const Ae=it(class extends yt{constructor(e){if(super(e),e.type!==W.PROPERTY&&e.type!==W.ATTRIBUTE&&e.type!==W.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!xs(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===M||t===Z)return t;const n=e.element,o=e.name;if(e.type===W.PROPERTY){if(t===n[o])return M}else if(e.type===W.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(o))return M}else if(e.type===W.ATTRIBUTE&&n.getAttribute(o)===t+"")return M;return Cs(e),t}}),po=(e,{label:t,invalid:n,errorMessage:o})=>w`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
				${q(t,()=>w`<label for="input" part="label">${t}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${q(n&&o,()=>w`<div class="error" part="error">${o}</div>`)}
	`,mo=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],uu=e=>!!(e==null||Array.isArray(e)&&e.length===0||typeof e=="string"&&e.length===0||typeof e=="number"&&e===0),la={isoBasic:/^\d{4}-\d{2}-\d{2}$/iu},aa=e=>typeof e=="string"&&la.isoBasic.test(e)?new Date(`${e}T00:00`):new Date(e),du=e=>{if(e==null)return;if(e instanceof Date&&!isNaN(e.getTime()))return e;if(!(typeof e=="number"||typeof e=="string"))return;const t=aa(e);if(!(t instanceof Date&&isNaN(t.getTime())))return t},Lt=e=>e<10?"0"+e:e,hu=e=>e instanceof Date?e.getFullYear()+"-"+Lt(e.getMonth()+1)+"-"+Lt(e.getDate())+"T"+Lt(e.getHours())+":"+Lt(e.getMinutes())+":"+Lt(e.getSeconds())+"."+(e.getMilliseconds()/1e3).toFixed(3).slice(2,5):null,ze=(e,...t)=>e.flatMap((n,o)=>[n,t[o]??""]).join(""),gn=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},ts=ze`
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
`,_o=ze`
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
		cursor: text;
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
		cursor: text;
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
		-moz-appearance: textfield;
		appearance: textfield;
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
		${ts}
	}
	@container style(--focused: focused) {
		${ts}
	}
`,ca=e=>A(()=>{if(e==null)return;const t=new RegExp(e,"u");return n=>{!n.defaultPrevented&&n.data&&!t.test(n.data)&&n.preventDefault()}},[e]),ua=ot(class extends st{values;constructor(e,t,n,o){super(e,t),Object.assign(t.host,n),this.values=o}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((t,n)=>this.values[n]!==t)}}),Xt=ot(class extends st{update(){return this.state.host}}),da=/([A-Z])/gu,Wt=(e,t,n)=>{e[t]=n,e.dispatchEvent(new CustomEvent(t.replace(da,"-$1").toLowerCase()+"-changed",{detail:{value:n}}))},fu=(e,t,n=[t])=>{const o=Xt();T(()=>{Wt(o,e,t)},n)},go=e=>{const t=mt(void 0),n=v(a=>t.current=a,[]),o=e.shadowRoot,s=v(a=>e.dispatchEvent(new Event(a.type,{bubbles:a.bubbles})),[]),i=v(a=>Wt(e,"value",a.target.value),[]),r=v(a=>Wt(e,"focused",a.type==="focus"),[]),l=v(()=>{const a=t.current?.checkValidity();return e.toggleAttribute("invalid",!a),a},[]);return ua({validate:l},[l]),T(()=>{const a=c=>{c.composedPath()[0]?.closest?.("input, textarea")||(c.preventDefault(),t.current?.focus())};return o.addEventListener("mousedown",a),()=>o.removeEventListener("mousedown",a)},[]),{onChange:s,onFocus:r,onInput:i,onRef:n}},ha=({placeholder:e,noLabelFloat:t,label:n})=>(t?n:void 0)||e||" ",fa=(e,t)=>t??(e==="date"?"9999-12-31":void 0),pa=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...mo],ma=e=>{const{type:t="text",pattern:n,allowedPattern:o,autocomplete:s,value:i,readonly:r,disabled:l,min:a,max:c,step:u,maxlength:d}=e,{onChange:f,onFocus:h,onInput:m,onRef:_}=go(e),p=ca(o);return po(w`
			<input
				${Et(_)}
				style="--chars: ${i?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${O(n)}
				autocomplete=${O(s)}
				placeholder=${ha(e)}
				?readonly=${r}
				?aria-disabled=${l}
				?disabled=${l}
				.value=${Ae(i??"")}
				maxlength=${O(d)}
				@beforeinput=${p}
				@input=${m}
				@change=${f}
				@focus=${h}
				@blur=${h}
				min=${O(a)}
				max=${O(fa(t,c))}
				step=${O(u)}
			/>
		`,e)};customElements.define("cosmoz-input",k(ma,{observedAttributes:pa,styleSheets:[an(_o)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const es=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},_a=(e,t=0)=>{if(t>0){const n=e.getAttribute("rows")??"",o=e.style.height;e.style.height="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=o,e.setAttribute("rows",n)}},ga=e=>{const{value:t,maxRows:n}=e,o=A(()=>()=>e.shadowRoot.querySelector("#input"),[]);T(()=>_a(o(),n),[n,o]),T(()=>es(o()),[o,t]),T(()=>{const s=o(),i=new ResizeObserver(()=>requestAnimationFrame(()=>es(s)));return i.observe(s),()=>i.unobserve(s)},[o])},ya=["rows","placeholder",...mo],ba=e=>{const{autocomplete:t,value:n,placeholder:o,readonly:s,disabled:i,rows:r,cols:l,maxlength:a}=e,{onChange:c,onFocus:u,onInput:d,onRef:f}=go(e);return ga(e),po(w`
			<textarea id="input" part="input"
				${Et(f)}
				autocomplete=${O(t)}
				placeholder=${o||" "}
				rows=${r??1} cols=${O(l)}
				?readonly=${s} ?aria-disabled=${i} ?disabled=${i}
				.value=${Ae(n??"")} maxlength=${O(a)} @input=${d}
				@change=${c} @focus=${u} @blur=${u}>`,e)};customElements.define("cosmoz-textarea",k(ba,{observedAttributes:ya,styleSheets:[an(_o)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const wa=e=>{const{label:t,value:n,disabled:o,error:s}=e,i=v(r=>e.dispatchEvent(new CustomEvent("change",{detail:r.target.checked})),[]);return w`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${Ae(!!n)}
			?disabled=${o}
			@change=${i}
		/>
		${q(t,()=>w`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${q(s,r=>w`<div class="failure">${r}</div>`)} `},va=U`
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
`,xa=U`
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
`;customElements.define("cosmoz-toggle",k(wa,{styleSheets:[xa,va],observedAttributes:["disabled"]}));const pu=it(class extends yt{constructor(e){if(super(e),e.type!==W.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(t)}const n=e.element.classList;for(const o of this.st)o in t||(n.remove(o),this.st.delete(o));for(const o in t){const s=!!t[o];s===this.st.has(o)||this.nt?.has(o)||(s?(n.add(o),this.st.add(o)):(n.remove(o),this.st.delete(o)))}return M}});class en{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,n){this._asyncModule=t,this._callback=n,this._timer=this._asyncModule.run(()=>{this._timer=null,nn.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),nn.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(t,n,o){return t instanceof en?t._cancelAsync():t=new en,t.setConfig(n,o),t}}let nn=new Set;const mu=function(e){nn.add(e)},Ht=Symbol("memo"),_u=e=>{let t=Ht,n=Ht,o;return function(s,i){if(t===s&&n===i)return o;const r=e(s,i);return o=r,t=s,n=i,r}},gu=e=>{let t=Ht,n=Ht,o=Ht,s;return function(i,r,l){if(t===i&&n===r&&o===l)return s;const a=e(i,r,l);return s=a,t=i,n=r,o=l,a}};class Ca{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class Ea{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}const ns=e=>!Fo(e)&&typeof e.then=="function",ss=1073741823;let Sa=class extends cn{constructor(){super(...arguments),this._$Cwt=ss,this._$Cbt=[],this._$CK=new Ca(this),this._$CX=new Ea}render(...t){return t.find(n=>!ns(n))??M}update(t,n){const o=this._$Cbt;let s=o.length;this._$Cbt=n;const i=this._$CK,r=this._$CX;this.isConnected||this.disconnected();for(let l=0;l<n.length&&!(l>this._$Cwt);l++){const a=n[l];if(!ns(a))return this._$Cwt=l,a;l<s&&a===o[l]||(this._$Cwt=ss,s=0,Promise.resolve(a).then(async c=>{for(;r.get();)await r.get();const u=i.deref();if(u!==void 0){const d=u._$Cbt.indexOf(a);d>-1&&d<u._$Cwt&&(u._$Cwt=d,u.setValue(c))}}))}return M}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const sn=it(Sa);const os=(e,t,n)=>{const o=new Map;for(let s=t;s<=n;s++)o.set(e[s],s);return o},Pa=it(class extends yt{constructor(e){if(super(e),e.type!==W.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let o;n===void 0?n=t:t!==void 0&&(o=t);const s=[],i=[];let r=0;for(const l of e)s[r]=o?o(l,r):r,i[r]=n(l,r),r++;return{values:i,keys:s}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,o]){const s=Bo(e),{values:i,keys:r}=this.dt(t,n,o);if(!Array.isArray(s))return this.ut=r,i;const l=this.ut??=[],a=[];let c,u,d=0,f=s.length-1,h=0,m=i.length-1;for(;d<=f&&h<=m;)if(s[d]===null)d++;else if(s[f]===null)f--;else if(l[d]===r[h])a[h]=dt(s[d],i[h]),d++,h++;else if(l[f]===r[m])a[m]=dt(s[f],i[m]),f--,m--;else if(l[d]===r[m])a[m]=dt(s[d],i[m]),Ot(e,a[m+1],s[d]),d++,m--;else if(l[f]===r[h])a[h]=dt(s[f],i[h]),Ot(e,s[d],s[f]),f--,h++;else if(c===void 0&&(c=os(r,h,m),u=os(l,d,f)),c.has(l[d]))if(c.has(l[f])){const _=u.get(r[h]),p=_!==void 0?s[_]:null;if(p===null){const g=Ot(e,s[d]);dt(g,i[h]),a[h]=g}else a[h]=dt(p,i[h]),Ot(e,s[d],p),s[_]=null;h++}else Me(s[f]),f--;else Me(s[d]),d++;for(;h<=m;){const _=Ot(e,a[m+1]);dt(_,i[h]),a[h++]=_}for(;d<=f;){const _=s[d++];_!==null&&Me(_)}return this.ut=r,Cs(e,a),M}});class Oe extends Event{constructor(t){super(Oe.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}Oe.eventName="rangeChanged";class $e extends Event{constructor(t){super($e.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}$e.eventName="visibilityChanged";class ke extends Event{constructor(){super(ke.eventName,{bubbles:!1})}}ke.eventName="unpinned";class Ta{constructor(t){this._element=null;const n=t??window;this._node=n,t&&(this._element=t)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class Aa extends Ta{constructor(t,n){super(n),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const o=this._node;this._originalScrollTo=o.scrollTo,this._originalScrollBy=o.scrollBy,this._originalScroll=o.scroll,this._attach(t)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(t,n){const o=typeof t=="number"&&typeof n=="number"?{left:t,top:n}:t;this._scrollTo(o)}scrollBy(t,n){const o=typeof t=="number"&&typeof n=="number"?{left:t,top:n}:t;o.top!==void 0&&(o.top+=this.scrollTop),o.left!==void 0&&(o.left+=this.scrollLeft),this._scrollTo(o)}_nativeScrollTo(t){this._originalScrollTo.bind(this._element||window)(t)}_scrollTo(t,n=null,o=null){this._end!==null&&this._end(),t.behavior==="smooth"?(this._setDestination(t),this._retarget=n,this._end=o):this._resetScrollState(),this._nativeScrollTo(t)}_setDestination(t){let{top:n,left:o}=t;return n=n===void 0?void 0:Math.max(0,Math.min(n,this.maxScrollTop)),o=o===void 0?void 0:Math.max(0,Math.min(o,this.maxScrollLeft)),this._destination!==null&&o===this._destination.left&&n===this._destination.top?!1:(this.__destination={top:n,left:o,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(t){this._destination&&this._setDestination(t)&&this._nativeScrollTo(this._destination)}managedScrollTo(t,n,o){return this._scrollTo(t,n,o),this._updateManagedScrollTo}correctScrollError(t){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(t),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:t,scrollLeft:n}=this;let{top:o,left:s}=this._destination;o=Math.min(o||0,this.maxScrollTop),s=Math.min(s||0,this.maxScrollLeft);const i=Math.abs(o-t),r=Math.abs(s-n);i<1&&r<1&&(this._end&&this._end(),this._resetScrollState())}}detach(t){return this._clients.delete(t),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(t){this._clients.add(t),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let is=typeof window<"u"?window.ResizeObserver:void 0;const on=Symbol("virtualizerRef"),te="virtualizer-sizer";let rs;class za{constructor(t){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!t)throw new Error("Virtualizer constructor requires a configuration object");if(t.hostElement)this._init(t);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(t){Array.isArray(t)&&t!==this._items&&(this._itemsChanged=!0,this._items=t,this._schedule(this._updateLayout))}_init(t){this._isScroller=!!t.scroller,this._initHostElement(t);const n=t.layout||{};this._layoutInitialized=this._initLayout(n)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new is(()=>this._hostElementSizeChanged()),this._childrenRO=new is(this._childrenSizeChanged.bind(this))}_initHostElement(t){const n=this._hostElement=t.hostElement;this._applyVirtualizerStyles(),n[on]=this}connected(){this._initObservers();const t=this._isScroller;this._clippingAncestors=ka(this._hostElement,t),this._scrollerController=new Aa(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(t=>{t.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(t),this._hostElementRO.observe(t)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(t=>this._childrenRO.observe(t)),this._scrollEventListeners.forEach(t=>t.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(t=>t.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const n=this._hostElement.style;n.display=n.display||"block",n.position=n.position||"relative",n.contain=n.contain||"size layout",this._isScroller&&(n.overflow=n.overflow||"auto",n.minHeight=n.minHeight||"150px")}_getSizer(){const t=this._hostElement;if(!this._sizer){let n=t.querySelector(`[${te}]`);n||(n=document.createElement("div"),n.setAttribute(te,""),t.appendChild(n)),Object.assign(n.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),n.textContent="&nbsp;",n.setAttribute(te,""),this._sizer=n}return this._sizer}async updateLayoutConfig(t){await this._layoutInitialized;const n=t.type||rs;if(typeof n=="function"&&this._layout instanceof n){const o={...t};return delete o.type,this._layout.config=o,!0}return!1}async _initLayout(t){let n,o;if(typeof t.type=="function"){o=t.type;const s={...t};delete s.type,n=s}else n=t;o===void 0&&(rs=o=(await Vo(()=>import("./flow-BqIEBwW6.js"),[],import.meta.url)).FlowLayout),this._layout=new o(s=>this._handleLayoutMessage(s),n),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const t=window.performance.now(),n=t-this._benchmarkStart,s=performance.getEntriesByName("uv-virtualizing","measure").filter(i=>i.startTime>=this._benchmarkStart&&i.startTime<t).reduce((i,r)=>i+r.duration,0);return this._benchmarkStart=null,{timeElapsed:n,virtualizationTime:s}}return null}_measureChildren(){const t={},n=this._children,o=this._measureChildOverride||this._measureChild;for(let s=0;s<n.length;s++){const i=n[s],r=this._first+s;(this._itemsChanged||this._toBeMeasured.has(i))&&(t[r]=o.call(this,i,this._items[r]))}this._childMeasurements=t,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(t){const{width:n,height:o}=t.getBoundingClientRect();return Object.assign({width:n,height:o},Oa(t))}async _schedule(t){this._scheduled.has(t)||(this._scheduled.add(t),await Promise.resolve(),this._scheduled.delete(t),t.call(this))}async _updateDOM(t){this._scrollSize=t.scrollSize,this._adjustRange(t.range),this._childrenPos=t.childPositions,this._scrollError=t.scrollError||null;const{_rangeChanged:n,_itemsChanged:o}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(n||o)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(t=>this._childrenRO.observe(t)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(t){console.warn("Error measuring performance data: ",t)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(t){t.type==="scroll"?(t.currentTarget===window||this._clippingAncestors.includes(t.currentTarget))&&this._handleScrollEvent():console.warn("event not handled",t)}_handleLayoutMessage(t){t.type==="stateChanged"?this._updateDOM(t):t.type==="visibilityChanged"?(this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._notifyVisibility()):t.type==="unpinned"&&this._hostElement.dispatchEvent(new ke)}get _children(){const t=[];let n=this._hostElement.firstElementChild;for(;n;)n.hasAttribute(te)||t.push(n),n=n.nextElementSibling;return t}_updateView(){const t=this._hostElement,n=this._scrollerController?.element,o=this._layout;if(t&&n&&o){let s,i,r,l;const a=t.getBoundingClientRect();s=0,i=0,r=window.innerHeight,l=window.innerWidth;const c=this._clippingAncestors.map(g=>g.getBoundingClientRect());c.unshift(a);for(const g of c)s=Math.max(s,g.top),i=Math.max(i,g.left),r=Math.min(r,g.bottom),l=Math.min(l,g.right);const u=n.getBoundingClientRect(),d={left:a.left-u.left,top:a.top-u.top},f={width:n.scrollWidth,height:n.scrollHeight},h=s-a.top+t.scrollTop,m=i-a.left+t.scrollLeft,_=Math.max(0,r-s),p=Math.max(0,l-i);o.viewportSize={width:p,height:_},o.viewportScroll={top:h,left:m},o.totalScrollSize=f,o.offsetWithinScroller=d}}_sizeHostElement(t){const o=t&&t.width!==null?Math.min(82e5,t.width):0,s=t&&t.height!==null?Math.min(82e5,t.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${o}px, ${s}px)`;else{const i=this._hostElement.style;i.minWidth=o?`${o}px`:"100%",i.minHeight=s?`${s}px`:"100%"}}_positionChildren(t){t&&t.forEach(({top:n,left:o,width:s,height:i,xOffset:r,yOffset:l},a)=>{const c=this._children[a-this._first];c&&(c.style.position="absolute",c.style.boxSizing="border-box",c.style.transform=`translate(${o}px, ${n}px)`,s!==void 0&&(c.style.width=s+"px"),i!==void 0&&(c.style.height=i+"px"),c.style.left=r===void 0?null:r+"px",c.style.top=l===void 0?null:l+"px")})}async _adjustRange(t){const{_first:n,_last:o,_firstVisible:s,_lastVisible:i}=this;this._first=t.first,this._last=t.last,this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==n||this._last!==o,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==s||this._lastVisible!==i}_correctScrollError(){if(this._scrollError){const{scrollTop:t,scrollLeft:n}=this._scrollerController,{top:o,left:s}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:t-o,left:n-s})}}element(t){return t===1/0&&(t=this._items.length-1),this._items?.[t]===void 0?void 0:{scrollIntoView:(n={})=>this._scrollElementIntoView({...n,index:t})}}_scrollElementIntoView(t){if(t.index>=this._first&&t.index<=this._last)this._children[t.index-this._first].scrollIntoView(t);else if(t.index=Math.min(t.index,this._items.length-1),t.behavior==="smooth"){const n=this._layout.getScrollIntoViewCoordinates(t),{behavior:o}=t;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(n,{behavior:o}),()=>this._layout.getScrollIntoViewCoordinates(t),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=t}else this._layout.pin=t}_checkScrollIntoViewTarget(t){const{index:n}=this._scrollIntoViewTarget||{};n&&t?.has(n)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new Oe({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new $e({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((t,n)=>{this._layoutCompleteResolver=t,this._layoutCompleteRejecter=n})),this._layoutCompletePromise}_rejectLayoutCompletePromise(t){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(t),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(t){if(this._layout?.measureChildren){for(const n of t)this._toBeMeasured.set(n.target,n.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function Oa(e){const t=window.getComputedStyle(e);return{marginTop:ee(t.marginTop),marginRight:ee(t.marginRight),marginBottom:ee(t.marginBottom),marginLeft:ee(t.marginLeft)}}function ee(e){const t=e?parseFloat(e):NaN;return Number.isNaN(t)?0:t}function ls(e){if(e.assignedSlot!==null)return e.assignedSlot;if(e.parentElement!==null)return e.parentElement;const t=e.parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host||null}function $a(e,t=!1){const n=[];let o=t?e:ls(e);for(;o!==null;)n.push(o),o=ls(o);return n}function ka(e,t=!1){let n=!1;return $a(e,t).filter(o=>{if(n)return!1;const s=getComputedStyle(o);return n=s.position==="fixed",s.overflow!=="visible"})}const La=e=>e,Ra=(e,t)=>w`${t}: ${JSON.stringify(e,null,2)}`;class Na extends cn{constructor(t){if(super(t),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(n,o)=>Ra(n,o+this._first),this._keyFunction=(n,o)=>La(n,o+this._first),this._items=[],t.type!==W.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(t){t&&this._setFunctions(t);const n=[];if(this._first>=0&&this._last>=this._first)for(let o=this._first;o<=this._last;o++)n.push(this._items[o]);return Pa(n,this._keyFunction,this._renderItem)}update(t,[n]){this._setFunctions(n);const o=this._items!==n.items;return this._items=n.items||[],this._virtualizer?this._updateVirtualizerConfig(t,n):this._initialize(t,n),o?M:this.render()}async _updateVirtualizerConfig(t,n){if(!await this._virtualizer.updateLayoutConfig(n.layout||{})){const s=t.parentNode;this._makeVirtualizer(s,n)}this._virtualizer.items=this._items}_setFunctions(t){const{renderItem:n,keyFunction:o}=t;n&&(this._renderItem=(s,i)=>n(s,i+this._first)),o&&(this._keyFunction=(s,i)=>o(s,i+this._first))}_makeVirtualizer(t,n){this._virtualizer&&this._virtualizer.disconnected();const{layout:o,scroller:s,items:i}=n;this._virtualizer=new za({hostElement:t,layout:o,scroller:s}),this._virtualizer.items=i,this._virtualizer.connected()}_initialize(t,n){const o=t.parentNode;o&&o.nodeType===1&&(o.addEventListener("rangeChanged",s=>{this._first=s.first,this._last=s.last,this.setValue(this.render())}),this._makeVirtualizer(o,n))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const Ma=it(Na),Ia=(e,t)=>{if(!e||!t)return;const n=Object.keys(t);return Object.fromEntries(Object.keys(e).flatMap(o=>n.includes(o)?[]:[[o,void 0]]))};class Da extends yt{_props;render(t){return M}update(t,[n]){return this._props!==n&&Object.assign(t.element,Ia(this._props,n),this._props=n),M}}const Fa=it(Da),Ba=e=>{const t=Xt(),n=A(()=>new CSSStyleSheet,[]);T(()=>{t.shadowRoot.adoptedStyleSheets=[...t.shadowRoot.adoptedStyleSheets,n]},[]),T(()=>{n.replaceSync(e)},[e])};function le(e){return e?t=>typeof t=="object"&&t!==null?t[e]:t:Tt}const Ha=e=>{const t=le(e);return n=>typeof n=="string"?n:t(n)?.toString()||""},Va=e=>t=>{const n={};for(const o in t)e.includes(o)&&(n[o]=t[o]);return n},Ua="data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1L5.20039 7.04766L1.66348 3.46152' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",ja=U`
	:host {
		display: block;
		font-family: var(--paper-font-subhead_-_font-family, inherit);
		background: var(
			--cosmoz-autocomplete-listbox-bg,
			rgba(255, 255, 255, 0.75)
		);
		backdrop-filter: blur(16px) saturate(180%);
		-webkit-backdrop-filter: blur(16px) saturate(180%);
		border-radius: 6px;
		box-shadow:
			0 4px 24px 0 rgba(0, 0, 0, 0.18),
			0 1.5px 6px 0 rgba(0, 0, 0, 0.1);
		border: 1px solid rgba(200, 200, 200, 0.25);
		text-transform: var(--cosmoz-autocomplete-listbox-text-transform, initial);
		overflow: hidden;
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
		background: url("${Ua}") #5881f6 no-repeat 50%;
	}

	:host([multi]) .sizer {
		padding-left: 33px;
	}

	[virtualizer-sizer]:not(.sizer) {
		line-height: 1;
	}
`,qa=({index:e,itemHeight:t,auto:n})=>U`
	${q(!n,()=>U`
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
`,Wa=e=>{const t=e==="auto",[n,o]=nt(t?40:e);return[n,s=>t?o(s):void 0]},Ya=Symbol("listbox.navigate.up"),Ga=Symbol("listbox.navigate.down"),Xa=Symbol("listbox.select"),Ja=({onUp:e,onDown:t,onEnter:n})=>{const o=Xt();xt({activity:Ya,callback:e,element:()=>o},[]),xt({activity:Ga,callback:t,element:()=>o},[]),xt({activity:Xa,callback:n,element:()=>o},[])},Za=({items:e,onSelect:t,defaultIndex:n=0})=>{const[o,s]=nt({index:n}),{index:i}=o,{length:r}=e;return T(()=>{s({index:o.index<0?n:Math.min(o.index,e.length-1),scroll:!0})},[e,n]),Ja({onUp:v(()=>s(l=>({index:l.index>0?l.index-1:r-1,scroll:!0})),[r]),onDown:v(()=>s(l=>({index:l.index<r-1?l.index+1:0,scroll:!0})),[r]),onEnter:v(()=>i>-1&&i<r&&t?.(e[i],i),[i,e,t])}),{position:o,highlight:v(l=>s({index:l}),[]),select:v(l=>t?.(l),[t])}},Ka=e=>typeof e=="object"&&e!==null&&Symbol.iterator in e;function at(e){return e==null?[]:Array.isArray(e)?e:typeof e=="string"?[e]:Ka(e)?Array.from(e):[e]}const Ue=(e,t=Tt)=>n=>{const o=at(e).map(t);return at(n).filter(s=>!o.includes(t(s)))},Qa=(e,t)=>t?n=>n!=null&&at(e).find(o=>o[t]===n[t]):n=>n!=null&&at(e).includes(n),tc=(e,t)=>{if(!t||!e)return e;const n=e.toLowerCase().indexOf(t.toLowerCase());if(n<0)return e;const o=n+t.length;return[e.slice(0,n),w`<mark>${e.slice(n,o)}</mark>`,e.slice(o)]},ec=(e=Tt)=>(t,n,{highlight:o,select:s,textual:i=Tt,query:r,isSelected:l})=>{const a=i(t),c=tc(a,r),u=e(c,t,n);return w`<div
				class="item"
				role="option"
				part="option"
				?aria-selected=${l(t)}
				data-index=${n}
				@mouseenter=${()=>o(n)}
				@click=${()=>s(t)}
				@mousedown=${d=>d.preventDefault()}
				title=${a}
			>
				${u}
			</div>
			<div class="sizer" virtualizer-sizer>${u}</div>`},nc=({itemRenderer:e=ec(),...t})=>{const n=Pe(t);return v((o,s)=>e(o,s,n),[n,e])},sc=["query","items","onSelect","textual","anchor","itemHeight","itemLimit","itemRenderer","defaultIndex","value","valueProperty","loading"],oc=({value:e,valueProperty:t,items:n,onSelect:o,defaultIndex:s,query:i,textual:r,itemRenderer:l,itemHeight:a=40,itemLimit:c=5})=>{const u=A(()=>Qa(e,t),[e,t]),d=A(()=>n.slice(),[n,u]),{position:f,highlight:h,select:m}=Za({items:d,onSelect:o,defaultIndex:isNaN(s)?void 0:Number(s)}),[_,p]=Wa(a);return{position:f,items:d,height:Math.min(c,d.length)*_,highlight:h,select:m,itemHeight:_,setItemHeight:p,renderItem:nc({itemRenderer:l,items:d,position:f,highlight:h,select:m,textual:r,query:i,isSelected:u})}},as=Us,ic=e=>{const t=mt(void 0),{position:n,items:o,renderItem:s,height:i,itemHeight:r,setItemHeight:l}=oc(e);return T(()=>{const a=t.current?.[on];a&&a.layoutComplete.then(()=>{e.dispatchEvent(new CustomEvent("layout-complete"));const{averageChildSize:c,averageMarginSize:u}=a._layout._metricsCache;return l(c+u*2)},as)},[o]),T(()=>{if(!n.scroll)return;const a=t.current?.[on];if(a){if(!a?._layout){a.layoutComplete.then(()=>a.element(n.index)?.scrollIntoView({block:"nearest"}),as);return}a.element(n.index)?.scrollIntoView({block:"nearest"})}},[n]),Ba(qa({...n,itemHeight:r,auto:e.itemHeight==="auto"})),w`<div
			class="items"
			style="min-height: ${i}px"
			${Et(a=>t.current=a)}
		>
			<div virtualizer-sizer></div>
			${Ma({items:o,renderItem:s,scroller:!0})}
		</div>
		<slot></slot>`};customElements.define("cosmoz-listbox",k(ic,{styleSheets:[gn(ja)]}));const rc=({multi:e,...t},n)=>w`<cosmoz-listbox
		part="listbox"
		?multi=${e}
		...=${Fa(Va(sc)(t))}
		>${n}</cosmoz-listbox
	>`,lc=ze`
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
`,ac=w`
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
`,cc=({onClear:e,disabled:t})=>w`
	<div
		class="content"
		part="content chip-text"
		@mousedown=${n=>n.preventDefault()}
	>
		<slot></slot>
	</div>
	${q(e&&!t,()=>w`<span
				class="clear"
				part="clear chip-clear"
				@mousedown=${n=>n.preventDefault()}
				@click=${e}
			>
				${ac}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",k(cc,{observedAttributes:["disabled"],styleSheets:[gn(lc)]}));const uc=({content:e,onClear:t,disabled:n,hidden:o,className:s="chip",slot:i})=>w`<cosmoz-autocomplete-chip
		class=${O(s)}
		slot=${O(i)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${n}
		?hidden=${o}
		.onClear=${t}
		title=${O(typeof e=="string"?e:void 0)}
		>${e}</cosmoz-autocomplete-chip
	>`,dc=({value:e,min:t=0,onDeselect:n,textual:o,disabled:s,chipRenderer:i=uc})=>[...e.filter(Boolean).map(r=>i({item:r,content:o(r),onClear:e.length>t&&(()=>n(r)),disabled:s,slot:"control"})),i({item:null,content:w`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],hc=U`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",k(()=>Z,{styleSheets:[hc]}));const yo=ze`
	:host {
		display: block;
		position: relative;
		min-width: 35px;
	}

	cosmoz-dropdown-next {
		display: block;
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

	.no-result {
		font-size: var(--cosmoz-autocomplete-listbox-font-size, 13px);
		font-weight: var(--cosmoz-autocomplete-listbox-font-weight, 400);
		padding: 0 22px;
		color: var(--cosmoz-listbox-color, #101010);
	}
`,yn=(e,t=()=>({}))=>{const n={type:e,toString(){return e}};return Object.assign((...s)=>Object.assign(t(...s),n),n)},cs=e=>e.type||e.toString(),us=e=>Array.isArray(e)?e:[e],fc=(e,t)=>{const n=us(t),o=(n.every(Array.isArray)?n:[n]).map(([s,i])=>({actions:us(s).map(cs),handle:i}));return(s=e,i)=>{const r=o.find(l=>l.actions.includes(cs(i)));return r?r.handle(s,i):s}},pt={pending:"pending",rejected:"rejected",resolved:"resolved"},bo={error:void 0,result:void 0,state:pt.pending},wo=yn(pt.pending),vo=yn(pt.resolved,e=>({result:e})),xo=yn(pt.rejected,e=>({error:e})),pc=fc(bo,[[wo,()=>({error:void 0,result:void 0,state:pt.pending})],[vo,(e,{result:t})=>({error:void 0,result:t,state:pt.resolved})],[xo,(e,{error:t})=>({error:t,result:void 0,state:pt.rejected})]]),mc=e=>{const[{error:t,result:n,state:o},s]=si(pc,bo);return T(()=>{if(!e)return;let i=!1;return s(wo()),e.then(r=>!i&&s(vo(r)),r=>!i&&s(xo(r))),()=>{i=!0}},[e]),[n,t,o]},_c=Symbol("autocomplete.deselect.last"),gc=Symbol("autocomplete.search.when.selected"),ds=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),yc=(e,t,n)=>{if(!t)return e;const o=ds(t.toLowerCase()),s=[];for(const i of e){const l=ds(n(i).toLowerCase()).indexOf(o);l<0||s.push({item:i,index:l})}return s.sort((i,r)=>i.index-r.index).map(({item:i})=>i)},bc=e=>e===!1||e==null?[]:e,wc=(e,t,n)=>e.dispatchEvent(new CustomEvent(t,{detail:n})),hs=[],vc=e=>(...t)=>{let n;const o=()=>{n&&cancelAnimationFrame(n)};return o(),n=requestAnimationFrame(()=>{n=void 0,e(...t)}),o},xc=(e,t,n)=>v(o=>{t?.(o),e.dispatchEvent(new CustomEvent(n,{detail:o}))},[t]),Cc=({value:e,text:t,onChange:n,onText:o,onSelect:s,limit:i,min:r,source:l,textProperty:a,textual:c,valueProperty:u,keepOpened:d,keepQuery:f,preserveOrder:h,defaultIndex:m,externalSearch:_,disabled:p,lazyOpen:g})=>{const y=i!=null?Number(i):void 0,b=r!=null?Number(r):void 0,x=A(()=>(c??Ha)(a),[c,a]),P=Xt(),[S,z]=Yt("opened",!1),I=!t,$=A(()=>t?.trim(),[t]),R=xc(P,o,"text"),tt=v(E=>{n?.(E,()=>z(!1)),wc(P,"value",E)},[n]),[et,ut]=nt([]),j=!!(g&&!$),rt=A(()=>j?Promise.resolve([]):Promise.resolve(typeof l=="function"?l({query:$,active:S}):l).then(bc),[l,S,$,j]),D=A(()=>at(e),[e]);T(()=>rt.then(ut),[rt]),xt({activity:_c,callback:()=>{const E=at(D);E.length>(b??0)&&tt(E.slice(0,-1))},check:()=>!p&&I&&P.matches(":focus-within"),element:()=>P},[]),xt({activity:gc,callback:E=>{const wt=at(D),Re=y===1;wt.length>0&&Re&&E.key.length===1&&tt(wt.slice(0,-1))},allowDefault:!0,check:()=>!p&&I&&P.matches(":focus-within"),element:()=>P},[y]),T(()=>{!S&&!f&&R("")},[S,f]),T(()=>{P.toggleAttribute("opened",!!S)},[S]);const L=Pe({onText:R,onChange:tt,value:D,limit:y,min:b,keepQuery:f,keepOpened:d,setOpened:z,onSelect:s,valueProperty:u}),[,,F]=mc(rt);return{limit:y,opened:S,query:$,textual:x,value:D,source$:rt,loading:F==="pending",items:A(()=>{if(!S||j)return hs;const E=h?et:[...D,...Ue(D,le(u))(et)];return _?E:yc(E,$,x)},[et,S,$,x,I,D,h,u,_,j]),onToggle:v(E=>{p||z(E.newState==="open")},[p]),onText:v(E=>{p||(R(E.target.value),z(!0))},[p,R,t,z]),onSelect:v(E=>{if(p)return;L.onSelect?.(E,L);const{onChange:wt,onText:Re,limit:Oo,min:$o,value:ko,keepQuery:Lo,keepOpened:Ro,setOpened:No,valueProperty:Mo}=L;Lo||Re(""),Ro||No(!1);const Jt=at(ko),Ne=le(Mo),vn=Jt.some(Io=>Ne(Io)===Ne(E));vn&&Jt.length===$o||wt((vn?Ue(E,Ne)(Jt):[...Jt,E]).slice(-Oo))},[p,L]),onDeselect:v(E=>{p||L.onChange(Ue(E,le(L.valueProperty))(L.value))},[p,L]),defaultIndex:$!==void 0&&$?.length>0?0:m}},Ec=e=>{const t=e.shadowRoot.querySelectorAll(".chip"),n=e.shadowRoot.querySelector(".badge");n.hidden=!0;for(const l of t)l.hidden=!1;const s=e.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let i;for(i=0;i<t.length;i++){const a=t[i].getBoundingClientRect();if(!(a.x+a.width<=s.x+s.width-24))break}const r=t.length-i;for(n.querySelector("span").textContent="+"+r.toString(),n.hidden=r<1;i<t.length;i++)t[i].hidden=!0},Sc=({value:e,opened:t,wrap:n,limit:o})=>{const s=Xt(),i=!(n||o===1)&&e.length>0,r=A(()=>vc(()=>Ec(s)),[]),[l,a]=nt(0);Ye(()=>{if(!i)return;const c=s.shadowRoot.querySelector("cosmoz-input"),u=new ResizeObserver(d=>{a(d[0].contentRect.width)});return u.observe(c),()=>u.disconnect()},[i]),Ye(()=>i?r():void 0,[i,l,t,e])},Pc=["input","control","label","line","error","wrap"].map(e=>`${e}: input-${e}`).join(),Tc=({opened:e,isSingle:t,showSingle:n,hasResultsOrQuery:o})=>!e||t&&!n?!1:o,Ac=e=>{const{opened:t,invalid:n,errorMessage:o,label:s,placeholder:i,disabled:r,noLabelFloat:l,alwaysFloatLabel:a,textual:c,text:u,onText:d,onToggle:f,onDeselect:h,value:m,limit:_,min:p,showSingle:g,items:y,source$:b,loading:x,chipRenderer:P}=e,S=_===1,z=S&&m?.[0]!=null,I=x||y.length>0||u!=null&&u.length>0;return w`<cosmoz-dropdown-next
			open-on-focus
			?disabled=${r}
			.opened=${t}
			@dropdown-toggle=${f}
			part="dropdown"
		>
			<cosmoz-input
				slot="button"
				id="input"
				part="input"
				.label=${s}
				.placeholder=${z?void 0:i}
				?no-label-float=${l}
				?always-float-label=${m?.length>0||a}
				?readonly=${z}
				?disabled=${r}
				?invalid=${de([b,n],()=>sn(b.then(()=>n,()=>!0),n))}
				.errorMessage=${de([b,o],()=>sn(b.then(()=>o,$=>$.message),o))}
				.value=${Ae(u)}
				@value-changed=${d}
				autocomplete="off"
				exportparts=${Pc}
				?data-one=${S}
				?data-single=${z}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${dc({value:m,min:p,onDeselect:h,textual:c,disabled:r,chipRenderer:P})}
			</cosmoz-input>

			${q(Tc({opened:t,isSingle:z,showSingle:g,hasResultsOrQuery:I}),()=>rc({...e,items:y,multi:!S},q(x,()=>w`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>q(u!=null&&u.length>0&&y.length===0,()=>w`<slot name="no-result">
											<p class="no-result">${Ho("No results found")}</p>
										</slot>`))))}
		</cosmoz-dropdown-next>`},bn=e=>{const t={...e,...Cc(e)};return Sc(t),Ac(t)},wn=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap","lazy-open"],zc=e=>{const{onChange:t,onText:n,...o}=e,[s,i]=Yt("value");return T(()=>{e.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),bn({...o,value:s,onChange:v((r,...l)=>{i(r),t?.(r,...l)},[t]),onText:v(r=>{e.text=r,n?.(r)},[n])})},Co=[gn(yo)],Eo={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-ui",k(bn,{observedAttributes:wn,styleSheets:Co,shadowRootInit:Eo}));customElements.define("cosmoz-autocomplete",k(zc,{observedAttributes:wn,styleSheets:Co,shadowRootInit:Eo}));const Oc="data:image/svg+xml,%3Csvg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.5 2.5L8.5 8.5M8.5 2.5L2.5 8.5' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E",$c=U`
	.chip[data-state='excluded'] {
		background: var(--cosmoz-autocomplete-excluded-bg-color, rgb(244, 67, 54));
	}

	cosmoz-autocomplete-chip[data-state='excluded']::part(content) {
		color: var(--cosmoz-autocomplete-excluded-chip-color, #fff);
	}

	cosmoz-autocomplete-chip[data-state='excluded']::part(clear) {
		background-color: var(
			--cosmoz-autocomplete-excluded-chip-clear-bg-color,
			#fff
		);
		stroke: var(
			--cosmoz-autocomplete-excluded-chip-clear-stroke,
			var(--cosmoz-autocomplete-excluded-bg-color, rgb(244, 67, 54))
		);
	}

	cosmoz-listbox::part(excluded)::before {
		border-color: var(
			--cosmoz-autocomplete-excluded-bg-color,
			rgb(244, 67, 54)
		);
		/* prettier-ignore */
		background: url("${Oc}") var(--cosmoz-autocomplete-excluded-bg-color, rgb(244, 67, 54)) no-repeat 50%;
	}

	cosmoz-listbox::part(excluded):hover {
		background: var(
			--cosmoz-listbox-excluded-active-color,
			rgba(244, 67, 54, 0.1)
		);
	}
`,fs=e=>({item:e,excluded:!1}),So=e=>e.item,kc=e=>{const[t,n]=Yt(e),o=v(s=>n(i=>{const r=Sr(s,i?.map(So));if(!r)return;if(!i)return r.map(fs);const l=i.reduce((c,u)=>r.includes(u.item)?[...c,u]:u.excluded?c:[...c,{...u,excluded:!0}],[]),a=r.filter(c=>!i.some(u=>u.item===c)).map(fs);return[...l,...a]}),[]);return{value:t,setExcludingValue:o,setValue:n}},Lc=(e,t)=>e?.some(n=>n.item===t&&n.excluded),Po=(e,t)=>t&&Lc(e,t)?"excluded":Z,Rc=e=>(t,n,{highlight:o,select:s,textual:i,isSelected:r})=>{const l=i(t);return w`<div
				class="item"
				role="option"
				part="option ${Po(e,t)}"
				?aria-selected=${r(t)}
				data-index=${n}
				@mouseenter=${()=>o(n)}
				@click=${()=>s(t)}
				@mousedown=${a=>a.preventDefault()}
			>
				${l}
			</div>
			<div class="sizer" virtualizer-sizer>${l}</div>`},Nc=(e,t)=>({item:n,content:o,disabled:s,hidden:i,className:r="chip",slot:l})=>w`<cosmoz-autocomplete-chip
			class=${O(r)}
			slot=${O(l)}
			part="chip"
			exportparts="chip-text, chip-clear"
			data-state=${Po(e,n)}
			?disabled=${s}
			?hidden=${i}
			.onClear=${()=>t(n)}
			title=${O(typeof o=="string"?o:void 0)}
		>
			${o}
		</cosmoz-autocomplete-chip>`,Mc=e=>{const{value:t,setValue:n,setExcludingValue:o}=kc("value"),[s,i]=Yt("text"),r=v(l=>n(a=>a?.filter(c=>c.item!==l)),[]);return bn({...e,value:A(()=>t?.map(So),[t]),onChange:v(l=>{o(l)},[]),text:s,onText:v(l=>{i(l)},[]),itemRenderer:A(()=>Rc(t),[t]),chipRenderer:A(()=>Nc(t,r),[t,r])})},Ic={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-excluding",k(Mc,{observedAttributes:wn,styleSheets:[yo,$c],shadowRootInit:Ic}));const Dc=U`
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
`,Fc=()=>Z,Bc=k(Fc,{styleSheets:[Dc]});customElements.define("cosmoz-spinner",Bc);const To=["T"," "],ps=e=>{if(!e||typeof e!="string")return;let t;return To.some(n=>e.match(n)?(t=e.split(n),!0):!1),t||[e]},Hc=(e,t)=>{const n=ps(e),o=ps(t);return{minDate:Array.isArray(n)?n.shift():null,minTime:Array.isArray(n)?n.shift():null,maxDate:Array.isArray(o)?o.shift():null,maxTime:Array.isArray(o)?o.shift():null}},ms=(e,t)=>{if(!(!e&&!t))return!e&&t?`T${t}`:e&&!t?e:`${e}T${t}`},Vc=e=>{if(e){for(const t of To)if(e.match(t)){const n=e.split(t);return{date:n.shift(),time:n.shift()}}return{date:e}}},Uc=e=>{const{dateLabel:t,timeLabel:n,min:o,max:s,step:i="1",value:r}=e,{minDate:l,maxDate:a,minTime:c,maxTime:u}=A(()=>Hc(o,s),[o,s]),{date:d,time:f}=A(()=>Vc(r)??{},[r]);return T(()=>{e.dispatchEvent(new CustomEvent("cosmoz-datetime-input-value-changed",{bubbles:!0,composed:!0}))},[r]),w`
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
			@value-changed="${h=>Wt(e,"value",ms(h.target.value,f))}"
			.min="${l}"
			.max="${a}"
		></cosmoz-input>
		<cosmoz-input
			label="${n}"
			type="time"
			.value="${f}"
			@value-changed="${h=>Wt(e,"value",ms(d,h.target.value))}"
			step="${i}"
			.min="${c}"
			.max="${u}"
		></cosmoz-input>
	`};customElements.define("cosmoz-datetime-input",k(Uc,{observedAttributes:["date-label","time-label","min","max","step"]}));const jc=e=>t=>{const n=t.match(e);return n&&{result:n,url:new URL(t,document.location.origin)}},qc=(e,t)=>{for(const n of e){const o=n.rule,s=typeof o=="function"?o(t):jc(o)(t);if(s)return{...n,route:n,match:s,url:t}}},_s=()=>window.location.href.replace(window.location.origin,""),Wc=()=>{const[e,t]=nt(_s);return T(()=>{const n=()=>t(_s);return window.addEventListener("popstate",n),()=>window.removeEventListener("popstate",n)},[t]),e},Yc=e=>{const t=Wc();return A(()=>qc(e,t),[e,t])},bu=(e,t=null,{notify:n=!0,replace:o=!0}={})=>{(o?history.replaceState:history.pushState).call(history,t,"",e),n&&queueMicrotask(()=>window.dispatchEvent(new CustomEvent("popstate",{bubbles:!1})))},Gc=e=>{const t=Yc(e);return{route:t,result:A(()=>{if(t){const{handle:n,...o}=t;return n(o)}},[t])}},ne=(e,t,n)=>e.dispatchEvent(new CustomEvent(t,{bubbles:!1,cancelable:!1,composed:!0,...n})),Xc=(e,t,n)=>{T(()=>{if(!n){ne(e,"route-not-found");return}ne(e,"route-loading",{detail:t}),Promise.resolve(n).then(()=>ne(e,"route-loaded",{detail:t})).catch(o=>ne(e,"route-error",{detail:{route:t,error:o}}))},[n])},Jc=e=>{const t=e.routes,{route:n,result:o}=Gc(t);return Xc(e,n,o),de([o],()=>sn(Promise.resolve(o).catch(()=>Z),Z))};customElements.define("cosmoz-router",k(Jc));const Ao=()=>new URL(location.hash.replace(/^#!?/iu,"").replace("%23","#"),location.origin),wu=(e,t=Tt)=>{const n=new URLSearchParams(Ao().hash.replace("#","")).getAll(e);switch(n.length){case 0:return;case 1:return t(n[0]);default:return n.map(t)}},vu=(e,t=Tt)=>{const n=Array.from(new URLSearchParams(Ao().hash.replace("#","")).entries()).filter(([o])=>o.startsWith(e)).map(([o,s])=>t([o.replace(e,""),s])).filter(([,o])=>o!=null);return Object.fromEntries(n)};function*xu(e,t){if(e!==void 0){let n=0;for(const o of e)yield t(o,n++)}}var X=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:void 0;function Zc(e,t){return typeof t>"u"?t={autoBom:!1}:typeof t!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\uFEFF",e],{type:e.type}):e}function je(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){rn(o.response,t,n)},o.onerror=function(){console.error("could not download file")},o.send()}function gs(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch{}return t.status>=200&&t.status<=299}function se(e){try{e.dispatchEvent(new MouseEvent("click"))}catch{var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var ys=X.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),rn=X.saveAs||(typeof window!="object"||window!==X?function(){}:"download"in HTMLAnchorElement.prototype&&!ys?function(t,n,o){var s=X.URL||X.webkitURL,i=document.createElement("a");n=n||t.name||"download",i.download=n,i.rel="noopener",typeof t=="string"?(i.href=t,i.origin!==location.origin?gs(i.href)?je(t,n,o):se(i,i.target="_blank"):se(i)):(i.href=s.createObjectURL(t),setTimeout(function(){s.revokeObjectURL(i.href)},4e4),setTimeout(function(){se(i)},0))}:"msSaveOrOpenBlob"in navigator?function(t,n,o){if(n=n||t.name||"download",typeof t=="string")if(gs(t))je(t,n,o);else{var s=document.createElement("a");s.href=t,s.target="_blank",setTimeout(function(){se(s)})}else navigator.msSaveOrOpenBlob(Zc(t,o),n)}:function(t,n,o,s){if(s=s||open("","_blank"),s&&(s.document.title=s.document.body.innerText="downloading..."),typeof t=="string")return je(t,n,o);var i=t.type==="application/octet-stream",r=/constructor/i.test(X.HTMLElement)||X.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||i&&r||ys)&&typeof FileReader<"u"){var a=new FileReader;a.onloadend=function(){var d=a.result;d=l?d:d.replace(/^data:[^;]*;/,"data:attachment/file;"),s?s.location.href=d:location=d,s=null},a.readAsDataURL(t)}else{var c=X.URL||X.webkitURL,u=c.createObjectURL(t);s?s.location=u:location.href=u,s=null,setTimeout(function(){c.revokeObjectURL(u)},4e4)}});X.saveAs=rn.saveAs=rn;const ae=function(e){e&&console.log(e)};class zo{constructor(t,n){this._filename=t,this.buffer=null,this.lastDownloadBlobUrl=null,this._mimeType=n}generate(){}createDownloadUrl(){this.buffer||this.generate();const t=new Blob([this.buffer],{type:this._mimeType});return this.lastDownloadBlobUrl&&window.URL.revokeObjectURL(this.lastDownloadBlobUrl),this.lastDownloadBlobUrl=URL.createObjectURL(t),this.lastDownloadBlobUrl}createDownloadLink(t){const n=t instanceof HTMLAnchorElement?t:document.createElement("a");return typeof t=="string"&&(n.innerHTML=t),n.href=this.createDownloadUrl(),n.download=this._filename,n.hasChildNodes||(n.innerText=this._filename),ae("Link created for file "+this._filename),n}}let oe=null;class Kc extends zo{constructor(t,n){super(t,"application/zip"),this.files=[],this.createFolderEntries=!!n;const o=new Date;this.timeInt=Math.round(o.getSeconds()/2)|o.getMinutes()<<5|o.getHours()<<11,this.dateInt=o.getFullYear()-1980<<9|o.getMonth()+1<<5|o.getDate()}addFileFromString(t,n){const o=new TextEncoder("utf-8").encode(n);return this.addFileFromUint8Array(t,o),this}addFileFromUint8Array(t,n){if(!(n instanceof Uint8Array))throw new Error("invalid parameter");return this.files.push({name:t.replace("\\","/"),data:n}),this}generate(){ae("NullZip archive generation started");const t={};for(const c of this.files)c.size=c.data?c.data.byteLength:0,c.crc=c.data?this.crc(c.data):0,t[c.name]=c;const n=[];if(this.createFolderEntries){const c=/\//giu;for(const u of this.files){const d=u.name;for(let f=c.exec(d);f!==null;f=c.exec(d)){const h={name:d.substr(0,f.index+1),size:0,crc:0,data:new Uint8Array(0)};typeof t[h.name]>"u"&&(t[h.name]=h,n.push(h))}}}Array.prototype.push.apply(this.files,n),this.files.sort((c,u)=>c.name.length-u.name.length||c.name.localeCompare(u.name));const o=this.files.reduce((c,u)=>c+76+u.name.length*2+u.size,22);ae("Estimated file size: "+o),this.buffer=new ArrayBuffer(o);const s=new Qc(this.buffer),i=this.hex2u8a("504b0304140000000000");for(const c of this.files)c.offs=s.i,s.writeByteArray(i),s.uint16(this.timeInt),s.uint16(this.dateInt),s.uint32(c.crc),s.uint32(c.size),s.uint32(c.size),s.uint16(c.name.length),s.uint16(0),s.writeASCII(c.name),c.size>0&&s.writeByteArray(c.data);const r=s.i,l=this.hex2u8a("504b01023f00140000000000");for(const c of this.files)s.writeByteArray(l),s.uint16(this.timeInt),s.uint16(this.dateInt),s.uint32(c.crc),s.uint32(c.size),s.uint32(c.size),s.uint16(c.name.length),s.uint16(0),s.uint16(0),s.uint16(0),s.uint16(0),s.uint32(c.size?32:48),s.uint32(c.offs),s.writeASCII(c.name);const a=s.i-r;return s.writeByteArray(this.hex2u8a("504b050600000000")),s.uint16(this.files.length),s.uint16(this.files.length),s.uint32(a),s.uint32(r),s.uint16(0),ae("Finished creating zip. size="+s.i+", predicted size="+o),this.buffer}crc(t){let n,o,s=-1;if(!oe)for(oe=[],o=0;o<256;n=++o){for(let i=0;i<8;i++)n=n&1?3988292384^n>>>1:n>>>1;oe[o]=n}for(let i=0;i<t.byteLength;i++)s=s>>>8^oe[(s^t[i])&255];return(s^-1)>>>0}hex2u8a(t){const n=new Uint8Array(Math.ceil(t.length/2));for(let o=0;o<n.length;o++)n[o]=parseInt(t.substr(o*2,2),16);return n}}class Qc{constructor(t){this.dw=new DataView(t),this.i=0,this.le=!0,this.utf8encoder=new TextEncoder("utf-8")}uint8(t){this.dw.setUint8(this.i++,t)}uint16(t){this.dw.setUint16(this.i,t,this.le),this.i+=2}uint32(t){this.dw.setUint32(this.i,t,this.le),this.i+=4}writeByteArray(t){if(!(t instanceof Uint8Array))throw new Error("invalid parameter");new Uint8Array(this.dw.buffer).set(t,this.i),this.i+=t.byteLength}writeASCII(t){for(let n=0;n<t.length;n++)this.dw.setUint8(this.i++,t.charCodeAt(n)&255)}}const Rt="application/vnd.openxmlformats-officedocument.spreadsheetml",Le="http://schemas.openxmlformats.org",ie=`${Le}/spreadsheetml/2006/main`,qe=`${Le}/package/2006`,Nt=`${Le}/officeDocument/2006/relationships`,bs=[{id:164,code:"yyyy&quot;-&quot;mm&quot;-&quot;dd"},{id:165,code:"yyyy&quot;-&quot;mm&quot;-&quot;dd&quot; &quot;h&quot;:&quot;mm&quot;:&quot;ss"}];class Cu extends zo{constructor(t,n){super(t,`${Rt}.sheet`),this.sheets=[],this.frozen=!!(n&&n.frozen),this.autoFilter=!!(n&&n.filter)}addSheetFromData(t,n){const o=this.sheets.length+1;return this.sheets.push({id:o,name:this.escapeXml(n||"Sheet"+o),data:t}),this}generate(){const t=[{name:"xl/styles.xml",xml:`<styleSheet xmlns="${ie}" xmlns:mc="${Le}/markup-compatibility/2006"><numFmts count="${bs.length}">${bs.map(s=>`<numFmt numFmtId="${s.id}" formatCode="${s.code}" />`)}</numFmts><fonts count="2"><font><sz val="10.0"/><color rgb="FF000000"/><name val="Arial"/></font><font><b/></font></fonts><fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="lightGray"/></fill></fills><borders count="1"><border><left/><right/><top/><bottom/></border></borders><cellStyleXfs count="1"><xf borderId="0" fillId="0" fontId="0" numFmtId="0" applyAlignment="1" applyFont="1"/></cellStyleXfs><cellXfs><xf borderId="0" fillId="0" fontId="0" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment/></xf><xf borderId="0" fillId="0" fontId="1" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment/></xf><xf borderId="0" fillId="0" fontId="0" numFmtId="164" xfId="0" applyAlignment="1" applyFont="1" applyNumberFormat="1"><alignment /></xf><xf borderId="0" fillId="0" fontId="0" numFmtId="165" xfId="0" applyAlignment="1" applyFont="1" applyNumberFormat="1"><alignment /></xf></cellXfs><cellStyles count="1"><cellStyle xfId="0" name="Normal" builtinId="0"/></cellStyles><dxfs count="0"/></styleSheet>`},{name:"xl/sharedStrings.xml",xml:`<sst xmlns="${ie}" count="2" uniqueCount="2"><si><t>text here</t></si></sst>`},{name:"xl/workbook.xml",xml:`<workbook xmlns="${ie}" xmlns:r="${Nt}"><workbookPr/><sheets>`+this.sheets.map(s=>`<sheet state="visible" name="${s.name}" sheetId="${s.id}" r:id="rId${s.id+2}"/>`).join("")+"</sheets><definedNames/><calcPr/></workbook>"},{name:"xl/_rels/workbook.xml.rels",xml:`<Relationships xmlns="${qe}/relationships"><Relationship Id="rId1" Type="${Nt}/styles" Target="styles.xml" /><Relationship Id="rId2" Type="${Nt}/sharedStrings" Target="sharedStrings.xml"/>`+this.sheets.map(s=>`<Relationship Id="rId${s.id+2}" Type="${Nt}/worksheet" Target="worksheets/sheet${s.id}.xml"/>`).join("")+"</Relationships>"},{name:"[Content_Types].xml",xml:`<Types xmlns="${qe}/content-types"><Default ContentType="application/xml" Extension="xml"/><Default ContentType="application/vnd.openxmlformats-package.relationships+xml" Extension="rels"/>`+this.sheets.map(s=>`<Override ContentType="${Rt}.worksheet+xml" PartName="/xl/worksheets/sheet${s.id}.xml"/>`).join("")+`<Override ContentType="${Rt}.sharedStrings+xml" PartName="/xl/sharedStrings.xml"/><Override ContentType="${Rt}.styles+xml" PartName="/xl/styles.xml" /><Override ContentType="${Rt}.sheet.main+xml" PartName="/xl/workbook.xml"/></Types>`},{name:"_rels/.rels",xml:`<Relationships xmlns="${qe}/relationships"><Relationship Id="rId1" Type="${Nt}/officeDocument" Target="xl/workbook.xml"/></Relationships>`}],n=this.sheets.map(s=>{let i=0;const r=s.data.map((l,a)=>{const c=this.frozen&&a===0?' s="1"':"";l.length>i&&(i=l.length);const u=l.map((d,f)=>{const h=this.colName(f)+(a+1);return typeof d=="number"?`<c r="${h}"${c}><v>${d}</v></c>`:d instanceof Date?`<c s="${d.getHours()||d.getMinutes()||d.getSeconds()?3:2}"><v>${this.dateToExcelDate(d)}</v></c>`:`<c t="inlineStr"${c}><is><t>${this.escapeXml(d.toString())}</t></is></c>`});return`<row r="${a+1}">${u.join("")}</row>`});return{name:`xl/worksheets/sheet${s.id}.xml`,xml:`<worksheet xmlns="${ie}"><sheetViews><sheetView workbookViewId="0"`+(this.frozen?' tabSelected="1"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView>':"/>")+`</sheetViews><sheetFormatPr customHeight="1" defaultColWidth="17.5" defaultRowHeight="15.75"/><sheetData>${r.join("")}</sheetData>`+(this.autoFilter?`<autoFilter ref="A1:${this.colName(i)}${s.data.length}"/>`:"")+"</worksheet>"}}),o=new Kc(this._filename,!1);return[...t,...n].forEach(s=>o.addFileFromString(s.name,s.xml)),this.buffer=o.generate(),this.buffer}colName(t){return t<26?String.fromCharCode(t+65):String.fromCharCode(Math.floor(t/26+64))+String.fromCharCode(Math.floor(t%26+65))}escapeXml(t){return t.replace(/[<>&'"]/gu,n=>["&lt;","&gt;","&amp;","&apos;","&quot;"][`<>&'"`.indexOf(n)])}dateToExcelDate(t){return 25569+(t.getTime()-t.getTimezoneOffset()*6e4)/864e5}}const ws=(e,t)=>{Object.assign(e.style,{display:t?"":"none"})};class tu extends HTMLElement{static get observedAttributes(){return["opened"]}toggle=Os("height");constructor(){super();const t=new CSSStyleSheet;t.replaceSync(`
      :host { display: block; }
		`);const n=this.attachShadow({mode:"open"});n.appendChild(document.createElement("slot")),n.adoptedStyleSheets=[t]}connectedCallback(){ws(this,this.getAttribute("opened")!=null)}attributeChangedCallback(t,n,o){if(t==="opened"){const s=o!=null;return this.isConnected?this.toggle(this,s):ws(this,s)}}}customElements.define("cosmoz-collapse",tu);export{Ma as $,O as A,Pe as B,Tt as C,en as D,vu as E,wu as F,v as G,bu as H,Ao as I,ui as J,As as K,Pa as L,xu as M,rn as N,Cu as O,cu as P,su as Q,ou as R,cr as S,lu as T,uu as U,Va as V,mt as W,Us as X,Yt as Y,ua as Z,fu as _,U as a,de as a0,au as b,k as c,mu as d,pu as e,Ye as f,N as g,Kl as h,Sr as i,_u as j,Hn as k,at as l,gu as m,q as n,iu as o,le as p,Ha as q,po as r,_o as s,ze as t,nt as u,hu as v,du as w,gn as x,A as y,T as z};
