import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$ as t,Ct as n,D as r,E as i,Et as a,Ft as o,H as s,Ht as c,Lt as l,M as u,N as d,Nt as f,O as p,P as m,Qt as h,St as g,T as _,U as v,Vt as y,W as b,Xt as x,Yt as ee,Zt as S,_ as C,_t as w,ct as T,d as te,dt as ne,f as re,jt as ie,l as ae,lt as oe,ot as se,qt as ce,st as E,u as le,ut as ue,v as de,vt as D,wt as fe,xt as pe}from"./dist-Bd_7_9uE.js";var me;function he(){return(he=e((()=>{me=e=>!!(e==null||Array.isArray(e)&&e.length===0||typeof e==`string`&&e.length===0||typeof e==`number`&&e===0)})))()}var ge,_e,ve,ye,be;function xe(){return(xe=e((()=>{ge={isoBasic:/^\d{4}-\d{2}-\d{2}$/iu},_e=e=>typeof e==`string`&&ge.isoBasic.test(e)?new Date(`${e}T00:00`):new Date(e),ve=e=>{if(e==null)return;if(e instanceof Date&&!isNaN(e.getTime()))return e;if(typeof e!=`number`&&typeof e!=`string`)return;let t=_e(e);if(!(t instanceof Date&&isNaN(t.getTime())))return t},ye=e=>e<10?`0`+e:e,be=e=>e instanceof Date?e.getFullYear()+`-`+ye(e.getMonth()+1)+`-`+ye(e.getDate())+`T`+ye(e.getHours())+`:`+ye(e.getMinutes())+`:`+ye(e.getSeconds())+`.`+(e.getMilliseconds()/1e3).toFixed(3).slice(2,5):null})))()}var Se;function Ce(){return(Ce=e((()=>{w(),Se=c`
	position: relative;

	&::before {
		content: '';
		position: absolute;
		inset: 1px;
		border: 1px solid var(--skeumorphic-color, rgba(255, 255, 255, 0.12));
		border-radius: var(--skeumorphic-radius, calc(var(--cz-radius-md) - 1px));
		pointer-events: none;
		mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
		-webkit-mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
	}
`})))()}var we;function Te(){return(Te=e((()=>{Ce(),w(),we=c`
	:host {
		display: inline-flex;
	}

	:host([full-width]) {
		display: flex;
		width: 100%;
	}

	:host([hidden]) {
		display: none;
	}

	/* ========================================
	 * SIZE VARIANTS
	 * ======================================== */

	:host([size='sm']) .button {
		height: 36px;
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 3.5);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);
	}

	:host([size='sm']) ::slotted(svg) {
		width: 16px;
		height: 16px;
	}

	:host([size='lg']) .button {
		height: 44px;
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4.5);
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		border-radius: var(--cz-radius-md);
	}

	:host([size='xl']) .button {
		height: 48px;
		padding: calc(var(--cz-spacing) * 3) calc(var(--cz-spacing) * 5);
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		border-radius: var(--cz-radius-md);
	}

	/* ========================================
	 * BUTTON BASE STYLES (Primary - default)
	 * ======================================== */

	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		cursor: pointer;
		font-family: var(--cz-font-body);
		font-weight: var(--cz-font-weight-semibold);
		text-decoration: none;
		transition:
			background-color 0.15s ease,
			box-shadow 0.15s ease;
		width: 100%;
		white-space: nowrap;
		border: none;
		background: none;
		text-align: center;

		/* Medium (md) - default size */
		height: 40px;
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);

		/* Primary - default variant */
		${Se}
		background-color: var(--cz-color-bg-brand-solid);
		color: var(--cz-color-text-on-brand);
		box-shadow: var(--cz-shadow-xs-skeumorphic);

		&:hover {
			background-color: var(--cz-color-bg-brand-solid-hover);
		}

		&:active {
			background-color: var(--cz-color-brand-800);
		}

		&:focus-visible {
			outline: none;
			box-shadow: var(--cz-shadow-xs-skeumorphic), var(--cz-focus-ring);
		}
	}

	/* ========================================
	 * STYLE VARIANTS
	 * ======================================== */

	:host([variant='secondary']) .button {
		background-color: var(--cz-color-bg-primary);
		color: var(--cz-color-text-secondary);

		&:hover {
			background-color: var(--cz-color-bg-primary-hover);
			color: var(--cz-color-text-secondary-hover);
		}

		&:active {
			background-color: var(--cz-color-bg-tertiary);
		}

		&:focus-visible {
			box-shadow: var(--cz-shadow-xs-skeumorphic), var(--cz-focus-ring);
		}
	}

	:host([variant='tertiary']) .button {
		background-color: transparent;
		color: var(--cz-color-text-secondary);
		box-shadow: none;

		&::before {
			display: none;
		}

		&:hover {
			background-color: var(--cz-color-bg-primary-hover);
			color: var(--cz-color-text-secondary-hover);
		}

		&:active {
			background-color: var(--cz-color-bg-secondary);
		}

		&:focus-visible {
			box-shadow: var(--cz-focus-ring);
		}
	}

	:host([variant='destructive']) .button {
		background-color: var(--cz-color-bg-error-solid);

		&:hover {
			background-color: var(--cz-color-bg-error-solid-hover);
		}

		&:active {
			background-color: var(--cz-color-error-800);
		}

		&:focus-visible {
			box-shadow: var(--cz-shadow-xs-skeumorphic), var(--cz-focus-ring-error);
		}
	}

	:host([variant='link']) .button {
		background-color: transparent;
		color: var(--cz-color-text-brand);
		box-shadow: none;
		padding: 0;
		height: auto;

		&::before {
			display: none;
		}

		&:hover {
			text-decoration: underline;
			color: var(--cz-color-text-brand-hover);
		}

		&:active {
			color: var(--cz-color-brand-800);
		}

		&:focus-visible {
			text-decoration: underline;
			box-shadow: var(--cz-focus-ring);
			border-radius: var(--cz-radius-xs);
		}
	}

	/* ========================================
	 * DISABLED STATE
	 * ======================================== */

	:host([disabled]) .button {
		cursor: not-allowed;
		pointer-events: none;

		&::before {
			display: none;
		}
	}

	:host([disabled]) .button,
	:host([disabled][variant='primary']) .button {
		background-color: var(--cz-color-bg-disabled);
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='secondary']) .button {
		background-color: var(--cz-color-bg-primary);
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='tertiary']) .button {
		background-color: transparent;
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='destructive']) .button {
		background-color: var(--cz-color-bg-disabled);
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='link']) .button {
		background-color: transparent;
		color: var(--cz-color-text-disabled);
	}

	/* ========================================
	 * ICON SLOTS
	 * ======================================== */

	::slotted(svg) {
		width: 20px;
		height: 20px;
		flex-shrink: 0;
	}
`})))()}var Ee,De;function Oe(){return(Oe=e((()=>{s(),w(),S(),E(),Te(),Ee=[`variant`,`size`,`disabled`,`full-width`,`type`,`value`,`href`,`target`,`rel`,`download`],De=e=>{let t=e.hasAttribute(`disabled`),n=e.getAttribute(`type`)||`button`,r=e.getAttribute(`href`);y(()=>{let t=t=>{e.hasAttribute(`disabled`)&&t.stopImmediatePropagation()};return e.addEventListener(`click`,t,{capture:!0}),()=>e.removeEventListener(`click`,t,{capture:!0})},[]);let i=x`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`;if(r!=null){let n=e.getAttribute(`target`),a=e.getAttribute(`rel`),o=e.getAttribute(`download`);return x`
			<a
				href=${r}
				class="button"
				part="button"
				aria-disabled=${t?`true`:ce}
				target=${T(n)}
				rel=${T(a)}
				download=${T(o)}
				>${i}</a
			>
		`}return x`
		<button type=${n} class="button" ?disabled=${t} part="button">
			${i}
		</button>
	`},customElements.define(`cosmoz-button`,D(De,{observedAttributes:Ee,styleSheets:[v,we],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}function ke(){return(ke=e((()=>{Oe()})))()}function Ae(){return(Ae=e((()=>{S(),E()})))()}function je(){return(je=e((()=>{S(),E()})))()}function Me(){return(Me=e((()=>{S(),E()})))()}function Ne(){return(Ne=e((()=>{S(),E()})))()}function Pe(){return(Pe=e((()=>{S(),E()})))()}var Fe;function Ie(){return(Ie=e((()=>{S(),E(),Fe=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>x`
  <svg
    slot=${T(e)}
    class=${`announcement-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${r}
    height=${i}
    style=${T(a)}
  >
    ${se(t,()=>h`<title>${t}</title>`)}
    <path
      d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"
    />
  </svg>
`})))()}function Le(){return(Le=e((()=>{S(),E()})))()}function Re(){return(Re=e((()=>{S(),E()})))()}function ze(){return(ze=e((()=>{S(),E()})))()}function Be(){return(Be=e((()=>{S(),E()})))()}function Ve(){return(Ve=e((()=>{S(),E()})))()}function He(){return(He=e((()=>{S(),E()})))()}function Ue(){return(Ue=e((()=>{S(),E()})))()}function We(){return(We=e((()=>{S(),E()})))()}function Ge(){return(Ge=e((()=>{S(),E()})))()}function Ke(){return(Ke=e((()=>{S(),E()})))()}var qe;function Je(){return(Je=e((()=>{S(),E(),qe=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>x`
  <svg
    slot=${T(e)}
    class=${`delete-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${r}
    height=${i}
    style=${T(a)}
  >
    ${se(t,()=>h`<title>${t}</title>`)}
    <path
      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
    />
  </svg>
`})))()}function Ye(){return(Ye=e((()=>{S(),E()})))()}function Xe(){return(Xe=e((()=>{S(),E()})))()}function Ze(){return(Ze=e((()=>{S(),E()})))()}var Qe;function $e(){return($e=e((()=>{S(),E(),Qe=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>x`
  <svg
    slot=${T(e)}
    class=${`error-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${r}
    height=${i}
    style=${T(a)}
  >
    ${se(t,()=>h`<title>${t}</title>`)}
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
    />
  </svg>
`})))()}function et(){return(et=e((()=>{S(),E()})))()}function tt(){return(tt=e((()=>{S(),E()})))()}function nt(){return(nt=e((()=>{S(),E()})))()}function rt(){return(rt=e((()=>{S(),E()})))()}function it(){return(it=e((()=>{S(),E()})))()}function at(){return(at=e((()=>{S(),E()})))()}function ot(){return(ot=e((()=>{S(),E()})))()}function st(){return(st=e((()=>{S(),E()})))()}function ct(){return(ct=e((()=>{S(),E()})))()}function lt(){return(lt=e((()=>{S(),E()})))()}function ut(){return(ut=e((()=>{S(),E()})))()}function dt(){return(dt=e((()=>{S(),E()})))()}function ft(){return(ft=e((()=>{S(),E()})))()}function pt(){return(pt=e((()=>{S(),E()})))()}function mt(){return(mt=e((()=>{S(),E()})))()}function ht(){return(ht=e((()=>{S(),E()})))()}function gt(){return(gt=e((()=>{S(),E()})))()}function _t(){return(_t=e((()=>{S(),E()})))()}function vt(){return(vt=e((()=>{S(),E()})))()}function yt(){return(yt=e((()=>{S(),E()})))()}function bt(){return(bt=e((()=>{S(),E()})))()}function xt(){return(xt=e((()=>{S(),E()})))()}function St(){return(St=e((()=>{S(),E()})))()}function Ct(){return(Ct=e((()=>{S(),E()})))()}function wt(){return(wt=e((()=>{S(),E()})))()}function Tt(){return(Tt=e((()=>{S(),E()})))()}function Et(){return(Et=e((()=>{S(),E()})))()}function Dt(){return(Dt=e((()=>{S(),E()})))()}function Ot(){return(Ot=e((()=>{S(),E()})))()}function kt(){return(kt=e((()=>{S(),E()})))()}function At(){return(At=e((()=>{S(),E()})))()}function jt(){return(jt=e((()=>{S(),E()})))()}function Mt(){return(Mt=e((()=>{S(),E()})))()}function Nt(){return(Nt=e((()=>{S(),E()})))()}function Pt(){return(Pt=e((()=>{S(),E()})))()}function Ft(){return(Ft=e((()=>{S(),E()})))()}function It(){return(It=e((()=>{S(),E()})))()}function Lt(){return(Lt=e((()=>{S(),E()})))()}function Rt(){return(Rt=e((()=>{S(),E()})))()}function zt(){return(zt=e((()=>{S(),E()})))()}function Bt(){return(Bt=e((()=>{S(),E()})))()}function Vt(){return(Vt=e((()=>{S(),E()})))()}function Ht(){return(Ht=e((()=>{S(),E()})))()}function Ut(){return(Ut=e((()=>{S(),E()})))()}function Wt(){return(Wt=e((()=>{S(),E()})))()}function Gt(){return(Gt=e((()=>{Ae(),je(),Me(),Ne(),Pe(),Ie(),Le(),Re(),ze(),Be(),Ve(),He(),Ue(),We(),Ge(),Ke(),Je(),Ye(),Xe(),Ze(),$e(),et(),tt(),nt(),rt(),it(),at(),ot(),st(),ct(),lt(),ut(),dt(),ft(),pt(),mt(),ht(),gt(),_t(),vt(),yt(),bt(),xt(),St(),Ct(),wt(),Tt(),Et(),Dt(),Ot(),kt(),At(),jt(),Mt(),Nt(),Pt(),Ft(),It(),Lt(),Rt(),zt(),Bt(),Vt(),Ht(),Ut(),Wt()})))()}var Kt,qt;function Jt(){return(Jt=e((()=>{Kt={duration:250},qt=e=>(t,n,r)=>{let i=`max`+e.charAt(0).toUpperCase()+e.slice(1);Object.assign(t.style,{[i]:``,display:``,overflow:`hidden`});let{[e]:a}=t.getBoundingClientRect(),o=[0,a],[s,c]=n?o:o.slice().reverse(),l=t.animate([{[i]:`${s}px`},{[i]:`${c}px`}],{...Kt,...r});l.onfinish=()=>Object.assign(t.style,{[i]:``,display:n?``:`none`,overflow:n?``:`visible`})}})))()}var Yt,Xt,Zt;function Qt(){return(Qt=e((()=>{S(),n(),Yt=`important`,Xt=` !`+Yt,Zt=pe(class extends g{constructor(e){if(super(e),e.type!==fe.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(Xt);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?Yt:``):n[e]=r}}return ee}})})))()}var $t;function en(){return(en=e((()=>{$t=(e=HTMLElement)=>class extends e{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent(`connected`))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent(`disconnected`))}}})))()}var tn,nn;function rn(){return(rn=e((()=>{w(),S(),en(),tn=c`
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
`,nn=()=>x`<div class="wrap" part="wrap"><slot></slot></div>`,customElements.define(`cosmoz-dropdown-content`,$t(D(nn,{styleSheets:[tn]})))})))()}function an(e,t,n){return j(e,A(t,n))}function on(e,t){return typeof e==`function`?e(t):e}function O(e){return e.split(`-`)[0]}function sn(e){return e.split(`-`)[1]}function cn(e){return e===`x`?`y`:`x`}function ln(e){return e===`y`?`height`:`width`}function k(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function un(e){return cn(k(e))}function dn(e,t,n){n===void 0&&(n=!1);let r=sn(e),i=un(e),a=ln(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=gn(o)),[o,gn(o)]}function fn(e){let t=gn(e);return[pn(e),t,pn(t)]}function pn(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}function mn(e,t,n){switch(e){case`top`:case`bottom`:return n?t?wn:Cn:t?Cn:wn;case`left`:case`right`:return t?Tn:En;default:return[]}}function hn(e,t,n,r){let i=sn(e),a=mn(O(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(pn)))),a}function gn(e){let t=O(e);return Sn[t]+e.slice(t.length)}function _n(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function vn(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:_n(e)}function yn(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}var A,j,bn,xn,M,Sn,Cn,wn,Tn,En;function Dn(){return(Dn=e((()=>{A=Math.min,j=Math.max,bn=Math.round,xn=Math.floor,M=e=>({x:e,y:e}),Sn={left:`right`,right:`left`,bottom:`top`,top:`bottom`},Cn=[`left`,`right`],wn=[`right`,`left`],Tn=[`top`,`bottom`],En=[`bottom`,`top`]})))()}function On(e,t,n){let{reference:r,floating:i}=e,a=k(t),o=un(t),s=ln(o),c=O(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=sn(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function kn(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=on(t,e),p=vn(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=yn(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=yn(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var An,jn,Mn,Nn,Pn;function Fn(){return(Fn=e((()=>{Dn(),An=50,jn=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:kn},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=On(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<An&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=On(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},Mn=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=on(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=O(r),_=k(o),v=O(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[gn(o)]:fn(o)),x=p!==`none`;!d&&x&&b.push(...hn(o,m,p,y));let ee=[o,...b],S=await s.detectOverflow(t,h),C=[],w=i.flip?.overflows||[];if(l&&C.push(S[g]),u){let e=dn(r,a,y);C.push(S[e[0]],S[e[1]])}if(w=[...w,{placement:r,overflows:C}],!C.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=ee[e];if(t&&(u!==`alignment`||_===k(t)||w.every(e=>k(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:w},reset:{placement:t}};let n=w.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=w.filter(e=>{if(x){let t=k(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o}if(r!==n)return{reset:{placement:n}}}return{}}}},Nn=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=on(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=k(i),p=cn(f),m=u[p],h=u[f],g=(e,t)=>an(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}},Pn=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){let{placement:n,rects:r,platform:i,elements:a}=t,{apply:o=()=>{},...s}=on(e,t),c=await i.detectOverflow(t,s),l=O(n),u=sn(n),d=k(n)===`y`,{width:f,height:p}=r.floating,m,h;l===`top`||l===`bottom`?(m=l,h=u===(await(i.isRTL==null?void 0:i.isRTL(a.floating))?`start`:`end`)?`left`:`right`):(h=l,m=u===`end`?`top`:`bottom`);let g=p-c.top-c.bottom,_=f-c.left-c.right,v=A(p-c[m],g),y=A(f-c[h],_),b=t.middlewareData.shift,x=!b,ee=v,S=y;b!=null&&b.enabled.x&&(S=_),b!=null&&b.enabled.y&&(ee=g),x&&!u&&(d?S=f-2*j(c.left,c.right):ee=p-2*j(c.top,c.bottom)),await o({...t,availableWidth:S,availableHeight:ee});let C=await i.getDimensions(a.floating);return f!==C.width||p!==C.height?{reset:{rects:!0}}:{}}}}})))()}function In(){return typeof window<`u`}function Ln(e){return Rn(e)?(e.nodeName||``).toLowerCase():`#document`}function N(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function P(e){return((Rn(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function Rn(e){return In()?e instanceof Node||e instanceof N(e).Node:!1}function F(e){return In()?e instanceof Element||e instanceof N(e).Element:!1}function I(e){return In()?e instanceof HTMLElement||e instanceof N(e).HTMLElement:!1}function zn(e){return!In()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof N(e).ShadowRoot}function Bn(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=L(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function Vn(e){return/^(table|td|th)$/.test(Ln(e))}function Hn(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}function Un(e){let t=F(e)?L(e):e;return z(t.transform)||z(t.translate)||z(t.scale)||z(t.rotate)||z(t.perspective)||!Gn()&&(z(t.backdropFilter)||z(t.filter))||Zn.test(t.willChange||``)||Qn.test(t.contain||``)}function Wn(e){let t=R(e);for(;I(t)&&!Kn(t);){if(Un(t))return t;if(Hn(t))return null;t=R(t)}return null}function Gn(){return $n??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),$n}function Kn(e){return/^(html|body|#document)$/.test(Ln(e))}function L(e){return N(e).getComputedStyle(e)}function qn(e){return F(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function R(e){if(Ln(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||zn(e)&&e.host||P(e);return zn(t)?t.host:t}function Jn(e){let t=R(e);return Kn(t)?(e.ownerDocument||e).body:I(t)&&Bn(t)?t:Jn(t)}function Yn(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Jn(e),i=r===e.ownerDocument?.body,a=N(r);if(i){let e=Xn(a);return t.concat(a,a.visualViewport||[],Bn(r)?r:[],e&&n?Yn(e):[])}return t.concat(r,Yn(r,[],n))}function Xn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}var Zn,Qn,z,$n;function er(){return(er=e((()=>{Zn=/transform|translate|scale|rotate|perspective|filter/,Qn=/paint|layout|strict|content/,z=e=>!!e&&e!==`none`})))()}function tr(e){let t=L(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=I(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=bn(n)!==a||bn(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function nr(e){return F(e)?e:e.contextElement}function B(e){let t=nr(e);if(!I(t))return M(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=tr(t),o=(a?bn(n.width):n.width)/r,s=(a?bn(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}function rr(e){let t=N(e);return!Gn()||!t.visualViewport?wr:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ir(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===N(e)}function V(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=nr(e),o=M(1);t&&(r?F(r)&&(o=B(r)):o=B(e));let s=ir(a,n,r)?rr(a):M(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=N(a),t=F(r)?N(r):r,n=e,i=Xn(n);for(;i&&t!==n;){let e=B(i),t=i.getBoundingClientRect(),r=L(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=N(i),i=Xn(n)}}return yn({width:u,height:d,x:c,y:l})}function ar(e,t){let n=qn(e).scrollLeft;return t?t.left+n:V(P(e)).left+n}function or(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-ar(e,n),y:n.top+t.scrollTop}}function sr(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=P(r),s=t?Hn(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=M(1),u=M(0),d=I(r);if((d||!a)&&((Ln(r)!==`body`||Bn(o))&&(c=qn(r)),d)){let e=V(r);l=B(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?or(o,c):M(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function cr(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function lr(e){let t=qn(e),n=e.ownerDocument.body,r=j(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=j(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+ar(e),o=-t.scrollTop;return L(n).direction===`rtl`&&(a+=j(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}function ur(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=N(e),a=P(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!Gn()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if(ar(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=Tr&&(s-=o)}return{width:s,height:c,x:l,y:u}}function dr(e,t){let n=V(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=B(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function fr(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=ur(e,n,t);else if(t===`document`)r=lr(P(e));else if(F(t))r=dr(t,n);else{let n=rr(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return yn(r)}function pr(e,t){let n=t.get(e);if(n)return n;let r=Yn(e,[],!1).filter(e=>F(e)&&Ln(e)!==`body`),i=null,a=L(e).position===`fixed`,o=a?R(e):e;for(;F(o)&&!Kn(o);){let e=L(o),t=Un(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=R(o)}return t.set(e,r),r}function mr(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Hn(t)?[]:pr(t,this._c):[].concat(n),r],o=fr(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=fr(t,a[e],i);s=j(n.top,s),c=A(n.right,c),l=A(n.bottom,l),u=j(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function hr(e){let{width:t,height:n}=tr(e);return{width:t,height:n}}function gr(e,t,n){let r=I(t),i=P(t),a=n===`fixed`,o=V(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=M(0);if((r||!a)&&((Ln(t)!==`body`||Bn(i))&&(s=qn(t)),r)){let e=V(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=ar(i));let l=i&&!r&&!a?or(i,s):M(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function _r(e){return L(e).position===`static`}function vr(e,t){if(!I(e)||L(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return P(e)===n&&(n=n.ownerDocument.body),n}function yr(e,t){let n=N(e);if(Hn(e))return n;if(!I(e)){let t=R(e);for(;t&&!Kn(t);){if(F(t)&&!_r(t))return t;t=R(t)}return n}let r=vr(e,t);for(;r&&Vn(r)&&_r(r);)r=vr(r,t);return r&&Kn(r)&&_r(r)&&!Un(r)?n:r||Wn(e)||n}function br(e){return L(e).direction===`rtl`}function xr(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Sr(e,t,n){let r=null,i,a=P(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=xn(d),h=xn(a.clientWidth-(u+f)),g=xn(a.clientHeight-(d+p)),_=xn(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:j(0,A(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(!xr(l,e.getBoundingClientRect()))return s();if(n!==c){if(!y)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(b,{...v,root:a.ownerDocument})}catch{r=new IntersectionObserver(b,v)}r.observe(e)}let c=N(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function Cr(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=nr(e),u=i||a?[...l?Yn(l):[],...t?Yn(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?Sr(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?V(e):null;c&&g();function g(){let t=V(e);h&&!xr(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var wr,Tr,Er,Dr,Or,kr,Ar,jr;function Mr(){return(Mr=e((()=>{Fn(),Dn(),er(),wr=M(0),Tr=25,Er=async function(e){let t=this.getOffsetParent||yr,n=this.getDimensions,r=await n(e.floating);return{reference:gr(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},Dr={convertOffsetParentRelativeRectToViewportRelativeRect:sr,getDocumentElement:P,getClippingRect:mr,getOffsetParent:yr,getElementRects:Er,getClientRects:cr,getDimensions:hr,getScale:B,isElement:F,isRTL:br},Or=Nn,kr=Mn,Ar=Pn,jr=(e,t,n)=>{let r=new Map,i=n??{},a={...Dr,...i.platform,_c:r};return jn(e,t,{...i,platform:a})}})))()}var Nr,Pr;function Fr(){return(Fr=e((()=>{w(),Mr(),Nr=[kr({fallbackAxisSideDirection:`start`,crossAxis:!1}),Or()],Pr=({placement:e=`bottom-start`,strategy:t,middleware:n=Nr}={})=>{let[r,i]=ie(),[a,o]=ie(),[s,c]=ie();return y(()=>{if(!r||!(a instanceof HTMLElement)){c(void 0);return}return Cr(r,a,()=>jr(r,a,{placement:e,strategy:t,middleware:n}).then(c))},[r,a,e,t,n]),{setReference:i,setFloating:o,styles:l(()=>s?{left:`${s.x}px`,top:`${s.y}px`}:{},[s?.x,s?.y])}}})))()}var Ir,Lr,Rr;function zr(){return(zr=e((()=>{te(),w(),Ir=e=>e.matches(`:focus-within`)?!0:(e.shadowRoot?.querySelector(`[popover]`))?.matches(`:focus-within`)??!1,Lr=({disabled:e,onFocus:t})=>{let[n,r]=ie(),{focused:i,closed:a}=n||{},s=i&&!e,c=re({closed:a,onFocus:t}),l=o(e=>r(t=>({...t,closed:e})),[]),u=o(e=>{let t=e.currentTarget;return Ir(t)?r(e=>({focused:!0,closed:!e?.closed})):t.focus()},[]);return y(()=>{if(!s)return;let e=e=>{if(e.defaultPrevented)return;let{closed:t}=c;e.key===`Escape`&&!t?(e.preventDefault(),l(!0)):[`ArrowUp`,`Up`].includes(e.key)&&t&&(e.preventDefault(),l(!1))};return document.addEventListener(`keydown`,e,!0),()=>document.removeEventListener(`keydown`,e,!0)},[s]),{focused:s,active:s&&!a,setClosed:l,onToggle:u,onFocus:o(e=>{let t=Ir(e.currentTarget);r({focused:t}),c.onFocus?.(t)},[c])}},Rr=e=>{let t=Lr(e),{onFocus:n}=t,r=a();return y(()=>{e.setAttribute(`tabindex`,`0`);let t=e=>{clearTimeout(r.current),n(e)},i=e=>{clearTimeout(r.current);let t=e.currentTarget;r.current=setTimeout(()=>n({currentTarget:t}),30)};return e.addEventListener(`focusin`,t),e.addEventListener(`focusout`,i),()=>{clearTimeout(r.current),e.removeEventListener(`focusin`,t),e.removeEventListener(`focusout`,i)}},[n]),t}})))()}var Br,Vr,Hr;function Ur(){return(Ur=e((()=>{w(),S(),p(),ue(),Qt(),rn(),Fr(),zr(),Br=e=>e.preventDefault(),Vr=c`
	.anchor {
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
`,Hr=e=>{let{placement:t,strategy:n,middleware:i,render:s}=e,{active:c,onToggle:l}=Rr(e),u=a(),{styles:d,setReference:f,setFloating:p}=Pr({placement:t,strategy:n,middleware:i}),m=o(e=>{u.current=e,p(e)},[p]);return y(()=>{let e=u.current;e&&(c&&!e.matches(`:popover-open`)&&e.showPopover?.(),!c&&e.matches(`:popover-open`)&&e.hidePopover?.())},[c]),x`
		<div class="anchor" part="anchor" ${ne(f)}>
			<button
				@mousedown=${Br}
				@click=${l}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		<cosmoz-dropdown-content
			popover
			id="content"
			part="content"
			exportparts="wrap, content"
			style="${Zt(d)}"
			${ne(m)}
			><slot></slot>${r([s],()=>s?.()||ce)}</cosmoz-dropdown-content
		>
	`},customElements.define(`cosmoz-dropdown`,D(Hr,{styleSheets:[Vr]}))})))()}var Wr,Gr,Kr;function qr(){return(qr=e((()=>{w(),S(),Wr=c`
	:host {
		display: contents;
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
`,Gr=()=>x` <slot></slot> `,customElements.define(`cosmoz-dropdown-list`,D(Gr,{styleSheets:[Wr]})),Kr=({placement:e})=>x` <cosmoz-dropdown
		.placement=${e}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`,customElements.define(`cosmoz-dropdown-menu`,D(Kr))})))()}function Jr(){return(Jr=e((()=>{Ur(),qr(),zr(),oe()})))()}function H(){return(H=e((()=>{window.JSCompiler_renameProperty=function(e,t){return e}})))()}function Yr(e,t){if(e&&$r.test(e)||e===`//`)return e;if(ei===void 0){ei=!1;try{let e=new URL(`b`,`http://a`);e.pathname=`c%20d`,ei=e.href===`http://a/c%20d`}catch{}}if(t||=document.baseURI||window.location.href,ei)try{return new URL(e,t).href}catch{return e}return U||(U=document.implementation.createHTMLDocument(`temp`),U.base=U.createElement(`base`),U.head.appendChild(U.base),U.anchor=U.createElement(`a`),U.body.appendChild(U.anchor)),U.base.href=t,U.anchor.href=e,U.anchor.href||e}function Xr(e,t){return e.replace(Qr,function(e,n,r,i){return n+`'`+Yr(r.replace(/["']/g,``),t)+`'`+i})}function Zr(e){return e.substring(0,e.lastIndexOf(`/`)+1)}var Qr,$r,ei,U;function ti(){return(ti=e((()=>{H(),Qr=/(url\()([^)]*)(\))/g,$r=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/})))()}var ni,ri,ii,ai,oi,si,ci,li,ui,di,fi,pi,mi,hi;function gi(){return(gi=e((()=>{H(),ti(),ni=!window.ShadyDOM||!window.ShadyDOM.inUse,!window.ShadyCSS||window.ShadyCSS.nativeCss,window.customElements.polyfillWrapFlushCallback,ri=ni&&`adoptedStyleSheets`in Document.prototype&&`replaceSync`in CSSStyleSheet.prototype&&(()=>{try{let e=new CSSStyleSheet;e.replaceSync(``);let t=document.createElement(`div`);return t.attachShadow({mode:`open`}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch{return!1}})(),ii=window.Polymer&&window.Polymer.rootPath||Zr(document.baseURI||window.location.href),ai=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,window.Polymer&&window.Polymer.setPassiveTouchGestures,oi=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,si=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,ci=window.Polymer&&window.Polymer.legacyOptimizations||!1,li=window.Polymer&&window.Polymer.legacyWarnings||!1,ui=window.Polymer&&window.Polymer.syncInitialRender||!1,di=window.Polymer&&window.Polymer.legacyUndefined||!1,fi=window.Polymer&&window.Polymer.orderedComputed||!1,pi=window.Polymer&&window.Polymer.removeNestedTemplates||!1,mi=window.Polymer&&window.Polymer.fastDomIf||!1,window.Polymer&&window.Polymer.suppressTemplateNotifications,window.Polymer&&window.Polymer.legacyNoObservedAttributes,hi=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1})))()}function _i(){}var vi,W;function G(){return(G=e((()=>{H(),vi=0,_i.prototype.__mixinApplications,_i.prototype.__mixinSet,W=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let n=vi++;function r(r){let i=r.__mixinSet;if(i&&i[n])return r;let a=t,o=a.get(r);if(!o){o=e(r),a.set(r,o);let t=Object.create(o.__mixinSet||i||null);t[n]=!0,o.__mixinSet=t}return o}return r}})))()}function yi(e,t){Si[e]=Ci[e.toLowerCase()]=t}function bi(e){return Si[e]||Ci[e.toLowerCase()]}function xi(e){e.querySelector(`style`)&&console.warn(`dom-module %s has style outside template`,e.id)}var Si,Ci,K;function wi(){return(wi=e((()=>{H(),ti(),gi(),Si={},Ci={},K=class extends HTMLElement{static get observedAttributes(){return[`id`]}static import(e,t){if(e){let n=bi(e);return n&&t?n.querySelector(t):n}return null}attributeChangedCallback(e,t,n,r){t!==n&&this.register()}get assetpath(){if(!this.__assetpath){let e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=Yr(this.getAttribute(`assetpath`)||``,e.baseURI);this.__assetpath=Zr(t)}return this.__assetpath}register(e){if(e||=this.id,e){if(oi&&bi(e)!==void 0)throw yi(e,null),Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,yi(e,this),xi(this)}}},K.prototype.modules=Si,customElements.define(`dom-module`,K)})))()}function Ti(e){return K.import(e)}function Ei(e){let t=Xr((e.body?e.body:e).textContent,e.baseURI),n=document.createElement(`style`);return n.textContent=t,n}function Di(e){let t=e.trim().split(/\s+/),n=[];for(let e=0;e<t.length;e++)n.push(...Oi(t[e]));return n}function Oi(e){let t=Ti(e);if(!t)return console.warn(`Could not find style data in module named`,e),[];if(t._styles===void 0){let e=[];e.push(...ji(t));let n=t.querySelector(`template`);n&&e.push(...ki(n,t.assetpath)),t._styles=e}return t._styles}function ki(e,t){if(!e._styles){let n=[],r=e.content.querySelectorAll(`style`);for(let e=0;e<r.length;e++){let i=r[e],a=i.getAttribute(Ni);a&&n.push(...Di(a).filter(function(e,t,n){return n.indexOf(e)===t})),t&&(i.textContent=Xr(i.textContent,t)),n.push(i)}e._styles=n}return e._styles}function Ai(e){let t=Ti(e);return t?ji(t):[]}function ji(e){let t=[],n=e.querySelectorAll(Mi);for(let e=0;e<n.length;e++){let r=n[e];if(r.import){let e=r.import,n=r.hasAttribute(Pi);if(n&&!e._unscopedStyle){let t=Ei(e);t.setAttribute(Pi,``),e._unscopedStyle=t}else e._style||=Ei(e);t.push(n?e._unscopedStyle:e._style)}}return t}var Mi,Ni,Pi;function Fi(){return(Fi=e((()=>{wi(),ti(),Mi=`link[rel=import][type~=css]`,Ni=`include`,Pi=`shady-unscoped`})))()}var q;function Ii(){return(Ii=e((()=>{q=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e})))()}function Li(e){return e.indexOf(`.`)>=0}function J(e){let t=e.indexOf(`.`);return t===-1?e:e.slice(0,t)}function Ri(e,t){return e.indexOf(t+`.`)===0}function zi(e,t){return t.indexOf(e+`.`)===0}function Bi(e,t,n){return t+n.slice(e.length)}function Vi(e){if(Array.isArray(e)){let t=[];for(let n=0;n<e.length;n++){let r=e[n].toString().split(`.`);for(let e=0;e<r.length;e++)t.push(r[e])}return t.join(`.`)}return e}function Hi(e){return Array.isArray(e)?Vi(e).split(`.`):e.toString().split(`.`)}function Y(e,t,n){let r=e,i=Hi(t);for(let e=0;e<i.length;e++){if(!r)return;let t=i[e];r=r[t]}return n&&(n.path=i.join(`.`)),r}function Ui(e,t,n){let r=e,i=Hi(t),a=i[i.length-1];if(i.length>1){for(let e=0;e<i.length-1;e++){let t=i[e];if(r=r[t],!r)return}r[a]=n}else r[t]=n;return i.join(`.`)}function Wi(){return(Wi=e((()=>{H()})))()}function Gi(e){return qi[e]||(qi[e]=e.indexOf(`-`)<0?e:e.replace(Ji,e=>e[1].toUpperCase()))}function Ki(e){return qi[e]||(qi[e]=e.replace(Yi,`-$1`).toLowerCase())}var qi,Ji,Yi;function Xi(){return(Xi=e((()=>{H(),qi={},Ji=/-[a-z]/g,Yi=/([A-Z])/g})))()}function Zi(){ta=!1;let e=X.length;for(let t=0;t<e;t++){let e=X[t];if(e)try{e()}catch(e){setTimeout(()=>{throw e})}}X.splice(0,e),$i+=e}var Qi,$i,X,ea,ta,na,ra,ia;function aa(){return(aa=e((()=>{H(),Qi=0,$i=0,X=[],ea=0,ta=!1,na=document.createTextNode(``),new window.MutationObserver(Zi).observe(na,{characterData:!0}),ra={after(e){return{run(t){return window.setTimeout(t,e)},cancel(e){window.clearTimeout(e)}}},run(e,t){return window.setTimeout(e,t)},cancel(e){window.clearTimeout(e)}},ia={run(e){return ta||(ta=!0,na.textContent=ea++),X.push(e),Qi++},cancel(e){let t=e-$i;if(t>=0){if(!X[t])throw Error(`invalid async handle: `+e);X[t]=null}}}})))()}var oa,sa;function ca(){return(ca=e((()=>{H(),G(),aa(),Ii(),oa=ia,sa=W(e=>{class t extends e{static createProperties(e){let t=this.prototype;for(let n in e)n in t||t._createPropertyAccessor(n)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty(`__dataHasAccessor`,this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){this.hasOwnProperty(JSCompiler_renameProperty(`__dataAttributes`,this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let t=this.__dataAttributes[e];return t||(t=this.constructor.attributeNameForProperty(e),this.__dataAttributes[t]=e),t}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this.__data[e]},set:t?function(){}:function(t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,n){let r=this.__data[e],i=this._shouldPropertyChange(e,t,r);return i&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=r),this.__data[e]=t,this.__dataPending[e]=t),i}_isPropertyPending(e){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(e))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,oa.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&=(this._initializeInstanceProperties(this.__dataInstanceProps),null),this.ready())}_flushProperties(){this.__dataCounter++;let e=this.__data,t=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(e,t,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,n)),this.__dataCounter--}_shouldPropertiesChange(e,t,n){return!!t}_propertiesChanged(e,t,n){}_shouldPropertyChange(e,t,n){return n!==t&&(n===n||t===t)}attributeChangedCallback(e,t,n,r){t!==n&&this._attributeToProperty(e,n),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,n,r)}_attributeToProperty(e,t,n){if(!this.__serializing){let r=this.__dataAttributes,i=r&&r[e]||e;this[i]=this._deserializeValue(t,n||this.constructor.typeForProperty(i))}}_propertyToAttribute(e,t,n){this.__serializing=!0,n=arguments.length<3?this[e]:n,this._valueToNodeAttribute(this,n,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,n){let r=this._serializeValue(t);(n===`class`||n===`name`||n===`slot`)&&(e=q(e)),r===void 0?e.removeAttribute(n):e.setAttribute(n,r===``&&window.trustedTypes?window.trustedTypes.emptyScript:r)}_serializeValue(e){switch(typeof e){case`boolean`:return e?``:void 0;default:return e?.toString()}}_deserializeValue(e,t){switch(t){case Boolean:return e!==null;case Number:return Number(e);default:return e}}}return t})})))()}function la(e,t){if(!ua[t]){let n=e[t];n!==void 0&&(e.__data?e._setPendingProperty(t,n):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty(`__dataProto`,e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=n))}}var ua,da,fa,pa;function ma(){return(ma=e((()=>{for(H(),G(),Xi(),ca(),ua={},da=HTMLElement.prototype;da;){let e=Object.getOwnPropertyNames(da);for(let t=0;t<e.length;t++)ua[e[t]]=!0;da=Object.getPrototypeOf(da)}fa=window.trustedTypes?e=>trustedTypes.isHTML(e)||trustedTypes.isScript(e)||trustedTypes.isScriptURL(e):()=>!1,pa=W(e=>{let t=sa(e);class n extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(Gi(e[t]))}static attributeNameForProperty(e){return Ki(e)}_initializeProperties(){this.__dataProto&&=(this._initializeProtoProperties(this.__dataProto),null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){let n=this;n.hasAttribute(e)||this._valueToNodeAttribute(n,t,e)}_serializeValue(e){switch(typeof e){case`object`:if(e instanceof Date)return e.toString();if(e){if(fa(e))return e;try{return JSON.stringify(e)}catch{return``}}default:return super._serializeValue(e)}}_deserializeValue(e,t){let n;switch(t){case Object:try{n=JSON.parse(e)}catch{n=e}break;case Array:try{n=JSON.parse(e)}catch{n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:n=isNaN(e)?String(e):Number(e),n=new Date(n);break;default:n=super._deserializeValue(e,t)}return n}_definePropertyAccessor(e,t){la(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return!!(this.__dataPending&&e in this.__dataPending)}}return n})})))()}function ha(){if(!wa){wa=!0;let e=document.createElement(`textarea`);e.placeholder=`a`,Ta=e.placeholder===e.textContent}return Ta}function ga(e){ha()&&e.localName===`textarea`&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}function _a(e){let t=e.getAttribute(`is`);if(t&&Ca[t]){let n=e;for(n.removeAttribute(`is`),e=n.ownerDocument.createElement(t),n.parentNode.replaceChild(e,n),e.appendChild(n);n.attributes.length;){let{name:t}=n.attributes[0];Ea(e,n,t),n.removeAttribute(t)}}return e}function va(e,t){let n=t.parentInfo&&va(e,t.parentInfo);if(n){for(let e=n.firstChild,r=0;e;e=e.nextSibling)if(t.parentIndex===r++)return e}else return e}function ya(e,t,n,r){r.id&&(t[r.id]=n)}function ba(e,t,n){if(n.events&&n.events.length)for(let r=0,i=n.events,a;r<i.length&&(a=i[r]);r++)e._addMethodEventListenerToNode(t,a.name,a.value,e)}function xa(e,t,n,r){n.templateInfo&&(t._templateInfo=n.templateInfo,t._parentTemplateInfo=r)}function Sa(e,t,n){return e=e._methodHost||e,function(t){e[n]?e[n](t,t.detail):console.warn("listener method `"+n+"` not defined")}}var Ca,wa,Ta,Ea,Da;function Oa(){return(Oa=e((()=>{H(),G(),Ca={"dom-if":!0,"dom-repeat":!0},wa=!1,Ta=!1,Ea=(()=>{let e=window.trustedTypes&&window.trustedTypes.createPolicy(`polymer-template-event-attribute-policy`,{createScript:e=>e});return(t,n,r)=>{let i=n.getAttribute(r);if(e&&r.startsWith(`on-`)){t.setAttribute(r,e.createScript(i,r));return}t.setAttribute(r,i)}})(),Da=W(e=>{class t extends e{static _parseTemplate(e,t){if(!e._templateInfo){let n=e._templateInfo={};n.nodeInfoList=[],n.nestedTemplate=!!t,n.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute&&e.hasAttribute(`strip-whitespace`),this._parseTemplateContent(e,n,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,n){return this._parseTemplateNode(e.content,t,n)}static _parseTemplateNode(e,t,n){let r=!1,i=e;return i.localName==`template`&&!i.hasAttribute(`preserve-content`)?r=this._parseTemplateNestedTemplate(i,t,n)||r:i.localName===`slot`&&(t.hasInsertionPoint=!0),ga(i),i.firstChild&&this._parseTemplateChildNodes(i,t,n),i.hasAttributes&&i.hasAttributes()&&(r=this._parseTemplateNodeAttributes(i,t,n)||r),r||n.noted}static _parseTemplateChildNodes(e,t,n){if(e.localName!==`script`&&e.localName!==`style`)for(let r=e.firstChild,i=0,a;r;r=a){if(r.localName==`template`&&(r=_a(r)),a=r.nextSibling,r.nodeType===Node.TEXT_NODE){let n=a;for(;n&&n.nodeType===Node.TEXT_NODE;)r.textContent+=n.textContent,a=n.nextSibling,e.removeChild(n),n=a;if(t.stripWhiteSpace&&!r.textContent.trim()){e.removeChild(r);continue}}let o={parentIndex:i,parentInfo:n};this._parseTemplateNode(r,t,o)&&(o.infoIndex=t.nodeInfoList.push(o)-1),r.parentNode&&i++}}static _parseTemplateNestedTemplate(e,t,n){let r=e,i=this._parseTemplate(r,t);return(i.content=r.content.ownerDocument.createDocumentFragment()).appendChild(r.content),n.templateInfo=i,!0}static _parseTemplateNodeAttributes(e,t,n){let r=!1,i=Array.from(e.attributes);for(let a=i.length-1,o;o=i[a];a--)r=this._parseTemplateNodeAttribute(e,t,n,o.name,o.value)||r;return r}static _parseTemplateNodeAttribute(e,t,n,r,i){return r.slice(0,3)===`on-`?(e.removeAttribute(r),n.events=n.events||[],n.events.push({name:r.slice(3),value:i}),!0):r===`id`&&(n.id=i,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e,t){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e),t||=this.constructor._parseTemplate(e);let n=t.nodeInfoList,r=t.content||e.content,i=document.importNode(r,!0);i.__noInsertionPoint=!t.hasInsertionPoint;let a=i.nodeList=Array(n.length);i.$={};for(let e=0,r=n.length,o;e<r&&(o=n[e]);e++){let n=a[e]=va(i,o);ya(this,i.$,n,o),xa(this,n,o,t),ba(this,n,o)}return i=i,i}_addMethodEventListenerToNode(e,t,n,r){r||=e;let i=Sa(r,t,n);return this._addEventListenerToNode(e,t,i),i}_addEventListenerToNode(e,t,n){e.addEventListener(t,n)}_removeEventListenerFromNode(e,t,n){e.removeEventListener(t,n)}}return t})})))()}function ka(e,t,n){let r=e[t];if(!r)r=e[t]={};else if(!e.hasOwnProperty(t)&&(r=e[t]=Object.create(e[t]),n))for(let e in r){let t=r[e],n=r[e]=Array(t.length);for(let e=0;e<t.length;e++)n[e]=t[e]}return r}function Aa(e,t,n,r,i,a){if(t){let o=!1,s=uo++;for(let c in n){let l=t[i?J(c):c];if(l)for(let t=0,u=l.length,d;t<u&&(d=l[t]);t++)(!d.info||d.info.lastRun!==s)&&(!i||Ma(c,d.trigger))&&(d.info&&(d.info.lastRun=s),d.fn(e,c,n,r,d.info,i,a),o=!0)}return o}return!1}function ja(e,t,n,r,i,a,o,s){let c=!1,l=t[o?J(r):r];if(l)for(let t=0,u=l.length,d;t<u&&(d=l[t]);t++)(!d.info||d.info.lastRun!==n)&&(!o||Ma(r,d.trigger))&&(d.info&&(d.info.lastRun=n),d.fn(e,r,i,a,d.info,o,s),c=!0);return c}function Ma(e,t){if(t){let n=t.name;return n==e||!!(t.structured&&Ri(n,e))||!!(t.wildcard&&zi(n,e))}return!0}function Na(e,t,n,r,i){let a=typeof i.method==`string`?e[i.method]:i.method,o=i.property;a?a.call(e,e.__data[o],r[o]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function Pa(e,t,n,r,i){let a=e[Z.NOTIFY],o,s=uo++;for(let c in t)t[c]&&(a&&ja(e,a,s,c,n,r,i)||i&&Fa(e,c,n))&&(o=!0);let c;o&&(c=e.__dataHost)&&c._invalidateProperties&&c._invalidateProperties()}function Fa(e,t,n){let r=J(t);return r!==t&&(Ia(e,Ki(r)+`-changed`,n[t],t),!0)}function Ia(e,t,n,r){let i={value:n,queueProperty:!0};r&&(i.path=r),q(e).dispatchEvent(new CustomEvent(t,{detail:i}))}function La(e,t,n,r,i,a){let o=(a?J(t):t)==t?null:t,s=o?Y(e,o):e.__data[t];o&&s===void 0&&(s=n[t]),Ia(e,i.eventName,s,o)}function Ra(e,t,n,r,i){let a,o=e.detail,s=o&&o.path;s?(r=Bi(n,r,s),a=o&&o.value):a=e.currentTarget[n],a=i?!a:a,(!t[Z.READ_ONLY]||!t[Z.READ_ONLY][r])&&t._setPendingPropertyOrPath(r,a,!0,!!s)&&(!o||!o.queueProperty)&&t._invalidateProperties()}function za(e,t,n,r,i){let a=e.__data[t];ai&&(a=ai(a,i.attrName,`attribute`,e)),e._propertyToAttribute(t,i.attrName,a)}function Ba(e,t,n,r){let i=e[Z.COMPUTE];if(i){if(fi){uo++;let a=Va(e),o=[];for(let e in t)go(e,i,o,a,r);let s;for(;s=o.shift();)Ua(e,``,t,n,s)&&go(s.methodInfo,i,o,a,r);Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let a=t;for(;Aa(e,i,a,n,r);)Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),a=e.__dataPending,e.__dataPending=null}}}function Va(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;let n=e[Z.COMPUTE],{counts:r,ready:i,total:a}=Ha(e),o;for(;o=i.shift();){t.set(o,t.size);let e=n[o];e&&e.forEach(e=>{let t=e.info.methodInfo;--a,--r[t]===0&&i.push(t)})}a!==0&&console.warn(`Computed graph for ${e.localName} incomplete; circular?`),e.constructor.__orderedComputedDeps=t}return t}function Ha(e){let t=e[po],n={},r=e[Z.COMPUTE],i=[],a=0;for(let e in t){let r=t[e];a+=n[e]=r.args.filter(e=>!e.literal).length+ +!!r.dynamicFn}for(let e in r)t[e]||i.push(e);return{counts:n,ready:i,total:a}}function Ua(e,t,n,r,i){let a=to(e,t,n,r,i);if(a===fo)return!1;let o=i.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,a,!0):(e[o]=a,!1)}function Wa(e,t,n){let r=e.__dataLinkedPaths;if(r){let i;for(let a in r){let o=r[a];zi(a,t)?(i=Bi(a,o,t),e._setPendingPropertyOrPath(i,n,!0,!0)):zi(o,t)&&(i=Bi(o,a,t),e._setPendingPropertyOrPath(i,n,!0,!0))}}}function Ga(e,t,n,r,i,a,o){n.bindings=n.bindings||[];let s={kind:r,target:i,parts:a,literal:o,isCompound:a.length!==1};if(n.bindings.push(s),Xa(s)){let{event:e,negate:t}=s.parts[0];s.listenerEvent=e||Ki(i)+`-changed`,s.listenerNegate=t}let c=t.nodeInfoList.length;for(let n=0;n<s.parts.length;n++){let r=s.parts[n];r.compoundIndex=n,Ka(e,t,s,r,c)}}function Ka(e,t,n,r,i){if(!r.literal){if(n.kind===`attribute`&&n.target[0]===`-`)console.warn(`Cannot set attribute `+n.target+` because "-" is not a valid attribute starting character`);else{let a=r.dependencies,o={index:i,binding:n,part:r,evaluator:e};for(let n=0;n<a.length;n++){let r=a[n];typeof r==`string`&&(r=ao(r),r.wildcard=!0),e._addTemplatePropertyEffect(t,r.rootProperty,{fn:qa,info:o,trigger:r})}}}}function qa(e,t,n,r,i,a,o){let s=o[i.index],c=i.binding,l=i.part;if(a&&l.source&&t.length>l.source.length&&c.kind==`property`&&!c.isCompound&&s.__isPropertyEffectsClient&&s.__dataHasAccessor&&s.__dataHasAccessor[c.target]){let r=n[t];t=Bi(l.source,c.target,t),s._setPendingPropertyOrPath(t,r,!1,!0)&&e._enqueueClient(s)}else{let o=i.evaluator._evaluateBinding(e,l,t,n,r,a);o!==fo&&Ja(e,s,c,l,o)}}function Ja(e,t,n,r,i){if(i=Ya(t,i,n,r),ai&&(i=ai(i,n.target,n.kind,t)),n.kind==`attribute`)e._valueToNodeAttribute(t,i,n.target);else{let r=n.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[r]?(!t[Z.READ_ONLY]||!t[Z.READ_ONLY][r])&&t._setPendingProperty(r,i)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,r,i)}}function Ya(e,t,n,r){if(n.isCompound){let i=e.__dataCompoundStorage[n.target];i[r.compoundIndex]=t,t=i.join(``)}return n.kind!==`attribute`&&(n.target===`textContent`||n.target===`value`&&(e.localName===`input`||e.localName===`textarea`))&&(t??=``),t}function Xa(e){return!!e.target&&e.kind!=`attribute`&&e.kind!=`text`&&!e.isCompound&&e.parts[0].mode===`{`}function Za(e,t){let{nodeList:n,nodeInfoList:r}=t;if(r.length)for(let t=0;t<r.length;t++){let i=r[t],a=n[t],o=i.bindings;if(o)for(let t=0;t<o.length;t++){let n=o[t];Qa(a,n),$a(a,e,n)}a.__dataHost=e}}function Qa(e,t){if(t.isCompound){let n=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),r=t.parts,i=Array(r.length);for(let e=0;e<r.length;e++)i[e]=r[e].literal;let a=t.target;n[a]=i,t.literal&&t.kind==`property`&&(a===`className`&&(e=q(e)),e[a]=t.literal)}}function $a(e,t,n){if(n.listenerEvent){let r=n.parts[0];e.addEventListener(n.listenerEvent,function(e){Ra(e,t,n.target,r.source,r.negate)})}}function eo(e,t,n,r,i,a){a=t.static||a&&(typeof a!=`object`||a[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:i,dynamicFn:a};for(let i=0,a;i<t.args.length&&(a=t.args[i]);i++)a.literal||e._addPropertyEffect(a.rootProperty,n,{fn:r,info:o,trigger:a});return a&&e._addPropertyEffect(t.methodName,n,{fn:r,info:o}),o}function to(e,t,n,r,i){let a=e._methodHost||e,o=a[i.methodName];if(o){let r=e._marshalArgs(i.args,t,n);return r===fo?fo:o.apply(a,r)}i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}function no(e){let t=``;for(let n=0;n<e.length;n++){let r=e[n].literal;t+=r||``}return t}function ro(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:_o};return t[2].trim()?io(t[2].replace(/\\,/g,`&comma;`).split(`,`),e):e}return null}function io(e,t){return t.args=e.map(function(e){let n=ao(e);return n.literal||(t.static=!1),n},this),t}function ao(e){let t=e.trim().replace(/&comma;/g,`,`).replace(/\\(.)/g,`$1`),n={name:t,value:``,literal:!1},r=t[0];switch(r===`-`&&(r=t[1]),r>=`0`&&r<=`9`&&(r=`#`),r){case`'`:case`"`:n.value=t.slice(1,-1),n.literal=!0;break;case`#`:n.value=Number(t),n.literal=!0}return n.literal||(n.rootProperty=J(t),n.structured=Li(t),n.structured&&(n.wildcard=t.slice(-2)==`.*`,n.wildcard&&(n.name=t.slice(0,-2)))),n}function oo(e,t,n){let r=Y(e,n);return r===void 0&&(r=t[n]),r}function so(e,t,n,r){let i={indexSplices:r};di&&!e._overrideLegacyUndefined&&(t.splices=i),e.notifyPath(n+`.splices`,i),e.notifyPath(n+`.length`,t.length),di&&!e._overrideLegacyUndefined&&(i.indexSplices=[])}function co(e,t,n,r,i,a){so(e,t,n,[{index:r,addedCount:i,removed:a,object:t,type:`splice`}])}function lo(e){return e[0].toUpperCase()+e.substring(1)}var uo,fo,Z,po,mo,ho,go,_o,vo,yo,bo;function xo(){return(xo=e((()=>{H(),Ii(),G(),Wi(),Xi(),ma(),Oa(),gi(),uo=0,fo=[],Z={COMPUTE:`__computeEffects`,REFLECT:`__reflectEffects`,NOTIFY:`__notifyEffects`,PROPAGATE:`__propagateEffects`,OBSERVE:`__observeEffects`,READ_ONLY:`__readOnly`},po=`__computeInfo`,mo=/[A-Z]/,ho=(e,t,n)=>{let r=0,i=t.length-1,a=-1;for(;r<=i;){let o=r+i>>1,s=n.get(t[o].methodInfo)-n.get(e.methodInfo);if(s<0)r=o+1;else if(s>0)i=o-1;else{a=o;break}}a<0&&(a=i+1),t.splice(a,0,e)},go=(e,t,n,r,i)=>{let a=t[i?J(e):e];if(a)for(let t=0;t<a.length;t++){let o=a[t];o.info.lastRun!==uo&&(!i||Ma(e,o.trigger))&&(o.info.lastRun=uo,ho(o.info,n,r))}},_o=[],vo=RegExp(`(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:"(?:[^"\\\\]|\\\\.)*")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:"(?:[^"\\\\]|\\\\.)*")))\\s*))*)?)\\)\\s*)?)(?:]]|}})`,`g`),yo=W(e=>{let t=Da(pa(e));class n extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return Z}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(bo.length){let e=bo[bo.length-1];e._enqueueClient(this),this.__dataHost=e}}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[Z.READ_ONLY];for(let n in e)(!t||!t[n])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=e[n])}_addPropertyEffect(e,t,n){this._createPropertyAccessor(e,t==Z.READ_ONLY);let r=ka(this,t,!0)[e];r||=this[t][e]=[],r.push(n)}_removePropertyEffect(e,t,n){let r=ka(this,t,!0)[e],i=r.indexOf(n);i>=0&&r.splice(i,1)}_hasPropertyEffect(e,t){let n=this[t];return!!(n&&n[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,Z.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,Z.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,Z.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,Z.COMPUTE)}_setPendingPropertyOrPath(e,t,n,r){if(r||J(Array.isArray(e)?e[0]:e)!==e){if(!r){let n=Y(this,e);if(e=Ui(this,e,t),!e||!super._shouldPropertyChange(e,t,n))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,n))return Wa(this,e,t),!0}else if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,n);else this[e]=t;return!1}_setUnmanagedPropertyToNode(e,t,n){(n!==e[t]||typeof n==`object`)&&(t===`className`&&(e=q(e)),e[t]=n)}_setPendingProperty(e,t,n){let r=this.__dataHasPaths&&Li(e),i=r?this.__dataTemp:this.__data;return this._shouldPropertyChange(e,t,i[e])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),r?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(r||this[Z.NOTIFY]&&this[Z.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=n),!0):!1}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let n=e[t];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let n in e)(t||!this[Z.READ_ONLY]||!this[Z.READ_ONLY][n])&&this._setPendingPropertyOrPath(n,e[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,n){let r=this.__dataHasPaths;this.__dataHasPaths=!1;let i;Ba(this,t,n,r),i=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(t,n,r),this._flushClients(),Aa(this,this[Z.REFLECT],t,n,r),Aa(this,this[Z.OBSERVE],t,n,r),i&&Pa(this,i,t,n,r),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,n){this[Z.PROPAGATE]&&Aa(this,this[Z.PROPAGATE],e,t,n),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,e,t,n)}_runEffectsForTemplate(e,t,n,r){let i=(t,r)=>{Aa(this,e.propertyEffects,t,n,r,e.nodeList);for(let i=e.firstChild;i;i=i.nextSibling)this._runEffectsForTemplate(i,t,n,r)};e.runEffects?e.runEffects(i,t,r):i(t,r)}linkPaths(e,t){e=Vi(e),t=Vi(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=Vi(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let n={path:``},r=Y(this,e,n);so(this,r,n.path,t)}get(e,t){return Y(t||this,e)}set(e,t,n){n?Ui(n,e,t):(!this[Z.READ_ONLY]||!this[Z.READ_ONLY][e])&&this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let n={path:``},r=Y(this,e,n),i=r.length,a=r.push(...t);return t.length&&co(this,r,n.path,i,t.length,[]),a}pop(e){let t={path:``},n=Y(this,e,t),r=!!n.length,i=n.pop();return r&&co(this,n,t.path,n.length,0,[i]),i}splice(e,t,n,...r){let i={path:``},a=Y(this,e,i);t<0?t=a.length-Math.floor(-t):t&&=Math.floor(t);let o;return o=arguments.length===2?a.splice(t):a.splice(t,n,...r),(r.length||o.length)&&co(this,a,i.path,t,r.length,o),o}shift(e){let t={path:``},n=Y(this,e,t),r=!!n.length,i=n.shift();return r&&co(this,n,t.path,0,0,[i]),i}unshift(e,...t){let n={path:``},r=Y(this,e,n),i=r.unshift(...t);return t.length&&co(this,r,n.path,0,t.length,[]),i}notifyPath(e,t){let n;if(arguments.length==1){let r={path:``};t=Y(this,e,r),n=r.path}else n=Array.isArray(e)?Vi(e):e;this._setPendingPropertyOrPath(n,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){this._addPropertyEffect(e,Z.READ_ONLY),t&&(this[`_set`+lo(e)]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,n){let r={property:e,method:t,dynamicFn:!!n};this._addPropertyEffect(e,Z.OBSERVE,{fn:Na,info:r,trigger:{name:e}}),n&&this._addPropertyEffect(t,Z.OBSERVE,{fn:Na,info:r,trigger:{name:t}})}_createMethodObserver(e,t){let n=ro(e);if(!n)throw Error(`Malformed observer expression '`+e+`'`);eo(this,n,Z.OBSERVE,to,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,Z.NOTIFY,{fn:La,info:{eventName:Ki(e)+`-changed`,property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);t[0]===`-`?console.warn(`Property `+e+` cannot be reflected to attribute `+t+` because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.`):this._addPropertyEffect(e,Z.REFLECT,{fn:za,info:{attrName:t}})}_createComputedProperty(e,t,n){let r=ro(t);if(!r)throw Error(`Malformed computed expression '`+t+`'`);let i=eo(this,r,Z.COMPUTE,Ua,e,n);ka(this,po)[e]=i}_marshalArgs(e,t,n){let r=this.__data,i=[];for(let a=0,o=e.length;a<o;a++){let{name:o,structured:s,wildcard:c,value:l,literal:u}=e[a];if(!u){if(c){let e=zi(o,t),i=oo(r,n,e?t:o);l={path:e?t:o,value:i,base:e?Y(r,o):i}}else l=s?oo(r,n,o):r[o]}if(di&&!this._overrideLegacyUndefined&&l===void 0&&e.length>1)return fo;i[a]=l}return i}static addPropertyEffect(e,t,n){this.prototype._addPropertyEffect(e,t,n)}static createPropertyObserver(e,t,n){this.prototype._createPropertyObserver(e,t,n)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,n){this.prototype._createComputedProperty(e,t,n)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let n=this.constructor._parseTemplate(e),r=this.__preBoundTemplateInfo==n;if(!r)for(let e in n.propertyEffects)this._createPropertyAccessor(e);if(t){if(n=Object.create(n),n.wasPreBound=r,!this.__templateInfo)this.__templateInfo=n;else{let t=e._parentTemplateInfo||this.__templateInfo,r=t.lastChild;n.parent=t,t.lastChild=n,n.previousSibling=r,r?r.nextSibling=n:t.firstChild=n}}else this.__preBoundTemplateInfo=n;return n}static _addTemplatePropertyEffect(e,t,n){let r=e.hostProps=e.hostProps||{};r[t]=!0;let i=e.propertyEffects=e.propertyEffects||{};(i[t]=i[t]||[]).push(n)}_stampTemplate(e,t){t||=this._bindTemplate(e,!0),bo.push(this);let n=super._stampTemplate(e,t);if(bo.pop(),t.nodeList=n.nodeList,!t.wasPreBound){let e=t.childNodes=[];for(let t=n.firstChild;t;t=t.nextSibling)e.push(t)}return n.templateInfo=t,Za(this,t),this.__dataClientsReady&&(this._runEffectsForTemplate(t,this.__data,null,!1),this._flushClients()),n}_removeBoundDom(e){let t=e.templateInfo,{previousSibling:n,nextSibling:r,parent:i}=t;n?n.nextSibling=r:i&&(i.firstChild=r),r?r.previousSibling=n:i&&(i.lastChild=n),t.nextSibling=t.previousSibling=null;let a=t.childNodes;for(let e=0;e<a.length;e++){let t=a[e];q(q(t).parentNode).removeChild(t)}}static _parseTemplateNode(e,n,r){let i=t._parseTemplateNode.call(this,e,n,r);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,n);t&&(e.textContent=no(t)||` `,Ga(this,n,r,`text`,`textContent`,t),i=!0)}return i}static _parseTemplateNodeAttribute(e,n,r,i,a){let o=this._parseBindings(a,n);if(o){let t=i,a=`property`;mo.test(i)?a=`attribute`:i[i.length-1]==`$`&&(i=i.slice(0,-1),a=`attribute`);let s=no(o);return s&&a==`attribute`&&(i==`class`&&e.hasAttribute(`class`)&&(s+=` `+e.getAttribute(i)),e.setAttribute(i,s)),a==`attribute`&&t==`disable-upgrade$`&&e.setAttribute(i,``),e.localName===`input`&&t===`value`&&e.setAttribute(t,``),e.removeAttribute(t),a===`property`&&(i=Gi(i)),Ga(this,n,r,a,i,o,s),!0}return t._parseTemplateNodeAttribute.call(this,e,n,r,i,a)}static _parseTemplateNestedTemplate(e,n,r){let i=t._parseTemplateNestedTemplate.call(this,e,n,r),a=e.parentNode,o=r.templateInfo,s=a.localName===`dom-if`,c=a.localName===`dom-repeat`;pi&&(s||c)&&(a.removeChild(e),r=r.parentInfo,r.templateInfo=o,r.noted=!0,i=!1);let l=o.hostProps;if(mi&&s)l&&(n.hostProps=Object.assign(n.hostProps||{},l),pi||(r.parentInfo.noted=!0));else for(let e in l){let t=[{mode:`{`,source:e,dependencies:[e],hostProp:!0}];Ga(this,n,r,`property`,`_host_`+e,t)}return i}static _parseBindings(e,t){let n=[],r=0,i;for(;(i=vo.exec(e))!==null;){i.index>r&&n.push({literal:e.slice(r,i.index)});let a=i[1][0],o=!!i[2],s=i[3].trim(),c=!1,l=``,u=-1;a==`{`&&(u=s.indexOf(`::`))>0&&(l=s.substring(u+2),s=s.substring(0,u),c=!0);let d=ro(s),f=[];if(d){let{args:e,methodName:n}=d;for(let t=0;t<e.length;t++){let n=e[t];n.literal||f.push(n)}let r=t.dynamicFns;(r&&r[n]||d.static)&&(f.push(n),d.dynamicFn=!0)}else f.push(s);n.push({source:s,mode:a,negate:o,customEvent:c,signature:d,dependencies:f,event:l}),r=vo.lastIndex}if(r&&r<e.length){let t=e.substring(r);t&&n.push({literal:t})}return n.length?n:null}static _evaluateBinding(e,t,n,r,i,a){let o;return o=t.signature?to(e,n,r,i,t.signature):n==t.source?a&&Li(n)?Y(e,n):e.__data[n]:Y(e,t.source),t.negate&&(o=!o),o}}return n}),bo=[]})))()}function So(){wo++}function Co(e){To.push(e)}var wo,To;function Eo(){return(Eo=e((()=>{wo=0,To=[]})))()}function Do(e){let t={};for(let n in e){let r=e[n];t[n]=typeof r==`function`?{type:r}:r}return t}var Oo;function ko(){return(ko=e((()=>{H(),G(),Eo(),ca(),Oo=W(e=>{let t=sa(e);function n(e){let t=Object.getPrototypeOf(e);return t.prototype instanceof i?t:null}function r(e){if(!e.hasOwnProperty(JSCompiler_renameProperty(`__ownProperties`,e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty(`properties`,e))){let n=e.properties;n&&(t=Do(n))}e.__ownProperties=t}return e.__ownProperties}class i extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__observedAttributes`,this))){Co(this.prototype);let e=this._properties;this.__observedAttributes=e?Object.keys(e).map(e=>this.prototype._addPropertyToAttributeMap(e)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__finalized`,this))){let e=n(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){let e=r(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__properties`,this))){let e=n(this);this.__properties=Object.assign({},e&&e._properties,r(this))}return this.__properties}static typeForProperty(e){let t=this._properties[e];return t&&t.type}_initializeProperties(){So(),this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i})})))()}var Ao,jo,Mo;function No(){return(No=e((()=>{H(),gi(),G(),Fi(),ti(),wi(),xo(),ko(),Ii(),Ao=`3.5.2`,jo=window.ShadyCSS&&window.ShadyCSS.cssBuild,Mo=W(e=>{let t=Oo(yo(e));function n(e){if(!e.hasOwnProperty(JSCompiler_renameProperty(`__propertyDefaults`,e))){e.__propertyDefaults=null;let t=e._properties;for(let n in t){let r=t[n];`value`in r&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[n]=r)}}return e.__propertyDefaults}function r(e){return e.hasOwnProperty(JSCompiler_renameProperty(`__ownObservers`,e))||(e.__ownObservers=e.hasOwnProperty(JSCompiler_renameProperty(`observers`,e))?e.observers:null),e.__ownObservers}function i(e,t,n,r){n.computed&&(n.readOnly=!0),n.computed&&(e._hasReadOnlyEffect(t)?console.warn(`Cannot redefine computed property '${t}'.`):e._createComputedProperty(t,n.computed,r)),n.readOnly&&!e._hasReadOnlyEffect(t)?e._createReadOnlyProperty(t,!n.computed):n.readOnly===!1&&e._hasReadOnlyEffect(t)&&console.warn(`Cannot make readOnly property '${t}' non-readOnly.`),n.reflectToAttribute&&!e._hasReflectEffect(t)?e._createReflectedProperty(t):n.reflectToAttribute===!1&&e._hasReflectEffect(t)&&console.warn(`Cannot make reflected property '${t}' non-reflected.`),n.notify&&!e._hasNotifyEffect(t)?e._createNotifyingProperty(t):n.notify===!1&&e._hasNotifyEffect(t)&&console.warn(`Cannot make notify property '${t}' non-notify.`),n.observer&&e._createPropertyObserver(t,n.observer,r[n.observer]),e._addPropertyToAttributeMap(t)}function a(e,t,n,r){if(!jo){let i=t.content.querySelectorAll(`style`),a=ki(t),o=Ai(n),s=t.content.firstElementChild;for(let n=0;n<o.length;n++){let i=o[n];i.textContent=e._processStyleText(i.textContent,r),t.content.insertBefore(i,s)}let c=0;for(let t=0;t<a.length;t++){let n=a[t],o=i[c];o===n?c++:(n=n.cloneNode(!0),o.parentNode.insertBefore(n,o)),n.textContent=e._processStyleText(n.textContent,r)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,n),hi&&jo&&ri){let n=t.content.querySelectorAll(`style`);if(n){let t=``;Array.from(n).forEach(e=>{t+=e.textContent,e.parentNode.removeChild(e)}),e._styleSheet=new CSSStyleSheet,e._styleSheet.replaceSync(t)}}}function o(e){let t=null;if(e&&(!oi||si)&&(t=K.import(e,`template`),oi&&!t))throw Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}class s extends t{static get polymerElementVersion(){return Ao}static _finalizeClass(){t._finalizeClass.call(this);let e=r(this);e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&(typeof e==`string`?(console.error(`template getter must return HTMLTemplateElement`),e=null):ci||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(let t in e)i(this.prototype,t,e[t],e)}static createObservers(e,t){let n=this.prototype;for(let r=0;r<e.length;r++)n._createMethodObserver(e[r],t)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`_template`,this))){let e=this.prototype.hasOwnProperty(JSCompiler_renameProperty(`_template`,this.prototype))?this.prototype._template:void 0;typeof e==`function`&&(e=e()),this._template=e===void 0?this.hasOwnProperty(JSCompiler_renameProperty(`is`,this))&&o(this.is)||Object.getPrototypeOf(this.prototype).constructor.template:e}return this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`_importPath`,this))){let e=this.importMeta;if(e)this._importPath=Zr(e.url);else{let e=K.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=ii,this.importPath=this.constructor.importPath;let e=n(this.constructor);if(e)for(let t in e){let n=e[t];if(this._canApplyPropertyDefault(t)){let e=typeof n.value==`function`?n.value.call(this):n.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}_canApplyPropertyDefault(e){return!this.hasOwnProperty(e)}static _processStyleText(e,t){return Xr(e,t)}static _finalizeTemplate(e){let t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;let n=this.importPath,r=n?Yr(n):``;a(this,t,e,r),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){let t=q(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:`open`,shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e),this.constructor._styleSheet&&(t.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),ui&&window.ShadyDOM&&window.ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=Yr(this.importPath)),Yr(e,t)}static _parseTemplateContent(e,n,r){return n.dynamicFns=n.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,n,r)}static _addTemplatePropertyEffect(e,n,r){return li&&!(n in this._properties)&&!(r.info.part.signature&&r.info.part.signature.static)&&!r.info.part.hostProp&&!e.nestedTemplate&&console.warn(`Property '${n}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,e,n,r)}}return s})})))()}function Po(e){if(e instanceof Lo)return e.value;throw Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}function Fo(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof Lo)return Po(e);throw Error(`non-template value passed to Polymer's html function: ${e}`)}var Io,Lo,Ro,zo;function Bo(){return(Bo=e((()=>{H(),Io=window.trustedTypes&&trustedTypes.createPolicy(`polymer-html-literal`,{createHTML:e=>e}),Lo=class{constructor(e,t){zo(e,t);let n=t.reduce((t,n,r)=>t+Po(n)+e[r+1],e[0]);this.value=n.toString()}toString(){return this.value}},Ro=function(e,...t){zo(e,t);let n=document.createElement(`template`),r=t.reduce((t,n,r)=>t+Fo(n)+e[r+1],e[0]);return Io&&(r=Io.createHTML(r)),n.innerHTML=r,n},zo=(e,t)=>{if(!Array.isArray(e)||!Array.isArray(e.raw)||t.length!==e.length-1)throw TypeError(`Invalid call to the html template tag`)}})))()}var Vo;function Ho(){return(Ho=e((()=>{No(),Bo(),Vo=Mo(HTMLElement)})))()}var Uo,Wo,Go,Ko,qo,Jo,Yo,Xo,Zo,Qo,$o,es;function ts(){return(ts=e((()=>{Jt(),Jr(),b(),ae(),w(),Ho(),S(),Uo=`bottom-bar-toolbar`,Wo=`bottom-bar-menu`,Go=c`
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
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);
		background-color: var(--cz-color-bg-brand-solid);
		color: var(--cz-color-text-on-brand);
		box-shadow: var(--cz-shadow-xs-skeumorphic);
	}

	#bottomBarToolbar::slotted(:not(slot)[disabled]) {
		opacity: var(--cosmoz-button-disabled-opacity, 0.15);
		pointer-events: none;
	}

	#bottomBarToolbar::slotted(:not(slot):hover) {
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
`,Ko=Symbol(`openMenu`),qo=e=>{let t=e.shadowRoot?.querySelector(`#dropdown`);t&&!t.hasAttribute(`hidden`)&&((t.shadowRoot?.querySelector(`cosmoz-dropdown`))?.shadowRoot?.querySelector(`#dropdownButton`))?.click()},Jo=e=>e.nodeType===Node.ELEMENT_NODE&&e.getAttribute(`slot`)!==`info`&&e.tagName!==`TEMPLATE`&&e.tagName!==`STYLE`&&e.tagName!==`DOM-REPEAT`&&e.tagName!==`DOM-IF`&&e.getAttribute(`slot`)!==`extra`,Yo=e=>{let t=[...e.childNodes],n=[];for(let e of t)if(e.tagName===`SLOT`){let t=e.assignedElements({flatten:!0});n.push(...t)}else n.push(e);return n},Xo=e=>{let t=Yo(e).filter(Jo).filter(e=>!e.hidden).sort((e,t)=>(Number(e.dataset.index)||0)-(Number(t.dataset.index)||0));if(t.length===0)return t;let n=t.reduce((e,t)=>parseInt(e.dataset.priority??`0`,10)>=parseInt(t.dataset.priority??`0`,10)?e:t,{dataset:{priority:`-1000`}});return[n,...t.filter(e=>e!==n)]},Zo=(e,t,n,r)=>{let i=t?Uo:Wo;e.setAttribute(`slot`,i),e.setAttribute(`tabindex`,`0`),e.classList.toggle(r,!t),e.classList.toggle(n,t)},Qo=(e,t,n)=>{let r=Xo(e),{maxToolbarItems:i=1}=e;if(!(r.length>0)){e.toggleAttribute(`has-menu-items`,!1);return}let a=r.slice(0,i),o=r.slice(a.length);a.forEach(e=>Zo(e,!0,t,n)),o.forEach(e=>Zo(e,!1,t,n)),e.toggleAttribute(`has-menu-items`,o.length>0)},$o=e=>{let{active:n=!1,maxToolbarItems:r=1}=e,i=a(!1);le({activity:Ko,callback:()=>qo(e),check:()=>n&&!e.hasAttribute(`hide-actions`),element:()=>e.shadowRoot?.querySelector(`#dropdown`)},[n]);let s=l(()=>qt(`height`),[]);f(()=>{i.current?s(e,n):s(e,n,{duration:0}),i.current=!0},[n]);let c=o(()=>Qo(e,`cosmoz-bottom-bar-toolbar`,`cosmoz-bottom-bar-menu`),[r]),u=a(null),d=o(()=>{let t=u.current;t&&(t.disconnect(),Yo(e).filter(Jo).forEach(e=>{t.observe(e,{attributes:!0,attributeFilter:[`hidden`]})}))},[]);y(()=>{u.current=new MutationObserver(()=>{d(),c()}),d();let t=new MutationObserver(()=>{d(),c()});return t.observe(e,{childList:!0}),()=>{u.current?.disconnect(),u.current=null,t.disconnect()}},[c]);let p=o(()=>{d(),c()},[c]);return x` <div id="bar" part="bar">
			<div id="info" part="info"><slot name="info"></slot></div>
			<slot
				id="bottomBarToolbar"
				name="bottom-bar-toolbar"
				@slotchange=${p}
			></slot>
			<cosmoz-dropdown-menu id="dropdown" part="dropdown">
				${t({slot:`button`})}
				<slot id="bottomBarMenu" name="bottom-bar-menu"></slot>
			</cosmoz-dropdown-menu>
			<slot name="extra" id="extraSlot"></slot>
		</div>
		<div hidden style="display:none">
			<slot id="content" @slotchange=${p}></slot>
		</div>`},customElements.define(`cosmoz-bottom-bar`,D($o,{observedAttributes:[`active`,`max-toolbar-items`],styleSheets:[Go]})),es=`
	<slot name="extra" slot="extra"></slot>
	<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
	<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
`,x(Object.assign([es],{raw:[es]})),Ro(Object.assign([es],{raw:[es]}))})))()}function ns(){return(ns=e((()=>{ts()})))()}var rs;function is(){return(is=e((()=>{S(),n(),rs=pe(class extends g{constructor(e){if(super(e),e.type!==fe.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return ee}})})))()}var as,os,ss;function cs(){return(cs=e((()=>{H(),G(),aa(),as=class e{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,os.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),os.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(t,n,r){return t instanceof e?t._cancelAsync():t=new e,t.setConfig(n,r),t}},os=new Set,ss=function(e){os.add(e)}})))()}function ls(){return(ls=e((()=>{H(),cs()})))()}var Q,us,ds;function fs(){return(fs=e((()=>{Q=Symbol(`memo`),us=e=>{let t=Q,n=Q,r;return function(i,a){if(t===i&&n===a)return r;let o=e(i,a);return r=o,t=i,n=a,o}},ds=e=>{let t=Q,n=Q,r=Q,i;return function(a,o,s){if(t===a&&n===o&&r===s)return i;let c=e(a,o,s);return i=c,t=a,n=o,r=s,c}}})))()}var ps,ms,hs;function gs(){return(gs=e((()=>{w(),S(),ps=c`
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
`,ms=()=>ce,hs=D(ms,{styleSheets:[ps]}),customElements.define(`cosmoz-spinner`,hs)})))()}function _s(){return(_s=e((()=>{gs()})))()}var vs,ys,bs,xs,Ss,Cs;function ws(){return(ws=e((()=>{u(),s(),d(),w(),vs=[`T`,` `],ys=e=>{if(!e||typeof e!=`string`)return;let t;return vs.some(n=>e.match(n)?(t=e.split(n),!0):!1),t||[e]},bs=(e,t)=>{let n=ys(e),r=ys(t);return{minDate:Array.isArray(n)?n.shift():null,minTime:Array.isArray(n)?n.shift():null,maxDate:Array.isArray(r)?r.shift():null,maxTime:Array.isArray(r)?r.shift():null}},xs=(e,t)=>{if(e||t)return!e&&t?`T${t}`:e&&!t?e:`${e}T${t}`},Ss=e=>{if(e){for(let t of vs)if(e.match(t)){let n=e.split(t);return{date:n.shift(),time:n.shift()}}return{date:e}}},Cs=e=>{let{dateLabel:t,timeLabel:n,min:r,max:i,step:a=`1`,value:o}=e,{minDate:s,maxDate:c,minTime:u,maxTime:d}=l(()=>bs(r,i),[r,i]),{date:f,time:p}=l(()=>Ss(o)??{},[o]);return y(()=>{e.dispatchEvent(new CustomEvent(`cosmoz-datetime-input-value-changed`,{bubbles:!0,composed:!0}))},[o]),x`
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
			.value="${f}"
			@value-changed="${t=>m(e,`value`,xs(t.target.value,p))}"
			.min="${s}"
			.max="${c}"
		></cosmoz-input>
		<cosmoz-input
			label="${n}"
			type="time"
			.value="${p}"
			@value-changed="${t=>m(e,`value`,xs(f,t.target.value))}"
			step="${a}"
			.min="${u}"
			.max="${d}"
		></cosmoz-input>
	`},customElements.define(`cosmoz-datetime-input`,D(Cs,{observedAttributes:[`date-label`,`time-label`,`min`,`max`,`step`],styleSheets:[v]}))})))()}function Ts(){return(Ts=e((()=>{ws()})))()}var Es,Ds;function Os(){return(Os=e((()=>{Es=e=>t=>{let n=t.match(e);return n&&{result:n,url:new URL(t,document.location.origin)}},Ds=(e,t)=>{for(let n of e){let e=n.rule,r=typeof e==`function`?e(t):Es(e)(t);if(r)return{...n,route:n,match:r,url:t}}}})))()}function ks(){return(ks=e((()=>{w()})))()}var As,js,Ms,Ns;function Ps(){return(Ps=e((()=>{w(),Os(),As=()=>window.location.href.replace(window.location.origin,``),js=()=>{let[e,t]=ie(As);return y(()=>{let e=()=>t(As);return window.addEventListener(`popstate`,e),()=>window.removeEventListener(`popstate`,e)},[t]),e},Ms=e=>{let t=js();return l(()=>Ds(e,t),[e,t])},Ns=(e,t=null,{notify:n=!0,replace:r=!0}={})=>{(r?history.replaceState:history.pushState).call(history,t,``,e),n&&queueMicrotask(()=>window.dispatchEvent(new CustomEvent(`popstate`,{bubbles:!1})))}})))()}var Fs;function Is(){return(Is=e((()=>{w(),Ps(),Fs=e=>{let t=Ms(e);return{route:t,result:l(()=>{if(t){let{handle:e,...n}=t;return e(n)}},[t])}}})))()}var Ls,Rs;function zs(){return(zs=e((()=>{w(),Ls=(e,t,n)=>e.dispatchEvent(new CustomEvent(t,{bubbles:!1,cancelable:!1,composed:!0,...n})),Rs=(e,t,n)=>{y(()=>{if(!n){Ls(e,`route-not-found`);return}Ls(e,`route-loading`,{detail:t}),Promise.resolve(n).then(()=>Ls(e,`route-loaded`,{detail:t})).catch(n=>Ls(e,`route-error`,{detail:{route:t,error:n}}))},[n])}})))()}var Bs;function Vs(){return(Vs=e((()=>{S(),p(),_(),w(),Is(),zs(),Bs=e=>{let t=e.routes,{route:n,result:a}=Fs(t);return Rs(e,n,a),r([a],()=>i(Promise.resolve(a).catch(()=>ce),ce))},customElements.define(`cosmoz-router`,D(Bs))})))()}function Hs(){return(Hs=e((()=>{ks(),Ps(),Is(),Vs()})))()}var Us,Ws,Gs;function Ks(){return(Ks=e((()=>{de(),Us=()=>new URL(location.hash.replace(/^#!?/iu,``).replace(`%23`,`#`),location.origin),Ws=(e,t=C)=>{let n=new URLSearchParams(Us().hash.replace(`#`,``)).getAll(e);switch(n.length){case 0:return;case 1:return t(n[0]);default:return n.map(t)}},Gs=(e,t=C)=>{let n=Array.from(new URLSearchParams(Us().hash.replace(`#`,``)).entries()).filter(([t])=>t.startsWith(e)).map(([n,r])=>t([n.replace(e,``),r])).filter(([,e])=>e!=null);return Object.fromEntries(n)}})))()}function*qs(e,t){if(e!==void 0){let n=0;for(let r of e)yield t(r,n++)}}function Js(){return(Js=e((()=>{})))()}function Ys(e,t){return t===void 0?t={autoBom:!1}:typeof t!=`object`&&(console.warn(`Deprecated: Expected third argument to be a object`),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([`﻿`,e],{type:e.type}):e}function Xs(e,t,n){var r=new XMLHttpRequest;r.open(`GET`,e),r.responseType=`blob`,r.onload=function(){ec(r.response,t,n)},r.onerror=function(){console.error(`could not download file`)},r.send()}function Zs(e){var t=new XMLHttpRequest;t.open(`HEAD`,e,!1);try{t.send()}catch{}return t.status>=200&&t.status<=299}function Qs(e){try{e.dispatchEvent(new MouseEvent(`click`))}catch{var t=document.createEvent(`MouseEvents`);t.initMouseEvent(`click`,!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var $,$s,ec;function tc(){return(tc=e((()=>{$=typeof window==`object`&&window.window===window?window:typeof self==`object`&&self.self===self?self:typeof global==`object`&&global.global===global?global:void 0,$s=$.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),ec=$.saveAs||(typeof window!=`object`||window!==$?function(){}:`download`in HTMLAnchorElement.prototype&&!$s?function(e,t,n){var r=$.URL||$.webkitURL,i=document.createElement(`a`);t=t||e.name||`download`,i.download=t,i.rel=`noopener`,typeof e==`string`?(i.href=e,i.origin===location.origin?Qs(i):Zs(i.href)?Xs(e,t,n):Qs(i,i.target=`_blank`)):(i.href=r.createObjectURL(e),setTimeout(function(){r.revokeObjectURL(i.href)},4e4),setTimeout(function(){Qs(i)},0))}:`msSaveOrOpenBlob`in navigator?function(e,t,n){if(t=t||e.name||`download`,typeof e==`string`){if(Zs(e))Xs(e,t,n);else{var r=document.createElement(`a`);r.href=e,r.target=`_blank`,setTimeout(function(){Qs(r)})}}else navigator.msSaveOrOpenBlob(Ys(e,n),t)}:function(e,t,n,r){if(r||=open(``,`_blank`),r&&(r.document.title=r.document.body.innerText=`downloading...`),typeof e==`string`)return Xs(e,t,n);var i=e.type===`application/octet-stream`,a=/constructor/i.test($.HTMLElement)||$.safari,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||i&&a||$s)&&typeof FileReader<`u`){var s=new FileReader;s.onloadend=function(){var e=s.result;e=o?e:e.replace(/^data:[^;]*;/,`data:attachment/file;`),r?r.location.href=e:location=e,r=null},s.readAsDataURL(e)}else{var c=$.URL||$.webkitURL,l=c.createObjectURL(e);r?r.location=l:location.href=l,r=null,setTimeout(function(){c.revokeObjectURL(l)},4e4)}}),$.saveAs=ec.saveAs=ec})))()}var nc;function rc(){return(rc=e((()=>{nc=function(e){e&&console.log(e)}})))()}var ic;function ac(){return(ac=e((()=>{rc(),ic=class{constructor(e,t){this._filename=e,this.buffer=null,this.lastDownloadBlobUrl=null,this._mimeType=t}generate(){}createDownloadUrl(){this.buffer||this.generate();let e=new Blob([this.buffer],{type:this._mimeType});return this.lastDownloadBlobUrl&&window.URL.revokeObjectURL(this.lastDownloadBlobUrl),this.lastDownloadBlobUrl=URL.createObjectURL(e),this.lastDownloadBlobUrl}createDownloadLink(e){let t=e instanceof HTMLAnchorElement?e:document.createElement(`a`);return typeof e==`string`&&(t.innerHTML=e),t.href=this.createDownloadUrl(),t.download=this._filename,t.hasChildNodes||(t.innerText=this._filename),nc(`Link created for file `+this._filename),t}}})))()}var oc,sc,cc;function lc(){return(lc=e((()=>{rc(),ac(),oc=null,sc=class extends ic{constructor(e,t){super(e,`application/zip`),this.files=[],this.createFolderEntries=!!t;let n=new Date;this.timeInt=Math.round(n.getSeconds()/2)|n.getMinutes()<<5|n.getHours()<<11,this.dateInt=n.getFullYear()-1980<<9|n.getMonth()+1<<5|n.getDate()}addFileFromString(e,t){let n=new TextEncoder(`utf-8`).encode(t);return this.addFileFromUint8Array(e,n),this}addFileFromUint8Array(e,t){if(!(t instanceof Uint8Array))throw Error(`invalid parameter`);return this.files.push({name:e.replace(`\\`,`/`),data:t}),this}generate(){nc(`NullZip archive generation started`);let e={};for(let t of this.files)t.size=t.data?t.data.byteLength:0,t.crc=t.data?this.crc(t.data):0,e[t.name]=t;let t=[];if(this.createFolderEntries){let n=/\//giu;for(let r of this.files){let i=r.name;for(let r=n.exec(i);r!==null;r=n.exec(i)){let n={name:i.substr(0,r.index+1),size:0,crc:0,data:new Uint8Array};e[n.name]===void 0&&(e[n.name]=n,t.push(n))}}}Array.prototype.push.apply(this.files,t),this.files.sort((e,t)=>e.name.length-t.name.length||e.name.localeCompare(t.name));let n=this.files.reduce((e,t)=>e+76+t.name.length*2+t.size,22);nc(`Estimated file size: `+n),this.buffer=new ArrayBuffer(n);let r=new cc(this.buffer),i=this.hex2u8a(`504b0304140000000000`);for(let e of this.files)e.offs=r.i,r.writeByteArray(i),r.uint16(this.timeInt),r.uint16(this.dateInt),r.uint32(e.crc),r.uint32(e.size),r.uint32(e.size),r.uint16(e.name.length),r.uint16(0),r.writeASCII(e.name),e.size>0&&r.writeByteArray(e.data);let a=r.i,o=this.hex2u8a(`504b01023f00140000000000`);for(let e of this.files)r.writeByteArray(o),r.uint16(this.timeInt),r.uint16(this.dateInt),r.uint32(e.crc),r.uint32(e.size),r.uint32(e.size),r.uint16(e.name.length),r.uint16(0),r.uint16(0),r.uint16(0),r.uint16(0),r.uint32(e.size?32:48),r.uint32(e.offs),r.writeASCII(e.name);let s=r.i-a;return r.writeByteArray(this.hex2u8a(`504b050600000000`)),r.uint16(this.files.length),r.uint16(this.files.length),r.uint32(s),r.uint32(a),r.uint16(0),nc(`Finished creating zip. size=`+r.i+`, predicted size=`+n),this.buffer}crc(e){let t,n,r=-1;if(!oc)for(oc=[],n=0;n<256;t=++n){for(let e=0;e<8;e++)t=t&1?3988292384^t>>>1:t>>>1;oc[n]=t}for(let t=0;t<e.byteLength;t++)r=r>>>8^oc[(r^e[t])&255];return(r^-1)>>>0}hex2u8a(e){let t=new Uint8Array(Math.ceil(e.length/2));for(let n=0;n<t.length;n++)t[n]=parseInt(e.substr(n*2,2),16);return t}},cc=class{constructor(e){this.dw=new DataView(e),this.i=0,this.le=!0,this.utf8encoder=new TextEncoder(`utf-8`)}uint8(e){this.dw.setUint8(this.i++,e)}uint16(e){this.dw.setUint16(this.i,e,this.le),this.i+=2}uint32(e){this.dw.setUint32(this.i,e,this.le),this.i+=4}writeByteArray(e){if(!(e instanceof Uint8Array))throw Error(`invalid parameter`);new Uint8Array(this.dw.buffer).set(e,this.i),this.i+=e.byteLength}writeASCII(e){for(let t=0;t<e.length;t++)this.dw.setUint8(this.i++,e.charCodeAt(t)&255)}}})))()}var uc,dc,fc,pc,mc,hc,gc;function _c(){return(_c=e((()=>{ac(),lc(),uc=`application/vnd.openxmlformats-officedocument.spreadsheetml`,dc=`http://schemas.openxmlformats.org`,fc=`${dc}/spreadsheetml/2006/main`,pc=`${dc}/package/2006`,mc=`${dc}/officeDocument/2006/relationships`,hc=[{id:164,code:`yyyy&quot;-&quot;mm&quot;-&quot;dd`},{id:165,code:`yyyy&quot;-&quot;mm&quot;-&quot;dd&quot; &quot;h&quot;:&quot;mm&quot;:&quot;ss`}],gc=class extends ic{constructor(e,t){super(e,`${uc}.sheet`),this.sheets=[],this.frozen=!!(t&&t.frozen),this.autoFilter=!!(t&&t.filter)}addSheetFromData(e,t){let n=this.sheets.length+1;return this.sheets.push({id:n,name:this.escapeXml(t||`Sheet`+n),data:e}),this}generate(){let e=[{name:`xl/styles.xml`,xml:`<styleSheet xmlns="${fc}" xmlns:mc="${dc}/markup-compatibility/2006"><numFmts count="${hc.length}">${hc.map(e=>`<numFmt numFmtId="${e.id}" formatCode="${e.code}" />`)}</numFmts><fonts count="2"><font><sz val="10.0"/><color rgb="FF000000"/><name val="Arial"/></font><font><b/></font></fonts><fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="lightGray"/></fill></fills><borders count="1"><border><left/><right/><top/><bottom/></border></borders><cellStyleXfs count="1"><xf borderId="0" fillId="0" fontId="0" numFmtId="0" applyAlignment="1" applyFont="1"/></cellStyleXfs><cellXfs><xf borderId="0" fillId="0" fontId="0" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment/></xf><xf borderId="0" fillId="0" fontId="1" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment/></xf><xf borderId="0" fillId="0" fontId="0" numFmtId="164" xfId="0" applyAlignment="1" applyFont="1" applyNumberFormat="1"><alignment /></xf><xf borderId="0" fillId="0" fontId="0" numFmtId="165" xfId="0" applyAlignment="1" applyFont="1" applyNumberFormat="1"><alignment /></xf></cellXfs><cellStyles count="1"><cellStyle xfId="0" name="Normal" builtinId="0"/></cellStyles><dxfs count="0"/></styleSheet>`},{name:`xl/sharedStrings.xml`,xml:`<sst xmlns="${fc}" count="2" uniqueCount="2"><si><t>text here</t></si></sst>`},{name:`xl/workbook.xml`,xml:`<workbook xmlns="${fc}" xmlns:r="${mc}"><workbookPr/><sheets>`+this.sheets.map(e=>`<sheet state="visible" name="${e.name}" sheetId="${e.id}" r:id="rId${e.id+2}"/>`).join(``)+`</sheets><definedNames/><calcPr/></workbook>`},{name:`xl/_rels/workbook.xml.rels`,xml:`<Relationships xmlns="${pc}/relationships"><Relationship Id="rId1" Type="${mc}/styles" Target="styles.xml" /><Relationship Id="rId2" Type="${mc}/sharedStrings" Target="sharedStrings.xml"/>`+this.sheets.map(e=>`<Relationship Id="rId${e.id+2}" Type="${mc}/worksheet" Target="worksheets/sheet${e.id}.xml"/>`).join(``)+`</Relationships>`},{name:`[Content_Types].xml`,xml:`<Types xmlns="${pc}/content-types"><Default ContentType="application/xml" Extension="xml"/><Default ContentType="application/vnd.openxmlformats-package.relationships+xml" Extension="rels"/>`+this.sheets.map(e=>`<Override ContentType="${uc}.worksheet+xml" PartName="/xl/worksheets/sheet${e.id}.xml"/>`).join(``)+`<Override ContentType="${uc}.sharedStrings+xml" PartName="/xl/sharedStrings.xml"/><Override ContentType="${uc}.styles+xml" PartName="/xl/styles.xml" /><Override ContentType="${uc}.sheet.main+xml" PartName="/xl/workbook.xml"/></Types>`},{name:`_rels/.rels`,xml:`<Relationships xmlns="${pc}/relationships"><Relationship Id="rId1" Type="${mc}/officeDocument" Target="xl/workbook.xml"/></Relationships>`}],t=this.sheets.map(e=>{let t=0,n=e.data.map((e,n)=>{let r=this.frozen&&n===0?` s="1"`:``;e.length>t&&(t=e.length);let i=e.map((e,t)=>{let i=this.colName(t)+(n+1);return typeof e==`number`?`<c r="${i}"${r}><v>${e}</v></c>`:e instanceof Date?`<c s="${e.getHours()||e.getMinutes()||e.getSeconds()?3:2}"><v>${this.dateToExcelDate(e)}</v></c>`:`<c t="inlineStr"${r}><is><t>${this.escapeXml(e.toString())}</t></is></c>`});return`<row r="${n+1}">${i.join(``)}</row>`});return{name:`xl/worksheets/sheet${e.id}.xml`,xml:`<worksheet xmlns="${fc}"><sheetViews><sheetView workbookViewId="0"`+(this.frozen?` tabSelected="1"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView>`:`/>`)+`</sheetViews><sheetFormatPr customHeight="1" defaultColWidth="17.5" defaultRowHeight="15.75"/><sheetData>${n.join(``)}</sheetData>`+(this.autoFilter?`<autoFilter ref="A1:${this.colName(t)}${e.data.length}"/>`:``)+`</worksheet>`}}),n=new sc(this._filename,!1);return[...e,...t].forEach(e=>n.addFileFromString(e.name,e.xml)),this.buffer=n.generate(),this.buffer}colName(e){return e<26?String.fromCharCode(e+65):String.fromCharCode(Math.floor(e/26+64))+String.fromCharCode(Math.floor(e%26+65))}escapeXml(e){return e.replace(/[<>&'"]/gu,e=>[`&lt;`,`&gt;`,`&amp;`,`&apos;`,`&quot;`][`<>&'"`.indexOf(e)])}dateToExcelDate(e){return 25569+(e.getTime()-e.getTimezoneOffset()*6e4)/864e5}}})))()}function vc(){return(vc=e((()=>{_c()})))()}var yc,bc;function xc(){return(xc=e((()=>{Jt(),yc=(e,t)=>{Object.assign(e.style,{display:t?``:`none`})},bc=class extends HTMLElement{static get observedAttributes(){return[`opened`]}toggle=qt(`height`);constructor(){super();let e=new CSSStyleSheet;e.replaceSync(`
      :host { display: block; }
		`);let t=this.attachShadow({mode:`open`});t.appendChild(document.createElement(`slot`)),t.adoptedStyleSheets=[e]}connectedCallback(){yc(this,this.getAttribute(`opened`)!=null)}attributeChangedCallback(e,t,n){if(e===`opened`){let e=n!=null;return this.isConnected?this.toggle(this,e):yc(this,e)}}},customElements.define(`cosmoz-collapse`,bc)})))()}function Sc(){return(Sc=e((()=>{xc()})))()}export{he as $,Ro as A,Mr as B,ss as C,ns as D,is as E,Wi as F,qe as G,Gt as H,Ui as I,Ie as J,Je as K,Jr as L,aa as M,ra as N,Vo as O,Y as P,be as Q,Nr as R,as as S,rs as T,Qe as U,Ar as V,$e as W,ve as X,ke as Y,xe as Z,_s as _,tc as a,ds as b,qs as c,Gs as d,me as et,Ws as f,Ts as g,Ns as h,_c as i,Bo as j,Ho as k,Us as l,Ps as m,vc as n,ec as o,Hs as p,Fe as q,gc as r,Js as s,Sc as t,Ks as u,fs as v,cs as w,ls as x,us as y,Fr as z};