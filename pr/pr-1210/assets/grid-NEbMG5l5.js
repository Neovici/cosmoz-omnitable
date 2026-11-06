import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{$ as t,C as n,Ct as r,Dt as i,Gt as a,Ht as o,I as s,It as c,Jt as l,Kt as u,M as d,Mt as f,N as p,P as m,Pt as h,Q as g,Rt as _,S as v,St as y,Tt as b,U as x,Ut as S,X as C,Xt as w,Yt as T,Z as E,Zt as ee,_ as te,a as ne,at as re,b as ie,et as ae,g as oe,h as se,it as ce,j as le,nt as ue,o as de,rt as fe,tt as pe,v as me,vt as D,wt as he,x as ge,y as _e,yt as O}from"./iframe-BVbUdfHp.js";import{a as ve,i as ye,o as be,s as xe}from"./flow-CgxUUMTq.js";var Se;function Ce(){return(Ce=e((()=>{D(),Se=S`
	:host {
		display: inline-flex;

		--_wash: light-dark(rgb(10 13 18 / 0.05), rgb(255 255 255 / 0.07));
		--_wash-strong: light-dark(rgb(10 13 18 / 0.08), rgb(255 255 255 / 0.11));
		--_hairline: light-dark(rgb(10 13 18 / 0.12), rgb(255 255 255 / 0.1));
		--_sheen: linear-gradient(rgb(255 255 255 / 0.12), rgb(255 255 255 / 0));
		--_lift: 0 1px 2px light-dark(rgb(10 13 18 / 0.08), rgb(0 0 0 / 0.4));
	}

	:host([full-width]) {
		display: flex;
		width: 100%;
	}

	:host([hidden]) {
		display: none;
	}

	/* Keeps the inner control stretching with host-driven sizing. */
	:host > cosmoz-tooltip {
		display: flex;
		width: 100%;
	}

	.button {
		display: inline-flex;
		align-items: center;
		justify-content: var(--cosmoz-button-justify-content, center);
		gap: 6px;
		width: 100%;
		height: var(--cz-control-height-md);
		padding: 0 12px;
		border: none;
		border-radius: var(--cz-radius-md);
		font-family: var(--cz-font-body);
		font-size: 0.8125rem;
		font-weight: var(--cz-font-weight-medium);
		line-height: 1;
		letter-spacing: -0.006em;
		text-align: center;
		text-decoration: none;
		white-space: nowrap;
		cursor: pointer;
		user-select: none;
		-webkit-tap-highlight-color: transparent;
		outline: 2px solid transparent;
		outline-offset: 2px;
		transition:
			background-color 120ms ease-out,
			color 120ms ease-out,
			box-shadow 120ms ease-out,
			outline-color 120ms ease-out,
			transform 80ms ease-out;

		background: var(--cz-action-sheen, none), var(--cz-color-bg-action-solid);
		color: var(--cz-color-text-on-action);
		box-shadow: var(--cz-shadow-action);

		&:hover {
			background-color: var(--cz-color-bg-action-solid-hover);
		}

		&:active {
			transform: scale(0.97);
		}

		&:focus-visible {
			outline-color: var(--cz-color-focus-ring);
		}
	}

	::slotted(svg) {
		width: 16px;
		height: 16px;
		flex-shrink: 0;
	}

	::slotted([slot='prefix']) {
		margin-inline-start: -2px;
	}

	::slotted([slot='suffix']) {
		margin-inline-end: -2px;
	}

	/* Sizes */

	:host([size='sm']) .button {
		height: var(--cz-control-height-sm);
		padding: 0 10px;
		border-radius: var(--cz-radius-sm);
		font-size: var(--cz-text-xs);
	}

	:host([size='sm']) ::slotted(svg) {
		width: 14px;
		height: 14px;
	}

	:host([size='lg']) .button {
		height: var(--cz-control-height-lg);
		padding: 0 14px;
		font-size: var(--cz-text-sm);
	}

	:host([size='xl']) .button {
		height: var(--cz-control-height-xl);
		padding: 0 16px;
		gap: 8px;
		font-size: var(--cz-text-sm);
	}

	:host([size='xl']) ::slotted(svg) {
		width: 18px;
		height: 18px;
	}

	:host([icon-only]) .button {
		width: var(--cz-control-height-md);
		padding: 0;
	}

	:host([icon-only][size='sm']) .button {
		width: var(--cz-control-height-sm);
	}

	:host([icon-only][size='lg']) .button {
		width: var(--cz-control-height-lg);
	}

	:host([icon-only][size='xl']) .button {
		width: var(--cz-control-height-xl);
	}

	:host([icon-only]) ::slotted(svg) {
		margin: 0;
	}

	/* Variants */

	:host([variant='secondary']) .button {
		background: light-dark(var(--cz-color-white), var(--cz-color-gray-900));
		color: var(--cz-color-text-primary);
		box-shadow:
			inset 0 0 0 1px var(--_hairline),
			inset 0 -1px 0 light-dark(rgb(10 13 18 / 0.04), transparent),
			inset 0 1px 0 light-dark(transparent, rgb(255 255 255 / 0.04)),
			var(--_lift);

		&:hover {
			background: light-dark(var(--cz-color-gray-50), var(--cz-color-gray-800));
		}
	}

	:host([variant='tertiary']) .button {
		background: transparent;
		color: var(--cz-color-text-secondary);
		box-shadow: none;

		&:hover {
			background: var(--_wash);
			color: var(--cz-color-text-primary);
		}
	}

	:host([variant='destructive']) .button {
		background: var(--_sheen), var(--cz-color-error-600);
		color: var(--cz-color-white);
		box-shadow:
			inset 0 1px 0 rgb(255 255 255 / 0.16),
			inset 0 0 0 1px light-dark(rgb(10 13 18 / 0.2), transparent),
			var(--_lift);

		&:hover {
			background-color: light-dark(
				var(--cz-color-error-700),
				var(--cz-color-error-500)
			);
		}

		&:focus-visible {
			outline-color: var(--cz-color-error-500);
		}
	}

	:host([variant='link']) .button {
		height: auto;
		padding: 0;
		background: transparent;
		color: var(--cz-color-text-link);
		box-shadow: none;
		border-radius: var(--cz-radius-xs);
		outline-offset: 3px;
		text-decoration: underline;
		text-decoration-color: transparent;
		text-underline-offset: 3px;
		transition-property: color, text-decoration-color, outline-color;

		&:hover {
			color: var(--cz-color-text-link-hover);
			text-decoration-color: currentColor;
		}

		&:active {
			transform: none;
		}
	}

	:host([icon-only][variant='secondary']) .button,
	:host([icon-only][variant='tertiary']) .button {
		color: var(--cz-color-text-tertiary);

		&:hover {
			color: var(--cz-color-text-primary);
		}
	}

	/* Toggled (aria-pressed) */

	:host([variant='secondary'][aria-pressed='true']) .button {
		background: var(--_wash-strong);
		color: var(--cz-color-text-primary);
		box-shadow: inset 0 0 0 1px var(--_hairline);
	}

	:host([variant='tertiary'][aria-pressed='true']) .button {
		background: var(--_wash-strong);
		color: var(--cz-color-text-primary);
	}

	:host(:not([variant])[aria-pressed='true']) .button,
	:host([variant='primary'][aria-pressed='true']) .button,
	:host([variant='destructive'][aria-pressed='true']) .button {
		background-image: none;
		box-shadow: inset 0 1px 3px rgb(0 0 0 / 0.35);
	}

	:host([variant='link'][aria-pressed='true']) .button {
		text-decoration-color: currentColor;
	}

	/* Disabled keeps the variant's look, just quieter. */

	:host([disabled]) .button {
		opacity: 0.45;
		cursor: not-allowed;
		pointer-events: none;
		box-shadow: none;
	}

	:host([disabled][variant='secondary']) .button {
		box-shadow: inset 0 0 0 1px var(--_hairline);
	}

	@media (prefers-reduced-motion: reduce) {
		.button {
			transition: none;
		}

		.button:active {
			transform: none;
		}
	}
`})))()}var we,Te;function Ee(){return(Ee=e((()=>{d(),le(),D(),w(),E(),Ce(),we=[`variant`,`size`,`disabled`,`full-width`,`icon-only`,`tooltip`,`tooltip-placement`,`type`,`value`,`href`,`target`,`rel`,`download`,`aria-expanded`,`aria-label`,`aria-pressed`],Te=e=>{let{disabled:t=!1,tooltip:n,tooltipPlacement:r,type:i=`button`,href:a,target:s,rel:c,download:l}=e,d=!!t;o(()=>{let t=t=>{e.disabled&&t.stopImmediatePropagation()};return e.addEventListener(`click`,t,{capture:!0}),()=>e.removeEventListener(`click`,t,{capture:!0})},[e.disabled]);let f=T`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`,p=C(a!=null,()=>T`
			<a
				href=${a}
				class="button"
				part="button"
				aria-disabled=${d?`true`:u}
				aria-expanded=${g(e.getAttribute(`aria-expanded`)??void 0)}
				aria-label=${g(e.getAttribute(`aria-label`)??void 0)}
				target=${g(s)}
				rel=${g(c)}
				download=${g(l)}
				>${f}</a
			>
		`,()=>T`
			<button
				type=${i}
				class="button"
				part="button"
				?disabled=${d}
				aria-expanded=${g(e.getAttribute(`aria-expanded`)??void 0)}
				aria-label=${g(e.getAttribute(`aria-label`)??void 0)}
				aria-pressed=${g(e.getAttribute(`aria-pressed`)??void 0)}
			>
				${f}
			</button>
		`);return T`<cosmoz-tooltip
		heading=${g(n??void 0)}
		placement=${g(r??void 0)}
		?disabled=${d}
	>
		${p}
	</cosmoz-tooltip>`},customElements.define(`cosmoz-button`,O(Te,{observedAttributes:we,styleSheets:[p,Se],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}function De(){return(De=e((()=>{Ee()})))()}var Oe,ke;function Ae(){return(Ae=e((()=>{Oe={duration:250},ke=e=>(t,n,r)=>{let i=`max`+e.charAt(0).toUpperCase()+e.slice(1);Object.assign(t.style,{[i]:``,display:``,overflow:`hidden`});let{[e]:a}=t.getBoundingClientRect(),o=[0,a],[s,c]=n?o:o.slice().reverse(),l=t.animate([{[i]:`${s}px`},{[i]:`${c}px`}],{...Oe,...r});l.onfinish=()=>Object.assign(t.style,{[i]:``,display:n?``:`none`,overflow:n?``:`visible`})}})))()}var je,Me,Ne;function Pe(){return(Pe=e((()=>{w(),he(),je=`important`,Me=` !`+je,Ne=y(class extends r{constructor(e){if(super(e),e.type!==b.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(Me);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?je:``):n[e]=r}}return l}})})))()}var Fe;function Ie(){return(Ie=e((()=>{Fe=(e=HTMLElement)=>class extends e{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent(`connected`))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent(`disconnected`))}}})))()}var Le,Re;function ze(){return(ze=e((()=>{D(),w(),Ie(),Le=S`
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
		background: var(
			--cosmoz-dropdown-menu-bg-color,
			var(--cz-color-bg-primary)
		);
		box-shadow: var(--cosmoz-dropdown-box-shadow, var(--cz-shadow-sm));
		border-radius: var(--cosmoz-dropdown-border-radius, var(--cz-radius-sm));
	}
	::slotted(*) {
		display: block;
	}
`,Re=()=>T`<div class="wrap" part="wrap"><slot></slot></div>`,customElements.define(`cosmoz-dropdown-content`,Fe(O(Re,{styleSheets:[Le]})))})))()}function Be(e,t,n){return j(e,A(t,n))}function Ve(e,t){return typeof e==`function`?e(t):e}function He(e){return e.split(`-`)[0]}function Ue(e){return e.split(`-`)[1]}function We(e){return e===`x`?`y`:`x`}function Ge(e){return e===`y`?`height`:`width`}function k(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function Ke(e){return We(k(e))}function qe(e,t,n){n===void 0&&(n=!1);let r=Ue(e),i=Ke(e),a=Ge(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=Qe(o)),[o,Qe(o)]}function Je(e){let t=Qe(e);return[Ye(e),t,Ye(t)]}function Ye(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}function Xe(e,t,n){switch(e){case`top`:case`bottom`:return n?t?ot:at:t?at:ot;case`left`:case`right`:return t?st:ct;default:return[]}}function Ze(e,t,n,r){let i=Ue(e),a=Xe(He(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(Ye)))),a}function Qe(e){let t=He(e);return it[t]+e.slice(t.length)}function $e(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function et(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:$e(e)}function tt(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}var A,j,nt,rt,M,it,at,ot,st,ct;function lt(){return(lt=e((()=>{A=Math.min,j=Math.max,nt=Math.round,rt=Math.floor,M=e=>({x:e,y:e}),it={left:`right`,right:`left`,bottom:`top`,top:`bottom`},at=[`left`,`right`],ot=[`right`,`left`],st=[`top`,`bottom`],ct=[`bottom`,`top`]})))()}function ut(e,t,n){let{reference:r,floating:i}=e,a=k(t),o=Ke(t),s=Ge(o),c=He(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=Ue(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function dt(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=Ve(t,e),p=et(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=tt(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=tt(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var ft,pt,mt,ht,gt;function _t(){return(_t=e((()=>{lt(),ft=50,pt=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:dt},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=ut(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<ft&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=ut(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},mt=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=Ve(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=He(r),_=k(o),v=He(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[Qe(o)]:Je(o)),x=p!==`none`;!d&&x&&b.push(...Ze(o,m,p,y));let S=[o,...b],C=await s.detectOverflow(t,h),w=[],T=i.flip?.overflows||[];if(l&&w.push(C[g]),u){let e=qe(r,a,y);w.push(C[e[0]],C[e[1]])}if(T=[...T,{placement:r,overflows:w}],!w.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(u!==`alignment`||_===k(t)||T.every(e=>k(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:T},reset:{placement:t}};let n=T.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=T.filter(e=>{if(x){let t=k(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o}if(r!==n)return{reset:{placement:n}}}return{}}}},ht=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=Ve(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=k(i),p=We(f),m=u[p],h=u[f],g=(e,t)=>Be(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}},gt=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){let{placement:n,rects:r,platform:i,elements:a}=t,{apply:o=()=>{},...s}=Ve(e,t),c=await i.detectOverflow(t,s),l=He(n),u=Ue(n),d=k(n)===`y`,{width:f,height:p}=r.floating,m,h;l===`top`||l===`bottom`?(m=l,h=u===(await(i.isRTL==null?void 0:i.isRTL(a.floating))?`start`:`end`)?`left`:`right`):(h=l,m=u===`end`?`top`:`bottom`);let g=p-c.top-c.bottom,_=f-c.left-c.right,v=A(p-c[m],g),y=A(f-c[h],_),b=t.middlewareData.shift,x=!b,S=v,C=y;b!=null&&b.enabled.x&&(C=_),b!=null&&b.enabled.y&&(S=g),x&&!u&&(d?C=f-2*j(c.left,c.right):S=p-2*j(c.top,c.bottom)),await o({...t,availableWidth:C,availableHeight:S});let w=await i.getDimensions(a.floating);return f!==w.width||p!==w.height?{reset:{rects:!0}}:{}}}}})))()}function vt(){return typeof window<`u`}function yt(e){return bt(e)?(e.nodeName||``).toLowerCase():`#document`}function N(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function P(e){return((bt(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function bt(e){return vt()?e instanceof Node||e instanceof N(e).Node:!1}function F(e){return vt()?e instanceof Element||e instanceof N(e).Element:!1}function I(e){return vt()?e instanceof HTMLElement||e instanceof N(e).HTMLElement:!1}function xt(e){return!vt()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof N(e).ShadowRoot}function St(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=L(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function Ct(e){return/^(table|td|th)$/.test(yt(e))}function wt(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}function Tt(e){let t=F(e)?L(e):e;return z(t.transform)||z(t.translate)||z(t.scale)||z(t.rotate)||z(t.perspective)||!Dt()&&(z(t.backdropFilter)||z(t.filter))||Nt.test(t.willChange||``)||Pt.test(t.contain||``)}function Et(e){let t=R(e);for(;I(t)&&!Ot(t);){if(Tt(t))return t;if(wt(t))return null;t=R(t)}return null}function Dt(){return Ft??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),Ft}function Ot(e){return/^(html|body|#document)$/.test(yt(e))}function L(e){return N(e).getComputedStyle(e)}function kt(e){return F(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function R(e){if(yt(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||xt(e)&&e.host||P(e);return xt(t)?t.host:t}function At(e){let t=R(e);return Ot(t)?(e.ownerDocument||e).body:I(t)&&St(t)?t:At(t)}function jt(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=At(e),i=r===e.ownerDocument?.body,a=N(r);if(i){let e=Mt(a);return t.concat(a,a.visualViewport||[],St(r)?r:[],e&&n?jt(e):[])}return t.concat(r,jt(r,[],n))}function Mt(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}var Nt,Pt,z,Ft;function It(){return(It=e((()=>{Nt=/transform|translate|scale|rotate|perspective|filter/,Pt=/paint|layout|strict|content/,z=e=>!!e&&e!==`none`})))()}function Lt(e){let t=L(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=I(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=nt(n)!==a||nt(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function Rt(e){return F(e)?e:e.contextElement}function B(e){let t=Rt(e);if(!I(t))return M(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Lt(t),o=(a?nt(n.width):n.width)/r,s=(a?nt(n.height):n.height)/i;return o&&Number.isFinite(o)||(o=1),s&&Number.isFinite(s)||(s=1),{x:o,y:s}}function zt(e){let t=N(e);return!Dt()||!t.visualViewport?sn:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Bt(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===N(e)}function V(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=Rt(e),o=M(1);t&&(r?F(r)&&(o=B(r)):o=B(e));let s=Bt(a,n,r)?zt(a):M(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=N(a),t=F(r)?N(r):r,n=e,i=Mt(n);for(;i&&t!==n;){let e=B(i),t=i.getBoundingClientRect(),r=L(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=N(i),i=Mt(n)}}return tt({width:u,height:d,x:c,y:l})}function Vt(e,t){let n=kt(e).scrollLeft;return t?t.left+n:V(P(e)).left+n}function Ht(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-Vt(e,n),y:n.top+t.scrollTop}}function Ut(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=P(r),s=t?wt(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=M(1),u=M(0),d=I(r);if((d||!a)&&((yt(r)!==`body`||St(o))&&(c=kt(r)),d)){let e=V(r);l=B(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?Ht(o,c):M(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function Wt(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function Gt(e){let t=kt(e),n=e.ownerDocument.body,r=j(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=j(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+Vt(e),o=-t.scrollTop;return L(n).direction===`rtl`&&(a+=j(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}function Kt(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=N(e),a=P(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!Dt()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if(Vt(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=cn&&(s-=o)}return{width:s,height:c,x:l,y:u}}function qt(e,t){let n=V(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=B(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function Jt(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=Kt(e,n,t);else if(t===`document`)r=Gt(P(e));else if(F(t))r=qt(t,n);else{let n=zt(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return tt(r)}function Yt(e,t){let n=t.get(e);if(n)return n;let r=jt(e,[],!1).filter(e=>F(e)&&yt(e)!==`body`),i=null,a=L(e).position===`fixed`,o=a?R(e):e;for(;F(o)&&!Ot(o);){let e=L(o),t=Tt(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=R(o)}return t.set(e,r),r}function Xt(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?wt(t)?[]:Yt(t,this._c):[].concat(n),r],o=Jt(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=Jt(t,a[e],i);s=j(n.top,s),c=A(n.right,c),l=A(n.bottom,l),u=j(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function Zt(e){let{width:t,height:n}=Lt(e);return{width:t,height:n}}function Qt(e,t,n){let r=I(t),i=P(t),a=n===`fixed`,o=V(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=M(0);if((r||!a)&&((yt(t)!==`body`||St(i))&&(s=kt(t)),r)){let e=V(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=Vt(i));let l=i&&!r&&!a?Ht(i,s):M(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function $t(e){return L(e).position===`static`}function en(e,t){if(!I(e)||L(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return P(e)===n&&(n=n.ownerDocument.body),n}function tn(e,t){let n=N(e);if(wt(e))return n;if(!I(e)){let t=R(e);for(;t&&!Ot(t);){if(F(t)&&!$t(t))return t;t=R(t)}return n}let r=en(e,t);for(;r&&Ct(r)&&$t(r);)r=en(r,t);return r&&Ot(r)&&$t(r)&&!Tt(r)?n:r||Et(e)||n}function nn(e){return L(e).direction===`rtl`}function rn(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function an(e,t,n){let r=null,i,a=P(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=rt(d),h=rt(a.clientWidth-(u+f)),g=rt(a.clientHeight-(d+p)),_=rt(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:j(0,A(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(!rn(l,e.getBoundingClientRect()))return s();if(n!==c){if(!y)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(b,{...v,root:a.ownerDocument})}catch{r=new IntersectionObserver(b,v)}r.observe(e)}let c=N(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function on(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=Rt(e),u=i||a?[...l?jt(l):[],...t?jt(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?an(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?V(e):null;c&&g();function g(){let t=V(e);h&&!rn(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var sn,cn,ln,un,dn,fn,pn,mn;function hn(){return(hn=e((()=>{_t(),lt(),It(),sn=M(0),cn=25,ln=async function(e){let t=this.getOffsetParent||tn,n=this.getDimensions,r=await n(e.floating);return{reference:Qt(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},un={convertOffsetParentRelativeRectToViewportRelativeRect:Ut,getDocumentElement:P,getClippingRect:Xt,getOffsetParent:tn,getElementRects:ln,getClientRects:Wt,getDimensions:Zt,getScale:B,isElement:F,isRTL:nn},dn=ht,fn=mt,pn=gt,mn=(e,t,n)=>{let r=new Map,i=n??{},a={...un,...i.platform,_c:r};return pt(e,t,{...i,platform:a})}})))()}var gn,_n;function vn(){return(vn=e((()=>{D(),hn(),gn=[fn({fallbackAxisSideDirection:`start`,crossAxis:!1}),dn()],_n=({placement:e=`bottom-start`,strategy:t,middleware:n=gn}={})=>{let[r,i]=f(),[a,s]=f(),[c,l]=f();return o(()=>{if(!r||!(a instanceof HTMLElement))l(void 0);else return on(r,a,()=>mn(r,a,{placement:e,strategy:t,middleware:n}).then(l))},[r,a,e,t,n]),{setReference:i,setFloating:s,styles:_(()=>c?{left:`${c.x}px`,top:`${c.y}px`}:{},[c?.x,c?.y])}}})))()}var yn,bn,xn;function Sn(){return(Sn=e((()=>{ae(),D(),yn=e=>e.matches(`:focus-within`)?!0:(e.shadowRoot?.querySelector(`[popover]`))?.matches(`:focus-within`)??!1,bn=({disabled:e,onFocus:t})=>{let[n,r]=f(),{focused:i,closed:a}=n||{},s=i&&!e,l=pe({closed:a,onFocus:t}),u=c(e=>r(t=>({...t,closed:e})),[]),d=c(e=>{let t=e.currentTarget;return yn(t)?r(e=>({focused:!0,closed:!e?.closed})):t.focus()},[]);return o(()=>{if(!s)return;let e=e=>{if(e.defaultPrevented)return;let{closed:t}=l;e.key===`Escape`&&!t?(e.preventDefault(),u(!0)):[`ArrowUp`,`Up`].includes(e.key)&&t&&(e.preventDefault(),u(!1))};return document.addEventListener(`keydown`,e,!0),()=>document.removeEventListener(`keydown`,e,!0)},[s]),{focused:s,active:s&&!a,setClosed:u,onToggle:d,onFocus:c(e=>{let t=yn(e.currentTarget);r({focused:t}),l.onFocus?.(t)},[l])}},xn=e=>{let t=bn(e),{onFocus:n}=t,r=i();return o(()=>{e.setAttribute(`tabindex`,`0`);let t=e=>{clearTimeout(r.current),n(e)},i=e=>{clearTimeout(r.current);let t=e.currentTarget;r.current=setTimeout(()=>n({currentTarget:t}),30)};return e.addEventListener(`focusin`,t),e.addEventListener(`focusout`,i),()=>{clearTimeout(r.current),e.removeEventListener(`focusin`,t),e.removeEventListener(`focusout`,i)}},[n]),t}})))()}var Cn,wn,Tn;function En(){return(En=e((()=>{De(),D(),w(),me(),ue(),Pe(),ze(),vn(),Sn(),Cn=e=>e.preventDefault(),wn=S`
	.anchor {
		padding: var(--cosmoz-dropdown-anchor-spacing);
	}

	cosmoz-button {
		width: 100%;
		pointer-events: none;
	}

	cosmoz-button::part(button) {
		width: auto;
		pointer-events: auto;
		border: none;
		cursor: pointer;
		background: transparent;
		padding: 0;

		height: auto;
	}

	::slotted(svg) {
		pointer-events: none;
	}

	@-moz-document url-prefix() {
		#content {
			left: auto;
		}
	}
`,Tn=e=>{let{placement:t,strategy:n,middleware:r,render:a}=e,{active:s,onToggle:l}=xn(e),d=i(),{styles:f,setReference:p,setFloating:m}=_n({placement:t,strategy:n,middleware:r}),h=c(e=>{d.current=e,m(e)},[m]);return o(()=>{let e=d.current;e&&(s&&!e.matches(`:popover-open`)&&e.showPopover?.(),!s&&e.matches(`:popover-open`)&&e.hidePopover?.())},[s]),T`
		<div class="anchor" part="anchor" ${fe(p)}>
			<cosmoz-button
				variant="tertiary"
				@mousedown=${Cn}
				@click=${l}
				exportparts="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</cosmoz-button>
		</div>
		<cosmoz-dropdown-content
			popover
			id="content"
			part="content"
			exportparts="wrap, content"
			style="${Ne(f)}"
			${fe(h)}
			><slot></slot>${te([a],()=>a?.()||u)}</cosmoz-dropdown-content
		>
	`},customElements.define(`cosmoz-dropdown`,O(Tn,{styleSheets:[wn]}))})))()}var Dn,On,kn;function An(){return(An=e((()=>{D(),w(),Dn=S`
	:host {
		display: block;
		max-height: var(--cosmoz-dropdown-menu-max-height, calc(96dvh - 64px));
		background: var(
			--cosmoz-dropdown-menu-bg-color,
			var(--cz-color-bg-primary)
		);
		overflow-y: auto;
		padding: var(--cz-spacing) calc(var(--cz-spacing) * 1.5);
		border-radius: var(--cosmoz-dropdown-border-radius, var(--cz-radius-sm));
		border: 1px solid
			var(--cosmoz-dropdown-menu-border-color, var(--cz-color-border-primary));
	}
	::slotted(:not(slot)) {
		display: block;
		--paper-button_-_display: block;
		box-sizing: border-box;
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
		border-radius: var(--cosmoz-dropdown-border-radius, var(--cz-radius-sm));
		background: var(--cosmoz-dropdown-menu-bg-color, transparent);
		color: var(--cosmoz-dropdown-menu-color, var(--cz-color-text-primary));
		transition:
			background 0.25s,
			color 0.25s;
		border: none;
		cursor: pointer;
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		text-align: left;
		margin: 0;
		width: 100%;
		white-space: nowrap;
	}

	::slotted(:not(slot):hover) {
		background: var(
			--cosmoz-dropdown-menu-hover-color,
			var(--cz-color-bg-secondary)
		);
	}

	::slotted(:not(slot)[disabled]) {
		opacity: 0.5;
		pointer-events: none;
	}

	/* Button components own their padding, hover and disabled appearance. */
	::slotted([variant]),
	::slotted([variant]:hover) {
		padding: 0;
		background: none;
		--cosmoz-button-justify-content: flex-start;
	}

	::slotted([variant][disabled]) {
		opacity: 1;
	}
`,On=()=>T` <slot></slot> `,customElements.define(`cosmoz-dropdown-list`,O(On,{styleSheets:[Dn]})),kn=({placement:e})=>T` <cosmoz-dropdown
		.placement=${e}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`,customElements.define(`cosmoz-dropdown-menu`,O(kn))})))()}function jn(){return(jn=e((()=>{En(),An(),Sn(),t()})))()}function H(){return(H=e((()=>{window.JSCompiler_renameProperty=function(e,t){return e}})))()}function Mn(e,t){if(e&&In.test(e)||e===`//`)return e;if(Ln===void 0){Ln=!1;try{let e=new URL(`b`,`http://a`);e.pathname=`c%20d`,Ln=e.href===`http://a/c%20d`}catch{}}if(t||=document.baseURI||window.location.href,Ln)try{return new URL(e,t).href}catch{return e}return U||(U=document.implementation.createHTMLDocument(`temp`),U.base=U.createElement(`base`),U.head.appendChild(U.base),U.anchor=U.createElement(`a`),U.body.appendChild(U.anchor)),U.base.href=t,U.anchor.href=e,U.anchor.href||e}function Nn(e,t){return e.replace(Fn,function(e,n,r,i){return n+`'`+Mn(r.replace(/["']/g,``),t)+`'`+i})}function Pn(e){return e.substring(0,e.lastIndexOf(`/`)+1)}var Fn,In,Ln,U;function Rn(){return(Rn=e((()=>{H(),Fn=/(url\()([^)]*)(\))/g,In=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/})))()}var zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,qn,Jn,Yn,Xn,Zn,Qn;function $n(){return($n=e((()=>{H(),Rn(),zn=!window.ShadyDOM||!window.ShadyDOM.inUse,!window.ShadyCSS||window.ShadyCSS.nativeCss,window.customElements.polyfillWrapFlushCallback,Bn=zn&&`adoptedStyleSheets`in Document.prototype&&`replaceSync`in CSSStyleSheet.prototype&&(()=>{try{let e=new CSSStyleSheet;e.replaceSync(``);let t=document.createElement(`div`);return t.attachShadow({mode:`open`}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch{return!1}})(),Vn=window.Polymer&&window.Polymer.rootPath||Pn(document.baseURI||window.location.href),Hn=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,window.Polymer&&window.Polymer.setPassiveTouchGestures,Un=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,Wn=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,Gn=window.Polymer&&window.Polymer.legacyOptimizations||!1,Kn=window.Polymer&&window.Polymer.legacyWarnings||!1,qn=window.Polymer&&window.Polymer.syncInitialRender||!1,Jn=window.Polymer&&window.Polymer.legacyUndefined||!1,Yn=window.Polymer&&window.Polymer.orderedComputed||!1,Xn=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Zn=window.Polymer&&window.Polymer.fastDomIf||!1,window.Polymer&&window.Polymer.suppressTemplateNotifications,window.Polymer&&window.Polymer.legacyNoObservedAttributes,Qn=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1})))()}function er(){}var tr,W;function G(){return(G=e((()=>{H(),tr=0,er.prototype.__mixinApplications,er.prototype.__mixinSet,W=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let n=tr++;function r(r){let i=r.__mixinSet;if(i&&i[n])return r;let a=t,o=a.get(r);if(!o){o=e(r),a.set(r,o);let t=Object.create(o.__mixinSet||i||null);t[n]=!0,o.__mixinSet=t}return o}return r}})))()}function nr(e,t){ar[e]=or[e.toLowerCase()]=t}function rr(e){return ar[e]||or[e.toLowerCase()]}function ir(e){e.querySelector(`style`)&&console.warn(`dom-module %s has style outside template`,e.id)}var ar,or,K;function sr(){return(sr=e((()=>{H(),Rn(),$n(),ar={},or={},K=class extends HTMLElement{static get observedAttributes(){return[`id`]}static import(e,t){if(e){let n=rr(e);return n&&t?n.querySelector(t):n}return null}attributeChangedCallback(e,t,n,r){t!==n&&this.register()}get assetpath(){if(!this.__assetpath){let e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=Mn(this.getAttribute(`assetpath`)||``,e.baseURI);this.__assetpath=Pn(t)}return this.__assetpath}register(e){if(e||=this.id,e){if(Un&&rr(e)!==void 0)throw nr(e,null),Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,nr(e,this),ir(this)}}},K.prototype.modules=ar,customElements.define(`dom-module`,K)})))()}function cr(e){return K.import(e)}function lr(e){let t=Nn((e.body?e.body:e).textContent,e.baseURI),n=document.createElement(`style`);return n.textContent=t,n}function ur(e){let t=e.trim().split(/\s+/),n=[];for(let e=0;e<t.length;e++)n.push(...dr(t[e]));return n}function dr(e){let t=cr(e);if(!t)return console.warn(`Could not find style data in module named`,e),[];if(t._styles===void 0){let e=[];e.push(...mr(t));let n=t.querySelector(`template`);n&&e.push(...fr(n,t.assetpath)),t._styles=e}return t._styles}function fr(e,t){if(!e._styles){let n=[],r=e.content.querySelectorAll(`style`);for(let e=0;e<r.length;e++){let i=r[e],a=i.getAttribute(gr);a&&n.push(...ur(a).filter(function(e,t,n){return n.indexOf(e)===t})),t&&(i.textContent=Nn(i.textContent,t)),n.push(i)}e._styles=n}return e._styles}function pr(e){let t=cr(e);return t?mr(t):[]}function mr(e){let t=[],n=e.querySelectorAll(hr);for(let e=0;e<n.length;e++){let r=n[e];if(r.import){let e=r.import,n=r.hasAttribute(_r);if(n&&!e._unscopedStyle){let t=lr(e);t.setAttribute(_r,``),e._unscopedStyle=t}else e._style||=lr(e);t.push(n?e._unscopedStyle:e._style)}}return t}var hr,gr,_r;function vr(){return(vr=e((()=>{sr(),Rn(),hr=`link[rel=import][type~=css]`,gr=`include`,_r=`shady-unscoped`})))()}var q;function yr(){return(yr=e((()=>{q=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e})))()}function br(e){return e.indexOf(`.`)>=0}function J(e){let t=e.indexOf(`.`);return t===-1?e:e.slice(0,t)}function xr(e,t){return e.indexOf(t+`.`)===0}function Sr(e,t){return t.indexOf(e+`.`)===0}function Cr(e,t,n){return t+n.slice(e.length)}function wr(e){if(Array.isArray(e)){let t=[];for(let n=0;n<e.length;n++){let r=e[n].toString().split(`.`);for(let e=0;e<r.length;e++)t.push(r[e])}return t.join(`.`)}return e}function Tr(e){return Array.isArray(e)?wr(e).split(`.`):e.toString().split(`.`)}function Y(e,t,n){let r=e,i=Tr(t);for(let e=0;e<i.length;e++){if(!r)return;let t=i[e];r=r[t]}return n&&(n.path=i.join(`.`)),r}function Er(e,t,n){let r=e,i=Tr(t),a=i[i.length-1];if(i.length>1){for(let e=0;e<i.length-1;e++){let t=i[e];if(r=r[t],!r)return}r[a]=n}else r[t]=n;return i.join(`.`)}function Dr(){return(Dr=e((()=>{H()})))()}function Or(e){return Ar[e]||(Ar[e]=e.indexOf(`-`)<0?e:e.replace(jr,e=>e[1].toUpperCase()))}function kr(e){return Ar[e]||(Ar[e]=e.replace(Mr,`-$1`).toLowerCase())}var Ar,jr,Mr;function Nr(){return(Nr=e((()=>{H(),Ar={},jr=/-[a-z]/g,Mr=/([A-Z])/g})))()}function Pr(){Rr=!1;let e=X.length;for(let t=0;t<e;t++){let e=X[t];if(e)try{e()}catch(e){setTimeout(()=>{throw e})}}X.splice(0,e),Ir+=e}var Fr,Ir,X,Lr,Rr,zr,Br,Vr;function Hr(){return(Hr=e((()=>{H(),Fr=0,Ir=0,X=[],Lr=0,Rr=!1,zr=document.createTextNode(``),new window.MutationObserver(Pr).observe(zr,{characterData:!0}),Br={after(e){return{run(t){return window.setTimeout(t,e)},cancel(e){window.clearTimeout(e)}}},run(e,t){return window.setTimeout(e,t)},cancel(e){window.clearTimeout(e)}},Vr={run(e){return Rr||(Rr=!0,zr.textContent=Lr++),X.push(e),Fr++},cancel(e){let t=e-Ir;if(t>=0){if(!X[t])throw Error(`invalid async handle: `+e);X[t]=null}}}})))()}var Ur,Wr;function Gr(){return(Gr=e((()=>{H(),G(),Hr(),yr(),Ur=Vr,Wr=W(e=>{class t extends e{static createProperties(e){let t=this.prototype;for(let n in e)n in t||t._createPropertyAccessor(n)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty(`__dataHasAccessor`,this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){this.hasOwnProperty(JSCompiler_renameProperty(`__dataAttributes`,this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let t=this.__dataAttributes[e];return t||(t=this.constructor.attributeNameForProperty(e),this.__dataAttributes[t]=e),t}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this.__data[e]},set:t?function(){}:function(t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,n){let r=this.__data[e],i=this._shouldPropertyChange(e,t,r);return i&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=r),this.__data[e]=t,this.__dataPending[e]=t),i}_isPropertyPending(e){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(e))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Ur.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&=(this._initializeInstanceProperties(this.__dataInstanceProps),null),this.ready())}_flushProperties(){this.__dataCounter++;let e=this.__data,t=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(e,t,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,n)),this.__dataCounter--}_shouldPropertiesChange(e,t,n){return!!t}_propertiesChanged(e,t,n){}_shouldPropertyChange(e,t,n){return n!==t&&(n===n||t===t)}attributeChangedCallback(e,t,n,r){t!==n&&this._attributeToProperty(e,n),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,n,r)}_attributeToProperty(e,t,n){if(!this.__serializing){let r=this.__dataAttributes,i=r&&r[e]||e;this[i]=this._deserializeValue(t,n||this.constructor.typeForProperty(i))}}_propertyToAttribute(e,t,n){this.__serializing=!0,n=arguments.length<3?this[e]:n,this._valueToNodeAttribute(this,n,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,n){let r=this._serializeValue(t);(n===`class`||n===`name`||n===`slot`)&&(e=q(e)),r===void 0?e.removeAttribute(n):e.setAttribute(n,r===``&&window.trustedTypes?window.trustedTypes.emptyScript:r)}_serializeValue(e){switch(typeof e){case`boolean`:return e?``:void 0;default:return e?.toString()}}_deserializeValue(e,t){switch(t){case Boolean:return e!==null;case Number:return Number(e);default:return e}}}return t})})))()}function Kr(e,t){if(!qr[t]){let n=e[t];n!==void 0&&(e.__data?e._setPendingProperty(t,n):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty(`__dataProto`,e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=n))}}var qr,Jr,Yr,Xr;function Zr(){return(Zr=e((()=>{for(H(),G(),Nr(),Gr(),qr={},Jr=HTMLElement.prototype;Jr;){let e=Object.getOwnPropertyNames(Jr);for(let t=0;t<e.length;t++)qr[e[t]]=!0;Jr=Object.getPrototypeOf(Jr)}Yr=window.trustedTypes?e=>trustedTypes.isHTML(e)||trustedTypes.isScript(e)||trustedTypes.isScriptURL(e):()=>!1,Xr=W(e=>{let t=Wr(e);class n extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(Or(e[t]))}static attributeNameForProperty(e){return kr(e)}_initializeProperties(){this.__dataProto&&=(this._initializeProtoProperties(this.__dataProto),null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){let n=this;n.hasAttribute(e)||this._valueToNodeAttribute(n,t,e)}_serializeValue(e){switch(typeof e){case`object`:if(e instanceof Date)return e.toString();if(e){if(Yr(e))return e;try{return JSON.stringify(e)}catch{return``}}default:return super._serializeValue(e)}}_deserializeValue(e,t){let n;switch(t){case Object:try{n=JSON.parse(e)}catch{n=e}break;case Array:try{n=JSON.parse(e)}catch{n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:n=isNaN(e)?String(e):Number(e),n=new Date(n);break;default:n=super._deserializeValue(e,t)}return n}_definePropertyAccessor(e,t){Kr(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return!!(this.__dataPending&&e in this.__dataPending)}}return n})})))()}function Qr(){if(!si){si=!0;let e=document.createElement(`textarea`);e.placeholder=`a`,ci=e.placeholder===e.textContent}return ci}function $r(e){Qr()&&e.localName===`textarea`&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}function ei(e){let t=e.getAttribute(`is`);if(t&&oi[t]){let n=e;for(n.removeAttribute(`is`),e=n.ownerDocument.createElement(t),n.parentNode.replaceChild(e,n),e.appendChild(n);n.attributes.length;){let{name:t}=n.attributes[0];li(e,n,t),n.removeAttribute(t)}}return e}function ti(e,t){let n=t.parentInfo&&ti(e,t.parentInfo);if(n){for(let e=n.firstChild,r=0;e;e=e.nextSibling)if(t.parentIndex===r++)return e}else return e}function ni(e,t,n,r){r.id&&(t[r.id]=n)}function ri(e,t,n){if(n.events&&n.events.length)for(let r=0,i=n.events,a;r<i.length&&(a=i[r]);r++)e._addMethodEventListenerToNode(t,a.name,a.value,e)}function ii(e,t,n,r){n.templateInfo&&(t._templateInfo=n.templateInfo,t._parentTemplateInfo=r)}function ai(e,t,n){return e=e._methodHost||e,function(t){e[n]?e[n](t,t.detail):console.warn("listener method `"+n+"` not defined")}}var oi,si,ci,li,ui;function di(){return(di=e((()=>{H(),G(),oi={"dom-if":!0,"dom-repeat":!0},si=!1,ci=!1,li=(()=>{let e=window.trustedTypes&&window.trustedTypes.createPolicy(`polymer-template-event-attribute-policy`,{createScript:e=>e});return(t,n,r)=>{let i=n.getAttribute(r);e&&r.startsWith(`on-`)?t.setAttribute(r,e.createScript(i,r)):t.setAttribute(r,i)}})(),ui=W(e=>{class t extends e{static _parseTemplate(e,t){if(!e._templateInfo){let n=e._templateInfo={};n.nodeInfoList=[],n.nestedTemplate=!!t,n.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute&&e.hasAttribute(`strip-whitespace`),this._parseTemplateContent(e,n,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,n){return this._parseTemplateNode(e.content,t,n)}static _parseTemplateNode(e,t,n){let r=!1,i=e;return i.localName==`template`&&!i.hasAttribute(`preserve-content`)?r=this._parseTemplateNestedTemplate(i,t,n)||r:i.localName===`slot`&&(t.hasInsertionPoint=!0),$r(i),i.firstChild&&this._parseTemplateChildNodes(i,t,n),i.hasAttributes&&i.hasAttributes()&&(r=this._parseTemplateNodeAttributes(i,t,n)||r),r||n.noted}static _parseTemplateChildNodes(e,t,n){if(e.localName!==`script`&&e.localName!==`style`)for(let r=e.firstChild,i=0,a;r;r=a){if(r.localName==`template`&&(r=ei(r)),a=r.nextSibling,r.nodeType===Node.TEXT_NODE){let n=a;for(;n&&n.nodeType===Node.TEXT_NODE;)r.textContent+=n.textContent,a=n.nextSibling,e.removeChild(n),n=a;if(t.stripWhiteSpace&&!r.textContent.trim()){e.removeChild(r);continue}}let o={parentIndex:i,parentInfo:n};this._parseTemplateNode(r,t,o)&&(o.infoIndex=t.nodeInfoList.push(o)-1),r.parentNode&&i++}}static _parseTemplateNestedTemplate(e,t,n){let r=e,i=this._parseTemplate(r,t);return(i.content=r.content.ownerDocument.createDocumentFragment()).appendChild(r.content),n.templateInfo=i,!0}static _parseTemplateNodeAttributes(e,t,n){let r=!1,i=Array.from(e.attributes);for(let a=i.length-1,o;o=i[a];a--)r=this._parseTemplateNodeAttribute(e,t,n,o.name,o.value)||r;return r}static _parseTemplateNodeAttribute(e,t,n,r,i){return r.slice(0,3)===`on-`?(e.removeAttribute(r),n.events=n.events||[],n.events.push({name:r.slice(3),value:i}),!0):r===`id`&&(n.id=i,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e,t){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e),t||=this.constructor._parseTemplate(e);let n=t.nodeInfoList,r=t.content||e.content,i=document.importNode(r,!0);i.__noInsertionPoint=!t.hasInsertionPoint;let a=i.nodeList=Array(n.length);i.$={};for(let e=0,r=n.length,o;e<r&&(o=n[e]);e++){let n=a[e]=ti(i,o);ni(this,i.$,n,o),ii(this,n,o,t),ri(this,n,o)}return i=i,i}_addMethodEventListenerToNode(e,t,n,r){r||=e;let i=ai(r,t,n);return this._addEventListenerToNode(e,t,i),i}_addEventListenerToNode(e,t,n){e.addEventListener(t,n)}_removeEventListenerFromNode(e,t,n){e.removeEventListener(t,n)}}return t})})))()}function fi(e,t,n){let r=e[t];if(!r)r=e[t]={};else if(!e.hasOwnProperty(t)&&(r=e[t]=Object.create(e[t]),n))for(let e in r){let t=r[e],n=r[e]=Array(t.length);for(let e=0;e<t.length;e++)n[e]=t[e]}return r}function pi(e,t,n,r,i,a){if(t){let o=!1,s=Z++;for(let c in n){let l=t[i?J(c):c];if(l)for(let t=0,u=l.length,d;t<u&&(d=l[t]);t++)d.info&&d.info.lastRun===s||i&&!hi(c,d.trigger)||(d.info&&(d.info.lastRun=s),d.fn(e,c,n,r,d.info,i,a),o=!0)}return o}return!1}function mi(e,t,n,r,i,a,o,s){let c=!1,l=t[o?J(r):r];if(l)for(let t=0,u=l.length,d;t<u&&(d=l[t]);t++)d.info&&d.info.lastRun===n||o&&!hi(r,d.trigger)||(d.info&&(d.info.lastRun=n),d.fn(e,r,i,a,d.info,o,s),c=!0);return c}function hi(e,t){if(t){let n=t.name;return n==e||!!(t.structured&&xr(n,e))||!!(t.wildcard&&Sr(n,e))}return!0}function gi(e,t,n,r,i){let a=typeof i.method==`string`?e[i.method]:i.method,o=i.property;a?a.call(e,e.__data[o],r[o]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function _i(e,t,n,r,i){let a=e[Q.NOTIFY],o,s=Z++;for(let c in t)t[c]&&(a&&mi(e,a,s,c,n,r,i)||i&&vi(e,c,n))&&(o=!0);let c;o&&(c=e.__dataHost)&&c._invalidateProperties&&c._invalidateProperties()}function vi(e,t,n){let r=J(t);return r!==t&&(yi(e,kr(r)+`-changed`,n[t],t),!0)}function yi(e,t,n,r){let i={value:n,queueProperty:!0};r&&(i.path=r),q(e).dispatchEvent(new CustomEvent(t,{detail:i}))}function bi(e,t,n,r,i,a){let o=(a?J(t):t)==t?null:t,s=o?Y(e,o):e.__data[t];o&&s===void 0&&(s=n[t]),yi(e,i.eventName,s,o)}function xi(e,t,n,r,i){let a,o=e.detail,s=o&&o.path;s?(r=Cr(n,r,s),a=o&&o.value):a=e.currentTarget[n],a=i?!a:a,t[Q.READ_ONLY]&&t[Q.READ_ONLY][r]||!t._setPendingPropertyOrPath(r,a,!0,!!s)||o&&o.queueProperty||t._invalidateProperties()}function Si(e,t,n,r,i){let a=e.__data[t];Hn&&(a=Hn(a,i.attrName,`attribute`,e)),e._propertyToAttribute(t,i.attrName,a)}function Ci(e,t,n,r){let i=e[Q.COMPUTE];if(i){if(Yn){Z++;let a=wi(e),o=[];for(let e in t)Zi(e,i,o,a,r);let s;for(;s=o.shift();)Ei(e,``,t,n,s)&&Zi(s.methodInfo,i,o,a,r);Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let a=t;for(;pi(e,i,a,n,r);)Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),a=e.__dataPending,e.__dataPending=null}}}function wi(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;let n=e[Q.COMPUTE],{counts:r,ready:i,total:a}=Ti(e),o;for(;o=i.shift();){t.set(o,t.size);let e=n[o];e&&e.forEach(e=>{let t=e.info.methodInfo;--a,--r[t]===0&&i.push(t)})}a!==0&&console.warn(`Computed graph for ${e.localName} incomplete; circular?`),e.constructor.__orderedComputedDeps=t}return t}function Ti(e){let t=e[Ji],n={},r=e[Q.COMPUTE],i=[],a=0;for(let e in t){let r=t[e];a+=n[e]=r.args.filter(e=>!e.literal).length+ +!!r.dynamicFn}for(let e in r)t[e]||i.push(e);return{counts:n,ready:i,total:a}}function Ei(e,t,n,r,i){let a=Ri(e,t,n,r,i);if(a===qi)return!1;let o=i.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,a,!0):(e[o]=a,!1)}function Di(e,t,n){let r=e.__dataLinkedPaths;if(r){let i;for(let a in r){let o=r[a];Sr(a,t)?(i=Cr(a,o,t),e._setPendingPropertyOrPath(i,n,!0,!0)):Sr(o,t)&&(i=Cr(o,a,t),e._setPendingPropertyOrPath(i,n,!0,!0))}}}function Oi(e,t,n,r,i,a,o){n.bindings=n.bindings||[];let s={kind:r,target:i,parts:a,literal:o,isCompound:a.length!==1};if(n.bindings.push(s),Ni(s)){let{event:e,negate:t}=s.parts[0];s.listenerEvent=e||kr(i)+`-changed`,s.listenerNegate=t}let c=t.nodeInfoList.length;for(let n=0;n<s.parts.length;n++){let r=s.parts[n];r.compoundIndex=n,ki(e,t,s,r,c)}}function ki(e,t,n,r,i){if(!r.literal){if(n.kind===`attribute`&&n.target[0]===`-`)console.warn(`Cannot set attribute `+n.target+` because "-" is not a valid attribute starting character`);else{let a=r.dependencies,o={index:i,binding:n,part:r,evaluator:e};for(let n=0;n<a.length;n++){let r=a[n];typeof r==`string`&&(r=Hi(r),r.wildcard=!0),e._addTemplatePropertyEffect(t,r.rootProperty,{fn:Ai,info:o,trigger:r})}}}}function Ai(e,t,n,r,i,a,o){let s=o[i.index],c=i.binding,l=i.part;if(a&&l.source&&t.length>l.source.length&&c.kind==`property`&&!c.isCompound&&s.__isPropertyEffectsClient&&s.__dataHasAccessor&&s.__dataHasAccessor[c.target]){let r=n[t];t=Cr(l.source,c.target,t),s._setPendingPropertyOrPath(t,r,!1,!0)&&e._enqueueClient(s)}else{let o=i.evaluator._evaluateBinding(e,l,t,n,r,a);o!==qi&&ji(e,s,c,l,o)}}function ji(e,t,n,r,i){if(i=Mi(t,i,n,r),Hn&&(i=Hn(i,n.target,n.kind,t)),n.kind==`attribute`)e._valueToNodeAttribute(t,i,n.target);else{let r=n.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[r]?t[Q.READ_ONLY]&&t[Q.READ_ONLY][r]||!t._setPendingProperty(r,i)||e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,r,i)}}function Mi(e,t,n,r){if(n.isCompound){let i=e.__dataCompoundStorage[n.target];i[r.compoundIndex]=t,t=i.join(``)}return n.kind!==`attribute`&&(n.target===`textContent`||n.target===`value`&&(e.localName===`input`||e.localName===`textarea`))&&(t??=``),t}function Ni(e){return!!e.target&&e.kind!=`attribute`&&e.kind!=`text`&&!e.isCompound&&e.parts[0].mode===`{`}function Pi(e,t){let{nodeList:n,nodeInfoList:r}=t;if(r.length)for(let t=0;t<r.length;t++){let i=r[t],a=n[t],o=i.bindings;if(o)for(let t=0;t<o.length;t++){let n=o[t];Fi(a,n),Ii(a,e,n)}a.__dataHost=e}}function Fi(e,t){if(t.isCompound){let n=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),r=t.parts,i=Array(r.length);for(let e=0;e<r.length;e++)i[e]=r[e].literal;let a=t.target;n[a]=i,t.literal&&t.kind==`property`&&(a===`className`&&(e=q(e)),e[a]=t.literal)}}function Ii(e,t,n){if(n.listenerEvent){let r=n.parts[0];e.addEventListener(n.listenerEvent,function(e){xi(e,t,n.target,r.source,r.negate)})}}function Li(e,t,n,r,i,a){a=t.static||a&&(typeof a!=`object`||a[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:i,dynamicFn:a};for(let i=0,a;i<t.args.length&&(a=t.args[i]);i++)a.literal||e._addPropertyEffect(a.rootProperty,n,{fn:r,info:o,trigger:a});return a&&e._addPropertyEffect(t.methodName,n,{fn:r,info:o}),o}function Ri(e,t,n,r,i){let a=e._methodHost||e,o=a[i.methodName];if(o){let r=e._marshalArgs(i.args,t,n);return r===qi?qi:o.apply(a,r)}i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}function zi(e){let t=``;for(let n=0;n<e.length;n++){let r=e[n].literal;t+=r||``}return t}function Bi(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:Qi};return t[2].trim()?Vi(t[2].replace(/\\,/g,`&comma;`).split(`,`),e):e}return null}function Vi(e,t){return t.args=e.map(function(e){let n=Hi(e);return n.literal||(t.static=!1),n},this),t}function Hi(e){let t=e.trim().replace(/&comma;/g,`,`).replace(/\\(.)/g,`$1`),n={name:t,value:``,literal:!1},r=t[0];switch(r===`-`&&(r=t[1]),r>=`0`&&r<=`9`&&(r=`#`),r){case`'`:case`"`:n.value=t.slice(1,-1),n.literal=!0;break;case`#`:n.value=Number(t),n.literal=!0}return n.literal||(n.rootProperty=J(t),n.structured=br(t),n.structured&&(n.wildcard=t.slice(-2)==`.*`,n.wildcard&&(n.name=t.slice(0,-2)))),n}function Ui(e,t,n){let r=Y(e,n);return r===void 0&&(r=t[n]),r}function Wi(e,t,n,r){let i={indexSplices:r};Jn&&!e._overrideLegacyUndefined&&(t.splices=i),e.notifyPath(n+`.splices`,i),e.notifyPath(n+`.length`,t.length),Jn&&!e._overrideLegacyUndefined&&(i.indexSplices=[])}function Gi(e,t,n,r,i,a){Wi(e,t,n,[{index:r,addedCount:i,removed:a,object:t,type:`splice`}])}function Ki(e){return e[0].toUpperCase()+e.substring(1)}var Z,qi,Q,Ji,Yi,Xi,Zi,Qi,$i,ea,ta;function na(){return(na=e((()=>{H(),yr(),G(),Dr(),Nr(),Zr(),di(),$n(),Z=0,qi=[],Q={COMPUTE:`__computeEffects`,REFLECT:`__reflectEffects`,NOTIFY:`__notifyEffects`,PROPAGATE:`__propagateEffects`,OBSERVE:`__observeEffects`,READ_ONLY:`__readOnly`},Ji=`__computeInfo`,Yi=/[A-Z]/,Xi=(e,t,n)=>{let r=0,i=t.length-1,a=-1;for(;r<=i;){let o=r+i>>1,s=n.get(t[o].methodInfo)-n.get(e.methodInfo);if(s<0)r=o+1;else if(s>0)i=o-1;else{a=o;break}}a<0&&(a=i+1),t.splice(a,0,e)},Zi=(e,t,n,r,i)=>{let a=t[i?J(e):e];if(a)for(let t=0;t<a.length;t++){let o=a[t];o.info.lastRun!==Z&&(!i||hi(e,o.trigger))&&(o.info.lastRun=Z,Xi(o.info,n,r))}},Qi=[],$i=RegExp(`(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:"(?:[^"\\\\]|\\\\.)*")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:"(?:[^"\\\\]|\\\\.)*")))\\s*))*)?)\\)\\s*)?)(?:]]|}})`,`g`),ea=W(e=>{let t=ui(Xr(e));class n extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return Q}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(ta.length){let e=ta[ta.length-1];e._enqueueClient(this),this.__dataHost=e}}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[Q.READ_ONLY];for(let n in e)t&&t[n]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=e[n])}_addPropertyEffect(e,t,n){this._createPropertyAccessor(e,t==Q.READ_ONLY);let r=fi(this,t,!0)[e];r||=this[t][e]=[],r.push(n)}_removePropertyEffect(e,t,n){let r=fi(this,t,!0)[e],i=r.indexOf(n);i>=0&&r.splice(i,1)}_hasPropertyEffect(e,t){let n=this[t];return!!(n&&n[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,Q.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,Q.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,Q.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,Q.COMPUTE)}_setPendingPropertyOrPath(e,t,n,r){if(r||J(Array.isArray(e)?e[0]:e)!==e){if(!r){let n=Y(this,e);if(e=Er(this,e,t),!e||!super._shouldPropertyChange(e,t,n))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,n))return Di(this,e,t),!0}else if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,n);else this[e]=t;return!1}_setUnmanagedPropertyToNode(e,t,n){(n!==e[t]||typeof n==`object`)&&(t===`className`&&(e=q(e)),e[t]=n)}_setPendingProperty(e,t,n){let r=this.__dataHasPaths&&br(e),i=r?this.__dataTemp:this.__data;return this._shouldPropertyChange(e,t,i[e])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),r?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(r||this[Q.NOTIFY]&&this[Q.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=n),!0):!1}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let n=e[t];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let n in e)!t&&this[Q.READ_ONLY]&&this[Q.READ_ONLY][n]||this._setPendingPropertyOrPath(n,e[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,n){let r=this.__dataHasPaths;this.__dataHasPaths=!1;let i;Ci(this,t,n,r),i=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(t,n,r),this._flushClients(),pi(this,this[Q.REFLECT],t,n,r),pi(this,this[Q.OBSERVE],t,n,r),i&&_i(this,i,t,n,r),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,n){this[Q.PROPAGATE]&&pi(this,this[Q.PROPAGATE],e,t,n),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,e,t,n)}_runEffectsForTemplate(e,t,n,r){let i=(t,r)=>{pi(this,e.propertyEffects,t,n,r,e.nodeList);for(let i=e.firstChild;i;i=i.nextSibling)this._runEffectsForTemplate(i,t,n,r)};e.runEffects?e.runEffects(i,t,r):i(t,r)}linkPaths(e,t){e=wr(e),t=wr(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=wr(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let n={path:``},r=Y(this,e,n);Wi(this,r,n.path,t)}get(e,t){return Y(t||this,e)}set(e,t,n){n?Er(n,e,t):this[Q.READ_ONLY]&&this[Q.READ_ONLY][e]||!this._setPendingPropertyOrPath(e,t,!0)||this._invalidateProperties()}push(e,...t){let n={path:``},r=Y(this,e,n),i=r.length,a=r.push(...t);return t.length&&Gi(this,r,n.path,i,t.length,[]),a}pop(e){let t={path:``},n=Y(this,e,t),r=!!n.length,i=n.pop();return r&&Gi(this,n,t.path,n.length,0,[i]),i}splice(e,t,n,...r){let i={path:``},a=Y(this,e,i);t<0?t=a.length-Math.floor(-t):t&&=Math.floor(t);let o;return o=arguments.length===2?a.splice(t):a.splice(t,n,...r),(r.length||o.length)&&Gi(this,a,i.path,t,r.length,o),o}shift(e){let t={path:``},n=Y(this,e,t),r=!!n.length,i=n.shift();return r&&Gi(this,n,t.path,0,0,[i]),i}unshift(e,...t){let n={path:``},r=Y(this,e,n),i=r.unshift(...t);return t.length&&Gi(this,r,n.path,0,t.length,[]),i}notifyPath(e,t){let n;if(arguments.length==1){let r={path:``};t=Y(this,e,r),n=r.path}else n=Array.isArray(e)?wr(e):e;this._setPendingPropertyOrPath(n,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){this._addPropertyEffect(e,Q.READ_ONLY),t&&(this[`_set`+Ki(e)]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,n){let r={property:e,method:t,dynamicFn:!!n};this._addPropertyEffect(e,Q.OBSERVE,{fn:gi,info:r,trigger:{name:e}}),n&&this._addPropertyEffect(t,Q.OBSERVE,{fn:gi,info:r,trigger:{name:t}})}_createMethodObserver(e,t){let n=Bi(e);if(!n)throw Error(`Malformed observer expression '`+e+`'`);Li(this,n,Q.OBSERVE,Ri,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,Q.NOTIFY,{fn:bi,info:{eventName:kr(e)+`-changed`,property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);t[0]===`-`?console.warn(`Property `+e+` cannot be reflected to attribute `+t+` because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.`):this._addPropertyEffect(e,Q.REFLECT,{fn:Si,info:{attrName:t}})}_createComputedProperty(e,t,n){let r=Bi(t);if(!r)throw Error(`Malformed computed expression '`+t+`'`);let i=Li(this,r,Q.COMPUTE,Ei,e,n);fi(this,Ji)[e]=i}_marshalArgs(e,t,n){let r=this.__data,i=[];for(let a=0,o=e.length;a<o;a++){let{name:o,structured:s,wildcard:c,value:l,literal:u}=e[a];if(!u){if(c){let e=Sr(o,t),i=Ui(r,n,e?t:o);l={path:e?t:o,value:i,base:e?Y(r,o):i}}else l=s?Ui(r,n,o):r[o]}if(Jn&&!this._overrideLegacyUndefined&&l===void 0&&e.length>1)return qi;i[a]=l}return i}static addPropertyEffect(e,t,n){this.prototype._addPropertyEffect(e,t,n)}static createPropertyObserver(e,t,n){this.prototype._createPropertyObserver(e,t,n)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,n){this.prototype._createComputedProperty(e,t,n)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let n=this.constructor._parseTemplate(e),r=this.__preBoundTemplateInfo==n;if(!r)for(let e in n.propertyEffects)this._createPropertyAccessor(e);if(t){if(n=Object.create(n),n.wasPreBound=r,!this.__templateInfo)this.__templateInfo=n;else{let t=e._parentTemplateInfo||this.__templateInfo,r=t.lastChild;n.parent=t,t.lastChild=n,n.previousSibling=r,r?r.nextSibling=n:t.firstChild=n}}else this.__preBoundTemplateInfo=n;return n}static _addTemplatePropertyEffect(e,t,n){let r=e.hostProps=e.hostProps||{};r[t]=!0;let i=e.propertyEffects=e.propertyEffects||{};(i[t]=i[t]||[]).push(n)}_stampTemplate(e,t){t||=this._bindTemplate(e,!0),ta.push(this);let n=super._stampTemplate(e,t);if(ta.pop(),t.nodeList=n.nodeList,!t.wasPreBound){let e=t.childNodes=[];for(let t=n.firstChild;t;t=t.nextSibling)e.push(t)}return n.templateInfo=t,Pi(this,t),this.__dataClientsReady&&(this._runEffectsForTemplate(t,this.__data,null,!1),this._flushClients()),n}_removeBoundDom(e){let t=e.templateInfo,{previousSibling:n,nextSibling:r,parent:i}=t;n?n.nextSibling=r:i&&(i.firstChild=r),r?r.previousSibling=n:i&&(i.lastChild=n),t.nextSibling=t.previousSibling=null;let a=t.childNodes;for(let e=0;e<a.length;e++){let t=a[e];q(q(t).parentNode).removeChild(t)}}static _parseTemplateNode(e,n,r){let i=t._parseTemplateNode.call(this,e,n,r);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,n);t&&(e.textContent=zi(t)||` `,Oi(this,n,r,`text`,`textContent`,t),i=!0)}return i}static _parseTemplateNodeAttribute(e,n,r,i,a){let o=this._parseBindings(a,n);if(o){let t=i,a=`property`;Yi.test(i)?a=`attribute`:i[i.length-1]==`$`&&(i=i.slice(0,-1),a=`attribute`);let s=zi(o);return s&&a==`attribute`&&(i==`class`&&e.hasAttribute(`class`)&&(s+=` `+e.getAttribute(i)),e.setAttribute(i,s)),a==`attribute`&&t==`disable-upgrade$`&&e.setAttribute(i,``),e.localName===`input`&&t===`value`&&e.setAttribute(t,``),e.removeAttribute(t),a===`property`&&(i=Or(i)),Oi(this,n,r,a,i,o,s),!0}return t._parseTemplateNodeAttribute.call(this,e,n,r,i,a)}static _parseTemplateNestedTemplate(e,n,r){let i=t._parseTemplateNestedTemplate.call(this,e,n,r),a=e.parentNode,o=r.templateInfo,s=a.localName===`dom-if`,c=a.localName===`dom-repeat`;Xn&&(s||c)&&(a.removeChild(e),r=r.parentInfo,r.templateInfo=o,r.noted=!0,i=!1);let l=o.hostProps;if(Zn&&s)l&&(n.hostProps=Object.assign(n.hostProps||{},l),Xn||(r.parentInfo.noted=!0));else for(let e in l){let t=[{mode:`{`,source:e,dependencies:[e],hostProp:!0}];Oi(this,n,r,`property`,`_host_`+e,t)}return i}static _parseBindings(e,t){let n=[],r=0,i;for(;(i=$i.exec(e))!==null;){i.index>r&&n.push({literal:e.slice(r,i.index)});let a=i[1][0],o=!!i[2],s=i[3].trim(),c=!1,l=``,u=-1;a==`{`&&(u=s.indexOf(`::`))>0&&(l=s.substring(u+2),s=s.substring(0,u),c=!0);let d=Bi(s),f=[];if(d){let{args:e,methodName:n}=d;for(let t=0;t<e.length;t++){let n=e[t];n.literal||f.push(n)}let r=t.dynamicFns;(r&&r[n]||d.static)&&(f.push(n),d.dynamicFn=!0)}else f.push(s);n.push({source:s,mode:a,negate:o,customEvent:c,signature:d,dependencies:f,event:l}),r=$i.lastIndex}if(r&&r<e.length){let t=e.substring(r);t&&n.push({literal:t})}return n.length?n:null}static _evaluateBinding(e,t,n,r,i,a){let o;return o=t.signature?Ri(e,n,r,i,t.signature):n==t.source?a&&br(n)?Y(e,n):e.__data[n]:Y(e,t.source),t.negate&&(o=!o),o}}return n}),ta=[]})))()}function ra(){aa++}function ia(e){oa.push(e)}var aa,oa;function sa(){return(sa=e((()=>{aa=0,oa=[]})))()}function ca(e){let t={};for(let n in e){let r=e[n];t[n]=typeof r==`function`?{type:r}:r}return t}var la;function ua(){return(ua=e((()=>{H(),G(),sa(),Gr(),la=W(e=>{let t=Wr(e);function n(e){let t=Object.getPrototypeOf(e);return t.prototype instanceof i?t:null}function r(e){if(!e.hasOwnProperty(JSCompiler_renameProperty(`__ownProperties`,e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty(`properties`,e))){let n=e.properties;n&&(t=ca(n))}e.__ownProperties=t}return e.__ownProperties}class i extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__observedAttributes`,this))){ia(this.prototype);let e=this._properties;this.__observedAttributes=e?Object.keys(e).map(e=>this.prototype._addPropertyToAttributeMap(e)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__finalized`,this))){let e=n(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){let e=r(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__properties`,this))){let e=n(this);this.__properties=Object.assign({},e&&e._properties,r(this))}return this.__properties}static typeForProperty(e){let t=this._properties[e];return t&&t.type}_initializeProperties(){ra(),this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i})})))()}var da,fa,pa;function ma(){return(ma=e((()=>{H(),$n(),G(),vr(),Rn(),sr(),na(),ua(),yr(),da=`3.5.2`,fa=window.ShadyCSS&&window.ShadyCSS.cssBuild,pa=W(e=>{let t=la(ea(e));function n(e){if(!e.hasOwnProperty(JSCompiler_renameProperty(`__propertyDefaults`,e))){e.__propertyDefaults=null;let t=e._properties;for(let n in t){let r=t[n];`value`in r&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[n]=r)}}return e.__propertyDefaults}function r(e){return e.hasOwnProperty(JSCompiler_renameProperty(`__ownObservers`,e))||(e.__ownObservers=e.hasOwnProperty(JSCompiler_renameProperty(`observers`,e))?e.observers:null),e.__ownObservers}function i(e,t,n,r){n.computed&&(n.readOnly=!0),n.computed&&(e._hasReadOnlyEffect(t)?console.warn(`Cannot redefine computed property '${t}'.`):e._createComputedProperty(t,n.computed,r)),n.readOnly&&!e._hasReadOnlyEffect(t)?e._createReadOnlyProperty(t,!n.computed):n.readOnly===!1&&e._hasReadOnlyEffect(t)&&console.warn(`Cannot make readOnly property '${t}' non-readOnly.`),n.reflectToAttribute&&!e._hasReflectEffect(t)?e._createReflectedProperty(t):n.reflectToAttribute===!1&&e._hasReflectEffect(t)&&console.warn(`Cannot make reflected property '${t}' non-reflected.`),n.notify&&!e._hasNotifyEffect(t)?e._createNotifyingProperty(t):n.notify===!1&&e._hasNotifyEffect(t)&&console.warn(`Cannot make notify property '${t}' non-notify.`),n.observer&&e._createPropertyObserver(t,n.observer,r[n.observer]),e._addPropertyToAttributeMap(t)}function a(e,t,n,r){if(!fa){let i=t.content.querySelectorAll(`style`),a=fr(t),o=pr(n),s=t.content.firstElementChild;for(let n=0;n<o.length;n++){let i=o[n];i.textContent=e._processStyleText(i.textContent,r),t.content.insertBefore(i,s)}let c=0;for(let t=0;t<a.length;t++){let n=a[t],o=i[c];o===n?c++:(n=n.cloneNode(!0),o.parentNode.insertBefore(n,o)),n.textContent=e._processStyleText(n.textContent,r)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,n),Qn&&fa&&Bn){let n=t.content.querySelectorAll(`style`);if(n){let t=``;Array.from(n).forEach(e=>{t+=e.textContent,e.parentNode.removeChild(e)}),e._styleSheet=new CSSStyleSheet,e._styleSheet.replaceSync(t)}}}function o(e){let t=null;if(e&&(!Un||Wn)&&(t=K.import(e,`template`),Un&&!t))throw Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}class s extends t{static get polymerElementVersion(){return da}static _finalizeClass(){t._finalizeClass.call(this);let e=r(this);e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&(typeof e==`string`?(console.error(`template getter must return HTMLTemplateElement`),e=null):Gn||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(let t in e)i(this.prototype,t,e[t],e)}static createObservers(e,t){let n=this.prototype;for(let r=0;r<e.length;r++)n._createMethodObserver(e[r],t)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`_template`,this))){let e=this.prototype.hasOwnProperty(JSCompiler_renameProperty(`_template`,this.prototype))?this.prototype._template:void 0;typeof e==`function`&&(e=e()),this._template=e===void 0?this.hasOwnProperty(JSCompiler_renameProperty(`is`,this))&&o(this.is)||Object.getPrototypeOf(this.prototype).constructor.template:e}return this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`_importPath`,this))){let e=this.importMeta;if(e)this._importPath=Pn(e.url);else{let e=K.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Vn,this.importPath=this.constructor.importPath;let e=n(this.constructor);if(e)for(let t in e){let n=e[t];if(this._canApplyPropertyDefault(t)){let e=typeof n.value==`function`?n.value.call(this):n.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}_canApplyPropertyDefault(e){return!this.hasOwnProperty(e)}static _processStyleText(e,t){return Nn(e,t)}static _finalizeTemplate(e){let t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;let n=this.importPath,r=n?Mn(n):``;a(this,t,e,r),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){let t=q(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:`open`,shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e),this.constructor._styleSheet&&(t.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),qn&&window.ShadyDOM&&window.ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=Mn(this.importPath)),Mn(e,t)}static _parseTemplateContent(e,n,r){return n.dynamicFns=n.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,n,r)}static _addTemplatePropertyEffect(e,n,r){return!Kn||n in this._properties||r.info.part.signature&&r.info.part.signature.static||r.info.part.hostProp||e.nestedTemplate||console.warn(`Property '${n}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,e,n,r)}}return s})})))()}function ha(e){if(e instanceof va)return e.value;throw Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}function ga(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof va)return ha(e);throw Error(`non-template value passed to Polymer's html function: ${e}`)}var _a,va,ya,ba;function xa(){return(xa=e((()=>{H(),_a=window.trustedTypes&&trustedTypes.createPolicy(`polymer-html-literal`,{createHTML:e=>e}),va=class{constructor(e,t){ba(e,t);let n=t.reduce((t,n,r)=>t+ha(n)+e[r+1],e[0]);this.value=n.toString()}toString(){return this.value}},ya=function(e,...t){ba(e,t);let n=document.createElement(`template`),r=t.reduce((t,n,r)=>t+ga(n)+e[r+1],e[0]);return _a&&(r=_a.createHTML(r)),n.innerHTML=r,n},ba=(e,t)=>{if(!Array.isArray(e)||!Array.isArray(e.raw)||t.length!==e.length-1)throw TypeError(`Invalid call to the html template tag`)}})))()}var Sa;function Ca(){return(Ca=e((()=>{ma(),xa(),Sa=pa(HTMLElement)})))()}var wa,Ta;function Ea(){return(Ea=e((()=>{De(),m(),D(),_e(),ue(),wa=()=>{let e=_(()=>matchMedia(`(max-width: 899px)`),[]),[t,n]=f(e.matches),[r,a]=f(!1),s=i();return o(()=>{let t=()=>{s.current?.close(),a(!1),n(e.matches)};return e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)},[e]),{mobile:t,opened:r,sheet:s,open:()=>{s.current?.showModal(),a(!0)},close:()=>s.current?.close(),onClose:()=>a(!1)}},Ta=({sheet:e,close:t,onClose:n},r)=>T`
	<dialog
		class="action-sheet"
		part="action-sheet"
		aria-labelledby="actions-heading"
		${fe(t=>e.current=t)}
		@close=${n}
		@click=${n=>{let r=e.current;if(!r||n.target!==r)return;let{left:i,right:a,top:o,bottom:s}=r.getBoundingClientRect();(n.clientX<i||n.clientX>a||n.clientY<o||n.clientY>s)&&t()}}
	>
		<header class="sheet-header">
			<h2 id="actions-heading">${ie(`Actions`)||`Actions`}</h2>
			<cosmoz-button
				variant="tertiary"
				icon-only
				aria-label=${ie(`Close`)||`Close`}
				@click=${t}
				>${s()}</cosmoz-button
			>
		</header>
		<div class="sheet-actions" @click=${t}>${r}</div>
	</dialog>
`})))()}var Da;function Oa(){return(Oa=e((()=>{D(),Da=S`
	@media (max-width: 899px) {
		:host {
			--cz-control-height-md: 44px;
			--cz-control-height-sm: 44px;
			background-color: var(--cosmoz-bottom-bar-bg-color, transparent);
			border-color: transparent;
			box-shadow: var(--cosmoz-bottom-bar-shadow, none);
		}

		#bar {
			height: 52px;
			padding-inline: 12px;
			justify-content: flex-end;
		}

		#info {
			flex: 0 1 auto;
		}

		:host(:not([has-info])) #info {
			display: none;
		}

		#bottomBarToolbar::slotted(*) {
			flex: 1 0 auto;
			max-inline-size: 320px;
			margin-inline-end: auto;
		}

		#bottomBarMenu::slotted(*) {
			box-sizing: border-box;
			width: 100%;
			min-height: 48px;
			--cz-control-height-sm: 48px;
			--cosmoz-button-justify-content: flex-start;
			--cz-text-xs: var(--cz-text-sm);
		}
	}

	.action-sheet {
		position: fixed;
		inset: auto 0 0;
		margin: 0 auto;
		box-sizing: border-box;
		width: min(100%, 480px);
		max-width: 100%;
		max-height: min(75dvh, 640px);
		padding: 0 12px max(16px, env(safe-area-inset-bottom));
		border: 0;
		border-radius: var(--cz-radius-3xl) var(--cz-radius-3xl) 0 0;
		background: var(--cz-glass-sheen), var(--cz-color-bg-primary);
		box-shadow: var(--cz-shadow-2xl);
		color: var(--cz-color-text-primary);
		font-family: var(--cz-font-body);
		overflow: hidden;
	}
	.action-sheet[open] {
		display: flex;
		flex-direction: column;
	}
	.action-sheet::backdrop {
		background: var(--cosmoz-overlay-backdrop-color);
	}
	.sheet-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex: none;
		gap: 16px;
		padding: 12px 4px 8px 12px;
	}
	.sheet-header h2 {
		margin: 0;
		font-size: var(--cz-text-base);
		font-weight: var(--cz-font-weight-semibold);
	}
	.sheet-actions {
		min-height: 0;
		overflow-y: auto;
		overscroll-behavior: contain;
		border-radius: var(--cz-radius-xl);
		background: var(--cz-color-bg-secondary);
		padding: 4px;
	}
`})))()}var ka,Aa,ja,Ma,Na,Pa,Fa,Ia,La,Ra,za,Ba,Va,Ha,Ua,Wa;function Ga(){return(Ga=e((()=>{De(),Ae(),jn(),t(),m(),ne(),D(),Ca(),_e(),w(),Ea(),Oa(),ka=`bottom-bar-toolbar`,Aa=`bottom-bar-menu`,ja=S`
	:host {
		display: block;
		overflow: hidden;
		bottom: 0;
		left: 0;
		width: 100%;
		max-width: 100%; /* Firefox fix */
		transition: max-height 0.3s ease;
		flex: none;
		background-color: var(
			--cosmoz-bottom-bar-bg-color,
			var(--cz-color-bg-secondary)
		);
		border-top: 1px solid var(--cz-color-border-secondary);
		box-shadow: var(--cosmoz-bottom-bar-shadow, none);
		z-index: 1;
	}

	:host([force-open]) {
		transition: none;
	}

	[hidden],
	::slotted([hidden]) {
		display: none !important;
	}

	#bar {
		height: calc(
			var(--cz-control-height-md, 32px) + var(--cz-spacing, 4px) * 4
		);
		padding: 0 3%;
		display: flex;
		align-items: center;
		gap: calc(var(--cz-spacing, 4px) * 2);
	}

	#info {
		flex: 1 1 auto;
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	#dropdown {
		flex: none;
	}

	#bottomBarToolbar::slotted(*) {
		flex: 0 0 auto;
		min-width: 0;
	}

	.menu {
		max-width: min(300px, calc(100dvw - var(--cz-spacing, 4px) * 4));
	}

	.menu > cosmoz-dropdown-list {
		max-height: var(--cosmoz-dropdown-menu-max-height, min(60dvh, 30rem));
	}

	#bottomBarMenu::slotted([variant]) {
		padding: 0;
		background: none;
		--cosmoz-button-justify-content: flex-start;
	}

	@media (prefers-reduced-motion: reduce) {
		:host {
			transition: none;
		}
	}

	:host([hide-actions]) #bottomBarToolbar,
	:host([hide-actions]) #bottomBarMenu,
	:host([hide-actions]) #dropdown,
	:host([hide-actions]) #menuButton {
		display: none;
	}

	:host(:not([has-menu-items])) #dropdown,
	:host(:not([has-menu-items])) #menuButton {
		display: none;
	}
`,Ma=Symbol(`openMenu`),Na=e=>{let t=e.currentTarget.closest(`#dropdown`);t&&(t.opened=!1)},Pa=e=>{e.shadowRoot?.querySelector(`#menuButton`)?.click()},Fa=e=>e.nodeType===Node.ELEMENT_NODE&&e.getAttribute(`slot`)!==`info`&&e.tagName!==`TEMPLATE`&&e.tagName!==`STYLE`&&e.tagName!==`DOM-REPEAT`&&e.tagName!==`DOM-IF`&&e.getAttribute(`slot`)!==`extra`,Ia=e=>{let t=[...e.childNodes],n=[];for(let e of t)if(e.tagName===`SLOT`){let t=e.assignedElements({flatten:!0});n.push(...t)}else n.push(e);return n},La=e=>{let t=Ia(e).filter(Fa).filter(e=>!e.hidden).sort((e,t)=>(Number(e.dataset.index)||0)-(Number(t.dataset.index)||0));if(t.length===0)return t;let n=t.reduce((e,t)=>parseInt(e.dataset.priority??`0`,10)>=parseInt(t.dataset.priority??`0`,10)?e:t,{dataset:{priority:`-1000`}});return[n,...t.filter(e=>e!==n)]},Ra={variant:`tertiary`,size:`sm`},za=new WeakMap,Ba=e=>e.constructor.observedAttributes?.includes(`variant`)??!1,Va=(e,t,n,r)=>{let i=t?ka:Aa;if(e.setAttribute(`slot`,i),e.setAttribute(`tabindex`,`0`),Ba(e)){za.has(e)||za.set(e,{variant:e.getAttribute(`variant`),size:e.getAttribute(`size`)});let n=t?za.get(e):Ra;Object.entries(n).forEach(([t,n])=>n==null?e.removeAttribute(t):e.setAttribute(t,n))}e.classList.toggle(r,!t),e.classList.toggle(n,t)},Ha=(e,t,n)=>{let r=La(e),{maxToolbarItems:i=1}=e;if(!(r.length>0)){e.toggleAttribute(`has-menu-items`,!1);return}let a=r.slice(0,i),o=r.slice(a.length);a.forEach(e=>Va(e,!0,t,n)),o.forEach(e=>Va(e,!1,t,n)),e.toggleAttribute(`has-menu-items`,o.length>0);let s=e.shadowRoot?.querySelector(`#bar`);if(!s?.clientWidth)return;let c=s.getBoundingClientRect(),l=getComputedStyle(s),u=c.left+parseFloat(l.paddingLeft),d=c.right-parseFloat(l.paddingRight),f=()=>s.scrollWidth>s.clientWidth||a.some(e=>{let t=e.getBoundingClientRect();return e.scrollWidth>e.clientWidth||t.left<u-.5||t.right>d+.5});for(;a.length>0&&f();)Va(a.pop(),!1,t,n),e.toggleAttribute(`has-menu-items`,!0)},Ua=e=>{let{active:t=!1,maxToolbarItems:n=1}=e,r=wa(),a=i(!1);de({activity:Ma,callback:()=>Pa(e),check:()=>t&&!e.hasAttribute(`hide-actions`),element:()=>e.shadowRoot?.querySelector(`#menuButton`)},[t]);let s=_(()=>ke(`height`),[]);h(()=>{a.current?s(e,t):s(e,t,{duration:0}),a.current=!0},[t]);let l=i([]),d=c(()=>{l.current=La(e),Ha(e,`cosmoz-bottom-bar-toolbar`,`cosmoz-bottom-bar-menu`)},[n]),f=i(null),p=c(()=>{let t=f.current;t&&(t.disconnect(),Ia(e).filter(Fa).forEach(e=>{t.observe(e,{attributes:!0,attributeFilter:[`hidden`]})}))},[]);o(()=>{f.current=new MutationObserver(()=>{p(),d()}),p(),d();let t=new MutationObserver(()=>{p(),d()});t.observe(e,{childList:!0,subtree:!0,characterData:!0});let n=new ResizeObserver(d);return n.observe(e),()=>{f.current?.disconnect(),f.current=null,t.disconnect(),n.disconnect()}},[d]),h(d,[r.mobile]);let m=c(()=>{p();let t=La(e),n=l.current??[];(t.length!==n.length||t.some((e,t)=>e!==n[t]))&&d()},[d]);return T` <div id="bar" part="bar">
			<div id="info" part="info">
				<slot
					name="info"
					@slotchange=${t=>e.toggleAttribute(`has-info`,t.target.assignedNodes({flatten:!0}).length>0)}
				></slot>
			</div>
			<slot
				id="bottomBarToolbar"
				name="bottom-bar-toolbar"
				@slotchange=${m}
			></slot>
			${r.mobile?T`<cosmoz-button
							id="menuButton"
							variant="tertiary"
							icon-only
							aria-label=${ie(`More actions`)||`More actions`}
							aria-haspopup="dialog"
							aria-expanded=${String(r.opened)}
							@click=${r.open}
							>${x()}</cosmoz-button
						>`:T`<cosmoz-dropdown-next
							id="dropdown"
							part="dropdown"
							placement="top span-left"
						>
							<cosmoz-button
								id="menuButton"
								slot="button"
								variant="tertiary"
								icon-only
								aria-label=${ie(`More actions`)||`More actions`}
								>${x()}</cosmoz-button
							>
							<div class="menu" part="menu" @click=${Na}>
								<cosmoz-dropdown-list>
									<slot id="bottomBarMenu" name="bottom-bar-menu"></slot>
								</cosmoz-dropdown-list>
							</div>
						</cosmoz-dropdown-next>`}
			<slot name="extra" id="extraSlot"></slot>
		</div>
		${r.mobile?Ta(r,T`<slot id="bottomBarMenu" name="bottom-bar-menu"></slot>`):u}
		<div hidden style="display:none">
			<slot id="content" @slotchange=${m}></slot>
		</div>`},customElements.define(`cosmoz-bottom-bar`,O(Ua,{observedAttributes:[`active`,`max-toolbar-items`],styleSheets:[ja,Da]})),Wa=`
	<slot name="extra" slot="extra"></slot>
	<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
	<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
`,T(Object.assign([Wa],{raw:[Wa]})),ya(Object.assign([Wa],{raw:[Wa]}))})))()}function Ka(){return(Ka=e((()=>{Ga()})))()}var qa;function Ja(){return(Ja=e((()=>{w(),he(),qa=y(class extends r{constructor(e){if(super(e),e.type!==b.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return l}})})))()}var Ya,Xa,Za;function Qa(){return(Qa=e((()=>{H(),G(),Hr(),Ya=class e{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,Xa.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Xa.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(t,n,r){return t instanceof e?t._cancelAsync():t=new e,t.setConfig(n,r),t}},Xa=new Set,Za=function(e){Xa.add(e)}})))()}function $a(){return($a=e((()=>{H(),Qa()})))()}var eo,to,no;function ro(){return(ro=e((()=>{eo=Symbol(`memo`),to=e=>{let t=eo,n=eo,r;return function(i,a){if(t===i&&n===a)return r;let o=e(i,a);return r=o,t=i,n=a,o}},no=e=>{let t=eo,n=eo,r=eo,i;return function(a,o,s){if(t===a&&n===o&&r===s)return i;let c=e(a,o,s);return i=c,t=a,n=o,r=s,c}}})))()}var io,ao,oo;function so(){return(so=e((()=>{D(),w(),io=S`
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
`,ao=()=>u,oo=O(ao,{styleSheets:[io]}),customElements.define(`cosmoz-spinner`,oo)})))()}function co(){return(co=e((()=>{so()})))()}var lo;function uo(){return(uo=e((()=>{D(),lo=a(S`
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
`)})))()}var fo,po,mo,ho,go,_o;function vo(){return(vo=e((()=>{ge(),uo(),v(),D(),fo=[`T`,` `],po=e=>{if(!e||typeof e!=`string`)return;let t;return fo.some(n=>e.match(n)?(t=e.split(n),!0):!1),t||[e]},mo=(e,t)=>{let n=po(e),r=po(t);return{minDate:Array.isArray(n)?n.shift():null,minTime:Array.isArray(n)?n.shift():null,maxDate:Array.isArray(r)?r.shift():null,maxTime:Array.isArray(r)?r.shift():null}},ho=(e,t)=>{if(e||t)return!e&&t?`T${t}`:e&&!t?e:`${e}T${t}`},go=e=>{if(e){for(let t of fo)if(e.match(t)){let n=e.split(t);return{date:n.shift(),time:n.shift()}}return{date:e}}},_o=e=>{let{dateLabel:t,timeLabel:r,min:i,max:a,step:s=`1`,value:c}=e,{minDate:l,maxDate:u,minTime:d,maxTime:f}=_(()=>mo(i,a),[i,a]),{date:p,time:m}=_(()=>go(c)??{},[c]);return o(()=>{e.dispatchEvent(new CustomEvent(`cosmoz-datetime-input-value-changed`,{bubbles:!0,composed:!0}))},[c]),T`
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
			.value="${p}"
			@value-changed="${t=>n(e,`value`,ho(t.target.value,m))}"
			.min="${l}"
			.max="${u}"
		></cosmoz-input>
		<cosmoz-input
			label="${r}"
			type="time"
			.value="${m}"
			@value-changed="${t=>n(e,`value`,ho(p,t.target.value))}"
			step="${s}"
			.min="${d}"
			.max="${f}"
		></cosmoz-input>
	`},customElements.define(`cosmoz-datetime-input`,O(_o,{observedAttributes:[`date-label`,`time-label`,`min`,`max`,`step`],styleSheets:[lo]}))})))()}function yo(){return(yo=e((()=>{vo()})))()}var bo,xo;function So(){return(So=e((()=>{bo=e=>t=>{let n=t.match(e);return n&&{result:n,url:new URL(t,document.location.origin)}},xo=(e,t)=>{for(let n of e){let e=n.rule,r=typeof e==`function`?e(t):bo(e)(t);if(r)return{...n,route:n,match:r,url:t}}}})))()}function Co(){return(Co=e((()=>{D()})))()}var wo,To,Eo,Do;function Oo(){return(Oo=e((()=>{D(),So(),wo=()=>window.location.href.replace(window.location.origin,``),To=()=>{let[e,t]=f(wo);return o(()=>{let e=()=>t(wo);return window.addEventListener(`popstate`,e),()=>window.removeEventListener(`popstate`,e)},[t]),e},Eo=e=>{let t=To();return _(()=>xo(e,t),[e,t])},Do=(e,t=null,{notify:n=!0,replace:r=!0}={})=>{(r?history.replaceState:history.pushState).call(history,t,``,e),n&&queueMicrotask(()=>window.dispatchEvent(new CustomEvent(`popstate`,{bubbles:!1})))}})))()}var ko;function Ao(){return(Ao=e((()=>{D(),Oo(),ko=e=>{let t=Eo(e);return{route:t,result:_(()=>{if(t){let{handle:e,...n}=t;return e(n)}},[t])}}})))()}var jo,Mo;function No(){return(No=e((()=>{D(),jo=(e,t,n)=>e.dispatchEvent(new CustomEvent(t,{bubbles:!1,cancelable:!1,composed:!0,...n})),Mo=(e,t,n)=>{o(()=>{n?(jo(e,`route-loading`,{detail:t}),Promise.resolve(n).then(()=>jo(e,`route-loaded`,{detail:t})).catch(n=>jo(e,`route-error`,{detail:{route:t,error:n}}))):jo(e,`route-not-found`)},[n])}})))()}var Po;function Fo(){return(Fo=e((()=>{w(),me(),se(),D(),Ao(),No(),Po=e=>{let t=e.routes,{route:n,result:r}=ko(t);return Mo(e,n,r),te([r],()=>oe(Promise.resolve(r).catch(()=>u),u))},customElements.define(`cosmoz-router`,O(Po))})))()}function Io(){return(Io=e((()=>{Co(),Oo(),Ao(),Fo()})))()}var Lo,Ro,zo;function Bo(){return(Bo=e((()=>{re(),Lo=()=>new URL(location.hash.replace(/^#!?/iu,``).replace(`%23`,`#`),location.origin),Ro=(e,t=ce)=>{let n=new URLSearchParams(Lo().hash.replace(`#`,``)).getAll(e);switch(n.length){case 0:return;case 1:return t(n[0]);default:return n.map(t)}},zo=(e,t=ce)=>{let n=Array.from(new URLSearchParams(Lo().hash.replace(`#`,``)).entries()).filter(([t])=>t.startsWith(e)).map(([n,r])=>t([n.replace(e,``),r])).filter(([,e])=>e!=null);return Object.fromEntries(n)}})))()}function*Vo(e,t){if(e!==void 0){let n=0;for(let r of e)yield t(r,n++)}}function Ho(){return(Ho=e((()=>{})))()}function Uo(e,t){return t===void 0?t={autoBom:!1}:typeof t!=`object`&&(console.warn(`Deprecated: Expected third argument to be a object`),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([`﻿`,e],{type:e.type}):e}function Wo(e,t,n){var r=new XMLHttpRequest;r.open(`GET`,e),r.responseType=`blob`,r.onload=function(){Jo(r.response,t,n)},r.onerror=function(){console.error(`could not download file`)},r.send()}function Go(e){var t=new XMLHttpRequest;t.open(`HEAD`,e,!1);try{t.send()}catch{}return t.status>=200&&t.status<=299}function Ko(e){try{e.dispatchEvent(new MouseEvent(`click`))}catch{var t=document.createEvent(`MouseEvents`);t.initMouseEvent(`click`,!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var $,qo,Jo;function Yo(){return(Yo=e((()=>{$=typeof window==`object`&&window.window===window?window:typeof self==`object`&&self.self===self?self:typeof global==`object`&&global.global===global?global:void 0,qo=$.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),Jo=$.saveAs||(typeof window!=`object`||window!==$?function(){}:`download`in HTMLAnchorElement.prototype&&!qo?function(e,t,n){var r=$.URL||$.webkitURL,i=document.createElement(`a`);t=t||e.name||`download`,i.download=t,i.rel=`noopener`,typeof e==`string`?(i.href=e,i.origin===location.origin?Ko(i):Go(i.href)?Wo(e,t,n):Ko(i,i.target=`_blank`)):(i.href=r.createObjectURL(e),setTimeout(function(){r.revokeObjectURL(i.href)},4e4),setTimeout(function(){Ko(i)},0))}:`msSaveOrOpenBlob`in navigator?function(e,t,n){if(t=t||e.name||`download`,typeof e==`string`){if(Go(e))Wo(e,t,n);else{var r=document.createElement(`a`);r.href=e,r.target=`_blank`,setTimeout(function(){Ko(r)})}}else navigator.msSaveOrOpenBlob(Uo(e,n),t)}:function(e,t,n,r){if(r||=open(``,`_blank`),r&&(r.document.title=r.document.body.innerText=`downloading...`),typeof e==`string`)return Wo(e,t,n);var i=e.type===`application/octet-stream`,a=/constructor/i.test($.HTMLElement)||$.safari,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||i&&a||qo)&&typeof FileReader<`u`){var s=new FileReader;s.onloadend=function(){var e=s.result;e=o?e:e.replace(/^data:[^;]*;/,`data:attachment/file;`),r?r.location.href=e:location=e,r=null},s.readAsDataURL(e)}else{var c=$.URL||$.webkitURL,l=c.createObjectURL(e);r?r.location=l:location.href=l,r=null,setTimeout(function(){c.revokeObjectURL(l)},4e4)}}),$.saveAs=Jo.saveAs=Jo})))()}var Xo;function Zo(){return(Zo=e((()=>{Xo=function(e){e&&console.log(e)}})))()}var Qo;function $o(){return($o=e((()=>{Zo(),Qo=class{constructor(e,t){this._filename=e,this.buffer=null,this.lastDownloadBlobUrl=null,this._mimeType=t}generate(){}createDownloadUrl(){this.buffer||this.generate();let e=new Blob([this.buffer],{type:this._mimeType});return this.lastDownloadBlobUrl&&window.URL.revokeObjectURL(this.lastDownloadBlobUrl),this.lastDownloadBlobUrl=URL.createObjectURL(e),this.lastDownloadBlobUrl}createDownloadLink(e){let t=e instanceof HTMLAnchorElement?e:document.createElement(`a`);return typeof e==`string`&&(t.innerHTML=e),t.href=this.createDownloadUrl(),t.download=this._filename,t.hasChildNodes||(t.innerText=this._filename),Xo(`Link created for file `+this._filename),t}}})))()}var es,ts,ns;function rs(){return(rs=e((()=>{Zo(),$o(),es=null,ts=class extends Qo{constructor(e,t){super(e,`application/zip`),this.files=[],this.createFolderEntries=!!t;let n=new Date;this.timeInt=Math.round(n.getSeconds()/2)|n.getMinutes()<<5|n.getHours()<<11,this.dateInt=n.getFullYear()-1980<<9|n.getMonth()+1<<5|n.getDate()}addFileFromString(e,t){let n=new TextEncoder(`utf-8`).encode(t);return this.addFileFromUint8Array(e,n),this}addFileFromUint8Array(e,t){if(!(t instanceof Uint8Array))throw Error(`invalid parameter`);return this.files.push({name:e.replace(`\\`,`/`),data:t}),this}generate(){Xo(`NullZip archive generation started`);let e={};for(let t of this.files)t.size=t.data?t.data.byteLength:0,t.crc=t.data?this.crc(t.data):0,e[t.name]=t;let t=[];if(this.createFolderEntries){let n=/\//giu;for(let r of this.files){let i=r.name;for(let r=n.exec(i);r!==null;r=n.exec(i)){let n={name:i.substr(0,r.index+1),size:0,crc:0,data:new Uint8Array};e[n.name]===void 0&&(e[n.name]=n,t.push(n))}}}Array.prototype.push.apply(this.files,t),this.files.sort((e,t)=>e.name.length-t.name.length||e.name.localeCompare(t.name));let n=this.files.reduce((e,t)=>e+76+t.name.length*2+t.size,22);Xo(`Estimated file size: `+n),this.buffer=new ArrayBuffer(n);let r=new ns(this.buffer),i=this.hex2u8a(`504b0304140000000000`);for(let e of this.files)e.offs=r.i,r.writeByteArray(i),r.uint16(this.timeInt),r.uint16(this.dateInt),r.uint32(e.crc),r.uint32(e.size),r.uint32(e.size),r.uint16(e.name.length),r.uint16(0),r.writeASCII(e.name),e.size>0&&r.writeByteArray(e.data);let a=r.i,o=this.hex2u8a(`504b01023f00140000000000`);for(let e of this.files)r.writeByteArray(o),r.uint16(this.timeInt),r.uint16(this.dateInt),r.uint32(e.crc),r.uint32(e.size),r.uint32(e.size),r.uint16(e.name.length),r.uint16(0),r.uint16(0),r.uint16(0),r.uint16(0),r.uint32(e.size?32:48),r.uint32(e.offs),r.writeASCII(e.name);let s=r.i-a;return r.writeByteArray(this.hex2u8a(`504b050600000000`)),r.uint16(this.files.length),r.uint16(this.files.length),r.uint32(s),r.uint32(a),r.uint16(0),Xo(`Finished creating zip. size=`+r.i+`, predicted size=`+n),this.buffer}crc(e){let t,n,r=-1;if(!es)for(es=[],n=0;n<256;t=++n){for(let e=0;e<8;e++)t=t&1?3988292384^t>>>1:t>>>1;es[n]=t}for(let t=0;t<e.byteLength;t++)r=r>>>8^es[(r^e[t])&255];return(r^-1)>>>0}hex2u8a(e){let t=new Uint8Array(Math.ceil(e.length/2));for(let n=0;n<t.length;n++)t[n]=parseInt(e.substr(n*2,2),16);return t}},ns=class{constructor(e){this.dw=new DataView(e),this.i=0,this.le=!0,this.utf8encoder=new TextEncoder(`utf-8`)}uint8(e){this.dw.setUint8(this.i++,e)}uint16(e){this.dw.setUint16(this.i,e,this.le),this.i+=2}uint32(e){this.dw.setUint32(this.i,e,this.le),this.i+=4}writeByteArray(e){if(!(e instanceof Uint8Array))throw Error(`invalid parameter`);new Uint8Array(this.dw.buffer).set(e,this.i),this.i+=e.byteLength}writeASCII(e){for(let t=0;t<e.length;t++)this.dw.setUint8(this.i++,e.charCodeAt(t)&255)}}})))()}var is,as,os,ss,cs,ls,us;function ds(){return(ds=e((()=>{$o(),rs(),is=`application/vnd.openxmlformats-officedocument.spreadsheetml`,as=`http://schemas.openxmlformats.org`,os=`${as}/spreadsheetml/2006/main`,ss=`${as}/package/2006`,cs=`${as}/officeDocument/2006/relationships`,ls=[{id:164,code:`yyyy&quot;-&quot;mm&quot;-&quot;dd`},{id:165,code:`yyyy&quot;-&quot;mm&quot;-&quot;dd&quot; &quot;h&quot;:&quot;mm&quot;:&quot;ss`}],us=class extends Qo{constructor(e,t){super(e,`${is}.sheet`),this.sheets=[],this.frozen=!!(t&&t.frozen),this.autoFilter=!!(t&&t.filter)}addSheetFromData(e,t){let n=this.sheets.length+1;return this.sheets.push({id:n,name:this.escapeXml(t||`Sheet`+n),data:e}),this}generate(){let e=[{name:`xl/styles.xml`,xml:`<styleSheet xmlns="${os}" xmlns:mc="${as}/markup-compatibility/2006"><numFmts count="${ls.length}">${ls.map(e=>`<numFmt numFmtId="${e.id}" formatCode="${e.code}" />`)}</numFmts><fonts count="2"><font><sz val="10.0"/><color rgb="FF000000"/><name val="Arial"/></font><font><b/></font></fonts><fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="lightGray"/></fill></fills><borders count="1"><border><left/><right/><top/><bottom/></border></borders><cellStyleXfs count="1"><xf borderId="0" fillId="0" fontId="0" numFmtId="0" applyAlignment="1" applyFont="1"/></cellStyleXfs><cellXfs><xf borderId="0" fillId="0" fontId="0" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment/></xf><xf borderId="0" fillId="0" fontId="1" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment/></xf><xf borderId="0" fillId="0" fontId="0" numFmtId="164" xfId="0" applyAlignment="1" applyFont="1" applyNumberFormat="1"><alignment /></xf><xf borderId="0" fillId="0" fontId="0" numFmtId="165" xfId="0" applyAlignment="1" applyFont="1" applyNumberFormat="1"><alignment /></xf></cellXfs><cellStyles count="1"><cellStyle xfId="0" name="Normal" builtinId="0"/></cellStyles><dxfs count="0"/></styleSheet>`},{name:`xl/sharedStrings.xml`,xml:`<sst xmlns="${os}" count="2" uniqueCount="2"><si><t>text here</t></si></sst>`},{name:`xl/workbook.xml`,xml:`<workbook xmlns="${os}" xmlns:r="${cs}"><workbookPr/><sheets>`+this.sheets.map(e=>`<sheet state="visible" name="${e.name}" sheetId="${e.id}" r:id="rId${e.id+2}"/>`).join(``)+`</sheets><definedNames/><calcPr/></workbook>`},{name:`xl/_rels/workbook.xml.rels`,xml:`<Relationships xmlns="${ss}/relationships"><Relationship Id="rId1" Type="${cs}/styles" Target="styles.xml" /><Relationship Id="rId2" Type="${cs}/sharedStrings" Target="sharedStrings.xml"/>`+this.sheets.map(e=>`<Relationship Id="rId${e.id+2}" Type="${cs}/worksheet" Target="worksheets/sheet${e.id}.xml"/>`).join(``)+`</Relationships>`},{name:`[Content_Types].xml`,xml:`<Types xmlns="${ss}/content-types"><Default ContentType="application/xml" Extension="xml"/><Default ContentType="application/vnd.openxmlformats-package.relationships+xml" Extension="rels"/>`+this.sheets.map(e=>`<Override ContentType="${is}.worksheet+xml" PartName="/xl/worksheets/sheet${e.id}.xml"/>`).join(``)+`<Override ContentType="${is}.sharedStrings+xml" PartName="/xl/sharedStrings.xml"/><Override ContentType="${is}.styles+xml" PartName="/xl/styles.xml" /><Override ContentType="${is}.sheet.main+xml" PartName="/xl/workbook.xml"/></Types>`},{name:`_rels/.rels`,xml:`<Relationships xmlns="${ss}/relationships"><Relationship Id="rId1" Type="${cs}/officeDocument" Target="xl/workbook.xml"/></Relationships>`}],t=this.sheets.map(e=>{let t=0,n=e.data.map((e,n)=>{let r=this.frozen&&n===0?` s="1"`:``;e.length>t&&(t=e.length);let i=e.map((e,t)=>{let i=this.colName(t)+(n+1);return typeof e==`number`?`<c r="${i}"${r}><v>${e}</v></c>`:e instanceof Date?`<c s="${e.getHours()||e.getMinutes()||e.getSeconds()?3:2}"><v>${this.dateToExcelDate(e)}</v></c>`:`<c t="inlineStr"${r}><is><t>${this.escapeXml(e.toString())}</t></is></c>`});return`<row r="${n+1}">${i.join(``)}</row>`});return{name:`xl/worksheets/sheet${e.id}.xml`,xml:`<worksheet xmlns="${os}"><sheetViews><sheetView workbookViewId="0"`+(this.frozen?` tabSelected="1"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView>`:`/>`)+`</sheetViews><sheetFormatPr customHeight="1" defaultColWidth="17.5" defaultRowHeight="15.75"/><sheetData>${n.join(``)}</sheetData>`+(this.autoFilter?`<autoFilter ref="A1:${this.colName(t)}${e.data.length}"/>`:``)+`</worksheet>`}}),n=new ts(this._filename,!1);return[...e,...t].forEach(e=>n.addFileFromString(e.name,e.xml)),this.buffer=n.generate(),this.buffer}colName(e){return e<26?String.fromCharCode(e+65):String.fromCharCode(Math.floor(e/26+64))+String.fromCharCode(Math.floor(e%26+65))}escapeXml(e){return e.replace(/[<>&'"]/gu,e=>[`&lt;`,`&gt;`,`&amp;`,`&apos;`,`&quot;`][`<>&'"`.indexOf(e)])}dateToExcelDate(e){return 25569+(e.getTime()-e.getTimezoneOffset()*6e4)/864e5}}})))()}function fs(){return(fs=e((()=>{w(),E()})))()}function ps(){return(ps=e((()=>{w(),E()})))()}function ms(){return(ms=e((()=>{w(),E()})))()}function hs(){return(hs=e((()=>{w(),E()})))()}function gs(){return(gs=e((()=>{w(),E()})))()}var _s;function vs(){return(vs=e((()=>{w(),E(),_s=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>T`
  <svg
    slot=${g(e)}
    class=${`announcement-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${r}
    height=${i}
    style=${g(a)}
  >
    ${C(t,()=>ee`<title>${t}</title>`)}
    <path
      d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"
    />
  </svg>
`})))()}function ys(){return(ys=e((()=>{w(),E()})))()}function bs(){return(bs=e((()=>{w(),E()})))()}function xs(){return(xs=e((()=>{w(),E()})))()}function Ss(){return(Ss=e((()=>{w(),E()})))()}function Cs(){return(Cs=e((()=>{w(),E()})))()}function ws(){return(ws=e((()=>{w(),E()})))()}function Ts(){return(Ts=e((()=>{w(),E()})))()}function Es(){return(Es=e((()=>{w(),E()})))()}function Ds(){return(Ds=e((()=>{w(),E()})))()}function Os(){return(Os=e((()=>{w(),E()})))()}var ks;function As(){return(As=e((()=>{w(),E(),ks=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>T`
  <svg
    slot=${g(e)}
    class=${`delete-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${r}
    height=${i}
    style=${g(a)}
  >
    ${C(t,()=>ee`<title>${t}</title>`)}
    <path
      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
    />
  </svg>
`})))()}function js(){return(js=e((()=>{w(),E()})))()}function Ms(){return(Ms=e((()=>{w(),E()})))()}function Ns(){return(Ns=e((()=>{w(),E()})))()}var Ps;function Fs(){return(Fs=e((()=>{w(),E(),Ps=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>T`
  <svg
    slot=${g(e)}
    class=${`error-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${r}
    height=${i}
    style=${g(a)}
  >
    ${C(t,()=>ee`<title>${t}</title>`)}
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
    />
  </svg>
`})))()}function Is(){return(Is=e((()=>{w(),E()})))()}function Ls(){return(Ls=e((()=>{w(),E()})))()}function Rs(){return(Rs=e((()=>{w(),E()})))()}function zs(){return(zs=e((()=>{w(),E()})))()}function Bs(){return(Bs=e((()=>{w(),E()})))()}function Vs(){return(Vs=e((()=>{w(),E()})))()}function Hs(){return(Hs=e((()=>{w(),E()})))()}function Us(){return(Us=e((()=>{w(),E()})))()}function Ws(){return(Ws=e((()=>{w(),E()})))()}function Gs(){return(Gs=e((()=>{w(),E()})))()}function Ks(){return(Ks=e((()=>{w(),E()})))()}function qs(){return(qs=e((()=>{w(),E()})))()}function Js(){return(Js=e((()=>{w(),E()})))()}function Ys(){return(Ys=e((()=>{w(),E()})))()}function Xs(){return(Xs=e((()=>{w(),E()})))()}function Zs(){return(Zs=e((()=>{w(),E()})))()}function Qs(){return(Qs=e((()=>{w(),E()})))()}function $s(){return($s=e((()=>{w(),E()})))()}function ec(){return(ec=e((()=>{w(),E()})))()}function tc(){return(tc=e((()=>{w(),E()})))()}function nc(){return(nc=e((()=>{w(),E()})))()}function rc(){return(rc=e((()=>{w(),E()})))()}function ic(){return(ic=e((()=>{w(),E()})))()}function ac(){return(ac=e((()=>{w(),E()})))()}function oc(){return(oc=e((()=>{w(),E()})))()}function sc(){return(sc=e((()=>{w(),E()})))()}function cc(){return(cc=e((()=>{w(),E()})))()}function lc(){return(lc=e((()=>{w(),E()})))()}function uc(){return(uc=e((()=>{w(),E()})))()}function dc(){return(dc=e((()=>{w(),E()})))()}function fc(){return(fc=e((()=>{w(),E()})))()}function pc(){return(pc=e((()=>{w(),E()})))()}function mc(){return(mc=e((()=>{w(),E()})))()}function hc(){return(hc=e((()=>{w(),E()})))()}function gc(){return(gc=e((()=>{w(),E()})))()}function _c(){return(_c=e((()=>{w(),E()})))()}function vc(){return(vc=e((()=>{w(),E()})))()}function yc(){return(yc=e((()=>{w(),E()})))()}function bc(){return(bc=e((()=>{w(),E()})))()}function xc(){return(xc=e((()=>{w(),E()})))()}function Sc(){return(Sc=e((()=>{w(),E()})))()}function Cc(){return(Cc=e((()=>{w(),E()})))()}function wc(){return(wc=e((()=>{w(),E()})))()}function Tc(){return(Tc=e((()=>{w(),E()})))()}function Ec(){return(Ec=e((()=>{w(),E()})))()}function Dc(){return(Dc=e((()=>{fs(),ps(),ms(),hs(),gs(),vs(),ys(),bs(),xs(),Ss(),Cs(),ws(),Ts(),Es(),Ds(),Os(),As(),js(),Ms(),Ns(),Fs(),Is(),Ls(),Rs(),zs(),Bs(),Vs(),Hs(),Us(),Ws(),Gs(),Ks(),qs(),Js(),Ys(),Xs(),Zs(),Qs(),$s(),ec(),tc(),nc(),rc(),ic(),ac(),oc(),sc(),cc(),lc(),uc(),dc(),fc(),pc(),mc(),hc(),gc(),_c(),vc(),yc(),bc(),xc(),Sc(),Cc(),wc(),Tc(),Ec()})))()}var Oc,kc;function Ac(){return(Ac=e((()=>{Ae(),Oc=(e,t)=>{Object.assign(e.style,{display:t?``:`none`})},kc=class extends HTMLElement{static get observedAttributes(){return[`opened`]}toggle=ke(`height`);constructor(){super();let e=new CSSStyleSheet;e.replaceSync(`
      :host { display: block; }
		`);let t=this.attachShadow({mode:`open`});t.appendChild(document.createElement(`slot`)),t.adoptedStyleSheets=[e]}connectedCallback(){Oc(this,this.getAttribute(`opened`)!=null)}attributeChangedCallback(e,t,n){if(e===`opened`){let e=n!=null;return this.isConnected?this.toggle(this,e):Oc(this,e)}}},customElements.define(`cosmoz-collapse`,kc)})))()}function jc(){return(jc=e((()=>{Ac()})))()}function Mc(e){return e===`match-gap`?1/0:parseInt(e)}function Nc(e){return e===`auto`?1/0:parseInt(e)}function Pc(e){return e===`horizontal`?`column`:`row`}function Fc(e){return e===`horizontal`?`row`:`column`}function Ic(e){return e===`horizontal`?[`left`,`right`]:[`top`,`bottom`]}function Lc(e){return e===`horizontal`?[`top`,`bottom`]:[`left`,`right`]}var Rc;function zc(){return(zc=e((()=>{xe(),Rc=class extends ye{constructor(){super(...arguments),this._itemSize={},this._gaps={},this._padding={}}_getDefaultConfig(){return Object.assign({},super._getDefaultConfig(),{itemSize:{width:`300px`,height:`300px`},gap:`8px`,padding:`match-gap`})}get _gap(){return this._gaps.row}get _idealSize(){return this._itemSize[ve(this.direction)]}get _idealSize1(){return this._itemSize[ve(this.direction)]}get _idealSize2(){return this._itemSize[be(this.direction)]}get _gap1(){return this._gaps[Pc(this.direction)]}get _gap2(){return this._gaps[Fc(this.direction)]}get _padding1(){let e=this._padding,[t,n]=Ic(this.direction);return[e[t],e[n]]}get _padding2(){let e=this._padding,[t,n]=Lc(this.direction);return[e[t],e[n]]}set itemSize(e){let t=this._itemSize;typeof e==`string`&&(e={width:e,height:e});let n=parseInt(e.width),r=parseInt(e.height);n!==t.width&&(t.width=n,this._triggerReflow()),r!==t.height&&(t.height=r,this._triggerReflow())}set gap(e){this._setGap(e)}_setGap(e){let t=e.split(` `).map(e=>Nc(e)),n=this._gaps;t[0]!==n.row&&(n.row=t[0],this._triggerReflow()),t[1]===void 0?t[0]!==n.column&&(n.column=t[0],this._triggerReflow()):t[1]!==n.column&&(n.column=t[1],this._triggerReflow())}set padding(e){let t=this._padding,n=e.split(` `).map(e=>Mc(e));n.length===1?(t.top=t.right=t.bottom=t.left=n[0],this._triggerReflow()):n.length===2?(t.top=t.bottom=n[0],t.right=t.left=n[1],this._triggerReflow()):n.length===3?(t.top=n[0],t.right=t.left=n[1],t.bottom=n[2],this._triggerReflow()):n.length===4&&([`top`,`right`,`bottom`,`left`].forEach((e,r)=>t[e]=n[r]),this._triggerReflow())}}})))()}var Bc;function Vc(){return(Vc=e((()=>{zc(),xe(),Bc=class extends Rc{constructor(){super(...arguments),this._metrics=null,this.flex=null,this.justify=null}_getDefaultConfig(){return Object.assign({},super._getDefaultConfig(),{flex:!1,justify:`start`})}set gap(e){super._setGap(e)}_updateLayout(){let e=this.justify,[t,n]=this._padding1,[r,i]=this._padding2;[`_gap1`,`_gap2`].forEach(t=>{let n=this[t];if(n===1/0&&![`space-between`,`space-around`,`space-evenly`].includes(e))throw Error(`grid layout: gap can only be set to 'auto' when justify is set to 'space-between', 'space-around' or 'space-evenly'`);if(n===1/0&&t===`_gap2`)throw Error(`grid layout: ${Fc(this.direction)}-gap cannot be set to 'auto' when direction is set to ${this.direction}`)});let a=this.flex||[`start`,`center`,`end`].includes(e),o={rolumns:-1,itemSize1:-1,itemSize2:-1,gap1:this._gap1===1/0?-1:this._gap1,gap2:a?this._gap2:0,padding1:{start:t===1/0?this._gap1:t,end:n===1/0?this._gap1:n},padding2:a?{start:r===1/0?this._gap2:r,end:i===1/0?this._gap2:i}:{start:0,end:0},positions:[]},s=this._viewDim2-o.padding2.start-o.padding2.end;if(s<=0)o.rolumns=0;else{let r=a?o.gap2:0,i=0,c=0;if(s>=this._idealSize2&&(i=Math.floor((s-this._idealSize2)/(this._idealSize2+r))+1,c=i*this._idealSize2+(i-1)*r),this.flex)switch((s-c)/(this._idealSize2+r)>=.5&&(i+=1),o.rolumns=i,o.itemSize2=Math.round((s-r*(i-1))/i),this.flex===!0?`area`:this.flex.preserve){case`aspect-ratio`:o.itemSize1=Math.round(this._idealSize1/this._idealSize2*o.itemSize2);break;case ve(this.direction):o.itemSize1=Math.round(this._idealSize1);break;default:o.itemSize1=Math.round(this._idealSize1*this._idealSize2/o.itemSize2)}else o.itemSize1=this._idealSize1,o.itemSize2=this._idealSize2,o.rolumns=i;let l;if(a){let t=o.rolumns*o.itemSize2+(o.rolumns-1)*o.gap2;l=this.flex||e===`start`?o.padding2.start:e===`end`?this._viewDim2-o.padding2.end-t:Math.round(this._viewDim2/2-t/2)}else{let r=s-o.rolumns*o.itemSize2;e===`space-between`?(o.gap2=Math.round(r/(o.rolumns-1)),l=0):e===`space-around`?(o.gap2=Math.round(r/o.rolumns),l=Math.round(o.gap2/2)):(o.gap2=Math.round(r/(o.rolumns+1)),l=o.gap2),this._gap1===1/0&&(o.gap1=o.gap2,t===1/0&&(o.padding1.start=l),n===1/0&&(o.padding1.end=l))}for(let e=0;e<o.rolumns;e++)o.positions.push(l),l+=o.itemSize2+o.gap2}this._metrics=o}}})))()}var Hc;function Uc(){return(Uc=e((()=>{xe(),Vc(),Hc=class extends Bc{get _delta(){return this._metrics.itemSize1+this._metrics.gap1}_getItemSize(e){return{[this._sizeDim]:this._metrics.itemSize1,[this._secondarySizeDim]:this._metrics.itemSize2}}_getActiveItems(){let e=this._metrics,{rolumns:t}=e;if(t===0)this._first=-1,this._last=-1,this._physicalMin=0,this._physicalMax=0;else{let{padding1:n}=e,r=Math.max(0,this._scrollPosition-this._overhang),i=Math.min(this._scrollSize,this._scrollPosition+this._viewDim1+this._overhang),a=Math.max(0,Math.floor((r-n.start)/this._delta)),o=Math.max(0,Math.ceil((i-n.start)/this._delta));this._first=a*t,this._last=Math.min(o*t-1,this.items.length-1),this._physicalMin=n.start+this._delta*a,this._physicalMax=n.start+this._delta*o}}_getItemPosition(e){let{rolumns:t,padding1:n,positions:r,itemSize1:i,itemSize2:a}=this._metrics;return{[this._positionDim]:n.start+Math.floor(e/t)*this._delta,[this._secondaryPositionDim]:r[e%t],[ve(this.direction)]:i,[be(this.direction)]:a}}_updateScrollSize(){let{rolumns:e,gap1:t,padding1:n,itemSize1:r}=this._metrics,i=1;if(e>0){let a=Math.ceil(this.items.length/e);i=n.start+a*r+(a-1)*t+n.end}this._scrollSize=i}}})))()}export{Ya as A,Hr as B,Do as C,to as D,ro as E,Ka as F,jn as G,Y as H,Sa as I,hn as J,gn as K,Ca as L,Qa as M,qa as N,no as O,Ja as P,De as Q,ya as R,Oo as S,co as T,Dr as U,Br as V,Er as W,Pe as X,pn as Y,Ne as Z,Lo as _,Ps as a,Ro as b,As as c,us as d,ds as f,Vo as g,Ho as h,Dc as i,Za as j,$a as k,_s as l,Jo as m,Uc as n,Fs as o,Yo as p,vn as q,jc as r,ks as s,Hc as t,vs as u,Bo as v,yo as w,Io as x,zo as y,xa as z};