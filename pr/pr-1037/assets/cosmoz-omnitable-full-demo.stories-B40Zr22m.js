import{e as d,w as Jt,D as Le,t as C,A as Re}from"./iframe-1zWPeDd9.js";import{A as xe,n as F,c as A,t as q,g as k,P as T,s as Yt,a as zt,r as Zt,e as en,D as tn,b as nn,d as on,i as we,h as St,m as rn,u as N,f as Ct,j as kt,k as ln,l as Y,p as B,o as Me,q as It,v as ze,w as an,x as Se,y as O,z as E,B as Ce,C as _t,E as nt,F as ot,G as S,H as sn,I as un,J as Ft,K as Be,L as Ot,M as cn,N as Dt,O as dn,Q as He,R as rt,S as mn,T as pn,U as gn,V as Ne,W as Ge,X as hn,Y as Vt,Z as je,_ as U,$ as fn,a0 as bn}from"./cosmoz-collapse-DigBs-oQ.js";import"./preload-helper-PPVm8Dsz.js";const xn=({slot:n,title:e,className:t,width:o="24",height:r="24",styles:i}={})=>d`
  <svg
    slot=${xe(n)}
    class=${`delete-icon ${t??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${o}
    height=${r}
    style=${xe(i)}
  >
    ${F(e,()=>Jt`<title>${e}</title>`)}
    <path
      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
    />
  </svg>
`,vn=()=>d`<style>
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
</style>`;customElements.define("cz-spinner",A(vn));const yn=q`
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
`,$n=()=>d`
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
`;customElements.define("cosmoz-clear-button",A($n));const W=({valuePath:n},e)=>k(e,n),wn=W,zn=W,Sn=({valuePath:n},e)=>t=>{const o=k(t,n);return o==null?!1:o.toString().toLowerCase().trim().includes(e.toLowerCase().trim())},Cn=(n,e)=>e===""||e==null?null:e,R=n=>class extends n{static get properties(){return{isOmnitableColumn:{type:Boolean,value:!0},title:{type:String},valuePath:{type:String,notify:!0},values:{type:Array,notify:!0},filter:{type:Object},noLocalFilter:{type:Boolean},disabled:{type:Boolean,value:!1,notify:!0},editable:{type:Boolean,notify:!0},loading:{type:Boolean,value:!1,notify:!0},externalValues:{type:Boolean,value:!1,notify:!0},name:{type:String},sortOn:{type:String},groupOn:{type:String},noSort:{type:Boolean,value:!1},disabledFiltering:{type:Boolean,value:!1},width:{type:String,value:"75px"},minWidth:{type:String,value:"40px"},flex:{type:String,value:"1"},cellClass:{type:String,value:"default-cell"},headerCellClass:{type:String,value:"default-header-cell"},priority:{type:Number,value:0},hidden:{type:Boolean,notify:!0},preferredDropdownHorizontalAlign:{type:String,value:"right"},renderHeader:{type:Function},renderCell:{type:Function},renderEditCell:{type:Function},renderGroup:{type:Function},mini:{type:Number,value:null},renderMini:{type:Function}}}static get observers(){return["notifyFilterChange(filter)"]}notifyFilterChange(e){this.__ownChange||this.dispatchEvent(new CustomEvent("legacy-filter-changed",{detail:{name:this.name,state:this.legacyFilterToState(e)},bubbles:!0}))}legacyFilterToState(e){return{filter:e}}getFilterFn(){}getString(e,t){return W(e,t)}toXlsxValue(e,t){return wn(e,t)}cellTitleFn(e,t){return this.getString(e,t)}headerTitleFn(e){return e.title}serializeFilter(e,t){return Cn(e,t)}deserializeFilter(e,t){if(t==null)return null;if(typeof t=="string")try{return window.decodeURIComponent(t)}catch{return null}return t}getComparableValue(e,t){return zn(e,t)}computeSource(e,t){return t}_propertiesChanged(e,t,o){super._propertiesChanged(e,t,o),this.dispatchEvent(new CustomEvent("cosmoz-column-prop-changed",{bubbles:!0}))}},kn=n=>e=>n(t=>{if(t.inputValue===void 0&&e.target.value==="")return t;clearTimeout(t.t);const o=setTimeout(()=>n(r=>({...r,filter:r.inputValue})),1e3);return{...t,inputValue:e.target.value,t:o}}),In=n=>()=>n(e=>({...e,filter:e.inputValue})),_n=n=>e=>{e.keyCode===13&&(e.preventDefault(),n(t=>({...t,filter:t.inputValue})))},Fn=n=>e=>n(t=>({...t,headerFocused:e.detail.value})),On=n=>()=>n(e=>({...e,filter:null,inputValue:null})),Dn=n=>n!=null&&n!=="";class Vn extends R(T){static get properties(){return{minWidth:{type:String,value:"55px"},editMinWidth:{type:String,value:"55px"},inputValue:{type:Object,notify:!0}}}getFilterFn(e,t){if(!(t==null||t===""))return Sn(e,t)}renderCell(e,{item:t}){return d`<span class="default-column">${W(e,t)}</span>`}renderEditCell(e,{item:t},o){return d`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>o(i.target.value)}
			.value=${W(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,inputValue:o,headerFocused:r},i){return d`<cosmoz-input
			label=${e.title}
			?disabled=${e.disabledFiltering}
			.value=${o??t}
			@value-changed=${kn(i)}
			focused=${r}
			@focused-changed=${Fn(i)}
			@keydown=${_n(i)}
			@blur=${In(i)}
		>
			${F(!e.disabledFiltering,()=>d`<cosmoz-clear-button
						suffix
						slot="suffix"
						?visible=${Dn(t)}
						light
						@click=${On(i)}
					></cosmoz-clear-button>`)}
		</cosmoz-input>`}legacyFilterToState(e){return{filter:e,inputValue:e}}}customElements.define("cosmoz-omnitable-column",Vn);const An=["label","value","slot","always-float-label","disabled"],Tn=zt`
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
`,En=n=>{const{label:e,value:t,slot:o}=n,r=d`<div
		id="input"
		part="input"
		role="button"
		class="control"
		slot=${o}
	>
		${t||""}
	</div>`;return Zt(r,{label:e})};customElements.define("cosmoz-omnitable-dropdown-input",A(En,{observedAttributes:An,styleSheets:[Tn]}));const te=({title:n,tooltip:e="",filterText:t="",onOpenedChanged:o,content:r,horizontalAlign:i="left",externalValues:l=null})=>{const a={filtered:!!t,...l!=null&&{[`external-values-${l}`]:!0}};return d`
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
			<div class="dropdown-content">${r}</div>
		</cosmoz-dropdown>
	`},At=n=>n?typeof n.close=="function"?n:At(n.parentElement):null,We=n=>class extends n{static get properties(){return{disabled:{type:Boolean,value:!1},filter:{type:Object,notify:!0},values:{type:Array,value(){return[]}},headerFocused:{type:Boolean,notify:!0},min:{type:Number,value:null},max:{type:Number,value:null},limits:{type:Function},autoupdate:{type:String,value:!0},locale:{type:String,value:null},_filterInput:{type:Object,value(){return{min:null,max:null}}},_range:{type:Object,computed:"_computeRange(values.*)"},_limit:{type:Object,computed:"_computeLimit(_range, _filterInput.*, min, max)",value(){return{}}},_tooltip:{type:String,computed:"_computeTooltip(title, _filterText)"},_fromClasses:{type:String,computed:"_computeInputClasses(_filterInput.min)"},_toClasses:{type:String,computed:"_computeInputClasses(_filterInput.max)"}}}static get observers(){return["_filterInputChanged(_filterInput.*, autoupdate)","_filterChanged(filter.*)","_updateLimits(limits, headerFocused)"]}disconnectedCallback(){this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),super.disconnectedCallback()}_computeInputClasses(e){return e!=null&&e!==""?"has-value":""}toNumber(e,t,o){if(e==null||e==="")return;const r=typeof e=="number"?e:Number(e);if(Number.isNaN(r))return;if(o==null||t==null)return r;const i=this.toNumber(t);return i==null?r:o(r,i)}toValue(){return this.toNumber.apply(this,arguments)}getComparableValue(e,t){if(e==null)return;let o=e;return t!=null&&(o=this.get(t,e)),this.toValue(o)}renderValue(){}getInputString(e,t=this.valuePath){const o=this.toValue(this.get(t,e));return this._toInputString(o)}_computeRange(e){const t=e.base,o=Array.isArray(t)&&t.length&&t.map(r=>this.toValue(r)).filter(r=>r!=null);return!o||o.length<1?{min:null,max:null}:o.reduce((r,i)=>({min:this.toValue(i,r.min,Math.min),max:this.toValue(i,r.max,Math.max)}),{})}_computeLimit(e,t,o,r){if(!e)return;const i=t.base,l=this.toValue(o),a=this.toValue(r),s=l??this.toValue(e.min),u=a??this.toValue(e.max);return{fromMin:s,fromMax:this.toValue(u,this._fromInputString(i.max,"max"),Math.min),toMin:this.toValue(s,this._fromInputString(i.min,"min"),Math.max),toMax:u}}_computeFilterText(e){if(e.base==null)return;const t=e.base,o=this.toValue(t.min),r=this.toValue(t.max),i=[];return o!=null&&i.push(this.renderValue(o)),i.push(" - "),r!=null&&i.push(this.renderValue(r)),i.length>1?i.join(""):void 0}_computeTooltip(e,t){return t==null?e:`${e}: ${t}`}_fromInputString(e){return this.toValue(e)}_toInputString(e){const t=this.toValue(e);return t??null}_getDefaultFilter(){return{min:null,max:null}}_filterInputChanged(e,t){const o=e.path.split(".")[1];this.__inputChangePath=o||null,t&&(this._limitInputDebouncer=tn.debounce(this._limitInputDebouncer,nn.after(600),()=>{this._limitInput(),this._updateFilter()}),on(this._limitInputDebouncer))}_clearFrom(){this.set("_filterInput.min",null),this._updateFilter()}_clearTo(){this.set("_filterInput.max",null),this._updateFilter()}_onBlur(){this._limitInput(),this._updateFilter()}_onKeyDown(e){const t=e.currentTarget,o=Array.from(t.parentElement.querySelectorAll("cosmoz-input")),r=o[o.findIndex(a=>a===t)+1],i=!r,l=o[0]===t;switch(e.keyCode){case 13:if(e.preventDefault(),!i)r.focus();else{const a=this._limitInput();this._updateFilter(),a||this._closeParent(t)}break;case 9:(i&&!e.shiftKey||l&&e.shiftKey)&&this._closeParent(t)}}_closeParent(e){const t=At(e);t&&t.close()}_onDropdownOpenedChanged({currentTarget:e,type:t,detail:o}){(t==="focus"||o?.value===!0)&&setTimeout(()=>{e.querySelector("cosmoz-input:focus")||e.querySelector("cosmoz-input")?.focus()},100)}_limitInput(){const e=this._filterInput,t=this.__inputChangePath,o=t?this._fromInputString(this.get(t,e),t):null;if(this.__inputChangePath=null,o==null)return!1;const r=this._limit,i=t==="min"?"from":"to",l=this.get(i+"Min",r),a=this.get(i+"Max",r),s=this.toValue(o,l,Math.max),u=this.toValue(s,a,Math.min);return this.getComparableValue(o)!==this.getComparableValue(u)?(this.set(["_filterInput",t],this._toInputString(u,t)),this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),!0):!1}_updateFilter(){const e=this._filterInput,t=this.filter,o=this._fromInputString(e.min,"min"),r=this._fromInputString(e.max,"max");this.getComparableValue(o)===this.getComparableValue(t,"min")&&this.getComparableValue(r)===this.getComparableValue(t,"max")||this.set("filter",{min:o,max:r})}_filterChanged(e){if(this._filterInput==null)return;const t=this._filterInput,o=e.base,r=this._fromInputString(t.min,"min"),i=this._fromInputString(t.max,"max");this.getComparableValue(r)===this.getComparableValue(o,"min")&&this.getComparableValue(i)===this.getComparableValue(o,"max")||(this.set("_filterInput",{min:this._toInputString(o.min),max:this._toInputString(o.max)}),this._limitInputDebouncer&&this._limitInputDebouncer.cancel())}hasFilter(){const e=this.filter;return e==null?!1:this.toValue(e.min)!=null||this.toValue(e.max)!=null}resetFilter(){this.filter=this._getDefaultFilter()}_updateLimits(e,t){e&&Promise.resolve(we(e,{active:t})).then(o=>{const{min:r,max:i}=o??{};Object.assign(this,{...r!=null?{min:r}:{},...i!=null?{max:i}:{}})})}},ne=n=>class extends n{static get template(){return St`<div id="output" style="position:relative;"></div>`}connectedCallback(){super.connectedCallback();const e=this;Le(e.render(),e.$.output)}_propertiesChanged(e,t,o){super._propertiesChanged(e,t,o);const r=this;requestAnimationFrame(()=>Le(r.render(),r.$.output))}};class Ln extends We(ne(T)){static get properties(){return{currency:{type:String},autodetect:{type:Boolean,value:!1},rates:{type:Object},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:"_computeFilterText(filter.*, _formatters)"},headerFocused:{type:Boolean,value:!1}}}static get observers(){return["_valuesChanged(autodetect, currency, values)"]}render(){const e=t=>{this.headerFocused=t.type==="focus",this._onDropdownOpenedChanged(t)};return d`
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
			${F(this.disabled,()=>d`
					<cosmoz-omnitable-dropdown-input
						disabled
						.label=${this.title}
						.value=${this._filterText??""}
					></cosmoz-omnitable-dropdown-input>
				`,()=>d`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${te({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:d`
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
		`}_valuesChanged(e,t,o){if(!Array.isArray(o)||o.length<1||!e&&t)return;const r=o.reduce((l,a)=>{if(a.currency){const s=a.currency;l[s]=(l[s]||0)+1}return l},{});let i=Object.keys(r)[0];Object.keys(r).reduce((l,a)=>{const s=Math.max(l,r[a]);return s===r[a]&&(i=a),s},0),this.set("currency",i)}toAmount(e,t,o){if(e==null||e==="")return;if(typeof e!="object"||e.currency==null||e.currency==="")return null;const r=this.toNumber(e.amount);if(r==null||Number.isNaN(r))return null;const i={currency:e.currency,amount:r};if(o==null||t==null)return i;const l=this.toAmount(t);if(l==null)return i;const a=this.rates||{},s=i.amount*(a[i.currency]||1),u=l.amount*(a[l.currency]||1);return this.toNumber(s,u,o)===s?i:l}toValue(){return this.toAmount.apply(this,arguments)}getComparableValue(e,t){const o=super.getComparableValue(e,t);if(o==null)return;const r=this.toNumber(o.amount),i=this.rates;return i==null?r:r*(i[o.currency]||1)}getString(e,t=this.valuePath){const o=this.toValue(this.get(t,e));return o===void 0?"":o===null?"Invalid value":this.renderValue(o)}getCurrency(e,t){const o=this.get(t,e);return o&&o.currency}getFormatter(e,t){const o=t||"",r=e+o||"",i=this._formatters=this._formatters||{};return i[r]||(i[r]=new Intl.NumberFormat(t||void 0,{style:"currency",currency:e})),i[r]}renderValue(e){const t=this.toAmount(e);return t==null?"":this.getFormatter(t.currency,this.locale).format(e.amount)}_amountValueChanged(e){const t=e.target,o=t.value,r=e.model.item,i=this.get(this.valuePath,r),l=Number(o),a={amount:l,currency:i.currency};this.set(this.valuePath,a,r),this._fireItemChangeEvent(r,this.valuePath,i,this.renderValue.bind(this))}_toInputString(e){const t=this.toValue(e);return t==null?null:this.toNumber(t.amount)}_toInputStringAmount(e){const t=this.rates;if(t==null)return this._toInputString(e);const o=this.toValue(e);return o==null?null:(this.toNumber(o.amount)*(t[o.currency]||1)/(t[this.currency]||1)).toFixed(2)}_fromInputString(e,t){const o=this.toNumber(e);if(o!=null)return this.toValue({amount:o,currency:t&&this.get(["filter",t,"currency"])||this.currency})}}customElements.define("cosmoz-omnitable-amount-range-input",Ln);const L=(n,e,t)=>{if(n==null||n==="")return;const o=typeof n=="number"?n:Number(n);if(!Number.isNaN(o))return o},Tt=n=>{const e=L(n);return e==null?null:e.toString()},Rn=({valuePath:n},e)=>{const t=L(n?k(e,n):e);return Tt(t)},it=n=>{const e=Tt(n);return e??""},K=({valuePath:n,maximumFractionDigits:e},t)=>{if(t==null)return;const o=n?k(t,n):t,r=L(o);if(r!=null)return e!==null?L(r.toFixed(e)):r},Mn=rn((n,e,t)=>{const o={localeMatcher:"best fit"};return e!==null&&(o.minimumFractionDigits=e),t!==null&&(o.maximumFractionDigits=t),new Intl.NumberFormat(n||void 0,o)}),lt=({valuePath:n,locale:e,minimumFractionDigits:t,maximumFractionDigits:o},r)=>{const i=n?k(r,n):r;if(i==null)return"";const l=L(i);return l==null?void 0:Mn(e,t,o).format(l)},Nn=(n,e)=>t=>{const o=K(n,t);if(o==null)return!1;const r=K({...n,valuePath:"min"},e),i=K({...n,valuePath:"max"},e);return!(o<(r??-1/0)||o>(i??1/0))},ee=(n={},e,t,o)=>{if(e==null||e==="")return;if(typeof e!="object"||e.currency==null||e.currency==="")return null;const r=L(e.amount);return r==null||Number.isNaN(r)?null:{currency:e.currency,amount:r}},Q=({valuePath:n,rates:e},t)=>{if(t==null)return;let o=t;n!=null&&(o=k(t,n));const r=ee(e,o);if(r==null)return;const i=L(r.amount);return e==null||i==null?i:i*(e?.[r.currency]||1)},jn=(n,e)=>t=>{const o=Q(n,t);if(o===void 0)return!1;const r=Q({...n,valuePath:"min"},e),i=Q({...n,valuePath:"max"},e);return r===void 0||i===void 0?!0:!(o<r||o>i)},re={},Pn=(n,e)=>{const o=n+(e||"")||"";return re[o]||(re[o]=new Intl.NumberFormat(e||void 0,{style:"currency",currency:n})),re[o]},Bn=(n,e,t)=>{const o=ee(n,e);return o==null?"":Pn(o.currency,t).format(o.amount)},at=({valuePath:n,rates:e,locale:t},o)=>{const r=ee(e,n?k(o,n):void 0);return r===void 0?"":r===null?"Invalid value":Bn(e,r,t)},st=n=>n?n.amount+n.currency:"",ut=n=>{if(n==null||n==="")return;const e=n.match(/^(-?[\d]+)([\D]+?)$/iu);if(!(!Array.isArray(e)||e.length<0))return{amount:Number(e[1]),currency:e[2]}},Hn=({valuePath:n},e)=>n?k(e,n)?.currency:null,Gn=({valuePath:n},e)=>n?k(e,n)?.amount:void 0,j=Symbol("column"),Wn=n=>{let e=!0;const t=n.map(o=>o.name);return n.forEach(o=>{o.name==null&&(e=!1,console.error("The name attribute needs to be set on all columns! Missing on column",o))}),n.forEach(o=>{t.indexOf(o.name)!==t.lastIndexOf(o.name)&&(e=!1,console.error("The name attribute needs to be unique among all columns! Not unique on column",o))}),e},qn=(n,e)=>{const t=n.valuePath??n.name;return{name:n.name,title:n.title,valuePath:t,groupOn:n.groupOn??t,sortOn:n.sortOn??t,noSort:n.noSort,disabledFiltering:e||n.disabledFiltering,minWidth:n.minWidth,width:n.width,flex:n.flex,priority:n.priority,getString:n.getString,getComparableValue:n.getComparableValue,serializeFilter:n.serializeFilter,deserializeFilter:n.deserializeFilter,toXlsxValue:n.toXlsxValue,renderHeader:n.renderHeader,renderCell:n.renderCell,renderEditCell:n.renderEditCell,renderGroup:n.renderGroup,cellTitleFn:n.cellTitleFn,headerTitleFn:n.headerTitleFn,getFilterFn:n.getFilterFn,headerCellClass:n.headerCellClass,cellClass:n.cellClass,editable:n.editable,values:n.values,source:kt(n.computeSource),noLocalFilter:n.noLocalFilter,mini:n.mini,renderMini:n.renderMini,loading:n.loading,externalValues:n.externalValues,computeSource:n.computeSource,trueLabel:n.trueLabel,falseLabel:n.falseLabel,valueProperty:n.valueProperty,textProperty:n.textProperty,emptyLabel:n.emptyLabel,emptyValue:n.emptyValue,min:n.min,max:n.max,locale:n.locale,autoupdate:n.autoupdate,maximumFractionDigits:n.maximumFractionDigits,minimumFractionDigits:n.minimumFractionDigits,currency:n.currency,rates:n.rates,autodetect:n.autodetect,ownerTree:n.ownerTree,keyProperty:n.keyProperty,...n.getConfig?.(n),[j]:n}},Xn=n=>n.isOmnitableColumn&&!n.hidden,Un=n=>{const e=n.filter(Xn);return Wn(e)?e:[]},Kn=(n,e,t)=>(Array.isArray(e)?n.filter(r=>e.includes(r.name)):n.filter(r=>!r.disabled)).map(r=>qn(r,t)),Qn=(n,{enabledColumns:e,disabledFiltering:t})=>{const[o,r]=N([]);return Ct(()=>{let i,l=[];const a=n.shadowRoot.querySelector("#columnsSlot"),s=m=>()=>{const c=a.assignedNodes({flatten:!0});if(m)l=c;else{const g=c.filter($=>!l.includes($)),p=l.filter($=>!c.includes($)),h=[...g,...p].some($=>$.isOmnitableColumn);if(l=c,!h)return}r(Kn(Un(c),e,t))},u=m=>{cancelAnimationFrame(i),i=requestAnimationFrame(s(m?.type==="cosmoz-column-prop-changed"))};return u(),a.addEventListener("slotchange",u),n.addEventListener("cosmoz-column-prop-changed",u),()=>{a.removeEventListener("slotchange",u),n.removeEventListener("cosmoz-column-prop-changed",u),cancelAnimationFrame(i)}},[e,t]),o},Et=(n,e)=>Array.isArray(n)?n.map(t=>k(t,e)).filter((t,o,r)=>t!=null&&r.indexOf(t)===o):void 0,oe=({externalValues:n,values:e,valuePath:t},o)=>{if(n)return n;if(typeof e=="function")return e;if(t!==void 0)return Et(o,t)},Jn=(n,e,t,o)=>{const{valuePath:r}=e,i=r!==void 0?k(t,r):void 0;if(o===i)return;r!==void 0&&ln(t,r,o);const l={item:t,valuePath:r,value:o,oldValue:i,column:e[j]};n.dispatchEvent(new CustomEvent("column-item-changed",{bubbles:!0,composed:!0,detail:l}))};class Yn extends R(T){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},currency:{type:String,notify:!0},autodetect:{type:Boolean,value:!1,notify:!0},rates:{type:Object,notify:!0},width:{type:String,value:"70px"},cellClass:{type:String,value:"amount-cell align-right"},headerCellClass:{type:String,value:"amount-header-cell"}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const o=Q({...e,valuePath:"min"},t),r=Q({...e,valuePath:"max"},t);if(!(o==null&&r==null))return jn(e,t)}getString(e,t){return at(e,t)}toXlsxValue(e,t){return at(e,t)}getComparableValue(e,t){return Q(e,t)}serializeFilter({rates:e},t){if(t==null)return;const o=ee(e,t.min),r=ee(e,t.max);if(!(o==null&&r==null))return st(o)+"~"+st(r)}deserializeFilter(e,t){if(typeof t!="string"||t==="")return null;const o=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(o)?{min:ut(o[1]),max:ut(o[2])}:null}renderCell(e,{item:t}){return d`<span>${e.getString(e,t)}</span>`}renderEditCell(e,{item:t},o){return d`<cosmoz-input
			no-label-float
			type="number"
			@change=${i=>o({amount:i.target.value,currency:k(t,e.valuePath)?.currency})}
			.value=${Gn(e,t)}
		>
			<div slot="suffix">${Hn(e,t)}</div>
		</cosmoz-input>`}renderHeader({title:e,min:t,max:o,limits:r,locale:i,rates:l,currency:a,autoupdate:s,autodetect:u,disabledFiltering:m},{filter:c},g,p){return d`<cosmoz-omnitable-amount-range-input
			.title=${e}
			?disabled=${m}
			.filter=${c}
			.values=${p}
			.rates=${l}
			.min=${t}
			.max=${o}
			.limits=${r}
			.locale=${i}
			.currency=${a}
			.autoupdate=${s}
			.autodetect=${u}
			@filter-changed=${({detail:{value:h}})=>g($=>({...$,filter:h}))}
			@header-focused-changed=${({detail:{value:h}})=>g($=>({...$,headerFocused:h}))}
		></cosmoz-omnitable-amount-range-input>`}computeSource(e,t){return oe(e,t)}}customElements.define("cosmoz-omnitable-column-amount",Yn);const Zn=(n,e)=>{if(!Array.isArray(n))return;const t=[];return n.reduce((o,r)=>Array.isArray(r)?(r.forEach(i=>{o.push(i)}),o):(o.push(r),o),[]).filter((o,r,i)=>{if(i.indexOf(o)!==r)return!1;if(e){const l=k(o,e);if(t.indexOf(l)!==-1)return!1;t.push(l)}return!0})},eo=(n,e,t)=>{if(n==null)return[];if(Array.isArray(n)){const o=Zn(n,e);if(!o?.length)return o;const r=t??"label",i=l=>typeof l=="object"&&l!=null?String(k(l,r)??""):String(l??"");return o.sort((l,a)=>i(l).localeCompare(i(a)))}if(typeof n=="object"){const o=e??"id",r=t??"label";return Object.entries(n).map(([i,l])=>({[o]:i,[r]:l})).sort((i,l)=>String(i[r]??"").localeCompare(String(l[r]??"")))}return[]},qe=(n,e,t)=>Y(e&&k(n,e)).map(B(t)),Xe=({valuePath:n,textProperty:e},t)=>qe(t,n,e).filter(o=>o!=null).join(", "),to=Xe,no=({valueProperty:n,valuePath:e,emptyValue:t,emptyProperty:o},r)=>i=>{const l=B(n),a=Y(k(i,e));return r.some(s=>a.length===0&&B(o||n)(s)===t||a.some(u=>l(u)===l(s)))},ke=n=>e=>n(t=>({...t,filter:e})),Ie=n=>e=>n(t=>({...t,headerFocused:e})),_e=n=>e=>n(t=>({...t,query:e})),Lt=({emptyValue:n,emptyLabel:e,emptyProperty:t,textProperty:o,valueProperty:r},i)=>{const l=eo(i,r,o);return!e||n===void 0||!o||!(t||r)||!l?l:[{[o]:e,[t||r]:n},...l]},oo=(n,e)=>Lt(n,Et(e,n.valuePath)),Fe=n=>class extends n{static get properties(){return{textProperty:{type:String},valueProperty:{type:String},emptyLabel:{type:String},emptyValue:{type:Object},emptyProperty:{type:String}}}getConfig(e){return{emptyProperty:e.emptyProperty}}getString(e,t){return Xe(e,t)}toXlsxValue(e,t){return to(e,t)}getComparableValue({valuePath:e,valueProperty:t},o){const r=k(o,e);return t==null?r:Y(r).map(B(t)).sort().join(" ")}getFilterFn(e,t){if(!(!t||!Array.isArray(t)||t.length===0))return no(e,t)}serializeFilter(e,t){return t.length===0?null:JSON.stringify(t)}deserializeFilter(e,t){if(t==null)return null;try{return JSON.parse(decodeURIComponent(t))}catch(o){return console.error("Failed to deserialize filter value:",{error:o?.name,message:o?.message,filterLength:typeof t=="string"?t.length:null}),null}}computeSource(e,t){return e.externalValues||typeof e.values=="function"?async(...o)=>Lt(e,await Promise.resolve(we(e.values,...o))):oo(e,t)}},ro=({valuePath:n,textProperty:e,valueProperty:t},o)=>{const r=e?It(e):B(t),i=Y(n&&k(o,n)).map(r);return i.length>1?i.filter(Boolean).join(","):i[0]},io=({valueProperty:n,valuePath:e,emptyValue:t,emptyProperty:o},r)=>{const i=B(n),l=B(o||n),a=new Set(r.filter(c=>c.excluded).map(c=>i(c.item))),s=new Set(r.filter(c=>!c.excluded).map(c=>i(c.item))),u=r.some(c=>c.excluded&&l(c.item)===t),m=r.some(c=>!c.excluded&&l(c.item)===t);return c=>{const g=Y(k(c,e)).map(i);return g.length===0?!u&&(m||s.size===0):!g.some(p=>a.has(p))&&(s.size===0||g.some(p=>s.has(p)))}};let lo=class extends Fe(R(T)){static get properties(){return{headerCellClass:{type:String,value:"autocomplete-header-cell"},minWidth:{type:String,value:"55px"},editMinWidth:{type:String,value:"55px"},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return d`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},o){return d`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>o(i.target.value)}
			.value=${W(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:o},r,i){return d`<cosmoz-autocomplete-excluding
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
			.text=${o}
			.limit=${e.limit}
			@opened-changed=${l=>Ie(r)(l.detail.value)}
			@value-changed=${Me(ke(r))}
			@text-changed=${Me(_e(r))}
			>${F(e.loading,()=>d`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-excluding
		>`}getComparableValue(e,t){return ro(e,t)}getFilterFn(e,t){if(!(!t||!Array.isArray(t)||t.length===0))return io(e,t)}};customElements.define("cosmoz-omnitable-column-autocomplete-excluding",lo);const ao=({valuePath:n,textProperty:e,valueProperty:t},o)=>{const r=e?It(e):B(t),i=Y(n&&k(o,n)).map(r);return i.length>1?i.filter(Boolean).join(","):i[0]};class so extends Fe(R(T)){static get properties(){return{headerCellClass:{type:String,value:"autocomplete-header-cell"},minWidth:{type:String,value:"55px"},editMinWidth:{type:String,value:"55px"},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return d`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},o){return d`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>o(i.target.value)}
			.value=${W(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:o},r,i){return d`<cosmoz-autocomplete-ui
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
			.text=${o}
			.limit=${e.limit}
			.onChange=${ke(r)}
			@opened-changed=${l=>Ie(r)(l.detail.value)}
			.onText=${_e(r)}
			>${F(e.loading,()=>d`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}getComparableValue(e,t){return ao(e,t)}}customElements.define("cosmoz-omnitable-column-autocomplete",so);const Ue=(n,e)=>e.find(({value:t})=>n===t),uo=(n,e,t)=>{const o=Ue(e,t);return o?o.text:n},ct=(n,e,t,o)=>uo(n,k(e,t),o),co=({valuePath:n},e,t)=>Ue(k(e,n),t),mo=n=>e=>{n(t=>({...t,filter:e?.[0]?.value??null}))},po=n=>e=>{n(t=>({...t,headerFocused:e}))},go=n=>e=>{n(t=>({...t,query:e}))},ho=n=>e=>n(e?.[0]?.value),dt=({valuePath:n,trueLabel:e,falseLabel:t},o)=>k(o,n)?e:t,fo=({valuePath:n},e)=>t=>k(t,n)===e,ie=kt((n,e)=>[{text:n,value:!0},{text:e,value:!1}]),bo=({valuePath:n,trueLabel:e,falseLabel:t},o)=>n?k(o,n)?e:t:"",xo=(n,e)=>{try{return JSON.parse(e)}catch{return null}};class vo extends R(T){static get properties(){return{trueLabel:{type:String,value:"True"},falseLabel:{type:String,value:"False"},flex:{type:String,value:"0"},cellClass:{type:String,value:"boolean-cell"}}}getString(e,t){return dt(e,t)}renderCell(e,{item:t}){return dt(e,t)}renderEditCell(e,{item:t},o){const{trueLabel:r,falseLabel:i}=e;return d`<cosmoz-autocomplete
			no-label-float
			.title=${ct(e.title,t,e.valuePath,ie(r,i))}
			.source=${ie(r,i)}
			.textProperty=${"text"}
			.value=${co(e,t,ie(r,i))}
			.onChange=${ho(o)}
			.limit=${1}
			>${F(e.loading,()=>d`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete
		>`}renderHeader(e,{filter:t,query:o},r,i){return d`<cosmoz-autocomplete-ui
			?disabled=${e.disabledFiltering}
			.label=${e.title}
			.title=${ct(e.title,t,e.valuePath,i)}
			.source=${i}
			.textProperty=${"text"}
			.value=${Ue(t,i)}
			.text=${o}
			.onChange=${mo(r)}
			@opened-changed=${l=>po(r)(l.detail.value)}
			.onText=${go(r)}
			.limit=${1}
			>${F(e.loading,()=>d`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}computeSource({trueLabel:e,falseLabel:t}){return ie(e,t)}getFilterFn(e,t){if(t!=null)return fo(e,t)}toXlsxValue(e,t){return bo(e,t)}deserializeFilter(e,t){return xo(e,t)}}customElements.define("cosmoz-omnitable-column-boolean",vo);const Ke=n=>class extends We(n){static get properties(){return{max:{type:Date,value:null},min:{type:Date,value:null},_filterText:{type:String,computed:"_computeFilterText(filter.*, formatter)"},formatter:{type:Object,computed:"_computeFormatter(locale)"}}}toDate(e,t,o){if(e==null||e==="")return;let r=e;if(r instanceof Date||(typeof e=="string"&&(r=this.getAbsoluteISOString(r)),r=new Date(r)),Number.isNaN(r.getTime()))return null;if(o==null||t==null)return r;const i=this.toDate(t);if(i==null)return r;const l=this.getComparableValue(r),a=this.getComparableValue(i);return o(l,a)===l?r:i}toValue(){return this.toDate.apply(this,arguments)}getComparableValue(e,t){const o=super.getComparableValue(e,t);if(o!=null)return this.toNumber(o.getTime())}getString(e,t=this.valuePath,o=this.formatter){const r=this.toValue(this.get(t,e));return r===void 0?"":r===null?"Invalid Date":this.renderValue(r,o)}getAbsoluteISOString(e){return e.length===19?e+this._getTimezoneString(e):e}_getTimezoneString(e){const t=-new Date(e).getTimezoneOffset()/60;return(t<0?"-":"+")+["0",Math.abs(t)].join("").substr(-2)+":00"}renderValue(e,t=this.formatter){if(t==null)return;const o=this.toValue(e);if(o!=null)return t.format(o)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0)}_toInputString(e){const t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(0,10)}_dateValueChanged(e){const t=e.currentTarget,o=t.value,r=e.model.item,i=this.get(this.valuePath,r),l=this._fromInputString(o);this.set(this.valuePath,l,r),this._fireItemChangeEvent(r,this.valuePath,i,this.renderValue.bind(this))}_toLocalISOString(e){return ze(e)}};class yo extends Ke(ne(T)){render(){const e=t=>{this.headerFocused=t.type==="focus"};return d`
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

			${F(this.disabled,()=>d`
					<cosmoz-omnitable-dropdown-input
						disabled
						.label=${this.title}
						.value=${this._filterText??""}
					></cosmoz-omnitable-dropdown-input>
				`,()=>d`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${te({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:d`
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
		`}_fromInputString(e,t){const o=this.toDate(e);if(o!=null)return t==="min"&&o.setHours(0,0,0,0),t==="max"&&o.setHours(23,59,59),o}_filterInputChanged(e,t){const o=e.path.split(".")[1],r=o&&e.value;if(r&&r.match(/^0+/u)){this._limitInputDebouncer.cancel();return}super._filterInputChanged(e,t)}}customElements.define("cosmoz-omnitable-date-range-input",yo);const $o=n=>{const e=-new Date(n).getTimezoneOffset()/60;return(e<0?"-":"+")+["0",Math.abs(e)].join("").substr(-2)+":00"},Qe=n=>n.length===19?n+$o(n):n,Rt=n=>{if(n==null||n==="")return;let e=n;return!(e instanceof Date)&&(typeof n=="string"&&(e=Qe(e)),e=an(e),!e)||Number.isNaN(e.getTime())?null:e},P=({valuePath:n},e)=>{if(e==null)return;let t=e;n!=null&&(t=k(e,n));const o=Rt(t);if(o!=null)return L(o.getTime())},V=(n,e,t)=>{const o=Rt(n);return o??null},Je=(n,e)=>{if(e==null)return;const t=V(n);if(t!=null)return e.format(t)},le={},wo=n=>{const e=n||"";return le[e]||(le[e]=new Intl.DateTimeFormat(n||void 0)),le[e]},mt=({valuePath:n,locale:e},t)=>{let o=k(t,n||"");return o===void 0?"":(o=V(o),o===null?"Invalid Date":Je(o,wo(e)))},Mt=n=>{const e=V(n);if(e==null)return null;const t=ze(e);return t==null?null:t.slice(0,10)},zo=({valuePath:n},e)=>Mt(k(e,n||"")),Nt=(n,e)=>{const t=V(n);if(t!=null)return t},pt=n=>{const e=Mt(n);return e??""},So=({valuePath:n},e)=>{if(!n)return"";const t=V(k(e,n));if(!t)return"";const o=V(ze(t));return o?(o.setHours(0,0,0,0),o):""},jt=(n,e)=>t=>{const o=P(n,t);if(o==null)return!1;const r=P({...n,valuePath:"min"},e),i=P({...n,valuePath:"max"},e);return!(o<(r??-1/0)||o>(i??1/0))};class Co extends R(T){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"date-header-cell"},width:{type:String,value:"100px"},minWidth:{type:String,value:"82px"},flex:{type:String,value:"0"}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const o=P({...e,valuePath:"min"},t),r=P({...e,valuePath:"max"},t);if(!(o==null&&r==null))return jt(e,t)}getString(e,t){return mt(e,t)}toXlsxValue(e,t){return So(e,t)}getComparableValue(e,t){return P(e,t)}serializeFilter(e,t){if(t==null)return;const o=V(t.min),r=V(t.max);if(!(o==null&&r==null))return pt(o)+"~"+pt(r)}deserializeFilter(e,t){if(typeof t!="string"||t==="")return null;const o=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(o)?{min:V(o[1]),max:V(o[2])}:null}renderCell(e,{item:t}){return d`<div class="omnitable-cell-date">
			${mt(e,t)}
		</div>`}renderEditCell(e,{item:t},o){return d`<cosmoz-input
			no-label-float
			type="date"
			@change=${i=>o(Nt(i.target.value))}
			.value=${zo(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:o,limits:r,locale:i,disabledFiltering:l},{filter:a},s,u){return d`<cosmoz-omnitable-date-range-input
			.title=${e}
			?disabled=${l}
			.filter=${a}
			.values=${u}
			.min=${t}
			.max=${o}
			.limits=${r}
			.locale=${i}
			@filter-changed=${({detail:{value:m}})=>s(c=>({...c,filter:m}))}
			@header-focused-changed=${({detail:{value:m}})=>s(c=>({...c,headerFocused:m}))}
		></cosmoz-omnitable-date-range-input>`}computeSource(e,t){return oe(e,t)}}customElements.define("cosmoz-omnitable-column-date",Co);class ko extends Ke(ne(T)){render(){const e=t=>{this.headerFocused=t.type==="focus"};return d`
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

			${F(this.disabled,()=>d`
					<cosmoz-omnitable-dropdown-input
						disabled
						.label=${this.title}
						.value=${this._filterText??""}
					></cosmoz-omnitable-dropdown-input>
				`,()=>d`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${te({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:d`
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
		`}_toInputString(e){const t=this.toValue(e);if(t!=null)return this._toLocalISOString(t).slice(0,19)}_computeFormatter(e){const t={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return new Intl.DateTimeFormat(e||void 0,t)}}customElements.define("cosmoz-omnitable-datetime-range-input",ko);const ae={},Io=n=>{const e=n||"";if(ae[e])return ae[e];const t={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return ae[e]=new Intl.DateTimeFormat(n||void 0,t),ae[e]},Ve=({valuePath:n,locale:e},t)=>{const o=V(k(t,n||""));return o===void 0?"":o===null?"Invalid Date":Je(o,Io(e))},_o=({valuePath:n},e)=>n?k(e,n):"",gt=n=>{const e=V(n);return e==null?"":e.toISOString().slice(0,19).replace(/:/gu,".")},ht=n=>{if(!(n==null||n==="")&&typeof n=="string")return V(n.replace(/\./gu,":")+"Z")};class ft extends R(T){static get is(){return"cosmoz-omnitable-column-datetime"}static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"datetime-header-cell"},width:{type:String,value:"210px"},minWidth:{type:String,value:"128px"},flex:{type:String,value:"0"},filterStep:{type:Number,value:1}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const o=P({...e,valuePath:"min"},t),r=P({...e,valuePath:"max"},t);if(!(o==null&&r==null))return jt(e,t)}getString(e,t){return Ve(e,t)}toXlsxValue(e,t){return _o(e,t)}getComparableValue(e,t){return P(e,t)}serializeFilter(e,t){if(t==null)return;const o=V(t.min),r=V(t.max);if(!(o==null&&r==null))return gt(o)+"~"+gt(r)}deserializeFilter(e,t){if(typeof t!="string"||t==="")return null;const o=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(o)?{min:ht(o[1]),max:ht(o[2])}:null}renderCell(e,{item:t}){return Ve(e,t)}renderEditCell(e,{item:t},o){return d`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>o(Nt(i.target.value))}
			.value=${Ve(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:o,limits:r,locale:i,filterStep:l,disabledFiltering:a},{filter:s},u,m){return d`<cosmoz-omnitable-datetime-range-input
			.title=${e}
			?disabled=${a}
			.filter=${s}
			.values=${m}
			.min=${t}
			.max=${o}
			.limits=${r}
			.locale=${i}
			.filterStep=${l}
			@filter-changed=${({detail:{value:c}})=>u(g=>({...g,filter:c}))}
			@header-focused-changed=${({detail:{value:c}})=>u(g=>({...g,headerFocused:c}))}
		></cosmoz-omnitable-datetime-range-input>`}computeSource(e,t){return oe(e,t)}}customElements.define(ft.is,ft);class Fo extends Fe(R(T)){renderCell({valuePath:e,textProperty:t},{item:o}){const r=qe(o,e,t).map(i=>d`<li>${i}</li>`);return d`
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
			?disabled=${e.disabledFiltering}
			.label=${e.title}
			.source=${i}
			.textProperty=${e.textProperty}
			.value=${t}
			.text=${o}
			.onChange=${ke(r)}
			@opened-changed=${l=>Ie(r)(l.detail.value)}
			.onText=${_e(r)}
			>${F(e.loading,()=>d`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		> `}}customElements.define("cosmoz-omnitable-column-list-horizontal",Fo);const Oo=q`
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
`,Do=({items:n})=>{const[e,t]=N(!1),o=Array.isArray(n)?n:[],r=O(()=>Math.max(0,o.length-1),[o]);if(o.length===0)return null;const i=o.length>2,l=o[0],a=i&&!e?[]:o.slice(1),s=u=>{u.stopPropagation(),u.preventDefault(),t(m=>!m)};return d`
		<ul>
			<li>
				<span>${l}</span>
			</li>
			<li class="see-more" ?hidden=${!i||e}>
				<a href="#" @click=${s}
					>${C("and {0} more",{0:r})}</a
				>
			</li>
			${a.map(u=>d`
					<li>
						<span class="item">${u}</span>
					</li>
				`)}
			<li class="see-less" ?hidden=${!i||!e}>
				<a href="#" @click=${s}>${C("See less")}</a>
			</li>
		</ul>
	`};customElements.define("cosmoz-omnitable-column-list-data",A(Do,{styleSheets:[Se(Oo)]}));class Vo extends Fe(R(T)){static get properties(){return{keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,textual:e.textual}}renderCell({valuePath:e,textProperty:t},{item:o}){return d`<cosmoz-omnitable-column-list-data
			.items=${qe(o,e,t)}
		></cosmoz-omnitable-column-list-data>`}renderEditCell(e,{item:t},o){const r=i=>o(i.target.value.split(/,\s*/gu));return d`<cosmoz-input
			no-label-float
			type="text"
			.value=${Xe(e,t)}
			@change=${r}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:o},r,i){return d`<cosmoz-autocomplete-ui
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
			.text=${o}
			.onChange=${ke(r)}
			@opened-changed=${l=>Ie(r)(l.detail.value)}
			.onText=${_e(r)}
			>${F(e.loading,()=>d`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}}customElements.define("cosmoz-omnitable-column-list",Vo);class Ao extends We(ne(T)){static get properties(){return{maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},formatter:{type:Object,computed:"_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)"},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:"_computeFilterText(filter.*, formatter)"},headerFocused:{type:Boolean,value:!1}}}render(){const e=t=>{this.headerFocused=t.type==="focus",this._onDropdownOpenedChanged(t)};return d`
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

			${F(this.disabled,()=>d`
					<cosmoz-omnitable-dropdown-input
						disabled
						.label=${this.title}
						.value=${this._filterText??""}
					></cosmoz-omnitable-dropdown-input>
				`,()=>d`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${te({title:this.title,tooltip:this._tooltip,filterText:this._filterText,horizontalAlign:"right",externalValues:this.externalValues,onOpenedChanged:e,content:d`
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
		`}_computeFormatter(e,t,o){const r={localeMatcher:"best fit"};return t!==null&&(r.minimumFractionDigits=t),o!==null&&(r.maximumFractionDigits=o),new Intl.NumberFormat(e||void 0,r)}getComparableValue(e,t){if(e==null)return;let o=e;if(t!=null&&(o=this.get(t,e)),o=this.toValue(o),o==null)return;const r=this.maximumFractionDigits;return r!==null?this.toValue(o.toFixed(r)):o}renderValue(e,t=this.formatter){const o=this.toNumber(e);if(o!=null)return t.format(o)}}customElements.define("cosmoz-omnitable-number-range-input",Ao);class To extends R(T){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},cellClass:{type:String,value:"number-cell align-right"},width:{type:String,value:"30px"},minWidth:{type:String,value:"30px"},headerCellClass:{type:String,value:"number-header-cell"},maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const o=K({...e,valuePath:"min"},t),r=K({...e,valuePath:"max"},t);if(!(o==null&&r==null))return Nn(e,t)}getString(e,t){return lt(e,t)}toXlsxValue({valuePath:e},t){return k(t,e)}getComparableValue(e,t){return K(e,t)}serializeFilter(e,t){if(t==null)return;const o=L(t.min),r=L(t.max);if(!(o==null&&r==null))return it(o)+"~"+it(r)}deserializeFilter(e,t){if(typeof t!="string"||t==="")return null;const o=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(o)?{min:L(o[1]),max:L(o[2])}:null}renderCell(e,{item:t}){return d`<div class="omnitable-cell-number">
			${lt(e,t)}
		</div>`}renderEditCell(e,{item:t},o){return d`<cosmoz-input
			no-label-float
			type="number"
			@change=${i=>o(i.target.value)}
			.value=${Rn(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:o,limits:r,locale:i,maximumFractionDigits:l,minimumFractionDigits:a,autoupdate:s,disabledFiltering:u},{filter:m},c,g){return d`<cosmoz-omnitable-number-range-input
			.title=${e}
			?disabled=${u}
			.filter=${m}
			.values=${g}
			.min=${t}
			.max=${o}
			.limits=${r}
			.locale=${i}
			.maximumFractionDigits=${l}
			.minimumFractionDigits=${a}
			.autoupdate=${s}
			@filter-changed=${({detail:{value:p}})=>c(h=>({...h,filter:p}))}
			@header-focused-changed=${({detail:{value:p}})=>c(h=>({...h,headerFocused:p}))}
		></cosmoz-omnitable-number-range-input>`}computeSource(e,t){return oe(e,t)}}customElements.define("cosmoz-omnitable-column-number",To);class Eo extends Ke(ne(T)){render(){const e=t=>{this.headerFocused=t.type==="focus"};return d`
			${F(this.disabled,()=>d`
					<cosmoz-omnitable-dropdown-input
						disabled
						.label=${this.title}
						.value=${this._filterText??""}
					></cosmoz-omnitable-dropdown-input>
				`,()=>d`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${te({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:d`
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
		`}get _fixedDate(){return"1970-01-01"}toDate(e,t,o){const r=typeof e=="string"&&e.length>3&&e.length<=9?this.getAbsoluteISOString(this._fixedDate+"T"+e):e;return super.toDate(r,t,o)}_toInputString(e){const t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(11,19)}getComparableValue(e,t){if(e==null)return;let o=this._toInputString(t==null?e:this.get(t,e));if(o!=null&&(o=this.toValue(this.getAbsoluteISOString(this._fixedDate+"T"+o)),o!=null))return this.toNumber(o.getTime())}_timeValueChanged(e){const t=e.target,o=t.value,r=e.model.item,i=this.toDate(r.date),l=this.toDate(i!=null?i.toISOString().slice(0,10)+"T"+o:o),a=s=>s;l==null&&(this.set(this.valuePath,l,r),this._fireItemChangeEvent(r,this.valuePath,i,a.bind(this)))}_computeFormatter(e){const t={hour:"numeric",minute:"numeric",second:"numeric"};return new Intl.DateTimeFormat(e||void 0,t)}}customElements.define("cosmoz-omnitable-time-range-input",Eo);const Pt="1970-01-01",H=(n,e,t)=>{const o=typeof n=="string"&&n.length>3&&n.length<=9?Qe(Pt+"T"+n):n;return V(o)},se={},Lo=n=>{const e=n||"";if(se[e])return se[e];const t={hour:"numeric",minute:"numeric",second:"numeric"};return se[e]=new Intl.DateTimeFormat(n||void 0,t),se[e]},be=({valuePath:n,locale:e},t)=>{const o=H(k(t,n||""));return o===void 0?"":o===null?"Invalid Date":Je(o,Lo(e))},Ro=(n,e)=>n.valuePath?be(n,e):"",Mo=n=>{const e=H(n);if(e==null)return null;const t=ze(e);return t&&t.slice(11,19)},J=({valuePath:n},e)=>{if(e==null)return;const t=Mo(n==null?e:k(e,n));if(t==null)return;const o=H(Qe(Pt+"T"+t));return o==null?o:L(o.getTime())},No=(n,e)=>t=>{const o=J(n,t);if(o==null)return!1;const r=J({...n,valuePath:"min"},e),i=J({...n,valuePath:"max"},e);return r==null||i==null?!1:!(o<r||o>i)},bt=n=>{const e=H(n);return e==null?"":e.toISOString().slice(11,19).replace(/:/gu,".")},xt=n=>{if(!(n==null||n===""))return H(typeof n=="string"?n.replace(/\./gu,":")+"Z":n)};class jo extends R(T){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"time-header-cell"},minWidth:{type:String,value:"63px"},width:{type:String,value:"210px"},flex:{type:String,value:"0"},filterStep:{type:String,value:"1"}}}getFilterFn(e,t){const o=J({...e,valuePath:"min"},t),r=J({...e,valuePath:"max"},t);if(!(o==null&&r==null))return No(e,t)}getString(e,t){return be(e,t)}toXlsxValue(e,t){return Ro(e,t)}getComparableValue(e,t){return J(e,t)}serializeFilter(e,t){if(t==null)return;const o=H(t.min),r=H(t.max);if(!(o==null&&r==null))return bt(o)+"~"+bt(r)}deserializeFilter(e,t){if(typeof t!="string"||t==="")return null;const o=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(o)?{min:xt(o[1]),max:xt(o[2])}:null}renderCell(e,{item:t}){return be(e,t)}renderEditCell(e,{item:t},o){return d`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>o(i.target.value)}
			.value=${be(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:o,locale:r,filterStep:i,disabledFiltering:l},{filter:a},s,u){return d`<cosmoz-omnitable-time-range-input
			.title=${e}
			?disabled=${l}
			.filter=${a}
			.values=${u}
			.min=${t}
			.max=${o}
			.locale=${r}
			.filterStep=${i}
			@filter-changed=${({detail:{value:m}})=>s(c=>({...c,filter:m}))}
			@header-focused-changed=${({detail:{value:m}})=>s(c=>({...c,headerFocused:m}))}
		></cosmoz-omnitable-time-range-input>`}computeSource(e,t){return oe(e,t)}}customElements.define("cosmoz-omnitable-column-time",jo);const Po=({column:n,item:e,selected:t,folded:o,group:r})=>{if(!n)return Re;const i=n.renderGroup??n.renderCell;return i?i(n,{item:e,selected:t,folded:o,group:r}):Re};customElements.define("cosmoz-omnitable-group-row",A(Po,{useShadowDOM:!1}));const Bo=n=>{const{column:e}=n;return E(()=>{let t=0,o=0;const r=a=>{n.dispatchEvent(new CustomEvent("column-resize",{bubbles:!0,composed:!0,detail:{newWidth:Math.ceil(o+a.pageX-t),column:e}}))},i=()=>{document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",i)},l=a=>{t=a.pageX,o=n.previousElementSibling.getBoundingClientRect().width,document.addEventListener("pointermove",r),document.addEventListener("pointerup",i)};return n.addEventListener("pointerdown",l),()=>n.removeEventListener("pointerdown",l)},[e]),Re};customElements.define("cosmoz-omnitable-resize-nub",A(Bo));const Ho=d`<svg
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
</svg>`,Go=d`
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
</svg>`,Wo=d`<svg
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
</svg> `,Bt=({column:n,on:e,descending:t,setOn:o,setDescending:r})=>{const{name:i,title:l}=n??{};return d`<button
		class="sg"
		title=${xe(l)}
		data-on=${xe(i===e&&(t?"desc":"asc")||void 0)}
		@click=${a=>{const u=a.currentTarget?.dataset.on;u||(o(i),r(!1)),u==="asc"?r(!0):u==="desc"&&(o(),r(!1))}}
	>
		<span>${l}</span> ${Wo}
	</button>`},Ht=({columns:n,...e})=>n?.map(t=>Bt({column:t,...e})),qo=()=>d`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:n,groupOn:e,setGroupOn:t,groupOnDescending:o,setGroupOnDescending:r}={})=>Ht({columns:n?.filter?.(i=>i.groupOn),on:e,setOn:t,descending:o,setDescending:r})}
	>
	</sort-and-group-consumer>
`,Xo=()=>d`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:n,sortOn:e,setSortOn:t,descending:o,setDescending:r}={})=>Ht({columns:n?.filter?.(i=>i.sortOn&&!i.noSort),on:e,setOn:t,descending:o,setDescending:r})}
	>
	</sort-and-group-consumer>
`,Gt=n=>(e,t,o=_t)=>{const r=un(),i=new URLSearchParams(r.hash.replace("#",""));return n(e,t,o,i),"#!"+Object.assign(r,{hash:i}).href.replace(location.origin,"")},Wt=n=>n==null||n==="",Uo=Gt((n,e,t,o)=>Wt(t(e))?o.delete(n):o.set(n,t(e))),Ko=Gt((n,e,t,o)=>{const r=Object.entries(e),i=r.map(t).filter(([,a])=>a!==void 0);if(i.length===0&&r.length>0)return;const l=n;Array.from(o.keys()).filter(a=>a.startsWith(l)).forEach(a=>o.delete(a)),i.forEach(([a,s])=>Wt(s)?o.delete(n+a):o.set(n+a,s))});function Z(n,e,{suffix:t="",read:o,write:r,ready:i=!0,multi:l}={}){const a=l?Ko:Uo,s=Ce({param:e,suffix:t,link:a,write:r??_t}),u=O(()=>{if(e==null)return!1;if(l){const p=nt(e+t);return Object.keys(p).length>0}return ot(e+t)!==void 0},[]),[m,c]=N(()=>{if(e==null)return n;if(l){const h=nt(e+t,o);return Object.keys(h).length>0?h:n}return ot(e+t,o)??n}),g=S(p=>c(h=>{const $=we(p,h);return s.param!=null&&sn(s.link(s.param+s.suffix,$,s.write),null,{notify:!1}),$}),[]);return E(()=>{s.param==null||!i||u||n!=null&&g(n)},[i]),[m,g]}const Qo=n=>[!0,"true",1,"yes","on"].includes(n),ue=n=>n===""||(n==null?void 0:Qo(n)),ce=(n,e,t)=>S(o=>{n(o),t(r=>({...r,[e]:o}))},[n,e,t]),Jo=(n,e,{settings:t,setSettings:o,resetRef:r,ready:i=!0})=>{const[l,a]=Z(t.sortOn,e,{suffix:"-sortOn",ready:i}),[s,u]=Z(ue(t.descending),e,{suffix:"-descending",read:ue,ready:i}),[m,c]=Z(t.groupOn,e,{suffix:"-groupOn",ready:i}),[g,p]=Z(ue(t.groupOnDescending),e,{suffix:"-groupOnDescending",read:ue,ready:i}),h=O(()=>n.find(y=>y.name===l),[n,l]),$=O(()=>n.find(y=>y.name===m),[n,m]),x={groupOn:m,setGroupOn:ce(c,"groupOn",o),groupOnDescending:g,setGroupOnDescending:ce(p,"groupOnDescending",o),sortOn:l,setSortOn:ce(a,"sortOn",o),descending:s,setDescending:ce(u,"descending",o),columns:n},b=O(()=>x,Object.values(x)),v=S(y=>{a(y.sortOn),c(y.groupOn),u(y.descending),p(y.groupOnDescending)},[]);return E(()=>{r.current=v},[]),{...b,sortAndGroup:b,groupOnColumn:$,sortOnColumn:h}},Ye=Ft();customElements.define("sort-and-group-provider",Ye.Provider);customElements.define("sort-and-group-consumer",A(({render:n})=>n(Be(Ye)),{useShadowDOM:!1}));const Yo=({data:n,columns:e,groupOnColumn:t,filters:o,setFilterState:r,sortAndGroup:{sortOn:i,setSortOn:l,descending:a,setDescending:s}={}})=>Ot(e,u=>u.name,u=>[d`<div
				class="cell ${u.headerCellClass} header-cell"
				part="cell header-cell cell-${u.name} header-cell-${u.name}"
				?hidden="${u===t}"
				title="${u.headerTitleFn(u)}"
				name="${u.name}"
			>
				${u.renderHeader(u,o[u.name]??{},m=>r(u.name,m),u.source(u,n))}
				${F(!u.noSort,()=>Bt({on:i,setOn:l,descending:a,setDescending:s,column:u}))}
			</div>`,d`<cosmoz-omnitable-resize-nub
				.column="${u}"
				name="${u.name}"
			></cosmoz-omnitable-resize-nub>`]),Zo=({columns:n,settingsConfig:e,hideSelectAll:t,...o})=>{const r=Be(Ye);return d`
		${F(n,i=>Yo({columns:i,sortAndGroup:r,...o}))}
		${F(!t,()=>d` <cosmoz-omnitable-settings
					.config=${e}
					part="settings"
				></cosmoz-omnitable-settings>`)}
	`};customElements.define("cosmoz-omnitable-header-row",A(Zo,{useShadowDOM:!1}));const er=q`
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
`,tr=({column:n})=>d`
	<div class="label" title="${n.title}" part="item-expand-label">
		${n.title}
	</div>
	<div class="value" part="item-expand-value">
		<slot></slot>
	</div>
`;customElements.define("cosmoz-omnitable-item-expand-line",A(tr,{styleSheets:[Se(er)]}));const nr=({columns:n,item:e,selected:t,expanded:o,groupOnColumn:r})=>cn(n,i=>d`<cosmoz-omnitable-item-expand-line
				.column=${i}
				?hidden=${i===r}
				exportparts="item-expand-label, item-expand-value"
				>${i.renderCell(i,{item:e,selected:t,expanded:o})}</cosmoz-omnitable-item-expand-line
			>`);customElements.define("cosmoz-omnitable-item-expand",A(nr,{useShadowDOM:!1}));const or=(n,e,t)=>n.editable?n.renderEditCell(n,e,t(n,e.item)):n.renderCell(n,e),rr=({columns:n,groupOnColumn:e,item:t,index:o,selected:r,expanded:i,onItemChange:l})=>Ot(n,a=>a.name,a=>d`<div
				class="cell itemRow-cell ${a.cellClass??""}"
				part="cell itemRow-cell cell-${a.name} itemRow-cell-${a.name}"
				?hidden="${a===e}"
				?editable="${a.editable}"
				title="${a.cellTitleFn(a,t)}"
				name="${a.name}"
			>
				${or(a,{item:t,index:o,selected:r,expanded:i},l)}
			</div>`);customElements.define("cosmoz-omnitable-item-row",A(rr,{useShadowDOM:!1}));const qt=q`
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
`,ir=q`
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
`,vt=n=>{const e=n.replace(/"/gu,'""');return e.search(/("|,|\n)/gu)>=0?'"'+e+'"':n},lr=(n,e,t)=>{const i=n.map(a=>vt(a.title)).join(";")+`
`,l=e.map(a=>n.map(s=>{const u=s.getString(s,a);return u==null?"":vt(String(u))}).join(";")+`
`);l.unshift(i),Dt(new File(l,t,{type:"text/csv;charset=utf-8"}))},ar=(n,e)=>{const t=n.map(r=>r.title),o=e.map(r=>n.map(i=>{const l=i.toXlsxValue(i,r);return l??""}));return o.unshift(t),o},sr=(n,e,t,o)=>{const r=ar(n,e),i=new dn(t).addSheetFromData(r,o).generate();Dt(new File([i],t,{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}))},ve=Symbol("index"),M=Symbol("All"),ur=(n,e)=>{if(typeof n.findLastIndex=="function")return n.findLastIndex(e);for(let t=n.length-1;t>=0;t--)if(e(n[t],t,n))return t;return-1},cr=({columns:n,selectedItems:e,saveAsCsv:t=lr,saveAsXlsx:o=sr,setSelectedItems:r,csvFilename:i,xlsxFilename:l,xlsxSheetname:a,topPlacement:s,enableSelectAll:u,allSelected:m=!1,allItemsCount:c})=>{const g=e===M,p=g?c??0:e.length;let h;return g?h=c!==void 0?C("All {count} items selected",{count:c}):C("All items selected"):h=C("{count} selected item",{count:p}),d`<cosmoz-bottom-bar
		id="bottomBar"
		?active=${g||!He(p)}
		part="bottomBar"
		exportparts="bar: bottomBar-bar, info: bottomBar-info, buttons: bottomBar-buttons"
	>
		<span slot="info"> ${h} </span>
		${e!==M&&u&&m?d`<button @click=${()=>r(M)}>
					${C("Select all items")}
				</button>`:""}
		<slot name="actions" id="actions"></slot>
		<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
		<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
		${e!==M?d`<cosmoz-dropdown-menu
					part="extra"
					slot="extra"
					.placement=${s}
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
						@click=${()=>t(n,e,i)}
					>
						${C("Save selected items as CSV")}
					</button>
					<button
						@click=${()=>o(n,e,l,a)}
					>
						${C("Save selected items as XLSX")}
					</button>
					<slot name="download-menu"></slot>
				</cosmoz-dropdown-menu>`:""}
	</cosmoz-bottom-bar>`},dr=({allSelected:n,onAllCheckboxChange:e,sortAndGroup:t,dataIsValid:o,data:r,columns:i,filters:l,groupOnColumn:a,setFilterState:s,settingsConfig:u,hideSelectAll:m})=>d`<sort-and-group-provider .value=${t}>
		<div class="header" id="header" part="header">
			${F(!m,()=>d`<input
						class="checkbox all"
						type="checkbox"
						.checked=${n}
						@input=${e}
						?disabled=${!o}
						part="all"
					/>`)}
			${F(m,()=>d` <cosmoz-omnitable-settings
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
	</sort-and-group-provider>`,mr=zt`
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
`,pr=({settingsConfig:n})=>{const{columns:e,collapsed:t}=n,o=e.filter(r=>!t.some(i=>i.name===r.name));return d`<div class="skeleton">
		${Array.from({length:5},()=>d`<div>
					<div class="checkbox"></div>
					${o.map(r=>d`<div
								class="cell"
								part=${`cell-${r.name}`}
								name=${r.name}
							></div>`)}
				</div>`)}
	</div>`};customElements.define("cosmoz-omnitable-skeleton",A(pr,{styleSheets:[mr]}));const gr=(n,e)=>{const{settingsConfig:t}=n,{processedItems:o,dataIsValid:r,filterIsTooStrict:i,loading:l,displayEmptyGroups:a,compareItemsFn:s,selectedItems:u,setSelectedItems:m,renderItem:c,renderGroup:g,error:p}=e;return d`${F(!l&&!r&&!p,()=>d`<div class="tableContent-empty">
					<slot name="empty-set-message">
						${rt({width:"96px",height:"96px",styles:"margin-right: 24px; fill: currentColor;"})}
						<div class="tableContent-empty-message">
							<h3>${C("Working set empty")}</h3>
							<p>${C("No data to display")}</p>
						</div>
					</slot>
				</div>`)}
		${F(i,()=>d`<div class="tableContent-empty">
					${rt({width:"96px",height:"96px",styles:"margin-right: 24px; fill: currentColor;"})}
					<div>
						<h3>${C("Filter too strict")}</h3>
						<p>${C("No matches for selection")}</p>
					</div>
				</div>`)}
		${F(l&&!o.length,()=>d`<div class="tableContent-empty overlay">
					<cosmoz-omnitable-skeleton
						.settingsConfig=${t}
					></cosmoz-omnitable-skeleton>
				</div>`)}
		${F(l&&o.length,()=>d`<div class="tableContent-empty overlay spinner">
					<cz-spinner></cz-spinner>
				</div>`)}
		${F(p,()=>d`<div class="tableContent-empty overlay">
					${mn({width:"96px",height:"96px",styles:"margin-right: 24px; fill: currentColor;"})}
					<div class="tableContent-empty-message">
						<h3>${C("Error loading data")}</h3>
						<p>${p.message}</p>
					</div>
				</div>`)}
		<div class="tableContent-scroller" id="scroller" part="scroller">
			<cosmoz-grouped-list
				id="groupedList"
				.data=${o}
				.selectedItems=${u}
				@selected-items-changed=${Me(m)}
				.displayEmptyGroups=${a}
				.compareItemsFn=${s}
				.renderItem=${c}
				.renderGroup=${g}
			></cosmoz-grouped-list>
			<slot name="extraContent"></slot>
		</div>`},hr=q`
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
`,fr=q`
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
`,de=n=>{const e=parseInt(n,10);return isFinite(e)?e:void 0},br=n=>{const{config:e}=n,{settings:t,setSettings:o,collapsed:r,requestTween:i}=e,l=Ce({collapsed:r,settings:t.columns,requestTween:i,setSettings:S(a=>o(s=>({...s,columns:a})),[o])});return{...e,onDown:S(a=>{a.target.closest(".pull")&&(l.handle=a.currentTarget)},[l]),onDragStart:S(a=>{const{target:s}=a,u=de(s.dataset.index);if(!l.handle?.contains(s)||u==null)return a.preventDefault();l.handle=null,a.dataTransfer.effectAllowed="move",a.dataTransfer.setData("omnitable/sort-index",u),a.dataTransfer.setData("text/plain",u),setTimeout(()=>s.classList.add("drag"),0),s.addEventListener("dragend",m=>m.target.classList.remove("drag"),{once:!0})},[l]),onDragEnter:S(a=>{const s=a.currentTarget;s===a.target&&(a.preventDefault(),a.dataTransfer.dropEffect="move",s.classList.add("dragover"))},[]),onDragOver:S(a=>{a.preventDefault(),a.currentTarget.classList.add("dragover")},[]),onDragLeave:S(a=>{const s=a.currentTarget;s.contains(a.relatedTarget)||s.classList.remove("dragover")},[]),onDrop:S(a=>{const s=de(a.dataTransfer.getData("omnitable/sort-index")),u=de(a.currentTarget.dataset.index),{settings:m,setSettings:c,requestTween:g}=l;a.currentTarget.classList.remove("dragover"),a.preventDefault();const p=m.slice();p.splice(u+(s>=u?0:-1),0,p.splice(s,1)[0]),g?.(),c(p)},[l]),onToggle:S(a=>{const{settings:s,setSettings:u,requestTween:m}=l,c=s.map(p=>({...p,disabled:p.disabled||l.collapsed?.some(h=>h.name===p.name)})),g=de(a.target.closest("[data-index]")?.dataset.index);c.splice(g,1,{...s[g],disabled:!a.target.checked,priority:a.target.checked?s.reduce((p,h)=>Math.max(p,h.priority),0)+1:s[g].priority}),m?.(),u(c)},[l])}},xr=[gn({apply({availableHeight:n,elements:e}){Object.assign(e.floating.style,{maxHeight:`${Math.max(0,n)}px`})}}),...pn],vr=({onDragStart:n,onDragEnter:e,onDragOver:t,onDragLeave:o,onDrop:r,onDown:i,onToggle:l,collapsed:a,filters:s})=>(u,m)=>{const c=!!a?.find(p=>p.name===u.name),g=!u.disabled&&!c;return d` <div
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
			<button class="pull">${Go}</button>
			<label class="title" ?has-filter=${!He(s[u.name]?.filter)}
				>${u.title}</label
			>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${g}
				@click=${l}
				.indeterminate=${c}
			/>
		</div>`},yr=n=>{const{settings:e,settingsId:t,onSave:o,onReset:r,hasChanges:i,opened:l,setOpened:a,...s}=br(n);return d` <div class="headline">
			${C("Sort and filter")}
			<button
				class="close"
				@click=${u=>{const m=u.currentTarget;m?.focus(),m?.blur()}}
			>
				${Ho}
			</button>
		</div>

		<div class="contents">
			<div
				class="heading"
				?data-opened=${l.columns}
				@click=${()=>a(u=>({...u,columns:!u.columns}))}
				part="columns columns-heading"
			>
				${C("Columns")} ${Ae}
			</div>
			<cosmoz-collapse
				?opened="${l.columns}"
				part="columns columns-content"
			>
				<div class="list">${e.columns?.map(vr(s))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${l.sort}
				@click=${()=>a(u=>({...u,sort:!u.sort}))}
			>
				${C("Sort on")} ${Ae}
			</div>
			<cosmoz-collapse ?opened=${l.sort}> ${Xo()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${l.group}
				@click=${()=>a(u=>({...u,group:!u.group}))}
				part="groups groups-heading"
			>
				${C("Group on")} ${Ae}
			</div>
			<cosmoz-collapse ?opened=${l.group} part="groups groups-heading"
				>${qo()}</cosmoz-collapse
			>
		</div>

		${F(t,()=>d`<div class="buttons">
					<button
						class="button reset"
						@click=${r}
						?disabled=${!i}
					>
						${C("Reset")}
					</button>
					<button class="button" @click=${o} ?disabled=${!i}>
						${C("Save")}
					</button>
				</div>`)}`};customElements.define("cosmoz-omnitable-settings-ui",A(yr,{styleSheets:[Se(hr)]}));const $r=({config:n,newLayout:e})=>d`
	<cosmoz-dropdown
		.placement="${e?"bottom-start":"bottom-end"}"
		.middleware="${xr}"
	>
		<div title="${C("Sort and filter")}" slot="button">
			${F(e,()=>d`<div class="headerDots">...</div>`,()=>d` <svg viewBox="0 0 24 24" width="24" fill="currentColor">
						<circle cx="10" cy="18" r="2"></circle>
						<circle cx="10" cy="12" r="2"></circle>
						<circle cx="10" cy="6" r="2"></circle>
					</svg>`)}
			${F(n?.badge,()=>d`<div class="badge"></div>`)}
		</div>
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${n}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`;customElements.define("cosmoz-omnitable-settings",A($r,{styleSheets:[Se(fr)]}));const ye=["sortOn","descending","groupOn","groupOnDescending"],me=n=>e=>typeof e=="object"&&e!==null&&"name"in e&&e.name===n,wr=(n=[],e=[],t=[])=>{const o=e.filter(l=>n.some(me(l.name))),r=n.filter(l=>l.name!=null&&!e.some(me(l.name))&&!t.some(me(l.name))),i=t.filter(l=>!e.some(me(l.name)));return[...o,...i.flatMap(l=>{const a=n.find(s=>s.name===l.name);return a?{...l,title:a.title??l.title??"",minWidth:parseInt(a.minWidth??"0",10)}:[]}),...r.map(l=>{const{name:a,title:s,priority:u,minWidth:m,width:c,flex:g}=l;return{name:a??"",title:s??"",priority:u??0,minWidth:parseInt(m??"0",10),width:parseInt(c??"0",10),flex:parseInt(g??"0",10)}})]},zr=(n,e)=>({...e,...Ne(Array.from(ye))(n),columns:n.columns?.map(Ne(["name","priority","width","flex","disabled"]))}),Sr=({columns:n,settings:e,savedSettings:t,initial:o})=>({...Object.fromEntries(ye.flatMap(i=>o?.[i]!=null?[[i,o[i]]]:[])),...t?Ne(Array.from(ye))(t):{},...e,columns:wr(n,e?.columns,t?.columns)}),Cr=({prefix:n="omnitable-"}={})=>({write:async(t,o)=>{const r=n+t;try{o?localStorage.setItem(r,JSON.stringify(o)):localStorage.removeItem(r)}catch(i){console.error(i)}},read:async t=>{if(!t)return null;try{const o=localStorage.getItem(n+t);return o==null?null:JSON.parse(o)}catch(o){return console.error(o),null}}}),kr=Ft(Cr),Ir=()=>{const n=Be(kr);return O(()=>n(),[n])},_r=(n,e,t,o)=>{const[r,i]=N(n?void 0:null),{read:l,write:a}=Ir();return E(async()=>{n&&i(await l(n))},[n,l]),{settingsId:n,savedSettings:r,onSave:S(async()=>{if(!n)return;const s=zr(e,r);await a(n,s),t(),i(s)},[e,r]),onReset:S(async s=>{t(),s.shiftKey&&(await a(n),i(null)),o?.()},[o]),hasChanges:e!=null}},Fr=({settingsId:n,host:e})=>{const t=O(()=>Object.fromEntries(ye.map(x=>[x,e[x]])),[]),o=Ge(),r=S(()=>{o.current?.(t)},[t]),[i,l]=N(),[a,s]=N({columns:!0,sort:!0}),{savedSettings:u,...m}=_r(n,i,l,r),{enabledColumns:c,disabledFiltering:g}=e,p=Qn(e,{enabledColumns:c,disabledFiltering:g}),h=O(()=>Sr({columns:p,settings:i,savedSettings:u,initial:t}),[p,i,u]),$=O(()=>h.columns.map(x=>p.find(b=>b.name===x.name)).filter(Boolean),[p,...h.columns.map(x=>x.name)]);return{...m,savedSettings:u,opened:a,setOpened:s,settings:h,columns:$,setSettings:l,resetRef:o}},yt=n=>Number.isFinite(n)?n:0,Or=(n,e)=>{const t=[];let[o,r]=n.reduce(([m,c],{width:g,flex:p})=>[m+g,c+p],[0,0]),i=e-o,l=yt(i/r),a=0,s=0,u=0;for(let m=0;m<n.length;m++){const{width:c,minWidth:g,flex:p}=n[m],h=i>=0?l*p:c*i/o;if(g>c+h){a+=c,s+=g,u+=p,t[m]=g;continue}if(p===0){a+=c,s+=c,t[m]=c;continue}}o-=a,i=e-s-o,r-=u,l=yt(i/r);for(let m=0;m<n.length;m++){if(t[m]!=null)continue;const{width:c,flex:g}=n[m],p=i>=0?l*g:c*i/o;t[m]=c+p}return t},Dr=(n,e)=>{const t=ur(n,l=>l!=null&&l>0),o=(l,a)=>`.cell[name="${l}"], cosmoz-omnitable-skeleton::part(cell-${l}){width: ${Math.floor(a)}px;padding: 0 min(3px, ${a/2}px)}`,r=l=>`cosmoz-omnitable-resize-nub[name="${l}"]{display:none}`,i=l=>`cosmoz-omnitable-resize-nub[name="${l}"], .cell[name="${l}"]{display:none}`;return e.map((l,a)=>{const s=n[a];if(s==null||s===0)return i(l.name);const u=o(l.name,s);return a===t?`${u}
${r(l.name)}`:u}).join(`
`)},Xt=(n,e,t)=>{const o=n.filter(a=>!a.hidden),r=o.reduce((a,{width:s})=>a+s,0);if(o.length>1&&r>e)return Xt(o.slice(1),e,t);const i=o.reduce(([a,s],u,m)=>[Math.max(a,u.index),u.index>a?m:s],[-1,-1])[1];return i!==-1&&(o[i].flex=1),Or(o,e).reduce((a,s,u)=>(a[o[u].index]=s,a),new Array(t).fill(void 0))},Vr=(n,e)=>n.length===0?".cell {display: none;}":Dr(n,e),Ar=20,Tr=44,Er=24,Ut=Ar+Tr+Er,Lr=(n,e)=>E(()=>{const t=([r])=>{r.contentRect?.width!==0&&e(r.contentRect.width-Ut)},o=new ResizeObserver(t);return o.observe(n),()=>o.unobserve(n)},[]),Rr=n=>{const[e,t]=N(()=>n.getBoundingClientRect().width-Ut);return Lr(n,t),e},Mr=({canvasWidth:n,groupOnColumn:e,config:t,miniColumn:o})=>O(()=>{if(!Array.isArray(t)||n==null||n===0)return[];const r=t.map((i,l)=>({minWidth:i.minWidth,width:i.width,flex:i.flex,priority:i.priority,name:i.name,index:l,hidden:i.name===e?.name||i.disabled})).map(i=>o?{...i,hidden:o.name!==i.name}:i).sort(({index:i,priority:l},{index:a,priority:s})=>l===s?a-i:l-s);return Xt(r,n,r.length)},[n,e,t]),Nr=({host:n,canvasWidth:e,columns:t})=>{const o=n.miniBreakpoint??480,r=O(()=>e<=o,[e,o]),i=O(()=>r?t?.filter(u=>u.mini!=null).sort((u,m)=>(u.mini??0)-(m.mini??0)):[],[t,r]),[l,...a]=i??[],s=!!l;return E(()=>{n.toggleAttribute("mini",s)},[s]),{isMini:s&&r,miniColumn:l,miniColumns:a}},jr=({host:n,canvasWidth:e,layout:t,setSettings:o,requestTween:r})=>{const i=Ge();i.current=l=>{r(),o(a=>{const s=a.columns,{detail:{newWidth:u,column:m}}=l,c=s.findIndex(h=>h.name===m.name),g=[],p=s.reduce((h,$)=>Math.max(h,$.priority),-1/0);for(let h=0;h<t.length;h++)if(g[h]={...s[h]},h<c&&t[h]&&(g[h].width=t[h],g[h].flex=0,g[h].priority=p),h===c){const $=t.reduce((x,b,v)=>v<c&&b?x-b:x,e);g[h].width=Math.min($,Math.max(u,s[h].minWidth)),g[h].flex=0,g[h].priority=p}return{...a,columns:g}})},E(()=>{const l=a=>i.current?.(a);return n.addEventListener("column-resize",l),()=>n.removeEventListener("column-resize",l)},[])},Pr=(n,e)=>{const t=O(()=>{let o=!1,r;const i=()=>{if(!o)return;r=requestAnimationFrame(i),n()&&(o=!1)};return{start:()=>{o=!0,cancelAnimationFrame(r),r=requestAnimationFrame(i)},stop:()=>{o=!1,cancelAnimationFrame(r)}}},[]);E(()=>{t.start()},e),E(()=>()=>t.stop(),[])},Br=(n=0,e=0)=>Math.abs(n-e)<.1,Hr=(n,e=1.9,t=hn,o)=>{const r=Ce({target:n,speedFactor:e,onConverge:o}),i=S(()=>{if(!r.tween)return r.tween=r.target,t(r.tween),r.onConverge?.(),!0;if(r.target.every((l,a)=>r.tween[a]===l))return t(r.tween),r.onConverge?.(),!0;if(r.tween=r.target.map((l,a)=>Br(r.tween[a],l)?l:(r.tween[a]??0)+((l??0)-(r.tween[a]??0))/r.speedFactor||0),t(r.tween),r.tween.every((l,a)=>l===r.target[a]))return r.onConverge?.(),!0},[]);Pr(i,[n])},Gr=n=>{const e=O(()=>new CSSStyleSheet,[]);return E(()=>{n.shadowRoot.adoptedStyleSheets=[...n.shadowRoot.adoptedStyleSheets,e]},[]),e},Wr=({host:n,columns:e,settings:t,setSettings:o,resizeSpeedFactor:r,sortAndGroupOptions:i})=>{const l=Rr(n),{isMini:a,miniColumn:s,miniColumns:u}=Nr({host:n,canvasWidth:l,columns:e}),{groupOnColumn:m}=i,c=Mr({canvasWidth:l,groupOnColumn:m,miniColumn:s,config:t.columns}),g=Gr(n),p=O(()=>t.columns.reduce((y,f,w)=>c[w]!=null||f.name===m?.name||f.disabled?y:[...y,e.find(z=>z.name===f.name)],[]),[e,t,c]),[h,$]=N(1),x=S(()=>$(r??1.9),[r]),b=S(()=>$(1),[]),v=Ce({columns:t.columns});return Hr(c,h,y=>{const f=Vr(y,v.columns);g.replace(f)},b),jr({host:n,canvasWidth:l,layout:c,setSettings:y=>o(y(t)),requestTween:x}),{isMini:a,collapsedColumns:p,miniColumns:u,requestTween:x}},qr=({host:n,...e})=>{const{csvFilename:t="omnitable.csv",xlsxFilename:o="omnitable.xlsx",xlsxSheetname:r="Omnitable",topPlacement:i="top-end"}=n;return{csvFilename:t,xlsxFilename:o,xlsxSheetname:r,topPlacement:i,...e}},Xr=({host:n,selectedItems:e,data:t,sortAndGroupOptions:o,collapsedColumns:r,settings:i,filterFunctions:l,settingS:a,filters:s,requestTween:u,...m})=>{const c=e===M||t&&t.length>0&&e.length===t.length,g=x=>{x.target.checked?n.shadowRoot.querySelector("#groupedList").selectAll():n.shadowRoot.querySelector("#groupedList").deselectAll()},{groupOnColumn:p}=o,h=O(()=>[p,...r,...i.columns.filter(x=>x.disabled)].some(x=>x&&Object.keys(l).includes(x.name)),[l,i,r]),$=O(()=>({...a,collapsed:r,badge:h,filters:s,requestTween:u}),[a,r,h,s,u]);return E(()=>{const x=n.shadowRoot.querySelector("#tableContent"),b=new ResizeObserver(v=>requestAnimationFrame(()=>{n.style.setProperty("--ot-height",v[0]?.contentRect.height+"px")}));return b.observe(x),()=>b.unobserve(x)},[]),{allSelected:c,onAllCheckboxChange:g,data:t,settingsConfig:$,filters:s,groupOnColumn:p,sortAndGroup:o.sortAndGroup,...m}},Kt=d`
	<svg
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
	>
		<g>
			<path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
		</g>
	</svg>
`,Ur=n=>n?"groupRow groupRow-folded":"groupRow",Kr=({item:n,index:e})=>t=>F(t?.length>0,()=>d`
				<div class="itemRow-minis" part="item-minis">
					${t.map(o=>d`<div
								class="itemRow-mini"
								part="item-mini item-mini-${o.name}"
							>
								${(o.renderMini??o.renderCell)(o,{item:n,index:e})}
							</div>`)}
				</div>
			`),Qr=({columns:n,collapsedColumns:e,miniColumns:t,onItemClick:o,onCheckboxChange:r,dataIsValid:i,groupOnColumn:l,onItemChange:a,rowPartFn:s})=>(u,m,{selected:c,expanded:g,toggleCollapse:p})=>d`
		<div
			?selected=${c}
			part="${["itemRow",`itemRow-${u[ve]}`,s?.(u,m)].filter(Boolean).join(" ")}"
			.dataIndex=${u[ve]}
			.dataItem=${u}
			class="itemRow"
			@click=${o}
		>
			<div class="itemRow-wrapper" part="itemRow-wrapper">
				<input
					class="checkbox"
					type="checkbox"
					part="checkbox"
					.checked=${c}
					.dataItem=${u}
					@input=${r}
					?disabled=${!i}
				/>
				<cosmoz-omnitable-item-row
					part="itemRow-inner"
					.columns=${n}
					.index=${m}
					.selected=${c}
					.expanded=${g}
					.item=${u}
					.groupOnColumn=${l}
					.onItemChange=${a}
				>
				</cosmoz-omnitable-item-row>
				<button
					class="expand"
					?hidden="${He(e.length)}"
					?aria-expanded="${g}"
					@click="${p}"
				>
					${Kt}
				</button>
			</div>
			${Kr({item:u,index:m})(t)}
		</div>
		<cosmoz-omnitable-item-expand
			.columns=${e}
			.item=${u}
			.index=${m}
			?selected=${c}
			?expanded=${g}
			.groupOnColumn=${l}
			part="item-expand"
		>
		</cosmoz-omnitable-item-expand>
	`,Jr=({onCheckboxChange:n,dataIsValid:e,groupOnColumn:t})=>(o,r,{selected:i,folded:l,toggleFold:a})=>d` <div
			class="${Ur(l)}"
			part="groupRow groupRow-${o[ve]}"
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
				${Kt}
			</button>
		</div>`,Yr=({host:n,error:e,dataIsValid:t,processedItems:o,columns:r,collapsedColumns:i,miniColumns:l,sortAndGroupOptions:a,rowPartFn:s,...u})=>{const{loading:m=!1,displayEmptyGroups:c=!1,compareItemsFn:g}=n,p=Ge({shiftKey:!1,ctrlKey:!1}),h=S(v=>{const y=v.target.dataItem,f=v.target.checked;p.current.shiftKey?n.shadowRoot.querySelector("#groupedList").toggleSelectTo(y,f):p.current.ctrlKey?(v.target.checked=!0,n.shadowRoot.querySelector("#groupedList").selectOnly(y)):n.shadowRoot.querySelector("#groupedList").toggleSelect(y,f),v.preventDefault(),v.stopPropagation()},[]);E(()=>{const v=({shiftKey:y,ctrlKey:f})=>{p.current={shiftKey:y,ctrlKey:f}};return window.addEventListener("keydown",v),window.addEventListener("keyup",v),()=>{window.removeEventListener("keydown",v),window.removeEventListener("keyup",v)}},[]);const $=S(v=>{const y=v.composedPath();y.slice(0,y.indexOf(v.currentTarget)).find(w=>w.matches?.("a, .checkbox, .expand"))||n.dispatchEvent(new window.CustomEvent("omnitable-item-click",{bubbles:!0,composed:!0,detail:{item:v.currentTarget.dataItem,index:v.currentTarget.dataIndex}}))},[]),{groupOnColumn:x}=a,b=S((v,y)=>f=>Jn(n,v,y,f),[]);return{...u,processedItems:o,dataIsValid:t,filterIsTooStrict:t&&o.length<1,loading:m,compareItemsFn:g,displayEmptyGroups:c,error:e,renderItem:O(()=>Qr({columns:r,collapsedColumns:i,miniColumns:l,onItemClick:$,onCheckboxChange:h,dataIsValid:t,groupOnColumn:x,onItemChange:b,rowPartFn:s}),[r,i,$,h,t,x,b,s]),renderGroup:O(()=>Jr({onCheckboxChange:h,dataIsValid:t,groupOnColumn:x}),[h,t,x])}},Zr=(n,e)=>{if(n===e)return 0;if(n==null)return-1;if(e==null)return 1;const t=typeof n,o=typeof e;return t==="object"&&o==="object"?n.toString()<e.toString()?-1:1:t==="number"&&o==="number"?n-e:t==="string"&&o==="string"?n<e?-1:1:t==="boolean"&&o==="boolean"?n?-1:1:(console.warn("unsupported sort",t,n,o,e),0)},Te=(n,e)=>(t,o)=>Zr(n(t),n(o))*(e?-1:1),ei=n=>n.replace(/([a-z0-9])([A-Z])/gu,"$1-$2").toLowerCase(),$t=(n,e)=>{!n||!e||Object.entries(e).forEach(([t,o])=>{n[j].__ownChange=!0,n[j][t]=o,n[j].__ownChange=!1,n[j].dispatchEvent(new CustomEvent(`${ei(t)}-changed`,{bubbles:!0,detail:{value:o}}))})},Ee=(n,e)=>Object.assign(n,{[ve]:e}),pe=Symbol("unparsed"),ti=({data:n,columns:e,hashParam:t,sortAndGroupOptions:o,noLocalSort:r,noLocalFilter:i})=>{const{groupOnColumn:l,groupOnDescending:a,sortOnColumn:s,descending:u}=o,m=S(([f,w])=>{const z=e.find(({name:I})=>I===f);return z==null?[f,void 0]:[f,w.filter&&z.serializeFilter(z,w.filter)]},[e]),c=S(([f,w])=>{const z=e.find(({name:_})=>_===f);if(z==null)return[f,{[pe]:w}];const I={filter:z.deserializeFilter(z,w)};return $t(z,I),[f,I]},[e]),[g,p]=Z({},t,{multi:!0,suffix:"-filter--",write:m,read:c}),h=S((f,w)=>p(z=>{const I=we(w,z[f]);return $t(e.find(_=>_.name===f),I),{...z,[f]:{...z[f],...I}}}),[e,p]),$=O(()=>Object.values(g).map(f=>f.filter),[g]),x=O(()=>Object.fromEntries(e.map(f=>[f.name,!f.noLocalFilter&&f.getFilterFn(f,g[f.name]?.filter)]).filter(([,f])=>!!f)),[e,...$]),b=O(()=>!Array.isArray(n)||n.length===0?[]:Object.entries(x).length===0||i?n.slice():n.filter(f=>Object.values(x).every(w=>w(f))),[n,x,i]),v=O(()=>{if(!r&&!l&&s!=null&&s.sortOn!=null)return b.slice().sort(Te(f=>s.getComparableValue({...s,valuePath:s.sortOn},f),u));if(l!=null&&l.groupOn!=null){const f=b.reduce((w,z)=>{const I=l.getComparableValue({...l,valuePath:l.groupOn},z);if(I===void 0)return w;let _=w.find(X=>X.id===I);return _?(_.items.push(z),w):(_={id:I,name:I,items:[z]},[...w,_])},[]);return f.sort(Te(w=>l.getComparableValue({...l,valuePath:l.groupOn},w.items[0]),a)),!s||r?f:f.filter(w=>Array.isArray(w.items)).map(w=>(w.items.sort(Te(z=>s.getComparableValue({...s,valuePath:s.sortOn},z),u)),w))}return b},[b,l,a,s,u,r]),y=O(()=>{let f=0,w=0;const z=[];return v.forEach(I=>{if(Array.isArray(I.items)){Ee(I,w++),I.items.forEach(_=>{Ee(_,f++),z.push(_)});return}return Ee(I,f++),z.push(I)},[]),z},[v]);return E(()=>{p(f=>Object.values(f).some(z=>z[pe]!=null)?Object.fromEntries(Object.entries(f).map(([z,I])=>I[pe]==null?[z,I]:c([z,I[pe]]))):f)},[c]),{processedItems:v,visibleData:y,filters:g,filterFunctions:x,setFilterState:h}},ni=n=>{const e=o=>{const r=n.data.indexOf(o);if(r<0)return null;const i=n.data.splice(r,1);if(n.data=n.data.slice(),Array.isArray(i)&&i.length>0)return i[0]},t=(o,r)=>{n.data.splice(o,1,r),n.data=n.data.slice()};return{removeItem:e,removeItems(o){const r=[];for(let i=o.length-1;i>=0;i-=1){const l=n.removeItem(o[i]);l!=null&&r.push(l)}return r},replaceItemAtIndex:t,replaceItem(o,r){const i=n.data.indexOf(o);if(i>-1)return t(i,r)},selectItem(o){n.shadowRoot.querySelector("#groupedList").select(o)},selectAll(){n.shadowRoot.querySelector("#groupedList").selectAll()},deselectAll(){n.shadowRoot.querySelector("#groupedList").deselectAll()},deselectItem(o){n.shadowRoot.querySelector("#groupedList").deselect(o)},isItemSelected(o){return n.shadowRoot.querySelector("#groupedList").isItemSelected(o)}}},oi=({host:n,visibleData:e,filters:t,...o})=>{const{setFilterState:r}=o,i=O(()=>ni(n),[]),[l,a]=Vt("selectedItems",[]);je(o,Object.values(o)),je(i,Object.values(i)),E(()=>{const u=m=>r(m.detail.name,c=>({...c,...m.detail.state}));return n.addEventListener("legacy-filter-changed",u),()=>n.removeEventListener("legacy-filter-changed",u)},[]),U("visibleData",e),U("sortedFilteredGroupedItems",o.sortedFilteredGroupedItems),U("sortOn",o.sortOn),U("descending",o.descending),U("isMini",o.isMini);const s=O(()=>Object.fromEntries(Object.entries(t).filter(([,{filter:u}])=>u!==void 0).map(([u,{filter:m}])=>[u,m])),[t]);return U("filters",s,Object.values(s)),{selectedItems:l,setSelectedItems:a}},ri=n=>{const{hashParam:e,settingsId:t,data:o,resizeSpeedFactor:r,noLocal:i,noLocalSort:l=i,noLocalFilter:a=i,error:s,rowPartFn:u}=n,m=Fr({settingsId:t,host:n}),{settings:c,setSettings:g,columns:p,resetRef:h,savedSettings:$}=m,x=$!==void 0,b=Jo(p,e,{settings:c,setSettings:g,resetRef:h,ready:x}),{processedItems:v,visibleData:y,filters:f,setFilterState:w,filterFunctions:z}=ti({data:o,columns:p,hashParam:e,sortAndGroupOptions:b,noLocalSort:l,noLocalFilter:a}),{isMini:I,collapsedColumns:_,miniColumns:X,requestTween:G}=Wr({host:n,columns:p,settings:c,setSettings:g,resizeSpeedFactor:r,sortAndGroupOptions:b}),Ze=o&&Array.isArray(o)&&o.length>0,{selectedItems:De,setSelectedItems:et}=oi({host:n,visibleData:y,sortedFilteredGroupedItems:v,columns:p,filters:f,setFilterState:w,isMini:I,...b}),tt=Xr({host:n,selectedItems:De,sortAndGroupOptions:b,dataIsValid:Ze,data:o,columns:p,filters:f,collapsedColumns:_,settings:c,filterFunctions:z,settingS:m,setFilterState:w,hideSelectAll:n.hideSelectAll===!0,requestTween:G});return{header:tt,list:Yr({host:n,error:s,dataIsValid:Ze,processedItems:v,selectedItems:De,setSelectedItems:et,columns:p,collapsedColumns:_,miniColumns:X,sortAndGroupOptions:b,rowPartFn:u}),footer:qr({host:n,selectedItems:De,allSelected:tt.allSelected,setSelectedItems:et,columns:p,enableSelectAll:n.enableSelectAll===!0,allItemsCount:n.allItemsCount})}};customElements.define("cosmoz-grouped-list-row",class extends HTMLElement{get item(){return this._item}set item(e){this._item=e,this._render()}get index(){return this._index}set index(e){this._index=e,this._render()}get renderFn(){return this._renderFn}set renderFn(e){this._renderFn=e,this._render()}_render(){this._item==null||this._index==null||this._renderFn==null||Le(this._renderFn(this._item,this._index),this)}});const ii={group:Symbol("group")},Oe=(n,e)=>(e.has(n)||e.set(n,{}),e.get(n)),li=(n,e)=>!!Oe(n,e).expanded,ai=(n,e)=>!!Oe(n,e).folded,Pe=n=>n?n.items instanceof Array:!1,si=n=>{if(!Array.isArray(n)||n.length===0)return;const e=Array.isArray(n[0]?.items);if(!n.every(o=>Array.isArray(o.items)===e))throw new Error("Data must be homogeneous.")},ui=(n,e,t)=>Array.isArray(n)?(si(n),n.reduce((r,i)=>{const l=i;return l.items?l.items.length?Oe(i,t).folded?r.concat(i):r.concat(i,l.items.map(a=>Object.assign(a,{[ii.group]:i}))):e?r.concat(i):r:r.concat(i)},[])):void 0,ci=(n,...e)=>typeof n=="function"?n(...e):n,di=(n,e)=>n===e,mi=()=>{const[n,e]=N(()=>[new WeakMap]);return{setItemState:S((o,r)=>e(([i])=>{const l=Oe(o,i);return Object.assign(l,ci(r,l)),[i]}),[]),state:n[0],signal:n}},pi=()=>{const{setItemState:n,state:e,signal:t}=mi(),o=S((i,l)=>{Pe(i)&&n(i,a=>({folded:l!==void 0?l:!a.folded}))},[]),r=S((i,l)=>{Pe(i)||n(i,a=>({expanded:l!==void 0?!l:!a.expanded}))},[]);return{state:e,signal:t,toggleFold:o,toggleCollapse:r}},gi=({compareItemsFn:n,data:e,flatData:t})=>{const[o,r]=Vt("selectedItems",()=>[]),[i,l]=N(),a=S(b=>o===M||o.includes(b),[o]),s=S(b=>o===M||(b?.items?.every(a)??!1),[o,a]),u=S(b=>a(b)||s(b),[a,s]),m=S(b=>{const y=b.items??[b];r(f=>f===M?f:[...f,...y.filter(w=>!f.includes(w))]),l(b)},[]),c=S(b=>{const y=b.items??[b];r(f=>f===M?(t??[]).filter(w=>!y.includes(w)):f.filter(w=>!y.includes(w))),l(b)},[t]),g=S(b=>{r(b.items?.slice()||[b]),l(b)},[]),p=S(()=>{r(e.flatMap(b=>b.items||b)),l(void 0)},[e]),h=S(()=>{r([]),l(void 0)},[]),$=S((b,v=!u(b))=>v?m(b):c(b),[u]),x=S((b,v)=>{if(!t)return;const y=i?t.findIndex(z=>n(z,i)):-1;if(y<0)return $(b,v);const[f,w]=[y,t.indexOf(b)].sort((z,I)=>z-I);t.slice(f,w+1).forEach((z,I,_)=>{I>0&&I<_.length-1&&Pe(z)||$(z,v)}),l(b)},[t,n,$]);return E(()=>r(b=>b!==M&&b.length>0&&t?t.filter(v=>b.find(y=>n(v,y))):b),[t]),{selectedItems:o,isItemSelected:a,isGroupSelected:s,isSelected:u,select:m,deselect:c,selectOnly:g,selectAll:p,deselectAll:h,toggleSelect:$,toggleSelectTo:x}},hi={host:{position:"relative",display:"flex",flexDirection:"column"}},fi=n=>{const{data:e,renderItem:t,renderGroup:o,displayEmptyGroups:r,compareItemsFn:i=di}=n,{toggleFold:l,toggleCollapse:a,state:s,signal:u}=pi(),m=O(()=>ui(e,r,s),[e,r,u]),{selectedItems:c,isItemSelected:g,isGroupSelected:p,isSelected:h,select:$,deselect:x,selectOnly:b,selectAll:v,deselectAll:y,toggleSelect:f,toggleSelectTo:w}=gi({compareItemsFn:i,data:e,flatData:m}),z=S((_,X)=>Array.isArray(_.items)?o(_,X,{selected:p(_),folded:ai(_,s),toggleSelect:G=>f(_,typeof G=="boolean"?G:void 0),toggleFold:()=>l(_)}):t(_,X,{selected:g(_),expanded:li(_,s),toggleSelect:G=>f(_,typeof G=="boolean"?G:void 0),toggleCollapse:()=>a(_)}),[t,o,c,f,u]);Ct(()=>{Object.assign(n.style,hi.host)},[]);const I={toggleFold:l,toggleCollapse:a,isItemSelected:g,isGroupSelected:p,isSelected:h,select:$,deselect:x,selectOnly:b,selectAll:v,deselectAll:y,toggleSelect:f,toggleSelectTo:w};return je(I,Object.values(I)),{renderRow:z,flatData:m}},bi=({renderRow:n,flatData:e})=>fn({items:e,renderItem:(t,o)=>d`<cosmoz-grouped-list-row
				.item=${t}
				.index=${o}
				.renderFn=${n}
			></cosmoz-grouped-list-row>`}),xi=n=>bi(fi(n));customElements.define("cosmoz-grouped-list",A(xi,{useShadowDOM:!1}));const vi=n=>window.ShadyCSS?.ApplyShim?.transformCssText?.(n)||n,yi=n=>{const{header:e,list:t,footer:o}=ri(n);return d`
		<style>
			${bn([],()=>vi(ir))}
		</style>

		<div class="mainContainer">
			${dr(e)}
			<div class="tableContent" id="tableContent">
				${gr(e,t)}
			</div>
			${cr(o)}
		</div>

		<div id="columns">
			<slot id="columnsSlot"></slot>
		</div>
	`};customElements.define("cosmoz-omnitable",A(yi,{observedAttributes:["hash-param","sort-on","group-on","descending","group-on-descending","hide-select-all","settings-id","no-local","no-local-sort","no-local-filter","disabled-filtering","loading","mini-breakpoint","inline","enable-select-all"]}));const $e=`
	<slot name="actions" slot="actions"></slot>
`;d(Object.assign([$e],{raw:[$e]}));St(Object.assign([$e],{raw:[$e]}));const wt=(n,e,t)=>{let o=String(n),r=-1;const i=t,l=e-o.length;for(;++r<l;)o=i+o;return o},D=(n,e)=>Math.floor(Math.random()*(e-n+1))+n,$i=()=>"2015-"+wt(D(1,12),2,"0")+"-"+wt(D(1,28),2,"0"),wi=()=>{const n=D(0,20);return n===1?new Date(2015,3,2,14,26,10,299):n===2?new Date(2016,4,2,10,9,10,444):n===3?new Date(2016,4,2,10,9,10,443):n===4?new Date(2016,4,2,10,9,10,442):new Date(D(2014,2017),D(1,12),D(1,28),D(0,23),D(0,59),D(0,59),D(0,999))},Qt=(n,e,t)=>{const o=D(n,e),r=[],i=["Lorem ipsum dolor sit amet","Nunc tristique","Curabitur vestibulum","Cras laoreet","Himenaeos","maximus diam purus at mauris"],l=["SEK","USD","EUR","AUD"];let a=0;for(let s=0;s<o;s+=1){const u="Group "+s,m=s*2+1;for(let c=0;c<m;c+=1){const g=[],p=[],h=[],$=a%10;for(let x=0;x<$;x+=1)g.push("Item "+x),p.push({name:"Item "+x,value:"item-value-"+x}),h.push({value:"cat-"+x,label:"Category "+x});r.push({id:a,name:u+" item "+c,value:D(0,1e4),bool:D(0,100)>50,object:{value:D(0,1e4),label:"Random string "+D(1,t)},sub:{subProp:i[a%i.length]},randomString:"Random string "+D(1,t),randomString2:"Random string 2 "+D(1,t),randomString3:"Random string 3 "+D(1,t),randomString4:"Random string 4 "+D(1,t),date:wi(),dateJSON:$i(),amount:{amount:D(10,100),currency:l[a%l.length]},group:u,list:g,objectList:p,categories:a%7===0?null:h}),a+=1}}return r},_i={title:"Components/ComsmozOmnitableFullDemo",component:"cosmoz-omnitable",tags:["autodocs"],args:{loading:!1,locale:"en",sortOn:"",groupOn:"",descending:!1,groupOnDescending:!1,hashParam:"",settingsId:"",selectedItems:[],disabledFiltering:!1,enableSelectAll:!1,allItemsCount:1e4},argTypes:{loading:{control:"boolean",description:"Show loading state",table:{defaultValue:{summary:"false"}}},locale:{control:"select",options:["en","fr","sv"],description:"Language locale",table:{defaultValue:{summary:"en"}}},selectedItems:{control:"object",description:"Show selected items"},allItemsCount:{control:"number",description:"Total number of items"},data:{control:"object",description:"Show specified items"},sortOn:{control:"text",description:'Column property name to sort on (e.g., "amount", "date", "id")'},groupOn:{control:"text",description:'Column property name to group on (e.g., "amount", "date", "id")'},descending:{control:"boolean",description:"Sort on descending"},groupOnDescending:{control:"boolean",description:"Group on descending"},hashParam:{control:"text",description:"Hash parameter for URL state management"},settingsId:{control:"text",description:"ID for storing table settings"},disabledFiltering:{control:"boolean",description:"Disable filter inputs in all column headers",table:{defaultValue:{summary:"false"}}}},render:n=>d`
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
}`,...fe.parameters?.docs?.source}}};const Fi=["TableWithLargeData","TableWithSmallData","TableWithNoData"];export{ge as TableWithLargeData,fe as TableWithNoData,he as TableWithSmallData,Fi as __namedExportsOrder,_i as default};
