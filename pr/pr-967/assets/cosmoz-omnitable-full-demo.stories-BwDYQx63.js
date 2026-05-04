import{n as e}from"./chunk-BneVvdWh.js";import{$ as t,A as n,B as r,C as i,Ct as a,D as o,E as s,G as c,H as l,J as u,K as d,L as f,M as p,N as m,O as h,P as g,Q as _,R as ee,S as te,St as v,U as ne,V as y,W as b,_ as re,_t as x,at as S,bt as C,c as ie,cn as ae,ct as w,d as oe,dn as T,et as se,f as ce,fn as E,g as le,gt as ue,h as de,ht as fe,it as pe,j as me,k as he,l as D,ln as ge,lt as O,m as _e,n as k,nt as ve,o as ye,ot as be,p as xe,q as Se,r as Ce,rt as we,s as Te,st as Ee,t as De,tt as A,u as Oe,ut as ke,v as Ae,vt as je,w as j,xt as Me,y as Ne,yt as M,z as Pe}from"./iframe-C7gZhvrC.js";import{A as Fe,B as Ie,C as Le,D as Re,E as ze,F as N,G as Be,H as Ve,I as He,L as Ue,M as We,N as Ge,O as P,P as F,R as Ke,S as qe,T as Je,U as Ye,V as Xe,W as Ze,_ as Qe,a as $e,b as et,c as tt,d as nt,f as rt,g as it,h as at,i as ot,j as st,k as I,l as ct,m as lt,n as ut,o as dt,p as ft,r as pt,s as mt,t as ht,u as gt,v as _t,w as vt,x as yt,y as bt,z as xt}from"./dist-C4l2deEB.js";var St,Ct=e((()=>{w(),St=()=>T`<style>
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
</style>`,customElements.define(`cz-spinner`,O(St))})),wt,Tt,L=e((()=>{f(),_(),w(),wt=A`
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
`,Tt=()=>T`
	<style>
		${wt}
	</style>
	${Pe({className:`icon`,width:`18`,height:`18`})}
`,customElements.define(`cosmoz-clear-button`,O(Tt))})),R,Et,Dt,Ot,kt,z,B=e((()=>{N(),R=({valuePath:e},t)=>F(t,e),Et=R,Dt=R,Ot=({valuePath:e},t)=>n=>{let r=F(n,e);return r==null?!1:r.toString().toLowerCase().trim().includes(t.toLowerCase().trim())},kt=(e,t)=>t===``||t==null?null:t,z=e=>class extends e{static get properties(){return{isOmnitableColumn:{type:Boolean,value:!0},title:{type:String},valuePath:{type:String,notify:!0},values:{type:Array,notify:!0},filter:{type:Object},noLocalFilter:{type:Boolean},disabled:{type:Boolean,value:!1,notify:!0},editable:{type:Boolean,notify:!0},loading:{type:Boolean,value:!1,notify:!0},externalValues:{type:Boolean,value:!1,notify:!0},name:{type:String},sortOn:{type:String},groupOn:{type:String},noSort:{type:Boolean,value:!1},disabledFiltering:{type:Boolean,value:!1},width:{type:String,value:`75px`},minWidth:{type:String,value:`40px`},flex:{type:String,value:`1`},cellClass:{type:String,value:`default-cell`},headerCellClass:{type:String,value:`default-header-cell`},priority:{type:Number,value:0},hidden:{type:Boolean,notify:!0},preferredDropdownHorizontalAlign:{type:String,value:`right`},renderHeader:{type:Function},renderCell:{type:Function},renderEditCell:{type:Function},renderGroup:{type:Function},mini:{type:Number,value:null},renderMini:{type:Function}}}static get observers(){return[`notifyFilterChange(filter)`]}notifyFilterChange(e){this.__ownChange||this.dispatchEvent(new CustomEvent(`legacy-filter-changed`,{detail:{name:this.name,state:this.legacyFilterToState(e)},bubbles:!0}))}legacyFilterToState(e){return{filter:e}}getFilterFn(){}getString(e,t){return R(e,t)}toXlsxValue(e,t){return Et(e,t)}cellTitleFn(e,t){return this.getString(e,t)}headerTitleFn(e){return e.title}serializeFilter(e,t){return kt(e,t)}deserializeFilter(e,t){return t==null?null:typeof t==`string`?window.decodeURIComponent(t):t}getComparableValue(e,t){return Dt(e,t)}computeSource(e,t){return t}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n),this.dispatchEvent(new CustomEvent(`cosmoz-column-prop-changed`,{bubbles:!0}))}}})),At,jt,Mt,Nt,Pt,Ft,It,Lt=e((()=>{o(),L(),I(),E(),c(),B(),At=e=>t=>e(n=>{if(n.inputValue===void 0&&t.target.value===``)return n;clearTimeout(n.t);let r=setTimeout(()=>e(e=>({...e,filter:e.inputValue})),1e3);return{...n,inputValue:t.target.value,t:r}}),jt=e=>()=>e(e=>({...e,filter:e.inputValue})),Mt=e=>t=>{t.keyCode===13&&(t.preventDefault(),e(e=>({...e,filter:e.inputValue})))},Nt=e=>t=>e(e=>({...e,headerFocused:t.detail.value})),Pt=e=>()=>e(e=>({...e,filter:null,inputValue:null})),Ft=e=>e!=null&&e!==``,It=class extends z(P){static get properties(){return{minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},inputValue:{type:Object,notify:!0}}}getFilterFn(e,t){if(!(t==null||t===``))return Ot(e,t)}renderCell(e,{item:t}){return T`<span class="default-column">${R(e,t)}</span>`}renderEditCell(e,{item:t},n){return T`<cosmoz-input
			variant="inline"
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${R(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,inputValue:n,headerFocused:r},i){return T`<cosmoz-input
			variant="inline"
			label=${e.title}
			?disabled=${e.disabledFiltering}
			.value=${n??t}
			@value-changed=${At(i)}
			focused=${r}
			@focused-changed=${Nt(i)}
			@keydown=${Mt(i)}
			@blur=${jt(i)}
		>
			${d(!e.disabledFiltering,()=>T`<cosmoz-clear-button
						suffix
						slot="suffix"
						?visible=${Ft(t)}
						light
						@click=${Pt(i)}
					></cosmoz-clear-button>`)}
		</cosmoz-input>`}legacyFilterToState(e){return{filter:e,inputValue:e}}},customElements.define(`cosmoz-omnitable-column`,It)})),Rt,zt,Bt,Vt=e((()=>{o(),w(),E(),Rt=[`label`,`value`,`slot`,`always-float-label`,`disabled`],zt=a`
	${m}
	:host(:focus-within) label, :host([always-float-label]) label {
		transform: translateY(-75%) scale(0.85);
	}

	:host([disabled]) {
		pointer-events: none;
		cursor: default;
		--cosmoz-input-disabled-opacity: 1;
	}

	:host([disabled]) .line {
		border-bottom-style: solid;
	}

	.wrap {
		height: 40px;
	}

	#input {
		margin-top: -4px;
	}
`,Bt=e=>{let{label:t,value:n,slot:r}=e;return g(T`<div
		id="input"
		part="input"
		role="button"
		class="control"
		slot=${r}
	>
		${n||``}
	</div>`,{label:t})},customElements.define(`cosmoz-omnitable-dropdown-input`,O(Bt,{observedAttributes:Rt,styleSheets:[zt]}))})),Ht,Ut=e((()=>{Ue(),E(),ze(),Vt(),Ht=({title:e,tooltip:t=``,filterText:n=``,onOpenedChanged:r,content:i,horizontalAlign:a=`left`,externalValues:o=null})=>T`
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
			class=${Je({filtered:!!n,...o!=null&&{[`external-values-${o}`]:!0},dropdown:!0})}
			title=${t||``}
		>
			<cosmoz-omnitable-dropdown-input
				variant="inline"
				class="input"
				slot="button"
				.label=${e}
				.placeholder=${e}
				.value=${n??``}
				text-align=${a}
				?always-float-label=${n?.length>0}
			></cosmoz-omnitable-dropdown-input>
			<div class="dropdown-content">${i}</div>
		</cosmoz-dropdown>
	`})),Wt,Gt,Kt=e((()=>{xe(),We(),vt(),yt(),Wt=e=>e?typeof e.close==`function`?e:Wt(e.parentElement):null,Gt=e=>class extends e{static get properties(){return{disabled:{type:Boolean,value:!1},filter:{type:Object,notify:!0},values:{type:Array,value(){return[]}},headerFocused:{type:Boolean,notify:!0},min:{type:Number,value:null},max:{type:Number,value:null},limits:{type:Function},autoupdate:{type:String,value:!0},locale:{type:String,value:null},_filterInput:{type:Object,value(){return{min:null,max:null}}},_range:{type:Object,computed:`_computeRange(values.*)`},_limit:{type:Object,computed:`_computeLimit(_range, _filterInput.*, min, max)`,value(){return{}}},_tooltip:{type:String,computed:`_computeTooltip(title, _filterText)`},_fromClasses:{type:String,computed:`_computeInputClasses(_filterInput.min)`},_toClasses:{type:String,computed:`_computeInputClasses(_filterInput.max)`}}}static get observers(){return[`_filterInputChanged(_filterInput.*, autoupdate)`,`_filterChanged(filter.*)`,`_updateLimits(limits, headerFocused)`]}disconnectedCallback(){this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),super.disconnectedCallback()}_computeInputClasses(e){return e!=null&&e!==``?`has-value`:``}toNumber(e,t,n){if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=this.toNumber(t);return i==null?r:n(r,i)}toValue(){return this.toNumber.apply(this,arguments)}getComparableValue(e,t){if(e==null)return;let n=e;return t!=null&&(n=this.get(t,e)),this.toValue(n)}renderValue(){}getInputString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return this._toInputString(n)}_computeRange(e){let t=e.base,n=Array.isArray(t)&&t.length&&t.map(e=>this.toValue(e)).filter(e=>e!=null);return!n||n.length<1?{min:null,max:null}:n.reduce((e,t)=>({min:this.toValue(t,e.min,Math.min),max:this.toValue(t,e.max,Math.max)}),{})}_computeLimit(e,t,n,r){if(!e)return;let i=t.base,a=this.toValue(n),o=this.toValue(r),s=a??this.toValue(e.min),c=o??this.toValue(e.max);return{fromMin:s,fromMax:this.toValue(c,this._fromInputString(i.max,`max`),Math.min),toMin:this.toValue(s,this._fromInputString(i.min,`min`),Math.max),toMax:c}}_computeFilterText(e){if(e.base==null)return;let t=e.base,n=this.toValue(t.min),r=this.toValue(t.max),i=[];return n!=null&&i.push(this.renderValue(n)),i.push(` - `),r!=null&&i.push(this.renderValue(r)),i.length>1?i.join(``):void 0}_computeTooltip(e,t){return t==null?e:`${e}: ${t}`}_fromInputString(e){return this.toValue(e)}_toInputString(e){return this.toValue(e)??null}_getDefaultFilter(){return{min:null,max:null}}_filterInputChanged(e,t){this.__inputChangePath=e.path.split(`.`)[1]||null,t&&(this._limitInputDebouncer=qe.debounce(this._limitInputDebouncer,Ge.after(600),()=>{this._limitInput(),this._updateFilter()}),Le(this._limitInputDebouncer))}_clearFrom(){this.set(`_filterInput.min`,null),this._updateFilter()}_clearTo(){this.set(`_filterInput.max`,null),this._updateFilter()}_onBlur(){this._limitInput(),this._updateFilter()}_onKeyDown(e){let t=e.currentTarget,n=Array.from(t.parentElement.querySelectorAll(`cosmoz-input`)),r=n[n.findIndex(e=>e===t)+1],i=!r,a=n[0]===t;switch(e.keyCode){case 13:if(e.preventDefault(),!i)r.focus();else{let e=this._limitInput();this._updateFilter(),e||this._closeParent(t)}break;case 9:(i&&!e.shiftKey||a&&e.shiftKey)&&this._closeParent(t)}}_closeParent(e){let t=Wt(e);t&&t.close()}_onDropdownOpenedChanged({currentTarget:e,type:t,detail:n}){(t===`focus`||n?.value===!0)&&setTimeout(()=>{e.querySelector(`cosmoz-input:focus`)||e.querySelector(`cosmoz-input`)?.focus()},100)}_limitInput(){let e=this._filterInput,t=this.__inputChangePath,n=t?this._fromInputString(this.get(t,e),t):null;if(this.__inputChangePath=null,n==null)return!1;let r=this._limit,i=t===`min`?`from`:`to`,a=this.get(i+`Min`,r),o=this.get(i+`Max`,r),s=this.toValue(n,a,Math.max),c=this.toValue(s,o,Math.min);return this.getComparableValue(n)===this.getComparableValue(c)?!1:(this.set([`_filterInput`,t],this._toInputString(c,t)),this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),!0)}_updateFilter(){let e=this._filterInput,t=this.filter,n=this._fromInputString(e.min,`min`),r=this._fromInputString(e.max,`max`);this.getComparableValue(n)===this.getComparableValue(t,`min`)&&this.getComparableValue(r)===this.getComparableValue(t,`max`)||this.set(`filter`,{min:n,max:r})}_filterChanged(e){if(this._filterInput==null)return;let t=this._filterInput,n=e.base,r=this._fromInputString(t.min,`min`),i=this._fromInputString(t.max,`max`);this.getComparableValue(r)===this.getComparableValue(n,`min`)&&this.getComparableValue(i)===this.getComparableValue(n,`max`)||(this.set(`_filterInput`,{min:this._toInputString(n.min),max:this._toInputString(n.max)}),this._limitInputDebouncer&&this._limitInputDebouncer.cancel())}hasFilter(){let e=this.filter;return e==null?!1:this.toValue(e.min)!=null||this.toValue(e.max)!=null}resetFilter(){this.filter=this._getDefaultFilter()}_updateLimits(e,t){e&&Promise.resolve(_e(e,{active:t})).then(e=>{let{min:t,max:n}=e??{};Object.assign(this,{...t==null?{}:{min:t},...n==null?{}:{max:n}})})}}})),qt,Jt=e((()=>{I(),E(),qt=e=>class extends e{static get template(){return Fe`<div id="output" style="position:relative;"></div>`}connectedCallback(){super.connectedCallback(),ge(this.render(),this.$.output)}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n),requestAnimationFrame(()=>ge(this.render(),this.$.output))}}})),Yt,Xt=e((()=>{o(),I(),j(),E(),c(),Ut(),Vt(),Kt(),Jt(),Yt=class extends Gt(qt(P)){static get properties(){return{currency:{type:String},autodetect:{type:Boolean,value:!1},rates:{type:Object},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, _formatters)`},headerFocused:{type:Boolean,value:!1}}}static get observers(){return[`_valuesChanged(autodetect, currency, values)`]}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return T`
			${d(this.disabled,()=>T`
					<cosmoz-omnitable-dropdown-input
						disabled
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>T`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Ht({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:T`
							<h3>${this.title}</h3>
							<cosmoz-input
								class=${this._fromClasses}
								type="number"
								title=${s(`Minimum amount`)}
								label=${s(`Min amount`)}
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
								title=${s(`Maximum amount`)}
								label=${s(`Max amount`)}
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
		`}_valuesChanged(e,t,n){if(!Array.isArray(n)||n.length<1||!e&&t)return;let r=n.reduce((e,t)=>{if(t.currency){let n=t.currency;e[n]=(e[n]||0)+1}return e},{}),i=Object.keys(r)[0];Object.keys(r).reduce((e,t)=>{let n=Math.max(e,r[t]);return n===r[t]&&(i=t),n},0),this.set(`currency`,i)}toAmount(e,t,n){if(e==null||e===``)return;if(typeof e!=`object`||e.currency==null||e.currency===``)return null;let r=this.toNumber(e.amount);if(r==null||Number.isNaN(r))return null;let i={currency:e.currency,amount:r};if(n==null||t==null)return i;let a=this.toAmount(t);if(a==null)return i;let o=this.rates||{},s=i.amount*(o[i.currency]||1),c=a.amount*(o[a.currency]||1);return this.toNumber(s,c,n)===s?i:a}toValue(){return this.toAmount.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n==null)return;let r=this.toNumber(n.amount),i=this.rates;return i==null?r:r*(i[n.currency]||1)}getString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return n===void 0?``:n===null?`Invalid value`:this.renderValue(n)}getCurrency(e,t){let n=this.get(t,e);return n&&n.currency}getFormatter(e,t){let n=e+(t||``)||``,r=this._formatters=this._formatters||{};return r[n]||(r[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),r[n]}renderValue(e){let t=this.toAmount(e);return t==null?``:this.getFormatter(t.currency,this.locale).format(e.amount)}_amountValueChanged(e){let t=e.target.value,n=e.model.item,r=this.get(this.valuePath,n),i={amount:Number(t),currency:r.currency};this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toInputString(e){let t=this.toValue(e);return t==null?null:this.toNumber(t.amount)}_toInputStringAmount(e){let t=this.rates;if(t==null)return this._toInputString(e);let n=this.toValue(e);return n==null?null:(this.toNumber(n.amount)*(t[n.currency]||1)/(t[this.currency]||1)).toFixed(2)}_fromInputString(e,t){let n=this.toNumber(e);if(n!=null)return this.toValue({amount:n,currency:t&&this.get([`filter`,t,`currency`])||this.currency})}},customElements.define(`cosmoz-omnitable-amount-range-input`,Yt)})),V,Zt,Qt,$t,H,en,tn,nn,rn=e((()=>{N(),_t(),V=(e,t,n)=>{if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=V(t);return i==null?r:n(r,i)},Zt=e=>{let t=V(e);return t==null?null:t.toString()},Qt=({valuePath:e},t)=>Zt(V(e?F(t,e):t)),$t=e=>Zt(e)??``,H=({valuePath:e,maximumFractionDigits:t},n)=>{if(n==null)return;let r=V(e?F(n,e):n);if(r!=null)return t===null?r:V(r.toFixed(t))},en=et((e,t,n)=>{let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}),tn=({valuePath:e,locale:t,minimumFractionDigits:n,maximumFractionDigits:r},i)=>{let a=e?F(i,e):i;if(a==null)return``;let o=V(a);if(o!=null)return en(t,n,r).format(o)},nn=(e,t)=>n=>{let r=H(e,n);if(r==null)return!1;let i=H({...e,valuePath:`min`},t),a=H({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})),U,W,an,on,sn,cn,ln,un,dn,fn,pn,mn=e((()=>{N(),rn(),U=(e={},t,n,r)=>{if(t==null||t===``)return;if(typeof t!=`object`||t.currency==null||t.currency===``)return null;let i=V(t.amount);if(i==null||Number.isNaN(i))return null;let a={currency:t.currency,amount:i};if(r==null||n==null)return a;let o=U(e,n);if(o==null)return a;let s=a.amount*(e[a.currency]||1);return V(s,o.amount*(e[o.currency]||1),r)===s?a:o},W=({valuePath:e,rates:t},n)=>{if(n==null)return;let r=n;e!=null&&(r=F(n,e));let i=U(t,r);if(i==null)return;let a=V(i.amount);return t==null||a==null?a:a*(t?.[i.currency]||1)},an=(e,t)=>n=>{let r=W(e,n);if(r===void 0)return!1;let i=W({...e,valuePath:`min`},t),a=W({...e,valuePath:`max`},t);return i===void 0||a===void 0?!0:!(r<i||r>a)},on={},sn=(e,t)=>{let n=e+(t||``)||``;return on[n]||(on[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),on[n]},cn=(e,t,n)=>{let r=U(e,t);return r==null?``:sn(r.currency,n).format(r.amount)},ln=({valuePath:e,rates:t,locale:n},r)=>{let i=U(t,e?F(r,e):void 0);return i===void 0?``:i===null?`Invalid value`:cn(t,i,n)},un=e=>e?e.amount+e.currency:``,dn=e=>{if(e==null||e===``)return;let t=e.match(/^(-?[\d]+)([\D]+?)$/iu);if(!(!Array.isArray(t)||t.length<0))return{amount:Number(t[1]),currency:t[2]}},fn=({valuePath:e},t)=>e?F(t,e)?.currency:null,pn=({valuePath:e},t)=>e?F(t,e)?.amount:void 0})),G,hn,gn,_n,vn,yn,bn,K=e((()=>{_t(),w(),G=Symbol(`column`),hn=e=>{let t=!0,n=e.map(e=>e.name);return e.forEach(e=>{e.name??(t=!1,console.error(`The name attribute needs to be set on all columns! Missing on column`,e))}),e.forEach(e=>{n.indexOf(e.name)!==n.lastIndexOf(e.name)&&(t=!1,console.error(`The name attribute needs to be unique among all columns! Not unique on column`,e))}),t},gn=(e,t)=>{let n=e.valuePath??e.name;return{name:e.name,title:e.title,valuePath:n,groupOn:e.groupOn??n,sortOn:e.sortOn??n,noSort:e.noSort,disabledFiltering:t||e.disabledFiltering,minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,getString:e.getString,getComparableValue:e.getComparableValue,serializeFilter:e.serializeFilter,deserializeFilter:e.deserializeFilter,toXlsxValue:e.toXlsxValue,renderHeader:e.renderHeader,renderCell:e.renderCell,renderEditCell:e.renderEditCell,renderGroup:e.renderGroup,cellTitleFn:e.cellTitleFn,headerTitleFn:e.headerTitleFn,getFilterFn:e.getFilterFn,headerCellClass:e.headerCellClass,cellClass:e.cellClass,editable:e.editable,values:e.values,source:bt(e.computeSource),noLocalFilter:e.noLocalFilter,mini:e.mini,renderMini:e.renderMini,loading:e.loading,externalValues:e.externalValues,computeSource:e.computeSource,trueLabel:e.trueLabel,falseLabel:e.falseLabel,valueProperty:e.valueProperty,textProperty:e.textProperty,emptyLabel:e.emptyLabel,emptyValue:e.emptyValue,min:e.min,max:e.max,locale:e.locale,autoupdate:e.autoupdate,maximumFractionDigits:e.maximumFractionDigits,minimumFractionDigits:e.minimumFractionDigits,currency:e.currency,rates:e.rates,autodetect:e.autodetect,ownerTree:e.ownerTree,keyProperty:e.keyProperty,...e.getConfig?.(e),[G]:e}},_n=e=>e.isOmnitableColumn&&!e.hidden,vn=e=>{let t=e.filter(_n);return hn(t)?t:[]},yn=(e,t,n)=>(Array.isArray(t)?e.filter(e=>t.includes(e.name)):e.filter(e=>!e.disabled)).map(e=>gn(e,n)),bn=(e,{enabledColumns:t,disabledFiltering:n})=>{let[r,i]=x([]);return je(()=>{let r,a=[],o=e.shadowRoot.querySelector(`#columnsSlot`),s=e=>()=>{let r=o.assignedNodes({flatten:!0});if(e)a=r;else{let e=r.filter(e=>!a.includes(e)),t=a.filter(e=>!r.includes(e)),n=[...e,...t].some(e=>e.isOmnitableColumn);if(a=r,!n)return}i(yn(vn(r),t,n))},c=e=>{cancelAnimationFrame(r),r=requestAnimationFrame(s(e?.type===`cosmoz-column-prop-changed`))};return c(),o.addEventListener(`slotchange`,c),e.addEventListener(`cosmoz-column-prop-changed`,c),()=>{o.removeEventListener(`slotchange`,c),e.removeEventListener(`cosmoz-column-prop-changed`,c),cancelAnimationFrame(r)}},[t,n]),r}})),xn,q,Sn,J=e((()=>{N(),K(),xn=(e,t)=>Array.isArray(e)?e.map(e=>F(e,t)).filter((e,t,n)=>e!=null&&n.indexOf(e)===t):void 0,q=({externalValues:e,values:t,valuePath:n},r)=>{if(e)return e;if(typeof t==`function`)return t;if(n!==void 0)return xn(r,n)},Sn=(e,t,n,r)=>{let{valuePath:i}=t,a=i===void 0?void 0:F(n,i);if(r===a)return;i!==void 0&&He(n,i,r);let o={item:n,valuePath:i,value:r,oldValue:a,column:t[G]};e.dispatchEvent(new CustomEvent(`column-item-changed`,{bubbles:!0,composed:!0,detail:o}))}})),Cn,wn=e((()=>{o(),L(),I(),E(),N(),B(),Xt(),mn(),J(),Cn=class extends z(P){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},currency:{type:String,notify:!0},autodetect:{type:Boolean,value:!1,notify:!0},rates:{type:Object,notify:!0},width:{type:String,value:`70px`},cellClass:{type:String,value:`amount-cell align-right`},headerCellClass:{type:String,value:`amount-header-cell`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=W({...e,valuePath:`min`},t),r=W({...e,valuePath:`max`},t);if(!(n==null&&r==null))return an(e,t)}getString(e,t){return ln(e,t)}toXlsxValue(e,t){return ln(e,t)}getComparableValue(e,t){return W(e,t)}serializeFilter({rates:e},t){if(t==null)return;let n=U(e,t.min),r=U(e,t.max);if(!(n==null&&r==null))return un(n)+`~`+un(r)}deserializeFilter(e,t){if(t==null||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:dn(n[1]),max:dn(n[2])}:null}renderCell(e,{item:t}){return T`<span>${e.getString(e,t)}</span>`}renderEditCell(e,{item:t},n){return T`<cosmoz-input
			type="number"
			@change=${r=>n({amount:r.target.value,currency:F(t,e.valuePath)?.currency})}
			.value=${pn(e,t)}
		>
			<div slot="suffix">${fn(e,t)}</div>
		</cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,rates:a,currency:o,autoupdate:s,autodetect:c,disabledFiltering:l},{filter:u},d,f){return T`<cosmoz-omnitable-amount-range-input
			.title=${e}
			?disabled=${l}
			.filter=${u}
			.values=${f}
			.rates=${a}
			.min=${t}
			.max=${n}
			.limits=${r}
			.locale=${i}
			.currency=${o}
			.autoupdate=${s}
			.autodetect=${c}
			@filter-changed=${({detail:{value:e}})=>d(t=>({...t,filter:e}))}
			@header-focused-changed=${({detail:{value:e}})=>d(t=>({...t,headerFocused:e}))}
		></cosmoz-omnitable-amount-range-input>`}computeSource(e,t){return q(e,t)}},customElements.define(`cosmoz-omnitable-column-amount`,Cn)})),Tn,En,Dn,On,kn,An,jn,Mn,Nn,Pn,Fn,In,Ln=e((()=>{Ce(),xe(),ie(),N(),J(),Tn=(e,t)=>{if(!Array.isArray(e))return;let n=[];return e.reduce((e,t)=>Array.isArray(t)?(t.forEach(t=>{e.push(t)}),e):(e.push(t),e),[]).filter((e,r,i)=>{if(i.indexOf(e)!==r)return!1;if(t){let r=F(e,t);if(n.indexOf(r)!==-1)return!1;n.push(r)}return!0})},En=(e,t,n)=>{if(e==null)return[];if(Array.isArray(e)){let r=Tn(e,t);if(!r?.length)return r;let i=n??`label`,a=e=>String(typeof e==`object`&&e?F(e,i)??``:e??``);return r.sort((e,t)=>a(e).localeCompare(a(t)))}if(typeof e==`object`){let r=t??`id`,i=n??`label`;return Object.entries(e).map(([e,t])=>({[r]:e,[i]:t})).sort((e,t)=>String(e[i]??``).localeCompare(String(t[i]??``)))}return[]},Dn=(e,t,n)=>k(t&&F(e,t)).map(D(n)),On=({valuePath:e,textProperty:t},n)=>Dn(n,e,t).filter(e=>e!=null).join(`, `),kn=On,An=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>a=>{let o=D(e),s=k(F(a,t));return i.some(t=>s.length===0&&D(r||e)(t)===n||s.some(e=>o(e)===o(t)))},jn=e=>t=>e(e=>({...e,filter:t})),Mn=e=>t=>e(e=>({...e,headerFocused:t})),Nn=e=>t=>e(e=>({...e,query:t})),Pn=({emptyValue:e,emptyLabel:t,emptyProperty:n,textProperty:r,valueProperty:i},a)=>{let o=En(a,i,r);return!t||e===void 0||!r||!(n||i)||!o?o:[{[r]:t,[n||i]:e},...o]},Fn=(e,t)=>Pn(e,xn(t,e.valuePath)),In=e=>class extends e{static get properties(){return{textProperty:{type:String},valueProperty:{type:String},emptyLabel:{type:String},emptyValue:{type:Object},emptyProperty:{type:String}}}getConfig(e){return{emptyProperty:e.emptyProperty}}getString(e,t){return On(e,t)}toXlsxValue(e,t){return kn(e,t)}getComparableValue({valuePath:e,valueProperty:t},n){let r=F(n,e);return t==null?r:k(r).reduce((e,n)=>(e.push(F(n,t)),e),[]).sort().join(` `)}getFilterFn(e,t){if(!(!t||!Array.isArray(t)||t.length===0))return An(e,t)}serializeFilter(e,t){return t.length===0?null:JSON.stringify(t)}deserializeFilter(e,t){return JSON.parse(decodeURIComponent(t))}computeSource(e,t){return e.externalValues||typeof e.values==`function`?async(...t)=>Pn(e,await Promise.resolve(_e(e.values,...t))):Fn(e,t)}}})),Rn,zn,Bn,Vn=e((()=>{De(),Qe(),I(),E(),c(),Ce(),ie(),Ln(),B(),w(),N(),K(),Rn=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?oe(t):D(n),a=k(e&&F(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},zn=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>{let a=D(e),o=D(r||e),s=new Set(i.filter(e=>e.excluded).map(e=>a(e.item))),c=new Set(i.filter(e=>!e.excluded).map(e=>a(e.item))),l=i.some(e=>e.excluded&&o(e.item)===n),u=i.some(e=>!e.excluded&&o(e.item)===n);return e=>{let n=k(F(e,t)).map(a);return n.length===0?!l&&(u||c.size===0):!n.some(e=>s.has(e))&&(c.size===0||n.some(e=>c.has(e)))}},Bn=class extends In(z(P)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return T`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},n){return T`<cosmoz-input
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${R(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:n},r,i){return T`<cosmoz-autocomplete-excluding
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
			.itemRenderer=${e[G]?.itemRenderer}
			.value=${t}
			.text=${n}
			.limit=${e.limit}
			@opened-changed=${e=>Mn(r)(e.detail.value)}
			@value-changed=${ue(jn(r))}
			@text-changed=${ue(Nn(r))}
			>${d(e.loading,()=>T`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-excluding
		>`}getComparableValue(e,t){return Rn(e,t)}getFilterFn(e,t){if(!(!t||!Array.isArray(t)||t.length===0))return zn(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete-excluding`,Bn)})),Hn,Un,Wn=e((()=>{De(),Qe(),I(),E(),c(),Ce(),ie(),Ln(),B(),N(),K(),Hn=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?oe(t):D(n),a=k(e&&F(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},Un=class extends In(z(P)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return T`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},n){return T`<cosmoz-input
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${R(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:n},r,i){return T`<cosmoz-autocomplete-ui
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
			.itemRenderer=${e[G]?.itemRenderer}
			.value=${t}
			.text=${n}
			.limit=${e.limit}
			.onChange=${jn(r)}
			@opened-changed=${e=>Mn(r)(e.detail.value)}
			.onText=${Nn(r)}
			>${d(e.loading,()=>T`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}getComparableValue(e,t){return Hn(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete`,Un)})),Gn,Kn,qn,Jn,Yn,Xn,Zn,Qn,$n,er,tr,nr,rr,ir,ar=e((()=>{I(),B(),De(),_t(),N(),E(),c(),Gn=(e,t)=>t.find(({value:t})=>e===t),Kn=(e,t,n)=>{let r=Gn(t,n);return r?r.text:e},qn=(e,t,n,r)=>Kn(e,F(t,n),r),Jn=({valuePath:e},t,n)=>Gn(F(t,e),n),Yn=e=>t=>{e(e=>({...e,filter:t?.[0]?.value??null}))},Xn=e=>t=>{e(e=>({...e,headerFocused:t}))},Zn=e=>t=>{e(e=>({...e,query:t}))},Qn=e=>t=>e(t?.[0]?.value),$n=({valuePath:e,trueLabel:t,falseLabel:n},r)=>F(r,e)?t:n,er=({valuePath:e},t)=>n=>F(n,e)===t,tr=bt((e,t)=>[{text:e,value:!0},{text:t,value:!1}]),nr=({valuePath:e,trueLabel:t,falseLabel:n},r)=>e?F(r,e)?t:n:``,rr=(e,t)=>{try{return JSON.parse(t)}catch{return null}},ir=class extends z(P){static get properties(){return{trueLabel:{type:String,value:`True`},falseLabel:{type:String,value:`False`},flex:{type:String,value:`0`},cellClass:{type:String,value:`boolean-cell`}}}getString(e,t){return $n(e,t)}renderCell(e,{item:t}){return $n(e,t)}renderEditCell(e,{item:t},n){let{trueLabel:r,falseLabel:i}=e;return T`<cosmoz-autocomplete
			variant="inline"
			.title=${qn(e.title,t,e.valuePath,tr(r,i))}
			.source=${tr(r,i)}
			.textProperty=${`text`}
			.value=${Jn(e,t,tr(r,i))}
			.onChange=${Qn(n)}
			.limit=${1}
			>${d(e.loading,()=>T`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete
		>`}renderHeader(e,{filter:t,query:n},r,i){return T`<cosmoz-autocomplete-ui
			?disabled=${e.disabledFiltering}
			variant="inline"
			.label=${e.title}
			.title=${qn(e.title,t,e.valuePath,i)}
			.source=${i}
			.textProperty=${`text`}
			.value=${Gn(t,i)}
			.text=${n}
			.onChange=${Yn(r)}
			@opened-changed=${e=>Xn(r)(e.detail.value)}
			.onText=${Zn(r)}
			.limit=${1}
			>${d(e.loading,()=>T`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}computeSource({trueLabel:e,falseLabel:t}){return tr(e,t)}getFilterFn(e,t){if(t!=null)return er(e,t)}toXlsxValue(e,t){return nr(e,t)}deserializeFilter(e,t){return rr(e,t)}},customElements.define(`cosmoz-omnitable-column-boolean`,ir)})),or,sr=e((()=>{we(),Kt(),or=e=>class extends Gt(e){static get properties(){return{max:{type:Date,value:null},min:{type:Date,value:null},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},formatter:{type:Object,computed:`_computeFormatter(locale)`}}}toDate(e,t,n){if(e==null||e===``)return;let r=e;if(r instanceof Date||(typeof e==`string`&&(r=this.getAbsoluteISOString(r)),r=new Date(r)),Number.isNaN(r.getTime()))return null;if(n==null||t==null)return r;let i=this.toDate(t);if(i==null)return r;let a=this.getComparableValue(r);return n(a,this.getComparableValue(i))===a?r:i}toValue(){return this.toDate.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n!=null)return this.toNumber(n.getTime())}getString(e,t=this.valuePath,n=this.formatter){let r=this.toValue(this.get(t,e));return r===void 0?``:r===null?`Invalid Date`:this.renderValue(r,n)}getAbsoluteISOString(e){return e.length===19?e+this._getTimezoneString(e):e}_getTimezoneString(e){let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`}renderValue(e,t=this.formatter){if(t==null)return;let n=this.toValue(e);if(n!=null)return t.format(n)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(0,10)}_dateValueChanged(e){let t=e.currentTarget.value,n=e.model.item,r=this.get(this.valuePath,n),i=this._fromInputString(t);this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toLocalISOString(e){return pe(e)}}})),cr,lr=e((()=>{o(),I(),j(),E(),c(),sr(),Ut(),Vt(),Jt(),cr=class extends or(qt(P)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return T`
			${d(this.disabled,()=>T`
					<cosmoz-omnitable-dropdown-input
						disabled
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>T`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Ht({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:T`
							<h3>${this.title}</h3>
							<cosmoz-input
								type="date"
								label=${s(`From date`)}
								min=${this._toInputString(this._limit.fromMin)}
								max=${this._toInputString(this._limit.fromMax)}
								.value=${this._filterInput?.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-input>
							<cosmoz-input
								type="date"
								label=${s(`Until date`)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
								.value=${this._filterInput?.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-input>
						`})}
				`)}
		`}_fromInputString(e,t){let n=this.toDate(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n}_filterInputChanged(e,t){let n=e.path.split(`.`)[1]&&e.value;if(n&&n.match(/^0+/u)){this._limitInputDebouncer.cancel();return}super._filterInputChanged(e,t)}},customElements.define(`cosmoz-omnitable-date-range-input`,cr)})),ur,dr,fr,Y,X,pr,mr,hr,gr,_r,vr,yr,br,xr,Sr,Cr=e((()=>{we(),N(),rn(),ur=e=>{let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`},dr=e=>e.length===19?e+ur(e):e,fr=e=>{if(e==null||e===``)return;let t=e;return!(t instanceof Date)&&(typeof e==`string`&&(t=dr(t)),t=ve(t),!t)||Number.isNaN(t.getTime())?null:t},Y=({valuePath:e},t)=>{if(t==null)return;let n=t;e!=null&&(n=F(t,e));let r=fr(n);if(r!=null)return V(r.getTime())},X=(e,t,n)=>{let r=fr(e);if(r==null)return null;if(n==null||t==null)return r;let i=X(t);if(i==null)return r;let a=Y({},r),o=Y({},i);return a==null||o==null||n(a,o)===a?r:i},pr=(e,t)=>{if(t==null)return;let n=X(e);if(n!=null)return t.format(n)},mr={},hr=e=>{let t=e||``;return mr[t]||(mr[t]=new Intl.DateTimeFormat(e||void 0)),mr[t]},gr=({valuePath:e,locale:t},n)=>{let r=F(n,e||``);return r===void 0?``:(r=X(r),r===null?`Invalid Date`:pr(r,hr(t)))},_r=e=>{let t=X(e);if(t==null)return null;let n=pe(t);return n==null?null:n.slice(0,10)},vr=({valuePath:e},t)=>_r(F(t,e||``)),yr=(e,t)=>{let n=X(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n},br=e=>_r(e)??``,xr=({valuePath:e},t)=>{if(!e)return``;let n=X(F(t,e));if(!n)return``;let r=X(pe(n));return r?(r.setHours(0,0,0,0),r):``},Sr=(e,t)=>n=>{let r=Y(e,n);if(r==null)return!1;let i=Y({...e,valuePath:`min`},t),a=Y({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})),wr,Tr=e((()=>{o(),I(),E(),B(),lr(),J(),Cr(),L(),wr=class extends z(P){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`date-header-cell`},width:{type:String,value:`100px`},minWidth:{type:String,value:`82px`},flex:{type:String,value:`0`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=Y({...e,valuePath:`min`},t),r=Y({...e,valuePath:`max`},t);if(!(n==null&&r==null))return Sr(e,t)}getString(e,t){return gr(e,t)}toXlsxValue(e,t){return xr(e,t)}getComparableValue(e,t){return Y(e,t)}serializeFilter(e,t){if(t==null)return;let n=X(t.min),r=X(t.max);if(!(n==null&&r==null))return br(n)+`~`+br(r)}deserializeFilter(e,t){if(t==null||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:X(n[1]),max:X(n[2])}:null}renderCell(e,{item:t}){return T`<div class="omnitable-cell-date">
			${gr(e,t)}
		</div>`}renderEditCell(e,{item:t},n){return T`<cosmoz-input
			type="date"
			@change=${e=>n(yr(e.target.value))}
			.value=${vr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,disabledFiltering:a},{filter:o},s,c){return T`<cosmoz-omnitable-date-range-input
			.title=${e}
			?disabled=${a}
			.filter=${o}
			.values=${c}
			.min=${t}
			.max=${n}
			.limits=${r}
			.locale=${i}
			@filter-changed=${({detail:{value:e}})=>s(t=>({...t,filter:e}))}
			@header-focused-changed=${({detail:{value:e}})=>s(t=>({...t,headerFocused:e}))}
		></cosmoz-omnitable-date-range-input>`}computeSource(e,t){return q(e,t)}},customElements.define(`cosmoz-omnitable-column-date`,wr)})),Er,Dr=e((()=>{I(),j(),E(),c(),sr(),Ut(),Vt(),Jt(),Er=class extends or(qt(P)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return T`
			${d(this.disabled,()=>T`
					<cosmoz-omnitable-dropdown-input
						disabled
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>T`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Ht({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:T`
							<h3>${this.title}</h3>
							<cosmoz-datetime-input
								date-label=${s(`From date`)}
								time-label=${s(`From time`)}
								min=${this._toInputString(this._limit.fromMin)}
								max=${this._toInputString(this._limit.fromMax)}
								step=${this.filterStep}
								.value=${this._filterInput?.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-datetime-input>
							<cosmoz-datetime-input
								date-label=${s(`To date`)}
								time-label=${s(`To time`)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
								step=${this.filterStep}
								.value=${this._filterInput?.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-datetime-input>
						`})}
				`)}
		`}_toInputString(e){let t=this.toValue(e);if(t!=null)return this._toLocalISOString(t).slice(0,19)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})}},customElements.define(`cosmoz-omnitable-datetime-range-input`,Er)})),Or,kr,Ar,jr,Mr,Nr,Pr=e((()=>{N(),Cr(),Or={},kr=e=>{let t=e||``;return Or[t]||(Or[t]=new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})),Or[t]},Ar=({valuePath:e,locale:t},n)=>{let r=X(F(n,e||``));return r===void 0?``:r===null?`Invalid Date`:pr(r,kr(t))},jr=({valuePath:e},t)=>e?F(t,e):``,Mr=e=>{let t=X(e);return t==null?``:t.toISOString().slice(0,19).replace(/:/gu,`.`)},Nr=e=>{if(!(e==null||e===``)&&typeof e==`string`)return X(e.replace(/\./gu,`:`)+`Z`)}})),Fr,Ir=e((()=>{it(),L(),I(),E(),B(),Dr(),J(),Cr(),Pr(),Fr=class extends z(P){static get is(){return`cosmoz-omnitable-column-datetime`}static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`datetime-header-cell`},width:{type:String,value:`210px`},minWidth:{type:String,value:`128px`},flex:{type:String,value:`0`},filterStep:{type:Number,value:1}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=Y({...e,valuePath:`min`},t),r=Y({...e,valuePath:`max`},t);if(!(n==null&&r==null))return Sr(e,t)}getString(e,t){return Ar(e,t)}toXlsxValue(e,t){return jr(e,t)}getComparableValue(e,t){return Y(e,t)}serializeFilter(e,t){if(t==null)return;let n=X(t.min),r=X(t.max);if(!(n==null&&r==null))return Mr(n)+`~`+Mr(r)}deserializeFilter(e,t){if(t==null||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Nr(n[1]),max:Nr(n[2])}:null}renderCell(e,{item:t}){return Ar(e,t)}renderEditCell(e,{item:t},n){return T`<cosmoz-input
			type="text"
			@change=${e=>n(yr(e.target.value))}
			.value=${Ar(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,filterStep:a,disabledFiltering:o},{filter:s},c,l){return T`<cosmoz-omnitable-datetime-range-input
			.title=${e}
			?disabled=${o}
			.filter=${s}
			.values=${l}
			.min=${t}
			.max=${n}
			.limits=${r}
			.locale=${i}
			.filterStep=${a}
			@filter-changed=${({detail:{value:e}})=>c(t=>({...t,filter:e}))}
			@header-focused-changed=${({detail:{value:e}})=>c(t=>({...t,headerFocused:e}))}
		></cosmoz-omnitable-datetime-range-input>`}computeSource(e,t){return q(e,t)}},customElements.define(Fr.is,Fr)})),Lr,Rr=e((()=>{De(),Qe(),I(),E(),c(),Ln(),B(),Lr=class extends In(z(P)){renderCell({valuePath:e,textProperty:t},{item:n}){return T`
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
				${Dn(n,e,t).map(e=>T`<li>${e}</li>`)}
			</ul>
		`}renderEditCell(){return`not implemented`}renderHeader(e,{filter:t,query:n},r,i){return T`<cosmoz-autocomplete-ui
			variant="inline"
			class="external-values-${e.externalValues}"
			?disabled=${e.disabledFiltering}
			.label=${e.title}
			.source=${i}
			.textProperty=${e.textProperty}
			.value=${t}
			.text=${n}
			.onChange=${jn(r)}
			@opened-changed=${e=>Mn(r)(e.detail.value)}
			.onText=${Nn(r)}
			>${d(e.loading,()=>T`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		> `}},customElements.define(`cosmoz-omnitable-column-list-horizontal`,Lr)})),zr,Br=e((()=>{lt(),_(),st(),I(),window.Cosmoz=window.Cosmoz||{},zr=class extends at(t(Ee,P)){static get template(){return Fe`
			<style>
				:host {
					display: block;
				}

				:host a {
					color: var(--cz-color-bg-brand-solid);
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
		`}static get is(){return`cosmoz-omnitable-column-list-data`}static get properties(){return{items:{type:Array},_expanded:{type:Boolean,value:!1},_othersCount:{type:Number,computed:`_computeOthersCount(items)`}}}static get observers(){return[`_itemsLengthChanged(items.length)`]}_itemsLengthChanged(){requestAnimationFrame(()=>this.dispatchEvent(new CustomEvent(`expand`,{bubbles:!0})))}_firstItem(e){if(e!=null&&e.length>0)return e[0]}_hideExpand(e,t){return e!==void 0&&e.length!==null?e.length<=2||t:!0}_hideCollapse(e,t){return e!==void 0&&e.length!==null?e.length<=2||!t:!0}_otherItems(e,t){if(e!=null&&(e.length<=2||t))return e.slice(1)}_computeOthersCount(e){if(e!=null)return e.length-1}_toggleExpand(e){this._expanded=!this._expanded,e.stopPropagation(),e.preventDefault()}},customElements.define(zr.is,zr)})),Vr,Hr=e((()=>{Br(),I(),E(),c(),De(),Ln(),B(),K(),Vr=class extends In(z(P)){static get properties(){return{keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,textual:e.textual}}renderCell({valuePath:e,textProperty:t},{item:n}){return T`<cosmoz-omnitable-column-list-data
			.items=${Dn(n,e,t)}
		></cosmoz-omnitable-column-list-data>`}renderEditCell(e,{item:t},n){return T`<cosmoz-input
			type="text"
			.value=${On(e,t)}
			@change=${e=>n(e.target.value.split(/,\s*/gu))}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:n},r,i){return T`<cosmoz-autocomplete-ui
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
			.itemRenderer=${e[G]?.itemRenderer}
			.value=${t}
			.text=${n}
			.onChange=${jn(r)}
			@opened-changed=${e=>Mn(r)(e.detail.value)}
			.onText=${Nn(r)}
			>${d(e.loading,()=>T`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}},customElements.define(`cosmoz-omnitable-column-list`,Vr)})),Ur,Wr=e((()=>{o(),I(),j(),E(),c(),Ut(),Vt(),Kt(),Jt(),Ur=class extends Gt(qt(P)){static get properties(){return{maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},formatter:{type:Object,computed:`_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)`},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},headerFocused:{type:Boolean,value:!1}}}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return T`
			${d(this.disabled,()=>T`
					<cosmoz-omnitable-dropdown-input
						disabled
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>T`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Ht({title:this.title,tooltip:this._tooltip,filterText:this._filterText,horizontalAlign:`right`,externalValues:this.externalValues,onOpenedChanged:e,content:T`
							<h3>${this.title}</h3>
							<cosmoz-input
								class=${this._fromClasses}
								type="number"
								label=${s(`From`)}
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
								label=${s(`To`)}
								.value=${this._filterInput?.max}
								@value-changed=${e=>{this.set(`_filterInput.max`,e.detail.value)}}
								@blur=${e=>this._onBlur(e)}
								@keydown=${e=>this._onKeyDown(e)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
							></cosmoz-input>
						`})}
				`)}
		`}_computeFormatter(e,t,n){let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}getComparableValue(e,t){if(e==null)return;let n=e;if(t!=null&&(n=this.get(t,e)),n=this.toValue(n),n==null)return;let r=this.maximumFractionDigits;return r===null?n:this.toValue(n.toFixed(r))}renderValue(e,t=this.formatter){let n=this.toNumber(e);if(n!=null)return t.format(n)}},customElements.define(`cosmoz-omnitable-number-range-input`,Ur)})),Gr,Kr=e((()=>{o(),L(),I(),E(),B(),N(),Wr(),J(),rn(),Gr=class extends z(P){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},cellClass:{type:String,value:`number-cell align-right`},width:{type:String,value:`30px`},minWidth:{type:String,value:`30px`},headerCellClass:{type:String,value:`number-header-cell`},maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=H({...e,valuePath:`min`},t),r=H({...e,valuePath:`max`},t);if(!(n==null&&r==null))return nn(e,t)}getString(e,t){return tn(e,t)}toXlsxValue({valuePath:e},t){return F(t,e)}getComparableValue(e,t){return H(e,t)}serializeFilter(e,t){if(t==null)return;let n=V(t.min),r=V(t.max);if(!(n==null&&r==null))return $t(n)+`~`+$t(r)}deserializeFilter(e,t){if(t==null||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:V(n[1]),max:V(n[2])}:null}renderCell(e,{item:t}){return T`<div class="omnitable-cell-number">
			${tn(e,t)}
		</div>`}renderEditCell(e,{item:t},n){return T`<cosmoz-input
			type="number"
			@change=${e=>n(e.target.value)}
			.value=${Qt(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,maximumFractionDigits:a,minimumFractionDigits:o,autoupdate:s,disabledFiltering:c},{filter:l},u,d){return T`<cosmoz-omnitable-number-range-input
			.title=${e}
			?disabled=${c}
			.filter=${l}
			.values=${d}
			.min=${t}
			.max=${n}
			.limits=${r}
			.locale=${i}
			.maximumFractionDigits=${a}
			.minimumFractionDigsits=${o}
			.autoupdate=${s}
			@filter-changed=${({detail:{value:e}})=>u(t=>({...t,filter:e}))}
			@header-focused-changed=${({detail:{value:e}})=>u(t=>({...t,headerFocused:e}))}
		></cosmoz-omnitable-number-range-input>`}computeSource(e,t){return q(e,t)}},customElements.define(`cosmoz-omnitable-column-number`,Gr)})),qr,Jr=e((()=>{o(),I(),j(),E(),c(),sr(),Ut(),Vt(),Jt(),qr=class extends or(qt(P)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return T`
			${d(this.disabled,()=>T`
					<cosmoz-omnitable-dropdown-input
						disabled
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>T`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Ht({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:T`
							<h3>${this.title}</h3>
							<cosmoz-input
								type="time"
								label=${s(`From time`)}
								step=${this.filterStep}
								.value=${this._filterInput.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-input>
							<cosmoz-input
								type="time"
								label=${s(`Until time`)}
								step=${this.filterStep}
								.value=${this._filterInput.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-input>
						`})}
				`)}
		`}get _fixedDate(){return`1970-01-01`}toDate(e,t,n){let r=typeof e==`string`&&e.length>3&&e.length<=9?this.getAbsoluteISOString(this._fixedDate+`T`+e):e;return super.toDate(r,t,n)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(11,19)}getComparableValue(e,t){if(e==null)return;let n=this._toInputString(t==null?e:this.get(t,e));if(n!=null&&(n=this.toValue(this.getAbsoluteISOString(this._fixedDate+`T`+n)),n!=null))return this.toNumber(n.getTime())}_timeValueChanged(e){let t=e.target.value,n=e.model.item,r=this.toDate(n.date),i=this.toDate(r==null?t:r.toISOString().slice(0,10)+`T`+t);i??(this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,(e=>e).bind(this)))}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})}},customElements.define(`cosmoz-omnitable-time-range-input`,qr)})),Yr,Z,Xr,Zr,Qr,$r,ei,Q,ti,ni,ri,ii=e((()=>{we(),N(),Cr(),rn(),Yr=`1970-01-01`,Z=(e,t,n)=>X(typeof e==`string`&&e.length>3&&e.length<=9?dr(Yr+`T`+e):e,t,n),Xr={},Zr=e=>{let t=e||``;return Xr[t]||(Xr[t]=new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})),Xr[t]},Qr=({valuePath:e,locale:t},n)=>{let r=Z(F(n,e||``));return r===void 0?``:r===null?`Invalid Date`:pr(r,Zr(t))},$r=(e,t)=>e.valuePath?Qr(e,t):``,ei=e=>{let t=Z(e);if(t==null)return null;let n=pe(t);return n&&n.slice(11,19)},Q=({valuePath:e},t)=>{if(t==null)return;let n=ei(e==null?t:F(t,e));if(n==null)return;let r=Z(dr(Yr+`T`+n));return r==null?r:V(r.getTime())},ti=(e,t)=>n=>{let r=Q(e,n);if(r==null)return!1;let i=Q({...e,valuePath:`min`},t),a=Q({...e,valuePath:`max`},t);return i==null||a==null?!1:!(r<i||r>a)},ni=e=>{let t=Z(e);return t==null?``:t.toISOString().slice(11,19).replace(/:/gu,`.`)},ri=e=>{if(!(e==null||e===``))return Z(typeof e==`string`?e.replace(/\./gu,`:`)+`Z`:e)}})),ai,oi=e((()=>{o(),L(),I(),E(),B(),Jr(),J(),ii(),ai=class extends z(P){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`time-header-cell`},minWidth:{type:String,value:`63px`},width:{type:String,value:`210px`},flex:{type:String,value:`0`},filterStep:{type:String,value:`1`}}}getFilterFn(e,t){let n=Q({...e,valuePath:`min`},t),r=Q({...e,valuePath:`max`},t);if(!(n==null&&r==null))return ti(e,t)}getString(e,t){return Qr(e,t)}toXlsxValue(e,t){return $r(e,t)}getComparableValue(e,t){return Q(e,t)}serializeFilter(e,t){if(t==null)return;let n=Z(t.min),r=Z(t.max);if(!(n==null&&r==null))return ni(n)+`~`+ni(r)}deserializeFilter(e,t){if(t==null||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:ri(n[1]),max:ri(n[2])}:null}renderCell(e,{item:t}){return Qr(e,t)}renderEditCell(e,{item:t},n){return T`<cosmoz-input
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${Qr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,locale:r,filterStep:i,disabledFiltering:a},{filter:o},s,c){return T`<cosmoz-omnitable-time-range-input
			.title=${e}
			?disabled=${a}
			.filter=${o}
			.values=${c}
			.min=${t}
			.max=${n}
			.locale=${r}
			.filterStep=${i}
			@filter-changed=${({detail:{value:e}})=>s(t=>({...t,filter:e}))}
			@header-focused-changed=${({detail:{value:e}})=>s(t=>({...t,headerFocused:e}))}
		></cosmoz-omnitable-time-range-input>`}computeSource(e,t){return q(e,t)}},customElements.define(`cosmoz-omnitable-column-time`,ai)})),si=e((()=>{wn(),Vn(),Wn(),ar(),Tr(),Ir(),Rr(),Hr(),Kr(),oi()})),ci,li=e((()=>{w(),E(),ci=({column:e,item:t,selected:n,folded:r,group:i})=>e?(e.renderGroup??e.renderCell)(e,{item:t,selected:n,folded:r,group:i}):ae,customElements.define(`cosmoz-omnitable-group-row`,O(ci,{useShadowDOM:!1}))})),ui,di=e((()=>{w(),E(),ui=e=>{let{column:t}=e;return v(()=>{let n=0,r=0,i=i=>{e.dispatchEvent(new CustomEvent(`column-resize`,{bubbles:!0,composed:!0,detail:{newWidth:Math.ceil(r+i.pageX-n),column:t}}))},a=()=>{document.removeEventListener(`pointermove`,i),document.removeEventListener(`pointerup`,a)},o=t=>{n=t.pageX,r=e.previousElementSibling.getBoundingClientRect().width,document.addEventListener(`pointermove`,i),document.addEventListener(`pointerup`,a)};return e.addEventListener(`pointerdown`,o),()=>e.removeEventListener(`pointerdown`,o)},[t]),ae},customElements.define(`cosmoz-omnitable-resize-nub`,O(ui))})),fi,pi,mi,hi,gi=e((()=>{w(),Se(),f(),fi=({column:e,on:t,descending:n,setOn:r,setDescending:i})=>{let{name:a,title:o}=e??{};return T`<button
		class="sg"
		title=${u(o)}
		data-on=${u(a===t&&(n?`desc`:`asc`)||void 0)}
		@click=${e=>{let t=e.currentTarget?.dataset.on;t||(r(a),i(!1)),t===`asc`?i(!0):t===`desc`&&(r(),i(!1))}}
	>
		<span>${o}</span> ${a===t?b({width:`12`,height:`12`}):ne({width:`12`,height:`12`})}
	</button>`},pi=({columns:e,...t})=>e?.map(e=>fi({column:e,...t})),mi=()=>T`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,groupOn:t,setGroupOn:n,groupOnDescending:r,setGroupOnDescending:i}={})=>pi({columns:e?.filter?.(e=>e.groupOn),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`,hi=()=>T`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,sortOn:t,setSortOn:n,descending:r,setDescending:i}={})=>pi({columns:e?.filter?.(e=>e.sortOn&&!e.noSort),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`})),_i,vi,yi,bi,xi,Si=e((()=>{w(),rt(),xe(),ct(),_i=e=>(t,n,r=ce)=>{let i=tt(),a=new URLSearchParams(i.hash.replace(`#`,``));return e(t,n,r,a),`#!`+Object.assign(i,{hash:a}).href.replace(location.origin,``)},vi=e=>e==null||e===``,yi=_i((e,t,n,r)=>vi(n(t))?r.delete(e):r.set(e,n(t))),bi=_i((e,t,n,r)=>Object.entries(t).map(n).forEach(([t,n])=>vi(n)?r.delete(e+t):r.set(e+t,n))),xi=(e,t,{suffix:n=``,read:r,write:i,multi:a}={})=>{let[o,s]=a?[bi,gt]:[yi,nt],c=C(()=>t!=null&&s(t+n,r)!=null,[]),[l,u]=x(()=>t==null?e:s(t+n,r)??e),d=M(e=>u(r=>{let a=_e(e,r);return t!=null&&ft(o(t+n,a,i),null,{notify:!1}),a}),[t,n,o,i]);return v(()=>{t!=null&&(c||e!=null&&d(e))},[e,t,c,d]),[l,d]}})),Ci,wi,Ti,Ei,Di,Oi=e((()=>{w(),Si(),Ci=e=>[!0,`true`,1,`yes`,`on`].includes(e),wi=e=>e===``||(e==null?void 0:Ci(e)),Ti=(e,t,n)=>M(r=>{e(r),n(e=>({...e,[t]:r}))},[e,t,n]),Ei=(e,t,n,r,i)=>{let[a,o]=xi(n.sortOn,t,{suffix:`-sortOn`}),[s,c]=xi(wi(n.descending),t,{suffix:`-descending`,read:wi}),[l,u]=xi(n.groupOn,t,{suffix:`-groupOn`}),[d,f]=xi(wi(n.groupOnDescending),t,{suffix:`-groupOnDescending`,read:wi}),p=C(()=>e.find(e=>e.name===a),[e,a]),m=C(()=>e.find(e=>e.name===l),[e,l]),h={groupOn:l,setGroupOn:Ti(u,`groupOn`,r),groupOnDescending:d,setGroupOnDescending:Ti(f,`groupOnDescending`,r),sortOn:a,setSortOn:Ti(o,`sortOn`,r),descending:s,setDescending:Ti(c,`descending`,r),columns:e},g=C(()=>h,Object.values(h)),_=M(e=>{o(e.sortOn),u(e.groupOn),c(e.descending),f(e.groupOnDescending)},[]);return v(()=>void(i.current=_),[]),{...g,sortAndGroup:g,groupOnColumn:m,sortOnColumn:p}},Di=ke(),customElements.define(`sort-and-group-provider`,Di.Provider),customElements.define(`sort-and-group-consumer`,O(({render:e})=>e(Me(Di)),{useShadowDOM:!1}))})),ki,Ai,ji=e((()=>{w(),Ne(),di(),gi(),c(),Oi(),ki=({data:e,columns:t,groupOnColumn:n,filters:r,setFilterState:i,sortAndGroup:{sortOn:a,setSortOn:o,descending:s,setDescending:c}={}})=>Ae(t,e=>e.name,t=>[T`<div
				class="cell ${t.headerCellClass} header-cell"
				part="cell header-cell cell-${t.name} header-cell-${t.name}"
				?hidden="${t===n}"
				title="${t.headerTitleFn(t)}"
				name="${t.name}"
			>
				${t.renderHeader(t,r[t.name]??{},e=>i(t.name,e),t.source(t,e))}
				${d(!t.noSort,()=>fi({on:a,setOn:o,descending:s,setDescending:c,column:t}))}
			</div>`,T`<cosmoz-omnitable-resize-nub
				.column="${t}"
				name="${t.name}"
			></cosmoz-omnitable-resize-nub>`]),Ai=({columns:e,settingsConfig:t,hideSelectAll:n,...r})=>{let i=Me(Di);return T`
		${d(e,e=>ki({columns:e,sortAndGroup:i,...r}))}
		${d(!n,()=>T` <cosmoz-omnitable-settings
					.config=${t}
					part="settings"
				></cosmoz-omnitable-settings>`)}
	`},customElements.define(`cosmoz-omnitable-header-row`,O(Ai,{useShadowDOM:!1}))})),Mi,Ni,Pi=e((()=>{w(),_(),Mi=A`
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
`,Ni=({column:e})=>T`
	<div class="label" title="${e.title}" part="item-expand-label">
		${e.title}
	</div>
	<div class="value" part="item-expand-value">
		<slot></slot>
	</div>
`,customElements.define(`cosmoz-omnitable-item-expand-line`,O(Ni,{styleSheets:[se(Mi)]}))})),Fi,Ii=e((()=>{w(),E(),dt(),Pi(),Fi=({columns:e,item:t,selected:n,expanded:r,groupOnColumn:i})=>mt(e,e=>T`<cosmoz-omnitable-item-expand-line
				.column=${e}
				?hidden=${e===i}
				exportparts="item-expand-label, item-expand-value"
				>${e.renderCell(e,{item:t,selected:n,expanded:r})}</cosmoz-omnitable-item-expand-line
			>`),customElements.define(`cosmoz-omnitable-item-expand`,O(Fi,{useShadowDOM:!1}))})),Li,Ri,zi=e((()=>{w(),Ne(),Li=(e,t,n)=>e.editable?e.renderEditCell(e,t,n(e,t.item)):e.renderCell(e,t),Ri=({columns:e,groupOnColumn:t,item:n,index:r,selected:i,expanded:a,onItemChange:o})=>Ae(e,e=>e.name,e=>T`<div
				class="cell itemRow-cell ${e.cellClass??``}"
				part="cell itemRow-cell cell-${e.name} itemRow-cell-${e.name}"
				?hidden="${e===t}"
				?editable="${e.editable}"
				title="${e.cellTitleFn(e,n)}"
				name="${e.name}"
			>
				${Li(e,{item:n,index:r,selected:i,expanded:a},o)}
			</div>`),customElements.define(`cosmoz-omnitable-item-row`,O(Ri,{useShadowDOM:!1}))})),Bi,Vi,Hi=e((()=>{_(),Bi=A`
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
		box-shadow: var(--cz-shadow-xs-skeumorphic);
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		transition: background-color 140ms;
		margin: 1px calc(var(--cz-spacing) * 3);
		flex: none;
	}

	.checkbox:checked {
		background: rgb(
			from var(--cz-color-bg-brand-solid) r g b / calc(alpha * 0.55)
		);
		box-shadow: none;
	}

	.checkbox:checked::before {
		content: '';
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
		content: '';
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
`,Vi=A`
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

	.align-left {
		text-align: left;
	}

	.align-right {
		text-align: right;
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

	${Bi}

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
	.sg:not([data-on='desc']) {
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
`})),Ui,Wi,Gi=e((()=>{ot(),Ui=e=>{let t=e.replace(/"/gu,`""`);return t.search(/("|,|\n)/gu)>=0?`"`+t+`"`:e},Wi=(e,t,n)=>{let r=e.map(e=>Ui(e.title)).join(`;`)+`
`,i=t.map(t=>e.map(e=>{let n=e.getString(e,t);return n==null?``:Ui(String(n))}).join(`;`)+`
`);i.unshift(r),$e(new File(i,n,{type:`text/csv;charset=utf-8`}))}})),Ki,qi,Ji=e((()=>{ot(),ut(),Ki=(e,t)=>{let n=e.map(e=>e.title),r=t.map(t=>e.map(e=>e.toXlsxValue(e,t)??``));return r.unshift(n),r},qi=(e,t,n,r)=>{let i=Ki(e,t),a=new pt(n).addSheetFromData(i,r).generate();$e(new File([a],n,{type:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`}))}})),Yi,Xi=e((()=>{Ue(),f(),S(),j(),E(),Gi(),Ji(),Yi=({columns:e,selectedItems:t,csvFilename:n,xlsxFilename:r,xlsxSheetname:i,topPlacement:a})=>T`<cosmoz-bottom-bar
		id="bottomBar"
		?active=${!be(t.length)}
		part="bottomBar"
		exportparts="bar: bottomBar-bar, info: bottomBar-info, buttons: bottomBar-buttons"
	>
		<slot name="info" slot="info">
			${s(`{count} selected item`,{count:t.length})}
		</slot>
		<slot name="actions" id="actions"></slot>
		<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
		<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>

		<cosmoz-dropdown-menu part="extra" slot="extra" .placement=${a}>
			${y({slot:`button`})}
			<cosmoz-button
				@click=${()=>Wi(e,t,n)}
			>
				${s(`Save selected items as CSV`)}
			</cosmoz-button>
			<cosmoz-button
				@click=${()=>qi(e,t,r,i)}
			>
				${s(`Save selected items as XLSX`)}
			</cosmoz-button>
			<slot name="download-menu"></slot>
		</cosmoz-dropdown-menu>
	</cosmoz-bottom-bar>`})),Zi,Qi=e((()=>{E(),c(),Zi=({allSelected:e,onAllCheckboxChange:t,sortAndGroup:n,dataIsValid:r,data:i,columns:a,filters:o,groupOnColumn:s,setFilterState:c,settingsConfig:l,hideSelectAll:u})=>T`<sort-and-group-provider .value=${n}>
		<div class="header" id="header" part="header">
			${d(!u,()=>T`<input
						class="checkbox all"
						type="checkbox"
						.checked=${e}
						@input=${t}
						?disabled=${!r}
						part="all"
					/>`)}
			${d(u,()=>T` <cosmoz-omnitable-settings
						.newLayout="${!0}"
						.config=${l}
					></cosmoz-omnitable-settings>`)}

			<cosmoz-omnitable-header-row
				part="headerRow"
				.data=${i}
				.columns=${a}
				.filters=${o}
				.groupOnColumn=${s}
				.setFilterState=${c}
				.settingsConfig=${l}
				.hideSelectAll=${u}
			></cosmoz-omnitable-header-row>
		</div>
	</sort-and-group-provider>`})),$i,ea,ta=e((()=>{w(),$i=a`
	:host {
		max-width: 100%;
		overflow-x: hidden;
		padding-left: calc(var(--cz-spacing) * 3);
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
`,ea=({settingsConfig:e})=>{let{columns:t,collapsed:n}=e,r=t.filter(e=>!n.some(t=>t.name===e.name));return T`<div class="skeleton">
		${Array.from({length:5},()=>T`<div>
					<div class="checkbox"></div>
					${r.map(e=>T`<div
								class="cell"
								part=${`cell-${e.name}`}
								name=${e.name}
							></div>`)}
				</div>`)}
	</div>`},customElements.define(`cosmoz-omnitable-skeleton`,O(ea,{styleSheets:[$i]}))})),na,ra=e((()=>{ta(),j(),E(),c(),Xe(),na=(e,t)=>{let{settingsConfig:n}=e,{processedItems:r,dataIsValid:i,filterIsTooStrict:a,loading:o,displayEmptyGroups:c,compareItemsFn:l,setSelectedItems:u,renderItem:f,renderGroup:p,error:m}=t;return T`${d(!o&&!i&&!m,()=>T`<div class="tableContent-empty">
					<slot name="empty-set-message">
						${Ze({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
						<div class="tableContent-empty-message">
							<h3>${s(`Working set empty`)}</h3>
							<p>${s(`No data to display`)}</p>
						</div>
					</slot>
				</div>`)}
		${d(a,()=>T`<div class="tableContent-empty">
					${Ze({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
					<div>
						<h3>${s(`Filter too strict`)}</h3>
						<p>${s(`No matches for selection`)}</p>
					</div>
				</div>`)}
		${d(o&&!r.length,()=>T`<div class="tableContent-empty overlay">
					<cosmoz-omnitable-skeleton
						.settingsConfig=${n}
					></cosmoz-omnitable-skeleton>
				</div>`)}
		${d(o&&r.length,()=>T`<div class="tableContent-empty overlay spinner">
					<cz-spinner></cz-spinner>
				</div>`)}
		${d(m,()=>T`<div class="tableContent-empty overlay">
					${Ve({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
					<div class="tableContent-empty-message">
						<h3>${s(`Error loading data`)}</h3>
						<p>${m.message}</p>
					</div>
				</div>`)}
		<div class="tableContent-scroller" id="scroller" part="scroller">
			<cosmoz-grouped-list
				id="groupedList"
				.data=${r}
				@selected-items-changed=${e=>u(e.detail.value)}
				.displayEmptyGroups=${c}
				.compareItemsFn=${l}
				.renderItem=${f}
				.renderGroup=${p}
			></cosmoz-grouped-list>
			<slot name="extraContent"></slot>
		</div>`}})),ia,aa,oa=e((()=>{_(),Hi(),ia=A`
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
		font-size: 12px;
		color: var(--cz-color-text-primary);
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
		font-weight: var(--cz-font-weight-regular);
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		color: var(--cz-color-text-secondary);
	}
	.title[has-filter] {
		font-weight: bold;
	}
	${Bi}
	.checkbox {
		margin: 4px 0;
	}

	.buttons {
		display: flex;
		gap: 8px;
		padding: 12px 14px;
		box-shadow: inset 0px 1px 0px rgba(0, 0, 0, 0.15);

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
		border: 1px solid rgba(0, 0, 0, 0.2);
		border-radius: 6px;
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

	.sg:not([data-on='desc']) svg {
		transform: scaleY(-1);
	}
`,aa=A`
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
`})),sa,ca,la=e((()=>{w(),ye(),sa=e=>{let t=parseInt(e,10);return isFinite(t)?t:void 0},ca=e=>{let{config:t}=e,{settings:n,setSettings:r,collapsed:i}=t,a=Te({collapsed:i,settings:n.columns,setSettings:M(e=>r(t=>({...t,columns:e})),[r])});return{...t,onDown:M(e=>{e.target.closest(`.pull`)&&(a.handle=e.currentTarget)},[a]),onDragStart:M(e=>{let{target:t}=e,n=sa(t.dataset.index);if(!a.handle?.contains(t)||n==null)return e.preventDefault();a.handle=null,e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`omnitable/sort-index`,n),e.dataTransfer.setData(`text/plain`,n),setTimeout(()=>t.classList.add(`drag`),0),t.addEventListener(`dragend`,e=>e.target.classList.remove(`drag`),{once:!0})},[a]),onDragEnter:M(e=>{let t=e.currentTarget;t===e.target&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`,t.classList.add(`dragover`))},[]),onDragOver:M(e=>{e.preventDefault(),e.currentTarget.classList.add(`dragover`)},[]),onDragLeave:M(e=>{let t=e.currentTarget;t.contains(e.relatedTarget)||t.classList.remove(`dragover`)},[]),onDrop:M(e=>{let t=sa(e.dataTransfer.getData(`omnitable/sort-index`)),n=sa(e.currentTarget.dataset.index),{settings:r,setSettings:i}=a;e.currentTarget.classList.remove(`dragover`),e.preventDefault();let o=r.slice();o.splice(n+(t>=n?0:-1),0,o.splice(t,1)[0]),i(o)},[a]),onToggle:M(e=>{let{settings:t,setSettings:n}=a,r=t.map(e=>({...e,disabled:e.disabled||a.collapsed?.some(t=>t.name===e.name)})),i=sa(e.target.closest(`[data-index]`)?.dataset.index);r.splice(i,1,{...t[i],disabled:!e.target.checked,priority:e.target.checked?t.reduce((e,t)=>Math.max(e,t.priority),0)+1:t[i].priority}),n(r)},[a])}}})),ua,da,fa,pa,ma=e((()=>{Be(),ht(),xt(),f(),_(),S(),w(),j(),c(),gi(),oa(),la(),ua=[Ie({apply({availableHeight:e,elements:t}){Object.assign(t.floating.style,{maxHeight:`${Math.max(0,e)}px`})}}),...Ke],da=({onDragStart:e,onDragEnter:t,onDragOver:n,onDragLeave:i,onDrop:a,onDown:o,onToggle:s,collapsed:c,filters:l})=>(u,d)=>{let f=!!c?.find(e=>e.name===u.name),p=!u.disabled&&!f;return T` <div
			class="item"
			data-index=${d}
			@mousedown=${o}
			draggable="true"
			@dragstart=${e}
			@dragenter=${t}
			@dragover=${n}
			@dragleave=${i}
			@drop=${a}
		>
			<button class="pull">${r({width:`16`,height:`16`})}</button>
			<label class="title" ?has-filter=${!be(l[u.name]?.filter)}
				>${u.title}</label
			>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${p}
				@click=${s}
				.indeterminate=${f}
			/>
		</div>`},fa=e=>{let{settings:t,settingsId:n,onSave:r,onReset:i,hasChanges:a,opened:o,setOpened:c,...l}=ca(e);return T` <div class="headline">
			<span> ${s(`Sort and filter`)} </span>
			<cosmoz-button
				variant="tertiary"
				aria-label="${s(`Close settings`)}"
				@click=${e=>{let t=e.currentTarget;t?.focus(),t?.blur()}}
			>
				${ee({width:`16`,height:`16`})}
			</cosmoz-button>
		</div>

		<div class="contents">
			<div
				class="heading"
				?data-opened=${o.columns}
				@click=${()=>c(e=>({...e,columns:!e.columns}))}
				part="columns columns-heading"
			>
				${s(`Columns`)} ${b({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse
				?opened="${o.columns}"
				part="columns columns-content"
			>
				<div class="list">${t.columns?.map(da(l))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${o.sort}
				@click=${()=>c(e=>({...e,sort:!e.sort}))}
			>
				${s(`Sort on`)} ${b({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse ?opened=${o.sort}> ${hi()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${o.group}
				@click=${()=>c(e=>({...e,group:!e.group}))}
				part="groups groups-heading"
			>
				${s(`Group on`)} ${b({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse ?opened=${o.group} part="groups groups-heading"
				>${mi()}</cosmoz-collapse
			>
		</div>

		${d(n,()=>T`<div class="buttons">
					<cosmoz-button
						variant="tertiary"
						@click=${i}
						?disabled=${!a}
					>
						${s(`Reset`)}
					</cosmoz-button>
					<cosmoz-button
						variant="primary"
						@click=${r}
						?disabled=${!a}
					>
						${s(`Save`)}
					</cosmoz-button>
				</div>`)}`},customElements.define(`cosmoz-omnitable-settings-ui`,O(fa,{styleSheets:[se(ia)]})),pa=({config:e,newLayout:t})=>T`
	<cosmoz-dropdown
		.placement="${t?`bottom-start`:`bottom-end`}"
		.middleware="${ua}"
	>
		<div title="${s(`Sort and filter`)}" slot="button">
			${d(t,()=>T`<div class="headerDots">...</div>`,()=>T` ${l({width:`20`,height:`20`,styles:`color: var(--cz-color-text-primary)`})}`)}
			${d(e?.badge,()=>T`<div class="badge"></div>`)}
		</div>
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${e}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`,customElements.define(`cosmoz-omnitable-settings`,O(pa,{styleSheets:[se(aa)]}))})),ha,ga,_a,va,ya,ba=e((()=>{ie(),ha=[`sortOn`,`descending`,`groupOn`,`groupOnDescending`],ga=e=>t=>typeof t==`object`&&!!t&&`name`in t&&t.name===e,_a=(e=[],t=[],n=[])=>{let r=t.filter(t=>e.some(ga(t.name))),i=e.filter(e=>e.name!=null&&!t.some(ga(e.name))&&!n.some(ga(e.name))),a=n.filter(e=>!t.some(ga(e.name)));return[...r,...a.flatMap(t=>{let n=e.find(e=>e.name===t.name);return n?{...t,title:n.title??t.title??``,minWidth:parseInt(n.minWidth??`0`,10)}:[]}),...i.map(e=>{let{name:t,title:n,priority:r,minWidth:i,width:a,flex:o}=e;return{name:t??``,title:n??``,priority:r??0,minWidth:parseInt(i??`0`,10),width:parseInt(a??`0`,10),flex:parseInt(o??`0`,10)}})]},va=(e,t)=>({...t,...Oe(Array.from(ha))(e),columns:e.columns?.map(Oe([`name`,`priority`,`width`,`flex`,`disabled`]))}),ya=({columns:e,settings:t,savedSettings:n,initial:r})=>({...Object.fromEntries(ha.flatMap(e=>r?.[e]==null?[]:[[e,r[e]]])),...n?Oe(Array.from(ha))(n):{},...t,columns:_a(e,t?.columns,n?.columns)})})),xa,Sa=e((()=>{xa=({prefix:e=`omnitable-`}={})=>({write:async(t,n)=>{let r=e+t;try{n?localStorage.setItem(r,JSON.stringify(n)):localStorage.removeItem(r)}catch(e){console.error(e)}},read:async t=>{if(t)try{let n=localStorage.getItem(e+t);return n==null?void 0:JSON.parse(n)}catch(e){console.error(e)}}})})),Ca,wa,Ta=e((()=>{w(),Sa(),Ca=ke(xa),wa=()=>{let e=Me(Ca);return C(()=>e(),[e])}})),Ea=e((()=>{Ta()})),Da,Oa=e((()=>{w(),ba(),Ea(),Da=(e,t,n,r)=>{let[i,a]=x(),{read:o,write:s}=wa();return v(async()=>{e&&a(await o(e))},[e,o]),{settingsId:e,savedSettings:i,onSave:M(async()=>{if(!e)return;let r=va(t,i);await s(e,r),n(),a(r)},[t,i]),onReset:M(async t=>{n(),t.shiftKey&&(await s(e),a()),r?.()},[r]),hasChanges:t!=null}}})),ka,Aa=e((()=>{w(),K(),ba(),Oa(),ka=({settingsId:e,host:t})=>{let n=C(()=>Object.fromEntries(ha.map(e=>[e,t[e]])),[]),r=fe(),i=M(()=>{r.current?.(n)},[n]),[a,o]=x(),[s,c]=x({columns:!0,sort:!0}),{savedSettings:l,...u}=Da(e,a,o,i),{enabledColumns:d,disabledFiltering:f}=t,p=bn(t,{enabledColumns:d,disabledFiltering:f}),m=C(()=>ya({columns:p,settings:a,savedSettings:l,initial:n}),[p,a,l]),h=C(()=>m.columns.map(e=>p.find(t=>t.name===e.name)).filter(Boolean),[p,...m.columns.map(e=>e.name)]);return{...u,opened:s,setOpened:c,settings:m,columns:h,setSettings:o,resetRef:r}}})),ja=e((()=>{ma(),Aa()})),Ma,Na,Pa=e((()=>{Ma=e=>Number.isFinite(e)?e:0,Na=(e,t)=>{let n=[],[r,i]=e.reduce(([e,t],{width:n,flex:r})=>[e+n,t+r],[0,0]),a=t-r,o=Ma(a/i),s=0,c=0,l=0;for(let t=0;t<e.length;t++){let{width:i,minWidth:u,flex:d}=e[t];if(u>i+(a>=0?o*d:i*a/r)){s+=i,c+=u,l+=d,n[t]=u;continue}if(d===0){s+=i,c+=i,n[t]=i;continue}}r-=s,a=t-c-r,i-=l,o=Ma(a/i);for(let t=0;t<e.length;t++){if(n[t]!=null)continue;let{width:i,flex:s}=e[t];n[t]=i+(a>=0?o*s:i*a/r)}return n}})),Fa,Ia,La=e((()=>{Fa=Symbol(`index`),Ia=(e,t)=>{if(typeof e.findLastIndex==`function`)return e.findLastIndex(t);for(let n=e.length-1;n>=0;n--)if(t(e[n],n,e))return n;return-1}})),Ra,za,Ba,Va=e((()=>{Pa(),La(),Ra=(e,t)=>{let n=Ia(e,e=>e!=null&&e>0),r=(e,t)=>`.cell[name="${e}"], cosmoz-omnitable-skeleton::part(cell-${e}){width: ${Math.floor(t)}px;padding: 0 min(3px, ${t/2}px)}`,i=e=>`cosmoz-omnitable-resize-nub[name="${e}"]{display:none}`,a=e=>`cosmoz-omnitable-resize-nub[name="${e}"], .cell[name="${e}"]{display:none}`;return t.map((t,o)=>{let s=e[o];if(s==null||s===0)return a(t.name);let c=r(t.name,s);return o===n?`${c}\n${i(t.name)}`:c}).join(`
`)},za=(e,t,n)=>{let r=e.filter(e=>!e.hidden),i=r.reduce((e,{width:t})=>e+t,0);if(r.length>1&&i>t)return za(r.slice(1),t,n);let a=r.reduce(([e,t],n,r)=>[Math.max(e,n.index),n.index>e?r:t],[-1,-1])[1];return a!==-1&&(r[a].flex=1),Na(r,t).reduce((e,t,n)=>(e[r[n].index]=t,e),Array(n).fill(void 0))},Ba=(e,t)=>e.length===0?`.cell {display: none;}`:Ra(e,t)})),Ha,Ua=e((()=>{w(),Ha=({host:e,canvasWidth:t,layout:n,setSettings:r})=>{let i=fe();i.current=e=>r(r=>{let i=r.columns,{detail:{newWidth:a,column:o}}=e,s=i.findIndex(e=>e.name===o.name),c=[],l=i.reduce((e,t)=>Math.max(e,t.priority),-1/0);for(let e=0;e<n.length;e++)if(c[e]={...i[e]},e<s&&n[e]&&(c[e].width=n[e],c[e].flex=0,c[e].priority=l),e===s){let r=n.reduce((e,t,n)=>n<s&&t?e-t:e,t);c[e].width=Math.min(r,Math.max(a,i[e].minWidth)),c[e].flex=0,c[e].priority=l}return{...r,columns:c}}),v(()=>{let t=e=>i.current?.(e);return e.addEventListener(`column-resize`,t),()=>e.removeEventListener(`column-resize`,t)},[])}})),Wa,Ga,Ka=e((()=>{w(),Wa=88,Ga=(e,t)=>v(()=>{let n=new ResizeObserver(([e])=>{e.contentRect?.width!==0&&requestAnimationFrame(()=>t(e.contentRect?.width-Wa))});return n.observe(e),()=>n.unobserve(e)},[])})),qa,Ja=e((()=>{w(),Ka(),qa=e=>{let[t,n]=x(()=>e.getBoundingClientRect().width-Wa);return Ga(e,n),t}})),Ya,Xa,Za,Qa=e((()=>{w(),ye(),xe(),Ya=(e,t)=>{let n=C(()=>{let t=!1,n,r=()=>{t&&(n=requestAnimationFrame(r),e()&&(t=!1))};return{start:()=>{t=!0,cancelAnimationFrame(n),n=requestAnimationFrame(r)},stop:()=>{t=!1,cancelAnimationFrame(n)}}},[]);v(()=>{n.start()},t),v(()=>()=>n.stop(),[])},Xa=(e=0,t=0)=>Math.abs(e-t)<.1,Za=(e,t=1.9,n=de)=>{let r=Te({target:e});Ya(M(()=>{if(!r.tween)return r.tween=r.target,n(r.tween),!0;if(r.target.every((e,t)=>r.tween[t]===e))return n(r.tween),!0;r.tween=r.target.map((e,n)=>Xa(r.tween[n],e)?e:(r.tween[n]??0)+((e??0)-(r.tween[n]??0))/t||0),n(r.tween)},[]),[e])}})),$a,eo=e((()=>{w(),Va(),$a=({canvasWidth:e,groupOnColumn:t,config:n,miniColumn:r})=>C(()=>{if(!Array.isArray(n)||e==null||e===0)return[];let i=n.map((e,n)=>({minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,name:e.name,index:n,hidden:e.name===t?.name||e.disabled})).map(e=>r?{...e,hidden:r.name!==e.name}:e).sort(({index:e,priority:t},{index:n,priority:r})=>t===r?n-e:t-r);return za(i,e,i.length)},[e,t,n])})),to,no=e((()=>{w(),to=({host:e,canvasWidth:t,columns:n})=>{let r=e.miniBreakpoint??480,i=C(()=>t<=r,[t,r]),[a,...o]=C(()=>i?n?.filter(e=>e.mini!=null).sort((e,t)=>(e.mini??0)-(t.mini??0)):[],[n,i])??[],s=!!a;return v(()=>{e.toggleAttribute(`mini`,s)},[s]),{isMini:s&&i,miniColumn:a,miniColumns:o}}})),ro,io,ao=e((()=>{w(),Va(),Ua(),Ja(),Qa(),eo(),no(),ye(),ro=e=>{let t=C(()=>new CSSStyleSheet,[]);return v(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,t]},[]),t},io=({host:e,columns:t,settings:n,setSettings:r,resizeSpeedFactor:i,sortAndGroupOptions:a})=>{let o=qa(e),{isMini:s,miniColumn:c,miniColumns:l}=to({host:e,canvasWidth:o,columns:t}),{groupOnColumn:u}=a,d=$a({canvasWidth:o,groupOnColumn:u,miniColumn:c,config:n.columns}),f=ro(e),p=C(()=>n.columns.reduce((e,n,r)=>d[r]!=null||n.name===u?.name||n.disabled?e:[...e,t.find(e=>e.name===n.name)],[]),[t,n,d]),m=Te({columns:n.columns});return Za(d,i,e=>{let t=Ba(e,m.columns);f.replace(t)}),Ha({host:e,canvasWidth:o,layout:d,setSettings:e=>r(e(n))}),{isMini:s,collapsedColumns:p,miniColumns:l}}})),oo,so=e((()=>{oo=({host:e,...t})=>{let{csvFilename:n=`omnitable.csv`,xlsxFilename:r=`omnitable.xlsx`,xlsxSheetname:i=`Omnitable`,topPlacement:a=`top-end`}=e;return{csvFilename:n,xlsxFilename:r,xlsxSheetname:i,topPlacement:a,...t}}})),co,lo=e((()=>{w(),co=({host:e,selectedItems:t,data:n,sortAndGroupOptions:r,collapsedColumns:i,settings:a,filterFunctions:o,settingS:s,filters:c,...l})=>{let u=n&&n.length>0&&t.length===n.length,d=t=>{t.target.checked?e.shadowRoot.querySelector(`#groupedList`).selectAll():e.shadowRoot.querySelector(`#groupedList`).deselectAll()},{groupOnColumn:f}=r,p=C(()=>[f,...i,...a.columns.filter(e=>e.disabled)].some(e=>e&&Object.keys(o).includes(e.name)),[o,a,i]),m=C(()=>({...s,collapsed:i,badge:p,filters:c}),[s,i,p,c]);return v(()=>{let t=e.shadowRoot.querySelector(`#tableContent`),n=new ResizeObserver(t=>requestAnimationFrame(()=>{e.style.setProperty(`--ot-height`,t[0]?.contentRect.height+`px`)}));return n.observe(t),()=>n.unobserve(t)},[]),{allSelected:u,onAllCheckboxChange:d,data:n,settingsConfig:m,filters:c,groupOnColumn:f,sortAndGroup:r.sortAndGroup,...l}}})),uo,fo,po,mo,ho,go=e((()=>{f(),S(),w(),c(),La(),J(),uo=e=>e?`groupRow groupRow-folded`:`groupRow`,fo=({item:e,index:t})=>n=>d(n?.length>0,()=>T`
				<div class="itemRow-minis" part="item-minis">
					${n.map(n=>T`<div
								class="itemRow-mini"
								part="item-mini item-mini-${n.name}"
							>
								${(n.renderMini??n.renderCell)(n,{item:e,index:t})}
							</div>`)}
				</div>
			`),po=({columns:e,collapsedColumns:t,miniColumns:n,onItemClick:r,onCheckboxChange:i,dataIsValid:a,groupOnColumn:o,onItemChange:s,rowPartFn:c})=>(l,u,{selected:d,expanded:f,toggleCollapse:p})=>T`
		<div
			?selected=${d}
			part="${[`itemRow`,`itemRow-${l[Fa]}`,c?.(l,u)].filter(Boolean).join(` `)}"
			.dataIndex=${l[Fa]}
			.dataItem=${l}
			class="itemRow"
			@click=${r}
		>
			<div class="itemRow-wrapper" part="itemRow-wrapper">
				<input
					class="checkbox"
					type="checkbox"
					part="checkbox"
					.checked=${d}
					.dataItem=${l}
					@input=${i}
					?disabled=${!a}
				/>
				<cosmoz-omnitable-item-row
					part="itemRow-inner"
					.columns=${e}
					.index=${u}
					.selected=${d}
					.expanded=${f}
					.item=${l}
					.groupOnColumn=${o}
					.onItemChange=${s}
				>
				</cosmoz-omnitable-item-row>
				<button
					class="expand"
					?hidden="${be(t.length)}"
					?aria-expanded="${f}"
					@click="${p}"
				>
					${b({width:`16`,height:`16`})}
				</button>
			</div>
			${fo({item:l,index:u})(n)}
		</div>
		<cosmoz-omnitable-item-expand
			.columns=${t}
			.item=${l}
			.index=${u}
			?selected=${d}
			?expanded=${f}
			.groupOnColumn=${o}
			part="item-expand"
		>
		</cosmoz-omnitable-item-expand>
	`,mo=({onCheckboxChange:e,dataIsValid:t,groupOnColumn:n})=>(r,i,{selected:a,folded:o,toggleFold:s})=>T` <div
			class="${uo(o)}"
			part="groupRow groupRow-${r[Fa]}"
		>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${a}
				.dataItem=${r}
				@input=${e}
				?disabled=${!t}
			/>
			<h3 class="groupRow-label">
				<div><span>${n?.title}</span>: &nbsp;</div>
				<cosmoz-omnitable-group-row
					.column=${n}
					.item=${r.items?.[0]}
					.selected=${a}
					.folded=${o}
					.group=${r}
				></cosmoz-omnitable-group-row>
			</h3>
			<div class="groupRow-badge">${r.items.length}</div>
			<button class="expand" ?aria-expanded="${o}" @click=${s}>
				${b({width:`16`,height:`16`})}
			</button>
		</div>`,ho=({host:e,error:t,dataIsValid:n,processedItems:r,columns:i,collapsedColumns:a,miniColumns:o,sortAndGroupOptions:s,rowPartFn:c,...l})=>{let{loading:u=!1,displayEmptyGroups:d=!1,compareItemsFn:f}=e,p=fe({shiftKey:!1,ctrlKey:!1}),m=M(t=>{let n=t.target.dataItem,r=t.target.checked;p.current.shiftKey?e.shadowRoot.querySelector(`#groupedList`).toggleSelectTo(n,r):p.current.ctrlKey?(t.target.checked=!0,e.shadowRoot.querySelector(`#groupedList`).selectOnly(n)):e.shadowRoot.querySelector(`#groupedList`).toggleSelect(n,r),t.preventDefault(),t.stopPropagation()},[]);v(()=>{let e=({shiftKey:e,ctrlKey:t})=>{p.current={shiftKey:e,ctrlKey:t}};return window.addEventListener(`keydown`,e),window.addEventListener(`keyup`,e),()=>{window.removeEventListener(`keydown`,e),window.removeEventListener(`keyup`,e)}},[]);let h=M(t=>{let n=t.composedPath();n.slice(0,n.indexOf(t.currentTarget)).find(e=>e.matches?.(`a, .checkbox, .expand`))||e.dispatchEvent(new window.CustomEvent(`omnitable-item-click`,{bubbles:!0,composed:!0,detail:{item:t.currentTarget.dataItem,index:t.currentTarget.dataIndex}}))},[]),{groupOnColumn:g}=s,_=M((t,n)=>r=>Sn(e,t,n,r),[]);return{...l,processedItems:r,dataIsValid:n,filterIsTooStrict:n&&r.length<1,loading:u,compareItemsFn:f,displayEmptyGroups:d,error:t,renderItem:C(()=>po({columns:i,collapsedColumns:a,miniColumns:o,onItemClick:h,onCheckboxChange:m,dataIsValid:n,groupOnColumn:g,onItemChange:_,rowPartFn:c}),[i,a,h,m,n,g,_,c]),renderGroup:C(()=>mo({onCheckboxChange:m,dataIsValid:n,groupOnColumn:g}),[m,n,g])}}})),_o,vo=e((()=>{_o=(e,t)=>{if(e===t)return 0;if(e==null)return-1;if(t==null)return 1;let n=typeof e,r=typeof t;return n===`object`&&r===`object`?e.toString()<t.toString()?-1:1:n===`number`&&r===`number`?e-t:n===`string`&&r===`string`?e<t?-1:1:n===`boolean`&&r===`boolean`?e?-1:1:(console.warn(`unsupported sort`,n,e,r,t),0)}})),yo,bo,xo,So,Co,wo,To=e((()=>{w(),xe(),vo(),K(),Si(),La(),yo=(e,t)=>(n,r)=>_o(e(n),e(r))*(t?-1:1),bo=e=>e.replace(/([a-z0-9])([A-Z])/gu,`$1-$2`).toLowerCase(),xo=(e,t)=>{!e||!t||Object.entries(t).forEach(([t,n])=>{e[G].__ownChange=!0,e[G][t]=n,e[G].__ownChange=!1,e[G].dispatchEvent(new CustomEvent(`${bo(t)}-changed`,{bubbles:!0,detail:{value:n}}))})},So=(e,t)=>Object.assign(e,{[Fa]:t}),Co=Symbol(`unparsed`),wo=({data:e,columns:t,hashParam:n,sortAndGroupOptions:r,noLocalSort:i,noLocalFilter:a})=>{let{groupOnColumn:o,groupOnDescending:s,sortOnColumn:c,descending:l}=r,u=M(([e,n])=>{let r=t.find(({name:t})=>t===e);return r==null?[e,void 0]:[e,n.filter&&r.serializeFilter(r,n.filter)]},[t]),d=M(([e,n])=>{let r=t.find(({name:t})=>t===e);if(r==null)return[e,{[Co]:n}];let i={filter:r.deserializeFilter(r,n)};return xo(r,i),[e,i]},[t]),[f,p]=xi({},n,{multi:!0,suffix:`-filter--`,write:u,read:d}),m=M((e,n)=>p(r=>{let i=_e(n,r[e]);return xo(t.find(t=>t.name===e),i),{...r,[e]:{...r[e],...i}}}),[t,p]),h=C(()=>Object.fromEntries(t.map(e=>[e.name,!e.noLocalFilter&&e.getFilterFn(e,f[e.name]?.filter)]).filter(([,e])=>!!e)),[t,...C(()=>Object.values(f).map(e=>e.filter),[f])]),g=C(()=>!Array.isArray(e)||e.length===0?[]:Object.entries(h).length===0||a?e.slice():e.filter(e=>Object.values(h).every(t=>t(e))),[e,h,a]),_=C(()=>{if(!i&&!o&&c!=null&&c.sortOn!=null)return g.slice().sort(yo(e=>c.getComparableValue({...c,valuePath:c.sortOn},e),l));if(o!=null&&o.groupOn!=null){let e=g.reduce((e,t)=>{let n=o.getComparableValue({...o,valuePath:o.groupOn},t);if(n===void 0)return e;let r=e.find(e=>e.id===n);return r?(r.items.push(t),e):(r={id:n,name:n,items:[t]},[...e,r])},[]);return e.sort(yo(e=>o.getComparableValue({...o,valuePath:o.groupOn},e.items[0]),s)),!c||i?e:e.filter(e=>Array.isArray(e.items)).map(e=>(e.items.sort(yo(e=>c.getComparableValue({...c,valuePath:c.sortOn},e),l)),e))}return g},[g,o,s,c,l,i]),ee=C(()=>{let e=0,t=0,n=[];return _.forEach(r=>{if(Array.isArray(r.items)){So(r,t++),r.items.forEach(t=>{So(t,e++),n.push(t)});return}return So(r,e++),n.push(r)},[]),n},[_]);return v(()=>{p(e=>Object.values(e).some(e=>e[Co]!=null)?Object.fromEntries(Object.entries(e).map(([e,t])=>t[Co]==null?[e,t]:d([e,t[Co]]))):e)},[d]),{processedItems:_,visibleData:ee,filters:f,filterFunctions:h,setFilterState:m}}})),Eo,Do,Oo=e((()=>{me(),w(),h(),Eo=e=>{let t=t=>{let n=e.data.indexOf(t);if(n<0)return null;let r=e.data.splice(n,1);if(e.data=e.data.slice(),Array.isArray(r)&&r.length>0)return r[0]},n=(t,n)=>{e.data.splice(t,1,n),e.data=e.data.slice()};return{removeItem:t,removeItems(t){let n=[];for(let r=t.length-1;r>=0;--r){let i=e.removeItem(t[r]);i!=null&&n.push(i)}return n},replaceItemAtIndex:n,replaceItem(t,r){let i=e.data.indexOf(t);if(i>-1)return n(i,r)},selectItem(t){e.shadowRoot.querySelector(`#groupedList`).select(t)},selectAll(){e.shadowRoot.querySelector(`#groupedList`).selectAll()},deselectAll(){e.shadowRoot.querySelector(`#groupedList`).deselectAll()},deselectItem(t){e.shadowRoot.querySelector(`#groupedList`).deselect(t)},isItemSelected(t){return e.shadowRoot.querySelector(`#groupedList`).isItemSelected(t)}}},Do=({host:e,visibleData:t,filters:r,...i})=>{let{setFilterState:a}=i,o=C(()=>Eo(e),[]);p(i,Object.values(i)),p(o,Object.values(o)),v(()=>{let t=e=>a(e.detail.name,t=>({...t,...e.detail.state}));return e.addEventListener(`legacy-filter-changed`,t),()=>e.removeEventListener(`legacy-filter-changed`,t)},[]),n(`visibleData`,t),n(`sortedFilteredGroupedItems`,i.sortedFilteredGroupedItems),n(`selectedItems`,i.selectedItems),n(`sortOn`,i.sortOn),n(`descending`,i.descending),n(`isMini`,i.isMini);let s=C(()=>Object.fromEntries(Object.entries(r).filter(([,{filter:e}])=>e!==void 0).map(([e,{filter:t}])=>[e,t])),[r]);n(`filters`,s,Object.values(s))}})),ko,Ao=e((()=>{w(),ja(),ao(),so(),lo(),go(),To(),Oo(),Oi(),ko=e=>{let{hashParam:t,settingsId:n,data:r,resizeSpeedFactor:i,noLocal:a,noLocalSort:o=a,noLocalFilter:s=a,error:c,rowPartFn:l}=e,u=ka({settingsId:n,host:e}),{settings:d,setSettings:f,columns:p,resetRef:m}=u,h=Ei(p,t,d,f,m),{processedItems:g,visibleData:_,filters:ee,setFilterState:te,filterFunctions:v}=wo({data:r,columns:p,hashParam:t,sortAndGroupOptions:h,noLocalSort:o,noLocalFilter:s}),{isMini:ne,collapsedColumns:y,miniColumns:b}=io({host:e,columns:p,settings:d,setSettings:f,resizeSpeedFactor:i,sortAndGroupOptions:h}),re=r&&Array.isArray(r)&&r.length>0,[S,C]=x([]);return Do({host:e,visibleData:_,sortedFilteredGroupedItems:g,columns:p,filters:ee,setFilterState:te,selectedItems:S,isMini:ne,...h}),{header:co({host:e,selectedItems:S,sortAndGroupOptions:h,dataIsValid:re,data:r,columns:p,filters:ee,collapsedColumns:y,settings:d,filterFunctions:v,settingS:u,setFilterState:te,hideSelectAll:e.hideSelectAll===!0}),list:ho({host:e,error:c,dataIsValid:re,processedItems:g,setSelectedItems:C,columns:p,collapsedColumns:y,miniColumns:b,sortAndGroupOptions:h,rowPartFn:l}),footer:oo({host:e,selectedItems:S,columns:p})}}})),jo=e((()=>{E(),customElements.define(`cosmoz-grouped-list-row`,class extends HTMLElement{get item(){return this._item}set item(e){this._item=e,this._render()}get index(){return this._index}set index(e){this._index=e,this._render()}get renderFn(){return this._renderFn}set renderFn(e){this._renderFn=e,this._render()}_render(){this._item==null||this._index==null||this._renderFn==null||ge(this._renderFn(this._item,this._index),this)}})})),Mo,No,Po,Fo,Io,Lo,Ro,zo,Bo,Vo=e((()=>{Mo={group:Symbol(`group`)},No=(e,t)=>(t.has(e)||t.set(e,{}),t.get(e)),Po=(e,t)=>!!No(e,t).expanded,Fo=(e,t)=>!!No(e,t).folded,Io=e=>e?e.items instanceof Array:!1,Lo=e=>{if(!Array.isArray(e)||e.length===0)return;let t=Array.isArray(e[0]?.items);if(!e.every(e=>Array.isArray(e.items)===t))throw Error(`Data must be homogeneous.`)},Ro=(e,t,n)=>{if(Array.isArray(e))return Lo(e),e.reduce((e,r)=>{let i=r;return i.items?i.items.length?No(r,n).folded?e.concat(r):e.concat(r,i.items.map(e=>Object.assign(e,{[Mo.group]:r}))):t?e.concat(r):e:e.concat(r)},[])},zo=(e,...t)=>typeof e==`function`?e(...t):e,Bo=(e,t)=>e===t})),Ho,Uo=e((()=>{w(),Vo(),Ho=()=>{let[e,t]=x(()=>[new WeakMap]);return{setItemState:M((e,n)=>t(([t])=>{let r=No(e,t);return Object.assign(r,zo(n,r)),[t]}),[]),state:e[0],signal:e}}})),Wo,Go=e((()=>{w(),Uo(),Vo(),Wo=()=>{let{setItemState:e,state:t,signal:n}=Ho();return{state:t,signal:n,toggleFold:M((t,n)=>{Io(t)&&e(t,e=>({folded:n===void 0?!e.folded:n}))},[]),toggleCollapse:M((t,n)=>{Io(t)||e(t,e=>({expanded:n===void 0?!e.expanded:!n}))},[])}}})),Ko,qo=e((()=>{w(),Vo(),Ko=({initial:e,compareItemsFn:t,data:n,flatData:r})=>{let[i,a]=x(e),[o,s]=x(),c=M(e=>i.includes(e),[i]),l=M(e=>e?.items?.every(c)??!1,[c]),u=M(e=>c(e)||l(e),[c,l]),d=M(e=>{let t=e.items??[e];a(e=>[...e,...t.filter(t=>!e.includes(t))]),s(e)},[]),f=M(e=>{let t=e.items??[e];a(e=>e.filter(e=>!t.includes(e))),s(e)},[]),p=M(e=>{a(e.items?.slice()||[e]),s(e)},[]),m=M(()=>{a(n.flatMap(e=>e.items||e)),s(void 0)},[n]),h=M(()=>{a([]),s(void 0)},[]),g=M((e,t=!u(e))=>t?d(e):f(e),[u]),_=M((e,n)=>{if(!r)return;let i=o?r.findIndex(e=>t(e,o)):-1;if(i<0)return g(e,n);let[a,c]=[i,r.indexOf(e)].sort((e,t)=>e-t);r.slice(a,c+1).forEach((e,t,r)=>{t>0&&t<r.length-1&&Io(e)||g(e,n)}),s(e)},[r,t,g]);return v(()=>a(e=>e.length>0&&r?r.filter(n=>e.find(e=>t(n,e))):e),[r]),{selectedItems:i,isItemSelected:c,isGroupSelected:l,isSelected:u,select:d,deselect:f,selectOnly:p,selectAll:m,deselectAll:h,toggleSelect:g,toggleSelectTo:_}}})),Jo,Yo,Xo,Zo=e((()=>{me(),h(),w(),E(),jo(),Go(),qo(),Vo(),le(),Jo={host:{position:`relative`,display:`flex`,flexDirection:`column`}},Yo=e=>{let{data:t,renderItem:r,renderGroup:i,displayEmptyGroups:a,compareItemsFn:o=Bo}=e,{toggleFold:s,toggleCollapse:c,state:l,signal:u}=Wo(),d=C(()=>Ro(t,a,l),[t,a,u]),{selectedItems:f,isItemSelected:m,isGroupSelected:h,isSelected:g,select:_,deselect:ee,selectOnly:te,selectAll:v,deselectAll:ne,toggleSelect:y,toggleSelectTo:b}=Ko({initial:[],compareItemsFn:o,data:t,flatData:d}),re=M((e,t)=>Array.isArray(e.items)?i(e,t,{selected:h(e),folded:Fo(e,l),toggleSelect:t=>y(e,typeof t==`boolean`?t:void 0),toggleFold:()=>s(e)}):r(e,t,{selected:f.includes(e),expanded:Po(e,l),toggleSelect:t=>y(e,typeof t==`boolean`?t:void 0),toggleCollapse:()=>c(e)}),[r,i,f,y,u]);je(()=>{Object.assign(e.style,Jo.host)},[]),n(`selectedItems`,f);let x={toggleFold:s,toggleCollapse:c,isItemSelected:m,isGroupSelected:h,isSelected:g,select:_,deselect:ee,selectOnly:te,selectAll:v,deselectAll:ne,toggleSelect:y,toggleSelectTo:b};return p(x,Object.values(x)),{renderRow:re,flatData:d}},Xo=({renderRow:e,flatData:t})=>re({items:t,renderItem:(t,n)=>T`<cosmoz-grouped-list-row
				.item=${t}
				.index=${n}
				.renderFn=${e}
			></cosmoz-grouped-list-row>`})})),Qo,$o=e((()=>{Zo(),w(),Qo=e=>Xo(Yo(e)),customElements.define(`cosmoz-grouped-list`,O(Qo,{useShadowDOM:!1}))})),es=e((()=>{$o()})),ts,ns,rs,is=e((()=>{Re(),Lt(),si(),li(),ji(),Ii(),zi(),h(),w(),st(),E(),i(),Hi(),Xi(),Qi(),ra(),Ao(),es(),ts=e=>window.ShadyCSS?.ApplyShim?.transformCssText?.(e)||e,ns=e=>{let{header:t,list:n,footer:r}=ko(e);return T`
		<style>
			${te([],()=>ts(Vi))}
		</style>

		<div class="mainContainer">
			${Zi(t)}
			<div class="tableContent" id="tableContent">
				${na(t,n)}
			</div>
			${Yi(r)}
		</div>

		<div id="columns">
			<slot id="columnsSlot"></slot>
		</div>
	`},customElements.define(`cosmoz-omnitable`,class extends O(ns,{observedAttributes:[`hash-param`,`sort-on`,`group-on`,`descending`,`group-on-descending`,`hide-select-all`,`settings-id`,`no-local`,`no-local-sort`,`no-local-filter`,`disabled-filtering`,`loading`,`mini-breakpoint`]}){connectedCallback(){super.connectedCallback(),he(this,`selectedItems`,[]),he(this,`visibleData`,[]),he(this,`sortedFilteredGroupedItems`,[])}}),rs=`
	<slot name="actions" slot="actions"></slot>
`,T(Object.assign([rs],{raw:[rs]})),Fe(Object.assign([rs],{raw:[rs]}))})),as,$,os,ss,cs,ls=e((()=>{as=(e,t,n)=>{let r=String(e),i=-1,a=!n&&n!==0?` `:n,o=t-r.length;for(;++i<o;)r=a+r;return r},$=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,os=()=>`2015-`+as($(1,12),2,`0`)+`-`+as($(1,28),2,`0`),ss=()=>{let e=$(0,20);return e===1?new Date(2015,3,2,14,26,10,299):e===2?new Date(2016,4,2,10,9,10,444):e===3?new Date(2016,4,2,10,9,10,443):e===4?new Date(2016,4,2,10,9,10,442):new Date($(2014,2017),$(1,12),$(1,28),$(0,23),$(0,59),$(0,59),$(0,999))},cs=(e,t,n)=>{let r=$(e,t),i=[],a=[`Lorem ipsum dolor sit amet`,`Nunc tristique`,`Curabitur vestibulum`,`Cras laoreet`,`Himenaeos`,`maximus diam purus at mauris`],o=[`SEK`,`USD`,`EUR`,`AUD`],s=0;for(let e=0;e<r;e+=1){let t=`Group `+e,r=e*2+1;for(let e=0;e<r;e+=1){let r=[],c=[],l=[],u=s%10;for(let e=0;e<u;e+=1)r.push(`Item `+e),c.push({name:`Item `+e,value:`item-value-`+e}),l.push({value:`cat-`+e,label:`Category `+e});i.push({id:s,name:t+` item `+e,value:$(0,1e4),bool:$(0,100)>50,object:{value:$(0,1e4),label:`Random string `+$(1,n)},sub:{subProp:a[s%a.length]},randomString:`Random string `+$(1,n),randomString2:`Random string 2 `+$(1,n),randomString3:`Random string 3 `+$(1,n),randomString4:`Random string 4 `+$(1,n),date:ss(),dateJSON:os(),amount:{amount:$(10,100),currency:o[s%o.length]},group:t,list:r,objectList:c,categories:s%7==0?null:l}),s+=1}}return i}})),us,ds,fs,ps,ms;e((()=>{E(),Be(),Xe(),Ct(),is(),ls(),us={title:`Components/ComsmozOmnitableFullDemo`,component:`cosmoz-omnitable`,tags:[`autodocs`],args:{loading:!1,locale:`en`,sortOn:``,groupOn:``,descending:!1,groupOnDescending:!1,hashParam:``,settingsId:``,selectedItems:[],disabledFiltering:!1},argTypes:{loading:{control:`boolean`,description:`Show loading state`,table:{defaultValue:{summary:`false`}}},locale:{control:`select`,options:[`en`,`fr`,`sv`],description:`Language locale`,table:{defaultValue:{summary:`en`}}},selectedItems:{control:`object`,description:`Show selected items`},data:{control:`object`,description:`Show specified items`},sortOn:{control:`text`,description:`Column property name to sort on (e.g., "amount", "date", "id")`},groupOn:{control:`text`,description:`Column property name to group on (e.g., "amount", "date", "id")`},descending:{control:`boolean`,description:`Sort on descending`},groupOnDescending:{control:`boolean`,description:`Group on descending`},hashParam:{control:`text`,description:`Hash parameter for URL state management`},settingsId:{control:`text`,description:`ID for storing table settings`},disabledFiltering:{control:`boolean`,description:`Disable filter inputs in all column headers`,table:{defaultValue:{summary:`false`}}}},render:e=>T`
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

                <cosmoz-button slot="actions">
                    ${Ye({styles:`vertical-align: middle; fill: currentColor;`})}
                    <span>Remove items</span>
                </cosmoz-button>
            </cosmoz-omnitable>
        `,play:async()=>{console.log(`Current hash:`,window.location.hash)}},ds={args:{data:cs(10,10,10)}},fs={args:{data:cs(2,2,10)}},ps={args:{data:[]}},ds.parameters={...ds.parameters,docs:{...ds.parameters?.docs,source:{originalSource:`{
  args: {
    data: generateTableDemoData(10, 10, 10)
  }
}`,...ds.parameters?.docs?.source}}},fs.parameters={...fs.parameters,docs:{...fs.parameters?.docs,source:{originalSource:`{
  args: {
    data: generateTableDemoData(2, 2, 10)
  }
}`,...fs.parameters?.docs?.source}}},ps.parameters={...ps.parameters,docs:{...ps.parameters?.docs,source:{originalSource:`{
  args: {
    data: []
  }
}`,...ps.parameters?.docs?.source}}},ms=[`TableWithLargeData`,`TableWithSmallData`,`TableWithNoData`]}))();export{ds as TableWithLargeData,ps as TableWithNoData,fs as TableWithSmallData,ms as __namedExportsOrder,us as default};