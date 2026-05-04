import{n as e}from"./chunk-BneVvdWh.js";import{C as t,Ct as n,D as r,F as i,G as a,I as o,J as s,K as c,O as l,S as u,St as d,T as f,X as p,Y as m,Z as h,_t as g,a as _,b as v,bt as y,cn as b,ct as x,dn as S,dt as C,f as w,fn as T,ft as ee,ht as te,i as ne,k as re,lt as E,mt as ie,o as ae,p as oe,pn as se,pt as ce,q as D,s as le,un as ue,vt as de,w as fe,x as pe,yt as O}from"./iframe-CIONVpUj.js";var me,he,ge=e((()=>{me={duration:250},he=e=>(t,n,r)=>{let i=`max`+e.charAt(0).toUpperCase()+e.slice(1);Object.assign(t.style,{[i]:``,display:``});let{[e]:a}=t.getBoundingClientRect(),o=[0,a],[s,c]=n?o:o.slice().reverse(),l=t.animate([{[i]:`${s}px`},{[i]:`${c}px`}],{...me,...r});l.onfinish=()=>Object.assign(t.style,{[i]:``,display:n?``:`none`})}})),_e,ve,ye,be=e((()=>{T(),ce(),_e=`important`,ve=` !`+_e,ye=C(class extends ee{constructor(e){if(super(e),e.type!==ie.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(ve);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?_e:``):n[e]=r}}return ue}})})),xe,Se=e((()=>{xe=(e=HTMLElement)=>class extends e{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent(`connected`))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent(`disconnected`))}}})),Ce=e((()=>{Se()})),we,Te,Ee=e((()=>{x(),T(),Ce(),we=n`
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
`,Te=()=>S`<div class="wrap" part="wrap"><slot></slot></div>`,customElements.define(`cosmoz-dropdown-content`,xe(E(Te,{styleSheets:[we]})))}));function De(e,t,n){return M(e,j(t,n))}function Oe(e,t){return typeof e==`function`?e(t):e}function k(e){return e.split(`-`)[0]}function ke(e){return e.split(`-`)[1]}function Ae(e){return e===`x`?`y`:`x`}function je(e){return e===`y`?`height`:`width`}function A(e){return Ke.has(k(e))?`y`:`x`}function Me(e){return Ae(A(e))}function Ne(e,t,n){n===void 0&&(n=!1);let r=ke(e),i=Me(e),a=je(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=Re(o)),[o,Re(o)]}function Pe(e){let t=Re(e);return[Fe(e),t,Fe(t)]}function Fe(e){return e.replace(/start|end/g,e=>Ge[e])}function Ie(e,t,n){switch(e){case`top`:case`bottom`:return n?t?Je:qe:t?qe:Je;case`left`:case`right`:return t?Ye:Xe;default:return[]}}function Le(e,t,n,r){let i=ke(e),a=Ie(k(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(Fe)))),a}function Re(e){return e.replace(/left|right|bottom|top/g,e=>We[e])}function ze(e){return{top:0,right:0,bottom:0,left:0,...e}}function Be(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:ze(e)}function Ve(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}var j,M,He,Ue,N,We,Ge,Ke,qe,Je,Ye,Xe,Ze=e((()=>{j=Math.min,M=Math.max,He=Math.round,Ue=Math.floor,N=e=>({x:e,y:e}),We={left:`right`,right:`left`,bottom:`top`,top:`bottom`},Ge={start:`end`,end:`start`},Ke=new Set([`top`,`bottom`]),qe=[`left`,`right`],Je=[`right`,`left`],Ye=[`top`,`bottom`],Xe=[`bottom`,`top`]}));function Qe(e,t,n){let{reference:r,floating:i}=e,a=A(t),o=Me(t),s=je(o),c=k(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}switch(ke(t)){case`start`:p[o]-=f*(n&&l?-1:1);break;case`end`:p[o]+=f*(n&&l?-1:1);break}return p}async function $e(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=Oe(t,e),p=Be(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=Ve(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=Ve(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var et,tt,nt,rt,it=e((()=>{Ze(),et=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=a.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=Qe(l,r,c),f=r,p={},m=0;for(let n=0;n<s.length;n++){let{name:a,fn:h}=s[n],{x:g,y:_,data:v,reset:y}=await h({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:p,rects:l,platform:{...o,detectOverflow:o.detectOverflow??$e},elements:{reference:e,floating:t}});u=g??u,d=_??d,p={...p,[a]:{...p[a],...v}},y&&m<=50&&(m++,typeof y==`object`&&(y.placement&&(f=y.placement),y.rects&&(l=y.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):y.rects),{x:u,y:d}=Qe(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:p}},tt=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=Oe(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=k(r),_=A(o),v=k(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[Re(o)]:Pe(o)),x=p!==`none`;!d&&x&&b.push(...Le(o,m,p,y));let S=[o,...b],C=await s.detectOverflow(t,h),w=[],T=i.flip?.overflows||[];if(l&&w.push(C[g]),u){let e=Ne(r,a,y);w.push(C[e[0]],C[e[1]])}if(T=[...T,{placement:r,overflows:w}],!w.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(!(u===`alignment`&&_!==A(t))||T.every(e=>A(e.placement)===_?e.overflows[0]>0:!0)))return{data:{index:e,overflows:T},reset:{placement:t}};let n=T.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=T.filter(e=>{if(x){let t=A(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o;break}if(r!==n)return{reset:{placement:n}}}return{}}}},nt=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=Oe(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=A(k(i)),p=Ae(f),m=u[p],h=u[f];if(o){let e=p===`y`?`top`:`left`,t=p===`y`?`bottom`:`right`,n=m+d[e],r=m-d[t];m=De(n,m,r)}if(s){let e=f===`y`?`top`:`left`,t=f===`y`?`bottom`:`right`,n=h+d[e],r=h-d[t];h=De(n,h,r)}let g=c.fn({...t,[p]:m,[f]:h});return{...g,data:{x:g.x-n,y:g.y-r,enabled:{[p]:o,[f]:s}}}}}},rt=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){var n,r;let{placement:i,rects:a,platform:o,elements:s}=t,{apply:c=()=>{},...l}=Oe(e,t),u=await o.detectOverflow(t,l),d=k(i),f=ke(i),p=A(i)===`y`,{width:m,height:h}=a.floating,g,_;d===`top`||d===`bottom`?(g=d,_=f===(await(o.isRTL==null?void 0:o.isRTL(s.floating))?`start`:`end`)?`left`:`right`):(_=d,g=f===`end`?`top`:`bottom`);let v=h-u.top-u.bottom,y=m-u.left-u.right,b=j(h-u[g],v),x=j(m-u[_],y),S=!t.middlewareData.shift,C=b,w=x;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(w=y),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(C=v),S&&!f){let e=M(u.left,0),t=M(u.right,0),n=M(u.top,0),r=M(u.bottom,0);p?w=m-2*(e!==0||t!==0?e+t:M(u.left,u.right)):C=h-2*(n!==0||r!==0?n+r:M(u.top,u.bottom))}await c({...t,availableWidth:w,availableHeight:C});let T=await o.getDimensions(s.floating);return m!==T.width||h!==T.height?{reset:{rects:!0}}:{}}}}}));function at(){return typeof window<`u`}function ot(e){return st(e)?(e.nodeName||``).toLowerCase():`#document`}function P(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function F(e){return((st(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function st(e){return at()?e instanceof Node||e instanceof P(e).Node:!1}function I(e){return at()?e instanceof Element||e instanceof P(e).Element:!1}function L(e){return at()?e instanceof HTMLElement||e instanceof P(e).HTMLElement:!1}function ct(e){return!at()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof P(e).ShadowRoot}function lt(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=z(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!yt.has(i)}function ut(e){return bt.has(ot(e))}function dt(e){return xt.some(t=>{try{return e.matches(t)}catch{return!1}})}function ft(e){let t=mt(),n=I(e)?z(e):e;return St.some(e=>n[e]?n[e]!==`none`:!1)||(n.containerType?n.containerType!==`normal`:!1)||!t&&(n.backdropFilter?n.backdropFilter!==`none`:!1)||!t&&(n.filter?n.filter!==`none`:!1)||Ct.some(e=>(n.willChange||``).includes(e))||wt.some(e=>(n.contain||``).includes(e))}function pt(e){let t=B(e);for(;L(t)&&!R(t);){if(ft(t))return t;if(dt(t))return null;t=B(t)}return null}function mt(){return typeof CSS>`u`||!CSS.supports?!1:CSS.supports(`-webkit-backdrop-filter`,`none`)}function R(e){return Tt.has(ot(e))}function z(e){return P(e).getComputedStyle(e)}function ht(e){return I(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function B(e){if(ot(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||ct(e)&&e.host||F(e);return ct(t)?t.host:t}function gt(e){let t=B(e);return R(t)?e.ownerDocument?e.ownerDocument.body:e.body:L(t)&&lt(t)?t:gt(t)}function _t(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=gt(e),i=r===e.ownerDocument?.body,a=P(r);if(i){let e=vt(a);return t.concat(a,a.visualViewport||[],lt(r)?r:[],e&&n?_t(e):[])}return t.concat(r,_t(r,[],n))}function vt(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}var yt,bt,xt,St,Ct,wt,Tt,Et=e((()=>{yt=new Set([`inline`,`contents`]),bt=new Set([`table`,`td`,`th`]),xt=[`:popover-open`,`:modal`],St=[`transform`,`translate`,`scale`,`rotate`,`perspective`],Ct=[`transform`,`translate`,`scale`,`rotate`,`perspective`,`filter`],wt=[`paint`,`layout`,`strict`,`content`],Tt=new Set([`html`,`body`,`#document`])}));function Dt(e){let t=z(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=L(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=He(n)!==a||He(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function Ot(e){return I(e)?e:e.contextElement}function kt(e){let t=Ot(e);if(!L(t))return N(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Dt(t),o=(a?He(n.width):n.width)/r,s=(a?He(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}function At(e){let t=P(e);return!mt()||!t.visualViewport?Qt:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function jt(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==P(e)?!1:t}function V(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=Ot(e),o=N(1);t&&(r?I(r)&&(o=kt(r)):o=kt(e));let s=jt(a,n,r)?At(a):N(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a){let e=P(a),t=r&&I(r)?P(r):r,n=e,i=vt(n);for(;i&&r&&t!==n;){let e=kt(i),t=i.getBoundingClientRect(),r=z(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=P(i),i=vt(n)}}return Ve({width:u,height:d,x:c,y:l})}function Mt(e,t){let n=ht(e).scrollLeft;return t?t.left+n:V(F(e)).left+n}function Nt(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-Mt(e,n),y:n.top+t.scrollTop}}function Pt(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=F(r),s=t?dt(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=N(1),u=N(0),d=L(r);if((d||!d&&!a)&&((ot(r)!==`body`||lt(o))&&(c=ht(r)),L(r))){let e=V(r);l=kt(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?Nt(o,c):N(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function Ft(e){return Array.from(e.getClientRects())}function It(e){let t=F(e),n=ht(e),r=e.ownerDocument.body,i=M(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=M(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),o=-n.scrollLeft+Mt(e),s=-n.scrollTop;return z(r).direction===`rtl`&&(o+=M(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:o,y:s}}function Lt(e,t){let n=P(e),r=F(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;let e=mt();(!e||e&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}let l=Mt(r);if(l<=0){let e=r.ownerDocument,t=e.body,n=getComputedStyle(t),i=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,o=Math.abs(r.clientWidth-t.clientWidth-i);o<=$t&&(a-=o)}else l<=$t&&(a+=l);return{width:a,height:o,x:s,y:c}}function Rt(e,t){let n=V(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=L(e)?kt(e):N(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function zt(e,t,n){let r;if(t===`viewport`)r=Lt(e,n);else if(t===`document`)r=It(F(e));else if(I(t))r=Rt(t,n);else{let n=At(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return Ve(r)}function Bt(e,t){let n=B(e);return n===t||!I(n)||R(n)?!1:z(n).position===`fixed`||Bt(n,t)}function Vt(e,t){let n=t.get(e);if(n)return n;let r=_t(e,[],!1).filter(e=>I(e)&&ot(e)!==`body`),i=null,a=z(e).position===`fixed`,o=a?B(e):e;for(;I(o)&&!R(o);){let t=z(o),n=ft(o);!n&&t.position===`fixed`&&(i=null),(a?!n&&!i:!n&&t.position===`static`&&i&&en.has(i.position)||lt(o)&&!n&&Bt(e,o))?r=r.filter(e=>e!==o):i=t,o=B(o)}return t.set(e,r),r}function Ht(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?dt(t)?[]:Vt(t,this._c):[].concat(n),r],o=a[0],s=a.reduce((e,n)=>{let r=zt(t,n,i);return e.top=M(r.top,e.top),e.right=j(r.right,e.right),e.bottom=j(r.bottom,e.bottom),e.left=M(r.left,e.left),e},zt(t,o,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}}function Ut(e){let{width:t,height:n}=Dt(e);return{width:t,height:n}}function Wt(e,t,n){let r=L(t),i=F(t),a=n===`fixed`,o=V(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=N(0);function l(){c.x=Mt(i)}if(r||!r&&!a)if((ot(t)!==`body`||lt(i))&&(s=ht(t)),r){let e=V(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else i&&l();a&&!r&&i&&l();let u=i&&!r&&!a?Nt(i,s):N(0);return{x:o.left+s.scrollLeft-c.x-u.x,y:o.top+s.scrollTop-c.y-u.y,width:o.width,height:o.height}}function Gt(e){return z(e).position===`static`}function Kt(e,t){if(!L(e)||z(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return F(e)===n&&(n=n.ownerDocument.body),n}function qt(e,t){let n=P(e);if(dt(e))return n;if(!L(e)){let t=B(e);for(;t&&!R(t);){if(I(t)&&!Gt(t))return t;t=B(t)}return n}let r=Kt(e,t);for(;r&&ut(r)&&Gt(r);)r=Kt(r,t);return r&&R(r)&&Gt(r)&&!ft(r)?n:r||pt(e)||n}function Jt(e){return z(e).direction===`rtl`}function Yt(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Xt(e,t){let n=null,r,i=F(e);function a(){var e;clearTimeout(r),(e=n)==null||e.disconnect(),n=null}function o(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),a();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(s||t(),!f||!p)return;let m=Ue(d),h=Ue(i.clientWidth-(u+f)),g=Ue(i.clientHeight-(d+p)),_=Ue(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:M(0,j(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(n!==c){if(!y)return o();n?o(!1,n):r=setTimeout(()=>{o(!1,1e-7)},1e3)}n===1&&!Yt(l,e.getBoundingClientRect())&&o(),y=!1}try{n=new IntersectionObserver(b,{...v,root:i.ownerDocument})}catch{n=new IntersectionObserver(b,v)}n.observe(e)}return o(!0),a}function Zt(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=Ot(e),u=i||a?[...l?_t(l):[],..._t(t)]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n,{passive:!0}),a&&e.addEventListener(`resize`,n)});let d=l&&s?Xt(l,n):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),p.observe(t));let m,h=c?V(e):null;c&&g();function g(){let t=V(e);h&&!Yt(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var Qt,$t,en,tn,nn,rn,an,on,sn,cn=e((()=>{it(),Ze(),Et(),Qt=N(0),$t=25,en=new Set([`absolute`,`fixed`]),tn=async function(e){let t=this.getOffsetParent||qt,n=this.getDimensions,r=await n(e.floating);return{reference:Wt(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},nn={convertOffsetParentRelativeRectToViewportRelativeRect:Pt,getDocumentElement:F,getClippingRect:Ht,getOffsetParent:qt,getElementRects:tn,getClientRects:Ft,getDimensions:Ut,getScale:kt,isElement:I,isRTL:Jt},rn=nt,an=tt,on=rt,sn=(e,t,n)=>{let r=new Map,i={platform:nn,...n},a={...i.platform,_c:r};return et(e,t,{...i,platform:a})}})),ln,un,dn=e((()=>{x(),cn(),ln=[an({fallbackAxisSideDirection:`start`,crossAxis:!1}),rn()],un=({placement:e=`bottom-start`,strategy:t,middleware:n=ln}={})=>{let[r,i]=g(),[a,o]=g(),[s,c]=g();return d(()=>{if(!r||!(a instanceof HTMLElement)){c(void 0);return}return Zt(r,a,()=>sn(r,a,{placement:e,strategy:t,middleware:n}).then(c))},[r,a,e,t,n]),{setReference:i,setFloating:o,styles:y(()=>s?{left:`${s.x}px`,top:`${s.y}px`}:{},[s?.x,s?.y])}}})),fn,pn,mn,hn,gn=e((()=>{x(),ae(),fn=e=>e.matches(`:focus-within`),pn=({disabled:e,onFocus:t})=>{let[n,r]=g(),{focused:i,closed:a}=n||{},o=i&&!e,s=le({closed:a,onFocus:t}),c=O(e=>r(t=>({...t,closed:e})),[]),l=O(e=>{let t=e.currentTarget;return fn(t)?r(e=>({focused:!0,closed:!e?.closed})):t.focus()},[]);return d(()=>{if(!o)return;let e=e=>{if(e.defaultPrevented)return;let{closed:t}=s;e.key===`Escape`&&!t?(e.preventDefault(),c(!0)):[`ArrowUp`,`Up`].includes(e.key)&&t&&(e.preventDefault(),c(!1))};return document.addEventListener(`keydown`,e,!0),()=>document.removeEventListener(`keydown`,e,!0)},[o]),{focused:o,active:o&&!a,setClosed:c,onToggle:l,onFocus:O(e=>{let t=fn(e.currentTarget);r({focused:t}),s.onFocus?.(t)},[s])}},mn=[`focusin`,`focusout`],hn=e=>{let t=pn(e),{onFocus:n}=t;return d(()=>(e.setAttribute(`tabindex`,`0`),mn.forEach(t=>e.addEventListener(t,n)),()=>{mn.forEach(t=>e.removeEventListener(t,n))}),[]),t}})),_n,vn,yn,bn=e((()=>{x(),T(),t(),p(),be(),a(),Ee(),dn(),gn(),_n=e=>e.preventDefault(),vn=n`
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
`,yn=e=>{let{placement:t,strategy:n,middleware:r,render:i}=e,{active:a,onToggle:o}=hn(e),{styles:s,setReference:l,setFloating:d}=un({placement:t,strategy:n,middleware:r});return S` <div class="anchor" part="anchor" ${h(l)}>
			<button
				@mousedown=${_n}
				@click=${o}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		${c(a,()=>S`<cosmoz-dropdown-content
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					style="${ye(s)}"
					@connected=${e=>e.target.showPopover?.()}
					${h(d)}
					><slot></slot>${u([i],()=>i?.()||b)}</cosmoz-dropdown-content
				> `)}`},customElements.define(`cosmoz-dropdown`,E(yn,{styleSheets:[vn]}))})),xn,Sn,Cn,wn=e((()=>{x(),T(),xn=n`
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
`,Sn=()=>S` <slot></slot> `,customElements.define(`cosmoz-dropdown-list`,E(Sn,{styleSheets:[xn]})),Cn=({placement:e})=>S` <cosmoz-dropdown
		.placement=${e}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`,customElements.define(`cosmoz-dropdown-menu`,E(Cn))})),Tn=e((()=>{bn(),wn(),gn(),m()})),H=e((()=>{window.JSCompiler_renameProperty=function(e,t){return e}}));function En(e,t){if(e&&An.test(e)||e===`//`)return e;if(jn===void 0){jn=!1;try{let e=new URL(`b`,`http://a`);e.pathname=`c%20d`,jn=e.href===`http://a/c%20d`}catch{}}if(t||=document.baseURI||window.location.href,jn)try{return new URL(e,t).href}catch{return e}return U||(U=document.implementation.createHTMLDocument(`temp`),U.base=U.createElement(`base`),U.head.appendChild(U.base),U.anchor=U.createElement(`a`),U.body.appendChild(U.anchor)),U.base.href=t,U.anchor.href=e,U.anchor.href||e}function Dn(e,t){return e.replace(kn,function(e,n,r,i){return n+`'`+En(r.replace(/["']/g,``),t)+`'`+i})}function On(e){return e.substring(0,e.lastIndexOf(`/`)+1)}var kn,An,jn,U,Mn=e((()=>{H(),kn=/(url\()([^)]*)(\))/g,An=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/})),Nn,Pn,Fn,In,Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,qn=e((()=>{H(),Mn(),Nn=!window.ShadyDOM||!window.ShadyDOM.inUse,!window.ShadyCSS||window.ShadyCSS.nativeCss,window.customElements.polyfillWrapFlushCallback,Pn=Nn&&`adoptedStyleSheets`in Document.prototype&&`replaceSync`in CSSStyleSheet.prototype&&(()=>{try{let e=new CSSStyleSheet;e.replaceSync(``);let t=document.createElement(`div`);return t.attachShadow({mode:`open`}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch{return!1}})(),Fn=window.Polymer&&window.Polymer.rootPath||On(document.baseURI||window.location.href),In=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,window.Polymer&&window.Polymer.setPassiveTouchGestures,Ln=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,Rn=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,zn=window.Polymer&&window.Polymer.legacyOptimizations||!1,Bn=window.Polymer&&window.Polymer.legacyWarnings||!1,Vn=window.Polymer&&window.Polymer.syncInitialRender||!1,Hn=window.Polymer&&window.Polymer.legacyUndefined||!1,Un=window.Polymer&&window.Polymer.orderedComputed||!1,Wn=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Gn=window.Polymer&&window.Polymer.fastDomIf||!1,window.Polymer&&window.Polymer.suppressTemplateNotifications,window.Polymer&&window.Polymer.legacyNoObservedAttributes,Kn=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1}));function Jn(){}var Yn,W,G=e((()=>{H(),Yn=0,Jn.prototype.__mixinApplications,Jn.prototype.__mixinSet,W=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let n=Yn++;function r(r){let i=r.__mixinSet;if(i&&i[n])return r;let a=t,o=a.get(r);if(!o){o=e(r),a.set(r,o);let t=Object.create(o.__mixinSet||i||null);t[n]=!0,o.__mixinSet=t}return o}return r}}));function Xn(e,t){$n[e]=er[e.toLowerCase()]=t}function Zn(e){return $n[e]||er[e.toLowerCase()]}function Qn(e){e.querySelector(`style`)&&console.warn(`dom-module %s has style outside template`,e.id)}var $n,er,tr,nr=e((()=>{H(),Mn(),qn(),$n={},er={},tr=class extends HTMLElement{static get observedAttributes(){return[`id`]}static import(e,t){if(e){let n=Zn(e);return n&&t?n.querySelector(t):n}return null}attributeChangedCallback(e,t,n,r){t!==n&&this.register()}get assetpath(){if(!this.__assetpath){let e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument;this.__assetpath=On(En(this.getAttribute(`assetpath`)||``,e.baseURI))}return this.__assetpath}register(e){if(e||=this.id,e){if(Ln&&Zn(e)!==void 0)throw Xn(e,null),Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,Xn(e,this),Qn(this)}}},tr.prototype.modules=$n,customElements.define(`dom-module`,tr)}));function rr(e){return tr.import(e)}function ir(e){let t=Dn((e.body?e.body:e).textContent,e.baseURI),n=document.createElement(`style`);return n.textContent=t,n}function ar(e){let t=e.trim().split(/\s+/),n=[];for(let e=0;e<t.length;e++)n.push(...or(t[e]));return n}function or(e){let t=rr(e);if(!t)return console.warn(`Could not find style data in module named`,e),[];if(t._styles===void 0){let e=[];e.push(...lr(t));let n=t.querySelector(`template`);n&&e.push(...sr(n,t.assetpath)),t._styles=e}return t._styles}function sr(e,t){if(!e._styles){let n=[],r=e.content.querySelectorAll(`style`);for(let e=0;e<r.length;e++){let i=r[e],a=i.getAttribute(dr);a&&n.push(...ar(a).filter(function(e,t,n){return n.indexOf(e)===t})),t&&(i.textContent=Dn(i.textContent,t)),n.push(i)}e._styles=n}return e._styles}function cr(e){let t=rr(e);return t?lr(t):[]}function lr(e){let t=[],n=e.querySelectorAll(ur);for(let e=0;e<n.length;e++){let r=n[e];if(r.import){let e=r.import,n=r.hasAttribute(fr);if(n&&!e._unscopedStyle){let t=ir(e);t.setAttribute(fr,``),e._unscopedStyle=t}else e._style||=ir(e);t.push(n?e._unscopedStyle:e._style)}}return t}var ur,dr,fr,pr=e((()=>{nr(),Mn(),ur=`link[rel=import][type~=css]`,dr=`include`,fr=`shady-unscoped`})),K,mr=e((()=>{K=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e}));function hr(e){return e.indexOf(`.`)>=0}function q(e){let t=e.indexOf(`.`);return t===-1?e:e.slice(0,t)}function gr(e,t){return e.indexOf(t+`.`)===0}function _r(e,t){return t.indexOf(e+`.`)===0}function vr(e,t,n){return t+n.slice(e.length)}function yr(e){if(Array.isArray(e)){let t=[];for(let n=0;n<e.length;n++){let r=e[n].toString().split(`.`);for(let e=0;e<r.length;e++)t.push(r[e])}return t.join(`.`)}else return e}function br(e){return Array.isArray(e)?yr(e).split(`.`):e.toString().split(`.`)}function J(e,t,n){let r=e,i=br(t);for(let e=0;e<i.length;e++){if(!r)return;let t=i[e];r=r[t]}return n&&(n.path=i.join(`.`)),r}function xr(e,t,n){let r=e,i=br(t),a=i[i.length-1];if(i.length>1){for(let e=0;e<i.length-1;e++){let t=i[e];if(r=r[t],!r)return}r[a]=n}else r[t]=n;return i.join(`.`)}var Sr=e((()=>{H()}));function Cr(e){return Tr[e]||(Tr[e]=e.indexOf(`-`)<0?e:e.replace(Er,e=>e[1].toUpperCase()))}function wr(e){return Tr[e]||(Tr[e]=e.replace(Dr,`-$1`).toLowerCase())}var Tr,Er,Dr,Or=e((()=>{H(),Tr={},Er=/-[a-z]/g,Dr=/([A-Z])/g}));function kr(){Nr=!1;let e=Y.length;for(let t=0;t<e;t++){let e=Y[t];if(e)try{e()}catch(e){setTimeout(()=>{throw e})}}Y.splice(0,e),jr+=e}var Ar,jr,Y,Mr,Nr,Pr,Fr,Ir,Lr=e((()=>{H(),Ar=0,jr=0,Y=[],Mr=0,Nr=!1,Pr=document.createTextNode(``),new window.MutationObserver(kr).observe(Pr,{characterData:!0}),Fr={after(e){return{run(t){return window.setTimeout(t,e)},cancel(e){window.clearTimeout(e)}}},run(e,t){return window.setTimeout(e,t)},cancel(e){window.clearTimeout(e)}},Ir={run(e){return Nr||(Nr=!0,Pr.textContent=Mr++),Y.push(e),Ar++},cancel(e){let t=e-jr;if(t>=0){if(!Y[t])throw Error(`invalid async handle: `+e);Y[t]=null}}}})),Rr,zr,Br=e((()=>{H(),G(),Lr(),mr(),Rr=Ir,zr=W(e=>{class t extends e{static createProperties(e){let t=this.prototype;for(let n in e)n in t||t._createPropertyAccessor(n)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty(`__dataHasAccessor`,this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){this.hasOwnProperty(JSCompiler_renameProperty(`__dataAttributes`,this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let t=this.__dataAttributes[e];return t||(t=this.constructor.attributeNameForProperty(e),this.__dataAttributes[t]=e),t}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this.__data[e]},set:t?function(){}:function(t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,n){let r=this.__data[e],i=this._shouldPropertyChange(e,t,r);return i&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=r),this.__data[e]=t,this.__dataPending[e]=t),i}_isPropertyPending(e){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(e))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Rr.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&=(this._initializeInstanceProperties(this.__dataInstanceProps),null),this.ready())}_flushProperties(){this.__dataCounter++;let e=this.__data,t=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(e,t,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,n)),this.__dataCounter--}_shouldPropertiesChange(e,t,n){return!!t}_propertiesChanged(e,t,n){}_shouldPropertyChange(e,t,n){return n!==t&&(n===n||t===t)}attributeChangedCallback(e,t,n,r){t!==n&&this._attributeToProperty(e,n),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,n,r)}_attributeToProperty(e,t,n){if(!this.__serializing){let r=this.__dataAttributes,i=r&&r[e]||e;this[i]=this._deserializeValue(t,n||this.constructor.typeForProperty(i))}}_propertyToAttribute(e,t,n){this.__serializing=!0,n=arguments.length<3?this[e]:n,this._valueToNodeAttribute(this,n,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,n){let r=this._serializeValue(t);(n===`class`||n===`name`||n===`slot`)&&(e=K(e)),r===void 0?e.removeAttribute(n):e.setAttribute(n,r===``&&window.trustedTypes?window.trustedTypes.emptyScript:r)}_serializeValue(e){switch(typeof e){case`boolean`:return e?``:void 0;default:return e?.toString()}}_deserializeValue(e,t){switch(t){case Boolean:return e!==null;case Number:return Number(e);default:return e}}}return t})}));function Vr(e,t){if(!Hr[t]){let n=e[t];n!==void 0&&(e.__data?e._setPendingProperty(t,n):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty(`__dataProto`,e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=n))}}var Hr,Ur,Wr,Gr,Kr=e((()=>{for(H(),G(),Or(),Br(),Hr={},Ur=HTMLElement.prototype;Ur;){let e=Object.getOwnPropertyNames(Ur);for(let t=0;t<e.length;t++)Hr[e[t]]=!0;Ur=Object.getPrototypeOf(Ur)}Wr=window.trustedTypes?e=>trustedTypes.isHTML(e)||trustedTypes.isScript(e)||trustedTypes.isScriptURL(e):()=>!1,Gr=W(e=>{let t=zr(e);class n extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(Cr(e[t]))}static attributeNameForProperty(e){return wr(e)}_initializeProperties(){this.__dataProto&&=(this._initializeProtoProperties(this.__dataProto),null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){let n=this;n.hasAttribute(e)||this._valueToNodeAttribute(n,t,e)}_serializeValue(e){switch(typeof e){case`object`:if(e instanceof Date)return e.toString();if(e){if(Wr(e))return e;try{return JSON.stringify(e)}catch{return``}}default:return super._serializeValue(e)}}_deserializeValue(e,t){let n;switch(t){case Object:try{n=JSON.parse(e)}catch{n=e}break;case Array:try{n=JSON.parse(e)}catch{n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:n=isNaN(e)?String(e):Number(e),n=new Date(n);break;default:n=super._deserializeValue(e,t);break}return n}_definePropertyAccessor(e,t){Vr(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return!!(this.__dataPending&&e in this.__dataPending)}}return n})}));function qr(){if(!ni){ni=!0;let e=document.createElement(`textarea`);e.placeholder=`a`,ri=e.placeholder===e.textContent}return ri}function Jr(e){qr()&&e.localName===`textarea`&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}function Yr(e){let t=e.getAttribute(`is`);if(t&&ti[t]){let n=e;for(n.removeAttribute(`is`),e=n.ownerDocument.createElement(t),n.parentNode.replaceChild(e,n),e.appendChild(n);n.attributes.length;){let{name:t}=n.attributes[0];ii(e,n,t),n.removeAttribute(t)}}return e}function Xr(e,t){let n=t.parentInfo&&Xr(e,t.parentInfo);if(n){for(let e=n.firstChild,r=0;e;e=e.nextSibling)if(t.parentIndex===r++)return e}else return e}function Zr(e,t,n,r){r.id&&(t[r.id]=n)}function Qr(e,t,n){if(n.events&&n.events.length)for(let r=0,i=n.events,a;r<i.length&&(a=i[r]);r++)e._addMethodEventListenerToNode(t,a.name,a.value,e)}function $r(e,t,n,r){n.templateInfo&&(t._templateInfo=n.templateInfo,t._parentTemplateInfo=r)}function ei(e,t,n){return e=e._methodHost||e,function(t){e[n]?e[n](t,t.detail):console.warn("listener method `"+n+"` not defined")}}var ti,ni,ri,ii,ai,oi=e((()=>{H(),G(),ti={"dom-if":!0,"dom-repeat":!0},ni=!1,ri=!1,ii=(()=>{let e=window.trustedTypes&&window.trustedTypes.createPolicy(`polymer-template-event-attribute-policy`,{createScript:e=>e});return(t,n,r)=>{let i=n.getAttribute(r);if(e&&r.startsWith(`on-`)){t.setAttribute(r,e.createScript(i,r));return}t.setAttribute(r,i)}})(),ai=W(e=>{class t extends e{static _parseTemplate(e,t){if(!e._templateInfo){let n=e._templateInfo={};n.nodeInfoList=[],n.nestedTemplate=!!t,n.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute&&e.hasAttribute(`strip-whitespace`),this._parseTemplateContent(e,n,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,n){return this._parseTemplateNode(e.content,t,n)}static _parseTemplateNode(e,t,n){let r=!1,i=e;return i.localName==`template`&&!i.hasAttribute(`preserve-content`)?r=this._parseTemplateNestedTemplate(i,t,n)||r:i.localName===`slot`&&(t.hasInsertionPoint=!0),Jr(i),i.firstChild&&this._parseTemplateChildNodes(i,t,n),i.hasAttributes&&i.hasAttributes()&&(r=this._parseTemplateNodeAttributes(i,t,n)||r),r||n.noted}static _parseTemplateChildNodes(e,t,n){if(!(e.localName===`script`||e.localName===`style`))for(let r=e.firstChild,i=0,a;r;r=a){if(r.localName==`template`&&(r=Yr(r)),a=r.nextSibling,r.nodeType===Node.TEXT_NODE){let n=a;for(;n&&n.nodeType===Node.TEXT_NODE;)r.textContent+=n.textContent,a=n.nextSibling,e.removeChild(n),n=a;if(t.stripWhiteSpace&&!r.textContent.trim()){e.removeChild(r);continue}}let o={parentIndex:i,parentInfo:n};this._parseTemplateNode(r,t,o)&&(o.infoIndex=t.nodeInfoList.push(o)-1),r.parentNode&&i++}}static _parseTemplateNestedTemplate(e,t,n){let r=e,i=this._parseTemplate(r,t);return(i.content=r.content.ownerDocument.createDocumentFragment()).appendChild(r.content),n.templateInfo=i,!0}static _parseTemplateNodeAttributes(e,t,n){let r=!1,i=Array.from(e.attributes);for(let a=i.length-1,o;o=i[a];a--)r=this._parseTemplateNodeAttribute(e,t,n,o.name,o.value)||r;return r}static _parseTemplateNodeAttribute(e,t,n,r,i){return r.slice(0,3)===`on-`?(e.removeAttribute(r),n.events=n.events||[],n.events.push({name:r.slice(3),value:i}),!0):r===`id`?(n.id=i,!0):!1}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e,t){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e),t||=this.constructor._parseTemplate(e);let n=t.nodeInfoList,r=t.content||e.content,i=document.importNode(r,!0);i.__noInsertionPoint=!t.hasInsertionPoint;let a=i.nodeList=Array(n.length);i.$={};for(let e=0,r=n.length,o;e<r&&(o=n[e]);e++){let n=a[e]=Xr(i,o);Zr(this,i.$,n,o),$r(this,n,o,t),Qr(this,n,o)}return i=i,i}_addMethodEventListenerToNode(e,t,n,r){r||=e;let i=ei(r,t,n);return this._addEventListenerToNode(e,t,i),i}_addEventListenerToNode(e,t,n){e.addEventListener(t,n)}_removeEventListenerFromNode(e,t,n){e.removeEventListener(t,n)}}return t})}));function si(e,t,n){let r=e[t];if(!r)r=e[t]={};else if(!e.hasOwnProperty(t)&&(r=e[t]=Object.create(e[t]),n))for(let e in r){let t=r[e],n=r[e]=Array(t.length);for(let e=0;e<t.length;e++)n[e]=t[e]}return r}function ci(e,t,n,r,i,a){if(t){let o=!1,s=X++;for(let c in n){let l=t[i?q(c):c];if(l)for(let t=0,u=l.length,d;t<u&&(d=l[t]);t++)(!d.info||d.info.lastRun!==s)&&(!i||ui(c,d.trigger))&&(d.info&&(d.info.lastRun=s),d.fn(e,c,n,r,d.info,i,a),o=!0)}return o}return!1}function li(e,t,n,r,i,a,o,s){let c=!1,l=t[o?q(r):r];if(l)for(let t=0,u=l.length,d;t<u&&(d=l[t]);t++)(!d.info||d.info.lastRun!==n)&&(!o||ui(r,d.trigger))&&(d.info&&(d.info.lastRun=n),d.fn(e,r,i,a,d.info,o,s),c=!0);return c}function ui(e,t){if(t){let n=t.name;return n==e||!!(t.structured&&gr(n,e))||!!(t.wildcard&&_r(n,e))}else return!0}function di(e,t,n,r,i){let a=typeof i.method==`string`?e[i.method]:i.method,o=i.property;a?a.call(e,e.__data[o],r[o]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function fi(e,t,n,r,i){let a=e[Q.NOTIFY],o,s=X++;for(let c in t)t[c]&&(a&&li(e,a,s,c,n,r,i)||i&&pi(e,c,n))&&(o=!0);let c;o&&(c=e.__dataHost)&&c._invalidateProperties&&c._invalidateProperties()}function pi(e,t,n){let r=q(t);return r===t?!1:(mi(e,wr(r)+`-changed`,n[t],t),!0)}function mi(e,t,n,r){let i={value:n,queueProperty:!0};r&&(i.path=r),K(e).dispatchEvent(new CustomEvent(t,{detail:i}))}function hi(e,t,n,r,i,a){let o=(a?q(t):t)==t?null:t,s=o?J(e,o):e.__data[t];o&&s===void 0&&(s=n[t]),mi(e,i.eventName,s,o)}function gi(e,t,n,r,i){let a,o=e.detail,s=o&&o.path;s?(r=vr(n,r,s),a=o&&o.value):a=e.currentTarget[n],a=i?!a:a,(!t[Q.READ_ONLY]||!t[Q.READ_ONLY][r])&&t._setPendingPropertyOrPath(r,a,!0,!!s)&&(!o||!o.queueProperty)&&t._invalidateProperties()}function _i(e,t,n,r,i){let a=e.__data[t];In&&(a=In(a,i.attrName,`attribute`,e)),e._propertyToAttribute(t,i.attrName,a)}function vi(e,t,n,r){let i=e[Q.COMPUTE];if(i)if(Un){X++;let a=yi(e),o=[];for(let e in t)Gi(e,i,o,a,r);let s;for(;s=o.shift();)xi(e,``,t,n,s)&&Gi(s.methodInfo,i,o,a,r);Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let a=t;for(;ci(e,i,a,n,r);)Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),a=e.__dataPending,e.__dataPending=null}}function yi(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;let n=e[Q.COMPUTE],{counts:r,ready:i,total:a}=bi(e),o;for(;o=i.shift();){t.set(o,t.size);let e=n[o];e&&e.forEach(e=>{let t=e.info.methodInfo;--a,--r[t]===0&&i.push(t)})}a!==0&&console.warn(`Computed graph for ${e.localName} incomplete; circular?`),e.constructor.__orderedComputedDeps=t}return t}function bi(e){let t=e[Hi],n={},r=e[Q.COMPUTE],i=[],a=0;for(let e in t){let r=t[e];a+=n[e]=r.args.filter(e=>!e.literal).length+(r.dynamicFn?1:0)}for(let e in r)t[e]||i.push(e);return{counts:n,ready:i,total:a}}function xi(e,t,n,r,i){let a=Ni(e,t,n,r,i);if(a===Z)return!1;let o=i.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,a,!0):(e[o]=a,!1)}function Si(e,t,n){let r=e.__dataLinkedPaths;if(r){let i;for(let a in r){let o=r[a];_r(a,t)?(i=vr(a,o,t),e._setPendingPropertyOrPath(i,n,!0,!0)):_r(o,t)&&(i=vr(o,a,t),e._setPendingPropertyOrPath(i,n,!0,!0))}}}function Ci(e,t,n,r,i,a,o){n.bindings=n.bindings||[];let s={kind:r,target:i,parts:a,literal:o,isCompound:a.length!==1};if(n.bindings.push(s),Oi(s)){let{event:e,negate:t}=s.parts[0];s.listenerEvent=e||wr(i)+`-changed`,s.listenerNegate=t}let c=t.nodeInfoList.length;for(let n=0;n<s.parts.length;n++){let r=s.parts[n];r.compoundIndex=n,wi(e,t,s,r,c)}}function wi(e,t,n,r,i){if(!r.literal)if(n.kind===`attribute`&&n.target[0]===`-`)console.warn(`Cannot set attribute `+n.target+` because "-" is not a valid attribute starting character`);else{let a=r.dependencies,o={index:i,binding:n,part:r,evaluator:e};for(let n=0;n<a.length;n++){let r=a[n];typeof r==`string`&&(r=Li(r),r.wildcard=!0),e._addTemplatePropertyEffect(t,r.rootProperty,{fn:Ti,info:o,trigger:r})}}}function Ti(e,t,n,r,i,a,o){let s=o[i.index],c=i.binding,l=i.part;if(a&&l.source&&t.length>l.source.length&&c.kind==`property`&&!c.isCompound&&s.__isPropertyEffectsClient&&s.__dataHasAccessor&&s.__dataHasAccessor[c.target]){let r=n[t];t=vr(l.source,c.target,t),s._setPendingPropertyOrPath(t,r,!1,!0)&&e._enqueueClient(s)}else{let o=i.evaluator._evaluateBinding(e,l,t,n,r,a);o!==Z&&Ei(e,s,c,l,o)}}function Ei(e,t,n,r,i){if(i=Di(t,i,n,r),In&&(i=In(i,n.target,n.kind,t)),n.kind==`attribute`)e._valueToNodeAttribute(t,i,n.target);else{let r=n.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[r]?(!t[Q.READ_ONLY]||!t[Q.READ_ONLY][r])&&t._setPendingProperty(r,i)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,r,i)}}function Di(e,t,n,r){if(n.isCompound){let i=e.__dataCompoundStorage[n.target];i[r.compoundIndex]=t,t=i.join(``)}return n.kind!==`attribute`&&(n.target===`textContent`||n.target===`value`&&(e.localName===`input`||e.localName===`textarea`))&&(t??=``),t}function Oi(e){return!!e.target&&e.kind!=`attribute`&&e.kind!=`text`&&!e.isCompound&&e.parts[0].mode===`{`}function ki(e,t){let{nodeList:n,nodeInfoList:r}=t;if(r.length)for(let t=0;t<r.length;t++){let i=r[t],a=n[t],o=i.bindings;if(o)for(let t=0;t<o.length;t++){let n=o[t];Ai(a,n),ji(a,e,n)}a.__dataHost=e}}function Ai(e,t){if(t.isCompound){let n=e.__dataCompoundStorage||={},r=t.parts,i=Array(r.length);for(let e=0;e<r.length;e++)i[e]=r[e].literal;let a=t.target;n[a]=i,t.literal&&t.kind==`property`&&(a===`className`&&(e=K(e)),e[a]=t.literal)}}function ji(e,t,n){if(n.listenerEvent){let r=n.parts[0];e.addEventListener(n.listenerEvent,function(e){gi(e,t,n.target,r.source,r.negate)})}}function Mi(e,t,n,r,i,a){a=t.static||a&&(typeof a!=`object`||a[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:i,dynamicFn:a};for(let i=0,a;i<t.args.length&&(a=t.args[i]);i++)a.literal||e._addPropertyEffect(a.rootProperty,n,{fn:r,info:o,trigger:a});return a&&e._addPropertyEffect(t.methodName,n,{fn:r,info:o}),o}function Ni(e,t,n,r,i){let a=e._methodHost||e,o=a[i.methodName];if(o){let r=e._marshalArgs(i.args,t,n);return r===Z?Z:o.apply(a,r)}else i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}function Pi(e){let t=``;for(let n=0;n<e.length;n++){let r=e[n].literal;t+=r||``}return t}function Fi(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:Ki};return t[2].trim()?Ii(t[2].replace(/\\,/g,`&comma;`).split(`,`),e):e}return null}function Ii(e,t){return t.args=e.map(function(e){let n=Li(e);return n.literal||(t.static=!1),n},this),t}function Li(e){let t=e.trim().replace(/&comma;/g,`,`).replace(/\\(.)/g,`$1`),n={name:t,value:``,literal:!1},r=t[0];switch(r===`-`&&(r=t[1]),r>=`0`&&r<=`9`&&(r=`#`),r){case`'`:case`"`:n.value=t.slice(1,-1),n.literal=!0;break;case`#`:n.value=Number(t),n.literal=!0;break}return n.literal||(n.rootProperty=q(t),n.structured=hr(t),n.structured&&(n.wildcard=t.slice(-2)==`.*`,n.wildcard&&(n.name=t.slice(0,-2)))),n}function Ri(e,t,n){let r=J(e,n);return r===void 0&&(r=t[n]),r}function zi(e,t,n,r){let i={indexSplices:r};Hn&&!e._overrideLegacyUndefined&&(t.splices=i),e.notifyPath(n+`.splices`,i),e.notifyPath(n+`.length`,t.length),Hn&&!e._overrideLegacyUndefined&&(i.indexSplices=[])}function Bi(e,t,n,r,i,a){zi(e,t,n,[{index:r,addedCount:i,removed:a,object:t,type:`splice`}])}function Vi(e){return e[0].toUpperCase()+e.substring(1)}var X,Z,Q,Hi,Ui,Wi,Gi,Ki,qi,Ji,Yi,Xi,Zi,Qi=e((()=>{H(),mr(),G(),Sr(),Or(),Kr(),oi(),qn(),X=0,Z=[],Q={COMPUTE:`__computeEffects`,REFLECT:`__reflectEffects`,NOTIFY:`__notifyEffects`,PROPAGATE:`__propagateEffects`,OBSERVE:`__observeEffects`,READ_ONLY:`__readOnly`},Hi=`__computeInfo`,Ui=/[A-Z]/,Wi=(e,t,n)=>{let r=0,i=t.length-1,a=-1;for(;r<=i;){let o=r+i>>1,s=n.get(t[o].methodInfo)-n.get(e.methodInfo);if(s<0)r=o+1;else if(s>0)i=o-1;else{a=o;break}}a<0&&(a=i+1),t.splice(a,0,e)},Gi=(e,t,n,r,i)=>{let a=t[i?q(e):e];if(a)for(let t=0;t<a.length;t++){let o=a[t];o.info.lastRun!==X&&(!i||ui(e,o.trigger))&&(o.info.lastRun=X,Wi(o.info,n,r))}},Ki=[],qi=`(?:[a-zA-Z_$][\\w.:$\\-*]*)`,``+qi,Ji=`(\\[\\[|{{)\\s*(?:(!)\\s*)?`+(`(`+qi+`\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:"(?:[^"\\\\]|\\\\.)*")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:"(?:[^"\\\\]|\\\\.)*")))\\s*))*)?)\\)\\s*)?)`)+`(?:]]|}})`,Yi=new RegExp(Ji,`g`),Xi=W(e=>{let t=ai(Gr(e));class n extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return Q}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(Zi.length){let e=Zi[Zi.length-1];e._enqueueClient(this),this.__dataHost=e}}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[Q.READ_ONLY];for(let n in e)(!t||!t[n])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=e[n])}_addPropertyEffect(e,t,n){this._createPropertyAccessor(e,t==Q.READ_ONLY);let r=si(this,t,!0)[e];r||=this[t][e]=[],r.push(n)}_removePropertyEffect(e,t,n){let r=si(this,t,!0)[e],i=r.indexOf(n);i>=0&&r.splice(i,1)}_hasPropertyEffect(e,t){let n=this[t];return!!(n&&n[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,Q.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,Q.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,Q.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,Q.COMPUTE)}_setPendingPropertyOrPath(e,t,n,r){if(r||q(Array.isArray(e)?e[0]:e)!==e){if(!r){let n=J(this,e);if(e=xr(this,e,t),!e||!super._shouldPropertyChange(e,t,n))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,n))return Si(this,e,t),!0}else if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,n);else this[e]=t;return!1}_setUnmanagedPropertyToNode(e,t,n){(n!==e[t]||typeof n==`object`)&&(t===`className`&&(e=K(e)),e[t]=n)}_setPendingProperty(e,t,n){let r=this.__dataHasPaths&&hr(e),i=r?this.__dataTemp:this.__data;return this._shouldPropertyChange(e,t,i[e])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),r?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(r||this[Q.NOTIFY]&&this[Q.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=n),!0):!1}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let n=e[t];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let n in e)(t||!this[Q.READ_ONLY]||!this[Q.READ_ONLY][n])&&this._setPendingPropertyOrPath(n,e[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,n){let r=this.__dataHasPaths;this.__dataHasPaths=!1;let i;vi(this,t,n,r),i=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(t,n,r),this._flushClients(),ci(this,this[Q.REFLECT],t,n,r),ci(this,this[Q.OBSERVE],t,n,r),i&&fi(this,i,t,n,r),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,n){this[Q.PROPAGATE]&&ci(this,this[Q.PROPAGATE],e,t,n),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,e,t,n)}_runEffectsForTemplate(e,t,n,r){let i=(t,r)=>{ci(this,e.propertyEffects,t,n,r,e.nodeList);for(let i=e.firstChild;i;i=i.nextSibling)this._runEffectsForTemplate(i,t,n,r)};e.runEffects?e.runEffects(i,t,r):i(t,r)}linkPaths(e,t){e=yr(e),t=yr(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=yr(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let n={path:``},r=J(this,e,n);zi(this,r,n.path,t)}get(e,t){return J(t||this,e)}set(e,t,n){n?xr(n,e,t):(!this[Q.READ_ONLY]||!this[Q.READ_ONLY][e])&&this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let n={path:``},r=J(this,e,n),i=r.length,a=r.push(...t);return t.length&&Bi(this,r,n.path,i,t.length,[]),a}pop(e){let t={path:``},n=J(this,e,t),r=!!n.length,i=n.pop();return r&&Bi(this,n,t.path,n.length,0,[i]),i}splice(e,t,n,...r){let i={path:``},a=J(this,e,i);t<0?t=a.length-Math.floor(-t):t&&=Math.floor(t);let o;return o=arguments.length===2?a.splice(t):a.splice(t,n,...r),(r.length||o.length)&&Bi(this,a,i.path,t,r.length,o),o}shift(e){let t={path:``},n=J(this,e,t),r=!!n.length,i=n.shift();return r&&Bi(this,n,t.path,0,0,[i]),i}unshift(e,...t){let n={path:``},r=J(this,e,n),i=r.unshift(...t);return t.length&&Bi(this,r,n.path,0,t.length,[]),i}notifyPath(e,t){let n;if(arguments.length==1){let r={path:``};t=J(this,e,r),n=r.path}else n=Array.isArray(e)?yr(e):e;this._setPendingPropertyOrPath(n,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){this._addPropertyEffect(e,Q.READ_ONLY),t&&(this[`_set`+Vi(e)]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,n){let r={property:e,method:t,dynamicFn:!!n};this._addPropertyEffect(e,Q.OBSERVE,{fn:di,info:r,trigger:{name:e}}),n&&this._addPropertyEffect(t,Q.OBSERVE,{fn:di,info:r,trigger:{name:t}})}_createMethodObserver(e,t){let n=Fi(e);if(!n)throw Error(`Malformed observer expression '`+e+`'`);Mi(this,n,Q.OBSERVE,Ni,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,Q.NOTIFY,{fn:hi,info:{eventName:wr(e)+`-changed`,property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);t[0]===`-`?console.warn(`Property `+e+` cannot be reflected to attribute `+t+` because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.`):this._addPropertyEffect(e,Q.REFLECT,{fn:_i,info:{attrName:t}})}_createComputedProperty(e,t,n){let r=Fi(t);if(!r)throw Error(`Malformed computed expression '`+t+`'`);let i=Mi(this,r,Q.COMPUTE,xi,e,n);si(this,Hi)[e]=i}_marshalArgs(e,t,n){let r=this.__data,i=[];for(let a=0,o=e.length;a<o;a++){let{name:o,structured:s,wildcard:c,value:l,literal:u}=e[a];if(!u)if(c){let e=_r(o,t),i=Ri(r,n,e?t:o);l={path:e?t:o,value:i,base:e?J(r,o):i}}else l=s?Ri(r,n,o):r[o];if(Hn&&!this._overrideLegacyUndefined&&l===void 0&&e.length>1)return Z;i[a]=l}return i}static addPropertyEffect(e,t,n){this.prototype._addPropertyEffect(e,t,n)}static createPropertyObserver(e,t,n){this.prototype._createPropertyObserver(e,t,n)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,n){this.prototype._createComputedProperty(e,t,n)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let n=this.constructor._parseTemplate(e),r=this.__preBoundTemplateInfo==n;if(!r)for(let e in n.propertyEffects)this._createPropertyAccessor(e);if(t)if(n=Object.create(n),n.wasPreBound=r,!this.__templateInfo)this.__templateInfo=n;else{let t=e._parentTemplateInfo||this.__templateInfo,r=t.lastChild;n.parent=t,t.lastChild=n,n.previousSibling=r,r?r.nextSibling=n:t.firstChild=n}else this.__preBoundTemplateInfo=n;return n}static _addTemplatePropertyEffect(e,t,n){let r=e.hostProps=e.hostProps||{};r[t]=!0;let i=e.propertyEffects=e.propertyEffects||{};(i[t]=i[t]||[]).push(n)}_stampTemplate(e,t){t||=this._bindTemplate(e,!0),Zi.push(this);let n=super._stampTemplate(e,t);if(Zi.pop(),t.nodeList=n.nodeList,!t.wasPreBound){let e=t.childNodes=[];for(let t=n.firstChild;t;t=t.nextSibling)e.push(t)}return n.templateInfo=t,ki(this,t),this.__dataClientsReady&&(this._runEffectsForTemplate(t,this.__data,null,!1),this._flushClients()),n}_removeBoundDom(e){let t=e.templateInfo,{previousSibling:n,nextSibling:r,parent:i}=t;n?n.nextSibling=r:i&&(i.firstChild=r),r?r.previousSibling=n:i&&(i.lastChild=n),t.nextSibling=t.previousSibling=null;let a=t.childNodes;for(let e=0;e<a.length;e++){let t=a[e];K(K(t).parentNode).removeChild(t)}}static _parseTemplateNode(e,n,r){let i=t._parseTemplateNode.call(this,e,n,r);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,n);t&&(e.textContent=Pi(t)||` `,Ci(this,n,r,`text`,`textContent`,t),i=!0)}return i}static _parseTemplateNodeAttribute(e,n,r,i,a){let o=this._parseBindings(a,n);if(o){let t=i,a=`property`;Ui.test(i)?a=`attribute`:i[i.length-1]==`$`&&(i=i.slice(0,-1),a=`attribute`);let s=Pi(o);return s&&a==`attribute`&&(i==`class`&&e.hasAttribute(`class`)&&(s+=` `+e.getAttribute(i)),e.setAttribute(i,s)),a==`attribute`&&t==`disable-upgrade$`&&e.setAttribute(i,``),e.localName===`input`&&t===`value`&&e.setAttribute(t,``),e.removeAttribute(t),a===`property`&&(i=Cr(i)),Ci(this,n,r,a,i,o,s),!0}else return t._parseTemplateNodeAttribute.call(this,e,n,r,i,a)}static _parseTemplateNestedTemplate(e,n,r){let i=t._parseTemplateNestedTemplate.call(this,e,n,r),a=e.parentNode,o=r.templateInfo,s=a.localName===`dom-if`,c=a.localName===`dom-repeat`;Wn&&(s||c)&&(a.removeChild(e),r=r.parentInfo,r.templateInfo=o,r.noted=!0,i=!1);let l=o.hostProps;if(Gn&&s)l&&(n.hostProps=Object.assign(n.hostProps||{},l),Wn||(r.parentInfo.noted=!0));else for(let e in l){let t=[{mode:`{`,source:e,dependencies:[e],hostProp:!0}];Ci(this,n,r,`property`,`_host_`+e,t)}return i}static _parseBindings(e,t){let n=[],r=0,i;for(;(i=Yi.exec(e))!==null;){i.index>r&&n.push({literal:e.slice(r,i.index)});let a=i[1][0],o=!!i[2],s=i[3].trim(),c=!1,l=``,u=-1;a==`{`&&(u=s.indexOf(`::`))>0&&(l=s.substring(u+2),s=s.substring(0,u),c=!0);let d=Fi(s),f=[];if(d){let{args:e,methodName:n}=d;for(let t=0;t<e.length;t++){let n=e[t];n.literal||f.push(n)}let r=t.dynamicFns;(r&&r[n]||d.static)&&(f.push(n),d.dynamicFn=!0)}else f.push(s);n.push({source:s,mode:a,negate:o,customEvent:c,signature:d,dependencies:f,event:l}),r=Yi.lastIndex}if(r&&r<e.length){let t=e.substring(r);t&&n.push({literal:t})}return n.length?n:null}static _evaluateBinding(e,t,n,r,i,a){let o;return o=t.signature?Ni(e,n,r,i,t.signature):n==t.source?a&&hr(n)?J(e,n):e.__data[n]:J(e,t.source),t.negate&&(o=!o),o}}return n}),Zi=[]}));function $i(){ta++}function ea(e){na.push(e)}var ta,na,ra=e((()=>{ta=0,na=[]}));function ia(e){let t={};for(let n in e){let r=e[n];t[n]=typeof r==`function`?{type:r}:r}return t}var aa,oa=e((()=>{H(),G(),ra(),Br(),aa=W(e=>{let t=zr(e);function n(e){let t=Object.getPrototypeOf(e);return t.prototype instanceof i?t:null}function r(e){if(!e.hasOwnProperty(JSCompiler_renameProperty(`__ownProperties`,e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty(`properties`,e))){let n=e.properties;n&&(t=ia(n))}e.__ownProperties=t}return e.__ownProperties}class i extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__observedAttributes`,this))){ea(this.prototype);let e=this._properties;this.__observedAttributes=e?Object.keys(e).map(e=>this.prototype._addPropertyToAttributeMap(e)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__finalized`,this))){let e=n(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){let e=r(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__properties`,this))){let e=n(this);this.__properties=Object.assign({},e&&e._properties,r(this))}return this.__properties}static typeForProperty(e){let t=this._properties[e];return t&&t.type}_initializeProperties(){$i(),this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i})})),sa,ca,la,ua=e((()=>{H(),qn(),G(),pr(),Mn(),nr(),Qi(),oa(),mr(),sa=`3.5.2`,ca=window.ShadyCSS&&window.ShadyCSS.cssBuild,la=W(e=>{let t=aa(Xi(e));function n(e){if(!e.hasOwnProperty(JSCompiler_renameProperty(`__propertyDefaults`,e))){e.__propertyDefaults=null;let t=e._properties;for(let n in t){let r=t[n];`value`in r&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[n]=r)}}return e.__propertyDefaults}function r(e){return e.hasOwnProperty(JSCompiler_renameProperty(`__ownObservers`,e))||(e.__ownObservers=e.hasOwnProperty(JSCompiler_renameProperty(`observers`,e))?e.observers:null),e.__ownObservers}function i(e,t,n,r){n.computed&&(n.readOnly=!0),n.computed&&(e._hasReadOnlyEffect(t)?console.warn(`Cannot redefine computed property '${t}'.`):e._createComputedProperty(t,n.computed,r)),n.readOnly&&!e._hasReadOnlyEffect(t)?e._createReadOnlyProperty(t,!n.computed):n.readOnly===!1&&e._hasReadOnlyEffect(t)&&console.warn(`Cannot make readOnly property '${t}' non-readOnly.`),n.reflectToAttribute&&!e._hasReflectEffect(t)?e._createReflectedProperty(t):n.reflectToAttribute===!1&&e._hasReflectEffect(t)&&console.warn(`Cannot make reflected property '${t}' non-reflected.`),n.notify&&!e._hasNotifyEffect(t)?e._createNotifyingProperty(t):n.notify===!1&&e._hasNotifyEffect(t)&&console.warn(`Cannot make notify property '${t}' non-notify.`),n.observer&&e._createPropertyObserver(t,n.observer,r[n.observer]),e._addPropertyToAttributeMap(t)}function a(e,t,n,r){if(!ca){let i=t.content.querySelectorAll(`style`),a=sr(t),o=cr(n),s=t.content.firstElementChild;for(let n=0;n<o.length;n++){let i=o[n];i.textContent=e._processStyleText(i.textContent,r),t.content.insertBefore(i,s)}let c=0;for(let t=0;t<a.length;t++){let n=a[t],o=i[c];o===n?c++:(n=n.cloneNode(!0),o.parentNode.insertBefore(n,o)),n.textContent=e._processStyleText(n.textContent,r)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,n),Kn&&ca&&Pn){let n=t.content.querySelectorAll(`style`);if(n){let t=``;Array.from(n).forEach(e=>{t+=e.textContent,e.parentNode.removeChild(e)}),e._styleSheet=new CSSStyleSheet,e._styleSheet.replaceSync(t)}}}function o(e){let t=null;if(e&&(!Ln||Rn)&&(t=tr.import(e,`template`),Ln&&!t))throw Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}class s extends t{static get polymerElementVersion(){return sa}static _finalizeClass(){t._finalizeClass.call(this);let e=r(this);e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&(typeof e==`string`?(console.error(`template getter must return HTMLTemplateElement`),e=null):zn||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(let t in e)i(this.prototype,t,e[t],e)}static createObservers(e,t){let n=this.prototype;for(let r=0;r<e.length;r++)n._createMethodObserver(e[r],t)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`_template`,this))){let e=this.prototype.hasOwnProperty(JSCompiler_renameProperty(`_template`,this.prototype))?this.prototype._template:void 0;typeof e==`function`&&(e=e()),this._template=e===void 0?this.hasOwnProperty(JSCompiler_renameProperty(`is`,this))&&o(this.is)||Object.getPrototypeOf(this.prototype).constructor.template:e}return this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`_importPath`,this))){let e=this.importMeta;if(e)this._importPath=On(e.url);else{let e=tr.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Fn,this.importPath=this.constructor.importPath;let e=n(this.constructor);if(e)for(let t in e){let n=e[t];if(this._canApplyPropertyDefault(t)){let e=typeof n.value==`function`?n.value.call(this):n.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}_canApplyPropertyDefault(e){return!this.hasOwnProperty(e)}static _processStyleText(e,t){return Dn(e,t)}static _finalizeTemplate(e){let t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;let n=this.importPath,r=n?En(n):``;a(this,t,e,r),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){let t=K(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:`open`,shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e),this.constructor._styleSheet&&(t.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Vn&&window.ShadyDOM&&window.ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=En(this.importPath)),En(e,t)}static _parseTemplateContent(e,n,r){return n.dynamicFns=n.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,n,r)}static _addTemplatePropertyEffect(e,n,r){return Bn&&!(n in this._properties)&&!(r.info.part.signature&&r.info.part.signature.static)&&!r.info.part.hostProp&&!e.nestedTemplate&&console.warn(`Property '${n}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,e,n,r)}}return s})}));function da(e){if(e instanceof ma)return e.value;throw Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}function fa(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof ma)return da(e);throw Error(`non-template value passed to Polymer's html function: ${e}`)}var pa,ma,ha,ga,_a=e((()=>{H(),pa=window.trustedTypes&&trustedTypes.createPolicy(`polymer-html-literal`,{createHTML:e=>e}),ma=class{constructor(e,t){ga(e,t),this.value=t.reduce((t,n,r)=>t+da(n)+e[r+1],e[0]).toString()}toString(){return this.value}},ha=function(e,...t){ga(e,t);let n=document.createElement(`template`),r=t.reduce((t,n,r)=>t+fa(n)+e[r+1],e[0]);return pa&&(r=pa.createHTML(r)),n.innerHTML=r,n},ga=(e,t)=>{if(!Array.isArray(e)||!Array.isArray(e.raw)||t.length!==e.length-1)throw TypeError(`Invalid call to the html template tag`)}})),va,ya=e((()=>{ua(),_a(),va=la(HTMLElement)})),ba,xa,Sa,Ca,wa,Ta,Ea,Da,Oa,ka,Aa,ja,Ma=e((()=>{ge(),Tn(),ne(),x(),ya(),T(),ba=`bottom-bar-toolbar`,xa=`bottom-bar-menu`,Sa=n`
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
`,Ca=Symbol(`openMenu`),wa=e=>{let t=e.shadowRoot?.querySelector(`#dropdown`);!t||t.hasAttribute(`hidden`)||((t.shadowRoot?.querySelector(`cosmoz-dropdown`))?.shadowRoot?.querySelector(`#dropdownButton`))?.click()},Ta=e=>e.nodeType===Node.ELEMENT_NODE&&e.getAttribute(`slot`)!==`info`&&e.tagName!==`TEMPLATE`&&e.tagName!==`STYLE`&&e.tagName!==`DOM-REPEAT`&&e.tagName!==`DOM-IF`&&e.getAttribute(`slot`)!==`extra`,Ea=e=>{let t=[...e.childNodes],n=[];for(let e of t)if(e.tagName===`SLOT`){let t=e.assignedElements({flatten:!0});n.push(...t)}else n.push(e);return n},Da=e=>{let t=Ea(e).filter(Ta).filter(e=>!e.hidden).sort((e,t)=>(Number(e.dataset.index)||0)-(Number(t.dataset.index)||0));if(t.length===0)return t;let n=t.reduce((e,t)=>parseInt(e.dataset.priority??`0`,10)>=parseInt(t.dataset.priority??`0`,10)?e:t,{dataset:{priority:`-1000`}});return[n,...t.filter(e=>e!==n)]},Oa=(e,t,n,r)=>{let i=t?ba:xa;e.setAttribute(`slot`,i),e.setAttribute(`tabindex`,`0`),e.classList.toggle(r,!t),e.classList.toggle(n,t)},ka=(e,t,n)=>{let r=Da(e),{maxToolbarItems:i=1}=e;if(!(r.length>0)){e.toggleAttribute(`has-menu-items`,!1);return}let a=r.slice(0,i),o=r.slice(a.length);a.forEach(e=>Oa(e,!0,t,n)),o.forEach(e=>Oa(e,!1,t,n)),e.toggleAttribute(`has-menu-items`,o.length>0)},Aa=e=>{let{active:t=!1,maxToolbarItems:n=1}=e,r=te(!1);_({activity:Ca,callback:()=>wa(e),check:()=>t&&!e.hasAttribute(`hide-actions`),element:()=>e.shadowRoot?.querySelector(`#dropdown`)},[t]);let i=y(()=>he(`height`),[]);de(()=>{r.current?i(e,t):i(e,t,{duration:0}),r.current=!0},[t]);let a=O(()=>ka(e,`cosmoz-bottom-bar-toolbar`,`cosmoz-bottom-bar-menu`),[n]),o=te(null),s=O(()=>{let t=o.current;t&&(t.disconnect(),Ea(e).filter(Ta).forEach(e=>{t.observe(e,{attributes:!0,attributeFilter:[`hidden`]})}))},[]);d(()=>{o.current=new MutationObserver(()=>{s(),a()}),s();let t=new MutationObserver(()=>{s(),a()});return t.observe(e,{childList:!0}),()=>{o.current?.disconnect(),o.current=null,t.disconnect()}},[a]);let c=O(()=>{s(),a()},[a]);return S` <div id="bar" part="bar">
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
		</div>`},customElements.define(`cosmoz-bottom-bar`,E(Aa,{observedAttributes:[`active`,`max-toolbar-items`],styleSheets:[Sa]})),ja=`
	<slot name="extra" slot="extra"></slot>
	<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
	<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
`,S(Object.assign([ja],{raw:[ja]})),ha(Object.assign([ja],{raw:[ja]}))})),Na=e((()=>{Ma()})),Pa,Fa=e((()=>{T(),ce(),Pa=C(class extends ee{constructor(e){if(super(e),e.type!==ie.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return ue}})})),Ia,La,Ra,za=e((()=>{H(),G(),Lr(),Ia=class e{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,La.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),La.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(t,n,r){return t instanceof e?t._cancelAsync():t=new e,t.setConfig(n,r),t}},La=new Set,Ra=function(e){La.add(e)}})),Ba=e((()=>{H(),za()})),Va,Ha,Ua,Wa=e((()=>{Va=Symbol(`memo`),Ha=e=>{let t=Va,n=Va,r;return function(i,a){if(t===i&&n===a)return r;let o=e(i,a);return r=o,t=i,n=a,o}},Ua=e=>{let t=Va,n=Va,r=Va,i;return function(a,o,s){if(t===a&&n===o&&r===s)return i;let c=e(a,o,s);return i=c,t=a,n=o,r=s,c}}})),Ga,Ka,qa,Ja=e((()=>{x(),T(),Ga=n`
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
`,Ka=()=>b,qa=E(Ka,{styleSheets:[Ga]}),customElements.define(`cosmoz-spinner`,qa)})),Ya=e((()=>{Ja()})),Xa,Za,Qa,$a,eo,to,no=e((()=>{r(),i(),l(),x(),Xa=[`T`,` `],Za=e=>{if(!e||typeof e!=`string`)return;let t;return Xa.some(n=>e.match(n)?(t=e.split(n),!0):!1),t||[e]},Qa=(e,t)=>{let n=Za(e),r=Za(t);return{minDate:Array.isArray(n)?n.shift():null,minTime:Array.isArray(n)?n.shift():null,maxDate:Array.isArray(r)?r.shift():null,maxTime:Array.isArray(r)?r.shift():null}},$a=(e,t)=>{if(!(!e&&!t))return!e&&t?`T${t}`:e&&!t?e:`${e}T${t}`},eo=e=>{if(e){for(let t of Xa)if(e.match(t)){let n=e.split(t);return{date:n.shift(),time:n.shift()}}return{date:e}}},to=e=>{let{dateLabel:t,timeLabel:n,min:r,max:i,step:a=`1`,value:o}=e,{minDate:s,maxDate:c,minTime:l,maxTime:u}=y(()=>Qa(r,i),[r,i]),{date:f,time:p}=y(()=>eo(o)??{},[o]);return d(()=>{e.dispatchEvent(new CustomEvent(`cosmoz-datetime-input-value-changed`,{bubbles:!0,composed:!0}))},[o]),S`
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
			@value-changed="${t=>re(e,`value`,$a(t.target.value,p))}"
			.min="${s}"
			.max="${c}"
		></cosmoz-input>
		<cosmoz-input
			label="${n}"
			type="time"
			.value="${p}"
			@value-changed="${t=>re(e,`value`,$a(f,t.target.value))}"
			step="${a}"
			.min="${l}"
			.max="${u}"
		></cosmoz-input>
	`},customElements.define(`cosmoz-datetime-input`,E(to,{observedAttributes:[`date-label`,`time-label`,`min`,`max`,`step`],styleSheets:[o]}))})),ro=e((()=>{no()})),io,ao,oo,so,co,lo,uo,fo,po,mo,ho=e((()=>{ya(),G(),fe(),io=[],ao=()=>{f.isInitialized||f.init({lng:`en`,resStore:{en:{}},fallbackLng:!1})},oo=e=>e.reduce((e,t,n)=>(e.count===void 0&&typeof t==`number`&&(e.count=t),typeof t==`object`?{...e,...t}:(e[n]=t,e)),{}),so=function(e){ao();let t=oo([...arguments].slice(1));return delete t.count,f.t(e,t)},co=function(e,t){ao();let n=oo([...arguments].slice(2)),r=n.count,i;delete n.count;let a=f.services.pluralResolver.getSuffix(f.language,r);return a?(n.defaultValue=t,i=e+a):(i=e,n.defaultValue=e),f.t(i,n)},lo=function(e,t){ao();let n=oo([...arguments].slice(2));return n.context=e,delete n.count,f.t(t,n)},uo=function(e,t,n){ao();let r=oo([...arguments].slice(3)),i=r.count,a=e?`_`+e:``,o=t;delete r.count;let s=f.services.pluralResolver.getSuffix(f.language,i);return s?(r.defaultValue=n,o=t+a+s):(o=t,r.context=e),f.t(o,r)},fo=(e,t,n)=>{f.init({resources:{}}),f.addResourceBundle(e,t,n)},po=W(e=>class extends e{static get properties(){return{t:{type:Object,value(){return{}}}}}_filterT(e){return e.filter(e=>e!==this.t)}_(){return so.apply(null,this._filterT([...arguments]))}connectedCallback(){super.connectedCallback(),io.push(this)}disconnectedCallback(){super.disconnectedCallback();let e=io.indexOf(this);e>=0&&io.splice(e,1)}gettext(){return so.apply(null,this._filterT([...arguments]))}ngettext(){return co.apply(null,this._filterT([...arguments]))}pgettext(){return lo.apply(null,this._filterT([...arguments]))}npgettext(){return uo.apply(null,this._filterT([...arguments]))}}),mo=class extends va{static get properties(){return{compatibilityJSON:{type:String,value:`v3`},domain:{type:String,value:`messages`},interpolationPrefix:{type:String,value:`__`},interpolationSuffix:{type:String,value:`__`},language:{type:String,value:`en`},namespace:{type:String,value:`translation`},translations:{type:Object,observer(e){e!=null&&(fo(this.language,this.namespace,e),io.forEach(e=>e.set(`t`,{})))}},keySeparator:{type:String,value:`.`},nsSeparator:{type:String,value:`:`}}}ready(){super.ready(),f.init({compatibilityJSON:this.compatibilityJSON,interpolation:{escapeValue:!1,prefix:this.interpolationPrefix,suffix:this.interpolationSuffix},keySeparator:this.keySeparator,lng:this.language,nsSeparator:this.nsSeparator,resStore:{}})}},customElements.define(`cosmoz-i18next`,mo)})),go,_o,vo=e((()=>{go=e=>t=>{let n=t.match(e);return n&&{result:n,url:new URL(t,document.location.origin)}},_o=(e,t)=>{for(let n of e){let e=n.rule,r=typeof e==`function`?e(t):go(e)(t);if(r)return{...n,route:n,match:r,url:t}}}})),yo=e((()=>{x()})),bo,xo,So,Co,wo=e((()=>{x(),vo(),bo=()=>window.location.href.replace(window.location.origin,``),xo=()=>{let[e,t]=g(bo);return d(()=>{let e=()=>t(bo);return window.addEventListener(`popstate`,e),()=>window.removeEventListener(`popstate`,e)},[t]),e},So=e=>{let t=xo();return y(()=>_o(e,t),[e,t])},Co=(e,t=null,{notify:n=!0,replace:r=!0}={})=>{(r?history.replaceState:history.pushState).call(history,t,``,e),n&&queueMicrotask(()=>window.dispatchEvent(new CustomEvent(`popstate`,{bubbles:!1})))}})),To,Eo=e((()=>{x(),wo(),To=e=>{let t=So(e);return{route:t,result:y(()=>{if(t){let{handle:e,...n}=t;return e(n)}},[t])}}})),Do,Oo,ko=e((()=>{x(),Do=(e,t,n)=>e.dispatchEvent(new CustomEvent(t,{bubbles:!1,cancelable:!1,composed:!0,...n})),Oo=(e,t,n)=>{d(()=>{if(!n){Do(e,`route-not-found`);return}Do(e,`route-loading`,{detail:t}),Promise.resolve(n).then(()=>Do(e,`route-loaded`,{detail:t})).catch(n=>Do(e,`route-error`,{detail:{route:t,error:n}}))},[n])}})),Ao,jo=e((()=>{T(),t(),v(),x(),Eo(),ko(),Ao=e=>{let t=e.routes,{route:n,result:r}=To(t);return Oo(e,n,r),u([r],()=>pe(Promise.resolve(r).catch(()=>b),b))},customElements.define(`cosmoz-router`,E(Ao))})),Mo=e((()=>{vo(),yo(),wo(),Eo(),jo()})),No,Po,Fo,Io=e((()=>{oe(),No=()=>new URL(location.hash.replace(/^#!?/iu,``).replace(`%23`,`#`),location.origin),Po=(e,t=w)=>{let n=new URLSearchParams(No().hash.replace(`#`,``)).getAll(e);switch(n.length){case 0:return;case 1:return t(n[0]);default:return n.map(t)}},Fo=(e,t=w)=>{let n=Array.from(new URLSearchParams(No().hash.replace(`#`,``)).entries()).filter(([t])=>t.startsWith(e)).map(([n,r])=>t([n.replace(e,``),r])).filter(([,e])=>e!=null);return Object.fromEntries(n)}}));function*Lo(e,t){if(e!==void 0){let n=0;for(let r of e)yield t(r,n++)}}var Ro=e((()=>{}));function zo(e,t){return t===void 0?t={autoBom:!1}:typeof t!=`object`&&(console.warn(`Deprecated: Expected third argument to be a object`),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([`﻿`,e],{type:e.type}):e}function Bo(e,t,n){var r=new XMLHttpRequest;r.open(`GET`,e),r.responseType=`blob`,r.onload=function(){Wo(r.response,t,n)},r.onerror=function(){console.error(`could not download file`)},r.send()}function Vo(e){var t=new XMLHttpRequest;t.open(`HEAD`,e,!1);try{t.send()}catch{}return t.status>=200&&t.status<=299}function Ho(e){try{e.dispatchEvent(new MouseEvent(`click`))}catch{var t=document.createEvent(`MouseEvents`);t.initMouseEvent(`click`,!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var $,Uo,Wo,Go=e((()=>{$=typeof window==`object`&&window.window===window?window:typeof self==`object`&&self.self===self?self:typeof global==`object`&&global.global===global?global:void 0,Uo=$.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),Wo=$.saveAs||(typeof window!=`object`||window!==$?function(){}:`download`in HTMLAnchorElement.prototype&&!Uo?function(e,t,n){var r=$.URL||$.webkitURL,i=document.createElement(`a`);t=t||e.name||`download`,i.download=t,i.rel=`noopener`,typeof e==`string`?(i.href=e,i.origin===location.origin?Ho(i):Vo(i.href)?Bo(e,t,n):Ho(i,i.target=`_blank`)):(i.href=r.createObjectURL(e),setTimeout(function(){r.revokeObjectURL(i.href)},4e4),setTimeout(function(){Ho(i)},0))}:`msSaveOrOpenBlob`in navigator?function(e,t,n){if(t=t||e.name||`download`,typeof e==`string`)if(Vo(e))Bo(e,t,n);else{var r=document.createElement(`a`);r.href=e,r.target=`_blank`,setTimeout(function(){Ho(r)})}else navigator.msSaveOrOpenBlob(zo(e,n),t)}:function(e,t,n,r){if(r||=open(``,`_blank`),r&&(r.document.title=r.document.body.innerText=`downloading...`),typeof e==`string`)return Bo(e,t,n);var i=e.type===`application/octet-stream`,a=/constructor/i.test($.HTMLElement)||$.safari,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||i&&a||Uo)&&typeof FileReader<`u`){var s=new FileReader;s.onloadend=function(){var e=s.result;e=o?e:e.replace(/^data:[^;]*;/,`data:attachment/file;`),r?r.location.href=e:location=e,r=null},s.readAsDataURL(e)}else{var c=$.URL||$.webkitURL,l=c.createObjectURL(e);r?r.location=l:location.href=l,r=null,setTimeout(function(){c.revokeObjectURL(l)},4e4)}}),$.saveAs=Wo.saveAs=Wo})),Ko,qo=e((()=>{Ko=function(e){e&&console.log(e)}})),Jo,Yo=e((()=>{qo(),Jo=class{constructor(e,t){this._filename=e,this.buffer=null,this.lastDownloadBlobUrl=null,this._mimeType=t}generate(){}createDownloadUrl(){this.buffer||this.generate();let e=new Blob([this.buffer],{type:this._mimeType});return this.lastDownloadBlobUrl&&window.URL.revokeObjectURL(this.lastDownloadBlobUrl),this.lastDownloadBlobUrl=URL.createObjectURL(e),this.lastDownloadBlobUrl}createDownloadLink(e){let t=e instanceof HTMLAnchorElement?e:document.createElement(`a`);return typeof e==`string`&&(t.innerHTML=e),t.href=this.createDownloadUrl(),t.download=this._filename,t.hasChildNodes||(t.innerText=this._filename),Ko(`Link created for file `+this._filename),t}}})),Xo,Zo,Qo,$o=e((()=>{qo(),Yo(),Xo=null,Zo=class extends Jo{constructor(e,t){super(e,`application/zip`),this.files=[],this.createFolderEntries=!!t;let n=new Date;this.timeInt=Math.round(n.getSeconds()/2)|n.getMinutes()<<5|n.getHours()<<11,this.dateInt=n.getFullYear()-1980<<9|n.getMonth()+1<<5|n.getDate()}addFileFromString(e,t){let n=new TextEncoder(`utf-8`).encode(t);return this.addFileFromUint8Array(e,n),this}addFileFromUint8Array(e,t){if(!(t instanceof Uint8Array))throw Error(`invalid parameter`);return this.files.push({name:e.replace(`\\`,`/`),data:t}),this}generate(){Ko(`NullZip archive generation started`);let e={};for(let t of this.files)t.size=t.data?t.data.byteLength:0,t.crc=t.data?this.crc(t.data):0,e[t.name]=t;let t=[];if(this.createFolderEntries){let n=/\//giu;for(let r of this.files){let i=r.name;for(let r=n.exec(i);r!==null;r=n.exec(i)){let n={name:i.substr(0,r.index+1),size:0,crc:0,data:new Uint8Array};e[n.name]===void 0&&(e[n.name]=n,t.push(n))}}}Array.prototype.push.apply(this.files,t),this.files.sort((e,t)=>e.name.length-t.name.length||e.name.localeCompare(t.name));let n=this.files.reduce((e,t)=>e+76+t.name.length*2+t.size,22);Ko(`Estimated file size: `+n),this.buffer=new ArrayBuffer(n);let r=new Qo(this.buffer),i=this.hex2u8a(`504b0304140000000000`);for(let e of this.files)e.offs=r.i,r.writeByteArray(i),r.uint16(this.timeInt),r.uint16(this.dateInt),r.uint32(e.crc),r.uint32(e.size),r.uint32(e.size),r.uint16(e.name.length),r.uint16(0),r.writeASCII(e.name),e.size>0&&r.writeByteArray(e.data);let a=r.i,o=this.hex2u8a(`504b01023f00140000000000`);for(let e of this.files)r.writeByteArray(o),r.uint16(this.timeInt),r.uint16(this.dateInt),r.uint32(e.crc),r.uint32(e.size),r.uint32(e.size),r.uint16(e.name.length),r.uint16(0),r.uint16(0),r.uint16(0),r.uint16(0),r.uint32(e.size?32:48),r.uint32(e.offs),r.writeASCII(e.name);let s=r.i-a;return r.writeByteArray(this.hex2u8a(`504b050600000000`)),r.uint16(this.files.length),r.uint16(this.files.length),r.uint32(s),r.uint32(a),r.uint16(0),Ko(`Finished creating zip. size=`+r.i+`, predicted size=`+n),this.buffer}crc(e){let t,n,r=-1;if(!Xo)for(Xo=[],n=0;n<256;t=++n){for(let e=0;e<8;e++)t=t&1?3988292384^t>>>1:t>>>1;Xo[n]=t}for(let t=0;t<e.byteLength;t++)r=r>>>8^Xo[(r^e[t])&255];return(r^-1)>>>0}hex2u8a(e){let t=new Uint8Array(Math.ceil(e.length/2));for(let n=0;n<t.length;n++)t[n]=parseInt(e.substr(n*2,2),16);return t}},Qo=class{constructor(e){this.dw=new DataView(e),this.i=0,this.le=!0,this.utf8encoder=new TextEncoder(`utf-8`)}uint8(e){this.dw.setUint8(this.i++,e)}uint16(e){this.dw.setUint16(this.i,e,this.le),this.i+=2}uint32(e){this.dw.setUint32(this.i,e,this.le),this.i+=4}writeByteArray(e){if(!(e instanceof Uint8Array))throw Error(`invalid parameter`);new Uint8Array(this.dw.buffer).set(e,this.i),this.i+=e.byteLength}writeASCII(e){for(let t=0;t<e.length;t++)this.dw.setUint8(this.i++,e.charCodeAt(t)&255)}}})),es,ts,ns,rs,is,as,os,ss=e((()=>{Yo(),$o(),es=`application/vnd.openxmlformats-officedocument.spreadsheetml`,ts=`http://schemas.openxmlformats.org`,ns=`${ts}/spreadsheetml/2006/main`,rs=`${ts}/package/2006`,is=`${ts}/officeDocument/2006/relationships`,as=[{id:164,code:`yyyy&quot;-&quot;mm&quot;-&quot;dd`},{id:165,code:`yyyy&quot;-&quot;mm&quot;-&quot;dd&quot; &quot;h&quot;:&quot;mm&quot;:&quot;ss`}],os=class extends Jo{constructor(e,t){super(e,`${es}.sheet`),this.sheets=[],this.frozen=!!(t&&t.frozen),this.autoFilter=!!(t&&t.filter)}addSheetFromData(e,t){let n=this.sheets.length+1;return this.sheets.push({id:n,name:this.escapeXml(t||`Sheet`+n),data:e}),this}generate(){let e=[{name:`xl/styles.xml`,xml:`<styleSheet xmlns="${ns}" xmlns:mc="${ts}/markup-compatibility/2006"><numFmts count="${as.length}">${as.map(e=>`<numFmt numFmtId="${e.id}" formatCode="${e.code}" />`)}</numFmts><fonts count="2"><font><sz val="10.0"/><color rgb="FF000000"/><name val="Arial"/></font><font><b/></font></fonts><fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="lightGray"/></fill></fills><borders count="1"><border><left/><right/><top/><bottom/></border></borders><cellStyleXfs count="1"><xf borderId="0" fillId="0" fontId="0" numFmtId="0" applyAlignment="1" applyFont="1"/></cellStyleXfs><cellXfs><xf borderId="0" fillId="0" fontId="0" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment/></xf><xf borderId="0" fillId="0" fontId="1" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment/></xf><xf borderId="0" fillId="0" fontId="0" numFmtId="164" xfId="0" applyAlignment="1" applyFont="1" applyNumberFormat="1"><alignment /></xf><xf borderId="0" fillId="0" fontId="0" numFmtId="165" xfId="0" applyAlignment="1" applyFont="1" applyNumberFormat="1"><alignment /></xf></cellXfs><cellStyles count="1"><cellStyle xfId="0" name="Normal" builtinId="0"/></cellStyles><dxfs count="0"/></styleSheet>`},{name:`xl/sharedStrings.xml`,xml:`<sst xmlns="${ns}" count="2" uniqueCount="2"><si><t>text here</t></si></sst>`},{name:`xl/workbook.xml`,xml:`<workbook xmlns="${ns}" xmlns:r="${is}"><workbookPr/><sheets>`+this.sheets.map(e=>`<sheet state="visible" name="${e.name}" sheetId="${e.id}" r:id="rId${e.id+2}"/>`).join(``)+`</sheets><definedNames/><calcPr/></workbook>`},{name:`xl/_rels/workbook.xml.rels`,xml:`<Relationships xmlns="${rs}/relationships"><Relationship Id="rId1" Type="${is}/styles" Target="styles.xml" /><Relationship Id="rId2" Type="${is}/sharedStrings" Target="sharedStrings.xml"/>`+this.sheets.map(e=>`<Relationship Id="rId${e.id+2}" Type="${is}/worksheet" Target="worksheets/sheet${e.id}.xml"/>`).join(``)+`</Relationships>`},{name:`[Content_Types].xml`,xml:`<Types xmlns="${rs}/content-types"><Default ContentType="application/xml" Extension="xml"/><Default ContentType="application/vnd.openxmlformats-package.relationships+xml" Extension="rels"/>`+this.sheets.map(e=>`<Override ContentType="${es}.worksheet+xml" PartName="/xl/worksheets/sheet${e.id}.xml"/>`).join(``)+`<Override ContentType="${es}.sharedStrings+xml" PartName="/xl/sharedStrings.xml"/><Override ContentType="${es}.styles+xml" PartName="/xl/styles.xml" /><Override ContentType="${es}.sheet.main+xml" PartName="/xl/workbook.xml"/></Types>`},{name:`_rels/.rels`,xml:`<Relationships xmlns="${rs}/relationships"><Relationship Id="rId1" Type="${is}/officeDocument" Target="xl/workbook.xml"/></Relationships>`}],t=this.sheets.map(e=>{let t=0,n=e.data.map((e,n)=>{let r=this.frozen&&n===0?` s="1"`:``;e.length>t&&(t=e.length);let i=e.map((e,t)=>{let i=this.colName(t)+(n+1);return typeof e==`number`?`<c r="${i}"${r}><v>${e}</v></c>`:e instanceof Date?`<c s="${e.getHours()||e.getMinutes()||e.getSeconds()?3:2}"><v>${this.dateToExcelDate(e)}</v></c>`:`<c t="inlineStr"${r}><is><t>${this.escapeXml(e.toString())}</t></is></c>`});return`<row r="${n+1}">${i.join(``)}</row>`});return{name:`xl/worksheets/sheet${e.id}.xml`,xml:`<worksheet xmlns="${ns}"><sheetViews><sheetView workbookViewId="0"`+(this.frozen?` tabSelected="1"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView>`:`/>`)+`</sheetViews><sheetFormatPr customHeight="1" defaultColWidth="17.5" defaultRowHeight="15.75"/><sheetData>${n.join(``)}</sheetData>`+(this.autoFilter?`<autoFilter ref="A1:${this.colName(t)}${e.data.length}"/>`:``)+`</worksheet>`}}),n=new Zo(this._filename,!1);return[...e,...t].forEach(e=>n.addFileFromString(e.name,e.xml)),this.buffer=n.generate(),this.buffer}colName(e){return e<26?String.fromCharCode(e+65):String.fromCharCode(Math.floor(e/26+64))+String.fromCharCode(Math.floor(e%26+65))}escapeXml(e){return e.replace(/[<>&'"]/gu,e=>[`&lt;`,`&gt;`,`&amp;`,`&apos;`,`&quot;`][`<>&'"`.indexOf(e)])}dateToExcelDate(e){let t=60*1e3;return t*60*24,25569+(e.getTime()-e.getTimezoneOffset()*t)/864e5}}})),cs=e((()=>{ss(),$o(),Yo()})),ls=e((()=>{T(),D()})),us=e((()=>{T(),D()})),ds=e((()=>{T(),D()})),fs=e((()=>{T(),D()})),ps=e((()=>{T(),D()})),ms,hs=e((()=>{T(),D(),a(),ms=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>S`
  <svg
    slot=${s(e)}
    class=${`announcement-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${r}
    height=${i}
    style=${s(a)}
  >
    ${c(t,()=>se`<title>${t}</title>`)}
    <path
      d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"
    />
  </svg>
`})),gs=e((()=>{T(),D()})),_s=e((()=>{T(),D()})),vs=e((()=>{T(),D()})),ys=e((()=>{T(),D()})),bs=e((()=>{T(),D()})),xs=e((()=>{T(),D()})),Ss=e((()=>{T(),D()})),Cs=e((()=>{T(),D()})),ws=e((()=>{T(),D()})),Ts=e((()=>{T(),D()})),Es,Ds=e((()=>{T(),D(),a(),Es=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>S`
  <svg
    slot=${s(e)}
    class=${`delete-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${r}
    height=${i}
    style=${s(a)}
  >
    ${c(t,()=>se`<title>${t}</title>`)}
    <path
      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
    />
  </svg>
`})),Os=e((()=>{T(),D()})),ks=e((()=>{T(),D()})),As=e((()=>{T(),D()})),js,Ms=e((()=>{T(),D(),a(),js=({slot:e,title:t,className:n,width:r=`24`,height:i=`24`,styles:a}={})=>S`
  <svg
    slot=${s(e)}
    class=${`error-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${r}
    height=${i}
    style=${s(a)}
  >
    ${c(t,()=>se`<title>${t}</title>`)}
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
    />
  </svg>
`})),Ns=e((()=>{T(),D()})),Ps=e((()=>{T(),D()})),Fs=e((()=>{T(),D()})),Is=e((()=>{T(),D()})),Ls=e((()=>{T(),D()})),Rs=e((()=>{T(),D()})),zs=e((()=>{T(),D()})),Bs=e((()=>{T(),D()})),Vs=e((()=>{T(),D()})),Hs=e((()=>{T(),D()})),Us=e((()=>{T(),D()})),Ws=e((()=>{T(),D()})),Gs=e((()=>{T(),D()})),Ks=e((()=>{T(),D()})),qs=e((()=>{T(),D()})),Js=e((()=>{T(),D()})),Ys=e((()=>{T(),D()})),Xs=e((()=>{T(),D()})),Zs=e((()=>{T(),D()})),Qs=e((()=>{T(),D()})),$s=e((()=>{T(),D()})),ec=e((()=>{T(),D()})),tc=e((()=>{T(),D()})),nc=e((()=>{T(),D()})),rc=e((()=>{T(),D()})),ic=e((()=>{T(),D()})),ac=e((()=>{T(),D()})),oc=e((()=>{T(),D()})),sc=e((()=>{T(),D()})),cc=e((()=>{T(),D()})),lc=e((()=>{T(),D()})),uc=e((()=>{T(),D()})),dc=e((()=>{T(),D()})),fc=e((()=>{T(),D()})),pc=e((()=>{T(),D()})),mc=e((()=>{T(),D()})),hc=e((()=>{T(),D()})),gc=e((()=>{T(),D()})),_c=e((()=>{T(),D()})),vc=e((()=>{T(),D()})),yc=e((()=>{T(),D()})),bc=e((()=>{T(),D()})),xc=e((()=>{T(),D()})),Sc=e((()=>{T(),D()})),Cc=e((()=>{T(),D()})),wc=e((()=>{ls(),us(),ds(),fs(),ps(),hs(),gs(),_s(),vs(),ys(),bs(),xs(),Ss(),Cs(),ws(),Ts(),Ds(),Os(),ks(),As(),Ms(),Ns(),Ps(),Fs(),Is(),Ls(),Rs(),zs(),Bs(),Vs(),Hs(),Us(),Ws(),Gs(),Ks(),qs(),Js(),Ys(),Xs(),Zs(),Qs(),$s(),ec(),tc(),nc(),rc(),ic(),ac(),oc(),sc(),cc(),lc(),uc(),dc(),fc(),pc(),mc(),hc(),gc(),_c(),vc(),yc(),bc(),xc(),Sc(),Cc()})),Tc,Ec=e((()=>{x(),Tc=n`
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
`})),Dc,Oc=e((()=>{Ec(),x(),Dc=n`
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

		/* Medium (md) - default size */
		height: 40px;
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);

		/* Primary - default variant */
		${Tc}
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
`})),kc,Ac,jc=e((()=>{i(),x(),Oc(),kc=[`variant`,`size`,`disabled`,`full-width`,`type`],Ac=e=>{let t=e.hasAttribute(`disabled`),n=e.getAttribute(`type`)||`button`;return d(()=>{let t=t=>{e.hasAttribute(`disabled`)&&t.stopImmediatePropagation()};return e.addEventListener(`click`,t,{capture:!0}),()=>e.removeEventListener(`click`,t,{capture:!0})},[]),S`
		<button type=${n} class="button" ?disabled=${t} part="button">
			<slot name="prefix"></slot>
			<slot></slot>
			<slot name="suffix"></slot>
		</button>
	`},customElements.define(`cosmoz-button`,E(Ac,{observedAttributes:kc,styleSheets:[o,Dc],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),Mc=e((()=>{jc()})),Nc,Pc,Fc=e((()=>{ge(),Nc=(e,t)=>{Object.assign(e.style,{display:t?``:`none`})},Pc=class extends HTMLElement{static get observedAttributes(){return[`opened`]}toggle=he(`height`);constructor(){super();let e=new CSSStyleSheet;e.replaceSync(`
      :host { display: block; overflow: hidden; }
		`);let t=this.attachShadow({mode:`open`});t.appendChild(document.createElement(`slot`)),t.adoptedStyleSheets=[e]}connectedCallback(){Nc(this,this.getAttribute(`opened`)!=null)}attributeChangedCallback(e,t,n){switch(e){case`opened`:{let e=n!=null;return this.isConnected?this.toggle(this,e):Nc(this,e)}}}},customElements.define(`cosmoz-collapse`,Pc)})),Ic=e((()=>{Fc(),ge()}));export{Pa as A,Sr as B,Wa as C,Ia as D,Ba as E,ha as F,on as G,Tn as H,_a as I,Lr as L,Na as M,va as N,Ra as O,ya as P,Fr as R,Ya as S,Ua as T,ln as U,xr as V,dn as W,Mo as _,Es as a,po as b,os as c,Ro as d,Lo as f,Po as g,Fo as h,js as i,Fa as j,za as k,Go as l,Io as m,Mc as n,ms as o,No as p,wc as r,cs as s,Ic as t,Wo as u,Co as v,Ha as w,ro as x,ho as y,J as z};