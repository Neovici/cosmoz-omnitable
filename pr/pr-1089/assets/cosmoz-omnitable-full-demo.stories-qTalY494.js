import{o as xe,n as F,w as Ut,b as c,g as V,C as q,D as Kt,f as yt,F as Qt,G as we,H as Le,I as C,k as R,x as $t,J,K as P,L as Me,M as zt,N as Se,l as O,A as Re,u as T,O as U,p as Ce,B as wt,q as S,P as St,Q as Pe,R as Ct,S as Yt,T as Ne,m as Be,U as Jt,V as It,W as je,X,Y as Zt,s as en}from"./iframe-Nyks0eTd.js";import{x as tn,g as I,P as D,e as nn,D as rn,t as on,a as ln,h as _t,m as an,b as Ft,s as sn,c as Ie,d as un,f as cn,i as et,j as tt,n as dn,k as mn,o as pn,l as kt,N as gn,p as hn,q as nt,r as fn,u as bn,v as xn,w as vn,y as yn,z as Ot}from"./cosmoz-collapse-Cp8zVZk6.js";import{g as At}from"./table-demo-helper-uKBeFwiu.js";import"./preload-helper-PPVm8Dsz.js";const $n=({slot:n,title:e,className:t,width:r="24",height:o="24",styles:i}={})=>c`
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
    ${F(e,()=>Ut`<title>${e}</title>`)}
    <path
      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
    />
  </svg>
`,zn=()=>c`<style>
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
</style>`;customElements.define("cz-spinner",V(zn));const wn=q`
	:host {
		display: flex;
		cursor: pointer;
	}
	:host(:not([light])) {
		position: absolute;
		right: calc(var(--cz-spacing) * -4);
		z-index: 1;
	}

	:host(:not([visible])) {
		display: none !important;
	}

	:host .icon {
		top: 10px;
		color: var(--cz-color-text-disabled);
		border-radius: var(--cz-radius-full);
		box-sizing: border-box;
		transition:
			background-color 0.25s,
			color 0.25s;
		float: right;
	}

	:host .icon:hover {
		opacity: 0.6;
	}
`,Sn=()=>c`
	<style>
		${wn}
	</style>
	${tn({className:"icon",width:"18",height:"18"})}
`;customElements.define("cosmoz-clear-button",V(Sn));const G=({valuePath:n},e)=>I(e,n),Cn=G,In=G,_n=({valuePath:n},e)=>t=>{const r=I(t,n);return r==null?!1:r.toString().toLowerCase().trim().includes(e.toLowerCase().trim())},Fn=(n,e)=>e===""||e==null?null:e,M=n=>class extends n{static get properties(){return{isOmnitableColumn:{type:Boolean,value:!0},title:{type:String},valuePath:{type:String,notify:!0},values:{type:Array,notify:!0},filter:{type:Object},noLocalFilter:{type:Boolean},disabled:{type:Boolean,value:!1,notify:!0},editable:{type:Boolean,notify:!0},loading:{type:Boolean,value:!1,notify:!0},externalValues:{type:Boolean,value:!1,notify:!0},name:{type:String},sortOn:{type:String},groupOn:{type:String},noSort:{type:Boolean,value:!1},disabledFiltering:{type:Boolean,value:!1},width:{type:String,value:"75px"},minWidth:{type:String,value:"40px"},flex:{type:String,value:"1"},cellClass:{type:String,value:"default-cell"},headerCellClass:{type:String,value:"default-header-cell"},priority:{type:Number,value:0},hidden:{type:Boolean,notify:!0},align:{type:String,value:"left"},headerAlign:{type:String,value:null},renderHeader:{type:Function},renderCell:{type:Function},renderEditCell:{type:Function},renderGroup:{type:Function},mini:{type:Number,value:null},renderMini:{type:Function}}}static get observers(){return["notifyFilterChange(filter)"]}notifyFilterChange(e){this.__ownChange||this.dispatchEvent(new CustomEvent("legacy-filter-changed",{detail:{name:this.name,state:this.legacyFilterToState(e)},bubbles:!0}))}legacyFilterToState(e){return{filter:e}}getFilterFn(){}getString(e,t){return G(e,t)}toXlsxValue(e,t){return Cn(e,t)}cellTitleFn(e,t){return this.getString(e,t)}headerTitleFn(e){return e.title}serializeFilter(e,t){return Fn(e,t)}deserializeFilter(e,t){if(t==null)return null;if(typeof t=="string")try{return window.decodeURIComponent(t)}catch{return null}return t}getComparableValue(e,t){return In(e,t)}computeSource(e,t){return t}_propertiesChanged(e,t,r){super._propertiesChanged(e,t,r),this.dispatchEvent(new CustomEvent("cosmoz-column-prop-changed",{bubbles:!0}))}},kn=n=>e=>n(t=>{if(t.inputValue===void 0&&e.target.value==="")return t;clearTimeout(t.t);const r=setTimeout(()=>n(o=>({...o,filter:o.inputValue})),1e3);return{...t,inputValue:e.target.value,t:r}}),On=n=>()=>n(e=>({...e,filter:e.inputValue})),An=n=>e=>{e.keyCode===13&&(e.preventDefault(),n(t=>({...t,filter:t.inputValue})))},Vn=n=>e=>n(t=>({...t,headerFocused:e.detail.value})),Dn=n=>()=>n(e=>({...e,filter:null,inputValue:null})),Tn=n=>n!=null&&n!=="";class En extends M(D){static get properties(){return{minWidth:{type:String,value:"55px"},editMinWidth:{type:String,value:"55px"},inputValue:{type:Object,notify:!0}}}getFilterFn(e,t){if(!(t==null||t===""))return _n(e,t)}renderCell(e,{item:t}){return c`<span class="default-column">${G(e,t)}</span>`}renderEditCell(e,{item:t},r){return c`<cosmoz-input
			variant="inline"
			type="text"
			@change=${i=>r(i.target.value)}
			.value=${G(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,inputValue:r,headerFocused:o},i){return c`<cosmoz-input
			variant="inline"
			label=${e.title}
			?disabled=${e.disabledFiltering}
			.value=${r??t}
			@value-changed=${kn(i)}
			focused=${o}
			@focused-changed=${Vn(i)}
			@keydown=${An(i)}
			@blur=${On(i)}
		>
			${F(!e.disabledFiltering,()=>c`<cosmoz-clear-button
						suffix
						slot="suffix"
						?visible=${Tn(t)}
						light
						@click=${Dn(i)}
					></cosmoz-clear-button>`)}
		</cosmoz-input>`}legacyFilterToState(e){return{filter:e,inputValue:e}}}customElements.define("cosmoz-omnitable-column",En);const Ln=["label","value","slot","always-float-label","disabled","variant"],Mn=yt`
	${Kt}

	.wrap {
		height: 40px;
	}

	#input {
		margin-top: -4px;
	}
`,Rn=n=>{const{label:e,value:t,slot:r}=n,o=c`<div
		id="input"
		part="input"
		role="button"
		class="control"
		slot=${r}
	>
		${t||""}
	</div>`;return Qt(o,{label:e})};customElements.define("cosmoz-omnitable-dropdown-input",V(Rn,{observedAttributes:Ln,styleSheets:[Mn]}));const te=({title:n,tooltip:e="",filterText:t="",onOpenedChanged:r,content:o,align:i="left",externalValues:l=null})=>{const a={filtered:!!t,...l!=null&&{[`external-values-${l}`]:!0}};return c`
		<style>
			.dropdown {
				outline: none;
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
				min-height: calc(var(--cz-spacing) * 8);
				display: flex;
				flex-direction: column;
				justify-content: center;
			}

			.dropdown-content {
				position: absolute !important;
				height: auto !important;
				top: calc(var(--cz-spacing) * -7.5);
				left: 0;
				right: 0;
				width: fit-content;
			}

			.dropdown-content h3 {
				font-size: var(--cz-text-sm);
				line-height: var(--cz-text-sm-line-height);
				font-weight: var(--cz-font-weight-medium);
				margin: 0;
				color: var(--cz-color-text-primary);
			}

			.dropdown-content {
				padding: calc(var(--cz-spacing) * 2.5);
				min-width: 120px;
				height: 100%;
				position: relative;
				text-align: left;
				background: var(--cz-color-bg-primary);
				border-radius: var(--cz-radius-sm);
				backdrop-filter: blur(16px) saturate(180%);
				-webkit-backdrop-filter: blur(16px) saturate(180%);
				box-shadow: var(--cz-shadow-md);
			}
		</style>

		<cosmoz-dropdown
			@focus=${r}
			class=${nn({...a,dropdown:!0})}
			title=${e||""}
		>
			<cosmoz-omnitable-dropdown-input
				variant="inline"
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
	`},Vt=n=>n?typeof n.close=="function"?n:Vt(n.parentElement):null,He=n=>class extends n{static get properties(){return{disabled:{type:Boolean,value:!1},filter:{type:Object,notify:!0},values:{type:Array,value(){return[]}},headerFocused:{type:Boolean,notify:!0},min:{type:Number,value:null},max:{type:Number,value:null},limits:{type:Function},autoupdate:{type:String,value:!0},locale:{type:String,value:null},align:{type:String,value:"left"},_filterInput:{type:Object,value(){return{min:null,max:null}}},_range:{type:Object,computed:"_computeRange(values.*)"},_limit:{type:Object,computed:"_computeLimit(_range, _filterInput.*, min, max)",value(){return{}}},_tooltip:{type:String,computed:"_computeTooltip(title, _filterText)"},_fromClasses:{type:String,computed:"_computeInputClasses(_filterInput.min)"},_toClasses:{type:String,computed:"_computeInputClasses(_filterInput.max)"}}}static get observers(){return["_filterInputChanged(_filterInput.*, autoupdate)","_filterChanged(filter.*)","_updateLimits(limits, headerFocused)"]}disconnectedCallback(){this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),super.disconnectedCallback()}_computeInputClasses(e){return e!=null&&e!==""?"has-value":""}toNumber(e,t,r){if(e==null||e==="")return;const o=typeof e=="number"?e:Number(e);if(Number.isNaN(o))return;if(r==null||t==null)return o;const i=this.toNumber(t);return i==null?o:r(o,i)}toValue(){return this.toNumber.apply(this,arguments)}getComparableValue(e,t){if(e==null)return;let r=e;return t!=null&&(r=this.get(t,e)),this.toValue(r)}renderValue(){}getInputString(e,t=this.valuePath){const r=this.toValue(this.get(t,e));return this._toInputString(r)}_computeRange(e){const t=e.base,r=Array.isArray(t)&&t.length&&t.map(o=>this.toValue(o)).filter(o=>o!=null);return!r||r.length<1?{min:null,max:null}:r.reduce((o,i)=>({min:this.toValue(i,o.min,Math.min),max:this.toValue(i,o.max,Math.max)}),{})}_computeLimit(e,t,r,o){if(!e)return;const i=t.base,l=this.toValue(r),a=this.toValue(o),s=l??this.toValue(e.min),u=a??this.toValue(e.max);return{fromMin:s,fromMax:this.toValue(u,this._fromInputString(i.max,"max"),Math.min),toMin:this.toValue(s,this._fromInputString(i.min,"min"),Math.max),toMax:u}}_computeFilterText(e){if(e.base==null)return;const t=e.base,r=this.toValue(t.min),o=this.toValue(t.max),i=[];return r!=null&&i.push(this.renderValue(r)),i.push(" - "),o!=null&&i.push(this.renderValue(o)),i.length>1?i.join(""):void 0}_computeTooltip(e,t){return t==null?e:`${e}: ${t}`}_fromInputString(e){return this.toValue(e)}_toInputString(e){const t=this.toValue(e);return t??null}_getDefaultFilter(){return{min:null,max:null}}_filterInputChanged(e,t){const r=e.path.split(".")[1];this.__inputChangePath=r||null,t&&(this._limitInputDebouncer=rn.debounce(this._limitInputDebouncer,on.after(600),()=>{this._limitInput(),this._updateFilter()}),ln(this._limitInputDebouncer))}_clearFrom(){this.set("_filterInput.min",null),this._updateFilter()}_clearTo(){this.set("_filterInput.max",null),this._updateFilter()}_onBlur(){this._limitInput(),this._updateFilter()}_onKeyDown(e){const t=e.currentTarget,r=Array.from(t.parentElement.querySelectorAll("cosmoz-input")),o=r[r.findIndex(a=>a===t)+1],i=!o,l=r[0]===t;switch(e.keyCode){case 13:if(e.preventDefault(),!i)o.focus();else{const a=this._limitInput();this._updateFilter(),a||this._closeParent(t)}break;case 9:(i&&!e.shiftKey||l&&e.shiftKey)&&this._closeParent(t)}}_closeParent(e){const t=Vt(e);t&&t.close()}_onDropdownOpenedChanged({currentTarget:e,type:t,detail:r}){(t==="focus"||r?.value===!0)&&setTimeout(()=>{e.querySelector("cosmoz-input:focus")||e.querySelector("cosmoz-input")?.focus()},100)}_limitInput(){const e=this._filterInput,t=this.__inputChangePath,r=t?this._fromInputString(this.get(t,e),t):null;if(this.__inputChangePath=null,r==null)return!1;const o=this._limit,i=t==="min"?"from":"to",l=this.get(i+"Min",o),a=this.get(i+"Max",o),s=this.toValue(r,l,Math.max),u=this.toValue(s,a,Math.min);return this.getComparableValue(r)!==this.getComparableValue(u)?(this.set(["_filterInput",t],this._toInputString(u,t)),this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),!0):!1}_updateFilter(){const e=this._filterInput,t=this.filter,r=this._fromInputString(e.min,"min"),o=this._fromInputString(e.max,"max");this.getComparableValue(r)===this.getComparableValue(t,"min")&&this.getComparableValue(o)===this.getComparableValue(t,"max")||this.set("filter",{min:r,max:o})}_filterChanged(e){if(this._filterInput==null)return;const t=this._filterInput,r=e.base,o=this._fromInputString(t.min,"min"),i=this._fromInputString(t.max,"max");this.getComparableValue(o)===this.getComparableValue(r,"min")&&this.getComparableValue(i)===this.getComparableValue(r,"max")||(this.set("_filterInput",{min:this._toInputString(r.min),max:this._toInputString(r.max)}),this._limitInputDebouncer&&this._limitInputDebouncer.cancel())}hasFilter(){const e=this.filter;return e==null?!1:this.toValue(e.min)!=null||this.toValue(e.max)!=null}resetFilter(){this.filter=this._getDefaultFilter()}_updateLimits(e,t){e&&Promise.resolve(we(e,{active:t})).then(r=>{const{min:o,max:i}=r??{};Object.assign(this,{...o!=null?{min:o}:{},...i!=null?{max:i}:{}})})}},ne=n=>class extends n{static get template(){return _t`<div id="output" style="position:relative;"></div>`}connectedCallback(){super.connectedCallback();const e=this;Le(e.render(),e.$.output)}_propertiesChanged(e,t,r){super._propertiesChanged(e,t,r);const o=this;requestAnimationFrame(()=>Le(o.render(),o.$.output))}};class Nn extends He(ne(D)){static get properties(){return{currency:{type:String},autodetect:{type:Boolean,value:!1},rates:{type:Object},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:"_computeFilterText(filter.*, _formatters)"},headerFocused:{type:Boolean,value:!1}}}static get observers(){return["_valuesChanged(autodetect, currency, values)"]}render(){const e=t=>{this.headerFocused=t.type==="focus",this._onDropdownOpenedChanged(t)};return c`
			${F(this.disabled,()=>c`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
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
		`}_valuesChanged(e,t,r){if(!Array.isArray(r)||r.length<1||!e&&t)return;const o=r.reduce((l,a)=>{if(a.currency){const s=a.currency;l[s]=(l[s]||0)+1}return l},{});let i=Object.keys(o)[0];Object.keys(o).reduce((l,a)=>{const s=Math.max(l,o[a]);return s===o[a]&&(i=a),s},0),this.set("currency",i)}toAmount(e,t,r){if(e==null||e==="")return;if(typeof e!="object"||e.currency==null||e.currency==="")return null;const o=this.toNumber(e.amount);if(o==null||Number.isNaN(o))return null;const i={currency:e.currency,amount:o};if(r==null||t==null)return i;const l=this.toAmount(t);if(l==null)return i;const a=this.rates||{},s=i.amount*(a[i.currency]||1),u=l.amount*(a[l.currency]||1);return this.toNumber(s,u,r)===s?i:l}toValue(){return this.toAmount.apply(this,arguments)}getComparableValue(e,t){const r=super.getComparableValue(e,t);if(r==null)return;const o=this.toNumber(r.amount),i=this.rates;return i==null?o:o*(i[r.currency]||1)}getString(e,t=this.valuePath){const r=this.toValue(this.get(t,e));return r===void 0?"":r===null?"Invalid value":this.renderValue(r)}getCurrency(e,t){const r=this.get(t,e);return r&&r.currency}getFormatter(e,t){const r=t||"",o=e+r||"",i=this._formatters=this._formatters||{};return i[o]||(i[o]=new Intl.NumberFormat(t||void 0,{style:"currency",currency:e})),i[o]}renderValue(e){const t=this.toAmount(e);return t==null?"":this.getFormatter(t.currency,this.locale).format(e.amount)}_amountValueChanged(e){const t=e.target,r=t.value,o=e.model.item,i=this.get(this.valuePath,o),l=Number(r),a={amount:l,currency:i.currency};this.set(this.valuePath,a,o),this._fireItemChangeEvent(o,this.valuePath,i,this.renderValue.bind(this))}_toInputString(e){const t=this.toValue(e);return t==null?null:this.toNumber(t.amount)}_toInputStringAmount(e){const t=this.rates;if(t==null)return this._toInputString(e);const r=this.toValue(e);return r==null?null:(this.toNumber(r.amount)*(t[r.currency]||1)/(t[this.currency]||1)).toFixed(2)}_fromInputString(e,t){const r=this.toNumber(e);if(r!=null)return this.toValue({amount:r,currency:t&&this.get(["filter",t,"currency"])||this.currency})}}customElements.define("cosmoz-omnitable-amount-range-input",Nn);const E=(n,e,t)=>{if(n==null||n==="")return;const r=typeof n=="number"?n:Number(n);if(!Number.isNaN(r))return r},Dt=n=>{const e=E(n);return e==null?null:e.toString()},jn=({valuePath:n},e)=>{const t=E(n?I(e,n):e);return Dt(t)},rt=n=>{const e=Dt(n);return e??""},K=({valuePath:n,maximumFractionDigits:e},t)=>{if(t==null)return;const r=n?I(t,n):t,o=E(r);if(o!=null)return e!==null?E(o.toFixed(e)):o},Pn=an((n,e,t)=>{const r={localeMatcher:"best fit"};return e!==null&&(r.minimumFractionDigits=e),t!==null&&(r.maximumFractionDigits=t),new Intl.NumberFormat(n||void 0,r)}),ot=({valuePath:n,locale:e,minimumFractionDigits:t,maximumFractionDigits:r},o)=>{const i=n?I(o,n):o;if(i==null)return"";const l=E(i);return l==null?void 0:Pn(e,t,r).format(l)},Bn=(n,e)=>t=>{const r=K(n,t);if(r==null)return!1;const o=K({...n,valuePath:"min"},e),i=K({...n,valuePath:"max"},e);return!(r<(o??-1/0)||r>(i??1/0))},ee=(n={},e,t,r)=>{if(e==null||e==="")return;if(typeof e!="object"||e.currency==null||e.currency==="")return null;const o=E(e.amount);return o==null||Number.isNaN(o)?null:{currency:e.currency,amount:o}},Q=({valuePath:n,rates:e},t)=>{if(t==null)return;let r=t;n!=null&&(r=I(t,n));const o=ee(e,r);if(o==null)return;const i=E(o.amount);return e==null||i==null?i:i*(e?.[o.currency]||1)},Hn=(n,e)=>t=>{const r=Q(n,t);if(r===void 0)return!1;const o=Q({...n,valuePath:"min"},e),i=Q({...n,valuePath:"max"},e);return o===void 0||i===void 0?!0:!(r<o||r>i)},oe={},Gn=(n,e)=>{const r=n+(e||"")||"";return oe[r]||(oe[r]=new Intl.NumberFormat(e||void 0,{style:"currency",currency:n})),oe[r]},qn=(n,e,t)=>{const r=ee(n,e);return r==null?"":Gn(r.currency,t).format(r.amount)},it=({valuePath:n,rates:e,locale:t},r)=>{const o=ee(e,n?I(r,n):void 0);return o===void 0?"":o===null?"Invalid value":qn(e,o,t)},lt=n=>n?n.amount+n.currency:"",at=n=>{if(n==null||n==="")return;const e=n.match(/^(-?[\d]+)([\D]+?)$/iu);if(!(!Array.isArray(e)||e.length<0))return{amount:Number(e[1]),currency:e[2]}},Wn=({valuePath:n},e)=>n?I(e,n)?.currency:null,Xn=({valuePath:n},e)=>n?I(e,n)?.amount:void 0,N=Symbol("column"),Un=n=>{let e=!0;const t=n.map(r=>r.name);return n.forEach(r=>{r.name==null&&(e=!1,console.error("The name attribute needs to be set on all columns! Missing on column",r))}),n.forEach(r=>{t.indexOf(r.name)!==t.lastIndexOf(r.name)&&(e=!1,console.error("The name attribute needs to be unique among all columns! Not unique on column",r))}),e},Kn=(n,e)=>{const t=n.valuePath??n.name;return{name:n.name,title:n.title,valuePath:t,groupOn:n.groupOn??t,sortOn:n.sortOn??t,noSort:n.noSort,disabledFiltering:e||n.disabledFiltering,minWidth:n.minWidth,width:n.width,flex:n.flex,priority:n.priority,getString:n.getString,getComparableValue:n.getComparableValue,serializeFilter:n.serializeFilter,deserializeFilter:n.deserializeFilter,toXlsxValue:n.toXlsxValue,renderHeader:n.renderHeader,renderCell:n.renderCell,renderEditCell:n.renderEditCell,renderGroup:n.renderGroup,cellTitleFn:n.cellTitleFn,headerTitleFn:n.headerTitleFn,getFilterFn:n.getFilterFn,headerCellClass:n.headerCellClass,cellClass:n.cellClass,editable:n.editable,values:n.values,source:Ft(n.computeSource),noLocalFilter:n.noLocalFilter,mini:n.mini,renderMini:n.renderMini,align:n.align,headerAlign:n.headerAlign,loading:n.loading,externalValues:n.externalValues,computeSource:n.computeSource,trueLabel:n.trueLabel,falseLabel:n.falseLabel,valueProperty:n.valueProperty,textProperty:n.textProperty,emptyLabel:n.emptyLabel,emptyValue:n.emptyValue,min:n.min,max:n.max,locale:n.locale,autoupdate:n.autoupdate,maximumFractionDigits:n.maximumFractionDigits,minimumFractionDigits:n.minimumFractionDigits,currency:n.currency,rates:n.rates,autodetect:n.autodetect,ownerTree:n.ownerTree,keyProperty:n.keyProperty,...n.getConfig?.(n),[N]:n}},Qn=n=>n.isOmnitableColumn&&!n.hidden,Yn=n=>{const e=n.filter(Qn);return Un(e)?e:[]},Jn=(n,e,t)=>(Array.isArray(e)?n.filter(o=>e.includes(o.name)):n.filter(o=>!o.disabled)).map(o=>Kn(o,t)),Zn=(n,{enabledColumns:e,disabledFiltering:t})=>{const[r,o]=R([]);return $t(()=>{let i,l=[];const a=n.shadowRoot.querySelector("#columnsSlot"),s=d=>()=>{const m=a.assignedNodes({flatten:!0});if(d)l=m;else{const g=m.filter(v=>!l.includes(v)),p=l.filter(v=>!m.includes(v)),h=[...g,...p].some(v=>v.isOmnitableColumn);if(l=m,!h)return}o(Jn(Yn(m),e,t))},u=d=>{cancelAnimationFrame(i),i=requestAnimationFrame(s(d?.type==="cosmoz-column-prop-changed"))};return u(),a.addEventListener("slotchange",u),n.addEventListener("cosmoz-column-prop-changed",u),()=>{a.removeEventListener("slotchange",u),n.removeEventListener("cosmoz-column-prop-changed",u),cancelAnimationFrame(i)}},[e,t]),r},Tt=(n,e)=>Array.isArray(n)?n.map(t=>I(t,e)).filter((t,r,o)=>t!=null&&o.indexOf(t)===r):void 0,re=({externalValues:n,values:e,valuePath:t},r)=>{if(n)return n;if(typeof e=="function")return e;if(t!==void 0)return Tt(r,t)},er=(n,e,t,r)=>{const{valuePath:o}=e,i=o!==void 0?I(t,o):void 0;if(r===i)return;o!==void 0&&sn(t,o,r);const l={item:t,valuePath:o,value:r,oldValue:i,column:e[N]};n.dispatchEvent(new CustomEvent("column-item-changed",{bubbles:!0,composed:!0,detail:l}))};class tr extends M(D){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},currency:{type:String,notify:!0},autodetect:{type:Boolean,value:!1,notify:!0},rates:{type:Object,notify:!0},width:{type:String,value:"70px"},cellClass:{type:String,value:"amount-cell"},headerCellClass:{type:String,value:"amount-header-cell"},align:{type:String,value:"right"}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const r=Q({...e,valuePath:"min"},t),o=Q({...e,valuePath:"max"},t);if(!(r==null&&o==null))return Hn(e,t)}getString(e,t){return it(e,t)}toXlsxValue(e,t){return it(e,t)}getComparableValue(e,t){return Q(e,t)}serializeFilter({rates:e},t){if(t==null)return;const r=ee(e,t.min),o=ee(e,t.max);if(!(r==null&&o==null))return lt(r)+"~"+lt(o)}deserializeFilter(e,t){if(typeof t!="string"||t==="")return null;const r=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(r)?{min:at(r[1]),max:at(r[2])}:null}renderCell(e,{item:t}){return c`<span>${e.getString(e,t)}</span>`}renderEditCell(e,{item:t},r){return c`<cosmoz-input
			type="number"
			@change=${i=>r({amount:i.target.value,currency:I(t,e.valuePath)?.currency})}
			.value=${Xn(e,t)}
		>
			<div slot="suffix">${Wn(e,t)}</div>
		</cosmoz-input>`}renderHeader({title:e,min:t,max:r,limits:o,locale:i,rates:l,currency:a,autoupdate:s,autodetect:u,disabledFiltering:d,headerAlign:m,align:g},{filter:p},h,v){return c`<cosmoz-omnitable-amount-range-input
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
			@filter-changed=${({detail:{value:x}})=>h(b=>({...b,filter:x}))}
			@header-focused-changed=${({detail:{value:x}})=>h(b=>({...b,headerFocused:x}))}
		></cosmoz-omnitable-amount-range-input>`}computeSource(e,t){return re(e,t)}}customElements.define("cosmoz-omnitable-column-amount",tr);const nr=(n,e)=>{if(!Array.isArray(n))return;const t=[];return n.reduce((r,o)=>Array.isArray(o)?(o.forEach(i=>{r.push(i)}),r):(r.push(o),r),[]).filter((r,o,i)=>{if(i.indexOf(r)!==o)return!1;if(e){const l=I(r,e);if(t.indexOf(l)!==-1)return!1;t.push(l)}return!0})},rr=(n,e,t)=>{if(n==null)return[];if(Array.isArray(n)){const r=nr(n,e);if(!r?.length)return[];const o=t??"label",i=l=>typeof l=="object"&&l!=null?String(I(l,o??"")??""):String(l??"");return r.sort((l,a)=>i(l).localeCompare(i(a)))}if(typeof n=="object"){const r=e??"id",o=t??"label";return Object.entries(n).map(([i,l])=>({[r]:i,[o]:l})).sort((i,l)=>String(i[o]??"").localeCompare(String(l[o]??"")))}return[]},Ge=(n,e,t)=>J(e&&I(n,e)).map(P(t)),qe=({valuePath:n,textProperty:e},t)=>Ge(t,n,e).filter(r=>r!=null).join(", "),or=qe,ir=({valueProperty:n,valuePath:e,emptyValue:t,emptyProperty:r},o)=>i=>{const l=P(n),a=J(I(i,e));return o.some(s=>a.length===0&&P(r||n)(s)===t||a.some(u=>l(u)===l(s)))},_e=n=>e=>n(t=>({...t,filter:e})),Fe=n=>e=>n(t=>({...t,headerFocused:e})),ke=n=>e=>n(t=>({...t,query:e})),Et=({emptyValue:n,emptyLabel:e,emptyProperty:t,textProperty:r,valueProperty:o},i)=>{const l=rr(i,o,r);return!e||n===void 0||!r||!(t||o)||!l?l:[{[r]:e,[t||o]:n},...l]},lr=(n,e)=>Et(n,Tt(e,n.valuePath)),Oe=n=>class extends n{static get properties(){return{textProperty:{type:String},valueProperty:{type:String},emptyLabel:{type:String},emptyValue:{type:Object},emptyProperty:{type:String}}}getConfig(e){return{emptyProperty:e.emptyProperty}}getString(e,t){return qe(e,t)}toXlsxValue(e,t){return or(e,t)}getComparableValue({valuePath:e,valueProperty:t},r){const o=I(r,e);return t==null?o:J(o).map(P(t)).sort().join(" ")}getFilterFn(e,t){if(!(!t||!Array.isArray(t)||t.length===0))return ir(e,t)}serializeFilter(e,t){return Array.isArray(t)&&t.length===0?null:JSON.stringify(t)}deserializeFilter(e,t){if(t==null)return null;try{return JSON.parse(decodeURIComponent(t))}catch(r){const o=r;return console.error("Failed to deserialize filter value:",{error:o?.name,message:o?.message,filterLength:typeof t=="string"?t.length:null}),null}}computeSource(e,t){return e.externalValues||typeof e.values=="function"?async(...r)=>Et(e,await Promise.resolve(we(e.values,...r))):lr(e,t)}},ar=({valuePath:n,textProperty:e,valueProperty:t},r)=>{const o=e?zt(e):P(t),i=J(n&&I(r,n)).map(o);return i.length>1?i.filter(Boolean).join(","):i[0]},sr=({valueProperty:n,valuePath:e,emptyValue:t,emptyProperty:r},o)=>{const i=P(n),l=P(r||n),a=new Set(o.filter(m=>m.excluded).map(m=>i(m.item))),s=new Set(o.filter(m=>!m.excluded).map(m=>i(m.item))),u=o.some(m=>m.excluded&&l(m.item)===t),d=o.some(m=>!m.excluded&&l(m.item)===t);return m=>{const g=J(I(m,e)).map(i);return g.length===0?!u&&(d||s.size===0):!g.some(p=>a.has(p))&&(s.size===0||g.some(p=>s.has(p)))}};let ur=class extends Oe(M(D)){static get properties(){return{headerCellClass:{type:String,value:"autocomplete-header-cell"},minWidth:{type:String,value:"55px"},editMinWidth:{type:String,value:"55px"},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return c`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},r){return c`<cosmoz-input
			type="text"
			@change=${i=>r(i.target.value)}
			.value=${G(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:r},o,i){return c`<cosmoz-autocomplete-excluding
			variant="inline"
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
			.itemRenderer=${e[N]?.itemRenderer}
			.value=${t}
			.text=${r}
			.limit=${e.limit}
			@opened-changed=${l=>Fe(o)(l.detail.value)}
			@value-changed=${Me(_e(o))}
			@text-changed=${Me(ke(o))}
			>${F(e.loading,()=>c`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-excluding
		>`}getComparableValue(e,t){return ar(e,t)}getFilterFn(e,t){if(!(!t||!Array.isArray(t)||t.length===0))return sr(e,t)}};customElements.define("cosmoz-omnitable-column-autocomplete-excluding",ur);const cr=({valuePath:n,textProperty:e,valueProperty:t},r)=>{const o=e?zt(e):P(t),i=J(n&&I(r,n)).map(o);return i.length>1?i.filter(Boolean).join(","):i[0]};class dr extends Oe(M(D)){static get properties(){return{headerCellClass:{type:String,value:"autocomplete-header-cell"},minWidth:{type:String,value:"55px"},editMinWidth:{type:String,value:"55px"},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return c`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},r){return c`<cosmoz-input
			type="text"
			@change=${i=>r(i.target.value)}
			.value=${G(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:r},o,i){return c`<cosmoz-autocomplete-ui
			variant="inline"
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
			.itemRenderer=${e[N]?.itemRenderer}
			.value=${t}
			.text=${r}
			.limit=${e.limit}
			.onChange=${_e(o)}
			@opened-changed=${l=>Fe(o)(l.detail.value)}
			.onText=${ke(o)}
			>${F(e.loading,()=>c`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}getComparableValue(e,t){return cr(e,t)}}customElements.define("cosmoz-omnitable-column-autocomplete",dr);const We=(n,e)=>e.find(({value:t})=>n===t),mr=(n,e,t)=>{const r=We(e,t);return r?r.text:n},st=(n,e,t,r)=>mr(n,I(e,t),r),pr=({valuePath:n},e,t)=>We(I(e,n),t),gr=n=>e=>{n(t=>({...t,filter:e?.[0]?.value??null}))},hr=n=>e=>{n(t=>({...t,headerFocused:e}))},fr=n=>e=>{n(t=>({...t,query:e}))},br=n=>e=>n(e?.[0]?.value),ut=({valuePath:n,trueLabel:e,falseLabel:t},r)=>I(r,n)?e:t,xr=({valuePath:n},e)=>t=>I(t,n)===e,ie=Ft((n,e)=>[{text:n,value:!0},{text:e,value:!1}]),vr=({valuePath:n,trueLabel:e,falseLabel:t},r)=>n?I(r,n)?e:t:"",yr=(n,e)=>{try{return JSON.parse(e)}catch{return null}};class $r extends M(D){static get properties(){return{trueLabel:{type:String,value:"True"},falseLabel:{type:String,value:"False"},flex:{type:String,value:"0"},cellClass:{type:String,value:"boolean-cell"}}}getString(e,t){return ut(e,t)}renderCell(e,{item:t}){return ut(e,t)}renderEditCell(e,{item:t},r){const{trueLabel:o,falseLabel:i}=e;return c`<cosmoz-autocomplete
			variant="inline"
			.title=${st(e.title,t,e.valuePath,ie(o,i))}
			.source=${ie(o,i)}
			.textProperty=${"text"}
			.value=${pr(e,t,ie(o,i))}
			.onChange=${br(r)}
			.limit=${1}
			>${F(e.loading,()=>c`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete
		>`}renderHeader(e,{filter:t,query:r},o,i){return c`<cosmoz-autocomplete-ui
			?disabled=${e.disabledFiltering}
			variant="inline"
			.label=${e.title}
			.title=${st(e.title,t,e.valuePath,i)}
			.source=${i}
			.textProperty=${"text"}
			.value=${We(t,i)}
			.text=${r}
			.onChange=${gr(o)}
			@opened-changed=${l=>hr(o)(l.detail.value)}
			.onText=${fr(o)}
			.limit=${1}
			>${F(e.loading,()=>c`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}computeSource({trueLabel:e,falseLabel:t}){return ie(e,t)}getFilterFn(e,t){if(t!=null)return xr(e,t)}toXlsxValue(e,t){return vr(e,t)}deserializeFilter(e,t){return yr(e,t)}}customElements.define("cosmoz-omnitable-column-boolean",$r);const Xe=n=>class extends He(n){static get properties(){return{max:{type:Date,value:null},min:{type:Date,value:null},_filterText:{type:String,computed:"_computeFilterText(filter.*, formatter)"},formatter:{type:Object,computed:"_computeFormatter(locale)"}}}toDate(e,t,r){if(e==null||e==="")return;let o=e;if(o instanceof Date||(typeof e=="string"&&(o=this.getAbsoluteISOString(o)),o=new Date(o)),Number.isNaN(o.getTime()))return null;if(r==null||t==null)return o;const i=this.toDate(t);if(i==null)return o;const l=this.getComparableValue(o),a=this.getComparableValue(i);return r(l,a)===l?o:i}toValue(){return this.toDate.apply(this,arguments)}getComparableValue(e,t){const r=super.getComparableValue(e,t);if(r!=null)return this.toNumber(r.getTime())}getString(e,t=this.valuePath,r=this.formatter){const o=this.toValue(this.get(t,e));return o===void 0?"":o===null?"Invalid Date":this.renderValue(o,r)}getAbsoluteISOString(e){return e.length===19?e+this._getTimezoneString(e):e}_getTimezoneString(e){const t=-new Date(e).getTimezoneOffset()/60;return(t<0?"-":"+")+["0",Math.abs(t)].join("").substr(-2)+":00"}renderValue(e,t=this.formatter){if(t==null)return;const r=this.toValue(e);if(r!=null)return t.format(r)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0)}_toInputString(e){const t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(0,10)}_dateValueChanged(e){const t=e.currentTarget,r=t.value,o=e.model.item,i=this.get(this.valuePath,o),l=this._fromInputString(r);this.set(this.valuePath,l,o),this._fireItemChangeEvent(o,this.valuePath,i,this.renderValue.bind(this))}_toLocalISOString(e){return Ie(e)}};class zr extends Xe(ne(D)){render(){const e=t=>{this.headerFocused=t.type==="focus"};return c`
			${F(this.disabled,()=>c`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
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
		`}_fromInputString(e,t){const r=this.toDate(e);if(r!=null)return t==="min"&&r.setHours(0,0,0,0),t==="max"&&r.setHours(23,59,59),r}_filterInputChanged(e,t){const r=e.path.split(".")[1],o=r&&e.value;if(o&&o.match(/^0+/u)){this._limitInputDebouncer.cancel();return}super._filterInputChanged(e,t)}}customElements.define("cosmoz-omnitable-date-range-input",zr);const wr=n=>{const e=-new Date(n).getTimezoneOffset()/60;return(e<0?"-":"+")+["0",Math.abs(e)].join("").substr(-2)+":00"},Ue=n=>n.length===19?n+wr(n):n,Lt=n=>{if(n==null||n==="")return;let e=n;return!(e instanceof Date)&&(typeof n=="string"&&(e=Ue(e)),e=un(e),!e)||Number.isNaN(e.getTime())?null:e},j=({valuePath:n},e)=>{if(e==null)return;let t=e;n!=null&&(t=I(e,n));const r=Lt(t);if(r!=null)return E(r.getTime())},A=(n,e,t)=>{const r=Lt(n);return r??null},Ke=(n,e)=>{if(e==null)return;const t=A(n);if(t!=null)return e.format(t)},le={},Sr=n=>{const e=n||"";return le[e]||(le[e]=new Intl.DateTimeFormat(n||void 0)),le[e]},ct=({valuePath:n,locale:e},t)=>{let r=I(t,n||"");return r===void 0?"":(r=A(r),r===null?"Invalid Date":Ke(r,Sr(e)))},Mt=n=>{const e=A(n);if(e==null)return null;const t=Ie(e);return t==null?null:t.slice(0,10)},Cr=({valuePath:n},e)=>Mt(I(e,n||"")),Rt=(n,e)=>{const t=A(n);if(t!=null)return t},dt=n=>{const e=Mt(n);return e??""},Ir=({valuePath:n},e)=>{if(!n)return"";const t=A(I(e,n));if(!t)return"";const r=A(Ie(t));return r?(r.setHours(0,0,0,0),r):""},Nt=(n,e)=>t=>{const r=j(n,t);if(r==null)return!1;const o=j({...n,valuePath:"min"},e),i=j({...n,valuePath:"max"},e);return!(r<(o??-1/0)||r>(i??1/0))};class _r extends M(D){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"date-header-cell"},width:{type:String,value:"100px"},minWidth:{type:String,value:"82px"},flex:{type:String,value:"0"}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const r=j({...e,valuePath:"min"},t),o=j({...e,valuePath:"max"},t);if(!(r==null&&o==null))return Nt(e,t)}getString(e,t){return ct(e,t)}toXlsxValue(e,t){return Ir(e,t)}getComparableValue(e,t){return j(e,t)}serializeFilter(e,t){if(t==null)return;const r=A(t.min),o=A(t.max);if(!(r==null&&o==null))return dt(r)+"~"+dt(o)}deserializeFilter(e,t){if(typeof t!="string"||t==="")return null;const r=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(r)?{min:A(r[1]),max:A(r[2])}:null}renderCell(e,{item:t}){return c`<div class="omnitable-cell-date">
			${ct(e,t)}
		</div>`}renderEditCell(e,{item:t},r){return c`<cosmoz-input
			type="date"
			@change=${i=>r(Rt(i.target.value))}
			.value=${Cr(e,t)}
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
		></cosmoz-omnitable-date-range-input>`}computeSource(e,t){return re(e,t)}}customElements.define("cosmoz-omnitable-column-date",_r);class Fr extends Xe(ne(D)){render(){const e=t=>{this.headerFocused=t.type==="focus"};return c`
			${F(this.disabled,()=>c`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
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
		`}_toInputString(e){const t=this.toValue(e);if(t!=null)return this._toLocalISOString(t).slice(0,19)}_computeFormatter(e){const t={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return new Intl.DateTimeFormat(e||void 0,t)}}customElements.define("cosmoz-omnitable-datetime-range-input",Fr);const ae={},kr=n=>{const e=n||"";if(ae[e])return ae[e];const t={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return ae[e]=new Intl.DateTimeFormat(n||void 0,t),ae[e]},De=({valuePath:n,locale:e},t)=>{const r=A(I(t,n||""));return r===void 0?"":r===null?"Invalid Date":Ke(r,kr(e))},Or=({valuePath:n},e)=>n?I(e,n):"",mt=n=>{const e=A(n);return e==null?"":e.toISOString().slice(0,19).replace(/:/gu,".")},pt=n=>{if(!(n==null||n==="")&&typeof n=="string")return A(n.replace(/\./gu,":")+"Z")};class gt extends M(D){static get is(){return"cosmoz-omnitable-column-datetime"}static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"datetime-header-cell"},width:{type:String,value:"210px"},minWidth:{type:String,value:"128px"},flex:{type:String,value:"0"},filterStep:{type:Number,value:1}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const r=j({...e,valuePath:"min"},t),o=j({...e,valuePath:"max"},t);if(!(r==null&&o==null))return Nt(e,t)}getString(e,t){return De(e,t)}toXlsxValue(e,t){return Or(e,t)}getComparableValue(e,t){return j(e,t)}serializeFilter(e,t){if(t==null)return;const r=A(t.min),o=A(t.max);if(!(r==null&&o==null))return mt(r)+"~"+mt(o)}deserializeFilter(e,t){if(typeof t!="string"||t==="")return null;const r=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(r)?{min:pt(r[1]),max:pt(r[2])}:null}renderCell(e,{item:t}){return De(e,t)}renderEditCell(e,{item:t},r){return c`<cosmoz-input
			type="text"
			@change=${i=>r(Rt(i.target.value))}
			.value=${De(e,t)}
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
			@filter-changed=${({detail:{value:p}})=>m(h=>({...h,filter:p}))}
			@header-focused-changed=${({detail:{value:p}})=>m(h=>({...h,headerFocused:p}))}
		></cosmoz-omnitable-datetime-range-input>`}computeSource(e,t){return re(e,t)}}customElements.define(gt.is,gt);class Ar extends Oe(M(D)){renderCell({valuePath:e,textProperty:t},{item:r}){const o=Ge(r,e,t).map(i=>c`<li>${i}</li>`);return c`
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
			variant="inline"
			class="external-values-${e.externalValues}"
			?disabled=${e.disabledFiltering}
			.label=${e.title}
			.source=${i}
			.textProperty=${e.textProperty}
			.value=${t}
			.text=${r}
			.onChange=${_e(o)}
			@opened-changed=${l=>Fe(o)(l.detail.value)}
			.onText=${ke(o)}
			>${F(e.loading,()=>c`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		> `}}customElements.define("cosmoz-omnitable-column-list-horizontal",Ar);const Vr=q`
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
`,Dr=({items:n})=>{const[e,t]=R(!1),r=Array.isArray(n)?n:[],o=O(()=>Math.max(0,r.length-1),[r]);if(r.length===0)return null;const i=r.length>2,l=r[0],a=i&&!e?[]:r.slice(1),s=u=>{u.stopPropagation(),u.preventDefault(),t(d=>!d)};return c`
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
	`};customElements.define("cosmoz-omnitable-column-list-data",V(Dr,{styleSheets:[Se(Vr)]}));class Tr extends Oe(M(D)){static get properties(){return{keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,textual:e.textual}}renderCell({valuePath:e,textProperty:t},{item:r}){return c`<cosmoz-omnitable-column-list-data
			.items=${Ge(r,e,t)}
		></cosmoz-omnitable-column-list-data>`}renderEditCell(e,{item:t},r){const o=i=>r(i.target.value.split(/,\s*/gu));return c`<cosmoz-input
			type="text"
			.value=${qe(e,t)}
			@change=${o}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:r},o,i){return c`<cosmoz-autocomplete-ui
			variant="inline"
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
			.itemRenderer=${e[N]?.itemRenderer}
			.value=${t}
			.text=${r}
			.onChange=${_e(o)}
			@opened-changed=${l=>Fe(o)(l.detail.value)}
			.onText=${ke(o)}
			>${F(e.loading,()=>c`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}}customElements.define("cosmoz-omnitable-column-list",Tr);class Er extends He(ne(D)){static get properties(){return{maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},formatter:{type:Object,computed:"_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)"},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:"_computeFilterText(filter.*, formatter)"},headerFocused:{type:Boolean,value:!1}}}render(){const e=t=>{this.headerFocused=t.type==="focus",this._onDropdownOpenedChanged(t)};return c`
			${F(this.disabled,()=>c`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
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
		`}_computeFormatter(e,t,r){const o={localeMatcher:"best fit"};return t!==null&&(o.minimumFractionDigits=t),r!==null&&(o.maximumFractionDigits=r),new Intl.NumberFormat(e||void 0,o)}getComparableValue(e,t){if(e==null)return;let r=e;if(t!=null&&(r=this.get(t,e)),r=this.toValue(r),r==null)return;const o=this.maximumFractionDigits;return o!==null?this.toValue(r.toFixed(o)):r}renderValue(e,t=this.formatter){const r=this.toNumber(e);if(r!=null)return t.format(r)}}customElements.define("cosmoz-omnitable-number-range-input",Er);class Lr extends M(D){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},cellClass:{type:String,value:"number-cell"},width:{type:String,value:"30px"},minWidth:{type:String,value:"30px"},headerCellClass:{type:String,value:"number-header-cell"},maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},align:{type:String,value:"right"}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){const r=K({...e,valuePath:"min"},t),o=K({...e,valuePath:"max"},t);if(!(r==null&&o==null))return Bn(e,t)}getString(e,t){return ot(e,t)}toXlsxValue({valuePath:e},t){return I(t,e)}getComparableValue(e,t){return K(e,t)}serializeFilter(e,t){if(t==null)return;const r=E(t.min),o=E(t.max);if(!(r==null&&o==null))return rt(r)+"~"+rt(o)}deserializeFilter(e,t){if(typeof t!="string"||t==="")return null;const r=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(r)?{min:E(r[1]),max:E(r[2])}:null}renderCell(e,{item:t}){return c`<div class="omnitable-cell-number">
			${ot(e,t)}
		</div>`}renderEditCell(e,{item:t},r){return c`<cosmoz-input
			type="number"
			@change=${i=>r(i.target.value)}
			.value=${jn(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:r,limits:o,locale:i,maximumFractionDigits:l,minimumFractionDigits:a,autoupdate:s,disabledFiltering:u,headerAlign:d,align:m},{filter:g},p,h){return c`<cosmoz-omnitable-number-range-input
			.title=${e}
			?disabled=${u}
			.filter=${g}
			.values=${h}
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
		></cosmoz-omnitable-number-range-input>`}computeSource(e,t){return re(e,t)}}customElements.define("cosmoz-omnitable-column-number",Lr);class Mr extends Xe(ne(D)){render(){const e=t=>{this.headerFocused=t.type==="focus"};return c`
			${F(this.disabled,()=>c`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
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
		`}get _fixedDate(){return"1970-01-01"}toDate(e,t,r){const o=typeof e=="string"&&e.length>3&&e.length<=9?this.getAbsoluteISOString(this._fixedDate+"T"+e):e;return super.toDate(o,t,r)}_toInputString(e){const t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(11,19)}getComparableValue(e,t){if(e==null)return;let r=this._toInputString(t==null?e:this.get(t,e));if(r!=null&&(r=this.toValue(this.getAbsoluteISOString(this._fixedDate+"T"+r)),r!=null))return this.toNumber(r.getTime())}_timeValueChanged(e){const t=e.target,r=t.value,o=e.model.item,i=this.toDate(o.date),l=this.toDate(i!=null?i.toISOString().slice(0,10)+"T"+r:r),a=s=>s;l==null&&(this.set(this.valuePath,l,o),this._fireItemChangeEvent(o,this.valuePath,i,a.bind(this)))}_computeFormatter(e){const t={hour:"numeric",minute:"numeric",second:"numeric"};return new Intl.DateTimeFormat(e||void 0,t)}}customElements.define("cosmoz-omnitable-time-range-input",Mr);const jt="1970-01-01",B=(n,e,t)=>{const r=typeof n=="string"&&n.length>3&&n.length<=9?Ue(jt+"T"+n):n;return A(r)},se={},Rr=n=>{const e=n||"";if(se[e])return se[e];const t={hour:"numeric",minute:"numeric",second:"numeric"};return se[e]=new Intl.DateTimeFormat(n||void 0,t),se[e]},be=({valuePath:n,locale:e},t)=>{const r=B(I(t,n||""));return r===void 0?"":r===null?"Invalid Date":Ke(r,Rr(e))},Nr=(n,e)=>n.valuePath?be(n,e):"",jr=n=>{const e=B(n);if(e==null)return null;const t=Ie(e);return t&&t.slice(11,19)},Y=({valuePath:n},e)=>{if(e==null)return;const t=jr(n==null?e:I(e,n));if(t==null)return;const r=B(Ue(jt+"T"+t));return r==null?r:E(r.getTime())},Pr=(n,e)=>t=>{const r=Y(n,t);if(r==null)return!1;const o=Y({...n,valuePath:"min"},e),i=Y({...n,valuePath:"max"},e);return o==null||i==null?!1:!(r<o||r>i)},ht=n=>{const e=B(n);return e==null?"":e.toISOString().slice(11,19).replace(/:/gu,".")},ft=n=>{if(!(n==null||n===""))return B(typeof n=="string"?n.replace(/\./gu,":")+"Z":n)};class Br extends M(D){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"time-header-cell"},minWidth:{type:String,value:"63px"},width:{type:String,value:"210px"},flex:{type:String,value:"0"},filterStep:{type:String,value:"1"}}}getFilterFn(e,t){const r=Y({...e,valuePath:"min"},t),o=Y({...e,valuePath:"max"},t);if(!(r==null&&o==null))return Pr(e,t)}getString(e,t){return be(e,t)}toXlsxValue(e,t){return Nr(e,t)}getComparableValue(e,t){return Y(e,t)}serializeFilter(e,t){if(t==null)return;const r=B(t.min),o=B(t.max);if(!(r==null&&o==null))return ht(r)+"~"+ht(o)}deserializeFilter(e,t){if(typeof t!="string"||t==="")return null;const r=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(r)?{min:ft(r[1]),max:ft(r[2])}:null}renderCell(e,{item:t}){return be(e,t)}renderEditCell(e,{item:t},r){return c`<cosmoz-input
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
		></cosmoz-omnitable-time-range-input>`}computeSource(e,t){return re(e,t)}}customElements.define("cosmoz-omnitable-column-time",Br);const Hr=({column:n,item:e,selected:t,folded:r,group:o})=>{if(!n)return Re;const i=n.renderGroup??n.renderCell;return i?i(n,{item:e,selected:t,folded:r,group:o}):Re};customElements.define("cosmoz-omnitable-group-row",V(Hr,{useShadowDOM:!1}));const Gr=n=>{const{column:e}=n;return T(()=>{let t=0,r=0;const o=a=>{n.dispatchEvent(new CustomEvent("column-resize",{bubbles:!0,composed:!0,detail:{newWidth:Math.ceil(r+a.pageX-t),column:e}}))},i=()=>{document.removeEventListener("pointermove",o),document.removeEventListener("pointerup",i)},l=a=>{t=a.pageX,r=n.previousElementSibling.getBoundingClientRect().width,document.addEventListener("pointermove",o),document.addEventListener("pointerup",i)};return n.addEventListener("pointerdown",l),()=>n.removeEventListener("pointerdown",l)},[e]),Re};customElements.define("cosmoz-omnitable-resize-nub",V(Gr));const Pt=({column:n,on:e,descending:t,setOn:r,setDescending:o})=>{const{name:i,title:l}=n??{};return c`<button
		class="sg"
		title=${xe(l)}
		data-on=${xe(i===e&&(t?"desc":"asc")||void 0)}
		@click=${a=>{const u=a.currentTarget?.dataset.on;u||(r(i),o(!1)),u==="asc"?o(!0):u==="desc"&&(r(),o(!1))}}
	>
		<span>${l}</span> ${i===e?U({width:"12",height:"12"}):cn({width:"12",height:"12"})}
	</button>`},Bt=({columns:n,...e})=>n?.map(t=>Pt({column:t,...e})),qr=()=>c`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:n,groupOn:e,setGroupOn:t,groupOnDescending:r,setGroupOnDescending:o}={})=>Bt({columns:n?.filter?.(i=>i.groupOn),on:e,setOn:t,descending:r,setDescending:o})}
	>
	</sort-and-group-consumer>
`,Wr=()=>c`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:n,sortOn:e,setSortOn:t,descending:r,setDescending:o}={})=>Bt({columns:n?.filter?.(i=>i.sortOn&&!i.noSort),on:e,setOn:t,descending:r,setDescending:o})}
	>
	</sort-and-group-consumer>
`,Ht=n=>(e,t,r=wt)=>{const o=mn(),i=new URLSearchParams(o.hash.replace("#",""));return n(e,t,r,i),"#!"+Object.assign(o,{hash:i}).href.replace(location.origin,"")},Gt=n=>n==null||n==="",Xr=Ht((n,e,t,r)=>Gt(t(e))?r.delete(n):r.set(n,t(e))),Ur=Ht((n,e,t,r)=>{const o=Object.entries(e),i=o.map(t).filter(([,a])=>a!==void 0);if(i.length===0&&o.length>0)return;const l=n;Array.from(r.keys()).filter(a=>a.startsWith(l)).forEach(a=>r.delete(a)),i.forEach(([a,s])=>Gt(s)?r.delete(n+a):r.set(n+a,s))});function Z(n,e,{suffix:t="",read:r,write:o,ready:i=!0,multi:l}={}){const a=l?Ur:Xr,s=Ce({param:e,suffix:t,link:a,write:o??wt}),u=O(()=>{if(e==null)return!1;if(l){const p=et(e+t);return Object.keys(p).length>0}return tt(e+t)!==void 0},[]),[d,m]=R(()=>{if(e==null)return n;if(l){const h=et(e+t,r);return Object.keys(h).length>0?h:n}return tt(e+t,r)??n}),g=S(p=>m(h=>{const v=we(p,h);return s.param!=null&&dn(s.link(s.param+s.suffix,v,s.write),null,{notify:!1}),v}),[]);return T(()=>{s.param==null||!i||u||n!=null&&g(n)},[i]),[d,g]}const Kr=n=>[!0,"true",1,"yes","on"].includes(n),ue=n=>n===""||(n==null?void 0:Kr(n)),ce=(n,e,t)=>S(r=>{n(r),t(o=>({...o,[e]:r}))},[n,e,t]),Qr=(n,e,{settings:t,setSettings:r,resetRef:o,ready:i=!0})=>{const[l,a]=Z(t.sortOn,e,{suffix:"-sortOn",ready:i}),[s,u]=Z(ue(t.descending),e,{suffix:"-descending",read:ue,ready:i}),[d,m]=Z(t.groupOn,e,{suffix:"-groupOn",ready:i}),[g,p]=Z(ue(t.groupOnDescending),e,{suffix:"-groupOnDescending",read:ue,ready:i}),h=O(()=>n.find(z=>z.name===l),[n,l]),v=O(()=>n.find(z=>z.name===d),[n,d]),x={groupOn:d,setGroupOn:ce(m,"groupOn",r),groupOnDescending:g,setGroupOnDescending:ce(p,"groupOnDescending",r),sortOn:l,setSortOn:ce(a,"sortOn",r),descending:s,setDescending:ce(u,"descending",r),columns:n},b=O(()=>x,Object.values(x)),y=S(z=>{a(z.sortOn),m(z.groupOn),u(z.descending),p(z.groupOnDescending)},[]);return T(()=>{o.current=y},[]),{...b,sortAndGroup:b,groupOnColumn:v,sortOnColumn:h}},Qe=St();customElements.define("sort-and-group-provider",Qe.Provider);customElements.define("sort-and-group-consumer",V(({render:n})=>n(Pe(Qe)),{useShadowDOM:!1}));const Yr=({data:n,columns:e,groupOnColumn:t,filters:r,setFilterState:o,sortAndGroup:{sortOn:i,setSortOn:l,descending:a,setDescending:s}={}})=>Ct(e,u=>u.name,u=>[c`<div
				class="cell ${u.headerCellClass} header-cell"
				align="${u.headerAlign??u.align??"left"}"
				part="cell header-cell cell-${u.name} header-cell-${u.name}"
				?hidden="${u===t}"
				title="${u.headerTitleFn(u)}"
				name="${u.name}"
			>
				${u.renderHeader(u,r[u.name]??{},d=>o(u.name,d),u.source(u,n))}
				${F(!u.noSort,()=>Pt({on:i,setOn:l,descending:a,setDescending:s,column:u}))}
			</div>`,c`<cosmoz-omnitable-resize-nub
				.column="${u}"
				name="${u.name}"
			></cosmoz-omnitable-resize-nub>`]),Jr=({columns:n,settingsConfig:e,hideSelectAll:t,...r})=>{const o=Pe(Qe);return c`
		${F(n,i=>Yr({columns:i,sortAndGroup:o,...r}))}
		${F(!t,()=>c` <cosmoz-omnitable-settings
					.config=${e}
					part="settings"
				></cosmoz-omnitable-settings>`)}
	`};customElements.define("cosmoz-omnitable-header-row",V(Jr,{useShadowDOM:!1}));const Zr=q`
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
`;customElements.define("cosmoz-omnitable-item-expand-line",V(eo,{styleSheets:[Se(Zr)]}));const to=({columns:n,item:e,selected:t,expanded:r,groupOnColumn:o})=>pn(n,i=>c`<cosmoz-omnitable-item-expand-line
				.column=${i}
				?hidden=${i===o}
				exportparts="item-expand-label, item-expand-value"
				>${i.renderCell(i,{item:e,selected:t,expanded:r})}</cosmoz-omnitable-item-expand-line
			>`);customElements.define("cosmoz-omnitable-item-expand",V(to,{useShadowDOM:!1}));const no=(n,e,t)=>n.editable?n.renderEditCell(n,e,t(n,e.item)):n.renderCell(n,e),ro=({columns:n,groupOnColumn:e,item:t,index:r,selected:o,expanded:i,onItemChange:l})=>Ct(n,a=>a.name,a=>c`<div
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
		width: calc(var(--cz-spacing) * 4.5);
		height: calc(var(--cz-spacing) * 4.5);
		background: transparent;
		border-radius: var(--cz-radius-xs);
		appearance: none;
		-webkit-appearance: none;
		outline: none;
		position: relative;
		user-select: none;
		cursor: pointer;
		display: inline-block;
		box-shadow: inset 0 0 0 2px var(--cz-color-border-primary);
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		transition: background-color 140ms;
		margin: 1px calc(var(--cz-spacing) * 3);
		flex: none;
	}

	.checkbox:checked {
		background: rgb(
			from var(--cz-color-bg-brand-solid) r g b / calc(alpha * 0.85)
		);
		box-shadow: none;
	}

	.checkbox:checked::before {
		content: "";
		position: absolute;
		box-sizing: content-box;
		width: 4px;
		height: 10px;
		border: 2px solid var(--cz-color-text-on-brand);
		border-top: none;
		border-left: none;
		transform-origin: 4px 10px;
		transform: translate(3px) rotate(45deg);
	}

	.checkbox::after {
		content: "";
		display: block;
		bottom: -5px;
		left: -5px;
		right: -5px;
		top: -5px;
	}

	.checkbox:hover {
		box-shadow: 0 0 0 2px
			rgb(from var(--cz-color-text-primary) r g b / calc(alpha * 0.75)) inset;
	}

	.checkbox:checked:hover {
		box-shadow: 0 0 2px 4px var(--cz-color-bg-quaternary);
	}

	.checkbox:indeterminate::before {
		content: "";
		position: absolute;
		width: 10px;
		height: 2px;
		left: 4px;
		top: 8px;
		background-color: var(--cz-color-text-brand);
	}
`,oo=q`
	:host {
		display: flex;
		flex-direction: column;
		position: relative;
		overflow: hidden;
		color: var(--cz-color-text-secondary);
	}
	:host a {
		color: var(--cz-color-brand-300);
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
		background-color: var(--cz-color-bg-secondary);
		border-block: 1px solid var(--cz-color-border-primary);
	}

	[hidden] {
		display: none;
	}

	cosmoz-grouped-list-row {
		width: 100%;
	}

	.header > cosmoz-omnitable-header-row {
		flex: auto;
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
	}
	cosmoz-omnitable-header-row > div[hidden] {
		display: none !important;
	}

	cosmoz-omnitable-resize-nub {
		display: inline-block;
		position: absolute;
		bottom: 0;
		width: 7px;
		height: 100%;
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
		background-color: var(--cz-color-bg-primary);
	}
	.tableContent:has(.tableContent-empty.spinner) {
		opacity: 0.3;
	}

	/* Empty data set styling */
	.tableContent-empty {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--cz-color-text-disabled);
	}

	.tableContent-empty:has(cosmoz-omnitable-skeleton) {
		justify-content: stretch;
	}
	.tableContent-empty.overlay {
		color: var(--cz-color-text-disabled);
		z-index: 1;
	}
	.tableContent-empty > div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-bottom: calc(var(--cz-spacing) * 6);
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

		padding-bottom: calc(var(--cz-spacing) * 6);
	}
	.tableContent-empty.overlay div.tableContent-empty-message {
		padding-bottom: 0;
	}
	.tableContent-empty p {
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		color: #ddd;
		margin: 0;
	}
	.tableContent-empty h3 {
		font-size: var(--cz-text-xl);
		line-height: var(--cz-text-xl-line-height);
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
		border-bottom: 1px var(--cz-color-border-secondary) solid;
	}
	.itemRow-wrapper {
		display: flex;
		align-items: center;
		min-height: calc(var(--cz-spacing) * 10);
		padding-right: calc(var(--cz-spacing) * 2);
	}

	.itemRow[selected] {
		background-color: var(--cz-color-bg-primary-hover);
	}

	.itemRow-cell {
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
	}

	.tableContent .itemRow-cell paper-dropdown-menu {
		margin-top: calc(var(--cz-spacing) * 2);
	}

	cosmoz-omnitable-item-expand[expanded] {
		display: flex;
		flex-direction: column;
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		padding: 5px 4%;
		border-bottom: 1px var(--cz-color-border-secondary) solid;
		background-color: var(--cz-color-bg-disabled);
		animation: expand-in 0.25s ease;
	}

	@keyframes expand-in {
		from {
			opacity: 0;
			transform: translateY(-4px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	cosmoz-omnitable-item-expand:not([expanded]) {
		display: none;
	}

	.groupRow {
		display: flex;
		align-items: center;
		background-color: var(--cz-color-bg-tertiary);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-bold);
		color: var(--cz-color-text-primary);
		border-bottom: 1px solid var(--cz-color-border-secondary);
	}

	.groupRow-label {
		display: flex;
		flex: auto;
		align-items: center;
		flex-wrap: wrap;
		padding-left: calc(var(--cz-spacing) * 2);
		margin: 0;
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-regular);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.groupRow-label > cosmoz-omnitable-group-row {
		flex: auto;
	}

	.groupRow-badge {
		background: var(--cz-color-bg-success-solid);
		color: var(--cz-color-bg-secondary);
		height: calc(var(--cz-spacing) * 7);
		width: calc(var(--cz-spacing) * 7);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: var(--cz-radius-full);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-regular);
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

	.cell[align="right"] {
		text-align: right;
	}

	.cell[align="left"] {
		text-align: left;
	}

	.cell[align="center"] {
		text-align: center;
	}

	cosmoz-bottom-bar {
		background: rgb(
			from var(--cz-color-bg-brand-solid) r g b / calc(alpha * 0.45)
		);
		overflow: hidden;
		color: var(--cz-color-text-on-brand);
	}
	cosmoz-bottom-bar::part(bar) {
		padding: 0 calc(var(--cz-spacing) * 6);
	}

	cosmoz-bottom-bar::slotted(*) {
		background: rgb(
			from var(--cz-color-bg-brand-solid) r g b / calc(alpha * 0.75)
		);
		color: var(--cz-color-text-on-brand);
	}

	cosmoz-bottom-bar::slotted([disabled]) {
		color: var(--cz-color-text-disabled);
		border-color: var(--cz-color-border-disabled);
		cursor: not-allowed;
	}

	.boolean-cell[editable] {
		overflow: initial;
	}

	.omnitable-cell-number,
	.omnitable-cell-date {
		font-variant-numeric: tabular-nums;
	}

	.itemRow:hover {
		box-shadow: var(--cz-shadow-sm);
		background-color: var(--cz-color-bg-primary-hover);
	}
	.groupRow:hover .checkbox:not(:checked):not(:hover),
	.itemRow:hover .checkbox:not(:checked):not(:hover) {
		box-shadow: 0 0 0 2px
			rgb(from var(--cz-color-text-primary) r g b / calc(alpha * 0.75)) inset;
	}
	.groupRow:hover .expand:not(:hover),
	.itemRow:hover .expand:not(:hover) {
		color: rgb(from var(--cz-color-text-primary) r g b / calc(alpha * 0.75));
	}

	${qt}

	.all {
		align-self: center;
	}

	.expand {
		width: calc(var(--cz-spacing) * 6);
		height: calc(var(--cz-spacing) * 6);
		padding: 0;
		flex: none;
		display: flex;
		align-items: center;
		justify-content: center;
		border: none;
		border-radius: 50%;
		cursor: pointer;
		background: none;
		transition: 0.25s background ease-in;
		outline: none;
		color: var(--cz-color-text-primary);
		background: transparent;

		&[hidden] {
			display: none;
		}
	}

	.groupRow .expand {
		margin: var(--cz-spacing);
	}

	.expand:not([aria-expanded]) svg {
		transform: scaleY(1);
	}
	.expand:active {
		background: rgb(
			from var(--cz-color-text-primary) r g b / calc(alpha * 0.15)
		);
	}
	.expand:hover {
		color: rgb(from var(--cz-color-text-primary) r g b / calc(alpha * 0.75));
	}

	.sg {
		display: inline-flex;
		cursor: pointer;
		align-items: center;
		overflow: hidden;
		flex: none;
		background: none;
		border: none;
		outline: none;
		color: inherit;
		padding: 0;
		transition: transform 0.3s ease;
	}
	.sg span {
		display: none;
	}
	.sg svg {
		display: block;
	}
	.sg[data-on] {
		color: var(--cz-color-text-primary);
	}
	.sg:not([data-on="desc"]) {
		transform: scaleY(-1);
	}

	.header-cell {
		display: inline-flex;
		position: relative;
	}
	.header-cell :not(.sg, cosmoz-clear-button) {
		min-width: 0;
		flex: auto;
	}

	.itemRow-minis {
		display: flex;
		justify-content: space-between;
		margin: 14px 12px 12px 12px;
		color: var(--cz-color-text-primary);
	}

	:host([mini]) {
		--checkbox-offset: calc(var(--cz-spacing) * 2);
	}

	:host([mini]) .itemRow .expand,
	:host([mini]) cosmoz-omnitable-item-expand {
		display: none;
	}

	:host([mini]) .header > cosmoz-omnitable-header-row {
		flex: 0;
	}

	:host([mini]) .groupRow {
		padding-left: var(--checkbox-offset);
	}

	:host([mini]) .header {
		padding-left: var(--checkbox-offset);
		justify-content: space-between;
	}

	:host([mini]) .itemRow {
		border-radius: 12px;
		box-shadow: inset 0 0 0 2px var(--cz-color-border-tertiary);
		margin-block: var(--checkbox-offset);
		margin-inline: var(--checkbox-offset);
		padding-block: 4px;
		border: none;
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
		background: var(--cz-color-bg-tertiary);
	}

	:host([mini]) .tableContent-scroller::-webkit-scrollbar-button:decrement,
	:host([mini]) .tableContent-scroller::-webkit-scrollbar-button:increment {
		width: 0px;
	}

	:host([mini]) cosmoz-omnitable-settings::part(columns) {
		display: none;
	}

	cz-spinner {
		width: calc(var(--cz-spacing) * 12);
		height: calc(var(--cz-spacing) * 12);
		position: absolute;
		top: 40%;
		right: 50%;
		border-color: var(--cz-color-gray-700);
		border-top-color: var(--cz-color-black);
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
`,bt=n=>{const e=n.replace(/"/gu,'""');return e.search(/("|,|\n)/gu)>=0?'"'+e+'"':n},io=(n,e,t)=>{const i=n.map(a=>bt(a.title)).join(";")+`
`,l=e.map(a=>n.map(s=>{const u=s.getString(s,a);return u==null?"":bt(String(u))}).join(";")+`
`);l.unshift(i),kt(new File(l,t,{type:"text/csv;charset=utf-8"}))},lo=(n,e)=>{const t=n.map(o=>o.title),r=e.map(o=>n.map(i=>{const l=i.toXlsxValue(i,o);return l??""}));return r.unshift(t),r},ao=(n,e,t,r)=>{const o=lo(n,e),i=new gn(t).addSheetFromData(o,r).generate();kt(new File([i],t,{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}))},ve=Symbol("index"),L=Symbol("All"),so=(n,e)=>{if(typeof n.findLastIndex=="function")return n.findLastIndex(e);for(let t=n.length-1;t>=0;t--)if(e(n[t],t,n))return t;return-1},uo=({columns:n,selectedItems:e,setSelectedItems:t,csvFilename:r,xlsxFilename:o,xlsxSheetname:i,topPlacement:l,enableSelectAll:a,allSelected:s,allItemsCount:u})=>{const d=e===L,m=d||e.length>0,g=e!==L&&a&&s,p=v=>c`<cosmoz-dropdown-menu
			part="extra"
			slot="extra"
			.placement=${l}
		>
			${hn({slot:"button"})}
			<cosmoz-button
				@click=${()=>io(n,v,r)}
			>
				${C("Save selected items as CSV")}
			</cosmoz-button>
			<cosmoz-button
				@click=${()=>ao(n,v,o,i)}
			>
				${C("Save selected items as XLSX")}
			</cosmoz-button>
			<slot name="download-menu"></slot
		></cosmoz-dropdown-menu>`,h=F(d,()=>u!==void 0?C("All {count} items selected",{count:u}):C("All items selected"),()=>C("{count} selected item",{count:e===L?0:e.length}));return c`<cosmoz-bottom-bar
		id="bottomBar"
		?active=${m}
		part="bottomBar"
		exportparts="bar: bottomBar-bar, info: bottomBar-info, buttons: bottomBar-buttons"
	>
		<span slot="info">
			${h}
			${F(g,()=>c`&nbsp;<span
							part="select-all-items"
							class="selectAllItems"
							role="button"
							tabindex="0"
							style="cursor: pointer; color: white;"
							@click=${()=>t(L)}
						>
							${C("Select all items")}
						</span>`)}
		</span>
		<slot name="actions" id="actions"></slot>
		<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
		<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
		${F(e!==L,()=>p(e))}
	</cosmoz-bottom-bar>`},co=({allSelected:n,onAllCheckboxChange:e,sortAndGroup:t,dataIsValid:r,data:o,columns:i,filters:l,groupOnColumn:a,setFilterState:s,settingsConfig:u,hideSelectAll:d})=>c`<sort-and-group-provider .value=${t}>
		<div class="header" id="header" part="header">
			${F(!d,()=>c`<input
						class="checkbox all"
						type="checkbox"
						.checked=${n}
						@input=${e}
						?disabled=${!r}
						part="all"
					/>`)}
			${F(d,()=>c` <cosmoz-omnitable-settings
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
	</sort-and-group-provider>`,mo=yt`
	:host {
		max-width: 100%;
		overflow-x: hidden;
		padding-inline: calc(var(--cz-spacing) * 3) calc(var(--cz-spacing) * 12);
	}
	.skeleton {
		width: 100%;
	}
	.skeleton > div {
		height: calc(var(--cz-spacing) * 4.5);
		display: flex;
		padding-block: 11px;
		width: 100%;
	}
	.skeleton > div:not(:last-child) {
		border-bottom: 1px solid var(--cz-color-bg-secondary);
	}
	.skeleton > div div:not(.handle) {
		background-image: linear-gradient(
			90deg,
			var(--cz-color-bg-quaternary),
			var(--cz-color-bg-secondary),
			var(--cz-color-bg-quaternary)
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
	</div>`};customElements.define("cosmoz-omnitable-skeleton",V(po,{styleSheets:[mo]}));const go=(n,e)=>{const{settingsConfig:t}=n,{processedItems:r,dataIsValid:o,filterIsTooStrict:i,loading:l,displayEmptyGroups:a,compareItemsFn:s,selectedItems:u,setSelectedItems:d,renderItem:m,renderGroup:g,error:p}=e;return c`${F(!l&&!o&&!p,()=>c`<div class="tableContent-empty">
					<slot name="empty-set-message">
						${nt({width:"96px",height:"96px",styles:"margin-right: 24px; fill: currentColor;"})}
						<div class="tableContent-empty-message">
							<h3>${C("Working set empty")}</h3>
							<p>${C("No data to display")}</p>
						</div>
					</slot>
				</div>`)}
		${F(i,()=>c`<div class="tableContent-empty">
					${nt({width:"96px",height:"96px",styles:"margin-right: 24px; fill: currentColor;"})}
					<div>
						<h3>${C("Filter too strict")}</h3>
						<p>${C("No matches for selection")}</p>
					</div>
				</div>`)}
		${F(l&&!r.length,()=>c`<div class="tableContent-empty overlay">
					<cosmoz-omnitable-skeleton
						.settingsConfig=${t}
					></cosmoz-omnitable-skeleton>
				</div>`)}
		${F(l&&r.length,()=>c`<div class="tableContent-empty overlay spinner">
					<cz-spinner></cz-spinner>
				</div>`)}
		${F(p,()=>c`<div class="tableContent-empty overlay">
					${fn({width:"96px",height:"96px",styles:"margin-right: 24px; fill: currentColor;"})}
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
				@selected-items-changed=${Me(d)}
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
		background-color: var(--cz-color-bg-tertiary);
		box-shadow: var(--cz-shadow-2xl);
		border-radius: 6px;
		z-index: 1;
	}

	.headline {
		padding: 10px 14px;
		display: flex;
		align-items: center;
		justify-content: space-between;

		& span {
			font-weight: var(--cz-font-weight-medium);
			font-size: var(--cz-text-xs);
			line-height: var(--cz-text-xs-line-height);
			color: var(--cz-color-text-primary);
			text-transform: uppercase;
		}
	}

	.contents {
		overflow-y: auto;
		scrollbar-width: 2px;
		scrollbar-gutter: stable;
		text-transform: uppercase;
		color: var(--cz-color-text-primary);
	}
	.contents::-webkit-scrollbar {
		width: 3px;
	}
	.contents::-webkit-scrollbar-thumb {
		background: var(--cz-color-bg-brand-solid);
	}
	.contents::-webkit-scrollbar-track-piece:start,
	.contents::-webkit-scrollbar-track-piece:end {
		background: transparent;
	}

	.heading {
		box-shadow: inset 0px -1px 0px var(--cz-color-border-primary);
		font-weight: var(--cz-font-weight-medium);
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		color: var(--cz-color-text-primary);
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
			inset 0px -1px 0px var(--cz-color-border-primary),
			inset 0px 1px 0px var(--cz-color-border-primary);
	}

	.list {
		flex: 1;
		padding: 2px 14px;
		min-width: 232px;
	}
	.item {
		display: flex;
		align-items: center;
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
		color: var(--cz-color-bg-brand-solid);
	}
	.title {
		flex: auto;
		overflow: hidden;
		text-overflow: ellipsis;
		font-weight: var(--cz-font-weight-regular);
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		color: var(--cz-color-text-secondary);
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
		box-shadow: inset 0px 1px 0px var(--cz-color-border-primary);

		& cosmoz-button {
			flex: 1;
		}
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
		box-shadow: inset 0 0 0 2px var(--cz-color-border-primary);
		border: none;
		border-radius: var(--cz-radius-sm);
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		text-transform: uppercase;
		text-align: left;
		padding: 6px 12px;
		background: transparent;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: space-between;
		transition:
			background 0.3s ease,
			box-shadow 0.3s ease;
	}
	.sg span {
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.sg[data-on] {
		background: var(--cz-color-bg-brand-secondary);
		box-shadow: none;
	}
	.sg svg {
		margin-left: 4px;
		flex: none;
		vertical-align: middle;
		transition: transform 0.3s ease;
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
		transition: color 0.3s ease;
	}
	cosmoz-dropdown::part(button):hover {
		color: var(--cz-color-text-primary);
	}
	cosmoz-dropdown::part(anchor) {
		display: inline-block;
	}
	.badge {
		position: absolute;
		top: 1px;
		right: 1px;
		background-color: var(--cz-color-bg-brand-solid);
		width: 8px;
		height: 8px;
		border-radius: 100%;
	}
	.headerDots {
		align-items: center;
		color: var(--cz-color-text-primary);
		display: flex;
		font-size: 20px;
		margin-left: 12px;
		min-width: 30px;
		transform: rotate(90deg);
	}
	cosmoz-omnitable-settings-ui {
		display: flex;
	}
`,de=n=>{const e=parseInt(n??"",10);return isFinite(e)?e:void 0},bo=n=>{const{config:e}=n,{settings:t,setSettings:r,collapsed:o,requestTween:i}=e,l=Ce({collapsed:o,settings:t.columns,requestTween:i,setSettings:S(a=>r(s=>({...s,columns:a})),[r])});return{...e,onDown:S(a=>{const s=a.target instanceof Element?a.target:null;!s||!s.closest(".pull")||(l.handle=a.currentTarget instanceof HTMLElement?a.currentTarget:null)},[l]),onDragStart:S(a=>{const s=a.target instanceof HTMLElement?a.target:null,u=de(s?.dataset.index);if(!s||!l.handle?.contains(s)||u==null)return a.preventDefault();l.handle=null,a.dataTransfer.effectAllowed="move",a.dataTransfer.setData("omnitable/sort-index",String(u)),a.dataTransfer.setData("text/plain",String(u)),setTimeout(()=>s.classList.add("drag"),0),s.addEventListener("dragend",d=>{(d.target instanceof HTMLElement?d.target:null)?.classList.remove("drag")},{once:!0})},[l]),onDragEnter:S(a=>{const s=a.currentTarget instanceof HTMLElement?a.currentTarget:null;!s||s!==a.target||(a.preventDefault(),a.dataTransfer.dropEffect="move",s.classList.add("dragover"))},[]),onDragOver:S(a=>{a.preventDefault(),a.currentTarget instanceof HTMLElement&&a.currentTarget.classList.add("dragover")},[]),onDragLeave:S(a=>{const s=a.currentTarget instanceof HTMLElement?a.currentTarget:null;s&&(a.relatedTarget instanceof Node&&s.contains(a.relatedTarget)||s.classList.remove("dragover"))},[]),onDrop:S(a=>{const s=de(a.dataTransfer?.getData("omnitable/sort-index")),u=a.currentTarget instanceof HTMLElement?a.currentTarget:null,d=de(u?.dataset.index),{settings:m,setSettings:g,requestTween:p}=l;u?.classList.remove("dragover"),a.preventDefault();const h=m.slice();h.splice(d+(s>=d?0:-1),0,h.splice(s,1)[0]),p?.(),g(h)},[l]),onToggle:S(a=>{const{settings:s,setSettings:u,requestTween:d}=l,m=s.map(h=>({...h,disabled:h.disabled||l.collapsed?.some(v=>v.name===h.name)})),g=a.target instanceof HTMLInputElement?a.target:null,p=de((a.target instanceof Element?a.target:null)?.closest("[data-index]")?.getAttribute("data-index"));p!=null&&(m.splice(p,1,{...s[p],disabled:!g?.checked,priority:g?.checked?s.reduce((h,v)=>Math.max(h,v.priority??0),0)+1:s[p]?.priority}),d?.(),u(m))},[l])}},xo=[xn({apply({availableHeight:n,elements:e}){Object.assign(e.floating.style,{maxHeight:`${Math.max(0,n)}px`})}}),...bn],vo=({onDragStart:n,onDragEnter:e,onDragOver:t,onDragLeave:r,onDrop:o,onDown:i,onToggle:l,collapsed:a,filters:s})=>(u,d)=>{const m=!!a?.find(p=>p.name===u.name),g=!u.disabled&&!m;return c` <div
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
			<button class="pull">${yn({width:"16",height:"16"})}</button>
			<label class="title" ?has-filter=${!Ot(s[u.name]?.filter)}
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
			<span> ${C("Sort and filter")} </span>
			<cosmoz-button
				variant="tertiary"
				aria-label="${C("Close settings")}"
				@click=${u=>{const d=u.currentTarget instanceof HTMLElement?u.currentTarget:null;d?.focus(),d?.blur()}}
			>
				${Yt({width:"16",height:"16"})}
			</cosmoz-button>
		</div>

		<div class="contents">
			<div
				class="heading"
				?data-opened=${l.columns}
				@click=${()=>a(u=>({...u,columns:!u.columns}))}
				part="columns columns-heading"
			>
				${C("Columns")} ${U({width:"20",height:"20"})}
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
				${C("Sort on")} ${U({width:"20",height:"20"})}
			</div>
			<cosmoz-collapse ?opened=${l.sort}> ${Wr()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${l.group}
				@click=${()=>a(u=>({...u,group:!u.group}))}
				part="groups groups-heading"
			>
				${C("Group on")} ${U({width:"20",height:"20"})}
			</div>
			<cosmoz-collapse ?opened=${l.group} part="groups groups-heading"
				>${qr()}</cosmoz-collapse
			>
		</div>

		${F(t,()=>c`<div class="buttons">
					<cosmoz-button
						variant="tertiary"
						@click=${o}
						?disabled=${!i}
					>
						${C("Reset")}
					</cosmoz-button>
					<cosmoz-button
						variant="primary"
						@click=${r}
						?disabled=${!i}
					>
						${C("Save")}
					</cosmoz-button>
				</div>`)}`};customElements.define("cosmoz-omnitable-settings-ui",V(yo,{styleSheets:[Se(ho)]}));const $o=({config:n,newLayout:e})=>c`
	<cosmoz-dropdown
		.placement="${e?"bottom-start":"bottom-end"}"
		.middleware="${xo}"
	>
		<div title="${C("Sort and filter")}" slot="button">
			${F(e,()=>c`<div class="headerDots">...</div>`,()=>c` ${vn({width:"20",height:"20",styles:"color: var(--cz-color-text-primary)"})}`)}
			${F(n?.badge,()=>c`<div class="badge"></div>`)}
		</div>
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${n}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`;customElements.define("cosmoz-omnitable-settings",V($o,{styleSheets:[Se(fo)]}));const ye=["sortOn","descending","groupOn","groupOnDescending"],me=n=>e=>typeof e=="object"&&e!==null&&"name"in e&&e.name===n,zo=(n=[],e=[],t=[])=>{const r=e.filter(l=>n.some(me(l.name))),o=n.filter(l=>l.name!=null&&!e.some(me(l.name))&&!t.some(me(l.name))),i=t.filter(l=>!e.some(me(l.name)));return[...r,...i.flatMap(l=>{const a=n.find(s=>s.name===l.name);return a?{...l,title:a.title??l.title??"",minWidth:parseInt(a.minWidth??"0",10)}:[]}),...o.map(l=>{const{name:a,title:s,priority:u,minWidth:d,width:m,flex:g}=l;return{name:a??"",title:s??"",priority:u??0,minWidth:parseInt(d??"0",10),width:parseInt(m??"0",10),flex:parseInt(g??"0",10)}})]},wo=(n,e)=>({...e,...Ne(Array.from(ye))(n),columns:n.columns?.map(Ne(["name","priority","width","flex","disabled"]))}),So=({columns:n,settings:e,savedSettings:t,initial:r})=>({...Object.fromEntries(ye.flatMap(i=>r?.[i]!=null?[[i,r[i]]]:[])),...t?Ne(Array.from(ye))(t):{},...e,columns:zo(n,e?.columns,t?.columns)}),Co=({prefix:n="omnitable-"}={})=>({write:async(t,r)=>{const o=n+t;try{r?localStorage.setItem(o,JSON.stringify(r)):localStorage.removeItem(o)}catch(i){console.error(i)}},read:async t=>{if(!t)return null;try{const r=localStorage.getItem(n+t);return r==null?null:JSON.parse(r)}catch(r){return console.error(r),null}}}),Io=St(Co),_o=()=>{const n=Pe(Io);return O(()=>n(),[n])},Fo=(n,e,t,r)=>{const[o,i]=R(n?void 0:null),{read:l,write:a}=_o();return T(async()=>{n&&i(await l(n))},[n,l]),{settingsId:n,savedSettings:o,onSave:S(async()=>{if(!n)return;const s=wo(e,o);await a(n,s),t(),i(s)},[e,o]),onReset:S(async s=>{t(),s.shiftKey&&(await a(n),i(null)),r?.()},[r]),hasChanges:e!=null}},ko=({settingsId:n,host:e})=>{const t=O(()=>Object.fromEntries(ye.map(x=>[x,e[x]])),[]),r=Be(),o=S(()=>{r.current?.(t)},[t]),[i,l]=R(),[a,s]=R({columns:!0,sort:!0}),{savedSettings:u,...d}=Fo(n,i,l,o),{enabledColumns:m,disabledFiltering:g}=e,p=Zn(e,{enabledColumns:m,disabledFiltering:g}),h=O(()=>So({columns:p,settings:i,savedSettings:u??void 0,initial:t}),[p,i,u]),v=O(()=>h.columns.map(x=>p.find(b=>b.name===x.name)).filter(x=>x!==void 0),[p,...h.columns.map(x=>x.name)]);return{...d,savedSettings:u,opened:a,setOpened:s,settings:h,columns:v,setSettings:l,resetRef:r}},xt=n=>Number.isFinite(n)?n:0,Oo=(n,e)=>{const t=[];let[r,o]=n.reduce(([d,m],{width:g,flex:p})=>[d+g,m+p],[0,0]),i=e-r,l=xt(i/o),a=0,s=0,u=0;for(let d=0;d<n.length;d++){const{width:m,minWidth:g,flex:p}=n[d],h=i>=0?l*p:m*i/r;if(g>m+h){a+=m,s+=g,u+=p,t[d]=g;continue}if(p===0){a+=m,s+=m,t[d]=m;continue}}r-=a,i=e-s-r,o-=u,l=xt(i/o);for(let d=0;d<n.length;d++){if(t[d]!=null)continue;const{width:m,flex:g}=n[d],p=i>=0?l*g:m*i/r;t[d]=m+p}return t},Ao=(n,e)=>{const t=so(n,l=>l!=null&&l>0),r=(l,a)=>`.cell[name="${l}"], cosmoz-omnitable-skeleton::part(cell-${l}){width: ${Math.floor(a)}px;padding: 0 min(3px, ${a/2}px)}`,o=l=>`cosmoz-omnitable-resize-nub[name="${l}"]{display:none}`,i=l=>`cosmoz-omnitable-resize-nub[name="${l}"], .cell[name="${l}"]{display:none}`;return e.map((l,a)=>{const s=n[a];if(s==null||s===0)return i(l.name);const u=r(l.name,s);return a===t?`${u}
${o(l.name)}`:u}).join(`
`)},Wt=(n,e,t)=>{const r=n.filter(a=>!a.hidden),o=r.reduce((a,{width:s})=>a+s,0);if(r.length>1&&o>e)return Wt(r.slice(1),e,t);const i=r.reduce(([a,s],u,d)=>[Math.max(a,u.index),u.index>a?d:s],[-1,-1])[1];return i!==-1&&(r[i].flex=1),Oo(r,e).reduce((a,s,u)=>(a[r[u].index]=s,a),new Array(t).fill(void 0))},Vo=(n,e)=>n.length===0?".cell {display: none;}":Ao(n,e),Do=20,To=44,Eo=24,Xt=Do+To+Eo,Lo=(n,e)=>T(()=>{const t=([o])=>{o.contentRect?.width!==0&&e(o.contentRect.width-Xt)},r=new ResizeObserver(t);return r.observe(n),()=>r.unobserve(n)},[]),Mo=n=>{const[e,t]=R(()=>n.getBoundingClientRect().width-Xt);return Lo(n,t),e},Ro=({canvasWidth:n,groupOnColumn:e,config:t,miniColumn:r})=>O(()=>{if(!Array.isArray(t)||n==null||n===0)return[];const o=t.map((i,l)=>({minWidth:i.minWidth,width:i.width,flex:i.flex,priority:i.priority,name:i.name,index:l,hidden:i.name===e?.name||i.disabled})).map(i=>r?{...i,hidden:r.name!==i.name}:i).sort(({index:i,priority:l},{index:a,priority:s})=>l===s?a-i:l-s);return Wt(o,n,o.length)},[n,e,t]),No=({host:n,canvasWidth:e,columns:t})=>{const r=n.miniBreakpoint??480,o=O(()=>e<=r,[e,r]),i=O(()=>o?t?.filter(u=>u.mini!=null).sort((u,d)=>(u.mini??0)-(d.mini??0)):[],[t,o]),[l,...a]=i??[],s=!!l;return T(()=>{n.toggleAttribute("mini",s)},[s]),{isMini:s&&o,miniColumn:l,miniColumns:a}},jo=({host:n,canvasWidth:e,layout:t,setSettings:r,requestTween:o})=>{const i=Be();i.current=l=>{o(),r(a=>{const s=a.columns,{detail:{newWidth:u,column:d}}=l,m=s.findIndex(h=>h.name===d.name),g=[],p=s.reduce((h,v)=>Math.max(h,v.priority),-1/0);for(let h=0;h<t.length;h++)if(g[h]={...s[h]},h<m&&t[h]&&(g[h].width=t[h],g[h].flex=0,g[h].priority=p),h===m){const v=t.reduce((x,b,y)=>y<m&&b?x-b:x,e);g[h].width=Math.min(v,Math.max(u,s[h].minWidth)),g[h].flex=0,g[h].priority=p}return{...a,columns:g}})},T(()=>{const l=a=>i.current?.(a);return n.addEventListener("column-resize",l),()=>n.removeEventListener("column-resize",l)},[])},Po=(n,e)=>{const t=O(()=>{let r=!1,o;const i=()=>{if(!r)return;o=requestAnimationFrame(i),n()&&(r=!1)};return{start:()=>{r=!0,cancelAnimationFrame(o),o=requestAnimationFrame(i)},stop:()=>{r=!1,cancelAnimationFrame(o)}}},[]);T(()=>{t.start()},e),T(()=>()=>t.stop(),[])},Bo=(n=0,e=0)=>Math.abs(n-e)<.1,Ho=(n,e=1.9,t=Jt,r)=>{const o=Ce({target:n,speedFactor:e,onConverge:r}),i=S(()=>{if(!o.tween)return o.tween=o.target,t(o.tween),o.onConverge?.(),!0;if(o.target.every((l,a)=>o.tween[a]===l))return t(o.tween),o.onConverge?.(),!0;if(o.tween=o.target.map((l,a)=>Bo(o.tween[a],l)?l:(o.tween[a]??0)+((l??0)-(o.tween[a]??0))/o.speedFactor||0),t(o.tween),o.tween.every((l,a)=>l===o.target[a]))return o.onConverge?.(),!0},[]);Po(i,[n])},Go=n=>{const e=O(()=>new CSSStyleSheet,[]);return T(()=>{n.shadowRoot.adoptedStyleSheets=[...n.shadowRoot.adoptedStyleSheets,e]},[]),e},qo=({host:n,columns:e,settings:t,setSettings:r,resizeSpeedFactor:o,sortAndGroupOptions:i})=>{const l=Mo(n),{isMini:a,miniColumn:s,miniColumns:u}=No({host:n,canvasWidth:l,columns:e}),{groupOnColumn:d}=i,m=Ro({canvasWidth:l,groupOnColumn:d,miniColumn:s,config:t.columns}),g=Go(n),p=O(()=>t.columns.reduce((z,f,$)=>m[$]!=null||f.name===d?.name||f.disabled?z:[...z,e.find(w=>w.name===f.name)],[]),[e,t,m]),[h,v]=R(1),x=S(()=>v(o??1.9),[o]),b=S(()=>v(1),[]),y=Ce({columns:t.columns});return Ho(m,h,z=>{const f=Vo(z,y.columns);g.replace(f)},b),jo({host:n,canvasWidth:l,layout:m,setSettings:z=>r(z(t)),requestTween:x}),{isMini:a,collapsedColumns:p,miniColumns:u,requestTween:x}},Wo=({host:n,...e})=>{const{csvFilename:t="omnitable.csv",xlsxFilename:r="omnitable.xlsx",xlsxSheetname:o="Omnitable",topPlacement:i="top-end"}=n;return{csvFilename:t,xlsxFilename:r,xlsxSheetname:o,topPlacement:i,...e}},Xo=({host:n,selectedItems:e,data:t,sortAndGroupOptions:r,collapsedColumns:o,settings:i,filterFunctions:l,settingS:a,filters:s,requestTween:u,...d})=>{const m=e===L||t&&t.length>0&&e.length===t.length,g=x=>{x.target.checked?n.shadowRoot.querySelector("#groupedList").selectAll():n.shadowRoot.querySelector("#groupedList").deselectAll()},{groupOnColumn:p}=r,h=O(()=>[p,...o,...i.columns.filter(x=>x.disabled)].some(x=>x&&Object.keys(l).includes(x.name)),[l,i,o]),v=O(()=>({...a,collapsed:o,badge:h,filters:s,requestTween:u}),[a,o,h,s,u]);return T(()=>{const x=n.shadowRoot.querySelector("#tableContent"),b=new ResizeObserver(y=>requestAnimationFrame(()=>{n.style.setProperty("--ot-height",y[0]?.contentRect.height+"px")}));return b.observe(x),()=>b.unobserve(x)},[]),{allSelected:m,onAllCheckboxChange:g,data:t,settingsConfig:v,filters:s,groupOnColumn:p,sortAndGroup:r.sortAndGroup,...d}},Uo=n=>n?"groupRow groupRow-folded":"groupRow",Ko=({item:n,index:e})=>t=>F(t?.length>0,()=>c`
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
					?hidden="${Ot(e.length)}"
					?aria-expanded="${g}"
					@click="${p}"
				>
					${U({width:"16",height:"16"})}
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
	`,Yo=({onCheckboxChange:n,dataIsValid:e,groupOnColumn:t})=>(r,o,{selected:i,folded:l,toggleFold:a})=>c` <div
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
				${U({width:"16",height:"16"})}
			</button>
		</div>`,Jo=({host:n,error:e,dataIsValid:t,processedItems:r,columns:o,collapsedColumns:i,miniColumns:l,sortAndGroupOptions:a,rowPartFn:s,...u})=>{const{loading:d=!1,displayEmptyGroups:m=!1,compareItemsFn:g}=n,p=Be({shiftKey:!1,ctrlKey:!1}),h=S(y=>{const z=y.target.dataItem,f=y.target.checked;p.current.shiftKey?n.shadowRoot.querySelector("#groupedList").toggleSelectTo(z,f):p.current.ctrlKey?(y.target.checked=!0,n.shadowRoot.querySelector("#groupedList").selectOnly(z)):n.shadowRoot.querySelector("#groupedList").toggleSelect(z,f),y.preventDefault(),y.stopPropagation()},[]);T(()=>{const y=({shiftKey:z,ctrlKey:f})=>{p.current={shiftKey:z,ctrlKey:f}};return window.addEventListener("keydown",y),window.addEventListener("keyup",y),()=>{window.removeEventListener("keydown",y),window.removeEventListener("keyup",y)}},[]);const v=S(y=>{const z=y.composedPath();z.slice(0,z.indexOf(y.currentTarget)).find($=>$.matches?.("a, .checkbox, .expand"))||n.dispatchEvent(new window.CustomEvent("omnitable-item-click",{bubbles:!0,composed:!0,detail:{item:y.currentTarget.dataItem,index:y.currentTarget.dataIndex}}))},[]),{groupOnColumn:x}=a,b=S((y,z)=>f=>er(n,y,z,f),[]);return{...u,processedItems:r,dataIsValid:t,filterIsTooStrict:t&&r.length<1,loading:d,compareItemsFn:g,displayEmptyGroups:m,error:e,renderItem:O(()=>Qo({columns:o,collapsedColumns:i,miniColumns:l,onItemClick:v,onCheckboxChange:h,dataIsValid:t,groupOnColumn:x,onItemChange:b,rowPartFn:s}),[o,i,v,h,t,x,b,s]),renderGroup:O(()=>Yo({onCheckboxChange:h,dataIsValid:t,groupOnColumn:x}),[h,t,x])}},Zo=(n,e)=>{if(n===e)return 0;if(n==null)return-1;if(e==null)return 1;const t=typeof n,r=typeof e;return t==="object"&&r==="object"?n.toString()<e.toString()?-1:1:t==="number"&&r==="number"?n-e:t==="string"&&r==="string"?n<e?-1:1:t==="boolean"&&r==="boolean"?n?-1:1:(console.warn("unsupported sort",t,n,r,e),0)},Te=(n,e)=>(t,r)=>Zo(n(t),n(r))*(e?-1:1),ei=n=>n.replace(/([a-z0-9])([A-Z])/gu,"$1-$2").toLowerCase(),vt=(n,e)=>{!n||!e||Object.entries(e).forEach(([t,r])=>{n[N].__ownChange=!0,n[N][t]=r,n[N].__ownChange=!1,n[N].dispatchEvent(new CustomEvent(`${ei(t)}-changed`,{bubbles:!0,detail:{value:r}}))})},Ee=(n,e)=>Object.assign(n,{[ve]:e}),pe=Symbol("unparsed"),ti=({data:n,columns:e,hashParam:t,sortAndGroupOptions:r,noLocalSort:o,noLocalFilter:i})=>{const{groupOnColumn:l,groupOnDescending:a,sortOnColumn:s,descending:u}=r,d=S(([f,$])=>{const w=e.find(({name:_})=>_===f);return w==null?[f,void 0]:[f,$.filter&&w.serializeFilter(w,$.filter)]},[e]),m=S(([f,$])=>{const w=e.find(({name:k})=>k===f);if(w==null)return[f,{[pe]:$}];const _={filter:w.deserializeFilter(w,$)};return vt(w,_),[f,_]},[e]),[g,p]=Z({},t,{multi:!0,suffix:"-filter--",write:d,read:m}),h=S((f,$)=>p(w=>{const _=we($,w[f]);return vt(e.find(k=>k.name===f),_),{...w,[f]:{...w[f],..._}}}),[e,p]),v=O(()=>Object.values(g).map(f=>f.filter),[g]),x=O(()=>Object.fromEntries(e.map(f=>[f.name,!f.noLocalFilter&&f.getFilterFn(f,g[f.name]?.filter)]).filter(([,f])=>!!f)),[e,...v]),b=O(()=>!Array.isArray(n)||n.length===0?[]:Object.entries(x).length===0||i?n.slice():n.filter(f=>Object.values(x).every($=>$(f))),[n,x,i]),y=O(()=>{if(!o&&!l&&s!=null&&s.sortOn!=null)return b.slice().sort(Te(f=>s.getComparableValue({...s,valuePath:s.sortOn},f),u));if(l!=null&&l.groupOn!=null){const f=b.reduce(($,w)=>{const _=l.getComparableValue({...l,valuePath:l.groupOn},w);if(_===void 0)return $;let k=$.find(W=>W.id===_);return k?(k.items.push(w),$):(k={id:_,name:_,items:[w]},[...$,k])},[]);return f.sort(Te($=>l.getComparableValue({...l,valuePath:l.groupOn},$.items[0]),a)),!s||o?f:f.filter($=>Array.isArray($.items)).map($=>($.items.sort(Te(w=>s.getComparableValue({...s,valuePath:s.sortOn},w),u)),$))}return b},[b,l,a,s,u,o]),z=O(()=>{let f=0,$=0;const w=[];return y.forEach(_=>{if(Array.isArray(_.items)){Ee(_,$++),_.items.forEach(k=>{Ee(k,f++),w.push(k)});return}return Ee(_,f++),w.push(_)},[]),w},[y]);return T(()=>{p(f=>Object.values(f).some(w=>w[pe]!=null)?Object.fromEntries(Object.entries(f).map(([w,_])=>_[pe]==null?[w,_]:m([w,_[pe]]))):f)},[m]),{processedItems:y,visibleData:z,filters:g,filterFunctions:x,setFilterState:h}},ni=n=>{const e=r=>{const o=n.data.indexOf(r);if(o<0)return null;const i=n.data.splice(o,1);if(n.data=n.data.slice(),Array.isArray(i)&&i.length>0)return i[0]},t=(r,o)=>{n.data.splice(r,1,o),n.data=n.data.slice()};return{removeItem:e,removeItems(r){const o=[];for(let i=r.length-1;i>=0;i-=1){const l=n.removeItem(r[i]);l!=null&&o.push(l)}return o},replaceItemAtIndex:t,replaceItem(r,o){const i=n.data.indexOf(r);if(i>-1)return t(i,o)},selectItem(r){n.shadowRoot.querySelector("#groupedList").select(r)},selectAll(){n.shadowRoot.querySelector("#groupedList").selectAll()},deselectAll(){n.shadowRoot.querySelector("#groupedList").deselectAll()},deselectItem(r){n.shadowRoot.querySelector("#groupedList").deselect(r)},isItemSelected(r){return n.shadowRoot.querySelector("#groupedList").isItemSelected(r)}}},ri=({host:n,visibleData:e,filters:t,...r})=>{const{setFilterState:o}=r,i=O(()=>ni(n),[]),[l,a]=It("selectedItems",[]);je(r,Object.values(r)),je(i,Object.values(i)),T(()=>{const u=d=>o(d.detail.name,m=>({...m,...d.detail.state}));return n.addEventListener("legacy-filter-changed",u),()=>n.removeEventListener("legacy-filter-changed",u)},[]),X("visibleData",e),X("sortedFilteredGroupedItems",r.sortedFilteredGroupedItems),X("sortOn",r.sortOn),X("descending",r.descending),X("isMini",r.isMini);const s=O(()=>Object.fromEntries(Object.entries(t).filter(([,{filter:u}])=>u!==void 0).map(([u,{filter:d}])=>[u,d])),[t]);return X("filters",s,Object.values(s)),{selectedItems:l,setSelectedItems:a}},oi=n=>{const{hashParam:e,settingsId:t,data:r,resizeSpeedFactor:o,noLocal:i,noLocalSort:l=i,noLocalFilter:a=i,error:s,rowPartFn:u}=n,d=ko({settingsId:t,host:n}),{settings:m,setSettings:g,columns:p,resetRef:h,savedSettings:v}=d,x=v!==void 0,b=Qr(p,e,{settings:m,setSettings:g,resetRef:h,ready:x}),{processedItems:y,visibleData:z,filters:f,setFilterState:$,filterFunctions:w}=ti({data:r,columns:p,hashParam:e,sortAndGroupOptions:b,noLocalSort:l,noLocalFilter:a}),{isMini:_,collapsedColumns:k,miniColumns:W,requestTween:H}=qo({host:n,columns:p,settings:m,setSettings:g,resizeSpeedFactor:o,sortAndGroupOptions:b}),Ye=r&&Array.isArray(r)&&r.length>0,{selectedItems:Ve,setSelectedItems:Je}=ri({host:n,visibleData:z,sortedFilteredGroupedItems:y,columns:p,filters:f,setFilterState:$,isMini:_,...b}),Ze=Xo({host:n,selectedItems:Ve,sortAndGroupOptions:b,dataIsValid:Ye,data:r,columns:p,filters:f,collapsedColumns:k,settings:m,filterFunctions:w,settingS:d,setFilterState:$,hideSelectAll:n.hideSelectAll===!0,requestTween:H});return{header:Ze,list:Jo({host:n,error:s,dataIsValid:Ye,processedItems:y,selectedItems:Ve,setSelectedItems:Je,columns:p,collapsedColumns:k,miniColumns:W,sortAndGroupOptions:b,rowPartFn:u}),footer:Wo({host:n,selectedItems:Ve,allSelected:Ze.allSelected,setSelectedItems:Je,columns:p,enableSelectAll:n.enableSelectAll,allItemsCount:n.allItemsCount})}};customElements.define("cosmoz-grouped-list-row",class extends HTMLElement{get item(){return this._item}set item(e){this._item=e,this._render()}get index(){return this._index}set index(e){this._index=e,this._render()}get renderFn(){return this._renderFn}set renderFn(e){this._renderFn=e,this._render()}_render(){this._item==null||this._index==null||this._renderFn==null||Le(this._renderFn(this._item,this._index),this)}});const ii={group:Symbol("group")},Ae=(n,e)=>(e.has(n)||e.set(n,{}),e.get(n)),li=(n,e)=>!!Ae(n,e).expanded,ai=(n,e)=>!!Ae(n,e).folded,$e=n=>n?n.items instanceof Array:!1,si=n=>{if(!Array.isArray(n)||n.length===0)return;const e=Array.isArray(n[0]?.items);if(!n.every(r=>Array.isArray(r.items)===e))throw new Error("Data must be homogeneous.")},ui=(n,e,t)=>Array.isArray(n)?(si(n),n.reduce((o,i)=>{const l=i;return l.items?l.items.length?Ae(i,t).folded?o.concat(i):o.concat(i,l.items.map(a=>Object.assign(a,{[ii.group]:i}))):e?o.concat(i):o:o.concat(i)},[])):void 0,ci=(n,...e)=>typeof n=="function"?n(...e):n,di=(n,e)=>n===e,mi=()=>{const[n,e]=R(()=>[new WeakMap]);return{setItemState:S((r,o)=>e(([i])=>{const l=Ae(r,i);return Object.assign(l,ci(o,l)),[i]}),[]),state:n[0],signal:n}},pi=()=>{const{setItemState:n,state:e,signal:t}=mi(),r=S((i,l)=>{$e(i)&&n(i,a=>({folded:l!==void 0?l:!a.folded}))},[]),o=S((i,l)=>{$e(i)||n(i,a=>({expanded:l!==void 0?!l:!a.expanded}))},[]);return{state:e,signal:t,toggleFold:r,toggleCollapse:o}},gi=({compareItemsFn:n,data:e,flatData:t})=>{const[r,o]=It("selectedItems",()=>[]),[i,l]=R(),a=S(b=>r===L||r.includes(b),[r]),s=S(b=>r===L||(b?.items?.every(a)??!1),[r,a]),u=S(b=>a(b)||s(b),[a,s]),d=S(b=>{const z=b.items??[b];o(f=>f===L?f:[...f,...z.filter($=>!f.includes($))]),l(b)},[]),m=S(b=>{const z=b.items??[b];o(f=>f===L?(t??[]).filter($=>!$e($)).filter($=>!z.includes($)):f.filter($=>!z.includes($))),l(b)},[t]),g=S(b=>{o(b.items?.slice()||[b]),l(b)},[]),p=S(()=>{o(e.flatMap(b=>b.items||b)),l(void 0)},[e]),h=S(()=>{o([]),l(void 0)},[]),v=S((b,y=!u(b))=>y?d(b):m(b),[u]),x=S((b,y)=>{if(!t)return;const z=i?t.findIndex(w=>n(w,i)):-1;if(z<0)return v(b,y);const[f,$]=[z,t.indexOf(b)].sort((w,_)=>w-_);t.slice(f,$+1).forEach((w,_,k)=>{_>0&&_<k.length-1&&$e(w)||v(w,y)}),l(b)},[t,n,v]);return T(()=>o(b=>b!==L&&b.length>0&&t?t.filter(y=>b.find(z=>n(y,z))):b),[t]),{selectedItems:r,isItemSelected:a,isGroupSelected:s,isSelected:u,select:d,deselect:m,selectOnly:g,selectAll:p,deselectAll:h,toggleSelect:v,toggleSelectTo:x}},hi={host:{position:"relative",display:"flex",flexDirection:"column"}},fi=n=>{const{data:e,renderItem:t,renderGroup:r,displayEmptyGroups:o,compareItemsFn:i=di}=n,{toggleFold:l,toggleCollapse:a,state:s,signal:u}=pi(),d=O(()=>ui(e,o,s),[e,o,u]),{selectedItems:m,isItemSelected:g,isGroupSelected:p,isSelected:h,select:v,deselect:x,selectOnly:b,selectAll:y,deselectAll:z,toggleSelect:f,toggleSelectTo:$}=gi({compareItemsFn:i,data:e,flatData:d}),w=S((k,W)=>Array.isArray(k.items)?r(k,W,{selected:p(k),folded:ai(k,s),toggleSelect:H=>f(k,typeof H=="boolean"?H:void 0),toggleFold:()=>l(k)}):t(k,W,{selected:g(k),expanded:li(k,s),toggleSelect:H=>f(k,typeof H=="boolean"?H:void 0),toggleCollapse:()=>a(k)}),[t,r,m,f,u]);$t(()=>{Object.assign(n.style,hi.host)},[]);const _={toggleFold:l,toggleCollapse:a,isItemSelected:g,isGroupSelected:p,isSelected:h,select:v,deselect:x,selectOnly:b,selectAll:y,deselectAll:z,toggleSelect:f,toggleSelectTo:$};return je(_,Object.values(_)),{renderRow:w,flatData:d}},bi=({renderRow:n,flatData:e})=>Zt({items:e,renderItem:(t,r)=>c`<cosmoz-grouped-list-row
				.item=${t}
				.index=${r}
				.renderFn=${n}
			></cosmoz-grouped-list-row>`}),xi=n=>bi(fi(n));customElements.define("cosmoz-grouped-list",V(xi,{useShadowDOM:!1}));const vi=n=>window.ShadyCSS?.ApplyShim?.transformCssText?.(n)||n,yi=n=>{const{header:e,list:t,footer:r}=oi(n);return c`
		<style>
			${en([],()=>vi(oo))}
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
	`};customElements.define("cosmoz-omnitable",V(yi,{observedAttributes:["hash-param","sort-on","group-on","descending","group-on-descending","hide-select-all","settings-id","no-local","no-local-sort","no-local-filter","disabled-filtering","loading","mini-breakpoint","inline","enable-select-all"]}));const ze=`
	<slot name="actions" slot="actions"></slot>
`;c(Object.assign([ze],{raw:[ze]}));_t(Object.assign([ze],{raw:[ze]}));const _i={title:"Components/ComsmozOmnitableFullDemo",component:"cosmoz-omnitable",tags:["autodocs"],args:{loading:!1,locale:"en",sortOn:"",groupOn:"",descending:!1,groupOnDescending:!1,hashParam:"",settingsId:"",selectedItems:[],disabledFiltering:!1,enableSelectAll:!1,allItemsCount:1e4},argTypes:{loading:{control:"boolean",description:"Show loading state",table:{defaultValue:{summary:"false"}}},locale:{control:"select",options:["en","fr","sv"],description:"Language locale",table:{defaultValue:{summary:"en"}}},selectedItems:{control:"object",description:"Show selected items"},allItemsCount:{control:"number",description:"Total number of items"},data:{control:"object",description:"Show specified items"},sortOn:{control:"text",description:'Column property name to sort on (e.g., "amount", "date", "id")'},groupOn:{control:"text",description:'Column property name to group on (e.g., "amount", "date", "id")'},descending:{control:"boolean",description:"Sort on descending"},groupOnDescending:{control:"boolean",description:"Group on descending"},hashParam:{control:"text",description:"Hash parameter for URL state management"},settingsId:{control:"text",description:"ID for storing table settings"},disabledFiltering:{control:"boolean",description:"Disable filter inputs in all column headers",table:{defaultValue:{summary:"false"}}}},render:n=>c`
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

                <cosmoz-button slot="actions">
                    ${$n({styles:"vertical-align: middle; fill: currentColor;"})}
                    <span>Remove items</span>
                </cosmoz-button>
            </cosmoz-omnitable>
        `,play:async()=>{console.log("Current hash:",window.location.hash)}},ge={args:{data:At(10,10,10)}},he={args:{data:At(2,2,10)}},fe={args:{data:[]}};ge.parameters={...ge.parameters,docs:{...ge.parameters?.docs,source:{originalSource:`{
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
