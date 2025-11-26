import{x as c,B as Fe,E as bt,f as Pt}from"./iframe-B80kSn9M.js";import{t as K,c as E,g as S,P as A,u as M,a as xt,m as yt,s as Bt,D as Ht,b as Gt,e as Wt,i as ve,h as Ae,d as qt,f as Xt,j as Ut,k as $,n as Kt,l as Jt,o as vt,p as Ee,q as I,r as T,v as he,w as Qt,x as $t,y as Yt,z as Zt,A as _,B as en,C as $e,E as fe,F as D,G as tn,H as we,I as nn,J as on,K as rn,T as an,L as wt,M as Te,N as ln,O as zt,Q as sn,R as Le,S as Qe,U as un,V as Re,W as cn,X as dn,Y as Oe,Z as Me,_ as mn,$ as De,a0 as P,a1 as pn,a2 as Se,a3 as gn}from"./cosmoz-collapse-D5Hn-w1n.js";import"./preload-helper-PPVm8Dsz.js";const hn=K`
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
`,fn=()=>c`
	<style>
		${hn}
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
`;customElements.define("cosmoz-clear-button",E(fn));const U=({valuePath:n},e)=>S(e,n),bn=U,xn=U,yn=({valuePath:n},e)=>t=>{const o=S(t,n);return o==null?!1:o.toString().toLowerCase().trim().includes(e.toLowerCase().trim())},vn=(n,e)=>e===""||e==null?null:e,N=n=>class extends n{static get properties(){return{isOmnitableColumn:{type:Boolean,value:!0},title:{type:String},valuePath:{type:String,notify:!0},values:{type:Array,notify:!0},filter:{type:Object},noLocalFilter:{type:Boolean},disabled:{type:Boolean,value:!1,notify:!0},editable:{type:Boolean,notify:!0},loading:{type:Boolean,value:!1,notify:!0},externalValues:{type:Boolean,value:!1,notify:!0},name:{type:String},sortOn:{type:String},groupOn:{type:String},noSort:{type:Boolean,value:!1},width:{type:String,value:"75px"},minWidth:{type:String,value:"40px"},flex:{type:String,value:"1"},cellClass:{type:String,value:"default-cell"},headerCellClass:{type:String,value:"default-header-cell"},priority:{type:Number,value:0},hidden:{type:Boolean,notify:!0},preferredDropdownHorizontalAlign:{type:String,value:"right"},renderHeader:{type:Function},renderCell:{type:Function},renderEditCell:{type:Function},renderGroup:{type:Function},mini:{type:Number,value:null},renderMini:{type:Function}}}static get observers(){return["notifyFilterChange(filter)"]}notifyFilterChange(e){this.__ownChange||this.dispatchEvent(new CustomEvent("legacy-filter-changed",{detail:{name:this.name,state:this.legacyFilterToState(e)},bubbles:!0}))}legacyFilterToState(e){return{filter:e}}getFilterFn(){}getString(e,t){return U(e,t)}toXlsxValue(e,t){return bn(e,t)}cellTitleFn(e,t){return this.getString(e,t)}headerTitleFn(e){return e.title}serializeFilter(e,t){return vn(e,t)}deserializeFilter(e,t){return t==null?null:typeof t=="string"?window.decodeURIComponent(t):t}getComparableValue(e,t){return xn(e,t)}computeSource(e,t){return t}_propertiesChanged(e,t,o){super._propertiesChanged(e,t,o),this.dispatchEvent(new CustomEvent("cosmoz-column-prop-changed",{bubbles:!0}))}},$n=n=>e=>n(t=>{if(t.inputValue===void 0&&e.target.value==="")return t;clearTimeout(t.t);const o=setTimeout(()=>n(r=>({...r,filter:r.inputValue})),1e3);return{...t,inputValue:e.target.value,t:o}}),wn=n=>()=>n(e=>({...e,filter:e.inputValue})),zn=n=>e=>{e.keyCode===13&&(e.preventDefault(),n(t=>({...t,filter:t.inputValue})))},Sn=n=>e=>n(t=>({...t,headerFocused:e.detail.value})),Cn=n=>()=>n(e=>({...e,filter:null,inputValue:null})),kn=n=>n!=null&&n!=="";class _n extends N(A){static get properties(){return{minWidth:{type:String,value:"55px"},editMinWidth:{type:String,value:"55px"},inputValue:{type:Object,notify:!0}}}getFilterFn(e,t){if(!(t==null||t===""))return yn(e,t)}renderCell(e,{item:t}){return c`<span class="default-column">${U(e,t)}</span>`}renderEditCell(e,{item:t},o){return c`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>o(i.target.value)}
			.value=${U(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,inputValue:o,headerFocused:r},i){return c`<cosmoz-input
			label=${e.title}
			.value=${o??t}
			@value-changed=${$n(i)}
			focused=${r}
			@focused-changed=${Sn(i)}
			@keydown=${zn(i)}
			@blur=${wn(i)}
		>
			<cosmoz-clear-button
				suffix
				slot="suffix"
				?visible=${kn(t)}
				light
				@click=${Cn(i)}
			></cosmoz-clear-button>
		</cosmoz-input>`}legacyFilterToState(e){return{filter:e,inputValue:e}}}customElements.define("cosmoz-omnitable-column",_n);const B=Symbol("column"),In=n=>{let e=!0;const t=n.map(o=>o.name);return n.forEach(o=>{o.name==null&&(e=!1,console.error("The name attribute needs to be set on all columns! Missing on column",o))}),n.forEach(o=>{t.indexOf(o.name)!==t.lastIndexOf(o.name)&&(e=!1,console.error("The name attribute needs to be unique among all columns! Not unique on column",o))}),e},Fn=n=>{const e=n.valuePath??n.name;return{name:n.name,title:n.title,valuePath:e,groupOn:n.groupOn??e,sortOn:n.sortOn??e,noSort:n.noSort,minWidth:n.minWidth,width:n.width,flex:n.flex,priority:n.priority,getString:n.getString,getComparableValue:n.getComparableValue,serializeFilter:n.serializeFilter,deserializeFilter:n.deserializeFilter,toXlsxValue:n.toXlsxValue,renderHeader:n.renderHeader,renderCell:n.renderCell,renderEditCell:n.renderEditCell,renderGroup:n.renderGroup,cellTitleFn:n.cellTitleFn,headerTitleFn:n.headerTitleFn,getFilterFn:n.getFilterFn,headerCellClass:n.headerCellClass,cellClass:n.cellClass,editable:n.editable,values:n.values,source:yt(n.computeSource),noLocalFilter:n.noLocalFilter,mini:n.mini,renderMini:n.renderMini,loading:n.loading,externalValues:n.externalValues,computeSource:n.computeSource,trueLabel:n.trueLabel,falseLabel:n.falseLabel,valueProperty:n.valueProperty,textProperty:n.textProperty,emptyLabel:n.emptyLabel,emptyValue:n.emptyValue,min:n.min,max:n.max,locale:n.locale,autoupdate:n.autoupdate,maximumFractionDigits:n.maximumFractionDigits,minimumFractionDigits:n.minimumFractionDigits,currency:n.currency,rates:n.rates,autodetect:n.autodetect,ownerTree:n.ownerTree,keyProperty:n.keyProperty,...n.getConfig?.(n),[B]:n}},On=n=>n.isOmnitableColumn&&!n.hidden,Dn=n=>{const e=n.assignedElements({flatten:!0}).filter(On);return In(e)?e:[]},Vn=(n,e)=>(Array.isArray(e)?n.filter(o=>e.includes(o.name)):n.filter(o=>!o.disabled)).map(Fn),An=(n,{enabledColumns:e})=>{const[t,o]=M([]);return xt(()=>{let r;const i=n.shadowRoot.querySelector("#columnsSlot"),a=()=>{o(Vn(Dn(i),e))},l=()=>{cancelAnimationFrame(r),r=requestAnimationFrame(a)};return l(),i.addEventListener("slotchange",l),n.addEventListener("cosmoz-column-prop-changed",l),()=>{i.removeEventListener("slotchange",l),n.removeEventListener("cosmoz-column-prop-changed",l),cancelAnimationFrame(r)}},[e]),t},St=(n,e)=>Array.isArray(n)?n.map(t=>S(t,e)).filter((t,o,r)=>t!=null&&r.indexOf(t)===o):void 0,Y=({externalValues:n,values:e,valuePath:t},o)=>{if(n)return n;if(typeof e=="function")return e;if(t!==void 0)return St(o,t)},En=(n,e,t,o)=>{const{valuePath:r}=e,i=r!==void 0?S(t,r):void 0;if(o===i)return;r!==void 0&&Bt(t,r,o);const a={item:t,valuePath:r,value:o,oldValue:i,column:e[B]};n.dispatchEvent(new CustomEvent("column-item-changed",{bubbles:!0,composed:!0,detail:a}))},Ct=n=>n?typeof n.close=="function"?n:Ct(n.parentElement):null,Ne=n=>class extends n{static get properties(){return{filter:{type:Object,notify:!0},values:{type:Array,value(){return[]}},headerFocused:{type:Boolean,notify:!0},min:{type:Number,value:null},max:{type:Number,value:null},limits:{type:Function},autoupdate:{type:String,value:!0},locale:{type:String,value:null},_filterInput:{type:Object,value(){return{min:null,max:null}}},_range:{type:Object,computed:"_computeRange(values.*)"},_limit:{type:Object,computed:"_computeLimit(_range, _filterInput.*, min, max)",value(){return{}}},_tooltip:{type:String,computed:"_computeTooltip(title, _filterText)"},_fromClasses:{type:String,computed:"_computeInputClasses(_filterInput.min)"},_toClasses:{type:String,computed:"_computeInputClasses(_filterInput.max)"}}}static get observers(){return["_filterInputChanged(_filterInput.*, autoupdate)","_filterChanged(filter.*)","_updateLimits(limits, headerFocused)"]}disconnectedCallback(){this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),super.disconnectedCallback()}_computeInputClasses(e){return e!=null&&e!==""?"has-value":""}toNumber(e,t,o){if(e==null||e==="")return;const r=typeof e=="number"?e:Number(e);if(Number.isNaN(r))return;if(o==null||t==null)return r;const i=this.toNumber(t);return i==null?r:o(r,i)}toValue(){return this.toNumber.apply(this,arguments)}getComparableValue(e,t){if(e==null)return;let o=e;return t!=null&&(o=this.get(t,e)),this.toValue(o)}renderValue(){}getInputString(e,t=this.valuePath){const o=this.toValue(this.get(t,e));return this._toInputString(o)}_computeRange(e){const t=e.base,o=Array.isArray(t)&&t.length&&t.map(r=>this.toValue(r)).filter(r=>r!=null);return!o||o.length<1?{min:null,max:null}:o.reduce((r,i)=>({min:this.toValue(i,r.min,Math.min),max:this.toValue(i,r.max,Math.max)}),{})}_computeLimit(e,t,o,r){if(!e)return;const i=t.base,a=this.toValue(o),l=this.toValue(r),s=a??this.toValue(e.min),u=l??this.toValue(e.max);return{fromMin:s,fromMax:this.toValue(u,this._fromInputString(i.max,"max"),Math.min),toMin:this.toValue(s,this._fromInputString(i.min,"min"),Math.max),toMax:u}}_computeFilterText(e){if(e.base==null)return;const t=e.base,o=this.toValue(t.min),r=this.toValue(t.max),i=[];return o!=null&&i.push(this.renderValue(o)),i.push(" - "),r!=null&&i.push(this.renderValue(r)),i.length>1?i.join(""):void 0}_computeTooltip(e,t){return t==null?e:`${e}: ${t}`}_fromInputString(e){return this.toValue(e)}_toInputString(e){const t=this.toValue(e);return t??null}_getDefaultFilter(){return{min:null,max:null}}_filterInputChanged(e,t){const o=e.path.split(".")[1];this.__inputChangePath=o||null,t&&(this._limitInputDebouncer=Ht.debounce(this._limitInputDebouncer,Gt.after(600),()=>{this._limitInput(),this._updateFilter()}),Wt(this._limitInputDebouncer))}_clearFrom(){this.set("_filterInput.min",null),this._updateFilter()}_clearTo(){this.set("_filterInput.max",null),this._updateFilter()}_onBlur(){this._limitInput(),this._updateFilter()}_onKeyDown(e){const t=e.currentTarget,o=Array.from(t.parentElement.querySelectorAll("cosmoz-input")),r=o[o.findIndex(l=>l===t)+1],i=!r,a=o[0]===t;switch(e.keyCode){case 13:if(e.preventDefault(),!i)r.focus();else{const l=this._limitInput();this._updateFilter(),l||this._closeParent(t)}break;case 9:(i&&!e.shiftKey||a&&e.shiftKey)&&this._closeParent(t)}}_closeParent(e){const t=Ct(e);t&&t.close()}_onDropdownOpenedChanged({currentTarget:e,type:t,detail:o}){(t==="focus"||o?.value===!0)&&setTimeout(()=>{e.querySelector("cosmoz-input:focus")||e.querySelector("cosmoz-input")?.focus()},100)}_limitInput(){const e=this._filterInput,t=this.__inputChangePath,o=t?this._fromInputString(this.get(t,e),t):null;if(this.__inputChangePath=null,o==null)return!1;const r=this._limit,i=t==="min"?"from":"to",a=this.get(i+"Min",r),l=this.get(i+"Max",r),s=this.toValue(o,a,Math.max),u=this.toValue(s,l,Math.min);return this.getComparableValue(o)!==this.getComparableValue(u)?(this.set(["_filterInput",t],this._toInputString(u,t)),this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),!0):!1}_updateFilter(){const e=this._filterInput,t=this.filter,o=this._fromInputString(e.min,"min"),r=this._fromInputString(e.max,"max");this.getComparableValue(o)===this.getComparableValue(t,"min")&&this.getComparableValue(r)===this.getComparableValue(t,"max")||this.set("filter",{min:o,max:r})}_filterChanged(e){if(this._filterInput==null)return;const t=this._filterInput,o=e.base,r=this._fromInputString(t.min,"min"),i=this._fromInputString(t.max,"max");this.getComparableValue(r)===this.getComparableValue(o,"min")&&this.getComparableValue(i)===this.getComparableValue(o,"max")||(this.set("_filterInput",{min:this._toInputString(o.min),max:this._toInputString(o.max)}),this._limitInputDebouncer&&this._limitInputDebouncer.cancel())}hasFilter(){const e=this.filter;return e==null?!1:this.toValue(e.min)!=null||this.toValue(e.max)!=null}resetFilter(){this.filter=this._getDefaultFilter()}_updateLimits(e,t){e&&Promise.resolve(ve(e,{active:t})).then(o=>{const{min:r,max:i}=o??{};Object.assign(this,{...r!=null?{min:r}:{},...i!=null?{max:i}:{}})})}},Z=n=>class extends n{static get template(){return Ae`<div id="output" style="position:relative;"></div>`}connectedCallback(){super.connectedCallback(),Fe(this.render(),this.$.output)}_propertiesChanged(e,t,o){super._propertiesChanged(e,t,o),requestAnimationFrame(()=>Fe(this.render(),this.$.output))}},kt=n=>(e,t,o=qt)=>{const r=Jt(),i=new URLSearchParams(r.hash.replace("#",""));return n(e,t,o,i),"#!"+Object.assign(r,{hash:i}).href.replace(location.origin,"")},_t=n=>n==null||n==="",Tn=kt((n,e,t,o)=>_t(t(e))?o.delete(n):o.set(n,t(e))),Ln=kt((n,e,t,o)=>Object.entries(e).map(t).forEach(([r,i])=>_t(i)?o.delete(n+r):o.set(n+r,i))),J=(n,e,{suffix:t="",read:o,write:r,multi:i}={})=>{const[a,l]=i?[Ln,Xt]:[Tn,Ut],[s,u]=M(()=>e==null?n:l(e+t,o)??n),m=$(d=>u(g=>{const p=ve(d,g);return e!=null&&Kt(a(e+t,p,r),null,{notify:!1}),p}),[e,t,a,r]);return[s,m]},Rn=n=>[!0,"true",1,"yes","on"].includes(n),te=n=>n===""||(n==null?void 0:Rn(n)),ne=(n,e,t)=>$(o=>{n(o),t(r=>({...r,[e]:o}))},[n,e,t]),Mn=(n,e,t,o,r)=>{const[i,a]=J(t.sortOn,e,{suffix:"-sortOn"}),[l,s]=J(te(t.descending),e,{suffix:"-descending",read:te}),[u,m]=J(t.groupOn,e,{suffix:"-groupOn"}),[d,g]=J(te(t.groupOnDescending),e,{suffix:"-groupOnDescending",read:te}),p=I(()=>n.find(h=>h.name===i),[n,i]),w=I(()=>n.find(h=>h.name===u),[n,u]),b={groupOn:u,setGroupOn:ne(m,"groupOn",o),groupOnDescending:d,setGroupOnDescending:ne(g,"groupOnDescending",o),sortOn:i,setSortOn:ne(a,"sortOn",o),descending:l,setDescending:ne(s,"descending",o),columns:n},x=I(()=>b,Object.values(b)),F=$(h=>{a(h.sortOn),m(h.groupOn),s(h.descending),g(h.groupOnDescending)},[]);return T(()=>void(r.current=F),[]),{...x,sortAndGroup:x,groupOnColumn:w,sortOnColumn:p}},je=vt();customElements.define("sort-and-group-provider",je.Provider);customElements.define("sort-and-group-consumer",E(({render:n})=>n(Ee(je)),{useShadowDOM:!1}));const Nn=c`<svg
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
</svg>`,jn=c`
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
`,Ce=c` <svg
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
</svg>`,Pn=c`<svg
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
</svg> `,It=({column:n,on:e,descending:t,setOn:o,setDescending:r})=>{const{name:i,title:a}=n??{};return c`<button
		class="sg"
		title=${he(a)}
		data-on=${he(i===e&&(t?"desc":"asc")||void 0)}
		@click=${l=>{l.stopPropagation();const u=l.currentTarget?.dataset.on;u||(o(i),r(!1)),u==="asc"?r(!0):u==="desc"&&(o(),r(!1))}}
	>
		<span>${a}</span> ${Pn}
	</button>`},Ft=({columns:n,...e})=>n?.map(t=>It({column:t,...e})),Bn=()=>c`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:n,groupOn:e,setGroupOn:t,groupOnDescending:o,setGroupOnDescending:r}={})=>Ft({columns:n?.filter?.(i=>i.groupOn),on:e,setOn:t,descending:o,setDescending:r})}
	>
	</sort-and-group-consumer>
`,Hn=()=>c`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:n,sortOn:e,setSortOn:t,descending:o,setDescending:r}={})=>Ft({columns:n?.filter?.(i=>i.sortOn&&!i.noSort),on:e,setOn:t,descending:o,setDescending:r})}
	>
	</sort-and-group-consumer>
`,Gn=["label","value","slot","always-float-label","column"],Wn=$t`
	${Qt}

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
		color: #737373;
		user-select: none;
		cursor: pointer;
		min-height: var(--line-height);
		text-align: var(--text-align);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	label {
		display: block;
		text-align: var(--text-align);
		transform-origin: (var(--text-align));
	}

	:host(:not([always-float-label])) label {
		transform: none !important;
	}

	/* Sort handle button when embedded in label */
	label .sg {
		display: inline-flex;
		width: 10px;
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
`,qn=(n,e)=>c`<div id="input" part="input" role="button" class="control" slot=${e}>
		${n||""}
	</div>`,Xn=(n,e,t)=>{if(!e||e.noSort||!t)return n;const{sortOn:o,setSortOn:r,descending:i,setDescending:a}=t,l=It({column:e,on:o,setOn:r,descending:i,setDescending:a});return c`${l} ${n}`},Un=({label:n,value:e,slot:t,column:o})=>{const r=Ee(je);return Yt(qn(e,t),{label:Xn(n,o,r)})};customElements.define("cosmoz-omnitable-dropdown-input",E(Un,{observedAttributes:Gn,styleSheets:[Wn]}));const ee=({title:n,tooltip:e="",filterText:t="",onOpenedChanged:o,content:r,horizontalAlign:i="left",externalValues:a=null,column:l=null})=>{const s={filtered:!!t,...a!=null&&{[`external-values-${a}`]:!0}};return c`
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
			class=${`${Zt(s)} dropdown`}
			title=${e||""}
		>
			<cosmoz-omnitable-dropdown-input
				class="input"
				slot="button"
				.label=${n}
				.placeholder=${n}
				.value=${t??""}
				.column=${l}
				text-align=${i}
				?always-float-label=${t?.length>0}
			></cosmoz-omnitable-dropdown-input>
			<div class="dropdown-content">${r}</div>
		</cosmoz-dropdown>
	`};class Kn extends Ne(Z(A)){static get properties(){return{currency:{type:String},autodetect:{type:Boolean,value:!1},rates:{type:Object},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:"_computeFilterText(filter.*, _formatters)"},headerFocused:{type:Boolean,value:!1},column:{type:Object,value:null}}}static get observers(){return["_valuesChanged(autodetect, currency, values)"]}render(){const e=t=>{this.headerFocused=t.type==="focus",this._onDropdownOpenedChanged(t)};return c`
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
					min-width: 150px;
					text-align: left;
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
					border-radius: 6px;
					backdrop-filter: blur(16px) saturate(180%);
					-webkit-backdrop-filter: blur(16px) saturate(180%);
					box-shadow:
						0 4px 24px 0 rgba(0, 0, 0, 0.18),
						0 1.5px 6px 0 rgba(0, 0, 0, 0.1);
				}

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

			${ee({title:this.title,tooltip:this._tooltip,filterText:this._filterText,headerFocused:this.headerFocused,horizontalAlign:"right",externalValues:this.externalValues,onOpenedChanged:e,column:this.column,content:c`
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
		`}_valuesChanged(e,t,o){if(!Array.isArray(o)||o.length<1||!e&&t)return;const r=o.reduce((a,l)=>{if(l.currency){const s=l.currency;a[s]=(a[s]||0)+1}return a},{});let i=Object.keys(r)[0];Object.keys(r).reduce((a,l)=>{const s=Math.max(a,r[l]);return s===r[l]&&(i=l),s},0),this.set("currency",i)}toAmount(e,t,o){if(e==null||e==="")return;if(typeof e!="object"||e.currency==null||e.currency==="")return null;const r=this.toNumber(e.amount);if(r==null||Number.isNaN(r))return null;const i={currency:e.currency,amount:r};if(o==null||t==null)return i;const a=this.toAmount(t);if(a==null)return i;const l=this.rates||{},s=i.amount*(l[i.currency]||1),u=a.amount*(l[a.currency]||1);return this.toNumber(s,u,o)===s?i:a}toValue(){return this.toAmount.apply(this,arguments)}getComparableValue(e,t){const o=super.getComparableValue(e,t);if(o==null)return;const r=this.toNumber(o.amount),i=this.rates;return i==null?r:r*(i[o.currency]||1)}getString(e,t=this.valuePath){const o=this.toValue(this.get(t,e));return o===void 0?"":o===null?"Invalid value":this.renderValue(o)}getCurrency(e,t){const o=this.get(t,e);return o&&o.currency}getFormatter(e,t){const o=t||"",r=e+o||"",i=this._formatters=this._formatters||{};return i[r]||(i[r]=new Intl.NumberFormat(t||void 0,{style:"currency",currency:e})),i[r]}renderValue(e){const t=this.toAmount(e);return t==null?"":this.getFormatter(t.currency,this.locale).format(e.amount)}_amountValueChanged(e){const t=e.target,o=t.value,r=e.model.item,i=this.get(this.valuePath,r),a=Number(o),l={amount:a,currency:i.currency};this.set(this.valuePath,l,r),this._fireItemChangeEvent(r,this.valuePath,i,this.renderValue.bind(this))}_toInputString(e){const t=this.toValue(e);return t==null?null:this.toNumber(t.amount)}_toInputStringAmount(e){const t=this.rates;if(t==null)return this._toInputString(e);const o=this.toValue(e);return o==null?null:(this.toNumber(o.amount)*(t[o.currency]||1)/(t[this.currency]||1)).toFixed(2)}_fromInputString(e,t){const o=this.toNumber(e);if(o!=null)return this.toValue({amount:o,currency:t&&this.get(["filter",t,"currency"])||this.currency})}}customElements.define("cosmoz-omnitable-amount-range-input",Kn);const L=(n,e,t)=>{if(n==null||n==="")return;const o=typeof n=="number"?n:Number(n);if(!Number.isNaN(o))return o},Ot=n=>{const e=L(n);return e==null?null:e.toString()},Jn=({valuePath:n},e)=>{const t=L(n?S(e,n):e);return Ot(t)},Ye=n=>{const e=Ot(n);return e??""},W=({valuePath:n,maximumFractionDigits:e},t)=>{if(t==null)return;const o=n?S(t,n):t,r=L(o);if(r!=null)return e!==null?L(r.toFixed(e)):r},Qn=en((n,e,t)=>{const o={localeMatcher:"best fit"};return e!==null&&(o.minimumFractionDigits=e),t!==null&&(o.maximumFractionDigits=t),new Intl.NumberFormat(n||void 0,o)}),Ze=({valuePath:n,locale:e,minimumFractionDigits:t,maximumFractionDigits:o},r)=>{const i=n?S(r,n):r;if(i==null)return"";const a=L(i);return a==null?void 0:Qn(e,t,o).format(a)},Yn=(n,e)=>t=>{const o=W(n,t);if(o==null)return!1;const r=W({...n,valuePath:"min"},e),i=W({...n,valuePath:"max"},e);return!(o<(r??-1/0)||o>(i??1/0))},Q=(n={},e,t,o)=>{if(e==null||e==="")return;if(typeof e!="object"||e.currency==null||e.currency==="")return null;const r=L(e.amount);return r==null||Number.isNaN(r)?null:{currency:e.currency,amount:r}},q=({valuePath:n,rates:e},t)=>{if(t==null)return;let o=t;n!=null&&(o=S(t,n));const r=Q(e,o);if(r==null)return;const i=L(r.amount);return e==null||i==null?i:i*(e?.[r.currency]||1)},Zn=(n,e)=>t=>{const o=q(n,t);if(o===void 0)return!1;const r=q({...n,valuePath:"min"},e),i=q({...n,valuePath:"max"},e);return r===void 0||i===void 0?!0:!(o<r||o>i)},oe={},eo=(n,e)=>{const o=n+(e||"")||"";return oe[o]||(oe[o]=new Intl.NumberFormat(e||void 0,{style:"currency",currency:n})),oe[o]},to=(n,e,t)=>{const o=Q(n,e);return o==null?"":eo(o.currency,t).format(o.amount)},et=({valuePath:n,rates:e,locale:t},o)=>{const r=Q(e,n?S(o,n):void 0);return r===void 0?"":r===null?"Invalid value":to(e,r,t)},tt=n=>n?n.amount+n.currency:"",nt=n=>{if(n==null||n==="")return;const e=n.match(/^(-?[\d]+)([\D]+?)$/iu);if(!(!Array.isArray(e)||e.length<0))return{amount:Number(e[1]),currency:e[2]}},no=({valuePath:n},e)=>n?S(e,n)?.currency:null,oo=({valuePath:n},e)=>n?S(e,n)?.amount:void 0;class ro extends N(A){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},currency:{type:String,notify:!0},autodetect:{type:Boolean,value:!1,notify:!0},rates:{type:Object,notify:!0},width:{type:String,value:"70px"},cellClass:{type:String,value:"amount-cell align-right"},headerCellClass:{type:String,value:"amount-header-cell"}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const o=q({...e,valuePath:"min"},t),r=q({...e,valuePath:"max"},t);if(!(o==null&&r==null))return Zn(e,t)}getString(e,t){return et(e,t)}toXlsxValue(e,t){return et(e,t)}getComparableValue(e,t){return q(e,t)}serializeFilter({rates:e},t){if(t==null)return;const o=Q(e,t.min),r=Q(e,t.max);if(!(o==null&&r==null))return tt(o)+"~"+tt(r)}deserializeFilter(e,t){if(t==null||t==="")return null;const o=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(o)?{min:nt(o[1]),max:nt(o[2])}:null}renderCell(e,{item:t}){return c`<span>${e.getString(e,t)}</span>`}renderEditCell(e,{item:t},o){return c`<cosmoz-input
			no-label-float
			type="number"
			@change=${i=>o({amount:i.target.value,currency:S(t,e.valuePath)?.currency})}
			.value=${oo(e,t)}
		>
			<div slot="suffix">${no(e,t)}</div>
		</cosmoz-input>`}renderHeader({title:e,min:t,max:o,limits:r,locale:i,rates:a,currency:l,autoupdate:s,autodetect:u,noSort:m,name:d},{filter:g},p,w){return c`<cosmoz-omnitable-amount-range-input
			.title=${e}
			.filter=${g}
			.values=${w}
			.rates=${a}
			.min=${t}
			.max=${o}
			.limits=${r}
			.locale=${i}
			.currency=${l}
			.autoupdate=${s}
			.autodetect=${u}
			.column=${{noSort:m,name:d,title:e}}
			@filter-changed=${({detail:{value:b}})=>p(x=>({...x,filter:b}))}
			@header-focused-changed=${({detail:{value:b}})=>p(x=>({...x,headerFocused:b}))}
		></cosmoz-omnitable-amount-range-input>`}computeSource(e,t){return Y(e,t)}}customElements.define("cosmoz-omnitable-column-amount",ro);const io=(n,e)=>{if(!Array.isArray(n))return;const t=[];return n.reduce((o,r)=>Array.isArray(r)?(r.forEach(i=>{o.push(i)}),o):(o.push(r),o),[]).filter((o,r,i)=>{if(i.indexOf(o)!==r)return!1;if(e){const a=S(o,e);if(t.indexOf(a)!==-1)return!1;t.push(a)}return!0})},ao=(n,e,t)=>{if(n==null)return[];if(Array.isArray(n))return io(n,e);if(typeof n=="object"){const o=e??"id",r=t??"label";return Object.entries(n).map(([i,a])=>({[o]:i,[r]:a})).sort((i,a)=>i[r]<a[r]?-1:i[r]>a[r]?1:0)}return[]},Pe=(n,e,t)=>$e(e&&S(n,e)).map(fe(t)),Be=({valuePath:n,textProperty:e},t)=>Pe(t,n,e).filter(o=>o!=null).join(", "),lo=Be,so=({valueProperty:n,valuePath:e,emptyValue:t,emptyProperty:o},r)=>i=>{const a=fe(n),l=$e(S(i,e));return r.some(s=>l.length===0&&fe(o||n)(s)===t||l.some(u=>a(u)===a(s)))},He=n=>e=>n(t=>({...t,filter:e})),Ge=n=>e=>n(t=>({...t,headerFocused:e})),We=n=>e=>n(t=>({...t,query:e})),Dt=({emptyValue:n,emptyLabel:e,emptyProperty:t,textProperty:o,valueProperty:r},i)=>{const a=ao(i,r,o);return!e||n===void 0||!o||!(t||r)||!a?a:[{[o]:e,[t||r]:n},...a]},uo=(n,e)=>Dt(n,St(e,n.valuePath)),qe=n=>class extends n{static get properties(){return{textProperty:{type:String},valueProperty:{type:String},emptyLabel:{type:String},emptyValue:{type:Object},emptyProperty:{type:String}}}getConfig(e){return{emptyProperty:e.emptyProperty}}getString(e,t){return Be(e,t)}toXlsxValue(e,t){return lo(e,t)}getComparableValue({valuePath:e,valueProperty:t},o){const r=S(o,e);return t==null?r:$e(r).reduce((a,l)=>(a.push(S(l,t)),a),[]).sort().join(" ")}getFilterFn(e,t){if(!(!t||!Array.isArray(t)||t.length===0))return so(e,t)}serializeFilter(e,t){return t.length===0?null:JSON.stringify(t)}deserializeFilter(e,t){return JSON.parse(decodeURIComponent(t))}computeSource(e,t){return e.externalValues||typeof e.values=="function"?async(...o)=>Dt(e,await Promise.resolve(ve(e.values,...o))):uo(e,t)}},co=({valuePath:n,textProperty:e,valueProperty:t},o)=>{const r=e?tn(e):fe(t),i=$e(n&&S(o,n)).map(r);return i.length>1?i.filter(Boolean).join(","):i[0]};class mo extends qe(N(A)){static get properties(){return{headerCellClass:{type:String,value:"autocomplete-header-cell"},minWidth:{type:String,value:"55px"},editMinWidth:{type:String,value:"55px"},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return c`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},o){return c`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>o(i.target.value)}
			.value=${U(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:o},r,i){return c`<cosmoz-autocomplete-ui
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
			.onChange=${He(r)}
			.onFocus=${Ge(r)}
			.onText=${We(r)}
			>${D(e.loading,()=>c`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}getComparableValue(e,t){return co(e,t)}}customElements.define("cosmoz-omnitable-column-autocomplete",mo);const Xe=(n,e)=>e.find(({value:t})=>n===t),po=(n,e,t)=>{const o=Xe(e,t);return o?o.text:n},ot=(n,e,t,o)=>po(n,S(e,t),o),go=({valuePath:n},e,t)=>Xe(S(e,n),t),ho=n=>e=>{n(t=>({...t,filter:e?.[0]?.value??null}))},fo=n=>e=>{n(t=>({...t,headerFocused:e}))},bo=n=>e=>{n(t=>({...t,query:e}))},xo=n=>e=>n(e?.[0]?.value),rt=({valuePath:n,trueLabel:e,falseLabel:t},o)=>S(o,n)?e:t,yo=({valuePath:n},e)=>t=>S(t,n)===e,re=yt((n,e)=>[{text:n,value:!0},{text:e,value:!1}]),vo=({valuePath:n,trueLabel:e,falseLabel:t},o)=>n?S(o,n)?e:t:"",$o=(n,e)=>{try{return JSON.parse(e)}catch{return null}};class wo extends N(A){static get properties(){return{trueLabel:{type:String,value:"True"},falseLabel:{type:String,value:"False"},flex:{type:String,value:"0"},cellClass:{type:String,value:"boolean-cell"}}}getString(e,t){return rt(e,t)}renderCell(e,{item:t}){return rt(e,t)}renderEditCell(e,{item:t},o){const{trueLabel:r,falseLabel:i}=e;return c`<cosmoz-autocomplete
			no-label-float
			.title=${ot(e.title,t,e.valuePath,re(r,i))}
			.source=${re(r,i)}
			.textProperty=${"text"}
			.value=${go(e,t,re(r,i))}
			.onChange=${xo(o)}
			.limit=${1}
			>${D(e.loading,()=>c`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete
		>`}renderHeader(e,{filter:t,query:o},r,i){return c`<cosmoz-autocomplete-ui
			.label=${e.title}
			.title=${ot(e.title,t,e.valuePath,i)}
			.source=${i}
			.textProperty=${"text"}
			.value=${Xe(t,i)}
			.text=${o}
			.onChange=${ho(r)}
			.onFocus=${fo(r)}
			.onText=${bo(r)}
			.limit=${1}
			>${D(e.loading,()=>c`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}computeSource({trueLabel:e,falseLabel:t}){return re(e,t)}getFilterFn(e,t){if(t!=null)return yo(e,t)}toXlsxValue(e,t){return vo(e,t)}deserializeFilter(e,t){return $o(e,t)}}customElements.define("cosmoz-omnitable-column-boolean",wo);const Ue=n=>class extends Ne(n){static get properties(){return{max:{type:Date,value:null},min:{type:Date,value:null},_filterText:{type:String,computed:"_computeFilterText(filter.*, formatter)"},formatter:{type:Object,computed:"_computeFormatter(locale)"},headerFocused:{type:Boolean,value:!1},column:{type:Object,value:null}}}toDate(e,t,o){if(e==null||e==="")return;let r=e;if(r instanceof Date||(typeof e=="string"&&(r=this.getAbsoluteISOString(r)),r=new Date(r)),Number.isNaN(r.getTime()))return null;if(o==null||t==null)return r;const i=this.toDate(t);if(i==null)return r;const a=this.getComparableValue(r),l=this.getComparableValue(i);return o(a,l)===a?r:i}toValue(){return this.toDate.apply(this,arguments)}getComparableValue(e,t){const o=super.getComparableValue(e,t);if(o!=null)return this.toNumber(o.getTime())}getString(e,t=this.valuePath,o=this.formatter){const r=this.toValue(this.get(t,e));return r===void 0?"":r===null?"Invalid Date":this.renderValue(r,o)}getAbsoluteISOString(e){return e.length===19?e+this._getTimezoneString(e):e}_getTimezoneString(e){const t=-new Date(e).getTimezoneOffset()/60;return(t<0?"-":"+")+["0",Math.abs(t)].join("").substr(-2)+":00"}renderValue(e,t=this.formatter){if(t==null)return;const o=this.toValue(e);if(o!=null)return t.format(o)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0)}_toInputString(e){const t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(0,10)}_dateValueChanged(e){const t=e.currentTarget,o=t.value,r=e.model.item,i=this.get(this.valuePath,r),a=this._fromInputString(o);this.set(this.valuePath,a,r),this._fireItemChangeEvent(r,this.valuePath,i,this.renderValue.bind(this))}_toLocalISOString(e){return we(e)}};class zo extends Ue(Z(A)){render(){const e=t=>{this.headerFocused=t.type==="focus"};return c`
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

			${ee({title:this.title,tooltip:this._tooltip,filterText:this._filterText,headerFocused:this.headerFocused,horizontalAlign:"right",externalValues:this.externalValues,onOpenedChanged:e,column:this.column,content:c`
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
		`}_fromInputString(e,t){const o=this.toDate(e);if(o!=null)return t==="min"&&o.setHours(0,0,0,0),t==="max"&&o.setHours(23,59,59),o}_filterInputChanged(e,t){const o=e.path.split(".")[1],r=o&&e.value;if(r&&r.match(/^0+/u)){this._limitInputDebouncer.cancel();return}super._filterInputChanged(e,t)}}customElements.define("cosmoz-omnitable-date-range-input",zo);const So=n=>{const e=-new Date(n).getTimezoneOffset()/60;return(e<0?"-":"+")+["0",Math.abs(e)].join("").substr(-2)+":00"},Ke=n=>n.length===19?n+So(n):n,Vt=n=>{if(n==null||n==="")return;let e=n;return!(e instanceof Date)&&(typeof n=="string"&&(e=Ke(e)),e=nn(e),!e)||Number.isNaN(e.getTime())?null:e},j=({valuePath:n},e)=>{if(e==null)return;let t=e;n!=null&&(t=S(e,n));const o=Vt(t);if(o!=null)return L(o.getTime())},V=(n,e,t)=>{const o=Vt(n);return o??null},Je=(n,e)=>{if(e==null)return;const t=V(n);if(t!=null)return e.format(t)},ie={},Co=n=>{const e=n||"";return ie[e]||(ie[e]=new Intl.DateTimeFormat(n||void 0)),ie[e]},it=({valuePath:n,locale:e},t)=>{let o=S(t,n||"");return o===void 0?"":(o=V(o),o===null?"Invalid Date":Je(o,Co(e)))},At=n=>{const e=V(n);if(e==null)return null;const t=we(e);return t==null?null:t.slice(0,10)},ko=({valuePath:n},e)=>At(S(e,n||"")),Et=(n,e)=>{const t=V(n);if(t!=null)return t},at=n=>{const e=At(n);return e??""},_o=({valuePath:n},e)=>{if(!n)return"";const t=V(S(e,n));if(!t)return"";const o=V(we(t));return o?(o.setHours(0,0,0,0),o):""},Tt=(n,e)=>t=>{const o=j(n,t);if(o==null)return!1;const r=j({...n,valuePath:"min"},e),i=j({...n,valuePath:"max"},e);return!(o<(r??-1/0)||o>(i??1/0))};class Io extends N(A){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"date-header-cell"},width:{type:String,value:"100px"},minWidth:{type:String,value:"82px"},flex:{type:String,value:"0"}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const o=j({...e,valuePath:"min"},t),r=j({...e,valuePath:"max"},t);if(!(o==null&&r==null))return Tt(e,t)}getString(e,t){return it(e,t)}toXlsxValue(e,t){return _o(e,t)}getComparableValue(e,t){return j(e,t)}serializeFilter(e,t){if(t==null)return;const o=V(t.min),r=V(t.max);if(!(o==null&&r==null))return at(o)+"~"+at(r)}deserializeFilter(e,t){if(t==null||t==="")return null;const o=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(o)?{min:V(o[1]),max:V(o[2])}:null}renderCell(e,{item:t}){return c`<div class="omnitable-cell-date">
			${it(e,t)}
		</div>`}renderEditCell(e,{item:t},o){return c`<cosmoz-input
			no-label-float
			type="date"
			@change=${i=>o(Et(i.target.value))}
			.value=${ko(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:o,limits:r,locale:i,noSort:a,name:l},{filter:s},u,m){return c`<cosmoz-omnitable-date-range-input
			.title=${e}
			.filter=${s}
			.values=${m}
			.min=${t}
			.max=${o}
			.limits=${r}
			.locale=${i}
			.column=${{noSort:a,name:l,title:e}}
			@filter-changed=${({detail:{value:d}})=>u(g=>({...g,filter:d}))}
			@header-focused-changed=${({detail:{value:d}})=>u(g=>({...g,headerFocused:d}))}
		></cosmoz-omnitable-date-range-input>`}computeSource(e,t){return Y(e,t)}}customElements.define("cosmoz-omnitable-column-date",Io);class Fo extends qe(N(A)){renderCell({valuePath:e,textProperty:t},{item:o}){const r=Pe(o,e,t).map(i=>c`<li>${i}</li>`);return c`
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
		`}renderEditCell(){return"not implemented"}renderHeader(e,{filter:t,query:o},r,i){return c`<cosmoz-autocomplete-ui
			class="external-values-${e.externalValues}"
			.label=${e.title}
			.source=${i}
			.textProperty=${e.textProperty}
			.value=${t}
			.text=${o}
			.onChange=${He(r)}
			.onFocus=${Ge(r)}
			.onText=${We(r)}
			>${D(e.loading,()=>c`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		> `}}customElements.define("cosmoz-omnitable-column-list-horizontal",Fo);window.Cosmoz=window.Cosmoz||{};class lt extends on(rn(an,A)){static get template(){return Ae`
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
		`}static get is(){return"cosmoz-omnitable-column-list-data"}static get properties(){return{items:{type:Array},_expanded:{type:Boolean,value:!1},_othersCount:{type:Number,computed:"_computeOthersCount(items)"}}}static get observers(){return["_itemsLengthChanged(items.length)"]}_itemsLengthChanged(){requestAnimationFrame(()=>this.dispatchEvent(new CustomEvent("expand",{bubbles:!0})))}_firstItem(e){if(e!=null&&e.length>0)return e[0]}_hideExpand(e,t){return e!==void 0&&e.length!==null?e.length<=2||t:!0}_hideCollapse(e,t){return e!==void 0&&e.length!==null?e.length<=2||!t:!0}_otherItems(e,t){if(e!=null&&(e.length<=2||t))return e.slice(1)}_computeOthersCount(e){if(e!=null)return e.length-1}_toggleExpand(e){this._expanded=!this._expanded,e.stopPropagation(),e.preventDefault()}}customElements.define(lt.is,lt);class Oo extends qe(N(A)){static get properties(){return{keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,textual:e.textual}}renderCell({valuePath:e,textProperty:t},{item:o}){return c`<cosmoz-omnitable-column-list-data
			.items=${Pe(o,e,t)}
		></cosmoz-omnitable-column-list-data>`}renderEditCell(e,{item:t},o){const r=i=>o(i.target.value.split(/,\s*/gu));return c`<cosmoz-input
			no-label-float
			type="text"
			.value=${Be(e,t)}
			@change=${r}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:o},r,i){return c`<cosmoz-autocomplete-ui
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
			.onChange=${He(r)}
			.onFocus=${Ge(r)}
			.onText=${We(r)}
			>${D(e.loading,()=>c`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}}customElements.define("cosmoz-omnitable-column-list",Oo);class Do extends Ne(Z(A)){static get properties(){return{maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},formatter:{type:Object,computed:"_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)"},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:"_computeFilterText(filter.*, formatter)"},headerFocused:{type:Boolean,value:!1},column:{type:Object,value:null}}}render(){const e=t=>{this.headerFocused=t.type==="focus",this._onDropdownOpenedChanged(t)};return c`
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

			${ee({title:this.title,tooltip:this._tooltip,filterText:this._filterText,headerFocused:this.headerFocused,horizontalAlign:"right",externalValues:this.externalValues,onOpenedChanged:e,column:this.column,content:c`
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
		`}_computeFormatter(e,t,o){const r={localeMatcher:"best fit"};return t!==null&&(r.minimumFractionDigits=t),o!==null&&(r.maximumFractionDigits=o),new Intl.NumberFormat(e||void 0,r)}getComparableValue(e,t){if(e==null)return;let o=e;if(t!=null&&(o=this.get(t,e)),o=this.toValue(o),o==null)return;const r=this.maximumFractionDigits;return r!==null?this.toValue(o.toFixed(r)):o}renderValue(e,t=this.formatter){const o=this.toNumber(e);if(o!=null)return t.format(o)}}customElements.define("cosmoz-omnitable-number-range-input",Do);class Vo extends N(A){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},cellClass:{type:String,value:"number-cell align-right"},width:{type:String,value:"30px"},minWidth:{type:String,value:"30px"},headerCellClass:{type:String,value:"number-header-cell"},maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const o=W({...e,valuePath:"min"},t),r=W({...e,valuePath:"max"},t);if(!(o==null&&r==null))return Yn(e,t)}getString(e,t){return Ze(e,t)}toXlsxValue({valuePath:e},t){return S(t,e)}getComparableValue(e,t){return W(e,t)}serializeFilter(e,t){if(t==null)return;const o=L(t.min),r=L(t.max);if(!(o==null&&r==null))return Ye(o)+"~"+Ye(r)}deserializeFilter(e,t){if(t==null||t==="")return null;const o=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(o)?{min:L(o[1]),max:L(o[2])}:null}renderCell(e,{item:t}){return c`<div class="omnitable-cell-number">
			${Ze(e,t)}
		</div>`}renderEditCell(e,{item:t},o){return c`<cosmoz-input
			no-label-float
			type="number"
			@change=${i=>o(i.target.value)}
			.value=${Jn(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:o,limits:r,locale:i,maximumFractionDigits:a,minimumFractionDigits:l,autoupdate:s,noSort:u,name:m},{filter:d},g,p){return c`<cosmoz-omnitable-number-range-input
			.title=${e}
			.filter=${d}
			.values=${p}
			.min=${t}
			.max=${o}
			.limits=${r}
			.locale=${i}
			.maximumFractionDigits=${a}
			.minimumFractionDigsits=${l}
			.autoupdate=${s}
			.column=${{noSort:u,name:m,title:e}}
			@filter-changed=${({detail:{value:w}})=>g(b=>({...b,filter:w}))}
			@header-focused-changed=${({detail:{value:w}})=>g(b=>({...b,headerFocused:w}))}
		></cosmoz-omnitable-number-range-input>`}computeSource(e,t){return Y(e,t)}}customElements.define("cosmoz-omnitable-column-number",Vo);const Lt="1970-01-01",H=(n,e,t)=>{const o=typeof n=="string"&&n.length>3&&n.length<=9?Ke(Lt+"T"+n):n;return V(o)},ae={},Ao=n=>{const e=n||"";if(ae[e])return ae[e];const t={hour:"numeric",minute:"numeric",second:"numeric"};return ae[e]=new Intl.DateTimeFormat(n||void 0,t),ae[e]},ge=({valuePath:n,locale:e},t)=>{const o=H(S(t,n||""));return o===void 0?"":o===null?"Invalid Date":Je(o,Ao(e))},Eo=(n,e)=>n.valuePath?ge(n,e):"",To=n=>{const e=H(n);if(e==null)return null;const t=we(e);return t&&t.slice(11,19)},X=({valuePath:n},e)=>{if(e==null)return;const t=To(n==null?e:S(e,n));if(t==null)return;const o=H(Ke(Lt+"T"+t));return o==null?o:L(o.getTime())},Lo=(n,e)=>t=>{const o=X(n,t);if(o==null)return!1;const r=X({...n,valuePath:"min"},e),i=X({...n,valuePath:"max"},e);return r==null||i==null?!1:!(o<r||o>i)},st=n=>{const e=H(n);return e==null?"":e.toISOString().slice(11,19).replace(/:/gu,".")},ut=n=>{if(!(n==null||n===""))return H(typeof n=="string"?n.replace(/\./gu,":")+"Z":n)};class Ro extends Ue(Z(A)){render(){const e=t=>{this.headerFocused=t.type==="focus"};return c`
			<cosmoz-clear-button
				@click=${()=>this.resetFilter()}
				?visible=${this.hasFilter()}
			></cosmoz-clear-button>

			${ee({title:this.title,tooltip:this._tooltip,filterText:this._filterText,headerFocused:this.headerFocused,horizontalAlign:"right",externalValues:this.externalValues,onOpenedChanged:e,column:this.column,content:c`
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
		`}get _fixedDate(){return"1970-01-01"}toDate(e,t,o){const r=typeof e=="string"&&e.length>3&&e.length<=9?this.getAbsoluteISOString(this._fixedDate+"T"+e):e;return super.toDate(r,t,o)}_toInputString(e){const t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(11,19)}getComparableValue(e,t){if(e==null)return;let o=this._toInputString(t==null?e:this.get(t,e));if(o!=null&&(o=this.toValue(this.getAbsoluteISOString(this._fixedDate+"T"+o)),o!=null))return this.toNumber(o.getTime())}_timeValueChanged(e){const t=e.target,o=t.value,r=e.model.item,i=this.toDate(r.date),a=this.toDate(i!=null?i.toISOString().slice(0,10)+"T"+o:o),l=s=>s;a==null&&(this.set(this.valuePath,a,r),this._fireItemChangeEvent(r,this.valuePath,i,l.bind(this)))}_computeFormatter(e){const t={hour:"numeric",minute:"numeric",second:"numeric"};return new Intl.DateTimeFormat(e||void 0,t)}}customElements.define("cosmoz-omnitable-time-range-input",Ro);class Mo extends N(A){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"time-header-cell"},minWidth:{type:String,value:"63px"},width:{type:String,value:"210px"},flex:{type:String,value:"0"},filterStep:{type:String,value:"1"}}}getFilterFn(e,t){const o=X({...e,valuePath:"min"},t),r=X({...e,valuePath:"max"},t);if(!(o==null&&r==null))return Lo(e,t)}getString(e,t){return ge(e,t)}toXlsxValue(e,t){return Eo(e,t)}getComparableValue(e,t){return X(e,t)}serializeFilter(e,t){if(t==null)return;const o=H(t.min),r=H(t.max);if(!(o==null&&r==null))return st(o)+"~"+st(r)}deserializeFilter(e,t){if(t==null||t==="")return null;const o=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(o)?{min:ut(o[1]),max:ut(o[2])}:null}renderCell(e,{item:t}){return ge(e,t)}renderEditCell(e,{item:t},o){return c`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>o(i.target.value)}
			.value=${ge(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:o,locale:r,filterStep:i,noSort:a,name:l},{filter:s},u,m){return c`<cosmoz-omnitable-time-range-input
			.title=${e}
			.filter=${s}
			.values=${m}
			.min=${t}
			.max=${o}
			.locale=${r}
			.filterStep=${i}
			.column=${{noSort:a,name:l,title:e}}
			@filter-changed=${({detail:{value:d}})=>u(g=>({...g,filter:d}))}
			@header-focused-changed=${({detail:{value:d}})=>u(g=>({...g,headerFocused:d}))}
		></cosmoz-omnitable-time-range-input>`}computeSource(e,t){return Y(e,t)}}customElements.define("cosmoz-omnitable-column-time",Mo);const le={},No=n=>{const e=n||"";if(le[e])return le[e];const t={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return le[e]=new Intl.DateTimeFormat(n||void 0,t),le[e]},ke=({valuePath:n,locale:e},t)=>{const o=V(S(t,n||""));return o===void 0?"":o===null?"Invalid Date":Je(o,No(e))},jo=({valuePath:n},e)=>n?S(e,n):"",ct=n=>{const e=V(n);return e==null?"":e.toISOString().slice(0,19).replace(/:/gu,".")},dt=n=>{if(!(n==null||n==="")&&typeof n=="string")return V(n.replace(/\./gu,":")+"Z")};class Po extends Ue(Z(A)){render(){const e=t=>{this.headerFocused=t.type==="focus"};return c`
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

			${ee({title:this.title,tooltip:this._tooltip,filterText:this._filterText,headerFocused:this.headerFocused,horizontalAlign:"right",externalValues:this.externalValues,onOpenedChanged:e,column:this.column,content:c`
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
		`}_toInputString(e){const t=this.toValue(e);if(t!=null)return this._toLocalISOString(t).slice(0,19)}_computeFormatter(e){const t={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return new Intl.DateTimeFormat(e||void 0,t)}}customElements.define("cosmoz-omnitable-datetime-range-input",Po);class mt extends N(A){static get is(){return"cosmoz-omnitable-column-datetime"}static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"datetime-header-cell"},width:{type:String,value:"210px"},minWidth:{type:String,value:"128px"},flex:{type:String,value:"0"},filterStep:{type:Number,value:1}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const o=j({...e,valuePath:"min"},t),r=j({...e,valuePath:"max"},t);if(!(o==null&&r==null))return Tt(e,t)}getString(e,t){return ke(e,t)}toXlsxValue(e,t){return jo(e,t)}getComparableValue(e,t){return j(e,t)}serializeFilter(e,t){if(t==null)return;const o=V(t.min),r=V(t.max);if(!(o==null&&r==null))return ct(o)+"~"+ct(r)}deserializeFilter(e,t){if(t==null||t==="")return null;const o=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(o)?{min:dt(o[1]),max:dt(o[2])}:null}renderCell(e,{item:t}){return ke(e,t)}renderEditCell(e,{item:t},o){return c`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>o(Et(i.target.value))}
			.value=${ke(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:o,limits:r,locale:i,filterStep:a,noSort:l,name:s},{filter:u},m,d){return c`<cosmoz-omnitable-datetime-range-input
			.title=${e}
			.filter=${u}
			.values=${d}
			.min=${t}
			.max=${o}
			.limits=${r}
			.locale=${i}
			.filterStep=${a}
			.column=${{noSort:l,name:s,title:e}}
			@filter-changed=${({detail:{value:g}})=>m(p=>({...p,filter:g}))}
			@header-focused-changed=${({detail:{value:g}})=>m(p=>({...p,headerFocused:g}))}
		></cosmoz-omnitable-datetime-range-input>`}computeSource(e,t){return Y(e,t)}}customElements.define(mt.is,mt);const Bo=({column:n,item:e,selected:t,folded:o,group:r})=>n?(n.renderGroup??n.renderCell)(n,{item:e,selected:t,folded:o,group:r}):bt;customElements.define("cosmoz-omnitable-group-row",E(Bo,{useShadowDOM:!1}));const Ho=n=>{const{column:e}=n;return T(()=>{let t=0,o=0;const r=l=>{n.dispatchEvent(new CustomEvent("column-resize",{bubbles:!0,composed:!0,detail:{newWidth:Math.ceil(o+l.pageX-t),column:e}}))},i=()=>{document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",i)},a=l=>{t=l.pageX,o=n.previousElementSibling.getBoundingClientRect().width,document.addEventListener("pointermove",r),document.addEventListener("pointerup",i)};return n.addEventListener("pointerdown",a),()=>n.removeEventListener("pointerdown",a)},[e]),bt};customElements.define("cosmoz-omnitable-resize-nub",E(Ho));const Go=({data:n,columns:e,groupOnColumn:t,filters:o,setFilterState:r})=>wt(e,i=>i.name,i=>[c`<div
				class="cell ${i.headerCellClass} header-cell"
				part="cell header-cell cell-${i.name} header-cell-${i.name}"
				?hidden="${i===t}"
				title="${i.headerTitleFn(i)}"
				name="${i.name}"
			>
				${i.renderHeader(i,o[i.name]??{},a=>r(i.name,a),i.source(i,n))}
			</div>`,c`<cosmoz-omnitable-resize-nub
				.column="${i}"
				name="${i.name}"
			></cosmoz-omnitable-resize-nub>`]),Wo=({columns:n,settingsConfig:e,hideSelectAll:t,...o})=>c`
		${D(n,r=>Go({columns:r,...o}))}
		${D(!t,()=>c` <cosmoz-omnitable-settings
					.config=${e}
					part="settings"
				></cosmoz-omnitable-settings>`)}
	`;customElements.define("cosmoz-omnitable-header-row",E(Wo,{useShadowDOM:!1}));const qo=K`
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
`,Xo=({column:n})=>c`
	<div class="label" title="${n.title}" part="item-expand-label">
		${n.title}
	</div>
	<div class="value" part="item-expand-value">
		<slot></slot>
	</div>
`;customElements.define("cosmoz-omnitable-item-expand-line",E(Xo,{styleSheets:[Te(qo)]}));const Uo=({columns:n,item:e,selected:t,expanded:o,groupOnColumn:r})=>ln(n,i=>c`<cosmoz-omnitable-item-expand-line
				.column=${i}
				?hidden=${i===r}
				exportparts="item-expand-label, item-expand-value"
				>${i.renderCell(i,{item:e,selected:t,expanded:o})}</cosmoz-omnitable-item-expand-line
			>`);customElements.define("cosmoz-omnitable-item-expand",E(Uo,{useShadowDOM:!1}));const Ko=(n,e,t)=>n.editable?n.renderEditCell(n,e,t(n,e.item)):n.renderCell(n,e),Jo=({columns:n,groupOnColumn:e,item:t,index:o,selected:r,expanded:i,onItemChange:a})=>wt(n,l=>l.name,l=>c`<div
				class="cell itemRow-cell ${l.cellClass??""}"
				part="cell itemRow-cell cell-${l.name} itemRow-cell-${l.name}"
				?hidden="${l===e}"
				?editable="${l.editable}"
				title="${l.cellTitleFn(l,t)}"
				name="${l.name}"
			>
				${Ko(l,{item:t,index:o,selected:r,expanded:i},a)}
			</div>`);customElements.define("cosmoz-omnitable-item-row",E(Jo,{useShadowDOM:!1}));const Rt=K`
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
`,Qo=K`
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

	${Rt}

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
`,pt=n=>{const e=n.replace(/"/gu,'""');return e.search(/("|,|\n)/gu)>=0?'"'+e+'"':n},Yo=(n,e,t)=>{const i=n.map(l=>pt(l.title)).join(";")+`
`,a=e.map(l=>n.map(s=>{const u=s.getString(s,l);return u==null?"":pt(String(u))}).join(";")+`
`);a.unshift(i),zt(new File(a,t,{type:"text/csv;charset=utf-8"}))},Zo=(n,e)=>{const t=n.map(r=>r.title),o=e.map(r=>n.map(i=>{const a=i.toXlsxValue(i,r);return a??""}));return o.unshift(t),o},er=(n,e,t,o)=>{const r=Zo(n,e),i=new sn(t).addSheetFromData(r,o).generate();zt(new File([i],t,{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}))},tr=({columns:n,selectedItems:e,csvFilename:t,xlsxFilename:o,xlsxSheetname:r,topPlacement:i})=>c`<cosmoz-bottom-bar
		id="bottomBar"
		?active=${!Le(e.length)}
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
				@click=${()=>Yo(n,e,t)}
			>
				${_("Save as CSV")}
			</button>
			<button
				@click=${()=>er(n,e,o,r)}
			>
				${_("Save as XLSX")}
			</button>
			<slot name="download-menu"></slot>
		</cosmoz-dropdown-menu>
	</cosmoz-bottom-bar>`,nr=({allSelected:n,onAllCheckboxChange:e,sortAndGroup:t,dataIsValid:o,data:r,columns:i,filters:a,groupOnColumn:l,setFilterState:s,settingsConfig:u,hideSelectAll:m})=>c`<sort-and-group-provider .value=${t}>
		<div class="header" id="header" part="header">
			${D(!m,()=>c`<input
						class="checkbox all"
						type="checkbox"
						.checked=${n}
						@input=${e}
						?disabled=${!o}
						part="all"
					/>`)}
			${D(m,()=>c` <cosmoz-omnitable-settings
						.newLayout="${!0}"
						.config=${u}
					></cosmoz-omnitable-settings>`)}

			<cosmoz-omnitable-header-row
				part="headerRow"
				.data=${r}
				.columns=${i}
				.filters=${a}
				.groupOnColumn=${l}
				.setFilterState=${s}
				.settingsConfig=${u}
				.hideSelectAll=${m}
			></cosmoz-omnitable-header-row>
		</div>
	</sort-and-group-provider>`,or=$t`
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
`,rr=({settingsConfig:n})=>{const{columns:e,collapsed:t}=n,o=e.filter(r=>!t.some(i=>i.name===r.name));return c`<div class="skeleton">
		${Array.from({length:5},()=>c`<div>
					<div class="checkbox"></div>
					${o.map(r=>c`<div
								class="cell"
								part=${`cell-${r.name}`}
								name=${r.name}
							></div>`)}
				</div>`)}
	</div>`};customElements.define("cosmoz-omnitable-skeleton",E(rr,{styleSheets:[or]}));const ir=({slot:n,title:e,className:t,width:o="24",height:r="24",styles:i}={})=>c`
  <svg
    slot=${he(n)}
    class=${`delete-icon ${t??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${o}
    height=${r}
    style=${he(i)}
  >
    ${D(e,()=>Pt`<title>${e}</title>`)}
    <path
      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
    />
  </svg>
`,ar=(n,e)=>{const{settingsConfig:t}=n,{processedItems:o,dataIsValid:r,filterIsTooStrict:i,loading:a,displayEmptyGroups:l,compareItemsFn:s,setSelectedItems:u,renderItem:m,renderGroup:d,error:g}=e;return c`${D(!a&&!r&&!g,()=>c`<div class="tableContent-empty">
					<slot name="empty-set-message">
						${Qe({width:"96px",height:"96px",styles:"margin-right: 24px; fill: currentColor;"})}
						<div class="tableContent-empty-message">
							<h3>${_("Working set empty")}</h3>
							<p>${_("No data to display")}</p>
						</div>
					</slot>
				</div>`)}
		${D(i,()=>c`<div class="tableContent-empty">
					${Qe({width:"96px",height:"96px",styles:"margin-right: 24px; fill: currentColor;"})}
					<div>
						<h3>${_("Filter too strict")}</h3>
						<p>${_("No matches for selection")}</p>
					</div>
				</div>`)}
		${D(a&&!o.length,()=>c`<div class="tableContent-empty overlay">
					<cosmoz-omnitable-skeleton
						.settingsConfig=${t}
					></cosmoz-omnitable-skeleton>
				</div>`)}
		${D(a&&o.length,()=>c`<div class="tableContent-empty overlay spinner">
					<cz-spinner></cz-spinner>
				</div>`)}
		${D(g,()=>c`<div class="tableContent-empty overlay">
					${un({width:"96px",height:"96px",styles:"margin-right: 24px; fill: currentColor;"})}
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
				.displayEmptyGroups=${l}
				.compareItemsFn=${s}
				.renderItem=${m}
				.renderGroup=${d}
			></cosmoz-grouped-list>
			<slot name="extraContent"></slot>
		</div>`},lr=K`
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
	${Rt}
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
`,sr=K`
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
`,se=n=>{const e=parseInt(n,10);return isFinite(e)?e:void 0},ur=n=>{const{config:e}=n,{settings:t,setSettings:o,collapsed:r}=e,i=Re({collapsed:r,settings:t.columns,setSettings:$(a=>o(l=>({...l,columns:a})),[o])});return{...e,onDown:$(a=>{a.target.closest(".pull")&&(i.handle=a.currentTarget)},[i]),onDragStart:$(a=>{const{target:l}=a,s=se(l.dataset.index);if(!i.handle?.contains(l)||s==null)return a.preventDefault();i.handle=null,a.dataTransfer.effectAllowed="move",a.dataTransfer.setData("omnitable/sort-index",s),a.dataTransfer.setData("text/plain",s),setTimeout(()=>l.classList.add("drag"),0),l.addEventListener("dragend",u=>u.target.classList.remove("drag"),{once:!0})},[i]),onDragEnter:$(a=>{const l=a.currentTarget;l===a.target&&(a.preventDefault(),a.dataTransfer.dropEffect="move",l.classList.add("dragover"))},[]),onDragOver:$(a=>{a.preventDefault(),a.currentTarget.classList.add("dragover")},[]),onDragLeave:$(a=>{const l=a.currentTarget;l.contains(a.relatedTarget)||l.classList.remove("dragover")},[]),onDrop:$(a=>{const l=se(a.dataTransfer.getData("omnitable/sort-index")),s=se(a.currentTarget.dataset.index),{settings:u,setSettings:m}=i;a.currentTarget.classList.remove("dragover"),a.preventDefault();const d=u.slice();d.splice(s+(l>=s?0:-1),0,d.splice(l,1)[0]),m(d)},[i]),onToggle:$(a=>{const{settings:l,setSettings:s}=i,u=l.map(d=>({...d,disabled:d.disabled||i.collapsed?.some(g=>g.name===d.name)})),m=se(a.target.closest("[data-index]")?.dataset.index);u.splice(m,1,{...l[m],disabled:!a.target.checked,priority:a.target.checked?l.reduce((d,g)=>Math.max(d,g.priority),0)+1:l[m].priority}),s(u)},[i])}},cr=[cn({apply({availableHeight:n,elements:e}){Object.assign(e.floating.style,{maxHeight:`${Math.max(0,n)}px`})}}),...dn],dr=({onDragStart:n,onDragEnter:e,onDragOver:t,onDragLeave:o,onDrop:r,onDown:i,onToggle:a,collapsed:l,filters:s})=>(u,m)=>{const d=!!l?.find(p=>p.name===u.name),g=!u.disabled&&!d;return c` <div
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
			<button class="pull">${jn}</button>
			<label class="title" ?has-filter=${!Le(s[u.name]?.filter)}
				>${u.title}</label
			>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${g}
				@click=${a}
				.indeterminate=${d}
			/>
		</div>`},mr=n=>{const{settings:e,settingsId:t,onSave:o,onReset:r,hasChanges:i,opened:a,setOpened:l,...s}=ur(n);return c` <div class="headline">
			${_("Sort and filter")}
			<button
				class="close"
				@click=${u=>{const m=u.currentTarget;m?.focus(),m?.blur()}}
			>
				${Nn}
			</button>
		</div>

		<div class="contents">
			<div
				class="heading"
				?data-opened=${a.columns}
				@click=${()=>l(u=>({...u,columns:!u.columns}))}
				part="columns columns-heading"
			>
				${_("Columns")} ${Ce}
			</div>
			<cosmoz-collapse
				?opened="${a.columns}"
				part="columns columns-content"
			>
				<div class="list">${e.columns?.map(dr(s))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${a.sort}
				@click=${()=>l(u=>({...u,sort:!u.sort}))}
			>
				${_("Sort on")} ${Ce}
			</div>
			<cosmoz-collapse ?opened=${a.sort}> ${Hn()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${a.group}
				@click=${()=>l(u=>({...u,group:!u.group}))}
				part="groups groups-heading"
			>
				${_("Group on")} ${Ce}
			</div>
			<cosmoz-collapse ?opened=${a.group} part="groups groups-heading"
				>${Bn()}</cosmoz-collapse
			>
		</div>

		${D(t,()=>c`<div class="buttons">
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
				</div>`)}`};customElements.define("cosmoz-omnitable-settings-ui",E(mr,{styleSheets:[Te(lr)]}));const pr=({config:n,newLayout:e})=>c`
	<cosmoz-dropdown
		.placement="${e?"bottom-start":"bottom-end"}"
		.middleware="${cr}"
	>
		${D(e,()=>c`<div class="headerDots" slot="button">...</div>`,()=>c` <svg
					viewBox="0 0 24 24"
					width="24"
					slot="button"
					fill="currentColor"
				>
					<circle cx="10" cy="18" r="2"></circle>
					<circle cx="10" cy="12" r="2"></circle>
					<circle cx="10" cy="6" r="2"></circle>
				</svg>`)}
		${D(n?.badge,()=>c`<div class="badge" slot="button"></div>`)}
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${n}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`;customElements.define("cosmoz-omnitable-settings",E(pr,{styleSheets:[Te(sr)]}));const be=["sortOn","descending","groupOn","groupOnDescending"],ue=n=>e=>typeof e=="object"&&e!==null&&"name"in e&&e.name===n,gr=(n=[],e=[],t=[])=>{const o=e.filter(a=>n.some(ue(a.name))),r=n.filter(a=>a.name!=null&&!e.some(ue(a.name))&&!t.some(ue(a.name))),i=t.filter(a=>!e.some(ue(a.name)));return[...o,...i.flatMap(a=>{const l=n.find(s=>s.name===a.name);return l?{...a,title:l.title??a.title??"",minWidth:parseInt(l.minWidth??"0",10)}:[]}),...r.map(a=>{const{name:l,title:s,priority:u,minWidth:m,width:d,flex:g}=a;return{name:l??"",title:s??"",priority:u??0,minWidth:parseInt(m??"0",10),width:parseInt(d??"0",10),flex:parseInt(g??"0",10)}})]},hr=(n,e)=>({...e,...Oe(Array.from(be))(n),columns:n.columns?.map(Oe(["name","priority","width","flex","disabled"]))}),fr=({columns:n,settings:e,savedSettings:t,initial:o})=>({...Object.fromEntries(be.flatMap(i=>o?.[i]!=null?[[i,o[i]]]:[])),...t?Oe(Array.from(be))(t):{},...e,columns:gr(n,e?.columns,t?.columns)}),br=({prefix:n="omnitable-"}={})=>({write:async(t,o)=>{const r=n+t;try{o?localStorage.setItem(r,JSON.stringify(o)):localStorage.removeItem(r)}catch(i){console.error(i)}},read:async t=>{if(t)try{const o=localStorage.getItem(n+t);return o==null?void 0:JSON.parse(o)}catch(o){console.error(o)}}}),xr=vt(br),yr=()=>{const n=Ee(xr);return I(()=>n(),[n])},vr=(n,e,t,o)=>{const[r,i]=M(),{read:a,write:l}=yr();return T(async()=>{n&&i(await a(n))},[n,a]),{settingsId:n,savedSettings:r,onSave:$(async()=>{if(!n)return;const s=hr(e,r);await l(n,s),t(),i(s)},[e,r]),onReset:$(async s=>{t(),s.shiftKey&&(await l(n),i()),o?.()},[o]),hasChanges:e!=null}},$r=({settingsId:n,host:e})=>{const t=I(()=>Object.fromEntries(be.map(b=>[b,e[b]])),[]),o=Me(),r=$(()=>{o.current?.(t)},[t]),[i,a]=M(),[l,s]=M({columns:!0,sort:!0}),{savedSettings:u,...m}=vr(n,i,a,r),{enabledColumns:d}=e,g=An(e,{enabledColumns:d}),p=I(()=>fr({columns:g,settings:i,savedSettings:u,initial:t}),[g,i,u]),w=I(()=>p.columns.map(b=>g.find(x=>x.name===b.name)).filter(Boolean),[g,...p.columns.map(b=>b.name)]);return{...m,opened:l,setOpened:s,settings:p,columns:w,setSettings:a,resetRef:o}},gt=n=>Number.isFinite(n)?n:0,wr=(n,e)=>{const t=[];let[o,r]=n.reduce(([m,d],{width:g,flex:p})=>[m+g,d+p],[0,0]),i=e-o,a=gt(i/r),l=0,s=0,u=0;for(let m=0;m<n.length;m++){const{width:d,minWidth:g,flex:p}=n[m],w=i>=0?a*p:d*i/o;if(g>d+w){l+=d,s+=g,u+=p,t[m]=g;continue}if(p===0){l+=d,s+=d,t[m]=d;continue}}o-=l,i=e-s-o,r-=u,a=gt(i/r);for(let m=0;m<n.length;m++){if(t[m]!=null)continue;const{width:d,flex:g}=n[m],p=i>=0?a*g:d*i/o;t[m]=d+p}return t},xe=Symbol("index"),zr=(n,e)=>{if(typeof n.findLastIndex=="function")return n.findLastIndex(e);for(let t=n.length-1;t>=0;t--)if(e(n[t],t,n))return t;return-1},Sr=(n,e)=>{const t=zr(n,a=>a!=null&&a>0),o=(a,l)=>`.cell[name="${a}"], cosmoz-omnitable-skeleton::part(cell-${a}){width: ${Math.floor(l)}px;padding: 0 min(3px, ${l/2}px)}`,r=a=>`cosmoz-omnitable-resize-nub[name="${a}"]{display:none}`,i=a=>`cosmoz-omnitable-resize-nub[name="${a}"], .cell[name="${a}"]{display:none}`;return e.map((a,l)=>{const s=n[l];if(s==null||s===0)return i(a.name);const u=o(a.name,s);return l===t?`${u}
${r(a.name)}`:u}).join(`
`)},Mt=(n,e,t)=>{const o=n.filter(l=>!l.hidden),r=o.reduce((l,{width:s})=>l+s,0);if(o.length>1&&r>e)return Mt(o.slice(1),e,t);const i=o.reduce(([l,s],u,m)=>[Math.max(l,u.index),u.index>l?m:s],[-1,-1])[1];return i!==-1&&(o[i].flex=1),wr(o,e).reduce((l,s,u)=>(l[o[u].index]=s,l),new Array(t).fill(void 0))},Cr=(n,e)=>n.length===0?".cell {display: none;}":Sr(n,e),kr=({host:n,canvasWidth:e,layout:t,setSettings:o})=>{const r=Me();r.current=i=>o(a=>{const l=a.columns,{detail:{newWidth:s,column:u}}=i,m=l.findIndex(p=>p.name===u.name),d=[],g=l.reduce((p,w)=>Math.max(p,w.priority),-1/0);for(let p=0;p<t.length;p++)if(d[p]={...l[p]},p<m&&t[p]&&(d[p].width=t[p],d[p].flex=0,d[p].priority=g),p===m){const w=t.reduce((b,x,F)=>F<m&&x?b-x:b,e);d[p].width=Math.min(w,Math.max(s,l[p].minWidth)),d[p].flex=0,d[p].priority=g}return{...a,columns:d}}),T(()=>{const i=a=>r.current?.(a);return n.addEventListener("column-resize",i),()=>n.removeEventListener("column-resize",i)},[])},_r=(n,e)=>T(()=>{const t=([r])=>{r.contentRect?.width!==0&&requestAnimationFrame(()=>e(r.contentRect?.width-20-44-24))},o=new ResizeObserver(t);return o.observe(n),()=>o.unobserve(n)},[]),Ir=n=>{const[e,t]=M(()=>n.getBoundingClientRect().width);return _r(n,t),e},Fr=(n,e)=>{const t=I(()=>{let o=!1,r;const i=()=>{if(!o)return;r=requestAnimationFrame(i),n()&&(o=!1)};return{start:()=>{o=!0,cancelAnimationFrame(r),r=requestAnimationFrame(i)},stop:()=>{o=!1,cancelAnimationFrame(r)}}},[]);T(()=>{t.start()},e),T(()=>()=>t.stop(),[])},Or=(n=0,e=0)=>Math.abs(n-e)<.1,Dr=(n,e=1.9,t=mn)=>{const o=Re({target:n}),r=$(()=>{if(o.tween||(o.tween=o.target),o.target.every((i,a)=>o.tween[a]===i))return t(o.tween),!0;o.tween=o.target.map((i,a)=>Or(o.tween[a],i)?i:(o.tween[a]??0)+((i??0)-(o.tween[a]??0))/e||0),t(o.tween)},[]);Fr(r,[n])},Vr=({canvasWidth:n,groupOnColumn:e,config:t,miniColumn:o})=>I(()=>{if(!Array.isArray(t)||n==null||n===0)return[];const r=t.map((i,a)=>({minWidth:i.minWidth,width:i.width,flex:i.flex,priority:i.priority,name:i.name,index:a,hidden:i.name===e?.name||i.disabled})).map(i=>o?{...i,hidden:o.name!==i.name}:i).sort(({index:i,priority:a},{index:l,priority:s})=>a===s?l-i:a-s);return Mt(r,n,r.length)},[n,e,t]),Ar=({host:n,canvasWidth:e,columns:t})=>{const o=n.miniBreakpoint??480,r=I(()=>e<=o,[e,o]),i=I(()=>r?t?.filter(u=>u.mini!=null).sort((u,m)=>(u.mini??0)-(m.mini??0)):[],[t,r]),[a,...l]=i??[],s=!!a;return T(()=>{n.toggleAttribute("mini",s)},[s]),{isMini:s&&r,miniColumn:a,miniColumns:l}},Er=n=>{const e=I(()=>new CSSStyleSheet,[]);return T(()=>{n.shadowRoot.adoptedStyleSheets=[...n.shadowRoot.adoptedStyleSheets,e]},[]),e},Tr=({host:n,columns:e,settings:t,setSettings:o,resizeSpeedFactor:r,sortAndGroupOptions:i})=>{const a=Ir(n),{isMini:l,miniColumn:s,miniColumns:u}=Ar({host:n,canvasWidth:a,columns:e}),{groupOnColumn:m}=i,d=Vr({canvasWidth:a,groupOnColumn:m,miniColumn:s,config:t.columns}),g=Er(n),p=I(()=>t.columns.reduce((b,x,F)=>d[F]!=null||x.name===m?.name||x.disabled?b:[...b,e.find(h=>h.name===x.name)],[]),[e,t,d]),w=Re({columns:t.columns});return Dr(d,r,b=>{const x=Cr(b,w.columns);g.replace(x)}),kr({host:n,canvasWidth:a,layout:d,setSettings:b=>o(b(t))}),{isMini:l,collapsedColumns:p,miniColumns:u}},Lr=({host:n,...e})=>{const{csvFilename:t="omnitable.csv",xlsxFilename:o="omnitable.xlsx",xlsxSheetname:r="Omnitable",topPlacement:i="top-end"}=n;return{csvFilename:t,xlsxFilename:o,xlsxSheetname:r,topPlacement:i,...e}},Rr=({host:n,selectedItems:e,data:t,sortAndGroupOptions:o,collapsedColumns:r,settings:i,filterFunctions:a,settingS:l,filters:s,...u})=>{const m=t&&t.length>0&&e.length===t.length,d=b=>{b.target.checked?n.shadowRoot.querySelector("#groupedList").selectAll():n.shadowRoot.querySelector("#groupedList").deselectAll()},{groupOnColumn:g}=o,p=I(()=>[g,...r,...i.columns.filter(b=>b.disabled)].some(b=>b&&Object.keys(a).includes(b.name)),[a,i,r]),w=I(()=>({...l,collapsed:r,badge:p,filters:s}),[l,r,p,s]);return T(()=>{const b=n.shadowRoot.querySelector("#tableContent"),x=new ResizeObserver(F=>requestAnimationFrame(()=>{n.style.setProperty("--ot-height",F[0]?.contentRect.height+"px")}));return x.observe(b),()=>x.unobserve(b)},[]),{allSelected:m,onAllCheckboxChange:d,data:t,settingsConfig:w,filters:s,groupOnColumn:g,sortAndGroup:o.sortAndGroup,...u}},Nt=c`
	<svg
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
	>
		<g>
			<path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
		</g>
	</svg>
`,Mr=n=>n?"groupRow groupRow-folded":"groupRow",Nr=({item:n,index:e})=>t=>D(t?.length>0,()=>c`
				<div class="itemRow-minis" part="item-minis">
					${t.map(o=>c`<div
								class="itemRow-mini"
								part="item-mini item-mini-${o.name}"
							>
								${(o.renderMini??o.renderCell)(o,{item:n,index:e})}
							</div>`)}
				</div>
			`),jr=({columns:n,collapsedColumns:e,miniColumns:t,onItemClick:o,onCheckboxChange:r,dataIsValid:i,groupOnColumn:a,onItemChange:l,rowPartFn:s})=>(u,m,{selected:d,expanded:g,toggleCollapse:p})=>c`
		<div
			?selected=${d}
			part="${["itemRow",`itemRow-${u[xe]}`,s?.(u,m)].filter(Boolean).join(" ")}"
			.dataIndex=${u[xe]}
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
					.groupOnColumn=${a}
					.onItemChange=${l}
				>
				</cosmoz-omnitable-item-row>
				<button
					class="expand"
					?hidden="${Le(e.length)}"
					?aria-expanded="${g}"
					@click="${p}"
				>
					${Nt}
				</button>
			</div>
			${Nr({item:u,index:m})(t)}
		</div>
		<cosmoz-omnitable-item-expand
			.columns=${e}
			.item=${u}
			.index=${m}
			?selected=${d}
			?expanded=${g}
			.groupOnColumn=${a}
			part="item-expand"
		>
		</cosmoz-omnitable-item-expand>
	`,Pr=({onCheckboxChange:n,dataIsValid:e,groupOnColumn:t})=>(o,r,{selected:i,folded:a,toggleFold:l})=>c` <div
			class="${Mr(a)}"
			part="groupRow groupRow-${o[xe]}"
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
				${Nt}
			</button>
		</div>`,Br=({host:n,error:e,dataIsValid:t,processedItems:o,columns:r,collapsedColumns:i,miniColumns:a,sortAndGroupOptions:l,rowPartFn:s,...u})=>{const{loading:m=!1,displayEmptyGroups:d=!1,compareItemsFn:g}=n,p=Me({shiftKey:!1,ctrlKey:!1}),w=$(h=>{const k=h.target.dataItem,f=h.target.checked;p.current.shiftKey?n.shadowRoot.querySelector("#groupedList").toggleSelectTo(k,f):p.current.ctrlKey?(h.target.checked=!0,n.shadowRoot.querySelector("#groupedList").selectOnly(k)):n.shadowRoot.querySelector("#groupedList").toggleSelect(k,f),h.preventDefault(),h.stopPropagation()},[]);T(()=>{const h=({shiftKey:k,ctrlKey:f})=>{p.current={shiftKey:k,ctrlKey:f}};return window.addEventListener("keydown",h),window.addEventListener("keyup",h),()=>{window.removeEventListener("keydown",h),window.removeEventListener("keyup",h)}},[]);const b=$(h=>{const k=h.composedPath();k.slice(0,k.indexOf(h.currentTarget)).find(v=>v.matches?.("a, .checkbox, .expand"))||n.dispatchEvent(new window.CustomEvent("omnitable-item-click",{bubbles:!0,composed:!0,detail:{item:h.currentTarget.dataItem,index:h.currentTarget.dataIndex}}))},[]),{groupOnColumn:x}=l,F=$((h,k)=>f=>En(n,h,k,f),[]);return{...u,processedItems:o,dataIsValid:t,filterIsTooStrict:t&&o.length<1,loading:m,compareItemsFn:g,displayEmptyGroups:d,error:e,renderItem:I(()=>jr({columns:r,collapsedColumns:i,miniColumns:a,onItemClick:b,onCheckboxChange:w,dataIsValid:t,groupOnColumn:x,onItemChange:F,rowPartFn:s}),[r,i,b,w,t,x,F,s]),renderGroup:I(()=>Pr({onCheckboxChange:w,dataIsValid:t,groupOnColumn:x}),[w,t,x])}},Hr=(n,e)=>{if(n===e)return 0;if(n==null)return-1;if(e==null)return 1;const t=typeof n,o=typeof e;return t==="object"&&o==="object"?n.toString()<e.toString()?-1:1:t==="number"&&o==="number"?n-e:t==="string"&&o==="string"?n<e?-1:1:t==="boolean"&&o==="boolean"?n?-1:1:(console.warn("unsupported sort",t,n,o,e),0)},_e=(n,e)=>(t,o)=>Hr(n(t),n(o))*(e?-1:1),Gr=n=>n.replace(/([a-z0-9])([A-Z])/gu,"$1-$2").toLowerCase(),ht=(n,e)=>{!n||!e||Object.entries(e).forEach(([t,o])=>{n[B].__ownChange=!0,n[B][t]=o,n[B].__ownChange=!1,n[B].dispatchEvent(new CustomEvent(`${Gr(t)}-changed`,{bubbles:!0,detail:{value:o}}))})},Ie=(n,e)=>Object.assign(n,{[xe]:e}),ce=Symbol("unparsed"),Wr=({data:n,columns:e,hashParam:t,sortAndGroupOptions:o,noLocalSort:r,noLocalFilter:i})=>{const{groupOnColumn:a,groupOnDescending:l,sortOnColumn:s,descending:u}=o,m=$(([f,v])=>{const y=e.find(({name:z})=>z===f);return y==null?[f,void 0]:[f,v.filter&&y.serializeFilter(y,v.filter)]},[e]),d=$(([f,v])=>{const y=e.find(({name:C})=>C===f);if(y==null)return[f,{[ce]:v}];const z={filter:y.deserializeFilter(y,v)};return ht(y,z),[f,z]},[e]),[g,p]=J({},t,{multi:!0,suffix:"-filter--",write:m,read:d}),w=$((f,v)=>p(y=>{const z=ve(v,y[f]);return ht(e.find(C=>C.name===f),z),{...y,[f]:{...y[f],...z}}}),[e,p]),b=I(()=>Object.values(g).map(f=>f.filter),[g]),x=I(()=>Object.fromEntries(e.map(f=>[f.name,!f.noLocalFilter&&f.getFilterFn(f,g[f.name]?.filter)]).filter(([,f])=>!!f)),[e,...b]),F=I(()=>!Array.isArray(n)||n.length===0?[]:Object.entries(x).length===0||i?n.slice():n.filter(f=>Object.values(x).every(v=>v(f))),[n,x,i]),h=I(()=>{if(!r&&!a&&s!=null&&s.sortOn!=null)return F.slice().sort(_e(f=>s.getComparableValue({...s,valuePath:s.sortOn},f),u));if(a!=null&&a.groupOn!=null){const f=F.reduce((v,y)=>{const z=a.getComparableValue({...a,valuePath:a.groupOn},y);if(z===void 0)return v;let C=v.find(R=>R.id===z);return C?(C.items.push(y),v):(C={id:z,name:z,items:[y]},[...v,C])},[]);return f.sort(_e(v=>a.getComparableValue({...a,valuePath:a.groupOn},v.items[0]),l)),!s||r?f:f.filter(v=>Array.isArray(v.items)).map(v=>(v.items.sort(_e(y=>s.getComparableValue({...s,valuePath:s.sortOn},y),u)),v))}return F},[F,a,l,s,u,r]),k=I(()=>{let f=0,v=0;const y=[];return h.forEach(z=>{if(Array.isArray(z.items)){Ie(z,v++),z.items.forEach(C=>{Ie(C,f++),y.push(C)});return}return Ie(z,f++),y.push(z)},[]),y},[h]);return T(()=>{p(f=>Object.values(f).some(y=>y[ce]!=null)?Object.fromEntries(Object.entries(f).map(([y,z])=>z[ce]==null?[y,z]:d([y,z[ce]]))):f)},[d]),{processedItems:h,visibleData:k,filters:g,filterFunctions:x,setFilterState:w}},qr=n=>{const e=o=>{const r=n.data.indexOf(o);if(r<0)return null;const i=n.data.splice(r,1);if(n.data=n.data.slice(),Array.isArray(i)&&i.length>0)return i[0]},t=(o,r)=>{n.data.splice(o,1,r),n.data=n.data.slice()};return{removeItem:e,removeItems(o){const r=[];for(let i=o.length-1;i>=0;i-=1){const a=n.removeItem(o[i]);a!=null&&r.push(a)}return r},replaceItemAtIndex:t,replaceItem(o,r){const i=n.data.indexOf(o);if(i>-1)return t(i,r)},selectItem(o){n.shadowRoot.querySelector("#groupedList").select(o)},selectAll(){n.shadowRoot.querySelector("#groupedList").selectAll()},deselectAll(){n.shadowRoot.querySelector("#groupedList").deselectAll()},deselectItem(o){n.shadowRoot.querySelector("#groupedList").deselect(o)},isItemSelected(o){return n.shadowRoot.querySelector("#groupedList").isItemSelected(o)}}},Xr=({host:n,visibleData:e,filters:t,...o})=>{const{setFilterState:r}=o,i=I(()=>qr(n),[]);De(o,Object.values(o)),De(i,Object.values(i)),T(()=>{const l=s=>r(s.detail.name,u=>({...u,...s.detail.state}));return n.addEventListener("legacy-filter-changed",l),()=>n.removeEventListener("legacy-filter-changed",l)},[]),P("visibleData",e),P("sortedFilteredGroupedItems",o.sortedFilteredGroupedItems),P("selectedItems",o.selectedItems),P("sortOn",o.sortOn),P("descending",o.descending),P("isMini",o.isMini);const a=I(()=>Object.fromEntries(Object.entries(t).filter(([,{filter:l}])=>l!==void 0).map(([l,{filter:s}])=>[l,s])),[t]);P("filters",a,Object.values(a))},Ur=n=>{const{hashParam:e,settingsId:t,data:o,resizeSpeedFactor:r,noLocal:i,noLocalSort:a=i,noLocalFilter:l=i,error:s,rowPartFn:u}=n,m=$r({settingsId:t,host:n}),{settings:d,setSettings:g,columns:p,resetRef:w}=m,b=Mn(p,e,d,g,w),{processedItems:x,visibleData:F,filters:h,setFilterState:k,filterFunctions:f}=Wr({data:o,columns:p,hashParam:e,sortAndGroupOptions:b,noLocalSort:a,noLocalFilter:l}),{isMini:v,collapsedColumns:y,miniColumns:z}=Tr({host:n,columns:p,settings:d,setSettings:g,resizeSpeedFactor:r,sortAndGroupOptions:b}),C=o&&Array.isArray(o)&&o.length>0,[R,G]=M([]);return Xr({host:n,visibleData:F,sortedFilteredGroupedItems:x,columns:p,filters:h,setFilterState:k,selectedItems:R,isMini:v,...b}),{header:Rr({host:n,selectedItems:R,sortAndGroupOptions:b,dataIsValid:C,data:o,columns:p,filters:h,collapsedColumns:y,settings:d,filterFunctions:f,settingS:m,setFilterState:k,hideSelectAll:n.hideSelectAll===!0}),list:Br({host:n,error:s,dataIsValid:C,processedItems:x,setSelectedItems:G,columns:p,collapsedColumns:y,miniColumns:z,sortAndGroupOptions:b,rowPartFn:u}),footer:Lr({host:n,selectedItems:R,columns:p})}};customElements.define("cosmoz-grouped-list-row",class extends HTMLElement{get item(){return this._item}set item(e){this._item=e,this._render()}get index(){return this._index}set index(e){this._index=e,this._render()}get renderFn(){return this._renderFn}set renderFn(e){this._renderFn=e,this._render()}_render(){this._item==null||this._index==null||this._renderFn==null||Fe(this._renderFn(this._item,this._index),this)}});const Kr={group:Symbol("group")},ze=(n,e)=>(e.has(n)||e.set(n,{}),e.get(n)),Jr=(n,e)=>!!ze(n,e).expanded,Qr=(n,e)=>!!ze(n,e).folded,Ve=n=>n?n.items instanceof Array:!1,Yr=n=>{if(!Array.isArray(n)||n.length===0)return;const e=Array.isArray(n[0]?.items);if(!n.every(o=>Array.isArray(o.items)===e))throw new Error("Data must be homogeneous.")},Zr=(n,e,t)=>Array.isArray(n)?(Yr(n),n.reduce((r,i)=>{const a=i;return a.items?a.items.length?ze(i,t).folded?r.concat(i):r.concat(i,a.items.map(l=>Object.assign(l,{[Kr.group]:i}))):e?r.concat(i):r:r.concat(i)},[])):void 0,ei=(n,...e)=>typeof n=="function"?n(...e):n,ti=(n,e)=>n===e,ni=()=>{const[n,e]=M(()=>[new WeakMap]);return{setItemState:$((o,r)=>e(([i])=>{const a=ze(o,i);return Object.assign(a,ei(r,a)),[i]}),[]),state:n[0],signal:n}},oi=()=>{const{setItemState:n,state:e,signal:t}=ni(),o=$((i,a)=>{Ve(i)&&n(i,l=>({folded:a!==void 0?a:!l.folded}))},[]),r=$((i,a)=>{Ve(i)||n(i,l=>({expanded:a!==void 0?!a:!l.expanded}))},[]);return{state:e,signal:t,toggleFold:o,toggleCollapse:r}},ri=({initial:n,compareItemsFn:e,data:t,flatData:o})=>{const[r,i]=M(n),[a,l]=M(),s=$(h=>r.includes(h),[r]),u=$(h=>h?.items?.every(s)??!1,[s]),m=$(h=>s(h)||u(h),[s,u]),d=$(h=>{const f=h.items??[h];i(v=>[...v,...f.filter(y=>!v.includes(y))]),l(h)},[]),g=$(h=>{const f=h.items??[h];i(v=>v.filter(y=>!f.includes(y))),l(h)},[]),p=$(h=>{i(h.items?.slice()||[h]),l(h)},[]),w=$(()=>{i(t.flatMap(h=>h.items||h)),l(void 0)},[t]),b=$(()=>{i([]),l(void 0)},[]),x=$((h,k=!m(h))=>k?d(h):g(h),[m]),F=$((h,k)=>{if(!o)return;const f=a?o.findIndex(z=>e(z,a)):-1;if(f<0)return x(h,k);const[v,y]=[f,o.indexOf(h)].sort((z,C)=>z-C);o.slice(v,y+1).forEach((z,C,R)=>{C>0&&C<R.length-1&&Ve(z)||x(z,k)}),l(h)},[o,e,x]);return T(()=>i(h=>h.length>0&&o?o.filter(k=>h.find(f=>e(k,f))):h),[o]),{selectedItems:r,isItemSelected:s,isGroupSelected:u,isSelected:m,select:d,deselect:g,selectOnly:p,selectAll:w,deselectAll:b,toggleSelect:x,toggleSelectTo:F}},ii={host:{position:"relative",display:"flex",flexDirection:"column"}},ai=n=>{const{data:e,renderItem:t,renderGroup:o,displayEmptyGroups:r,compareItemsFn:i=ti}=n,{toggleFold:a,toggleCollapse:l,state:s,signal:u}=oi(),m=I(()=>Zr(e,r,s),[e,r,u]),{selectedItems:d,isItemSelected:g,isGroupSelected:p,isSelected:w,select:b,deselect:x,selectOnly:F,selectAll:h,deselectAll:k,toggleSelect:f,toggleSelectTo:v}=ri({initial:[],compareItemsFn:i,data:e,flatData:m}),y=$((C,R)=>Array.isArray(C.items)?o(C,R,{selected:p(C),folded:Qr(C,s),toggleSelect:G=>f(C,typeof G=="boolean"?G:void 0),toggleFold:()=>a(C)}):t(C,R,{selected:d.includes(C),expanded:Jr(C,s),toggleSelect:G=>f(C,typeof G=="boolean"?G:void 0),toggleCollapse:()=>l(C)}),[t,o,d,f,u]);xt(()=>{Object.assign(n.style,ii.host)},[]),P("selectedItems",d);const z={toggleFold:a,toggleCollapse:l,isItemSelected:g,isGroupSelected:p,isSelected:w,select:b,deselect:x,selectOnly:F,selectAll:h,deselectAll:k,toggleSelect:f,toggleSelectTo:v};return De(z,Object.values(z)),{renderRow:y,flatData:m}},li=({renderRow:n,flatData:e})=>pn({items:e,renderItem:(t,o)=>c`<cosmoz-grouped-list-row
				.item=${t}
				.index=${o}
				.renderFn=${n}
			></cosmoz-grouped-list-row>`}),si=n=>li(ai(n));customElements.define("cosmoz-grouped-list",E(si,{useShadowDOM:!1}));const ui=n=>window.ShadyCSS?.ApplyShim?.transformCssText?.(n)||n,ci=n=>{const{header:e,list:t,footer:o}=Ur(n);return c`
		<style>
			${gn([],()=>ui(Qo))}
		</style>

		<div class="mainContainer">
			${nr(e)}
			<div class="tableContent" id="tableContent">
				${ar(e,t)}
			</div>
			${tr(o)}
		</div>

		<div id="columns">
			<slot id="columnsSlot"></slot>
		</div>
	`};customElements.define("cosmoz-omnitable",class extends E(ci,{observedAttributes:["hash-param","sort-on","group-on","descending","group-on-descending","hide-select-all","settings-id","no-local","no-local-sort","no-local-filter","loading","mini-breakpoint"]}){connectedCallback(){super.connectedCallback(),Se(this,"selectedItems",[]),Se(this,"visibleData",[]),Se(this,"sortedFilteredGroupedItems",[])}});const ye=`
	<slot name="actions" slot="actions"></slot>
`;c(Object.assign([ye],{raw:[ye]}));Ae(Object.assign([ye],{raw:[ye]}));const di=()=>c`<style>
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
</style>`;customElements.define("cz-spinner",E(di));const ft=(n,e,t)=>{let o=String(n),r=-1;const i=t,a=e-o.length;for(;++r<a;)o=i+o;return o},O=(n,e)=>Math.floor(Math.random()*(e-n+1))+n,mi=()=>"2015-"+ft(O(1,12),2,"0")+"-"+ft(O(1,28),2,"0"),pi=()=>{const n=O(0,20);return n===1?new Date(2015,3,2,14,26,10,299):n===2?new Date(2016,4,2,10,9,10,444):n===3?new Date(2016,4,2,10,9,10,443):n===4?new Date(2016,4,2,10,9,10,442):new Date(O(2014,2017),O(1,12),O(1,28),O(0,23),O(0,59),O(0,59),O(0,999))},jt=(n,e,t)=>{const o=O(n,e),r=[],i=["Lorem ipsum dolor sit amet","Nunc tristique","Curabitur vestibulum","Cras laoreet","Himenaeos","maximus diam purus at mauris"],a=["SEK","USD","EUR","AUD"];let l=0;for(let s=0;s<o;s+=1){const u="Group "+s,m=s*2+1;for(let d=0;d<m;d+=1){const g=[],p=[],w=l%10;for(let b=0;b<w;b+=1)g.push("Item "+b),p.push({name:"Item "+b,value:"item-value-"+b});r.push({id:l,name:u+" item "+d,value:O(0,1e4),bool:O(0,100)>50,object:{value:O(0,1e4),label:"Random string "+O(1,t)},sub:{subProp:i[l%i.length]},randomString:"Random string "+O(1,t),randomString2:"Random string 2 "+O(1,t),randomString3:"Random string 3 "+O(1,t),randomString4:"Random string 4 "+O(1,t),date:pi(),dateJSON:mi(),amount:{amount:O(10,100),currency:a[l%a.length]},group:u,list:g,objectList:p}),l+=1}}return r},xi={title:"Components/ComsmozOmnitableFullDemo",component:"cosmoz-omnitable",tags:["autodocs"],args:{loading:!1,locale:"en",sortOn:"",groupOn:"",descending:!1,groupOnDescending:!1,hashParam:"",settingsId:"",selectedItems:[],disabled:!1},argTypes:{loading:{control:"boolean",description:"Show loading state",table:{defaultValue:{summary:"false"}}},locale:{control:"select",options:["en","fr","sv"],description:"Language locale",table:{defaultValue:{summary:"en"}}},selectedItems:{control:"object",description:"Show selected items"},data:{control:"object",description:"Show specified items"},sortOn:{control:"text",description:'Column property name to sort on (e.g., "amount", "date", "id")'},groupOn:{control:"text",description:'Column property name to group on (e.g., "amount", "date", "id")'},descending:{control:"boolean",description:"Sort on descending"},groupOnDescending:{control:"boolean",description:"Group on descending"},hashParam:{control:"text",description:"Hash parameter for URL state management"},settingsId:{control:"text",description:"ID for storing table settings"},disabled:{control:"boolean",description:"Hide one column",table:{defaultValue:{summary:"false"}}}},render:n=>c`
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
                    ${ir({styles:"vertical-align: middle; fill: currentColor;"})}
                    <span>Remove items</span>
                </paper-button>
            </cosmoz-omnitable>
        `,play:async()=>{console.log("Current hash:",window.location.hash)}},de={args:{data:jt(10,10,10)}},me={args:{data:jt(2,2,10)}},pe={args:{data:[]}};de.parameters={...de.parameters,docs:{...de.parameters?.docs,source:{originalSource:`{
  args: {
    data: generateTableDemoData(10, 10, 10)
  }
}`,...de.parameters?.docs?.source}}};me.parameters={...me.parameters,docs:{...me.parameters?.docs,source:{originalSource:`{
  args: {
    data: generateTableDemoData(2, 2, 10)
  }
}`,...me.parameters?.docs?.source}}};pe.parameters={...pe.parameters,docs:{...pe.parameters?.docs,source:{originalSource:`{
  args: {
    data: []
  }
}`,...pe.parameters?.docs?.source}}};const yi=["TableWithLargeData","TableWithSmallData","TableWithNoData"];export{de as TableWithLargeData,pe as TableWithNoData,me as TableWithSmallData,yi as __namedExportsOrder,xi as default};
