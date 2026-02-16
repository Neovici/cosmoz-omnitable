import{b as d,D as Fe,A as bt,w as Bt}from"./iframe-D1LqjIGT.js";import{t as K,c as T,g as S,P as A,u as M,a as xt,m as vt,s as Ht,D as Gt,b as Wt,e as qt,i as ye,h as Ae,d as Xt,f as yt,r as Ut,j as Kt,k as _,l as Jt,n as $e,p as he,o as D,q as Yt,v as we,w as Qt,x as Zt,y as en,T as tn,z as E,A as fe,B as I,C as w,E as nn,F as on,G as rn,H as ln,I as an,J as $t,K as Ee,L as wt,M as Te,N as sn,O as zt,Q as un,R as Le,S as Ye,U as cn,V as Re,W as dn,X as mn,Y as Oe,Z as Me,_ as pn,$ as De,a0 as P,a1 as gn,a2 as Se,a3 as hn}from"./cosmoz-collapse-Bamaj99W.js";import"./preload-helper-PPVm8Dsz.js";const fn=K`
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
`,bn=()=>d`
	<style>
		${fn}
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
`;customElements.define("cosmoz-clear-button",T(bn));const U=({valuePath:n},e)=>S(e,n),xn=U,vn=U,yn=({valuePath:n},e)=>t=>{const o=S(t,n);return o==null?!1:o.toString().toLowerCase().trim().includes(e.toLowerCase().trim())},$n=(n,e)=>e===""||e==null?null:e,N=n=>class extends n{static get properties(){return{isOmnitableColumn:{type:Boolean,value:!0},title:{type:String},valuePath:{type:String,notify:!0},values:{type:Array,notify:!0},filter:{type:Object},noLocalFilter:{type:Boolean},disabled:{type:Boolean,value:!1,notify:!0},editable:{type:Boolean,notify:!0},loading:{type:Boolean,value:!1,notify:!0},externalValues:{type:Boolean,value:!1,notify:!0},name:{type:String},sortOn:{type:String},groupOn:{type:String},noSort:{type:Boolean,value:!1},width:{type:String,value:"75px"},minWidth:{type:String,value:"40px"},flex:{type:String,value:"1"},cellClass:{type:String,value:"default-cell"},headerCellClass:{type:String,value:"default-header-cell"},priority:{type:Number,value:0},hidden:{type:Boolean,notify:!0},preferredDropdownHorizontalAlign:{type:String,value:"right"},renderHeader:{type:Function},renderCell:{type:Function},renderEditCell:{type:Function},renderGroup:{type:Function},mini:{type:Number,value:null},renderMini:{type:Function}}}static get observers(){return["notifyFilterChange(filter)"]}notifyFilterChange(e){this.__ownChange||this.dispatchEvent(new CustomEvent("legacy-filter-changed",{detail:{name:this.name,state:this.legacyFilterToState(e)},bubbles:!0}))}legacyFilterToState(e){return{filter:e}}getFilterFn(){}getString(e,t){return U(e,t)}toXlsxValue(e,t){return xn(e,t)}cellTitleFn(e,t){return this.getString(e,t)}headerTitleFn(e){return e.title}serializeFilter(e,t){return $n(e,t)}deserializeFilter(e,t){return t==null?null:typeof t=="string"?window.decodeURIComponent(t):t}getComparableValue(e,t){return vn(e,t)}computeSource(e,t){return t}_propertiesChanged(e,t,o){super._propertiesChanged(e,t,o),this.dispatchEvent(new CustomEvent("cosmoz-column-prop-changed",{bubbles:!0}))}},wn=n=>e=>n(t=>{if(t.inputValue===void 0&&e.target.value==="")return t;clearTimeout(t.t);const o=setTimeout(()=>n(r=>({...r,filter:r.inputValue})),1e3);return{...t,inputValue:e.target.value,t:o}}),zn=n=>()=>n(e=>({...e,filter:e.inputValue})),Sn=n=>e=>{e.keyCode===13&&(e.preventDefault(),n(t=>({...t,filter:t.inputValue})))},Cn=n=>e=>n(t=>({...t,headerFocused:e.detail.value})),_n=n=>()=>n(e=>({...e,filter:null,inputValue:null})),kn=n=>n!=null&&n!=="";class In extends N(A){static get properties(){return{minWidth:{type:String,value:"55px"},editMinWidth:{type:String,value:"55px"},inputValue:{type:Object,notify:!0}}}getFilterFn(e,t){if(!(t==null||t===""))return yn(e,t)}renderCell(e,{item:t}){return d`<span class="default-column">${U(e,t)}</span>`}renderEditCell(e,{item:t},o){return d`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>o(i.target.value)}
			.value=${U(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,inputValue:o,headerFocused:r},i){return d`<cosmoz-input
			label=${e.title}
			.value=${o??t}
			@value-changed=${wn(i)}
			focused=${r}
			@focused-changed=${Cn(i)}
			@keydown=${Sn(i)}
			@blur=${zn(i)}
		>
			<cosmoz-clear-button
				suffix
				slot="suffix"
				?visible=${kn(t)}
				light
				@click=${_n(i)}
			></cosmoz-clear-button>
		</cosmoz-input>`}legacyFilterToState(e){return{filter:e,inputValue:e}}}customElements.define("cosmoz-omnitable-column",In);const B=Symbol("column"),Fn=n=>{let e=!0;const t=n.map(o=>o.name);return n.forEach(o=>{o.name==null&&(e=!1,console.error("The name attribute needs to be set on all columns! Missing on column",o))}),n.forEach(o=>{t.indexOf(o.name)!==t.lastIndexOf(o.name)&&(e=!1,console.error("The name attribute needs to be unique among all columns! Not unique on column",o))}),e},On=n=>{const e=n.valuePath??n.name;return{name:n.name,title:n.title,valuePath:e,groupOn:n.groupOn??e,sortOn:n.sortOn??e,noSort:n.noSort,minWidth:n.minWidth,width:n.width,flex:n.flex,priority:n.priority,getString:n.getString,getComparableValue:n.getComparableValue,serializeFilter:n.serializeFilter,deserializeFilter:n.deserializeFilter,toXlsxValue:n.toXlsxValue,renderHeader:n.renderHeader,renderCell:n.renderCell,renderEditCell:n.renderEditCell,renderGroup:n.renderGroup,cellTitleFn:n.cellTitleFn,headerTitleFn:n.headerTitleFn,getFilterFn:n.getFilterFn,headerCellClass:n.headerCellClass,cellClass:n.cellClass,editable:n.editable,values:n.values,source:vt(n.computeSource),noLocalFilter:n.noLocalFilter,mini:n.mini,renderMini:n.renderMini,loading:n.loading,externalValues:n.externalValues,computeSource:n.computeSource,trueLabel:n.trueLabel,falseLabel:n.falseLabel,valueProperty:n.valueProperty,textProperty:n.textProperty,emptyLabel:n.emptyLabel,emptyValue:n.emptyValue,min:n.min,max:n.max,locale:n.locale,autoupdate:n.autoupdate,maximumFractionDigits:n.maximumFractionDigits,minimumFractionDigits:n.minimumFractionDigits,currency:n.currency,rates:n.rates,autodetect:n.autodetect,ownerTree:n.ownerTree,keyProperty:n.keyProperty,...n.getConfig?.(n),[B]:n}},Dn=n=>n.isOmnitableColumn&&!n.hidden,Vn=n=>{const e=n.filter(Dn);return Fn(e)?e:[]},An=(n,e)=>(Array.isArray(e)?n.filter(o=>e.includes(o.name)):n.filter(o=>!o.disabled)).map(On),En=(n,{enabledColumns:e})=>{const[t,o]=M([]);return xt(()=>{let r,i=[];const l=n.shadowRoot.querySelector("#columnsSlot"),a=s=>()=>{const c=l.assignedNodes({flatten:!0});if(s)i=c;else{const m=c.filter(x=>!i.includes(x)),h=i.filter(x=>!c.includes(x)),p=[...m,...h].some(x=>x.isOmnitableColumn);if(i=c,!p)return}o(An(Vn(c),e))},u=s=>{cancelAnimationFrame(r),r=requestAnimationFrame(a(s?.type==="cosmoz-column-prop-changed"))};return u(),l.addEventListener("slotchange",u),n.addEventListener("cosmoz-column-prop-changed",u),()=>{l.removeEventListener("slotchange",u),n.removeEventListener("cosmoz-column-prop-changed",u),cancelAnimationFrame(r)}},[e]),t},St=(n,e)=>Array.isArray(n)?n.map(t=>S(t,e)).filter((t,o,r)=>t!=null&&r.indexOf(t)===o):void 0,Q=({externalValues:n,values:e,valuePath:t},o)=>{if(n)return n;if(typeof e=="function")return e;if(t!==void 0)return St(o,t)},Tn=(n,e,t,o)=>{const{valuePath:r}=e,i=r!==void 0?S(t,r):void 0;if(o===i)return;r!==void 0&&Ht(t,r,o);const l={item:t,valuePath:r,value:o,oldValue:i,column:e[B]};n.dispatchEvent(new CustomEvent("column-item-changed",{bubbles:!0,composed:!0,detail:l}))},Ct=n=>n?typeof n.close=="function"?n:Ct(n.parentElement):null,Ne=n=>class extends n{static get properties(){return{filter:{type:Object,notify:!0},values:{type:Array,value(){return[]}},headerFocused:{type:Boolean,notify:!0},min:{type:Number,value:null},max:{type:Number,value:null},limits:{type:Function},autoupdate:{type:String,value:!0},locale:{type:String,value:null},_filterInput:{type:Object,value(){return{min:null,max:null}}},_range:{type:Object,computed:"_computeRange(values.*)"},_limit:{type:Object,computed:"_computeLimit(_range, _filterInput.*, min, max)",value(){return{}}},_tooltip:{type:String,computed:"_computeTooltip(title, _filterText)"},_fromClasses:{type:String,computed:"_computeInputClasses(_filterInput.min)"},_toClasses:{type:String,computed:"_computeInputClasses(_filterInput.max)"}}}static get observers(){return["_filterInputChanged(_filterInput.*, autoupdate)","_filterChanged(filter.*)","_updateLimits(limits, headerFocused)"]}disconnectedCallback(){this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),super.disconnectedCallback()}_computeInputClasses(e){return e!=null&&e!==""?"has-value":""}toNumber(e,t,o){if(e==null||e==="")return;const r=typeof e=="number"?e:Number(e);if(Number.isNaN(r))return;if(o==null||t==null)return r;const i=this.toNumber(t);return i==null?r:o(r,i)}toValue(){return this.toNumber.apply(this,arguments)}getComparableValue(e,t){if(e==null)return;let o=e;return t!=null&&(o=this.get(t,e)),this.toValue(o)}renderValue(){}getInputString(e,t=this.valuePath){const o=this.toValue(this.get(t,e));return this._toInputString(o)}_computeRange(e){const t=e.base,o=Array.isArray(t)&&t.length&&t.map(r=>this.toValue(r)).filter(r=>r!=null);return!o||o.length<1?{min:null,max:null}:o.reduce((r,i)=>({min:this.toValue(i,r.min,Math.min),max:this.toValue(i,r.max,Math.max)}),{})}_computeLimit(e,t,o,r){if(!e)return;const i=t.base,l=this.toValue(o),a=this.toValue(r),u=l??this.toValue(e.min),s=a??this.toValue(e.max);return{fromMin:u,fromMax:this.toValue(s,this._fromInputString(i.max,"max"),Math.min),toMin:this.toValue(u,this._fromInputString(i.min,"min"),Math.max),toMax:s}}_computeFilterText(e){if(e.base==null)return;const t=e.base,o=this.toValue(t.min),r=this.toValue(t.max),i=[];return o!=null&&i.push(this.renderValue(o)),i.push(" - "),r!=null&&i.push(this.renderValue(r)),i.length>1?i.join(""):void 0}_computeTooltip(e,t){return t==null?e:`${e}: ${t}`}_fromInputString(e){return this.toValue(e)}_toInputString(e){const t=this.toValue(e);return t??null}_getDefaultFilter(){return{min:null,max:null}}_filterInputChanged(e,t){const o=e.path.split(".")[1];this.__inputChangePath=o||null,t&&(this._limitInputDebouncer=Gt.debounce(this._limitInputDebouncer,Wt.after(600),()=>{this._limitInput(),this._updateFilter()}),qt(this._limitInputDebouncer))}_clearFrom(){this.set("_filterInput.min",null),this._updateFilter()}_clearTo(){this.set("_filterInput.max",null),this._updateFilter()}_onBlur(){this._limitInput(),this._updateFilter()}_onKeyDown(e){const t=e.currentTarget,o=Array.from(t.parentElement.querySelectorAll("cosmoz-input")),r=o[o.findIndex(a=>a===t)+1],i=!r,l=o[0]===t;switch(e.keyCode){case 13:if(e.preventDefault(),!i)r.focus();else{const a=this._limitInput();this._updateFilter(),a||this._closeParent(t)}break;case 9:(i&&!e.shiftKey||l&&e.shiftKey)&&this._closeParent(t)}}_closeParent(e){const t=Ct(e);t&&t.close()}_onDropdownOpenedChanged({currentTarget:e,type:t,detail:o}){(t==="focus"||o?.value===!0)&&setTimeout(()=>{e.querySelector("cosmoz-input:focus")||e.querySelector("cosmoz-input")?.focus()},100)}_limitInput(){const e=this._filterInput,t=this.__inputChangePath,o=t?this._fromInputString(this.get(t,e),t):null;if(this.__inputChangePath=null,o==null)return!1;const r=this._limit,i=t==="min"?"from":"to",l=this.get(i+"Min",r),a=this.get(i+"Max",r),u=this.toValue(o,l,Math.max),s=this.toValue(u,a,Math.min);return this.getComparableValue(o)!==this.getComparableValue(s)?(this.set(["_filterInput",t],this._toInputString(s,t)),this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),!0):!1}_updateFilter(){const e=this._filterInput,t=this.filter,o=this._fromInputString(e.min,"min"),r=this._fromInputString(e.max,"max");this.getComparableValue(o)===this.getComparableValue(t,"min")&&this.getComparableValue(r)===this.getComparableValue(t,"max")||this.set("filter",{min:o,max:r})}_filterChanged(e){if(this._filterInput==null)return;const t=this._filterInput,o=e.base,r=this._fromInputString(t.min,"min"),i=this._fromInputString(t.max,"max");this.getComparableValue(r)===this.getComparableValue(o,"min")&&this.getComparableValue(i)===this.getComparableValue(o,"max")||(this.set("_filterInput",{min:this._toInputString(o.min),max:this._toInputString(o.max)}),this._limitInputDebouncer&&this._limitInputDebouncer.cancel())}hasFilter(){const e=this.filter;return e==null?!1:this.toValue(e.min)!=null||this.toValue(e.max)!=null}resetFilter(){this.filter=this._getDefaultFilter()}_updateLimits(e,t){e&&Promise.resolve(ye(e,{active:t})).then(o=>{const{min:r,max:i}=o??{};Object.assign(this,{...r!=null?{min:r}:{},...i!=null?{max:i}:{}})})}},Z=n=>class extends n{static get template(){return Ae`<div id="output" style="position:relative;"></div>`}connectedCallback(){super.connectedCallback(),Fe(this.render(),this.$.output)}_propertiesChanged(e,t,o){super._propertiesChanged(e,t,o),requestAnimationFrame(()=>Fe(this.render(),this.$.output))}},Ln=["label","value","slot","always-float-label"],Rn=yt`
	${Xt}

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
		/* TODO: Remove later on, for compat only */
		font-size: 13px;
	}

	:host(:not([always-float-label])) label {
		transform: none !important;
	}
`,Mn=n=>{const{label:e,value:t,slot:o}=n,r=d`<div
		id="input"
		part="input"
		role="button"
		class="control"
		slot=${o}
	>
		${t||""}
	</div>`;return Ut(r,{label:e})};customElements.define("cosmoz-omnitable-dropdown-input",T(Mn,{observedAttributes:Ln,styleSheets:[Rn]}));const ee=({title:n,tooltip:e="",filterText:t="",onOpenedChanged:o,content:r,horizontalAlign:i="left",externalValues:l=null})=>{const a={filtered:!!t,...l!=null&&{[`external-values-${l}`]:!0}};return d`
		<style>
			.dropdown {
				outline: none;
			}
			.dropdown:focus-within .input {
				--focused: focused;
			}

			.dropdown::part(button) {
				border: none;
				cursor: pointer;
				outline: none;
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
			class=${`${Kt(a)} dropdown`}
			title=${e||""}
		>
			<cosmoz-omnitable-dropdown-input
				class="input"
				slot="button"
				.label=${n}
				.placeholder=${n}
				.value=${t??""}
				text-align=${i}
				?always-float-label=${t?.length>0}
			></cosmoz-omnitable-dropdown-input>
			<div class="dropdown-content">${r}</div>
		</cosmoz-dropdown>
	`};class Nn extends Ne(Z(A)){static get properties(){return{currency:{type:String},autodetect:{type:Boolean,value:!1},rates:{type:Object},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:"_computeFilterText(filter.*, _formatters)"},headerFocused:{type:Boolean,value:!1}}}static get observers(){return["_valuesChanged(autodetect, currency, values)"]}render(){const e=t=>{this.headerFocused=t.type==="focus",this._onDropdownOpenedChanged(t)};return d`
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

			${ee({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:d`
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
		`}_valuesChanged(e,t,o){if(!Array.isArray(o)||o.length<1||!e&&t)return;const r=o.reduce((l,a)=>{if(a.currency){const u=a.currency;l[u]=(l[u]||0)+1}return l},{});let i=Object.keys(r)[0];Object.keys(r).reduce((l,a)=>{const u=Math.max(l,r[a]);return u===r[a]&&(i=a),u},0),this.set("currency",i)}toAmount(e,t,o){if(e==null||e==="")return;if(typeof e!="object"||e.currency==null||e.currency==="")return null;const r=this.toNumber(e.amount);if(r==null||Number.isNaN(r))return null;const i={currency:e.currency,amount:r};if(o==null||t==null)return i;const l=this.toAmount(t);if(l==null)return i;const a=this.rates||{},u=i.amount*(a[i.currency]||1),s=l.amount*(a[l.currency]||1);return this.toNumber(u,s,o)===u?i:l}toValue(){return this.toAmount.apply(this,arguments)}getComparableValue(e,t){const o=super.getComparableValue(e,t);if(o==null)return;const r=this.toNumber(o.amount),i=this.rates;return i==null?r:r*(i[o.currency]||1)}getString(e,t=this.valuePath){const o=this.toValue(this.get(t,e));return o===void 0?"":o===null?"Invalid value":this.renderValue(o)}getCurrency(e,t){const o=this.get(t,e);return o&&o.currency}getFormatter(e,t){const o=t||"",r=e+o||"",i=this._formatters=this._formatters||{};return i[r]||(i[r]=new Intl.NumberFormat(t||void 0,{style:"currency",currency:e})),i[r]}renderValue(e){const t=this.toAmount(e);return t==null?"":this.getFormatter(t.currency,this.locale).format(e.amount)}_amountValueChanged(e){const t=e.target,o=t.value,r=e.model.item,i=this.get(this.valuePath,r),l=Number(o),a={amount:l,currency:i.currency};this.set(this.valuePath,a,r),this._fireItemChangeEvent(r,this.valuePath,i,this.renderValue.bind(this))}_toInputString(e){const t=this.toValue(e);return t==null?null:this.toNumber(t.amount)}_toInputStringAmount(e){const t=this.rates;if(t==null)return this._toInputString(e);const o=this.toValue(e);return o==null?null:(this.toNumber(o.amount)*(t[o.currency]||1)/(t[this.currency]||1)).toFixed(2)}_fromInputString(e,t){const o=this.toNumber(e);if(o!=null)return this.toValue({amount:o,currency:t&&this.get(["filter",t,"currency"])||this.currency})}}customElements.define("cosmoz-omnitable-amount-range-input",Nn);const L=(n,e,t)=>{if(n==null||n==="")return;const o=typeof n=="number"?n:Number(n);if(!Number.isNaN(o))return o},_t=n=>{const e=L(n);return e==null?null:e.toString()},jn=({valuePath:n},e)=>{const t=L(n?S(e,n):e);return _t(t)},Qe=n=>{const e=_t(n);return e??""},W=({valuePath:n,maximumFractionDigits:e},t)=>{if(t==null)return;const o=n?S(t,n):t,r=L(o);if(r!=null)return e!==null?L(r.toFixed(e)):r},Pn=Jt((n,e,t)=>{const o={localeMatcher:"best fit"};return e!==null&&(o.minimumFractionDigits=e),t!==null&&(o.maximumFractionDigits=t),new Intl.NumberFormat(n||void 0,o)}),Ze=({valuePath:n,locale:e,minimumFractionDigits:t,maximumFractionDigits:o},r)=>{const i=n?S(r,n):r;if(i==null)return"";const l=L(i);return l==null?void 0:Pn(e,t,o).format(l)},Bn=(n,e)=>t=>{const o=W(n,t);if(o==null)return!1;const r=W({...n,valuePath:"min"},e),i=W({...n,valuePath:"max"},e);return!(o<(r??-1/0)||o>(i??1/0))},Y=(n={},e,t,o)=>{if(e==null||e==="")return;if(typeof e!="object"||e.currency==null||e.currency==="")return null;const r=L(e.amount);return r==null||Number.isNaN(r)?null:{currency:e.currency,amount:r}},q=({valuePath:n,rates:e},t)=>{if(t==null)return;let o=t;n!=null&&(o=S(t,n));const r=Y(e,o);if(r==null)return;const i=L(r.amount);return e==null||i==null?i:i*(e?.[r.currency]||1)},Hn=(n,e)=>t=>{const o=q(n,t);if(o===void 0)return!1;const r=q({...n,valuePath:"min"},e),i=q({...n,valuePath:"max"},e);return r===void 0||i===void 0?!0:!(o<r||o>i)},te={},Gn=(n,e)=>{const o=n+(e||"")||"";return te[o]||(te[o]=new Intl.NumberFormat(e||void 0,{style:"currency",currency:n})),te[o]},Wn=(n,e,t)=>{const o=Y(n,e);return o==null?"":Gn(o.currency,t).format(o.amount)},et=({valuePath:n,rates:e,locale:t},o)=>{const r=Y(e,n?S(o,n):void 0);return r===void 0?"":r===null?"Invalid value":Wn(e,r,t)},tt=n=>n?n.amount+n.currency:"",nt=n=>{if(n==null||n==="")return;const e=n.match(/^(-?[\d]+)([\D]+?)$/iu);if(!(!Array.isArray(e)||e.length<0))return{amount:Number(e[1]),currency:e[2]}},qn=({valuePath:n},e)=>n?S(e,n)?.currency:null,Xn=({valuePath:n},e)=>n?S(e,n)?.amount:void 0;class Un extends N(A){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},currency:{type:String,notify:!0},autodetect:{type:Boolean,value:!1,notify:!0},rates:{type:Object,notify:!0},width:{type:String,value:"70px"},cellClass:{type:String,value:"amount-cell align-right"},headerCellClass:{type:String,value:"amount-header-cell"}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const o=q({...e,valuePath:"min"},t),r=q({...e,valuePath:"max"},t);if(!(o==null&&r==null))return Hn(e,t)}getString(e,t){return et(e,t)}toXlsxValue(e,t){return et(e,t)}getComparableValue(e,t){return q(e,t)}serializeFilter({rates:e},t){if(t==null)return;const o=Y(e,t.min),r=Y(e,t.max);if(!(o==null&&r==null))return tt(o)+"~"+tt(r)}deserializeFilter(e,t){if(t==null||t==="")return null;const o=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(o)?{min:nt(o[1]),max:nt(o[2])}:null}renderCell(e,{item:t}){return d`<span>${e.getString(e,t)}</span>`}renderEditCell(e,{item:t},o){return d`<cosmoz-input
			no-label-float
			type="number"
			@change=${i=>o({amount:i.target.value,currency:S(t,e.valuePath)?.currency})}
			.value=${Xn(e,t)}
		>
			<div slot="suffix">${qn(e,t)}</div>
		</cosmoz-input>`}renderHeader({title:e,min:t,max:o,limits:r,locale:i,rates:l,currency:a,autoupdate:u,autodetect:s},{filter:c},m,h){return d`<cosmoz-omnitable-amount-range-input
			.title=${e}
			.filter=${c}
			.values=${h}
			.rates=${l}
			.min=${t}
			.max=${o}
			.limits=${r}
			.locale=${i}
			.currency=${a}
			.autoupdate=${u}
			.autodetect=${s}
			@filter-changed=${({detail:{value:p}})=>m(x=>({...x,filter:p}))}
			@header-focused-changed=${({detail:{value:p}})=>m(x=>({...x,headerFocused:p}))}
		></cosmoz-omnitable-amount-range-input>`}computeSource(e,t){return Q(e,t)}}customElements.define("cosmoz-omnitable-column-amount",Un);const Kn=(n,e)=>{if(!Array.isArray(n))return;const t=[];return n.reduce((o,r)=>Array.isArray(r)?(r.forEach(i=>{o.push(i)}),o):(o.push(r),o),[]).filter((o,r,i)=>{if(i.indexOf(o)!==r)return!1;if(e){const l=S(o,e);if(t.indexOf(l)!==-1)return!1;t.push(l)}return!0})},Jn=(n,e,t)=>{if(n==null)return[];if(Array.isArray(n)){const o=Kn(n,e);if(!o?.length)return o;const r=t??"label",i=l=>typeof l=="object"&&l!=null?String(S(l,r)??""):String(l??"");return o.sort((l,a)=>i(l).localeCompare(i(a)))}if(typeof n=="object"){const o=e??"id",r=t??"label";return Object.entries(n).map(([i,l])=>({[o]:i,[r]:l})).sort((i,l)=>String(i[r]??"").localeCompare(String(l[r]??"")))}return[]},je=(n,e,t)=>$e(e&&S(n,e)).map(he(t)),Pe=({valuePath:n,textProperty:e},t)=>je(t,n,e).filter(o=>o!=null).join(", "),Yn=Pe,Qn=({valueProperty:n,valuePath:e,emptyValue:t,emptyProperty:o},r)=>i=>{const l=he(n),a=$e(S(i,e));return r.some(u=>a.length===0&&he(o||n)(u)===t||a.some(s=>l(s)===l(u)))},Be=n=>e=>n(t=>({...t,filter:e})),He=n=>e=>n(t=>({...t,headerFocused:e})),Ge=n=>e=>n(t=>({...t,query:e})),kt=({emptyValue:n,emptyLabel:e,emptyProperty:t,textProperty:o,valueProperty:r},i)=>{const l=Jn(i,r,o);return!e||n===void 0||!o||!(t||r)||!l?l:[{[o]:e,[t||r]:n},...l]},Zn=(n,e)=>kt(n,St(e,n.valuePath)),We=n=>class extends n{static get properties(){return{textProperty:{type:String},valueProperty:{type:String},emptyLabel:{type:String},emptyValue:{type:Object},emptyProperty:{type:String}}}getConfig(e){return{emptyProperty:e.emptyProperty}}getString(e,t){return Pe(e,t)}toXlsxValue(e,t){return Yn(e,t)}getComparableValue({valuePath:e,valueProperty:t},o){const r=S(o,e);return t==null?r:$e(r).reduce((l,a)=>(l.push(S(a,t)),l),[]).sort().join(" ")}getFilterFn(e,t){if(!(!t||!Array.isArray(t)||t.length===0))return Qn(e,t)}serializeFilter(e,t){return t.length===0?null:JSON.stringify(t)}deserializeFilter(e,t){return JSON.parse(decodeURIComponent(t))}computeSource(e,t){return e.externalValues||typeof e.values=="function"?async(...o)=>kt(e,await Promise.resolve(ye(e.values,...o))):Zn(e,t)}},eo=({valuePath:n,textProperty:e,valueProperty:t},o)=>{const r=e?Yt(e):he(t),i=$e(n&&S(o,n)).map(r);return i.length>1?i.filter(Boolean).join(","):i[0]};class to extends We(N(A)){static get properties(){return{headerCellClass:{type:String,value:"autocomplete-header-cell"},minWidth:{type:String,value:"55px"},editMinWidth:{type:String,value:"55px"},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return d`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},o){return d`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>o(i.target.value)}
			.value=${U(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:o},r,i){return d`<cosmoz-autocomplete-ui
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
			.onChange=${Be(r)}
			.onFocus=${He(r)}
			.onText=${Ge(r)}
			>${D(e.loading,()=>d`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}getComparableValue(e,t){return eo(e,t)}}customElements.define("cosmoz-omnitable-column-autocomplete",to);const qe=(n,e)=>e.find(({value:t})=>n===t),no=(n,e,t)=>{const o=qe(e,t);return o?o.text:n},ot=(n,e,t,o)=>no(n,S(e,t),o),oo=({valuePath:n},e,t)=>qe(S(e,n),t),ro=n=>e=>{n(t=>({...t,filter:e?.[0]?.value??null}))},io=n=>e=>{n(t=>({...t,headerFocused:e}))},lo=n=>e=>{n(t=>({...t,query:e}))},ao=n=>e=>n(e?.[0]?.value),rt=({valuePath:n,trueLabel:e,falseLabel:t},o)=>S(o,n)?e:t,so=({valuePath:n},e)=>t=>S(t,n)===e,ne=vt((n,e)=>[{text:n,value:!0},{text:e,value:!1}]),uo=({valuePath:n,trueLabel:e,falseLabel:t},o)=>n?S(o,n)?e:t:"",co=(n,e)=>{try{return JSON.parse(e)}catch{return null}};class mo extends N(A){static get properties(){return{trueLabel:{type:String,value:"True"},falseLabel:{type:String,value:"False"},flex:{type:String,value:"0"},cellClass:{type:String,value:"boolean-cell"}}}getString(e,t){return rt(e,t)}renderCell(e,{item:t}){return rt(e,t)}renderEditCell(e,{item:t},o){const{trueLabel:r,falseLabel:i}=e;return d`<cosmoz-autocomplete
			no-label-float
			.title=${ot(e.title,t,e.valuePath,ne(r,i))}
			.source=${ne(r,i)}
			.textProperty=${"text"}
			.value=${oo(e,t,ne(r,i))}
			.onChange=${ao(o)}
			.limit=${1}
			>${D(e.loading,()=>d`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete
		>`}renderHeader(e,{filter:t,query:o},r,i){return d`<cosmoz-autocomplete-ui
			.label=${e.title}
			.title=${ot(e.title,t,e.valuePath,i)}
			.source=${i}
			.textProperty=${"text"}
			.value=${qe(t,i)}
			.text=${o}
			.onChange=${ro(r)}
			.onFocus=${io(r)}
			.onText=${lo(r)}
			.limit=${1}
			>${D(e.loading,()=>d`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}computeSource({trueLabel:e,falseLabel:t}){return ne(e,t)}getFilterFn(e,t){if(t!=null)return so(e,t)}toXlsxValue(e,t){return uo(e,t)}deserializeFilter(e,t){return co(e,t)}}customElements.define("cosmoz-omnitable-column-boolean",mo);const Xe=n=>class extends Ne(n){static get properties(){return{max:{type:Date,value:null},min:{type:Date,value:null},_filterText:{type:String,computed:"_computeFilterText(filter.*, formatter)"},formatter:{type:Object,computed:"_computeFormatter(locale)"}}}toDate(e,t,o){if(e==null||e==="")return;let r=e;if(r instanceof Date||(typeof e=="string"&&(r=this.getAbsoluteISOString(r)),r=new Date(r)),Number.isNaN(r.getTime()))return null;if(o==null||t==null)return r;const i=this.toDate(t);if(i==null)return r;const l=this.getComparableValue(r),a=this.getComparableValue(i);return o(l,a)===l?r:i}toValue(){return this.toDate.apply(this,arguments)}getComparableValue(e,t){const o=super.getComparableValue(e,t);if(o!=null)return this.toNumber(o.getTime())}getString(e,t=this.valuePath,o=this.formatter){const r=this.toValue(this.get(t,e));return r===void 0?"":r===null?"Invalid Date":this.renderValue(r,o)}getAbsoluteISOString(e){return e.length===19?e+this._getTimezoneString(e):e}_getTimezoneString(e){const t=-new Date(e).getTimezoneOffset()/60;return(t<0?"-":"+")+["0",Math.abs(t)].join("").substr(-2)+":00"}renderValue(e,t=this.formatter){if(t==null)return;const o=this.toValue(e);if(o!=null)return t.format(o)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0)}_toInputString(e){const t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(0,10)}_dateValueChanged(e){const t=e.currentTarget,o=t.value,r=e.model.item,i=this.get(this.valuePath,r),l=this._fromInputString(o);this.set(this.valuePath,l,r),this._fireItemChangeEvent(r,this.valuePath,i,this.renderValue.bind(this))}_toLocalISOString(e){return we(e)}};class po extends Xe(Z(A)){render(){const e=t=>{this.headerFocused=t.type==="focus"};return d`
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

			${ee({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:d`
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
		`}_fromInputString(e,t){const o=this.toDate(e);if(o!=null)return t==="min"&&o.setHours(0,0,0,0),t==="max"&&o.setHours(23,59,59),o}_filterInputChanged(e,t){const o=e.path.split(".")[1],r=o&&e.value;if(r&&r.match(/^0+/u)){this._limitInputDebouncer.cancel();return}super._filterInputChanged(e,t)}}customElements.define("cosmoz-omnitable-date-range-input",po);const go=n=>{const e=-new Date(n).getTimezoneOffset()/60;return(e<0?"-":"+")+["0",Math.abs(e)].join("").substr(-2)+":00"},Ue=n=>n.length===19?n+go(n):n,It=n=>{if(n==null||n==="")return;let e=n;return!(e instanceof Date)&&(typeof n=="string"&&(e=Ue(e)),e=Qt(e),!e)||Number.isNaN(e.getTime())?null:e},j=({valuePath:n},e)=>{if(e==null)return;let t=e;n!=null&&(t=S(e,n));const o=It(t);if(o!=null)return L(o.getTime())},V=(n,e,t)=>{const o=It(n);return o??null},Ke=(n,e)=>{if(e==null)return;const t=V(n);if(t!=null)return e.format(t)},oe={},ho=n=>{const e=n||"";return oe[e]||(oe[e]=new Intl.DateTimeFormat(n||void 0)),oe[e]},it=({valuePath:n,locale:e},t)=>{let o=S(t,n||"");return o===void 0?"":(o=V(o),o===null?"Invalid Date":Ke(o,ho(e)))},Ft=n=>{const e=V(n);if(e==null)return null;const t=we(e);return t==null?null:t.slice(0,10)},fo=({valuePath:n},e)=>Ft(S(e,n||"")),Ot=(n,e)=>{const t=V(n);if(t!=null)return t},lt=n=>{const e=Ft(n);return e??""},bo=({valuePath:n},e)=>{if(!n)return"";const t=V(S(e,n));if(!t)return"";const o=V(we(t));return o?(o.setHours(0,0,0,0),o):""},Dt=(n,e)=>t=>{const o=j(n,t);if(o==null)return!1;const r=j({...n,valuePath:"min"},e),i=j({...n,valuePath:"max"},e);return!(o<(r??-1/0)||o>(i??1/0))};class xo extends N(A){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"date-header-cell"},width:{type:String,value:"100px"},minWidth:{type:String,value:"82px"},flex:{type:String,value:"0"}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const o=j({...e,valuePath:"min"},t),r=j({...e,valuePath:"max"},t);if(!(o==null&&r==null))return Dt(e,t)}getString(e,t){return it(e,t)}toXlsxValue(e,t){return bo(e,t)}getComparableValue(e,t){return j(e,t)}serializeFilter(e,t){if(t==null)return;const o=V(t.min),r=V(t.max);if(!(o==null&&r==null))return lt(o)+"~"+lt(r)}deserializeFilter(e,t){if(t==null||t==="")return null;const o=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(o)?{min:V(o[1]),max:V(o[2])}:null}renderCell(e,{item:t}){return d`<div class="omnitable-cell-date">
			${it(e,t)}
		</div>`}renderEditCell(e,{item:t},o){return d`<cosmoz-input
			no-label-float
			type="date"
			@change=${i=>o(Ot(i.target.value))}
			.value=${fo(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:o,limits:r,locale:i},{filter:l},a,u){return d`<cosmoz-omnitable-date-range-input
			.title=${e}
			.filter=${l}
			.values=${u}
			.min=${t}
			.max=${o}
			.limits=${r}
			.locale=${i}
			@filter-changed=${({detail:{value:s}})=>a(c=>({...c,filter:s}))}
			@header-focused-changed=${({detail:{value:s}})=>a(c=>({...c,headerFocused:s}))}
		></cosmoz-omnitable-date-range-input>`}computeSource(e,t){return Q(e,t)}}customElements.define("cosmoz-omnitable-column-date",xo);class vo extends We(N(A)){renderCell({valuePath:e,textProperty:t},{item:o}){const r=je(o,e,t).map(i=>d`<li>${i}</li>`);return d`
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
		`}renderEditCell(){return"not implemented"}renderHeader(e,{filter:t,query:o},r,i){return d`<cosmoz-autocomplete-ui
			class="external-values-${e.externalValues}"
			.label=${e.title}
			.source=${i}
			.textProperty=${e.textProperty}
			.value=${t}
			.text=${o}
			.onChange=${Be(r)}
			.onFocus=${He(r)}
			.onText=${Ge(r)}
			>${D(e.loading,()=>d`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		> `}}customElements.define("cosmoz-omnitable-column-list-horizontal",vo);window.Cosmoz=window.Cosmoz||{};class at extends Zt(en(tn,A)){static get template(){return Ae`
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
		`}static get is(){return"cosmoz-omnitable-column-list-data"}static get properties(){return{items:{type:Array},_expanded:{type:Boolean,value:!1},_othersCount:{type:Number,computed:"_computeOthersCount(items)"}}}static get observers(){return["_itemsLengthChanged(items.length)"]}_itemsLengthChanged(){requestAnimationFrame(()=>this.dispatchEvent(new CustomEvent("expand",{bubbles:!0})))}_firstItem(e){if(e!=null&&e.length>0)return e[0]}_hideExpand(e,t){return e!==void 0&&e.length!==null?e.length<=2||t:!0}_hideCollapse(e,t){return e!==void 0&&e.length!==null?e.length<=2||!t:!0}_otherItems(e,t){if(e!=null&&(e.length<=2||t))return e.slice(1)}_computeOthersCount(e){if(e!=null)return e.length-1}_toggleExpand(e){this._expanded=!this._expanded,e.stopPropagation(),e.preventDefault()}}customElements.define(at.is,at);class yo extends We(N(A)){static get properties(){return{keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,textual:e.textual}}renderCell({valuePath:e,textProperty:t},{item:o}){return d`<cosmoz-omnitable-column-list-data
			.items=${je(o,e,t)}
		></cosmoz-omnitable-column-list-data>`}renderEditCell(e,{item:t},o){const r=i=>o(i.target.value.split(/,\s*/gu));return d`<cosmoz-input
			no-label-float
			type="text"
			.value=${Pe(e,t)}
			@change=${r}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:o},r,i){return d`<cosmoz-autocomplete-ui
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
			.onChange=${Be(r)}
			.onFocus=${He(r)}
			.onText=${Ge(r)}
			>${D(e.loading,()=>d`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}}customElements.define("cosmoz-omnitable-column-list",yo);class $o extends Ne(Z(A)){static get properties(){return{maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},formatter:{type:Object,computed:"_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)"},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:"_computeFilterText(filter.*, formatter)"},headerFocused:{type:Boolean,value:!1}}}render(){const e=t=>{this.headerFocused=t.type==="focus",this._onDropdownOpenedChanged(t)};return d`
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

			${ee({title:this.title,tooltip:this._tooltip,filterText:this._filterText,horizontalAlign:"right",externalValues:this.externalValues,onOpenedChanged:e,content:d`
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
		`}_computeFormatter(e,t,o){const r={localeMatcher:"best fit"};return t!==null&&(r.minimumFractionDigits=t),o!==null&&(r.maximumFractionDigits=o),new Intl.NumberFormat(e||void 0,r)}getComparableValue(e,t){if(e==null)return;let o=e;if(t!=null&&(o=this.get(t,e)),o=this.toValue(o),o==null)return;const r=this.maximumFractionDigits;return r!==null?this.toValue(o.toFixed(r)):o}renderValue(e,t=this.formatter){const o=this.toNumber(e);if(o!=null)return t.format(o)}}customElements.define("cosmoz-omnitable-number-range-input",$o);class wo extends N(A){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},cellClass:{type:String,value:"number-cell align-right"},width:{type:String,value:"30px"},minWidth:{type:String,value:"30px"},headerCellClass:{type:String,value:"number-header-cell"},maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const o=W({...e,valuePath:"min"},t),r=W({...e,valuePath:"max"},t);if(!(o==null&&r==null))return Bn(e,t)}getString(e,t){return Ze(e,t)}toXlsxValue({valuePath:e},t){return S(t,e)}getComparableValue(e,t){return W(e,t)}serializeFilter(e,t){if(t==null)return;const o=L(t.min),r=L(t.max);if(!(o==null&&r==null))return Qe(o)+"~"+Qe(r)}deserializeFilter(e,t){if(t==null||t==="")return null;const o=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(o)?{min:L(o[1]),max:L(o[2])}:null}renderCell(e,{item:t}){return d`<div class="omnitable-cell-number">
			${Ze(e,t)}
		</div>`}renderEditCell(e,{item:t},o){return d`<cosmoz-input
			no-label-float
			type="number"
			@change=${i=>o(i.target.value)}
			.value=${jn(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:o,limits:r,locale:i,maximumFractionDigits:l,minimumFractionDigits:a,autoupdate:u},{filter:s},c,m){return d`<cosmoz-omnitable-number-range-input
			.title=${e}
			.filter=${s}
			.values=${m}
			.min=${t}
			.max=${o}
			.limits=${r}
			.locale=${i}
			.maximumFractionDigits=${l}
			.minimumFractionDigsits=${a}
			.autoupdate=${u}
			@filter-changed=${({detail:{value:h}})=>c(p=>({...p,filter:h}))}
			@header-focused-changed=${({detail:{value:h}})=>c(p=>({...p,headerFocused:h}))}
		></cosmoz-omnitable-number-range-input>`}computeSource(e,t){return Q(e,t)}}customElements.define("cosmoz-omnitable-column-number",wo);const Vt="1970-01-01",H=(n,e,t)=>{const o=typeof n=="string"&&n.length>3&&n.length<=9?Ue(Vt+"T"+n):n;return V(o)},re={},zo=n=>{const e=n||"";if(re[e])return re[e];const t={hour:"numeric",minute:"numeric",second:"numeric"};return re[e]=new Intl.DateTimeFormat(n||void 0,t),re[e]},ge=({valuePath:n,locale:e},t)=>{const o=H(S(t,n||""));return o===void 0?"":o===null?"Invalid Date":Ke(o,zo(e))},So=(n,e)=>n.valuePath?ge(n,e):"",Co=n=>{const e=H(n);if(e==null)return null;const t=we(e);return t&&t.slice(11,19)},X=({valuePath:n},e)=>{if(e==null)return;const t=Co(n==null?e:S(e,n));if(t==null)return;const o=H(Ue(Vt+"T"+t));return o==null?o:L(o.getTime())},_o=(n,e)=>t=>{const o=X(n,t);if(o==null)return!1;const r=X({...n,valuePath:"min"},e),i=X({...n,valuePath:"max"},e);return r==null||i==null?!1:!(o<r||o>i)},st=n=>{const e=H(n);return e==null?"":e.toISOString().slice(11,19).replace(/:/gu,".")},ut=n=>{if(!(n==null||n===""))return H(typeof n=="string"?n.replace(/\./gu,":")+"Z":n)};class ko extends Xe(Z(A)){render(){const e=t=>{this.headerFocused=t.type==="focus"};return d`
			<cosmoz-clear-button
				@click=${()=>this.resetFilter()}
				?visible=${this.hasFilter()}
			></cosmoz-clear-button>

			${ee({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:d`
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
		`}get _fixedDate(){return"1970-01-01"}toDate(e,t,o){const r=typeof e=="string"&&e.length>3&&e.length<=9?this.getAbsoluteISOString(this._fixedDate+"T"+e):e;return super.toDate(r,t,o)}_toInputString(e){const t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(11,19)}getComparableValue(e,t){if(e==null)return;let o=this._toInputString(t==null?e:this.get(t,e));if(o!=null&&(o=this.toValue(this.getAbsoluteISOString(this._fixedDate+"T"+o)),o!=null))return this.toNumber(o.getTime())}_timeValueChanged(e){const t=e.target,o=t.value,r=e.model.item,i=this.toDate(r.date),l=this.toDate(i!=null?i.toISOString().slice(0,10)+"T"+o:o),a=u=>u;l==null&&(this.set(this.valuePath,l,r),this._fireItemChangeEvent(r,this.valuePath,i,a.bind(this)))}_computeFormatter(e){const t={hour:"numeric",minute:"numeric",second:"numeric"};return new Intl.DateTimeFormat(e||void 0,t)}}customElements.define("cosmoz-omnitable-time-range-input",ko);class Io extends N(A){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"time-header-cell"},minWidth:{type:String,value:"63px"},width:{type:String,value:"210px"},flex:{type:String,value:"0"},filterStep:{type:String,value:"1"}}}getFilterFn(e,t){const o=X({...e,valuePath:"min"},t),r=X({...e,valuePath:"max"},t);if(!(o==null&&r==null))return _o(e,t)}getString(e,t){return ge(e,t)}toXlsxValue(e,t){return So(e,t)}getComparableValue(e,t){return X(e,t)}serializeFilter(e,t){if(t==null)return;const o=H(t.min),r=H(t.max);if(!(o==null&&r==null))return st(o)+"~"+st(r)}deserializeFilter(e,t){if(t==null||t==="")return null;const o=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(o)?{min:ut(o[1]),max:ut(o[2])}:null}renderCell(e,{item:t}){return ge(e,t)}renderEditCell(e,{item:t},o){return d`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>o(i.target.value)}
			.value=${ge(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:o,locale:r,filterStep:i},{filter:l},a,u){return d`<cosmoz-omnitable-time-range-input
			.title=${e}
			.filter=${l}
			.values=${u}
			.min=${t}
			.max=${o}
			.locale=${r}
			.filterStep=${i}
			@filter-changed=${({detail:{value:s}})=>a(c=>({...c,filter:s}))}
			@header-focused-changed=${({detail:{value:s}})=>a(c=>({...c,headerFocused:s}))}
		></cosmoz-omnitable-time-range-input>`}computeSource(e,t){return Q(e,t)}}customElements.define("cosmoz-omnitable-column-time",Io);const ie={},Fo=n=>{const e=n||"";if(ie[e])return ie[e];const t={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return ie[e]=new Intl.DateTimeFormat(n||void 0,t),ie[e]},Ce=({valuePath:n,locale:e},t)=>{const o=V(S(t,n||""));return o===void 0?"":o===null?"Invalid Date":Ke(o,Fo(e))},Oo=({valuePath:n},e)=>n?S(e,n):"",ct=n=>{const e=V(n);return e==null?"":e.toISOString().slice(0,19).replace(/:/gu,".")},dt=n=>{if(!(n==null||n==="")&&typeof n=="string")return V(n.replace(/\./gu,":")+"Z")};class Do extends Xe(Z(A)){render(){const e=t=>{this.headerFocused=t.type==="focus"};return d`
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

			${ee({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:d`
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
		`}_toInputString(e){const t=this.toValue(e);if(t!=null)return this._toLocalISOString(t).slice(0,19)}_computeFormatter(e){const t={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return new Intl.DateTimeFormat(e||void 0,t)}}customElements.define("cosmoz-omnitable-datetime-range-input",Do);class mt extends N(A){static get is(){return"cosmoz-omnitable-column-datetime"}static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"datetime-header-cell"},width:{type:String,value:"210px"},minWidth:{type:String,value:"128px"},flex:{type:String,value:"0"},filterStep:{type:Number,value:1}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const o=j({...e,valuePath:"min"},t),r=j({...e,valuePath:"max"},t);if(!(o==null&&r==null))return Dt(e,t)}getString(e,t){return Ce(e,t)}toXlsxValue(e,t){return Oo(e,t)}getComparableValue(e,t){return j(e,t)}serializeFilter(e,t){if(t==null)return;const o=V(t.min),r=V(t.max);if(!(o==null&&r==null))return ct(o)+"~"+ct(r)}deserializeFilter(e,t){if(t==null||t==="")return null;const o=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(o)?{min:dt(o[1]),max:dt(o[2])}:null}renderCell(e,{item:t}){return Ce(e,t)}renderEditCell(e,{item:t},o){return d`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>o(Ot(i.target.value))}
			.value=${Ce(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:o,limits:r,locale:i,filterStep:l},{filter:a},u,s){return d`<cosmoz-omnitable-datetime-range-input
			.title=${e}
			.filter=${a}
			.values=${s}
			.min=${t}
			.max=${o}
			.limits=${r}
			.locale=${i}
			.filterStep=${l}
			@filter-changed=${({detail:{value:c}})=>u(m=>({...m,filter:c}))}
			@header-focused-changed=${({detail:{value:c}})=>u(m=>({...m,headerFocused:c}))}
		></cosmoz-omnitable-datetime-range-input>`}computeSource(e,t){return Q(e,t)}}customElements.define(mt.is,mt);const Vo=({column:n,item:e,selected:t,folded:o,group:r})=>n?(n.renderGroup??n.renderCell)(n,{item:e,selected:t,folded:o,group:r}):bt;customElements.define("cosmoz-omnitable-group-row",T(Vo,{useShadowDOM:!1}));const Ao=n=>{const{column:e}=n;return E(()=>{let t=0,o=0;const r=a=>{n.dispatchEvent(new CustomEvent("column-resize",{bubbles:!0,composed:!0,detail:{newWidth:Math.ceil(o+a.pageX-t),column:e}}))},i=()=>{document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",i)},l=a=>{t=a.pageX,o=n.previousElementSibling.getBoundingClientRect().width,document.addEventListener("pointermove",r),document.addEventListener("pointerup",i)};return n.addEventListener("pointerdown",l),()=>n.removeEventListener("pointerdown",l)},[e]),bt};customElements.define("cosmoz-omnitable-resize-nub",T(Ao));const Eo=d`<svg
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
</svg>`,To=d`
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
`,_e=d` <svg
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
</svg>`,Lo=d`<svg
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
</svg> `,At=({column:n,on:e,descending:t,setOn:o,setDescending:r})=>{const{name:i,title:l}=n??{};return d`<button
		class="sg"
		title=${fe(l)}
		data-on=${fe(i===e&&(t?"desc":"asc")||void 0)}
		@click=${a=>{const s=a.currentTarget?.dataset.on;s||(o(i),r(!1)),s==="asc"?r(!0):s==="desc"&&(o(),r(!1))}}
	>
		<span>${l}</span> ${Lo}
	</button>`},Et=({columns:n,...e})=>n?.map(t=>At({column:t,...e})),Ro=()=>d`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:n,groupOn:e,setGroupOn:t,groupOnDescending:o,setGroupOnDescending:r}={})=>Et({columns:n?.filter?.(i=>i.groupOn),on:e,setOn:t,descending:o,setDescending:r})}
	>
	</sort-and-group-consumer>
`,Mo=()=>d`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:n,sortOn:e,setSortOn:t,descending:o,setDescending:r}={})=>Et({columns:n?.filter?.(i=>i.sortOn&&!i.noSort),on:e,setOn:t,descending:o,setDescending:r})}
	>
	</sort-and-group-consumer>
`,Tt=n=>(e,t,o=ln)=>{const r=an(),i=new URLSearchParams(r.hash.replace("#",""));return n(e,t,o,i),"#!"+Object.assign(r,{hash:i}).href.replace(location.origin,"")},Lt=n=>n==null||n==="",No=Tt((n,e,t,o)=>Lt(t(e))?o.delete(n):o.set(n,t(e))),jo=Tt((n,e,t,o)=>Object.entries(e).map(t).forEach(([r,i])=>Lt(i)?o.delete(n+r):o.set(n+r,i))),J=(n,e,{suffix:t="",read:o,write:r,multi:i}={})=>{const[l,a]=i?[jo,nn]:[No,on],u=I(()=>e!=null&&a(e+t,o)!=null,[]),[s,c]=M(()=>e==null?n:a(e+t,o)??n),m=w(h=>c(p=>{const x=ye(h,p);return e!=null&&rn(l(e+t,x,r),null,{notify:!1}),x}),[e,t,l,r]);return E(()=>{e!=null&&(u||n!=null&&m(n))},[n,e,u,m]),[s,m]},Po=n=>[!0,"true",1,"yes","on"].includes(n),le=n=>n===""||(n==null?void 0:Po(n)),ae=(n,e,t)=>w(o=>{n(o),t(r=>({...r,[e]:o}))},[n,e,t]),Bo=(n,e,t,o,r)=>{const[i,l]=J(t.sortOn,e,{suffix:"-sortOn"}),[a,u]=J(le(t.descending),e,{suffix:"-descending",read:le}),[s,c]=J(t.groupOn,e,{suffix:"-groupOn"}),[m,h]=J(le(t.groupOnDescending),e,{suffix:"-groupOnDescending",read:le}),p=I(()=>n.find(g=>g.name===i),[n,i]),x=I(()=>n.find(g=>g.name===s),[n,s]),b={groupOn:s,setGroupOn:ae(c,"groupOn",o),groupOnDescending:m,setGroupOnDescending:ae(h,"groupOnDescending",o),sortOn:i,setSortOn:ae(l,"sortOn",o),descending:a,setDescending:ae(u,"descending",o),columns:n},$=I(()=>b,Object.values(b)),F=w(g=>{l(g.sortOn),c(g.groupOn),u(g.descending),h(g.groupOnDescending)},[]);return E(()=>{r.current=F},[]),{...$,sortAndGroup:$,groupOnColumn:x,sortOnColumn:p}},Je=$t();customElements.define("sort-and-group-provider",Je.Provider);customElements.define("sort-and-group-consumer",T(({render:n})=>n(Ee(Je)),{useShadowDOM:!1}));const Ho=({data:n,columns:e,groupOnColumn:t,filters:o,setFilterState:r,sortAndGroup:{sortOn:i,setSortOn:l,descending:a,setDescending:u}={}})=>wt(e,s=>s.name,s=>[d`<div
				class="cell ${s.headerCellClass} header-cell"
				part="cell header-cell cell-${s.name} header-cell-${s.name}"
				?hidden="${s===t}"
				title="${s.headerTitleFn(s)}"
				name="${s.name}"
			>
				${s.renderHeader(s,o[s.name]??{},c=>r(s.name,c),s.source(s,n))}
				${D(!s.noSort,()=>At({on:i,setOn:l,descending:a,setDescending:u,column:s}))}
			</div>`,d`<cosmoz-omnitable-resize-nub
				.column="${s}"
				name="${s.name}"
			></cosmoz-omnitable-resize-nub>`]),Go=({columns:n,settingsConfig:e,hideSelectAll:t,...o})=>{const r=Ee(Je);return d`
		${D(n,i=>Ho({columns:i,sortAndGroup:r,...o}))}
		${D(!t,()=>d` <cosmoz-omnitable-settings
					.config=${e}
					part="settings"
				></cosmoz-omnitable-settings>`)}
	`};customElements.define("cosmoz-omnitable-header-row",T(Go,{useShadowDOM:!1}));const Wo=K`
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
`,qo=({column:n})=>d`
	<div class="label" title="${n.title}" part="item-expand-label">
		${n.title}
	</div>
	<div class="value" part="item-expand-value">
		<slot></slot>
	</div>
`;customElements.define("cosmoz-omnitable-item-expand-line",T(qo,{styleSheets:[Te(Wo)]}));const Xo=({columns:n,item:e,selected:t,expanded:o,groupOnColumn:r})=>sn(n,i=>d`<cosmoz-omnitable-item-expand-line
				.column=${i}
				?hidden=${i===r}
				exportparts="item-expand-label, item-expand-value"
				>${i.renderCell(i,{item:e,selected:t,expanded:o})}</cosmoz-omnitable-item-expand-line
			>`);customElements.define("cosmoz-omnitable-item-expand",T(Xo,{useShadowDOM:!1}));const Uo=(n,e,t)=>n.editable?n.renderEditCell(n,e,t(n,e.item)):n.renderCell(n,e),Ko=({columns:n,groupOnColumn:e,item:t,index:o,selected:r,expanded:i,onItemChange:l})=>wt(n,a=>a.name,a=>d`<div
				class="cell itemRow-cell ${a.cellClass??""}"
				part="cell itemRow-cell cell-${a.name} itemRow-cell-${a.name}"
				?hidden="${a===e}"
				?editable="${a.editable}"
				title="${a.cellTitleFn(a,t)}"
				name="${a.name}"
			>
				${Uo(a,{item:t,index:o,selected:r,expanded:i},l)}
			</div>`);customElements.define("cosmoz-omnitable-item-row",T(Ko,{useShadowDOM:!1}));const Rt=K`
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
`,Jo=K`
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
`,pt=n=>{const e=n.replace(/"/gu,'""');return e.search(/("|,|\n)/gu)>=0?'"'+e+'"':n},Yo=(n,e,t)=>{const i=n.map(a=>pt(a.title)).join(";")+`
`,l=e.map(a=>n.map(u=>{const s=u.getString(u,a);return s==null?"":pt(String(s))}).join(";")+`
`);l.unshift(i),zt(new File(l,t,{type:"text/csv;charset=utf-8"}))},Qo=(n,e)=>{const t=n.map(r=>r.title),o=e.map(r=>n.map(i=>{const l=i.toXlsxValue(i,r);return l??""}));return o.unshift(t),o},Zo=(n,e,t,o)=>{const r=Qo(n,e),i=new un(t).addSheetFromData(r,o).generate();zt(new File([i],t,{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}))},er=({columns:n,selectedItems:e,csvFilename:t,xlsxFilename:o,xlsxSheetname:r,topPlacement:i})=>d`<cosmoz-bottom-bar
		id="bottomBar"
		?active=${!Le(e.length)}
		part="bottomBar"
		exportparts="bar: bottomBar-bar, info: bottomBar-info, buttons: bottomBar-buttons"
	>
		<slot name="info" slot="info">
			${_("{count} selected item",{count:e.length})}
		</slot>
		<slot name="actions" id="actions"></slot>
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
				${_("Save selected items as CSV")}
			</button>
			<button
				@click=${()=>Zo(n,e,o,r)}
			>
				${_("Save selected items as XLSX")}
			</button>
			<slot name="download-menu"></slot>
		</cosmoz-dropdown-menu>
	</cosmoz-bottom-bar>`,tr=({allSelected:n,onAllCheckboxChange:e,sortAndGroup:t,dataIsValid:o,data:r,columns:i,filters:l,groupOnColumn:a,setFilterState:u,settingsConfig:s,hideSelectAll:c})=>d`<sort-and-group-provider .value=${t}>
		<div class="header" id="header" part="header">
			${D(!c,()=>d`<input
						class="checkbox all"
						type="checkbox"
						.checked=${n}
						@input=${e}
						?disabled=${!o}
						part="all"
					/>`)}
			${D(c,()=>d` <cosmoz-omnitable-settings
						.newLayout="${!0}"
						.config=${s}
					></cosmoz-omnitable-settings>`)}

			<cosmoz-omnitable-header-row
				part="headerRow"
				.data=${r}
				.columns=${i}
				.filters=${l}
				.groupOnColumn=${a}
				.setFilterState=${u}
				.settingsConfig=${s}
				.hideSelectAll=${c}
			></cosmoz-omnitable-header-row>
		</div>
	</sort-and-group-provider>`,nr=yt`
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
`,or=({settingsConfig:n})=>{const{columns:e,collapsed:t}=n,o=e.filter(r=>!t.some(i=>i.name===r.name));return d`<div class="skeleton">
		${Array.from({length:5},()=>d`<div>
					<div class="checkbox"></div>
					${o.map(r=>d`<div
								class="cell"
								part=${`cell-${r.name}`}
								name=${r.name}
							></div>`)}
				</div>`)}
	</div>`};customElements.define("cosmoz-omnitable-skeleton",T(or,{styleSheets:[nr]}));const rr=({slot:n,title:e,className:t,width:o="24",height:r="24",styles:i}={})=>d`
  <svg
    slot=${fe(n)}
    class=${`delete-icon ${t??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${o}
    height=${r}
    style=${fe(i)}
  >
    ${D(e,()=>Bt`<title>${e}</title>`)}
    <path
      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
    />
  </svg>
`,ir=(n,e)=>{const{settingsConfig:t}=n,{processedItems:o,dataIsValid:r,filterIsTooStrict:i,loading:l,displayEmptyGroups:a,compareItemsFn:u,setSelectedItems:s,renderItem:c,renderGroup:m,error:h}=e;return d`${D(!l&&!r&&!h,()=>d`<div class="tableContent-empty">
					<slot name="empty-set-message">
						${Ye({width:"96px",height:"96px",styles:"margin-right: 24px; fill: currentColor;"})}
						<div class="tableContent-empty-message">
							<h3>${_("Working set empty")}</h3>
							<p>${_("No data to display")}</p>
						</div>
					</slot>
				</div>`)}
		${D(i,()=>d`<div class="tableContent-empty">
					${Ye({width:"96px",height:"96px",styles:"margin-right: 24px; fill: currentColor;"})}
					<div>
						<h3>${_("Filter too strict")}</h3>
						<p>${_("No matches for selection")}</p>
					</div>
				</div>`)}
		${D(l&&!o.length,()=>d`<div class="tableContent-empty overlay">
					<cosmoz-omnitable-skeleton
						.settingsConfig=${t}
					></cosmoz-omnitable-skeleton>
				</div>`)}
		${D(l&&o.length,()=>d`<div class="tableContent-empty overlay spinner">
					<cz-spinner></cz-spinner>
				</div>`)}
		${D(h,()=>d`<div class="tableContent-empty overlay">
					${cn({width:"96px",height:"96px",styles:"margin-right: 24px; fill: currentColor;"})}
					<div class="tableContent-empty-message">
						<h3>${_("Error loading data")}</h3>
						<p>${h.message}</p>
					</div>
				</div>`)}
		<div class="tableContent-scroller" id="scroller" part="scroller">
			<cosmoz-grouped-list
				id="groupedList"
				.data=${o}
				@selected-items-changed=${p=>s(p.detail.value)}
				.displayEmptyGroups=${a}
				.compareItemsFn=${u}
				.renderItem=${c}
				.renderGroup=${m}
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
`,ar=K`
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
		border: none;
		cursor: pointer;
		outline: none;
		padding: 0;
		background: transparent;
		color: inherit;
		width: 40px;
		height: 40px;
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
`,se=n=>{const e=parseInt(n,10);return isFinite(e)?e:void 0},sr=n=>{const{config:e}=n,{settings:t,setSettings:o,collapsed:r}=e,i=Re({collapsed:r,settings:t.columns,setSettings:w(l=>o(a=>({...a,columns:l})),[o])});return{...e,onDown:w(l=>{l.target.closest(".pull")&&(i.handle=l.currentTarget)},[i]),onDragStart:w(l=>{const{target:a}=l,u=se(a.dataset.index);if(!i.handle?.contains(a)||u==null)return l.preventDefault();i.handle=null,l.dataTransfer.effectAllowed="move",l.dataTransfer.setData("omnitable/sort-index",u),l.dataTransfer.setData("text/plain",u),setTimeout(()=>a.classList.add("drag"),0),a.addEventListener("dragend",s=>s.target.classList.remove("drag"),{once:!0})},[i]),onDragEnter:w(l=>{const a=l.currentTarget;a===l.target&&(l.preventDefault(),l.dataTransfer.dropEffect="move",a.classList.add("dragover"))},[]),onDragOver:w(l=>{l.preventDefault(),l.currentTarget.classList.add("dragover")},[]),onDragLeave:w(l=>{const a=l.currentTarget;a.contains(l.relatedTarget)||a.classList.remove("dragover")},[]),onDrop:w(l=>{const a=se(l.dataTransfer.getData("omnitable/sort-index")),u=se(l.currentTarget.dataset.index),{settings:s,setSettings:c}=i;l.currentTarget.classList.remove("dragover"),l.preventDefault();const m=s.slice();m.splice(u+(a>=u?0:-1),0,m.splice(a,1)[0]),c(m)},[i]),onToggle:w(l=>{const{settings:a,setSettings:u}=i,s=a.map(m=>({...m,disabled:m.disabled||i.collapsed?.some(h=>h.name===m.name)})),c=se(l.target.closest("[data-index]")?.dataset.index);s.splice(c,1,{...a[c],disabled:!l.target.checked,priority:l.target.checked?a.reduce((m,h)=>Math.max(m,h.priority),0)+1:a[c].priority}),u(s)},[i])}},ur=[mn({apply({availableHeight:n,elements:e}){Object.assign(e.floating.style,{maxHeight:`${Math.max(0,n)}px`})}}),...dn],cr=({onDragStart:n,onDragEnter:e,onDragOver:t,onDragLeave:o,onDrop:r,onDown:i,onToggle:l,collapsed:a,filters:u})=>(s,c)=>{const m=!!a?.find(p=>p.name===s.name),h=!s.disabled&&!m;return d` <div
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
			<button class="pull">${To}</button>
			<label class="title" ?has-filter=${!Le(u[s.name]?.filter)}
				>${s.title}</label
			>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${h}
				@click=${l}
				.indeterminate=${m}
			/>
		</div>`},dr=n=>{const{settings:e,settingsId:t,onSave:o,onReset:r,hasChanges:i,opened:l,setOpened:a,...u}=sr(n);return d` <div class="headline">
			${_("Sort and filter")}
			<button
				class="close"
				@click=${s=>{const c=s.currentTarget;c?.focus(),c?.blur()}}
			>
				${Eo}
			</button>
		</div>

		<div class="contents">
			<div
				class="heading"
				?data-opened=${l.columns}
				@click=${()=>a(s=>({...s,columns:!s.columns}))}
				part="columns columns-heading"
			>
				${_("Columns")} ${_e}
			</div>
			<cosmoz-collapse
				?opened="${l.columns}"
				part="columns columns-content"
			>
				<div class="list">${e.columns?.map(cr(u))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${l.sort}
				@click=${()=>a(s=>({...s,sort:!s.sort}))}
			>
				${_("Sort on")} ${_e}
			</div>
			<cosmoz-collapse ?opened=${l.sort}> ${Mo()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${l.group}
				@click=${()=>a(s=>({...s,group:!s.group}))}
				part="groups groups-heading"
			>
				${_("Group on")} ${_e}
			</div>
			<cosmoz-collapse ?opened=${l.group} part="groups groups-heading"
				>${Ro()}</cosmoz-collapse
			>
		</div>

		${D(t,()=>d`<div class="buttons">
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
				</div>`)}`};customElements.define("cosmoz-omnitable-settings-ui",T(dr,{styleSheets:[Te(lr)]}));const mr=({config:n,newLayout:e})=>d`
	<cosmoz-dropdown
		.placement="${e?"bottom-start":"bottom-end"}"
		.middleware="${ur}"
	>
		<div title="${_("Sort and filter")}" slot="button">
			${D(e,()=>d`<div class="headerDots">...</div>`,()=>d` <svg viewBox="0 0 24 24" width="24" fill="currentColor">
						<circle cx="10" cy="18" r="2"></circle>
						<circle cx="10" cy="12" r="2"></circle>
						<circle cx="10" cy="6" r="2"></circle>
					</svg>`)}
			${D(n?.badge,()=>d`<div class="badge"></div>`)}
		</div>
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${n}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`;customElements.define("cosmoz-omnitable-settings",T(mr,{styleSheets:[Te(ar)]}));const be=["sortOn","descending","groupOn","groupOnDescending"],ue=n=>e=>typeof e=="object"&&e!==null&&"name"in e&&e.name===n,pr=(n=[],e=[],t=[])=>{const o=e.filter(l=>n.some(ue(l.name))),r=n.filter(l=>l.name!=null&&!e.some(ue(l.name))&&!t.some(ue(l.name))),i=t.filter(l=>!e.some(ue(l.name)));return[...o,...i.flatMap(l=>{const a=n.find(u=>u.name===l.name);return a?{...l,title:a.title??l.title??"",minWidth:parseInt(a.minWidth??"0",10)}:[]}),...r.map(l=>{const{name:a,title:u,priority:s,minWidth:c,width:m,flex:h}=l;return{name:a??"",title:u??"",priority:s??0,minWidth:parseInt(c??"0",10),width:parseInt(m??"0",10),flex:parseInt(h??"0",10)}})]},gr=(n,e)=>({...e,...Oe(Array.from(be))(n),columns:n.columns?.map(Oe(["name","priority","width","flex","disabled"]))}),hr=({columns:n,settings:e,savedSettings:t,initial:o})=>({...Object.fromEntries(be.flatMap(i=>o?.[i]!=null?[[i,o[i]]]:[])),...t?Oe(Array.from(be))(t):{},...e,columns:pr(n,e?.columns,t?.columns)}),fr=({prefix:n="omnitable-"}={})=>({write:async(t,o)=>{const r=n+t;try{o?localStorage.setItem(r,JSON.stringify(o)):localStorage.removeItem(r)}catch(i){console.error(i)}},read:async t=>{if(t)try{const o=localStorage.getItem(n+t);return o==null?void 0:JSON.parse(o)}catch(o){console.error(o)}}}),br=$t(fr),xr=()=>{const n=Ee(br);return I(()=>n(),[n])},vr=(n,e,t,o)=>{const[r,i]=M(),{read:l,write:a}=xr();return E(async()=>{n&&i(await l(n))},[n,l]),{settingsId:n,savedSettings:r,onSave:w(async()=>{if(!n)return;const u=gr(e,r);await a(n,u),t(),i(u)},[e,r]),onReset:w(async u=>{t(),u.shiftKey&&(await a(n),i()),o?.()},[o]),hasChanges:e!=null}},yr=({settingsId:n,host:e})=>{const t=I(()=>Object.fromEntries(be.map(b=>[b,e[b]])),[]),o=Me(),r=w(()=>{o.current?.(t)},[t]),[i,l]=M(),[a,u]=M({columns:!0,sort:!0}),{savedSettings:s,...c}=vr(n,i,l,r),{enabledColumns:m}=e,h=En(e,{enabledColumns:m}),p=I(()=>hr({columns:h,settings:i,savedSettings:s,initial:t}),[h,i,s]),x=I(()=>p.columns.map(b=>h.find($=>$.name===b.name)).filter(Boolean),[h,...p.columns.map(b=>b.name)]);return{...c,opened:a,setOpened:u,settings:p,columns:x,setSettings:l,resetRef:o}},gt=n=>Number.isFinite(n)?n:0,$r=(n,e)=>{const t=[];let[o,r]=n.reduce(([c,m],{width:h,flex:p})=>[c+h,m+p],[0,0]),i=e-o,l=gt(i/r),a=0,u=0,s=0;for(let c=0;c<n.length;c++){const{width:m,minWidth:h,flex:p}=n[c],x=i>=0?l*p:m*i/o;if(h>m+x){a+=m,u+=h,s+=p,t[c]=h;continue}if(p===0){a+=m,u+=m,t[c]=m;continue}}o-=a,i=e-u-o,r-=s,l=gt(i/r);for(let c=0;c<n.length;c++){if(t[c]!=null)continue;const{width:m,flex:h}=n[c],p=i>=0?l*h:m*i/o;t[c]=m+p}return t},xe=Symbol("index"),wr=(n,e)=>{if(typeof n.findLastIndex=="function")return n.findLastIndex(e);for(let t=n.length-1;t>=0;t--)if(e(n[t],t,n))return t;return-1},zr=(n,e)=>{const t=wr(n,l=>l!=null&&l>0),o=(l,a)=>`.cell[name="${l}"], cosmoz-omnitable-skeleton::part(cell-${l}){width: ${Math.floor(a)}px;padding: 0 min(3px, ${a/2}px)}`,r=l=>`cosmoz-omnitable-resize-nub[name="${l}"]{display:none}`,i=l=>`cosmoz-omnitable-resize-nub[name="${l}"], .cell[name="${l}"]{display:none}`;return e.map((l,a)=>{const u=n[a];if(u==null||u===0)return i(l.name);const s=o(l.name,u);return a===t?`${s}
${r(l.name)}`:s}).join(`
`)},Mt=(n,e,t)=>{const o=n.filter(a=>!a.hidden),r=o.reduce((a,{width:u})=>a+u,0);if(o.length>1&&r>e)return Mt(o.slice(1),e,t);const i=o.reduce(([a,u],s,c)=>[Math.max(a,s.index),s.index>a?c:u],[-1,-1])[1];return i!==-1&&(o[i].flex=1),$r(o,e).reduce((a,u,s)=>(a[o[s].index]=u,a),new Array(t).fill(void 0))},Sr=(n,e)=>n.length===0?".cell {display: none;}":zr(n,e),Cr=({host:n,canvasWidth:e,layout:t,setSettings:o})=>{const r=Me();r.current=i=>o(l=>{const a=l.columns,{detail:{newWidth:u,column:s}}=i,c=a.findIndex(p=>p.name===s.name),m=[],h=a.reduce((p,x)=>Math.max(p,x.priority),-1/0);for(let p=0;p<t.length;p++)if(m[p]={...a[p]},p<c&&t[p]&&(m[p].width=t[p],m[p].flex=0,m[p].priority=h),p===c){const x=t.reduce((b,$,F)=>F<c&&$?b-$:b,e);m[p].width=Math.min(x,Math.max(u,a[p].minWidth)),m[p].flex=0,m[p].priority=h}return{...l,columns:m}}),E(()=>{const i=l=>r.current?.(l);return n.addEventListener("column-resize",i),()=>n.removeEventListener("column-resize",i)},[])},_r=20,kr=44,Ir=24,Nt=_r+kr+Ir,Fr=(n,e)=>E(()=>{const t=([r])=>{r.contentRect?.width!==0&&requestAnimationFrame(()=>e(r.contentRect?.width-Nt))},o=new ResizeObserver(t);return o.observe(n),()=>o.unobserve(n)},[]),Or=n=>{const[e,t]=M(()=>n.getBoundingClientRect().width-Nt);return Fr(n,t),e},Dr=(n,e)=>{const t=I(()=>{let o=!1,r;const i=()=>{if(!o)return;r=requestAnimationFrame(i),n()&&(o=!1)};return{start:()=>{o=!0,cancelAnimationFrame(r),r=requestAnimationFrame(i)},stop:()=>{o=!1,cancelAnimationFrame(r)}}},[]);E(()=>{t.start()},e),E(()=>()=>t.stop(),[])},Vr=(n=0,e=0)=>Math.abs(n-e)<.1,Ar=(n,e=1.9,t=pn)=>{const o=Re({target:n}),r=w(()=>{if(!o.tween)return o.tween=o.target,t(o.tween),!0;if(o.target.every((i,l)=>o.tween[l]===i))return t(o.tween),!0;o.tween=o.target.map((i,l)=>Vr(o.tween[l],i)?i:(o.tween[l]??0)+((i??0)-(o.tween[l]??0))/e||0),t(o.tween)},[]);Dr(r,[n])},Er=({canvasWidth:n,groupOnColumn:e,config:t,miniColumn:o})=>I(()=>{if(!Array.isArray(t)||n==null||n===0)return[];const r=t.map((i,l)=>({minWidth:i.minWidth,width:i.width,flex:i.flex,priority:i.priority,name:i.name,index:l,hidden:i.name===e?.name||i.disabled})).map(i=>o?{...i,hidden:o.name!==i.name}:i).sort(({index:i,priority:l},{index:a,priority:u})=>l===u?a-i:l-u);return Mt(r,n,r.length)},[n,e,t]),Tr=({host:n,canvasWidth:e,columns:t})=>{const o=n.miniBreakpoint??480,r=I(()=>e<=o,[e,o]),i=I(()=>r?t?.filter(s=>s.mini!=null).sort((s,c)=>(s.mini??0)-(c.mini??0)):[],[t,r]),[l,...a]=i??[],u=!!l;return E(()=>{n.toggleAttribute("mini",u)},[u]),{isMini:u&&r,miniColumn:l,miniColumns:a}},Lr=n=>{const e=I(()=>new CSSStyleSheet,[]);return E(()=>{n.shadowRoot.adoptedStyleSheets=[...n.shadowRoot.adoptedStyleSheets,e]},[]),e},Rr=({host:n,columns:e,settings:t,setSettings:o,resizeSpeedFactor:r,sortAndGroupOptions:i})=>{const l=Or(n),{isMini:a,miniColumn:u,miniColumns:s}=Tr({host:n,canvasWidth:l,columns:e}),{groupOnColumn:c}=i,m=Er({canvasWidth:l,groupOnColumn:c,miniColumn:u,config:t.columns}),h=Lr(n),p=I(()=>t.columns.reduce((b,$,F)=>m[F]!=null||$.name===c?.name||$.disabled?b:[...b,e.find(g=>g.name===$.name)],[]),[e,t,m]),x=Re({columns:t.columns});return Ar(m,r,b=>{const $=Sr(b,x.columns);h.replace($)}),Cr({host:n,canvasWidth:l,layout:m,setSettings:b=>o(b(t))}),{isMini:a,collapsedColumns:p,miniColumns:s}},Mr=({host:n,...e})=>{const{csvFilename:t="omnitable.csv",xlsxFilename:o="omnitable.xlsx",xlsxSheetname:r="Omnitable",topPlacement:i="top-end"}=n;return{csvFilename:t,xlsxFilename:o,xlsxSheetname:r,topPlacement:i,...e}},Nr=({host:n,selectedItems:e,data:t,sortAndGroupOptions:o,collapsedColumns:r,settings:i,filterFunctions:l,settingS:a,filters:u,...s})=>{const c=t&&t.length>0&&e.length===t.length,m=b=>{b.target.checked?n.shadowRoot.querySelector("#groupedList").selectAll():n.shadowRoot.querySelector("#groupedList").deselectAll()},{groupOnColumn:h}=o,p=I(()=>[h,...r,...i.columns.filter(b=>b.disabled)].some(b=>b&&Object.keys(l).includes(b.name)),[l,i,r]),x=I(()=>({...a,collapsed:r,badge:p,filters:u}),[a,r,p,u]);return E(()=>{const b=n.shadowRoot.querySelector("#tableContent"),$=new ResizeObserver(F=>requestAnimationFrame(()=>{n.style.setProperty("--ot-height",F[0]?.contentRect.height+"px")}));return $.observe(b),()=>$.unobserve(b)},[]),{allSelected:c,onAllCheckboxChange:m,data:t,settingsConfig:x,filters:u,groupOnColumn:h,sortAndGroup:o.sortAndGroup,...s}},jt=d`
	<svg
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
	>
		<g>
			<path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
		</g>
	</svg>
`,jr=n=>n?"groupRow groupRow-folded":"groupRow",Pr=({item:n,index:e})=>t=>D(t?.length>0,()=>d`
				<div class="itemRow-minis" part="item-minis">
					${t.map(o=>d`<div
								class="itemRow-mini"
								part="item-mini item-mini-${o.name}"
							>
								${(o.renderMini??o.renderCell)(o,{item:n,index:e})}
							</div>`)}
				</div>
			`),Br=({columns:n,collapsedColumns:e,miniColumns:t,onItemClick:o,onCheckboxChange:r,dataIsValid:i,groupOnColumn:l,onItemChange:a,rowPartFn:u})=>(s,c,{selected:m,expanded:h,toggleCollapse:p})=>d`
		<div
			?selected=${m}
			part="${["itemRow",`itemRow-${s[xe]}`,u?.(s,c)].filter(Boolean).join(" ")}"
			.dataIndex=${s[xe]}
			.dataItem=${s}
			class="itemRow"
			@click=${o}
		>
			<div class="itemRow-wrapper" part="itemRow-wrapper">
				<input
					class="checkbox"
					type="checkbox"
					part="checkbox"
					.checked=${m}
					.dataItem=${s}
					@input=${r}
					?disabled=${!i}
				/>
				<cosmoz-omnitable-item-row
					part="itemRow-inner"
					.columns=${n}
					.index=${c}
					.selected=${m}
					.expanded=${h}
					.item=${s}
					.groupOnColumn=${l}
					.onItemChange=${a}
				>
				</cosmoz-omnitable-item-row>
				<button
					class="expand"
					?hidden="${Le(e.length)}"
					?aria-expanded="${h}"
					@click="${p}"
				>
					${jt}
				</button>
			</div>
			${Pr({item:s,index:c})(t)}
		</div>
		<cosmoz-omnitable-item-expand
			.columns=${e}
			.item=${s}
			.index=${c}
			?selected=${m}
			?expanded=${h}
			.groupOnColumn=${l}
			part="item-expand"
		>
		</cosmoz-omnitable-item-expand>
	`,Hr=({onCheckboxChange:n,dataIsValid:e,groupOnColumn:t})=>(o,r,{selected:i,folded:l,toggleFold:a})=>d` <div
			class="${jr(l)}"
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
					.folded=${l}
					.group=${o}
				></cosmoz-omnitable-group-row>
			</h3>
			<div class="groupRow-badge">${o.items.length}</div>
			<button class="expand" ?aria-expanded="${l}" @click=${a}>
				${jt}
			</button>
		</div>`,Gr=({host:n,error:e,dataIsValid:t,processedItems:o,columns:r,collapsedColumns:i,miniColumns:l,sortAndGroupOptions:a,rowPartFn:u,...s})=>{const{loading:c=!1,displayEmptyGroups:m=!1,compareItemsFn:h}=n,p=Me({shiftKey:!1,ctrlKey:!1}),x=w(g=>{const k=g.target.dataItem,f=g.target.checked;p.current.shiftKey?n.shadowRoot.querySelector("#groupedList").toggleSelectTo(k,f):p.current.ctrlKey?(g.target.checked=!0,n.shadowRoot.querySelector("#groupedList").selectOnly(k)):n.shadowRoot.querySelector("#groupedList").toggleSelect(k,f),g.preventDefault(),g.stopPropagation()},[]);E(()=>{const g=({shiftKey:k,ctrlKey:f})=>{p.current={shiftKey:k,ctrlKey:f}};return window.addEventListener("keydown",g),window.addEventListener("keyup",g),()=>{window.removeEventListener("keydown",g),window.removeEventListener("keyup",g)}},[]);const b=w(g=>{const k=g.composedPath();k.slice(0,k.indexOf(g.currentTarget)).find(y=>y.matches?.("a, .checkbox, .expand"))||n.dispatchEvent(new window.CustomEvent("omnitable-item-click",{bubbles:!0,composed:!0,detail:{item:g.currentTarget.dataItem,index:g.currentTarget.dataIndex}}))},[]),{groupOnColumn:$}=a,F=w((g,k)=>f=>Tn(n,g,k,f),[]);return{...s,processedItems:o,dataIsValid:t,filterIsTooStrict:t&&o.length<1,loading:c,compareItemsFn:h,displayEmptyGroups:m,error:e,renderItem:I(()=>Br({columns:r,collapsedColumns:i,miniColumns:l,onItemClick:b,onCheckboxChange:x,dataIsValid:t,groupOnColumn:$,onItemChange:F,rowPartFn:u}),[r,i,b,x,t,$,F,u]),renderGroup:I(()=>Hr({onCheckboxChange:x,dataIsValid:t,groupOnColumn:$}),[x,t,$])}},Wr=(n,e)=>{if(n===e)return 0;if(n==null)return-1;if(e==null)return 1;const t=typeof n,o=typeof e;return t==="object"&&o==="object"?n.toString()<e.toString()?-1:1:t==="number"&&o==="number"?n-e:t==="string"&&o==="string"?n<e?-1:1:t==="boolean"&&o==="boolean"?n?-1:1:(console.warn("unsupported sort",t,n,o,e),0)},ke=(n,e)=>(t,o)=>Wr(n(t),n(o))*(e?-1:1),qr=n=>n.replace(/([a-z0-9])([A-Z])/gu,"$1-$2").toLowerCase(),ht=(n,e)=>{!n||!e||Object.entries(e).forEach(([t,o])=>{n[B].__ownChange=!0,n[B][t]=o,n[B].__ownChange=!1,n[B].dispatchEvent(new CustomEvent(`${qr(t)}-changed`,{bubbles:!0,detail:{value:o}}))})},Ie=(n,e)=>Object.assign(n,{[xe]:e}),ce=Symbol("unparsed"),Xr=({data:n,columns:e,hashParam:t,sortAndGroupOptions:o,noLocalSort:r,noLocalFilter:i})=>{const{groupOnColumn:l,groupOnDescending:a,sortOnColumn:u,descending:s}=o,c=w(([f,y])=>{const v=e.find(({name:z})=>z===f);return v==null?[f,void 0]:[f,y.filter&&v.serializeFilter(v,y.filter)]},[e]),m=w(([f,y])=>{const v=e.find(({name:C})=>C===f);if(v==null)return[f,{[ce]:y}];const z={filter:v.deserializeFilter(v,y)};return ht(v,z),[f,z]},[e]),[h,p]=J({},t,{multi:!0,suffix:"-filter--",write:c,read:m}),x=w((f,y)=>p(v=>{const z=ye(y,v[f]);return ht(e.find(C=>C.name===f),z),{...v,[f]:{...v[f],...z}}}),[e,p]),b=I(()=>Object.values(h).map(f=>f.filter),[h]),$=I(()=>Object.fromEntries(e.map(f=>[f.name,!f.noLocalFilter&&f.getFilterFn(f,h[f.name]?.filter)]).filter(([,f])=>!!f)),[e,...b]),F=I(()=>!Array.isArray(n)||n.length===0?[]:Object.entries($).length===0||i?n.slice():n.filter(f=>Object.values($).every(y=>y(f))),[n,$,i]),g=I(()=>{if(!r&&!l&&u!=null&&u.sortOn!=null)return F.slice().sort(ke(f=>u.getComparableValue({...u,valuePath:u.sortOn},f),s));if(l!=null&&l.groupOn!=null){const f=F.reduce((y,v)=>{const z=l.getComparableValue({...l,valuePath:l.groupOn},v);if(z===void 0)return y;let C=y.find(R=>R.id===z);return C?(C.items.push(v),y):(C={id:z,name:z,items:[v]},[...y,C])},[]);return f.sort(ke(y=>l.getComparableValue({...l,valuePath:l.groupOn},y.items[0]),a)),!u||r?f:f.filter(y=>Array.isArray(y.items)).map(y=>(y.items.sort(ke(v=>u.getComparableValue({...u,valuePath:u.sortOn},v),s)),y))}return F},[F,l,a,u,s,r]),k=I(()=>{let f=0,y=0;const v=[];return g.forEach(z=>{if(Array.isArray(z.items)){Ie(z,y++),z.items.forEach(C=>{Ie(C,f++),v.push(C)});return}return Ie(z,f++),v.push(z)},[]),v},[g]);return E(()=>{p(f=>Object.values(f).some(v=>v[ce]!=null)?Object.fromEntries(Object.entries(f).map(([v,z])=>z[ce]==null?[v,z]:m([v,z[ce]]))):f)},[m]),{processedItems:g,visibleData:k,filters:h,filterFunctions:$,setFilterState:x}},Ur=n=>{const e=o=>{const r=n.data.indexOf(o);if(r<0)return null;const i=n.data.splice(r,1);if(n.data=n.data.slice(),Array.isArray(i)&&i.length>0)return i[0]},t=(o,r)=>{n.data.splice(o,1,r),n.data=n.data.slice()};return{removeItem:e,removeItems(o){const r=[];for(let i=o.length-1;i>=0;i-=1){const l=n.removeItem(o[i]);l!=null&&r.push(l)}return r},replaceItemAtIndex:t,replaceItem(o,r){const i=n.data.indexOf(o);if(i>-1)return t(i,r)},selectItem(o){n.shadowRoot.querySelector("#groupedList").select(o)},selectAll(){n.shadowRoot.querySelector("#groupedList").selectAll()},deselectAll(){n.shadowRoot.querySelector("#groupedList").deselectAll()},deselectItem(o){n.shadowRoot.querySelector("#groupedList").deselect(o)},isItemSelected(o){return n.shadowRoot.querySelector("#groupedList").isItemSelected(o)}}},Kr=({host:n,visibleData:e,filters:t,...o})=>{const{setFilterState:r}=o,i=I(()=>Ur(n),[]);De(o,Object.values(o)),De(i,Object.values(i)),E(()=>{const a=u=>r(u.detail.name,s=>({...s,...u.detail.state}));return n.addEventListener("legacy-filter-changed",a),()=>n.removeEventListener("legacy-filter-changed",a)},[]),P("visibleData",e),P("sortedFilteredGroupedItems",o.sortedFilteredGroupedItems),P("selectedItems",o.selectedItems),P("sortOn",o.sortOn),P("descending",o.descending),P("isMini",o.isMini);const l=I(()=>Object.fromEntries(Object.entries(t).filter(([,{filter:a}])=>a!==void 0).map(([a,{filter:u}])=>[a,u])),[t]);P("filters",l,Object.values(l))},Jr=n=>{const{hashParam:e,settingsId:t,data:o,resizeSpeedFactor:r,noLocal:i,noLocalSort:l=i,noLocalFilter:a=i,error:u,rowPartFn:s}=n,c=yr({settingsId:t,host:n}),{settings:m,setSettings:h,columns:p,resetRef:x}=c,b=Bo(p,e,m,h,x),{processedItems:$,visibleData:F,filters:g,setFilterState:k,filterFunctions:f}=Xr({data:o,columns:p,hashParam:e,sortAndGroupOptions:b,noLocalSort:l,noLocalFilter:a}),{isMini:y,collapsedColumns:v,miniColumns:z}=Rr({host:n,columns:p,settings:m,setSettings:h,resizeSpeedFactor:r,sortAndGroupOptions:b}),C=o&&Array.isArray(o)&&o.length>0,[R,G]=M([]);return Kr({host:n,visibleData:F,sortedFilteredGroupedItems:$,columns:p,filters:g,setFilterState:k,selectedItems:R,isMini:y,...b}),{header:Nr({host:n,selectedItems:R,sortAndGroupOptions:b,dataIsValid:C,data:o,columns:p,filters:g,collapsedColumns:v,settings:m,filterFunctions:f,settingS:c,setFilterState:k,hideSelectAll:n.hideSelectAll===!0}),list:Gr({host:n,error:u,dataIsValid:C,processedItems:$,setSelectedItems:G,columns:p,collapsedColumns:v,miniColumns:z,sortAndGroupOptions:b,rowPartFn:s}),footer:Mr({host:n,selectedItems:R,columns:p})}};customElements.define("cosmoz-grouped-list-row",class extends HTMLElement{get item(){return this._item}set item(e){this._item=e,this._render()}get index(){return this._index}set index(e){this._index=e,this._render()}get renderFn(){return this._renderFn}set renderFn(e){this._renderFn=e,this._render()}_render(){this._item==null||this._index==null||this._renderFn==null||Fe(this._renderFn(this._item,this._index),this)}});const Yr={group:Symbol("group")},ze=(n,e)=>(e.has(n)||e.set(n,{}),e.get(n)),Qr=(n,e)=>!!ze(n,e).expanded,Zr=(n,e)=>!!ze(n,e).folded,Ve=n=>n?n.items instanceof Array:!1,ei=n=>{if(!Array.isArray(n)||n.length===0)return;const e=Array.isArray(n[0]?.items);if(!n.every(o=>Array.isArray(o.items)===e))throw new Error("Data must be homogeneous.")},ti=(n,e,t)=>Array.isArray(n)?(ei(n),n.reduce((r,i)=>{const l=i;return l.items?l.items.length?ze(i,t).folded?r.concat(i):r.concat(i,l.items.map(a=>Object.assign(a,{[Yr.group]:i}))):e?r.concat(i):r:r.concat(i)},[])):void 0,ni=(n,...e)=>typeof n=="function"?n(...e):n,oi=(n,e)=>n===e,ri=()=>{const[n,e]=M(()=>[new WeakMap]);return{setItemState:w((o,r)=>e(([i])=>{const l=ze(o,i);return Object.assign(l,ni(r,l)),[i]}),[]),state:n[0],signal:n}},ii=()=>{const{setItemState:n,state:e,signal:t}=ri(),o=w((i,l)=>{Ve(i)&&n(i,a=>({folded:l!==void 0?l:!a.folded}))},[]),r=w((i,l)=>{Ve(i)||n(i,a=>({expanded:l!==void 0?!l:!a.expanded}))},[]);return{state:e,signal:t,toggleFold:o,toggleCollapse:r}},li=({initial:n,compareItemsFn:e,data:t,flatData:o})=>{const[r,i]=M(n),[l,a]=M(),u=w(g=>r.includes(g),[r]),s=w(g=>g?.items?.every(u)??!1,[u]),c=w(g=>u(g)||s(g),[u,s]),m=w(g=>{const f=g.items??[g];i(y=>[...y,...f.filter(v=>!y.includes(v))]),a(g)},[]),h=w(g=>{const f=g.items??[g];i(y=>y.filter(v=>!f.includes(v))),a(g)},[]),p=w(g=>{i(g.items?.slice()||[g]),a(g)},[]),x=w(()=>{i(t.flatMap(g=>g.items||g)),a(void 0)},[t]),b=w(()=>{i([]),a(void 0)},[]),$=w((g,k=!c(g))=>k?m(g):h(g),[c]),F=w((g,k)=>{if(!o)return;const f=l?o.findIndex(z=>e(z,l)):-1;if(f<0)return $(g,k);const[y,v]=[f,o.indexOf(g)].sort((z,C)=>z-C);o.slice(y,v+1).forEach((z,C,R)=>{C>0&&C<R.length-1&&Ve(z)||$(z,k)}),a(g)},[o,e,$]);return E(()=>i(g=>g.length>0&&o?o.filter(k=>g.find(f=>e(k,f))):g),[o]),{selectedItems:r,isItemSelected:u,isGroupSelected:s,isSelected:c,select:m,deselect:h,selectOnly:p,selectAll:x,deselectAll:b,toggleSelect:$,toggleSelectTo:F}},ai={host:{position:"relative",display:"flex",flexDirection:"column"}},si=n=>{const{data:e,renderItem:t,renderGroup:o,displayEmptyGroups:r,compareItemsFn:i=oi}=n,{toggleFold:l,toggleCollapse:a,state:u,signal:s}=ii(),c=I(()=>ti(e,r,u),[e,r,s]),{selectedItems:m,isItemSelected:h,isGroupSelected:p,isSelected:x,select:b,deselect:$,selectOnly:F,selectAll:g,deselectAll:k,toggleSelect:f,toggleSelectTo:y}=li({initial:[],compareItemsFn:i,data:e,flatData:c}),v=w((C,R)=>Array.isArray(C.items)?o(C,R,{selected:p(C),folded:Zr(C,u),toggleSelect:G=>f(C,typeof G=="boolean"?G:void 0),toggleFold:()=>l(C)}):t(C,R,{selected:m.includes(C),expanded:Qr(C,u),toggleSelect:G=>f(C,typeof G=="boolean"?G:void 0),toggleCollapse:()=>a(C)}),[t,o,m,f,s]);xt(()=>{Object.assign(n.style,ai.host)},[]),P("selectedItems",m);const z={toggleFold:l,toggleCollapse:a,isItemSelected:h,isGroupSelected:p,isSelected:x,select:b,deselect:$,selectOnly:F,selectAll:g,deselectAll:k,toggleSelect:f,toggleSelectTo:y};return De(z,Object.values(z)),{renderRow:v,flatData:c}},ui=({renderRow:n,flatData:e})=>gn({items:e,renderItem:(t,o)=>d`<cosmoz-grouped-list-row
				.item=${t}
				.index=${o}
				.renderFn=${n}
			></cosmoz-grouped-list-row>`}),ci=n=>ui(si(n));customElements.define("cosmoz-grouped-list",T(ci,{useShadowDOM:!1}));const di=n=>window.ShadyCSS?.ApplyShim?.transformCssText?.(n)||n,mi=n=>{const{header:e,list:t,footer:o}=Jr(n);return d`
		<style>
			${hn([],()=>di(Jo))}
		</style>

		<div class="mainContainer">
			${tr(e)}
			<div class="tableContent" id="tableContent">
				${ir(e,t)}
			</div>
			${er(o)}
		</div>

		<div id="columns">
			<slot id="columnsSlot"></slot>
		</div>
	`};customElements.define("cosmoz-omnitable",class extends T(mi,{observedAttributes:["hash-param","sort-on","group-on","descending","group-on-descending","hide-select-all","settings-id","no-local","no-local-sort","no-local-filter","loading","mini-breakpoint"]}){connectedCallback(){super.connectedCallback(),Se(this,"selectedItems",[]),Se(this,"visibleData",[]),Se(this,"sortedFilteredGroupedItems",[])}});const ve=`
	<slot name="actions" slot="actions"></slot>
`;d(Object.assign([ve],{raw:[ve]}));Ae(Object.assign([ve],{raw:[ve]}));const pi=()=>d`<style>
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
</style>`;customElements.define("cz-spinner",T(pi));const ft=(n,e,t)=>{let o=String(n),r=-1;const i=t,l=e-o.length;for(;++r<l;)o=i+o;return o},O=(n,e)=>Math.floor(Math.random()*(e-n+1))+n,gi=()=>"2015-"+ft(O(1,12),2,"0")+"-"+ft(O(1,28),2,"0"),hi=()=>{const n=O(0,20);return n===1?new Date(2015,3,2,14,26,10,299):n===2?new Date(2016,4,2,10,9,10,444):n===3?new Date(2016,4,2,10,9,10,443):n===4?new Date(2016,4,2,10,9,10,442):new Date(O(2014,2017),O(1,12),O(1,28),O(0,23),O(0,59),O(0,59),O(0,999))},Pt=(n,e,t)=>{const o=O(n,e),r=[],i=["Lorem ipsum dolor sit amet","Nunc tristique","Curabitur vestibulum","Cras laoreet","Himenaeos","maximus diam purus at mauris"],l=["SEK","USD","EUR","AUD"];let a=0;for(let u=0;u<o;u+=1){const s="Group "+u,c=u*2+1;for(let m=0;m<c;m+=1){const h=[],p=[],x=a%10;for(let b=0;b<x;b+=1)h.push("Item "+b),p.push({name:"Item "+b,value:"item-value-"+b});r.push({id:a,name:s+" item "+m,value:O(0,1e4),bool:O(0,100)>50,object:{value:O(0,1e4),label:"Random string "+O(1,t)},sub:{subProp:i[a%i.length]},randomString:"Random string "+O(1,t),randomString2:"Random string 2 "+O(1,t),randomString3:"Random string 3 "+O(1,t),randomString4:"Random string 4 "+O(1,t),date:hi(),dateJSON:gi(),amount:{amount:O(10,100),currency:l[a%l.length]},group:s,list:h,objectList:p}),a+=1}}return r},yi={title:"Components/ComsmozOmnitableFullDemo",component:"cosmoz-omnitable",tags:["autodocs"],args:{loading:!1,locale:"en",sortOn:"",groupOn:"",descending:!1,groupOnDescending:!1,hashParam:"",settingsId:"",selectedItems:[],disabled:!1},argTypes:{loading:{control:"boolean",description:"Show loading state",table:{defaultValue:{summary:"false"}}},locale:{control:"select",options:["en","fr","sv"],description:"Language locale",table:{defaultValue:{summary:"en"}}},selectedItems:{control:"object",description:"Show selected items"},data:{control:"object",description:"Show specified items"},sortOn:{control:"text",description:'Column property name to sort on (e.g., "amount", "date", "id")'},groupOn:{control:"text",description:'Column property name to group on (e.g., "amount", "date", "id")'},descending:{control:"boolean",description:"Sort on descending"},groupOnDescending:{control:"boolean",description:"Group on descending"},hashParam:{control:"text",description:"Hash parameter for URL state management"},settingsId:{control:"text",description:"ID for storing table settings"},disabled:{control:"boolean",description:"Hide one column",table:{defaultValue:{summary:"false"}}}},render:n=>d`
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
                    ${rr({styles:"vertical-align: middle; fill: currentColor;"})}
                    <span>Remove items</span>
                </paper-button>
            </cosmoz-omnitable>
        `,play:async()=>{console.log("Current hash:",window.location.hash)}},de={args:{data:Pt(10,10,10)}},me={args:{data:Pt(2,2,10)}},pe={args:{data:[]}};de.parameters={...de.parameters,docs:{...de.parameters?.docs,source:{originalSource:`{
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
}`,...pe.parameters?.docs?.source}}};const $i=["TableWithLargeData","TableWithSmallData","TableWithNoData"];export{de as TableWithLargeData,pe as TableWithNoData,me as TableWithSmallData,$i as __namedExportsOrder,yi as default};
