import{n as e}from"./chunk-BneVvdWh.js";import{J as t,Q as n,Y as r,Z as i}from"./iframe-BgW9Zewp.js";import{$ as a,A as o,At as s,B as c,Bt as l,C as u,Ct as d,D as f,Dt as p,E as m,Et as h,F as g,Ft as _,G as v,Gt as ee,H as te,Ht as y,I as ne,It as b,J as re,K as ie,L as ae,Lt as oe,M as se,Mt as ce,N as le,Nt as x,O as ue,Ot as de,P as fe,Pt as S,Q as pe,R as C,Rt as me,S as w,St as he,T as ge,Tt as _e,U as T,Ut as E,V as ve,Vt as ye,W as be,Wt as xe,X as D,Y as Se,Z as Ce,_ as we,_t as Te,a as Ee,at as O,b as De,bt as Oe,c as ke,ct as Ae,d as je,dt as k,et as Me,f as Ne,ft as A,g as Pe,gt as Fe,h as Ie,ht as Le,i as Re,it as ze,j as Be,jt as j,k as Ve,kt as He,l as Ue,lt as We,m as Ge,mt as Ke,n as qe,nt as Je,o as Ye,ot as M,p as Xe,pt as Ze,q as N,r as Qe,rt as $e,s as et,st as tt,t as nt,tt as rt,u as it,ut as at,v as ot,vt as st,w as ct,wt as lt,x as ut,xt as dt,y as ft,yt as pt,z as P,zt as mt}from"./dist-Z1uNlCdZ.js";var ht,gt=e((()=>{h(),ht=()=>i`<style>
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
</style>`,customElements.define(`cz-spinner`,p(ht))})),_t,vt,yt=e((()=>{N(),h(),_t=D`
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
`,vt=()=>i`
	<style>
		${_t}
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
`,customElements.define(`cosmoz-clear-button`,p(vt))})),F,bt,xt,St,Ct,I,L=e((()=>{A(),F=({valuePath:e},t)=>k(t,e),bt=F,xt=F,St=({valuePath:e},t)=>n=>{let r=k(n,e);return r==null?!1:r.toString().toLowerCase().trim().includes(t.toLowerCase().trim())},Ct=(e,t)=>t===``||t==null?null:t,I=e=>class extends e{static get properties(){return{isOmnitableColumn:{type:Boolean,value:!0},title:{type:String},valuePath:{type:String,notify:!0},values:{type:Array,notify:!0},filter:{type:Object},noLocalFilter:{type:Boolean},disabled:{type:Boolean,value:!1,notify:!0},editable:{type:Boolean,notify:!0},loading:{type:Boolean,value:!1,notify:!0},externalValues:{type:Boolean,value:!1,notify:!0},name:{type:String},sortOn:{type:String},groupOn:{type:String},noSort:{type:Boolean,value:!1},disabledFiltering:{type:Boolean,value:!1},width:{type:String,value:`75px`},minWidth:{type:String,value:`40px`},flex:{type:String,value:`1`},cellClass:{type:String,value:`default-cell`},headerCellClass:{type:String,value:`default-header-cell`},priority:{type:Number,value:0},hidden:{type:Boolean,notify:!0},preferredDropdownHorizontalAlign:{type:String,value:`right`},renderHeader:{type:Function},renderCell:{type:Function},renderEditCell:{type:Function},renderGroup:{type:Function},mini:{type:Number,value:null},renderMini:{type:Function}}}static get observers(){return[`notifyFilterChange(filter)`]}notifyFilterChange(e){this.__ownChange||this.dispatchEvent(new CustomEvent(`legacy-filter-changed`,{detail:{name:this.name,state:this.legacyFilterToState(e)},bubbles:!0}))}legacyFilterToState(e){return{filter:e}}getFilterFn(){}getString(e,t){return F(e,t)}toXlsxValue(e,t){return bt(e,t)}cellTitleFn(e,t){return this.getString(e,t)}headerTitleFn(e){return e.title}serializeFilter(e,t){return Ct(e,t)}deserializeFilter(e,t){return t==null?null:typeof t==`string`?window.decodeURIComponent(t):t}getComparableValue(e,t){return xt(e,t)}computeSource(e,t){return t}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n),this.dispatchEvent(new CustomEvent(`cosmoz-column-prop-changed`,{bubbles:!0}))}}})),wt,Tt,Et,Dt,Ot,kt,At,jt=e((()=>{c(),yt(),M(),n(),y(),L(),wt=e=>t=>e(n=>{if(n.inputValue===void 0&&t.target.value===``)return n;clearTimeout(n.t);let r=setTimeout(()=>e(e=>({...e,filter:e.inputValue})),1e3);return{...n,inputValue:t.target.value,t:r}}),Tt=e=>()=>e(e=>({...e,filter:e.inputValue})),Et=e=>t=>{t.keyCode===13&&(t.preventDefault(),e(e=>({...e,filter:e.inputValue})))},Dt=e=>t=>e(e=>({...e,headerFocused:t.detail.value})),Ot=e=>()=>e(e=>({...e,filter:null,inputValue:null})),kt=e=>e!=null&&e!==``,At=class extends I(O){static get properties(){return{minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},inputValue:{type:Object,notify:!0}}}getFilterFn(e,t){if(!(t==null||t===``))return St(e,t)}renderCell(e,{item:t}){return i`<span class="default-column">${F(e,t)}</span>`}renderEditCell(e,{item:t},n){return i`<cosmoz-input
			no-label-float
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${F(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,inputValue:n,headerFocused:r},a){return i`<cosmoz-input
			label=${e.title}
			?disabled=${e.disabledFiltering}
			.value=${n??t}
			@value-changed=${wt(a)}
			focused=${r}
			@focused-changed=${Dt(a)}
			@keydown=${Et(a)}
			@blur=${Tt(a)}
		>
			${E(!e.disabledFiltering,()=>i`<cosmoz-clear-button
						suffix
						slot="suffix"
						?visible=${kt(t)}
						light
						@click=${Ot(a)}
					></cosmoz-clear-button>`)}
		</cosmoz-input>`}legacyFilterToState(e){return{filter:e,inputValue:e}}},customElements.define(`cosmoz-omnitable-column`,At)})),Mt,Nt,Pt,R=e((()=>{c(),h(),n(),Mt=[`label`,`value`,`slot`,`always-float-label`,`disabled`],Nt=oe`
	${ie}

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
`,Pt=e=>{let{label:t,value:n,slot:r}=e;return $e(i`<div
		id="input"
		part="input"
		role="button"
		class="control"
		slot=${r}
	>
		${n||``}
	</div>`,{label:t})},customElements.define(`cosmoz-omnitable-dropdown-input`,p(Pt,{observedAttributes:Mt,styleSheets:[Nt]}))})),z,Ft=e((()=>{st(),n(),ae(),R(),z=({title:e,tooltip:t=``,filterText:n=``,onOpenedChanged:r,content:a,horizontalAlign:o=`left`,externalValues:s=null})=>i`
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
			class=${ne({filtered:!!n,...s!=null&&{[`external-values-${s}`]:!0},dropdown:!0})}
			title=${t||``}
		>
			<cosmoz-omnitable-dropdown-input
				class="input"
				slot="button"
				.label=${e}
				.placeholder=${e}
				.value=${n??``}
				text-align=${o}
				?always-float-label=${n?.length>0}
			></cosmoz-omnitable-dropdown-input>
			<div class="dropdown-content">${a}</div>
		</cosmoz-dropdown>
	`})),It,Lt,Rt=e((()=>{Le(),We(),g(),se(),It=e=>e?typeof e.close==`function`?e:It(e.parentElement):null,Lt=e=>class extends e{static get properties(){return{disabled:{type:Boolean,value:!1},filter:{type:Object,notify:!0},values:{type:Array,value(){return[]}},headerFocused:{type:Boolean,notify:!0},min:{type:Number,value:null},max:{type:Number,value:null},limits:{type:Function},autoupdate:{type:String,value:!0},locale:{type:String,value:null},_filterInput:{type:Object,value(){return{min:null,max:null}}},_range:{type:Object,computed:`_computeRange(values.*)`},_limit:{type:Object,computed:`_computeLimit(_range, _filterInput.*, min, max)`,value(){return{}}},_tooltip:{type:String,computed:`_computeTooltip(title, _filterText)`},_fromClasses:{type:String,computed:`_computeInputClasses(_filterInput.min)`},_toClasses:{type:String,computed:`_computeInputClasses(_filterInput.max)`}}}static get observers(){return[`_filterInputChanged(_filterInput.*, autoupdate)`,`_filterChanged(filter.*)`,`_updateLimits(limits, headerFocused)`]}disconnectedCallback(){this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),super.disconnectedCallback()}_computeInputClasses(e){return e!=null&&e!==``?`has-value`:``}toNumber(e,t,n){if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=this.toNumber(t);return i==null?r:n(r,i)}toValue(){return this.toNumber.apply(this,arguments)}getComparableValue(e,t){if(e==null)return;let n=e;return t!=null&&(n=this.get(t,e)),this.toValue(n)}renderValue(){}getInputString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return this._toInputString(n)}_computeRange(e){let t=e.base,n=Array.isArray(t)&&t.length&&t.map(e=>this.toValue(e)).filter(e=>e!=null);return!n||n.length<1?{min:null,max:null}:n.reduce((e,t)=>({min:this.toValue(t,e.min,Math.min),max:this.toValue(t,e.max,Math.max)}),{})}_computeLimit(e,t,n,r){if(!e)return;let i=t.base,a=this.toValue(n),o=this.toValue(r),s=a??this.toValue(e.min),c=o??this.toValue(e.max);return{fromMin:s,fromMax:this.toValue(c,this._fromInputString(i.max,`max`),Math.min),toMin:this.toValue(s,this._fromInputString(i.min,`min`),Math.max),toMax:c}}_computeFilterText(e){if(e.base==null)return;let t=e.base,n=this.toValue(t.min),r=this.toValue(t.max),i=[];return n!=null&&i.push(this.renderValue(n)),i.push(` - `),r!=null&&i.push(this.renderValue(r)),i.length>1?i.join(``):void 0}_computeTooltip(e,t){return t==null?e:`${e}: ${t}`}_fromInputString(e){return this.toValue(e)}_toInputString(e){return this.toValue(e)??null}_getDefaultFilter(){return{min:null,max:null}}_filterInputChanged(e,t){this.__inputChangePath=e.path.split(`.`)[1]||null,t&&(this._limitInputDebouncer=le.debounce(this._limitInputDebouncer,at.after(600),()=>{this._limitInput(),this._updateFilter()}),fe(this._limitInputDebouncer))}_clearFrom(){this.set(`_filterInput.min`,null),this._updateFilter()}_clearTo(){this.set(`_filterInput.max`,null),this._updateFilter()}_onBlur(){this._limitInput(),this._updateFilter()}_onKeyDown(e){let t=e.currentTarget,n=Array.from(t.parentElement.querySelectorAll(`cosmoz-input`)),r=n[n.findIndex(e=>e===t)+1],i=!r,a=n[0]===t;switch(e.keyCode){case 13:if(e.preventDefault(),!i)r.focus();else{let e=this._limitInput();this._updateFilter(),e||this._closeParent(t)}break;case 9:(i&&!e.shiftKey||a&&e.shiftKey)&&this._closeParent(t)}}_closeParent(e){let t=It(e);t&&t.close()}_onDropdownOpenedChanged({currentTarget:e,type:t,detail:n}){(t===`focus`||n?.value===!0)&&setTimeout(()=>{e.querySelector(`cosmoz-input:focus`)||e.querySelector(`cosmoz-input`)?.focus()},100)}_limitInput(){let e=this._filterInput,t=this.__inputChangePath,n=t?this._fromInputString(this.get(t,e),t):null;if(this.__inputChangePath=null,n==null)return!1;let r=this._limit,i=t===`min`?`from`:`to`,a=this.get(i+`Min`,r),o=this.get(i+`Max`,r),s=this.toValue(n,a,Math.max),c=this.toValue(s,o,Math.min);return this.getComparableValue(n)===this.getComparableValue(c)?!1:(this.set([`_filterInput`,t],this._toInputString(c,t)),this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),!0)}_updateFilter(){let e=this._filterInput,t=this.filter,n=this._fromInputString(e.min,`min`),r=this._fromInputString(e.max,`max`);this.getComparableValue(n)===this.getComparableValue(t,`min`)&&this.getComparableValue(r)===this.getComparableValue(t,`max`)||this.set(`filter`,{min:n,max:r})}_filterChanged(e){if(this._filterInput==null)return;let t=this._filterInput,n=e.base,r=this._fromInputString(t.min,`min`),i=this._fromInputString(t.max,`max`);this.getComparableValue(r)===this.getComparableValue(n,`min`)&&this.getComparableValue(i)===this.getComparableValue(n,`max`)||(this.set(`_filterInput`,{min:this._toInputString(n.min),max:this._toInputString(n.max)}),this._limitInputDebouncer&&this._limitInputDebouncer.cancel())}hasFilter(){let e=this.filter;return e==null?!1:this.toValue(e.min)!=null||this.toValue(e.max)!=null}resetFilter(){this.filter=this._getDefaultFilter()}_updateLimits(e,t){e&&Promise.resolve(Fe(e,{active:t})).then(e=>{let{min:t,max:n}=e??{};Object.assign(this,{...t==null?{}:{min:t},...n==null?{}:{max:n}})})}}})),B,zt=e((()=>{M(),n(),B=e=>class extends e{static get template(){return tt`<div id="output" style="position:relative;"></div>`}connectedCallback(){super.connectedCallback(),r(this.render(),this.$.output)}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n),requestAnimationFrame(()=>r(this.render(),this.$.output))}}})),Bt,Vt=e((()=>{c(),M(),C(),n(),y(),Ft(),R(),Rt(),zt(),Bt=class extends Lt(B(O)){static get properties(){return{currency:{type:String},autodetect:{type:Boolean,value:!1},rates:{type:Object},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, _formatters)`},headerFocused:{type:Boolean,value:!1}}}static get observers(){return[`_valuesChanged(autodetect, currency, values)`]}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return i`
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
			${E(!this.disabled,()=>i`<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>`)}
			${E(this.disabled,()=>i`
					<cosmoz-omnitable-dropdown-input
						disabled
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>z({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:i`
							<h3 style="margin: 0;">${this.title}</h3>
							<cosmoz-input
								class=${this._fromClasses}
								type="number"
								title=${P(`Minimum amount`)}
								label=${P(`Min amount`)}
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
								title=${P(`Maximum amount`)}
								label=${P(`Max amount`)}
								.value=${this._filterInput?.max}
								@value-changed=${e=>{this.set(`_filterInput.max`,e.detail.value)}}
								@blur=${e=>this._onBlur(e)}
								@keydown=${e=>this._onKeyDown(e)}
								min=${this._toInputStringAmount(this._limit.toMin)}
								max=${this._toInputStringAmount(this._limit.toMax)}
							>
								<div slot="suffix" suffix>${this.filter?.max?.currency}</div>
							</cosmoz-input>
						`}))}
		`}_valuesChanged(e,t,n){if(!Array.isArray(n)||n.length<1||!e&&t)return;let r=n.reduce((e,t)=>{if(t.currency){let n=t.currency;e[n]=(e[n]||0)+1}return e},{}),i=Object.keys(r)[0];Object.keys(r).reduce((e,t)=>{let n=Math.max(e,r[t]);return n===r[t]&&(i=t),n},0),this.set(`currency`,i)}toAmount(e,t,n){if(e==null||e===``)return;if(typeof e!=`object`||e.currency==null||e.currency===``)return null;let r=this.toNumber(e.amount);if(r==null||Number.isNaN(r))return null;let i={currency:e.currency,amount:r};if(n==null||t==null)return i;let a=this.toAmount(t);if(a==null)return i;let o=this.rates||{},s=i.amount*(o[i.currency]||1),c=a.amount*(o[a.currency]||1);return this.toNumber(s,c,n)===s?i:a}toValue(){return this.toAmount.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n==null)return;let r=this.toNumber(n.amount),i=this.rates;return i==null?r:r*(i[n.currency]||1)}getString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return n===void 0?``:n===null?`Invalid value`:this.renderValue(n)}getCurrency(e,t){let n=this.get(t,e);return n&&n.currency}getFormatter(e,t){let n=e+(t||``)||``,r=this._formatters=this._formatters||{};return r[n]||(r[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),r[n]}renderValue(e){let t=this.toAmount(e);return t==null?``:this.getFormatter(t.currency,this.locale).format(e.amount)}_amountValueChanged(e){let t=e.target.value,n=e.model.item,r=this.get(this.valuePath,n),i={amount:Number(t),currency:r.currency};this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toInputString(e){let t=this.toValue(e);return t==null?null:this.toNumber(t.amount)}_toInputStringAmount(e){let t=this.rates;if(t==null)return this._toInputString(e);let n=this.toValue(e);return n==null?null:(this.toNumber(n.amount)*(t[n.currency]||1)/(t[this.currency]||1)).toFixed(2)}_fromInputString(e,t){let n=this.toNumber(e);if(n!=null)return this.toValue({amount:n,currency:t&&this.get([`filter`,t,`currency`])||this.currency})}},customElements.define(`cosmoz-omnitable-amount-range-input`,Bt)})),V,Ht,Ut,Wt,H,Gt,Kt,qt,Jt=e((()=>{A(),Ve(),V=(e,t,n)=>{if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=V(t);return i==null?r:n(r,i)},Ht=e=>{let t=V(e);return t==null?null:t.toString()},Ut=({valuePath:e},t)=>Ht(V(e?k(t,e):t)),Wt=e=>Ht(e)??``,H=({valuePath:e,maximumFractionDigits:t},n)=>{if(n==null)return;let r=V(e?k(n,e):n);if(r!=null)return t===null?r:V(r.toFixed(t))},Gt=Be((e,t,n)=>{let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}),Kt=({valuePath:e,locale:t,minimumFractionDigits:n,maximumFractionDigits:r},i)=>{let a=e?k(i,e):i;if(a==null)return``;let o=V(a);if(o!=null)return Gt(t,n,r).format(o)},qt=(e,t)=>n=>{let r=H(e,n);if(r==null)return!1;let i=H({...e,valuePath:`min`},t),a=H({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})),U,W,Yt,Xt,Zt,Qt,$t,en,tn,nn,rn,an=e((()=>{A(),Jt(),U=(e={},t,n,r)=>{if(t==null||t===``)return;if(typeof t!=`object`||t.currency==null||t.currency===``)return null;let i=V(t.amount);if(i==null||Number.isNaN(i))return null;let a={currency:t.currency,amount:i};if(r==null||n==null)return a;let o=U(e,n);if(o==null)return a;let s=a.amount*(e[a.currency]||1);return V(s,o.amount*(e[o.currency]||1),r)===s?a:o},W=({valuePath:e,rates:t},n)=>{if(n==null)return;let r=n;e!=null&&(r=k(n,e));let i=U(t,r);if(i==null)return;let a=V(i.amount);return t==null||a==null?a:a*(t?.[i.currency]||1)},Yt=(e,t)=>n=>{let r=W(e,n);if(r===void 0)return!1;let i=W({...e,valuePath:`min`},t),a=W({...e,valuePath:`max`},t);return i===void 0||a===void 0?!0:!(r<i||r>a)},Xt={},Zt=(e,t)=>{let n=e+(t||``)||``;return Xt[n]||(Xt[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),Xt[n]},Qt=(e,t,n)=>{let r=U(e,t);return r==null?``:Zt(r.currency,n).format(r.amount)},$t=({valuePath:e,rates:t,locale:n},r)=>{let i=U(t,e?k(r,e):void 0);return i===void 0?``:i===null?`Invalid value`:Qt(t,i,n)},en=e=>e?e.amount+e.currency:``,tn=e=>{if(e==null||e===``)return;let t=e.match(/^(-?[\d]+)([\D]+?)$/iu);if(!(!Array.isArray(t)||t.length<0))return{amount:Number(t[1]),currency:t[2]}},nn=({valuePath:e},t)=>e?k(t,e)?.currency:null,rn=({valuePath:e},t)=>e?k(t,e)?.amount:void 0})),G,on,sn,cn,ln,un,dn,K=e((()=>{Ve(),h(),G=Symbol(`column`),on=e=>{let t=!0,n=e.map(e=>e.name);return e.forEach(e=>{e.name??(t=!1,console.error(`The name attribute needs to be set on all columns! Missing on column`,e))}),e.forEach(e=>{n.indexOf(e.name)!==n.lastIndexOf(e.name)&&(t=!1,console.error(`The name attribute needs to be unique among all columns! Not unique on column`,e))}),t},sn=(e,t)=>{let n=e.valuePath??e.name;return{name:e.name,title:e.title,valuePath:n,groupOn:e.groupOn??n,sortOn:e.sortOn??n,noSort:e.noSort,disabledFiltering:t||e.disabledFiltering,minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,getString:e.getString,getComparableValue:e.getComparableValue,serializeFilter:e.serializeFilter,deserializeFilter:e.deserializeFilter,toXlsxValue:e.toXlsxValue,renderHeader:e.renderHeader,renderCell:e.renderCell,renderEditCell:e.renderEditCell,renderGroup:e.renderGroup,cellTitleFn:e.cellTitleFn,headerTitleFn:e.headerTitleFn,getFilterFn:e.getFilterFn,headerCellClass:e.headerCellClass,cellClass:e.cellClass,editable:e.editable,values:e.values,source:o(e.computeSource),noLocalFilter:e.noLocalFilter,mini:e.mini,renderMini:e.renderMini,loading:e.loading,externalValues:e.externalValues,computeSource:e.computeSource,trueLabel:e.trueLabel,falseLabel:e.falseLabel,valueProperty:e.valueProperty,textProperty:e.textProperty,emptyLabel:e.emptyLabel,emptyValue:e.emptyValue,min:e.min,max:e.max,locale:e.locale,autoupdate:e.autoupdate,maximumFractionDigits:e.maximumFractionDigits,minimumFractionDigits:e.minimumFractionDigits,currency:e.currency,rates:e.rates,autodetect:e.autodetect,ownerTree:e.ownerTree,keyProperty:e.keyProperty,...e.getConfig?.(e),[G]:e}},cn=e=>e.isOmnitableColumn&&!e.hidden,ln=e=>{let t=e.filter(cn);return on(t)?t:[]},un=(e,t,n)=>(Array.isArray(t)?e.filter(e=>t.includes(e.name)):e.filter(e=>!e.disabled)).map(e=>sn(e,n)),dn=(e,{enabledColumns:t,disabledFiltering:n})=>{let[r,i]=j([]);return ce(()=>{let r,a=[],o=e.shadowRoot.querySelector(`#columnsSlot`),s=e=>()=>{let r=o.assignedNodes({flatten:!0});if(e)a=r;else{let e=r.filter(e=>!a.includes(e)),t=a.filter(e=>!r.includes(e)),n=[...e,...t].some(e=>e.isOmnitableColumn);if(a=r,!n)return}i(un(ln(r),t,n))},c=e=>{cancelAnimationFrame(r),r=requestAnimationFrame(s(e?.type===`cosmoz-column-prop-changed`))};return c(),o.addEventListener(`slotchange`,c),e.addEventListener(`cosmoz-column-prop-changed`,c),()=>{o.removeEventListener(`slotchange`,c),e.removeEventListener(`cosmoz-column-prop-changed`,c),cancelAnimationFrame(r)}},[t,n]),r}})),fn,q,pn,J=e((()=>{A(),K(),fn=(e,t)=>Array.isArray(e)?e.map(e=>k(e,t)).filter((e,t,n)=>e!=null&&n.indexOf(e)===t):void 0,q=({externalValues:e,values:t,valuePath:n},r)=>{if(e)return e;if(typeof t==`function`)return t;if(n!==void 0)return fn(r,n)},pn=(e,t,n,r)=>{let{valuePath:i}=t,a=i===void 0?void 0:k(n,i);if(r===a)return;i!==void 0&&Ze(n,i,r);let o={item:n,valuePath:i,value:r,oldValue:a,column:t[G]};e.dispatchEvent(new CustomEvent(`column-item-changed`,{bubbles:!0,composed:!0,detail:o}))}})),mn,hn=e((()=>{c(),yt(),M(),n(),A(),L(),Vt(),an(),J(),mn=class extends I(O){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},currency:{type:String,notify:!0},autodetect:{type:Boolean,value:!1,notify:!0},rates:{type:Object,notify:!0},width:{type:String,value:`70px`},cellClass:{type:String,value:`amount-cell align-right`},headerCellClass:{type:String,value:`amount-header-cell`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=W({...e,valuePath:`min`},t),r=W({...e,valuePath:`max`},t);if(!(n==null&&r==null))return Yt(e,t)}getString(e,t){return $t(e,t)}toXlsxValue(e,t){return $t(e,t)}getComparableValue(e,t){return W(e,t)}serializeFilter({rates:e},t){if(t==null)return;let n=U(e,t.min),r=U(e,t.max);if(!(n==null&&r==null))return en(n)+`~`+en(r)}deserializeFilter(e,t){if(t==null||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:tn(n[1]),max:tn(n[2])}:null}renderCell(e,{item:t}){return i`<span>${e.getString(e,t)}</span>`}renderEditCell(e,{item:t},n){return i`<cosmoz-input
			no-label-float
			type="number"
			@change=${r=>n({amount:r.target.value,currency:k(t,e.valuePath)?.currency})}
			.value=${rn(e,t)}
		>
			<div slot="suffix">${nn(e,t)}</div>
		</cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:a,rates:o,currency:s,autoupdate:c,autodetect:l,disabledFiltering:u},{filter:d},f,p){return i`<cosmoz-omnitable-amount-range-input
			.title=${e}
			?disabled=${u}
			.filter=${d}
			.values=${p}
			.rates=${o}
			.min=${t}
			.max=${n}
			.limits=${r}
			.locale=${a}
			.currency=${s}
			.autoupdate=${c}
			.autodetect=${l}
			@filter-changed=${({detail:{value:e}})=>f(t=>({...t,filter:e}))}
			@header-focused-changed=${({detail:{value:e}})=>f(t=>({...t,headerFocused:e}))}
		></cosmoz-omnitable-amount-range-input>`}computeSource(e,t){return q(e,t)}},customElements.define(`cosmoz-omnitable-column-amount`,mn)})),gn,_n,vn,yn,bn,xn,Sn,Cn,wn,Tn,En,Dn,On=e((()=>{De(),Le(),ut(),A(),J(),gn=(e,t)=>{if(!Array.isArray(e))return;let n=[];return e.reduce((e,t)=>Array.isArray(t)?(t.forEach(t=>{e.push(t)}),e):(e.push(t),e),[]).filter((e,r,i)=>{if(i.indexOf(e)!==r)return!1;if(t){let r=k(e,t);if(n.indexOf(r)!==-1)return!1;n.push(r)}return!0})},_n=(e,t,n)=>{if(e==null)return[];if(Array.isArray(e)){let r=gn(e,t);if(!r?.length)return r;let i=n??`label`,a=e=>String(typeof e==`object`&&e?k(e,i)??``:e??``);return r.sort((e,t)=>a(e).localeCompare(a(t)))}if(typeof e==`object`){let r=t??`id`,i=n??`label`;return Object.entries(e).map(([e,t])=>({[r]:e,[i]:t})).sort((e,t)=>String(e[i]??``).localeCompare(String(t[i]??``)))}return[]},vn=(e,t,n)=>ft(t&&k(e,t)).map(w(n)),yn=({valuePath:e,textProperty:t},n)=>vn(n,e,t).filter(e=>e!=null).join(`, `),bn=yn,xn=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>a=>{let o=w(e),s=ft(k(a,t));return i.some(t=>s.length===0&&w(r||e)(t)===n||s.some(e=>o(e)===o(t)))},Sn=e=>t=>e(e=>({...e,filter:t})),Cn=e=>t=>e(e=>({...e,headerFocused:t})),wn=e=>t=>e(e=>({...e,query:t})),Tn=({emptyValue:e,emptyLabel:t,emptyProperty:n,textProperty:r,valueProperty:i},a)=>{let o=_n(a,i,r);return!t||e===void 0||!r||!(n||i)||!o?o:[{[r]:t,[n||i]:e},...o]},En=(e,t)=>Tn(e,fn(t,e.valuePath)),Dn=e=>class extends e{static get properties(){return{textProperty:{type:String},valueProperty:{type:String},emptyLabel:{type:String},emptyValue:{type:Object},emptyProperty:{type:String}}}getConfig(e){return{emptyProperty:e.emptyProperty}}getString(e,t){return yn(e,t)}toXlsxValue(e,t){return bn(e,t)}getComparableValue({valuePath:e,valueProperty:t},n){let r=k(n,e);return t==null?r:ft(r).reduce((e,n)=>(e.push(k(n,t)),e),[]).sort().join(` `)}getFilterFn(e,t){if(!(!t||!Array.isArray(t)||t.length===0))return xn(e,t)}serializeFilter(e,t){return t.length===0?null:JSON.stringify(t)}deserializeFilter(e,t){return JSON.parse(decodeURIComponent(t))}computeSource(e,t){return e.externalValues||typeof e.values==`function`?async(...t)=>Tn(e,await Promise.resolve(Fe(e.values,...t))):En(e,t)}}})),kn,An,jn,Mn=e((()=>{ot(),we(),M(),n(),y(),De(),ut(),On(),L(),h(),A(),K(),kn=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?ct(t):w(n),a=ft(e&&k(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},An=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>{let a=w(e),o=w(r||e),s=new Set(i.filter(e=>e.excluded).map(e=>a(e.item))),c=new Set(i.filter(e=>!e.excluded).map(e=>a(e.item))),l=i.some(e=>e.excluded&&o(e.item)===n),u=i.some(e=>!e.excluded&&o(e.item)===n);return e=>{let n=ft(k(e,t)).map(a);return n.length===0?!l&&(u||c.size===0):!n.some(e=>s.has(e))&&(c.size===0||n.some(e=>c.has(e)))}},jn=class extends Dn(I(O)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return i`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},n){return i`<cosmoz-input
			no-label-float
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${F(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:n},r,a){return i`<cosmoz-autocomplete-excluding
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
			.itemRenderer=${e[G]?.itemRenderer}
			.value=${t}
			.text=${n}
			.limit=${e.limit}
			@opened-changed=${e=>Cn(r)(e.detail.value)}
			@value-changed=${s(Sn(r))}
			@text-changed=${s(wn(r))}
			>${E(e.loading,()=>i`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-excluding
		>`}getComparableValue(e,t){return kn(e,t)}getFilterFn(e,t){if(!(!t||!Array.isArray(t)||t.length===0))return An(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete-excluding`,jn)})),Nn,Pn,Fn,In=e((()=>{ot(),we(),M(),n(),y(),De(),ut(),On(),L(),A(),K(),Nn=(e,t,n)=>e?(Array.isArray(e)?e:[e]).map(e=>{if(typeof e==`object`&&e)return String(e[n]??``);let r=t?.find(t=>t.value===e);return String(r?r.text??r[n]??``:e??``)}).filter(Boolean).join(`, `):``,Pn=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?ct(t):w(n),a=ft(e&&k(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},Fn=class extends Dn(I(O)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return i`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},n){return i`<cosmoz-input
			no-label-float
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${F(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:n},r,a){if(e.disabledFiltering){let n=Nn(t,a,e.textProperty);return i`<cosmoz-input
				disabled
				label=${e.title}
				.value=${n}
			></cosmoz-input>`}return i`<cosmoz-autocomplete-ui
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
			.itemRenderer=${e[G]?.itemRenderer}
			.value=${t}
			.text=${n}
			.limit=${e.limit}
			.onChange=${Sn(r)}
			@opened-changed=${e=>Cn(r)(e.detail.value)}
			.onText=${wn(r)}
			>${E(e.loading,()=>i`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}getComparableValue(e,t){return Pn(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete`,Fn)})),Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,qn,Jn,Yn,Xn,Zn=e((()=>{M(),L(),ot(),c(),Ve(),A(),n(),y(),Ln=(e,t)=>t.find(({value:t})=>e===t),Rn=(e,t,n)=>{let r=Ln(t,n);return r?r.text:e},zn=(e,t,n,r)=>Rn(e,k(t,n),r),Bn=({valuePath:e},t,n)=>Ln(k(t,e),n),Vn=e=>t=>{e(e=>({...e,filter:t?.[0]?.value??null}))},Hn=e=>t=>{e(e=>({...e,headerFocused:t}))},Un=e=>t=>{e(e=>({...e,query:t}))},Wn=e=>t=>e(t?.[0]?.value),Gn=({valuePath:e,trueLabel:t,falseLabel:n},r)=>k(r,e)?t:n,Kn=({valuePath:e},t)=>n=>k(n,e)===t,qn=o((e,t)=>[{text:e,value:!0},{text:t,value:!1}]),Jn=({valuePath:e,trueLabel:t,falseLabel:n},r)=>e?k(r,e)?t:n:``,Yn=(e,t)=>{try{return JSON.parse(t)}catch{return null}},Xn=class extends I(O){static get properties(){return{trueLabel:{type:String,value:`True`},falseLabel:{type:String,value:`False`},flex:{type:String,value:`0`},cellClass:{type:String,value:`boolean-cell`}}}getString(e,t){return Gn(e,t)}renderCell(e,{item:t}){return Gn(e,t)}renderEditCell(e,{item:t},n){let{trueLabel:r,falseLabel:a}=e;return i`<cosmoz-autocomplete
			no-label-float
			.title=${zn(e.title,t,e.valuePath,qn(r,a))}
			.source=${qn(r,a)}
			.textProperty=${`text`}
			.value=${Bn(e,t,qn(r,a))}
			.onChange=${Wn(n)}
			.limit=${1}
			>${E(e.loading,()=>i`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete
		>`}renderHeader(e,{filter:t,query:n},r,a){if(e.disabledFiltering){let n=t==null?``:Rn(``,t,a);return i`<cosmoz-input
				disabled
				label=${e.title}
				.value=${n}
			></cosmoz-input>`}return i`<cosmoz-autocomplete-ui
			?disabled=${e.disabledFiltering}
			.label=${e.title}
			.title=${zn(e.title,t,e.valuePath,a)}
			.source=${a}
			.textProperty=${`text`}
			.value=${Ln(t,a)}
			.text=${n}
			.onChange=${Vn(r)}
			@opened-changed=${e=>Hn(r)(e.detail.value)}
			.onText=${Un(r)}
			.limit=${1}
			>${E(e.loading,()=>i`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}computeSource({trueLabel:e,falseLabel:t}){return qn(e,t)}getFilterFn(e,t){if(t!=null)return Kn(e,t)}toXlsxValue(e,t){return Jn(e,t)}deserializeFilter(e,t){return Yn(e,t)}},customElements.define(`cosmoz-omnitable-column-boolean`,Xn)})),Qn,$n=e((()=>{pe(),Rt(),Qn=e=>class extends Lt(e){static get properties(){return{max:{type:Date,value:null},min:{type:Date,value:null},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},formatter:{type:Object,computed:`_computeFormatter(locale)`}}}toDate(e,t,n){if(e==null||e===``)return;let r=e;if(r instanceof Date||(typeof e==`string`&&(r=this.getAbsoluteISOString(r)),r=new Date(r)),Number.isNaN(r.getTime()))return null;if(n==null||t==null)return r;let i=this.toDate(t);if(i==null)return r;let a=this.getComparableValue(r);return n(a,this.getComparableValue(i))===a?r:i}toValue(){return this.toDate.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n!=null)return this.toNumber(n.getTime())}getString(e,t=this.valuePath,n=this.formatter){let r=this.toValue(this.get(t,e));return r===void 0?``:r===null?`Invalid Date`:this.renderValue(r,n)}getAbsoluteISOString(e){return e.length===19?e+this._getTimezoneString(e):e}_getTimezoneString(e){let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`}renderValue(e,t=this.formatter){if(t==null)return;let n=this.toValue(e);if(n!=null)return t.format(n)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(0,10)}_dateValueChanged(e){let t=e.currentTarget.value,n=e.model.item,r=this.get(this.valuePath,n),i=this._fromInputString(t);this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toLocalISOString(e){return a(e)}}})),er,tr=e((()=>{c(),M(),C(),n(),y(),$n(),Ft(),R(),zt(),er=class extends Qn(B(O)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return i`
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

			${E(!this.disabled,()=>i`<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>`)}
			${E(this.disabled,()=>i`
					<cosmoz-omnitable-dropdown-input
						disabled
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>z({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:i`
							<h3 style="margin: 0;">${this.title}</h3>
							<cosmoz-input
								type="date"
								label=${P(`From date`)}
								min=${this._toInputString(this._limit.fromMin)}
								max=${this._toInputString(this._limit.fromMax)}
								.value=${this._filterInput?.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-input>
							<cosmoz-input
								type="date"
								label=${P(`Until date`)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
								.value=${this._filterInput?.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-input>
						`}))}
		`}_fromInputString(e,t){let n=this.toDate(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n}_filterInputChanged(e,t){let n=e.path.split(`.`)[1]&&e.value;if(n&&n.match(/^0+/u)){this._limitInputDebouncer.cancel();return}super._filterInputChanged(e,t)}},customElements.define(`cosmoz-omnitable-date-range-input`,er)})),nr,rr,ir,Y,X,ar,or,sr,cr,lr,ur,dr,fr,pr,mr,hr=e((()=>{pe(),A(),Jt(),nr=e=>{let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`},rr=e=>e.length===19?e+nr(e):e,ir=e=>{if(e==null||e===``)return;let t=e;return!(t instanceof Date)&&(typeof e==`string`&&(t=rr(t)),t=Ce(t),!t)||Number.isNaN(t.getTime())?null:t},Y=({valuePath:e},t)=>{if(t==null)return;let n=t;e!=null&&(n=k(t,e));let r=ir(n);if(r!=null)return V(r.getTime())},X=(e,t,n)=>{let r=ir(e);if(r==null)return null;if(n==null||t==null)return r;let i=X(t);if(i==null)return r;let a=Y({},r),o=Y({},i);return a==null||o==null||n(a,o)===a?r:i},ar=(e,t)=>{if(t==null)return;let n=X(e);if(n!=null)return t.format(n)},or={},sr=e=>{let t=e||``;return or[t]||(or[t]=new Intl.DateTimeFormat(e||void 0)),or[t]},cr=({valuePath:e,locale:t},n)=>{let r=k(n,e||``);return r===void 0?``:(r=X(r),r===null?`Invalid Date`:ar(r,sr(t)))},lr=e=>{let t=X(e);if(t==null)return null;let n=a(t);return n==null?null:n.slice(0,10)},ur=({valuePath:e},t)=>lr(k(t,e||``)),dr=(e,t)=>{let n=X(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n},fr=e=>lr(e)??``,pr=({valuePath:e},t)=>{if(!e)return``;let n=X(k(t,e));if(!n)return``;let r=X(a(n));return r?(r.setHours(0,0,0,0),r):``},mr=(e,t)=>n=>{let r=Y(e,n);if(r==null)return!1;let i=Y({...e,valuePath:`min`},t),a=Y({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})),gr,_r=e((()=>{c(),M(),n(),L(),tr(),J(),hr(),yt(),gr=class extends I(O){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`date-header-cell`},width:{type:String,value:`100px`},minWidth:{type:String,value:`82px`},flex:{type:String,value:`0`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=Y({...e,valuePath:`min`},t),r=Y({...e,valuePath:`max`},t);if(!(n==null&&r==null))return mr(e,t)}getString(e,t){return cr(e,t)}toXlsxValue(e,t){return pr(e,t)}getComparableValue(e,t){return Y(e,t)}serializeFilter(e,t){if(t==null)return;let n=X(t.min),r=X(t.max);if(!(n==null&&r==null))return fr(n)+`~`+fr(r)}deserializeFilter(e,t){if(t==null||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:X(n[1]),max:X(n[2])}:null}renderCell(e,{item:t}){return i`<div class="omnitable-cell-date">
			${cr(e,t)}
		</div>`}renderEditCell(e,{item:t},n){return i`<cosmoz-input
			no-label-float
			type="date"
			@change=${e=>n(dr(e.target.value))}
			.value=${ur(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:a,disabledFiltering:o},{filter:s},c,l){return i`<cosmoz-omnitable-date-range-input
			.title=${e}
			?disabled=${o}
			.filter=${s}
			.values=${l}
			.min=${t}
			.max=${n}
			.limits=${r}
			.locale=${a}
			@filter-changed=${({detail:{value:e}})=>c(t=>({...t,filter:e}))}
			@header-focused-changed=${({detail:{value:e}})=>c(t=>({...t,headerFocused:e}))}
		></cosmoz-omnitable-date-range-input>`}computeSource(e,t){return q(e,t)}},customElements.define(`cosmoz-omnitable-column-date`,gr)})),vr,yr=e((()=>{M(),C(),n(),y(),$n(),Ft(),R(),zt(),vr=class extends Qn(B(O)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return i`
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

			${E(!this.disabled,()=>i`<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>`)}
			${E(this.disabled,()=>i`
					<cosmoz-omnitable-dropdown-input
						disabled
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>z({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:i`
							<h3 style="margin: 0;">${this.title}</h3>
							<cosmoz-datetime-input
								date-label=${P(`From date`)}
								time-label=${P(`From time`)}
								min=${this._toInputString(this._limit.fromMin)}
								max=${this._toInputString(this._limit.fromMax)}
								step=${this.filterStep}
								.value=${this._filterInput?.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-datetime-input>
							<cosmoz-datetime-input
								date-label=${P(`To date`)}
								time-label=${P(`To time`)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
								step=${this.filterStep}
								.value=${this._filterInput?.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-datetime-input>
						`}))}
		`}_toInputString(e){let t=this.toValue(e);if(t!=null)return this._toLocalISOString(t).slice(0,19)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})}},customElements.define(`cosmoz-omnitable-datetime-range-input`,vr)})),br,xr,Sr,Cr,wr,Tr,Er=e((()=>{A(),hr(),br={},xr=e=>{let t=e||``;return br[t]||(br[t]=new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})),br[t]},Sr=({valuePath:e,locale:t},n)=>{let r=X(k(n,e||``));return r===void 0?``:r===null?`Invalid Date`:ar(r,xr(t))},Cr=({valuePath:e},t)=>e?k(t,e):``,wr=e=>{let t=X(e);return t==null?``:t.toISOString().slice(0,19).replace(/:/gu,`.`)},Tr=e=>{if(!(e==null||e===``)&&typeof e==`string`)return X(e.replace(/\./gu,`:`)+`Z`)}})),Dr,Or=e((()=>{Pe(),yt(),M(),n(),L(),yr(),J(),hr(),Er(),Dr=class extends I(O){static get is(){return`cosmoz-omnitable-column-datetime`}static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`datetime-header-cell`},width:{type:String,value:`210px`},minWidth:{type:String,value:`128px`},flex:{type:String,value:`0`},filterStep:{type:Number,value:1}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=Y({...e,valuePath:`min`},t),r=Y({...e,valuePath:`max`},t);if(!(n==null&&r==null))return mr(e,t)}getString(e,t){return Sr(e,t)}toXlsxValue(e,t){return Cr(e,t)}getComparableValue(e,t){return Y(e,t)}serializeFilter(e,t){if(t==null)return;let n=X(t.min),r=X(t.max);if(!(n==null&&r==null))return wr(n)+`~`+wr(r)}deserializeFilter(e,t){if(t==null||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Tr(n[1]),max:Tr(n[2])}:null}renderCell(e,{item:t}){return Sr(e,t)}renderEditCell(e,{item:t},n){return i`<cosmoz-input
			no-label-float
			type="text"
			@change=${e=>n(dr(e.target.value))}
			.value=${Sr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:a,filterStep:o,disabledFiltering:s},{filter:c},l,u){return i`<cosmoz-omnitable-datetime-range-input
			.title=${e}
			?disabled=${s}
			.filter=${c}
			.values=${u}
			.min=${t}
			.max=${n}
			.limits=${r}
			.locale=${a}
			.filterStep=${o}
			@filter-changed=${({detail:{value:e}})=>l(t=>({...t,filter:e}))}
			@header-focused-changed=${({detail:{value:e}})=>l(t=>({...t,headerFocused:e}))}
		></cosmoz-omnitable-datetime-range-input>`}computeSource(e,t){return q(e,t)}},customElements.define(Dr.is,Dr)})),kr,Ar=e((()=>{ot(),we(),M(),n(),y(),On(),L(),kr=class extends Dn(I(O)){renderCell({valuePath:e,textProperty:t},{item:n}){return i`
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
				${vn(n,e,t).map(e=>i`<li>${e}</li>`)}
			</ul>
		`}renderEditCell(){return`not implemented`}renderHeader(e,{filter:t,query:n},r,a){return i`<cosmoz-autocomplete-ui
			class="external-values-${e.externalValues}"
			?disabled=${e.disabledFiltering}
			.label=${e.title}
			.source=${a}
			.textProperty=${e.textProperty}
			.value=${t}
			.text=${n}
			.onChange=${Sn(r)}
			@opened-changed=${e=>Cn(r)(e.detail.value)}
			.onText=${wn(r)}
			>${E(e.loading,()=>i`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		> `}},customElements.define(`cosmoz-omnitable-column-list-horizontal`,kr)})),jr,Mr=e((()=>{Ge(),N(),M(),Ae(),window.Cosmoz=window.Cosmoz||{},jr=class extends Ie(re(Je,O)){static get template(){return tt`
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
		`}static get is(){return`cosmoz-omnitable-column-list-data`}static get properties(){return{items:{type:Array},_expanded:{type:Boolean,value:!1},_othersCount:{type:Number,computed:`_computeOthersCount(items)`}}}static get observers(){return[`_itemsLengthChanged(items.length)`]}_itemsLengthChanged(){requestAnimationFrame(()=>this.dispatchEvent(new CustomEvent(`expand`,{bubbles:!0})))}_firstItem(e){if(e!=null&&e.length>0)return e[0]}_hideExpand(e,t){return e!==void 0&&e.length!==null?e.length<=2||t:!0}_hideCollapse(e,t){return e!==void 0&&e.length!==null?e.length<=2||!t:!0}_otherItems(e,t){if(e!=null&&(e.length<=2||t))return e.slice(1)}_computeOthersCount(e){if(e!=null)return e.length-1}_toggleExpand(e){this._expanded=!this._expanded,e.stopPropagation(),e.preventDefault()}},customElements.define(jr.is,jr)})),Nr,Pr,Fr=e((()=>{Mr(),M(),n(),y(),ot(),c(),On(),L(),K(),Nr=(e,t,n)=>!e||Array.isArray(e)&&e.length===0?``:(Array.isArray(e)?e:[e]).map(e=>{if(typeof e==`object`&&e)return String(e[n]??``);let r=t?.find(t=>t.value===e);return String(r?r.text??r[n]??``:e??``)}).filter(Boolean).join(`, `),Pr=class extends Dn(I(O)){static get properties(){return{keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,textual:e.textual}}renderCell({valuePath:e,textProperty:t},{item:n}){return i`<cosmoz-omnitable-column-list-data
			.items=${vn(n,e,t)}
		></cosmoz-omnitable-column-list-data>`}renderEditCell(e,{item:t},n){return i`<cosmoz-input
			no-label-float
			type="text"
			.value=${yn(e,t)}
			@change=${e=>n(e.target.value.split(/,\s*/gu))}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:n},r,a){if(e.disabledFiltering){let n=Nr(t,a,e.textProperty);return i`<cosmoz-input
				disabled
				label=${e.title}
				.value=${n}
			></cosmoz-input>`}return i`<cosmoz-autocomplete-ui
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
			.itemRenderer=${e[G]?.itemRenderer}
			.value=${t}
			.text=${n}
			.onChange=${Sn(r)}
			@opened-changed=${e=>Cn(r)(e.detail.value)}
			.onText=${wn(r)}
			>${E(e.loading,()=>i`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}},customElements.define(`cosmoz-omnitable-column-list`,Pr)})),Ir,Lr=e((()=>{c(),M(),C(),n(),y(),Ft(),R(),Rt(),zt(),Ir=class extends Lt(B(O)){static get properties(){return{maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},formatter:{type:Object,computed:`_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)`},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},headerFocused:{type:Boolean,value:!1}}}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return i`
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

			${E(!this.disabled,()=>i`<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>`)}
			${E(this.disabled,()=>i`
					<cosmoz-omnitable-dropdown-input
						disabled
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>z({title:this.title,tooltip:this._tooltip,filterText:this._filterText,horizontalAlign:`right`,externalValues:this.externalValues,onOpenedChanged:e,content:i`
							<h3>${this.title}</h3>
							<cosmoz-input
								class=${this._fromClasses}
								type="number"
								label=${P(`From`)}
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
								label=${P(`To`)}
								.value=${this._filterInput?.max}
								@value-changed=${e=>{this.set(`_filterInput.max`,e.detail.value)}}
								@blur=${e=>this._onBlur(e)}
								@keydown=${e=>this._onKeyDown(e)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
							></cosmoz-input>
						`}))}
		`}_computeFormatter(e,t,n){let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}getComparableValue(e,t){if(e==null)return;let n=e;if(t!=null&&(n=this.get(t,e)),n=this.toValue(n),n==null)return;let r=this.maximumFractionDigits;return r===null?n:this.toValue(n.toFixed(r))}renderValue(e,t=this.formatter){let n=this.toNumber(e);if(n!=null)return t.format(n)}},customElements.define(`cosmoz-omnitable-number-range-input`,Ir)})),Rr,zr=e((()=>{c(),yt(),M(),n(),L(),A(),Lr(),J(),Jt(),Rr=class extends I(O){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},cellClass:{type:String,value:`number-cell align-right`},width:{type:String,value:`30px`},minWidth:{type:String,value:`30px`},headerCellClass:{type:String,value:`number-header-cell`},maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=H({...e,valuePath:`min`},t),r=H({...e,valuePath:`max`},t);if(!(n==null&&r==null))return qt(e,t)}getString(e,t){return Kt(e,t)}toXlsxValue({valuePath:e},t){return k(t,e)}getComparableValue(e,t){return H(e,t)}serializeFilter(e,t){if(t==null)return;let n=V(t.min),r=V(t.max);if(!(n==null&&r==null))return Wt(n)+`~`+Wt(r)}deserializeFilter(e,t){if(t==null||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:V(n[1]),max:V(n[2])}:null}renderCell(e,{item:t}){return i`<div class="omnitable-cell-number">
			${Kt(e,t)}
		</div>`}renderEditCell(e,{item:t},n){return i`<cosmoz-input
			no-label-float
			type="number"
			@change=${e=>n(e.target.value)}
			.value=${Ut(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:a,maximumFractionDigits:o,minimumFractionDigits:s,autoupdate:c,disabledFiltering:l},{filter:u},d,f){return i`<cosmoz-omnitable-number-range-input
			.title=${e}
			?disabled=${l}
			.filter=${u}
			.values=${f}
			.min=${t}
			.max=${n}
			.limits=${r}
			.locale=${a}
			.maximumFractionDigits=${o}
			.minimumFractionDigsits=${s}
			.autoupdate=${c}
			@filter-changed=${({detail:{value:e}})=>d(t=>({...t,filter:e}))}
			@header-focused-changed=${({detail:{value:e}})=>d(t=>({...t,headerFocused:e}))}
		></cosmoz-omnitable-number-range-input>`}computeSource(e,t){return q(e,t)}},customElements.define(`cosmoz-omnitable-column-number`,Rr)})),Br,Vr=e((()=>{c(),M(),C(),n(),y(),$n(),Ft(),R(),zt(),Br=class extends Qn(B(O)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return i`
			${E(!this.disabled,()=>i`<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>`)}
			${E(this.disabled,()=>i`
					<cosmoz-omnitable-dropdown-input
						disabled
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>z({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:i`
							<h3 style="margin: 0;">${this.title}</h3>
							<cosmoz-input
								type="time"
								label=${P(`From time`)}
								step=${this.filterStep}
								.value=${this._filterInput.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-input>
							<cosmoz-input
								type="time"
								label=${P(`Until time`)}
								step=${this.filterStep}
								.value=${this._filterInput.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-input>
						`}))}
		`}get _fixedDate(){return`1970-01-01`}toDate(e,t,n){let r=typeof e==`string`&&e.length>3&&e.length<=9?this.getAbsoluteISOString(this._fixedDate+`T`+e):e;return super.toDate(r,t,n)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(11,19)}getComparableValue(e,t){if(e==null)return;let n=this._toInputString(t==null?e:this.get(t,e));if(n!=null&&(n=this.toValue(this.getAbsoluteISOString(this._fixedDate+`T`+n)),n!=null))return this.toNumber(n.getTime())}_timeValueChanged(e){let t=e.target.value,n=e.model.item,r=this.toDate(n.date),i=this.toDate(r==null?t:r.toISOString().slice(0,10)+`T`+t);i??(this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,(e=>e).bind(this)))}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})}},customElements.define(`cosmoz-omnitable-time-range-input`,Br)})),Hr,Z,Ur,Wr,Gr,Kr,qr,Q,Jr,Yr,Xr,Zr=e((()=>{pe(),A(),hr(),Jt(),Hr=`1970-01-01`,Z=(e,t,n)=>X(typeof e==`string`&&e.length>3&&e.length<=9?rr(Hr+`T`+e):e,t,n),Ur={},Wr=e=>{let t=e||``;return Ur[t]||(Ur[t]=new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})),Ur[t]},Gr=({valuePath:e,locale:t},n)=>{let r=Z(k(n,e||``));return r===void 0?``:r===null?`Invalid Date`:ar(r,Wr(t))},Kr=(e,t)=>e.valuePath?Gr(e,t):``,qr=e=>{let t=Z(e);if(t==null)return null;let n=a(t);return n&&n.slice(11,19)},Q=({valuePath:e},t)=>{if(t==null)return;let n=qr(e==null?t:k(t,e));if(n==null)return;let r=Z(rr(Hr+`T`+n));return r==null?r:V(r.getTime())},Jr=(e,t)=>n=>{let r=Q(e,n);if(r==null)return!1;let i=Q({...e,valuePath:`min`},t),a=Q({...e,valuePath:`max`},t);return i==null||a==null?!1:!(r<i||r>a)},Yr=e=>{let t=Z(e);return t==null?``:t.toISOString().slice(11,19).replace(/:/gu,`.`)},Xr=e=>{if(!(e==null||e===``))return Z(typeof e==`string`?e.replace(/\./gu,`:`)+`Z`:e)}})),Qr,$r=e((()=>{c(),yt(),M(),n(),L(),Vr(),J(),Zr(),Qr=class extends I(O){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`time-header-cell`},minWidth:{type:String,value:`63px`},width:{type:String,value:`210px`},flex:{type:String,value:`0`},filterStep:{type:String,value:`1`}}}getFilterFn(e,t){let n=Q({...e,valuePath:`min`},t),r=Q({...e,valuePath:`max`},t);if(!(n==null&&r==null))return Jr(e,t)}getString(e,t){return Gr(e,t)}toXlsxValue(e,t){return Kr(e,t)}getComparableValue(e,t){return Q(e,t)}serializeFilter(e,t){if(t==null)return;let n=Z(t.min),r=Z(t.max);if(!(n==null&&r==null))return Yr(n)+`~`+Yr(r)}deserializeFilter(e,t){if(t==null||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Xr(n[1]),max:Xr(n[2])}:null}renderCell(e,{item:t}){return Gr(e,t)}renderEditCell(e,{item:t},n){return i`<cosmoz-input
			no-label-float
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${Gr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,locale:r,filterStep:a,disabledFiltering:o},{filter:s},c,l){return i`<cosmoz-omnitable-time-range-input
			.title=${e}
			?disabled=${o}
			.filter=${s}
			.values=${l}
			.min=${t}
			.max=${n}
			.locale=${r}
			.filterStep=${a}
			@filter-changed=${({detail:{value:e}})=>c(t=>({...t,filter:e}))}
			@header-focused-changed=${({detail:{value:e}})=>c(t=>({...t,headerFocused:e}))}
		></cosmoz-omnitable-time-range-input>`}computeSource(e,t){return q(e,t)}},customElements.define(`cosmoz-omnitable-column-time`,Qr)})),ei=e((()=>{hn(),Mn(),In(),Zn(),_r(),Or(),Ar(),Fr(),zr(),$r()})),ti,ni=e((()=>{h(),n(),ti=({column:e,item:n,selected:r,folded:i,group:a})=>e?(e.renderGroup??e.renderCell)(e,{item:n,selected:r,folded:i,group:a}):t,customElements.define(`cosmoz-omnitable-group-row`,p(ti,{useShadowDOM:!1}))})),ri,ii=e((()=>{h(),n(),ri=e=>{let{column:n}=e;return b(()=>{let t=0,r=0,i=i=>{e.dispatchEvent(new CustomEvent(`column-resize`,{bubbles:!0,composed:!0,detail:{newWidth:Math.ceil(r+i.pageX-t),column:n}}))},a=()=>{document.removeEventListener(`pointermove`,i),document.removeEventListener(`pointerup`,a)},o=n=>{t=n.pageX,r=e.previousElementSibling.getBoundingClientRect().width,document.addEventListener(`pointermove`,i),document.addEventListener(`pointerup`,a)};return e.addEventListener(`pointerdown`,o),()=>e.removeEventListener(`pointerdown`,o)},[n]),t},customElements.define(`cosmoz-omnitable-resize-nub`,p(ri))})),ai,oi,si,ci,li=e((()=>{n(),ai=i`<svg
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
</svg>`,oi=i`
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
`,si=i` <svg
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
</svg>`,ci=i`<svg
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
</svg> `})),ui,di,fi,pi,mi=e((()=>{h(),xe(),li(),ui=({column:e,on:t,descending:n,setOn:r,setDescending:a})=>{let{name:o,title:s}=e??{};return i`<button
		class="sg"
		title=${ee(s)}
		data-on=${ee(o===t&&(n?`desc`:`asc`)||void 0)}
		@click=${e=>{let t=e.currentTarget?.dataset.on;t||(r(o),a(!1)),t===`asc`?a(!0):t===`desc`&&(r(),a(!1))}}
	>
		<span>${s}</span> ${ci}
	</button>`},di=({columns:e,...t})=>e?.map(e=>ui({column:e,...t})),fi=()=>i`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,groupOn:t,setGroupOn:n,groupOnDescending:r,setGroupOnDescending:i}={})=>di({columns:e?.filter?.(e=>e.groupOn),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`,pi=()=>i`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,sortOn:t,setSortOn:n,descending:r,setDescending:i}={})=>di({columns:e?.filter?.(e=>e.sortOn&&!e.noSort),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`})),hi,gi,_i,vi,yi,bi=e((()=>{h(),Ne(),Le(),Ue(),hi=e=>(t,n,r=Ke)=>{let i=ke(),a=new URLSearchParams(i.hash.replace(`#`,``));return e(t,n,r,a),`#!`+Object.assign(i,{hash:a}).href.replace(location.origin,``)},gi=e=>e==null||e===``,_i=hi((e,t,n,r)=>gi(n(t))?r.delete(e):r.set(e,n(t))),vi=hi((e,t,n,r)=>Object.entries(t).map(n).forEach(([t,n])=>gi(n)?r.delete(e+t):r.set(e+t,n))),yi=(e,t,{suffix:n=``,read:r,write:i,multi:a}={})=>{let[o,s]=a?[vi,it]:[_i,je],c=S(()=>t!=null&&s(t+n,r)!=null,[]),[l,u]=j(()=>t==null?e:s(t+n,r)??e),d=x(e=>u(r=>{let a=Fe(e,r);return t!=null&&Xe(o(t+n,a,i),null,{notify:!1}),a}),[t,n,o,i]);return b(()=>{t!=null&&(c||e!=null&&d(e))},[e,t,c,d]),[l,d]}})),xi,Si,Ci,wi,Ti,Ei=e((()=>{h(),bi(),xi=e=>[!0,`true`,1,`yes`,`on`].includes(e),Si=e=>e===``||(e==null?void 0:xi(e)),Ci=(e,t,n)=>x(r=>{e(r),n(e=>({...e,[t]:r}))},[e,t,n]),wi=(e,t,n,r,i)=>{let[a,o]=yi(n.sortOn,t,{suffix:`-sortOn`}),[s,c]=yi(Si(n.descending),t,{suffix:`-descending`,read:Si}),[l,u]=yi(n.groupOn,t,{suffix:`-groupOn`}),[d,f]=yi(Si(n.groupOnDescending),t,{suffix:`-groupOnDescending`,read:Si}),p=S(()=>e.find(e=>e.name===a),[e,a]),m=S(()=>e.find(e=>e.name===l),[e,l]),h={groupOn:l,setGroupOn:Ci(u,`groupOn`,r),groupOnDescending:d,setGroupOnDescending:Ci(f,`groupOnDescending`,r),sortOn:a,setSortOn:Ci(o,`sortOn`,r),descending:s,setDescending:Ci(c,`descending`,r),columns:e},g=S(()=>h,Object.values(h)),_=x(e=>{o(e.sortOn),u(e.groupOn),c(e.descending),f(e.groupOnDescending)},[]);return b(()=>void(i.current=_),[]),{...g,sortAndGroup:g,groupOnColumn:m,sortOnColumn:p}},Ti=de(),customElements.define(`sort-and-group-provider`,Ti.Provider),customElements.define(`sort-and-group-consumer`,p(({render:e})=>e(_(Ti)),{useShadowDOM:!1}))})),Di,Oi,ki=e((()=>{h(),ue(),ii(),mi(),y(),Ei(),Di=({data:e,columns:t,groupOnColumn:n,filters:r,setFilterState:a,sortAndGroup:{sortOn:o,setSortOn:s,descending:c,setDescending:l}={}})=>f(t,e=>e.name,t=>[i`<div
				class="cell ${t.headerCellClass} header-cell"
				part="cell header-cell cell-${t.name} header-cell-${t.name}"
				?hidden="${t===n}"
				title="${t.headerTitleFn(t)}"
				name="${t.name}"
			>
				${t.renderHeader(t,r[t.name]??{},e=>a(t.name,e),t.source(t,e))}
				${E(!t.noSort,()=>ui({on:o,setOn:s,descending:c,setDescending:l,column:t}))}
			</div>`,i`<cosmoz-omnitable-resize-nub
				.column="${t}"
				name="${t.name}"
			></cosmoz-omnitable-resize-nub>`]),Oi=({columns:e,settingsConfig:t,hideSelectAll:n,...r})=>{let a=_(Ti);return i`
		${E(e,e=>Di({columns:e,sortAndGroup:a,...r}))}
		${E(!n,()=>i` <cosmoz-omnitable-settings
					.config=${t}
					part="settings"
				></cosmoz-omnitable-settings>`)}
	`},customElements.define(`cosmoz-omnitable-header-row`,p(Oi,{useShadowDOM:!1}))})),Ai,ji,Mi=e((()=>{h(),N(),Ai=D`
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
`,ji=({column:e})=>i`
	<div class="label" title="${e.title}" part="item-expand-label">
		${e.title}
	</div>
	<div class="value" part="item-expand-value">
		<slot></slot>
	</div>
`,customElements.define(`cosmoz-omnitable-item-expand-line`,p(ji,{styleSheets:[Se(Ai)]}))})),Ni,Pi=e((()=>{h(),n(),Ye(),Mi(),Ni=({columns:e,item:t,selected:n,expanded:r,groupOnColumn:a})=>et(e,e=>i`<cosmoz-omnitable-item-expand-line
				.column=${e}
				?hidden=${e===a}
				exportparts="item-expand-label, item-expand-value"
				>${e.renderCell(e,{item:t,selected:n,expanded:r})}</cosmoz-omnitable-item-expand-line
			>`),customElements.define(`cosmoz-omnitable-item-expand`,p(Ni,{useShadowDOM:!1}))})),Fi,Ii,Li=e((()=>{h(),ue(),Fi=(e,t,n)=>e.editable?e.renderEditCell(e,t,n(e,t.item)):e.renderCell(e,t),Ii=({columns:e,groupOnColumn:t,item:n,index:r,selected:a,expanded:o,onItemChange:s})=>f(e,e=>e.name,e=>i`<div
				class="cell itemRow-cell ${e.cellClass??``}"
				part="cell itemRow-cell cell-${e.name} itemRow-cell-${e.name}"
				?hidden="${e===t}"
				?editable="${e.editable}"
				title="${e.cellTitleFn(e,n)}"
				name="${e.name}"
			>
				${Fi(e,{item:n,index:r,selected:a,expanded:o},s)}
			</div>`),customElements.define(`cosmoz-omnitable-item-row`,p(Ii,{useShadowDOM:!1}))})),Ri,zi,Bi=e((()=>{N(),Ri=D`
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
`,zi=D`
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

	${Ri}

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
`})),Vi,Hi,Ui=e((()=>{Re(),Vi=e=>{let t=e.replace(/"/gu,`""`);return t.search(/("|,|\n)/gu)>=0?`"`+t+`"`:e},Hi=(e,t,n)=>{let r=e.map(e=>Vi(e.title)).join(`;`)+`
`,i=t.map(t=>e.map(e=>{let n=e.getString(e,t);return n==null?``:Vi(String(n))}).join(`;`)+`
`);i.unshift(r),Ee(new File(i,n,{type:`text/csv;charset=utf-8`}))}})),Wi,Gi,Ki=e((()=>{Re(),qe(),Wi=(e,t)=>{let n=e.map(e=>e.title),r=t.map(t=>e.map(e=>e.toXlsxValue(e,t)??``));return r.unshift(n),r},Gi=(e,t,n,r)=>{let i=Wi(e,t),a=new Qe(n).addSheetFromData(i,r).generate();Ee(new File([a],n,{type:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`}))}})),qi,Ji=e((()=>{Me(),C(),n(),Ui(),Ki(),qi=({columns:e,selectedItems:t,csvFilename:n,xlsxFilename:r,xlsxSheetname:a,topPlacement:o})=>i`<cosmoz-bottom-bar
		id="bottomBar"
		?active=${!rt(t.length)}
		part="bottomBar"
		exportparts="bar: bottomBar-bar, info: bottomBar-info, buttons: bottomBar-buttons"
	>
		<slot name="info" slot="info">
			${P(`{count} selected item`,{count:t.length})}
		</slot>
		<slot name="actions" id="actions"></slot>
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
				@click=${()=>Hi(e,t,n)}
			>
				${P(`Save selected items as CSV`)}
			</button>
			<button
				@click=${()=>Gi(e,t,r,a)}
			>
				${P(`Save selected items as XLSX`)}
			</button>
			<slot name="download-menu"></slot>
		</cosmoz-dropdown-menu>
	</cosmoz-bottom-bar>`})),Yi,Xi=e((()=>{n(),y(),Yi=({allSelected:e,onAllCheckboxChange:t,sortAndGroup:n,dataIsValid:r,data:a,columns:o,filters:s,groupOnColumn:c,setFilterState:l,settingsConfig:u,hideSelectAll:d})=>i`<sort-and-group-provider .value=${n}>
		<div class="header" id="header" part="header">
			${E(!d,()=>i`<input
						class="checkbox all"
						type="checkbox"
						.checked=${e}
						@input=${t}
						?disabled=${!r}
						part="all"
					/>`)}
			${E(d,()=>i` <cosmoz-omnitable-settings
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
	</sort-and-group-provider>`})),Zi,Qi,$i=e((()=>{h(),Zi=oe`
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
`,Qi=({settingsConfig:e})=>{let{columns:t,collapsed:n}=e,r=t.filter(e=>!n.some(t=>t.name===e.name));return i`<div class="skeleton">
		${Array.from({length:5},()=>i`<div>
					<div class="checkbox"></div>
					${r.map(e=>i`<div
								class="cell"
								part=${`cell-${e.name}`}
								name=${e.name}
							></div>`)}
				</div>`)}
	</div>`},customElements.define(`cosmoz-omnitable-skeleton`,p(Qi,{styleSheets:[Zi]}))})),ea,ta=e((()=>{$i(),C(),n(),y(),me(),ea=(e,t)=>{let{settingsConfig:n}=e,{processedItems:r,dataIsValid:a,filterIsTooStrict:o,loading:s,displayEmptyGroups:c,compareItemsFn:l,setSelectedItems:u,renderItem:d,renderGroup:f,error:p}=t;return i`${E(!s&&!a&&!p,()=>i`<div class="tableContent-empty">
					<slot name="empty-set-message">
						${ye({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
						<div class="tableContent-empty-message">
							<h3>${P(`Working set empty`)}</h3>
							<p>${P(`No data to display`)}</p>
						</div>
					</slot>
				</div>`)}
		${E(o,()=>i`<div class="tableContent-empty">
					${ye({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
					<div>
						<h3>${P(`Filter too strict`)}</h3>
						<p>${P(`No matches for selection`)}</p>
					</div>
				</div>`)}
		${E(s&&!r.length,()=>i`<div class="tableContent-empty overlay">
					<cosmoz-omnitable-skeleton
						.settingsConfig=${n}
					></cosmoz-omnitable-skeleton>
				</div>`)}
		${E(s&&r.length,()=>i`<div class="tableContent-empty overlay spinner">
					<cz-spinner></cz-spinner>
				</div>`)}
		${E(p,()=>i`<div class="tableContent-empty overlay">
					${mt({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
					<div class="tableContent-empty-message">
						<h3>${P(`Error loading data`)}</h3>
						<p>${p.message}</p>
					</div>
				</div>`)}
		<div class="tableContent-scroller" id="scroller" part="scroller">
			<cosmoz-grouped-list
				id="groupedList"
				.data=${r}
				@selected-items-changed=${e=>u(e.detail.value)}
				.displayEmptyGroups=${c}
				.compareItemsFn=${l}
				.renderItem=${d}
				.renderGroup=${f}
			></cosmoz-grouped-list>
			<slot name="extraContent"></slot>
		</div>`}})),na,ra,ia=e((()=>{N(),Bi(),na=D`
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
	${Ri}
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
`,ra=D`
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
`})),aa,oa,sa=e((()=>{h(),pt(),aa=e=>{let t=parseInt(e,10);return isFinite(t)?t:void 0},oa=e=>{let{config:t}=e,{settings:n,setSettings:r,collapsed:i}=t,a=Oe({collapsed:i,settings:n.columns,setSettings:x(e=>r(t=>({...t,columns:e})),[r])});return{...t,onDown:x(e=>{e.target.closest(`.pull`)&&(a.handle=e.currentTarget)},[a]),onDragStart:x(e=>{let{target:t}=e,n=aa(t.dataset.index);if(!a.handle?.contains(t)||n==null)return e.preventDefault();a.handle=null,e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`omnitable/sort-index`,n),e.dataTransfer.setData(`text/plain`,n),setTimeout(()=>t.classList.add(`drag`),0),t.addEventListener(`dragend`,e=>e.target.classList.remove(`drag`),{once:!0})},[a]),onDragEnter:x(e=>{let t=e.currentTarget;t===e.target&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`,t.classList.add(`dragover`))},[]),onDragOver:x(e=>{e.preventDefault(),e.currentTarget.classList.add(`dragover`)},[]),onDragLeave:x(e=>{let t=e.currentTarget;t.contains(e.relatedTarget)||t.classList.remove(`dragover`)},[]),onDrop:x(e=>{let t=aa(e.dataTransfer.getData(`omnitable/sort-index`)),n=aa(e.currentTarget.dataset.index),{settings:r,setSettings:i}=a;e.currentTarget.classList.remove(`dragover`),e.preventDefault();let o=r.slice();o.splice(n+(t>=n?0:-1),0,o.splice(t,1)[0]),i(o)},[a]),onToggle:x(e=>{let{settings:t,setSettings:n}=a,r=t.map(e=>({...e,disabled:e.disabled||a.collapsed?.some(t=>t.name===e.name)})),i=aa(e.target.closest(`[data-index]`)?.dataset.index);r.splice(i,1,{...t[i],disabled:!e.target.checked,priority:e.target.checked?t.reduce((e,t)=>Math.max(e,t.priority),0)+1:t[i].priority}),n(r)},[a])}}})),ca,la,ua,da,fa=e((()=>{nt(),he(),N(),Me(),h(),C(),y(),li(),mi(),ia(),sa(),ca=[d({apply({availableHeight:e,elements:t}){Object.assign(t.floating.style,{maxHeight:`${Math.max(0,e)}px`})}}),...dt],la=({onDragStart:e,onDragEnter:t,onDragOver:n,onDragLeave:r,onDrop:a,onDown:o,onToggle:s,collapsed:c,filters:l})=>(u,d)=>{let f=!!c?.find(e=>e.name===u.name),p=!u.disabled&&!f;return i` <div
			class="item"
			data-index=${d}
			@mousedown=${o}
			draggable="true"
			@dragstart=${e}
			@dragenter=${t}
			@dragover=${n}
			@dragleave=${r}
			@drop=${a}
		>
			<button class="pull">${oi}</button>
			<label class="title" ?has-filter=${!rt(l[u.name]?.filter)}
				>${u.title}</label
			>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${p}
				@click=${s}
				.indeterminate=${f}
			/>
		</div>`},ua=e=>{let{settings:t,settingsId:n,onSave:r,onReset:a,hasChanges:o,opened:s,setOpened:c,...l}=oa(e);return i` <div class="headline">
			${P(`Sort and filter`)}
			<button
				class="close"
				@click=${e=>{let t=e.currentTarget;t?.focus(),t?.blur()}}
			>
				${ai}
			</button>
		</div>

		<div class="contents">
			<div
				class="heading"
				?data-opened=${s.columns}
				@click=${()=>c(e=>({...e,columns:!e.columns}))}
				part="columns columns-heading"
			>
				${P(`Columns`)} ${si}
			</div>
			<cosmoz-collapse
				?opened="${s.columns}"
				part="columns columns-content"
			>
				<div class="list">${t.columns?.map(la(l))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${s.sort}
				@click=${()=>c(e=>({...e,sort:!e.sort}))}
			>
				${P(`Sort on`)} ${si}
			</div>
			<cosmoz-collapse ?opened=${s.sort}> ${pi()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${s.group}
				@click=${()=>c(e=>({...e,group:!e.group}))}
				part="groups groups-heading"
			>
				${P(`Group on`)} ${si}
			</div>
			<cosmoz-collapse ?opened=${s.group} part="groups groups-heading"
				>${fi()}</cosmoz-collapse
			>
		</div>

		${E(n,()=>i`<div class="buttons">
					<button
						class="button reset"
						@click=${a}
						?disabled=${!o}
					>
						${P(`Reset`)}
					</button>
					<button class="button" @click=${r} ?disabled=${!o}>
						${P(`Save`)}
					</button>
				</div>`)}`},customElements.define(`cosmoz-omnitable-settings-ui`,p(ua,{styleSheets:[Se(na)]})),da=({config:e,newLayout:t})=>i`
	<cosmoz-dropdown
		.placement="${t?`bottom-start`:`bottom-end`}"
		.middleware="${ca}"
	>
		<div title="${P(`Sort and filter`)}" slot="button">
			${E(t,()=>i`<div class="headerDots">...</div>`,()=>i` <svg viewBox="0 0 24 24" width="24" fill="currentColor">
						<circle cx="10" cy="18" r="2"></circle>
						<circle cx="10" cy="12" r="2"></circle>
						<circle cx="10" cy="6" r="2"></circle>
					</svg>`)}
			${E(e?.badge,()=>i`<div class="badge"></div>`)}
		</div>
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${e}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`,customElements.define(`cosmoz-omnitable-settings`,p(da,{styleSheets:[Se(ra)]}))})),pa,ma,ha,ga,_a,va=e((()=>{ut(),pa=[`sortOn`,`descending`,`groupOn`,`groupOnDescending`],ma=e=>t=>typeof t==`object`&&!!t&&`name`in t&&t.name===e,ha=(e=[],t=[],n=[])=>{let r=t.filter(t=>e.some(ma(t.name))),i=e.filter(e=>e.name!=null&&!t.some(ma(e.name))&&!n.some(ma(e.name))),a=n.filter(e=>!t.some(ma(e.name)));return[...r,...a.flatMap(t=>{let n=e.find(e=>e.name===t.name);return n?{...t,title:n.title??t.title??``,minWidth:parseInt(n.minWidth??`0`,10)}:[]}),...i.map(e=>{let{name:t,title:n,priority:r,minWidth:i,width:a,flex:o}=e;return{name:t??``,title:n??``,priority:r??0,minWidth:parseInt(i??`0`,10),width:parseInt(a??`0`,10),flex:parseInt(o??`0`,10)}})]},ga=(e,t)=>({...t,...u(Array.from(pa))(e),columns:e.columns?.map(u([`name`,`priority`,`width`,`flex`,`disabled`]))}),_a=({columns:e,settings:t,savedSettings:n,initial:r})=>({...Object.fromEntries(pa.flatMap(e=>r?.[e]==null?[]:[[e,r[e]]])),...n?u(Array.from(pa))(n):{},...t,columns:ha(e,t?.columns,n?.columns)})})),ya,ba=e((()=>{ya=({prefix:e=`omnitable-`}={})=>({write:async(t,n)=>{let r=e+t;try{n?localStorage.setItem(r,JSON.stringify(n)):localStorage.removeItem(r)}catch(e){console.error(e)}},read:async t=>{if(t)try{let n=localStorage.getItem(e+t);return n==null?void 0:JSON.parse(n)}catch(e){console.error(e)}}})})),xa,Sa,Ca=e((()=>{h(),ba(),xa=de(ya),Sa=()=>{let e=_(xa);return S(()=>e(),[e])}})),wa=e((()=>{Ca()})),Ta,Ea=e((()=>{h(),va(),wa(),Ta=(e,t,n,r)=>{let[i,a]=j(),{read:o,write:s}=Sa();return b(async()=>{e&&a(await o(e))},[e,o]),{settingsId:e,savedSettings:i,onSave:x(async()=>{if(!e)return;let r=ga(t,i);await s(e,r),n(),a(r)},[t,i]),onReset:x(async t=>{n(),t.shiftKey&&(await s(e),a()),r?.()},[r]),hasChanges:t!=null}}})),Da,Oa=e((()=>{h(),K(),va(),Ea(),Da=({settingsId:e,host:t})=>{let n=S(()=>Object.fromEntries(pa.map(e=>[e,t[e]])),[]),r=He(),i=x(()=>{r.current?.(n)},[n]),[a,o]=j(),[s,c]=j({columns:!0,sort:!0}),{savedSettings:l,...u}=Ta(e,a,o,i),{enabledColumns:d,disabledFiltering:f}=t,p=dn(t,{enabledColumns:d,disabledFiltering:f}),m=S(()=>_a({columns:p,settings:a,savedSettings:l,initial:n}),[p,a,l]),h=S(()=>m.columns.map(e=>p.find(t=>t.name===e.name)).filter(Boolean),[p,...m.columns.map(e=>e.name)]);return{...u,opened:s,setOpened:c,settings:m,columns:h,setSettings:o,resetRef:r}}})),ka=e((()=>{fa(),Oa()})),Aa,ja,Ma=e((()=>{Aa=e=>Number.isFinite(e)?e:0,ja=(e,t)=>{let n=[],[r,i]=e.reduce(([e,t],{width:n,flex:r})=>[e+n,t+r],[0,0]),a=t-r,o=Aa(a/i),s=0,c=0,l=0;for(let t=0;t<e.length;t++){let{width:i,minWidth:u,flex:d}=e[t];if(u>i+(a>=0?o*d:i*a/r)){s+=i,c+=u,l+=d,n[t]=u;continue}if(d===0){s+=i,c+=i,n[t]=i;continue}}r-=s,a=t-c-r,i-=l,o=Aa(a/i);for(let t=0;t<e.length;t++){if(n[t]!=null)continue;let{width:i,flex:s}=e[t];n[t]=i+(a>=0?o*s:i*a/r)}return n}})),Na,Pa,Fa=e((()=>{Na=Symbol(`index`),Pa=(e,t)=>{if(typeof e.findLastIndex==`function`)return e.findLastIndex(t);for(let n=e.length-1;n>=0;n--)if(t(e[n],n,e))return n;return-1}})),Ia,La,Ra,za=e((()=>{Ma(),Fa(),Ia=(e,t)=>{let n=Pa(e,e=>e!=null&&e>0),r=(e,t)=>`.cell[name="${e}"], cosmoz-omnitable-skeleton::part(cell-${e}){width: ${Math.floor(t)}px;padding: 0 min(3px, ${t/2}px)}`,i=e=>`cosmoz-omnitable-resize-nub[name="${e}"]{display:none}`,a=e=>`cosmoz-omnitable-resize-nub[name="${e}"], .cell[name="${e}"]{display:none}`;return t.map((t,o)=>{let s=e[o];if(s==null||s===0)return a(t.name);let c=r(t.name,s);return o===n?`${c}\n${i(t.name)}`:c}).join(`
`)},La=(e,t,n)=>{let r=e.filter(e=>!e.hidden),i=r.reduce((e,{width:t})=>e+t,0);if(r.length>1&&i>t)return La(r.slice(1),t,n);let a=r.reduce(([e,t],n,r)=>[Math.max(e,n.index),n.index>e?r:t],[-1,-1])[1];return a!==-1&&(r[a].flex=1),ja(r,t).reduce((e,t,n)=>(e[r[n].index]=t,e),Array(n).fill(void 0))},Ra=(e,t)=>e.length===0?`.cell {display: none;}`:Ia(e,t)})),Ba,Va=e((()=>{h(),Ba=({host:e,canvasWidth:t,layout:n,setSettings:r})=>{let i=He();i.current=e=>r(r=>{let i=r.columns,{detail:{newWidth:a,column:o}}=e,s=i.findIndex(e=>e.name===o.name),c=[],l=i.reduce((e,t)=>Math.max(e,t.priority),-1/0);for(let e=0;e<n.length;e++)if(c[e]={...i[e]},e<s&&n[e]&&(c[e].width=n[e],c[e].flex=0,c[e].priority=l),e===s){let r=n.reduce((e,t,n)=>n<s&&t?e-t:e,t);c[e].width=Math.min(r,Math.max(a,i[e].minWidth)),c[e].flex=0,c[e].priority=l}return{...r,columns:c}}),b(()=>{let t=e=>i.current?.(e);return e.addEventListener(`column-resize`,t),()=>e.removeEventListener(`column-resize`,t)},[])}})),Ha,Ua,Wa=e((()=>{h(),Ha=88,Ua=(e,t)=>b(()=>{let n=new ResizeObserver(([e])=>{e.contentRect?.width!==0&&requestAnimationFrame(()=>t(e.contentRect?.width-Ha))});return n.observe(e),()=>n.unobserve(e)},[])})),Ga,Ka=e((()=>{h(),Wa(),Ga=e=>{let[t,n]=j(()=>e.getBoundingClientRect().width-Ha);return Ua(e,n),t}})),qa,Ja,Ya,Xa=e((()=>{h(),pt(),Le(),qa=(e,t)=>{let n=S(()=>{let t=!1,n,r=()=>{t&&(n=requestAnimationFrame(r),e()&&(t=!1))};return{start:()=>{t=!0,cancelAnimationFrame(n),n=requestAnimationFrame(r)},stop:()=>{t=!1,cancelAnimationFrame(n)}}},[]);b(()=>{n.start()},t),b(()=>()=>n.stop(),[])},Ja=(e=0,t=0)=>Math.abs(e-t)<.1,Ya=(e,t=1.9,n=Te)=>{let r=Oe({target:e});qa(x(()=>{if(!r.tween)return r.tween=r.target,n(r.tween),!0;if(r.target.every((e,t)=>r.tween[t]===e))return n(r.tween),!0;r.tween=r.target.map((e,n)=>Ja(r.tween[n],e)?e:(r.tween[n]??0)+((e??0)-(r.tween[n]??0))/t||0),n(r.tween)},[]),[e])}})),Za,Qa=e((()=>{h(),za(),Za=({canvasWidth:e,groupOnColumn:t,config:n,miniColumn:r})=>S(()=>{if(!Array.isArray(n)||e==null||e===0)return[];let i=n.map((e,n)=>({minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,name:e.name,index:n,hidden:e.name===t?.name||e.disabled})).map(e=>r?{...e,hidden:r.name!==e.name}:e).sort(({index:e,priority:t},{index:n,priority:r})=>t===r?n-e:t-r);return La(i,e,i.length)},[e,t,n])})),$a,eo=e((()=>{h(),$a=({host:e,canvasWidth:t,columns:n})=>{let r=e.miniBreakpoint??480,i=S(()=>t<=r,[t,r]),[a,...o]=S(()=>i?n?.filter(e=>e.mini!=null).sort((e,t)=>(e.mini??0)-(t.mini??0)):[],[n,i])??[],s=!!a;return b(()=>{e.toggleAttribute(`mini`,s)},[s]),{isMini:s&&i,miniColumn:a,miniColumns:o}}})),to,no,ro=e((()=>{h(),za(),Va(),Ka(),Xa(),Qa(),eo(),pt(),to=e=>{let t=S(()=>new CSSStyleSheet,[]);return b(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,t]},[]),t},no=({host:e,columns:t,settings:n,setSettings:r,resizeSpeedFactor:i,sortAndGroupOptions:a})=>{let o=Ga(e),{isMini:s,miniColumn:c,miniColumns:l}=$a({host:e,canvasWidth:o,columns:t}),{groupOnColumn:u}=a,d=Za({canvasWidth:o,groupOnColumn:u,miniColumn:c,config:n.columns}),f=to(e),p=S(()=>n.columns.reduce((e,n,r)=>d[r]!=null||n.name===u?.name||n.disabled?e:[...e,t.find(e=>e.name===n.name)],[]),[t,n,d]),m=Oe({columns:n.columns});return Ya(d,i,e=>{let t=Ra(e,m.columns);f.replace(t)}),Ba({host:e,canvasWidth:o,layout:d,setSettings:e=>r(e(n))}),{isMini:s,collapsedColumns:p,miniColumns:l}}})),io,ao=e((()=>{io=({host:e,...t})=>{let{csvFilename:n=`omnitable.csv`,xlsxFilename:r=`omnitable.xlsx`,xlsxSheetname:i=`Omnitable`,topPlacement:a=`top-end`}=e;return{csvFilename:n,xlsxFilename:r,xlsxSheetname:i,topPlacement:a,...t}}})),oo,so=e((()=>{h(),oo=({host:e,selectedItems:t,data:n,sortAndGroupOptions:r,collapsedColumns:i,settings:a,filterFunctions:o,settingS:s,filters:c,...l})=>{let u=n&&n.length>0&&t.length===n.length,d=t=>{t.target.checked?e.shadowRoot.querySelector(`#groupedList`).selectAll():e.shadowRoot.querySelector(`#groupedList`).deselectAll()},{groupOnColumn:f}=r,p=S(()=>[f,...i,...a.columns.filter(e=>e.disabled)].some(e=>e&&Object.keys(o).includes(e.name)),[o,a,i]),m=S(()=>({...s,collapsed:i,badge:p,filters:c}),[s,i,p,c]);return b(()=>{let t=e.shadowRoot.querySelector(`#tableContent`),n=new ResizeObserver(t=>requestAnimationFrame(()=>{e.style.setProperty(`--ot-height`,t[0]?.contentRect.height+`px`)}));return n.observe(t),()=>n.unobserve(t)},[]),{allSelected:u,onAllCheckboxChange:d,data:n,settingsConfig:m,filters:c,groupOnColumn:f,sortAndGroup:r.sortAndGroup,...l}}})),co,lo,uo,fo,po,mo,ho=e((()=>{h(),y(),Me(),Fa(),J(),co=i`
	<svg
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
	>
		<g>
			<path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
		</g>
	</svg>
`,lo=e=>e?`groupRow groupRow-folded`:`groupRow`,uo=({item:e,index:t})=>n=>E(n?.length>0,()=>i`
				<div class="itemRow-minis" part="item-minis">
					${n.map(n=>i`<div
								class="itemRow-mini"
								part="item-mini item-mini-${n.name}"
							>
								${(n.renderMini??n.renderCell)(n,{item:e,index:t})}
							</div>`)}
				</div>
			`),fo=({columns:e,collapsedColumns:t,miniColumns:n,onItemClick:r,onCheckboxChange:a,dataIsValid:o,groupOnColumn:s,onItemChange:c,rowPartFn:l})=>(u,d,{selected:f,expanded:p,toggleCollapse:m})=>i`
		<div
			?selected=${f}
			part="${[`itemRow`,`itemRow-${u[Na]}`,l?.(u,d)].filter(Boolean).join(` `)}"
			.dataIndex=${u[Na]}
			.dataItem=${u}
			class="itemRow"
			@click=${r}
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
					?hidden="${rt(t.length)}"
					?aria-expanded="${p}"
					@click="${m}"
				>
					${co}
				</button>
			</div>
			${uo({item:u,index:d})(n)}
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
	`,po=({onCheckboxChange:e,dataIsValid:t,groupOnColumn:n})=>(r,a,{selected:o,folded:s,toggleFold:c})=>i` <div
			class="${lo(s)}"
			part="groupRow groupRow-${r[Na]}"
		>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${o}
				.dataItem=${r}
				@input=${e}
				?disabled=${!t}
			/>
			<h3 class="groupRow-label">
				<div><span>${n?.title}</span>: &nbsp;</div>
				<cosmoz-omnitable-group-row
					.column=${n}
					.item=${r.items?.[0]}
					.selected=${o}
					.folded=${s}
					.group=${r}
				></cosmoz-omnitable-group-row>
			</h3>
			<div class="groupRow-badge">${r.items.length}</div>
			<button class="expand" ?aria-expanded="${s}" @click=${c}>
				${co}
			</button>
		</div>`,mo=({host:e,error:t,dataIsValid:n,processedItems:r,columns:i,collapsedColumns:a,miniColumns:o,sortAndGroupOptions:s,rowPartFn:c,...l})=>{let{loading:u=!1,displayEmptyGroups:d=!1,compareItemsFn:f}=e,p=He({shiftKey:!1,ctrlKey:!1}),m=x(t=>{let n=t.target.dataItem,r=t.target.checked;p.current.shiftKey?e.shadowRoot.querySelector(`#groupedList`).toggleSelectTo(n,r):p.current.ctrlKey?(t.target.checked=!0,e.shadowRoot.querySelector(`#groupedList`).selectOnly(n)):e.shadowRoot.querySelector(`#groupedList`).toggleSelect(n,r),t.preventDefault(),t.stopPropagation()},[]);b(()=>{let e=({shiftKey:e,ctrlKey:t})=>{p.current={shiftKey:e,ctrlKey:t}};return window.addEventListener(`keydown`,e),window.addEventListener(`keyup`,e),()=>{window.removeEventListener(`keydown`,e),window.removeEventListener(`keyup`,e)}},[]);let h=x(t=>{let n=t.composedPath();n.slice(0,n.indexOf(t.currentTarget)).find(e=>e.matches?.(`a, .checkbox, .expand`))||e.dispatchEvent(new window.CustomEvent(`omnitable-item-click`,{bubbles:!0,composed:!0,detail:{item:t.currentTarget.dataItem,index:t.currentTarget.dataIndex}}))},[]),{groupOnColumn:g}=s,_=x((t,n)=>r=>pn(e,t,n,r),[]);return{...l,processedItems:r,dataIsValid:n,filterIsTooStrict:n&&r.length<1,loading:u,compareItemsFn:f,displayEmptyGroups:d,error:t,renderItem:S(()=>fo({columns:i,collapsedColumns:a,miniColumns:o,onItemClick:h,onCheckboxChange:m,dataIsValid:n,groupOnColumn:g,onItemChange:_,rowPartFn:c}),[i,a,h,m,n,g,_,c]),renderGroup:S(()=>po({onCheckboxChange:m,dataIsValid:n,groupOnColumn:g}),[m,n,g])}}})),go,_o=e((()=>{go=(e,t)=>{if(e===t)return 0;if(e==null)return-1;if(t==null)return 1;let n=typeof e,r=typeof t;return n===`object`&&r===`object`?e.toString()<t.toString()?-1:1:n===`number`&&r===`number`?e-t:n===`string`&&r===`string`?e<t?-1:1:n===`boolean`&&r===`boolean`?e?-1:1:(console.warn(`unsupported sort`,n,e,r,t),0)}})),vo,yo,bo,xo,So,Co,wo=e((()=>{h(),Le(),_o(),K(),bi(),Fa(),vo=(e,t)=>(n,r)=>go(e(n),e(r))*(t?-1:1),yo=e=>e.replace(/([a-z0-9])([A-Z])/gu,`$1-$2`).toLowerCase(),bo=(e,t)=>{!e||!t||Object.entries(t).forEach(([t,n])=>{e[G].__ownChange=!0,e[G][t]=n,e[G].__ownChange=!1,e[G].dispatchEvent(new CustomEvent(`${yo(t)}-changed`,{bubbles:!0,detail:{value:n}}))})},xo=(e,t)=>Object.assign(e,{[Na]:t}),So=Symbol(`unparsed`),Co=({data:e,columns:t,hashParam:n,sortAndGroupOptions:r,noLocalSort:i,noLocalFilter:a})=>{let{groupOnColumn:o,groupOnDescending:s,sortOnColumn:c,descending:l}=r,u=x(([e,n])=>{let r=t.find(({name:t})=>t===e);return r==null?[e,void 0]:[e,n.filter&&r.serializeFilter(r,n.filter)]},[t]),d=x(([e,n])=>{let r=t.find(({name:t})=>t===e);if(r==null)return[e,{[So]:n}];let i={filter:r.deserializeFilter(r,n)};return bo(r,i),[e,i]},[t]),[f,p]=yi({},n,{multi:!0,suffix:`-filter--`,write:u,read:d}),m=x((e,n)=>p(r=>{let i=Fe(n,r[e]);return bo(t.find(t=>t.name===e),i),{...r,[e]:{...r[e],...i}}}),[t,p]),h=S(()=>Object.fromEntries(t.map(e=>[e.name,!e.noLocalFilter&&e.getFilterFn(e,f[e.name]?.filter)]).filter(([,e])=>!!e)),[t,...S(()=>Object.values(f).map(e=>e.filter),[f])]),g=S(()=>!Array.isArray(e)||e.length===0?[]:Object.entries(h).length===0||a?e.slice():e.filter(e=>Object.values(h).every(t=>t(e))),[e,h,a]),_=S(()=>{if(!i&&!o&&c!=null&&c.sortOn!=null)return g.slice().sort(vo(e=>c.getComparableValue({...c,valuePath:c.sortOn},e),l));if(o!=null&&o.groupOn!=null){let e=g.reduce((e,t)=>{let n=o.getComparableValue({...o,valuePath:o.groupOn},t);if(n===void 0)return e;let r=e.find(e=>e.id===n);return r?(r.items.push(t),e):(r={id:n,name:n,items:[t]},[...e,r])},[]);return e.sort(vo(e=>o.getComparableValue({...o,valuePath:o.groupOn},e.items[0]),s)),!c||i?e:e.filter(e=>Array.isArray(e.items)).map(e=>(e.items.sort(vo(e=>c.getComparableValue({...c,valuePath:c.sortOn},e),l)),e))}return g},[g,o,s,c,l,i]),v=S(()=>{let e=0,t=0,n=[];return _.forEach(r=>{if(Array.isArray(r.items)){xo(r,t++),r.items.forEach(t=>{xo(t,e++),n.push(t)});return}return xo(r,e++),n.push(r)},[]),n},[_]);return b(()=>{p(e=>Object.values(e).some(e=>e[So]!=null)?Object.fromEntries(Object.entries(e).map(([e,t])=>t[So]==null?[e,t]:d([e,t[So]]))):e)},[d]),{processedItems:_,visibleData:v,filters:f,filterFunctions:h,setFilterState:m}}})),To,Eo,Do=e((()=>{be(),h(),ve(),To=e=>{let t=t=>{let n=e.data.indexOf(t);if(n<0)return null;let r=e.data.splice(n,1);if(e.data=e.data.slice(),Array.isArray(r)&&r.length>0)return r[0]},n=(t,n)=>{e.data.splice(t,1,n),e.data=e.data.slice()};return{removeItem:t,removeItems(t){let n=[];for(let r=t.length-1;r>=0;--r){let i=e.removeItem(t[r]);i!=null&&n.push(i)}return n},replaceItemAtIndex:n,replaceItem(t,r){let i=e.data.indexOf(t);if(i>-1)return n(i,r)},selectItem(t){e.shadowRoot.querySelector(`#groupedList`).select(t)},selectAll(){e.shadowRoot.querySelector(`#groupedList`).selectAll()},deselectAll(){e.shadowRoot.querySelector(`#groupedList`).deselectAll()},deselectItem(t){e.shadowRoot.querySelector(`#groupedList`).deselect(t)},isItemSelected(t){return e.shadowRoot.querySelector(`#groupedList`).isItemSelected(t)}}},Eo=({host:e,visibleData:t,filters:n,...r})=>{let{setFilterState:i}=r,a=S(()=>To(e),[]);v(r,Object.values(r)),v(a,Object.values(a)),b(()=>{let t=e=>i(e.detail.name,t=>({...t,...e.detail.state}));return e.addEventListener(`legacy-filter-changed`,t),()=>e.removeEventListener(`legacy-filter-changed`,t)},[]),T(`visibleData`,t),T(`sortedFilteredGroupedItems`,r.sortedFilteredGroupedItems),T(`selectedItems`,r.selectedItems),T(`sortOn`,r.sortOn),T(`descending`,r.descending),T(`isMini`,r.isMini);let o=S(()=>Object.fromEntries(Object.entries(n).filter(([,{filter:e}])=>e!==void 0).map(([e,{filter:t}])=>[e,t])),[n]);T(`filters`,o,Object.values(o))}})),Oo,ko=e((()=>{h(),ka(),ro(),ao(),so(),ho(),wo(),Do(),Ei(),Oo=e=>{let{hashParam:t,settingsId:n,data:r,resizeSpeedFactor:i,noLocal:a,noLocalSort:o=a,noLocalFilter:s=a,error:c,rowPartFn:l}=e,u=Da({settingsId:n,host:e}),{settings:d,setSettings:f,columns:p,resetRef:m}=u,h=wi(p,t,d,f,m),{processedItems:g,visibleData:_,filters:v,setFilterState:ee,filterFunctions:te}=Co({data:r,columns:p,hashParam:t,sortAndGroupOptions:h,noLocalSort:o,noLocalFilter:s}),{isMini:y,collapsedColumns:ne,miniColumns:b}=no({host:e,columns:p,settings:d,setSettings:f,resizeSpeedFactor:i,sortAndGroupOptions:h}),re=r&&Array.isArray(r)&&r.length>0,[ie,ae]=j([]);return Eo({host:e,visibleData:_,sortedFilteredGroupedItems:g,columns:p,filters:v,setFilterState:ee,selectedItems:ie,isMini:y,...h}),{header:oo({host:e,selectedItems:ie,sortAndGroupOptions:h,dataIsValid:re,data:r,columns:p,filters:v,collapsedColumns:ne,settings:d,filterFunctions:te,settingS:u,setFilterState:ee,hideSelectAll:e.hideSelectAll===!0}),list:mo({host:e,error:c,dataIsValid:re,processedItems:g,setSelectedItems:ae,columns:p,collapsedColumns:ne,miniColumns:b,sortAndGroupOptions:h,rowPartFn:l}),footer:io({host:e,selectedItems:ie,columns:p})}}})),Ao=e((()=>{n(),customElements.define(`cosmoz-grouped-list-row`,class extends HTMLElement{get item(){return this._item}set item(e){this._item=e,this._render()}get index(){return this._index}set index(e){this._index=e,this._render()}get renderFn(){return this._renderFn}set renderFn(e){this._renderFn=e,this._render()}_render(){this._item==null||this._index==null||this._renderFn==null||r(this._renderFn(this._item,this._index),this)}})})),jo,Mo,No,Po,Fo,Io,Lo,Ro,zo,Bo=e((()=>{jo={group:Symbol(`group`)},Mo=(e,t)=>(t.has(e)||t.set(e,{}),t.get(e)),No=(e,t)=>!!Mo(e,t).expanded,Po=(e,t)=>!!Mo(e,t).folded,Fo=e=>e?e.items instanceof Array:!1,Io=e=>{if(!Array.isArray(e)||e.length===0)return;let t=Array.isArray(e[0]?.items);if(!e.every(e=>Array.isArray(e.items)===t))throw Error(`Data must be homogeneous.`)},Lo=(e,t,n)=>{if(Array.isArray(e))return Io(e),e.reduce((e,r)=>{let i=r;return i.items?i.items.length?Mo(r,n).folded?e.concat(r):e.concat(r,i.items.map(e=>Object.assign(e,{[jo.group]:r}))):t?e.concat(r):e:e.concat(r)},[])},Ro=(e,...t)=>typeof e==`function`?e(...t):e,zo=(e,t)=>e===t})),Vo,Ho=e((()=>{h(),Bo(),Vo=()=>{let[e,t]=j(()=>[new WeakMap]);return{setItemState:x((e,n)=>t(([t])=>{let r=Mo(e,t);return Object.assign(r,Ro(n,r)),[t]}),[]),state:e[0],signal:e}}})),Uo,Wo=e((()=>{h(),Ho(),Bo(),Uo=()=>{let{setItemState:e,state:t,signal:n}=Vo();return{state:t,signal:n,toggleFold:x((t,n)=>{Fo(t)&&e(t,e=>({folded:n===void 0?!e.folded:n}))},[]),toggleCollapse:x((t,n)=>{Fo(t)||e(t,e=>({expanded:n===void 0?!e.expanded:!n}))},[])}}})),Go,Ko=e((()=>{h(),Bo(),Go=({initial:e,compareItemsFn:t,data:n,flatData:r})=>{let[i,a]=j(e),[o,s]=j(),c=x(e=>i.includes(e),[i]),l=x(e=>e?.items?.every(c)??!1,[c]),u=x(e=>c(e)||l(e),[c,l]),d=x(e=>{let t=e.items??[e];a(e=>[...e,...t.filter(t=>!e.includes(t))]),s(e)},[]),f=x(e=>{let t=e.items??[e];a(e=>e.filter(e=>!t.includes(e))),s(e)},[]),p=x(e=>{a(e.items?.slice()||[e]),s(e)},[]),m=x(()=>{a(n.flatMap(e=>e.items||e)),s(void 0)},[n]),h=x(()=>{a([]),s(void 0)},[]),g=x((e,t=!u(e))=>t?d(e):f(e),[u]),_=x((e,n)=>{if(!r)return;let i=o?r.findIndex(e=>t(e,o)):-1;if(i<0)return g(e,n);let[a,c]=[i,r.indexOf(e)].sort((e,t)=>e-t);r.slice(a,c+1).forEach((e,t,r)=>{t>0&&t<r.length-1&&Fo(e)||g(e,n)}),s(e)},[r,t,g]);return b(()=>a(e=>e.length>0&&r?r.filter(n=>e.find(e=>t(n,e))):e),[r]),{selectedItems:i,isItemSelected:c,isGroupSelected:l,isSelected:u,select:d,deselect:f,selectOnly:p,selectAll:m,deselectAll:h,toggleSelect:g,toggleSelectTo:_}}})),qo,Jo,Yo,Xo=e((()=>{be(),ve(),h(),n(),Ao(),Wo(),Ko(),Bo(),ge(),qo={host:{position:`relative`,display:`flex`,flexDirection:`column`}},Jo=e=>{let{data:t,renderItem:n,renderGroup:r,displayEmptyGroups:i,compareItemsFn:a=zo}=e,{toggleFold:o,toggleCollapse:s,state:c,signal:l}=Uo(),u=S(()=>Lo(t,i,c),[t,i,l]),{selectedItems:d,isItemSelected:f,isGroupSelected:p,isSelected:m,select:h,deselect:g,selectOnly:_,selectAll:ee,deselectAll:te,toggleSelect:y,toggleSelectTo:ne}=Go({initial:[],compareItemsFn:a,data:t,flatData:u}),b=x((e,t)=>Array.isArray(e.items)?r(e,t,{selected:p(e),folded:Po(e,c),toggleSelect:t=>y(e,typeof t==`boolean`?t:void 0),toggleFold:()=>o(e)}):n(e,t,{selected:d.includes(e),expanded:No(e,c),toggleSelect:t=>y(e,typeof t==`boolean`?t:void 0),toggleCollapse:()=>s(e)}),[n,r,d,y,l]);ce(()=>{Object.assign(e.style,qo.host)},[]),T(`selectedItems`,d);let re={toggleFold:o,toggleCollapse:s,isItemSelected:f,isGroupSelected:p,isSelected:m,select:h,deselect:g,selectOnly:_,selectAll:ee,deselectAll:te,toggleSelect:y,toggleSelectTo:ne};return v(re,Object.values(re)),{renderRow:b,flatData:u}},Yo=({renderRow:e,flatData:t})=>m({items:t,renderItem:(t,n)=>i`<cosmoz-grouped-list-row
				.item=${t}
				.index=${n}
				.renderFn=${e}
			></cosmoz-grouped-list-row>`})})),Zo,Qo=e((()=>{Xo(),h(),Zo=e=>Yo(Jo(e)),customElements.define(`cosmoz-grouped-list`,p(Zo,{useShadowDOM:!1}))})),$o=e((()=>{Qo()})),es,ts,ns,rs=e((()=>{ze(),jt(),ei(),ni(),ki(),Pi(),Li(),ve(),h(),Ae(),n(),_e(),Bi(),Ji(),Xi(),ta(),ko(),$o(),es=e=>window.ShadyCSS?.ApplyShim?.transformCssText?.(e)||e,ts=e=>{let{header:t,list:n,footer:r}=Oo(e);return i`
		<style>
			${lt([],()=>es(zi))}
		</style>

		<div class="mainContainer">
			${Yi(t)}
			<div class="tableContent" id="tableContent">
				${ea(t,n)}
			</div>
			${qi(r)}
		</div>

		<div id="columns">
			<slot id="columnsSlot"></slot>
		</div>
	`},customElements.define(`cosmoz-omnitable`,class extends p(ts,{observedAttributes:[`hash-param`,`sort-on`,`group-on`,`descending`,`group-on-descending`,`hide-select-all`,`settings-id`,`no-local`,`no-local-sort`,`no-local-filter`,`disabled-filtering`,`loading`,`mini-breakpoint`]}){connectedCallback(){super.connectedCallback(),te(this,`selectedItems`,[]),te(this,`visibleData`,[]),te(this,`sortedFilteredGroupedItems`,[])}}),ns=`
	<slot name="actions" slot="actions"></slot>
`,i(Object.assign([ns],{raw:[ns]})),tt(Object.assign([ns],{raw:[ns]}))})),is,$,as,os,ss,cs=e((()=>{is=(e,t,n)=>{let r=String(e),i=-1,a=!n&&n!==0?` `:n,o=t-r.length;for(;++i<o;)r=a+r;return r},$=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,as=()=>`2015-`+is($(1,12),2,`0`)+`-`+is($(1,28),2,`0`),os=()=>{let e=$(0,20);return e===1?new Date(2015,3,2,14,26,10,299):e===2?new Date(2016,4,2,10,9,10,444):e===3?new Date(2016,4,2,10,9,10,443):e===4?new Date(2016,4,2,10,9,10,442):new Date($(2014,2017),$(1,12),$(1,28),$(0,23),$(0,59),$(0,59),$(0,999))},ss=(e,t,n)=>{let r=$(e,t),i=[],a=[`Lorem ipsum dolor sit amet`,`Nunc tristique`,`Curabitur vestibulum`,`Cras laoreet`,`Himenaeos`,`maximus diam purus at mauris`],o=[`SEK`,`USD`,`EUR`,`AUD`],s=0;for(let e=0;e<r;e+=1){let t=`Group `+e,r=e*2+1;for(let e=0;e<r;e+=1){let r=[],c=[],l=[],u=s%10;for(let e=0;e<u;e+=1)r.push(`Item `+e),c.push({name:`Item `+e,value:`item-value-`+e}),l.push({value:`cat-`+e,label:`Category `+e});i.push({id:s,name:t+` item `+e,value:$(0,1e4),bool:$(0,100)>50,object:{value:$(0,1e4),label:`Random string `+$(1,n)},sub:{subProp:a[s%a.length]},randomString:`Random string `+$(1,n),randomString2:`Random string 2 `+$(1,n),randomString3:`Random string 3 `+$(1,n),randomString4:`Random string 4 `+$(1,n),date:os(),dateJSON:as(),amount:{amount:$(10,100),currency:o[s%o.length]},group:t,list:r,objectList:c,categories:s%7==0?null:l}),s+=1}}return i}})),ls,us,ds,fs,ps;e((()=>{n(),me(),gt(),rs(),cs(),ls={title:`Components/ComsmozOmnitableFullDemo`,component:`cosmoz-omnitable`,tags:[`autodocs`],args:{loading:!1,locale:`en`,sortOn:``,groupOn:``,descending:!1,groupOnDescending:!1,hashParam:``,settingsId:``,selectedItems:[],disabled:!1,disabledFiltering:!1},argTypes:{loading:{control:`boolean`,description:`Show loading state`,table:{defaultValue:{summary:`false`}}},locale:{control:`select`,options:[`en`,`fr`,`sv`],description:`Language locale`,table:{defaultValue:{summary:`en`}}},selectedItems:{control:`object`,description:`Show selected items`},data:{control:`object`,description:`Show specified items`},sortOn:{control:`text`,description:`Column property name to sort on (e.g., "amount", "date", "id")`},groupOn:{control:`text`,description:`Column property name to group on (e.g., "amount", "date", "id")`},descending:{control:`boolean`,description:`Sort on descending`},groupOnDescending:{control:`boolean`,description:`Group on descending`},hashParam:{control:`text`,description:`Hash parameter for URL state management`},settingsId:{control:`text`,description:`ID for storing table settings`},disabled:{control:`boolean`,description:`Hide one column`,table:{defaultValue:{summary:`false`}}},disabledFiltering:{control:`boolean`,description:`Disable filter inputs in all column headers`,table:{defaultValue:{summary:`false`}}}},render:e=>i`
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
                    ${l({styles:`vertical-align: middle; fill: currentColor;`})}
                    <span>Remove items</span>
                </paper-button>
            </cosmoz-omnitable>
        `,play:async()=>{console.log(`Current hash:`,window.location.hash)}},us={args:{data:ss(10,10,10)}},ds={args:{data:ss(2,2,10)}},fs={args:{data:[]}},us.parameters={...us.parameters,docs:{...us.parameters?.docs,source:{originalSource:`{
  args: {
    data: generateTableDemoData(10, 10, 10)
  }
}`,...us.parameters?.docs?.source}}},ds.parameters={...ds.parameters,docs:{...ds.parameters?.docs,source:{originalSource:`{
  args: {
    data: generateTableDemoData(2, 2, 10)
  }
}`,...ds.parameters?.docs?.source}}},fs.parameters={...fs.parameters,docs:{...fs.parameters?.docs,source:{originalSource:`{
  args: {
    data: []
  }
}`,...fs.parameters?.docs?.source}}},ps=[`TableWithLargeData`,`TableWithSmallData`,`TableWithNoData`]}))();export{us as TableWithLargeData,fs as TableWithNoData,ds as TableWithSmallData,ps as __namedExportsOrder,ls as default};