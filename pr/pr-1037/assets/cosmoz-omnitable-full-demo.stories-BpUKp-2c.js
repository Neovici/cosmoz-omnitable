import{i as e}from"./preload-helper-CT_b8DTk.js";import{ct as t,dt as n,ft as r,lt as i,n as a,t as o}from"./iframe-BwOGSBeQ.js";import{$ as s,A as c,B as l,Bt as u,C as d,Ct as f,D as p,Dt as m,E as h,Et as g,F as _,G as v,H as y,Ht as b,I as ee,It as x,Kt as S,L as te,M as ne,N as re,Nt as C,O as ie,Ot as ae,P as oe,Pt as se,Q as ce,Qt as le,R as w,Rt as ue,S as T,T as de,Tt as fe,V as pe,W as me,Wt as he,X as ge,Xt as _e,Y as E,Yt as ve,Z as ye,_ as be,_t as xe,a as Se,an as Ce,at as D,b as we,bt as Te,c as Ee,ct as De,d as Oe,dt as O,en as ke,et as Ae,f as je,ft as Me,g as Ne,gt as Pe,h as Fe,ht as Ie,in as Le,it as k,j as Re,jt as ze,k as Be,l as Ve,lt as He,mt as Ue,n as We,nn as A,nt as Ge,o as Ke,ot as qe,p as Je,pt as Ye,q as Xe,qt as Ze,r as Qe,rn as j,rt as $e,s as et,st as tt,t as nt,u as rt,ut as M,v as it,vt as at,w as ot,wt as st,x as ct,xt as lt,y as N,yt as ut,z as dt}from"./dist-DoYsi8oS.js";var ft,pt=e((()=>{g(),ft=()=>n`<style>
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
</style>`,customElements.define(`cz-spinner`,m(ft))})),mt,ht,gt=e((()=>{v(),g(),mt=E`
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
`,ht=()=>n`
	<style>
		${mt}
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
`,customElements.define(`cosmoz-clear-button`,m(ht))})),P,_t,vt,yt,bt,F,I=e((()=>{O(),P=({valuePath:e},t)=>M(t,e),_t=P,vt=P,yt=({valuePath:e},t)=>n=>{let r=M(n,e);return r==null?!1:r.toString().toLowerCase().trim().includes(t.toLowerCase().trim())},bt=(e,t)=>t===``||t==null?null:t,F=e=>class extends e{static get properties(){return{isOmnitableColumn:{type:Boolean,value:!0},title:{type:String},valuePath:{type:String,notify:!0},values:{type:Array,notify:!0},filter:{type:Object},noLocalFilter:{type:Boolean},disabled:{type:Boolean,value:!1,notify:!0},editable:{type:Boolean,notify:!0},loading:{type:Boolean,value:!1,notify:!0},externalValues:{type:Boolean,value:!1,notify:!0},name:{type:String},sortOn:{type:String},groupOn:{type:String},noSort:{type:Boolean,value:!1},disabledFiltering:{type:Boolean,value:!1},width:{type:String,value:`75px`},minWidth:{type:String,value:`40px`},flex:{type:String,value:`1`},cellClass:{type:String,value:`default-cell`},headerCellClass:{type:String,value:`default-header-cell`},priority:{type:Number,value:0},hidden:{type:Boolean,notify:!0},preferredDropdownHorizontalAlign:{type:String,value:`right`},renderHeader:{type:Function},renderCell:{type:Function},renderEditCell:{type:Function},renderGroup:{type:Function},mini:{type:Number,value:null},renderMini:{type:Function}}}static get observers(){return[`notifyFilterChange(filter)`]}notifyFilterChange(e){this.__ownChange||this.dispatchEvent(new CustomEvent(`legacy-filter-changed`,{detail:{name:this.name,state:this.legacyFilterToState(e)},bubbles:!0}))}legacyFilterToState(e){return{filter:e}}getFilterFn(){}getString(e,t){return P(e,t)}toXlsxValue(e,t){return _t(e,t)}cellTitleFn(e,t){return this.getString(e,t)}headerTitleFn(e){return e.title}serializeFilter(e,t){return bt(e,t)}deserializeFilter(e,t){if(t==null)return null;if(typeof t==`string`)try{return window.decodeURIComponent(t)}catch{return null}return t}getComparableValue(e,t){return vt(e,t)}computeSource(e,t){return t}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n),this.dispatchEvent(new CustomEvent(`cosmoz-column-prop-changed`,{bubbles:!0}))}}})),xt,St,Ct,wt,Tt,Et,Dt,Ot=e((()=>{w(),gt(),D(),r(),A(),I(),xt=e=>t=>e(n=>{if(n.inputValue===void 0&&t.target.value===``)return n;clearTimeout(n.t);let r=setTimeout(()=>e(e=>({...e,filter:e.inputValue})),1e3);return{...n,inputValue:t.target.value,t:r}}),St=e=>()=>e(e=>({...e,filter:e.inputValue})),Ct=e=>t=>{t.keyCode===13&&(t.preventDefault(),e(e=>({...e,filter:e.inputValue})))},wt=e=>t=>e(e=>({...e,headerFocused:t.detail.value})),Tt=e=>()=>e(e=>({...e,filter:null,inputValue:null})),Et=e=>e!=null&&e!==``,Dt=class extends F(k){static get properties(){return{minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},inputValue:{type:Object,notify:!0}}}getFilterFn(e,t){if(!(t==null||t===``))return yt(e,t)}renderCell(e,{item:t}){return n`<span class="default-column">${P(e,t)}</span>`}renderEditCell(e,{item:t},r){return n`<cosmoz-input
			no-label-float
			type="text"
			@change=${e=>r(e.target.value)}
			.value=${P(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,inputValue:r,headerFocused:i},a){return n`<cosmoz-input
			label=${e.title}
			?disabled=${e.disabledFiltering}
			.value=${r??t}
			@value-changed=${xt(a)}
			focused=${i}
			@focused-changed=${wt(a)}
			@keydown=${Ct(a)}
			@blur=${St(a)}
		>
			${j(!e.disabledFiltering,()=>n`<cosmoz-clear-button
						suffix
						slot="suffix"
						?visible=${Et(t)}
						light
						@click=${Tt(a)}
					></cosmoz-clear-button>`)}
		</cosmoz-input>`}legacyFilterToState(e){return{filter:e,inputValue:e}}},customElements.define(`cosmoz-omnitable-column`,Dt)})),kt,At,jt,L=e((()=>{w(),g(),r(),kt=[`label`,`value`,`slot`,`always-float-label`,`disabled`],At=Ze`
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
`,jt=e=>{let{label:t,value:r,slot:i}=e;return Ge(n`<div
		id="input"
		part="input"
		role="button"
		class="control"
		slot=${i}
	>
		${r||``}
	</div>`,{label:t})},customElements.define(`cosmoz-omnitable-dropdown-input`,m(jt,{observedAttributes:kt,styleSheets:[At]}))})),R,Mt=e((()=>{xe(),r(),te(),L(),R=({title:e,tooltip:t=``,filterText:r=``,onOpenedChanged:i,content:a,horizontalAlign:o=`left`,externalValues:s=null})=>n`
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
	`})),Nt,Pt,Ft=e((()=>{Ue(),De(),_(),ne(),Nt=e=>e?typeof e.close==`function`?e:Nt(e.parentElement):null,Pt=e=>class extends e{static get properties(){return{disabled:{type:Boolean,value:!1},filter:{type:Object,notify:!0},values:{type:Array,value(){return[]}},headerFocused:{type:Boolean,notify:!0},min:{type:Number,value:null},max:{type:Number,value:null},limits:{type:Function},autoupdate:{type:String,value:!0},locale:{type:String,value:null},_filterInput:{type:Object,value(){return{min:null,max:null}}},_range:{type:Object,computed:`_computeRange(values.*)`},_limit:{type:Object,computed:`_computeLimit(_range, _filterInput.*, min, max)`,value(){return{}}},_tooltip:{type:String,computed:`_computeTooltip(title, _filterText)`},_fromClasses:{type:String,computed:`_computeInputClasses(_filterInput.min)`},_toClasses:{type:String,computed:`_computeInputClasses(_filterInput.max)`}}}static get observers(){return[`_filterInputChanged(_filterInput.*, autoupdate)`,`_filterChanged(filter.*)`,`_updateLimits(limits, headerFocused)`]}disconnectedCallback(){this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),super.disconnectedCallback()}_computeInputClasses(e){return e!=null&&e!==``?`has-value`:``}toNumber(e,t,n){if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=this.toNumber(t);return i==null?r:n(r,i)}toValue(){return this.toNumber.apply(this,arguments)}getComparableValue(e,t){if(e==null)return;let n=e;return t!=null&&(n=this.get(t,e)),this.toValue(n)}renderValue(){}getInputString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return this._toInputString(n)}_computeRange(e){let t=e.base,n=Array.isArray(t)&&t.length&&t.map(e=>this.toValue(e)).filter(e=>e!=null);return!n||n.length<1?{min:null,max:null}:n.reduce((e,t)=>({min:this.toValue(t,e.min,Math.min),max:this.toValue(t,e.max,Math.max)}),{})}_computeLimit(e,t,n,r){if(!e)return;let i=t.base,a=this.toValue(n),o=this.toValue(r),s=a??this.toValue(e.min),c=o??this.toValue(e.max);return{fromMin:s,fromMax:this.toValue(c,this._fromInputString(i.max,`max`),Math.min),toMin:this.toValue(s,this._fromInputString(i.min,`min`),Math.max),toMax:c}}_computeFilterText(e){if(e.base==null)return;let t=e.base,n=this.toValue(t.min),r=this.toValue(t.max),i=[];return n!=null&&i.push(this.renderValue(n)),i.push(` - `),r!=null&&i.push(this.renderValue(r)),i.length>1?i.join(``):void 0}_computeTooltip(e,t){return t==null?e:`${e}: ${t}`}_fromInputString(e){return this.toValue(e)}_toInputString(e){return this.toValue(e)??null}_getDefaultFilter(){return{min:null,max:null}}_filterInputChanged(e,t){let n=e.path.split(`.`)[1];this.__inputChangePath=n||null,t&&(this._limitInputDebouncer=re.debounce(this._limitInputDebouncer,He.after(600),()=>{this._limitInput(),this._updateFilter()}),oe(this._limitInputDebouncer))}_clearFrom(){this.set(`_filterInput.min`,null),this._updateFilter()}_clearTo(){this.set(`_filterInput.max`,null),this._updateFilter()}_onBlur(){this._limitInput(),this._updateFilter()}_onKeyDown(e){let t=e.currentTarget,n=Array.from(t.parentElement.querySelectorAll(`cosmoz-input`)),r=n[n.findIndex(e=>e===t)+1],i=!r,a=n[0]===t;switch(e.keyCode){case 13:if(e.preventDefault(),!i)r.focus();else{let e=this._limitInput();this._updateFilter(),e||this._closeParent(t)}break;case 9:(i&&!e.shiftKey||a&&e.shiftKey)&&this._closeParent(t)}}_closeParent(e){let t=Nt(e);t&&t.close()}_onDropdownOpenedChanged({currentTarget:e,type:t,detail:n}){(t===`focus`||n?.value===!0)&&setTimeout(()=>{e.querySelector(`cosmoz-input:focus`)||e.querySelector(`cosmoz-input`)?.focus()},100)}_limitInput(){let e=this._filterInput,t=this.__inputChangePath,n=t?this._fromInputString(this.get(t,e),t):null;if(this.__inputChangePath=null,n==null)return!1;let r=this._limit,i=t===`min`?`from`:`to`,a=this.get(i+`Min`,r),o=this.get(i+`Max`,r),s=this.toValue(n,a,Math.max),c=this.toValue(s,o,Math.min);return this.getComparableValue(n)===this.getComparableValue(c)?!1:(this.set([`_filterInput`,t],this._toInputString(c,t)),this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),!0)}_updateFilter(){let e=this._filterInput,t=this.filter,n=this._fromInputString(e.min,`min`),r=this._fromInputString(e.max,`max`);this.getComparableValue(n)===this.getComparableValue(t,`min`)&&this.getComparableValue(r)===this.getComparableValue(t,`max`)||this.set(`filter`,{min:n,max:r})}_filterChanged(e){if(this._filterInput==null)return;let t=this._filterInput,n=e.base,r=this._fromInputString(t.min,`min`),i=this._fromInputString(t.max,`max`);this.getComparableValue(r)===this.getComparableValue(n,`min`)&&this.getComparableValue(i)===this.getComparableValue(n,`max`)||(this.set(`_filterInput`,{min:this._toInputString(n.min),max:this._toInputString(n.max)}),this._limitInputDebouncer&&this._limitInputDebouncer.cancel())}hasFilter(){let e=this.filter;return e==null?!1:this.toValue(e.min)!=null||this.toValue(e.max)!=null}resetFilter(){this.filter=this._getDefaultFilter()}_updateLimits(e,t){e&&Promise.resolve(Ie(e,{active:t})).then(e=>{let{min:t,max:n}=e??{};Object.assign(this,{...t==null?{}:{min:t},...n==null?{}:{max:n}})})}}})),z,It=e((()=>{D(),r(),z=e=>class extends e{static get template(){return qe`<div id="output" style="position:relative;"></div>`}connectedCallback(){super.connectedCallback();let e=this;i(e.render(),e.$.output)}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n);let r=this;requestAnimationFrame(()=>i(r.render(),r.$.output))}}})),Lt,Rt=e((()=>{w(),D(),o(),r(),A(),Mt(),L(),Ft(),It(),Lt=class extends Pt(z(k)){static get properties(){return{currency:{type:String},autodetect:{type:Boolean,value:!1},rates:{type:Object},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, _formatters)`},headerFocused:{type:Boolean,value:!1}}}static get observers(){return[`_valuesChanged(autodetect, currency, values)`]}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return n`
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
			${j(this.disabled,()=>n`
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
					${R({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:n`
							<h3 style="margin: 0;">${this.title}</h3>
							<cosmoz-input
								class=${this._fromClasses}
								type="number"
								title=${a(`Minimum amount`)}
								label=${a(`Min amount`)}
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
								title=${a(`Maximum amount`)}
								label=${a(`Max amount`)}
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
		`}_valuesChanged(e,t,n){if(!Array.isArray(n)||n.length<1||!e&&t)return;let r=n.reduce((e,t)=>{if(t.currency){let n=t.currency;e[n]=(e[n]||0)+1}return e},{}),i=Object.keys(r)[0];Object.keys(r).reduce((e,t)=>{let n=Math.max(e,r[t]);return n===r[t]&&(i=t),n},0),this.set(`currency`,i)}toAmount(e,t,n){if(e==null||e===``)return;if(typeof e!=`object`||e.currency==null||e.currency===``)return null;let r=this.toNumber(e.amount);if(r==null||Number.isNaN(r))return null;let i={currency:e.currency,amount:r};if(n==null||t==null)return i;let a=this.toAmount(t);if(a==null)return i;let o=this.rates||{},s=i.amount*(o[i.currency]||1),c=a.amount*(o[a.currency]||1);return this.toNumber(s,c,n)===s?i:a}toValue(){return this.toAmount.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n==null)return;let r=this.toNumber(n.amount),i=this.rates;return i==null?r:r*(i[n.currency]||1)}getString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return n===void 0?``:n===null?`Invalid value`:this.renderValue(n)}getCurrency(e,t){let n=this.get(t,e);return n&&n.currency}getFormatter(e,t){let n=e+(t||``)||``,r=this._formatters=this._formatters||{};return r[n]||(r[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),r[n]}renderValue(e){let t=this.toAmount(e);return t==null?``:this.getFormatter(t.currency,this.locale).format(e.amount)}_amountValueChanged(e){let t=e.target.value,n=e.model.item,r=this.get(this.valuePath,n),i={amount:Number(t),currency:r.currency};this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toInputString(e){let t=this.toValue(e);return t==null?null:this.toNumber(t.amount)}_toInputStringAmount(e){let t=this.rates;if(t==null)return this._toInputString(e);let n=this.toValue(e);return n==null?null:(this.toNumber(n.amount)*(t[n.currency]||1)/(t[this.currency]||1)).toFixed(2)}_fromInputString(e,t){let n=this.toNumber(e);if(n!=null)return this.toValue({amount:n,currency:t&&this.get([`filter`,t,`currency`])||this.currency})}},customElements.define(`cosmoz-omnitable-amount-range-input`,Lt)})),B,zt,Bt,Vt,V,Ht,Ut,Wt,Gt=e((()=>{O(),Be(),B=(e,t,n)=>{if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=B(t);return i==null?r:n(r,i)},zt=e=>{let t=B(e);return t==null?null:t.toString()},Bt=({valuePath:e},t)=>zt(B(e?M(t,e):t)),Vt=e=>zt(e)??``,V=({valuePath:e,maximumFractionDigits:t},n)=>{if(n==null)return;let r=B(e?M(n,e):n);if(r!=null)return t===null?r:B(r.toFixed(t))},Ht=Re((e,t,n)=>{let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}),Ut=({valuePath:e,locale:t,minimumFractionDigits:n,maximumFractionDigits:r},i)=>{let a=e?M(i,e):i;if(a==null)return``;let o=B(a);if(o!=null)return Ht(t,n,r).format(o)},Wt=(e,t)=>n=>{let r=V(e,n);if(r==null)return!1;let i=V({...e,valuePath:`min`},t),a=V({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})),H,U,Kt,qt,Jt,Yt,Xt,Zt,Qt,$t,en,tn=e((()=>{O(),Gt(),H=(e={},t,n,r)=>{if(t==null||t===``)return;if(typeof t!=`object`||t.currency==null||t.currency===``)return null;let i=B(t.amount);if(i==null||Number.isNaN(i))return null;let a={currency:t.currency,amount:i};if(r==null||n==null)return a;let o=H(e,n);if(o==null)return a;let s=a.amount*(e[a.currency]||1);return B(s,o.amount*(e[o.currency]||1),r)===s?a:o},U=({valuePath:e,rates:t},n)=>{if(n==null)return;let r=n;e!=null&&(r=M(n,e));let i=H(t,r);if(i==null)return;let a=B(i.amount);return t==null||a==null?a:a*(t?.[i.currency]||1)},Kt=(e,t)=>n=>{let r=U(e,n);if(r===void 0)return!1;let i=U({...e,valuePath:`min`},t),a=U({...e,valuePath:`max`},t);return i===void 0||a===void 0?!0:!(r<i||r>a)},qt={},Jt=(e,t)=>{let n=e+(t||``)||``;return qt[n]||(qt[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),qt[n]},Yt=(e,t,n)=>{let r=H(e,t);return r==null?``:Jt(r.currency,n).format(r.amount)},Xt=({valuePath:e,rates:t,locale:n},r)=>{let i=H(t,e?M(r,e):void 0);return i===void 0?``:i===null?`Invalid value`:Yt(t,i,n)},Zt=e=>e?e.amount+e.currency:``,Qt=e=>{if(e==null||e===``)return;let t=e.match(/^(-?[\d]+)([\D]+?)$/iu);if(!(!Array.isArray(t)||t.length<0))return{amount:Number(t[1]),currency:t[2]}},$t=({valuePath:e},t)=>e?M(t,e)?.currency:null,en=({valuePath:e},t)=>e?M(t,e)?.amount:void 0})),W,nn,rn,an,on,sn,cn,G=e((()=>{Be(),g(),W=Symbol(`column`),nn=e=>{let t=!0,n=e.map(e=>e.name);return e.forEach(e=>{e.name??(t=!1,console.error(`The name attribute needs to be set on all columns! Missing on column`,e))}),e.forEach(e=>{n.indexOf(e.name)!==n.lastIndexOf(e.name)&&(t=!1,console.error(`The name attribute needs to be unique among all columns! Not unique on column`,e))}),t},rn=(e,t)=>{let n=e.valuePath??e.name;return{name:e.name,title:e.title,valuePath:n,groupOn:e.groupOn??n,sortOn:e.sortOn??n,noSort:e.noSort,disabledFiltering:t||e.disabledFiltering,minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,getString:e.getString,getComparableValue:e.getComparableValue,serializeFilter:e.serializeFilter,deserializeFilter:e.deserializeFilter,toXlsxValue:e.toXlsxValue,renderHeader:e.renderHeader,renderCell:e.renderCell,renderEditCell:e.renderEditCell,renderGroup:e.renderGroup,cellTitleFn:e.cellTitleFn,headerTitleFn:e.headerTitleFn,getFilterFn:e.getFilterFn,headerCellClass:e.headerCellClass,cellClass:e.cellClass,editable:e.editable,values:e.values,source:c(e.computeSource),noLocalFilter:e.noLocalFilter,mini:e.mini,renderMini:e.renderMini,loading:e.loading,externalValues:e.externalValues,computeSource:e.computeSource,trueLabel:e.trueLabel,falseLabel:e.falseLabel,valueProperty:e.valueProperty,textProperty:e.textProperty,emptyLabel:e.emptyLabel,emptyValue:e.emptyValue,min:e.min,max:e.max,locale:e.locale,autoupdate:e.autoupdate,maximumFractionDigits:e.maximumFractionDigits,minimumFractionDigits:e.minimumFractionDigits,currency:e.currency,rates:e.rates,autodetect:e.autodetect,ownerTree:e.ownerTree,keyProperty:e.keyProperty,...e.getConfig?.(e),[W]:e}},an=e=>e.isOmnitableColumn&&!e.hidden,on=e=>{let t=e.filter(an);return nn(t)?t:[]},sn=(e,t,n)=>(Array.isArray(t)?e.filter(e=>t.includes(e.name)):e.filter(e=>!e.disabled)).map(e=>rn(e,n)),cn=(e,{enabledColumns:t,disabledFiltering:n})=>{let[r,i]=x([]);return ue(()=>{let r,a=[],o=e.shadowRoot.querySelector(`#columnsSlot`),s=e=>()=>{let r=o.assignedNodes({flatten:!0});if(e)a=r;else{let e=r.filter(e=>!a.includes(e)),t=a.filter(e=>!r.includes(e)),n=[...e,...t].some(e=>e.isOmnitableColumn);if(a=r,!n)return}i(sn(on(r),t,n))},c=e=>{cancelAnimationFrame(r),r=requestAnimationFrame(s(e?.type===`cosmoz-column-prop-changed`))};return c(),o.addEventListener(`slotchange`,c),e.addEventListener(`cosmoz-column-prop-changed`,c),()=>{o.removeEventListener(`slotchange`,c),e.removeEventListener(`cosmoz-column-prop-changed`,c),cancelAnimationFrame(r)}},[t,n]),r}})),ln,K,un,q=e((()=>{O(),G(),ln=(e,t)=>Array.isArray(e)?e.map(e=>M(e,t)).filter((e,t,n)=>e!=null&&n.indexOf(e)===t):void 0,K=({externalValues:e,values:t,valuePath:n},r)=>{if(e)return e;if(typeof t==`function`)return t;if(n!==void 0)return ln(r,n)},un=(e,t,n,r)=>{let{valuePath:i}=t,a=i===void 0?void 0:M(n,i);if(r===a)return;i!==void 0&&Me(n,i,r);let o={item:n,valuePath:i,value:r,oldValue:a,column:t[W]};e.dispatchEvent(new CustomEvent(`column-item-changed`,{bubbles:!0,composed:!0,detail:o}))}})),dn,fn=e((()=>{w(),gt(),D(),r(),O(),I(),Rt(),tn(),q(),dn=class extends F(k){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},currency:{type:String,notify:!0},autodetect:{type:Boolean,value:!1,notify:!0},rates:{type:Object,notify:!0},width:{type:String,value:`70px`},cellClass:{type:String,value:`amount-cell align-right`},headerCellClass:{type:String,value:`amount-header-cell`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=U({...e,valuePath:`min`},t),r=U({...e,valuePath:`max`},t);if(!(n==null&&r==null))return Kt(e,t)}getString(e,t){return Xt(e,t)}toXlsxValue(e,t){return Xt(e,t)}getComparableValue(e,t){return U(e,t)}serializeFilter({rates:e},t){if(t==null)return;let n=H(e,t.min),r=H(e,t.max);if(!(n==null&&r==null))return Zt(n)+`~`+Zt(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Qt(n[1]),max:Qt(n[2])}:null}renderCell(e,{item:t}){return n`<span>${e.getString(e,t)}</span>`}renderEditCell(e,{item:t},r){return n`<cosmoz-input
			no-label-float
			type="number"
			@change=${n=>r({amount:n.target.value,currency:M(t,e.valuePath)?.currency})}
			.value=${en(e,t)}
		>
			<div slot="suffix">${$t(e,t)}</div>
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
		></cosmoz-omnitable-amount-range-input>`}computeSource(e,t){return K(e,t)}},customElements.define(`cosmoz-omnitable-column-amount`,dn)})),pn,mn,hn,gn,_n,vn,yn,bn,xn,Sn,Cn,wn,Tn=e((()=>{we(),Ue(),ct(),O(),q(),pn=(e,t)=>{if(!Array.isArray(e))return;let n=[];return e.reduce((e,t)=>Array.isArray(t)?(t.forEach(t=>{e.push(t)}),e):(e.push(t),e),[]).filter((e,r,i)=>{if(i.indexOf(e)!==r)return!1;if(t){let r=M(e,t);if(n.indexOf(r)!==-1)return!1;n.push(r)}return!0})},mn=(e,t,n)=>{if(e==null)return[];if(Array.isArray(e)){let r=pn(e,t);if(!r?.length)return r;let i=n??`label`,a=e=>String(typeof e==`object`&&e?M(e,i)??``:e??``);return r.sort((e,t)=>a(e).localeCompare(a(t)))}if(typeof e==`object`){let r=t??`id`,i=n??`label`;return Object.entries(e).map(([e,t])=>({[r]:e,[i]:t})).sort((e,t)=>String(e[i]??``).localeCompare(String(t[i]??``)))}return[]},hn=(e,t,n)=>N(t&&M(e,t)).map(T(n)),gn=({valuePath:e,textProperty:t},n)=>hn(n,e,t).filter(e=>e!=null).join(`, `),_n=gn,vn=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>a=>{let o=T(e),s=N(M(a,t));return i.some(t=>s.length===0&&T(r||e)(t)===n||s.some(e=>o(e)===o(t)))},yn=e=>t=>e(e=>({...e,filter:t})),bn=e=>t=>e(e=>({...e,headerFocused:t})),xn=e=>t=>e(e=>({...e,query:t})),Sn=({emptyValue:e,emptyLabel:t,emptyProperty:n,textProperty:r,valueProperty:i},a)=>{let o=mn(a,i,r);return!t||e===void 0||!r||!(n||i)||!o?o:[{[r]:t,[n||i]:e},...o]},Cn=(e,t)=>Sn(e,ln(t,e.valuePath)),wn=e=>class extends e{static get properties(){return{textProperty:{type:String},valueProperty:{type:String},emptyLabel:{type:String},emptyValue:{type:Object},emptyProperty:{type:String}}}getConfig(e){return{emptyProperty:e.emptyProperty}}getString(e,t){return gn(e,t)}toXlsxValue(e,t){return _n(e,t)}getComparableValue({valuePath:e,valueProperty:t},n){let r=M(n,e);return t==null?r:N(r).map(T(t)).sort().join(` `)}getFilterFn(e,t){if(!(!t||!Array.isArray(t)||t.length===0))return vn(e,t)}serializeFilter(e,t){return t.length===0?null:JSON.stringify(t)}deserializeFilter(e,t){if(t==null)return null;try{return JSON.parse(decodeURIComponent(t))}catch(e){return console.error(`Failed to deserialize filter value:`,{error:e?.name,message:e?.message,filterLength:typeof t==`string`?t.length:null}),null}}computeSource(e,t){return e.externalValues||typeof e.values==`function`?async(...t)=>Sn(e,await Promise.resolve(Ie(e.values,...t))):Cn(e,t)}}})),En,Dn,On,kn=e((()=>{it(),be(),D(),r(),A(),we(),ct(),Tn(),I(),g(),O(),G(),En=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?ot(t):T(n),a=N(e&&M(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},Dn=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>{let a=T(e),o=T(r||e),s=new Set(i.filter(e=>e.excluded).map(e=>a(e.item))),c=new Set(i.filter(e=>!e.excluded).map(e=>a(e.item))),l=i.some(e=>e.excluded&&o(e.item)===n),u=i.some(e=>!e.excluded&&o(e.item)===n);return e=>{let n=N(M(e,t)).map(a);return n.length===0?!l&&(u||c.size===0):!n.some(e=>s.has(e))&&(c.size===0||n.some(e=>c.has(e)))}},On=class extends wn(F(k)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return n`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},r){return n`<cosmoz-input
			no-label-float
			type="text"
			@change=${e=>r(e.target.value)}
			.value=${P(e,t)}
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
			.itemRenderer=${e[W]?.itemRenderer}
			.value=${t}
			.text=${r}
			.limit=${e.limit}
			@opened-changed=${e=>bn(i)(e.detail.value)}
			@value-changed=${C(yn(i))}
			@text-changed=${C(xn(i))}
			>${j(e.loading,()=>n`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-excluding
		>`}getComparableValue(e,t){return En(e,t)}getFilterFn(e,t){if(!(!t||!Array.isArray(t)||t.length===0))return Dn(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete-excluding`,On)})),An,jn,Mn=e((()=>{it(),be(),D(),r(),A(),we(),ct(),Tn(),I(),O(),G(),An=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?ot(t):T(n),a=N(e&&M(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},jn=class extends wn(F(k)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return n`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},r){return n`<cosmoz-input
			no-label-float
			type="text"
			@change=${e=>r(e.target.value)}
			.value=${P(e,t)}
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
			.itemRenderer=${e[W]?.itemRenderer}
			.value=${t}
			.text=${r}
			.limit=${e.limit}
			.onChange=${yn(i)}
			@opened-changed=${e=>bn(i)(e.detail.value)}
			.onText=${xn(i)}
			>${j(e.loading,()=>n`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}getComparableValue(e,t){return An(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete`,jn)})),Nn,Pn,Fn,In,Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,qn=e((()=>{D(),I(),it(),Be(),O(),r(),A(),Nn=(e,t)=>t.find(({value:t})=>e===t),Pn=(e,t,n)=>{let r=Nn(t,n);return r?r.text:e},Fn=(e,t,n,r)=>Pn(e,M(t,n),r),In=({valuePath:e},t,n)=>Nn(M(t,e),n),Ln=e=>t=>{e(e=>({...e,filter:t?.[0]?.value??null}))},Rn=e=>t=>{e(e=>({...e,headerFocused:t}))},zn=e=>t=>{e(e=>({...e,query:t}))},Bn=e=>t=>e(t?.[0]?.value),Vn=({valuePath:e,trueLabel:t,falseLabel:n},r)=>M(r,e)?t:n,Hn=({valuePath:e},t)=>n=>M(n,e)===t,Un=c((e,t)=>[{text:e,value:!0},{text:t,value:!1}]),Wn=({valuePath:e,trueLabel:t,falseLabel:n},r)=>e?M(r,e)?t:n:``,Gn=(e,t)=>{try{return JSON.parse(t)}catch{return null}},Kn=class extends F(k){static get properties(){return{trueLabel:{type:String,value:`True`},falseLabel:{type:String,value:`False`},flex:{type:String,value:`0`},cellClass:{type:String,value:`boolean-cell`}}}getString(e,t){return Vn(e,t)}renderCell(e,{item:t}){return Vn(e,t)}renderEditCell(e,{item:t},r){let{trueLabel:i,falseLabel:a}=e;return n`<cosmoz-autocomplete
			no-label-float
			.title=${Fn(e.title,t,e.valuePath,Un(i,a))}
			.source=${Un(i,a)}
			.textProperty=${`text`}
			.value=${In(e,t,Un(i,a))}
			.onChange=${Bn(r)}
			.limit=${1}
			>${j(e.loading,()=>n`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete
		>`}renderHeader(e,{filter:t,query:r},i,a){return n`<cosmoz-autocomplete-ui
			?disabled=${e.disabledFiltering}
			.label=${e.title}
			.title=${Fn(e.title,t,e.valuePath,a)}
			.source=${a}
			.textProperty=${`text`}
			.value=${Nn(t,a)}
			.text=${r}
			.onChange=${Ln(i)}
			@opened-changed=${e=>Rn(i)(e.detail.value)}
			.onText=${zn(i)}
			.limit=${1}
			>${j(e.loading,()=>n`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}computeSource({trueLabel:e,falseLabel:t}){return Un(e,t)}getFilterFn(e,t){if(t!=null)return Hn(e,t)}toXlsxValue(e,t){return Wn(e,t)}deserializeFilter(e,t){return Gn(e,t)}},customElements.define(`cosmoz-omnitable-column-boolean`,Kn)})),Jn,Yn=e((()=>{ye(),Ft(),Jn=e=>class extends Pt(e){static get properties(){return{max:{type:Date,value:null},min:{type:Date,value:null},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},formatter:{type:Object,computed:`_computeFormatter(locale)`}}}toDate(e,t,n){if(e==null||e===``)return;let r=e;if(r instanceof Date||(typeof e==`string`&&(r=this.getAbsoluteISOString(r)),r=new Date(r)),Number.isNaN(r.getTime()))return null;if(n==null||t==null)return r;let i=this.toDate(t);if(i==null)return r;let a=this.getComparableValue(r);return n(a,this.getComparableValue(i))===a?r:i}toValue(){return this.toDate.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n!=null)return this.toNumber(n.getTime())}getString(e,t=this.valuePath,n=this.formatter){let r=this.toValue(this.get(t,e));return r===void 0?``:r===null?`Invalid Date`:this.renderValue(r,n)}getAbsoluteISOString(e){return e.length===19?e+this._getTimezoneString(e):e}_getTimezoneString(e){let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`}renderValue(e,t=this.formatter){if(t==null)return;let n=this.toValue(e);if(n!=null)return t.format(n)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(0,10)}_dateValueChanged(e){let t=e.currentTarget.value,n=e.model.item,r=this.get(this.valuePath,n),i=this._fromInputString(t);this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toLocalISOString(e){return ce(e)}}})),Xn,Zn=e((()=>{w(),D(),o(),r(),A(),Yn(),Mt(),L(),It(),Xn=class extends Jn(z(k)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return n`
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

			${j(this.disabled,()=>n`
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
					${R({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:n`
							<h3 style="margin: 0;">${this.title}</h3>
							<cosmoz-input
								type="date"
								label=${a(`From date`)}
								min=${this._toInputString(this._limit.fromMin)}
								max=${this._toInputString(this._limit.fromMax)}
								.value=${this._filterInput?.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-input>
							<cosmoz-input
								type="date"
								label=${a(`Until date`)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
								.value=${this._filterInput?.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-input>
						`})}
				`)}
		`}_fromInputString(e,t){let n=this.toDate(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n}_filterInputChanged(e,t){let n=e.path.split(`.`)[1]&&e.value;if(n&&n.match(/^0+/u)){this._limitInputDebouncer.cancel();return}super._filterInputChanged(e,t)}},customElements.define(`cosmoz-omnitable-date-range-input`,Xn)})),Qn,$n,er,J,Y,tr,nr,rr,ir,ar,or,sr,cr,lr,ur,dr=e((()=>{ye(),O(),Gt(),Qn=e=>{let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`},$n=e=>e.length===19?e+Qn(e):e,er=e=>{if(e==null||e===``)return;let t=e;return!(t instanceof Date)&&(typeof e==`string`&&(t=$n(t)),t=ge(t),!t)||Number.isNaN(t.getTime())?null:t},J=({valuePath:e},t)=>{if(t==null)return;let n=t;e!=null&&(n=M(t,e));let r=er(n);if(r!=null)return B(r.getTime())},Y=(e,t,n)=>{let r=er(e);if(r==null)return null;if(n==null||t==null)return r;let i=Y(t);if(i==null)return r;let a=J({},r),o=J({},i);return a==null||o==null||n(a,o)===a?r:i},tr=(e,t)=>{if(t==null)return;let n=Y(e);if(n!=null)return t.format(n)},nr={},rr=e=>{let t=e||``;return nr[t]||(nr[t]=new Intl.DateTimeFormat(e||void 0)),nr[t]},ir=({valuePath:e,locale:t},n)=>{let r=M(n,e||``);return r===void 0?``:(r=Y(r),r===null?`Invalid Date`:tr(r,rr(t)))},ar=e=>{let t=Y(e);if(t==null)return null;let n=ce(t);return n==null?null:n.slice(0,10)},or=({valuePath:e},t)=>ar(M(t,e||``)),sr=(e,t)=>{let n=Y(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n},cr=e=>ar(e)??``,lr=({valuePath:e},t)=>{if(!e)return``;let n=Y(M(t,e));if(!n)return``;let r=Y(ce(n));return r?(r.setHours(0,0,0,0),r):``},ur=(e,t)=>n=>{let r=J(e,n);if(r==null)return!1;let i=J({...e,valuePath:`min`},t),a=J({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})),fr,pr=e((()=>{w(),D(),r(),I(),Zn(),q(),dr(),gt(),fr=class extends F(k){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`date-header-cell`},width:{type:String,value:`100px`},minWidth:{type:String,value:`82px`},flex:{type:String,value:`0`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=J({...e,valuePath:`min`},t),r=J({...e,valuePath:`max`},t);if(!(n==null&&r==null))return ur(e,t)}getString(e,t){return ir(e,t)}toXlsxValue(e,t){return lr(e,t)}getComparableValue(e,t){return J(e,t)}serializeFilter(e,t){if(t==null)return;let n=Y(t.min),r=Y(t.max);if(!(n==null&&r==null))return cr(n)+`~`+cr(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Y(n[1]),max:Y(n[2])}:null}renderCell(e,{item:t}){return n`<div class="omnitable-cell-date">
			${ir(e,t)}
		</div>`}renderEditCell(e,{item:t},r){return n`<cosmoz-input
			no-label-float
			type="date"
			@change=${e=>r(sr(e.target.value))}
			.value=${or(e,t)}
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
		></cosmoz-omnitable-date-range-input>`}computeSource(e,t){return K(e,t)}},customElements.define(`cosmoz-omnitable-column-date`,fr)})),mr,hr=e((()=>{D(),o(),r(),A(),Yn(),Mt(),L(),It(),mr=class extends Jn(z(k)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return n`
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

			${j(this.disabled,()=>n`
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
					${R({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:n`
							<h3 style="margin: 0;">${this.title}</h3>
							<cosmoz-datetime-input
								date-label=${a(`From date`)}
								time-label=${a(`From time`)}
								min=${this._toInputString(this._limit.fromMin)}
								max=${this._toInputString(this._limit.fromMax)}
								step=${this.filterStep}
								.value=${this._filterInput?.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-datetime-input>
							<cosmoz-datetime-input
								date-label=${a(`To date`)}
								time-label=${a(`To time`)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
								step=${this.filterStep}
								.value=${this._filterInput?.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-datetime-input>
						`})}
				`)}
		`}_toInputString(e){let t=this.toValue(e);if(t!=null)return this._toLocalISOString(t).slice(0,19)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})}},customElements.define(`cosmoz-omnitable-datetime-range-input`,mr)})),gr,_r,vr,yr,br,xr,Sr=e((()=>{O(),dr(),gr={},_r=e=>{let t=e||``;return gr[t]||(gr[t]=new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})),gr[t]},vr=({valuePath:e,locale:t},n)=>{let r=Y(M(n,e||``));return r===void 0?``:r===null?`Invalid Date`:tr(r,_r(t))},yr=({valuePath:e},t)=>e?M(t,e):``,br=e=>{let t=Y(e);return t==null?``:t.toISOString().slice(0,19).replace(/:/gu,`.`)},xr=e=>{if(!(e==null||e===``)&&typeof e==`string`)return Y(e.replace(/\./gu,`:`)+`Z`)}})),Cr,wr=e((()=>{Ne(),gt(),D(),r(),I(),hr(),q(),dr(),Sr(),Cr=class extends F(k){static get is(){return`cosmoz-omnitable-column-datetime`}static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`datetime-header-cell`},width:{type:String,value:`210px`},minWidth:{type:String,value:`128px`},flex:{type:String,value:`0`},filterStep:{type:Number,value:1}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=J({...e,valuePath:`min`},t),r=J({...e,valuePath:`max`},t);if(!(n==null&&r==null))return ur(e,t)}getString(e,t){return vr(e,t)}toXlsxValue(e,t){return yr(e,t)}getComparableValue(e,t){return J(e,t)}serializeFilter(e,t){if(t==null)return;let n=Y(t.min),r=Y(t.max);if(!(n==null&&r==null))return br(n)+`~`+br(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:xr(n[1]),max:xr(n[2])}:null}renderCell(e,{item:t}){return vr(e,t)}renderEditCell(e,{item:t},r){return n`<cosmoz-input
			no-label-float
			type="text"
			@change=${e=>r(sr(e.target.value))}
			.value=${vr(e,t)}
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
		></cosmoz-omnitable-datetime-range-input>`}computeSource(e,t){return K(e,t)}},customElements.define(Cr.is,Cr)})),Tr,Er=e((()=>{it(),be(),D(),r(),A(),Tn(),I(),Tr=class extends wn(F(k)){renderCell({valuePath:e,textProperty:t},{item:r}){return n`
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
				${hn(r,e,t).map(e=>n`<li>${e}</li>`)}
			</ul>
		`}renderEditCell(){return`not implemented`}renderHeader(e,{filter:t,query:r},i,a){return n`<cosmoz-autocomplete-ui
			class="external-values-${e.externalValues}"
			?disabled=${e.disabledFiltering}
			.label=${e.title}
			.source=${a}
			.textProperty=${e.textProperty}
			.value=${t}
			.text=${r}
			.onChange=${yn(i)}
			@opened-changed=${e=>bn(i)(e.detail.value)}
			.onText=${xn(i)}
			>${j(e.loading,()=>n`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		> `}},customElements.define(`cosmoz-omnitable-column-list-horizontal`,Tr)})),Dr,Or,kr=e((()=>{v(),g(),o(),Dr=E`
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
`,Or=({items:e})=>{let[t,r]=x(!1),i=Array.isArray(e)?e:[],o=b(()=>Math.max(0,i.length-1),[i]);if(i.length===0)return null;let s=i.length>2,c=i[0],l=s&&!t?[]:i.slice(1),u=e=>{e.stopPropagation(),e.preventDefault(),r(e=>!e)};return n`
		<ul>
			<li>
				<span>${c}</span>
			</li>
			<li class="see-more" ?hidden=${!s||t}>
				<a href="#" @click=${u}
					>${a(`and {0} more`,{0:o})}</a
				>
			</li>
			${l.map(e=>n`
					<li>
						<span class="item">${e}</span>
					</li>
				`)}
			<li class="see-less" ?hidden=${!s||!t}>
				<a href="#" @click=${u}>${a(`See less`)}</a>
			</li>
		</ul>
	`},customElements.define(`cosmoz-omnitable-column-list-data`,m(Or,{styleSheets:[Xe(Dr)]}))})),Ar,jr=e((()=>{kr(),D(),r(),A(),it(),Tn(),I(),G(),Ar=class extends wn(F(k)){static get properties(){return{keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,textual:e.textual}}renderCell({valuePath:e,textProperty:t},{item:r}){return n`<cosmoz-omnitable-column-list-data
			.items=${hn(r,e,t)}
		></cosmoz-omnitable-column-list-data>`}renderEditCell(e,{item:t},r){return n`<cosmoz-input
			no-label-float
			type="text"
			.value=${gn(e,t)}
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
			.itemRenderer=${e[W]?.itemRenderer}
			.value=${t}
			.text=${r}
			.onChange=${yn(i)}
			@opened-changed=${e=>bn(i)(e.detail.value)}
			.onText=${xn(i)}
			>${j(e.loading,()=>n`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}},customElements.define(`cosmoz-omnitable-column-list`,Ar)})),Mr,Nr=e((()=>{w(),D(),o(),r(),A(),Mt(),L(),Ft(),It(),Mr=class extends Pt(z(k)){static get properties(){return{maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},formatter:{type:Object,computed:`_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)`},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},headerFocused:{type:Boolean,value:!1}}}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return n`
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

			${j(this.disabled,()=>n`
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
					${R({title:this.title,tooltip:this._tooltip,filterText:this._filterText,horizontalAlign:`right`,externalValues:this.externalValues,onOpenedChanged:e,content:n`
							<h3>${this.title}</h3>
							<cosmoz-input
								class=${this._fromClasses}
								type="number"
								label=${a(`From`)}
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
								label=${a(`To`)}
								.value=${this._filterInput?.max}
								@value-changed=${e=>{this.set(`_filterInput.max`,e.detail.value)}}
								@blur=${e=>this._onBlur(e)}
								@keydown=${e=>this._onKeyDown(e)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
							></cosmoz-input>
						`})}
				`)}
		`}_computeFormatter(e,t,n){let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}getComparableValue(e,t){if(e==null)return;let n=e;if(t!=null&&(n=this.get(t,e)),n=this.toValue(n),n==null)return;let r=this.maximumFractionDigits;return r===null?n:this.toValue(n.toFixed(r))}renderValue(e,t=this.formatter){let n=this.toNumber(e);if(n!=null)return t.format(n)}},customElements.define(`cosmoz-omnitable-number-range-input`,Mr)})),Pr,Fr=e((()=>{w(),gt(),D(),r(),I(),O(),Nr(),q(),Gt(),Pr=class extends F(k){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},cellClass:{type:String,value:`number-cell align-right`},width:{type:String,value:`30px`},minWidth:{type:String,value:`30px`},headerCellClass:{type:String,value:`number-header-cell`},maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=V({...e,valuePath:`min`},t),r=V({...e,valuePath:`max`},t);if(!(n==null&&r==null))return Wt(e,t)}getString(e,t){return Ut(e,t)}toXlsxValue({valuePath:e},t){return M(t,e)}getComparableValue(e,t){return V(e,t)}serializeFilter(e,t){if(t==null)return;let n=B(t.min),r=B(t.max);if(!(n==null&&r==null))return Vt(n)+`~`+Vt(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:B(n[1]),max:B(n[2])}:null}renderCell(e,{item:t}){return n`<div class="omnitable-cell-number">
			${Ut(e,t)}
		</div>`}renderEditCell(e,{item:t},r){return n`<cosmoz-input
			no-label-float
			type="number"
			@change=${e=>r(e.target.value)}
			.value=${Bt(e,t)}
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
		></cosmoz-omnitable-number-range-input>`}computeSource(e,t){return K(e,t)}},customElements.define(`cosmoz-omnitable-column-number`,Pr)})),Ir,Lr=e((()=>{w(),D(),o(),r(),A(),Yn(),Mt(),L(),It(),Ir=class extends Jn(z(k)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return n`
			${j(this.disabled,()=>n`
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
					${R({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:n`
							<h3 style="margin: 0;">${this.title}</h3>
							<cosmoz-input
								type="time"
								label=${a(`From time`)}
								step=${this.filterStep}
								.value=${this._filterInput.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-input>
							<cosmoz-input
								type="time"
								label=${a(`Until time`)}
								step=${this.filterStep}
								.value=${this._filterInput.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-input>
						`})}
				`)}
		`}get _fixedDate(){return`1970-01-01`}toDate(e,t,n){let r=typeof e==`string`&&e.length>3&&e.length<=9?this.getAbsoluteISOString(this._fixedDate+`T`+e):e;return super.toDate(r,t,n)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(11,19)}getComparableValue(e,t){if(e==null)return;let n=this._toInputString(t==null?e:this.get(t,e));if(n!=null&&(n=this.toValue(this.getAbsoluteISOString(this._fixedDate+`T`+n)),n!=null))return this.toNumber(n.getTime())}_timeValueChanged(e){let t=e.target.value,n=e.model.item,r=this.toDate(n.date),i=this.toDate(r==null?t:r.toISOString().slice(0,10)+`T`+t);i??(this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,(e=>e).bind(this)))}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})}},customElements.define(`cosmoz-omnitable-time-range-input`,Ir)})),X,Rr,zr,Br,Vr,Hr,Z,Ur,Wr,Gr,Kr=e((()=>{ye(),O(),dr(),Gt(),X=(e,t,n)=>Y(typeof e==`string`&&e.length>3&&e.length<=9?$n(`1970-01-01T`+e):e,t,n),Rr={},zr=e=>{let t=e||``;return Rr[t]||(Rr[t]=new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})),Rr[t]},Br=({valuePath:e,locale:t},n)=>{let r=X(M(n,e||``));return r===void 0?``:r===null?`Invalid Date`:tr(r,zr(t))},Vr=(e,t)=>e.valuePath?Br(e,t):``,Hr=e=>{let t=X(e);if(t==null)return null;let n=ce(t);return n&&n.slice(11,19)},Z=({valuePath:e},t)=>{if(t==null)return;let n=Hr(e==null?t:M(t,e));if(n==null)return;let r=X($n(`1970-01-01T`+n));return r==null?r:B(r.getTime())},Ur=(e,t)=>n=>{let r=Z(e,n);if(r==null)return!1;let i=Z({...e,valuePath:`min`},t),a=Z({...e,valuePath:`max`},t);return i==null||a==null?!1:!(r<i||r>a)},Wr=e=>{let t=X(e);return t==null?``:t.toISOString().slice(11,19).replace(/:/gu,`.`)},Gr=e=>{if(!(e==null||e===``))return X(typeof e==`string`?e.replace(/\./gu,`:`)+`Z`:e)}})),qr,Jr=e((()=>{w(),gt(),D(),r(),I(),Lr(),q(),Kr(),qr=class extends F(k){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`time-header-cell`},minWidth:{type:String,value:`63px`},width:{type:String,value:`210px`},flex:{type:String,value:`0`},filterStep:{type:String,value:`1`}}}getFilterFn(e,t){let n=Z({...e,valuePath:`min`},t),r=Z({...e,valuePath:`max`},t);if(!(n==null&&r==null))return Ur(e,t)}getString(e,t){return Br(e,t)}toXlsxValue(e,t){return Vr(e,t)}getComparableValue(e,t){return Z(e,t)}serializeFilter(e,t){if(t==null)return;let n=X(t.min),r=X(t.max);if(!(n==null&&r==null))return Wr(n)+`~`+Wr(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Gr(n[1]),max:Gr(n[2])}:null}renderCell(e,{item:t}){return Br(e,t)}renderEditCell(e,{item:t},r){return n`<cosmoz-input
			no-label-float
			type="text"
			@change=${e=>r(e.target.value)}
			.value=${Br(e,t)}
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
		></cosmoz-omnitable-time-range-input>`}computeSource(e,t){return K(e,t)}},customElements.define(`cosmoz-omnitable-column-time`,qr)})),Yr=e((()=>{fn(),kn(),Mn(),qn(),pr(),wr(),Er(),jr(),Fr(),Jr()})),Xr,Zr=e((()=>{g(),r(),Xr=({column:e,item:n,selected:r,folded:i,group:a})=>{if(!e)return t;let o=e.renderGroup??e.renderCell;return o?o(e,{item:n,selected:r,folded:i,group:a}):t},customElements.define(`cosmoz-omnitable-group-row`,m(Xr,{useShadowDOM:!1}))})),Qr,$r=e((()=>{g(),r(),Qr=e=>{let{column:n}=e;return S(()=>{let t=0,r=0,i=i=>{e.dispatchEvent(new CustomEvent(`column-resize`,{bubbles:!0,composed:!0,detail:{newWidth:Math.ceil(r+i.pageX-t),column:n}}))},a=()=>{document.removeEventListener(`pointermove`,i),document.removeEventListener(`pointerup`,a)},o=n=>{t=n.pageX,r=e.previousElementSibling.getBoundingClientRect().width,document.addEventListener(`pointermove`,i),document.addEventListener(`pointerup`,a)};return e.addEventListener(`pointerdown`,o),()=>e.removeEventListener(`pointerdown`,o)},[n]),t},customElements.define(`cosmoz-omnitable-resize-nub`,m(Qr))})),ei,ti,ni,ri,ii=e((()=>{r(),ei=n`<svg
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
</svg>`,ti=n`
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
`,ni=n` <svg
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
</svg>`,ri=n`<svg
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
</svg> `})),ai,oi,si,ci,li=e((()=>{g(),Le(),ii(),ai=({column:e,on:t,descending:r,setOn:i,setDescending:a})=>{let{name:o,title:s}=e??{};return n`<button
		class="sg"
		title=${Ce(s)}
		data-on=${Ce(o===t&&(r?`desc`:`asc`)||void 0)}
		@click=${e=>{let t=e.currentTarget?.dataset.on;t||(i(o),a(!1)),t===`asc`?a(!0):t===`desc`&&(i(),a(!1))}}
	>
		<span>${s}</span> ${ri}
	</button>`},oi=({columns:e,...t})=>e?.map(e=>ai({column:e,...t})),si=()=>n`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,groupOn:t,setGroupOn:n,groupOnDescending:r,setGroupOnDescending:i}={})=>oi({columns:e?.filter?.(e=>e.groupOn),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`,ci=()=>n`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,sortOn:t,setSortOn:n,descending:r,setDescending:i}={})=>oi({columns:e?.filter?.(e=>e.sortOn&&!e.noSort),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`}));function ui(e,t,{suffix:n=``,read:r,write:i,ready:a=!0,multi:o}={}){let s=ut({param:t,suffix:n,link:o?mi:pi,write:i??Ye}),c=b(()=>{if(t==null)return!1;if(o){let e=Oe(t+n);return Object.keys(e).length>0}return je(t+n)!==void 0},[]),[l,d]=x(()=>{if(t==null)return e;if(o){let i=Oe(t+n,r);return Object.keys(i).length>0?i:e}return je(t+n,r)??e}),f=u(e=>d(t=>{let n=Ie(e,t);return s.param!=null&&Fe(s.link(s.param+s.suffix,n,s.write),null,{notify:!1}),n}),[]);return S(()=>{s.param==null||!a||c||e!=null&&f(e)},[a]),[l,f]}var di,fi,pi,mi,hi=e((()=>{Je(),Ue(),at(),rt(),g(),di=e=>(t,n,r=Ye)=>{let i=Ve(),a=new URLSearchParams(i.hash.replace(`#`,``));return e(t,n,r,a),`#!`+Object.assign(i,{hash:a}).href.replace(location.origin,``)},fi=e=>e==null||e===``,pi=di((e,t,n,r)=>fi(n(t))?r.delete(e):r.set(e,n(t))),mi=di((e,t,n,r)=>{let i=Object.entries(t),a=i.map(n).filter(([,e])=>e!==void 0);if(a.length===0&&i.length>0)return;let o=e;Array.from(r.keys()).filter(e=>e.startsWith(o)).forEach(e=>r.delete(e)),a.forEach(([t,n])=>fi(n)?r.delete(e+t):r.set(e+t,n))})})),gi,_i,vi,yi,bi,xi=e((()=>{g(),hi(),gi=e=>[!0,`true`,1,`yes`,`on`].includes(e),_i=e=>e===``||(e==null?void 0:gi(e)),vi=(e,t,n)=>u(r=>{e(r),n(e=>({...e,[t]:r}))},[e,t,n]),yi=(e,t,{settings:n,setSettings:r,resetRef:i,ready:a=!0})=>{let[o,s]=ui(n.sortOn,t,{suffix:`-sortOn`,ready:a}),[c,l]=ui(_i(n.descending),t,{suffix:`-descending`,read:_i,ready:a}),[d,f]=ui(n.groupOn,t,{suffix:`-groupOn`,ready:a}),[p,m]=ui(_i(n.groupOnDescending),t,{suffix:`-groupOnDescending`,read:_i,ready:a}),h=b(()=>e.find(e=>e.name===o),[e,o]),g=b(()=>e.find(e=>e.name===d),[e,d]),_={groupOn:d,setGroupOn:vi(f,`groupOn`,r),groupOnDescending:p,setGroupOnDescending:vi(m,`groupOnDescending`,r),sortOn:o,setSortOn:vi(s,`sortOn`,r),descending:c,setDescending:vi(l,`descending`,r),columns:e},v=b(()=>_,Object.values(_)),y=u(e=>{s(e.sortOn),f(e.groupOn),l(e.descending),m(e.groupOnDescending)},[]);return S(()=>void(i.current=y),[]),{...v,sortAndGroup:v,groupOnColumn:g,sortOnColumn:h}},bi=ae(),customElements.define(`sort-and-group-provider`,bi.Provider),customElements.define(`sort-and-group-consumer`,m(({render:e})=>e(he(bi)),{useShadowDOM:!1}))})),Si,Ci,wi=e((()=>{g(),ie(),$r(),li(),A(),xi(),Si=({data:e,columns:t,groupOnColumn:r,filters:i,setFilterState:a,sortAndGroup:{sortOn:o,setSortOn:s,descending:c,setDescending:l}={}})=>p(t,e=>e.name,t=>[n`<div
				class="cell ${t.headerCellClass} header-cell"
				part="cell header-cell cell-${t.name} header-cell-${t.name}"
				?hidden="${t===r}"
				title="${t.headerTitleFn(t)}"
				name="${t.name}"
			>
				${t.renderHeader(t,i[t.name]??{},e=>a(t.name,e),t.source(t,e))}
				${j(!t.noSort,()=>ai({on:o,setOn:s,descending:c,setDescending:l,column:t}))}
			</div>`,n`<cosmoz-omnitable-resize-nub
				.column="${t}"
				name="${t.name}"
			></cosmoz-omnitable-resize-nub>`]),Ci=({columns:e,settingsConfig:t,hideSelectAll:r,...i})=>{let a=he(bi);return n`
		${j(e,e=>Si({columns:e,sortAndGroup:a,...i}))}
		${j(!r,()=>n` <cosmoz-omnitable-settings
					.config=${t}
					part="settings"
				></cosmoz-omnitable-settings>`)}
	`},customElements.define(`cosmoz-omnitable-header-row`,m(Ci,{useShadowDOM:!1}))})),Ti,Ei,Di=e((()=>{v(),g(),Ti=E`
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
`,Ei=({column:e})=>n`
	<div class="label" title="${e.title}" part="item-expand-label">
		${e.title}
	</div>
	<div class="value" part="item-expand-value">
		<slot></slot>
	</div>
`,customElements.define(`cosmoz-omnitable-item-expand-line`,m(Ei,{styleSheets:[Xe(Ti)]}))})),Oi,ki=e((()=>{g(),r(),et(),Di(),Oi=({columns:e,item:t,selected:r,expanded:i,groupOnColumn:a})=>Ee(e,e=>n`<cosmoz-omnitable-item-expand-line
				.column=${e}
				?hidden=${e===a}
				exportparts="item-expand-label, item-expand-value"
				>${e.renderCell(e,{item:t,selected:r,expanded:i})}</cosmoz-omnitable-item-expand-line
			>`),customElements.define(`cosmoz-omnitable-item-expand`,m(Oi,{useShadowDOM:!1}))})),Ai,ji,Mi=e((()=>{g(),ie(),Ai=(e,t,n)=>e.editable?e.renderEditCell(e,t,n(e,t.item)):e.renderCell(e,t),ji=({columns:e,groupOnColumn:t,item:r,index:i,selected:a,expanded:o,onItemChange:s})=>p(e,e=>e.name,e=>n`<div
				class="cell itemRow-cell ${e.cellClass??``}"
				part="cell itemRow-cell cell-${e.name} itemRow-cell-${e.name}"
				?hidden="${e===t}"
				?editable="${e.editable}"
				title="${e.cellTitleFn(e,r)}"
				name="${e.name}"
			>
				${Ai(e,{item:r,index:i,selected:a,expanded:o},s)}
			</div>`),customElements.define(`cosmoz-omnitable-item-row`,m(ji,{useShadowDOM:!1}))})),Ni,Pi,Fi=e((()=>{v(),Ni=E`
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
`,Pi=E`
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

	cosmoz-bottom-bar::part(info) {
		color: #fff;
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

	${Ni}

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
`})),Ii,Li,Ri=e((()=>{Se(),Ii=e=>{let t=e.replace(/"/gu,`""`);return t.search(/("|,|\n)/gu)>=0?`"`+t+`"`:e},Li=(e,t,n)=>{let r=e.map(e=>Ii(e.title)).join(`;`)+`
`,i=t.map(t=>e.map(e=>{let n=e.getString(e,t);return n==null?``:Ii(String(n))}).join(`;`)+`
`);i.unshift(r),Ke(new File(i,n,{type:`text/csv;charset=utf-8`}))}})),zi,Bi,Vi=e((()=>{We(),Se(),zi=(e,t)=>{let n=e.map(e=>e.title),r=t.map(t=>e.map(e=>e.toXlsxValue(e,t)??``));return r.unshift(n),r},Bi=(e,t,n,r)=>{let i=zi(e,t),a=new Qe(n).addSheetFromData(i,r).generate();Ke(new File([a],n,{type:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`}))}})),Hi,Q,Ui,Wi=e((()=>{Hi=Symbol(`index`),Q=Symbol(`All`),Ui=(e,t)=>{if(typeof e.findLastIndex==`function`)return e.findLastIndex(t);for(let n=e.length-1;n>=0;n--)if(t(e[n],n,e))return n;return-1}})),Gi,Ki=e((()=>{s(),o(),r(),Ri(),Vi(),Wi(),Gi=({columns:e,selectedItems:t,setSelectedItems:r,csvFilename:i,xlsxFilename:o,xlsxSheetname:s,topPlacement:c,enableSelectAll:l,matchingItemsCount:u=0})=>{let d=t===Q?u:t.length;return n`<cosmoz-bottom-bar
		id="bottomBar"
		?active=${!Ae(d)}
		part="bottomBar"
		exportparts="bar: bottomBar-bar, info: bottomBar-info, buttons: bottomBar-buttons"
	>
		<span slot="info">
			${t===Q?a(`All {count} matching items selected`,{count:u}):a(`{count} selected item`,{count:d})}
		</span>
		${t!==Q&&l&&d>0?n`<button @click=${()=>r(Q)}>
					${a(`Select all matching items`)}
				</button>`:``}
		<slot name="actions" id="actions"></slot>
		<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
		<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
		<cosmoz-dropdown-menu part="extra" slot="extra" .placement=${c}>
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
				@click=${()=>Li(e,t===Q?[]:t,i)}
			>
				${a(`Save selected items as CSV`)}
			</button>
			<button
				@click=${()=>Bi(e,t===Q?[]:t,o,s)}
			>
				${a(`Save selected items as XLSX`)}
			</button>
			<slot name="download-menu"></slot>
		</cosmoz-dropdown-menu>
	</cosmoz-bottom-bar>`}})),qi,Ji=e((()=>{r(),A(),qi=({allSelected:e,onAllCheckboxChange:t,sortAndGroup:r,dataIsValid:i,data:a,columns:o,filters:s,groupOnColumn:c,setFilterState:l,settingsConfig:u,hideSelectAll:d})=>n`<sort-and-group-provider .value=${r}>
		<div class="header" id="header" part="header">
			${j(!d,()=>n`<input
						class="checkbox all"
						type="checkbox"
						.checked=${e}
						@input=${t}
						?disabled=${!i}
						part="all"
					/>`)}
			${j(d,()=>n` <cosmoz-omnitable-settings
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
	</sort-and-group-provider>`})),Yi,Xi,Zi=e((()=>{g(),Yi=Ze`
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
`,Xi=({settingsConfig:e})=>{let{columns:t,collapsed:r}=e,i=t.filter(e=>!r.some(t=>t.name===e.name));return n`<div class="skeleton">
		${Array.from({length:5},()=>n`<div>
					<div class="checkbox"></div>
					${i.map(e=>n`<div
								class="cell"
								part=${`cell-${e.name}`}
								name=${e.name}
							></div>`)}
				</div>`)}
	</div>`},customElements.define(`cosmoz-omnitable-skeleton`,m(Xi,{styleSheets:[Yi]}))})),Qi,$i=e((()=>{g(),Zi(),ve(),o(),r(),A(),Qi=(e,t)=>{let{settingsConfig:r}=e,{processedItems:i,dataIsValid:o,filterIsTooStrict:s,loading:c,displayEmptyGroups:l,compareItemsFn:u,selectedItems:d,setSelectedItems:f,renderItem:p,renderGroup:m,error:h}=t;return n`${j(!c&&!o&&!h,()=>n`<div class="tableContent-empty">
					<slot name="empty-set-message">
						${ke({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
						<div class="tableContent-empty-message">
							<h3>${a(`Working set empty`)}</h3>
							<p>${a(`No data to display`)}</p>
						</div>
					</slot>
				</div>`)}
		${j(s,()=>n`<div class="tableContent-empty">
					${ke({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
					<div>
						<h3>${a(`Filter too strict`)}</h3>
						<p>${a(`No matches for selection`)}</p>
					</div>
				</div>`)}
		${j(c&&!i.length,()=>n`<div class="tableContent-empty overlay">
					<cosmoz-omnitable-skeleton
						.settingsConfig=${r}
					></cosmoz-omnitable-skeleton>
				</div>`)}
		${j(c&&i.length,()=>n`<div class="tableContent-empty overlay spinner">
					<cz-spinner></cz-spinner>
				</div>`)}
		${j(h,()=>n`<div class="tableContent-empty overlay">
					${_e({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
					<div class="tableContent-empty-message">
						<h3>${a(`Error loading data`)}</h3>
						<p>${h.message}</p>
					</div>
				</div>`)}
		<div class="tableContent-scroller" id="scroller" part="scroller">
			<cosmoz-grouped-list
				id="groupedList"
				.data=${i}
				.selectedItems=${d}
				@selected-items-changed=${C(f)}
				.displayEmptyGroups=${l}
				.compareItemsFn=${u}
				.renderItem=${p}
				.renderGroup=${m}
			></cosmoz-grouped-list>
			<slot name="extraContent"></slot>
		</div>`}})),ea,ta,na=e((()=>{v(),Fi(),ea=E`
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
	${Ni}
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
`,ta=E`
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
`})),ra,ia,aa=e((()=>{at(),g(),ra=e=>{let t=parseInt(e,10);return isFinite(t)?t:void 0},ia=e=>{let{config:t}=e,{settings:n,setSettings:r,collapsed:i,requestTween:a}=t,o=ut({collapsed:i,settings:n.columns,requestTween:a,setSettings:u(e=>r(t=>({...t,columns:e})),[r])});return{...t,onDown:u(e=>{e.target.closest(`.pull`)&&(o.handle=e.currentTarget)},[o]),onDragStart:u(e=>{let{target:t}=e,n=ra(t.dataset.index);if(!o.handle?.contains(t)||n==null)return e.preventDefault();o.handle=null,e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`omnitable/sort-index`,n),e.dataTransfer.setData(`text/plain`,n),setTimeout(()=>t.classList.add(`drag`),0),t.addEventListener(`dragend`,e=>e.target.classList.remove(`drag`),{once:!0})},[o]),onDragEnter:u(e=>{let t=e.currentTarget;t===e.target&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`,t.classList.add(`dragover`))},[]),onDragOver:u(e=>{e.preventDefault(),e.currentTarget.classList.add(`dragover`)},[]),onDragLeave:u(e=>{let t=e.currentTarget;t.contains(e.relatedTarget)||t.classList.remove(`dragover`)},[]),onDrop:u(e=>{let t=ra(e.dataTransfer.getData(`omnitable/sort-index`)),n=ra(e.currentTarget.dataset.index),{settings:r,setSettings:i,requestTween:a}=o;e.currentTarget.classList.remove(`dragover`),e.preventDefault();let s=r.slice();s.splice(n+(t>=n?0:-1),0,s.splice(t,1)[0]),a?.(),i(s)},[o]),onToggle:u(e=>{let{settings:t,setSettings:n,requestTween:r}=o,i=t.map(e=>({...e,disabled:e.disabled||o.collapsed?.some(t=>t.name===e.name)})),a=ra(e.target.closest(`[data-index]`)?.dataset.index);i.splice(a,1,{...t[a],disabled:!e.target.checked,priority:e.target.checked?t.reduce((e,t)=>Math.max(e,t.priority),0)+1:t[a].priority}),r?.(),n(i)},[o])}}})),oa,sa,ca,la,ua=e((()=>{nt(),lt(),v(),s(),g(),o(),A(),ii(),li(),na(),aa(),oa=[f({apply({availableHeight:e,elements:t}){Object.assign(t.floating.style,{maxHeight:`${Math.max(0,e)}px`})}}),...Te],sa=({onDragStart:e,onDragEnter:t,onDragOver:r,onDragLeave:i,onDrop:a,onDown:o,onToggle:s,collapsed:c,filters:l})=>(u,d)=>{let f=!!c?.find(e=>e.name===u.name),p=!u.disabled&&!f;return n` <div
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
			<button class="pull">${ti}</button>
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
		</div>`},ca=e=>{let{settings:t,settingsId:r,onSave:i,onReset:o,hasChanges:s,opened:c,setOpened:l,...u}=ia(e);return n` <div class="headline">
			${a(`Sort and filter`)}
			<button
				class="close"
				@click=${e=>{let t=e.currentTarget;t?.focus(),t?.blur()}}
			>
				${ei}
			</button>
		</div>

		<div class="contents">
			<div
				class="heading"
				?data-opened=${c.columns}
				@click=${()=>l(e=>({...e,columns:!e.columns}))}
				part="columns columns-heading"
			>
				${a(`Columns`)} ${ni}
			</div>
			<cosmoz-collapse
				?opened="${c.columns}"
				part="columns columns-content"
			>
				<div class="list">${t.columns?.map(sa(u))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${c.sort}
				@click=${()=>l(e=>({...e,sort:!e.sort}))}
			>
				${a(`Sort on`)} ${ni}
			</div>
			<cosmoz-collapse ?opened=${c.sort}> ${ci()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${c.group}
				@click=${()=>l(e=>({...e,group:!e.group}))}
				part="groups groups-heading"
			>
				${a(`Group on`)} ${ni}
			</div>
			<cosmoz-collapse ?opened=${c.group} part="groups groups-heading"
				>${si()}</cosmoz-collapse
			>
		</div>

		${j(r,()=>n`<div class="buttons">
					<button
						class="button reset"
						@click=${o}
						?disabled=${!s}
					>
						${a(`Reset`)}
					</button>
					<button class="button" @click=${i} ?disabled=${!s}>
						${a(`Save`)}
					</button>
				</div>`)}`},customElements.define(`cosmoz-omnitable-settings-ui`,m(ca,{styleSheets:[Xe(ea)]})),la=({config:e,newLayout:t})=>n`
	<cosmoz-dropdown
		.placement="${t?`bottom-start`:`bottom-end`}"
		.middleware="${oa}"
	>
		<div title="${a(`Sort and filter`)}" slot="button">
			${j(t,()=>n`<div class="headerDots">...</div>`,()=>n` <svg viewBox="0 0 24 24" width="24" fill="currentColor">
						<circle cx="10" cy="18" r="2"></circle>
						<circle cx="10" cy="12" r="2"></circle>
						<circle cx="10" cy="6" r="2"></circle>
					</svg>`)}
			${j(e?.badge,()=>n`<div class="badge"></div>`)}
		</div>
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${e}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`,customElements.define(`cosmoz-omnitable-settings`,m(la,{styleSheets:[Xe(ta)]}))})),da,fa,pa,ma,ha,ga=e((()=>{ct(),da=[`sortOn`,`descending`,`groupOn`,`groupOnDescending`],fa=e=>t=>typeof t==`object`&&!!t&&`name`in t&&t.name===e,pa=(e=[],t=[],n=[])=>{let r=t.filter(t=>e.some(fa(t.name))),i=e.filter(e=>e.name!=null&&!t.some(fa(e.name))&&!n.some(fa(e.name))),a=n.filter(e=>!t.some(fa(e.name)));return[...r,...a.flatMap(t=>{let n=e.find(e=>e.name===t.name);return n?{...t,title:n.title??t.title??``,minWidth:parseInt(n.minWidth??`0`,10)}:[]}),...i.map(e=>{let{name:t,title:n,priority:r,minWidth:i,width:a,flex:o}=e;return{name:t??``,title:n??``,priority:r??0,minWidth:parseInt(i??`0`,10),width:parseInt(a??`0`,10),flex:parseInt(o??`0`,10)}})]},ma=(e,t)=>({...t,...d(Array.from(da))(e),columns:e.columns?.map(d([`name`,`priority`,`width`,`flex`,`disabled`]))}),ha=({columns:e,settings:t,savedSettings:n,initial:r})=>({...Object.fromEntries(da.flatMap(e=>r?.[e]==null?[]:[[e,r[e]]])),...n?d(Array.from(da))(n):{},...t,columns:pa(e,t?.columns,n?.columns)})})),_a,va=e((()=>{_a=({prefix:e=`omnitable-`}={})=>({write:async(t,n)=>{let r=e+t;try{n?localStorage.setItem(r,JSON.stringify(n)):localStorage.removeItem(r)}catch(e){console.error(e)}},read:async t=>{if(!t)return null;try{let n=localStorage.getItem(e+t);return n==null?null:JSON.parse(n)}catch(e){return console.error(e),null}}})})),ya,ba,xa=e((()=>{g(),va(),ya=ae(_a),ba=()=>{let e=he(ya);return b(()=>e(),[e])}})),Sa=e((()=>{xa(),va()})),Ca,wa=e((()=>{g(),Sa(),ga(),Ca=(e,t,n,r)=>{let[i,a]=x(e?void 0:null),{read:o,write:s}=ba();return S(async()=>{e&&a(await o(e))},[e,o]),{settingsId:e,savedSettings:i,onSave:u(async()=>{if(!e)return;let r=ma(t,i);await s(e,r),n(),a(r)},[t,i]),onReset:u(async t=>{n(),t.shiftKey&&(await s(e),a(null)),r?.()},[r]),hasChanges:t!=null}}})),Ta,Ea=e((()=>{g(),G(),ga(),wa(),Ta=({settingsId:e,host:t})=>{let n=b(()=>Object.fromEntries(da.map(e=>[e,t[e]])),[]),r=ze(),i=u(()=>{r.current?.(n)},[n]),[a,o]=x(),[s,c]=x({columns:!0,sort:!0}),{savedSettings:l,...d}=Ca(e,a,o,i),{enabledColumns:f,disabledFiltering:p}=t,m=cn(t,{enabledColumns:f,disabledFiltering:p}),h=b(()=>ha({columns:m,settings:a,savedSettings:l,initial:n}),[m,a,l]),g=b(()=>h.columns.map(e=>m.find(t=>t.name===e.name)).filter(Boolean),[m,...h.columns.map(e=>e.name)]);return{...d,savedSettings:l,opened:s,setOpened:c,settings:h,columns:g,setSettings:o,resetRef:r}}})),Da=e((()=>{ua(),Ea()})),Oa,ka,Aa=e((()=>{Oa=e=>Number.isFinite(e)?e:0,ka=(e,t)=>{let n=[],[r,i]=e.reduce(([e,t],{width:n,flex:r})=>[e+n,t+r],[0,0]),a=t-r,o=Oa(a/i),s=0,c=0,l=0;for(let t=0;t<e.length;t++){let{width:i,minWidth:u,flex:d}=e[t];if(u>i+(a>=0?o*d:i*a/r)){s+=i,c+=u,l+=d,n[t]=u;continue}if(d===0){s+=i,c+=i,n[t]=i;continue}}r-=s,a=t-c-r,i-=l,o=Oa(a/i);for(let t=0;t<e.length;t++){if(n[t]!=null)continue;let{width:i,flex:s}=e[t];n[t]=i+(a>=0?o*s:i*a/r)}return n}})),ja,Ma,Na,Pa=e((()=>{Aa(),Wi(),ja=(e,t)=>{let n=Ui(e,e=>e!=null&&e>0),r=(e,t)=>`.cell[name="${e}"], cosmoz-omnitable-skeleton::part(cell-${e}){width: ${Math.floor(t)}px;padding: 0 min(3px, ${t/2}px)}`,i=e=>`cosmoz-omnitable-resize-nub[name="${e}"]{display:none}`,a=e=>`cosmoz-omnitable-resize-nub[name="${e}"], .cell[name="${e}"]{display:none}`;return t.map((t,o)=>{let s=e[o];if(s==null||s===0)return a(t.name);let c=r(t.name,s);return o===n?`${c}\n${i(t.name)}`:c}).join(`
`)},Ma=(e,t,n)=>{let r=e.filter(e=>!e.hidden),i=r.reduce((e,{width:t})=>e+t,0);if(r.length>1&&i>t)return Ma(r.slice(1),t,n);let a=r.reduce(([e,t],n,r)=>[Math.max(e,n.index),n.index>e?r:t],[-1,-1])[1];return a!==-1&&(r[a].flex=1),ka(r,t).reduce((e,t,n)=>(e[r[n].index]=t,e),Array(n).fill(void 0))},Na=(e,t)=>e.length===0?`.cell {display: none;}`:ja(e,t)})),Fa,Ia=e((()=>{g(),Fa=(e,t)=>S(()=>{let n=new ResizeObserver(([e])=>{e.contentRect?.width!==0&&t(e.contentRect.width-88)});return n.observe(e),()=>n.unobserve(e)},[])})),La,Ra=e((()=>{g(),Ia(),La=e=>{let[t,n]=x(()=>e.getBoundingClientRect().width-88);return Fa(e,n),t}})),za,Ba=e((()=>{g(),Pa(),za=({canvasWidth:e,groupOnColumn:t,config:n,miniColumn:r})=>b(()=>{if(!Array.isArray(n)||e==null||e===0)return[];let i=n.map((e,n)=>({minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,name:e.name,index:n,hidden:e.name===t?.name||e.disabled})).map(e=>r?{...e,hidden:r.name!==e.name}:e).sort(({index:e,priority:t},{index:n,priority:r})=>t===r?n-e:t-r);return Ma(i,e,i.length)},[e,t,n])})),Va,Ha=e((()=>{g(),Va=({host:e,canvasWidth:t,columns:n})=>{let r=e.miniBreakpoint??480,i=b(()=>t<=r,[t,r]),[a,...o]=b(()=>i?n?.filter(e=>e.mini!=null).sort((e,t)=>(e.mini??0)-(t.mini??0)):[],[n,i])??[],s=!!a;return S(()=>{e.toggleAttribute(`mini`,s)},[s]),{isMini:s&&i,miniColumn:a,miniColumns:o}}})),Ua,Wa=e((()=>{g(),Ua=({host:e,canvasWidth:t,layout:n,setSettings:r,requestTween:i})=>{let a=ze();a.current=e=>{i(),r(r=>{let i=r.columns,{detail:{newWidth:a,column:o}}=e,s=i.findIndex(e=>e.name===o.name),c=[],l=i.reduce((e,t)=>Math.max(e,t.priority),-1/0);for(let e=0;e<n.length;e++)if(c[e]={...i[e]},e<s&&n[e]&&(c[e].width=n[e],c[e].flex=0,c[e].priority=l),e===s){let r=n.reduce((e,t,n)=>n<s&&t?e-t:e,t);c[e].width=Math.min(r,Math.max(a,i[e].minWidth)),c[e].flex=0,c[e].priority=l}return{...r,columns:c}})},S(()=>{let t=e=>a.current?.(e);return e.addEventListener(`column-resize`,t),()=>e.removeEventListener(`column-resize`,t)},[])}})),Ga,Ka,qa,Ja=e((()=>{Ue(),at(),g(),Ga=(e,t)=>{let n=b(()=>{let t=!1,n,r=()=>{t&&(n=requestAnimationFrame(r),e()&&(t=!1))};return{start:()=>{t=!0,cancelAnimationFrame(n),n=requestAnimationFrame(r)},stop:()=>{t=!1,cancelAnimationFrame(n)}}},[]);S(()=>{n.start()},t),S(()=>()=>n.stop(),[])},Ka=(e=0,t=0)=>Math.abs(e-t)<.1,qa=(e,t=1.9,n=Pe,r)=>{let i=ut({target:e,speedFactor:t,onConverge:r});Ga(u(()=>{if(!i.tween)return i.tween=i.target,n(i.tween),i.onConverge?.(),!0;if(i.target.every((e,t)=>i.tween[t]===e))return n(i.tween),i.onConverge?.(),!0;if(i.tween=i.target.map((e,t)=>Ka(i.tween[t],e)?e:(i.tween[t]??0)+((e??0)-(i.tween[t]??0))/i.speedFactor||0),n(i.tween),i.tween.every((e,t)=>e===i.target[t]))return i.onConverge?.(),!0},[]),[e])}})),Ya,Xa,Za=e((()=>{at(),g(),Pa(),Ra(),Ba(),Ha(),Wa(),Ja(),Ya=e=>{let t=b(()=>new CSSStyleSheet,[]);return S(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,t]},[]),t},Xa=({host:e,columns:t,settings:n,setSettings:r,resizeSpeedFactor:i,sortAndGroupOptions:a})=>{let o=La(e),{isMini:s,miniColumn:c,miniColumns:l}=Va({host:e,canvasWidth:o,columns:t}),{groupOnColumn:d}=a,f=za({canvasWidth:o,groupOnColumn:d,miniColumn:c,config:n.columns}),p=Ya(e),m=b(()=>n.columns.reduce((e,n,r)=>f[r]!=null||n.name===d?.name||n.disabled?e:[...e,t.find(e=>e.name===n.name)],[]),[t,n,f]),[h,g]=x(1),_=u(()=>g(i??1.9),[i]),v=u(()=>g(1),[]),y=ut({columns:n.columns});return qa(f,h,e=>{let t=Na(e,y.columns);p.replace(t)},v),Ua({host:e,canvasWidth:o,layout:f,setSettings:e=>r(e(n)),requestTween:_}),{isMini:s,collapsedColumns:m,miniColumns:l,requestTween:_}}})),Qa,$a=e((()=>{Qa=({host:e,...t})=>{let{csvFilename:n=`omnitable.csv`,xlsxFilename:r=`omnitable.xlsx`,xlsxSheetname:i=`Omnitable`,topPlacement:a=`top-end`}=e;return{csvFilename:n,xlsxFilename:r,xlsxSheetname:i,topPlacement:a,...t}}})),eo,to=e((()=>{g(),eo=({host:e,selectedItems:t,data:n,sortAndGroupOptions:r,collapsedColumns:i,settings:a,filterFunctions:o,settingS:s,filters:c,requestTween:l,...u})=>{let d=n&&n.length>0&&t.length===n.length,f=t=>{t.target.checked?e.shadowRoot.querySelector(`#groupedList`).selectAll():e.shadowRoot.querySelector(`#groupedList`).deselectAll()},{groupOnColumn:p}=r,m=b(()=>[p,...i,...a.columns.filter(e=>e.disabled)].some(e=>e&&Object.keys(o).includes(e.name)),[o,a,i]),h=b(()=>({...s,collapsed:i,badge:m,filters:c,requestTween:l}),[s,i,m,c,l]);return S(()=>{let t=e.shadowRoot.querySelector(`#tableContent`),n=new ResizeObserver(t=>requestAnimationFrame(()=>{e.style.setProperty(`--ot-height`,t[0]?.contentRect.height+`px`)}));return n.observe(t),()=>n.unobserve(t)},[]),{allSelected:d,onAllCheckboxChange:f,data:n,settingsConfig:h,filters:c,groupOnColumn:p,sortAndGroup:r.sortAndGroup,...u}}})),no,ro,io,ao,oo,so,co=e((()=>{s(),g(),A(),Wi(),q(),no=n`
	<svg
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
	>
		<g>
			<path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
		</g>
	</svg>
`,ro=e=>e?`groupRow groupRow-folded`:`groupRow`,io=({item:e,index:t})=>r=>j(r?.length>0,()=>n`
				<div class="itemRow-minis" part="item-minis">
					${r.map(r=>n`<div
								class="itemRow-mini"
								part="item-mini item-mini-${r.name}"
							>
								${(r.renderMini??r.renderCell)(r,{item:e,index:t})}
							</div>`)}
				</div>
			`),ao=({columns:e,collapsedColumns:t,miniColumns:r,onItemClick:i,onCheckboxChange:a,dataIsValid:o,groupOnColumn:s,onItemChange:c,rowPartFn:l})=>(u,d,{selected:f,expanded:p,toggleCollapse:m})=>n`
		<div
			?selected=${f}
			part="${[`itemRow`,`itemRow-${u[Hi]}`,l?.(u,d)].filter(Boolean).join(` `)}"
			.dataIndex=${u[Hi]}
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
					${no}
				</button>
			</div>
			${io({item:u,index:d})(r)}
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
	`,oo=({onCheckboxChange:e,dataIsValid:t,groupOnColumn:r})=>(i,a,{selected:o,folded:s,toggleFold:c})=>n` <div
			class="${ro(s)}"
			part="groupRow groupRow-${i[Hi]}"
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
				${no}
			</button>
		</div>`,so=({host:e,error:t,dataIsValid:n,processedItems:r,columns:i,collapsedColumns:a,miniColumns:o,sortAndGroupOptions:s,rowPartFn:c,...l})=>{let{loading:d=!1,displayEmptyGroups:f=!1,compareItemsFn:p}=e,m=ze({shiftKey:!1,ctrlKey:!1}),h=u(t=>{let n=t.target.dataItem,r=t.target.checked;m.current.shiftKey?e.shadowRoot.querySelector(`#groupedList`).toggleSelectTo(n,r):m.current.ctrlKey?(t.target.checked=!0,e.shadowRoot.querySelector(`#groupedList`).selectOnly(n)):e.shadowRoot.querySelector(`#groupedList`).toggleSelect(n,r),t.preventDefault(),t.stopPropagation()},[]);S(()=>{let e=({shiftKey:e,ctrlKey:t})=>{m.current={shiftKey:e,ctrlKey:t}};return window.addEventListener(`keydown`,e),window.addEventListener(`keyup`,e),()=>{window.removeEventListener(`keydown`,e),window.removeEventListener(`keyup`,e)}},[]);let g=u(t=>{let n=t.composedPath();n.slice(0,n.indexOf(t.currentTarget)).find(e=>e.matches?.(`a, .checkbox, .expand`))||e.dispatchEvent(new window.CustomEvent(`omnitable-item-click`,{bubbles:!0,composed:!0,detail:{item:t.currentTarget.dataItem,index:t.currentTarget.dataIndex}}))},[]),{groupOnColumn:_}=s,v=u((t,n)=>r=>un(e,t,n,r),[]);return{...l,processedItems:r,dataIsValid:n,filterIsTooStrict:n&&r.length<1,loading:d,compareItemsFn:p,displayEmptyGroups:f,error:t,renderItem:b(()=>ao({columns:i,collapsedColumns:a,miniColumns:o,onItemClick:g,onCheckboxChange:h,dataIsValid:n,groupOnColumn:_,onItemChange:v,rowPartFn:c}),[i,a,g,h,n,_,v,c]),renderGroup:b(()=>oo({onCheckboxChange:h,dataIsValid:n,groupOnColumn:_}),[h,n,_])}}})),lo,uo=e((()=>{lo=(e,t)=>{if(e===t)return 0;if(e==null)return-1;if(t==null)return 1;let n=typeof e,r=typeof t;return n===`object`&&r===`object`?e.toString()<t.toString()?-1:1:n===`number`&&r===`number`?e-t:n===`string`&&r===`string`?e<t?-1:1:n===`boolean`&&r===`boolean`?e?-1:1:(console.warn(`unsupported sort`,n,e,r,t),0)}})),fo,po,mo,ho,go,_o,vo=e((()=>{Ue(),g(),uo(),G(),hi(),Wi(),fo=(e,t)=>(n,r)=>lo(e(n),e(r))*(t?-1:1),po=e=>e.replace(/([a-z0-9])([A-Z])/gu,`$1-$2`).toLowerCase(),mo=(e,t)=>{!e||!t||Object.entries(t).forEach(([t,n])=>{e[W].__ownChange=!0,e[W][t]=n,e[W].__ownChange=!1,e[W].dispatchEvent(new CustomEvent(`${po(t)}-changed`,{bubbles:!0,detail:{value:n}}))})},ho=(e,t)=>Object.assign(e,{[Hi]:t}),go=Symbol(`unparsed`),_o=({data:e,columns:t,hashParam:n,sortAndGroupOptions:r,noLocalSort:i,noLocalFilter:a})=>{let{groupOnColumn:o,groupOnDescending:s,sortOnColumn:c,descending:l}=r,d=u(([e,n])=>{let r=t.find(({name:t})=>t===e);return r==null?[e,void 0]:[e,n.filter&&r.serializeFilter(r,n.filter)]},[t]),f=u(([e,n])=>{let r=t.find(({name:t})=>t===e);if(r==null)return[e,{[go]:n}];let i={filter:r.deserializeFilter(r,n)};return mo(r,i),[e,i]},[t]),[p,m]=ui({},n,{multi:!0,suffix:`-filter--`,write:d,read:f}),h=u((e,n)=>m(r=>{let i=Ie(n,r[e]);return mo(t.find(t=>t.name===e),i),{...r,[e]:{...r[e],...i}}}),[t,m]),g=b(()=>Object.fromEntries(t.map(e=>[e.name,!e.noLocalFilter&&e.getFilterFn(e,p[e.name]?.filter)]).filter(([,e])=>!!e)),[t,...b(()=>Object.values(p).map(e=>e.filter),[p])]),_=b(()=>!Array.isArray(e)||e.length===0?[]:Object.entries(g).length===0||a?e.slice():e.filter(e=>Object.values(g).every(t=>t(e))),[e,g,a]),v=b(()=>{if(!i&&!o&&c!=null&&c.sortOn!=null)return _.slice().sort(fo(e=>c.getComparableValue({...c,valuePath:c.sortOn},e),l));if(o!=null&&o.groupOn!=null){let e=_.reduce((e,t)=>{let n=o.getComparableValue({...o,valuePath:o.groupOn},t);if(n===void 0)return e;let r=e.find(e=>e.id===n);return r?(r.items.push(t),e):(r={id:n,name:n,items:[t]},[...e,r])},[]);return e.sort(fo(e=>o.getComparableValue({...o,valuePath:o.groupOn},e.items[0]),s)),!c||i?e:e.filter(e=>Array.isArray(e.items)).map(e=>(e.items.sort(fo(e=>c.getComparableValue({...c,valuePath:c.sortOn},e),l)),e))}return _},[_,o,s,c,l,i]),y=b(()=>{let e=0,t=0,n=[];return v.forEach(r=>{if(Array.isArray(r.items)){ho(r,t++),r.items.forEach(t=>{ho(t,e++),n.push(t)});return}return ho(r,e++),n.push(r)},[]),n},[v]);return S(()=>{m(e=>Object.values(e).some(e=>e[go]!=null)?Object.fromEntries(Object.entries(e).map(([e,t])=>t[go]==null?[e,t]:f([e,t[go]]))):e)},[f]),{processedItems:v,visibleData:y,filters:p,filterFunctions:g,setFilterState:h}}})),yo,bo,xo=e((()=>{pe(),dt(),g(),yo=e=>{let t=t=>{let n=e.data.indexOf(t);if(n<0)return null;let r=e.data.splice(n,1);if(e.data=e.data.slice(),Array.isArray(r)&&r.length>0)return r[0]},n=(t,n)=>{e.data.splice(t,1,n),e.data=e.data.slice()};return{removeItem:t,removeItems(t){let n=[];for(let r=t.length-1;r>=0;--r){let i=e.removeItem(t[r]);i!=null&&n.push(i)}return n},replaceItemAtIndex:n,replaceItem(t,r){let i=e.data.indexOf(t);if(i>-1)return n(i,r)},selectItem(t){e.shadowRoot.querySelector(`#groupedList`).select(t)},selectAll(){e.shadowRoot.querySelector(`#groupedList`).selectAll()},deselectAll(){e.shadowRoot.querySelector(`#groupedList`).deselectAll()},deselectItem(t){e.shadowRoot.querySelector(`#groupedList`).deselect(t)},isItemSelected(t){return e.shadowRoot.querySelector(`#groupedList`).isItemSelected(t)}}},bo=({host:e,visibleData:t,filters:n,...r})=>{let{setFilterState:i}=r,a=b(()=>yo(e),[]),[o,s]=se(`selectedItems`,[]);y(r,Object.values(r)),y(a,Object.values(a)),S(()=>{let t=e=>i(e.detail.name,t=>({...t,...e.detail.state}));return e.addEventListener(`legacy-filter-changed`,t),()=>e.removeEventListener(`legacy-filter-changed`,t)},[]),l(`visibleData`,t),l(`sortedFilteredGroupedItems`,r.sortedFilteredGroupedItems),l(`sortOn`,r.sortOn),l(`descending`,r.descending),l(`isMini`,r.isMini);let c=b(()=>Object.fromEntries(Object.entries(n).filter(([,{filter:e}])=>e!==void 0).map(([e,{filter:t}])=>[e,t])),[n]);return l(`filters`,c,Object.values(c)),{selectedItems:o,setSelectedItems:s}}})),So,Co=e((()=>{Da(),Za(),$a(),to(),co(),vo(),xo(),xi(),So=e=>{let{hashParam:t,settingsId:n,data:r,resizeSpeedFactor:i,noLocal:a,noLocalSort:o=a,noLocalFilter:s=a,error:c,rowPartFn:l}=e,u=Ta({settingsId:n,host:e}),{settings:d,setSettings:f,columns:p,resetRef:m,savedSettings:h}=u,g=yi(p,t,{settings:d,setSettings:f,resetRef:m,ready:h!==void 0}),{processedItems:_,visibleData:v,filters:y,setFilterState:b,filterFunctions:ee}=_o({data:r,columns:p,hashParam:t,sortAndGroupOptions:g,noLocalSort:o,noLocalFilter:s}),{isMini:x,collapsedColumns:S,miniColumns:te,requestTween:ne}=Xa({host:e,columns:p,settings:d,setSettings:f,resizeSpeedFactor:i,sortAndGroupOptions:g}),re=r&&Array.isArray(r)&&r.length>0,{selectedItems:C,setSelectedItems:ie}=bo({host:e,visibleData:v,sortedFilteredGroupedItems:_,columns:p,filters:y,setFilterState:b,isMini:x,...g});return{header:eo({host:e,selectedItems:C,sortAndGroupOptions:g,dataIsValid:re,data:r,columns:p,filters:y,collapsedColumns:S,settings:d,filterFunctions:ee,settingS:u,setFilterState:b,hideSelectAll:e.hideSelectAll===!0,requestTween:ne}),list:so({host:e,error:c,dataIsValid:re,processedItems:_,selectedItems:C,setSelectedItems:ie,columns:p,collapsedColumns:S,miniColumns:te,sortAndGroupOptions:g,rowPartFn:l}),footer:Qa({host:e,selectedItems:C,setSelectedItems:ie,columns:p,enableSelectAll:e.hasAttribute(`enable-select-all`),matchingItemsCount:e.totalMatchingItems??v.length})}}})),wo=e((()=>{r(),customElements.define(`cosmoz-grouped-list-row`,class extends HTMLElement{get item(){return this._item}set item(e){this._item=e,this._render()}get index(){return this._index}set index(e){this._index=e,this._render()}get renderFn(){return this._renderFn}set renderFn(e){this._renderFn=e,this._render()}_render(){this._item==null||this._index==null||this._renderFn==null||i(this._renderFn(this._item,this._index),this)}})})),To,Eo,Do,Oo,ko,Ao,jo,Mo,No,Po=e((()=>{To={group:Symbol(`group`)},Eo=(e,t)=>(t.has(e)||t.set(e,{}),t.get(e)),Do=(e,t)=>!!Eo(e,t).expanded,Oo=(e,t)=>!!Eo(e,t).folded,ko=e=>e?e.items instanceof Array:!1,Ao=e=>{if(!Array.isArray(e)||e.length===0)return;let t=Array.isArray(e[0]?.items);if(!e.every(e=>Array.isArray(e.items)===t))throw Error(`Data must be homogeneous.`)},jo=(e,t,n)=>{if(Array.isArray(e))return Ao(e),e.reduce((e,r)=>{let i=r;return i.items?i.items.length?Eo(r,n).folded?e.concat(r):e.concat(r,i.items.map(e=>Object.assign(e,{[To.group]:r}))):t?e.concat(r):e:e.concat(r)},[])},Mo=(e,...t)=>typeof e==`function`?e(...t):e,No=(e,t)=>e===t})),Fo,Io=e((()=>{g(),Po(),Fo=()=>{let[e,t]=x(()=>[new WeakMap]);return{setItemState:u((e,n)=>t(([t])=>{let r=Eo(e,t);return Object.assign(r,Mo(n,r)),[t]}),[]),state:e[0],signal:e}}})),Lo,Ro=e((()=>{g(),Io(),Po(),Lo=()=>{let{setItemState:e,state:t,signal:n}=Fo();return{state:t,signal:n,toggleFold:u((t,n)=>{ko(t)&&e(t,e=>({folded:n===void 0?!e.folded:n}))},[]),toggleCollapse:u((t,n)=>{ko(t)||e(t,e=>({expanded:n===void 0?!e.expanded:!n}))},[])}}})),zo,Bo=e((()=>{g(),Wi(),Po(),zo=({compareItemsFn:e,data:t,flatData:n})=>{let[r,i]=se(`selectedItems`,()=>[]),[a,o]=x(),s=u(e=>r===Q||r.includes(e),[r]),c=u(e=>r===Q||(e?.items?.every(s)??!1),[r,s]),l=u(e=>s(e)||c(e),[s,c]),d=u(e=>{let t=e.items??[e];i(e=>e===Q?e:[...e,...t.filter(t=>!e.includes(t))]),o(e)},[]),f=u(e=>{let t=e.items??[e];i(e=>e===Q?e:e.filter(e=>!t.includes(e))),o(e)},[]),p=u(e=>{i(e.items?.slice()||[e]),o(e)},[]),m=u(()=>{i(t.flatMap(e=>e.items||e)),o(void 0)},[t]),h=u(()=>{i([]),o(void 0)},[]),g=u((e,t=!l(e))=>t?d(e):f(e),[l]),_=u((t,r)=>{if(!n)return;let i=a?n.findIndex(t=>e(t,a)):-1;if(i<0)return g(t,r);let[s,c]=[i,n.indexOf(t)].sort((e,t)=>e-t);n.slice(s,c+1).forEach((e,t,n)=>{t>0&&t<n.length-1&&ko(e)||g(e,r)}),o(t)},[n,e,g]);return S(()=>i(t=>t!==Q&&t.length>0&&n?n.filter(n=>t.find(t=>e(n,t))):t),[n]),{selectedItems:r,isItemSelected:s,isGroupSelected:c,isSelected:l,select:d,deselect:f,selectOnly:p,selectAll:m,deselectAll:h,toggleSelect:g,toggleSelectTo:_}}})),Vo,Ho,Uo,Wo=e((()=>{de(),pe(),g(),r(),wo(),Ro(),Bo(),Po(),Vo={host:{position:`relative`,display:`flex`,flexDirection:`column`}},Ho=e=>{let{data:t,renderItem:n,renderGroup:r,displayEmptyGroups:i,compareItemsFn:a=No}=e,{toggleFold:o,toggleCollapse:s,state:c,signal:l}=Lo(),d=b(()=>jo(t,i,c),[t,i,l]),{selectedItems:f,isItemSelected:p,isGroupSelected:m,isSelected:h,select:g,deselect:_,selectOnly:v,selectAll:ee,deselectAll:x,toggleSelect:S,toggleSelectTo:te}=zo({compareItemsFn:a,data:t,flatData:d}),ne=u((e,t)=>Array.isArray(e.items)?r(e,t,{selected:m(e),folded:Oo(e,c),toggleSelect:t=>S(e,typeof t==`boolean`?t:void 0),toggleFold:()=>o(e)}):n(e,t,{selected:p(e),expanded:Do(e,c),toggleSelect:t=>S(e,typeof t==`boolean`?t:void 0),toggleCollapse:()=>s(e)}),[n,r,f,S,l]);ue(()=>{Object.assign(e.style,Vo.host)},[]);let re={toggleFold:o,toggleCollapse:s,isItemSelected:p,isGroupSelected:m,isSelected:h,select:g,deselect:_,selectOnly:v,selectAll:ee,deselectAll:x,toggleSelect:S,toggleSelectTo:te};return y(re,Object.values(re)),{renderRow:ne,flatData:d}},Uo=({renderRow:e,flatData:t})=>h({items:t,renderItem:(t,r)=>n`<cosmoz-grouped-list-row
				.item=${t}
				.index=${r}
				.renderFn=${e}
			></cosmoz-grouped-list-row>`})})),Go,Ko=e((()=>{g(),Wo(),Go=e=>Uo(Ho(e)),customElements.define(`cosmoz-grouped-list`,m(Go,{useShadowDOM:!1}))})),qo=e((()=>{Ko()})),Jo,Yo,Xo,Zo=e((()=>{$e(),Ot(),Yr(),Zr(),wi(),ki(),Mi(),g(),tt(),r(),fe(),Fi(),Ki(),Ji(),$i(),Co(),qo(),Jo=e=>window.ShadyCSS?.ApplyShim?.transformCssText?.(e)||e,Yo=e=>{let{header:t,list:r,footer:i}=So(e);return n`
		<style>
			${st([],()=>Jo(Pi))}
		</style>

		<div class="mainContainer">
			${qi(t)}
			<div class="tableContent" id="tableContent">
				${Qi(t,r)}
			</div>
			${Gi(i)}
		</div>

		<div id="columns">
			<slot id="columnsSlot"></slot>
		</div>
	`},customElements.define(`cosmoz-omnitable`,m(Yo,{observedAttributes:[`hash-param`,`sort-on`,`group-on`,`descending`,`group-on-descending`,`hide-select-all`,`settings-id`,`no-local`,`no-local-sort`,`no-local-filter`,`disabled-filtering`,`loading`,`mini-breakpoint`,`inline`,`enable-select-all`]})),Xo=`
	<slot name="actions" slot="actions"></slot>
`,n(Object.assign([Xo],{raw:[Xo]})),qe(Object.assign([Xo],{raw:[Xo]}))})),Qo,$,$o,es,ts,ns=e((()=>{Qo=(e,t,n)=>{let r=String(e),i=-1,a=!n&&n!==0?` `:n,o=t-r.length;for(;++i<o;)r=a+r;return r},$=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,$o=()=>`2015-`+Qo($(1,12),2,`0`)+`-`+Qo($(1,28),2,`0`),es=()=>{let e=$(0,20);return e===1?new Date(2015,3,2,14,26,10,299):e===2?new Date(2016,4,2,10,9,10,444):e===3?new Date(2016,4,2,10,9,10,443):e===4?new Date(2016,4,2,10,9,10,442):new Date($(2014,2017),$(1,12),$(1,28),$(0,23),$(0,59),$(0,59),$(0,999))},ts=(e,t,n)=>{let r=$(e,t),i=[],a=[`Lorem ipsum dolor sit amet`,`Nunc tristique`,`Curabitur vestibulum`,`Cras laoreet`,`Himenaeos`,`maximus diam purus at mauris`],o=[`SEK`,`USD`,`EUR`,`AUD`],s=0;for(let e=0;e<r;e+=1){let t=`Group `+e,r=e*2+1;for(let e=0;e<r;e+=1){let r=[],c=[],l=[],u=s%10;for(let e=0;e<u;e+=1)r.push(`Item `+e),c.push({name:`Item `+e,value:`item-value-`+e}),l.push({value:`cat-`+e,label:`Category `+e});i.push({id:s,name:t+` item `+e,value:$(0,1e4),bool:$(0,100)>50,object:{value:$(0,1e4),label:`Random string `+$(1,n)},sub:{subProp:a[s%a.length]},randomString:`Random string `+$(1,n),randomString2:`Random string 2 `+$(1,n),randomString3:`Random string 3 `+$(1,n),randomString4:`Random string 4 `+$(1,n),date:es(),dateJSON:$o(),amount:{amount:$(10,100),currency:o[s%o.length]},group:t,list:r,objectList:c,categories:s%7==0?null:l}),s+=1}}return i}})),rs,is,as,os,ss;e((()=>{r(),ve(),pt(),Zo(),ns(),rs={title:`Components/ComsmozOmnitableFullDemo`,component:`cosmoz-omnitable`,tags:[`autodocs`],args:{loading:!1,locale:`en`,sortOn:``,groupOn:``,descending:!1,groupOnDescending:!1,hashParam:``,settingsId:``,selectedItems:[],disabledFiltering:!1,enableSelectAll:!1},argTypes:{loading:{control:`boolean`,description:`Show loading state`,table:{defaultValue:{summary:`false`}}},locale:{control:`select`,options:[`en`,`fr`,`sv`],description:`Language locale`,table:{defaultValue:{summary:`en`}}},selectedItems:{control:`object`,description:`Show selected items`},data:{control:`object`,description:`Show specified items`},sortOn:{control:`text`,description:`Column property name to sort on (e.g., "amount", "date", "id")`},groupOn:{control:`text`,description:`Column property name to group on (e.g., "amount", "date", "id")`},descending:{control:`boolean`,description:`Sort on descending`},groupOnDescending:{control:`boolean`,description:`Group on descending`},hashParam:{control:`text`,description:`Hash parameter for URL state management`},settingsId:{control:`text`,description:`ID for storing table settings`},disabledFiltering:{control:`boolean`,description:`Disable filter inputs in all column headers`,table:{defaultValue:{summary:`false`}}}},render:e=>n`
            <style>
                cosmoz-omnitable {
                    min-height: 400px;
                }
            </style>

            <cosmoz-omnitable
                id="omnitable"
                .loading=${e.loading}
                .data=${e.data}
                .selectedItems=${e.selectedItems}
                hash-param=${e.hashParam}
                sort-on=${e.sortOn}
                group-on=${e.groupOn}
                .descending=${e.descending}
                .group-on-descending=${e.groupOnDescending}
                settings-id=${e.settingsId}
                ?disabled-filtering=${e.disabledFiltering}
                ?enable-select-all=${e.enableSelectAll}
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
                    locale=${e.locale}
                    rates='{"EUR": 1, "USD":0.8169982616, "AUD":0.6529827192, "SEK": 0.1019271438}'
                ></cosmoz-omnitable-column-amount>

                <cosmoz-omnitable-column-date
                    title="Date"
                    name="date"
                    value-path="date"
                    locale=${e.locale}
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
                    locale=${e.locale}
                ></cosmoz-omnitable-column-date>

                <cosmoz-omnitable-column-time
                    title="Time"
                    name="time"
                    value-path="date"
                    locale=${e.locale}
                ></cosmoz-omnitable-column-time>

                <cosmoz-omnitable-column-datetime
                    title="Datetime"
                    name="datetime"
                    value-path="date"
                    locale=${e.locale}
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
                    locale=${e.locale}
                    priority="1"
                ></cosmoz-omnitable-column-number>

                <paper-button slot="actions" on-run="removeItems">
                    ${le({styles:`vertical-align: middle; fill: currentColor;`})}
                    <span>Remove items</span>
                </paper-button>
            </cosmoz-omnitable>
        `,play:async()=>{console.log(`Current hash:`,window.location.hash)}},is={args:{data:ts(10,10,10)}},as={args:{data:ts(2,2,10)}},os={args:{data:[]}},is.parameters={...is.parameters,docs:{...is.parameters?.docs,source:{originalSource:`{
  args: {
    data: generateTableDemoData(10, 10, 10)
  }
}`,...is.parameters?.docs?.source}}},as.parameters={...as.parameters,docs:{...as.parameters?.docs,source:{originalSource:`{
  args: {
    data: generateTableDemoData(2, 2, 10)
  }
}`,...as.parameters?.docs?.source}}},os.parameters={...os.parameters,docs:{...os.parameters?.docs,source:{originalSource:`{
  args: {
    data: []
  }
}`,...os.parameters?.docs?.source}}},ss=[`TableWithLargeData`,`TableWithSmallData`,`TableWithNoData`]}))();export{is as TableWithLargeData,os as TableWithNoData,as as TableWithSmallData,ss as __namedExportsOrder,rs as default};