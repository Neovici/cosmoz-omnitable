import{x as c,B as Fe,E as ft,b as Nt}from"./iframe-BvinzX61.js";import{t as K,c as E,g as C,u as M,i as jt,m as Pt,s as Bt,a as $,b as xe,n as Ht,h as Gt,d as bt,e as ye,f as I,j as L,o as pe,k as Wt,l as Ae,r as qt,P as A,p as xt,q as yt,v as Xt,D as Ut,w as Kt,x as Jt,y as Ee,z as Qt,A as _,B as Yt,C as ve,E as ge,F as V,G as Zt,H as $e,I as en,J as tn,K as nn,T as on,L as vt,M as Le,N as rn,O as $t,Q as ln,R as Te,S as Je,U as an,V as Re,W as sn,X as un,Y as Oe,Z as Me,_ as cn,$ as Ve,a0 as P,a1 as dn,a2 as Ce,a3 as mn}from"./cosmoz-collapse-D8mwmvj2.js";const pn=K`
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
`,gn=()=>c`
	<style>
		${pn}
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
`;customElements.define("cosmoz-clear-button",E(gn));const U=({valuePath:n},e)=>C(e,n),hn=U,fn=U,bn=({valuePath:n},e)=>t=>{const o=C(t,n);return o==null?!1:o.toString().toLowerCase().trim().includes(e.toLowerCase().trim())},xn=(n,e)=>e===""||e==null?null:e,N=n=>class extends n{static get properties(){return{isOmnitableColumn:{type:Boolean,value:!0},title:{type:String},valuePath:{type:String,notify:!0},values:{type:Array,notify:!0},filter:{type:Object},noLocalFilter:{type:Boolean},disabled:{type:Boolean,value:!1,notify:!0},editable:{type:Boolean,notify:!0},loading:{type:Boolean,value:!1,notify:!0},externalValues:{type:Boolean,value:!1,notify:!0},name:{type:String},sortPath:{type:String},groupOn:{type:String},sortOn:{type:String},noSort:{type:Boolean,value:!1},width:{type:String,value:"75px"},minWidth:{type:String,value:"40px"},flex:{type:String,value:"1"},cellClass:{type:String,value:"default-cell"},headerCellClass:{type:String,value:"default-header-cell"},priority:{type:Number,value:0},hidden:{type:Boolean,notify:!0},preferredDropdownHorizontalAlign:{type:String,value:"right"},renderHeader:{type:Function},renderCell:{type:Function},renderEditCell:{type:Function},renderGroup:{type:Function},mini:{type:Number,value:null},renderMini:{type:Function}}}static get observers(){return["notifyFilterChange(filter)"]}notifyFilterChange(e){this.__ownChange||this.dispatchEvent(new CustomEvent("legacy-filter-changed",{detail:{name:this.name,state:this.legacyFilterToState(e)},bubbles:!0}))}legacyFilterToState(e){return{filter:e}}getFilterFn(){}getString(e,t){return U(e,t)}toXlsxValue(e,t){return hn(e,t)}cellTitleFn(e,t){return this.getString(e,t)}headerTitleFn(e){return e.title}serializeFilter(e,t){return xn(e,t)}deserializeFilter(e,t){return t==null?null:typeof t=="string"?window.decodeURIComponent(t):t}getComparableValue(e,t){return fn(e,t)}computeSource(e,t){return t}_propertiesChanged(e,t,o){super._propertiesChanged(e,t,o),this.dispatchEvent(new CustomEvent("cosmoz-column-prop-changed",{bubbles:!0}))}},wt=n=>(e,t,o=jt)=>{const r=Gt(),i=new URLSearchParams(r.hash.replace("#",""));return n(e,t,o,i),"#!"+Object.assign(r,{hash:i}).href.replace(location.origin,"")},zt=n=>n==null||n==="",yn=wt((n,e,t,o)=>zt(t(e))?o.delete(n):o.set(n,t(e))),vn=wt((n,e,t,o)=>Object.entries(e).map(t).forEach(([r,i])=>zt(i)?o.delete(n+r):o.set(n+r,i))),Q=(n,e,{suffix:t="",read:o,write:r,multi:i}={})=>{const[l,a]=i?[vn,Pt]:[yn,Bt],[s,u]=M(()=>e==null?n:a(e+t,o)??n),m=$(d=>u(g=>{const p=xe(d,g);return e!=null&&Ht(l(e+t,p,r),null,{notify:!1}),p}),[e,t,l,r]);return[s,m]},$n=n=>[!0,"true",1,"yes","on"].includes(n),ne=n=>n===""||(n==null?void 0:$n(n)),oe=(n,e,t)=>$(o=>{n(o),t(r=>({...r,[e]:o}))},[n,e,t]),wn=(n,e,t,o,r)=>{const[i,l]=Q(t.sortOn,e,{suffix:"-sortOn"}),[a,s]=Q(ne(t.descending),e,{suffix:"-descending",read:ne}),[u,m]=Q(t.groupOn,e,{suffix:"-groupOn"}),[d,g]=Q(ne(t.groupOnDescending),e,{suffix:"-groupOnDescending",read:ne}),p=I(()=>n.find(h=>h.name===i),[n,i]),w=I(()=>n.find(h=>h.name===u),[n,u]),b={groupOn:u,setGroupOn:oe(m,"groupOn",o),groupOnDescending:d,setGroupOnDescending:oe(g,"groupOnDescending",o),sortOn:i,setSortOn:oe(l,"sortOn",o),descending:a,setDescending:oe(s,"descending",o),columns:n},y=I(()=>b,Object.values(b)),F=$(h=>{l(h.sortPath),m(h.groupOn),s(h.descending),g(h.groupOnDescending)},[]);return L(()=>void(r.current=F),[]),{...y,sortAndGroup:y,groupOnColumn:w,sortOnColumn:p}},we=bt();customElements.define("sort-and-group-provider",we.Provider);customElements.define("sort-and-group-consumer",E(({render:n})=>n(ye(we)),{useShadowDOM:!1}));const zn=c`<svg
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
</svg>`,Cn=c`
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
`,Se=c` <svg
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
</svg>`,Sn=c`<svg
	xmlns="http://www.w3.org/2000/svg"
	width="8"
	height="20"
	viewBox="0 0 8 20"
	fill="currentColor"
>
	<path
		d="M1 16L4 19M4 19L7 16M4 19V1"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>`,Ct=({column:n,on:e,descending:t,setOn:o,setDescending:r})=>{const{name:i,title:l}=n??{};return c`<button
		class="sg"
		title=${pe(l)}
		data-on=${pe(i===e&&(t?"desc":"asc")||void 0)}
		@click=${a=>{a.stopPropagation();const u=a.currentTarget?.dataset.on;u||(o(i),r(!1)),u==="asc"?r(!0):u==="desc"&&(o(),r(!1))}}
	>
		<span>${l}</span> ${Sn}
	</button>`},St=({columns:n,...e})=>n?.map(t=>Ct({column:t,...e})),kn=()=>c`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:n,groupOn:e,setGroupOn:t,groupOnDescending:o,setGroupOnDescending:r}={})=>St({columns:n?.filter?.(i=>i.groupOn),on:e,setOn:t,descending:o,setDescending:r})}
	>
	</sort-and-group-consumer>
`,_n=()=>c`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:n,sortOn:e,setSortOn:t,descending:o,setDescending:r}={})=>St({columns:n?.filter?.(i=>i.sortPath&&!i.noSort),on:e,setOn:t,descending:o,setDescending:r})}
	>
	</sort-and-group-consumer>
`,In=["label","value","slot","always-float-label","column"],Fn=Ae`
	${Wt}

	:host {
		--text-align: left;
	}

	:host([text-align='right']) {
		--text-align: right;
	}

	:host([text-align='center']) {
		--text-align: center;
	}

	:host::part(control) {
		width: 100%;
	}

	#input {
		color: var(--color);
		user-select: none;
		cursor: pointer;
		min-height: var(--line-height);
		text-align: var(--text-align);
		white-space: nowrap;
		overflow: clip;
		/* TODO: Remove later on, for compat only */
		font-size: 16px;
		font-family: sans-serif, Verdana, Arial;
	}

	label {
		display: block;
		text-align: var(--text-align);
		transform-origin: var(--text-align) top;
	}

	:host(:not([always-float-label])) label {
		transform: none !important;
	}
`,On=Ae`
	/* Sort handle button when embedded in label */
	label .sg {
		display: inline-flex;
		cursor: pointer;
		align-items: center;
		margin-bottom: 6px;
		overflow: hidden;
		flex: none;
		background: none;
		border: none;
		outline: none;
		color: inherit;
		padding: 0;
		vertical-align: middle;
	}

	label .sg span {
		display: none;
	}

	label .sg svg {
		display: block;
		scale: 0.7;
	}

	label .sg[data-on] {
		color: var(--cosmoz-omnitable-checkbox-checked-color, var(--primary-color));
	}

	label .sg:not([data-on='desc']) {
		transform: scaleY(-1);
	}

	:host(:not(:hover)) label .sg:not([data-on]) {
		display: none;
	}
`,Vn=(n,e)=>c`<div id="input" part="input" role="button" class="control" slot=${e}>
		${n||""}
	</div>`,J=(n,e,t)=>{if(!e||e.noSort||!t)return n;const{sortOn:o,setSortOn:r,descending:i,setDescending:l}=t,a=Ct({column:e,on:o,setOn:r,descending:i,setDescending:l});return c`<style>
			${On}
		</style>
		${a} ${n}`},Dn=({label:n,value:e,slot:t,column:o})=>{const r=ye(we);return qt(Vn(e,t),{label:J(n,o,r)})};customElements.define("cosmoz-omnitable-dropdown-input",E(Dn,{observedAttributes:In,styleSheets:[Fn]}));const An=n=>e=>n(t=>{if(t.inputValue===void 0&&e.target.value==="")return t;clearTimeout(t.t);const o=setTimeout(()=>n(r=>({...r,filter:r.inputValue})),1e3);return{...t,inputValue:e.target.value,t:o}}),En=n=>()=>n(e=>({...e,filter:e.inputValue})),Ln=n=>e=>{e.keyCode===13&&(e.preventDefault(),n(t=>({...t,filter:t.inputValue})))},Tn=n=>e=>n(t=>({...t,headerFocused:e.detail.value})),Rn=n=>()=>n(e=>({...e,filter:null,inputValue:null})),Mn=n=>n!=null&&n!=="";class Nn extends N(A){static get properties(){return{minWidth:{type:String,value:"55px"},editMinWidth:{type:String,value:"55px"},inputValue:{type:Object,notify:!0}}}getFilterFn(e,t){if(!(t==null||t===""))return bn(e,t)}renderCell(e,{item:t}){return c`<span class="default-column">${U(e,t)}</span>`}renderEditCell(e,{item:t},o){return c`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>o(i.target.value)}
			.value=${U(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,inputValue:o,headerFocused:r},i,l,a){return c`<cosmoz-input
			.label=${J(e.title,e,a)}
			.value=${o??t}
			@value-changed=${An(i)}
			focused=${r}
			@focused-changed=${Tn(i)}
			@keydown=${Ln(i)}
			@blur=${En(i)}
		>
			<cosmoz-clear-button
				suffix
				slot="suffix"
				?visible=${Mn(t)}
				light
				@click=${Rn(i)}
			></cosmoz-clear-button>
		</cosmoz-input>`}legacyFilterToState(e){return{filter:e,inputValue:e}}}customElements.define("cosmoz-omnitable-column",Nn);const B=Symbol("column"),jn=n=>{let e=!0;const t=n.map(o=>o.name);return n.forEach(o=>{o.name==null&&(e=!1,console.error("The name attribute needs to be set on all columns! Missing on column",o))}),n.forEach(o=>{t.indexOf(o.name)!==t.lastIndexOf(o.name)&&(e=!1,console.error("The name attribute needs to be unique among all columns! Not unique on column",o))}),e},Pn=n=>{const e=n.valuePath??n.name;return{name:n.name,title:n.title,valuePath:e,groupOn:n.groupOn??e,sortPath:n.sortPath??n.sortOn??e,noSort:n.noSort,minWidth:n.minWidth,width:n.width,flex:n.flex,priority:n.priority,getString:n.getString,getComparableValue:n.getComparableValue,serializeFilter:n.serializeFilter,deserializeFilter:n.deserializeFilter,toXlsxValue:n.toXlsxValue,renderHeader:n.renderHeader,renderCell:n.renderCell,renderEditCell:n.renderEditCell,renderGroup:n.renderGroup,cellTitleFn:n.cellTitleFn,headerTitleFn:n.headerTitleFn,getFilterFn:n.getFilterFn,headerCellClass:n.headerCellClass,cellClass:n.cellClass,editable:n.editable,values:n.values,source:yt(n.computeSource),noLocalFilter:n.noLocalFilter,mini:n.mini,renderMini:n.renderMini,loading:n.loading,externalValues:n.externalValues,computeSource:n.computeSource,trueLabel:n.trueLabel,falseLabel:n.falseLabel,valueProperty:n.valueProperty,textProperty:n.textProperty,emptyLabel:n.emptyLabel,emptyValue:n.emptyValue,min:n.min,max:n.max,locale:n.locale,autoupdate:n.autoupdate,maximumFractionDigits:n.maximumFractionDigits,minimumFractionDigits:n.minimumFractionDigits,currency:n.currency,rates:n.rates,autodetect:n.autodetect,ownerTree:n.ownerTree,keyProperty:n.keyProperty,...n.getConfig?.(n),[B]:n}},Bn=n=>n.isOmnitableColumn&&!n.hidden,Hn=n=>{const e=n.assignedElements({flatten:!0}).filter(Bn);return jn(e)?e:[]},Gn=(n,e)=>(Array.isArray(e)?n.filter(o=>e.includes(o.name)):n.filter(o=>!o.disabled)).map(Pn),Wn=(n,{enabledColumns:e})=>{const[t,o]=M([]);return xt(()=>{let r;const i=n.shadowRoot.querySelector("#columnsSlot"),l=()=>{o(Gn(Hn(i),e))},a=()=>{cancelAnimationFrame(r),r=requestAnimationFrame(l)};return a(),i.addEventListener("slotchange",a),n.addEventListener("cosmoz-column-prop-changed",a),()=>{i.removeEventListener("slotchange",a),n.removeEventListener("cosmoz-column-prop-changed",a),cancelAnimationFrame(r)}},[e]),t},kt=(n,e)=>Array.isArray(n)?n.map(t=>C(t,e)).filter((t,o,r)=>t!=null&&r.indexOf(t)===o):void 0,Z=({externalValues:n,values:e,valuePath:t},o)=>{if(n)return n;if(typeof e=="function")return e;if(t!==void 0)return kt(o,t)},qn=(n,e,t,o)=>{const{valuePath:r}=e,i=r!==void 0?C(t,r):void 0;if(o===i)return;r!==void 0&&Xt(t,r,o);const l={item:t,valuePath:r,value:o,oldValue:i,column:e[B]};n.dispatchEvent(new CustomEvent("column-item-changed",{bubbles:!0,composed:!0,detail:l}))},_t=n=>n?typeof n.close=="function"?n:_t(n.parentElement):null,Ne=n=>class extends n{static get properties(){return{filter:{type:Object,notify:!0},values:{type:Array,value(){return[]}},headerFocused:{type:Boolean,notify:!0},min:{type:Number,value:null},max:{type:Number,value:null},limits:{type:Function},autoupdate:{type:String,value:!0},locale:{type:String,value:null},_filterInput:{type:Object,value(){return{min:null,max:null}}},_range:{type:Object,computed:"_computeRange(values.*)"},_limit:{type:Object,computed:"_computeLimit(_range, _filterInput.*, min, max)",value(){return{}}},_tooltip:{type:String,computed:"_computeTooltip(title, _filterText)"},_fromClasses:{type:String,computed:"_computeInputClasses(_filterInput.min)"},_toClasses:{type:String,computed:"_computeInputClasses(_filterInput.max)"}}}static get observers(){return["_filterInputChanged(_filterInput.*, autoupdate)","_filterChanged(filter.*)","_updateLimits(limits, headerFocused)"]}disconnectedCallback(){this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),super.disconnectedCallback()}_computeInputClasses(e){return e!=null&&e!==""?"has-value":""}toNumber(e,t,o){if(e==null||e==="")return;const r=typeof e=="number"?e:Number(e);if(Number.isNaN(r))return;if(o==null||t==null)return r;const i=this.toNumber(t);return i==null?r:o(r,i)}toValue(){return this.toNumber.apply(this,arguments)}getComparableValue(e,t){if(e==null)return;let o=e;return t!=null&&(o=this.get(t,e)),this.toValue(o)}renderValue(){}getInputString(e,t=this.valuePath){const o=this.toValue(this.get(t,e));return this._toInputString(o)}_computeRange(e){const t=e.base,o=Array.isArray(t)&&t.length&&t.map(r=>this.toValue(r)).filter(r=>r!=null);return!o||o.length<1?{min:null,max:null}:o.reduce((r,i)=>({min:this.toValue(i,r.min,Math.min),max:this.toValue(i,r.max,Math.max)}),{})}_computeLimit(e,t,o,r){if(!e)return;const i=t.base,l=this.toValue(o),a=this.toValue(r),s=l??this.toValue(e.min),u=a??this.toValue(e.max);return{fromMin:s,fromMax:this.toValue(u,this._fromInputString(i.max,"max"),Math.min),toMin:this.toValue(s,this._fromInputString(i.min,"min"),Math.max),toMax:u}}_computeFilterText(e){if(e.base==null)return;const t=e.base,o=this.toValue(t.min),r=this.toValue(t.max),i=[];return o!=null&&i.push(this.renderValue(o)),i.push(" - "),r!=null&&i.push(this.renderValue(r)),i.length>1?i.join(""):void 0}_computeTooltip(e,t){return t==null?e:`${e}: ${t}`}_fromInputString(e){return this.toValue(e)}_toInputString(e){const t=this.toValue(e);return t??null}_getDefaultFilter(){return{min:null,max:null}}_filterInputChanged(e,t){const o=e.path.split(".")[1];this.__inputChangePath=o||null,t&&(this._limitInputDebouncer=Ut.debounce(this._limitInputDebouncer,Kt.after(600),()=>{this._limitInput(),this._updateFilter()}),Jt(this._limitInputDebouncer))}_clearFrom(){this.set("_filterInput.min",null),this._updateFilter()}_clearTo(){this.set("_filterInput.max",null),this._updateFilter()}_onBlur(){this._limitInput(),this._updateFilter()}_onKeyDown(e){const t=e.currentTarget,o=Array.from(t.parentElement.querySelectorAll("cosmoz-input")),r=o[o.findIndex(a=>a===t)+1],i=!r,l=o[0]===t;switch(e.keyCode){case 13:if(e.preventDefault(),!i)r.focus();else{const a=this._limitInput();this._updateFilter(),a||this._closeParent(t)}break;case 9:(i&&!e.shiftKey||l&&e.shiftKey)&&this._closeParent(t)}}_closeParent(e){const t=_t(e);t&&t.close()}_onDropdownOpenedChanged({currentTarget:e,type:t,detail:o}){(t==="focus"||o?.value===!0)&&setTimeout(()=>{e.querySelector("cosmoz-input:focus")||e.querySelector("cosmoz-input")?.focus()},100)}_limitInput(){const e=this._filterInput,t=this.__inputChangePath,o=t?this._fromInputString(this.get(t,e),t):null;if(this.__inputChangePath=null,o==null)return!1;const r=this._limit,i=t==="min"?"from":"to",l=this.get(i+"Min",r),a=this.get(i+"Max",r),s=this.toValue(o,l,Math.max),u=this.toValue(s,a,Math.min);return this.getComparableValue(o)!==this.getComparableValue(u)?(this.set(["_filterInput",t],this._toInputString(u,t)),this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),!0):!1}_updateFilter(){const e=this._filterInput,t=this.filter,o=this._fromInputString(e.min,"min"),r=this._fromInputString(e.max,"max");this.getComparableValue(o)===this.getComparableValue(t,"min")&&this.getComparableValue(r)===this.getComparableValue(t,"max")||this.set("filter",{min:o,max:r})}_filterChanged(e){if(this._filterInput==null)return;const t=this._filterInput,o=e.base,r=this._fromInputString(t.min,"min"),i=this._fromInputString(t.max,"max");this.getComparableValue(r)===this.getComparableValue(o,"min")&&this.getComparableValue(i)===this.getComparableValue(o,"max")||(this.set("_filterInput",{min:this._toInputString(o.min),max:this._toInputString(o.max)}),this._limitInputDebouncer&&this._limitInputDebouncer.cancel())}hasFilter(){const e=this.filter;return e==null?!1:this.toValue(e.min)!=null||this.toValue(e.max)!=null}resetFilter(){this.filter=this._getDefaultFilter()}_updateLimits(e,t){e&&Promise.resolve(xe(e,{active:t})).then(o=>{const{min:r,max:i}=o??{};Object.assign(this,{...r!=null?{min:r}:{},...i!=null?{max:i}:{}})})}},ee=n=>class extends n{static get template(){return Ee`<div id="output" style="position:relative;"></div>`}connectedCallback(){super.connectedCallback(),Fe(this.render(),this.$.output)}_propertiesChanged(e,t,o){super._propertiesChanged(e,t,o),requestAnimationFrame(()=>Fe(this.render(),this.$.output))}},te=({title:n,tooltip:e="",filterText:t="",onOpenedChanged:o,content:r,horizontalAlign:i="left",externalValues:l=null,column:a=null})=>{const s={filtered:!!t,...l!=null&&{[`external-values-${l}`]:!0}};return c`
		<style>
			.dropdown {
				outline: none;
			}
			.dropdown:focus-within .input {
				--focused: focused;
			}

			.dropdown::part(button) {
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

			.dropdown-content {
				position: absolute !important;
				height: auto !important;
				top: -30px;
				left: 0;
				right: 0;
				width: fit-content;
			}

			.dropdown-content h3 {
				font-weight: 500;
				font-size: 13px;
				margin: 0;
				color: var(--cosmoz-omnitable-text-color);
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
		</style>

		<cosmoz-dropdown
			@focus=${o}
			class=${`${Qt(s)} dropdown`}
			title=${e||""}
		>
			<cosmoz-omnitable-dropdown-input
				class="input"
				slot="button"
				.label=${n}
				.placeholder=${n}
				.value=${t??""}
				.column=${a}
				text-align=${i}
				?always-float-label=${t?.length>0}
			></cosmoz-omnitable-dropdown-input>
			<div class="dropdown-content">${r}</div>
		</cosmoz-dropdown>
	`};class Xn extends Ne(ee(A)){static get properties(){return{currency:{type:String},autodetect:{type:Boolean,value:!1},rates:{type:Object},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:"_computeFilterText(filter.*, _formatters)"},headerFocused:{type:Boolean,value:!1},column:{type:Object,value:null}}}static get observers(){return["_valuesChanged(autodetect, currency, values)"]}render(){const e=t=>{this.headerFocused=t.type==="focus",this._onDropdownOpenedChanged(t)};return c`
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

			${te({title:this.title,tooltip:this._tooltip,filterText:this._filterText,headerFocused:this.headerFocused,externalValues:this.externalValues,onOpenedChanged:e,column:this.column,content:c`
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-input
						class=${this._fromClasses}
						type="number"
						title=${_("Minimum amount")}
						label=${_("Min amount")}
						.value=${this._filterInput?.min}
						@value-changed=${t=>{this.set("_filterInput.min",t.detail.value)}}
						@blur=${t=>this._onBlur(t)}
						@keydown=${t=>this._onKeyDown(t)}
						min=${this._toInputStringAmount(this._limit.fromMin)}
						max=${this._toInputStringAmount(this._limit.fromMax)}
					>
						<div slot="suffix" suffix>${this.filter?.min?.currency}</div>
					</cosmoz-input>
					<cosmoz-input
						class=${this._toClasses}
						type="number"
						title=${_("Maximum amount")}
						label=${_("Max amount")}
						.value=${this._filterInput?.max}
						@value-changed=${t=>{this.set("_filterInput.max",t.detail.value)}}
						@blur=${t=>this._onBlur(t)}
						@keydown=${t=>this._onKeyDown(t)}
						min=${this._toInputStringAmount(this._limit.toMin)}
						max=${this._toInputStringAmount(this._limit.toMax)}
					>
						<div slot="suffix" suffix>${this.filter?.max?.currency}</div>
					</cosmoz-input>
				`})}
		`}_valuesChanged(e,t,o){if(!Array.isArray(o)||o.length<1||!e&&t)return;const r=o.reduce((l,a)=>{if(a.currency){const s=a.currency;l[s]=(l[s]||0)+1}return l},{});let i=Object.keys(r)[0];Object.keys(r).reduce((l,a)=>{const s=Math.max(l,r[a]);return s===r[a]&&(i=a),s},0),this.set("currency",i)}toAmount(e,t,o){if(e==null||e==="")return;if(typeof e!="object"||e.currency==null||e.currency==="")return null;const r=this.toNumber(e.amount);if(r==null||Number.isNaN(r))return null;const i={currency:e.currency,amount:r};if(o==null||t==null)return i;const l=this.toAmount(t);if(l==null)return i;const a=this.rates||{},s=i.amount*(a[i.currency]||1),u=l.amount*(a[l.currency]||1);return this.toNumber(s,u,o)===s?i:l}toValue(){return this.toAmount.apply(this,arguments)}getComparableValue(e,t){const o=super.getComparableValue(e,t);if(o==null)return;const r=this.toNumber(o.amount),i=this.rates;return i==null?r:r*(i[o.currency]||1)}getString(e,t=this.valuePath){const o=this.toValue(this.get(t,e));return o===void 0?"":o===null?"Invalid value":this.renderValue(o)}getCurrency(e,t){const o=this.get(t,e);return o&&o.currency}getFormatter(e,t){const o=t||"",r=e+o||"",i=this._formatters=this._formatters||{};return i[r]||(i[r]=new Intl.NumberFormat(t||void 0,{style:"currency",currency:e})),i[r]}renderValue(e){const t=this.toAmount(e);return t==null?"":this.getFormatter(t.currency,this.locale).format(e.amount)}_amountValueChanged(e){const t=e.target,o=t.value,r=e.model.item,i=this.get(this.valuePath,r),l=Number(o),a={amount:l,currency:i.currency};this.set(this.valuePath,a,r),this._fireItemChangeEvent(r,this.valuePath,i,this.renderValue.bind(this))}_toInputString(e){const t=this.toValue(e);return t==null?null:this.toNumber(t.amount)}_toInputStringAmount(e){const t=this.rates;if(t==null)return this._toInputString(e);const o=this.toValue(e);return o==null?null:(this.toNumber(o.amount)*(t[o.currency]||1)/(t[this.currency]||1)).toFixed(2)}_fromInputString(e,t){const o=this.toNumber(e);if(o!=null)return this.toValue({amount:o,currency:t&&this.get(["filter",t,"currency"])||this.currency})}}customElements.define("cosmoz-omnitable-amount-range-input",Xn);const T=(n,e,t)=>{if(n==null||n==="")return;const o=typeof n=="number"?n:Number(n);if(!Number.isNaN(o))return o},It=n=>{const e=T(n);return e==null?null:e.toString()},Un=({valuePath:n},e)=>{const t=T(n?C(e,n):e);return It(t)},Qe=n=>{const e=It(n);return e??""},W=({valuePath:n,maximumFractionDigits:e},t)=>{if(t==null)return;const o=n?C(t,n):t,r=T(o);if(r!=null)return e!==null?T(r.toFixed(e)):r},Kn=Yt((n,e,t)=>{const o={localeMatcher:"best fit"};return e!==null&&(o.minimumFractionDigits=e),t!==null&&(o.maximumFractionDigits=t),new Intl.NumberFormat(n||void 0,o)}),Ye=({valuePath:n,locale:e,minimumFractionDigits:t,maximumFractionDigits:o},r)=>{const i=n?C(r,n):r;if(i==null)return"";const l=T(i);return l==null?void 0:Kn(e,t,o).format(l)},Jn=(n,e)=>t=>{const o=W(n,t);if(o==null)return!1;const r=W({...n,valuePath:"min"},e),i=W({...n,valuePath:"max"},e);return!(o<(r??-1/0)||o>(i??1/0))},Y=(n={},e,t,o)=>{if(e==null||e==="")return;if(typeof e!="object"||e.currency==null||e.currency==="")return null;const r=T(e.amount);return r==null||Number.isNaN(r)?null:{currency:e.currency,amount:r}},q=({valuePath:n,rates:e},t)=>{if(t==null)return;let o=t;n!=null&&(o=C(t,n));const r=Y(e,o);if(r==null)return;const i=T(r.amount);return e==null||i==null?i:i*(e?.[r.currency]||1)},Qn=(n,e)=>t=>{const o=q(n,t);if(o===void 0)return!1;const r=q({...n,valuePath:"min"},e),i=q({...n,valuePath:"max"},e);return r===void 0||i===void 0?!0:!(o<r||o>i)},re={},Yn=(n,e)=>{const o=n+(e||"")||"";return re[o]||(re[o]=new Intl.NumberFormat(e||void 0,{style:"currency",currency:n})),re[o]},Zn=(n,e,t)=>{const o=Y(n,e);return o==null?"":Yn(o.currency,t).format(o.amount)},Ze=({valuePath:n,rates:e,locale:t},o)=>{const r=Y(e,n?C(o,n):void 0);return r===void 0?"":r===null?"Invalid value":Zn(e,r,t)},et=n=>n?n.amount+n.currency:"",tt=n=>{if(n==null||n==="")return;const e=n.match(/^(-?[\d]+)([\D]+?)$/iu);if(!(!Array.isArray(e)||e.length<0))return{amount:Number(e[1]),currency:e[2]}},eo=({valuePath:n},e)=>n?C(e,n)?.currency:null,to=({valuePath:n},e)=>n?C(e,n)?.amount:void 0;class no extends N(A){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},currency:{type:String,notify:!0},autodetect:{type:Boolean,value:!1,notify:!0},rates:{type:Object,notify:!0},width:{type:String,value:"70px"},cellClass:{type:String,value:"amount-cell align-right"},headerCellClass:{type:String,value:"amount-header-cell"}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const o=q({...e,valuePath:"min"},t),r=q({...e,valuePath:"max"},t);if(!(o==null&&r==null))return Qn(e,t)}getString(e,t){return Ze(e,t)}toXlsxValue(e,t){return Ze(e,t)}getComparableValue(e,t){return q(e,t)}serializeFilter({rates:e},t){if(t==null)return;const o=Y(e,t.min),r=Y(e,t.max);if(!(o==null&&r==null))return et(o)+"~"+et(r)}deserializeFilter(e,t){if(t==null||t==="")return null;const o=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(o)?{min:tt(o[1]),max:tt(o[2])}:null}renderCell(e,{item:t}){return c`<span>${e.getString(e,t)}</span>`}renderEditCell(e,{item:t},o){return c`<cosmoz-input
			no-label-float
			type="number"
			@change=${i=>o({amount:i.target.value,currency:C(t,e.valuePath)?.currency})}
			.value=${to(e,t)}
		>
			<div slot="suffix">${eo(e,t)}</div>
		</cosmoz-input>`}renderHeader({title:e,min:t,max:o,limits:r,locale:i,rates:l,currency:a,autoupdate:s,autodetect:u,noSort:m,name:d},{filter:g},p,w){return c`<cosmoz-omnitable-amount-range-input
			.title=${e}
			.filter=${g}
			.values=${w}
			.rates=${l}
			.min=${t}
			.max=${o}
			.limits=${r}
			.locale=${i}
			.currency=${a}
			.autoupdate=${s}
			.autodetect=${u}
			.column=${{noSort:m,name:d,title:e}}
			@filter-changed=${({detail:{value:b}})=>p(y=>({...y,filter:b}))}
			@header-focused-changed=${({detail:{value:b}})=>p(y=>({...y,headerFocused:b}))}
		></cosmoz-omnitable-amount-range-input>`}computeSource(e,t){return Z(e,t)}}customElements.define("cosmoz-omnitable-column-amount",no);const oo=(n,e)=>{if(!Array.isArray(n))return;const t=[];return n.reduce((o,r)=>Array.isArray(r)?(r.forEach(i=>{o.push(i)}),o):(o.push(r),o),[]).filter((o,r,i)=>{if(i.indexOf(o)!==r)return!1;if(e){const l=C(o,e);if(t.indexOf(l)!==-1)return!1;t.push(l)}return!0})},ro=(n,e,t)=>{if(n==null)return[];if(Array.isArray(n))return oo(n,e);if(typeof n=="object"){const o=e??"id",r=t??"label";return Object.entries(n).map(([i,l])=>({[o]:i,[r]:l})).sort((i,l)=>i[r]<l[r]?-1:i[r]>l[r]?1:0)}return[]},je=(n,e,t)=>ve(e&&C(n,e)).map(ge(t)),Pe=({valuePath:n,textProperty:e},t)=>je(t,n,e).filter(o=>o!=null).join(", "),io=Pe,lo=({valueProperty:n,valuePath:e,emptyValue:t,emptyProperty:o},r)=>i=>{const l=ge(n),a=ve(C(i,e));return r.some(s=>a.length===0&&ge(o||n)(s)===t||a.some(u=>l(u)===l(s)))},Be=n=>e=>n(t=>({...t,filter:e})),He=n=>e=>n(t=>({...t,headerFocused:e})),Ge=n=>e=>n(t=>({...t,query:e})),Ft=({emptyValue:n,emptyLabel:e,emptyProperty:t,textProperty:o,valueProperty:r},i)=>{const l=ro(i,r,o);return!e||n===void 0||!o||!(t||r)||!l?l:[{[o]:e,[t||r]:n},...l]},ao=(n,e)=>Ft(n,kt(e,n.valuePath)),We=n=>class extends n{static get properties(){return{textProperty:{type:String},valueProperty:{type:String},emptyLabel:{type:String},emptyValue:{type:Object},emptyProperty:{type:String}}}getConfig(e){return{emptyProperty:e.emptyProperty}}getString(e,t){return Pe(e,t)}toXlsxValue(e,t){return io(e,t)}getComparableValue({valuePath:e,valueProperty:t},o){const r=C(o,e);return t==null?r:ve(r).reduce((l,a)=>(l.push(C(a,t)),l),[]).sort().join(" ")}getFilterFn(e,t){if(!(!t||!Array.isArray(t)||t.length===0))return lo(e,t)}serializeFilter(e,t){return t.length===0?null:JSON.stringify(t)}deserializeFilter(e,t){return JSON.parse(decodeURIComponent(t))}computeSource(e,t){return e.externalValues||typeof e.values=="function"?async(...o)=>Ft(e,await Promise.resolve(xe(e.values,...o))):ao(e,t)}},so=({valuePath:n,textProperty:e,valueProperty:t},o)=>{const r=e?Zt(e):ge(t),i=ve(n&&C(o,n)).map(r);return i.length>1?i.filter(Boolean).join(","):i[0]};class uo extends We(N(A)){static get properties(){return{headerCellClass:{type:String,value:"autocomplete-header-cell"},minWidth:{type:String,value:"55px"},editMinWidth:{type:String,value:"55px"},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return c`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},o){return c`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>o(i.target.value)}
			.value=${U(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:o},r,i,l){return c`<cosmoz-autocomplete-ui
			class="external-values-${e.externalValues}"
			?keep-opened=${e.keepOpened}
			?keep-query=${e.keepQuery}
			?show-single=${e.showSingle}
			?preserve-order=${e.preserveOrder}
			.textual=${e.textual}
			.label=${J(e.title,e,l)}
			.source=${i}
			.textProperty=${e.textProperty}
			.valueProperty=${e.valueProperty}
			.itemRenderer=${e[B]?.itemRenderer}
			.value=${t}
			.text=${o}
			.limit=${e.limit}
			.onChange=${Be(r)}
			.onFocus=${He(r)}
			.onText=${Ge(r)}
			>${V(e.loading,()=>c`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}getComparableValue(e,t){return so(e,t)}}customElements.define("cosmoz-omnitable-column-autocomplete",uo);const qe=(n,e)=>e.find(({value:t})=>n===t),co=(n,e,t)=>{const o=qe(e,t);return o?o.text:n},nt=(n,e,t,o)=>co(n,C(e,t),o),mo=({valuePath:n},e,t)=>qe(C(e,n),t),po=n=>e=>{n(t=>({...t,filter:e?.[0]?.value??null}))},go=n=>e=>{n(t=>({...t,headerFocused:e}))},ho=n=>e=>{n(t=>({...t,query:e}))},fo=n=>e=>n(e?.[0]?.value),ot=({valuePath:n,trueLabel:e,falseLabel:t},o)=>C(o,n)?e:t,bo=({valuePath:n},e)=>t=>C(t,n)===e,ie=yt((n,e)=>[{text:n,value:!0},{text:e,value:!1}]),xo=({valuePath:n,trueLabel:e,falseLabel:t},o)=>n?C(o,n)?e:t:"",yo=(n,e)=>{try{return JSON.parse(e)}catch{return null}};class vo extends N(A){static get properties(){return{trueLabel:{type:String,value:"True"},falseLabel:{type:String,value:"False"},flex:{type:String,value:"0"},cellClass:{type:String,value:"boolean-cell"}}}getString(e,t){return ot(e,t)}renderCell(e,{item:t}){return ot(e,t)}renderEditCell(e,{item:t},o){const{trueLabel:r,falseLabel:i}=e;return c`<cosmoz-autocomplete
			no-label-float
			.title=${nt(e.title,t,e.valuePath,ie(r,i))}
			.source=${ie(r,i)}
			.textProperty=${"text"}
			.value=${mo(e,t,ie(r,i))}
			.onChange=${fo(o)}
			.limit=${1}
			>${V(e.loading,()=>c`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete
		>`}renderHeader(e,{filter:t,query:o},r,i,l){return c` <cosmoz-autocomplete-ui
			.label=${J(e.title,e,l)}
			.title=${nt(e.title,t,e.valuePath,i)}
			.source=${i}
			.textProperty=${"text"}
			.value=${qe(t,i)}
			.text=${o}
			.onChange=${po(r)}
			.onFocus=${go(r)}
			.onText=${ho(r)}
			.limit=${1}
			>${V(e.loading,()=>c`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}computeSource({trueLabel:e,falseLabel:t}){return ie(e,t)}getFilterFn(e,t){if(t!=null)return bo(e,t)}toXlsxValue(e,t){return xo(e,t)}deserializeFilter(e,t){return yo(e,t)}}customElements.define("cosmoz-omnitable-column-boolean",vo);const Xe=n=>class extends Ne(n){static get properties(){return{max:{type:Date,value:null},min:{type:Date,value:null},_filterText:{type:String,computed:"_computeFilterText(filter.*, formatter)"},formatter:{type:Object,computed:"_computeFormatter(locale)"},headerFocused:{type:Boolean,value:!1},column:{type:Object,value:null}}}toDate(e,t,o){if(e==null||e==="")return;let r=e;if(r instanceof Date||(typeof e=="string"&&(r=this.getAbsoluteISOString(r)),r=new Date(r)),Number.isNaN(r.getTime()))return null;if(o==null||t==null)return r;const i=this.toDate(t);if(i==null)return r;const l=this.getComparableValue(r),a=this.getComparableValue(i);return o(l,a)===l?r:i}toValue(){return this.toDate.apply(this,arguments)}getComparableValue(e,t){const o=super.getComparableValue(e,t);if(o!=null)return this.toNumber(o.getTime())}getString(e,t=this.valuePath,o=this.formatter){const r=this.toValue(this.get(t,e));return r===void 0?"":r===null?"Invalid Date":this.renderValue(r,o)}getAbsoluteISOString(e){return e.length===19?e+this._getTimezoneString(e):e}_getTimezoneString(e){const t=-new Date(e).getTimezoneOffset()/60;return(t<0?"-":"+")+["0",Math.abs(t)].join("").substr(-2)+":00"}renderValue(e,t=this.formatter){if(t==null)return;const o=this.toValue(e);if(o!=null)return t.format(o)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0)}_toInputString(e){const t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(0,10)}_dateValueChanged(e){const t=e.currentTarget,o=t.value,r=e.model.item,i=this.get(this.valuePath,r),l=this._fromInputString(o);this.set(this.valuePath,l,r),this._fireItemChangeEvent(r,this.valuePath,i,this.renderValue.bind(this))}_toLocalISOString(e){return $e(e)}};class $o extends Xe(ee(A)){render(){const e=t=>{this.headerFocused=t.type==="focus"};return c`
			<style>
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

			${te({title:this.title,tooltip:this._tooltip,filterText:this._filterText,headerFocused:this.headerFocused,externalValues:this.externalValues,onOpenedChanged:e,column:this.column,content:c`
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-input
						type="date"
						label=${_("From date")}
						min=${this._toInputString(this._limit.fromMin)}
						max=${this._toInputString(this._limit.fromMax)}
						.value=${this._filterInput?.min}
						@value-changed=${t=>this.set("_filterInput.min",t.detail.value)}
					></cosmoz-input>
					<cosmoz-input
						type="date"
						label=${_("Until date")}
						min=${this._toInputString(this._limit.toMin)}
						max=${this._toInputString(this._limit.toMax)}
						.value=${this._filterInput?.max}
						@value-changed=${t=>this.set("_filterInput.max",t.detail.value)}
					></cosmoz-input>
				`})}
		`}_fromInputString(e,t){const o=this.toDate(e);if(o!=null)return t==="min"&&o.setHours(0,0,0,0),t==="max"&&o.setHours(23,59,59),o}_filterInputChanged(e,t){const o=e.path.split(".")[1],r=o&&e.value;if(r&&r.match(/^0+/u)){this._limitInputDebouncer.cancel();return}super._filterInputChanged(e,t)}}customElements.define("cosmoz-omnitable-date-range-input",$o);const wo=n=>{const e=-new Date(n).getTimezoneOffset()/60;return(e<0?"-":"+")+["0",Math.abs(e)].join("").substr(-2)+":00"},Ue=n=>n.length===19?n+wo(n):n,Ot=n=>{if(n==null||n==="")return;let e=n;return!(e instanceof Date)&&(typeof n=="string"&&(e=Ue(e)),e=en(e),!e)||Number.isNaN(e.getTime())?null:e},j=({valuePath:n},e)=>{if(e==null)return;let t=e;n!=null&&(t=C(e,n));const o=Ot(t);if(o!=null)return T(o.getTime())},D=(n,e,t)=>{const o=Ot(n);return o??null},Ke=(n,e)=>{if(e==null)return;const t=D(n);if(t!=null)return e.format(t)},le={},zo=n=>{const e=n||"";return le[e]||(le[e]=new Intl.DateTimeFormat(n||void 0)),le[e]},rt=({valuePath:n,locale:e},t)=>{let o=C(t,n||"");return o===void 0?"":(o=D(o),o===null?"Invalid Date":Ke(o,zo(e)))},Vt=n=>{const e=D(n);if(e==null)return null;const t=$e(e);return t==null?null:t.slice(0,10)},Co=({valuePath:n},e)=>Vt(C(e,n||"")),Dt=(n,e)=>{const t=D(n);if(t!=null)return t},it=n=>{const e=Vt(n);return e??""},So=({valuePath:n},e)=>{if(!n)return"";const t=D(C(e,n));if(!t)return"";const o=D($e(t));return o?(o.setHours(0,0,0,0),o):""},At=(n,e)=>t=>{const o=j(n,t);if(o==null)return!1;const r=j({...n,valuePath:"min"},e),i=j({...n,valuePath:"max"},e);return!(o<(r??-1/0)||o>(i??1/0))};class ko extends N(A){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"date-header-cell"},width:{type:String,value:"100px"},minWidth:{type:String,value:"82px"},flex:{type:String,value:"0"}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const o=j({...e,valuePath:"min"},t),r=j({...e,valuePath:"max"},t);if(!(o==null&&r==null))return At(e,t)}getString(e,t){return rt(e,t)}toXlsxValue(e,t){return So(e,t)}getComparableValue(e,t){return j(e,t)}serializeFilter(e,t){if(t==null)return;const o=D(t.min),r=D(t.max);if(!(o==null&&r==null))return it(o)+"~"+it(r)}deserializeFilter(e,t){if(t==null||t==="")return null;const o=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(o)?{min:D(o[1]),max:D(o[2])}:null}renderCell(e,{item:t}){return c`<div class="omnitable-cell-date">
			${rt(e,t)}
		</div>`}renderEditCell(e,{item:t},o){return c`<cosmoz-input
			no-label-float
			type="date"
			@change=${i=>o(Dt(i.target.value))}
			.value=${Co(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:o,limits:r,locale:i,noSort:l,name:a},{filter:s},u,m){return c`<cosmoz-omnitable-date-range-input
			.title=${e}
			.filter=${s}
			.values=${m}
			.min=${t}
			.max=${o}
			.limits=${r}
			.locale=${i}
			.column=${{noSort:l,name:a,title:e}}
			@filter-changed=${({detail:{value:d}})=>u(g=>({...g,filter:d}))}
			@header-focused-changed=${({detail:{value:d}})=>u(g=>({...g,headerFocused:d}))}
		></cosmoz-omnitable-date-range-input>`}computeSource(e,t){return Z(e,t)}}customElements.define("cosmoz-omnitable-column-date",ko);class _o extends We(N(A)){renderCell({valuePath:e,textProperty:t},{item:o}){const r=je(o,e,t).map(i=>c`<li>${i}</li>`);return c`
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
		`}renderEditCell(){return"not implemented"}renderHeader(e,{filter:t,query:o},r,i,l){return c`<cosmoz-autocomplete-ui
			class="external-values-${e.externalValues}"
			.label=${J(e.title,e,l)}
			.source=${i}
			.textProperty=${e.textProperty}
			.value=${t}
			.text=${o}
			.onChange=${Be(r)}
			.onFocus=${He(r)}
			.onText=${Ge(r)}
			>${V(e.loading,()=>c`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		> `}}customElements.define("cosmoz-omnitable-column-list-horizontal",_o);window.Cosmoz=window.Cosmoz||{};class lt extends tn(nn(on,A)){static get template(){return Ee`
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
		`}static get is(){return"cosmoz-omnitable-column-list-data"}static get properties(){return{items:{type:Array},_expanded:{type:Boolean,value:!1},_othersCount:{type:Number,computed:"_computeOthersCount(items)"}}}static get observers(){return["_itemsLengthChanged(items.length)"]}_itemsLengthChanged(){requestAnimationFrame(()=>this.dispatchEvent(new CustomEvent("expand",{bubbles:!0})))}_firstItem(e){if(e!=null&&e.length>0)return e[0]}_hideExpand(e,t){return e!==void 0&&e.length!==null?e.length<=2||t:!0}_hideCollapse(e,t){return e!==void 0&&e.length!==null?e.length<=2||!t:!0}_otherItems(e,t){if(e!=null&&(e.length<=2||t))return e.slice(1)}_computeOthersCount(e){if(e!=null)return e.length-1}_toggleExpand(e){this._expanded=!this._expanded,e.stopPropagation(),e.preventDefault()}}customElements.define(lt.is,lt);class Io extends We(N(A)){static get properties(){return{keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,textual:e.textual}}renderCell({valuePath:e,textProperty:t},{item:o}){return c`<cosmoz-omnitable-column-list-data
			.items=${je(o,e,t)}
		></cosmoz-omnitable-column-list-data>`}renderEditCell(e,{item:t},o){const r=i=>o(i.target.value.split(/,\s*/gu));return c`<cosmoz-input
			no-label-float
			type="text"
			.value=${Pe(e,t)}
			@change=${r}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:o},r,i,l){return c`<cosmoz-autocomplete-ui
			class="external-values-${e.externalValues}"
			?keep-opened=${e.keepOpened}
			?keep-query=${e.keepQuery}
			.textual=${e.textual}
			.column=${e}
			.label=${J(e.title,e,l)}
			.source=${i}
			.textProperty=${e.textProperty}
			.valueProperty=${e.valueProperty}
			.itemRenderer=${e[B]?.itemRenderer}
			.value=${t}
			.text=${o}
			.onChange=${Be(r)}
			.onFocus=${He(r)}
			.onText=${Ge(r)}
			>${V(e.loading,()=>c`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}}customElements.define("cosmoz-omnitable-column-list",Io);class Fo extends Ne(ee(A)){static get properties(){return{maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},formatter:{type:Object,computed:"_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)"},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:"_computeFilterText(filter.*, formatter)"},headerFocused:{type:Boolean,value:!1},column:{type:Object,value:null}}}render(){const e=t=>{this.headerFocused=t.type==="focus",this._onDropdownOpenedChanged(t)};return c`
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

			${te({title:this.title,tooltip:this._tooltip,filterText:this._filterText,headerFocused:this.headerFocused,horizontalAlign:"right",externalValues:this.externalValues,onOpenedChanged:e,column:this.column,content:c`
					<h3>${this.title}</h3>
					<cosmoz-input
						class=${this._fromClasses}
						type="number"
						label=${_("From")}
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
						label=${_("To")}
						.value=${this._filterInput?.max}
						@value-changed=${t=>{this.set("_filterInput.max",t.detail.value)}}
						@blur=${t=>this._onBlur(t)}
						@keydown=${t=>this._onKeyDown(t)}
						min=${this._toInputString(this._limit.toMin)}
						max=${this._toInputString(this._limit.toMax)}
					></cosmoz-input>
				`})}
		`}_computeFormatter(e,t,o){const r={localeMatcher:"best fit"};return t!==null&&(r.minimumFractionDigits=t),o!==null&&(r.maximumFractionDigits=o),new Intl.NumberFormat(e||void 0,r)}getComparableValue(e,t){if(e==null)return;let o=e;if(t!=null&&(o=this.get(t,e)),o=this.toValue(o),o==null)return;const r=this.maximumFractionDigits;return r!==null?this.toValue(o.toFixed(r)):o}renderValue(e,t=this.formatter){const o=this.toNumber(e);if(o!=null)return t.format(o)}}customElements.define("cosmoz-omnitable-number-range-input",Fo);class Oo extends N(A){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},cellClass:{type:String,value:"number-cell align-right"},width:{type:String,value:"30px"},minWidth:{type:String,value:"30px"},headerCellClass:{type:String,value:"number-header-cell"},maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const o=W({...e,valuePath:"min"},t),r=W({...e,valuePath:"max"},t);if(!(o==null&&r==null))return Jn(e,t)}getString(e,t){return Ye(e,t)}toXlsxValue({valuePath:e},t){return C(t,e)}getComparableValue(e,t){return W(e,t)}serializeFilter(e,t){if(t==null)return;const o=T(t.min),r=T(t.max);if(!(o==null&&r==null))return Qe(o)+"~"+Qe(r)}deserializeFilter(e,t){if(t==null||t==="")return null;const o=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(o)?{min:T(o[1]),max:T(o[2])}:null}renderCell(e,{item:t}){return c`<div class="omnitable-cell-number">
			${Ye(e,t)}
		</div>`}renderEditCell(e,{item:t},o){return c`<cosmoz-input
			no-label-float
			type="number"
			@change=${i=>o(i.target.value)}
			.value=${Un(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:o,limits:r,locale:i,maximumFractionDigits:l,minimumFractionDigits:a,autoupdate:s,noSort:u,name:m},{filter:d},g,p){return c`<cosmoz-omnitable-number-range-input
			.title=${e}
			.filter=${d}
			.values=${p}
			.min=${t}
			.max=${o}
			.limits=${r}
			.locale=${i}
			.maximumFractionDigits=${l}
			.minimumFractionDigsits=${a}
			.autoupdate=${s}
			.column=${{noSort:u,name:m,title:e}}
			@filter-changed=${({detail:{value:w}})=>g(b=>({...b,filter:w}))}
			@header-focused-changed=${({detail:{value:w}})=>g(b=>({...b,headerFocused:w}))}
		></cosmoz-omnitable-number-range-input>`}computeSource(e,t){return Z(e,t)}}customElements.define("cosmoz-omnitable-column-number",Oo);const Et="1970-01-01",H=(n,e,t)=>{const o=typeof n=="string"&&n.length>3&&n.length<=9?Ue(Et+"T"+n):n;return D(o)},ae={},Vo=n=>{const e=n||"";if(ae[e])return ae[e];const t={hour:"numeric",minute:"numeric",second:"numeric"};return ae[e]=new Intl.DateTimeFormat(n||void 0,t),ae[e]},me=({valuePath:n,locale:e},t)=>{const o=H(C(t,n||""));return o===void 0?"":o===null?"Invalid Date":Ke(o,Vo(e))},Do=(n,e)=>n.valuePath?me(n,e):"",Ao=n=>{const e=H(n);if(e==null)return null;const t=$e(e);return t&&t.slice(11,19)},X=({valuePath:n},e)=>{if(e==null)return;const t=Ao(n==null?e:C(e,n));if(t==null)return;const o=H(Ue(Et+"T"+t));return o==null?o:T(o.getTime())},Eo=(n,e)=>t=>{const o=X(n,t);if(o==null)return!1;const r=X({...n,valuePath:"min"},e),i=X({...n,valuePath:"max"},e);return r==null||i==null?!1:!(o<r||o>i)},at=n=>{const e=H(n);return e==null?"":e.toISOString().slice(11,19).replace(/:/gu,".")},st=n=>{if(!(n==null||n===""))return H(typeof n=="string"?n.replace(/\./gu,":")+"Z":n)};class Lo extends Xe(ee(A)){render(){const e=t=>{this.headerFocused=t.type==="focus"};return c`
			<cosmoz-clear-button
				@click=${()=>this.resetFilter()}
				?visible=${this.hasFilter()}
			></cosmoz-clear-button>

			${te({title:this.title,tooltip:this._tooltip,filterText:this._filterText,headerFocused:this.headerFocused,externalValues:this.externalValues,onOpenedChanged:e,column:this.column,content:c`
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-input
						type="time"
						label=${_("From time")}
						step=${this.filterStep}
						.value=${this._filterInput.min}
						@value-changed=${t=>this.set("_filterInput.min",t.detail.value)}
					></cosmoz-input>
					<cosmoz-input
						type="time"
						label=${_("Until time")}
						step=${this.filterStep}
						.value=${this._filterInput.max}
						@value-changed=${t=>this.set("_filterInput.max",t.detail.value)}
					></cosmoz-input>
				`})}
		`}get _fixedDate(){return"1970-01-01"}toDate(e,t,o){const r=typeof e=="string"&&e.length>3&&e.length<=9?this.getAbsoluteISOString(this._fixedDate+"T"+e):e;return super.toDate(r,t,o)}_toInputString(e){const t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(11,19)}getComparableValue(e,t){if(e==null)return;let o=this._toInputString(t==null?e:this.get(t,e));if(o!=null&&(o=this.toValue(this.getAbsoluteISOString(this._fixedDate+"T"+o)),o!=null))return this.toNumber(o.getTime())}_timeValueChanged(e){const t=e.target,o=t.value,r=e.model.item,i=this.toDate(r.date),l=this.toDate(i!=null?i.toISOString().slice(0,10)+"T"+o:o),a=s=>s;l==null&&(this.set(this.valuePath,l,r),this._fireItemChangeEvent(r,this.valuePath,i,a.bind(this)))}_computeFormatter(e){const t={hour:"numeric",minute:"numeric",second:"numeric"};return new Intl.DateTimeFormat(e||void 0,t)}}customElements.define("cosmoz-omnitable-time-range-input",Lo);class To extends N(A){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"time-header-cell"},minWidth:{type:String,value:"63px"},width:{type:String,value:"210px"},flex:{type:String,value:"0"},filterStep:{type:String,value:"1"}}}getFilterFn(e,t){const o=X({...e,valuePath:"min"},t),r=X({...e,valuePath:"max"},t);if(!(o==null&&r==null))return Eo(e,t)}getString(e,t){return me(e,t)}toXlsxValue(e,t){return Do(e,t)}getComparableValue(e,t){return X(e,t)}serializeFilter(e,t){if(t==null)return;const o=H(t.min),r=H(t.max);if(!(o==null&&r==null))return at(o)+"~"+at(r)}deserializeFilter(e,t){if(t==null||t==="")return null;const o=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(o)?{min:st(o[1]),max:st(o[2])}:null}renderCell(e,{item:t}){return me(e,t)}renderEditCell(e,{item:t},o){return c`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>o(i.target.value)}
			.value=${me(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:o,locale:r,filterStep:i,noSort:l,name:a},{filter:s},u,m){return c`<cosmoz-omnitable-time-range-input
			.title=${e}
			.filter=${s}
			.values=${m}
			.min=${t}
			.max=${o}
			.locale=${r}
			.filterStep=${i}
			.column=${{noSort:l,name:a,title:e}}
			@filter-changed=${({detail:{value:d}})=>u(g=>({...g,filter:d}))}
			@header-focused-changed=${({detail:{value:d}})=>u(g=>({...g,headerFocused:d}))}
		></cosmoz-omnitable-time-range-input>`}computeSource(e,t){return Z(e,t)}}customElements.define("cosmoz-omnitable-column-time",To);const se={},Ro=n=>{const e=n||"";if(se[e])return se[e];const t={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return se[e]=new Intl.DateTimeFormat(n||void 0,t),se[e]},ke=({valuePath:n,locale:e},t)=>{const o=D(C(t,n||""));return o===void 0?"":o===null?"Invalid Date":Ke(o,Ro(e))},Mo=({valuePath:n},e)=>n?C(e,n):"",ut=n=>{const e=D(n);return e==null?"":e.toISOString().slice(0,19).replace(/:/gu,".")},ct=n=>{if(!(n==null||n==="")&&typeof n=="string")return D(n.replace(/\./gu,":")+"Z")};class No extends Xe(ee(A)){render(){const e=t=>{this.headerFocused=t.type==="focus"};return c`
			<style>
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

			${te({title:this.title,tooltip:this._tooltip,filterText:this._filterText,headerFocused:this.headerFocused,externalValues:this.externalValues,onOpenedChanged:e,column:this.column,content:c`
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-datetime-input
						date-label=${_("From date")}
						time-label=${_("From time")}
						min=${this._toInputString(this._limit.fromMin)}
						max=${this._toInputString(this._limit.fromMax)}
						step=${this.filterStep}
						.value=${this._filterInput?.min}
						@value-changed=${t=>this.set("_filterInput.min",t.detail.value)}
					></cosmoz-datetime-input>
					<cosmoz-datetime-input
						date-label=${_("To date")}
						time-label=${_("To time")}
						min=${this._toInputString(this._limit.toMin)}
						max=${this._toInputString(this._limit.toMax)}
						step=${this.filterStep}
						.value=${this._filterInput?.max}
						@value-changed=${t=>this.set("_filterInput.max",t.detail.value)}
					></cosmoz-datetime-input>
				`})}
		`}_toInputString(e){const t=this.toValue(e);if(t!=null)return this._toLocalISOString(t).slice(0,19)}_computeFormatter(e){const t={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return new Intl.DateTimeFormat(e||void 0,t)}}customElements.define("cosmoz-omnitable-datetime-range-input",No);class dt extends N(A){static get is(){return"cosmoz-omnitable-column-datetime"}static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"datetime-header-cell"},width:{type:String,value:"210px"},minWidth:{type:String,value:"128px"},flex:{type:String,value:"0"},filterStep:{type:Number,value:1}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const o=j({...e,valuePath:"min"},t),r=j({...e,valuePath:"max"},t);if(!(o==null&&r==null))return At(e,t)}getString(e,t){return ke(e,t)}toXlsxValue(e,t){return Mo(e,t)}getComparableValue(e,t){return j(e,t)}serializeFilter(e,t){if(t==null)return;const o=D(t.min),r=D(t.max);if(!(o==null&&r==null))return ut(o)+"~"+ut(r)}deserializeFilter(e,t){if(t==null||t==="")return null;const o=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(o)?{min:ct(o[1]),max:ct(o[2])}:null}renderCell(e,{item:t}){return ke(e,t)}renderEditCell(e,{item:t},o){return c`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>o(Dt(i.target.value))}
			.value=${ke(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:o,limits:r,locale:i,filterStep:l,noSort:a,name:s},{filter:u},m,d){return c`<cosmoz-omnitable-datetime-range-input
			.title=${e}
			.filter=${u}
			.values=${d}
			.min=${t}
			.max=${o}
			.limits=${r}
			.locale=${i}
			.filterStep=${l}
			.column=${{noSort:a,name:s,title:e}}
			@filter-changed=${({detail:{value:g}})=>m(p=>({...p,filter:g}))}
			@header-focused-changed=${({detail:{value:g}})=>m(p=>({...p,headerFocused:g}))}
		></cosmoz-omnitable-datetime-range-input>`}computeSource(e,t){return Z(e,t)}}customElements.define(dt.is,dt);const jo=({column:n,item:e,selected:t,folded:o,group:r})=>n?(n.renderGroup??n.renderCell)(n,{item:e,selected:t,folded:o,group:r}):ft;customElements.define("cosmoz-omnitable-group-row",E(jo,{useShadowDOM:!1}));const Po=n=>{const{column:e}=n;return L(()=>{let t=0,o=0;const r=a=>{n.dispatchEvent(new CustomEvent("column-resize",{bubbles:!0,composed:!0,detail:{newWidth:Math.ceil(o+a.pageX-t),column:e}}))},i=()=>{document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",i)},l=a=>{t=a.pageX,o=n.previousElementSibling.getBoundingClientRect().width,document.addEventListener("pointermove",r),document.addEventListener("pointerup",i)};return n.addEventListener("pointerdown",l),()=>n.removeEventListener("pointerdown",l)},[e]),ft};customElements.define("cosmoz-omnitable-resize-nub",E(Po));const Bo=({data:n,columns:e,groupOnColumn:t,filters:o,setFilterState:r,sortAndGroup:i})=>vt(e,l=>l.name,l=>[c`<div
				class="cell ${l.headerCellClass} header-cell"
				part="cell header-cell cell-${l.name} header-cell-${l.name}"
				?hidden="${l===t}"
				title="${l.headerTitleFn(l)}"
				name="${l.name}"
			>
				${l.renderHeader(l,o[l.name]??{},a=>r(l.name,a),l.source(l,n),i)}
			</div>`,c`<cosmoz-omnitable-resize-nub
				.column="${l}"
				name="${l.name}"
			></cosmoz-omnitable-resize-nub>`]),Ho=({columns:n,settingsConfig:e,hideSelectAll:t,...o})=>{const r=ye(we);return c`
		${V(n,i=>Bo({columns:i,sortAndGroup:r,...o}))}
		${V(!t,()=>c` <cosmoz-omnitable-settings
					.config=${e}
					part="settings"
				></cosmoz-omnitable-settings>`)}
	`};customElements.define("cosmoz-omnitable-header-row",E(Ho,{useShadowDOM:!1}));const Go=K`
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
`,Wo=({column:n})=>c`
	<div class="label" title="${n.title}" part="item-expand-label">
		${n.title}
	</div>
	<div class="value" part="item-expand-value">
		<slot></slot>
	</div>
`;customElements.define("cosmoz-omnitable-item-expand-line",E(Wo,{styleSheets:[Le(Go)]}));const qo=({columns:n,item:e,selected:t,expanded:o,groupOnColumn:r})=>rn(n,i=>c`<cosmoz-omnitable-item-expand-line
				.column=${i}
				?hidden=${i===r}
				exportparts="item-expand-label, item-expand-value"
				>${i.renderCell(i,{item:e,selected:t,expanded:o})}</cosmoz-omnitable-item-expand-line
			>`);customElements.define("cosmoz-omnitable-item-expand",E(qo,{useShadowDOM:!1}));const Xo=(n,e,t)=>n.editable?n.renderEditCell(n,e,t(n,e.item)):n.renderCell(n,e),Uo=({columns:n,groupOnColumn:e,item:t,index:o,selected:r,expanded:i,onItemChange:l})=>vt(n,a=>a.name,a=>c`<div
				class="cell itemRow-cell ${a.cellClass??""}"
				part="cell itemRow-cell cell-${a.name} itemRow-cell-${a.name}"
				?hidden="${a===e}"
				?editable="${a.editable}"
				title="${a.cellTitleFn(a,t)}"
				name="${a.name}"
			>
				${Xo(a,{item:t,index:o,selected:r,expanded:i},l)}
			</div>`);customElements.define("cosmoz-omnitable-item-row",E(Uo,{useShadowDOM:!1}));const Lt=K`
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
`,Ko=K`
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

		text-transform: var(--cosmoz-omnitable-header-text-transform, none);
		--paper-font-subhead_-_font-weight: var(
			--cosmoz-omnitable-header-font-weight,
			normal
		);

		--cosmoz-input-font-family: var(
			--cosmoz-omnitable-header-font-family,
			'Roboto',
			'Noto',
			sans-serif
		);
		--cosmoz-input-font-size: var(
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

	${Lt}

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
`,mt=n=>{const e=n.replace(/"/gu,'""');return e.search(/("|,|\n)/gu)>=0?'"'+e+'"':n},Jo=(n,e,t)=>{const i=n.map(a=>mt(a.title)).join(";")+`
`,l=e.map(a=>n.map(s=>{const u=s.getString(s,a);return u==null?"":mt(String(u))}).join(";")+`
`);l.unshift(i),$t(new File(l,t,{type:"text/csv;charset=utf-8"}))},Qo=(n,e)=>{const t=n.map(r=>r.title),o=e.map(r=>n.map(i=>{const l=i.toXlsxValue(i,r);return l??""}));return o.unshift(t),o},Yo=(n,e,t,o)=>{const r=Qo(n,e),i=new ln(t).addSheetFromData(r,o).generate();$t(new File([i],t,{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}))},Zo=({columns:n,selectedItems:e,csvFilename:t,xlsxFilename:o,xlsxSheetname:r,topPlacement:i})=>c`<cosmoz-bottom-bar
		id="bottomBar"
		?active=${!Te(e.length)}
		part="bottomBar"
		exportparts="bar: bottomBar-bar, info: bottomBar-info, buttons: bottomBar-buttons"
	>
		<slot name="info" slot="info">
			${_("{count} selected item",{count:e.length})}
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
				@click=${()=>Jo(n,e,t)}
			>
				${_("Save as CSV")}
			</button>
			<button
				@click=${()=>Yo(n,e,o,r)}
			>
				${_("Save as XLSX")}
			</button>
			<slot name="download-menu"></slot>
		</cosmoz-dropdown-menu>
	</cosmoz-bottom-bar>`,er=({allSelected:n,onAllCheckboxChange:e,sortAndGroup:t,dataIsValid:o,data:r,columns:i,filters:l,groupOnColumn:a,setFilterState:s,settingsConfig:u,hideSelectAll:m})=>c`<sort-and-group-provider .value=${t}>
		<div class="header" id="header" part="header">
			${V(!m,()=>c`<input
						class="checkbox all"
						type="checkbox"
						.checked=${n}
						@input=${e}
						?disabled=${!o}
						part="all"
					/>`)}
			${V(m,()=>c` <cosmoz-omnitable-settings
						.newLayout="${!0}"
						.config=${u}
					></cosmoz-omnitable-settings>`)}

			<cosmoz-omnitable-header-row
				part="headerRow"
				.data=${r}
				.columns=${i}
				.filters=${l}
				.groupOnColumn=${a}
				.setFilterState=${s}
				.settingsConfig=${u}
				.hideSelectAll=${m}
			></cosmoz-omnitable-header-row>
		</div>
	</sort-and-group-provider>`,tr=Ae`
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
`,nr=({settingsConfig:n})=>{const{columns:e,collapsed:t}=n,o=e.filter(r=>!t.some(i=>i.name===r.name));return c`<div class="skeleton">
		${Array.from({length:5},()=>c`<div>
					<div class="checkbox"></div>
					${o.map(r=>c`<div
								class="cell"
								part=${`cell-${r.name}`}
								name=${r.name}
							></div>`)}
				</div>`)}
	</div>`};customElements.define("cosmoz-omnitable-skeleton",E(nr,{styleSheets:[tr]}));const or=({slot:n,title:e,className:t,width:o="24",height:r="24",styles:i}={})=>c`
  <svg
    slot=${pe(n)}
    class=${`delete-icon ${t??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${o}
    height=${r}
    style=${pe(i)}
  >
    ${V(e,()=>Nt`<title>${e}</title>`)}
    <path
      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
    />
  </svg>
`,rr=(n,e)=>{const{settingsConfig:t}=n,{processedItems:o,dataIsValid:r,filterIsTooStrict:i,loading:l,displayEmptyGroups:a,compareItemsFn:s,setSelectedItems:u,renderItem:m,renderGroup:d,error:g}=e;return c`${V(!l&&!r&&!g,()=>c`<div class="tableContent-empty">
					<slot name="empty-set-message">
						${Je({width:"96px",height:"96px",styles:"margin-right: 24px; fill: currentColor;"})}
						<div class="tableContent-empty-message">
							<h3>${_("Working set empty")}</h3>
							<p>${_("No data to display")}</p>
						</div>
					</slot>
				</div>`)}
		${V(i,()=>c`<div class="tableContent-empty">
					${Je({width:"96px",height:"96px",styles:"margin-right: 24px; fill: currentColor;"})}
					<div>
						<h3>${_("Filter too strict")}</h3>
						<p>${_("No matches for selection")}</p>
					</div>
				</div>`)}
		${V(l&&!o.length,()=>c`<div class="tableContent-empty overlay">
					<cosmoz-omnitable-skeleton
						.settingsConfig=${t}
					></cosmoz-omnitable-skeleton>
				</div>`)}
		${V(l&&o.length,()=>c`<div class="tableContent-empty overlay spinner">
					<cz-spinner></cz-spinner>
				</div>`)}
		${V(g,()=>c`<div class="tableContent-empty overlay">
					${an({width:"96px",height:"96px",styles:"margin-right: 24px; fill: currentColor;"})}
					<div class="tableContent-empty-message">
						<h3>${_("Error loading data")}</h3>
						<p>${g.message}</p>
					</div>
				</div>`)}
		<div class="tableContent-scroller" id="scroller" part="scroller">
			<cosmoz-grouped-list
				id="groupedList"
				.data=${o}
				@selected-items-changed=${p=>u(p.detail.value)}
				.displayEmptyGroups=${a}
				.compareItemsFn=${s}
				.renderItem=${m}
				.renderGroup=${d}
			></cosmoz-grouped-list>
			<slot name="extraContent"></slot>
		</div>`},ir=K`
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
	${Lt}
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
`,lr=K`
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
`,ue=n=>{const e=parseInt(n,10);return isFinite(e)?e:void 0},ar=n=>{const{config:e}=n,{settings:t,setSettings:o,collapsed:r}=e,i=Re({collapsed:r,settings:t.columns,setSettings:$(l=>o(a=>({...a,columns:l})),[o])});return{...e,onDown:$(l=>{l.target.closest(".pull")&&(i.handle=l.currentTarget)},[i]),onDragStart:$(l=>{const{target:a}=l,s=ue(a.dataset.index);if(!i.handle?.contains(a)||s==null)return l.preventDefault();i.handle=null,l.dataTransfer.effectAllowed="move",l.dataTransfer.setData("omnitable/sort-index",s),l.dataTransfer.setData("text/plain",s),setTimeout(()=>a.classList.add("drag"),0),a.addEventListener("dragend",u=>u.target.classList.remove("drag"),{once:!0})},[i]),onDragEnter:$(l=>{const a=l.currentTarget;a===l.target&&(l.preventDefault(),l.dataTransfer.dropEffect="move",a.classList.add("dragover"))},[]),onDragOver:$(l=>{l.preventDefault(),l.currentTarget.classList.add("dragover")},[]),onDragLeave:$(l=>{const a=l.currentTarget;a.contains(l.relatedTarget)||a.classList.remove("dragover")},[]),onDrop:$(l=>{const a=ue(l.dataTransfer.getData("omnitable/sort-index")),s=ue(l.currentTarget.dataset.index),{settings:u,setSettings:m}=i;l.currentTarget.classList.remove("dragover"),l.preventDefault();const d=u.slice();d.splice(s+(a>=s?0:-1),0,d.splice(a,1)[0]),m(d)},[i]),onToggle:$(l=>{const{settings:a,setSettings:s}=i,u=a.map(d=>({...d,disabled:d.disabled||i.collapsed?.some(g=>g.name===d.name)})),m=ue(l.target.closest("[data-index]")?.dataset.index);u.splice(m,1,{...a[m],disabled:!l.target.checked,priority:l.target.checked?a.reduce((d,g)=>Math.max(d,g.priority),0)+1:a[m].priority}),s(u)},[i])}},sr=[sn({apply({availableHeight:n,elements:e}){Object.assign(e.floating.style,{maxHeight:`${Math.max(0,n)}px`})}}),...un],ur=({onDragStart:n,onDragEnter:e,onDragOver:t,onDragLeave:o,onDrop:r,onDown:i,onToggle:l,collapsed:a,filters:s})=>(u,m)=>{const d=!!a?.find(p=>p.name===u.name),g=!u.disabled&&!d;return c` <div
			class="item"
			data-index=${m}
			@mousedown=${i}
			draggable="true"
			@dragstart=${n}
			@dragenter=${e}
			@dragover=${t}
			@dragleave=${o}
			@drop=${r}
		>
			<button class="pull">${Cn}</button>
			<label class="title" ?has-filter=${!Te(s[u.name]?.filter)}
				>${u.title}</label
			>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${g}
				@click=${l}
				.indeterminate=${d}
			/>
		</div>`},cr=n=>{const{settings:e,settingsId:t,onSave:o,onReset:r,hasChanges:i,opened:l,setOpened:a,...s}=ar(n);return c` <div class="headline">
			${_("Sort and filter")}
			<button
				class="close"
				@click=${u=>{const m=u.currentTarget;m?.focus(),m?.blur()}}
			>
				${zn}
			</button>
		</div>

		<div class="contents">
			<div
				class="heading"
				?data-opened=${l.columns}
				@click=${()=>a(u=>({...u,columns:!u.columns}))}
				part="columns columns-heading"
			>
				${_("Columns")} ${Se}
			</div>
			<cosmoz-collapse
				?opened="${l.columns}"
				part="columns columns-content"
			>
				<div class="list">${e.columns?.map(ur(s))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${l.sort}
				@click=${()=>a(u=>({...u,sort:!u.sort}))}
			>
				${_("Sort on")} ${Se}
			</div>
			<cosmoz-collapse ?opened=${l.sort}> ${_n()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${l.group}
				@click=${()=>a(u=>({...u,group:!u.group}))}
				part="groups groups-heading"
			>
				${_("Group on")} ${Se}
			</div>
			<cosmoz-collapse ?opened=${l.group} part="groups groups-heading"
				>${kn()}</cosmoz-collapse
			>
		</div>

		${V(t,()=>c`<div class="buttons">
					<button
						class="button reset"
						@click=${r}
						?disabled=${!i}
					>
						${_("Reset")}
					</button>
					<button class="button" @click=${o} ?disabled=${!i}>
						${_("Save")}
					</button>
				</div>`)}`};customElements.define("cosmoz-omnitable-settings-ui",E(cr,{styleSheets:[Le(ir)]}));const dr=({config:n,newLayout:e})=>c`
	<cosmoz-dropdown
		.placement="${e?"bottom-start":"bottom-end"}"
		.middleware="${sr}"
	>
		${V(e,()=>c`<div class="headerDots" slot="button">...</div>`,()=>c` <svg
					viewBox="0 0 24 24"
					width="24"
					slot="button"
					fill="currentColor"
				>
					<circle cx="10" cy="18" r="2"></circle>
					<circle cx="10" cy="12" r="2"></circle>
					<circle cx="10" cy="6" r="2"></circle>
				</svg>`)}
		${V(n?.badge,()=>c`<div class="badge" slot="button"></div>`)}
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${n}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`;customElements.define("cosmoz-omnitable-settings",E(dr,{styleSheets:[Le(lr)]}));const he=["sortOn","descending","groupOn","groupOnDescending"],ce=n=>e=>typeof e=="object"&&e!==null&&"name"in e&&e.name===n,mr=(n=[],e=[],t=[])=>{const o=e.filter(l=>n.some(ce(l.name))),r=n.filter(l=>l.name!=null&&!e.some(ce(l.name))&&!t.some(ce(l.name))),i=t.filter(l=>!e.some(ce(l.name)));return[...o,...i.flatMap(l=>{const a=n.find(s=>s.name===l.name);return a?{...l,title:a.title??l.title??"",minWidth:parseInt(a.minWidth??"0",10)}:[]}),...r.map(l=>{const{name:a,title:s,priority:u,minWidth:m,width:d,flex:g}=l;return{name:a??"",title:s??"",priority:u??0,minWidth:parseInt(m??"0",10),width:parseInt(d??"0",10),flex:parseInt(g??"0",10)}})]},pr=(n,e)=>({...e,...Oe(Array.from(he))(n),columns:n.columns?.map(Oe(["name","priority","width","flex","disabled"]))}),gr=({columns:n,settings:e,savedSettings:t,initial:o})=>({...Object.fromEntries(he.flatMap(i=>o?.[i]!=null?[[i,o[i]]]:[])),...t?Oe(Array.from(he))(t):{},...e,columns:mr(n,e?.columns,t?.columns)}),hr=({prefix:n="omnitable-"}={})=>({write:async(t,o)=>{const r=n+t;try{o?localStorage.setItem(r,JSON.stringify(o)):localStorage.removeItem(r)}catch(i){console.error(i)}},read:async t=>{if(t)try{const o=localStorage.getItem(n+t);return o==null?void 0:JSON.parse(o)}catch(o){console.error(o)}}}),fr=bt(hr),br=()=>{const n=ye(fr);return I(()=>n(),[n])},xr=(n,e,t,o)=>{const[r,i]=M(),{read:l,write:a}=br();return L(async()=>{n&&i(await l(n))},[n,l]),{settingsId:n,savedSettings:r,onSave:$(async()=>{if(!n)return;const s=pr(e,r);await a(n,s),t(),i(s)},[e,r]),onReset:$(async s=>{t(),s.shiftKey&&(await a(n),i()),o?.()},[o]),hasChanges:e!=null}},yr=({settingsId:n,host:e})=>{const t=I(()=>Object.fromEntries(he.map(b=>[b,e[b]])),[]),o=Me(),r=$(()=>{o.current?.(t)},[t]),[i,l]=M(),[a,s]=M({columns:!0,sort:!0}),{savedSettings:u,...m}=xr(n,i,l,r),{enabledColumns:d}=e,g=Wn(e,{enabledColumns:d}),p=I(()=>gr({columns:g,settings:i,savedSettings:u,initial:t}),[g,i,u]),w=I(()=>p.columns.map(b=>g.find(y=>y.name===b.name)).filter(Boolean),[g,...p.columns.map(b=>b.name)]);return{...m,opened:a,setOpened:s,settings:p,columns:w,setSettings:l,resetRef:o}},pt=n=>Number.isFinite(n)?n:0,vr=(n,e)=>{const t=[];let[o,r]=n.reduce(([m,d],{width:g,flex:p})=>[m+g,d+p],[0,0]),i=e-o,l=pt(i/r),a=0,s=0,u=0;for(let m=0;m<n.length;m++){const{width:d,minWidth:g,flex:p}=n[m],w=i>=0?l*p:d*i/o;if(g>d+w){a+=d,s+=g,u+=p,t[m]=g;continue}if(p===0){a+=d,s+=d,t[m]=d;continue}}o-=a,i=e-s-o,r-=u,l=pt(i/r);for(let m=0;m<n.length;m++){if(t[m]!=null)continue;const{width:d,flex:g}=n[m],p=i>=0?l*g:d*i/o;t[m]=d+p}return t},fe=Symbol("index"),$r=(n,e)=>{if(typeof n.findLastIndex=="function")return n.findLastIndex(e);for(let t=n.length-1;t>=0;t--)if(e(n[t],t,n))return t;return-1},wr=(n,e)=>{const t=$r(n,l=>l!=null&&l>0),o=(l,a)=>`.cell[name="${l}"], cosmoz-omnitable-skeleton::part(cell-${l}){width: ${Math.floor(a)}px;padding: 0 min(3px, ${a/2}px)}`,r=l=>`cosmoz-omnitable-resize-nub[name="${l}"]{display:none}`,i=l=>`cosmoz-omnitable-resize-nub[name="${l}"], .cell[name="${l}"]{display:none}`;return e.map((l,a)=>{const s=n[a];if(s==null||s===0)return i(l.name);const u=o(l.name,s);return a===t?`${u}
${r(l.name)}`:u}).join(`
`)},Tt=(n,e,t)=>{const o=n.filter(a=>!a.hidden),r=o.reduce((a,{width:s})=>a+s,0);if(o.length>1&&r>e)return Tt(o.slice(1),e,t);const i=o.reduce(([a,s],u,m)=>[Math.max(a,u.index),u.index>a?m:s],[-1,-1])[1];return i!==-1&&(o[i].flex=1),vr(o,e).reduce((a,s,u)=>(a[o[u].index]=s,a),new Array(t).fill(void 0))},zr=(n,e)=>n.length===0?".cell {display: none;}":wr(n,e),Cr=({host:n,canvasWidth:e,layout:t,setSettings:o})=>{const r=Me();r.current=i=>o(l=>{const a=l.columns,{detail:{newWidth:s,column:u}}=i,m=a.findIndex(p=>p.name===u.name),d=[],g=a.reduce((p,w)=>Math.max(p,w.priority),-1/0);for(let p=0;p<t.length;p++)if(d[p]={...a[p]},p<m&&t[p]!=null&&(d[p].width=t[p],d[p].flex=0,d[p].priority=g),p===m){const w=t.reduce((b,y,F)=>F<m&&y?b-y:b,e);d[p].width=Math.min(w,Math.max(s,a[p].minWidth)),d[p].flex=0,d[p].priority=g}return{...l,columns:d}}),L(()=>{const i=l=>r.current?.(l);return n.addEventListener("column-resize",i),()=>n.removeEventListener("column-resize",i)},[])},Sr=(n,e)=>L(()=>{const t=([r])=>{r.contentRect?.width!==0&&requestAnimationFrame(()=>e(r.contentRect?.width-20-44-24))},o=new ResizeObserver(t);return o.observe(n),()=>o.unobserve(n)},[]),kr=n=>{const[e,t]=M(()=>n.getBoundingClientRect().width);return Sr(n,t),e},_r=(n,e)=>{const t=I(()=>{let o=!1,r;const i=()=>{if(!o)return;r=requestAnimationFrame(i),n()&&(o=!1)};return{start:()=>{o=!0,cancelAnimationFrame(r),r=requestAnimationFrame(i)},stop:()=>{o=!1,cancelAnimationFrame(r)}}},[]);L(()=>{t.start()},e),L(()=>()=>t.stop(),[])},Ir=(n=0,e=0)=>Math.abs((n??0)-(e??0))<.1,Fr=(n,e=1.9,t=cn)=>{const o=Re({target:n}),r=$(()=>{if(o.tween||(o.tween=o.target),o.target.every((i,l)=>o.tween[l]===i))return t(o.tween),!0;o.tween=o.target.map((i,l)=>Ir(o.tween[l],i)?i:(o.tween[l]??0)+((i??0)-(o.tween[l]??0))/e||0),t(o.tween)},[]);_r(r,[n])},Or=({canvasWidth:n,groupOnColumn:e,config:t,miniColumn:o})=>I(()=>{if(!Array.isArray(t)||n==null||n===0)return[];const r=t.map((i,l)=>({minWidth:i.minWidth,width:i.width,flex:i.flex,priority:i.priority,name:i.name,index:l,hidden:i.name===e?.name||i.disabled})).map(i=>o?{...i,hidden:o.name!==i.name}:i).sort(({index:i,priority:l},{index:a,priority:s})=>l===s?a-i:l-s);return Tt(r,n,r.length)},[n,e,t]),Vr=({host:n,canvasWidth:e,columns:t})=>{const o=n.miniBreakpoint??480,r=I(()=>e<=o,[e,o]),i=I(()=>r?t?.filter(u=>u.mini!=null).sort((u,m)=>(u.mini??0)-(m.mini??0)):[],[t,r]),[l,...a]=i??[],s=!!l;return L(()=>{n.toggleAttribute("mini",s)},[s]),{isMini:s&&r,miniColumn:l,miniColumns:a}},Dr=n=>{const e=I(()=>new CSSStyleSheet,[]);return L(()=>{n.shadowRoot.adoptedStyleSheets=[...n.shadowRoot.adoptedStyleSheets,e]},[]),e},Ar=({host:n,columns:e,settings:t,setSettings:o,resizeSpeedFactor:r,sortAndGroupOptions:i})=>{const l=kr(n),{isMini:a,miniColumn:s,miniColumns:u}=Vr({host:n,canvasWidth:l,columns:e}),{groupOnColumn:m}=i,d=Or({canvasWidth:l,groupOnColumn:m,miniColumn:s,config:t.columns}),g=Dr(n),p=I(()=>t.columns.reduce((b,y,F)=>d[F]!=null||y.name===m?.name||y.disabled?b:[...b,e.find(h=>h.name===y.name)].filter(h=>h!=null),[]),[e,t,d,m]),w=Re({columns:t.columns});return Fr(d,r,b=>{const y=zr(b,w.columns);g.replace(y)}),Cr({host:n,canvasWidth:l,layout:d,setSettings:b=>o(b(t))}),{isMini:a,collapsedColumns:p,miniColumns:u}},Er=({host:n,...e})=>{const{csvFilename:t="omnitable.csv",xlsxFilename:o="omnitable.xlsx",xlsxSheetname:r="Omnitable",topPlacement:i="top-end"}=n;return{csvFilename:t,xlsxFilename:o,xlsxSheetname:r,topPlacement:i,...e}},Lr=({host:n,selectedItems:e,data:t,sortAndGroupOptions:o,collapsedColumns:r,settings:i,filterFunctions:l,settingS:a,filters:s,...u})=>{const m=t&&t.length>0&&e.length===t.length,d=b=>{b.target.checked?n.shadowRoot.querySelector("#groupedList").selectAll():n.shadowRoot.querySelector("#groupedList").deselectAll()},{groupOnColumn:g}=o,p=I(()=>[g,...r,...i.columns.filter(b=>b.disabled)].some(b=>b&&Object.keys(l).includes(b.name)),[l,i,r]),w=I(()=>({...a,collapsed:r,badge:p,filters:s}),[a,r,p,s]);return L(()=>{const b=n.shadowRoot.querySelector("#tableContent"),y=new ResizeObserver(F=>requestAnimationFrame(()=>{n.style.setProperty("--ot-height",F[0]?.contentRect.height+"px")}));return y.observe(b),()=>y.unobserve(b)},[]),{allSelected:m,onAllCheckboxChange:d,data:t,settingsConfig:w,filters:s,groupOnColumn:g,sortAndGroup:o.sortAndGroup,...u}},Rt=c`
	<svg
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
	>
		<g>
			<path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
		</g>
	</svg>
`,Tr=n=>n?"groupRow groupRow-folded":"groupRow",Rr=({item:n,index:e})=>t=>V((t?.length??0)>0,()=>c`
				<div class="itemRow-minis" part="item-minis">
					${t.map(o=>c`<div
								class="itemRow-mini"
								part="item-mini item-mini-${o.name}"
							>
								${(o.renderMini??o.renderCell)?.(o,{item:n,index:e})}
							</div>`)}
				</div>
			`),Mr=({columns:n,collapsedColumns:e,miniColumns:t,onItemClick:o,onCheckboxChange:r,dataIsValid:i,groupOnColumn:l,onItemChange:a,rowPartFn:s})=>(u,m,{selected:d,expanded:g,toggleCollapse:p})=>c`
		<div
			?selected=${d}
			part="${["itemRow",`itemRow-${u[fe]}`,s?.(u,m)].filter(Boolean).join(" ")}"
			.dataIndex=${u[fe]}
			.dataItem=${u}
			class="itemRow"
			@click=${o}
		>
			<div class="itemRow-wrapper" part="itemRow-wrapper">
				<input
					class="checkbox"
					type="checkbox"
					part="checkbox"
					.checked=${d}
					.dataItem=${u}
					@input=${r}
					?disabled=${!i}
				/>
				<cosmoz-omnitable-item-row
					part="itemRow-inner"
					.columns=${n}
					.index=${m}
					.selected=${d}
					.expanded=${g}
					.item=${u}
					.groupOnColumn=${l}
					.onItemChange=${a}
				>
				</cosmoz-omnitable-item-row>
				<button
					class="expand"
					?hidden="${Te(e.length)}"
					?aria-expanded="${g}"
					@click="${p}"
				>
					${Rt}
				</button>
			</div>
			${Rr({item:u,index:m})(t)}
		</div>
		<cosmoz-omnitable-item-expand
			.columns=${e}
			.item=${u}
			.index=${m}
			?selected=${d}
			?expanded=${g}
			.groupOnColumn=${l}
			part="item-expand"
		>
		</cosmoz-omnitable-item-expand>
	`,Nr=({onCheckboxChange:n,dataIsValid:e,groupOnColumn:t})=>(o,r,{selected:i,folded:l,toggleFold:a})=>c` <div
			class="${Tr(l)}"
			part="groupRow groupRow-${o[fe]}"
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
					.folded=${l}
					.group=${o}
				></cosmoz-omnitable-group-row>
			</h3>
			<div class="groupRow-badge">${o.items?.length??0}</div>
			<button class="expand" ?aria-expanded="${l}" @click=${a}>
				${Rt}
			</button>
		</div>`,jr=({host:n,error:e,dataIsValid:t,processedItems:o,columns:r,collapsedColumns:i,miniColumns:l,sortAndGroupOptions:a,rowPartFn:s,...u})=>{const{loading:m=!1,displayEmptyGroups:d=!1,compareItemsFn:g}=n,p=Me({shiftKey:!1,ctrlKey:!1}),w=$(h=>{const k=h.target,f=k.dataItem,v=k.checked,x=n.shadowRoot.querySelector("#groupedList");p.current.shiftKey?x.toggleSelectTo(f,v):p.current.ctrlKey?(k.checked=!0,x.selectOnly(f)):x.toggleSelect(f,v),h.preventDefault(),h.stopPropagation()},[]);L(()=>{const h=({shiftKey:k,ctrlKey:f})=>{p.current={shiftKey:k,ctrlKey:f}};return window.addEventListener("keydown",h),window.addEventListener("keyup",h),()=>{window.removeEventListener("keydown",h),window.removeEventListener("keyup",h)}},[]);const b=$(h=>{const k=h.currentTarget,f=h.composedPath();f.slice(0,f.indexOf(k)).find(x=>x.matches?.("a, .checkbox, .expand"))||n.dispatchEvent(new window.CustomEvent("omnitable-item-click",{bubbles:!0,composed:!0,detail:{item:k.dataItem,index:k.dataIndex}}))},[]),{groupOnColumn:y}=a,F=$((h,k)=>f=>qn(n,h,k,f),[]);return{...u,processedItems:o,dataIsValid:t,filterIsTooStrict:t&&o.length<1,loading:m,compareItemsFn:g,displayEmptyGroups:d,error:e,renderItem:I(()=>Mr({columns:r,collapsedColumns:i,miniColumns:l,onItemClick:b,onCheckboxChange:w,dataIsValid:t,groupOnColumn:y,onItemChange:F,rowPartFn:s}),[r,i,b,w,t,y,F,s]),renderGroup:I(()=>Nr({onCheckboxChange:w,dataIsValid:t,groupOnColumn:y}),[w,t,y])}},Pr=(n,e)=>{if(n===e)return 0;if(n==null)return-1;if(e==null)return 1;const t=typeof n,o=typeof e;return t==="object"&&o==="object"?n.toString()<e.toString()?-1:1:t==="number"&&o==="number"?n-e:t==="string"&&o==="string"?n<e?-1:1:t==="boolean"&&o==="boolean"?n?-1:1:(console.warn("unsupported sort",t,n,o,e),0)},_e=(n,e)=>(t,o)=>Pr(n(t),n(o))*(e?-1:1),Br=n=>n.replace(/([a-z0-9])([A-Z])/gu,"$1-$2").toLowerCase(),gt=(n,e)=>{!n||!e||Object.entries(e).forEach(([t,o])=>{n[B].__ownChange=!0,n[B][t]=o,n[B].__ownChange=!1,n[B].dispatchEvent(new CustomEvent(`${Br(t)}-changed`,{bubbles:!0,detail:{value:o}}))})},Ie=(n,e)=>Object.assign(n,{[fe]:e}),de=Symbol("unparsed"),Hr=({data:n,columns:e,hashParam:t,sortAndGroupOptions:o,noLocalSort:r,noLocalFilter:i})=>{const{groupOnColumn:l,groupOnDescending:a,sortOnColumn:s,descending:u}=o,m=$(([f,v])=>{const x=e.find(({name:z})=>z===f);return x==null?[f,void 0]:[f,v.filter&&x.serializeFilter(x,v.filter)]},[e]),d=$(([f,v])=>{const x=e.find(({name:S})=>S===f);if(x==null)return[f,{[de]:v}];const z={filter:x.deserializeFilter(x,v)};return gt(x,z),[f,z]},[e]),[g,p]=Q({},t,{multi:!0,suffix:"-filter--",write:m,read:d}),w=$((f,v)=>p(x=>{const z=xe(v,x[f]);return gt(e.find(S=>S.name===f),z),{...x,[f]:{...x[f],...z}}}),[e,p]),b=I(()=>Object.values(g).map(f=>f.filter),[g]),y=I(()=>Object.fromEntries(e.map(f=>[f.name,!f.noLocalFilter&&f.getFilterFn(f,g[f.name]?.filter)]).filter(([,f])=>!!f)),[e,...b]),F=I(()=>!Array.isArray(n)||n.length===0?[]:Object.entries(y).length===0||i?n.slice():n.filter(f=>Object.values(y).every(v=>v(f))),[n,y,i]),h=I(()=>{if(!r&&!l&&s!=null&&s.sortPath!=null)return F.slice().sort(_e(f=>s.getComparableValue({...s,valuePath:s.sortPath},f),u));if(l!=null&&l.groupOn!=null){const f=F.reduce((v,x)=>{const z=l.getComparableValue({...l,valuePath:l.groupOn},x);if(z===void 0)return v;let S=v.find(R=>R.id===z);return S?(S.items.push(x),v):(S={id:z,name:z,items:[x]},[...v,S])},[]);return f.sort(_e(v=>l.getComparableValue({...l,valuePath:l.groupOn},v.items[0]),a)),!s||r?f:f.filter(v=>Array.isArray(v.items)).map(v=>(v.items.sort(_e(x=>s.getComparableValue({...s,valuePath:s.sortPath},x),u)),v))}return F},[F,l,a,s,u,r]),k=I(()=>{let f=0,v=0;const x=[];return h.forEach(z=>{if(Array.isArray(z.items)){Ie(z,v++),z.items.forEach(S=>{Ie(S,f++),x.push(S)});return}return Ie(z,f++),x.push(z)},[]),x},[h]);return L(()=>{p(f=>Object.values(f).some(x=>x[de]!=null)?Object.fromEntries(Object.entries(f).map(([x,z])=>z[de]==null?[x,z]:d([x,z[de]]))):f)},[d]),{processedItems:h,visibleData:k,filters:g,filterFunctions:y,setFilterState:w}},Gr=n=>{const e=o=>{const r=n.data.indexOf(o);if(r<0)return null;const i=n.data.splice(r,1);if(n.data=n.data.slice(),Array.isArray(i)&&i.length>0)return i[0]},t=(o,r)=>{n.data.splice(o,1,r),n.data=n.data.slice()};return{removeItem:e,removeItems(o){const r=[];for(let i=o.length-1;i>=0;i-=1){const l=n.removeItem(o[i]);l!=null&&r.push(l)}return r},replaceItemAtIndex:t,replaceItem(o,r){const i=n.data.indexOf(o);if(i>-1)return t(i,r)},selectItem(o){n.shadowRoot.querySelector("#groupedList").select(o)},selectAll(){n.shadowRoot.querySelector("#groupedList").selectAll()},deselectAll(){n.shadowRoot.querySelector("#groupedList").deselectAll()},deselectItem(o){n.shadowRoot.querySelector("#groupedList").deselect(o)},isItemSelected(o){return n.shadowRoot.querySelector("#groupedList").isItemSelected(o)}}},Wr=({host:n,visibleData:e,filters:t,...o})=>{const{setFilterState:r}=o,i=I(()=>Gr(n),[]);Ve(o,Object.values(o)),Ve(i,Object.values(i)),L(()=>{const a=s=>r(s.detail.name,u=>({...u,...s.detail.state}));return n.addEventListener("legacy-filter-changed",a),()=>n.removeEventListener("legacy-filter-changed",a)},[]),P("visibleData",e),P("sortedFilteredGroupedItems",o.sortedFilteredGroupedItems),P("selectedItems",o.selectedItems),P("sortOn",o.sortOn),P("descending",o.descending),P("isMini",o.isMini);const l=I(()=>Object.fromEntries(Object.entries(t).filter(([,{filter:a}])=>a!==void 0).map(([a,{filter:s}])=>[a,s])),[t]);P("filters",l,Object.values(l))},qr=n=>{const{hashParam:e,settingsId:t,data:o,resizeSpeedFactor:r,noLocal:i,noLocalSort:l=i,noLocalFilter:a=i,error:s,rowPartFn:u}=n,m=yr({settingsId:t,host:n}),{settings:d,setSettings:g,columns:p,resetRef:w}=m,b=wn(p,e,d,g,w),{processedItems:y,visibleData:F,filters:h,setFilterState:k,filterFunctions:f}=Hr({data:o,columns:p,hashParam:e,sortAndGroupOptions:b,noLocalSort:l,noLocalFilter:a}),{isMini:v,collapsedColumns:x,miniColumns:z}=Ar({host:n,columns:p,settings:d,setSettings:g,resizeSpeedFactor:r,sortAndGroupOptions:b}),S=o&&Array.isArray(o)&&o.length>0,[R,G]=M([]);return Wr({host:n,visibleData:F,sortedFilteredGroupedItems:y,columns:p,filters:h,setFilterState:k,selectedItems:R,isMini:v,...b}),{header:Lr({host:n,selectedItems:R,sortAndGroupOptions:b,dataIsValid:S,data:o,columns:p,filters:h,collapsedColumns:x,settings:d,filterFunctions:f,settingS:m,setFilterState:k,hideSelectAll:n.hideSelectAll===!0}),list:jr({host:n,error:s,dataIsValid:S,processedItems:y,setSelectedItems:G,columns:p,collapsedColumns:x,miniColumns:z,sortAndGroupOptions:b,rowPartFn:u}),footer:Er({host:n,selectedItems:R,columns:p})}};customElements.define("cosmoz-grouped-list-row",class extends HTMLElement{get item(){return this._item}set item(e){this._item=e,this._render()}get index(){return this._index}set index(e){this._index=e,this._render()}get renderFn(){return this._renderFn}set renderFn(e){this._renderFn=e,this._render()}_render(){this._item==null||this._index==null||this._renderFn==null||Fe(this._renderFn(this._item,this._index),this)}});const Xr={group:Symbol("group")},ze=(n,e)=>(e.has(n)||e.set(n,{}),e.get(n)),Ur=(n,e)=>!!ze(n,e).expanded,Kr=(n,e)=>!!ze(n,e).folded,De=n=>n?n.items instanceof Array:!1,Jr=n=>{if(!Array.isArray(n)||n.length===0)return;const e=Array.isArray(n[0]?.items);if(!n.every(o=>Array.isArray(o.items)===e))throw new Error("Data must be homogeneous.")},Qr=(n,e,t)=>Array.isArray(n)?(Jr(n),n.reduce((r,i)=>{const l=i;if(!l.items)return r.concat(i);if(l.items.length){if(ze(i,t).folded)return r.concat(i);const a=l.items.map(s=>Object.assign(s,{[Xr.group]:i}));return r.concat(i,a)}return e?r.concat(i):r},[])):void 0,Yr=(n,...e)=>typeof n=="function"?n(...e):n,Zr=(n,e)=>n===e,ei=()=>{const[n,e]=M(()=>[new WeakMap]);return{setItemState:$((o,r)=>e(([i])=>{const l=ze(o,i);return Object.assign(l,Yr(r,l)),[i]}),[]),state:n[0],signal:n}},ti=()=>{const{setItemState:n,state:e,signal:t}=ei(),o=$((i,l)=>{De(i)&&n(i,a=>({folded:l!==void 0?l:!a.folded}))},[]),r=$((i,l)=>{De(i)||n(i,a=>({expanded:l!==void 0?!l:!a.expanded}))},[]);return{state:e,signal:t,toggleFold:o,toggleCollapse:r}},ni=({initial:n,compareItemsFn:e,data:t,flatData:o})=>{const[r,i]=M(n),[l,a]=M(),s=$(h=>r.includes(h),[r]),u=$(h=>h?.items?.every(s)??!1,[s]),m=$(h=>s(h)||u(h),[s,u]),d=$(h=>{const f=h.items??[h];i(v=>[...v,...f.filter(x=>!v.includes(x))]),a(h)},[]),g=$(h=>{const f=h.items??[h];i(v=>v.filter(x=>!f.includes(x))),a(h)},[]),p=$(h=>{i(h.items?.slice()||[h]),a(h)},[]),w=$(()=>{i(t.flatMap(h=>h.items||h)),a(void 0)},[t]),b=$(()=>{i([]),a(void 0)},[]),y=$((h,k=!m(h))=>k?d(h):g(h),[m]),F=$((h,k)=>{if(!o)return;const f=l?o.findIndex(z=>e(z,l)):-1;if(f<0)return y(h,k);const[v,x]=[f,o.indexOf(h)].sort((z,S)=>z-S);o.slice(v,x+1).forEach((z,S,R)=>{S>0&&S<R.length-1&&De(z)||y(z,k)}),a(h)},[o,e,y]);return L(()=>i(h=>h.length>0&&o?o.filter(k=>h.find(f=>e(k,f))):h),[o]),{selectedItems:r,isItemSelected:s,isGroupSelected:u,isSelected:m,select:d,deselect:g,selectOnly:p,selectAll:w,deselectAll:b,toggleSelect:y,toggleSelectTo:F}},oi={host:{position:"relative",display:"flex",flexDirection:"column"}},ri=n=>{const{data:e,renderItem:t,renderGroup:o,displayEmptyGroups:r,compareItemsFn:i=Zr}=n,{toggleFold:l,toggleCollapse:a,state:s,signal:u}=ti(),m=I(()=>Qr(e,r,s),[e,r,u]),{selectedItems:d,isItemSelected:g,isGroupSelected:p,isSelected:w,select:b,deselect:y,selectOnly:F,selectAll:h,deselectAll:k,toggleSelect:f,toggleSelectTo:v}=ni({initial:[],compareItemsFn:i,data:e,flatData:m}),x=$((S,R)=>Array.isArray(S.items)?o(S,R,{selected:p(S),folded:Kr(S,s),toggleSelect:G=>f(S,typeof G=="boolean"?G:void 0),toggleFold:()=>l(S)}):t(S,R,{selected:d.includes(S),expanded:Ur(S,s),toggleSelect:G=>f(S,typeof G=="boolean"?G:void 0),toggleCollapse:()=>a(S)}),[t,o,d,f,u]);xt(()=>{Object.assign(n.style,oi.host)},[]),P("selectedItems",d);const z={toggleFold:l,toggleCollapse:a,isItemSelected:g,isGroupSelected:p,isSelected:w,select:b,deselect:y,selectOnly:F,selectAll:h,deselectAll:k,toggleSelect:f,toggleSelectTo:v};return Ve(z,Object.values(z)),{renderRow:x,flatData:m}},ii=({renderRow:n,flatData:e})=>dn({items:e,renderItem:(t,o)=>c`<cosmoz-grouped-list-row
				.item=${t}
				.index=${o}
				.renderFn=${n}
			></cosmoz-grouped-list-row>`}),li=n=>ii(ri(n));customElements.define("cosmoz-grouped-list",E(li,{useShadowDOM:!1}));const ai=n=>window.ShadyCSS?.ApplyShim?.transformCssText?.(n)||n,si=n=>{const{header:e,list:t,footer:o}=qr(n);return c`
		<style>
			${mn([],()=>ai(Ko))}
		</style>

		<div class="mainContainer">
			${er(e)}
			<div class="tableContent" id="tableContent">
				${rr(e,t)}
			</div>
			${Zo(o)}
		</div>

		<div id="columns">
			<slot id="columnsSlot"></slot>
		</div>
	`};customElements.define("cosmoz-omnitable",class extends E(si,{observedAttributes:["hash-param","sort-on","group-on","descending","group-on-descending","hide-select-all","settings-id","no-local","no-local-sort","no-local-filter","loading","mini-breakpoint"]}){connectedCallback(){super.connectedCallback(),Ce(this,"selectedItems",[]),Ce(this,"visibleData",[]),Ce(this,"sortedFilteredGroupedItems",[])}});const be=`
	<slot name="actions" slot="actions"></slot>
`;c(Object.assign([be],{raw:[be]}));Ee(Object.assign([be],{raw:[be]}));const ui=()=>c`<style>
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
</style>`;customElements.define("cz-spinner",E(ui));const ht=(n,e,t)=>{let o=String(n),r=-1;const i=t,l=e-o.length;for(;++r<l;)o=i+o;return o},O=(n,e)=>Math.floor(Math.random()*(e-n+1))+n,ci=()=>"2015-"+ht(O(1,12),2,"0")+"-"+ht(O(1,28),2,"0"),di=()=>{const n=O(0,20);return n===1?new Date(2015,3,2,14,26,10,299):n===2?new Date(2016,4,2,10,9,10,444):n===3?new Date(2016,4,2,10,9,10,443):n===4?new Date(2016,4,2,10,9,10,442):new Date(O(2014,2017),O(1,12),O(1,28),O(0,23),O(0,59),O(0,59),O(0,999))},Mt=(n,e,t)=>{const o=O(n,e),r=[],i=["Lorem ipsum dolor sit amet","Nunc tristique","Curabitur vestibulum","Cras laoreet","Himenaeos","maximus diam purus at mauris"],l=["SEK","USD","EUR","AUD"];let a=0;for(let s=0;s<o;s+=1){const u="Group "+s,m=s*2+1;for(let d=0;d<m;d+=1){const g=[],p=[],w=a%10;for(let b=0;b<w;b+=1)g.push("Item "+b),p.push({name:"Item "+b,value:"item-value-"+b});r.push({id:a,name:u+" item "+d,value:O(0,1e4),bool:O(0,100)>50,object:{value:O(0,1e4),label:"Random string "+O(1,t)},sub:{subProp:i[a%i.length]},randomString:"Random string "+O(1,t),randomString2:"Random string 2 "+O(1,t),randomString3:"Random string 3 "+O(1,t),randomString4:"Random string 4 "+O(1,t),date:di(),dateJSON:ci(),amount:{amount:O(10,100),currency:l[a%l.length]},group:u,list:g,objectList:p}),a+=1}}return r},hi={title:"Components/ComsmozOmnitableFullDemo",component:"cosmoz-omnitable",tags:["autodocs"],args:{loading:!1,locale:"en",sortOn:"",groupOn:"",descending:!1,groupOnDescending:!1,hashParam:"",settingsId:"",selectedItems:[],disabled:!1},argTypes:{loading:{control:"boolean",description:"Show loading state",table:{defaultValue:{summary:"false"}}},locale:{control:"select",options:["en","fr","sv"],description:"Language locale",table:{defaultValue:{summary:"en"}}},selectedItems:{control:"object",description:"Show selected items"},data:{control:"object",description:"Show specified items"},sortOn:{control:"text",description:'Column property name to sort on (e.g., "amount", "date", "id")'},groupOn:{control:"text",description:'Column property name to group on (e.g., "amount", "date", "id")'},descending:{control:"boolean",description:"Sort on descending"},groupOnDescending:{control:"boolean",description:"Group on descending"},hashParam:{control:"text",description:"Hash parameter for URL state management"},settingsId:{control:"text",description:"ID for storing table settings"},disabled:{control:"boolean",description:"Hide one column",table:{defaultValue:{summary:"false"}}}},render:n=>c`
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
                    ${or({styles:"vertical-align: middle; fill: currentColor;"})}
                    <span>Remove items</span>
                </paper-button>
            </cosmoz-omnitable>
        `,play:async()=>{console.log("Current hash:",window.location.hash)}},fi={args:{data:Mt(10,10,10)}},bi={args:{data:Mt(2,2,10)}},xi={args:{data:[]}},yi=["TableWithLargeData","TableWithSmallData","TableWithNoData"];export{fi as TableWithLargeData,xi as TableWithNoData,bi as TableWithSmallData,yi as __namedExportsOrder,hi as default};
