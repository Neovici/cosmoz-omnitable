import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{$ as t,C as n,Ct as r,Dt as i,Gt as a,Ht as o,It as s,Jt as c,Kt as l,M as u,Mt as d,N as f,P as p,Pt as m,Q as h,Rt as g,S as _,St as v,Tt as y,U as b,Ut as x,X as S,Xt as C,Yt as w,Z as T,Zt as ee,_ as te,a as ne,at as re,et as ie,g as ae,h as oe,it as se,j as ce,nt as le,o as ue,rt as de,tt as fe,v as pe,vt as E,wt as me,x as he,yt as D}from"./iframe-Bo69QyTO.js";var ge;function _e(){return(_e=e((()=>{E(),ge=x`
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
`})))()}var ve,ye;function be(){return(be=e((()=>{u(),ce(),E(),C(),T(),_e(),ve=[`variant`,`size`,`disabled`,`full-width`,`icon-only`,`tooltip`,`tooltip-placement`,`type`,`value`,`href`,`target`,`rel`,`download`,`aria-expanded`,`aria-label`,`aria-pressed`],ye=e=>{let{disabled:t=!1,tooltip:n,tooltipPlacement:r,type:i=`button`,href:a,target:s,rel:c,download:u}=e,d=!!t;o(()=>{let t=t=>{e.disabled&&t.stopImmediatePropagation()};return e.addEventListener(`click`,t,{capture:!0}),()=>e.removeEventListener(`click`,t,{capture:!0})},[e.disabled]);let f=w`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`,p=S(a!=null,()=>w`
			<a
				href=${a}
				class="button"
				part="button"
				aria-disabled=${d?`true`:l}
				aria-expanded=${h(e.getAttribute(`aria-expanded`)??void 0)}
				aria-label=${h(e.getAttribute(`aria-label`)??void 0)}
				target=${h(s)}
				rel=${h(c)}
				download=${h(u)}
				>${f}</a
			>
		`,()=>w`
			<button
				type=${i}
				class="button"
				part="button"
				?disabled=${d}
				aria-expanded=${h(e.getAttribute(`aria-expanded`)??void 0)}
				aria-label=${h(e.getAttribute(`aria-label`)??void 0)}
				aria-pressed=${h(e.getAttribute(`aria-pressed`)??void 0)}
			>
				${f}
			</button>
		`);return w`<cosmoz-tooltip
		heading=${h(n??void 0)}
		placement=${h(r??void 0)}
		?disabled=${d}
	>
		${p}
	</cosmoz-tooltip>`},customElements.define(`cosmoz-button`,D(ye,{observedAttributes:ve,styleSheets:[f,ge],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}function xe(){return(xe=e((()=>{be()})))()}function Se(){return(Se=e((()=>{C(),T()})))()}function Ce(){return(Ce=e((()=>{C(),T()})))()}function we(){return(we=e((()=>{C(),T()})))()}function Te(){return(Te=e((()=>{C(),T()})))()}function Ee(){return(Ee=e((()=>{C(),T()})))()}var De;function Oe(){return(Oe=e((()=>{C(),T(),De=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>w`
  <svg
    slot=${h(e)}
    class=${`announcement-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${r}
    height=${i}
    style=${h(a)}
  >
    ${S(t,()=>ee`<title>${t}</title>`)}
    <path
      d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"
    />
  </svg>
`})))()}function ke(){return(ke=e((()=>{C(),T()})))()}function Ae(){return(Ae=e((()=>{C(),T()})))()}function je(){return(je=e((()=>{C(),T()})))()}function Me(){return(Me=e((()=>{C(),T()})))()}function Ne(){return(Ne=e((()=>{C(),T()})))()}function Pe(){return(Pe=e((()=>{C(),T()})))()}function Fe(){return(Fe=e((()=>{C(),T()})))()}function Ie(){return(Ie=e((()=>{C(),T()})))()}function Le(){return(Le=e((()=>{C(),T()})))()}function Re(){return(Re=e((()=>{C(),T()})))()}var ze;function Be(){return(Be=e((()=>{C(),T(),ze=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>w`
  <svg
    slot=${h(e)}
    class=${`delete-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${r}
    height=${i}
    style=${h(a)}
  >
    ${S(t,()=>ee`<title>${t}</title>`)}
    <path
      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
    />
  </svg>
`})))()}function Ve(){return(Ve=e((()=>{C(),T()})))()}function He(){return(He=e((()=>{C(),T()})))()}function Ue(){return(Ue=e((()=>{C(),T()})))()}var We;function Ge(){return(Ge=e((()=>{C(),T(),We=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>w`
  <svg
    slot=${h(e)}
    class=${`error-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${r}
    height=${i}
    style=${h(a)}
  >
    ${S(t,()=>ee`<title>${t}</title>`)}
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
    />
  </svg>
`})))()}function Ke(){return(Ke=e((()=>{C(),T()})))()}function qe(){return(qe=e((()=>{C(),T()})))()}function Je(){return(Je=e((()=>{C(),T()})))()}function Ye(){return(Ye=e((()=>{C(),T()})))()}function Xe(){return(Xe=e((()=>{C(),T()})))()}function Ze(){return(Ze=e((()=>{C(),T()})))()}function Qe(){return(Qe=e((()=>{C(),T()})))()}function $e(){return($e=e((()=>{C(),T()})))()}function et(){return(et=e((()=>{C(),T()})))()}function tt(){return(tt=e((()=>{C(),T()})))()}function nt(){return(nt=e((()=>{C(),T()})))()}function rt(){return(rt=e((()=>{C(),T()})))()}function it(){return(it=e((()=>{C(),T()})))()}function at(){return(at=e((()=>{C(),T()})))()}function ot(){return(ot=e((()=>{C(),T()})))()}function st(){return(st=e((()=>{C(),T()})))()}function ct(){return(ct=e((()=>{C(),T()})))()}function lt(){return(lt=e((()=>{C(),T()})))()}function ut(){return(ut=e((()=>{C(),T()})))()}function dt(){return(dt=e((()=>{C(),T()})))()}function ft(){return(ft=e((()=>{C(),T()})))()}function pt(){return(pt=e((()=>{C(),T()})))()}function mt(){return(mt=e((()=>{C(),T()})))()}function ht(){return(ht=e((()=>{C(),T()})))()}function gt(){return(gt=e((()=>{C(),T()})))()}function _t(){return(_t=e((()=>{C(),T()})))()}function vt(){return(vt=e((()=>{C(),T()})))()}function yt(){return(yt=e((()=>{C(),T()})))()}function bt(){return(bt=e((()=>{C(),T()})))()}function xt(){return(xt=e((()=>{C(),T()})))()}function St(){return(St=e((()=>{C(),T()})))()}function Ct(){return(Ct=e((()=>{C(),T()})))()}function wt(){return(wt=e((()=>{C(),T()})))()}function Tt(){return(Tt=e((()=>{C(),T()})))()}function Et(){return(Et=e((()=>{C(),T()})))()}function Dt(){return(Dt=e((()=>{C(),T()})))()}function Ot(){return(Ot=e((()=>{C(),T()})))()}function kt(){return(kt=e((()=>{C(),T()})))()}function At(){return(At=e((()=>{C(),T()})))()}function jt(){return(jt=e((()=>{C(),T()})))()}function Mt(){return(Mt=e((()=>{C(),T()})))()}function Nt(){return(Nt=e((()=>{C(),T()})))()}function Pt(){return(Pt=e((()=>{C(),T()})))()}function Ft(){return(Ft=e((()=>{C(),T()})))()}function It(){return(It=e((()=>{C(),T()})))()}function Lt(){return(Lt=e((()=>{Se(),Ce(),we(),Te(),Ee(),Oe(),ke(),Ae(),je(),Me(),Ne(),Pe(),Fe(),Ie(),Le(),Re(),Be(),Ve(),He(),Ue(),Ge(),Ke(),qe(),Je(),Ye(),Xe(),Ze(),Qe(),$e(),et(),tt(),nt(),rt(),it(),at(),ot(),st(),ct(),lt(),ut(),dt(),ft(),pt(),mt(),ht(),gt(),_t(),vt(),yt(),bt(),xt(),St(),Ct(),wt(),Tt(),Et(),Dt(),Ot(),kt(),At(),jt(),Mt(),Nt(),Pt(),Ft(),It()})))()}var Rt,zt;function Bt(){return(Bt=e((()=>{Rt={duration:250},zt=e=>(t,n,r)=>{let i=`max`+e.charAt(0).toUpperCase()+e.slice(1);Object.assign(t.style,{[i]:``,display:``,overflow:`hidden`});let{[e]:a}=t.getBoundingClientRect(),o=[0,a],[s,c]=n?o:o.slice().reverse(),l=t.animate([{[i]:`${s}px`},{[i]:`${c}px`}],{...Rt,...r});l.onfinish=()=>Object.assign(t.style,{[i]:``,display:n?``:`none`,overflow:n?``:`visible`})}})))()}var Vt,Ht,Ut;function Wt(){return(Wt=e((()=>{C(),me(),Vt=`important`,Ht=` !`+Vt,Ut=v(class extends r{constructor(e){if(super(e),e.type!==y.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(Ht);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?Vt:``):n[e]=r}}return c}})})))()}var Gt;function Kt(){return(Kt=e((()=>{Gt=(e=HTMLElement)=>class extends e{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent(`connected`))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent(`disconnected`))}}})))()}var qt,Jt;function Yt(){return(Yt=e((()=>{E(),C(),Kt(),qt=x`
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
`,Jt=()=>w`<div class="wrap" part="wrap"><slot></slot></div>`,customElements.define(`cosmoz-dropdown-content`,Gt(D(Jt,{styleSheets:[qt]})))})))()}function Xt(e,t,n){return j(e,A(t,n))}function Zt(e,t){return typeof e==`function`?e(t):e}function O(e){return e.split(`-`)[0]}function Qt(e){return e.split(`-`)[1]}function $t(e){return e===`x`?`y`:`x`}function en(e){return e===`y`?`height`:`width`}function k(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function tn(e){return $t(k(e))}function nn(e,t,n){n===void 0&&(n=!1);let r=Qt(e),i=tn(e),a=en(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=cn(o)),[o,cn(o)]}function rn(e){let t=cn(e);return[an(e),t,an(t)]}function an(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}function on(e,t,n){switch(e){case`top`:case`bottom`:return n?t?gn:hn:t?hn:gn;case`left`:case`right`:return t?_n:vn;default:return[]}}function sn(e,t,n,r){let i=Qt(e),a=on(O(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(an)))),a}function cn(e){let t=O(e);return mn[t]+e.slice(t.length)}function ln(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function un(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:ln(e)}function dn(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}var A,j,fn,pn,M,mn,hn,gn,_n,vn;function yn(){return(yn=e((()=>{A=Math.min,j=Math.max,fn=Math.round,pn=Math.floor,M=e=>({x:e,y:e}),mn={left:`right`,right:`left`,bottom:`top`,top:`bottom`},hn=[`left`,`right`],gn=[`right`,`left`],_n=[`top`,`bottom`],vn=[`bottom`,`top`]})))()}function bn(e,t,n){let{reference:r,floating:i}=e,a=k(t),o=tn(t),s=en(o),c=O(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=Qt(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function xn(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=Zt(t,e),p=un(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=dn(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=dn(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var Sn,Cn,wn,Tn,En;function Dn(){return(Dn=e((()=>{yn(),Sn=50,Cn=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:xn},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=bn(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<Sn&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=bn(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},wn=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=Zt(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=O(r),_=k(o),v=O(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[cn(o)]:rn(o)),x=p!==`none`;!d&&x&&b.push(...sn(o,m,p,y));let S=[o,...b],C=await s.detectOverflow(t,h),w=[],T=i.flip?.overflows||[];if(l&&w.push(C[g]),u){let e=nn(r,a,y);w.push(C[e[0]],C[e[1]])}if(T=[...T,{placement:r,overflows:w}],!w.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(u!==`alignment`||_===k(t)||T.every(e=>k(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:T},reset:{placement:t}};let n=T.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=T.filter(e=>{if(x){let t=k(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o}if(r!==n)return{reset:{placement:n}}}return{}}}},Tn=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=Zt(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=k(i),p=$t(f),m=u[p],h=u[f],g=(e,t)=>Xt(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}},En=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){let{placement:n,rects:r,platform:i,elements:a}=t,{apply:o=()=>{},...s}=Zt(e,t),c=await i.detectOverflow(t,s),l=O(n),u=Qt(n),d=k(n)===`y`,{width:f,height:p}=r.floating,m,h;l===`top`||l===`bottom`?(m=l,h=u===(await(i.isRTL==null?void 0:i.isRTL(a.floating))?`start`:`end`)?`left`:`right`):(h=l,m=u===`end`?`top`:`bottom`);let g=p-c.top-c.bottom,_=f-c.left-c.right,v=A(p-c[m],g),y=A(f-c[h],_),b=t.middlewareData.shift,x=!b,S=v,C=y;b!=null&&b.enabled.x&&(C=_),b!=null&&b.enabled.y&&(S=g),x&&!u&&(d?C=f-2*j(c.left,c.right):S=p-2*j(c.top,c.bottom)),await o({...t,availableWidth:C,availableHeight:S});let w=await i.getDimensions(a.floating);return f!==w.width||p!==w.height?{reset:{rects:!0}}:{}}}}})))()}function On(){return typeof window<`u`}function N(e){return kn(e)?(e.nodeName||``).toLowerCase():`#document`}function P(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function F(e){return((kn(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function kn(e){return On()?e instanceof Node||e instanceof P(e).Node:!1}function I(e){return On()?e instanceof Element||e instanceof P(e).Element:!1}function L(e){return On()?e instanceof HTMLElement||e instanceof P(e).HTMLElement:!1}function An(e){return!On()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof P(e).ShadowRoot}function jn(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=R(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function Mn(e){return/^(table|td|th)$/.test(N(e))}function Nn(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}function Pn(e){let t=I(e)?R(e):e;return B(t.transform)||B(t.translate)||B(t.scale)||B(t.rotate)||B(t.perspective)||!In()&&(B(t.backdropFilter)||B(t.filter))||Hn.test(t.willChange||``)||Un.test(t.contain||``)}function Fn(e){let t=z(e);for(;L(t)&&!Ln(t);){if(Pn(t))return t;if(Nn(t))return null;t=z(t)}return null}function In(){return Wn??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),Wn}function Ln(e){return/^(html|body|#document)$/.test(N(e))}function R(e){return P(e).getComputedStyle(e)}function Rn(e){return I(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function z(e){if(N(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||An(e)&&e.host||F(e);return An(t)?t.host:t}function zn(e){let t=z(e);return Ln(t)?(e.ownerDocument||e).body:L(t)&&jn(t)?t:zn(t)}function Bn(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=zn(e),i=r===e.ownerDocument?.body,a=P(r);if(i){let e=Vn(a);return t.concat(a,a.visualViewport||[],jn(r)?r:[],e&&n?Bn(e):[])}return t.concat(r,Bn(r,[],n))}function Vn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}var Hn,Un,B,Wn;function Gn(){return(Gn=e((()=>{Hn=/transform|translate|scale|rotate|perspective|filter/,Un=/paint|layout|strict|content/,B=e=>!!e&&e!==`none`})))()}function Kn(e){let t=R(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=L(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=fn(n)!==a||fn(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function qn(e){return I(e)?e:e.contextElement}function V(e){let t=qn(e);if(!L(t))return M(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Kn(t),o=(a?fn(n.width):n.width)/r,s=(a?fn(n.height):n.height)/i;return o&&Number.isFinite(o)||(o=1),s&&Number.isFinite(s)||(s=1),{x:o,y:s}}function Jn(e){let t=P(e);return!In()||!t.visualViewport?hr:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Yn(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===P(e)}function H(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=qn(e),o=M(1);t&&(r?I(r)&&(o=V(r)):o=V(e));let s=Yn(a,n,r)?Jn(a):M(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=P(a),t=I(r)?P(r):r,n=e,i=Vn(n);for(;i&&t!==n;){let e=V(i),t=i.getBoundingClientRect(),r=R(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=P(i),i=Vn(n)}}return dn({width:u,height:d,x:c,y:l})}function Xn(e,t){let n=Rn(e).scrollLeft;return t?t.left+n:H(F(e)).left+n}function Zn(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-Xn(e,n),y:n.top+t.scrollTop}}function Qn(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=F(r),s=t?Nn(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=M(1),u=M(0),d=L(r);if((d||!a)&&((N(r)!==`body`||jn(o))&&(c=Rn(r)),d)){let e=H(r);l=V(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?Zn(o,c):M(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function $n(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function er(e){let t=Rn(e),n=e.ownerDocument.body,r=j(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=j(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+Xn(e),o=-t.scrollTop;return R(n).direction===`rtl`&&(a+=j(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}function tr(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=P(e),a=F(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!In()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if(Xn(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=gr&&(s-=o)}return{width:s,height:c,x:l,y:u}}function nr(e,t){let n=H(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=V(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function rr(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=tr(e,n,t);else if(t===`document`)r=er(F(e));else if(I(t))r=nr(t,n);else{let n=Jn(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return dn(r)}function ir(e,t){let n=t.get(e);if(n)return n;let r=Bn(e,[],!1).filter(e=>I(e)&&N(e)!==`body`),i=null,a=R(e).position===`fixed`,o=a?z(e):e;for(;I(o)&&!Ln(o);){let e=R(o),t=Pn(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=z(o)}return t.set(e,r),r}function ar(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Nn(t)?[]:ir(t,this._c):[].concat(n),r],o=rr(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=rr(t,a[e],i);s=j(n.top,s),c=A(n.right,c),l=A(n.bottom,l),u=j(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function or(e){let{width:t,height:n}=Kn(e);return{width:t,height:n}}function sr(e,t,n){let r=L(t),i=F(t),a=n===`fixed`,o=H(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=M(0);if((r||!a)&&((N(t)!==`body`||jn(i))&&(s=Rn(t)),r)){let e=H(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=Xn(i));let l=i&&!r&&!a?Zn(i,s):M(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function cr(e){return R(e).position===`static`}function lr(e,t){if(!L(e)||R(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return F(e)===n&&(n=n.ownerDocument.body),n}function ur(e,t){let n=P(e);if(Nn(e))return n;if(!L(e)){let t=z(e);for(;t&&!Ln(t);){if(I(t)&&!cr(t))return t;t=z(t)}return n}let r=lr(e,t);for(;r&&Mn(r)&&cr(r);)r=lr(r,t);return r&&Ln(r)&&cr(r)&&!Pn(r)?n:r||Fn(e)||n}function dr(e){return R(e).direction===`rtl`}function fr(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function pr(e,t,n){let r=null,i,a=F(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=pn(d),h=pn(a.clientWidth-(u+f)),g=pn(a.clientHeight-(d+p)),_=pn(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:j(0,A(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(!fr(l,e.getBoundingClientRect()))return s();if(n!==c){if(!y)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(b,{...v,root:a.ownerDocument})}catch{r=new IntersectionObserver(b,v)}r.observe(e)}let c=P(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function mr(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=qn(e),u=i||a?[...l?Bn(l):[],...t?Bn(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?pr(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?H(e):null;c&&g();function g(){let t=H(e);h&&!fr(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var hr,gr,_r,vr,yr,br,xr,Sr;function Cr(){return(Cr=e((()=>{Dn(),yn(),Gn(),hr=M(0),gr=25,_r=async function(e){let t=this.getOffsetParent||ur,n=this.getDimensions,r=await n(e.floating);return{reference:sr(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},vr={convertOffsetParentRelativeRectToViewportRelativeRect:Qn,getDocumentElement:F,getClippingRect:ar,getOffsetParent:ur,getElementRects:_r,getClientRects:$n,getDimensions:or,getScale:V,isElement:I,isRTL:dr},yr=Tn,br=wn,xr=En,Sr=(e,t,n)=>{let r=new Map,i=n??{},a={...vr,...i.platform,_c:r};return Cn(e,t,{...i,platform:a})}})))()}var wr,Tr;function Er(){return(Er=e((()=>{E(),Cr(),wr=[br({fallbackAxisSideDirection:`start`,crossAxis:!1}),yr()],Tr=({placement:e=`bottom-start`,strategy:t,middleware:n=wr}={})=>{let[r,i]=d(),[a,s]=d(),[c,l]=d();return o(()=>{if(!r||!(a instanceof HTMLElement))l(void 0);else return mr(r,a,()=>Sr(r,a,{placement:e,strategy:t,middleware:n}).then(l))},[r,a,e,t,n]),{setReference:i,setFloating:s,styles:g(()=>c?{left:`${c.x}px`,top:`${c.y}px`}:{},[c?.x,c?.y])}}})))()}var Dr,Or,kr;function Ar(){return(Ar=e((()=>{ie(),E(),Dr=e=>e.matches(`:focus-within`)?!0:(e.shadowRoot?.querySelector(`[popover]`))?.matches(`:focus-within`)??!1,Or=({disabled:e,onFocus:t})=>{let[n,r]=d(),{focused:i,closed:a}=n||{},c=i&&!e,l=fe({closed:a,onFocus:t}),u=s(e=>r(t=>({...t,closed:e})),[]),f=s(e=>{let t=e.currentTarget;return Dr(t)?r(e=>({focused:!0,closed:!e?.closed})):t.focus()},[]);return o(()=>{if(!c)return;let e=e=>{if(e.defaultPrevented)return;let{closed:t}=l;e.key===`Escape`&&!t?(e.preventDefault(),u(!0)):[`ArrowUp`,`Up`].includes(e.key)&&t&&(e.preventDefault(),u(!1))};return document.addEventListener(`keydown`,e,!0),()=>document.removeEventListener(`keydown`,e,!0)},[c]),{focused:c,active:c&&!a,setClosed:u,onToggle:f,onFocus:s(e=>{let t=Dr(e.currentTarget);r({focused:t}),l.onFocus?.(t)},[l])}},kr=e=>{let t=Or(e),{onFocus:n}=t,r=i();return o(()=>{e.setAttribute(`tabindex`,`0`);let t=e=>{clearTimeout(r.current),n(e)},i=e=>{clearTimeout(r.current);let t=e.currentTarget;r.current=setTimeout(()=>n({currentTarget:t}),30)};return e.addEventListener(`focusin`,t),e.addEventListener(`focusout`,i),()=>{clearTimeout(r.current),e.removeEventListener(`focusin`,t),e.removeEventListener(`focusout`,i)}},[n]),t}})))()}var jr,Mr,Nr;function Pr(){return(Pr=e((()=>{xe(),E(),C(),pe(),le(),Wt(),Yt(),Er(),Ar(),jr=e=>e.preventDefault(),Mr=x`
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
`,Nr=e=>{let{placement:t,strategy:n,middleware:r,render:a}=e,{active:c,onToggle:u}=kr(e),d=i(),{styles:f,setReference:p,setFloating:m}=Tr({placement:t,strategy:n,middleware:r}),h=s(e=>{d.current=e,m(e)},[m]);return o(()=>{let e=d.current;e&&(c&&!e.matches(`:popover-open`)&&e.showPopover?.(),!c&&e.matches(`:popover-open`)&&e.hidePopover?.())},[c]),w`
		<div class="anchor" part="anchor" ${de(p)}>
			<cosmoz-button
				variant="tertiary"
				@mousedown=${jr}
				@click=${u}
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
			style="${Ut(f)}"
			${de(h)}
			><slot></slot>${te([a],()=>a?.()||l)}</cosmoz-dropdown-content
		>
	`},customElements.define(`cosmoz-dropdown`,D(Nr,{styleSheets:[Mr]}))})))()}var Fr,Ir,Lr;function Rr(){return(Rr=e((()=>{E(),C(),Fr=x`
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
`,Ir=()=>w` <slot></slot> `,customElements.define(`cosmoz-dropdown-list`,D(Ir,{styleSheets:[Fr]})),Lr=({placement:e})=>w` <cosmoz-dropdown
		.placement=${e}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`,customElements.define(`cosmoz-dropdown-menu`,D(Lr))})))()}function zr(){return(zr=e((()=>{Pr(),Rr(),Ar(),t()})))()}function U(){return(U=e((()=>{window.JSCompiler_renameProperty=function(e,t){return e}})))()}function Br(e,t){if(e&&Wr.test(e)||e===`//`)return e;if(Gr===void 0){Gr=!1;try{let e=new URL(`b`,`http://a`);e.pathname=`c%20d`,Gr=e.href===`http://a/c%20d`}catch{}}if(t||=document.baseURI||window.location.href,Gr)try{return new URL(e,t).href}catch{return e}return W||(W=document.implementation.createHTMLDocument(`temp`),W.base=W.createElement(`base`),W.head.appendChild(W.base),W.anchor=W.createElement(`a`),W.body.appendChild(W.anchor)),W.base.href=t,W.anchor.href=e,W.anchor.href||e}function Vr(e,t){return e.replace(Ur,function(e,n,r,i){return n+`'`+Br(r.replace(/["']/g,``),t)+`'`+i})}function Hr(e){return e.substring(0,e.lastIndexOf(`/`)+1)}var Ur,Wr,Gr,W;function Kr(){return(Kr=e((()=>{U(),Ur=/(url\()([^)]*)(\))/g,Wr=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/})))()}var qr,Jr,Yr,Xr,Zr,Qr,$r,ei,ti,ni,ri,ii,ai,oi;function si(){return(si=e((()=>{U(),Kr(),qr=!window.ShadyDOM||!window.ShadyDOM.inUse,!window.ShadyCSS||window.ShadyCSS.nativeCss,window.customElements.polyfillWrapFlushCallback,Jr=qr&&`adoptedStyleSheets`in Document.prototype&&`replaceSync`in CSSStyleSheet.prototype&&(()=>{try{let e=new CSSStyleSheet;e.replaceSync(``);let t=document.createElement(`div`);return t.attachShadow({mode:`open`}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch{return!1}})(),Yr=window.Polymer&&window.Polymer.rootPath||Hr(document.baseURI||window.location.href),Xr=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,window.Polymer&&window.Polymer.setPassiveTouchGestures,Zr=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,Qr=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,$r=window.Polymer&&window.Polymer.legacyOptimizations||!1,ei=window.Polymer&&window.Polymer.legacyWarnings||!1,ti=window.Polymer&&window.Polymer.syncInitialRender||!1,ni=window.Polymer&&window.Polymer.legacyUndefined||!1,ri=window.Polymer&&window.Polymer.orderedComputed||!1,ii=window.Polymer&&window.Polymer.removeNestedTemplates||!1,ai=window.Polymer&&window.Polymer.fastDomIf||!1,window.Polymer&&window.Polymer.suppressTemplateNotifications,window.Polymer&&window.Polymer.legacyNoObservedAttributes,oi=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1})))()}function ci(){}var li,G;function K(){return(K=e((()=>{U(),li=0,ci.prototype.__mixinApplications,ci.prototype.__mixinSet,G=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let n=li++;function r(r){let i=r.__mixinSet;if(i&&i[n])return r;let a=t,o=a.get(r);if(!o){o=e(r),a.set(r,o);let t=Object.create(o.__mixinSet||i||null);t[n]=!0,o.__mixinSet=t}return o}return r}})))()}function ui(e,t){pi[e]=mi[e.toLowerCase()]=t}function di(e){return pi[e]||mi[e.toLowerCase()]}function fi(e){e.querySelector(`style`)&&console.warn(`dom-module %s has style outside template`,e.id)}var pi,mi,q;function hi(){return(hi=e((()=>{U(),Kr(),si(),pi={},mi={},q=class extends HTMLElement{static get observedAttributes(){return[`id`]}static import(e,t){if(e){let n=di(e);return n&&t?n.querySelector(t):n}return null}attributeChangedCallback(e,t,n,r){t!==n&&this.register()}get assetpath(){if(!this.__assetpath){let e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=Br(this.getAttribute(`assetpath`)||``,e.baseURI);this.__assetpath=Hr(t)}return this.__assetpath}register(e){if(e||=this.id,e){if(Zr&&di(e)!==void 0)throw ui(e,null),Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,ui(e,this),fi(this)}}},q.prototype.modules=pi,customElements.define(`dom-module`,q)})))()}function gi(e){return q.import(e)}function _i(e){let t=Vr((e.body?e.body:e).textContent,e.baseURI),n=document.createElement(`style`);return n.textContent=t,n}function vi(e){let t=e.trim().split(/\s+/),n=[];for(let e=0;e<t.length;e++)n.push(...yi(t[e]));return n}function yi(e){let t=gi(e);if(!t)return console.warn(`Could not find style data in module named`,e),[];if(t._styles===void 0){let e=[];e.push(...Si(t));let n=t.querySelector(`template`);n&&e.push(...bi(n,t.assetpath)),t._styles=e}return t._styles}function bi(e,t){if(!e._styles){let n=[],r=e.content.querySelectorAll(`style`);for(let e=0;e<r.length;e++){let i=r[e],a=i.getAttribute(wi);a&&n.push(...vi(a).filter(function(e,t,n){return n.indexOf(e)===t})),t&&(i.textContent=Vr(i.textContent,t)),n.push(i)}e._styles=n}return e._styles}function xi(e){let t=gi(e);return t?Si(t):[]}function Si(e){let t=[],n=e.querySelectorAll(Ci);for(let e=0;e<n.length;e++){let r=n[e];if(r.import){let e=r.import,n=r.hasAttribute(Ti);if(n&&!e._unscopedStyle){let t=_i(e);t.setAttribute(Ti,``),e._unscopedStyle=t}else e._style||=_i(e);t.push(n?e._unscopedStyle:e._style)}}return t}var Ci,wi,Ti;function Ei(){return(Ei=e((()=>{hi(),Kr(),Ci=`link[rel=import][type~=css]`,wi=`include`,Ti=`shady-unscoped`})))()}var J;function Di(){return(Di=e((()=>{J=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e})))()}function Oi(e){return e.indexOf(`.`)>=0}function Y(e){let t=e.indexOf(`.`);return t===-1?e:e.slice(0,t)}function ki(e,t){return e.indexOf(t+`.`)===0}function Ai(e,t){return t.indexOf(e+`.`)===0}function ji(e,t,n){return t+n.slice(e.length)}function Mi(e){if(Array.isArray(e)){let t=[];for(let n=0;n<e.length;n++){let r=e[n].toString().split(`.`);for(let e=0;e<r.length;e++)t.push(r[e])}return t.join(`.`)}return e}function Ni(e){return Array.isArray(e)?Mi(e).split(`.`):e.toString().split(`.`)}function X(e,t,n){let r=e,i=Ni(t);for(let e=0;e<i.length;e++){if(!r)return;let t=i[e];r=r[t]}return n&&(n.path=i.join(`.`)),r}function Pi(e,t,n){let r=e,i=Ni(t),a=i[i.length-1];if(i.length>1){for(let e=0;e<i.length-1;e++){let t=i[e];if(r=r[t],!r)return}r[a]=n}else r[t]=n;return i.join(`.`)}function Fi(){return(Fi=e((()=>{U()})))()}function Ii(e){return Ri[e]||(Ri[e]=e.indexOf(`-`)<0?e:e.replace(zi,e=>e[1].toUpperCase()))}function Li(e){return Ri[e]||(Ri[e]=e.replace(Bi,`-$1`).toLowerCase())}var Ri,zi,Bi;function Vi(){return(Vi=e((()=>{U(),Ri={},zi=/-[a-z]/g,Bi=/([A-Z])/g})))()}function Hi(){Ki=!1;let e=Z.length;for(let t=0;t<e;t++){let e=Z[t];if(e)try{e()}catch(e){setTimeout(()=>{throw e})}}Z.splice(0,e),Wi+=e}var Ui,Wi,Z,Gi,Ki,qi,Ji,Yi;function Xi(){return(Xi=e((()=>{U(),Ui=0,Wi=0,Z=[],Gi=0,Ki=!1,qi=document.createTextNode(``),new window.MutationObserver(Hi).observe(qi,{characterData:!0}),Ji={after(e){return{run(t){return window.setTimeout(t,e)},cancel(e){window.clearTimeout(e)}}},run(e,t){return window.setTimeout(e,t)},cancel(e){window.clearTimeout(e)}},Yi={run(e){return Ki||(Ki=!0,qi.textContent=Gi++),Z.push(e),Ui++},cancel(e){let t=e-Wi;if(t>=0){if(!Z[t])throw Error(`invalid async handle: `+e);Z[t]=null}}}})))()}var Zi,Qi;function $i(){return($i=e((()=>{U(),K(),Xi(),Di(),Zi=Yi,Qi=G(e=>{class t extends e{static createProperties(e){let t=this.prototype;for(let n in e)n in t||t._createPropertyAccessor(n)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty(`__dataHasAccessor`,this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){this.hasOwnProperty(JSCompiler_renameProperty(`__dataAttributes`,this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let t=this.__dataAttributes[e];return t||(t=this.constructor.attributeNameForProperty(e),this.__dataAttributes[t]=e),t}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this.__data[e]},set:t?function(){}:function(t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,n){let r=this.__data[e],i=this._shouldPropertyChange(e,t,r);return i&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=r),this.__data[e]=t,this.__dataPending[e]=t),i}_isPropertyPending(e){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(e))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Zi.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&=(this._initializeInstanceProperties(this.__dataInstanceProps),null),this.ready())}_flushProperties(){this.__dataCounter++;let e=this.__data,t=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(e,t,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,n)),this.__dataCounter--}_shouldPropertiesChange(e,t,n){return!!t}_propertiesChanged(e,t,n){}_shouldPropertyChange(e,t,n){return n!==t&&(n===n||t===t)}attributeChangedCallback(e,t,n,r){t!==n&&this._attributeToProperty(e,n),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,n,r)}_attributeToProperty(e,t,n){if(!this.__serializing){let r=this.__dataAttributes,i=r&&r[e]||e;this[i]=this._deserializeValue(t,n||this.constructor.typeForProperty(i))}}_propertyToAttribute(e,t,n){this.__serializing=!0,n=arguments.length<3?this[e]:n,this._valueToNodeAttribute(this,n,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,n){let r=this._serializeValue(t);(n===`class`||n===`name`||n===`slot`)&&(e=J(e)),r===void 0?e.removeAttribute(n):e.setAttribute(n,r===``&&window.trustedTypes?window.trustedTypes.emptyScript:r)}_serializeValue(e){switch(typeof e){case`boolean`:return e?``:void 0;default:return e?.toString()}}_deserializeValue(e,t){switch(t){case Boolean:return e!==null;case Number:return Number(e);default:return e}}}return t})})))()}function ea(e,t){if(!ta[t]){let n=e[t];n!==void 0&&(e.__data?e._setPendingProperty(t,n):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty(`__dataProto`,e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=n))}}var ta,na,ra,ia;function aa(){return(aa=e((()=>{for(U(),K(),Vi(),$i(),ta={},na=HTMLElement.prototype;na;){let e=Object.getOwnPropertyNames(na);for(let t=0;t<e.length;t++)ta[e[t]]=!0;na=Object.getPrototypeOf(na)}ra=window.trustedTypes?e=>trustedTypes.isHTML(e)||trustedTypes.isScript(e)||trustedTypes.isScriptURL(e):()=>!1,ia=G(e=>{let t=Qi(e);class n extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(Ii(e[t]))}static attributeNameForProperty(e){return Li(e)}_initializeProperties(){this.__dataProto&&=(this._initializeProtoProperties(this.__dataProto),null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){let n=this;n.hasAttribute(e)||this._valueToNodeAttribute(n,t,e)}_serializeValue(e){switch(typeof e){case`object`:if(e instanceof Date)return e.toString();if(e){if(ra(e))return e;try{return JSON.stringify(e)}catch{return``}}default:return super._serializeValue(e)}}_deserializeValue(e,t){let n;switch(t){case Object:try{n=JSON.parse(e)}catch{n=e}break;case Array:try{n=JSON.parse(e)}catch{n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:n=isNaN(e)?String(e):Number(e),n=new Date(n);break;default:n=super._deserializeValue(e,t)}return n}_definePropertyAccessor(e,t){ea(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return!!(this.__dataPending&&e in this.__dataPending)}}return n})})))()}function oa(){if(!ha){ha=!0;let e=document.createElement(`textarea`);e.placeholder=`a`,ga=e.placeholder===e.textContent}return ga}function sa(e){oa()&&e.localName===`textarea`&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}function ca(e){let t=e.getAttribute(`is`);if(t&&ma[t]){let n=e;for(n.removeAttribute(`is`),e=n.ownerDocument.createElement(t),n.parentNode.replaceChild(e,n),e.appendChild(n);n.attributes.length;){let{name:t}=n.attributes[0];_a(e,n,t),n.removeAttribute(t)}}return e}function la(e,t){let n=t.parentInfo&&la(e,t.parentInfo);if(n){for(let e=n.firstChild,r=0;e;e=e.nextSibling)if(t.parentIndex===r++)return e}else return e}function ua(e,t,n,r){r.id&&(t[r.id]=n)}function da(e,t,n){if(n.events&&n.events.length)for(let r=0,i=n.events,a;r<i.length&&(a=i[r]);r++)e._addMethodEventListenerToNode(t,a.name,a.value,e)}function fa(e,t,n,r){n.templateInfo&&(t._templateInfo=n.templateInfo,t._parentTemplateInfo=r)}function pa(e,t,n){return e=e._methodHost||e,function(t){e[n]?e[n](t,t.detail):console.warn("listener method `"+n+"` not defined")}}var ma,ha,ga,_a,va;function ya(){return(ya=e((()=>{U(),K(),ma={"dom-if":!0,"dom-repeat":!0},ha=!1,ga=!1,_a=(()=>{let e=window.trustedTypes&&window.trustedTypes.createPolicy(`polymer-template-event-attribute-policy`,{createScript:e=>e});return(t,n,r)=>{let i=n.getAttribute(r);e&&r.startsWith(`on-`)?t.setAttribute(r,e.createScript(i,r)):t.setAttribute(r,i)}})(),va=G(e=>{class t extends e{static _parseTemplate(e,t){if(!e._templateInfo){let n=e._templateInfo={};n.nodeInfoList=[],n.nestedTemplate=!!t,n.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute&&e.hasAttribute(`strip-whitespace`),this._parseTemplateContent(e,n,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,n){return this._parseTemplateNode(e.content,t,n)}static _parseTemplateNode(e,t,n){let r=!1,i=e;return i.localName==`template`&&!i.hasAttribute(`preserve-content`)?r=this._parseTemplateNestedTemplate(i,t,n)||r:i.localName===`slot`&&(t.hasInsertionPoint=!0),sa(i),i.firstChild&&this._parseTemplateChildNodes(i,t,n),i.hasAttributes&&i.hasAttributes()&&(r=this._parseTemplateNodeAttributes(i,t,n)||r),r||n.noted}static _parseTemplateChildNodes(e,t,n){if(e.localName!==`script`&&e.localName!==`style`)for(let r=e.firstChild,i=0,a;r;r=a){if(r.localName==`template`&&(r=ca(r)),a=r.nextSibling,r.nodeType===Node.TEXT_NODE){let n=a;for(;n&&n.nodeType===Node.TEXT_NODE;)r.textContent+=n.textContent,a=n.nextSibling,e.removeChild(n),n=a;if(t.stripWhiteSpace&&!r.textContent.trim()){e.removeChild(r);continue}}let o={parentIndex:i,parentInfo:n};this._parseTemplateNode(r,t,o)&&(o.infoIndex=t.nodeInfoList.push(o)-1),r.parentNode&&i++}}static _parseTemplateNestedTemplate(e,t,n){let r=e,i=this._parseTemplate(r,t);return(i.content=r.content.ownerDocument.createDocumentFragment()).appendChild(r.content),n.templateInfo=i,!0}static _parseTemplateNodeAttributes(e,t,n){let r=!1,i=Array.from(e.attributes);for(let a=i.length-1,o;o=i[a];a--)r=this._parseTemplateNodeAttribute(e,t,n,o.name,o.value)||r;return r}static _parseTemplateNodeAttribute(e,t,n,r,i){return r.slice(0,3)===`on-`?(e.removeAttribute(r),n.events=n.events||[],n.events.push({name:r.slice(3),value:i}),!0):r===`id`&&(n.id=i,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e,t){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e),t||=this.constructor._parseTemplate(e);let n=t.nodeInfoList,r=t.content||e.content,i=document.importNode(r,!0);i.__noInsertionPoint=!t.hasInsertionPoint;let a=i.nodeList=Array(n.length);i.$={};for(let e=0,r=n.length,o;e<r&&(o=n[e]);e++){let n=a[e]=la(i,o);ua(this,i.$,n,o),fa(this,n,o,t),da(this,n,o)}return i=i,i}_addMethodEventListenerToNode(e,t,n,r){r||=e;let i=pa(r,t,n);return this._addEventListenerToNode(e,t,i),i}_addEventListenerToNode(e,t,n){e.addEventListener(t,n)}_removeEventListenerFromNode(e,t,n){e.removeEventListener(t,n)}}return t})})))()}function ba(e,t,n){let r=e[t];if(!r)r=e[t]={};else if(!e.hasOwnProperty(t)&&(r=e[t]=Object.create(e[t]),n))for(let e in r){let t=r[e],n=r[e]=Array(t.length);for(let e=0;e<t.length;e++)n[e]=t[e]}return r}function xa(e,t,n,r,i,a){if(t){let o=!1,s=to++;for(let c in n){let l=t[i?Y(c):c];if(l)for(let t=0,u=l.length,d;t<u&&(d=l[t]);t++)d.info&&d.info.lastRun===s||i&&!Ca(c,d.trigger)||(d.info&&(d.info.lastRun=s),d.fn(e,c,n,r,d.info,i,a),o=!0)}return o}return!1}function Sa(e,t,n,r,i,a,o,s){let c=!1,l=t[o?Y(r):r];if(l)for(let t=0,u=l.length,d;t<u&&(d=l[t]);t++)d.info&&d.info.lastRun===n||o&&!Ca(r,d.trigger)||(d.info&&(d.info.lastRun=n),d.fn(e,r,i,a,d.info,o,s),c=!0);return c}function Ca(e,t){if(t){let n=t.name;return n==e||!!(t.structured&&ki(n,e))||!!(t.wildcard&&Ai(n,e))}return!0}function wa(e,t,n,r,i){let a=typeof i.method==`string`?e[i.method]:i.method,o=i.property;a?a.call(e,e.__data[o],r[o]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function Ta(e,t,n,r,i){let a=e[Q.NOTIFY],o,s=to++;for(let c in t)t[c]&&(a&&Sa(e,a,s,c,n,r,i)||i&&Ea(e,c,n))&&(o=!0);let c;o&&(c=e.__dataHost)&&c._invalidateProperties&&c._invalidateProperties()}function Ea(e,t,n){let r=Y(t);return r!==t&&(Da(e,Li(r)+`-changed`,n[t],t),!0)}function Da(e,t,n,r){let i={value:n,queueProperty:!0};r&&(i.path=r),J(e).dispatchEvent(new CustomEvent(t,{detail:i}))}function Oa(e,t,n,r,i,a){let o=(a?Y(t):t)==t?null:t,s=o?X(e,o):e.__data[t];o&&s===void 0&&(s=n[t]),Da(e,i.eventName,s,o)}function ka(e,t,n,r,i){let a,o=e.detail,s=o&&o.path;s?(r=ji(n,r,s),a=o&&o.value):a=e.currentTarget[n],a=i?!a:a,t[Q.READ_ONLY]&&t[Q.READ_ONLY][r]||!t._setPendingPropertyOrPath(r,a,!0,!!s)||o&&o.queueProperty||t._invalidateProperties()}function Aa(e,t,n,r,i){let a=e.__data[t];Xr&&(a=Xr(a,i.attrName,`attribute`,e)),e._propertyToAttribute(t,i.attrName,a)}function ja(e,t,n,r){let i=e[Q.COMPUTE];if(i){if(ri){to++;let a=Ma(e),o=[];for(let e in t)oo(e,i,o,a,r);let s;for(;s=o.shift();)Pa(e,``,t,n,s)&&oo(s.methodInfo,i,o,a,r);Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let a=t;for(;xa(e,i,a,n,r);)Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),a=e.__dataPending,e.__dataPending=null}}}function Ma(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;let n=e[Q.COMPUTE],{counts:r,ready:i,total:a}=Na(e),o;for(;o=i.shift();){t.set(o,t.size);let e=n[o];e&&e.forEach(e=>{let t=e.info.methodInfo;--a,--r[t]===0&&i.push(t)})}a!==0&&console.warn(`Computed graph for ${e.localName} incomplete; circular?`),e.constructor.__orderedComputedDeps=t}return t}function Na(e){let t=e[ro],n={},r=e[Q.COMPUTE],i=[],a=0;for(let e in t){let r=t[e];a+=n[e]=r.args.filter(e=>!e.literal).length+ +!!r.dynamicFn}for(let e in r)t[e]||i.push(e);return{counts:n,ready:i,total:a}}function Pa(e,t,n,r,i){let a=Ka(e,t,n,r,i);if(a===no)return!1;let o=i.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,a,!0):(e[o]=a,!1)}function Fa(e,t,n){let r=e.__dataLinkedPaths;if(r){let i;for(let a in r){let o=r[a];Ai(a,t)?(i=ji(a,o,t),e._setPendingPropertyOrPath(i,n,!0,!0)):Ai(o,t)&&(i=ji(o,a,t),e._setPendingPropertyOrPath(i,n,!0,!0))}}}function Ia(e,t,n,r,i,a,o){n.bindings=n.bindings||[];let s={kind:r,target:i,parts:a,literal:o,isCompound:a.length!==1};if(n.bindings.push(s),Va(s)){let{event:e,negate:t}=s.parts[0];s.listenerEvent=e||Li(i)+`-changed`,s.listenerNegate=t}let c=t.nodeInfoList.length;for(let n=0;n<s.parts.length;n++){let r=s.parts[n];r.compoundIndex=n,La(e,t,s,r,c)}}function La(e,t,n,r,i){if(!r.literal){if(n.kind===`attribute`&&n.target[0]===`-`)console.warn(`Cannot set attribute `+n.target+` because "-" is not a valid attribute starting character`);else{let a=r.dependencies,o={index:i,binding:n,part:r,evaluator:e};for(let n=0;n<a.length;n++){let r=a[n];typeof r==`string`&&(r=Xa(r),r.wildcard=!0),e._addTemplatePropertyEffect(t,r.rootProperty,{fn:Ra,info:o,trigger:r})}}}}function Ra(e,t,n,r,i,a,o){let s=o[i.index],c=i.binding,l=i.part;if(a&&l.source&&t.length>l.source.length&&c.kind==`property`&&!c.isCompound&&s.__isPropertyEffectsClient&&s.__dataHasAccessor&&s.__dataHasAccessor[c.target]){let r=n[t];t=ji(l.source,c.target,t),s._setPendingPropertyOrPath(t,r,!1,!0)&&e._enqueueClient(s)}else{let o=i.evaluator._evaluateBinding(e,l,t,n,r,a);o!==no&&za(e,s,c,l,o)}}function za(e,t,n,r,i){if(i=Ba(t,i,n,r),Xr&&(i=Xr(i,n.target,n.kind,t)),n.kind==`attribute`)e._valueToNodeAttribute(t,i,n.target);else{let r=n.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[r]?t[Q.READ_ONLY]&&t[Q.READ_ONLY][r]||!t._setPendingProperty(r,i)||e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,r,i)}}function Ba(e,t,n,r){if(n.isCompound){let i=e.__dataCompoundStorage[n.target];i[r.compoundIndex]=t,t=i.join(``)}return n.kind!==`attribute`&&(n.target===`textContent`||n.target===`value`&&(e.localName===`input`||e.localName===`textarea`))&&(t??=``),t}function Va(e){return!!e.target&&e.kind!=`attribute`&&e.kind!=`text`&&!e.isCompound&&e.parts[0].mode===`{`}function Ha(e,t){let{nodeList:n,nodeInfoList:r}=t;if(r.length)for(let t=0;t<r.length;t++){let i=r[t],a=n[t],o=i.bindings;if(o)for(let t=0;t<o.length;t++){let n=o[t];Ua(a,n),Wa(a,e,n)}a.__dataHost=e}}function Ua(e,t){if(t.isCompound){let n=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),r=t.parts,i=Array(r.length);for(let e=0;e<r.length;e++)i[e]=r[e].literal;let a=t.target;n[a]=i,t.literal&&t.kind==`property`&&(a===`className`&&(e=J(e)),e[a]=t.literal)}}function Wa(e,t,n){if(n.listenerEvent){let r=n.parts[0];e.addEventListener(n.listenerEvent,function(e){ka(e,t,n.target,r.source,r.negate)})}}function Ga(e,t,n,r,i,a){a=t.static||a&&(typeof a!=`object`||a[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:i,dynamicFn:a};for(let i=0,a;i<t.args.length&&(a=t.args[i]);i++)a.literal||e._addPropertyEffect(a.rootProperty,n,{fn:r,info:o,trigger:a});return a&&e._addPropertyEffect(t.methodName,n,{fn:r,info:o}),o}function Ka(e,t,n,r,i){let a=e._methodHost||e,o=a[i.methodName];if(o){let r=e._marshalArgs(i.args,t,n);return r===no?no:o.apply(a,r)}i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}function qa(e){let t=``;for(let n=0;n<e.length;n++){let r=e[n].literal;t+=r||``}return t}function Ja(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:so};return t[2].trim()?Ya(t[2].replace(/\\,/g,`&comma;`).split(`,`),e):e}return null}function Ya(e,t){return t.args=e.map(function(e){let n=Xa(e);return n.literal||(t.static=!1),n},this),t}function Xa(e){let t=e.trim().replace(/&comma;/g,`,`).replace(/\\(.)/g,`$1`),n={name:t,value:``,literal:!1},r=t[0];switch(r===`-`&&(r=t[1]),r>=`0`&&r<=`9`&&(r=`#`),r){case`'`:case`"`:n.value=t.slice(1,-1),n.literal=!0;break;case`#`:n.value=Number(t),n.literal=!0}return n.literal||(n.rootProperty=Y(t),n.structured=Oi(t),n.structured&&(n.wildcard=t.slice(-2)==`.*`,n.wildcard&&(n.name=t.slice(0,-2)))),n}function Za(e,t,n){let r=X(e,n);return r===void 0&&(r=t[n]),r}function Qa(e,t,n,r){let i={indexSplices:r};ni&&!e._overrideLegacyUndefined&&(t.splices=i),e.notifyPath(n+`.splices`,i),e.notifyPath(n+`.length`,t.length),ni&&!e._overrideLegacyUndefined&&(i.indexSplices=[])}function $a(e,t,n,r,i,a){Qa(e,t,n,[{index:r,addedCount:i,removed:a,object:t,type:`splice`}])}function eo(e){return e[0].toUpperCase()+e.substring(1)}var to,no,Q,ro,io,ao,oo,so,co,lo,uo;function fo(){return(fo=e((()=>{U(),Di(),K(),Fi(),Vi(),aa(),ya(),si(),to=0,no=[],Q={COMPUTE:`__computeEffects`,REFLECT:`__reflectEffects`,NOTIFY:`__notifyEffects`,PROPAGATE:`__propagateEffects`,OBSERVE:`__observeEffects`,READ_ONLY:`__readOnly`},ro=`__computeInfo`,io=/[A-Z]/,ao=(e,t,n)=>{let r=0,i=t.length-1,a=-1;for(;r<=i;){let o=r+i>>1,s=n.get(t[o].methodInfo)-n.get(e.methodInfo);if(s<0)r=o+1;else if(s>0)i=o-1;else{a=o;break}}a<0&&(a=i+1),t.splice(a,0,e)},oo=(e,t,n,r,i)=>{let a=t[i?Y(e):e];if(a)for(let t=0;t<a.length;t++){let o=a[t];o.info.lastRun!==to&&(!i||Ca(e,o.trigger))&&(o.info.lastRun=to,ao(o.info,n,r))}},so=[],co=RegExp(`(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:"(?:[^"\\\\]|\\\\.)*")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:"(?:[^"\\\\]|\\\\.)*")))\\s*))*)?)\\)\\s*)?)(?:]]|}})`,`g`),lo=G(e=>{let t=va(ia(e));class n extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return Q}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(uo.length){let e=uo[uo.length-1];e._enqueueClient(this),this.__dataHost=e}}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[Q.READ_ONLY];for(let n in e)t&&t[n]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=e[n])}_addPropertyEffect(e,t,n){this._createPropertyAccessor(e,t==Q.READ_ONLY);let r=ba(this,t,!0)[e];r||=this[t][e]=[],r.push(n)}_removePropertyEffect(e,t,n){let r=ba(this,t,!0)[e],i=r.indexOf(n);i>=0&&r.splice(i,1)}_hasPropertyEffect(e,t){let n=this[t];return!!(n&&n[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,Q.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,Q.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,Q.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,Q.COMPUTE)}_setPendingPropertyOrPath(e,t,n,r){if(r||Y(Array.isArray(e)?e[0]:e)!==e){if(!r){let n=X(this,e);if(e=Pi(this,e,t),!e||!super._shouldPropertyChange(e,t,n))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,n))return Fa(this,e,t),!0}else if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,n);else this[e]=t;return!1}_setUnmanagedPropertyToNode(e,t,n){(n!==e[t]||typeof n==`object`)&&(t===`className`&&(e=J(e)),e[t]=n)}_setPendingProperty(e,t,n){let r=this.__dataHasPaths&&Oi(e),i=r?this.__dataTemp:this.__data;return this._shouldPropertyChange(e,t,i[e])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),r?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(r||this[Q.NOTIFY]&&this[Q.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=n),!0):!1}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let n=e[t];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let n in e)!t&&this[Q.READ_ONLY]&&this[Q.READ_ONLY][n]||this._setPendingPropertyOrPath(n,e[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,n){let r=this.__dataHasPaths;this.__dataHasPaths=!1;let i;ja(this,t,n,r),i=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(t,n,r),this._flushClients(),xa(this,this[Q.REFLECT],t,n,r),xa(this,this[Q.OBSERVE],t,n,r),i&&Ta(this,i,t,n,r),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,n){this[Q.PROPAGATE]&&xa(this,this[Q.PROPAGATE],e,t,n),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,e,t,n)}_runEffectsForTemplate(e,t,n,r){let i=(t,r)=>{xa(this,e.propertyEffects,t,n,r,e.nodeList);for(let i=e.firstChild;i;i=i.nextSibling)this._runEffectsForTemplate(i,t,n,r)};e.runEffects?e.runEffects(i,t,r):i(t,r)}linkPaths(e,t){e=Mi(e),t=Mi(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=Mi(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let n={path:``},r=X(this,e,n);Qa(this,r,n.path,t)}get(e,t){return X(t||this,e)}set(e,t,n){n?Pi(n,e,t):this[Q.READ_ONLY]&&this[Q.READ_ONLY][e]||!this._setPendingPropertyOrPath(e,t,!0)||this._invalidateProperties()}push(e,...t){let n={path:``},r=X(this,e,n),i=r.length,a=r.push(...t);return t.length&&$a(this,r,n.path,i,t.length,[]),a}pop(e){let t={path:``},n=X(this,e,t),r=!!n.length,i=n.pop();return r&&$a(this,n,t.path,n.length,0,[i]),i}splice(e,t,n,...r){let i={path:``},a=X(this,e,i);t<0?t=a.length-Math.floor(-t):t&&=Math.floor(t);let o;return o=arguments.length===2?a.splice(t):a.splice(t,n,...r),(r.length||o.length)&&$a(this,a,i.path,t,r.length,o),o}shift(e){let t={path:``},n=X(this,e,t),r=!!n.length,i=n.shift();return r&&$a(this,n,t.path,0,0,[i]),i}unshift(e,...t){let n={path:``},r=X(this,e,n),i=r.unshift(...t);return t.length&&$a(this,r,n.path,0,t.length,[]),i}notifyPath(e,t){let n;if(arguments.length==1){let r={path:``};t=X(this,e,r),n=r.path}else n=Array.isArray(e)?Mi(e):e;this._setPendingPropertyOrPath(n,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){this._addPropertyEffect(e,Q.READ_ONLY),t&&(this[`_set`+eo(e)]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,n){let r={property:e,method:t,dynamicFn:!!n};this._addPropertyEffect(e,Q.OBSERVE,{fn:wa,info:r,trigger:{name:e}}),n&&this._addPropertyEffect(t,Q.OBSERVE,{fn:wa,info:r,trigger:{name:t}})}_createMethodObserver(e,t){let n=Ja(e);if(!n)throw Error(`Malformed observer expression '`+e+`'`);Ga(this,n,Q.OBSERVE,Ka,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,Q.NOTIFY,{fn:Oa,info:{eventName:Li(e)+`-changed`,property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);t[0]===`-`?console.warn(`Property `+e+` cannot be reflected to attribute `+t+` because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.`):this._addPropertyEffect(e,Q.REFLECT,{fn:Aa,info:{attrName:t}})}_createComputedProperty(e,t,n){let r=Ja(t);if(!r)throw Error(`Malformed computed expression '`+t+`'`);let i=Ga(this,r,Q.COMPUTE,Pa,e,n);ba(this,ro)[e]=i}_marshalArgs(e,t,n){let r=this.__data,i=[];for(let a=0,o=e.length;a<o;a++){let{name:o,structured:s,wildcard:c,value:l,literal:u}=e[a];if(!u){if(c){let e=Ai(o,t),i=Za(r,n,e?t:o);l={path:e?t:o,value:i,base:e?X(r,o):i}}else l=s?Za(r,n,o):r[o]}if(ni&&!this._overrideLegacyUndefined&&l===void 0&&e.length>1)return no;i[a]=l}return i}static addPropertyEffect(e,t,n){this.prototype._addPropertyEffect(e,t,n)}static createPropertyObserver(e,t,n){this.prototype._createPropertyObserver(e,t,n)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,n){this.prototype._createComputedProperty(e,t,n)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let n=this.constructor._parseTemplate(e),r=this.__preBoundTemplateInfo==n;if(!r)for(let e in n.propertyEffects)this._createPropertyAccessor(e);if(t){if(n=Object.create(n),n.wasPreBound=r,!this.__templateInfo)this.__templateInfo=n;else{let t=e._parentTemplateInfo||this.__templateInfo,r=t.lastChild;n.parent=t,t.lastChild=n,n.previousSibling=r,r?r.nextSibling=n:t.firstChild=n}}else this.__preBoundTemplateInfo=n;return n}static _addTemplatePropertyEffect(e,t,n){let r=e.hostProps=e.hostProps||{};r[t]=!0;let i=e.propertyEffects=e.propertyEffects||{};(i[t]=i[t]||[]).push(n)}_stampTemplate(e,t){t||=this._bindTemplate(e,!0),uo.push(this);let n=super._stampTemplate(e,t);if(uo.pop(),t.nodeList=n.nodeList,!t.wasPreBound){let e=t.childNodes=[];for(let t=n.firstChild;t;t=t.nextSibling)e.push(t)}return n.templateInfo=t,Ha(this,t),this.__dataClientsReady&&(this._runEffectsForTemplate(t,this.__data,null,!1),this._flushClients()),n}_removeBoundDom(e){let t=e.templateInfo,{previousSibling:n,nextSibling:r,parent:i}=t;n?n.nextSibling=r:i&&(i.firstChild=r),r?r.previousSibling=n:i&&(i.lastChild=n),t.nextSibling=t.previousSibling=null;let a=t.childNodes;for(let e=0;e<a.length;e++){let t=a[e];J(J(t).parentNode).removeChild(t)}}static _parseTemplateNode(e,n,r){let i=t._parseTemplateNode.call(this,e,n,r);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,n);t&&(e.textContent=qa(t)||` `,Ia(this,n,r,`text`,`textContent`,t),i=!0)}return i}static _parseTemplateNodeAttribute(e,n,r,i,a){let o=this._parseBindings(a,n);if(o){let t=i,a=`property`;io.test(i)?a=`attribute`:i[i.length-1]==`$`&&(i=i.slice(0,-1),a=`attribute`);let s=qa(o);return s&&a==`attribute`&&(i==`class`&&e.hasAttribute(`class`)&&(s+=` `+e.getAttribute(i)),e.setAttribute(i,s)),a==`attribute`&&t==`disable-upgrade$`&&e.setAttribute(i,``),e.localName===`input`&&t===`value`&&e.setAttribute(t,``),e.removeAttribute(t),a===`property`&&(i=Ii(i)),Ia(this,n,r,a,i,o,s),!0}return t._parseTemplateNodeAttribute.call(this,e,n,r,i,a)}static _parseTemplateNestedTemplate(e,n,r){let i=t._parseTemplateNestedTemplate.call(this,e,n,r),a=e.parentNode,o=r.templateInfo,s=a.localName===`dom-if`,c=a.localName===`dom-repeat`;ii&&(s||c)&&(a.removeChild(e),r=r.parentInfo,r.templateInfo=o,r.noted=!0,i=!1);let l=o.hostProps;if(ai&&s)l&&(n.hostProps=Object.assign(n.hostProps||{},l),ii||(r.parentInfo.noted=!0));else for(let e in l){let t=[{mode:`{`,source:e,dependencies:[e],hostProp:!0}];Ia(this,n,r,`property`,`_host_`+e,t)}return i}static _parseBindings(e,t){let n=[],r=0,i;for(;(i=co.exec(e))!==null;){i.index>r&&n.push({literal:e.slice(r,i.index)});let a=i[1][0],o=!!i[2],s=i[3].trim(),c=!1,l=``,u=-1;a==`{`&&(u=s.indexOf(`::`))>0&&(l=s.substring(u+2),s=s.substring(0,u),c=!0);let d=Ja(s),f=[];if(d){let{args:e,methodName:n}=d;for(let t=0;t<e.length;t++){let n=e[t];n.literal||f.push(n)}let r=t.dynamicFns;(r&&r[n]||d.static)&&(f.push(n),d.dynamicFn=!0)}else f.push(s);n.push({source:s,mode:a,negate:o,customEvent:c,signature:d,dependencies:f,event:l}),r=co.lastIndex}if(r&&r<e.length){let t=e.substring(r);t&&n.push({literal:t})}return n.length?n:null}static _evaluateBinding(e,t,n,r,i,a){let o;return o=t.signature?Ka(e,n,r,i,t.signature):n==t.source?a&&Oi(n)?X(e,n):e.__data[n]:X(e,t.source),t.negate&&(o=!o),o}}return n}),uo=[]})))()}function po(){ho++}function mo(e){go.push(e)}var ho,go;function _o(){return(_o=e((()=>{ho=0,go=[]})))()}function vo(e){let t={};for(let n in e){let r=e[n];t[n]=typeof r==`function`?{type:r}:r}return t}var yo;function bo(){return(bo=e((()=>{U(),K(),_o(),$i(),yo=G(e=>{let t=Qi(e);function n(e){let t=Object.getPrototypeOf(e);return t.prototype instanceof i?t:null}function r(e){if(!e.hasOwnProperty(JSCompiler_renameProperty(`__ownProperties`,e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty(`properties`,e))){let n=e.properties;n&&(t=vo(n))}e.__ownProperties=t}return e.__ownProperties}class i extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__observedAttributes`,this))){mo(this.prototype);let e=this._properties;this.__observedAttributes=e?Object.keys(e).map(e=>this.prototype._addPropertyToAttributeMap(e)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__finalized`,this))){let e=n(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){let e=r(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__properties`,this))){let e=n(this);this.__properties=Object.assign({},e&&e._properties,r(this))}return this.__properties}static typeForProperty(e){let t=this._properties[e];return t&&t.type}_initializeProperties(){po(),this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i})})))()}var xo,So,Co;function wo(){return(wo=e((()=>{U(),si(),K(),Ei(),Kr(),hi(),fo(),bo(),Di(),xo=`3.5.2`,So=window.ShadyCSS&&window.ShadyCSS.cssBuild,Co=G(e=>{let t=yo(lo(e));function n(e){if(!e.hasOwnProperty(JSCompiler_renameProperty(`__propertyDefaults`,e))){e.__propertyDefaults=null;let t=e._properties;for(let n in t){let r=t[n];`value`in r&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[n]=r)}}return e.__propertyDefaults}function r(e){return e.hasOwnProperty(JSCompiler_renameProperty(`__ownObservers`,e))||(e.__ownObservers=e.hasOwnProperty(JSCompiler_renameProperty(`observers`,e))?e.observers:null),e.__ownObservers}function i(e,t,n,r){n.computed&&(n.readOnly=!0),n.computed&&(e._hasReadOnlyEffect(t)?console.warn(`Cannot redefine computed property '${t}'.`):e._createComputedProperty(t,n.computed,r)),n.readOnly&&!e._hasReadOnlyEffect(t)?e._createReadOnlyProperty(t,!n.computed):n.readOnly===!1&&e._hasReadOnlyEffect(t)&&console.warn(`Cannot make readOnly property '${t}' non-readOnly.`),n.reflectToAttribute&&!e._hasReflectEffect(t)?e._createReflectedProperty(t):n.reflectToAttribute===!1&&e._hasReflectEffect(t)&&console.warn(`Cannot make reflected property '${t}' non-reflected.`),n.notify&&!e._hasNotifyEffect(t)?e._createNotifyingProperty(t):n.notify===!1&&e._hasNotifyEffect(t)&&console.warn(`Cannot make notify property '${t}' non-notify.`),n.observer&&e._createPropertyObserver(t,n.observer,r[n.observer]),e._addPropertyToAttributeMap(t)}function a(e,t,n,r){if(!So){let i=t.content.querySelectorAll(`style`),a=bi(t),o=xi(n),s=t.content.firstElementChild;for(let n=0;n<o.length;n++){let i=o[n];i.textContent=e._processStyleText(i.textContent,r),t.content.insertBefore(i,s)}let c=0;for(let t=0;t<a.length;t++){let n=a[t],o=i[c];o===n?c++:(n=n.cloneNode(!0),o.parentNode.insertBefore(n,o)),n.textContent=e._processStyleText(n.textContent,r)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,n),oi&&So&&Jr){let n=t.content.querySelectorAll(`style`);if(n){let t=``;Array.from(n).forEach(e=>{t+=e.textContent,e.parentNode.removeChild(e)}),e._styleSheet=new CSSStyleSheet,e._styleSheet.replaceSync(t)}}}function o(e){let t=null;if(e&&(!Zr||Qr)&&(t=q.import(e,`template`),Zr&&!t))throw Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}class s extends t{static get polymerElementVersion(){return xo}static _finalizeClass(){t._finalizeClass.call(this);let e=r(this);e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&(typeof e==`string`?(console.error(`template getter must return HTMLTemplateElement`),e=null):$r||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(let t in e)i(this.prototype,t,e[t],e)}static createObservers(e,t){let n=this.prototype;for(let r=0;r<e.length;r++)n._createMethodObserver(e[r],t)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`_template`,this))){let e=this.prototype.hasOwnProperty(JSCompiler_renameProperty(`_template`,this.prototype))?this.prototype._template:void 0;typeof e==`function`&&(e=e()),this._template=e===void 0?this.hasOwnProperty(JSCompiler_renameProperty(`is`,this))&&o(this.is)||Object.getPrototypeOf(this.prototype).constructor.template:e}return this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`_importPath`,this))){let e=this.importMeta;if(e)this._importPath=Hr(e.url);else{let e=q.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Yr,this.importPath=this.constructor.importPath;let e=n(this.constructor);if(e)for(let t in e){let n=e[t];if(this._canApplyPropertyDefault(t)){let e=typeof n.value==`function`?n.value.call(this):n.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}_canApplyPropertyDefault(e){return!this.hasOwnProperty(e)}static _processStyleText(e,t){return Vr(e,t)}static _finalizeTemplate(e){let t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;let n=this.importPath,r=n?Br(n):``;a(this,t,e,r),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){let t=J(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:`open`,shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e),this.constructor._styleSheet&&(t.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),ti&&window.ShadyDOM&&window.ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=Br(this.importPath)),Br(e,t)}static _parseTemplateContent(e,n,r){return n.dynamicFns=n.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,n,r)}static _addTemplatePropertyEffect(e,n,r){return!ei||n in this._properties||r.info.part.signature&&r.info.part.signature.static||r.info.part.hostProp||e.nestedTemplate||console.warn(`Property '${n}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,e,n,r)}}return s})})))()}function To(e){if(e instanceof Oo)return e.value;throw Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}function Eo(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof Oo)return To(e);throw Error(`non-template value passed to Polymer's html function: ${e}`)}var Do,Oo,ko,Ao;function jo(){return(jo=e((()=>{U(),Do=window.trustedTypes&&trustedTypes.createPolicy(`polymer-html-literal`,{createHTML:e=>e}),Oo=class{constructor(e,t){Ao(e,t);let n=t.reduce((t,n,r)=>t+To(n)+e[r+1],e[0]);this.value=n.toString()}toString(){return this.value}},ko=function(e,...t){Ao(e,t);let n=document.createElement(`template`),r=t.reduce((t,n,r)=>t+Eo(n)+e[r+1],e[0]);return Do&&(r=Do.createHTML(r)),n.innerHTML=r,n},Ao=(e,t)=>{if(!Array.isArray(e)||!Array.isArray(e.raw)||t.length!==e.length-1)throw TypeError(`Invalid call to the html template tag`)}})))()}var Mo;function No(){return(No=e((()=>{wo(),jo(),Mo=Co(HTMLElement)})))()}var Po,Fo,Io,Lo,Ro,zo,Bo,Vo,Ho,Uo,Wo,Go;function Ko(){return(Ko=e((()=>{Bt(),zr(),p(),ne(),E(),No(),C(),Po=`bottom-bar-toolbar`,Fo=`bottom-bar-menu`,Io=x`
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
			var(--cz-color-bg-secondary)
		);
		border-top: 1px solid var(--cz-color-border-secondary);
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
		text-overflow: ellipsis;
		white-space: nowrap;
		flex: 0 0 auto;
		cursor: pointer;
		font-weight: var(--cz-font-weight-semibold);
		text-decoration: none;
		transition: background-color 0.15s ease, box-shadow 0.15s ease;
		white-space: nowrap;
		border: none;

		text-align: center;
		box-sizing: border-box;
		height: 40px;
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);
		background-color: var(--cz-color-bg-brand-solid);
		color: var(--cz-color-text-on-brand);
		box-shadow: var(--cz-shadow-xs-skeumorphic);
	}

	#bottomBarToolbar::slotted(:not(slot):not([unstyled])[disabled]) {
		opacity: var(--cosmoz-button-disabled-opacity, 0.15);
		pointer-events: none;
	}

	#bottomBarToolbar::slotted(:not(slot):not([unstyled]):hover) {
		background-color: var(--cz-color-bg-brand-solid-hover);
	}

	#dropdown::part(content) {
		max-width: 300px;
	}

	#dropdown::part(button) {
		cursor: pointer;
		transition: background-color 0.15s ease, box-shadow 0.15s ease;
		border: none;
		width: 40px;
		height: 40px;
		border-radius: var(--cz-radius-md);
		background-color: var(--cz-color-bg-brand-solid);
		color: var(--cz-color-text-on-brand);
		box-shadow: var(--cz-shadow-xs-skeumorphic);
	}

	#dropdown::part(button):hover {
		background-color: var(--cz-color-bg-brand-solid-hover);
	}

	:host([hide-actions]) #bottomBarToolbar,
	:host([hide-actions]) #bottomBarMenu,
	:host([hide-actions]) #dropdown {
		display: none;
	}

	:host(:not([has-menu-items])) cosmoz-dropdown-menu {
		display: none;
	}
`,Lo=Symbol(`openMenu`),Ro=e=>{let t=e.shadowRoot?.querySelector(`#dropdown`);t&&!t.hasAttribute(`hidden`)&&((t.shadowRoot?.querySelector(`cosmoz-dropdown`))?.shadowRoot?.querySelector(`#dropdownButton`))?.click()},zo=e=>e.nodeType===Node.ELEMENT_NODE&&e.getAttribute(`slot`)!==`info`&&e.tagName!==`TEMPLATE`&&e.tagName!==`STYLE`&&e.tagName!==`DOM-REPEAT`&&e.tagName!==`DOM-IF`&&e.getAttribute(`slot`)!==`extra`,Bo=e=>{let t=[...e.childNodes],n=[];for(let e of t)if(e.tagName===`SLOT`){let t=e.assignedElements({flatten:!0});n.push(...t)}else n.push(e);return n},Vo=e=>{let t=Bo(e).filter(zo).filter(e=>!e.hidden).sort((e,t)=>(Number(e.dataset.index)||0)-(Number(t.dataset.index)||0));if(t.length===0)return t;let n=t.reduce((e,t)=>parseInt(e.dataset.priority??`0`,10)>=parseInt(t.dataset.priority??`0`,10)?e:t,{dataset:{priority:`-1000`}});return[n,...t.filter(e=>e!==n)]},Ho=(e,t,n,r)=>{let i=t?Po:Fo;e.setAttribute(`slot`,i),e.setAttribute(`tabindex`,`0`),e.classList.toggle(r,!t),e.classList.toggle(n,t)},Uo=(e,t,n)=>{let r=Vo(e),{maxToolbarItems:i=1}=e;if(!(r.length>0)){e.toggleAttribute(`has-menu-items`,!1);return}let a=r.slice(0,i),o=r.slice(a.length);a.forEach(e=>Ho(e,!0,t,n)),o.forEach(e=>Ho(e,!1,t,n)),e.toggleAttribute(`has-menu-items`,o.length>0)},Wo=e=>{let{active:t=!1,maxToolbarItems:n=1}=e,r=i(!1);ue({activity:Lo,callback:()=>Ro(e),check:()=>t&&!e.hasAttribute(`hide-actions`),element:()=>e.shadowRoot?.querySelector(`#dropdown`)},[t]);let a=g(()=>zt(`height`),[]);m(()=>{r.current?a(e,t):a(e,t,{duration:0}),r.current=!0},[t]);let c=s(()=>Uo(e,`cosmoz-bottom-bar-toolbar`,`cosmoz-bottom-bar-menu`),[n]),l=i(null),u=s(()=>{let t=l.current;t&&(t.disconnect(),Bo(e).filter(zo).forEach(e=>{t.observe(e,{attributes:!0,attributeFilter:[`hidden`]})}))},[]);o(()=>{l.current=new MutationObserver(()=>{u(),c()}),u();let t=new MutationObserver(()=>{u(),c()});return t.observe(e,{childList:!0}),()=>{l.current?.disconnect(),l.current=null,t.disconnect()}},[c]);let d=s(()=>{u(),c()},[c]);return w` <div id="bar" part="bar">
			<div id="info" part="info"><slot name="info"></slot></div>
			<slot
				id="bottomBarToolbar"
				name="bottom-bar-toolbar"
				@slotchange=${d}
			></slot>
			<cosmoz-dropdown-menu id="dropdown" part="dropdown">
				${b({slot:`button`})}
				<slot id="bottomBarMenu" name="bottom-bar-menu"></slot>
			</cosmoz-dropdown-menu>
			<slot name="extra" id="extraSlot"></slot>
		</div>
		<div hidden style="display:none">
			<slot id="content" @slotchange=${d}></slot>
		</div>`},customElements.define(`cosmoz-bottom-bar`,D(Wo,{observedAttributes:[`active`,`max-toolbar-items`],styleSheets:[Io]})),Go=`
	<slot name="extra" slot="extra"></slot>
	<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
	<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
`,w(Object.assign([Go],{raw:[Go]})),ko(Object.assign([Go],{raw:[Go]}))})))()}function qo(){return(qo=e((()=>{Ko()})))()}var Jo;function Yo(){return(Yo=e((()=>{C(),me(),Jo=v(class extends r{constructor(e){if(super(e),e.type!==y.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return c}})})))()}var Xo,Zo,Qo;function $o(){return($o=e((()=>{U(),K(),Xi(),Xo=class e{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,Zo.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Zo.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(t,n,r){return t instanceof e?t._cancelAsync():t=new e,t.setConfig(n,r),t}},Zo=new Set,Qo=function(e){Zo.add(e)}})))()}function es(){return(es=e((()=>{U(),$o()})))()}var ts,ns,rs;function is(){return(is=e((()=>{ts=Symbol(`memo`),ns=e=>{let t=ts,n=ts,r;return function(i,a){if(t===i&&n===a)return r;let o=e(i,a);return r=o,t=i,n=a,o}},rs=e=>{let t=ts,n=ts,r=ts,i;return function(a,o,s){if(t===a&&n===o&&r===s)return i;let c=e(a,o,s);return i=c,t=a,n=o,r=s,c}}})))()}var as,os,ss;function cs(){return(cs=e((()=>{E(),C(),as=x`
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
`,os=()=>l,ss=D(os,{styleSheets:[as]}),customElements.define(`cosmoz-spinner`,ss)})))()}function ls(){return(ls=e((()=>{cs()})))()}var us;function ds(){return(ds=e((()=>{E(),us=a(x`
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
`)})))()}var fs,ps,ms,hs,gs,_s;function vs(){return(vs=e((()=>{he(),ds(),_(),E(),fs=[`T`,` `],ps=e=>{if(!e||typeof e!=`string`)return;let t;return fs.some(n=>e.match(n)?(t=e.split(n),!0):!1),t||[e]},ms=(e,t)=>{let n=ps(e),r=ps(t);return{minDate:Array.isArray(n)?n.shift():null,minTime:Array.isArray(n)?n.shift():null,maxDate:Array.isArray(r)?r.shift():null,maxTime:Array.isArray(r)?r.shift():null}},hs=(e,t)=>{if(e||t)return!e&&t?`T${t}`:e&&!t?e:`${e}T${t}`},gs=e=>{if(e){for(let t of fs)if(e.match(t)){let n=e.split(t);return{date:n.shift(),time:n.shift()}}return{date:e}}},_s=e=>{let{dateLabel:t,timeLabel:r,min:i,max:a,step:s=`1`,value:c}=e,{minDate:l,maxDate:u,minTime:d,maxTime:f}=g(()=>ms(i,a),[i,a]),{date:p,time:m}=g(()=>gs(c)??{},[c]);return o(()=>{e.dispatchEvent(new CustomEvent(`cosmoz-datetime-input-value-changed`,{bubbles:!0,composed:!0}))},[c]),w`
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
			@value-changed="${t=>n(e,`value`,hs(t.target.value,m))}"
			.min="${l}"
			.max="${u}"
		></cosmoz-input>
		<cosmoz-input
			label="${r}"
			type="time"
			.value="${m}"
			@value-changed="${t=>n(e,`value`,hs(p,t.target.value))}"
			step="${s}"
			.min="${d}"
			.max="${f}"
		></cosmoz-input>
	`},customElements.define(`cosmoz-datetime-input`,D(_s,{observedAttributes:[`date-label`,`time-label`,`min`,`max`,`step`],styleSheets:[us]}))})))()}function ys(){return(ys=e((()=>{vs()})))()}var bs,xs;function Ss(){return(Ss=e((()=>{bs=e=>t=>{let n=t.match(e);return n&&{result:n,url:new URL(t,document.location.origin)}},xs=(e,t)=>{for(let n of e){let e=n.rule,r=typeof e==`function`?e(t):bs(e)(t);if(r)return{...n,route:n,match:r,url:t}}}})))()}function Cs(){return(Cs=e((()=>{E()})))()}var ws,Ts,Es,Ds;function Os(){return(Os=e((()=>{E(),Ss(),ws=()=>window.location.href.replace(window.location.origin,``),Ts=()=>{let[e,t]=d(ws);return o(()=>{let e=()=>t(ws);return window.addEventListener(`popstate`,e),()=>window.removeEventListener(`popstate`,e)},[t]),e},Es=e=>{let t=Ts();return g(()=>xs(e,t),[e,t])},Ds=(e,t=null,{notify:n=!0,replace:r=!0}={})=>{(r?history.replaceState:history.pushState).call(history,t,``,e),n&&queueMicrotask(()=>window.dispatchEvent(new CustomEvent(`popstate`,{bubbles:!1})))}})))()}var ks;function As(){return(As=e((()=>{E(),Os(),ks=e=>{let t=Es(e);return{route:t,result:g(()=>{if(t){let{handle:e,...n}=t;return e(n)}},[t])}}})))()}var js,Ms;function Ns(){return(Ns=e((()=>{E(),js=(e,t,n)=>e.dispatchEvent(new CustomEvent(t,{bubbles:!1,cancelable:!1,composed:!0,...n})),Ms=(e,t,n)=>{o(()=>{n?(js(e,`route-loading`,{detail:t}),Promise.resolve(n).then(()=>js(e,`route-loaded`,{detail:t})).catch(n=>js(e,`route-error`,{detail:{route:t,error:n}}))):js(e,`route-not-found`)},[n])}})))()}var Ps;function Fs(){return(Fs=e((()=>{C(),pe(),oe(),E(),As(),Ns(),Ps=e=>{let t=e.routes,{route:n,result:r}=ks(t);return Ms(e,n,r),te([r],()=>ae(Promise.resolve(r).catch(()=>l),l))},customElements.define(`cosmoz-router`,D(Ps))})))()}function Is(){return(Is=e((()=>{Cs(),Os(),As(),Fs()})))()}var Ls,Rs,zs;function Bs(){return(Bs=e((()=>{re(),Ls=()=>new URL(location.hash.replace(/^#!?/iu,``).replace(`%23`,`#`),location.origin),Rs=(e,t=se)=>{let n=new URLSearchParams(Ls().hash.replace(`#`,``)).getAll(e);switch(n.length){case 0:return;case 1:return t(n[0]);default:return n.map(t)}},zs=(e,t=se)=>{let n=Array.from(new URLSearchParams(Ls().hash.replace(`#`,``)).entries()).filter(([t])=>t.startsWith(e)).map(([n,r])=>t([n.replace(e,``),r])).filter(([,e])=>e!=null);return Object.fromEntries(n)}})))()}function*Vs(e,t){if(e!==void 0){let n=0;for(let r of e)yield t(r,n++)}}function Hs(){return(Hs=e((()=>{})))()}function Us(e,t){return t===void 0?t={autoBom:!1}:typeof t!=`object`&&(console.warn(`Deprecated: Expected third argument to be a object`),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([`﻿`,e],{type:e.type}):e}function Ws(e,t,n){var r=new XMLHttpRequest;r.open(`GET`,e),r.responseType=`blob`,r.onload=function(){Js(r.response,t,n)},r.onerror=function(){console.error(`could not download file`)},r.send()}function Gs(e){var t=new XMLHttpRequest;t.open(`HEAD`,e,!1);try{t.send()}catch{}return t.status>=200&&t.status<=299}function Ks(e){try{e.dispatchEvent(new MouseEvent(`click`))}catch{var t=document.createEvent(`MouseEvents`);t.initMouseEvent(`click`,!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var $,qs,Js;function Ys(){return(Ys=e((()=>{$=typeof window==`object`&&window.window===window?window:typeof self==`object`&&self.self===self?self:typeof global==`object`&&global.global===global?global:void 0,qs=$.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),Js=$.saveAs||(typeof window!=`object`||window!==$?function(){}:`download`in HTMLAnchorElement.prototype&&!qs?function(e,t,n){var r=$.URL||$.webkitURL,i=document.createElement(`a`);t=t||e.name||`download`,i.download=t,i.rel=`noopener`,typeof e==`string`?(i.href=e,i.origin===location.origin?Ks(i):Gs(i.href)?Ws(e,t,n):Ks(i,i.target=`_blank`)):(i.href=r.createObjectURL(e),setTimeout(function(){r.revokeObjectURL(i.href)},4e4),setTimeout(function(){Ks(i)},0))}:`msSaveOrOpenBlob`in navigator?function(e,t,n){if(t=t||e.name||`download`,typeof e==`string`){if(Gs(e))Ws(e,t,n);else{var r=document.createElement(`a`);r.href=e,r.target=`_blank`,setTimeout(function(){Ks(r)})}}else navigator.msSaveOrOpenBlob(Us(e,n),t)}:function(e,t,n,r){if(r||=open(``,`_blank`),r&&(r.document.title=r.document.body.innerText=`downloading...`),typeof e==`string`)return Ws(e,t,n);var i=e.type===`application/octet-stream`,a=/constructor/i.test($.HTMLElement)||$.safari,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||i&&a||qs)&&typeof FileReader<`u`){var s=new FileReader;s.onloadend=function(){var e=s.result;e=o?e:e.replace(/^data:[^;]*;/,`data:attachment/file;`),r?r.location.href=e:location=e,r=null},s.readAsDataURL(e)}else{var c=$.URL||$.webkitURL,l=c.createObjectURL(e);r?r.location=l:location.href=l,r=null,setTimeout(function(){c.revokeObjectURL(l)},4e4)}}),$.saveAs=Js.saveAs=Js})))()}var Xs;function Zs(){return(Zs=e((()=>{Xs=function(e){e&&console.log(e)}})))()}var Qs;function $s(){return($s=e((()=>{Zs(),Qs=class{constructor(e,t){this._filename=e,this.buffer=null,this.lastDownloadBlobUrl=null,this._mimeType=t}generate(){}createDownloadUrl(){this.buffer||this.generate();let e=new Blob([this.buffer],{type:this._mimeType});return this.lastDownloadBlobUrl&&window.URL.revokeObjectURL(this.lastDownloadBlobUrl),this.lastDownloadBlobUrl=URL.createObjectURL(e),this.lastDownloadBlobUrl}createDownloadLink(e){let t=e instanceof HTMLAnchorElement?e:document.createElement(`a`);return typeof e==`string`&&(t.innerHTML=e),t.href=this.createDownloadUrl(),t.download=this._filename,t.hasChildNodes||(t.innerText=this._filename),Xs(`Link created for file `+this._filename),t}}})))()}var ec,tc,nc;function rc(){return(rc=e((()=>{Zs(),$s(),ec=null,tc=class extends Qs{constructor(e,t){super(e,`application/zip`),this.files=[],this.createFolderEntries=!!t;let n=new Date;this.timeInt=Math.round(n.getSeconds()/2)|n.getMinutes()<<5|n.getHours()<<11,this.dateInt=n.getFullYear()-1980<<9|n.getMonth()+1<<5|n.getDate()}addFileFromString(e,t){let n=new TextEncoder(`utf-8`).encode(t);return this.addFileFromUint8Array(e,n),this}addFileFromUint8Array(e,t){if(!(t instanceof Uint8Array))throw Error(`invalid parameter`);return this.files.push({name:e.replace(`\\`,`/`),data:t}),this}generate(){Xs(`NullZip archive generation started`);let e={};for(let t of this.files)t.size=t.data?t.data.byteLength:0,t.crc=t.data?this.crc(t.data):0,e[t.name]=t;let t=[];if(this.createFolderEntries){let n=/\//giu;for(let r of this.files){let i=r.name;for(let r=n.exec(i);r!==null;r=n.exec(i)){let n={name:i.substr(0,r.index+1),size:0,crc:0,data:new Uint8Array};e[n.name]===void 0&&(e[n.name]=n,t.push(n))}}}Array.prototype.push.apply(this.files,t),this.files.sort((e,t)=>e.name.length-t.name.length||e.name.localeCompare(t.name));let n=this.files.reduce((e,t)=>e+76+t.name.length*2+t.size,22);Xs(`Estimated file size: `+n),this.buffer=new ArrayBuffer(n);let r=new nc(this.buffer),i=this.hex2u8a(`504b0304140000000000`);for(let e of this.files)e.offs=r.i,r.writeByteArray(i),r.uint16(this.timeInt),r.uint16(this.dateInt),r.uint32(e.crc),r.uint32(e.size),r.uint32(e.size),r.uint16(e.name.length),r.uint16(0),r.writeASCII(e.name),e.size>0&&r.writeByteArray(e.data);let a=r.i,o=this.hex2u8a(`504b01023f00140000000000`);for(let e of this.files)r.writeByteArray(o),r.uint16(this.timeInt),r.uint16(this.dateInt),r.uint32(e.crc),r.uint32(e.size),r.uint32(e.size),r.uint16(e.name.length),r.uint16(0),r.uint16(0),r.uint16(0),r.uint16(0),r.uint32(e.size?32:48),r.uint32(e.offs),r.writeASCII(e.name);let s=r.i-a;return r.writeByteArray(this.hex2u8a(`504b050600000000`)),r.uint16(this.files.length),r.uint16(this.files.length),r.uint32(s),r.uint32(a),r.uint16(0),Xs(`Finished creating zip. size=`+r.i+`, predicted size=`+n),this.buffer}crc(e){let t,n,r=-1;if(!ec)for(ec=[],n=0;n<256;t=++n){for(let e=0;e<8;e++)t=t&1?3988292384^t>>>1:t>>>1;ec[n]=t}for(let t=0;t<e.byteLength;t++)r=r>>>8^ec[(r^e[t])&255];return(r^-1)>>>0}hex2u8a(e){let t=new Uint8Array(Math.ceil(e.length/2));for(let n=0;n<t.length;n++)t[n]=parseInt(e.substr(n*2,2),16);return t}},nc=class{constructor(e){this.dw=new DataView(e),this.i=0,this.le=!0,this.utf8encoder=new TextEncoder(`utf-8`)}uint8(e){this.dw.setUint8(this.i++,e)}uint16(e){this.dw.setUint16(this.i,e,this.le),this.i+=2}uint32(e){this.dw.setUint32(this.i,e,this.le),this.i+=4}writeByteArray(e){if(!(e instanceof Uint8Array))throw Error(`invalid parameter`);new Uint8Array(this.dw.buffer).set(e,this.i),this.i+=e.byteLength}writeASCII(e){for(let t=0;t<e.length;t++)this.dw.setUint8(this.i++,e.charCodeAt(t)&255)}}})))()}var ic,ac,oc,sc,cc,lc,uc;function dc(){return(dc=e((()=>{$s(),rc(),ic=`application/vnd.openxmlformats-officedocument.spreadsheetml`,ac=`http://schemas.openxmlformats.org`,oc=`${ac}/spreadsheetml/2006/main`,sc=`${ac}/package/2006`,cc=`${ac}/officeDocument/2006/relationships`,lc=[{id:164,code:`yyyy&quot;-&quot;mm&quot;-&quot;dd`},{id:165,code:`yyyy&quot;-&quot;mm&quot;-&quot;dd&quot; &quot;h&quot;:&quot;mm&quot;:&quot;ss`}],uc=class extends Qs{constructor(e,t){super(e,`${ic}.sheet`),this.sheets=[],this.frozen=!!(t&&t.frozen),this.autoFilter=!!(t&&t.filter)}addSheetFromData(e,t){let n=this.sheets.length+1;return this.sheets.push({id:n,name:this.escapeXml(t||`Sheet`+n),data:e}),this}generate(){let e=[{name:`xl/styles.xml`,xml:`<styleSheet xmlns="${oc}" xmlns:mc="${ac}/markup-compatibility/2006"><numFmts count="${lc.length}">${lc.map(e=>`<numFmt numFmtId="${e.id}" formatCode="${e.code}" />`)}</numFmts><fonts count="2"><font><sz val="10.0"/><color rgb="FF000000"/><name val="Arial"/></font><font><b/></font></fonts><fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="lightGray"/></fill></fills><borders count="1"><border><left/><right/><top/><bottom/></border></borders><cellStyleXfs count="1"><xf borderId="0" fillId="0" fontId="0" numFmtId="0" applyAlignment="1" applyFont="1"/></cellStyleXfs><cellXfs><xf borderId="0" fillId="0" fontId="0" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment/></xf><xf borderId="0" fillId="0" fontId="1" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment/></xf><xf borderId="0" fillId="0" fontId="0" numFmtId="164" xfId="0" applyAlignment="1" applyFont="1" applyNumberFormat="1"><alignment /></xf><xf borderId="0" fillId="0" fontId="0" numFmtId="165" xfId="0" applyAlignment="1" applyFont="1" applyNumberFormat="1"><alignment /></xf></cellXfs><cellStyles count="1"><cellStyle xfId="0" name="Normal" builtinId="0"/></cellStyles><dxfs count="0"/></styleSheet>`},{name:`xl/sharedStrings.xml`,xml:`<sst xmlns="${oc}" count="2" uniqueCount="2"><si><t>text here</t></si></sst>`},{name:`xl/workbook.xml`,xml:`<workbook xmlns="${oc}" xmlns:r="${cc}"><workbookPr/><sheets>`+this.sheets.map(e=>`<sheet state="visible" name="${e.name}" sheetId="${e.id}" r:id="rId${e.id+2}"/>`).join(``)+`</sheets><definedNames/><calcPr/></workbook>`},{name:`xl/_rels/workbook.xml.rels`,xml:`<Relationships xmlns="${sc}/relationships"><Relationship Id="rId1" Type="${cc}/styles" Target="styles.xml" /><Relationship Id="rId2" Type="${cc}/sharedStrings" Target="sharedStrings.xml"/>`+this.sheets.map(e=>`<Relationship Id="rId${e.id+2}" Type="${cc}/worksheet" Target="worksheets/sheet${e.id}.xml"/>`).join(``)+`</Relationships>`},{name:`[Content_Types].xml`,xml:`<Types xmlns="${sc}/content-types"><Default ContentType="application/xml" Extension="xml"/><Default ContentType="application/vnd.openxmlformats-package.relationships+xml" Extension="rels"/>`+this.sheets.map(e=>`<Override ContentType="${ic}.worksheet+xml" PartName="/xl/worksheets/sheet${e.id}.xml"/>`).join(``)+`<Override ContentType="${ic}.sharedStrings+xml" PartName="/xl/sharedStrings.xml"/><Override ContentType="${ic}.styles+xml" PartName="/xl/styles.xml" /><Override ContentType="${ic}.sheet.main+xml" PartName="/xl/workbook.xml"/></Types>`},{name:`_rels/.rels`,xml:`<Relationships xmlns="${sc}/relationships"><Relationship Id="rId1" Type="${cc}/officeDocument" Target="xl/workbook.xml"/></Relationships>`}],t=this.sheets.map(e=>{let t=0,n=e.data.map((e,n)=>{let r=this.frozen&&n===0?` s="1"`:``;e.length>t&&(t=e.length);let i=e.map((e,t)=>{let i=this.colName(t)+(n+1);return typeof e==`number`?`<c r="${i}"${r}><v>${e}</v></c>`:e instanceof Date?`<c s="${e.getHours()||e.getMinutes()||e.getSeconds()?3:2}"><v>${this.dateToExcelDate(e)}</v></c>`:`<c t="inlineStr"${r}><is><t>${this.escapeXml(e.toString())}</t></is></c>`});return`<row r="${n+1}">${i.join(``)}</row>`});return{name:`xl/worksheets/sheet${e.id}.xml`,xml:`<worksheet xmlns="${oc}"><sheetViews><sheetView workbookViewId="0"`+(this.frozen?` tabSelected="1"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView>`:`/>`)+`</sheetViews><sheetFormatPr customHeight="1" defaultColWidth="17.5" defaultRowHeight="15.75"/><sheetData>${n.join(``)}</sheetData>`+(this.autoFilter?`<autoFilter ref="A1:${this.colName(t)}${e.data.length}"/>`:``)+`</worksheet>`}}),n=new tc(this._filename,!1);return[...e,...t].forEach(e=>n.addFileFromString(e.name,e.xml)),this.buffer=n.generate(),this.buffer}colName(e){return e<26?String.fromCharCode(e+65):String.fromCharCode(Math.floor(e/26+64))+String.fromCharCode(Math.floor(e%26+65))}escapeXml(e){return e.replace(/[<>&'"]/gu,e=>[`&lt;`,`&gt;`,`&amp;`,`&apos;`,`&quot;`][`<>&'"`.indexOf(e)])}dateToExcelDate(e){return 25569+(e.getTime()-e.getTimezoneOffset()*6e4)/864e5}}})))()}var fc,pc;function mc(){return(mc=e((()=>{Bt(),fc=(e,t)=>{Object.assign(e.style,{display:t?``:`none`})},pc=class extends HTMLElement{static get observedAttributes(){return[`opened`]}toggle=zt(`height`);constructor(){super();let e=new CSSStyleSheet;e.replaceSync(`
      :host { display: block; }
		`);let t=this.attachShadow({mode:`open`});t.appendChild(document.createElement(`slot`)),t.adoptedStyleSheets=[e]}connectedCallback(){fc(this,this.getAttribute(`opened`)!=null)}attributeChangedCallback(e,t,n){if(e===`opened`){let e=n!=null;return this.isConnected?this.toggle(this,e):fc(this,e)}}},customElements.define(`cosmoz-collapse`,pc)})))()}function hc(){return(hc=e((()=>{mc()})))()}export{jo as A,xr as B,$o as C,Mo as D,qo as E,Pi as F,Be as G,We as H,zr as I,xe as J,De as K,wr as L,Ji as M,X as N,No as O,Fi as P,Er as R,Qo as S,Yo as T,Ge as U,Lt as V,ze as W,is as _,Js as a,es as b,Ls as c,Rs as d,Is as f,ls as g,ys as h,Ys as i,Xi as j,ko as k,Bs as l,Ds as m,uc as n,Hs as o,Os as p,Oe as q,dc as r,Vs as s,hc as t,zs as u,ns as v,Jo as w,Xo as x,rs as y,Cr as z};