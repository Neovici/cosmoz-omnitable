import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$ as t,C as n,D as r,Et as i,F as a,Ft as o,Ht as s,I as c,J as l,Jt as u,K as d,L as f,Lt as p,M as m,N as h,Nt as g,O as _,Ot as v,S as y,V as b,Vt as x,W as S,Xt as C,Y as ee,Z as te,Zt as w,_ as T,_t as E,a as ne,b as re,ct as ie,d as ae,f as oe,ft as se,g as ce,gt as D,h as le,i as ue,j as O,jt as k,k as A,kt as de,m as j,mt as fe,ot as M,p as pe,qt as me,rt as he,st as ge,t as _e,tt as ve,v as ye,vt as N,w as be,x as xe,y as Se,yt as Ce,z as we,zt as Te}from"./dist-Bd_7_9uE.js";import{$ as Ee,A as De,C as Oe,D as ke,E as Ae,F as P,G as je,H as Me,I as Ne,L as Pe,M as Fe,N as Ie,O as F,P as I,Q as Le,R as Re,S as ze,T as Be,U as Ve,V as He,X as Ue,Y as We,Z as Ge,_ as Ke,a as qe,b as Je,c as Ye,d as Xe,et as Ze,f as Qe,g as $e,h as et,j as tt,k as L,l as nt,n as rt,o as it,p as at,q as ot,r as st,t as ct,u as lt,v as ut,w as dt,x as ft,y as pt,z as mt}from"./dist-YimCk_fg.js";import{n as ht,t as gt}from"./table-demo-helper-C6ZNhr6E.js";var _t;function vt(){return(vt=e((()=>{E(),_t=()=>C`<style>
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
</style>`,customElements.define(`cz-spinner`,N(_t))})))()}var yt,bt;function R(){return(R=e((()=>{S(),se(),E(),yt=D`
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
`,bt=()=>C`
	<style>
		${yt}
	</style>
	${l({className:`icon`,width:`18`,height:`18`})}
`,customElements.define(`cosmoz-clear-button`,N(bt))})))()}var z,xt,St,Ct,wt,B;function V(){return(V=e((()=>{P(),z=({valuePath:e},t)=>I(t,e),xt=z,St=z,Ct=({valuePath:e},t)=>n=>{let r=I(n,e);return r!=null&&r.toString().toLowerCase().trim().includes(t.toLowerCase().trim())},wt=(e,t)=>t===``||t==null?null:t,B=e=>class extends e{static get properties(){return{isOmnitableColumn:{type:Boolean,value:!0},title:{type:String},valuePath:{type:String,notify:!0},values:{type:Array,notify:!0},filter:{type:Object},noLocalFilter:{type:Boolean},disabled:{type:Boolean,value:!1,notify:!0},editable:{type:Boolean,notify:!0},loading:{type:Boolean,value:!1,notify:!0},externalValues:{type:Boolean,value:!1,notify:!0},name:{type:String},sortOn:{type:String},groupOn:{type:String},noSort:{type:Boolean,value:!1},disabledFiltering:{type:Boolean,value:!1},width:{type:String,value:`75px`},minWidth:{type:String,value:`40px`},flex:{type:String,value:`1`},cellClass:{type:String,value:`default-cell`},headerCellClass:{type:String,value:`default-header-cell`},priority:{type:Number,value:0},hidden:{type:Boolean,notify:!0},align:{type:String,value:`left`},headerAlign:{type:String,value:null},renderHeader:{type:Function},renderCell:{type:Function},renderEditCell:{type:Function},renderGroup:{type:Function},mini:{type:Number,value:null},renderMini:{type:Function}}}static get observers(){return[`notifyFilterChange(filter)`]}notifyFilterChange(e){this.__ownChange||this.dispatchEvent(new CustomEvent(`legacy-filter-changed`,{detail:{name:this.name,state:this.legacyFilterToState(e)},bubbles:!0}))}legacyFilterToState(e){return{filter:e}}getFilterFn(){}getString(e,t){return z(e,t)}toXlsxValue(e,t){return xt(e,t)}cellTitleFn(e,t){return this.getString(e,t)}headerTitleFn(e){return e.title}serializeFilter(e,t){return wt(e,t)}deserializeFilter(e,t){if(t==null)return null;if(typeof t==`string`)try{return window.decodeURIComponent(t)}catch{return null}return t}getComparableValue(e,t){return St(e,t)}computeSource(e,t){return t}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n),this.dispatchEvent(new CustomEvent(`cosmoz-column-prop-changed`,{bubbles:!0}))}}})))()}var Tt,Et,Dt,Ot,kt,At,jt;function Mt(){return(Mt=e((()=>{m(),R(),L(),w(),V(),Tt=e=>t=>e(n=>{if(n.inputValue===void 0&&t.target.value===``)return n;clearTimeout(n.t);let r=setTimeout(()=>e(e=>({...e,filter:e.inputValue})),1e3);return{...n,inputValue:t.target.value,t:r}}),Et=e=>()=>e(e=>({...e,filter:e.inputValue})),Dt=e=>t=>{t.keyCode===13&&(t.preventDefault(),e(e=>({...e,filter:e.inputValue})))},Ot=e=>t=>e(e=>({...e,headerFocused:t.detail.value})),kt=e=>()=>e(e=>({...e,filter:null,inputValue:null})),At=e=>e!=null&&e!==``,jt=class extends B(F){static get properties(){return{minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},inputValue:{type:Object,notify:!0}}}getFilterFn(e,t){if(t!=null&&t!==``)return Ct(e,t)}renderCell(e,{item:t}){return C`<span class="default-column">${z(e,t)}</span>`}renderEditCell(e,{item:t},n){return C`<cosmoz-input
			variant="inline"
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${z(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,inputValue:n,headerFocused:r},i){return C`<cosmoz-input
			variant="inline"
			label=${e.title}
			?disabled=${e.disabledFiltering}
			.value=${n??t}
			@value-changed=${Tt(i)}
			focused=${r}
			@focused-changed=${Ot(i)}
			@keydown=${Dt(i)}
			@blur=${Et(i)}
		>
			${M(!e.disabledFiltering,()=>C`<cosmoz-clear-button
						suffix
						slot="suffix"
						?visible=${At(t)}
						light
						@click=${kt(i)}
					></cosmoz-clear-button>`)}
		</cosmoz-input>`}legacyFilterToState(e){return{filter:e,inputValue:e}}},customElements.define(`cosmoz-omnitable-column`,jt)})))()}var Nt,Pt,Ft;function H(){return(H=e((()=>{m(),E(),w(),Nt=[`label`,`value`,`slot`,`always-float-label`,`disabled`,`variant`],Pt=s`
	${we}

	label {
		text-align: left;
	}

	.wrap {
		height: 40px;
	}

	#input {
		margin-top: -4px;
	}
`,Ft=e=>{let{label:t,value:n,slot:r}=e;e.toggleAttribute(`has-value`,!!n);let i=C`<div
		id="input"
		part="input"
		role="button"
		class="control"
		slot=${r}
	>
		${n||``}
	</div>`;return b(i,{label:t})},customElements.define(`cosmoz-omnitable-dropdown-input`,N(Ft,{observedAttributes:Nt,styleSheets:[Pt]}))})))()}var It;function Lt(){return(Lt=e((()=>{Pe(),w(),Ae(),H(),It=({title:e,tooltip:t=``,filterText:n=``,onOpenedChanged:r,content:i,align:a=`left`,externalValues:o=null})=>{let s={filtered:!!n,...o!=null&&{[`external-values-${o}`]:!0}};return C`
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
			class=${Be({...s,dropdown:!0})}
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
	`}})))()}var Rt,zt;function Bt(){return(Bt=e((()=>{ye(),Fe(),dt(),ft(),Rt=e=>e?typeof e.close==`function`?e:Rt(e.parentElement):null,zt=e=>class extends e{static get properties(){return{disabled:{type:Boolean,value:!1},filter:{type:Object,notify:!0},values:{type:Array,value(){return[]}},headerFocused:{type:Boolean,notify:!0},min:{type:Number,value:null},max:{type:Number,value:null},limits:{type:Function},autoupdate:{type:String,value:!0},locale:{type:String,value:null},align:{type:String,value:`left`},_filterInput:{type:Object,value(){return{min:null,max:null}}},_range:{type:Object,computed:`_computeRange(values.*)`},_limit:{type:Object,computed:`_computeLimit(_range, _filterInput.*, min, max)`,value(){return{}}},_tooltip:{type:String,computed:`_computeTooltip(title, _filterText)`},_fromClasses:{type:String,computed:`_computeInputClasses(_filterInput.min)`},_toClasses:{type:String,computed:`_computeInputClasses(_filterInput.max)`}}}static get observers(){return[`_filterInputChanged(_filterInput.*, autoupdate)`,`_filterChanged(filter.*)`,`_updateLimits(limits, headerFocused)`]}disconnectedCallback(){this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),super.disconnectedCallback()}_computeInputClasses(e){return e!=null&&e!==``?`has-value`:``}toNumber(e,t,n){if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=this.toNumber(t);return i==null?r:n(r,i)}toValue(){return this.toNumber.apply(this,arguments)}getComparableValue(e,t){if(e==null)return;let n=e;return t!=null&&(n=this.get(t,e)),this.toValue(n)}renderValue(){}getInputString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return this._toInputString(n)}_computeRange(e){let t=e.base,n=Array.isArray(t)&&t.length&&t.map(e=>this.toValue(e)).filter(e=>e!=null);return!n||n.length<1?{min:null,max:null}:n.reduce((e,t)=>({min:this.toValue(t,e.min,Math.min),max:this.toValue(t,e.max,Math.max)}),{})}_computeLimit(e,t,n,r){if(!e)return;let i=t.base,a=this.toValue(n),o=this.toValue(r),s=a??this.toValue(e.min),c=o??this.toValue(e.max);return{fromMin:s,fromMax:this.toValue(c,this._fromInputString(i.max,`max`),Math.min),toMin:this.toValue(s,this._fromInputString(i.min,`min`),Math.max),toMax:c}}_computeFilterText(e){if(e.base==null)return;let t=e.base,n=this.toValue(t.min),r=this.toValue(t.max),i=[];return n!=null&&i.push(this.renderValue(n)),i.push(` - `),r!=null&&i.push(this.renderValue(r)),i.length>1?i.join(``):void 0}_computeTooltip(e,t){return t==null?e:`${e}: ${t}`}_fromInputString(e){return this.toValue(e)}_toInputString(e){return this.toValue(e)??null}_getDefaultFilter(){return{min:null,max:null}}_filterInputChanged(e,t){let n=e.path.split(`.`)[1];this.__inputChangePath=n||null,t&&(this._limitInputDebouncer=ze.debounce(this._limitInputDebouncer,Ie.after(600),()=>{this._limitInput(),this._updateFilter()}),Oe(this._limitInputDebouncer))}_clearFrom(){this.set(`_filterInput.min`,null),this._updateFilter()}_clearTo(){this.set(`_filterInput.max`,null),this._updateFilter()}_onBlur(){this._limitInput(),this._updateFilter()}_onKeyDown(e){let t=e.currentTarget,n=Array.from(t.parentElement.querySelectorAll(`cosmoz-input`)),r=n[n.findIndex(e=>e===t)+1],i=!r,a=n[0]===t;switch(e.keyCode){case 13:if(e.preventDefault(),!i)r.focus();else{let e=this._limitInput();this._updateFilter(),e||this._closeParent(t)}break;case 9:(i&&!e.shiftKey||a&&e.shiftKey)&&this._closeParent(t)}}_closeParent(e){let t=Rt(e);t&&t.close()}_onDropdownOpenedChanged({currentTarget:e,type:t,detail:n}){(t===`focus`||n?.value===!0)&&setTimeout(()=>{e.querySelector(`cosmoz-input:focus`)||e.querySelector(`cosmoz-input`)?.focus()},100)}_limitInput(){let e=this._filterInput,t=this.__inputChangePath,n=t?this._fromInputString(this.get(t,e),t):null;if(this.__inputChangePath=null,n==null)return!1;let r=this._limit,i=t===`min`?`from`:`to`,a=this.get(i+`Min`,r),o=this.get(i+`Max`,r),s=this.toValue(n,a,Math.max),c=this.toValue(s,o,Math.min);return this.getComparableValue(n)!==this.getComparableValue(c)&&(this.set([`_filterInput`,t],this._toInputString(c,t)),this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),!0)}_updateFilter(){let e=this._filterInput,t=this.filter,n=this._fromInputString(e.min,`min`),r=this._fromInputString(e.max,`max`);(this.getComparableValue(n)!==this.getComparableValue(t,`min`)||this.getComparableValue(r)!==this.getComparableValue(t,`max`))&&this.set(`filter`,{min:n,max:r})}_filterChanged(e){if(this._filterInput==null)return;let t=this._filterInput,n=e.base,r=this._fromInputString(t.min,`min`),i=this._fromInputString(t.max,`max`);(this.getComparableValue(r)!==this.getComparableValue(n,`min`)||this.getComparableValue(i)!==this.getComparableValue(n,`max`))&&(this.set(`_filterInput`,{min:this._toInputString(n.min),max:this._toInputString(n.max)}),this._limitInputDebouncer&&this._limitInputDebouncer.cancel())}hasFilter(){let e=this.filter;return e==null?!1:this.toValue(e.min)!=null||this.toValue(e.max)!=null}resetFilter(){this.filter=this._getDefaultFilter()}_updateLimits(e,t){e&&Promise.resolve(Se(e,{active:t})).then(e=>{let{min:t,max:n}=e??{};Object.assign(this,{...t==null?{}:{min:t},...n==null?{}:{max:n}})})}}})))()}var Vt;function Ht(){return(Ht=e((()=>{L(),w(),Vt=e=>class extends e{static get template(){return De`<div id="output" style="position:relative;"></div>`}connectedCallback(){super.connectedCallback();let e=this;u(e.render(),e.$.output)}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n);let r=this;requestAnimationFrame(()=>u(r.render(),r.$.output))}}})))()}var Ut;function Wt(){return(Wt=e((()=>{m(),L(),A(),w(),Lt(),H(),Bt(),Ht(),Ut=class extends zt(Vt(F)){static get properties(){return{currency:{type:String},autodetect:{type:Boolean,value:!1},rates:{type:Object},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, _formatters)`},headerFocused:{type:Boolean,value:!1}}}static get observers(){return[`_valuesChanged(autodetect, currency, values)`]}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return C`
			${M(this.disabled,()=>C`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>C`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${It({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:C`
							<h3>${this.title}</h3>
							<cosmoz-input
								class=${this._fromClasses}
								type="number"
								title=${O(`Minimum amount`)}
								label=${O(`Min amount`)}
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
								title=${O(`Maximum amount`)}
								label=${O(`Max amount`)}
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
		`}_valuesChanged(e,t,n){if(!Array.isArray(n)||n.length<1||!e&&t)return;let r=n.reduce((e,t)=>{if(t.currency){let n=t.currency;e[n]=(e[n]||0)+1}return e},{}),i=Object.keys(r)[0];Object.keys(r).reduce((e,t)=>{let n=Math.max(e,r[t]);return n===r[t]&&(i=t),n},0),this.set(`currency`,i)}toAmount(e,t,n){if(e==null||e===``)return;if(typeof e!=`object`||e.currency==null||e.currency===``)return null;let r=this.toNumber(e.amount);if(r==null||Number.isNaN(r))return null;let i={currency:e.currency,amount:r};if(n==null||t==null)return i;let a=this.toAmount(t);if(a==null)return i;let o=this.rates||{},s=i.amount*(o[i.currency]||1),c=a.amount*(o[a.currency]||1);return this.toNumber(s,c,n)===s?i:a}toValue(){return this.toAmount.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n==null)return;let r=this.toNumber(n.amount),i=this.rates;return i==null?r:r*(i[n.currency]||1)}getString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return n===void 0?``:n===null?`Invalid value`:this.renderValue(n)}getCurrency(e,t){let n=this.get(t,e);return n&&n.currency}getFormatter(e,t){let n=e+(t||``)||``,r=this._formatters=this._formatters||{};return r[n]||(r[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),r[n]}renderValue(e){let t=this.toAmount(e);return t==null?``:this.getFormatter(t.currency,this.locale).format(e.amount)}_amountValueChanged(e){let t=e.target.value,n=e.model.item,r=this.get(this.valuePath,n),i={amount:Number(t),currency:r.currency};this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toInputString(e){let t=this.toValue(e);return t==null?null:this.toNumber(t.amount)}_toInputStringAmount(e){let t=this.rates;if(t==null)return this._toInputString(e);let n=this.toValue(e);return n==null?null:(this.toNumber(n.amount)*(t[n.currency]||1)/(t[this.currency]||1)).toFixed(2)}_fromInputString(e,t){let n=this.toNumber(e);if(n!=null)return this.toValue({amount:n,currency:t&&this.get([`filter`,t,`currency`])||this.currency})}},customElements.define(`cosmoz-omnitable-amount-range-input`,Ut)})))()}var U,Gt,Kt,qt,W,Jt,Yt,Xt;function Zt(){return(Zt=e((()=>{P(),ut(),U=(e,t,n)=>{if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=U(t);return i==null?r:n(r,i)},Gt=e=>{let t=U(e);return t==null?null:t.toString()},Kt=({valuePath:e},t)=>{let n=U(e?I(t,e):t);return Gt(n)},qt=e=>Gt(e)??``,W=({valuePath:e,maximumFractionDigits:t},n)=>{if(n==null)return;let r=e?I(n,e):n,i=U(r);if(i!=null)return t===null?i:U(i.toFixed(t))},Jt=Je((e,t,n)=>{let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}),Yt=({valuePath:e,locale:t,minimumFractionDigits:n,maximumFractionDigits:r},i)=>{let a=e?I(i,e):i;if(a==null)return``;let o=U(a);if(o!=null)return Jt(t,n,r).format(o)},Xt=(e,t)=>n=>{let r=W(e,n);if(r==null)return!1;let i=W({...e,valuePath:`min`},t),a=W({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})))()}var G,K,Qt,$t,en,tn,nn,rn,an,on,sn;function cn(){return(cn=e((()=>{P(),Zt(),G=(e={},t,n,r)=>{if(t==null||t===``)return;if(typeof t!=`object`||t.currency==null||t.currency===``)return null;let i=U(t.amount);if(i==null||Number.isNaN(i))return null;let a={currency:t.currency,amount:i};if(r==null||n==null)return a;let o=G(e,n);if(o==null)return a;let s=a.amount*(e[a.currency]||1),c=o.amount*(e[o.currency]||1);return U(s,c,r)===s?a:o},K=({valuePath:e,rates:t},n)=>{if(n==null)return;let r=n;e!=null&&(r=I(n,e));let i=G(t,r);if(i==null)return;let a=U(i.amount);return t==null||a==null?a:a*(t?.[i.currency]||1)},Qt=(e,t)=>n=>{let r=K(e,n);if(r===void 0)return!1;let i=K({...e,valuePath:`min`},t),a=K({...e,valuePath:`max`},t);return i===void 0||a===void 0||!(r<i||r>a)},$t={},en=(e,t)=>{let n=e+(t||``)||``;return $t[n]||($t[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),$t[n]},tn=(e,t,n)=>{let r=G(e,t);return r==null?``:en(r.currency,n).format(r.amount)},nn=({valuePath:e,rates:t,locale:n},r)=>{let i=G(t,e?I(r,e):void 0);return i===void 0?``:i===null?`Invalid value`:tn(t,i,n)},rn=e=>e?e.amount+e.currency:``,an=e=>{if(e==null||e===``)return;let t=e.match(/^(-?[\d]+)([\D]+?)$/iu);if(!(!Array.isArray(t)||t.length<0))return{amount:Number(t[1]),currency:t[2]}},on=({valuePath:e},t)=>e?I(t,e)?.currency:null,sn=({valuePath:e},t)=>e?I(t,e)?.amount:void 0})))()}var q,ln,un,dn,fn,pn,mn;function J(){return(J=e((()=>{ut(),E(),q=Symbol(`column`),ln=e=>{let t=!0,n=e.map(e=>e.name);return e.forEach(e=>{e.name??(t=!1,console.error(`The name attribute needs to be set on all columns! Missing on column`,e))}),e.forEach(e=>{n.indexOf(e.name)!==n.lastIndexOf(e.name)&&(t=!1,console.error(`The name attribute needs to be unique among all columns! Not unique on column`,e))}),t},un=(e,t)=>{let n=e.valuePath??e.name;return{name:e.name,title:e.title,valuePath:n,groupOn:e.groupOn??n,sortOn:e.sortOn??n,noSort:e.noSort,disabledFiltering:t||e.disabledFiltering,minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,getString:e.getString,getComparableValue:e.getComparableValue,serializeFilter:e.serializeFilter,deserializeFilter:e.deserializeFilter,toXlsxValue:e.toXlsxValue,renderHeader:e.renderHeader,renderCell:e.renderCell,renderEditCell:e.renderEditCell,renderGroup:e.renderGroup,cellTitleFn:e.cellTitleFn,headerTitleFn:e.headerTitleFn,getFilterFn:e.getFilterFn,headerCellClass:e.headerCellClass,cellClass:e.cellClass,editable:e.editable,values:e.values,source:pt(e.computeSource),noLocalFilter:e.noLocalFilter,mini:e.mini,renderMini:e.renderMini,align:e.align,headerAlign:e.headerAlign,loading:e.loading,externalValues:e.externalValues,computeSource:e.computeSource,trueLabel:e.trueLabel,falseLabel:e.falseLabel,valueProperty:e.valueProperty,textProperty:e.textProperty,emptyLabel:e.emptyLabel,emptyValue:e.emptyValue,min:e.min,max:e.max,locale:e.locale,autoupdate:e.autoupdate,maximumFractionDigits:e.maximumFractionDigits,minimumFractionDigits:e.minimumFractionDigits,currency:e.currency,rates:e.rates,autodetect:e.autodetect,ownerTree:e.ownerTree,keyProperty:e.keyProperty,...e.getConfig?.(e),[q]:e}},dn=e=>e.isOmnitableColumn&&!e.hidden,fn=e=>{let t=e.filter(dn);return ln(t)?t:[]},pn=(e,t,n)=>(Array.isArray(t)?e.filter(e=>t.includes(e.name)):e.filter(e=>!e.disabled)).map(e=>un(e,n)),mn=(e,{enabledColumns:t,disabledFiltering:n})=>{let[r,i]=k([]);return g(()=>{let r,a=[],o=e.shadowRoot.querySelector(`#columnsSlot`),s=e=>()=>{let r=o.assignedNodes({flatten:!0});if(e)a=r;else{let e=r.filter(e=>!a.includes(e)),t=a.filter(e=>!r.includes(e)),n=[...e,...t].some(e=>e.isOmnitableColumn);if(a=r,!n)return}i(pn(fn(r),t,n))},c=e=>{cancelAnimationFrame(r),r=requestAnimationFrame(s(e?.type===`cosmoz-column-prop-changed`))};return c(),o.addEventListener(`slotchange`,c),e.addEventListener(`cosmoz-column-prop-changed`,c),()=>{o.removeEventListener(`slotchange`,c),e.removeEventListener(`cosmoz-column-prop-changed`,c),cancelAnimationFrame(r)}},[t,n]),r}})))()}var hn,gn,_n;function Y(){return(Y=e((()=>{P(),J(),hn=(e,t)=>Array.isArray(e)?e.map(e=>I(e,t)).filter((e,t,n)=>e!=null&&n.indexOf(e)===t):void 0,gn=({externalValues:e,values:t,valuePath:n},r)=>{if(e)return e;if(typeof t==`function`)return t;if(n!==void 0)return hn(r,n)},_n=(e,t,n,r)=>{let{valuePath:i}=t,a=i===void 0?void 0:I(n,i);if(r===a)return;i!==void 0&&Ne(n,i,r);let o={item:n,valuePath:i,value:r,oldValue:a,column:t[q]};e.dispatchEvent(new CustomEvent(`column-item-changed`,{bubbles:!0,composed:!0,detail:o}))}})))()}var vn;function yn(){return(yn=e((()=>{m(),R(),L(),w(),P(),V(),Wt(),cn(),Y(),vn=class extends B(F){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},currency:{type:String,notify:!0},autodetect:{type:Boolean,value:!1,notify:!0},rates:{type:Object,notify:!0},width:{type:String,value:`70px`},cellClass:{type:String,value:`amount-cell`},headerCellClass:{type:String,value:`amount-header-cell`},align:{type:String,value:`right`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=K({...e,valuePath:`min`},t),r=K({...e,valuePath:`max`},t);if(n!=null||r!=null)return Qt(e,t)}getString(e,t){return nn(e,t)}toXlsxValue(e,t){return nn(e,t)}getComparableValue(e,t){return K(e,t)}serializeFilter({rates:e},t){if(t==null)return;let n=G(e,t.min),r=G(e,t.max);if(n!=null||r!=null)return rn(n)+`~`+rn(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:an(n[1]),max:an(n[2])}:null}renderCell(e,{item:t}){return C`<span>${e.getString(e,t)}</span>`}renderEditCell(e,{item:t},n){return C`<cosmoz-input
			type="number"
			@change=${r=>n({amount:r.target.value,currency:I(t,e.valuePath)?.currency})}
			.value=${sn(e,t)}
		>
			<div slot="suffix">${on(e,t)}</div>
		</cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,rates:a,currency:o,autoupdate:s,autodetect:c,disabledFiltering:l,headerAlign:u,align:d},{filter:f},p,m){return C`<cosmoz-omnitable-amount-range-input
			.title=${e}
			?disabled=${l}
			.filter=${f}
			.values=${m}
			.rates=${a}
			.min=${t}
			.max=${n}
			.limits=${r}
			.locale=${i}
			.currency=${o}
			.autoupdate=${s}
			.autodetect=${c}
			.align=${u??d}
			@filter-changed=${({detail:{value:e}})=>p(t=>({...t,filter:e}))}
			@header-focused-changed=${({detail:{value:e}})=>p(t=>({...t,headerFocused:e}))}
		></cosmoz-omnitable-amount-range-input>`}computeSource(e,t){return gn(e,t)}},customElements.define(`cosmoz-omnitable-column-amount`,vn)})))()}var bn,xn,Sn,Cn,wn,Tn,En,Dn,On,kn,An,jn;function Mn(){return(Mn=e((()=>{ne(),ye(),pe(),P(),Y(),bn=(e,t)=>{if(!Array.isArray(e))return;let n=[];return e.reduce((e,t)=>Array.isArray(t)?(t.forEach(t=>{e.push(t)}),e):(e.push(t),e),[]).filter((e,r,i)=>{if(i.indexOf(e)!==r)return!1;if(t){let r=I(e,t);if(n.indexOf(r)!==-1)return!1;n.push(r)}return!0})},xn=(e,t,n)=>{if(e==null)return[];if(Array.isArray(e)){let r=bn(e,t);if(!r?.length)return[];let i=n??`label`,a=e=>String(typeof e==`object`&&e?I(e,i??``)??``:e??``);return r.sort((e,t)=>a(e).localeCompare(a(t)))}if(typeof e==`object`){let r=t??`id`,i=n??`label`;return Object.entries(e).map(([e,t])=>({[r]:e,[i]:t})).sort((e,t)=>String(e[i]??``).localeCompare(String(t[i]??``)))}return[]},Sn=(e,t,n)=>ue(t&&I(e,t)).map(j(n)),Cn=({valuePath:e,textProperty:t},n)=>Sn(n,e,t).filter(e=>e!=null).join(`, `),wn=Cn,Tn=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>a=>{let o=j(e),s=ue(I(a,t));return i.some(t=>s.length===0&&j(r||e)(t)===n||s.some(e=>o(e)===o(t)))},En=e=>t=>e(e=>({...e,filter:t})),Dn=e=>t=>e(e=>({...e,headerFocused:t})),On=e=>t=>e(e=>({...e,query:t})),kn=({emptyValue:e,emptyLabel:t,emptyProperty:n,textProperty:r,valueProperty:i},a)=>{let o=xn(a,i,r);return!t||e===void 0||!r||!(n||i)||!o?o:[{[r]:t,[n||i]:e},...o]},An=(e,t)=>kn(e,hn(t,e.valuePath)),jn=e=>class extends e{static get properties(){return{textProperty:{type:String},valueProperty:{type:String},emptyLabel:{type:String},emptyValue:{type:Object},emptyProperty:{type:String}}}getConfig(e){return{emptyProperty:e.emptyProperty}}getString(e,t){return Cn(e,t)}toXlsxValue(e,t){return wn(e,t)}getComparableValue({valuePath:e,valueProperty:t},n){let r=I(n,e);return t==null?r:ue(r).map(j(t)).sort().join(` `)}getFilterFn(e,t){if(t&&Array.isArray(t)&&t.length!==0)return Tn(e,t)}serializeFilter(e,t){return Array.isArray(t)&&t.length===0?null:JSON.stringify(t)}deserializeFilter(e,t){if(t==null)return null;try{return JSON.parse(decodeURIComponent(t))}catch(e){let n=e;return console.error(`Failed to deserialize filter value:`,{error:n?.name,message:n?.message,filterLength:typeof t==`string`?t.length:null}),null}}computeSource(e,t){return e.externalValues||typeof e.values==`function`?async(...t)=>kn(e,await Promise.resolve(Se(e.values,...t))):An(e,t)}}})))()}var Nn,Pn,Fn;function In(){return(In=e((()=>{_e(),Ke(),L(),w(),ne(),pe(),Mn(),V(),E(),P(),J(),Nn=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?ce(t):j(n),a=ue(e&&I(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},Pn=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>{let a=j(e),o=j(r||e),s=new Set(i.filter(e=>e.excluded).map(e=>a(e.item))),c=new Set(i.filter(e=>!e.excluded).map(e=>a(e.item))),l=i.some(e=>e.excluded&&o(e.item)===n),u=i.some(e=>!e.excluded&&o(e.item)===n);return e=>{let n=ue(I(e,t)).map(a);return n.length===0?!l&&(u||c.size===0):!n.some(e=>s.has(e))&&(c.size===0||n.some(e=>c.has(e)))}},Fn=class extends jn(B(F)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return C`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},n){return C`<cosmoz-input
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${z(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:n},r,i){return C`<cosmoz-autocomplete-excluding
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
			.itemRenderer=${e[q]?.itemRenderer}
			.value=${t}
			.text=${n}
			.limit=${e.limit}
			@opened-changed=${e=>Dn(r)(e.detail.value)}
			@value-changed=${v(En(r))}
			@text-changed=${v(On(r))}
			>${M(e.loading,()=>C`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-excluding
		>`}getComparableValue(e,t){return Nn(e,t)}getFilterFn(e,t){if(t&&Array.isArray(t)&&t.length!==0)return Pn(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete-excluding`,Fn)})))()}var Ln,Rn;function zn(){return(zn=e((()=>{_e(),Ke(),L(),w(),ne(),pe(),Mn(),V(),P(),J(),Ln=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?ce(t):j(n),a=ue(e&&I(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},Rn=class extends jn(B(F)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return C`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},n){return C`<cosmoz-input
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${z(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:n},r,i){return C`<cosmoz-autocomplete-ui
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
			.itemRenderer=${e[q]?.itemRenderer}
			.value=${t}
			.text=${n}
			.limit=${e.limit}
			.onChange=${En(r)}
			@opened-changed=${e=>Dn(r)(e.detail.value)}
			.onText=${On(r)}
			>${M(e.loading,()=>C`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}getComparableValue(e,t){return Ln(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete`,Rn)})))()}var Bn,Vn,Hn,Un,Wn,Gn,Kn,qn,Jn,Yn,Xn,Zn,Qn,$n;function er(){return(er=e((()=>{L(),V(),_e(),ut(),P(),w(),Bn=(e,t)=>t.find(({value:t})=>e===t),Vn=(e,t,n)=>{let r=Bn(t,n);return r?r.text:e},Hn=(e,t,n,r)=>Vn(e,I(t,n),r),Un=({valuePath:e},t,n)=>Bn(I(t,e),n),Wn=e=>t=>{e(e=>({...e,filter:t?.[0]?.value??null}))},Gn=e=>t=>{e(e=>({...e,headerFocused:t}))},Kn=e=>t=>{e(e=>({...e,query:t}))},qn=e=>t=>e(t?.[0]?.value),Jn=({valuePath:e,trueLabel:t,falseLabel:n},r)=>I(r,e)?t:n,Yn=({valuePath:e},t)=>n=>I(n,e)===t,Xn=pt((e,t)=>[{text:e,value:!0},{text:t,value:!1}]),Zn=({valuePath:e,trueLabel:t,falseLabel:n},r)=>e?I(r,e)?t:n:``,Qn=(e,t)=>{try{return JSON.parse(t)}catch{return null}},$n=class extends B(F){static get properties(){return{trueLabel:{type:String,value:`True`},falseLabel:{type:String,value:`False`},flex:{type:String,value:`0`},cellClass:{type:String,value:`boolean-cell`}}}getString(e,t){return Jn(e,t)}renderCell(e,{item:t}){return Jn(e,t)}renderEditCell(e,{item:t},n){let{trueLabel:r,falseLabel:i}=e;return C`<cosmoz-autocomplete
			variant="inline"
			.title=${Hn(e.title,t,e.valuePath,Xn(r,i))}
			.source=${Xn(r,i)}
			.textProperty=${`text`}
			.value=${Un(e,t,Xn(r,i))}
			.onChange=${qn(n)}
			.limit=${1}
			>${M(e.loading,()=>C`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete
		>`}renderHeader(e,{filter:t,query:n},r,i){return C`<cosmoz-autocomplete-ui
			?disabled=${e.disabledFiltering}
			variant="inline"
			.label=${e.title}
			.title=${Hn(e.title,t,e.valuePath,i)}
			.source=${i}
			.textProperty=${`text`}
			.value=${Bn(t,i)}
			.text=${n}
			.onChange=${Wn(r)}
			@opened-changed=${e=>Gn(r)(e.detail.value)}
			.onText=${Kn(r)}
			.limit=${1}
			>${M(e.loading,()=>C`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}computeSource({trueLabel:e,falseLabel:t}){return Xn(e,t)}getFilterFn(e,t){if(t!=null)return Yn(e,t)}toXlsxValue(e,t){return Zn(e,t)}deserializeFilter(e,t){return Qn(e,t)}},customElements.define(`cosmoz-omnitable-column-boolean`,$n)})))()}var tr;function nr(){return(nr=e((()=>{Ge(),Bt(),tr=e=>class extends zt(e){static get properties(){return{max:{type:Date,value:null},min:{type:Date,value:null},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},formatter:{type:Object,computed:`_computeFormatter(locale)`}}}toDate(e,t,n){if(e==null||e===``)return;let r=e;if(r instanceof Date||(typeof e==`string`&&(r=this.getAbsoluteISOString(r)),r=new Date(r)),Number.isNaN(r.getTime()))return null;if(n==null||t==null)return r;let i=this.toDate(t);if(i==null)return r;let a=this.getComparableValue(r);return n(a,this.getComparableValue(i))===a?r:i}toValue(){return this.toDate.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n!=null)return this.toNumber(n.getTime())}getString(e,t=this.valuePath,n=this.formatter){let r=this.toValue(this.get(t,e));return r===void 0?``:r===null?`Invalid Date`:this.renderValue(r,n)}getAbsoluteISOString(e){return e.length===19?e+this._getTimezoneString(e):e}_getTimezoneString(e){let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`}renderValue(e,t=this.formatter){if(t==null)return;let n=this.toValue(e);if(n!=null)return t.format(n)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(0,10)}_dateValueChanged(e){let t=e.currentTarget.value,n=e.model.item,r=this.get(this.valuePath,n),i=this._fromInputString(t);this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toLocalISOString(e){return Le(e)}}})))()}var rr;function ir(){return(ir=e((()=>{m(),L(),A(),w(),nr(),Lt(),H(),Ht(),rr=class extends tr(Vt(F)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return C`
			${M(this.disabled,()=>C`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>C`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${It({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:C`
							<h3>${this.title}</h3>
							<cosmoz-input
								type="date"
								label=${O(`From date`)}
								min=${this._toInputString(this._limit.fromMin)}
								max=${this._toInputString(this._limit.fromMax)}
								.value=${this._filterInput?.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-input>
							<cosmoz-input
								type="date"
								label=${O(`Until date`)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
								.value=${this._filterInput?.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-input>
						`})}
				`)}
		`}_fromInputString(e,t){let n=this.toDate(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n}_filterInputChanged(e,t){let n=e.path.split(`.`)[1]&&e.value;if(n&&n.match(/^0+/u)){this._limitInputDebouncer.cancel();return}super._filterInputChanged(e,t)}},customElements.define(`cosmoz-omnitable-date-range-input`,rr)})))()}var ar,or,sr,X,Z,cr,lr,ur,dr,fr,pr,mr,hr,gr,_r;function vr(){return(vr=e((()=>{Ge(),P(),Zt(),ar=e=>{let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`},or=e=>e.length===19?e+ar(e):e,sr=e=>{if(e==null||e===``)return;let t=e;return!(t instanceof Date)&&(typeof e==`string`&&(t=or(t)),t=Ue(t),!t)||Number.isNaN(t.getTime())?null:t},X=({valuePath:e},t)=>{if(t==null)return;let n=t;e!=null&&(n=I(t,e));let r=sr(n);if(r!=null)return U(r.getTime())},Z=(e,t,n)=>{let r=sr(e);if(r==null)return null;if(n==null||t==null)return r;let i=Z(t);if(i==null)return r;let a=X({},r),o=X({},i);return a==null||o==null||n(a,o)===a?r:i},cr=(e,t)=>{if(t==null)return;let n=Z(e);if(n!=null)return t.format(n)},lr={},ur=e=>{let t=e||``;return lr[t]||(lr[t]=new Intl.DateTimeFormat(e||void 0)),lr[t]},dr=({valuePath:e,locale:t},n)=>{let r=I(n,e||``);return r===void 0?``:(r=Z(r),r===null?`Invalid Date`:cr(r,ur(t)))},fr=e=>{let t=Z(e);if(t==null)return null;let n=Le(t);return n==null?null:n.slice(0,10)},pr=({valuePath:e},t)=>fr(I(t,e||``)),mr=(e,t)=>{let n=Z(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n},hr=e=>fr(e)??``,gr=({valuePath:e},t)=>{if(!e)return``;let n=Z(I(t,e));if(!n)return``;let r=Z(Le(n));return r?(r.setHours(0,0,0,0),r):``},_r=(e,t)=>n=>{let r=X(e,n);if(r==null)return!1;let i=X({...e,valuePath:`min`},t),a=X({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})))()}var yr;function br(){return(br=e((()=>{m(),L(),w(),V(),ir(),Y(),vr(),R(),yr=class extends B(F){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`date-header-cell`},width:{type:String,value:`100px`},minWidth:{type:String,value:`82px`},flex:{type:String,value:`0`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=X({...e,valuePath:`min`},t),r=X({...e,valuePath:`max`},t);if(n!=null||r!=null)return _r(e,t)}getString(e,t){return dr(e,t)}toXlsxValue(e,t){return gr(e,t)}getComparableValue(e,t){return X(e,t)}serializeFilter(e,t){if(t==null)return;let n=Z(t.min),r=Z(t.max);if(n!=null||r!=null)return hr(n)+`~`+hr(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Z(n[1]),max:Z(n[2])}:null}renderCell(e,{item:t}){return C`<div class="omnitable-cell-date">
			${dr(e,t)}
		</div>`}renderEditCell(e,{item:t},n){return C`<cosmoz-input
			type="date"
			@change=${e=>n(mr(e.target.value))}
			.value=${pr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,disabledFiltering:a,headerAlign:o,align:s},{filter:c},l,u){return C`<cosmoz-omnitable-date-range-input
			.title=${e}
			?disabled=${a}
			.filter=${c}
			.values=${u}
			.min=${t}
			.max=${n}
			.limits=${r}
			.locale=${i}
			.align=${o??s}
			@filter-changed=${({detail:{value:e}})=>l(t=>({...t,filter:e}))}
			@header-focused-changed=${({detail:{value:e}})=>l(t=>({...t,headerFocused:e}))}
		></cosmoz-omnitable-date-range-input>`}computeSource(e,t){return gn(e,t)}},customElements.define(`cosmoz-omnitable-column-date`,yr)})))()}var xr;function Sr(){return(Sr=e((()=>{L(),A(),w(),nr(),Lt(),H(),Ht(),xr=class extends tr(Vt(F)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return C`
			${M(this.disabled,()=>C`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>C`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${It({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:C`
							<h3>${this.title}</h3>
							<cosmoz-datetime-input
								date-label=${O(`From date`)}
								time-label=${O(`From time`)}
								min=${this._toInputString(this._limit.fromMin)}
								max=${this._toInputString(this._limit.fromMax)}
								step=${this.filterStep}
								.value=${this._filterInput?.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-datetime-input>
							<cosmoz-datetime-input
								date-label=${O(`To date`)}
								time-label=${O(`To time`)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
								step=${this.filterStep}
								.value=${this._filterInput?.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-datetime-input>
						`})}
				`)}
		`}_toInputString(e){let t=this.toValue(e);if(t!=null)return this._toLocalISOString(t).slice(0,19)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})}},customElements.define(`cosmoz-omnitable-datetime-range-input`,xr)})))()}var Cr,wr,Tr,Er,Dr,Or;function kr(){return(kr=e((()=>{P(),vr(),Cr={},wr=e=>{let t=e||``;return Cr[t]||(Cr[t]=new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})),Cr[t]},Tr=({valuePath:e,locale:t},n)=>{let r=Z(I(n,e||``));return r===void 0?``:r===null?`Invalid Date`:cr(r,wr(t))},Er=({valuePath:e},t)=>e?I(t,e):``,Dr=e=>{let t=Z(e);return t==null?``:t.toISOString().slice(0,19).replace(/:/gu,`.`)},Or=e=>{if(e!=null&&e!==``&&typeof e==`string`)return Z(e.replace(/\./gu,`:`)+`Z`)}})))()}var Ar;function jr(){return(jr=e((()=>{$e(),R(),L(),w(),V(),Sr(),Y(),vr(),kr(),Ar=class extends B(F){static get is(){return`cosmoz-omnitable-column-datetime`}static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`datetime-header-cell`},width:{type:String,value:`210px`},minWidth:{type:String,value:`128px`},flex:{type:String,value:`0`},filterStep:{type:Number,value:1}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=X({...e,valuePath:`min`},t),r=X({...e,valuePath:`max`},t);if(n!=null||r!=null)return _r(e,t)}getString(e,t){return Tr(e,t)}toXlsxValue(e,t){return Er(e,t)}getComparableValue(e,t){return X(e,t)}serializeFilter(e,t){if(t==null)return;let n=Z(t.min),r=Z(t.max);if(n!=null||r!=null)return Dr(n)+`~`+Dr(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Or(n[1]),max:Or(n[2])}:null}renderCell(e,{item:t}){return Tr(e,t)}renderEditCell(e,{item:t},n){return C`<cosmoz-input
			type="text"
			@change=${e=>n(mr(e.target.value))}
			.value=${Tr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,filterStep:a,disabledFiltering:o,headerAlign:s,align:c},{filter:l},u,d){return C`<cosmoz-omnitable-datetime-range-input
			.title=${e}
			?disabled=${o}
			.filter=${l}
			.values=${d}
			.min=${t}
			.max=${n}
			.limits=${r}
			.locale=${i}
			.filterStep=${a}
			.align=${s??c}
			@filter-changed=${({detail:{value:e}})=>u(t=>({...t,filter:e}))}
			@header-focused-changed=${({detail:{value:e}})=>u(t=>({...t,headerFocused:e}))}
		></cosmoz-omnitable-datetime-range-input>`}computeSource(e,t){return gn(e,t)}},customElements.define(Ar.is,Ar)})))()}var Mr;function Nr(){return(Nr=e((()=>{_e(),Ke(),L(),w(),Mn(),V(),Mr=class extends jn(B(F)){renderCell({valuePath:e,textProperty:t},{item:n}){let r=Sn(n,e,t).map(e=>C`<li>${e}</li>`);return C`
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
		`}renderEditCell(){return`not implemented`}renderHeader(e,{filter:t,query:n},r,i){return C`<cosmoz-autocomplete-ui
			variant="inline"
			class="external-values-${e.externalValues}"
			?disabled=${e.disabledFiltering}
			.label=${e.title}
			.source=${i}
			.textProperty=${e.textProperty}
			.value=${t}
			.text=${n}
			.onChange=${En(r)}
			@opened-changed=${e=>Dn(r)(e.detail.value)}
			.onText=${On(r)}
			>${M(e.loading,()=>C`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		> `}},customElements.define(`cosmoz-omnitable-column-list-horizontal`,Mr)})))()}var Pr,Fr;function Ir(){return(Ir=e((()=>{se(),E(),A(),Pr=D`
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
`,Fr=({items:e})=>{let[t,n]=k(!1),r=Array.isArray(e)?e:[],i=p(()=>Math.max(0,r.length-1),[r]);if(r.length===0)return null;let a=r.length>2,o=r[0],s=a&&!t?[]:r.slice(1),c=e=>{e.stopPropagation(),e.preventDefault(),n(e=>!e)};return C`
		<ul>
			<li>
				<span>${o}</span>
			</li>
			<li class="see-more" ?hidden=${!a||t}>
				<a href="#" @click=${c}
					>${O(`and {0} more`,{0:i})}</a
				>
			</li>
			${s.map(e=>C`
					<li>
						<span class="item">${e}</span>
					</li>
				`)}
			<li class="see-less" ?hidden=${!a||!t}>
				<a href="#" @click=${c}>${O(`See less`)}</a>
			</li>
		</ul>
	`},customElements.define(`cosmoz-omnitable-column-list-data`,N(Fr,{styleSheets:[fe(Pr)]}))})))()}var Lr;function Rr(){return(Rr=e((()=>{Ir(),L(),w(),_e(),Mn(),V(),J(),Lr=class extends jn(B(F)){static get properties(){return{keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,textual:e.textual}}renderCell({valuePath:e,textProperty:t},{item:n}){return C`<cosmoz-omnitable-column-list-data
			.items=${Sn(n,e,t)}
		></cosmoz-omnitable-column-list-data>`}renderEditCell(e,{item:t},n){return C`<cosmoz-input
			type="text"
			.value=${Cn(e,t)}
			@change=${e=>n(e.target.value.split(/,\s*/gu))}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:n},r,i){return C`<cosmoz-autocomplete-ui
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
			.itemRenderer=${e[q]?.itemRenderer}
			.value=${t}
			.text=${n}
			.onChange=${En(r)}
			@opened-changed=${e=>Dn(r)(e.detail.value)}
			.onText=${On(r)}
			>${M(e.loading,()=>C`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}},customElements.define(`cosmoz-omnitable-column-list`,Lr)})))()}var zr;function Br(){return(Br=e((()=>{m(),L(),A(),w(),Lt(),H(),Bt(),Ht(),zr=class extends zt(Vt(F)){static get properties(){return{maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},formatter:{type:Object,computed:`_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)`},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},headerFocused:{type:Boolean,value:!1}}}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return C`
			${M(this.disabled,()=>C`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>C`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${It({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:C`
							<h3>${this.title}</h3>
							<cosmoz-input
								class=${this._fromClasses}
								type="number"
								label=${O(`From`)}
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
								label=${O(`To`)}
								.value=${this._filterInput?.max}
								@value-changed=${e=>{this.set(`_filterInput.max`,e.detail.value)}}
								@blur=${e=>this._onBlur(e)}
								@keydown=${e=>this._onKeyDown(e)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
							></cosmoz-input>
						`})}
				`)}
		`}_computeFormatter(e,t,n){let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}getComparableValue(e,t){if(e==null)return;let n=e;if(t!=null&&(n=this.get(t,e)),n=this.toValue(n),n==null)return;let r=this.maximumFractionDigits;return r===null?n:this.toValue(n.toFixed(r))}renderValue(e,t=this.formatter){let n=this.toNumber(e);if(n!=null)return t.format(n)}},customElements.define(`cosmoz-omnitable-number-range-input`,zr)})))()}var Vr;function Hr(){return(Hr=e((()=>{m(),R(),L(),w(),V(),P(),Br(),Y(),Zt(),Vr=class extends B(F){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},cellClass:{type:String,value:`number-cell`},width:{type:String,value:`30px`},minWidth:{type:String,value:`30px`},headerCellClass:{type:String,value:`number-header-cell`},maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},align:{type:String,value:`right`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=W({...e,valuePath:`min`},t),r=W({...e,valuePath:`max`},t);if(n!=null||r!=null)return Xt(e,t)}getString(e,t){return Yt(e,t)}toXlsxValue({valuePath:e},t){return I(t,e)}getComparableValue(e,t){return W(e,t)}serializeFilter(e,t){if(t==null)return;let n=U(t.min),r=U(t.max);if(n!=null||r!=null)return qt(n)+`~`+qt(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:U(n[1]),max:U(n[2])}:null}renderCell(e,{item:t}){return C`<div class="omnitable-cell-number">
			${Yt(e,t)}
		</div>`}renderEditCell(e,{item:t},n){return C`<cosmoz-input
			type="number"
			@change=${e=>n(e.target.value)}
			.value=${Kt(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,maximumFractionDigits:a,minimumFractionDigits:o,autoupdate:s,disabledFiltering:c,headerAlign:l,align:u},{filter:d},f,p){return C`<cosmoz-omnitable-number-range-input
			.title=${e}
			?disabled=${c}
			.filter=${d}
			.values=${p}
			.min=${t}
			.max=${n}
			.limits=${r}
			.locale=${i}
			.maximumFractionDigits=${a}
			.minimumFractionDigits=${o}
			.autoupdate=${s}
			.align=${l??u}
			@filter-changed=${({detail:{value:e}})=>f(t=>({...t,filter:e}))}
			@header-focused-changed=${({detail:{value:e}})=>f(t=>({...t,headerFocused:e}))}
		></cosmoz-omnitable-number-range-input>`}computeSource(e,t){return gn(e,t)}},customElements.define(`cosmoz-omnitable-column-number`,Vr)})))()}var Ur;function Wr(){return(Wr=e((()=>{m(),L(),A(),w(),nr(),Lt(),H(),Ht(),Ur=class extends tr(Vt(F)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return C`
			${M(this.disabled,()=>C`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>C`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${It({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:C`
							<h3>${this.title}</h3>
							<cosmoz-input
								type="time"
								label=${O(`From time`)}
								step=${this.filterStep}
								.value=${this._filterInput.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-input>
							<cosmoz-input
								type="time"
								label=${O(`Until time`)}
								step=${this.filterStep}
								.value=${this._filterInput.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-input>
						`})}
				`)}
		`}get _fixedDate(){return`1970-01-01`}toDate(e,t,n){let r=typeof e==`string`&&e.length>3&&e.length<=9?this.getAbsoluteISOString(this._fixedDate+`T`+e):e;return super.toDate(r,t,n)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(11,19)}getComparableValue(e,t){if(e==null)return;let n=this._toInputString(t==null?e:this.get(t,e));if(n!=null&&(n=this.toValue(this.getAbsoluteISOString(this._fixedDate+`T`+n)),n!=null))return this.toNumber(n.getTime())}_timeValueChanged(e){let t=e.target.value,n=e.model.item,r=this.toDate(n.date),i=this.toDate(r==null?t:r.toISOString().slice(0,10)+`T`+t);i??(this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,(e=>e).bind(this)))}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})}},customElements.define(`cosmoz-omnitable-time-range-input`,Ur)})))()}var Q,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r;function ei(){return(ei=e((()=>{Ge(),P(),vr(),Zt(),Q=(e,t,n)=>{let r=typeof e==`string`&&e.length>3&&e.length<=9?or(`1970-01-01T`+e):e;return Z(r,t,n)},Gr={},Kr=e=>{let t=e||``;return Gr[t]||(Gr[t]=new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})),Gr[t]},qr=({valuePath:e,locale:t},n)=>{let r=Q(I(n,e||``));return r===void 0?``:r===null?`Invalid Date`:cr(r,Kr(t))},Jr=(e,t)=>e.valuePath?qr(e,t):``,Yr=e=>{let t=Q(e);if(t==null)return null;let n=Le(t);return n&&n.slice(11,19)},Xr=({valuePath:e},t)=>{if(t==null)return;let n=Yr(e==null?t:I(t,e));if(n==null)return;let r=Q(or(`1970-01-01T`+n));return r==null?r:U(r.getTime())},Zr=(e,t)=>n=>{let r=Xr(e,n);if(r==null)return!1;let i=Xr({...e,valuePath:`min`},t),a=Xr({...e,valuePath:`max`},t);return i==null||a==null?!1:!(r<i||r>a)},Qr=e=>{let t=Q(e);return t==null?``:t.toISOString().slice(11,19).replace(/:/gu,`.`)},$r=e=>{if(e!=null&&e!==``)return Q(typeof e==`string`?e.replace(/\./gu,`:`)+`Z`:e)}})))()}var ti;function ni(){return(ni=e((()=>{m(),R(),L(),w(),V(),Wr(),Y(),ei(),ti=class extends B(F){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`time-header-cell`},minWidth:{type:String,value:`63px`},width:{type:String,value:`210px`},flex:{type:String,value:`0`},filterStep:{type:String,value:`1`}}}getFilterFn(e,t){let n=Xr({...e,valuePath:`min`},t),r=Xr({...e,valuePath:`max`},t);if(n!=null||r!=null)return Zr(e,t)}getString(e,t){return qr(e,t)}toXlsxValue(e,t){return Jr(e,t)}getComparableValue(e,t){return Xr(e,t)}serializeFilter(e,t){if(t==null)return;let n=Q(t.min),r=Q(t.max);if(n!=null||r!=null)return Qr(n)+`~`+Qr(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:$r(n[1]),max:$r(n[2])}:null}renderCell(e,{item:t}){return qr(e,t)}renderEditCell(e,{item:t},n){return C`<cosmoz-input
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${qr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,locale:r,filterStep:i,disabledFiltering:a,headerAlign:o,align:s},{filter:c},l,u){return C`<cosmoz-omnitable-time-range-input
			.title=${e}
			?disabled=${a}
			.filter=${c}
			.values=${u}
			.min=${t}
			.max=${n}
			.locale=${r}
			.filterStep=${i}
			.align=${o??s}
			@filter-changed=${({detail:{value:e}})=>l(t=>({...t,filter:e}))}
			@header-focused-changed=${({detail:{value:e}})=>l(t=>({...t,headerFocused:e}))}
		></cosmoz-omnitable-time-range-input>`}computeSource(e,t){return gn(e,t)}},customElements.define(`cosmoz-omnitable-column-time`,ti)})))()}function ri(){return(ri=e((()=>{yn(),In(),zn(),er(),br(),jr(),Nr(),Rr(),Hr(),ni()})))()}var ii;function ai(){return(ai=e((()=>{E(),w(),ii=({column:e,item:t,selected:n,folded:r,group:i})=>{if(!e)return me;let a=e.renderGroup??e.renderCell;return a?a(e,{item:t,selected:n,folded:r,group:i}):me},customElements.define(`cosmoz-omnitable-group-row`,N(ii,{useShadowDOM:!1}))})))()}var oi;function si(){return(si=e((()=>{E(),w(),oi=e=>{let{column:t}=e;return x(()=>{let n=0,r=0,i=i=>{e.dispatchEvent(new CustomEvent(`column-resize`,{bubbles:!0,composed:!0,detail:{newWidth:Math.ceil(r+i.pageX-n),column:t}}))},a=()=>{document.removeEventListener(`pointermove`,i),document.removeEventListener(`pointerup`,a)},o=t=>{n=t.pageX,r=e.previousElementSibling.getBoundingClientRect().width,document.addEventListener(`pointermove`,i),document.addEventListener(`pointerup`,a)};return e.addEventListener(`pointerdown`,o),()=>e.removeEventListener(`pointerdown`,o)},[t]),me},customElements.define(`cosmoz-omnitable-resize-nub`,N(oi))})))()}var ci,li,ui,di;function fi(){return(fi=e((()=>{E(),ge(),S(),ci=({column:e,on:t,descending:n,setOn:r,setDescending:i})=>{let{name:a,title:o}=e??{};return C`<button
		class="sg"
		title=${ie(o)}
		data-on=${ie(a===t&&(n?`desc`:`asc`)||void 0)}
		@click=${e=>{let t=e.currentTarget?.dataset.on;t||(r(a),i(!1)),t===`asc`?i(!0):t===`desc`&&(r(),i(!1))}}
	>
		<span>${o}</span> ${a===t?he({width:`12`,height:`12`}):ve({width:`12`,height:`12`})}
	</button>`},li=({columns:e,...t})=>e?.map(e=>ci({column:e,...t})),ui=()=>C`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,groupOn:t,setGroupOn:n,groupOnDescending:r,setGroupOnDescending:i}={})=>li({columns:e?.filter?.(e=>e.groupOn),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`,di=()=>C`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,sortOn:t,setSortOn:n,descending:r,setDescending:i}={})=>li({columns:e?.filter?.(e=>e.sortOn&&!e.noSort),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`})))()}function pi(e,t,{suffix:n=``,read:r,write:i,ready:a=!0,multi:s}={}){let c=oe({param:t,suffix:n,link:s?_i:gi,write:i??T}),l=p(()=>{if(t==null)return!1;if(s){let e=Xe(t+n);return Object.keys(e).length>0}return Qe(t+n)!==void 0},[]),[u,d]=k(()=>{if(t==null)return e;if(s){let i=Xe(t+n,r);return Object.keys(i).length>0?i:e}return Qe(t+n,r)??e}),f=o(e=>d(t=>{let n=Se(e,t);return c.param!=null&&et(c.link(c.param+c.suffix,n,c.write),null,{notify:!1}),n}),[]);return x(()=>{c.param!=null&&a&&!l&&e!=null&&f(e)},[a]),[u,f]}var mi,hi,gi,_i;function vi(){return(vi=e((()=>{at(),ye(),ae(),lt(),E(),mi=e=>(t,n,r=T)=>{let i=nt(),a=new URLSearchParams(i.hash.replace(`#`,``));return e(t,n,r,a),`#!`+Object.assign(i,{hash:a}).href.replace(location.origin,``)},hi=e=>e==null||e===``,gi=mi((e,t,n,r)=>hi(n(t))?r.delete(e):r.set(e,n(t))),_i=mi((e,t,n,r)=>{let i=Object.entries(t),a=i.map(n).filter(([,e])=>e!==void 0);if(a.length===0&&i.length>0)return;let o=e;Array.from(r.keys()).filter(e=>e.startsWith(o)).forEach(e=>r.delete(e)),a.forEach(([t,n])=>hi(n)?r.delete(e+t):r.set(e+t,n))})})))()}var yi,bi,xi,Si,Ci;function wi(){return(wi=e((()=>{E(),vi(),yi=e=>[!0,`true`,1,`yes`,`on`].includes(e),bi=e=>e===``||(e==null?void 0:yi(e)),xi=(e,t,n)=>o(r=>{e(r),n(e=>({...e,[t]:r}))},[e,t,n]),Si=(e,t,{settings:n,setSettings:r,resetRef:i,ready:a=!0})=>{let[s,c]=pi(n.sortOn,t,{suffix:`-sortOn`,ready:a}),[l,u]=pi(bi(n.descending),t,{suffix:`-descending`,read:bi,ready:a}),[d,f]=pi(n.groupOn,t,{suffix:`-groupOn`,ready:a}),[m,h]=pi(bi(n.groupOnDescending),t,{suffix:`-groupOnDescending`,read:bi,ready:a}),g=p(()=>e.find(e=>e.name===s),[e,s]),_=p(()=>e.find(e=>e.name===d),[e,d]),v={groupOn:d,setGroupOn:xi(f,`groupOn`,r),groupOnDescending:m,setGroupOnDescending:xi(h,`groupOnDescending`,r),sortOn:s,setSortOn:xi(c,`sortOn`,r),descending:l,setDescending:xi(u,`descending`,r),columns:e},y=p(()=>v,Object.values(v)),b=o(e=>{c(typeof e.sortOn==`string`?e.sortOn:void 0),f(typeof e.groupOn==`string`?e.groupOn:void 0),u(typeof e.descending==`boolean`?e.descending:void 0),h(typeof e.groupOnDescending==`boolean`?e.groupOnDescending:void 0)},[]);return x(()=>void(i.current=b),[]),{...y,sortAndGroup:y,groupOnColumn:_,sortOnColumn:g}},Ci=Ce(void 0),customElements.define(`sort-and-group-provider`,Ci.Provider),customElements.define(`sort-and-group-consumer`,N(({render:e})=>e(Te(Ci)),{useShadowDOM:!1}))})))()}var Ti,Ei;function Di(){return(Di=e((()=>{E(),be(),si(),fi(),wi(),Ti=({data:e,columns:t,groupOnColumn:r,filters:i,setFilterState:a,sortAndGroup:{sortOn:o,setSortOn:s,descending:c,setDescending:l}={}})=>n(t,e=>e.name,t=>[C`<div
				class="cell ${t.headerCellClass} header-cell"
				align="${t.headerAlign??t.align??`left`}"
				part="cell header-cell cell-${t.name} header-cell-${t.name}"
				?hidden="${t===r}"
				title="${t.headerTitleFn(t)}"
				name="${t.name}"
			>
				${t.renderHeader(t,i[t.name]??{},e=>a(t.name,e),t.source(t,e))}
				${M(!t.noSort,()=>ci({on:o,setOn:s,descending:c,setDescending:l,column:t}))}
			</div>`,C`<cosmoz-omnitable-resize-nub
				.column="${t}"
				name="${t.name}"
			></cosmoz-omnitable-resize-nub>`]),Ei=({columns:e,settingsConfig:t,hideSelectAll:n,...r})=>{let i=Te(Ci);return C`
		${M(e,e=>Ti({columns:e,sortAndGroup:i,...r}))}
		${M(!n,()=>C` <cosmoz-omnitable-settings
					.config=${t}
					part="settings"
				></cosmoz-omnitable-settings>`)}
	`},customElements.define(`cosmoz-omnitable-header-row`,N(Ei,{useShadowDOM:!1}))})))()}var Oi,ki;function Ai(){return(Ai=e((()=>{se(),E(),Oi=D`
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
`,ki=({column:e})=>C`
	<div class="label" title="${e.title}" part="item-expand-label">
		${e.title}
	</div>
	<div class="value" part="item-expand-value">
		<slot></slot>
	</div>
`,customElements.define(`cosmoz-omnitable-item-expand-line`,N(ki,{styleSheets:[fe(Oi)]}))})))()}var ji;function Mi(){return(Mi=e((()=>{E(),w(),Ai(),ji=({columns:e,item:t,selected:n,expanded:r,groupOnColumn:i})=>Ye(e,e=>C`<cosmoz-omnitable-item-expand-line
				.column=${e}
				?hidden=${e===i}
				exportparts="item-expand-label, item-expand-value"
				>${e.renderCell(e,{item:t,selected:n,expanded:r})}</cosmoz-omnitable-item-expand-line
			>`),customElements.define(`cosmoz-omnitable-item-expand`,N(ji,{useShadowDOM:!1}))})))()}var Ni,Pi;function Fi(){return(Fi=e((()=>{E(),be(),Ni=(e,t,n)=>e.editable?e.renderEditCell(e,t,n(e,t.item)):e.renderCell(e,t),Pi=({columns:e,groupOnColumn:t,item:r,index:i,selected:a,expanded:o,onItemChange:s})=>n(e,e=>e.name,e=>C`<div
				class="cell itemRow-cell ${e.cellClass??``}"
				align="${e.align??`left`}"
				part="cell itemRow-cell cell-${e.name} itemRow-cell-${e.name}"
				?hidden="${e===t}"
				?editable="${e.editable}"
				title="${e.cellTitleFn(e,r)}"
				name="${e.name}"
			>
				${Ni(e,{item:r,index:i,selected:a,expanded:o},s)}
			</div>`),customElements.define(`cosmoz-omnitable-item-row`,N(Pi,{useShadowDOM:!1}))})))()}var Ii,Li;function Ri(){return(Ri=e((()=>{se(),Ii=D`
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
`,Li=D`
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

	${Ii}

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
`})))()}var zi,Bi;function Vi(){return(Vi=e((()=>{qe(),zi=e=>{let t=e.replace(/"/gu,`""`);return t.search(/("|,|\n)/gu)>=0?`"`+t+`"`:e},Bi=(e,t,n)=>{let r=e.map(e=>zi(e.title)).join(`;`)+`
`,i=t.map(t=>e.map(e=>{let n=e.getString(e,t);return n==null?``:zi(String(n))}).join(`;`)+`
`);i.unshift(r),it(new File(i,n,{type:`text/csv;charset=utf-8`}))}})))()}var Hi,Ui;function Wi(){return(Wi=e((()=>{rt(),qe(),Hi=(e,t)=>{let n=e.map(e=>e.title),r=t.map(t=>e.map(e=>e.toXlsxValue(e,t)??``));return r.unshift(n),r},Ui=(e,t,n,r)=>{let i=Hi(e,t),a=new st(n).addSheetFromData(i,r).generate();it(new File([a],n,{type:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`}))}})))()}var Gi,$,Ki;function qi(){return(qi=e((()=>{Gi=Symbol(`index`),$=Symbol(`All`),Ki=(e,t)=>{if(typeof e.findLastIndex==`function`)return e.findLastIndex(t);for(let n=e.length-1;n>=0;n--)if(t(e[n],n,e))return n;return-1}})))()}var Ji;function Yi(){return(Yi=e((()=>{Pe(),S(),A(),w(),Vi(),Wi(),qi(),Ji=({columns:e,selectedItems:t,setSelectedItems:n,csvFilename:r,xlsxFilename:i,xlsxSheetname:a,topPlacement:o,enableSelectAll:s,allSelected:c,allItemsCount:l})=>{let u=t===$,d=u||t.length>0,f=t!==$&&s&&c,p=t=>C`<cosmoz-dropdown-menu
			part="extra"
			slot="extra"
			.placement=${o}
		>
			${te({slot:`button`})}
			<cosmoz-button
				@click=${()=>Bi(e,t,r)}
			>
				${O(`Save selected items as CSV`)}
			</cosmoz-button>
			<cosmoz-button
				@click=${()=>Ui(e,t,i,a)}
			>
				${O(`Save selected items as XLSX`)}
			</cosmoz-button>
			<slot name="download-menu"></slot
		></cosmoz-dropdown-menu>`,m=M(u,()=>l===void 0?O(`All items selected`):O(`All {count} items selected`,{count:l}),()=>O(`{count} selected item`,{count:t===$?0:t.length}));return C`<cosmoz-bottom-bar
		id="bottomBar"
		?active=${d}
		part="bottomBar"
		exportparts="bar: bottomBar-bar, info: bottomBar-info, buttons: bottomBar-buttons"
	>
		<slot name="info" slot="info">
			${m}
			${M(f,()=>C`&nbsp;<span
							part="select-all-items"
							class="selectAllItems"
							role="button"
							tabindex="0"
							style="cursor: pointer; color: white;"
							@click=${()=>n($)}
						>
							${O(`Select all items`)}
						</span>`)}
		</slot>
		<slot name="actions" id="actions"></slot>
		<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
		<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
		${M(t!==$,()=>p(t))}
	</cosmoz-bottom-bar>`}})))()}var Xi;function Zi(){return(Zi=e((()=>{w(),Xi=({allSelected:e,onAllCheckboxChange:t,sortAndGroup:n,dataIsValid:r,data:i,columns:a,filters:o,groupOnColumn:s,setFilterState:c,settingsConfig:l,hideSelectAll:u})=>C`<sort-and-group-provider .value=${n}>
		<div class="header" id="header" part="header">
			${M(!u,()=>C`<input
						class="checkbox all"
						type="checkbox"
						.checked=${e}
						@input=${t}
						?disabled=${!r}
						part="all"
					/>`)}
			${M(u,()=>C` <cosmoz-omnitable-settings
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
	</sort-and-group-provider>`})))()}var Qi,$i;function ea(){return(ea=e((()=>{E(),Qi=s`
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
`,$i=({settingsConfig:e})=>{let{columns:t,collapsed:n}=e,r=t.filter(e=>!n.some(t=>t.name===e.name));return C`<div class="skeleton">
		${Array.from({length:5},()=>C`<div>
					<div class="checkbox"></div>
					${r.map(e=>C`<div
								class="cell"
								part=${`cell-${e.name}`}
								name=${e.name}
							></div>`)}
				</div>`)}
	</div>`},customElements.define(`cosmoz-omnitable-skeleton`,N($i,{styleSheets:[Qi]}))})))()}var ta;function na(){return(na=e((()=>{E(),ea(),Me(),A(),w(),ta=(e,t)=>{let{settingsConfig:n}=e,{processedItems:r,dataIsValid:i,filterIsTooStrict:a,loading:o,displayEmptyGroups:s,compareItemsFn:c,selectedItems:l,setSelectedItems:u,renderItem:d,renderGroup:f,error:p}=t;return C`${M(!o&&!i&&!p,()=>C`<div class="tableContent-empty">
					<slot name="empty-set-message">
						${ot({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
						<div class="tableContent-empty-message">
							<h3>${O(`Working set empty`)}</h3>
							<p>${O(`No data to display`)}</p>
						</div>
					</slot>
				</div>`)}
		${M(a,()=>C`<div class="tableContent-empty">
					${ot({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
					<div>
						<h3>${O(`Filter too strict`)}</h3>
						<p>${O(`No matches for selection`)}</p>
					</div>
				</div>`)}
		${M(o&&!r.length,()=>C`<div class="tableContent-empty overlay">
					<cosmoz-omnitable-skeleton
						.settingsConfig=${n}
					></cosmoz-omnitable-skeleton>
				</div>`)}
		${M(o&&r.length,()=>C`<div class="tableContent-empty overlay spinner">
					<cz-spinner></cz-spinner>
				</div>`)}
		${M(p,()=>C`<div class="tableContent-empty overlay">
					${Ve({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
					<div class="tableContent-empty-message">
						<h3>${O(`Error loading data`)}</h3>
						<p>${p.message}</p>
					</div>
				</div>`)}
		<div class="tableContent-scroller" id="scroller" part="scroller">
			<cosmoz-grouped-list
				id="groupedList"
				.data=${r}
				.selectedItems=${l}
				@selected-items-changed=${v(u)}
				.displayEmptyGroups=${s}
				.compareItemsFn=${c}
				.renderItem=${d}
				.renderGroup=${f}
			></cosmoz-grouped-list>
			<slot name="extraContent"></slot>
		</div>`}})))()}var ra,ia;function aa(){return(aa=e((()=>{se(),Ri(),ra=D`
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
	${Ii}
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
`,ia=D`
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
`})))()}var oa,sa;function ca(){return(ca=e((()=>{ae(),E(),oa=e=>{let t=parseInt(e??``,10);return isFinite(t)?t:void 0},sa=e=>{let{config:t}=e,{settings:n,setSettings:r,collapsed:i,requestTween:a}=t,s=oe({collapsed:i,settings:n.columns,requestTween:a,setSettings:o(e=>r(t=>({...t,columns:e})),[r])});return{...t,onDown:o(e=>{let t=e.target instanceof Element?e.target:null;t&&t.closest(`.pull`)&&(s.handle=e.currentTarget instanceof HTMLElement?e.currentTarget:null)},[s]),onDragStart:o(e=>{let t=e.target instanceof HTMLElement?e.target:null,n=oa(t?.dataset.index);if(!t||!s.handle?.contains(t)||n==null)return e.preventDefault();s.handle=null,e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`omnitable/sort-index`,String(n)),e.dataTransfer.setData(`text/plain`,String(n)),setTimeout(()=>t.classList.add(`drag`),0),t.addEventListener(`dragend`,e=>{(e.target instanceof HTMLElement?e.target:null)?.classList.remove(`drag`)},{once:!0})},[s]),onDragEnter:o(e=>{let t=e.currentTarget instanceof HTMLElement?e.currentTarget:null;t&&t===e.target&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`,t.classList.add(`dragover`))},[]),onDragOver:o(e=>{e.preventDefault(),e.currentTarget instanceof HTMLElement&&e.currentTarget.classList.add(`dragover`)},[]),onDragLeave:o(e=>{let t=e.currentTarget instanceof HTMLElement?e.currentTarget:null;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||t.classList.remove(`dragover`))},[]),onDrop:o(e=>{let t=oa(e.dataTransfer?.getData(`omnitable/sort-index`)),n=e.currentTarget instanceof HTMLElement?e.currentTarget:null,r=oa(n?.dataset.index),{settings:i,setSettings:a,requestTween:o}=s;n?.classList.remove(`dragover`),e.preventDefault();let c=i.slice();c.splice(r+(t>=r?0:-1),0,c.splice(t,1)[0]),o?.(),a(c)},[s]),onToggle:o(e=>{let{settings:t,setSettings:n,requestTween:r}=s,i=t.map(e=>({...e,disabled:e.disabled||s.collapsed?.some(t=>t.name===e.name)})),a=e.target instanceof HTMLInputElement?e.target:null,o=oa((e.target instanceof Element?e.target:null)?.closest(`[data-index]`)?.getAttribute(`data-index`));o!=null&&(i.splice(o,1,{...t[o],disabled:!a?.checked,priority:a?.checked?t.reduce((e,t)=>Math.max(e,t.priority??0),0)+1:t[o]?.priority}),r?.(),n(i))},[s])}}})))()}var la,ua,da,fa;function pa(){return(pa=e((()=>{We(),ct(),mt(),S(),se(),Ee(),E(),A(),fi(),aa(),ca(),la=[He({apply({availableHeight:e,elements:t}){Object.assign(t.floating.style,{maxHeight:`${Math.max(0,e)}px`})}}),...Re],ua=({onDragStart:e,onDragEnter:t,onDragOver:n,onDragLeave:r,onDrop:i,onDown:a,onToggle:o,collapsed:s,filters:c})=>(l,u)=>{let d=!!s?.find(e=>e.name===l.name),f=!l.disabled&&!d;return C` <div
			class="item"
			data-index=${u}
			@mousedown=${a}
			draggable="true"
			@dragstart=${e}
			@dragenter=${t}
			@dragover=${n}
			@dragleave=${r}
			@drop=${i}
		>
			<button class="pull">${ee({width:`16`,height:`16`})}</button>
			<label class="title" ?has-filter=${!Ze(c[l.name]?.filter)}
				>${l.title}</label
			>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${f}
				@click=${o}
				.indeterminate=${d}
			/>
		</div>`},da=e=>{let{settings:t,settingsId:n,onSave:r,onReset:i,hasChanges:a,opened:o,setOpened:s,...c}=sa(e);return C` <div class="headline">
			<span> ${O(`Sort and filter`)} </span>
			<cosmoz-button
				variant="tertiary"
				aria-label="${O(`Close settings`)}"
				@click=${e=>{let t=e.currentTarget instanceof HTMLElement?e.currentTarget:null;t?.focus(),t?.blur()}}
			>
				${d({width:`16`,height:`16`})}
			</cosmoz-button>
		</div>

		<div class="contents">
			<div
				class="heading"
				?data-opened=${o.columns}
				@click=${()=>s(e=>({...e,columns:!e.columns}))}
				part="columns columns-heading"
			>
				${O(`Columns`)} ${he({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse
				?opened="${o.columns}"
				part="columns columns-content"
			>
				<div class="list">${t.columns?.map(ua(c))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${o.sort}
				@click=${()=>s(e=>({...e,sort:!e.sort}))}
			>
				${O(`Sort on`)} ${he({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse ?opened=${o.sort}> ${di()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${o.group}
				@click=${()=>s(e=>({...e,group:!e.group}))}
				part="groups groups-heading"
			>
				${O(`Group on`)} ${he({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse ?opened=${o.group} part="groups groups-heading"
				>${ui()}</cosmoz-collapse
			>
		</div>

		${M(n,()=>C`<div class="buttons">
					<cosmoz-button
						variant="tertiary"
						@click=${i}
						?disabled=${!a}
					>
						${O(`Reset`)}
					</cosmoz-button>
					<cosmoz-button
						variant="primary"
						@click=${r}
						?disabled=${!a}
					>
						${O(`Save`)}
					</cosmoz-button>
				</div>`)}`},customElements.define(`cosmoz-omnitable-settings-ui`,N(da,{styleSheets:[fe(ra)]})),fa=({config:e,newLayout:n})=>C`
	<cosmoz-dropdown
		.placement="${n?`bottom-start`:`bottom-end`}"
		.middleware="${la}"
	>
		<div title="${O(`Sort and filter`)}" slot="button">
			${M(n,()=>C`<div class="headerDots">...</div>`,()=>C` ${t({width:`20`,height:`20`,styles:`color: var(--cz-color-text-primary)`})}`)}
			${M(e?.badge,()=>C`<div class="badge"></div>`)}
		</div>
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${e}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`,customElements.define(`cosmoz-omnitable-settings`,N(fa,{styleSheets:[fe(ia)]}))})))()}var ma,ha,ga,_a,va;function ya(){return(ya=e((()=>{pe(),ma=[`sortOn`,`descending`,`groupOn`,`groupOnDescending`],ha=e=>t=>typeof t==`object`&&!!t&&`name`in t&&t.name===e,ga=(e=[],t=[],n=[])=>{let r=t.filter(t=>e.some(ha(t.name))),i=e.filter(e=>e.name!=null&&!t.some(ha(e.name))&&!n.some(ha(e.name))),a=n.filter(e=>!t.some(ha(e.name)));return[...r,...a.flatMap(t=>{let n=e.find(e=>e.name===t.name);return n?{...t,title:n.title??t.title??``,minWidth:parseInt(n.minWidth??`0`,10)}:[]}),...i.map(e=>{let{name:t,title:n,priority:r,minWidth:i,width:a,flex:o}=e;return{name:t??``,title:n??``,priority:r??0,minWidth:parseInt(i??`0`,10),width:parseInt(a??`0`,10),flex:parseInt(o??`0`,10)}})]},_a=(e,t)=>({...t,...le(Array.from(ma))(e),columns:e.columns?.map(le([`name`,`priority`,`width`,`flex`,`disabled`]))}),va=({columns:e,settings:t,savedSettings:n,initial:r})=>({...Object.fromEntries(ma.flatMap(e=>r?.[e]==null?[]:[[e,r[e]]])),...n?le(Array.from(ma))(n):{},...t,columns:ga(e,t?.columns,n?.columns)})})))()}var ba;function xa(){return(xa=e((()=>{ba=({prefix:e=`omnitable-`}={})=>({write:async(t,n)=>{let r=e+t;try{n?localStorage.setItem(r,JSON.stringify(n)):localStorage.removeItem(r)}catch(e){console.error(e)}},read:async t=>{if(!t)return null;try{let n=localStorage.getItem(e+t);return n==null?null:JSON.parse(n)}catch(e){return console.error(e),null}}})})))()}var Sa,Ca;function wa(){return(wa=e((()=>{E(),xa(),Sa=Ce(ba),Ca=()=>{let e=Te(Sa);return p(()=>e(),[e])}})))()}function Ta(){return(Ta=e((()=>{wa()})))()}var Ea;function Da(){return(Da=e((()=>{E(),Ta(),ya(),Ea=(e,t,n,r)=>{let[i,a]=k(e?void 0:null),{read:s,write:c}=Ca();return x(async()=>{e&&a(await s(e))},[e,s]),{settingsId:e,savedSettings:i,onSave:o(async()=>{if(!e)return;let r=_a(t,i);await c(e,r),n(),a(r)},[t,i]),onReset:o(async t=>{n(),t.shiftKey&&(await c(e),a(null)),r?.()},[r]),hasChanges:t!=null}}})))()}var Oa;function ka(){return(ka=e((()=>{E(),J(),ya(),Da(),Oa=({settingsId:e,host:t})=>{let n=p(()=>Object.fromEntries(ma.map(e=>[e,t[e]])),[]),r=i(),a=o(()=>{r.current?.(n)},[n]),[s,c]=k(),[l,u]=k({columns:!0,sort:!0}),{savedSettings:d,...f}=Ea(e,s,c,a),{enabledColumns:m,disabledFiltering:h}=t,g=mn(t,{enabledColumns:m,disabledFiltering:h}),_=p(()=>va({columns:g,settings:s,savedSettings:d??void 0,initial:n}),[g,s,d]),v=p(()=>_.columns.map(e=>g.find(t=>t.name===e.name)).filter(e=>e!==void 0),[g,..._.columns.map(e=>e.name)]);return{...f,savedSettings:d,opened:l,setOpened:u,settings:_,columns:v,setSettings:c,resetRef:r}}})))()}function Aa(){return(Aa=e((()=>{pa(),ka()})))()}var ja,Ma;function Na(){return(Na=e((()=>{ja=e=>Number.isFinite(e)?e:0,Ma=(e,t)=>{let n=[],[r,i]=e.reduce(([e,t],{width:n,flex:r})=>[e+n,t+r],[0,0]),a=t-r,o=ja(a/i),s=0,c=0,l=0;for(let t=0;t<e.length;t++){let{width:i,minWidth:u,flex:d}=e[t];if(u>i+(a>=0?o*d:i*a/r)){s+=i,c+=u,l+=d,n[t]=u;continue}if(d===0){s+=i,c+=i,n[t]=i;continue}}r-=s,a=t-c-r,i-=l,o=ja(a/i);for(let t=0;t<e.length;t++){if(n[t]!=null)continue;let{width:i,flex:s}=e[t],c=a>=0?o*s:i*a/r;n[t]=i+c}return n}})))()}var Pa,Fa,Ia;function La(){return(La=e((()=>{Na(),qi(),Pa=(e,t)=>{let n=Ki(e,e=>e!=null&&e>0),r=(e,t)=>`.cell[name="${e}"], cosmoz-omnitable-skeleton::part(cell-${e}){width: ${t}px;padding: 0 min(3px, ${t/2}px)}`,i=e=>`cosmoz-omnitable-resize-nub[name="${e}"]{display:none}`,a=e=>`cosmoz-omnitable-resize-nub[name="${e}"], .cell[name="${e}"]{display:none}`,o=0,s=0;return t.map((t,c)=>{let l=e[c];if(l==null||l===0)return a(t.name);o+=l;let u=Math.round(o),d=u-s;s=u;let f=r(t.name,d);return c===n?`${f}\n${i(t.name)}`:f}).join(`
`)},Fa=(e,t,n)=>{let r=e.filter(e=>!e.hidden),i=r.reduce((e,{width:t})=>e+t,0);if(r.length>1&&i>t)return Fa(r.slice(1),t,n);let a=r.reduce(([e,t],n,r)=>[Math.max(e,n.index),n.index>e?r:t],[-1,-1])[1];return a!==-1&&(r[a].flex=1),Ma(r,t).reduce((e,t,n)=>(e[r[n].index]=t,e),Array(n).fill(void 0))},Ia=(e,t)=>e.length===0?`.cell {display: none;}`:Pa(e,t)})))()}var Ra;function za(){return(za=e((()=>{E(),Ra=(e,t)=>x(()=>{let n=new ResizeObserver(([e])=>{e.contentRect?.width!==0&&t(e.contentRect.width-88)});return n.observe(e),()=>n.unobserve(e)},[])})))()}var Ba;function Va(){return(Va=e((()=>{E(),za(),Ba=e=>{let[t,n]=k(()=>e.getBoundingClientRect().width-88);return Ra(e,n),t}})))()}var Ha;function Ua(){return(Ua=e((()=>{E(),La(),Ha=({canvasWidth:e,groupOnColumn:t,config:n,miniColumn:r})=>p(()=>{if(!Array.isArray(n)||e==null||e===0)return[];let i=n.map((e,n)=>({minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,name:e.name,index:n,hidden:e.name===t?.name||e.disabled})).map(e=>r?{...e,hidden:r.name!==e.name}:e).sort(({index:e,priority:t},{index:n,priority:r})=>t===r?n-e:t-r);return Fa(i,e,i.length)},[e,t,n])})))()}var Wa;function Ga(){return(Ga=e((()=>{E(),Wa=({host:e,canvasWidth:t,columns:n})=>{let r=e.miniBreakpoint??480,i=p(()=>t<=r,[t,r]),[a,...o]=p(()=>i?n?.filter(e=>e.mini!=null).sort((e,t)=>(e.mini??0)-(t.mini??0)):[],[n,i])??[],s=!!a;return x(()=>{e.toggleAttribute(`mini`,s)},[s]),{isMini:s&&i,miniColumn:a,miniColumns:o}}})))()}var Ka;function qa(){return(qa=e((()=>{E(),Ka=({host:e,canvasWidth:t,layout:n,setSettings:r,requestTween:a})=>{let o=i();o.current=e=>{a(),r(r=>{let i=r.columns,{detail:{newWidth:a,column:o}}=e,s=i.findIndex(e=>e.name===o.name),c=[],l=i.reduce((e,t)=>Math.max(e,t.priority),-1/0);for(let e=0;e<n.length;e++)if(c[e]={...i[e]},e<s&&n[e]&&(c[e].width=n[e],c[e].flex=0,c[e].priority=l),e===s){let r=n.reduce((e,t,n)=>n<s&&t?e-t:e,t);c[e].width=Math.min(r,Math.max(a,i[e].minWidth)),c[e].flex=0,c[e].priority=l}return{...r,columns:c}})},x(()=>{let t=e=>o.current?.(e);return e.addEventListener(`column-resize`,t),()=>e.removeEventListener(`column-resize`,t)},[])}})))()}var Ja,Ya,Xa;function Za(){return(Za=e((()=>{ye(),ae(),E(),Ja=(e,t)=>{let n=p(()=>{let t=!1,n,r=()=>{t&&(n=requestAnimationFrame(r),e()&&(t=!1))};return{start:()=>{t=!0,cancelAnimationFrame(n),n=requestAnimationFrame(r)},stop:()=>{t=!1,cancelAnimationFrame(n)}}},[]);x(()=>{n.start()},t),x(()=>()=>n.stop(),[])},Ya=(e=0,t=0)=>Math.abs(e-t)<.1,Xa=(e,t=1.9,n=re,r)=>{let i=oe({target:e,speedFactor:t,onConverge:r}),a=o(()=>{if(!i.tween)return i.tween=i.target,n(i.tween),i.onConverge?.(),!0;if(i.target.every((e,t)=>i.tween[t]===e))return n(i.tween),i.onConverge?.(),!0;if(i.tween=i.target.map((e,t)=>Ya(i.tween[t],e)?e:(i.tween[t]??0)+((e??0)-(i.tween[t]??0))/i.speedFactor||0),n(i.tween),i.tween.every((e,t)=>e===i.target[t]))return i.onConverge?.(),!0},[]);Ja(a,[e])}})))()}var Qa,$a;function eo(){return(eo=e((()=>{ae(),E(),La(),Va(),Ua(),Ga(),qa(),Za(),Qa=e=>{let t=p(()=>new CSSStyleSheet,[]);return x(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,t]},[]),t},$a=({host:e,columns:t,settings:n,setSettings:r,resizeSpeedFactor:i,sortAndGroupOptions:a})=>{let s=Ba(e),{isMini:c,miniColumn:l,miniColumns:u}=Wa({host:e,canvasWidth:s,columns:t}),{groupOnColumn:d}=a,f=Ha({canvasWidth:s,groupOnColumn:d,miniColumn:l,config:n.columns}),m=Qa(e),h=p(()=>n.columns.reduce((e,n,r)=>f[r]!=null||n.name===d?.name||n.disabled?e:[...e,t.find(e=>e.name===n.name)],[]),[t,n,f]),[g,_]=k(1),v=o(()=>_(i??1.9),[i]),y=o(()=>_(1),[]),b=oe({columns:n.columns});return Xa(f,g,e=>{let t=Ia(e,b.columns);m.replaceSync(t)},y),Ka({host:e,canvasWidth:s,layout:f,setSettings:e=>r(e(n)),requestTween:v}),{isMini:c,collapsedColumns:h,miniColumns:u,requestTween:v}}})))()}var to;function no(){return(no=e((()=>{to=({host:e,...t})=>{let{csvFilename:n=`omnitable.csv`,xlsxFilename:r=`omnitable.xlsx`,xlsxSheetname:i=`Omnitable`,topPlacement:a=`top-end`}=e;return{csvFilename:n,xlsxFilename:r,xlsxSheetname:i,topPlacement:a,...t}}})))()}var ro;function io(){return(io=e((()=>{E(),qi(),ro=({host:e,selectedItems:t,data:n,dataIsValid:r,columns:i,sortAndGroupOptions:a,collapsedColumns:o,settings:s,filterFunctions:c,settingS:l,filters:u,setFilterState:d,hideSelectAll:f,requestTween:m,...h})=>{let g=t===$||!!n&&n.length>0&&Array.isArray(t)&&t.length===n.length,_=t=>{if(!(t.target instanceof HTMLInputElement))return;let n=e.shadowRoot.querySelector(`#groupedList`);t.target.checked?n.selectAll():n.deselectAll()},{groupOnColumn:v}=a,y=p(()=>[v,...o,...s.columns.filter(e=>e.disabled)].some(e=>!!e&&!!e.name&&Object.keys(c).includes(e.name)),[c,s,o]),b=p(()=>({...l,collapsed:o,badge:y,filters:u,requestTween:m}),[l,o,y,u,m]);return x(()=>{let t=e.shadowRoot.querySelector(`#tableContent`),n=new ResizeObserver(t=>requestAnimationFrame(()=>{e.style.setProperty(`--ot-height`,t[0]?.contentRect.height+`px`)}));return n.observe(t),()=>n.unobserve(t)},[]),{allSelected:g,onAllCheckboxChange:_,data:n,dataIsValid:r,columns:i,settingsConfig:b,filters:u,groupOnColumn:v,setFilterState:d,hideSelectAll:f,sortAndGroup:a.sortAndGroup,...h}}})))()}var ao,oo,so,co,lo,uo,fo;function po(){return(po=e((()=>{S(),Ee(),E(),qi(),Y(),ao=e=>e instanceof HTMLInputElement,oo=e=>e instanceof HTMLElement,so=e=>e?`groupRow groupRow-folded`:`groupRow`,co=({item:e,index:t})=>n=>M((n?.length??0)>0,()=>C`
				<div class="itemRow-minis" part="item-minis">
					${n.map(n=>C`<div
								class="itemRow-mini"
								part="item-mini item-mini-${n.name}"
							>
								${(n.renderMini??n.renderCell)(n,{item:e,index:t})}
							</div>`)}
				</div>
			`),lo=({columns:e,collapsedColumns:t,miniColumns:n,onItemClick:r,onCheckboxChange:i,dataIsValid:a,groupOnColumn:o,onItemChange:s,rowPartFn:c})=>(l,u,{selected:d,expanded:f,toggleCollapse:p})=>C`
			<div
				?selected=${d}
				part="${[`itemRow`,`itemRow-${l[Gi]}`,c?.(l,u)].filter(Boolean).join(` `)}"
				.dataIndex=${l[Gi]}
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
						?hidden="${Ze(t.length)}"
						?aria-expanded="${f}"
						@click="${p}"
					>
						${he({width:`16`,height:`16`})}
					</button>
				</div>
				${co({item:l,index:u})(n)}
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
		`,uo=({onCheckboxChange:e,dataIsValid:t,groupOnColumn:n})=>(r,i,{selected:a,folded:o,toggleFold:s})=>C` <div
			class="${so(o)}"
			part="groupRow groupRow-${r[Gi]}"
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
				${he({width:`16`,height:`16`})}
			</button>
		</div>`,fo=({host:e,error:t,dataIsValid:n,processedItems:r,columns:a,collapsedColumns:s,miniColumns:c,sortAndGroupOptions:l,rowPartFn:u,...d})=>{let{loading:f=!1,displayEmptyGroups:m=!1,compareItemsFn:h}=e,g=i({shiftKey:!1,ctrlKey:!1}),_=o(t=>{if(!ao(t.target))return;let n=t.target,r=n.dataItem,i=n.checked,a=e.shadowRoot.querySelector(`#groupedList`);g.current.shiftKey?a.toggleSelectTo(r,i):g.current.ctrlKey?(n.checked=!0,a.selectOnly(r)):a.toggleSelect(r,i),t.preventDefault(),t.stopPropagation()},[]);x(()=>{let e=({shiftKey:e,ctrlKey:t})=>{g.current={shiftKey:e,ctrlKey:t}};return window.addEventListener(`keydown`,e),window.addEventListener(`keyup`,e),()=>{window.removeEventListener(`keydown`,e),window.removeEventListener(`keyup`,e)}},[]);let v=o(t=>{if(!oo(t.currentTarget))return;let n=t.currentTarget,r=t.composedPath();r.slice(0,r.indexOf(n)).some(e=>e instanceof Element&&e.matches(`a, .checkbox, .expand`))||e.dispatchEvent(new window.CustomEvent(`omnitable-item-click`,{bubbles:!0,composed:!0,detail:{item:n.dataItem,index:n.dataIndex}}))},[]),{groupOnColumn:y}=l,b=o((t,n)=>r=>_n(e,t,n,r),[]);return{...d,processedItems:r,dataIsValid:n,filterIsTooStrict:n&&r.length<1,loading:f,compareItemsFn:h,displayEmptyGroups:m,error:t,renderItem:p(()=>lo({columns:a,collapsedColumns:s,miniColumns:c,onItemClick:v,onCheckboxChange:_,dataIsValid:n,groupOnColumn:y,onItemChange:b,rowPartFn:u}),[a,s,v,_,n,y,b,u]),renderGroup:p(()=>uo({onCheckboxChange:_,dataIsValid:n,groupOnColumn:y}),[_,n,y])}}})))()}var mo;function ho(){return(ho=e((()=>{mo=(e,t)=>{if(e===t)return 0;if(e==null)return-1;if(t==null)return 1;let n=typeof e,r=typeof t;return n===`object`&&r===`object`?e.toString()<t.toString()?-1:1:n===`number`&&r===`number`?e-t:n===`string`&&r===`string`?e<t?-1:1:n===`boolean`&&r===`boolean`?e?-1:1:(console.warn(`unsupported sort`,n,e,r,t),0)}})))()}var go,_o,vo,yo,bo,xo;function So(){return(So=e((()=>{ye(),E(),ho(),J(),vi(),qi(),go=(e,t)=>(n,r)=>mo(e(n),e(r))*(t?-1:1),_o=e=>e.replace(/([a-z0-9])([A-Z])/gu,`$1-$2`).toLowerCase(),vo=(e,t)=>{e&&t&&Object.entries(t).forEach(([t,n])=>{let r=e[q];r.__ownChange=!0,Object.assign(r,{[t]:n}),r.__ownChange=!1,r.dispatchEvent(new CustomEvent(`${_o(t)}-changed`,{bubbles:!0,detail:{value:n}}))})},yo=(e,t)=>Object.assign(e,{[Gi]:t}),bo=Symbol(`unparsed`),xo=({data:e,columns:t,hashParam:n,sortAndGroupOptions:r,noLocalSort:i,noLocalFilter:a})=>{let{groupOnColumn:s,groupOnDescending:c,sortOnColumn:l,descending:u}=r,d=o(([e,n])=>{let r=t.find(({name:t})=>t===e);return r==null?[e,void 0]:[e,n.filter&&r.serializeFilter(r,n.filter)]},[t]),f=o(([e,n])=>{let r=t.find(({name:t})=>t===e);if(r==null)return[e,{[bo]:n}];let i={filter:r.deserializeFilter(r,n)};return vo(r,i),[e,i]},[t]),[m,h]=pi({},n,{multi:!0,suffix:`-filter--`,write:d,read:f}),g=o((e,n)=>h(r=>{let i=Se(n,r[e]);return vo(t.find(t=>t.name===e),i),{...r,[e]:{...r[e],...i}}}),[t,h]),_=p(()=>Object.values(m).map(e=>e.filter),[m]),v=p(()=>Object.fromEntries(t.map(e=>[e.name,!e.noLocalFilter&&e.getFilterFn(e,m[e.name]?.filter)]).filter(e=>!!e[1])),[t,..._]),y=p(()=>!Array.isArray(e)||e.length===0?[]:Object.entries(v).length===0||a?e.slice():e.filter(e=>Object.values(v).every(t=>t(e))),[e,v,a]),b=p(()=>{if(!i&&!s&&l!=null&&l.sortOn!=null)return y.slice().sort(go(e=>l.getComparableValue({...l,valuePath:l.sortOn},e),u));if(s!=null&&s.groupOn!=null){let e=y.reduce((e,t)=>{let n=s.getComparableValue({...s,valuePath:s.groupOn},t);if(n===void 0)return e;let r=e.find(e=>e.id===n);return r?(r.items.push(t),e):(r={id:n,name:n,items:[t]},[...e,r])},[]);return e.sort(go(e=>s.getComparableValue({...s,valuePath:s.groupOn},e.items[0]),c)),!l||i?e:e.filter(e=>Array.isArray(e.items)).map(e=>(e.items.sort(go(e=>l.getComparableValue({...l,valuePath:l.sortOn},e),u)),e))}return y},[y,s,c,l,u,i]),S=p(()=>{let e=0,t=0,n=[];return b.forEach(r=>{if(`items`in r&&Array.isArray(r.items)){yo(r,t++),r.items.forEach(t=>{yo(t,e++),n.push(t)});return}return yo(r,e++),n.push(r)},[]),n},[b]);return x(()=>{h(e=>Object.values(e).some(e=>e[bo]!=null)?Object.fromEntries(Object.entries(e).map(([e,t])=>{let n=t[bo];return n==null?[e,t]:f([e,n])})):e)},[f]),{processedItems:b,visibleData:S,filters:m,filterFunctions:v,setFilterState:g}}})))()}var Co,wo;function To(){return(To=e((()=>{c(),h(),E(),Co=e=>{let t=t=>{let n=e.data.indexOf(t);if(n<0)return null;let r=e.data.splice(n,1);if(e.data=e.data.slice(),Array.isArray(r)&&r.length>0)return r[0]},n=(t,n)=>{e.data.splice(t,1,n),e.data=e.data.slice()};return{removeItem:t,removeItems(e){let n=[];for(let r=e.length-1;r>=0;--r){let i=t(e[r]);i!=null&&n.push(i)}return n},replaceItemAtIndex:n,replaceItem(t,r){let i=e.data.indexOf(t);i>-1&&n(i,r)},selectItem(t){e.shadowRoot.querySelector(`#groupedList`).select(t)},selectAll(){e.shadowRoot.querySelector(`#groupedList`).selectAll()},deselectAll(){e.shadowRoot.querySelector(`#groupedList`).deselectAll()},deselectItem(t){e.shadowRoot.querySelector(`#groupedList`).deselect(t)},isItemSelected(t){return e.shadowRoot.querySelector(`#groupedList`).isItemSelected(t)}}},wo=({host:e,visibleData:t,filters:n,...r})=>{let{setFilterState:i}=r,o=p(()=>Co(e),[]),[s,c]=de(`selectedItems`,[]);f(r,Object.values(r)),f(o,Object.values(o)),x(()=>{let t=e=>{if(!(e instanceof CustomEvent))return;let t=e.detail;i(t.name,e=>({...typeof e==`object`&&e?e:{},...t.state}))};return e.addEventListener(`legacy-filter-changed`,t),()=>e.removeEventListener(`legacy-filter-changed`,t)},[]),a(`visibleData`,t),a(`sortedFilteredGroupedItems`,r.sortedFilteredGroupedItems),a(`sortOn`,r.sortOn),a(`descending`,r.descending),a(`isMini`,r.isMini);let l=p(()=>Object.fromEntries(Object.entries(n).filter(([,{filter:e}])=>e!==void 0).map(([e,{filter:t}])=>[e,t])),[n]);return a(`filters`,l,Object.values(l)),{selectedItems:s,setSelectedItems:c}}})))()}var Eo;function Do(){return(Do=e((()=>{Aa(),eo(),no(),io(),po(),So(),To(),wi(),Eo=e=>{let{hashParam:t,settingsId:n,data:r,resizeSpeedFactor:i,noLocal:a,noLocalSort:o=a,noLocalFilter:s=a,error:c,rowPartFn:l}=e,u=Oa({settingsId:n,host:e}),{settings:d,setSettings:f,columns:p,resetRef:m,savedSettings:h}=u,g=Si(p,t,{settings:d,setSettings:f,resetRef:m,ready:h!==void 0}),{processedItems:_,visibleData:v,filters:y,setFilterState:b,filterFunctions:x}=xo({data:r,columns:p,hashParam:t,sortAndGroupOptions:g,noLocalSort:o,noLocalFilter:s}),{isMini:S,collapsedColumns:C,miniColumns:ee,requestTween:te}=$a({host:e,columns:p,settings:d,setSettings:f,resizeSpeedFactor:i,sortAndGroupOptions:g}),w=r&&Array.isArray(r)&&r.length>0,{selectedItems:T,setSelectedItems:E}=wo({host:e,visibleData:v,sortedFilteredGroupedItems:_,columns:p,filters:y,setFilterState:b,isMini:S,...g}),ne=ro({host:e,selectedItems:T,sortAndGroupOptions:g,dataIsValid:w,data:r,columns:p,filters:y,collapsedColumns:C,settings:d,filterFunctions:x,settingS:u,setFilterState:b,hideSelectAll:e.hideSelectAll===!0,requestTween:te});return{header:ne,list:fo({host:e,error:c,dataIsValid:w,processedItems:_,selectedItems:T,setSelectedItems:E,columns:p,collapsedColumns:C,miniColumns:ee,sortAndGroupOptions:g,rowPartFn:l}),footer:to({host:e,selectedItems:T,allSelected:ne.allSelected,setSelectedItems:E,columns:p,enableSelectAll:e.enableSelectAll,allItemsCount:e.allItemsCount})}}})))()}function Oo(){return(Oo=e((()=>{w(),customElements.define(`cosmoz-grouped-list-row`,class extends HTMLElement{get item(){return this._item}set item(e){this._item=e,this._render()}get index(){return this._index}set index(e){this._index=e,this._render()}get renderFn(){return this._renderFn}set renderFn(e){this._renderFn=e,this._render()}_render(){this._item!=null&&this._index!=null&&this._renderFn!=null&&u(this._renderFn(this._item,this._index),this)}})})))()}var ko,Ao,jo,Mo,No,Po,Fo,Io,Lo;function Ro(){return(Ro=e((()=>{ko={group:Symbol(`group`)},Ao=(e,t)=>(t.has(e)||t.set(e,{}),t.get(e)),jo=(e,t)=>!!Ao(e,t).expanded,Mo=(e,t)=>!!Ao(e,t).folded,No=e=>e?e.items instanceof Array:!1,Po=e=>{if(!Array.isArray(e)||e.length===0)return;let t=Array.isArray(e[0]?.items);if(!e.every(e=>Array.isArray(e.items)===t))throw Error(`Data must be homogeneous.`)},Fo=(e,t,n)=>{if(Array.isArray(e))return Po(e),e.reduce((e,r)=>{let i=r;return i.items?i.items.length?Ao(r,n).folded?e.concat(r):e.concat(r,i.items.map(e=>Object.assign(e,{[ko.group]:r}))):t?e.concat(r):e:e.concat(r)},[])},Io=(e,...t)=>typeof e==`function`?e(...t):e,Lo=(e,t)=>e===t})))()}var zo;function Bo(){return(Bo=e((()=>{E(),Ro(),zo=()=>{let[e,t]=k(()=>[new WeakMap]);return{setItemState:o((e,n)=>t(([t])=>{let r=Ao(e,t);return Object.assign(r,Io(n,r)),[t]}),[]),state:e[0],signal:e}}})))()}var Vo;function Ho(){return(Ho=e((()=>{E(),Bo(),Ro(),Vo=()=>{let{setItemState:e,state:t,signal:n}=zo();return{state:t,signal:n,toggleFold:o((t,n)=>{No(t)&&e(t,e=>({folded:n===void 0?!e.folded:n}))},[]),toggleCollapse:o((t,n)=>{No(t)||e(t,e=>({expanded:n===void 0?!e.expanded:!n}))},[])}}})))()}var Uo;function Wo(){return(Wo=e((()=>{E(),qi(),Ro(),Uo=({compareItemsFn:e,data:t,flatData:n})=>{let[r,i]=de(`selectedItems`,()=>[]),[a,s]=k(),c=o(e=>r===$||r.includes(e),[r]),l=o(e=>r===$||(e?.items?.every(c)??!1),[r,c]),u=o(e=>c(e)||l(e),[c,l]),d=o(e=>{let t=e.items??[e];i(e=>e===$?e:[...e,...t.filter(t=>!e.includes(t))]),s(e)},[]),f=o(e=>{let t=e.items??[e];i(e=>e===$?(n??[]).filter(e=>!No(e)).filter(e=>!t.includes(e)):e.filter(e=>!t.includes(e))),s(e)},[n]),p=o(e=>{i(e.items?.slice()||[e]),s(e)},[]),m=o(()=>{i(t.flatMap(e=>e.items||e)),s(void 0)},[t]),h=o(()=>{i([]),s(void 0)},[]),g=o((e,t=!u(e))=>t?d(e):f(e),[u]),_=o((t,r)=>{if(!n)return;let i=a?n.findIndex(t=>e(t,a)):-1;if(i<0)return g(t,r);let[o,c]=[i,n.indexOf(t)].sort((e,t)=>e-t);n.slice(o,c+1).forEach((e,t,n)=>{t>0&&t<n.length-1&&No(e)||g(e,r)}),s(t)},[n,e,g]);return x(()=>i(t=>t!==$&&t.length>0&&n?n.filter(n=>t.find(t=>e(n,t))):t),[n]),{selectedItems:r,isItemSelected:c,isGroupSelected:l,isSelected:u,select:d,deselect:f,selectOnly:p,selectAll:m,deselectAll:h,toggleSelect:g,toggleSelectTo:_}}})))()}var Go,Ko,qo;function Jo(){return(Jo=e((()=>{xe(),c(),E(),w(),Oo(),Ho(),Wo(),Ro(),Go={host:{position:`relative`,display:`flex`,flexDirection:`column`}},Ko=e=>{let{data:t,renderItem:n,renderGroup:r,displayEmptyGroups:i,compareItemsFn:a=Lo}=e,{toggleFold:s,toggleCollapse:c,state:l,signal:u}=Vo(),d=p(()=>Fo(t,i,l),[t,i,u]),{selectedItems:m,isItemSelected:h,isGroupSelected:_,isSelected:v,select:y,deselect:b,selectOnly:x,selectAll:S,deselectAll:C,toggleSelect:ee,toggleSelectTo:te}=Uo({compareItemsFn:a,data:t,flatData:d}),w=o((e,t)=>Array.isArray(e.items)?r(e,t,{selected:_(e),folded:Mo(e,l),toggleSelect:t=>ee(e,typeof t==`boolean`?t:void 0),toggleFold:()=>s(e)}):n(e,t,{selected:h(e),expanded:jo(e,l),toggleSelect:t=>ee(e,typeof t==`boolean`?t:void 0),toggleCollapse:()=>c(e)}),[n,r,m,ee,u]);g(()=>{Object.assign(e.style,Go.host)},[]);let T={toggleFold:s,toggleCollapse:c,isItemSelected:h,isGroupSelected:_,isSelected:v,select:y,deselect:b,selectOnly:x,selectAll:S,deselectAll:C,toggleSelect:ee,toggleSelectTo:te};return f(T,Object.values(T)),{renderRow:w,flatData:d}},qo=({renderRow:e,flatData:t})=>y({items:t,renderItem:(t,n)=>C`<cosmoz-grouped-list-row
				.item=${t}
				.index=${n}
				.renderFn=${e}
			></cosmoz-grouped-list-row>`})})))()}var Yo;function Xo(){return(Xo=e((()=>{E(),Jo(),Yo=e=>qo(Ko(e)),customElements.define(`cosmoz-grouped-list`,N(Yo,{useShadowDOM:!1}))})))()}function Zo(){return(Zo=e((()=>{Xo()})))()}var Qo,$o,es;function ts(){return(ts=e((()=>{ke(),Mt(),ri(),ai(),Di(),Mi(),Fi(),E(),tt(),w(),_(),Ri(),Yi(),Zi(),na(),Do(),Zo(),Qo=e=>window.ShadyCSS?.ApplyShim?.transformCssText?.(e)||e,$o=e=>{let{header:t,list:n,footer:i}=Eo(e);return C`
		<style>
			${r([],()=>Qo(Li))}
		</style>

		<div class="mainContainer">
			${Xi(t)}
			<div class="tableContent" id="tableContent">
				${ta(t,n)}
			</div>
			${Ji(i)}
		</div>

		<div id="columns">
			<slot id="columnsSlot"></slot>
		</div>
	`},customElements.define(`cosmoz-omnitable`,N($o,{observedAttributes:[`hash-param`,`sort-on`,`group-on`,`descending`,`group-on-descending`,`hide-select-all`,`settings-id`,`no-local`,`no-local-sort`,`no-local-filter`,`disabled-filtering`,`loading`,`mini-breakpoint`,`inline`,`enable-select-all`]})),es=`
	<slot name="actions" slot="actions"></slot>
`,C(Object.assign([es],{raw:[es]})),De(Object.assign([es],{raw:[es]}))})))()}var ns,rs,is,as,os;function ss(){return(ss=e((()=>{w(),We(),Me(),vt(),ts(),ht(),ns={title:`Components/ComsmozOmnitableFullDemo`,component:`cosmoz-omnitable`,tags:[`autodocs`],args:{loading:!1,locale:`en`,sortOn:``,groupOn:``,descending:!1,groupOnDescending:!1,hashParam:``,settingsId:``,selectedItems:[],disabledFiltering:!1,enableSelectAll:!1,allItemsCount:1e4},argTypes:{loading:{control:`boolean`,description:`Show loading state`,table:{defaultValue:{summary:`false`}}},locale:{control:`select`,options:[`en`,`fr`,`sv`],description:`Language locale`,table:{defaultValue:{summary:`en`}}},selectedItems:{control:`object`,description:`Show selected items`},allItemsCount:{control:`number`,description:`Total number of items`},data:{control:`object`,description:`Show specified items`},sortOn:{control:`text`,description:`Column property name to sort on (e.g., "amount", "date", "id")`},groupOn:{control:`text`,description:`Column property name to group on (e.g., "amount", "date", "id")`},descending:{control:`boolean`,description:`Sort on descending`},groupOnDescending:{control:`boolean`,description:`Group on descending`},hashParam:{control:`text`,description:`Hash parameter for URL state management`},settingsId:{control:`text`,description:`ID for storing table settings`},disabledFiltering:{control:`boolean`,description:`Disable filter inputs in all column headers`,table:{defaultValue:{summary:`false`}}}},render:e=>C`
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
                .allItemsCount=${e.allItemsCount}
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

                <cosmoz-button slot="actions">
                    ${je({styles:`vertical-align: middle; fill: currentColor;`})}
                    <span>Remove items</span>
                </cosmoz-button>
            </cosmoz-omnitable>
        `,play:async()=>{console.log(`Current hash:`,window.location.hash)}},rs={args:{data:gt(10,10,10)}},is={args:{data:gt(2,2,10)}},as={args:{data:[]}},rs.parameters={...rs.parameters,docs:{...rs.parameters?.docs,source:{originalSource:`{
  args: {
    data: generateTableDemoData(10, 10, 10)
  }
}`,...rs.parameters?.docs?.source}}},is.parameters={...is.parameters,docs:{...is.parameters?.docs,source:{originalSource:`{
  args: {
    data: generateTableDemoData(2, 2, 10)
  }
}`,...is.parameters?.docs?.source}}},as.parameters={...as.parameters,docs:{...as.parameters?.docs,source:{originalSource:`{
  args: {
    data: []
  }
}`,...as.parameters?.docs?.source}}},os=[`TableWithLargeData`,`TableWithSmallData`,`TableWithNoData`]})))()}ss();export{rs as TableWithLargeData,as as TableWithNoData,is as TableWithSmallData,os as __namedExportsOrder,ns as default};