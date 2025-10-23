import{x as m,B as Ie,E as Ve}from"./iframe-t8JveX5x.js";import{t as K,c as L,g as S,P as E,u as M,a as ht,m as ft,s as Mt,b as jt,d as be,i as xe,p as pe,n as D,e as Nt,D as Pt,f as Bt,h as Gt,j as ve,k as Ee,o as ye,l as I,q as Ht,r as Wt,v as qt,T as Xt,w as Ut,x as A,y as Kt,z as Jt,A as Yt,B as $,C as Qt,E as Zt,F as bt,G as Ae,H as _,I as xt,J as Le,K as en,L as vt,N as tn,M as nn,O as Te,Q as on,R as Re,S as rn,U as an,V as Fe,W as Me,X as ln,Y as Oe,Z as P,_ as sn,$ as ze,a0 as un}from"./cosmoz-collapse-Dbke1liB.js";import"./preload-helper-PPVm8Dsz.js";const cn=K`
	:host {
		display: flex;
	}
	:host(:not([light])) {
		position: absolute;
		right: 0;
		z-index: +1;
	}

	:host(:not([visible])) {
		display: none !important;
	}

	.icon {
		fill: currentColor;
	}

	:host([light]) {
		flex: 0 0 24px;
	}

	:host(:not([light])) .icon {
		top: 10px;
		margin: 2px 7px;
		color: #cdcdcd;
		background-color: #a6a6a6;
		border-radius: 500px;
		cursor: pointer;
		min-width: 16px;
		width: 16px !important;
		min-height: 16px;
		height: 16px;
		padding: 2px;
		box-sizing: border-box;
		transition:
			background-color 0.25s,
			color 0.25s;
		float: right;
	}

	:host(:not([light])) .icon:hover {
		background-color: #b0b0b0;
		color: #dfdfdf;
	}
`,dn=()=>m`
	<style>
		${cn}
	</style>
	<svg
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
		class="icon"
	>
		<g>
			<path
				d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
			></path>
		</g>
	</svg>
`;customElements.define("cosmoz-clear-button",L(dn));const U=({valuePath:n},e)=>S(e,n),mn=U,pn=U,gn=({valuePath:n},e)=>t=>{const o=S(t,n);return o==null?!1:o.toString().toLowerCase().trim().includes(e.toLowerCase().trim())},hn=(n,e)=>e===""||e==null?null:e,j=n=>class extends n{static get properties(){return{isOmnitableColumn:{type:Boolean,value:!0},title:{type:String},valuePath:{type:String,notify:!0},values:{type:Array,notify:!0},filter:{type:Object},noLocalFilter:{type:Boolean},disabled:{type:Boolean,value:!1,notify:!0},editable:{type:Boolean,notify:!0},loading:{type:Boolean,value:!1,notify:!0},externalValues:{type:Boolean,value:!1,notify:!0},name:{type:String},sortOn:{type:String},groupOn:{type:String},width:{type:String,value:"75px"},minWidth:{type:String,value:"40px"},flex:{type:String,value:"1"},cellClass:{type:String,value:"default-cell"},headerCellClass:{type:String,value:"default-header-cell"},priority:{type:Number,value:0},hidden:{type:Boolean,notify:!0},preferredDropdownHorizontalAlign:{type:String,value:"right"},renderHeader:{type:Function},renderCell:{type:Function},renderEditCell:{type:Function},renderGroup:{type:Function},mini:{type:Number,value:null},renderMini:{type:Function}}}static get observers(){return["notifyFilterChange(filter)"]}notifyFilterChange(e){this.__ownChange||this.dispatchEvent(new CustomEvent("legacy-filter-changed",{detail:{name:this.name,state:this.legacyFilterToState(e)},bubbles:!0}))}legacyFilterToState(e){return{filter:e}}getFilterFn(){}getString(e,t){return U(e,t)}toXlsxValue(e,t){return mn(e,t)}cellTitleFn(e,t){return this.getString(e,t)}headerTitleFn(e){return e.title}serializeFilter(e,t){return hn(e,t)}deserializeFilter(e,t){return t==null?null:typeof t=="string"?window.decodeURIComponent(t):t}getComparableValue(e,t){return pn(e,t)}computeSource(e,t){return t}_propertiesChanged(e,t,o){super._propertiesChanged(e,t,o),this.dispatchEvent(new CustomEvent("cosmoz-column-prop-changed",{bubbles:!0}))}},fn=n=>e=>n(t=>{if(t.inputValue===void 0&&e.target.value==="")return t;clearTimeout(t.t);const o=setTimeout(()=>n(r=>({...r,filter:r.inputValue})),1e3);return{...t,inputValue:e.target.value,t:o}}),bn=n=>()=>n(e=>({...e,filter:e.inputValue})),xn=n=>e=>{e.keyCode===13&&(e.preventDefault(),n(t=>({...t,filter:t.inputValue})))},vn=n=>e=>n(t=>({...t,headerFocused:e.detail.value})),yn=n=>()=>n(e=>({...e,filter:null,inputValue:null})),$n=n=>n!=null&&n!=="";class wn extends j(E){static get properties(){return{minWidth:{type:String,value:"55px"},editMinWidth:{type:String,value:"55px"},inputValue:{type:Object,notify:!0}}}getFilterFn(e,t){if(!(t==null||t===""))return gn(e,t)}renderCell(e,{item:t}){return m`<span class="default-column">${U(e,t)}</span>`}renderEditCell(e,{item:t},o){return m`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>o(i.target.value)}
			.value=${U(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,inputValue:o,headerFocused:r},i){return m`<cosmoz-input
			label=${e.title}
			.value=${o??t}
			@value-changed=${fn(i)}
			focused=${r}
			@focused-changed=${vn(i)}
			@keydown=${xn(i)}
			@blur=${bn(i)}
		>
			<cosmoz-clear-button
				suffix
				slot="suffix"
				?visible=${$n(t)}
				light
				@click=${yn(i)}
			></cosmoz-clear-button>
		</cosmoz-input>`}legacyFilterToState(e){return{filter:e,inputValue:e}}}customElements.define("cosmoz-omnitable-column",wn);const B=Symbol("column"),zn=n=>{let e=!0;const t=n.map(o=>o.name);return n.forEach(o=>{o.name==null&&(e=!1,console.error("The name attribute needs to be set on all columns! Missing on column",o))}),n.forEach(o=>{t.indexOf(o.name)!==t.lastIndexOf(o.name)&&(e=!1,console.error("The name attribute needs to be unique among all columns! Not unique on column",o))}),e},Sn=n=>{const e=n.valuePath??n.name;return{name:n.name,title:n.title,valuePath:e,groupOn:n.groupOn??e,sortOn:n.sortOn??e,minWidth:n.minWidth,width:n.width,flex:n.flex,priority:n.priority,getString:n.getString,getComparableValue:n.getComparableValue,serializeFilter:n.serializeFilter,deserializeFilter:n.deserializeFilter,toXlsxValue:n.toXlsxValue,renderHeader:n.renderHeader,renderCell:n.renderCell,renderEditCell:n.renderEditCell,renderGroup:n.renderGroup,cellTitleFn:n.cellTitleFn,headerTitleFn:n.headerTitleFn,getFilterFn:n.getFilterFn,headerCellClass:n.headerCellClass,cellClass:n.cellClass,editable:n.editable,values:n.values,source:ft(n.computeSource),noLocalFilter:n.noLocalFilter,mini:n.mini,renderMini:n.renderMini,loading:n.loading,externalValues:n.externalValues,computeSource:n.computeSource,trueLabel:n.trueLabel,falseLabel:n.falseLabel,valueProperty:n.valueProperty,textProperty:n.textProperty,emptyLabel:n.emptyLabel,emptyValue:n.emptyValue,min:n.min,max:n.max,locale:n.locale,autoupdate:n.autoupdate,maximumFractionDigits:n.maximumFractionDigits,minimumFractionDigits:n.minimumFractionDigits,currency:n.currency,rates:n.rates,autodetect:n.autodetect,ownerTree:n.ownerTree,keyProperty:n.keyProperty,...n.getConfig?.(n),[B]:n}},Cn=n=>n.isOmnitableColumn&&!n.hidden,kn=n=>{const e=n.assignedElements({flatten:!0}).filter(Cn);return zn(e)?e:[]},_n=(n,e)=>(Array.isArray(e)?n.filter(o=>e.includes(o.name)):n.filter(o=>!o.disabled)).map(Sn),In=(n,{enabledColumns:e})=>{const[t,o]=M([]);return ht(()=>{let r;const i=n.shadowRoot.querySelector("#columnsSlot"),a=()=>{o(_n(kn(i),e))},l=()=>{cancelAnimationFrame(r),r=requestAnimationFrame(a)};return l(),i.addEventListener("slotchange",l),n.addEventListener("cosmoz-column-prop-changed",l),()=>{i.removeEventListener("slotchange",l),n.removeEventListener("cosmoz-column-prop-changed",l),cancelAnimationFrame(r)}},[e]),t},yt=(n,e)=>Array.isArray(n)?n.map(t=>S(t,e)).filter((t,o,r)=>t!=null&&r.indexOf(t)===o):void 0,Q=({externalValues:n,values:e,valuePath:t},o)=>{if(n)return n;if(typeof e=="function")return e;if(t!==void 0)return yt(o,t)},Fn=(n,e,t,o)=>{const{valuePath:r}=e,i=r!==void 0?S(t,r):void 0;if(o===i)return;r!==void 0&&Mt(t,r,o);const a={item:t,valuePath:r,value:o,oldValue:i,column:e[B]};n.dispatchEvent(new CustomEvent("column-item-changed",{bubbles:!0,composed:!0,detail:a}))},T=(n,e,t)=>{if(n==null||n==="")return;const o=typeof n=="number"?n:Number(n);if(!Number.isNaN(o))return o},$t=n=>{const e=T(n);return e==null?null:e.toString()},On=({valuePath:n},e)=>{const t=T(n?S(e,n):e);return $t(t)},Je=n=>{const e=$t(n);return e??""},W=({valuePath:n,maximumFractionDigits:e},t)=>{if(t==null)return;const o=n?S(t,n):t,r=T(o);if(r!=null)return e!==null?T(r.toFixed(e)):r},Dn=jt((n,e,t)=>{const o={localeMatcher:"best fit"};return e!==null&&(o.minimumFractionDigits=e),t!==null&&(o.maximumFractionDigits=t),new Intl.NumberFormat(n||void 0,o)}),Ye=({valuePath:n,locale:e,minimumFractionDigits:t,maximumFractionDigits:o},r)=>{const i=n?S(r,n):r;if(i==null)return"";const a=T(i);return a==null?void 0:Dn(e,t,o).format(a)},Vn=(n,e)=>t=>{const o=W(n,t);if(o==null)return!1;const r=W({...n,valuePath:"min"},e),i=W({...n,valuePath:"max"},e);return!(o<(r??-1/0)||o>(i??1/0))},Y=(n={},e,t,o)=>{if(e==null||e==="")return;if(typeof e!="object"||e.currency==null||e.currency==="")return null;const r=T(e.amount);return r==null||Number.isNaN(r)?null:{currency:e.currency,amount:r}},q=({valuePath:n,rates:e},t)=>{if(t==null)return;let o=t;n!=null&&(o=S(t,n));const r=Y(e,o);if(r==null)return;const i=T(r.amount);return e==null||i==null?i:i*(e?.[r.currency]||1)},En=(n,e)=>t=>{const o=q(n,t);if(o===void 0)return!1;const r=q({...n,valuePath:"min"},e),i=q({...n,valuePath:"max"},e);return r===void 0||i===void 0?!0:!(o<r||o>i)},Z={},An=(n,e)=>{const o=n+(e||"")||"";return Z[o]||(Z[o]=new Intl.NumberFormat(e||void 0,{style:"currency",currency:n})),Z[o]},Ln=(n,e,t)=>{const o=Y(n,e);return o==null?"":An(o.currency,t).format(o.amount)},Qe=({valuePath:n,rates:e,locale:t},o)=>{const r=Y(e,n?S(o,n):void 0);return r===void 0?"":r===null?"Invalid value":Ln(e,r,t)},Ze=n=>n?n.amount+n.currency:"",et=n=>{if(n==null||n==="")return;const e=n.match(/^(-?[\d]+)([\D]+?)$/iu);if(!(!Array.isArray(e)||e.length<0))return{amount:Number(e[1]),currency:e[2]}},Tn=({valuePath:n},e)=>n?S(e,n)?.currency:null,Rn=({valuePath:n},e)=>n?S(e,n)?.amount:void 0;class Mn extends j(E){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},currency:{type:String,notify:!0},autodetect:{type:Boolean,value:!1,notify:!0},rates:{type:Object,notify:!0},width:{type:String,value:"70px"},cellClass:{type:String,value:"amount-cell align-right"},headerCellClass:{type:String,value:"amount-header-cell"}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const o=q({...e,valuePath:"min"},t),r=q({...e,valuePath:"max"},t);if(!(o==null&&r==null))return En(e,t)}getString(e,t){return Qe(e,t)}toXlsxValue(e,t){return Qe(e,t)}getComparableValue(e,t){return q(e,t)}serializeFilter({rates:e},t){if(t==null)return;const o=Y(e,t.min),r=Y(e,t.max);if(!(o==null&&r==null))return Ze(o)+"~"+Ze(r)}deserializeFilter(e,t){if(t==null||t==="")return null;const o=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(o)?{min:et(o[1]),max:et(o[2])}:null}renderCell(e,{item:t}){return m`<span>${e.getString(e,t)}</span>`}renderEditCell(e,{item:t},o){return m`<cosmoz-input
			no-label-float
			type="number"
			@change=${i=>o({amount:i.target.value,currency:S(t,e.valuePath)?.currency})}
			.value=${Rn(e,t)}
		>
			<div slot="suffix">${Tn(e,t)}</div>
		</cosmoz-input>`}renderHeader({title:e,min:t,max:o,limits:r,locale:i,rates:a,currency:l,autoupdate:u,autodetect:s},{filter:c},d,h){return m`<cosmoz-omnitable-amount-range-input
			.title=${e}
			.filter=${c}
			.values=${h}
			.rates=${a}
			.min=${t}
			.max=${o}
			.limits=${r}
			.locale=${i}
			.currency=${l}
			.autoupdate=${u}
			.autodetect=${s}
			@filter-changed=${({detail:{value:p}})=>d(z=>({...z,filter:p}))}
			@header-focused-changed=${({detail:{value:p}})=>d(z=>({...z,headerFocused:p}))}
		></cosmoz-omnitable-amount-range-input>`}computeSource(e,t){return Q(e,t)}}customElements.define("cosmoz-omnitable-column-amount",Mn);const jn=(n,e)=>{if(!Array.isArray(n))return;const t=[];return n.reduce((o,r)=>Array.isArray(r)?(r.forEach(i=>{o.push(i)}),o):(o.push(r),o),[]).filter((o,r,i)=>{if(i.indexOf(o)!==r)return!1;if(e){const a=S(o,e);if(t.indexOf(a)!==-1)return!1;t.push(a)}return!0})},Nn=(n,e,t)=>{if(n==null)return[];if(Array.isArray(n))return jn(n,e);if(typeof n=="object"){const o=e??"id",r=t??"label";return Object.entries(n).map(([i,a])=>({[o]:i,[r]:a})).sort((i,a)=>i[r]<a[r]?-1:i[r]>a[r]?1:0)}return[]},je=(n,e,t)=>be(e&&S(n,e)).map(pe(t)),Ne=({valuePath:n,textProperty:e},t)=>je(t,n,e).filter(o=>o!=null).join(", "),Pn=Ne,Bn=({valueProperty:n,valuePath:e,emptyValue:t,emptyProperty:o},r)=>i=>{const a=pe(n),l=be(S(i,e));return r.some(u=>l.length===0&&pe(o||n)(u)===t||l.some(s=>a(s)===a(u)))},Pe=n=>e=>n(t=>({...t,filter:e})),Be=n=>e=>n(t=>({...t,headerFocused:e})),Ge=n=>e=>n(t=>({...t,query:e})),wt=({emptyValue:n,emptyLabel:e,emptyProperty:t,textProperty:o,valueProperty:r},i)=>{const a=Nn(i,r,o);return!e||n===void 0||!o||!(t||r)||!a?a:[{[o]:e,[t||r]:n},...a]},Gn=(n,e)=>wt(n,yt(e,n.valuePath)),He=n=>class extends n{static get properties(){return{textProperty:{type:String},valueProperty:{type:String},emptyLabel:{type:String},emptyValue:{type:Object},emptyProperty:{type:String}}}getConfig(e){return{emptyProperty:e.emptyProperty}}getString(e,t){return Ne(e,t)}toXlsxValue(e,t){return Pn(e,t)}getComparableValue({valuePath:e,valueProperty:t},o){const r=S(o,e);return t==null?r:be(r).reduce((a,l)=>(a.push(S(l,t)),a),[]).sort().join(" ")}getFilterFn(e,t){if(!(!t||!Array.isArray(t)||t.length===0))return Bn(e,t)}serializeFilter(e,t){return t.length===0?null:JSON.stringify(t)}deserializeFilter(e,t){return JSON.parse(decodeURIComponent(t))}computeSource(e,t){return e.externalValues||typeof e.values=="function"?async(...o)=>wt(e,await Promise.resolve(xe(e.values,...o))):Gn(e,t)}},Hn=({valuePath:n,textProperty:e,valueProperty:t},o)=>{const r=e?Nt(e):pe(t),i=be(n&&S(o,n)).map(r);return i.length>1?i.filter(Boolean).join(","):i[0]};class Wn extends He(j(E)){static get properties(){return{headerCellClass:{type:String,value:"autocomplete-header-cell"},minWidth:{type:String,value:"55px"},editMinWidth:{type:String,value:"55px"},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return m`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},o){return m`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>o(i.target.value)}
			.value=${U(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:o},r,i){return m`<cosmoz-autocomplete-ui
			class="external-values-${e.externalValues}"
			?keep-opened=${e.keepOpened}
			?keep-query=${e.keepQuery}
			?show-single=${e.showSingle}
			?preserve-order=${e.preserveOrder}
			.textual=${e.textual}
			.label=${e.title}
			.source=${i}
			.textProperty=${e.textProperty}
			.valueProperty=${e.valueProperty}
			.itemRenderer=${e[B]?.itemRenderer}
			.value=${t}
			.text=${o}
			.limit=${e.limit}
			.onChange=${Pe(r)}
			.onFocus=${Be(r)}
			.onText=${Ge(r)}
			>${D(e.loading,()=>m`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}getComparableValue(e,t){return Hn(e,t)}}customElements.define("cosmoz-omnitable-column-autocomplete",Wn);const We=(n,e)=>e.find(({value:t})=>n===t),qn=(n,e,t)=>{const o=We(e,t);return o?o.text:n},tt=(n,e,t,o)=>qn(n,S(e,t),o),Xn=({valuePath:n},e,t)=>We(S(e,n),t),Un=n=>e=>{n(t=>({...t,filter:e?.[0]?.value??null}))},Kn=n=>e=>{n(t=>({...t,headerFocused:e}))},Jn=n=>e=>{n(t=>({...t,query:e}))},Yn=n=>e=>n(e?.[0]?.value),nt=({valuePath:n,trueLabel:e,falseLabel:t},o)=>S(o,n)?e:t,Qn=({valuePath:n},e)=>t=>S(t,n)===e,ee=ft((n,e)=>[{text:n,value:!0},{text:e,value:!1}]),Zn=({valuePath:n,trueLabel:e,falseLabel:t},o)=>n?S(o,n)?e:t:"",eo=(n,e)=>{try{return JSON.parse(e)}catch{return null}};class to extends j(E){static get properties(){return{trueLabel:{type:String,value:"True"},falseLabel:{type:String,value:"False"},flex:{type:String,value:"0"},cellClass:{type:String,value:"boolean-cell"}}}getString(e,t){return nt(e,t)}renderCell(e,{item:t}){return nt(e,t)}renderEditCell(e,{item:t},o){const{trueLabel:r,falseLabel:i}=e;return m`<cosmoz-autocomplete
			no-label-float
			.title=${tt(e.title,t,e.valuePath,ee(r,i))}
			.source=${ee(r,i)}
			.textProperty=${"text"}
			.value=${Xn(e,t,ee(r,i))}
			.onChange=${Yn(o)}
			.limit=${1}
			>${D(e.loading,()=>m`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete
		>`}renderHeader(e,{filter:t,query:o},r,i){return m`<cosmoz-autocomplete-ui
			.label=${e.title}
			.title=${tt(e.title,t,e.valuePath,i)}
			.source=${i}
			.textProperty=${"text"}
			.value=${We(t,i)}
			.text=${o}
			.onChange=${Un(r)}
			.onFocus=${Kn(r)}
			.onText=${Jn(r)}
			.limit=${1}
			>${D(e.loading,()=>m`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}computeSource({trueLabel:e,falseLabel:t}){return ee(e,t)}getFilterFn(e,t){if(t!=null)return Qn(e,t)}toXlsxValue(e,t){return Zn(e,t)}deserializeFilter(e,t){return eo(e,t)}}customElements.define("cosmoz-omnitable-column-boolean",to);const zt=n=>n?typeof n.close=="function"?n:zt(n.parentElement):null,St=n=>class extends n{static get properties(){return{filter:{type:Object,notify:!0},values:{type:Array,value(){return[]}},headerFocused:{type:Boolean,notify:!0},min:{type:Number,value:null},max:{type:Number,value:null},limits:{type:Function},autoupdate:{type:String,value:!0},locale:{type:String,value:null},_filterInput:{type:Object,value(){return{min:null,max:null}}},_range:{type:Object,computed:"_computeRange(values.*)"},_limit:{type:Object,computed:"_computeLimit(_range, _filterInput.*, min, max)",value(){return{}}},_tooltip:{type:String,computed:"_computeTooltip(title, _filterText)"},_fromClasses:{type:String,computed:"_computeInputClasses(_filterInput.min)"},_toClasses:{type:String,computed:"_computeInputClasses(_filterInput.max)"}}}static get observers(){return["_filterInputChanged(_filterInput.*, autoupdate)","_filterChanged(filter.*)","_updateLimits(limits, headerFocused)"]}disconnectedCallback(){this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),super.disconnectedCallback()}_computeInputClasses(e){return e!=null&&e!==""?"has-value":""}toNumber(e,t,o){if(e==null||e==="")return;const r=typeof e=="number"?e:Number(e);if(Number.isNaN(r))return;if(o==null||t==null)return r;const i=this.toNumber(t);return i==null?r:o(r,i)}toValue(){return this.toNumber.apply(this,arguments)}getComparableValue(e,t){if(e==null)return;let o=e;return t!=null&&(o=this.get(t,e)),this.toValue(o)}renderValue(){}getInputString(e,t=this.valuePath){const o=this.toValue(this.get(t,e));return this._toInputString(o)}_computeRange(e){const t=e.base,o=Array.isArray(t)&&t.length&&t.map(r=>this.toValue(r)).filter(r=>r!=null);return!o||o.length<1?{min:null,max:null}:o.reduce((r,i)=>({min:this.toValue(i,r.min,Math.min),max:this.toValue(i,r.max,Math.max)}),{})}_computeLimit(e,t,o,r){if(!e)return;const i=t.base,a=this.toValue(o),l=this.toValue(r),u=a??this.toValue(e.min),s=l??this.toValue(e.max);return{fromMin:u,fromMax:this.toValue(s,this._fromInputString(i.max,"max"),Math.min),toMin:this.toValue(u,this._fromInputString(i.min,"min"),Math.max),toMax:s}}_computeFilterText(e){if(e.base==null)return;const t=e.base,o=this.toValue(t.min),r=this.toValue(t.max),i=[];return o!=null&&i.push(this.renderValue(o)),i.push(" - "),r!=null&&i.push(this.renderValue(r)),i.length>1?i.join(""):void 0}_computeTooltip(e,t){return t==null?e:`${e}: ${t}`}_fromInputString(e){return this.toValue(e)}_toInputString(e){const t=this.toValue(e);return t??null}_getDefaultFilter(){return{min:null,max:null}}_filterInputChanged(e,t){const o=e.path.split(".")[1];this.__inputChangePath=o||null,t&&(this._limitInputDebouncer=Pt.debounce(this._limitInputDebouncer,Bt.after(600),()=>{this._limitInput(),this._updateFilter()}),Gt(this._limitInputDebouncer))}_clearFrom(){this.set("_filterInput.min",null),this._updateFilter()}_clearTo(){this.set("_filterInput.max",null),this._updateFilter()}_onBlur(){this._limitInput(),this._updateFilter()}_onKeyDown(e){const t=e.currentTarget,o=Array.from(t.parentElement.querySelectorAll("cosmoz-input")),r=o[o.findIndex(l=>l===t)+1],i=!r,a=o[0]===t;switch(e.keyCode){case 13:if(e.preventDefault(),!i)r.focus();else{const l=this._limitInput();this._updateFilter(),l||this._closeParent(t)}break;case 9:(i&&!e.shiftKey||a&&e.shiftKey)&&this._closeParent(t)}}_closeParent(e){const t=zt(e);t&&t.close()}_onDropdownOpenedChanged({currentTarget:e,type:t,detail:o}){(t==="focus"||o?.value===!0)&&setTimeout(()=>e.querySelector("cosmoz-input")?.focus(),100)}_limitInput(){const e=this._filterInput,t=this.__inputChangePath,o=t?this._fromInputString(this.get(t,e),t):null;if(this.__inputChangePath=null,o==null)return!1;const r=this._limit,i=t==="min"?"from":"to",a=this.get(i+"Min",r),l=this.get(i+"Max",r),u=this.toValue(o,a,Math.max),s=this.toValue(u,l,Math.min);return this.getComparableValue(o)!==this.getComparableValue(s)?(this.set(["_filterInput",t],this._toInputString(s,t)),this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),!0):!1}_updateFilter(){const e=this._filterInput,t=this.filter,o=this._fromInputString(e.min,"min"),r=this._fromInputString(e.max,"max");this.getComparableValue(o)===this.getComparableValue(t,"min")&&this.getComparableValue(r)===this.getComparableValue(t,"max")||this.set("filter",{min:o,max:r})}_filterChanged(e){if(this._filterInput==null)return;const t=this._filterInput,o=e.base,r=this._fromInputString(t.min,"min"),i=this._fromInputString(t.max,"max");this.getComparableValue(r)===this.getComparableValue(o,"min")&&this.getComparableValue(i)===this.getComparableValue(o,"max")||(this.set("_filterInput",{min:this._toInputString(o.min),max:this._toInputString(o.max)}),this._limitInputDebouncer&&this._limitInputDebouncer.cancel())}hasFilter(){const e=this.filter;return e==null?!1:this.toValue(e.min)!=null||this.toValue(e.max)!=null}resetFilter(){this.filter=this._getDefaultFilter()}_updateLimits(e,t){e&&Promise.resolve(xe(e,{active:t})).then(o=>{const{min:r,max:i}=o??{};Object.assign(this,{...r!=null?{min:r}:{},...i!=null?{max:i}:{}})})}},qe=n=>class extends St(n){static get properties(){return{max:{type:Date,value:null},min:{type:Date,value:null},_filterText:{type:String,computed:"_computeFilterText(filter.*, formatter)"},formatter:{type:Object,computed:"_computeFormatter(locale)"}}}toDate(e,t,o){if(e==null||e==="")return;let r=e;if(r instanceof Date||(typeof e=="string"&&(r=this.getAbsoluteISOString(r)),r=new Date(r)),Number.isNaN(r.getTime()))return null;if(o==null||t==null)return r;const i=this.toDate(t);if(i==null)return r;const a=this.getComparableValue(r),l=this.getComparableValue(i);return o(a,l)===a?r:i}toValue(){return this.toDate.apply(this,arguments)}getComparableValue(e,t){const o=super.getComparableValue(e,t);if(o!=null)return this.toNumber(o.getTime())}getString(e,t=this.valuePath,o=this.formatter){const r=this.toValue(this.get(t,e));return r===void 0?"":r===null?"Invalid Date":this.renderValue(r,o)}getAbsoluteISOString(e){return e.length===19?e+this._getTimezoneString(e):e}_getTimezoneString(e){const t=-new Date(e).getTimezoneOffset()/60;return(t<0?"-":"+")+["0",Math.abs(t)].join("").substr(-2)+":00"}renderValue(e,t=this.formatter){if(t==null)return;const o=this.toValue(e);if(o!=null)return t.format(o)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0)}_toInputString(e){const t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(0,10)}_dateValueChanged(e){const t=e.currentTarget,o=t.value,r=e.model.item,i=this.get(this.valuePath,r),a=this._fromInputString(o);this.set(this.valuePath,a,r),this._fireItemChangeEvent(r,this.valuePath,i,this.renderValue.bind(this))}_toLocalISOString(e){return ve(e)}},$e=n=>class extends n{static get template(){return Ee`<div id="output" style="position:relative;"></div>`}connectedCallback(){super.connectedCallback(),Ie(this.render(),this.$.output)}_propertiesChanged(e,t,o){super._propertiesChanged(e,t,o),requestAnimationFrame(()=>Ie(this.render(),this.$.output))}};class no extends qe($e(E)){render(){return m`
			<style>
				paper-dropdown-menu {
					--iron-icon-width: 0;
					display: block;
				}

				.dropdown-content h3 {
					font-weight: 500;
					font-size: 13px;
					margin: 0;
					font-family: var(
						--cosmoz-input-font-family,
						var(--paper-font-subhead_-_font-family, 'Inter', sans-serif)
					);
				}

				.dropdown-content {
					padding: 10px 10px 10px 10px;
					min-width: 120px;
					text-align: left;
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
					border-radius: 6px;
					backdrop-filter: blur(16px) saturate(180%);
					-webkit-backdrop-filter: blur(16px) saturate(180%);
					box-shadow:
						0 4px 24px 0 rgba(0, 0, 0, 0.18),
						0 1.5px 6px 0 rgba(0, 0, 0, 0.1);
				}

				cosmoz-input[type='date'] {
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
					border-radius: 6px;
					border: 1px solid #d1d1d6;
					box-shadow: 0 1px 2px 0 rgba(60, 60, 60, 0.04);
					padding: 2px 8px;
					margin-bottom: 6px;
					min-height: 28px;
					transition:
						border-color 0.2s,
						box-shadow 0.2s;
				}

				cosmoz-input[type='date']:focus-within {
					border-color: var(--cz-accent-color, #007aff);
					box-shadow: 0 0 0 1px rgba(0, 122, 255, 0.15);
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
				}
			</style>
			<cosmoz-clear-button
				@click=${()=>this.resetFilter()}
				?visible=${this.hasFilter()}
			></cosmoz-clear-button>
			<paper-dropdown-menu
				label=${this.title}
				placeholder=${ye(this._filterText)}
				class="external-values-${this.externalValues}"
				title=${this._tooltip}
				horizontal-align="right"
				?opened=${this.headerFocused}
				@opened-changed=${e=>{this.headerFocused=e.detail.value}}
			>
				<div class="dropdown-content" slot="dropdown-content">
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-input
						type="date"
						label=${I("From date")}
						min=${this._toInputString(this._limit.fromMin)}
						max=${this._toInputString(this._limit.fromMax)}
						.value=${this._filterInput?.min}
						@value-changed=${e=>this.set("_filterInput.min",e.detail.value)}
					></cosmoz-input>
					<cosmoz-input
						type="date"
						label=${I("Until date")}
						min=${this._toInputString(this._limit.toMin)}
						max=${this._toInputString(this._limit.toMax)}
						.value=${this._filterInput?.max}
						@value-changed=${e=>this.set("_filterInput.max",e.detail.value)}
					></cosmoz-input>
				</div>
			</paper-dropdown-menu>
		`}_fromInputString(e,t){const o=this.toDate(e);if(o!=null)return t==="min"&&o.setHours(0,0,0,0),t==="max"&&o.setHours(23,59,59),o}_filterInputChanged(e,t){const o=e.path.split(".")[1],r=o&&e.value;if(r&&r.match(/^0+/u)){this._limitInputDebouncer.cancel();return}super._filterInputChanged(e,t)}}customElements.define("cosmoz-omnitable-date-range-input",no);const oo=n=>{const e=-new Date(n).getTimezoneOffset()/60;return(e<0?"-":"+")+["0",Math.abs(e)].join("").substr(-2)+":00"},Xe=n=>n.length===19?n+oo(n):n,Ct=n=>{if(n==null||n==="")return;let e=n;return!(e instanceof Date)&&(typeof n=="string"&&(e=Xe(e)),e=Ht(e),!e)||Number.isNaN(e.getTime())?null:e},N=({valuePath:n},e)=>{if(e==null)return;let t=e;n!=null&&(t=S(e,n));const o=Ct(t);if(o!=null)return T(o.getTime())},V=(n,e,t)=>{const o=Ct(n);return o??null},Ue=(n,e)=>{if(e==null)return;const t=V(n);if(t!=null)return e.format(t)},te={},ro=n=>{const e=n||"";return te[e]||(te[e]=new Intl.DateTimeFormat(n||void 0)),te[e]},ot=({valuePath:n,locale:e},t)=>{let o=S(t,n||"");return o===void 0?"":(o=V(o),o===null?"Invalid Date":Ue(o,ro(e)))},kt=n=>{const e=V(n);if(e==null)return null;const t=ve(e);return t==null?null:t.slice(0,10)},io=({valuePath:n},e)=>kt(S(e,n||"")),_t=(n,e)=>{const t=V(n);if(t!=null)return t},rt=n=>{const e=kt(n);return e??""},ao=({valuePath:n},e)=>{if(!n)return"";const t=V(S(e,n));if(!t)return"";const o=V(ve(t));return o?(o.setHours(0,0,0,0),o):""},It=(n,e)=>t=>{const o=N(n,t);if(o==null)return!1;const r=N({...n,valuePath:"min"},e),i=N({...n,valuePath:"max"},e);return!(o<(r??-1/0)||o>(i??1/0))};class lo extends j(E){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"date-header-cell"},width:{type:String,value:"100px"},minWidth:{type:String,value:"82px"},flex:{type:String,value:"0"}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const o=N({...e,valuePath:"min"},t),r=N({...e,valuePath:"max"},t);if(!(o==null&&r==null))return It(e,t)}getString(e,t){return ot(e,t)}toXlsxValue(e,t){return ao(e,t)}getComparableValue(e,t){return N(e,t)}serializeFilter(e,t){if(t==null)return;const o=V(t.min),r=V(t.max);if(!(o==null&&r==null))return rt(o)+"~"+rt(r)}deserializeFilter(e,t){if(t==null||t==="")return null;const o=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(o)?{min:V(o[1]),max:V(o[2])}:null}renderCell(e,{item:t}){return m`<div class="omnitable-cell-date">
			${ot(e,t)}
		</div>`}renderEditCell(e,{item:t},o){return m`<cosmoz-input
			no-label-float
			type="date"
			@change=${i=>o(_t(i.target.value))}
			.value=${io(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:o,limits:r,locale:i},{filter:a},l,u){return m`<cosmoz-omnitable-date-range-input
			.title=${e}
			.filter=${a}
			.values=${u}
			.min=${t}
			.max=${o}
			.limits=${r}
			.locale=${i}
			@filter-changed=${({detail:{value:s}})=>l(c=>({...c,filter:s}))}
			@header-focused-changed=${({detail:{value:s}})=>l(c=>({...c,headerFocused:s}))}
		></cosmoz-omnitable-date-range-input>`}computeSource(e,t){return Q(e,t)}}customElements.define("cosmoz-omnitable-column-date",lo);class so extends He(j(E)){renderCell({valuePath:e,textProperty:t},{item:o}){const r=je(o,e,t).map(i=>m`<li>${i}</li>`);return m`
			<style>
				ul {
					padding: 0;
					display: inline;
					list-style: none;
				}
				ul li {
					display: inline;
				}
				ul li:after {
					content: ', ';
				}
				ul li:last-child:after {
					content: '';
				}
			</style>
			<ul>
				${r}
			</ul>
		`}renderEditCell(){return"not implemented"}renderHeader(e,{filter:t,query:o},r,i){return m`<cosmoz-autocomplete-ui
			class="external-values-${e.externalValues}"
			.label=${e.title}
			.source=${i}
			.textProperty=${e.textProperty}
			.value=${t}
			.text=${o}
			.onChange=${Pe(r)}
			.onFocus=${Be(r)}
			.onText=${Ge(r)}
			>${D(e.loading,()=>m`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		> `}}customElements.define("cosmoz-omnitable-column-list-horizontal",so);window.Cosmoz=window.Cosmoz||{};class it extends Wt(qt(Xt,E)){static get template(){return Ee`
			<style>
				:host {
					display: block;
				}

				:host a {
					color: var(--primary-link-color, inherit);
				}

				[hidden] {
					display: none;
				}

				ul {
					list-style-type: none;
					margin: 0.3em 0;
					padding-left: 0;
				}

				li {
					text-overflow: ellipsis;
					overflow: hidden;
				}
			</style>

			<ul hidden$="[[ isEmpty(items) ]]">
				<li>
					<span>[[ _firstItem(items) ]]</span>
				</li>
				<li class="see-more" hidden$="[[_hideExpand(items, _expanded)]]">
					<a href="#" on-tap="_toggleExpand"
						>[[ _('and {0} more', _othersCount, t) ]]</a
					>
				</li>
				<template
					is="dom-repeat"
					items="[[ _otherItems(items, _expanded) ]]"
					as="item"
				>
					<li>
						<span class="item">[[ item ]]</span>
					</li>
				</template>
				<li class="see-less" hidden$="[[ _hideCollapse(items, _expanded) ]]">
					<a href="#" on-tap="_toggleExpand">[[ _('See less', t) ]]</a>
				</li>
			</ul>
		`}static get is(){return"cosmoz-omnitable-column-list-data"}static get properties(){return{items:{type:Array},_expanded:{type:Boolean,value:!1},_othersCount:{type:Number,computed:"_computeOthersCount(items)"}}}static get observers(){return["_itemsLengthChanged(items.length)"]}_itemsLengthChanged(){requestAnimationFrame(()=>this.dispatchEvent(new CustomEvent("expand",{bubbles:!0})))}_firstItem(e){if(e!=null&&e.length>0)return e[0]}_hideExpand(e,t){return e!==void 0&&e.length!==null?e.length<=2||t:!0}_hideCollapse(e,t){return e!==void 0&&e.length!==null?e.length<=2||!t:!0}_otherItems(e,t){if(e!=null&&(e.length<=2||t))return e.slice(1)}_computeOthersCount(e){if(e!=null)return e.length-1}_toggleExpand(e){this._expanded=!this._expanded,e.stopPropagation(),e.preventDefault()}}customElements.define(it.is,it);class uo extends He(j(E)){static get properties(){return{keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,textual:e.textual}}renderCell({valuePath:e,textProperty:t},{item:o}){return m`<cosmoz-omnitable-column-list-data
			.items=${je(o,e,t)}
		></cosmoz-omnitable-column-list-data>`}renderEditCell(e,{item:t},o){const r=i=>o(i.target.value.split(/,\s*/gu));return m`<cosmoz-input
			no-label-float
			type="text"
			.value=${Ne(e,t)}
			@change=${r}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:o},r,i){return m`<cosmoz-autocomplete-ui
			class="external-values-${e.externalValues}"
			?keep-opened=${e.keepOpened}
			?keep-query=${e.keepQuery}
			.textual=${e.textual}
			.column=${e}
			.label=${e.title}
			.source=${i}
			.textProperty=${e.textProperty}
			.valueProperty=${e.valueProperty}
			.itemRenderer=${e[B]?.itemRenderer}
			.value=${t}
			.text=${o}
			.onChange=${Pe(r)}
			.onFocus=${Be(r)}
			.onText=${Ge(r)}
			>${D(e.loading,()=>m`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}}customElements.define("cosmoz-omnitable-column-list",uo);const co=({title:n,tooltip:e="",filterText:t="",headerFocused:o=!1,onOpenedChanged:r,content:i,horizontalAlign:a="left",externalValues:l=null})=>{const u={focused:o,filtered:!!t,left:a==="left",right:a==="right",center:a==="center",...l!=null&&{[`external-values-${l}`]:!0}};return m`
		<style>
			.dropdown-content h3 {
				font-weight: 500;
				font-size: 13px;
				margin: 0;
				font-family: var(
					--cosmoz-input-font-family,
					var(--paper-font-subhead_-_font-family, 'Inter', sans-serif)
				);
			}

			.dropdown-content {
				padding: 10px 10px 10px 10px;
				min-width: 120px;
				height: 100%;
				position: relative;
				text-align: left;
				background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
				border-radius: 6px;
				backdrop-filter: blur(16px) saturate(180%);
				-webkit-backdrop-filter: blur(16px) saturate(180%);
				box-shadow:
					0 4px 24px 0 rgba(0, 0, 0, 0.18),
					0 1.5px 6px 0 rgba(0, 0, 0, 0.1);
			}

			cosmoz-dropdown {
				display: block;
				position: relative;
				font-family: var(--paper-font-common-base_-_font-family, inherit);
				font-size: 16px;
				font-weight: normal;
				--divider-color: var(
					--paper-input-container-color,
					rgba(0, 0, 0, 0.42)
				);
				--focused-color: #3f51b5;
				width: 100%;
				outline: none;
			}

			cosmoz-dropdown::before {
				content: '';
				position: absolute;
				left: 0;
				bottom: 0;
				height: 1px;
				width: 100%;
				background: var(--divider-color);
				pointer-events: none;
				transition:
					background 0.2s,
					height 0.2s;
			}

			cosmoz-dropdown::after {
				content: '';
				position: absolute;
				left: 0;
				bottom: 0;
				height: 1px;
				width: 100%;
				background: var(--focused-color);
				transform-origin: center;
				transform: scaleX(0);
				pointer-events: none;
				transition:
					background 0.2s,
					transform 0.2s,
					height 0.2s;
			}

			cosmoz-dropdown.focused::after {
				transform: scaleX(1);
				height: 2px;
			}

			cosmoz-dropdown::part(button) {
				background: transparent;
				border-radius: unset;
				position: relative;
				width: 100%;
				height: 100%;
				min-height: 32px;
				display: flex;
				flex-direction: column;
				justify-content: center;
			}

			.dropdown-button {
				font-size: 16px;
				box-sizing: border-box;
				cursor: pointer;
				color: var(--dropdown-button-color, rgba(0, 0, 0, 0.54));
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				transition:
					transform 0.2s,
					font-size 0.2s,
					top 0.2s,
					color 0.2s;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				width: 100%;
				pointer-events: none;
			}

			.left .dropdown-button,
			.left .filter-value {
				text-align: left;
			}

			.right .dropdown-button,
			.right .filter-value {
				text-align: right;
			}

			.center .dropdown-button,
			.center .filter-value {
				text-align: center;
			}

			.filter-value {
				font-size: 16px;
				text-align: left;
				padding-bottom: 6px;
				box-sizing: border-box;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				color: var(--dropdown-filter-color, rgba(0, 0, 0, 0.87));
			}

			cosmoz-dropdown.filtered .dropdown-button {
				top: 0;
				transform: translateY(-100%);
				font-size: 12px;
			}

			.float {
				display: block;
				height: 16px;
				width: 100%;
				content: ' ';
			}
		</style>

		<div class="float"></div>

		<cosmoz-dropdown
			@focus=${r}
			@focusout=${r}
			class=${Ut(u)}
			title=${e||""}
		>
			<div slot="button" class="dropdown-button">${n||e}</div>

			${t?m`<div slot="button" class="filter-value">${t}</div>`:Ve}

			<div class="dropdown-content" @mousedown=${s=>s.stopPropagation()}>
				${i}
			</div>
		</cosmoz-dropdown>
	`};class mo extends St($e(E)){static get properties(){return{maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},formatter:{type:Object,computed:"_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)"},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:"_computeFilterText(filter.*, formatter)"},headerFocused:{type:Boolean,value:!1}}}render(){const e=t=>{this.headerFocused=t.type==="focus",this._onDropdownOpenedChanged(t)};return m`
			<style>
				cosmoz-input[type='number'] {
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
					border-radius: 6px;
					border: 1px solid #d1d1d6;
					box-shadow: 0 1px 2px 0 rgba(60, 60, 60, 0.04);
					padding: 2px 8px;
					margin-bottom: 6px;
					min-height: 28px;
					transition:
						border-color 0.2s,
						box-shadow 0.2s;
				}

				cosmoz-input[type='number']:focus-within {
					border-color: var(--cz-accent-color, #007aff);
					box-shadow: 0 0 0 1px rgba(0, 122, 255, 0.15);
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
				}
			</style>

			<cosmoz-clear-button
				@click=${()=>this.resetFilter()}
				?visible=${this.hasFilter()}
			></cosmoz-clear-button>

			${co({title:this.title,tooltip:this._tooltip,filterText:this._filterText,headerFocused:this.headerFocused,horizontalAlign:"right",externalValues:this.externalValues,onOpenedChanged:e,content:m`
					<h3>${this.title}</h3>
					<cosmoz-input
						class=${this._fromClasses}
						type="number"
						label=${I("From")}
						.value=${this._filterInput?.min}
						@value-changed=${t=>{this.set("_filterInput.min",t.detail.value)}}
						@blur=${t=>this._onBlur(t)}
						@keydown=${t=>this._onKeyDown(t)}
						min=${this._toInputString(this._limit.fromMin)}
						max=${this._toInputString(this._limit.fromMax)}
					></cosmoz-input>
					<cosmoz-input
						class=${this._toClasses}
						type="number"
						label=${I("To")}
						.value=${this._filterInput?.max}
						@value-changed=${t=>{this.set("_filterInput.max",t.detail.value)}}
						@blur=${t=>this._onBlur(t)}
						@keydown=${t=>this._onKeyDown(t)}
						min=${this._toInputString(this._limit.toMin)}
						max=${this._toInputString(this._limit.toMax)}
					></cosmoz-input>
				`})}
		`}_computeFormatter(e,t,o){const r={localeMatcher:"best fit"};return t!==null&&(r.minimumFractionDigits=t),o!==null&&(r.maximumFractionDigits=o),new Intl.NumberFormat(e||void 0,r)}getComparableValue(e,t){if(e==null)return;let o=e;if(t!=null&&(o=this.get(t,e)),o=this.toValue(o),o==null)return;const r=this.maximumFractionDigits;return r!==null?this.toValue(o.toFixed(r)):o}renderValue(e,t=this.formatter){const o=this.toNumber(e);if(o!=null)return t.format(o)}}customElements.define("cosmoz-omnitable-number-range-input",mo);class po extends j(E){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},cellClass:{type:String,value:"number-cell align-right"},width:{type:String,value:"30px"},minWidth:{type:String,value:"30px"},headerCellClass:{type:String,value:"number-header-cell"},maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const o=W({...e,valuePath:"min"},t),r=W({...e,valuePath:"max"},t);if(!(o==null&&r==null))return Vn(e,t)}getString(e,t){return Ye(e,t)}toXlsxValue({valuePath:e},t){return S(t,e)}getComparableValue(e,t){return W(e,t)}serializeFilter(e,t){if(t==null)return;const o=T(t.min),r=T(t.max);if(!(o==null&&r==null))return Je(o)+"~"+Je(r)}deserializeFilter(e,t){if(t==null||t==="")return null;const o=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(o)?{min:T(o[1]),max:T(o[2])}:null}renderCell(e,{item:t}){return m`<div class="omnitable-cell-number">
			${Ye(e,t)}
		</div>`}renderEditCell(e,{item:t},o){return m`<cosmoz-input
			no-label-float
			type="number"
			@change=${i=>o(i.target.value)}
			.value=${On(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:o,limits:r,locale:i,maximumFractionDigits:a,minimumFractionDigits:l,autoupdate:u},{filter:s},c,d){return m`<cosmoz-omnitable-number-range-input
			.title=${e}
			.filter=${s}
			.values=${d}
			.min=${t}
			.max=${o}
			.limits=${r}
			.locale=${i}
			.maximumFractionDigits=${a}
			.minimumFractionDigsits=${l}
			.autoupdate=${u}
			@filter-changed=${({detail:{value:h}})=>c(p=>({...p,filter:h}))}
			@header-focused-changed=${({detail:{value:h}})=>c(p=>({...p,headerFocused:h}))}
		></cosmoz-omnitable-number-range-input>`}computeSource(e,t){return Q(e,t)}}customElements.define("cosmoz-omnitable-column-number",po);const Ft="1970-01-01",G=(n,e,t)=>{const o=typeof n=="string"&&n.length>3&&n.length<=9?Xe(Ft+"T"+n):n;return V(o)},ne={},go=n=>{const e=n||"";if(ne[e])return ne[e];const t={hour:"numeric",minute:"numeric",second:"numeric"};return ne[e]=new Intl.DateTimeFormat(n||void 0,t),ne[e]},me=({valuePath:n,locale:e},t)=>{const o=G(S(t,n||""));return o===void 0?"":o===null?"Invalid Date":Ue(o,go(e))},ho=(n,e)=>n.valuePath?me(n,e):"",fo=n=>{const e=G(n);if(e==null)return null;const t=ve(e);return t&&t.slice(11,19)},X=({valuePath:n},e)=>{if(e==null)return;const t=fo(n==null?e:S(e,n));if(t==null)return;const o=G(Xe(Ft+"T"+t));return o==null?o:T(o.getTime())},bo=(n,e)=>t=>{const o=X(n,t);if(o==null)return!1;const r=X({...n,valuePath:"min"},e),i=X({...n,valuePath:"max"},e);return r==null||i==null?!1:!(o<r||o>i)},at=n=>{const e=G(n);return e==null?"":e.toISOString().slice(11,19).replace(/:/gu,".")},lt=n=>{if(!(n==null||n===""))return G(typeof n=="string"?n.replace(/\./gu,":")+"Z":n)};class xo extends qe($e(E)){render(){return m`
			<style>
				paper-dropdown-menu {
					--iron-icon-width: 0;
					display: block;
				}
			</style>

			<cosmoz-clear-button
				@click=${()=>this.resetFilter()}
				?visible=${this.hasFilter()}
			></cosmoz-clear-button>
			<paper-dropdown-menu
				label=${this.title}
				placeholder=${ye(this._filterText)}
				class="external-values-${this.externalValues}"
				title=${this._tooltip}
				horizontal-align="right"
				?opened=${this.headerFocused}
				@opened-changed=${e=>this.set("headerFocused",e.detail.value)}
			>
				>
				<div
					class="dropdown-content"
					slot="dropdown-content"
					style="padding: 15px; min-width: 100px;"
				>
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-input
						type="time"
						label=${I("From time")}
						step=${this.filterStep}
						.value=${this._filterInput.min}
						@value-changed=${e=>this.set("_filterInput.min",e.detail.value)}
					></cosmoz-input>
					<cosmoz-input
						type="time"
						label=${I("Until time")}
						step=${this.filterStep}
						.value=${this._filterInput.max}
						@value-changed=${e=>this.set("_filterInput.max",e.detail.value)}
					></cosmoz-input>
				</div>
			</paper-dropdown-menu>
		`}get _fixedDate(){return"1970-01-01"}toDate(e,t,o){const r=typeof e=="string"&&e.length>3&&e.length<=9?this.getAbsoluteISOString(this._fixedDate+"T"+e):e;return super.toDate(r,t,o)}_toInputString(e){const t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(11,19)}getComparableValue(e,t){if(e==null)return;let o=this._toInputString(t==null?e:this.get(t,e));if(o!=null&&(o=this.toValue(this.getAbsoluteISOString(this._fixedDate+"T"+o)),o!=null))return this.toNumber(o.getTime())}_timeValueChanged(e){const t=e.target,o=t.value,r=e.model.item,i=this.toDate(r.date),a=this.toDate(i!=null?i.toISOString().slice(0,10)+"T"+o:o),l=u=>u;a==null&&(this.set(this.valuePath,a,r),this._fireItemChangeEvent(r,this.valuePath,i,l.bind(this)))}_computeFormatter(e){const t={hour:"numeric",minute:"numeric",second:"numeric"};return new Intl.DateTimeFormat(e||void 0,t)}}customElements.define("cosmoz-omnitable-time-range-input",xo);class vo extends j(E){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"time-header-cell"},minWidth:{type:String,value:"63px"},width:{type:String,value:"210px"},flex:{type:String,value:"0"},filterStep:{type:String,value:"1"}}}getFilterFn(e,t){const o=X({...e,valuePath:"min"},t),r=X({...e,valuePath:"max"},t);if(!(o==null&&r==null))return bo(e,t)}getString(e,t){return me(e,t)}toXlsxValue(e,t){return ho(e,t)}getComparableValue(e,t){return X(e,t)}serializeFilter(e,t){if(t==null)return;const o=G(t.min),r=G(t.max);if(!(o==null&&r==null))return at(o)+"~"+at(r)}deserializeFilter(e,t){if(t==null||t==="")return null;const o=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(o)?{min:lt(o[1]),max:lt(o[2])}:null}renderCell(e,{item:t}){return me(e,t)}renderEditCell(e,{item:t},o){return m`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>o(i.target.value)}
			.value=${me(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:o,locale:r,filterStep:i},{filter:a},l,u){return m`<cosmoz-omnitable-time-range-input
			.title=${e}
			.filter=${a}
			.values=${u}
			.min=${t}
			.max=${o}
			.locale=${r}
			.filterStep=${i}
			@filter-changed=${({detail:{value:s}})=>l(c=>({...c,filter:s}))}
			@header-focused-changed=${({detail:{value:s}})=>l(c=>({...c,headerFocused:s}))}
		></cosmoz-omnitable-time-range-input>`}computeSource(e,t){return Q(e,t)}}customElements.define("cosmoz-omnitable-column-time",vo);const oe={},yo=n=>{const e=n||"";if(oe[e])return oe[e];const t={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return oe[e]=new Intl.DateTimeFormat(n||void 0,t),oe[e]},Se=({valuePath:n,locale:e},t)=>{const o=V(S(t,n||""));return o===void 0?"":o===null?"Invalid Date":Ue(o,yo(e))},$o=({valuePath:n},e)=>n?S(e,n):"",st=n=>{const e=V(n);return e==null?"":e.toISOString().slice(0,19).replace(/:/gu,".")},ut=n=>{if(!(n==null||n==="")&&typeof n=="string")return V(n.replace(/\./gu,":")+"Z")};class wo extends qe($e(E)){render(){return m`
			<style>
				paper-dropdown-menu {
					--iron-icon-width: 0;
					display: block;
					text-align: right;
				}

				.dropdown-content h3 {
					font-weight: 500;
					font-size: 13px;
					margin: 0;
					font-family: var(
						--cosmoz-input-font-family,
						var(--paper-font-subhead_-_font-family, 'Inter', sans-serif)
					);
				}

				.dropdown-content {
					padding: 10px 10px 10px 10px;
					min-width: 120px;
					text-align: left;
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
					border-radius: 6px;
					backdrop-filter: blur(16px) saturate(180%);
					-webkit-backdrop-filter: blur(16px) saturate(180%);
					box-shadow:
						0 4px 24px 0 rgba(0, 0, 0, 0.18),
						0 1.5px 6px 0 rgba(0, 0, 0, 0.1);
				}

				cosmoz-datetime-input {
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
					border-radius: 6px;
					border: 1px solid #d1d1d6;
					box-shadow: 0 1px 2px 0 rgba(60, 60, 60, 0.04);
					padding: 2px 8px;
					margin-bottom: 6px;
					min-height: 28px;
					transition:
						border-color 0.2s,
						box-shadow 0.2s;
				}

				cosmoz-datetime-input:focus-within {
					border-color: var(--cz-accent-color, #007aff);
					box-shadow: 0 0 0 1px rgba(0, 122, 255, 0.15);
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
				}
			</style>

			<cosmoz-clear-button
				@click=${()=>this.resetFilter()}
				?visible=${this.hasFilter()}
			></cosmoz-clear-button>
			<paper-dropdown-menu
				label=${this.title}
				placeholder=${ye(this._filterText)}
				class="external-values-${this.externalValues}"
				title=${this._tooltip}
				horizontal-align="right"
				?opened=${this.headerFocused}
				@opened-changed=${e=>this.set("headerFocused",e.detail.value)}
			>
				<div class="dropdown-content" slot="dropdown-content">
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-datetime-input
						date-label=${I("From date")}
						time-label=${I("From time")}
						min=${this._toInputString(this._limit.fromMin)}
						max=${this._toInputString(this._limit.fromMax)}
						step=${this.filterStep}
						.value=${this._filterInput?.min}
						@value-changed=${e=>this.set("_filterInput.min",e.detail.value)}
					></cosmoz-datetime-input>
					<cosmoz-datetime-input
						date-label=${I("To date")}
						time-label=${I("To time")}
						min=${this._toInputString(this._limit.toMin)}
						max=${this._toInputString(this._limit.toMax)}
						step=${this.filterStep}
						.value=${this._filterInput?.max}
						@value-changed=${e=>this.set("_filterInput.max",e.detail.value)}
					></cosmoz-datetime-input>
				</div>
			</paper-dropdown-menu>
		`}_toInputString(e){const t=this.toValue(e);if(t!=null)return this._toLocalISOString(t).slice(0,19)}_computeFormatter(e){const t={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return new Intl.DateTimeFormat(e||void 0,t)}}customElements.define("cosmoz-omnitable-datetime-range-input",wo);class ct extends j(E){static get is(){return"cosmoz-omnitable-column-datetime"}static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"datetime-header-cell"},width:{type:String,value:"210px"},minWidth:{type:String,value:"128px"},flex:{type:String,value:"0"},filterStep:{type:Number,value:1}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const o=N({...e,valuePath:"min"},t),r=N({...e,valuePath:"max"},t);if(!(o==null&&r==null))return It(e,t)}getString(e,t){return Se(e,t)}toXlsxValue(e,t){return $o(e,t)}getComparableValue(e,t){return N(e,t)}serializeFilter(e,t){if(t==null)return;const o=V(t.min),r=V(t.max);if(!(o==null&&r==null))return st(o)+"~"+st(r)}deserializeFilter(e,t){if(t==null||t==="")return null;const o=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(o)?{min:ut(o[1]),max:ut(o[2])}:null}renderCell(e,{item:t}){return Se(e,t)}renderEditCell(e,{item:t},o){return m`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>o(_t(i.target.value))}
			.value=${Se(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:o,limits:r,locale:i,filterStep:a},{filter:l},u,s){return m`<cosmoz-omnitable-datetime-range-input
			.title=${e}
			.filter=${l}
			.values=${s}
			.min=${t}
			.max=${o}
			.limits=${r}
			.locale=${i}
			.filterStep=${a}
			@filter-changed=${({detail:{value:c}})=>u(d=>({...d,filter:c}))}
			@header-focused-changed=${({detail:{value:c}})=>u(d=>({...d,headerFocused:c}))}
		></cosmoz-omnitable-datetime-range-input>`}computeSource(e,t){return Q(e,t)}}customElements.define(ct.is,ct);const zo=({column:n,item:e,selected:t,folded:o,group:r})=>n?(n.renderGroup??n.renderCell)(n,{item:e,selected:t,folded:o,group:r}):Ve;customElements.define("cosmoz-omnitable-group-row",L(zo,{useShadowDOM:!1}));const So=n=>{const{column:e}=n;return A(()=>{let t=0,o=0;const r=l=>{n.dispatchEvent(new CustomEvent("column-resize",{bubbles:!0,composed:!0,detail:{newWidth:Math.ceil(o+l.pageX-t),column:e}}))},i=()=>{document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",i)},a=l=>{t=l.pageX,o=n.previousElementSibling.getBoundingClientRect().width,document.addEventListener("pointermove",r),document.addEventListener("pointerup",i)};return n.addEventListener("pointerdown",a),()=>n.removeEventListener("pointerdown",a)},[e]),Ve};customElements.define("cosmoz-omnitable-resize-nub",L(So));const Co=m`<svg
	width="10"
	height="9"
	viewBox="0 0 10 9"
	stroke="currentColor"
	xmlns="http://www.w3.org/2000/svg"
>
	<line
		x1="8.53033"
		y1="0.53033"
		x2="1.53033"
		y2="7.53033"
		stroke-width="1.5"
	/>
	<line
		x1="8.46967"
		y1="7.53033"
		x2="1.46967"
		y2="0.530331"
		stroke-width="1.5"
	/>
</svg>`,ko=m`
	<svg
		width="16"
		height="6"
		viewBox="0 0 16 6"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect width="16" height="2" />
		<rect y="4" width="16" height="2" />
	</svg>
`,Ce=m` <svg
	width="12"
	height="7"
	viewBox="0 0 12 7"
	fill="none"
	stroke="currentColor"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M0.999998 0.999999L6 6L11 1"
		stroke-width="1.5"
		stroke-linejoin="round"
	/>
</svg>`,_o=m`<svg
	width="8"
	height="6"
	viewBox="0 0 8 6"
	fill="currentColor"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M0.5,0.5h7c0.4,0,0.6,0.4,0.4,0.7L4.4,5.3c-0.2,0.2-0.5,0.2-0.7,0L0.1,1.2
		C-0.1,0.9,0.1,0.5,0.5,0.5z"
	/>
</svg> `,Ot=({column:n,on:e,descending:t,setOn:o,setDescending:r})=>{const{name:i,title:a}=n??{};return m`<button
		class="sg"
		title=${a}
		data-on=${ye(i===e&&(t?"desc":"asc")||void 0)}
		@click=${l=>{const u=l.currentTarget?.dataset.on;u||(o(i),r(!1)),u==="asc"?r(!0):u==="desc"&&(o(),r(!1))}}
	>
		<span>${a}</span> ${_o}
	</button>`},Dt=({columns:n,...e})=>n?.map(t=>Ot({column:t,...e})),Io=()=>m`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:n,groupOn:e,setGroupOn:t,groupOnDescending:o,setGroupOnDescending:r}={})=>Dt({columns:n?.filter?.(i=>i.groupOn),on:e,setOn:t,descending:o,setDescending:r})}
	>
	</sort-and-group-consumer>
`,Fo=()=>m`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:n,sortOn:e,setSortOn:t,descending:o,setDescending:r}={})=>Dt({columns:n?.filter?.(i=>i.sortOn),on:e,setOn:t,descending:o,setDescending:r})}
	>
	</sort-and-group-consumer>
`,Vt=n=>(e,t,o=Kt)=>{const r=Zt(),i=new URLSearchParams(r.hash.replace("#",""));return n(e,t,o,i),"#!"+Object.assign(r,{hash:i}).href.replace(location.origin,"")},Et=n=>n==null||n==="",Oo=Vt((n,e,t,o)=>Et(t(e))?o.delete(n):o.set(n,t(e))),Do=Vt((n,e,t,o)=>Object.entries(e).map(t).forEach(([r,i])=>Et(i)?o.delete(n+r):o.set(n+r,i))),J=(n,e,{suffix:t="",read:o,write:r,multi:i}={})=>{const[a,l]=i?[Do,Jt]:[Oo,Yt],[u,s]=M(()=>e==null?n:l(e+t,o)??n),c=$(d=>s(h=>{const p=xe(d,h);return e!=null&&Qt(a(e+t,p,r),null,{notify:!1}),p}),[e,t,a,r]);return[u,c]},Vo=n=>[!0,"true",1,"yes","on"].includes(n),re=n=>n===""||(n==null?void 0:Vo(n)),ie=(n,e,t)=>$(o=>{n(o),t(r=>({...r,[e]:o}))},[n,e,t]),Eo=(n,e,t,o,r)=>{const[i,a]=J(t.sortOn,e,{suffix:"-sortOn"}),[l,u]=J(re(t.descending),e,{suffix:"-descending",read:re}),[s,c]=J(t.groupOn,e,{suffix:"-groupOn"}),[d,h]=J(re(t.groupOnDescending),e,{suffix:"-groupOnDescending",read:re}),p=_(()=>n.find(g=>g.name===i),[n,i]),z=_(()=>n.find(g=>g.name===s),[n,s]),b={groupOn:s,setGroupOn:ie(c,"groupOn",o),groupOnDescending:d,setGroupOnDescending:ie(h,"groupOnDescending",o),sortOn:i,setSortOn:ie(a,"sortOn",o),descending:l,setDescending:ie(u,"descending",o),columns:n},y=_(()=>b,Object.values(b)),F=$(g=>{a(g.sortOn),c(g.groupOn),u(g.descending),h(g.groupOnDescending)},[]);return A(()=>void(r.current=F),[]),{...y,sortAndGroup:y,groupOnColumn:z,sortOnColumn:p}},Ke=bt();customElements.define("sort-and-group-provider",Ke.Provider);customElements.define("sort-and-group-consumer",L(({render:n})=>n(Ae(Ke)),{useShadowDOM:!1}));const Ao=({data:n,columns:e,groupOnColumn:t,filters:o,setFilterState:r,sortAndGroup:{sortOn:i,setSortOn:a,descending:l,setDescending:u}={}})=>xt(e,s=>s.name,s=>[m`<div
				class="cell ${s.headerCellClass} header-cell"
				part="cell header-cell cell-${s.name} header-cell-${s.name}"
				?hidden="${s===t}"
				title="${s.headerTitleFn(s)}"
				name="${s.name}"
			>
				${s.renderHeader(s,o[s.name]??{},c=>r(s.name,c),s.source(s,n))}
				${Ot({on:i,setOn:a,descending:l,setDescending:u,column:s})}
			</div>`,m`<cosmoz-omnitable-resize-nub
				.column="${s}"
				name="${s.name}"
			></cosmoz-omnitable-resize-nub>`]),Lo=({columns:n,settingsConfig:e,hideSelectAll:t,...o})=>{const r=Ae(Ke);return m`
		${D(n,i=>Ao({columns:i,sortAndGroup:r,...o}))}
		${D(!t,()=>m` <cosmoz-omnitable-settings
					.config=${e}
					part="settings"
				></cosmoz-omnitable-settings>`)}
	`};customElements.define("cosmoz-omnitable-header-row",L(Lo,{useShadowDOM:!1}));const To=K`
	:host {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}

	.label {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		flex: initial;
		align-self: start;
	}

	.value {
		text-align: right;
		flex-grow: 1;
		flex-basis: 100px;
		white-space: nowrap;
	}
`,Ro=({column:n})=>m`
	<div class="label" title="${n.title}" part="item-expand-label">
		${n.title}
	</div>
	<div class="value" part="item-expand-value">
		<slot></slot>
	</div>
`;customElements.define("cosmoz-omnitable-item-expand-line",L(Ro,{styleSheets:[Le(To)]}));const Mo=({columns:n,item:e,selected:t,expanded:o,groupOnColumn:r})=>en(n,i=>m`<cosmoz-omnitable-item-expand-line
				.column=${i}
				?hidden=${i===r}
				exportparts="item-expand-label, item-expand-value"
				>${i.renderCell(i,{item:e,selected:t,expanded:o})}</cosmoz-omnitable-item-expand-line
			>`);customElements.define("cosmoz-omnitable-item-expand",L(Mo,{useShadowDOM:!1}));const jo=(n,e,t)=>n.editable?n.renderEditCell(n,e,t(n,e.item)):n.renderCell(n,e),No=({columns:n,groupOnColumn:e,item:t,index:o,selected:r,expanded:i,onItemChange:a})=>xt(n,l=>l.name,l=>m`<div
				class="cell itemRow-cell ${l.cellClass??""}"
				part="cell itemRow-cell cell-${l.name} itemRow-cell-${l.name}"
				?hidden="${l===e}"
				?editable="${l.editable}"
				title="${l.cellTitleFn(l,t)}"
				name="${l.name}"
			>
				${jo(l,{item:t,index:o,selected:r,expanded:i},a)}
			</div>`);customElements.define("cosmoz-omnitable-item-row",L(No,{useShadowDOM:!1}));const At=K`
	.checkbox {
		box-sizing: border-box;
		width: 18px;
		height: 18px;
		background: transparent;
		border-radius: 4px;
		appearance: none;
		-webkit-appearance: none;
		outline: none;
		position: relative;
		user-select: none;
		cursor: pointer;
		display: inline-block;
		box-shadow: 0 0 0 2px
			var(--cosmoz-omnitable-checkbox-shadow-color, rgba(0, 0, 0, 0.16)) inset;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		vertical-align: middle;
		transition: background-color 140ms;
		margin: 1px 12px;
		flex: none;
	}

	.checkbox:checked {
		background-color: var(
			--cosmoz-omnitable-checkbox-checked-color,
			var(--primary-color)
		);
		box-shadow: none;
	}

	.checkbox:checked::before {
		content: '';
		position: absolute;
		box-sizing: content-box;
		width: 5px;
		height: 10px;
		border: 2.4px solid
			var(--cosmoz-omnitable-checkbox-checked-tick-color, #fff);
		border-top: none;
		border-left: none;
		transform-origin: 5px 10px;
		transform: translate(3px) rotate(45deg);
	}

	.checkbox::after {
		content: '';
		display: block;
		bottom: -5px;
		left: -5px;
		right: -5px;
		top: -5px;
	}

	.checkbox:hover {
		box-shadow:
			0 0 0 2px
				var(--cosmoz-omnitable-checkbox-shadow-color-hover, rgba(0, 0, 0, 1))
				inset,
			0 0 2px 6px #2021240f;
	}

	.checkbox:checked:hover {
		box-shadow: 0 0 2px 6px #2021240f;
	}

	.checkbox:indeterminate::before {
		content: '';
		position: absolute;
		width: 10px;
		height: 2px;
		left: 4px;
		top: 8px;
		background-color: var(
			--cosmoz-omnitable-checkbox-checked-color,
			var(--primary-color)
		);
	}
`,Po=K`
	:host {
		display: flex;
		flex-direction: column;
		position: relative;
		overflow: hidden;
		color: var(--cosmoz-omnitable-text-color, rgb(89, 102, 121));
	}
	:host a {
		color: var(--primary-link-color, inherit);
		text-decoration: var(--cosmoz-omnitable-link-decoration, underline);
	}
	:host a:hover {
		text-decoration: var(
			--cosmoz-omnitable-link-decoration-hover,
			var(--cosmoz-omnitable-link-decoration, underline)
		);
		color: var(--primary-link-color-hover, var(--primary-link-color));
	}

	/* The wrapping div that contains the header, the table content and the footer */
	.mainContainer {
		background-color: var(--cosmoz-omnitable-bg-color, rgb(255, 255, 255));
		display: flex;
		flex-direction: column;
		flex: auto;
	}

	#columns {
		display: none;
	}

	.header {
		position: relative;
		display: flex;
		align-items: flex-end;
		background-color: var(--cosmoz-omnitable-header-bg-color, inherit);
		border-top-left-radius: var(--cosmoz-omnitable-header-border-radius-top-left, 8px);
		border-top-right-radius: var(--cosmoz-omnitable-header-border-radius-top-right, 8px);
		border-bottom-left-radius: var(--cosmoz-omnitable-header-border-radius-bottom-left, 2px);
		border-bottom-right-radius: var(--cosmoz-omnitable-header-border-radius-bottom-right, 2px);
	}

	[hidden] {
		display: none;
	}

	cosmoz-grouped-list-row {
		width: 100%;
	}

	cosmoz-omnitable-header-row .external-values-false {
		--paper-input-container-color: var(
			--cosmoz-omnitable-local-filter-header-color
		);
	}

	cosmoz-omnitable-header-row .external-values-true {
		--paper-input-container-color: var(
			--cosmoz-omnitable-remote-filter-header-color
		);
	}

	.header > cosmoz-omnitable-header-row {
		flex: auto;
	}

	.header-cell {
		--paper-input-container: {
			padding-top: 0;
			padding-bottom: 1px;
			--paper-font-caption_-_line-height: 18px;
		}
		--paper-input-container-underline: {
			border-color: var(--cosmoz-omnitable-header-line-color);
			display: var(--cosmoz-omnitable-paper-input-underline-display, block);
		}
		--paper-input-container-underline-focus {
			border-color: var(--cosmoz-omnitable-header-line-focused-color);
			display: var(--cosmoz-omnitable-paper-input-underline-display, block);
		}

		--paper-font-subhead_-_font-family: var(
			--cosmoz-omnitable-header-font-family,
			'Roboto',
			'Noto',
			sans-serif
		);
		text-transform: var(--cosmoz-omnitable-header-text-transform, none);
		--paper-font-subhead_-_font-weight: var(
			--cosmoz-omnitable-header-font-weight,
			normal
		);
		--paper-font-subhead_-_font-size: var(
			--cosmoz-omnitable-header-font-size,
			16px
		);
		--cosmoz-input-padding: var(--cosmoz-omnitable-header-input-padding, 0);
		--cosmoz-input-label-text-transform: var(--cosmoz-omnitable-header-text-transform, none);
		--cosmoz-input-label-font-weight: var(--cosmoz-omnitable-header-font-weight, normal);
		--cosmoz-input-line-color: var(--cosmoz-omnitable-header-line-color);
		--cosmoz-input-line-display: var(--cosmoz-omnitable-header-line-display, block);
		--cosmoz-input-focused-color: var(--cosmoz-omnitable-header-line-focused-color);
	}

	cosmoz-omnitable-header-row {
		white-space: nowrap;
	}

	cosmoz-omnitable-header-row > div {
		display: inline-block;
		box-sizing: border-box;
		padding: 0 3px;
		white-space: nowrap;
		text-overflow: ellipsis;
		vertical-align: bottom;
	}
	cosmoz-omnitable-header-row > div[hidden] {
		display: none !important;
	}

	cosmoz-omnitable-resize-nub {
		display: inline-block;
		position: absolute;
		bottom: 2px;
		width: 7px;
		height: 30px;
		margin-left: -3px;
		background: transparent;
		cursor: ew-resize;
		z-index: 1000;
		user-select: none;
	}

	.time-header-cell,
	.datetime-header-cell,
	.date-header-cell,
	.amount-header-cell,
	.number-header-cell {
		position: relative;
	}

	cosmoz-omnitable-item-row {
		display: flex;
		white-space: nowrap;
	}

	cosmoz-omnitable-item-row > div {
		display: block;
		flex: none;
		padding: 0 3px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		box-sizing: border-box;
		align-self: center;
	}

	cosmoz-omnitable-item-row > div[hidden] {
		display: none !important;
	}

	.tableContent {
		overflow-y: auto;
		min-height: 40px;
		display: flex;
		flex-direction: column;
		position: relative;
		flex: auto;
	}
	.tableContent:has(.tableContent-empty.spinner) {
		opacity: 0.3;
	}

	/* Empty data set styling */
	.tableContent-empty {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #ccc;
	}
	.tableContent-empty.overlay {
		color: #333;
		z-index: 1;
	}
	.tableContent-empty iron-icon {
		height: 96px;
		min-height: 96px;
		width: 96px;
		min-width: 96px;
		margin-right: 24px;
	}
	.tableContent-empty > div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-bottom: 24px;
	}
	.tableContent-empty.overlay > div {
		padding-bottom: 0;
	}
	.tableContent-empty.overlay:has(cosmoz-omnitable-skeleton) {
		align-items: flex-start;
	}
	.tableContent-empty div.tableContent-empty-message {
		@apply --layout-vertical;
		@apply --layout-center-justified;
		padding-bottom: 24px;
	}
	.tableContent-empty.overlay div.tableContent-empty-message {
		padding-bottom: 0;
	}
	.tableContent-empty p {
		font-size: 15px;
		color: #ddd;
		margin: 0;
	}
	.tableContent-empty h3 {
		white-space: nowrap;
		margin: 0px 0px 8px 0px;
	}

	/* End of empty data set styling */
	.tableContent-scroller {
		flex: auto;
		position: relative;
		overflow: auto;
		overflow-x: hidden;
		will-change: transform;
		flex-basis: 0.000001px;
		display: flex;
		flex-direction: column;
	}

	.itemRow {
		border-bottom-color: var(--cosmoz-omnitable-border-color, #e1e2e5);
		border-bottom-width: 1px;
		border-bottom-style: var(
			--cosmoz-omnitable-item-row-border-bottom-style,
			solid
		);
		/* set a min-height for rows so that rows with empty values are visible */
	}
	.itemRow-wrapper {
		display: flex;
		align-items: center;
		min-height: var(--item-row-min-height, 39px);
		padding-right: 8px;
	}

	.itemRow[selected] {
		background-color: var(
			--cosmoz-omnitable-selection-color,
			rgb(195, 212, 248)
		);
		@apply --cosmoz-omnitable-selected-row;
	}

	.tableContent .itemRow-cell paper-dropdown-menu {
		margin-top: -20px;

	}

	cosmoz-omnitable-item-expand[expanded] {
		display: flex;
		flex-direction: column;
		padding: 5px 4%;
		line-height: 1.3em;
		border-bottom: solid 1px var(--cosmoz-omnitable-border-color, #e1e2e5);
		background-color: #fafafa;
	}

	cosmoz-omnitable-item-expand:not([expanded]) {
		display: none;
	}

	.groupRow {
		display: flex;
		align-items: center;
		background-color: #f5f6f9;
		font-weight: 700;
		color: #101010;
		border-bottom: 1px solid var(--cosmoz-omnitable-border-color, #e1e2e5);
	}

	.groupRow-label {
		display: flex;
		flex: auto;
		align-items: center;
		flex-wrap: wrap;
		padding-left: 8px;
		margin: 0;
		font-size: 1.15em;
		font-weight: 400;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.groupRow-label > cosmoz-omnitable-group-row {
		flex: auto;
	}

	.groupRow-badge {
		background: #8be5c6;
		color: #fff;
		line-height: 30px;
		width: 30px;
		text-align: center;
		border-radius: 50%;
		font-size: 13px;
		font-weight: 500;
	}

	.rtl {
		direction: rtl;
	}

	.align-left {
		text-align: left;
	}

	.align-right {
		text-align: right;
	}

	cosmoz-bottom-bar {
		background-color: var(--cosmoz-omnitable-bottom-bar-color, #5f5a92);
		overflow: hidden;
	}
	cosmoz-bottom-bar::part(bar) {
		padding: 0 24px;
	}

	cosmoz-bottom-bar::slotted(*) {
		background-color: #4c4875;
		color: #fff;
		border-color: #fff;
	}

	cosmoz-bottom-bar::slotted([disabled]) {
		color: #b7b6c8;
		border-color: #b7b6c8;
		cursor: not-allowed;
	}

	.boolean-cell[editable] {
		overflow: initial;
	}

	.omnitable-cell-number, .omnitable-cell-date {
		font-variant-numeric: tabular-nums;
	}

	.itemRow:hover {
		box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0,
			0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
		background-color: var(--cosmoz-omnitable-row-hover-color);
	}
	.groupRow:hover .checkbox:not(:checked):not(:hover),
	.itemRow:hover .checkbox:not(:checked):not(:hover) {
		box-shadow: 0 0 0 2px var(--cosmoz-omnitable-checkbox-shadow-color-not-hover, rgba(0, 0, 0, 0.54))
		inset;
	}
	.groupRow:hover .expand:not(:hover),
	.itemRow:hover .expand:not(:hover) {
		color: rgba(0, 0, 0, 0.54);
	}

	${At}

	.all {
		margin-bottom: 6px;
	}

	.expand {
		width: 24px;
		height: 24px;
		padding: 0;
		flex: none;
		border: none;
		border-radius: 50%;
		cursor: pointer;
		background: none;
		transition: 0.15s background ease-in;
		outline: none;
		color: rgba(0, 0, 0, 0.16);
	}
	.expand svg {
		fill: currentColor;
	}
	.expand:not([aria-expanded]) svg {
		transform: scaleY(-1);
	}
	.expand:active {
		background: rgba(33, 33, 33, 0.25);
	}
	.expand:hover {
		color: #000;
	}
	.groupRow .expand {
		margin: 8px;
	}

	.sg {
		display: inline-flex;
		width: 10px;
		cursor: pointer;
		align-items: center;
		margin-top: 18px;
		overflow: hidden;
		flex: none;
		background: none;
		border: none;
		outline: none;
		color: inherit;
		padding: 0;
	}
	.sg span {
		display: none;
	}
	.sg svg {
		display: block;
	}
	.sg[data-on] {
		color: var(--cosmoz-omnitable-checkbox-checked-color, var(--primary-color));
	}
	.sg:not([data-on='desc']) {
		transform: scaleY(-1);
	}
	:not(:hover) > .sg:not([data-on]) {
		display: none;
	}
	.header-cell {
		display: inline-flex;
		position: relative;
	}
	.header-cell :not(.sg, cosmoz-clear-button) {
		min-width: 0;
		flex: auto;
	}

	:host([mini]) .itemRow .expand,
	:host([mini]) cosmoz-omnitable-item-expand {
		display: none;
	}

	.itemRow-minis {
		display: flex;
		justify-content: space-between;
		margin: 14px 12px 12px 12px;
		color: var(--cosmoz-omnitable-mini-color, #000);
	}

	:host([mini]) .itemRow {
		border-radius: 12px;
		border: 1px solid var(--cosmoz-omnitable-border-color, #e1e2e5);
		margin: 4px 8px;
		padding-top: 2px;
	}

	:host([mini]) .itemRow:not([selected]) {
		background: var(--cosmoz-omnitable-mini-item-background, #fdfdfd);
	}

	:host([mini]) .itemRow:hover {
		box-shadow: none;
	}

	:host([mini]) .header {
		margin: 0 8px;
	}

	:host([mini]) .tableContent {
		overflow: hidden;
	}

	:host([mini]) .tableContent-scroller::-webkit-scrollbar {
		width: 4px;
	}

	:host([mini]) .tableContent-scroller::-webkit-scrollbar-track {
		background: transparent;
	}

	:host([mini]) .tableContent-scroller::-webkit-scrollbar-thumb {
	background: transparent;
	}

	:host([mini]) .tableContent-scroller:hover::-webkit-scrollbar-thumb {
	background: var(--cosmoz-omnitable-mini-scrollbar-thumb-bg, #aaa);
	}

	:host([mini]) .tableContent-scroller::-webkit-scrollbar-button:decrement,
	:host([mini]) .tableContent-scroller::-webkit-scrollbar-button:increment {
	width: 0px;
	}

	:host([mini]) cosmoz-omnitable-settings::part(columns) {
		display:none;
	}

	cz-spinner {
		width: 48px;
		height: 48px;
		position: absolute;
		top: 40%;
		right: 50%;
		border-color: rgba(0, 0, 0, 0.2);
		border-top-color: #000;
	}
`,dt=n=>{const e=n.replace(/"/gu,'""');return e.search(/("|,|\n)/gu)>=0?'"'+e+'"':n},Bo=(n,e,t)=>{const i=n.map(l=>dt(l.title)).join(";")+`
`,a=e.map(l=>n.map(u=>{const s=u.getString(u,l);return s==null?"":dt(String(s))}).join(";")+`
`);a.unshift(i),vt(new File(a,t,{type:"text/csv;charset=utf-8"}))},Go=(n,e)=>{const t=n.map(r=>r.title),o=e.map(r=>n.map(i=>{const a=i.toXlsxValue(i,r);return a??""}));return o.unshift(t),o},Ho=(n,e,t,o)=>{const r=Go(n,e),i=new tn(t).addSheetFromData(r,o).generate();vt(new File([i],t,{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}))},Wo=({columns:n,selectedItems:e,csvFilename:t,xlsxFilename:o,xlsxSheetname:r,topPlacement:i})=>m`<cosmoz-bottom-bar
		id="bottomBar"
		?active=${!Te(e.length)}
		part="bottomBar"
		exportparts="bar: bottomBar-bar, info: bottomBar-info, buttons: bottomBar-buttons"
	>
		<slot name="info" slot="info">
			${nn("{0} selected item","{0} selected items",e.length)}
		</slot>
		<slot name="actions" id="actions"></slot>
		<!-- These slots are needed by cosmoz-bottom-bar
        as it might change the slot of the actions to distribute them in the menu -->
		<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
		<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
		<cosmoz-dropdown-menu part="extra" slot="extra" .placement=${i}>
			<svg
				slot="button"
				width="14"
				height="18"
				viewBox="0 0 14 18"
				fill="none"
				stroke="currentColor"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M1 8.5L7.00024 14.5L13 8.5"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path d="M13 17L1 17" stroke-width="2" stroke-linecap="round" />
				<path d="M7 1V13" stroke-width="2" stroke-linecap="round" />
			</svg>
			<button
				@click=${()=>Bo(n,e,t)}
			>
				${I("Save as CSV")}
			</button>
			<button
				@click=${()=>Ho(n,e,o,r)}
			>
				${I("Save as XLSX")}
			</button>
			<slot name="download-menu"></slot>
		</cosmoz-dropdown-menu>
	</cosmoz-bottom-bar>`,qo=({allSelected:n,onAllCheckboxChange:e,sortAndGroup:t,dataIsValid:o,data:r,columns:i,filters:a,groupOnColumn:l,setFilterState:u,settingsConfig:s,hideSelectAll:c})=>m`<sort-and-group-provider .value=${t}>
		<div class="header" id="header" part="header">
			${D(!c,()=>m`<input
						class="checkbox all"
						type="checkbox"
						.checked=${n}
						@input=${e}
						?disabled=${!o}
						part="all"
					/>`)}
			${D(c,()=>m` <cosmoz-omnitable-settings
						.newLayout="${!0}"
						.config=${s}
					></cosmoz-omnitable-settings>`)}

			<cosmoz-omnitable-header-row
				part="headerRow"
				.data=${r}
				.columns=${i}
				.filters=${a}
				.groupOnColumn=${l}
				.setFilterState=${u}
				.settingsConfig=${s}
				.hideSelectAll=${c}
			></cosmoz-omnitable-header-row>
		</div>
	</sort-and-group-provider>`,Xo=on`
	:host {
		max-width: 100%;
		overflow-x: hidden;
		padding: 0 12px;
	}
	.skeleton {
		width: 100%;
	}
	.skeleton > div {
		height: 17.5px;
		display: flex;
		padding: 11px 12px 11px 0;
	}
	.skeleton > div div:not(.handle) {
		background-image: linear-gradient(
			90deg, 
			var(--cosmoz-omnitable-skeleton-bg-from, #e0e0e0), 
			var(--cosmoz-omnitable-skeleton-bg-middle, #f5f5f5), 
			var(--cosmoz-omnitable-skeleton-bg-to, #e0e0e0)
		);
		background-size: 1000%;
		background-position: right;
		border-radius: 4px;
		animation: sweep 1.5s cubic-bezier(0.3, 1, 0.3, 1) infinite;
	}
	.skeleton > div div:not(.checkbox):not(:last-of-type) {
		margin-right: 7px;
	}
	.skeleton > div div.checkbox {
		min-width: 18px;
		margin-left: 0;
		margin-right: 12px;
	}
	@keyframes sweep {
		0% {
			background-position: right;
		}
		100% {
			background-position: left;
		}
	}
`,Uo=({settingsConfig:n})=>{const{columns:e,collapsed:t}=n,o=e.filter(r=>!t.some(i=>i.name===r.name));return m`<div class="skeleton">
		${Array.from({length:5},()=>m`<div>
					<div class="checkbox"></div>
					${o.map(r=>m`<div
								class="cell"
								part=${`cell-${r.name}`}
								name=${r.name}
							></div>`)}
				</div>`)}
	</div>`};customElements.define("cosmoz-omnitable-skeleton",L(Uo,{styleSheets:[Xo]}));const Ko=(n,e)=>{const{settingsConfig:t}=n,{processedItems:o,dataIsValid:r,filterIsTooStrict:i,loading:a,displayEmptyGroups:l,compareItemsFn:u,setSelectedItems:s,renderItem:c,renderGroup:d,error:h}=e;return m`${D(!a&&!r&&!h,()=>m`<div class="tableContent-empty">
					<slot name="empty-set-message">
						<iron-icon icon="icons:announcement"></iron-icon>
						<div class="tableContent-empty-message">
							<h3>${I("Working set empty")}</h3>
							<p>${I("No data to display")}</p>
						</div>
					</slot>
				</div>`)}
		${D(i,()=>m`<div class="tableContent-empty">
					<iron-icon icon="icons:announcement"></iron-icon>
					<div>
						<h3>${I("Filter too strict")}</h3>
						<p>${I("No matches for selection")}</p>
					</div>
				</div>`)}
		${D(a&&!o.length,()=>m`<div class="tableContent-empty overlay">
					<cosmoz-omnitable-skeleton
						.settingsConfig=${t}
					></cosmoz-omnitable-skeleton>
				</div>`)}
		${D(a&&o.length,()=>m`<div class="tableContent-empty overlay spinner">
					<cz-spinner></cz-spinner>
				</div>`)}
		${D(h,()=>m`<div class="tableContent-empty overlay">
					<iron-icon icon="icons:error"></iron-icon>
					<div class="tableContent-empty-message">
						<h3>${I("Error loading data")}</h3>
						<p>${h.message}</p>
					</div>
				</div>`)}
		<div class="tableContent-scroller" id="scroller" part="scroller">
			<cosmoz-grouped-list
				id="groupedList"
				.data=${o}
				@selected-items-changed=${p=>s(p.detail.value)}
				.displayEmptyGroups=${l}
				.compareItemsFn=${u}
				.renderItem=${c}
				.renderGroup=${d}
			></cosmoz-grouped-list>
			<slot name="extraContent"></slot>
		</div>`},Jo=K`
	:host {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		max-height: var(--ot-height, 60vh);
		outline: none;
		min-width: 270px;
		background-color: var(--cosmoz-omnitable-settings-bg-color, #fff);
	}

	.headline {
		font-weight: 500;
		font-size: 13px;
		color: var(
			--cosmoz-omnitable-settings-color,
			var(--cz-text-color, #101010)
		);
		text-transform: uppercase;
		line-height: 0.95;
		padding: 10px 14px;
		display: flex;
		align-items: center;
	}
	.close {
		border: none;
		background: none;
		cursor: pointer;
		padding: 2.5px 6px;
		margin-left: auto;
	}

	.contents {
		overflow-y: auto;
		scrollbar-width: 2px;
		scrollbar-gutter: stable;
		text-transform: uppercase;
		font-size: 12px;
		color: var(
			--cosmoz-omnitable-settings-color,
			var(--cz-text-color, #101010)
		);
	}
	.contents::-webkit-scrollbar {
		width: 2px;
	}
	.contents::-webkit-scrollbar-thumb {
		background: rgba(0, 0, 0, 0.5);
	}
	.contents::-webkit-scrollbar-track-piece:start,
	.contents::-webkit-scrollbar-track-piece:end {
		background: transparent;
	}

	.heading {
		box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.15);
		font-weight: 400;
		font-size: 13px;
		color: var(
			--cosmoz-omnitable-settings-color,
			var(--cz-text-color, #101010)
		);
		line-height: 0.95;
		padding: 14px;
		display: flex;
		cursor: pointer;
		align-items: center;
	}
	.heading svg {
		margin-left: auto;
		margin-right: 4px;
	}
	.heading[data-opened] svg {
		transform: scaleY(-1);
	}
	cosmoz-collapse[opened] + .heading {
		box-shadow:
			inset 0px -1px 0px rgba(0, 0, 0, 0.15),
			inset 0px 1px 0px rgba(0, 0, 0, 0.15);
	}

	.list {
		flex: 1;
		padding: 2px 14px;
		min-width: 232px;
	}
	.item {
		display: flex;
		align-items: center;
		background: var(
			--cosmoz-omnitable-settings-item-bg-color,
			var(--cz-surface-light, #fff)
		);
	}
	.item.drag {
		opacity: 0.6;
		pointer-events: none;
	}
	.item.dragover {
		box-shadow: 0 -2px 0 0 currentColor;
	}
	.pull {
		border: none;
		padding: 0;
		font-size: 0;
		vertical-align: bottom;
		outline: none;
		background: transparent;
		cursor: move;
		margin-right: 12px;
		color: var(
			--cosmoz-omnitable-settings-pull-color,
			var(--cz-color-muted, #c4c4c4)
		);
	}
	.title {
		flex: auto;
		overflow: hidden;
		text-overflow: ellipsis;
		color: var(
			--cosmoz-omnitable-settings-title-color,
			var(--cz-text-color, inherit)
		);
	}
	.title[has-filter] {
		font-weight: bold;
	}
	${At}
	.checkbox {
		margin: 4px 0;
	}

	.buttons {
		display: flex;
		gap: 8px;
		padding: 12px 14px;
		box-shadow: inset 0px 1px 0px rgba(0, 0, 0, 0.15);
	}
	.button {
		border: none;
		cursor: pointer;
		background: var(--cosmoz-button-bg-color, #101010);
		color: var(--cosmoz-button-color, #fff);
		font-family: inherit;
		font-size: 13px;
		font-weight: 600;
		line-height: 26px;
		border-radius: 4px;
		padding: 8px;
		flex: 1;
	}
	.button:not(.reset):hover {
		background: var(--cz-action-button-hover-bg, #3a3f44);
	}
	.button[disabled] {
		opacity: 0.2;
		pointer-events: none;
	}
	.reset {
		background: transparent;
		color: inherit;
	}
	/* sortgroups */
	.sgs {
		display: grid;
		column-gap: 7px;
		row-gap: 8px;
		grid-template-columns: repeat(auto-fit, minmax(112px, 1fr));
		grid-template-rows: auto;
		padding: 14px;
	}
	.sg {
		color: inherit;
		border: 1px solid rgba(0, 0, 0, 0.2);
		border-radius: 6px;
		font-size: 12px;
		text-transform: uppercase;
		line-height: 1;
		text-align: left;
		padding: 6px 12px;
		background: transparent;
		cursor: pointer;
		display: flex;
		align-items: left;
		justify-content: auto;
	}
	.sg span {
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.sg[data-on] {
		background: var(
			--cosmoz-omnitable-checkbox-checked-color,
			var(--primary-color)
		);
	}
	.sg svg {
		margin-left: 4px;
		flex: none;
		vertical-align: middle;
	}
	.sg:not([data-on]) svg {
		display: none;
	}
	.sg:not([data-on='desc']) svg {
		transform: scaleY(-1);
	}
`,Yo=K`
	:host {
		display: contents;
		color: var(
			--cosmoz-omnitable-settings-color,
			var(--cz-text-color, #101010)
		);
		--cosmoz-dropdown-box-shadow:
			0 3px 4px 0 rgb(0 0 0 / 14%), 0 1px 8px 0 rgb(0 0 0 / 12%),
			0 3px 3px -2px rgb(0 0 0 / 40%);
	}
	cosmoz-dropdown {
		outline: none;
	}
	cosmoz-dropdown::part(button) {
		padding: 0;
		background: transparent;
		color: inherit;
	}
	cosmoz-dropdown::part(anchor) {
		display: inline-block;
	}
	.badge {
		position: absolute;
		top: 1px;
		right: -4px;
		background-color: var(
			--cosmoz-omnitable-checkbox-checked-color,
			var(--primary-color)
		);
		width: 8px;
		height: 8px;
		border-radius: 100%;
	}
	.headerDots {
		align-items: center;
		color: var(--cosmoz-input-color);
		display: flex;
		font-size: 20px;
		height: 42px;
		justify-content: center;
		margin-left: 12px;
		min-width: 30px;
		transform: rotate(90deg);
	}
	cosmoz-omnitable-settings-ui {
		display: flex;
	}
`,ae=n=>{const e=parseInt(n,10);return isFinite(e)?e:void 0},Qo=n=>{const{config:e}=n,{settings:t,setSettings:o,collapsed:r}=e,i=Re({collapsed:r,settings:t.columns,setSettings:$(a=>o(l=>({...l,columns:a})),[o])});return{...e,onDown:$(a=>{a.target.closest(".pull")&&(i.handle=a.currentTarget)},[i]),onDragStart:$(a=>{const{target:l}=a,u=ae(l.dataset.index);if(!i.handle?.contains(l)||u==null)return a.preventDefault();i.handle=null,a.dataTransfer.effectAllowed="move",a.dataTransfer.setData("omnitable/sort-index",u),a.dataTransfer.setData("text/plain",u),setTimeout(()=>l.classList.add("drag"),0),l.addEventListener("dragend",s=>s.target.classList.remove("drag"),{once:!0})},[i]),onDragEnter:$(a=>{const l=a.currentTarget;l===a.target&&(a.preventDefault(),a.dataTransfer.dropEffect="move",l.classList.add("dragover"))},[]),onDragOver:$(a=>{a.preventDefault(),a.currentTarget.classList.add("dragover")},[]),onDragLeave:$(a=>{const l=a.currentTarget;l.contains(a.relatedTarget)||l.classList.remove("dragover")},[]),onDrop:$(a=>{const l=ae(a.dataTransfer.getData("omnitable/sort-index")),u=ae(a.currentTarget.dataset.index),{settings:s,setSettings:c}=i;a.currentTarget.classList.remove("dragover"),a.preventDefault();const d=s.slice();d.splice(u+(l>=u?0:-1),0,d.splice(l,1)[0]),c(d)},[i]),onToggle:$(a=>{const{settings:l,setSettings:u}=i,s=l.map(d=>({...d,disabled:d.disabled||i.collapsed?.some(h=>h.name===d.name)})),c=ae(a.target.closest("[data-index]")?.dataset.index);s.splice(c,1,{...l[c],disabled:!a.target.checked,priority:a.target.checked?l.reduce((d,h)=>Math.max(d,h.priority),0)+1:l[c].priority}),u(s)},[i])}},Zo=[rn({apply({availableHeight:n,elements:e}){Object.assign(e.floating.style,{maxHeight:`${Math.max(0,n)}px`})}}),...an],er=({onDragStart:n,onDragEnter:e,onDragOver:t,onDragLeave:o,onDrop:r,onDown:i,onToggle:a,collapsed:l,filters:u})=>(s,c)=>{const d=!!l?.find(p=>p.name===s.name),h=!s.disabled&&!d;return m` <div
			class="item"
			data-index=${c}
			@mousedown=${i}
			draggable="true"
			@dragstart=${n}
			@dragenter=${e}
			@dragover=${t}
			@dragleave=${o}
			@drop=${r}
		>
			<button class="pull">${ko}</button>
			<label class="title" ?has-filter=${!Te(u[s.name]?.filter)}
				>${s.title}</label
			>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${h}
				@click=${a}
				.indeterminate=${d}
			/>
		</div>`},tr=n=>{const{settings:e,settingsId:t,onSave:o,onReset:r,hasChanges:i,opened:a,setOpened:l,...u}=Qo(n);return m` <div class="headline">
			${I("Sort and filter")}
			<button
				class="close"
				@click=${s=>{const c=s.currentTarget;c?.focus(),c?.blur()}}
			>
				${Co}
			</button>
		</div>

		<div class="contents">
			<div
				class="heading"
				?data-opened=${a.columns}
				@click=${()=>l(s=>({...s,columns:!s.columns}))}
				part="columns columns-heading"
			>
				${I("Columns")} ${Ce}
			</div>
			<cosmoz-collapse
				?opened="${a.columns}"
				part="columns columns-content"
			>
				<div class="list">${e.columns?.map(er(u))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${a.sort}
				@click=${()=>l(s=>({...s,sort:!s.sort}))}
			>
				${I("Sort on")} ${Ce}
			</div>
			<cosmoz-collapse ?opened=${a.sort}> ${Fo()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${a.group}
				@click=${()=>l(s=>({...s,group:!s.group}))}
				part="groups groups-heading"
			>
				${I("Group on")} ${Ce}
			</div>
			<cosmoz-collapse ?opened=${a.group} part="groups groups-heading"
				>${Io()}</cosmoz-collapse
			>
		</div>

		${D(t,()=>m`<div class="buttons">
					<button
						class="button reset"
						@click=${r}
						?disabled=${!i}
					>
						${I("Reset")}
					</button>
					<button class="button" @click=${o} ?disabled=${!i}>
						${I("Save")}
					</button>
				</div>`)}`};customElements.define("cosmoz-omnitable-settings-ui",L(tr,{styleSheets:[Le(Jo)]}));const nr=({config:n,newLayout:e})=>m`
	<cosmoz-dropdown
		.placement="${e?"bottom-start":"bottom-end"}"
		.middleware="${Zo}"
	>
		${D(e,()=>m`<div class="headerDots" slot="button">...</div>`,()=>m` <svg
					viewBox="0 0 24 24"
					width="24"
					slot="button"
					fill="currentColor"
				>
					<circle cx="10" cy="18" r="2"></circle>
					<circle cx="10" cy="12" r="2"></circle>
					<circle cx="10" cy="6" r="2"></circle>
				</svg>`)}
		${D(n?.badge,()=>m`<div class="badge" slot="button"></div>`)}
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${n}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`;customElements.define("cosmoz-omnitable-settings",L(nr,{styleSheets:[Le(Yo)]}));const ge=["sortOn","descending","groupOn","groupOnDescending"],le=n=>e=>typeof e=="object"&&e!==null&&"name"in e&&e.name===n,or=(n=[],e=[],t=[])=>{const o=e.filter(a=>n.some(le(a.name))),r=n.filter(a=>a.name!=null&&!e.some(le(a.name))&&!t.some(le(a.name))),i=t.filter(a=>!e.some(le(a.name)));return[...o,...i.flatMap(a=>{const l=n.find(u=>u.name===a.name);return l?{...a,title:l.title??a.title??"",minWidth:parseInt(l.minWidth??"0",10)}:[]}),...r.map(a=>{const{name:l,title:u,priority:s,minWidth:c,width:d,flex:h}=a;return{name:l??"",title:u??"",priority:s??0,minWidth:parseInt(c??"0",10),width:parseInt(d??"0",10),flex:parseInt(h??"0",10)}})]},rr=(n,e)=>({...e,...Fe(Array.from(ge))(n),columns:n.columns?.map(Fe(["name","priority","width","flex","disabled"]))}),ir=({columns:n,settings:e,savedSettings:t,initial:o})=>({...Object.fromEntries(ge.flatMap(i=>o?.[i]!=null?[[i,o[i]]]:[])),...t?Fe(Array.from(ge))(t):{},...e,columns:or(n,e?.columns,t?.columns)}),ar=({prefix:n="omnitable-"}={})=>({write:async(t,o)=>{const r=n+t;try{o?localStorage.setItem(r,JSON.stringify(o)):localStorage.removeItem(r)}catch(i){console.error(i)}},read:async t=>{if(t)try{return JSON.parse(localStorage.getItem(n+t))}catch(o){console.error(o)}}}),lr=bt(ar),sr=()=>{const n=Ae(lr);return _(()=>n(),[n])},ur=(n,e,t,o)=>{const[r,i]=M(),{read:a,write:l}=sr();return A(async()=>{n&&i(await a(n))},[n,a]),{settingsId:n,savedSettings:r,onSave:$(async()=>{if(!n)return;const u=rr(e,r);await l(n,u),t(),i(u)},[e,r]),onReset:$(async u=>{t(),u.shiftKey&&(await l(n),i()),o?.()},[o]),hasChanges:e!=null}},cr=({settingsId:n,host:e})=>{const t=_(()=>Object.fromEntries(ge.map(b=>[b,e[b]])),[]),o=Me(),r=$(()=>{o.current?.(t)},[t]),[i,a]=M(),[l,u]=M({columns:!0,sort:!0}),{savedSettings:s,...c}=ur(n,i,a,r),{enabledColumns:d}=e,h=In(e,{enabledColumns:d}),p=_(()=>ir({columns:h,settings:i,savedSettings:s,initial:t}),[h,i,s]),z=_(()=>p.columns.map(b=>h.find(y=>y.name===b.name)).filter(Boolean),[h,...p.columns.map(b=>b.name)]);return{...c,opened:l,setOpened:u,settings:p,columns:z,setSettings:a,resetRef:o}},mt=n=>Number.isFinite(n)?n:0,dr=(n,e)=>{const t=[];let[o,r]=n.reduce(([c,d],{width:h,flex:p})=>[c+h,d+p],[0,0]),i=e-o,a=mt(i/r),l=0,u=0,s=0;for(let c=0;c<n.length;c++){const{width:d,minWidth:h,flex:p}=n[c],z=i>=0?a*p:d*i/o;if(h>d+z){l+=d,u+=h,s+=p,t[c]=h;continue}if(p===0){l+=d,u+=d,t[c]=d;continue}}o-=l,i=e-u-o,r-=s,a=mt(i/r);for(let c=0;c<n.length;c++){if(t[c]!=null)continue;const{width:d,flex:h}=n[c],p=i>=0?a*h:d*i/o;t[c]=d+p}return t},he=Symbol("index"),mr=(n,e)=>{if(typeof n.findLastIndex=="function")return n.findLastIndex(e);for(let t=n.length-1;t>=0;t--)if(e(n[t],t,n))return t;return-1},pr=(n,e)=>{const t=mr(n,a=>a!=null&&a>0),o=(a,l)=>`.cell[name="${a}"], cosmoz-omnitable-skeleton::part(cell-${a}){width: ${Math.floor(l)}px;padding: 0 min(3px, ${l/2}px)}`,r=a=>`cosmoz-omnitable-resize-nub[name="${a}"]{display:none}`,i=a=>`cosmoz-omnitable-resize-nub[name="${a}"], .cell[name="${a}"]{display:none}`;return e.map((a,l)=>{const u=n[l];if(u==null||u===0)return i(a.name);const s=o(a.name,u);return l===t?`${s}
${r(a.name)}`:s}).join(`
`)},Lt=(n,e,t)=>{const o=n.filter(l=>!l.hidden),r=o.reduce((l,{width:u})=>l+u,0);if(o.length>1&&r>e)return Lt(o.slice(1),e,t);const i=o.reduce(([l,u],s,c)=>[Math.max(l,s.index),s.index>l?c:u],[-1,-1])[1];return i!==-1&&(o[i].flex=1),dr(o,e).reduce((l,u,s)=>(l[o[s].index]=u,l),new Array(t).fill(void 0))},gr=(n,e)=>n.length===0?".cell {display: none;}":pr(n,e),hr=({host:n,canvasWidth:e,layout:t,setSettings:o})=>{const r=Me();r.current=i=>o(a=>{const l=a.columns,{detail:{newWidth:u,column:s}}=i,c=l.findIndex(p=>p.name===s.name),d=[],h=l.reduce((p,z)=>Math.max(p,z.priority),-1/0);for(let p=0;p<t.length;p++)if(d[p]={...l[p]},p<c&&t[p]&&(d[p].width=t[p],d[p].flex=0,d[p].priority=h),p===c){const z=t.reduce((b,y,F)=>F<c&&y?b-y:b,e);d[p].width=Math.min(z,Math.max(u,l[p].minWidth)),d[p].flex=0,d[p].priority=h}return{...a,columns:d}}),A(()=>{const i=a=>r.current(a);return n.addEventListener("column-resize",i),()=>n.removeEventListener("column-resize",i)},[])},fr=(n,e)=>A(()=>{const t=([r])=>{r.contentRect?.width!==0&&requestAnimationFrame(()=>e(r.contentRect?.width-20-44-24))},o=new ResizeObserver(t);return o.observe(n),()=>o.unobserve(n)},[]),br=n=>{const[e,t]=M(()=>n.getBoundingClientRect().width);return fr(n,t),e},xr=(n,e)=>{const t=_(()=>{let o=!1,r;const i=()=>{if(!o)return;r=requestAnimationFrame(i),n()&&(o=!1)};return{start:()=>{o=!0,cancelAnimationFrame(r),r=requestAnimationFrame(i)},stop:()=>{o=!1,cancelAnimationFrame(r)}}},[]);A(()=>{t.start()},e),A(()=>()=>t.stop(),[])},vr=(n=0,e=0)=>Math.abs(n-e)<.1,yr=(n,e=1.9,t=ln)=>{const o=Re({target:n}),r=$(()=>{if(o.tween||(o.tween=o.target),o.target.every((i,a)=>o.tween[a]===i))return t(o.tween),!0;o.tween=o.target.map((i,a)=>vr(o.tween[a],i)?i:(o.tween[a]??0)+((i??0)-(o.tween[a]??0))/e||0),t(o.tween)},[]);xr(r,[n])},$r=({canvasWidth:n,groupOnColumn:e,config:t,miniColumn:o})=>_(()=>{if(!Array.isArray(t)||n==null||n===0)return[];const r=t.map((i,a)=>({minWidth:i.minWidth,width:i.width,flex:i.flex,priority:i.priority,name:i.name,index:a,hidden:i.name===e?.name||i.disabled})).map(i=>o?{...i,hidden:o.name!==i.name}:i).sort(({index:i,priority:a},{index:l,priority:u})=>a===u?l-i:a-u);return Lt(r,n,r.length)},[n,e,t]),wr=({host:n,canvasWidth:e,columns:t})=>{const o=n.miniBreakpoint??480,r=_(()=>e<=o,[e,o]),i=_(()=>r?t?.filter(s=>s.mini!=null).sort((s,c)=>(s.mini??0)-(c.mini??0)):[],[t,r]),[a,...l]=i??[],u=!!a;return A(()=>{n.toggleAttribute("mini",u)},[u]),{isMini:u&&r,miniColumn:a,miniColumns:l}},zr=n=>{const e=_(()=>new CSSStyleSheet,[]);return A(()=>{n.shadowRoot.adoptedStyleSheets=[...n.shadowRoot.adoptedStyleSheets,e]},[]),e},Sr=({host:n,columns:e,settings:t,setSettings:o,resizeSpeedFactor:r,sortAndGroupOptions:i})=>{const a=br(n),{isMini:l,miniColumn:u,miniColumns:s}=wr({host:n,canvasWidth:a,columns:e}),{groupOnColumn:c}=i,d=$r({canvasWidth:a,groupOnColumn:c,miniColumn:u,config:t.columns}),h=zr(n),p=_(()=>t.columns.reduce((b,y,F)=>d[F]!=null||y.name===c?.name||y.disabled?b:[...b,e.find(g=>g.name===y.name)],[]),[e,t,d]),z=Re({columns:t.columns});return yr(d,r,b=>{const y=gr(b,z.columns);h.replace(y)}),hr({host:n,canvasWidth:a,layout:d,setSettings:b=>o(b(t))}),{isMini:l,collapsedColumns:p,miniColumns:s}},Cr=({host:n,...e})=>{const{csvFilename:t="omnitable.csv",xlsxFilename:o="omnitable.xlsx",xlsxSheetname:r="Omnitable",topPlacement:i="top-end"}=n;return{csvFilename:t,xlsxFilename:o,xlsxSheetname:r,topPlacement:i,...e}},kr=({host:n,selectedItems:e,data:t,sortAndGroupOptions:o,collapsedColumns:r,settings:i,filterFunctions:a,settingS:l,filters:u,...s})=>{const c=t&&t.length>0&&e.length===t.length,d=b=>{b.target.checked?n.shadowRoot.querySelector("#groupedList").selectAll():n.shadowRoot.querySelector("#groupedList").deselectAll()},{groupOnColumn:h}=o,p=_(()=>[h,...r,...i.columns.filter(b=>b.disabled)].some(b=>b&&Object.keys(a).includes(b.name)),[a,i,r]),z=_(()=>({...l,collapsed:r,badge:p,filters:u}),[l,r,p,u]);return A(()=>{const b=n.shadowRoot.querySelector("#tableContent"),y=new ResizeObserver(F=>requestAnimationFrame(()=>{n.style.setProperty("--ot-height",F[0]?.contentRect.height+"px")}));return y.observe(b),()=>y.unobserve(b)},[]),{allSelected:c,onAllCheckboxChange:d,data:t,settingsConfig:z,filters:u,groupOnColumn:h,sortAndGroup:o.sortAndGroup,...s}},Tt=m`
	<svg
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
	>
		<g>
			<path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
		</g>
	</svg>
`,_r=n=>n?"groupRow groupRow-folded":"groupRow",Ir=({item:n,index:e})=>t=>D(t?.length>0,()=>m`
				<div class="itemRow-minis" part="item-minis">
					${t.map(o=>m`<div
								class="itemRow-mini"
								part="item-mini item-mini-${o.name}"
							>
								${(o.renderMini??o.renderCell)(o,{item:n,index:e})}
							</div>`)}
				</div>
			`),Fr=({columns:n,collapsedColumns:e,miniColumns:t,onItemClick:o,onCheckboxChange:r,dataIsValid:i,groupOnColumn:a,onItemChange:l,rowPartFn:u})=>(s,c,{selected:d,expanded:h,toggleCollapse:p})=>m`
		<div
			?selected=${d}
			part="${["itemRow",`itemRow-${s[he]}`,u?.(s,c)].filter(Boolean).join(" ")}"
			.dataIndex=${s[he]}
			.dataItem=${s}
			class="itemRow"
			@click=${o}
		>
			<div class="itemRow-wrapper" part="itemRow-wrapper">
				<input
					class="checkbox"
					type="checkbox"
					part="checkbox"
					.checked=${d}
					.dataItem=${s}
					@input=${r}
					?disabled=${!i}
				/>
				<cosmoz-omnitable-item-row
					part="itemRow-inner"
					.columns=${n}
					.index=${c}
					.selected=${d}
					.expanded=${h}
					.item=${s}
					.groupOnColumn=${a}
					.onItemChange=${l}
				>
				</cosmoz-omnitable-item-row>
				<button
					class="expand"
					?hidden="${Te(e.length)}"
					?aria-expanded="${h}"
					@click="${p}"
				>
					${Tt}
				</button>
			</div>
			${Ir({item:s,index:c})(t)}
		</div>
		<cosmoz-omnitable-item-expand
			.columns=${e}
			.item=${s}
			.index=${c}
			?selected=${d}
			?expanded=${h}
			.groupOnColumn=${a}
			part="item-expand"
		>
		</cosmoz-omnitable-item-expand>
	`,Or=({onCheckboxChange:n,dataIsValid:e,groupOnColumn:t})=>(o,r,{selected:i,folded:a,toggleFold:l})=>m` <div
			class="${_r(a)}"
			part="groupRow groupRow-${o[he]}"
		>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${i}
				.dataItem=${o}
				@input=${n}
				?disabled=${!e}
			/>
			<h3 class="groupRow-label">
				<div><span>${t?.title}</span>: &nbsp;</div>
				<cosmoz-omnitable-group-row
					.column=${t}
					.item=${o.items?.[0]}
					.selected=${i}
					.folded=${a}
					.group=${o}
				></cosmoz-omnitable-group-row>
			</h3>
			<div class="groupRow-badge">${o.items.length}</div>
			<button class="expand" ?aria-expanded="${a}" @click=${l}>
				${Tt}
			</button>
		</div>`,Dr=({host:n,error:e,dataIsValid:t,processedItems:o,columns:r,collapsedColumns:i,miniColumns:a,sortAndGroupOptions:l,rowPartFn:u,...s})=>{const{loading:c=!1,displayEmptyGroups:d=!1,compareItemsFn:h}=n,p=Me({shiftKey:!1,ctrlKey:!1}),z=$(g=>{const k=g.target.dataItem,f=g.target.checked;p.current.shiftKey?n.shadowRoot.querySelector("#groupedList").toggleSelectTo(k,f):p.current.ctrlKey?(g.target.checked=!0,n.shadowRoot.querySelector("#groupedList").selectOnly(k)):n.shadowRoot.querySelector("#groupedList").toggleSelect(k,f),g.preventDefault(),g.stopPropagation()},[]);A(()=>{const g=({shiftKey:k,ctrlKey:f})=>{p.current={shiftKey:k,ctrlKey:f}};return window.addEventListener("keydown",g),window.addEventListener("keyup",g),()=>{window.removeEventListener("keydown",g),window.removeEventListener("keyup",g)}},[]);const b=$(g=>{const k=g.composedPath();k.slice(0,k.indexOf(g.currentTarget)).find(v=>v.matches?.("a, .checkbox, .expand"))||n.dispatchEvent(new window.CustomEvent("omnitable-item-click",{bubbles:!0,composed:!0,detail:{item:g.currentTarget.dataItem,index:g.currentTarget.dataIndex}}))},[]),{groupOnColumn:y}=l,F=$((g,k)=>f=>Fn(n,g,k,f),[]);return{...s,processedItems:o,dataIsValid:t,filterIsTooStrict:t&&o.length<1,loading:c,compareItemsFn:h,displayEmptyGroups:d,error:e,renderItem:_(()=>Fr({columns:r,collapsedColumns:i,miniColumns:a,onItemClick:b,onCheckboxChange:z,dataIsValid:t,groupOnColumn:y,onItemChange:F,rowPartFn:u}),[r,i,b,z,t,y,F,u]),renderGroup:_(()=>Or({onCheckboxChange:z,dataIsValid:t,groupOnColumn:y}),[z,t,y])}},Vr=(n,e)=>{if(n===e)return 0;if(n==null)return-1;if(e==null)return 1;const t=typeof n,o=typeof e;return t==="object"&&o==="object"?n.toString()<e.toString()?-1:1:t==="number"&&o==="number"?n-e:t==="string"&&o==="string"?n<e?-1:1:t==="boolean"&&o==="boolean"?n?-1:1:(console.warn("unsupported sort",t,n,o,e),0)},ke=(n,e)=>(t,o)=>Vr(n(t),n(o))*(e?-1:1),Er=n=>n.replace(/([a-z0-9])([A-Z])/gu,"$1-$2").toLowerCase(),pt=(n,e)=>{!n||!e||Object.entries(e).forEach(([t,o])=>{n[B].__ownChange=!0,n[B][t]=o,n[B].__ownChange=!1,n[B].dispatchEvent(new CustomEvent(`${Er(t)}-changed`,{bubbles:!0,detail:{value:o}}))})},_e=(n,e)=>Object.assign(n,{[he]:e}),se=Symbol("unparsed"),Ar=({data:n,columns:e,hashParam:t,sortAndGroupOptions:o,noLocalSort:r,noLocalFilter:i})=>{const{groupOnColumn:a,groupOnDescending:l,sortOnColumn:u,descending:s}=o,c=$(([f,v])=>{const x=e.find(({name:w})=>w===f);return x==null?[f,void 0]:[f,v.filter&&x.serializeFilter(x,v.filter)]},[e]),d=$(([f,v])=>{const x=e.find(({name:C})=>C===f);if(x==null)return[f,{[se]:v}];const w={filter:x.deserializeFilter(x,v)};return pt(x,w),[f,w]},[e]),[h,p]=J({},t,{multi:!0,suffix:"-filter--",write:c,read:d}),z=$((f,v)=>p(x=>{const w=xe(v,x[f]);return pt(e.find(C=>C.name===f),w),{...x,[f]:{...x[f],...w}}}),[e,p]),b=_(()=>Object.values(h).map(f=>f.filter),[h]),y=_(()=>Object.fromEntries(e.map(f=>[f.name,!f.noLocalFilter&&f.getFilterFn(f,h[f.name]?.filter)]).filter(([,f])=>!!f)),[e,...b]),F=_(()=>!Array.isArray(n)||n.length===0?[]:Object.entries(y).length===0||i?n.slice():n.filter(f=>Object.values(y).every(v=>v(f))),[n,y,i]),g=_(()=>{if(!r&&!a&&u!=null&&u.sortOn!=null)return F.slice().sort(ke(f=>u.getComparableValue({...u,valuePath:u.sortOn},f),s));if(a!=null&&a.groupOn!=null){const f=F.reduce((v,x)=>{const w=a.getComparableValue({...a,valuePath:a.groupOn},x);if(w===void 0)return v;let C=v.find(R=>R.id===w);return C?(C.items.push(x),v):(C={id:w,name:w,items:[x]},[...v,C])},[]);return f.sort(ke(v=>a.getComparableValue({...a,valuePath:a.groupOn},v.items[0]),l)),!u||r?f:f.filter(v=>Array.isArray(v.items)).map(v=>(v.items.sort(ke(x=>u.getComparableValue({...u,valuePath:u.sortOn},x),s)),v))}return F},[F,a,l,u,s,r]),k=_(()=>{let f=0,v=0;const x=[];return g.forEach(w=>{if(Array.isArray(w.items)){_e(w,v++),w.items.forEach(C=>{_e(C,f++),x.push(C)});return}return _e(w,f++),x.push(w)},[]),x},[g]);return A(()=>{p(f=>Object.values(f).some(x=>x[se]!=null)?Object.fromEntries(Object.entries(f).map(([x,w])=>w[se]==null?[x,w]:d([x,w[se]]))):f)},[d]),{processedItems:g,visibleData:k,filters:h,filterFunctions:y,setFilterState:z}},Lr=n=>{const e=o=>{const r=n.data.indexOf(o);if(r<0)return null;const i=n.data.splice(r,1);if(n.data=n.data.slice(),Array.isArray(i)&&i.length>0)return i[0]},t=(o,r)=>{n.data.splice(o,1,r),n.data=n.data.slice()};return{removeItem:e,removeItems(o){const r=[];for(let i=o.length-1;i>=0;i-=1){const a=n.removeItem(o[i]);a!=null&&r.push(a)}return r},replaceItemAtIndex:t,replaceItem(o,r){const i=n.data.indexOf(o);if(i>-1)return t(i,r)},selectItem(o){n.shadowRoot.querySelector("#groupedList").select(o)},selectAll(){n.shadowRoot.querySelector("#groupedList").selectAll()},deselectAll(){n.shadowRoot.querySelector("#groupedList").deselectAll()},deselectItem(o){n.shadowRoot.querySelector("#groupedList").deselect(o)},isItemSelected(o){return n.shadowRoot.querySelector("#groupedList").isItemSelected(o)}}},Tr=({host:n,visibleData:e,filters:t,...o})=>{const{setFilterState:r}=o,i=_(()=>Lr(n),[]);Oe(o,Object.values(o)),Oe(i,Object.values(i)),A(()=>{const l=u=>r(u.detail.name,s=>({...s,...u.detail.state}));return n.addEventListener("legacy-filter-changed",l),()=>n.removeEventListener("legacy-filter-changed",l)},[]),P("visibleData",e),P("sortedFilteredGroupedItems",o.sortedFilteredGroupedItems),P("selectedItems",o.selectedItems),P("sortOn",o.sortOn),P("descending",o.descending),P("isMini",o.isMini);const a=_(()=>Object.fromEntries(Object.entries(t).filter(([,{filter:l}])=>l!==void 0).map(([l,{filter:u}])=>[l,u])),[t]);P("filters",a,Object.values(a))},Rr=n=>{const{hashParam:e,settingsId:t,data:o,resizeSpeedFactor:r,noLocal:i,noLocalSort:a=i,noLocalFilter:l=i,error:u,rowPartFn:s}=n,c=cr({settingsId:t,host:n}),{settings:d,setSettings:h,columns:p,resetRef:z}=c,b=Eo(p,e,d,h,z),{processedItems:y,visibleData:F,filters:g,setFilterState:k,filterFunctions:f}=Ar({data:o,columns:p,hashParam:e,sortAndGroupOptions:b,noLocalSort:a,noLocalFilter:l}),{isMini:v,collapsedColumns:x,miniColumns:w}=Sr({host:n,columns:p,settings:d,setSettings:h,resizeSpeedFactor:r,sortAndGroupOptions:b}),C=o&&Array.isArray(o)&&o.length>0,[R,H]=M([]);return Tr({host:n,visibleData:F,sortedFilteredGroupedItems:y,columns:p,filters:g,setFilterState:k,selectedItems:R,isMini:v,...b}),{header:kr({host:n,selectedItems:R,sortAndGroupOptions:b,dataIsValid:C,data:o,columns:p,filters:g,collapsedColumns:x,settings:d,filterFunctions:f,settingS:c,setFilterState:k,hideSelectAll:n.hideSelectAll===!0}),list:Dr({host:n,error:u,dataIsValid:C,processedItems:y,setSelectedItems:H,columns:p,collapsedColumns:x,miniColumns:w,sortAndGroupOptions:b,rowPartFn:s}),footer:Cr({host:n,selectedItems:R,columns:p})}};customElements.define("cosmoz-grouped-list-row",class extends HTMLElement{get item(){return this._item}set item(e){this._item=e,this._render()}get index(){return this._index}set index(e){this._index=e,this._render()}get renderFn(){return this._renderFn}set renderFn(e){this._renderFn=e,this._render()}_render(){this._item==null||this._index==null||this._renderFn==null||Ie(this._renderFn(this._item,this._index),this)}});const Mr={group:Symbol("group")},we=(n,e)=>(e.has(n)||e.set(n,{}),e.get(n)),jr=(n,e)=>!!we(n,e).expanded,Nr=(n,e)=>!!we(n,e).folded,De=n=>n?n.items instanceof Array:!1,Pr=n=>{if(!Array.isArray(n)||n.length===0)return;const e=Array.isArray(n[0]?.items);if(!n.every(o=>Array.isArray(o.items)===e))throw new Error("Data must be homogeneous.")},Br=(n,e,t)=>Array.isArray(n)?(Pr(n),n.reduce((r,i)=>{const a=i;return a.items?a.items.length?we(i,t).folded?r.concat(i):r.concat(i,a.items.map(l=>Object.assign(l,{[Mr.group]:i}))):e?r.concat(i):r:r.concat(i)},[])):void 0,Gr=(n,...e)=>typeof n=="function"?n(...e):n,Hr=(n,e)=>n===e,Wr=()=>{const[n,e]=M(()=>[new WeakMap]);return{setItemState:$((o,r)=>e(([i])=>{const a=we(o,i);return Object.assign(a,Gr(r,a)),[i]}),[]),state:n[0],signal:n}},qr=()=>{const{setItemState:n,state:e,signal:t}=Wr(),o=$((i,a)=>{De(i)&&n(i,l=>({folded:a!==void 0?a:!l.folded}))},[]),r=$((i,a)=>{De(i)||n(i,l=>({expanded:a!==void 0?!a:!l.expanded}))},[]);return{state:e,signal:t,toggleFold:o,toggleCollapse:r}},Xr=({initial:n,compareItemsFn:e,data:t,flatData:o})=>{const[r,i]=M(n),[a,l]=M(),u=$(g=>r.includes(g),[r]),s=$(g=>g?.items?.every(u)??!1,[u]),c=$(g=>u(g)||s(g),[u,s]),d=$(g=>{const f=g.items??[g];i(v=>[...v,...f.filter(x=>!v.includes(x))]),l(g)},[]),h=$(g=>{const f=g.items??[g];i(v=>v.filter(x=>!f.includes(x))),l(g)},[]),p=$(g=>{i(g.items?.slice()||[g]),l(g)},[]),z=$(()=>{i(t.flatMap(g=>g.items||g)),l(void 0)},[t]),b=$(()=>{i([]),l(void 0)},[]),y=$((g,k=!c(g))=>k?d(g):h(g),[c]),F=$((g,k)=>{if(!o)return;const f=a?o.findIndex(w=>e(w,a)):-1;if(f<0)return y(g,k);const[v,x]=[f,o.indexOf(g)].sort((w,C)=>w-C);o.slice(v,x+1).forEach((w,C,R)=>{C>0&&C<R.length-1&&De(w)||y(w,k)}),l(g)},[o,e,y]);return A(()=>i(g=>g.length>0&&o?o.filter(k=>g.find(f=>e(k,f))):g),[o]),{selectedItems:r,isItemSelected:u,isGroupSelected:s,isSelected:c,select:d,deselect:h,selectOnly:p,selectAll:z,deselectAll:b,toggleSelect:y,toggleSelectTo:F}},Ur={host:{position:"relative",display:"flex",flexDirection:"column"}},Kr=n=>{const{data:e,renderItem:t,renderGroup:o,displayEmptyGroups:r,compareItemsFn:i=Hr}=n,{toggleFold:a,toggleCollapse:l,state:u,signal:s}=qr(),c=_(()=>Br(e,r,u),[e,r,s]),{selectedItems:d,isItemSelected:h,isGroupSelected:p,isSelected:z,select:b,deselect:y,selectOnly:F,selectAll:g,deselectAll:k,toggleSelect:f,toggleSelectTo:v}=Xr({initial:[],compareItemsFn:i,data:e,flatData:c}),x=$((C,R)=>Array.isArray(C.items)?o(C,R,{selected:p(C,d),folded:Nr(C,u),toggleSelect:H=>f(C,typeof H=="boolean"?H:void 0),toggleFold:()=>a(C)}):t(C,R,{selected:d.includes(C),expanded:jr(C,u),toggleSelect:H=>f(C,typeof H=="boolean"?H:void 0),toggleCollapse:()=>l(C)}),[t,o,d,f,s]);ht(()=>Object.assign(n.style,Ur.host),[]),P("selectedItems",d);const w={toggleFold:a,toggleCollapse:l,isItemSelected:h,isGroupSelected:p,isSelected:z,select:b,deselect:y,selectOnly:F,selectAll:g,deselectAll:k,toggleSelect:f,toggleSelectTo:v};return Oe(w,Object.values(w)),{renderRow:x,flatData:c}},Jr=({renderRow:n,flatData:e})=>sn({items:e,renderItem:(t,o)=>m`<cosmoz-grouped-list-row
				.item=${t}
				.index=${o}
				.renderFn=${n}
			></cosmoz-grouped-list-row>`}),Yr=n=>Jr(Kr(n));customElements.define("cosmoz-grouped-list",L(Yr,{useShadowDOM:!1}));const Qr=n=>window.ShadyCSS?.ApplyShim?.transformCssText?.(n)||n,Zr=n=>{const{header:e,list:t,footer:o}=Rr(n);return m`
		<style>
			${un([],()=>Qr(Po))}
		</style>

		<div class="mainContainer">
			${qo(e)}
			<div class="tableContent" id="tableContent">
				${Ko(e,t)}
			</div>
			${Wo(o)}
		</div>

		<div id="columns">
			<slot id="columnsSlot"></slot>
		</div>
	`};customElements.define("cosmoz-omnitable",class extends L(Zr,{observedAttributes:["hash-param","sort-on","group-on","descending","group-on-descending","hide-select-all","settings-id","no-local","no-local-sort","no-local-filter","loading","mini-breakpoint"]}){connectedCallback(){super.connectedCallback(),ze(this,"selectedItems",[]),ze(this,"visibleData",[]),ze(this,"sortedFilteredGroupedItems",[])}});const fe=`
	<slot name="actions" slot="actions"></slot>
`;m(Object.assign([fe],{raw:[fe]}));Ee(Object.assign([fe],{raw:[fe]}));const ei=()=>m`<style>
	@keyframes rotating {
		100% {
			transform: rotate(360deg);
		}
	}

	:host {
		display: inline-block;
		vertical-align: middle;
		border-radius: 50%;
		width: 22px;
		height: 22px;
		border: 2px solid rgba(0, 0, 0, 0.1);
		border-top: 2px solid #5f5a92;
		animation: rotating 1.2s infinite cubic-bezier(0.785, 0.135, 0.15, 0.86);
		box-sizing: border-box;
		margin: 0 4px;
	}
</style>`;customElements.define("cz-spinner",L(ei));const gt=(n,e,t)=>{let o=String(n),r=-1;const i=t,a=e-o.length;for(;++r<a;)o=i+o;return o},O=(n,e)=>Math.floor(Math.random()*(e-n+1))+n,ti=()=>"2015-"+gt(O(1,12),2,"0")+"-"+gt(O(1,28),2,"0"),ni=()=>{const n=O(0,20);return n===1?new Date(2015,3,2,14,26,10,299):n===2?new Date(2016,4,2,10,9,10,444):n===3?new Date(2016,4,2,10,9,10,443):n===4?new Date(2016,4,2,10,9,10,442):new Date(O(2014,2017),O(1,12),O(1,28),O(0,23),O(0,59),O(0,59),O(0,999))},Rt=(n,e,t)=>{const o=O(n,e),r=[],i=["Lorem ipsum dolor sit amet","Nunc tristique","Curabitur vestibulum","Cras laoreet","Himenaeos","maximus diam purus at mauris"],a=["SEK","USD","EUR","AUD"];let l=0;for(let u=0;u<o;u+=1){const s="Group "+u,c=u*2+1;for(let d=0;d<c;d+=1){const h=[],p=[],z=l%10;for(let b=0;b<z;b+=1)h.push("Item "+b),p.push({name:"Item "+b,value:"item-value-"+b});r.push({id:l,name:s+" item "+d,value:O(0,1e4),bool:O(0,100)>50,object:{value:O(0,1e4),label:"Random string "+O(1,t)},sub:{subProp:i[l%i.length]},randomString:"Random string "+O(1,t),randomString2:"Random string 2 "+O(1,t),randomString3:"Random string 3 "+O(1,t),randomString4:"Random string 4 "+O(1,t),date:ni(),dateJSON:ti(),amount:{amount:O(10,100),currency:a[l%a.length]},group:s,list:h,objectList:p}),l+=1}}return r},li={title:"Components/ComsmozOmnitableFullDemo",component:"cosmoz-omnitable",tags:["autodocs"],args:{loading:!1,locale:"en",sortOn:"",groupOn:"",descending:!1,groupOnDescending:!1,hashParam:"",settingsId:"",selectedItems:[],disabled:!1},argTypes:{loading:{control:"boolean",description:"Show loading state",table:{defaultValue:{summary:"false"}}},locale:{control:"select",options:["en","fr","sv"],description:"Language locale",table:{defaultValue:{summary:"en"}}},selectedItems:{control:"object",description:"Show selected items"},data:{control:"object",description:"Show specified items"},sortOn:{control:"text",description:'Column property name to sort on (e.g., "amount", "date", "id")'},groupOn:{control:"text",description:'Column property name to group on (e.g., "amount", "date", "id")'},descending:{control:"boolean",description:"Sort on descending"},groupOnDescending:{control:"boolean",description:"Group on descending"},hashParam:{control:"text",description:"Hash parameter for URL state management"},settingsId:{control:"text",description:"ID for storing table settings"},disabled:{control:"boolean",description:"Hide one column",table:{defaultValue:{summary:"false"}}}},render:n=>m`
            <style>
                cosmoz-omnitable {
                    min-height: 400px;
                }
            </style>

            <cosmoz-omnitable
                id="omnitable"
                .loading=${n.loading}
                .data=${n.data}
                .selectedItems=${n.selectedItems}
                hash-param=${n.hashParam}
                sort-on=${n.sortOn}
                group-on=${n.groupOn}
                .descending=${n.descending}
                .group-on-descending=${n.groupOnDescending}
                settings-id=${n.settingsId}
            >
                <cosmoz-omnitable-column
                    priority="-1"
                    title="Name"
                    name="name"
                    value-path="name"
                    flex="2"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column-amount
                    title="Amount"
                    name="amount"
                    value-path="amount"
                    locale=${n.locale}
                    rates='{"EUR": 1, "USD":0.8169982616, "AUD":0.6529827192, "SEK": 0.1019271438}'
                ></cosmoz-omnitable-column-amount>

                <cosmoz-omnitable-column-date
                    title="Date"
                    name="date"
                    value-path="date"
                    locale=${n.locale}
                ></cosmoz-omnitable-column-date>

                <cosmoz-omnitable-column-autocomplete
                    flex="0"
                    width="40px"
                    title="Id"
                    name="id"
                    value-path="id"
                ></cosmoz-omnitable-column-autocomplete>

                <cosmoz-omnitable-column-boolean
                    title="Boolean"
                    name="bool"
                    value-path="bool"
                    true-label="Yes"
                    false-label="No"
                ></cosmoz-omnitable-column-boolean>

                <cosmoz-omnitable-column-autocomplete
                    title="Group"
                    name="group"
                    value-path="group"
                    flex="0"
                    width="125px"
                ></cosmoz-omnitable-column-autocomplete>

                <cosmoz-omnitable-column-autocomplete
                    title="Object"
                    name="object"
                    value-path="object"
                    value-property="value"
                    text-property="label"
                    flex="0"
                    width="125px"
                    empty-label="None"
                    empty-value="nada"
                ></cosmoz-omnitable-column-autocomplete>

                <cosmoz-omnitable-column-date
                    title="DateJSON"
                    name="datejson"
                    value-path="dateJSON"
                    locale=${n.locale}
                ></cosmoz-omnitable-column-date>

                <cosmoz-omnitable-column-time
                    title="Time"
                    name="time"
                    value-path="date"
                    locale=${n.locale}
                ></cosmoz-omnitable-column-time>

                <cosmoz-omnitable-column-datetime
                    title="Datetime"
                    name="datetime"
                    value-path="date"
                    locale=${n.locale}
                ></cosmoz-omnitable-column-datetime>

                <cosmoz-omnitable-column-list
                    title="List"
                    name="list"
                    value-path="list"
                ></cosmoz-omnitable-column-list>

                <cosmoz-omnitable-column-list-horizontal
                    title="Object list"
                    name="objectList"
                    value-path="objectList"
                    value-property="value"
                    text-property="name"
                ></cosmoz-omnitable-column-list-horizontal>

                <cosmoz-omnitable-column
                    title="Sub-property"
                    name="sub-property"
                    value-path="sub.subProp"
                ></cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    title="Custom template"
                    name="custom-name"
                    value-path="name"
                ></cosmoz-omnitable-column>

                <cosmoz-omnitable-column-number
                    title="Value"
                    name="value"
                    value-path="value"
                    locale=${n.locale}
                    priority="1"
                ></cosmoz-omnitable-column-number>

                <paper-button slot="actions" on-run="removeItems">
                    <iron-icon icon="delete"></iron-icon>
                    <span>Remove items</span>
                </paper-button>
            </cosmoz-omnitable>
        `,play:async()=>{console.log("Current hash:",window.location.hash)}},ue={args:{data:Rt(10,10,10)}},ce={args:{data:Rt(2,2,10)}},de={args:{data:[]}};ue.parameters={...ue.parameters,docs:{...ue.parameters?.docs,source:{originalSource:`{
  args: {
    data: generateTableDemoData(10, 10, 10)
  }
}`,...ue.parameters?.docs?.source}}};ce.parameters={...ce.parameters,docs:{...ce.parameters?.docs,source:{originalSource:`{
  args: {
    data: generateTableDemoData(2, 2, 10)
  }
}`,...ce.parameters?.docs?.source}}};de.parameters={...de.parameters,docs:{...de.parameters?.docs,source:{originalSource:`{
  args: {
    data: []
  }
}`,...de.parameters?.docs?.source}}};const si=["TableWithLargeData","TableWithSmallData","TableWithNoData"];export{ue as TableWithLargeData,de as TableWithNoData,ce as TableWithSmallData,si as __namedExportsOrder,li as default};
