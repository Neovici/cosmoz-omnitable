import{A as it,w as Qn,d as O,r as ti,D as yr,E as H,p as ei,n as _r,M as br,u as mt,v as Mt,h as Qe}from"./iframe-BbxhXiMK.js";import{_ as wr}from"./preload-helper-PPVm8Dsz.js";const N=e=>e??it;function G(e,t,s){return e?t(e):s?.(e)}const _d=({slot:e,title:t,className:s,width:n="24",height:i="24",styles:r}={})=>O`
  <svg
    slot=${N(e)}
    class=${`announcement-icon ${s??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${n}
    height=${i}
    style=${N(r)}
  >
    ${G(t,()=>Qn`<title>${t}</title>`)}
    <path
      d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"
    />
  </svg>
`,bd=({slot:e,title:t,className:s,width:n="24",height:i="24",styles:r}={})=>O`
  <svg
    slot=${N(e)}
    class=${`error-icon ${s??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${n}
    height=${i}
    style=${N(r)}
  >
    ${G(t,()=>Qn`<title>${t}</title>`)}
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
    />
  </svg>
`;let we,si=0;function Bs(e){we=e}function js(){we=null,si=0}function vr(){return si++}const ts=Symbol("haunted.phase"),ge=Symbol("haunted.hook"),Vs=Symbol("haunted.update"),Us=Symbol("haunted.commit"),gt=Symbol("haunted.effects"),Wt=Symbol("haunted.layoutEffects"),ds="haunted.context";class xr{update;host;virtual;[ge];[gt];[Wt];constructor(t,s){this.update=t,this.host=s,this[ge]=new Map,this[gt]=[],this[Wt]=[]}run(t){Bs(this);let s=t();return js(),s}_runEffects(t){let s=this[t];Bs(this);for(let n of s)n.call(this);js()}runEffects(){this._runEffects(gt)}runLayoutEffects(){this._runEffects(Wt)}teardown(){this[ge].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}const Sr=Promise.resolve().then.bind(Promise.resolve());function ni(){let e=[],t;function s(){t=null;let n=e;e=[];for(var i=0,r=n.length;i<r;i++)n[i]()}return function(n){e.push(n),t==null&&(t=Sr(s))}}const Cr=ni(),Hs=ni();class Er{renderer;host;state;[ts];_updateQueued;_active;constructor(t,s){this.renderer=t,this.host=s,this.state=new xr(this.update.bind(this),s),this[ts]=null,this._updateQueued=!1,this._active=!1}update(){this._active&&(this._updateQueued||(Cr(()=>{let t=this.handlePhase(Vs);Hs(()=>{this.handlePhase(Us,t),Hs(()=>{this.handlePhase(gt)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(t,s){switch(this[ts]=t,t){case Us:this.commit(s),this.runEffects(Wt);return;case Vs:return this.render();case gt:return this.runEffects(gt)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(t){this.state._runEffects(t)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const Ps=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},Pr=e=>e?.map(t=>typeof t=="string"?Ps(t):t),Or=(e,...t)=>e.flatMap((s,n)=>[s,t[n]||""]).join(""),q=Or,Tr=(e="")=>e.replace(/-+([a-z])?/g,(t,s)=>s?s.toUpperCase():"");function Ar(e){class t extends Er{frag;renderResult;constructor(i,r,o){super(i,o||r),this.frag=r}commit(i){this.renderResult=e(i,this.frag)}}function s(n,i,r){const o=(r||i||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:l=!0,shadowRootInit:c={},styleSheets:u}=r||i||{},d=Pr(n.styleSheets||u);class h extends o{_scheduler;static get observedAttributes(){return n.observedAttributes||a||[]}constructor(){if(super(),l===!1)this._scheduler=new t(n,this);else{const g=this.attachShadow({mode:"open",...c});d&&(g.adoptedStyleSheets=d),this._scheduler=new t(n,g,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(g,y,_){if(y===_)return;let b=_===""?!0:_;Reflect.set(this,Tr(g),b)}}function f(m){let g=m,y=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return g},set(_){y&&g===_||(y=!0,g=_,this._scheduler&&this._scheduler.update())}})}const p=new Proxy(o.prototype,{getPrototypeOf(m){return m},set(m,g,y,_){let b;return g in m?(b=Object.getOwnPropertyDescriptor(m,g),b&&b.set?(b.set.call(_,y),!0):(Reflect.set(m,g,y,_),!0)):(typeof g=="symbol"||g[0]==="_"?b={enumerable:!0,configurable:!0,writable:!0,value:y}:b=f(y),Object.defineProperty(_,g,b),b.set&&b.set.call(_,y),!0)}});return Object.setPrototypeOf(h.prototype,p),h}return s}class ct{id;state;constructor(t,s){this.id=t,this.state=s}}function $r(e,...t){let s=vr(),n=we[ge],i=n.get(s);return i||(i=new e(s,we,...t),n.set(s,i)),i.update(...t)}function ut(e){return $r.bind(null,e)}function ii(e){return ut(class extends ct{callback;lastValues;values;_teardown;constructor(t,s,n,i){super(t,s),e(s,this)}update(t,s){this.callback=t,this.values=s}call(){const t=!this.values||this.hasChanged();this.lastValues=this.values,t&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(t){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),t&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((t,s)=>this.lastValues[s]!==t)}})}function ri(e,t){e[gt].push(t)}const L=ii(ri),Lr=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,oi=ut(class extends ct{Context;value;_ranEffect;_unsubscribe;constructor(e,t,s){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,ri(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const t={Context:e,callback:this._updater};Lr(this.state.host).dispatchEvent(new CustomEvent(ds,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:n=null,value:i}=t;this.value=n?i:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}});function kr(e){return t=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(ds,this)}disconnectedCallback(){this.removeEventListener(ds,this)}handleEvent(n){const{detail:i}=n;i.Context===s&&(i.value=this.value,i.unsubscribe=this.unsubscribe.bind(this,i.callback),this.listeners.add(i.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let i of this.listeners)i(n)}get value(){return this._value}},Consumer:e(function({render:n}){const i=oi(s);return n(i)},{useShadowDOM:!1}),defaultValue:t};return s}}const k=ut(class extends ct{value;values;constructor(e,t,s,n){super(e,t),this.value=s(),this.values=n}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((t,s)=>this.values[s]!==t)}}),P=(e,t)=>k(()=>e,t);function Rr(e,t){e[Wt].push(t)}const hs=ii(Rr),lt=ut(class extends ct{args;constructor(e,t,s){super(e,t),this.updater=this.updater.bind(this),typeof s=="function"&&(s=s()),this.makeArgs(s)}update(){return this.args}updater(e){const[t]=this.args;typeof e=="function"&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}}),zr=ut(class extends ct{reducer;currentState;constructor(e,t,s,n,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i!==void 0?i(n):n}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}}),Nr=/([A-Z])/gu,se=ut(class extends ct{property;eventName;constructor(e,t,s,n){if(super(e,t),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=s,this.eventName=s.replace(Nr,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof n=="function"&&(n=n()),n!=null&&this.updateProp(n))}update(e,t){return[this.state.host[this.property],this.updater]}updater(e){const t=this.state.host[this.property];typeof e=="function"&&(e=e(t)),!Object.is(t,e)&&this.updateProp(e)}updateProp(e){this.notify(e).defaultPrevented||(this.state.host[this.property]=e)}notify(e){const t=new CustomEvent(this.eventName,{detail:{value:e,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(t),t}}),wd=e=>t=>{t.preventDefault(),e(t.detail.value)};function Mr(e){let t=e;return{get current(){return t},set current(s){t=s},get value(){return t},set value(s){t=s}}}function $t(e){return k(()=>Mr(e),[])}ut(class extends ct{update(){return this.state.host}});function Ir({render:e}){const t=Ar(e),s=kr(t);return{component:t,createContext:s}}const X={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},dt=e=>(...t)=>({_$litDirective$:e,values:t});let vt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,n){this._$Ct=t,this._$AM=s,this._$Ci=n}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};const Kt=(e,t)=>{const s=e._$AN;if(s===void 0)return!1;for(const n of s)n._$AO?.(t,!1),Kt(n,t);return!0},ve=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while(s?.size===0)},ai=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),Br(t)}};function Fr(e){this._$AN!==void 0?(ve(this),this._$AM=e,ai(this)):this._$AM=e}function Dr(e,t=!1,s=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(n))for(let r=s;r<n.length;r++)Kt(n[r],!1),ve(n[r]);else n!=null&&(Kt(n,!1),ve(n));else Kt(this,e)}const Br=e=>{e.type==X.CHILD&&(e._$AP??=Dr,e._$AQ??=Fr)};class Os extends vt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,n){super._$AT(t,s,n),ai(this),this.isConnected=t._$AU}_$AO(t,s=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),s&&(Kt(this,t),ve(this))}setValue(t){if(ti(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:D,createContext:jr}=Ir({render:yr}),Vr={duration:250},li=e=>(t,s,n)=>{const i="max"+e.charAt(0).toUpperCase()+e.slice(1);Object.assign(t.style,{[i]:"",display:""});const{[e]:r}=t.getBoundingClientRect(),o=[0,r],[a,l]=s?o:o.slice().reverse(),c=t.animate([{[i]:`${a}px`},{[i]:`${l}px`}],{...Vr,...n});c.onfinish=()=>Object.assign(t.style,{[i]:"",display:s?"":"none"})};const Ur={},xe=dt(class extends vt{constructor(){super(...arguments),this.ot=Ur}render(e,t){return t()}update(e,[t,s]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((n,i)=>n===this.ot[i]))return H}else if(this.ot===t)return H;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,s)}}),es=new WeakMap,Lt=dt(class extends Os{render(e){return it}update(e,[t]){const s=t!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),it}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let s=es.get(t);s===void 0&&(s=new WeakMap,es.set(t,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?es.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});const ci="important",Hr=" !"+ci,Wr=dt(class extends vt{constructor(e){if(super(e),e.type!==X.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,s)=>{const n=e[s];return n==null?t:t+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(e,[t]){const{style:s}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const n of this.ft)t[n]==null&&(this.ft.delete(n),n.includes("-")?s.removeProperty(n):s[n]=null);for(const n in t){const i=t[n];if(i!=null){this.ft.add(n);const r=typeof i=="string"&&i.endsWith(Hr);n.includes("-")||r?s.setProperty(n,r?i.slice(0,-11):i,r?ci:""):s[n]=i}}return H}}),Kr=(e=HTMLElement)=>class extends e{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},Yr=q`
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
`,qr=()=>O`<div class="wrap" part="wrap"><slot></slot></div>`;customElements.define("cosmoz-dropdown-content",Kr(D(qr,{styleSheets:[Yr]})));const kt=Math.min,K=Math.max,Se=Math.round,oe=Math.floor,nt=e=>({x:e,y:e}),Jr={left:"right",right:"left",bottom:"top",top:"bottom"},Gr={start:"end",end:"start"};function Ws(e,t,s){return K(e,kt(t,s))}function Ne(e,t){return typeof e=="function"?e(t):e}function bt(e){return e.split("-")[0]}function Me(e){return e.split("-")[1]}function ui(e){return e==="x"?"y":"x"}function di(e){return e==="y"?"height":"width"}const Xr=new Set(["top","bottom"]);function ht(e){return Xr.has(bt(e))?"y":"x"}function hi(e){return ui(ht(e))}function Zr(e,t,s){s===void 0&&(s=!1);const n=Me(e),i=hi(e),r=di(i);let o=i==="x"?n===(s?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(o=Ce(o)),[o,Ce(o)]}function Qr(e){const t=Ce(e);return[fs(e),t,fs(t)]}function fs(e){return e.replace(/start|end/g,t=>Gr[t])}const Ks=["left","right"],Ys=["right","left"],to=["top","bottom"],eo=["bottom","top"];function so(e,t,s){switch(e){case"top":case"bottom":return s?t?Ys:Ks:t?Ks:Ys;case"left":case"right":return t?to:eo;default:return[]}}function no(e,t,s,n){const i=Me(e);let r=so(bt(e),s==="start",n);return i&&(r=r.map(o=>o+"-"+i),t&&(r=r.concat(r.map(fs)))),r}function Ce(e){return e.replace(/left|right|bottom|top/g,t=>Jr[t])}function io(e){return{top:0,right:0,bottom:0,left:0,...e}}function ro(e){return typeof e!="number"?io(e):{top:e,right:e,bottom:e,left:e}}function Ee(e){const{x:t,y:s,width:n,height:i}=e;return{width:n,height:i,top:s,left:t,right:t+n,bottom:s+i,x:t,y:s}}function qs(e,t,s){let{reference:n,floating:i}=e;const r=ht(t),o=hi(t),a=di(o),l=bt(t),c=r==="y",u=n.x+n.width/2-i.width/2,d=n.y+n.height/2-i.height/2,h=n[a]/2-i[a]/2;let f;switch(l){case"top":f={x:u,y:n.y-i.height};break;case"bottom":f={x:u,y:n.y+n.height};break;case"right":f={x:n.x+n.width,y:d};break;case"left":f={x:n.x-i.width,y:d};break;default:f={x:n.x,y:n.y}}switch(Me(t)){case"start":f[o]-=h*(s&&c?-1:1);break;case"end":f[o]+=h*(s&&c?-1:1);break}return f}async function oo(e,t){var s;t===void 0&&(t={});const{x:n,y:i,platform:r,rects:o,elements:a,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:h=!1,padding:f=0}=Ne(t,e),p=ro(f),g=a[h?d==="floating"?"reference":"floating":d],y=Ee(await r.getClippingRect({element:(s=await(r.isElement==null?void 0:r.isElement(g)))==null||s?g:g.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),_=d==="floating"?{x:n,y:i,width:o.floating.width,height:o.floating.height}:o.reference,b=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),w=await(r.isElement==null?void 0:r.isElement(b))?await(r.getScale==null?void 0:r.getScale(b))||{x:1,y:1}:{x:1,y:1},x=Ee(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:_,offsetParent:b,strategy:l}):_);return{top:(y.top-x.top+p.top)/w.y,bottom:(x.bottom-y.bottom+p.bottom)/w.y,left:(y.left-x.left+p.left)/w.x,right:(x.right-y.right+p.right)/w.x}}const ao=async(e,t,s)=>{const{placement:n="bottom",strategy:i="absolute",middleware:r=[],platform:o}=s,a=r.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(t));let c=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=qs(c,n,l),h=n,f={},p=0;for(let g=0;g<a.length;g++){var m;const{name:y,fn:_}=a[g],{x:b,y:w,data:x,reset:S}=await _({x:u,y:d,initialPlacement:n,placement:h,strategy:i,middlewareData:f,rects:c,platform:{...o,detectOverflow:(m=o.detectOverflow)!=null?m:oo},elements:{reference:e,floating:t}});u=b??u,d=w??d,f={...f,[y]:{...f[y],...x}},S&&p<=50&&(p++,typeof S=="object"&&(S.placement&&(h=S.placement),S.rects&&(c=S.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):S.rects),{x:u,y:d}=qs(c,h,l)),g=-1)}return{x:u,y:d,placement:h,strategy:i,middlewareData:f}},lo=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var s,n;const{placement:i,middlewareData:r,rects:o,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:h,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:m=!0,...g}=Ne(e,t);if((s=r.arrow)!=null&&s.alignmentOffset)return{};const y=bt(i),_=ht(a),b=bt(a)===a,w=await(l.isRTL==null?void 0:l.isRTL(c.floating)),x=h||(b||!m?[Ce(a)]:Qr(a)),S=p!=="none";!h&&S&&x.push(...no(a,m,p,w));const E=[a,...x],M=await l.detectOverflow(t,g),R=[];let B=((n=r.flip)==null?void 0:n.overflows)||[];if(u&&R.push(M[y]),d){const I=Zr(i,o,w);R.push(M[I[0]],M[I[1]])}if(B=[...B,{placement:i,overflows:R}],!R.every(I=>I<=0)){var j,tt;const I=(((j=r.flip)==null?void 0:j.index)||0)+1,V=E[I];if(V&&(!(d==="alignment"?_!==ht(V):!1)||B.every($=>ht($.placement)===_?$.overflows[0]>0:!0)))return{data:{index:I,overflows:B},reset:{placement:V}};let F=(tt=B.filter(z=>z.overflows[0]<=0).sort((z,$)=>z.overflows[1]-$.overflows[1])[0])==null?void 0:tt.placement;if(!F)switch(f){case"bestFit":{var at;const z=(at=B.filter($=>{if(S){const C=ht($.placement);return C===_||C==="y"}return!0}).map($=>[$.placement,$.overflows.filter(C=>C>0).reduce((C,J)=>C+J,0)]).sort(($,C)=>$[1]-C[1])[0])==null?void 0:at[0];z&&(F=z);break}case"initialPlacement":F=a;break}if(i!==F)return{reset:{placement:F}}}return{}}}},co=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:s,y:n,placement:i,platform:r}=t,{mainAxis:o=!0,crossAxis:a=!1,limiter:l={fn:y=>{let{x:_,y:b}=y;return{x:_,y:b}}},...c}=Ne(e,t),u={x:s,y:n},d=await r.detectOverflow(t,c),h=ht(bt(i)),f=ui(h);let p=u[f],m=u[h];if(o){const y=f==="y"?"top":"left",_=f==="y"?"bottom":"right",b=p+d[y],w=p-d[_];p=Ws(b,p,w)}if(a){const y=h==="y"?"top":"left",_=h==="y"?"bottom":"right",b=m+d[y],w=m-d[_];m=Ws(b,m,w)}const g=l.fn({...t,[f]:p,[h]:m});return{...g,data:{x:g.x-s,y:g.y-n,enabled:{[f]:o,[h]:a}}}}}},uo=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var s,n;const{placement:i,rects:r,platform:o,elements:a}=t,{apply:l=()=>{},...c}=Ne(e,t),u=await o.detectOverflow(t,c),d=bt(i),h=Me(i),f=ht(i)==="y",{width:p,height:m}=r.floating;let g,y;d==="top"||d==="bottom"?(g=d,y=h===(await(o.isRTL==null?void 0:o.isRTL(a.floating))?"start":"end")?"left":"right"):(y=d,g=h==="end"?"top":"bottom");const _=m-u.top-u.bottom,b=p-u.left-u.right,w=kt(m-u[g],_),x=kt(p-u[y],b),S=!t.middlewareData.shift;let E=w,M=x;if((s=t.middlewareData.shift)!=null&&s.enabled.x&&(M=b),(n=t.middlewareData.shift)!=null&&n.enabled.y&&(E=_),S&&!h){const B=K(u.left,0),j=K(u.right,0),tt=K(u.top,0),at=K(u.bottom,0);f?M=p-2*(B!==0||j!==0?B+j:K(u.left,u.right)):E=m-2*(tt!==0||at!==0?tt+at:K(u.top,u.bottom))}await l({...t,availableWidth:M,availableHeight:E});const R=await o.getDimensions(a.floating);return p!==R.width||m!==R.height?{reset:{rects:!0}}:{}}}};function Ie(){return typeof window<"u"}function Nt(e){return fi(e)?(e.nodeName||"").toLowerCase():"#document"}function Y(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function ot(e){var t;return(t=(fi(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function fi(e){return Ie()?e instanceof Node||e instanceof Y(e).Node:!1}function Z(e){return Ie()?e instanceof Element||e instanceof Y(e).Element:!1}function rt(e){return Ie()?e instanceof HTMLElement||e instanceof Y(e).HTMLElement:!1}function Js(e){return!Ie()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Y(e).ShadowRoot}const ho=new Set(["inline","contents"]);function ne(e){const{overflow:t,overflowX:s,overflowY:n,display:i}=Q(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+s)&&!ho.has(i)}const fo=new Set(["table","td","th"]);function po(e){return fo.has(Nt(e))}const mo=[":popover-open",":modal"];function Fe(e){return mo.some(t=>{try{return e.matches(t)}catch{return!1}})}const go=["transform","translate","scale","rotate","perspective"],yo=["transform","translate","scale","rotate","perspective","filter"],_o=["paint","layout","strict","content"];function Ts(e){const t=As(),s=Z(e)?Q(e):e;return go.some(n=>s[n]?s[n]!=="none":!1)||(s.containerType?s.containerType!=="normal":!1)||!t&&(s.backdropFilter?s.backdropFilter!=="none":!1)||!t&&(s.filter?s.filter!=="none":!1)||yo.some(n=>(s.willChange||"").includes(n))||_o.some(n=>(s.contain||"").includes(n))}function bo(e){let t=pt(e);for(;rt(t)&&!Rt(t);){if(Ts(t))return t;if(Fe(t))return null;t=pt(t)}return null}function As(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const wo=new Set(["html","body","#document"]);function Rt(e){return wo.has(Nt(e))}function Q(e){return Y(e).getComputedStyle(e)}function De(e){return Z(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function pt(e){if(Nt(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Js(e)&&e.host||ot(e);return Js(t)?t.host:t}function pi(e){const t=pt(e);return Rt(t)?e.ownerDocument?e.ownerDocument.body:e.body:rt(t)&&ne(t)?t:pi(t)}function Gt(e,t,s){var n;t===void 0&&(t=[]),s===void 0&&(s=!0);const i=pi(e),r=i===((n=e.ownerDocument)==null?void 0:n.body),o=Y(i);if(r){const a=ps(o);return t.concat(o,o.visualViewport||[],ne(i)?i:[],a&&s?Gt(a):[])}return t.concat(i,Gt(i,[],s))}function ps(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function mi(e){const t=Q(e);let s=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const i=rt(e),r=i?e.offsetWidth:s,o=i?e.offsetHeight:n,a=Se(s)!==r||Se(n)!==o;return a&&(s=r,n=o),{width:s,height:n,$:a}}function $s(e){return Z(e)?e:e.contextElement}function Ot(e){const t=$s(e);if(!rt(t))return nt(1);const s=t.getBoundingClientRect(),{width:n,height:i,$:r}=mi(t);let o=(r?Se(s.width):s.width)/n,a=(r?Se(s.height):s.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const vo=nt(0);function gi(e){const t=Y(e);return!As()||!t.visualViewport?vo:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function xo(e,t,s){return t===void 0&&(t=!1),!s||t&&s!==Y(e)?!1:t}function wt(e,t,s,n){t===void 0&&(t=!1),s===void 0&&(s=!1);const i=e.getBoundingClientRect(),r=$s(e);let o=nt(1);t&&(n?Z(n)&&(o=Ot(n)):o=Ot(e));const a=xo(r,s,n)?gi(r):nt(0);let l=(i.left+a.x)/o.x,c=(i.top+a.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(r){const h=Y(r),f=n&&Z(n)?Y(n):n;let p=h,m=ps(p);for(;m&&n&&f!==p;){const g=Ot(m),y=m.getBoundingClientRect(),_=Q(m),b=y.left+(m.clientLeft+parseFloat(_.paddingLeft))*g.x,w=y.top+(m.clientTop+parseFloat(_.paddingTop))*g.y;l*=g.x,c*=g.y,u*=g.x,d*=g.y,l+=b,c+=w,p=Y(m),m=ps(p)}}return Ee({width:u,height:d,x:l,y:c})}function Be(e,t){const s=De(e).scrollLeft;return t?t.left+s:wt(ot(e)).left+s}function yi(e,t){const s=e.getBoundingClientRect(),n=s.left+t.scrollLeft-Be(e,s),i=s.top+t.scrollTop;return{x:n,y:i}}function So(e){let{elements:t,rect:s,offsetParent:n,strategy:i}=e;const r=i==="fixed",o=ot(n),a=t?Fe(t.floating):!1;if(n===o||a&&r)return s;let l={scrollLeft:0,scrollTop:0},c=nt(1);const u=nt(0),d=rt(n);if((d||!d&&!r)&&((Nt(n)!=="body"||ne(o))&&(l=De(n)),rt(n))){const f=wt(n);c=Ot(n),u.x=f.x+n.clientLeft,u.y=f.y+n.clientTop}const h=o&&!d&&!r?yi(o,l):nt(0);return{width:s.width*c.x,height:s.height*c.y,x:s.x*c.x-l.scrollLeft*c.x+u.x+h.x,y:s.y*c.y-l.scrollTop*c.y+u.y+h.y}}function Co(e){return Array.from(e.getClientRects())}function Eo(e){const t=ot(e),s=De(e),n=e.ownerDocument.body,i=K(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),r=K(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let o=-s.scrollLeft+Be(e);const a=-s.scrollTop;return Q(n).direction==="rtl"&&(o+=K(t.clientWidth,n.clientWidth)-i),{width:i,height:r,x:o,y:a}}const Gs=25;function Po(e,t){const s=Y(e),n=ot(e),i=s.visualViewport;let r=n.clientWidth,o=n.clientHeight,a=0,l=0;if(i){r=i.width,o=i.height;const u=As();(!u||u&&t==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}const c=Be(n);if(c<=0){const u=n.ownerDocument,d=u.body,h=getComputedStyle(d),f=u.compatMode==="CSS1Compat"&&parseFloat(h.marginLeft)+parseFloat(h.marginRight)||0,p=Math.abs(n.clientWidth-d.clientWidth-f);p<=Gs&&(r-=p)}else c<=Gs&&(r+=c);return{width:r,height:o,x:a,y:l}}const Oo=new Set(["absolute","fixed"]);function To(e,t){const s=wt(e,!0,t==="fixed"),n=s.top+e.clientTop,i=s.left+e.clientLeft,r=rt(e)?Ot(e):nt(1),o=e.clientWidth*r.x,a=e.clientHeight*r.y,l=i*r.x,c=n*r.y;return{width:o,height:a,x:l,y:c}}function Xs(e,t,s){let n;if(t==="viewport")n=Po(e,s);else if(t==="document")n=Eo(ot(e));else if(Z(t))n=To(t,s);else{const i=gi(e);n={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return Ee(n)}function _i(e,t){const s=pt(e);return s===t||!Z(s)||Rt(s)?!1:Q(s).position==="fixed"||_i(s,t)}function Ao(e,t){const s=t.get(e);if(s)return s;let n=Gt(e,[],!1).filter(a=>Z(a)&&Nt(a)!=="body"),i=null;const r=Q(e).position==="fixed";let o=r?pt(e):e;for(;Z(o)&&!Rt(o);){const a=Q(o),l=Ts(o);!l&&a.position==="fixed"&&(i=null),(r?!l&&!i:!l&&a.position==="static"&&!!i&&Oo.has(i.position)||ne(o)&&!l&&_i(e,o))?n=n.filter(u=>u!==o):i=a,o=pt(o)}return t.set(e,n),n}function $o(e){let{element:t,boundary:s,rootBoundary:n,strategy:i}=e;const o=[...s==="clippingAncestors"?Fe(t)?[]:Ao(t,this._c):[].concat(s),n],a=o[0],l=o.reduce((c,u)=>{const d=Xs(t,u,i);return c.top=K(d.top,c.top),c.right=kt(d.right,c.right),c.bottom=kt(d.bottom,c.bottom),c.left=K(d.left,c.left),c},Xs(t,a,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Lo(e){const{width:t,height:s}=mi(e);return{width:t,height:s}}function ko(e,t,s){const n=rt(t),i=ot(t),r=s==="fixed",o=wt(e,!0,r,t);let a={scrollLeft:0,scrollTop:0};const l=nt(0);function c(){l.x=Be(i)}if(n||!n&&!r)if((Nt(t)!=="body"||ne(i))&&(a=De(t)),n){const f=wt(t,!0,r,t);l.x=f.x+t.clientLeft,l.y=f.y+t.clientTop}else i&&c();r&&!n&&i&&c();const u=i&&!n&&!r?yi(i,a):nt(0),d=o.left+a.scrollLeft-l.x-u.x,h=o.top+a.scrollTop-l.y-u.y;return{x:d,y:h,width:o.width,height:o.height}}function ss(e){return Q(e).position==="static"}function Zs(e,t){if(!rt(e)||Q(e).position==="fixed")return null;if(t)return t(e);let s=e.offsetParent;return ot(e)===s&&(s=s.ownerDocument.body),s}function bi(e,t){const s=Y(e);if(Fe(e))return s;if(!rt(e)){let i=pt(e);for(;i&&!Rt(i);){if(Z(i)&&!ss(i))return i;i=pt(i)}return s}let n=Zs(e,t);for(;n&&po(n)&&ss(n);)n=Zs(n,t);return n&&Rt(n)&&ss(n)&&!Ts(n)?s:n||bo(e)||s}const Ro=async function(e){const t=this.getOffsetParent||bi,s=this.getDimensions,n=await s(e.floating);return{reference:ko(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function zo(e){return Q(e).direction==="rtl"}const No={convertOffsetParentRelativeRectToViewportRelativeRect:So,getDocumentElement:ot,getClippingRect:$o,getOffsetParent:bi,getElementRects:Ro,getClientRects:Co,getDimensions:Lo,getScale:Ot,isElement:Z,isRTL:zo};function wi(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Mo(e,t){let s=null,n;const i=ot(e);function r(){var a;clearTimeout(n),(a=s)==null||a.disconnect(),s=null}function o(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),r();const c=e.getBoundingClientRect(),{left:u,top:d,width:h,height:f}=c;if(a||t(),!h||!f)return;const p=oe(d),m=oe(i.clientWidth-(u+h)),g=oe(i.clientHeight-(d+f)),y=oe(u),b={rootMargin:-p+"px "+-m+"px "+-g+"px "+-y+"px",threshold:K(0,kt(1,l))||1};let w=!0;function x(S){const E=S[0].intersectionRatio;if(E!==l){if(!w)return o();E?o(!1,E):n=setTimeout(()=>{o(!1,1e-7)},1e3)}E===1&&!wi(c,e.getBoundingClientRect())&&o(),w=!1}try{s=new IntersectionObserver(x,{...b,root:i.ownerDocument})}catch{s=new IntersectionObserver(x,b)}s.observe(e)}return o(!0),r}function Io(e,t,s,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,c=$s(e),u=i||r?[...c?Gt(c):[],...Gt(t)]:[];u.forEach(y=>{i&&y.addEventListener("scroll",s,{passive:!0}),r&&y.addEventListener("resize",s)});const d=c&&a?Mo(c,s):null;let h=-1,f=null;o&&(f=new ResizeObserver(y=>{let[_]=y;_&&_.target===c&&f&&(f.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var b;(b=f)==null||b.observe(t)})),s()}),c&&!l&&f.observe(c),f.observe(t));let p,m=l?wt(e):null;l&&g();function g(){const y=wt(e);m&&!wi(m,y)&&s(),m=y,p=requestAnimationFrame(g)}return s(),()=>{var y;u.forEach(_=>{i&&_.removeEventListener("scroll",s),r&&_.removeEventListener("resize",s)}),d?.(),(y=f)==null||y.disconnect(),f=null,l&&cancelAnimationFrame(p)}}const Fo=co,Do=lo,xd=uo,Bo=(e,t,s)=>{const n=new Map,i={platform:No,...s},r={...i.platform,_c:n};return ao(e,t,{...i,platform:r})},jo=[Do({fallbackAxisSideDirection:"start",crossAxis:!1}),Fo()],Vo=({placement:e="bottom-start",strategy:t,middleware:s=jo}={})=>{const[n,i]=lt(),[r,o]=lt(),[a,l]=lt();return L(()=>{if(!n||!(r instanceof HTMLElement)){l(void 0);return}return Io(n,r,()=>Bo(n,r,{placement:e,strategy:t,middleware:s}).then(l))},[n,r,e,t,s]),{setReference:i,setFloating:o,styles:k(()=>a?{left:`${a.x}px`,top:`${a.y}px`}:{},[a?.x,a?.y])}},je=e=>{const t=k(()=>({}),[]);return k(()=>Object.assign(t,e),[t,...Object.values(e)])},Qs=e=>e.matches(":focus-within"),Uo=({disabled:e,onFocus:t})=>{const[s,n]=lt(),{focused:i,closed:r}=s||{},o=i&&!e,a=je({closed:r,onFocus:t}),l=P(u=>n(d=>({...d,closed:u})),[]),c=P(u=>{const d=u.currentTarget;return Qs(d)?n(h=>({focused:!0,closed:!h?.closed})):d.focus()},[]);return L(()=>{if(!o)return;const u=d=>{if(d.defaultPrevented)return;const{closed:h}=a;d.key==="Escape"&&!h?(d.preventDefault(),l(!0)):["ArrowUp","Up"].includes(d.key)&&h&&(d.preventDefault(),l(!1))};return document.addEventListener("keydown",u,!0),()=>document.removeEventListener("keydown",u,!0)},[o]),{focused:o,active:o&&!r,setClosed:l,onToggle:c,onFocus:P(u=>{const d=Qs(u.currentTarget);n({focused:d}),a.onFocus?.(d)},[a])}},tn=["focusin","focusout"],Ho=e=>{const t=Uo(e),{onFocus:s}=t;return L(()=>(e.setAttribute("tabindex","0"),tn.forEach(n=>e.addEventListener(n,s)),()=>{tn.forEach(n=>e.removeEventListener(n,s))}),[]),t},Wo=e=>e.preventDefault(),Ko=q`
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
`,Yo=e=>{const{placement:t,strategy:s,middleware:n,render:i}=e,{active:r,onToggle:o}=Ho(e),{styles:a,setReference:l,setFloating:c}=Vo({placement:t,strategy:s,middleware:n});return O` <div class="anchor" part="anchor" ${Lt(l)}>
			<button
				@mousedown=${Wo}
				@click=${o}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		${G(r,()=>O`<cosmoz-dropdown-content
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					style="${Wr(a)}"
					@connected=${u=>u.target.showPopover?.()}
					${Lt(c)}
					><slot></slot>${xe([i],()=>i?.()||it)}</cosmoz-dropdown-content
				> `)}`};customElements.define("cosmoz-dropdown",D(Yo,{styleSheets:[Ko]}));const qo=q`
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
`,Jo=()=>O` <slot></slot> `;customElements.define("cosmoz-dropdown-list",D(Jo,{styleSheets:[qo]}));const Go=({placement:e})=>O` <cosmoz-dropdown
		.placement=${e}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;customElements.define("cosmoz-dropdown-menu",D(Go));const Xo=({host:e,popoverRef:t,disabled:s,openOnHover:n,openOnFocus:i,open:r,close:o})=>{const a=$t(),l=()=>clearTimeout(a.current),c=()=>{clearTimeout(a.current),a.current=setTimeout(()=>{const d=t.current;n&&(e.matches(":hover")||d?.matches(":hover"))||e.matches(":focus-within")||d?.matches(":focus-within")||o()},100)},u=()=>{s||(l(),r())};return L(()=>{if(!(!n||s))return e.addEventListener("pointerenter",u),e.addEventListener("pointerleave",c),()=>{l(),e.removeEventListener("pointerenter",u),e.removeEventListener("pointerleave",c)}},[n,s,e]),L(()=>{if(!(!i||s))return e.addEventListener("focusin",u),e.addEventListener("focusout",c),()=>{l(),e.removeEventListener("focusin",u),e.removeEventListener("focusout",c)}},[i,s,e]),{scheduleClose:c,cancelClose:l}},Zo=e=>{if(e.newState!=="open")return;const n=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const i of n){const r=i.matches("[autofocus]")?i:i.querySelector("[autofocus]");if(r instanceof HTMLElement){r.focus();break}}},Qo=q`
	:host {
		display: inline-block;
		anchor-name: --dropdown-anchor;
	}

	[popover] {
		position: fixed;
		position-anchor: --dropdown-anchor;
		inset: unset;
		margin: var(--cz-spacing, 0.25rem);
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
`,ta=e=>{const{placement:t="bottom span-right",disabled:s,openOnHover:n,openOnFocus:i}=e,r=$t(),[o,a]=se("opened",!1),l=P(()=>{s||(a(!0),r.current?.showPopover())},[s]),c=P(()=>{a(!1),r.current?.hidePopover()},[]),u=P(()=>{if(s)return;r.current?.matches(":popover-open")?c():l()},[s]);L(()=>{const m=r.current;m&&(o?m.showPopover():m.hidePopover())},[o]),L(()=>{e.toggleAttribute("opened",!!o)},[o]);const{scheduleClose:d,cancelClose:h}=Xo({host:e,popoverRef:r,disabled:s,openOnHover:n,openOnFocus:i,open:l,close:c}),f=i?l:u,p=P(m=>{Zo(m),a(m.newState==="open"),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:m.newState,oldState:m.oldState,composed:!0}))},[]);return O`
		<slot name="button" @click=${f}></slot>
		<div
			popover
			style="position-area: ${t}"
			@toggle=${p}
			@select=${c}
			@focusout=${d}
			@focusin=${h}
			${Lt(m=>m&&(r.current=m))}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",D(ta,{styleSheets:[Qo],observedAttributes:["placement","disabled","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));function ea(e){return()=>e}const sa=ea(),vi=sa,zt=e=>e,na=(e,...t)=>typeof e=="function"?e(...t):e,xi=jr(()=>vi);customElements.define("cosmoz-keybinding-provider",xi.Provider);const Tt=(e,t)=>{const s=oi(xi),n=je(e);L(()=>s(n),t)};window.JSCompiler_renameProperty=function(e,t){return e};let ia=/(url\()([^)]*)(\))/g,ra=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,ae,W;function Yt(e,t){if(e&&ra.test(e)||e==="//")return e;if(ae===void 0){ae=!1;try{const s=new URL("b","http://a");s.pathname="c%20d",ae=s.href==="http://a/c%20d"}catch{}}if(t||(t=document.baseURI||window.location.href),ae)try{return new URL(e,t).href}catch{return e}return W||(W=document.implementation.createHTMLDocument("temp"),W.base=W.createElement("base"),W.head.appendChild(W.base),W.anchor=W.createElement("a"),W.body.appendChild(W.anchor)),W.base.href=t,W.anchor.href=e,W.anchor.href||e}function Ls(e,t){return e.replace(ia,function(s,n,i,r){return n+"'"+Yt(i.replace(/["']/g,""),t)+"'"+r})}function ks(e){return e.substring(0,e.lastIndexOf("/")+1)}const oa=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const aa=oa&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const e=new CSSStyleSheet;e.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch{return!1}})();let la=window.Polymer&&window.Polymer.rootPath||ks(document.baseURI||window.location.href),Pe=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let ms=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,ca=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,ua=window.Polymer&&window.Polymer.legacyOptimizations||!1,da=window.Polymer&&window.Polymer.legacyWarnings||!1,ha=window.Polymer&&window.Polymer.syncInitialRender||!1,gs=window.Polymer&&window.Polymer.legacyUndefined||!1,fa=window.Polymer&&window.Polymer.orderedComputed||!1,en=window.Polymer&&window.Polymer.removeNestedTemplates||!1,pa=window.Polymer&&window.Polymer.fastDomIf||!1;window.Polymer&&window.Polymer.suppressTemplateNotifications;window.Polymer&&window.Polymer.legacyNoObservedAttributes;let ma=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;let ga=0;const xt=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let s=ga++;function n(i){let r=i.__mixinSet;if(r&&r[s])return i;let o=t,a=o.get(i);if(!a){a=e(i),o.set(i,a);let l=Object.create(a.__mixinSet||r||null);l[s]=!0,a.__mixinSet=l}return a}return n};let Rs={},Si={};function sn(e,t){Rs[e]=Si[e.toLowerCase()]=t}function nn(e){return Rs[e]||Si[e.toLowerCase()]}function ya(e){e.querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}class Xt extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,s){if(t){let n=nn(t);return n&&s?n.querySelector(s):n}return null}attributeChangedCallback(t,s,n,i){s!==n&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,s=Yt(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=ks(s)}return this.__assetpath}register(t){if(t=t||this.id,t){if(ms&&nn(t)!==void 0)throw sn(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,sn(t,this),ya(this)}}}Xt.prototype.modules=Rs;customElements.define("dom-module",Xt);const _a="link[rel=import][type~=css]",ba="include",rn="shady-unscoped";function Ci(e){return Xt.import(e)}function on(e){let t=e.body?e.body:e;const s=Ls(t.textContent,e.baseURI),n=document.createElement("style");return n.textContent=s,n}function wa(e){const t=e.trim().split(/\s+/),s=[];for(let n=0;n<t.length;n++)s.push(...va(t[n]));return s}function va(e){const t=Ci(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(t._styles===void 0){const s=[];s.push(...Pi(t));const n=t.querySelector("template");n&&s.push(...Ei(n,t.assetpath)),t._styles=s}return t._styles}function Ei(e,t){if(!e._styles){const s=[],n=e.content.querySelectorAll("style");for(let i=0;i<n.length;i++){let r=n[i],o=r.getAttribute(ba);o&&s.push(...wa(o).filter(function(a,l,c){return c.indexOf(a)===l})),t&&(r.textContent=Ls(r.textContent,t)),s.push(r)}e._styles=s}return e._styles}function xa(e){let t=Ci(e);return t?Pi(t):[]}function Pi(e){const t=[],s=e.querySelectorAll(_a);for(let n=0;n<s.length;n++){let i=s[n];if(i.import){const r=i.import,o=i.hasAttribute(rn);if(o&&!r._unscopedStyle){const a=on(r);a.setAttribute(rn,""),r._unscopedStyle=a}else r._style||(r._style=on(r));t.push(o?r._unscopedStyle:r._style)}}return t}const yt=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;function ys(e){return e.indexOf(".")>=0}function St(e){let t=e.indexOf(".");return t===-1?e:e.slice(0,t)}function Sa(e,t){return e.indexOf(t+".")===0}function Oe(e,t){return t.indexOf(e+".")===0}function Te(e,t,s){return t+s.slice(e.length)}function Ut(e){if(Array.isArray(e)){let t=[];for(let s=0;s<e.length;s++){let n=e[s].toString().split(".");for(let i=0;i<n.length;i++)t.push(n[i])}return t.join(".")}else return e}function Oi(e){return Array.isArray(e)?Ut(e).split("."):e.toString().split(".")}function U(e,t,s){let n=e,i=Oi(t);for(let r=0;r<i.length;r++){if(!n)return;let o=i[r];n=n[o]}return s&&(s.path=i.join(".")),n}function an(e,t,s){let n=e,i=Oi(t),r=i[i.length-1];if(i.length>1){for(let o=0;o<i.length-1;o++){let a=i[o];if(n=n[a],!n)return}n[r]=s}else n[t]=s;return i.join(".")}const Ae={},Ca=/-[a-z]/g,Ea=/([A-Z])/g;function Ti(e){return Ae[e]||(Ae[e]=e.indexOf("-")<0?e:e.replace(Ca,t=>t[1].toUpperCase()))}function Ve(e){return Ae[e]||(Ae[e]=e.replace(Ea,"-$1").toLowerCase())}let Pa=0,Ai=0,At=[],Oa=0,_s=!1,$i=document.createTextNode("");new window.MutationObserver(Ta).observe($i,{characterData:!0});function Ta(){_s=!1;const e=At.length;for(let t=0;t<e;t++){let s=At[t];if(s)try{s()}catch(n){setTimeout(()=>{throw n})}}At.splice(0,e),Ai+=e}const Sd={after(e){return{run(t){return window.setTimeout(t,e)},cancel(t){window.clearTimeout(t)}}},run(e,t){return window.setTimeout(e,t)},cancel(e){window.clearTimeout(e)}},Aa={run(e){return _s||(_s=!0,$i.textContent=Oa++),At.push(e),Pa++},cancel(e){const t=e-Ai;if(t>=0){if(!At[t])throw new Error("invalid async handle: "+e);At[t]=null}}};const $a=Aa,Li=xt(e=>{class t extends e{static createProperties(n){const i=this.prototype;for(let r in n)r in i||i._createPropertyAccessor(r)}static attributeNameForProperty(n){return n.toLowerCase()}static typeForProperty(n){}_createPropertyAccessor(n,i){this._addPropertyToAttributeMap(n),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[n]||(this.__dataHasAccessor[n]=!0,this._definePropertyAccessor(n,i))}_addPropertyToAttributeMap(n){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let i=this.__dataAttributes[n];return i||(i=this.constructor.attributeNameForProperty(n),this.__dataAttributes[i]=n),i}_definePropertyAccessor(n,i){Object.defineProperty(this,n,{get(){return this.__data[n]},set:i?function(){}:function(r){this._setPendingProperty(n,r,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let n in this.__dataHasAccessor)this.hasOwnProperty(n)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[n]=this[n],delete this[n])}_initializeInstanceProperties(n){Object.assign(this,n)}_setProperty(n,i){this._setPendingProperty(n,i)&&this._invalidateProperties()}_getProperty(n){return this.__data[n]}_setPendingProperty(n,i,r){let o=this.__data[n],a=this._shouldPropertyChange(n,i,o);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(n in this.__dataOld)&&(this.__dataOld[n]=o),this.__data[n]=i,this.__dataPending[n]=i),a}_isPropertyPending(n){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(n))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,$a.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const n=this.__data,i=this.__dataPending,r=this.__dataOld;this._shouldPropertiesChange(n,i,r)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(n,i,r)),this.__dataCounter--}_shouldPropertiesChange(n,i,r){return!!i}_propertiesChanged(n,i,r){}_shouldPropertyChange(n,i,r){return r!==i&&(r===r||i===i)}attributeChangedCallback(n,i,r,o){i!==r&&this._attributeToProperty(n,r),super.attributeChangedCallback&&super.attributeChangedCallback(n,i,r,o)}_attributeToProperty(n,i,r){if(!this.__serializing){const o=this.__dataAttributes,a=o&&o[n]||n;this[a]=this._deserializeValue(i,r||this.constructor.typeForProperty(a))}}_propertyToAttribute(n,i,r){this.__serializing=!0,r=arguments.length<3?this[n]:r,this._valueToNodeAttribute(this,r,i||this.constructor.attributeNameForProperty(n)),this.__serializing=!1}_valueToNodeAttribute(n,i,r){const o=this._serializeValue(i);(r==="class"||r==="name"||r==="slot")&&(n=yt(n)),o===void 0?n.removeAttribute(r):n.setAttribute(r,o===""&&window.trustedTypes?window.trustedTypes.emptyScript:o)}_serializeValue(n){return typeof n==="boolean"?n?"":void 0:n?.toString()}_deserializeValue(n,i){switch(i){case Boolean:return n!==null;case Number:return Number(n);default:return n}}}return t});const ki={};let le=HTMLElement.prototype;for(;le;){let e=Object.getOwnPropertyNames(le);for(let t=0;t<e.length;t++)ki[e[t]]=!0;le=Object.getPrototypeOf(le)}const La=window.trustedTypes?e=>trustedTypes.isHTML(e)||trustedTypes.isScript(e)||trustedTypes.isScriptURL(e):()=>!1;function ka(e,t){if(!ki[t]){let s=e[t];s!==void 0&&(e.__data?e._setPendingProperty(t,s):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=s))}}const Ra=xt(e=>{const t=Li(e);class s extends t{static createPropertiesForAttributes(){let i=this.observedAttributes;for(let r=0;r<i.length;r++)this.prototype._createPropertyAccessor(Ti(i[r]))}static attributeNameForProperty(i){return Ve(i)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(i){for(let r in i)this._setProperty(r,i[r])}_ensureAttribute(i,r){const o=this;o.hasAttribute(i)||this._valueToNodeAttribute(o,r,i)}_serializeValue(i){switch(typeof i){case"object":if(i instanceof Date)return i.toString();if(i){if(La(i))return i;try{return JSON.stringify(i)}catch{return""}}default:return super._serializeValue(i)}}_deserializeValue(i,r){let o;switch(r){case Object:try{o=JSON.parse(i)}catch{o=i}break;case Array:try{o=JSON.parse(i)}catch{o=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${i}`)}break;case Date:o=isNaN(i)?String(i):Number(i),o=new Date(o);break;default:o=super._deserializeValue(i,r);break}return o}_definePropertyAccessor(i,r){ka(this,i),super._definePropertyAccessor(i,r)}_hasAccessor(i){return this.__dataHasAccessor&&this.__dataHasAccessor[i]}_isPropertyPending(i){return!!(this.__dataPending&&i in this.__dataPending)}}return s});const za={"dom-if":!0,"dom-repeat":!0};let ln=!1,cn=!1;function Na(){if(!ln){ln=!0;const e=document.createElement("textarea");e.placeholder="a",cn=e.placeholder===e.textContent}return cn}function Ma(e){Na()&&e.localName==="textarea"&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}const Ia=(()=>{const e=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(t,s,n)=>{const i=s.getAttribute(n);if(e&&n.startsWith("on-")){t.setAttribute(n,e.createScript(i,n));return}t.setAttribute(n,i)}})();function Fa(e){let t=e.getAttribute("is");if(t&&za[t]){let s=e;for(s.removeAttribute("is"),e=s.ownerDocument.createElement(t),s.parentNode.replaceChild(e,s),e.appendChild(s);s.attributes.length;){const{name:n}=s.attributes[0];Ia(e,s,n),s.removeAttribute(n)}}return e}function Ri(e,t){let s=t.parentInfo&&Ri(e,t.parentInfo);if(s){for(let n=s.firstChild,i=0;n;n=n.nextSibling)if(t.parentIndex===i++)return n}else return e}function Da(e,t,s,n){n.id&&(t[n.id]=s)}function Ba(e,t,s){if(s.events&&s.events.length)for(let n=0,i=s.events,r;n<i.length&&(r=i[n]);n++)e._addMethodEventListenerToNode(t,r.name,r.value,e)}function ja(e,t,s,n){s.templateInfo&&(t._templateInfo=s.templateInfo,t._parentTemplateInfo=n)}function Va(e,t,s){return e=e._methodHost||e,function(i){e[s]?e[s](i,i.detail):console.warn("listener method `"+s+"` not defined")}}const Ua=xt(e=>{class t extends e{static _parseTemplate(n,i){if(!n._templateInfo){let r=n._templateInfo={};r.nodeInfoList=[],r.nestedTemplate=!!i,r.stripWhiteSpace=i&&i.stripWhiteSpace||n.hasAttribute&&n.hasAttribute("strip-whitespace"),this._parseTemplateContent(n,r,{parent:null})}return n._templateInfo}static _parseTemplateContent(n,i,r){return this._parseTemplateNode(n.content,i,r)}static _parseTemplateNode(n,i,r){let o=!1,a=n;return a.localName=="template"&&!a.hasAttribute("preserve-content")?o=this._parseTemplateNestedTemplate(a,i,r)||o:a.localName==="slot"&&(i.hasInsertionPoint=!0),Ma(a),a.firstChild&&this._parseTemplateChildNodes(a,i,r),a.hasAttributes&&a.hasAttributes()&&(o=this._parseTemplateNodeAttributes(a,i,r)||o),o||r.noted}static _parseTemplateChildNodes(n,i,r){if(!(n.localName==="script"||n.localName==="style"))for(let o=n.firstChild,a=0,l;o;o=l){if(o.localName=="template"&&(o=Fa(o)),l=o.nextSibling,o.nodeType===Node.TEXT_NODE){let u=l;for(;u&&u.nodeType===Node.TEXT_NODE;)o.textContent+=u.textContent,l=u.nextSibling,n.removeChild(u),u=l;if(i.stripWhiteSpace&&!o.textContent.trim()){n.removeChild(o);continue}}let c={parentIndex:a,parentInfo:r};this._parseTemplateNode(o,i,c)&&(c.infoIndex=i.nodeInfoList.push(c)-1),o.parentNode&&a++}}static _parseTemplateNestedTemplate(n,i,r){let o=n,a=this._parseTemplate(o,i);return(a.content=o.content.ownerDocument.createDocumentFragment()).appendChild(o.content),r.templateInfo=a,!0}static _parseTemplateNodeAttributes(n,i,r){let o=!1,a=Array.from(n.attributes);for(let l=a.length-1,c;c=a[l];l--)o=this._parseTemplateNodeAttribute(n,i,r,c.name,c.value)||o;return o}static _parseTemplateNodeAttribute(n,i,r,o,a){return o.slice(0,3)==="on-"?(n.removeAttribute(o),r.events=r.events||[],r.events.push({name:o.slice(3),value:a}),!0):o==="id"?(r.id=a,!0):!1}static _contentForTemplate(n){let i=n._templateInfo;return i&&i.content||n.content}_stampTemplate(n,i){n&&!n.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(n),i=i||this.constructor._parseTemplate(n);let r=i.nodeInfoList,o=i.content||n.content,a=document.importNode(o,!0);a.__noInsertionPoint=!i.hasInsertionPoint;let l=a.nodeList=new Array(r.length);a.$={};for(let c=0,u=r.length,d;c<u&&(d=r[c]);c++){let h=l[c]=Ri(a,d);Da(this,a.$,h,d),ja(this,h,d,i),Ba(this,h,d)}return a=a,a}_addMethodEventListenerToNode(n,i,r,o){o=o||n;let a=Va(o,i,r);return this._addEventListenerToNode(n,i,a),a}_addEventListenerToNode(n,i,r){n.addEventListener(i,r)}_removeEventListenerFromNode(n,i,r){n.removeEventListener(i,r)}}return t});let Zt=0;const Qt=[],T={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},zi="__computeInfo",Ha=/[A-Z]/;function ns(e,t,s){let n=e[t];if(!n)n=e[t]={};else if(!e.hasOwnProperty(t)&&(n=e[t]=Object.create(e[t]),s))for(let i in n){let r=n[i],o=n[i]=Array(r.length);for(let a=0;a<r.length;a++)o[a]=r[a]}return n}function Ht(e,t,s,n,i,r){if(t){let o=!1;const a=Zt++;for(let l in s){let c=i?St(l):l,u=t[c];if(u)for(let d=0,h=u.length,f;d<h&&(f=u[d]);d++)(!f.info||f.info.lastRun!==a)&&(!i||zs(l,f.trigger))&&(f.info&&(f.info.lastRun=a),f.fn(e,l,s,n,f.info,i,r),o=!0)}return o}return!1}function Wa(e,t,s,n,i,r,o,a){let l=!1,c=o?St(n):n,u=t[c];if(u)for(let d=0,h=u.length,f;d<h&&(f=u[d]);d++)(!f.info||f.info.lastRun!==s)&&(!o||zs(n,f.trigger))&&(f.info&&(f.info.lastRun=s),f.fn(e,n,i,r,f.info,o,a),l=!0);return l}function zs(e,t){if(t){let s=t.name;return s==e||!!(t.structured&&Sa(s,e))||!!(t.wildcard&&Oe(s,e))}else return!0}function un(e,t,s,n,i){let r=typeof i.method=="string"?e[i.method]:i.method,o=i.property;r?r.call(e,e.__data[o],n[o]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function Ka(e,t,s,n,i){let r=e[T.NOTIFY],o,a=Zt++;for(let c in t)t[c]&&(r&&Wa(e,r,a,c,s,n,i)||i&&Ya(e,c,s))&&(o=!0);let l;o&&(l=e.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function Ya(e,t,s){let n=St(t);if(n!==t){let i=Ve(n)+"-changed";return Ni(e,i,s[t],t),!0}return!1}function Ni(e,t,s,n){let i={value:s,queueProperty:!0};n&&(i.path=n),yt(e).dispatchEvent(new CustomEvent(t,{detail:i}))}function qa(e,t,s,n,i,r){let a=(r?St(t):t)!=t?t:null,l=a?U(e,a):e.__data[t];a&&l===void 0&&(l=s[t]),Ni(e,i.eventName,l,a)}function Ja(e,t,s,n,i){let r,o=e.detail,a=o&&o.path;a?(n=Te(s,n,a),r=o&&o.value):r=e.currentTarget[s],r=i?!r:r,(!t[T.READ_ONLY]||!t[T.READ_ONLY][n])&&t._setPendingPropertyOrPath(n,r,!0,!!a)&&(!o||!o.queueProperty)&&t._invalidateProperties()}function Ga(e,t,s,n,i){let r=e.__data[t];Pe&&(r=Pe(r,i.attrName,"attribute",e)),e._propertyToAttribute(t,i.attrName,r)}function Xa(e,t,s,n){let i=e[T.COMPUTE];if(i)if(fa){Zt++;const r=Qa(e),o=[];for(let l in t)dn(l,i,o,r,n);let a;for(;a=o.shift();)Mi(e,"",t,s,a)&&dn(a.methodInfo,i,o,r,n);Object.assign(s,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let r=t;for(;Ht(e,i,r,s,n);)Object.assign(s,e.__dataOld),Object.assign(t,e.__dataPending),r=e.__dataPending,e.__dataPending=null}}const Za=(e,t,s)=>{let n=0,i=t.length-1,r=-1;for(;n<=i;){const o=n+i>>1,a=s.get(t[o].methodInfo)-s.get(e.methodInfo);if(a<0)n=o+1;else if(a>0)i=o-1;else{r=o;break}}r<0&&(r=i+1),t.splice(r,0,e)},dn=(e,t,s,n,i)=>{const r=i?St(e):e,o=t[r];if(o)for(let a=0;a<o.length;a++){const l=o[a];l.info.lastRun!==Zt&&(!i||zs(e,l.trigger))&&(l.info.lastRun=Zt,Za(l.info,s,n))}};function Qa(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;const s=e[T.COMPUTE];let{counts:n,ready:i,total:r}=tl(e),o;for(;o=i.shift();){t.set(o,t.size);const a=s[o];a&&a.forEach(l=>{const c=l.info.methodInfo;--r,--n[c]===0&&i.push(c)})}r!==0&&console.warn(`Computed graph for ${e.localName} incomplete; circular?`),e.constructor.__orderedComputedDeps=t}return t}function tl(e){const t=e[zi],s={},n=e[T.COMPUTE],i=[];let r=0;for(let o in t){const a=t[o];r+=s[o]=a.args.filter(l=>!l.literal).length+(a.dynamicFn?1:0)}for(let o in n)t[o]||i.push(o);return{counts:s,ready:i,total:r}}function Mi(e,t,s,n,i){let r=bs(e,t,s,n,i);if(r===Qt)return!1;let o=i.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,r,!0):(e[o]=r,!1)}function el(e,t,s){let n=e.__dataLinkedPaths;if(n){let i;for(let r in n){let o=n[r];Oe(r,t)?(i=Te(r,o,t),e._setPendingPropertyOrPath(i,s,!0,!0)):Oe(o,t)&&(i=Te(o,r,t),e._setPendingPropertyOrPath(i,s,!0,!0))}}}function is(e,t,s,n,i,r,o){s.bindings=s.bindings||[];let a={kind:n,target:i,parts:r,literal:o,isCompound:r.length!==1};if(s.bindings.push(a),ol(a)){let{event:c,negate:u}=a.parts[0];a.listenerEvent=c||Ve(i)+"-changed",a.listenerNegate=u}let l=t.nodeInfoList.length;for(let c=0;c<a.parts.length;c++){let u=a.parts[c];u.compoundIndex=c,sl(e,t,a,u,l)}}function sl(e,t,s,n,i){if(!n.literal)if(s.kind==="attribute"&&s.target[0]==="-")console.warn("Cannot set attribute "+s.target+' because "-" is not a valid attribute starting character');else{let r=n.dependencies,o={index:i,binding:s,part:n,evaluator:e};for(let a=0;a<r.length;a++){let l=r[a];typeof l=="string"&&(l=Fi(l),l.wildcard=!0),e._addTemplatePropertyEffect(t,l.rootProperty,{fn:nl,info:o,trigger:l})}}}function nl(e,t,s,n,i,r,o){let a=o[i.index],l=i.binding,c=i.part;if(r&&c.source&&t.length>c.source.length&&l.kind=="property"&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let u=s[t];t=Te(c.source,l.target,t),a._setPendingPropertyOrPath(t,u,!1,!0)&&e._enqueueClient(a)}else{let u=i.evaluator._evaluateBinding(e,c,t,s,n,r);u!==Qt&&il(e,a,l,c,u)}}function il(e,t,s,n,i){if(i=rl(t,i,s,n),Pe&&(i=Pe(i,s.target,s.kind,t)),s.kind=="attribute")e._valueToNodeAttribute(t,i,s.target);else{let r=s.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[r]?(!t[T.READ_ONLY]||!t[T.READ_ONLY][r])&&t._setPendingProperty(r,i)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,r,i)}}function rl(e,t,s,n){if(s.isCompound){let i=e.__dataCompoundStorage[s.target];i[n.compoundIndex]=t,t=i.join("")}return s.kind!=="attribute"&&(s.target==="textContent"||s.target==="value"&&(e.localName==="input"||e.localName==="textarea"))&&(t=t??""),t}function ol(e){return!!e.target&&e.kind!="attribute"&&e.kind!="text"&&!e.isCompound&&e.parts[0].mode==="{"}function al(e,t){let{nodeList:s,nodeInfoList:n}=t;if(n.length)for(let i=0;i<n.length;i++){let r=n[i],o=s[i],a=r.bindings;if(a)for(let l=0;l<a.length;l++){let c=a[l];ll(o,c),cl(o,e,c)}o.__dataHost=e}}function ll(e,t){if(t.isCompound){let s=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),n=t.parts,i=new Array(n.length);for(let o=0;o<n.length;o++)i[o]=n[o].literal;let r=t.target;s[r]=i,t.literal&&t.kind=="property"&&(r==="className"&&(e=yt(e)),e[r]=t.literal)}}function cl(e,t,s){if(s.listenerEvent){let n=s.parts[0];e.addEventListener(s.listenerEvent,function(i){Ja(i,t,s.target,n.source,n.negate)})}}function hn(e,t,s,n,i,r){r=t.static||r&&(typeof r!="object"||r[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:i,dynamicFn:r};for(let a=0,l;a<t.args.length&&(l=t.args[a]);a++)l.literal||e._addPropertyEffect(l.rootProperty,s,{fn:n,info:o,trigger:l});return r&&e._addPropertyEffect(t.methodName,s,{fn:n,info:o}),o}function bs(e,t,s,n,i){let r=e._methodHost||e,o=r[i.methodName];if(o){let a=e._marshalArgs(i.args,t,s);return a===Qt?Qt:o.apply(r,a)}else i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}const ul=[],Ii="(?:[a-zA-Z_$][\\w.:$\\-*]*)",dl="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",hl="(?:'(?:[^'\\\\]|\\\\.)*')",fl='(?:"(?:[^"\\\\]|\\\\.)*")',pl="(?:"+hl+"|"+fl+")",fn="(?:("+Ii+"|"+dl+"|"+pl+")\\s*)",ml="(?:"+fn+"(?:,\\s*"+fn+")*)",gl="(?:\\(\\s*(?:"+ml+"?)\\)\\s*)",yl="("+Ii+"\\s*"+gl+"?)",_l="(\\[\\[|{{)\\s*",bl="(?:]]|}})",wl="(?:(!)\\s*)?",vl=_l+wl+yl+bl,pn=new RegExp(vl,"g");function mn(e){let t="";for(let s=0;s<e.length;s++){let n=e[s].literal;t+=n||""}return t}function rs(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let n={methodName:t[1],static:!0,args:ul};if(t[2].trim()){let i=t[2].replace(/\\,/g,"&comma;").split(",");return xl(i,n)}else return n}return null}function xl(e,t){return t.args=e.map(function(s){let n=Fi(s);return n.literal||(t.static=!1),n},this),t}function Fi(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),s={name:t,value:"",literal:!1},n=t[0];switch(n==="-"&&(n=t[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':s.value=t.slice(1,-1),s.literal=!0;break;case"#":s.value=Number(t),s.literal=!0;break}return s.literal||(s.rootProperty=St(t),s.structured=ys(t),s.structured&&(s.wildcard=t.slice(-2)==".*",s.wildcard&&(s.name=t.slice(0,-2)))),s}function gn(e,t,s){let n=U(e,s);return n===void 0&&(n=t[s]),n}function Di(e,t,s,n){const i={indexSplices:n};gs&&!e._overrideLegacyUndefined&&(t.splices=i),e.notifyPath(s+".splices",i),e.notifyPath(s+".length",t.length),gs&&!e._overrideLegacyUndefined&&(i.indexSplices=[])}function It(e,t,s,n,i,r){Di(e,t,s,[{index:n,addedCount:i,removed:r,object:t,type:"splice"}])}function Sl(e){return e[0].toUpperCase()+e.substring(1)}const Cl=xt(e=>{const t=Ua(Ra(e));class s extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return T}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(Ft.length){let i=Ft[Ft.length-1];i._enqueueClient(this),this.__dataHost=i}}_initializeProtoProperties(i){this.__data=Object.create(i),this.__dataPending=Object.create(i),this.__dataOld={}}_initializeInstanceProperties(i){let r=this[T.READ_ONLY];for(let o in i)(!r||!r[o])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[o]=this.__dataPending[o]=i[o])}_addPropertyEffect(i,r,o){this._createPropertyAccessor(i,r==T.READ_ONLY);let a=ns(this,r,!0)[i];a||(a=this[r][i]=[]),a.push(o)}_removePropertyEffect(i,r,o){let a=ns(this,r,!0)[i],l=a.indexOf(o);l>=0&&a.splice(l,1)}_hasPropertyEffect(i,r){let o=this[r];return!!(o&&o[i])}_hasReadOnlyEffect(i){return this._hasPropertyEffect(i,T.READ_ONLY)}_hasNotifyEffect(i){return this._hasPropertyEffect(i,T.NOTIFY)}_hasReflectEffect(i){return this._hasPropertyEffect(i,T.REFLECT)}_hasComputedEffect(i){return this._hasPropertyEffect(i,T.COMPUTE)}_setPendingPropertyOrPath(i,r,o,a){if(a||St(Array.isArray(i)?i[0]:i)!==i){if(!a){let l=U(this,i);if(i=an(this,i,r),!i||!super._shouldPropertyChange(i,r,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(i,r,o))return el(this,i,r),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[i])return this._setPendingProperty(i,r,o);this[i]=r}return!1}_setUnmanagedPropertyToNode(i,r,o){(o!==i[r]||typeof o=="object")&&(r==="className"&&(i=yt(i)),i[r]=o)}_setPendingProperty(i,r,o){let a=this.__dataHasPaths&&ys(i),l=a?this.__dataTemp:this.__data;return this._shouldPropertyChange(i,r,l[i])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),i in this.__dataOld||(this.__dataOld[i]=this.__data[i]),a?this.__dataTemp[i]=r:this.__data[i]=r,this.__dataPending[i]=r,(a||this[T.NOTIFY]&&this[T.NOTIFY][i])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[i]=o),!0):!1}_setProperty(i,r){this._setPendingProperty(i,r,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(i){this.__dataPendingClients=this.__dataPendingClients||[],i!==this&&this.__dataPendingClients.push(i)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let i=this.__dataPendingClients;if(i){this.__dataPendingClients=null;for(let r=0;r<i.length;r++){let o=i[r];o.__dataEnabled?o.__dataPending&&o._flushProperties():o._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(i,r){for(let o in i)(r||!this[T.READ_ONLY]||!this[T.READ_ONLY][o])&&this._setPendingPropertyOrPath(o,i[o],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(i,r,o){let a=this.__dataHasPaths;this.__dataHasPaths=!1;let l;Xa(this,r,o,a),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(r,o,a),this._flushClients(),Ht(this,this[T.REFLECT],r,o,a),Ht(this,this[T.OBSERVE],r,o,a),l&&Ka(this,l,r,o,a),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(i,r,o){this[T.PROPAGATE]&&Ht(this,this[T.PROPAGATE],i,r,o),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,i,r,o)}_runEffectsForTemplate(i,r,o,a){const l=(c,u)=>{Ht(this,i.propertyEffects,c,o,u,i.nodeList);for(let d=i.firstChild;d;d=d.nextSibling)this._runEffectsForTemplate(d,c,o,u)};i.runEffects?i.runEffects(l,r,a):l(r,a)}linkPaths(i,r){i=Ut(i),r=Ut(r),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[i]=r}unlinkPaths(i){i=Ut(i),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[i]}notifySplices(i,r){let o={path:""},a=U(this,i,o);Di(this,a,o.path,r)}get(i,r){return U(r||this,i)}set(i,r,o){o?an(o,i,r):(!this[T.READ_ONLY]||!this[T.READ_ONLY][i])&&this._setPendingPropertyOrPath(i,r,!0)&&this._invalidateProperties()}push(i,...r){let o={path:""},a=U(this,i,o),l=a.length,c=a.push(...r);return r.length&&It(this,a,o.path,l,r.length,[]),c}pop(i){let r={path:""},o=U(this,i,r),a=!!o.length,l=o.pop();return a&&It(this,o,r.path,o.length,0,[l]),l}splice(i,r,o,...a){let l={path:""},c=U(this,i,l);r<0?r=c.length-Math.floor(-r):r&&(r=Math.floor(r));let u;return arguments.length===2?u=c.splice(r):u=c.splice(r,o,...a),(a.length||u.length)&&It(this,c,l.path,r,a.length,u),u}shift(i){let r={path:""},o=U(this,i,r),a=!!o.length,l=o.shift();return a&&It(this,o,r.path,0,0,[l]),l}unshift(i,...r){let o={path:""},a=U(this,i,o),l=a.unshift(...r);return r.length&&It(this,a,o.path,0,r.length,[]),l}notifyPath(i,r){let o;if(arguments.length==1){let a={path:""};r=U(this,i,a),o=a.path}else Array.isArray(i)?o=Ut(i):o=i;this._setPendingPropertyOrPath(o,r,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(i,r){this._addPropertyEffect(i,T.READ_ONLY),r&&(this["_set"+Sl(i)]=function(o){this._setProperty(i,o)})}_createPropertyObserver(i,r,o){let a={property:i,method:r,dynamicFn:!!o};this._addPropertyEffect(i,T.OBSERVE,{fn:un,info:a,trigger:{name:i}}),o&&this._addPropertyEffect(r,T.OBSERVE,{fn:un,info:a,trigger:{name:r}})}_createMethodObserver(i,r){let o=rs(i);if(!o)throw new Error("Malformed observer expression '"+i+"'");hn(this,o,T.OBSERVE,bs,null,r)}_createNotifyingProperty(i){this._addPropertyEffect(i,T.NOTIFY,{fn:qa,info:{eventName:Ve(i)+"-changed",property:i}})}_createReflectedProperty(i){let r=this.constructor.attributeNameForProperty(i);r[0]==="-"?console.warn("Property "+i+" cannot be reflected to attribute "+r+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(i,T.REFLECT,{fn:Ga,info:{attrName:r}})}_createComputedProperty(i,r,o){let a=rs(r);if(!a)throw new Error("Malformed computed expression '"+r+"'");const l=hn(this,a,T.COMPUTE,Mi,i,o);ns(this,zi)[i]=l}_marshalArgs(i,r,o){const a=this.__data,l=[];for(let c=0,u=i.length;c<u;c++){let{name:d,structured:h,wildcard:f,value:p,literal:m}=i[c];if(!m)if(f){const g=Oe(d,r),y=gn(a,o,g?r:d);p={path:g?r:d,value:y,base:g?U(a,d):y}}else p=h?gn(a,o,d):a[d];if(gs&&!this._overrideLegacyUndefined&&p===void 0&&i.length>1)return Qt;l[c]=p}return l}static addPropertyEffect(i,r,o){this.prototype._addPropertyEffect(i,r,o)}static createPropertyObserver(i,r,o){this.prototype._createPropertyObserver(i,r,o)}static createMethodObserver(i,r){this.prototype._createMethodObserver(i,r)}static createNotifyingProperty(i){this.prototype._createNotifyingProperty(i)}static createReadOnlyProperty(i,r){this.prototype._createReadOnlyProperty(i,r)}static createReflectedProperty(i){this.prototype._createReflectedProperty(i)}static createComputedProperty(i,r,o){this.prototype._createComputedProperty(i,r,o)}static bindTemplate(i){return this.prototype._bindTemplate(i)}_bindTemplate(i,r){let o=this.constructor._parseTemplate(i),a=this.__preBoundTemplateInfo==o;if(!a)for(let l in o.propertyEffects)this._createPropertyAccessor(l);if(r)if(o=Object.create(o),o.wasPreBound=a,!this.__templateInfo)this.__templateInfo=o;else{const l=i._parentTemplateInfo||this.__templateInfo,c=l.lastChild;o.parent=l,l.lastChild=o,o.previousSibling=c,c?c.nextSibling=o:l.firstChild=o}else this.__preBoundTemplateInfo=o;return o}static _addTemplatePropertyEffect(i,r,o){let a=i.hostProps=i.hostProps||{};a[r]=!0;let l=i.propertyEffects=i.propertyEffects||{};(l[r]=l[r]||[]).push(o)}_stampTemplate(i,r){r=r||this._bindTemplate(i,!0),Ft.push(this);let o=super._stampTemplate(i,r);if(Ft.pop(),r.nodeList=o.nodeList,!r.wasPreBound){let a=r.childNodes=[];for(let l=o.firstChild;l;l=l.nextSibling)a.push(l)}return o.templateInfo=r,al(this,r),this.__dataClientsReady&&(this._runEffectsForTemplate(r,this.__data,null,!1),this._flushClients()),o}_removeBoundDom(i){const r=i.templateInfo,{previousSibling:o,nextSibling:a,parent:l}=r;o?o.nextSibling=a:l&&(l.firstChild=a),a?a.previousSibling=o:l&&(l.lastChild=o),r.nextSibling=r.previousSibling=null;let c=r.childNodes;for(let u=0;u<c.length;u++){let d=c[u];yt(yt(d).parentNode).removeChild(d)}}static _parseTemplateNode(i,r,o){let a=t._parseTemplateNode.call(this,i,r,o);if(i.nodeType===Node.TEXT_NODE){let l=this._parseBindings(i.textContent,r);l&&(i.textContent=mn(l)||" ",is(this,r,o,"text","textContent",l),a=!0)}return a}static _parseTemplateNodeAttribute(i,r,o,a,l){let c=this._parseBindings(l,r);if(c){let u=a,d="property";Ha.test(a)?d="attribute":a[a.length-1]=="$"&&(a=a.slice(0,-1),d="attribute");let h=mn(c);return h&&d=="attribute"&&(a=="class"&&i.hasAttribute("class")&&(h+=" "+i.getAttribute(a)),i.setAttribute(a,h)),d=="attribute"&&u=="disable-upgrade$"&&i.setAttribute(a,""),i.localName==="input"&&u==="value"&&i.setAttribute(u,""),i.removeAttribute(u),d==="property"&&(a=Ti(a)),is(this,r,o,d,a,c,h),!0}else return t._parseTemplateNodeAttribute.call(this,i,r,o,a,l)}static _parseTemplateNestedTemplate(i,r,o){let a=t._parseTemplateNestedTemplate.call(this,i,r,o);const l=i.parentNode,c=o.templateInfo,u=l.localName==="dom-if",d=l.localName==="dom-repeat";en&&(u||d)&&(l.removeChild(i),o=o.parentInfo,o.templateInfo=c,o.noted=!0,a=!1);let h=c.hostProps;if(pa&&u)h&&(r.hostProps=Object.assign(r.hostProps||{},h),en||(o.parentInfo.noted=!0));else{let f="{";for(let p in h){let m=[{mode:f,source:p,dependencies:[p],hostProp:!0}];is(this,r,o,"property","_host_"+p,m)}}return a}static _parseBindings(i,r){let o=[],a=0,l;for(;(l=pn.exec(i))!==null;){l.index>a&&o.push({literal:i.slice(a,l.index)});let c=l[1][0],u=!!l[2],d=l[3].trim(),h=!1,f="",p=-1;c=="{"&&(p=d.indexOf("::"))>0&&(f=d.substring(p+2),d=d.substring(0,p),h=!0);let m=rs(d),g=[];if(m){let{args:y,methodName:_}=m;for(let w=0;w<y.length;w++){let x=y[w];x.literal||g.push(x)}let b=r.dynamicFns;(b&&b[_]||m.static)&&(g.push(_),m.dynamicFn=!0)}else g.push(d);o.push({source:d,mode:c,negate:u,customEvent:h,signature:m,dependencies:g,event:f}),a=pn.lastIndex}if(a&&a<i.length){let c=i.substring(a);c&&o.push({literal:c})}return o.length?o:null}static _evaluateBinding(i,r,o,a,l,c){let u;return r.signature?u=bs(i,o,a,l,r.signature):o!=r.source?u=U(i,r.source):c&&ys(o)?u=U(i,o):u=i.__data[o],r.negate&&(u=!u),u}}return s}),Ft=[];function El(e){const t={};for(let s in e){const n=e[s];t[s]=typeof n=="function"?{type:n}:n}return t}const Pl=xt(e=>{const t=Li(e);function s(r){const o=Object.getPrototypeOf(r);return o.prototype instanceof i?o:null}function n(r){if(!r.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",r))){let o=null;if(r.hasOwnProperty(JSCompiler_renameProperty("properties",r))){const a=r.properties;a&&(o=El(a))}r.__ownProperties=o}return r.__ownProperties}class i extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const o=this._properties;this.__observedAttributes=o?Object.keys(o).map(a=>this.prototype._addPropertyToAttributeMap(a)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const o=s(this);o&&o.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const o=n(this);o&&this.createProperties(o)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const o=s(this);this.__properties=Object.assign({},o&&o._properties,n(this))}return this.__properties}static typeForProperty(o){const a=this._properties[o];return a&&a.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i});const Ol="3.5.2",yn=window.ShadyCSS&&window.ShadyCSS.cssBuild,Tl=xt(e=>{const t=Pl(Cl(e));function s(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let c=l._properties;for(let u in c){let d=c[u];"value"in d&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[u]=d)}}return l.__propertyDefaults}function n(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function i(l,c,u,d){u.computed&&(u.readOnly=!0),u.computed&&(l._hasReadOnlyEffect(c)?console.warn(`Cannot redefine computed property '${c}'.`):l._createComputedProperty(c,u.computed,d)),u.readOnly&&!l._hasReadOnlyEffect(c)?l._createReadOnlyProperty(c,!u.computed):u.readOnly===!1&&l._hasReadOnlyEffect(c)&&console.warn(`Cannot make readOnly property '${c}' non-readOnly.`),u.reflectToAttribute&&!l._hasReflectEffect(c)?l._createReflectedProperty(c):u.reflectToAttribute===!1&&l._hasReflectEffect(c)&&console.warn(`Cannot make reflected property '${c}' non-reflected.`),u.notify&&!l._hasNotifyEffect(c)?l._createNotifyingProperty(c):u.notify===!1&&l._hasNotifyEffect(c)&&console.warn(`Cannot make notify property '${c}' non-notify.`),u.observer&&l._createPropertyObserver(c,u.observer,d[u.observer]),l._addPropertyToAttributeMap(c)}function r(l,c,u,d){if(!yn){const h=c.content.querySelectorAll("style"),f=Ei(c),p=xa(u),m=c.content.firstElementChild;for(let y=0;y<p.length;y++){let _=p[y];_.textContent=l._processStyleText(_.textContent,d),c.content.insertBefore(_,m)}let g=0;for(let y=0;y<f.length;y++){let _=f[y],b=h[g];b!==_?(_=_.cloneNode(!0),b.parentNode.insertBefore(_,b)):g++,_.textContent=l._processStyleText(_.textContent,d)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(c,u),ma&&yn&&aa){const h=c.content.querySelectorAll("style");if(h){let f="";Array.from(h).forEach(p=>{f+=p.textContent,p.parentNode.removeChild(p)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(f)}}}function o(l){let c=null;if(l&&(!ms||ca)&&(c=Xt.import(l,"template"),ms&&!c))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return c}class a extends t{static get polymerElementVersion(){return Ol}static _finalizeClass(){t._finalizeClass.call(this);const c=n(this);c&&this.createObservers(c,this._properties),this._prepareTemplate()}static _prepareTemplate(){let c=this.template;c&&(typeof c=="string"?(console.error("template getter must return HTMLTemplateElement"),c=null):ua||(c=c.cloneNode(!0))),this.prototype._template=c}static createProperties(c){for(let u in c)i(this.prototype,u,c[u],c)}static createObservers(c,u){const d=this.prototype;for(let h=0;h<c.length;h++)d._createMethodObserver(c[h],u)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let c=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof c=="function"&&(c=c()),this._template=c!==void 0?c:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&o(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(c){this._template=c}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const c=this.importMeta;if(c)this._importPath=ks(c.url);else{const u=Xt.import(this.is);this._importPath=u&&u.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=la,this.importPath=this.constructor.importPath;let c=s(this.constructor);if(c)for(let u in c){let d=c[u];if(this._canApplyPropertyDefault(u)){let h=typeof d.value=="function"?d.value.call(this):d.value;this._hasAccessor(u)?this._setPendingProperty(u,h,!0):this[u]=h}}}_canApplyPropertyDefault(c){return!this.hasOwnProperty(c)}static _processStyleText(c,u){return Ls(c,u)}static _finalizeTemplate(c){const u=this.prototype._template;if(u&&!u.__polymerFinalized){u.__polymerFinalized=!0;const d=this.importPath,h=d?Yt(d):"";r(this,u,c,h),this.prototype._bindTemplate(u)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(c){const u=yt(this);if(u.attachShadow)return c?(u.shadowRoot||(u.attachShadow({mode:"open",shadyUpgradeFragment:c}),u.shadowRoot.appendChild(c),this.constructor._styleSheet&&(u.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),ha&&window.ShadyDOM&&window.ShadyDOM.flushInitial(u.shadowRoot),u.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(c){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,c)}resolveUrl(c,u){return!u&&this.importPath&&(u=Yt(this.importPath)),Yt(c,u)}static _parseTemplateContent(c,u,d){return u.dynamicFns=u.dynamicFns||this._properties,t._parseTemplateContent.call(this,c,u,d)}static _addTemplatePropertyEffect(c,u,d){return da&&!(u in this._properties)&&!(d.info.part.signature&&d.info.part.signature.static)&&!d.info.part.hostProp&&!c.nestedTemplate&&console.warn(`Property '${u}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,c,u,d)}}return a});const _n=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:e=>e});class Bi{constructor(t,s){Vi(t,s);const n=s.reduce((i,r,o)=>i+ji(r)+t[o+1],t[0]);this.value=n.toString()}toString(){return this.value}}function ji(e){if(e instanceof Bi)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}function Al(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof Bi)return ji(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}const $l=function(t,...s){Vi(t,s);const n=document.createElement("template");let i=s.reduce((r,o,a)=>r+Al(o)+t[a+1],t[0]);return _n&&(i=_n.createHTML(i)),n.innerHTML=i,n},Vi=(e,t)=>{if(!Array.isArray(e)||!Array.isArray(e.raw)||t.length!==e.length-1)throw new TypeError("Invalid call to the html template tag")};const Ll=Tl(HTMLElement),kl="bottom-bar-toolbar",Rl="bottom-bar-menu",zl=q`
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
`,Nl=Symbol("openMenu"),Ml=e=>{const t=e.shadowRoot?.querySelector("#dropdown");if(!t||t.hasAttribute("hidden"))return;t.shadowRoot?.querySelector("cosmoz-dropdown")?.shadowRoot?.querySelector("#dropdownButton")?.click()},Ui=e=>e.nodeType===Node.ELEMENT_NODE&&e.getAttribute("slot")!=="info"&&e.tagName!=="TEMPLATE"&&e.tagName!=="STYLE"&&e.tagName!=="DOM-REPEAT"&&e.tagName!=="DOM-IF"&&e.getAttribute("slot")!=="extra",Hi=e=>{const t=[...e.childNodes],s=[];for(const n of t)if(n.tagName==="SLOT"){const i=n.assignedElements({flatten:!0});s.push(...i)}else s.push(n);return s},Il=e=>{const t=Hi(e).filter(Ui).filter(n=>!n.hidden).sort((n,i)=>(Number(n.dataset.index)||0)-(Number(i.dataset.index)||0));if(t.length===0)return t;const s=t.reduce((n,i)=>parseInt(n.dataset.priority??"0",10)>=parseInt(i.dataset.priority??"0",10)?n:i,{dataset:{priority:"-1000"}});return[s,...t.filter(n=>n!==s)]},bn=(e,t,s,n)=>{const i=t?kl:Rl;e.setAttribute("slot",i),e.setAttribute("tabindex","0"),e.classList.toggle(n,!t),e.classList.toggle(s,t)},Fl=(e,t,s)=>{const n=Il(e),{maxToolbarItems:i=1}=e;if(!(n.length>0)){e.toggleAttribute("has-menu-items",!1);return}const o=n.slice(0,i),a=n.slice(o.length);o.forEach(l=>bn(l,!0,t,s)),a.forEach(l=>bn(l,!1,t,s)),e.toggleAttribute("has-menu-items",a.length>0)},Dl=e=>{const{active:t=!1,maxToolbarItems:s=1}=e,n=$t(!1),i="cosmoz-bottom-bar-toolbar",r="cosmoz-bottom-bar-menu";Tt({activity:Nl,callback:()=>Ml(e),check:()=>t&&!e.hasAttribute("hide-actions"),element:()=>e.shadowRoot?.querySelector("#dropdown")},[t]);const o=k(()=>li("height"),[]);hs(()=>{n.current?o(e,t):o(e,t,{duration:0}),n.current=!0},[t]);const a=P(()=>Fl(e,i,r),[s]),l=$t(null),c=P(()=>{const d=l.current;if(!d)return;d.disconnect(),Hi(e).filter(Ui).forEach(f=>{d.observe(f,{attributes:!0,attributeFilter:["hidden"]})})},[]);L(()=>{l.current=new MutationObserver(()=>{c(),a()}),c();const d=new MutationObserver(()=>{c(),a()});return d.observe(e,{childList:!0}),()=>{l.current?.disconnect(),l.current=null,d.disconnect()}},[a]);const u=P(()=>{c(),a()},[a]);return O` <div id="bar" part="bar">
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
		</div>`};customElements.define("cosmoz-bottom-bar",D(Dl,{observedAttributes:["active","max-toolbar-items"],styleSheets:[zl]}));const $e=`
	<slot name="extra" slot="extra"></slot>
	<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
	<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
`;O(Object.assign([$e],{raw:[$e]}));$l(Object.assign([$e],{raw:[$e]}));const Ue=dt(class extends vt{constructor(e){if(super(e),e.type!==X.PROPERTY&&e.type!==X.ATTRIBUTE&&e.type!==X.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ti(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===H||t===it)return t;const s=e.element,n=e.name;if(e.type===X.PROPERTY){if(t===s[n])return H}else if(e.type===X.BOOLEAN_ATTRIBUTE){if(!!t===s.hasAttribute(n))return H}else if(e.type===X.ATTRIBUTE&&s.getAttribute(n)===t+"")return H;return ei(e),t}}),Wi=(e,{label:t,invalid:s,errorMessage:n})=>O`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
				${G(t,()=>O`<label for="input" part="label">${t}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${G(s&&n,()=>O`<div class="error" part="error">${n}</div>`)}
	`,Ki=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],Bl=Math.abs,jl=(...e)=>e.some(t=>!!t),Vl=(...e)=>e.join(""),Ul=(e,t,s)=>e?t:s,Hl=(e,t)=>t.indexOf(e)>-1,Wl=(e,t)=>e===t,Kl=e=>!!(e==null||Array.isArray(e)&&e.length===0||typeof e=="string"&&e.length===0||typeof e=="number"&&e===0),Yl=(e,t)=>typeof e!="number"?"":e.toFixed(t),Cd=Object.freeze(Object.defineProperty({__proto__:null,abs:Bl,anyTrue:jl,concat:Vl,ifElse:Ul,inArray:Hl,isEmpty:Kl,isEqual:Wl,toFixed:Yl},Symbol.toStringTag,{value:"Module"})),ql={isoBasic:/^\d{4}-\d{2}-\d{2}$/iu},Jl=e=>typeof e=="string"&&ql.isoBasic.test(e)?new Date(`${e}T00:00`):new Date(e),Ed=e=>{if(e==null)return;if(e instanceof Date&&!isNaN(e.getTime()))return e;if(!(typeof e=="number"||typeof e=="string"))return;const t=Jl(e);if(!(t instanceof Date&&isNaN(t.getTime())))return t},Dt=e=>e<10?"0"+e:e,Pd=e=>e instanceof Date?e.getFullYear()+"-"+Dt(e.getMonth()+1)+"-"+Dt(e.getDate())+"T"+Dt(e.getHours())+":"+Dt(e.getMinutes())+":"+Dt(e.getSeconds())+"."+(e.getMilliseconds()/1e3).toFixed(3).slice(2,5):null,He=(e,...t)=>e.flatMap((s,n)=>[s,t[n]??""]).join(""),Ns=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},Od=(e,t)=>{const s=class extends t{};return Object.assign(s.prototype,e),s},wn=He`
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
`,Yi=He`
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
		${wn}
	}
	@container style(--focused: focused) {
		${wn}
	}
`,Gl=e=>k(()=>{if(e==null)return;const t=new RegExp(e,"u");return s=>{!s.defaultPrevented&&s.data&&!t.test(s.data)&&s.preventDefault()}},[e]),Xl=ut(class extends ct{values;constructor(e,t,s,n){super(e,t),Object.assign(t.host,s),this.values=n}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((t,s)=>this.values[s]!==t)}}),ie=ut(class extends ct{update(){return this.state.host}}),Zl=/([A-Z])/gu,te=(e,t,s)=>{e[t]=s,e.dispatchEvent(new CustomEvent(t.replace(Zl,"-$1").toLowerCase()+"-changed",{detail:{value:s}}))},Td=(e,t,s=[t])=>{const n=ie();L(()=>{te(n,e,t)},s)},qi=e=>{const t=$t(void 0),s=P(l=>t.current=l,[]),n=e.shadowRoot,i=P(l=>e.dispatchEvent(new Event(l.type,{bubbles:l.bubbles})),[]),r=P(l=>te(e,"value",l.target.value),[]),o=P(l=>te(e,"focused",l.type==="focus"),[]),a=P(()=>{const l=t.current?.checkValidity();return e.toggleAttribute("invalid",!l),l},[]);return Xl({validate:a},[a]),L(()=>{const l=c=>{c.composedPath()[0]?.closest?.("input, textarea")||(c.preventDefault(),t.current?.focus())};return n.addEventListener("mousedown",l),()=>n.removeEventListener("mousedown",l)},[]),{onChange:i,onFocus:o,onInput:r,onRef:s}},Ql=({placeholder:e,noLabelFloat:t,label:s})=>(t?s:void 0)||e||" ",tc=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...Ki],ec=e=>{const{type:t="text",pattern:s,allowedPattern:n,autocomplete:i,value:r,readonly:o,disabled:a,min:l,max:c,step:u,maxlength:d}=e,{onChange:h,onFocus:f,onInput:p,onRef:m}=qi(e),g=Gl(n);return Wi(O`
			<input
				${Lt(m)}
				style="--chars: ${r?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${N(s)}
				autocomplete=${N(i)}
				placeholder=${Ql(e)}
				?readonly=${o}
				?aria-disabled=${a}
				?disabled=${a}
				.value=${Ue(r??"")}
				maxlength=${N(d)}
				@beforeinput=${g}
				@input=${p}
				@change=${h}
				@focus=${f}
				@blur=${f}
				min=${N(l)}
				max=${N(c)}
				step=${N(u)}
			/>
		`,e)};customElements.define("cosmoz-input",D(ec,{observedAttributes:tc,styleSheets:[Ps(Yi)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const vn=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},sc=(e,t=0)=>{if(t>0){const s=e.getAttribute("rows")??"",n=e.style.height;e.style.height="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=n,e.setAttribute("rows",s)}},nc=e=>{const{value:t,maxRows:s}=e,n=k(()=>()=>e.shadowRoot.querySelector("#input"),[]);L(()=>sc(n(),s),[s,n]),L(()=>vn(n()),[n,t]),L(()=>{const i=n(),r=new ResizeObserver(()=>requestAnimationFrame(()=>vn(i)));return r.observe(i),()=>r.unobserve(i)},[n])},ic=["rows","placeholder",...Ki],rc=e=>{const{autocomplete:t,value:s,placeholder:n,readonly:i,disabled:r,rows:o,cols:a,maxlength:l}=e,{onChange:c,onFocus:u,onInput:d,onRef:h}=qi(e);return nc(e),Wi(O`
			<textarea id="input" part="input"
				${Lt(h)}
				autocomplete=${N(t)}
				placeholder=${n||" "}
				rows=${o??1} cols=${N(a)}
				?readonly=${i} ?aria-disabled=${r} ?disabled=${r}
				.value=${Ue(s??"")} maxlength=${N(l)} @input=${d}
				@change=${c} @focus=${u} @blur=${u}>`,e)};customElements.define("cosmoz-textarea",D(rc,{observedAttributes:ic,styleSheets:[Ps(Yi)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const oc=e=>{const{label:t,value:s,disabled:n,error:i}=e,r=P(o=>e.dispatchEvent(new CustomEvent("change",{detail:o.target.checked})),[]);return O`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${Ue(!!s)}
			?disabled=${n}
			@change=${r}
		/>
		${G(t,()=>O`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${G(i,o=>O`<div class="failure">${o}</div>`)} `},ac=q`
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
`,lc=q`
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
`;customElements.define("cosmoz-toggle",D(oc,{styleSheets:[lc,ac],observedAttributes:["disabled"]}));const qt=Symbol("memo"),Ad=e=>{let t=qt,s=qt,n;return function(i,r){if(t===i&&s===r)return n;const o=e(i,r);return n=o,t=i,s=r,o}},$d=e=>{let t=qt,s=qt,n=qt,i;return function(r,o,a){if(t===r&&s===o&&n===a)return i;const l=e(r,o,a);return i=l,t=r,s=o,n=a,l}},v=e=>typeof e=="string",Bt=()=>{let e,t;const s=new Promise((n,i)=>{e=n,t=i});return s.resolve=e,s.reject=t,s},xn=e=>e==null?"":""+e,cc=(e,t,s)=>{e.forEach(n=>{t[n]&&(s[n]=t[n])})},uc=/###/g,Sn=e=>e&&e.indexOf("###")>-1?e.replace(uc,"."):e,Cn=e=>!e||v(e),Jt=(e,t,s)=>{const n=v(t)?t.split("."):t;let i=0;for(;i<n.length-1;){if(Cn(e))return{};const r=Sn(n[i]);!e[r]&&s&&(e[r]=new s),Object.prototype.hasOwnProperty.call(e,r)?e=e[r]:e={},++i}return Cn(e)?{}:{obj:e,k:Sn(n[i])}},En=(e,t,s)=>{const{obj:n,k:i}=Jt(e,t,Object);if(n!==void 0||t.length===1){n[i]=s;return}let r=t[t.length-1],o=t.slice(0,t.length-1),a=Jt(e,o,Object);for(;a.obj===void 0&&o.length;)r=`${o[o.length-1]}.${r}`,o=o.slice(0,o.length-1),a=Jt(e,o,Object),a&&a.obj&&typeof a.obj[`${a.k}.${r}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${r}`]=s},dc=(e,t,s,n)=>{const{obj:i,k:r}=Jt(e,t,Object);i[r]=i[r]||[],i[r].push(s)},Le=(e,t)=>{const{obj:s,k:n}=Jt(e,t);if(s)return s[n]},hc=(e,t,s)=>{const n=Le(e,s);return n!==void 0?n:Le(t,s)},Ji=(e,t,s)=>{for(const n in t)n!=="__proto__"&&n!=="constructor"&&(n in e?v(e[n])||e[n]instanceof String||v(t[n])||t[n]instanceof String?s&&(e[n]=t[n]):Ji(e[n],t[n],s):e[n]=t[n]);return e},Et=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var fc={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const pc=e=>v(e)?e.replace(/[&<>"'\/]/g,t=>fc[t]):e;class mc{constructor(t){this.capacity=t,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(t){const s=this.regExpMap.get(t);if(s!==void 0)return s;const n=new RegExp(t);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(t,n),this.regExpQueue.push(t),n}}const gc=[" ",",","?","!",";"],yc=new mc(20),_c=(e,t,s)=>{t=t||"",s=s||"";const n=gc.filter(o=>t.indexOf(o)<0&&s.indexOf(o)<0);if(n.length===0)return!0;const i=yc.getRegExp(`(${n.map(o=>o==="?"?"\\?":o).join("|")})`);let r=!i.test(e);if(!r){const o=e.indexOf(s);o>0&&!i.test(e.substring(0,o))&&(r=!0)}return r},ws=function(e,t){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!e)return;if(e[t])return e[t];const n=t.split(s);let i=e;for(let r=0;r<n.length;){if(!i||typeof i!="object")return;let o,a="";for(let l=r;l<n.length;++l)if(l!==r&&(a+=s),a+=n[l],o=i[a],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&l<n.length-1)continue;r+=l-r+1;break}i=o}return i},ke=e=>e&&e.replace("_","-"),bc={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console&&console[e]&&console[e].apply(console,t)}};class Re{constructor(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,s)}init(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=s.prefix||"i18next:",this.logger=t||bc,this.options=s,this.debug=s.debug}log(){for(var t=arguments.length,s=new Array(t),n=0;n<t;n++)s[n]=arguments[n];return this.forward(s,"log","",!0)}warn(){for(var t=arguments.length,s=new Array(t),n=0;n<t;n++)s[n]=arguments[n];return this.forward(s,"warn","",!0)}error(){for(var t=arguments.length,s=new Array(t),n=0;n<t;n++)s[n]=arguments[n];return this.forward(s,"error","")}deprecate(){for(var t=arguments.length,s=new Array(t),n=0;n<t;n++)s[n]=arguments[n];return this.forward(s,"warn","WARNING DEPRECATED: ",!0)}forward(t,s,n,i){return i&&!this.debug?null:(v(t[0])&&(t[0]=`${n}${this.prefix} ${t[0]}`),this.logger[s](t))}create(t){return new Re(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new Re(this.logger,t)}}var st=new Re;class We{constructor(){this.observers={}}on(t,s){return t.split(" ").forEach(n=>{this.observers[n]||(this.observers[n]=new Map);const i=this.observers[n].get(s)||0;this.observers[n].set(s,i+1)}),this}off(t,s){if(this.observers[t]){if(!s){delete this.observers[t];return}this.observers[t].delete(s)}}emit(t){for(var s=arguments.length,n=new Array(s>1?s-1:0),i=1;i<s;i++)n[i-1]=arguments[i];this.observers[t]&&Array.from(this.observers[t].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a(...n)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a.apply(a,[t,...n])})}}class Pn extends We{constructor(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=s,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const s=this.options.ns.indexOf(t);s>-1&&this.options.ns.splice(s,1)}getResource(t,s,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,o=i.ignoreJSONStructure!==void 0?i.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;t.indexOf(".")>-1?a=t.split("."):(a=[t,s],n&&(Array.isArray(n)?a.push(...n):v(n)&&r?a.push(...n.split(r)):a.push(n)));const l=Le(this.data,a);return!l&&!s&&!n&&t.indexOf(".")>-1&&(t=a[0],s=a[1],n=a.slice(2).join(".")),l||!o||!v(n)?l:ws(this.data&&this.data[t]&&this.data[t][s],n,r)}addResource(t,s,n,i){let r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let a=[t,s];n&&(a=a.concat(o?n.split(o):n)),t.indexOf(".")>-1&&(a=t.split("."),i=s,s=a[1]),this.addNamespaces(s),En(this.data,a,i),r.silent||this.emit("added",t,s,n,i)}addResources(t,s,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const r in n)(v(n[r])||Array.isArray(n[r]))&&this.addResource(t,s,r,n[r],{silent:!0});i.silent||this.emit("added",t,s,n)}addResourceBundle(t,s,n,i,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},a=[t,s];t.indexOf(".")>-1&&(a=t.split("."),i=n,n=s,s=a[1]),this.addNamespaces(s);let l=Le(this.data,a)||{};o.skipCopy||(n=JSON.parse(JSON.stringify(n))),i?Ji(l,n,r):l={...l,...n},En(this.data,a,l),o.silent||this.emit("added",t,s,n)}removeResourceBundle(t,s){this.hasResourceBundle(t,s)&&delete this.data[t][s],this.removeNamespaces(s),this.emit("removed",t,s)}hasResourceBundle(t,s){return this.getResource(t,s)!==void 0}getResourceBundle(t,s){return s||(s=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(t,s)}:this.getResource(t,s)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const s=this.getDataByLanguage(t);return!!(s&&Object.keys(s)||[]).find(i=>s[i]&&Object.keys(s[i]).length>0)}toJSON(){return this.data}}var Gi={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,s,n,i){return e.forEach(r=>{this.processors[r]&&(t=this.processors[r].process(t,s,n,i))}),t}};const On={};class ze extends We{constructor(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),cc(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=s,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=st.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const n=this.resolve(t,s);return n&&n.res!==void 0}extractFromKey(t,s){let n=s.nsSeparator!==void 0?s.nsSeparator:this.options.nsSeparator;n===void 0&&(n=":");const i=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator;let r=s.ns||this.options.defaultNS||[];const o=n&&t.indexOf(n)>-1,a=!this.options.userDefinedKeySeparator&&!s.keySeparator&&!this.options.userDefinedNsSeparator&&!s.nsSeparator&&!_c(t,n,i);if(o&&!a){const l=t.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:t,namespaces:v(r)?[r]:r};const c=t.split(n);(n!==i||n===i&&this.options.ns.indexOf(c[0])>-1)&&(r=c.shift()),t=c.join(i)}return{key:t,namespaces:v(r)?[r]:r}}translate(t,s,n){if(typeof s!="object"&&this.options.overloadTranslationOptionHandler&&(s=this.options.overloadTranslationOptionHandler(arguments)),typeof s=="object"&&(s={...s}),s||(s={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const i=s.returnDetails!==void 0?s.returnDetails:this.options.returnDetails,r=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,{key:o,namespaces:a}=this.extractFromKey(t[t.length-1],s),l=a[a.length-1],c=s.lng||this.language,u=s.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&c.toLowerCase()==="cimode"){if(u){const w=s.nsSeparator||this.options.nsSeparator;return i?{res:`${l}${w}${o}`,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(s)}:`${l}${w}${o}`}return i?{res:o,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(s)}:o}const d=this.resolve(t,s);let h=d&&d.res;const f=d&&d.usedKey||o,p=d&&d.exactUsedKey||o,m=Object.prototype.toString.apply(h),g=["[object Number]","[object Function]","[object RegExp]"],y=s.joinArrays!==void 0?s.joinArrays:this.options.joinArrays,_=!this.i18nFormat||this.i18nFormat.handleAsObject,b=!v(h)&&typeof h!="boolean"&&typeof h!="number";if(_&&h&&b&&g.indexOf(m)<0&&!(v(y)&&Array.isArray(h))){if(!s.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const w=this.options.returnedObjectHandler?this.options.returnedObjectHandler(f,h,{...s,ns:a}):`key '${o} (${this.language})' returned an object instead of string.`;return i?(d.res=w,d.usedParams=this.getUsedParamsDetails(s),d):w}if(r){const w=Array.isArray(h),x=w?[]:{},S=w?p:f;for(const E in h)if(Object.prototype.hasOwnProperty.call(h,E)){const M=`${S}${r}${E}`;x[E]=this.translate(M,{...s,joinArrays:!1,ns:a}),x[E]===M&&(x[E]=h[E])}h=x}}else if(_&&v(y)&&Array.isArray(h))h=h.join(y),h&&(h=this.extendTranslation(h,t,s,n));else{let w=!1,x=!1;const S=s.count!==void 0&&!v(s.count),E=ze.hasDefaultValue(s),M=S?this.pluralResolver.getSuffix(c,s.count,s):"",R=s.ordinal&&S?this.pluralResolver.getSuffix(c,s.count,{ordinal:!1}):"",B=S&&!s.ordinal&&s.count===0&&this.pluralResolver.shouldUseIntlApi(),j=B&&s[`defaultValue${this.options.pluralSeparator}zero`]||s[`defaultValue${M}`]||s[`defaultValue${R}`]||s.defaultValue;!this.isValidLookup(h)&&E&&(w=!0,h=j),this.isValidLookup(h)||(x=!0,h=o);const at=(s.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&x?void 0:h,I=E&&j!==h&&this.options.updateMissing;if(x||w||I){if(this.logger.log(I?"updateKey":"missingKey",c,l,o,I?j:h),r){const $=this.resolve(o,{...s,keySeparator:!1});$&&$.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let V=[];const F=this.languageUtils.getFallbackCodes(this.options.fallbackLng,s.lng||this.language);if(this.options.saveMissingTo==="fallback"&&F&&F[0])for(let $=0;$<F.length;$++)V.push(F[$]);else this.options.saveMissingTo==="all"?V=this.languageUtils.toResolveHierarchy(s.lng||this.language):V.push(s.lng||this.language);const z=($,C,J)=>{const Ct=E&&J!==h?J:at;this.options.missingKeyHandler?this.options.missingKeyHandler($,l,C,Ct,I,s):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing($,l,C,Ct,I,s),this.emit("missingKey",$,l,C,h)};this.options.saveMissing&&(this.options.saveMissingPlurals&&S?V.forEach($=>{const C=this.pluralResolver.getSuffixes($,s);B&&s[`defaultValue${this.options.pluralSeparator}zero`]&&C.indexOf(`${this.options.pluralSeparator}zero`)<0&&C.push(`${this.options.pluralSeparator}zero`),C.forEach(J=>{z([$],o+J,s[`defaultValue${J}`]||j)})}):z(V,o,j))}h=this.extendTranslation(h,t,s,d,n),x&&h===o&&this.options.appendNamespaceToMissingKey&&(h=`${l}:${o}`),(x||w)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?h=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${o}`:o,w?h:void 0):h=this.options.parseMissingKeyHandler(h))}return i?(d.res=h,d.usedParams=this.getUsedParamsDetails(s),d):h}extendTranslation(t,s,n,i,r){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});const c=v(t)&&(n&&n.interpolation&&n.interpolation.skipOnVariables!==void 0?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let u;if(c){const h=t.match(this.interpolator.nestingRegexp);u=h&&h.length}let d=n.replace&&!v(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(d={...this.options.interpolation.defaultVariables,...d}),t=this.interpolator.interpolate(t,d,n.lng||this.language||i.usedLng,n),c){const h=t.match(this.interpolator.nestingRegexp),f=h&&h.length;u<f&&(n.nest=!1)}!n.lng&&this.options.compatibilityAPI!=="v1"&&i&&i.res&&(n.lng=this.language||i.usedLng),n.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var h=arguments.length,f=new Array(h),p=0;p<h;p++)f[p]=arguments[p];return r&&r[0]===f[0]&&!n.context?(o.logger.warn(`It seems you are nesting recursively key: ${f[0]} in key: ${s[0]}`),null):o.translate(...f,s)},n)),n.interpolation&&this.interpolator.reset()}const a=n.postProcess||this.options.postProcess,l=v(a)?[a]:a;return t!=null&&l&&l.length&&n.applyPostProcessor!==!1&&(t=Gi.handle(l,t,s,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...i,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),t}resolve(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n,i,r,o,a;return v(t)&&(t=[t]),t.forEach(l=>{if(this.isValidLookup(n))return;const c=this.extractFromKey(l,s),u=c.key;i=u;let d=c.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const h=s.count!==void 0&&!v(s.count),f=h&&!s.ordinal&&s.count===0&&this.pluralResolver.shouldUseIntlApi(),p=s.context!==void 0&&(v(s.context)||typeof s.context=="number")&&s.context!=="",m=s.lngs?s.lngs:this.languageUtils.toResolveHierarchy(s.lng||this.language,s.fallbackLng);d.forEach(g=>{this.isValidLookup(n)||(a=g,!On[`${m[0]}-${g}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&(On[`${m[0]}-${g}`]=!0,this.logger.warn(`key "${i}" for languages "${m.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),m.forEach(y=>{if(this.isValidLookup(n))return;o=y;const _=[u];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(_,u,y,g,s);else{let w;h&&(w=this.pluralResolver.getSuffix(y,s.count,s));const x=`${this.options.pluralSeparator}zero`,S=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(h&&(_.push(u+w),s.ordinal&&w.indexOf(S)===0&&_.push(u+w.replace(S,this.options.pluralSeparator)),f&&_.push(u+x)),p){const E=`${u}${this.options.contextSeparator}${s.context}`;_.push(E),h&&(_.push(E+w),s.ordinal&&w.indexOf(S)===0&&_.push(E+w.replace(S,this.options.pluralSeparator)),f&&_.push(E+x))}}let b;for(;b=_.pop();)this.isValidLookup(n)||(r=b,n=this.getResource(y,g,b,s))}))})}),{res:n,usedKey:i,exactUsedKey:r,usedLng:o,usedNS:a}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,s,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(t,s,n,i):this.resourceStore.getResource(t,s,n,i)}getUsedParamsDetails(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const s=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],n=t.replace&&!v(t.replace);let i=n?t.replace:t;if(n&&typeof t.count<"u"&&(i.count=t.count),this.options.interpolation.defaultVariables&&(i={...this.options.interpolation.defaultVariables,...i}),!n){i={...i};for(const r of s)delete i[r]}return i}static hasDefaultValue(t){const s="defaultValue";for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&s===n.substring(0,s.length)&&t[n]!==void 0)return!0;return!1}}const os=e=>e.charAt(0).toUpperCase()+e.slice(1);class Tn{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=st.create("languageUtils")}getScriptPartFromCode(t){if(t=ke(t),!t||t.indexOf("-")<0)return null;const s=t.split("-");return s.length===2||(s.pop(),s[s.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(s.join("-"))}getLanguagePartFromCode(t){if(t=ke(t),!t||t.indexOf("-")<0)return t;const s=t.split("-");return this.formatLanguageCode(s[0])}formatLanguageCode(t){if(v(t)&&t.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let i=Intl.getCanonicalLocales(t)[0];if(i&&this.options.lowerCaseLng&&(i=i.toLowerCase()),i)return i}catch{}const s=["hans","hant","latn","cyrl","cans","mong","arab"];let n=t.split("-");return this.options.lowerCaseLng?n=n.map(i=>i.toLowerCase()):n.length===2?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),s.indexOf(n[1].toLowerCase())>-1&&(n[1]=os(n[1].toLowerCase()))):n.length===3&&(n[0]=n[0].toLowerCase(),n[1].length===2&&(n[1]=n[1].toUpperCase()),n[0]!=="sgn"&&n[2].length===2&&(n[2]=n[2].toUpperCase()),s.indexOf(n[1].toLowerCase())>-1&&(n[1]=os(n[1].toLowerCase())),s.indexOf(n[2].toLowerCase())>-1&&(n[2]=os(n[2].toLowerCase()))),n.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let s;return t.forEach(n=>{if(s)return;const i=this.formatLanguageCode(n);(!this.options.supportedLngs||this.isSupportedCode(i))&&(s=i)}),!s&&this.options.supportedLngs&&t.forEach(n=>{if(s)return;const i=this.getLanguagePartFromCode(n);if(this.isSupportedCode(i))return s=i;s=this.options.supportedLngs.find(r=>{if(r===i)return r;if(!(r.indexOf("-")<0&&i.indexOf("-")<0)&&(r.indexOf("-")>0&&i.indexOf("-")<0&&r.substring(0,r.indexOf("-"))===i||r.indexOf(i)===0&&i.length>1))return r})}),s||(s=this.getFallbackCodes(this.options.fallbackLng)[0]),s}getFallbackCodes(t,s){if(!t)return[];if(typeof t=="function"&&(t=t(s)),v(t)&&(t=[t]),Array.isArray(t))return t;if(!s)return t.default||[];let n=t[s];return n||(n=t[this.getScriptPartFromCode(s)]),n||(n=t[this.formatLanguageCode(s)]),n||(n=t[this.getLanguagePartFromCode(s)]),n||(n=t.default),n||[]}toResolveHierarchy(t,s){const n=this.getFallbackCodes(s||this.options.fallbackLng||[],t),i=[],r=o=>{o&&(this.isSupportedCode(o)?i.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return v(t)&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&r(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&r(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&r(this.getLanguagePartFromCode(t))):v(t)&&r(this.formatLanguageCode(t)),n.forEach(o=>{i.indexOf(o)<0&&r(this.formatLanguageCode(o))}),i}}let wc=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],vc={1:e=>+(e>1),2:e=>+(e!=1),3:e=>0,4:e=>e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2,5:e=>e==0?0:e==1?1:e==2?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5,6:e=>e==1?0:e>=2&&e<=4?1:2,7:e=>e==1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2,8:e=>e==1?0:e==2?1:e!=8&&e!=11?2:3,9:e=>+(e>=2),10:e=>e==1?0:e==2?1:e<7?2:e<11?3:4,11:e=>e==1||e==11?0:e==2||e==12?1:e>2&&e<20?2:3,12:e=>+(e%10!=1||e%100==11),13:e=>+(e!==0),14:e=>e==1?0:e==2?1:e==3?2:3,15:e=>e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2,16:e=>e%10==1&&e%100!=11?0:e!==0?1:2,17:e=>e==1||e%10==1&&e%100!=11?0:1,18:e=>e==0?0:e==1?1:2,19:e=>e==1?0:e==0||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3,20:e=>e==1?0:e==0||e%100>0&&e%100<20?1:2,21:e=>e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0,22:e=>e==1?0:e==2?1:(e<0||e>10)&&e%10==0?2:3};const xc=["v1","v2","v3"],Sc=["v4"],An={zero:0,one:1,two:2,few:3,many:4,other:5},Cc=()=>{const e={};return wc.forEach(t=>{t.lngs.forEach(s=>{e[s]={numbers:t.nr,plurals:vc[t.fc]}})}),e};class Ec{constructor(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=s,this.logger=st.create("pluralResolver"),(!this.options.compatibilityJSON||Sc.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=Cc(),this.pluralRulesCache={}}addRule(t,s){this.rules[t]=s}clearCache(){this.pluralRulesCache={}}getRule(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const n=ke(t==="dev"?"en":t),i=s.ordinal?"ordinal":"cardinal",r=JSON.stringify({cleanedCode:n,type:i});if(r in this.pluralRulesCache)return this.pluralRulesCache[r];let o;try{o=new Intl.PluralRules(n,{type:i})}catch{if(!t.match(/-|_/))return;const l=this.languageUtils.getLanguagePartFromCode(t);o=this.getRule(l,s)}return this.pluralRulesCache[r]=o,o}return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]}needsPlural(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=this.getRule(t,s);return this.shouldUseIntlApi()?n&&n.resolvedOptions().pluralCategories.length>1:n&&n.numbers.length>1}getPluralFormsOfKey(t,s){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,n).map(i=>`${s}${i}`)}getSuffixes(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=this.getRule(t,s);return n?this.shouldUseIntlApi()?n.resolvedOptions().pluralCategories.sort((i,r)=>An[i]-An[r]).map(i=>`${this.options.prepend}${s.ordinal?`ordinal${this.options.prepend}`:""}${i}`):n.numbers.map(i=>this.getSuffix(t,i,s)):[]}getSuffix(t,s){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const i=this.getRule(t,n);return i?this.shouldUseIntlApi()?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${i.select(s)}`:this.getSuffixRetroCompatible(i,s):(this.logger.warn(`no plural rule found for: ${t}`),"")}getSuffixRetroCompatible(t,s){const n=t.noAbs?t.plurals(s):t.plurals(Math.abs(s));let i=t.numbers[n];this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1&&(i===2?i="plural":i===1&&(i=""));const r=()=>this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString();return this.options.compatibilityJSON==="v1"?i===1?"":typeof i=="number"?`_plural_${i.toString()}`:r():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1?r():this.options.prepend&&n.toString()?this.options.prepend+n.toString():n.toString()}shouldUseIntlApi(){return!xc.includes(this.options.compatibilityJSON)}}const $n=function(e,t,s){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,r=hc(e,t,s);return!r&&i&&v(s)&&(r=ws(e,s,n),r===void 0&&(r=ws(t,s,n))),r},as=e=>e.replace(/\$/g,"$$$$");class Pc{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=st.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||(s=>s),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const{escape:s,escapeValue:n,useRawValueToEscape:i,prefix:r,prefixEscaped:o,suffix:a,suffixEscaped:l,formatSeparator:c,unescapeSuffix:u,unescapePrefix:d,nestingPrefix:h,nestingPrefixEscaped:f,nestingSuffix:p,nestingSuffixEscaped:m,nestingOptionsSeparator:g,maxReplaces:y,alwaysFormat:_}=t.interpolation;this.escape=s!==void 0?s:pc,this.escapeValue=n!==void 0?n:!0,this.useRawValueToEscape=i!==void 0?i:!1,this.prefix=r?Et(r):o||"{{",this.suffix=a?Et(a):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=u?"":d||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=h?Et(h):f||Et("$t("),this.nestingSuffix=p?Et(p):m||Et(")"),this.nestingOptionsSeparator=g||",",this.maxReplaces=y||1e3,this.alwaysFormat=_!==void 0?_:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=(s,n)=>s&&s.source===n?(s.lastIndex=0,s):new RegExp(n,"g");this.regexp=t(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=t(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=t(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(t,s,n,i){let r,o,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=f=>{if(f.indexOf(this.formatSeparator)<0){const y=$n(s,l,f,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(y,void 0,n,{...i,...s,interpolationkey:f}):y}const p=f.split(this.formatSeparator),m=p.shift().trim(),g=p.join(this.formatSeparator).trim();return this.format($n(s,l,m,this.options.keySeparator,this.options.ignoreJSONStructure),g,n,{...i,...s,interpolationkey:m})};this.resetRegExp();const u=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,d=i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:f=>as(f)},{regex:this.regexp,safeValue:f=>this.escapeValue?as(this.escape(f)):as(f)}].forEach(f=>{for(a=0;r=f.regex.exec(t);){const p=r[1].trim();if(o=c(p),o===void 0)if(typeof u=="function"){const g=u(t,r,i);o=v(g)?g:""}else if(i&&Object.prototype.hasOwnProperty.call(i,p))o="";else if(d){o=r[0];continue}else this.logger.warn(`missed to pass in variable ${p} for interpolating ${t}`),o="";else!v(o)&&!this.useRawValueToEscape&&(o=xn(o));const m=f.safeValue(o);if(t=t.replace(r[0],m),d?(f.regex.lastIndex+=o.length,f.regex.lastIndex-=r[0].length):f.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),t}nest(t,s){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i,r,o;const a=(l,c)=>{const u=this.nestingOptionsSeparator;if(l.indexOf(u)<0)return l;const d=l.split(new RegExp(`${u}[ ]*{`));let h=`{${d[1]}`;l=d[0],h=this.interpolate(h,o);const f=h.match(/'/g),p=h.match(/"/g);(f&&f.length%2===0&&!p||p.length%2!==0)&&(h=h.replace(/'/g,'"'));try{o=JSON.parse(h),c&&(o={...c,...o})}catch(m){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,m),`${l}${u}${h}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,l};for(;i=this.nestingRegexp.exec(t);){let l=[];o={...n},o=o.replace&&!v(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let c=!1;if(i[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(i[1])){const u=i[1].split(this.formatSeparator).map(d=>d.trim());i[1]=u.shift(),l=u,c=!0}if(r=s(a.call(this,i[1].trim(),o),o),r&&i[0]===t&&!v(r))return r;v(r)||(r=xn(r)),r||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`),r=""),c&&(r=l.reduce((u,d)=>this.format(u,d,n.lng,{...n,interpolationkey:i[1].trim()}),r.trim())),t=t.replace(i[0],r),this.regexp.lastIndex=0}return t}}const Oc=e=>{let t=e.toLowerCase().trim();const s={};if(e.indexOf("(")>-1){const n=e.split("(");t=n[0].toLowerCase().trim();const i=n[1].substring(0,n[1].length-1);t==="currency"&&i.indexOf(":")<0?s.currency||(s.currency=i.trim()):t==="relativetime"&&i.indexOf(":")<0?s.range||(s.range=i.trim()):i.split(";").forEach(o=>{if(o){const[a,...l]=o.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),u=a.trim();s[u]||(s[u]=c),c==="false"&&(s[u]=!1),c==="true"&&(s[u]=!0),isNaN(c)||(s[u]=parseInt(c,10))}})}return{formatName:t,formatOptions:s}},Pt=e=>{const t={};return(s,n,i)=>{let r=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(r={...r,[i.interpolationkey]:void 0});const o=n+JSON.stringify(r);let a=t[o];return a||(a=e(ke(n),i),t[o]=a),a(s)}};class Tc{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=st.create("formatter"),this.options=t,this.formats={number:Pt((s,n)=>{const i=new Intl.NumberFormat(s,{...n});return r=>i.format(r)}),currency:Pt((s,n)=>{const i=new Intl.NumberFormat(s,{...n,style:"currency"});return r=>i.format(r)}),datetime:Pt((s,n)=>{const i=new Intl.DateTimeFormat(s,{...n});return r=>i.format(r)}),relativetime:Pt((s,n)=>{const i=new Intl.RelativeTimeFormat(s,{...n});return r=>i.format(r,n.range||"day")}),list:Pt((s,n)=>{const i=new Intl.ListFormat(s,{...n});return r=>i.format(r)})},this.init(t)}init(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=s.interpolation.formatSeparator||","}add(t,s){this.formats[t.toLowerCase().trim()]=s}addCached(t,s){this.formats[t.toLowerCase().trim()]=Pt(s)}format(t,s,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=s.split(this.formatSeparator);if(r.length>1&&r[0].indexOf("(")>1&&r[0].indexOf(")")<0&&r.find(a=>a.indexOf(")")>-1)){const a=r.findIndex(l=>l.indexOf(")")>-1);r[0]=[r[0],...r.splice(1,a)].join(this.formatSeparator)}return r.reduce((a,l)=>{const{formatName:c,formatOptions:u}=Oc(l);if(this.formats[c]){let d=a;try{const h=i&&i.formatParams&&i.formatParams[i.interpolationkey]||{},f=h.locale||h.lng||i.locale||i.lng||n;d=this.formats[c](a,f,{...u,...i,...h})}catch(h){this.logger.warn(h)}return d}else this.logger.warn(`there was no format function for ${c}`);return a},t)}}const Ac=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)};class $c extends We{constructor(t,s,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=s,this.services=n,this.languageUtils=n.languageUtils,this.options=i,this.logger=st.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=i.maxParallelReads||10,this.readingCalls=0,this.maxRetries=i.maxRetries>=0?i.maxRetries:5,this.retryTimeout=i.retryTimeout>=1?i.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(n,i.backend,i)}queueLoad(t,s,n,i){const r={},o={},a={},l={};return t.forEach(c=>{let u=!0;s.forEach(d=>{const h=`${c}|${d}`;!n.reload&&this.store.hasResourceBundle(c,d)?this.state[h]=2:this.state[h]<0||(this.state[h]===1?o[h]===void 0&&(o[h]=!0):(this.state[h]=1,u=!1,o[h]===void 0&&(o[h]=!0),r[h]===void 0&&(r[h]=!0),l[d]===void 0&&(l[d]=!0)))}),u||(a[c]=!0)}),(Object.keys(r).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:i}),{toLoad:Object.keys(r),pending:Object.keys(o),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(t,s,n){const i=t.split("|"),r=i[0],o=i[1];s&&this.emit("failedLoading",r,o,s),!s&&n&&this.store.addResourceBundle(r,o,n,void 0,void 0,{skipCopy:!0}),this.state[t]=s?-1:2,s&&n&&(this.state[t]=0);const a={};this.queue.forEach(l=>{dc(l.loaded,[r],o),Ac(l,t),s&&l.errors.push(s),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{a[c]||(a[c]={});const u=l.loaded[c];u.length&&u.forEach(d=>{a[c][d]===void 0&&(a[c][d]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(t,s,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!t.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:s,fcName:n,tried:i,wait:r,callback:o});return}this.readingCalls++;const a=(c,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(c&&u&&i<this.maxRetries){setTimeout(()=>{this.read.call(this,t,s,n,i+1,r*2,o)},r);return}o(c,u)},l=this.backend[n].bind(this.backend);if(l.length===2){try{const c=l(t,s);c&&typeof c.then=="function"?c.then(u=>a(null,u)).catch(a):a(null,c)}catch(c){a(c)}return}return l(t,s,a)}prepareLoading(t,s){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();v(t)&&(t=this.languageUtils.toResolveHierarchy(t)),v(s)&&(s=[s]);const r=this.queueLoad(t,s,n,i);if(!r.toLoad.length)return r.pending.length||i(),null;r.toLoad.forEach(o=>{this.loadOne(o)})}load(t,s,n){this.prepareLoading(t,s,{},n)}reload(t,s,n){this.prepareLoading(t,s,{reload:!0},n)}loadOne(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const n=t.split("|"),i=n[0],r=n[1];this.read(i,r,"read",void 0,void 0,(o,a)=>{o&&this.logger.warn(`${s}loading namespace ${r} for language ${i} failed`,o),!o&&a&&this.logger.log(`${s}loaded namespace ${r} for language ${i}`,a),this.loaded(t,o,a)})}saveMissing(t,s,n,i,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(s)){this.logger.warn(`did not save key "${n}" as the namespace "${s}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(n==null||n==="")){if(this.backend&&this.backend.create){const l={...o,isUpdate:r},c=this.backend.create.bind(this.backend);if(c.length<6)try{let u;c.length===5?u=c(t,s,n,i,l):u=c(t,s,n,i),u&&typeof u.then=="function"?u.then(d=>a(null,d)).catch(a):a(null,u)}catch(u){a(u)}else c(t,s,n,i,a,l)}!t||!t[0]||this.store.addResource(t[0],s,n,i)}}}const Ln=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]=="object"&&(t=e[1]),v(e[1])&&(t.defaultValue=e[1]),v(e[2])&&(t.tDescription=e[2]),typeof e[2]=="object"||typeof e[3]=="object"){const s=e[3]||e[2];Object.keys(s).forEach(n=>{t[n]=s[n]})}return t},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),kn=e=>(v(e.ns)&&(e.ns=[e.ns]),v(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),v(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e),ce=()=>{},Lc=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(s=>{typeof e[s]=="function"&&(e[s]=e[s].bind(e))})};class ee extends We{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;if(super(),this.options=kn(t),this.services={},this.logger=st,this.modules={external:[]},Lc(this),s&&!this.isInitialized&&!t.isClone){if(!this.options.initImmediate)return this.init(t,s),this;setTimeout(()=>{this.init(t,s)},0)}}init(){var t=this;let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof s=="function"&&(n=s,s={}),!s.defaultNS&&s.defaultNS!==!1&&s.ns&&(v(s.ns)?s.defaultNS=s.ns:s.ns.indexOf("translation")<0&&(s.defaultNS=s.ns[0]));const i=Ln();this.options={...i,...this.options,...kn(s)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...i.interpolation,...this.options.interpolation}),s.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=s.keySeparator),s.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=s.nsSeparator);const r=u=>u?typeof u=="function"?new u:u:null;if(!this.options.isClone){this.modules.logger?st.init(r(this.modules.logger),this.options):st.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:typeof Intl<"u"&&(u=Tc);const d=new Tn(this.options);this.store=new Pn(this.options.resources,this.options);const h=this.services;h.logger=st,h.resourceStore=this.store,h.languageUtils=d,h.pluralResolver=new Ec(d,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===i.interpolation.format)&&(h.formatter=r(u),h.formatter.init(h,this.options),this.options.interpolation.format=h.formatter.format.bind(h.formatter)),h.interpolator=new Pc(this.options),h.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},h.backendConnector=new $c(r(this.modules.backend),h.resourceStore,h,this.options),h.backendConnector.on("*",function(f){for(var p=arguments.length,m=new Array(p>1?p-1:0),g=1;g<p;g++)m[g-1]=arguments[g];t.emit(f,...m)}),this.modules.languageDetector&&(h.languageDetector=r(this.modules.languageDetector),h.languageDetector.init&&h.languageDetector.init(h,this.options.detection,this.options)),this.modules.i18nFormat&&(h.i18nFormat=r(this.modules.i18nFormat),h.i18nFormat.init&&h.i18nFormat.init(this)),this.translator=new ze(this.services,this.options),this.translator.on("*",function(f){for(var p=arguments.length,m=new Array(p>1?p-1:0),g=1;g<p;g++)m[g-1]=arguments[g];t.emit(f,...m)}),this.modules.external.forEach(f=>{f.init&&f.init(this)})}if(this.format=this.options.interpolation.format,n||(n=ce),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=function(){return t.store[u](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=function(){return t.store[u](...arguments),t}});const l=Bt(),c=()=>{const u=(d,h)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(h),n(d,h)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initImmediate?c():setTimeout(c,0),l}loadResources(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ce;const i=v(t)?t:this.language;if(typeof t=="function"&&(n=t),!this.options.resources||this.options.partialBundledLanguages){if(i&&i.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return n();const r=[],o=a=>{if(!a||a==="cimode")return;this.services.languageUtils.toResolveHierarchy(a).forEach(c=>{c!=="cimode"&&r.indexOf(c)<0&&r.push(c)})};i?o(i):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>o(l)),this.options.preload&&this.options.preload.forEach(a=>o(a)),this.services.backendConnector.load(r,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),n(a)})}else n(null)}reloadResources(t,s,n){const i=Bt();return typeof t=="function"&&(n=t,t=void 0),typeof s=="function"&&(n=s,s=void 0),t||(t=this.languages),s||(s=this.options.ns),n||(n=ce),this.services.backendConnector.reload(t,s,r=>{i.resolve(),n(r)}),i}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&Gi.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let s=0;s<this.languages.length;s++){const n=this.languages[s];if(!(["cimode","dev"].indexOf(n)>-1)&&this.store.hasLanguageSomeTranslations(n)){this.resolvedLanguage=n;break}}}changeLanguage(t,s){var n=this;this.isLanguageChangingTo=t;const i=Bt();this.emit("languageChanging",t);const r=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},o=(l,c)=>{c?(r(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,i.resolve(function(){return n.t(...arguments)}),s&&s(l,function(){return n.t(...arguments)})},a=l=>{!t&&!l&&this.services.languageDetector&&(l=[]);const c=v(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);c&&(this.language||r(c),this.translator.language||this.translator.changeLanguage(c),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(c)),this.loadResources(c,u=>{o(u,c)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(t),i}getFixedT(t,s,n){var i=this;const r=function(o,a){let l;if(typeof a!="object"){for(var c=arguments.length,u=new Array(c>2?c-2:0),d=2;d<c;d++)u[d-2]=arguments[d];l=i.options.overloadTranslationOptionHandler([o,a].concat(u))}else l={...a};l.lng=l.lng||r.lng,l.lngs=l.lngs||r.lngs,l.ns=l.ns||r.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||n||r.keyPrefix);const h=i.options.keySeparator||".";let f;return l.keyPrefix&&Array.isArray(o)?f=o.map(p=>`${l.keyPrefix}${h}${p}`):f=l.keyPrefix?`${l.keyPrefix}${h}${o}`:o,i.t(f,l)};return v(t)?r.lng=t:r.lngs=t,r.ns=s,r.keyPrefix=n,r}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const n=s.lng||this.resolvedLanguage||this.languages[0],i=this.options?this.options.fallbackLng:!1,r=this.languages[this.languages.length-1];if(n.toLowerCase()==="cimode")return!0;const o=(a,l)=>{const c=this.services.backendConnector.state[`${a}|${l}`];return c===-1||c===0||c===2};if(s.precheck){const a=s.precheck(this,o);if(a!==void 0)return a}return!!(this.hasResourceBundle(n,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(n,t)&&(!i||o(r,t)))}loadNamespaces(t,s){const n=Bt();return this.options.ns?(v(t)&&(t=[t]),t.forEach(i=>{this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}),this.loadResources(i=>{n.resolve(),s&&s(i)}),n):(s&&s(),Promise.resolve())}loadLanguages(t,s){const n=Bt();v(t)&&(t=[t]);const i=this.options.preload||[],r=t.filter(o=>i.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return r.length?(this.options.preload=i.concat(r),this.loadResources(o=>{n.resolve(),s&&s(o)}),n):(s&&s(),Promise.resolve())}dir(t){if(t||(t=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!t)return"rtl";const s=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],n=this.services&&this.services.languageUtils||new Tn(Ln());return s.indexOf(n.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;return new ee(t,s)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ce;const n=t.forkResourceStore;n&&delete t.forkResourceStore;const i={...this.options,...t,isClone:!0},r=new ee(i);return(t.debug!==void 0||t.prefix!==void 0)&&(r.logger=r.logger.clone(t)),["store","services","language"].forEach(a=>{r[a]=this[a]}),r.services={...this.services},r.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},n&&(r.store=new Pn(this.store.data,i),r.services.resourceStore=r.store),r.translator=new ze(r.services,i),r.translator.on("*",function(a){for(var l=arguments.length,c=new Array(l>1?l-1:0),u=1;u<l;u++)c[u-1]=arguments[u];r.emit(a,...c)}),r.init(i,s),r.translator.options=i,r.translator.backendConnector.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},r}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const A=ee.createInstance();A.createInstance=ee.createInstance;A.createInstance;A.dir;A.init;A.loadResources;A.reloadResources;A.use;A.changeLanguage;A.getFixedT;const kc=A.t;A.exists;A.setDefaultNamespace;A.hasLoadedNamespace;A.loadNamespaces;A.loadLanguages;class vs{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,s){this._asyncModule=t,this._callback=s,this._timer=this._asyncModule.run(()=>{this._timer=null,xs.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),xs.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(t,s,n){return t instanceof vs?t._cancelAsync():t=new vs,t.setConfig(s,n),t}}let xs=new Set;const Ld=function(e){xs.add(e)};const kd=dt(class extends vt{constructor(e){if(super(e),e.type!==X.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}const s=e.element.classList;for(const n of this.st)n in t||(s.remove(n),this.st.delete(n));for(const n in t){const i=!!t[n];i===this.st.has(n)||this.nt?.has(n)||(i?(s.add(n),this.st.add(n)):(s.remove(n),this.st.delete(n)))}return H}});class Rc{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class zc{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}const Rn=e=>!_r(e)&&typeof e.then=="function",zn=1073741823;let Nc=class extends Os{constructor(){super(...arguments),this._$Cwt=zn,this._$Cbt=[],this._$CK=new Rc(this),this._$CX=new zc}render(...t){return t.find(s=>!Rn(s))??H}update(t,s){const n=this._$Cbt;let i=n.length;this._$Cbt=s;const r=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<s.length&&!(a>this._$Cwt);a++){const l=s[a];if(!Rn(l))return this._$Cwt=a,l;a<i&&l===n[a]||(this._$Cwt=zn,i=0,Promise.resolve(l).then(async c=>{for(;o.get();)await o.get();const u=r.deref();if(u!==void 0){const d=u._$Cbt.indexOf(l);d>-1&&d<u._$Cwt&&(u._$Cwt=d,u.setValue(c))}}))}return H}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const Ss=dt(Nc);const Nn=(e,t,s)=>{const n=new Map;for(let i=t;i<=s;i++)n.set(e[i],i);return n},Mc=dt(class extends vt{constructor(e){if(super(e),e.type!==X.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,s){let n;s===void 0?s=t:t!==void 0&&(n=t);const i=[],r=[];let o=0;for(const a of e)i[o]=n?n(a,o):o,r[o]=s(a,o),o++;return{values:r,keys:i}}render(e,t,s){return this.dt(e,t,s).values}update(e,[t,s,n]){const i=br(e),{values:r,keys:o}=this.dt(t,s,n);if(!Array.isArray(i))return this.ut=o,r;const a=this.ut??=[],l=[];let c,u,d=0,h=i.length-1,f=0,p=r.length-1;for(;d<=h&&f<=p;)if(i[d]===null)d++;else if(i[h]===null)h--;else if(a[d]===o[f])l[f]=mt(i[d],r[f]),d++,f++;else if(a[h]===o[p])l[p]=mt(i[h],r[p]),h--,p--;else if(a[d]===o[p])l[p]=mt(i[d],r[p]),Mt(e,l[p+1],i[d]),d++,p--;else if(a[h]===o[f])l[f]=mt(i[h],r[f]),Mt(e,i[d],i[h]),h--,f++;else if(c===void 0&&(c=Nn(o,f,p),u=Nn(a,d,h)),c.has(a[d]))if(c.has(a[h])){const m=u.get(o[f]),g=m!==void 0?i[m]:null;if(g===null){const y=Mt(e,i[d]);mt(y,r[f]),l[f]=y}else l[f]=mt(g,r[f]),Mt(e,i[d],g),i[m]=null;f++}else Qe(i[h]),h--;else Qe(i[d]),d++;for(;f<=p;){const m=Mt(e,l[p+1]);mt(m,r[f]),l[f++]=m}for(;d<=h;){const m=i[d++];m!==null&&Qe(m)}return this.ut=o,ei(e,l),H}});class Ke extends Event{constructor(t){super(Ke.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}Ke.eventName="rangeChanged";class Ye extends Event{constructor(t){super(Ye.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}Ye.eventName="visibilityChanged";class qe extends Event{constructor(){super(qe.eventName,{bubbles:!1})}}qe.eventName="unpinned";class Ic{constructor(t){this._element=null;const s=t??window;this._node=s,t&&(this._element=t)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class Fc extends Ic{constructor(t,s){super(s),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const n=this._node;this._originalScrollTo=n.scrollTo,this._originalScrollBy=n.scrollBy,this._originalScroll=n.scroll,this._attach(t)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(t,s){const n=typeof t=="number"&&typeof s=="number"?{left:t,top:s}:t;this._scrollTo(n)}scrollBy(t,s){const n=typeof t=="number"&&typeof s=="number"?{left:t,top:s}:t;n.top!==void 0&&(n.top+=this.scrollTop),n.left!==void 0&&(n.left+=this.scrollLeft),this._scrollTo(n)}_nativeScrollTo(t){this._originalScrollTo.bind(this._element||window)(t)}_scrollTo(t,s=null,n=null){this._end!==null&&this._end(),t.behavior==="smooth"?(this._setDestination(t),this._retarget=s,this._end=n):this._resetScrollState(),this._nativeScrollTo(t)}_setDestination(t){let{top:s,left:n}=t;return s=s===void 0?void 0:Math.max(0,Math.min(s,this.maxScrollTop)),n=n===void 0?void 0:Math.max(0,Math.min(n,this.maxScrollLeft)),this._destination!==null&&n===this._destination.left&&s===this._destination.top?!1:(this.__destination={top:s,left:n,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(t){this._destination&&this._setDestination(t)&&this._nativeScrollTo(this._destination)}managedScrollTo(t,s,n){return this._scrollTo(t,s,n),this._updateManagedScrollTo}correctScrollError(t){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(t),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:t,scrollLeft:s}=this;let{top:n,left:i}=this._destination;n=Math.min(n||0,this.maxScrollTop),i=Math.min(i||0,this.maxScrollLeft);const r=Math.abs(n-t),o=Math.abs(i-s);r<1&&o<1&&(this._end&&this._end(),this._resetScrollState())}}detach(t){return this._clients.delete(t),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(t){this._clients.add(t),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let Mn=typeof window<"u"?window.ResizeObserver:void 0;const Cs=Symbol("virtualizerRef"),ue="virtualizer-sizer";let In;class Dc{constructor(t){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!t)throw new Error("Virtualizer constructor requires a configuration object");if(t.hostElement)this._init(t);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(t){Array.isArray(t)&&t!==this._items&&(this._itemsChanged=!0,this._items=t,this._schedule(this._updateLayout))}_init(t){this._isScroller=!!t.scroller,this._initHostElement(t);const s=t.layout||{};this._layoutInitialized=this._initLayout(s)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new Mn(()=>this._hostElementSizeChanged()),this._childrenRO=new Mn(this._childrenSizeChanged.bind(this))}_initHostElement(t){const s=this._hostElement=t.hostElement;this._applyVirtualizerStyles(),s[Cs]=this}connected(){this._initObservers();const t=this._isScroller;this._clippingAncestors=Vc(this._hostElement,t),this._scrollerController=new Fc(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(t=>{t.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(t),this._hostElementRO.observe(t)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(t=>this._childrenRO.observe(t)),this._scrollEventListeners.forEach(t=>t.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(t=>t.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const s=this._hostElement.style;s.display=s.display||"block",s.position=s.position||"relative",s.contain=s.contain||"size layout",this._isScroller&&(s.overflow=s.overflow||"auto",s.minHeight=s.minHeight||"150px")}_getSizer(){const t=this._hostElement;if(!this._sizer){let s=t.querySelector(`[${ue}]`);s||(s=document.createElement("div"),s.setAttribute(ue,""),t.appendChild(s)),Object.assign(s.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),s.textContent="&nbsp;",s.setAttribute(ue,""),this._sizer=s}return this._sizer}async updateLayoutConfig(t){await this._layoutInitialized;const s=t.type||In;if(typeof s=="function"&&this._layout instanceof s){const n={...t};return delete n.type,this._layout.config=n,!0}return!1}async _initLayout(t){let s,n;if(typeof t.type=="function"){n=t.type;const i={...t};delete i.type,s=i}else s=t;n===void 0&&(In=n=(await wr(()=>import("./flow-BqIEBwW6.js"),[],import.meta.url)).FlowLayout),this._layout=new n(i=>this._handleLayoutMessage(i),s),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const t=window.performance.now(),s=t-this._benchmarkStart,i=performance.getEntriesByName("uv-virtualizing","measure").filter(r=>r.startTime>=this._benchmarkStart&&r.startTime<t).reduce((r,o)=>r+o.duration,0);return this._benchmarkStart=null,{timeElapsed:s,virtualizationTime:i}}return null}_measureChildren(){const t={},s=this._children,n=this._measureChildOverride||this._measureChild;for(let i=0;i<s.length;i++){const r=s[i],o=this._first+i;(this._itemsChanged||this._toBeMeasured.has(r))&&(t[o]=n.call(this,r,this._items[o]))}this._childMeasurements=t,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(t){const{width:s,height:n}=t.getBoundingClientRect();return Object.assign({width:s,height:n},Bc(t))}async _schedule(t){this._scheduled.has(t)||(this._scheduled.add(t),await Promise.resolve(),this._scheduled.delete(t),t.call(this))}async _updateDOM(t){this._scrollSize=t.scrollSize,this._adjustRange(t.range),this._childrenPos=t.childPositions,this._scrollError=t.scrollError||null;const{_rangeChanged:s,_itemsChanged:n}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(s||n)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(t=>this._childrenRO.observe(t)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(t){console.warn("Error measuring performance data: ",t)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(t){t.type==="scroll"?(t.currentTarget===window||this._clippingAncestors.includes(t.currentTarget))&&this._handleScrollEvent():console.warn("event not handled",t)}_handleLayoutMessage(t){t.type==="stateChanged"?this._updateDOM(t):t.type==="visibilityChanged"?(this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._notifyVisibility()):t.type==="unpinned"&&this._hostElement.dispatchEvent(new qe)}get _children(){const t=[];let s=this._hostElement.firstElementChild;for(;s;)s.hasAttribute(ue)||t.push(s),s=s.nextElementSibling;return t}_updateView(){const t=this._hostElement,s=this._scrollerController?.element,n=this._layout;if(t&&s&&n){let i,r,o,a;const l=t.getBoundingClientRect();i=0,r=0,o=window.innerHeight,a=window.innerWidth;const c=this._clippingAncestors.map(y=>y.getBoundingClientRect());c.unshift(l);for(const y of c)i=Math.max(i,y.top),r=Math.max(r,y.left),o=Math.min(o,y.bottom),a=Math.min(a,y.right);const u=s.getBoundingClientRect(),d={left:l.left-u.left,top:l.top-u.top},h={width:s.scrollWidth,height:s.scrollHeight},f=i-l.top+t.scrollTop,p=r-l.left+t.scrollLeft,m=Math.max(0,o-i),g=Math.max(0,a-r);n.viewportSize={width:g,height:m},n.viewportScroll={top:f,left:p},n.totalScrollSize=h,n.offsetWithinScroller=d}}_sizeHostElement(t){const n=t&&t.width!==null?Math.min(82e5,t.width):0,i=t&&t.height!==null?Math.min(82e5,t.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${n}px, ${i}px)`;else{const r=this._hostElement.style;r.minWidth=n?`${n}px`:"100%",r.minHeight=i?`${i}px`:"100%"}}_positionChildren(t){t&&t.forEach(({top:s,left:n,width:i,height:r,xOffset:o,yOffset:a},l)=>{const c=this._children[l-this._first];c&&(c.style.position="absolute",c.style.boxSizing="border-box",c.style.transform=`translate(${n}px, ${s}px)`,i!==void 0&&(c.style.width=i+"px"),r!==void 0&&(c.style.height=r+"px"),c.style.left=o===void 0?null:o+"px",c.style.top=a===void 0?null:a+"px")})}async _adjustRange(t){const{_first:s,_last:n,_firstVisible:i,_lastVisible:r}=this;this._first=t.first,this._last=t.last,this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==s||this._last!==n,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==i||this._lastVisible!==r}_correctScrollError(){if(this._scrollError){const{scrollTop:t,scrollLeft:s}=this._scrollerController,{top:n,left:i}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:t-n,left:s-i})}}element(t){return t===1/0&&(t=this._items.length-1),this._items?.[t]===void 0?void 0:{scrollIntoView:(s={})=>this._scrollElementIntoView({...s,index:t})}}_scrollElementIntoView(t){if(t.index>=this._first&&t.index<=this._last)this._children[t.index-this._first].scrollIntoView(t);else if(t.index=Math.min(t.index,this._items.length-1),t.behavior==="smooth"){const s=this._layout.getScrollIntoViewCoordinates(t),{behavior:n}=t;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(s,{behavior:n}),()=>this._layout.getScrollIntoViewCoordinates(t),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=t}else this._layout.pin=t}_checkScrollIntoViewTarget(t){const{index:s}=this._scrollIntoViewTarget||{};s&&t?.has(s)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new Ke({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new Ye({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((t,s)=>{this._layoutCompleteResolver=t,this._layoutCompleteRejecter=s})),this._layoutCompletePromise}_rejectLayoutCompletePromise(t){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(t),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(t){if(this._layout?.measureChildren){for(const s of t)this._toBeMeasured.set(s.target,s.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function Bc(e){const t=window.getComputedStyle(e);return{marginTop:de(t.marginTop),marginRight:de(t.marginRight),marginBottom:de(t.marginBottom),marginLeft:de(t.marginLeft)}}function de(e){const t=e?parseFloat(e):NaN;return Number.isNaN(t)?0:t}function Fn(e){if(e.assignedSlot!==null)return e.assignedSlot;if(e.parentElement!==null)return e.parentElement;const t=e.parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host||null}function jc(e,t=!1){const s=[];let n=t?e:Fn(e);for(;n!==null;)s.push(n),n=Fn(n);return s}function Vc(e,t=!1){let s=!1;return jc(e,t).filter(n=>{if(s)return!1;const i=getComputedStyle(n);return s=i.position==="fixed",i.overflow!=="visible"})}const Uc=e=>e,Hc=(e,t)=>O`${t}: ${JSON.stringify(e,null,2)}`;class Wc extends Os{constructor(t){if(super(t),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(s,n)=>Hc(s,n+this._first),this._keyFunction=(s,n)=>Uc(s,n+this._first),this._items=[],t.type!==X.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(t){t&&this._setFunctions(t);const s=[];if(this._first>=0&&this._last>=this._first)for(let n=this._first;n<=this._last;n++)s.push(this._items[n]);return Mc(s,this._keyFunction,this._renderItem)}update(t,[s]){this._setFunctions(s);const n=this._items!==s.items;return this._items=s.items||[],this._virtualizer?this._updateVirtualizerConfig(t,s):this._initialize(t,s),n?H:this.render()}async _updateVirtualizerConfig(t,s){if(!await this._virtualizer.updateLayoutConfig(s.layout||{})){const i=t.parentNode;this._makeVirtualizer(i,s)}this._virtualizer.items=this._items}_setFunctions(t){const{renderItem:s,keyFunction:n}=t;s&&(this._renderItem=(i,r)=>s(i,r+this._first)),n&&(this._keyFunction=(i,r)=>n(i,r+this._first))}_makeVirtualizer(t,s){this._virtualizer&&this._virtualizer.disconnected();const{layout:n,scroller:i,items:r}=s;this._virtualizer=new Dc({hostElement:t,layout:n,scroller:i}),this._virtualizer.items=r,this._virtualizer.connected()}_initialize(t,s){const n=t.parentNode;n&&n.nodeType===1&&(n.addEventListener("rangeChanged",i=>{this._first=i.first,this._last=i.last,this.setValue(this.render())}),this._makeVirtualizer(n,s))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const Kc=dt(Wc),Yc=(e,t)=>{if(!e||!t)return;const s=Object.keys(t);return Object.fromEntries(Object.keys(e).flatMap(n=>s.includes(n)?[]:[[n,void 0]]))};class qc extends vt{_props;render(t){return H}update(t,[s]){return this._props!==s&&Object.assign(t.element,Yc(this._props,s),this._props=s),H}}const Jc=dt(qc),Gc=e=>{const t=ie(),s=k(()=>new CSSStyleSheet,[]);L(()=>{t.shadowRoot.adoptedStyleSheets=[...t.shadowRoot.adoptedStyleSheets,s]},[]),L(()=>{s.replaceSync(e)},[e])};function ye(e){return e?t=>t?.[e]:zt}const Xc=e=>{const t=ye(e);return s=>typeof s=="string"?s:t(s)?.toString()||""},Zc=e=>t=>{const s={};for(const n in t)e.includes(n)&&(s[n]=t[n]);return s},Qc="data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1L5.20039 7.04766L1.66348 3.46152' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",tu=q`
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
		background: url("${Qc}") #5881f6 no-repeat 50%;
	}

	:host([multi]) .sizer {
		padding-left: 33px;
	}

	[virtualizer-sizer]:not(.sizer) {
		line-height: 1;
	}
`,eu=({index:e,itemHeight:t,auto:s})=>q`
	${G(!s,()=>q`
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
`,su=e=>{const t=e==="auto",[s,n]=lt(t?40:e);return[s,i=>t?n(i):void 0]},nu=Symbol("listbox.navigate.up"),iu=Symbol("listbox.navigate.down"),ru=Symbol("listbox.select"),ou=({onUp:e,onDown:t,onEnter:s})=>{const n=ie();Tt({activity:nu,callback:e,element:()=>n},[]),Tt({activity:iu,callback:t,element:()=>n},[]),Tt({activity:ru,callback:s,element:()=>n},[])},au=({items:e,onSelect:t,defaultIndex:s=0})=>{const[n,i]=lt({index:s}),{index:r}=n,{length:o}=e;return L(()=>{i({index:n.index<0?s:Math.min(n.index,e.length-1),scroll:!0})},[e,s]),ou({onUp:P(()=>i(a=>({index:a.index>0?a.index-1:o-1,scroll:!0})),[o]),onDown:P(()=>i(a=>({index:a.index<o-1?a.index+1:0,scroll:!0})),[o]),onEnter:P(()=>r>-1&&r<o&&t?.(e[r],r),[r,e,t])}),{position:n,highlight:P(a=>i({index:a}),[]),select:P(a=>t?.(a),[t])}},lu=e=>typeof e=="object"&&e!==null&&Symbol.iterator in e;function ft(e){return e==null?[]:Array.isArray(e)?e:typeof e=="string"?[e]:lu(e)?Array.from(e):[e]}const ls=(e,t=zt)=>s=>{const n=ft(e).map(t);return ft(s).filter(i=>!n.includes(t(i)))},cu=(e,t)=>t?s=>s!=null&&ft(e).find(n=>n[t]===s[t]):s=>s!=null&&ft(e).includes(s),uu=(e,t)=>{if(!t||!e)return e;const s=e.toLowerCase().indexOf(t.toLowerCase());if(s<0)return e;const n=s+t.length;return[e.slice(0,s),O`<mark>${e.slice(s,n)}</mark>`,e.slice(n)]},du=(e=zt)=>(t,s,{highlight:n,select:i,textual:r=zt,query:o,isSelected:a})=>{const l=r(t),c=uu(l,o),u=e(c,t,s);return O`<div
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
			<div class="sizer" virtualizer-sizer>${u}</div>`},hu=({itemRenderer:e=du(),...t})=>{const s=je(t);return P((n,i)=>e(n,i,s),[s,e])},fu=["query","items","onSelect","textual","anchor","itemHeight","itemLimit","itemRenderer","defaultIndex","value","valueProperty","loading"],pu=({value:e,valueProperty:t,items:s,onSelect:n,defaultIndex:i,query:r,textual:o,itemRenderer:a,itemHeight:l=40,itemLimit:c=5})=>{const u=k(()=>cu(e,t),[e,t]),d=k(()=>s.slice(),[s,u]),{position:h,highlight:f,select:p}=au({items:d,onSelect:n,defaultIndex:isNaN(i)?void 0:Number(i)}),[m,g]=su(l);return{position:h,items:d,height:Math.min(c,d.length)*m,highlight:f,select:p,itemHeight:m,setItemHeight:g,renderItem:hu({itemRenderer:a,items:d,position:h,highlight:f,select:p,textual:o,query:r,isSelected:u})}},Dn=vi,mu=e=>{const t=$t(void 0),{position:s,items:n,renderItem:i,height:r,itemHeight:o,setItemHeight:a}=pu(e);return L(()=>{const l=t.current?.[Cs];l&&l.layoutComplete.then(()=>{e.dispatchEvent(new CustomEvent("layout-complete"));const{averageChildSize:c,averageMarginSize:u}=l._layout._metricsCache;return a(c+u*2)},Dn)},[n]),L(()=>{if(!s.scroll)return;const l=t.current?.[Cs];if(l){if(!l?._layout){l.layoutComplete.then(()=>l.element(s.index)?.scrollIntoView({block:"nearest"}),Dn);return}l.element(s.index)?.scrollIntoView({block:"nearest"})}},[s]),Gc(eu({...s,itemHeight:o,auto:e.itemHeight==="auto"})),O`<div
			class="items"
			style="min-height: ${r}px"
			${Lt(l=>t.current=l)}
		>
			<div virtualizer-sizer></div>
			${Kc({items:n,renderItem:i,scroller:!0})}
		</div>
		<slot></slot>`};customElements.define("cosmoz-listbox",D(mu,{styleSheets:[Ns(tu)]}));const gu=({multi:e,...t},s)=>O`<cosmoz-listbox
		part="listbox"
		?multi=${e}
		...=${Jc(Zc(fu)(t))}
		>${s}</cosmoz-listbox
	>`,yu=He`
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
`,_u=O`
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
`,bu=({onClear:e,disabled:t})=>O`
	<div
		class="content"
		part="content chip-text"
		@mousedown=${s=>s.preventDefault()}
	>
		<slot></slot>
	</div>
	${G(e&&!t,()=>O`<span
				class="clear"
				part="clear chip-clear"
				@mousedown=${s=>s.preventDefault()}
				@click=${e}
			>
				${_u}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",D(bu,{observedAttributes:["disabled"],styleSheets:[Ns(yu)]}));const wu=({content:e,onClear:t,disabled:s,hidden:n,className:i="chip",slot:r})=>O`<cosmoz-autocomplete-chip
		class=${N(i)}
		slot=${N(r)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${s}
		?hidden=${n}
		.onClear=${t}
		title=${N(typeof e=="string"?e:void 0)}
		>${e}</cosmoz-autocomplete-chip
	>`,vu=({value:e,min:t=0,onDeselect:s,textual:n,disabled:i,chipRenderer:r=wu})=>[...e.filter(Boolean).map(o=>r({item:o,content:n(o),onClear:e.length>t&&(()=>s(o)),disabled:i,slot:"control"})),r({item:null,content:O`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],xu=q`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",D(()=>it,{styleSheets:[xu]}));const Xi=He`
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
`,Ms=(e,t=()=>({}))=>{const s={type:e,toString(){return e}};return Object.assign((...i)=>Object.assign(t(...i),s),s)},Bn=e=>e.type||e.toString(),jn=e=>Array.isArray(e)?e:[e],Su=(e,t)=>{const s=jn(t),n=(s.every(Array.isArray)?s:[s]).map(([i,r])=>({actions:jn(i).map(Bn),handle:r}));return(i=e,r)=>{const o=n.find(a=>a.actions.includes(Bn(r)));return o?o.handle(i,r):i}},_t={pending:"pending",rejected:"rejected",resolved:"resolved"},Zi={error:void 0,result:void 0,state:_t.pending},Qi=Ms(_t.pending),tr=Ms(_t.resolved,e=>({result:e})),er=Ms(_t.rejected,e=>({error:e})),Cu=Su(Zi,[[Qi,()=>({error:void 0,result:void 0,state:_t.pending})],[tr,(e,{result:t})=>({error:void 0,result:t,state:_t.resolved})],[er,(e,{error:t})=>({error:t,result:void 0,state:_t.rejected})]]),Eu=e=>{const[{error:t,result:s,state:n},i]=zr(Cu,Zi);return L(()=>{if(!e)return;let r=!1;return i(Qi()),e.then(o=>!r&&i(tr(o)),o=>!r&&i(er(o))),()=>{r=!0}},[e]),[s,t,n]},Pu=Symbol("autocomplete.deselect.last"),Ou=Symbol("autocomplete.search.when.selected"),Vn=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),Tu=(e,t,s)=>{if(!t)return e;const n=Vn(t.toLowerCase()),i=[];for(const r of e){const a=Vn(s(r).toLowerCase()).indexOf(n);a<0||i.push({item:r,index:a})}return i.sort((r,o)=>r.index-o.index).map(({item:r})=>r)},Au=e=>e===!1||e==null?[]:e,$u=(e,t,s)=>e.dispatchEvent(new CustomEvent(t,{detail:s})),Un=[],Lu=e=>(...t)=>{let s;const n=()=>{s&&cancelAnimationFrame(s)};return n(),s=requestAnimationFrame(()=>{s=void 0,e(...t)}),n},ku=(e,t,s)=>P(n=>{t?.(n),e.dispatchEvent(new CustomEvent(s,{detail:n}))},[t]),Ru=({value:e,text:t,onChange:s,onText:n,onSelect:i,limit:r,min:o,source:a,textProperty:l,textual:c,valueProperty:u,keepOpened:d,keepQuery:h,preserveOrder:f,defaultIndex:p,externalSearch:m,disabled:g,lazyOpen:y})=>{const _=r!=null?Number(r):void 0,b=o!=null?Number(o):void 0,w=k(()=>(c??Xc)(l),[c,l]),x=ie(),[S,E]=se("opened",!1),M=!t,R=k(()=>t?.trim(),[t]),B=ku(x,n,"text"),j=P(C=>{s?.(C,()=>E(!1)),$u(x,"value",C)},[s]),[tt,at]=lt([]),I=!!(y&&!R),V=k(()=>I?Promise.resolve([]):Promise.resolve(typeof a=="function"?a({query:R,active:S}):a).then(Au),[a,S,R,I]),F=k(()=>ft(e),[e]);L(()=>V.then(at),[V]),Tt({activity:Pu,callback:()=>{const C=ft(F);C.length>(b??0)&&j(C.slice(0,-1))},check:()=>!g&&M&&x.matches(":focus-within"),element:()=>x},[]),Tt({activity:Ou,callback:C=>{const J=ft(F),Ct=_===1;J.length>0&&Ct&&C.key.length===1&&j(J.slice(0,-1))},allowDefault:!0,check:()=>!g&&M&&x.matches(":focus-within"),element:()=>x},[_]),L(()=>{!S&&!h&&B("")},[S,h]),L(()=>{x.toggleAttribute("opened",!!S)},[S]);const z=je({onText:B,onChange:j,value:F,limit:_,min:b,keepQuery:h,keepOpened:d,setOpened:E,onSelect:i,valueProperty:u}),[,,$]=Eu(V);return{limit:_,opened:S,query:R,textual:w,value:F,source$:V,loading:$==="pending",items:k(()=>{if(!S||I)return Un;const C=f?tt:[...F,...ls(F,ye(u))(tt)];return m?C:Tu(C,R,w)},[tt,S,R,w,M,F,f,u,m,I]),onToggle:P(C=>{g||E(C.newState==="open")},[g]),onText:P(C=>{g||(B(C.target.value),E(!0))},[g,B,t,E]),onSelect:P(C=>{if(g)return;z.onSelect?.(C,z);const{onChange:J,onText:Ct,limit:cr,min:ur,value:dr,keepQuery:hr,keepOpened:fr,setOpened:pr,valueProperty:mr}=z;hr||Ct(""),fr||pr(!1);const re=ft(dr),Ze=ye(mr),Ds=re.some(gr=>Ze(gr)===Ze(C));Ds&&re.length===ur||J((Ds?ls(C,Ze)(re):[...re,C]).slice(-cr))},[g,z]),onDeselect:P(C=>{g||z.onChange(ls(C,ye(z.valueProperty))(z.value))},[g,z]),defaultIndex:R!==void 0&&R?.length>0?0:p}},zu=e=>{const t=e.shadowRoot.querySelectorAll(".chip"),s=e.shadowRoot.querySelector(".badge");s.hidden=!0;for(const a of t)a.hidden=!1;const i=e.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let r;for(r=0;r<t.length;r++){const l=t[r].getBoundingClientRect();if(!(l.x+l.width<=i.x+i.width-24))break}const o=t.length-r;for(s.querySelector("span").textContent="+"+o.toString(),s.hidden=o<1;r<t.length;r++)t[r].hidden=!0},Nu=({value:e,opened:t,wrap:s,limit:n})=>{const i=ie(),r=!(s||n===1),o=k(()=>Lu(()=>zu(i)),[]),[a,l]=lt(0);hs(()=>{if(!r)return;const c=i.shadowRoot.querySelector("cosmoz-input"),u=new ResizeObserver(d=>{l(d[0].contentRect.width)});return u.observe(c),()=>u.disconnect()},[r]),hs(()=>r?o():void 0,[r,a,t,e])},Mu=["input","control","label","line","error","wrap"].map(e=>`${e}: input-${e}`).join(),Iu=({opened:e,isSingle:t,showSingle:s,hasResultsOrQuery:n})=>!e||t&&!s?!1:n,Fu=e=>{const{opened:t,invalid:s,errorMessage:n,label:i,placeholder:r,disabled:o,noLabelFloat:a,alwaysFloatLabel:l,textual:c,text:u,onText:d,onToggle:h,onDeselect:f,value:p,limit:m,min:g,showSingle:y,items:_,source$:b,loading:w,chipRenderer:x}=e,S=m===1,E=S&&p?.[0]!=null,M=w||_.length>0||u!=null&&u.length>0;return O`<cosmoz-dropdown-next
			open-on-focus
			?disabled=${o}
			.opened=${t}
			@dropdown-toggle=${h}
			part="dropdown"
		>
			<cosmoz-input
				slot="button"
				id="input"
				part="input"
				.label=${i}
				.placeholder=${E?void 0:r}
				?no-label-float=${a}
				?always-float-label=${p?.length>0||l}
				?readonly=${E}
				?disabled=${o}
				?invalid=${xe([b,s],()=>Ss(b.then(()=>s,()=>!0),s))}
				.errorMessage=${xe([b,n],()=>Ss(b.then(()=>n,R=>R.message),n))}
				.value=${Ue(u)}
				@value-changed=${d}
				autocomplete="off"
				exportparts=${Mu}
				?data-one=${S}
				?data-single=${E}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${vu({value:p,min:g,onDeselect:f,textual:c,disabled:o,chipRenderer:x})}
			</cosmoz-input>

			${G(Iu({opened:t,isSingle:E,showSingle:y,hasResultsOrQuery:M}),()=>gu({...e,items:_,multi:!S},G(w,()=>O`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>G(u!=null&&u.length>0&&_.length===0,()=>O`<slot name="no-result">
											<p class="no-result">${kc("No results found")}</p>
										</slot>`))))}
		</cosmoz-dropdown-next>`},Is=e=>{const t={...e,...Ru(e)};return Nu(t),Fu(t)},Fs=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap","lazy-open"],Du=e=>{const{onChange:t,onText:s,...n}=e,[i,r]=se("value");return L(()=>{e.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),Is({...n,value:i,onChange:P((o,...a)=>{r(o),t?.(o,...a)},[t]),onText:P(o=>{e.text=o,s?.(o)},[s])})},sr=[Ns(Xi)],nr={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-ui",D(Is,{observedAttributes:Fs,styleSheets:sr,shadowRootInit:nr}));customElements.define("cosmoz-autocomplete",D(Du,{observedAttributes:Fs,styleSheets:sr,shadowRootInit:nr}));const Bu="data:image/svg+xml,%3Csvg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.5 2.5L8.5 8.5M8.5 2.5L2.5 8.5' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E",ju=q`
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
		background: url("${Bu}") var(--cosmoz-autocomplete-excluded-bg-color, rgb(244, 67, 54)) no-repeat 50%;
	}

	cosmoz-listbox::part(excluded):hover {
		background: var(
			--cosmoz-listbox-excluded-active-color,
			rgba(244, 67, 54, 0.1)
		);
	}
`,Hn=e=>({item:e,excluded:!1}),ir=e=>e.item,Vu=e=>{const[t,s]=se(e),n=P(i=>s(r=>{const o=na(i,r?.map(ir));if(!o)return;if(!r)return o.map(Hn);const a=r.reduce((c,u)=>o.includes(u.item)?[...c,u]:u.excluded?c:[...c,{...u,excluded:!0}],[]),l=o.filter(c=>!r.some(u=>u.item===c)).map(Hn);return[...a,...l]}),[]);return{value:t,setExcludingValue:n,setValue:s}},Uu=(e,t)=>e?.some(s=>s.item===t&&s.excluded),rr=(e,t)=>t&&Uu(e,t)?"excluded":it,Hu=e=>(t,s,{highlight:n,select:i,textual:r,isSelected:o})=>{const a=r(t);return O`<div
				class="item"
				role="option"
				part="option ${rr(e,t)}"
				?aria-selected=${o(t)}
				data-index=${s}
				@mouseenter=${()=>n(s)}
				@click=${()=>i(t)}
				@mousedown=${l=>l.preventDefault()}
			>
				${a}
			</div>
			<div class="sizer" virtualizer-sizer>${a}</div>`},Wu=(e,t)=>({item:s,content:n,disabled:i,hidden:r,className:o="chip",slot:a})=>O`<cosmoz-autocomplete-chip
			class=${N(o)}
			slot=${N(a)}
			part="chip"
			exportparts="chip-text, chip-clear"
			data-state=${rr(e,s)}
			?disabled=${i}
			?hidden=${r}
			.onClear=${()=>t(s)}
			title=${N(typeof n=="string"?n:void 0)}
		>
			${n}
		</cosmoz-autocomplete-chip>`,Ku=e=>{const{value:t,setValue:s,setExcludingValue:n}=Vu("value"),[i,r]=se("text"),o=P(a=>s(l=>l?.filter(c=>c.item!==a)),[]);return Is({...e,value:k(()=>t?.map(ir),[t]),onChange:P(a=>{n(a)},[]),text:i,onText:P(a=>{r(a)},[]),itemRenderer:k(()=>Hu(t),[t]),chipRenderer:k(()=>Wu(t,o),[t,o])})},Yu={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-excluding",D(Ku,{observedAttributes:Fs,styleSheets:[Xi,ju],shadowRootInit:Yu}));const qu=q`
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
`,Ju=()=>it,Gu=D(Ju,{styleSheets:[qu]});customElements.define("cosmoz-spinner",Gu);const or=["T"," "],Wn=e=>{if(!e||typeof e!="string")return;let t;return or.some(s=>e.match(s)?(t=e.split(s),!0):!1),t||[e]},Xu=(e,t)=>{const s=Wn(e),n=Wn(t);return{minDate:Array.isArray(s)?s.shift():null,minTime:Array.isArray(s)?s.shift():null,maxDate:Array.isArray(n)?n.shift():null,maxTime:Array.isArray(n)?n.shift():null}},Kn=(e,t)=>{if(!(!e&&!t))return!e&&t?`T${t}`:e&&!t?e:`${e}T${t}`},Zu=e=>{if(e){for(const t of or)if(e.match(t)){const s=e.split(t);return{date:s.shift(),time:s.shift()}}return{date:e}}},Qu=e=>{const{dateLabel:t,timeLabel:s,min:n,max:i,step:r="1",value:o}=e,{minDate:a,maxDate:l,minTime:c,maxTime:u}=k(()=>Xu(n,i),[n,i]),{date:d,time:h}=k(()=>Zu(o)??{},[o]);return L(()=>{e.dispatchEvent(new CustomEvent("cosmoz-datetime-input-value-changed",{bubbles:!0,composed:!0}))},[o]),O`
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
			@value-changed="${f=>te(e,"value",Kn(f.target.value,h))}"
			.min="${a}"
			.max="${l}"
		></cosmoz-input>
		<cosmoz-input
			label="${s}"
			type="time"
			.value="${h}"
			@value-changed="${f=>te(e,"value",Kn(d,f.target.value))}"
			step="${r}"
			.min="${c}"
			.max="${u}"
		></cosmoz-input>
	`};customElements.define("cosmoz-datetime-input",D(Qu,{observedAttributes:["date-label","time-label","min","max","step"]}));const _e=[],Je=()=>{A.isInitialized||A.init({lng:"en",resStore:{en:{}},fallbackLng:!1})},Ge=e=>e.reduce((t,s,n)=>(t.count===void 0&&typeof s=="number"&&(t.count=s),typeof s=="object"?{...t,...s}:(t[n]=s,t)),{}),Yn=function(e){Je();const t=Ge([...arguments].slice(1));return delete t.count,A.t(e,t)},td=function(e,t){Je();const s=Ge([...arguments].slice(2)),n=s.count;let i;delete s.count;const r=A.services.pluralResolver.getSuffix(A.language,n);return r?(s.defaultValue=t,i=e+r):(i=e,s.defaultValue=e),A.t(i,s)},ed=function(e,t){Je();const s=Ge([...arguments].slice(2));return s.context=e,delete s.count,A.t(t,s)},sd=function(e,t,s){Je();const n=Ge([...arguments].slice(3)),i=n.count,r=e?"_"+e:"";let o=t;delete n.count;const a=A.services.pluralResolver.getSuffix(A.language,i);return a?(n.defaultValue=s,o=t+r+a):(o=t,n.context=e),A.t(o,n)},nd=(e,t,s)=>{A.init({resources:{}}),A.addResourceBundle(e,t,s)},zd=xt(e=>class extends e{static get properties(){return{t:{type:Object,value(){return{}}}}}_filterT(t){return t.filter(s=>s!==this.t)}_(){return Yn.apply(null,this._filterT([...arguments]))}connectedCallback(){super.connectedCallback(),_e.push(this)}disconnectedCallback(){super.disconnectedCallback();const t=_e.indexOf(this);t>=0&&_e.splice(t,1)}gettext(){return Yn.apply(null,this._filterT([...arguments]))}ngettext(){return td.apply(null,this._filterT([...arguments]))}pgettext(){return ed.apply(null,this._filterT([...arguments]))}npgettext(){return sd.apply(null,this._filterT([...arguments]))}});class id extends Ll{static get properties(){return{compatibilityJSON:{type:String,value:"v3"},domain:{type:String,value:"messages"},interpolationPrefix:{type:String,value:"__"},interpolationSuffix:{type:String,value:"__"},language:{type:String,value:"en"},namespace:{type:String,value:"translation"},translations:{type:Object,observer(t){t!=null&&(nd(this.language,this.namespace,t),_e.forEach(s=>s.set("t",{})))}},keySeparator:{type:String,value:"."},nsSeparator:{type:String,value:":"}}}ready(){super.ready(),A.init({compatibilityJSON:this.compatibilityJSON,interpolation:{escapeValue:!1,prefix:this.interpolationPrefix,suffix:this.interpolationSuffix},keySeparator:this.keySeparator,lng:this.language,nsSeparator:this.nsSeparator,resStore:{}})}}customElements.define("cosmoz-i18next",id);const rd=e=>t=>{const s=t.match(e);return s&&{result:s,url:new URL(t,document.location.origin)}},od=(e,t)=>{for(const s of e){const n=s.rule,i=typeof n=="function"?n(t):rd(n)(t);if(i)return{...s,route:s,match:i,url:t}}},qn=()=>window.location.href.replace(window.location.origin,""),ad=()=>{const[e,t]=lt(qn);return L(()=>{const s=()=>t(qn);return window.addEventListener("popstate",s),()=>window.removeEventListener("popstate",s)},[t]),e},ld=e=>{const t=ad();return k(()=>od(e,t),[e,t])},Nd=(e,t=null,{notify:s=!0,replace:n=!0}={})=>{(n?history.replaceState:history.pushState).call(history,t,"",e),s&&queueMicrotask(()=>window.dispatchEvent(new CustomEvent("popstate",{bubbles:!1})))},cd=e=>{const t=ld(e);return{route:t,result:k(()=>{if(t){const{handle:s,...n}=t;return s(n)}},[t])}},he=(e,t,s)=>e.dispatchEvent(new CustomEvent(t,{bubbles:!1,cancelable:!1,composed:!0,...s})),ud=(e,t,s)=>{L(()=>{if(!s){he(e,"route-not-found");return}he(e,"route-loading",{detail:t}),Promise.resolve(s).then(()=>he(e,"route-loaded",{detail:t})).catch(n=>he(e,"route-error",{detail:{route:t,error:n}}))},[s])},dd=e=>{const t=e.routes,{route:s,result:n}=cd(t);return ud(e,s,n),xe([n],()=>Ss(Promise.resolve(n).catch(()=>it),it))};customElements.define("cosmoz-router",D(dd));const ar=()=>new URL(location.hash.replace(/^#!?/iu,"").replace("%23","#"),location.origin),Md=(e,t=zt)=>{const s=new URLSearchParams(ar().hash.replace("#","")).getAll(e);switch(s.length){case 0:return;case 1:return t(s[0]);default:return s.map(t)}},Id=(e,t=zt)=>{const s=Array.from(new URLSearchParams(ar().hash.replace("#","")).entries()).filter(([n])=>n.startsWith(e)).map(([n,i])=>t([n.replace(e,""),i])).filter(([,n])=>n!=null);return Object.fromEntries(s)};function*Fd(e,t){if(e!==void 0){let s=0;for(const n of e)yield t(n,s++)}}var et=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:void 0;function hd(e,t){return typeof t>"u"?t={autoBom:!1}:typeof t!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\uFEFF",e],{type:e.type}):e}function cs(e,t,s){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){Es(n.response,t,s)},n.onerror=function(){console.error("could not download file")},n.send()}function Jn(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch{}return t.status>=200&&t.status<=299}function fe(e){try{e.dispatchEvent(new MouseEvent("click"))}catch{var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var Gn=et.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),Es=et.saveAs||(typeof window!="object"||window!==et?function(){}:"download"in HTMLAnchorElement.prototype&&!Gn?function(t,s,n){var i=et.URL||et.webkitURL,r=document.createElement("a");s=s||t.name||"download",r.download=s,r.rel="noopener",typeof t=="string"?(r.href=t,r.origin!==location.origin?Jn(r.href)?cs(t,s,n):fe(r,r.target="_blank"):fe(r)):(r.href=i.createObjectURL(t),setTimeout(function(){i.revokeObjectURL(r.href)},4e4),setTimeout(function(){fe(r)},0))}:"msSaveOrOpenBlob"in navigator?function(t,s,n){if(s=s||t.name||"download",typeof t=="string")if(Jn(t))cs(t,s,n);else{var i=document.createElement("a");i.href=t,i.target="_blank",setTimeout(function(){fe(i)})}else navigator.msSaveOrOpenBlob(hd(t,n),s)}:function(t,s,n,i){if(i=i||open("","_blank"),i&&(i.document.title=i.document.body.innerText="downloading..."),typeof t=="string")return cs(t,s,n);var r=t.type==="application/octet-stream",o=/constructor/i.test(et.HTMLElement)||et.safari,a=/CriOS\/[\d]+/.test(navigator.userAgent);if((a||r&&o||Gn)&&typeof FileReader<"u"){var l=new FileReader;l.onloadend=function(){var d=l.result;d=a?d:d.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=d:location=d,i=null},l.readAsDataURL(t)}else{var c=et.URL||et.webkitURL,u=c.createObjectURL(t);i?i.location=u:location.href=u,i=null,setTimeout(function(){c.revokeObjectURL(u)},4e4)}});et.saveAs=Es.saveAs=Es;const be=function(e){e&&console.log(e)};class lr{constructor(t,s){this._filename=t,this.buffer=null,this.lastDownloadBlobUrl=null,this._mimeType=s}generate(){}createDownloadUrl(){this.buffer||this.generate();const t=new Blob([this.buffer],{type:this._mimeType});return this.lastDownloadBlobUrl&&window.URL.revokeObjectURL(this.lastDownloadBlobUrl),this.lastDownloadBlobUrl=URL.createObjectURL(t),this.lastDownloadBlobUrl}createDownloadLink(t){const s=t instanceof HTMLAnchorElement?t:document.createElement("a");return typeof t=="string"&&(s.innerHTML=t),s.href=this.createDownloadUrl(),s.download=this._filename,s.hasChildNodes||(s.innerText=this._filename),be("Link created for file "+this._filename),s}}let pe=null;class fd extends lr{constructor(t,s){super(t,"application/zip"),this.files=[],this.createFolderEntries=!!s;const n=new Date;this.timeInt=Math.round(n.getSeconds()/2)|n.getMinutes()<<5|n.getHours()<<11,this.dateInt=n.getFullYear()-1980<<9|n.getMonth()+1<<5|n.getDate()}addFileFromString(t,s){const n=new TextEncoder("utf-8").encode(s);return this.addFileFromUint8Array(t,n),this}addFileFromUint8Array(t,s){if(!(s instanceof Uint8Array))throw new Error("invalid parameter");return this.files.push({name:t.replace("\\","/"),data:s}),this}generate(){be("NullZip archive generation started");const t={};for(const c of this.files)c.size=c.data?c.data.byteLength:0,c.crc=c.data?this.crc(c.data):0,t[c.name]=c;const s=[];if(this.createFolderEntries){const c=/\//giu;for(const u of this.files){const d=u.name;for(let h=c.exec(d);h!==null;h=c.exec(d)){const f={name:d.substr(0,h.index+1),size:0,crc:0,data:new Uint8Array(0)};typeof t[f.name]>"u"&&(t[f.name]=f,s.push(f))}}}Array.prototype.push.apply(this.files,s),this.files.sort((c,u)=>c.name.length-u.name.length||c.name.localeCompare(u.name));const n=this.files.reduce((c,u)=>c+76+u.name.length*2+u.size,22);be("Estimated file size: "+n),this.buffer=new ArrayBuffer(n);const i=new pd(this.buffer),r=this.hex2u8a("504b0304140000000000");for(const c of this.files)c.offs=i.i,i.writeByteArray(r),i.uint16(this.timeInt),i.uint16(this.dateInt),i.uint32(c.crc),i.uint32(c.size),i.uint32(c.size),i.uint16(c.name.length),i.uint16(0),i.writeASCII(c.name),c.size>0&&i.writeByteArray(c.data);const o=i.i,a=this.hex2u8a("504b01023f00140000000000");for(const c of this.files)i.writeByteArray(a),i.uint16(this.timeInt),i.uint16(this.dateInt),i.uint32(c.crc),i.uint32(c.size),i.uint32(c.size),i.uint16(c.name.length),i.uint16(0),i.uint16(0),i.uint16(0),i.uint16(0),i.uint32(c.size?32:48),i.uint32(c.offs),i.writeASCII(c.name);const l=i.i-o;return i.writeByteArray(this.hex2u8a("504b050600000000")),i.uint16(this.files.length),i.uint16(this.files.length),i.uint32(l),i.uint32(o),i.uint16(0),be("Finished creating zip. size="+i.i+", predicted size="+n),this.buffer}crc(t){let s,n,i=-1;if(!pe)for(pe=[],n=0;n<256;s=++n){for(let r=0;r<8;r++)s=s&1?3988292384^s>>>1:s>>>1;pe[n]=s}for(let r=0;r<t.byteLength;r++)i=i>>>8^pe[(i^t[r])&255];return(i^-1)>>>0}hex2u8a(t){const s=new Uint8Array(Math.ceil(t.length/2));for(let n=0;n<s.length;n++)s[n]=parseInt(t.substr(n*2,2),16);return s}}class pd{constructor(t){this.dw=new DataView(t),this.i=0,this.le=!0,this.utf8encoder=new TextEncoder("utf-8")}uint8(t){this.dw.setUint8(this.i++,t)}uint16(t){this.dw.setUint16(this.i,t,this.le),this.i+=2}uint32(t){this.dw.setUint32(this.i,t,this.le),this.i+=4}writeByteArray(t){if(!(t instanceof Uint8Array))throw new Error("invalid parameter");new Uint8Array(this.dw.buffer).set(t,this.i),this.i+=t.byteLength}writeASCII(t){for(let s=0;s<t.length;s++)this.dw.setUint8(this.i++,t.charCodeAt(s)&255)}}const jt="application/vnd.openxmlformats-officedocument.spreadsheetml",Xe="http://schemas.openxmlformats.org",me=`${Xe}/spreadsheetml/2006/main`,us=`${Xe}/package/2006`,Vt=`${Xe}/officeDocument/2006/relationships`,Xn=[{id:164,code:"yyyy&quot;-&quot;mm&quot;-&quot;dd"},{id:165,code:"yyyy&quot;-&quot;mm&quot;-&quot;dd&quot; &quot;h&quot;:&quot;mm&quot;:&quot;ss"}];class Dd extends lr{constructor(t,s){super(t,`${jt}.sheet`),this.sheets=[],this.frozen=!!(s&&s.frozen),this.autoFilter=!!(s&&s.filter)}addSheetFromData(t,s){const n=this.sheets.length+1;return this.sheets.push({id:n,name:this.escapeXml(s||"Sheet"+n),data:t}),this}generate(){const t=[{name:"xl/styles.xml",xml:`<styleSheet xmlns="${me}" xmlns:mc="${Xe}/markup-compatibility/2006"><numFmts count="${Xn.length}">${Xn.map(i=>`<numFmt numFmtId="${i.id}" formatCode="${i.code}" />`)}</numFmts><fonts count="2"><font><sz val="10.0"/><color rgb="FF000000"/><name val="Arial"/></font><font><b/></font></fonts><fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="lightGray"/></fill></fills><borders count="1"><border><left/><right/><top/><bottom/></border></borders><cellStyleXfs count="1"><xf borderId="0" fillId="0" fontId="0" numFmtId="0" applyAlignment="1" applyFont="1"/></cellStyleXfs><cellXfs><xf borderId="0" fillId="0" fontId="0" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment/></xf><xf borderId="0" fillId="0" fontId="1" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment/></xf><xf borderId="0" fillId="0" fontId="0" numFmtId="164" xfId="0" applyAlignment="1" applyFont="1" applyNumberFormat="1"><alignment /></xf><xf borderId="0" fillId="0" fontId="0" numFmtId="165" xfId="0" applyAlignment="1" applyFont="1" applyNumberFormat="1"><alignment /></xf></cellXfs><cellStyles count="1"><cellStyle xfId="0" name="Normal" builtinId="0"/></cellStyles><dxfs count="0"/></styleSheet>`},{name:"xl/sharedStrings.xml",xml:`<sst xmlns="${me}" count="2" uniqueCount="2"><si><t>text here</t></si></sst>`},{name:"xl/workbook.xml",xml:`<workbook xmlns="${me}" xmlns:r="${Vt}"><workbookPr/><sheets>`+this.sheets.map(i=>`<sheet state="visible" name="${i.name}" sheetId="${i.id}" r:id="rId${i.id+2}"/>`).join("")+"</sheets><definedNames/><calcPr/></workbook>"},{name:"xl/_rels/workbook.xml.rels",xml:`<Relationships xmlns="${us}/relationships"><Relationship Id="rId1" Type="${Vt}/styles" Target="styles.xml" /><Relationship Id="rId2" Type="${Vt}/sharedStrings" Target="sharedStrings.xml"/>`+this.sheets.map(i=>`<Relationship Id="rId${i.id+2}" Type="${Vt}/worksheet" Target="worksheets/sheet${i.id}.xml"/>`).join("")+"</Relationships>"},{name:"[Content_Types].xml",xml:`<Types xmlns="${us}/content-types"><Default ContentType="application/xml" Extension="xml"/><Default ContentType="application/vnd.openxmlformats-package.relationships+xml" Extension="rels"/>`+this.sheets.map(i=>`<Override ContentType="${jt}.worksheet+xml" PartName="/xl/worksheets/sheet${i.id}.xml"/>`).join("")+`<Override ContentType="${jt}.sharedStrings+xml" PartName="/xl/sharedStrings.xml"/><Override ContentType="${jt}.styles+xml" PartName="/xl/styles.xml" /><Override ContentType="${jt}.sheet.main+xml" PartName="/xl/workbook.xml"/></Types>`},{name:"_rels/.rels",xml:`<Relationships xmlns="${us}/relationships"><Relationship Id="rId1" Type="${Vt}/officeDocument" Target="xl/workbook.xml"/></Relationships>`}],s=this.sheets.map(i=>{let r=0;const o=i.data.map((a,l)=>{const c=this.frozen&&l===0?' s="1"':"";a.length>r&&(r=a.length);const u=a.map((d,h)=>{const f=this.colName(h)+(l+1);return typeof d=="number"?`<c r="${f}"${c}><v>${d}</v></c>`:d instanceof Date?`<c s="${d.getHours()||d.getMinutes()||d.getSeconds()?3:2}"><v>${this.dateToExcelDate(d)}</v></c>`:`<c t="inlineStr"${c}><is><t>${this.escapeXml(d.toString())}</t></is></c>`});return`<row r="${l+1}">${u.join("")}</row>`});return{name:`xl/worksheets/sheet${i.id}.xml`,xml:`<worksheet xmlns="${me}"><sheetViews><sheetView workbookViewId="0"`+(this.frozen?' tabSelected="1"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView>':"/>")+`</sheetViews><sheetFormatPr customHeight="1" defaultColWidth="17.5" defaultRowHeight="15.75"/><sheetData>${o.join("")}</sheetData>`+(this.autoFilter?`<autoFilter ref="A1:${this.colName(r)}${i.data.length}"/>`:"")+"</worksheet>"}}),n=new fd(this._filename,!1);return[...t,...s].forEach(i=>n.addFileFromString(i.name,i.xml)),this.buffer=n.generate(),this.buffer}colName(t){return t<26?String.fromCharCode(t+65):String.fromCharCode(Math.floor(t/26+64))+String.fromCharCode(Math.floor(t%26+65))}escapeXml(t){return t.replace(/[<>&'"]/gu,s=>["&lt;","&gt;","&amp;","&apos;","&quot;"][`<>&'"`.indexOf(s)])}dateToExcelDate(t){return 25569+(t.getTime()-t.getTimezoneOffset()*6e4)/864e5}}const Zn=(e,t)=>{Object.assign(e.style,{display:t?"":"none"})};class md extends HTMLElement{static get observedAttributes(){return["opened"]}toggle=li("height");constructor(){super();const t=new CSSStyleSheet;t.replaceSync(`
      :host { display: block; overflow: hidden; }
		`);const s=this.attachShadow({mode:"open"});s.appendChild(document.createElement("slot")),s.adoptedStyleSheets=[t]}connectedCallback(){Zn(this,this.getAttribute("opened")!=null)}attributeChangedCallback(t,s,n){if(t==="opened"){const i=n!=null;return this.isConnected?this.toggle(this,i):Zn(this,i)}}}customElements.define("cosmoz-collapse",md);export{vi as $,L as A,N as B,k as C,vs as D,P as E,Id as F,Md as G,Nd as H,zt as I,ar as J,jr as K,oi as L,Mc as M,Ns as N,Fd as O,Ll as P,Es as Q,Dd as R,Kl as S,Cd as T,_d as U,bd as V,je as W,jo as X,xd as Y,Zc as Z,$t as _,hs as a,Xl as a0,Td as a1,Kc as a2,te as a3,xe as a4,Sd as b,D as c,Yi as d,Ld as e,q as f,U as g,$l as h,na as i,kd as j,kc as k,$d as l,Ad as m,ft as n,wd as o,ye as p,G as q,Wi as r,an as s,He as t,lt as u,Xc as v,Pd as w,Ed as x,zd as y,Od as z};
