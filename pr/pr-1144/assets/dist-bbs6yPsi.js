import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Bt as t,D as n,E as r,Ft as i,H as a,Ht as o,Jt as s,Kt as c,M as l,N as u,Nt as d,O as f,P as p,St as m,T as h,Xt as g,Yt as _,Z as v,Zt as y,_ as b,at as x,bt as ee,ct as S,d as C,f as w,gt as T,ht as E,it as te,jt as ne,kt as re,l as ie,lt as ae,ot as D,st as oe,u as se,v as ce,wt as le,xt as ue,yt as de,zt as O}from"./dist-CgCceko7.js";var fe;function pe(){return(pe=e((()=>{fe=e=>!!(e==null||Array.isArray(e)&&e.length===0||typeof e==`string`&&e.length===0||typeof e==`number`&&e===0)})))()}var me,he,ge,_e,ve;function ye(){return(ye=e((()=>{me={isoBasic:/^\d{4}-\d{2}-\d{2}$/iu},he=e=>typeof e==`string`&&me.isoBasic.test(e)?new Date(`${e}T00:00`):new Date(e),ge=e=>{if(e==null)return;if(e instanceof Date&&!isNaN(e.getTime()))return e;if(typeof e!=`number`&&typeof e!=`string`)return;let t=he(e);if(!(t instanceof Date&&isNaN(t.getTime())))return t},_e=e=>e<10?`0`+e:e,ve=e=>e instanceof Date?e.getFullYear()+`-`+_e(e.getMonth()+1)+`-`+_e(e.getDate())+`T`+_e(e.getHours())+`:`+_e(e.getMinutes())+`:`+_e(e.getSeconds())+`.`+(e.getMilliseconds()/1e3).toFixed(3).slice(2,5):null})))()}var be;function xe(){return(xe=e((()=>{E(),be=o(t`
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
`)})))()}var Se;function Ce(){return(Ce=e((()=>{E(),Se=t`
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
`})))()}var we;function Te(){return(Te=e((()=>{Ce(),E(),we=t`
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
`})))()}var Ee,De;function Oe(){return(Oe=e((()=>{xe(),E(),g(),x(),Te(),Ee=[`variant`,`size`,`disabled`,`full-width`,`type`,`value`,`href`,`target`,`rel`,`download`],De=e=>{let t=e.hasAttribute(`disabled`),n=e.getAttribute(`type`)||`button`,r=e.getAttribute(`href`);O(()=>{let t=t=>{e.hasAttribute(`disabled`)&&t.stopImmediatePropagation()};return e.addEventListener(`click`,t,{capture:!0}),()=>e.removeEventListener(`click`,t,{capture:!0})},[]);let i=_`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`;if(r!=null){let n=e.getAttribute(`target`),a=e.getAttribute(`rel`),o=e.getAttribute(`download`);return _`
			<a
				href=${r}
				class="button"
				part="button"
				aria-disabled=${t?`true`:c}
				target=${D(n)}
				rel=${D(a)}
				download=${D(o)}
				>${i}</a
			>
		`}return _`
		<button type=${n} class="button" ?disabled=${t} part="button">
			${i}
		</button>
	`},customElements.define(`cosmoz-button`,T(De,{observedAttributes:Ee,styleSheets:[be,we],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}function ke(){return(ke=e((()=>{Oe()})))()}function Ae(){return(Ae=e((()=>{g(),x()})))()}function je(){return(je=e((()=>{g(),x()})))()}function Me(){return(Me=e((()=>{g(),x()})))()}function Ne(){return(Ne=e((()=>{g(),x()})))()}function Pe(){return(Pe=e((()=>{g(),x()})))()}var Fe;function Ie(){return(Ie=e((()=>{g(),x(),Fe=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>_`
  <svg
    slot=${D(e)}
    class=${`announcement-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${r}
    height=${i}
    style=${D(a)}
  >
    ${te(t,()=>y`<title>${t}</title>`)}
    <path
      d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"
    />
  </svg>
`})))()}function Le(){return(Le=e((()=>{g(),x()})))()}function Re(){return(Re=e((()=>{g(),x()})))()}function ze(){return(ze=e((()=>{g(),x()})))()}function Be(){return(Be=e((()=>{g(),x()})))()}function Ve(){return(Ve=e((()=>{g(),x()})))()}function He(){return(He=e((()=>{g(),x()})))()}function Ue(){return(Ue=e((()=>{g(),x()})))()}function We(){return(We=e((()=>{g(),x()})))()}function Ge(){return(Ge=e((()=>{g(),x()})))()}function Ke(){return(Ke=e((()=>{g(),x()})))()}var qe;function Je(){return(Je=e((()=>{g(),x(),qe=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>_`
  <svg
    slot=${D(e)}
    class=${`delete-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${r}
    height=${i}
    style=${D(a)}
  >
    ${te(t,()=>y`<title>${t}</title>`)}
    <path
      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
    />
  </svg>
`})))()}function Ye(){return(Ye=e((()=>{g(),x()})))()}function Xe(){return(Xe=e((()=>{g(),x()})))()}function Ze(){return(Ze=e((()=>{g(),x()})))()}var Qe;function $e(){return($e=e((()=>{g(),x(),Qe=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>_`
  <svg
    slot=${D(e)}
    class=${`error-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${r}
    height=${i}
    style=${D(a)}
  >
    ${te(t,()=>y`<title>${t}</title>`)}
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
    />
  </svg>
`})))()}function et(){return(et=e((()=>{g(),x()})))()}function tt(){return(tt=e((()=>{g(),x()})))()}function nt(){return(nt=e((()=>{g(),x()})))()}function rt(){return(rt=e((()=>{g(),x()})))()}function it(){return(it=e((()=>{g(),x()})))()}function at(){return(at=e((()=>{g(),x()})))()}function ot(){return(ot=e((()=>{g(),x()})))()}function st(){return(st=e((()=>{g(),x()})))()}function ct(){return(ct=e((()=>{g(),x()})))()}function lt(){return(lt=e((()=>{g(),x()})))()}function ut(){return(ut=e((()=>{g(),x()})))()}function dt(){return(dt=e((()=>{g(),x()})))()}function ft(){return(ft=e((()=>{g(),x()})))()}function pt(){return(pt=e((()=>{g(),x()})))()}function mt(){return(mt=e((()=>{g(),x()})))()}function ht(){return(ht=e((()=>{g(),x()})))()}function gt(){return(gt=e((()=>{g(),x()})))()}function _t(){return(_t=e((()=>{g(),x()})))()}function vt(){return(vt=e((()=>{g(),x()})))()}function yt(){return(yt=e((()=>{g(),x()})))()}function bt(){return(bt=e((()=>{g(),x()})))()}function xt(){return(xt=e((()=>{g(),x()})))()}function St(){return(St=e((()=>{g(),x()})))()}function Ct(){return(Ct=e((()=>{g(),x()})))()}function wt(){return(wt=e((()=>{g(),x()})))()}function Tt(){return(Tt=e((()=>{g(),x()})))()}function Et(){return(Et=e((()=>{g(),x()})))()}function Dt(){return(Dt=e((()=>{g(),x()})))()}function Ot(){return(Ot=e((()=>{g(),x()})))()}function kt(){return(kt=e((()=>{g(),x()})))()}function At(){return(At=e((()=>{g(),x()})))()}function jt(){return(jt=e((()=>{g(),x()})))()}function Mt(){return(Mt=e((()=>{g(),x()})))()}function Nt(){return(Nt=e((()=>{g(),x()})))()}function Pt(){return(Pt=e((()=>{g(),x()})))()}function Ft(){return(Ft=e((()=>{g(),x()})))()}function It(){return(It=e((()=>{g(),x()})))()}function Lt(){return(Lt=e((()=>{g(),x()})))()}function Rt(){return(Rt=e((()=>{g(),x()})))()}function zt(){return(zt=e((()=>{g(),x()})))()}function Bt(){return(Bt=e((()=>{g(),x()})))()}function Vt(){return(Vt=e((()=>{g(),x()})))()}function Ht(){return(Ht=e((()=>{g(),x()})))()}function Ut(){return(Ut=e((()=>{g(),x()})))()}function Wt(){return(Wt=e((()=>{g(),x()})))()}function Gt(){return(Gt=e((()=>{Ae(),je(),Me(),Ne(),Pe(),Ie(),Le(),Re(),ze(),Be(),Ve(),He(),Ue(),We(),Ge(),Ke(),Je(),Ye(),Xe(),Ze(),$e(),et(),tt(),nt(),rt(),it(),at(),ot(),st(),ct(),lt(),ut(),dt(),ft(),pt(),mt(),ht(),gt(),_t(),vt(),yt(),bt(),xt(),St(),Ct(),wt(),Tt(),Et(),Dt(),Ot(),kt(),At(),jt(),Mt(),Nt(),Pt(),Ft(),It(),Lt(),Rt(),zt(),Bt(),Vt(),Ht(),Ut(),Wt()})))()}var Kt,qt;function Jt(){return(Jt=e((()=>{Kt={duration:250},qt=e=>(t,n,r)=>{let i=`max`+e.charAt(0).toUpperCase()+e.slice(1);Object.assign(t.style,{[i]:``,display:``,overflow:`hidden`});let{[e]:a}=t.getBoundingClientRect(),o=[0,a],[s,c]=n?o:o.slice().reverse(),l=t.animate([{[i]:`${s}px`},{[i]:`${c}px`}],{...Kt,...r});l.onfinish=()=>Object.assign(t.style,{[i]:``,display:n?``:`none`,overflow:n?``:`visible`})}})))()}var Yt,Xt,Zt;function Qt(){return(Qt=e((()=>{g(),ue(),Yt=`important`,Xt=` !`+Yt,Zt=de(class extends ee{constructor(e){if(super(e),e.type!==m.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(Xt);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?Yt:``):n[e]=r}}return s}})})))()}var $t;function en(){return(en=e((()=>{$t=(e=HTMLElement)=>class extends e{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent(`connected`))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent(`disconnected`))}}})))()}var tn,nn;function rn(){return(rn=e((()=>{E(),g(),en(),tn=t`
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
`,nn=()=>_`<div class="wrap" part="wrap"><slot></slot></div>`,customElements.define(`cosmoz-dropdown-content`,$t(T(nn,{styleSheets:[tn]})))})))()}function an(e,t,n){return M(e,j(t,n))}function on(e,t){return typeof e==`function`?e(t):e}function k(e){return e.split(`-`)[0]}function sn(e){return e.split(`-`)[1]}function cn(e){return e===`x`?`y`:`x`}function ln(e){return e===`y`?`height`:`width`}function A(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function un(e){return cn(A(e))}function dn(e,t,n){n===void 0&&(n=!1);let r=sn(e),i=un(e),a=ln(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=gn(o)),[o,gn(o)]}function fn(e){let t=gn(e);return[pn(e),t,pn(t)]}function pn(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}function mn(e,t,n){switch(e){case`top`:case`bottom`:return n?t?wn:Cn:t?Cn:wn;case`left`:case`right`:return t?Tn:En;default:return[]}}function hn(e,t,n,r){let i=sn(e),a=mn(k(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(pn)))),a}function gn(e){let t=k(e);return Sn[t]+e.slice(t.length)}function _n(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function vn(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:_n(e)}function yn(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}var j,M,bn,xn,N,Sn,Cn,wn,Tn,En;function Dn(){return(Dn=e((()=>{j=Math.min,M=Math.max,bn=Math.round,xn=Math.floor,N=e=>({x:e,y:e}),Sn={left:`right`,right:`left`,bottom:`top`,top:`bottom`},Cn=[`left`,`right`],wn=[`right`,`left`],Tn=[`top`,`bottom`],En=[`bottom`,`top`]})))()}function On(e,t,n){let{reference:r,floating:i}=e,a=A(t),o=un(t),s=ln(o),c=k(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=sn(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function kn(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=on(t,e),p=vn(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=yn(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=yn(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var An,jn,Mn,Nn,Pn;function Fn(){return(Fn=e((()=>{Dn(),An=50,jn=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:kn},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=On(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<An&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=On(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},Mn=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=on(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=k(r),_=A(o),v=k(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[gn(o)]:fn(o)),x=p!==`none`;!d&&x&&b.push(...hn(o,m,p,y));let ee=[o,...b],S=await s.detectOverflow(t,h),C=[],w=i.flip?.overflows||[];if(l&&C.push(S[g]),u){let e=dn(r,a,y);C.push(S[e[0]],S[e[1]])}if(w=[...w,{placement:r,overflows:C}],!C.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=ee[e];if(t&&(u!==`alignment`||_===A(t)||w.every(e=>A(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:w},reset:{placement:t}};let n=w.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=w.filter(e=>{if(x){let t=A(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o}if(r!==n)return{reset:{placement:n}}}return{}}}},Nn=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=on(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=A(i),p=cn(f),m=u[p],h=u[f],g=(e,t)=>an(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}},Pn=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){let{placement:n,rects:r,platform:i,elements:a}=t,{apply:o=()=>{},...s}=on(e,t),c=await i.detectOverflow(t,s),l=k(n),u=sn(n),d=A(n)===`y`,{width:f,height:p}=r.floating,m,h;l===`top`||l===`bottom`?(m=l,h=u===(await(i.isRTL==null?void 0:i.isRTL(a.floating))?`start`:`end`)?`left`:`right`):(h=l,m=u===`end`?`top`:`bottom`);let g=p-c.top-c.bottom,_=f-c.left-c.right,v=j(p-c[m],g),y=j(f-c[h],_),b=t.middlewareData.shift,x=!b,ee=v,S=y;b!=null&&b.enabled.x&&(S=_),b!=null&&b.enabled.y&&(ee=g),x&&!u&&(d?S=f-2*M(c.left,c.right):ee=p-2*M(c.top,c.bottom)),await o({...t,availableWidth:S,availableHeight:ee});let C=await i.getDimensions(a.floating);return f!==C.width||p!==C.height?{reset:{rects:!0}}:{}}}}})))()}function In(){return typeof window<`u`}function Ln(e){return Rn(e)?(e.nodeName||``).toLowerCase():`#document`}function P(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function F(e){return((Rn(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function Rn(e){return In()?e instanceof Node||e instanceof P(e).Node:!1}function I(e){return In()?e instanceof Element||e instanceof P(e).Element:!1}function L(e){return In()?e instanceof HTMLElement||e instanceof P(e).HTMLElement:!1}function zn(e){return!In()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof P(e).ShadowRoot}function Bn(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=R(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function Vn(e){return/^(table|td|th)$/.test(Ln(e))}function Hn(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}function Un(e){let t=I(e)?R(e):e;return B(t.transform)||B(t.translate)||B(t.scale)||B(t.rotate)||B(t.perspective)||!Gn()&&(B(t.backdropFilter)||B(t.filter))||Zn.test(t.willChange||``)||Qn.test(t.contain||``)}function Wn(e){let t=z(e);for(;L(t)&&!Kn(t);){if(Un(t))return t;if(Hn(t))return null;t=z(t)}return null}function Gn(){return $n??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),$n}function Kn(e){return/^(html|body|#document)$/.test(Ln(e))}function R(e){return P(e).getComputedStyle(e)}function qn(e){return I(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function z(e){if(Ln(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||zn(e)&&e.host||F(e);return zn(t)?t.host:t}function Jn(e){let t=z(e);return Kn(t)?(e.ownerDocument||e).body:L(t)&&Bn(t)?t:Jn(t)}function Yn(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Jn(e),i=r===e.ownerDocument?.body,a=P(r);if(i){let e=Xn(a);return t.concat(a,a.visualViewport||[],Bn(r)?r:[],e&&n?Yn(e):[])}return t.concat(r,Yn(r,[],n))}function Xn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}var Zn,Qn,B,$n;function er(){return(er=e((()=>{Zn=/transform|translate|scale|rotate|perspective|filter/,Qn=/paint|layout|strict|content/,B=e=>!!e&&e!==`none`})))()}function tr(e){let t=R(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=L(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=bn(n)!==a||bn(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function nr(e){return I(e)?e:e.contextElement}function rr(e){let t=nr(e);if(!L(t))return N(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=tr(t),o=(a?bn(n.width):n.width)/r,s=(a?bn(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}function ir(e){let t=P(e);return!Gn()||!t.visualViewport?Tr:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ar(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===P(e)}function V(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=nr(e),o=N(1);t&&(r?I(r)&&(o=rr(r)):o=rr(e));let s=ar(a,n,r)?ir(a):N(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=P(a),t=I(r)?P(r):r,n=e,i=Xn(n);for(;i&&t!==n;){let e=rr(i),t=i.getBoundingClientRect(),r=R(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=P(i),i=Xn(n)}}return yn({width:u,height:d,x:c,y:l})}function or(e,t){let n=qn(e).scrollLeft;return t?t.left+n:V(F(e)).left+n}function sr(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-or(e,n),y:n.top+t.scrollTop}}function cr(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=F(r),s=t?Hn(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=N(1),u=N(0),d=L(r);if((d||!a)&&((Ln(r)!==`body`||Bn(o))&&(c=qn(r)),d)){let e=V(r);l=rr(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?sr(o,c):N(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function lr(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function ur(e){let t=qn(e),n=e.ownerDocument.body,r=M(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=M(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+or(e),o=-t.scrollTop;return R(n).direction===`rtl`&&(a+=M(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}function dr(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=P(e),a=F(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!Gn()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if(or(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=Er&&(s-=o)}return{width:s,height:c,x:l,y:u}}function fr(e,t){let n=V(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=rr(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function pr(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=dr(e,n,t);else if(t===`document`)r=ur(F(e));else if(I(t))r=fr(t,n);else{let n=ir(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return yn(r)}function mr(e,t){let n=t.get(e);if(n)return n;let r=Yn(e,[],!1).filter(e=>I(e)&&Ln(e)!==`body`),i=null,a=R(e).position===`fixed`,o=a?z(e):e;for(;I(o)&&!Kn(o);){let e=R(o),t=Un(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=z(o)}return t.set(e,r),r}function hr(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Hn(t)?[]:mr(t,this._c):[].concat(n),r],o=pr(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=pr(t,a[e],i);s=M(n.top,s),c=j(n.right,c),l=j(n.bottom,l),u=M(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function gr(e){let{width:t,height:n}=tr(e);return{width:t,height:n}}function _r(e,t,n){let r=L(t),i=F(t),a=n===`fixed`,o=V(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=N(0);if((r||!a)&&((Ln(t)!==`body`||Bn(i))&&(s=qn(t)),r)){let e=V(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=or(i));let l=i&&!r&&!a?sr(i,s):N(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function vr(e){return R(e).position===`static`}function yr(e,t){if(!L(e)||R(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return F(e)===n&&(n=n.ownerDocument.body),n}function br(e,t){let n=P(e);if(Hn(e))return n;if(!L(e)){let t=z(e);for(;t&&!Kn(t);){if(I(t)&&!vr(t))return t;t=z(t)}return n}let r=yr(e,t);for(;r&&Vn(r)&&vr(r);)r=yr(r,t);return r&&Kn(r)&&vr(r)&&!Un(r)?n:r||Wn(e)||n}function xr(e){return R(e).direction===`rtl`}function Sr(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Cr(e,t,n){let r=null,i,a=F(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=xn(d),h=xn(a.clientWidth-(u+f)),g=xn(a.clientHeight-(d+p)),_=xn(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:M(0,j(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(!Sr(l,e.getBoundingClientRect()))return s();if(n!==c){if(!y)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(b,{...v,root:a.ownerDocument})}catch{r=new IntersectionObserver(b,v)}r.observe(e)}let c=P(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function wr(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=nr(e),u=i||a?[...l?Yn(l):[],...t?Yn(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?Cr(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?V(e):null;c&&g();function g(){let t=V(e);h&&!Sr(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var Tr,Er,Dr,Or,kr,Ar,jr,Mr;function Nr(){return(Nr=e((()=>{Fn(),Dn(),er(),Tr=N(0),Er=25,Dr=async function(e){let t=this.getOffsetParent||br,n=this.getDimensions,r=await n(e.floating);return{reference:_r(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},Or={convertOffsetParentRelativeRectToViewportRelativeRect:cr,getDocumentElement:F,getClippingRect:hr,getOffsetParent:br,getElementRects:Dr,getClientRects:lr,getDimensions:gr,getScale:rr,isElement:I,isRTL:xr},kr=Nn,Ar=Mn,jr=Pn,Mr=(e,t,n)=>{let r=new Map,i=n??{},a={...Or,...i.platform,_c:r};return jn(e,t,{...i,platform:a})}})))()}var Pr,Fr;function Ir(){return(Ir=e((()=>{E(),Nr(),Pr=[Ar({fallbackAxisSideDirection:`start`,crossAxis:!1}),kr()],Fr=({placement:e=`bottom-start`,strategy:t,middleware:n=Pr}={})=>{let[r,a]=re(),[o,s]=re(),[c,l]=re();return O(()=>{if(!r||!(o instanceof HTMLElement)){l(void 0);return}return wr(r,o,()=>Mr(r,o,{placement:e,strategy:t,middleware:n}).then(l))},[r,o,e,t,n]),{setReference:a,setFloating:s,styles:i(()=>c?{left:`${c.x}px`,top:`${c.y}px`}:{},[c?.x,c?.y])}}})))()}var Lr,Rr,zr;function Br(){return(Br=e((()=>{C(),E(),Lr=e=>e.matches(`:focus-within`)?!0:(e.shadowRoot?.querySelector(`[popover]`))?.matches(`:focus-within`)??!1,Rr=({disabled:e,onFocus:t})=>{let[n,r]=re(),{focused:i,closed:a}=n||{},o=i&&!e,s=w({closed:a,onFocus:t}),c=d(e=>r(t=>({...t,closed:e})),[]),l=d(e=>{let t=e.currentTarget;return Lr(t)?r(e=>({focused:!0,closed:!e?.closed})):t.focus()},[]);return O(()=>{if(!o)return;let e=e=>{if(e.defaultPrevented)return;let{closed:t}=s;e.key===`Escape`&&!t?(e.preventDefault(),c(!0)):[`ArrowUp`,`Up`].includes(e.key)&&t&&(e.preventDefault(),c(!1))};return document.addEventListener(`keydown`,e,!0),()=>document.removeEventListener(`keydown`,e,!0)},[o]),{focused:o,active:o&&!a,setClosed:c,onToggle:l,onFocus:d(e=>{let t=Lr(e.currentTarget);r({focused:t}),s.onFocus?.(t)},[s])}},zr=e=>{let t=Rr(e),{onFocus:n}=t,r=le();return O(()=>{e.setAttribute(`tabindex`,`0`);let t=e=>{clearTimeout(r.current),n(e)},i=e=>{clearTimeout(r.current);let t=e.currentTarget;r.current=setTimeout(()=>n({currentTarget:t}),30)};return e.addEventListener(`focusin`,t),e.addEventListener(`focusout`,i),()=>{clearTimeout(r.current),e.removeEventListener(`focusin`,t),e.removeEventListener(`focusout`,i)}},[n]),t}})))()}var Vr,Hr,Ur;function Wr(){return(Wr=e((()=>{E(),g(),f(),S(),Qt(),rn(),Ir(),Br(),Vr=e=>e.preventDefault(),Hr=t`
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
`,Ur=e=>{let{placement:t,strategy:r,middleware:i,render:a}=e,{active:o,onToggle:s}=zr(e),l=le(),{styles:u,setReference:f,setFloating:p}=Fr({placement:t,strategy:r,middleware:i}),m=d(e=>{l.current=e,p(e)},[p]);return O(()=>{let e=l.current;e&&(o&&!e.matches(`:popover-open`)&&e.showPopover?.(),!o&&e.matches(`:popover-open`)&&e.hidePopover?.())},[o]),_`
		<div class="anchor" part="anchor" ${ae(f)}>
			<button
				@mousedown=${Vr}
				@click=${s}
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
			style="${Zt(u)}"
			${ae(m)}
			><slot></slot>${n([a],()=>a?.()||c)}</cosmoz-dropdown-content
		>
	`},customElements.define(`cosmoz-dropdown`,T(Ur,{styleSheets:[Hr]}))})))()}var Gr,Kr,qr;function Jr(){return(Jr=e((()=>{E(),g(),Gr=t`
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
`,Kr=()=>_` <slot></slot> `,customElements.define(`cosmoz-dropdown-list`,T(Kr,{styleSheets:[Gr]})),qr=({placement:e})=>_` <cosmoz-dropdown
		.placement=${e}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`,customElements.define(`cosmoz-dropdown-menu`,T(qr))})))()}function Yr(){return(Yr=e((()=>{Wr(),Jr(),Br(),oe()})))()}function H(){return(H=e((()=>{window.JSCompiler_renameProperty=function(e,t){return e}})))()}function Xr(e,t){if(e&&ei.test(e)||e===`//`)return e;if(ti===void 0){ti=!1;try{let e=new URL(`b`,`http://a`);e.pathname=`c%20d`,ti=e.href===`http://a/c%20d`}catch{}}if(t||=document.baseURI||window.location.href,ti)try{return new URL(e,t).href}catch{return e}return U||(U=document.implementation.createHTMLDocument(`temp`),U.base=U.createElement(`base`),U.head.appendChild(U.base),U.anchor=U.createElement(`a`),U.body.appendChild(U.anchor)),U.base.href=t,U.anchor.href=e,U.anchor.href||e}function Zr(e,t){return e.replace($r,function(e,n,r,i){return n+`'`+Xr(r.replace(/["']/g,``),t)+`'`+i})}function Qr(e){return e.substring(0,e.lastIndexOf(`/`)+1)}var $r,ei,ti,U;function ni(){return(ni=e((()=>{H(),$r=/(url\()([^)]*)(\))/g,ei=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/})))()}var ri,ii,ai,oi,si,ci,li,ui,di,fi,pi,mi,hi,gi;function _i(){return(_i=e((()=>{H(),ni(),ri=!window.ShadyDOM||!window.ShadyDOM.inUse,!window.ShadyCSS||window.ShadyCSS.nativeCss,window.customElements.polyfillWrapFlushCallback,ii=ri&&`adoptedStyleSheets`in Document.prototype&&`replaceSync`in CSSStyleSheet.prototype&&(()=>{try{let e=new CSSStyleSheet;e.replaceSync(``);let t=document.createElement(`div`);return t.attachShadow({mode:`open`}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch{return!1}})(),ai=window.Polymer&&window.Polymer.rootPath||Qr(document.baseURI||window.location.href),oi=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,window.Polymer&&window.Polymer.setPassiveTouchGestures,si=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,ci=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,li=window.Polymer&&window.Polymer.legacyOptimizations||!1,ui=window.Polymer&&window.Polymer.legacyWarnings||!1,di=window.Polymer&&window.Polymer.syncInitialRender||!1,fi=window.Polymer&&window.Polymer.legacyUndefined||!1,pi=window.Polymer&&window.Polymer.orderedComputed||!1,mi=window.Polymer&&window.Polymer.removeNestedTemplates||!1,hi=window.Polymer&&window.Polymer.fastDomIf||!1,window.Polymer&&window.Polymer.suppressTemplateNotifications,window.Polymer&&window.Polymer.legacyNoObservedAttributes,gi=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1})))()}function vi(){}var yi,W;function G(){return(G=e((()=>{H(),yi=0,vi.prototype.__mixinApplications,vi.prototype.__mixinSet,W=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let n=yi++;function r(r){let i=r.__mixinSet;if(i&&i[n])return r;let a=t,o=a.get(r);if(!o){o=e(r),a.set(r,o);let t=Object.create(o.__mixinSet||i||null);t[n]=!0,o.__mixinSet=t}return o}return r}})))()}function bi(e,t){Ci[e]=wi[e.toLowerCase()]=t}function xi(e){return Ci[e]||wi[e.toLowerCase()]}function Si(e){e.querySelector(`style`)&&console.warn(`dom-module %s has style outside template`,e.id)}var Ci,wi,K;function Ti(){return(Ti=e((()=>{H(),ni(),_i(),Ci={},wi={},K=class extends HTMLElement{static get observedAttributes(){return[`id`]}static import(e,t){if(e){let n=xi(e);return n&&t?n.querySelector(t):n}return null}attributeChangedCallback(e,t,n,r){t!==n&&this.register()}get assetpath(){if(!this.__assetpath){let e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=Xr(this.getAttribute(`assetpath`)||``,e.baseURI);this.__assetpath=Qr(t)}return this.__assetpath}register(e){if(e||=this.id,e){if(si&&xi(e)!==void 0)throw bi(e,null),Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,bi(e,this),Si(this)}}},K.prototype.modules=Ci,customElements.define(`dom-module`,K)})))()}function Ei(e){return K.import(e)}function Di(e){let t=Zr((e.body?e.body:e).textContent,e.baseURI),n=document.createElement(`style`);return n.textContent=t,n}function Oi(e){let t=e.trim().split(/\s+/),n=[];for(let e=0;e<t.length;e++)n.push(...ki(t[e]));return n}function ki(e){let t=Ei(e);if(!t)return console.warn(`Could not find style data in module named`,e),[];if(t._styles===void 0){let e=[];e.push(...Mi(t));let n=t.querySelector(`template`);n&&e.push(...Ai(n,t.assetpath)),t._styles=e}return t._styles}function Ai(e,t){if(!e._styles){let n=[],r=e.content.querySelectorAll(`style`);for(let e=0;e<r.length;e++){let i=r[e],a=i.getAttribute(Pi);a&&n.push(...Oi(a).filter(function(e,t,n){return n.indexOf(e)===t})),t&&(i.textContent=Zr(i.textContent,t)),n.push(i)}e._styles=n}return e._styles}function ji(e){let t=Ei(e);return t?Mi(t):[]}function Mi(e){let t=[],n=e.querySelectorAll(Ni);for(let e=0;e<n.length;e++){let r=n[e];if(r.import){let e=r.import,n=r.hasAttribute(Fi);if(n&&!e._unscopedStyle){let t=Di(e);t.setAttribute(Fi,``),e._unscopedStyle=t}else e._style||=Di(e);t.push(n?e._unscopedStyle:e._style)}}return t}var Ni,Pi,Fi;function Ii(){return(Ii=e((()=>{Ti(),ni(),Ni=`link[rel=import][type~=css]`,Pi=`include`,Fi=`shady-unscoped`})))()}var q;function Li(){return(Li=e((()=>{q=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e})))()}function Ri(e){return e.indexOf(`.`)>=0}function J(e){let t=e.indexOf(`.`);return t===-1?e:e.slice(0,t)}function zi(e,t){return e.indexOf(t+`.`)===0}function Bi(e,t){return t.indexOf(e+`.`)===0}function Vi(e,t,n){return t+n.slice(e.length)}function Hi(e){if(Array.isArray(e)){let t=[];for(let n=0;n<e.length;n++){let r=e[n].toString().split(`.`);for(let e=0;e<r.length;e++)t.push(r[e])}return t.join(`.`)}return e}function Ui(e){return Array.isArray(e)?Hi(e).split(`.`):e.toString().split(`.`)}function Y(e,t,n){let r=e,i=Ui(t);for(let e=0;e<i.length;e++){if(!r)return;let t=i[e];r=r[t]}return n&&(n.path=i.join(`.`)),r}function Wi(e,t,n){let r=e,i=Ui(t),a=i[i.length-1];if(i.length>1){for(let e=0;e<i.length-1;e++){let t=i[e];if(r=r[t],!r)return}r[a]=n}else r[t]=n;return i.join(`.`)}function Gi(){return(Gi=e((()=>{H()})))()}function Ki(e){return Ji[e]||(Ji[e]=e.indexOf(`-`)<0?e:e.replace(Yi,e=>e[1].toUpperCase()))}function qi(e){return Ji[e]||(Ji[e]=e.replace(Xi,`-$1`).toLowerCase())}var Ji,Yi,Xi;function Zi(){return(Zi=e((()=>{H(),Ji={},Yi=/-[a-z]/g,Xi=/([A-Z])/g})))()}function Qi(){na=!1;let e=X.length;for(let t=0;t<e;t++){let e=X[t];if(e)try{e()}catch(e){setTimeout(()=>{throw e})}}X.splice(0,e),ea+=e}var $i,ea,X,ta,na,ra,ia,aa;function oa(){return(oa=e((()=>{H(),$i=0,ea=0,X=[],ta=0,na=!1,ra=document.createTextNode(``),new window.MutationObserver(Qi).observe(ra,{characterData:!0}),ia={after(e){return{run(t){return window.setTimeout(t,e)},cancel(e){window.clearTimeout(e)}}},run(e,t){return window.setTimeout(e,t)},cancel(e){window.clearTimeout(e)}},aa={run(e){return na||(na=!0,ra.textContent=ta++),X.push(e),$i++},cancel(e){let t=e-ea;if(t>=0){if(!X[t])throw Error(`invalid async handle: `+e);X[t]=null}}}})))()}var sa,ca;function la(){return(la=e((()=>{H(),G(),oa(),Li(),sa=aa,ca=W(e=>{class t extends e{static createProperties(e){let t=this.prototype;for(let n in e)n in t||t._createPropertyAccessor(n)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty(`__dataHasAccessor`,this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){this.hasOwnProperty(JSCompiler_renameProperty(`__dataAttributes`,this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let t=this.__dataAttributes[e];return t||(t=this.constructor.attributeNameForProperty(e),this.__dataAttributes[t]=e),t}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this.__data[e]},set:t?function(){}:function(t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,n){let r=this.__data[e],i=this._shouldPropertyChange(e,t,r);return i&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=r),this.__data[e]=t,this.__dataPending[e]=t),i}_isPropertyPending(e){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(e))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,sa.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&=(this._initializeInstanceProperties(this.__dataInstanceProps),null),this.ready())}_flushProperties(){this.__dataCounter++;let e=this.__data,t=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(e,t,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,n)),this.__dataCounter--}_shouldPropertiesChange(e,t,n){return!!t}_propertiesChanged(e,t,n){}_shouldPropertyChange(e,t,n){return n!==t&&(n===n||t===t)}attributeChangedCallback(e,t,n,r){t!==n&&this._attributeToProperty(e,n),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,n,r)}_attributeToProperty(e,t,n){if(!this.__serializing){let r=this.__dataAttributes,i=r&&r[e]||e;this[i]=this._deserializeValue(t,n||this.constructor.typeForProperty(i))}}_propertyToAttribute(e,t,n){this.__serializing=!0,n=arguments.length<3?this[e]:n,this._valueToNodeAttribute(this,n,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,n){let r=this._serializeValue(t);(n===`class`||n===`name`||n===`slot`)&&(e=q(e)),r===void 0?e.removeAttribute(n):e.setAttribute(n,r===``&&window.trustedTypes?window.trustedTypes.emptyScript:r)}_serializeValue(e){switch(typeof e){case`boolean`:return e?``:void 0;default:return e?.toString()}}_deserializeValue(e,t){switch(t){case Boolean:return e!==null;case Number:return Number(e);default:return e}}}return t})})))()}function ua(e,t){if(!da[t]){let n=e[t];n!==void 0&&(e.__data?e._setPendingProperty(t,n):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty(`__dataProto`,e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=n))}}var da,fa,pa,ma;function ha(){return(ha=e((()=>{for(H(),G(),Zi(),la(),da={},fa=HTMLElement.prototype;fa;){let e=Object.getOwnPropertyNames(fa);for(let t=0;t<e.length;t++)da[e[t]]=!0;fa=Object.getPrototypeOf(fa)}pa=window.trustedTypes?e=>trustedTypes.isHTML(e)||trustedTypes.isScript(e)||trustedTypes.isScriptURL(e):()=>!1,ma=W(e=>{let t=ca(e);class n extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(Ki(e[t]))}static attributeNameForProperty(e){return qi(e)}_initializeProperties(){this.__dataProto&&=(this._initializeProtoProperties(this.__dataProto),null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){let n=this;n.hasAttribute(e)||this._valueToNodeAttribute(n,t,e)}_serializeValue(e){switch(typeof e){case`object`:if(e instanceof Date)return e.toString();if(e){if(pa(e))return e;try{return JSON.stringify(e)}catch{return``}}default:return super._serializeValue(e)}}_deserializeValue(e,t){let n;switch(t){case Object:try{n=JSON.parse(e)}catch{n=e}break;case Array:try{n=JSON.parse(e)}catch{n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:n=isNaN(e)?String(e):Number(e),n=new Date(n);break;default:n=super._deserializeValue(e,t)}return n}_definePropertyAccessor(e,t){ua(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return!!(this.__dataPending&&e in this.__dataPending)}}return n})})))()}function ga(){if(!Ta){Ta=!0;let e=document.createElement(`textarea`);e.placeholder=`a`,Ea=e.placeholder===e.textContent}return Ea}function _a(e){ga()&&e.localName===`textarea`&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}function va(e){let t=e.getAttribute(`is`);if(t&&wa[t]){let n=e;for(n.removeAttribute(`is`),e=n.ownerDocument.createElement(t),n.parentNode.replaceChild(e,n),e.appendChild(n);n.attributes.length;){let{name:t}=n.attributes[0];Da(e,n,t),n.removeAttribute(t)}}return e}function ya(e,t){let n=t.parentInfo&&ya(e,t.parentInfo);if(n){for(let e=n.firstChild,r=0;e;e=e.nextSibling)if(t.parentIndex===r++)return e}else return e}function ba(e,t,n,r){r.id&&(t[r.id]=n)}function xa(e,t,n){if(n.events&&n.events.length)for(let r=0,i=n.events,a;r<i.length&&(a=i[r]);r++)e._addMethodEventListenerToNode(t,a.name,a.value,e)}function Sa(e,t,n,r){n.templateInfo&&(t._templateInfo=n.templateInfo,t._parentTemplateInfo=r)}function Ca(e,t,n){return e=e._methodHost||e,function(t){e[n]?e[n](t,t.detail):console.warn("listener method `"+n+"` not defined")}}var wa,Ta,Ea,Da,Oa;function ka(){return(ka=e((()=>{H(),G(),wa={"dom-if":!0,"dom-repeat":!0},Ta=!1,Ea=!1,Da=(()=>{let e=window.trustedTypes&&window.trustedTypes.createPolicy(`polymer-template-event-attribute-policy`,{createScript:e=>e});return(t,n,r)=>{let i=n.getAttribute(r);if(e&&r.startsWith(`on-`)){t.setAttribute(r,e.createScript(i,r));return}t.setAttribute(r,i)}})(),Oa=W(e=>{class t extends e{static _parseTemplate(e,t){if(!e._templateInfo){let n=e._templateInfo={};n.nodeInfoList=[],n.nestedTemplate=!!t,n.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute&&e.hasAttribute(`strip-whitespace`),this._parseTemplateContent(e,n,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,n){return this._parseTemplateNode(e.content,t,n)}static _parseTemplateNode(e,t,n){let r=!1,i=e;return i.localName==`template`&&!i.hasAttribute(`preserve-content`)?r=this._parseTemplateNestedTemplate(i,t,n)||r:i.localName===`slot`&&(t.hasInsertionPoint=!0),_a(i),i.firstChild&&this._parseTemplateChildNodes(i,t,n),i.hasAttributes&&i.hasAttributes()&&(r=this._parseTemplateNodeAttributes(i,t,n)||r),r||n.noted}static _parseTemplateChildNodes(e,t,n){if(e.localName!==`script`&&e.localName!==`style`)for(let r=e.firstChild,i=0,a;r;r=a){if(r.localName==`template`&&(r=va(r)),a=r.nextSibling,r.nodeType===Node.TEXT_NODE){let n=a;for(;n&&n.nodeType===Node.TEXT_NODE;)r.textContent+=n.textContent,a=n.nextSibling,e.removeChild(n),n=a;if(t.stripWhiteSpace&&!r.textContent.trim()){e.removeChild(r);continue}}let o={parentIndex:i,parentInfo:n};this._parseTemplateNode(r,t,o)&&(o.infoIndex=t.nodeInfoList.push(o)-1),r.parentNode&&i++}}static _parseTemplateNestedTemplate(e,t,n){let r=e,i=this._parseTemplate(r,t);return(i.content=r.content.ownerDocument.createDocumentFragment()).appendChild(r.content),n.templateInfo=i,!0}static _parseTemplateNodeAttributes(e,t,n){let r=!1,i=Array.from(e.attributes);for(let a=i.length-1,o;o=i[a];a--)r=this._parseTemplateNodeAttribute(e,t,n,o.name,o.value)||r;return r}static _parseTemplateNodeAttribute(e,t,n,r,i){return r.slice(0,3)===`on-`?(e.removeAttribute(r),n.events=n.events||[],n.events.push({name:r.slice(3),value:i}),!0):r===`id`&&(n.id=i,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e,t){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e),t||=this.constructor._parseTemplate(e);let n=t.nodeInfoList,r=t.content||e.content,i=document.importNode(r,!0);i.__noInsertionPoint=!t.hasInsertionPoint;let a=i.nodeList=Array(n.length);i.$={};for(let e=0,r=n.length,o;e<r&&(o=n[e]);e++){let n=a[e]=ya(i,o);ba(this,i.$,n,o),Sa(this,n,o,t),xa(this,n,o)}return i=i,i}_addMethodEventListenerToNode(e,t,n,r){r||=e;let i=Ca(r,t,n);return this._addEventListenerToNode(e,t,i),i}_addEventListenerToNode(e,t,n){e.addEventListener(t,n)}_removeEventListenerFromNode(e,t,n){e.removeEventListener(t,n)}}return t})})))()}function Aa(e,t,n){let r=e[t];if(!r)r=e[t]={};else if(!e.hasOwnProperty(t)&&(r=e[t]=Object.create(e[t]),n))for(let e in r){let t=r[e],n=r[e]=Array(t.length);for(let e=0;e<t.length;e++)n[e]=t[e]}return r}function ja(e,t,n,r,i,a){if(t){let o=!1,s=fo++;for(let c in n){let l=t[i?J(c):c];if(l)for(let t=0,u=l.length,d;t<u&&(d=l[t]);t++)(!d.info||d.info.lastRun!==s)&&(!i||Na(c,d.trigger))&&(d.info&&(d.info.lastRun=s),d.fn(e,c,n,r,d.info,i,a),o=!0)}return o}return!1}function Ma(e,t,n,r,i,a,o,s){let c=!1,l=t[o?J(r):r];if(l)for(let t=0,u=l.length,d;t<u&&(d=l[t]);t++)(!d.info||d.info.lastRun!==n)&&(!o||Na(r,d.trigger))&&(d.info&&(d.info.lastRun=n),d.fn(e,r,i,a,d.info,o,s),c=!0);return c}function Na(e,t){if(t){let n=t.name;return n==e||!!(t.structured&&zi(n,e))||!!(t.wildcard&&Bi(n,e))}return!0}function Pa(e,t,n,r,i){let a=typeof i.method==`string`?e[i.method]:i.method,o=i.property;a?a.call(e,e.__data[o],r[o]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function Fa(e,t,n,r,i){let a=e[Z.NOTIFY],o,s=fo++;for(let c in t)t[c]&&(a&&Ma(e,a,s,c,n,r,i)||i&&Ia(e,c,n))&&(o=!0);let c;o&&(c=e.__dataHost)&&c._invalidateProperties&&c._invalidateProperties()}function Ia(e,t,n){let r=J(t);return r!==t&&(La(e,qi(r)+`-changed`,n[t],t),!0)}function La(e,t,n,r){let i={value:n,queueProperty:!0};r&&(i.path=r),q(e).dispatchEvent(new CustomEvent(t,{detail:i}))}function Ra(e,t,n,r,i,a){let o=(a?J(t):t)==t?null:t,s=o?Y(e,o):e.__data[t];o&&s===void 0&&(s=n[t]),La(e,i.eventName,s,o)}function za(e,t,n,r,i){let a,o=e.detail,s=o&&o.path;s?(r=Vi(n,r,s),a=o&&o.value):a=e.currentTarget[n],a=i?!a:a,(!t[Z.READ_ONLY]||!t[Z.READ_ONLY][r])&&t._setPendingPropertyOrPath(r,a,!0,!!s)&&(!o||!o.queueProperty)&&t._invalidateProperties()}function Ba(e,t,n,r,i){let a=e.__data[t];oi&&(a=oi(a,i.attrName,`attribute`,e)),e._propertyToAttribute(t,i.attrName,a)}function Va(e,t,n,r){let i=e[Z.COMPUTE];if(i){if(pi){fo++;let a=Ha(e),o=[];for(let e in t)_o(e,i,o,a,r);let s;for(;s=o.shift();)Wa(e,``,t,n,s)&&_o(s.methodInfo,i,o,a,r);Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let a=t;for(;ja(e,i,a,n,r);)Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),a=e.__dataPending,e.__dataPending=null}}}function Ha(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;let n=e[Z.COMPUTE],{counts:r,ready:i,total:a}=Ua(e),o;for(;o=i.shift();){t.set(o,t.size);let e=n[o];e&&e.forEach(e=>{let t=e.info.methodInfo;--a,--r[t]===0&&i.push(t)})}a!==0&&console.warn(`Computed graph for ${e.localName} incomplete; circular?`),e.constructor.__orderedComputedDeps=t}return t}function Ua(e){let t=e[mo],n={},r=e[Z.COMPUTE],i=[],a=0;for(let e in t){let r=t[e];a+=n[e]=r.args.filter(e=>!e.literal).length+ +!!r.dynamicFn}for(let e in r)t[e]||i.push(e);return{counts:n,ready:i,total:a}}function Wa(e,t,n,r,i){let a=no(e,t,n,r,i);if(a===po)return!1;let o=i.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,a,!0):(e[o]=a,!1)}function Ga(e,t,n){let r=e.__dataLinkedPaths;if(r){let i;for(let a in r){let o=r[a];Bi(a,t)?(i=Vi(a,o,t),e._setPendingPropertyOrPath(i,n,!0,!0)):Bi(o,t)&&(i=Vi(o,a,t),e._setPendingPropertyOrPath(i,n,!0,!0))}}}function Ka(e,t,n,r,i,a,o){n.bindings=n.bindings||[];let s={kind:r,target:i,parts:a,literal:o,isCompound:a.length!==1};if(n.bindings.push(s),Za(s)){let{event:e,negate:t}=s.parts[0];s.listenerEvent=e||qi(i)+`-changed`,s.listenerNegate=t}let c=t.nodeInfoList.length;for(let n=0;n<s.parts.length;n++){let r=s.parts[n];r.compoundIndex=n,qa(e,t,s,r,c)}}function qa(e,t,n,r,i){if(!r.literal){if(n.kind===`attribute`&&n.target[0]===`-`)console.warn(`Cannot set attribute `+n.target+` because "-" is not a valid attribute starting character`);else{let a=r.dependencies,o={index:i,binding:n,part:r,evaluator:e};for(let n=0;n<a.length;n++){let r=a[n];typeof r==`string`&&(r=oo(r),r.wildcard=!0),e._addTemplatePropertyEffect(t,r.rootProperty,{fn:Ja,info:o,trigger:r})}}}}function Ja(e,t,n,r,i,a,o){let s=o[i.index],c=i.binding,l=i.part;if(a&&l.source&&t.length>l.source.length&&c.kind==`property`&&!c.isCompound&&s.__isPropertyEffectsClient&&s.__dataHasAccessor&&s.__dataHasAccessor[c.target]){let r=n[t];t=Vi(l.source,c.target,t),s._setPendingPropertyOrPath(t,r,!1,!0)&&e._enqueueClient(s)}else{let o=i.evaluator._evaluateBinding(e,l,t,n,r,a);o!==po&&Ya(e,s,c,l,o)}}function Ya(e,t,n,r,i){if(i=Xa(t,i,n,r),oi&&(i=oi(i,n.target,n.kind,t)),n.kind==`attribute`)e._valueToNodeAttribute(t,i,n.target);else{let r=n.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[r]?(!t[Z.READ_ONLY]||!t[Z.READ_ONLY][r])&&t._setPendingProperty(r,i)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,r,i)}}function Xa(e,t,n,r){if(n.isCompound){let i=e.__dataCompoundStorage[n.target];i[r.compoundIndex]=t,t=i.join(``)}return n.kind!==`attribute`&&(n.target===`textContent`||n.target===`value`&&(e.localName===`input`||e.localName===`textarea`))&&(t??=``),t}function Za(e){return!!e.target&&e.kind!=`attribute`&&e.kind!=`text`&&!e.isCompound&&e.parts[0].mode===`{`}function Qa(e,t){let{nodeList:n,nodeInfoList:r}=t;if(r.length)for(let t=0;t<r.length;t++){let i=r[t],a=n[t],o=i.bindings;if(o)for(let t=0;t<o.length;t++){let n=o[t];$a(a,n),eo(a,e,n)}a.__dataHost=e}}function $a(e,t){if(t.isCompound){let n=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),r=t.parts,i=Array(r.length);for(let e=0;e<r.length;e++)i[e]=r[e].literal;let a=t.target;n[a]=i,t.literal&&t.kind==`property`&&(a===`className`&&(e=q(e)),e[a]=t.literal)}}function eo(e,t,n){if(n.listenerEvent){let r=n.parts[0];e.addEventListener(n.listenerEvent,function(e){za(e,t,n.target,r.source,r.negate)})}}function to(e,t,n,r,i,a){a=t.static||a&&(typeof a!=`object`||a[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:i,dynamicFn:a};for(let i=0,a;i<t.args.length&&(a=t.args[i]);i++)a.literal||e._addPropertyEffect(a.rootProperty,n,{fn:r,info:o,trigger:a});return a&&e._addPropertyEffect(t.methodName,n,{fn:r,info:o}),o}function no(e,t,n,r,i){let a=e._methodHost||e,o=a[i.methodName];if(o){let r=e._marshalArgs(i.args,t,n);return r===po?po:o.apply(a,r)}i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}function ro(e){let t=``;for(let n=0;n<e.length;n++){let r=e[n].literal;t+=r||``}return t}function io(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:vo};return t[2].trim()?ao(t[2].replace(/\\,/g,`&comma;`).split(`,`),e):e}return null}function ao(e,t){return t.args=e.map(function(e){let n=oo(e);return n.literal||(t.static=!1),n},this),t}function oo(e){let t=e.trim().replace(/&comma;/g,`,`).replace(/\\(.)/g,`$1`),n={name:t,value:``,literal:!1},r=t[0];switch(r===`-`&&(r=t[1]),r>=`0`&&r<=`9`&&(r=`#`),r){case`'`:case`"`:n.value=t.slice(1,-1),n.literal=!0;break;case`#`:n.value=Number(t),n.literal=!0}return n.literal||(n.rootProperty=J(t),n.structured=Ri(t),n.structured&&(n.wildcard=t.slice(-2)==`.*`,n.wildcard&&(n.name=t.slice(0,-2)))),n}function so(e,t,n){let r=Y(e,n);return r===void 0&&(r=t[n]),r}function co(e,t,n,r){let i={indexSplices:r};fi&&!e._overrideLegacyUndefined&&(t.splices=i),e.notifyPath(n+`.splices`,i),e.notifyPath(n+`.length`,t.length),fi&&!e._overrideLegacyUndefined&&(i.indexSplices=[])}function lo(e,t,n,r,i,a){co(e,t,n,[{index:r,addedCount:i,removed:a,object:t,type:`splice`}])}function uo(e){return e[0].toUpperCase()+e.substring(1)}var fo,po,Z,mo,ho,go,_o,vo,yo,bo,xo;function So(){return(So=e((()=>{H(),Li(),G(),Gi(),Zi(),ha(),ka(),_i(),fo=0,po=[],Z={COMPUTE:`__computeEffects`,REFLECT:`__reflectEffects`,NOTIFY:`__notifyEffects`,PROPAGATE:`__propagateEffects`,OBSERVE:`__observeEffects`,READ_ONLY:`__readOnly`},mo=`__computeInfo`,ho=/[A-Z]/,go=(e,t,n)=>{let r=0,i=t.length-1,a=-1;for(;r<=i;){let o=r+i>>1,s=n.get(t[o].methodInfo)-n.get(e.methodInfo);if(s<0)r=o+1;else if(s>0)i=o-1;else{a=o;break}}a<0&&(a=i+1),t.splice(a,0,e)},_o=(e,t,n,r,i)=>{let a=t[i?J(e):e];if(a)for(let t=0;t<a.length;t++){let o=a[t];o.info.lastRun!==fo&&(!i||Na(e,o.trigger))&&(o.info.lastRun=fo,go(o.info,n,r))}},vo=[],yo=RegExp(`(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:"(?:[^"\\\\]|\\\\.)*")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:"(?:[^"\\\\]|\\\\.)*")))\\s*))*)?)\\)\\s*)?)(?:]]|}})`,`g`),bo=W(e=>{let t=Oa(ma(e));class n extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return Z}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(xo.length){let e=xo[xo.length-1];e._enqueueClient(this),this.__dataHost=e}}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[Z.READ_ONLY];for(let n in e)(!t||!t[n])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=e[n])}_addPropertyEffect(e,t,n){this._createPropertyAccessor(e,t==Z.READ_ONLY);let r=Aa(this,t,!0)[e];r||=this[t][e]=[],r.push(n)}_removePropertyEffect(e,t,n){let r=Aa(this,t,!0)[e],i=r.indexOf(n);i>=0&&r.splice(i,1)}_hasPropertyEffect(e,t){let n=this[t];return!!(n&&n[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,Z.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,Z.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,Z.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,Z.COMPUTE)}_setPendingPropertyOrPath(e,t,n,r){if(r||J(Array.isArray(e)?e[0]:e)!==e){if(!r){let n=Y(this,e);if(e=Wi(this,e,t),!e||!super._shouldPropertyChange(e,t,n))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,n))return Ga(this,e,t),!0}else if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,n);else this[e]=t;return!1}_setUnmanagedPropertyToNode(e,t,n){(n!==e[t]||typeof n==`object`)&&(t===`className`&&(e=q(e)),e[t]=n)}_setPendingProperty(e,t,n){let r=this.__dataHasPaths&&Ri(e),i=r?this.__dataTemp:this.__data;return this._shouldPropertyChange(e,t,i[e])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),r?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(r||this[Z.NOTIFY]&&this[Z.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=n),!0):!1}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let n=e[t];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let n in e)(t||!this[Z.READ_ONLY]||!this[Z.READ_ONLY][n])&&this._setPendingPropertyOrPath(n,e[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,n){let r=this.__dataHasPaths;this.__dataHasPaths=!1;let i;Va(this,t,n,r),i=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(t,n,r),this._flushClients(),ja(this,this[Z.REFLECT],t,n,r),ja(this,this[Z.OBSERVE],t,n,r),i&&Fa(this,i,t,n,r),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,n){this[Z.PROPAGATE]&&ja(this,this[Z.PROPAGATE],e,t,n),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,e,t,n)}_runEffectsForTemplate(e,t,n,r){let i=(t,r)=>{ja(this,e.propertyEffects,t,n,r,e.nodeList);for(let i=e.firstChild;i;i=i.nextSibling)this._runEffectsForTemplate(i,t,n,r)};e.runEffects?e.runEffects(i,t,r):i(t,r)}linkPaths(e,t){e=Hi(e),t=Hi(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=Hi(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let n={path:``},r=Y(this,e,n);co(this,r,n.path,t)}get(e,t){return Y(t||this,e)}set(e,t,n){n?Wi(n,e,t):(!this[Z.READ_ONLY]||!this[Z.READ_ONLY][e])&&this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let n={path:``},r=Y(this,e,n),i=r.length,a=r.push(...t);return t.length&&lo(this,r,n.path,i,t.length,[]),a}pop(e){let t={path:``},n=Y(this,e,t),r=!!n.length,i=n.pop();return r&&lo(this,n,t.path,n.length,0,[i]),i}splice(e,t,n,...r){let i={path:``},a=Y(this,e,i);t<0?t=a.length-Math.floor(-t):t&&=Math.floor(t);let o;return o=arguments.length===2?a.splice(t):a.splice(t,n,...r),(r.length||o.length)&&lo(this,a,i.path,t,r.length,o),o}shift(e){let t={path:``},n=Y(this,e,t),r=!!n.length,i=n.shift();return r&&lo(this,n,t.path,0,0,[i]),i}unshift(e,...t){let n={path:``},r=Y(this,e,n),i=r.unshift(...t);return t.length&&lo(this,r,n.path,0,t.length,[]),i}notifyPath(e,t){let n;if(arguments.length==1){let r={path:``};t=Y(this,e,r),n=r.path}else n=Array.isArray(e)?Hi(e):e;this._setPendingPropertyOrPath(n,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){this._addPropertyEffect(e,Z.READ_ONLY),t&&(this[`_set`+uo(e)]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,n){let r={property:e,method:t,dynamicFn:!!n};this._addPropertyEffect(e,Z.OBSERVE,{fn:Pa,info:r,trigger:{name:e}}),n&&this._addPropertyEffect(t,Z.OBSERVE,{fn:Pa,info:r,trigger:{name:t}})}_createMethodObserver(e,t){let n=io(e);if(!n)throw Error(`Malformed observer expression '`+e+`'`);to(this,n,Z.OBSERVE,no,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,Z.NOTIFY,{fn:Ra,info:{eventName:qi(e)+`-changed`,property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);t[0]===`-`?console.warn(`Property `+e+` cannot be reflected to attribute `+t+` because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.`):this._addPropertyEffect(e,Z.REFLECT,{fn:Ba,info:{attrName:t}})}_createComputedProperty(e,t,n){let r=io(t);if(!r)throw Error(`Malformed computed expression '`+t+`'`);let i=to(this,r,Z.COMPUTE,Wa,e,n);Aa(this,mo)[e]=i}_marshalArgs(e,t,n){let r=this.__data,i=[];for(let a=0,o=e.length;a<o;a++){let{name:o,structured:s,wildcard:c,value:l,literal:u}=e[a];if(!u){if(c){let e=Bi(o,t),i=so(r,n,e?t:o);l={path:e?t:o,value:i,base:e?Y(r,o):i}}else l=s?so(r,n,o):r[o]}if(fi&&!this._overrideLegacyUndefined&&l===void 0&&e.length>1)return po;i[a]=l}return i}static addPropertyEffect(e,t,n){this.prototype._addPropertyEffect(e,t,n)}static createPropertyObserver(e,t,n){this.prototype._createPropertyObserver(e,t,n)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,n){this.prototype._createComputedProperty(e,t,n)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let n=this.constructor._parseTemplate(e),r=this.__preBoundTemplateInfo==n;if(!r)for(let e in n.propertyEffects)this._createPropertyAccessor(e);if(t){if(n=Object.create(n),n.wasPreBound=r,!this.__templateInfo)this.__templateInfo=n;else{let t=e._parentTemplateInfo||this.__templateInfo,r=t.lastChild;n.parent=t,t.lastChild=n,n.previousSibling=r,r?r.nextSibling=n:t.firstChild=n}}else this.__preBoundTemplateInfo=n;return n}static _addTemplatePropertyEffect(e,t,n){let r=e.hostProps=e.hostProps||{};r[t]=!0;let i=e.propertyEffects=e.propertyEffects||{};(i[t]=i[t]||[]).push(n)}_stampTemplate(e,t){t||=this._bindTemplate(e,!0),xo.push(this);let n=super._stampTemplate(e,t);if(xo.pop(),t.nodeList=n.nodeList,!t.wasPreBound){let e=t.childNodes=[];for(let t=n.firstChild;t;t=t.nextSibling)e.push(t)}return n.templateInfo=t,Qa(this,t),this.__dataClientsReady&&(this._runEffectsForTemplate(t,this.__data,null,!1),this._flushClients()),n}_removeBoundDom(e){let t=e.templateInfo,{previousSibling:n,nextSibling:r,parent:i}=t;n?n.nextSibling=r:i&&(i.firstChild=r),r?r.previousSibling=n:i&&(i.lastChild=n),t.nextSibling=t.previousSibling=null;let a=t.childNodes;for(let e=0;e<a.length;e++){let t=a[e];q(q(t).parentNode).removeChild(t)}}static _parseTemplateNode(e,n,r){let i=t._parseTemplateNode.call(this,e,n,r);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,n);t&&(e.textContent=ro(t)||` `,Ka(this,n,r,`text`,`textContent`,t),i=!0)}return i}static _parseTemplateNodeAttribute(e,n,r,i,a){let o=this._parseBindings(a,n);if(o){let t=i,a=`property`;ho.test(i)?a=`attribute`:i[i.length-1]==`$`&&(i=i.slice(0,-1),a=`attribute`);let s=ro(o);return s&&a==`attribute`&&(i==`class`&&e.hasAttribute(`class`)&&(s+=` `+e.getAttribute(i)),e.setAttribute(i,s)),a==`attribute`&&t==`disable-upgrade$`&&e.setAttribute(i,``),e.localName===`input`&&t===`value`&&e.setAttribute(t,``),e.removeAttribute(t),a===`property`&&(i=Ki(i)),Ka(this,n,r,a,i,o,s),!0}return t._parseTemplateNodeAttribute.call(this,e,n,r,i,a)}static _parseTemplateNestedTemplate(e,n,r){let i=t._parseTemplateNestedTemplate.call(this,e,n,r),a=e.parentNode,o=r.templateInfo,s=a.localName===`dom-if`,c=a.localName===`dom-repeat`;mi&&(s||c)&&(a.removeChild(e),r=r.parentInfo,r.templateInfo=o,r.noted=!0,i=!1);let l=o.hostProps;if(hi&&s)l&&(n.hostProps=Object.assign(n.hostProps||{},l),mi||(r.parentInfo.noted=!0));else for(let e in l){let t=[{mode:`{`,source:e,dependencies:[e],hostProp:!0}];Ka(this,n,r,`property`,`_host_`+e,t)}return i}static _parseBindings(e,t){let n=[],r=0,i;for(;(i=yo.exec(e))!==null;){i.index>r&&n.push({literal:e.slice(r,i.index)});let a=i[1][0],o=!!i[2],s=i[3].trim(),c=!1,l=``,u=-1;a==`{`&&(u=s.indexOf(`::`))>0&&(l=s.substring(u+2),s=s.substring(0,u),c=!0);let d=io(s),f=[];if(d){let{args:e,methodName:n}=d;for(let t=0;t<e.length;t++){let n=e[t];n.literal||f.push(n)}let r=t.dynamicFns;(r&&r[n]||d.static)&&(f.push(n),d.dynamicFn=!0)}else f.push(s);n.push({source:s,mode:a,negate:o,customEvent:c,signature:d,dependencies:f,event:l}),r=yo.lastIndex}if(r&&r<e.length){let t=e.substring(r);t&&n.push({literal:t})}return n.length?n:null}static _evaluateBinding(e,t,n,r,i,a){let o;return o=t.signature?no(e,n,r,i,t.signature):n==t.source?a&&Ri(n)?Y(e,n):e.__data[n]:Y(e,t.source),t.negate&&(o=!o),o}}return n}),xo=[]})))()}function Co(){To++}function wo(e){Eo.push(e)}var To,Eo;function Do(){return(Do=e((()=>{To=0,Eo=[]})))()}function Oo(e){let t={};for(let n in e){let r=e[n];t[n]=typeof r==`function`?{type:r}:r}return t}var ko;function Ao(){return(Ao=e((()=>{H(),G(),Do(),la(),ko=W(e=>{let t=ca(e);function n(e){let t=Object.getPrototypeOf(e);return t.prototype instanceof i?t:null}function r(e){if(!e.hasOwnProperty(JSCompiler_renameProperty(`__ownProperties`,e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty(`properties`,e))){let n=e.properties;n&&(t=Oo(n))}e.__ownProperties=t}return e.__ownProperties}class i extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__observedAttributes`,this))){wo(this.prototype);let e=this._properties;this.__observedAttributes=e?Object.keys(e).map(e=>this.prototype._addPropertyToAttributeMap(e)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__finalized`,this))){let e=n(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){let e=r(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__properties`,this))){let e=n(this);this.__properties=Object.assign({},e&&e._properties,r(this))}return this.__properties}static typeForProperty(e){let t=this._properties[e];return t&&t.type}_initializeProperties(){Co(),this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i})})))()}var jo,Mo,No;function Po(){return(Po=e((()=>{H(),_i(),G(),Ii(),ni(),Ti(),So(),Ao(),Li(),jo=`3.5.2`,Mo=window.ShadyCSS&&window.ShadyCSS.cssBuild,No=W(e=>{let t=ko(bo(e));function n(e){if(!e.hasOwnProperty(JSCompiler_renameProperty(`__propertyDefaults`,e))){e.__propertyDefaults=null;let t=e._properties;for(let n in t){let r=t[n];`value`in r&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[n]=r)}}return e.__propertyDefaults}function r(e){return e.hasOwnProperty(JSCompiler_renameProperty(`__ownObservers`,e))||(e.__ownObservers=e.hasOwnProperty(JSCompiler_renameProperty(`observers`,e))?e.observers:null),e.__ownObservers}function i(e,t,n,r){n.computed&&(n.readOnly=!0),n.computed&&(e._hasReadOnlyEffect(t)?console.warn(`Cannot redefine computed property '${t}'.`):e._createComputedProperty(t,n.computed,r)),n.readOnly&&!e._hasReadOnlyEffect(t)?e._createReadOnlyProperty(t,!n.computed):n.readOnly===!1&&e._hasReadOnlyEffect(t)&&console.warn(`Cannot make readOnly property '${t}' non-readOnly.`),n.reflectToAttribute&&!e._hasReflectEffect(t)?e._createReflectedProperty(t):n.reflectToAttribute===!1&&e._hasReflectEffect(t)&&console.warn(`Cannot make reflected property '${t}' non-reflected.`),n.notify&&!e._hasNotifyEffect(t)?e._createNotifyingProperty(t):n.notify===!1&&e._hasNotifyEffect(t)&&console.warn(`Cannot make notify property '${t}' non-notify.`),n.observer&&e._createPropertyObserver(t,n.observer,r[n.observer]),e._addPropertyToAttributeMap(t)}function a(e,t,n,r){if(!Mo){let i=t.content.querySelectorAll(`style`),a=Ai(t),o=ji(n),s=t.content.firstElementChild;for(let n=0;n<o.length;n++){let i=o[n];i.textContent=e._processStyleText(i.textContent,r),t.content.insertBefore(i,s)}let c=0;for(let t=0;t<a.length;t++){let n=a[t],o=i[c];o===n?c++:(n=n.cloneNode(!0),o.parentNode.insertBefore(n,o)),n.textContent=e._processStyleText(n.textContent,r)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,n),gi&&Mo&&ii){let n=t.content.querySelectorAll(`style`);if(n){let t=``;Array.from(n).forEach(e=>{t+=e.textContent,e.parentNode.removeChild(e)}),e._styleSheet=new CSSStyleSheet,e._styleSheet.replaceSync(t)}}}function o(e){let t=null;if(e&&(!si||ci)&&(t=K.import(e,`template`),si&&!t))throw Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}class s extends t{static get polymerElementVersion(){return jo}static _finalizeClass(){t._finalizeClass.call(this);let e=r(this);e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&(typeof e==`string`?(console.error(`template getter must return HTMLTemplateElement`),e=null):li||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(let t in e)i(this.prototype,t,e[t],e)}static createObservers(e,t){let n=this.prototype;for(let r=0;r<e.length;r++)n._createMethodObserver(e[r],t)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`_template`,this))){let e=this.prototype.hasOwnProperty(JSCompiler_renameProperty(`_template`,this.prototype))?this.prototype._template:void 0;typeof e==`function`&&(e=e()),this._template=e===void 0?this.hasOwnProperty(JSCompiler_renameProperty(`is`,this))&&o(this.is)||Object.getPrototypeOf(this.prototype).constructor.template:e}return this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`_importPath`,this))){let e=this.importMeta;if(e)this._importPath=Qr(e.url);else{let e=K.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=ai,this.importPath=this.constructor.importPath;let e=n(this.constructor);if(e)for(let t in e){let n=e[t];if(this._canApplyPropertyDefault(t)){let e=typeof n.value==`function`?n.value.call(this):n.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}_canApplyPropertyDefault(e){return!this.hasOwnProperty(e)}static _processStyleText(e,t){return Zr(e,t)}static _finalizeTemplate(e){let t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;let n=this.importPath,r=n?Xr(n):``;a(this,t,e,r),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){let t=q(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:`open`,shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e),this.constructor._styleSheet&&(t.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),di&&window.ShadyDOM&&window.ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=Xr(this.importPath)),Xr(e,t)}static _parseTemplateContent(e,n,r){return n.dynamicFns=n.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,n,r)}static _addTemplatePropertyEffect(e,n,r){return ui&&!(n in this._properties)&&!(r.info.part.signature&&r.info.part.signature.static)&&!r.info.part.hostProp&&!e.nestedTemplate&&console.warn(`Property '${n}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,e,n,r)}}return s})})))()}function Fo(e){if(e instanceof Ro)return e.value;throw Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}function Io(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof Ro)return Fo(e);throw Error(`non-template value passed to Polymer's html function: ${e}`)}var Lo,Ro,zo,Bo;function Vo(){return(Vo=e((()=>{H(),Lo=window.trustedTypes&&trustedTypes.createPolicy(`polymer-html-literal`,{createHTML:e=>e}),Ro=class{constructor(e,t){Bo(e,t);let n=t.reduce((t,n,r)=>t+Fo(n)+e[r+1],e[0]);this.value=n.toString()}toString(){return this.value}},zo=function(e,...t){Bo(e,t);let n=document.createElement(`template`),r=t.reduce((t,n,r)=>t+Io(n)+e[r+1],e[0]);return Lo&&(r=Lo.createHTML(r)),n.innerHTML=r,n},Bo=(e,t)=>{if(!Array.isArray(e)||!Array.isArray(e.raw)||t.length!==e.length-1)throw TypeError(`Invalid call to the html template tag`)}})))()}var Ho;function Uo(){return(Uo=e((()=>{Po(),Vo(),Ho=No(HTMLElement)})))()}var Wo,Go,Ko,qo,Jo,Yo,Xo,Zo,Qo,$o,es,ts;function ns(){return(ns=e((()=>{Jt(),Yr(),a(),ie(),E(),Uo(),g(),Wo=`bottom-bar-toolbar`,Go=`bottom-bar-menu`,Ko=t`
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
`,qo=Symbol(`openMenu`),Jo=e=>{let t=e.shadowRoot?.querySelector(`#dropdown`);t&&!t.hasAttribute(`hidden`)&&((t.shadowRoot?.querySelector(`cosmoz-dropdown`))?.shadowRoot?.querySelector(`#dropdownButton`))?.click()},Yo=e=>e.nodeType===Node.ELEMENT_NODE&&e.getAttribute(`slot`)!==`info`&&e.tagName!==`TEMPLATE`&&e.tagName!==`STYLE`&&e.tagName!==`DOM-REPEAT`&&e.tagName!==`DOM-IF`&&e.getAttribute(`slot`)!==`extra`,Xo=e=>{let t=[...e.childNodes],n=[];for(let e of t)if(e.tagName===`SLOT`){let t=e.assignedElements({flatten:!0});n.push(...t)}else n.push(e);return n},Zo=e=>{let t=Xo(e).filter(Yo).filter(e=>!e.hidden).sort((e,t)=>(Number(e.dataset.index)||0)-(Number(t.dataset.index)||0));if(t.length===0)return t;let n=t.reduce((e,t)=>parseInt(e.dataset.priority??`0`,10)>=parseInt(t.dataset.priority??`0`,10)?e:t,{dataset:{priority:`-1000`}});return[n,...t.filter(e=>e!==n)]},Qo=(e,t,n,r)=>{let i=t?Wo:Go;e.setAttribute(`slot`,i),e.setAttribute(`tabindex`,`0`),e.classList.toggle(r,!t),e.classList.toggle(n,t)},$o=(e,t,n)=>{let r=Zo(e),{maxToolbarItems:i=1}=e;if(!(r.length>0)){e.toggleAttribute(`has-menu-items`,!1);return}let a=r.slice(0,i),o=r.slice(a.length);a.forEach(e=>Qo(e,!0,t,n)),o.forEach(e=>Qo(e,!1,t,n)),e.toggleAttribute(`has-menu-items`,o.length>0)},es=e=>{let{active:t=!1,maxToolbarItems:n=1}=e,r=le(!1);se({activity:qo,callback:()=>Jo(e),check:()=>t&&!e.hasAttribute(`hide-actions`),element:()=>e.shadowRoot?.querySelector(`#dropdown`)},[t]);let a=i(()=>qt(`height`),[]);ne(()=>{r.current?a(e,t):a(e,t,{duration:0}),r.current=!0},[t]);let o=d(()=>$o(e,`cosmoz-bottom-bar-toolbar`,`cosmoz-bottom-bar-menu`),[n]),s=le(null),c=d(()=>{let t=s.current;t&&(t.disconnect(),Xo(e).filter(Yo).forEach(e=>{t.observe(e,{attributes:!0,attributeFilter:[`hidden`]})}))},[]);O(()=>{s.current=new MutationObserver(()=>{c(),o()}),c();let t=new MutationObserver(()=>{c(),o()});return t.observe(e,{childList:!0}),()=>{s.current?.disconnect(),s.current=null,t.disconnect()}},[o]);let l=d(()=>{c(),o()},[o]);return _` <div id="bar" part="bar">
			<div id="info" part="info"><slot name="info"></slot></div>
			<slot
				id="bottomBarToolbar"
				name="bottom-bar-toolbar"
				@slotchange=${l}
			></slot>
			<cosmoz-dropdown-menu id="dropdown" part="dropdown">
				${v({slot:`button`})}
				<slot id="bottomBarMenu" name="bottom-bar-menu"></slot>
			</cosmoz-dropdown-menu>
			<slot name="extra" id="extraSlot"></slot>
		</div>
		<div hidden style="display:none">
			<slot id="content" @slotchange=${l}></slot>
		</div>`},customElements.define(`cosmoz-bottom-bar`,T(es,{observedAttributes:[`active`,`max-toolbar-items`],styleSheets:[Ko]})),ts=`
	<slot name="extra" slot="extra"></slot>
	<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
	<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
`,_(Object.assign([ts],{raw:[ts]})),zo(Object.assign([ts],{raw:[ts]}))})))()}function rs(){return(rs=e((()=>{ns()})))()}var is;function as(){return(as=e((()=>{g(),ue(),is=de(class extends ee{constructor(e){if(super(e),e.type!==m.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return s}})})))()}var os,ss,cs;function ls(){return(ls=e((()=>{H(),G(),oa(),os=class e{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,ss.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),ss.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(t,n,r){return t instanceof e?t._cancelAsync():t=new e,t.setConfig(n,r),t}},ss=new Set,cs=function(e){ss.add(e)}})))()}function us(){return(us=e((()=>{H(),ls()})))()}var Q,ds,fs;function ps(){return(ps=e((()=>{Q=Symbol(`memo`),ds=e=>{let t=Q,n=Q,r;return function(i,a){if(t===i&&n===a)return r;let o=e(i,a);return r=o,t=i,n=a,o}},fs=e=>{let t=Q,n=Q,r=Q,i;return function(a,o,s){if(t===a&&n===o&&r===s)return i;let c=e(a,o,s);return i=c,t=a,n=o,r=s,c}}})))()}var ms,hs,gs;function _s(){return(_s=e((()=>{E(),g(),ms=t`
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
`,hs=()=>c,gs=T(hs,{styleSheets:[ms]}),customElements.define(`cosmoz-spinner`,gs)})))()}function vs(){return(vs=e((()=>{_s()})))()}var ys;function bs(){return(bs=e((()=>{E(),ys=o(t`
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
`)})))()}var xs,Ss,Cs,ws,Ts,Es;function Ds(){return(Ds=e((()=>{l(),bs(),u(),E(),xs=[`T`,` `],Ss=e=>{if(!e||typeof e!=`string`)return;let t;return xs.some(n=>e.match(n)?(t=e.split(n),!0):!1),t||[e]},Cs=(e,t)=>{let n=Ss(e),r=Ss(t);return{minDate:Array.isArray(n)?n.shift():null,minTime:Array.isArray(n)?n.shift():null,maxDate:Array.isArray(r)?r.shift():null,maxTime:Array.isArray(r)?r.shift():null}},ws=(e,t)=>{if(e||t)return!e&&t?`T${t}`:e&&!t?e:`${e}T${t}`},Ts=e=>{if(e){for(let t of xs)if(e.match(t)){let n=e.split(t);return{date:n.shift(),time:n.shift()}}return{date:e}}},Es=e=>{let{dateLabel:t,timeLabel:n,min:r,max:a,step:o=`1`,value:s}=e,{minDate:c,maxDate:l,minTime:u,maxTime:d}=i(()=>Cs(r,a),[r,a]),{date:f,time:m}=i(()=>Ts(s)??{},[s]);return O(()=>{e.dispatchEvent(new CustomEvent(`cosmoz-datetime-input-value-changed`,{bubbles:!0,composed:!0}))},[s]),_`
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
			@value-changed="${t=>p(e,`value`,ws(t.target.value,m))}"
			.min="${c}"
			.max="${l}"
		></cosmoz-input>
		<cosmoz-input
			label="${n}"
			type="time"
			.value="${m}"
			@value-changed="${t=>p(e,`value`,ws(f,t.target.value))}"
			step="${o}"
			.min="${u}"
			.max="${d}"
		></cosmoz-input>
	`},customElements.define(`cosmoz-datetime-input`,T(Es,{observedAttributes:[`date-label`,`time-label`,`min`,`max`,`step`],styleSheets:[ys]}))})))()}function Os(){return(Os=e((()=>{Ds()})))()}var ks,As;function js(){return(js=e((()=>{ks=e=>t=>{let n=t.match(e);return n&&{result:n,url:new URL(t,document.location.origin)}},As=(e,t)=>{for(let n of e){let e=n.rule,r=typeof e==`function`?e(t):ks(e)(t);if(r)return{...n,route:n,match:r,url:t}}}})))()}function Ms(){return(Ms=e((()=>{E()})))()}var Ns,Ps,Fs,Is;function Ls(){return(Ls=e((()=>{E(),js(),Ns=()=>window.location.href.replace(window.location.origin,``),Ps=()=>{let[e,t]=re(Ns);return O(()=>{let e=()=>t(Ns);return window.addEventListener(`popstate`,e),()=>window.removeEventListener(`popstate`,e)},[t]),e},Fs=e=>{let t=Ps();return i(()=>As(e,t),[e,t])},Is=(e,t=null,{notify:n=!0,replace:r=!0}={})=>{(r?history.replaceState:history.pushState).call(history,t,``,e),n&&queueMicrotask(()=>window.dispatchEvent(new CustomEvent(`popstate`,{bubbles:!1})))}})))()}var Rs;function zs(){return(zs=e((()=>{E(),Ls(),Rs=e=>{let t=Fs(e);return{route:t,result:i(()=>{if(t){let{handle:e,...n}=t;return e(n)}},[t])}}})))()}var Bs,Vs;function Hs(){return(Hs=e((()=>{E(),Bs=(e,t,n)=>e.dispatchEvent(new CustomEvent(t,{bubbles:!1,cancelable:!1,composed:!0,...n})),Vs=(e,t,n)=>{O(()=>{if(!n){Bs(e,`route-not-found`);return}Bs(e,`route-loading`,{detail:t}),Promise.resolve(n).then(()=>Bs(e,`route-loaded`,{detail:t})).catch(n=>Bs(e,`route-error`,{detail:{route:t,error:n}}))},[n])}})))()}var Us;function Ws(){return(Ws=e((()=>{g(),f(),h(),E(),zs(),Hs(),Us=e=>{let t=e.routes,{route:i,result:a}=Rs(t);return Vs(e,i,a),n([a],()=>r(Promise.resolve(a).catch(()=>c),c))},customElements.define(`cosmoz-router`,T(Us))})))()}function Gs(){return(Gs=e((()=>{Ms(),Ls(),zs(),Ws()})))()}var Ks,qs,Js;function Ys(){return(Ys=e((()=>{ce(),Ks=()=>new URL(location.hash.replace(/^#!?/iu,``).replace(`%23`,`#`),location.origin),qs=(e,t=b)=>{let n=new URLSearchParams(Ks().hash.replace(`#`,``)).getAll(e);switch(n.length){case 0:return;case 1:return t(n[0]);default:return n.map(t)}},Js=(e,t=b)=>{let n=Array.from(new URLSearchParams(Ks().hash.replace(`#`,``)).entries()).filter(([t])=>t.startsWith(e)).map(([n,r])=>t([n.replace(e,``),r])).filter(([,e])=>e!=null);return Object.fromEntries(n)}})))()}function*Xs(e,t){if(e!==void 0){let n=0;for(let r of e)yield t(r,n++)}}function Zs(){return(Zs=e((()=>{})))()}function Qs(e,t){return t===void 0?t={autoBom:!1}:typeof t!=`object`&&(console.warn(`Deprecated: Expected third argument to be a object`),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([`﻿`,e],{type:e.type}):e}function $s(e,t,n){var r=new XMLHttpRequest;r.open(`GET`,e),r.responseType=`blob`,r.onload=function(){rc(r.response,t,n)},r.onerror=function(){console.error(`could not download file`)},r.send()}function ec(e){var t=new XMLHttpRequest;t.open(`HEAD`,e,!1);try{t.send()}catch{}return t.status>=200&&t.status<=299}function tc(e){try{e.dispatchEvent(new MouseEvent(`click`))}catch{var t=document.createEvent(`MouseEvents`);t.initMouseEvent(`click`,!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var $,nc,rc;function ic(){return(ic=e((()=>{$=typeof window==`object`&&window.window===window?window:typeof self==`object`&&self.self===self?self:typeof global==`object`&&global.global===global?global:void 0,nc=$.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),rc=$.saveAs||(typeof window!=`object`||window!==$?function(){}:`download`in HTMLAnchorElement.prototype&&!nc?function(e,t,n){var r=$.URL||$.webkitURL,i=document.createElement(`a`);t=t||e.name||`download`,i.download=t,i.rel=`noopener`,typeof e==`string`?(i.href=e,i.origin===location.origin?tc(i):ec(i.href)?$s(e,t,n):tc(i,i.target=`_blank`)):(i.href=r.createObjectURL(e),setTimeout(function(){r.revokeObjectURL(i.href)},4e4),setTimeout(function(){tc(i)},0))}:`msSaveOrOpenBlob`in navigator?function(e,t,n){if(t=t||e.name||`download`,typeof e==`string`){if(ec(e))$s(e,t,n);else{var r=document.createElement(`a`);r.href=e,r.target=`_blank`,setTimeout(function(){tc(r)})}}else navigator.msSaveOrOpenBlob(Qs(e,n),t)}:function(e,t,n,r){if(r||=open(``,`_blank`),r&&(r.document.title=r.document.body.innerText=`downloading...`),typeof e==`string`)return $s(e,t,n);var i=e.type===`application/octet-stream`,a=/constructor/i.test($.HTMLElement)||$.safari,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||i&&a||nc)&&typeof FileReader<`u`){var s=new FileReader;s.onloadend=function(){var e=s.result;e=o?e:e.replace(/^data:[^;]*;/,`data:attachment/file;`),r?r.location.href=e:location=e,r=null},s.readAsDataURL(e)}else{var c=$.URL||$.webkitURL,l=c.createObjectURL(e);r?r.location=l:location.href=l,r=null,setTimeout(function(){c.revokeObjectURL(l)},4e4)}}),$.saveAs=rc.saveAs=rc})))()}var ac;function oc(){return(oc=e((()=>{ac=function(e){e&&console.log(e)}})))()}var sc;function cc(){return(cc=e((()=>{oc(),sc=class{constructor(e,t){this._filename=e,this.buffer=null,this.lastDownloadBlobUrl=null,this._mimeType=t}generate(){}createDownloadUrl(){this.buffer||this.generate();let e=new Blob([this.buffer],{type:this._mimeType});return this.lastDownloadBlobUrl&&window.URL.revokeObjectURL(this.lastDownloadBlobUrl),this.lastDownloadBlobUrl=URL.createObjectURL(e),this.lastDownloadBlobUrl}createDownloadLink(e){let t=e instanceof HTMLAnchorElement?e:document.createElement(`a`);return typeof e==`string`&&(t.innerHTML=e),t.href=this.createDownloadUrl(),t.download=this._filename,t.hasChildNodes||(t.innerText=this._filename),ac(`Link created for file `+this._filename),t}}})))()}var lc,uc,dc;function fc(){return(fc=e((()=>{oc(),cc(),lc=null,uc=class extends sc{constructor(e,t){super(e,`application/zip`),this.files=[],this.createFolderEntries=!!t;let n=new Date;this.timeInt=Math.round(n.getSeconds()/2)|n.getMinutes()<<5|n.getHours()<<11,this.dateInt=n.getFullYear()-1980<<9|n.getMonth()+1<<5|n.getDate()}addFileFromString(e,t){let n=new TextEncoder(`utf-8`).encode(t);return this.addFileFromUint8Array(e,n),this}addFileFromUint8Array(e,t){if(!(t instanceof Uint8Array))throw Error(`invalid parameter`);return this.files.push({name:e.replace(`\\`,`/`),data:t}),this}generate(){ac(`NullZip archive generation started`);let e={};for(let t of this.files)t.size=t.data?t.data.byteLength:0,t.crc=t.data?this.crc(t.data):0,e[t.name]=t;let t=[];if(this.createFolderEntries){let n=/\//giu;for(let r of this.files){let i=r.name;for(let r=n.exec(i);r!==null;r=n.exec(i)){let n={name:i.substr(0,r.index+1),size:0,crc:0,data:new Uint8Array};e[n.name]===void 0&&(e[n.name]=n,t.push(n))}}}Array.prototype.push.apply(this.files,t),this.files.sort((e,t)=>e.name.length-t.name.length||e.name.localeCompare(t.name));let n=this.files.reduce((e,t)=>e+76+t.name.length*2+t.size,22);ac(`Estimated file size: `+n),this.buffer=new ArrayBuffer(n);let r=new dc(this.buffer),i=this.hex2u8a(`504b0304140000000000`);for(let e of this.files)e.offs=r.i,r.writeByteArray(i),r.uint16(this.timeInt),r.uint16(this.dateInt),r.uint32(e.crc),r.uint32(e.size),r.uint32(e.size),r.uint16(e.name.length),r.uint16(0),r.writeASCII(e.name),e.size>0&&r.writeByteArray(e.data);let a=r.i,o=this.hex2u8a(`504b01023f00140000000000`);for(let e of this.files)r.writeByteArray(o),r.uint16(this.timeInt),r.uint16(this.dateInt),r.uint32(e.crc),r.uint32(e.size),r.uint32(e.size),r.uint16(e.name.length),r.uint16(0),r.uint16(0),r.uint16(0),r.uint16(0),r.uint32(e.size?32:48),r.uint32(e.offs),r.writeASCII(e.name);let s=r.i-a;return r.writeByteArray(this.hex2u8a(`504b050600000000`)),r.uint16(this.files.length),r.uint16(this.files.length),r.uint32(s),r.uint32(a),r.uint16(0),ac(`Finished creating zip. size=`+r.i+`, predicted size=`+n),this.buffer}crc(e){let t,n,r=-1;if(!lc)for(lc=[],n=0;n<256;t=++n){for(let e=0;e<8;e++)t=t&1?3988292384^t>>>1:t>>>1;lc[n]=t}for(let t=0;t<e.byteLength;t++)r=r>>>8^lc[(r^e[t])&255];return(r^-1)>>>0}hex2u8a(e){let t=new Uint8Array(Math.ceil(e.length/2));for(let n=0;n<t.length;n++)t[n]=parseInt(e.substr(n*2,2),16);return t}},dc=class{constructor(e){this.dw=new DataView(e),this.i=0,this.le=!0,this.utf8encoder=new TextEncoder(`utf-8`)}uint8(e){this.dw.setUint8(this.i++,e)}uint16(e){this.dw.setUint16(this.i,e,this.le),this.i+=2}uint32(e){this.dw.setUint32(this.i,e,this.le),this.i+=4}writeByteArray(e){if(!(e instanceof Uint8Array))throw Error(`invalid parameter`);new Uint8Array(this.dw.buffer).set(e,this.i),this.i+=e.byteLength}writeASCII(e){for(let t=0;t<e.length;t++)this.dw.setUint8(this.i++,e.charCodeAt(t)&255)}}})))()}var pc,mc,hc,gc,_c,vc,yc;function bc(){return(bc=e((()=>{cc(),fc(),pc=`application/vnd.openxmlformats-officedocument.spreadsheetml`,mc=`http://schemas.openxmlformats.org`,hc=`${mc}/spreadsheetml/2006/main`,gc=`${mc}/package/2006`,_c=`${mc}/officeDocument/2006/relationships`,vc=[{id:164,code:`yyyy&quot;-&quot;mm&quot;-&quot;dd`},{id:165,code:`yyyy&quot;-&quot;mm&quot;-&quot;dd&quot; &quot;h&quot;:&quot;mm&quot;:&quot;ss`}],yc=class extends sc{constructor(e,t){super(e,`${pc}.sheet`),this.sheets=[],this.frozen=!!(t&&t.frozen),this.autoFilter=!!(t&&t.filter)}addSheetFromData(e,t){let n=this.sheets.length+1;return this.sheets.push({id:n,name:this.escapeXml(t||`Sheet`+n),data:e}),this}generate(){let e=[{name:`xl/styles.xml`,xml:`<styleSheet xmlns="${hc}" xmlns:mc="${mc}/markup-compatibility/2006"><numFmts count="${vc.length}">${vc.map(e=>`<numFmt numFmtId="${e.id}" formatCode="${e.code}" />`)}</numFmts><fonts count="2"><font><sz val="10.0"/><color rgb="FF000000"/><name val="Arial"/></font><font><b/></font></fonts><fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="lightGray"/></fill></fills><borders count="1"><border><left/><right/><top/><bottom/></border></borders><cellStyleXfs count="1"><xf borderId="0" fillId="0" fontId="0" numFmtId="0" applyAlignment="1" applyFont="1"/></cellStyleXfs><cellXfs><xf borderId="0" fillId="0" fontId="0" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment/></xf><xf borderId="0" fillId="0" fontId="1" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment/></xf><xf borderId="0" fillId="0" fontId="0" numFmtId="164" xfId="0" applyAlignment="1" applyFont="1" applyNumberFormat="1"><alignment /></xf><xf borderId="0" fillId="0" fontId="0" numFmtId="165" xfId="0" applyAlignment="1" applyFont="1" applyNumberFormat="1"><alignment /></xf></cellXfs><cellStyles count="1"><cellStyle xfId="0" name="Normal" builtinId="0"/></cellStyles><dxfs count="0"/></styleSheet>`},{name:`xl/sharedStrings.xml`,xml:`<sst xmlns="${hc}" count="2" uniqueCount="2"><si><t>text here</t></si></sst>`},{name:`xl/workbook.xml`,xml:`<workbook xmlns="${hc}" xmlns:r="${_c}"><workbookPr/><sheets>`+this.sheets.map(e=>`<sheet state="visible" name="${e.name}" sheetId="${e.id}" r:id="rId${e.id+2}"/>`).join(``)+`</sheets><definedNames/><calcPr/></workbook>`},{name:`xl/_rels/workbook.xml.rels`,xml:`<Relationships xmlns="${gc}/relationships"><Relationship Id="rId1" Type="${_c}/styles" Target="styles.xml" /><Relationship Id="rId2" Type="${_c}/sharedStrings" Target="sharedStrings.xml"/>`+this.sheets.map(e=>`<Relationship Id="rId${e.id+2}" Type="${_c}/worksheet" Target="worksheets/sheet${e.id}.xml"/>`).join(``)+`</Relationships>`},{name:`[Content_Types].xml`,xml:`<Types xmlns="${gc}/content-types"><Default ContentType="application/xml" Extension="xml"/><Default ContentType="application/vnd.openxmlformats-package.relationships+xml" Extension="rels"/>`+this.sheets.map(e=>`<Override ContentType="${pc}.worksheet+xml" PartName="/xl/worksheets/sheet${e.id}.xml"/>`).join(``)+`<Override ContentType="${pc}.sharedStrings+xml" PartName="/xl/sharedStrings.xml"/><Override ContentType="${pc}.styles+xml" PartName="/xl/styles.xml" /><Override ContentType="${pc}.sheet.main+xml" PartName="/xl/workbook.xml"/></Types>`},{name:`_rels/.rels`,xml:`<Relationships xmlns="${gc}/relationships"><Relationship Id="rId1" Type="${_c}/officeDocument" Target="xl/workbook.xml"/></Relationships>`}],t=this.sheets.map(e=>{let t=0,n=e.data.map((e,n)=>{let r=this.frozen&&n===0?` s="1"`:``;e.length>t&&(t=e.length);let i=e.map((e,t)=>{let i=this.colName(t)+(n+1);return typeof e==`number`?`<c r="${i}"${r}><v>${e}</v></c>`:e instanceof Date?`<c s="${e.getHours()||e.getMinutes()||e.getSeconds()?3:2}"><v>${this.dateToExcelDate(e)}</v></c>`:`<c t="inlineStr"${r}><is><t>${this.escapeXml(e.toString())}</t></is></c>`});return`<row r="${n+1}">${i.join(``)}</row>`});return{name:`xl/worksheets/sheet${e.id}.xml`,xml:`<worksheet xmlns="${hc}"><sheetViews><sheetView workbookViewId="0"`+(this.frozen?` tabSelected="1"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView>`:`/>`)+`</sheetViews><sheetFormatPr customHeight="1" defaultColWidth="17.5" defaultRowHeight="15.75"/><sheetData>${n.join(``)}</sheetData>`+(this.autoFilter?`<autoFilter ref="A1:${this.colName(t)}${e.data.length}"/>`:``)+`</worksheet>`}}),n=new uc(this._filename,!1);return[...e,...t].forEach(e=>n.addFileFromString(e.name,e.xml)),this.buffer=n.generate(),this.buffer}colName(e){return e<26?String.fromCharCode(e+65):String.fromCharCode(Math.floor(e/26+64))+String.fromCharCode(Math.floor(e%26+65))}escapeXml(e){return e.replace(/[<>&'"]/gu,e=>[`&lt;`,`&gt;`,`&amp;`,`&apos;`,`&quot;`][`<>&'"`.indexOf(e)])}dateToExcelDate(e){return 25569+(e.getTime()-e.getTimezoneOffset()*6e4)/864e5}}})))()}function xc(){return(xc=e((()=>{bc()})))()}var Sc,Cc;function wc(){return(wc=e((()=>{Jt(),Sc=(e,t)=>{Object.assign(e.style,{display:t?``:`none`})},Cc=class extends HTMLElement{static get observedAttributes(){return[`opened`]}toggle=qt(`height`);constructor(){super();let e=new CSSStyleSheet;e.replaceSync(`
      :host { display: block; }
		`);let t=this.attachShadow({mode:`open`});t.appendChild(document.createElement(`slot`)),t.adoptedStyleSheets=[e]}connectedCallback(){Sc(this,this.getAttribute(`opened`)!=null)}attributeChangedCallback(e,t,n){if(e===`opened`){let e=n!=null;return this.isConnected?this.toggle(this,e):Sc(this,e)}}},customElements.define(`cosmoz-collapse`,Cc)})))()}function Tc(){return(Tc=e((()=>{wc()})))()}export{pe as $,zo as A,Nr as B,cs as C,rs as D,as as E,Gi as F,qe as G,Gt as H,Wi as I,Ie as J,Je as K,Yr as L,oa as M,ia as N,Ho as O,Y as P,ve as Q,Pr as R,os as S,is as T,Qe as U,jr as V,$e as W,ge as X,ke as Y,ye as Z,vs as _,ic as a,fs as b,Xs as c,Js as d,fe as et,qs as f,Os as g,Is as h,bc as i,Vo as j,Uo as k,Ks as l,Ls as m,xc as n,rc as o,Gs as p,Fe as q,yc as r,Zs as s,Tc as t,Ys as u,ps as v,ls as w,us as x,ds as y,Ir as z};