import{d as m,w as Gt,D as Ae,A as xt}from"./iframe-BVP808fv.js";import{B as be,q as O,c as T,t as Q,g as z,P as V,s as Wt,a as vt,r as qt,e as Xt,D as Ut,b as Kt,d as Qt,i as $e,h as Re,f as k,m as Jt,u as N,j as yt,k as $t,l as Yt,n as J,p as W,o as Je,v as wt,w as we,x as Zt,y as en,z as tn,T as nn,A as E,C as I,E as w,F as rn,G as on,H as ln,I as an,J as sn,K as zt,L as Me,M as Ct,N as Ne,O as un,Q as St,R as cn,S as je,U as Ye,V as dn,W as Pe,X as mn,Y as pn,Z as Ee,_ as Be,$ as gn,a0 as Te,a1 as B,a2 as hn,a3 as Ie,a4 as fn}from"./cosmoz-collapse-Cy1_gqBp.js";import"./preload-helper-PPVm8Dsz.js";const bn=({slot:n,title:e,className:t,width:r="24",height:o="24",styles:i}={})=>m`
  <svg
    slot=${be(n)}
    class=${`delete-icon ${t??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${r}
    height=${o}
    style=${be(i)}
  >
    ${O(e,()=>Gt`<title>${e}</title>`)}
    <path
      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
    />
  </svg>
`,xn=()=>m`<style>
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
</style>`;customElements.define("cz-spinner",T(xn));const vn=Q`
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
`,yn=()=>m`
	<style>
		${vn}
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
`;customElements.define("cosmoz-clear-button",T(yn));const q=({valuePath:n},e)=>z(e,n),$n=q,wn=q,zn=({valuePath:n},e)=>t=>{const r=z(t,n);return r==null?!1:r.toString().toLowerCase().trim().includes(e.toLowerCase().trim())},Cn=(n,e)=>e===""||e==null?null:e,R=n=>class extends n{static get properties(){return{isOmnitableColumn:{type:Boolean,value:!0},title:{type:String},valuePath:{type:String,notify:!0},values:{type:Array,notify:!0},filter:{type:Object},noLocalFilter:{type:Boolean},disabled:{type:Boolean,value:!1,notify:!0},editable:{type:Boolean,notify:!0},loading:{type:Boolean,value:!1,notify:!0},externalValues:{type:Boolean,value:!1,notify:!0},name:{type:String},sortOn:{type:String},groupOn:{type:String},noSort:{type:Boolean,value:!1},disabledFiltering:{type:Boolean,value:!1},width:{type:String,value:"75px"},minWidth:{type:String,value:"40px"},flex:{type:String,value:"1"},cellClass:{type:String,value:"default-cell"},headerCellClass:{type:String,value:"default-header-cell"},priority:{type:Number,value:0},hidden:{type:Boolean,notify:!0},preferredDropdownHorizontalAlign:{type:String,value:"right"},renderHeader:{type:Function},renderCell:{type:Function},renderEditCell:{type:Function},renderGroup:{type:Function},mini:{type:Number,value:null},renderMini:{type:Function}}}static get observers(){return["notifyFilterChange(filter)"]}notifyFilterChange(e){this.__ownChange||this.dispatchEvent(new CustomEvent("legacy-filter-changed",{detail:{name:this.name,state:this.legacyFilterToState(e)},bubbles:!0}))}legacyFilterToState(e){return{filter:e}}getFilterFn(){}getString(e,t){return q(e,t)}toXlsxValue(e,t){return $n(e,t)}cellTitleFn(e,t){return this.getString(e,t)}headerTitleFn(e){return e.title}serializeFilter(e,t){return Cn(e,t)}deserializeFilter(e,t){return t==null?null:typeof t=="string"?window.decodeURIComponent(t):t}getComparableValue(e,t){return wn(e,t)}computeSource(e,t){return t}_propertiesChanged(e,t,r){super._propertiesChanged(e,t,r),this.dispatchEvent(new CustomEvent("cosmoz-column-prop-changed",{bubbles:!0}))}},Sn=n=>e=>n(t=>{if(t.inputValue===void 0&&e.target.value==="")return t;clearTimeout(t.t);const r=setTimeout(()=>n(o=>({...o,filter:o.inputValue})),1e3);return{...t,inputValue:e.target.value,t:r}}),kn=n=>()=>n(e=>({...e,filter:e.inputValue})),_n=n=>e=>{e.keyCode===13&&(e.preventDefault(),n(t=>({...t,filter:t.inputValue})))},In=n=>e=>n(t=>({...t,headerFocused:e.detail.value})),Fn=n=>()=>n(e=>({...e,filter:null,inputValue:null})),On=n=>n!=null&&n!=="";class Dn extends R(V){static get properties(){return{minWidth:{type:String,value:"55px"},editMinWidth:{type:String,value:"55px"},inputValue:{type:Object,notify:!0}}}getFilterFn(e,t){if(!(t==null||t===""))return zn(e,t)}renderCell(e,{item:t}){return m`<span class="default-column">${q(e,t)}</span>`}renderEditCell(e,{item:t},r){return m`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>r(i.target.value)}
			.value=${q(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,inputValue:r,headerFocused:o},i){return m`<cosmoz-input
			label=${e.title}
			?disabled=${e.disabledFiltering}
			.value=${r??t}
			@value-changed=${Sn(i)}
			focused=${o}
			@focused-changed=${In(i)}
			@keydown=${_n(i)}
			@blur=${kn(i)}
		>
			<cosmoz-clear-button
				suffix
				slot="suffix"
				?visible=${On(t)}
				?disabled=${e.disabledFiltering}
				light
				@click=${Fn(i)}
			></cosmoz-clear-button>
		</cosmoz-input>`}legacyFilterToState(e){return{filter:e,inputValue:e}}}customElements.define("cosmoz-omnitable-column",Dn);const Vn=["label","value","slot","always-float-label","disabled"],An=vt`
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
		/* TODO: Remove later on, for compat only */
		font-size: 13px;
	}

	:host(:not([always-float-label])) label {
		transform: none !important;
	}

	:host([disabled]) {
		pointer-events: none;
		opacity: 0.5;
	}
`,En=n=>{const{label:e,value:t,slot:r}=n,o=m`<div
		id="input"
		part="input"
		role="button"
		class="control"
		slot=${r}
	>
		${t||""}
	</div>`;return qt(o,{label:e})};customElements.define("cosmoz-omnitable-dropdown-input",T(En,{observedAttributes:Vn,styleSheets:[An]}));const ee=({title:n,tooltip:e="",filterText:t="",disabled:r=!1,onOpenedChanged:o,content:i,horizontalAlign:l="left",externalValues:a=null})=>{const s={filtered:!!t,...a!=null&&{[`external-values-${a}`]:!0}};return m`
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
			class=${`${Xt(s)} dropdown`}
			title=${e||""}
			?disabled=${r}
		>
			<cosmoz-omnitable-dropdown-input
				class="input"
				slot="button"
				.label=${n}
				.placeholder=${n}
				.value=${t??""}
				text-align=${l}
				?always-float-label=${t?.length>0}
				?disabled=${r}
			></cosmoz-omnitable-dropdown-input>
			<div class="dropdown-content">${i}</div>
		</cosmoz-dropdown>
	`},kt=n=>n?typeof n.close=="function"?n:kt(n.parentElement):null,He=n=>class extends n{static get properties(){return{disabled:{type:Boolean,value:!1},filter:{type:Object,notify:!0},values:{type:Array,value(){return[]}},headerFocused:{type:Boolean,notify:!0},min:{type:Number,value:null},max:{type:Number,value:null},limits:{type:Function},autoupdate:{type:String,value:!0},locale:{type:String,value:null},_filterInput:{type:Object,value(){return{min:null,max:null}}},_range:{type:Object,computed:"_computeRange(values.*)"},_limit:{type:Object,computed:"_computeLimit(_range, _filterInput.*, min, max)",value(){return{}}},_tooltip:{type:String,computed:"_computeTooltip(title, _filterText)"},_fromClasses:{type:String,computed:"_computeInputClasses(_filterInput.min)"},_toClasses:{type:String,computed:"_computeInputClasses(_filterInput.max)"}}}static get observers(){return["_filterInputChanged(_filterInput.*, autoupdate)","_filterChanged(filter.*)","_updateLimits(limits, headerFocused)"]}disconnectedCallback(){this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),super.disconnectedCallback()}_computeInputClasses(e){return e!=null&&e!==""?"has-value":""}toNumber(e,t,r){if(e==null||e==="")return;const o=typeof e=="number"?e:Number(e);if(Number.isNaN(o))return;if(r==null||t==null)return o;const i=this.toNumber(t);return i==null?o:r(o,i)}toValue(){return this.toNumber.apply(this,arguments)}getComparableValue(e,t){if(e==null)return;let r=e;return t!=null&&(r=this.get(t,e)),this.toValue(r)}renderValue(){}getInputString(e,t=this.valuePath){const r=this.toValue(this.get(t,e));return this._toInputString(r)}_computeRange(e){const t=e.base,r=Array.isArray(t)&&t.length&&t.map(o=>this.toValue(o)).filter(o=>o!=null);return!r||r.length<1?{min:null,max:null}:r.reduce((o,i)=>({min:this.toValue(i,o.min,Math.min),max:this.toValue(i,o.max,Math.max)}),{})}_computeLimit(e,t,r,o){if(!e)return;const i=t.base,l=this.toValue(r),a=this.toValue(o),s=l??this.toValue(e.min),u=a??this.toValue(e.max);return{fromMin:s,fromMax:this.toValue(u,this._fromInputString(i.max,"max"),Math.min),toMin:this.toValue(s,this._fromInputString(i.min,"min"),Math.max),toMax:u}}_computeFilterText(e){if(e.base==null)return;const t=e.base,r=this.toValue(t.min),o=this.toValue(t.max),i=[];return r!=null&&i.push(this.renderValue(r)),i.push(" - "),o!=null&&i.push(this.renderValue(o)),i.length>1?i.join(""):void 0}_computeTooltip(e,t){return t==null?e:`${e}: ${t}`}_fromInputString(e){return this.toValue(e)}_toInputString(e){const t=this.toValue(e);return t??null}_getDefaultFilter(){return{min:null,max:null}}_filterInputChanged(e,t){const r=e.path.split(".")[1];this.__inputChangePath=r||null,t&&(this._limitInputDebouncer=Ut.debounce(this._limitInputDebouncer,Kt.after(600),()=>{this._limitInput(),this._updateFilter()}),Qt(this._limitInputDebouncer))}_clearFrom(){this.set("_filterInput.min",null),this._updateFilter()}_clearTo(){this.set("_filterInput.max",null),this._updateFilter()}_onBlur(){this._limitInput(),this._updateFilter()}_onKeyDown(e){const t=e.currentTarget,r=Array.from(t.parentElement.querySelectorAll("cosmoz-input")),o=r[r.findIndex(a=>a===t)+1],i=!o,l=r[0]===t;switch(e.keyCode){case 13:if(e.preventDefault(),!i)o.focus();else{const a=this._limitInput();this._updateFilter(),a||this._closeParent(t)}break;case 9:(i&&!e.shiftKey||l&&e.shiftKey)&&this._closeParent(t)}}_closeParent(e){const t=kt(e);t&&t.close()}_onDropdownOpenedChanged({currentTarget:e,type:t,detail:r}){(t==="focus"||r?.value===!0)&&setTimeout(()=>{e.querySelector("cosmoz-input:focus")||e.querySelector("cosmoz-input")?.focus()},100)}_limitInput(){const e=this._filterInput,t=this.__inputChangePath,r=t?this._fromInputString(this.get(t,e),t):null;if(this.__inputChangePath=null,r==null)return!1;const o=this._limit,i=t==="min"?"from":"to",l=this.get(i+"Min",o),a=this.get(i+"Max",o),s=this.toValue(r,l,Math.max),u=this.toValue(s,a,Math.min);return this.getComparableValue(r)!==this.getComparableValue(u)?(this.set(["_filterInput",t],this._toInputString(u,t)),this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),!0):!1}_updateFilter(){const e=this._filterInput,t=this.filter,r=this._fromInputString(e.min,"min"),o=this._fromInputString(e.max,"max");this.getComparableValue(r)===this.getComparableValue(t,"min")&&this.getComparableValue(o)===this.getComparableValue(t,"max")||this.set("filter",{min:r,max:o})}_filterChanged(e){if(this._filterInput==null)return;const t=this._filterInput,r=e.base,o=this._fromInputString(t.min,"min"),i=this._fromInputString(t.max,"max");this.getComparableValue(o)===this.getComparableValue(r,"min")&&this.getComparableValue(i)===this.getComparableValue(r,"max")||(this.set("_filterInput",{min:this._toInputString(r.min),max:this._toInputString(r.max)}),this._limitInputDebouncer&&this._limitInputDebouncer.cancel())}hasFilter(){const e=this.filter;return e==null?!1:this.toValue(e.min)!=null||this.toValue(e.max)!=null}resetFilter(){this.filter=this._getDefaultFilter()}_updateLimits(e,t){e&&Promise.resolve($e(e,{active:t})).then(r=>{const{min:o,max:i}=r??{};Object.assign(this,{...o!=null?{min:o}:{},...i!=null?{max:i}:{}})})}},te=n=>class extends n{static get template(){return Re`<div id="output" style="position:relative;"></div>`}connectedCallback(){super.connectedCallback(),Ae(this.render(),this.$.output)}_propertiesChanged(e,t,r){super._propertiesChanged(e,t,r),requestAnimationFrame(()=>Ae(this.render(),this.$.output))}};class Tn extends He(te(V)){static get properties(){return{currency:{type:String},autodetect:{type:Boolean,value:!1},rates:{type:Object},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:"_computeFilterText(filter.*, _formatters)"},headerFocused:{type:Boolean,value:!1}}}static get observers(){return["_valuesChanged(autodetect, currency, values)"]}render(){const e=t=>{this.headerFocused=t.type==="focus",this._onDropdownOpenedChanged(t)};return m`
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

			${ee({title:this.title,tooltip:this._tooltip,filterText:this._filterText,disabled:this.disabled,externalValues:this.externalValues,onOpenedChanged:e,content:m`
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-input
						class=${this._fromClasses}
						type="number"
						title=${k("Minimum amount")}
						label=${k("Min amount")}
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
						title=${k("Maximum amount")}
						label=${k("Max amount")}
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
		`}_valuesChanged(e,t,r){if(!Array.isArray(r)||r.length<1||!e&&t)return;const o=r.reduce((l,a)=>{if(a.currency){const s=a.currency;l[s]=(l[s]||0)+1}return l},{});let i=Object.keys(o)[0];Object.keys(o).reduce((l,a)=>{const s=Math.max(l,o[a]);return s===o[a]&&(i=a),s},0),this.set("currency",i)}toAmount(e,t,r){if(e==null||e==="")return;if(typeof e!="object"||e.currency==null||e.currency==="")return null;const o=this.toNumber(e.amount);if(o==null||Number.isNaN(o))return null;const i={currency:e.currency,amount:o};if(r==null||t==null)return i;const l=this.toAmount(t);if(l==null)return i;const a=this.rates||{},s=i.amount*(a[i.currency]||1),u=l.amount*(a[l.currency]||1);return this.toNumber(s,u,r)===s?i:l}toValue(){return this.toAmount.apply(this,arguments)}getComparableValue(e,t){const r=super.getComparableValue(e,t);if(r==null)return;const o=this.toNumber(r.amount),i=this.rates;return i==null?o:o*(i[r.currency]||1)}getString(e,t=this.valuePath){const r=this.toValue(this.get(t,e));return r===void 0?"":r===null?"Invalid value":this.renderValue(r)}getCurrency(e,t){const r=this.get(t,e);return r&&r.currency}getFormatter(e,t){const r=t||"",o=e+r||"",i=this._formatters=this._formatters||{};return i[o]||(i[o]=new Intl.NumberFormat(t||void 0,{style:"currency",currency:e})),i[o]}renderValue(e){const t=this.toAmount(e);return t==null?"":this.getFormatter(t.currency,this.locale).format(e.amount)}_amountValueChanged(e){const t=e.target,r=t.value,o=e.model.item,i=this.get(this.valuePath,o),l=Number(r),a={amount:l,currency:i.currency};this.set(this.valuePath,a,o),this._fireItemChangeEvent(o,this.valuePath,i,this.renderValue.bind(this))}_toInputString(e){const t=this.toValue(e);return t==null?null:this.toNumber(t.amount)}_toInputStringAmount(e){const t=this.rates;if(t==null)return this._toInputString(e);const r=this.toValue(e);return r==null?null:(this.toNumber(r.amount)*(t[r.currency]||1)/(t[this.currency]||1)).toFixed(2)}_fromInputString(e,t){const r=this.toNumber(e);if(r!=null)return this.toValue({amount:r,currency:t&&this.get(["filter",t,"currency"])||this.currency})}}customElements.define("cosmoz-omnitable-amount-range-input",Tn);const L=(n,e,t)=>{if(n==null||n==="")return;const r=typeof n=="number"?n:Number(n);if(!Number.isNaN(r))return r},_t=n=>{const e=L(n);return e==null?null:e.toString()},Ln=({valuePath:n},e)=>{const t=L(n?z(e,n):e);return _t(t)},Ze=n=>{const e=_t(n);return e??""},X=({valuePath:n,maximumFractionDigits:e},t)=>{if(t==null)return;const r=n?z(t,n):t,o=L(r);if(o!=null)return e!==null?L(o.toFixed(e)):o},Rn=Jt((n,e,t)=>{const r={localeMatcher:"best fit"};return e!==null&&(r.minimumFractionDigits=e),t!==null&&(r.maximumFractionDigits=t),new Intl.NumberFormat(n||void 0,r)}),et=({valuePath:n,locale:e,minimumFractionDigits:t,maximumFractionDigits:r},o)=>{const i=n?z(o,n):o;if(i==null)return"";const l=L(i);return l==null?void 0:Rn(e,t,r).format(l)},Mn=(n,e)=>t=>{const r=X(n,t);if(r==null)return!1;const o=X({...n,valuePath:"min"},e),i=X({...n,valuePath:"max"},e);return!(r<(o??-1/0)||r>(i??1/0))},Z=(n={},e,t,r)=>{if(e==null||e==="")return;if(typeof e!="object"||e.currency==null||e.currency==="")return null;const o=L(e.amount);return o==null||Number.isNaN(o)?null:{currency:e.currency,amount:o}},U=({valuePath:n,rates:e},t)=>{if(t==null)return;let r=t;n!=null&&(r=z(t,n));const o=Z(e,r);if(o==null)return;const i=L(o.amount);return e==null||i==null?i:i*(e?.[o.currency]||1)},Nn=(n,e)=>t=>{const r=U(n,t);if(r===void 0)return!1;const o=U({...n,valuePath:"min"},e),i=U({...n,valuePath:"max"},e);return o===void 0||i===void 0?!0:!(r<o||r>i)},re={},jn=(n,e)=>{const r=n+(e||"")||"";return re[r]||(re[r]=new Intl.NumberFormat(e||void 0,{style:"currency",currency:n})),re[r]},Pn=(n,e,t)=>{const r=Z(n,e);return r==null?"":jn(r.currency,t).format(r.amount)},tt=({valuePath:n,rates:e,locale:t},r)=>{const o=Z(e,n?z(r,n):void 0);return o===void 0?"":o===null?"Invalid value":Pn(e,o,t)},nt=n=>n?n.amount+n.currency:"",rt=n=>{if(n==null||n==="")return;const e=n.match(/^(-?[\d]+)([\D]+?)$/iu);if(!(!Array.isArray(e)||e.length<0))return{amount:Number(e[1]),currency:e[2]}},Bn=({valuePath:n},e)=>n?z(e,n)?.currency:null,Hn=({valuePath:n},e)=>n?z(e,n)?.amount:void 0,j=Symbol("column"),Gn=n=>{let e=!0;const t=n.map(r=>r.name);return n.forEach(r=>{r.name==null&&(e=!1,console.error("The name attribute needs to be set on all columns! Missing on column",r))}),n.forEach(r=>{t.indexOf(r.name)!==t.lastIndexOf(r.name)&&(e=!1,console.error("The name attribute needs to be unique among all columns! Not unique on column",r))}),e},Wn=(n,e)=>{const t=n.valuePath??n.name;return{name:n.name,title:n.title,valuePath:t,groupOn:n.groupOn??t,sortOn:n.sortOn??t,noSort:n.noSort,disabledFiltering:e||n.disabledFiltering,minWidth:n.minWidth,width:n.width,flex:n.flex,priority:n.priority,getString:n.getString,getComparableValue:n.getComparableValue,serializeFilter:n.serializeFilter,deserializeFilter:n.deserializeFilter,toXlsxValue:n.toXlsxValue,renderHeader:n.renderHeader,renderCell:n.renderCell,renderEditCell:n.renderEditCell,renderGroup:n.renderGroup,cellTitleFn:n.cellTitleFn,headerTitleFn:n.headerTitleFn,getFilterFn:n.getFilterFn,headerCellClass:n.headerCellClass,cellClass:n.cellClass,editable:n.editable,values:n.values,source:$t(n.computeSource),noLocalFilter:n.noLocalFilter,mini:n.mini,renderMini:n.renderMini,loading:n.loading,externalValues:n.externalValues,computeSource:n.computeSource,trueLabel:n.trueLabel,falseLabel:n.falseLabel,valueProperty:n.valueProperty,textProperty:n.textProperty,emptyLabel:n.emptyLabel,emptyValue:n.emptyValue,min:n.min,max:n.max,locale:n.locale,autoupdate:n.autoupdate,maximumFractionDigits:n.maximumFractionDigits,minimumFractionDigits:n.minimumFractionDigits,currency:n.currency,rates:n.rates,autodetect:n.autodetect,ownerTree:n.ownerTree,keyProperty:n.keyProperty,...n.getConfig?.(n),[j]:n}},qn=n=>n.isOmnitableColumn&&!n.hidden,Xn=n=>{const e=n.filter(qn);return Gn(e)?e:[]},Un=(n,e,t)=>(Array.isArray(e)?n.filter(o=>e.includes(o.name)):n.filter(o=>!o.disabled)).map(o=>Wn(o,t)),Kn=(n,{enabledColumns:e,disabledFiltering:t})=>{const[r,o]=N([]);return yt(()=>{let i,l=[];const a=n.shadowRoot.querySelector("#columnsSlot"),s=d=>()=>{const c=a.assignedNodes({flatten:!0});if(d)l=c;else{const g=c.filter(b=>!l.includes(b)),p=l.filter(b=>!c.includes(b)),v=[...g,...p].some(b=>b.isOmnitableColumn);if(l=c,!v)return}o(Un(Xn(c),e,t))},u=d=>{cancelAnimationFrame(i),i=requestAnimationFrame(s(d?.type==="cosmoz-column-prop-changed"))};return u(),a.addEventListener("slotchange",u),n.addEventListener("cosmoz-column-prop-changed",u),()=>{a.removeEventListener("slotchange",u),n.removeEventListener("cosmoz-column-prop-changed",u),cancelAnimationFrame(i)}},[e,t]),r},It=(n,e)=>Array.isArray(n)?n.map(t=>z(t,e)).filter((t,r,o)=>t!=null&&o.indexOf(t)===r):void 0,ne=({externalValues:n,values:e,valuePath:t},r)=>{if(n)return n;if(typeof e=="function")return e;if(t!==void 0)return It(r,t)},Qn=(n,e,t,r)=>{const{valuePath:o}=e,i=o!==void 0?z(t,o):void 0;if(r===i)return;o!==void 0&&Yt(t,o,r);const l={item:t,valuePath:o,value:r,oldValue:i,column:e[j]};n.dispatchEvent(new CustomEvent("column-item-changed",{bubbles:!0,composed:!0,detail:l}))};class Jn extends R(V){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},currency:{type:String,notify:!0},autodetect:{type:Boolean,value:!1,notify:!0},rates:{type:Object,notify:!0},width:{type:String,value:"70px"},cellClass:{type:String,value:"amount-cell align-right"},headerCellClass:{type:String,value:"amount-header-cell"}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const r=U({...e,valuePath:"min"},t),o=U({...e,valuePath:"max"},t);if(!(r==null&&o==null))return Nn(e,t)}getString(e,t){return tt(e,t)}toXlsxValue(e,t){return tt(e,t)}getComparableValue(e,t){return U(e,t)}serializeFilter({rates:e},t){if(t==null)return;const r=Z(e,t.min),o=Z(e,t.max);if(!(r==null&&o==null))return nt(r)+"~"+nt(o)}deserializeFilter(e,t){if(t==null||t==="")return null;const r=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(r)?{min:rt(r[1]),max:rt(r[2])}:null}renderCell(e,{item:t}){return m`<span>${e.getString(e,t)}</span>`}renderEditCell(e,{item:t},r){return m`<cosmoz-input
			no-label-float
			type="number"
			@change=${i=>r({amount:i.target.value,currency:z(t,e.valuePath)?.currency})}
			.value=${Hn(e,t)}
		>
			<div slot="suffix">${Bn(e,t)}</div>
		</cosmoz-input>`}renderHeader({title:e,min:t,max:r,limits:o,locale:i,rates:l,currency:a,autoupdate:s,autodetect:u,disabledFiltering:d},{filter:c},g,p){return m`<cosmoz-omnitable-amount-range-input
			.title=${e}
			?disabled=${d}
			.filter=${c}
			.values=${p}
			.rates=${l}
			.min=${t}
			.max=${r}
			.limits=${o}
			.locale=${i}
			.currency=${a}
			.autoupdate=${s}
			.autodetect=${u}
			@filter-changed=${({detail:{value:v}})=>g(b=>({...b,filter:v}))}
			@header-focused-changed=${({detail:{value:v}})=>g(b=>({...b,headerFocused:v}))}
		></cosmoz-omnitable-amount-range-input>`}computeSource(e,t){return ne(e,t)}}customElements.define("cosmoz-omnitable-column-amount",Jn);const Yn=(n,e)=>{if(!Array.isArray(n))return;const t=[];return n.reduce((r,o)=>Array.isArray(o)?(o.forEach(i=>{r.push(i)}),r):(r.push(o),r),[]).filter((r,o,i)=>{if(i.indexOf(r)!==o)return!1;if(e){const l=z(r,e);if(t.indexOf(l)!==-1)return!1;t.push(l)}return!0})},Zn=(n,e,t)=>{if(n==null)return[];if(Array.isArray(n)){const r=Yn(n,e);if(!r?.length)return r;const o=t??"label",i=l=>typeof l=="object"&&l!=null?String(z(l,o)??""):String(l??"");return r.sort((l,a)=>i(l).localeCompare(i(a)))}if(typeof n=="object"){const r=e??"id",o=t??"label";return Object.entries(n).map(([i,l])=>({[r]:i,[o]:l})).sort((i,l)=>String(i[o]??"").localeCompare(String(l[o]??"")))}return[]},Ge=(n,e,t)=>J(e&&z(n,e)).map(W(t)),We=({valuePath:n,textProperty:e},t)=>Ge(t,n,e).filter(r=>r!=null).join(", "),er=We,tr=({valueProperty:n,valuePath:e,emptyValue:t,emptyProperty:r},o)=>i=>{const l=W(n),a=J(z(i,e));return o.some(s=>a.length===0&&W(r||n)(s)===t||a.some(u=>l(u)===l(s)))},ze=n=>e=>n(t=>({...t,filter:e})),Ce=n=>e=>n(t=>({...t,headerFocused:e})),Se=n=>e=>n(t=>({...t,query:e})),Ft=({emptyValue:n,emptyLabel:e,emptyProperty:t,textProperty:r,valueProperty:o},i)=>{const l=Zn(i,o,r);return!e||n===void 0||!r||!(t||o)||!l?l:[{[r]:e,[t||o]:n},...l]},nr=(n,e)=>Ft(n,It(e,n.valuePath)),ke=n=>class extends n{static get properties(){return{textProperty:{type:String},valueProperty:{type:String},emptyLabel:{type:String},emptyValue:{type:Object},emptyProperty:{type:String}}}getConfig(e){return{emptyProperty:e.emptyProperty}}getString(e,t){return We(e,t)}toXlsxValue(e,t){return er(e,t)}getComparableValue({valuePath:e,valueProperty:t},r){const o=z(r,e);return t==null?o:J(o).reduce((l,a)=>(l.push(z(a,t)),l),[]).sort().join(" ")}getFilterFn(e,t){if(!(!t||!Array.isArray(t)||t.length===0))return tr(e,t)}serializeFilter(e,t){return t.length===0?null:JSON.stringify(t)}deserializeFilter(e,t){return JSON.parse(decodeURIComponent(t))}computeSource(e,t){return e.externalValues||typeof e.values=="function"?async(...r)=>Ft(e,await Promise.resolve($e(e.values,...r))):nr(e,t)}},rr=({valuePath:n,textProperty:e,valueProperty:t},r)=>{const o=e?wt(e):W(t),i=J(n&&z(r,n)).map(o);return i.length>1?i.filter(Boolean).join(","):i[0]},or=({valueProperty:n,valuePath:e,emptyValue:t,emptyProperty:r},o)=>{const i=W(n),l=W(r||n),a=new Set(o.filter(c=>c.excluded).map(c=>i(c.item))),s=new Set(o.filter(c=>!c.excluded).map(c=>i(c.item))),u=o.some(c=>c.excluded&&l(c.item)===t),d=o.some(c=>!c.excluded&&l(c.item)===t);return c=>{const g=J(z(c,e)).map(i);return g.length===0?!u&&(d||s.size===0):!g.some(p=>a.has(p))&&(s.size===0||g.some(p=>s.has(p)))}};let ir=class extends ke(R(V)){static get properties(){return{headerCellClass:{type:String,value:"autocomplete-header-cell"},minWidth:{type:String,value:"55px"},editMinWidth:{type:String,value:"55px"},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return m`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},r){return m`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>r(i.target.value)}
			.value=${q(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:r},o,i){return m`<cosmoz-autocomplete-excluding
			class="external-values-${e.externalValues}"
			?disabled=${e.disabledFiltering}
			?keep-opened=${e.keepOpened}
			?keep-query=${e.keepQuery}
			?show-single=${e.showSingle}
			?preserve-order=${e.preserveOrder}
			.textual=${e.textual}
			.label=${e.title}
			.source=${i}
			.textProperty=${e.textProperty}
			.valueProperty=${e.valueProperty}
			.itemRenderer=${e[j]?.itemRenderer}
			.value=${t}
			.text=${r}
			.limit=${e.limit}
			@opened-changed=${l=>Ce(o)(l.detail.value)}
			@value-changed=${Je(ze(o))}
			@text-changed=${Je(Se(o))}
			>${O(e.loading,()=>m`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-excluding
		>`}getComparableValue(e,t){return rr(e,t)}getFilterFn(e,t){if(!(!t||!Array.isArray(t)||t.length===0))return or(e,t)}};customElements.define("cosmoz-omnitable-column-autocomplete-excluding",ir);const lr=({valuePath:n,textProperty:e,valueProperty:t},r)=>{const o=e?wt(e):W(t),i=J(n&&z(r,n)).map(o);return i.length>1?i.filter(Boolean).join(","):i[0]};class ar extends ke(R(V)){static get properties(){return{headerCellClass:{type:String,value:"autocomplete-header-cell"},minWidth:{type:String,value:"55px"},editMinWidth:{type:String,value:"55px"},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return m`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},r){return m`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>r(i.target.value)}
			.value=${q(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:r},o,i){return m`<cosmoz-autocomplete-ui
			class="external-values-${e.externalValues}"
			?disabled=${e.disabledFiltering}
			?keep-opened=${e.keepOpened}
			?keep-query=${e.keepQuery}
			?show-single=${e.showSingle}
			?preserve-order=${e.preserveOrder}
			.textual=${e.textual}
			.label=${e.title}
			.source=${i}
			.textProperty=${e.textProperty}
			.valueProperty=${e.valueProperty}
			.itemRenderer=${e[j]?.itemRenderer}
			.value=${t}
			.text=${r}
			.limit=${e.limit}
			.onChange=${ze(o)}
			@opened-changed=${l=>Ce(o)(l.detail.value)}
			.onText=${Se(o)}
			>${O(e.loading,()=>m`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}getComparableValue(e,t){return lr(e,t)}}customElements.define("cosmoz-omnitable-column-autocomplete",ar);const qe=(n,e)=>e.find(({value:t})=>n===t),sr=(n,e,t)=>{const r=qe(e,t);return r?r.text:n},ot=(n,e,t,r)=>sr(n,z(e,t),r),ur=({valuePath:n},e,t)=>qe(z(e,n),t),cr=n=>e=>{n(t=>({...t,filter:e?.[0]?.value??null}))},dr=n=>e=>{n(t=>({...t,headerFocused:e}))},mr=n=>e=>{n(t=>({...t,query:e}))},pr=n=>e=>n(e?.[0]?.value),it=({valuePath:n,trueLabel:e,falseLabel:t},r)=>z(r,n)?e:t,gr=({valuePath:n},e)=>t=>z(t,n)===e,oe=$t((n,e)=>[{text:n,value:!0},{text:e,value:!1}]),hr=({valuePath:n,trueLabel:e,falseLabel:t},r)=>n?z(r,n)?e:t:"",fr=(n,e)=>{try{return JSON.parse(e)}catch{return null}};class br extends R(V){static get properties(){return{trueLabel:{type:String,value:"True"},falseLabel:{type:String,value:"False"},flex:{type:String,value:"0"},cellClass:{type:String,value:"boolean-cell"}}}getString(e,t){return it(e,t)}renderCell(e,{item:t}){return it(e,t)}renderEditCell(e,{item:t},r){const{trueLabel:o,falseLabel:i}=e;return m`<cosmoz-autocomplete
			no-label-float
			.title=${ot(e.title,t,e.valuePath,oe(o,i))}
			.source=${oe(o,i)}
			.textProperty=${"text"}
			.value=${ur(e,t,oe(o,i))}
			.onChange=${pr(r)}
			.limit=${1}
			>${O(e.loading,()=>m`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete
		>`}renderHeader(e,{filter:t,query:r},o,i){return m`<cosmoz-autocomplete-ui
			?disabled=${e.disabledFiltering}
			.label=${e.title}
			.title=${ot(e.title,t,e.valuePath,i)}
			.source=${i}
			.textProperty=${"text"}
			.value=${qe(t,i)}
			.text=${r}
			.onChange=${cr(o)}
			@opened-changed=${l=>dr(o)(l.detail.value)}
			.onText=${mr(o)}
			.limit=${1}
			>${O(e.loading,()=>m`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}computeSource({trueLabel:e,falseLabel:t}){return oe(e,t)}getFilterFn(e,t){if(t!=null)return gr(e,t)}toXlsxValue(e,t){return hr(e,t)}deserializeFilter(e,t){return fr(e,t)}}customElements.define("cosmoz-omnitable-column-boolean",br);const Xe=n=>class extends He(n){static get properties(){return{max:{type:Date,value:null},min:{type:Date,value:null},_filterText:{type:String,computed:"_computeFilterText(filter.*, formatter)"},formatter:{type:Object,computed:"_computeFormatter(locale)"}}}toDate(e,t,r){if(e==null||e==="")return;let o=e;if(o instanceof Date||(typeof e=="string"&&(o=this.getAbsoluteISOString(o)),o=new Date(o)),Number.isNaN(o.getTime()))return null;if(r==null||t==null)return o;const i=this.toDate(t);if(i==null)return o;const l=this.getComparableValue(o),a=this.getComparableValue(i);return r(l,a)===l?o:i}toValue(){return this.toDate.apply(this,arguments)}getComparableValue(e,t){const r=super.getComparableValue(e,t);if(r!=null)return this.toNumber(r.getTime())}getString(e,t=this.valuePath,r=this.formatter){const o=this.toValue(this.get(t,e));return o===void 0?"":o===null?"Invalid Date":this.renderValue(o,r)}getAbsoluteISOString(e){return e.length===19?e+this._getTimezoneString(e):e}_getTimezoneString(e){const t=-new Date(e).getTimezoneOffset()/60;return(t<0?"-":"+")+["0",Math.abs(t)].join("").substr(-2)+":00"}renderValue(e,t=this.formatter){if(t==null)return;const r=this.toValue(e);if(r!=null)return t.format(r)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0)}_toInputString(e){const t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(0,10)}_dateValueChanged(e){const t=e.currentTarget,r=t.value,o=e.model.item,i=this.get(this.valuePath,o),l=this._fromInputString(r);this.set(this.valuePath,l,o),this._fireItemChangeEvent(o,this.valuePath,i,this.renderValue.bind(this))}_toLocalISOString(e){return we(e)}};class xr extends Xe(te(V)){render(){const e=t=>{this.headerFocused=t.type==="focus"};return m`
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

			${ee({title:this.title,tooltip:this._tooltip,filterText:this._filterText,disabled:this.disabled,externalValues:this.externalValues,onOpenedChanged:e,content:m`
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-input
						type="date"
						label=${k("From date")}
						min=${this._toInputString(this._limit.fromMin)}
						max=${this._toInputString(this._limit.fromMax)}
						.value=${this._filterInput?.min}
						@value-changed=${t=>this.set("_filterInput.min",t.detail.value)}
					></cosmoz-input>
					<cosmoz-input
						type="date"
						label=${k("Until date")}
						min=${this._toInputString(this._limit.toMin)}
						max=${this._toInputString(this._limit.toMax)}
						.value=${this._filterInput?.max}
						@value-changed=${t=>this.set("_filterInput.max",t.detail.value)}
					></cosmoz-input>
				`})}
		`}_fromInputString(e,t){const r=this.toDate(e);if(r!=null)return t==="min"&&r.setHours(0,0,0,0),t==="max"&&r.setHours(23,59,59),r}_filterInputChanged(e,t){const r=e.path.split(".")[1],o=r&&e.value;if(o&&o.match(/^0+/u)){this._limitInputDebouncer.cancel();return}super._filterInputChanged(e,t)}}customElements.define("cosmoz-omnitable-date-range-input",xr);const vr=n=>{const e=-new Date(n).getTimezoneOffset()/60;return(e<0?"-":"+")+["0",Math.abs(e)].join("").substr(-2)+":00"},Ue=n=>n.length===19?n+vr(n):n,Ot=n=>{if(n==null||n==="")return;let e=n;return!(e instanceof Date)&&(typeof n=="string"&&(e=Ue(e)),e=Zt(e),!e)||Number.isNaN(e.getTime())?null:e},P=({valuePath:n},e)=>{if(e==null)return;let t=e;n!=null&&(t=z(e,n));const r=Ot(t);if(r!=null)return L(r.getTime())},A=(n,e,t)=>{const r=Ot(n);return r??null},Ke=(n,e)=>{if(e==null)return;const t=A(n);if(t!=null)return e.format(t)},ie={},yr=n=>{const e=n||"";return ie[e]||(ie[e]=new Intl.DateTimeFormat(n||void 0)),ie[e]},lt=({valuePath:n,locale:e},t)=>{let r=z(t,n||"");return r===void 0?"":(r=A(r),r===null?"Invalid Date":Ke(r,yr(e)))},Dt=n=>{const e=A(n);if(e==null)return null;const t=we(e);return t==null?null:t.slice(0,10)},$r=({valuePath:n},e)=>Dt(z(e,n||"")),Vt=(n,e)=>{const t=A(n);if(t!=null)return t},at=n=>{const e=Dt(n);return e??""},wr=({valuePath:n},e)=>{if(!n)return"";const t=A(z(e,n));if(!t)return"";const r=A(we(t));return r?(r.setHours(0,0,0,0),r):""},At=(n,e)=>t=>{const r=P(n,t);if(r==null)return!1;const o=P({...n,valuePath:"min"},e),i=P({...n,valuePath:"max"},e);return!(r<(o??-1/0)||r>(i??1/0))};class zr extends R(V){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"date-header-cell"},width:{type:String,value:"100px"},minWidth:{type:String,value:"82px"},flex:{type:String,value:"0"}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const r=P({...e,valuePath:"min"},t),o=P({...e,valuePath:"max"},t);if(!(r==null&&o==null))return At(e,t)}getString(e,t){return lt(e,t)}toXlsxValue(e,t){return wr(e,t)}getComparableValue(e,t){return P(e,t)}serializeFilter(e,t){if(t==null)return;const r=A(t.min),o=A(t.max);if(!(r==null&&o==null))return at(r)+"~"+at(o)}deserializeFilter(e,t){if(t==null||t==="")return null;const r=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(r)?{min:A(r[1]),max:A(r[2])}:null}renderCell(e,{item:t}){return m`<div class="omnitable-cell-date">
			${lt(e,t)}
		</div>`}renderEditCell(e,{item:t},r){return m`<cosmoz-input
			no-label-float
			type="date"
			@change=${i=>r(Vt(i.target.value))}
			.value=${$r(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:r,limits:o,locale:i,disabledFiltering:l},{filter:a},s,u){return m`<cosmoz-omnitable-date-range-input
			.title=${e}
			?disabled=${l}
			.filter=${a}
			.values=${u}
			.min=${t}
			.max=${r}
			.limits=${o}
			.locale=${i}
			@filter-changed=${({detail:{value:d}})=>s(c=>({...c,filter:d}))}
			@header-focused-changed=${({detail:{value:d}})=>s(c=>({...c,headerFocused:d}))}
		></cosmoz-omnitable-date-range-input>`}computeSource(e,t){return ne(e,t)}}customElements.define("cosmoz-omnitable-column-date",zr);class Cr extends Xe(te(V)){render(){const e=t=>{this.headerFocused=t.type==="focus"};return m`
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

			${ee({title:this.title,tooltip:this._tooltip,filterText:this._filterText,disabled:this.disabled,externalValues:this.externalValues,onOpenedChanged:e,content:m`
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-datetime-input
						date-label=${k("From date")}
						time-label=${k("From time")}
						min=${this._toInputString(this._limit.fromMin)}
						max=${this._toInputString(this._limit.fromMax)}
						step=${this.filterStep}
						.value=${this._filterInput?.min}
						@value-changed=${t=>this.set("_filterInput.min",t.detail.value)}
					></cosmoz-datetime-input>
					<cosmoz-datetime-input
						date-label=${k("To date")}
						time-label=${k("To time")}
						min=${this._toInputString(this._limit.toMin)}
						max=${this._toInputString(this._limit.toMax)}
						step=${this.filterStep}
						.value=${this._filterInput?.max}
						@value-changed=${t=>this.set("_filterInput.max",t.detail.value)}
					></cosmoz-datetime-input>
				`})}
		`}_toInputString(e){const t=this.toValue(e);if(t!=null)return this._toLocalISOString(t).slice(0,19)}_computeFormatter(e){const t={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return new Intl.DateTimeFormat(e||void 0,t)}}customElements.define("cosmoz-omnitable-datetime-range-input",Cr);const le={},Sr=n=>{const e=n||"";if(le[e])return le[e];const t={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return le[e]=new Intl.DateTimeFormat(n||void 0,t),le[e]},Fe=({valuePath:n,locale:e},t)=>{const r=A(z(t,n||""));return r===void 0?"":r===null?"Invalid Date":Ke(r,Sr(e))},kr=({valuePath:n},e)=>n?z(e,n):"",st=n=>{const e=A(n);return e==null?"":e.toISOString().slice(0,19).replace(/:/gu,".")},ut=n=>{if(!(n==null||n==="")&&typeof n=="string")return A(n.replace(/\./gu,":")+"Z")};class ct extends R(V){static get is(){return"cosmoz-omnitable-column-datetime"}static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"datetime-header-cell"},width:{type:String,value:"210px"},minWidth:{type:String,value:"128px"},flex:{type:String,value:"0"},filterStep:{type:Number,value:1}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const r=P({...e,valuePath:"min"},t),o=P({...e,valuePath:"max"},t);if(!(r==null&&o==null))return At(e,t)}getString(e,t){return Fe(e,t)}toXlsxValue(e,t){return kr(e,t)}getComparableValue(e,t){return P(e,t)}serializeFilter(e,t){if(t==null)return;const r=A(t.min),o=A(t.max);if(!(r==null&&o==null))return st(r)+"~"+st(o)}deserializeFilter(e,t){if(t==null||t==="")return null;const r=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(r)?{min:ut(r[1]),max:ut(r[2])}:null}renderCell(e,{item:t}){return Fe(e,t)}renderEditCell(e,{item:t},r){return m`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>r(Vt(i.target.value))}
			.value=${Fe(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:r,limits:o,locale:i,filterStep:l,disabledFiltering:a},{filter:s},u,d){return m`<cosmoz-omnitable-datetime-range-input
			.title=${e}
			?disabled=${a}
			.filter=${s}
			.values=${d}
			.min=${t}
			.max=${r}
			.limits=${o}
			.locale=${i}
			.filterStep=${l}
			@filter-changed=${({detail:{value:c}})=>u(g=>({...g,filter:c}))}
			@header-focused-changed=${({detail:{value:c}})=>u(g=>({...g,headerFocused:c}))}
		></cosmoz-omnitable-datetime-range-input>`}computeSource(e,t){return ne(e,t)}}customElements.define(ct.is,ct);class _r extends ke(R(V)){renderCell({valuePath:e,textProperty:t},{item:r}){const o=Ge(r,e,t).map(i=>m`<li>${i}</li>`);return m`
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
				${o}
			</ul>
		`}renderEditCell(){return"not implemented"}renderHeader(e,{filter:t,query:r},o,i){return m`<cosmoz-autocomplete-ui
			class="external-values-${e.externalValues}"
			?disabled=${e.disabledFiltering}
			.label=${e.title}
			.source=${i}
			.textProperty=${e.textProperty}
			.value=${t}
			.text=${r}
			.onChange=${ze(o)}
			@opened-changed=${l=>Ce(o)(l.detail.value)}
			.onText=${Se(o)}
			>${O(e.loading,()=>m`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		> `}}customElements.define("cosmoz-omnitable-column-list-horizontal",_r);window.Cosmoz=window.Cosmoz||{};class dt extends en(tn(nn,V)){static get template(){return Re`
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
		`}static get is(){return"cosmoz-omnitable-column-list-data"}static get properties(){return{items:{type:Array},_expanded:{type:Boolean,value:!1},_othersCount:{type:Number,computed:"_computeOthersCount(items)"}}}static get observers(){return["_itemsLengthChanged(items.length)"]}_itemsLengthChanged(){requestAnimationFrame(()=>this.dispatchEvent(new CustomEvent("expand",{bubbles:!0})))}_firstItem(e){if(e!=null&&e.length>0)return e[0]}_hideExpand(e,t){return e!==void 0&&e.length!==null?e.length<=2||t:!0}_hideCollapse(e,t){return e!==void 0&&e.length!==null?e.length<=2||!t:!0}_otherItems(e,t){if(e!=null&&(e.length<=2||t))return e.slice(1)}_computeOthersCount(e){if(e!=null)return e.length-1}_toggleExpand(e){this._expanded=!this._expanded,e.stopPropagation(),e.preventDefault()}}customElements.define(dt.is,dt);class Ir extends ke(R(V)){static get properties(){return{keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,textual:e.textual}}renderCell({valuePath:e,textProperty:t},{item:r}){return m`<cosmoz-omnitable-column-list-data
			.items=${Ge(r,e,t)}
		></cosmoz-omnitable-column-list-data>`}renderEditCell(e,{item:t},r){const o=i=>r(i.target.value.split(/,\s*/gu));return m`<cosmoz-input
			no-label-float
			type="text"
			.value=${We(e,t)}
			@change=${o}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:r},o,i){return m`<cosmoz-autocomplete-ui
			class="external-values-${e.externalValues}"
			?disabled=${e.disabledFiltering}
			?keep-opened=${e.keepOpened}
			?keep-query=${e.keepQuery}
			.textual=${e.textual}
			.column=${e}
			.label=${e.title}
			.source=${i}
			.textProperty=${e.textProperty}
			.valueProperty=${e.valueProperty}
			.itemRenderer=${e[j]?.itemRenderer}
			.value=${t}
			.text=${r}
			.onChange=${ze(o)}
			@opened-changed=${l=>Ce(o)(l.detail.value)}
			.onText=${Se(o)}
			>${O(e.loading,()=>m`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}}customElements.define("cosmoz-omnitable-column-list",Ir);class Fr extends He(te(V)){static get properties(){return{maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},formatter:{type:Object,computed:"_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)"},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:"_computeFilterText(filter.*, formatter)"},headerFocused:{type:Boolean,value:!1}}}render(){const e=t=>{this.headerFocused=t.type==="focus",this._onDropdownOpenedChanged(t)};return m`
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

			${ee({title:this.title,tooltip:this._tooltip,filterText:this._filterText,disabled:this.disabled,horizontalAlign:"right",externalValues:this.externalValues,onOpenedChanged:e,content:m`
					<h3>${this.title}</h3>
					<cosmoz-input
						class=${this._fromClasses}
						type="number"
						label=${k("From")}
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
						label=${k("To")}
						.value=${this._filterInput?.max}
						@value-changed=${t=>{this.set("_filterInput.max",t.detail.value)}}
						@blur=${t=>this._onBlur(t)}
						@keydown=${t=>this._onKeyDown(t)}
						min=${this._toInputString(this._limit.toMin)}
						max=${this._toInputString(this._limit.toMax)}
					></cosmoz-input>
				`})}
		`}_computeFormatter(e,t,r){const o={localeMatcher:"best fit"};return t!==null&&(o.minimumFractionDigits=t),r!==null&&(o.maximumFractionDigits=r),new Intl.NumberFormat(e||void 0,o)}getComparableValue(e,t){if(e==null)return;let r=e;if(t!=null&&(r=this.get(t,e)),r=this.toValue(r),r==null)return;const o=this.maximumFractionDigits;return o!==null?this.toValue(r.toFixed(o)):r}renderValue(e,t=this.formatter){const r=this.toNumber(e);if(r!=null)return t.format(r)}}customElements.define("cosmoz-omnitable-number-range-input",Fr);class Or extends R(V){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},cellClass:{type:String,value:"number-cell align-right"},width:{type:String,value:"30px"},minWidth:{type:String,value:"30px"},headerCellClass:{type:String,value:"number-header-cell"},maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const r=X({...e,valuePath:"min"},t),o=X({...e,valuePath:"max"},t);if(!(r==null&&o==null))return Mn(e,t)}getString(e,t){return et(e,t)}toXlsxValue({valuePath:e},t){return z(t,e)}getComparableValue(e,t){return X(e,t)}serializeFilter(e,t){if(t==null)return;const r=L(t.min),o=L(t.max);if(!(r==null&&o==null))return Ze(r)+"~"+Ze(o)}deserializeFilter(e,t){if(t==null||t==="")return null;const r=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(r)?{min:L(r[1]),max:L(r[2])}:null}renderCell(e,{item:t}){return m`<div class="omnitable-cell-number">
			${et(e,t)}
		</div>`}renderEditCell(e,{item:t},r){return m`<cosmoz-input
			no-label-float
			type="number"
			@change=${i=>r(i.target.value)}
			.value=${Ln(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:r,limits:o,locale:i,maximumFractionDigits:l,minimumFractionDigits:a,autoupdate:s,disabledFiltering:u},{filter:d},c,g){return m`<cosmoz-omnitable-number-range-input
			.title=${e}
			?disabled=${u}
			.filter=${d}
			.values=${g}
			.min=${t}
			.max=${r}
			.limits=${o}
			.locale=${i}
			.maximumFractionDigits=${l}
			.minimumFractionDigsits=${a}
			.autoupdate=${s}
			@filter-changed=${({detail:{value:p}})=>c(v=>({...v,filter:p}))}
			@header-focused-changed=${({detail:{value:p}})=>c(v=>({...v,headerFocused:p}))}
		></cosmoz-omnitable-number-range-input>`}computeSource(e,t){return ne(e,t)}}customElements.define("cosmoz-omnitable-column-number",Or);class Dr extends Xe(te(V)){render(){const e=t=>{this.headerFocused=t.type==="focus"};return m`
			<cosmoz-clear-button
				@click=${()=>this.resetFilter()}
				?visible=${this.hasFilter()}
			></cosmoz-clear-button>

			${ee({title:this.title,tooltip:this._tooltip,filterText:this._filterText,disabled:this.disabled,externalValues:this.externalValues,onOpenedChanged:e,content:m`
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-input
						type="time"
						label=${k("From time")}
						step=${this.filterStep}
						.value=${this._filterInput.min}
						@value-changed=${t=>this.set("_filterInput.min",t.detail.value)}
					></cosmoz-input>
					<cosmoz-input
						type="time"
						label=${k("Until time")}
						step=${this.filterStep}
						.value=${this._filterInput.max}
						@value-changed=${t=>this.set("_filterInput.max",t.detail.value)}
					></cosmoz-input>
				`})}
		`}get _fixedDate(){return"1970-01-01"}toDate(e,t,r){const o=typeof e=="string"&&e.length>3&&e.length<=9?this.getAbsoluteISOString(this._fixedDate+"T"+e):e;return super.toDate(o,t,r)}_toInputString(e){const t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(11,19)}getComparableValue(e,t){if(e==null)return;let r=this._toInputString(t==null?e:this.get(t,e));if(r!=null&&(r=this.toValue(this.getAbsoluteISOString(this._fixedDate+"T"+r)),r!=null))return this.toNumber(r.getTime())}_timeValueChanged(e){const t=e.target,r=t.value,o=e.model.item,i=this.toDate(o.date),l=this.toDate(i!=null?i.toISOString().slice(0,10)+"T"+r:r),a=s=>s;l==null&&(this.set(this.valuePath,l,o),this._fireItemChangeEvent(o,this.valuePath,i,a.bind(this)))}_computeFormatter(e){const t={hour:"numeric",minute:"numeric",second:"numeric"};return new Intl.DateTimeFormat(e||void 0,t)}}customElements.define("cosmoz-omnitable-time-range-input",Dr);const Et="1970-01-01",H=(n,e,t)=>{const r=typeof n=="string"&&n.length>3&&n.length<=9?Ue(Et+"T"+n):n;return A(r)},ae={},Vr=n=>{const e=n||"";if(ae[e])return ae[e];const t={hour:"numeric",minute:"numeric",second:"numeric"};return ae[e]=new Intl.DateTimeFormat(n||void 0,t),ae[e]},fe=({valuePath:n,locale:e},t)=>{const r=H(z(t,n||""));return r===void 0?"":r===null?"Invalid Date":Ke(r,Vr(e))},Ar=(n,e)=>n.valuePath?fe(n,e):"",Er=n=>{const e=H(n);if(e==null)return null;const t=we(e);return t&&t.slice(11,19)},K=({valuePath:n},e)=>{if(e==null)return;const t=Er(n==null?e:z(e,n));if(t==null)return;const r=H(Ue(Et+"T"+t));return r==null?r:L(r.getTime())},Tr=(n,e)=>t=>{const r=K(n,t);if(r==null)return!1;const o=K({...n,valuePath:"min"},e),i=K({...n,valuePath:"max"},e);return o==null||i==null?!1:!(r<o||r>i)},mt=n=>{const e=H(n);return e==null?"":e.toISOString().slice(11,19).replace(/:/gu,".")},pt=n=>{if(!(n==null||n===""))return H(typeof n=="string"?n.replace(/\./gu,":")+"Z":n)};class Lr extends R(V){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"time-header-cell"},minWidth:{type:String,value:"63px"},width:{type:String,value:"210px"},flex:{type:String,value:"0"},filterStep:{type:String,value:"1"}}}getFilterFn(e,t){const r=K({...e,valuePath:"min"},t),o=K({...e,valuePath:"max"},t);if(!(r==null&&o==null))return Tr(e,t)}getString(e,t){return fe(e,t)}toXlsxValue(e,t){return Ar(e,t)}getComparableValue(e,t){return K(e,t)}serializeFilter(e,t){if(t==null)return;const r=H(t.min),o=H(t.max);if(!(r==null&&o==null))return mt(r)+"~"+mt(o)}deserializeFilter(e,t){if(t==null||t==="")return null;const r=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(r)?{min:pt(r[1]),max:pt(r[2])}:null}renderCell(e,{item:t}){return fe(e,t)}renderEditCell(e,{item:t},r){return m`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>r(i.target.value)}
			.value=${fe(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:r,locale:o,filterStep:i,disabledFiltering:l},{filter:a},s,u){return m`<cosmoz-omnitable-time-range-input
			.title=${e}
			?disabled=${l}
			.filter=${a}
			.values=${u}
			.min=${t}
			.max=${r}
			.locale=${o}
			.filterStep=${i}
			@filter-changed=${({detail:{value:d}})=>s(c=>({...c,filter:d}))}
			@header-focused-changed=${({detail:{value:d}})=>s(c=>({...c,headerFocused:d}))}
		></cosmoz-omnitable-time-range-input>`}computeSource(e,t){return ne(e,t)}}customElements.define("cosmoz-omnitable-column-time",Lr);const Rr=({column:n,item:e,selected:t,folded:r,group:o})=>n?(n.renderGroup??n.renderCell)(n,{item:e,selected:t,folded:r,group:o}):xt;customElements.define("cosmoz-omnitable-group-row",T(Rr,{useShadowDOM:!1}));const Mr=n=>{const{column:e}=n;return E(()=>{let t=0,r=0;const o=a=>{n.dispatchEvent(new CustomEvent("column-resize",{bubbles:!0,composed:!0,detail:{newWidth:Math.ceil(r+a.pageX-t),column:e}}))},i=()=>{document.removeEventListener("pointermove",o),document.removeEventListener("pointerup",i)},l=a=>{t=a.pageX,r=n.previousElementSibling.getBoundingClientRect().width,document.addEventListener("pointermove",o),document.addEventListener("pointerup",i)};return n.addEventListener("pointerdown",l),()=>n.removeEventListener("pointerdown",l)},[e]),xt};customElements.define("cosmoz-omnitable-resize-nub",T(Mr));const Nr=m`<svg
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
</svg>`,jr=m`
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
`,Oe=m` <svg
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
</svg>`,Pr=m`<svg
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
</svg> `,Tt=({column:n,on:e,descending:t,setOn:r,setDescending:o})=>{const{name:i,title:l}=n??{};return m`<button
		class="sg"
		title=${be(l)}
		data-on=${be(i===e&&(t?"desc":"asc")||void 0)}
		@click=${a=>{const u=a.currentTarget?.dataset.on;u||(r(i),o(!1)),u==="asc"?o(!0):u==="desc"&&(r(),o(!1))}}
	>
		<span>${l}</span> ${Pr}
	</button>`},Lt=({columns:n,...e})=>n?.map(t=>Tt({column:t,...e})),Br=()=>m`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:n,groupOn:e,setGroupOn:t,groupOnDescending:r,setGroupOnDescending:o}={})=>Lt({columns:n?.filter?.(i=>i.groupOn),on:e,setOn:t,descending:r,setDescending:o})}
	>
	</sort-and-group-consumer>
`,Hr=()=>m`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:n,sortOn:e,setSortOn:t,descending:r,setDescending:o}={})=>Lt({columns:n?.filter?.(i=>i.sortOn&&!i.noSort),on:e,setOn:t,descending:r,setDescending:o})}
	>
	</sort-and-group-consumer>
`,Rt=n=>(e,t,r=an)=>{const o=sn(),i=new URLSearchParams(o.hash.replace("#",""));return n(e,t,r,i),"#!"+Object.assign(o,{hash:i}).href.replace(location.origin,"")},Mt=n=>n==null||n==="",Gr=Rt((n,e,t,r)=>Mt(t(e))?r.delete(n):r.set(n,t(e))),Wr=Rt((n,e,t,r)=>Object.entries(e).map(t).forEach(([o,i])=>Mt(i)?r.delete(n+o):r.set(n+o,i))),Y=(n,e,{suffix:t="",read:r,write:o,multi:i}={})=>{const[l,a]=i?[Wr,rn]:[Gr,on],s=I(()=>e!=null&&a(e+t,r)!=null,[]),[u,d]=N(()=>e==null?n:a(e+t,r)??n),c=w(g=>d(p=>{const v=$e(g,p);return e!=null&&ln(l(e+t,v,o),null,{notify:!1}),v}),[e,t,l,o]);return E(()=>{e!=null&&(s||n!=null&&c(n))},[n,e,s,c]),[u,c]},qr=n=>[!0,"true",1,"yes","on"].includes(n),se=n=>n===""||(n==null?void 0:qr(n)),ue=(n,e,t)=>w(r=>{n(r),t(o=>({...o,[e]:r}))},[n,e,t]),Xr=(n,e,t,r,o)=>{const[i,l]=Y(t.sortOn,e,{suffix:"-sortOn"}),[a,s]=Y(se(t.descending),e,{suffix:"-descending",read:se}),[u,d]=Y(t.groupOn,e,{suffix:"-groupOn"}),[c,g]=Y(se(t.groupOnDescending),e,{suffix:"-groupOnDescending",read:se}),p=I(()=>n.find(h=>h.name===i),[n,i]),v=I(()=>n.find(h=>h.name===u),[n,u]),b={groupOn:u,setGroupOn:ue(d,"groupOn",r),groupOnDescending:c,setGroupOnDescending:ue(g,"groupOnDescending",r),sortOn:i,setSortOn:ue(l,"sortOn",r),descending:a,setDescending:ue(s,"descending",r),columns:n},x=I(()=>b,Object.values(b)),F=w(h=>{l(h.sortOn),d(h.groupOn),s(h.descending),g(h.groupOnDescending)},[]);return E(()=>{o.current=F},[]),{...x,sortAndGroup:x,groupOnColumn:v,sortOnColumn:p}},Qe=zt();customElements.define("sort-and-group-provider",Qe.Provider);customElements.define("sort-and-group-consumer",T(({render:n})=>n(Me(Qe)),{useShadowDOM:!1}));const Ur=({data:n,columns:e,groupOnColumn:t,filters:r,setFilterState:o,sortAndGroup:{sortOn:i,setSortOn:l,descending:a,setDescending:s}={}})=>Ct(e,u=>u.name,u=>[m`<div
				class="cell ${u.headerCellClass} header-cell"
				part="cell header-cell cell-${u.name} header-cell-${u.name}"
				?hidden="${u===t}"
				title="${u.headerTitleFn(u)}"
				name="${u.name}"
			>
				${u.renderHeader(u,r[u.name]??{},d=>o(u.name,d),u.source(u,n))}
				${O(!u.noSort,()=>Tt({on:i,setOn:l,descending:a,setDescending:s,column:u}))}
			</div>`,m`<cosmoz-omnitable-resize-nub
				.column="${u}"
				name="${u.name}"
			></cosmoz-omnitable-resize-nub>`]),Kr=({columns:n,settingsConfig:e,hideSelectAll:t,...r})=>{const o=Me(Qe);return m`
		${O(n,i=>Ur({columns:i,sortAndGroup:o,...r}))}
		${O(!t,()=>m` <cosmoz-omnitable-settings
					.config=${e}
					part="settings"
				></cosmoz-omnitable-settings>`)}
	`};customElements.define("cosmoz-omnitable-header-row",T(Kr,{useShadowDOM:!1}));const Qr=Q`
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
`,Jr=({column:n})=>m`
	<div class="label" title="${n.title}" part="item-expand-label">
		${n.title}
	</div>
	<div class="value" part="item-expand-value">
		<slot></slot>
	</div>
`;customElements.define("cosmoz-omnitable-item-expand-line",T(Jr,{styleSheets:[Ne(Qr)]}));const Yr=({columns:n,item:e,selected:t,expanded:r,groupOnColumn:o})=>un(n,i=>m`<cosmoz-omnitable-item-expand-line
				.column=${i}
				?hidden=${i===o}
				exportparts="item-expand-label, item-expand-value"
				>${i.renderCell(i,{item:e,selected:t,expanded:r})}</cosmoz-omnitable-item-expand-line
			>`);customElements.define("cosmoz-omnitable-item-expand",T(Yr,{useShadowDOM:!1}));const Zr=(n,e,t)=>n.editable?n.renderEditCell(n,e,t(n,e.item)):n.renderCell(n,e),eo=({columns:n,groupOnColumn:e,item:t,index:r,selected:o,expanded:i,onItemChange:l})=>Ct(n,a=>a.name,a=>m`<div
				class="cell itemRow-cell ${a.cellClass??""}"
				part="cell itemRow-cell cell-${a.name} itemRow-cell-${a.name}"
				?hidden="${a===e}"
				?editable="${a.editable}"
				title="${a.cellTitleFn(a,t)}"
				name="${a.name}"
			>
				${Zr(a,{item:t,index:r,selected:o,expanded:i},l)}
			</div>`);customElements.define("cosmoz-omnitable-item-row",T(eo,{useShadowDOM:!1}));const Nt=Q`
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
`,to=Q`
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

	${Nt}

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
`,gt=n=>{const e=n.replace(/"/gu,'""');return e.search(/("|,|\n)/gu)>=0?'"'+e+'"':n},no=(n,e,t)=>{const i=n.map(a=>gt(a.title)).join(";")+`
`,l=e.map(a=>n.map(s=>{const u=s.getString(s,a);return u==null?"":gt(String(u))}).join(";")+`
`);l.unshift(i),St(new File(l,t,{type:"text/csv;charset=utf-8"}))},ro=(n,e)=>{const t=n.map(o=>o.title),r=e.map(o=>n.map(i=>{const l=i.toXlsxValue(i,o);return l??""}));return r.unshift(t),r},oo=(n,e,t,r)=>{const o=ro(n,e),i=new cn(t).addSheetFromData(o,r).generate();St(new File([i],t,{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}))},io=({columns:n,selectedItems:e,csvFilename:t,xlsxFilename:r,xlsxSheetname:o,topPlacement:i})=>m`<cosmoz-bottom-bar
		id="bottomBar"
		?active=${!je(e.length)}
		part="bottomBar"
		exportparts="bar: bottomBar-bar, info: bottomBar-info, buttons: bottomBar-buttons"
	>
		<slot name="info" slot="info">
			${k("{count} selected item",{count:e.length})}
		</slot>
		<slot name="actions" id="actions"></slot>
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
				@click=${()=>no(n,e,t)}
			>
				${k("Save selected items as CSV")}
			</button>
			<button
				@click=${()=>oo(n,e,r,o)}
			>
				${k("Save selected items as XLSX")}
			</button>
			<slot name="download-menu"></slot>
		</cosmoz-dropdown-menu>
	</cosmoz-bottom-bar>`,lo=({allSelected:n,onAllCheckboxChange:e,sortAndGroup:t,dataIsValid:r,data:o,columns:i,filters:l,groupOnColumn:a,setFilterState:s,settingsConfig:u,hideSelectAll:d})=>m`<sort-and-group-provider .value=${t}>
		<div class="header" id="header" part="header">
			${O(!d,()=>m`<input
						class="checkbox all"
						type="checkbox"
						.checked=${n}
						@input=${e}
						?disabled=${!r}
						part="all"
					/>`)}
			${O(d,()=>m` <cosmoz-omnitable-settings
						.newLayout="${!0}"
						.config=${u}
					></cosmoz-omnitable-settings>`)}

			<cosmoz-omnitable-header-row
				part="headerRow"
				.data=${o}
				.columns=${i}
				.filters=${l}
				.groupOnColumn=${a}
				.setFilterState=${s}
				.settingsConfig=${u}
				.hideSelectAll=${d}
			></cosmoz-omnitable-header-row>
		</div>
	</sort-and-group-provider>`,ao=vt`
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
`,so=({settingsConfig:n})=>{const{columns:e,collapsed:t}=n,r=e.filter(o=>!t.some(i=>i.name===o.name));return m`<div class="skeleton">
		${Array.from({length:5},()=>m`<div>
					<div class="checkbox"></div>
					${r.map(o=>m`<div
								class="cell"
								part=${`cell-${o.name}`}
								name=${o.name}
							></div>`)}
				</div>`)}
	</div>`};customElements.define("cosmoz-omnitable-skeleton",T(so,{styleSheets:[ao]}));const uo=(n,e)=>{const{settingsConfig:t}=n,{processedItems:r,dataIsValid:o,filterIsTooStrict:i,loading:l,displayEmptyGroups:a,compareItemsFn:s,setSelectedItems:u,renderItem:d,renderGroup:c,error:g}=e;return m`${O(!l&&!o&&!g,()=>m`<div class="tableContent-empty">
					<slot name="empty-set-message">
						${Ye({width:"96px",height:"96px",styles:"margin-right: 24px; fill: currentColor;"})}
						<div class="tableContent-empty-message">
							<h3>${k("Working set empty")}</h3>
							<p>${k("No data to display")}</p>
						</div>
					</slot>
				</div>`)}
		${O(i,()=>m`<div class="tableContent-empty">
					${Ye({width:"96px",height:"96px",styles:"margin-right: 24px; fill: currentColor;"})}
					<div>
						<h3>${k("Filter too strict")}</h3>
						<p>${k("No matches for selection")}</p>
					</div>
				</div>`)}
		${O(l&&!r.length,()=>m`<div class="tableContent-empty overlay">
					<cosmoz-omnitable-skeleton
						.settingsConfig=${t}
					></cosmoz-omnitable-skeleton>
				</div>`)}
		${O(l&&r.length,()=>m`<div class="tableContent-empty overlay spinner">
					<cz-spinner></cz-spinner>
				</div>`)}
		${O(g,()=>m`<div class="tableContent-empty overlay">
					${dn({width:"96px",height:"96px",styles:"margin-right: 24px; fill: currentColor;"})}
					<div class="tableContent-empty-message">
						<h3>${k("Error loading data")}</h3>
						<p>${g.message}</p>
					</div>
				</div>`)}
		<div class="tableContent-scroller" id="scroller" part="scroller">
			<cosmoz-grouped-list
				id="groupedList"
				.data=${r}
				@selected-items-changed=${p=>u(p.detail.value)}
				.displayEmptyGroups=${a}
				.compareItemsFn=${s}
				.renderItem=${d}
				.renderGroup=${c}
			></cosmoz-grouped-list>
			<slot name="extraContent"></slot>
		</div>`},co=Q`
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
	${Nt}
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
`,mo=Q`
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
`,ce=n=>{const e=parseInt(n,10);return isFinite(e)?e:void 0},po=n=>{const{config:e}=n,{settings:t,setSettings:r,collapsed:o}=e,i=Pe({collapsed:o,settings:t.columns,setSettings:w(l=>r(a=>({...a,columns:l})),[r])});return{...e,onDown:w(l=>{l.target.closest(".pull")&&(i.handle=l.currentTarget)},[i]),onDragStart:w(l=>{const{target:a}=l,s=ce(a.dataset.index);if(!i.handle?.contains(a)||s==null)return l.preventDefault();i.handle=null,l.dataTransfer.effectAllowed="move",l.dataTransfer.setData("omnitable/sort-index",s),l.dataTransfer.setData("text/plain",s),setTimeout(()=>a.classList.add("drag"),0),a.addEventListener("dragend",u=>u.target.classList.remove("drag"),{once:!0})},[i]),onDragEnter:w(l=>{const a=l.currentTarget;a===l.target&&(l.preventDefault(),l.dataTransfer.dropEffect="move",a.classList.add("dragover"))},[]),onDragOver:w(l=>{l.preventDefault(),l.currentTarget.classList.add("dragover")},[]),onDragLeave:w(l=>{const a=l.currentTarget;a.contains(l.relatedTarget)||a.classList.remove("dragover")},[]),onDrop:w(l=>{const a=ce(l.dataTransfer.getData("omnitable/sort-index")),s=ce(l.currentTarget.dataset.index),{settings:u,setSettings:d}=i;l.currentTarget.classList.remove("dragover"),l.preventDefault();const c=u.slice();c.splice(s+(a>=s?0:-1),0,c.splice(a,1)[0]),d(c)},[i]),onToggle:w(l=>{const{settings:a,setSettings:s}=i,u=a.map(c=>({...c,disabled:c.disabled||i.collapsed?.some(g=>g.name===c.name)})),d=ce(l.target.closest("[data-index]")?.dataset.index);u.splice(d,1,{...a[d],disabled:!l.target.checked,priority:l.target.checked?a.reduce((c,g)=>Math.max(c,g.priority),0)+1:a[d].priority}),s(u)},[i])}},go=[pn({apply({availableHeight:n,elements:e}){Object.assign(e.floating.style,{maxHeight:`${Math.max(0,n)}px`})}}),...mn],ho=({onDragStart:n,onDragEnter:e,onDragOver:t,onDragLeave:r,onDrop:o,onDown:i,onToggle:l,collapsed:a,filters:s})=>(u,d)=>{const c=!!a?.find(p=>p.name===u.name),g=!u.disabled&&!c;return m` <div
			class="item"
			data-index=${d}
			@mousedown=${i}
			draggable="true"
			@dragstart=${n}
			@dragenter=${e}
			@dragover=${t}
			@dragleave=${r}
			@drop=${o}
		>
			<button class="pull">${jr}</button>
			<label class="title" ?has-filter=${!je(s[u.name]?.filter)}
				>${u.title}</label
			>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${g}
				@click=${l}
				.indeterminate=${c}
			/>
		</div>`},fo=n=>{const{settings:e,settingsId:t,onSave:r,onReset:o,hasChanges:i,opened:l,setOpened:a,...s}=po(n);return m` <div class="headline">
			${k("Sort and filter")}
			<button
				class="close"
				@click=${u=>{const d=u.currentTarget;d?.focus(),d?.blur()}}
			>
				${Nr}
			</button>
		</div>

		<div class="contents">
			<div
				class="heading"
				?data-opened=${l.columns}
				@click=${()=>a(u=>({...u,columns:!u.columns}))}
				part="columns columns-heading"
			>
				${k("Columns")} ${Oe}
			</div>
			<cosmoz-collapse
				?opened="${l.columns}"
				part="columns columns-content"
			>
				<div class="list">${e.columns?.map(ho(s))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${l.sort}
				@click=${()=>a(u=>({...u,sort:!u.sort}))}
			>
				${k("Sort on")} ${Oe}
			</div>
			<cosmoz-collapse ?opened=${l.sort}> ${Hr()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${l.group}
				@click=${()=>a(u=>({...u,group:!u.group}))}
				part="groups groups-heading"
			>
				${k("Group on")} ${Oe}
			</div>
			<cosmoz-collapse ?opened=${l.group} part="groups groups-heading"
				>${Br()}</cosmoz-collapse
			>
		</div>

		${O(t,()=>m`<div class="buttons">
					<button
						class="button reset"
						@click=${o}
						?disabled=${!i}
					>
						${k("Reset")}
					</button>
					<button class="button" @click=${r} ?disabled=${!i}>
						${k("Save")}
					</button>
				</div>`)}`};customElements.define("cosmoz-omnitable-settings-ui",T(fo,{styleSheets:[Ne(co)]}));const bo=({config:n,newLayout:e})=>m`
	<cosmoz-dropdown
		.placement="${e?"bottom-start":"bottom-end"}"
		.middleware="${go}"
	>
		<div title="${k("Sort and filter")}" slot="button">
			${O(e,()=>m`<div class="headerDots">...</div>`,()=>m` <svg viewBox="0 0 24 24" width="24" fill="currentColor">
						<circle cx="10" cy="18" r="2"></circle>
						<circle cx="10" cy="12" r="2"></circle>
						<circle cx="10" cy="6" r="2"></circle>
					</svg>`)}
			${O(n?.badge,()=>m`<div class="badge"></div>`)}
		</div>
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${n}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`;customElements.define("cosmoz-omnitable-settings",T(bo,{styleSheets:[Ne(mo)]}));const xe=["sortOn","descending","groupOn","groupOnDescending"],de=n=>e=>typeof e=="object"&&e!==null&&"name"in e&&e.name===n,xo=(n=[],e=[],t=[])=>{const r=e.filter(l=>n.some(de(l.name))),o=n.filter(l=>l.name!=null&&!e.some(de(l.name))&&!t.some(de(l.name))),i=t.filter(l=>!e.some(de(l.name)));return[...r,...i.flatMap(l=>{const a=n.find(s=>s.name===l.name);return a?{...l,title:a.title??l.title??"",minWidth:parseInt(a.minWidth??"0",10)}:[]}),...o.map(l=>{const{name:a,title:s,priority:u,minWidth:d,width:c,flex:g}=l;return{name:a??"",title:s??"",priority:u??0,minWidth:parseInt(d??"0",10),width:parseInt(c??"0",10),flex:parseInt(g??"0",10)}})]},vo=(n,e)=>({...e,...Ee(Array.from(xe))(n),columns:n.columns?.map(Ee(["name","priority","width","flex","disabled"]))}),yo=({columns:n,settings:e,savedSettings:t,initial:r})=>({...Object.fromEntries(xe.flatMap(i=>r?.[i]!=null?[[i,r[i]]]:[])),...t?Ee(Array.from(xe))(t):{},...e,columns:xo(n,e?.columns,t?.columns)}),$o=({prefix:n="omnitable-"}={})=>({write:async(t,r)=>{const o=n+t;try{r?localStorage.setItem(o,JSON.stringify(r)):localStorage.removeItem(o)}catch(i){console.error(i)}},read:async t=>{if(t)try{const r=localStorage.getItem(n+t);return r==null?void 0:JSON.parse(r)}catch(r){console.error(r)}}}),wo=zt($o),zo=()=>{const n=Me(wo);return I(()=>n(),[n])},Co=(n,e,t,r)=>{const[o,i]=N(),{read:l,write:a}=zo();return E(async()=>{n&&i(await l(n))},[n,l]),{settingsId:n,savedSettings:o,onSave:w(async()=>{if(!n)return;const s=vo(e,o);await a(n,s),t(),i(s)},[e,o]),onReset:w(async s=>{t(),s.shiftKey&&(await a(n),i()),r?.()},[r]),hasChanges:e!=null}},So=({settingsId:n,host:e})=>{const t=I(()=>Object.fromEntries(xe.map(x=>[x,e[x]])),[]),r=Be(),o=w(()=>{r.current?.(t)},[t]),[i,l]=N(),[a,s]=N({columns:!0,sort:!0}),{savedSettings:u,...d}=Co(n,i,l,o),{enabledColumns:c,disabledFiltering:g}=e,p=Kn(e,{enabledColumns:c,disabledFiltering:g}),v=I(()=>yo({columns:p,settings:i,savedSettings:u,initial:t}),[p,i,u]),b=I(()=>v.columns.map(x=>p.find(F=>F.name===x.name)).filter(Boolean),[p,...v.columns.map(x=>x.name)]);return{...d,opened:a,setOpened:s,settings:v,columns:b,setSettings:l,resetRef:r}},ht=n=>Number.isFinite(n)?n:0,ko=(n,e)=>{const t=[];let[r,o]=n.reduce(([d,c],{width:g,flex:p})=>[d+g,c+p],[0,0]),i=e-r,l=ht(i/o),a=0,s=0,u=0;for(let d=0;d<n.length;d++){const{width:c,minWidth:g,flex:p}=n[d],v=i>=0?l*p:c*i/r;if(g>c+v){a+=c,s+=g,u+=p,t[d]=g;continue}if(p===0){a+=c,s+=c,t[d]=c;continue}}r-=a,i=e-s-r,o-=u,l=ht(i/o);for(let d=0;d<n.length;d++){if(t[d]!=null)continue;const{width:c,flex:g}=n[d],p=i>=0?l*g:c*i/r;t[d]=c+p}return t},ve=Symbol("index"),_o=(n,e)=>{if(typeof n.findLastIndex=="function")return n.findLastIndex(e);for(let t=n.length-1;t>=0;t--)if(e(n[t],t,n))return t;return-1},Io=(n,e)=>{const t=_o(n,l=>l!=null&&l>0),r=(l,a)=>`.cell[name="${l}"], cosmoz-omnitable-skeleton::part(cell-${l}){width: ${Math.floor(a)}px;padding: 0 min(3px, ${a/2}px)}`,o=l=>`cosmoz-omnitable-resize-nub[name="${l}"]{display:none}`,i=l=>`cosmoz-omnitable-resize-nub[name="${l}"], .cell[name="${l}"]{display:none}`;return e.map((l,a)=>{const s=n[a];if(s==null||s===0)return i(l.name);const u=r(l.name,s);return a===t?`${u}
${o(l.name)}`:u}).join(`
`)},jt=(n,e,t)=>{const r=n.filter(a=>!a.hidden),o=r.reduce((a,{width:s})=>a+s,0);if(r.length>1&&o>e)return jt(r.slice(1),e,t);const i=r.reduce(([a,s],u,d)=>[Math.max(a,u.index),u.index>a?d:s],[-1,-1])[1];return i!==-1&&(r[i].flex=1),ko(r,e).reduce((a,s,u)=>(a[r[u].index]=s,a),new Array(t).fill(void 0))},Fo=(n,e)=>n.length===0?".cell {display: none;}":Io(n,e),Oo=({host:n,canvasWidth:e,layout:t,setSettings:r})=>{const o=Be();o.current=i=>r(l=>{const a=l.columns,{detail:{newWidth:s,column:u}}=i,d=a.findIndex(p=>p.name===u.name),c=[],g=a.reduce((p,v)=>Math.max(p,v.priority),-1/0);for(let p=0;p<t.length;p++)if(c[p]={...a[p]},p<d&&t[p]&&(c[p].width=t[p],c[p].flex=0,c[p].priority=g),p===d){const v=t.reduce((b,x,F)=>F<d&&x?b-x:b,e);c[p].width=Math.min(v,Math.max(s,a[p].minWidth)),c[p].flex=0,c[p].priority=g}return{...l,columns:c}}),E(()=>{const i=l=>o.current?.(l);return n.addEventListener("column-resize",i),()=>n.removeEventListener("column-resize",i)},[])},Do=20,Vo=44,Ao=24,Pt=Do+Vo+Ao,Eo=(n,e)=>E(()=>{const t=([o])=>{o.contentRect?.width!==0&&requestAnimationFrame(()=>e(o.contentRect?.width-Pt))},r=new ResizeObserver(t);return r.observe(n),()=>r.unobserve(n)},[]),To=n=>{const[e,t]=N(()=>n.getBoundingClientRect().width-Pt);return Eo(n,t),e},Lo=(n,e)=>{const t=I(()=>{let r=!1,o;const i=()=>{if(!r)return;o=requestAnimationFrame(i),n()&&(r=!1)};return{start:()=>{r=!0,cancelAnimationFrame(o),o=requestAnimationFrame(i)},stop:()=>{r=!1,cancelAnimationFrame(o)}}},[]);E(()=>{t.start()},e),E(()=>()=>t.stop(),[])},Ro=(n=0,e=0)=>Math.abs(n-e)<.1,Mo=(n,e=1.9,t=gn)=>{const r=Pe({target:n}),o=w(()=>{if(!r.tween)return r.tween=r.target,t(r.tween),!0;if(r.target.every((i,l)=>r.tween[l]===i))return t(r.tween),!0;r.tween=r.target.map((i,l)=>Ro(r.tween[l],i)?i:(r.tween[l]??0)+((i??0)-(r.tween[l]??0))/e||0),t(r.tween)},[]);Lo(o,[n])},No=({canvasWidth:n,groupOnColumn:e,config:t,miniColumn:r})=>I(()=>{if(!Array.isArray(t)||n==null||n===0)return[];const o=t.map((i,l)=>({minWidth:i.minWidth,width:i.width,flex:i.flex,priority:i.priority,name:i.name,index:l,hidden:i.name===e?.name||i.disabled})).map(i=>r?{...i,hidden:r.name!==i.name}:i).sort(({index:i,priority:l},{index:a,priority:s})=>l===s?a-i:l-s);return jt(o,n,o.length)},[n,e,t]),jo=({host:n,canvasWidth:e,columns:t})=>{const r=n.miniBreakpoint??480,o=I(()=>e<=r,[e,r]),i=I(()=>o?t?.filter(u=>u.mini!=null).sort((u,d)=>(u.mini??0)-(d.mini??0)):[],[t,o]),[l,...a]=i??[],s=!!l;return E(()=>{n.toggleAttribute("mini",s)},[s]),{isMini:s&&o,miniColumn:l,miniColumns:a}},Po=n=>{const e=I(()=>new CSSStyleSheet,[]);return E(()=>{n.shadowRoot.adoptedStyleSheets=[...n.shadowRoot.adoptedStyleSheets,e]},[]),e},Bo=({host:n,columns:e,settings:t,setSettings:r,resizeSpeedFactor:o,sortAndGroupOptions:i})=>{const l=To(n),{isMini:a,miniColumn:s,miniColumns:u}=jo({host:n,canvasWidth:l,columns:e}),{groupOnColumn:d}=i,c=No({canvasWidth:l,groupOnColumn:d,miniColumn:s,config:t.columns}),g=Po(n),p=I(()=>t.columns.reduce((b,x,F)=>c[F]!=null||x.name===d?.name||x.disabled?b:[...b,e.find(h=>h.name===x.name)],[]),[e,t,c]),v=Pe({columns:t.columns});return Mo(c,o,b=>{const x=Fo(b,v.columns);g.replace(x)}),Oo({host:n,canvasWidth:l,layout:c,setSettings:b=>r(b(t))}),{isMini:a,collapsedColumns:p,miniColumns:u}},Ho=({host:n,...e})=>{const{csvFilename:t="omnitable.csv",xlsxFilename:r="omnitable.xlsx",xlsxSheetname:o="Omnitable",topPlacement:i="top-end"}=n;return{csvFilename:t,xlsxFilename:r,xlsxSheetname:o,topPlacement:i,...e}},Go=({host:n,selectedItems:e,data:t,sortAndGroupOptions:r,collapsedColumns:o,settings:i,filterFunctions:l,settingS:a,filters:s,...u})=>{const d=t&&t.length>0&&e.length===t.length,c=b=>{b.target.checked?n.shadowRoot.querySelector("#groupedList").selectAll():n.shadowRoot.querySelector("#groupedList").deselectAll()},{groupOnColumn:g}=r,p=I(()=>[g,...o,...i.columns.filter(b=>b.disabled)].some(b=>b&&Object.keys(l).includes(b.name)),[l,i,o]),v=I(()=>({...a,collapsed:o,badge:p,filters:s}),[a,o,p,s]);return E(()=>{const b=n.shadowRoot.querySelector("#tableContent"),x=new ResizeObserver(F=>requestAnimationFrame(()=>{n.style.setProperty("--ot-height",F[0]?.contentRect.height+"px")}));return x.observe(b),()=>x.unobserve(b)},[]),{allSelected:d,onAllCheckboxChange:c,data:t,settingsConfig:v,filters:s,groupOnColumn:g,sortAndGroup:r.sortAndGroup,...u}},Bt=m`
	<svg
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
	>
		<g>
			<path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
		</g>
	</svg>
`,Wo=n=>n?"groupRow groupRow-folded":"groupRow",qo=({item:n,index:e})=>t=>O(t?.length>0,()=>m`
				<div class="itemRow-minis" part="item-minis">
					${t.map(r=>m`<div
								class="itemRow-mini"
								part="item-mini item-mini-${r.name}"
							>
								${(r.renderMini??r.renderCell)(r,{item:n,index:e})}
							</div>`)}
				</div>
			`),Xo=({columns:n,collapsedColumns:e,miniColumns:t,onItemClick:r,onCheckboxChange:o,dataIsValid:i,groupOnColumn:l,onItemChange:a,rowPartFn:s})=>(u,d,{selected:c,expanded:g,toggleCollapse:p})=>m`
		<div
			?selected=${c}
			part="${["itemRow",`itemRow-${u[ve]}`,s?.(u,d)].filter(Boolean).join(" ")}"
			.dataIndex=${u[ve]}
			.dataItem=${u}
			class="itemRow"
			@click=${r}
		>
			<div class="itemRow-wrapper" part="itemRow-wrapper">
				<input
					class="checkbox"
					type="checkbox"
					part="checkbox"
					.checked=${c}
					.dataItem=${u}
					@input=${o}
					?disabled=${!i}
				/>
				<cosmoz-omnitable-item-row
					part="itemRow-inner"
					.columns=${n}
					.index=${d}
					.selected=${c}
					.expanded=${g}
					.item=${u}
					.groupOnColumn=${l}
					.onItemChange=${a}
				>
				</cosmoz-omnitable-item-row>
				<button
					class="expand"
					?hidden="${je(e.length)}"
					?aria-expanded="${g}"
					@click="${p}"
				>
					${Bt}
				</button>
			</div>
			${qo({item:u,index:d})(t)}
		</div>
		<cosmoz-omnitable-item-expand
			.columns=${e}
			.item=${u}
			.index=${d}
			?selected=${c}
			?expanded=${g}
			.groupOnColumn=${l}
			part="item-expand"
		>
		</cosmoz-omnitable-item-expand>
	`,Uo=({onCheckboxChange:n,dataIsValid:e,groupOnColumn:t})=>(r,o,{selected:i,folded:l,toggleFold:a})=>m` <div
			class="${Wo(l)}"
			part="groupRow groupRow-${r[ve]}"
		>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${i}
				.dataItem=${r}
				@input=${n}
				?disabled=${!e}
			/>
			<h3 class="groupRow-label">
				<div><span>${t?.title}</span>: &nbsp;</div>
				<cosmoz-omnitable-group-row
					.column=${t}
					.item=${r.items?.[0]}
					.selected=${i}
					.folded=${l}
					.group=${r}
				></cosmoz-omnitable-group-row>
			</h3>
			<div class="groupRow-badge">${r.items.length}</div>
			<button class="expand" ?aria-expanded="${l}" @click=${a}>
				${Bt}
			</button>
		</div>`,Ko=({host:n,error:e,dataIsValid:t,processedItems:r,columns:o,collapsedColumns:i,miniColumns:l,sortAndGroupOptions:a,rowPartFn:s,...u})=>{const{loading:d=!1,displayEmptyGroups:c=!1,compareItemsFn:g}=n,p=Be({shiftKey:!1,ctrlKey:!1}),v=w(h=>{const _=h.target.dataItem,f=h.target.checked;p.current.shiftKey?n.shadowRoot.querySelector("#groupedList").toggleSelectTo(_,f):p.current.ctrlKey?(h.target.checked=!0,n.shadowRoot.querySelector("#groupedList").selectOnly(_)):n.shadowRoot.querySelector("#groupedList").toggleSelect(_,f),h.preventDefault(),h.stopPropagation()},[]);E(()=>{const h=({shiftKey:_,ctrlKey:f})=>{p.current={shiftKey:_,ctrlKey:f}};return window.addEventListener("keydown",h),window.addEventListener("keyup",h),()=>{window.removeEventListener("keydown",h),window.removeEventListener("keyup",h)}},[]);const b=w(h=>{const _=h.composedPath();_.slice(0,_.indexOf(h.currentTarget)).find($=>$.matches?.("a, .checkbox, .expand"))||n.dispatchEvent(new window.CustomEvent("omnitable-item-click",{bubbles:!0,composed:!0,detail:{item:h.currentTarget.dataItem,index:h.currentTarget.dataIndex}}))},[]),{groupOnColumn:x}=a,F=w((h,_)=>f=>Qn(n,h,_,f),[]);return{...u,processedItems:r,dataIsValid:t,filterIsTooStrict:t&&r.length<1,loading:d,compareItemsFn:g,displayEmptyGroups:c,error:e,renderItem:I(()=>Xo({columns:o,collapsedColumns:i,miniColumns:l,onItemClick:b,onCheckboxChange:v,dataIsValid:t,groupOnColumn:x,onItemChange:F,rowPartFn:s}),[o,i,b,v,t,x,F,s]),renderGroup:I(()=>Uo({onCheckboxChange:v,dataIsValid:t,groupOnColumn:x}),[v,t,x])}},Qo=(n,e)=>{if(n===e)return 0;if(n==null)return-1;if(e==null)return 1;const t=typeof n,r=typeof e;return t==="object"&&r==="object"?n.toString()<e.toString()?-1:1:t==="number"&&r==="number"?n-e:t==="string"&&r==="string"?n<e?-1:1:t==="boolean"&&r==="boolean"?n?-1:1:(console.warn("unsupported sort",t,n,r,e),0)},De=(n,e)=>(t,r)=>Qo(n(t),n(r))*(e?-1:1),Jo=n=>n.replace(/([a-z0-9])([A-Z])/gu,"$1-$2").toLowerCase(),ft=(n,e)=>{!n||!e||Object.entries(e).forEach(([t,r])=>{n[j].__ownChange=!0,n[j][t]=r,n[j].__ownChange=!1,n[j].dispatchEvent(new CustomEvent(`${Jo(t)}-changed`,{bubbles:!0,detail:{value:r}}))})},Ve=(n,e)=>Object.assign(n,{[ve]:e}),me=Symbol("unparsed"),Yo=({data:n,columns:e,hashParam:t,sortAndGroupOptions:r,noLocalSort:o,noLocalFilter:i})=>{const{groupOnColumn:l,groupOnDescending:a,sortOnColumn:s,descending:u}=r,d=w(([f,$])=>{const y=e.find(({name:C})=>C===f);return y==null?[f,void 0]:[f,$.filter&&y.serializeFilter(y,$.filter)]},[e]),c=w(([f,$])=>{const y=e.find(({name:S})=>S===f);if(y==null)return[f,{[me]:$}];const C={filter:y.deserializeFilter(y,$)};return ft(y,C),[f,C]},[e]),[g,p]=Y({},t,{multi:!0,suffix:"-filter--",write:d,read:c}),v=w((f,$)=>p(y=>{const C=$e($,y[f]);return ft(e.find(S=>S.name===f),C),{...y,[f]:{...y[f],...C}}}),[e,p]),b=I(()=>Object.values(g).map(f=>f.filter),[g]),x=I(()=>Object.fromEntries(e.map(f=>[f.name,!f.noLocalFilter&&f.getFilterFn(f,g[f.name]?.filter)]).filter(([,f])=>!!f)),[e,...b]),F=I(()=>!Array.isArray(n)||n.length===0?[]:Object.entries(x).length===0||i?n.slice():n.filter(f=>Object.values(x).every($=>$(f))),[n,x,i]),h=I(()=>{if(!o&&!l&&s!=null&&s.sortOn!=null)return F.slice().sort(De(f=>s.getComparableValue({...s,valuePath:s.sortOn},f),u));if(l!=null&&l.groupOn!=null){const f=F.reduce(($,y)=>{const C=l.getComparableValue({...l,valuePath:l.groupOn},y);if(C===void 0)return $;let S=$.find(M=>M.id===C);return S?(S.items.push(y),$):(S={id:C,name:C,items:[y]},[...$,S])},[]);return f.sort(De($=>l.getComparableValue({...l,valuePath:l.groupOn},$.items[0]),a)),!s||o?f:f.filter($=>Array.isArray($.items)).map($=>($.items.sort(De(y=>s.getComparableValue({...s,valuePath:s.sortOn},y),u)),$))}return F},[F,l,a,s,u,o]),_=I(()=>{let f=0,$=0;const y=[];return h.forEach(C=>{if(Array.isArray(C.items)){Ve(C,$++),C.items.forEach(S=>{Ve(S,f++),y.push(S)});return}return Ve(C,f++),y.push(C)},[]),y},[h]);return E(()=>{p(f=>Object.values(f).some(y=>y[me]!=null)?Object.fromEntries(Object.entries(f).map(([y,C])=>C[me]==null?[y,C]:c([y,C[me]]))):f)},[c]),{processedItems:h,visibleData:_,filters:g,filterFunctions:x,setFilterState:v}},Zo=n=>{const e=r=>{const o=n.data.indexOf(r);if(o<0)return null;const i=n.data.splice(o,1);if(n.data=n.data.slice(),Array.isArray(i)&&i.length>0)return i[0]},t=(r,o)=>{n.data.splice(r,1,o),n.data=n.data.slice()};return{removeItem:e,removeItems(r){const o=[];for(let i=r.length-1;i>=0;i-=1){const l=n.removeItem(r[i]);l!=null&&o.push(l)}return o},replaceItemAtIndex:t,replaceItem(r,o){const i=n.data.indexOf(r);if(i>-1)return t(i,o)},selectItem(r){n.shadowRoot.querySelector("#groupedList").select(r)},selectAll(){n.shadowRoot.querySelector("#groupedList").selectAll()},deselectAll(){n.shadowRoot.querySelector("#groupedList").deselectAll()},deselectItem(r){n.shadowRoot.querySelector("#groupedList").deselect(r)},isItemSelected(r){return n.shadowRoot.querySelector("#groupedList").isItemSelected(r)}}},ei=({host:n,visibleData:e,filters:t,...r})=>{const{setFilterState:o}=r,i=I(()=>Zo(n),[]);Te(r,Object.values(r)),Te(i,Object.values(i)),E(()=>{const a=s=>o(s.detail.name,u=>({...u,...s.detail.state}));return n.addEventListener("legacy-filter-changed",a),()=>n.removeEventListener("legacy-filter-changed",a)},[]),B("visibleData",e),B("sortedFilteredGroupedItems",r.sortedFilteredGroupedItems),B("selectedItems",r.selectedItems),B("sortOn",r.sortOn),B("descending",r.descending),B("isMini",r.isMini);const l=I(()=>Object.fromEntries(Object.entries(t).filter(([,{filter:a}])=>a!==void 0).map(([a,{filter:s}])=>[a,s])),[t]);B("filters",l,Object.values(l))},ti=n=>{const{hashParam:e,settingsId:t,data:r,resizeSpeedFactor:o,noLocal:i,noLocalSort:l=i,noLocalFilter:a=i,error:s,rowPartFn:u}=n,d=So({settingsId:t,host:n}),{settings:c,setSettings:g,columns:p,resetRef:v}=d,b=Xr(p,e,c,g,v),{processedItems:x,visibleData:F,filters:h,setFilterState:_,filterFunctions:f}=Yo({data:r,columns:p,hashParam:e,sortAndGroupOptions:b,noLocalSort:l,noLocalFilter:a}),{isMini:$,collapsedColumns:y,miniColumns:C}=Bo({host:n,columns:p,settings:c,setSettings:g,resizeSpeedFactor:o,sortAndGroupOptions:b}),S=r&&Array.isArray(r)&&r.length>0,[M,G]=N([]);return ei({host:n,visibleData:F,sortedFilteredGroupedItems:x,columns:p,filters:h,setFilterState:_,selectedItems:M,isMini:$,...b}),{header:Go({host:n,selectedItems:M,sortAndGroupOptions:b,dataIsValid:S,data:r,columns:p,filters:h,collapsedColumns:y,settings:c,filterFunctions:f,settingS:d,setFilterState:_,hideSelectAll:n.hideSelectAll===!0}),list:Ko({host:n,error:s,dataIsValid:S,processedItems:x,setSelectedItems:G,columns:p,collapsedColumns:y,miniColumns:C,sortAndGroupOptions:b,rowPartFn:u}),footer:Ho({host:n,selectedItems:M,columns:p})}};customElements.define("cosmoz-grouped-list-row",class extends HTMLElement{get item(){return this._item}set item(e){this._item=e,this._render()}get index(){return this._index}set index(e){this._index=e,this._render()}get renderFn(){return this._renderFn}set renderFn(e){this._renderFn=e,this._render()}_render(){this._item==null||this._index==null||this._renderFn==null||Ae(this._renderFn(this._item,this._index),this)}});const ni={group:Symbol("group")},_e=(n,e)=>(e.has(n)||e.set(n,{}),e.get(n)),ri=(n,e)=>!!_e(n,e).expanded,oi=(n,e)=>!!_e(n,e).folded,Le=n=>n?n.items instanceof Array:!1,ii=n=>{if(!Array.isArray(n)||n.length===0)return;const e=Array.isArray(n[0]?.items);if(!n.every(r=>Array.isArray(r.items)===e))throw new Error("Data must be homogeneous.")},li=(n,e,t)=>Array.isArray(n)?(ii(n),n.reduce((o,i)=>{const l=i;return l.items?l.items.length?_e(i,t).folded?o.concat(i):o.concat(i,l.items.map(a=>Object.assign(a,{[ni.group]:i}))):e?o.concat(i):o:o.concat(i)},[])):void 0,ai=(n,...e)=>typeof n=="function"?n(...e):n,si=(n,e)=>n===e,ui=()=>{const[n,e]=N(()=>[new WeakMap]);return{setItemState:w((r,o)=>e(([i])=>{const l=_e(r,i);return Object.assign(l,ai(o,l)),[i]}),[]),state:n[0],signal:n}},ci=()=>{const{setItemState:n,state:e,signal:t}=ui(),r=w((i,l)=>{Le(i)&&n(i,a=>({folded:l!==void 0?l:!a.folded}))},[]),o=w((i,l)=>{Le(i)||n(i,a=>({expanded:l!==void 0?!l:!a.expanded}))},[]);return{state:e,signal:t,toggleFold:r,toggleCollapse:o}},di=({initial:n,compareItemsFn:e,data:t,flatData:r})=>{const[o,i]=N(n),[l,a]=N(),s=w(h=>o.includes(h),[o]),u=w(h=>h?.items?.every(s)??!1,[s]),d=w(h=>s(h)||u(h),[s,u]),c=w(h=>{const f=h.items??[h];i($=>[...$,...f.filter(y=>!$.includes(y))]),a(h)},[]),g=w(h=>{const f=h.items??[h];i($=>$.filter(y=>!f.includes(y))),a(h)},[]),p=w(h=>{i(h.items?.slice()||[h]),a(h)},[]),v=w(()=>{i(t.flatMap(h=>h.items||h)),a(void 0)},[t]),b=w(()=>{i([]),a(void 0)},[]),x=w((h,_=!d(h))=>_?c(h):g(h),[d]),F=w((h,_)=>{if(!r)return;const f=l?r.findIndex(C=>e(C,l)):-1;if(f<0)return x(h,_);const[$,y]=[f,r.indexOf(h)].sort((C,S)=>C-S);r.slice($,y+1).forEach((C,S,M)=>{S>0&&S<M.length-1&&Le(C)||x(C,_)}),a(h)},[r,e,x]);return E(()=>i(h=>h.length>0&&r?r.filter(_=>h.find(f=>e(_,f))):h),[r]),{selectedItems:o,isItemSelected:s,isGroupSelected:u,isSelected:d,select:c,deselect:g,selectOnly:p,selectAll:v,deselectAll:b,toggleSelect:x,toggleSelectTo:F}},mi={host:{position:"relative",display:"flex",flexDirection:"column"}},pi=n=>{const{data:e,renderItem:t,renderGroup:r,displayEmptyGroups:o,compareItemsFn:i=si}=n,{toggleFold:l,toggleCollapse:a,state:s,signal:u}=ci(),d=I(()=>li(e,o,s),[e,o,u]),{selectedItems:c,isItemSelected:g,isGroupSelected:p,isSelected:v,select:b,deselect:x,selectOnly:F,selectAll:h,deselectAll:_,toggleSelect:f,toggleSelectTo:$}=di({initial:[],compareItemsFn:i,data:e,flatData:d}),y=w((S,M)=>Array.isArray(S.items)?r(S,M,{selected:p(S),folded:oi(S,s),toggleSelect:G=>f(S,typeof G=="boolean"?G:void 0),toggleFold:()=>l(S)}):t(S,M,{selected:c.includes(S),expanded:ri(S,s),toggleSelect:G=>f(S,typeof G=="boolean"?G:void 0),toggleCollapse:()=>a(S)}),[t,r,c,f,u]);yt(()=>{Object.assign(n.style,mi.host)},[]),B("selectedItems",c);const C={toggleFold:l,toggleCollapse:a,isItemSelected:g,isGroupSelected:p,isSelected:v,select:b,deselect:x,selectOnly:F,selectAll:h,deselectAll:_,toggleSelect:f,toggleSelectTo:$};return Te(C,Object.values(C)),{renderRow:y,flatData:d}},gi=({renderRow:n,flatData:e})=>hn({items:e,renderItem:(t,r)=>m`<cosmoz-grouped-list-row
				.item=${t}
				.index=${r}
				.renderFn=${n}
			></cosmoz-grouped-list-row>`}),hi=n=>gi(pi(n));customElements.define("cosmoz-grouped-list",T(hi,{useShadowDOM:!1}));const fi=n=>window.ShadyCSS?.ApplyShim?.transformCssText?.(n)||n,bi=n=>{const{header:e,list:t,footer:r}=ti(n);return m`
		<style>
			${fn([],()=>fi(to))}
		</style>

		<div class="mainContainer">
			${lo(e)}
			<div class="tableContent" id="tableContent">
				${uo(e,t)}
			</div>
			${io(r)}
		</div>

		<div id="columns">
			<slot id="columnsSlot"></slot>
		</div>
	`};customElements.define("cosmoz-omnitable",class extends T(bi,{observedAttributes:["hash-param","sort-on","group-on","descending","group-on-descending","hide-select-all","settings-id","no-local","no-local-sort","no-local-filter","disabled-filtering","loading","mini-breakpoint"]}){connectedCallback(){super.connectedCallback(),Ie(this,"selectedItems",[]),Ie(this,"visibleData",[]),Ie(this,"sortedFilteredGroupedItems",[])}});const ye=`
	<slot name="actions" slot="actions"></slot>
`;m(Object.assign([ye],{raw:[ye]}));Re(Object.assign([ye],{raw:[ye]}));const bt=(n,e,t)=>{let r=String(n),o=-1;const i=t,l=e-r.length;for(;++o<l;)r=i+r;return r},D=(n,e)=>Math.floor(Math.random()*(e-n+1))+n,xi=()=>"2015-"+bt(D(1,12),2,"0")+"-"+bt(D(1,28),2,"0"),vi=()=>{const n=D(0,20);return n===1?new Date(2015,3,2,14,26,10,299):n===2?new Date(2016,4,2,10,9,10,444):n===3?new Date(2016,4,2,10,9,10,443):n===4?new Date(2016,4,2,10,9,10,442):new Date(D(2014,2017),D(1,12),D(1,28),D(0,23),D(0,59),D(0,59),D(0,999))},Ht=(n,e,t)=>{const r=D(n,e),o=[],i=["Lorem ipsum dolor sit amet","Nunc tristique","Curabitur vestibulum","Cras laoreet","Himenaeos","maximus diam purus at mauris"],l=["SEK","USD","EUR","AUD"];let a=0;for(let s=0;s<r;s+=1){const u="Group "+s,d=s*2+1;for(let c=0;c<d;c+=1){const g=[],p=[],v=[],b=a%10;for(let x=0;x<b;x+=1)g.push("Item "+x),p.push({name:"Item "+x,value:"item-value-"+x}),v.push({value:"cat-"+x,label:"Category "+x});o.push({id:a,name:u+" item "+c,value:D(0,1e4),bool:D(0,100)>50,object:{value:D(0,1e4),label:"Random string "+D(1,t)},sub:{subProp:i[a%i.length]},randomString:"Random string "+D(1,t),randomString2:"Random string 2 "+D(1,t),randomString3:"Random string 3 "+D(1,t),randomString4:"Random string 4 "+D(1,t),date:vi(),dateJSON:xi(),amount:{amount:D(10,100),currency:l[a%l.length]},group:u,list:g,objectList:p,categories:a%7===0?null:v}),a+=1}}return o},Si={title:"Components/ComsmozOmnitableFullDemo",component:"cosmoz-omnitable",tags:["autodocs"],args:{loading:!1,locale:"en",sortOn:"",groupOn:"",descending:!1,groupOnDescending:!1,hashParam:"",settingsId:"",selectedItems:[],disabled:!1},argTypes:{loading:{control:"boolean",description:"Show loading state",table:{defaultValue:{summary:"false"}}},locale:{control:"select",options:["en","fr","sv"],description:"Language locale",table:{defaultValue:{summary:"en"}}},selectedItems:{control:"object",description:"Show selected items"},data:{control:"object",description:"Show specified items"},sortOn:{control:"text",description:'Column property name to sort on (e.g., "amount", "date", "id")'},groupOn:{control:"text",description:'Column property name to group on (e.g., "amount", "date", "id")'},descending:{control:"boolean",description:"Sort on descending"},groupOnDescending:{control:"boolean",description:"Group on descending"},hashParam:{control:"text",description:"Hash parameter for URL state management"},settingsId:{control:"text",description:"ID for storing table settings"},disabled:{control:"boolean",description:"Hide one column",table:{defaultValue:{summary:"false"}}}},render:n=>m`
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

                <cosmoz-omnitable-column-autocomplete-excluding
                    title="Categories"
                    name="categories"
                    value-path="categories"
                    value-property="value"
                    text-property="label"
                    width="150px"
                    empty-label="None"
                    empty-value="nada"
                ></cosmoz-omnitable-column-autocomplete-excluding>

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
                    ${bn({styles:"vertical-align: middle; fill: currentColor;"})}
                    <span>Remove items</span>
                </paper-button>
            </cosmoz-omnitable>
        `,play:async()=>{console.log("Current hash:",window.location.hash)}},pe={args:{data:Ht(10,10,10)}},ge={args:{data:Ht(2,2,10)}},he={args:{data:[]}};pe.parameters={...pe.parameters,docs:{...pe.parameters?.docs,source:{originalSource:`{
  args: {
    data: generateTableDemoData(10, 10, 10)
  }
}`,...pe.parameters?.docs?.source}}};ge.parameters={...ge.parameters,docs:{...ge.parameters?.docs,source:{originalSource:`{
  args: {
    data: generateTableDemoData(2, 2, 10)
  }
}`,...ge.parameters?.docs?.source}}};he.parameters={...he.parameters,docs:{...he.parameters?.docs,source:{originalSource:`{
  args: {
    data: []
  }
}`,...he.parameters?.docs?.source}}};const ki=["TableWithLargeData","TableWithSmallData","TableWithNoData"];export{pe as TableWithLargeData,he as TableWithNoData,ge as TableWithSmallData,ki as __namedExportsOrder,Si as default};
