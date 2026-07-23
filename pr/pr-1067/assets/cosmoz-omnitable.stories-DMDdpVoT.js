import{i as e}from"./preload-helper-CT_b8DTk.js";import{_t as t,bt as n,n as r,t as i,vt as a,xt as o}from"./iframe-BfMzZx5K.js";import{$ as s,A as c,B as l,Bt as u,C as d,Ct as f,D as p,Dt as m,E as h,Et as g,F as _,G as v,H as y,Ht as b,I as ee,It as x,Kt as S,L as te,M as ne,N as re,Nt as ie,O as ae,Ot as oe,P as se,Pt as ce,Q as le,R as C,Rt as ue,S as w,T as de,Tt as fe,V as pe,W as me,Wt as he,X as ge,Xt as _e,Y as T,Yt as ve,Z as ye,_ as be,_t as xe,a as Se,an as Ce,at as E,b as we,bt as Te,c as Ee,ct as De,d as Oe,dt as D,en as ke,et as Ae,f as je,ft as Me,g as Ne,gt as Pe,h as Fe,ht as Ie,in as Le,it as O,j as Re,jt as ze,k as Be,l as Ve,lt as He,mt as Ue,n as We,nn as k,nt as Ge,o as Ke,ot as qe,p as Je,pt as Ye,q as Xe,qt as Ze,r as Qe,rn as A,rt as $e,s as et,st as tt,t as nt,u as rt,ut as j,v as it,vt as at,w as ot,wt as st,x as ct,xt as lt,y as ut,yt as dt,z as ft}from"./dist-BazpNwuU.js";var pt,mt,ht=e((()=>{v(),g(),pt=T`
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
`,mt=()=>n`
	<style>
		${pt}
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
`,customElements.define(`cosmoz-clear-button`,m(mt))})),M,gt,_t,vt,yt,N,P=e((()=>{D(),M=({valuePath:e},t)=>j(t,e),gt=M,_t=M,vt=({valuePath:e},t)=>n=>{let r=j(n,e);return r==null?!1:r.toString().toLowerCase().trim().includes(t.toLowerCase().trim())},yt=(e,t)=>t===``||t==null?null:t,N=e=>class extends e{static get properties(){return{isOmnitableColumn:{type:Boolean,value:!0},title:{type:String},valuePath:{type:String,notify:!0},values:{type:Array,notify:!0},filter:{type:Object},noLocalFilter:{type:Boolean},disabled:{type:Boolean,value:!1,notify:!0},editable:{type:Boolean,notify:!0},loading:{type:Boolean,value:!1,notify:!0},externalValues:{type:Boolean,value:!1,notify:!0},name:{type:String},sortOn:{type:String},groupOn:{type:String},noSort:{type:Boolean,value:!1},disabledFiltering:{type:Boolean,value:!1},width:{type:String,value:`75px`},minWidth:{type:String,value:`40px`},flex:{type:String,value:`1`},cellClass:{type:String,value:`default-cell`},headerCellClass:{type:String,value:`default-header-cell`},priority:{type:Number,value:0},hidden:{type:Boolean,notify:!0},preferredDropdownHorizontalAlign:{type:String,value:`right`},renderHeader:{type:Function},renderCell:{type:Function},renderEditCell:{type:Function},renderGroup:{type:Function},mini:{type:Number,value:null},renderMini:{type:Function}}}static get observers(){return[`notifyFilterChange(filter)`]}notifyFilterChange(e){this.__ownChange||this.dispatchEvent(new CustomEvent(`legacy-filter-changed`,{detail:{name:this.name,state:this.legacyFilterToState(e)},bubbles:!0}))}legacyFilterToState(e){return{filter:e}}getFilterFn(){}getString(e,t){return M(e,t)}toXlsxValue(e,t){return gt(e,t)}cellTitleFn(e,t){return this.getString(e,t)}headerTitleFn(e){return e.title}serializeFilter(e,t){return yt(e,t)}deserializeFilter(e,t){if(t==null)return null;if(typeof t==`string`)try{return window.decodeURIComponent(t)}catch{return null}return t}getComparableValue(e,t){return _t(e,t)}computeSource(e,t){return t}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n),this.dispatchEvent(new CustomEvent(`cosmoz-column-prop-changed`,{bubbles:!0}))}}})),bt,xt,St,Ct,wt,Tt,Et,Dt=e((()=>{C(),ht(),E(),o(),k(),P(),bt=e=>t=>e(n=>{if(n.inputValue===void 0&&t.target.value===``)return n;clearTimeout(n.t);let r=setTimeout(()=>e(e=>({...e,filter:e.inputValue})),1e3);return{...n,inputValue:t.target.value,t:r}}),xt=e=>()=>e(e=>({...e,filter:e.inputValue})),St=e=>t=>{t.keyCode===13&&(t.preventDefault(),e(e=>({...e,filter:e.inputValue})))},Ct=e=>t=>e(e=>({...e,headerFocused:t.detail.value})),wt=e=>()=>e(e=>({...e,filter:null,inputValue:null})),Tt=e=>e!=null&&e!==``,Et=class extends N(O){static get properties(){return{minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},inputValue:{type:Object,notify:!0}}}getFilterFn(e,t){if(!(t==null||t===``))return vt(e,t)}renderCell(e,{item:t}){return n`<span class="default-column">${M(e,t)}</span>`}renderEditCell(e,{item:t},r){return n`<cosmoz-input
			no-label-float
			type="text"
			@change=${e=>r(e.target.value)}
			.value=${M(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,inputValue:r,headerFocused:i},a){return n`<cosmoz-input
			label=${e.title}
			?disabled=${e.disabledFiltering}
			.value=${r??t}
			@value-changed=${bt(a)}
			focused=${i}
			@focused-changed=${Ct(a)}
			@keydown=${St(a)}
			@blur=${xt(a)}
		>
			${A(!e.disabledFiltering,()=>n`<cosmoz-clear-button
						suffix
						slot="suffix"
						?visible=${Tt(t)}
						light
						@click=${wt(a)}
					></cosmoz-clear-button>`)}
		</cosmoz-input>`}legacyFilterToState(e){return{filter:e,inputValue:e}}},customElements.define(`cosmoz-omnitable-column`,Et)})),Ot,kt,At,jt=e((()=>{C(),g(),o(),Ot=[`label`,`value`,`slot`,`always-float-label`,`disabled`],kt=Ze`
	${me}

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
`,At=e=>{let{label:t,value:r,slot:i}=e;return Ge(n`<div
		id="input"
		part="input"
		role="button"
		class="control"
		slot=${i}
	>
		${r||``}
	</div>`,{label:t})},customElements.define(`cosmoz-omnitable-dropdown-input`,m(At,{observedAttributes:Ot,styleSheets:[kt]}))})),Mt,Nt=e((()=>{xe(),o(),te(),jt(),Mt=({title:e,tooltip:t=``,filterText:r=``,onOpenedChanged:i,content:a,horizontalAlign:o=`left`,externalValues:s=null})=>n`
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
			@focus=${i}
			class=${ee({filtered:!!r,...s!=null&&{[`external-values-${s}`]:!0},dropdown:!0})}
			title=${t||``}
		>
			<cosmoz-omnitable-dropdown-input
				class="input"
				slot="button"
				.label=${e}
				.placeholder=${e}
				.value=${r??``}
				text-align=${o}
				?always-float-label=${r?.length>0}
			></cosmoz-omnitable-dropdown-input>
			<div class="dropdown-content">${a}</div>
		</cosmoz-dropdown>
	`})),Pt,Ft,It=e((()=>{Ue(),De(),_(),ne(),Pt=e=>e?typeof e.close==`function`?e:Pt(e.parentElement):null,Ft=e=>class extends e{static get properties(){return{disabled:{type:Boolean,value:!1},filter:{type:Object,notify:!0},values:{type:Array,value(){return[]}},headerFocused:{type:Boolean,notify:!0},min:{type:Number,value:null},max:{type:Number,value:null},limits:{type:Function},autoupdate:{type:String,value:!0},locale:{type:String,value:null},_filterInput:{type:Object,value(){return{min:null,max:null}}},_range:{type:Object,computed:`_computeRange(values.*)`},_limit:{type:Object,computed:`_computeLimit(_range, _filterInput.*, min, max)`,value(){return{}}},_tooltip:{type:String,computed:`_computeTooltip(title, _filterText)`},_fromClasses:{type:String,computed:`_computeInputClasses(_filterInput.min)`},_toClasses:{type:String,computed:`_computeInputClasses(_filterInput.max)`}}}static get observers(){return[`_filterInputChanged(_filterInput.*, autoupdate)`,`_filterChanged(filter.*)`,`_updateLimits(limits, headerFocused)`]}disconnectedCallback(){this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),super.disconnectedCallback()}_computeInputClasses(e){return e!=null&&e!==``?`has-value`:``}toNumber(e,t,n){if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=this.toNumber(t);return i==null?r:n(r,i)}toValue(){return this.toNumber.apply(this,arguments)}getComparableValue(e,t){if(e==null)return;let n=e;return t!=null&&(n=this.get(t,e)),this.toValue(n)}renderValue(){}getInputString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return this._toInputString(n)}_computeRange(e){let t=e.base,n=Array.isArray(t)&&t.length&&t.map(e=>this.toValue(e)).filter(e=>e!=null);return!n||n.length<1?{min:null,max:null}:n.reduce((e,t)=>({min:this.toValue(t,e.min,Math.min),max:this.toValue(t,e.max,Math.max)}),{})}_computeLimit(e,t,n,r){if(!e)return;let i=t.base,a=this.toValue(n),o=this.toValue(r),s=a??this.toValue(e.min),c=o??this.toValue(e.max);return{fromMin:s,fromMax:this.toValue(c,this._fromInputString(i.max,`max`),Math.min),toMin:this.toValue(s,this._fromInputString(i.min,`min`),Math.max),toMax:c}}_computeFilterText(e){if(e.base==null)return;let t=e.base,n=this.toValue(t.min),r=this.toValue(t.max),i=[];return n!=null&&i.push(this.renderValue(n)),i.push(` - `),r!=null&&i.push(this.renderValue(r)),i.length>1?i.join(``):void 0}_computeTooltip(e,t){return t==null?e:`${e}: ${t}`}_fromInputString(e){return this.toValue(e)}_toInputString(e){return this.toValue(e)??null}_getDefaultFilter(){return{min:null,max:null}}_filterInputChanged(e,t){let n=e.path.split(`.`)[1];this.__inputChangePath=n||null,t&&(this._limitInputDebouncer=re.debounce(this._limitInputDebouncer,He.after(600),()=>{this._limitInput(),this._updateFilter()}),se(this._limitInputDebouncer))}_clearFrom(){this.set(`_filterInput.min`,null),this._updateFilter()}_clearTo(){this.set(`_filterInput.max`,null),this._updateFilter()}_onBlur(){this._limitInput(),this._updateFilter()}_onKeyDown(e){let t=e.currentTarget,n=Array.from(t.parentElement.querySelectorAll(`cosmoz-input`)),r=n[n.findIndex(e=>e===t)+1],i=!r,a=n[0]===t;switch(e.keyCode){case 13:if(e.preventDefault(),!i)r.focus();else{let e=this._limitInput();this._updateFilter(),e||this._closeParent(t)}break;case 9:(i&&!e.shiftKey||a&&e.shiftKey)&&this._closeParent(t)}}_closeParent(e){let t=Pt(e);t&&t.close()}_onDropdownOpenedChanged({currentTarget:e,type:t,detail:n}){(t===`focus`||n?.value===!0)&&setTimeout(()=>{e.querySelector(`cosmoz-input:focus`)||e.querySelector(`cosmoz-input`)?.focus()},100)}_limitInput(){let e=this._filterInput,t=this.__inputChangePath,n=t?this._fromInputString(this.get(t,e),t):null;if(this.__inputChangePath=null,n==null)return!1;let r=this._limit,i=t===`min`?`from`:`to`,a=this.get(i+`Min`,r),o=this.get(i+`Max`,r),s=this.toValue(n,a,Math.max),c=this.toValue(s,o,Math.min);return this.getComparableValue(n)===this.getComparableValue(c)?!1:(this.set([`_filterInput`,t],this._toInputString(c,t)),this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),!0)}_updateFilter(){let e=this._filterInput,t=this.filter,n=this._fromInputString(e.min,`min`),r=this._fromInputString(e.max,`max`);this.getComparableValue(n)===this.getComparableValue(t,`min`)&&this.getComparableValue(r)===this.getComparableValue(t,`max`)||this.set(`filter`,{min:n,max:r})}_filterChanged(e){if(this._filterInput==null)return;let t=this._filterInput,n=e.base,r=this._fromInputString(t.min,`min`),i=this._fromInputString(t.max,`max`);this.getComparableValue(r)===this.getComparableValue(n,`min`)&&this.getComparableValue(i)===this.getComparableValue(n,`max`)||(this.set(`_filterInput`,{min:this._toInputString(n.min),max:this._toInputString(n.max)}),this._limitInputDebouncer&&this._limitInputDebouncer.cancel())}hasFilter(){let e=this.filter;return e==null?!1:this.toValue(e.min)!=null||this.toValue(e.max)!=null}resetFilter(){this.filter=this._getDefaultFilter()}_updateLimits(e,t){e&&Promise.resolve(Ie(e,{active:t})).then(e=>{let{min:t,max:n}=e??{};Object.assign(this,{...t==null?{}:{min:t},...n==null?{}:{max:n}})})}}})),Lt,Rt=e((()=>{E(),o(),Lt=e=>class extends e{static get template(){return qe`<div id="output" style="position:relative;"></div>`}connectedCallback(){super.connectedCallback();let e=this;a(e.render(),e.$.output)}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n);let r=this;requestAnimationFrame(()=>a(r.render(),r.$.output))}}})),zt,Bt=e((()=>{C(),E(),i(),o(),k(),Nt(),jt(),It(),Rt(),zt=class extends Ft(Lt(O)){static get properties(){return{currency:{type:String},autodetect:{type:Boolean,value:!1},rates:{type:Object},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, _formatters)`},headerFocused:{type:Boolean,value:!1}}}static get observers(){return[`_valuesChanged(autodetect, currency, values)`]}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return n`
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
			${A(this.disabled,()=>n`
					<cosmoz-omnitable-dropdown-input
						disabled
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>n`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Mt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:n`
							<h3 style="margin: 0;">${this.title}</h3>
							<cosmoz-input
								class=${this._fromClasses}
								type="number"
								title=${r(`Minimum amount`)}
								label=${r(`Min amount`)}
								.value=${this._filterInput?.min}
								@value-changed=${e=>{this.set(`_filterInput.min`,e.detail.value)}}
								@blur=${e=>this._onBlur(e)}
								@keydown=${e=>this._onKeyDown(e)}
								min=${this._toInputStringAmount(this._limit.fromMin)}
								max=${this._toInputStringAmount(this._limit.fromMax)}
							>
								<div slot="suffix" suffix>${this.filter?.min?.currency}</div>
							</cosmoz-input>
							<cosmoz-input
								class=${this._toClasses}
								type="number"
								title=${r(`Maximum amount`)}
								label=${r(`Max amount`)}
								.value=${this._filterInput?.max}
								@value-changed=${e=>{this.set(`_filterInput.max`,e.detail.value)}}
								@blur=${e=>this._onBlur(e)}
								@keydown=${e=>this._onKeyDown(e)}
								min=${this._toInputStringAmount(this._limit.toMin)}
								max=${this._toInputStringAmount(this._limit.toMax)}
							>
								<div slot="suffix" suffix>${this.filter?.max?.currency}</div>
							</cosmoz-input>
						`})}
				`)}
		`}_valuesChanged(e,t,n){if(!Array.isArray(n)||n.length<1||!e&&t)return;let r=n.reduce((e,t)=>{if(t.currency){let n=t.currency;e[n]=(e[n]||0)+1}return e},{}),i=Object.keys(r)[0];Object.keys(r).reduce((e,t)=>{let n=Math.max(e,r[t]);return n===r[t]&&(i=t),n},0),this.set(`currency`,i)}toAmount(e,t,n){if(e==null||e===``)return;if(typeof e!=`object`||e.currency==null||e.currency===``)return null;let r=this.toNumber(e.amount);if(r==null||Number.isNaN(r))return null;let i={currency:e.currency,amount:r};if(n==null||t==null)return i;let a=this.toAmount(t);if(a==null)return i;let o=this.rates||{},s=i.amount*(o[i.currency]||1),c=a.amount*(o[a.currency]||1);return this.toNumber(s,c,n)===s?i:a}toValue(){return this.toAmount.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n==null)return;let r=this.toNumber(n.amount),i=this.rates;return i==null?r:r*(i[n.currency]||1)}getString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return n===void 0?``:n===null?`Invalid value`:this.renderValue(n)}getCurrency(e,t){let n=this.get(t,e);return n&&n.currency}getFormatter(e,t){let n=e+(t||``)||``,r=this._formatters=this._formatters||{};return r[n]||(r[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),r[n]}renderValue(e){let t=this.toAmount(e);return t==null?``:this.getFormatter(t.currency,this.locale).format(e.amount)}_amountValueChanged(e){let t=e.target.value,n=e.model.item,r=this.get(this.valuePath,n),i={amount:Number(t),currency:r.currency};this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toInputString(e){let t=this.toValue(e);return t==null?null:this.toNumber(t.amount)}_toInputStringAmount(e){let t=this.rates;if(t==null)return this._toInputString(e);let n=this.toValue(e);return n==null?null:(this.toNumber(n.amount)*(t[n.currency]||1)/(t[this.currency]||1)).toFixed(2)}_fromInputString(e,t){let n=this.toNumber(e);if(n!=null)return this.toValue({amount:n,currency:t&&this.get([`filter`,t,`currency`])||this.currency})}},customElements.define(`cosmoz-omnitable-amount-range-input`,zt)})),F,Vt,Ht,Ut,I,Wt,Gt,Kt,qt=e((()=>{D(),Be(),F=(e,t,n)=>{if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=F(t);return i==null?r:n(r,i)},Vt=e=>{let t=F(e);return t==null?null:t.toString()},Ht=({valuePath:e},t)=>Vt(F(e?j(t,e):t)),Ut=e=>Vt(e)??``,I=({valuePath:e,maximumFractionDigits:t},n)=>{if(n==null)return;let r=F(e?j(n,e):n);if(r!=null)return t===null?r:F(r.toFixed(t))},Wt=Re((e,t,n)=>{let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}),Gt=({valuePath:e,locale:t,minimumFractionDigits:n,maximumFractionDigits:r},i)=>{let a=e?j(i,e):i;if(a==null)return``;let o=F(a);if(o!=null)return Wt(t,n,r).format(o)},Kt=(e,t)=>n=>{let r=I(e,n);if(r==null)return!1;let i=I({...e,valuePath:`min`},t),a=I({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})),L,R,Jt,Yt,Xt,Zt,Qt,$t,en,tn,nn,rn=e((()=>{D(),qt(),L=(e={},t,n,r)=>{if(t==null||t===``)return;if(typeof t!=`object`||t.currency==null||t.currency===``)return null;let i=F(t.amount);if(i==null||Number.isNaN(i))return null;let a={currency:t.currency,amount:i};if(r==null||n==null)return a;let o=L(e,n);if(o==null)return a;let s=a.amount*(e[a.currency]||1);return F(s,o.amount*(e[o.currency]||1),r)===s?a:o},R=({valuePath:e,rates:t},n)=>{if(n==null)return;let r=n;e!=null&&(r=j(n,e));let i=L(t,r);if(i==null)return;let a=F(i.amount);return t==null||a==null?a:a*(t?.[i.currency]||1)},Jt=(e,t)=>n=>{let r=R(e,n);if(r===void 0)return!1;let i=R({...e,valuePath:`min`},t),a=R({...e,valuePath:`max`},t);return i===void 0||a===void 0?!0:!(r<i||r>a)},Yt={},Xt=(e,t)=>{let n=e+(t||``)||``;return Yt[n]||(Yt[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),Yt[n]},Zt=(e,t,n)=>{let r=L(e,t);return r==null?``:Xt(r.currency,n).format(r.amount)},Qt=({valuePath:e,rates:t,locale:n},r)=>{let i=L(t,e?j(r,e):void 0);return i===void 0?``:i===null?`Invalid value`:Zt(t,i,n)},$t=e=>e?e.amount+e.currency:``,en=e=>{if(e==null||e===``)return;let t=e.match(/^(-?[\d]+)([\D]+?)$/iu);if(!(!Array.isArray(t)||t.length<0))return{amount:Number(t[1]),currency:t[2]}},tn=({valuePath:e},t)=>e?j(t,e)?.currency:null,nn=({valuePath:e},t)=>e?j(t,e)?.amount:void 0})),z,an,on,sn,cn,ln,un,dn=e((()=>{Be(),g(),z=Symbol(`column`),an=e=>{let t=!0,n=e.map(e=>e.name);return e.forEach(e=>{e.name??(t=!1,console.error(`The name attribute needs to be set on all columns! Missing on column`,e))}),e.forEach(e=>{n.indexOf(e.name)!==n.lastIndexOf(e.name)&&(t=!1,console.error(`The name attribute needs to be unique among all columns! Not unique on column`,e))}),t},on=(e,t)=>{let n=e.valuePath??e.name;return{name:e.name,title:e.title,valuePath:n,groupOn:e.groupOn??n,sortOn:e.sortOn??n,noSort:e.noSort,disabledFiltering:t||e.disabledFiltering,minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,getString:e.getString,getComparableValue:e.getComparableValue,serializeFilter:e.serializeFilter,deserializeFilter:e.deserializeFilter,toXlsxValue:e.toXlsxValue,renderHeader:e.renderHeader,renderCell:e.renderCell,renderEditCell:e.renderEditCell,renderGroup:e.renderGroup,cellTitleFn:e.cellTitleFn,headerTitleFn:e.headerTitleFn,getFilterFn:e.getFilterFn,headerCellClass:e.headerCellClass,cellClass:e.cellClass,editable:e.editable,values:e.values,source:c(e.computeSource),noLocalFilter:e.noLocalFilter,mini:e.mini,renderMini:e.renderMini,loading:e.loading,externalValues:e.externalValues,computeSource:e.computeSource,trueLabel:e.trueLabel,falseLabel:e.falseLabel,valueProperty:e.valueProperty,textProperty:e.textProperty,emptyLabel:e.emptyLabel,emptyValue:e.emptyValue,min:e.min,max:e.max,locale:e.locale,autoupdate:e.autoupdate,maximumFractionDigits:e.maximumFractionDigits,minimumFractionDigits:e.minimumFractionDigits,currency:e.currency,rates:e.rates,autodetect:e.autodetect,ownerTree:e.ownerTree,keyProperty:e.keyProperty,...e.getConfig?.(e),[z]:e}},sn=e=>e.isOmnitableColumn&&!e.hidden,cn=e=>{let t=e.filter(sn);return an(t)?t:[]},ln=(e,t,n)=>(Array.isArray(t)?e.filter(e=>t.includes(e.name)):e.filter(e=>!e.disabled)).map(e=>on(e,n)),un=(e,{enabledColumns:t,disabledFiltering:n})=>{let[r,i]=x([]);return ue(()=>{let r,a=[],o=e.shadowRoot.querySelector(`#columnsSlot`),s=e=>()=>{let r=o.assignedNodes({flatten:!0});if(e)a=r;else{let e=r.filter(e=>!a.includes(e)),t=a.filter(e=>!r.includes(e)),n=[...e,...t].some(e=>e.isOmnitableColumn);if(a=r,!n)return}i(ln(cn(r),t,n))},c=e=>{cancelAnimationFrame(r),r=requestAnimationFrame(s(e?.type===`cosmoz-column-prop-changed`))};return c(),o.addEventListener(`slotchange`,c),e.addEventListener(`cosmoz-column-prop-changed`,c),()=>{o.removeEventListener(`slotchange`,c),e.removeEventListener(`cosmoz-column-prop-changed`,c),cancelAnimationFrame(r)}},[t,n]),r}})),fn,pn,mn,B=e((()=>{D(),dn(),fn=(e,t)=>Array.isArray(e)?e.map(e=>j(e,t)).filter((e,t,n)=>e!=null&&n.indexOf(e)===t):void 0,pn=({externalValues:e,values:t,valuePath:n},r)=>{if(e)return e;if(typeof t==`function`)return t;if(n!==void 0)return fn(r,n)},mn=(e,t,n,r)=>{let{valuePath:i}=t,a=i===void 0?void 0:j(n,i);if(r===a)return;i!==void 0&&Me(n,i,r);let o={item:n,valuePath:i,value:r,oldValue:a,column:t[z]};e.dispatchEvent(new CustomEvent(`column-item-changed`,{bubbles:!0,composed:!0,detail:o}))}})),hn,gn=e((()=>{C(),ht(),E(),o(),D(),P(),Bt(),rn(),B(),hn=class extends N(O){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},currency:{type:String,notify:!0},autodetect:{type:Boolean,value:!1,notify:!0},rates:{type:Object,notify:!0},width:{type:String,value:`70px`},cellClass:{type:String,value:`amount-cell align-right`},headerCellClass:{type:String,value:`amount-header-cell`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=R({...e,valuePath:`min`},t),r=R({...e,valuePath:`max`},t);if(!(n==null&&r==null))return Jt(e,t)}getString(e,t){return Qt(e,t)}toXlsxValue(e,t){return Qt(e,t)}getComparableValue(e,t){return R(e,t)}serializeFilter({rates:e},t){if(t==null)return;let n=L(e,t.min),r=L(e,t.max);if(!(n==null&&r==null))return $t(n)+`~`+$t(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:en(n[1]),max:en(n[2])}:null}renderCell(e,{item:t}){return n`<span>${e.getString(e,t)}</span>`}renderEditCell(e,{item:t},r){return n`<cosmoz-input
			no-label-float
			type="number"
			@change=${n=>r({amount:n.target.value,currency:j(t,e.valuePath)?.currency})}
			.value=${nn(e,t)}
		>
			<div slot="suffix">${tn(e,t)}</div>
		</cosmoz-input>`}renderHeader({title:e,min:t,max:r,limits:i,locale:a,rates:o,currency:s,autoupdate:c,autodetect:l,disabledFiltering:u},{filter:d},f,p){return n`<cosmoz-omnitable-amount-range-input
			.title=${e}
			?disabled=${u}
			.filter=${d}
			.values=${p}
			.rates=${o}
			.min=${t}
			.max=${r}
			.limits=${i}
			.locale=${a}
			.currency=${s}
			.autoupdate=${c}
			.autodetect=${l}
			@filter-changed=${({detail:{value:e}})=>f(t=>({...t,filter:e}))}
			@header-focused-changed=${({detail:{value:e}})=>f(t=>({...t,headerFocused:e}))}
		></cosmoz-omnitable-amount-range-input>`}computeSource(e,t){return pn(e,t)}},customElements.define(`cosmoz-omnitable-column-amount`,hn)})),_n,vn,yn,bn,xn,Sn,Cn,wn,Tn,En,Dn,On,kn=e((()=>{we(),Ue(),ct(),D(),B(),_n=(e,t)=>{if(!Array.isArray(e))return;let n=[];return e.reduce((e,t)=>Array.isArray(t)?(t.forEach(t=>{e.push(t)}),e):(e.push(t),e),[]).filter((e,r,i)=>{if(i.indexOf(e)!==r)return!1;if(t){let r=j(e,t);if(n.indexOf(r)!==-1)return!1;n.push(r)}return!0})},vn=(e,t,n)=>{if(e==null)return[];if(Array.isArray(e)){let r=_n(e,t);if(!r?.length)return[];let i=n??`label`,a=e=>String(typeof e==`object`&&e?j(e,i??``)??``:e??``);return r.sort((e,t)=>a(e).localeCompare(a(t)))}if(typeof e==`object`){let r=t??`id`,i=n??`label`;return Object.entries(e).map(([e,t])=>({[r]:e,[i]:t})).sort((e,t)=>String(e[i]??``).localeCompare(String(t[i]??``)))}return[]},yn=(e,t,n)=>ut(t&&j(e,t)).map(w(n)),bn=({valuePath:e,textProperty:t},n)=>yn(n,e,t).filter(e=>e!=null).join(`, `),xn=bn,Sn=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>a=>{let o=w(e),s=ut(j(a,t));return i.some(t=>s.length===0&&w(r||e)(t)===n||s.some(e=>o(e)===o(t)))},Cn=e=>t=>e(e=>({...e,filter:t})),wn=e=>t=>e(e=>({...e,headerFocused:t})),Tn=e=>t=>e(e=>({...e,query:t})),En=({emptyValue:e,emptyLabel:t,emptyProperty:n,textProperty:r,valueProperty:i},a)=>{let o=vn(a,i,r);return!t||e===void 0||!r||!(n||i)||!o?o:[{[r]:t,[n||i]:e},...o]},Dn=(e,t)=>En(e,fn(t,e.valuePath)),On=e=>class extends e{static get properties(){return{textProperty:{type:String},valueProperty:{type:String},emptyLabel:{type:String},emptyValue:{type:Object},emptyProperty:{type:String}}}getConfig(e){return{emptyProperty:e.emptyProperty}}getString(e,t){return bn(e,t)}toXlsxValue(e,t){return xn(e,t)}getComparableValue({valuePath:e,valueProperty:t},n){let r=j(n,e);return t==null?r:ut(r).map(w(t)).sort().join(` `)}getFilterFn(e,t){if(!(!t||!Array.isArray(t)||t.length===0))return Sn(e,t)}serializeFilter(e,t){return Array.isArray(t)&&t.length===0?null:JSON.stringify(t)}deserializeFilter(e,t){if(t==null)return null;try{return JSON.parse(decodeURIComponent(t))}catch(e){let n=e;return console.error(`Failed to deserialize filter value:`,{error:n?.name,message:n?.message,filterLength:typeof t==`string`?t.length:null}),null}}computeSource(e,t){return e.externalValues||typeof e.values==`function`?async(...t)=>En(e,await Promise.resolve(Ie(e.values,...t))):Dn(e,t)}}})),An,jn,Mn,Nn=e((()=>{it(),be(),E(),o(),k(),we(),ct(),kn(),P(),g(),D(),dn(),An=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?ot(t):w(n),a=ut(e&&j(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},jn=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>{let a=w(e),o=w(r||e),s=new Set(i.filter(e=>e.excluded).map(e=>a(e.item))),c=new Set(i.filter(e=>!e.excluded).map(e=>a(e.item))),l=i.some(e=>e.excluded&&o(e.item)===n),u=i.some(e=>!e.excluded&&o(e.item)===n);return e=>{let n=ut(j(e,t)).map(a);return n.length===0?!l&&(u||c.size===0):!n.some(e=>s.has(e))&&(c.size===0||n.some(e=>c.has(e)))}},Mn=class extends On(N(O)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return n`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},r){return n`<cosmoz-input
			no-label-float
			type="text"
			@change=${e=>r(e.target.value)}
			.value=${M(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:r},i,a){return n`<cosmoz-autocomplete-excluding
			class="external-values-${e.externalValues}"
			?disabled=${e.disabledFiltering}
			?keep-opened=${e.keepOpened}
			?keep-query=${e.keepQuery}
			?show-single=${e.showSingle}
			?preserve-order=${e.preserveOrder}
			.textual=${e.textual}
			.label=${e.title}
			.source=${a}
			.textProperty=${e.textProperty}
			.valueProperty=${e.valueProperty}
			.itemRenderer=${e[z]?.itemRenderer}
			.value=${t}
			.text=${r}
			.limit=${e.limit}
			@opened-changed=${e=>wn(i)(e.detail.value)}
			@value-changed=${ie(Cn(i))}
			@text-changed=${ie(Tn(i))}
			>${A(e.loading,()=>n`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-excluding
		>`}getComparableValue(e,t){return An(e,t)}getFilterFn(e,t){if(!(!t||!Array.isArray(t)||t.length===0))return jn(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete-excluding`,Mn)})),Pn,Fn,In=e((()=>{it(),be(),E(),o(),k(),we(),ct(),kn(),P(),D(),dn(),Pn=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?ot(t):w(n),a=ut(e&&j(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},Fn=class extends On(N(O)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return n`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},r){return n`<cosmoz-input
			no-label-float
			type="text"
			@change=${e=>r(e.target.value)}
			.value=${M(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:r},i,a){return n`<cosmoz-autocomplete-ui
			class="external-values-${e.externalValues}"
			?disabled=${e.disabledFiltering}
			?keep-opened=${e.keepOpened}
			?keep-query=${e.keepQuery}
			?show-single=${e.showSingle}
			?preserve-order=${e.preserveOrder}
			.textual=${e.textual}
			.label=${e.title}
			.source=${a}
			.textProperty=${e.textProperty}
			.valueProperty=${e.valueProperty}
			.itemRenderer=${e[z]?.itemRenderer}
			.value=${t}
			.text=${r}
			.limit=${e.limit}
			.onChange=${Cn(i)}
			@opened-changed=${e=>wn(i)(e.detail.value)}
			.onText=${Tn(i)}
			>${A(e.loading,()=>n`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}getComparableValue(e,t){return Pn(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete`,Fn)})),Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,qn,Jn,Yn,Xn,Zn=e((()=>{E(),P(),it(),Be(),D(),o(),k(),Ln=(e,t)=>t.find(({value:t})=>e===t),Rn=(e,t,n)=>{let r=Ln(t,n);return r?r.text:e},zn=(e,t,n,r)=>Rn(e,j(t,n),r),Bn=({valuePath:e},t,n)=>Ln(j(t,e),n),Vn=e=>t=>{e(e=>({...e,filter:t?.[0]?.value??null}))},Hn=e=>t=>{e(e=>({...e,headerFocused:t}))},Un=e=>t=>{e(e=>({...e,query:t}))},Wn=e=>t=>e(t?.[0]?.value),Gn=({valuePath:e,trueLabel:t,falseLabel:n},r)=>j(r,e)?t:n,Kn=({valuePath:e},t)=>n=>j(n,e)===t,qn=c((e,t)=>[{text:e,value:!0},{text:t,value:!1}]),Jn=({valuePath:e,trueLabel:t,falseLabel:n},r)=>e?j(r,e)?t:n:``,Yn=(e,t)=>{try{return JSON.parse(t)}catch{return null}},Xn=class extends N(O){static get properties(){return{trueLabel:{type:String,value:`True`},falseLabel:{type:String,value:`False`},flex:{type:String,value:`0`},cellClass:{type:String,value:`boolean-cell`}}}getString(e,t){return Gn(e,t)}renderCell(e,{item:t}){return Gn(e,t)}renderEditCell(e,{item:t},r){let{trueLabel:i,falseLabel:a}=e;return n`<cosmoz-autocomplete
			no-label-float
			.title=${zn(e.title,t,e.valuePath,qn(i,a))}
			.source=${qn(i,a)}
			.textProperty=${`text`}
			.value=${Bn(e,t,qn(i,a))}
			.onChange=${Wn(r)}
			.limit=${1}
			>${A(e.loading,()=>n`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete
		>`}renderHeader(e,{filter:t,query:r},i,a){return n`<cosmoz-autocomplete-ui
			?disabled=${e.disabledFiltering}
			.label=${e.title}
			.title=${zn(e.title,t,e.valuePath,a)}
			.source=${a}
			.textProperty=${`text`}
			.value=${Ln(t,a)}
			.text=${r}
			.onChange=${Vn(i)}
			@opened-changed=${e=>Hn(i)(e.detail.value)}
			.onText=${Un(i)}
			.limit=${1}
			>${A(e.loading,()=>n`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}computeSource({trueLabel:e,falseLabel:t}){return qn(e,t)}getFilterFn(e,t){if(t!=null)return Kn(e,t)}toXlsxValue(e,t){return Jn(e,t)}deserializeFilter(e,t){return Yn(e,t)}},customElements.define(`cosmoz-omnitable-column-boolean`,Xn)})),Qn,$n=e((()=>{ye(),It(),Qn=e=>class extends Ft(e){static get properties(){return{max:{type:Date,value:null},min:{type:Date,value:null},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},formatter:{type:Object,computed:`_computeFormatter(locale)`}}}toDate(e,t,n){if(e==null||e===``)return;let r=e;if(r instanceof Date||(typeof e==`string`&&(r=this.getAbsoluteISOString(r)),r=new Date(r)),Number.isNaN(r.getTime()))return null;if(n==null||t==null)return r;let i=this.toDate(t);if(i==null)return r;let a=this.getComparableValue(r);return n(a,this.getComparableValue(i))===a?r:i}toValue(){return this.toDate.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n!=null)return this.toNumber(n.getTime())}getString(e,t=this.valuePath,n=this.formatter){let r=this.toValue(this.get(t,e));return r===void 0?``:r===null?`Invalid Date`:this.renderValue(r,n)}getAbsoluteISOString(e){return e.length===19?e+this._getTimezoneString(e):e}_getTimezoneString(e){let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`}renderValue(e,t=this.formatter){if(t==null)return;let n=this.toValue(e);if(n!=null)return t.format(n)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(0,10)}_dateValueChanged(e){let t=e.currentTarget.value,n=e.model.item,r=this.get(this.valuePath,n),i=this._fromInputString(t);this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toLocalISOString(e){return le(e)}}})),er,tr=e((()=>{C(),E(),i(),o(),k(),$n(),Nt(),jt(),Rt(),er=class extends Qn(Lt(O)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return n`
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

			${A(this.disabled,()=>n`
					<cosmoz-omnitable-dropdown-input
						disabled
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>n`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Mt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:n`
							<h3 style="margin: 0;">${this.title}</h3>
							<cosmoz-input
								type="date"
								label=${r(`From date`)}
								min=${this._toInputString(this._limit.fromMin)}
								max=${this._toInputString(this._limit.fromMax)}
								.value=${this._filterInput?.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-input>
							<cosmoz-input
								type="date"
								label=${r(`Until date`)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
								.value=${this._filterInput?.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-input>
						`})}
				`)}
		`}_fromInputString(e,t){let n=this.toDate(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n}_filterInputChanged(e,t){let n=e.path.split(`.`)[1]&&e.value;if(n&&n.match(/^0+/u)){this._limitInputDebouncer.cancel();return}super._filterInputChanged(e,t)}},customElements.define(`cosmoz-omnitable-date-range-input`,er)})),nr,rr,ir,V,H,ar,or,sr,cr,lr,ur,dr,fr,pr,mr,hr=e((()=>{ye(),D(),qt(),nr=e=>{let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`},rr=e=>e.length===19?e+nr(e):e,ir=e=>{if(e==null||e===``)return;let t=e;return!(t instanceof Date)&&(typeof e==`string`&&(t=rr(t)),t=ge(t),!t)||Number.isNaN(t.getTime())?null:t},V=({valuePath:e},t)=>{if(t==null)return;let n=t;e!=null&&(n=j(t,e));let r=ir(n);if(r!=null)return F(r.getTime())},H=(e,t,n)=>{let r=ir(e);if(r==null)return null;if(n==null||t==null)return r;let i=H(t);if(i==null)return r;let a=V({},r),o=V({},i);return a==null||o==null||n(a,o)===a?r:i},ar=(e,t)=>{if(t==null)return;let n=H(e);if(n!=null)return t.format(n)},or={},sr=e=>{let t=e||``;return or[t]||(or[t]=new Intl.DateTimeFormat(e||void 0)),or[t]},cr=({valuePath:e,locale:t},n)=>{let r=j(n,e||``);return r===void 0?``:(r=H(r),r===null?`Invalid Date`:ar(r,sr(t)))},lr=e=>{let t=H(e);if(t==null)return null;let n=le(t);return n==null?null:n.slice(0,10)},ur=({valuePath:e},t)=>lr(j(t,e||``)),dr=(e,t)=>{let n=H(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n},fr=e=>lr(e)??``,pr=({valuePath:e},t)=>{if(!e)return``;let n=H(j(t,e));if(!n)return``;let r=H(le(n));return r?(r.setHours(0,0,0,0),r):``},mr=(e,t)=>n=>{let r=V(e,n);if(r==null)return!1;let i=V({...e,valuePath:`min`},t),a=V({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})),gr,_r=e((()=>{C(),E(),o(),P(),tr(),B(),hr(),ht(),gr=class extends N(O){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`date-header-cell`},width:{type:String,value:`100px`},minWidth:{type:String,value:`82px`},flex:{type:String,value:`0`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=V({...e,valuePath:`min`},t),r=V({...e,valuePath:`max`},t);if(!(n==null&&r==null))return mr(e,t)}getString(e,t){return cr(e,t)}toXlsxValue(e,t){return pr(e,t)}getComparableValue(e,t){return V(e,t)}serializeFilter(e,t){if(t==null)return;let n=H(t.min),r=H(t.max);if(!(n==null&&r==null))return fr(n)+`~`+fr(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:H(n[1]),max:H(n[2])}:null}renderCell(e,{item:t}){return n`<div class="omnitable-cell-date">
			${cr(e,t)}
		</div>`}renderEditCell(e,{item:t},r){return n`<cosmoz-input
			no-label-float
			type="date"
			@change=${e=>r(dr(e.target.value))}
			.value=${ur(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:r,limits:i,locale:a,disabledFiltering:o},{filter:s},c,l){return n`<cosmoz-omnitable-date-range-input
			.title=${e}
			?disabled=${o}
			.filter=${s}
			.values=${l}
			.min=${t}
			.max=${r}
			.limits=${i}
			.locale=${a}
			@filter-changed=${({detail:{value:e}})=>c(t=>({...t,filter:e}))}
			@header-focused-changed=${({detail:{value:e}})=>c(t=>({...t,headerFocused:e}))}
		></cosmoz-omnitable-date-range-input>`}computeSource(e,t){return pn(e,t)}},customElements.define(`cosmoz-omnitable-column-date`,gr)})),vr,yr=e((()=>{E(),i(),o(),k(),$n(),Nt(),jt(),Rt(),vr=class extends Qn(Lt(O)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return n`
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

			${A(this.disabled,()=>n`
					<cosmoz-omnitable-dropdown-input
						disabled
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>n`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Mt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:n`
							<h3 style="margin: 0;">${this.title}</h3>
							<cosmoz-datetime-input
								date-label=${r(`From date`)}
								time-label=${r(`From time`)}
								min=${this._toInputString(this._limit.fromMin)}
								max=${this._toInputString(this._limit.fromMax)}
								step=${this.filterStep}
								.value=${this._filterInput?.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-datetime-input>
							<cosmoz-datetime-input
								date-label=${r(`To date`)}
								time-label=${r(`To time`)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
								step=${this.filterStep}
								.value=${this._filterInput?.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-datetime-input>
						`})}
				`)}
		`}_toInputString(e){let t=this.toValue(e);if(t!=null)return this._toLocalISOString(t).slice(0,19)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})}},customElements.define(`cosmoz-omnitable-datetime-range-input`,vr)})),br,xr,Sr,Cr,wr,Tr,Er=e((()=>{D(),hr(),br={},xr=e=>{let t=e||``;return br[t]||(br[t]=new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})),br[t]},Sr=({valuePath:e,locale:t},n)=>{let r=H(j(n,e||``));return r===void 0?``:r===null?`Invalid Date`:ar(r,xr(t))},Cr=({valuePath:e},t)=>e?j(t,e):``,wr=e=>{let t=H(e);return t==null?``:t.toISOString().slice(0,19).replace(/:/gu,`.`)},Tr=e=>{if(!(e==null||e===``)&&typeof e==`string`)return H(e.replace(/\./gu,`:`)+`Z`)}})),Dr,Or=e((()=>{Ne(),ht(),E(),o(),P(),yr(),B(),hr(),Er(),Dr=class extends N(O){static get is(){return`cosmoz-omnitable-column-datetime`}static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`datetime-header-cell`},width:{type:String,value:`210px`},minWidth:{type:String,value:`128px`},flex:{type:String,value:`0`},filterStep:{type:Number,value:1}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=V({...e,valuePath:`min`},t),r=V({...e,valuePath:`max`},t);if(!(n==null&&r==null))return mr(e,t)}getString(e,t){return Sr(e,t)}toXlsxValue(e,t){return Cr(e,t)}getComparableValue(e,t){return V(e,t)}serializeFilter(e,t){if(t==null)return;let n=H(t.min),r=H(t.max);if(!(n==null&&r==null))return wr(n)+`~`+wr(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Tr(n[1]),max:Tr(n[2])}:null}renderCell(e,{item:t}){return Sr(e,t)}renderEditCell(e,{item:t},r){return n`<cosmoz-input
			no-label-float
			type="text"
			@change=${e=>r(dr(e.target.value))}
			.value=${Sr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:r,limits:i,locale:a,filterStep:o,disabledFiltering:s},{filter:c},l,u){return n`<cosmoz-omnitable-datetime-range-input
			.title=${e}
			?disabled=${s}
			.filter=${c}
			.values=${u}
			.min=${t}
			.max=${r}
			.limits=${i}
			.locale=${a}
			.filterStep=${o}
			@filter-changed=${({detail:{value:e}})=>l(t=>({...t,filter:e}))}
			@header-focused-changed=${({detail:{value:e}})=>l(t=>({...t,headerFocused:e}))}
		></cosmoz-omnitable-datetime-range-input>`}computeSource(e,t){return pn(e,t)}},customElements.define(Dr.is,Dr)})),kr,Ar=e((()=>{it(),be(),E(),o(),k(),kn(),P(),kr=class extends On(N(O)){renderCell({valuePath:e,textProperty:t},{item:r}){return n`
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
				${yn(r,e,t).map(e=>n`<li>${e}</li>`)}
			</ul>
		`}renderEditCell(){return`not implemented`}renderHeader(e,{filter:t,query:r},i,a){return n`<cosmoz-autocomplete-ui
			class="external-values-${e.externalValues}"
			?disabled=${e.disabledFiltering}
			.label=${e.title}
			.source=${a}
			.textProperty=${e.textProperty}
			.value=${t}
			.text=${r}
			.onChange=${Cn(i)}
			@opened-changed=${e=>wn(i)(e.detail.value)}
			.onText=${Tn(i)}
			>${A(e.loading,()=>n`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		> `}},customElements.define(`cosmoz-omnitable-column-list-horizontal`,kr)})),jr,Mr,Nr=e((()=>{v(),g(),i(),jr=T`
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
`,Mr=({items:e})=>{let[t,i]=x(!1),a=Array.isArray(e)?e:[],o=b(()=>Math.max(0,a.length-1),[a]);if(a.length===0)return null;let s=a.length>2,c=a[0],l=s&&!t?[]:a.slice(1),u=e=>{e.stopPropagation(),e.preventDefault(),i(e=>!e)};return n`
		<ul>
			<li>
				<span>${c}</span>
			</li>
			<li class="see-more" ?hidden=${!s||t}>
				<a href="#" @click=${u}
					>${r(`and {0} more`,{0:o})}</a
				>
			</li>
			${l.map(e=>n`
					<li>
						<span class="item">${e}</span>
					</li>
				`)}
			<li class="see-less" ?hidden=${!s||!t}>
				<a href="#" @click=${u}>${r(`See less`)}</a>
			</li>
		</ul>
	`},customElements.define(`cosmoz-omnitable-column-list-data`,m(Mr,{styleSheets:[Xe(jr)]}))})),Pr,Fr=e((()=>{Nr(),E(),o(),k(),it(),kn(),P(),dn(),Pr=class extends On(N(O)){static get properties(){return{keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,textual:e.textual}}renderCell({valuePath:e,textProperty:t},{item:r}){return n`<cosmoz-omnitable-column-list-data
			.items=${yn(r,e,t)}
		></cosmoz-omnitable-column-list-data>`}renderEditCell(e,{item:t},r){return n`<cosmoz-input
			no-label-float
			type="text"
			.value=${bn(e,t)}
			@change=${e=>r(e.target.value.split(/,\s*/gu))}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:r},i,a){return n`<cosmoz-autocomplete-ui
			class="external-values-${e.externalValues}"
			?disabled=${e.disabledFiltering}
			?keep-opened=${e.keepOpened}
			?keep-query=${e.keepQuery}
			.textual=${e.textual}
			.column=${e}
			.label=${e.title}
			.source=${a}
			.textProperty=${e.textProperty}
			.valueProperty=${e.valueProperty}
			.itemRenderer=${e[z]?.itemRenderer}
			.value=${t}
			.text=${r}
			.onChange=${Cn(i)}
			@opened-changed=${e=>wn(i)(e.detail.value)}
			.onText=${Tn(i)}
			>${A(e.loading,()=>n`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}},customElements.define(`cosmoz-omnitable-column-list`,Pr)})),Ir,Lr=e((()=>{C(),E(),i(),o(),k(),Nt(),jt(),It(),Rt(),Ir=class extends Ft(Lt(O)){static get properties(){return{maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},formatter:{type:Object,computed:`_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)`},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},headerFocused:{type:Boolean,value:!1}}}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return n`
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

			${A(this.disabled,()=>n`
					<cosmoz-omnitable-dropdown-input
						disabled
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>n`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Mt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,horizontalAlign:`right`,externalValues:this.externalValues,onOpenedChanged:e,content:n`
							<h3>${this.title}</h3>
							<cosmoz-input
								class=${this._fromClasses}
								type="number"
								label=${r(`From`)}
								.value=${this._filterInput?.min}
								@value-changed=${e=>{this.set(`_filterInput.min`,e.detail.value)}}
								@blur=${e=>this._onBlur(e)}
								@keydown=${e=>this._onKeyDown(e)}
								min=${this._toInputString(this._limit.fromMin)}
								max=${this._toInputString(this._limit.fromMax)}
							></cosmoz-input>
							<cosmoz-input
								class=${this._toClasses}
								type="number"
								label=${r(`To`)}
								.value=${this._filterInput?.max}
								@value-changed=${e=>{this.set(`_filterInput.max`,e.detail.value)}}
								@blur=${e=>this._onBlur(e)}
								@keydown=${e=>this._onKeyDown(e)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
							></cosmoz-input>
						`})}
				`)}
		`}_computeFormatter(e,t,n){let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}getComparableValue(e,t){if(e==null)return;let n=e;if(t!=null&&(n=this.get(t,e)),n=this.toValue(n),n==null)return;let r=this.maximumFractionDigits;return r===null?n:this.toValue(n.toFixed(r))}renderValue(e,t=this.formatter){let n=this.toNumber(e);if(n!=null)return t.format(n)}},customElements.define(`cosmoz-omnitable-number-range-input`,Ir)})),Rr,zr=e((()=>{C(),ht(),E(),o(),P(),D(),Lr(),B(),qt(),Rr=class extends N(O){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},cellClass:{type:String,value:`number-cell align-right`},width:{type:String,value:`30px`},minWidth:{type:String,value:`30px`},headerCellClass:{type:String,value:`number-header-cell`},maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=I({...e,valuePath:`min`},t),r=I({...e,valuePath:`max`},t);if(!(n==null&&r==null))return Kt(e,t)}getString(e,t){return Gt(e,t)}toXlsxValue({valuePath:e},t){return j(t,e)}getComparableValue(e,t){return I(e,t)}serializeFilter(e,t){if(t==null)return;let n=F(t.min),r=F(t.max);if(!(n==null&&r==null))return Ut(n)+`~`+Ut(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:F(n[1]),max:F(n[2])}:null}renderCell(e,{item:t}){return n`<div class="omnitable-cell-number">
			${Gt(e,t)}
		</div>`}renderEditCell(e,{item:t},r){return n`<cosmoz-input
			no-label-float
			type="number"
			@change=${e=>r(e.target.value)}
			.value=${Ht(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:r,limits:i,locale:a,maximumFractionDigits:o,minimumFractionDigits:s,autoupdate:c,disabledFiltering:l},{filter:u},d,f){return n`<cosmoz-omnitable-number-range-input
			.title=${e}
			?disabled=${l}
			.filter=${u}
			.values=${f}
			.min=${t}
			.max=${r}
			.limits=${i}
			.locale=${a}
			.maximumFractionDigits=${o}
			.minimumFractionDigits=${s}
			.autoupdate=${c}
			@filter-changed=${({detail:{value:e}})=>d(t=>({...t,filter:e}))}
			@header-focused-changed=${({detail:{value:e}})=>d(t=>({...t,headerFocused:e}))}
		></cosmoz-omnitable-number-range-input>`}computeSource(e,t){return pn(e,t)}},customElements.define(`cosmoz-omnitable-column-number`,Rr)})),Br,Vr=e((()=>{C(),E(),i(),o(),k(),$n(),Nt(),jt(),Rt(),Br=class extends Qn(Lt(O)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return n`
			${A(this.disabled,()=>n`
					<cosmoz-omnitable-dropdown-input
						disabled
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>n`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Mt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:n`
							<h3 style="margin: 0;">${this.title}</h3>
							<cosmoz-input
								type="time"
								label=${r(`From time`)}
								step=${this.filterStep}
								.value=${this._filterInput.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-input>
							<cosmoz-input
								type="time"
								label=${r(`Until time`)}
								step=${this.filterStep}
								.value=${this._filterInput.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-input>
						`})}
				`)}
		`}get _fixedDate(){return`1970-01-01`}toDate(e,t,n){let r=typeof e==`string`&&e.length>3&&e.length<=9?this.getAbsoluteISOString(this._fixedDate+`T`+e):e;return super.toDate(r,t,n)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(11,19)}getComparableValue(e,t){if(e==null)return;let n=this._toInputString(t==null?e:this.get(t,e));if(n!=null&&(n=this.toValue(this.getAbsoluteISOString(this._fixedDate+`T`+n)),n!=null))return this.toNumber(n.getTime())}_timeValueChanged(e){let t=e.target.value,n=e.model.item,r=this.toDate(n.date),i=this.toDate(r==null?t:r.toISOString().slice(0,10)+`T`+t);i??(this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,(e=>e).bind(this)))}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})}},customElements.define(`cosmoz-omnitable-time-range-input`,Br)})),U,Hr,Ur,Wr,Gr,Kr,W,qr,Jr,Yr,Xr=e((()=>{ye(),D(),hr(),qt(),U=(e,t,n)=>H(typeof e==`string`&&e.length>3&&e.length<=9?rr(`1970-01-01T`+e):e,t,n),Hr={},Ur=e=>{let t=e||``;return Hr[t]||(Hr[t]=new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})),Hr[t]},Wr=({valuePath:e,locale:t},n)=>{let r=U(j(n,e||``));return r===void 0?``:r===null?`Invalid Date`:ar(r,Ur(t))},Gr=(e,t)=>e.valuePath?Wr(e,t):``,Kr=e=>{let t=U(e);if(t==null)return null;let n=le(t);return n&&n.slice(11,19)},W=({valuePath:e},t)=>{if(t==null)return;let n=Kr(e==null?t:j(t,e));if(n==null)return;let r=U(rr(`1970-01-01T`+n));return r==null?r:F(r.getTime())},qr=(e,t)=>n=>{let r=W(e,n);if(r==null)return!1;let i=W({...e,valuePath:`min`},t),a=W({...e,valuePath:`max`},t);return i==null||a==null?!1:!(r<i||r>a)},Jr=e=>{let t=U(e);return t==null?``:t.toISOString().slice(11,19).replace(/:/gu,`.`)},Yr=e=>{if(!(e==null||e===``))return U(typeof e==`string`?e.replace(/\./gu,`:`)+`Z`:e)}})),Zr,Qr=e((()=>{C(),ht(),E(),o(),P(),Vr(),B(),Xr(),Zr=class extends N(O){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`time-header-cell`},minWidth:{type:String,value:`63px`},width:{type:String,value:`210px`},flex:{type:String,value:`0`},filterStep:{type:String,value:`1`}}}getFilterFn(e,t){let n=W({...e,valuePath:`min`},t),r=W({...e,valuePath:`max`},t);if(!(n==null&&r==null))return qr(e,t)}getString(e,t){return Wr(e,t)}toXlsxValue(e,t){return Gr(e,t)}getComparableValue(e,t){return W(e,t)}serializeFilter(e,t){if(t==null)return;let n=U(t.min),r=U(t.max);if(!(n==null&&r==null))return Jr(n)+`~`+Jr(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Yr(n[1]),max:Yr(n[2])}:null}renderCell(e,{item:t}){return Wr(e,t)}renderEditCell(e,{item:t},r){return n`<cosmoz-input
			no-label-float
			type="text"
			@change=${e=>r(e.target.value)}
			.value=${Wr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:r,locale:i,filterStep:a,disabledFiltering:o},{filter:s},c,l){return n`<cosmoz-omnitable-time-range-input
			.title=${e}
			?disabled=${o}
			.filter=${s}
			.values=${l}
			.min=${t}
			.max=${r}
			.locale=${i}
			.filterStep=${a}
			@filter-changed=${({detail:{value:e}})=>c(t=>({...t,filter:e}))}
			@header-focused-changed=${({detail:{value:e}})=>c(t=>({...t,headerFocused:e}))}
		></cosmoz-omnitable-time-range-input>`}computeSource(e,t){return pn(e,t)}},customElements.define(`cosmoz-omnitable-column-time`,Zr)})),$r=e((()=>{gn(),Nn(),In(),Zn(),_r(),Or(),Ar(),Fr(),zr(),Qr()})),ei,ti=e((()=>{g(),o(),ei=({column:e,item:n,selected:r,folded:i,group:a})=>{if(!e)return t;let o=e.renderGroup??e.renderCell;return o?o(e,{item:n,selected:r,folded:i,group:a}):t},customElements.define(`cosmoz-omnitable-group-row`,m(ei,{useShadowDOM:!1}))})),ni,ri=e((()=>{g(),o(),ni=e=>{let{column:n}=e;return S(()=>{let t=0,r=0,i=i=>{e.dispatchEvent(new CustomEvent(`column-resize`,{bubbles:!0,composed:!0,detail:{newWidth:Math.ceil(r+i.pageX-t),column:n}}))},a=()=>{document.removeEventListener(`pointermove`,i),document.removeEventListener(`pointerup`,a)},o=n=>{t=n.pageX,r=e.previousElementSibling.getBoundingClientRect().width,document.addEventListener(`pointermove`,i),document.addEventListener(`pointerup`,a)};return e.addEventListener(`pointerdown`,o),()=>e.removeEventListener(`pointerdown`,o)},[n]),t},customElements.define(`cosmoz-omnitable-resize-nub`,m(ni))})),ii,ai,oi,si,ci=e((()=>{o(),ii=n`<svg
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
</svg>`,ai=n`
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
`,oi=n` <svg
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
</svg>`,si=n`<svg
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
</svg> `})),li,ui,di,fi,pi=e((()=>{g(),Le(),ci(),li=({column:e,on:t,descending:r,setOn:i,setDescending:a})=>{let{name:o,title:s}=e??{};return n`<button
		class="sg"
		title=${Ce(s)}
		data-on=${Ce(o===t&&(r?`desc`:`asc`)||void 0)}
		@click=${e=>{let t=e.currentTarget?.dataset.on;t||(i(o),a(!1)),t===`asc`?a(!0):t===`desc`&&(i(),a(!1))}}
	>
		<span>${s}</span> ${si}
	</button>`},ui=({columns:e,...t})=>e?.map(e=>li({column:e,...t})),di=()=>n`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,groupOn:t,setGroupOn:n,groupOnDescending:r,setGroupOnDescending:i}={})=>ui({columns:e?.filter?.(e=>e.groupOn),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`,fi=()=>n`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,sortOn:t,setSortOn:n,descending:r,setDescending:i}={})=>ui({columns:e?.filter?.(e=>e.sortOn&&!e.noSort),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`}));function mi(e,t,{suffix:n=``,read:r,write:i,ready:a=!0,multi:o}={}){let s=dt({param:t,suffix:n,link:o?vi:_i,write:i??Ye}),c=b(()=>{if(t==null)return!1;if(o){let e=Oe(t+n);return Object.keys(e).length>0}return je(t+n)!==void 0},[]),[l,d]=x(()=>{if(t==null)return e;if(o){let i=Oe(t+n,r);return Object.keys(i).length>0?i:e}return je(t+n,r)??e}),f=u(e=>d(t=>{let n=Ie(e,t);return s.param!=null&&Fe(s.link(s.param+s.suffix,n,s.write),null,{notify:!1}),n}),[]);return S(()=>{s.param==null||!a||c||e!=null&&f(e)},[a]),[l,f]}var hi,gi,_i,vi,yi=e((()=>{Je(),Ue(),at(),rt(),g(),hi=e=>(t,n,r=Ye)=>{let i=Ve(),a=new URLSearchParams(i.hash.replace(`#`,``));return e(t,n,r,a),`#!`+Object.assign(i,{hash:a}).href.replace(location.origin,``)},gi=e=>e==null||e===``,_i=hi((e,t,n,r)=>gi(n(t))?r.delete(e):r.set(e,n(t))),vi=hi((e,t,n,r)=>{let i=Object.entries(t),a=i.map(n).filter(([,e])=>e!==void 0);if(a.length===0&&i.length>0)return;let o=e;Array.from(r.keys()).filter(e=>e.startsWith(o)).forEach(e=>r.delete(e)),a.forEach(([t,n])=>gi(n)?r.delete(e+t):r.set(e+t,n))})})),bi,xi,Si,Ci,wi,Ti=e((()=>{g(),yi(),bi=e=>[!0,`true`,1,`yes`,`on`].includes(e),xi=e=>e===``||(e==null?void 0:bi(e)),Si=(e,t,n)=>u(r=>{e(r),n(e=>({...e,[t]:r}))},[e,t,n]),Ci=(e,t,{settings:n,setSettings:r,resetRef:i,ready:a=!0})=>{let[o,s]=mi(n.sortOn,t,{suffix:`-sortOn`,ready:a}),[c,l]=mi(xi(n.descending),t,{suffix:`-descending`,read:xi,ready:a}),[d,f]=mi(n.groupOn,t,{suffix:`-groupOn`,ready:a}),[p,m]=mi(xi(n.groupOnDescending),t,{suffix:`-groupOnDescending`,read:xi,ready:a}),h=b(()=>e.find(e=>e.name===o),[e,o]),g=b(()=>e.find(e=>e.name===d),[e,d]),_={groupOn:d,setGroupOn:Si(f,`groupOn`,r),groupOnDescending:p,setGroupOnDescending:Si(m,`groupOnDescending`,r),sortOn:o,setSortOn:Si(s,`sortOn`,r),descending:c,setDescending:Si(l,`descending`,r),columns:e},v=b(()=>_,Object.values(_)),y=u(e=>{s(e.sortOn),f(e.groupOn),l(e.descending),m(e.groupOnDescending)},[]);return S(()=>void(i.current=y),[]),{...v,sortAndGroup:v,groupOnColumn:g,sortOnColumn:h}},wi=oe(),customElements.define(`sort-and-group-provider`,wi.Provider),customElements.define(`sort-and-group-consumer`,m(({render:e})=>e(he(wi)),{useShadowDOM:!1}))})),Ei,Di,Oi=e((()=>{g(),ae(),ri(),pi(),k(),Ti(),Ei=({data:e,columns:t,groupOnColumn:r,filters:i,setFilterState:a,sortAndGroup:{sortOn:o,setSortOn:s,descending:c,setDescending:l}={}})=>p(t,e=>e.name,t=>[n`<div
				class="cell ${t.headerCellClass} header-cell"
				part="cell header-cell cell-${t.name} header-cell-${t.name}"
				?hidden="${t===r}"
				title="${t.headerTitleFn(t)}"
				name="${t.name}"
			>
				${t.renderHeader(t,i[t.name]??{},e=>a(t.name,e),t.source(t,e))}
				${A(!t.noSort,()=>li({on:o,setOn:s,descending:c,setDescending:l,column:t}))}
			</div>`,n`<cosmoz-omnitable-resize-nub
				.column="${t}"
				name="${t.name}"
			></cosmoz-omnitable-resize-nub>`]),Di=({columns:e,settingsConfig:t,hideSelectAll:r,...i})=>{let a=he(wi);return n`
		${A(e,e=>Ei({columns:e,sortAndGroup:a,...i}))}
		${A(!r,()=>n` <cosmoz-omnitable-settings
					.config=${t}
					part="settings"
				></cosmoz-omnitable-settings>`)}
	`},customElements.define(`cosmoz-omnitable-header-row`,m(Di,{useShadowDOM:!1}))})),ki,Ai,ji=e((()=>{v(),g(),ki=T`
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
`,Ai=({column:e})=>n`
	<div class="label" title="${e.title}" part="item-expand-label">
		${e.title}
	</div>
	<div class="value" part="item-expand-value">
		<slot></slot>
	</div>
`,customElements.define(`cosmoz-omnitable-item-expand-line`,m(Ai,{styleSheets:[Xe(ki)]}))})),Mi,Ni=e((()=>{g(),o(),et(),ji(),Mi=({columns:e,item:t,selected:r,expanded:i,groupOnColumn:a})=>Ee(e,e=>n`<cosmoz-omnitable-item-expand-line
				.column=${e}
				?hidden=${e===a}
				exportparts="item-expand-label, item-expand-value"
				>${e.renderCell(e,{item:t,selected:r,expanded:i})}</cosmoz-omnitable-item-expand-line
			>`),customElements.define(`cosmoz-omnitable-item-expand`,m(Mi,{useShadowDOM:!1}))})),Pi,Fi,Ii=e((()=>{g(),ae(),Pi=(e,t,n)=>e.editable?e.renderEditCell(e,t,n(e,t.item)):e.renderCell(e,t),Fi=({columns:e,groupOnColumn:t,item:r,index:i,selected:a,expanded:o,onItemChange:s})=>p(e,e=>e.name,e=>n`<div
				class="cell itemRow-cell ${e.cellClass??``}"
				part="cell itemRow-cell cell-${e.name} itemRow-cell-${e.name}"
				?hidden="${e===t}"
				?editable="${e.editable}"
				title="${e.cellTitleFn(e,r)}"
				name="${e.name}"
			>
				${Pi(e,{item:r,index:i,selected:a,expanded:o},s)}
			</div>`),customElements.define(`cosmoz-omnitable-item-row`,m(Fi,{useShadowDOM:!1}))})),Li,Ri,zi=e((()=>{v(),Li=T`
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
`,Ri=T`
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

	${Li}

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
`})),Bi,Vi,Hi=e((()=>{Se(),Bi=e=>{let t=e.replace(/"/gu,`""`);return t.search(/("|,|\n)/gu)>=0?`"`+t+`"`:e},Vi=(e,t,n)=>{let r=e.map(e=>Bi(e.title)).join(`;`)+`
`,i=t.map(t=>e.map(e=>{let n=e.getString(e,t);return n==null?``:Bi(String(n))}).join(`;`)+`
`);i.unshift(r),Ke(new File(i,n,{type:`text/csv;charset=utf-8`}))}})),Ui,Wi,Gi=e((()=>{We(),Se(),Ui=(e,t)=>{let n=e.map(e=>e.title),r=t.map(t=>e.map(e=>e.toXlsxValue(e,t)??``));return r.unshift(n),r},Wi=(e,t,n,r)=>{let i=Ui(e,t),a=new Qe(n).addSheetFromData(i,r).generate();Ke(new File([a],n,{type:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`}))}})),Ki,qi=e((()=>{s(),i(),o(),Hi(),Gi(),Ki=({columns:e,selectedItems:t,csvFilename:i,xlsxFilename:a,xlsxSheetname:o,topPlacement:s})=>n`<cosmoz-bottom-bar
		id="bottomBar"
		?active=${!Ae(t.length)}
		part="bottomBar"
		exportparts="bar: bottomBar-bar, info: bottomBar-info, buttons: bottomBar-buttons"
	>
		<slot name="info" slot="info">
			${r(`{count} selected item`,{count:t.length})}
		</slot>
		<slot name="actions" id="actions"></slot>
		<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
		<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
		<cosmoz-dropdown-menu part="extra" slot="extra" .placement=${s}>
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
				@click=${()=>Vi(e,t,i)}
			>
				${r(`Save selected items as CSV`)}
			</button>
			<button
				@click=${()=>Wi(e,t,a,o)}
			>
				${r(`Save selected items as XLSX`)}
			</button>
			<slot name="download-menu"></slot>
		</cosmoz-dropdown-menu>
	</cosmoz-bottom-bar>`})),Ji,Yi=e((()=>{o(),k(),Ji=({allSelected:e,onAllCheckboxChange:t,sortAndGroup:r,dataIsValid:i,data:a,columns:o,filters:s,groupOnColumn:c,setFilterState:l,settingsConfig:u,hideSelectAll:d})=>n`<sort-and-group-provider .value=${r}>
		<div class="header" id="header" part="header">
			${A(!d,()=>n`<input
						class="checkbox all"
						type="checkbox"
						.checked=${e}
						@input=${t}
						?disabled=${!i}
						part="all"
					/>`)}
			${A(d,()=>n` <cosmoz-omnitable-settings
						.newLayout="${!0}"
						.config=${u}
					></cosmoz-omnitable-settings>`)}

			<cosmoz-omnitable-header-row
				part="headerRow"
				.data=${a}
				.columns=${o}
				.filters=${s}
				.groupOnColumn=${c}
				.setFilterState=${l}
				.settingsConfig=${u}
				.hideSelectAll=${d}
			></cosmoz-omnitable-header-row>
		</div>
	</sort-and-group-provider>`})),Xi,Zi,Qi=e((()=>{g(),Xi=Ze`
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
`,Zi=({settingsConfig:e})=>{let{columns:t,collapsed:r}=e,i=t.filter(e=>!r.some(t=>t.name===e.name));return n`<div class="skeleton">
		${Array.from({length:5},()=>n`<div>
					<div class="checkbox"></div>
					${i.map(e=>n`<div
								class="cell"
								part=${`cell-${e.name}`}
								name=${e.name}
							></div>`)}
				</div>`)}
	</div>`},customElements.define(`cosmoz-omnitable-skeleton`,m(Zi,{styleSheets:[Xi]}))})),$i,ea=e((()=>{g(),Qi(),ve(),i(),o(),k(),$i=(e,t)=>{let{settingsConfig:i}=e,{processedItems:a,dataIsValid:o,filterIsTooStrict:s,loading:c,displayEmptyGroups:l,compareItemsFn:u,selectedItems:d,setSelectedItems:f,renderItem:p,renderGroup:m,error:h}=t;return n`${A(!c&&!o&&!h,()=>n`<div class="tableContent-empty">
					<slot name="empty-set-message">
						${ke({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
						<div class="tableContent-empty-message">
							<h3>${r(`Working set empty`)}</h3>
							<p>${r(`No data to display`)}</p>
						</div>
					</slot>
				</div>`)}
		${A(s,()=>n`<div class="tableContent-empty">
					${ke({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
					<div>
						<h3>${r(`Filter too strict`)}</h3>
						<p>${r(`No matches for selection`)}</p>
					</div>
				</div>`)}
		${A(c&&!a.length,()=>n`<div class="tableContent-empty overlay">
					<cosmoz-omnitable-skeleton
						.settingsConfig=${i}
					></cosmoz-omnitable-skeleton>
				</div>`)}
		${A(c&&a.length,()=>n`<div class="tableContent-empty overlay spinner">
					<cz-spinner></cz-spinner>
				</div>`)}
		${A(h,()=>n`<div class="tableContent-empty overlay">
					${_e({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
					<div class="tableContent-empty-message">
						<h3>${r(`Error loading data`)}</h3>
						<p>${h.message}</p>
					</div>
				</div>`)}
		<div class="tableContent-scroller" id="scroller" part="scroller">
			<cosmoz-grouped-list
				id="groupedList"
				.data=${a}
				.selectedItems=${d}
				@selected-items-changed=${ie(f)}
				.displayEmptyGroups=${l}
				.compareItemsFn=${u}
				.renderItem=${p}
				.renderGroup=${m}
			></cosmoz-grouped-list>
			<slot name="extraContent"></slot>
		</div>`}})),ta,na,ra=e((()=>{v(),zi(),ta=T`
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
	${Li}
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
`,na=T`
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
`})),ia,aa,oa=e((()=>{at(),g(),ia=e=>{let t=parseInt(e,10);return isFinite(t)?t:void 0},aa=e=>{let{config:t}=e,{settings:n,setSettings:r,collapsed:i,requestTween:a}=t,o=dt({collapsed:i,settings:n.columns,requestTween:a,setSettings:u(e=>r(t=>({...t,columns:e})),[r])});return{...t,onDown:u(e=>{e.target.closest(`.pull`)&&(o.handle=e.currentTarget)},[o]),onDragStart:u(e=>{let{target:t}=e,n=ia(t.dataset.index);if(!o.handle?.contains(t)||n==null)return e.preventDefault();o.handle=null,e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`omnitable/sort-index`,n),e.dataTransfer.setData(`text/plain`,n),setTimeout(()=>t.classList.add(`drag`),0),t.addEventListener(`dragend`,e=>e.target.classList.remove(`drag`),{once:!0})},[o]),onDragEnter:u(e=>{let t=e.currentTarget;t===e.target&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`,t.classList.add(`dragover`))},[]),onDragOver:u(e=>{e.preventDefault(),e.currentTarget.classList.add(`dragover`)},[]),onDragLeave:u(e=>{let t=e.currentTarget;t.contains(e.relatedTarget)||t.classList.remove(`dragover`)},[]),onDrop:u(e=>{let t=ia(e.dataTransfer.getData(`omnitable/sort-index`)),n=ia(e.currentTarget.dataset.index),{settings:r,setSettings:i,requestTween:a}=o;e.currentTarget.classList.remove(`dragover`),e.preventDefault();let s=r.slice();s.splice(n+(t>=n?0:-1),0,s.splice(t,1)[0]),a?.(),i(s)},[o]),onToggle:u(e=>{let{settings:t,setSettings:n,requestTween:r}=o,i=t.map(e=>({...e,disabled:e.disabled||o.collapsed?.some(t=>t.name===e.name)})),a=ia(e.target.closest(`[data-index]`)?.dataset.index);i.splice(a,1,{...t[a],disabled:!e.target.checked,priority:e.target.checked?t.reduce((e,t)=>Math.max(e,t.priority),0)+1:t[a].priority}),r?.(),n(i)},[o])}}})),sa,ca,la,ua,da=e((()=>{nt(),lt(),v(),s(),g(),i(),k(),ci(),pi(),ra(),oa(),sa=[f({apply({availableHeight:e,elements:t}){Object.assign(t.floating.style,{maxHeight:`${Math.max(0,e)}px`})}}),...Te],ca=({onDragStart:e,onDragEnter:t,onDragOver:r,onDragLeave:i,onDrop:a,onDown:o,onToggle:s,collapsed:c,filters:l})=>(u,d)=>{let f=!!c?.find(e=>e.name===u.name),p=!u.disabled&&!f;return n` <div
			class="item"
			data-index=${d}
			@mousedown=${o}
			draggable="true"
			@dragstart=${e}
			@dragenter=${t}
			@dragover=${r}
			@dragleave=${i}
			@drop=${a}
		>
			<button class="pull">${ai}</button>
			<label class="title" ?has-filter=${!Ae(l[u.name]?.filter)}
				>${u.title}</label
			>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${p}
				@click=${s}
				.indeterminate=${f}
			/>
		</div>`},la=e=>{let{settings:t,settingsId:i,onSave:a,onReset:o,hasChanges:s,opened:c,setOpened:l,...u}=aa(e);return n` <div class="headline">
			${r(`Sort and filter`)}
			<button
				class="close"
				@click=${e=>{let t=e.currentTarget;t?.focus(),t?.blur()}}
			>
				${ii}
			</button>
		</div>

		<div class="contents">
			<div
				class="heading"
				?data-opened=${c.columns}
				@click=${()=>l(e=>({...e,columns:!e.columns}))}
				part="columns columns-heading"
			>
				${r(`Columns`)} ${oi}
			</div>
			<cosmoz-collapse
				?opened="${c.columns}"
				part="columns columns-content"
			>
				<div class="list">${t.columns?.map(ca(u))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${c.sort}
				@click=${()=>l(e=>({...e,sort:!e.sort}))}
			>
				${r(`Sort on`)} ${oi}
			</div>
			<cosmoz-collapse ?opened=${c.sort}> ${fi()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${c.group}
				@click=${()=>l(e=>({...e,group:!e.group}))}
				part="groups groups-heading"
			>
				${r(`Group on`)} ${oi}
			</div>
			<cosmoz-collapse ?opened=${c.group} part="groups groups-heading"
				>${di()}</cosmoz-collapse
			>
		</div>

		${A(i,()=>n`<div class="buttons">
					<button
						class="button reset"
						@click=${o}
						?disabled=${!s}
					>
						${r(`Reset`)}
					</button>
					<button class="button" @click=${a} ?disabled=${!s}>
						${r(`Save`)}
					</button>
				</div>`)}`},customElements.define(`cosmoz-omnitable-settings-ui`,m(la,{styleSheets:[Xe(ta)]})),ua=({config:e,newLayout:t})=>n`
	<cosmoz-dropdown
		.placement="${t?`bottom-start`:`bottom-end`}"
		.middleware="${sa}"
	>
		<div title="${r(`Sort and filter`)}" slot="button">
			${A(t,()=>n`<div class="headerDots">...</div>`,()=>n` <svg viewBox="0 0 24 24" width="24" fill="currentColor">
						<circle cx="10" cy="18" r="2"></circle>
						<circle cx="10" cy="12" r="2"></circle>
						<circle cx="10" cy="6" r="2"></circle>
					</svg>`)}
			${A(e?.badge,()=>n`<div class="badge"></div>`)}
		</div>
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${e}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`,customElements.define(`cosmoz-omnitable-settings`,m(ua,{styleSheets:[Xe(na)]}))})),fa,pa,ma,ha,ga,_a=e((()=>{ct(),fa=[`sortOn`,`descending`,`groupOn`,`groupOnDescending`],pa=e=>t=>typeof t==`object`&&!!t&&`name`in t&&t.name===e,ma=(e=[],t=[],n=[])=>{let r=t.filter(t=>e.some(pa(t.name))),i=e.filter(e=>e.name!=null&&!t.some(pa(e.name))&&!n.some(pa(e.name))),a=n.filter(e=>!t.some(pa(e.name)));return[...r,...a.flatMap(t=>{let n=e.find(e=>e.name===t.name);return n?{...t,title:n.title??t.title??``,minWidth:parseInt(n.minWidth??`0`,10)}:[]}),...i.map(e=>{let{name:t,title:n,priority:r,minWidth:i,width:a,flex:o}=e;return{name:t??``,title:n??``,priority:r??0,minWidth:parseInt(i??`0`,10),width:parseInt(a??`0`,10),flex:parseInt(o??`0`,10)}})]},ha=(e,t)=>({...t,...d(Array.from(fa))(e),columns:e.columns?.map(d([`name`,`priority`,`width`,`flex`,`disabled`]))}),ga=({columns:e,settings:t,savedSettings:n,initial:r})=>({...Object.fromEntries(fa.flatMap(e=>r?.[e]==null?[]:[[e,r[e]]])),...n?d(Array.from(fa))(n):{},...t,columns:ma(e,t?.columns,n?.columns)})})),va,ya=e((()=>{va=({prefix:e=`omnitable-`}={})=>({write:async(t,n)=>{let r=e+t;try{n?localStorage.setItem(r,JSON.stringify(n)):localStorage.removeItem(r)}catch(e){console.error(e)}},read:async t=>{if(!t)return null;try{let n=localStorage.getItem(e+t);return n==null?null:JSON.parse(n)}catch(e){return console.error(e),null}}})})),ba,xa,Sa=e((()=>{g(),ya(),ba=oe(va),xa=()=>{let e=he(ba);return b(()=>e(),[e])}})),Ca=e((()=>{Sa(),ya()})),wa,Ta=e((()=>{g(),Ca(),_a(),wa=(e,t,n,r)=>{let[i,a]=x(e?void 0:null),{read:o,write:s}=xa();return S(async()=>{e&&a(await o(e))},[e,o]),{settingsId:e,savedSettings:i,onSave:u(async()=>{if(!e)return;let r=ha(t,i);await s(e,r),n(),a(r)},[t,i]),onReset:u(async t=>{n(),t.shiftKey&&(await s(e),a(null)),r?.()},[r]),hasChanges:t!=null}}})),Ea,Da=e((()=>{g(),dn(),_a(),Ta(),Ea=({settingsId:e,host:t})=>{let n=b(()=>Object.fromEntries(fa.map(e=>[e,t[e]])),[]),r=ze(),i=u(()=>{r.current?.(n)},[n]),[a,o]=x(),[s,c]=x({columns:!0,sort:!0}),{savedSettings:l,...d}=wa(e,a,o,i),{enabledColumns:f,disabledFiltering:p}=t,m=un(t,{enabledColumns:f,disabledFiltering:p}),h=b(()=>ga({columns:m,settings:a,savedSettings:l,initial:n}),[m,a,l]),g=b(()=>h.columns.map(e=>m.find(t=>t.name===e.name)).filter(Boolean),[m,...h.columns.map(e=>e.name)]);return{...d,savedSettings:l,opened:s,setOpened:c,settings:h,columns:g,setSettings:o,resetRef:r}}})),Oa=e((()=>{da(),Da()})),ka,Aa,ja=e((()=>{ka=e=>Number.isFinite(e)?e:0,Aa=(e,t)=>{let n=[],[r,i]=e.reduce(([e,t],{width:n,flex:r})=>[e+n,t+r],[0,0]),a=t-r,o=ka(a/i),s=0,c=0,l=0;for(let t=0;t<e.length;t++){let{width:i,minWidth:u,flex:d}=e[t];if(u>i+(a>=0?o*d:i*a/r)){s+=i,c+=u,l+=d,n[t]=u;continue}if(d===0){s+=i,c+=i,n[t]=i;continue}}r-=s,a=t-c-r,i-=l,o=ka(a/i);for(let t=0;t<e.length;t++){if(n[t]!=null)continue;let{width:i,flex:s}=e[t];n[t]=i+(a>=0?o*s:i*a/r)}return n}})),Ma,Na,Pa=e((()=>{Ma=Symbol(`index`),Na=(e,t)=>{if(typeof e.findLastIndex==`function`)return e.findLastIndex(t);for(let n=e.length-1;n>=0;n--)if(t(e[n],n,e))return n;return-1}})),Fa,Ia,La,Ra=e((()=>{ja(),Pa(),Fa=(e,t)=>{let n=Na(e,e=>e!=null&&e>0),r=(e,t)=>`.cell[name="${e}"], cosmoz-omnitable-skeleton::part(cell-${e}){width: ${Math.floor(t)}px;padding: 0 min(3px, ${t/2}px)}`,i=e=>`cosmoz-omnitable-resize-nub[name="${e}"]{display:none}`,a=e=>`cosmoz-omnitable-resize-nub[name="${e}"], .cell[name="${e}"]{display:none}`;return t.map((t,o)=>{let s=e[o];if(s==null||s===0)return a(t.name);let c=r(t.name,s);return o===n?`${c}\n${i(t.name)}`:c}).join(`
`)},Ia=(e,t,n)=>{let r=e.filter(e=>!e.hidden),i=r.reduce((e,{width:t})=>e+t,0);if(r.length>1&&i>t)return Ia(r.slice(1),t,n);let a=r.reduce(([e,t],n,r)=>[Math.max(e,n.index),n.index>e?r:t],[-1,-1])[1];return a!==-1&&(r[a].flex=1),Aa(r,t).reduce((e,t,n)=>(e[r[n].index]=t,e),Array(n).fill(void 0))},La=(e,t)=>e.length===0?`.cell {display: none;}`:Fa(e,t)})),za,Ba=e((()=>{g(),za=(e,t)=>S(()=>{let n=new ResizeObserver(([e])=>{e.contentRect?.width!==0&&t(e.contentRect.width-88)});return n.observe(e),()=>n.unobserve(e)},[])})),Va,Ha=e((()=>{g(),Ba(),Va=e=>{let[t,n]=x(()=>e.getBoundingClientRect().width-88);return za(e,n),t}})),Ua,Wa=e((()=>{g(),Ra(),Ua=({canvasWidth:e,groupOnColumn:t,config:n,miniColumn:r})=>b(()=>{if(!Array.isArray(n)||e==null||e===0)return[];let i=n.map((e,n)=>({minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,name:e.name,index:n,hidden:e.name===t?.name||e.disabled})).map(e=>r?{...e,hidden:r.name!==e.name}:e).sort(({index:e,priority:t},{index:n,priority:r})=>t===r?n-e:t-r);return Ia(i,e,i.length)},[e,t,n])})),Ga,Ka=e((()=>{g(),Ga=({host:e,canvasWidth:t,columns:n})=>{let r=e.miniBreakpoint??480,i=b(()=>t<=r,[t,r]),[a,...o]=b(()=>i?n?.filter(e=>e.mini!=null).sort((e,t)=>(e.mini??0)-(t.mini??0)):[],[n,i])??[],s=!!a;return S(()=>{e.toggleAttribute(`mini`,s)},[s]),{isMini:s&&i,miniColumn:a,miniColumns:o}}})),qa,Ja=e((()=>{g(),qa=({host:e,canvasWidth:t,layout:n,setSettings:r,requestTween:i})=>{let a=ze();a.current=e=>{i(),r(r=>{let i=r.columns,{detail:{newWidth:a,column:o}}=e,s=i.findIndex(e=>e.name===o.name),c=[],l=i.reduce((e,t)=>Math.max(e,t.priority),-1/0);for(let e=0;e<n.length;e++)if(c[e]={...i[e]},e<s&&n[e]&&(c[e].width=n[e],c[e].flex=0,c[e].priority=l),e===s){let r=n.reduce((e,t,n)=>n<s&&t?e-t:e,t);c[e].width=Math.min(r,Math.max(a,i[e].minWidth)),c[e].flex=0,c[e].priority=l}return{...r,columns:c}})},S(()=>{let t=e=>a.current?.(e);return e.addEventListener(`column-resize`,t),()=>e.removeEventListener(`column-resize`,t)},[])}})),Ya,Xa,Za,Qa=e((()=>{Ue(),at(),g(),Ya=(e,t)=>{let n=b(()=>{let t=!1,n,r=()=>{t&&(n=requestAnimationFrame(r),e()&&(t=!1))};return{start:()=>{t=!0,cancelAnimationFrame(n),n=requestAnimationFrame(r)},stop:()=>{t=!1,cancelAnimationFrame(n)}}},[]);S(()=>{n.start()},t),S(()=>()=>n.stop(),[])},Xa=(e=0,t=0)=>Math.abs(e-t)<.1,Za=(e,t=1.9,n=Pe,r)=>{let i=dt({target:e,speedFactor:t,onConverge:r});Ya(u(()=>{if(!i.tween)return i.tween=i.target,n(i.tween),i.onConverge?.(),!0;if(i.target.every((e,t)=>i.tween[t]===e))return n(i.tween),i.onConverge?.(),!0;if(i.tween=i.target.map((e,t)=>Xa(i.tween[t],e)?e:(i.tween[t]??0)+((e??0)-(i.tween[t]??0))/i.speedFactor||0),n(i.tween),i.tween.every((e,t)=>e===i.target[t]))return i.onConverge?.(),!0},[]),[e])}})),$a,eo,to=e((()=>{at(),g(),Ra(),Ha(),Wa(),Ka(),Ja(),Qa(),$a=e=>{let t=b(()=>new CSSStyleSheet,[]);return S(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,t]},[]),t},eo=({host:e,columns:t,settings:n,setSettings:r,resizeSpeedFactor:i,sortAndGroupOptions:a})=>{let o=Va(e),{isMini:s,miniColumn:c,miniColumns:l}=Ga({host:e,canvasWidth:o,columns:t}),{groupOnColumn:d}=a,f=Ua({canvasWidth:o,groupOnColumn:d,miniColumn:c,config:n.columns}),p=$a(e),m=b(()=>n.columns.reduce((e,n,r)=>f[r]!=null||n.name===d?.name||n.disabled?e:[...e,t.find(e=>e.name===n.name)],[]),[t,n,f]),[h,g]=x(1),_=u(()=>g(i??1.9),[i]),v=u(()=>g(1),[]),y=dt({columns:n.columns});return Za(f,h,e=>{let t=La(e,y.columns);p.replace(t)},v),qa({host:e,canvasWidth:o,layout:f,setSettings:e=>r(e(n)),requestTween:_}),{isMini:s,collapsedColumns:m,miniColumns:l,requestTween:_}}})),no,ro=e((()=>{no=({host:e,...t})=>{let{csvFilename:n=`omnitable.csv`,xlsxFilename:r=`omnitable.xlsx`,xlsxSheetname:i=`Omnitable`,topPlacement:a=`top-end`}=e;return{csvFilename:n,xlsxFilename:r,xlsxSheetname:i,topPlacement:a,...t}}})),io,ao=e((()=>{g(),io=({host:e,selectedItems:t,data:n,sortAndGroupOptions:r,collapsedColumns:i,settings:a,filterFunctions:o,settingS:s,filters:c,requestTween:l,...u})=>{let d=n&&n.length>0&&t.length===n.length,f=t=>{t.target.checked?e.shadowRoot.querySelector(`#groupedList`).selectAll():e.shadowRoot.querySelector(`#groupedList`).deselectAll()},{groupOnColumn:p}=r,m=b(()=>[p,...i,...a.columns.filter(e=>e.disabled)].some(e=>e&&Object.keys(o).includes(e.name)),[o,a,i]),h=b(()=>({...s,collapsed:i,badge:m,filters:c,requestTween:l}),[s,i,m,c,l]);return S(()=>{let t=e.shadowRoot.querySelector(`#tableContent`),n=new ResizeObserver(t=>requestAnimationFrame(()=>{e.style.setProperty(`--ot-height`,t[0]?.contentRect.height+`px`)}));return n.observe(t),()=>n.unobserve(t)},[]),{allSelected:d,onAllCheckboxChange:f,data:n,settingsConfig:h,filters:c,groupOnColumn:p,sortAndGroup:r.sortAndGroup,...u}}})),oo,so,co,lo,uo,fo,po=e((()=>{s(),g(),k(),Pa(),B(),oo=n`
	<svg
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
	>
		<g>
			<path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
		</g>
	</svg>
`,so=e=>e?`groupRow groupRow-folded`:`groupRow`,co=({item:e,index:t})=>r=>A(r?.length>0,()=>n`
				<div class="itemRow-minis" part="item-minis">
					${r.map(r=>n`<div
								class="itemRow-mini"
								part="item-mini item-mini-${r.name}"
							>
								${(r.renderMini??r.renderCell)(r,{item:e,index:t})}
							</div>`)}
				</div>
			`),lo=({columns:e,collapsedColumns:t,miniColumns:r,onItemClick:i,onCheckboxChange:a,dataIsValid:o,groupOnColumn:s,onItemChange:c,rowPartFn:l})=>(u,d,{selected:f,expanded:p,toggleCollapse:m})=>n`
		<div
			?selected=${f}
			part="${[`itemRow`,`itemRow-${u[Ma]}`,l?.(u,d)].filter(Boolean).join(` `)}"
			.dataIndex=${u[Ma]}
			.dataItem=${u}
			class="itemRow"
			@click=${i}
		>
			<div class="itemRow-wrapper" part="itemRow-wrapper">
				<input
					class="checkbox"
					type="checkbox"
					part="checkbox"
					.checked=${f}
					.dataItem=${u}
					@input=${a}
					?disabled=${!o}
				/>
				<cosmoz-omnitable-item-row
					part="itemRow-inner"
					.columns=${e}
					.index=${d}
					.selected=${f}
					.expanded=${p}
					.item=${u}
					.groupOnColumn=${s}
					.onItemChange=${c}
				>
				</cosmoz-omnitable-item-row>
				<button
					class="expand"
					?hidden="${Ae(t.length)}"
					?aria-expanded="${p}"
					@click="${m}"
				>
					${oo}
				</button>
			</div>
			${co({item:u,index:d})(r)}
		</div>
		<cosmoz-omnitable-item-expand
			.columns=${t}
			.item=${u}
			.index=${d}
			?selected=${f}
			?expanded=${p}
			.groupOnColumn=${s}
			part="item-expand"
		>
		</cosmoz-omnitable-item-expand>
	`,uo=({onCheckboxChange:e,dataIsValid:t,groupOnColumn:r})=>(i,a,{selected:o,folded:s,toggleFold:c})=>n` <div
			class="${so(s)}"
			part="groupRow groupRow-${i[Ma]}"
		>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${o}
				.dataItem=${i}
				@input=${e}
				?disabled=${!t}
			/>
			<h3 class="groupRow-label">
				<div><span>${r?.title}</span>: &nbsp;</div>
				<cosmoz-omnitable-group-row
					.column=${r}
					.item=${i.items?.[0]}
					.selected=${o}
					.folded=${s}
					.group=${i}
				></cosmoz-omnitable-group-row>
			</h3>
			<div class="groupRow-badge">${i.items.length}</div>
			<button class="expand" ?aria-expanded="${s}" @click=${c}>
				${oo}
			</button>
		</div>`,fo=({host:e,error:t,dataIsValid:n,processedItems:r,columns:i,collapsedColumns:a,miniColumns:o,sortAndGroupOptions:s,rowPartFn:c,...l})=>{let{loading:d=!1,displayEmptyGroups:f=!1,compareItemsFn:p}=e,m=ze({shiftKey:!1,ctrlKey:!1}),h=u(t=>{let n=t.target.dataItem,r=t.target.checked;m.current.shiftKey?e.shadowRoot.querySelector(`#groupedList`).toggleSelectTo(n,r):m.current.ctrlKey?(t.target.checked=!0,e.shadowRoot.querySelector(`#groupedList`).selectOnly(n)):e.shadowRoot.querySelector(`#groupedList`).toggleSelect(n,r),t.preventDefault(),t.stopPropagation()},[]);S(()=>{let e=({shiftKey:e,ctrlKey:t})=>{m.current={shiftKey:e,ctrlKey:t}};return window.addEventListener(`keydown`,e),window.addEventListener(`keyup`,e),()=>{window.removeEventListener(`keydown`,e),window.removeEventListener(`keyup`,e)}},[]);let g=u(t=>{let n=t.composedPath();n.slice(0,n.indexOf(t.currentTarget)).find(e=>e.matches?.(`a, .checkbox, .expand`))||e.dispatchEvent(new window.CustomEvent(`omnitable-item-click`,{bubbles:!0,composed:!0,detail:{item:t.currentTarget.dataItem,index:t.currentTarget.dataIndex}}))},[]),{groupOnColumn:_}=s,v=u((t,n)=>r=>mn(e,t,n,r),[]);return{...l,processedItems:r,dataIsValid:n,filterIsTooStrict:n&&r.length<1,loading:d,compareItemsFn:p,displayEmptyGroups:f,error:t,renderItem:b(()=>lo({columns:i,collapsedColumns:a,miniColumns:o,onItemClick:g,onCheckboxChange:h,dataIsValid:n,groupOnColumn:_,onItemChange:v,rowPartFn:c}),[i,a,g,h,n,_,v,c]),renderGroup:b(()=>uo({onCheckboxChange:h,dataIsValid:n,groupOnColumn:_}),[h,n,_])}}})),mo,ho=e((()=>{mo=(e,t)=>{if(e===t)return 0;if(e==null)return-1;if(t==null)return 1;let n=typeof e,r=typeof t;return n===`object`&&r===`object`?e.toString()<t.toString()?-1:1:n===`number`&&r===`number`?e-t:n===`string`&&r===`string`?e<t?-1:1:n===`boolean`&&r===`boolean`?e?-1:1:(console.warn(`unsupported sort`,n,e,r,t),0)}})),go,_o,vo,yo,bo,xo,So=e((()=>{Ue(),g(),ho(),dn(),yi(),Pa(),go=(e,t)=>(n,r)=>mo(e(n),e(r))*(t?-1:1),_o=e=>e.replace(/([a-z0-9])([A-Z])/gu,`$1-$2`).toLowerCase(),vo=(e,t)=>{!e||!t||Object.entries(t).forEach(([t,n])=>{e[z].__ownChange=!0,e[z][t]=n,e[z].__ownChange=!1,e[z].dispatchEvent(new CustomEvent(`${_o(t)}-changed`,{bubbles:!0,detail:{value:n}}))})},yo=(e,t)=>Object.assign(e,{[Ma]:t}),bo=Symbol(`unparsed`),xo=({data:e,columns:t,hashParam:n,sortAndGroupOptions:r,noLocalSort:i,noLocalFilter:a})=>{let{groupOnColumn:o,groupOnDescending:s,sortOnColumn:c,descending:l}=r,d=u(([e,n])=>{let r=t.find(({name:t})=>t===e);return r==null?[e,void 0]:[e,n.filter&&r.serializeFilter(r,n.filter)]},[t]),f=u(([e,n])=>{let r=t.find(({name:t})=>t===e);if(r==null)return[e,{[bo]:n}];let i={filter:r.deserializeFilter(r,n)};return vo(r,i),[e,i]},[t]),[p,m]=mi({},n,{multi:!0,suffix:`-filter--`,write:d,read:f}),h=u((e,n)=>m(r=>{let i=Ie(n,r[e]);return vo(t.find(t=>t.name===e),i),{...r,[e]:{...r[e],...i}}}),[t,m]),g=b(()=>Object.fromEntries(t.map(e=>[e.name,!e.noLocalFilter&&e.getFilterFn(e,p[e.name]?.filter)]).filter(([,e])=>!!e)),[t,...b(()=>Object.values(p).map(e=>e.filter),[p])]),_=b(()=>!Array.isArray(e)||e.length===0?[]:Object.entries(g).length===0||a?e.slice():e.filter(e=>Object.values(g).every(t=>t(e))),[e,g,a]),v=b(()=>{if(!i&&!o&&c!=null&&c.sortOn!=null)return _.slice().sort(go(e=>c.getComparableValue({...c,valuePath:c.sortOn},e),l));if(o!=null&&o.groupOn!=null){let e=_.reduce((e,t)=>{let n=o.getComparableValue({...o,valuePath:o.groupOn},t);if(n===void 0)return e;let r=e.find(e=>e.id===n);return r?(r.items.push(t),e):(r={id:n,name:n,items:[t]},[...e,r])},[]);return e.sort(go(e=>o.getComparableValue({...o,valuePath:o.groupOn},e.items[0]),s)),!c||i?e:e.filter(e=>Array.isArray(e.items)).map(e=>(e.items.sort(go(e=>c.getComparableValue({...c,valuePath:c.sortOn},e),l)),e))}return _},[_,o,s,c,l,i]),y=b(()=>{let e=0,t=0,n=[];return v.forEach(r=>{if(Array.isArray(r.items)){yo(r,t++),r.items.forEach(t=>{yo(t,e++),n.push(t)});return}return yo(r,e++),n.push(r)},[]),n},[v]);return S(()=>{m(e=>Object.values(e).some(e=>e[bo]!=null)?Object.fromEntries(Object.entries(e).map(([e,t])=>t[bo]==null?[e,t]:f([e,t[bo]]))):e)},[f]),{processedItems:v,visibleData:y,filters:p,filterFunctions:g,setFilterState:h}}})),Co,wo,To=e((()=>{pe(),ft(),g(),Co=e=>{let t=t=>{let n=e.data.indexOf(t);if(n<0)return null;let r=e.data.splice(n,1);if(e.data=e.data.slice(),Array.isArray(r)&&r.length>0)return r[0]},n=(t,n)=>{e.data.splice(t,1,n),e.data=e.data.slice()};return{removeItem:t,removeItems(t){let n=[];for(let r=t.length-1;r>=0;--r){let i=e.removeItem(t[r]);i!=null&&n.push(i)}return n},replaceItemAtIndex:n,replaceItem(t,r){let i=e.data.indexOf(t);if(i>-1)return n(i,r)},selectItem(t){e.shadowRoot.querySelector(`#groupedList`).select(t)},selectAll(){e.shadowRoot.querySelector(`#groupedList`).selectAll()},deselectAll(){e.shadowRoot.querySelector(`#groupedList`).deselectAll()},deselectItem(t){e.shadowRoot.querySelector(`#groupedList`).deselect(t)},isItemSelected(t){return e.shadowRoot.querySelector(`#groupedList`).isItemSelected(t)}}},wo=({host:e,visibleData:t,filters:n,...r})=>{let{setFilterState:i}=r,a=b(()=>Co(e),[]),[o,s]=ce(`selectedItems`,[]);y(r,Object.values(r)),y(a,Object.values(a)),S(()=>{let t=e=>i(e.detail.name,t=>({...t,...e.detail.state}));return e.addEventListener(`legacy-filter-changed`,t),()=>e.removeEventListener(`legacy-filter-changed`,t)},[]),l(`visibleData`,t),l(`sortedFilteredGroupedItems`,r.sortedFilteredGroupedItems),l(`sortOn`,r.sortOn),l(`descending`,r.descending),l(`isMini`,r.isMini);let c=b(()=>Object.fromEntries(Object.entries(n).filter(([,{filter:e}])=>e!==void 0).map(([e,{filter:t}])=>[e,t])),[n]);return l(`filters`,c,Object.values(c)),{selectedItems:o,setSelectedItems:s}}})),Eo,Do=e((()=>{Oa(),to(),ro(),ao(),po(),So(),To(),Ti(),Eo=e=>{let{hashParam:t,settingsId:n,data:r,resizeSpeedFactor:i,noLocal:a,noLocalSort:o=a,noLocalFilter:s=a,error:c,rowPartFn:l}=e,u=Ea({settingsId:n,host:e}),{settings:d,setSettings:f,columns:p,resetRef:m,savedSettings:h}=u,g=Ci(p,t,{settings:d,setSettings:f,resetRef:m,ready:h!==void 0}),{processedItems:_,visibleData:v,filters:y,setFilterState:b,filterFunctions:ee}=xo({data:r,columns:p,hashParam:t,sortAndGroupOptions:g,noLocalSort:o,noLocalFilter:s}),{isMini:x,collapsedColumns:S,miniColumns:te,requestTween:ne}=eo({host:e,columns:p,settings:d,setSettings:f,resizeSpeedFactor:i,sortAndGroupOptions:g}),re=r&&Array.isArray(r)&&r.length>0,{selectedItems:ie,setSelectedItems:ae}=wo({host:e,visibleData:v,sortedFilteredGroupedItems:_,columns:p,filters:y,setFilterState:b,isMini:x,...g});return{header:io({host:e,selectedItems:ie,sortAndGroupOptions:g,dataIsValid:re,data:r,columns:p,filters:y,collapsedColumns:S,settings:d,filterFunctions:ee,settingS:u,setFilterState:b,hideSelectAll:e.hideSelectAll===!0,requestTween:ne}),list:fo({host:e,error:c,dataIsValid:re,processedItems:_,selectedItems:ie,setSelectedItems:ae,columns:p,collapsedColumns:S,miniColumns:te,sortAndGroupOptions:g,rowPartFn:l}),footer:no({host:e,selectedItems:ie,columns:p})}}})),Oo=e((()=>{o(),customElements.define(`cosmoz-grouped-list-row`,class extends HTMLElement{get item(){return this._item}set item(e){this._item=e,this._render()}get index(){return this._index}set index(e){this._index=e,this._render()}get renderFn(){return this._renderFn}set renderFn(e){this._renderFn=e,this._render()}_render(){this._item==null||this._index==null||this._renderFn==null||a(this._renderFn(this._item,this._index),this)}})})),ko,Ao,jo,Mo,No,Po,Fo,Io,Lo,Ro=e((()=>{ko={group:Symbol(`group`)},Ao=(e,t)=>(t.has(e)||t.set(e,{}),t.get(e)),jo=(e,t)=>!!Ao(e,t).expanded,Mo=(e,t)=>!!Ao(e,t).folded,No=e=>e?e.items instanceof Array:!1,Po=e=>{if(!Array.isArray(e)||e.length===0)return;let t=Array.isArray(e[0]?.items);if(!e.every(e=>Array.isArray(e.items)===t))throw Error(`Data must be homogeneous.`)},Fo=(e,t,n)=>{if(Array.isArray(e))return Po(e),e.reduce((e,r)=>{let i=r;return i.items?i.items.length?Ao(r,n).folded?e.concat(r):e.concat(r,i.items.map(e=>Object.assign(e,{[ko.group]:r}))):t?e.concat(r):e:e.concat(r)},[])},Io=(e,...t)=>typeof e==`function`?e(...t):e,Lo=(e,t)=>e===t})),zo,Bo=e((()=>{g(),Ro(),zo=()=>{let[e,t]=x(()=>[new WeakMap]);return{setItemState:u((e,n)=>t(([t])=>{let r=Ao(e,t);return Object.assign(r,Io(n,r)),[t]}),[]),state:e[0],signal:e}}})),Vo,Ho=e((()=>{g(),Bo(),Ro(),Vo=()=>{let{setItemState:e,state:t,signal:n}=zo();return{state:t,signal:n,toggleFold:u((t,n)=>{No(t)&&e(t,e=>({folded:n===void 0?!e.folded:n}))},[]),toggleCollapse:u((t,n)=>{No(t)||e(t,e=>({expanded:n===void 0?!e.expanded:!n}))},[])}}})),Uo,Wo=e((()=>{g(),Ro(),Uo=({compareItemsFn:e,data:t,flatData:n})=>{let[r,i]=ce(`selectedItems`,()=>[]),[a,o]=x(),s=u(e=>r.includes(e),[r]),c=u(e=>e?.items?.every(s)??!1,[s]),l=u(e=>s(e)||c(e),[s,c]),d=u(e=>{let t=e.items??[e];i(e=>[...e,...t.filter(t=>!e.includes(t))]),o(e)},[]),f=u(e=>{let t=e.items??[e];i(e=>e.filter(e=>!t.includes(e))),o(e)},[]),p=u(e=>{i(e.items?.slice()||[e]),o(e)},[]),m=u(()=>{i(t.flatMap(e=>e.items||e)),o(void 0)},[t]),h=u(()=>{i([]),o(void 0)},[]),g=u((e,t=!l(e))=>t?d(e):f(e),[l]),_=u((t,r)=>{if(!n)return;let i=a?n.findIndex(t=>e(t,a)):-1;if(i<0)return g(t,r);let[s,c]=[i,n.indexOf(t)].sort((e,t)=>e-t);n.slice(s,c+1).forEach((e,t,n)=>{t>0&&t<n.length-1&&No(e)||g(e,r)}),o(t)},[n,e,g]);return S(()=>i(t=>t.length>0&&n?n.filter(n=>t.find(t=>e(n,t))):t),[n]),{selectedItems:r,isItemSelected:s,isGroupSelected:c,isSelected:l,select:d,deselect:f,selectOnly:p,selectAll:m,deselectAll:h,toggleSelect:g,toggleSelectTo:_}}})),Go,Ko,qo,Jo=e((()=>{de(),pe(),g(),o(),Oo(),Ho(),Wo(),Ro(),Go={host:{position:`relative`,display:`flex`,flexDirection:`column`}},Ko=e=>{let{data:t,renderItem:n,renderGroup:r,displayEmptyGroups:i,compareItemsFn:a=Lo}=e,{toggleFold:o,toggleCollapse:s,state:c,signal:l}=Vo(),d=b(()=>Fo(t,i,c),[t,i,l]),{selectedItems:f,isItemSelected:p,isGroupSelected:m,isSelected:h,select:g,deselect:_,selectOnly:v,selectAll:ee,deselectAll:x,toggleSelect:S,toggleSelectTo:te}=Uo({compareItemsFn:a,data:t,flatData:d}),ne=u((e,t)=>Array.isArray(e.items)?r(e,t,{selected:m(e),folded:Mo(e,c),toggleSelect:t=>S(e,typeof t==`boolean`?t:void 0),toggleFold:()=>o(e)}):n(e,t,{selected:f.includes(e),expanded:jo(e,c),toggleSelect:t=>S(e,typeof t==`boolean`?t:void 0),toggleCollapse:()=>s(e)}),[n,r,f,S,l]);ue(()=>{Object.assign(e.style,Go.host)},[]);let re={toggleFold:o,toggleCollapse:s,isItemSelected:p,isGroupSelected:m,isSelected:h,select:g,deselect:_,selectOnly:v,selectAll:ee,deselectAll:x,toggleSelect:S,toggleSelectTo:te};return y(re,Object.values(re)),{renderRow:ne,flatData:d}},qo=({renderRow:e,flatData:t})=>h({items:t,renderItem:(t,r)=>n`<cosmoz-grouped-list-row
				.item=${t}
				.index=${r}
				.renderFn=${e}
			></cosmoz-grouped-list-row>`})})),Yo,Xo=e((()=>{g(),Jo(),Yo=e=>qo(Ko(e)),customElements.define(`cosmoz-grouped-list`,m(Yo,{useShadowDOM:!1}))})),Zo=e((()=>{Xo()})),Qo,$o,es,ts=e((()=>{$e(),Dt(),$r(),ti(),Oi(),Ni(),Ii(),g(),tt(),o(),fe(),zi(),qi(),Yi(),ea(),Do(),Zo(),Qo=e=>window.ShadyCSS?.ApplyShim?.transformCssText?.(e)||e,$o=e=>{let{header:t,list:r,footer:i}=Eo(e);return n`
		<style>
			${st([],()=>Qo(Ri))}
		</style>

		<div class="mainContainer">
			${Ji(t)}
			<div class="tableContent" id="tableContent">
				${$i(t,r)}
			</div>
			${Ki(i)}
		</div>

		<div id="columns">
			<slot id="columnsSlot"></slot>
		</div>
	`},customElements.define(`cosmoz-omnitable`,m($o,{observedAttributes:[`hash-param`,`sort-on`,`group-on`,`descending`,`group-on-descending`,`hide-select-all`,`settings-id`,`no-local`,`no-local-sort`,`no-local-filter`,`disabled-filtering`,`loading`,`mini-breakpoint`,`inline`]})),es=`
	<slot name="actions" slot="actions"></slot>
`,n(Object.assign([es],{raw:[es]})),qe(Object.assign([es],{raw:[es]}))})),ns,rs=e((()=>{ns=JSON.parse(`[{"_id":"59a7035c3c3f3854a788085c","index":0,"guid":"f3f7f587-575a-4339-8af6-09a46b75d4c8","isActive":true,"balance":"$1,749.46","picture":"http://placehold.it/32x32","age":20,"eyeColor":"brown","name":{"first":"Linda","last":"Rios"},"company":"EXOTERIC","email":"linda.rios@exoteric.io","phone":"+1 (930) 590-3443","address":"357 Beaver Street, Sims, Nebraska, 5471","about":"Esse aliquip mollit amet veniam incididunt minim id. Aliqua enim id aliquip sunt anim. Cupidatat sint enim Lorem velit pariatur ut. Excepteur proident cillum mollit sint incididunt. Consectetur commodo exercitation enim quis sunt ad. Deserunt consectetur commodo laborum exercitation occaecat sunt est eu enim minim mollit adipisicing laboris. Cillum labore ex sit commodo.","registered":"Tuesday, September 2, 2014 8:17 PM","latitude":"-44.454422","longitude":"2.933608","tags":["exercitation","ad","occaecat","exercitation","nulla"],"favoriteFruit":"strawberry"},{"_id":"59a7035cfd448c2124e2d2e1","index":1,"guid":"592b55b6-9cf2-4977-881d-328d332e0c28","isActive":true,"balance":"$3,685.52","picture":"http://placehold.it/32x32","age":34,"eyeColor":"blue","name":{"first":"Shepard","last":"Sykes"},"company":"COMSTAR","email":"shepard.sykes@comstar.biz","phone":"+1 (902) 596-2183","address":"561 Emmons Avenue, Freelandville, South Carolina, 263","about":"Incididunt consequat mollit laborum adipisicing. Veniam occaecat pariatur aliqua nisi adipisicing. Dolor minim cupidatat cupidatat ad officia irure consectetur consectetur nostrud elit laboris enim aliquip est. Enim sunt eu veniam et incididunt dolore et anim laboris cupidatat minim veniam culpa. Laborum mollit nulla aute proident velit sint officia nisi ad amet Lorem in commodo ipsum. Enim ex deserunt ullamco ex anim velit officia culpa ut. Officia consectetur est ipsum ex do fugiat enim nulla.","registered":"Wednesday, March 29, 2017 2:43 PM","latitude":"4.738078","longitude":"78.425259","tags":["commodo","fugiat","veniam","do","ullamco"],"favoriteFruit":"apple"},{"_id":"59a7035c2c3fdc2132b75ce1","index":2,"guid":"9e5a4bc8-cda3-40e4-a7cc-45d60d4b9298","isActive":false,"balance":"$1,111.57","picture":"http://placehold.it/32x32","age":32,"eyeColor":"green","name":{"first":"Dean","last":"Giles"},"company":"PANZENT","email":"dean.giles@panzent.ca","phone":"+1 (987) 442-3557","address":"522 Meadow Street, Chase, Texas, 8590","about":"Ut amet sint est eiusmod deserunt reprehenderit aliquip laborum quis anim qui commodo do anim. Dolor anim ullamco mollit nulla adipisicing incididunt. Culpa laboris voluptate adipisicing adipisicing. Culpa pariatur exercitation ea nisi Lorem quis cillum dolore magna velit dolore aliqua aliqua. Dolore ea sint ex proident consectetur do ullamco elit nostrud nostrud. Nulla aliquip consectetur officia quis minim minim laborum deserunt.","registered":"Wednesday, December 10, 2014 6:10 PM","latitude":"-7.970468","longitude":"-27.062504","tags":["sint","eiusmod","magna","non","consectetur"],"favoriteFruit":"strawberry"},{"_id":"59a7035c755454cd6d25074b","index":3,"guid":"e586cb29-3d23-4f08-b287-1b2907a2df03","isActive":false,"balance":"$1,060.21","picture":"http://placehold.it/32x32","age":34,"eyeColor":"brown","name":{"first":"Celina","last":"French"},"company":"NAMEGEN","email":"celina.french@namegen.name","phone":"+1 (818) 435-3328","address":"499 Matthews Court, Dante, Florida, 9119","about":"Reprehenderit est pariatur dolore culpa amet irure occaecat quis tempor consectetur duis non eiusmod. Et ut quis enim occaecat eu duis anim magna magna amet commodo ut est ullamco. Ex ex ex enim et fugiat deserunt enim. Veniam pariatur est ullamco cupidatat. Esse magna veniam sunt consequat excepteur ad dolor qui do eiusmod. Sit mollit consequat cupidatat deserunt occaecat. Esse ut est minim ut occaecat consequat irure irure adipisicing culpa minim deserunt aliquip.","registered":"Wednesday, February 5, 2014 9:30 PM","latitude":"-56.117732","longitude":"28.272471","tags":["est","dolore","tempor","sint","reprehenderit"],"favoriteFruit":"apple"},{"_id":"59a7035cd142c5382245806d","index":4,"guid":"d349763f-a096-4000-9729-2aa56f48930a","isActive":true,"balance":"$1,941.06","picture":"http://placehold.it/32x32","age":20,"eyeColor":"green","name":{"first":"Jordan","last":"Hays"},"company":"CODACT","email":"jordan.hays@codact.com","phone":"+1 (869) 519-3768","address":"193 Harman Street, Osmond, Louisiana, 2271","about":"Proident aliqua ut ea ipsum. Velit ipsum reprehenderit irure occaecat ut consequat. Officia esse non eiusmod qui.","registered":"Monday, April 28, 2014 1:28 AM","latitude":"-89.041531","longitude":"-160.159812","tags":["quis","deserunt","do","voluptate","occaecat"],"favoriteFruit":"apple"},{"_id":"59a7035c8fff5d3333b4fe39","index":5,"guid":"3d14ae73-ff24-40fe-9053-e7cb2b8a9c15","isActive":false,"balance":"$3,108.51","picture":"http://placehold.it/32x32","age":20,"eyeColor":"green","name":{"first":"Rosa","last":"Roberts"},"company":"EXOSPEED","email":"rosa.roberts@exospeed.co.uk","phone":"+1 (998) 497-3272","address":"769 Barwell Terrace, Orin, New Mexico, 8896","about":"Et aliqua fugiat aliqua qui anim dolore ex nostrud aute cupidatat esse et sit. Labore fugiat aute nostrud laborum eiusmod esse occaecat. Voluptate qui nostrud reprehenderit elit ex commodo ut dolore adipisicing voluptate. Ea adipisicing elit Lorem dolor sint nostrud laborum sunt velit dolor occaecat incididunt. Fugiat et velit et laborum laborum est nulla id est eiusmod et tempor ad officia. Aliquip do voluptate aliquip dolor reprehenderit do qui incididunt deserunt ex dolore. Nulla dolore quis velit esse non nulla minim eiusmod voluptate occaecat labore.","registered":"Thursday, October 16, 2014 6:38 AM","latitude":"37.51662","longitude":"-174.567784","tags":["mollit","dolor","dolore","ad","nisi"],"favoriteFruit":"banana"},{"_id":"59a7035c8de046ebba5f59ee","index":6,"guid":"86adfcea-5212-41f1-a481-50fd039731ad","isActive":false,"balance":"$1,638.80","picture":"http://placehold.it/32x32","age":37,"eyeColor":"brown","name":{"first":"Twila","last":"Richard"},"company":"ANACHO","email":"twila.richard@anacho.info","phone":"+1 (804) 546-2248","address":"431 Paerdegat Avenue, Tioga, Northern Mariana Islands, 9395","about":"Excepteur ipsum nostrud occaecat quis. Excepteur mollit aute sunt sunt. Minim consequat magna ut quis officia sit ut magna excepteur dolor aliquip ad. Velit aliquip eiusmod qui proident dolore voluptate consectetur minim aliquip.","registered":"Monday, October 13, 2014 2:00 PM","latitude":"47.176743","longitude":"49.680616","tags":["et","enim","quis","est","eu"],"favoriteFruit":"banana"},{"_id":"59a7035c38e8215d200313f4","index":7,"guid":"3658b420-9457-45df-95f5-d7c67b20b179","isActive":false,"balance":"$1,077.13","picture":"http://placehold.it/32x32","age":31,"eyeColor":"blue","name":{"first":"Elsie","last":"Dyer"},"company":"INQUALA","email":"elsie.dyer@inquala.org","phone":"+1 (874) 419-3985","address":"800 McKibbin Street, Dola, Utah, 3188","about":"Labore veniam ea velit proident amet exercitation quis ullamco. Labore ad aute aliquip veniam deserunt fugiat. Tempor tempor qui eiusmod sunt aliqua.","registered":"Sunday, October 11, 2015 2:29 PM","latitude":"-25.364163","longitude":"70.888205","tags":["ipsum","est","adipisicing","occaecat","esse"],"favoriteFruit":"apple"},{"_id":"59a7035c76c334a6b24e7006","index":8,"guid":"844bad84-5eaa-4f19-ae1c-9f0457ddf2a7","isActive":false,"balance":"$1,450.12","picture":"http://placehold.it/32x32","age":35,"eyeColor":"green","name":{"first":"Chrystal","last":"Vega"},"company":"TALKOLA","email":"chrystal.vega@talkola.me","phone":"+1 (840) 479-2105","address":"294 Greenwood Avenue, Jackpot, Indiana, 5299","about":"Ipsum irure non fugiat do sit aute eiusmod laboris. Laboris duis anim occaecat commodo id elit consequat culpa ex qui. Aute ea Lorem proident commodo minim. Deserunt non occaecat laboris velit sit. Elit nisi amet consectetur aliqua sint quis veniam consectetur cupidatat incididunt sunt. Do aute irure irure nisi laborum officia do ad ex veniam aliquip enim voluptate nisi.","registered":"Sunday, May 1, 2016 4:47 AM","latitude":"65.873664","longitude":"75.550181","tags":["eu","tempor","est","amet","non"],"favoriteFruit":"strawberry"},{"_id":"59a7035cd4a9a2a1edc42ab3","index":9,"guid":"858e9092-389a-4052-9bc4-57b9a694dd68","isActive":false,"balance":"$1,861.41","picture":"http://placehold.it/32x32","age":33,"eyeColor":"brown","name":{"first":"Ellison","last":"Waters"},"company":"REVERSUS","email":"ellison.waters@reversus.us","phone":"+1 (862) 537-3521","address":"586 Lewis Place, Manitou, Tennessee, 7985","about":"Pariatur voluptate culpa velit ullamco labore pariatur magna sit aliqua. Elit deserunt pariatur minim dolor eu ex do qui. Culpa minim amet dolor mollit voluptate minim. Nostrud eiusmod cupidatat fugiat do laboris duis nisi et officia. Lorem labore nulla voluptate ex eu excepteur nostrud qui proident nulla dolor ea in. Minim ipsum id Lorem minim enim. Ad aliquip ex Lorem in excepteur excepteur eiusmod ad.","registered":"Wednesday, June 14, 2017 6:20 AM","latitude":"-34.20548","longitude":"-75.451382","tags":["mollit","labore","quis","aliquip","aliqua"],"favoriteFruit":"apple"},{"_id":"59a7035c109f497ba9ac56b9","index":10,"guid":"1cfba083-eeef-453b-b9fc-b7078a1464be","isActive":true,"balance":"$2,000.50","picture":"http://placehold.it/32x32","age":22,"eyeColor":"green","name":{"first":"Summer","last":"Stevens"},"company":"ISONUS","email":"summer.stevens@isonus.tv","phone":"+1 (872) 424-2890","address":"894 Nichols Avenue, Summertown, Mississippi, 4356","about":"Consequat mollit eiusmod non reprehenderit Lorem esse est sit dolore laborum amet do. Tempor excepteur do esse irure sint elit tempor amet proident Lorem minim. Quis id mollit id ad labore minim sunt ipsum aliqua aliquip et cupidatat id. Deserunt commodo laborum exercitation cupidatat laborum laboris nostrud labore eu. Excepteur ex duis esse Lorem anim commodo irure reprehenderit excepteur laboris Lorem anim. Pariatur labore labore officia voluptate officia ex amet nostrud exercitation consequat tempor fugiat. Ea reprehenderit occaecat culpa quis reprehenderit eiusmod officia aliquip aliqua nisi.","registered":"Thursday, June 22, 2017 10:35 PM","latitude":"89.231184","longitude":"-110.234136","tags":["enim","cillum","labore","aliqua","aute"],"favoriteFruit":"apple"},{"_id":"59a7035c51f4cce963a70e0b","index":11,"guid":"9517b4f4-60d6-4b23-82c7-013e1a8f3d89","isActive":false,"balance":"$1,744.33","picture":"http://placehold.it/32x32","age":36,"eyeColor":"brown","name":{"first":"Roach","last":"Mccoy"},"company":"RUBADUB","email":"roach.mccoy@rubadub.net","phone":"+1 (820) 452-3141","address":"600 Centre Street, Tooleville, Ohio, 7044","about":"Amet incididunt duis nisi mollit amet consectetur. Sunt officia veniam incididunt dolore minim deserunt occaecat nostrud est. Aliqua deserunt anim Lorem ipsum elit in ea enim est magna velit. Consectetur eiusmod in cillum culpa.","registered":"Monday, October 3, 2016 6:46 AM","latitude":"81.385787","longitude":"14.146369","tags":["nulla","et","ullamco","non","cupidatat"],"favoriteFruit":"apple"},{"_id":"59a7035c93884daa0668d951","index":12,"guid":"2fbe934b-bdb6-4b2d-957a-33cc7f094e48","isActive":true,"balance":"$2,992.96","picture":"http://placehold.it/32x32","age":20,"eyeColor":"blue","name":{"first":"Rachel","last":"Perry"},"company":"INTERLOO","email":"rachel.perry@interloo.io","phone":"+1 (959) 502-3649","address":"640 Hausman Street, Walland, New York, 9676","about":"Veniam eu veniam magna Lorem pariatur sunt minim reprehenderit nulla proident. Eiusmod ipsum qui eu amet qui officia sunt. Elit et esse sit elit cillum eiusmod.","registered":"Sunday, July 30, 2017 4:32 PM","latitude":"-10.871728","longitude":"147.135976","tags":["ullamco","enim","voluptate","anim","exercitation"],"favoriteFruit":"strawberry"},{"_id":"59a7035c67f269f9c70b9b97","index":13,"guid":"4bd0c91a-850c-4754-90df-be98cedd6d32","isActive":true,"balance":"$1,851.74","picture":"http://placehold.it/32x32","age":40,"eyeColor":"green","name":{"first":"Sims","last":"Rogers"},"company":"APEXTRI","email":"sims.rogers@apextri.biz","phone":"+1 (948) 503-2531","address":"312 Mill Avenue, Movico, Maryland, 3515","about":"Excepteur sit est consectetur voluptate sit veniam occaecat non. Laboris quis amet officia sint minim. Eiusmod culpa magna in officia ipsum irure incididunt. Esse et culpa et laboris ex. Nulla sunt ex proident nisi nulla non enim eu. Excepteur esse culpa consectetur incididunt elit.","registered":"Tuesday, November 4, 2014 9:03 PM","latitude":"-33.25626","longitude":"-76.988402","tags":["laboris","quis","officia","nostrud","voluptate"],"favoriteFruit":"banana"},{"_id":"59a7035cf30ca465187c684e","index":14,"guid":"fd7ac270-5bd4-4d37-aebd-9a862d7c5758","isActive":false,"balance":"$2,720.13","picture":"http://placehold.it/32x32","age":22,"eyeColor":"brown","name":{"first":"Velasquez","last":"Oneil"},"company":"POLARIUM","email":"velasquez.oneil@polarium.ca","phone":"+1 (923) 469-3429","address":"900 Ash Street, Stonybrook, Montana, 3865","about":"Non quis eiusmod eiusmod culpa irure culpa Lorem est nulla Lorem dolore aliqua nostrud. Quis sunt amet qui id in amet in ad consectetur id. Mollit exercitation eiusmod ea sit ea id et sint cupidatat non ipsum excepteur. Magna ullamco ipsum tempor dolore.","registered":"Monday, March 16, 2015 12:39 PM","latitude":"37.362897","longitude":"-24.30902","tags":["Lorem","ipsum","consectetur","reprehenderit","ad"],"favoriteFruit":"apple"},{"_id":"59a7035cdebe34c7394c6efe","index":15,"guid":"ff8ebe48-a9ba-484f-932c-5d3c586b447e","isActive":true,"balance":"$1,622.24","picture":"http://placehold.it/32x32","age":25,"eyeColor":"blue","name":{"first":"Mckay","last":"Wiggins"},"company":"OVERFORK","email":"mckay.wiggins@overfork.name","phone":"+1 (960) 587-3564","address":"275 Ferry Place, Boykin, New Jersey, 3918","about":"Consequat nisi qui excepteur eiusmod consequat adipisicing laborum. Irure officia qui nisi nisi ut elit nostrud sit consequat consequat enim qui ullamco sit. Laborum cupidatat aute nostrud aute sit ex ex laborum.","registered":"Saturday, June 28, 2014 12:32 PM","latitude":"-3.221893","longitude":"-108.718689","tags":["consectetur","proident","ut","mollit","reprehenderit"],"favoriteFruit":"banana"},{"_id":"59a7035ca8c295ab38f923d8","index":16,"guid":"8be8d88b-62ef-4845-b37b-714e3dbc7044","isActive":true,"balance":"$1,747.26","picture":"http://placehold.it/32x32","age":36,"eyeColor":"brown","name":{"first":"Fox","last":"Dean"},"company":"SULTRAX","email":"fox.dean@sultrax.com","phone":"+1 (903) 587-2021","address":"181 Linden Street, Swartzville, Kansas, 1953","about":"Eiusmod sint ex deserunt aliqua deserunt cillum eu esse commodo et ad consequat adipisicing. Sint cupidatat qui do excepteur fugiat deserunt veniam est eiusmod velit. Laborum ad ex minim ea aliqua nisi nulla eu adipisicing. Voluptate qui incididunt pariatur labore et eiusmod tempor. Irure in commodo ex anim quis ex. Ex aliqua id in Lorem. Pariatur ullamco adipisicing et tempor ut proident irure voluptate dolore Lorem irure velit velit dolor.","registered":"Thursday, December 25, 2014 1:51 PM","latitude":"70.092261","longitude":"137.024184","tags":["nulla","dolor","quis","veniam","ex"],"favoriteFruit":"apple"},{"_id":"59a7035cbb6cff56beb77712","index":17,"guid":"fa0a5d41-ea46-4848-8811-1c711c8a09da","isActive":true,"balance":"$3,736.32","picture":"http://placehold.it/32x32","age":38,"eyeColor":"blue","name":{"first":"Savage","last":"Herring"},"company":"LIQUICOM","email":"savage.herring@liquicom.co.uk","phone":"+1 (935) 408-3913","address":"513 Elliott Place, Katonah, Delaware, 9510","about":"Laboris eu ullamco dolore cupidatat consectetur consequat nostrud. Veniam laborum nulla aute enim aute ut velit. Et ullamco dolore officia ex do. Lorem elit officia commodo pariatur cillum sit officia dolore.","registered":"Thursday, February 5, 2015 9:34 PM","latitude":"71.095484","longitude":"158.028683","tags":["velit","quis","magna","voluptate","ullamco"],"favoriteFruit":"banana"},{"_id":"59a7035c2621173c3db49132","index":18,"guid":"34ed9369-db1a-4531-b3a8-a26ab5818a1e","isActive":true,"balance":"$3,559.17","picture":"http://placehold.it/32x32","age":39,"eyeColor":"green","name":{"first":"Moon","last":"Conway"},"company":"HALAP","email":"moon.conway@halap.info","phone":"+1 (954) 475-2559","address":"242 Dupont Street, Blanco, Connecticut, 6962","about":"Esse adipisicing quis cupidatat mollit velit velit cillum. Nostrud cupidatat eu in commodo proident. Nisi veniam magna sint culpa minim commodo do aliqua enim minim consequat ad amet. Mollit amet culpa commodo ea reprehenderit.","registered":"Sunday, April 27, 2014 4:47 PM","latitude":"89.076813","longitude":"-158.156226","tags":["sit","adipisicing","Lorem","cillum","non"],"favoriteFruit":"apple"},{"_id":"59a7035cae04cd3b0b1c4ebe","index":19,"guid":"3134798e-4154-436d-a2df-9c6d622bd570","isActive":false,"balance":"$3,017.21","picture":"http://placehold.it/32x32","age":33,"eyeColor":"green","name":{"first":"Steele","last":"Gill"},"company":"TASMANIA","email":"steele.gill@tasmania.org","phone":"+1 (870) 424-2065","address":"702 High Street, Thomasville, Washington, 8973","about":"Voluptate pariatur laboris laborum dolore anim. Sit exercitation sint nisi qui sunt amet laborum aliqua nulla est ut. Cupidatat sunt fugiat anim consectetur commodo elit consequat.","registered":"Monday, August 24, 2015 9:41 AM","latitude":"-73.125779","longitude":"158.426667","tags":["proident","reprehenderit","elit","dolore","voluptate"],"favoriteFruit":"apple"},{"_id":"59a7035c3ff747576abe0ce4","index":20,"guid":"53462778-e892-41e6-9661-bd3837cf4fdb","isActive":true,"balance":"$1,339.97","picture":"http://placehold.it/32x32","age":36,"eyeColor":"green","name":{"first":"Wiley","last":"Jimenez"},"company":"ENAUT","email":"wiley.jimenez@enaut.me","phone":"+1 (800) 495-2091","address":"730 Gunnison Court, Bennett, Georgia, 3983","about":"Mollit eu dolor dolore incididunt ex nisi duis do magna in. Dolore et eiusmod velit sint consequat officia ad veniam qui cupidatat. Nulla dolor sit ipsum do. Esse dolor commodo qui ad dolore mollit dolore nulla nostrud culpa consectetur elit voluptate. Cupidatat irure adipisicing et enim officia. Aliquip velit id cupidatat non cupidatat reprehenderit enim irure incididunt commodo ipsum cupidatat.","registered":"Tuesday, March 18, 2014 7:58 PM","latitude":"-41.676046","longitude":"51.435099","tags":["cupidatat","reprehenderit","exercitation","occaecat","commodo"],"favoriteFruit":"banana"},{"_id":"59a7035c7ab804d6508045ad","index":21,"guid":"c3b56fa4-1b35-4142-8687-18eacd39f3ff","isActive":false,"balance":"$1,661.76","picture":"http://placehold.it/32x32","age":35,"eyeColor":"green","name":{"first":"Vazquez","last":"Goodman"},"company":"ROUGHIES","email":"vazquez.goodman@roughies.us","phone":"+1 (982) 410-2800","address":"105 Green Street, Cutter, Rhode Island, 6634","about":"Lorem exercitation quis et consectetur id mollit labore ea enim nulla. Quis ea aliqua irure dolore ut cupidatat dolore labore quis mollit culpa culpa quis qui. Fugiat aliqua non ex deserunt exercitation ut cillum aliquip ipsum ex. Consequat do nostrud officia tempor elit tempor amet laborum non. Nulla in velit exercitation veniam in fugiat cupidatat.","registered":"Tuesday, July 4, 2017 12:38 AM","latitude":"-42.644916","longitude":"-11.217395","tags":["ut","minim","ut","aliqua","veniam"],"favoriteFruit":"strawberry"},{"_id":"59a7035c526b5608e65cf21b","index":22,"guid":"14fe6b2e-b139-4989-a6f6-a17ecd830c28","isActive":true,"balance":"$2,516.68","picture":"http://placehold.it/32x32","age":22,"eyeColor":"green","name":{"first":"Castaneda","last":"Tanner"},"company":"QUAREX","email":"castaneda.tanner@quarex.tv","phone":"+1 (940) 527-3149","address":"654 Stockholm Street, Cazadero, Oklahoma, 3236","about":"Aute commodo ex ex qui qui amet. Sunt qui irure mollit exercitation culpa aliquip eiusmod dolor mollit laborum et irure exercitation aute. Qui ad ullamco anim laborum mollit et est incididunt sit anim ullamco dolor reprehenderit. Lorem non ea pariatur non dolor.","registered":"Tuesday, October 14, 2014 7:55 AM","latitude":"-66.185306","longitude":"-13.503575","tags":["tempor","pariatur","proident","mollit","consectetur"],"favoriteFruit":"banana"},{"_id":"59a7035c8316916dc8650037","index":23,"guid":"4e2338f8-827b-4772-bfda-7b3e0f3172e8","isActive":false,"balance":"$3,630.85","picture":"http://placehold.it/32x32","age":26,"eyeColor":"brown","name":{"first":"Kirby","last":"Holt"},"company":"WARETEL","email":"kirby.holt@waretel.net","phone":"+1 (857) 494-2330","address":"649 Dinsmore Place, Day, North Carolina, 9524","about":"Ex consectetur laborum aliquip est duis in adipisicing aliqua minim. Exercitation dolor quis voluptate quis eu labore esse. Tempor et cupidatat occaecat magna duis non et ad amet non dolore non. Sunt qui id ullamco reprehenderit qui ex nisi elit ut cupidatat magna enim fugiat officia. Et enim excepteur qui est. Quis ut enim eiusmod consequat ipsum anim occaecat.","registered":"Sunday, March 26, 2017 1:35 PM","latitude":"37.646166","longitude":"-69.921208","tags":["irure","deserunt","laborum","do","laboris"],"favoriteFruit":"strawberry"},{"_id":"59a7035c615510a6f629ae78","index":24,"guid":"1c1fb554-5a33-487f-9790-893540af3969","isActive":true,"balance":"$2,016.60","picture":"http://placehold.it/32x32","age":20,"eyeColor":"blue","name":{"first":"Arline","last":"Norton"},"company":"REPETWIRE","email":"arline.norton@repetwire.io","phone":"+1 (816) 524-2522","address":"552 Dewitt Avenue, Edgewater, Maine, 203","about":"Officia tempor magna dolore ex. Non mollit elit proident sint veniam irure qui laboris laboris dolore reprehenderit. Nisi fugiat nulla pariatur veniam esse id dolor est deserunt commodo.","registered":"Saturday, February 11, 2017 7:47 AM","latitude":"88.125487","longitude":"108.126647","tags":["sint","velit","quis","ut","sint"],"favoriteFruit":"banana"},{"_id":"59a7035ccf388074ba52a49a","index":25,"guid":"00f81875-bcbf-482e-897b-b3819259ec10","isActive":false,"balance":"$2,846.52","picture":"http://placehold.it/32x32","age":39,"eyeColor":"green","name":{"first":"Chan","last":"Hansen"},"company":"MICRONAUT","email":"chan.hansen@micronaut.biz","phone":"+1 (833) 595-2815","address":"525 Rutland Road, Muse, Pennsylvania, 9512","about":"Cupidatat elit laboris elit duis duis duis eiusmod veniam id aliqua ea qui sunt. Ex ea ullamco do sint. Anim aliquip incididunt voluptate pariatur amet proident cillum. Aliqua ad fugiat est ea. Eu ullamco dolore elit nostrud.","registered":"Sunday, April 19, 2015 7:45 PM","latitude":"-43.064419","longitude":"50.672979","tags":["excepteur","nostrud","ea","sint","enim"],"favoriteFruit":"banana"},{"_id":"59a7035cc0324a9841c61b82","index":26,"guid":"655ddaf6-cf4b-4df9-a333-15d01bd98ffe","isActive":false,"balance":"$3,410.69","picture":"http://placehold.it/32x32","age":29,"eyeColor":"blue","name":{"first":"Aida","last":"Mueller"},"company":"GEEKOL","email":"aida.mueller@geekol.ca","phone":"+1 (907) 458-3337","address":"608 Herkimer Street, Caron, North Dakota, 1283","about":"Qui officia cupidatat nostrud est laboris nisi cupidatat veniam excepteur aute et reprehenderit ea deserunt. Deserunt anim duis non aliqua et non reprehenderit. Excepteur sunt magna fugiat incididunt esse esse eiusmod cupidatat magna elit nostrud laborum. Pariatur ullamco laborum cupidatat exercitation aliquip consectetur culpa dolore mollit eiusmod. Veniam aliquip commodo mollit sunt et aute voluptate officia aliquip. Veniam exercitation exercitation sunt proident occaecat veniam labore consectetur laborum.","registered":"Wednesday, October 7, 2015 9:39 AM","latitude":"-75.452339","longitude":"102.759886","tags":["cupidatat","esse","ex","ut","culpa"],"favoriteFruit":"apple"},{"_id":"59a7035c69bf27034fc83efb","index":27,"guid":"52d4926e-74b5-4b74-ae54-9da7808f924e","isActive":false,"balance":"$3,905.82","picture":"http://placehold.it/32x32","age":24,"eyeColor":"green","name":{"first":"Reyes","last":"Johnston"},"company":"CIRCUM","email":"reyes.johnston@circum.name","phone":"+1 (860) 459-3108","address":"319 Alabama Avenue, Stollings, Iowa, 7144","about":"Veniam et magna proident elit culpa est incididunt dolore. Et esse incididunt occaecat nostrud reprehenderit excepteur cupidatat id elit id eiusmod sint consequat. Voluptate fugiat cupidatat proident qui veniam cupidatat aliqua consequat exercitation irure id fugiat dolor. Ullamco esse et eiusmod ullamco. Consequat labore elit amet voluptate fugiat consequat aute cupidatat sunt deserunt et ad quis esse.","registered":"Saturday, August 2, 2014 10:31 AM","latitude":"-3.236452","longitude":"112.018362","tags":["eu","cupidatat","deserunt","culpa","sint"],"favoriteFruit":"apple"},{"_id":"59a7035c5466da4d8723624d","index":28,"guid":"f14cd57c-112f-4e05-be74-dcd217ffcd8d","isActive":true,"balance":"$1,541.40","picture":"http://placehold.it/32x32","age":37,"eyeColor":"green","name":{"first":"Nash","last":"Lane"},"company":"GEOFARM","email":"nash.lane@geofarm.com","phone":"+1 (925) 410-3330","address":"138 Just Court, Loomis, Marshall Islands, 360","about":"Minim aliquip ea minim nulla excepteur adipisicing. Labore magna ad minim ex eiusmod id consequat occaecat ea ea cupidatat id do consectetur. Mollit officia dolor qui eiusmod aute laboris incididunt dolore anim nulla ut excepteur aliquip est. Ipsum mollit esse elit dolor quis do laboris ad fugiat ullamco incididunt. Non non sit sunt culpa qui irure irure aliqua exercitation et incididunt. Esse amet id in fugiat.","registered":"Monday, June 26, 2017 9:25 AM","latitude":"-79.044765","longitude":"-102.699496","tags":["Lorem","voluptate","id","sit","et"],"favoriteFruit":"strawberry"},{"_id":"59a7035c0136625e4b0cf495","index":29,"guid":"209e068f-910c-4497-8e68-87b08bbff4f4","isActive":true,"balance":"$3,881.49","picture":"http://placehold.it/32x32","age":26,"eyeColor":"green","name":{"first":"Aline","last":"Dale"},"company":"ZOINAGE","email":"aline.dale@zoinage.co.uk","phone":"+1 (963) 421-3067","address":"844 Freeman Street, Cornucopia, Alaska, 8933","about":"Est aliqua ea exercitation labore est non cillum velit elit tempor est ex. Sunt sit non excepteur sit dolor quis excepteur dolore commodo deserunt consequat fugiat fugiat excepteur. Sit sunt ad officia ea deserunt fugiat Lorem elit consectetur qui. Do aliqua dolore reprehenderit ullamco elit eiusmod laboris elit velit proident amet proident quis sunt.","registered":"Sunday, November 16, 2014 5:32 PM","latitude":"-5.445644","longitude":"57.217008","tags":["sint","sit","ea","commodo","ex"],"favoriteFruit":"apple"},{"_id":"59a7035ccde7c6362570428b","index":30,"guid":"de265047-a6b8-4dca-988a-82ae04462a6a","isActive":true,"balance":"$1,630.59","picture":"http://placehold.it/32x32","age":40,"eyeColor":"blue","name":{"first":"Bates","last":"Meyer"},"company":"KIDGREASE","email":"bates.meyer@kidgrease.info","phone":"+1 (832) 599-3279","address":"140 Newport Street, Needmore, Arkansas, 2736","about":"Irure exercitation aute non laboris anim dolore velit ut enim nostrud sit. Laboris reprehenderit laboris velit in laborum id mollit do deserunt et. Adipisicing labore et non tempor est commodo labore. Sit ut veniam cupidatat adipisicing amet.","registered":"Thursday, July 17, 2014 3:58 PM","latitude":"66.724748","longitude":"-176.746077","tags":["eiusmod","exercitation","proident","aliqua","do"],"favoriteFruit":"apple"},{"_id":"59a7035ce132271d5fa94348","index":31,"guid":"e8305fec-8bf2-40f3-8015-d87610cfc7ea","isActive":false,"balance":"$2,318.75","picture":"http://placehold.it/32x32","age":28,"eyeColor":"green","name":{"first":"Stevens","last":"Snider"},"company":"BIOSPAN","email":"stevens.snider@biospan.org","phone":"+1 (811) 592-3620","address":"105 Dunham Place, Malott, Virginia, 1579","about":"Laborum labore elit amet irure qui quis labore proident velit veniam eiusmod aliquip. Ea nostrud et cupidatat Lorem qui. Minim ex sint duis officia anim sit sit et amet incididunt eu nulla.","registered":"Thursday, August 28, 2014 1:59 AM","latitude":"51.741171","longitude":"-167.91722","tags":["enim","deserunt","duis","est","eiusmod"],"favoriteFruit":"strawberry"},{"_id":"59a7035c98fce222722467df","index":32,"guid":"efae3f87-8d6a-4d84-af43-3a8e778bb3f2","isActive":false,"balance":"$2,937.56","picture":"http://placehold.it/32x32","age":31,"eyeColor":"blue","name":{"first":"Doreen","last":"Carroll"},"company":"TECHTRIX","email":"doreen.carroll@techtrix.me","phone":"+1 (847) 505-2539","address":"154 Alice Court, Marshall, Arizona, 6156","about":"Occaecat duis consectetur consectetur sint. Laboris ut esse Lorem duis labore deserunt consectetur ex sunt dolor non minim occaecat magna. Id qui magna occaecat elit consequat aliquip ex mollit magna. Tempor deserunt voluptate tempor magna pariatur ex fugiat veniam occaecat incididunt reprehenderit fugiat adipisicing. Occaecat magna voluptate proident cillum minim occaecat.","registered":"Tuesday, October 28, 2014 7:06 AM","latitude":"87.516681","longitude":"81.720297","tags":["irure","est","sint","consectetur","labore"],"favoriteFruit":"strawberry"},{"_id":"59a7035c4447df5e0d76d793","index":33,"guid":"ed9619fb-eed3-4e03-9d3f-eb0cfa247e9b","isActive":false,"balance":"$1,095.64","picture":"http://placehold.it/32x32","age":31,"eyeColor":"green","name":{"first":"Mcclain","last":"Berry"},"company":"SHEPARD","email":"mcclain.berry@shepard.us","phone":"+1 (919) 411-2370","address":"736 Aviation Road, Breinigsville, Guam, 1225","about":"Aliqua deserunt et dolor eiusmod quis consequat veniam nisi dolore laborum. Sit irure incididunt excepteur sint non. Aliqua esse culpa id cupidatat. Laboris irure eu do irure labore pariatur sunt exercitation aliquip anim commodo eu laboris aliqua. Mollit nostrud est quis nisi irure reprehenderit. Ullamco ipsum culpa esse proident do nulla nostrud do. Nisi pariatur voluptate occaecat sint veniam ex occaecat.","registered":"Friday, March 20, 2015 3:27 AM","latitude":"-54.396135","longitude":"-105.425605","tags":["anim","eiusmod","officia","eiusmod","ut"],"favoriteFruit":"strawberry"},{"_id":"59a7035c7fa79cfdce33ed47","index":34,"guid":"f9bfc8c7-9c60-49d6-a6ca-899d0abb6821","isActive":true,"balance":"$1,976.75","picture":"http://placehold.it/32x32","age":30,"eyeColor":"brown","name":{"first":"Bullock","last":"Kane"},"company":"BULLJUICE","email":"bullock.kane@bulljuice.tv","phone":"+1 (978) 466-3528","address":"407 Kensington Street, Talpa, Oregon, 9641","about":"Et duis ex sit quis sunt qui ullamco nisi. Sit Lorem deserunt do magna eiusmod ad tempor consectetur. Tempor duis ea eiusmod ea qui ad veniam aute culpa ut aute sint et nisi.","registered":"Tuesday, July 29, 2014 7:54 PM","latitude":"-50.495738","longitude":"-47.802041","tags":["velit","ad","aliqua","ut","eiusmod"],"favoriteFruit":"strawberry"},{"_id":"59a7035cded1262c1ea8cd10","index":35,"guid":"13731f59-5080-42f7-a160-0d88ad8df56e","isActive":false,"balance":"$1,623.47","picture":"http://placehold.it/32x32","age":26,"eyeColor":"green","name":{"first":"Whitfield","last":"Love"},"company":"GEEKNET","email":"whitfield.love@geeknet.net","phone":"+1 (983) 406-3585","address":"633 Gilmore Court, Haring, Wyoming, 570","about":"Adipisicing consectetur pariatur nostrud labore ea commodo sit commodo deserunt irure. Duis tempor culpa cillum voluptate. Mollit dolore dolore ullamco eu aliqua. Commodo voluptate enim commodo magna est exercitation eu dolore occaecat deserunt occaecat non. Non duis cupidatat laborum ex duis tempor velit eiusmod do qui consequat ipsum enim in.","registered":"Saturday, September 13, 2014 5:06 AM","latitude":"89.899137","longitude":"85.210926","tags":["sunt","velit","amet","aute","exercitation"],"favoriteFruit":"strawberry"},{"_id":"59a7035ca48b45cbb5592453","index":36,"guid":"410cc140-1eda-4eed-a7e4-aa6b7b6e9aa5","isActive":false,"balance":"$2,155.95","picture":"http://placehold.it/32x32","age":39,"eyeColor":"green","name":{"first":"Jeannine","last":"Higgins"},"company":"ZOGAK","email":"jeannine.higgins@zogak.io","phone":"+1 (905) 580-2033","address":"796 Wyona Street, Whitmer, Hawaii, 3220","about":"Culpa occaecat eu Lorem elit officia ullamco velit labore officia occaecat esse quis in. Aute velit laboris nostrud cillum esse. Aute ullamco id consequat anim occaecat deserunt velit eu laborum amet dolor culpa. In fugiat magna commodo ipsum ea labore amet commodo culpa adipisicing. Ullamco ut velit ut sunt tempor pariatur consequat aute.","registered":"Sunday, November 15, 2015 7:41 AM","latitude":"28.630291","longitude":"116.437262","tags":["magna","laboris","aliqua","veniam","cillum"],"favoriteFruit":"banana"},{"_id":"59a7035c19fa4081667fec10","index":37,"guid":"fc527a60-87dc-4973-b29b-ae6c6a3a02a3","isActive":true,"balance":"$1,791.22","picture":"http://placehold.it/32x32","age":27,"eyeColor":"brown","name":{"first":"Kemp","last":"Combs"},"company":"PETIGEMS","email":"kemp.combs@petigems.biz","phone":"+1 (971) 558-2694","address":"248 Milton Street, Torboy, Wisconsin, 9525","about":"Dolor culpa occaecat occaecat magna Lorem officia laborum duis reprehenderit elit dolor. Dolor nisi sit id eiusmod elit aliqua minim. Aliqua sunt duis nisi do mollit voluptate nulla enim reprehenderit. Anim incididunt nulla anim cupidatat occaecat ea nulla Lorem.","registered":"Thursday, March 16, 2017 8:02 AM","latitude":"86.949155","longitude":"-10.576148","tags":["officia","proident","reprehenderit","eiusmod","et"],"favoriteFruit":"apple"},{"_id":"59a7035c353252c0b5bb78de","index":38,"guid":"185271ff-7cb7-4273-896c-801e927d69c7","isActive":true,"balance":"$2,800.39","picture":"http://placehold.it/32x32","age":28,"eyeColor":"brown","name":{"first":"Opal","last":"Bryan"},"company":"XOGGLE","email":"opal.bryan@xoggle.ca","phone":"+1 (853) 550-3730","address":"448 Crooke Avenue, Loyalhanna, Alabama, 2883","about":"Est laborum ad duis cupidatat pariatur velit adipisicing. Commodo cillum ex eiusmod qui exercitation enim excepteur qui. Lorem dolore mollit dolore id veniam in qui reprehenderit nulla. Nisi cupidatat occaecat reprehenderit ex non elit fugiat cupidatat cupidatat esse minim aute incididunt ea. Id adipisicing ex aute est ex in. Aliquip fugiat consequat in aliquip amet.","registered":"Saturday, May 13, 2017 3:33 AM","latitude":"-7.901608","longitude":"28.712133","tags":["officia","veniam","incididunt","proident","elit"],"favoriteFruit":"banana"},{"_id":"59a7035cf1abac8eda4dc81a","index":39,"guid":"2c60d9c5-71e7-4132-b520-7a66f3c6ee80","isActive":true,"balance":"$1,144.49","picture":"http://placehold.it/32x32","age":24,"eyeColor":"green","name":{"first":"Hurley","last":"Farley"},"company":"SENSATE","email":"hurley.farley@sensate.name","phone":"+1 (825) 493-3055","address":"310 Kings Place, Matheny, Michigan, 9118","about":"Ex irure do velit amet irure qui consectetur magna qui nulla. Mollit voluptate aute voluptate anim minim. Ea nisi nostrud laboris officia consequat voluptate ullamco. Consectetur et et ullamco occaecat consequat mollit dolore. Elit aliqua ex elit sit dolor elit nostrud. Mollit in quis cupidatat dolore. Anim anim reprehenderit elit quis consectetur velit sunt culpa pariatur esse amet cupidatat.","registered":"Wednesday, February 4, 2015 4:44 PM","latitude":"-13.003628","longitude":"-53.151513","tags":["nostrud","ipsum","sit","pariatur","eu"],"favoriteFruit":"banana"},{"_id":"59a7035cab834659496f07e6","index":40,"guid":"9b314f77-2132-4d67-a2e7-e321b1425489","isActive":false,"balance":"$1,695.47","picture":"http://placehold.it/32x32","age":38,"eyeColor":"green","name":{"first":"Gena","last":"Erickson"},"company":"SUREMAX","email":"gena.erickson@suremax.com","phone":"+1 (808) 587-3031","address":"953 Hamilton Walk, Grapeview, West Virginia, 5414","about":"Commodo adipisicing esse amet cupidatat aliquip non quis fugiat amet adipisicing proident irure. Officia officia amet est sit ea dolore nostrud. Magna veniam exercitation fugiat pariatur tempor aliquip pariatur laboris. Nisi magna consectetur mollit ex.","registered":"Sunday, January 22, 2017 4:08 AM","latitude":"66.697714","longitude":"-31.518386","tags":["reprehenderit","officia","consequat","officia","tempor"],"favoriteFruit":"apple"},{"_id":"59a7035cdf3d9271510da94f","index":41,"guid":"8add5d93-0a23-48c6-8f06-ae3eeb19b588","isActive":false,"balance":"$3,580.72","picture":"http://placehold.it/32x32","age":21,"eyeColor":"green","name":{"first":"Rivers","last":"Ray"},"company":"APPLICA","email":"rivers.ray@applica.co.uk","phone":"+1 (950) 599-2480","address":"362 Broome Street, Hickory, Nevada, 8639","about":"Eiusmod veniam cupidatat esse amet exercitation mollit nostrud cillum excepteur adipisicing qui irure. Velit laboris nulla ad dolor sint aute duis consectetur dolor do sit Lorem pariatur veniam. Adipisicing ullamco nisi id nostrud tempor esse pariatur id esse eu adipisicing laborum ut velit. Tempor et mollit ullamco ad nulla nulla exercitation tempor ullamco magna consequat dolor ea eu. Magna enim nisi ipsum exercitation labore eiusmod nulla et. Tempor est nisi commodo adipisicing culpa ipsum enim. Sint officia ea magna adipisicing ex aute cupidatat aliqua anim id laborum sunt.","registered":"Wednesday, April 15, 2015 9:15 AM","latitude":"4.898258","longitude":"86.671363","tags":["ullamco","deserunt","eu","sint","velit"],"favoriteFruit":"strawberry"},{"_id":"59a7035c27915d318dc46605","index":42,"guid":"391406a2-8a33-4dba-8188-703efc28ee6a","isActive":true,"balance":"$3,408.64","picture":"http://placehold.it/32x32","age":22,"eyeColor":"brown","name":{"first":"Pierce","last":"Warner"},"company":"GEEKKO","email":"pierce.warner@geekko.info","phone":"+1 (976) 432-3810","address":"620 Vandam Street, Churchill, District Of Columbia, 7273","about":"Deserunt nisi culpa voluptate non. Ex incididunt commodo incididunt duis aute pariatur minim. Aliquip labore et laborum qui tempor eu culpa anim cupidatat elit culpa id. Consequat consequat aute sint incididunt non proident Lorem. Tempor adipisicing ullamco enim ea incididunt pariatur minim incididunt dolore labore elit do exercitation velit.","registered":"Tuesday, January 26, 2016 5:09 PM","latitude":"18.840446","longitude":"-140.288934","tags":["pariatur","non","velit","ad","ipsum"],"favoriteFruit":"strawberry"},{"_id":"59a7035c121cb0d353274b8e","index":43,"guid":"601e5899-1adb-4034-83fb-a408d73eed3e","isActive":false,"balance":"$2,166.09","picture":"http://placehold.it/32x32","age":32,"eyeColor":"green","name":{"first":"Agnes","last":"Klein"},"company":"IPLAX","email":"agnes.klein@iplax.org","phone":"+1 (803) 526-2302","address":"873 Lynch Street, Epworth, Minnesota, 7604","about":"Commodo laboris ea mollit voluptate qui ea non consectetur consequat do est culpa in fugiat. Dolor dolore ea eiusmod aute labore non aliquip. Aliquip elit dolore consectetur veniam sit aliquip dolor nisi nulla in velit. Amet in enim velit pariatur fugiat cupidatat minim tempor id anim. Duis elit dolor in amet nostrud est. Qui dolor labore commodo ea ad officia.","registered":"Thursday, February 19, 2015 2:24 PM","latitude":"-67.101097","longitude":"50.717088","tags":["magna","veniam","do","ea","occaecat"],"favoriteFruit":"strawberry"},{"_id":"59a7035ce2051f3ecf26a443","index":44,"guid":"575f5eb2-764e-40ae-b7e7-df6e9ad613fd","isActive":true,"balance":"$2,790.19","picture":"http://placehold.it/32x32","age":24,"eyeColor":"green","name":{"first":"Mcconnell","last":"Flores"},"company":"INTRADISK","email":"mcconnell.flores@intradisk.me","phone":"+1 (941) 478-2925","address":"186 Noel Avenue, Gwynn, Kentucky, 7885","about":"Culpa officia proident aute laborum nulla reprehenderit veniam. In ex elit ut laborum aliquip voluptate Lorem cillum fugiat sunt magna aliqua. Ut ea ullamco aliqua est non Lorem sunt aliqua occaecat laborum sunt consectetur cillum.","registered":"Wednesday, April 8, 2015 2:31 AM","latitude":"-81.25321","longitude":"133.72738","tags":["cupidatat","excepteur","aute","in","aute"],"favoriteFruit":"strawberry"},{"_id":"59a7035c47fb9f9fde38fcd7","index":45,"guid":"e7b47778-d925-4b8e-ab14-84ba73def2b4","isActive":false,"balance":"$1,674.58","picture":"http://placehold.it/32x32","age":36,"eyeColor":"green","name":{"first":"Hunt","last":"Tyler"},"company":"SAVVY","email":"hunt.tyler@savvy.us","phone":"+1 (863) 598-2691","address":"611 Beadel Street, Roy, Federated States Of Micronesia, 2629","about":"Eiusmod aliquip eu sit sint sint duis Lorem minim adipisicing magna proident occaecat. Deserunt ex est et adipisicing nulla commodo est voluptate nulla. Voluptate cupidatat sit officia mollit elit laboris Lorem elit enim amet tempor cillum ullamco. Est dolor exercitation duis dolor.","registered":"Wednesday, March 15, 2017 11:03 AM","latitude":"69.912349","longitude":"153.385815","tags":["enim","aute","Lorem","magna","culpa"],"favoriteFruit":"apple"},{"_id":"59a7035ca9c9cde01a506db2","index":46,"guid":"7d592c62-decf-4783-a09e-50b17540385b","isActive":false,"balance":"$2,144.62","picture":"http://placehold.it/32x32","age":36,"eyeColor":"green","name":{"first":"Kayla","last":"Hines"},"company":"LUNCHPOD","email":"kayla.hines@lunchpod.tv","phone":"+1 (898) 445-3215","address":"387 Farragut Place, Keyport, Palau, 6584","about":"Officia cillum do adipisicing dolor Lorem laboris voluptate nulla nisi amet voluptate aliquip. Nostrud adipisicing elit incididunt minim consectetur magna et do excepteur ipsum occaecat occaecat laborum. Cupidatat veniam et qui Lorem anim non in quis tempor ullamco consectetur.","registered":"Thursday, December 10, 2015 11:19 AM","latitude":"-56.974919","longitude":"81.24329","tags":["amet","aute","officia","ea","eu"],"favoriteFruit":"strawberry"},{"_id":"59a7035c0e69eb2d00523cd6","index":47,"guid":"0e944922-c8b4-41d4-b772-fda678044be3","isActive":false,"balance":"$2,414.81","picture":"http://placehold.it/32x32","age":29,"eyeColor":"blue","name":{"first":"Galloway","last":"Martin"},"company":"GRONK","email":"galloway.martin@gronk.net","phone":"+1 (992) 421-2108","address":"782 Wyckoff Avenue, Austinburg, Missouri, 2703","about":"Exercitation adipisicing eiusmod quis culpa labore ipsum est labore occaecat enim. Occaecat et aute ipsum ea consectetur Lorem cupidatat ea aliquip amet exercitation enim magna laborum. Fugiat eiusmod anim amet veniam eiusmod enim pariatur. Dolore ex voluptate elit qui in in occaecat elit non commodo proident ea ad. Do fugiat ex reprehenderit dolor proident laboris et proident dolor quis.","registered":"Saturday, July 25, 2015 8:58 AM","latitude":"-67.079903","longitude":"45.040108","tags":["laborum","veniam","nulla","minim","labore"],"favoriteFruit":"apple"},{"_id":"59a7035cd0e6865eee4a787b","index":48,"guid":"311f5a7e-8c80-4e13-ba78-de4877c421ae","isActive":true,"balance":"$1,216.24","picture":"http://placehold.it/32x32","age":21,"eyeColor":"brown","name":{"first":"Delgado","last":"Logan"},"company":"ECOSYS","email":"delgado.logan@ecosys.io","phone":"+1 (817) 488-2527","address":"530 Montana Place, Longbranch, Puerto Rico, 2384","about":"Nulla est occaecat amet aliquip. Tempor eiusmod ullamco velit reprehenderit velit qui proident duis elit labore tempor esse pariatur. Adipisicing anim est quis veniam incididunt ipsum. Minim adipisicing amet adipisicing incididunt proident amet consequat id tempor veniam ullamco laboris ex nulla. Aliquip aute minim id laborum esse ut do ullamco. Duis duis officia incididunt fugiat aute velit laborum eu sit nulla.","registered":"Saturday, May 17, 2014 6:46 PM","latitude":"-31.5656","longitude":"-177.850334","tags":["aute","occaecat","do","sit","mollit"],"favoriteFruit":"apple"},{"_id":"59a7035cdc9d3370f810dae3","index":49,"guid":"c075d96d-9d39-4d1f-81ef-f5f3827a3ec5","isActive":false,"balance":"$1,487.55","picture":"http://placehold.it/32x32","age":32,"eyeColor":"blue","name":{"first":"Francine","last":"Williams"},"company":"ISODRIVE","email":"francine.williams@isodrive.biz","phone":"+1 (827) 552-3345","address":"184 Huron Street, Brady, Virgin Islands, 4981","about":"Mollit magna incididunt eiusmod esse. Et cillum cupidatat eiusmod magna. Officia commodo et nulla nisi duis.","registered":"Sunday, January 26, 2014 7:54 PM","latitude":"52.628824","longitude":"-162.282948","tags":["ex","do","ullamco","labore","qui"],"favoriteFruit":"strawberry"},{"_id":"59a7035c2d9fc6a61983949b","index":50,"guid":"cb0b9d70-84f7-42f9-a598-a9614ba5df34","isActive":true,"balance":"$3,458.93","picture":"http://placehold.it/32x32","age":31,"eyeColor":"brown","name":{"first":"Sheree","last":"Potter"},"company":"BICOL","email":"sheree.potter@bicol.ca","phone":"+1 (911) 520-2486","address":"536 Homecrest Court, Wilsonia, California, 7465","about":"Cillum nostrud eu eiusmod quis veniam nulla adipisicing. Minim irure aute veniam eiusmod mollit ex anim reprehenderit dolore id tempor laboris veniam nisi. Eiusmod ex et Lorem ea enim non aliqua. Minim consequat nisi mollit sint. Do consectetur nostrud irure culpa minim ea exercitation commodo cillum et incididunt fugiat incididunt. Aliqua exercitation elit ut et aliqua.","registered":"Sunday, October 18, 2015 2:26 PM","latitude":"89.490889","longitude":"-80.854052","tags":["id","mollit","exercitation","ullamco","enim"],"favoriteFruit":"apple"},{"_id":"59a7035c405328ddeaff8904","index":51,"guid":"99a63d65-324a-481a-9cac-05c1f9cac100","isActive":true,"balance":"$3,341.72","picture":"http://placehold.it/32x32","age":29,"eyeColor":"brown","name":{"first":"Miranda","last":"Sexton"},"company":"MARQET","email":"miranda.sexton@marqet.name","phone":"+1 (946) 415-3797","address":"340 Bath Avenue, Eagletown, Idaho, 5384","about":"Magna esse sint fugiat consequat consequat fugiat sint incididunt laboris elit do duis velit id. Cillum sint ut qui proident mollit duis et occaecat qui aliquip proident. Lorem exercitation ut in cupidatat anim cupidatat exercitation duis in.","registered":"Thursday, January 22, 2015 7:09 AM","latitude":"19.12383","longitude":"90.784467","tags":["in","commodo","amet","aute","anim"],"favoriteFruit":"apple"},{"_id":"59a7035cfd92740227c0f6b1","index":52,"guid":"b4c25087-f039-498a-a373-313af6acb6ef","isActive":false,"balance":"$1,126.25","picture":"http://placehold.it/32x32","age":20,"eyeColor":"blue","name":{"first":"Ofelia","last":"Carr"},"company":"ENTROPIX","email":"ofelia.carr@entropix.com","phone":"+1 (820) 593-2737","address":"142 Ocean Avenue, Condon, American Samoa, 4622","about":"Est voluptate nostrud deserunt proident deserunt. Enim voluptate enim officia duis consectetur aute cillum dolore. Anim nisi irure do nostrud incididunt qui velit velit. Officia laboris ullamco laboris aliqua ea adipisicing minim consectetur.","registered":"Thursday, January 28, 2016 11:39 PM","latitude":"19.542017","longitude":"-3.713091","tags":["culpa","commodo","fugiat","aliqua","tempor"],"favoriteFruit":"apple"},{"_id":"59a7035c248c6ba65270e46e","index":53,"guid":"7829626c-45e0-4c44-935f-3f44a6580e4a","isActive":true,"balance":"$2,456.51","picture":"http://placehold.it/32x32","age":32,"eyeColor":"brown","name":{"first":"Kasey","last":"Cooley"},"company":"NORALI","email":"kasey.cooley@norali.co.uk","phone":"+1 (861) 491-3340","address":"250 Hull Street, Alleghenyville, Massachusetts, 7051","about":"Eiusmod deserunt quis in culpa ipsum nulla labore pariatur qui occaecat veniam laborum commodo. Laboris veniam sit aliquip do veniam consequat amet. Labore nisi deserunt deserunt aliquip incididunt esse fugiat sunt dolore non reprehenderit. Sunt laboris ut irure aliquip veniam ullamco enim elit esse consequat eiusmod non. Dolor eu qui velit occaecat aliqua incididunt proident laboris.","registered":"Thursday, July 23, 2015 7:32 PM","latitude":"16.512867","longitude":"146.71739","tags":["officia","eu","Lorem","esse","commodo"],"favoriteFruit":"apple"},{"_id":"59a7035cbf98406486822269","index":54,"guid":"32812ecf-ac5d-4297-92f6-c35bb954b085","isActive":false,"balance":"$2,328.11","picture":"http://placehold.it/32x32","age":25,"eyeColor":"green","name":{"first":"Jordan","last":"Robbins"},"company":"GEEKOSIS","email":"jordan.robbins@geekosis.info","phone":"+1 (839) 498-2949","address":"957 Clymer Street, Fedora, New Hampshire, 5337","about":"Ad culpa ea amet voluptate commodo esse. Minim incididunt mollit nostrud incididunt ut id aute consequat consequat eiusmod. In et aute quis laborum ut pariatur tempor consequat laboris. Aliqua commodo ullamco sint sint ex ea nostrud qui veniam mollit. Voluptate cillum anim aliquip elit laboris et proident fugiat. Id laboris ut tempor magna quis dolor ea. Cupidatat sint dolor sunt minim sunt labore officia dolor mollit est.","registered":"Saturday, October 10, 2015 12:28 PM","latitude":"32.067311","longitude":"145.237322","tags":["in","magna","nisi","nisi","adipisicing"],"favoriteFruit":"apple"},{"_id":"59a7035c24b395b422e21bdd","index":55,"guid":"ddbeb6d9-ccc2-4bd3-b910-0197a5a3e978","isActive":false,"balance":"$3,534.04","picture":"http://placehold.it/32x32","age":34,"eyeColor":"brown","name":{"first":"Lewis","last":"Peck"},"company":"APEX","email":"lewis.peck@apex.org","phone":"+1 (980) 536-3987","address":"849 Covert Street, Clayville, Colorado, 1350","about":"Consequat dolore mollit mollit do voluptate cillum commodo. Enim reprehenderit sit amet do. Ullamco culpa sit veniam sint do labore voluptate adipisicing consequat. Occaecat velit adipisicing officia do duis ut ad minim ad. Nulla elit occaecat proident do ipsum occaecat. Dolore qui labore proident dolore ex nisi exercitation ut.","registered":"Sunday, July 6, 2014 4:13 PM","latitude":"-70.298709","longitude":"-164.729062","tags":["sit","sint","culpa","tempor","duis"],"favoriteFruit":"apple"},{"_id":"59a7035c75fbbf78833a6c43","index":56,"guid":"ff49457c-793d-443c-ac86-7b917352212a","isActive":false,"balance":"$2,224.91","picture":"http://placehold.it/32x32","age":36,"eyeColor":"blue","name":{"first":"Carlson","last":"Boone"},"company":"INSOURCE","email":"carlson.boone@insource.me","phone":"+1 (894) 513-2192","address":"478 Walker Court, Trinway, South Dakota, 7897","about":"Irure sit laborum laboris sint dolore in. Labore reprehenderit proident ad exercitation nulla pariatur nostrud non dolore quis laborum sit mollit reprehenderit. Esse cillum irure reprehenderit fugiat aute est id laborum commodo fugiat nulla magna tempor minim. Non irure officia sint aute dolor consectetur. Eu est incididunt aliqua sint id. Eiusmod cillum esse eu cupidatat deserunt eu Lorem enim nisi fugiat non. Ullamco cillum velit ex aute aute irure ad esse officia sint magna ex ad.","registered":"Thursday, February 20, 2014 12:28 AM","latitude":"-67.923152","longitude":"150.385512","tags":["Lorem","qui","adipisicing","ex","sunt"],"favoriteFruit":"banana"},{"_id":"59a7035c2cf8d9e54a6439d5","index":57,"guid":"df0727f4-2681-4bfe-8353-1712ef5a7b86","isActive":true,"balance":"$2,717.06","picture":"http://placehold.it/32x32","age":33,"eyeColor":"blue","name":{"first":"Warren","last":"Tate"},"company":"PAWNAGRA","email":"warren.tate@pawnagra.us","phone":"+1 (855) 426-3132","address":"695 Jamison Lane, Kent, Vermont, 5411","about":"Exercitation dolor et amet do incididunt in occaecat. Esse deserunt et nisi esse tempor enim minim excepteur sint. Culpa esse ipsum duis minim. Exercitation mollit reprehenderit laborum commodo.","registered":"Wednesday, January 27, 2016 5:49 PM","latitude":"16.929183","longitude":"-162.313654","tags":["non","anim","tempor","est","laboris"],"favoriteFruit":"banana"},{"_id":"59a7035c7f1fd5e7b8d1018e","index":58,"guid":"b1ce4a04-3ec6-46ed-9232-172ef5be3080","isActive":false,"balance":"$1,462.40","picture":"http://placehold.it/32x32","age":28,"eyeColor":"blue","name":{"first":"Adeline","last":"Salinas"},"company":"TROPOLIS","email":"adeline.salinas@tropolis.tv","phone":"+1 (879) 591-2242","address":"906 Haring Street, Helen, Nebraska, 8880","about":"Consectetur ad ad eu elit ullamco aute cillum labore id in deserunt. Irure laborum duis elit incididunt laborum cillum duis aliqua consectetur commodo. Et ex consectetur voluptate sunt enim sit tempor sunt aliqua. Mollit sit voluptate duis culpa qui nulla. Mollit duis irure laboris consectetur labore magna Lorem incididunt do mollit.","registered":"Tuesday, September 29, 2015 6:14 PM","latitude":"57.034722","longitude":"-32.396938","tags":["deserunt","incididunt","consectetur","in","tempor"],"favoriteFruit":"apple"},{"_id":"59a7035cfc2501326316c206","index":59,"guid":"12800369-5ca4-4078-8969-9858d5390982","isActive":false,"balance":"$1,108.78","picture":"http://placehold.it/32x32","age":30,"eyeColor":"green","name":{"first":"Newton","last":"Singleton"},"company":"PLAYCE","email":"newton.singleton@playce.net","phone":"+1 (869) 527-3116","address":"373 Vanderbilt Avenue, Germanton, South Carolina, 2961","about":"Cillum ullamco incididunt excepteur duis aliqua laborum exercitation quis cillum nulla aute ut cupidatat. Anim irure laboris non aliquip tempor dolore ipsum. Fugiat ea velit Lorem incididunt ex.","registered":"Friday, February 12, 2016 12:42 PM","latitude":"-52.203091","longitude":"-159.820805","tags":["culpa","qui","amet","amet","quis"],"favoriteFruit":"banana"},{"_id":"59a7035c487c20261c897e35","index":60,"guid":"a49ba126-7e12-448b-b6c7-358122c8be09","isActive":true,"balance":"$3,466.32","picture":"http://placehold.it/32x32","age":27,"eyeColor":"blue","name":{"first":"Noel","last":"Carney"},"company":"BUGSALL","email":"noel.carney@bugsall.io","phone":"+1 (868) 532-3842","address":"784 Danforth Street, Websterville, Texas, 4199","about":"Excepteur culpa laboris esse quis quis elit aliquip. Sit commodo eu enim elit in ea. Labore magna mollit minim veniam sint aliquip sit dolor.","registered":"Friday, May 22, 2015 10:16 PM","latitude":"-71.199536","longitude":"55.775326","tags":["ex","elit","in","id","occaecat"],"favoriteFruit":"banana"},{"_id":"59a7035c06a9abb1922bf0ce","index":61,"guid":"c6a670d5-a5f8-427a-bbd0-0bee7c36b334","isActive":false,"balance":"$3,769.45","picture":"http://placehold.it/32x32","age":33,"eyeColor":"brown","name":{"first":"Patrick","last":"Guerrero"},"company":"SOLGAN","email":"patrick.guerrero@solgan.biz","phone":"+1 (901) 586-2395","address":"523 Louisiana Avenue, Hampstead, Florida, 7360","about":"Consectetur mollit elit sunt minim. Ea deserunt elit sint culpa magna magna sit. Tempor ut eu nisi mollit minim non aliquip nisi eiusmod pariatur ullamco. Adipisicing ad esse dolor ipsum.","registered":"Wednesday, May 28, 2014 9:41 PM","latitude":"-48.779034","longitude":"42.915054","tags":["nulla","aliquip","proident","et","aliquip"],"favoriteFruit":"banana"},{"_id":"59a7035cbc3a0c2b0a2ad1c4","index":62,"guid":"995d2615-e8a9-4fd0-89d0-4e9f3237c47f","isActive":true,"balance":"$2,673.93","picture":"http://placehold.it/32x32","age":40,"eyeColor":"blue","name":{"first":"Chelsea","last":"Wood"},"company":"TYPHONICA","email":"chelsea.wood@typhonica.ca","phone":"+1 (876) 413-2919","address":"611 Seigel Court, Shawmut, Louisiana, 3898","about":"Officia labore ad id cupidatat dolore non irure id ut sit excepteur magna ea. Sint velit et do excepteur incididunt est proident veniam sit exercitation enim sit. Esse tempor ea reprehenderit ullamco consequat dolore. Pariatur qui voluptate mollit occaecat nisi dolore est ad duis non. Fugiat exercitation quis pariatur mollit ipsum mollit reprehenderit nostrud sint eu nisi ullamco officia. Consectetur veniam incididunt minim aliqua magna duis occaecat.","registered":"Thursday, January 5, 2017 3:32 PM","latitude":"-69.891714","longitude":"-0.420051","tags":["aliquip","non","dolor","ex","Lorem"],"favoriteFruit":"apple"},{"_id":"59a7035c493471e65ae4ae1f","index":63,"guid":"2cccc299-0164-4301-98af-f3b29855a599","isActive":true,"balance":"$1,641.77","picture":"http://placehold.it/32x32","age":21,"eyeColor":"green","name":{"first":"Stacy","last":"Drake"},"company":"ENJOLA","email":"stacy.drake@enjola.name","phone":"+1 (894) 485-3245","address":"218 Boardwalk , Vaughn, New Mexico, 1904","about":"Fugiat duis Lorem exercitation veniam ullamco aute occaecat ullamco non Lorem. Ex officia sint culpa magna occaecat laborum proident do. Aliquip quis elit tempor ullamco aliqua proident sunt incididunt sit. Velit Lorem veniam consectetur cillum sit. Id occaecat et labore duis ipsum consectetur.","registered":"Wednesday, June 22, 2016 6:20 PM","latitude":"33.843736","longitude":"-51.883471","tags":["ullamco","nulla","laborum","aliquip","reprehenderit"],"favoriteFruit":"strawberry"},{"_id":"59a7035c5274723c7c54778e","index":64,"guid":"c550c3f1-9d23-449a-879b-caeecafbcca0","isActive":false,"balance":"$2,052.86","picture":"http://placehold.it/32x32","age":40,"eyeColor":"blue","name":{"first":"Bridgette","last":"Lindsay"},"company":"HIVEDOM","email":"bridgette.lindsay@hivedom.com","phone":"+1 (999) 591-2448","address":"268 Bay Avenue, Rosine, Northern Mariana Islands, 3239","about":"Ea do exercitation ad cupidatat. Commodo officia adipisicing culpa eiusmod. Sint aliquip et anim commodo dolor quis officia. Ullamco proident magna cillum mollit exercitation consequat fugiat. Incididunt culpa cupidatat amet eiusmod aute est proident officia elit non proident cillum elit occaecat. Veniam amet ad laborum ad aute id dolore sint ipsum consequat nostrud cillum.","registered":"Saturday, January 9, 2016 9:39 AM","latitude":"77.293657","longitude":"-167.06726","tags":["laborum","fugiat","tempor","nisi","adipisicing"],"favoriteFruit":"banana"},{"_id":"59a7035ca370378bfeaa38a5","index":65,"guid":"94c8d9a6-2e5a-40e9-a6e3-85e79b53b6ed","isActive":true,"balance":"$3,379.77","picture":"http://placehold.it/32x32","age":22,"eyeColor":"brown","name":{"first":"Lorena","last":"Eaton"},"company":"CEPRENE","email":"lorena.eaton@ceprene.co.uk","phone":"+1 (938) 403-2437","address":"283 Quentin Street, Enoree, Utah, 5172","about":"Cupidatat aliqua sint elit sint proident non occaecat elit aute ullamco consectetur in. Exercitation enim laboris irure do deserunt velit aliquip fugiat labore commodo aliquip laboris cupidatat. Occaecat esse minim enim ex fugiat tempor dolore cillum adipisicing qui laborum id nostrud sunt. Nisi laboris sint eiusmod id ipsum eu non velit.","registered":"Sunday, July 26, 2015 5:17 AM","latitude":"16.813018","longitude":"-72.052378","tags":["elit","labore","magna","in","voluptate"],"favoriteFruit":"apple"},{"_id":"59a7035c0ee5430ec8ec7d91","index":66,"guid":"8990fead-c907-47f0-80a5-c53049dffeeb","isActive":true,"balance":"$1,851.38","picture":"http://placehold.it/32x32","age":36,"eyeColor":"blue","name":{"first":"Herminia","last":"Daniels"},"company":"NIKUDA","email":"herminia.daniels@nikuda.info","phone":"+1 (956) 481-3195","address":"809 Neptune Avenue, Chestnut, Indiana, 819","about":"Ea commodo aute nulla commodo consectetur. Dolor duis anim amet voluptate eu elit est in. Aliqua veniam nostrud ad laborum officia anim dolor. Tempor excepteur occaecat eiusmod amet officia labore commodo Lorem nisi magna officia excepteur qui. Duis ad consectetur quis dolor sunt proident aliqua. Eu amet ea sint cupidatat culpa ea aliqua enim culpa veniam quis nulla aliquip.","registered":"Tuesday, July 11, 2017 7:35 AM","latitude":"47.247143","longitude":"-145.360494","tags":["cupidatat","magna","do","aliquip","ullamco"],"favoriteFruit":"strawberry"},{"_id":"59a7035c97657752e87ea50f","index":67,"guid":"e7c4b864-736b-4e83-a71c-b9593d392198","isActive":false,"balance":"$1,416.49","picture":"http://placehold.it/32x32","age":36,"eyeColor":"brown","name":{"first":"Nola","last":"Solis"},"company":"POLARAX","email":"nola.solis@polarax.org","phone":"+1 (974) 576-3054","address":"648 Noll Street, Felt, Tennessee, 4071","about":"Consequat non cupidatat quis elit sunt. Ad voluptate consequat labore id velit in. Nostrud quis commodo dolor eu dolor eiusmod sint sint dolore consectetur exercitation sit consequat ipsum. Veniam proident culpa id laborum dolor consectetur laborum adipisicing occaecat ullamco eu nisi id. Do quis duis velit ad aute aute dolor laborum aliqua cillum tempor. Labore ad occaecat amet aliquip eu id aute dolore in.","registered":"Saturday, June 21, 2014 8:46 AM","latitude":"66.266244","longitude":"-21.606844","tags":["reprehenderit","consectetur","non","veniam","esse"],"favoriteFruit":"banana"},{"_id":"59a7035ca90f3c48271f8556","index":68,"guid":"eaef8eff-d3bc-4be4-8356-3dfa414cca49","isActive":false,"balance":"$1,392.02","picture":"http://placehold.it/32x32","age":33,"eyeColor":"brown","name":{"first":"Leona","last":"Owens"},"company":"SPACEWAX","email":"leona.owens@spacewax.me","phone":"+1 (926) 433-2717","address":"760 Glenwood Road, Dowling, Mississippi, 7230","about":"Enim amet mollit eu duis Lorem. Irure officia nostrud id nostrud excepteur. Fugiat minim in incididunt nostrud sint deserunt sit qui commodo.","registered":"Monday, September 19, 2016 11:45 AM","latitude":"41.817328","longitude":"108.002872","tags":["minim","enim","consequat","nulla","excepteur"],"favoriteFruit":"banana"},{"_id":"59a7035cd3d6556665c80d6c","index":69,"guid":"eab03c09-6238-4b56-bbf5-3a70bb62dce2","isActive":true,"balance":"$3,539.53","picture":"http://placehold.it/32x32","age":24,"eyeColor":"blue","name":{"first":"Hobbs","last":"Jones"},"company":"EMOLTRA","email":"hobbs.jones@emoltra.us","phone":"+1 (963) 441-3365","address":"215 Whitwell Place, Richford, Ohio, 4608","about":"Sunt ullamco deserunt veniam ipsum amet proident duis. Veniam laboris Lorem minim in. Aliquip ipsum eu consectetur cupidatat amet sint aliqua nostrud excepteur tempor velit consectetur. Minim mollit non qui in laborum ad in aute. Consequat qui consequat enim officia laboris cupidatat culpa ullamco eu magna consequat cillum quis cillum. Laboris consequat et adipisicing eiusmod ex Lorem laboris excepteur do. Duis elit excepteur mollit id id occaecat eiusmod anim aliquip ex est non aliqua adipisicing.","registered":"Saturday, December 5, 2015 2:27 PM","latitude":"1.167543","longitude":"-127.155785","tags":["consectetur","reprehenderit","exercitation","consectetur","nisi"],"favoriteFruit":"apple"},{"_id":"59a7035c62d1feaa93ca4a3a","index":70,"guid":"346f6dcf-2913-4a02-b743-51b967cea03f","isActive":false,"balance":"$1,454.96","picture":"http://placehold.it/32x32","age":40,"eyeColor":"blue","name":{"first":"Summers","last":"Huff"},"company":"COMTRACT","email":"summers.huff@comtract.tv","phone":"+1 (966) 424-2354","address":"867 Willoughby Street, Dargan, New York, 6440","about":"Magna proident sunt cillum aliqua aute non et occaecat. Ad sit laboris sit deserunt officia ullamco reprehenderit fugiat id sunt. Quis nostrud mollit nostrud velit voluptate mollit.","registered":"Tuesday, March 14, 2017 4:29 AM","latitude":"38.996569","longitude":"-5.565663","tags":["veniam","ea","cupidatat","sunt","qui"],"favoriteFruit":"banana"},{"_id":"59a7035c3a02db49a4163774","index":71,"guid":"74aef096-4441-4094-9d56-2be53310a19a","isActive":true,"balance":"$3,786.73","picture":"http://placehold.it/32x32","age":39,"eyeColor":"green","name":{"first":"Wilkinson","last":"Howard"},"company":"MOTOVATE","email":"wilkinson.howard@motovate.net","phone":"+1 (954) 411-2468","address":"819 Hanson Place, Sisquoc, Maryland, 4699","about":"Cupidatat labore exercitation quis in tempor est id deserunt. Esse eu ex aute veniam officia aliqua minim ipsum. Sunt ipsum elit excepteur cupidatat qui commodo. Enim labore dolor eu ullamco laborum ad ut ut veniam labore non elit commodo enim. Magna laborum dolore minim adipisicing ullamco laboris commodo aliquip cupidatat consequat.","registered":"Friday, December 23, 2016 12:50 PM","latitude":"79.991901","longitude":"-110.683079","tags":["exercitation","quis","aliqua","aliqua","minim"],"favoriteFruit":"banana"},{"_id":"59a7035ca3df915eedd92aeb","index":72,"guid":"09f7ea7a-7033-4973-ba4f-7438d1e707ed","isActive":true,"balance":"$1,059.27","picture":"http://placehold.it/32x32","age":21,"eyeColor":"green","name":{"first":"Navarro","last":"Grant"},"company":"HAWKSTER","email":"navarro.grant@hawkster.io","phone":"+1 (947) 411-2315","address":"694 Boerum Place, Urie, Montana, 2584","about":"Lorem nostrud cillum nulla commodo officia. Irure aliqua irure ex in voluptate est Lorem labore eiusmod sunt non et consectetur. Laborum amet duis ullamco fugiat laboris do nisi sit. Eu fugiat nostrud non consequat. Reprehenderit nostrud laborum minim cillum magna enim consectetur incididunt laborum sunt incididunt dolore do. Nostrud nisi ea pariatur velit veniam veniam duis pariatur tempor aute. Velit laborum minim excepteur eu irure nulla excepteur incididunt.","registered":"Sunday, April 9, 2017 8:34 AM","latitude":"-66.519848","longitude":"48.685848","tags":["fugiat","labore","elit","laborum","minim"],"favoriteFruit":"banana"},{"_id":"59a7035c7b6ad28ac5fd4e73","index":73,"guid":"d1b37b5f-e453-4f3e-a94b-365359a7d1bc","isActive":true,"balance":"$1,640.35","picture":"http://placehold.it/32x32","age":27,"eyeColor":"blue","name":{"first":"Walton","last":"Henderson"},"company":"EVIDENDS","email":"walton.henderson@evidends.biz","phone":"+1 (871) 490-2002","address":"193 Barbey Street, Dunbar, New Jersey, 8593","about":"Exercitation enim eiusmod dolore proident nulla non. Incididunt Lorem do et ea minim esse labore. Eiusmod velit sit ullamco consequat. Ex et est et officia aliquip Lorem pariatur. Labore excepteur cillum qui commodo aute non incididunt velit consectetur sunt velit. Eu non qui ut quis.","registered":"Friday, September 25, 2015 5:06 PM","latitude":"28.063406","longitude":"-44.937807","tags":["Lorem","Lorem","enim","velit","enim"],"favoriteFruit":"strawberry"},{"_id":"59a7035c2832582a974c8806","index":74,"guid":"0ac54662-a5b7-48bd-abbd-6211f1345bd4","isActive":true,"balance":"$3,975.36","picture":"http://placehold.it/32x32","age":38,"eyeColor":"green","name":{"first":"Parks","last":"Good"},"company":"GEEKULAR","email":"parks.good@geekular.ca","phone":"+1 (822) 403-2275","address":"685 Monitor Street, Fowlerville, Kansas, 6486","about":"Enim culpa nisi nostrud est qui magna laborum aliquip irure duis nostrud nulla. Sit commodo excepteur amet nostrud esse mollit magna voluptate amet officia. Exercitation enim aliquip aute velit laboris. Laborum deserunt esse nulla minim occaecat sunt duis cillum esse sit velit. Esse ut pariatur anim anim eiusmod ea duis. Sint non irure nostrud labore id minim esse. Eu aliqua ex magna sunt excepteur commodo reprehenderit.","registered":"Monday, August 15, 2016 12:32 PM","latitude":"-34.737543","longitude":"-131.226158","tags":["officia","qui","esse","eu","ex"],"favoriteFruit":"banana"},{"_id":"59a7035c0829691744bbaaf7","index":75,"guid":"19d63c85-d2c0-4216-9b3e-50879765681a","isActive":false,"balance":"$3,833.80","picture":"http://placehold.it/32x32","age":33,"eyeColor":"blue","name":{"first":"Suzanne","last":"Arnold"},"company":"ACCRUEX","email":"suzanne.arnold@accruex.name","phone":"+1 (800) 412-2663","address":"623 Blake Avenue, Oretta, Delaware, 5458","about":"Irure proident incididunt in ut sint labore incididunt sint. Nulla nulla anim commodo mollit laborum. Aliqua reprehenderit do quis laboris non aliquip exercitation id veniam velit fugiat elit tempor. Anim veniam id cupidatat esse amet. Nisi pariatur amet pariatur tempor aliqua cupidatat dolore velit duis laborum. Magna proident exercitation aliqua dolore tempor proident voluptate in elit non.","registered":"Thursday, June 29, 2017 6:20 PM","latitude":"-67.201586","longitude":"1.39753","tags":["esse","non","aute","mollit","est"],"favoriteFruit":"banana"},{"_id":"59a7035c23c34fbce0dacb32","index":76,"guid":"0f2bf805-c5ac-4125-9f42-f912195e5de5","isActive":true,"balance":"$3,592.47","picture":"http://placehold.it/32x32","age":38,"eyeColor":"blue","name":{"first":"Robinson","last":"Travis"},"company":"OVIUM","email":"robinson.travis@ovium.com","phone":"+1 (979) 498-2934","address":"275 Irwin Street, Snowville, Connecticut, 5995","about":"Deserunt adipisicing Lorem exercitation cupidatat ut laborum consectetur. Sunt veniam do ut reprehenderit aliqua do amet ad aute incididunt consectetur pariatur. Pariatur exercitation ad tempor dolore proident sint. Cillum exercitation elit dolor consequat anim irure commodo ex adipisicing excepteur nulla sunt. Ad consequat veniam id aliquip ea ad in minim quis exercitation aliqua ea ex. Aliqua consequat tempor officia ullamco cillum elit excepteur sit tempor ex minim occaecat. Aliquip aliqua laboris occaecat et sint ut ullamco fugiat occaecat est sint eu ut aute.","registered":"Monday, April 10, 2017 4:08 PM","latitude":"64.239375","longitude":"137.324483","tags":["aliquip","pariatur","proident","nostrud","deserunt"],"favoriteFruit":"strawberry"},{"_id":"59a7035c1972243aafc69a04","index":77,"guid":"2550fe7c-1d3c-4068-aa7e-9c22a1951f5c","isActive":false,"balance":"$3,685.33","picture":"http://placehold.it/32x32","age":23,"eyeColor":"blue","name":{"first":"Katrina","last":"Wallace"},"company":"EARBANG","email":"katrina.wallace@earbang.co.uk","phone":"+1 (954) 534-2751","address":"950 Brighton Avenue, Roderfield, Washington, 4701","about":"Duis commodo ipsum mollit qui esse. In id ad velit consectetur enim dolore veniam consequat. Quis anim nostrud aute laboris occaecat consequat aliqua nisi. Incididunt laboris velit esse culpa velit quis irure consectetur. Sint Lorem aliquip do laborum consequat officia cillum est labore. Tempor pariatur aliqua duis ex ad eu.","registered":"Monday, March 16, 2015 11:14 PM","latitude":"18.70309","longitude":"-142.809837","tags":["proident","irure","nisi","sunt","labore"],"favoriteFruit":"strawberry"},{"_id":"59a7035cb658685639994e87","index":78,"guid":"058ce69e-d0e7-4cb4-99a4-be9c26701a52","isActive":false,"balance":"$1,697.78","picture":"http://placehold.it/32x32","age":25,"eyeColor":"brown","name":{"first":"Fuentes","last":"Mercado"},"company":"ARCHITAX","email":"fuentes.mercado@architax.info","phone":"+1 (959) 576-3132","address":"353 Mill Street, Cashtown, Georgia, 1768","about":"Reprehenderit dolor cupidatat aute do duis. Nostrud mollit laborum sint dolor veniam voluptate occaecat amet ad. Magna non reprehenderit ad quis ipsum Lorem irure ad do culpa sunt. Qui elit nisi reprehenderit aliqua eu minim velit reprehenderit. Enim exercitation sunt aliquip veniam ea deserunt Lorem veniam ex. Quis ut et consequat amet enim irure mollit ea minim eiusmod consequat commodo excepteur. Nulla adipisicing in quis sunt excepteur eiusmod id.","registered":"Monday, May 19, 2014 4:23 AM","latitude":"-0.578208","longitude":"70.90583","tags":["non","nisi","culpa","id","nostrud"],"favoriteFruit":"banana"},{"_id":"59a7035c4492f07cdb06f3bc","index":79,"guid":"d1ff2173-63b3-4be7-9de8-80374fe05409","isActive":false,"balance":"$3,403.33","picture":"http://placehold.it/32x32","age":33,"eyeColor":"blue","name":{"first":"Aurora","last":"Blake"},"company":"ISOPLEX","email":"aurora.blake@isoplex.org","phone":"+1 (900) 481-2991","address":"364 Tillary Street, Tetherow, Rhode Island, 8261","about":"Amet ut do enim quis mollit commodo enim adipisicing dolor ad culpa nulla culpa. Amet adipisicing reprehenderit labore consequat. Dolore ut Lorem non deserunt irure aute nisi non irure occaecat. Anim ullamco enim enim ipsum occaecat culpa ullamco fugiat ullamco tempor. Ea dolor mollit sunt ipsum et amet laboris. Culpa proident laborum aliquip officia laboris sit cillum. Laborum ex velit culpa velit.","registered":"Friday, October 31, 2014 12:32 PM","latitude":"-71.77671","longitude":"101.056755","tags":["officia","eu","excepteur","et","incididunt"],"favoriteFruit":"strawberry"},{"_id":"59a7035c626202551c0687cb","index":80,"guid":"e74a4405-84aa-4b67-809e-15f6b56ae501","isActive":false,"balance":"$1,388.99","picture":"http://placehold.it/32x32","age":25,"eyeColor":"blue","name":{"first":"Joanne","last":"Oconnor"},"company":"DARWINIUM","email":"joanne.oconnor@darwinium.me","phone":"+1 (943) 410-3599","address":"117 Bragg Street, Temperanceville, Oklahoma, 4977","about":"Magna ad aliquip excepteur id. Duis enim sit adipisicing est esse labore reprehenderit minim. Reprehenderit adipisicing deserunt culpa excepteur mollit elit culpa duis anim labore cupidatat dolor. Labore nisi reprehenderit irure mollit occaecat culpa. Pariatur dolor pariatur tempor commodo consectetur anim magna commodo enim ut fugiat. Labore amet cupidatat officia veniam irure elit proident duis cupidatat reprehenderit eu. Quis commodo fugiat reprehenderit eu adipisicing amet officia.","registered":"Sunday, November 27, 2016 5:43 AM","latitude":"87.333345","longitude":"-6.03891","tags":["amet","ut","tempor","deserunt","magna"],"favoriteFruit":"apple"},{"_id":"59a7035c1a455ae94ad5f555","index":81,"guid":"1545dcb4-fca2-4991-94af-53ccce60f81a","isActive":false,"balance":"$3,936.24","picture":"http://placehold.it/32x32","age":29,"eyeColor":"green","name":{"first":"Sanders","last":"Parsons"},"company":"XUMONK","email":"sanders.parsons@xumonk.us","phone":"+1 (836) 504-3288","address":"162 Prospect Avenue, Tecolotito, North Carolina, 203","about":"Ad nisi sint aliqua tempor deserunt adipisicing ex magna excepteur adipisicing. Commodo sunt eu nostrud reprehenderit dolor nulla nisi exercitation non. Occaecat deserunt eiusmod eu Lorem magna sint consequat ex nulla occaecat magna ipsum ullamco cillum. Deserunt proident non dolor adipisicing culpa ad deserunt exercitation adipisicing excepteur amet ad ex dolor. Tempor ullamco nulla nisi dolore officia aute excepteur esse ullamco. Eu sint irure commodo fugiat consequat aliquip est.","registered":"Friday, March 25, 2016 5:08 PM","latitude":"4.02693","longitude":"-26.79332","tags":["ipsum","et","elit","amet","ut"],"favoriteFruit":"strawberry"},{"_id":"59a7035c0deb19988f17aa77","index":82,"guid":"67d68126-174d-41bb-ae38-77794218d70a","isActive":true,"balance":"$2,352.55","picture":"http://placehold.it/32x32","age":28,"eyeColor":"green","name":{"first":"Little","last":"May"},"company":"APPLIDECK","email":"little.may@applideck.tv","phone":"+1 (939) 567-3305","address":"367 Crawford Avenue, Eureka, Maine, 5784","about":"Dolore laboris consequat duis deserunt voluptate pariatur enim commodo eiusmod labore labore duis. Qui labore aliquip et quis. Aliqua laboris cupidatat in do qui duis quis. Consectetur laborum occaecat ad eiusmod consequat irure amet culpa. Aute magna cillum deserunt sunt enim aliquip dolore dolor tempor nostrud. Lorem duis elit esse commodo aliqua nulla. Non aliquip occaecat cupidatat culpa.","registered":"Friday, October 28, 2016 3:54 AM","latitude":"61.075581","longitude":"51.153595","tags":["commodo","sunt","sunt","dolore","consectetur"],"favoriteFruit":"apple"},{"_id":"59a7035ca83b8ad3adcd08ce","index":83,"guid":"c203159a-808b-4942-b9f6-153f0519f54e","isActive":false,"balance":"$3,183.36","picture":"http://placehold.it/32x32","age":38,"eyeColor":"brown","name":{"first":"Brandi","last":"Navarro"},"company":"MANTRIX","email":"brandi.navarro@mantrix.net","phone":"+1 (821) 507-2658","address":"926 Verona Place, Longoria, Pennsylvania, 9051","about":"Non qui anim et officia eiusmod cupidatat veniam cillum enim sint ad. Excepteur sit cillum culpa veniam consectetur aliqua dolore dolor sint ut. Cupidatat sint adipisicing aute nostrud enim amet velit. Culpa et minim magna commodo aliqua labore laboris nisi anim qui.","registered":"Tuesday, May 17, 2016 2:47 PM","latitude":"-75.956827","longitude":"10.213558","tags":["sint","pariatur","nulla","duis","dolor"],"favoriteFruit":"strawberry"},{"_id":"59a7035cbe29a6da748090b7","index":84,"guid":"af5c99e9-77ce-4df2-b923-b41920d7f00d","isActive":true,"balance":"$1,793.30","picture":"http://placehold.it/32x32","age":39,"eyeColor":"brown","name":{"first":"Rosie","last":"Rowland"},"company":"GLUKGLUK","email":"rosie.rowland@glukgluk.io","phone":"+1 (997) 548-2274","address":"511 Benson Avenue, Taft, North Dakota, 7668","about":"Reprehenderit aliqua sit duis labore esse cupidatat quis incididunt commodo ea culpa. Ut tempor adipisicing anim sunt qui esse cupidatat aute aliqua minim. In est minim proident ipsum dolor ex. Pariatur commodo culpa incididunt enim mollit amet ea. Laborum nulla ex deserunt aute id aute. Irure exercitation proident ullamco veniam adipisicing id labore sit incididunt sint est. Consectetur amet non nostrud culpa mollit reprehenderit proident est consectetur minim aliquip elit proident Lorem.","registered":"Saturday, September 26, 2015 6:00 AM","latitude":"62.537599","longitude":"-117.981601","tags":["consectetur","exercitation","excepteur","esse","veniam"],"favoriteFruit":"banana"},{"_id":"59a7035ce366d83e9c497b63","index":85,"guid":"00cfd94e-5dcc-4872-b8db-10ed9ebfe1b1","isActive":true,"balance":"$2,245.84","picture":"http://placehold.it/32x32","age":29,"eyeColor":"brown","name":{"first":"Rich","last":"Ortiz"},"company":"VINCH","email":"rich.ortiz@vinch.biz","phone":"+1 (886) 509-2030","address":"667 Lenox Road, Nelson, Iowa, 1112","about":"Eiusmod pariatur voluptate fugiat in aliqua quis voluptate ipsum proident. Ullamco elit occaecat sint ipsum mollit esse incididunt quis incididunt. Incididunt pariatur incididunt ut reprehenderit aute elit veniam officia enim. Incididunt incididunt ex labore aliquip excepteur id ipsum incididunt non mollit occaecat. Nostrud ut laboris ea officia commodo esse consectetur aute ipsum anim.","registered":"Friday, January 22, 2016 3:46 AM","latitude":"-56.524315","longitude":"-13.796753","tags":["consectetur","aliquip","voluptate","reprehenderit","minim"],"favoriteFruit":"apple"},{"_id":"59a7035ce64e5cf2cb2c5dbd","index":86,"guid":"956d4ae4-59aa-439f-8496-ab9cf2db8401","isActive":false,"balance":"$3,269.51","picture":"http://placehold.it/32x32","age":33,"eyeColor":"brown","name":{"first":"Lolita","last":"Pitts"},"company":"CEDWARD","email":"lolita.pitts@cedward.ca","phone":"+1 (962) 548-2756","address":"575 Halleck Street, Warsaw, Marshall Islands, 5786","about":"Ex aute et dolore magna mollit quis. Deserunt esse exercitation ea id ullamco occaecat occaecat mollit magna fugiat sint. Elit voluptate consequat occaecat duis labore ut. Minim adipisicing do sunt aliquip ipsum nulla.","registered":"Thursday, July 7, 2016 8:23 PM","latitude":"72.65006","longitude":"130.043692","tags":["enim","id","id","commodo","id"],"favoriteFruit":"apple"},{"_id":"59a7035c9c4570394ffa599d","index":87,"guid":"736241d1-243a-423a-a8d4-eebe18815840","isActive":true,"balance":"$3,619.45","picture":"http://placehold.it/32x32","age":20,"eyeColor":"brown","name":{"first":"Head","last":"Hodge"},"company":"OPTYK","email":"head.hodge@optyk.name","phone":"+1 (968) 530-3840","address":"714 Adler Place, Greenwich, Alaska, 6463","about":"Eu nisi aute et irure aliquip. Ullamco fugiat occaecat adipisicing consequat do laboris id veniam proident est. Elit esse aliquip irure pariatur Lorem ipsum duis ad ad qui enim culpa duis voluptate. Mollit ut sit nulla aliquip eu commodo eiusmod dolore ad dolore culpa ipsum nostrud sunt. Dolor nostrud labore culpa irure mollit dolore occaecat magna incididunt culpa sunt anim officia. Excepteur esse eiusmod culpa incididunt et qui mollit sint tempor. Enim quis ipsum anim commodo reprehenderit ut.","registered":"Tuesday, January 21, 2014 1:18 PM","latitude":"46.89198","longitude":"30.630046","tags":["ex","nisi","sit","nisi","ullamco"],"favoriteFruit":"banana"},{"_id":"59a7035c22d650f8dc32b276","index":88,"guid":"7835601e-6c62-4f23-845f-f37b23b4bfa5","isActive":true,"balance":"$1,335.42","picture":"http://placehold.it/32x32","age":24,"eyeColor":"green","name":{"first":"Yvette","last":"Lee"},"company":"FUELWORKS","email":"yvette.lee@fuelworks.com","phone":"+1 (893) 483-2423","address":"359 Logan Street, Inkerman, Arkansas, 8607","about":"Commodo nisi eu fugiat quis minim tempor amet officia aliqua velit mollit pariatur sit. Et enim anim eu ipsum et adipisicing culpa. Ipsum reprehenderit dolor amet dolor nulla culpa Lorem dolore aliqua et occaecat laborum nulla. Dolor labore occaecat mollit et ipsum in enim.","registered":"Sunday, August 30, 2015 3:43 AM","latitude":"-1.177192","longitude":"-176.072586","tags":["deserunt","deserunt","ullamco","nisi","et"],"favoriteFruit":"banana"},{"_id":"59a7035c845ab1f46cc313f3","index":89,"guid":"90a77242-736f-43b2-a926-f5776cf5a0fc","isActive":true,"balance":"$2,413.09","picture":"http://placehold.it/32x32","age":24,"eyeColor":"blue","name":{"first":"Queen","last":"Bush"},"company":"CODAX","email":"queen.bush@codax.co.uk","phone":"+1 (887) 408-2294","address":"652 Livonia Avenue, Springdale, Virginia, 8288","about":"Officia cupidatat proident consectetur officia tempor velit excepteur mollit et irure in mollit. Proident officia cupidatat eiusmod et aliqua fugiat Lorem ipsum mollit. Proident adipisicing proident velit occaecat labore mollit et elit mollit labore.","registered":"Monday, April 11, 2016 3:33 PM","latitude":"40.174924","longitude":"-169.264042","tags":["adipisicing","irure","excepteur","labore","fugiat"],"favoriteFruit":"strawberry"},{"_id":"59a7035cf4047f065c27810d","index":90,"guid":"e9bbb717-cacf-4734-8d21-c1983a4fb19d","isActive":false,"balance":"$1,180.56","picture":"http://placehold.it/32x32","age":37,"eyeColor":"blue","name":{"first":"Shanna","last":"Gay"},"company":"CAPSCREEN","email":"shanna.gay@capscreen.info","phone":"+1 (867) 526-2674","address":"809 Elmwood Avenue, Southview, Arizona, 3898","about":"Anim minim in sint culpa fugiat ad do. Ex fugiat laborum ullamco mollit irure quis in culpa in veniam aliquip irure mollit. Occaecat sint dolor in do labore. Proident mollit consequat pariatur labore laboris nulla incididunt duis proident. Veniam dolore in esse non.","registered":"Wednesday, November 9, 2016 3:10 AM","latitude":"27.646782","longitude":"-151.385329","tags":["labore","id","sint","non","nisi"],"favoriteFruit":"banana"},{"_id":"59a7035c2fb8999bcafecdc2","index":91,"guid":"12c9dc32-2d6b-4973-8651-d6188a7dabc8","isActive":false,"balance":"$3,424.83","picture":"http://placehold.it/32x32","age":34,"eyeColor":"blue","name":{"first":"Ella","last":"Carpenter"},"company":"ZENTIX","email":"ella.carpenter@zentix.org","phone":"+1 (975) 408-2611","address":"574 Radde Place, Beaverdale, Guam, 7123","about":"Veniam minim laborum eiusmod laborum esse dolor ullamco. Consequat mollit anim sit aliqua exercitation. Labore minim qui et ut deserunt ex nisi aliqua nostrud ad tempor commodo duis. Tempor duis nisi eu ullamco voluptate occaecat cillum. Cupidatat occaecat exercitation pariatur non non aliqua voluptate fugiat laborum elit. Est fugiat nostrud eu in cupidatat consectetur ad Lorem culpa est. Laborum officia voluptate in aliqua anim excepteur est et.","registered":"Friday, March 11, 2016 8:58 AM","latitude":"2.273755","longitude":"-88.510162","tags":["velit","aliqua","consequat","est","dolor"],"favoriteFruit":"strawberry"},{"_id":"59a7035c2f40c10c920c6b13","index":92,"guid":"ffb19003-45da-4d37-a67e-bcba3ab853b3","isActive":true,"balance":"$3,553.34","picture":"http://placehold.it/32x32","age":29,"eyeColor":"green","name":{"first":"Dominguez","last":"Andrews"},"company":"BITENDREX","email":"dominguez.andrews@bitendrex.me","phone":"+1 (948) 455-2358","address":"859 Lombardy Street, Innsbrook, Oregon, 1038","about":"Laborum sunt laboris dolor nulla labore et sint eiusmod velit reprehenderit velit exercitation sunt magna. Enim sunt magna nostrud consectetur deserunt nostrud est commodo. Fugiat sint nisi qui voluptate. Mollit ullamco id ad aute commodo pariatur. Ut quis id elit Lorem veniam ullamco tempor dolor commodo. Occaecat fugiat et consectetur amet do eiusmod et laboris eiusmod commodo tempor ipsum Lorem. Labore Lorem est do minim ad voluptate velit.","registered":"Friday, September 23, 2016 1:49 PM","latitude":"41.049962","longitude":"82.866048","tags":["officia","esse","et","laborum","adipisicing"],"favoriteFruit":"banana"},{"_id":"59a7035c7693669d4a2341fc","index":93,"guid":"fe2cbad4-40e5-45a9-afc9-dbdfbb39c5e1","isActive":false,"balance":"$1,712.21","picture":"http://placehold.it/32x32","age":21,"eyeColor":"brown","name":{"first":"Mcdonald","last":"Spence"},"company":"RUGSTARS","email":"mcdonald.spence@rugstars.us","phone":"+1 (988) 547-3230","address":"868 Baycliff Terrace, Lloyd, Wyoming, 485","about":"Do irure eu duis velit mollit ullamco commodo. Non excepteur enim consequat esse reprehenderit veniam dolore. Pariatur do laboris est proident adipisicing nisi deserunt cupidatat in id et nisi id. Enim excepteur tempor anim ad esse anim ullamco quis nisi proident mollit aute ipsum.","registered":"Sunday, June 4, 2017 2:42 AM","latitude":"18.376296","longitude":"-146.83597","tags":["ex","duis","qui","esse","voluptate"],"favoriteFruit":"strawberry"},{"_id":"59a7035c4caf37e13a927434","index":94,"guid":"e20016f9-9f1a-41df-828e-def56cf7ac3a","isActive":false,"balance":"$1,453.58","picture":"http://placehold.it/32x32","age":33,"eyeColor":"blue","name":{"first":"Foster","last":"Dennis"},"company":"REMOTION","email":"foster.dennis@remotion.tv","phone":"+1 (866) 535-3792","address":"691 Louisa Street, Cecilia, Hawaii, 2862","about":"Officia eiusmod consectetur irure amet et esse pariatur non aliquip do cillum. Eu anim ex velit non esse. Fugiat minim consequat pariatur exercitation laborum Lorem.","registered":"Saturday, November 1, 2014 11:04 AM","latitude":"59.797693","longitude":"121.515418","tags":["laboris","ullamco","excepteur","exercitation","sunt"],"favoriteFruit":"apple"},{"_id":"59a7035cb37d952c09b1db05","index":95,"guid":"bea34c38-52c6-43c8-9ef1-553c6881a460","isActive":true,"balance":"$3,823.29","picture":"http://placehold.it/32x32","age":34,"eyeColor":"green","name":{"first":"Virgie","last":"Pearson"},"company":"ORGANICA","email":"virgie.pearson@organica.net","phone":"+1 (904) 555-2662","address":"265 Bayview Avenue, Hillsboro, Wisconsin, 1774","about":"Mollit officia laboris et esse anim Lorem commodo. Ex magna commodo elit occaecat quis dolor eu pariatur. Velit officia mollit ad esse pariatur fugiat anim. Ea incididunt tempor in mollit consectetur sit amet officia esse aute et. Duis qui fugiat enim occaecat est irure aliqua officia.","registered":"Thursday, August 28, 2014 2:19 PM","latitude":"48.435984","longitude":"39.085544","tags":["ipsum","quis","non","sit","quis"],"favoriteFruit":"banana"},{"_id":"59a7035c55ec65f65e251a32","index":96,"guid":"b32cf788-ddc2-433f-986e-74112c39584f","isActive":true,"balance":"$1,794.43","picture":"http://placehold.it/32x32","age":40,"eyeColor":"blue","name":{"first":"Arlene","last":"Leon"},"company":"DUOFLEX","email":"arlene.leon@duoflex.io","phone":"+1 (927) 496-3663","address":"113 Fillmore Avenue, Enetai, Alabama, 4366","about":"Dolor magna tempor eiusmod consectetur irure officia culpa aute cupidatat. Et et veniam tempor fugiat aute excepteur aliquip laborum culpa nulla nostrud. Aute quis eu mollit do non ut amet. Aliquip non aliqua eu fugiat aliqua sunt ut elit consequat magna aliquip. Ad culpa eu fugiat occaecat culpa cupidatat incididunt excepteur.","registered":"Sunday, March 29, 2015 4:05 AM","latitude":"-26.602809","longitude":"146.305625","tags":["proident","sit","cillum","duis","veniam"],"favoriteFruit":"banana"},{"_id":"59a7035c8cbdfccd78c807a2","index":97,"guid":"628d3858-1f68-49e2-9924-8302d0c48afd","isActive":false,"balance":"$2,082.32","picture":"http://placehold.it/32x32","age":26,"eyeColor":"blue","name":{"first":"Kristen","last":"Holman"},"company":"COLUMELLA","email":"kristen.holman@columella.biz","phone":"+1 (885) 443-2216","address":"220 Guernsey Street, Bergoo, Michigan, 5982","about":"Sint Lorem minim ex nostrud amet in. Sunt dolore consequat minim sunt quis nostrud ut. Magna occaecat Lorem pariatur ipsum amet non eiusmod cupidatat deserunt magna sit. Exercitation eiusmod magna fugiat officia in sint elit reprehenderit laboris aliquip mollit aliquip. Cupidatat veniam sint amet non consectetur reprehenderit ut eiusmod elit et ut. Dolor reprehenderit duis ad sit velit est commodo.","registered":"Tuesday, June 6, 2017 5:33 AM","latitude":"-2.307265","longitude":"-82.751171","tags":["consectetur","consequat","ex","exercitation","elit"],"favoriteFruit":"apple"},{"_id":"59a7035cf9eca03873bb57a0","index":98,"guid":"9c1b37ef-f431-44c7-bcb8-fc47fe923cb9","isActive":true,"balance":"$1,761.63","picture":"http://placehold.it/32x32","age":27,"eyeColor":"green","name":{"first":"Eliza","last":"Phillips"},"company":"BLANET","email":"eliza.phillips@blanet.ca","phone":"+1 (978) 577-2073","address":"541 Pulaski Street, Cartwright, West Virginia, 2342","about":"Lorem pariatur nulla occaecat cupidatat reprehenderit exercitation do officia. Occaecat elit in ut dolor mollit proident proident est exercitation reprehenderit tempor nulla aute irure. Culpa id eu magna elit ipsum cillum esse est amet sit. Esse elit reprehenderit duis ipsum nostrud laboris ex consequat culpa enim elit consectetur laborum cillum.","registered":"Monday, February 6, 2017 5:47 PM","latitude":"-45.258264","longitude":"179.218865","tags":["cupidatat","qui","cupidatat","ex","ullamco"],"favoriteFruit":"banana"},{"_id":"59a7035cd4a7afcd642db334","index":99,"guid":"80f5af6a-f72f-4b5c-8406-1a15385a4335","isActive":false,"balance":"$1,014.12","picture":"http://placehold.it/32x32","age":20,"eyeColor":"blue","name":{"first":"Carissa","last":"Sweeney"},"company":"DANCERITY","email":"carissa.sweeney@dancerity.name","phone":"+1 (919) 424-2419","address":"122 Ferris Street, Trexlertown, Nevada, 1930","about":"Tempor nostrud Lorem officia eiusmod velit. Fugiat deserunt do ex dolore aliquip eu qui eiusmod ipsum. Occaecat aliquip nulla occaecat ea sit culpa aliqua ullamco. Reprehenderit elit ullamco sint laboris eu elit labore ut id laborum. Sit elit sit velit commodo dolore nostrud laboris exercitation minim. Deserunt quis exercitation ullamco est sunt.","registered":"Tuesday, March 10, 2015 4:10 PM","latitude":"65.234266","longitude":"156.854022","tags":["duis","ad","ad","commodo","esse"],"favoriteFruit":"strawberry"}]`)})),is,G,K,q,J,Y,X,Z,as,Q,$,os;e((()=>{o(),ts(),rs(),is={title:`Components/CosmozOmnitable`,component:`cosmoz-omnitable`,parameters:{docs:{description:{component:`A data table component with sorting, filtering, grouping.`}}}},G=e=>n`
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
                .data=${ns}
                hash-param=${e.hashParam||``}
                sort-on=${e.sortOn||``}
                group-on=${e.groupOn||``}
                ?descending=${e.descending}
                ?group-on-descending=${e.groupOnDescending}
                ?hide-select-all=${e.hideSelectAll}
                settings-id=${e.settingsId||``}
                ?no-local=${e.noLocal}
                ?no-local-sort=${e.noLocalSort}
                ?no-local-filter=${e.noLocalFilter}
                ?disabled-filtering=${e.disabledFiltering}
                ?loading=${e.loading}
                mini-breakpoint=${e.miniBreakpoint||`768px`}
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
    `,K=G.bind({}),K.args={},q=G.bind({}),q.args={sortOn:`company`,descending:!1},J=G.bind({}),J.args={groupOn:`eyeColor`,groupOnDescending:!1},Y=G.bind({}),Y.args={loading:!0},X=G.bind({}),X.args={hideSelectAll:!0},Z=G.bind({}),Z.args={disabledFiltering:!0},as=e=>n`
        <style>
            cosmoz-omnitable-item-row {
                border-bottom: 1px solid #e1e2e5;
            }
            cosmoz-omnitable-header-row {
                border-bottom: 1px solid #e1e2e5;
            }
        </style>
        <cosmoz-omnitable
            .data=${ns}
            ?inline=${!0}
            hash-param=${e.hashParam||``}
            sort-on=${e.sortOn||``}
            group-on=${e.groupOn||``}
            ?descending=${e.descending}
            ?group-on-descending=${e.groupOnDescending}
            ?hide-select-all=${e.hideSelectAll}
            settings-id=${e.settingsId||``}
            ?no-local=${e.noLocal}
            ?no-local-sort=${e.noLocalSort}
            ?no-local-filter=${e.noLocalFilter}
            ?disabled-filtering=${e.disabledFiltering}
            ?loading=${e.loading}
            mini-breakpoint=${e.miniBreakpoint||`768px`}
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
    `,Q=as.bind({}),Q.args={},Q.parameters={docs:{description:{story:`Inline mode: the omnitable expands to show all rows without internal scrolling. The page itself scrolls instead.`}}},$=as.bind({}),$.args={disabledFiltering:!0},$.parameters={docs:{description:{story:`Inline mode with disabled filtering, suitable for search results where all rows are shown without internal scrolling.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`args => {
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
                ?disabled-filtering=\${args.disabledFiltering}
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`args => {
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
                ?disabled-filtering=\${args.disabledFiltering}
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`args => {
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
                ?disabled-filtering=\${args.disabledFiltering}
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`args => {
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
                ?disabled-filtering=\${args.disabledFiltering}
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`args => {
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
                ?disabled-filtering=\${args.disabledFiltering}
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`args => {
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
                ?disabled-filtering=\${args.disabledFiltering}
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`args => {
  return html\`
        <style>
            cosmoz-omnitable-item-row {
                border-bottom: 1px solid #e1e2e5;
            }
            cosmoz-omnitable-header-row {
                border-bottom: 1px solid #e1e2e5;
            }
        </style>
        <cosmoz-omnitable
            .data=\${demoData}
            ?inline=\${true}
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
            ?disabled-filtering=\${args.disabledFiltering}
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
    \`;
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`args => {
  return html\`
        <style>
            cosmoz-omnitable-item-row {
                border-bottom: 1px solid #e1e2e5;
            }
            cosmoz-omnitable-header-row {
                border-bottom: 1px solid #e1e2e5;
            }
        </style>
        <cosmoz-omnitable
            .data=\${demoData}
            ?inline=\${true}
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
            ?disabled-filtering=\${args.disabledFiltering}
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
    \`;
}`,...$.parameters?.docs?.source}}},os=[`Default`,`Sorting`,`Grouping`,`Loading`,`HideSelectAll`,`DisabledFiltering`,`Inline`,`InlineDisabledFiltering`]}))();export{K as Default,Z as DisabledFiltering,J as Grouping,X as HideSelectAll,Q as Inline,$ as InlineDisabledFiltering,Y as Loading,q as Sorting,os as __namedExportsOrder,is as default};