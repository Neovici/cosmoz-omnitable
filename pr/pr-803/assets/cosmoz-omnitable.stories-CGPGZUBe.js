import{x as d,B as ke,E as xt}from"./iframe-Db7EivoB.js";import{t as K,c as O,g as w,P as I,u as T,a as yt,m as vt,s as Nt,D as Bt,b as Gt,e as Ht,i as $e,h as Oe,d as jt,f as $t,r as Wt,j as Ut,k as A,l as Kt,n as Ce,p as he,o as k,q as Jt,v as we,w as Xt,x as Qt,y as Yt,T as Zt,z as M,A as Ye,B as ei,C as ti,E as ii,F as $,G as ai,H as ni,I as Ct,J as Le,K as F,L as wt,M as De,N as oi,O as St,Q as ri,R as Te,S as Ze,U as li,V as Ve,W as si,X as ui,Y as Ee,Z as Pe,_ as ci,$ as Ie,a0 as R,a1 as di,a2 as ze,a3 as mi}from"./cosmoz-collapse-CPNjaNG7.js";import"./preload-helper-PPVm8Dsz.js";const pi=K`
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
`,gi=()=>d`
	<style>
		${pi}
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
`;customElements.define("cosmoz-clear-button",O(gi));const U=({valuePath:i},e)=>w(e,i),bi=U,fi=U,hi=({valuePath:i},e)=>t=>{const a=w(t,i);return a==null?!1:a.toString().toLowerCase().trim().includes(e.toLowerCase().trim())},xi=(i,e)=>e===""||e==null?null:e,V=i=>class extends i{static get properties(){return{isOmnitableColumn:{type:Boolean,value:!0},title:{type:String},valuePath:{type:String,notify:!0},values:{type:Array,notify:!0},filter:{type:Object},noLocalFilter:{type:Boolean},disabled:{type:Boolean,value:!1,notify:!0},editable:{type:Boolean,notify:!0},loading:{type:Boolean,value:!1,notify:!0},externalValues:{type:Boolean,value:!1,notify:!0},name:{type:String},sortOn:{type:String},groupOn:{type:String},noSort:{type:Boolean,value:!1},width:{type:String,value:"75px"},minWidth:{type:String,value:"40px"},flex:{type:String,value:"1"},cellClass:{type:String,value:"default-cell"},headerCellClass:{type:String,value:"default-header-cell"},priority:{type:Number,value:0},hidden:{type:Boolean,notify:!0},preferredDropdownHorizontalAlign:{type:String,value:"right"},renderHeader:{type:Function},renderCell:{type:Function},renderEditCell:{type:Function},renderGroup:{type:Function},mini:{type:Number,value:null},renderMini:{type:Function}}}static get observers(){return["notifyFilterChange(filter)"]}notifyFilterChange(e){this.__ownChange||this.dispatchEvent(new CustomEvent("legacy-filter-changed",{detail:{name:this.name,state:this.legacyFilterToState(e)},bubbles:!0}))}legacyFilterToState(e){return{filter:e}}getFilterFn(){}getString(e,t){return U(e,t)}toXlsxValue(e,t){return bi(e,t)}cellTitleFn(e,t){return this.getString(e,t)}headerTitleFn(e){return e.title}serializeFilter(e,t){return xi(e,t)}deserializeFilter(e,t){return t==null?null:typeof t=="string"?window.decodeURIComponent(t):t}getComparableValue(e,t){return fi(e,t)}computeSource(e,t){return t}_propertiesChanged(e,t,a){super._propertiesChanged(e,t,a),this.dispatchEvent(new CustomEvent("cosmoz-column-prop-changed",{bubbles:!0}))}},yi=i=>e=>i(t=>{if(t.inputValue===void 0&&e.target.value==="")return t;clearTimeout(t.t);const a=setTimeout(()=>i(n=>({...n,filter:n.inputValue})),1e3);return{...t,inputValue:e.target.value,t:a}}),vi=i=>()=>i(e=>({...e,filter:e.inputValue})),$i=i=>e=>{e.keyCode===13&&(e.preventDefault(),i(t=>({...t,filter:t.inputValue})))},Ci=i=>e=>i(t=>({...t,headerFocused:e.detail.value})),wi=i=>()=>i(e=>({...e,filter:null,inputValue:null})),Si=i=>i!=null&&i!=="";class zi extends V(I){static get properties(){return{minWidth:{type:String,value:"55px"},editMinWidth:{type:String,value:"55px"},inputValue:{type:Object,notify:!0}}}getFilterFn(e,t){if(!(t==null||t===""))return hi(e,t)}renderCell(e,{item:t}){return d`<span class="default-column">${U(e,t)}</span>`}renderEditCell(e,{item:t},a){return d`<cosmoz-input
			no-label-float
			type="text"
			@change=${o=>a(o.target.value)}
			.value=${U(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,inputValue:a,headerFocused:n},o){return d`<cosmoz-input
			label=${e.title}
			.value=${a??t}
			@value-changed=${yi(o)}
			focused=${n}
			@focused-changed=${Ci(o)}
			@keydown=${$i(o)}
			@blur=${vi(o)}
		>
			<cosmoz-clear-button
				suffix
				slot="suffix"
				?visible=${Si(t)}
				light
				@click=${wi(o)}
			></cosmoz-clear-button>
		</cosmoz-input>`}legacyFilterToState(e){return{filter:e,inputValue:e}}}customElements.define("cosmoz-omnitable-column",zi);const N=Symbol("column"),qi=i=>{let e=!0;const t=i.map(a=>a.name);return i.forEach(a=>{a.name==null&&(e=!1,console.error("The name attribute needs to be set on all columns! Missing on column",a))}),i.forEach(a=>{t.indexOf(a.name)!==t.lastIndexOf(a.name)&&(e=!1,console.error("The name attribute needs to be unique among all columns! Not unique on column",a))}),e},Ai=i=>{const e=i.valuePath??i.name;return{name:i.name,title:i.title,valuePath:e,groupOn:i.groupOn??e,sortOn:i.sortOn??e,noSort:i.noSort,minWidth:i.minWidth,width:i.width,flex:i.flex,priority:i.priority,getString:i.getString,getComparableValue:i.getComparableValue,serializeFilter:i.serializeFilter,deserializeFilter:i.deserializeFilter,toXlsxValue:i.toXlsxValue,renderHeader:i.renderHeader,renderCell:i.renderCell,renderEditCell:i.renderEditCell,renderGroup:i.renderGroup,cellTitleFn:i.cellTitleFn,headerTitleFn:i.headerTitleFn,getFilterFn:i.getFilterFn,headerCellClass:i.headerCellClass,cellClass:i.cellClass,editable:i.editable,values:i.values,source:vt(i.computeSource),noLocalFilter:i.noLocalFilter,mini:i.mini,renderMini:i.renderMini,loading:i.loading,externalValues:i.externalValues,computeSource:i.computeSource,trueLabel:i.trueLabel,falseLabel:i.falseLabel,valueProperty:i.valueProperty,textProperty:i.textProperty,emptyLabel:i.emptyLabel,emptyValue:i.emptyValue,min:i.min,max:i.max,locale:i.locale,autoupdate:i.autoupdate,maximumFractionDigits:i.maximumFractionDigits,minimumFractionDigits:i.minimumFractionDigits,currency:i.currency,rates:i.rates,autodetect:i.autodetect,ownerTree:i.ownerTree,keyProperty:i.keyProperty,...i.getConfig?.(i),[N]:i}},Fi=i=>i.isOmnitableColumn&&!i.hidden,_i=i=>{const e=i.assignedElements({flatten:!0}).filter(Fi);return qi(e)?e:[]},ki=(i,e)=>(Array.isArray(e)?i.filter(a=>e.includes(a.name)):i.filter(a=>!a.disabled)).map(Ai),Ei=(i,{enabledColumns:e})=>{const[t,a]=T([]);return yt(()=>{let n;const o=i.shadowRoot.querySelector("#columnsSlot"),r=()=>{a(ki(_i(o),e))},l=()=>{cancelAnimationFrame(n),n=requestAnimationFrame(r)};return l(),o.addEventListener("slotchange",l),i.addEventListener("cosmoz-column-prop-changed",l),()=>{o.removeEventListener("slotchange",l),i.removeEventListener("cosmoz-column-prop-changed",l),cancelAnimationFrame(n)}},[e]),t},zt=(i,e)=>Array.isArray(i)?i.map(t=>w(t,e)).filter((t,a,n)=>t!=null&&n.indexOf(t)===a):void 0,ie=({externalValues:i,values:e,valuePath:t},a)=>{if(i)return i;if(typeof e=="function")return e;if(t!==void 0)return zt(a,t)},Ii=(i,e,t,a)=>{const{valuePath:n}=e,o=n!==void 0?w(t,n):void 0;if(a===o)return;n!==void 0&&Nt(t,n,a);const r={item:t,valuePath:n,value:a,oldValue:o,column:e[N]};i.dispatchEvent(new CustomEvent("column-item-changed",{bubbles:!0,composed:!0,detail:r}))},qt=i=>i?typeof i.close=="function"?i:qt(i.parentElement):null,Re=i=>class extends i{static get properties(){return{filter:{type:Object,notify:!0},values:{type:Array,value(){return[]}},headerFocused:{type:Boolean,notify:!0},min:{type:Number,value:null},max:{type:Number,value:null},limits:{type:Function},autoupdate:{type:String,value:!0},locale:{type:String,value:null},_filterInput:{type:Object,value(){return{min:null,max:null}}},_range:{type:Object,computed:"_computeRange(values.*)"},_limit:{type:Object,computed:"_computeLimit(_range, _filterInput.*, min, max)",value(){return{}}},_tooltip:{type:String,computed:"_computeTooltip(title, _filterText)"},_fromClasses:{type:String,computed:"_computeInputClasses(_filterInput.min)"},_toClasses:{type:String,computed:"_computeInputClasses(_filterInput.max)"}}}static get observers(){return["_filterInputChanged(_filterInput.*, autoupdate)","_filterChanged(filter.*)","_updateLimits(limits, headerFocused)"]}disconnectedCallback(){this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),super.disconnectedCallback()}_computeInputClasses(e){return e!=null&&e!==""?"has-value":""}toNumber(e,t,a){if(e==null||e==="")return;const n=typeof e=="number"?e:Number(e);if(Number.isNaN(n))return;if(a==null||t==null)return n;const o=this.toNumber(t);return o==null?n:a(n,o)}toValue(){return this.toNumber.apply(this,arguments)}getComparableValue(e,t){if(e==null)return;let a=e;return t!=null&&(a=this.get(t,e)),this.toValue(a)}renderValue(){}getInputString(e,t=this.valuePath){const a=this.toValue(this.get(t,e));return this._toInputString(a)}_computeRange(e){const t=e.base,a=Array.isArray(t)&&t.length&&t.map(n=>this.toValue(n)).filter(n=>n!=null);return!a||a.length<1?{min:null,max:null}:a.reduce((n,o)=>({min:this.toValue(o,n.min,Math.min),max:this.toValue(o,n.max,Math.max)}),{})}_computeLimit(e,t,a,n){if(!e)return;const o=t.base,r=this.toValue(a),l=this.toValue(n),u=r??this.toValue(e.min),s=l??this.toValue(e.max);return{fromMin:u,fromMax:this.toValue(s,this._fromInputString(o.max,"max"),Math.min),toMin:this.toValue(u,this._fromInputString(o.min,"min"),Math.max),toMax:s}}_computeFilterText(e){if(e.base==null)return;const t=e.base,a=this.toValue(t.min),n=this.toValue(t.max),o=[];return a!=null&&o.push(this.renderValue(a)),o.push(" - "),n!=null&&o.push(this.renderValue(n)),o.length>1?o.join(""):void 0}_computeTooltip(e,t){return t==null?e:`${e}: ${t}`}_fromInputString(e){return this.toValue(e)}_toInputString(e){const t=this.toValue(e);return t??null}_getDefaultFilter(){return{min:null,max:null}}_filterInputChanged(e,t){const a=e.path.split(".")[1];this.__inputChangePath=a||null,t&&(this._limitInputDebouncer=Bt.debounce(this._limitInputDebouncer,Gt.after(600),()=>{this._limitInput(),this._updateFilter()}),Ht(this._limitInputDebouncer))}_clearFrom(){this.set("_filterInput.min",null),this._updateFilter()}_clearTo(){this.set("_filterInput.max",null),this._updateFilter()}_onBlur(){this._limitInput(),this._updateFilter()}_onKeyDown(e){const t=e.currentTarget,a=Array.from(t.parentElement.querySelectorAll("cosmoz-input")),n=a[a.findIndex(l=>l===t)+1],o=!n,r=a[0]===t;switch(e.keyCode){case 13:if(e.preventDefault(),!o)n.focus();else{const l=this._limitInput();this._updateFilter(),l||this._closeParent(t)}break;case 9:(o&&!e.shiftKey||r&&e.shiftKey)&&this._closeParent(t)}}_closeParent(e){const t=qt(e);t&&t.close()}_onDropdownOpenedChanged({currentTarget:e,type:t,detail:a}){(t==="focus"||a?.value===!0)&&setTimeout(()=>{e.querySelector("cosmoz-input:focus")||e.querySelector("cosmoz-input")?.focus()},100)}_limitInput(){const e=this._filterInput,t=this.__inputChangePath,a=t?this._fromInputString(this.get(t,e),t):null;if(this.__inputChangePath=null,a==null)return!1;const n=this._limit,o=t==="min"?"from":"to",r=this.get(o+"Min",n),l=this.get(o+"Max",n),u=this.toValue(a,r,Math.max),s=this.toValue(u,l,Math.min);return this.getComparableValue(a)!==this.getComparableValue(s)?(this.set(["_filterInput",t],this._toInputString(s,t)),this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),!0):!1}_updateFilter(){const e=this._filterInput,t=this.filter,a=this._fromInputString(e.min,"min"),n=this._fromInputString(e.max,"max");this.getComparableValue(a)===this.getComparableValue(t,"min")&&this.getComparableValue(n)===this.getComparableValue(t,"max")||this.set("filter",{min:a,max:n})}_filterChanged(e){if(this._filterInput==null)return;const t=this._filterInput,a=e.base,n=this._fromInputString(t.min,"min"),o=this._fromInputString(t.max,"max");this.getComparableValue(n)===this.getComparableValue(a,"min")&&this.getComparableValue(o)===this.getComparableValue(a,"max")||(this.set("_filterInput",{min:this._toInputString(a.min),max:this._toInputString(a.max)}),this._limitInputDebouncer&&this._limitInputDebouncer.cancel())}hasFilter(){const e=this.filter;return e==null?!1:this.toValue(e.min)!=null||this.toValue(e.max)!=null}resetFilter(){this.filter=this._getDefaultFilter()}_updateLimits(e,t){e&&Promise.resolve($e(e,{active:t})).then(a=>{const{min:n,max:o}=a??{};Object.assign(this,{...n!=null?{min:n}:{},...o!=null?{max:o}:{}})})}},ae=i=>class extends i{static get template(){return Oe`<div id="output" style="position:relative;"></div>`}connectedCallback(){super.connectedCallback(),ke(this.render(),this.$.output)}_propertiesChanged(e,t,a){super._propertiesChanged(e,t,a),requestAnimationFrame(()=>ke(this.render(),this.$.output))}},Mi=["label","value","slot","always-float-label"],Oi=$t`
	${jt}

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
`,Li=i=>{const{label:e,value:t,slot:a}=i,n=d`<div
		id="input"
		part="input"
		role="button"
		class="control"
		slot=${a}
	>
		${t||""}
	</div>`;return Wt(n,{label:e})};customElements.define("cosmoz-omnitable-dropdown-input",O(Li,{observedAttributes:Mi,styleSheets:[Oi]}));const ne=({title:i,tooltip:e="",filterText:t="",onOpenedChanged:a,content:n,horizontalAlign:o="left",externalValues:r=null})=>{const l={filtered:!!t,...r!=null&&{[`external-values-${r}`]:!0}};return d`
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
			@focus=${a}
			class=${`${Ut(l)} dropdown`}
			title=${e||""}
		>
			<cosmoz-omnitable-dropdown-input
				class="input"
				slot="button"
				.label=${i}
				.placeholder=${i}
				.value=${t??""}
				text-align=${o}
				?always-float-label=${t?.length>0}
			></cosmoz-omnitable-dropdown-input>
			<div class="dropdown-content">${n}</div>
		</cosmoz-dropdown>
	`};class Di extends Re(ae(I)){static get properties(){return{currency:{type:String},autodetect:{type:Boolean,value:!1},rates:{type:Object},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:"_computeFilterText(filter.*, _formatters)"},headerFocused:{type:Boolean,value:!1}}}static get observers(){return["_valuesChanged(autodetect, currency, values)"]}render(){const e=t=>{this.headerFocused=t.type==="focus",this._onDropdownOpenedChanged(t)};return d`
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

			${ne({title:this.title,tooltip:this._tooltip,filterText:this._filterText,headerFocused:this.headerFocused,externalValues:this.externalValues,onOpenedChanged:e,content:d`
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-input
						class=${this._fromClasses}
						type="number"
						title=${A("Minimum amount")}
						label=${A("Min amount")}
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
						title=${A("Maximum amount")}
						label=${A("Max amount")}
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
		`}_valuesChanged(e,t,a){if(!Array.isArray(a)||a.length<1||!e&&t)return;const n=a.reduce((r,l)=>{if(l.currency){const u=l.currency;r[u]=(r[u]||0)+1}return r},{});let o=Object.keys(n)[0];Object.keys(n).reduce((r,l)=>{const u=Math.max(r,n[l]);return u===n[l]&&(o=l),u},0),this.set("currency",o)}toAmount(e,t,a){if(e==null||e==="")return;if(typeof e!="object"||e.currency==null||e.currency==="")return null;const n=this.toNumber(e.amount);if(n==null||Number.isNaN(n))return null;const o={currency:e.currency,amount:n};if(a==null||t==null)return o;const r=this.toAmount(t);if(r==null)return o;const l=this.rates||{},u=o.amount*(l[o.currency]||1),s=r.amount*(l[r.currency]||1);return this.toNumber(u,s,a)===u?o:r}toValue(){return this.toAmount.apply(this,arguments)}getComparableValue(e,t){const a=super.getComparableValue(e,t);if(a==null)return;const n=this.toNumber(a.amount),o=this.rates;return o==null?n:n*(o[a.currency]||1)}getString(e,t=this.valuePath){const a=this.toValue(this.get(t,e));return a===void 0?"":a===null?"Invalid value":this.renderValue(a)}getCurrency(e,t){const a=this.get(t,e);return a&&a.currency}getFormatter(e,t){const a=t||"",n=e+a||"",o=this._formatters=this._formatters||{};return o[n]||(o[n]=new Intl.NumberFormat(t||void 0,{style:"currency",currency:e})),o[n]}renderValue(e){const t=this.toAmount(e);return t==null?"":this.getFormatter(t.currency,this.locale).format(e.amount)}_amountValueChanged(e){const t=e.target,a=t.value,n=e.model.item,o=this.get(this.valuePath,n),r=Number(a),l={amount:r,currency:o.currency};this.set(this.valuePath,l,n),this._fireItemChangeEvent(n,this.valuePath,o,this.renderValue.bind(this))}_toInputString(e){const t=this.toValue(e);return t==null?null:this.toNumber(t.amount)}_toInputStringAmount(e){const t=this.rates;if(t==null)return this._toInputString(e);const a=this.toValue(e);return a==null?null:(this.toNumber(a.amount)*(t[a.currency]||1)/(t[this.currency]||1)).toFixed(2)}_fromInputString(e,t){const a=this.toNumber(e);if(a!=null)return this.toValue({amount:a,currency:t&&this.get(["filter",t,"currency"])||this.currency})}}customElements.define("cosmoz-omnitable-amount-range-input",Di);const L=(i,e,t)=>{if(i==null||i==="")return;const a=typeof i=="number"?i:Number(i);if(!Number.isNaN(a))return a},At=i=>{const e=L(i);return e==null?null:e.toString()},Ti=({valuePath:i},e)=>{const t=L(i?w(e,i):e);return At(t)},et=i=>{const e=At(i);return e??""},H=({valuePath:i,maximumFractionDigits:e},t)=>{if(t==null)return;const a=i?w(t,i):t,n=L(a);if(n!=null)return e!==null?L(n.toFixed(e)):n},Vi=Kt((i,e,t)=>{const a={localeMatcher:"best fit"};return e!==null&&(a.minimumFractionDigits=e),t!==null&&(a.maximumFractionDigits=t),new Intl.NumberFormat(i||void 0,a)}),tt=({valuePath:i,locale:e,minimumFractionDigits:t,maximumFractionDigits:a},n)=>{const o=i?w(n,i):n;if(o==null)return"";const r=L(o);return r==null?void 0:Vi(e,t,a).format(r)},Pi=(i,e)=>t=>{const a=H(i,t);if(a==null)return!1;const n=H({...i,valuePath:"min"},e),o=H({...i,valuePath:"max"},e);return!(a<(n??-1/0)||a>(o??1/0))},te=(i={},e,t,a)=>{if(e==null||e==="")return;if(typeof e!="object"||e.currency==null||e.currency==="")return null;const n=L(e.amount);return n==null||Number.isNaN(n)?null:{currency:e.currency,amount:n}},j=({valuePath:i,rates:e},t)=>{if(t==null)return;let a=t;i!=null&&(a=w(t,i));const n=te(e,a);if(n==null)return;const o=L(n.amount);return e==null||o==null?o:o*(e?.[n.currency]||1)},Ri=(i,e)=>t=>{const a=j(i,t);if(a===void 0)return!1;const n=j({...i,valuePath:"min"},e),o=j({...i,valuePath:"max"},e);return n===void 0||o===void 0?!0:!(a<n||a>o)},re={},Ni=(i,e)=>{const a=i+(e||"")||"";return re[a]||(re[a]=new Intl.NumberFormat(e||void 0,{style:"currency",currency:i})),re[a]},Bi=(i,e,t)=>{const a=te(i,e);return a==null?"":Ni(a.currency,t).format(a.amount)},it=({valuePath:i,rates:e,locale:t},a)=>{const n=te(e,i?w(a,i):void 0);return n===void 0?"":n===null?"Invalid value":Bi(e,n,t)},at=i=>i?i.amount+i.currency:"",nt=i=>{if(i==null||i==="")return;const e=i.match(/^(-?[\d]+)([\D]+?)$/iu);if(!(!Array.isArray(e)||e.length<0))return{amount:Number(e[1]),currency:e[2]}},Gi=({valuePath:i},e)=>i?w(e,i)?.currency:null,Hi=({valuePath:i},e)=>i?w(e,i)?.amount:void 0;class ji extends V(I){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},currency:{type:String,notify:!0},autodetect:{type:Boolean,value:!1,notify:!0},rates:{type:Object,notify:!0},width:{type:String,value:"70px"},cellClass:{type:String,value:"amount-cell align-right"},headerCellClass:{type:String,value:"amount-header-cell"}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const a=j({...e,valuePath:"min"},t),n=j({...e,valuePath:"max"},t);if(!(a==null&&n==null))return Ri(e,t)}getString(e,t){return it(e,t)}toXlsxValue(e,t){return it(e,t)}getComparableValue(e,t){return j(e,t)}serializeFilter({rates:e},t){if(t==null)return;const a=te(e,t.min),n=te(e,t.max);if(!(a==null&&n==null))return at(a)+"~"+at(n)}deserializeFilter(e,t){if(t==null||t==="")return null;const a=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(a)?{min:nt(a[1]),max:nt(a[2])}:null}renderCell(e,{item:t}){return d`<span>${e.getString(e,t)}</span>`}renderEditCell(e,{item:t},a){return d`<cosmoz-input
			no-label-float
			type="number"
			@change=${o=>a({amount:o.target.value,currency:w(t,e.valuePath)?.currency})}
			.value=${Hi(e,t)}
		>
			<div slot="suffix">${Gi(e,t)}</div>
		</cosmoz-input>`}renderHeader({title:e,min:t,max:a,limits:n,locale:o,rates:r,currency:l,autoupdate:u,autodetect:s},{filter:c},m,b){return d`<cosmoz-omnitable-amount-range-input
			.title=${e}
			.filter=${c}
			.values=${b}
			.rates=${r}
			.min=${t}
			.max=${a}
			.limits=${n}
			.locale=${o}
			.currency=${l}
			.autoupdate=${u}
			.autodetect=${s}
			@filter-changed=${({detail:{value:p}})=>m(z=>({...z,filter:p}))}
			@header-focused-changed=${({detail:{value:p}})=>m(z=>({...z,headerFocused:p}))}
		></cosmoz-omnitable-amount-range-input>`}computeSource(e,t){return ie(e,t)}}customElements.define("cosmoz-omnitable-column-amount",ji);const Wi=(i,e)=>{if(!Array.isArray(i))return;const t=[];return i.reduce((a,n)=>Array.isArray(n)?(n.forEach(o=>{a.push(o)}),a):(a.push(n),a),[]).filter((a,n,o)=>{if(o.indexOf(a)!==n)return!1;if(e){const r=w(a,e);if(t.indexOf(r)!==-1)return!1;t.push(r)}return!0})},Ui=(i,e,t)=>{if(i==null)return[];if(Array.isArray(i))return Wi(i,e);if(typeof i=="object"){const a=e??"id",n=t??"label";return Object.entries(i).map(([o,r])=>({[a]:o,[n]:r})).sort((o,r)=>o[n]<r[n]?-1:o[n]>r[n]?1:0)}return[]},Ne=(i,e,t)=>Ce(e&&w(i,e)).map(he(t)),Be=({valuePath:i,textProperty:e},t)=>Ne(t,i,e).filter(a=>a!=null).join(", "),Ki=Be,Ji=({valueProperty:i,valuePath:e,emptyValue:t,emptyProperty:a},n)=>o=>{const r=he(i),l=Ce(w(o,e));return n.some(u=>l.length===0&&he(a||i)(u)===t||l.some(s=>r(s)===r(u)))},Ge=i=>e=>i(t=>({...t,filter:e})),He=i=>e=>i(t=>({...t,headerFocused:e})),je=i=>e=>i(t=>({...t,query:e})),Ft=({emptyValue:i,emptyLabel:e,emptyProperty:t,textProperty:a,valueProperty:n},o)=>{const r=Ui(o,n,a);return!e||i===void 0||!a||!(t||n)||!r?r:[{[a]:e,[t||n]:i},...r]},Xi=(i,e)=>Ft(i,zt(e,i.valuePath)),We=i=>class extends i{static get properties(){return{textProperty:{type:String},valueProperty:{type:String},emptyLabel:{type:String},emptyValue:{type:Object},emptyProperty:{type:String}}}getConfig(e){return{emptyProperty:e.emptyProperty}}getString(e,t){return Be(e,t)}toXlsxValue(e,t){return Ki(e,t)}getComparableValue({valuePath:e,valueProperty:t},a){const n=w(a,e);return t==null?n:Ce(n).reduce((r,l)=>(r.push(w(l,t)),r),[]).sort().join(" ")}getFilterFn(e,t){if(!(!t||!Array.isArray(t)||t.length===0))return Ji(e,t)}serializeFilter(e,t){return t.length===0?null:JSON.stringify(t)}deserializeFilter(e,t){return JSON.parse(decodeURIComponent(t))}computeSource(e,t){return e.externalValues||typeof e.values=="function"?async(...a)=>Ft(e,await Promise.resolve($e(e.values,...a))):Xi(e,t)}},Qi=({valuePath:i,textProperty:e,valueProperty:t},a)=>{const n=e?Jt(e):he(t),o=Ce(i&&w(a,i)).map(n);return o.length>1?o.filter(Boolean).join(","):o[0]};class Yi extends We(V(I)){static get properties(){return{headerCellClass:{type:String,value:"autocomplete-header-cell"},minWidth:{type:String,value:"55px"},editMinWidth:{type:String,value:"55px"},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return d`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},a){return d`<cosmoz-input
			no-label-float
			type="text"
			@change=${o=>a(o.target.value)}
			.value=${U(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:a},n,o){return d`<cosmoz-autocomplete-ui
			class="external-values-${e.externalValues}"
			?keep-opened=${e.keepOpened}
			?keep-query=${e.keepQuery}
			?show-single=${e.showSingle}
			?preserve-order=${e.preserveOrder}
			.textual=${e.textual}
			.label=${e.title}
			.source=${o}
			.textProperty=${e.textProperty}
			.valueProperty=${e.valueProperty}
			.itemRenderer=${e[N]?.itemRenderer}
			.value=${t}
			.text=${a}
			.limit=${e.limit}
			.onChange=${Ge(n)}
			.onFocus=${He(n)}
			.onText=${je(n)}
			>${k(e.loading,()=>d`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}getComparableValue(e,t){return Qi(e,t)}}customElements.define("cosmoz-omnitable-column-autocomplete",Yi);const Ue=(i,e)=>e.find(({value:t})=>i===t),Zi=(i,e,t)=>{const a=Ue(e,t);return a?a.text:i},ot=(i,e,t,a)=>Zi(i,w(e,t),a),ea=({valuePath:i},e,t)=>Ue(w(e,i),t),ta=i=>e=>{i(t=>({...t,filter:e?.[0]?.value??null}))},ia=i=>e=>{i(t=>({...t,headerFocused:e}))},aa=i=>e=>{i(t=>({...t,query:e}))},na=i=>e=>i(e?.[0]?.value),rt=({valuePath:i,trueLabel:e,falseLabel:t},a)=>w(a,i)?e:t,oa=({valuePath:i},e)=>t=>w(t,i)===e,le=vt((i,e)=>[{text:i,value:!0},{text:e,value:!1}]),ra=({valuePath:i,trueLabel:e,falseLabel:t},a)=>i?w(a,i)?e:t:"",la=(i,e)=>{try{return JSON.parse(e)}catch{return null}};class sa extends V(I){static get properties(){return{trueLabel:{type:String,value:"True"},falseLabel:{type:String,value:"False"},flex:{type:String,value:"0"},cellClass:{type:String,value:"boolean-cell"}}}getString(e,t){return rt(e,t)}renderCell(e,{item:t}){return rt(e,t)}renderEditCell(e,{item:t},a){const{trueLabel:n,falseLabel:o}=e;return d`<cosmoz-autocomplete
			no-label-float
			.title=${ot(e.title,t,e.valuePath,le(n,o))}
			.source=${le(n,o)}
			.textProperty=${"text"}
			.value=${ea(e,t,le(n,o))}
			.onChange=${na(a)}
			.limit=${1}
			>${k(e.loading,()=>d`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete
		>`}renderHeader(e,{filter:t,query:a},n,o){return d`<cosmoz-autocomplete-ui
			.label=${e.title}
			.title=${ot(e.title,t,e.valuePath,o)}
			.source=${o}
			.textProperty=${"text"}
			.value=${Ue(t,o)}
			.text=${a}
			.onChange=${ta(n)}
			.onFocus=${ia(n)}
			.onText=${aa(n)}
			.limit=${1}
			>${k(e.loading,()=>d`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}computeSource({trueLabel:e,falseLabel:t}){return le(e,t)}getFilterFn(e,t){if(t!=null)return oa(e,t)}toXlsxValue(e,t){return ra(e,t)}deserializeFilter(e,t){return la(e,t)}}customElements.define("cosmoz-omnitable-column-boolean",sa);const Ke=i=>class extends Re(i){static get properties(){return{max:{type:Date,value:null},min:{type:Date,value:null},_filterText:{type:String,computed:"_computeFilterText(filter.*, formatter)"},formatter:{type:Object,computed:"_computeFormatter(locale)"}}}toDate(e,t,a){if(e==null||e==="")return;let n=e;if(n instanceof Date||(typeof e=="string"&&(n=this.getAbsoluteISOString(n)),n=new Date(n)),Number.isNaN(n.getTime()))return null;if(a==null||t==null)return n;const o=this.toDate(t);if(o==null)return n;const r=this.getComparableValue(n),l=this.getComparableValue(o);return a(r,l)===r?n:o}toValue(){return this.toDate.apply(this,arguments)}getComparableValue(e,t){const a=super.getComparableValue(e,t);if(a!=null)return this.toNumber(a.getTime())}getString(e,t=this.valuePath,a=this.formatter){const n=this.toValue(this.get(t,e));return n===void 0?"":n===null?"Invalid Date":this.renderValue(n,a)}getAbsoluteISOString(e){return e.length===19?e+this._getTimezoneString(e):e}_getTimezoneString(e){const t=-new Date(e).getTimezoneOffset()/60;return(t<0?"-":"+")+["0",Math.abs(t)].join("").substr(-2)+":00"}renderValue(e,t=this.formatter){if(t==null)return;const a=this.toValue(e);if(a!=null)return t.format(a)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0)}_toInputString(e){const t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(0,10)}_dateValueChanged(e){const t=e.currentTarget,a=t.value,n=e.model.item,o=this.get(this.valuePath,n),r=this._fromInputString(a);this.set(this.valuePath,r,n),this._fireItemChangeEvent(n,this.valuePath,o,this.renderValue.bind(this))}_toLocalISOString(e){return we(e)}};class ua extends Ke(ae(I)){render(){const e=t=>{this.headerFocused=t.type==="focus"};return d`
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

			${ne({title:this.title,tooltip:this._tooltip,filterText:this._filterText,headerFocused:this.headerFocused,externalValues:this.externalValues,onOpenedChanged:e,content:d`
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-input
						type="date"
						label=${A("From date")}
						min=${this._toInputString(this._limit.fromMin)}
						max=${this._toInputString(this._limit.fromMax)}
						.value=${this._filterInput?.min}
						@value-changed=${t=>this.set("_filterInput.min",t.detail.value)}
					></cosmoz-input>
					<cosmoz-input
						type="date"
						label=${A("Until date")}
						min=${this._toInputString(this._limit.toMin)}
						max=${this._toInputString(this._limit.toMax)}
						.value=${this._filterInput?.max}
						@value-changed=${t=>this.set("_filterInput.max",t.detail.value)}
					></cosmoz-input>
				`})}
		`}_fromInputString(e,t){const a=this.toDate(e);if(a!=null)return t==="min"&&a.setHours(0,0,0,0),t==="max"&&a.setHours(23,59,59),a}_filterInputChanged(e,t){const a=e.path.split(".")[1],n=a&&e.value;if(n&&n.match(/^0+/u)){this._limitInputDebouncer.cancel();return}super._filterInputChanged(e,t)}}customElements.define("cosmoz-omnitable-date-range-input",ua);const ca=i=>{const e=-new Date(i).getTimezoneOffset()/60;return(e<0?"-":"+")+["0",Math.abs(e)].join("").substr(-2)+":00"},Je=i=>i.length===19?i+ca(i):i,_t=i=>{if(i==null||i==="")return;let e=i;return!(e instanceof Date)&&(typeof i=="string"&&(e=Je(e)),e=Xt(e),!e)||Number.isNaN(e.getTime())?null:e},P=({valuePath:i},e)=>{if(e==null)return;let t=e;i!=null&&(t=w(e,i));const a=_t(t);if(a!=null)return L(a.getTime())},E=(i,e,t)=>{const a=_t(i);return a??null},Xe=(i,e)=>{if(e==null)return;const t=E(i);if(t!=null)return e.format(t)},se={},da=i=>{const e=i||"";return se[e]||(se[e]=new Intl.DateTimeFormat(i||void 0)),se[e]},lt=({valuePath:i,locale:e},t)=>{let a=w(t,i||"");return a===void 0?"":(a=E(a),a===null?"Invalid Date":Xe(a,da(e)))},kt=i=>{const e=E(i);if(e==null)return null;const t=we(e);return t==null?null:t.slice(0,10)},ma=({valuePath:i},e)=>kt(w(e,i||"")),Et=(i,e)=>{const t=E(i);if(t!=null)return t},st=i=>{const e=kt(i);return e??""},pa=({valuePath:i},e)=>{if(!i)return"";const t=E(w(e,i));if(!t)return"";const a=E(we(t));return a?(a.setHours(0,0,0,0),a):""},It=(i,e)=>t=>{const a=P(i,t);if(a==null)return!1;const n=P({...i,valuePath:"min"},e),o=P({...i,valuePath:"max"},e);return!(a<(n??-1/0)||a>(o??1/0))};class ga extends V(I){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"date-header-cell"},width:{type:String,value:"100px"},minWidth:{type:String,value:"82px"},flex:{type:String,value:"0"}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const a=P({...e,valuePath:"min"},t),n=P({...e,valuePath:"max"},t);if(!(a==null&&n==null))return It(e,t)}getString(e,t){return lt(e,t)}toXlsxValue(e,t){return pa(e,t)}getComparableValue(e,t){return P(e,t)}serializeFilter(e,t){if(t==null)return;const a=E(t.min),n=E(t.max);if(!(a==null&&n==null))return st(a)+"~"+st(n)}deserializeFilter(e,t){if(t==null||t==="")return null;const a=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(a)?{min:E(a[1]),max:E(a[2])}:null}renderCell(e,{item:t}){return d`<div class="omnitable-cell-date">
			${lt(e,t)}
		</div>`}renderEditCell(e,{item:t},a){return d`<cosmoz-input
			no-label-float
			type="date"
			@change=${o=>a(Et(o.target.value))}
			.value=${ma(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:a,limits:n,locale:o},{filter:r},l,u){return d`<cosmoz-omnitable-date-range-input
			.title=${e}
			.filter=${r}
			.values=${u}
			.min=${t}
			.max=${a}
			.limits=${n}
			.locale=${o}
			@filter-changed=${({detail:{value:s}})=>l(c=>({...c,filter:s}))}
			@header-focused-changed=${({detail:{value:s}})=>l(c=>({...c,headerFocused:s}))}
		></cosmoz-omnitable-date-range-input>`}computeSource(e,t){return ie(e,t)}}customElements.define("cosmoz-omnitable-column-date",ga);class ba extends We(V(I)){renderCell({valuePath:e,textProperty:t},{item:a}){const n=Ne(a,e,t).map(o=>d`<li>${o}</li>`);return d`
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
				${n}
			</ul>
		`}renderEditCell(){return"not implemented"}renderHeader(e,{filter:t,query:a},n,o){return d`<cosmoz-autocomplete-ui
			class="external-values-${e.externalValues}"
			.label=${e.title}
			.source=${o}
			.textProperty=${e.textProperty}
			.value=${t}
			.text=${a}
			.onChange=${Ge(n)}
			.onFocus=${He(n)}
			.onText=${je(n)}
			>${k(e.loading,()=>d`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		> `}}customElements.define("cosmoz-omnitable-column-list-horizontal",ba);window.Cosmoz=window.Cosmoz||{};class ut extends Qt(Yt(Zt,I)){static get template(){return Oe`
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
		`}static get is(){return"cosmoz-omnitable-column-list-data"}static get properties(){return{items:{type:Array},_expanded:{type:Boolean,value:!1},_othersCount:{type:Number,computed:"_computeOthersCount(items)"}}}static get observers(){return["_itemsLengthChanged(items.length)"]}_itemsLengthChanged(){requestAnimationFrame(()=>this.dispatchEvent(new CustomEvent("expand",{bubbles:!0})))}_firstItem(e){if(e!=null&&e.length>0)return e[0]}_hideExpand(e,t){return e!==void 0&&e.length!==null?e.length<=2||t:!0}_hideCollapse(e,t){return e!==void 0&&e.length!==null?e.length<=2||!t:!0}_otherItems(e,t){if(e!=null&&(e.length<=2||t))return e.slice(1)}_computeOthersCount(e){if(e!=null)return e.length-1}_toggleExpand(e){this._expanded=!this._expanded,e.stopPropagation(),e.preventDefault()}}customElements.define(ut.is,ut);class fa extends We(V(I)){static get properties(){return{keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,textual:e.textual}}renderCell({valuePath:e,textProperty:t},{item:a}){return d`<cosmoz-omnitable-column-list-data
			.items=${Ne(a,e,t)}
		></cosmoz-omnitable-column-list-data>`}renderEditCell(e,{item:t},a){const n=o=>a(o.target.value.split(/,\s*/gu));return d`<cosmoz-input
			no-label-float
			type="text"
			.value=${Be(e,t)}
			@change=${n}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:a},n,o){return d`<cosmoz-autocomplete-ui
			class="external-values-${e.externalValues}"
			?keep-opened=${e.keepOpened}
			?keep-query=${e.keepQuery}
			.textual=${e.textual}
			.column=${e}
			.label=${e.title}
			.source=${o}
			.textProperty=${e.textProperty}
			.valueProperty=${e.valueProperty}
			.itemRenderer=${e[N]?.itemRenderer}
			.value=${t}
			.text=${a}
			.onChange=${Ge(n)}
			.onFocus=${He(n)}
			.onText=${je(n)}
			>${k(e.loading,()=>d`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}}customElements.define("cosmoz-omnitable-column-list",fa);class ha extends Re(ae(I)){static get properties(){return{maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},formatter:{type:Object,computed:"_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)"},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:"_computeFilterText(filter.*, formatter)"},headerFocused:{type:Boolean,value:!1}}}render(){const e=t=>{this.headerFocused=t.type==="focus",this._onDropdownOpenedChanged(t)};return d`
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

			${ne({title:this.title,tooltip:this._tooltip,filterText:this._filterText,headerFocused:this.headerFocused,horizontalAlign:"right",externalValues:this.externalValues,onOpenedChanged:e,content:d`
					<h3>${this.title}</h3>
					<cosmoz-input
						class=${this._fromClasses}
						type="number"
						label=${A("From")}
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
						label=${A("To")}
						.value=${this._filterInput?.max}
						@value-changed=${t=>{this.set("_filterInput.max",t.detail.value)}}
						@blur=${t=>this._onBlur(t)}
						@keydown=${t=>this._onKeyDown(t)}
						min=${this._toInputString(this._limit.toMin)}
						max=${this._toInputString(this._limit.toMax)}
					></cosmoz-input>
				`})}
		`}_computeFormatter(e,t,a){const n={localeMatcher:"best fit"};return t!==null&&(n.minimumFractionDigits=t),a!==null&&(n.maximumFractionDigits=a),new Intl.NumberFormat(e||void 0,n)}getComparableValue(e,t){if(e==null)return;let a=e;if(t!=null&&(a=this.get(t,e)),a=this.toValue(a),a==null)return;const n=this.maximumFractionDigits;return n!==null?this.toValue(a.toFixed(n)):a}renderValue(e,t=this.formatter){const a=this.toNumber(e);if(a!=null)return t.format(a)}}customElements.define("cosmoz-omnitable-number-range-input",ha);class xa extends V(I){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},cellClass:{type:String,value:"number-cell align-right"},width:{type:String,value:"30px"},minWidth:{type:String,value:"30px"},headerCellClass:{type:String,value:"number-header-cell"},maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const a=H({...e,valuePath:"min"},t),n=H({...e,valuePath:"max"},t);if(!(a==null&&n==null))return Pi(e,t)}getString(e,t){return tt(e,t)}toXlsxValue({valuePath:e},t){return w(t,e)}getComparableValue(e,t){return H(e,t)}serializeFilter(e,t){if(t==null)return;const a=L(t.min),n=L(t.max);if(!(a==null&&n==null))return et(a)+"~"+et(n)}deserializeFilter(e,t){if(t==null||t==="")return null;const a=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(a)?{min:L(a[1]),max:L(a[2])}:null}renderCell(e,{item:t}){return d`<div class="omnitable-cell-number">
			${tt(e,t)}
		</div>`}renderEditCell(e,{item:t},a){return d`<cosmoz-input
			no-label-float
			type="number"
			@change=${o=>a(o.target.value)}
			.value=${Ti(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:a,limits:n,locale:o,maximumFractionDigits:r,minimumFractionDigits:l,autoupdate:u},{filter:s},c,m){return d`<cosmoz-omnitable-number-range-input
			.title=${e}
			.filter=${s}
			.values=${m}
			.min=${t}
			.max=${a}
			.limits=${n}
			.locale=${o}
			.maximumFractionDigits=${r}
			.minimumFractionDigsits=${l}
			.autoupdate=${u}
			@filter-changed=${({detail:{value:b}})=>c(p=>({...p,filter:b}))}
			@header-focused-changed=${({detail:{value:b}})=>c(p=>({...p,headerFocused:b}))}
		></cosmoz-omnitable-number-range-input>`}computeSource(e,t){return ie(e,t)}}customElements.define("cosmoz-omnitable-column-number",xa);const Mt="1970-01-01",B=(i,e,t)=>{const a=typeof i=="string"&&i.length>3&&i.length<=9?Je(Mt+"T"+i):i;return E(a)},ue={},ya=i=>{const e=i||"";if(ue[e])return ue[e];const t={hour:"numeric",minute:"numeric",second:"numeric"};return ue[e]=new Intl.DateTimeFormat(i||void 0,t),ue[e]},fe=({valuePath:i,locale:e},t)=>{const a=B(w(t,i||""));return a===void 0?"":a===null?"Invalid Date":Xe(a,ya(e))},va=(i,e)=>i.valuePath?fe(i,e):"",$a=i=>{const e=B(i);if(e==null)return null;const t=we(e);return t&&t.slice(11,19)},W=({valuePath:i},e)=>{if(e==null)return;const t=$a(i==null?e:w(e,i));if(t==null)return;const a=B(Je(Mt+"T"+t));return a==null?a:L(a.getTime())},Ca=(i,e)=>t=>{const a=W(i,t);if(a==null)return!1;const n=W({...i,valuePath:"min"},e),o=W({...i,valuePath:"max"},e);return n==null||o==null?!1:!(a<n||a>o)},ct=i=>{const e=B(i);return e==null?"":e.toISOString().slice(11,19).replace(/:/gu,".")},dt=i=>{if(!(i==null||i===""))return B(typeof i=="string"?i.replace(/\./gu,":")+"Z":i)};class wa extends Ke(ae(I)){render(){const e=t=>{this.headerFocused=t.type==="focus"};return d`
			<cosmoz-clear-button
				@click=${()=>this.resetFilter()}
				?visible=${this.hasFilter()}
			></cosmoz-clear-button>

			${ne({title:this.title,tooltip:this._tooltip,filterText:this._filterText,headerFocused:this.headerFocused,externalValues:this.externalValues,onOpenedChanged:e,content:d`
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-input
						type="time"
						label=${A("From time")}
						step=${this.filterStep}
						.value=${this._filterInput.min}
						@value-changed=${t=>this.set("_filterInput.min",t.detail.value)}
					></cosmoz-input>
					<cosmoz-input
						type="time"
						label=${A("Until time")}
						step=${this.filterStep}
						.value=${this._filterInput.max}
						@value-changed=${t=>this.set("_filterInput.max",t.detail.value)}
					></cosmoz-input>
				`})}
		`}get _fixedDate(){return"1970-01-01"}toDate(e,t,a){const n=typeof e=="string"&&e.length>3&&e.length<=9?this.getAbsoluteISOString(this._fixedDate+"T"+e):e;return super.toDate(n,t,a)}_toInputString(e){const t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(11,19)}getComparableValue(e,t){if(e==null)return;let a=this._toInputString(t==null?e:this.get(t,e));if(a!=null&&(a=this.toValue(this.getAbsoluteISOString(this._fixedDate+"T"+a)),a!=null))return this.toNumber(a.getTime())}_timeValueChanged(e){const t=e.target,a=t.value,n=e.model.item,o=this.toDate(n.date),r=this.toDate(o!=null?o.toISOString().slice(0,10)+"T"+a:a),l=u=>u;r==null&&(this.set(this.valuePath,r,n),this._fireItemChangeEvent(n,this.valuePath,o,l.bind(this)))}_computeFormatter(e){const t={hour:"numeric",minute:"numeric",second:"numeric"};return new Intl.DateTimeFormat(e||void 0,t)}}customElements.define("cosmoz-omnitable-time-range-input",wa);class Sa extends V(I){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"time-header-cell"},minWidth:{type:String,value:"63px"},width:{type:String,value:"210px"},flex:{type:String,value:"0"},filterStep:{type:String,value:"1"}}}getFilterFn(e,t){const a=W({...e,valuePath:"min"},t),n=W({...e,valuePath:"max"},t);if(!(a==null&&n==null))return Ca(e,t)}getString(e,t){return fe(e,t)}toXlsxValue(e,t){return va(e,t)}getComparableValue(e,t){return W(e,t)}serializeFilter(e,t){if(t==null)return;const a=B(t.min),n=B(t.max);if(!(a==null&&n==null))return ct(a)+"~"+ct(n)}deserializeFilter(e,t){if(t==null||t==="")return null;const a=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(a)?{min:dt(a[1]),max:dt(a[2])}:null}renderCell(e,{item:t}){return fe(e,t)}renderEditCell(e,{item:t},a){return d`<cosmoz-input
			no-label-float
			type="text"
			@change=${o=>a(o.target.value)}
			.value=${fe(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:a,locale:n,filterStep:o},{filter:r},l,u){return d`<cosmoz-omnitable-time-range-input
			.title=${e}
			.filter=${r}
			.values=${u}
			.min=${t}
			.max=${a}
			.locale=${n}
			.filterStep=${o}
			@filter-changed=${({detail:{value:s}})=>l(c=>({...c,filter:s}))}
			@header-focused-changed=${({detail:{value:s}})=>l(c=>({...c,headerFocused:s}))}
		></cosmoz-omnitable-time-range-input>`}computeSource(e,t){return ie(e,t)}}customElements.define("cosmoz-omnitable-column-time",Sa);const ce={},za=i=>{const e=i||"";if(ce[e])return ce[e];const t={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return ce[e]=new Intl.DateTimeFormat(i||void 0,t),ce[e]},qe=({valuePath:i,locale:e},t)=>{const a=E(w(t,i||""));return a===void 0?"":a===null?"Invalid Date":Xe(a,za(e))},qa=({valuePath:i},e)=>i?w(e,i):"",mt=i=>{const e=E(i);return e==null?"":e.toISOString().slice(0,19).replace(/:/gu,".")},pt=i=>{if(!(i==null||i==="")&&typeof i=="string")return E(i.replace(/\./gu,":")+"Z")};class Aa extends Ke(ae(I)){render(){const e=t=>{this.headerFocused=t.type==="focus"};return d`
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

			${ne({title:this.title,tooltip:this._tooltip,filterText:this._filterText,headerFocused:this.headerFocused,externalValues:this.externalValues,onOpenedChanged:e,content:d`
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-datetime-input
						date-label=${A("From date")}
						time-label=${A("From time")}
						min=${this._toInputString(this._limit.fromMin)}
						max=${this._toInputString(this._limit.fromMax)}
						step=${this.filterStep}
						.value=${this._filterInput?.min}
						@value-changed=${t=>this.set("_filterInput.min",t.detail.value)}
					></cosmoz-datetime-input>
					<cosmoz-datetime-input
						date-label=${A("To date")}
						time-label=${A("To time")}
						min=${this._toInputString(this._limit.toMin)}
						max=${this._toInputString(this._limit.toMax)}
						step=${this.filterStep}
						.value=${this._filterInput?.max}
						@value-changed=${t=>this.set("_filterInput.max",t.detail.value)}
					></cosmoz-datetime-input>
				`})}
		`}_toInputString(e){const t=this.toValue(e);if(t!=null)return this._toLocalISOString(t).slice(0,19)}_computeFormatter(e){const t={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return new Intl.DateTimeFormat(e||void 0,t)}}customElements.define("cosmoz-omnitable-datetime-range-input",Aa);class gt extends V(I){static get is(){return"cosmoz-omnitable-column-datetime"}static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"datetime-header-cell"},width:{type:String,value:"210px"},minWidth:{type:String,value:"128px"},flex:{type:String,value:"0"},filterStep:{type:Number,value:1}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const a=P({...e,valuePath:"min"},t),n=P({...e,valuePath:"max"},t);if(!(a==null&&n==null))return It(e,t)}getString(e,t){return qe(e,t)}toXlsxValue(e,t){return qa(e,t)}getComparableValue(e,t){return P(e,t)}serializeFilter(e,t){if(t==null)return;const a=E(t.min),n=E(t.max);if(!(a==null&&n==null))return mt(a)+"~"+mt(n)}deserializeFilter(e,t){if(t==null||t==="")return null;const a=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(a)?{min:pt(a[1]),max:pt(a[2])}:null}renderCell(e,{item:t}){return qe(e,t)}renderEditCell(e,{item:t},a){return d`<cosmoz-input
			no-label-float
			type="text"
			@change=${o=>a(Et(o.target.value))}
			.value=${qe(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:a,limits:n,locale:o,filterStep:r},{filter:l},u,s){return d`<cosmoz-omnitable-datetime-range-input
			.title=${e}
			.filter=${l}
			.values=${s}
			.min=${t}
			.max=${a}
			.limits=${n}
			.locale=${o}
			.filterStep=${r}
			@filter-changed=${({detail:{value:c}})=>u(m=>({...m,filter:c}))}
			@header-focused-changed=${({detail:{value:c}})=>u(m=>({...m,headerFocused:c}))}
		></cosmoz-omnitable-datetime-range-input>`}computeSource(e,t){return ie(e,t)}}customElements.define(gt.is,gt);const Fa=({column:i,item:e,selected:t,folded:a,group:n})=>i?(i.renderGroup??i.renderCell)(i,{item:e,selected:t,folded:a,group:n}):xt;customElements.define("cosmoz-omnitable-group-row",O(Fa,{useShadowDOM:!1}));const _a=i=>{const{column:e}=i;return M(()=>{let t=0,a=0;const n=l=>{i.dispatchEvent(new CustomEvent("column-resize",{bubbles:!0,composed:!0,detail:{newWidth:Math.ceil(a+l.pageX-t),column:e}}))},o=()=>{document.removeEventListener("pointermove",n),document.removeEventListener("pointerup",o)},r=l=>{t=l.pageX,a=i.previousElementSibling.getBoundingClientRect().width,document.addEventListener("pointermove",n),document.addEventListener("pointerup",o)};return i.addEventListener("pointerdown",r),()=>i.removeEventListener("pointerdown",r)},[e]),xt};customElements.define("cosmoz-omnitable-resize-nub",O(_a));const ka=d`<svg
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
</svg>`,Ea=d`
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
`,Ae=d` <svg
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
</svg>`,Ia=d`<svg
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
</svg> `,Ot=({column:i,on:e,descending:t,setOn:a,setDescending:n})=>{const{name:o,title:r}=i??{};return d`<button
		class="sg"
		title=${Ye(r)}
		data-on=${Ye(o===e&&(t?"desc":"asc")||void 0)}
		@click=${l=>{const s=l.currentTarget?.dataset.on;s||(a(o),n(!1)),s==="asc"?n(!0):s==="desc"&&(a(),n(!1))}}
	>
		<span>${r}</span> ${Ia}
	</button>`},Lt=({columns:i,...e})=>i?.map(t=>Ot({column:t,...e})),Ma=()=>d`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:i,groupOn:e,setGroupOn:t,groupOnDescending:a,setGroupOnDescending:n}={})=>Lt({columns:i?.filter?.(o=>o.groupOn),on:e,setOn:t,descending:a,setDescending:n})}
	>
	</sort-and-group-consumer>
`,Oa=()=>d`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:i,sortOn:e,setSortOn:t,descending:a,setDescending:n}={})=>Lt({columns:i?.filter?.(o=>o.sortOn&&!o.noSort),on:e,setOn:t,descending:a,setDescending:n})}
	>
	</sort-and-group-consumer>
`,Dt=i=>(e,t,a=ei)=>{const n=ni(),o=new URLSearchParams(n.hash.replace("#",""));return i(e,t,a,o),"#!"+Object.assign(n,{hash:o}).href.replace(location.origin,"")},Tt=i=>i==null||i==="",La=Dt((i,e,t,a)=>Tt(t(e))?a.delete(i):a.set(i,t(e))),Da=Dt((i,e,t,a)=>Object.entries(e).map(t).forEach(([n,o])=>Tt(o)?a.delete(i+n):a.set(i+n,o))),J=(i,e,{suffix:t="",read:a,write:n,multi:o}={})=>{const[r,l]=o?[Da,ti]:[La,ii],[u,s]=T(()=>e==null?i:l(e+t,a)??i),c=$(m=>s(b=>{const p=$e(m,b);return e!=null&&ai(r(e+t,p,n),null,{notify:!1}),p}),[e,t,r,n]);return[u,c]},Ta=i=>[!0,"true",1,"yes","on"].includes(i),de=i=>i===""||(i==null?void 0:Ta(i)),me=(i,e,t)=>$(a=>{i(a),t(n=>({...n,[e]:a}))},[i,e,t]),Va=(i,e,t,a,n)=>{const[o,r]=J(t.sortOn,e,{suffix:"-sortOn"}),[l,u]=J(de(t.descending),e,{suffix:"-descending",read:de}),[s,c]=J(t.groupOn,e,{suffix:"-groupOn"}),[m,b]=J(de(t.groupOnDescending),e,{suffix:"-groupOnDescending",read:de}),p=F(()=>i.find(g=>g.name===o),[i,o]),z=F(()=>i.find(g=>g.name===s),[i,s]),h={groupOn:s,setGroupOn:me(c,"groupOn",a),groupOnDescending:m,setGroupOnDescending:me(b,"groupOnDescending",a),sortOn:o,setSortOn:me(r,"sortOn",a),descending:l,setDescending:me(u,"descending",a),columns:i},v=F(()=>h,Object.values(h)),_=$(g=>{r(g.sortOn),c(g.groupOn),u(g.descending),b(g.groupOnDescending)},[]);return M(()=>void(n.current=_),[]),{...v,sortAndGroup:v,groupOnColumn:z,sortOnColumn:p}},Qe=Ct();customElements.define("sort-and-group-provider",Qe.Provider);customElements.define("sort-and-group-consumer",O(({render:i})=>i(Le(Qe)),{useShadowDOM:!1}));const Pa=({data:i,columns:e,groupOnColumn:t,filters:a,setFilterState:n,sortAndGroup:{sortOn:o,setSortOn:r,descending:l,setDescending:u}={}})=>wt(e,s=>s.name,s=>[d`<div
				class="cell ${s.headerCellClass} header-cell"
				part="cell header-cell cell-${s.name} header-cell-${s.name}"
				?hidden="${s===t}"
				title="${s.headerTitleFn(s)}"
				name="${s.name}"
			>
				${s.renderHeader(s,a[s.name]??{},c=>n(s.name,c),s.source(s,i))}
				${k(!s.noSort,()=>Ot({on:o,setOn:r,descending:l,setDescending:u,column:s}))}
			</div>`,d`<cosmoz-omnitable-resize-nub
				.column="${s}"
				name="${s.name}"
			></cosmoz-omnitable-resize-nub>`]),Ra=({columns:i,settingsConfig:e,hideSelectAll:t,...a})=>{const n=Le(Qe);return d`
		${k(i,o=>Pa({columns:o,sortAndGroup:n,...a}))}
		${k(!t,()=>d` <cosmoz-omnitable-settings
					.config=${e}
					part="settings"
				></cosmoz-omnitable-settings>`)}
	`};customElements.define("cosmoz-omnitable-header-row",O(Ra,{useShadowDOM:!1}));const Na=K`
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
`,Ba=({column:i})=>d`
	<div class="label" title="${i.title}" part="item-expand-label">
		${i.title}
	</div>
	<div class="value" part="item-expand-value">
		<slot></slot>
	</div>
`;customElements.define("cosmoz-omnitable-item-expand-line",O(Ba,{styleSheets:[De(Na)]}));const Ga=({columns:i,item:e,selected:t,expanded:a,groupOnColumn:n})=>oi(i,o=>d`<cosmoz-omnitable-item-expand-line
				.column=${o}
				?hidden=${o===n}
				exportparts="item-expand-label, item-expand-value"
				>${o.renderCell(o,{item:e,selected:t,expanded:a})}</cosmoz-omnitable-item-expand-line
			>`);customElements.define("cosmoz-omnitable-item-expand",O(Ga,{useShadowDOM:!1}));const Ha=(i,e,t)=>i.editable?i.renderEditCell(i,e,t(i,e.item)):i.renderCell(i,e),ja=({columns:i,groupOnColumn:e,item:t,index:a,selected:n,expanded:o,onItemChange:r})=>wt(i,l=>l.name,l=>d`<div
				class="cell itemRow-cell ${l.cellClass??""}"
				part="cell itemRow-cell cell-${l.name} itemRow-cell-${l.name}"
				?hidden="${l===e}"
				?editable="${l.editable}"
				title="${l.cellTitleFn(l,t)}"
				name="${l.name}"
			>
				${Ha(l,{item:t,index:a,selected:n,expanded:o},r)}
			</div>`);customElements.define("cosmoz-omnitable-item-row",O(ja,{useShadowDOM:!1}));const Vt=K`
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
`,Wa=K`
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

	${Vt}

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
`,bt=i=>{const e=i.replace(/"/gu,'""');return e.search(/("|,|\n)/gu)>=0?'"'+e+'"':i},Ua=(i,e,t)=>{const o=i.map(l=>bt(l.title)).join(";")+`
`,r=e.map(l=>i.map(u=>{const s=u.getString(u,l);return s==null?"":bt(String(s))}).join(";")+`
`);r.unshift(o),St(new File(r,t,{type:"text/csv;charset=utf-8"}))},Ka=(i,e)=>{const t=i.map(n=>n.title),a=e.map(n=>i.map(o=>{const r=o.toXlsxValue(o,n);return r??""}));return a.unshift(t),a},Ja=(i,e,t,a)=>{const n=Ka(i,e),o=new ri(t).addSheetFromData(n,a).generate();St(new File([o],t,{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}))},Xa=({columns:i,selectedItems:e,csvFilename:t,xlsxFilename:a,xlsxSheetname:n,topPlacement:o})=>d`<cosmoz-bottom-bar
		id="bottomBar"
		?active=${!Te(e.length)}
		part="bottomBar"
		exportparts="bar: bottomBar-bar, info: bottomBar-info, buttons: bottomBar-buttons"
	>
		<slot name="info" slot="info">
			${A("{count} selected item",{count:e.length})}
		</slot>
		<slot name="actions" id="actions"></slot>
		<!-- These slots are needed by cosmoz-bottom-bar
        as it might change the slot of the actions to distribute them in the menu -->
		<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
		<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
		<cosmoz-dropdown-menu part="extra" slot="extra" .placement=${o}>
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
				@click=${()=>Ua(i,e,t)}
			>
				${A("Save as CSV")}
			</button>
			<button
				@click=${()=>Ja(i,e,a,n)}
			>
				${A("Save as XLSX")}
			</button>
			<slot name="download-menu"></slot>
		</cosmoz-dropdown-menu>
	</cosmoz-bottom-bar>`,Qa=({allSelected:i,onAllCheckboxChange:e,sortAndGroup:t,dataIsValid:a,data:n,columns:o,filters:r,groupOnColumn:l,setFilterState:u,settingsConfig:s,hideSelectAll:c})=>d`<sort-and-group-provider .value=${t}>
		<div class="header" id="header" part="header">
			${k(!c,()=>d`<input
						class="checkbox all"
						type="checkbox"
						.checked=${i}
						@input=${e}
						?disabled=${!a}
						part="all"
					/>`)}
			${k(c,()=>d` <cosmoz-omnitable-settings
						.newLayout="${!0}"
						.config=${s}
					></cosmoz-omnitable-settings>`)}

			<cosmoz-omnitable-header-row
				part="headerRow"
				.data=${n}
				.columns=${o}
				.filters=${r}
				.groupOnColumn=${l}
				.setFilterState=${u}
				.settingsConfig=${s}
				.hideSelectAll=${c}
			></cosmoz-omnitable-header-row>
		</div>
	</sort-and-group-provider>`,Ya=$t`
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
`,Za=({settingsConfig:i})=>{const{columns:e,collapsed:t}=i,a=e.filter(n=>!t.some(o=>o.name===n.name));return d`<div class="skeleton">
		${Array.from({length:5},()=>d`<div>
					<div class="checkbox"></div>
					${a.map(n=>d`<div
								class="cell"
								part=${`cell-${n.name}`}
								name=${n.name}
							></div>`)}
				</div>`)}
	</div>`};customElements.define("cosmoz-omnitable-skeleton",O(Za,{styleSheets:[Ya]}));const en=(i,e)=>{const{settingsConfig:t}=i,{processedItems:a,dataIsValid:n,filterIsTooStrict:o,loading:r,displayEmptyGroups:l,compareItemsFn:u,setSelectedItems:s,renderItem:c,renderGroup:m,error:b}=e;return d`${k(!r&&!n&&!b,()=>d`<div class="tableContent-empty">
					<slot name="empty-set-message">
						${Ze({width:"96px",height:"96px",styles:"margin-right: 24px; fill: currentColor;"})}
						<div class="tableContent-empty-message">
							<h3>${A("Working set empty")}</h3>
							<p>${A("No data to display")}</p>
						</div>
					</slot>
				</div>`)}
		${k(o,()=>d`<div class="tableContent-empty">
					${Ze({width:"96px",height:"96px",styles:"margin-right: 24px; fill: currentColor;"})}
					<div>
						<h3>${A("Filter too strict")}</h3>
						<p>${A("No matches for selection")}</p>
					</div>
				</div>`)}
		${k(r&&!a.length,()=>d`<div class="tableContent-empty overlay">
					<cosmoz-omnitable-skeleton
						.settingsConfig=${t}
					></cosmoz-omnitable-skeleton>
				</div>`)}
		${k(r&&a.length,()=>d`<div class="tableContent-empty overlay spinner">
					<cz-spinner></cz-spinner>
				</div>`)}
		${k(b,()=>d`<div class="tableContent-empty overlay">
					${li({width:"96px",height:"96px",styles:"margin-right: 24px; fill: currentColor;"})}
					<div class="tableContent-empty-message">
						<h3>${A("Error loading data")}</h3>
						<p>${b.message}</p>
					</div>
				</div>`)}
		<div class="tableContent-scroller" id="scroller" part="scroller">
			<cosmoz-grouped-list
				id="groupedList"
				.data=${a}
				@selected-items-changed=${p=>s(p.detail.value)}
				.displayEmptyGroups=${l}
				.compareItemsFn=${u}
				.renderItem=${c}
				.renderGroup=${m}
			></cosmoz-grouped-list>
			<slot name="extraContent"></slot>
		</div>`},tn=K`
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
	${Vt}
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
`,an=K`
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
`,pe=i=>{const e=parseInt(i,10);return isFinite(e)?e:void 0},nn=i=>{const{config:e}=i,{settings:t,setSettings:a,collapsed:n}=e,o=Ve({collapsed:n,settings:t.columns,setSettings:$(r=>a(l=>({...l,columns:r})),[a])});return{...e,onDown:$(r=>{r.target.closest(".pull")&&(o.handle=r.currentTarget)},[o]),onDragStart:$(r=>{const{target:l}=r,u=pe(l.dataset.index);if(!o.handle?.contains(l)||u==null)return r.preventDefault();o.handle=null,r.dataTransfer.effectAllowed="move",r.dataTransfer.setData("omnitable/sort-index",u),r.dataTransfer.setData("text/plain",u),setTimeout(()=>l.classList.add("drag"),0),l.addEventListener("dragend",s=>s.target.classList.remove("drag"),{once:!0})},[o]),onDragEnter:$(r=>{const l=r.currentTarget;l===r.target&&(r.preventDefault(),r.dataTransfer.dropEffect="move",l.classList.add("dragover"))},[]),onDragOver:$(r=>{r.preventDefault(),r.currentTarget.classList.add("dragover")},[]),onDragLeave:$(r=>{const l=r.currentTarget;l.contains(r.relatedTarget)||l.classList.remove("dragover")},[]),onDrop:$(r=>{const l=pe(r.dataTransfer.getData("omnitable/sort-index")),u=pe(r.currentTarget.dataset.index),{settings:s,setSettings:c}=o;r.currentTarget.classList.remove("dragover"),r.preventDefault();const m=s.slice();m.splice(u+(l>=u?0:-1),0,m.splice(l,1)[0]),c(m)},[o]),onToggle:$(r=>{const{settings:l,setSettings:u}=o,s=l.map(m=>({...m,disabled:m.disabled||o.collapsed?.some(b=>b.name===m.name)})),c=pe(r.target.closest("[data-index]")?.dataset.index);s.splice(c,1,{...l[c],disabled:!r.target.checked,priority:r.target.checked?l.reduce((m,b)=>Math.max(m,b.priority),0)+1:l[c].priority}),u(s)},[o])}},on=[si({apply({availableHeight:i,elements:e}){Object.assign(e.floating.style,{maxHeight:`${Math.max(0,i)}px`})}}),...ui],rn=({onDragStart:i,onDragEnter:e,onDragOver:t,onDragLeave:a,onDrop:n,onDown:o,onToggle:r,collapsed:l,filters:u})=>(s,c)=>{const m=!!l?.find(p=>p.name===s.name),b=!s.disabled&&!m;return d` <div
			class="item"
			data-index=${c}
			@mousedown=${o}
			draggable="true"
			@dragstart=${i}
			@dragenter=${e}
			@dragover=${t}
			@dragleave=${a}
			@drop=${n}
		>
			<button class="pull">${Ea}</button>
			<label class="title" ?has-filter=${!Te(u[s.name]?.filter)}
				>${s.title}</label
			>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${b}
				@click=${r}
				.indeterminate=${m}
			/>
		</div>`},ln=i=>{const{settings:e,settingsId:t,onSave:a,onReset:n,hasChanges:o,opened:r,setOpened:l,...u}=nn(i);return d` <div class="headline">
			${A("Sort and filter")}
			<button
				class="close"
				@click=${s=>{const c=s.currentTarget;c?.focus(),c?.blur()}}
			>
				${ka}
			</button>
		</div>

		<div class="contents">
			<div
				class="heading"
				?data-opened=${r.columns}
				@click=${()=>l(s=>({...s,columns:!s.columns}))}
				part="columns columns-heading"
			>
				${A("Columns")} ${Ae}
			</div>
			<cosmoz-collapse
				?opened="${r.columns}"
				part="columns columns-content"
			>
				<div class="list">${e.columns?.map(rn(u))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${r.sort}
				@click=${()=>l(s=>({...s,sort:!s.sort}))}
			>
				${A("Sort on")} ${Ae}
			</div>
			<cosmoz-collapse ?opened=${r.sort}> ${Oa()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${r.group}
				@click=${()=>l(s=>({...s,group:!s.group}))}
				part="groups groups-heading"
			>
				${A("Group on")} ${Ae}
			</div>
			<cosmoz-collapse ?opened=${r.group} part="groups groups-heading"
				>${Ma()}</cosmoz-collapse
			>
		</div>

		${k(t,()=>d`<div class="buttons">
					<button
						class="button reset"
						@click=${n}
						?disabled=${!o}
					>
						${A("Reset")}
					</button>
					<button class="button" @click=${a} ?disabled=${!o}>
						${A("Save")}
					</button>
				</div>`)}`};customElements.define("cosmoz-omnitable-settings-ui",O(ln,{styleSheets:[De(tn)]}));const sn=({config:i,newLayout:e})=>d`
	<cosmoz-dropdown
		.placement="${e?"bottom-start":"bottom-end"}"
		.middleware="${on}"
	>
		${k(e,()=>d`<div class="headerDots" slot="button">...</div>`,()=>d` <svg
					viewBox="0 0 24 24"
					width="24"
					slot="button"
					fill="currentColor"
				>
					<circle cx="10" cy="18" r="2"></circle>
					<circle cx="10" cy="12" r="2"></circle>
					<circle cx="10" cy="6" r="2"></circle>
				</svg>`)}
		${k(i?.badge,()=>d`<div class="badge" slot="button"></div>`)}
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${i}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`;customElements.define("cosmoz-omnitable-settings",O(sn,{styleSheets:[De(an)]}));const xe=["sortOn","descending","groupOn","groupOnDescending"],ge=i=>e=>typeof e=="object"&&e!==null&&"name"in e&&e.name===i,un=(i=[],e=[],t=[])=>{const a=e.filter(r=>i.some(ge(r.name))),n=i.filter(r=>r.name!=null&&!e.some(ge(r.name))&&!t.some(ge(r.name))),o=t.filter(r=>!e.some(ge(r.name)));return[...a,...o.flatMap(r=>{const l=i.find(u=>u.name===r.name);return l?{...r,title:l.title??r.title??"",minWidth:parseInt(l.minWidth??"0",10)}:[]}),...n.map(r=>{const{name:l,title:u,priority:s,minWidth:c,width:m,flex:b}=r;return{name:l??"",title:u??"",priority:s??0,minWidth:parseInt(c??"0",10),width:parseInt(m??"0",10),flex:parseInt(b??"0",10)}})]},cn=(i,e)=>({...e,...Ee(Array.from(xe))(i),columns:i.columns?.map(Ee(["name","priority","width","flex","disabled"]))}),dn=({columns:i,settings:e,savedSettings:t,initial:a})=>({...Object.fromEntries(xe.flatMap(o=>a?.[o]!=null?[[o,a[o]]]:[])),...t?Ee(Array.from(xe))(t):{},...e,columns:un(i,e?.columns,t?.columns)}),mn=({prefix:i="omnitable-"}={})=>({write:async(t,a)=>{const n=i+t;try{a?localStorage.setItem(n,JSON.stringify(a)):localStorage.removeItem(n)}catch(o){console.error(o)}},read:async t=>{if(t)try{const a=localStorage.getItem(i+t);return a==null?void 0:JSON.parse(a)}catch(a){console.error(a)}}}),pn=Ct(mn),gn=()=>{const i=Le(pn);return F(()=>i(),[i])},bn=(i,e,t,a)=>{const[n,o]=T(),{read:r,write:l}=gn();return M(async()=>{i&&o(await r(i))},[i,r]),{settingsId:i,savedSettings:n,onSave:$(async()=>{if(!i)return;const u=cn(e,n);await l(i,u),t(),o(u)},[e,n]),onReset:$(async u=>{t(),u.shiftKey&&(await l(i),o()),a?.()},[a]),hasChanges:e!=null}},fn=({settingsId:i,host:e})=>{const t=F(()=>Object.fromEntries(xe.map(h=>[h,e[h]])),[]),a=Pe(),n=$(()=>{a.current?.(t)},[t]),[o,r]=T(),[l,u]=T({columns:!0,sort:!0}),{savedSettings:s,...c}=bn(i,o,r,n),{enabledColumns:m}=e,b=Ei(e,{enabledColumns:m}),p=F(()=>dn({columns:b,settings:o,savedSettings:s,initial:t}),[b,o,s]),z=F(()=>p.columns.map(h=>b.find(v=>v.name===h.name)).filter(Boolean),[b,...p.columns.map(h=>h.name)]);return{...c,opened:l,setOpened:u,settings:p,columns:z,setSettings:r,resetRef:a}},ft=i=>Number.isFinite(i)?i:0,hn=(i,e)=>{const t=[];let[a,n]=i.reduce(([c,m],{width:b,flex:p})=>[c+b,m+p],[0,0]),o=e-a,r=ft(o/n),l=0,u=0,s=0;for(let c=0;c<i.length;c++){const{width:m,minWidth:b,flex:p}=i[c],z=o>=0?r*p:m*o/a;if(b>m+z){l+=m,u+=b,s+=p,t[c]=b;continue}if(p===0){l+=m,u+=m,t[c]=m;continue}}a-=l,o=e-u-a,n-=s,r=ft(o/n);for(let c=0;c<i.length;c++){if(t[c]!=null)continue;const{width:m,flex:b}=i[c],p=o>=0?r*b:m*o/a;t[c]=m+p}return t},ye=Symbol("index"),xn=(i,e)=>{if(typeof i.findLastIndex=="function")return i.findLastIndex(e);for(let t=i.length-1;t>=0;t--)if(e(i[t],t,i))return t;return-1},yn=(i,e)=>{const t=xn(i,r=>r!=null&&r>0),a=(r,l)=>`.cell[name="${r}"], cosmoz-omnitable-skeleton::part(cell-${r}){width: ${Math.floor(l)}px;padding: 0 min(3px, ${l/2}px)}`,n=r=>`cosmoz-omnitable-resize-nub[name="${r}"]{display:none}`,o=r=>`cosmoz-omnitable-resize-nub[name="${r}"], .cell[name="${r}"]{display:none}`;return e.map((r,l)=>{const u=i[l];if(u==null||u===0)return o(r.name);const s=a(r.name,u);return l===t?`${s}
${n(r.name)}`:s}).join(`
`)},Pt=(i,e,t)=>{const a=i.filter(l=>!l.hidden),n=a.reduce((l,{width:u})=>l+u,0);if(a.length>1&&n>e)return Pt(a.slice(1),e,t);const o=a.reduce(([l,u],s,c)=>[Math.max(l,s.index),s.index>l?c:u],[-1,-1])[1];return o!==-1&&(a[o].flex=1),hn(a,e).reduce((l,u,s)=>(l[a[s].index]=u,l),new Array(t).fill(void 0))},vn=(i,e)=>i.length===0?".cell {display: none;}":yn(i,e),$n=({host:i,canvasWidth:e,layout:t,setSettings:a})=>{const n=Pe();n.current=o=>a(r=>{const l=r.columns,{detail:{newWidth:u,column:s}}=o,c=l.findIndex(p=>p.name===s.name),m=[],b=l.reduce((p,z)=>Math.max(p,z.priority),-1/0);for(let p=0;p<t.length;p++)if(m[p]={...l[p]},p<c&&t[p]&&(m[p].width=t[p],m[p].flex=0,m[p].priority=b),p===c){const z=t.reduce((h,v,_)=>_<c&&v?h-v:h,e);m[p].width=Math.min(z,Math.max(u,l[p].minWidth)),m[p].flex=0,m[p].priority=b}return{...r,columns:m}}),M(()=>{const o=r=>n.current?.(r);return i.addEventListener("column-resize",o),()=>i.removeEventListener("column-resize",o)},[])},Cn=(i,e)=>M(()=>{const t=([n])=>{n.contentRect?.width!==0&&requestAnimationFrame(()=>e(n.contentRect?.width-20-44-24))},a=new ResizeObserver(t);return a.observe(i),()=>a.unobserve(i)},[]),wn=i=>{const[e,t]=T(()=>i.getBoundingClientRect().width);return Cn(i,t),e},Sn=(i,e)=>{const t=F(()=>{let a=!1,n;const o=()=>{if(!a)return;n=requestAnimationFrame(o),i()&&(a=!1)};return{start:()=>{a=!0,cancelAnimationFrame(n),n=requestAnimationFrame(o)},stop:()=>{a=!1,cancelAnimationFrame(n)}}},[]);M(()=>{t.start()},e),M(()=>()=>t.stop(),[])},zn=(i=0,e=0)=>Math.abs(i-e)<.1,qn=(i,e=1.9,t=ci)=>{const a=Ve({target:i}),n=$(()=>{if(a.tween||(a.tween=a.target),a.target.every((o,r)=>a.tween[r]===o))return t(a.tween),!0;a.tween=a.target.map((o,r)=>zn(a.tween[r],o)?o:(a.tween[r]??0)+((o??0)-(a.tween[r]??0))/e||0),t(a.tween)},[]);Sn(n,[i])},An=({canvasWidth:i,groupOnColumn:e,config:t,miniColumn:a})=>F(()=>{if(!Array.isArray(t)||i==null||i===0)return[];const n=t.map((o,r)=>({minWidth:o.minWidth,width:o.width,flex:o.flex,priority:o.priority,name:o.name,index:r,hidden:o.name===e?.name||o.disabled})).map(o=>a?{...o,hidden:a.name!==o.name}:o).sort(({index:o,priority:r},{index:l,priority:u})=>r===u?l-o:r-u);return Pt(n,i,n.length)},[i,e,t]),Fn=({host:i,canvasWidth:e,columns:t})=>{const a=i.miniBreakpoint??480,n=F(()=>e<=a,[e,a]),o=F(()=>n?t?.filter(s=>s.mini!=null).sort((s,c)=>(s.mini??0)-(c.mini??0)):[],[t,n]),[r,...l]=o??[],u=!!r;return M(()=>{i.toggleAttribute("mini",u)},[u]),{isMini:u&&n,miniColumn:r,miniColumns:l}},_n=i=>{const e=F(()=>new CSSStyleSheet,[]);return M(()=>{i.shadowRoot.adoptedStyleSheets=[...i.shadowRoot.adoptedStyleSheets,e]},[]),e},kn=({host:i,columns:e,settings:t,setSettings:a,resizeSpeedFactor:n,sortAndGroupOptions:o})=>{const r=wn(i),{isMini:l,miniColumn:u,miniColumns:s}=Fn({host:i,canvasWidth:r,columns:e}),{groupOnColumn:c}=o,m=An({canvasWidth:r,groupOnColumn:c,miniColumn:u,config:t.columns}),b=_n(i),p=F(()=>t.columns.reduce((h,v,_)=>m[_]!=null||v.name===c?.name||v.disabled?h:[...h,e.find(g=>g.name===v.name)],[]),[e,t,m]),z=Ve({columns:t.columns});return qn(m,n,h=>{const v=vn(h,z.columns);b.replace(v)}),$n({host:i,canvasWidth:r,layout:m,setSettings:h=>a(h(t))}),{isMini:l,collapsedColumns:p,miniColumns:s}},En=({host:i,...e})=>{const{csvFilename:t="omnitable.csv",xlsxFilename:a="omnitable.xlsx",xlsxSheetname:n="Omnitable",topPlacement:o="top-end"}=i;return{csvFilename:t,xlsxFilename:a,xlsxSheetname:n,topPlacement:o,...e}},In=({host:i,selectedItems:e,data:t,sortAndGroupOptions:a,collapsedColumns:n,settings:o,filterFunctions:r,settingS:l,filters:u,...s})=>{const c=t&&t.length>0&&e.length===t.length,m=h=>{h.target.checked?i.shadowRoot.querySelector("#groupedList").selectAll():i.shadowRoot.querySelector("#groupedList").deselectAll()},{groupOnColumn:b}=a,p=F(()=>[b,...n,...o.columns.filter(h=>h.disabled)].some(h=>h&&Object.keys(r).includes(h.name)),[r,o,n]),z=F(()=>({...l,collapsed:n,badge:p,filters:u}),[l,n,p,u]);return M(()=>{const h=i.shadowRoot.querySelector("#tableContent"),v=new ResizeObserver(_=>requestAnimationFrame(()=>{i.style.setProperty("--ot-height",_[0]?.contentRect.height+"px")}));return v.observe(h),()=>v.unobserve(h)},[]),{allSelected:c,onAllCheckboxChange:m,data:t,settingsConfig:z,filters:u,groupOnColumn:b,sortAndGroup:a.sortAndGroup,...s}},Rt=d`
	<svg
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
	>
		<g>
			<path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
		</g>
	</svg>
`,Mn=i=>i?"groupRow groupRow-folded":"groupRow",On=({item:i,index:e})=>t=>k(t?.length>0,()=>d`
				<div class="itemRow-minis" part="item-minis">
					${t.map(a=>d`<div
								class="itemRow-mini"
								part="item-mini item-mini-${a.name}"
							>
								${(a.renderMini??a.renderCell)(a,{item:i,index:e})}
							</div>`)}
				</div>
			`),Ln=({columns:i,collapsedColumns:e,miniColumns:t,onItemClick:a,onCheckboxChange:n,dataIsValid:o,groupOnColumn:r,onItemChange:l,rowPartFn:u})=>(s,c,{selected:m,expanded:b,toggleCollapse:p})=>d`
		<div
			?selected=${m}
			part="${["itemRow",`itemRow-${s[ye]}`,u?.(s,c)].filter(Boolean).join(" ")}"
			.dataIndex=${s[ye]}
			.dataItem=${s}
			class="itemRow"
			@click=${a}
		>
			<div class="itemRow-wrapper" part="itemRow-wrapper">
				<input
					class="checkbox"
					type="checkbox"
					part="checkbox"
					.checked=${m}
					.dataItem=${s}
					@input=${n}
					?disabled=${!o}
				/>
				<cosmoz-omnitable-item-row
					part="itemRow-inner"
					.columns=${i}
					.index=${c}
					.selected=${m}
					.expanded=${b}
					.item=${s}
					.groupOnColumn=${r}
					.onItemChange=${l}
				>
				</cosmoz-omnitable-item-row>
				<button
					class="expand"
					?hidden="${Te(e.length)}"
					?aria-expanded="${b}"
					@click="${p}"
				>
					${Rt}
				</button>
			</div>
			${On({item:s,index:c})(t)}
		</div>
		<cosmoz-omnitable-item-expand
			.columns=${e}
			.item=${s}
			.index=${c}
			?selected=${m}
			?expanded=${b}
			.groupOnColumn=${r}
			part="item-expand"
		>
		</cosmoz-omnitable-item-expand>
	`,Dn=({onCheckboxChange:i,dataIsValid:e,groupOnColumn:t})=>(a,n,{selected:o,folded:r,toggleFold:l})=>d` <div
			class="${Mn(r)}"
			part="groupRow groupRow-${a[ye]}"
		>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${o}
				.dataItem=${a}
				@input=${i}
				?disabled=${!e}
			/>
			<h3 class="groupRow-label">
				<div><span>${t?.title}</span>: &nbsp;</div>
				<cosmoz-omnitable-group-row
					.column=${t}
					.item=${a.items?.[0]}
					.selected=${o}
					.folded=${r}
					.group=${a}
				></cosmoz-omnitable-group-row>
			</h3>
			<div class="groupRow-badge">${a.items.length}</div>
			<button class="expand" ?aria-expanded="${r}" @click=${l}>
				${Rt}
			</button>
		</div>`,Tn=({host:i,error:e,dataIsValid:t,processedItems:a,columns:n,collapsedColumns:o,miniColumns:r,sortAndGroupOptions:l,rowPartFn:u,...s})=>{const{loading:c=!1,displayEmptyGroups:m=!1,compareItemsFn:b}=i,p=Pe({shiftKey:!1,ctrlKey:!1}),z=$(g=>{const q=g.target.dataItem,f=g.target.checked;p.current.shiftKey?i.shadowRoot.querySelector("#groupedList").toggleSelectTo(q,f):p.current.ctrlKey?(g.target.checked=!0,i.shadowRoot.querySelector("#groupedList").selectOnly(q)):i.shadowRoot.querySelector("#groupedList").toggleSelect(q,f),g.preventDefault(),g.stopPropagation()},[]);M(()=>{const g=({shiftKey:q,ctrlKey:f})=>{p.current={shiftKey:q,ctrlKey:f}};return window.addEventListener("keydown",g),window.addEventListener("keyup",g),()=>{window.removeEventListener("keydown",g),window.removeEventListener("keyup",g)}},[]);const h=$(g=>{const q=g.composedPath();q.slice(0,q.indexOf(g.currentTarget)).find(y=>y.matches?.("a, .checkbox, .expand"))||i.dispatchEvent(new window.CustomEvent("omnitable-item-click",{bubbles:!0,composed:!0,detail:{item:g.currentTarget.dataItem,index:g.currentTarget.dataIndex}}))},[]),{groupOnColumn:v}=l,_=$((g,q)=>f=>Ii(i,g,q,f),[]);return{...s,processedItems:a,dataIsValid:t,filterIsTooStrict:t&&a.length<1,loading:c,compareItemsFn:b,displayEmptyGroups:m,error:e,renderItem:F(()=>Ln({columns:n,collapsedColumns:o,miniColumns:r,onItemClick:h,onCheckboxChange:z,dataIsValid:t,groupOnColumn:v,onItemChange:_,rowPartFn:u}),[n,o,h,z,t,v,_,u]),renderGroup:F(()=>Dn({onCheckboxChange:z,dataIsValid:t,groupOnColumn:v}),[z,t,v])}},Vn=(i,e)=>{if(i===e)return 0;if(i==null)return-1;if(e==null)return 1;const t=typeof i,a=typeof e;return t==="object"&&a==="object"?i.toString()<e.toString()?-1:1:t==="number"&&a==="number"?i-e:t==="string"&&a==="string"?i<e?-1:1:t==="boolean"&&a==="boolean"?i?-1:1:(console.warn("unsupported sort",t,i,a,e),0)},Fe=(i,e)=>(t,a)=>Vn(i(t),i(a))*(e?-1:1),Pn=i=>i.replace(/([a-z0-9])([A-Z])/gu,"$1-$2").toLowerCase(),ht=(i,e)=>{!i||!e||Object.entries(e).forEach(([t,a])=>{i[N].__ownChange=!0,i[N][t]=a,i[N].__ownChange=!1,i[N].dispatchEvent(new CustomEvent(`${Pn(t)}-changed`,{bubbles:!0,detail:{value:a}}))})},_e=(i,e)=>Object.assign(i,{[ye]:e}),be=Symbol("unparsed"),Rn=({data:i,columns:e,hashParam:t,sortAndGroupOptions:a,noLocalSort:n,noLocalFilter:o})=>{const{groupOnColumn:r,groupOnDescending:l,sortOnColumn:u,descending:s}=a,c=$(([f,y])=>{const x=e.find(({name:C})=>C===f);return x==null?[f,void 0]:[f,y.filter&&x.serializeFilter(x,y.filter)]},[e]),m=$(([f,y])=>{const x=e.find(({name:S})=>S===f);if(x==null)return[f,{[be]:y}];const C={filter:x.deserializeFilter(x,y)};return ht(x,C),[f,C]},[e]),[b,p]=J({},t,{multi:!0,suffix:"-filter--",write:c,read:m}),z=$((f,y)=>p(x=>{const C=$e(y,x[f]);return ht(e.find(S=>S.name===f),C),{...x,[f]:{...x[f],...C}}}),[e,p]),h=F(()=>Object.values(b).map(f=>f.filter),[b]),v=F(()=>Object.fromEntries(e.map(f=>[f.name,!f.noLocalFilter&&f.getFilterFn(f,b[f.name]?.filter)]).filter(([,f])=>!!f)),[e,...h]),_=F(()=>!Array.isArray(i)||i.length===0?[]:Object.entries(v).length===0||o?i.slice():i.filter(f=>Object.values(v).every(y=>y(f))),[i,v,o]),g=F(()=>{if(!n&&!r&&u!=null&&u.sortOn!=null)return _.slice().sort(Fe(f=>u.getComparableValue({...u,valuePath:u.sortOn},f),s));if(r!=null&&r.groupOn!=null){const f=_.reduce((y,x)=>{const C=r.getComparableValue({...r,valuePath:r.groupOn},x);if(C===void 0)return y;let S=y.find(D=>D.id===C);return S?(S.items.push(x),y):(S={id:C,name:C,items:[x]},[...y,S])},[]);return f.sort(Fe(y=>r.getComparableValue({...r,valuePath:r.groupOn},y.items[0]),l)),!u||n?f:f.filter(y=>Array.isArray(y.items)).map(y=>(y.items.sort(Fe(x=>u.getComparableValue({...u,valuePath:u.sortOn},x),s)),y))}return _},[_,r,l,u,s,n]),q=F(()=>{let f=0,y=0;const x=[];return g.forEach(C=>{if(Array.isArray(C.items)){_e(C,y++),C.items.forEach(S=>{_e(S,f++),x.push(S)});return}return _e(C,f++),x.push(C)},[]),x},[g]);return M(()=>{p(f=>Object.values(f).some(x=>x[be]!=null)?Object.fromEntries(Object.entries(f).map(([x,C])=>C[be]==null?[x,C]:m([x,C[be]]))):f)},[m]),{processedItems:g,visibleData:q,filters:b,filterFunctions:v,setFilterState:z}},Nn=i=>{const e=a=>{const n=i.data.indexOf(a);if(n<0)return null;const o=i.data.splice(n,1);if(i.data=i.data.slice(),Array.isArray(o)&&o.length>0)return o[0]},t=(a,n)=>{i.data.splice(a,1,n),i.data=i.data.slice()};return{removeItem:e,removeItems(a){const n=[];for(let o=a.length-1;o>=0;o-=1){const r=i.removeItem(a[o]);r!=null&&n.push(r)}return n},replaceItemAtIndex:t,replaceItem(a,n){const o=i.data.indexOf(a);if(o>-1)return t(o,n)},selectItem(a){i.shadowRoot.querySelector("#groupedList").select(a)},selectAll(){i.shadowRoot.querySelector("#groupedList").selectAll()},deselectAll(){i.shadowRoot.querySelector("#groupedList").deselectAll()},deselectItem(a){i.shadowRoot.querySelector("#groupedList").deselect(a)},isItemSelected(a){return i.shadowRoot.querySelector("#groupedList").isItemSelected(a)}}},Bn=({host:i,visibleData:e,filters:t,...a})=>{const{setFilterState:n}=a,o=F(()=>Nn(i),[]);Ie(a,Object.values(a)),Ie(o,Object.values(o)),M(()=>{const l=u=>n(u.detail.name,s=>({...s,...u.detail.state}));return i.addEventListener("legacy-filter-changed",l),()=>i.removeEventListener("legacy-filter-changed",l)},[]),R("visibleData",e),R("sortedFilteredGroupedItems",a.sortedFilteredGroupedItems),R("selectedItems",a.selectedItems),R("sortOn",a.sortOn),R("descending",a.descending),R("isMini",a.isMini);const r=F(()=>Object.fromEntries(Object.entries(t).filter(([,{filter:l}])=>l!==void 0).map(([l,{filter:u}])=>[l,u])),[t]);R("filters",r,Object.values(r))},Gn=i=>{const{hashParam:e,settingsId:t,data:a,resizeSpeedFactor:n,noLocal:o,noLocalSort:r=o,noLocalFilter:l=o,error:u,rowPartFn:s}=i,c=fn({settingsId:t,host:i}),{settings:m,setSettings:b,columns:p,resetRef:z}=c,h=Va(p,e,m,b,z),{processedItems:v,visibleData:_,filters:g,setFilterState:q,filterFunctions:f}=Rn({data:a,columns:p,hashParam:e,sortAndGroupOptions:h,noLocalSort:r,noLocalFilter:l}),{isMini:y,collapsedColumns:x,miniColumns:C}=kn({host:i,columns:p,settings:m,setSettings:b,resizeSpeedFactor:n,sortAndGroupOptions:h}),S=a&&Array.isArray(a)&&a.length>0,[D,G]=T([]);return Bn({host:i,visibleData:_,sortedFilteredGroupedItems:v,columns:p,filters:g,setFilterState:q,selectedItems:D,isMini:y,...h}),{header:In({host:i,selectedItems:D,sortAndGroupOptions:h,dataIsValid:S,data:a,columns:p,filters:g,collapsedColumns:x,settings:m,filterFunctions:f,settingS:c,setFilterState:q,hideSelectAll:i.hideSelectAll===!0}),list:Tn({host:i,error:u,dataIsValid:S,processedItems:v,setSelectedItems:G,columns:p,collapsedColumns:x,miniColumns:C,sortAndGroupOptions:h,rowPartFn:s}),footer:En({host:i,selectedItems:D,columns:p})}};customElements.define("cosmoz-grouped-list-row",class extends HTMLElement{get item(){return this._item}set item(e){this._item=e,this._render()}get index(){return this._index}set index(e){this._index=e,this._render()}get renderFn(){return this._renderFn}set renderFn(e){this._renderFn=e,this._render()}_render(){this._item==null||this._index==null||this._renderFn==null||ke(this._renderFn(this._item,this._index),this)}});const Hn={group:Symbol("group")},Se=(i,e)=>(e.has(i)||e.set(i,{}),e.get(i)),jn=(i,e)=>!!Se(i,e).expanded,Wn=(i,e)=>!!Se(i,e).folded,Me=i=>i?i.items instanceof Array:!1,Un=i=>{if(!Array.isArray(i)||i.length===0)return;const e=Array.isArray(i[0]?.items);if(!i.every(a=>Array.isArray(a.items)===e))throw new Error("Data must be homogeneous.")},Kn=(i,e,t)=>Array.isArray(i)?(Un(i),i.reduce((n,o)=>{const r=o;return r.items?r.items.length?Se(o,t).folded?n.concat(o):n.concat(o,r.items.map(l=>Object.assign(l,{[Hn.group]:o}))):e?n.concat(o):n:n.concat(o)},[])):void 0,Jn=(i,...e)=>typeof i=="function"?i(...e):i,Xn=(i,e)=>i===e,Qn=()=>{const[i,e]=T(()=>[new WeakMap]);return{setItemState:$((a,n)=>e(([o])=>{const r=Se(a,o);return Object.assign(r,Jn(n,r)),[o]}),[]),state:i[0],signal:i}},Yn=()=>{const{setItemState:i,state:e,signal:t}=Qn(),a=$((o,r)=>{Me(o)&&i(o,l=>({folded:r!==void 0?r:!l.folded}))},[]),n=$((o,r)=>{Me(o)||i(o,l=>({expanded:r!==void 0?!r:!l.expanded}))},[]);return{state:e,signal:t,toggleFold:a,toggleCollapse:n}},Zn=({initial:i,compareItemsFn:e,data:t,flatData:a})=>{const[n,o]=T(i),[r,l]=T(),u=$(g=>n.includes(g),[n]),s=$(g=>g?.items?.every(u)??!1,[u]),c=$(g=>u(g)||s(g),[u,s]),m=$(g=>{const f=g.items??[g];o(y=>[...y,...f.filter(x=>!y.includes(x))]),l(g)},[]),b=$(g=>{const f=g.items??[g];o(y=>y.filter(x=>!f.includes(x))),l(g)},[]),p=$(g=>{o(g.items?.slice()||[g]),l(g)},[]),z=$(()=>{o(t.flatMap(g=>g.items||g)),l(void 0)},[t]),h=$(()=>{o([]),l(void 0)},[]),v=$((g,q=!c(g))=>q?m(g):b(g),[c]),_=$((g,q)=>{if(!a)return;const f=r?a.findIndex(C=>e(C,r)):-1;if(f<0)return v(g,q);const[y,x]=[f,a.indexOf(g)].sort((C,S)=>C-S);a.slice(y,x+1).forEach((C,S,D)=>{S>0&&S<D.length-1&&Me(C)||v(C,q)}),l(g)},[a,e,v]);return M(()=>o(g=>g.length>0&&a?a.filter(q=>g.find(f=>e(q,f))):g),[a]),{selectedItems:n,isItemSelected:u,isGroupSelected:s,isSelected:c,select:m,deselect:b,selectOnly:p,selectAll:z,deselectAll:h,toggleSelect:v,toggleSelectTo:_}},eo={host:{position:"relative",display:"flex",flexDirection:"column"}},to=i=>{const{data:e,renderItem:t,renderGroup:a,displayEmptyGroups:n,compareItemsFn:o=Xn}=i,{toggleFold:r,toggleCollapse:l,state:u,signal:s}=Yn(),c=F(()=>Kn(e,n,u),[e,n,s]),{selectedItems:m,isItemSelected:b,isGroupSelected:p,isSelected:z,select:h,deselect:v,selectOnly:_,selectAll:g,deselectAll:q,toggleSelect:f,toggleSelectTo:y}=Zn({initial:[],compareItemsFn:o,data:e,flatData:c}),x=$((S,D)=>Array.isArray(S.items)?a(S,D,{selected:p(S),folded:Wn(S,u),toggleSelect:G=>f(S,typeof G=="boolean"?G:void 0),toggleFold:()=>r(S)}):t(S,D,{selected:m.includes(S),expanded:jn(S,u),toggleSelect:G=>f(S,typeof G=="boolean"?G:void 0),toggleCollapse:()=>l(S)}),[t,a,m,f,s]);yt(()=>{Object.assign(i.style,eo.host)},[]),R("selectedItems",m);const C={toggleFold:r,toggleCollapse:l,isItemSelected:b,isGroupSelected:p,isSelected:z,select:h,deselect:v,selectOnly:_,selectAll:g,deselectAll:q,toggleSelect:f,toggleSelectTo:y};return Ie(C,Object.values(C)),{renderRow:x,flatData:c}},io=({renderRow:i,flatData:e})=>di({items:e,renderItem:(t,a)=>d`<cosmoz-grouped-list-row
				.item=${t}
				.index=${a}
				.renderFn=${i}
			></cosmoz-grouped-list-row>`}),ao=i=>io(to(i));customElements.define("cosmoz-grouped-list",O(ao,{useShadowDOM:!1}));const no=i=>window.ShadyCSS?.ApplyShim?.transformCssText?.(i)||i,oo=i=>{const{header:e,list:t,footer:a}=Gn(i);return d`
		<style>
			${mi([],()=>no(Wa))}
		</style>

		<div class="mainContainer">
			${Qa(e)}
			<div class="tableContent" id="tableContent">
				${en(e,t)}
			</div>
			${Xa(a)}
		</div>

		<div id="columns">
			<slot id="columnsSlot"></slot>
		</div>
	`};customElements.define("cosmoz-omnitable",class extends O(oo,{observedAttributes:["hash-param","sort-on","group-on","descending","group-on-descending","hide-select-all","settings-id","no-local","no-local-sort","no-local-filter","loading","mini-breakpoint"]}){connectedCallback(){super.connectedCallback(),ze(this,"selectedItems",[]),ze(this,"visibleData",[]),ze(this,"sortedFilteredGroupedItems",[])}});const ve=`
	<slot name="actions" slot="actions"></slot>
`;d(Object.assign([ve],{raw:[ve]}));Oe(Object.assign([ve],{raw:[ve]}));const ro=JSON.parse('[{"_id":"59a7035c3c3f3854a788085c","index":0,"guid":"f3f7f587-575a-4339-8af6-09a46b75d4c8","isActive":true,"balance":"$1,749.46","picture":"http://placehold.it/32x32","age":20,"eyeColor":"brown","name":{"first":"Linda","last":"Rios"},"company":"EXOTERIC","email":"linda.rios@exoteric.io","phone":"+1 (930) 590-3443","address":"357 Beaver Street, Sims, Nebraska, 5471","about":"Esse aliquip mollit amet veniam incididunt minim id. Aliqua enim id aliquip sunt anim. Cupidatat sint enim Lorem velit pariatur ut. Excepteur proident cillum mollit sint incididunt. Consectetur commodo exercitation enim quis sunt ad. Deserunt consectetur commodo laborum exercitation occaecat sunt est eu enim minim mollit adipisicing laboris. Cillum labore ex sit commodo.","registered":"Tuesday, September 2, 2014 8:17 PM","latitude":"-44.454422","longitude":"2.933608","tags":["exercitation","ad","occaecat","exercitation","nulla"],"favoriteFruit":"strawberry"},{"_id":"59a7035cfd448c2124e2d2e1","index":1,"guid":"592b55b6-9cf2-4977-881d-328d332e0c28","isActive":true,"balance":"$3,685.52","picture":"http://placehold.it/32x32","age":34,"eyeColor":"blue","name":{"first":"Shepard","last":"Sykes"},"company":"COMSTAR","email":"shepard.sykes@comstar.biz","phone":"+1 (902) 596-2183","address":"561 Emmons Avenue, Freelandville, South Carolina, 263","about":"Incididunt consequat mollit laborum adipisicing. Veniam occaecat pariatur aliqua nisi adipisicing. Dolor minim cupidatat cupidatat ad officia irure consectetur consectetur nostrud elit laboris enim aliquip est. Enim sunt eu veniam et incididunt dolore et anim laboris cupidatat minim veniam culpa. Laborum mollit nulla aute proident velit sint officia nisi ad amet Lorem in commodo ipsum. Enim ex deserunt ullamco ex anim velit officia culpa ut. Officia consectetur est ipsum ex do fugiat enim nulla.","registered":"Wednesday, March 29, 2017 2:43 PM","latitude":"4.738078","longitude":"78.425259","tags":["commodo","fugiat","veniam","do","ullamco"],"favoriteFruit":"apple"},{"_id":"59a7035c2c3fdc2132b75ce1","index":2,"guid":"9e5a4bc8-cda3-40e4-a7cc-45d60d4b9298","isActive":false,"balance":"$1,111.57","picture":"http://placehold.it/32x32","age":32,"eyeColor":"green","name":{"first":"Dean","last":"Giles"},"company":"PANZENT","email":"dean.giles@panzent.ca","phone":"+1 (987) 442-3557","address":"522 Meadow Street, Chase, Texas, 8590","about":"Ut amet sint est eiusmod deserunt reprehenderit aliquip laborum quis anim qui commodo do anim. Dolor anim ullamco mollit nulla adipisicing incididunt. Culpa laboris voluptate adipisicing adipisicing. Culpa pariatur exercitation ea nisi Lorem quis cillum dolore magna velit dolore aliqua aliqua. Dolore ea sint ex proident consectetur do ullamco elit nostrud nostrud. Nulla aliquip consectetur officia quis minim minim laborum deserunt.","registered":"Wednesday, December 10, 2014 6:10 PM","latitude":"-7.970468","longitude":"-27.062504","tags":["sint","eiusmod","magna","non","consectetur"],"favoriteFruit":"strawberry"},{"_id":"59a7035c755454cd6d25074b","index":3,"guid":"e586cb29-3d23-4f08-b287-1b2907a2df03","isActive":false,"balance":"$1,060.21","picture":"http://placehold.it/32x32","age":34,"eyeColor":"brown","name":{"first":"Celina","last":"French"},"company":"NAMEGEN","email":"celina.french@namegen.name","phone":"+1 (818) 435-3328","address":"499 Matthews Court, Dante, Florida, 9119","about":"Reprehenderit est pariatur dolore culpa amet irure occaecat quis tempor consectetur duis non eiusmod. Et ut quis enim occaecat eu duis anim magna magna amet commodo ut est ullamco. Ex ex ex enim et fugiat deserunt enim. Veniam pariatur est ullamco cupidatat. Esse magna veniam sunt consequat excepteur ad dolor qui do eiusmod. Sit mollit consequat cupidatat deserunt occaecat. Esse ut est minim ut occaecat consequat irure irure adipisicing culpa minim deserunt aliquip.","registered":"Wednesday, February 5, 2014 9:30 PM","latitude":"-56.117732","longitude":"28.272471","tags":["est","dolore","tempor","sint","reprehenderit"],"favoriteFruit":"apple"},{"_id":"59a7035cd142c5382245806d","index":4,"guid":"d349763f-a096-4000-9729-2aa56f48930a","isActive":true,"balance":"$1,941.06","picture":"http://placehold.it/32x32","age":20,"eyeColor":"green","name":{"first":"Jordan","last":"Hays"},"company":"CODACT","email":"jordan.hays@codact.com","phone":"+1 (869) 519-3768","address":"193 Harman Street, Osmond, Louisiana, 2271","about":"Proident aliqua ut ea ipsum. Velit ipsum reprehenderit irure occaecat ut consequat. Officia esse non eiusmod qui.","registered":"Monday, April 28, 2014 1:28 AM","latitude":"-89.041531","longitude":"-160.159812","tags":["quis","deserunt","do","voluptate","occaecat"],"favoriteFruit":"apple"},{"_id":"59a7035c8fff5d3333b4fe39","index":5,"guid":"3d14ae73-ff24-40fe-9053-e7cb2b8a9c15","isActive":false,"balance":"$3,108.51","picture":"http://placehold.it/32x32","age":20,"eyeColor":"green","name":{"first":"Rosa","last":"Roberts"},"company":"EXOSPEED","email":"rosa.roberts@exospeed.co.uk","phone":"+1 (998) 497-3272","address":"769 Barwell Terrace, Orin, New Mexico, 8896","about":"Et aliqua fugiat aliqua qui anim dolore ex nostrud aute cupidatat esse et sit. Labore fugiat aute nostrud laborum eiusmod esse occaecat. Voluptate qui nostrud reprehenderit elit ex commodo ut dolore adipisicing voluptate. Ea adipisicing elit Lorem dolor sint nostrud laborum sunt velit dolor occaecat incididunt. Fugiat et velit et laborum laborum est nulla id est eiusmod et tempor ad officia. Aliquip do voluptate aliquip dolor reprehenderit do qui incididunt deserunt ex dolore. Nulla dolore quis velit esse non nulla minim eiusmod voluptate occaecat labore.","registered":"Thursday, October 16, 2014 6:38 AM","latitude":"37.51662","longitude":"-174.567784","tags":["mollit","dolor","dolore","ad","nisi"],"favoriteFruit":"banana"},{"_id":"59a7035c8de046ebba5f59ee","index":6,"guid":"86adfcea-5212-41f1-a481-50fd039731ad","isActive":false,"balance":"$1,638.80","picture":"http://placehold.it/32x32","age":37,"eyeColor":"brown","name":{"first":"Twila","last":"Richard"},"company":"ANACHO","email":"twila.richard@anacho.info","phone":"+1 (804) 546-2248","address":"431 Paerdegat Avenue, Tioga, Northern Mariana Islands, 9395","about":"Excepteur ipsum nostrud occaecat quis. Excepteur mollit aute sunt sunt. Minim consequat magna ut quis officia sit ut magna excepteur dolor aliquip ad. Velit aliquip eiusmod qui proident dolore voluptate consectetur minim aliquip.","registered":"Monday, October 13, 2014 2:00 PM","latitude":"47.176743","longitude":"49.680616","tags":["et","enim","quis","est","eu"],"favoriteFruit":"banana"},{"_id":"59a7035c38e8215d200313f4","index":7,"guid":"3658b420-9457-45df-95f5-d7c67b20b179","isActive":false,"balance":"$1,077.13","picture":"http://placehold.it/32x32","age":31,"eyeColor":"blue","name":{"first":"Elsie","last":"Dyer"},"company":"INQUALA","email":"elsie.dyer@inquala.org","phone":"+1 (874) 419-3985","address":"800 McKibbin Street, Dola, Utah, 3188","about":"Labore veniam ea velit proident amet exercitation quis ullamco. Labore ad aute aliquip veniam deserunt fugiat. Tempor tempor qui eiusmod sunt aliqua.","registered":"Sunday, October 11, 2015 2:29 PM","latitude":"-25.364163","longitude":"70.888205","tags":["ipsum","est","adipisicing","occaecat","esse"],"favoriteFruit":"apple"},{"_id":"59a7035c76c334a6b24e7006","index":8,"guid":"844bad84-5eaa-4f19-ae1c-9f0457ddf2a7","isActive":false,"balance":"$1,450.12","picture":"http://placehold.it/32x32","age":35,"eyeColor":"green","name":{"first":"Chrystal","last":"Vega"},"company":"TALKOLA","email":"chrystal.vega@talkola.me","phone":"+1 (840) 479-2105","address":"294 Greenwood Avenue, Jackpot, Indiana, 5299","about":"Ipsum irure non fugiat do sit aute eiusmod laboris. Laboris duis anim occaecat commodo id elit consequat culpa ex qui. Aute ea Lorem proident commodo minim. Deserunt non occaecat laboris velit sit. Elit nisi amet consectetur aliqua sint quis veniam consectetur cupidatat incididunt sunt. Do aute irure irure nisi laborum officia do ad ex veniam aliquip enim voluptate nisi.","registered":"Sunday, May 1, 2016 4:47 AM","latitude":"65.873664","longitude":"75.550181","tags":["eu","tempor","est","amet","non"],"favoriteFruit":"strawberry"},{"_id":"59a7035cd4a9a2a1edc42ab3","index":9,"guid":"858e9092-389a-4052-9bc4-57b9a694dd68","isActive":false,"balance":"$1,861.41","picture":"http://placehold.it/32x32","age":33,"eyeColor":"brown","name":{"first":"Ellison","last":"Waters"},"company":"REVERSUS","email":"ellison.waters@reversus.us","phone":"+1 (862) 537-3521","address":"586 Lewis Place, Manitou, Tennessee, 7985","about":"Pariatur voluptate culpa velit ullamco labore pariatur magna sit aliqua. Elit deserunt pariatur minim dolor eu ex do qui. Culpa minim amet dolor mollit voluptate minim. Nostrud eiusmod cupidatat fugiat do laboris duis nisi et officia. Lorem labore nulla voluptate ex eu excepteur nostrud qui proident nulla dolor ea in. Minim ipsum id Lorem minim enim. Ad aliquip ex Lorem in excepteur excepteur eiusmod ad.","registered":"Wednesday, June 14, 2017 6:20 AM","latitude":"-34.20548","longitude":"-75.451382","tags":["mollit","labore","quis","aliquip","aliqua"],"favoriteFruit":"apple"},{"_id":"59a7035c109f497ba9ac56b9","index":10,"guid":"1cfba083-eeef-453b-b9fc-b7078a1464be","isActive":true,"balance":"$2,000.50","picture":"http://placehold.it/32x32","age":22,"eyeColor":"green","name":{"first":"Summer","last":"Stevens"},"company":"ISONUS","email":"summer.stevens@isonus.tv","phone":"+1 (872) 424-2890","address":"894 Nichols Avenue, Summertown, Mississippi, 4356","about":"Consequat mollit eiusmod non reprehenderit Lorem esse est sit dolore laborum amet do. Tempor excepteur do esse irure sint elit tempor amet proident Lorem minim. Quis id mollit id ad labore minim sunt ipsum aliqua aliquip et cupidatat id. Deserunt commodo laborum exercitation cupidatat laborum laboris nostrud labore eu. Excepteur ex duis esse Lorem anim commodo irure reprehenderit excepteur laboris Lorem anim. Pariatur labore labore officia voluptate officia ex amet nostrud exercitation consequat tempor fugiat. Ea reprehenderit occaecat culpa quis reprehenderit eiusmod officia aliquip aliqua nisi.","registered":"Thursday, June 22, 2017 10:35 PM","latitude":"89.231184","longitude":"-110.234136","tags":["enim","cillum","labore","aliqua","aute"],"favoriteFruit":"apple"},{"_id":"59a7035c51f4cce963a70e0b","index":11,"guid":"9517b4f4-60d6-4b23-82c7-013e1a8f3d89","isActive":false,"balance":"$1,744.33","picture":"http://placehold.it/32x32","age":36,"eyeColor":"brown","name":{"first":"Roach","last":"Mccoy"},"company":"RUBADUB","email":"roach.mccoy@rubadub.net","phone":"+1 (820) 452-3141","address":"600 Centre Street, Tooleville, Ohio, 7044","about":"Amet incididunt duis nisi mollit amet consectetur. Sunt officia veniam incididunt dolore minim deserunt occaecat nostrud est. Aliqua deserunt anim Lorem ipsum elit in ea enim est magna velit. Consectetur eiusmod in cillum culpa.","registered":"Monday, October 3, 2016 6:46 AM","latitude":"81.385787","longitude":"14.146369","tags":["nulla","et","ullamco","non","cupidatat"],"favoriteFruit":"apple"},{"_id":"59a7035c93884daa0668d951","index":12,"guid":"2fbe934b-bdb6-4b2d-957a-33cc7f094e48","isActive":true,"balance":"$2,992.96","picture":"http://placehold.it/32x32","age":20,"eyeColor":"blue","name":{"first":"Rachel","last":"Perry"},"company":"INTERLOO","email":"rachel.perry@interloo.io","phone":"+1 (959) 502-3649","address":"640 Hausman Street, Walland, New York, 9676","about":"Veniam eu veniam magna Lorem pariatur sunt minim reprehenderit nulla proident. Eiusmod ipsum qui eu amet qui officia sunt. Elit et esse sit elit cillum eiusmod.","registered":"Sunday, July 30, 2017 4:32 PM","latitude":"-10.871728","longitude":"147.135976","tags":["ullamco","enim","voluptate","anim","exercitation"],"favoriteFruit":"strawberry"},{"_id":"59a7035c67f269f9c70b9b97","index":13,"guid":"4bd0c91a-850c-4754-90df-be98cedd6d32","isActive":true,"balance":"$1,851.74","picture":"http://placehold.it/32x32","age":40,"eyeColor":"green","name":{"first":"Sims","last":"Rogers"},"company":"APEXTRI","email":"sims.rogers@apextri.biz","phone":"+1 (948) 503-2531","address":"312 Mill Avenue, Movico, Maryland, 3515","about":"Excepteur sit est consectetur voluptate sit veniam occaecat non. Laboris quis amet officia sint minim. Eiusmod culpa magna in officia ipsum irure incididunt. Esse et culpa et laboris ex. Nulla sunt ex proident nisi nulla non enim eu. Excepteur esse culpa consectetur incididunt elit.","registered":"Tuesday, November 4, 2014 9:03 PM","latitude":"-33.25626","longitude":"-76.988402","tags":["laboris","quis","officia","nostrud","voluptate"],"favoriteFruit":"banana"},{"_id":"59a7035cf30ca465187c684e","index":14,"guid":"fd7ac270-5bd4-4d37-aebd-9a862d7c5758","isActive":false,"balance":"$2,720.13","picture":"http://placehold.it/32x32","age":22,"eyeColor":"brown","name":{"first":"Velasquez","last":"Oneil"},"company":"POLARIUM","email":"velasquez.oneil@polarium.ca","phone":"+1 (923) 469-3429","address":"900 Ash Street, Stonybrook, Montana, 3865","about":"Non quis eiusmod eiusmod culpa irure culpa Lorem est nulla Lorem dolore aliqua nostrud. Quis sunt amet qui id in amet in ad consectetur id. Mollit exercitation eiusmod ea sit ea id et sint cupidatat non ipsum excepteur. Magna ullamco ipsum tempor dolore.","registered":"Monday, March 16, 2015 12:39 PM","latitude":"37.362897","longitude":"-24.30902","tags":["Lorem","ipsum","consectetur","reprehenderit","ad"],"favoriteFruit":"apple"},{"_id":"59a7035cdebe34c7394c6efe","index":15,"guid":"ff8ebe48-a9ba-484f-932c-5d3c586b447e","isActive":true,"balance":"$1,622.24","picture":"http://placehold.it/32x32","age":25,"eyeColor":"blue","name":{"first":"Mckay","last":"Wiggins"},"company":"OVERFORK","email":"mckay.wiggins@overfork.name","phone":"+1 (960) 587-3564","address":"275 Ferry Place, Boykin, New Jersey, 3918","about":"Consequat nisi qui excepteur eiusmod consequat adipisicing laborum. Irure officia qui nisi nisi ut elit nostrud sit consequat consequat enim qui ullamco sit. Laborum cupidatat aute nostrud aute sit ex ex laborum.","registered":"Saturday, June 28, 2014 12:32 PM","latitude":"-3.221893","longitude":"-108.718689","tags":["consectetur","proident","ut","mollit","reprehenderit"],"favoriteFruit":"banana"},{"_id":"59a7035ca8c295ab38f923d8","index":16,"guid":"8be8d88b-62ef-4845-b37b-714e3dbc7044","isActive":true,"balance":"$1,747.26","picture":"http://placehold.it/32x32","age":36,"eyeColor":"brown","name":{"first":"Fox","last":"Dean"},"company":"SULTRAX","email":"fox.dean@sultrax.com","phone":"+1 (903) 587-2021","address":"181 Linden Street, Swartzville, Kansas, 1953","about":"Eiusmod sint ex deserunt aliqua deserunt cillum eu esse commodo et ad consequat adipisicing. Sint cupidatat qui do excepteur fugiat deserunt veniam est eiusmod velit. Laborum ad ex minim ea aliqua nisi nulla eu adipisicing. Voluptate qui incididunt pariatur labore et eiusmod tempor. Irure in commodo ex anim quis ex. Ex aliqua id in Lorem. Pariatur ullamco adipisicing et tempor ut proident irure voluptate dolore Lorem irure velit velit dolor.","registered":"Thursday, December 25, 2014 1:51 PM","latitude":"70.092261","longitude":"137.024184","tags":["nulla","dolor","quis","veniam","ex"],"favoriteFruit":"apple"},{"_id":"59a7035cbb6cff56beb77712","index":17,"guid":"fa0a5d41-ea46-4848-8811-1c711c8a09da","isActive":true,"balance":"$3,736.32","picture":"http://placehold.it/32x32","age":38,"eyeColor":"blue","name":{"first":"Savage","last":"Herring"},"company":"LIQUICOM","email":"savage.herring@liquicom.co.uk","phone":"+1 (935) 408-3913","address":"513 Elliott Place, Katonah, Delaware, 9510","about":"Laboris eu ullamco dolore cupidatat consectetur consequat nostrud. Veniam laborum nulla aute enim aute ut velit. Et ullamco dolore officia ex do. Lorem elit officia commodo pariatur cillum sit officia dolore.","registered":"Thursday, February 5, 2015 9:34 PM","latitude":"71.095484","longitude":"158.028683","tags":["velit","quis","magna","voluptate","ullamco"],"favoriteFruit":"banana"},{"_id":"59a7035c2621173c3db49132","index":18,"guid":"34ed9369-db1a-4531-b3a8-a26ab5818a1e","isActive":true,"balance":"$3,559.17","picture":"http://placehold.it/32x32","age":39,"eyeColor":"green","name":{"first":"Moon","last":"Conway"},"company":"HALAP","email":"moon.conway@halap.info","phone":"+1 (954) 475-2559","address":"242 Dupont Street, Blanco, Connecticut, 6962","about":"Esse adipisicing quis cupidatat mollit velit velit cillum. Nostrud cupidatat eu in commodo proident. Nisi veniam magna sint culpa minim commodo do aliqua enim minim consequat ad amet. Mollit amet culpa commodo ea reprehenderit.","registered":"Sunday, April 27, 2014 4:47 PM","latitude":"89.076813","longitude":"-158.156226","tags":["sit","adipisicing","Lorem","cillum","non"],"favoriteFruit":"apple"},{"_id":"59a7035cae04cd3b0b1c4ebe","index":19,"guid":"3134798e-4154-436d-a2df-9c6d622bd570","isActive":false,"balance":"$3,017.21","picture":"http://placehold.it/32x32","age":33,"eyeColor":"green","name":{"first":"Steele","last":"Gill"},"company":"TASMANIA","email":"steele.gill@tasmania.org","phone":"+1 (870) 424-2065","address":"702 High Street, Thomasville, Washington, 8973","about":"Voluptate pariatur laboris laborum dolore anim. Sit exercitation sint nisi qui sunt amet laborum aliqua nulla est ut. Cupidatat sunt fugiat anim consectetur commodo elit consequat.","registered":"Monday, August 24, 2015 9:41 AM","latitude":"-73.125779","longitude":"158.426667","tags":["proident","reprehenderit","elit","dolore","voluptate"],"favoriteFruit":"apple"},{"_id":"59a7035c3ff747576abe0ce4","index":20,"guid":"53462778-e892-41e6-9661-bd3837cf4fdb","isActive":true,"balance":"$1,339.97","picture":"http://placehold.it/32x32","age":36,"eyeColor":"green","name":{"first":"Wiley","last":"Jimenez"},"company":"ENAUT","email":"wiley.jimenez@enaut.me","phone":"+1 (800) 495-2091","address":"730 Gunnison Court, Bennett, Georgia, 3983","about":"Mollit eu dolor dolore incididunt ex nisi duis do magna in. Dolore et eiusmod velit sint consequat officia ad veniam qui cupidatat. Nulla dolor sit ipsum do. Esse dolor commodo qui ad dolore mollit dolore nulla nostrud culpa consectetur elit voluptate. Cupidatat irure adipisicing et enim officia. Aliquip velit id cupidatat non cupidatat reprehenderit enim irure incididunt commodo ipsum cupidatat.","registered":"Tuesday, March 18, 2014 7:58 PM","latitude":"-41.676046","longitude":"51.435099","tags":["cupidatat","reprehenderit","exercitation","occaecat","commodo"],"favoriteFruit":"banana"},{"_id":"59a7035c7ab804d6508045ad","index":21,"guid":"c3b56fa4-1b35-4142-8687-18eacd39f3ff","isActive":false,"balance":"$1,661.76","picture":"http://placehold.it/32x32","age":35,"eyeColor":"green","name":{"first":"Vazquez","last":"Goodman"},"company":"ROUGHIES","email":"vazquez.goodman@roughies.us","phone":"+1 (982) 410-2800","address":"105 Green Street, Cutter, Rhode Island, 6634","about":"Lorem exercitation quis et consectetur id mollit labore ea enim nulla. Quis ea aliqua irure dolore ut cupidatat dolore labore quis mollit culpa culpa quis qui. Fugiat aliqua non ex deserunt exercitation ut cillum aliquip ipsum ex. Consequat do nostrud officia tempor elit tempor amet laborum non. Nulla in velit exercitation veniam in fugiat cupidatat.","registered":"Tuesday, July 4, 2017 12:38 AM","latitude":"-42.644916","longitude":"-11.217395","tags":["ut","minim","ut","aliqua","veniam"],"favoriteFruit":"strawberry"},{"_id":"59a7035c526b5608e65cf21b","index":22,"guid":"14fe6b2e-b139-4989-a6f6-a17ecd830c28","isActive":true,"balance":"$2,516.68","picture":"http://placehold.it/32x32","age":22,"eyeColor":"green","name":{"first":"Castaneda","last":"Tanner"},"company":"QUAREX","email":"castaneda.tanner@quarex.tv","phone":"+1 (940) 527-3149","address":"654 Stockholm Street, Cazadero, Oklahoma, 3236","about":"Aute commodo ex ex qui qui amet. Sunt qui irure mollit exercitation culpa aliquip eiusmod dolor mollit laborum et irure exercitation aute. Qui ad ullamco anim laborum mollit et est incididunt sit anim ullamco dolor reprehenderit. Lorem non ea pariatur non dolor.","registered":"Tuesday, October 14, 2014 7:55 AM","latitude":"-66.185306","longitude":"-13.503575","tags":["tempor","pariatur","proident","mollit","consectetur"],"favoriteFruit":"banana"},{"_id":"59a7035c8316916dc8650037","index":23,"guid":"4e2338f8-827b-4772-bfda-7b3e0f3172e8","isActive":false,"balance":"$3,630.85","picture":"http://placehold.it/32x32","age":26,"eyeColor":"brown","name":{"first":"Kirby","last":"Holt"},"company":"WARETEL","email":"kirby.holt@waretel.net","phone":"+1 (857) 494-2330","address":"649 Dinsmore Place, Day, North Carolina, 9524","about":"Ex consectetur laborum aliquip est duis in adipisicing aliqua minim. Exercitation dolor quis voluptate quis eu labore esse. Tempor et cupidatat occaecat magna duis non et ad amet non dolore non. Sunt qui id ullamco reprehenderit qui ex nisi elit ut cupidatat magna enim fugiat officia. Et enim excepteur qui est. Quis ut enim eiusmod consequat ipsum anim occaecat.","registered":"Sunday, March 26, 2017 1:35 PM","latitude":"37.646166","longitude":"-69.921208","tags":["irure","deserunt","laborum","do","laboris"],"favoriteFruit":"strawberry"},{"_id":"59a7035c615510a6f629ae78","index":24,"guid":"1c1fb554-5a33-487f-9790-893540af3969","isActive":true,"balance":"$2,016.60","picture":"http://placehold.it/32x32","age":20,"eyeColor":"blue","name":{"first":"Arline","last":"Norton"},"company":"REPETWIRE","email":"arline.norton@repetwire.io","phone":"+1 (816) 524-2522","address":"552 Dewitt Avenue, Edgewater, Maine, 203","about":"Officia tempor magna dolore ex. Non mollit elit proident sint veniam irure qui laboris laboris dolore reprehenderit. Nisi fugiat nulla pariatur veniam esse id dolor est deserunt commodo.","registered":"Saturday, February 11, 2017 7:47 AM","latitude":"88.125487","longitude":"108.126647","tags":["sint","velit","quis","ut","sint"],"favoriteFruit":"banana"},{"_id":"59a7035ccf388074ba52a49a","index":25,"guid":"00f81875-bcbf-482e-897b-b3819259ec10","isActive":false,"balance":"$2,846.52","picture":"http://placehold.it/32x32","age":39,"eyeColor":"green","name":{"first":"Chan","last":"Hansen"},"company":"MICRONAUT","email":"chan.hansen@micronaut.biz","phone":"+1 (833) 595-2815","address":"525 Rutland Road, Muse, Pennsylvania, 9512","about":"Cupidatat elit laboris elit duis duis duis eiusmod veniam id aliqua ea qui sunt. Ex ea ullamco do sint. Anim aliquip incididunt voluptate pariatur amet proident cillum. Aliqua ad fugiat est ea. Eu ullamco dolore elit nostrud.","registered":"Sunday, April 19, 2015 7:45 PM","latitude":"-43.064419","longitude":"50.672979","tags":["excepteur","nostrud","ea","sint","enim"],"favoriteFruit":"banana"},{"_id":"59a7035cc0324a9841c61b82","index":26,"guid":"655ddaf6-cf4b-4df9-a333-15d01bd98ffe","isActive":false,"balance":"$3,410.69","picture":"http://placehold.it/32x32","age":29,"eyeColor":"blue","name":{"first":"Aida","last":"Mueller"},"company":"GEEKOL","email":"aida.mueller@geekol.ca","phone":"+1 (907) 458-3337","address":"608 Herkimer Street, Caron, North Dakota, 1283","about":"Qui officia cupidatat nostrud est laboris nisi cupidatat veniam excepteur aute et reprehenderit ea deserunt. Deserunt anim duis non aliqua et non reprehenderit. Excepteur sunt magna fugiat incididunt esse esse eiusmod cupidatat magna elit nostrud laborum. Pariatur ullamco laborum cupidatat exercitation aliquip consectetur culpa dolore mollit eiusmod. Veniam aliquip commodo mollit sunt et aute voluptate officia aliquip. Veniam exercitation exercitation sunt proident occaecat veniam labore consectetur laborum.","registered":"Wednesday, October 7, 2015 9:39 AM","latitude":"-75.452339","longitude":"102.759886","tags":["cupidatat","esse","ex","ut","culpa"],"favoriteFruit":"apple"},{"_id":"59a7035c69bf27034fc83efb","index":27,"guid":"52d4926e-74b5-4b74-ae54-9da7808f924e","isActive":false,"balance":"$3,905.82","picture":"http://placehold.it/32x32","age":24,"eyeColor":"green","name":{"first":"Reyes","last":"Johnston"},"company":"CIRCUM","email":"reyes.johnston@circum.name","phone":"+1 (860) 459-3108","address":"319 Alabama Avenue, Stollings, Iowa, 7144","about":"Veniam et magna proident elit culpa est incididunt dolore. Et esse incididunt occaecat nostrud reprehenderit excepteur cupidatat id elit id eiusmod sint consequat. Voluptate fugiat cupidatat proident qui veniam cupidatat aliqua consequat exercitation irure id fugiat dolor. Ullamco esse et eiusmod ullamco. Consequat labore elit amet voluptate fugiat consequat aute cupidatat sunt deserunt et ad quis esse.","registered":"Saturday, August 2, 2014 10:31 AM","latitude":"-3.236452","longitude":"112.018362","tags":["eu","cupidatat","deserunt","culpa","sint"],"favoriteFruit":"apple"},{"_id":"59a7035c5466da4d8723624d","index":28,"guid":"f14cd57c-112f-4e05-be74-dcd217ffcd8d","isActive":true,"balance":"$1,541.40","picture":"http://placehold.it/32x32","age":37,"eyeColor":"green","name":{"first":"Nash","last":"Lane"},"company":"GEOFARM","email":"nash.lane@geofarm.com","phone":"+1 (925) 410-3330","address":"138 Just Court, Loomis, Marshall Islands, 360","about":"Minim aliquip ea minim nulla excepteur adipisicing. Labore magna ad minim ex eiusmod id consequat occaecat ea ea cupidatat id do consectetur. Mollit officia dolor qui eiusmod aute laboris incididunt dolore anim nulla ut excepteur aliquip est. Ipsum mollit esse elit dolor quis do laboris ad fugiat ullamco incididunt. Non non sit sunt culpa qui irure irure aliqua exercitation et incididunt. Esse amet id in fugiat.","registered":"Monday, June 26, 2017 9:25 AM","latitude":"-79.044765","longitude":"-102.699496","tags":["Lorem","voluptate","id","sit","et"],"favoriteFruit":"strawberry"},{"_id":"59a7035c0136625e4b0cf495","index":29,"guid":"209e068f-910c-4497-8e68-87b08bbff4f4","isActive":true,"balance":"$3,881.49","picture":"http://placehold.it/32x32","age":26,"eyeColor":"green","name":{"first":"Aline","last":"Dale"},"company":"ZOINAGE","email":"aline.dale@zoinage.co.uk","phone":"+1 (963) 421-3067","address":"844 Freeman Street, Cornucopia, Alaska, 8933","about":"Est aliqua ea exercitation labore est non cillum velit elit tempor est ex. Sunt sit non excepteur sit dolor quis excepteur dolore commodo deserunt consequat fugiat fugiat excepteur. Sit sunt ad officia ea deserunt fugiat Lorem elit consectetur qui. Do aliqua dolore reprehenderit ullamco elit eiusmod laboris elit velit proident amet proident quis sunt.","registered":"Sunday, November 16, 2014 5:32 PM","latitude":"-5.445644","longitude":"57.217008","tags":["sint","sit","ea","commodo","ex"],"favoriteFruit":"apple"},{"_id":"59a7035ccde7c6362570428b","index":30,"guid":"de265047-a6b8-4dca-988a-82ae04462a6a","isActive":true,"balance":"$1,630.59","picture":"http://placehold.it/32x32","age":40,"eyeColor":"blue","name":{"first":"Bates","last":"Meyer"},"company":"KIDGREASE","email":"bates.meyer@kidgrease.info","phone":"+1 (832) 599-3279","address":"140 Newport Street, Needmore, Arkansas, 2736","about":"Irure exercitation aute non laboris anim dolore velit ut enim nostrud sit. Laboris reprehenderit laboris velit in laborum id mollit do deserunt et. Adipisicing labore et non tempor est commodo labore. Sit ut veniam cupidatat adipisicing amet.","registered":"Thursday, July 17, 2014 3:58 PM","latitude":"66.724748","longitude":"-176.746077","tags":["eiusmod","exercitation","proident","aliqua","do"],"favoriteFruit":"apple"},{"_id":"59a7035ce132271d5fa94348","index":31,"guid":"e8305fec-8bf2-40f3-8015-d87610cfc7ea","isActive":false,"balance":"$2,318.75","picture":"http://placehold.it/32x32","age":28,"eyeColor":"green","name":{"first":"Stevens","last":"Snider"},"company":"BIOSPAN","email":"stevens.snider@biospan.org","phone":"+1 (811) 592-3620","address":"105 Dunham Place, Malott, Virginia, 1579","about":"Laborum labore elit amet irure qui quis labore proident velit veniam eiusmod aliquip. Ea nostrud et cupidatat Lorem qui. Minim ex sint duis officia anim sit sit et amet incididunt eu nulla.","registered":"Thursday, August 28, 2014 1:59 AM","latitude":"51.741171","longitude":"-167.91722","tags":["enim","deserunt","duis","est","eiusmod"],"favoriteFruit":"strawberry"},{"_id":"59a7035c98fce222722467df","index":32,"guid":"efae3f87-8d6a-4d84-af43-3a8e778bb3f2","isActive":false,"balance":"$2,937.56","picture":"http://placehold.it/32x32","age":31,"eyeColor":"blue","name":{"first":"Doreen","last":"Carroll"},"company":"TECHTRIX","email":"doreen.carroll@techtrix.me","phone":"+1 (847) 505-2539","address":"154 Alice Court, Marshall, Arizona, 6156","about":"Occaecat duis consectetur consectetur sint. Laboris ut esse Lorem duis labore deserunt consectetur ex sunt dolor non minim occaecat magna. Id qui magna occaecat elit consequat aliquip ex mollit magna. Tempor deserunt voluptate tempor magna pariatur ex fugiat veniam occaecat incididunt reprehenderit fugiat adipisicing. Occaecat magna voluptate proident cillum minim occaecat.","registered":"Tuesday, October 28, 2014 7:06 AM","latitude":"87.516681","longitude":"81.720297","tags":["irure","est","sint","consectetur","labore"],"favoriteFruit":"strawberry"},{"_id":"59a7035c4447df5e0d76d793","index":33,"guid":"ed9619fb-eed3-4e03-9d3f-eb0cfa247e9b","isActive":false,"balance":"$1,095.64","picture":"http://placehold.it/32x32","age":31,"eyeColor":"green","name":{"first":"Mcclain","last":"Berry"},"company":"SHEPARD","email":"mcclain.berry@shepard.us","phone":"+1 (919) 411-2370","address":"736 Aviation Road, Breinigsville, Guam, 1225","about":"Aliqua deserunt et dolor eiusmod quis consequat veniam nisi dolore laborum. Sit irure incididunt excepteur sint non. Aliqua esse culpa id cupidatat. Laboris irure eu do irure labore pariatur sunt exercitation aliquip anim commodo eu laboris aliqua. Mollit nostrud est quis nisi irure reprehenderit. Ullamco ipsum culpa esse proident do nulla nostrud do. Nisi pariatur voluptate occaecat sint veniam ex occaecat.","registered":"Friday, March 20, 2015 3:27 AM","latitude":"-54.396135","longitude":"-105.425605","tags":["anim","eiusmod","officia","eiusmod","ut"],"favoriteFruit":"strawberry"},{"_id":"59a7035c7fa79cfdce33ed47","index":34,"guid":"f9bfc8c7-9c60-49d6-a6ca-899d0abb6821","isActive":true,"balance":"$1,976.75","picture":"http://placehold.it/32x32","age":30,"eyeColor":"brown","name":{"first":"Bullock","last":"Kane"},"company":"BULLJUICE","email":"bullock.kane@bulljuice.tv","phone":"+1 (978) 466-3528","address":"407 Kensington Street, Talpa, Oregon, 9641","about":"Et duis ex sit quis sunt qui ullamco nisi. Sit Lorem deserunt do magna eiusmod ad tempor consectetur. Tempor duis ea eiusmod ea qui ad veniam aute culpa ut aute sint et nisi.","registered":"Tuesday, July 29, 2014 7:54 PM","latitude":"-50.495738","longitude":"-47.802041","tags":["velit","ad","aliqua","ut","eiusmod"],"favoriteFruit":"strawberry"},{"_id":"59a7035cded1262c1ea8cd10","index":35,"guid":"13731f59-5080-42f7-a160-0d88ad8df56e","isActive":false,"balance":"$1,623.47","picture":"http://placehold.it/32x32","age":26,"eyeColor":"green","name":{"first":"Whitfield","last":"Love"},"company":"GEEKNET","email":"whitfield.love@geeknet.net","phone":"+1 (983) 406-3585","address":"633 Gilmore Court, Haring, Wyoming, 570","about":"Adipisicing consectetur pariatur nostrud labore ea commodo sit commodo deserunt irure. Duis tempor culpa cillum voluptate. Mollit dolore dolore ullamco eu aliqua. Commodo voluptate enim commodo magna est exercitation eu dolore occaecat deserunt occaecat non. Non duis cupidatat laborum ex duis tempor velit eiusmod do qui consequat ipsum enim in.","registered":"Saturday, September 13, 2014 5:06 AM","latitude":"89.899137","longitude":"85.210926","tags":["sunt","velit","amet","aute","exercitation"],"favoriteFruit":"strawberry"},{"_id":"59a7035ca48b45cbb5592453","index":36,"guid":"410cc140-1eda-4eed-a7e4-aa6b7b6e9aa5","isActive":false,"balance":"$2,155.95","picture":"http://placehold.it/32x32","age":39,"eyeColor":"green","name":{"first":"Jeannine","last":"Higgins"},"company":"ZOGAK","email":"jeannine.higgins@zogak.io","phone":"+1 (905) 580-2033","address":"796 Wyona Street, Whitmer, Hawaii, 3220","about":"Culpa occaecat eu Lorem elit officia ullamco velit labore officia occaecat esse quis in. Aute velit laboris nostrud cillum esse. Aute ullamco id consequat anim occaecat deserunt velit eu laborum amet dolor culpa. In fugiat magna commodo ipsum ea labore amet commodo culpa adipisicing. Ullamco ut velit ut sunt tempor pariatur consequat aute.","registered":"Sunday, November 15, 2015 7:41 AM","latitude":"28.630291","longitude":"116.437262","tags":["magna","laboris","aliqua","veniam","cillum"],"favoriteFruit":"banana"},{"_id":"59a7035c19fa4081667fec10","index":37,"guid":"fc527a60-87dc-4973-b29b-ae6c6a3a02a3","isActive":true,"balance":"$1,791.22","picture":"http://placehold.it/32x32","age":27,"eyeColor":"brown","name":{"first":"Kemp","last":"Combs"},"company":"PETIGEMS","email":"kemp.combs@petigems.biz","phone":"+1 (971) 558-2694","address":"248 Milton Street, Torboy, Wisconsin, 9525","about":"Dolor culpa occaecat occaecat magna Lorem officia laborum duis reprehenderit elit dolor. Dolor nisi sit id eiusmod elit aliqua minim. Aliqua sunt duis nisi do mollit voluptate nulla enim reprehenderit. Anim incididunt nulla anim cupidatat occaecat ea nulla Lorem.","registered":"Thursday, March 16, 2017 8:02 AM","latitude":"86.949155","longitude":"-10.576148","tags":["officia","proident","reprehenderit","eiusmod","et"],"favoriteFruit":"apple"},{"_id":"59a7035c353252c0b5bb78de","index":38,"guid":"185271ff-7cb7-4273-896c-801e927d69c7","isActive":true,"balance":"$2,800.39","picture":"http://placehold.it/32x32","age":28,"eyeColor":"brown","name":{"first":"Opal","last":"Bryan"},"company":"XOGGLE","email":"opal.bryan@xoggle.ca","phone":"+1 (853) 550-3730","address":"448 Crooke Avenue, Loyalhanna, Alabama, 2883","about":"Est laborum ad duis cupidatat pariatur velit adipisicing. Commodo cillum ex eiusmod qui exercitation enim excepteur qui. Lorem dolore mollit dolore id veniam in qui reprehenderit nulla. Nisi cupidatat occaecat reprehenderit ex non elit fugiat cupidatat cupidatat esse minim aute incididunt ea. Id adipisicing ex aute est ex in. Aliquip fugiat consequat in aliquip amet.","registered":"Saturday, May 13, 2017 3:33 AM","latitude":"-7.901608","longitude":"28.712133","tags":["officia","veniam","incididunt","proident","elit"],"favoriteFruit":"banana"},{"_id":"59a7035cf1abac8eda4dc81a","index":39,"guid":"2c60d9c5-71e7-4132-b520-7a66f3c6ee80","isActive":true,"balance":"$1,144.49","picture":"http://placehold.it/32x32","age":24,"eyeColor":"green","name":{"first":"Hurley","last":"Farley"},"company":"SENSATE","email":"hurley.farley@sensate.name","phone":"+1 (825) 493-3055","address":"310 Kings Place, Matheny, Michigan, 9118","about":"Ex irure do velit amet irure qui consectetur magna qui nulla. Mollit voluptate aute voluptate anim minim. Ea nisi nostrud laboris officia consequat voluptate ullamco. Consectetur et et ullamco occaecat consequat mollit dolore. Elit aliqua ex elit sit dolor elit nostrud. Mollit in quis cupidatat dolore. Anim anim reprehenderit elit quis consectetur velit sunt culpa pariatur esse amet cupidatat.","registered":"Wednesday, February 4, 2015 4:44 PM","latitude":"-13.003628","longitude":"-53.151513","tags":["nostrud","ipsum","sit","pariatur","eu"],"favoriteFruit":"banana"},{"_id":"59a7035cab834659496f07e6","index":40,"guid":"9b314f77-2132-4d67-a2e7-e321b1425489","isActive":false,"balance":"$1,695.47","picture":"http://placehold.it/32x32","age":38,"eyeColor":"green","name":{"first":"Gena","last":"Erickson"},"company":"SUREMAX","email":"gena.erickson@suremax.com","phone":"+1 (808) 587-3031","address":"953 Hamilton Walk, Grapeview, West Virginia, 5414","about":"Commodo adipisicing esse amet cupidatat aliquip non quis fugiat amet adipisicing proident irure. Officia officia amet est sit ea dolore nostrud. Magna veniam exercitation fugiat pariatur tempor aliquip pariatur laboris. Nisi magna consectetur mollit ex.","registered":"Sunday, January 22, 2017 4:08 AM","latitude":"66.697714","longitude":"-31.518386","tags":["reprehenderit","officia","consequat","officia","tempor"],"favoriteFruit":"apple"},{"_id":"59a7035cdf3d9271510da94f","index":41,"guid":"8add5d93-0a23-48c6-8f06-ae3eeb19b588","isActive":false,"balance":"$3,580.72","picture":"http://placehold.it/32x32","age":21,"eyeColor":"green","name":{"first":"Rivers","last":"Ray"},"company":"APPLICA","email":"rivers.ray@applica.co.uk","phone":"+1 (950) 599-2480","address":"362 Broome Street, Hickory, Nevada, 8639","about":"Eiusmod veniam cupidatat esse amet exercitation mollit nostrud cillum excepteur adipisicing qui irure. Velit laboris nulla ad dolor sint aute duis consectetur dolor do sit Lorem pariatur veniam. Adipisicing ullamco nisi id nostrud tempor esse pariatur id esse eu adipisicing laborum ut velit. Tempor et mollit ullamco ad nulla nulla exercitation tempor ullamco magna consequat dolor ea eu. Magna enim nisi ipsum exercitation labore eiusmod nulla et. Tempor est nisi commodo adipisicing culpa ipsum enim. Sint officia ea magna adipisicing ex aute cupidatat aliqua anim id laborum sunt.","registered":"Wednesday, April 15, 2015 9:15 AM","latitude":"4.898258","longitude":"86.671363","tags":["ullamco","deserunt","eu","sint","velit"],"favoriteFruit":"strawberry"},{"_id":"59a7035c27915d318dc46605","index":42,"guid":"391406a2-8a33-4dba-8188-703efc28ee6a","isActive":true,"balance":"$3,408.64","picture":"http://placehold.it/32x32","age":22,"eyeColor":"brown","name":{"first":"Pierce","last":"Warner"},"company":"GEEKKO","email":"pierce.warner@geekko.info","phone":"+1 (976) 432-3810","address":"620 Vandam Street, Churchill, District Of Columbia, 7273","about":"Deserunt nisi culpa voluptate non. Ex incididunt commodo incididunt duis aute pariatur minim. Aliquip labore et laborum qui tempor eu culpa anim cupidatat elit culpa id. Consequat consequat aute sint incididunt non proident Lorem. Tempor adipisicing ullamco enim ea incididunt pariatur minim incididunt dolore labore elit do exercitation velit.","registered":"Tuesday, January 26, 2016 5:09 PM","latitude":"18.840446","longitude":"-140.288934","tags":["pariatur","non","velit","ad","ipsum"],"favoriteFruit":"strawberry"},{"_id":"59a7035c121cb0d353274b8e","index":43,"guid":"601e5899-1adb-4034-83fb-a408d73eed3e","isActive":false,"balance":"$2,166.09","picture":"http://placehold.it/32x32","age":32,"eyeColor":"green","name":{"first":"Agnes","last":"Klein"},"company":"IPLAX","email":"agnes.klein@iplax.org","phone":"+1 (803) 526-2302","address":"873 Lynch Street, Epworth, Minnesota, 7604","about":"Commodo laboris ea mollit voluptate qui ea non consectetur consequat do est culpa in fugiat. Dolor dolore ea eiusmod aute labore non aliquip. Aliquip elit dolore consectetur veniam sit aliquip dolor nisi nulla in velit. Amet in enim velit pariatur fugiat cupidatat minim tempor id anim. Duis elit dolor in amet nostrud est. Qui dolor labore commodo ea ad officia.","registered":"Thursday, February 19, 2015 2:24 PM","latitude":"-67.101097","longitude":"50.717088","tags":["magna","veniam","do","ea","occaecat"],"favoriteFruit":"strawberry"},{"_id":"59a7035ce2051f3ecf26a443","index":44,"guid":"575f5eb2-764e-40ae-b7e7-df6e9ad613fd","isActive":true,"balance":"$2,790.19","picture":"http://placehold.it/32x32","age":24,"eyeColor":"green","name":{"first":"Mcconnell","last":"Flores"},"company":"INTRADISK","email":"mcconnell.flores@intradisk.me","phone":"+1 (941) 478-2925","address":"186 Noel Avenue, Gwynn, Kentucky, 7885","about":"Culpa officia proident aute laborum nulla reprehenderit veniam. In ex elit ut laborum aliquip voluptate Lorem cillum fugiat sunt magna aliqua. Ut ea ullamco aliqua est non Lorem sunt aliqua occaecat laborum sunt consectetur cillum.","registered":"Wednesday, April 8, 2015 2:31 AM","latitude":"-81.25321","longitude":"133.72738","tags":["cupidatat","excepteur","aute","in","aute"],"favoriteFruit":"strawberry"},{"_id":"59a7035c47fb9f9fde38fcd7","index":45,"guid":"e7b47778-d925-4b8e-ab14-84ba73def2b4","isActive":false,"balance":"$1,674.58","picture":"http://placehold.it/32x32","age":36,"eyeColor":"green","name":{"first":"Hunt","last":"Tyler"},"company":"SAVVY","email":"hunt.tyler@savvy.us","phone":"+1 (863) 598-2691","address":"611 Beadel Street, Roy, Federated States Of Micronesia, 2629","about":"Eiusmod aliquip eu sit sint sint duis Lorem minim adipisicing magna proident occaecat. Deserunt ex est et adipisicing nulla commodo est voluptate nulla. Voluptate cupidatat sit officia mollit elit laboris Lorem elit enim amet tempor cillum ullamco. Est dolor exercitation duis dolor.","registered":"Wednesday, March 15, 2017 11:03 AM","latitude":"69.912349","longitude":"153.385815","tags":["enim","aute","Lorem","magna","culpa"],"favoriteFruit":"apple"},{"_id":"59a7035ca9c9cde01a506db2","index":46,"guid":"7d592c62-decf-4783-a09e-50b17540385b","isActive":false,"balance":"$2,144.62","picture":"http://placehold.it/32x32","age":36,"eyeColor":"green","name":{"first":"Kayla","last":"Hines"},"company":"LUNCHPOD","email":"kayla.hines@lunchpod.tv","phone":"+1 (898) 445-3215","address":"387 Farragut Place, Keyport, Palau, 6584","about":"Officia cillum do adipisicing dolor Lorem laboris voluptate nulla nisi amet voluptate aliquip. Nostrud adipisicing elit incididunt minim consectetur magna et do excepteur ipsum occaecat occaecat laborum. Cupidatat veniam et qui Lorem anim non in quis tempor ullamco consectetur.","registered":"Thursday, December 10, 2015 11:19 AM","latitude":"-56.974919","longitude":"81.24329","tags":["amet","aute","officia","ea","eu"],"favoriteFruit":"strawberry"},{"_id":"59a7035c0e69eb2d00523cd6","index":47,"guid":"0e944922-c8b4-41d4-b772-fda678044be3","isActive":false,"balance":"$2,414.81","picture":"http://placehold.it/32x32","age":29,"eyeColor":"blue","name":{"first":"Galloway","last":"Martin"},"company":"GRONK","email":"galloway.martin@gronk.net","phone":"+1 (992) 421-2108","address":"782 Wyckoff Avenue, Austinburg, Missouri, 2703","about":"Exercitation adipisicing eiusmod quis culpa labore ipsum est labore occaecat enim. Occaecat et aute ipsum ea consectetur Lorem cupidatat ea aliquip amet exercitation enim magna laborum. Fugiat eiusmod anim amet veniam eiusmod enim pariatur. Dolore ex voluptate elit qui in in occaecat elit non commodo proident ea ad. Do fugiat ex reprehenderit dolor proident laboris et proident dolor quis.","registered":"Saturday, July 25, 2015 8:58 AM","latitude":"-67.079903","longitude":"45.040108","tags":["laborum","veniam","nulla","minim","labore"],"favoriteFruit":"apple"},{"_id":"59a7035cd0e6865eee4a787b","index":48,"guid":"311f5a7e-8c80-4e13-ba78-de4877c421ae","isActive":true,"balance":"$1,216.24","picture":"http://placehold.it/32x32","age":21,"eyeColor":"brown","name":{"first":"Delgado","last":"Logan"},"company":"ECOSYS","email":"delgado.logan@ecosys.io","phone":"+1 (817) 488-2527","address":"530 Montana Place, Longbranch, Puerto Rico, 2384","about":"Nulla est occaecat amet aliquip. Tempor eiusmod ullamco velit reprehenderit velit qui proident duis elit labore tempor esse pariatur. Adipisicing anim est quis veniam incididunt ipsum. Minim adipisicing amet adipisicing incididunt proident amet consequat id tempor veniam ullamco laboris ex nulla. Aliquip aute minim id laborum esse ut do ullamco. Duis duis officia incididunt fugiat aute velit laborum eu sit nulla.","registered":"Saturday, May 17, 2014 6:46 PM","latitude":"-31.5656","longitude":"-177.850334","tags":["aute","occaecat","do","sit","mollit"],"favoriteFruit":"apple"},{"_id":"59a7035cdc9d3370f810dae3","index":49,"guid":"c075d96d-9d39-4d1f-81ef-f5f3827a3ec5","isActive":false,"balance":"$1,487.55","picture":"http://placehold.it/32x32","age":32,"eyeColor":"blue","name":{"first":"Francine","last":"Williams"},"company":"ISODRIVE","email":"francine.williams@isodrive.biz","phone":"+1 (827) 552-3345","address":"184 Huron Street, Brady, Virgin Islands, 4981","about":"Mollit magna incididunt eiusmod esse. Et cillum cupidatat eiusmod magna. Officia commodo et nulla nisi duis.","registered":"Sunday, January 26, 2014 7:54 PM","latitude":"52.628824","longitude":"-162.282948","tags":["ex","do","ullamco","labore","qui"],"favoriteFruit":"strawberry"},{"_id":"59a7035c2d9fc6a61983949b","index":50,"guid":"cb0b9d70-84f7-42f9-a598-a9614ba5df34","isActive":true,"balance":"$3,458.93","picture":"http://placehold.it/32x32","age":31,"eyeColor":"brown","name":{"first":"Sheree","last":"Potter"},"company":"BICOL","email":"sheree.potter@bicol.ca","phone":"+1 (911) 520-2486","address":"536 Homecrest Court, Wilsonia, California, 7465","about":"Cillum nostrud eu eiusmod quis veniam nulla adipisicing. Minim irure aute veniam eiusmod mollit ex anim reprehenderit dolore id tempor laboris veniam nisi. Eiusmod ex et Lorem ea enim non aliqua. Minim consequat nisi mollit sint. Do consectetur nostrud irure culpa minim ea exercitation commodo cillum et incididunt fugiat incididunt. Aliqua exercitation elit ut et aliqua.","registered":"Sunday, October 18, 2015 2:26 PM","latitude":"89.490889","longitude":"-80.854052","tags":["id","mollit","exercitation","ullamco","enim"],"favoriteFruit":"apple"},{"_id":"59a7035c405328ddeaff8904","index":51,"guid":"99a63d65-324a-481a-9cac-05c1f9cac100","isActive":true,"balance":"$3,341.72","picture":"http://placehold.it/32x32","age":29,"eyeColor":"brown","name":{"first":"Miranda","last":"Sexton"},"company":"MARQET","email":"miranda.sexton@marqet.name","phone":"+1 (946) 415-3797","address":"340 Bath Avenue, Eagletown, Idaho, 5384","about":"Magna esse sint fugiat consequat consequat fugiat sint incididunt laboris elit do duis velit id. Cillum sint ut qui proident mollit duis et occaecat qui aliquip proident. Lorem exercitation ut in cupidatat anim cupidatat exercitation duis in.","registered":"Thursday, January 22, 2015 7:09 AM","latitude":"19.12383","longitude":"90.784467","tags":["in","commodo","amet","aute","anim"],"favoriteFruit":"apple"},{"_id":"59a7035cfd92740227c0f6b1","index":52,"guid":"b4c25087-f039-498a-a373-313af6acb6ef","isActive":false,"balance":"$1,126.25","picture":"http://placehold.it/32x32","age":20,"eyeColor":"blue","name":{"first":"Ofelia","last":"Carr"},"company":"ENTROPIX","email":"ofelia.carr@entropix.com","phone":"+1 (820) 593-2737","address":"142 Ocean Avenue, Condon, American Samoa, 4622","about":"Est voluptate nostrud deserunt proident deserunt. Enim voluptate enim officia duis consectetur aute cillum dolore. Anim nisi irure do nostrud incididunt qui velit velit. Officia laboris ullamco laboris aliqua ea adipisicing minim consectetur.","registered":"Thursday, January 28, 2016 11:39 PM","latitude":"19.542017","longitude":"-3.713091","tags":["culpa","commodo","fugiat","aliqua","tempor"],"favoriteFruit":"apple"},{"_id":"59a7035c248c6ba65270e46e","index":53,"guid":"7829626c-45e0-4c44-935f-3f44a6580e4a","isActive":true,"balance":"$2,456.51","picture":"http://placehold.it/32x32","age":32,"eyeColor":"brown","name":{"first":"Kasey","last":"Cooley"},"company":"NORALI","email":"kasey.cooley@norali.co.uk","phone":"+1 (861) 491-3340","address":"250 Hull Street, Alleghenyville, Massachusetts, 7051","about":"Eiusmod deserunt quis in culpa ipsum nulla labore pariatur qui occaecat veniam laborum commodo. Laboris veniam sit aliquip do veniam consequat amet. Labore nisi deserunt deserunt aliquip incididunt esse fugiat sunt dolore non reprehenderit. Sunt laboris ut irure aliquip veniam ullamco enim elit esse consequat eiusmod non. Dolor eu qui velit occaecat aliqua incididunt proident laboris.","registered":"Thursday, July 23, 2015 7:32 PM","latitude":"16.512867","longitude":"146.71739","tags":["officia","eu","Lorem","esse","commodo"],"favoriteFruit":"apple"},{"_id":"59a7035cbf98406486822269","index":54,"guid":"32812ecf-ac5d-4297-92f6-c35bb954b085","isActive":false,"balance":"$2,328.11","picture":"http://placehold.it/32x32","age":25,"eyeColor":"green","name":{"first":"Jordan","last":"Robbins"},"company":"GEEKOSIS","email":"jordan.robbins@geekosis.info","phone":"+1 (839) 498-2949","address":"957 Clymer Street, Fedora, New Hampshire, 5337","about":"Ad culpa ea amet voluptate commodo esse. Minim incididunt mollit nostrud incididunt ut id aute consequat consequat eiusmod. In et aute quis laborum ut pariatur tempor consequat laboris. Aliqua commodo ullamco sint sint ex ea nostrud qui veniam mollit. Voluptate cillum anim aliquip elit laboris et proident fugiat. Id laboris ut tempor magna quis dolor ea. Cupidatat sint dolor sunt minim sunt labore officia dolor mollit est.","registered":"Saturday, October 10, 2015 12:28 PM","latitude":"32.067311","longitude":"145.237322","tags":["in","magna","nisi","nisi","adipisicing"],"favoriteFruit":"apple"},{"_id":"59a7035c24b395b422e21bdd","index":55,"guid":"ddbeb6d9-ccc2-4bd3-b910-0197a5a3e978","isActive":false,"balance":"$3,534.04","picture":"http://placehold.it/32x32","age":34,"eyeColor":"brown","name":{"first":"Lewis","last":"Peck"},"company":"APEX","email":"lewis.peck@apex.org","phone":"+1 (980) 536-3987","address":"849 Covert Street, Clayville, Colorado, 1350","about":"Consequat dolore mollit mollit do voluptate cillum commodo. Enim reprehenderit sit amet do. Ullamco culpa sit veniam sint do labore voluptate adipisicing consequat. Occaecat velit adipisicing officia do duis ut ad minim ad. Nulla elit occaecat proident do ipsum occaecat. Dolore qui labore proident dolore ex nisi exercitation ut.","registered":"Sunday, July 6, 2014 4:13 PM","latitude":"-70.298709","longitude":"-164.729062","tags":["sit","sint","culpa","tempor","duis"],"favoriteFruit":"apple"},{"_id":"59a7035c75fbbf78833a6c43","index":56,"guid":"ff49457c-793d-443c-ac86-7b917352212a","isActive":false,"balance":"$2,224.91","picture":"http://placehold.it/32x32","age":36,"eyeColor":"blue","name":{"first":"Carlson","last":"Boone"},"company":"INSOURCE","email":"carlson.boone@insource.me","phone":"+1 (894) 513-2192","address":"478 Walker Court, Trinway, South Dakota, 7897","about":"Irure sit laborum laboris sint dolore in. Labore reprehenderit proident ad exercitation nulla pariatur nostrud non dolore quis laborum sit mollit reprehenderit. Esse cillum irure reprehenderit fugiat aute est id laborum commodo fugiat nulla magna tempor minim. Non irure officia sint aute dolor consectetur. Eu est incididunt aliqua sint id. Eiusmod cillum esse eu cupidatat deserunt eu Lorem enim nisi fugiat non. Ullamco cillum velit ex aute aute irure ad esse officia sint magna ex ad.","registered":"Thursday, February 20, 2014 12:28 AM","latitude":"-67.923152","longitude":"150.385512","tags":["Lorem","qui","adipisicing","ex","sunt"],"favoriteFruit":"banana"},{"_id":"59a7035c2cf8d9e54a6439d5","index":57,"guid":"df0727f4-2681-4bfe-8353-1712ef5a7b86","isActive":true,"balance":"$2,717.06","picture":"http://placehold.it/32x32","age":33,"eyeColor":"blue","name":{"first":"Warren","last":"Tate"},"company":"PAWNAGRA","email":"warren.tate@pawnagra.us","phone":"+1 (855) 426-3132","address":"695 Jamison Lane, Kent, Vermont, 5411","about":"Exercitation dolor et amet do incididunt in occaecat. Esse deserunt et nisi esse tempor enim minim excepteur sint. Culpa esse ipsum duis minim. Exercitation mollit reprehenderit laborum commodo.","registered":"Wednesday, January 27, 2016 5:49 PM","latitude":"16.929183","longitude":"-162.313654","tags":["non","anim","tempor","est","laboris"],"favoriteFruit":"banana"},{"_id":"59a7035c7f1fd5e7b8d1018e","index":58,"guid":"b1ce4a04-3ec6-46ed-9232-172ef5be3080","isActive":false,"balance":"$1,462.40","picture":"http://placehold.it/32x32","age":28,"eyeColor":"blue","name":{"first":"Adeline","last":"Salinas"},"company":"TROPOLIS","email":"adeline.salinas@tropolis.tv","phone":"+1 (879) 591-2242","address":"906 Haring Street, Helen, Nebraska, 8880","about":"Consectetur ad ad eu elit ullamco aute cillum labore id in deserunt. Irure laborum duis elit incididunt laborum cillum duis aliqua consectetur commodo. Et ex consectetur voluptate sunt enim sit tempor sunt aliqua. Mollit sit voluptate duis culpa qui nulla. Mollit duis irure laboris consectetur labore magna Lorem incididunt do mollit.","registered":"Tuesday, September 29, 2015 6:14 PM","latitude":"57.034722","longitude":"-32.396938","tags":["deserunt","incididunt","consectetur","in","tempor"],"favoriteFruit":"apple"},{"_id":"59a7035cfc2501326316c206","index":59,"guid":"12800369-5ca4-4078-8969-9858d5390982","isActive":false,"balance":"$1,108.78","picture":"http://placehold.it/32x32","age":30,"eyeColor":"green","name":{"first":"Newton","last":"Singleton"},"company":"PLAYCE","email":"newton.singleton@playce.net","phone":"+1 (869) 527-3116","address":"373 Vanderbilt Avenue, Germanton, South Carolina, 2961","about":"Cillum ullamco incididunt excepteur duis aliqua laborum exercitation quis cillum nulla aute ut cupidatat. Anim irure laboris non aliquip tempor dolore ipsum. Fugiat ea velit Lorem incididunt ex.","registered":"Friday, February 12, 2016 12:42 PM","latitude":"-52.203091","longitude":"-159.820805","tags":["culpa","qui","amet","amet","quis"],"favoriteFruit":"banana"},{"_id":"59a7035c487c20261c897e35","index":60,"guid":"a49ba126-7e12-448b-b6c7-358122c8be09","isActive":true,"balance":"$3,466.32","picture":"http://placehold.it/32x32","age":27,"eyeColor":"blue","name":{"first":"Noel","last":"Carney"},"company":"BUGSALL","email":"noel.carney@bugsall.io","phone":"+1 (868) 532-3842","address":"784 Danforth Street, Websterville, Texas, 4199","about":"Excepteur culpa laboris esse quis quis elit aliquip. Sit commodo eu enim elit in ea. Labore magna mollit minim veniam sint aliquip sit dolor.","registered":"Friday, May 22, 2015 10:16 PM","latitude":"-71.199536","longitude":"55.775326","tags":["ex","elit","in","id","occaecat"],"favoriteFruit":"banana"},{"_id":"59a7035c06a9abb1922bf0ce","index":61,"guid":"c6a670d5-a5f8-427a-bbd0-0bee7c36b334","isActive":false,"balance":"$3,769.45","picture":"http://placehold.it/32x32","age":33,"eyeColor":"brown","name":{"first":"Patrick","last":"Guerrero"},"company":"SOLGAN","email":"patrick.guerrero@solgan.biz","phone":"+1 (901) 586-2395","address":"523 Louisiana Avenue, Hampstead, Florida, 7360","about":"Consectetur mollit elit sunt minim. Ea deserunt elit sint culpa magna magna sit. Tempor ut eu nisi mollit minim non aliquip nisi eiusmod pariatur ullamco. Adipisicing ad esse dolor ipsum.","registered":"Wednesday, May 28, 2014 9:41 PM","latitude":"-48.779034","longitude":"42.915054","tags":["nulla","aliquip","proident","et","aliquip"],"favoriteFruit":"banana"},{"_id":"59a7035cbc3a0c2b0a2ad1c4","index":62,"guid":"995d2615-e8a9-4fd0-89d0-4e9f3237c47f","isActive":true,"balance":"$2,673.93","picture":"http://placehold.it/32x32","age":40,"eyeColor":"blue","name":{"first":"Chelsea","last":"Wood"},"company":"TYPHONICA","email":"chelsea.wood@typhonica.ca","phone":"+1 (876) 413-2919","address":"611 Seigel Court, Shawmut, Louisiana, 3898","about":"Officia labore ad id cupidatat dolore non irure id ut sit excepteur magna ea. Sint velit et do excepteur incididunt est proident veniam sit exercitation enim sit. Esse tempor ea reprehenderit ullamco consequat dolore. Pariatur qui voluptate mollit occaecat nisi dolore est ad duis non. Fugiat exercitation quis pariatur mollit ipsum mollit reprehenderit nostrud sint eu nisi ullamco officia. Consectetur veniam incididunt minim aliqua magna duis occaecat.","registered":"Thursday, January 5, 2017 3:32 PM","latitude":"-69.891714","longitude":"-0.420051","tags":["aliquip","non","dolor","ex","Lorem"],"favoriteFruit":"apple"},{"_id":"59a7035c493471e65ae4ae1f","index":63,"guid":"2cccc299-0164-4301-98af-f3b29855a599","isActive":true,"balance":"$1,641.77","picture":"http://placehold.it/32x32","age":21,"eyeColor":"green","name":{"first":"Stacy","last":"Drake"},"company":"ENJOLA","email":"stacy.drake@enjola.name","phone":"+1 (894) 485-3245","address":"218 Boardwalk , Vaughn, New Mexico, 1904","about":"Fugiat duis Lorem exercitation veniam ullamco aute occaecat ullamco non Lorem. Ex officia sint culpa magna occaecat laborum proident do. Aliquip quis elit tempor ullamco aliqua proident sunt incididunt sit. Velit Lorem veniam consectetur cillum sit. Id occaecat et labore duis ipsum consectetur.","registered":"Wednesday, June 22, 2016 6:20 PM","latitude":"33.843736","longitude":"-51.883471","tags":["ullamco","nulla","laborum","aliquip","reprehenderit"],"favoriteFruit":"strawberry"},{"_id":"59a7035c5274723c7c54778e","index":64,"guid":"c550c3f1-9d23-449a-879b-caeecafbcca0","isActive":false,"balance":"$2,052.86","picture":"http://placehold.it/32x32","age":40,"eyeColor":"blue","name":{"first":"Bridgette","last":"Lindsay"},"company":"HIVEDOM","email":"bridgette.lindsay@hivedom.com","phone":"+1 (999) 591-2448","address":"268 Bay Avenue, Rosine, Northern Mariana Islands, 3239","about":"Ea do exercitation ad cupidatat. Commodo officia adipisicing culpa eiusmod. Sint aliquip et anim commodo dolor quis officia. Ullamco proident magna cillum mollit exercitation consequat fugiat. Incididunt culpa cupidatat amet eiusmod aute est proident officia elit non proident cillum elit occaecat. Veniam amet ad laborum ad aute id dolore sint ipsum consequat nostrud cillum.","registered":"Saturday, January 9, 2016 9:39 AM","latitude":"77.293657","longitude":"-167.06726","tags":["laborum","fugiat","tempor","nisi","adipisicing"],"favoriteFruit":"banana"},{"_id":"59a7035ca370378bfeaa38a5","index":65,"guid":"94c8d9a6-2e5a-40e9-a6e3-85e79b53b6ed","isActive":true,"balance":"$3,379.77","picture":"http://placehold.it/32x32","age":22,"eyeColor":"brown","name":{"first":"Lorena","last":"Eaton"},"company":"CEPRENE","email":"lorena.eaton@ceprene.co.uk","phone":"+1 (938) 403-2437","address":"283 Quentin Street, Enoree, Utah, 5172","about":"Cupidatat aliqua sint elit sint proident non occaecat elit aute ullamco consectetur in. Exercitation enim laboris irure do deserunt velit aliquip fugiat labore commodo aliquip laboris cupidatat. Occaecat esse minim enim ex fugiat tempor dolore cillum adipisicing qui laborum id nostrud sunt. Nisi laboris sint eiusmod id ipsum eu non velit.","registered":"Sunday, July 26, 2015 5:17 AM","latitude":"16.813018","longitude":"-72.052378","tags":["elit","labore","magna","in","voluptate"],"favoriteFruit":"apple"},{"_id":"59a7035c0ee5430ec8ec7d91","index":66,"guid":"8990fead-c907-47f0-80a5-c53049dffeeb","isActive":true,"balance":"$1,851.38","picture":"http://placehold.it/32x32","age":36,"eyeColor":"blue","name":{"first":"Herminia","last":"Daniels"},"company":"NIKUDA","email":"herminia.daniels@nikuda.info","phone":"+1 (956) 481-3195","address":"809 Neptune Avenue, Chestnut, Indiana, 819","about":"Ea commodo aute nulla commodo consectetur. Dolor duis anim amet voluptate eu elit est in. Aliqua veniam nostrud ad laborum officia anim dolor. Tempor excepteur occaecat eiusmod amet officia labore commodo Lorem nisi magna officia excepteur qui. Duis ad consectetur quis dolor sunt proident aliqua. Eu amet ea sint cupidatat culpa ea aliqua enim culpa veniam quis nulla aliquip.","registered":"Tuesday, July 11, 2017 7:35 AM","latitude":"47.247143","longitude":"-145.360494","tags":["cupidatat","magna","do","aliquip","ullamco"],"favoriteFruit":"strawberry"},{"_id":"59a7035c97657752e87ea50f","index":67,"guid":"e7c4b864-736b-4e83-a71c-b9593d392198","isActive":false,"balance":"$1,416.49","picture":"http://placehold.it/32x32","age":36,"eyeColor":"brown","name":{"first":"Nola","last":"Solis"},"company":"POLARAX","email":"nola.solis@polarax.org","phone":"+1 (974) 576-3054","address":"648 Noll Street, Felt, Tennessee, 4071","about":"Consequat non cupidatat quis elit sunt. Ad voluptate consequat labore id velit in. Nostrud quis commodo dolor eu dolor eiusmod sint sint dolore consectetur exercitation sit consequat ipsum. Veniam proident culpa id laborum dolor consectetur laborum adipisicing occaecat ullamco eu nisi id. Do quis duis velit ad aute aute dolor laborum aliqua cillum tempor. Labore ad occaecat amet aliquip eu id aute dolore in.","registered":"Saturday, June 21, 2014 8:46 AM","latitude":"66.266244","longitude":"-21.606844","tags":["reprehenderit","consectetur","non","veniam","esse"],"favoriteFruit":"banana"},{"_id":"59a7035ca90f3c48271f8556","index":68,"guid":"eaef8eff-d3bc-4be4-8356-3dfa414cca49","isActive":false,"balance":"$1,392.02","picture":"http://placehold.it/32x32","age":33,"eyeColor":"brown","name":{"first":"Leona","last":"Owens"},"company":"SPACEWAX","email":"leona.owens@spacewax.me","phone":"+1 (926) 433-2717","address":"760 Glenwood Road, Dowling, Mississippi, 7230","about":"Enim amet mollit eu duis Lorem. Irure officia nostrud id nostrud excepteur. Fugiat minim in incididunt nostrud sint deserunt sit qui commodo.","registered":"Monday, September 19, 2016 11:45 AM","latitude":"41.817328","longitude":"108.002872","tags":["minim","enim","consequat","nulla","excepteur"],"favoriteFruit":"banana"},{"_id":"59a7035cd3d6556665c80d6c","index":69,"guid":"eab03c09-6238-4b56-bbf5-3a70bb62dce2","isActive":true,"balance":"$3,539.53","picture":"http://placehold.it/32x32","age":24,"eyeColor":"blue","name":{"first":"Hobbs","last":"Jones"},"company":"EMOLTRA","email":"hobbs.jones@emoltra.us","phone":"+1 (963) 441-3365","address":"215 Whitwell Place, Richford, Ohio, 4608","about":"Sunt ullamco deserunt veniam ipsum amet proident duis. Veniam laboris Lorem minim in. Aliquip ipsum eu consectetur cupidatat amet sint aliqua nostrud excepteur tempor velit consectetur. Minim mollit non qui in laborum ad in aute. Consequat qui consequat enim officia laboris cupidatat culpa ullamco eu magna consequat cillum quis cillum. Laboris consequat et adipisicing eiusmod ex Lorem laboris excepteur do. Duis elit excepteur mollit id id occaecat eiusmod anim aliquip ex est non aliqua adipisicing.","registered":"Saturday, December 5, 2015 2:27 PM","latitude":"1.167543","longitude":"-127.155785","tags":["consectetur","reprehenderit","exercitation","consectetur","nisi"],"favoriteFruit":"apple"},{"_id":"59a7035c62d1feaa93ca4a3a","index":70,"guid":"346f6dcf-2913-4a02-b743-51b967cea03f","isActive":false,"balance":"$1,454.96","picture":"http://placehold.it/32x32","age":40,"eyeColor":"blue","name":{"first":"Summers","last":"Huff"},"company":"COMTRACT","email":"summers.huff@comtract.tv","phone":"+1 (966) 424-2354","address":"867 Willoughby Street, Dargan, New York, 6440","about":"Magna proident sunt cillum aliqua aute non et occaecat. Ad sit laboris sit deserunt officia ullamco reprehenderit fugiat id sunt. Quis nostrud mollit nostrud velit voluptate mollit.","registered":"Tuesday, March 14, 2017 4:29 AM","latitude":"38.996569","longitude":"-5.565663","tags":["veniam","ea","cupidatat","sunt","qui"],"favoriteFruit":"banana"},{"_id":"59a7035c3a02db49a4163774","index":71,"guid":"74aef096-4441-4094-9d56-2be53310a19a","isActive":true,"balance":"$3,786.73","picture":"http://placehold.it/32x32","age":39,"eyeColor":"green","name":{"first":"Wilkinson","last":"Howard"},"company":"MOTOVATE","email":"wilkinson.howard@motovate.net","phone":"+1 (954) 411-2468","address":"819 Hanson Place, Sisquoc, Maryland, 4699","about":"Cupidatat labore exercitation quis in tempor est id deserunt. Esse eu ex aute veniam officia aliqua minim ipsum. Sunt ipsum elit excepteur cupidatat qui commodo. Enim labore dolor eu ullamco laborum ad ut ut veniam labore non elit commodo enim. Magna laborum dolore minim adipisicing ullamco laboris commodo aliquip cupidatat consequat.","registered":"Friday, December 23, 2016 12:50 PM","latitude":"79.991901","longitude":"-110.683079","tags":["exercitation","quis","aliqua","aliqua","minim"],"favoriteFruit":"banana"},{"_id":"59a7035ca3df915eedd92aeb","index":72,"guid":"09f7ea7a-7033-4973-ba4f-7438d1e707ed","isActive":true,"balance":"$1,059.27","picture":"http://placehold.it/32x32","age":21,"eyeColor":"green","name":{"first":"Navarro","last":"Grant"},"company":"HAWKSTER","email":"navarro.grant@hawkster.io","phone":"+1 (947) 411-2315","address":"694 Boerum Place, Urie, Montana, 2584","about":"Lorem nostrud cillum nulla commodo officia. Irure aliqua irure ex in voluptate est Lorem labore eiusmod sunt non et consectetur. Laborum amet duis ullamco fugiat laboris do nisi sit. Eu fugiat nostrud non consequat. Reprehenderit nostrud laborum minim cillum magna enim consectetur incididunt laborum sunt incididunt dolore do. Nostrud nisi ea pariatur velit veniam veniam duis pariatur tempor aute. Velit laborum minim excepteur eu irure nulla excepteur incididunt.","registered":"Sunday, April 9, 2017 8:34 AM","latitude":"-66.519848","longitude":"48.685848","tags":["fugiat","labore","elit","laborum","minim"],"favoriteFruit":"banana"},{"_id":"59a7035c7b6ad28ac5fd4e73","index":73,"guid":"d1b37b5f-e453-4f3e-a94b-365359a7d1bc","isActive":true,"balance":"$1,640.35","picture":"http://placehold.it/32x32","age":27,"eyeColor":"blue","name":{"first":"Walton","last":"Henderson"},"company":"EVIDENDS","email":"walton.henderson@evidends.biz","phone":"+1 (871) 490-2002","address":"193 Barbey Street, Dunbar, New Jersey, 8593","about":"Exercitation enim eiusmod dolore proident nulla non. Incididunt Lorem do et ea minim esse labore. Eiusmod velit sit ullamco consequat. Ex et est et officia aliquip Lorem pariatur. Labore excepteur cillum qui commodo aute non incididunt velit consectetur sunt velit. Eu non qui ut quis.","registered":"Friday, September 25, 2015 5:06 PM","latitude":"28.063406","longitude":"-44.937807","tags":["Lorem","Lorem","enim","velit","enim"],"favoriteFruit":"strawberry"},{"_id":"59a7035c2832582a974c8806","index":74,"guid":"0ac54662-a5b7-48bd-abbd-6211f1345bd4","isActive":true,"balance":"$3,975.36","picture":"http://placehold.it/32x32","age":38,"eyeColor":"green","name":{"first":"Parks","last":"Good"},"company":"GEEKULAR","email":"parks.good@geekular.ca","phone":"+1 (822) 403-2275","address":"685 Monitor Street, Fowlerville, Kansas, 6486","about":"Enim culpa nisi nostrud est qui magna laborum aliquip irure duis nostrud nulla. Sit commodo excepteur amet nostrud esse mollit magna voluptate amet officia. Exercitation enim aliquip aute velit laboris. Laborum deserunt esse nulla minim occaecat sunt duis cillum esse sit velit. Esse ut pariatur anim anim eiusmod ea duis. Sint non irure nostrud labore id minim esse. Eu aliqua ex magna sunt excepteur commodo reprehenderit.","registered":"Monday, August 15, 2016 12:32 PM","latitude":"-34.737543","longitude":"-131.226158","tags":["officia","qui","esse","eu","ex"],"favoriteFruit":"banana"},{"_id":"59a7035c0829691744bbaaf7","index":75,"guid":"19d63c85-d2c0-4216-9b3e-50879765681a","isActive":false,"balance":"$3,833.80","picture":"http://placehold.it/32x32","age":33,"eyeColor":"blue","name":{"first":"Suzanne","last":"Arnold"},"company":"ACCRUEX","email":"suzanne.arnold@accruex.name","phone":"+1 (800) 412-2663","address":"623 Blake Avenue, Oretta, Delaware, 5458","about":"Irure proident incididunt in ut sint labore incididunt sint. Nulla nulla anim commodo mollit laborum. Aliqua reprehenderit do quis laboris non aliquip exercitation id veniam velit fugiat elit tempor. Anim veniam id cupidatat esse amet. Nisi pariatur amet pariatur tempor aliqua cupidatat dolore velit duis laborum. Magna proident exercitation aliqua dolore tempor proident voluptate in elit non.","registered":"Thursday, June 29, 2017 6:20 PM","latitude":"-67.201586","longitude":"1.39753","tags":["esse","non","aute","mollit","est"],"favoriteFruit":"banana"},{"_id":"59a7035c23c34fbce0dacb32","index":76,"guid":"0f2bf805-c5ac-4125-9f42-f912195e5de5","isActive":true,"balance":"$3,592.47","picture":"http://placehold.it/32x32","age":38,"eyeColor":"blue","name":{"first":"Robinson","last":"Travis"},"company":"OVIUM","email":"robinson.travis@ovium.com","phone":"+1 (979) 498-2934","address":"275 Irwin Street, Snowville, Connecticut, 5995","about":"Deserunt adipisicing Lorem exercitation cupidatat ut laborum consectetur. Sunt veniam do ut reprehenderit aliqua do amet ad aute incididunt consectetur pariatur. Pariatur exercitation ad tempor dolore proident sint. Cillum exercitation elit dolor consequat anim irure commodo ex adipisicing excepteur nulla sunt. Ad consequat veniam id aliquip ea ad in minim quis exercitation aliqua ea ex. Aliqua consequat tempor officia ullamco cillum elit excepteur sit tempor ex minim occaecat. Aliquip aliqua laboris occaecat et sint ut ullamco fugiat occaecat est sint eu ut aute.","registered":"Monday, April 10, 2017 4:08 PM","latitude":"64.239375","longitude":"137.324483","tags":["aliquip","pariatur","proident","nostrud","deserunt"],"favoriteFruit":"strawberry"},{"_id":"59a7035c1972243aafc69a04","index":77,"guid":"2550fe7c-1d3c-4068-aa7e-9c22a1951f5c","isActive":false,"balance":"$3,685.33","picture":"http://placehold.it/32x32","age":23,"eyeColor":"blue","name":{"first":"Katrina","last":"Wallace"},"company":"EARBANG","email":"katrina.wallace@earbang.co.uk","phone":"+1 (954) 534-2751","address":"950 Brighton Avenue, Roderfield, Washington, 4701","about":"Duis commodo ipsum mollit qui esse. In id ad velit consectetur enim dolore veniam consequat. Quis anim nostrud aute laboris occaecat consequat aliqua nisi. Incididunt laboris velit esse culpa velit quis irure consectetur. Sint Lorem aliquip do laborum consequat officia cillum est labore. Tempor pariatur aliqua duis ex ad eu.","registered":"Monday, March 16, 2015 11:14 PM","latitude":"18.70309","longitude":"-142.809837","tags":["proident","irure","nisi","sunt","labore"],"favoriteFruit":"strawberry"},{"_id":"59a7035cb658685639994e87","index":78,"guid":"058ce69e-d0e7-4cb4-99a4-be9c26701a52","isActive":false,"balance":"$1,697.78","picture":"http://placehold.it/32x32","age":25,"eyeColor":"brown","name":{"first":"Fuentes","last":"Mercado"},"company":"ARCHITAX","email":"fuentes.mercado@architax.info","phone":"+1 (959) 576-3132","address":"353 Mill Street, Cashtown, Georgia, 1768","about":"Reprehenderit dolor cupidatat aute do duis. Nostrud mollit laborum sint dolor veniam voluptate occaecat amet ad. Magna non reprehenderit ad quis ipsum Lorem irure ad do culpa sunt. Qui elit nisi reprehenderit aliqua eu minim velit reprehenderit. Enim exercitation sunt aliquip veniam ea deserunt Lorem veniam ex. Quis ut et consequat amet enim irure mollit ea minim eiusmod consequat commodo excepteur. Nulla adipisicing in quis sunt excepteur eiusmod id.","registered":"Monday, May 19, 2014 4:23 AM","latitude":"-0.578208","longitude":"70.90583","tags":["non","nisi","culpa","id","nostrud"],"favoriteFruit":"banana"},{"_id":"59a7035c4492f07cdb06f3bc","index":79,"guid":"d1ff2173-63b3-4be7-9de8-80374fe05409","isActive":false,"balance":"$3,403.33","picture":"http://placehold.it/32x32","age":33,"eyeColor":"blue","name":{"first":"Aurora","last":"Blake"},"company":"ISOPLEX","email":"aurora.blake@isoplex.org","phone":"+1 (900) 481-2991","address":"364 Tillary Street, Tetherow, Rhode Island, 8261","about":"Amet ut do enim quis mollit commodo enim adipisicing dolor ad culpa nulla culpa. Amet adipisicing reprehenderit labore consequat. Dolore ut Lorem non deserunt irure aute nisi non irure occaecat. Anim ullamco enim enim ipsum occaecat culpa ullamco fugiat ullamco tempor. Ea dolor mollit sunt ipsum et amet laboris. Culpa proident laborum aliquip officia laboris sit cillum. Laborum ex velit culpa velit.","registered":"Friday, October 31, 2014 12:32 PM","latitude":"-71.77671","longitude":"101.056755","tags":["officia","eu","excepteur","et","incididunt"],"favoriteFruit":"strawberry"},{"_id":"59a7035c626202551c0687cb","index":80,"guid":"e74a4405-84aa-4b67-809e-15f6b56ae501","isActive":false,"balance":"$1,388.99","picture":"http://placehold.it/32x32","age":25,"eyeColor":"blue","name":{"first":"Joanne","last":"Oconnor"},"company":"DARWINIUM","email":"joanne.oconnor@darwinium.me","phone":"+1 (943) 410-3599","address":"117 Bragg Street, Temperanceville, Oklahoma, 4977","about":"Magna ad aliquip excepteur id. Duis enim sit adipisicing est esse labore reprehenderit minim. Reprehenderit adipisicing deserunt culpa excepteur mollit elit culpa duis anim labore cupidatat dolor. Labore nisi reprehenderit irure mollit occaecat culpa. Pariatur dolor pariatur tempor commodo consectetur anim magna commodo enim ut fugiat. Labore amet cupidatat officia veniam irure elit proident duis cupidatat reprehenderit eu. Quis commodo fugiat reprehenderit eu adipisicing amet officia.","registered":"Sunday, November 27, 2016 5:43 AM","latitude":"87.333345","longitude":"-6.03891","tags":["amet","ut","tempor","deserunt","magna"],"favoriteFruit":"apple"},{"_id":"59a7035c1a455ae94ad5f555","index":81,"guid":"1545dcb4-fca2-4991-94af-53ccce60f81a","isActive":false,"balance":"$3,936.24","picture":"http://placehold.it/32x32","age":29,"eyeColor":"green","name":{"first":"Sanders","last":"Parsons"},"company":"XUMONK","email":"sanders.parsons@xumonk.us","phone":"+1 (836) 504-3288","address":"162 Prospect Avenue, Tecolotito, North Carolina, 203","about":"Ad nisi sint aliqua tempor deserunt adipisicing ex magna excepteur adipisicing. Commodo sunt eu nostrud reprehenderit dolor nulla nisi exercitation non. Occaecat deserunt eiusmod eu Lorem magna sint consequat ex nulla occaecat magna ipsum ullamco cillum. Deserunt proident non dolor adipisicing culpa ad deserunt exercitation adipisicing excepteur amet ad ex dolor. Tempor ullamco nulla nisi dolore officia aute excepteur esse ullamco. Eu sint irure commodo fugiat consequat aliquip est.","registered":"Friday, March 25, 2016 5:08 PM","latitude":"4.02693","longitude":"-26.79332","tags":["ipsum","et","elit","amet","ut"],"favoriteFruit":"strawberry"},{"_id":"59a7035c0deb19988f17aa77","index":82,"guid":"67d68126-174d-41bb-ae38-77794218d70a","isActive":true,"balance":"$2,352.55","picture":"http://placehold.it/32x32","age":28,"eyeColor":"green","name":{"first":"Little","last":"May"},"company":"APPLIDECK","email":"little.may@applideck.tv","phone":"+1 (939) 567-3305","address":"367 Crawford Avenue, Eureka, Maine, 5784","about":"Dolore laboris consequat duis deserunt voluptate pariatur enim commodo eiusmod labore labore duis. Qui labore aliquip et quis. Aliqua laboris cupidatat in do qui duis quis. Consectetur laborum occaecat ad eiusmod consequat irure amet culpa. Aute magna cillum deserunt sunt enim aliquip dolore dolor tempor nostrud. Lorem duis elit esse commodo aliqua nulla. Non aliquip occaecat cupidatat culpa.","registered":"Friday, October 28, 2016 3:54 AM","latitude":"61.075581","longitude":"51.153595","tags":["commodo","sunt","sunt","dolore","consectetur"],"favoriteFruit":"apple"},{"_id":"59a7035ca83b8ad3adcd08ce","index":83,"guid":"c203159a-808b-4942-b9f6-153f0519f54e","isActive":false,"balance":"$3,183.36","picture":"http://placehold.it/32x32","age":38,"eyeColor":"brown","name":{"first":"Brandi","last":"Navarro"},"company":"MANTRIX","email":"brandi.navarro@mantrix.net","phone":"+1 (821) 507-2658","address":"926 Verona Place, Longoria, Pennsylvania, 9051","about":"Non qui anim et officia eiusmod cupidatat veniam cillum enim sint ad. Excepteur sit cillum culpa veniam consectetur aliqua dolore dolor sint ut. Cupidatat sint adipisicing aute nostrud enim amet velit. Culpa et minim magna commodo aliqua labore laboris nisi anim qui.","registered":"Tuesday, May 17, 2016 2:47 PM","latitude":"-75.956827","longitude":"10.213558","tags":["sint","pariatur","nulla","duis","dolor"],"favoriteFruit":"strawberry"},{"_id":"59a7035cbe29a6da748090b7","index":84,"guid":"af5c99e9-77ce-4df2-b923-b41920d7f00d","isActive":true,"balance":"$1,793.30","picture":"http://placehold.it/32x32","age":39,"eyeColor":"brown","name":{"first":"Rosie","last":"Rowland"},"company":"GLUKGLUK","email":"rosie.rowland@glukgluk.io","phone":"+1 (997) 548-2274","address":"511 Benson Avenue, Taft, North Dakota, 7668","about":"Reprehenderit aliqua sit duis labore esse cupidatat quis incididunt commodo ea culpa. Ut tempor adipisicing anim sunt qui esse cupidatat aute aliqua minim. In est minim proident ipsum dolor ex. Pariatur commodo culpa incididunt enim mollit amet ea. Laborum nulla ex deserunt aute id aute. Irure exercitation proident ullamco veniam adipisicing id labore sit incididunt sint est. Consectetur amet non nostrud culpa mollit reprehenderit proident est consectetur minim aliquip elit proident Lorem.","registered":"Saturday, September 26, 2015 6:00 AM","latitude":"62.537599","longitude":"-117.981601","tags":["consectetur","exercitation","excepteur","esse","veniam"],"favoriteFruit":"banana"},{"_id":"59a7035ce366d83e9c497b63","index":85,"guid":"00cfd94e-5dcc-4872-b8db-10ed9ebfe1b1","isActive":true,"balance":"$2,245.84","picture":"http://placehold.it/32x32","age":29,"eyeColor":"brown","name":{"first":"Rich","last":"Ortiz"},"company":"VINCH","email":"rich.ortiz@vinch.biz","phone":"+1 (886) 509-2030","address":"667 Lenox Road, Nelson, Iowa, 1112","about":"Eiusmod pariatur voluptate fugiat in aliqua quis voluptate ipsum proident. Ullamco elit occaecat sint ipsum mollit esse incididunt quis incididunt. Incididunt pariatur incididunt ut reprehenderit aute elit veniam officia enim. Incididunt incididunt ex labore aliquip excepteur id ipsum incididunt non mollit occaecat. Nostrud ut laboris ea officia commodo esse consectetur aute ipsum anim.","registered":"Friday, January 22, 2016 3:46 AM","latitude":"-56.524315","longitude":"-13.796753","tags":["consectetur","aliquip","voluptate","reprehenderit","minim"],"favoriteFruit":"apple"},{"_id":"59a7035ce64e5cf2cb2c5dbd","index":86,"guid":"956d4ae4-59aa-439f-8496-ab9cf2db8401","isActive":false,"balance":"$3,269.51","picture":"http://placehold.it/32x32","age":33,"eyeColor":"brown","name":{"first":"Lolita","last":"Pitts"},"company":"CEDWARD","email":"lolita.pitts@cedward.ca","phone":"+1 (962) 548-2756","address":"575 Halleck Street, Warsaw, Marshall Islands, 5786","about":"Ex aute et dolore magna mollit quis. Deserunt esse exercitation ea id ullamco occaecat occaecat mollit magna fugiat sint. Elit voluptate consequat occaecat duis labore ut. Minim adipisicing do sunt aliquip ipsum nulla.","registered":"Thursday, July 7, 2016 8:23 PM","latitude":"72.65006","longitude":"130.043692","tags":["enim","id","id","commodo","id"],"favoriteFruit":"apple"},{"_id":"59a7035c9c4570394ffa599d","index":87,"guid":"736241d1-243a-423a-a8d4-eebe18815840","isActive":true,"balance":"$3,619.45","picture":"http://placehold.it/32x32","age":20,"eyeColor":"brown","name":{"first":"Head","last":"Hodge"},"company":"OPTYK","email":"head.hodge@optyk.name","phone":"+1 (968) 530-3840","address":"714 Adler Place, Greenwich, Alaska, 6463","about":"Eu nisi aute et irure aliquip. Ullamco fugiat occaecat adipisicing consequat do laboris id veniam proident est. Elit esse aliquip irure pariatur Lorem ipsum duis ad ad qui enim culpa duis voluptate. Mollit ut sit nulla aliquip eu commodo eiusmod dolore ad dolore culpa ipsum nostrud sunt. Dolor nostrud labore culpa irure mollit dolore occaecat magna incididunt culpa sunt anim officia. Excepteur esse eiusmod culpa incididunt et qui mollit sint tempor. Enim quis ipsum anim commodo reprehenderit ut.","registered":"Tuesday, January 21, 2014 1:18 PM","latitude":"46.89198","longitude":"30.630046","tags":["ex","nisi","sit","nisi","ullamco"],"favoriteFruit":"banana"},{"_id":"59a7035c22d650f8dc32b276","index":88,"guid":"7835601e-6c62-4f23-845f-f37b23b4bfa5","isActive":true,"balance":"$1,335.42","picture":"http://placehold.it/32x32","age":24,"eyeColor":"green","name":{"first":"Yvette","last":"Lee"},"company":"FUELWORKS","email":"yvette.lee@fuelworks.com","phone":"+1 (893) 483-2423","address":"359 Logan Street, Inkerman, Arkansas, 8607","about":"Commodo nisi eu fugiat quis minim tempor amet officia aliqua velit mollit pariatur sit. Et enim anim eu ipsum et adipisicing culpa. Ipsum reprehenderit dolor amet dolor nulla culpa Lorem dolore aliqua et occaecat laborum nulla. Dolor labore occaecat mollit et ipsum in enim.","registered":"Sunday, August 30, 2015 3:43 AM","latitude":"-1.177192","longitude":"-176.072586","tags":["deserunt","deserunt","ullamco","nisi","et"],"favoriteFruit":"banana"},{"_id":"59a7035c845ab1f46cc313f3","index":89,"guid":"90a77242-736f-43b2-a926-f5776cf5a0fc","isActive":true,"balance":"$2,413.09","picture":"http://placehold.it/32x32","age":24,"eyeColor":"blue","name":{"first":"Queen","last":"Bush"},"company":"CODAX","email":"queen.bush@codax.co.uk","phone":"+1 (887) 408-2294","address":"652 Livonia Avenue, Springdale, Virginia, 8288","about":"Officia cupidatat proident consectetur officia tempor velit excepteur mollit et irure in mollit. Proident officia cupidatat eiusmod et aliqua fugiat Lorem ipsum mollit. Proident adipisicing proident velit occaecat labore mollit et elit mollit labore.","registered":"Monday, April 11, 2016 3:33 PM","latitude":"40.174924","longitude":"-169.264042","tags":["adipisicing","irure","excepteur","labore","fugiat"],"favoriteFruit":"strawberry"},{"_id":"59a7035cf4047f065c27810d","index":90,"guid":"e9bbb717-cacf-4734-8d21-c1983a4fb19d","isActive":false,"balance":"$1,180.56","picture":"http://placehold.it/32x32","age":37,"eyeColor":"blue","name":{"first":"Shanna","last":"Gay"},"company":"CAPSCREEN","email":"shanna.gay@capscreen.info","phone":"+1 (867) 526-2674","address":"809 Elmwood Avenue, Southview, Arizona, 3898","about":"Anim minim in sint culpa fugiat ad do. Ex fugiat laborum ullamco mollit irure quis in culpa in veniam aliquip irure mollit. Occaecat sint dolor in do labore. Proident mollit consequat pariatur labore laboris nulla incididunt duis proident. Veniam dolore in esse non.","registered":"Wednesday, November 9, 2016 3:10 AM","latitude":"27.646782","longitude":"-151.385329","tags":["labore","id","sint","non","nisi"],"favoriteFruit":"banana"},{"_id":"59a7035c2fb8999bcafecdc2","index":91,"guid":"12c9dc32-2d6b-4973-8651-d6188a7dabc8","isActive":false,"balance":"$3,424.83","picture":"http://placehold.it/32x32","age":34,"eyeColor":"blue","name":{"first":"Ella","last":"Carpenter"},"company":"ZENTIX","email":"ella.carpenter@zentix.org","phone":"+1 (975) 408-2611","address":"574 Radde Place, Beaverdale, Guam, 7123","about":"Veniam minim laborum eiusmod laborum esse dolor ullamco. Consequat mollit anim sit aliqua exercitation. Labore minim qui et ut deserunt ex nisi aliqua nostrud ad tempor commodo duis. Tempor duis nisi eu ullamco voluptate occaecat cillum. Cupidatat occaecat exercitation pariatur non non aliqua voluptate fugiat laborum elit. Est fugiat nostrud eu in cupidatat consectetur ad Lorem culpa est. Laborum officia voluptate in aliqua anim excepteur est et.","registered":"Friday, March 11, 2016 8:58 AM","latitude":"2.273755","longitude":"-88.510162","tags":["velit","aliqua","consequat","est","dolor"],"favoriteFruit":"strawberry"},{"_id":"59a7035c2f40c10c920c6b13","index":92,"guid":"ffb19003-45da-4d37-a67e-bcba3ab853b3","isActive":true,"balance":"$3,553.34","picture":"http://placehold.it/32x32","age":29,"eyeColor":"green","name":{"first":"Dominguez","last":"Andrews"},"company":"BITENDREX","email":"dominguez.andrews@bitendrex.me","phone":"+1 (948) 455-2358","address":"859 Lombardy Street, Innsbrook, Oregon, 1038","about":"Laborum sunt laboris dolor nulla labore et sint eiusmod velit reprehenderit velit exercitation sunt magna. Enim sunt magna nostrud consectetur deserunt nostrud est commodo. Fugiat sint nisi qui voluptate. Mollit ullamco id ad aute commodo pariatur. Ut quis id elit Lorem veniam ullamco tempor dolor commodo. Occaecat fugiat et consectetur amet do eiusmod et laboris eiusmod commodo tempor ipsum Lorem. Labore Lorem est do minim ad voluptate velit.","registered":"Friday, September 23, 2016 1:49 PM","latitude":"41.049962","longitude":"82.866048","tags":["officia","esse","et","laborum","adipisicing"],"favoriteFruit":"banana"},{"_id":"59a7035c7693669d4a2341fc","index":93,"guid":"fe2cbad4-40e5-45a9-afc9-dbdfbb39c5e1","isActive":false,"balance":"$1,712.21","picture":"http://placehold.it/32x32","age":21,"eyeColor":"brown","name":{"first":"Mcdonald","last":"Spence"},"company":"RUGSTARS","email":"mcdonald.spence@rugstars.us","phone":"+1 (988) 547-3230","address":"868 Baycliff Terrace, Lloyd, Wyoming, 485","about":"Do irure eu duis velit mollit ullamco commodo. Non excepteur enim consequat esse reprehenderit veniam dolore. Pariatur do laboris est proident adipisicing nisi deserunt cupidatat in id et nisi id. Enim excepteur tempor anim ad esse anim ullamco quis nisi proident mollit aute ipsum.","registered":"Sunday, June 4, 2017 2:42 AM","latitude":"18.376296","longitude":"-146.83597","tags":["ex","duis","qui","esse","voluptate"],"favoriteFruit":"strawberry"},{"_id":"59a7035c4caf37e13a927434","index":94,"guid":"e20016f9-9f1a-41df-828e-def56cf7ac3a","isActive":false,"balance":"$1,453.58","picture":"http://placehold.it/32x32","age":33,"eyeColor":"blue","name":{"first":"Foster","last":"Dennis"},"company":"REMOTION","email":"foster.dennis@remotion.tv","phone":"+1 (866) 535-3792","address":"691 Louisa Street, Cecilia, Hawaii, 2862","about":"Officia eiusmod consectetur irure amet et esse pariatur non aliquip do cillum. Eu anim ex velit non esse. Fugiat minim consequat pariatur exercitation laborum Lorem.","registered":"Saturday, November 1, 2014 11:04 AM","latitude":"59.797693","longitude":"121.515418","tags":["laboris","ullamco","excepteur","exercitation","sunt"],"favoriteFruit":"apple"},{"_id":"59a7035cb37d952c09b1db05","index":95,"guid":"bea34c38-52c6-43c8-9ef1-553c6881a460","isActive":true,"balance":"$3,823.29","picture":"http://placehold.it/32x32","age":34,"eyeColor":"green","name":{"first":"Virgie","last":"Pearson"},"company":"ORGANICA","email":"virgie.pearson@organica.net","phone":"+1 (904) 555-2662","address":"265 Bayview Avenue, Hillsboro, Wisconsin, 1774","about":"Mollit officia laboris et esse anim Lorem commodo. Ex magna commodo elit occaecat quis dolor eu pariatur. Velit officia mollit ad esse pariatur fugiat anim. Ea incididunt tempor in mollit consectetur sit amet officia esse aute et. Duis qui fugiat enim occaecat est irure aliqua officia.","registered":"Thursday, August 28, 2014 2:19 PM","latitude":"48.435984","longitude":"39.085544","tags":["ipsum","quis","non","sit","quis"],"favoriteFruit":"banana"},{"_id":"59a7035c55ec65f65e251a32","index":96,"guid":"b32cf788-ddc2-433f-986e-74112c39584f","isActive":true,"balance":"$1,794.43","picture":"http://placehold.it/32x32","age":40,"eyeColor":"blue","name":{"first":"Arlene","last":"Leon"},"company":"DUOFLEX","email":"arlene.leon@duoflex.io","phone":"+1 (927) 496-3663","address":"113 Fillmore Avenue, Enetai, Alabama, 4366","about":"Dolor magna tempor eiusmod consectetur irure officia culpa aute cupidatat. Et et veniam tempor fugiat aute excepteur aliquip laborum culpa nulla nostrud. Aute quis eu mollit do non ut amet. Aliquip non aliqua eu fugiat aliqua sunt ut elit consequat magna aliquip. Ad culpa eu fugiat occaecat culpa cupidatat incididunt excepteur.","registered":"Sunday, March 29, 2015 4:05 AM","latitude":"-26.602809","longitude":"146.305625","tags":["proident","sit","cillum","duis","veniam"],"favoriteFruit":"banana"},{"_id":"59a7035c8cbdfccd78c807a2","index":97,"guid":"628d3858-1f68-49e2-9924-8302d0c48afd","isActive":false,"balance":"$2,082.32","picture":"http://placehold.it/32x32","age":26,"eyeColor":"blue","name":{"first":"Kristen","last":"Holman"},"company":"COLUMELLA","email":"kristen.holman@columella.biz","phone":"+1 (885) 443-2216","address":"220 Guernsey Street, Bergoo, Michigan, 5982","about":"Sint Lorem minim ex nostrud amet in. Sunt dolore consequat minim sunt quis nostrud ut. Magna occaecat Lorem pariatur ipsum amet non eiusmod cupidatat deserunt magna sit. Exercitation eiusmod magna fugiat officia in sint elit reprehenderit laboris aliquip mollit aliquip. Cupidatat veniam sint amet non consectetur reprehenderit ut eiusmod elit et ut. Dolor reprehenderit duis ad sit velit est commodo.","registered":"Tuesday, June 6, 2017 5:33 AM","latitude":"-2.307265","longitude":"-82.751171","tags":["consectetur","consequat","ex","exercitation","elit"],"favoriteFruit":"apple"},{"_id":"59a7035cf9eca03873bb57a0","index":98,"guid":"9c1b37ef-f431-44c7-bcb8-fc47fe923cb9","isActive":true,"balance":"$1,761.63","picture":"http://placehold.it/32x32","age":27,"eyeColor":"green","name":{"first":"Eliza","last":"Phillips"},"company":"BLANET","email":"eliza.phillips@blanet.ca","phone":"+1 (978) 577-2073","address":"541 Pulaski Street, Cartwright, West Virginia, 2342","about":"Lorem pariatur nulla occaecat cupidatat reprehenderit exercitation do officia. Occaecat elit in ut dolor mollit proident proident est exercitation reprehenderit tempor nulla aute irure. Culpa id eu magna elit ipsum cillum esse est amet sit. Esse elit reprehenderit duis ipsum nostrud laboris ex consequat culpa enim elit consectetur laborum cillum.","registered":"Monday, February 6, 2017 5:47 PM","latitude":"-45.258264","longitude":"179.218865","tags":["cupidatat","qui","cupidatat","ex","ullamco"],"favoriteFruit":"banana"},{"_id":"59a7035cd4a7afcd642db334","index":99,"guid":"80f5af6a-f72f-4b5c-8406-1a15385a4335","isActive":false,"balance":"$1,014.12","picture":"http://placehold.it/32x32","age":20,"eyeColor":"blue","name":{"first":"Carissa","last":"Sweeney"},"company":"DANCERITY","email":"carissa.sweeney@dancerity.name","phone":"+1 (919) 424-2419","address":"122 Ferris Street, Trexlertown, Nevada, 1930","about":"Tempor nostrud Lorem officia eiusmod velit. Fugiat deserunt do ex dolore aliquip eu qui eiusmod ipsum. Occaecat aliquip nulla occaecat ea sit culpa aliqua ullamco. Reprehenderit elit ullamco sint laboris eu elit labore ut id laborum. Sit elit sit velit commodo dolore nostrud laboris exercitation minim. Deserunt quis exercitation ullamco est sunt.","registered":"Tuesday, March 10, 2015 4:10 PM","latitude":"65.234266","longitude":"156.854022","tags":["duis","ad","ad","commodo","esse"],"favoriteFruit":"strawberry"}]'),mo={title:"Components/CosmozOmnitable",component:"cosmoz-omnitable",parameters:{docs:{description:{component:"A data table component with sorting, filtering, grouping."}}}},oe=i=>d`
        <style>
            .omnitable-container {
                height: 300px;
                display: flex;
                flex-direction: column;
            }
            cosmoz-omnitable {
                flex: 1;
                min-height: 0;
                display: flex;
                flex-direction: column;
            }
            cosmoz-omnitable-item-row {
                border-bottom: 1px solid #e1e2e5;
            }
            cosmoz-omnitable-header-row {
                border-bottom: 1px solid #e1e2e5;
            }
        </style>
        <div class="omnitable-container">
            <cosmoz-omnitable
                .data=${ro}
                hash-param=${i.hashParam||""}
                sort-on=${i.sortOn||""}
                group-on=${i.groupOn||""}
                ?descending=${i.descending}
                ?group-on-descending=${i.groupOnDescending}
                ?hide-select-all=${i.hideSelectAll}
                settings-id=${i.settingsId||""}
                ?no-local=${i.noLocal}
                ?no-local-sort=${i.noLocalSort}
                ?no-local-filter=${i.noLocalFilter}
                ?loading=${i.loading}
                mini-breakpoint=${i.miniBreakpoint||"768px"}
            >
                <cosmoz-omnitable-column
                    name="company"
                    title="Company"
                    value-path="company"
                    sort-on="company"
                    group-on="company"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="age"
                    title="Age"
                    value-path="age"
                    sort-on="age"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="eyeColor"
                    title="Eye Color"
                    value-path="eyeColor"
                    sort-on="eyeColor"
                    group-on="eyeColor"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="balance"
                    title="Balance"
                    value-path="balance"
                    sort-on="balance"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="registered"
                    title="Registered"
                    value-path="registered"
                    sort-on="registered"
                >
                </cosmoz-omnitable-column>

                <div slot="actions">
                    <button>Export</button>
                    <button>Settings</button>
                </div>
            </cosmoz-omnitable>
        </div>
    `,X=oe.bind({});X.args={};const Q=oe.bind({});Q.args={sortOn:"company",descending:!1};const Y=oe.bind({});Y.args={groupOn:"eyeColor",groupOnDescending:!1};const Z=oe.bind({});Z.args={loading:!0};const ee=oe.bind({});ee.args={hideSelectAll:!0};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`args => {
  return html\`
        <style>
            .omnitable-container {
                height: 300px;
                display: flex;
                flex-direction: column;
            }
            cosmoz-omnitable {
                flex: 1;
                min-height: 0;
                display: flex;
                flex-direction: column;
            }
            cosmoz-omnitable-item-row {
                border-bottom: 1px solid #e1e2e5;
            }
            cosmoz-omnitable-header-row {
                border-bottom: 1px solid #e1e2e5;
            }
        </style>
        <div class="omnitable-container">
            <cosmoz-omnitable
                .data=\${demoData}
                hash-param=\${args.hashParam || ''}
                sort-on=\${args.sortOn || ''}
                group-on=\${args.groupOn || ''}
                ?descending=\${args.descending}
                ?group-on-descending=\${args.groupOnDescending}
                ?hide-select-all=\${args.hideSelectAll}
                settings-id=\${args.settingsId || ''}
                ?no-local=\${args.noLocal}
                ?no-local-sort=\${args.noLocalSort}
                ?no-local-filter=\${args.noLocalFilter}
                ?loading=\${args.loading}
                mini-breakpoint=\${args.miniBreakpoint || '768px'}
            >
                <cosmoz-omnitable-column
                    name="company"
                    title="Company"
                    value-path="company"
                    sort-on="company"
                    group-on="company"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="age"
                    title="Age"
                    value-path="age"
                    sort-on="age"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="eyeColor"
                    title="Eye Color"
                    value-path="eyeColor"
                    sort-on="eyeColor"
                    group-on="eyeColor"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="balance"
                    title="Balance"
                    value-path="balance"
                    sort-on="balance"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="registered"
                    title="Registered"
                    value-path="registered"
                    sort-on="registered"
                >
                </cosmoz-omnitable-column>

                <div slot="actions">
                    <button>Export</button>
                    <button>Settings</button>
                </div>
            </cosmoz-omnitable>
        </div>
    \`;
}`,...X.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`args => {
  return html\`
        <style>
            .omnitable-container {
                height: 300px;
                display: flex;
                flex-direction: column;
            }
            cosmoz-omnitable {
                flex: 1;
                min-height: 0;
                display: flex;
                flex-direction: column;
            }
            cosmoz-omnitable-item-row {
                border-bottom: 1px solid #e1e2e5;
            }
            cosmoz-omnitable-header-row {
                border-bottom: 1px solid #e1e2e5;
            }
        </style>
        <div class="omnitable-container">
            <cosmoz-omnitable
                .data=\${demoData}
                hash-param=\${args.hashParam || ''}
                sort-on=\${args.sortOn || ''}
                group-on=\${args.groupOn || ''}
                ?descending=\${args.descending}
                ?group-on-descending=\${args.groupOnDescending}
                ?hide-select-all=\${args.hideSelectAll}
                settings-id=\${args.settingsId || ''}
                ?no-local=\${args.noLocal}
                ?no-local-sort=\${args.noLocalSort}
                ?no-local-filter=\${args.noLocalFilter}
                ?loading=\${args.loading}
                mini-breakpoint=\${args.miniBreakpoint || '768px'}
            >
                <cosmoz-omnitable-column
                    name="company"
                    title="Company"
                    value-path="company"
                    sort-on="company"
                    group-on="company"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="age"
                    title="Age"
                    value-path="age"
                    sort-on="age"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="eyeColor"
                    title="Eye Color"
                    value-path="eyeColor"
                    sort-on="eyeColor"
                    group-on="eyeColor"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="balance"
                    title="Balance"
                    value-path="balance"
                    sort-on="balance"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="registered"
                    title="Registered"
                    value-path="registered"
                    sort-on="registered"
                >
                </cosmoz-omnitable-column>

                <div slot="actions">
                    <button>Export</button>
                    <button>Settings</button>
                </div>
            </cosmoz-omnitable>
        </div>
    \`;
}`,...Q.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`args => {
  return html\`
        <style>
            .omnitable-container {
                height: 300px;
                display: flex;
                flex-direction: column;
            }
            cosmoz-omnitable {
                flex: 1;
                min-height: 0;
                display: flex;
                flex-direction: column;
            }
            cosmoz-omnitable-item-row {
                border-bottom: 1px solid #e1e2e5;
            }
            cosmoz-omnitable-header-row {
                border-bottom: 1px solid #e1e2e5;
            }
        </style>
        <div class="omnitable-container">
            <cosmoz-omnitable
                .data=\${demoData}
                hash-param=\${args.hashParam || ''}
                sort-on=\${args.sortOn || ''}
                group-on=\${args.groupOn || ''}
                ?descending=\${args.descending}
                ?group-on-descending=\${args.groupOnDescending}
                ?hide-select-all=\${args.hideSelectAll}
                settings-id=\${args.settingsId || ''}
                ?no-local=\${args.noLocal}
                ?no-local-sort=\${args.noLocalSort}
                ?no-local-filter=\${args.noLocalFilter}
                ?loading=\${args.loading}
                mini-breakpoint=\${args.miniBreakpoint || '768px'}
            >
                <cosmoz-omnitable-column
                    name="company"
                    title="Company"
                    value-path="company"
                    sort-on="company"
                    group-on="company"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="age"
                    title="Age"
                    value-path="age"
                    sort-on="age"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="eyeColor"
                    title="Eye Color"
                    value-path="eyeColor"
                    sort-on="eyeColor"
                    group-on="eyeColor"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="balance"
                    title="Balance"
                    value-path="balance"
                    sort-on="balance"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="registered"
                    title="Registered"
                    value-path="registered"
                    sort-on="registered"
                >
                </cosmoz-omnitable-column>

                <div slot="actions">
                    <button>Export</button>
                    <button>Settings</button>
                </div>
            </cosmoz-omnitable>
        </div>
    \`;
}`,...Y.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`args => {
  return html\`
        <style>
            .omnitable-container {
                height: 300px;
                display: flex;
                flex-direction: column;
            }
            cosmoz-omnitable {
                flex: 1;
                min-height: 0;
                display: flex;
                flex-direction: column;
            }
            cosmoz-omnitable-item-row {
                border-bottom: 1px solid #e1e2e5;
            }
            cosmoz-omnitable-header-row {
                border-bottom: 1px solid #e1e2e5;
            }
        </style>
        <div class="omnitable-container">
            <cosmoz-omnitable
                .data=\${demoData}
                hash-param=\${args.hashParam || ''}
                sort-on=\${args.sortOn || ''}
                group-on=\${args.groupOn || ''}
                ?descending=\${args.descending}
                ?group-on-descending=\${args.groupOnDescending}
                ?hide-select-all=\${args.hideSelectAll}
                settings-id=\${args.settingsId || ''}
                ?no-local=\${args.noLocal}
                ?no-local-sort=\${args.noLocalSort}
                ?no-local-filter=\${args.noLocalFilter}
                ?loading=\${args.loading}
                mini-breakpoint=\${args.miniBreakpoint || '768px'}
            >
                <cosmoz-omnitable-column
                    name="company"
                    title="Company"
                    value-path="company"
                    sort-on="company"
                    group-on="company"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="age"
                    title="Age"
                    value-path="age"
                    sort-on="age"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="eyeColor"
                    title="Eye Color"
                    value-path="eyeColor"
                    sort-on="eyeColor"
                    group-on="eyeColor"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="balance"
                    title="Balance"
                    value-path="balance"
                    sort-on="balance"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="registered"
                    title="Registered"
                    value-path="registered"
                    sort-on="registered"
                >
                </cosmoz-omnitable-column>

                <div slot="actions">
                    <button>Export</button>
                    <button>Settings</button>
                </div>
            </cosmoz-omnitable>
        </div>
    \`;
}`,...Z.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`args => {
  return html\`
        <style>
            .omnitable-container {
                height: 300px;
                display: flex;
                flex-direction: column;
            }
            cosmoz-omnitable {
                flex: 1;
                min-height: 0;
                display: flex;
                flex-direction: column;
            }
            cosmoz-omnitable-item-row {
                border-bottom: 1px solid #e1e2e5;
            }
            cosmoz-omnitable-header-row {
                border-bottom: 1px solid #e1e2e5;
            }
        </style>
        <div class="omnitable-container">
            <cosmoz-omnitable
                .data=\${demoData}
                hash-param=\${args.hashParam || ''}
                sort-on=\${args.sortOn || ''}
                group-on=\${args.groupOn || ''}
                ?descending=\${args.descending}
                ?group-on-descending=\${args.groupOnDescending}
                ?hide-select-all=\${args.hideSelectAll}
                settings-id=\${args.settingsId || ''}
                ?no-local=\${args.noLocal}
                ?no-local-sort=\${args.noLocalSort}
                ?no-local-filter=\${args.noLocalFilter}
                ?loading=\${args.loading}
                mini-breakpoint=\${args.miniBreakpoint || '768px'}
            >
                <cosmoz-omnitable-column
                    name="company"
                    title="Company"
                    value-path="company"
                    sort-on="company"
                    group-on="company"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="age"
                    title="Age"
                    value-path="age"
                    sort-on="age"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="eyeColor"
                    title="Eye Color"
                    value-path="eyeColor"
                    sort-on="eyeColor"
                    group-on="eyeColor"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="balance"
                    title="Balance"
                    value-path="balance"
                    sort-on="balance"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="registered"
                    title="Registered"
                    value-path="registered"
                    sort-on="registered"
                >
                </cosmoz-omnitable-column>

                <div slot="actions">
                    <button>Export</button>
                    <button>Settings</button>
                </div>
            </cosmoz-omnitable>
        </div>
    \`;
}`,...ee.parameters?.docs?.source}}};const po=["Default","Sorting","Grouping","Loading","HideSelectAll"];export{X as Default,Y as Grouping,ee as HideSelectAll,Z as Loading,Q as Sorting,po as __namedExportsOrder,mo as default};
