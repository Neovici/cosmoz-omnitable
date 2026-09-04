import{o as P,n as K,w as Q,b as E,f as tt,g as D,h as sr,u as F,A as wt,i as ar,j as lr,t as cr,E as dr,k as yt,l as nt,m as Lt,p as Zr,q as X,r as Se,s as ur,v as Kr,x as Qr,y as Te,z as to,B as fr}from"./iframe-CbFp217G.js";const us=t=>!!(t==null||Array.isArray(t)&&t.length===0||typeof t=="string"&&t.length===0||typeof t=="number"&&t===0),eo={isoBasic:/^\d{4}-\d{2}-\d{2}$/iu},ro=t=>typeof t=="string"&&eo.isoBasic.test(t)?new Date(`${t}T00:00`):new Date(t),fs=t=>{if(t==null)return;if(t instanceof Date&&!isNaN(t.getTime()))return t;if(!(typeof t=="number"||typeof t=="string"))return;const e=ro(t);if(!(e instanceof Date&&isNaN(e.getTime())))return e},dt=t=>t<10?"0"+t:t,hs=t=>t instanceof Date?t.getFullYear()+"-"+dt(t.getMonth()+1)+"-"+dt(t.getDate())+"T"+dt(t.getHours())+":"+dt(t.getMinutes())+":"+dt(t.getSeconds())+"."+(t.getMilliseconds()/1e3).toFixed(3).slice(2,5):null,ps=({slot:t,title:e,className:i,width:o="24",height:r="24",styles:n}={})=>E`
  <svg
    slot=${P(t)}
    class=${`chevron-selector-vertical-icon ${i??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${o}
    height=${r}
    style=${P(n)}
  >
    ${K(e,()=>Q`<title>${e}</title>`)}
    <path d="m7 15 5 5 5-5M7 9l5-5 5 5" />
  </svg>
`,oo=({slot:t,title:e,className:i,width:o="24",height:r="24",styles:n}={})=>E`
  <svg
    slot=${P(t)}
    class=${`dots-vertical-icon ${i??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${o}
    height=${r}
    style=${P(n)}
  >
    ${K(e,()=>Q`<title>${e}</title>`)}
    <path
      d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
  </svg>
`,ms=({slot:t,title:e,className:i,width:o="24",height:r="24",styles:n}={})=>E`
  <svg
    slot=${P(t)}
    class=${`download-01-icon ${i??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${o}
    height=${r}
    style=${P(n)}
  >
    ${K(e,()=>Q`<title>${e}</title>`)}
    <path
      d="M21 15v1.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V15m14-5-5 5m0 0-5-5m5 5V3"
    />
  </svg>
`,gs=({slot:t,title:e,className:i,width:o="24",height:r="24",styles:n}={})=>E`
  <svg
    slot=${P(t)}
    class=${`equal-icon ${i??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${o}
    height=${r}
    style=${P(n)}
  >
    ${K(e,()=>Q`<title>${e}</title>`)}
    <path d="M5 9h14M5 15h14" />
  </svg>
`,ys=({slot:t,title:e,className:i,width:o="24",height:r="24",styles:n}={})=>E`
  <svg
    slot=${P(t)}
    class=${`x-circle-icon ${i??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${o}
    height=${r}
    style=${P(n)}
  >
    ${K(e,()=>Q`<title>${e}</title>`)}
    <path
      d="m15 9-6 6m0-6 6 6m7-3c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
`,no=tt`
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
`,io=tt`
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
		${no}
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
`,so=["variant","size","disabled","full-width","type","value","href","target","rel","download"],ao=t=>{const e=t.hasAttribute("disabled"),i=t.getAttribute("type")||"button",o=t.getAttribute("href");F(()=>{const n=s=>{t.hasAttribute("disabled")&&s.stopImmediatePropagation()};return t.addEventListener("click",n,{capture:!0}),()=>t.removeEventListener("click",n,{capture:!0})},[]);const r=E`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`;if(o!=null){const n=t.getAttribute("target"),s=t.getAttribute("rel"),a=t.getAttribute("download");return E`
			<a
				href=${o}
				class="button"
				part="button"
				aria-disabled=${e?"true":wt}
				target=${P(n)}
				rel=${P(s)}
				download=${P(a)}
				>${r}</a
			>
		`}return E`
		<button type=${i} class="button" ?disabled=${e} part="button">
			${r}
		</button>
	`};customElements.define("cosmoz-button",D(ao,{observedAttributes:so,styleSheets:[sr,io],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const _s=({slot:t,title:e,className:i,width:o="24",height:r="24",styles:n}={})=>E`
  <svg
    slot=${P(t)}
    class=${`announcement-icon ${i??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${o}
    height=${r}
    style=${P(n)}
  >
    ${K(e,()=>Q`<title>${e}</title>`)}
    <path
      d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"
    />
  </svg>
`,bs=({slot:t,title:e,className:i,width:o="24",height:r="24",styles:n}={})=>E`
  <svg
    slot=${P(t)}
    class=${`error-icon ${i??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${o}
    height=${r}
    style=${P(n)}
  >
    ${K(e,()=>Q`<title>${e}</title>`)}
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
    />
  </svg>
`,lo={duration:250},hr=t=>(e,i,o)=>{const r="max"+t.charAt(0).toUpperCase()+t.slice(1);Object.assign(e.style,{[r]:"",display:"",overflow:"hidden"});const{[t]:n}=e.getBoundingClientRect(),s=[0,n],[a,l]=i?s:s.slice().reverse(),c=e.animate([{[r]:`${a}px`},{[r]:`${l}px`}],{...lo,...o});c.onfinish=()=>Object.assign(e.style,{[r]:"",display:i?"":"none",overflow:i?"":"visible"})};const pr="important",co=" !"+pr,uo=ar(class extends lr{constructor(t){if(super(t),t.type!==cr.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const o=t[i];return o==null?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(t,[e]){const{style:i}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const o of this.ft)e[o]==null&&(this.ft.delete(o),o.includes("-")?i.removeProperty(o):i[o]=null);for(const o in e){const r=e[o];if(r!=null){this.ft.add(o);const n=typeof r=="string"&&r.endsWith(co);o.includes("-")||n?i.setProperty(o,n?r.slice(0,-11):r,n?pr:""):i[o]=r}}return dr}}),fo=(t=HTMLElement)=>class extends t{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},ho=tt`
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
`,po=()=>E`<div class="wrap" part="wrap"><slot></slot></div>`;customElements.define("cosmoz-dropdown-content",fo(D(po,{styleSheets:[ho]})));const it=Math.min,$=Math.max,$t=Math.round,St=Math.floor,M=t=>({x:t,y:t}),mo={left:"right",right:"left",bottom:"top",top:"bottom"};function go(t,e,i){return $(t,it(e,i))}function jt(t,e){return typeof t=="function"?t(e):t}function st(t){return t.split("-")[0]}function Vt(t){return t.split("-")[1]}function mr(t){return t==="x"?"y":"x"}function gr(t){return t==="y"?"height":"width"}function U(t){const e=t[0];return e==="t"||e==="b"?"y":"x"}function yr(t){return mr(U(t))}function yo(t,e,i){i===void 0&&(i=!1);const o=Vt(t),r=yr(t),n=gr(r);let s=r==="x"?o===(i?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(s=Mt(s)),[s,Mt(s)]}function _o(t){const e=Mt(t);return[se(t),e,se(e)]}function se(t){return t.includes("start")?t.replace("start","end"):t.replace("end","start")}const Ae=["left","right"],Oe=["right","left"],bo=["top","bottom"],wo=["bottom","top"];function vo(t,e,i){switch(t){case"top":case"bottom":return i?e?Oe:Ae:e?Ae:Oe;case"left":case"right":return e?bo:wo;default:return[]}}function xo(t,e,i,o){const r=Vt(t);let n=vo(st(t),i==="start",o);return r&&(n=n.map(s=>s+"-"+r),e&&(n=n.concat(n.map(se)))),n}function Mt(t){const e=st(t);return mo[e]+t.slice(e.length)}function Po(t){var e,i,o,r;return{top:(e=t.top)!=null?e:0,right:(i=t.right)!=null?i:0,bottom:(o=t.bottom)!=null?o:0,left:(r=t.left)!=null?r:0}}function Eo(t){return typeof t!="number"?Po(t):{top:t,right:t,bottom:t,left:t}}function Dt(t){const{x:e,y:i,width:o,height:r}=t;return{width:o,height:r,top:i,left:e,right:e+o,bottom:i+r,x:e,y:i}}function ze(t,e,i){let{reference:o,floating:r}=t;const n=U(e),s=yr(e),a=gr(s),l=st(e),c=n==="y",d=o.x+o.width/2-r.width/2,u=o.y+o.height/2-r.height/2,f=o[a]/2-r[a]/2;let h;switch(l){case"top":h={x:d,y:o.y-r.height};break;case"bottom":h={x:d,y:o.y+o.height};break;case"right":h={x:o.x+o.width,y:u};break;case"left":h={x:o.x-r.width,y:u};break;default:h={x:o.x,y:o.y}}const p=Vt(e);return p&&(h[s]+=f*(p==="end"?1:-1)*(i&&c?-1:1)),h}async function Co(t,e){var i;e===void 0&&(e={});const{x:o,y:r,platform:n,rects:s,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:f=!1,padding:h=0}=jt(e,t),p=Eo(h),y=a[f?u==="floating"?"reference":"floating":u],m=Dt(await n.getClippingRect({element:(i=await(n.isElement==null?void 0:n.isElement(y)))==null||i?y:y.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(a.floating)),boundary:c,rootBoundary:d,strategy:l})),_=u==="floating"?{x:o,y:r,width:s.floating.width,height:s.floating.height}:s.reference,w=await(n.getOffsetParent==null?void 0:n.getOffsetParent(a.floating)),v=await(n.isElement==null?void 0:n.isElement(w))&&await(n.getScale==null?void 0:n.getScale(w))||{x:1,y:1},C=Dt(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:_,offsetParent:w,strategy:l}):_);return{top:(m.top-C.top+p.top)/v.y,bottom:(C.bottom-m.bottom+p.bottom)/v.y,left:(m.left-C.left+p.left)/v.x,right:(C.right-m.right+p.right)/v.x}}const So=50,To=async(t,e,i)=>{const{placement:o="bottom",strategy:r="absolute",middleware:n=[],platform:s}=i,a=s.detectOverflow?s:{...s,detectOverflow:Co},l=await(s.isRTL==null?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:d,y:u}=ze(c,o,l),f=o,h=0;const p={};for(let g=0;g<n.length;g++){const y=n[g];if(!y)continue;const{name:m,fn:_}=y,{x:w,y:v,data:C,reset:x}=await _({x:d,y:u,initialPlacement:o,placement:f,strategy:r,middlewareData:p,rects:c,platform:a,elements:{reference:t,floating:e}});d=w??d,u=v??u,p[m]={...p[m],...C},x&&h<So&&(h++,typeof x=="object"&&(x.placement&&(f=x.placement),x.rects&&(c=x.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:r}):x.rects),{x:d,y:u}=ze(c,f,l)),g=-1)}return{x:d,y:u,placement:f,strategy:r,middlewareData:p}},Ao=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var i,o;const{placement:r,middlewareData:n,rects:s,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:g=!0,...y}=jt(t,e);if((i=n.arrow)!=null&&i.alignmentOffset)return{};const m=st(r),_=U(a),w=st(a)===a,v=await(l.isRTL==null?void 0:l.isRTL(c.floating)),C=f||(w||!g?[Mt(a)]:_o(a)),x=p!=="none";!f&&x&&C.push(...xo(a,g,p,v));const B=[a,...C],L=await l.detectOverflow(e,y),V=[];let z=((o=n.flip)==null?void 0:o.overflows)||[];if(d&&V.push(L[m]),u){const q=yo(r,s,v);V.push(L[q[0]],L[q[1]])}if(z=[...z,{placement:r,overflows:V}],!V.every(q=>q<=0)){var Pe,Ee;const q=(((Pe=n.flip)==null?void 0:Pe.index)||0)+1,Kt=B[q];if(Kt&&(!(u==="alignment"?_!==U(Kt):!1)||z.every(O=>U(O.placement)===_?O.overflows[0]>0:!0)))return{data:{index:q,overflows:z},reset:{placement:Kt}};let ct=(Ee=z.filter(W=>W.overflows[0]<=0).sort((W,O)=>W.overflows[1]-O.overflows[1])[0])==null?void 0:Ee.placement;if(!ct)switch(h){case"bestFit":{var Ce;const W=(Ce=z.filter(O=>{if(x){const H=U(O.placement);return H===_||H==="y"}return!0}).map(O=>[O.placement,O.overflows.filter(H=>H>0).reduce((H,Gr)=>H+Gr,0)]).sort((O,H)=>O[1]-H[1])[0])==null?void 0:Ce[0];W&&(ct=W);break}case"initialPlacement":ct=a;break}if(r!==ct)return{reset:{placement:ct}}}return{}}}},Oo=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:o,placement:r,platform:n}=e,{mainAxis:s=!0,crossAxis:a=!1,limiter:l={fn:_=>{let{x:w,y:v}=_;return{x:w,y:v}}},...c}=jt(t,e),d={x:i,y:o},u=await n.detectOverflow(e,c),f=U(r),h=mr(f);let p=d[h],g=d[f];const y=(_,w)=>go(w+u[_==="y"?"top":"left"],w,w-u[_==="y"?"bottom":"right"]);s&&(p=y(h,p)),a&&(g=y(f,g));const m=l.fn({...e,[h]:p,[f]:g});return{...m,data:{x:m.x-i,y:m.y-o,enabled:{[h]:s,[f]:a}}}}}},zo=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:i,rects:o,platform:r,elements:n}=e,{apply:s=()=>{},...a}=jt(t,e),l=await r.detectOverflow(e,a),c=st(i),d=Vt(i),u=U(i)==="y",{width:f,height:h}=o.floating;let p,g;c==="top"||c==="bottom"?(p=c,g=d===(await(r.isRTL==null?void 0:r.isRTL(n.floating))?"start":"end")?"left":"right"):(g=c,p=d==="end"?"top":"bottom");const y=h-l.top-l.bottom,m=f-l.left-l.right,_=it(h-l[p],y),w=it(f-l[g],m),v=e.middlewareData.shift,C=!v;let x=_,B=w;v!=null&&v.enabled.x&&(B=m),v!=null&&v.enabled.y&&(x=y),C&&!d&&(u?B=f-2*$(l.left,l.right):x=h-2*$(l.top,l.bottom)),await s({...e,availableWidth:B,availableHeight:x});const L=await r.getDimensions(n.floating);return f!==L.width||h!==L.height?{reset:{rects:!0}}:{}}}};function qt(){return typeof window<"u"}function at(t){return _r(t)?(t.nodeName||"").toLowerCase():"#document"}function T(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function I(t){var e;return(e=(_r(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function _r(t){return qt()?t instanceof Node||t instanceof T(t).Node:!1}function k(t){return qt()?t instanceof Element||t instanceof T(t).Element:!1}function j(t){return qt()?t instanceof HTMLElement||t instanceof T(t).HTMLElement:!1}function Re(t){return!qt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof T(t).ShadowRoot}function Wt(t){const{overflow:e,overflowX:i,overflowY:o,display:r}=N(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+i)&&r!=="inline"&&r!=="contents"}function Ro(t){return/^(table|td|th)$/.test(at(t))}function Yt(t){try{if(t.matches(":popover-open"))return!0}catch{}try{return t.matches(":modal")}catch{return!1}}const ko=/transform|translate|scale|rotate|perspective|filter/,No=/paint|layout|strict|content/,Y=t=>!!t&&t!=="none";let Qt;function ge(t){const e=k(t)?N(t):t;return Y(e.transform)||Y(e.translate)||Y(e.scale)||Y(e.rotate)||Y(e.perspective)||!ye()&&(Y(e.backdropFilter)||Y(e.filter))||ko.test(e.willChange||"")||No.test(e.contain||"")}function Lo(t){let e=G(t);for(;j(e)&&!vt(e);){if(ge(e))return e;if(Yt(e))return null;e=G(e)}return null}function ye(){return Qt==null&&(Qt=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Qt}function vt(t){return/^(html|body|#document)$/.test(at(t))}function N(t){return T(t).getComputedStyle(t)}function Xt(t){return k(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function G(t){if(at(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Re(t)&&t.host||I(t);return Re(e)?e.host:e}function br(t){const e=G(t);return vt(e)?(t.ownerDocument||t).body:j(e)&&Wt(e)?e:br(e)}function xt(t,e,i){var o;e===void 0&&(e=[]),i===void 0&&(i=!0);const r=br(t),n=r===((o=t.ownerDocument)==null?void 0:o.body),s=T(r);if(n){const a=ae(s);return e.concat(s,s.visualViewport||[],Wt(r)?r:[],a&&i?xt(a):[])}else return e.concat(r,xt(r,[],i))}function ae(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function wr(t){const e=N(t);let i=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const r=j(t),n=r?t.offsetWidth:i,s=r?t.offsetHeight:o,a=$t(i)!==n||$t(o)!==s;return a&&(i=n,o=s),{width:i,height:o,$:a}}function _e(t){return k(t)?t:t.contextElement}function rt(t){const e=_e(t);if(!j(e))return M(1);const i=e.getBoundingClientRect(),{width:o,height:r,$:n}=wr(e);let s=(n?$t(i.width):i.width)/o,a=(n?$t(i.height):i.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const $o=M(0);function vr(t){const e=T(t);return!ye()||!e.visualViewport?$o:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Mo(t,e,i){return e===void 0&&(e=!1),!!i&&e&&i===T(t)}function Z(t,e,i,o){e===void 0&&(e=!1),i===void 0&&(i=!1);const r=t.getBoundingClientRect(),n=_e(t);let s=M(1);e&&(o?k(o)&&(s=rt(o)):s=rt(t));const a=Mo(n,i,o)?vr(n):M(0);let l=(r.left+a.x)/s.x,c=(r.top+a.y)/s.y,d=r.width/s.x,u=r.height/s.y;if(n&&o){const f=T(n),h=k(o)?T(o):o;let p=f,g=ae(p);for(;g&&h!==p;){const y=rt(g),m=g.getBoundingClientRect(),_=N(g),w=m.left+(g.clientLeft+parseFloat(_.paddingLeft))*y.x,v=m.top+(g.clientTop+parseFloat(_.paddingTop))*y.y;l*=y.x,c*=y.y,d*=y.x,u*=y.y,l+=w,c+=v,p=T(g),g=ae(p)}}return Dt({width:d,height:u,x:l,y:c})}function Jt(t,e){const i=Xt(t).scrollLeft;return e?e.left+i:Z(I(t)).left+i}function xr(t,e){const i=t.getBoundingClientRect(),o=i.left+e.scrollLeft-Jt(t,i),r=i.top+e.scrollTop;return{x:o,y:r}}function Do(t){let{elements:e,rect:i,offsetParent:o,strategy:r}=t;const n=r==="fixed",s=I(o),a=e?Yt(e.floating):!1;if(o===s||a&&n)return i;let l={scrollLeft:0,scrollTop:0},c=M(1);const d=M(0),u=j(o);if((u||!n)&&((at(o)!=="body"||Wt(s))&&(l=Xt(o)),u)){const h=Z(o);c=rt(o),d.x=h.x+o.clientLeft,d.y=h.y+o.clientTop}const f=s&&!u&&!n?xr(s,l):M(0);return{width:i.width*c.x,height:i.height*c.y,x:i.x*c.x-l.scrollLeft*c.x+d.x+f.x,y:i.y*c.y-l.scrollTop*c.y+d.y+f.y}}function Fo(t){return t.getClientRects?Array.from(t.getClientRects()):[]}function Io(t){const e=Xt(t),i=t.ownerDocument.body,o=$(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),r=$(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let n=-e.scrollLeft+Jt(t);const s=-e.scrollTop;return N(i).direction==="rtl"&&(n+=$(t.clientWidth,i.clientWidth)-o),{width:o,height:r,x:n,y:s}}const Bo=25;function Ho(t,e,i){i===void 0&&(i="viewport");const o=i==="layoutViewport",r=T(t),n=I(t),s=r.visualViewport;let a=n.clientWidth,l=n.clientHeight,c=0,d=0;if(s){const f=!ye()||e==="fixed";o?f||(c=-s.offsetLeft,d=-s.offsetTop):(a=s.width,l=s.height,f&&(c=s.offsetLeft,d=s.offsetTop))}if(Jt(n)<=0){const f=n.ownerDocument,h=f.body,p=getComputedStyle(h),g=f.compatMode==="CSS1Compat"&&parseFloat(p.marginLeft)+parseFloat(p.marginRight)||0,y=Math.abs(n.clientWidth-h.clientWidth-g),m=getComputedStyle(n).scrollbarGutter==="stable both-edges"?y/2:y;m<=Bo&&(a-=m)}return{width:a,height:l,x:c,y:d}}function Uo(t,e){const i=Z(t,!0,e==="fixed"),o=i.top+t.clientTop,r=i.left+t.clientLeft,n=rt(t),s=t.clientWidth*n.x,a=t.clientHeight*n.y,l=r*n.x,c=o*n.y;return{width:s,height:a,x:l,y:c}}function ke(t,e,i){let o;if(e==="viewport"||e==="layoutViewport")o=Ho(t,i,e);else if(e==="document")o=Io(I(t));else if(k(e))o=Uo(e,i);else{const r=vr(t);o={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return Dt(o)}function jo(t,e){const i=e.get(t);if(i)return i;let o=xt(t,[],!1).filter(a=>k(a)&&at(a)!=="body"),r=null;const n=N(t).position==="fixed";let s=n?G(t):t;for(;k(s)&&!vt(s);){const a=N(s),l=ge(s),c=r?r.position:n?"fixed":"";!l&&(c==="fixed"||c==="absolute"&&a.position==="static")?o=o.filter(u=>u!==s):r=a,s=G(s)}return e.set(t,o),o}function Vo(t){let{element:e,boundary:i,rootBoundary:o,strategy:r}=t;const s=[...i==="clippingAncestors"?Yt(e)?[]:jo(e,this._c):[].concat(i),o],a=ke(e,s[0],r);let l=a.top,c=a.right,d=a.bottom,u=a.left;for(let f=1;f<s.length;f++){const h=ke(e,s[f],r);l=$(h.top,l),c=it(h.right,c),d=it(h.bottom,d),u=$(h.left,u)}return{width:c-u,height:d-l,x:u,y:l}}function qo(t){const{width:e,height:i}=wr(t);return{width:e,height:i}}function Wo(t,e,i){const o=j(e),r=I(e),n=i==="fixed",s=Z(t,!0,n,e);let a={scrollLeft:0,scrollTop:0};const l=M(0);if((o||!n)&&((at(e)!=="body"||Wt(r))&&(a=Xt(e)),o)){const f=Z(e,!0,n,e);l.x=f.x+e.clientLeft,l.y=f.y+e.clientTop}!o&&r&&(l.x=Jt(r));const c=r&&!o&&!n?xr(r,a):M(0),d=s.left+a.scrollLeft-l.x-c.x,u=s.top+a.scrollTop-l.y-c.y;return{x:d,y:u,width:s.width,height:s.height}}function te(t){return N(t).position==="static"}function Ne(t,e){if(!j(t)||N(t).position==="fixed")return null;if(e)return e(t);let i=t.offsetParent;return I(t)===i&&(i=i.ownerDocument.body),i}function Pr(t,e){const i=T(t);if(Yt(t))return i;if(!j(t)){let r=G(t);for(;r&&!vt(r);){if(k(r)&&!te(r))return r;r=G(r)}return i}let o=Ne(t,e);for(;o&&Ro(o)&&te(o);)o=Ne(o,e);return o&&vt(o)&&te(o)&&!ge(o)?i:o||Lo(t)||i}const Yo=async function(t){const e=this.getOffsetParent||Pr,i=this.getDimensions,o=await i(t.floating);return{reference:Wo(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Xo(t){return N(t).direction==="rtl"}const Jo={convertOffsetParentRelativeRectToViewportRelativeRect:Do,getDocumentElement:I,getClippingRect:Vo,getOffsetParent:Pr,getElementRects:Yo,getClientRects:Fo,getDimensions:qo,getScale:rt,isElement:k,isRTL:Xo};function Er(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Go(t,e,i){let o=null,r;const n=I(t);function s(){var d;clearTimeout(r),(d=o)==null||d.disconnect(),o=null}function a(d,u){d===void 0&&(d=!1),u===void 0&&(u=1),s();const f=t.getBoundingClientRect(),{left:h,top:p,width:g,height:y}=f;if(d||e(),!g||!y)return;const m=St(p),_=St(n.clientWidth-(h+g)),w=St(n.clientHeight-(p+y)),v=St(h),x={rootMargin:-m+"px "+-_+"px "+-w+"px "+-v+"px",threshold:$(0,it(1,u))||1};let B=!0;function L(V){const z=V[0].intersectionRatio;if(!Er(f,t.getBoundingClientRect()))return a();if(z!==u){if(!B)return a();z?a(!1,z):r=setTimeout(()=>{a(!1,1e-7)},1e3)}B=!1}try{o=new IntersectionObserver(L,{...x,root:n.ownerDocument})}catch{o=new IntersectionObserver(L,x)}o.observe(t)}const l=T(t),c=()=>a(i);return l.addEventListener("resize",c),a(!0),()=>{l.removeEventListener("resize",c),s()}}function Zo(t,e,i,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,c=_e(t),d=r||n?[...c?xt(c):[],...e?xt(e):[]]:[];d.forEach(m=>{r&&m.addEventListener("scroll",i),n&&m.addEventListener("resize",i)});const u=c&&a?Go(c,i,n):null;let f=-1,h=null;s&&(h=new ResizeObserver(m=>{let[_]=m;_&&_.target===c&&h&&e&&(h.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var w;(w=h)==null||w.observe(e)})),i()}),c&&!l&&h.observe(c),e&&h.observe(e));let p,g=l?Z(t):null;l&&y();function y(){const m=Z(t);g&&!Er(g,m)&&i(),g=m,p=requestAnimationFrame(y)}return i(),()=>{var m;d.forEach(_=>{r&&_.removeEventListener("scroll",i),n&&_.removeEventListener("resize",i)}),u?.(),(m=h)==null||m.disconnect(),h=null,l&&cancelAnimationFrame(p)}}const Ko=Oo,Qo=Ao,ws=zo,tn=(t,e,i)=>{const o=new Map,r=i??{},n={...Jo,...r.platform,_c:o};return To(t,e,{...r,platform:n})},en=[Qo({fallbackAxisSideDirection:"start",crossAxis:!1}),Ko()],rn=({placement:t="bottom-start",strategy:e,middleware:i=en}={})=>{const[o,r]=yt(),[n,s]=yt(),[a,l]=yt();return F(()=>{if(!o||!(n instanceof HTMLElement)){l(void 0);return}return Zo(o,n,()=>tn(o,n,{placement:t,strategy:e,middleware:i}).then(l))},[o,n,t,e,i]),{setReference:r,setFloating:s,styles:nt(()=>a?{left:`${a.x}px`,top:`${a.y}px`}:{},[a?.x,a?.y])}},Le=t=>t.matches(":focus-within")?!0:t.shadowRoot?.querySelector("[popover]")?.matches(":focus-within")??!1,on=({disabled:t,onFocus:e})=>{const[i,o]=yt(),{focused:r,closed:n}=i||{},s=r&&!t,a=Zr({closed:n,onFocus:e}),l=X(d=>o(u=>({...u,closed:d})),[]),c=X(d=>{const u=d.currentTarget;return Le(u)?o(f=>({focused:!0,closed:!f?.closed})):u.focus()},[]);return F(()=>{if(!s)return;const d=u=>{if(u.defaultPrevented)return;const{closed:f}=a;u.key==="Escape"&&!f?(u.preventDefault(),l(!0)):["ArrowUp","Up"].includes(u.key)&&f&&(u.preventDefault(),l(!1))};return document.addEventListener("keydown",d,!0),()=>document.removeEventListener("keydown",d,!0)},[s]),{focused:s,active:s&&!n,setClosed:l,onToggle:c,onFocus:X(d=>{const u=Le(d.currentTarget);o({focused:u}),a.onFocus?.(u)},[a])}},nn=t=>{const e=on(t),{onFocus:i}=e,o=Lt();return F(()=>{t.setAttribute("tabindex","0");const r=s=>{clearTimeout(o.current),i(s)},n=s=>{clearTimeout(o.current);const a=s.currentTarget;o.current=setTimeout(()=>i({currentTarget:a}),30)};return t.addEventListener("focusin",r),t.addEventListener("focusout",n),()=>{clearTimeout(o.current),t.removeEventListener("focusin",r),t.removeEventListener("focusout",n)}},[i]),e},sn=t=>t.preventDefault(),an=tt`
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
`,ln=t=>{const{placement:e,strategy:i,middleware:o,render:r}=t,{active:n,onToggle:s}=nn(t),a=Lt(),{styles:l,setReference:c,setFloating:d}=rn({placement:e,strategy:i,middleware:o}),u=X(f=>{a.current=f,d(f)},[d]);return F(()=>{const f=a.current;f&&(n&&!f.matches(":popover-open")&&f.showPopover?.(),!n&&f.matches(":popover-open")&&f.hidePopover?.())},[n]),E`
		<div class="anchor" part="anchor" ${Se(c)}>
			<button
				@mousedown=${sn}
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
			style="${uo(l)}"
			${Se(u)}
			><slot></slot>${ur([r],()=>r?.()||wt)}</cosmoz-dropdown-content
		>
	`};customElements.define("cosmoz-dropdown",D(ln,{styleSheets:[an]}));const cn=tt`
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
`,dn=()=>E` <slot></slot> `;customElements.define("cosmoz-dropdown-list",D(dn,{styleSheets:[cn]}));const un=({placement:t})=>E` <cosmoz-dropdown
		.placement=${t}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;customElements.define("cosmoz-dropdown-menu",D(un));window.JSCompiler_renameProperty=function(t,e){return t};let fn=/(url\()([^)]*)(\))/g,hn=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,Tt,A;function _t(t,e){if(t&&hn.test(t)||t==="//")return t;if(Tt===void 0){Tt=!1;try{const i=new URL("b","http://a");i.pathname="c%20d",Tt=i.href==="http://a/c%20d"}catch{}}if(e||(e=document.baseURI||window.location.href),Tt)try{return new URL(t,e).href}catch{return t}return A||(A=document.implementation.createHTMLDocument("temp"),A.base=A.createElement("base"),A.head.appendChild(A.base),A.anchor=A.createElement("a"),A.body.appendChild(A.anchor)),A.base.href=e,A.anchor.href=t,A.anchor.href||t}function be(t,e){return t.replace(fn,function(i,o,r,n){return o+"'"+_t(r.replace(/["']/g,""),e)+"'"+n})}function we(t){return t.substring(0,t.lastIndexOf("/")+1)}const pn=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const mn=pn&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch{return!1}})();let gn=window.Polymer&&window.Polymer.rootPath||we(document.baseURI||window.location.href),Ft=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let le=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,yn=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,_n=window.Polymer&&window.Polymer.legacyOptimizations||!1,bn=window.Polymer&&window.Polymer.legacyWarnings||!1,wn=window.Polymer&&window.Polymer.syncInitialRender||!1,ce=window.Polymer&&window.Polymer.legacyUndefined||!1,vn=window.Polymer&&window.Polymer.orderedComputed||!1,$e=window.Polymer&&window.Polymer.removeNestedTemplates||!1,xn=window.Polymer&&window.Polymer.fastDomIf||!1;window.Polymer&&window.Polymer.suppressTemplateNotifications;window.Polymer&&window.Polymer.legacyNoObservedAttributes;let Pn=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;let En=0;const lt=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let i=En++;function o(r){let n=r.__mixinSet;if(n&&n[i])return r;let s=e,a=s.get(r);if(!a){a=t(r),s.set(r,a);let l=Object.create(a.__mixinSet||n||null);l[i]=!0,a.__mixinSet=l}return a}return o};let ve={},Cr={};function Me(t,e){ve[t]=Cr[t.toLowerCase()]=e}function De(t){return ve[t]||Cr[t.toLowerCase()]}function Cn(t){t.querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}class Pt extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,i){if(e){let o=De(e);return o&&i?o.querySelector(i):o}return null}attributeChangedCallback(e,i,o,r){i!==o&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,i=_t(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=we(i)}return this.__assetpath}register(e){if(e=e||this.id,e){if(le&&De(e)!==void 0)throw Me(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,Me(e,this),Cn(this)}}}Pt.prototype.modules=ve;customElements.define("dom-module",Pt);const Sn="link[rel=import][type~=css]",Tn="include",Fe="shady-unscoped";function Sr(t){return Pt.import(t)}function Ie(t){let e=t.body?t.body:t;const i=be(e.textContent,t.baseURI),o=document.createElement("style");return o.textContent=i,o}function An(t){const e=t.trim().split(/\s+/),i=[];for(let o=0;o<e.length;o++)i.push(...On(e[o]));return i}function On(t){const e=Sr(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(e._styles===void 0){const i=[];i.push(...Ar(e));const o=e.querySelector("template");o&&i.push(...Tr(o,e.assetpath)),e._styles=i}return e._styles}function Tr(t,e){if(!t._styles){const i=[],o=t.content.querySelectorAll("style");for(let r=0;r<o.length;r++){let n=o[r],s=n.getAttribute(Tn);s&&i.push(...An(s).filter(function(a,l,c){return c.indexOf(a)===l})),e&&(n.textContent=be(n.textContent,e)),i.push(n)}t._styles=i}return t._styles}function zn(t){let e=Sr(t);return e?Ar(e):[]}function Ar(t){const e=[],i=t.querySelectorAll(Sn);for(let o=0;o<i.length;o++){let r=i[o];if(r.import){const n=r.import,s=r.hasAttribute(Fe);if(s&&!n._unscopedStyle){const a=Ie(n);a.setAttribute(Fe,""),n._unscopedStyle=a}else n._style||(n._style=Ie(n));e.push(s?n._unscopedStyle:n._style)}}return e}const J=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t;function de(t){return t.indexOf(".")>=0}function et(t){let e=t.indexOf(".");return e===-1?t:t.slice(0,e)}function Rn(t,e){return t.indexOf(e+".")===0}function It(t,e){return e.indexOf(t+".")===0}function Bt(t,e,i){return e+i.slice(t.length)}function mt(t){if(Array.isArray(t)){let e=[];for(let i=0;i<t.length;i++){let o=t[i].toString().split(".");for(let r=0;r<o.length;r++)e.push(o[r])}return e.join(".")}else return t}function Or(t){return Array.isArray(t)?mt(t).split("."):t.toString().split(".")}function S(t,e,i){let o=t,r=Or(e);for(let n=0;n<r.length;n++){if(!o)return;let s=r[n];o=o[s]}return i&&(i.path=r.join(".")),o}function Be(t,e,i){let o=t,r=Or(e),n=r[r.length-1];if(r.length>1){for(let s=0;s<r.length-1;s++){let a=r[s];if(o=o[a],!o)return}o[n]=i}else o[e]=i;return r.join(".")}const Ht={},kn=/-[a-z]/g,Nn=/([A-Z])/g;function zr(t){return Ht[t]||(Ht[t]=t.indexOf("-")<0?t:t.replace(kn,e=>e[1].toUpperCase()))}function Gt(t){return Ht[t]||(Ht[t]=t.replace(Nn,"-$1").toLowerCase())}let Ln=0,Rr=0,ot=[],$n=0,ue=!1,kr=document.createTextNode("");new window.MutationObserver(Mn).observe(kr,{characterData:!0});function Mn(){ue=!1;const t=ot.length;for(let e=0;e<t;e++){let i=ot[e];if(i)try{i()}catch(o){setTimeout(()=>{throw o})}}ot.splice(0,t),Rr+=t}const vs={after(t){return{run(e){return window.setTimeout(e,t)},cancel(e){window.clearTimeout(e)}}},run(t,e){return window.setTimeout(t,e)},cancel(t){window.clearTimeout(t)}},Dn={run(t){return ue||(ue=!0,kr.textContent=$n++),ot.push(t),Ln++},cancel(t){const e=t-Rr;if(e>=0){if(!ot[e])throw new Error("invalid async handle: "+t);ot[e]=null}}};const Fn=Dn,Nr=lt(t=>{class e extends t{static createProperties(o){const r=this.prototype;for(let n in o)n in r||r._createPropertyAccessor(n)}static attributeNameForProperty(o){return o.toLowerCase()}static typeForProperty(o){}_createPropertyAccessor(o,r){this._addPropertyToAttributeMap(o),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[o]||(this.__dataHasAccessor[o]=!0,this._definePropertyAccessor(o,r))}_addPropertyToAttributeMap(o){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let r=this.__dataAttributes[o];return r||(r=this.constructor.attributeNameForProperty(o),this.__dataAttributes[r]=o),r}_definePropertyAccessor(o,r){Object.defineProperty(this,o,{get(){return this.__data[o]},set:r?function(){}:function(n){this._setPendingProperty(o,n,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let o in this.__dataHasAccessor)this.hasOwnProperty(o)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[o]=this[o],delete this[o])}_initializeInstanceProperties(o){Object.assign(this,o)}_setProperty(o,r){this._setPendingProperty(o,r)&&this._invalidateProperties()}_getProperty(o){return this.__data[o]}_setPendingProperty(o,r,n){let s=this.__data[o],a=this._shouldPropertyChange(o,r,s);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(o in this.__dataOld)&&(this.__dataOld[o]=s),this.__data[o]=r,this.__dataPending[o]=r),a}_isPropertyPending(o){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(o))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Fn.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const o=this.__data,r=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(o,r,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(o,r,n)),this.__dataCounter--}_shouldPropertiesChange(o,r,n){return!!r}_propertiesChanged(o,r,n){}_shouldPropertyChange(o,r,n){return n!==r&&(n===n||r===r)}attributeChangedCallback(o,r,n,s){r!==n&&this._attributeToProperty(o,n),super.attributeChangedCallback&&super.attributeChangedCallback(o,r,n,s)}_attributeToProperty(o,r,n){if(!this.__serializing){const s=this.__dataAttributes,a=s&&s[o]||o;this[a]=this._deserializeValue(r,n||this.constructor.typeForProperty(a))}}_propertyToAttribute(o,r,n){this.__serializing=!0,n=arguments.length<3?this[o]:n,this._valueToNodeAttribute(this,n,r||this.constructor.attributeNameForProperty(o)),this.__serializing=!1}_valueToNodeAttribute(o,r,n){const s=this._serializeValue(r);(n==="class"||n==="name"||n==="slot")&&(o=J(o)),s===void 0?o.removeAttribute(n):o.setAttribute(n,s===""&&window.trustedTypes?window.trustedTypes.emptyScript:s)}_serializeValue(o){return typeof o==="boolean"?o?"":void 0:o?.toString()}_deserializeValue(o,r){switch(r){case Boolean:return o!==null;case Number:return Number(o);default:return o}}}return e});const Lr={};let At=HTMLElement.prototype;for(;At;){let t=Object.getOwnPropertyNames(At);for(let e=0;e<t.length;e++)Lr[t[e]]=!0;At=Object.getPrototypeOf(At)}const In=window.trustedTypes?t=>trustedTypes.isHTML(t)||trustedTypes.isScript(t)||trustedTypes.isScriptURL(t):()=>!1;function Bn(t,e){if(!Lr[e]){let i=t[e];i!==void 0&&(t.__data?t._setPendingProperty(e,i):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=i))}}const Hn=lt(t=>{const e=Nr(t);class i extends e{static createPropertiesForAttributes(){let r=this.observedAttributes;for(let n=0;n<r.length;n++)this.prototype._createPropertyAccessor(zr(r[n]))}static attributeNameForProperty(r){return Gt(r)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(r){for(let n in r)this._setProperty(n,r[n])}_ensureAttribute(r,n){const s=this;s.hasAttribute(r)||this._valueToNodeAttribute(s,n,r)}_serializeValue(r){switch(typeof r){case"object":if(r instanceof Date)return r.toString();if(r){if(In(r))return r;try{return JSON.stringify(r)}catch{return""}}default:return super._serializeValue(r)}}_deserializeValue(r,n){let s;switch(n){case Object:try{s=JSON.parse(r)}catch{s=r}break;case Array:try{s=JSON.parse(r)}catch{s=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${r}`)}break;case Date:s=isNaN(r)?String(r):Number(r),s=new Date(s);break;default:s=super._deserializeValue(r,n);break}return s}_definePropertyAccessor(r,n){Bn(this,r),super._definePropertyAccessor(r,n)}_hasAccessor(r){return this.__dataHasAccessor&&this.__dataHasAccessor[r]}_isPropertyPending(r){return!!(this.__dataPending&&r in this.__dataPending)}}return i});const Un={"dom-if":!0,"dom-repeat":!0};let He=!1,Ue=!1;function jn(){if(!He){He=!0;const t=document.createElement("textarea");t.placeholder="a",Ue=t.placeholder===t.textContent}return Ue}function Vn(t){jn()&&t.localName==="textarea"&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}const qn=(()=>{const t=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:e=>e});return(e,i,o)=>{const r=i.getAttribute(o);if(t&&o.startsWith("on-")){e.setAttribute(o,t.createScript(r,o));return}e.setAttribute(o,r)}})();function Wn(t){let e=t.getAttribute("is");if(e&&Un[e]){let i=t;for(i.removeAttribute("is"),t=i.ownerDocument.createElement(e),i.parentNode.replaceChild(t,i),t.appendChild(i);i.attributes.length;){const{name:o}=i.attributes[0];qn(t,i,o),i.removeAttribute(o)}}return t}function $r(t,e){let i=e.parentInfo&&$r(t,e.parentInfo);if(i){for(let o=i.firstChild,r=0;o;o=o.nextSibling)if(e.parentIndex===r++)return o}else return t}function Yn(t,e,i,o){o.id&&(e[o.id]=i)}function Xn(t,e,i){if(i.events&&i.events.length)for(let o=0,r=i.events,n;o<r.length&&(n=r[o]);o++)t._addMethodEventListenerToNode(e,n.name,n.value,t)}function Jn(t,e,i,o){i.templateInfo&&(e._templateInfo=i.templateInfo,e._parentTemplateInfo=o)}function Gn(t,e,i){return t=t._methodHost||t,function(r){t[i]?t[i](r,r.detail):console.warn("listener method `"+i+"` not defined")}}const Zn=lt(t=>{class e extends t{static _parseTemplate(o,r){if(!o._templateInfo){let n=o._templateInfo={};n.nodeInfoList=[],n.nestedTemplate=!!r,n.stripWhiteSpace=r&&r.stripWhiteSpace||o.hasAttribute&&o.hasAttribute("strip-whitespace"),this._parseTemplateContent(o,n,{parent:null})}return o._templateInfo}static _parseTemplateContent(o,r,n){return this._parseTemplateNode(o.content,r,n)}static _parseTemplateNode(o,r,n){let s=!1,a=o;return a.localName=="template"&&!a.hasAttribute("preserve-content")?s=this._parseTemplateNestedTemplate(a,r,n)||s:a.localName==="slot"&&(r.hasInsertionPoint=!0),Vn(a),a.firstChild&&this._parseTemplateChildNodes(a,r,n),a.hasAttributes&&a.hasAttributes()&&(s=this._parseTemplateNodeAttributes(a,r,n)||s),s||n.noted}static _parseTemplateChildNodes(o,r,n){if(!(o.localName==="script"||o.localName==="style"))for(let s=o.firstChild,a=0,l;s;s=l){if(s.localName=="template"&&(s=Wn(s)),l=s.nextSibling,s.nodeType===Node.TEXT_NODE){let d=l;for(;d&&d.nodeType===Node.TEXT_NODE;)s.textContent+=d.textContent,l=d.nextSibling,o.removeChild(d),d=l;if(r.stripWhiteSpace&&!s.textContent.trim()){o.removeChild(s);continue}}let c={parentIndex:a,parentInfo:n};this._parseTemplateNode(s,r,c)&&(c.infoIndex=r.nodeInfoList.push(c)-1),s.parentNode&&a++}}static _parseTemplateNestedTemplate(o,r,n){let s=o,a=this._parseTemplate(s,r);return(a.content=s.content.ownerDocument.createDocumentFragment()).appendChild(s.content),n.templateInfo=a,!0}static _parseTemplateNodeAttributes(o,r,n){let s=!1,a=Array.from(o.attributes);for(let l=a.length-1,c;c=a[l];l--)s=this._parseTemplateNodeAttribute(o,r,n,c.name,c.value)||s;return s}static _parseTemplateNodeAttribute(o,r,n,s,a){return s.slice(0,3)==="on-"?(o.removeAttribute(s),n.events=n.events||[],n.events.push({name:s.slice(3),value:a}),!0):s==="id"?(n.id=a,!0):!1}static _contentForTemplate(o){let r=o._templateInfo;return r&&r.content||o.content}_stampTemplate(o,r){o&&!o.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(o),r=r||this.constructor._parseTemplate(o);let n=r.nodeInfoList,s=r.content||o.content,a=document.importNode(s,!0);a.__noInsertionPoint=!r.hasInsertionPoint;let l=a.nodeList=new Array(n.length);a.$={};for(let c=0,d=n.length,u;c<d&&(u=n[c]);c++){let f=l[c]=$r(a,u);Yn(this,a.$,f,u),Jn(this,f,u,r),Xn(this,f,u)}return a=a,a}_addMethodEventListenerToNode(o,r,n,s){s=s||o;let a=Gn(s,r,n);return this._addEventListenerToNode(o,r,a),a}_addEventListenerToNode(o,r,n){o.addEventListener(r,n)}_removeEventListenerFromNode(o,r,n){o.removeEventListener(r,n)}}return e});let Et=0;const Ct=[],b={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Mr="__computeInfo",Kn=/[A-Z]/;function ee(t,e,i){let o=t[e];if(!o)o=t[e]={};else if(!t.hasOwnProperty(e)&&(o=t[e]=Object.create(t[e]),i))for(let r in o){let n=o[r],s=o[r]=Array(n.length);for(let a=0;a<n.length;a++)s[a]=n[a]}return o}function gt(t,e,i,o,r,n){if(e){let s=!1;const a=Et++;for(let l in i){let c=r?et(l):l,d=e[c];if(d)for(let u=0,f=d.length,h;u<f&&(h=d[u]);u++)(!h.info||h.info.lastRun!==a)&&(!r||xe(l,h.trigger))&&(h.info&&(h.info.lastRun=a),h.fn(t,l,i,o,h.info,r,n),s=!0)}return s}return!1}function Qn(t,e,i,o,r,n,s,a){let l=!1,c=s?et(o):o,d=e[c];if(d)for(let u=0,f=d.length,h;u<f&&(h=d[u]);u++)(!h.info||h.info.lastRun!==i)&&(!s||xe(o,h.trigger))&&(h.info&&(h.info.lastRun=i),h.fn(t,o,r,n,h.info,s,a),l=!0);return l}function xe(t,e){if(e){let i=e.name;return i==t||!!(e.structured&&Rn(i,t))||!!(e.wildcard&&It(i,t))}else return!0}function je(t,e,i,o,r){let n=typeof r.method=="string"?t[r.method]:r.method,s=r.property;n?n.call(t,t.__data[s],o[s]):r.dynamicFn||console.warn("observer method `"+r.method+"` not defined")}function ti(t,e,i,o,r){let n=t[b.NOTIFY],s,a=Et++;for(let c in e)e[c]&&(n&&Qn(t,n,a,c,i,o,r)||r&&ei(t,c,i))&&(s=!0);let l;s&&(l=t.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function ei(t,e,i){let o=et(e);if(o!==e){let r=Gt(o)+"-changed";return Dr(t,r,i[e],e),!0}return!1}function Dr(t,e,i,o){let r={value:i,queueProperty:!0};o&&(r.path=o),J(t).dispatchEvent(new CustomEvent(e,{detail:r}))}function ri(t,e,i,o,r,n){let a=(n?et(e):e)!=e?e:null,l=a?S(t,a):t.__data[e];a&&l===void 0&&(l=i[e]),Dr(t,r.eventName,l,a)}function oi(t,e,i,o,r){let n,s=t.detail,a=s&&s.path;a?(o=Bt(i,o,a),n=s&&s.value):n=t.currentTarget[i],n=r?!n:n,(!e[b.READ_ONLY]||!e[b.READ_ONLY][o])&&e._setPendingPropertyOrPath(o,n,!0,!!a)&&(!s||!s.queueProperty)&&e._invalidateProperties()}function ni(t,e,i,o,r){let n=t.__data[e];Ft&&(n=Ft(n,r.attrName,"attribute",t)),t._propertyToAttribute(e,r.attrName,n)}function ii(t,e,i,o){let r=t[b.COMPUTE];if(r)if(vn){Et++;const n=ai(t),s=[];for(let l in e)Ve(l,r,s,n,o);let a;for(;a=s.shift();)Fr(t,"",e,i,a)&&Ve(a.methodInfo,r,s,n,o);Object.assign(i,t.__dataOld),Object.assign(e,t.__dataPending),t.__dataPending=null}else{let n=e;for(;gt(t,r,n,i,o);)Object.assign(i,t.__dataOld),Object.assign(e,t.__dataPending),n=t.__dataPending,t.__dataPending=null}}const si=(t,e,i)=>{let o=0,r=e.length-1,n=-1;for(;o<=r;){const s=o+r>>1,a=i.get(e[s].methodInfo)-i.get(t.methodInfo);if(a<0)o=s+1;else if(a>0)r=s-1;else{n=s;break}}n<0&&(n=r+1),e.splice(n,0,t)},Ve=(t,e,i,o,r)=>{const n=r?et(t):t,s=e[n];if(s)for(let a=0;a<s.length;a++){const l=s[a];l.info.lastRun!==Et&&(!r||xe(t,l.trigger))&&(l.info.lastRun=Et,si(l.info,i,o))}};function ai(t){let e=t.constructor.__orderedComputedDeps;if(!e){e=new Map;const i=t[b.COMPUTE];let{counts:o,ready:r,total:n}=li(t),s;for(;s=r.shift();){e.set(s,e.size);const a=i[s];a&&a.forEach(l=>{const c=l.info.methodInfo;--n,--o[c]===0&&r.push(c)})}n!==0&&console.warn(`Computed graph for ${t.localName} incomplete; circular?`),t.constructor.__orderedComputedDeps=e}return e}function li(t){const e=t[Mr],i={},o=t[b.COMPUTE],r=[];let n=0;for(let s in e){const a=e[s];n+=i[s]=a.args.filter(l=>!l.literal).length+(a.dynamicFn?1:0)}for(let s in o)e[s]||r.push(s);return{counts:i,ready:r,total:n}}function Fr(t,e,i,o,r){let n=fe(t,e,i,o,r);if(n===Ct)return!1;let s=r.methodInfo;return t.__dataHasAccessor&&t.__dataHasAccessor[s]?t._setPendingProperty(s,n,!0):(t[s]=n,!1)}function ci(t,e,i){let o=t.__dataLinkedPaths;if(o){let r;for(let n in o){let s=o[n];It(n,e)?(r=Bt(n,s,e),t._setPendingPropertyOrPath(r,i,!0,!0)):It(s,e)&&(r=Bt(s,n,e),t._setPendingPropertyOrPath(r,i,!0,!0))}}}function re(t,e,i,o,r,n,s){i.bindings=i.bindings||[];let a={kind:o,target:r,parts:n,literal:s,isCompound:n.length!==1};if(i.bindings.push(a),pi(a)){let{event:c,negate:d}=a.parts[0];a.listenerEvent=c||Gt(r)+"-changed",a.listenerNegate=d}let l=e.nodeInfoList.length;for(let c=0;c<a.parts.length;c++){let d=a.parts[c];d.compoundIndex=c,di(t,e,a,d,l)}}function di(t,e,i,o,r){if(!o.literal)if(i.kind==="attribute"&&i.target[0]==="-")console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let n=o.dependencies,s={index:r,binding:i,part:o,evaluator:t};for(let a=0;a<n.length;a++){let l=n[a];typeof l=="string"&&(l=Br(l),l.wildcard=!0),t._addTemplatePropertyEffect(e,l.rootProperty,{fn:ui,info:s,trigger:l})}}}function ui(t,e,i,o,r,n,s){let a=s[r.index],l=r.binding,c=r.part;if(n&&c.source&&e.length>c.source.length&&l.kind=="property"&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let d=i[e];e=Bt(c.source,l.target,e),a._setPendingPropertyOrPath(e,d,!1,!0)&&t._enqueueClient(a)}else{let d=r.evaluator._evaluateBinding(t,c,e,i,o,n);d!==Ct&&fi(t,a,l,c,d)}}function fi(t,e,i,o,r){if(r=hi(e,r,i,o),Ft&&(r=Ft(r,i.target,i.kind,e)),i.kind=="attribute")t._valueToNodeAttribute(e,r,i.target);else{let n=i.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[n]?(!e[b.READ_ONLY]||!e[b.READ_ONLY][n])&&e._setPendingProperty(n,r)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,n,r)}}function hi(t,e,i,o){if(i.isCompound){let r=t.__dataCompoundStorage[i.target];r[o.compoundIndex]=e,e=r.join("")}return i.kind!=="attribute"&&(i.target==="textContent"||i.target==="value"&&(t.localName==="input"||t.localName==="textarea"))&&(e=e??""),e}function pi(t){return!!t.target&&t.kind!="attribute"&&t.kind!="text"&&!t.isCompound&&t.parts[0].mode==="{"}function mi(t,e){let{nodeList:i,nodeInfoList:o}=e;if(o.length)for(let r=0;r<o.length;r++){let n=o[r],s=i[r],a=n.bindings;if(a)for(let l=0;l<a.length;l++){let c=a[l];gi(s,c),yi(s,t,c)}s.__dataHost=t}}function gi(t,e){if(e.isCompound){let i=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),o=e.parts,r=new Array(o.length);for(let s=0;s<o.length;s++)r[s]=o[s].literal;let n=e.target;i[n]=r,e.literal&&e.kind=="property"&&(n==="className"&&(t=J(t)),t[n]=e.literal)}}function yi(t,e,i){if(i.listenerEvent){let o=i.parts[0];t.addEventListener(i.listenerEvent,function(r){oi(r,e,i.target,o.source,o.negate)})}}function qe(t,e,i,o,r,n){n=e.static||n&&(typeof n!="object"||n[e.methodName]);let s={methodName:e.methodName,args:e.args,methodInfo:r,dynamicFn:n};for(let a=0,l;a<e.args.length&&(l=e.args[a]);a++)l.literal||t._addPropertyEffect(l.rootProperty,i,{fn:o,info:s,trigger:l});return n&&t._addPropertyEffect(e.methodName,i,{fn:o,info:s}),s}function fe(t,e,i,o,r){let n=t._methodHost||t,s=n[r.methodName];if(s){let a=t._marshalArgs(r.args,e,i);return a===Ct?Ct:s.apply(n,a)}else r.dynamicFn||console.warn("method `"+r.methodName+"` not defined")}const _i=[],Ir="(?:[a-zA-Z_$][\\w.:$\\-*]*)",bi="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",wi="(?:'(?:[^'\\\\]|\\\\.)*')",vi='(?:"(?:[^"\\\\]|\\\\.)*")',xi="(?:"+wi+"|"+vi+")",We="(?:("+Ir+"|"+bi+"|"+xi+")\\s*)",Pi="(?:"+We+"(?:,\\s*"+We+")*)",Ei="(?:\\(\\s*(?:"+Pi+"?)\\)\\s*)",Ci="("+Ir+"\\s*"+Ei+"?)",Si="(\\[\\[|{{)\\s*",Ti="(?:]]|}})",Ai="(?:(!)\\s*)?",Oi=Si+Ai+Ci+Ti,Ye=new RegExp(Oi,"g");function Xe(t){let e="";for(let i=0;i<t.length;i++){let o=t[i].literal;e+=o||""}return e}function oe(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let o={methodName:e[1],static:!0,args:_i};if(e[2].trim()){let r=e[2].replace(/\\,/g,"&comma;").split(",");return zi(r,o)}else return o}return null}function zi(t,e){return e.args=t.map(function(i){let o=Br(i);return o.literal||(e.static=!1),o},this),e}function Br(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:e,value:"",literal:!1},o=e[0];switch(o==="-"&&(o=e[1]),o>="0"&&o<="9"&&(o="#"),o){case"'":case'"':i.value=e.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(e),i.literal=!0;break}return i.literal||(i.rootProperty=et(e),i.structured=de(e),i.structured&&(i.wildcard=e.slice(-2)==".*",i.wildcard&&(i.name=e.slice(0,-2)))),i}function Je(t,e,i){let o=S(t,i);return o===void 0&&(o=e[i]),o}function Hr(t,e,i,o){const r={indexSplices:o};ce&&!t._overrideLegacyUndefined&&(e.splices=r),t.notifyPath(i+".splices",r),t.notifyPath(i+".length",e.length),ce&&!t._overrideLegacyUndefined&&(r.indexSplices=[])}function ut(t,e,i,o,r,n){Hr(t,e,i,[{index:o,addedCount:r,removed:n,object:e,type:"splice"}])}function Ri(t){return t[0].toUpperCase()+t.substring(1)}const ki=lt(t=>{const e=Zn(Hn(t));class i extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return b}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(ft.length){let r=ft[ft.length-1];r._enqueueClient(this),this.__dataHost=r}}_initializeProtoProperties(r){this.__data=Object.create(r),this.__dataPending=Object.create(r),this.__dataOld={}}_initializeInstanceProperties(r){let n=this[b.READ_ONLY];for(let s in r)(!n||!n[s])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[s]=this.__dataPending[s]=r[s])}_addPropertyEffect(r,n,s){this._createPropertyAccessor(r,n==b.READ_ONLY);let a=ee(this,n,!0)[r];a||(a=this[n][r]=[]),a.push(s)}_removePropertyEffect(r,n,s){let a=ee(this,n,!0)[r],l=a.indexOf(s);l>=0&&a.splice(l,1)}_hasPropertyEffect(r,n){let s=this[n];return!!(s&&s[r])}_hasReadOnlyEffect(r){return this._hasPropertyEffect(r,b.READ_ONLY)}_hasNotifyEffect(r){return this._hasPropertyEffect(r,b.NOTIFY)}_hasReflectEffect(r){return this._hasPropertyEffect(r,b.REFLECT)}_hasComputedEffect(r){return this._hasPropertyEffect(r,b.COMPUTE)}_setPendingPropertyOrPath(r,n,s,a){if(a||et(Array.isArray(r)?r[0]:r)!==r){if(!a){let l=S(this,r);if(r=Be(this,r,n),!r||!super._shouldPropertyChange(r,n,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(r,n,s))return ci(this,r,n),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[r])return this._setPendingProperty(r,n,s);this[r]=n}return!1}_setUnmanagedPropertyToNode(r,n,s){(s!==r[n]||typeof s=="object")&&(n==="className"&&(r=J(r)),r[n]=s)}_setPendingProperty(r,n,s){let a=this.__dataHasPaths&&de(r),l=a?this.__dataTemp:this.__data;return this._shouldPropertyChange(r,n,l[r])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),r in this.__dataOld||(this.__dataOld[r]=this.__data[r]),a?this.__dataTemp[r]=n:this.__data[r]=n,this.__dataPending[r]=n,(a||this[b.NOTIFY]&&this[b.NOTIFY][r])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[r]=s),!0):!1}_setProperty(r,n){this._setPendingProperty(r,n,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(r){this.__dataPendingClients=this.__dataPendingClients||[],r!==this&&this.__dataPendingClients.push(r)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let r=this.__dataPendingClients;if(r){this.__dataPendingClients=null;for(let n=0;n<r.length;n++){let s=r[n];s.__dataEnabled?s.__dataPending&&s._flushProperties():s._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(r,n){for(let s in r)(n||!this[b.READ_ONLY]||!this[b.READ_ONLY][s])&&this._setPendingPropertyOrPath(s,r[s],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(r,n,s){let a=this.__dataHasPaths;this.__dataHasPaths=!1;let l;ii(this,n,s,a),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(n,s,a),this._flushClients(),gt(this,this[b.REFLECT],n,s,a),gt(this,this[b.OBSERVE],n,s,a),l&&ti(this,l,n,s,a),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(r,n,s){this[b.PROPAGATE]&&gt(this,this[b.PROPAGATE],r,n,s),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,r,n,s)}_runEffectsForTemplate(r,n,s,a){const l=(c,d)=>{gt(this,r.propertyEffects,c,s,d,r.nodeList);for(let u=r.firstChild;u;u=u.nextSibling)this._runEffectsForTemplate(u,c,s,d)};r.runEffects?r.runEffects(l,n,a):l(n,a)}linkPaths(r,n){r=mt(r),n=mt(n),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[r]=n}unlinkPaths(r){r=mt(r),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[r]}notifySplices(r,n){let s={path:""},a=S(this,r,s);Hr(this,a,s.path,n)}get(r,n){return S(n||this,r)}set(r,n,s){s?Be(s,r,n):(!this[b.READ_ONLY]||!this[b.READ_ONLY][r])&&this._setPendingPropertyOrPath(r,n,!0)&&this._invalidateProperties()}push(r,...n){let s={path:""},a=S(this,r,s),l=a.length,c=a.push(...n);return n.length&&ut(this,a,s.path,l,n.length,[]),c}pop(r){let n={path:""},s=S(this,r,n),a=!!s.length,l=s.pop();return a&&ut(this,s,n.path,s.length,0,[l]),l}splice(r,n,s,...a){let l={path:""},c=S(this,r,l);n<0?n=c.length-Math.floor(-n):n&&(n=Math.floor(n));let d;return arguments.length===2?d=c.splice(n):d=c.splice(n,s,...a),(a.length||d.length)&&ut(this,c,l.path,n,a.length,d),d}shift(r){let n={path:""},s=S(this,r,n),a=!!s.length,l=s.shift();return a&&ut(this,s,n.path,0,0,[l]),l}unshift(r,...n){let s={path:""},a=S(this,r,s),l=a.unshift(...n);return n.length&&ut(this,a,s.path,0,n.length,[]),l}notifyPath(r,n){let s;if(arguments.length==1){let a={path:""};n=S(this,r,a),s=a.path}else Array.isArray(r)?s=mt(r):s=r;this._setPendingPropertyOrPath(s,n,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(r,n){this._addPropertyEffect(r,b.READ_ONLY),n&&(this["_set"+Ri(r)]=function(s){this._setProperty(r,s)})}_createPropertyObserver(r,n,s){let a={property:r,method:n,dynamicFn:!!s};this._addPropertyEffect(r,b.OBSERVE,{fn:je,info:a,trigger:{name:r}}),s&&this._addPropertyEffect(n,b.OBSERVE,{fn:je,info:a,trigger:{name:n}})}_createMethodObserver(r,n){let s=oe(r);if(!s)throw new Error("Malformed observer expression '"+r+"'");qe(this,s,b.OBSERVE,fe,null,n)}_createNotifyingProperty(r){this._addPropertyEffect(r,b.NOTIFY,{fn:ri,info:{eventName:Gt(r)+"-changed",property:r}})}_createReflectedProperty(r){let n=this.constructor.attributeNameForProperty(r);n[0]==="-"?console.warn("Property "+r+" cannot be reflected to attribute "+n+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(r,b.REFLECT,{fn:ni,info:{attrName:n}})}_createComputedProperty(r,n,s){let a=oe(n);if(!a)throw new Error("Malformed computed expression '"+n+"'");const l=qe(this,a,b.COMPUTE,Fr,r,s);ee(this,Mr)[r]=l}_marshalArgs(r,n,s){const a=this.__data,l=[];for(let c=0,d=r.length;c<d;c++){let{name:u,structured:f,wildcard:h,value:p,literal:g}=r[c];if(!g)if(h){const y=It(u,n),m=Je(a,s,y?n:u);p={path:y?n:u,value:m,base:y?S(a,u):m}}else p=f?Je(a,s,u):a[u];if(ce&&!this._overrideLegacyUndefined&&p===void 0&&r.length>1)return Ct;l[c]=p}return l}static addPropertyEffect(r,n,s){this.prototype._addPropertyEffect(r,n,s)}static createPropertyObserver(r,n,s){this.prototype._createPropertyObserver(r,n,s)}static createMethodObserver(r,n){this.prototype._createMethodObserver(r,n)}static createNotifyingProperty(r){this.prototype._createNotifyingProperty(r)}static createReadOnlyProperty(r,n){this.prototype._createReadOnlyProperty(r,n)}static createReflectedProperty(r){this.prototype._createReflectedProperty(r)}static createComputedProperty(r,n,s){this.prototype._createComputedProperty(r,n,s)}static bindTemplate(r){return this.prototype._bindTemplate(r)}_bindTemplate(r,n){let s=this.constructor._parseTemplate(r),a=this.__preBoundTemplateInfo==s;if(!a)for(let l in s.propertyEffects)this._createPropertyAccessor(l);if(n)if(s=Object.create(s),s.wasPreBound=a,!this.__templateInfo)this.__templateInfo=s;else{const l=r._parentTemplateInfo||this.__templateInfo,c=l.lastChild;s.parent=l,l.lastChild=s,s.previousSibling=c,c?c.nextSibling=s:l.firstChild=s}else this.__preBoundTemplateInfo=s;return s}static _addTemplatePropertyEffect(r,n,s){let a=r.hostProps=r.hostProps||{};a[n]=!0;let l=r.propertyEffects=r.propertyEffects||{};(l[n]=l[n]||[]).push(s)}_stampTemplate(r,n){n=n||this._bindTemplate(r,!0),ft.push(this);let s=super._stampTemplate(r,n);if(ft.pop(),n.nodeList=s.nodeList,!n.wasPreBound){let a=n.childNodes=[];for(let l=s.firstChild;l;l=l.nextSibling)a.push(l)}return s.templateInfo=n,mi(this,n),this.__dataClientsReady&&(this._runEffectsForTemplate(n,this.__data,null,!1),this._flushClients()),s}_removeBoundDom(r){const n=r.templateInfo,{previousSibling:s,nextSibling:a,parent:l}=n;s?s.nextSibling=a:l&&(l.firstChild=a),a?a.previousSibling=s:l&&(l.lastChild=s),n.nextSibling=n.previousSibling=null;let c=n.childNodes;for(let d=0;d<c.length;d++){let u=c[d];J(J(u).parentNode).removeChild(u)}}static _parseTemplateNode(r,n,s){let a=e._parseTemplateNode.call(this,r,n,s);if(r.nodeType===Node.TEXT_NODE){let l=this._parseBindings(r.textContent,n);l&&(r.textContent=Xe(l)||" ",re(this,n,s,"text","textContent",l),a=!0)}return a}static _parseTemplateNodeAttribute(r,n,s,a,l){let c=this._parseBindings(l,n);if(c){let d=a,u="property";Kn.test(a)?u="attribute":a[a.length-1]=="$"&&(a=a.slice(0,-1),u="attribute");let f=Xe(c);return f&&u=="attribute"&&(a=="class"&&r.hasAttribute("class")&&(f+=" "+r.getAttribute(a)),r.setAttribute(a,f)),u=="attribute"&&d=="disable-upgrade$"&&r.setAttribute(a,""),r.localName==="input"&&d==="value"&&r.setAttribute(d,""),r.removeAttribute(d),u==="property"&&(a=zr(a)),re(this,n,s,u,a,c,f),!0}else return e._parseTemplateNodeAttribute.call(this,r,n,s,a,l)}static _parseTemplateNestedTemplate(r,n,s){let a=e._parseTemplateNestedTemplate.call(this,r,n,s);const l=r.parentNode,c=s.templateInfo,d=l.localName==="dom-if",u=l.localName==="dom-repeat";$e&&(d||u)&&(l.removeChild(r),s=s.parentInfo,s.templateInfo=c,s.noted=!0,a=!1);let f=c.hostProps;if(xn&&d)f&&(n.hostProps=Object.assign(n.hostProps||{},f),$e||(s.parentInfo.noted=!0));else{let h="{";for(let p in f){let g=[{mode:h,source:p,dependencies:[p],hostProp:!0}];re(this,n,s,"property","_host_"+p,g)}}return a}static _parseBindings(r,n){let s=[],a=0,l;for(;(l=Ye.exec(r))!==null;){l.index>a&&s.push({literal:r.slice(a,l.index)});let c=l[1][0],d=!!l[2],u=l[3].trim(),f=!1,h="",p=-1;c=="{"&&(p=u.indexOf("::"))>0&&(h=u.substring(p+2),u=u.substring(0,p),f=!0);let g=oe(u),y=[];if(g){let{args:m,methodName:_}=g;for(let v=0;v<m.length;v++){let C=m[v];C.literal||y.push(C)}let w=n.dynamicFns;(w&&w[_]||g.static)&&(y.push(_),g.dynamicFn=!0)}else y.push(u);s.push({source:u,mode:c,negate:d,customEvent:f,signature:g,dependencies:y,event:h}),a=Ye.lastIndex}if(a&&a<r.length){let c=r.substring(a);c&&s.push({literal:c})}return s.length?s:null}static _evaluateBinding(r,n,s,a,l,c){let d;return n.signature?d=fe(r,s,a,l,n.signature):s!=n.source?d=S(r,n.source):c&&de(s)?d=S(r,s):d=r.__data[s],n.negate&&(d=!d),d}}return i}),ft=[];function Ni(t){const e={};for(let i in t){const o=t[i];e[i]=typeof o=="function"?{type:o}:o}return e}const Li=lt(t=>{const e=Nr(t);function i(n){const s=Object.getPrototypeOf(n);return s.prototype instanceof r?s:null}function o(n){if(!n.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",n))){let s=null;if(n.hasOwnProperty(JSCompiler_renameProperty("properties",n))){const a=n.properties;a&&(s=Ni(a))}n.__ownProperties=s}return n.__ownProperties}class r extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const s=this._properties;this.__observedAttributes=s?Object.keys(s).map(a=>this.prototype._addPropertyToAttributeMap(a)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const s=i(this);s&&s.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const s=o(this);s&&this.createProperties(s)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const s=i(this);this.__properties=Object.assign({},s&&s._properties,o(this))}return this.__properties}static typeForProperty(s){const a=this._properties[s];return a&&a.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return r});const $i="3.5.2",Ge=window.ShadyCSS&&window.ShadyCSS.cssBuild,Mi=lt(t=>{const e=Li(ki(t));function i(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let c=l._properties;for(let d in c){let u=c[d];"value"in u&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[d]=u)}}return l.__propertyDefaults}function o(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function r(l,c,d,u){d.computed&&(d.readOnly=!0),d.computed&&(l._hasReadOnlyEffect(c)?console.warn(`Cannot redefine computed property '${c}'.`):l._createComputedProperty(c,d.computed,u)),d.readOnly&&!l._hasReadOnlyEffect(c)?l._createReadOnlyProperty(c,!d.computed):d.readOnly===!1&&l._hasReadOnlyEffect(c)&&console.warn(`Cannot make readOnly property '${c}' non-readOnly.`),d.reflectToAttribute&&!l._hasReflectEffect(c)?l._createReflectedProperty(c):d.reflectToAttribute===!1&&l._hasReflectEffect(c)&&console.warn(`Cannot make reflected property '${c}' non-reflected.`),d.notify&&!l._hasNotifyEffect(c)?l._createNotifyingProperty(c):d.notify===!1&&l._hasNotifyEffect(c)&&console.warn(`Cannot make notify property '${c}' non-notify.`),d.observer&&l._createPropertyObserver(c,d.observer,u[d.observer]),l._addPropertyToAttributeMap(c)}function n(l,c,d,u){if(!Ge){const f=c.content.querySelectorAll("style"),h=Tr(c),p=zn(d),g=c.content.firstElementChild;for(let m=0;m<p.length;m++){let _=p[m];_.textContent=l._processStyleText(_.textContent,u),c.content.insertBefore(_,g)}let y=0;for(let m=0;m<h.length;m++){let _=h[m],w=f[y];w!==_?(_=_.cloneNode(!0),w.parentNode.insertBefore(_,w)):y++,_.textContent=l._processStyleText(_.textContent,u)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(c,d),Pn&&Ge&&mn){const f=c.content.querySelectorAll("style");if(f){let h="";Array.from(f).forEach(p=>{h+=p.textContent,p.parentNode.removeChild(p)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(h)}}}function s(l){let c=null;if(l&&(!le||yn)&&(c=Pt.import(l,"template"),le&&!c))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return c}class a extends e{static get polymerElementVersion(){return $i}static _finalizeClass(){e._finalizeClass.call(this);const c=o(this);c&&this.createObservers(c,this._properties),this._prepareTemplate()}static _prepareTemplate(){let c=this.template;c&&(typeof c=="string"?(console.error("template getter must return HTMLTemplateElement"),c=null):_n||(c=c.cloneNode(!0))),this.prototype._template=c}static createProperties(c){for(let d in c)r(this.prototype,d,c[d],c)}static createObservers(c,d){const u=this.prototype;for(let f=0;f<c.length;f++)u._createMethodObserver(c[f],d)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let c=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof c=="function"&&(c=c()),this._template=c!==void 0?c:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&s(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(c){this._template=c}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const c=this.importMeta;if(c)this._importPath=we(c.url);else{const d=Pt.import(this.is);this._importPath=d&&d.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=gn,this.importPath=this.constructor.importPath;let c=i(this.constructor);if(c)for(let d in c){let u=c[d];if(this._canApplyPropertyDefault(d)){let f=typeof u.value=="function"?u.value.call(this):u.value;this._hasAccessor(d)?this._setPendingProperty(d,f,!0):this[d]=f}}}_canApplyPropertyDefault(c){return!this.hasOwnProperty(c)}static _processStyleText(c,d){return be(c,d)}static _finalizeTemplate(c){const d=this.prototype._template;if(d&&!d.__polymerFinalized){d.__polymerFinalized=!0;const u=this.importPath,f=u?_t(u):"";n(this,d,c,f),this.prototype._bindTemplate(d)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(c){const d=J(this);if(d.attachShadow)return c?(d.shadowRoot||(d.attachShadow({mode:"open",shadyUpgradeFragment:c}),d.shadowRoot.appendChild(c),this.constructor._styleSheet&&(d.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),wn&&window.ShadyDOM&&window.ShadyDOM.flushInitial(d.shadowRoot),d.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(c){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,c)}resolveUrl(c,d){return!d&&this.importPath&&(d=_t(this.importPath)),_t(c,d)}static _parseTemplateContent(c,d,u){return d.dynamicFns=d.dynamicFns||this._properties,e._parseTemplateContent.call(this,c,d,u)}static _addTemplatePropertyEffect(c,d,u){return bn&&!(d in this._properties)&&!(u.info.part.signature&&u.info.part.signature.static)&&!u.info.part.hostProp&&!c.nestedTemplate&&console.warn(`Property '${d}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,c,d,u)}}return a});const Ze=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:t=>t});class Ur{constructor(e,i){Vr(e,i);const o=i.reduce((r,n,s)=>r+jr(n)+e[s+1],e[0]);this.value=o.toString()}toString(){return this.value}}function jr(t){if(t instanceof Ur)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}function Di(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof Ur)return jr(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}const Fi=function(e,...i){Vr(e,i);const o=document.createElement("template");let r=i.reduce((n,s,a)=>n+Di(s)+e[a+1],e[0]);return Ze&&(r=Ze.createHTML(r)),o.innerHTML=r,o},Vr=(t,e)=>{if(!Array.isArray(t)||!Array.isArray(t.raw)||e.length!==t.length-1)throw new TypeError("Invalid call to the html template tag")};const xs=Mi(HTMLElement),Ii="bottom-bar-toolbar",Bi="bottom-bar-menu",Hi=tt`
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
`,Ui=Symbol("openMenu"),ji=t=>{const e=t.shadowRoot?.querySelector("#dropdown");if(!e||e.hasAttribute("hidden"))return;e.shadowRoot?.querySelector("cosmoz-dropdown")?.shadowRoot?.querySelector("#dropdownButton")?.click()},qr=t=>t.nodeType===Node.ELEMENT_NODE&&t.getAttribute("slot")!=="info"&&t.tagName!=="TEMPLATE"&&t.tagName!=="STYLE"&&t.tagName!=="DOM-REPEAT"&&t.tagName!=="DOM-IF"&&t.getAttribute("slot")!=="extra",Wr=t=>{const e=[...t.childNodes],i=[];for(const o of e)if(o.tagName==="SLOT"){const r=o.assignedElements({flatten:!0});i.push(...r)}else i.push(o);return i},Vi=t=>{const e=Wr(t).filter(qr).filter(o=>!o.hidden).sort((o,r)=>(Number(o.dataset.index)||0)-(Number(r.dataset.index)||0));if(e.length===0)return e;const i=e.reduce((o,r)=>parseInt(o.dataset.priority??"0",10)>=parseInt(r.dataset.priority??"0",10)?o:r,{dataset:{priority:"-1000"}});return[i,...e.filter(o=>o!==i)]},Ke=(t,e,i,o)=>{const r=e?Ii:Bi;t.setAttribute("slot",r),t.setAttribute("tabindex","0"),t.classList.toggle(o,!e),t.classList.toggle(i,e)},qi=(t,e,i)=>{const o=Vi(t),{maxToolbarItems:r=1}=t;if(!(o.length>0)){t.toggleAttribute("has-menu-items",!1);return}const s=o.slice(0,r),a=o.slice(s.length);s.forEach(l=>Ke(l,!0,e,i)),a.forEach(l=>Ke(l,!1,e,i)),t.toggleAttribute("has-menu-items",a.length>0)},Wi=t=>{const{active:e=!1,maxToolbarItems:i=1}=t,o=Lt(!1),r="cosmoz-bottom-bar-toolbar",n="cosmoz-bottom-bar-menu";Kr({activity:Ui,callback:()=>ji(t),check:()=>e&&!t.hasAttribute("hide-actions"),element:()=>t.shadowRoot?.querySelector("#dropdown")},[e]);const s=nt(()=>hr("height"),[]);Qr(()=>{o.current?s(t,e):s(t,e,{duration:0}),o.current=!0},[e]);const a=X(()=>qi(t,r,n),[i]),l=Lt(null),c=X(()=>{const u=l.current;if(!u)return;u.disconnect(),Wr(t).filter(qr).forEach(h=>{u.observe(h,{attributes:!0,attributeFilter:["hidden"]})})},[]);F(()=>{l.current=new MutationObserver(()=>{c(),a()}),c();const u=new MutationObserver(()=>{c(),a()});return u.observe(t,{childList:!0}),()=>{l.current?.disconnect(),l.current=null,u.disconnect()}},[a]);const d=X(()=>{c(),a()},[a]);return E` <div id="bar" part="bar">
			<div id="info" part="info"><slot name="info"></slot></div>
			<slot
				id="bottomBarToolbar"
				name="bottom-bar-toolbar"
				@slotchange=${d}
			></slot>
			<cosmoz-dropdown-menu id="dropdown" part="dropdown">
				${oo({slot:"button"})}
				<slot id="bottomBarMenu" name="bottom-bar-menu"></slot>
			</cosmoz-dropdown-menu>
			<slot name="extra" id="extraSlot"></slot>
		</div>
		<div hidden style="display:none">
			<slot id="content" @slotchange=${d}></slot>
		</div>`};customElements.define("cosmoz-bottom-bar",D(Wi,{observedAttributes:["active","max-toolbar-items"],styleSheets:[Hi]}));const Ut=`
	<slot name="extra" slot="extra"></slot>
	<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
	<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
`;E(Object.assign([Ut],{raw:[Ut]}));Fi(Object.assign([Ut],{raw:[Ut]}));const Ps=ar(class extends lr{constructor(t){if(super(t),t.type!==cr.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(e)}const i=t.element.classList;for(const o of this.st)o in e||(i.remove(o),this.st.delete(o));for(const o in e){const r=!!e[o];r===this.st.has(o)||this.nt?.has(o)||(r?(i.add(o),this.st.add(o)):(i.remove(o),this.st.delete(o)))}return dr}});class he{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,i){this._asyncModule=e,this._callback=i,this._timer=this._asyncModule.run(()=>{this._timer=null,pe.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),pe.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(e,i,o){return e instanceof he?e._cancelAsync():e=new he,e.setConfig(i,o),e}}let pe=new Set;const Es=function(t){pe.add(t)},bt=Symbol("memo"),Cs=t=>{let e=bt,i=bt,o;return function(r,n){if(e===r&&i===n)return o;const s=t(r,n);return o=s,e=r,i=n,s}},Ss=t=>{let e=bt,i=bt,o=bt,r;return function(n,s,a){if(e===n&&i===s&&o===a)return r;const l=t(n,s,a);return r=l,e=n,i=s,o=a,l}},Yi=tt`
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
`,Xi=()=>wt,Ji=D(Xi,{styleSheets:[Yi]});customElements.define("cosmoz-spinner",Ji);const Yr=["T"," "],Qe=t=>{if(!t||typeof t!="string")return;let e;return Yr.some(i=>t.match(i)?(e=t.split(i),!0):!1),e||[t]},Gi=(t,e)=>{const i=Qe(t),o=Qe(e);return{minDate:Array.isArray(i)?i.shift():null,minTime:Array.isArray(i)?i.shift():null,maxDate:Array.isArray(o)?o.shift():null,maxTime:Array.isArray(o)?o.shift():null}},tr=(t,e)=>{if(!(!t&&!e))return!t&&e?`T${e}`:t&&!e?t:`${t}T${e}`},Zi=t=>{if(t){for(const e of Yr)if(t.match(e)){const i=t.split(e);return{date:i.shift(),time:i.shift()}}return{date:t}}},Ki=t=>{const{dateLabel:e,timeLabel:i,min:o,max:r,step:n="1",value:s}=t,{minDate:a,maxDate:l,minTime:c,maxTime:d}=nt(()=>Gi(o,r),[o,r]),{date:u,time:f}=nt(()=>Zi(s)??{},[s]);return F(()=>{t.dispatchEvent(new CustomEvent("cosmoz-datetime-input-value-changed",{bubbles:!0,composed:!0}))},[s]),E`
		<style>
			:host {
				display: flex;
				flex-direction: row;
				gap: var(--cz-spacing);
			}
		</style>
		<cosmoz-input
			label="${e}"
			type="date"
			.value="${u}"
			@value-changed="${h=>Te(t,"value",tr(h.target.value,f))}"
			.min="${a}"
			.max="${l}"
		></cosmoz-input>
		<cosmoz-input
			label="${i}"
			type="time"
			.value="${f}"
			@value-changed="${h=>Te(t,"value",tr(u,h.target.value))}"
			step="${n}"
			.min="${c}"
			.max="${d}"
		></cosmoz-input>
	`};customElements.define("cosmoz-datetime-input",D(Ki,{observedAttributes:["date-label","time-label","min","max","step"],styleSheets:[sr]}));const Qi=t=>e=>{const i=e.match(t);return i&&{result:i,url:new URL(e,document.location.origin)}},ts=(t,e)=>{for(const i of t){const o=i.rule,r=typeof o=="function"?o(e):Qi(o)(e);if(r)return{...i,route:i,match:r,url:e}}},er=()=>window.location.href.replace(window.location.origin,""),es=()=>{const[t,e]=yt(er);return F(()=>{const i=()=>e(er);return window.addEventListener("popstate",i),()=>window.removeEventListener("popstate",i)},[e]),t},rs=t=>{const e=es();return nt(()=>ts(t,e),[t,e])},Ts=(t,e=null,{notify:i=!0,replace:o=!0}={})=>{(o?history.replaceState:history.pushState).call(history,e,"",t),i&&queueMicrotask(()=>window.dispatchEvent(new CustomEvent("popstate",{bubbles:!1})))},os=t=>{const e=rs(t);return{route:e,result:nt(()=>{if(e){const{handle:i,...o}=e;return i(o)}},[e])}},Ot=(t,e,i)=>t.dispatchEvent(new CustomEvent(e,{bubbles:!1,cancelable:!1,composed:!0,...i})),ns=(t,e,i)=>{F(()=>{if(!i){Ot(t,"route-not-found");return}Ot(t,"route-loading",{detail:e}),Promise.resolve(i).then(()=>Ot(t,"route-loaded",{detail:e})).catch(o=>Ot(t,"route-error",{detail:{route:e,error:o}}))},[i])},is=t=>{const e=t.routes,{route:i,result:o}=os(e);return ns(t,i,o),ur([o],()=>to(Promise.resolve(o).catch(()=>wt),wt))};customElements.define("cosmoz-router",D(is));const Xr=()=>new URL(location.hash.replace(/^#!?/iu,"").replace("%23","#"),location.origin),As=(t,e=fr)=>{const i=new URLSearchParams(Xr().hash.replace("#","")).getAll(t);switch(i.length){case 0:return;case 1:return e(i[0]);default:return i.map(e)}},Os=(t,e=fr)=>{const i=Array.from(new URLSearchParams(Xr().hash.replace("#","")).entries()).filter(([o])=>o.startsWith(t)).map(([o,r])=>e([o.replace(t,""),r])).filter(([,o])=>o!=null);return Object.fromEntries(i)};function*zs(t,e){if(t!==void 0){let i=0;for(const o of t)yield e(o,i++)}}var R=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:void 0;function ss(t,e){return typeof e>"u"?e={autoBom:!1}:typeof e!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\uFEFF",t],{type:t.type}):t}function ne(t,e,i){var o=new XMLHttpRequest;o.open("GET",t),o.responseType="blob",o.onload=function(){me(o.response,e,i)},o.onerror=function(){console.error("could not download file")},o.send()}function rr(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch{}return e.status>=200&&e.status<=299}function zt(t){try{t.dispatchEvent(new MouseEvent("click"))}catch{var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var or=R.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),me=R.saveAs||(typeof window!="object"||window!==R?function(){}:"download"in HTMLAnchorElement.prototype&&!or?function(e,i,o){var r=R.URL||R.webkitURL,n=document.createElement("a");i=i||e.name||"download",n.download=i,n.rel="noopener",typeof e=="string"?(n.href=e,n.origin!==location.origin?rr(n.href)?ne(e,i,o):zt(n,n.target="_blank"):zt(n)):(n.href=r.createObjectURL(e),setTimeout(function(){r.revokeObjectURL(n.href)},4e4),setTimeout(function(){zt(n)},0))}:"msSaveOrOpenBlob"in navigator?function(e,i,o){if(i=i||e.name||"download",typeof e=="string")if(rr(e))ne(e,i,o);else{var r=document.createElement("a");r.href=e,r.target="_blank",setTimeout(function(){zt(r)})}else navigator.msSaveOrOpenBlob(ss(e,o),i)}:function(e,i,o,r){if(r=r||open("","_blank"),r&&(r.document.title=r.document.body.innerText="downloading..."),typeof e=="string")return ne(e,i,o);var n=e.type==="application/octet-stream",s=/constructor/i.test(R.HTMLElement)||R.safari,a=/CriOS\/[\d]+/.test(navigator.userAgent);if((a||n&&s||or)&&typeof FileReader<"u"){var l=new FileReader;l.onloadend=function(){var u=l.result;u=a?u:u.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=u:location=u,r=null},l.readAsDataURL(e)}else{var c=R.URL||R.webkitURL,d=c.createObjectURL(e);r?r.location=d:location.href=d,r=null,setTimeout(function(){c.revokeObjectURL(d)},4e4)}});R.saveAs=me.saveAs=me;const Nt=function(t){t&&console.log(t)};class Jr{constructor(e,i){this._filename=e,this.buffer=null,this.lastDownloadBlobUrl=null,this._mimeType=i}generate(){}createDownloadUrl(){this.buffer||this.generate();const e=new Blob([this.buffer],{type:this._mimeType});return this.lastDownloadBlobUrl&&window.URL.revokeObjectURL(this.lastDownloadBlobUrl),this.lastDownloadBlobUrl=URL.createObjectURL(e),this.lastDownloadBlobUrl}createDownloadLink(e){const i=e instanceof HTMLAnchorElement?e:document.createElement("a");return typeof e=="string"&&(i.innerHTML=e),i.href=this.createDownloadUrl(),i.download=this._filename,i.hasChildNodes||(i.innerText=this._filename),Nt("Link created for file "+this._filename),i}}let Rt=null;class as extends Jr{constructor(e,i){super(e,"application/zip"),this.files=[],this.createFolderEntries=!!i;const o=new Date;this.timeInt=Math.round(o.getSeconds()/2)|o.getMinutes()<<5|o.getHours()<<11,this.dateInt=o.getFullYear()-1980<<9|o.getMonth()+1<<5|o.getDate()}addFileFromString(e,i){const o=new TextEncoder("utf-8").encode(i);return this.addFileFromUint8Array(e,o),this}addFileFromUint8Array(e,i){if(!(i instanceof Uint8Array))throw new Error("invalid parameter");return this.files.push({name:e.replace("\\","/"),data:i}),this}generate(){Nt("NullZip archive generation started");const e={};for(const c of this.files)c.size=c.data?c.data.byteLength:0,c.crc=c.data?this.crc(c.data):0,e[c.name]=c;const i=[];if(this.createFolderEntries){const c=/\//giu;for(const d of this.files){const u=d.name;for(let f=c.exec(u);f!==null;f=c.exec(u)){const h={name:u.substr(0,f.index+1),size:0,crc:0,data:new Uint8Array(0)};typeof e[h.name]>"u"&&(e[h.name]=h,i.push(h))}}}Array.prototype.push.apply(this.files,i),this.files.sort((c,d)=>c.name.length-d.name.length||c.name.localeCompare(d.name));const o=this.files.reduce((c,d)=>c+76+d.name.length*2+d.size,22);Nt("Estimated file size: "+o),this.buffer=new ArrayBuffer(o);const r=new ls(this.buffer),n=this.hex2u8a("504b0304140000000000");for(const c of this.files)c.offs=r.i,r.writeByteArray(n),r.uint16(this.timeInt),r.uint16(this.dateInt),r.uint32(c.crc),r.uint32(c.size),r.uint32(c.size),r.uint16(c.name.length),r.uint16(0),r.writeASCII(c.name),c.size>0&&r.writeByteArray(c.data);const s=r.i,a=this.hex2u8a("504b01023f00140000000000");for(const c of this.files)r.writeByteArray(a),r.uint16(this.timeInt),r.uint16(this.dateInt),r.uint32(c.crc),r.uint32(c.size),r.uint32(c.size),r.uint16(c.name.length),r.uint16(0),r.uint16(0),r.uint16(0),r.uint16(0),r.uint32(c.size?32:48),r.uint32(c.offs),r.writeASCII(c.name);const l=r.i-s;return r.writeByteArray(this.hex2u8a("504b050600000000")),r.uint16(this.files.length),r.uint16(this.files.length),r.uint32(l),r.uint32(s),r.uint16(0),Nt("Finished creating zip. size="+r.i+", predicted size="+o),this.buffer}crc(e){let i,o,r=-1;if(!Rt)for(Rt=[],o=0;o<256;i=++o){for(let n=0;n<8;n++)i=i&1?3988292384^i>>>1:i>>>1;Rt[o]=i}for(let n=0;n<e.byteLength;n++)r=r>>>8^Rt[(r^e[n])&255];return(r^-1)>>>0}hex2u8a(e){const i=new Uint8Array(Math.ceil(e.length/2));for(let o=0;o<i.length;o++)i[o]=parseInt(e.substr(o*2,2),16);return i}}class ls{constructor(e){this.dw=new DataView(e),this.i=0,this.le=!0,this.utf8encoder=new TextEncoder("utf-8")}uint8(e){this.dw.setUint8(this.i++,e)}uint16(e){this.dw.setUint16(this.i,e,this.le),this.i+=2}uint32(e){this.dw.setUint32(this.i,e,this.le),this.i+=4}writeByteArray(e){if(!(e instanceof Uint8Array))throw new Error("invalid parameter");new Uint8Array(this.dw.buffer).set(e,this.i),this.i+=e.byteLength}writeASCII(e){for(let i=0;i<e.length;i++)this.dw.setUint8(this.i++,e.charCodeAt(i)&255)}}const ht="application/vnd.openxmlformats-officedocument.spreadsheetml",Zt="http://schemas.openxmlformats.org",kt=`${Zt}/spreadsheetml/2006/main`,ie=`${Zt}/package/2006`,pt=`${Zt}/officeDocument/2006/relationships`,nr=[{id:164,code:"yyyy&quot;-&quot;mm&quot;-&quot;dd"},{id:165,code:"yyyy&quot;-&quot;mm&quot;-&quot;dd&quot; &quot;h&quot;:&quot;mm&quot;:&quot;ss"}];class Rs extends Jr{constructor(e,i){super(e,`${ht}.sheet`),this.sheets=[],this.frozen=!!(i&&i.frozen),this.autoFilter=!!(i&&i.filter)}addSheetFromData(e,i){const o=this.sheets.length+1;return this.sheets.push({id:o,name:this.escapeXml(i||"Sheet"+o),data:e}),this}generate(){const e=[{name:"xl/styles.xml",xml:`<styleSheet xmlns="${kt}" xmlns:mc="${Zt}/markup-compatibility/2006"><numFmts count="${nr.length}">${nr.map(r=>`<numFmt numFmtId="${r.id}" formatCode="${r.code}" />`)}</numFmts><fonts count="2"><font><sz val="10.0"/><color rgb="FF000000"/><name val="Arial"/></font><font><b/></font></fonts><fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="lightGray"/></fill></fills><borders count="1"><border><left/><right/><top/><bottom/></border></borders><cellStyleXfs count="1"><xf borderId="0" fillId="0" fontId="0" numFmtId="0" applyAlignment="1" applyFont="1"/></cellStyleXfs><cellXfs><xf borderId="0" fillId="0" fontId="0" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment/></xf><xf borderId="0" fillId="0" fontId="1" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment/></xf><xf borderId="0" fillId="0" fontId="0" numFmtId="164" xfId="0" applyAlignment="1" applyFont="1" applyNumberFormat="1"><alignment /></xf><xf borderId="0" fillId="0" fontId="0" numFmtId="165" xfId="0" applyAlignment="1" applyFont="1" applyNumberFormat="1"><alignment /></xf></cellXfs><cellStyles count="1"><cellStyle xfId="0" name="Normal" builtinId="0"/></cellStyles><dxfs count="0"/></styleSheet>`},{name:"xl/sharedStrings.xml",xml:`<sst xmlns="${kt}" count="2" uniqueCount="2"><si><t>text here</t></si></sst>`},{name:"xl/workbook.xml",xml:`<workbook xmlns="${kt}" xmlns:r="${pt}"><workbookPr/><sheets>`+this.sheets.map(r=>`<sheet state="visible" name="${r.name}" sheetId="${r.id}" r:id="rId${r.id+2}"/>`).join("")+"</sheets><definedNames/><calcPr/></workbook>"},{name:"xl/_rels/workbook.xml.rels",xml:`<Relationships xmlns="${ie}/relationships"><Relationship Id="rId1" Type="${pt}/styles" Target="styles.xml" /><Relationship Id="rId2" Type="${pt}/sharedStrings" Target="sharedStrings.xml"/>`+this.sheets.map(r=>`<Relationship Id="rId${r.id+2}" Type="${pt}/worksheet" Target="worksheets/sheet${r.id}.xml"/>`).join("")+"</Relationships>"},{name:"[Content_Types].xml",xml:`<Types xmlns="${ie}/content-types"><Default ContentType="application/xml" Extension="xml"/><Default ContentType="application/vnd.openxmlformats-package.relationships+xml" Extension="rels"/>`+this.sheets.map(r=>`<Override ContentType="${ht}.worksheet+xml" PartName="/xl/worksheets/sheet${r.id}.xml"/>`).join("")+`<Override ContentType="${ht}.sharedStrings+xml" PartName="/xl/sharedStrings.xml"/><Override ContentType="${ht}.styles+xml" PartName="/xl/styles.xml" /><Override ContentType="${ht}.sheet.main+xml" PartName="/xl/workbook.xml"/></Types>`},{name:"_rels/.rels",xml:`<Relationships xmlns="${ie}/relationships"><Relationship Id="rId1" Type="${pt}/officeDocument" Target="xl/workbook.xml"/></Relationships>`}],i=this.sheets.map(r=>{let n=0;const s=r.data.map((a,l)=>{const c=this.frozen&&l===0?' s="1"':"";a.length>n&&(n=a.length);const d=a.map((u,f)=>{const h=this.colName(f)+(l+1);return typeof u=="number"?`<c r="${h}"${c}><v>${u}</v></c>`:u instanceof Date?`<c s="${u.getHours()||u.getMinutes()||u.getSeconds()?3:2}"><v>${this.dateToExcelDate(u)}</v></c>`:`<c t="inlineStr"${c}><is><t>${this.escapeXml(u.toString())}</t></is></c>`});return`<row r="${l+1}">${d.join("")}</row>`});return{name:`xl/worksheets/sheet${r.id}.xml`,xml:`<worksheet xmlns="${kt}"><sheetViews><sheetView workbookViewId="0"`+(this.frozen?' tabSelected="1"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView>':"/>")+`</sheetViews><sheetFormatPr customHeight="1" defaultColWidth="17.5" defaultRowHeight="15.75"/><sheetData>${s.join("")}</sheetData>`+(this.autoFilter?`<autoFilter ref="A1:${this.colName(n)}${r.data.length}"/>`:"")+"</worksheet>"}}),o=new as(this._filename,!1);return[...e,...i].forEach(r=>o.addFileFromString(r.name,r.xml)),this.buffer=o.generate(),this.buffer}colName(e){return e<26?String.fromCharCode(e+65):String.fromCharCode(Math.floor(e/26+64))+String.fromCharCode(Math.floor(e%26+65))}escapeXml(e){return e.replace(/[<>&'"]/gu,i=>["&lt;","&gt;","&amp;","&apos;","&quot;"][`<>&'"`.indexOf(i)])}dateToExcelDate(e){return 25569+(e.getTime()-e.getTimezoneOffset()*6e4)/864e5}}const ir=(t,e)=>{Object.assign(t.style,{display:e?"":"none"})};class cs extends HTMLElement{static get observedAttributes(){return["opened"]}toggle=hr("height");constructor(){super();const e=new CSSStyleSheet;e.replaceSync(`
      :host { display: block; }
		`);const i=this.attachShadow({mode:"open"});i.appendChild(document.createElement("slot")),i.adoptedStyleSheets=[e]}connectedCallback(){ir(this,this.getAttribute("opened")!=null)}attributeChangedCallback(e,i,o){if(e==="opened"){const r=o!=null;return this.isConnected?this.toggle(this,r):ir(this,r)}}}customElements.define("cosmoz-collapse",cs);export{he as D,Rs as N,xs as P,Es as a,Cs as b,hs as c,fs as d,Ps as e,ps as f,S as g,Fi as h,Os as i,As as j,Xr as k,me as l,Ss as m,Ts as n,zs as o,ms as p,_s as q,bs as r,Be as s,vs as t,en as u,ws as v,oo as w,ys as x,gs as y,us as z};
