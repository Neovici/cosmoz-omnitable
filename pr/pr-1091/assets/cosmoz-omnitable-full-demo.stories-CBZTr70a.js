import{e as c,w as Jt,D as Me,t as C,A as Re}from"./iframe-Byf9_7Uo.js";import{A as xe,n as I,c as V,t as q,g as k,P as T,s as Yt,a as wt,r as Zt,e as en,D as tn,b as nn,d as rn,i as ze,h as zt,m as on,u as N,f as St,j as Ct,k as ln,l as Y,p as B,o as Ne,q as kt,v as Se,w as an,x as Ce,y as O,z as E,B as ke,C as _t,E as tt,F as nt,G as S,H as sn,I as un,J as It,K as Be,L as Ft,M as cn,N as Ot,O as dn,Q as rt,R as mn,S as pn,T as gn,U as At,V as je,W as He,X as hn,Y as Dt,Z as Pe,_ as U,$ as fn,a0 as bn}from"./cosmoz-collapse-Cb5gTXg4.js";import"./preload-helper-PPVm8Dsz.js";const xn=({slot:n,title:e,className:t,width:r="24",height:o="24",styles:i}={})=>c`
  <svg
    slot=${xe(n)}
    class=${`delete-icon ${t??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${r}
    height=${o}
    style=${xe(i)}
  >
    ${I(e,()=>Jt`<title>${e}</title>`)}
    <path
      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
    />
  </svg>
`,vn=()=>c`<style>
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
</style>`;customElements.define("cz-spinner",V(vn));const yn=q`
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
`,$n=()=>c`
	<style>
		${yn}
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
`;customElements.define("cosmoz-clear-button",V($n));const W=({valuePath:n},e)=>k(e,n),wn=W,zn=W,Sn=({valuePath:n},e)=>t=>{const r=k(t,n);return r==null?!1:r.toString().toLowerCase().trim().includes(e.toLowerCase().trim())},Cn=(n,e)=>e===""||e==null?null:e,R=n=>class extends n{static get properties(){return{isOmnitableColumn:{type:Boolean,value:!0},title:{type:String},valuePath:{type:String,notify:!0},values:{type:Array,notify:!0},filter:{type:Object},noLocalFilter:{type:Boolean},disabled:{type:Boolean,value:!1,notify:!0},editable:{type:Boolean,notify:!0},loading:{type:Boolean,value:!1,notify:!0},externalValues:{type:Boolean,value:!1,notify:!0},name:{type:String},sortOn:{type:String},groupOn:{type:String},noSort:{type:Boolean,value:!1},disabledFiltering:{type:Boolean,value:!1},width:{type:String,value:"75px"},minWidth:{type:String,value:"40px"},flex:{type:String,value:"1"},cellClass:{type:String,value:"default-cell"},headerCellClass:{type:String,value:"default-header-cell"},priority:{type:Number,value:0},hidden:{type:Boolean,notify:!0},align:{type:String,value:"left"},headerAlign:{type:String,value:null},renderHeader:{type:Function},renderCell:{type:Function},renderEditCell:{type:Function},renderGroup:{type:Function},mini:{type:Number,value:null},renderMini:{type:Function}}}static get observers(){return["notifyFilterChange(filter)"]}notifyFilterChange(e){this.__ownChange||this.dispatchEvent(new CustomEvent("legacy-filter-changed",{detail:{name:this.name,state:this.legacyFilterToState(e)},bubbles:!0}))}legacyFilterToState(e){return{filter:e}}getFilterFn(){}getString(e,t){return W(e,t)}toXlsxValue(e,t){return wn(e,t)}cellTitleFn(e,t){return this.getString(e,t)}headerTitleFn(e){return e.title}serializeFilter(e,t){return Cn(e,t)}deserializeFilter(e,t){if(t==null)return null;if(typeof t=="string")try{return window.decodeURIComponent(t)}catch{return null}return t}getComparableValue(e,t){return zn(e,t)}computeSource(e,t){return t}_propertiesChanged(e,t,r){super._propertiesChanged(e,t,r),this.dispatchEvent(new CustomEvent("cosmoz-column-prop-changed",{bubbles:!0}))}},kn=n=>e=>n(t=>{if(t.inputValue===void 0&&e.target.value==="")return t;clearTimeout(t.t);const r=setTimeout(()=>n(o=>({...o,filter:o.inputValue})),1e3);return{...t,inputValue:e.target.value,t:r}}),_n=n=>()=>n(e=>({...e,filter:e.inputValue})),In=n=>e=>{e.keyCode===13&&(e.preventDefault(),n(t=>({...t,filter:t.inputValue})))},Fn=n=>e=>n(t=>({...t,headerFocused:e.detail.value})),On=n=>()=>n(e=>({...e,filter:null,inputValue:null})),An=n=>n!=null&&n!=="";class Dn extends R(T){static get properties(){return{minWidth:{type:String,value:"55px"},editMinWidth:{type:String,value:"55px"},inputValue:{type:Object,notify:!0}}}getFilterFn(e,t){if(!(t==null||t===""))return Sn(e,t)}renderCell(e,{item:t}){return c`<span class="default-column">${W(e,t)}</span>`}renderEditCell(e,{item:t},r){return c`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>r(i.target.value)}
			.value=${W(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,inputValue:r,headerFocused:o},i){return c`<cosmoz-input
			label=${e.title}
			?disabled=${e.disabledFiltering}
			.value=${r??t}
			@value-changed=${kn(i)}
			focused=${o}
			@focused-changed=${Fn(i)}
			@keydown=${In(i)}
			@blur=${_n(i)}
		>
			${I(!e.disabledFiltering,()=>c`<cosmoz-clear-button
						suffix
						slot="suffix"
						?visible=${An(t)}
						light
						@click=${On(i)}
					></cosmoz-clear-button>`)}
		</cosmoz-input>`}legacyFilterToState(e){return{filter:e,inputValue:e}}}customElements.define("cosmoz-omnitable-column",Dn);const Vn=["label","value","slot","always-float-label","disabled"],Tn=wt`
	${Yt}

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
		cursor: default;
		--cosmoz-input-disabled-opacity: 1;
	}

	:host([disabled]) .line {
		border-bottom-style: solid;
	}
`,En=n=>{const{label:e,value:t,slot:r}=n,o=c`<div
		id="input"
		part="input"
		role="button"
		class="control"
		slot=${r}
	>
		${t||""}
	</div>`;return Zt(o,{label:e})};customElements.define("cosmoz-omnitable-dropdown-input",V(En,{observedAttributes:Vn,styleSheets:[Tn]}));const te=({title:n,tooltip:e="",filterText:t="",onOpenedChanged:r,content:o,align:i="left",externalValues:l=null})=>{const a={filtered:!!t,...l!=null&&{[`external-values-${l}`]:!0}};return c`
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
			@focus=${r}
			class=${en({...a,dropdown:!0})}
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
			<div class="dropdown-content">${o}</div>
		</cosmoz-dropdown>
	`},Vt=n=>n?typeof n.close=="function"?n:Vt(n.parentElement):null,Ge=n=>class extends n{static get properties(){return{disabled:{type:Boolean,value:!1},filter:{type:Object,notify:!0},values:{type:Array,value(){return[]}},headerFocused:{type:Boolean,notify:!0},min:{type:Number,value:null},max:{type:Number,value:null},limits:{type:Function},autoupdate:{type:String,value:!0},locale:{type:String,value:null},align:{type:String,value:"left"},_filterInput:{type:Object,value(){return{min:null,max:null}}},_range:{type:Object,computed:"_computeRange(values.*)"},_limit:{type:Object,computed:"_computeLimit(_range, _filterInput.*, min, max)",value(){return{}}},_tooltip:{type:String,computed:"_computeTooltip(title, _filterText)"},_fromClasses:{type:String,computed:"_computeInputClasses(_filterInput.min)"},_toClasses:{type:String,computed:"_computeInputClasses(_filterInput.max)"}}}static get observers(){return["_filterInputChanged(_filterInput.*, autoupdate)","_filterChanged(filter.*)","_updateLimits(limits, headerFocused)"]}disconnectedCallback(){this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),super.disconnectedCallback()}_computeInputClasses(e){return e!=null&&e!==""?"has-value":""}toNumber(e,t,r){if(e==null||e==="")return;const o=typeof e=="number"?e:Number(e);if(Number.isNaN(o))return;if(r==null||t==null)return o;const i=this.toNumber(t);return i==null?o:r(o,i)}toValue(){return this.toNumber.apply(this,arguments)}getComparableValue(e,t){if(e==null)return;let r=e;return t!=null&&(r=this.get(t,e)),this.toValue(r)}renderValue(){}getInputString(e,t=this.valuePath){const r=this.toValue(this.get(t,e));return this._toInputString(r)}_computeRange(e){const t=e.base,r=Array.isArray(t)&&t.length&&t.map(o=>this.toValue(o)).filter(o=>o!=null);return!r||r.length<1?{min:null,max:null}:r.reduce((o,i)=>({min:this.toValue(i,o.min,Math.min),max:this.toValue(i,o.max,Math.max)}),{})}_computeLimit(e,t,r,o){if(!e)return;const i=t.base,l=this.toValue(r),a=this.toValue(o),s=l??this.toValue(e.min),u=a??this.toValue(e.max);return{fromMin:s,fromMax:this.toValue(u,this._fromInputString(i.max,"max"),Math.min),toMin:this.toValue(s,this._fromInputString(i.min,"min"),Math.max),toMax:u}}_computeFilterText(e){if(e.base==null)return;const t=e.base,r=this.toValue(t.min),o=this.toValue(t.max),i=[];return r!=null&&i.push(this.renderValue(r)),i.push(" - "),o!=null&&i.push(this.renderValue(o)),i.length>1?i.join(""):void 0}_computeTooltip(e,t){return t==null?e:`${e}: ${t}`}_fromInputString(e){return this.toValue(e)}_toInputString(e){const t=this.toValue(e);return t??null}_getDefaultFilter(){return{min:null,max:null}}_filterInputChanged(e,t){const r=e.path.split(".")[1];this.__inputChangePath=r||null,t&&(this._limitInputDebouncer=tn.debounce(this._limitInputDebouncer,nn.after(600),()=>{this._limitInput(),this._updateFilter()}),rn(this._limitInputDebouncer))}_clearFrom(){this.set("_filterInput.min",null),this._updateFilter()}_clearTo(){this.set("_filterInput.max",null),this._updateFilter()}_onBlur(){this._limitInput(),this._updateFilter()}_onKeyDown(e){const t=e.currentTarget,r=Array.from(t.parentElement.querySelectorAll("cosmoz-input")),o=r[r.findIndex(a=>a===t)+1],i=!o,l=r[0]===t;switch(e.keyCode){case 13:if(e.preventDefault(),!i)o.focus();else{const a=this._limitInput();this._updateFilter(),a||this._closeParent(t)}break;case 9:(i&&!e.shiftKey||l&&e.shiftKey)&&this._closeParent(t)}}_closeParent(e){const t=Vt(e);t&&t.close()}_onDropdownOpenedChanged({currentTarget:e,type:t,detail:r}){(t==="focus"||r?.value===!0)&&setTimeout(()=>{e.querySelector("cosmoz-input:focus")||e.querySelector("cosmoz-input")?.focus()},100)}_limitInput(){const e=this._filterInput,t=this.__inputChangePath,r=t?this._fromInputString(this.get(t,e),t):null;if(this.__inputChangePath=null,r==null)return!1;const o=this._limit,i=t==="min"?"from":"to",l=this.get(i+"Min",o),a=this.get(i+"Max",o),s=this.toValue(r,l,Math.max),u=this.toValue(s,a,Math.min);return this.getComparableValue(r)!==this.getComparableValue(u)?(this.set(["_filterInput",t],this._toInputString(u,t)),this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),!0):!1}_updateFilter(){const e=this._filterInput,t=this.filter,r=this._fromInputString(e.min,"min"),o=this._fromInputString(e.max,"max");this.getComparableValue(r)===this.getComparableValue(t,"min")&&this.getComparableValue(o)===this.getComparableValue(t,"max")||this.set("filter",{min:r,max:o})}_filterChanged(e){if(this._filterInput==null)return;const t=this._filterInput,r=e.base,o=this._fromInputString(t.min,"min"),i=this._fromInputString(t.max,"max");this.getComparableValue(o)===this.getComparableValue(r,"min")&&this.getComparableValue(i)===this.getComparableValue(r,"max")||(this.set("_filterInput",{min:this._toInputString(r.min),max:this._toInputString(r.max)}),this._limitInputDebouncer&&this._limitInputDebouncer.cancel())}hasFilter(){const e=this.filter;return e==null?!1:this.toValue(e.min)!=null||this.toValue(e.max)!=null}resetFilter(){this.filter=this._getDefaultFilter()}_updateLimits(e,t){e&&Promise.resolve(ze(e,{active:t})).then(r=>{const{min:o,max:i}=r??{};Object.assign(this,{...o!=null?{min:o}:{},...i!=null?{max:i}:{}})})}},ne=n=>class extends n{static get template(){return zt`<div id="output" style="position:relative;"></div>`}connectedCallback(){super.connectedCallback();const e=this;Me(e.render(),e.$.output)}_propertiesChanged(e,t,r){super._propertiesChanged(e,t,r);const o=this;requestAnimationFrame(()=>Me(o.render(),o.$.output))}};class Ln extends Ge(ne(T)){static get properties(){return{currency:{type:String},autodetect:{type:Boolean,value:!1},rates:{type:Object},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:"_computeFilterText(filter.*, _formatters)"},headerFocused:{type:Boolean,value:!1}}}static get observers(){return["_valuesChanged(autodetect, currency, values)"]}render(){const e=t=>{this.headerFocused=t.type==="focus",this._onDropdownOpenedChanged(t)};return c`
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
			${I(this.disabled,()=>c`
					<cosmoz-omnitable-dropdown-input
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??""}
					></cosmoz-omnitable-dropdown-input>
				`,()=>c`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${te({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:c`
							<h3 style="margin: 0;">${this.title}</h3>
							<cosmoz-input
								class=${this._fromClasses}
								type="number"
								title=${C("Minimum amount")}
								label=${C("Min amount")}
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
								title=${C("Maximum amount")}
								label=${C("Max amount")}
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
				`)}
		`}_valuesChanged(e,t,r){if(!Array.isArray(r)||r.length<1||!e&&t)return;const o=r.reduce((l,a)=>{if(a.currency){const s=a.currency;l[s]=(l[s]||0)+1}return l},{});let i=Object.keys(o)[0];Object.keys(o).reduce((l,a)=>{const s=Math.max(l,o[a]);return s===o[a]&&(i=a),s},0),this.set("currency",i)}toAmount(e,t,r){if(e==null||e==="")return;if(typeof e!="object"||e.currency==null||e.currency==="")return null;const o=this.toNumber(e.amount);if(o==null||Number.isNaN(o))return null;const i={currency:e.currency,amount:o};if(r==null||t==null)return i;const l=this.toAmount(t);if(l==null)return i;const a=this.rates||{},s=i.amount*(a[i.currency]||1),u=l.amount*(a[l.currency]||1);return this.toNumber(s,u,r)===s?i:l}toValue(){return this.toAmount.apply(this,arguments)}getComparableValue(e,t){const r=super.getComparableValue(e,t);if(r==null)return;const o=this.toNumber(r.amount),i=this.rates;return i==null?o:o*(i[r.currency]||1)}getString(e,t=this.valuePath){const r=this.toValue(this.get(t,e));return r===void 0?"":r===null?"Invalid value":this.renderValue(r)}getCurrency(e,t){const r=this.get(t,e);return r&&r.currency}getFormatter(e,t){const r=t||"",o=e+r||"",i=this._formatters=this._formatters||{};return i[o]||(i[o]=new Intl.NumberFormat(t||void 0,{style:"currency",currency:e})),i[o]}renderValue(e){const t=this.toAmount(e);return t==null?"":this.getFormatter(t.currency,this.locale).format(e.amount)}_amountValueChanged(e){const t=e.target,r=t.value,o=e.model.item,i=this.get(this.valuePath,o),l=Number(r),a={amount:l,currency:i.currency};this.set(this.valuePath,a,o),this._fireItemChangeEvent(o,this.valuePath,i,this.renderValue.bind(this))}_toInputString(e){const t=this.toValue(e);return t==null?null:this.toNumber(t.amount)}_toInputStringAmount(e){const t=this.rates;if(t==null)return this._toInputString(e);const r=this.toValue(e);return r==null?null:(this.toNumber(r.amount)*(t[r.currency]||1)/(t[this.currency]||1)).toFixed(2)}_fromInputString(e,t){const r=this.toNumber(e);if(r!=null)return this.toValue({amount:r,currency:t&&this.get(["filter",t,"currency"])||this.currency})}}customElements.define("cosmoz-omnitable-amount-range-input",Ln);const L=(n,e,t)=>{if(n==null||n==="")return;const r=typeof n=="number"?n:Number(n);if(!Number.isNaN(r))return r},Tt=n=>{const e=L(n);return e==null?null:e.toString()},Mn=({valuePath:n},e)=>{const t=L(n?k(e,n):e);return Tt(t)},ot=n=>{const e=Tt(n);return e??""},K=({valuePath:n,maximumFractionDigits:e},t)=>{if(t==null)return;const r=n?k(t,n):t,o=L(r);if(o!=null)return e!==null?L(o.toFixed(e)):o},Rn=on((n,e,t)=>{const r={localeMatcher:"best fit"};return e!==null&&(r.minimumFractionDigits=e),t!==null&&(r.maximumFractionDigits=t),new Intl.NumberFormat(n||void 0,r)}),it=({valuePath:n,locale:e,minimumFractionDigits:t,maximumFractionDigits:r},o)=>{const i=n?k(o,n):o;if(i==null)return"";const l=L(i);return l==null?void 0:Rn(e,t,r).format(l)},Nn=(n,e)=>t=>{const r=K(n,t);if(r==null)return!1;const o=K({...n,valuePath:"min"},e),i=K({...n,valuePath:"max"},e);return!(r<(o??-1/0)||r>(i??1/0))},ee=(n={},e,t,r)=>{if(e==null||e==="")return;if(typeof e!="object"||e.currency==null||e.currency==="")return null;const o=L(e.amount);return o==null||Number.isNaN(o)?null:{currency:e.currency,amount:o}},Q=({valuePath:n,rates:e},t)=>{if(t==null)return;let r=t;n!=null&&(r=k(t,n));const o=ee(e,r);if(o==null)return;const i=L(o.amount);return e==null||i==null?i:i*(e?.[o.currency]||1)},jn=(n,e)=>t=>{const r=Q(n,t);if(r===void 0)return!1;const o=Q({...n,valuePath:"min"},e),i=Q({...n,valuePath:"max"},e);return o===void 0||i===void 0?!0:!(r<o||r>i)},oe={},Pn=(n,e)=>{const r=n+(e||"")||"";return oe[r]||(oe[r]=new Intl.NumberFormat(e||void 0,{style:"currency",currency:n})),oe[r]},Bn=(n,e,t)=>{const r=ee(n,e);return r==null?"":Pn(r.currency,t).format(r.amount)},lt=({valuePath:n,rates:e,locale:t},r)=>{const o=ee(e,n?k(r,n):void 0);return o===void 0?"":o===null?"Invalid value":Bn(e,o,t)},at=n=>n?n.amount+n.currency:"",st=n=>{if(n==null||n==="")return;const e=n.match(/^(-?[\d]+)([\D]+?)$/iu);if(!(!Array.isArray(e)||e.length<0))return{amount:Number(e[1]),currency:e[2]}},Hn=({valuePath:n},e)=>n?k(e,n)?.currency:null,Gn=({valuePath:n},e)=>n?k(e,n)?.amount:void 0,j=Symbol("column"),Wn=n=>{let e=!0;const t=n.map(r=>r.name);return n.forEach(r=>{r.name==null&&(e=!1,console.error("The name attribute needs to be set on all columns! Missing on column",r))}),n.forEach(r=>{t.indexOf(r.name)!==t.lastIndexOf(r.name)&&(e=!1,console.error("The name attribute needs to be unique among all columns! Not unique on column",r))}),e},qn=(n,e)=>{const t=n.valuePath??n.name;return{name:n.name,title:n.title,valuePath:t,groupOn:n.groupOn??t,sortOn:n.sortOn??t,noSort:n.noSort,disabledFiltering:e||n.disabledFiltering,minWidth:n.minWidth,width:n.width,flex:n.flex,priority:n.priority,getString:n.getString,getComparableValue:n.getComparableValue,serializeFilter:n.serializeFilter,deserializeFilter:n.deserializeFilter,toXlsxValue:n.toXlsxValue,renderHeader:n.renderHeader,renderCell:n.renderCell,renderEditCell:n.renderEditCell,renderGroup:n.renderGroup,cellTitleFn:n.cellTitleFn,headerTitleFn:n.headerTitleFn,getFilterFn:n.getFilterFn,headerCellClass:n.headerCellClass,cellClass:n.cellClass,editable:n.editable,values:n.values,source:Ct(n.computeSource),noLocalFilter:n.noLocalFilter,mini:n.mini,renderMini:n.renderMini,align:n.align,headerAlign:n.headerAlign,loading:n.loading,externalValues:n.externalValues,computeSource:n.computeSource,trueLabel:n.trueLabel,falseLabel:n.falseLabel,valueProperty:n.valueProperty,textProperty:n.textProperty,emptyLabel:n.emptyLabel,emptyValue:n.emptyValue,min:n.min,max:n.max,locale:n.locale,autoupdate:n.autoupdate,maximumFractionDigits:n.maximumFractionDigits,minimumFractionDigits:n.minimumFractionDigits,currency:n.currency,rates:n.rates,autodetect:n.autodetect,ownerTree:n.ownerTree,keyProperty:n.keyProperty,...n.getConfig?.(n),[j]:n}},Xn=n=>n.isOmnitableColumn&&!n.hidden,Un=n=>{const e=n.filter(Xn);return Wn(e)?e:[]},Kn=(n,e,t)=>(Array.isArray(e)?n.filter(o=>e.includes(o.name)):n.filter(o=>!o.disabled)).map(o=>qn(o,t)),Qn=(n,{enabledColumns:e,disabledFiltering:t})=>{const[r,o]=N([]);return St(()=>{let i,l=[];const a=n.shadowRoot.querySelector("#columnsSlot"),s=d=>()=>{const m=a.assignedNodes({flatten:!0});if(d)l=m;else{const g=m.filter(v=>!l.includes(v)),p=l.filter(v=>!m.includes(v)),f=[...g,...p].some(v=>v.isOmnitableColumn);if(l=m,!f)return}o(Kn(Un(m),e,t))},u=d=>{cancelAnimationFrame(i),i=requestAnimationFrame(s(d?.type==="cosmoz-column-prop-changed"))};return u(),a.addEventListener("slotchange",u),n.addEventListener("cosmoz-column-prop-changed",u),()=>{a.removeEventListener("slotchange",u),n.removeEventListener("cosmoz-column-prop-changed",u),cancelAnimationFrame(i)}},[e,t]),r},Et=(n,e)=>Array.isArray(n)?n.map(t=>k(t,e)).filter((t,r,o)=>t!=null&&o.indexOf(t)===r):void 0,re=({externalValues:n,values:e,valuePath:t},r)=>{if(n)return n;if(typeof e=="function")return e;if(t!==void 0)return Et(r,t)},Jn=(n,e,t,r)=>{const{valuePath:o}=e,i=o!==void 0?k(t,o):void 0;if(r===i)return;o!==void 0&&ln(t,o,r);const l={item:t,valuePath:o,value:r,oldValue:i,column:e[j]};n.dispatchEvent(new CustomEvent("column-item-changed",{bubbles:!0,composed:!0,detail:l}))};class Yn extends R(T){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},currency:{type:String,notify:!0},autodetect:{type:Boolean,value:!1,notify:!0},rates:{type:Object,notify:!0},width:{type:String,value:"70px"},cellClass:{type:String,value:"amount-cell"},headerCellClass:{type:String,value:"amount-header-cell"},align:{type:String,value:"right"}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const r=Q({...e,valuePath:"min"},t),o=Q({...e,valuePath:"max"},t);if(!(r==null&&o==null))return jn(e,t)}getString(e,t){return lt(e,t)}toXlsxValue(e,t){return lt(e,t)}getComparableValue(e,t){return Q(e,t)}serializeFilter({rates:e},t){if(t==null)return;const r=ee(e,t.min),o=ee(e,t.max);if(!(r==null&&o==null))return at(r)+"~"+at(o)}deserializeFilter(e,t){if(typeof t!="string"||t==="")return null;const r=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(r)?{min:st(r[1]),max:st(r[2])}:null}renderCell(e,{item:t}){return c`<span>${e.getString(e,t)}</span>`}renderEditCell(e,{item:t},r){return c`<cosmoz-input
			no-label-float
			type="number"
			@change=${i=>r({amount:i.target.value,currency:k(t,e.valuePath)?.currency})}
			.value=${Gn(e,t)}
		>
			<div slot="suffix">${Hn(e,t)}</div>
		</cosmoz-input>`}renderHeader({title:e,min:t,max:r,limits:o,locale:i,rates:l,currency:a,autoupdate:s,autodetect:u,disabledFiltering:d,headerAlign:m,align:g},{filter:p},f,v){return c`<cosmoz-omnitable-amount-range-input
			.title=${e}
			?disabled=${d}
			.filter=${p}
			.values=${v}
			.rates=${l}
			.min=${t}
			.max=${r}
			.limits=${o}
			.locale=${i}
			.currency=${a}
			.autoupdate=${s}
			.autodetect=${u}
			.align=${m??g}
			@filter-changed=${({detail:{value:x}})=>f(b=>({...b,filter:x}))}
			@header-focused-changed=${({detail:{value:x}})=>f(b=>({...b,headerFocused:x}))}
		></cosmoz-omnitable-amount-range-input>`}computeSource(e,t){return re(e,t)}}customElements.define("cosmoz-omnitable-column-amount",Yn);const Zn=(n,e)=>{if(!Array.isArray(n))return;const t=[];return n.reduce((r,o)=>Array.isArray(o)?(o.forEach(i=>{r.push(i)}),r):(r.push(o),r),[]).filter((r,o,i)=>{if(i.indexOf(r)!==o)return!1;if(e){const l=k(r,e);if(t.indexOf(l)!==-1)return!1;t.push(l)}return!0})},er=(n,e,t)=>{if(n==null)return[];if(Array.isArray(n)){const r=Zn(n,e);if(!r?.length)return[];const o=t??"label",i=l=>typeof l=="object"&&l!=null?String(k(l,o??"")??""):String(l??"");return r.sort((l,a)=>i(l).localeCompare(i(a)))}if(typeof n=="object"){const r=e??"id",o=t??"label";return Object.entries(n).map(([i,l])=>({[r]:i,[o]:l})).sort((i,l)=>String(i[o]??"").localeCompare(String(l[o]??"")))}return[]},We=(n,e,t)=>Y(e&&k(n,e)).map(B(t)),qe=({valuePath:n,textProperty:e},t)=>We(t,n,e).filter(r=>r!=null).join(", "),tr=qe,nr=({valueProperty:n,valuePath:e,emptyValue:t,emptyProperty:r},o)=>i=>{const l=B(n),a=Y(k(i,e));return o.some(s=>a.length===0&&B(r||n)(s)===t||a.some(u=>l(u)===l(s)))},_e=n=>e=>n(t=>({...t,filter:e})),Ie=n=>e=>n(t=>({...t,headerFocused:e})),Fe=n=>e=>n(t=>({...t,query:e})),Lt=({emptyValue:n,emptyLabel:e,emptyProperty:t,textProperty:r,valueProperty:o},i)=>{const l=er(i,o,r);return!e||n===void 0||!r||!(t||o)||!l?l:[{[r]:e,[t||o]:n},...l]},rr=(n,e)=>Lt(n,Et(e,n.valuePath)),Oe=n=>class extends n{static get properties(){return{textProperty:{type:String},valueProperty:{type:String},emptyLabel:{type:String},emptyValue:{type:Object},emptyProperty:{type:String}}}getConfig(e){return{emptyProperty:e.emptyProperty}}getString(e,t){return qe(e,t)}toXlsxValue(e,t){return tr(e,t)}getComparableValue({valuePath:e,valueProperty:t},r){const o=k(r,e);return t==null?o:Y(o).map(B(t)).sort().join(" ")}getFilterFn(e,t){if(!(!t||!Array.isArray(t)||t.length===0))return nr(e,t)}serializeFilter(e,t){return Array.isArray(t)&&t.length===0?null:JSON.stringify(t)}deserializeFilter(e,t){if(t==null)return null;try{return JSON.parse(decodeURIComponent(t))}catch(r){const o=r;return console.error("Failed to deserialize filter value:",{error:o?.name,message:o?.message,filterLength:typeof t=="string"?t.length:null}),null}}computeSource(e,t){return e.externalValues||typeof e.values=="function"?async(...r)=>Lt(e,await Promise.resolve(ze(e.values,...r))):rr(e,t)}},or=({valuePath:n,textProperty:e,valueProperty:t},r)=>{const o=e?kt(e):B(t),i=Y(n&&k(r,n)).map(o);return i.length>1?i.filter(Boolean).join(","):i[0]},ir=({valueProperty:n,valuePath:e,emptyValue:t,emptyProperty:r},o)=>{const i=B(n),l=B(r||n),a=new Set(o.filter(m=>m.excluded).map(m=>i(m.item))),s=new Set(o.filter(m=>!m.excluded).map(m=>i(m.item))),u=o.some(m=>m.excluded&&l(m.item)===t),d=o.some(m=>!m.excluded&&l(m.item)===t);return m=>{const g=Y(k(m,e)).map(i);return g.length===0?!u&&(d||s.size===0):!g.some(p=>a.has(p))&&(s.size===0||g.some(p=>s.has(p)))}};let lr=class extends Oe(R(T)){static get properties(){return{headerCellClass:{type:String,value:"autocomplete-header-cell"},minWidth:{type:String,value:"55px"},editMinWidth:{type:String,value:"55px"},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return c`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},r){return c`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>r(i.target.value)}
			.value=${W(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:r},o,i){return c`<cosmoz-autocomplete-excluding
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
			@opened-changed=${l=>Ie(o)(l.detail.value)}
			@value-changed=${Ne(_e(o))}
			@text-changed=${Ne(Fe(o))}
			>${I(e.loading,()=>c`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-excluding
		>`}getComparableValue(e,t){return or(e,t)}getFilterFn(e,t){if(!(!t||!Array.isArray(t)||t.length===0))return ir(e,t)}};customElements.define("cosmoz-omnitable-column-autocomplete-excluding",lr);const ar=({valuePath:n,textProperty:e,valueProperty:t},r)=>{const o=e?kt(e):B(t),i=Y(n&&k(r,n)).map(o);return i.length>1?i.filter(Boolean).join(","):i[0]};class sr extends Oe(R(T)){static get properties(){return{headerCellClass:{type:String,value:"autocomplete-header-cell"},minWidth:{type:String,value:"55px"},editMinWidth:{type:String,value:"55px"},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return c`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},r){return c`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>r(i.target.value)}
			.value=${W(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:r},o,i){return c`<cosmoz-autocomplete-ui
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
			.onChange=${_e(o)}
			@opened-changed=${l=>Ie(o)(l.detail.value)}
			.onText=${Fe(o)}
			>${I(e.loading,()=>c`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}getComparableValue(e,t){return ar(e,t)}}customElements.define("cosmoz-omnitable-column-autocomplete",sr);const Xe=(n,e)=>e.find(({value:t})=>n===t),ur=(n,e,t)=>{const r=Xe(e,t);return r?r.text:n},ut=(n,e,t,r)=>ur(n,k(e,t),r),cr=({valuePath:n},e,t)=>Xe(k(e,n),t),dr=n=>e=>{n(t=>({...t,filter:e?.[0]?.value??null}))},mr=n=>e=>{n(t=>({...t,headerFocused:e}))},pr=n=>e=>{n(t=>({...t,query:e}))},gr=n=>e=>n(e?.[0]?.value),ct=({valuePath:n,trueLabel:e,falseLabel:t},r)=>k(r,n)?e:t,hr=({valuePath:n},e)=>t=>k(t,n)===e,ie=Ct((n,e)=>[{text:n,value:!0},{text:e,value:!1}]),fr=({valuePath:n,trueLabel:e,falseLabel:t},r)=>n?k(r,n)?e:t:"",br=(n,e)=>{try{return JSON.parse(e)}catch{return null}};class xr extends R(T){static get properties(){return{trueLabel:{type:String,value:"True"},falseLabel:{type:String,value:"False"},flex:{type:String,value:"0"},cellClass:{type:String,value:"boolean-cell"}}}getString(e,t){return ct(e,t)}renderCell(e,{item:t}){return ct(e,t)}renderEditCell(e,{item:t},r){const{trueLabel:o,falseLabel:i}=e;return c`<cosmoz-autocomplete
			no-label-float
			.title=${ut(e.title,t,e.valuePath,ie(o,i))}
			.source=${ie(o,i)}
			.textProperty=${"text"}
			.value=${cr(e,t,ie(o,i))}
			.onChange=${gr(r)}
			.limit=${1}
			>${I(e.loading,()=>c`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete
		>`}renderHeader(e,{filter:t,query:r},o,i){return c`<cosmoz-autocomplete-ui
			?disabled=${e.disabledFiltering}
			.label=${e.title}
			.title=${ut(e.title,t,e.valuePath,i)}
			.source=${i}
			.textProperty=${"text"}
			.value=${Xe(t,i)}
			.text=${r}
			.onChange=${dr(o)}
			@opened-changed=${l=>mr(o)(l.detail.value)}
			.onText=${pr(o)}
			.limit=${1}
			>${I(e.loading,()=>c`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}computeSource({trueLabel:e,falseLabel:t}){return ie(e,t)}getFilterFn(e,t){if(t!=null)return hr(e,t)}toXlsxValue(e,t){return fr(e,t)}deserializeFilter(e,t){return br(e,t)}}customElements.define("cosmoz-omnitable-column-boolean",xr);const Ue=n=>class extends Ge(n){static get properties(){return{max:{type:Date,value:null},min:{type:Date,value:null},_filterText:{type:String,computed:"_computeFilterText(filter.*, formatter)"},formatter:{type:Object,computed:"_computeFormatter(locale)"}}}toDate(e,t,r){if(e==null||e==="")return;let o=e;if(o instanceof Date||(typeof e=="string"&&(o=this.getAbsoluteISOString(o)),o=new Date(o)),Number.isNaN(o.getTime()))return null;if(r==null||t==null)return o;const i=this.toDate(t);if(i==null)return o;const l=this.getComparableValue(o),a=this.getComparableValue(i);return r(l,a)===l?o:i}toValue(){return this.toDate.apply(this,arguments)}getComparableValue(e,t){const r=super.getComparableValue(e,t);if(r!=null)return this.toNumber(r.getTime())}getString(e,t=this.valuePath,r=this.formatter){const o=this.toValue(this.get(t,e));return o===void 0?"":o===null?"Invalid Date":this.renderValue(o,r)}getAbsoluteISOString(e){return e.length===19?e+this._getTimezoneString(e):e}_getTimezoneString(e){const t=-new Date(e).getTimezoneOffset()/60;return(t<0?"-":"+")+["0",Math.abs(t)].join("").substr(-2)+":00"}renderValue(e,t=this.formatter){if(t==null)return;const r=this.toValue(e);if(r!=null)return t.format(r)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0)}_toInputString(e){const t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(0,10)}_dateValueChanged(e){const t=e.currentTarget,r=t.value,o=e.model.item,i=this.get(this.valuePath,o),l=this._fromInputString(r);this.set(this.valuePath,l,o),this._fireItemChangeEvent(o,this.valuePath,i,this.renderValue.bind(this))}_toLocalISOString(e){return Se(e)}};class vr extends Ue(ne(T)){render(){const e=t=>{this.headerFocused=t.type==="focus"};return c`
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

			${I(this.disabled,()=>c`
					<cosmoz-omnitable-dropdown-input
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??""}
					></cosmoz-omnitable-dropdown-input>
				`,()=>c`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${te({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:c`
							<h3 style="margin: 0;">${this.title}</h3>
							<cosmoz-input
								type="date"
								label=${C("From date")}
								min=${this._toInputString(this._limit.fromMin)}
								max=${this._toInputString(this._limit.fromMax)}
								.value=${this._filterInput?.min}
								@value-changed=${t=>this.set("_filterInput.min",t.detail.value)}
							></cosmoz-input>
							<cosmoz-input
								type="date"
								label=${C("Until date")}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
								.value=${this._filterInput?.max}
								@value-changed=${t=>this.set("_filterInput.max",t.detail.value)}
							></cosmoz-input>
						`})}
				`)}
		`}_fromInputString(e,t){const r=this.toDate(e);if(r!=null)return t==="min"&&r.setHours(0,0,0,0),t==="max"&&r.setHours(23,59,59),r}_filterInputChanged(e,t){const r=e.path.split(".")[1],o=r&&e.value;if(o&&o.match(/^0+/u)){this._limitInputDebouncer.cancel();return}super._filterInputChanged(e,t)}}customElements.define("cosmoz-omnitable-date-range-input",vr);const yr=n=>{const e=-new Date(n).getTimezoneOffset()/60;return(e<0?"-":"+")+["0",Math.abs(e)].join("").substr(-2)+":00"},Ke=n=>n.length===19?n+yr(n):n,Mt=n=>{if(n==null||n==="")return;let e=n;return!(e instanceof Date)&&(typeof n=="string"&&(e=Ke(e)),e=an(e),!e)||Number.isNaN(e.getTime())?null:e},P=({valuePath:n},e)=>{if(e==null)return;let t=e;n!=null&&(t=k(e,n));const r=Mt(t);if(r!=null)return L(r.getTime())},D=(n,e,t)=>{const r=Mt(n);return r??null},Qe=(n,e)=>{if(e==null)return;const t=D(n);if(t!=null)return e.format(t)},le={},$r=n=>{const e=n||"";return le[e]||(le[e]=new Intl.DateTimeFormat(n||void 0)),le[e]},dt=({valuePath:n,locale:e},t)=>{let r=k(t,n||"");return r===void 0?"":(r=D(r),r===null?"Invalid Date":Qe(r,$r(e)))},Rt=n=>{const e=D(n);if(e==null)return null;const t=Se(e);return t==null?null:t.slice(0,10)},wr=({valuePath:n},e)=>Rt(k(e,n||"")),Nt=(n,e)=>{const t=D(n);if(t!=null)return t},mt=n=>{const e=Rt(n);return e??""},zr=({valuePath:n},e)=>{if(!n)return"";const t=D(k(e,n));if(!t)return"";const r=D(Se(t));return r?(r.setHours(0,0,0,0),r):""},jt=(n,e)=>t=>{const r=P(n,t);if(r==null)return!1;const o=P({...n,valuePath:"min"},e),i=P({...n,valuePath:"max"},e);return!(r<(o??-1/0)||r>(i??1/0))};class Sr extends R(T){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"date-header-cell"},width:{type:String,value:"100px"},minWidth:{type:String,value:"82px"},flex:{type:String,value:"0"}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const r=P({...e,valuePath:"min"},t),o=P({...e,valuePath:"max"},t);if(!(r==null&&o==null))return jt(e,t)}getString(e,t){return dt(e,t)}toXlsxValue(e,t){return zr(e,t)}getComparableValue(e,t){return P(e,t)}serializeFilter(e,t){if(t==null)return;const r=D(t.min),o=D(t.max);if(!(r==null&&o==null))return mt(r)+"~"+mt(o)}deserializeFilter(e,t){if(typeof t!="string"||t==="")return null;const r=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(r)?{min:D(r[1]),max:D(r[2])}:null}renderCell(e,{item:t}){return c`<div class="omnitable-cell-date">
			${dt(e,t)}
		</div>`}renderEditCell(e,{item:t},r){return c`<cosmoz-input
			no-label-float
			type="date"
			@change=${i=>r(Nt(i.target.value))}
			.value=${wr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:r,limits:o,locale:i,disabledFiltering:l,headerAlign:a,align:s},{filter:u},d,m){return c`<cosmoz-omnitable-date-range-input
			.title=${e}
			?disabled=${l}
			.filter=${u}
			.values=${m}
			.min=${t}
			.max=${r}
			.limits=${o}
			.locale=${i}
			.align=${a??s}
			@filter-changed=${({detail:{value:g}})=>d(p=>({...p,filter:g}))}
			@header-focused-changed=${({detail:{value:g}})=>d(p=>({...p,headerFocused:g}))}
		></cosmoz-omnitable-date-range-input>`}computeSource(e,t){return re(e,t)}}customElements.define("cosmoz-omnitable-column-date",Sr);class Cr extends Ue(ne(T)){render(){const e=t=>{this.headerFocused=t.type==="focus"};return c`
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

			${I(this.disabled,()=>c`
					<cosmoz-omnitable-dropdown-input
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??""}
					></cosmoz-omnitable-dropdown-input>
				`,()=>c`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${te({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:c`
							<h3 style="margin: 0;">${this.title}</h3>
							<cosmoz-datetime-input
								date-label=${C("From date")}
								time-label=${C("From time")}
								min=${this._toInputString(this._limit.fromMin)}
								max=${this._toInputString(this._limit.fromMax)}
								step=${this.filterStep}
								.value=${this._filterInput?.min}
								@value-changed=${t=>this.set("_filterInput.min",t.detail.value)}
							></cosmoz-datetime-input>
							<cosmoz-datetime-input
								date-label=${C("To date")}
								time-label=${C("To time")}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
								step=${this.filterStep}
								.value=${this._filterInput?.max}
								@value-changed=${t=>this.set("_filterInput.max",t.detail.value)}
							></cosmoz-datetime-input>
						`})}
				`)}
		`}_toInputString(e){const t=this.toValue(e);if(t!=null)return this._toLocalISOString(t).slice(0,19)}_computeFormatter(e){const t={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return new Intl.DateTimeFormat(e||void 0,t)}}customElements.define("cosmoz-omnitable-datetime-range-input",Cr);const ae={},kr=n=>{const e=n||"";if(ae[e])return ae[e];const t={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return ae[e]=new Intl.DateTimeFormat(n||void 0,t),ae[e]},Ve=({valuePath:n,locale:e},t)=>{const r=D(k(t,n||""));return r===void 0?"":r===null?"Invalid Date":Qe(r,kr(e))},_r=({valuePath:n},e)=>n?k(e,n):"",pt=n=>{const e=D(n);return e==null?"":e.toISOString().slice(0,19).replace(/:/gu,".")},gt=n=>{if(!(n==null||n==="")&&typeof n=="string")return D(n.replace(/\./gu,":")+"Z")};class ht extends R(T){static get is(){return"cosmoz-omnitable-column-datetime"}static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"datetime-header-cell"},width:{type:String,value:"210px"},minWidth:{type:String,value:"128px"},flex:{type:String,value:"0"},filterStep:{type:Number,value:1}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const r=P({...e,valuePath:"min"},t),o=P({...e,valuePath:"max"},t);if(!(r==null&&o==null))return jt(e,t)}getString(e,t){return Ve(e,t)}toXlsxValue(e,t){return _r(e,t)}getComparableValue(e,t){return P(e,t)}serializeFilter(e,t){if(t==null)return;const r=D(t.min),o=D(t.max);if(!(r==null&&o==null))return pt(r)+"~"+pt(o)}deserializeFilter(e,t){if(typeof t!="string"||t==="")return null;const r=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(r)?{min:gt(r[1]),max:gt(r[2])}:null}renderCell(e,{item:t}){return Ve(e,t)}renderEditCell(e,{item:t},r){return c`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>r(Nt(i.target.value))}
			.value=${Ve(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:r,limits:o,locale:i,filterStep:l,disabledFiltering:a,headerAlign:s,align:u},{filter:d},m,g){return c`<cosmoz-omnitable-datetime-range-input
			.title=${e}
			?disabled=${a}
			.filter=${d}
			.values=${g}
			.min=${t}
			.max=${r}
			.limits=${o}
			.locale=${i}
			.filterStep=${l}
			.align=${s??u}
			@filter-changed=${({detail:{value:p}})=>m(f=>({...f,filter:p}))}
			@header-focused-changed=${({detail:{value:p}})=>m(f=>({...f,headerFocused:p}))}
		></cosmoz-omnitable-datetime-range-input>`}computeSource(e,t){return re(e,t)}}customElements.define(ht.is,ht);class Ir extends Oe(R(T)){renderCell({valuePath:e,textProperty:t},{item:r}){const o=We(r,e,t).map(i=>c`<li>${i}</li>`);return c`
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
		`}renderEditCell(){return"not implemented"}renderHeader(e,{filter:t,query:r},o,i){return c`<cosmoz-autocomplete-ui
			class="external-values-${e.externalValues}"
			?disabled=${e.disabledFiltering}
			.label=${e.title}
			.source=${i}
			.textProperty=${e.textProperty}
			.value=${t}
			.text=${r}
			.onChange=${_e(o)}
			@opened-changed=${l=>Ie(o)(l.detail.value)}
			.onText=${Fe(o)}
			>${I(e.loading,()=>c`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		> `}}customElements.define("cosmoz-omnitable-column-list-horizontal",Ir);const Fr=q`
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
`,Or=({items:n})=>{const[e,t]=N(!1),r=Array.isArray(n)?n:[],o=O(()=>Math.max(0,r.length-1),[r]);if(r.length===0)return null;const i=r.length>2,l=r[0],a=i&&!e?[]:r.slice(1),s=u=>{u.stopPropagation(),u.preventDefault(),t(d=>!d)};return c`
		<ul>
			<li>
				<span>${l}</span>
			</li>
			<li class="see-more" ?hidden=${!i||e}>
				<a href="#" @click=${s}
					>${C("and {0} more",{0:o})}</a
				>
			</li>
			${a.map(u=>c`
					<li>
						<span class="item">${u}</span>
					</li>
				`)}
			<li class="see-less" ?hidden=${!i||!e}>
				<a href="#" @click=${s}>${C("See less")}</a>
			</li>
		</ul>
	`};customElements.define("cosmoz-omnitable-column-list-data",V(Or,{styleSheets:[Ce(Fr)]}));class Ar extends Oe(R(T)){static get properties(){return{keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,textual:e.textual}}renderCell({valuePath:e,textProperty:t},{item:r}){return c`<cosmoz-omnitable-column-list-data
			.items=${We(r,e,t)}
		></cosmoz-omnitable-column-list-data>`}renderEditCell(e,{item:t},r){const o=i=>r(i.target.value.split(/,\s*/gu));return c`<cosmoz-input
			no-label-float
			type="text"
			.value=${qe(e,t)}
			@change=${o}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:r},o,i){return c`<cosmoz-autocomplete-ui
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
			.onChange=${_e(o)}
			@opened-changed=${l=>Ie(o)(l.detail.value)}
			.onText=${Fe(o)}
			>${I(e.loading,()=>c`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}}customElements.define("cosmoz-omnitable-column-list",Ar);class Dr extends Ge(ne(T)){static get properties(){return{maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},formatter:{type:Object,computed:"_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)"},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:"_computeFilterText(filter.*, formatter)"},headerFocused:{type:Boolean,value:!1}}}render(){const e=t=>{this.headerFocused=t.type==="focus",this._onDropdownOpenedChanged(t)};return c`
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

			${I(this.disabled,()=>c`
					<cosmoz-omnitable-dropdown-input
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??""}
					></cosmoz-omnitable-dropdown-input>
				`,()=>c`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${te({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:c`
							<h3>${this.title}</h3>
							<cosmoz-input
								class=${this._fromClasses}
								type="number"
								label=${C("From")}
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
								label=${C("To")}
								.value=${this._filterInput?.max}
								@value-changed=${t=>{this.set("_filterInput.max",t.detail.value)}}
								@blur=${t=>this._onBlur(t)}
								@keydown=${t=>this._onKeyDown(t)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
							></cosmoz-input>
						`})}
				`)}
		`}_computeFormatter(e,t,r){const o={localeMatcher:"best fit"};return t!==null&&(o.minimumFractionDigits=t),r!==null&&(o.maximumFractionDigits=r),new Intl.NumberFormat(e||void 0,o)}getComparableValue(e,t){if(e==null)return;let r=e;if(t!=null&&(r=this.get(t,e)),r=this.toValue(r),r==null)return;const o=this.maximumFractionDigits;return o!==null?this.toValue(r.toFixed(o)):r}renderValue(e,t=this.formatter){const r=this.toNumber(e);if(r!=null)return t.format(r)}}customElements.define("cosmoz-omnitable-number-range-input",Dr);class Vr extends R(T){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},cellClass:{type:String,value:"number-cell"},width:{type:String,value:"30px"},minWidth:{type:String,value:"30px"},headerCellClass:{type:String,value:"number-header-cell"},maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},align:{type:String,value:"right"}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const r=K({...e,valuePath:"min"},t),o=K({...e,valuePath:"max"},t);if(!(r==null&&o==null))return Nn(e,t)}getString(e,t){return it(e,t)}toXlsxValue({valuePath:e},t){return k(t,e)}getComparableValue(e,t){return K(e,t)}serializeFilter(e,t){if(t==null)return;const r=L(t.min),o=L(t.max);if(!(r==null&&o==null))return ot(r)+"~"+ot(o)}deserializeFilter(e,t){if(typeof t!="string"||t==="")return null;const r=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(r)?{min:L(r[1]),max:L(r[2])}:null}renderCell(e,{item:t}){return c`<div class="omnitable-cell-number">
			${it(e,t)}
		</div>`}renderEditCell(e,{item:t},r){return c`<cosmoz-input
			no-label-float
			type="number"
			@change=${i=>r(i.target.value)}
			.value=${Mn(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:r,limits:o,locale:i,maximumFractionDigits:l,minimumFractionDigits:a,autoupdate:s,disabledFiltering:u,headerAlign:d,align:m},{filter:g},p,f){return c`<cosmoz-omnitable-number-range-input
			.title=${e}
			?disabled=${u}
			.filter=${g}
			.values=${f}
			.min=${t}
			.max=${r}
			.limits=${o}
			.locale=${i}
			.maximumFractionDigits=${l}
			.minimumFractionDigits=${a}
			.autoupdate=${s}
			.align=${d??m}
			@filter-changed=${({detail:{value:v}})=>p(x=>({...x,filter:v}))}
			@header-focused-changed=${({detail:{value:v}})=>p(x=>({...x,headerFocused:v}))}
		></cosmoz-omnitable-number-range-input>`}computeSource(e,t){return re(e,t)}}customElements.define("cosmoz-omnitable-column-number",Vr);class Tr extends Ue(ne(T)){render(){const e=t=>{this.headerFocused=t.type==="focus"};return c`
			${I(this.disabled,()=>c`
					<cosmoz-omnitable-dropdown-input
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??""}
					></cosmoz-omnitable-dropdown-input>
				`,()=>c`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${te({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:c`
							<h3 style="margin: 0;">${this.title}</h3>
							<cosmoz-input
								type="time"
								label=${C("From time")}
								step=${this.filterStep}
								.value=${this._filterInput.min}
								@value-changed=${t=>this.set("_filterInput.min",t.detail.value)}
							></cosmoz-input>
							<cosmoz-input
								type="time"
								label=${C("Until time")}
								step=${this.filterStep}
								.value=${this._filterInput.max}
								@value-changed=${t=>this.set("_filterInput.max",t.detail.value)}
							></cosmoz-input>
						`})}
				`)}
		`}get _fixedDate(){return"1970-01-01"}toDate(e,t,r){const o=typeof e=="string"&&e.length>3&&e.length<=9?this.getAbsoluteISOString(this._fixedDate+"T"+e):e;return super.toDate(o,t,r)}_toInputString(e){const t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(11,19)}getComparableValue(e,t){if(e==null)return;let r=this._toInputString(t==null?e:this.get(t,e));if(r!=null&&(r=this.toValue(this.getAbsoluteISOString(this._fixedDate+"T"+r)),r!=null))return this.toNumber(r.getTime())}_timeValueChanged(e){const t=e.target,r=t.value,o=e.model.item,i=this.toDate(o.date),l=this.toDate(i!=null?i.toISOString().slice(0,10)+"T"+r:r),a=s=>s;l==null&&(this.set(this.valuePath,l,o),this._fireItemChangeEvent(o,this.valuePath,i,a.bind(this)))}_computeFormatter(e){const t={hour:"numeric",minute:"numeric",second:"numeric"};return new Intl.DateTimeFormat(e||void 0,t)}}customElements.define("cosmoz-omnitable-time-range-input",Tr);const Pt="1970-01-01",H=(n,e,t)=>{const r=typeof n=="string"&&n.length>3&&n.length<=9?Ke(Pt+"T"+n):n;return D(r)},se={},Er=n=>{const e=n||"";if(se[e])return se[e];const t={hour:"numeric",minute:"numeric",second:"numeric"};return se[e]=new Intl.DateTimeFormat(n||void 0,t),se[e]},be=({valuePath:n,locale:e},t)=>{const r=H(k(t,n||""));return r===void 0?"":r===null?"Invalid Date":Qe(r,Er(e))},Lr=(n,e)=>n.valuePath?be(n,e):"",Mr=n=>{const e=H(n);if(e==null)return null;const t=Se(e);return t&&t.slice(11,19)},J=({valuePath:n},e)=>{if(e==null)return;const t=Mr(n==null?e:k(e,n));if(t==null)return;const r=H(Ke(Pt+"T"+t));return r==null?r:L(r.getTime())},Rr=(n,e)=>t=>{const r=J(n,t);if(r==null)return!1;const o=J({...n,valuePath:"min"},e),i=J({...n,valuePath:"max"},e);return o==null||i==null?!1:!(r<o||r>i)},ft=n=>{const e=H(n);return e==null?"":e.toISOString().slice(11,19).replace(/:/gu,".")},bt=n=>{if(!(n==null||n===""))return H(typeof n=="string"?n.replace(/\./gu,":")+"Z":n)};class Nr extends R(T){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"time-header-cell"},minWidth:{type:String,value:"63px"},width:{type:String,value:"210px"},flex:{type:String,value:"0"},filterStep:{type:String,value:"1"}}}getFilterFn(e,t){const r=J({...e,valuePath:"min"},t),o=J({...e,valuePath:"max"},t);if(!(r==null&&o==null))return Rr(e,t)}getString(e,t){return be(e,t)}toXlsxValue(e,t){return Lr(e,t)}getComparableValue(e,t){return J(e,t)}serializeFilter(e,t){if(t==null)return;const r=H(t.min),o=H(t.max);if(!(r==null&&o==null))return ft(r)+"~"+ft(o)}deserializeFilter(e,t){if(typeof t!="string"||t==="")return null;const r=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(r)?{min:bt(r[1]),max:bt(r[2])}:null}renderCell(e,{item:t}){return be(e,t)}renderEditCell(e,{item:t},r){return c`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>r(i.target.value)}
			.value=${be(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:r,locale:o,filterStep:i,disabledFiltering:l,headerAlign:a,align:s},{filter:u},d,m){return c`<cosmoz-omnitable-time-range-input
			.title=${e}
			?disabled=${l}
			.filter=${u}
			.values=${m}
			.min=${t}
			.max=${r}
			.locale=${o}
			.filterStep=${i}
			.align=${a??s}
			@filter-changed=${({detail:{value:g}})=>d(p=>({...p,filter:g}))}
			@header-focused-changed=${({detail:{value:g}})=>d(p=>({...p,headerFocused:g}))}
		></cosmoz-omnitable-time-range-input>`}computeSource(e,t){return re(e,t)}}customElements.define("cosmoz-omnitable-column-time",Nr);const jr=({column:n,item:e,selected:t,folded:r,group:o})=>{if(!n)return Re;const i=n.renderGroup??n.renderCell;return i?i(n,{item:e,selected:t,folded:r,group:o}):Re};customElements.define("cosmoz-omnitable-group-row",V(jr,{useShadowDOM:!1}));const Pr=n=>{const{column:e}=n;return E(()=>{let t=0,r=0;const o=a=>{n.dispatchEvent(new CustomEvent("column-resize",{bubbles:!0,composed:!0,detail:{newWidth:Math.ceil(r+a.pageX-t),column:e}}))},i=()=>{document.removeEventListener("pointermove",o),document.removeEventListener("pointerup",i)},l=a=>{t=a.pageX,r=n.previousElementSibling.getBoundingClientRect().width,document.addEventListener("pointermove",o),document.addEventListener("pointerup",i)};return n.addEventListener("pointerdown",l),()=>n.removeEventListener("pointerdown",l)},[e]),Re};customElements.define("cosmoz-omnitable-resize-nub",V(Pr));const Br=c`<svg
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
</svg>`,Hr=c`
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
`,Te=c` <svg
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
</svg>`,Gr=c`<svg
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
</svg> `,Bt=({column:n,on:e,descending:t,setOn:r,setDescending:o})=>{const{name:i,title:l}=n??{};return c`<button
		class="sg"
		title=${xe(l)}
		data-on=${xe(i===e&&(t?"desc":"asc")||void 0)}
		@click=${a=>{const u=a.currentTarget?.dataset.on;u||(r(i),o(!1)),u==="asc"?o(!0):u==="desc"&&(r(),o(!1))}}
	>
		<span>${l}</span> ${Gr}
	</button>`},Ht=({columns:n,...e})=>n?.map(t=>Bt({column:t,...e})),Wr=()=>c`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:n,groupOn:e,setGroupOn:t,groupOnDescending:r,setGroupOnDescending:o}={})=>Ht({columns:n?.filter?.(i=>i.groupOn),on:e,setOn:t,descending:r,setDescending:o})}
	>
	</sort-and-group-consumer>
`,qr=()=>c`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:n,sortOn:e,setSortOn:t,descending:r,setDescending:o}={})=>Ht({columns:n?.filter?.(i=>i.sortOn&&!i.noSort),on:e,setOn:t,descending:r,setDescending:o})}
	>
	</sort-and-group-consumer>
`,Gt=n=>(e,t,r=_t)=>{const o=un(),i=new URLSearchParams(o.hash.replace("#",""));return n(e,t,r,i),"#!"+Object.assign(o,{hash:i}).href.replace(location.origin,"")},Wt=n=>n==null||n==="",Xr=Gt((n,e,t,r)=>Wt(t(e))?r.delete(n):r.set(n,t(e))),Ur=Gt((n,e,t,r)=>{const o=Object.entries(e),i=o.map(t).filter(([,a])=>a!==void 0);if(i.length===0&&o.length>0)return;const l=n;Array.from(r.keys()).filter(a=>a.startsWith(l)).forEach(a=>r.delete(a)),i.forEach(([a,s])=>Wt(s)?r.delete(n+a):r.set(n+a,s))});function Z(n,e,{suffix:t="",read:r,write:o,ready:i=!0,multi:l}={}){const a=l?Ur:Xr,s=ke({param:e,suffix:t,link:a,write:o??_t}),u=O(()=>{if(e==null)return!1;if(l){const p=tt(e+t);return Object.keys(p).length>0}return nt(e+t)!==void 0},[]),[d,m]=N(()=>{if(e==null)return n;if(l){const f=tt(e+t,r);return Object.keys(f).length>0?f:n}return nt(e+t,r)??n}),g=S(p=>m(f=>{const v=ze(p,f);return s.param!=null&&sn(s.link(s.param+s.suffix,v,s.write),null,{notify:!1}),v}),[]);return E(()=>{s.param==null||!i||u||n!=null&&g(n)},[i]),[d,g]}const Kr=n=>[!0,"true",1,"yes","on"].includes(n),ue=n=>n===""||(n==null?void 0:Kr(n)),ce=(n,e,t)=>S(r=>{n(r),t(o=>({...o,[e]:r}))},[n,e,t]),Qr=(n,e,{settings:t,setSettings:r,resetRef:o,ready:i=!0})=>{const[l,a]=Z(t.sortOn,e,{suffix:"-sortOn",ready:i}),[s,u]=Z(ue(t.descending),e,{suffix:"-descending",read:ue,ready:i}),[d,m]=Z(t.groupOn,e,{suffix:"-groupOn",ready:i}),[g,p]=Z(ue(t.groupOnDescending),e,{suffix:"-groupOnDescending",read:ue,ready:i}),f=O(()=>n.find(w=>w.name===l),[n,l]),v=O(()=>n.find(w=>w.name===d),[n,d]),x={groupOn:d,setGroupOn:ce(m,"groupOn",r),groupOnDescending:g,setGroupOnDescending:ce(p,"groupOnDescending",r),sortOn:l,setSortOn:ce(a,"sortOn",r),descending:s,setDescending:ce(u,"descending",r),columns:n},b=O(()=>x,Object.values(x)),$=S(w=>{a(w.sortOn),m(w.groupOn),u(w.descending),p(w.groupOnDescending)},[]);return E(()=>{o.current=$},[]),{...b,sortAndGroup:b,groupOnColumn:v,sortOnColumn:f}},Je=It();customElements.define("sort-and-group-provider",Je.Provider);customElements.define("sort-and-group-consumer",V(({render:n})=>n(Be(Je)),{useShadowDOM:!1}));const Jr=({data:n,columns:e,groupOnColumn:t,filters:r,setFilterState:o,sortAndGroup:{sortOn:i,setSortOn:l,descending:a,setDescending:s}={}})=>Ft(e,u=>u.name,u=>[c`<div
				class="cell ${u.headerCellClass} header-cell"
				align="${u.headerAlign??u.align??"left"}"
				part="cell header-cell cell-${u.name} header-cell-${u.name}"
				?hidden="${u===t}"
				title="${u.headerTitleFn(u)}"
				name="${u.name}"
			>
				${u.renderHeader(u,r[u.name]??{},d=>o(u.name,d),u.source(u,n))}
				${I(!u.noSort,()=>Bt({on:i,setOn:l,descending:a,setDescending:s,column:u}))}
			</div>`,c`<cosmoz-omnitable-resize-nub
				.column="${u}"
				name="${u.name}"
			></cosmoz-omnitable-resize-nub>`]),Yr=({columns:n,settingsConfig:e,hideSelectAll:t,...r})=>{const o=Be(Je);return c`
		${I(n,i=>Jr({columns:i,sortAndGroup:o,...r}))}
		${I(!t,()=>c` <cosmoz-omnitable-settings
					.config=${e}
					part="settings"
				></cosmoz-omnitable-settings>`)}
	`};customElements.define("cosmoz-omnitable-header-row",V(Yr,{useShadowDOM:!1}));const Zr=q`
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
`,eo=({column:n})=>c`
	<div class="label" title="${n.title}" part="item-expand-label">
		${n.title}
	</div>
	<div class="value" part="item-expand-value">
		<slot></slot>
	</div>
`;customElements.define("cosmoz-omnitable-item-expand-line",V(eo,{styleSheets:[Ce(Zr)]}));const to=({columns:n,item:e,selected:t,expanded:r,groupOnColumn:o})=>cn(n,i=>c`<cosmoz-omnitable-item-expand-line
				.column=${i}
				?hidden=${i===o}
				exportparts="item-expand-label, item-expand-value"
				>${i.renderCell(i,{item:e,selected:t,expanded:r})}</cosmoz-omnitable-item-expand-line
			>`);customElements.define("cosmoz-omnitable-item-expand",V(to,{useShadowDOM:!1}));const no=(n,e,t)=>n.editable?n.renderEditCell(n,e,t(n,e.item)):n.renderCell(n,e),ro=({columns:n,groupOnColumn:e,item:t,index:r,selected:o,expanded:i,onItemChange:l})=>Ft(n,a=>a.name,a=>c`<div
				class="cell itemRow-cell ${a.cellClass??""}"
				align="${a.align??"left"}"
				part="cell itemRow-cell cell-${a.name} itemRow-cell-${a.name}"
				?hidden="${a===e}"
				?editable="${a.editable}"
				title="${a.cellTitleFn(a,t)}"
				name="${a.name}"
			>
				${no(a,{item:t,index:r,selected:o,expanded:i},l)}
			</div>`);customElements.define("cosmoz-omnitable-item-row",V(ro,{useShadowDOM:!1}));const qt=q`
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
`,oo=q`
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

	.header-cell cosmoz-input[disabled],
	.header-cell cosmoz-autocomplete-ui[disabled],
	.header-cell cosmoz-autocomplete-excluding[disabled] {
		pointer-events: none;
		cursor: default;
		--cosmoz-input-disabled-opacity: 1;
	}

	.header-cell cosmoz-input[disabled]::part(line),
	.header-cell cosmoz-autocomplete-ui[disabled]::part(input-line),
	.header-cell cosmoz-autocomplete-excluding[disabled]::part(input-line) {
		border-bottom-style: solid;
	}

	cosmoz-omnitable-dropdown-input[disabled],
	.header-cell cosmoz-omnitable-dropdown-input[disabled] {
		pointer-events: none;
		cursor: default;
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

	/* @deprecated use the column align property + .cell[align] rules instead.
	   Kept for backward compat with consumers using cellClass; remove in a future major version. */
	.align-left {
		text-align: left;
	}

	.align-right {
		text-align: right;
	}

	.cell[align='right'] {
		text-align: right;
	}

	.cell[align='left'] {
		text-align: left;
	}

	.cell[align='center'] {
		text-align: center;
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

	${qt}

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

	:host([inline]) {
		overflow: visible;
	}
	:host([inline]) .tableContent {
		overflow-y: visible;
		flex: none;
	}
	:host([inline]) .tableContent-scroller {
		overflow: visible;
		flex-basis: auto;
	}
`,xt=n=>{const e=n.replace(/"/gu,'""');return e.search(/("|,|\n)/gu)>=0?'"'+e+'"':n},io=(n,e,t)=>{const i=n.map(a=>xt(a.title)).join(";")+`
`,l=e.map(a=>n.map(s=>{const u=s.getString(s,a);return u==null?"":xt(String(u))}).join(";")+`
`);l.unshift(i),Ot(new File(l,t,{type:"text/csv;charset=utf-8"}))},lo=(n,e)=>{const t=n.map(o=>o.title),r=e.map(o=>n.map(i=>{const l=i.toXlsxValue(i,o);return l??""}));return r.unshift(t),r},ao=(n,e,t,r)=>{const o=lo(n,e),i=new dn(t).addSheetFromData(o,r).generate();Ot(new File([i],t,{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}))},ve=Symbol("index"),M=Symbol("All"),so=(n,e)=>{if(typeof n.findLastIndex=="function")return n.findLastIndex(e);for(let t=n.length-1;t>=0;t--)if(e(n[t],t,n))return t;return-1},uo=({columns:n,selectedItems:e,setSelectedItems:t,csvFilename:r,xlsxFilename:o,xlsxSheetname:i,topPlacement:l,enableSelectAll:a,allSelected:s,allItemsCount:u})=>{const d=e===M,m=d||e.length>0,g=e!==M&&a&&s,p=v=>c`<cosmoz-dropdown-menu
			part="extra"
			slot="extra"
			.placement=${l}
		>
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
				@click=${()=>io(n,v,r)}
			>
				${C("Save selected items as CSV")}
			</button>
			<button
				@click=${()=>ao(n,v,o,i)}
			>
				${C("Save selected items as XLSX")}
			</button>
			<slot name="download-menu"></slot>
		</cosmoz-dropdown-menu>`,f=I(d,()=>u!==void 0?C("All {count} items selected",{count:u}):C("All items selected"),()=>C("{count} selected item",{count:e===M?0:e.length}));return c`<cosmoz-bottom-bar
		id="bottomBar"
		?active=${m}
		part="bottomBar"
		exportparts="bar: bottomBar-bar, info: bottomBar-info, buttons: bottomBar-buttons"
	>
		<span slot="info">
			${f}
			${I(g,()=>c`&nbsp;<span
							part="select-all-items"
							class="selectAllItems"
							role="button"
							tabindex="0"
							style="cursor: pointer; color: white;"
							@click=${()=>t(M)}
						>
							${C("Select all items")}
						</span>`)}
		</span>
		<slot name="actions" id="actions"></slot>
		<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
		<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
		${I(e!==M,()=>p(e))}
	</cosmoz-bottom-bar>`},co=({allSelected:n,onAllCheckboxChange:e,sortAndGroup:t,dataIsValid:r,data:o,columns:i,filters:l,groupOnColumn:a,setFilterState:s,settingsConfig:u,hideSelectAll:d})=>c`<sort-and-group-provider .value=${t}>
		<div class="header" id="header" part="header">
			${I(!d,()=>c`<input
						class="checkbox all"
						type="checkbox"
						.checked=${n}
						@input=${e}
						?disabled=${!r}
						part="all"
					/>`)}
			${I(d,()=>c` <cosmoz-omnitable-settings
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
	</sort-and-group-provider>`,mo=wt`
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
`,po=({settingsConfig:n})=>{const{columns:e,collapsed:t}=n,r=e.filter(o=>!t.some(i=>i.name===o.name));return c`<div class="skeleton">
		${Array.from({length:5},()=>c`<div>
					<div class="checkbox"></div>
					${r.map(o=>c`<div
								class="cell"
								part=${`cell-${o.name}`}
								name=${o.name}
							></div>`)}
				</div>`)}
	</div>`};customElements.define("cosmoz-omnitable-skeleton",V(po,{styleSheets:[mo]}));const go=(n,e)=>{const{settingsConfig:t}=n,{processedItems:r,dataIsValid:o,filterIsTooStrict:i,loading:l,displayEmptyGroups:a,compareItemsFn:s,selectedItems:u,setSelectedItems:d,renderItem:m,renderGroup:g,error:p}=e;return c`${I(!l&&!o&&!p,()=>c`<div class="tableContent-empty">
					<slot name="empty-set-message">
						${rt({width:"96px",height:"96px",styles:"margin-right: 24px; fill: currentColor;"})}
						<div class="tableContent-empty-message">
							<h3>${C("Working set empty")}</h3>
							<p>${C("No data to display")}</p>
						</div>
					</slot>
				</div>`)}
		${I(i,()=>c`<div class="tableContent-empty">
					${rt({width:"96px",height:"96px",styles:"margin-right: 24px; fill: currentColor;"})}
					<div>
						<h3>${C("Filter too strict")}</h3>
						<p>${C("No matches for selection")}</p>
					</div>
				</div>`)}
		${I(l&&!r.length,()=>c`<div class="tableContent-empty overlay">
					<cosmoz-omnitable-skeleton
						.settingsConfig=${t}
					></cosmoz-omnitable-skeleton>
				</div>`)}
		${I(l&&r.length,()=>c`<div class="tableContent-empty overlay spinner">
					<cz-spinner></cz-spinner>
				</div>`)}
		${I(p,()=>c`<div class="tableContent-empty overlay">
					${mn({width:"96px",height:"96px",styles:"margin-right: 24px; fill: currentColor;"})}
					<div class="tableContent-empty-message">
						<h3>${C("Error loading data")}</h3>
						<p>${p.message}</p>
					</div>
				</div>`)}
		<div class="tableContent-scroller" id="scroller" part="scroller">
			<cosmoz-grouped-list
				id="groupedList"
				.data=${r}
				.selectedItems=${u}
				@selected-items-changed=${Ne(d)}
				.displayEmptyGroups=${a}
				.compareItemsFn=${s}
				.renderItem=${m}
				.renderGroup=${g}
			></cosmoz-grouped-list>
			<slot name="extraContent"></slot>
		</div>`},ho=q`
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
	${qt}
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
`,fo=q`
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
`,de=n=>{const e=parseInt(n??"",10);return isFinite(e)?e:void 0},bo=n=>{const{config:e}=n,{settings:t,setSettings:r,collapsed:o,requestTween:i}=e,l=ke({collapsed:o,settings:t.columns,requestTween:i,setSettings:S(a=>r(s=>({...s,columns:a})),[r])});return{...e,onDown:S(a=>{const s=a.target instanceof Element?a.target:null;!s||!s.closest(".pull")||(l.handle=a.currentTarget instanceof HTMLElement?a.currentTarget:null)},[l]),onDragStart:S(a=>{const s=a.target instanceof HTMLElement?a.target:null,u=de(s?.dataset.index);if(!s||!l.handle?.contains(s)||u==null)return a.preventDefault();l.handle=null,a.dataTransfer.effectAllowed="move",a.dataTransfer.setData("omnitable/sort-index",String(u)),a.dataTransfer.setData("text/plain",String(u)),setTimeout(()=>s.classList.add("drag"),0),s.addEventListener("dragend",d=>{(d.target instanceof HTMLElement?d.target:null)?.classList.remove("drag")},{once:!0})},[l]),onDragEnter:S(a=>{const s=a.currentTarget instanceof HTMLElement?a.currentTarget:null;!s||s!==a.target||(a.preventDefault(),a.dataTransfer.dropEffect="move",s.classList.add("dragover"))},[]),onDragOver:S(a=>{a.preventDefault(),a.currentTarget instanceof HTMLElement&&a.currentTarget.classList.add("dragover")},[]),onDragLeave:S(a=>{const s=a.currentTarget instanceof HTMLElement?a.currentTarget:null;s&&(a.relatedTarget instanceof Node&&s.contains(a.relatedTarget)||s.classList.remove("dragover"))},[]),onDrop:S(a=>{const s=de(a.dataTransfer?.getData("omnitable/sort-index")),u=a.currentTarget instanceof HTMLElement?a.currentTarget:null,d=de(u?.dataset.index),{settings:m,setSettings:g,requestTween:p}=l;u?.classList.remove("dragover"),a.preventDefault();const f=m.slice();f.splice(d+(s>=d?0:-1),0,f.splice(s,1)[0]),p?.(),g(f)},[l]),onToggle:S(a=>{const{settings:s,setSettings:u,requestTween:d}=l,m=s.map(f=>({...f,disabled:f.disabled||l.collapsed?.some(v=>v.name===f.name)})),g=a.target instanceof HTMLInputElement?a.target:null,p=de((a.target instanceof Element?a.target:null)?.closest("[data-index]")?.getAttribute("data-index"));p!=null&&(m.splice(p,1,{...s[p],disabled:!g?.checked,priority:g?.checked?s.reduce((f,v)=>Math.max(f,v.priority??0),0)+1:s[p]?.priority}),d?.(),u(m))},[l])}},xo=[gn({apply({availableHeight:n,elements:e}){Object.assign(e.floating.style,{maxHeight:`${Math.max(0,n)}px`})}}),...pn],vo=({onDragStart:n,onDragEnter:e,onDragOver:t,onDragLeave:r,onDrop:o,onDown:i,onToggle:l,collapsed:a,filters:s})=>(u,d)=>{const m=!!a?.find(p=>p.name===u.name),g=!u.disabled&&!m;return c` <div
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
			<button class="pull">${Hr}</button>
			<label class="title" ?has-filter=${!At(s[u.name]?.filter)}
				>${u.title}</label
			>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${g}
				@click=${l}
				.indeterminate=${m}
			/>
		</div>`},yo=n=>{const{settings:e,settingsId:t,onSave:r,onReset:o,hasChanges:i,opened:l,setOpened:a,...s}=bo(n);return c` <div class="headline">
			${C("Sort and filter")}
			<button
				class="close"
				@click=${u=>{const d=u.currentTarget instanceof HTMLElement?u.currentTarget:null;d?.focus(),d?.blur()}}
			>
				${Br}
			</button>
		</div>

		<div class="contents">
			<div
				class="heading"
				?data-opened=${l.columns}
				@click=${()=>a(u=>({...u,columns:!u.columns}))}
				part="columns columns-heading"
			>
				${C("Columns")} ${Te}
			</div>
			<cosmoz-collapse
				?opened="${l.columns}"
				part="columns columns-content"
			>
				<div class="list">${e.columns?.map(vo(s))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${l.sort}
				@click=${()=>a(u=>({...u,sort:!u.sort}))}
			>
				${C("Sort on")} ${Te}
			</div>
			<cosmoz-collapse ?opened=${l.sort}> ${qr()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${l.group}
				@click=${()=>a(u=>({...u,group:!u.group}))}
				part="groups groups-heading"
			>
				${C("Group on")} ${Te}
			</div>
			<cosmoz-collapse ?opened=${l.group} part="groups groups-heading"
				>${Wr()}</cosmoz-collapse
			>
		</div>

		${I(t,()=>c`<div class="buttons">
					<button
						class="button reset"
						@click=${o}
						?disabled=${!i}
					>
						${C("Reset")}
					</button>
					<button class="button" @click=${r} ?disabled=${!i}>
						${C("Save")}
					</button>
				</div>`)}`};customElements.define("cosmoz-omnitable-settings-ui",V(yo,{styleSheets:[Ce(ho)]}));const $o=({config:n,newLayout:e})=>c`
	<cosmoz-dropdown
		.placement="${e?"bottom-start":"bottom-end"}"
		.middleware="${xo}"
	>
		<div title="${C("Sort and filter")}" slot="button">
			${I(e,()=>c`<div class="headerDots">...</div>`,()=>c` <svg viewBox="0 0 24 24" width="24" fill="currentColor">
						<circle cx="10" cy="18" r="2"></circle>
						<circle cx="10" cy="12" r="2"></circle>
						<circle cx="10" cy="6" r="2"></circle>
					</svg>`)}
			${I(n?.badge,()=>c`<div class="badge"></div>`)}
		</div>
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${n}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`;customElements.define("cosmoz-omnitable-settings",V($o,{styleSheets:[Ce(fo)]}));const ye=["sortOn","descending","groupOn","groupOnDescending"],me=n=>e=>typeof e=="object"&&e!==null&&"name"in e&&e.name===n,wo=(n=[],e=[],t=[])=>{const r=e.filter(l=>n.some(me(l.name))),o=n.filter(l=>l.name!=null&&!e.some(me(l.name))&&!t.some(me(l.name))),i=t.filter(l=>!e.some(me(l.name)));return[...r,...i.flatMap(l=>{const a=n.find(s=>s.name===l.name);return a?{...l,title:a.title??l.title??"",minWidth:parseInt(a.minWidth??"0",10)}:[]}),...o.map(l=>{const{name:a,title:s,priority:u,minWidth:d,width:m,flex:g}=l;return{name:a??"",title:s??"",priority:u??0,minWidth:parseInt(d??"0",10),width:parseInt(m??"0",10),flex:parseInt(g??"0",10)}})]},zo=(n,e)=>({...e,...je(Array.from(ye))(n),columns:n.columns?.map(je(["name","priority","width","flex","disabled"]))}),So=({columns:n,settings:e,savedSettings:t,initial:r})=>({...Object.fromEntries(ye.flatMap(i=>r?.[i]!=null?[[i,r[i]]]:[])),...t?je(Array.from(ye))(t):{},...e,columns:wo(n,e?.columns,t?.columns)}),Co=({prefix:n="omnitable-"}={})=>({write:async(t,r)=>{const o=n+t;try{r?localStorage.setItem(o,JSON.stringify(r)):localStorage.removeItem(o)}catch(i){console.error(i)}},read:async t=>{if(!t)return null;try{const r=localStorage.getItem(n+t);return r==null?null:JSON.parse(r)}catch(r){return console.error(r),null}}}),ko=It(Co),_o=()=>{const n=Be(ko);return O(()=>n(),[n])},Io=(n,e,t,r)=>{const[o,i]=N(n?void 0:null),{read:l,write:a}=_o();return E(async()=>{n&&i(await l(n))},[n,l]),{settingsId:n,savedSettings:o,onSave:S(async()=>{if(!n)return;const s=zo(e,o);await a(n,s),t(),i(s)},[e,o]),onReset:S(async s=>{t(),s.shiftKey&&(await a(n),i(null)),r?.()},[r]),hasChanges:e!=null}},Fo=({settingsId:n,host:e})=>{const t=O(()=>Object.fromEntries(ye.map(x=>[x,e[x]])),[]),r=He(),o=S(()=>{r.current?.(t)},[t]),[i,l]=N(),[a,s]=N({columns:!0,sort:!0}),{savedSettings:u,...d}=Io(n,i,l,o),{enabledColumns:m,disabledFiltering:g}=e,p=Qn(e,{enabledColumns:m,disabledFiltering:g}),f=O(()=>So({columns:p,settings:i,savedSettings:u??void 0,initial:t}),[p,i,u]),v=O(()=>f.columns.map(x=>p.find(b=>b.name===x.name)).filter(x=>x!==void 0),[p,...f.columns.map(x=>x.name)]);return{...d,savedSettings:u,opened:a,setOpened:s,settings:f,columns:v,setSettings:l,resetRef:r}},vt=n=>Number.isFinite(n)?n:0,Oo=(n,e)=>{const t=[];let[r,o]=n.reduce(([d,m],{width:g,flex:p})=>[d+g,m+p],[0,0]),i=e-r,l=vt(i/o),a=0,s=0,u=0;for(let d=0;d<n.length;d++){const{width:m,minWidth:g,flex:p}=n[d],f=i>=0?l*p:m*i/r;if(g>m+f){a+=m,s+=g,u+=p,t[d]=g;continue}if(p===0){a+=m,s+=m,t[d]=m;continue}}r-=a,i=e-s-r,o-=u,l=vt(i/o);for(let d=0;d<n.length;d++){if(t[d]!=null)continue;const{width:m,flex:g}=n[d],p=i>=0?l*g:m*i/r;t[d]=m+p}return t},Ao=(n,e)=>{const t=so(n,l=>l!=null&&l>0),r=(l,a)=>`.cell[name="${l}"], cosmoz-omnitable-skeleton::part(cell-${l}){width: ${Math.floor(a)}px;padding: 0 min(3px, ${a/2}px)}`,o=l=>`cosmoz-omnitable-resize-nub[name="${l}"]{display:none}`,i=l=>`cosmoz-omnitable-resize-nub[name="${l}"], .cell[name="${l}"]{display:none}`;return e.map((l,a)=>{const s=n[a];if(s==null||s===0)return i(l.name);const u=r(l.name,s);return a===t?`${u}
${o(l.name)}`:u}).join(`
`)},Xt=(n,e,t)=>{const r=n.filter(a=>!a.hidden),o=r.reduce((a,{width:s})=>a+s,0);if(r.length>1&&o>e)return Xt(r.slice(1),e,t);const i=r.reduce(([a,s],u,d)=>[Math.max(a,u.index),u.index>a?d:s],[-1,-1])[1];return i!==-1&&(r[i].flex=1),Oo(r,e).reduce((a,s,u)=>(a[r[u].index]=s,a),new Array(t).fill(void 0))},Do=(n,e)=>n.length===0?".cell {display: none;}":Ao(n,e),Vo=20,To=44,Eo=24,Ut=Vo+To+Eo,Lo=(n,e)=>E(()=>{const t=([o])=>{o.contentRect?.width!==0&&e(o.contentRect.width-Ut)},r=new ResizeObserver(t);return r.observe(n),()=>r.unobserve(n)},[]),Mo=n=>{const[e,t]=N(()=>n.getBoundingClientRect().width-Ut);return Lo(n,t),e},Ro=({canvasWidth:n,groupOnColumn:e,config:t,miniColumn:r})=>O(()=>{if(!Array.isArray(t)||n==null||n===0)return[];const o=t.map((i,l)=>({minWidth:i.minWidth,width:i.width,flex:i.flex,priority:i.priority,name:i.name,index:l,hidden:i.name===e?.name||i.disabled})).map(i=>r?{...i,hidden:r.name!==i.name}:i).sort(({index:i,priority:l},{index:a,priority:s})=>l===s?a-i:l-s);return Xt(o,n,o.length)},[n,e,t]),No=({host:n,canvasWidth:e,columns:t})=>{const r=n.miniBreakpoint??480,o=O(()=>e<=r,[e,r]),i=O(()=>o?t?.filter(u=>u.mini!=null).sort((u,d)=>(u.mini??0)-(d.mini??0)):[],[t,o]),[l,...a]=i??[],s=!!l;return E(()=>{n.toggleAttribute("mini",s)},[s]),{isMini:s&&o,miniColumn:l,miniColumns:a}},jo=({host:n,canvasWidth:e,layout:t,setSettings:r,requestTween:o})=>{const i=He();i.current=l=>{o(),r(a=>{const s=a.columns,{detail:{newWidth:u,column:d}}=l,m=s.findIndex(f=>f.name===d.name),g=[],p=s.reduce((f,v)=>Math.max(f,v.priority),-1/0);for(let f=0;f<t.length;f++)if(g[f]={...s[f]},f<m&&t[f]&&(g[f].width=t[f],g[f].flex=0,g[f].priority=p),f===m){const v=t.reduce((x,b,$)=>$<m&&b?x-b:x,e);g[f].width=Math.min(v,Math.max(u,s[f].minWidth)),g[f].flex=0,g[f].priority=p}return{...a,columns:g}})},E(()=>{const l=a=>i.current?.(a);return n.addEventListener("column-resize",l),()=>n.removeEventListener("column-resize",l)},[])},Po=(n,e)=>{const t=O(()=>{let r=!1,o;const i=()=>{if(!r)return;o=requestAnimationFrame(i),n()&&(r=!1)};return{start:()=>{r=!0,cancelAnimationFrame(o),o=requestAnimationFrame(i)},stop:()=>{r=!1,cancelAnimationFrame(o)}}},[]);E(()=>{t.start()},e),E(()=>()=>t.stop(),[])},Bo=(n=0,e=0)=>Math.abs(n-e)<.1,Ho=(n,e=1.9,t=hn,r)=>{const o=ke({target:n,speedFactor:e,onConverge:r}),i=S(()=>{if(!o.tween)return o.tween=o.target,t(o.tween),o.onConverge?.(),!0;if(o.target.every((l,a)=>o.tween[a]===l))return t(o.tween),o.onConverge?.(),!0;if(o.tween=o.target.map((l,a)=>Bo(o.tween[a],l)?l:(o.tween[a]??0)+((l??0)-(o.tween[a]??0))/o.speedFactor||0),t(o.tween),o.tween.every((l,a)=>l===o.target[a]))return o.onConverge?.(),!0},[]);Po(i,[n])},Go=n=>{const e=O(()=>new CSSStyleSheet,[]);return E(()=>{n.shadowRoot.adoptedStyleSheets=[...n.shadowRoot.adoptedStyleSheets,e]},[]),e},Wo=({host:n,columns:e,settings:t,setSettings:r,resizeSpeedFactor:o,sortAndGroupOptions:i})=>{const l=Mo(n),{isMini:a,miniColumn:s,miniColumns:u}=No({host:n,canvasWidth:l,columns:e}),{groupOnColumn:d}=i,m=Ro({canvasWidth:l,groupOnColumn:d,miniColumn:s,config:t.columns}),g=Go(n),p=O(()=>t.columns.reduce((w,h,y)=>m[y]!=null||h.name===d?.name||h.disabled?w:[...w,e.find(z=>z.name===h.name)],[]),[e,t,m]),[f,v]=N(1),x=S(()=>v(o??1.9),[o]),b=S(()=>v(1),[]),$=ke({columns:t.columns});return Ho(m,f,w=>{const h=Do(w,$.columns);g.replace(h)},b),jo({host:n,canvasWidth:l,layout:m,setSettings:w=>r(w(t)),requestTween:x}),{isMini:a,collapsedColumns:p,miniColumns:u,requestTween:x}},qo=({host:n,...e})=>{const{csvFilename:t="omnitable.csv",xlsxFilename:r="omnitable.xlsx",xlsxSheetname:o="Omnitable",topPlacement:i="top-end"}=n;return{csvFilename:t,xlsxFilename:r,xlsxSheetname:o,topPlacement:i,...e}},Xo=({host:n,selectedItems:e,data:t,dataIsValid:r,columns:o,sortAndGroupOptions:i,collapsedColumns:l,settings:a,filterFunctions:s,settingS:u,filters:d,setFilterState:m,hideSelectAll:g,requestTween:p,...f})=>{const v=e===M||!!t&&t.length>0&&Array.isArray(e)&&e.length===t.length,x=h=>{if(!(h.target instanceof HTMLInputElement))return;const y=n.shadowRoot.querySelector("#groupedList");h.target.checked?y.selectAll():y.deselectAll()},{groupOnColumn:b}=i,$=O(()=>[b,...l,...a.columns.filter(h=>h.disabled)].some(h=>!!h&&!!h.name&&Object.keys(s).includes(h.name)),[s,a,l]),w=O(()=>({...u,collapsed:l,badge:$,filters:d,requestTween:p}),[u,l,$,d,p]);return E(()=>{const h=n.shadowRoot.querySelector("#tableContent"),y=new ResizeObserver(z=>requestAnimationFrame(()=>{n.style.setProperty("--ot-height",z[0]?.contentRect.height+"px")}));return y.observe(h),()=>y.unobserve(h)},[]),{allSelected:v,onAllCheckboxChange:x,data:t,dataIsValid:r,columns:o,settingsConfig:w,filters:d,groupOnColumn:b,setFilterState:m,hideSelectAll:g,sortAndGroup:i.sortAndGroup,...f}},Kt=c`
	<svg
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
	>
		<g>
			<path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
		</g>
	</svg>
`,Uo=n=>n?"groupRow groupRow-folded":"groupRow",Ko=({item:n,index:e})=>t=>I(t?.length>0,()=>c`
				<div class="itemRow-minis" part="item-minis">
					${t.map(r=>c`<div
								class="itemRow-mini"
								part="item-mini item-mini-${r.name}"
							>
								${(r.renderMini??r.renderCell)(r,{item:n,index:e})}
							</div>`)}
				</div>
			`),Qo=({columns:n,collapsedColumns:e,miniColumns:t,onItemClick:r,onCheckboxChange:o,dataIsValid:i,groupOnColumn:l,onItemChange:a,rowPartFn:s})=>(u,d,{selected:m,expanded:g,toggleCollapse:p})=>c`
		<div
			?selected=${m}
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
					.checked=${m}
					.dataItem=${u}
					@input=${o}
					?disabled=${!i}
				/>
				<cosmoz-omnitable-item-row
					part="itemRow-inner"
					.columns=${n}
					.index=${d}
					.selected=${m}
					.expanded=${g}
					.item=${u}
					.groupOnColumn=${l}
					.onItemChange=${a}
				>
				</cosmoz-omnitable-item-row>
				<button
					class="expand"
					?hidden="${At(e.length)}"
					?aria-expanded="${g}"
					@click="${p}"
				>
					${Kt}
				</button>
			</div>
			${Ko({item:u,index:d})(t)}
		</div>
		<cosmoz-omnitable-item-expand
			.columns=${e}
			.item=${u}
			.index=${d}
			?selected=${m}
			?expanded=${g}
			.groupOnColumn=${l}
			part="item-expand"
		>
		</cosmoz-omnitable-item-expand>
	`,Jo=({onCheckboxChange:n,dataIsValid:e,groupOnColumn:t})=>(r,o,{selected:i,folded:l,toggleFold:a})=>c` <div
			class="${Uo(l)}"
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
				${Kt}
			</button>
		</div>`,Yo=({host:n,error:e,dataIsValid:t,processedItems:r,columns:o,collapsedColumns:i,miniColumns:l,sortAndGroupOptions:a,rowPartFn:s,...u})=>{const{loading:d=!1,displayEmptyGroups:m=!1,compareItemsFn:g}=n,p=He({shiftKey:!1,ctrlKey:!1}),f=S($=>{const w=$.target.dataItem,h=$.target.checked;p.current.shiftKey?n.shadowRoot.querySelector("#groupedList").toggleSelectTo(w,h):p.current.ctrlKey?($.target.checked=!0,n.shadowRoot.querySelector("#groupedList").selectOnly(w)):n.shadowRoot.querySelector("#groupedList").toggleSelect(w,h),$.preventDefault(),$.stopPropagation()},[]);E(()=>{const $=({shiftKey:w,ctrlKey:h})=>{p.current={shiftKey:w,ctrlKey:h}};return window.addEventListener("keydown",$),window.addEventListener("keyup",$),()=>{window.removeEventListener("keydown",$),window.removeEventListener("keyup",$)}},[]);const v=S($=>{const w=$.composedPath();w.slice(0,w.indexOf($.currentTarget)).find(y=>y.matches?.("a, .checkbox, .expand"))||n.dispatchEvent(new window.CustomEvent("omnitable-item-click",{bubbles:!0,composed:!0,detail:{item:$.currentTarget.dataItem,index:$.currentTarget.dataIndex}}))},[]),{groupOnColumn:x}=a,b=S(($,w)=>h=>Jn(n,$,w,h),[]);return{...u,processedItems:r,dataIsValid:t,filterIsTooStrict:t&&r.length<1,loading:d,compareItemsFn:g,displayEmptyGroups:m,error:e,renderItem:O(()=>Qo({columns:o,collapsedColumns:i,miniColumns:l,onItemClick:v,onCheckboxChange:f,dataIsValid:t,groupOnColumn:x,onItemChange:b,rowPartFn:s}),[o,i,v,f,t,x,b,s]),renderGroup:O(()=>Jo({onCheckboxChange:f,dataIsValid:t,groupOnColumn:x}),[f,t,x])}},Zo=(n,e)=>{if(n===e)return 0;if(n==null)return-1;if(e==null)return 1;const t=typeof n,r=typeof e;return t==="object"&&r==="object"?n.toString()<e.toString()?-1:1:t==="number"&&r==="number"?n-e:t==="string"&&r==="string"?n<e?-1:1:t==="boolean"&&r==="boolean"?n?-1:1:(console.warn("unsupported sort",t,n,r,e),0)},Ee=(n,e)=>(t,r)=>Zo(n(t),n(r))*(e?-1:1),ei=n=>n.replace(/([a-z0-9])([A-Z])/gu,"$1-$2").toLowerCase(),yt=(n,e)=>{!n||!e||Object.entries(e).forEach(([t,r])=>{n[j].__ownChange=!0,n[j][t]=r,n[j].__ownChange=!1,n[j].dispatchEvent(new CustomEvent(`${ei(t)}-changed`,{bubbles:!0,detail:{value:r}}))})},Le=(n,e)=>Object.assign(n,{[ve]:e}),pe=Symbol("unparsed"),ti=({data:n,columns:e,hashParam:t,sortAndGroupOptions:r,noLocalSort:o,noLocalFilter:i})=>{const{groupOnColumn:l,groupOnDescending:a,sortOnColumn:s,descending:u}=r,d=S(([h,y])=>{const z=e.find(({name:_})=>_===h);return z==null?[h,void 0]:[h,y.filter&&z.serializeFilter(z,y.filter)]},[e]),m=S(([h,y])=>{const z=e.find(({name:F})=>F===h);if(z==null)return[h,{[pe]:y}];const _={filter:z.deserializeFilter(z,y)};return yt(z,_),[h,_]},[e]),[g,p]=Z({},t,{multi:!0,suffix:"-filter--",write:d,read:m}),f=S((h,y)=>p(z=>{const _=ze(y,z[h]);return yt(e.find(F=>F.name===h),_),{...z,[h]:{...z[h],..._}}}),[e,p]),v=O(()=>Object.values(g).map(h=>h.filter),[g]),x=O(()=>Object.fromEntries(e.map(h=>[h.name,!h.noLocalFilter&&h.getFilterFn(h,g[h.name]?.filter)]).filter(([,h])=>!!h)),[e,...v]),b=O(()=>!Array.isArray(n)||n.length===0?[]:Object.entries(x).length===0||i?n.slice():n.filter(h=>Object.values(x).every(y=>y(h))),[n,x,i]),$=O(()=>{if(!o&&!l&&s!=null&&s.sortOn!=null)return b.slice().sort(Ee(h=>s.getComparableValue({...s,valuePath:s.sortOn},h),u));if(l!=null&&l.groupOn!=null){const h=b.reduce((y,z)=>{const _=l.getComparableValue({...l,valuePath:l.groupOn},z);if(_===void 0)return y;let F=y.find(X=>X.id===_);return F?(F.items.push(z),y):(F={id:_,name:_,items:[z]},[...y,F])},[]);return h.sort(Ee(y=>l.getComparableValue({...l,valuePath:l.groupOn},y.items[0]),a)),!s||o?h:h.filter(y=>Array.isArray(y.items)).map(y=>(y.items.sort(Ee(z=>s.getComparableValue({...s,valuePath:s.sortOn},z),u)),y))}return b},[b,l,a,s,u,o]),w=O(()=>{let h=0,y=0;const z=[];return $.forEach(_=>{if(Array.isArray(_.items)){Le(_,y++),_.items.forEach(F=>{Le(F,h++),z.push(F)});return}return Le(_,h++),z.push(_)},[]),z},[$]);return E(()=>{p(h=>Object.values(h).some(z=>z[pe]!=null)?Object.fromEntries(Object.entries(h).map(([z,_])=>_[pe]==null?[z,_]:m([z,_[pe]]))):h)},[m]),{processedItems:$,visibleData:w,filters:g,filterFunctions:x,setFilterState:f}},ni=n=>{const e=r=>{const o=n.data.indexOf(r);if(o<0)return null;const i=n.data.splice(o,1);if(n.data=n.data.slice(),Array.isArray(i)&&i.length>0)return i[0]},t=(r,o)=>{n.data.splice(r,1,o),n.data=n.data.slice()};return{removeItem:e,removeItems(r){const o=[];for(let i=r.length-1;i>=0;i-=1){const l=e(r[i]);l!=null&&o.push(l)}return o},replaceItemAtIndex:t,replaceItem(r,o){const i=n.data.indexOf(r);i>-1&&t(i,o)},selectItem(r){n.shadowRoot.querySelector("#groupedList").select(r)},selectAll(){n.shadowRoot.querySelector("#groupedList").selectAll()},deselectAll(){n.shadowRoot.querySelector("#groupedList").deselectAll()},deselectItem(r){n.shadowRoot.querySelector("#groupedList").deselect(r)},isItemSelected(r){return n.shadowRoot.querySelector("#groupedList").isItemSelected(r)}}},ri=({host:n,visibleData:e,filters:t,...r})=>{const{setFilterState:o}=r,i=O(()=>ni(n),[]),[l,a]=Dt("selectedItems",[]);Pe(r,Object.values(r)),Pe(i,Object.values(i)),E(()=>{const u=d=>{if(!(d instanceof CustomEvent))return;const m=d.detail;o(m.name,g=>({...typeof g=="object"&&g!==null?g:{},...m.state}))};return n.addEventListener("legacy-filter-changed",u),()=>n.removeEventListener("legacy-filter-changed",u)},[]),U("visibleData",e),U("sortedFilteredGroupedItems",r.sortedFilteredGroupedItems),U("sortOn",r.sortOn),U("descending",r.descending),U("isMini",r.isMini);const s=O(()=>Object.fromEntries(Object.entries(t).filter(([,{filter:u}])=>u!==void 0).map(([u,{filter:d}])=>[u,d])),[t]);return U("filters",s,Object.values(s)),{selectedItems:l,setSelectedItems:a}},oi=n=>{const{hashParam:e,settingsId:t,data:r,resizeSpeedFactor:o,noLocal:i,noLocalSort:l=i,noLocalFilter:a=i,error:s,rowPartFn:u}=n,d=Fo({settingsId:t,host:n}),{settings:m,setSettings:g,columns:p,resetRef:f,savedSettings:v}=d,x=v!==void 0,b=Qr(p,e,{settings:m,setSettings:g,resetRef:f,ready:x}),{processedItems:$,visibleData:w,filters:h,setFilterState:y,filterFunctions:z}=ti({data:r,columns:p,hashParam:e,sortAndGroupOptions:b,noLocalSort:l,noLocalFilter:a}),{isMini:_,collapsedColumns:F,miniColumns:X,requestTween:G}=Wo({host:n,columns:p,settings:m,setSettings:g,resizeSpeedFactor:o,sortAndGroupOptions:b}),Ye=r&&Array.isArray(r)&&r.length>0,{selectedItems:De,setSelectedItems:Ze}=ri({host:n,visibleData:w,sortedFilteredGroupedItems:$,columns:p,filters:h,setFilterState:y,isMini:_,...b}),et=Xo({host:n,selectedItems:De,sortAndGroupOptions:b,dataIsValid:Ye,data:r,columns:p,filters:h,collapsedColumns:F,settings:m,filterFunctions:z,settingS:d,setFilterState:y,hideSelectAll:n.hideSelectAll===!0,requestTween:G});return{header:et,list:Yo({host:n,error:s,dataIsValid:Ye,processedItems:$,selectedItems:De,setSelectedItems:Ze,columns:p,collapsedColumns:F,miniColumns:X,sortAndGroupOptions:b,rowPartFn:u}),footer:qo({host:n,selectedItems:De,allSelected:et.allSelected,setSelectedItems:Ze,columns:p,enableSelectAll:n.enableSelectAll,allItemsCount:n.allItemsCount})}};customElements.define("cosmoz-grouped-list-row",class extends HTMLElement{get item(){return this._item}set item(e){this._item=e,this._render()}get index(){return this._index}set index(e){this._index=e,this._render()}get renderFn(){return this._renderFn}set renderFn(e){this._renderFn=e,this._render()}_render(){this._item==null||this._index==null||this._renderFn==null||Me(this._renderFn(this._item,this._index),this)}});const ii={group:Symbol("group")},Ae=(n,e)=>(e.has(n)||e.set(n,{}),e.get(n)),li=(n,e)=>!!Ae(n,e).expanded,ai=(n,e)=>!!Ae(n,e).folded,$e=n=>n?n.items instanceof Array:!1,si=n=>{if(!Array.isArray(n)||n.length===0)return;const e=Array.isArray(n[0]?.items);if(!n.every(r=>Array.isArray(r.items)===e))throw new Error("Data must be homogeneous.")},ui=(n,e,t)=>Array.isArray(n)?(si(n),n.reduce((o,i)=>{const l=i;return l.items?l.items.length?Ae(i,t).folded?o.concat(i):o.concat(i,l.items.map(a=>Object.assign(a,{[ii.group]:i}))):e?o.concat(i):o:o.concat(i)},[])):void 0,ci=(n,...e)=>typeof n=="function"?n(...e):n,di=(n,e)=>n===e,mi=()=>{const[n,e]=N(()=>[new WeakMap]);return{setItemState:S((r,o)=>e(([i])=>{const l=Ae(r,i);return Object.assign(l,ci(o,l)),[i]}),[]),state:n[0],signal:n}},pi=()=>{const{setItemState:n,state:e,signal:t}=mi(),r=S((i,l)=>{$e(i)&&n(i,a=>({folded:l!==void 0?l:!a.folded}))},[]),o=S((i,l)=>{$e(i)||n(i,a=>({expanded:l!==void 0?!l:!a.expanded}))},[]);return{state:e,signal:t,toggleFold:r,toggleCollapse:o}},gi=({compareItemsFn:n,data:e,flatData:t})=>{const[r,o]=Dt("selectedItems",()=>[]),[i,l]=N(),a=S(b=>r===M||r.includes(b),[r]),s=S(b=>r===M||(b?.items?.every(a)??!1),[r,a]),u=S(b=>a(b)||s(b),[a,s]),d=S(b=>{const w=b.items??[b];o(h=>h===M?h:[...h,...w.filter(y=>!h.includes(y))]),l(b)},[]),m=S(b=>{const w=b.items??[b];o(h=>h===M?(t??[]).filter(y=>!$e(y)).filter(y=>!w.includes(y)):h.filter(y=>!w.includes(y))),l(b)},[t]),g=S(b=>{o(b.items?.slice()||[b]),l(b)},[]),p=S(()=>{o(e.flatMap(b=>b.items||b)),l(void 0)},[e]),f=S(()=>{o([]),l(void 0)},[]),v=S((b,$=!u(b))=>$?d(b):m(b),[u]),x=S((b,$)=>{if(!t)return;const w=i?t.findIndex(z=>n(z,i)):-1;if(w<0)return v(b,$);const[h,y]=[w,t.indexOf(b)].sort((z,_)=>z-_);t.slice(h,y+1).forEach((z,_,F)=>{_>0&&_<F.length-1&&$e(z)||v(z,$)}),l(b)},[t,n,v]);return E(()=>o(b=>b!==M&&b.length>0&&t?t.filter($=>b.find(w=>n($,w))):b),[t]),{selectedItems:r,isItemSelected:a,isGroupSelected:s,isSelected:u,select:d,deselect:m,selectOnly:g,selectAll:p,deselectAll:f,toggleSelect:v,toggleSelectTo:x}},hi={host:{position:"relative",display:"flex",flexDirection:"column"}},fi=n=>{const{data:e,renderItem:t,renderGroup:r,displayEmptyGroups:o,compareItemsFn:i=di}=n,{toggleFold:l,toggleCollapse:a,state:s,signal:u}=pi(),d=O(()=>ui(e,o,s),[e,o,u]),{selectedItems:m,isItemSelected:g,isGroupSelected:p,isSelected:f,select:v,deselect:x,selectOnly:b,selectAll:$,deselectAll:w,toggleSelect:h,toggleSelectTo:y}=gi({compareItemsFn:i,data:e,flatData:d}),z=S((F,X)=>Array.isArray(F.items)?r(F,X,{selected:p(F),folded:ai(F,s),toggleSelect:G=>h(F,typeof G=="boolean"?G:void 0),toggleFold:()=>l(F)}):t(F,X,{selected:g(F),expanded:li(F,s),toggleSelect:G=>h(F,typeof G=="boolean"?G:void 0),toggleCollapse:()=>a(F)}),[t,r,m,h,u]);St(()=>{Object.assign(n.style,hi.host)},[]);const _={toggleFold:l,toggleCollapse:a,isItemSelected:g,isGroupSelected:p,isSelected:f,select:v,deselect:x,selectOnly:b,selectAll:$,deselectAll:w,toggleSelect:h,toggleSelectTo:y};return Pe(_,Object.values(_)),{renderRow:z,flatData:d}},bi=({renderRow:n,flatData:e})=>fn({items:e,renderItem:(t,r)=>c`<cosmoz-grouped-list-row
				.item=${t}
				.index=${r}
				.renderFn=${n}
			></cosmoz-grouped-list-row>`}),xi=n=>bi(fi(n));customElements.define("cosmoz-grouped-list",V(xi,{useShadowDOM:!1}));const vi=n=>window.ShadyCSS?.ApplyShim?.transformCssText?.(n)||n,yi=n=>{const{header:e,list:t,footer:r}=oi(n);return c`
		<style>
			${bn([],()=>vi(oo))}
		</style>

		<div class="mainContainer">
			${co(e)}
			<div class="tableContent" id="tableContent">
				${go(e,t)}
			</div>
			${uo(r)}
		</div>

		<div id="columns">
			<slot id="columnsSlot"></slot>
		</div>
	`};customElements.define("cosmoz-omnitable",V(yi,{observedAttributes:["hash-param","sort-on","group-on","descending","group-on-descending","hide-select-all","settings-id","no-local","no-local-sort","no-local-filter","disabled-filtering","loading","mini-breakpoint","inline","enable-select-all"]}));const we=`
	<slot name="actions" slot="actions"></slot>
`;c(Object.assign([we],{raw:[we]}));zt(Object.assign([we],{raw:[we]}));const $t=(n,e,t)=>{let r=String(n),o=-1;const i=t,l=e-r.length;for(;++o<l;)r=i+r;return r},A=(n,e)=>Math.floor(Math.random()*(e-n+1))+n,$i=()=>"2015-"+$t(A(1,12),2,"0")+"-"+$t(A(1,28),2,"0"),wi=()=>{const n=A(0,20);return n===1?new Date(2015,3,2,14,26,10,299):n===2?new Date(2016,4,2,10,9,10,444):n===3?new Date(2016,4,2,10,9,10,443):n===4?new Date(2016,4,2,10,9,10,442):new Date(A(2014,2017),A(1,12),A(1,28),A(0,23),A(0,59),A(0,59),A(0,999))},Qt=(n,e,t)=>{const r=A(n,e),o=[],i=["Lorem ipsum dolor sit amet","Nunc tristique","Curabitur vestibulum","Cras laoreet","Himenaeos","maximus diam purus at mauris"],l=["SEK","USD","EUR","AUD"];let a=0;for(let s=0;s<r;s+=1){const u="Group "+s,d=s*2+1;for(let m=0;m<d;m+=1){const g=[],p=[],f=[],v=a%10;for(let x=0;x<v;x+=1)g.push("Item "+x),p.push({name:"Item "+x,value:"item-value-"+x}),f.push({value:"cat-"+x,label:"Category "+x});o.push({id:a,name:u+" item "+m,value:A(0,1e4),bool:A(0,100)>50,object:{value:A(0,1e4),label:"Random string "+A(1,t)},sub:{subProp:i[a%i.length]},randomString:"Random string "+A(1,t),randomString2:"Random string 2 "+A(1,t),randomString3:"Random string 3 "+A(1,t),randomString4:"Random string 4 "+A(1,t),date:wi(),dateJSON:$i(),amount:{amount:A(10,100),currency:l[a%l.length]},group:u,list:g,objectList:p,categories:a%7===0?null:f}),a+=1}}return o},Ii={title:"Components/ComsmozOmnitableFullDemo",component:"cosmoz-omnitable",tags:["autodocs"],args:{loading:!1,locale:"en",sortOn:"",groupOn:"",descending:!1,groupOnDescending:!1,hashParam:"",settingsId:"",selectedItems:[],disabledFiltering:!1,enableSelectAll:!1,allItemsCount:1e4},argTypes:{loading:{control:"boolean",description:"Show loading state",table:{defaultValue:{summary:"false"}}},locale:{control:"select",options:["en","fr","sv"],description:"Language locale",table:{defaultValue:{summary:"en"}}},selectedItems:{control:"object",description:"Show selected items"},allItemsCount:{control:"number",description:"Total number of items"},data:{control:"object",description:"Show specified items"},sortOn:{control:"text",description:'Column property name to sort on (e.g., "amount", "date", "id")'},groupOn:{control:"text",description:'Column property name to group on (e.g., "amount", "date", "id")'},descending:{control:"boolean",description:"Sort on descending"},groupOnDescending:{control:"boolean",description:"Group on descending"},hashParam:{control:"text",description:"Hash parameter for URL state management"},settingsId:{control:"text",description:"ID for storing table settings"},disabledFiltering:{control:"boolean",description:"Disable filter inputs in all column headers",table:{defaultValue:{summary:"false"}}}},render:n=>c`
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
                .allItemsCount=${n.allItemsCount}
                hash-param=${n.hashParam}
                sort-on=${n.sortOn}
                group-on=${n.groupOn}
                .descending=${n.descending}
                .group-on-descending=${n.groupOnDescending}
                settings-id=${n.settingsId}
                ?disabled-filtering=${n.disabledFiltering}
                ?enable-select-all=${n.enableSelectAll}
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
                    ${xn({styles:"vertical-align: middle; fill: currentColor;"})}
                    <span>Remove items</span>
                </paper-button>
            </cosmoz-omnitable>
        `,play:async()=>{console.log("Current hash:",window.location.hash)}},ge={args:{data:Qt(10,10,10)}},he={args:{data:Qt(2,2,10)}},fe={args:{data:[]}};ge.parameters={...ge.parameters,docs:{...ge.parameters?.docs,source:{originalSource:`{
  args: {
    data: generateTableDemoData(10, 10, 10)
  }
}`,...ge.parameters?.docs?.source}}};he.parameters={...he.parameters,docs:{...he.parameters?.docs,source:{originalSource:`{
  args: {
    data: generateTableDemoData(2, 2, 10)
  }
}`,...he.parameters?.docs?.source}}};fe.parameters={...fe.parameters,docs:{...fe.parameters?.docs,source:{originalSource:`{
  args: {
    data: []
  }
}`,...fe.parameters?.docs?.source}}};const Fi=["TableWithLargeData","TableWithSmallData","TableWithNoData"];export{ge as TableWithLargeData,fe as TableWithNoData,he as TableWithSmallData,Fi as __namedExportsOrder,Ii as default};
