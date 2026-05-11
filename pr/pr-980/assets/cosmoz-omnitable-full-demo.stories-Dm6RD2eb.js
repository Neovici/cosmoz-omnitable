import{n as e}from"./chunk-BneVvdWh.js";import{J as t,Q as n,Y as r,Z as i}from"./iframe-CfLgzqFY.js";import{$ as a,A as o,At as s,B as c,Bt as l,C as u,Ct as d,D as f,Dt as p,E as m,Et as h,F as g,Ft as _,G as v,H as y,Ht as ee,I as b,It as te,J as ne,K as x,L as S,Lt as re,M as ie,Mt as ae,N as oe,Nt as C,O as se,Ot as w,P as ce,Pt as le,Q as ue,R as T,Rt as de,S as fe,St as E,T as pe,Tt as me,U as he,V as D,Vt as ge,W as _e,X as ve,Y as ye,Z as be,_ as xe,_t as Se,a as Ce,at as we,b as O,bt as Te,c as Ee,ct as k,d as De,dt as Oe,et as ke,f as Ae,ft as je,g as Me,gt as Ne,h as Pe,ht as Fe,i as Ie,it as Le,j as Re,jt as A,k as ze,kt as Be,l as Ve,lt as He,m as Ue,mt as We,n as Ge,nt as j,o as Ke,ot as qe,p as Je,pt as Ye,q as M,r as Xe,rt as Ze,s as Qe,st as N,t as $e,tt as P,u as et,ut as tt,v as nt,vt as rt,w as it,wt as at,x as ot,xt as st,y as ct,yt as lt,z as ut,zt as F}from"./dist-Dk6kuSR2.js";var dt,ft=e((()=>{E(),dt=()=>i`<style>
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
</style>`,customElements.define(`cz-spinner`,d(dt))})),pt,mt,I=e((()=>{v(),E(),pt=M`
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
`,mt=()=>i`
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
`,customElements.define(`cosmoz-clear-button`,d(mt))})),L,ht,gt,_t,vt,R,z=e((()=>{k(),L=({valuePath:e},t)=>N(t,e),ht=L,gt=L,_t=({valuePath:e},t)=>n=>{let r=N(n,e);return r==null?!1:r.toString().toLowerCase().trim().includes(t.toLowerCase().trim())},vt=(e,t)=>t===``||t==null?null:t,R=e=>class extends e{static get properties(){return{isOmnitableColumn:{type:Boolean,value:!0},title:{type:String},valuePath:{type:String,notify:!0},values:{type:Array,notify:!0},filter:{type:Object},noLocalFilter:{type:Boolean},disabled:{type:Boolean,value:!1,notify:!0},editable:{type:Boolean,notify:!0},loading:{type:Boolean,value:!1,notify:!0},externalValues:{type:Boolean,value:!1,notify:!0},name:{type:String},sortOn:{type:String},groupOn:{type:String},noSort:{type:Boolean,value:!1},disabledFiltering:{type:Boolean,value:!1},width:{type:String,value:`75px`},minWidth:{type:String,value:`40px`},flex:{type:String,value:`1`},cellClass:{type:String,value:`default-cell`},headerCellClass:{type:String,value:`default-header-cell`},priority:{type:Number,value:0},hidden:{type:Boolean,notify:!0},preferredDropdownHorizontalAlign:{type:String,value:`right`},renderHeader:{type:Function},renderCell:{type:Function},renderEditCell:{type:Function},renderGroup:{type:Function},mini:{type:Number,value:null},renderMini:{type:Function}}}static get observers(){return[`notifyFilterChange(filter)`]}notifyFilterChange(e){this.__ownChange||this.dispatchEvent(new CustomEvent(`legacy-filter-changed`,{detail:{name:this.name,state:this.legacyFilterToState(e)},bubbles:!0}))}legacyFilterToState(e){return{filter:e}}getFilterFn(){}getString(e,t){return L(e,t)}toXlsxValue(e,t){return ht(e,t)}cellTitleFn(e,t){return this.getString(e,t)}headerTitleFn(e){return e.title}serializeFilter(e,t){return vt(e,t)}deserializeFilter(e,t){return t==null?null:typeof t==`string`?window.decodeURIComponent(t):t}getComparableValue(e,t){return gt(e,t)}computeSource(e,t){return t}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n),this.dispatchEvent(new CustomEvent(`cosmoz-column-prop-changed`,{bubbles:!0}))}}})),yt,bt,xt,St,Ct,wt,Tt,Et=e((()=>{T(),I(),j(),n(),F(),z(),yt=e=>t=>e(n=>{if(n.inputValue===void 0&&t.target.value===``)return n;clearTimeout(n.t);let r=setTimeout(()=>e(e=>({...e,filter:e.inputValue})),1e3);return{...n,inputValue:t.target.value,t:r}}),bt=e=>()=>e(e=>({...e,filter:e.inputValue})),xt=e=>t=>{t.keyCode===13&&(t.preventDefault(),e(e=>({...e,filter:e.inputValue})))},St=e=>t=>e(e=>({...e,headerFocused:t.detail.value})),Ct=e=>()=>e(e=>({...e,filter:null,inputValue:null})),wt=e=>e!=null&&e!==``,Tt=class extends R(P){static get properties(){return{minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},inputValue:{type:Object,notify:!0}}}getFilterFn(e,t){if(!(t==null||t===``))return _t(e,t)}renderCell(e,{item:t}){return i`<span class="default-column">${L(e,t)}</span>`}renderEditCell(e,{item:t},n){return i`<cosmoz-input
			no-label-float
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${L(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,inputValue:n,headerFocused:r},a){return i`<cosmoz-input
			label=${e.title}
			?disabled=${e.disabledFiltering}
			.value=${n??t}
			@value-changed=${yt(a)}
			focused=${r}
			@focused-changed=${St(a)}
			@keydown=${xt(a)}
			@blur=${bt(a)}
		>
			${l(!e.disabledFiltering,()=>i`<cosmoz-clear-button
						suffix
						slot="suffix"
						?visible=${wt(t)}
						light
						@click=${Ct(a)}
					></cosmoz-clear-button>`)}
		</cosmoz-input>`}legacyFilterToState(e){return{filter:e,inputValue:e}}},customElements.define(`cosmoz-omnitable-column`,Tt)})),Dt,Ot,kt,B=e((()=>{T(),E(),n(),Dt=[`label`,`value`,`slot`,`always-float-label`,`disabled`],Ot=le`
	${_e}

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
`,kt=e=>{let{label:t,value:n,slot:r}=e;return a(i`<div
		id="input"
		part="input"
		role="button"
		class="control"
		slot=${r}
	>
		${n||``}
	</div>`,{label:t})},customElements.define(`cosmoz-omnitable-dropdown-input`,d(kt,{observedAttributes:Dt,styleSheets:[Ot]}))})),V,At=e((()=>{We(),n(),g(),B(),V=({title:e,tooltip:t=``,filterText:n=``,onOpenedChanged:r,content:a,horizontalAlign:o=`left`,externalValues:s=null})=>i`
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
			class=${ce({filtered:!!n,...s!=null&&{[`external-values-${s}`]:!0},dropdown:!0})}
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
	`})),jt,Mt,Nt=e((()=>{Oe(),we(),oe(),o(),jt=e=>e?typeof e.close==`function`?e:jt(e.parentElement):null,Mt=e=>class extends e{static get properties(){return{disabled:{type:Boolean,value:!1},filter:{type:Object,notify:!0},values:{type:Array,value(){return[]}},headerFocused:{type:Boolean,notify:!0},min:{type:Number,value:null},max:{type:Number,value:null},limits:{type:Function},autoupdate:{type:String,value:!0},locale:{type:String,value:null},_filterInput:{type:Object,value(){return{min:null,max:null}}},_range:{type:Object,computed:`_computeRange(values.*)`},_limit:{type:Object,computed:`_computeLimit(_range, _filterInput.*, min, max)`,value(){return{}}},_tooltip:{type:String,computed:`_computeTooltip(title, _filterText)`},_fromClasses:{type:String,computed:`_computeInputClasses(_filterInput.min)`},_toClasses:{type:String,computed:`_computeInputClasses(_filterInput.max)`}}}static get observers(){return[`_filterInputChanged(_filterInput.*, autoupdate)`,`_filterChanged(filter.*)`,`_updateLimits(limits, headerFocused)`]}disconnectedCallback(){this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),super.disconnectedCallback()}_computeInputClasses(e){return e!=null&&e!==``?`has-value`:``}toNumber(e,t,n){if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=this.toNumber(t);return i==null?r:n(r,i)}toValue(){return this.toNumber.apply(this,arguments)}getComparableValue(e,t){if(e==null)return;let n=e;return t!=null&&(n=this.get(t,e)),this.toValue(n)}renderValue(){}getInputString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return this._toInputString(n)}_computeRange(e){let t=e.base,n=Array.isArray(t)&&t.length&&t.map(e=>this.toValue(e)).filter(e=>e!=null);return!n||n.length<1?{min:null,max:null}:n.reduce((e,t)=>({min:this.toValue(t,e.min,Math.min),max:this.toValue(t,e.max,Math.max)}),{})}_computeLimit(e,t,n,r){if(!e)return;let i=t.base,a=this.toValue(n),o=this.toValue(r),s=a??this.toValue(e.min),c=o??this.toValue(e.max);return{fromMin:s,fromMax:this.toValue(c,this._fromInputString(i.max,`max`),Math.min),toMin:this.toValue(s,this._fromInputString(i.min,`min`),Math.max),toMax:c}}_computeFilterText(e){if(e.base==null)return;let t=e.base,n=this.toValue(t.min),r=this.toValue(t.max),i=[];return n!=null&&i.push(this.renderValue(n)),i.push(` - `),r!=null&&i.push(this.renderValue(r)),i.length>1?i.join(``):void 0}_computeTooltip(e,t){return t==null?e:`${e}: ${t}`}_fromInputString(e){return this.toValue(e)}_toInputString(e){return this.toValue(e)??null}_getDefaultFilter(){return{min:null,max:null}}_filterInputChanged(e,t){this.__inputChangePath=e.path.split(`.`)[1]||null,t&&(this._limitInputDebouncer=Re.debounce(this._limitInputDebouncer,qe.after(600),()=>{this._limitInput(),this._updateFilter()}),ie(this._limitInputDebouncer))}_clearFrom(){this.set(`_filterInput.min`,null),this._updateFilter()}_clearTo(){this.set(`_filterInput.max`,null),this._updateFilter()}_onBlur(){this._limitInput(),this._updateFilter()}_onKeyDown(e){let t=e.currentTarget,n=Array.from(t.parentElement.querySelectorAll(`cosmoz-input`)),r=n[n.findIndex(e=>e===t)+1],i=!r,a=n[0]===t;switch(e.keyCode){case 13:if(e.preventDefault(),!i)r.focus();else{let e=this._limitInput();this._updateFilter(),e||this._closeParent(t)}break;case 9:(i&&!e.shiftKey||a&&e.shiftKey)&&this._closeParent(t)}}_closeParent(e){let t=jt(e);t&&t.close()}_onDropdownOpenedChanged({currentTarget:e,type:t,detail:n}){(t===`focus`||n?.value===!0)&&setTimeout(()=>{e.querySelector(`cosmoz-input:focus`)||e.querySelector(`cosmoz-input`)?.focus()},100)}_limitInput(){let e=this._filterInput,t=this.__inputChangePath,n=t?this._fromInputString(this.get(t,e),t):null;if(this.__inputChangePath=null,n==null)return!1;let r=this._limit,i=t===`min`?`from`:`to`,a=this.get(i+`Min`,r),o=this.get(i+`Max`,r),s=this.toValue(n,a,Math.max),c=this.toValue(s,o,Math.min);return this.getComparableValue(n)===this.getComparableValue(c)?!1:(this.set([`_filterInput`,t],this._toInputString(c,t)),this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),!0)}_updateFilter(){let e=this._filterInput,t=this.filter,n=this._fromInputString(e.min,`min`),r=this._fromInputString(e.max,`max`);this.getComparableValue(n)===this.getComparableValue(t,`min`)&&this.getComparableValue(r)===this.getComparableValue(t,`max`)||this.set(`filter`,{min:n,max:r})}_filterChanged(e){if(this._filterInput==null)return;let t=this._filterInput,n=e.base,r=this._fromInputString(t.min,`min`),i=this._fromInputString(t.max,`max`);this.getComparableValue(r)===this.getComparableValue(n,`min`)&&this.getComparableValue(i)===this.getComparableValue(n,`max`)||(this.set(`_filterInput`,{min:this._toInputString(n.min),max:this._toInputString(n.max)}),this._limitInputDebouncer&&this._limitInputDebouncer.cancel())}hasFilter(){let e=this.filter;return e==null?!1:this.toValue(e.min)!=null||this.toValue(e.max)!=null}resetFilter(){this.filter=this._getDefaultFilter()}_updateLimits(e,t){e&&Promise.resolve(je(e,{active:t})).then(e=>{let{min:t,max:n}=e??{};Object.assign(this,{...t==null?{}:{min:t},...n==null?{}:{max:n}})})}}})),Pt,Ft=e((()=>{j(),n(),Pt=e=>class extends e{static get template(){return Ze`<div id="output" style="position:relative;"></div>`}connectedCallback(){super.connectedCallback(),r(this.render(),this.$.output)}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n),requestAnimationFrame(()=>r(this.render(),this.$.output))}}})),It,Lt=e((()=>{T(),j(),b(),n(),F(),At(),B(),Nt(),Ft(),It=class extends Mt(Pt(P)){static get properties(){return{currency:{type:String},autodetect:{type:Boolean,value:!1},rates:{type:Object},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, _formatters)`},headerFocused:{type:Boolean,value:!1}}}static get observers(){return[`_valuesChanged(autodetect, currency, values)`]}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return i`
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
			${l(this.disabled,()=>i`
					<cosmoz-omnitable-dropdown-input
						disabled
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>i`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${V({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:i`
							<h3 style="margin: 0;">${this.title}</h3>
							<cosmoz-input
								class=${this._fromClasses}
								type="number"
								title=${S(`Minimum amount`)}
								label=${S(`Min amount`)}
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
								title=${S(`Maximum amount`)}
								label=${S(`Max amount`)}
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
		`}_valuesChanged(e,t,n){if(!Array.isArray(n)||n.length<1||!e&&t)return;let r=n.reduce((e,t)=>{if(t.currency){let n=t.currency;e[n]=(e[n]||0)+1}return e},{}),i=Object.keys(r)[0];Object.keys(r).reduce((e,t)=>{let n=Math.max(e,r[t]);return n===r[t]&&(i=t),n},0),this.set(`currency`,i)}toAmount(e,t,n){if(e==null||e===``)return;if(typeof e!=`object`||e.currency==null||e.currency===``)return null;let r=this.toNumber(e.amount);if(r==null||Number.isNaN(r))return null;let i={currency:e.currency,amount:r};if(n==null||t==null)return i;let a=this.toAmount(t);if(a==null)return i;let o=this.rates||{},s=i.amount*(o[i.currency]||1),c=a.amount*(o[a.currency]||1);return this.toNumber(s,c,n)===s?i:a}toValue(){return this.toAmount.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n==null)return;let r=this.toNumber(n.amount),i=this.rates;return i==null?r:r*(i[n.currency]||1)}getString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return n===void 0?``:n===null?`Invalid value`:this.renderValue(n)}getCurrency(e,t){let n=this.get(t,e);return n&&n.currency}getFormatter(e,t){let n=e+(t||``)||``,r=this._formatters=this._formatters||{};return r[n]||(r[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),r[n]}renderValue(e){let t=this.toAmount(e);return t==null?``:this.getFormatter(t.currency,this.locale).format(e.amount)}_amountValueChanged(e){let t=e.target.value,n=e.model.item,r=this.get(this.valuePath,n),i={amount:Number(t),currency:r.currency};this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toInputString(e){let t=this.toValue(e);return t==null?null:this.toNumber(t.amount)}_toInputStringAmount(e){let t=this.rates;if(t==null)return this._toInputString(e);let n=this.toValue(e);return n==null?null:(this.toNumber(n.amount)*(t[n.currency]||1)/(t[this.currency]||1)).toFixed(2)}_fromInputString(e,t){let n=this.toNumber(e);if(n!=null)return this.toValue({amount:n,currency:t&&this.get([`filter`,t,`currency`])||this.currency})}},customElements.define(`cosmoz-omnitable-amount-range-input`,It)})),H,Rt,zt,Bt,U,Vt,Ht,Ut,Wt=e((()=>{k(),f(),H=(e,t,n)=>{if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=H(t);return i==null?r:n(r,i)},Rt=e=>{let t=H(e);return t==null?null:t.toString()},zt=({valuePath:e},t)=>Rt(H(e?N(t,e):t)),Bt=e=>Rt(e)??``,U=({valuePath:e,maximumFractionDigits:t},n)=>{if(n==null)return;let r=H(e?N(n,e):n);if(r!=null)return t===null?r:H(r.toFixed(t))},Vt=ze((e,t,n)=>{let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}),Ht=({valuePath:e,locale:t,minimumFractionDigits:n,maximumFractionDigits:r},i)=>{let a=e?N(i,e):i;if(a==null)return``;let o=H(a);if(o!=null)return Vt(t,n,r).format(o)},Ut=(e,t)=>n=>{let r=U(e,n);if(r==null)return!1;let i=U({...e,valuePath:`min`},t),a=U({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})),W,G,Gt,Kt,qt,Jt,Yt,Xt,Zt,Qt,$t,en=e((()=>{k(),Wt(),W=(e={},t,n,r)=>{if(t==null||t===``)return;if(typeof t!=`object`||t.currency==null||t.currency===``)return null;let i=H(t.amount);if(i==null||Number.isNaN(i))return null;let a={currency:t.currency,amount:i};if(r==null||n==null)return a;let o=W(e,n);if(o==null)return a;let s=a.amount*(e[a.currency]||1);return H(s,o.amount*(e[o.currency]||1),r)===s?a:o},G=({valuePath:e,rates:t},n)=>{if(n==null)return;let r=n;e!=null&&(r=N(n,e));let i=W(t,r);if(i==null)return;let a=H(i.amount);return t==null||a==null?a:a*(t?.[i.currency]||1)},Gt=(e,t)=>n=>{let r=G(e,n);if(r===void 0)return!1;let i=G({...e,valuePath:`min`},t),a=G({...e,valuePath:`max`},t);return i===void 0||a===void 0?!0:!(r<i||r>a)},Kt={},qt=(e,t)=>{let n=e+(t||``)||``;return Kt[n]||(Kt[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),Kt[n]},Jt=(e,t,n)=>{let r=W(e,t);return r==null?``:qt(r.currency,n).format(r.amount)},Yt=({valuePath:e,rates:t,locale:n},r)=>{let i=W(t,e?N(r,e):void 0);return i===void 0?``:i===null?`Invalid value`:Jt(t,i,n)},Xt=e=>e?e.amount+e.currency:``,Zt=e=>{if(e==null||e===``)return;let t=e.match(/^(-?[\d]+)([\D]+?)$/iu);if(!(!Array.isArray(t)||t.length<0))return{amount:Number(t[1]),currency:t[2]}},Qt=({valuePath:e},t)=>e?N(t,e)?.currency:null,$t=({valuePath:e},t)=>e?N(t,e)?.amount:void 0})),K,tn,nn,rn,an,on,sn,cn=e((()=>{f(),E(),K=Symbol(`column`),tn=e=>{let t=!0,n=e.map(e=>e.name);return e.forEach(e=>{e.name??(t=!1,console.error(`The name attribute needs to be set on all columns! Missing on column`,e))}),e.forEach(e=>{n.indexOf(e.name)!==n.lastIndexOf(e.name)&&(t=!1,console.error(`The name attribute needs to be unique among all columns! Not unique on column`,e))}),t},nn=(e,t)=>{let n=e.valuePath??e.name;return{name:e.name,title:e.title,valuePath:n,groupOn:e.groupOn??n,sortOn:e.sortOn??n,noSort:e.noSort,disabledFiltering:t||e.disabledFiltering,minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,getString:e.getString,getComparableValue:e.getComparableValue,serializeFilter:e.serializeFilter,deserializeFilter:e.deserializeFilter,toXlsxValue:e.toXlsxValue,renderHeader:e.renderHeader,renderCell:e.renderCell,renderEditCell:e.renderEditCell,renderGroup:e.renderGroup,cellTitleFn:e.cellTitleFn,headerTitleFn:e.headerTitleFn,getFilterFn:e.getFilterFn,headerCellClass:e.headerCellClass,cellClass:e.cellClass,editable:e.editable,values:e.values,source:se(e.computeSource),noLocalFilter:e.noLocalFilter,mini:e.mini,renderMini:e.renderMini,loading:e.loading,externalValues:e.externalValues,computeSource:e.computeSource,trueLabel:e.trueLabel,falseLabel:e.falseLabel,valueProperty:e.valueProperty,textProperty:e.textProperty,emptyLabel:e.emptyLabel,emptyValue:e.emptyValue,min:e.min,max:e.max,locale:e.locale,autoupdate:e.autoupdate,maximumFractionDigits:e.maximumFractionDigits,minimumFractionDigits:e.minimumFractionDigits,currency:e.currency,rates:e.rates,autodetect:e.autodetect,ownerTree:e.ownerTree,keyProperty:e.keyProperty,...e.getConfig?.(e),[K]:e}},rn=e=>e.isOmnitableColumn&&!e.hidden,an=e=>{let t=e.filter(rn);return tn(t)?t:[]},on=(e,t,n)=>(Array.isArray(t)?e.filter(e=>t.includes(e.name)):e.filter(e=>!e.disabled)).map(e=>nn(e,n)),sn=(e,{enabledColumns:t,disabledFiltering:n})=>{let[r,i]=w([]);return Be(()=>{let r,a=[],o=e.shadowRoot.querySelector(`#columnsSlot`),s=e=>()=>{let r=o.assignedNodes({flatten:!0});if(e)a=r;else{let e=r.filter(e=>!a.includes(e)),t=a.filter(e=>!r.includes(e)),n=[...e,...t].some(e=>e.isOmnitableColumn);if(a=r,!n)return}i(on(an(r),t,n))},c=e=>{cancelAnimationFrame(r),r=requestAnimationFrame(s(e?.type===`cosmoz-column-prop-changed`))};return c(),o.addEventListener(`slotchange`,c),e.addEventListener(`cosmoz-column-prop-changed`,c),()=>{o.removeEventListener(`slotchange`,c),e.removeEventListener(`cosmoz-column-prop-changed`,c),cancelAnimationFrame(r)}},[t,n]),r}})),ln,un,dn,q=e((()=>{k(),cn(),ln=(e,t)=>Array.isArray(e)?e.map(e=>N(e,t)).filter((e,t,n)=>e!=null&&n.indexOf(e)===t):void 0,un=({externalValues:e,values:t,valuePath:n},r)=>{if(e)return e;if(typeof t==`function`)return t;if(n!==void 0)return ln(r,n)},dn=(e,t,n,r)=>{let{valuePath:i}=t,a=i===void 0?void 0:N(n,i);if(r===a)return;i!==void 0&&He(n,i,r);let o={item:n,valuePath:i,value:r,oldValue:a,column:t[K]};e.dispatchEvent(new CustomEvent(`column-item-changed`,{bubbles:!0,composed:!0,detail:o}))}})),fn,pn=e((()=>{T(),I(),j(),n(),k(),z(),Lt(),en(),q(),fn=class extends R(P){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},currency:{type:String,notify:!0},autodetect:{type:Boolean,value:!1,notify:!0},rates:{type:Object,notify:!0},width:{type:String,value:`70px`},cellClass:{type:String,value:`amount-cell align-right`},headerCellClass:{type:String,value:`amount-header-cell`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=G({...e,valuePath:`min`},t),r=G({...e,valuePath:`max`},t);if(!(n==null&&r==null))return Gt(e,t)}getString(e,t){return Yt(e,t)}toXlsxValue(e,t){return Yt(e,t)}getComparableValue(e,t){return G(e,t)}serializeFilter({rates:e},t){if(t==null)return;let n=W(e,t.min),r=W(e,t.max);if(!(n==null&&r==null))return Xt(n)+`~`+Xt(r)}deserializeFilter(e,t){if(t==null||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Zt(n[1]),max:Zt(n[2])}:null}renderCell(e,{item:t}){return i`<span>${e.getString(e,t)}</span>`}renderEditCell(e,{item:t},n){return i`<cosmoz-input
			no-label-float
			type="number"
			@change=${r=>n({amount:r.target.value,currency:N(t,e.valuePath)?.currency})}
			.value=${$t(e,t)}
		>
			<div slot="suffix">${Qt(e,t)}</div>
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
		></cosmoz-omnitable-amount-range-input>`}computeSource(e,t){return un(e,t)}},customElements.define(`cosmoz-omnitable-column-amount`,fn)})),mn,hn,gn,_n,vn,yn,bn,xn,Sn,Cn,wn,Tn,En=e((()=>{nt(),Oe(),ct(),k(),q(),mn=(e,t)=>{if(!Array.isArray(e))return;let n=[];return e.reduce((e,t)=>Array.isArray(t)?(t.forEach(t=>{e.push(t)}),e):(e.push(t),e),[]).filter((e,r,i)=>{if(i.indexOf(e)!==r)return!1;if(t){let r=N(e,t);if(n.indexOf(r)!==-1)return!1;n.push(r)}return!0})},hn=(e,t,n)=>{if(e==null)return[];if(Array.isArray(e)){let r=mn(e,t);if(!r?.length)return r;let i=n??`label`,a=e=>String(typeof e==`object`&&e?N(e,i)??``:e??``);return r.sort((e,t)=>a(e).localeCompare(a(t)))}if(typeof e==`object`){let r=t??`id`,i=n??`label`;return Object.entries(e).map(([e,t])=>({[r]:e,[i]:t})).sort((e,t)=>String(e[i]??``).localeCompare(String(t[i]??``)))}return[]},gn=(e,t,n)=>xe(t&&N(e,t)).map(O(n)),_n=({valuePath:e,textProperty:t},n)=>gn(n,e,t).filter(e=>e!=null).join(`, `),vn=_n,yn=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>a=>{let o=O(e),s=xe(N(a,t));return i.some(t=>s.length===0&&O(r||e)(t)===n||s.some(e=>o(e)===o(t)))},bn=e=>t=>e(e=>({...e,filter:t})),xn=e=>t=>e(e=>({...e,headerFocused:t})),Sn=e=>t=>e(e=>({...e,query:t})),Cn=({emptyValue:e,emptyLabel:t,emptyProperty:n,textProperty:r,valueProperty:i},a)=>{let o=hn(a,i,r);return!t||e===void 0||!r||!(n||i)||!o?o:[{[r]:t,[n||i]:e},...o]},wn=(e,t)=>Cn(e,ln(t,e.valuePath)),Tn=e=>class extends e{static get properties(){return{textProperty:{type:String},valueProperty:{type:String},emptyLabel:{type:String},emptyValue:{type:Object},emptyProperty:{type:String}}}getConfig(e){return{emptyProperty:e.emptyProperty}}getString(e,t){return _n(e,t)}toXlsxValue(e,t){return vn(e,t)}getComparableValue({valuePath:e,valueProperty:t},n){let r=N(n,e);return t==null?r:xe(r).reduce((e,n)=>(e.push(N(n,t)),e),[]).sort().join(` `)}getFilterFn(e,t){if(!(!t||!Array.isArray(t)||t.length===0))return yn(e,t)}serializeFilter(e,t){return t.length===0?null:JSON.stringify(t)}deserializeFilter(e,t){return JSON.parse(decodeURIComponent(t))}computeSource(e,t){return e.externalValues||typeof e.values==`function`?async(...t)=>Cn(e,await Promise.resolve(je(e.values,...t))):wn(e,t)}}})),Dn,On,kn,An=e((()=>{Me(),Pe(),j(),n(),F(),nt(),ct(),En(),z(),E(),k(),cn(),Dn=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?fe(t):O(n),a=xe(e&&N(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},On=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>{let a=O(e),o=O(r||e),s=new Set(i.filter(e=>e.excluded).map(e=>a(e.item))),c=new Set(i.filter(e=>!e.excluded).map(e=>a(e.item))),l=i.some(e=>e.excluded&&o(e.item)===n),u=i.some(e=>!e.excluded&&o(e.item)===n);return e=>{let n=xe(N(e,t)).map(a);return n.length===0?!l&&(u||c.size===0):!n.some(e=>s.has(e))&&(c.size===0||n.some(e=>c.has(e)))}},kn=class extends Tn(R(P)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return i`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},n){return i`<cosmoz-input
			no-label-float
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${L(e,t)}
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
			.itemRenderer=${e[K]?.itemRenderer}
			.value=${t}
			.text=${n}
			.limit=${e.limit}
			@opened-changed=${e=>xn(r)(e.detail.value)}
			@value-changed=${p(bn(r))}
			@text-changed=${p(Sn(r))}
			>${l(e.loading,()=>i`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-excluding
		>`}getComparableValue(e,t){return Dn(e,t)}getFilterFn(e,t){if(!(!t||!Array.isArray(t)||t.length===0))return On(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete-excluding`,kn)})),jn,Mn,Nn=e((()=>{Me(),Pe(),j(),n(),F(),nt(),ct(),En(),z(),k(),cn(),jn=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?fe(t):O(n),a=xe(e&&N(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},Mn=class extends Tn(R(P)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return i`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},n){return i`<cosmoz-input
			no-label-float
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${L(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:n},r,a){return i`<cosmoz-autocomplete-ui
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
			.itemRenderer=${e[K]?.itemRenderer}
			.value=${t}
			.text=${n}
			.limit=${e.limit}
			.onChange=${bn(r)}
			@opened-changed=${e=>xn(r)(e.detail.value)}
			.onText=${Sn(r)}
			>${l(e.loading,()=>i`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}getComparableValue(e,t){return jn(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete`,Mn)})),Pn,Fn,In,Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,qn,Jn=e((()=>{j(),z(),Me(),f(),k(),n(),F(),Pn=(e,t)=>t.find(({value:t})=>e===t),Fn=(e,t,n)=>{let r=Pn(t,n);return r?r.text:e},In=(e,t,n,r)=>Fn(e,N(t,n),r),Ln=({valuePath:e},t,n)=>Pn(N(t,e),n),Rn=e=>t=>{e(e=>({...e,filter:t?.[0]?.value??null}))},zn=e=>t=>{e(e=>({...e,headerFocused:t}))},Bn=e=>t=>{e(e=>({...e,query:t}))},Vn=e=>t=>e(t?.[0]?.value),Hn=({valuePath:e,trueLabel:t,falseLabel:n},r)=>N(r,e)?t:n,Un=({valuePath:e},t)=>n=>N(n,e)===t,Wn=se((e,t)=>[{text:e,value:!0},{text:t,value:!1}]),Gn=({valuePath:e,trueLabel:t,falseLabel:n},r)=>e?N(r,e)?t:n:``,Kn=(e,t)=>{try{return JSON.parse(t)}catch{return null}},qn=class extends R(P){static get properties(){return{trueLabel:{type:String,value:`True`},falseLabel:{type:String,value:`False`},flex:{type:String,value:`0`},cellClass:{type:String,value:`boolean-cell`}}}getString(e,t){return Hn(e,t)}renderCell(e,{item:t}){return Hn(e,t)}renderEditCell(e,{item:t},n){let{trueLabel:r,falseLabel:a}=e;return i`<cosmoz-autocomplete
			no-label-float
			.title=${In(e.title,t,e.valuePath,Wn(r,a))}
			.source=${Wn(r,a)}
			.textProperty=${`text`}
			.value=${Ln(e,t,Wn(r,a))}
			.onChange=${Vn(n)}
			.limit=${1}
			>${l(e.loading,()=>i`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete
		>`}renderHeader(e,{filter:t,query:n},r,a){return i`<cosmoz-autocomplete-ui
			?disabled=${e.disabledFiltering}
			.label=${e.title}
			.title=${In(e.title,t,e.valuePath,a)}
			.source=${a}
			.textProperty=${`text`}
			.value=${Pn(t,a)}
			.text=${n}
			.onChange=${Rn(r)}
			@opened-changed=${e=>zn(r)(e.detail.value)}
			.onText=${Bn(r)}
			.limit=${1}
			>${l(e.loading,()=>i`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}computeSource({trueLabel:e,falseLabel:t}){return Wn(e,t)}getFilterFn(e,t){if(t!=null)return Un(e,t)}toXlsxValue(e,t){return Gn(e,t)}deserializeFilter(e,t){return Kn(e,t)}},customElements.define(`cosmoz-omnitable-column-boolean`,qn)})),Yn,Xn=e((()=>{ye(),Nt(),Yn=e=>class extends Mt(e){static get properties(){return{max:{type:Date,value:null},min:{type:Date,value:null},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},formatter:{type:Object,computed:`_computeFormatter(locale)`}}}toDate(e,t,n){if(e==null||e===``)return;let r=e;if(r instanceof Date||(typeof e==`string`&&(r=this.getAbsoluteISOString(r)),r=new Date(r)),Number.isNaN(r.getTime()))return null;if(n==null||t==null)return r;let i=this.toDate(t);if(i==null)return r;let a=this.getComparableValue(r);return n(a,this.getComparableValue(i))===a?r:i}toValue(){return this.toDate.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n!=null)return this.toNumber(n.getTime())}getString(e,t=this.valuePath,n=this.formatter){let r=this.toValue(this.get(t,e));return r===void 0?``:r===null?`Invalid Date`:this.renderValue(r,n)}getAbsoluteISOString(e){return e.length===19?e+this._getTimezoneString(e):e}_getTimezoneString(e){let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`}renderValue(e,t=this.formatter){if(t==null)return;let n=this.toValue(e);if(n!=null)return t.format(n)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(0,10)}_dateValueChanged(e){let t=e.currentTarget.value,n=e.model.item,r=this.get(this.valuePath,n),i=this._fromInputString(t);this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toLocalISOString(e){return ve(e)}}})),Zn,Qn=e((()=>{T(),j(),b(),n(),F(),Xn(),At(),B(),Ft(),Zn=class extends Yn(Pt(P)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return i`
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

			${l(this.disabled,()=>i`
					<cosmoz-omnitable-dropdown-input
						disabled
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>i`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${V({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:i`
							<h3 style="margin: 0;">${this.title}</h3>
							<cosmoz-input
								type="date"
								label=${S(`From date`)}
								min=${this._toInputString(this._limit.fromMin)}
								max=${this._toInputString(this._limit.fromMax)}
								.value=${this._filterInput?.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-input>
							<cosmoz-input
								type="date"
								label=${S(`Until date`)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
								.value=${this._filterInput?.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-input>
						`})}
				`)}
		`}_fromInputString(e,t){let n=this.toDate(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n}_filterInputChanged(e,t){let n=e.path.split(`.`)[1]&&e.value;if(n&&n.match(/^0+/u)){this._limitInputDebouncer.cancel();return}super._filterInputChanged(e,t)}},customElements.define(`cosmoz-omnitable-date-range-input`,Zn)})),$n,er,tr,J,Y,nr,rr,ir,ar,or,sr,cr,lr,ur,dr,fr=e((()=>{ye(),k(),Wt(),$n=e=>{let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`},er=e=>e.length===19?e+$n(e):e,tr=e=>{if(e==null||e===``)return;let t=e;return!(t instanceof Date)&&(typeof e==`string`&&(t=er(t)),t=ne(t),!t)||Number.isNaN(t.getTime())?null:t},J=({valuePath:e},t)=>{if(t==null)return;let n=t;e!=null&&(n=N(t,e));let r=tr(n);if(r!=null)return H(r.getTime())},Y=(e,t,n)=>{let r=tr(e);if(r==null)return null;if(n==null||t==null)return r;let i=Y(t);if(i==null)return r;let a=J({},r),o=J({},i);return a==null||o==null||n(a,o)===a?r:i},nr=(e,t)=>{if(t==null)return;let n=Y(e);if(n!=null)return t.format(n)},rr={},ir=e=>{let t=e||``;return rr[t]||(rr[t]=new Intl.DateTimeFormat(e||void 0)),rr[t]},ar=({valuePath:e,locale:t},n)=>{let r=N(n,e||``);return r===void 0?``:(r=Y(r),r===null?`Invalid Date`:nr(r,ir(t)))},or=e=>{let t=Y(e);if(t==null)return null;let n=ve(t);return n==null?null:n.slice(0,10)},sr=({valuePath:e},t)=>or(N(t,e||``)),cr=(e,t)=>{let n=Y(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n},lr=e=>or(e)??``,ur=({valuePath:e},t)=>{if(!e)return``;let n=Y(N(t,e));if(!n)return``;let r=Y(ve(n));return r?(r.setHours(0,0,0,0),r):``},dr=(e,t)=>n=>{let r=J(e,n);if(r==null)return!1;let i=J({...e,valuePath:`min`},t),a=J({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})),pr,mr=e((()=>{T(),j(),n(),z(),Qn(),q(),fr(),I(),pr=class extends R(P){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`date-header-cell`},width:{type:String,value:`100px`},minWidth:{type:String,value:`82px`},flex:{type:String,value:`0`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=J({...e,valuePath:`min`},t),r=J({...e,valuePath:`max`},t);if(!(n==null&&r==null))return dr(e,t)}getString(e,t){return ar(e,t)}toXlsxValue(e,t){return ur(e,t)}getComparableValue(e,t){return J(e,t)}serializeFilter(e,t){if(t==null)return;let n=Y(t.min),r=Y(t.max);if(!(n==null&&r==null))return lr(n)+`~`+lr(r)}deserializeFilter(e,t){if(t==null||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Y(n[1]),max:Y(n[2])}:null}renderCell(e,{item:t}){return i`<div class="omnitable-cell-date">
			${ar(e,t)}
		</div>`}renderEditCell(e,{item:t},n){return i`<cosmoz-input
			no-label-float
			type="date"
			@change=${e=>n(cr(e.target.value))}
			.value=${sr(e,t)}
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
		></cosmoz-omnitable-date-range-input>`}computeSource(e,t){return un(e,t)}},customElements.define(`cosmoz-omnitable-column-date`,pr)})),hr,gr=e((()=>{j(),b(),n(),F(),Xn(),At(),B(),Ft(),hr=class extends Yn(Pt(P)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return i`
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

			${l(this.disabled,()=>i`
					<cosmoz-omnitable-dropdown-input
						disabled
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>i`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${V({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:i`
							<h3 style="margin: 0;">${this.title}</h3>
							<cosmoz-datetime-input
								date-label=${S(`From date`)}
								time-label=${S(`From time`)}
								min=${this._toInputString(this._limit.fromMin)}
								max=${this._toInputString(this._limit.fromMax)}
								step=${this.filterStep}
								.value=${this._filterInput?.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-datetime-input>
							<cosmoz-datetime-input
								date-label=${S(`To date`)}
								time-label=${S(`To time`)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
								step=${this.filterStep}
								.value=${this._filterInput?.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-datetime-input>
						`})}
				`)}
		`}_toInputString(e){let t=this.toValue(e);if(t!=null)return this._toLocalISOString(t).slice(0,19)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})}},customElements.define(`cosmoz-omnitable-datetime-range-input`,hr)})),_r,vr,yr,br,xr,Sr,Cr=e((()=>{k(),fr(),_r={},vr=e=>{let t=e||``;return _r[t]||(_r[t]=new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})),_r[t]},yr=({valuePath:e,locale:t},n)=>{let r=Y(N(n,e||``));return r===void 0?``:r===null?`Invalid Date`:nr(r,vr(t))},br=({valuePath:e},t)=>e?N(t,e):``,xr=e=>{let t=Y(e);return t==null?``:t.toISOString().slice(0,19).replace(/:/gu,`.`)},Sr=e=>{if(!(e==null||e===``)&&typeof e==`string`)return Y(e.replace(/\./gu,`:`)+`Z`)}})),wr,Tr=e((()=>{Ue(),I(),j(),n(),z(),gr(),q(),fr(),Cr(),wr=class extends R(P){static get is(){return`cosmoz-omnitable-column-datetime`}static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`datetime-header-cell`},width:{type:String,value:`210px`},minWidth:{type:String,value:`128px`},flex:{type:String,value:`0`},filterStep:{type:Number,value:1}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=J({...e,valuePath:`min`},t),r=J({...e,valuePath:`max`},t);if(!(n==null&&r==null))return dr(e,t)}getString(e,t){return yr(e,t)}toXlsxValue(e,t){return br(e,t)}getComparableValue(e,t){return J(e,t)}serializeFilter(e,t){if(t==null)return;let n=Y(t.min),r=Y(t.max);if(!(n==null&&r==null))return xr(n)+`~`+xr(r)}deserializeFilter(e,t){if(t==null||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Sr(n[1]),max:Sr(n[2])}:null}renderCell(e,{item:t}){return yr(e,t)}renderEditCell(e,{item:t},n){return i`<cosmoz-input
			no-label-float
			type="text"
			@change=${e=>n(cr(e.target.value))}
			.value=${yr(e,t)}
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
		></cosmoz-omnitable-datetime-range-input>`}computeSource(e,t){return un(e,t)}},customElements.define(wr.is,wr)})),Er,Dr=e((()=>{Me(),Pe(),j(),n(),F(),En(),z(),Er=class extends Tn(R(P)){renderCell({valuePath:e,textProperty:t},{item:n}){return i`
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
				${gn(n,e,t).map(e=>i`<li>${e}</li>`)}
			</ul>
		`}renderEditCell(){return`not implemented`}renderHeader(e,{filter:t,query:n},r,a){return i`<cosmoz-autocomplete-ui
			class="external-values-${e.externalValues}"
			?disabled=${e.disabledFiltering}
			.label=${e.title}
			.source=${a}
			.textProperty=${e.textProperty}
			.value=${t}
			.text=${n}
			.onChange=${bn(r)}
			@opened-changed=${e=>xn(r)(e.detail.value)}
			.onText=${Sn(r)}
			>${l(e.loading,()=>i`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		> `}},customElements.define(`cosmoz-omnitable-column-list-horizontal`,Er)})),Or,kr,Ar=e((()=>{v(),E(),b(),Or=M`
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
`,kr=({items:e})=>{let[t,n]=w(!1),r=me(),a=Array.isArray(e)?e:[],o=A(()=>Math.max(0,a.length-1),[a]);if(C(()=>{requestAnimationFrame(()=>r.dispatchEvent(new CustomEvent(`expand`,{bubbles:!0})))},[r,a.length]),a.length===0)return null;let s=a.length>2,c=a[0],l=s&&!t?a.slice(1,2):a.slice(1),u=e=>{e.stopPropagation(),e.preventDefault(),n(e=>!e)};return i`
		<ul>
			<li>
				<span>${c}</span>
			</li>
			<li class="see-more" ?hidden=${!s||t}>
				<a href="#" @click=${u}
					>${S(`and {0} more`,{0:o})}</a
				>
			</li>
			${l.map(e=>i`
					<li>
						<span class="item">${e}</span>
					</li>
				`)}
			<li class="see-less" ?hidden=${!s||!t}>
				<a href="#" @click=${u}>${S(`See less`)}</a>
			</li>
		</ul>
	`},customElements.define(`cosmoz-omnitable-column-list-data`,d(kr,{styleSheets:[x(Or)]}))})),jr,Mr=e((()=>{Ar(),j(),n(),F(),Me(),En(),z(),cn(),jr=class extends Tn(R(P)){static get properties(){return{keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,textual:e.textual}}renderCell({valuePath:e,textProperty:t},{item:n}){return i`<cosmoz-omnitable-column-list-data
			.items=${gn(n,e,t)}
		></cosmoz-omnitable-column-list-data>`}renderEditCell(e,{item:t},n){return i`<cosmoz-input
			no-label-float
			type="text"
			.value=${_n(e,t)}
			@change=${e=>n(e.target.value.split(/,\s*/gu))}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:n},r,a){return i`<cosmoz-autocomplete-ui
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
			.itemRenderer=${e[K]?.itemRenderer}
			.value=${t}
			.text=${n}
			.onChange=${bn(r)}
			@opened-changed=${e=>xn(r)(e.detail.value)}
			.onText=${Sn(r)}
			>${l(e.loading,()=>i`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}},customElements.define(`cosmoz-omnitable-column-list`,jr)})),Nr,Pr=e((()=>{T(),j(),b(),n(),F(),At(),B(),Nt(),Ft(),Nr=class extends Mt(Pt(P)){static get properties(){return{maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},formatter:{type:Object,computed:`_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)`},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},headerFocused:{type:Boolean,value:!1}}}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return i`
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

			${l(this.disabled,()=>i`
					<cosmoz-omnitable-dropdown-input
						disabled
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>i`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${V({title:this.title,tooltip:this._tooltip,filterText:this._filterText,horizontalAlign:`right`,externalValues:this.externalValues,onOpenedChanged:e,content:i`
							<h3>${this.title}</h3>
							<cosmoz-input
								class=${this._fromClasses}
								type="number"
								label=${S(`From`)}
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
								label=${S(`To`)}
								.value=${this._filterInput?.max}
								@value-changed=${e=>{this.set(`_filterInput.max`,e.detail.value)}}
								@blur=${e=>this._onBlur(e)}
								@keydown=${e=>this._onKeyDown(e)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
							></cosmoz-input>
						`})}
				`)}
		`}_computeFormatter(e,t,n){let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}getComparableValue(e,t){if(e==null)return;let n=e;if(t!=null&&(n=this.get(t,e)),n=this.toValue(n),n==null)return;let r=this.maximumFractionDigits;return r===null?n:this.toValue(n.toFixed(r))}renderValue(e,t=this.formatter){let n=this.toNumber(e);if(n!=null)return t.format(n)}},customElements.define(`cosmoz-omnitable-number-range-input`,Nr)})),Fr,Ir=e((()=>{T(),I(),j(),n(),z(),k(),Pr(),q(),Wt(),Fr=class extends R(P){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},cellClass:{type:String,value:`number-cell align-right`},width:{type:String,value:`30px`},minWidth:{type:String,value:`30px`},headerCellClass:{type:String,value:`number-header-cell`},maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=U({...e,valuePath:`min`},t),r=U({...e,valuePath:`max`},t);if(!(n==null&&r==null))return Ut(e,t)}getString(e,t){return Ht(e,t)}toXlsxValue({valuePath:e},t){return N(t,e)}getComparableValue(e,t){return U(e,t)}serializeFilter(e,t){if(t==null)return;let n=H(t.min),r=H(t.max);if(!(n==null&&r==null))return Bt(n)+`~`+Bt(r)}deserializeFilter(e,t){if(t==null||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:H(n[1]),max:H(n[2])}:null}renderCell(e,{item:t}){return i`<div class="omnitable-cell-number">
			${Ht(e,t)}
		</div>`}renderEditCell(e,{item:t},n){return i`<cosmoz-input
			no-label-float
			type="number"
			@change=${e=>n(e.target.value)}
			.value=${zt(e,t)}
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
		></cosmoz-omnitable-number-range-input>`}computeSource(e,t){return un(e,t)}},customElements.define(`cosmoz-omnitable-column-number`,Fr)})),Lr,Rr=e((()=>{T(),j(),b(),n(),F(),Xn(),At(),B(),Ft(),Lr=class extends Yn(Pt(P)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return i`
			${l(this.disabled,()=>i`
					<cosmoz-omnitable-dropdown-input
						disabled
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>i`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${V({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:i`
							<h3 style="margin: 0;">${this.title}</h3>
							<cosmoz-input
								type="time"
								label=${S(`From time`)}
								step=${this.filterStep}
								.value=${this._filterInput.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-input>
							<cosmoz-input
								type="time"
								label=${S(`Until time`)}
								step=${this.filterStep}
								.value=${this._filterInput.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-input>
						`})}
				`)}
		`}get _fixedDate(){return`1970-01-01`}toDate(e,t,n){let r=typeof e==`string`&&e.length>3&&e.length<=9?this.getAbsoluteISOString(this._fixedDate+`T`+e):e;return super.toDate(r,t,n)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(11,19)}getComparableValue(e,t){if(e==null)return;let n=this._toInputString(t==null?e:this.get(t,e));if(n!=null&&(n=this.toValue(this.getAbsoluteISOString(this._fixedDate+`T`+n)),n!=null))return this.toNumber(n.getTime())}_timeValueChanged(e){let t=e.target.value,n=e.model.item,r=this.toDate(n.date),i=this.toDate(r==null?t:r.toISOString().slice(0,10)+`T`+t);i??(this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,(e=>e).bind(this)))}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})}},customElements.define(`cosmoz-omnitable-time-range-input`,Lr)})),zr,X,Br,Vr,Hr,Ur,Wr,Z,Gr,Kr,qr,Jr=e((()=>{ye(),k(),fr(),Wt(),zr=`1970-01-01`,X=(e,t,n)=>Y(typeof e==`string`&&e.length>3&&e.length<=9?er(zr+`T`+e):e,t,n),Br={},Vr=e=>{let t=e||``;return Br[t]||(Br[t]=new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})),Br[t]},Hr=({valuePath:e,locale:t},n)=>{let r=X(N(n,e||``));return r===void 0?``:r===null?`Invalid Date`:nr(r,Vr(t))},Ur=(e,t)=>e.valuePath?Hr(e,t):``,Wr=e=>{let t=X(e);if(t==null)return null;let n=ve(t);return n&&n.slice(11,19)},Z=({valuePath:e},t)=>{if(t==null)return;let n=Wr(e==null?t:N(t,e));if(n==null)return;let r=X(er(zr+`T`+n));return r==null?r:H(r.getTime())},Gr=(e,t)=>n=>{let r=Z(e,n);if(r==null)return!1;let i=Z({...e,valuePath:`min`},t),a=Z({...e,valuePath:`max`},t);return i==null||a==null?!1:!(r<i||r>a)},Kr=e=>{let t=X(e);return t==null?``:t.toISOString().slice(11,19).replace(/:/gu,`.`)},qr=e=>{if(!(e==null||e===``))return X(typeof e==`string`?e.replace(/\./gu,`:`)+`Z`:e)}})),Yr,Xr=e((()=>{T(),I(),j(),n(),z(),Rr(),q(),Jr(),Yr=class extends R(P){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`time-header-cell`},minWidth:{type:String,value:`63px`},width:{type:String,value:`210px`},flex:{type:String,value:`0`},filterStep:{type:String,value:`1`}}}getFilterFn(e,t){let n=Z({...e,valuePath:`min`},t),r=Z({...e,valuePath:`max`},t);if(!(n==null&&r==null))return Gr(e,t)}getString(e,t){return Hr(e,t)}toXlsxValue(e,t){return Ur(e,t)}getComparableValue(e,t){return Z(e,t)}serializeFilter(e,t){if(t==null)return;let n=X(t.min),r=X(t.max);if(!(n==null&&r==null))return Kr(n)+`~`+Kr(r)}deserializeFilter(e,t){if(t==null||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:qr(n[1]),max:qr(n[2])}:null}renderCell(e,{item:t}){return Hr(e,t)}renderEditCell(e,{item:t},n){return i`<cosmoz-input
			no-label-float
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${Hr(e,t)}
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
		></cosmoz-omnitable-time-range-input>`}computeSource(e,t){return un(e,t)}},customElements.define(`cosmoz-omnitable-column-time`,Yr)})),Zr=e((()=>{pn(),An(),Nn(),Jn(),mr(),Tr(),Dr(),Mr(),Ir(),Xr()})),Qr,$r=e((()=>{E(),n(),Qr=({column:e,item:n,selected:r,folded:i,group:a})=>e?(e.renderGroup??e.renderCell)(e,{item:n,selected:r,folded:i,group:a}):t,customElements.define(`cosmoz-omnitable-group-row`,d(Qr,{useShadowDOM:!1}))})),ei,ti=e((()=>{E(),n(),ei=e=>{let{column:n}=e;return C(()=>{let t=0,r=0,i=i=>{e.dispatchEvent(new CustomEvent(`column-resize`,{bubbles:!0,composed:!0,detail:{newWidth:Math.ceil(r+i.pageX-t),column:n}}))},a=()=>{document.removeEventListener(`pointermove`,i),document.removeEventListener(`pointerup`,a)},o=n=>{t=n.pageX,r=e.previousElementSibling.getBoundingClientRect().width,document.addEventListener(`pointermove`,i),document.addEventListener(`pointerup`,a)};return e.addEventListener(`pointerdown`,o),()=>e.removeEventListener(`pointerdown`,o)},[n]),t},customElements.define(`cosmoz-omnitable-resize-nub`,d(ei))})),ni,ri,ii,ai,oi=e((()=>{n(),ni=i`<svg
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
</svg>`,ri=i`
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
`,ii=i` <svg
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
</svg>`,ai=i`<svg
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
</svg> `})),si,ci,li,ui,di=e((()=>{E(),ge(),oi(),si=({column:e,on:t,descending:n,setOn:r,setDescending:a})=>{let{name:o,title:s}=e??{};return i`<button
		class="sg"
		title=${ee(s)}
		data-on=${ee(o===t&&(n?`desc`:`asc`)||void 0)}
		@click=${e=>{let t=e.currentTarget?.dataset.on;t||(r(o),a(!1)),t===`asc`?a(!0):t===`desc`&&(r(),a(!1))}}
	>
		<span>${s}</span> ${ai}
	</button>`},ci=({columns:e,...t})=>e?.map(e=>si({column:e,...t})),li=()=>i`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,groupOn:t,setGroupOn:n,groupOnDescending:r,setGroupOnDescending:i}={})=>ci({columns:e?.filter?.(e=>e.groupOn),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`,ui=()=>i`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,sortOn:t,setSortOn:n,descending:r,setDescending:i}={})=>ci({columns:e?.filter?.(e=>e.sortOn&&!e.noSort),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`}));function fi(e,t,{suffix:n=``,read:r,write:i,ready:a=!0,multi:o}={}){let c=Ne({param:t,suffix:n,link:o?gi:hi,write:i??tt}),l=A(()=>{if(t==null)return!1;if(o){let e=et(t+n);return Object.keys(e).length>0}return De(t+n)!==void 0},[]),[u,d]=w(()=>{if(t==null)return e;if(o){let i=et(t+n,r);return Object.keys(i).length>0?i:e}return De(t+n,r)??e}),f=s(e=>d(t=>{let n=je(e,t);return c.param!=null&&Je(c.link(c.param+c.suffix,n,c.write),null,{notify:!1}),n}),[]);return C(()=>{c.param==null||!a||l||e!=null&&f(e)},[a]),[u,f]}var pi,mi,hi,gi,_i=e((()=>{Ae(),Oe(),Fe(),Ve(),E(),pi=e=>(t,n,r=tt)=>{let i=Ee(),a=new URLSearchParams(i.hash.replace(`#`,``));return e(t,n,r,a),`#!`+Object.assign(i,{hash:a}).href.replace(location.origin,``)},mi=e=>e==null||e===``,hi=pi((e,t,n,r)=>mi(n(t))?r.delete(e):r.set(e,n(t))),gi=pi((e,t,n,r)=>{let i=Object.entries(t),a=i.map(n).filter(([,e])=>e!==void 0);if(a.length===0&&i.length>0)return;let o=e;Array.from(r.keys()).filter(e=>e.startsWith(o)).forEach(e=>r.delete(e)),a.forEach(([t,n])=>mi(n)?r.delete(e+t):r.set(e+t,n))})})),vi,yi,bi,xi,Si,Ci=e((()=>{E(),_i(),vi=e=>[!0,`true`,1,`yes`,`on`].includes(e),yi=e=>e===``||(e==null?void 0:vi(e)),bi=(e,t,n)=>s(r=>{e(r),n(e=>({...e,[t]:r}))},[e,t,n]),xi=(e,t,{settings:n,setSettings:r,resetRef:i,ready:a=!0})=>{let[o,c]=fi(n.sortOn,t,{suffix:`-sortOn`,ready:a}),[l,u]=fi(yi(n.descending),t,{suffix:`-descending`,read:yi,ready:a}),[d,f]=fi(n.groupOn,t,{suffix:`-groupOn`,ready:a}),[p,m]=fi(yi(n.groupOnDescending),t,{suffix:`-groupOnDescending`,read:yi,ready:a}),h=A(()=>e.find(e=>e.name===o),[e,o]),g=A(()=>e.find(e=>e.name===d),[e,d]),_={groupOn:d,setGroupOn:bi(f,`groupOn`,r),groupOnDescending:p,setGroupOnDescending:bi(m,`groupOnDescending`,r),sortOn:o,setSortOn:bi(c,`sortOn`,r),descending:l,setDescending:bi(u,`descending`,r),columns:e},v=A(()=>_,Object.values(_)),y=s(e=>{c(e.sortOn),f(e.groupOn),u(e.descending),m(e.groupOnDescending)},[]);return C(()=>void(i.current=y),[]),{...v,sortAndGroup:v,groupOnColumn:g,sortOnColumn:h}},Si=at(),customElements.define(`sort-and-group-provider`,Si.Provider),customElements.define(`sort-and-group-consumer`,d(({render:e})=>e(ae(Si)),{useShadowDOM:!1}))})),wi,Ti,Ei=e((()=>{E(),m(),ti(),di(),F(),Ci(),wi=({data:e,columns:t,groupOnColumn:n,filters:r,setFilterState:a,sortAndGroup:{sortOn:o,setSortOn:s,descending:c,setDescending:u}={}})=>pe(t,e=>e.name,t=>[i`<div
				class="cell ${t.headerCellClass} header-cell"
				part="cell header-cell cell-${t.name} header-cell-${t.name}"
				?hidden="${t===n}"
				title="${t.headerTitleFn(t)}"
				name="${t.name}"
			>
				${t.renderHeader(t,r[t.name]??{},e=>a(t.name,e),t.source(t,e))}
				${l(!t.noSort,()=>si({on:o,setOn:s,descending:c,setDescending:u,column:t}))}
			</div>`,i`<cosmoz-omnitable-resize-nub
				.column="${t}"
				name="${t.name}"
			></cosmoz-omnitable-resize-nub>`]),Ti=({columns:e,settingsConfig:t,hideSelectAll:n,...r})=>{let a=ae(Si);return i`
		${l(e,e=>wi({columns:e,sortAndGroup:a,...r}))}
		${l(!n,()=>i` <cosmoz-omnitable-settings
					.config=${t}
					part="settings"
				></cosmoz-omnitable-settings>`)}
	`},customElements.define(`cosmoz-omnitable-header-row`,d(Ti,{useShadowDOM:!1}))})),Di,Oi,ki=e((()=>{E(),v(),Di=M`
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
`,Oi=({column:e})=>i`
	<div class="label" title="${e.title}" part="item-expand-label">
		${e.title}
	</div>
	<div class="value" part="item-expand-value">
		<slot></slot>
	</div>
`,customElements.define(`cosmoz-omnitable-item-expand-line`,d(Oi,{styleSheets:[x(Di)]}))})),Ai,ji=e((()=>{E(),n(),Ke(),ki(),Ai=({columns:e,item:t,selected:n,expanded:r,groupOnColumn:a})=>Qe(e,e=>i`<cosmoz-omnitable-item-expand-line
				.column=${e}
				?hidden=${e===a}
				exportparts="item-expand-label, item-expand-value"
				>${e.renderCell(e,{item:t,selected:n,expanded:r})}</cosmoz-omnitable-item-expand-line
			>`),customElements.define(`cosmoz-omnitable-item-expand`,d(Ai,{useShadowDOM:!1}))})),Mi,Ni,Pi=e((()=>{E(),m(),Mi=(e,t,n)=>e.editable?e.renderEditCell(e,t,n(e,t.item)):e.renderCell(e,t),Ni=({columns:e,groupOnColumn:t,item:n,index:r,selected:a,expanded:o,onItemChange:s})=>pe(e,e=>e.name,e=>i`<div
				class="cell itemRow-cell ${e.cellClass??``}"
				part="cell itemRow-cell cell-${e.name} itemRow-cell-${e.name}"
				?hidden="${e===t}"
				?editable="${e.editable}"
				title="${e.cellTitleFn(e,n)}"
				name="${e.name}"
			>
				${Mi(e,{item:n,index:r,selected:a,expanded:o},s)}
			</div>`),customElements.define(`cosmoz-omnitable-item-row`,d(Ni,{useShadowDOM:!1}))})),Fi,Ii,Li=e((()=>{v(),Fi=M`
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
`,Ii=M`
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

	${Fi}

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
`})),Ri,zi,Bi=e((()=>{Ie(),Ri=e=>{let t=e.replace(/"/gu,`""`);return t.search(/("|,|\n)/gu)>=0?`"`+t+`"`:e},zi=(e,t,n)=>{let r=e.map(e=>Ri(e.title)).join(`;`)+`
`,i=t.map(t=>e.map(e=>{let n=e.getString(e,t);return n==null?``:Ri(String(n))}).join(`;`)+`
`);i.unshift(r),Ce(new File(i,n,{type:`text/csv;charset=utf-8`}))}})),Vi,Hi,Ui=e((()=>{Ie(),Ge(),Vi=(e,t)=>{let n=e.map(e=>e.title),r=t.map(t=>e.map(e=>e.toXlsxValue(e,t)??``));return r.unshift(n),r},Hi=(e,t,n,r)=>{let i=Vi(e,t),a=new Xe(n).addSheetFromData(i,r).generate();Ce(new File([a],n,{type:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`}))}})),Wi,Gi=e((()=>{be(),b(),n(),Bi(),Ui(),Wi=({columns:e,selectedItems:t,csvFilename:n,xlsxFilename:r,xlsxSheetname:a,topPlacement:o})=>i`<cosmoz-bottom-bar
		id="bottomBar"
		?active=${!ue(t.length)}
		part="bottomBar"
		exportparts="bar: bottomBar-bar, info: bottomBar-info, buttons: bottomBar-buttons"
	>
		<slot name="info" slot="info">
			${S(`{count} selected item`,{count:t.length})}
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
				@click=${()=>zi(e,t,n)}
			>
				${S(`Save selected items as CSV`)}
			</button>
			<button
				@click=${()=>Hi(e,t,r,a)}
			>
				${S(`Save selected items as XLSX`)}
			</button>
			<slot name="download-menu"></slot>
		</cosmoz-dropdown-menu>
	</cosmoz-bottom-bar>`})),Ki,qi=e((()=>{n(),F(),Ki=({allSelected:e,onAllCheckboxChange:t,sortAndGroup:n,dataIsValid:r,data:a,columns:o,filters:s,groupOnColumn:c,setFilterState:u,settingsConfig:d,hideSelectAll:f})=>i`<sort-and-group-provider .value=${n}>
		<div class="header" id="header" part="header">
			${l(!f,()=>i`<input
						class="checkbox all"
						type="checkbox"
						.checked=${e}
						@input=${t}
						?disabled=${!r}
						part="all"
					/>`)}
			${l(f,()=>i` <cosmoz-omnitable-settings
						.newLayout="${!0}"
						.config=${d}
					></cosmoz-omnitable-settings>`)}

			<cosmoz-omnitable-header-row
				part="headerRow"
				.data=${a}
				.columns=${o}
				.filters=${s}
				.groupOnColumn=${c}
				.setFilterState=${u}
				.settingsConfig=${d}
				.hideSelectAll=${f}
			></cosmoz-omnitable-header-row>
		</div>
	</sort-and-group-provider>`})),Ji,Yi,Xi=e((()=>{E(),Ji=le`
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
`,Yi=({settingsConfig:e})=>{let{columns:t,collapsed:n}=e,r=t.filter(e=>!n.some(t=>t.name===e.name));return i`<div class="skeleton">
		${Array.from({length:5},()=>i`<div>
					<div class="checkbox"></div>
					${r.map(e=>i`<div
								class="cell"
								part=${`cell-${e.name}`}
								name=${e.name}
							></div>`)}
				</div>`)}
	</div>`},customElements.define(`cosmoz-omnitable-skeleton`,d(Yi,{styleSheets:[Ji]}))})),Zi,Qi=e((()=>{Xi(),b(),n(),F(),_(),Zi=(e,t)=>{let{settingsConfig:n}=e,{processedItems:r,dataIsValid:a,filterIsTooStrict:o,loading:s,displayEmptyGroups:c,compareItemsFn:u,setSelectedItems:d,renderItem:f,renderGroup:p,error:m}=t;return i`${l(!s&&!a&&!m,()=>i`<div class="tableContent-empty">
					<slot name="empty-set-message">
						${de({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
						<div class="tableContent-empty-message">
							<h3>${S(`Working set empty`)}</h3>
							<p>${S(`No data to display`)}</p>
						</div>
					</slot>
				</div>`)}
		${l(o,()=>i`<div class="tableContent-empty">
					${de({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
					<div>
						<h3>${S(`Filter too strict`)}</h3>
						<p>${S(`No matches for selection`)}</p>
					</div>
				</div>`)}
		${l(s&&!r.length,()=>i`<div class="tableContent-empty overlay">
					<cosmoz-omnitable-skeleton
						.settingsConfig=${n}
					></cosmoz-omnitable-skeleton>
				</div>`)}
		${l(s&&r.length,()=>i`<div class="tableContent-empty overlay spinner">
					<cz-spinner></cz-spinner>
				</div>`)}
		${l(m,()=>i`<div class="tableContent-empty overlay">
					${te({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
					<div class="tableContent-empty-message">
						<h3>${S(`Error loading data`)}</h3>
						<p>${m.message}</p>
					</div>
				</div>`)}
		<div class="tableContent-scroller" id="scroller" part="scroller">
			<cosmoz-grouped-list
				id="groupedList"
				.data=${r}
				@selected-items-changed=${e=>d(e.detail.value)}
				.displayEmptyGroups=${c}
				.compareItemsFn=${u}
				.renderItem=${f}
				.renderGroup=${p}
			></cosmoz-grouped-list>
			<slot name="extraContent"></slot>
		</div>`}})),$i,ea,ta=e((()=>{v(),Li(),$i=M`
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
	${Fi}
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
`,ea=M`
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
`})),na,ra,ia=e((()=>{E(),Fe(),na=e=>{let t=parseInt(e,10);return isFinite(t)?t:void 0},ra=e=>{let{config:t}=e,{settings:n,setSettings:r,collapsed:i}=t,a=Ne({collapsed:i,settings:n.columns,setSettings:s(e=>r(t=>({...t,columns:e})),[r])});return{...t,onDown:s(e=>{e.target.closest(`.pull`)&&(a.handle=e.currentTarget)},[a]),onDragStart:s(e=>{let{target:t}=e,n=na(t.dataset.index);if(!a.handle?.contains(t)||n==null)return e.preventDefault();a.handle=null,e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`omnitable/sort-index`,n),e.dataTransfer.setData(`text/plain`,n),setTimeout(()=>t.classList.add(`drag`),0),t.addEventListener(`dragend`,e=>e.target.classList.remove(`drag`),{once:!0})},[a]),onDragEnter:s(e=>{let t=e.currentTarget;t===e.target&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`,t.classList.add(`dragover`))},[]),onDragOver:s(e=>{e.preventDefault(),e.currentTarget.classList.add(`dragover`)},[]),onDragLeave:s(e=>{let t=e.currentTarget;t.contains(e.relatedTarget)||t.classList.remove(`dragover`)},[]),onDrop:s(e=>{let t=na(e.dataTransfer.getData(`omnitable/sort-index`)),n=na(e.currentTarget.dataset.index),{settings:r,setSettings:i}=a;e.currentTarget.classList.remove(`dragover`),e.preventDefault();let o=r.slice();o.splice(n+(t>=n?0:-1),0,o.splice(t,1)[0]),i(o)},[a]),onToggle:s(e=>{let{settings:t,setSettings:n}=a,r=t.map(e=>({...e,disabled:e.disabled||a.collapsed?.some(t=>t.name===e.name)})),i=na(e.target.closest(`[data-index]`)?.dataset.index);r.splice(i,1,{...t[i],disabled:!e.target.checked,priority:e.target.checked?t.reduce((e,t)=>Math.max(e,t.priority),0)+1:t[i].priority}),n(r)},[a])}}})),aa,oa,sa,ca,la=e((()=>{$e(),rt(),v(),be(),E(),b(),F(),oi(),di(),ta(),ia(),aa=[lt({apply({availableHeight:e,elements:t}){Object.assign(t.floating.style,{maxHeight:`${Math.max(0,e)}px`})}}),...Se],oa=({onDragStart:e,onDragEnter:t,onDragOver:n,onDragLeave:r,onDrop:a,onDown:o,onToggle:s,collapsed:c,filters:l})=>(u,d)=>{let f=!!c?.find(e=>e.name===u.name),p=!u.disabled&&!f;return i` <div
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
			<button class="pull">${ri}</button>
			<label class="title" ?has-filter=${!ue(l[u.name]?.filter)}
				>${u.title}</label
			>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${p}
				@click=${s}
				.indeterminate=${f}
			/>
		</div>`},sa=e=>{let{settings:t,settingsId:n,onSave:r,onReset:a,hasChanges:o,opened:s,setOpened:c,...u}=ra(e);return i` <div class="headline">
			${S(`Sort and filter`)}
			<button
				class="close"
				@click=${e=>{let t=e.currentTarget;t?.focus(),t?.blur()}}
			>
				${ni}
			</button>
		</div>

		<div class="contents">
			<div
				class="heading"
				?data-opened=${s.columns}
				@click=${()=>c(e=>({...e,columns:!e.columns}))}
				part="columns columns-heading"
			>
				${S(`Columns`)} ${ii}
			</div>
			<cosmoz-collapse
				?opened="${s.columns}"
				part="columns columns-content"
			>
				<div class="list">${t.columns?.map(oa(u))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${s.sort}
				@click=${()=>c(e=>({...e,sort:!e.sort}))}
			>
				${S(`Sort on`)} ${ii}
			</div>
			<cosmoz-collapse ?opened=${s.sort}> ${ui()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${s.group}
				@click=${()=>c(e=>({...e,group:!e.group}))}
				part="groups groups-heading"
			>
				${S(`Group on`)} ${ii}
			</div>
			<cosmoz-collapse ?opened=${s.group} part="groups groups-heading"
				>${li()}</cosmoz-collapse
			>
		</div>

		${l(n,()=>i`<div class="buttons">
					<button
						class="button reset"
						@click=${a}
						?disabled=${!o}
					>
						${S(`Reset`)}
					</button>
					<button class="button" @click=${r} ?disabled=${!o}>
						${S(`Save`)}
					</button>
				</div>`)}`},customElements.define(`cosmoz-omnitable-settings-ui`,d(sa,{styleSheets:[x($i)]})),ca=({config:e,newLayout:t})=>i`
	<cosmoz-dropdown
		.placement="${t?`bottom-start`:`bottom-end`}"
		.middleware="${aa}"
	>
		<div title="${S(`Sort and filter`)}" slot="button">
			${l(t,()=>i`<div class="headerDots">...</div>`,()=>i` <svg viewBox="0 0 24 24" width="24" fill="currentColor">
						<circle cx="10" cy="18" r="2"></circle>
						<circle cx="10" cy="12" r="2"></circle>
						<circle cx="10" cy="6" r="2"></circle>
					</svg>`)}
			${l(e?.badge,()=>i`<div class="badge"></div>`)}
		</div>
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${e}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`,customElements.define(`cosmoz-omnitable-settings`,d(ca,{styleSheets:[x(ea)]}))})),ua,da,fa,pa,ma,ha=e((()=>{ct(),ua=[`sortOn`,`descending`,`groupOn`,`groupOnDescending`],da=e=>t=>typeof t==`object`&&!!t&&`name`in t&&t.name===e,fa=(e=[],t=[],n=[])=>{let r=t.filter(t=>e.some(da(t.name))),i=e.filter(e=>e.name!=null&&!t.some(da(e.name))&&!n.some(da(e.name))),a=n.filter(e=>!t.some(da(e.name)));return[...r,...a.flatMap(t=>{let n=e.find(e=>e.name===t.name);return n?{...t,title:n.title??t.title??``,minWidth:parseInt(n.minWidth??`0`,10)}:[]}),...i.map(e=>{let{name:t,title:n,priority:r,minWidth:i,width:a,flex:o}=e;return{name:t??``,title:n??``,priority:r??0,minWidth:parseInt(i??`0`,10),width:parseInt(a??`0`,10),flex:parseInt(o??`0`,10)}})]},pa=(e,t)=>({...t,...ot(Array.from(ua))(e),columns:e.columns?.map(ot([`name`,`priority`,`width`,`flex`,`disabled`]))}),ma=({columns:e,settings:t,savedSettings:n,initial:r})=>({...Object.fromEntries(ua.flatMap(e=>r?.[e]==null?[]:[[e,r[e]]])),...n?ot(Array.from(ua))(n):{},...t,columns:fa(e,t?.columns,n?.columns)})})),ga,_a=e((()=>{ga=({prefix:e=`omnitable-`}={})=>({write:async(t,n)=>{let r=e+t;try{n?localStorage.setItem(r,JSON.stringify(n)):localStorage.removeItem(r)}catch(e){console.error(e)}},read:async t=>{if(!t)return null;try{let n=localStorage.getItem(e+t);return n==null?null:JSON.parse(n)}catch(e){return console.error(e),null}}})})),va,ya,ba=e((()=>{E(),_a(),va=at(ga),ya=()=>{let e=ae(va);return A(()=>e(),[e])}})),xa=e((()=>{ba()})),Sa,Ca=e((()=>{E(),xa(),ha(),Sa=(e,t,n,r)=>{let[i,a]=w(e?void 0:null),{read:o,write:c}=ya();return C(async()=>{e&&a(await o(e))},[e,o]),{settingsId:e,savedSettings:i,onSave:s(async()=>{if(!e)return;let r=pa(t,i);await c(e,r),n(),a(r)},[t,i]),onReset:s(async t=>{n(),t.shiftKey&&(await c(e),a(null)),r?.()},[r]),hasChanges:t!=null}}})),wa,Ta=e((()=>{E(),cn(),ha(),Ca(),wa=({settingsId:e,host:t})=>{let n=A(()=>Object.fromEntries(ua.map(e=>[e,t[e]])),[]),r=h(),i=s(()=>{r.current?.(n)},[n]),[a,o]=w(),[c,l]=w({columns:!0,sort:!0}),{savedSettings:u,...d}=Sa(e,a,o,i),{enabledColumns:f,disabledFiltering:p}=t,m=sn(t,{enabledColumns:f,disabledFiltering:p}),g=A(()=>ma({columns:m,settings:a,savedSettings:u,initial:n}),[m,a,u]),_=A(()=>g.columns.map(e=>m.find(t=>t.name===e.name)).filter(Boolean),[m,...g.columns.map(e=>e.name)]);return{...d,savedSettings:u,opened:c,setOpened:l,settings:g,columns:_,setSettings:o,resetRef:r}}})),Ea=e((()=>{la(),Ta()})),Da,Oa,ka=e((()=>{Da=e=>Number.isFinite(e)?e:0,Oa=(e,t)=>{let n=[],[r,i]=e.reduce(([e,t],{width:n,flex:r})=>[e+n,t+r],[0,0]),a=t-r,o=Da(a/i),s=0,c=0,l=0;for(let t=0;t<e.length;t++){let{width:i,minWidth:u,flex:d}=e[t];if(u>i+(a>=0?o*d:i*a/r)){s+=i,c+=u,l+=d,n[t]=u;continue}if(d===0){s+=i,c+=i,n[t]=i;continue}}r-=s,a=t-c-r,i-=l,o=Da(a/i);for(let t=0;t<e.length;t++){if(n[t]!=null)continue;let{width:i,flex:s}=e[t];n[t]=i+(a>=0?o*s:i*a/r)}return n}})),Aa,ja,Ma=e((()=>{Aa=Symbol(`index`),ja=(e,t)=>{if(typeof e.findLastIndex==`function`)return e.findLastIndex(t);for(let n=e.length-1;n>=0;n--)if(t(e[n],n,e))return n;return-1}})),Na,Pa,Fa,Ia=e((()=>{ka(),Ma(),Na=(e,t)=>{let n=ja(e,e=>e!=null&&e>0),r=(e,t)=>`.cell[name="${e}"], cosmoz-omnitable-skeleton::part(cell-${e}){width: ${Math.floor(t)}px;padding: 0 min(3px, ${t/2}px)}`,i=e=>`cosmoz-omnitable-resize-nub[name="${e}"]{display:none}`,a=e=>`cosmoz-omnitable-resize-nub[name="${e}"], .cell[name="${e}"]{display:none}`;return t.map((t,o)=>{let s=e[o];if(s==null||s===0)return a(t.name);let c=r(t.name,s);return o===n?`${c}\n${i(t.name)}`:c}).join(`
`)},Pa=(e,t,n)=>{let r=e.filter(e=>!e.hidden),i=r.reduce((e,{width:t})=>e+t,0);if(r.length>1&&i>t)return Pa(r.slice(1),t,n);let a=r.reduce(([e,t],n,r)=>[Math.max(e,n.index),n.index>e?r:t],[-1,-1])[1];return a!==-1&&(r[a].flex=1),Oa(r,t).reduce((e,t,n)=>(e[r[n].index]=t,e),Array(n).fill(void 0))},Fa=(e,t)=>e.length===0?`.cell {display: none;}`:Na(e,t)})),La,Ra=e((()=>{E(),La=({host:e,canvasWidth:t,layout:n,setSettings:r})=>{let i=h();i.current=e=>r(r=>{let i=r.columns,{detail:{newWidth:a,column:o}}=e,s=i.findIndex(e=>e.name===o.name),c=[],l=i.reduce((e,t)=>Math.max(e,t.priority),-1/0);for(let e=0;e<n.length;e++)if(c[e]={...i[e]},e<s&&n[e]&&(c[e].width=n[e],c[e].flex=0,c[e].priority=l),e===s){let r=n.reduce((e,t,n)=>n<s&&t?e-t:e,t);c[e].width=Math.min(r,Math.max(a,i[e].minWidth)),c[e].flex=0,c[e].priority=l}return{...r,columns:c}}),C(()=>{let t=e=>i.current?.(e);return e.addEventListener(`column-resize`,t),()=>e.removeEventListener(`column-resize`,t)},[])}})),za,Ba,Va=e((()=>{E(),za=88,Ba=(e,t)=>C(()=>{let n=new ResizeObserver(([e])=>{e.contentRect?.width!==0&&requestAnimationFrame(()=>t(e.contentRect?.width-za))});return n.observe(e),()=>n.unobserve(e)},[])})),Ha,Ua=e((()=>{E(),Va(),Ha=e=>{let[t,n]=w(()=>e.getBoundingClientRect().width-za);return Ba(e,n),t}})),Wa,Ga,Ka,qa=e((()=>{E(),Fe(),Oe(),Wa=(e,t)=>{let n=A(()=>{let t=!1,n,r=()=>{t&&(n=requestAnimationFrame(r),e()&&(t=!1))};return{start:()=>{t=!0,cancelAnimationFrame(n),n=requestAnimationFrame(r)},stop:()=>{t=!1,cancelAnimationFrame(n)}}},[]);C(()=>{n.start()},t),C(()=>()=>n.stop(),[])},Ga=(e=0,t=0)=>Math.abs(e-t)<.1,Ka=(e,t=1.9,n=Ye)=>{let r=Ne({target:e});Wa(s(()=>{if(!r.tween)return r.tween=r.target,n(r.tween),!0;if(r.target.every((e,t)=>r.tween[t]===e))return n(r.tween),!0;r.tween=r.target.map((e,n)=>Ga(r.tween[n],e)?e:(r.tween[n]??0)+((e??0)-(r.tween[n]??0))/t||0),n(r.tween)},[]),[e])}})),Ja,Ya=e((()=>{E(),Ia(),Ja=({canvasWidth:e,groupOnColumn:t,config:n,miniColumn:r})=>A(()=>{if(!Array.isArray(n)||e==null||e===0)return[];let i=n.map((e,n)=>({minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,name:e.name,index:n,hidden:e.name===t?.name||e.disabled})).map(e=>r?{...e,hidden:r.name!==e.name}:e).sort(({index:e,priority:t},{index:n,priority:r})=>t===r?n-e:t-r);return Pa(i,e,i.length)},[e,t,n])})),Xa,Za=e((()=>{E(),Xa=({host:e,canvasWidth:t,columns:n})=>{let r=e.miniBreakpoint??480,i=A(()=>t<=r,[t,r]),[a,...o]=A(()=>i?n?.filter(e=>e.mini!=null).sort((e,t)=>(e.mini??0)-(t.mini??0)):[],[n,i])??[],s=!!a;return C(()=>{e.toggleAttribute(`mini`,s)},[s]),{isMini:s&&i,miniColumn:a,miniColumns:o}}})),Qa,$a,eo=e((()=>{E(),Ia(),Ra(),Ua(),qa(),Ya(),Za(),Fe(),Qa=e=>{let t=A(()=>new CSSStyleSheet,[]);return C(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,t]},[]),t},$a=({host:e,columns:t,settings:n,setSettings:r,resizeSpeedFactor:i,sortAndGroupOptions:a})=>{let o=Ha(e),{isMini:s,miniColumn:c,miniColumns:l}=Xa({host:e,canvasWidth:o,columns:t}),{groupOnColumn:u}=a,d=Ja({canvasWidth:o,groupOnColumn:u,miniColumn:c,config:n.columns}),f=Qa(e),p=A(()=>n.columns.reduce((e,n,r)=>d[r]!=null||n.name===u?.name||n.disabled?e:[...e,t.find(e=>e.name===n.name)],[]),[t,n,d]),m=Ne({columns:n.columns});return Ka(d,i,e=>{let t=Fa(e,m.columns);f.replace(t)}),La({host:e,canvasWidth:o,layout:d,setSettings:e=>r(e(n))}),{isMini:s,collapsedColumns:p,miniColumns:l}}})),to,no=e((()=>{to=({host:e,...t})=>{let{csvFilename:n=`omnitable.csv`,xlsxFilename:r=`omnitable.xlsx`,xlsxSheetname:i=`Omnitable`,topPlacement:a=`top-end`}=e;return{csvFilename:n,xlsxFilename:r,xlsxSheetname:i,topPlacement:a,...t}}})),ro,io=e((()=>{E(),ro=({host:e,selectedItems:t,data:n,sortAndGroupOptions:r,collapsedColumns:i,settings:a,filterFunctions:o,settingS:s,filters:c,...l})=>{let u=n&&n.length>0&&t.length===n.length,d=t=>{t.target.checked?e.shadowRoot.querySelector(`#groupedList`).selectAll():e.shadowRoot.querySelector(`#groupedList`).deselectAll()},{groupOnColumn:f}=r,p=A(()=>[f,...i,...a.columns.filter(e=>e.disabled)].some(e=>e&&Object.keys(o).includes(e.name)),[o,a,i]),m=A(()=>({...s,collapsed:i,badge:p,filters:c}),[s,i,p,c]);return C(()=>{let t=e.shadowRoot.querySelector(`#tableContent`),n=new ResizeObserver(t=>requestAnimationFrame(()=>{e.style.setProperty(`--ot-height`,t[0]?.contentRect.height+`px`)}));return n.observe(t),()=>n.unobserve(t)},[]),{allSelected:u,onAllCheckboxChange:d,data:n,settingsConfig:m,filters:c,groupOnColumn:f,sortAndGroup:r.sortAndGroup,...l}}})),ao,oo,so,co,lo,uo,fo=e((()=>{E(),F(),be(),Ma(),q(),ao=i`
	<svg
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
	>
		<g>
			<path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
		</g>
	</svg>
`,oo=e=>e?`groupRow groupRow-folded`:`groupRow`,so=({item:e,index:t})=>n=>l(n?.length>0,()=>i`
				<div class="itemRow-minis" part="item-minis">
					${n.map(n=>i`<div
								class="itemRow-mini"
								part="item-mini item-mini-${n.name}"
							>
								${(n.renderMini??n.renderCell)(n,{item:e,index:t})}
							</div>`)}
				</div>
			`),co=({columns:e,collapsedColumns:t,miniColumns:n,onItemClick:r,onCheckboxChange:a,dataIsValid:o,groupOnColumn:s,onItemChange:c,rowPartFn:l})=>(u,d,{selected:f,expanded:p,toggleCollapse:m})=>i`
		<div
			?selected=${f}
			part="${[`itemRow`,`itemRow-${u[Aa]}`,l?.(u,d)].filter(Boolean).join(` `)}"
			.dataIndex=${u[Aa]}
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
					?hidden="${ue(t.length)}"
					?aria-expanded="${p}"
					@click="${m}"
				>
					${ao}
				</button>
			</div>
			${so({item:u,index:d})(n)}
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
	`,lo=({onCheckboxChange:e,dataIsValid:t,groupOnColumn:n})=>(r,a,{selected:o,folded:s,toggleFold:c})=>i` <div
			class="${oo(s)}"
			part="groupRow groupRow-${r[Aa]}"
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
				${ao}
			</button>
		</div>`,uo=({host:e,error:t,dataIsValid:n,processedItems:r,columns:i,collapsedColumns:a,miniColumns:o,sortAndGroupOptions:c,rowPartFn:l,...u})=>{let{loading:d=!1,displayEmptyGroups:f=!1,compareItemsFn:p}=e,m=h({shiftKey:!1,ctrlKey:!1}),g=s(t=>{let n=t.target.dataItem,r=t.target.checked;m.current.shiftKey?e.shadowRoot.querySelector(`#groupedList`).toggleSelectTo(n,r):m.current.ctrlKey?(t.target.checked=!0,e.shadowRoot.querySelector(`#groupedList`).selectOnly(n)):e.shadowRoot.querySelector(`#groupedList`).toggleSelect(n,r),t.preventDefault(),t.stopPropagation()},[]);C(()=>{let e=({shiftKey:e,ctrlKey:t})=>{m.current={shiftKey:e,ctrlKey:t}};return window.addEventListener(`keydown`,e),window.addEventListener(`keyup`,e),()=>{window.removeEventListener(`keydown`,e),window.removeEventListener(`keyup`,e)}},[]);let _=s(t=>{let n=t.composedPath();n.slice(0,n.indexOf(t.currentTarget)).find(e=>e.matches?.(`a, .checkbox, .expand`))||e.dispatchEvent(new window.CustomEvent(`omnitable-item-click`,{bubbles:!0,composed:!0,detail:{item:t.currentTarget.dataItem,index:t.currentTarget.dataIndex}}))},[]),{groupOnColumn:v}=c,y=s((t,n)=>r=>dn(e,t,n,r),[]);return{...u,processedItems:r,dataIsValid:n,filterIsTooStrict:n&&r.length<1,loading:d,compareItemsFn:p,displayEmptyGroups:f,error:t,renderItem:A(()=>co({columns:i,collapsedColumns:a,miniColumns:o,onItemClick:_,onCheckboxChange:g,dataIsValid:n,groupOnColumn:v,onItemChange:y,rowPartFn:l}),[i,a,_,g,n,v,y,l]),renderGroup:A(()=>lo({onCheckboxChange:g,dataIsValid:n,groupOnColumn:v}),[g,n,v])}}})),po,mo=e((()=>{po=(e,t)=>{if(e===t)return 0;if(e==null)return-1;if(t==null)return 1;let n=typeof e,r=typeof t;return n===`object`&&r===`object`?e.toString()<t.toString()?-1:1:n===`number`&&r===`number`?e-t:n===`string`&&r===`string`?e<t?-1:1:n===`boolean`&&r===`boolean`?e?-1:1:(console.warn(`unsupported sort`,n,e,r,t),0)}})),ho,go,_o,vo,yo,bo,xo=e((()=>{Oe(),E(),mo(),cn(),_i(),Ma(),ho=(e,t)=>(n,r)=>po(e(n),e(r))*(t?-1:1),go=e=>e.replace(/([a-z0-9])([A-Z])/gu,`$1-$2`).toLowerCase(),_o=(e,t)=>{!e||!t||Object.entries(t).forEach(([t,n])=>{e[K].__ownChange=!0,e[K][t]=n,e[K].__ownChange=!1,e[K].dispatchEvent(new CustomEvent(`${go(t)}-changed`,{bubbles:!0,detail:{value:n}}))})},vo=(e,t)=>Object.assign(e,{[Aa]:t}),yo=Symbol(`unparsed`),bo=({data:e,columns:t,hashParam:n,sortAndGroupOptions:r,noLocalSort:i,noLocalFilter:a})=>{let{groupOnColumn:o,groupOnDescending:c,sortOnColumn:l,descending:u}=r,d=s(([e,n])=>{let r=t.find(({name:t})=>t===e);return r==null?[e,void 0]:[e,n.filter&&r.serializeFilter(r,n.filter)]},[t]),f=s(([e,n])=>{let r=t.find(({name:t})=>t===e);if(r==null)return[e,{[yo]:n}];let i={filter:r.deserializeFilter(r,n)};return _o(r,i),[e,i]},[t]),[p,m]=fi({},n,{multi:!0,suffix:`-filter--`,write:d,read:f}),h=s((e,n)=>m(r=>{let i=je(n,r[e]);return _o(t.find(t=>t.name===e),i),{...r,[e]:{...r[e],...i}}}),[t,m]),g=A(()=>Object.fromEntries(t.map(e=>[e.name,!e.noLocalFilter&&e.getFilterFn(e,p[e.name]?.filter)]).filter(([,e])=>!!e)),[t,...A(()=>Object.values(p).map(e=>e.filter),[p])]),_=A(()=>!Array.isArray(e)||e.length===0?[]:Object.entries(g).length===0||a?e.slice():e.filter(e=>Object.values(g).every(t=>t(e))),[e,g,a]),v=A(()=>{if(!i&&!o&&l!=null&&l.sortOn!=null)return _.slice().sort(ho(e=>l.getComparableValue({...l,valuePath:l.sortOn},e),u));if(o!=null&&o.groupOn!=null){let e=_.reduce((e,t)=>{let n=o.getComparableValue({...o,valuePath:o.groupOn},t);if(n===void 0)return e;let r=e.find(e=>e.id===n);return r?(r.items.push(t),e):(r={id:n,name:n,items:[t]},[...e,r])},[]);return e.sort(ho(e=>o.getComparableValue({...o,valuePath:o.groupOn},e.items[0]),c)),!l||i?e:e.filter(e=>Array.isArray(e.items)).map(e=>(e.items.sort(ho(e=>l.getComparableValue({...l,valuePath:l.sortOn},e),u)),e))}return _},[_,o,c,l,u,i]),y=A(()=>{let e=0,t=0,n=[];return v.forEach(r=>{if(Array.isArray(r.items)){vo(r,t++),r.items.forEach(t=>{vo(t,e++),n.push(t)});return}return vo(r,e++),n.push(r)},[]),n},[v]);return C(()=>{m(e=>Object.values(e).some(e=>e[yo]!=null)?Object.fromEntries(Object.entries(e).map(([e,t])=>t[yo]==null?[e,t]:f([e,t[yo]]))):e)},[f]),{processedItems:v,visibleData:y,filters:p,filterFunctions:g,setFilterState:h}}})),So,Co,wo=e((()=>{y(),E(),ut(),So=e=>{let t=t=>{let n=e.data.indexOf(t);if(n<0)return null;let r=e.data.splice(n,1);if(e.data=e.data.slice(),Array.isArray(r)&&r.length>0)return r[0]},n=(t,n)=>{e.data.splice(t,1,n),e.data=e.data.slice()};return{removeItem:t,removeItems(t){let n=[];for(let r=t.length-1;r>=0;--r){let i=e.removeItem(t[r]);i!=null&&n.push(i)}return n},replaceItemAtIndex:n,replaceItem(t,r){let i=e.data.indexOf(t);if(i>-1)return n(i,r)},selectItem(t){e.shadowRoot.querySelector(`#groupedList`).select(t)},selectAll(){e.shadowRoot.querySelector(`#groupedList`).selectAll()},deselectAll(){e.shadowRoot.querySelector(`#groupedList`).deselectAll()},deselectItem(t){e.shadowRoot.querySelector(`#groupedList`).deselect(t)},isItemSelected(t){return e.shadowRoot.querySelector(`#groupedList`).isItemSelected(t)}}},Co=({host:e,visibleData:t,filters:n,...r})=>{let{setFilterState:i}=r,a=A(()=>So(e),[]);he(r,Object.values(r)),he(a,Object.values(a)),C(()=>{let t=e=>i(e.detail.name,t=>({...t,...e.detail.state}));return e.addEventListener(`legacy-filter-changed`,t),()=>e.removeEventListener(`legacy-filter-changed`,t)},[]),D(`visibleData`,t),D(`sortedFilteredGroupedItems`,r.sortedFilteredGroupedItems),D(`selectedItems`,r.selectedItems),D(`sortOn`,r.sortOn),D(`descending`,r.descending),D(`isMini`,r.isMini);let o=A(()=>Object.fromEntries(Object.entries(n).filter(([,{filter:e}])=>e!==void 0).map(([e,{filter:t}])=>[e,t])),[n]);D(`filters`,o,Object.values(o))}})),To,Eo=e((()=>{E(),Ea(),eo(),no(),io(),fo(),xo(),wo(),Ci(),To=e=>{let{hashParam:t,settingsId:n,data:r,resizeSpeedFactor:i,noLocal:a,noLocalSort:o=a,noLocalFilter:s=a,error:c,rowPartFn:l}=e,u=wa({settingsId:n,host:e}),{settings:d,setSettings:f,columns:p,resetRef:m,savedSettings:h}=u,g=xi(p,t,{settings:d,setSettings:f,resetRef:m,ready:h!==void 0}),{processedItems:_,visibleData:v,filters:y,setFilterState:ee,filterFunctions:b}=bo({data:r,columns:p,hashParam:t,sortAndGroupOptions:g,noLocalSort:o,noLocalFilter:s}),{isMini:te,collapsedColumns:ne,miniColumns:x}=$a({host:e,columns:p,settings:d,setSettings:f,resizeSpeedFactor:i,sortAndGroupOptions:g}),S=r&&Array.isArray(r)&&r.length>0,[re,ie]=w([]);return Co({host:e,visibleData:v,sortedFilteredGroupedItems:_,columns:p,filters:y,setFilterState:ee,selectedItems:re,isMini:te,...g}),{header:ro({host:e,selectedItems:re,sortAndGroupOptions:g,dataIsValid:S,data:r,columns:p,filters:y,collapsedColumns:ne,settings:d,filterFunctions:b,settingS:u,setFilterState:ee,hideSelectAll:e.hideSelectAll===!0}),list:uo({host:e,error:c,dataIsValid:S,processedItems:_,setSelectedItems:ie,columns:p,collapsedColumns:ne,miniColumns:x,sortAndGroupOptions:g,rowPartFn:l}),footer:to({host:e,selectedItems:re,columns:p})}}})),Do=e((()=>{n(),customElements.define(`cosmoz-grouped-list-row`,class extends HTMLElement{get item(){return this._item}set item(e){this._item=e,this._render()}get index(){return this._index}set index(e){this._index=e,this._render()}get renderFn(){return this._renderFn}set renderFn(e){this._renderFn=e,this._render()}_render(){this._item==null||this._index==null||this._renderFn==null||r(this._renderFn(this._item,this._index),this)}})})),Oo,ko,Ao,jo,Mo,No,Po,Fo,Io,Lo=e((()=>{Oo={group:Symbol(`group`)},ko=(e,t)=>(t.has(e)||t.set(e,{}),t.get(e)),Ao=(e,t)=>!!ko(e,t).expanded,jo=(e,t)=>!!ko(e,t).folded,Mo=e=>e?e.items instanceof Array:!1,No=e=>{if(!Array.isArray(e)||e.length===0)return;let t=Array.isArray(e[0]?.items);if(!e.every(e=>Array.isArray(e.items)===t))throw Error(`Data must be homogeneous.`)},Po=(e,t,n)=>{if(Array.isArray(e))return No(e),e.reduce((e,r)=>{let i=r;return i.items?i.items.length?ko(r,n).folded?e.concat(r):e.concat(r,i.items.map(e=>Object.assign(e,{[Oo.group]:r}))):t?e.concat(r):e:e.concat(r)},[])},Fo=(e,...t)=>typeof e==`function`?e(...t):e,Io=(e,t)=>e===t})),Ro,zo=e((()=>{E(),Lo(),Ro=()=>{let[e,t]=w(()=>[new WeakMap]);return{setItemState:s((e,n)=>t(([t])=>{let r=ko(e,t);return Object.assign(r,Fo(n,r)),[t]}),[]),state:e[0],signal:e}}})),Bo,Vo=e((()=>{E(),zo(),Lo(),Bo=()=>{let{setItemState:e,state:t,signal:n}=Ro();return{state:t,signal:n,toggleFold:s((t,n)=>{Mo(t)&&e(t,e=>({folded:n===void 0?!e.folded:n}))},[]),toggleCollapse:s((t,n)=>{Mo(t)||e(t,e=>({expanded:n===void 0?!e.expanded:!n}))},[])}}})),Ho,Uo=e((()=>{E(),Lo(),Ho=({initial:e,compareItemsFn:t,data:n,flatData:r})=>{let[i,a]=w(e),[o,c]=w(),l=s(e=>i.includes(e),[i]),u=s(e=>e?.items?.every(l)??!1,[l]),d=s(e=>l(e)||u(e),[l,u]),f=s(e=>{let t=e.items??[e];a(e=>[...e,...t.filter(t=>!e.includes(t))]),c(e)},[]),p=s(e=>{let t=e.items??[e];a(e=>e.filter(e=>!t.includes(e))),c(e)},[]),m=s(e=>{a(e.items?.slice()||[e]),c(e)},[]),h=s(()=>{a(n.flatMap(e=>e.items||e)),c(void 0)},[n]),g=s(()=>{a([]),c(void 0)},[]),_=s((e,t=!d(e))=>t?f(e):p(e),[d]),v=s((e,n)=>{if(!r)return;let i=o?r.findIndex(e=>t(e,o)):-1;if(i<0)return _(e,n);let[a,s]=[i,r.indexOf(e)].sort((e,t)=>e-t);r.slice(a,s+1).forEach((e,t,r)=>{t>0&&t<r.length-1&&Mo(e)||_(e,n)}),c(e)},[r,t,_]);return C(()=>a(e=>e.length>0&&r?r.filter(n=>e.find(e=>t(n,e))):e),[r]),{selectedItems:i,isItemSelected:l,isGroupSelected:u,isSelected:d,select:f,deselect:p,selectOnly:m,selectAll:h,deselectAll:g,toggleSelect:_,toggleSelectTo:v}}})),Wo,Go,Ko,qo=e((()=>{y(),ut(),E(),n(),Do(),Vo(),Uo(),Lo(),u(),Wo={host:{position:`relative`,display:`flex`,flexDirection:`column`}},Go=e=>{let{data:t,renderItem:n,renderGroup:r,displayEmptyGroups:i,compareItemsFn:a=Io}=e,{toggleFold:o,toggleCollapse:c,state:l,signal:u}=Bo(),d=A(()=>Po(t,i,l),[t,i,u]),{selectedItems:f,isItemSelected:p,isGroupSelected:m,isSelected:h,select:g,deselect:_,selectOnly:v,selectAll:y,deselectAll:ee,toggleSelect:b,toggleSelectTo:te}=Ho({initial:[],compareItemsFn:a,data:t,flatData:d}),ne=s((e,t)=>Array.isArray(e.items)?r(e,t,{selected:m(e),folded:jo(e,l),toggleSelect:t=>b(e,typeof t==`boolean`?t:void 0),toggleFold:()=>o(e)}):n(e,t,{selected:f.includes(e),expanded:Ao(e,l),toggleSelect:t=>b(e,typeof t==`boolean`?t:void 0),toggleCollapse:()=>c(e)}),[n,r,f,b,u]);Be(()=>{Object.assign(e.style,Wo.host)},[]),D(`selectedItems`,f);let x={toggleFold:o,toggleCollapse:c,isItemSelected:p,isGroupSelected:m,isSelected:h,select:g,deselect:_,selectOnly:v,selectAll:y,deselectAll:ee,toggleSelect:b,toggleSelectTo:te};return he(x,Object.values(x)),{renderRow:ne,flatData:d}},Ko=({renderRow:e,flatData:t})=>it({items:t,renderItem:(t,n)=>i`<cosmoz-grouped-list-row
				.item=${t}
				.index=${n}
				.renderFn=${e}
			></cosmoz-grouped-list-row>`})})),Jo,Yo=e((()=>{qo(),E(),Jo=e=>Ko(Go(e)),customElements.define(`cosmoz-grouped-list`,d(Jo,{useShadowDOM:!1}))})),Xo=e((()=>{Yo()})),Zo,Qo,$o,es=e((()=>{ke(),Et(),Zr(),$r(),Ei(),ji(),Pi(),ut(),E(),Le(),n(),st(),Li(),Gi(),qi(),Qi(),Eo(),Xo(),Zo=e=>window.ShadyCSS?.ApplyShim?.transformCssText?.(e)||e,Qo=e=>{let{header:t,list:n,footer:r}=To(e);return i`
		<style>
			${Te([],()=>Zo(Ii))}
		</style>

		<div class="mainContainer">
			${Ki(t)}
			<div class="tableContent" id="tableContent">
				${Zi(t,n)}
			</div>
			${Wi(r)}
		</div>

		<div id="columns">
			<slot id="columnsSlot"></slot>
		</div>
	`},customElements.define(`cosmoz-omnitable`,class extends d(Qo,{observedAttributes:[`hash-param`,`sort-on`,`group-on`,`descending`,`group-on-descending`,`hide-select-all`,`settings-id`,`no-local`,`no-local-sort`,`no-local-filter`,`disabled-filtering`,`loading`,`mini-breakpoint`]}){connectedCallback(){super.connectedCallback(),c(this,`selectedItems`,[]),c(this,`visibleData`,[]),c(this,`sortedFilteredGroupedItems`,[])}}),$o=`
	<slot name="actions" slot="actions"></slot>
`,i(Object.assign([$o],{raw:[$o]})),Ze(Object.assign([$o],{raw:[$o]}))})),ts,Q,ns,rs,is,as=e((()=>{ts=(e,t,n)=>{let r=String(e),i=-1,a=!n&&n!==0?` `:n,o=t-r.length;for(;++i<o;)r=a+r;return r},Q=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,ns=()=>`2015-`+ts(Q(1,12),2,`0`)+`-`+ts(Q(1,28),2,`0`),rs=()=>{let e=Q(0,20);return e===1?new Date(2015,3,2,14,26,10,299):e===2?new Date(2016,4,2,10,9,10,444):e===3?new Date(2016,4,2,10,9,10,443):e===4?new Date(2016,4,2,10,9,10,442):new Date(Q(2014,2017),Q(1,12),Q(1,28),Q(0,23),Q(0,59),Q(0,59),Q(0,999))},is=(e,t,n)=>{let r=Q(e,t),i=[],a=[`Lorem ipsum dolor sit amet`,`Nunc tristique`,`Curabitur vestibulum`,`Cras laoreet`,`Himenaeos`,`maximus diam purus at mauris`],o=[`SEK`,`USD`,`EUR`,`AUD`],s=0;for(let e=0;e<r;e+=1){let t=`Group `+e,r=e*2+1;for(let e=0;e<r;e+=1){let r=[],c=[],l=[],u=s%10;for(let e=0;e<u;e+=1)r.push(`Item `+e),c.push({name:`Item `+e,value:`item-value-`+e}),l.push({value:`cat-`+e,label:`Category `+e});i.push({id:s,name:t+` item `+e,value:Q(0,1e4),bool:Q(0,100)>50,object:{value:Q(0,1e4),label:`Random string `+Q(1,n)},sub:{subProp:a[s%a.length]},randomString:`Random string `+Q(1,n),randomString2:`Random string 2 `+Q(1,n),randomString3:`Random string 3 `+Q(1,n),randomString4:`Random string 4 `+Q(1,n),date:rs(),dateJSON:ns(),amount:{amount:Q(10,100),currency:o[s%o.length]},group:t,list:r,objectList:c,categories:s%7==0?null:l}),s+=1}}return i}})),os,ss,cs,$,ls;e((()=>{n(),_(),ft(),es(),as(),os={title:`Components/ComsmozOmnitableFullDemo`,component:`cosmoz-omnitable`,tags:[`autodocs`],args:{loading:!1,locale:`en`,sortOn:``,groupOn:``,descending:!1,groupOnDescending:!1,hashParam:``,settingsId:``,selectedItems:[],disabledFiltering:!1},argTypes:{loading:{control:`boolean`,description:`Show loading state`,table:{defaultValue:{summary:`false`}}},locale:{control:`select`,options:[`en`,`fr`,`sv`],description:`Language locale`,table:{defaultValue:{summary:`en`}}},selectedItems:{control:`object`,description:`Show selected items`},data:{control:`object`,description:`Show specified items`},sortOn:{control:`text`,description:`Column property name to sort on (e.g., "amount", "date", "id")`},groupOn:{control:`text`,description:`Column property name to group on (e.g., "amount", "date", "id")`},descending:{control:`boolean`,description:`Sort on descending`},groupOnDescending:{control:`boolean`,description:`Group on descending`},hashParam:{control:`text`,description:`Hash parameter for URL state management`},settingsId:{control:`text`,description:`ID for storing table settings`},disabledFiltering:{control:`boolean`,description:`Disable filter inputs in all column headers`,table:{defaultValue:{summary:`false`}}}},render:e=>i`
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
                    ${re({styles:`vertical-align: middle; fill: currentColor;`})}
                    <span>Remove items</span>
                </paper-button>
            </cosmoz-omnitable>
        `,play:async()=>{console.log(`Current hash:`,window.location.hash)}},ss={args:{data:is(10,10,10)}},cs={args:{data:is(2,2,10)}},$={args:{data:[]}},ss.parameters={...ss.parameters,docs:{...ss.parameters?.docs,source:{originalSource:`{
  args: {
    data: generateTableDemoData(10, 10, 10)
  }
}`,...ss.parameters?.docs?.source}}},cs.parameters={...cs.parameters,docs:{...cs.parameters?.docs,source:{originalSource:`{
  args: {
    data: generateTableDemoData(2, 2, 10)
  }
}`,...cs.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    data: []
  }
}`,...$.parameters?.docs?.source}}},ls=[`TableWithLargeData`,`TableWithSmallData`,`TableWithNoData`]}))();export{ss as TableWithLargeData,$ as TableWithNoData,cs as TableWithSmallData,ls as __namedExportsOrder,os as default};