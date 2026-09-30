import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$ as t,Bt as n,C as r,D as i,Dt as a,E as o,Et as s,F as c,Ft as l,H as u,I as d,K as f,Kt as p,L as m,Lt as h,M as g,N as _,Nt as v,O as y,S as b,T as ee,V as x,W as S,Xt as C,Y as te,Yt as w,Z as ne,_ as re,_t as ie,a as ae,at as oe,b as se,d as ce,f as le,ft as ue,g as de,gt as T,h as fe,ht as E,i as pe,it as D,j as O,jt as me,k,kt as A,m as j,mt as M,ot as he,p as ge,q as _e,qt as ve,t as ye,tt as be,ut as xe,v as Se,w as Ce,wt as we,x as Te,y as Ee,z as De,zt as N}from"./dist-JKBP6sbx.js";import{$ as Oe,A as ke,C as Ae,D as je,E as Me,F as P,H as Ne,I as Pe,L as Fe,M as Ie,N as Le,O as F,P as I,Q as Re,R as ze,S as Be,T as Ve,U as He,V as Ue,X as We,Y as Ge,Z as Ke,_ as qe,a as Je,b as Ye,c as Xe,d as Ze,et as Qe,f as $e,g as et,h as tt,j as nt,k as L,l as rt,n as it,o as at,p as ot,q as st,r as ct,t as lt,u as ut,v as dt,w as ft,x as pt,y as mt,z as ht}from"./dist-C38Pkf4X.js";var gt,_t;function R(){return(R=e((()=>{u(),xe(),E(),gt=M`
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
`,_t=()=>w`
	<style>
		${gt}
	</style>
	${f({className:`icon`,width:`18`,height:`18`})}
`,customElements.define(`cosmoz-clear-button`,T(_t))})))()}var z,vt,yt,bt,xt,B;function V(){return(V=e((()=>{P(),z=({valuePath:e},t)=>I(t,e),vt=z,yt=z,bt=({valuePath:e},t)=>n=>{let r=I(n,e);return r!=null&&r.toString().toLowerCase().trim().includes(t.toLowerCase().trim())},xt=(e,t)=>t===``||t==null?null:t,B=e=>class extends e{static get properties(){return{isOmnitableColumn:{type:Boolean,value:!0},title:{type:String},valuePath:{type:String,notify:!0},values:{type:Array,notify:!0},filter:{type:Object},noLocalFilter:{type:Boolean},disabled:{type:Boolean,value:!1,notify:!0},editable:{type:Boolean,notify:!0},loading:{type:Boolean,value:!1,notify:!0},externalValues:{type:Boolean,value:!1,notify:!0},name:{type:String},sortOn:{type:String},groupOn:{type:String},noSort:{type:Boolean,value:!1},disabledFiltering:{type:Boolean,value:!1},width:{type:String,value:`75px`},minWidth:{type:String,value:`40px`},flex:{type:String,value:`1`},cellClass:{type:String,value:`default-cell`},headerCellClass:{type:String,value:`default-header-cell`},priority:{type:Number,value:0},hidden:{type:Boolean,notify:!0},align:{type:String,value:`left`},headerAlign:{type:String,value:null},renderHeader:{type:Function},renderCell:{type:Function},renderEditCell:{type:Function},renderGroup:{type:Function},mini:{type:Number,value:null},renderMini:{type:Function}}}static get observers(){return[`notifyFilterChange(filter)`]}notifyFilterChange(e){this.__ownChange||this.dispatchEvent(new CustomEvent(`legacy-filter-changed`,{detail:{name:this.name,state:this.legacyFilterToState(e)},bubbles:!0}))}legacyFilterToState(e){return{filter:e}}getFilterFn(){}getString(e,t){return z(e,t)}toXlsxValue(e,t){return vt(e,t)}cellTitleFn(e,t){return this.getString(e,t)}headerTitleFn(e){return e.title}serializeFilter(e,t){return xt(e,t)}deserializeFilter(e,t){if(t==null)return null;if(typeof t==`string`)try{return window.decodeURIComponent(t)}catch{return null}return t}getComparableValue(e,t){return yt(e,t)}computeSource(e,t){return t}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n),this.dispatchEvent(new CustomEvent(`cosmoz-column-prop-changed`,{bubbles:!0}))}}})))()}var St,Ct,wt,Tt,Et,Dt,Ot;function kt(){return(kt=e((()=>{g(),R(),L(),C(),V(),St=e=>t=>e(n=>{if(n.inputValue===void 0&&t.target.value===``)return n;clearTimeout(n.t);let r=setTimeout(()=>e(e=>({...e,filter:e.inputValue})),1e3);return{...n,inputValue:t.target.value,t:r}}),Ct=e=>()=>e(e=>({...e,filter:e.inputValue})),wt=e=>t=>{t.keyCode===13&&(t.preventDefault(),e(e=>({...e,filter:e.inputValue})))},Tt=e=>t=>e(e=>({...e,headerFocused:t.detail.value})),Et=e=>()=>e(e=>({...e,filter:null,inputValue:null})),Dt=e=>e!=null&&e!==``,Ot=class extends B(F){static get properties(){return{minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},inputValue:{type:Object,notify:!0}}}getFilterFn(e,t){if(t!=null&&t!==``)return bt(e,t)}renderCell(e,{item:t}){return w`<span class="default-column">${z(e,t)}</span>`}renderEditCell(e,{item:t},n){return w`<cosmoz-input
			variant="inline"
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${z(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,inputValue:n,headerFocused:r},i){return w`<cosmoz-input
			variant="inline"
			label=${e.title}
			?disabled=${e.disabledFiltering}
			.value=${n??t}
			@value-changed=${St(i)}
			focused=${r}
			@focused-changed=${Tt(i)}
			@keydown=${wt(i)}
			@blur=${Ct(i)}
		>
			${D(!e.disabledFiltering,()=>w`<cosmoz-clear-button
						suffix
						slot="suffix"
						?visible=${Dt(t)}
						light
						@click=${Et(i)}
					></cosmoz-clear-button>`)}
		</cosmoz-input>`}legacyFilterToState(e){return{filter:e,inputValue:e}}},customElements.define(`cosmoz-omnitable-column`,Ot)})))()}var At,jt,Mt;function H(){return(H=e((()=>{g(),E(),C(),At=[`label`,`value`,`slot`,`always-float-label`,`disabled`,`variant`],jt=n`
	${De}

	label {
		text-align: left;
	}

	.wrap {
		height: 40px;
	}

	#input {
		margin-top: -4px;
	}
`,Mt=e=>{let{label:t,value:n,slot:r}=e;e.toggleAttribute(`has-value`,!!n);let i=w`<div
		id="input"
		part="input"
		role="button"
		class="control"
		slot=${r}
	>
		${n||``}
	</div>`;return x(i,{label:t})},customElements.define(`cosmoz-omnitable-dropdown-input`,T(Mt,{observedAttributes:At,styleSheets:[jt]}))})))()}var Nt;function Pt(){return(Pt=e((()=>{Fe(),C(),Me(),H(),Nt=({title:e,tooltip:t=``,filterText:n=``,onOpenedChanged:r,content:i,align:a=`left`,externalValues:o=null})=>{let s={filtered:!!n,...o!=null&&{[`external-values-${o}`]:!0}};return w`
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
			class=${Ve({...s,dropdown:!0})}
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
	`}})))()}var Ft,It;function Lt(){return(Lt=e((()=>{Se(),Ie(),ft(),pt(),Ft=e=>e?typeof e.close==`function`?e:Ft(e.parentElement):null,It=e=>class extends e{static get properties(){return{disabled:{type:Boolean,value:!1},filter:{type:Object,notify:!0},values:{type:Array,value(){return[]}},headerFocused:{type:Boolean,notify:!0},min:{type:Number,value:null},max:{type:Number,value:null},limits:{type:Function},autoupdate:{type:String,value:!0},locale:{type:String,value:null},align:{type:String,value:`left`},_filterInput:{type:Object,value(){return{min:null,max:null}}},_range:{type:Object,computed:`_computeRange(values.*)`},_limit:{type:Object,computed:`_computeLimit(_range, _filterInput.*, min, max)`,value(){return{}}},_tooltip:{type:String,computed:`_computeTooltip(title, _filterText)`},_fromClasses:{type:String,computed:`_computeInputClasses(_filterInput.min)`},_toClasses:{type:String,computed:`_computeInputClasses(_filterInput.max)`}}}static get observers(){return[`_filterInputChanged(_filterInput.*, autoupdate)`,`_filterChanged(filter.*)`,`_updateLimits(limits, headerFocused)`]}disconnectedCallback(){this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),super.disconnectedCallback()}_computeInputClasses(e){return e!=null&&e!==``?`has-value`:``}toNumber(e,t,n){if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=this.toNumber(t);return i==null?r:n(r,i)}toValue(){return this.toNumber.apply(this,arguments)}getComparableValue(e,t){if(e==null)return;let n=e;return t!=null&&(n=this.get(t,e)),this.toValue(n)}renderValue(){}getInputString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return this._toInputString(n)}_computeRange(e){let t=e.base,n=Array.isArray(t)&&t.length&&t.map(e=>this.toValue(e)).filter(e=>e!=null);return!n||n.length<1?{min:null,max:null}:n.reduce((e,t)=>({min:this.toValue(t,e.min,Math.min),max:this.toValue(t,e.max,Math.max)}),{})}_computeLimit(e,t,n,r){if(!e)return;let i=t.base,a=this.toValue(n),o=this.toValue(r),s=a??this.toValue(e.min),c=o??this.toValue(e.max);return{fromMin:s,fromMax:this.toValue(c,this._fromInputString(i.max,`max`),Math.min),toMin:this.toValue(s,this._fromInputString(i.min,`min`),Math.max),toMax:c}}_computeFilterText(e){if(e.base==null)return;let t=e.base,n=this.toValue(t.min),r=this.toValue(t.max),i=[];return n!=null&&i.push(this.renderValue(n)),i.push(` - `),r!=null&&i.push(this.renderValue(r)),i.length>1?i.join(``):void 0}_computeTooltip(e,t){return t==null?e:`${e}: ${t}`}_fromInputString(e){return this.toValue(e)}_toInputString(e){return this.toValue(e)??null}_getDefaultFilter(){return{min:null,max:null}}_filterInputChanged(e,t){let n=e.path.split(`.`)[1];this.__inputChangePath=n||null,t&&(this._limitInputDebouncer=Be.debounce(this._limitInputDebouncer,Le.after(600),()=>{this._limitInput(),this._updateFilter()}),Ae(this._limitInputDebouncer))}_clearFrom(){this.set(`_filterInput.min`,null),this._updateFilter()}_clearTo(){this.set(`_filterInput.max`,null),this._updateFilter()}_onBlur(){this._limitInput(),this._updateFilter()}_onKeyDown(e){let t=e.currentTarget,n=Array.from(t.parentElement.querySelectorAll(`cosmoz-input`)),r=n[n.findIndex(e=>e===t)+1],i=!r,a=n[0]===t;switch(e.keyCode){case 13:if(e.preventDefault(),!i)r.focus();else{let e=this._limitInput();this._updateFilter(),e||this._closeParent(t)}break;case 9:(i&&!e.shiftKey||a&&e.shiftKey)&&this._closeParent(t)}}_closeParent(e){let t=Ft(e);t&&t.close()}_onDropdownOpenedChanged({currentTarget:e,type:t,detail:n}){(t===`focus`||n?.value===!0)&&setTimeout(()=>{e.querySelector(`cosmoz-input:focus`)||e.querySelector(`cosmoz-input`)?.focus()},100)}_limitInput(){let e=this._filterInput,t=this.__inputChangePath,n=t?this._fromInputString(this.get(t,e),t):null;if(this.__inputChangePath=null,n==null)return!1;let r=this._limit,i=t===`min`?`from`:`to`,a=this.get(i+`Min`,r),o=this.get(i+`Max`,r),s=this.toValue(n,a,Math.max),c=this.toValue(s,o,Math.min);return this.getComparableValue(n)!==this.getComparableValue(c)&&(this.set([`_filterInput`,t],this._toInputString(c,t)),this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),!0)}_updateFilter(){let e=this._filterInput,t=this.filter,n=this._fromInputString(e.min,`min`),r=this._fromInputString(e.max,`max`);(this.getComparableValue(n)!==this.getComparableValue(t,`min`)||this.getComparableValue(r)!==this.getComparableValue(t,`max`))&&this.set(`filter`,{min:n,max:r})}_filterChanged(e){if(this._filterInput==null)return;let t=this._filterInput,n=e.base,r=this._fromInputString(t.min,`min`),i=this._fromInputString(t.max,`max`);(this.getComparableValue(r)!==this.getComparableValue(n,`min`)||this.getComparableValue(i)!==this.getComparableValue(n,`max`))&&(this.set(`_filterInput`,{min:this._toInputString(n.min),max:this._toInputString(n.max)}),this._limitInputDebouncer&&this._limitInputDebouncer.cancel())}hasFilter(){let e=this.filter;return e==null?!1:this.toValue(e.min)!=null||this.toValue(e.max)!=null}resetFilter(){this.filter=this._getDefaultFilter()}_updateLimits(e,t){e&&Promise.resolve(Ee(e,{active:t})).then(e=>{let{min:t,max:n}=e??{};Object.assign(this,{...t==null?{}:{min:t},...n==null?{}:{max:n}})})}}})))()}var Rt;function zt(){return(zt=e((()=>{L(),C(),Rt=e=>class extends e{static get template(){return ke`<div id="output" style="position:relative;"></div>`}connectedCallback(){super.connectedCallback();let e=this;ve(e.render(),e.$.output)}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n);let r=this;requestAnimationFrame(()=>ve(r.render(),r.$.output))}}})))()}var Bt;function Vt(){return(Vt=e((()=>{g(),L(),k(),C(),Pt(),H(),Lt(),zt(),Bt=class extends It(Rt(F)){static get properties(){return{currency:{type:String},autodetect:{type:Boolean,value:!1},rates:{type:Object},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, _formatters)`},headerFocused:{type:Boolean,value:!1}}}static get observers(){return[`_valuesChanged(autodetect, currency, values)`]}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return w`
			${D(this.disabled,()=>w`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>w`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Nt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:w`
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
		`}_valuesChanged(e,t,n){if(!Array.isArray(n)||n.length<1||!e&&t)return;let r=n.reduce((e,t)=>{if(t.currency){let n=t.currency;e[n]=(e[n]||0)+1}return e},{}),i=Object.keys(r)[0];Object.keys(r).reduce((e,t)=>{let n=Math.max(e,r[t]);return n===r[t]&&(i=t),n},0),this.set(`currency`,i)}toAmount(e,t,n){if(e==null||e===``)return;if(typeof e!=`object`||e.currency==null||e.currency===``)return null;let r=this.toNumber(e.amount);if(r==null||Number.isNaN(r))return null;let i={currency:e.currency,amount:r};if(n==null||t==null)return i;let a=this.toAmount(t);if(a==null)return i;let o=this.rates||{},s=i.amount*(o[i.currency]||1),c=a.amount*(o[a.currency]||1);return this.toNumber(s,c,n)===s?i:a}toValue(){return this.toAmount.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n==null)return;let r=this.toNumber(n.amount),i=this.rates;return i==null?r:r*(i[n.currency]||1)}getString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return n===void 0?``:n===null?`Invalid value`:this.renderValue(n)}getCurrency(e,t){let n=this.get(t,e);return n&&n.currency}getFormatter(e,t){let n=e+(t||``)||``,r=this._formatters=this._formatters||{};return r[n]||(r[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),r[n]}renderValue(e){let t=this.toAmount(e);return t==null?``:this.getFormatter(t.currency,this.locale).format(e.amount)}_amountValueChanged(e){let t=e.target.value,n=e.model.item,r=this.get(this.valuePath,n),i={amount:Number(t),currency:r.currency};this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toInputString(e){let t=this.toValue(e);return t==null?null:this.toNumber(t.amount)}_toInputStringAmount(e){let t=this.rates;if(t==null)return this._toInputString(e);let n=this.toValue(e);return n==null?null:(this.toNumber(n.amount)*(t[n.currency]||1)/(t[this.currency]||1)).toFixed(2)}_fromInputString(e,t){let n=this.toNumber(e);if(n!=null)return this.toValue({amount:n,currency:t&&this.get([`filter`,t,`currency`])||this.currency})}},customElements.define(`cosmoz-omnitable-amount-range-input`,Bt)})))()}var U,Ht,Ut,Wt,W,Gt,Kt,qt;function Jt(){return(Jt=e((()=>{P(),dt(),U=(e,t,n)=>{if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=U(t);return i==null?r:n(r,i)},Ht=e=>{let t=U(e);return t==null?null:t.toString()},Ut=({valuePath:e},t)=>{let n=U(e?I(t,e):t);return Ht(n)},Wt=e=>Ht(e)??``,W=({valuePath:e,maximumFractionDigits:t},n)=>{if(n==null)return;let r=e?I(n,e):n,i=U(r);if(i!=null)return t===null?i:U(i.toFixed(t))},Gt=Ye((e,t,n)=>{let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}),Kt=({valuePath:e,locale:t,minimumFractionDigits:n,maximumFractionDigits:r},i)=>{let a=e?I(i,e):i;if(a==null)return``;let o=U(a);if(o!=null)return Gt(t,n,r).format(o)},qt=(e,t)=>n=>{let r=W(e,n);if(r==null)return!1;let i=W({...e,valuePath:`min`},t),a=W({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})))()}var G,K,Yt,Xt,Zt,Qt,$t,en,tn,nn,rn;function an(){return(an=e((()=>{P(),Jt(),G=(e={},t,n,r)=>{if(t==null||t===``)return;if(typeof t!=`object`||t.currency==null||t.currency===``)return null;let i=U(t.amount);if(i==null||Number.isNaN(i))return null;let a={currency:t.currency,amount:i};if(r==null||n==null)return a;let o=G(e,n);if(o==null)return a;let s=a.amount*(e[a.currency]||1),c=o.amount*(e[o.currency]||1);return U(s,c,r)===s?a:o},K=({valuePath:e,rates:t},n)=>{if(n==null)return;let r=n;e!=null&&(r=I(n,e));let i=G(t,r);if(i==null)return;let a=U(i.amount);return t==null||a==null?a:a*(t?.[i.currency]||1)},Yt=(e,t)=>n=>{let r=K(e,n);if(r===void 0)return!1;let i=K({...e,valuePath:`min`},t),a=K({...e,valuePath:`max`},t);return i===void 0||a===void 0||!(r<i||r>a)},Xt={},Zt=(e,t)=>{let n=e+(t||``)||``;return Xt[n]||(Xt[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),Xt[n]},Qt=(e,t,n)=>{let r=G(e,t);return r==null?``:Zt(r.currency,n).format(r.amount)},$t=({valuePath:e,rates:t,locale:n},r)=>{let i=G(t,e?I(r,e):void 0);return i===void 0?``:i===null?`Invalid value`:Qt(t,i,n)},en=e=>e?e.amount+e.currency:``,tn=e=>{if(e==null||e===``)return;let t=e.match(/^(-?[\d]+)([\D]+?)$/iu);if(!(!Array.isArray(t)||t.length<0))return{amount:Number(t[1]),currency:t[2]}},nn=({valuePath:e},t)=>e?I(t,e)?.currency:null,rn=({valuePath:e},t)=>e?I(t,e)?.amount:void 0})))()}var q,on,sn,cn,ln,un,dn;function J(){return(J=e((()=>{dt(),E(),q=Symbol(`column`),on=e=>{let t=!0,n=e.map(e=>e.name);return e.forEach(e=>{e.name??(t=!1,console.error(`The name attribute needs to be set on all columns! Missing on column`,e))}),e.forEach(e=>{n.indexOf(e.name)!==n.lastIndexOf(e.name)&&(t=!1,console.error(`The name attribute needs to be unique among all columns! Not unique on column`,e))}),t},sn=(e,t)=>{let n=e.valuePath??e.name;return{name:e.name,title:e.title,valuePath:n,groupOn:e.groupOn??n,sortOn:e.sortOn??n,noSort:e.noSort,disabledFiltering:t||e.disabledFiltering,minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,getString:e.getString,getComparableValue:e.getComparableValue,serializeFilter:e.serializeFilter,deserializeFilter:e.deserializeFilter,toXlsxValue:e.toXlsxValue,renderHeader:e.renderHeader,renderCell:e.renderCell,renderEditCell:e.renderEditCell,renderGroup:e.renderGroup,cellTitleFn:e.cellTitleFn,headerTitleFn:e.headerTitleFn,getFilterFn:e.getFilterFn,headerCellClass:e.headerCellClass,cellClass:e.cellClass,editable:e.editable,values:e.values,source:mt(e.computeSource),noLocalFilter:e.noLocalFilter,mini:e.mini,renderMini:e.renderMini,align:e.align,headerAlign:e.headerAlign,loading:e.loading,externalValues:e.externalValues,computeSource:e.computeSource,trueLabel:e.trueLabel,falseLabel:e.falseLabel,valueProperty:e.valueProperty,textProperty:e.textProperty,emptyLabel:e.emptyLabel,emptyValue:e.emptyValue,min:e.min,max:e.max,locale:e.locale,autoupdate:e.autoupdate,maximumFractionDigits:e.maximumFractionDigits,minimumFractionDigits:e.minimumFractionDigits,currency:e.currency,rates:e.rates,autodetect:e.autodetect,ownerTree:e.ownerTree,keyProperty:e.keyProperty,...e.getConfig?.(e),[q]:e}},cn=e=>e.isOmnitableColumn&&!e.hidden,ln=e=>{let t=e.filter(cn);return on(t)?t:[]},un=(e,t,n)=>(Array.isArray(t)?e.filter(e=>t.includes(e.name)):e.filter(e=>!e.disabled)).map(e=>sn(e,n)),dn=(e,{enabledColumns:t,disabledFiltering:n})=>{let[r,i]=A([]);return me(()=>{let r,a=[],o=e.shadowRoot.querySelector(`#columnsSlot`),s=e=>()=>{let r=o.assignedNodes({flatten:!0});if(e)a=r;else{let e=r.filter(e=>!a.includes(e)),t=a.filter(e=>!r.includes(e)),n=[...e,...t].some(e=>e.isOmnitableColumn);if(a=r,!n)return}i(un(ln(r),t,n))},c=e=>{cancelAnimationFrame(r),r=requestAnimationFrame(s(e?.type===`cosmoz-column-prop-changed`))};return c(),o.addEventListener(`slotchange`,c),e.addEventListener(`cosmoz-column-prop-changed`,c),()=>{o.removeEventListener(`slotchange`,c),e.removeEventListener(`cosmoz-column-prop-changed`,c),cancelAnimationFrame(r)}},[t,n]),r}})))()}var fn,pn,mn;function Y(){return(Y=e((()=>{P(),J(),fn=(e,t)=>Array.isArray(e)?e.map(e=>I(e,t)).filter((e,t,n)=>e!=null&&n.indexOf(e)===t):void 0,pn=({externalValues:e,values:t,valuePath:n},r)=>{if(e)return e;if(typeof t==`function`)return t;if(n!==void 0)return fn(r,n)},mn=(e,t,n,r)=>{let{valuePath:i}=t,a=i===void 0?void 0:I(n,i);if(r===a)return;i!==void 0&&Pe(n,i,r);let o={item:n,valuePath:i,value:r,oldValue:a,column:t[q]};e.dispatchEvent(new CustomEvent(`column-item-changed`,{bubbles:!0,composed:!0,detail:o}))}})))()}var hn;function gn(){return(gn=e((()=>{g(),R(),L(),C(),P(),V(),Vt(),an(),Y(),hn=class extends B(F){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},currency:{type:String,notify:!0},autodetect:{type:Boolean,value:!1,notify:!0},rates:{type:Object,notify:!0},width:{type:String,value:`70px`},cellClass:{type:String,value:`amount-cell`},headerCellClass:{type:String,value:`amount-header-cell`},align:{type:String,value:`right`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=K({...e,valuePath:`min`},t),r=K({...e,valuePath:`max`},t);if(n!=null||r!=null)return Yt(e,t)}getString(e,t){return $t(e,t)}toXlsxValue(e,t){return $t(e,t)}getComparableValue(e,t){return K(e,t)}serializeFilter({rates:e},t){if(t==null)return;let n=G(e,t.min),r=G(e,t.max);if(n!=null||r!=null)return en(n)+`~`+en(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:tn(n[1]),max:tn(n[2])}:null}renderCell(e,{item:t}){return w`<span>${e.getString(e,t)}</span>`}renderEditCell(e,{item:t},n){return w`<cosmoz-input
			type="number"
			@change=${r=>n({amount:r.target.value,currency:I(t,e.valuePath)?.currency})}
			.value=${rn(e,t)}
		>
			<div slot="suffix">${nn(e,t)}</div>
		</cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,rates:a,currency:o,autoupdate:s,autodetect:c,disabledFiltering:l,headerAlign:u,align:d},{filter:f},p,m){return w`<cosmoz-omnitable-amount-range-input
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
		></cosmoz-omnitable-amount-range-input>`}computeSource(e,t){return pn(e,t)}},customElements.define(`cosmoz-omnitable-column-amount`,hn)})))()}var _n,vn,yn,bn,xn,Sn,Cn,wn,Tn,En,Dn,On;function kn(){return(kn=e((()=>{ae(),Se(),ge(),P(),Y(),_n=(e,t)=>{if(!Array.isArray(e))return;let n=[];return e.reduce((e,t)=>Array.isArray(t)?(t.forEach(t=>{e.push(t)}),e):(e.push(t),e),[]).filter((e,r,i)=>{if(i.indexOf(e)!==r)return!1;if(t){let r=I(e,t);if(n.indexOf(r)!==-1)return!1;n.push(r)}return!0})},vn=(e,t,n)=>{if(e==null)return[];if(Array.isArray(e)){let r=_n(e,t);if(!r?.length)return[];let i=n??`label`,a=e=>String(typeof e==`object`&&e?I(e,i??``)??``:e??``);return r.sort((e,t)=>a(e).localeCompare(a(t)))}if(typeof e==`object`){let r=t??`id`,i=n??`label`;return Object.entries(e).map(([e,t])=>({[r]:e,[i]:t})).sort((e,t)=>String(e[i]??``).localeCompare(String(t[i]??``)))}return[]},yn=(e,t,n)=>pe(t&&I(e,t)).map(j(n)),bn=({valuePath:e,textProperty:t},n)=>yn(n,e,t).filter(e=>e!=null).join(`, `),xn=bn,Sn=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>a=>{let o=j(e),s=pe(I(a,t));return i.some(t=>s.length===0&&j(r||e)(t)===n||s.some(e=>o(e)===o(t)))},Cn=e=>t=>e(e=>({...e,filter:t})),wn=e=>t=>e(e=>({...e,headerFocused:t})),Tn=e=>t=>e(e=>({...e,query:t})),En=({emptyValue:e,emptyLabel:t,emptyProperty:n,textProperty:r,valueProperty:i},a)=>{let o=vn(a,i,r);return!t||e===void 0||!r||!(n||i)||!o?o:[{[r]:t,[n||i]:e},...o]},Dn=(e,t)=>En(e,fn(t,e.valuePath)),On=e=>class extends e{static get properties(){return{textProperty:{type:String},valueProperty:{type:String},emptyLabel:{type:String},emptyValue:{type:Object},emptyProperty:{type:String}}}getConfig(e){return{emptyProperty:e.emptyProperty}}getString(e,t){return bn(e,t)}toXlsxValue(e,t){return xn(e,t)}getComparableValue({valuePath:e,valueProperty:t},n){let r=I(n,e);return t==null?r:pe(r).map(j(t)).sort().join(` `)}getFilterFn(e,t){if(t&&Array.isArray(t)&&t.length!==0)return Sn(e,t)}serializeFilter(e,t){return Array.isArray(t)&&t.length===0?null:JSON.stringify(t)}deserializeFilter(e,t){if(t==null)return null;try{return JSON.parse(decodeURIComponent(t))}catch(e){let n=e;return console.error(`Failed to deserialize filter value:`,{error:n?.name,message:n?.message,filterLength:typeof t==`string`?t.length:null}),null}}computeSource(e,t){return e.externalValues||typeof e.values==`function`?async(...t)=>En(e,await Promise.resolve(Ee(e.values,...t))):Dn(e,t)}}})))()}var An,jn,Mn;function Nn(){return(Nn=e((()=>{ye(),qe(),L(),C(),ae(),ge(),kn(),V(),E(),P(),J(),An=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?de(t):j(n),a=pe(e&&I(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},jn=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>{let a=j(e),o=j(r||e),s=new Set(i.filter(e=>e.excluded).map(e=>a(e.item))),c=new Set(i.filter(e=>!e.excluded).map(e=>a(e.item))),l=i.some(e=>e.excluded&&o(e.item)===n),u=i.some(e=>!e.excluded&&o(e.item)===n);return e=>{let n=pe(I(e,t)).map(a);return n.length===0?!l&&(u||c.size===0):!n.some(e=>s.has(e))&&(c.size===0||n.some(e=>c.has(e)))}},Mn=class extends On(B(F)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return w`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},n){return w`<cosmoz-input
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${z(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:n},r,i){return w`<cosmoz-autocomplete-excluding
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
			@opened-changed=${e=>wn(r)(e.detail.value)}
			@value-changed=${s(Cn(r))}
			@text-changed=${s(Tn(r))}
			>${D(e.loading,()=>w`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-excluding
		>`}getComparableValue(e,t){return An(e,t)}getFilterFn(e,t){if(t&&Array.isArray(t)&&t.length!==0)return jn(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete-excluding`,Mn)})))()}var Pn,Fn;function In(){return(In=e((()=>{ye(),qe(),L(),C(),ae(),ge(),kn(),V(),P(),J(),Pn=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?de(t):j(n),a=pe(e&&I(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},Fn=class extends On(B(F)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return w`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},n){return w`<cosmoz-input
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${z(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:n},r,i){return w`<cosmoz-autocomplete-ui
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
			.onChange=${Cn(r)}
			@opened-changed=${e=>wn(r)(e.detail.value)}
			.onText=${Tn(r)}
			>${D(e.loading,()=>w`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}getComparableValue(e,t){return Pn(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete`,Fn)})))()}var Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,qn,Jn,Yn,Xn;function Zn(){return(Zn=e((()=>{L(),V(),ye(),dt(),P(),C(),Ln=(e,t)=>t.find(({value:t})=>e===t),Rn=(e,t,n)=>{let r=Ln(t,n);return r?r.text:e},zn=(e,t,n,r)=>Rn(e,I(t,n),r),Bn=({valuePath:e},t,n)=>Ln(I(t,e),n),Vn=e=>t=>{e(e=>({...e,filter:t?.[0]?.value??null}))},Hn=e=>t=>{e(e=>({...e,headerFocused:t}))},Un=e=>t=>{e(e=>({...e,query:t}))},Wn=e=>t=>e(t?.[0]?.value),Gn=({valuePath:e,trueLabel:t,falseLabel:n},r)=>I(r,e)?t:n,Kn=({valuePath:e},t)=>n=>I(n,e)===t,qn=mt((e,t)=>[{text:e,value:!0},{text:t,value:!1}]),Jn=({valuePath:e,trueLabel:t,falseLabel:n},r)=>e?I(r,e)?t:n:``,Yn=(e,t)=>{try{return JSON.parse(t)}catch{return null}},Xn=class extends B(F){static get properties(){return{trueLabel:{type:String,value:`True`},falseLabel:{type:String,value:`False`},flex:{type:String,value:`0`},cellClass:{type:String,value:`boolean-cell`}}}getString(e,t){return Gn(e,t)}renderCell(e,{item:t}){return Gn(e,t)}renderEditCell(e,{item:t},n){let{trueLabel:r,falseLabel:i}=e;return w`<cosmoz-autocomplete
			variant="inline"
			.title=${zn(e.title,t,e.valuePath,qn(r,i))}
			.source=${qn(r,i)}
			.textProperty=${`text`}
			.value=${Bn(e,t,qn(r,i))}
			.onChange=${Wn(n)}
			.limit=${1}
			>${D(e.loading,()=>w`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete
		>`}renderHeader(e,{filter:t,query:n},r,i){return w`<cosmoz-autocomplete-ui
			?disabled=${e.disabledFiltering}
			variant="inline"
			.label=${e.title}
			.title=${zn(e.title,t,e.valuePath,i)}
			.source=${i}
			.textProperty=${`text`}
			.value=${Ln(t,i)}
			.text=${n}
			.onChange=${Vn(r)}
			@opened-changed=${e=>Hn(r)(e.detail.value)}
			.onText=${Un(r)}
			.limit=${1}
			>${D(e.loading,()=>w`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}computeSource({trueLabel:e,falseLabel:t}){return qn(e,t)}getFilterFn(e,t){if(t!=null)return Kn(e,t)}toXlsxValue(e,t){return Jn(e,t)}deserializeFilter(e,t){return Yn(e,t)}},customElements.define(`cosmoz-omnitable-column-boolean`,Xn)})))()}var Qn;function $n(){return($n=e((()=>{Ke(),Lt(),Qn=e=>class extends It(e){static get properties(){return{max:{type:Date,value:null},min:{type:Date,value:null},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},formatter:{type:Object,computed:`_computeFormatter(locale)`}}}toDate(e,t,n){if(e==null||e===``)return;let r=e;if(r instanceof Date||(typeof e==`string`&&(r=this.getAbsoluteISOString(r)),r=new Date(r)),Number.isNaN(r.getTime()))return null;if(n==null||t==null)return r;let i=this.toDate(t);if(i==null)return r;let a=this.getComparableValue(r);return n(a,this.getComparableValue(i))===a?r:i}toValue(){return this.toDate.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n!=null)return this.toNumber(n.getTime())}getString(e,t=this.valuePath,n=this.formatter){let r=this.toValue(this.get(t,e));return r===void 0?``:r===null?`Invalid Date`:this.renderValue(r,n)}getAbsoluteISOString(e){return e.length===19?e+this._getTimezoneString(e):e}_getTimezoneString(e){let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`}renderValue(e,t=this.formatter){if(t==null)return;let n=this.toValue(e);if(n!=null)return t.format(n)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(0,10)}_dateValueChanged(e){let t=e.currentTarget.value,n=e.model.item,r=this.get(this.valuePath,n),i=this._fromInputString(t);this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toLocalISOString(e){return Re(e)}}})))()}var er;function tr(){return(tr=e((()=>{g(),L(),k(),C(),$n(),Pt(),H(),zt(),er=class extends Qn(Rt(F)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return w`
			${D(this.disabled,()=>w`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>w`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Nt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:w`
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
		`}_fromInputString(e,t){let n=this.toDate(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n}_filterInputChanged(e,t){let n=e.path.split(`.`)[1]&&e.value;if(n&&n.match(/^0+/u)){this._limitInputDebouncer.cancel();return}super._filterInputChanged(e,t)}},customElements.define(`cosmoz-omnitable-date-range-input`,er)})))()}var nr,rr,ir,X,Z,ar,or,sr,cr,lr,ur,dr,fr,pr,mr;function hr(){return(hr=e((()=>{Ke(),P(),Jt(),nr=e=>{let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`},rr=e=>e.length===19?e+nr(e):e,ir=e=>{if(e==null||e===``)return;let t=e;return!(t instanceof Date)&&(typeof e==`string`&&(t=rr(t)),t=We(t),!t)||Number.isNaN(t.getTime())?null:t},X=({valuePath:e},t)=>{if(t==null)return;let n=t;e!=null&&(n=I(t,e));let r=ir(n);if(r!=null)return U(r.getTime())},Z=(e,t,n)=>{let r=ir(e);if(r==null)return null;if(n==null||t==null)return r;let i=Z(t);if(i==null)return r;let a=X({},r),o=X({},i);return a==null||o==null||n(a,o)===a?r:i},ar=(e,t)=>{if(t==null)return;let n=Z(e);if(n!=null)return t.format(n)},or={},sr=e=>{let t=e||``;return or[t]||(or[t]=new Intl.DateTimeFormat(e||void 0)),or[t]},cr=({valuePath:e,locale:t},n)=>{let r=I(n,e||``);return r===void 0?``:(r=Z(r),r===null?`Invalid Date`:ar(r,sr(t)))},lr=e=>{let t=Z(e);if(t==null)return null;let n=Re(t);return n==null?null:n.slice(0,10)},ur=({valuePath:e},t)=>lr(I(t,e||``)),dr=(e,t)=>{let n=Z(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n},fr=e=>lr(e)??``,pr=({valuePath:e},t)=>{if(!e)return``;let n=Z(I(t,e));if(!n)return``;let r=Z(Re(n));return r?(r.setHours(0,0,0,0),r):``},mr=(e,t)=>n=>{let r=X(e,n);if(r==null)return!1;let i=X({...e,valuePath:`min`},t),a=X({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})))()}var gr;function _r(){return(_r=e((()=>{g(),L(),C(),V(),tr(),Y(),hr(),R(),gr=class extends B(F){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`date-header-cell`},width:{type:String,value:`100px`},minWidth:{type:String,value:`82px`},flex:{type:String,value:`0`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=X({...e,valuePath:`min`},t),r=X({...e,valuePath:`max`},t);if(n!=null||r!=null)return mr(e,t)}getString(e,t){return cr(e,t)}toXlsxValue(e,t){return pr(e,t)}getComparableValue(e,t){return X(e,t)}serializeFilter(e,t){if(t==null)return;let n=Z(t.min),r=Z(t.max);if(n!=null||r!=null)return fr(n)+`~`+fr(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Z(n[1]),max:Z(n[2])}:null}renderCell(e,{item:t}){return w`<div class="omnitable-cell-date">
			${cr(e,t)}
		</div>`}renderEditCell(e,{item:t},n){return w`<cosmoz-input
			type="date"
			@change=${e=>n(dr(e.target.value))}
			.value=${ur(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,disabledFiltering:a,headerAlign:o,align:s},{filter:c},l,u){return w`<cosmoz-omnitable-date-range-input
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
		></cosmoz-omnitable-date-range-input>`}computeSource(e,t){return pn(e,t)}},customElements.define(`cosmoz-omnitable-column-date`,gr)})))()}var vr;function yr(){return(yr=e((()=>{L(),k(),C(),$n(),Pt(),H(),zt(),vr=class extends Qn(Rt(F)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return w`
			${D(this.disabled,()=>w`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>w`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Nt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:w`
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
		`}_toInputString(e){let t=this.toValue(e);if(t!=null)return this._toLocalISOString(t).slice(0,19)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})}},customElements.define(`cosmoz-omnitable-datetime-range-input`,vr)})))()}var br,xr,Sr,Cr,wr,Tr;function Er(){return(Er=e((()=>{P(),hr(),br={},xr=e=>{let t=e||``;return br[t]||(br[t]=new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})),br[t]},Sr=({valuePath:e,locale:t},n)=>{let r=Z(I(n,e||``));return r===void 0?``:r===null?`Invalid Date`:ar(r,xr(t))},Cr=({valuePath:e},t)=>e?I(t,e):``,wr=e=>{let t=Z(e);return t==null?``:t.toISOString().slice(0,19).replace(/:/gu,`.`)},Tr=e=>{if(e!=null&&e!==``&&typeof e==`string`)return Z(e.replace(/\./gu,`:`)+`Z`)}})))()}var Dr;function Or(){return(Or=e((()=>{et(),R(),L(),C(),V(),yr(),Y(),hr(),Er(),Dr=class extends B(F){static get is(){return`cosmoz-omnitable-column-datetime`}static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`datetime-header-cell`},width:{type:String,value:`210px`},minWidth:{type:String,value:`128px`},flex:{type:String,value:`0`},filterStep:{type:Number,value:1}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=X({...e,valuePath:`min`},t),r=X({...e,valuePath:`max`},t);if(n!=null||r!=null)return mr(e,t)}getString(e,t){return Sr(e,t)}toXlsxValue(e,t){return Cr(e,t)}getComparableValue(e,t){return X(e,t)}serializeFilter(e,t){if(t==null)return;let n=Z(t.min),r=Z(t.max);if(n!=null||r!=null)return wr(n)+`~`+wr(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Tr(n[1]),max:Tr(n[2])}:null}renderCell(e,{item:t}){return Sr(e,t)}renderEditCell(e,{item:t},n){return w`<cosmoz-input
			type="text"
			@change=${e=>n(dr(e.target.value))}
			.value=${Sr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,filterStep:a,disabledFiltering:o,headerAlign:s,align:c},{filter:l},u,d){return w`<cosmoz-omnitable-datetime-range-input
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
		></cosmoz-omnitable-datetime-range-input>`}computeSource(e,t){return pn(e,t)}},customElements.define(Dr.is,Dr)})))()}var kr;function Ar(){return(Ar=e((()=>{ye(),qe(),L(),C(),kn(),V(),kr=class extends On(B(F)){renderCell({valuePath:e,textProperty:t},{item:n}){let r=yn(n,e,t).map(e=>w`<li>${e}</li>`);return w`
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
		`}renderEditCell(){return`not implemented`}renderHeader(e,{filter:t,query:n},r,i){return w`<cosmoz-autocomplete-ui
			variant="inline"
			class="external-values-${e.externalValues}"
			?disabled=${e.disabledFiltering}
			.label=${e.title}
			.source=${i}
			.textProperty=${e.textProperty}
			.value=${t}
			.text=${n}
			.onChange=${Cn(r)}
			@opened-changed=${e=>wn(r)(e.detail.value)}
			.onText=${Tn(r)}
			>${D(e.loading,()=>w`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		> `}},customElements.define(`cosmoz-omnitable-column-list-horizontal`,kr)})))()}var jr,Mr;function Nr(){return(Nr=e((()=>{xe(),E(),k(),jr=M`
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
`,Mr=({items:e})=>{let[t,n]=A(!1),r=Array.isArray(e)?e:[],i=l(()=>Math.max(0,r.length-1),[r]);if(r.length===0)return null;let a=r.length>2,o=r[0],s=a&&!t?[]:r.slice(1),c=e=>{e.stopPropagation(),e.preventDefault(),n(e=>!e)};return w`
		<ul>
			<li>
				<span>${o}</span>
			</li>
			<li class="see-more" ?hidden=${!a||t}>
				<a href="#" @click=${c}
					>${O(`and {0} more`,{0:i})}</a
				>
			</li>
			${s.map(e=>w`
					<li>
						<span class="item">${e}</span>
					</li>
				`)}
			<li class="see-less" ?hidden=${!a||!t}>
				<a href="#" @click=${c}>${O(`See less`)}</a>
			</li>
		</ul>
	`},customElements.define(`cosmoz-omnitable-column-list-data`,T(Mr,{styleSheets:[ue(jr)]}))})))()}var Pr;function Fr(){return(Fr=e((()=>{Nr(),L(),C(),ye(),kn(),V(),J(),Pr=class extends On(B(F)){static get properties(){return{keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,textual:e.textual}}renderCell({valuePath:e,textProperty:t},{item:n}){return w`<cosmoz-omnitable-column-list-data
			.items=${yn(n,e,t)}
		></cosmoz-omnitable-column-list-data>`}renderEditCell(e,{item:t},n){return w`<cosmoz-input
			type="text"
			.value=${bn(e,t)}
			@change=${e=>n(e.target.value.split(/,\s*/gu))}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:n},r,i){return w`<cosmoz-autocomplete-ui
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
			.onChange=${Cn(r)}
			@opened-changed=${e=>wn(r)(e.detail.value)}
			.onText=${Tn(r)}
			>${D(e.loading,()=>w`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}},customElements.define(`cosmoz-omnitable-column-list`,Pr)})))()}var Ir;function Lr(){return(Lr=e((()=>{g(),L(),k(),C(),Pt(),H(),Lt(),zt(),Ir=class extends It(Rt(F)){static get properties(){return{maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},formatter:{type:Object,computed:`_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)`},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},headerFocused:{type:Boolean,value:!1}}}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return w`
			${D(this.disabled,()=>w`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>w`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Nt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:w`
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
		`}_computeFormatter(e,t,n){let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}getComparableValue(e,t){if(e==null)return;let n=e;if(t!=null&&(n=this.get(t,e)),n=this.toValue(n),n==null)return;let r=this.maximumFractionDigits;return r===null?n:this.toValue(n.toFixed(r))}renderValue(e,t=this.formatter){let n=this.toNumber(e);if(n!=null)return t.format(n)}},customElements.define(`cosmoz-omnitable-number-range-input`,Ir)})))()}var Rr;function zr(){return(zr=e((()=>{g(),R(),L(),C(),V(),P(),Lr(),Y(),Jt(),Rr=class extends B(F){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},cellClass:{type:String,value:`number-cell`},width:{type:String,value:`30px`},minWidth:{type:String,value:`30px`},headerCellClass:{type:String,value:`number-header-cell`},maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},align:{type:String,value:`right`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=W({...e,valuePath:`min`},t),r=W({...e,valuePath:`max`},t);if(n!=null||r!=null)return qt(e,t)}getString(e,t){return Kt(e,t)}toXlsxValue({valuePath:e},t){return I(t,e)}getComparableValue(e,t){return W(e,t)}serializeFilter(e,t){if(t==null)return;let n=U(t.min),r=U(t.max);if(n!=null||r!=null)return Wt(n)+`~`+Wt(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:U(n[1]),max:U(n[2])}:null}renderCell(e,{item:t}){return w`<div class="omnitable-cell-number">
			${Kt(e,t)}
		</div>`}renderEditCell(e,{item:t},n){return w`<cosmoz-input
			type="number"
			@change=${e=>n(e.target.value)}
			.value=${Ut(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,maximumFractionDigits:a,minimumFractionDigits:o,autoupdate:s,disabledFiltering:c,headerAlign:l,align:u},{filter:d},f,p){return w`<cosmoz-omnitable-number-range-input
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
		></cosmoz-omnitable-number-range-input>`}computeSource(e,t){return pn(e,t)}},customElements.define(`cosmoz-omnitable-column-number`,Rr)})))()}var Br;function Vr(){return(Vr=e((()=>{g(),L(),k(),C(),$n(),Pt(),H(),zt(),Br=class extends Qn(Rt(F)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return w`
			${D(this.disabled,()=>w`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>w`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Nt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:w`
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
		`}get _fixedDate(){return`1970-01-01`}toDate(e,t,n){let r=typeof e==`string`&&e.length>3&&e.length<=9?this.getAbsoluteISOString(this._fixedDate+`T`+e):e;return super.toDate(r,t,n)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(11,19)}getComparableValue(e,t){if(e==null)return;let n=this._toInputString(t==null?e:this.get(t,e));if(n!=null&&(n=this.toValue(this.getAbsoluteISOString(this._fixedDate+`T`+n)),n!=null))return this.toNumber(n.getTime())}_timeValueChanged(e){let t=e.target.value,n=e.model.item,r=this.toDate(n.date),i=this.toDate(r==null?t:r.toISOString().slice(0,10)+`T`+t);i??(this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,(e=>e).bind(this)))}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})}},customElements.define(`cosmoz-omnitable-time-range-input`,Br)})))()}var Q,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr;function Zr(){return(Zr=e((()=>{Ke(),P(),hr(),Jt(),Q=(e,t,n)=>{let r=typeof e==`string`&&e.length>3&&e.length<=9?rr(`1970-01-01T`+e):e;return Z(r,t,n)},Hr={},Ur=e=>{let t=e||``;return Hr[t]||(Hr[t]=new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})),Hr[t]},Wr=({valuePath:e,locale:t},n)=>{let r=Q(I(n,e||``));return r===void 0?``:r===null?`Invalid Date`:ar(r,Ur(t))},Gr=(e,t)=>e.valuePath?Wr(e,t):``,Kr=e=>{let t=Q(e);if(t==null)return null;let n=Re(t);return n&&n.slice(11,19)},qr=({valuePath:e},t)=>{if(t==null)return;let n=Kr(e==null?t:I(t,e));if(n==null)return;let r=Q(rr(`1970-01-01T`+n));return r==null?r:U(r.getTime())},Jr=(e,t)=>n=>{let r=qr(e,n);if(r==null)return!1;let i=qr({...e,valuePath:`min`},t),a=qr({...e,valuePath:`max`},t);return i==null||a==null?!1:!(r<i||r>a)},Yr=e=>{let t=Q(e);return t==null?``:t.toISOString().slice(11,19).replace(/:/gu,`.`)},Xr=e=>{if(e!=null&&e!==``)return Q(typeof e==`string`?e.replace(/\./gu,`:`)+`Z`:e)}})))()}var Qr;function $r(){return($r=e((()=>{g(),R(),L(),C(),V(),Vr(),Y(),Zr(),Qr=class extends B(F){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`time-header-cell`},minWidth:{type:String,value:`63px`},width:{type:String,value:`210px`},flex:{type:String,value:`0`},filterStep:{type:String,value:`1`}}}getFilterFn(e,t){let n=qr({...e,valuePath:`min`},t),r=qr({...e,valuePath:`max`},t);if(n!=null||r!=null)return Jr(e,t)}getString(e,t){return Wr(e,t)}toXlsxValue(e,t){return Gr(e,t)}getComparableValue(e,t){return qr(e,t)}serializeFilter(e,t){if(t==null)return;let n=Q(t.min),r=Q(t.max);if(n!=null||r!=null)return Yr(n)+`~`+Yr(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Xr(n[1]),max:Xr(n[2])}:null}renderCell(e,{item:t}){return Wr(e,t)}renderEditCell(e,{item:t},n){return w`<cosmoz-input
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${Wr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,locale:r,filterStep:i,disabledFiltering:a,headerAlign:o,align:s},{filter:c},l,u){return w`<cosmoz-omnitable-time-range-input
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
		></cosmoz-omnitable-time-range-input>`}computeSource(e,t){return pn(e,t)}},customElements.define(`cosmoz-omnitable-column-time`,Qr)})))()}function ei(){return(ei=e((()=>{gn(),Nn(),In(),Zn(),_r(),Or(),Ar(),Fr(),zr(),$r()})))()}var ti;function ni(){return(ni=e((()=>{E(),C(),ti=({column:e,item:t,selected:n,folded:r,group:i})=>{if(!e)return p;let a=e.renderGroup??e.renderCell;return a?a(e,{item:t,selected:n,folded:r,group:i}):p},customElements.define(`cosmoz-omnitable-group-row`,T(ti,{useShadowDOM:!1}))})))()}var ri;function ii(){return(ii=e((()=>{E(),C(),ri=e=>{let{column:t}=e;return N(()=>{let n=0,r=0,i=i=>{e.dispatchEvent(new CustomEvent(`column-resize`,{bubbles:!0,composed:!0,detail:{newWidth:Math.ceil(r+i.pageX-n),column:t}}))},a=()=>{document.removeEventListener(`pointermove`,i),document.removeEventListener(`pointerup`,a)},o=t=>{n=t.pageX,r=e.previousElementSibling.getBoundingClientRect().width,document.addEventListener(`pointermove`,i),document.addEventListener(`pointerup`,a)};return e.addEventListener(`pointerdown`,o),()=>e.removeEventListener(`pointerdown`,o)},[t]),p},customElements.define(`cosmoz-omnitable-resize-nub`,T(ri))})))()}var ai,oi,si,ci;function li(){return(li=e((()=>{E(),oe(),u(),ai=({column:e,on:n,descending:r,setOn:i,setDescending:a})=>{let{name:o,title:s}=e??{};return w`<button
		class="sg"
		title=${he(s)}
		data-on=${he(o===n&&(r?`desc`:`asc`)||void 0)}
		@click=${e=>{let t=e.currentTarget?.dataset.on;t||(i(o),a(!1)),t===`asc`?a(!0):t===`desc`&&(i(),a(!1))}}
	>
		<span>${s}</span> ${o===n?be({width:`12`,height:`12`}):t({width:`12`,height:`12`})}
	</button>`},oi=({columns:e,...t})=>e?.map(e=>ai({column:e,...t})),si=()=>w`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,groupOn:t,setGroupOn:n,groupOnDescending:r,setGroupOnDescending:i}={})=>oi({columns:e?.filter?.(e=>e.groupOn),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`,ci=()=>w`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,sortOn:t,setSortOn:n,descending:r,setDescending:i}={})=>oi({columns:e?.filter?.(e=>e.sortOn&&!e.noSort),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`})))()}function ui(e,t,{suffix:n=``,read:r,write:i,ready:a=!0,multi:o}={}){let s=le({param:t,suffix:n,link:o?mi:pi,write:i??re}),c=l(()=>{if(t==null)return!1;if(o){let e=Ze(t+n);return Object.keys(e).length>0}return $e(t+n)!==void 0},[]),[u,d]=A(()=>{if(t==null)return e;if(o){let i=Ze(t+n,r);return Object.keys(i).length>0?i:e}return $e(t+n,r)??e}),f=v(e=>d(t=>{let n=Ee(e,t);return s.param!=null&&tt(s.link(s.param+s.suffix,n,s.write),null,{notify:!1}),n}),[]);return N(()=>{s.param!=null&&a&&!c&&e!=null&&f(e)},[a]),[u,f]}var di,fi,pi,mi;function hi(){return(hi=e((()=>{ot(),Se(),ce(),ut(),E(),di=e=>(t,n,r=re)=>{let i=rt(),a=new URLSearchParams(i.hash.replace(`#`,``));return e(t,n,r,a),`#!`+Object.assign(i,{hash:a}).href.replace(location.origin,``)},fi=e=>e==null||e===``,pi=di((e,t,n,r)=>fi(n(t))?r.delete(e):r.set(e,n(t))),mi=di((e,t,n,r)=>{let i=Object.entries(t),a=i.map(n).filter(([,e])=>e!==void 0);if(a.length===0&&i.length>0)return;let o=e;Array.from(r.keys()).filter(e=>e.startsWith(o)).forEach(e=>r.delete(e)),a.forEach(([t,n])=>fi(n)?r.delete(e+t):r.set(e+t,n))})})))()}var gi,_i,vi,yi,bi;function xi(){return(xi=e((()=>{E(),hi(),gi=e=>[!0,`true`,1,`yes`,`on`].includes(e),_i=e=>e===``||(e==null?void 0:gi(e)),vi=(e,t,n)=>v(r=>{e(r),n(e=>({...e,[t]:r}))},[e,t,n]),yi=(e,t,{settings:n,setSettings:r,resetRef:i,ready:a=!0})=>{let[o,s]=ui(n.sortOn,t,{suffix:`-sortOn`,ready:a}),[c,u]=ui(_i(n.descending),t,{suffix:`-descending`,read:_i,ready:a}),[d,f]=ui(n.groupOn,t,{suffix:`-groupOn`,ready:a}),[p,m]=ui(_i(n.groupOnDescending),t,{suffix:`-groupOnDescending`,read:_i,ready:a}),h=l(()=>e.find(e=>e.name===o),[e,o]),g=l(()=>e.find(e=>e.name===d),[e,d]),_={groupOn:d,setGroupOn:vi(f,`groupOn`,r),groupOnDescending:p,setGroupOnDescending:vi(m,`groupOnDescending`,r),sortOn:o,setSortOn:vi(s,`sortOn`,r),descending:c,setDescending:vi(u,`descending`,r),columns:e},y=l(()=>_,Object.values(_)),b=v(e=>{s(typeof e.sortOn==`string`?e.sortOn:void 0),f(typeof e.groupOn==`string`?e.groupOn:void 0),u(typeof e.descending==`boolean`?e.descending:void 0),m(typeof e.groupOnDescending==`boolean`?e.groupOnDescending:void 0)},[]);return N(()=>void(i.current=b),[]),{...y,sortAndGroup:y,groupOnColumn:g,sortOnColumn:h}},bi=ie(void 0),customElements.define(`sort-and-group-provider`,bi.Provider),customElements.define(`sort-and-group-consumer`,T(({render:e})=>e(h(bi)),{useShadowDOM:!1}))})))()}var Si,Ci;function wi(){return(wi=e((()=>{E(),Ce(),ii(),li(),xi(),Si=({data:e,columns:t,groupOnColumn:n,filters:i,setFilterState:a,sortAndGroup:{sortOn:o,setSortOn:s,descending:c,setDescending:l}={}})=>r(t,e=>e.name,t=>[w`<div
				class="cell ${t.headerCellClass} header-cell"
				align="${t.headerAlign??t.align??`left`}"
				part="cell header-cell cell-${t.name} header-cell-${t.name}"
				?hidden="${t===n}"
				title="${t.headerTitleFn(t)}"
				name="${t.name}"
			>
				${t.renderHeader(t,i[t.name]??{},e=>a(t.name,e),t.source(t,e))}
				${D(!t.noSort,()=>ai({on:o,setOn:s,descending:c,setDescending:l,column:t}))}
			</div>`,w`<cosmoz-omnitable-resize-nub
				.column="${t}"
				name="${t.name}"
			></cosmoz-omnitable-resize-nub>`]),Ci=({columns:e,settingsConfig:t,hideSelectAll:n,...r})=>{let i=h(bi);return w`
		${D(e,e=>Si({columns:e,sortAndGroup:i,...r}))}
		${D(!n,()=>w` <cosmoz-omnitable-settings
					.config=${t}
					part="settings"
				></cosmoz-omnitable-settings>`)}
	`},customElements.define(`cosmoz-omnitable-header-row`,T(Ci,{useShadowDOM:!1}))})))()}var Ti,Ei;function Di(){return(Di=e((()=>{xe(),E(),Ti=M`
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
`,Ei=({column:e})=>w`
	<div class="label" title="${e.title}" part="item-expand-label">
		${e.title}
	</div>
	<div class="value" part="item-expand-value">
		<slot></slot>
	</div>
`,customElements.define(`cosmoz-omnitable-item-expand-line`,T(Ei,{styleSheets:[ue(Ti)]}))})))()}var Oi;function ki(){return(ki=e((()=>{E(),C(),Di(),Oi=({columns:e,item:t,selected:n,expanded:r,groupOnColumn:i})=>Xe(e,e=>w`<cosmoz-omnitable-item-expand-line
				.column=${e}
				?hidden=${e===i}
				exportparts="item-expand-label, item-expand-value"
				>${e.renderCell(e,{item:t,selected:n,expanded:r})}</cosmoz-omnitable-item-expand-line
			>`),customElements.define(`cosmoz-omnitable-item-expand`,T(Oi,{useShadowDOM:!1}))})))()}var Ai;function ji(){return(ji=e((()=>{Ai=(e,t)=>{if(e===t)return 0;if(e==null)return-1;if(t==null)return 1;let n=typeof e,r=typeof t;return n===`object`&&r===`object`?e.toString()<t.toString()?-1:1:n===`number`&&r===`number`?e-t:n===`string`&&r===`string`?e<t?-1:1:n===`boolean`&&r===`boolean`?e?-1:1:(console.warn(`unsupported sort`,n,e,r,t),0)}})))()}var Mi,Ni,Pi;function Fi(){return(Fi=e((()=>{ji(),Mi=e=>e!=null&&(typeof e==`object`||typeof e==`function`)&&`then`in e&&typeof e.then==`function`,Ni=(e,t)=>Promise.all(e.map(async e=>{let n;try{n=await t(e)}catch{n=void 0}return[e,n]})),Pi=async({filteredItems:e,groupOnColumn:t,groupOnDescending:n,sortOnColumn:r,descending:i,noLocalSort:a})=>{if(!a&&!t&&r!=null&&r.sortOn!=null)return(await Ni(e,e=>r.getComparableValue({...r,valuePath:r.sortOn},e))).sort((e,t)=>Ai(e[1],t[1])*(i?-1:1)).map(([e])=>e);if(t?.groupOn==null)return[];let o=await Ni(e,e=>t.getComparableValue({...t,valuePath:t.groupOn},e)),s=[];return o.forEach(([e,t])=>{if(t===void 0)return;let n=s.find(e=>e.id===t);if(n!=null){n.items.push(e);return}s.push({id:t,name:t,items:[e]})}),s.sort((e,t)=>Ai(e.id,t.id)*(n?-1:1)),r!=null&&r.sortOn!=null&&!a&&await Promise.all(s.map(async e=>{e.items=(await Ni(e.items,e=>r.getComparableValue({...r,valuePath:r.sortOn},e))).sort((e,t)=>Ai(e[1],t[1])*(i?-1:1)).map(([e])=>e)})),s}})))()}var Ii,Li,Ri;function zi(){return(zi=e((()=>{E(),Ce(),ee(),Fi(),Ii=(e,t,n)=>e.editable?e.renderEditCell(e,t,n(e,t.item)):e.renderCell(e,t),Li=(e,t)=>{let n=e.cellTitleFn(e,t);return Mi(n)?o(Promise.resolve(n),``):n??``},Ri=({columns:e,groupOnColumn:t,item:n,index:i,selected:a,expanded:o,onItemChange:s})=>r(e,e=>e.name,e=>w`<div
				class="cell itemRow-cell ${e.cellClass??``}"
				align="${e.align??`left`}"
				part="cell itemRow-cell cell-${e.name} itemRow-cell-${e.name}"
				?hidden="${e===t}"
				?editable="${e.editable}"
				title="${Li(e,n)}"
				name="${e.name}"
			>
				${Ii(e,{item:n,index:i,selected:a,expanded:o},s)}
			</div>`),customElements.define(`cosmoz-omnitable-item-row`,T(Ri,{useShadowDOM:!1}))})))()}var Bi,Vi;function Hi(){return(Hi=e((()=>{xe(),Bi=M`
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
`,Vi=M`
	:host {
		display: flex;
		flex-direction: column;
		position: relative;
		overflow: hidden;
		color: var(--cz-color-text-secondary);
		/* Links in cells read as text; the row is the click target. */
		--cz-link-color: currentColor;
		--cz-link-color-hover: var(--cz-color-text-primary);
	}
	:host a {
		color: inherit;
		text-decoration: var(--cosmoz-omnitable-link-decoration, none);
	}
	:host a:hover {
		text-decoration: var(--cosmoz-omnitable-link-decoration-hover, underline);
		text-underline-offset: 2px;
		color: var(--cz-color-text-primary);
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
		border-block: 1px solid var(--cz-color-border-secondary);
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
		background-color: var(--cz-color-bg-primary-hover);
	}

	/* Row checkboxes appear on hover, focus or once any row is selected. */
	@media (hover: hover) {
		.itemRow .checkbox:not(:checked, :focus-visible) {
			opacity: 0;
			transition: opacity 120ms;
		}
		.itemRow:hover .checkbox,
		.tableContent:has(.itemRow[selected]) .itemRow .checkbox {
			opacity: 1;
		}
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
		opacity: 0;
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
	.cell:hover .sg,
	.sg[data-on] {
		opacity: 1;
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
`})))()}var Ui,Wi;function Gi(){return(Gi=e((()=>{Je(),Ui=e=>{let t=e.replace(/"/gu,`""`);return t.search(/("|,|\n)/gu)>=0?`"`+t+`"`:e},Wi=async(e,t,n)=>{let r=e.map(e=>Ui(e.title)).join(`;`)+`
`,i=await Promise.all(t.map(async t=>(await Promise.all(e.map(async e=>{let n;try{n=await e.getString(e,t)}catch{n=void 0}return n==null?``:Ui(String(n))}))).join(`;`)+`
`));i.unshift(r),at(new File(i,n,{type:`text/csv;charset=utf-8`}))}})))()}var Ki,qi;function Ji(){return(Ji=e((()=>{it(),Je(),Ki=async(e,t)=>{let n=e.map(e=>e.title),r=await Promise.all(t.map(async t=>Promise.all(e.map(async e=>{let n;try{n=await e.toXlsxValue(e,t)}catch{n=``}return n??``}))));return r.unshift(n),r},qi=async(e,t,n,r)=>{let i=await Ki(e,t),a=new ct(n).addSheetFromData(i,r).generate();at(new File([a],n,{type:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`}))}})))()}var Yi,$,Xi;function Zi(){return(Zi=e((()=>{Yi=Symbol(`index`),$=Symbol(`All`),Xi=(e,t)=>{if(typeof e.findLastIndex==`function`)return e.findLastIndex(t);for(let n=e.length-1;n>=0;n--)if(t(e[n],n,e))return n;return-1}})))()}var Qi;function $i(){return($i=e((()=>{Fe(),u(),k(),C(),Gi(),Ji(),Zi(),Qi=({columns:e,selectedItems:t,setSelectedItems:n,csvFilename:r,xlsxFilename:i,xlsxSheetname:a,topPlacement:o,enableSelectAll:s,allSelected:c,allItemsCount:l})=>{let u=t===$,d=u||t.length>0,f=t!==$&&s&&c,p=t=>w`<cosmoz-dropdown-menu
			part="extra"
			slot="extra"
			.placement=${o}
		>
			${te({slot:`button`})}
			<cosmoz-button
				@click=${()=>Wi(e,t,r)}
			>
				${O(`Save selected items as CSV`)}
			</cosmoz-button>
			<cosmoz-button
				@click=${()=>qi(e,t,i,a)}
			>
				${O(`Save selected items as XLSX`)}
			</cosmoz-button>
			<slot name="download-menu"></slot
		></cosmoz-dropdown-menu>`,m=D(u,()=>l===void 0?O(`All items selected`):O(`All {count} items selected`,{count:l}),()=>O(`{count} selected item`,{count:t===$?0:t.length}));return w`<cosmoz-bottom-bar
		id="bottomBar"
		?active=${d}
		part="bottomBar"
		exportparts="bar: bottomBar-bar, info: bottomBar-info, buttons: bottomBar-buttons"
	>
		<slot name="info" slot="info">
			${m}
			${D(f,()=>w`&nbsp;<span
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
		${D(t!==$,()=>p(t))}
	</cosmoz-bottom-bar>`}})))()}var ea;function ta(){return(ta=e((()=>{C(),ea=({allSelected:e,onAllCheckboxChange:t,sortAndGroup:n,dataIsValid:r,data:i,columns:a,filters:o,groupOnColumn:s,setFilterState:c,settingsConfig:l,hideSelectAll:u})=>w`<sort-and-group-provider .value=${n}>
		<div class="header" id="header" part="header">
			${D(!u,()=>w`<input
						class="checkbox all"
						type="checkbox"
						.checked=${e}
						@input=${t}
						?disabled=${!r}
						part="all"
					/>`)}
			${D(u,()=>w` <cosmoz-omnitable-settings
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
	</sort-and-group-provider>`})))()}var na,ra;function ia(){return(ia=e((()=>{E(),na=n`
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
`,ra=({settingsConfig:e})=>{let{columns:t,collapsed:n}=e,r=t.filter(e=>!n.some(t=>t.name===e.name));return w`<div class="skeleton">
		${Array.from({length:5},()=>w`<div>
					<div class="checkbox"></div>
					${r.map(e=>w`<div
								class="cell"
								part=${`cell-${e.name}`}
								name=${e.name}
							></div>`)}
				</div>`)}
	</div>`},customElements.define(`cosmoz-omnitable-skeleton`,T(ra,{styleSheets:[na]}))})))()}var aa;function oa(){return(oa=e((()=>{E(),ia(),Ne(),k(),C(),aa=(e,t)=>{let{settingsConfig:n}=e,{processedItems:r,dataIsValid:i,filterIsTooStrict:a,loading:o,displayEmptyGroups:c,compareItemsFn:l,selectedItems:u,setSelectedItems:d,renderItem:f,renderGroup:p,error:m}=t;return w`${D(!o&&!i&&!m,()=>w`<div class="tableContent-empty">
					<slot name="empty-set-message">
						${st({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
						<div class="tableContent-empty-message">
							<h3>${O(`Working set empty`)}</h3>
							<p>${O(`No data to display`)}</p>
						</div>
					</slot>
				</div>`)}
		${D(a,()=>w`<div class="tableContent-empty">
					${st({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
					<div>
						<h3>${O(`Filter too strict`)}</h3>
						<p>${O(`No matches for selection`)}</p>
					</div>
				</div>`)}
		${D(o&&!r.length,()=>w`<div class="tableContent-empty overlay">
					<cosmoz-omnitable-skeleton
						.settingsConfig=${n}
					></cosmoz-omnitable-skeleton>
				</div>`)}
		${D(o&&r.length,()=>w`<div class="tableContent-empty overlay spinner">
					<cz-spinner></cz-spinner>
				</div>`)}
		${D(m,()=>w`<div class="tableContent-empty overlay">
					${He({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
					<div class="tableContent-empty-message">
						<h3>${O(`Error loading data`)}</h3>
						<p>${m.message}</p>
					</div>
				</div>`)}
		<div class="tableContent-scroller" id="scroller" part="scroller">
			<cosmoz-grouped-list
				id="groupedList"
				.data=${r}
				.selectedItems=${u}
				@selected-items-changed=${s(d)}
				.displayEmptyGroups=${c}
				.compareItemsFn=${l}
				.renderItem=${f}
				.renderGroup=${p}
			></cosmoz-grouped-list>
			<slot name="extraContent"></slot>
		</div>`}})))()}var sa,ca;function la(){return(la=e((()=>{xe(),Hi(),sa=M`
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
	${Bi}
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
`,ca=M`
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
`})))()}var ua,da;function fa(){return(fa=e((()=>{ce(),E(),ua=e=>{let t=parseInt(e??``,10);return isFinite(t)?t:void 0},da=e=>{let{config:t}=e,{settings:n,setSettings:r,collapsed:i,requestTween:a}=t,o=le({collapsed:i,settings:n.columns,requestTween:a,setSettings:v(e=>r(t=>({...t,columns:e})),[r])});return{...t,onDown:v(e=>{let t=e.target instanceof Element?e.target:null;t&&t.closest(`.pull`)&&(o.handle=e.currentTarget instanceof HTMLElement?e.currentTarget:null)},[o]),onDragStart:v(e=>{let t=e.target instanceof HTMLElement?e.target:null,n=ua(t?.dataset.index);if(!t||!o.handle?.contains(t)||n==null)return e.preventDefault();o.handle=null,e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`omnitable/sort-index`,String(n)),e.dataTransfer.setData(`text/plain`,String(n)),setTimeout(()=>t.classList.add(`drag`),0),t.addEventListener(`dragend`,e=>{(e.target instanceof HTMLElement?e.target:null)?.classList.remove(`drag`)},{once:!0})},[o]),onDragEnter:v(e=>{let t=e.currentTarget instanceof HTMLElement?e.currentTarget:null;t&&t===e.target&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`,t.classList.add(`dragover`))},[]),onDragOver:v(e=>{e.preventDefault(),e.currentTarget instanceof HTMLElement&&e.currentTarget.classList.add(`dragover`)},[]),onDragLeave:v(e=>{let t=e.currentTarget instanceof HTMLElement?e.currentTarget:null;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||t.classList.remove(`dragover`))},[]),onDrop:v(e=>{let t=ua(e.dataTransfer?.getData(`omnitable/sort-index`)),n=e.currentTarget instanceof HTMLElement?e.currentTarget:null,r=ua(n?.dataset.index),{settings:i,setSettings:a,requestTween:s}=o;n?.classList.remove(`dragover`),e.preventDefault();let c=i.slice();c.splice(r+(t>=r?0:-1),0,c.splice(t,1)[0]),s?.(),a(c)},[o]),onToggle:v(e=>{let{settings:t,setSettings:n,requestTween:r}=o,i=t.map(e=>({...e,disabled:e.disabled||o.collapsed?.some(t=>t.name===e.name)})),a=e.target instanceof HTMLInputElement?e.target:null,s=ua((e.target instanceof Element?e.target:null)?.closest(`[data-index]`)?.getAttribute(`data-index`));s!=null&&(i.splice(s,1,{...t[s],disabled:!a?.checked,priority:a?.checked?t.reduce((e,t)=>Math.max(e,t.priority??0),0)+1:t[s]?.priority}),r?.(),n(i))},[o])}}})))()}var pa,ma,ha,ga;function _a(){return(_a=e((()=>{Ge(),lt(),ht(),u(),xe(),Oe(),E(),k(),li(),la(),fa(),pa=[Ue({apply({availableHeight:e,elements:t}){Object.assign(t.floating.style,{maxHeight:`${Math.max(0,e)}px`})}}),...ze],ma=({onDragStart:e,onDragEnter:t,onDragOver:n,onDragLeave:r,onDrop:i,onDown:a,onToggle:o,collapsed:s,filters:c})=>(l,u)=>{let d=!!s?.find(e=>e.name===l.name),f=!l.disabled&&!d;return w` <div
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
			<button class="pull">${_e({width:`16`,height:`16`})}</button>
			<label class="title" ?has-filter=${!Qe(c[l.name]?.filter)}
				>${l.title}</label
			>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${f}
				@click=${o}
				.indeterminate=${d}
			/>
		</div>`},ha=e=>{let{settings:t,settingsId:n,onSave:r,onReset:i,hasChanges:a,canReset:o,opened:s,setOpened:c,...l}=da(e);return w` <div class="headline">
			<span> ${O(`Sort and filter`)} </span>
			<cosmoz-button
				variant="tertiary"
				aria-label="${O(`Close settings`)}"
				@click=${e=>{let t=e.currentTarget instanceof HTMLElement?e.currentTarget:null;t?.focus(),t?.blur()}}
			>
				${S({width:`16`,height:`16`})}
			</cosmoz-button>
		</div>

		<div class="contents">
			<div
				class="heading"
				?data-opened=${s.columns}
				@click=${()=>c(e=>({...e,columns:!e.columns}))}
				part="columns columns-heading"
			>
				${O(`Columns`)} ${be({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse
				?opened="${s.columns}"
				part="columns columns-content"
			>
				<div class="list">${t.columns?.map(ma(l))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${s.sort}
				@click=${()=>c(e=>({...e,sort:!e.sort}))}
			>
				${O(`Sort on`)} ${be({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse ?opened=${s.sort}> ${ci()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${s.group}
				@click=${()=>c(e=>({...e,group:!e.group}))}
				part="groups groups-heading"
			>
				${O(`Group on`)} ${be({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse ?opened=${s.group} part="groups groups-heading"
				>${si()}</cosmoz-collapse
			>
		</div>

		${D(n,()=>w`<div class="buttons">
					<cosmoz-button
						variant="tertiary"
						@click=${i}
						?disabled=${!o}
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
				</div>`)}`},customElements.define(`cosmoz-omnitable-settings-ui`,T(ha,{styleSheets:[ue(sa)]})),ga=({config:e,newLayout:t})=>w`
	<cosmoz-dropdown
		.placement="${t?`bottom-start`:`bottom-end`}"
		.middleware="${pa}"
	>
		<div title="${O(`Sort and filter`)}" slot="button">
			${D(t,()=>w`<div class="headerDots">...</div>`,()=>w` ${ne({width:`20`,height:`20`,styles:`color: var(--cz-color-text-primary)`})}`)}
			${D(e?.badge,()=>w`<div class="badge"></div>`)}
		</div>
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${e}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`,customElements.define(`cosmoz-omnitable-settings`,T(ga,{styleSheets:[ue(ca)]}))})))()}var va,ya,ba,xa,Sa;function Ca(){return(Ca=e((()=>{ge(),va=[`sortOn`,`descending`,`groupOn`,`groupOnDescending`],ya=e=>t=>typeof t==`object`&&!!t&&`name`in t&&t.name===e,ba=(e=[],t=[],n=[])=>{let r=t.filter(t=>e.some(ya(t.name))),i=e.filter(e=>e.name!=null&&!t.some(ya(e.name))&&!n.some(ya(e.name))),a=n.filter(e=>!t.some(ya(e.name)));return[...r,...a.flatMap(t=>{let n=e.find(e=>e.name===t.name);return n?{...t,title:n.title??t.title??``,minWidth:parseInt(n.minWidth??`0`,10)}:[]}),...i.map(e=>{let{name:t,title:n,priority:r,minWidth:i,width:a,flex:o}=e;return{name:t??``,title:n??``,priority:r??0,minWidth:parseInt(i??`0`,10),width:parseInt(a??`0`,10),flex:parseInt(o??`0`,10)}})]},xa=(e,t)=>({...t,...fe(Array.from(va))(e),columns:e.columns?.map(fe([`name`,`priority`,`width`,`flex`,`disabled`]))??t?.columns}),Sa=({columns:e,settings:t,savedSettings:n,initial:r})=>({...Object.fromEntries(va.flatMap(e=>r?.[e]==null?[]:[[e,r[e]]])),...n?fe(Array.from(va))(n):{},...t,columns:ba(e,t?.columns,n?.columns)})})))()}var wa;function Ta(){return(Ta=e((()=>{wa=({prefix:e=`omnitable-`}={})=>({write:async(t,n)=>{let r=e+t;try{n?localStorage.setItem(r,JSON.stringify(n)):localStorage.removeItem(r)}catch(e){console.error(e)}},read:async t=>{if(!t)return null;try{let n=localStorage.getItem(e+t);return n==null?null:JSON.parse(n)}catch(e){return console.error(e),null}}})})))()}var Ea,Da;function Oa(){return(Oa=e((()=>{E(),Ta(),Ea=ie(wa),Da=()=>{let e=h(Ea);return l(()=>e(),[e])}})))()}function ka(){return(ka=e((()=>{Oa()})))()}var Aa;function ja(){return(ja=e((()=>{E(),ka(),Ca(),Aa=(e,t,n,r)=>{let[i,a]=A(e?void 0:null),{read:o,write:s}=Da();return N(async()=>{e&&a(await o(e))},[e,o]),{settingsId:e,savedSettings:i,onSave:v(async()=>{if(!e)return;let r=xa(t,i);await s(e,r),n(),a(r)},[t,i]),onReset:v(async()=>{n(),e&&i!=null&&(await s(e),a(null)),r?.()},[e,i,s,r]),hasChanges:t!=null,canReset:t!=null||i!=null}}})))()}var Ma;function Na(){return(Na=e((()=>{E(),J(),Ca(),ja(),Ma=({settingsId:e,host:t})=>{let n=l(()=>Object.fromEntries(va.map(e=>[e,t[e]])),[]),r=we(),i=v(()=>{r.current?.(n)},[n]),[a,o]=A(),[s,c]=A({columns:!0,sort:!0}),{savedSettings:u,...d}=Aa(e,a,o,i),{enabledColumns:f,disabledFiltering:p}=t,m=dn(t,{enabledColumns:f,disabledFiltering:p}),h=l(()=>Sa({columns:m,settings:a,savedSettings:u??void 0,initial:n}),[m,a,u]),g=l(()=>h.columns.map(e=>m.find(t=>t.name===e.name)).filter(e=>e!==void 0),[m,...h.columns.map(e=>e.name)]);return{...d,savedSettings:u,opened:s,setOpened:c,settings:h,columns:g,setSettings:o,resetRef:r}}})))()}function Pa(){return(Pa=e((()=>{_a(),Na()})))()}var Fa,Ia;function La(){return(La=e((()=>{Fa=e=>Number.isFinite(e)?e:0,Ia=(e,t)=>{let n=[],[r,i]=e.reduce(([e,t],{width:n,flex:r})=>[e+n,t+r],[0,0]),a=t-r,o=Fa(a/i),s=0,c=0,l=0;for(let t=0;t<e.length;t++){let{width:i,minWidth:u,flex:d}=e[t];if(u>i+(a>=0?o*d:i*a/r)){s+=i,c+=u,l+=d,n[t]=u;continue}if(d===0){s+=i,c+=i,n[t]=i;continue}}r-=s,a=t-c-r,i-=l,o=Fa(a/i);for(let t=0;t<e.length;t++){if(n[t]!=null)continue;let{width:i,flex:s}=e[t],c=a>=0?o*s:i*a/r;n[t]=i+c}return n}})))()}var Ra,za,Ba;function Va(){return(Va=e((()=>{La(),Zi(),Ra=(e,t)=>{let n=Xi(e,e=>e!=null&&e>0),r=(e,t)=>`.cell[name="${e}"], cosmoz-omnitable-skeleton::part(cell-${e}){width: ${t}px;padding: 0 min(3px, ${t/2}px)}`,i=e=>`cosmoz-omnitable-resize-nub[name="${e}"]{display:none}`,a=e=>`cosmoz-omnitable-resize-nub[name="${e}"], .cell[name="${e}"]{display:none}`,o=0,s=0;return t.map((t,c)=>{let l=e[c];if(l==null||l===0)return a(t.name);o+=l;let u=Math.round(o),d=u-s;s=u;let f=r(t.name,d);return c===n?`${f}\n${i(t.name)}`:f}).join(`
`)},za=(e,t,n)=>{let r=e.filter(e=>!e.hidden),i=r.reduce((e,{width:t})=>e+t,0);if(r.length>1&&i>t)return za(r.slice(1),t,n);let a=r.reduce(([e,t],n,r)=>[Math.max(e,n.index),n.index>e?r:t],[-1,-1])[1];return a!==-1&&(r[a].flex=1),Ia(r,t).reduce((e,t,n)=>(e[r[n].index]=t,e),Array(n).fill(void 0))},Ba=(e,t)=>e.length===0?`.cell {display: none;}`:Ra(e,t)})))()}var Ha;function Ua(){return(Ua=e((()=>{E(),Ha=(e,t)=>N(()=>{let n=new ResizeObserver(([e])=>{e.contentRect?.width!==0&&t(e.contentRect.width-88)});return n.observe(e),()=>n.unobserve(e)},[])})))()}var Wa;function Ga(){return(Ga=e((()=>{E(),Ua(),Wa=e=>{let[t,n]=A(()=>e.getBoundingClientRect().width-88);return Ha(e,n),t}})))()}var Ka;function qa(){return(qa=e((()=>{E(),Va(),Ka=({canvasWidth:e,groupOnColumn:t,config:n,miniColumn:r})=>l(()=>{if(!Array.isArray(n)||e==null||e===0)return[];let i=n.map((e,n)=>({minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,name:e.name,index:n,hidden:e.name===t?.name||e.disabled})).map(e=>r?{...e,hidden:r.name!==e.name}:e).sort(({index:e,priority:t},{index:n,priority:r})=>t===r?n-e:t-r);return za(i,e,i.length)},[e,t,n])})))()}var Ja;function Ya(){return(Ya=e((()=>{E(),Ja=({host:e,canvasWidth:t,columns:n})=>{let r=e.miniBreakpoint??480,i=l(()=>t<=r,[t,r]),[a,...o]=l(()=>i?n?.filter(e=>e.mini!=null).sort((e,t)=>(e.mini??0)-(t.mini??0)):[],[n,i])??[],s=!!a;return N(()=>{e.toggleAttribute(`mini`,s)},[s]),{isMini:s&&i,miniColumn:a,miniColumns:o}}})))()}var Xa;function Za(){return(Za=e((()=>{E(),Xa=({host:e,canvasWidth:t,layout:n,setSettings:r,requestTween:i})=>{let a=we();a.current=e=>{i(),r(r=>{let i=r.columns,{detail:{newWidth:a,column:o}}=e,s=i.findIndex(e=>e.name===o.name),c=[],l=i.reduce((e,t)=>Math.max(e,t.priority),-1/0);for(let e=0;e<n.length;e++)if(c[e]={...i[e]},e<s&&n[e]&&(c[e].width=n[e],c[e].flex=0,c[e].priority=l),e===s){let r=n.reduce((e,t,n)=>n<s&&t?e-t:e,t);c[e].width=Math.min(r,Math.max(a,i[e].minWidth)),c[e].flex=0,c[e].priority=l}return{...r,columns:c}})},N(()=>{let t=e=>a.current?.(e);return e.addEventListener(`column-resize`,t),()=>e.removeEventListener(`column-resize`,t)},[])}})))()}var Qa,$a,eo;function to(){return(to=e((()=>{Se(),ce(),E(),Qa=(e,t)=>{let n=l(()=>{let t=!1,n,r=()=>{t&&(n=requestAnimationFrame(r),e()&&(t=!1))};return{start:()=>{t=!0,cancelAnimationFrame(n),n=requestAnimationFrame(r)},stop:()=>{t=!1,cancelAnimationFrame(n)}}},[]);N(()=>{n.start()},t),N(()=>()=>n.stop(),[])},$a=(e=0,t=0)=>Math.abs(e-t)<.1,eo=(e,t=1.9,n=se,r)=>{let i=le({target:e,speedFactor:t,onConverge:r}),a=v(()=>{if(!i.tween)return i.tween=i.target,n(i.tween),i.onConverge?.(),!0;if(i.target.every((e,t)=>i.tween[t]===e))return n(i.tween),i.onConverge?.(),!0;if(i.tween=i.target.map((e,t)=>$a(i.tween[t],e)?e:(i.tween[t]??0)+((e??0)-(i.tween[t]??0))/i.speedFactor||0),n(i.tween),i.tween.every((e,t)=>e===i.target[t]))return i.onConverge?.(),!0},[]);Qa(a,[e])}})))()}var no,ro;function io(){return(io=e((()=>{ce(),E(),Va(),Ga(),qa(),Ya(),Za(),to(),no=e=>{let t=l(()=>new CSSStyleSheet,[]);return N(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,t]},[]),t},ro=({host:e,columns:t,settings:n,setSettings:r,resizeSpeedFactor:i,sortAndGroupOptions:a})=>{let o=Wa(e),{isMini:s,miniColumn:c,miniColumns:u}=Ja({host:e,canvasWidth:o,columns:t}),{groupOnColumn:d}=a,f=Ka({canvasWidth:o,groupOnColumn:d,miniColumn:c,config:n.columns}),p=no(e),m=l(()=>n.columns.reduce((e,n,r)=>f[r]!=null||n.name===d?.name||n.disabled?e:[...e,t.find(e=>e.name===n.name)],[]),[t,n,f]),[h,g]=A(1),_=v(()=>g(i??1.9),[i]),y=v(()=>g(1),[]),b=le({columns:n.columns});return eo(f,h,e=>{let t=Ba(e,b.columns);p.replaceSync(t)},y),Xa({host:e,canvasWidth:o,layout:f,setSettings:e=>r(e(n)),requestTween:_}),{isMini:s,collapsedColumns:m,miniColumns:u,requestTween:_}}})))()}var ao;function oo(){return(oo=e((()=>{ao=({host:e,...t})=>{let{csvFilename:n=`omnitable.csv`,xlsxFilename:r=`omnitable.xlsx`,xlsxSheetname:i=`Omnitable`,topPlacement:a=`top-end`}=e;return{csvFilename:n,xlsxFilename:r,xlsxSheetname:i,topPlacement:a,...t}}})))()}var so;function co(){return(co=e((()=>{E(),Zi(),so=({host:e,selectedItems:t,data:n,dataIsValid:r,columns:i,sortAndGroupOptions:a,collapsedColumns:o,settings:s,filterFunctions:c,settingS:u,filters:d,setFilterState:f,hideSelectAll:p,requestTween:m,...h})=>{let g=t===$||!!n&&n.length>0&&Array.isArray(t)&&t.length===n.length,_=t=>{if(!(t.target instanceof HTMLInputElement))return;let n=e.shadowRoot.querySelector(`#groupedList`);t.target.checked?n.selectAll():n.deselectAll()},{groupOnColumn:v}=a,y=l(()=>[v,...o,...s.columns.filter(e=>e.disabled)].some(e=>!!e&&!!e.name&&Object.keys(c).includes(e.name)),[c,s,o]),b=l(()=>({...u,collapsed:o,badge:y,filters:d,requestTween:m}),[u,o,y,d,m]);return N(()=>{let t=e.shadowRoot.querySelector(`#tableContent`),n=new ResizeObserver(t=>requestAnimationFrame(()=>{e.style.setProperty(`--ot-height`,t[0]?.contentRect.height+`px`)}));return n.observe(t),()=>n.unobserve(t)},[]),{allSelected:g,onAllCheckboxChange:_,data:n,dataIsValid:r,columns:i,settingsConfig:b,filters:d,groupOnColumn:v,setFilterState:f,hideSelectAll:p,sortAndGroup:a.sortAndGroup,...h}}})))()}var lo,uo,fo,po,mo,ho,go;function _o(){return(_o=e((()=>{u(),Oe(),E(),Zi(),Y(),lo=e=>e instanceof HTMLInputElement,uo=e=>e instanceof HTMLElement,fo=e=>e?`groupRow groupRow-folded`:`groupRow`,po=({item:e,index:t})=>n=>D((n?.length??0)>0,()=>w`
				<div class="itemRow-minis" part="item-minis">
					${n.map(n=>w`<div
								class="itemRow-mini"
								part="item-mini item-mini-${n.name}"
							>
								${(n.renderMini??n.renderCell)(n,{item:e,index:t})}
							</div>`)}
				</div>
			`),mo=({columns:e,collapsedColumns:t,miniColumns:n,onItemClick:r,onCheckboxChange:i,dataIsValid:a,groupOnColumn:o,onItemChange:s,rowPartFn:c})=>(l,u,{selected:d,expanded:f,toggleCollapse:p})=>w`
			<div
				?selected=${d}
				part="${[`itemRow`,`itemRow-${l[Yi]}`,c?.(l,u)].filter(Boolean).join(` `)}"
				.dataIndex=${l[Yi]}
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
						?hidden="${Qe(t.length)}"
						?aria-expanded="${f}"
						@click="${p}"
					>
						${be({width:`16`,height:`16`})}
					</button>
				</div>
				${po({item:l,index:u})(n)}
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
		`,ho=({onCheckboxChange:e,dataIsValid:t,groupOnColumn:n})=>(r,i,{selected:a,folded:o,toggleFold:s})=>w` <div
			class="${fo(o)}"
			part="groupRow groupRow-${r[Yi]}"
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
				${be({width:`16`,height:`16`})}
			</button>
		</div>`,go=({host:e,error:t,dataIsValid:n,processedItems:r,columns:i,collapsedColumns:a,miniColumns:o,sortAndGroupOptions:s,rowPartFn:c,...u})=>{let{loading:d=!1,displayEmptyGroups:f=!1,compareItemsFn:p}=e,m=we({shiftKey:!1,ctrlKey:!1}),h=v(t=>{if(!lo(t.target))return;let n=t.target,r=n.dataItem,i=n.checked,a=e.shadowRoot.querySelector(`#groupedList`);m.current.shiftKey?a.toggleSelectTo(r,i):m.current.ctrlKey?(n.checked=!0,a.selectOnly(r)):a.toggleSelect(r,i),t.preventDefault(),t.stopPropagation()},[]);N(()=>{let e=({shiftKey:e,ctrlKey:t})=>{m.current={shiftKey:e,ctrlKey:t}};return window.addEventListener(`keydown`,e),window.addEventListener(`keyup`,e),()=>{window.removeEventListener(`keydown`,e),window.removeEventListener(`keyup`,e)}},[]);let g=v(t=>{if(!uo(t.currentTarget))return;let n=t.currentTarget,r=t.composedPath();r.slice(0,r.indexOf(n)).some(e=>e instanceof Element&&e.matches(`a, .checkbox, .expand`))||e.dispatchEvent(new window.CustomEvent(`omnitable-item-click`,{bubbles:!0,composed:!0,detail:{item:n.dataItem,index:n.dataIndex}}))},[]),{groupOnColumn:_}=s,y=v((t,n)=>r=>mn(e,t,n,r),[]);return{...u,processedItems:r,dataIsValid:n,filterIsTooStrict:n&&r.length<1,loading:d,compareItemsFn:p,displayEmptyGroups:f,error:t,renderItem:l(()=>mo({columns:i,collapsedColumns:a,miniColumns:o,onItemClick:g,onCheckboxChange:h,dataIsValid:n,groupOnColumn:_,onItemChange:y,rowPartFn:c}),[i,a,g,h,n,_,y,c]),renderGroup:l(()=>ho({onCheckboxChange:h,dataIsValid:n,groupOnColumn:_}),[h,n,_])}}})))()}var vo,yo,bo,xo,So,Co;function wo(){return(wo=e((()=>{Se(),E(),ji(),Fi(),J(),hi(),Zi(),vo=(e,t)=>(n,r)=>Ai(e(n),e(r))*(t?-1:1),yo=e=>e.replace(/([a-z0-9])([A-Z])/gu,`$1-$2`).toLowerCase(),bo=(e,t)=>{e&&t&&Object.entries(t).forEach(([t,n])=>{let r=e[q];r.__ownChange=!0,Object.assign(r,{[t]:n}),r.__ownChange=!1,r.dispatchEvent(new CustomEvent(`${yo(t)}-changed`,{bubbles:!0,detail:{value:n}}))})},xo=(e,t)=>Object.assign(e,{[Yi]:t}),So=Symbol(`unparsed`),Co=({data:e,columns:t,hashParam:n,sortAndGroupOptions:r,noLocalSort:i,noLocalFilter:a})=>{let{groupOnColumn:o,groupOnDescending:s,sortOnColumn:c,descending:u}=r,d=v(([e,n])=>{let r=t.find(({name:t})=>t===e);return r==null?[e,void 0]:[e,n.filter&&r.serializeFilter(r,n.filter)]},[t]),f=v(([e,n])=>{let r=t.find(({name:t})=>t===e);if(r==null)return[e,{[So]:n}];let i={filter:r.deserializeFilter(r,n)};return bo(r,i),[e,i]},[t]),[p,m]=ui({},n,{multi:!0,suffix:`-filter--`,write:d,read:f}),h=v((e,n)=>m(r=>{let i=Ee(n,r[e]);return bo(t.find(t=>t.name===e),i),{...r,[e]:{...r[e],...i}}}),[t,m]),g=l(()=>Object.values(p).map(e=>e.filter),[p]),_=l(()=>Object.fromEntries(t.map(e=>[e.name,!e.noLocalFilter&&e.getFilterFn(e,p[e.name]?.filter)]).filter(e=>!!e[1])),[t,...g]),y=l(()=>!Array.isArray(e)||e.length===0?[]:Object.entries(_).length===0||a?e.slice():e.filter(e=>Object.values(_).every(t=>t(e))),[e,_,a]),[b,ee]=A(),x=l(()=>{let e=!i&&!o&&c?.sortOn!=null?y.map(e=>c.getComparableValue({...c,valuePath:c.sortOn},e)):[],t=o?.groupOn==null?[]:y.map(e=>o.getComparableValue({...o,valuePath:o.groupOn},e));return[...e,...t].some(Mi)},[y,o,c,i]),S=l(()=>{if(x)return b??y;if(!i&&!o&&c!=null&&c.sortOn!=null)return y.slice().sort(vo(e=>c.getComparableValue({...c,valuePath:c.sortOn},e),u));if(o!=null&&o.groupOn!=null){let e=y.reduce((e,t)=>{let n=o.getComparableValue({...o,valuePath:o.groupOn},t);if(n===void 0)return e;let r=e.find(e=>e.id===n);return r?(r.items.push(t),e):(r={id:n,name:n,items:[t]},[...e,r])},[]);return e.sort(vo(e=>o.getComparableValue({...o,valuePath:o.groupOn},e.items[0]),s)),!c||i?e:e.filter(e=>Array.isArray(e.items)).map(e=>(e.items.sort(vo(e=>c.getComparableValue({...c,valuePath:c.sortOn},e),u)),e))}return y},[x,b,y,o,s,c,u,i]);N(()=>{if(!x){b!=null&&ee(void 0);return}let e=!1;return(async()=>{try{let t=await Pi({filteredItems:y,groupOnColumn:o,groupOnDescending:s,sortOnColumn:c,descending:u,noLocalSort:i});e||ee(t)}catch(e){console.error(e)}})(),()=>{e=!0}},[x,y,o,s,c,u,i]);let C=l(()=>{let e=0,t=0,n=[];return S.forEach(r=>{if(`items`in r&&Array.isArray(r.items)){xo(r,t++),r.items.forEach(t=>{xo(t,e++),n.push(t)});return}return xo(r,e++),n.push(r)},[]),n},[S]);return N(()=>{m(e=>Object.values(e).some(e=>e[So]!=null)?Object.fromEntries(Object.entries(e).map(([e,t])=>{let n=t[So];return n==null?[e,t]:f([e,n])})):e)},[f]),{processedItems:S,visibleData:C,filters:p,filterFunctions:_,setFilterState:h}}})))()}var To,Eo;function Do(){return(Do=e((()=>{d(),_(),E(),To=e=>{let t=t=>{let n=e.data.indexOf(t);if(n<0)return null;let r=e.data.splice(n,1);if(e.data=e.data.slice(),Array.isArray(r)&&r.length>0)return r[0]},n=(t,n)=>{e.data.splice(t,1,n),e.data=e.data.slice()};return{removeItem:t,removeItems(e){let n=[];for(let r=e.length-1;r>=0;--r){let i=t(e[r]);i!=null&&n.push(i)}return n},replaceItemAtIndex:n,replaceItem(t,r){let i=e.data.indexOf(t);i>-1&&n(i,r)},selectItem(t){e.shadowRoot.querySelector(`#groupedList`).select(t)},selectAll(){e.shadowRoot.querySelector(`#groupedList`).selectAll()},deselectAll(){e.shadowRoot.querySelector(`#groupedList`).deselectAll()},deselectItem(t){e.shadowRoot.querySelector(`#groupedList`).deselect(t)},isItemSelected(t){return e.shadowRoot.querySelector(`#groupedList`).isItemSelected(t)}}},Eo=({host:e,visibleData:t,filters:n,...r})=>{let{setFilterState:i}=r,o=l(()=>To(e),[]),[s,u]=a(`selectedItems`,[]);m(r,Object.values(r)),m(o,Object.values(o)),N(()=>{let t=e=>{if(!(e instanceof CustomEvent))return;let t=e.detail;i(t.name,e=>({...typeof e==`object`&&e?e:{},...t.state}))};return e.addEventListener(`legacy-filter-changed`,t),()=>e.removeEventListener(`legacy-filter-changed`,t)},[]),c(`visibleData`,t),c(`sortedFilteredGroupedItems`,r.sortedFilteredGroupedItems),c(`sortOn`,r.sortOn),c(`descending`,r.descending),c(`isMini`,r.isMini);let d=l(()=>Object.fromEntries(Object.entries(n).filter(([,{filter:e}])=>e!==void 0).map(([e,{filter:t}])=>[e,t])),[n]);return c(`filters`,d,Object.values(d)),{selectedItems:s,setSelectedItems:u}}})))()}var Oo;function ko(){return(ko=e((()=>{Pa(),io(),oo(),co(),_o(),wo(),Do(),xi(),Oo=e=>{let{hashParam:t,settingsId:n,data:r,resizeSpeedFactor:i,noLocal:a,noLocalSort:o=a,noLocalFilter:s=a,error:c,rowPartFn:l}=e,u=Ma({settingsId:n,host:e}),{settings:d,setSettings:f,columns:p,resetRef:m,savedSettings:h}=u,g=yi(p,t,{settings:d,setSettings:f,resetRef:m,ready:h!==void 0}),{processedItems:_,visibleData:v,filters:y,setFilterState:b,filterFunctions:ee}=Co({data:r,columns:p,hashParam:t,sortAndGroupOptions:g,noLocalSort:o,noLocalFilter:s}),{isMini:x,collapsedColumns:S,miniColumns:C,requestTween:te}=ro({host:e,columns:p,settings:d,setSettings:f,resizeSpeedFactor:i,sortAndGroupOptions:g}),w=r&&Array.isArray(r)&&r.length>0,{selectedItems:ne,setSelectedItems:re}=Eo({host:e,visibleData:v,sortedFilteredGroupedItems:_,columns:p,filters:y,setFilterState:b,isMini:x,...g}),ie=so({host:e,selectedItems:ne,sortAndGroupOptions:g,dataIsValid:w,data:r,columns:p,filters:y,collapsedColumns:S,settings:d,filterFunctions:ee,settingS:u,setFilterState:b,hideSelectAll:e.hideSelectAll===!0,requestTween:te});return{header:ie,list:go({host:e,error:c,dataIsValid:w,processedItems:_,selectedItems:ne,setSelectedItems:re,columns:p,collapsedColumns:S,miniColumns:C,sortAndGroupOptions:g,rowPartFn:l}),footer:ao({host:e,selectedItems:ne,allSelected:ie.allSelected,setSelectedItems:re,columns:p,enableSelectAll:e.enableSelectAll,allItemsCount:e.allItemsCount})}}})))()}function Ao(){return(Ao=e((()=>{C(),customElements.define(`cosmoz-grouped-list-row`,class extends HTMLElement{get item(){return this._item}set item(e){this._item=e,this._render()}get index(){return this._index}set index(e){this._index=e,this._render()}get renderFn(){return this._renderFn}set renderFn(e){this._renderFn=e,this._render()}_render(){this._item!=null&&this._index!=null&&this._renderFn!=null&&ve(this._renderFn(this._item,this._index),this)}})})))()}var jo,Mo,No,Po,Fo,Io,Lo,Ro,zo;function Bo(){return(Bo=e((()=>{jo={group:Symbol(`group`)},Mo=(e,t)=>(t.has(e)||t.set(e,{}),t.get(e)),No=(e,t)=>!!Mo(e,t).expanded,Po=(e,t)=>!!Mo(e,t).folded,Fo=e=>e?e.items instanceof Array:!1,Io=e=>{if(!Array.isArray(e)||e.length===0)return;let t=Array.isArray(e[0]?.items);if(!e.every(e=>Array.isArray(e.items)===t))throw Error(`Data must be homogeneous.`)},Lo=(e,t,n)=>{if(Array.isArray(e))return Io(e),e.reduce((e,r)=>{let i=r;return i.items?i.items.length?Mo(r,n).folded?e.concat(r):e.concat(r,i.items.map(e=>Object.assign(e,{[jo.group]:r}))):t?e.concat(r):e:e.concat(r)},[])},Ro=(e,...t)=>typeof e==`function`?e(...t):e,zo=(e,t)=>e===t})))()}var Vo;function Ho(){return(Ho=e((()=>{E(),Bo(),Vo=()=>{let[e,t]=A(()=>[new WeakMap]);return{setItemState:v((e,n)=>t(([t])=>{let r=Mo(e,t);return Object.assign(r,Ro(n,r)),[t]}),[]),state:e[0],signal:e}}})))()}var Uo;function Wo(){return(Wo=e((()=>{E(),Ho(),Bo(),Uo=()=>{let{setItemState:e,state:t,signal:n}=Vo();return{state:t,signal:n,toggleFold:v((t,n)=>{Fo(t)&&e(t,e=>({folded:n===void 0?!e.folded:n}))},[]),toggleCollapse:v((t,n)=>{Fo(t)||e(t,e=>({expanded:n===void 0?!e.expanded:!n}))},[])}}})))()}var Go;function Ko(){return(Ko=e((()=>{E(),Zi(),Bo(),Go=({compareItemsFn:e,data:t,flatData:n})=>{let[r,i]=a(`selectedItems`,()=>[]),[o,s]=A(),c=v(e=>r===$||r.includes(e),[r]),l=v(e=>r===$||(e?.items?.every(c)??!1),[r,c]),u=v(e=>c(e)||l(e),[c,l]),d=v(e=>{let t=e.items??[e];i(e=>e===$?e:[...e,...t.filter(t=>!e.includes(t))]),s(e)},[]),f=v(e=>{let t=e.items??[e];i(e=>e===$?(n??[]).filter(e=>!Fo(e)).filter(e=>!t.includes(e)):e.filter(e=>!t.includes(e))),s(e)},[n]),p=v(e=>{i(e.items?.slice()||[e]),s(e)},[]),m=v(()=>{i(t.flatMap(e=>e.items||e)),s(void 0)},[t]),h=v(()=>{i([]),s(void 0)},[]),g=v((e,t=!u(e))=>t?d(e):f(e),[u]),_=v((t,r)=>{if(!n)return;let i=o?n.findIndex(t=>e(t,o)):-1;if(i<0)return g(t,r);let[a,c]=[i,n.indexOf(t)].sort((e,t)=>e-t);n.slice(a,c+1).forEach((e,t,n)=>{t>0&&t<n.length-1&&Fo(e)||g(e,r)}),s(t)},[n,e,g]);return N(()=>i(t=>t!==$&&t.length>0&&n?n.filter(n=>t.find(t=>e(n,t))):t),[n]),{selectedItems:r,isItemSelected:c,isGroupSelected:l,isSelected:u,select:d,deselect:f,selectOnly:p,selectAll:m,deselectAll:h,toggleSelect:g,toggleSelectTo:_}}})))()}var qo,Jo,Yo;function Xo(){return(Xo=e((()=>{Te(),d(),E(),C(),Ao(),Wo(),Ko(),Bo(),qo={host:{position:`relative`,display:`flex`,flexDirection:`column`}},Jo=e=>{let{data:t,renderItem:n,renderGroup:r,displayEmptyGroups:i,compareItemsFn:a=zo}=e,{toggleFold:o,toggleCollapse:s,state:c,signal:u}=Uo(),d=l(()=>Lo(t,i,c),[t,i,u]),{selectedItems:f,isItemSelected:p,isGroupSelected:h,isSelected:g,select:_,deselect:y,selectOnly:b,selectAll:ee,deselectAll:x,toggleSelect:S,toggleSelectTo:C}=Go({compareItemsFn:a,data:t,flatData:d}),te=v((e,t)=>Array.isArray(e.items)?r(e,t,{selected:h(e),folded:Po(e,c),toggleSelect:t=>S(e,typeof t==`boolean`?t:void 0),toggleFold:()=>o(e)}):n(e,t,{selected:p(e),expanded:No(e,c),toggleSelect:t=>S(e,typeof t==`boolean`?t:void 0),toggleCollapse:()=>s(e)}),[n,r,f,S,u]);me(()=>{Object.assign(e.style,qo.host)},[]);let w={toggleFold:o,toggleCollapse:s,isItemSelected:p,isGroupSelected:h,isSelected:g,select:_,deselect:y,selectOnly:b,selectAll:ee,deselectAll:x,toggleSelect:S,toggleSelectTo:C};return m(w,Object.values(w)),{renderRow:te,flatData:d}},Yo=({renderRow:e,flatData:t})=>b({items:t,renderItem:(t,n)=>w`<cosmoz-grouped-list-row
				.item=${t}
				.index=${n}
				.renderFn=${e}
			></cosmoz-grouped-list-row>`})})))()}var Zo;function Qo(){return(Qo=e((()=>{E(),Xo(),Zo=e=>Yo(Jo(e)),customElements.define(`cosmoz-grouped-list`,T(Zo,{useShadowDOM:!1}))})))()}function $o(){return($o=e((()=>{Qo()})))()}var es,ts,ns;function rs(){return(rs=e((()=>{je(),kt(),ei(),ni(),wi(),ki(),zi(),E(),nt(),C(),y(),Hi(),$i(),ta(),oa(),ko(),$o(),es=e=>window.ShadyCSS?.ApplyShim?.transformCssText?.(e)||e,ts=e=>{let{header:t,list:n,footer:r}=Oo(e);return w`
		<style>
			${i([],()=>es(Vi))}
		</style>

		<div class="mainContainer">
			${ea(t)}
			<div class="tableContent" id="tableContent">
				${aa(t,n)}
			</div>
			${Qi(r)}
		</div>

		<div id="columns">
			<slot id="columnsSlot"></slot>
		</div>
	`},customElements.define(`cosmoz-omnitable`,T(ts,{observedAttributes:[`hash-param`,`sort-on`,`group-on`,`descending`,`group-on-descending`,`hide-select-all`,`settings-id`,`no-local`,`no-local-sort`,`no-local-filter`,`disabled-filtering`,`loading`,`mini-breakpoint`,`inline`,`enable-select-all`]})),ns=`
	<slot name="actions" slot="actions"></slot>
`,w(Object.assign([ns],{raw:[ns]})),ke(Object.assign([ns],{raw:[ns]}))})))()}export{rs as t};