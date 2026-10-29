import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{A as t,At as n,Bt as r,Dt as i,E as a,G as o,Ht as s,I as c,It as l,Kt as u,Mt as d,O as f,P as p,Pt as m,Q as h,R as g,Rt as _,S as v,T as y,U as b,Ut as x,V as S,X as C,Xt as w,Yt as T,Z as ee,_ as te,_t as ne,at as E,b as D,bt as re,c as O,ct as ie,d as ae,dt as oe,et as se,f as ce,ft as le,gt as ue,ht as de,i as fe,it as pe,kt as me,l as he,lt as ge,m as _e,mt as ve,n as ye,ot as be,p as xe,pt as Se,q as Ce,qt as we,r as Te,s as Ee,st as De,tt as Oe,u as ke,ut as Ae,v as je,vt as k,w as A,x as j,y as M,yt as N,z as Me}from"./iframe-Bo69QyTO.js";import{A as Ne,B as Pe,C as Fe,D as P,E as Ie,F as Le,H as Re,I as ze,J as Be,K as Ve,L as He,M as Ue,N as F,O as I,P as L,R as We,S as Ge,T as Ke,V as qe,W as Je,_ as Ye,a as Xe,b as Ze,c as Qe,d as $e,f as et,g as tt,h as nt,i as rt,j as it,k as at,l as ot,m as st,n as ct,r as lt,s as ut,t as dt,u as ft,v as pt,w as mt,x as ht,y as gt}from"./dist-BoO9JQat.js";import{n as _t,t as vt}from"./table-demo-helper-Dj0p9yas.js";var yt;function bt(){return(bt=e((()=>{k(),yt=()=>T`<style>
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
</style>`,customElements.define(`cz-spinner`,N(yt))})))()}var xt,St;function R(){return(R=e((()=>{p(),oe(),ie(),k(),xt=le`
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
`,St=()=>T`
	<style>
		${xt}
	</style>
	${g({className:`icon`,width:`18`,height:`18`})}
`,customElements.define(`cosmoz-clear-button`,N(St))})))()}var z,Ct,wt,Tt,Et,B;function V(){return(V=e((()=>{L(),z=({valuePath:e},t)=>F(t,e),Ct=z,wt=z,Tt=({valuePath:e},t)=>n=>{let r=F(n,e);return r!=null&&r.toString().toLowerCase().trim().includes(t.toLowerCase().trim())},Et=(e,t)=>t===``||t==null?null:t,B=e=>class extends e{static get properties(){return{isOmnitableColumn:{type:Boolean,value:!0},title:{type:String},valuePath:{type:String,notify:!0},values:{type:Array,notify:!0},filter:{type:Object},noLocalFilter:{type:Boolean},disabled:{type:Boolean,value:!1,notify:!0},editable:{type:Boolean,notify:!0},loading:{type:Boolean,value:!1,notify:!0},externalValues:{type:Boolean,value:!1,notify:!0},name:{type:String},sortOn:{type:String},groupOn:{type:String},noSort:{type:Boolean,value:!1},disabledFiltering:{type:Boolean,value:!1},width:{type:String,value:`75px`},minWidth:{type:String,value:`40px`},flex:{type:String,value:`1`},cellClass:{type:String,value:`default-cell`},headerCellClass:{type:String,value:`default-header-cell`},priority:{type:Number,value:0},hidden:{type:Boolean,notify:!0},align:{type:String,value:`left`},headerAlign:{type:String,value:null},renderHeader:{type:Function},renderCell:{type:Function},renderEditCell:{type:Function},renderGroup:{type:Function},mini:{type:Number,value:null},renderMini:{type:Function}}}static get observers(){return[`notifyFilterChange(filter)`]}notifyFilterChange(e){this.__ownChange||this.dispatchEvent(new CustomEvent(`legacy-filter-changed`,{detail:{name:this.name,state:this.legacyFilterToState(e)},bubbles:!0}))}legacyFilterToState(e){return{filter:e}}getFilterFn(){}getString(e,t){return z(e,t)}toXlsxValue(e,t){return Ct(e,t)}cellTitleFn(e,t){return this.getString(e,t)}headerTitleFn(e){return e.title}serializeFilter(e,t){return Et(e,t)}deserializeFilter(e,t){if(t==null)return null;if(typeof t==`string`)try{return window.decodeURIComponent(t)}catch{return null}return t}getComparableValue(e,t){return wt(e,t)}computeSource(e,t){return t}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n),this.dispatchEvent(new CustomEvent(`cosmoz-column-prop-changed`,{bubbles:!0}))}}})))()}var Dt,Ot,kt,At,jt,Mt,Nt;function Pt(){return(Pt=e((()=>{j(),R(),I(),w(),V(),Dt=e=>t=>e(n=>{if(n.inputValue===void 0&&t.target.value===``)return n;clearTimeout(n.t);let r=setTimeout(()=>e(e=>({...e,filter:e.inputValue})),1e3);return{...n,inputValue:t.target.value,t:r}}),Ot=e=>()=>e(e=>({...e,filter:e.inputValue})),kt=e=>t=>{t.keyCode===13&&(t.preventDefault(),e(e=>({...e,filter:e.inputValue})))},At=e=>t=>e(e=>({...e,headerFocused:t.detail.value})),jt=e=>()=>e(e=>({...e,filter:null,inputValue:null})),Mt=e=>e!=null&&e!==``,Nt=class extends B(P){static get properties(){return{minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},inputValue:{type:Object,notify:!0}}}getFilterFn(e,t){if(t!=null&&t!==``)return Tt(e,t)}renderCell(e,{item:t}){return T`<span class="default-column">${z(e,t)}</span>`}renderEditCell(e,{item:t},n){return T`<cosmoz-input
			variant="inline"
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${z(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,inputValue:n,headerFocused:r},i){return T`<cosmoz-input
			variant="inline"
			label=${e.title}
			?disabled=${e.disabledFiltering}
			.value=${n??t}
			@value-changed=${Dt(i)}
			focused=${r}
			@focused-changed=${At(i)}
			@keydown=${kt(i)}
			@blur=${Ot(i)}
		>
			${C(!e.disabledFiltering,()=>T`<cosmoz-clear-button
						suffix
						slot="suffix"
						?visible=${Mt(t)}
						light
						@click=${jt(i)}
					></cosmoz-clear-button>`)}
		</cosmoz-input>`}legacyFilterToState(e){return{filter:e,inputValue:e}}},customElements.define(`cosmoz-omnitable-column`,Nt)})))()}var Ft,It,Lt;function H(){return(H=e((()=>{j(),k(),w(),Ft=[`label`,`value`,`slot`,`always-float-label`,`disabled`,`variant`],It=x`
	${f}

	:host {
		--text-align: left;
	}

	:host([text-align='right']) {
		--text-align: right;
	}

	:host([text-align='center']) {
		--text-align: center;
	}

	label {
		text-align: var(--text-align);
	}

	#input {
		text-align: var(--text-align);
	}

	.wrap {
		height: 40px;
	}

	#input {
		margin-top: -4px;
	}
`,Lt=e=>{let{label:n,value:r,slot:i}=e;e.toggleAttribute(`has-value`,!!r);let a=T`<div
		id="input"
		part="input"
		role="button"
		class="control"
		slot=${i}
	>
		${r||``}
	</div>`;return t(a,{label:n})},customElements.define(`cosmoz-omnitable-dropdown-input`,N(Lt,{observedAttributes:Ft,styleSheets:[It]}))})))()}var Rt;function zt(){return(zt=e((()=>{ze(),w(),Ke(),H(),Rt=({title:e,tooltip:t=``,filterText:n=``,onOpenedChanged:r,content:i,align:a=`left`,externalValues:o=null})=>{let s={filtered:!!n,...o!=null&&{[`external-values-${o}`]:!0}};return T`
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
				align-items: stretch;
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
			class=${mt({...s,dropdown:!0})}
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
	`}})))()}var Bt,Vt;function Ht(){return(Ht=e((()=>{E(),it(),Fe(),Ze(),Bt=e=>e?typeof e.close==`function`?e:Bt(e.parentElement):null,Vt=e=>class extends e{static get properties(){return{disabled:{type:Boolean,value:!1},filter:{type:Object,notify:!0},values:{type:Array,value(){return[]}},headerFocused:{type:Boolean,notify:!0},min:{type:Number,value:null},max:{type:Number,value:null},limits:{type:Function},autoupdate:{type:String,value:!0},locale:{type:String,value:null},align:{type:String,value:`left`},_filterInput:{type:Object,value(){return{min:null,max:null}}},_range:{type:Object,computed:`_computeRange(values.*)`},_limit:{type:Object,computed:`_computeLimit(_range, _filterInput.*, min, max)`,value(){return{}}},_tooltip:{type:String,computed:`_computeTooltip(title, _filterText)`},_fromClasses:{type:String,computed:`_computeInputClasses(_filterInput.min)`},_toClasses:{type:String,computed:`_computeInputClasses(_filterInput.max)`}}}static get observers(){return[`_filterInputChanged(_filterInput.*, autoupdate)`,`_filterChanged(filter.*)`,`_updateLimits(limits, headerFocused)`]}disconnectedCallback(){this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),super.disconnectedCallback()}_computeInputClasses(e){return e!=null&&e!==``?`has-value`:``}toNumber(e,t,n){if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=this.toNumber(t);return i==null?r:n(r,i)}toValue(){return this.toNumber.apply(this,arguments)}getComparableValue(e,t){if(e==null)return;let n=e;return t!=null&&(n=this.get(t,e)),this.toValue(n)}renderValue(){}getInputString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return this._toInputString(n)}_computeRange(e){let t=e.base,n=Array.isArray(t)&&t.length&&t.map(e=>this.toValue(e)).filter(e=>e!=null);return!n||n.length<1?{min:null,max:null}:n.reduce((e,t)=>({min:this.toValue(t,e.min,Math.min),max:this.toValue(t,e.max,Math.max)}),{})}_computeLimit(e,t,n,r){if(!e)return;let i=t.base,a=this.toValue(n),o=this.toValue(r),s=a??this.toValue(e.min),c=o??this.toValue(e.max);return{fromMin:s,fromMax:this.toValue(c,this._fromInputString(i.max,`max`),Math.min),toMin:this.toValue(s,this._fromInputString(i.min,`min`),Math.max),toMax:c}}_computeFilterText(e){if(e.base==null)return;let t=e.base,n=this.toValue(t.min),r=this.toValue(t.max),i=[];return n!=null&&i.push(this.renderValue(n)),i.push(` - `),r!=null&&i.push(this.renderValue(r)),i.length>1?i.join(``):void 0}_computeTooltip(e,t){return t==null?e:`${e}: ${t}`}_fromInputString(e){return this.toValue(e)}_toInputString(e){return this.toValue(e)??null}_getDefaultFilter(){return{min:null,max:null}}_filterInputChanged(e,t){let n=e.path.split(`.`)[1];this.__inputChangePath=n||null,t&&(this._limitInputDebouncer=ht.debounce(this._limitInputDebouncer,Ue.after(600),()=>{this._limitInput(),this._updateFilter()}),Ge(this._limitInputDebouncer))}_clearFrom(){this.set(`_filterInput.min`,null),this._updateFilter()}_clearTo(){this.set(`_filterInput.max`,null),this._updateFilter()}_onBlur(){this._limitInput(),this._updateFilter()}_onKeyDown(e){let t=e.currentTarget,n=Array.from(t.parentElement.querySelectorAll(`cosmoz-input`)),r=n[n.findIndex(e=>e===t)+1],i=!r,a=n[0]===t;switch(e.keyCode){case 13:if(e.preventDefault(),!i)r.focus();else{let e=this._limitInput();this._updateFilter(),e||this._closeParent(t)}break;case 9:(i&&!e.shiftKey||a&&e.shiftKey)&&this._closeParent(t)}}_closeParent(e){let t=Bt(e);t&&t.close()}_onDropdownOpenedChanged({currentTarget:e,type:t,detail:n}){(t===`focus`||n?.value===!0)&&setTimeout(()=>{e.querySelector(`cosmoz-input:focus`)||e.querySelector(`cosmoz-input`)?.focus()},100)}_limitInput(){let e=this._filterInput,t=this.__inputChangePath,n=t?this._fromInputString(this.get(t,e),t):null;if(this.__inputChangePath=null,n==null)return!1;let r=this._limit,i=t===`min`?`from`:`to`,a=this.get(i+`Min`,r),o=this.get(i+`Max`,r),s=this.toValue(n,a,Math.max),c=this.toValue(s,o,Math.min);return this.getComparableValue(n)!==this.getComparableValue(c)&&(this.set([`_filterInput`,t],this._toInputString(c,t)),this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),!0)}_updateFilter(){let e=this._filterInput,t=this.filter,n=this._fromInputString(e.min,`min`),r=this._fromInputString(e.max,`max`);(this.getComparableValue(n)!==this.getComparableValue(t,`min`)||this.getComparableValue(r)!==this.getComparableValue(t,`max`))&&this.set(`filter`,{min:n,max:r})}_filterChanged(e){if(this._filterInput==null)return;let t=this._filterInput,n=e.base,r=this._fromInputString(t.min,`min`),i=this._fromInputString(t.max,`max`);(this.getComparableValue(r)!==this.getComparableValue(n,`min`)||this.getComparableValue(i)!==this.getComparableValue(n,`max`))&&(this.set(`_filterInput`,{min:this._toInputString(n.min),max:this._toInputString(n.max)}),this._limitInputDebouncer&&this._limitInputDebouncer.cancel())}hasFilter(){let e=this.filter;return e==null?!1:this.toValue(e.min)!=null||this.toValue(e.max)!=null}resetFilter(){this.filter=this._getDefaultFilter()}_updateLimits(e,t){e&&Promise.resolve(be(e,{active:t})).then(e=>{let{min:t,max:n}=e??{};Object.assign(this,{...t==null?{}:{min:t},...n==null?{}:{max:n}})})}}})))()}var Ut;function Wt(){return(Wt=e((()=>{I(),w(),Ut=e=>class extends e{static get template(){return at`<div id="output" style="position:relative;"></div>`}connectedCallback(){super.connectedCallback();let e=this;we(e.render(),e.$.output)}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n);let r=this;requestAnimationFrame(()=>we(r.render(),r.$.output))}}})))()}var Gt;function Kt(){return(Kt=e((()=>{j(),I(),M(),w(),zt(),H(),Ht(),Wt(),Gt=class extends Vt(Ut(P)){static get properties(){return{currency:{type:String},autodetect:{type:Boolean,value:!1},rates:{type:Object},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, _formatters)`},headerFocused:{type:Boolean,value:!1}}}static get observers(){return[`_valuesChanged(autodetect, currency, values)`]}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return T`
			${C(this.disabled,()=>T`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>T`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Rt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:T`
							<h3>${this.title}</h3>
							<cosmoz-input
								class=${this._fromClasses}
								type="number"
								title=${D(`Minimum amount`)}
								label=${D(`Min amount`)}
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
								title=${D(`Maximum amount`)}
								label=${D(`Max amount`)}
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
		`}_valuesChanged(e,t,n){if(!Array.isArray(n)||n.length<1||!e&&t)return;let r=n.reduce((e,t)=>{if(t.currency){let n=t.currency;e[n]=(e[n]||0)+1}return e},{}),i=Object.keys(r)[0];Object.keys(r).reduce((e,t)=>{let n=Math.max(e,r[t]);return n===r[t]&&(i=t),n},0),this.set(`currency`,i)}toAmount(e,t,n){if(e==null||e===``)return;if(typeof e!=`object`||e.currency==null||e.currency===``)return null;let r=this.toNumber(e.amount);if(r==null||Number.isNaN(r))return null;let i={currency:e.currency,amount:r};if(n==null||t==null)return i;let a=this.toAmount(t);if(a==null)return i;let o=this.rates||{},s=i.amount*(o[i.currency]||1),c=a.amount*(o[a.currency]||1);return this.toNumber(s,c,n)===s?i:a}toValue(){return this.toAmount.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n==null)return;let r=this.toNumber(n.amount),i=this.rates;return i==null?r:r*(i[n.currency]||1)}getString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return n===void 0?``:n===null?`Invalid value`:this.renderValue(n)}getCurrency(e,t){let n=this.get(t,e);return n&&n.currency}getFormatter(e,t){let n=e+(t||``)||``,r=this._formatters=this._formatters||{};return r[n]||(r[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),r[n]}renderValue(e){let t=this.toAmount(e);return t==null?``:this.getFormatter(t.currency,this.locale).format(e.amount)}_amountValueChanged(e){let t=e.target.value,n=e.model.item,r=this.get(this.valuePath,n),i={amount:Number(t),currency:r.currency};this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toInputString(e){let t=this.toValue(e);return t==null?null:this.toNumber(t.amount)}_toInputStringAmount(e){let t=this.rates;if(t==null)return this._toInputString(e);let n=this.toValue(e);return n==null?null:(this.toNumber(n.amount)*(t[n.currency]||1)/(t[this.currency]||1)).toFixed(2)}_fromInputString(e,t){let n=this.toNumber(e);if(n!=null)return this.toValue({amount:n,currency:t&&this.get([`filter`,t,`currency`])||this.currency})}},customElements.define(`cosmoz-omnitable-amount-range-input`,Gt)})))()}var U,qt,Jt,Yt,W,Xt,Zt,Qt;function $t(){return($t=e((()=>{L(),Ye(),U=(e,t,n)=>{if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=U(t);return i==null?r:n(r,i)},qt=e=>{let t=U(e);return t==null?null:t.toString()},Jt=({valuePath:e},t)=>{let n=U(e?F(t,e):t);return qt(n)},Yt=e=>qt(e)??``,W=({valuePath:e,maximumFractionDigits:t},n)=>{if(n==null)return;let r=e?F(n,e):n,i=U(r);if(i!=null)return t===null?i:U(i.toFixed(t))},Xt=gt((e,t,n)=>{let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}),Zt=({valuePath:e,locale:t,minimumFractionDigits:n,maximumFractionDigits:r},i)=>{let a=e?F(i,e):i;if(a==null)return``;let o=U(a);if(o!=null)return Xt(t,n,r).format(o)},Qt=(e,t)=>n=>{let r=W(e,n);if(r==null)return!1;let i=W({...e,valuePath:`min`},t),a=W({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})))()}var G,K,en,tn,nn,rn,an,on,sn,cn,ln;function un(){return(un=e((()=>{L(),$t(),G=(e={},t,n,r)=>{if(t==null||t===``)return;if(typeof t!=`object`||t.currency==null||t.currency===``)return null;let i=U(t.amount);if(i==null||Number.isNaN(i))return null;let a={currency:t.currency,amount:i};if(r==null||n==null)return a;let o=G(e,n);if(o==null)return a;let s=a.amount*(e[a.currency]||1),c=o.amount*(e[o.currency]||1);return U(s,c,r)===s?a:o},K=({valuePath:e,rates:t},n)=>{if(n==null)return;let r=n;e!=null&&(r=F(n,e));let i=G(t,r);if(i==null)return;let a=U(i.amount);return t==null||a==null?a:a*(t?.[i.currency]||1)},en=(e,t)=>n=>{let r=K(e,n);if(r===void 0)return!1;let i=K({...e,valuePath:`min`},t),a=K({...e,valuePath:`max`},t);return i===void 0||a===void 0||!(r<i||r>a)},tn={},nn=(e,t)=>{let n=e+(t||``)||``;return tn[n]||(tn[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),tn[n]},rn=(e,t,n)=>{let r=G(e,t);return r==null?``:nn(r.currency,n).format(r.amount)},an=({valuePath:e,rates:t,locale:n},r)=>{let i=G(t,e?F(r,e):void 0);return i===void 0?``:i===null?`Invalid value`:rn(t,i,n)},on=e=>e?e.amount+e.currency:``,sn=e=>{if(e==null||e===``)return;let t=e.match(/^(-?[\d]+)([\D]+?)$/iu);if(!(!Array.isArray(t)||t.length<0))return{amount:Number(t[1]),currency:t[2]}},cn=({valuePath:e},t)=>e?F(t,e)?.currency:null,ln=({valuePath:e},t)=>e?F(t,e)?.amount:void 0})))()}var q,dn,fn,pn,mn,hn,gn;function J(){return(J=e((()=>{Ye(),k(),q=Symbol(`column`),dn=e=>{let t=!0,n=e.map(e=>e.name);return e.forEach(e=>{e.name??(t=!1,console.error(`The name attribute needs to be set on all columns! Missing on column`,e))}),e.forEach(e=>{n.indexOf(e.name)!==n.lastIndexOf(e.name)&&(t=!1,console.error(`The name attribute needs to be unique among all columns! Not unique on column`,e))}),t},fn=(e,t)=>{let n=e.valuePath??e.name;return{name:e.name,title:e.title,valuePath:n,groupOn:e.groupOn??n,sortOn:e.sortOn??n,noSort:e.noSort,disabledFiltering:t||e.disabledFiltering,minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,getString:e.getString,getComparableValue:e.getComparableValue,serializeFilter:e.serializeFilter,deserializeFilter:e.deserializeFilter,toXlsxValue:e.toXlsxValue,renderHeader:e.renderHeader,renderCell:e.renderCell,renderEditCell:e.renderEditCell,renderGroup:e.renderGroup,cellTitleFn:e.cellTitleFn,headerTitleFn:e.headerTitleFn,getFilterFn:e.getFilterFn,headerCellClass:e.headerCellClass,cellClass:e.cellClass,editable:e.editable,values:e.values,source:pt(e.computeSource),noLocalFilter:e.noLocalFilter,mini:e.mini,renderMini:e.renderMini,align:e.align,headerAlign:e.headerAlign,loading:e.loading,externalValues:e.externalValues,computeSource:e.computeSource,trueLabel:e.trueLabel,falseLabel:e.falseLabel,valueProperty:e.valueProperty,textProperty:e.textProperty,emptyLabel:e.emptyLabel,emptyValue:e.emptyValue,min:e.min,max:e.max,locale:e.locale,autoupdate:e.autoupdate,maximumFractionDigits:e.maximumFractionDigits,minimumFractionDigits:e.minimumFractionDigits,currency:e.currency,rates:e.rates,autodetect:e.autodetect,ownerTree:e.ownerTree,keyProperty:e.keyProperty,...e.getConfig?.(e),[q]:e}},pn=e=>e.isOmnitableColumn&&!e.hidden,mn=e=>{let t=e.filter(pn);return dn(t)?t:[]},hn=(e,t,n)=>(Array.isArray(t)?e.filter(e=>t.includes(e.name)):e.filter(e=>!e.disabled)).map(e=>fn(e,n)),gn=(e,{enabledColumns:t,disabledFiltering:n})=>{let[r,i]=d([]);return m(()=>{let r,a=[],o=e.shadowRoot.querySelector(`#columnsSlot`),s=e=>()=>{let r=o.assignedNodes({flatten:!0});if(e)a=r;else{let e=r.filter(e=>!a.includes(e)),t=a.filter(e=>!r.includes(e)),n=[...e,...t].some(e=>e.isOmnitableColumn);if(a=r,!n)return}i(hn(mn(r),t,n))},c=e=>{cancelAnimationFrame(r),r=requestAnimationFrame(s(e?.type===`cosmoz-column-prop-changed`))};return c(),o.addEventListener(`slotchange`,c),e.addEventListener(`cosmoz-column-prop-changed`,c),()=>{o.removeEventListener(`slotchange`,c),e.removeEventListener(`cosmoz-column-prop-changed`,c),cancelAnimationFrame(r)}},[t,n]),r}})))()}var _n,vn,yn;function Y(){return(Y=e((()=>{L(),J(),_n=(e,t)=>Array.isArray(e)?e.map(e=>F(e,t)).filter((e,t,n)=>e!=null&&n.indexOf(e)===t):void 0,vn=({externalValues:e,values:t,valuePath:n},r)=>{if(e)return e;if(typeof t==`function`)return t;if(n!==void 0)return _n(r,n)},yn=(e,t,n,r)=>{let{valuePath:i}=t,a=i===void 0?void 0:F(n,i);if(r===a)return;i!==void 0&&Le(n,i,r);let o={item:n,valuePath:i,value:r,oldValue:a,column:t[q]};e.dispatchEvent(new CustomEvent(`column-item-changed`,{bubbles:!0,composed:!0,detail:o}))}})))()}var bn;function xn(){return(xn=e((()=>{j(),R(),I(),w(),L(),V(),Kt(),un(),Y(),bn=class extends B(P){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},currency:{type:String,notify:!0},autodetect:{type:Boolean,value:!1,notify:!0},rates:{type:Object,notify:!0},width:{type:String,value:`70px`},cellClass:{type:String,value:`amount-cell`},headerCellClass:{type:String,value:`amount-header-cell`},align:{type:String,value:`right`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=K({...e,valuePath:`min`},t),r=K({...e,valuePath:`max`},t);if(n!=null||r!=null)return en(e,t)}getString(e,t){return an(e,t)}toXlsxValue(e,t){return an(e,t)}getComparableValue(e,t){return K(e,t)}serializeFilter({rates:e},t){if(t==null)return;let n=G(e,t.min),r=G(e,t.max);if(n!=null||r!=null)return on(n)+`~`+on(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:sn(n[1]),max:sn(n[2])}:null}renderCell(e,{item:t}){return T`<span>${e.getString(e,t)}</span>`}renderEditCell(e,{item:t},n){return T`<cosmoz-input
			type="number"
			@change=${r=>n({amount:r.target.value,currency:F(t,e.valuePath)?.currency})}
			.value=${ln(e,t)}
		>
			<div slot="suffix">${cn(e,t)}</div>
		</cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,rates:a,currency:o,autoupdate:s,autodetect:c,disabledFiltering:l,headerAlign:u,align:d},{filter:f},p,m){return T`<cosmoz-omnitable-amount-range-input
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
		></cosmoz-omnitable-amount-range-input>`}computeSource(e,t){return vn(e,t)}},customElements.define(`cosmoz-omnitable-column-amount`,bn)})))()}var Sn,Cn,wn,Tn,En,Dn,On,kn,An,jn,Mn,Nn;function Pn(){return(Pn=e((()=>{fe(),E(),Ee(),L(),Y(),Sn=(e,t)=>{if(!Array.isArray(e))return;let n=[];return e.reduce((e,t)=>Array.isArray(t)?(t.forEach(t=>{e.push(t)}),e):(e.push(t),e),[]).filter((e,r,i)=>{if(i.indexOf(e)!==r)return!1;if(t){let r=F(e,t);if(n.indexOf(r)!==-1)return!1;n.push(r)}return!0})},Cn=(e,t,n)=>{if(e==null)return[];if(Array.isArray(e)){let r=Sn(e,t);if(!r?.length)return[];let i=n??`label`,a=e=>String(typeof e==`object`&&e?F(e,i??``)??``:e??``);return r.sort((e,t)=>a(e).localeCompare(a(t)))}if(typeof e==`object`){let r=t??`id`,i=n??`label`;return Object.entries(e).map(([e,t])=>({[r]:e,[i]:t})).sort((e,t)=>String(e[i]??``).localeCompare(String(t[i]??``)))}return[]},wn=(e,t,n)=>Te(t&&F(e,t)).map(O(n)),Tn=({valuePath:e,textProperty:t},n)=>wn(n,e,t).filter(e=>e!=null).join(`, `),En=Tn,Dn=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>a=>{let o=O(e),s=Te(F(a,t));return i.some(t=>s.length===0&&O(r||e)(t)===n||s.some(e=>o(e)===o(t)))},On=e=>t=>e(e=>({...e,filter:t})),kn=e=>t=>e(e=>({...e,headerFocused:t})),An=e=>t=>e(e=>({...e,query:t})),jn=({emptyValue:e,emptyLabel:t,emptyProperty:n,textProperty:r,valueProperty:i},a)=>{let o=Cn(a,i,r);return!t||e===void 0||!r||!(n||i)||!o?o:[{[r]:t,[n||i]:e},...o]},Mn=(e,t)=>jn(e,_n(t,e.valuePath)),Nn=e=>class extends e{static get properties(){return{textProperty:{type:String},valueProperty:{type:String},emptyLabel:{type:String},emptyValue:{type:Object},emptyProperty:{type:String}}}getConfig(e){return{emptyProperty:e.emptyProperty}}getString(e,t){return Tn(e,t)}toXlsxValue(e,t){return En(e,t)}getComparableValue({valuePath:e,valueProperty:t},n){let r=F(n,e);return t==null?r:Te(r).map(O(t)).sort().join(` `)}getFilterFn(e,t){if(t&&Array.isArray(t)&&t.length!==0)return Dn(e,t)}serializeFilter(e,t){return Array.isArray(t)&&t.length===0?null:JSON.stringify(t)}deserializeFilter(e,t){if(t==null)return null;try{return JSON.parse(decodeURIComponent(t))}catch(e){let n=e;return console.error(`Failed to deserialize filter value:`,{error:n?.name,message:n?.message,filterLength:typeof t==`string`?t.length:null}),null}}computeSource(e,t){return e.externalValues||typeof e.values==`function`?async(...t)=>jn(e,await Promise.resolve(be(e.values,...t))):Mn(e,t)}}})))()}var Fn,In,Ln;function Rn(){return(Rn=e((()=>{ye(),tt(),I(),w(),fe(),Ee(),Pn(),V(),k(),L(),J(),Fn=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?ke(t):O(n),a=Te(e&&F(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},In=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>{let a=O(e),o=O(r||e),s=new Set(i.filter(e=>e.excluded).map(e=>a(e.item))),c=new Set(i.filter(e=>!e.excluded).map(e=>a(e.item))),l=i.some(e=>e.excluded&&o(e.item)===n),u=i.some(e=>!e.excluded&&o(e.item)===n);return e=>{let n=Te(F(e,t)).map(a);return n.length===0?!l&&(u||c.size===0):!n.some(e=>s.has(e))&&(c.size===0||n.some(e=>c.has(e)))}},Ln=class extends Nn(B(P)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return T`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},n){return T`<cosmoz-input
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${z(e,t)}
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
			.itemRenderer=${e[q]?.itemRenderer}
			.value=${t}
			.text=${n}
			.limit=${e.limit}
			@opened-changed=${e=>kn(r)(e.detail.value)}
			@value-changed=${me(On(r))}
			@text-changed=${me(An(r))}
			>${C(e.loading,()=>T`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-excluding
		>`}getComparableValue(e,t){return Fn(e,t)}getFilterFn(e,t){if(t&&Array.isArray(t)&&t.length!==0)return In(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete-excluding`,Ln)})))()}var zn,Bn;function Vn(){return(Vn=e((()=>{ye(),tt(),I(),w(),fe(),Ee(),Pn(),V(),L(),J(),zn=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?ke(t):O(n),a=Te(e&&F(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},Bn=class extends Nn(B(P)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return T`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},n){return T`<cosmoz-input
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${z(e,t)}
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
			.itemRenderer=${e[q]?.itemRenderer}
			.value=${t}
			.text=${n}
			.limit=${e.limit}
			.onChange=${On(r)}
			@opened-changed=${e=>kn(r)(e.detail.value)}
			.onText=${An(r)}
			>${C(e.loading,()=>T`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}getComparableValue(e,t){return zn(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete`,Bn)})))()}var Hn,Un,Wn,Gn,Kn,qn,Jn,Yn,Xn,Zn,Qn,$n,er,tr;function nr(){return(nr=e((()=>{I(),V(),ye(),Ye(),L(),w(),Hn=(e,t)=>t.find(({value:t})=>e===t),Un=(e,t,n)=>{let r=Hn(t,n);return r?r.text:e},Wn=(e,t,n,r)=>Un(e,F(t,n),r),Gn=({valuePath:e},t,n)=>Hn(F(t,e),n),Kn=e=>t=>{e(e=>({...e,filter:t?.[0]?.value??null}))},qn=e=>t=>{e(e=>({...e,headerFocused:t}))},Jn=e=>t=>{e(e=>({...e,query:t}))},Yn=e=>t=>e(t?.[0]?.value),Xn=({valuePath:e,trueLabel:t,falseLabel:n},r)=>F(r,e)?t:n,Zn=({valuePath:e},t)=>n=>F(n,e)===t,Qn=pt((e,t)=>[{text:e,value:!0},{text:t,value:!1}]),$n=({valuePath:e,trueLabel:t,falseLabel:n},r)=>e?F(r,e)?t:n:``,er=(e,t)=>{try{return JSON.parse(t)}catch{return null}},tr=class extends B(P){static get properties(){return{trueLabel:{type:String,value:`True`},falseLabel:{type:String,value:`False`},flex:{type:String,value:`0`},cellClass:{type:String,value:`boolean-cell`}}}getString(e,t){return Xn(e,t)}renderCell(e,{item:t}){return Xn(e,t)}renderEditCell(e,{item:t},n){let{trueLabel:r,falseLabel:i}=e;return T`<cosmoz-autocomplete
			variant="inline"
			.title=${Wn(e.title,t,e.valuePath,Qn(r,i))}
			.source=${Qn(r,i)}
			.textProperty=${`text`}
			.value=${Gn(e,t,Qn(r,i))}
			.onChange=${Yn(n)}
			.limit=${1}
			>${C(e.loading,()=>T`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete
		>`}renderHeader(e,{filter:t,query:n},r,i){return T`<cosmoz-autocomplete-ui
			?disabled=${e.disabledFiltering}
			variant="inline"
			.label=${e.title}
			.title=${Wn(e.title,t,e.valuePath,i)}
			.source=${i}
			.textProperty=${`text`}
			.value=${Hn(t,i)}
			.text=${n}
			.onChange=${Kn(r)}
			@opened-changed=${e=>qn(r)(e.detail.value)}
			.onText=${Jn(r)}
			.limit=${1}
			>${C(e.loading,()=>T`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}computeSource({trueLabel:e,falseLabel:t}){return Qn(e,t)}getFilterFn(e,t){if(t!=null)return Zn(e,t)}toXlsxValue(e,t){return $n(e,t)}deserializeFilter(e,t){return er(e,t)}},customElements.define(`cosmoz-omnitable-column-boolean`,tr)})))()}var rr;function ir(){return(ir=e((()=>{ve(),Ht(),rr=e=>class extends Vt(e){static get properties(){return{max:{type:Date,value:null},min:{type:Date,value:null},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},formatter:{type:Object,computed:`_computeFormatter(locale)`}}}toDate(e,t,n){if(e==null||e===``)return;let r=e;if(r instanceof Date||(typeof e==`string`&&(r=this.getAbsoluteISOString(r)),r=new Date(r)),Number.isNaN(r.getTime()))return null;if(n==null||t==null)return r;let i=this.toDate(t);if(i==null)return r;let a=this.getComparableValue(r);return n(a,this.getComparableValue(i))===a?r:i}toValue(){return this.toDate.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n!=null)return this.toNumber(n.getTime())}getString(e,t=this.valuePath,n=this.formatter){let r=this.toValue(this.get(t,e));return r===void 0?``:r===null?`Invalid Date`:this.renderValue(r,n)}getAbsoluteISOString(e){return e.length===19?e+this._getTimezoneString(e):e}_getTimezoneString(e){let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`}renderValue(e,t=this.formatter){if(t==null)return;let n=this.toValue(e);if(n!=null)return t.format(n)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(0,10)}_dateValueChanged(e){let t=e.currentTarget.value,n=e.model.item,r=this.get(this.valuePath,n),i=this._fromInputString(t);this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toLocalISOString(e){return de(e)}}})))()}var ar;function or(){return(or=e((()=>{j(),I(),M(),w(),ir(),zt(),H(),Wt(),ar=class extends rr(Ut(P)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return T`
			${C(this.disabled,()=>T`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>T`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Rt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:T`
							<h3>${this.title}</h3>
							<cosmoz-input
								type="date"
								label=${D(`From date`)}
								min=${this._toInputString(this._limit.fromMin)}
								max=${this._toInputString(this._limit.fromMax)}
								.value=${this._filterInput?.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-input>
							<cosmoz-input
								type="date"
								label=${D(`Until date`)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
								.value=${this._filterInput?.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-input>
						`})}
				`)}
		`}_fromInputString(e,t){let n=this.toDate(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n}_filterInputChanged(e,t){let n=e.path.split(`.`)[1]&&e.value;n&&n.match(/^0+/u)?this._limitInputDebouncer.cancel():super._filterInputChanged(e,t)}},customElements.define(`cosmoz-omnitable-date-range-input`,ar)})))()}var sr,cr,lr,X,Z,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr;function br(){return(br=e((()=>{ve(),L(),$t(),sr=e=>{let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`},cr=e=>e.length===19?e+sr(e):e,lr=e=>{if(e==null||e===``)return;let t=e;return!(t instanceof Date)&&(typeof e==`string`&&(t=cr(t)),t=Se(t),!t)||Number.isNaN(t.getTime())?null:t},X=({valuePath:e},t)=>{if(t==null)return;let n=t;e!=null&&(n=F(t,e));let r=lr(n);if(r!=null)return U(r.getTime())},Z=(e,t,n)=>{let r=lr(e);if(r==null)return null;if(n==null||t==null)return r;let i=Z(t);if(i==null)return r;let a=X({},r),o=X({},i);return a==null||o==null||n(a,o)===a?r:i},ur=(e,t)=>{if(t==null)return;let n=Z(e);if(n!=null)return t.format(n)},dr={},fr=e=>{let t=e||``;return dr[t]||(dr[t]=new Intl.DateTimeFormat(e||void 0)),dr[t]},pr=({valuePath:e,locale:t},n)=>{let r=F(n,e||``);return r===void 0?``:(r=Z(r),r===null?`Invalid Date`:ur(r,fr(t)))},mr=e=>{let t=Z(e);if(t==null)return null;let n=de(t);return n==null?null:n.slice(0,10)},hr=({valuePath:e},t)=>mr(F(t,e||``)),gr=(e,t)=>{let n=Z(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n},_r=e=>mr(e)??``,vr=({valuePath:e},t)=>{if(!e)return``;let n=Z(F(t,e));if(!n)return``;let r=Z(de(n));return r?(r.setHours(0,0,0,0),r):``},yr=(e,t)=>n=>{let r=X(e,n);if(r==null)return!1;let i=X({...e,valuePath:`min`},t),a=X({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})))()}var xr;function Sr(){return(Sr=e((()=>{j(),I(),w(),V(),or(),Y(),br(),R(),xr=class extends B(P){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`date-header-cell`},width:{type:String,value:`100px`},minWidth:{type:String,value:`82px`},flex:{type:String,value:`0`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=X({...e,valuePath:`min`},t),r=X({...e,valuePath:`max`},t);if(n!=null||r!=null)return yr(e,t)}getString(e,t){return pr(e,t)}toXlsxValue(e,t){return vr(e,t)}getComparableValue(e,t){return X(e,t)}serializeFilter(e,t){if(t==null)return;let n=Z(t.min),r=Z(t.max);if(n!=null||r!=null)return _r(n)+`~`+_r(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Z(n[1]),max:Z(n[2])}:null}renderCell(e,{item:t}){return T`<div class="omnitable-cell-date">
			${pr(e,t)}
		</div>`}renderEditCell(e,{item:t},n){return T`<cosmoz-input
			type="date"
			@change=${e=>n(gr(e.target.value))}
			.value=${hr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,disabledFiltering:a,headerAlign:o,align:s},{filter:c},l,u){return T`<cosmoz-omnitable-date-range-input
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
		></cosmoz-omnitable-date-range-input>`}computeSource(e,t){return vn(e,t)}},customElements.define(`cosmoz-omnitable-column-date`,xr)})))()}var Cr;function wr(){return(wr=e((()=>{I(),M(),w(),ir(),zt(),H(),Wt(),Cr=class extends rr(Ut(P)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return T`
			${C(this.disabled,()=>T`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>T`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Rt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:T`
							<h3>${this.title}</h3>
							<cosmoz-datetime-input
								date-label=${D(`From date`)}
								time-label=${D(`From time`)}
								min=${this._toInputString(this._limit.fromMin)}
								max=${this._toInputString(this._limit.fromMax)}
								step=${this.filterStep}
								.value=${this._filterInput?.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-datetime-input>
							<cosmoz-datetime-input
								date-label=${D(`To date`)}
								time-label=${D(`To time`)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
								step=${this.filterStep}
								.value=${this._filterInput?.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-datetime-input>
						`})}
				`)}
		`}_toInputString(e){let t=this.toValue(e);if(t!=null)return this._toLocalISOString(t).slice(0,19)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})}},customElements.define(`cosmoz-omnitable-datetime-range-input`,Cr)})))()}var Tr,Er,Dr,Or,kr,Ar;function jr(){return(jr=e((()=>{L(),br(),Tr={},Er=e=>{let t=e||``;return Tr[t]||(Tr[t]=new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})),Tr[t]},Dr=({valuePath:e,locale:t},n)=>{let r=Z(F(n,e||``));return r===void 0?``:r===null?`Invalid Date`:ur(r,Er(t))},Or=({valuePath:e},t)=>e?F(t,e):``,kr=e=>{let t=Z(e);return t==null?``:t.toISOString().slice(0,19).replace(/:/gu,`.`)},Ar=e=>{if(e!=null&&e!==``&&typeof e==`string`)return Z(e.replace(/\./gu,`:`)+`Z`)}})))()}var Mr;function Nr(){return(Nr=e((()=>{nt(),R(),I(),w(),V(),wr(),Y(),br(),jr(),Mr=class extends B(P){static get is(){return`cosmoz-omnitable-column-datetime`}static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`datetime-header-cell`},width:{type:String,value:`210px`},minWidth:{type:String,value:`128px`},flex:{type:String,value:`0`},filterStep:{type:Number,value:1}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=X({...e,valuePath:`min`},t),r=X({...e,valuePath:`max`},t);if(n!=null||r!=null)return yr(e,t)}getString(e,t){return Dr(e,t)}toXlsxValue(e,t){return Or(e,t)}getComparableValue(e,t){return X(e,t)}serializeFilter(e,t){if(t==null)return;let n=Z(t.min),r=Z(t.max);if(n!=null||r!=null)return kr(n)+`~`+kr(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Ar(n[1]),max:Ar(n[2])}:null}renderCell(e,{item:t}){return Dr(e,t)}renderEditCell(e,{item:t},n){return T`<cosmoz-input
			type="text"
			@change=${e=>n(gr(e.target.value))}
			.value=${Dr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,filterStep:a,disabledFiltering:o,headerAlign:s,align:c},{filter:l},u,d){return T`<cosmoz-omnitable-datetime-range-input
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
		></cosmoz-omnitable-datetime-range-input>`}computeSource(e,t){return vn(e,t)}},customElements.define(Mr.is,Mr)})))()}var Pr;function Fr(){return(Fr=e((()=>{ye(),tt(),I(),w(),Pn(),V(),Pr=class extends Nn(B(P)){renderCell({valuePath:e,textProperty:t},{item:n}){let r=wn(n,e,t).map(e=>T`<li>${e}</li>`);return T`
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
		`}renderEditCell(){return`not implemented`}renderHeader(e,{filter:t,query:n},r,i){return T`<cosmoz-autocomplete-ui
			variant="inline"
			class="external-values-${e.externalValues}"
			?disabled=${e.disabledFiltering}
			.label=${e.title}
			.source=${i}
			.textProperty=${e.textProperty}
			.value=${t}
			.text=${n}
			.onChange=${On(r)}
			@opened-changed=${e=>kn(r)(e.detail.value)}
			.onText=${An(r)}
			>${C(e.loading,()=>T`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		> `}},customElements.define(`cosmoz-omnitable-column-list-horizontal`,Pr)})))()}var Ir,Lr;function Rr(){return(Rr=e((()=>{oe(),ge(),ie(),k(),M(),Ir=le`
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
`,Lr=({items:e})=>{let[t,n]=d(!1),r=Array.isArray(e)?e:[],i=_(()=>Math.max(0,r.length-1),[r]);if(r.length===0)return null;let a=r.length>2,o=r[0],s=a&&!t?[]:r.slice(1),c=e=>{e.stopPropagation(),e.preventDefault(),n(e=>!e)};return T`
		<ul>
			<li>
				<span>${o}</span>
			</li>
			<li class="see-more" ?hidden=${!a||t}>
				<a href="#" @click=${c}
					>${D(`and {0} more`,{0:i})}</a
				>
			</li>
			${s.map(e=>T`
					<li>
						<span class="item">${e}</span>
					</li>
				`)}
			<li class="see-less" ?hidden=${!a||!t}>
				<a href="#" @click=${c}>${D(`See less`)}</a>
			</li>
		</ul>
	`},customElements.define(`cosmoz-omnitable-column-list-data`,N(Lr,{styleSheets:[Ae(Ir)]}))})))()}var zr;function Br(){return(Br=e((()=>{Rr(),I(),w(),ye(),Pn(),V(),J(),zr=class extends Nn(B(P)){static get properties(){return{keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,textual:e.textual}}renderCell({valuePath:e,textProperty:t},{item:n}){return T`<cosmoz-omnitable-column-list-data
			.items=${wn(n,e,t)}
		></cosmoz-omnitable-column-list-data>`}renderEditCell(e,{item:t},n){return T`<cosmoz-input
			type="text"
			.value=${Tn(e,t)}
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
			.itemRenderer=${e[q]?.itemRenderer}
			.value=${t}
			.text=${n}
			.onChange=${On(r)}
			@opened-changed=${e=>kn(r)(e.detail.value)}
			.onText=${An(r)}
			>${C(e.loading,()=>T`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}},customElements.define(`cosmoz-omnitable-column-list`,zr)})))()}var Vr;function Hr(){return(Hr=e((()=>{j(),I(),M(),w(),zt(),H(),Ht(),Wt(),Vr=class extends Vt(Ut(P)){static get properties(){return{maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},formatter:{type:Object,computed:`_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)`},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},headerFocused:{type:Boolean,value:!1}}}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return T`
			${C(this.disabled,()=>T`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>T`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Rt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:T`
							<h3>${this.title}</h3>
							<cosmoz-input
								class=${this._fromClasses}
								type="number"
								label=${D(`From`)}
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
								label=${D(`To`)}
								.value=${this._filterInput?.max}
								@value-changed=${e=>{this.set(`_filterInput.max`,e.detail.value)}}
								@blur=${e=>this._onBlur(e)}
								@keydown=${e=>this._onKeyDown(e)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
							></cosmoz-input>
						`})}
				`)}
		`}_computeFormatter(e,t,n){let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}getComparableValue(e,t){if(e==null)return;let n=e;if(t!=null&&(n=this.get(t,e)),n=this.toValue(n),n==null)return;let r=this.maximumFractionDigits;return r===null?n:this.toValue(n.toFixed(r))}renderValue(e,t=this.formatter){let n=this.toNumber(e);if(n!=null)return t.format(n)}},customElements.define(`cosmoz-omnitable-number-range-input`,Vr)})))()}var Ur;function Wr(){return(Wr=e((()=>{j(),R(),I(),w(),V(),L(),Hr(),Y(),$t(),Ur=class extends B(P){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},cellClass:{type:String,value:`number-cell`},width:{type:String,value:`30px`},minWidth:{type:String,value:`30px`},headerCellClass:{type:String,value:`number-header-cell`},maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},align:{type:String,value:`right`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=W({...e,valuePath:`min`},t),r=W({...e,valuePath:`max`},t);if(n!=null||r!=null)return Qt(e,t)}getString(e,t){return Zt(e,t)}toXlsxValue({valuePath:e},t){return F(t,e)}getComparableValue(e,t){return W(e,t)}serializeFilter(e,t){if(t==null)return;let n=U(t.min),r=U(t.max);if(n!=null||r!=null)return Yt(n)+`~`+Yt(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:U(n[1]),max:U(n[2])}:null}renderCell(e,{item:t}){return T`<div class="omnitable-cell-number">
			${Zt(e,t)}
		</div>`}renderEditCell(e,{item:t},n){return T`<cosmoz-input
			type="number"
			@change=${e=>n(e.target.value)}
			.value=${Jt(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,maximumFractionDigits:a,minimumFractionDigits:o,autoupdate:s,disabledFiltering:c,headerAlign:l,align:u},{filter:d},f,p){return T`<cosmoz-omnitable-number-range-input
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
		></cosmoz-omnitable-number-range-input>`}computeSource(e,t){return vn(e,t)}},customElements.define(`cosmoz-omnitable-column-number`,Ur)})))()}var Gr;function Kr(){return(Kr=e((()=>{j(),I(),M(),w(),ir(),zt(),H(),Wt(),Gr=class extends rr(Ut(P)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return T`
			${C(this.disabled,()=>T`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>T`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Rt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:T`
							<h3>${this.title}</h3>
							<cosmoz-input
								type="time"
								label=${D(`From time`)}
								step=${this.filterStep}
								.value=${this._filterInput.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-input>
							<cosmoz-input
								type="time"
								label=${D(`Until time`)}
								step=${this.filterStep}
								.value=${this._filterInput.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-input>
						`})}
				`)}
		`}get _fixedDate(){return`1970-01-01`}toDate(e,t,n){let r=typeof e==`string`&&e.length>3&&e.length<=9?this.getAbsoluteISOString(this._fixedDate+`T`+e):e;return super.toDate(r,t,n)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(11,19)}getComparableValue(e,t){if(e==null)return;let n=this._toInputString(t==null?e:this.get(t,e));if(n!=null&&(n=this.toValue(this.getAbsoluteISOString(this._fixedDate+`T`+n)),n!=null))return this.toNumber(n.getTime())}_timeValueChanged(e){let t=e.target.value,n=e.model.item,r=this.toDate(n.date),i=this.toDate(r==null?t:r.toISOString().slice(0,10)+`T`+t);i??(this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,(e=>e).bind(this)))}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})}},customElements.define(`cosmoz-omnitable-time-range-input`,Gr)})))()}var Q,qr,Jr,Yr,Xr,Zr,Qr,$r,ei,ti;function ni(){return(ni=e((()=>{ve(),L(),br(),$t(),Q=(e,t,n)=>{let r=typeof e==`string`&&e.length>3&&e.length<=9?cr(`1970-01-01T`+e):e;return Z(r,t,n)},qr={},Jr=e=>{let t=e||``;return qr[t]||(qr[t]=new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})),qr[t]},Yr=({valuePath:e,locale:t},n)=>{let r=Q(F(n,e||``));return r===void 0?``:r===null?`Invalid Date`:ur(r,Jr(t))},Xr=(e,t)=>e.valuePath?Yr(e,t):``,Zr=e=>{let t=Q(e);if(t==null)return null;let n=de(t);return n&&n.slice(11,19)},Qr=({valuePath:e},t)=>{if(t==null)return;let n=Zr(e==null?t:F(t,e));if(n==null)return;let r=Q(cr(`1970-01-01T`+n));return r==null?r:U(r.getTime())},$r=(e,t)=>n=>{let r=Qr(e,n);if(r==null)return!1;let i=Qr({...e,valuePath:`min`},t),a=Qr({...e,valuePath:`max`},t);return i==null||a==null?!1:!(r<i||r>a)},ei=e=>{let t=Q(e);return t==null?``:t.toISOString().slice(11,19).replace(/:/gu,`.`)},ti=e=>{if(e!=null&&e!==``)return Q(typeof e==`string`?e.replace(/\./gu,`:`)+`Z`:e)}})))()}var ri;function ii(){return(ii=e((()=>{j(),R(),I(),w(),V(),Kr(),Y(),ni(),ri=class extends B(P){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`time-header-cell`},minWidth:{type:String,value:`63px`},width:{type:String,value:`210px`},flex:{type:String,value:`0`},filterStep:{type:String,value:`1`}}}getFilterFn(e,t){let n=Qr({...e,valuePath:`min`},t),r=Qr({...e,valuePath:`max`},t);if(n!=null||r!=null)return $r(e,t)}getString(e,t){return Yr(e,t)}toXlsxValue(e,t){return Xr(e,t)}getComparableValue(e,t){return Qr(e,t)}serializeFilter(e,t){if(t==null)return;let n=Q(t.min),r=Q(t.max);if(n!=null||r!=null)return ei(n)+`~`+ei(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:ti(n[1]),max:ti(n[2])}:null}renderCell(e,{item:t}){return Yr(e,t)}renderEditCell(e,{item:t},n){return T`<cosmoz-input
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${Yr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,locale:r,filterStep:i,disabledFiltering:a,headerAlign:o,align:s},{filter:c},l,u){return T`<cosmoz-omnitable-time-range-input
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
		></cosmoz-omnitable-time-range-input>`}computeSource(e,t){return vn(e,t)}},customElements.define(`cosmoz-omnitable-column-time`,ri)})))()}function ai(){return(ai=e((()=>{xn(),Rn(),Vn(),nr(),Sr(),Nr(),Fr(),Br(),Wr(),ii()})))()}var oi;function si(){return(si=e((()=>{k(),w(),oi=({column:e,item:t,selected:n,folded:r,group:i})=>{if(!e)return u;let a=e.renderGroup??e.renderCell;return a?a(e,{item:t,selected:n,folded:r,group:i}):u},customElements.define(`cosmoz-omnitable-group-row`,N(oi,{useShadowDOM:!1}))})))()}var ci;function li(){return(li=e((()=>{k(),w(),ci=e=>{let{column:t}=e;return s(()=>{let n=0,r=0,i=i=>{e.dispatchEvent(new CustomEvent(`column-resize`,{bubbles:!0,composed:!0,detail:{newWidth:Math.ceil(r+i.pageX-n),column:t}}))},a=()=>{document.removeEventListener(`pointermove`,i),document.removeEventListener(`pointerup`,a)},o=t=>{n=t.pageX,r=e.previousElementSibling.getBoundingClientRect().width,document.addEventListener(`pointermove`,i),document.addEventListener(`pointerup`,a)};return e.addEventListener(`pointerdown`,o),()=>e.removeEventListener(`pointerdown`,o)},[t]),u},customElements.define(`cosmoz-omnitable-resize-nub`,N(ci))})))()}var ui,di,fi,pi;function mi(){return(mi=e((()=>{Be(),k(),ee(),p(),ui=({column:e,on:t,descending:n,setOn:r,setDescending:i})=>{let{name:a,title:s}=e??{};return T`<cosmoz-button
		variant="tertiary"
		class="sg"
		title=${h(s)}
		data-on=${h(a===t&&(n?`desc`:`asc`)||void 0)}
		@click=${e=>{let t=e.currentTarget?.dataset.on;t||(r(a),i(!1)),t===`asc`?i(!0):t===`desc`&&(r(),i(!1))}}
	>
		<span>${s}</span> ${a===t?Ce({width:`12`,height:`12`}):o({width:`12`,height:`12`})}
	</cosmoz-button>`},di=({columns:e,...t})=>e?.map(e=>ui({column:e,...t})),fi=()=>T`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,groupOn:t,setGroupOn:n,groupOnDescending:r,setGroupOnDescending:i}={})=>di({columns:e?.filter?.(e=>e.groupOn),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`,pi=()=>T`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,sortOn:t,setSortOn:n,descending:r,setDescending:i}={})=>di({columns:e?.filter?.(e=>e.sortOn&&!e.noSort),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`})))()}function hi(e,t,{suffix:n=``,read:r,write:i,ready:a=!0,multi:o}={}){let c=Oe({param:t,suffix:n,link:o?bi:yi,write:i??pe}),u=_(()=>{if(t==null)return!1;if(o){let e=ft(t+n);return Object.keys(e).length>0}return $e(t+n)!==void 0},[]),[f,p]=d(()=>{if(t==null)return e;if(o){let i=ft(t+n,r);return Object.keys(i).length>0?i:e}return $e(t+n,r)??e}),m=l(e=>p(t=>{let n=gi(e)?e(t):e;return c.param!=null&&st(c.link(c.param+c.suffix,n,c.write),null,{notify:!1}),n}),[]);return s(()=>{c.param!=null&&a&&!u&&e!=null&&m(e)},[a]),[f,m]}var gi,_i,vi,yi,bi;function xi(){return(xi=e((()=>{et(),E(),se(),ot(),k(),gi=e=>typeof e==`function`,_i=e=>(t,n,r=pe)=>{let i=Qe(),a=new URLSearchParams(i.hash.replace(`#`,``));return e(t,n,r,a),`#!`+Object.assign(i,{hash:a}).href.replace(location.origin,``)},vi=e=>e==null||e===``,yi=_i((e,t,n,r)=>vi(n(t))?r.delete(e):r.set(e,n(t))),bi=_i((e,t,n,r)=>{let i=Object.entries(t),a=i.map(n).filter(([,e])=>e!==void 0);if(a.length===0&&i.length>0)return;let o=e;Array.from(r.keys()).filter(e=>e.startsWith(o)).forEach(e=>r.delete(e)),a.forEach(([t,n])=>vi(n)?r.delete(e+t):r.set(e+t,n))})})))()}var Si,Ci,wi,Ti,Ei;function Di(){return(Di=e((()=>{k(),xi(),Si=e=>[!0,`true`,1,`yes`,`on`].includes(e),Ci=e=>e===``||(e==null?void 0:Si(e)),wi=(e,t,n)=>l(r=>{e(r),n(e=>({...e,[t]:r}))},[e,t,n]),Ti=(e,t,{settings:n,setSettings:r,resetRef:i,ready:a=!0})=>{let[o,c]=hi(n.sortOn,t,{suffix:`-sortOn`,ready:a}),[u,d]=hi(Ci(n.descending),t,{suffix:`-descending`,read:Ci,ready:a}),[f,p]=hi(n.groupOn,t,{suffix:`-groupOn`,ready:a}),[m,h]=hi(Ci(n.groupOnDescending),t,{suffix:`-groupOnDescending`,read:Ci,ready:a}),g=_(()=>e.find(e=>e.name===o),[e,o]),v=_(()=>e.find(e=>e.name===f),[e,f]),y={groupOn:f,setGroupOn:wi(p,`groupOn`,r),groupOnDescending:m,setGroupOnDescending:wi(h,`groupOnDescending`,r),sortOn:o,setSortOn:wi(c,`sortOn`,r),descending:u,setDescending:wi(d,`descending`,r),columns:e},b=_(()=>y,Object.values(y)),x=l(e=>{c(typeof e.sortOn==`string`?e.sortOn:void 0),p(typeof e.groupOn==`string`?e.groupOn:void 0),d(typeof e.descending==`boolean`?e.descending:void 0),h(typeof e.groupOnDescending==`boolean`?e.groupOnDescending:void 0)},[]);return s(()=>void(i.current=x),[]),{...b,sortAndGroup:b,groupOnColumn:v,sortOnColumn:g}},Ei=re(void 0),customElements.define(`sort-and-group-provider`,Ei.Provider),customElements.define(`sort-and-group-consumer`,N(({render:e})=>e(r(Ei)),{useShadowDOM:!1}))})))()}var Oi,ki;function Ai(){return(Ai=e((()=>{k(),_e(),li(),mi(),Di(),Oi=({data:e,columns:t,groupOnColumn:n,filters:r,setFilterState:i,sortAndGroup:{sortOn:a,setSortOn:o,descending:s,setDescending:c}={}})=>xe(t,e=>e.name,t=>[T`<div
				class="cell ${t.headerCellClass} header-cell"
				align="${t.headerAlign??t.align??`left`}"
				part="cell header-cell cell-${t.name} header-cell-${t.name}"
				?hidden="${t===n}"
				title="${t.headerTitleFn(t)}"
				name="${t.name}"
			>
				${t.renderHeader(t,r[t.name]??{},e=>i(t.name,e),t.source(t,e))}
				${C(!t.noSort,()=>ui({on:a,setOn:o,descending:s,setDescending:c,column:t}))}
			</div>`,T`<cosmoz-omnitable-resize-nub
				.column="${t}"
				name="${t.name}"
			></cosmoz-omnitable-resize-nub>`]),ki=({columns:e,settingsConfig:t,hideSelectAll:n,...i})=>{let a=r(Ei);return T`
		${C(e,e=>Oi({columns:e,sortAndGroup:a,...i}))}
		${C(!n,()=>T` <cosmoz-omnitable-settings
					.config=${t}
					part="settings"
				></cosmoz-omnitable-settings>`)}
	`},customElements.define(`cosmoz-omnitable-header-row`,N(ki,{useShadowDOM:!1}))})))()}var ji,Mi;function Ni(){return(Ni=e((()=>{oe(),ge(),ie(),k(),ji=le`
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
`,Mi=({column:e})=>T`
	<div class="label" title="${e.title}" part="item-expand-label">
		${e.title}
	</div>
	<div class="value" part="item-expand-value">
		<slot></slot>
	</div>
`,customElements.define(`cosmoz-omnitable-item-expand-line`,N(Mi,{styleSheets:[Ae(ji)]}))})))()}var Pi;function Fi(){return(Fi=e((()=>{k(),w(),Ni(),Pi=({columns:e,item:t,selected:n,expanded:r,groupOnColumn:i})=>ut(e,e=>T`<cosmoz-omnitable-item-expand-line
				.column=${e}
				?hidden=${e===i}
				exportparts="item-expand-label, item-expand-value"
				>${e.renderCell(e,{item:t,selected:n,expanded:r})}</cosmoz-omnitable-item-expand-line
			>`),customElements.define(`cosmoz-omnitable-item-expand`,N(Pi,{useShadowDOM:!1}))})))()}var Ii,Li;function Ri(){return(Ri=e((()=>{k(),_e(),Ii=(e,t,n)=>e.editable?e.renderEditCell(e,t,n(e,t.item)):e.renderCell(e,t),Li=({columns:e,groupOnColumn:t,item:n,index:r,selected:i,expanded:a,onItemChange:o})=>xe(e,e=>e.name,e=>T`<div
				class="cell itemRow-cell ${e.cellClass??``}"
				align="${e.align??`left`}"
				part="cell itemRow-cell cell-${e.name} itemRow-cell-${e.name}"
				?hidden="${e===t}"
				?editable="${e.editable}"
				title="${e.cellTitleFn(e,n)}"
				name="${e.name}"
			>
				${Ii(e,{item:n,index:r,selected:i,expanded:a},o)}
			</div>`),customElements.define(`cosmoz-omnitable-item-row`,N(Li,{useShadowDOM:!1}))})))()}var zi,Bi;function Vi(){return(Vi=e((()=>{oe(),ie(),zi=le`
	.checkbox {
		box-sizing: border-box;
		width: calc(var(--cz-spacing) * 4);
		height: calc(var(--cz-spacing) * 4);
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
		height: 9px;
		border: 2px solid var(--cz-color-text-on-brand);
		border-top: none;
		border-left: none;
		transform-origin: 4px 9px;
		transform: translate(2px) rotate(45deg);
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
		width: 8px;
		height: 2px;
		left: 4px;
		top: 7px;
		background-color: var(--cz-color-text-brand);
	}
`,Bi=le`
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
			from var(--cz-color-bg-action-solid) r g b / calc(alpha * 0.45)
		);
		overflow: hidden;
		color: var(--cz-color-text-on-action);
	}
	cosmoz-bottom-bar::part(bar) {
		padding: 0 calc(var(--cz-spacing) * 6);
	}

	cosmoz-bottom-bar::slotted(*) {
		background: rgb(
			from var(--cz-color-bg-action-solid) r g b / calc(alpha * 0.75)
		);
		color: var(--cz-color-text-on-action);
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

	.groupRow:hover .checkbox:not(:checked):not(:hover),
	.itemRow:hover .checkbox:not(:checked):not(:hover) {
		box-shadow: 0 0 0 2px
			rgb(from var(--cz-color-text-primary) r g b / calc(alpha * 0.75)) inset;
	}
	.groupRow:hover cosmoz-button.expand::part(button):not(:hover),
	.groupRow:hover .expand:not(:hover):not(cosmoz-button),
	.itemRow:hover cosmoz-button.expand::part(button):not(:hover),
	.itemRow:hover .expand:not(:hover):not(cosmoz-button) {
		color: rgb(from var(--cz-color-text-primary) r g b / calc(alpha * 0.75));
	}

	${zi}

	.all {
		align-self: center;
	}

	cosmoz-button.expand {
		width: calc(var(--cz-spacing) * 6);
		height: calc(var(--cz-spacing) * 6);
		flex: none;
	}
	cosmoz-button.expand::part(button) {
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

	.groupRow cosmoz-button.expand::part(button),
	.groupRow .expand:not(cosmoz-button) {
		margin: var(--cz-spacing);
	}
	.groupRow cosmoz-button.expand::part(button) {
		margin: 0;
	}
	.groupRow cosmoz-button.expand {
		margin: var(--cz-spacing);
	}

	.expand:not([aria-expanded]) svg {
		transform: scaleY(1);
	}
	cosmoz-button.expand::part(button):active,
	.expand:active:not(cosmoz-button) {
		background: rgb(
			from var(--cz-color-text-primary) r g b / calc(alpha * 0.15)
		);
	}
	cosmoz-button.expand::part(button):hover,
	.expand:hover:not(cosmoz-button) {
		color: rgb(from var(--cz-color-text-primary) r g b / calc(alpha * 0.75));
	}

	cosmoz-button.sg::part(button),
	.sg:not(cosmoz-button) {
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

		height: auto;
		width: auto;
		gap: 0;
	}
	cosmoz-button.sg {
		display: inline-flex;
		flex: none;
	}
	.sg span {
		display: none;
	}
	.sg svg {
		display: block;
		width: 12px;
		height: 12px;
	}
	cosmoz-button.sg[data-on]::part(button),
	.sg[data-on]:not(cosmoz-button) {
		color: var(--cz-color-text-primary);
	}
	cosmoz-button.sg:not([data-on="desc"])::part(button),
	.sg:not([data-on="desc"]):not(cosmoz-button) {
		transform: scaleY(-1);
	}
	.cell:hover cosmoz-button.sg::part(button),
	.cell:hover .sg:not(cosmoz-button),
	cosmoz-button.sg[data-on]::part(button),
	.sg[data-on]:not(cosmoz-button) {
		opacity: 1;
	}

	.header-cell {
		display: inline-flex;
		vertical-align: top;
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

	:host(:is([mini], [compact])) {
		--checkbox-offset: calc(var(--cz-spacing) * 2);
	}

	:host([mini]) .itemRow cosmoz-button.expand::part(button),
	:host([mini]) .itemRow .expand:not(cosmoz-button),
	:host([mini]) cosmoz-omnitable-item-expand {
		display: none;
	}
	:host([mini]) .itemRow cosmoz-button.expand {
		display: none;
	}

	:host([mini]) .header > cosmoz-omnitable-header-row {
		flex: 0;
	}

	:host(:is([mini], [compact])) .groupRow {
		padding-left: var(--checkbox-offset);
	}

	:host(:is([mini], [compact])) .header {
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

	:host(:is([mini], [compact])) .tableContent {
		overflow: hidden;
	}

	:host(:is([mini], [compact])) .tableContent-scroller::-webkit-scrollbar {
		width: 4px;
	}

	:host(:is([mini], [compact]))
		.tableContent-scroller::-webkit-scrollbar-track {
		background: transparent;
	}

	:host(:is([mini], [compact]))
		.tableContent-scroller::-webkit-scrollbar-thumb {
		background: transparent;
	}

	:host(:is([mini], [compact]))
		.tableContent-scroller:hover::-webkit-scrollbar-thumb {
		background: var(--cz-color-bg-tertiary);
	}

	:host(:is([mini], [compact]))
		.tableContent-scroller::-webkit-scrollbar-button {
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
`})))()}var Hi,Ui;function Wi(){return(Wi=e((()=>{rt(),Hi=e=>{let t=e.replace(/"/gu,`""`);return t.search(/("|,|\n)/gu)>=0?`"`+t+`"`:e},Ui=(e,t,n)=>{let r=e.map(e=>Hi(e.title)).join(`;`)+`
`,i=t.map(t=>e.map(e=>{let n=e.getString(e,t);return n==null?``:Hi(String(n))}).join(`;`)+`
`);i.unshift(r),Xe(new File(i,n,{type:`text/csv;charset=utf-8`}))}})))()}var Gi,Ki;function qi(){return(qi=e((()=>{lt(),rt(),Gi=(e,t)=>{let n=e.map(e=>e.title),r=t.map(t=>e.map(e=>e.toXlsxValue(e,t)??``));return r.unshift(n),r},Ki=(e,t,n,r)=>{let i=Gi(e,t),a=new ct(n).addSheetFromData(i,r).generate();Xe(new File([a],n,{type:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`}))}})))()}var Ji,$,Yi;function Xi(){return(Xi=e((()=>{Ji=Symbol(`index`),$=Symbol(`All`),Yi=(e,t)=>{if(typeof e.findLastIndex==`function`)return e.findLastIndex(t);for(let n=e.length-1;n>=0;n--)if(t(e[n],n,e))return n;return-1}})))()}var Zi;function Qi(){return(Qi=e((()=>{ze(),p(),M(),w(),Wi(),qi(),Xi(),Zi=({columns:e,selectedItems:t,setSelectedItems:n,csvFilename:r,xlsxFilename:i,xlsxSheetname:a,topPlacement:o,enableSelectAll:s,allSelected:c,allItemsCount:l})=>{let u=t===$,d=u||t.length>0,f=t!==$&&s&&c,p=t=>T`<cosmoz-dropdown-menu
			part="extra"
			slot="extra"
			.placement=${o}
		>
			${S({slot:`button`})}
			<cosmoz-button
				variant="tertiary"
				@click=${()=>Ui(e,t,r)}
			>
				${D(`Save selected items as CSV`)}
			</cosmoz-button>
			<cosmoz-button
				variant="tertiary"
				@click=${()=>Ki(e,t,i,a)}
			>
				${D(`Save selected items as XLSX`)}
			</cosmoz-button>
			<slot name="download-menu"></slot
		></cosmoz-dropdown-menu>`,m=C(u,()=>l===void 0?D(`All items selected`):D(`All {count} items selected`,{count:l}),()=>D(`{count} selected item`,{count:t===$?0:t.length}));return T`<cosmoz-bottom-bar
		id="bottomBar"
		?active=${d}
		part="bottomBar"
		exportparts="bar: bottomBar-bar, info: bottomBar-info, buttons: bottomBar-buttons"
	>
		<slot name="info" slot="info">
			${m}
			${C(f,()=>T`&nbsp;<span
							part="select-all-items"
							class="selectAllItems"
							role="button"
							tabindex="0"
							style="cursor: pointer; color: white;"
							@click=${()=>n($)}
						>
							${D(`Select all items`)}
						</span>`)}
		</slot>
		<slot name="actions" id="actions"></slot>
		<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
		<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
		${C(t!==$,()=>p(t))}
	</cosmoz-bottom-bar>`}})))()}var $i;function ea(){return(ea=e((()=>{w(),$i=({allSelected:e,onAllCheckboxChange:t,sortAndGroup:n,dataIsValid:r,data:i,columns:a,filters:o,groupOnColumn:s,setFilterState:c,settingsConfig:l,hideSelectAll:u})=>T`<sort-and-group-provider .value=${n}>
		<div class="header" id="header" part="header">
			${C(!u,()=>T`<input
						class="checkbox all"
						type="checkbox"
						.checked=${e}
						@input=${t}
						?disabled=${!r}
						part="all"
					/>`)}
			${C(u,()=>T` <cosmoz-omnitable-settings
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
	</sort-and-group-provider>`})))()}var ta,na;function ra(){return(ra=e((()=>{k(),ta=x`
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
		min-width: 16px;
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
`,na=({settingsConfig:e})=>{let{columns:t,collapsed:n}=e,r=t.filter(e=>!n.some(t=>t.name===e.name));return T`<div class="skeleton">
		${Array.from({length:5},()=>T`<div>
					<div class="checkbox"></div>
					${r.map(e=>T`<div
								class="cell"
								part=${`cell-${e.name}`}
								name=${e.name}
							></div>`)}
				</div>`)}
	</div>`},customElements.define(`cosmoz-omnitable-skeleton`,N(na,{styleSheets:[ta]}))})))()}var ia;function aa(){return(aa=e((()=>{k(),ra(),qe(),M(),w(),ia=(e,t)=>{let{settingsConfig:n}=e,{processedItems:r,dataIsValid:i,filterIsTooStrict:a,loading:o,displayEmptyGroups:s,compareItemsFn:c,selectedItems:l,setSelectedItems:u,renderItem:d,renderGroup:f,error:p}=t;return T`${C(!o&&!i&&!p,()=>T`<div class="tableContent-empty">
					<slot name="empty-set-message">
						${Ve({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
						<div class="tableContent-empty-message">
							<h3>${D(`Working set empty`)}</h3>
							<p>${D(`No data to display`)}</p>
						</div>
					</slot>
				</div>`)}
		${C(a,()=>T`<div class="tableContent-empty">
					${Ve({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
					<div>
						<h3>${D(`Filter too strict`)}</h3>
						<p>${D(`No matches for selection`)}</p>
					</div>
				</div>`)}
		${C(o&&!r.length,()=>T`<div class="tableContent-empty overlay">
					<cosmoz-omnitable-skeleton
						.settingsConfig=${n}
					></cosmoz-omnitable-skeleton>
				</div>`)}
		${C(o&&r.length,()=>T`<div class="tableContent-empty overlay spinner">
					<cz-spinner></cz-spinner>
				</div>`)}
		${C(p,()=>T`<div class="tableContent-empty overlay">
					${Re({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
					<div class="tableContent-empty-message">
						<h3>${D(`Error loading data`)}</h3>
						<p>${p.message}</p>
					</div>
				</div>`)}
		<div class="tableContent-scroller" id="scroller" part="scroller">
			<cosmoz-grouped-list
				id="groupedList"
				.data=${r}
				.selectedItems=${l}
				@selected-items-changed=${me(u)}
				.displayEmptyGroups=${s}
				.compareItemsFn=${c}
				.renderItem=${d}
				.renderGroup=${f}
			></cosmoz-grouped-list>
			<slot name="extraContent"></slot>
		</div>`}})))()}var oa,sa;function ca(){return(ca=e((()=>{oe(),ie(),Vi(),oa=le`
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
		background: var(--cz-color-fg-quaternary);
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
		box-shadow: inset 0px -1px 0px var(--cz-color-border-primary),
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
	cosmoz-button.pull::part(button),
	.pull:not(cosmoz-button) {
		border: none;
		padding: 0;
		font-size: 0;
		vertical-align: bottom;
		outline: none;
		background: transparent;
		cursor: move;
		margin-right: 12px;
		color: var(--cz-color-fg-quaternary);

		height: auto;
	}
	cosmoz-button.pull::part(button) {
		margin-right: 0;
	}
	cosmoz-button.pull {
		margin-right: 12px;
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
	${zi}
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
	cosmoz-button.sg::part(button),
	.sg:not(cosmoz-button) {
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
		transition: background 0.3s ease, box-shadow 0.3s ease;

		height: auto;
	}
	cosmoz-button.sg {
		display: flex;
	}
	.sg span {
		overflow: hidden;
		text-overflow: ellipsis;
	}
	cosmoz-button.sg[data-on]::part(button),
	.sg[data-on]:not(cosmoz-button) {
		background: var(--cz-color-bg-brand-secondary);
		box-shadow: none;
	}
	.sg svg {
		margin-left: 4px;
		flex: none;
		vertical-align: middle;
		transition: transform 0.3s ease;
	}

	.sg:not([data-on="desc"]) svg {
		transform: scaleY(-1);
	}
`,sa=le`
	:host {
		display: contents;
		color: var(
			--cosmoz-omnitable-settings-color,
			var(--cz-text-color, #101010)
		);
		--cosmoz-dropdown-box-shadow: 0 3px 4px 0 rgb(0 0 0 / 14%),
			0 1px 8px 0 rgb(0 0 0 / 12%), 0 3px 3px -2px rgb(0 0 0 / 40%);
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
`})))()}var la,ua;function da(){return(da=e((()=>{se(),k(),la=e=>{let t=parseInt(e??``,10);return isFinite(t)?t:void 0},ua=e=>{let{config:t}=e,{settings:n,setSettings:r,collapsed:i,requestTween:a}=t,o=Oe({collapsed:i,settings:n.columns,requestTween:a,setSettings:l(e=>r(t=>({...t,columns:e})),[r])});return{...t,onDown:l(e=>{let t=e.target instanceof Element?e.target:null;t&&t.closest(`.pull`)&&(o.handle=e.currentTarget instanceof HTMLElement?e.currentTarget:null)},[o]),onDragStart:l(e=>{let t=e.target instanceof HTMLElement?e.target:null,n=la(t?.dataset.index);if(!t||!o.handle?.contains(t)||n==null)return e.preventDefault();o.handle=null,e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`omnitable/sort-index`,String(n)),e.dataTransfer.setData(`text/plain`,String(n)),setTimeout(()=>t.classList.add(`drag`),0),t.addEventListener(`dragend`,e=>{(e.target instanceof HTMLElement?e.target:null)?.classList.remove(`drag`)},{once:!0})},[o]),onDragEnter:l(e=>{let t=e.currentTarget instanceof HTMLElement?e.currentTarget:null;t&&t===e.target&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`,t.classList.add(`dragover`))},[]),onDragOver:l(e=>{e.preventDefault(),e.currentTarget instanceof HTMLElement&&e.currentTarget.classList.add(`dragover`)},[]),onDragLeave:l(e=>{let t=e.currentTarget instanceof HTMLElement?e.currentTarget:null;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||t.classList.remove(`dragover`))},[]),onDrop:l(e=>{let t=la(e.dataTransfer?.getData(`omnitable/sort-index`)),n=e.currentTarget instanceof HTMLElement?e.currentTarget:null,r=la(n?.dataset.index),{settings:i,setSettings:a,requestTween:s}=o;n?.classList.remove(`dragover`),e.preventDefault();let c=i.slice();c.splice(r+(t>=r?0:-1),0,c.splice(t,1)[0]),s?.(),a(c)},[o]),onToggle:l(e=>{let{settings:t,setSettings:n,requestTween:r}=o,i=t.map(e=>({...e,disabled:e.disabled||o.collapsed?.some(t=>t.name===e.name)})),a=e.target instanceof HTMLInputElement?e.target:null,s=la((e.target instanceof Element?e.target:null)?.closest(`[data-index]`)?.getAttribute(`data-index`));s!=null&&(i.splice(s,1,{...t[s],disabled:!a?.checked,priority:a?.checked?t.reduce((e,t)=>Math.max(e,t.priority??0),0)+1:t[s]?.priority}),r?.(),n(i))},[o])}}})))()}var fa,pa,ma,ha;function ga(){return(ga=e((()=>{Be(),dt(),We(),p(),ge(),ie(),ue(),k(),M(),mi(),ca(),da(),fa=[Pe({apply({availableHeight:e,elements:t}){Object.assign(t.floating.style,{maxHeight:`${Math.max(0,e)}px`})}}),...He],pa=({onDragStart:e,onDragEnter:t,onDragOver:n,onDragLeave:r,onDrop:i,onDown:a,onToggle:o,collapsed:s,filters:c})=>(l,u)=>{let d=!!s?.find(e=>e.name===l.name),f=!l.disabled&&!d;return T` <div
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
			<cosmoz-button
				aria-label=${D(`Reorder column`)}
				variant="tertiary"
				icon-only
				class="pull"
				>${Me({width:`16`,height:`16`})}</cosmoz-button
			>
			<label class="title" ?has-filter=${!ne(c[l.name]?.filter)}
				>${l.title}</label
			>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${f}
				@click=${o}
				.indeterminate=${d}
			/>
		</div>`},ma=e=>{let{settings:t,settingsId:n,onSave:r,onReset:i,hasChanges:a,canReset:o,opened:s,setOpened:l,...u}=ua(e);return T` <div class="headline">
			<span> ${D(`Sort and filter`)} </span>
			<cosmoz-button
				variant="tertiary"
				aria-label="${D(`Close settings`)}"
				@click=${e=>{let t=e.currentTarget instanceof HTMLElement?e.currentTarget:null;t?.focus(),t?.blur()}}
			>
				${c({width:`16`,height:`16`})}
			</cosmoz-button>
		</div>

		<div class="contents">
			<div
				class="heading"
				?data-opened=${s.columns}
				@click=${()=>l(e=>({...e,columns:!e.columns}))}
				part="columns columns-heading"
			>
				${D(`Columns`)} ${Ce({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse
				?opened="${s.columns}"
				part="columns columns-content"
			>
				<div class="list">${t.columns?.map(pa(u))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${s.sort}
				@click=${()=>l(e=>({...e,sort:!e.sort}))}
			>
				${D(`Sort on`)} ${Ce({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse ?opened=${s.sort}> ${pi()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${s.group}
				@click=${()=>l(e=>({...e,group:!e.group}))}
				part="groups groups-heading"
			>
				${D(`Group on`)} ${Ce({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse ?opened=${s.group} part="groups groups-heading"
				>${fi()}</cosmoz-collapse
			>
		</div>

		${C(n,()=>T`<div class="buttons">
					<cosmoz-button
						variant="tertiary"
						@click=${i}
						?disabled=${!o}
					>
						${D(`Reset`)}
					</cosmoz-button>
					<cosmoz-button
						variant="primary"
						@click=${r}
						?disabled=${!a}
					>
						${D(`Save`)}
					</cosmoz-button>
				</div>`)}`},customElements.define(`cosmoz-omnitable-settings-ui`,N(ma,{styleSheets:[Ae(oa)]})),ha=({config:e,newLayout:t})=>T`
	<cosmoz-dropdown
		.placement="${t?`bottom-start`:`bottom-end`}"
		.middleware="${fa}"
	>
		<div title="${D(`Sort and filter`)}" slot="button">
			${C(t,()=>T`<div class="headerDots">...</div>`,()=>T` ${b({width:`20`,height:`20`,styles:`color: var(--cz-color-text-primary)`})}`)}
			${C(e?.badge,()=>T`<div class="badge"></div>`)}
		</div>
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${e}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`,customElements.define(`cosmoz-omnitable-settings`,N(ha,{styleSheets:[Ae(sa)]}))})))()}var _a,va,ya,ba,xa;function Sa(){return(Sa=e((()=>{Ee(),_a=[`sortOn`,`descending`,`groupOn`,`groupOnDescending`],va=e=>t=>typeof t==`object`&&!!t&&`name`in t&&t.name===e,ya=(e=[],t=[],n=[])=>{let r=t.filter(t=>e.some(va(t.name))),i=e.filter(e=>e.name!=null&&!t.some(va(e.name))&&!n.some(va(e.name))),a=n.filter(e=>!t.some(va(e.name)));return[...r,...a.flatMap(t=>{let n=e.find(e=>e.name===t.name);return n?{...t,title:n.title??t.title??``,minWidth:parseInt(n.minWidth??`0`,10)}:[]}),...i.map(e=>{let{name:t,title:n,priority:r,minWidth:i,width:a,flex:o}=e;return{name:t??``,title:n??``,priority:r??0,minWidth:parseInt(i??`0`,10),width:parseInt(a??`0`,10),flex:parseInt(o??`0`,10)}})]},ba=(e,t)=>({...t,...he(Array.from(_a))(e),columns:e.columns?.map(he([`name`,`priority`,`width`,`flex`,`disabled`]))??t?.columns}),xa=({columns:e,settings:t,savedSettings:n,initial:r})=>({...Object.fromEntries(_a.flatMap(e=>r?.[e]==null?[]:[[e,r[e]]])),...n?he(Array.from(_a))(n):{},...t,columns:ya(e,t?.columns,n?.columns)})})))()}var Ca;function wa(){return(wa=e((()=>{Ca=({prefix:e=`omnitable-`}={})=>({write:async(t,n)=>{let r=e+t;try{n?localStorage.setItem(r,JSON.stringify(n)):localStorage.removeItem(r)}catch(e){console.error(e)}},read:async t=>{if(!t)return null;try{let n=localStorage.getItem(e+t);return n==null?null:JSON.parse(n)}catch(e){return console.error(e),null}}})})))()}var Ta,Ea;function Da(){return(Da=e((()=>{k(),wa(),Ta=re(Ca),Ea=()=>{let e=r(Ta);return _(()=>e(),[e])}})))()}function Oa(){return(Oa=e((()=>{Da()})))()}var ka;function Aa(){return(Aa=e((()=>{k(),Oa(),Sa(),ka=(e,t,n,r)=>{let[i,a]=d(e?void 0:null),{read:o,write:c}=Ea();return s(async()=>{e&&a(await o(e))},[e,o]),{settingsId:e,savedSettings:i,onSave:l(async()=>{if(!e)return;let r=ba(t,i);await c(e,r),n(),a(r)},[t,i]),onReset:l(async()=>{n(),e&&i!=null&&(await c(e),a(null)),r?.()},[e,i,c,r]),hasChanges:t!=null,canReset:t!=null||i!=null}}})))()}var ja;function Ma(){return(Ma=e((()=>{k(),J(),Sa(),Aa(),ja=({settingsId:e,host:t})=>{let n=_(()=>Object.fromEntries(_a.map(e=>[e,t[e]])),[]),r=i(),a=l(()=>{r.current?.(n)},[n]),[o,s]=d(),[c,u]=d({columns:!0,sort:!0}),{savedSettings:f,...p}=ka(e,o,s,a),{enabledColumns:m,disabledFiltering:h}=t,g=gn(t,{enabledColumns:m,disabledFiltering:h}),v=_(()=>xa({columns:g,settings:o,savedSettings:f??void 0,initial:n}),[g,o,f]),y=_(()=>v.columns.map(e=>g.find(t=>t.name===e.name)).filter(e=>e!==void 0),[g,...v.columns.map(e=>e.name)]);return{...p,savedSettings:f,opened:c,setOpened:u,settings:v,columns:y,setSettings:s,resetRef:r}}})))()}function Na(){return(Na=e((()=>{ga(),Ma()})))()}var Pa,Fa;function Ia(){return(Ia=e((()=>{Pa=e=>Number.isFinite(e)?e:0,Fa=(e,t)=>{let n=[],[r,i]=e.reduce(([e,t],{width:n,flex:r})=>[e+n,t+r],[0,0]),a=t-r,o=Pa(a/i),s=0,c=0,l=0;for(let t=0;t<e.length;t++){let{width:i,minWidth:u,flex:d}=e[t];u>i+(a>=0?o*d:i*a/r)?(s+=i,c+=u,l+=d,n[t]=u):d===0&&(s+=i,c+=i,n[t]=i)}r-=s,a=t-c-r,i-=l,o=Pa(a/i);for(let t=0;t<e.length;t++){if(n[t]!=null)continue;let{width:i,flex:s}=e[t],c=a>=0?o*s:i*a/r;n[t]=i+c}return n}})))()}var La,Ra,za;function Ba(){return(Ba=e((()=>{Ia(),Xi(),La=(e,t)=>{let n=Yi(e,e=>e!=null&&e>0),r=(e,t)=>`.cell[name="${e}"], cosmoz-omnitable-skeleton::part(cell-${e}){width: ${t}px;padding: 0 min(3px, ${t/2}px)}`,i=e=>`cosmoz-omnitable-resize-nub[name="${e}"]{display:none}`,a=e=>`cosmoz-omnitable-resize-nub[name="${e}"], .cell[name="${e}"]{display:none}`,o=0,s=0;return t.map((t,c)=>{let l=e[c];if(l==null||l===0)return a(t.name);o+=l;let u=Math.round(o),d=u-s;s=u;let f=r(t.name,d);return c===n?`${f}\n${i(t.name)}`:f}).join(`
`)},Ra=(e,t,n)=>{let r=e.filter(e=>!e.hidden),i=r.reduce((e,{width:t})=>e+t,0);if(r.length>1&&i>t)return Ra(r.slice(1),t,n);let a=r.reduce(([e,t],n,r)=>[Math.max(e,n.index),n.index>e?r:t],[-1,-1])[1];return a!==-1&&(r[a].flex=1),Fa(r,t).reduce((e,t,n)=>(e[r[n].index]=t,e),Array(n).fill(void 0))},za=(e,t)=>e.length===0?`.cell {display: none;}`:La(e,t)})))()}var Va;function Ha(){return(Ha=e((()=>{k(),Va=(e,t)=>s(()=>{let n=new ResizeObserver(([e])=>{e.contentRect?.width!==0&&t(e.contentRect.width-88)});return n.observe(e),()=>n.unobserve(e)},[])})))()}var Ua;function Wa(){return(Wa=e((()=>{k(),Ha(),Ua=e=>{let[t,n]=d(()=>e.getBoundingClientRect().width-88);return Va(e,n),t}})))()}var Ga;function Ka(){return(Ka=e((()=>{k(),Ba(),Ga=({canvasWidth:e,groupOnColumn:t,layoutColumns:n,config:r})=>_(()=>{if(!Array.isArray(r)||e==null||e===0)return[];let i=r.map((e,n)=>({minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,name:e.name,index:n,hidden:e.name===t?.name||e.disabled})).map(e=>n==null?e:{...e,hidden:!n.includes(e.name)}).sort(({index:e,priority:t},{index:n,priority:r})=>t===r?n-e:t-r);return Ra(i,e,i.length)},[e,t,r])})))()}var qa;function Ja(){return(Ja=e((()=>{k(),qa=({host:e,canvasWidth:t,columns:n})=>{let r=e.miniBreakpoint??480,i=_(()=>t<=r,[t,r]),a=_(()=>i?n?.filter(e=>e.mini!=null).sort((e,t)=>(e.mini??0)-(t.mini??0)):[],[n,i]),o=_(()=>a.slice(1),[a]),c=a[0],l=!!c&&e.renderItem==null;return s(()=>{e.toggleAttribute(`mini`,l)},[l]),{isMini:l&&i,hasMiniColumn:l,miniColumn:c,miniColumns:o}}})))()}var Ya;function Xa(){return(Xa=e((()=>{k(),Ya=({host:e,canvasWidth:t,layout:n,setSettings:r,requestTween:a})=>{let o=i();o.current=e=>{a(),r(r=>{let i=r.columns,{detail:{newWidth:a,column:o}}=e,s=i.findIndex(e=>e.name===o.name),c=[],l=i.reduce((e,t)=>Math.max(e,t.priority),-1/0);for(let e=0;e<n.length;e++)if(c[e]={...i[e]},e<s&&n[e]&&(c[e].width=n[e],c[e].flex=0,c[e].priority=l),e===s){let r=n.reduce((e,t,n)=>n<s&&t?e-t:e,t);c[e].width=Math.min(r,Math.max(a,i[e].minWidth)),c[e].flex=0,c[e].priority=l}return{...r,columns:c}})},s(()=>{let t=e=>o.current?.(e);return e.addEventListener(`column-resize`,t),()=>e.removeEventListener(`column-resize`,t)},[])}})))()}var Za,Qa,$a;function eo(){return(eo=e((()=>{E(),se(),k(),Za=(e,t)=>{let n=_(()=>{let t=!1,n,r=()=>{t&&(n=requestAnimationFrame(r),e()&&(t=!1))};return{start:()=>{t=!0,cancelAnimationFrame(n),n=requestAnimationFrame(r)},stop:()=>{t=!1,cancelAnimationFrame(n)}}},[]);s(()=>{n.start()},t),s(()=>()=>n.stop(),[])},Qa=(e=0,t=0)=>Math.abs(e-t)<.1,$a=(e,t=1.9,n=De,r)=>{let i=Oe({target:e,speedFactor:t,onConverge:r}),a=l(()=>{if(!i.tween)return i.tween=i.target,n(i.tween),i.onConverge?.(),!0;if(i.target.every((e,t)=>i.tween[t]===e))return n(i.tween),i.onConverge?.(),!0;if(i.tween=i.target.map((e,t)=>Qa(i.tween[t],e)?e:(i.tween[t]??0)+((e??0)-(i.tween[t]??0))/i.speedFactor||0),n(i.tween),i.tween.every((e,t)=>e===i.target[t]))return i.onConverge?.(),!0},[]);Za(a,[e])}})))()}var to,no,ro;function io(){return(io=e((()=>{se(),k(),Ba(),Wa(),Ka(),Ja(),Xa(),eo(),to=e=>{let t=_(()=>new CSSStyleSheet,[]);return s(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,t]},[]),t},no=e=>{s(()=>{e.toggleAttribute(`compact`,e.compact===!0)},[e.compact])},ro=({host:e,columns:t,settings:n,setSettings:r,resizeSpeedFactor:i,sortAndGroupOptions:a})=>{let o=Ua(e),{isMini:s,hasMiniColumn:c,miniColumn:u,miniColumns:f}=qa({host:e,canvasWidth:o,columns:t});no(e);let{groupOnColumn:p}=a,m=c?[u.name]:e.headerColumns??null,h=Ga({canvasWidth:o,groupOnColumn:p,layoutColumns:m,config:n.columns}),g=to(e),v=_(()=>n.columns.reduce((e,n,r)=>h[r]!=null||n.name===p?.name||n.disabled?e:[...e,t.find(e=>e.name===n.name)],[]),[t,n,h]),[y,b]=d(1),x=l(()=>b(i??1.9),[i]),S=l(()=>b(1),[]),C=Oe({columns:n.columns});return $a(h,y,e=>{let t=za(e,C.columns);g.replaceSync(t)},S),Ya({host:e,canvasWidth:o,layout:h,setSettings:e=>r(e(n)),requestTween:x}),{isMini:s,collapsedColumns:v,miniColumns:f,requestTween:x}}})))()}var ao;function oo(){return(oo=e((()=>{ao=({host:e,...t})=>{let{csvFilename:n=`omnitable.csv`,xlsxFilename:r=`omnitable.xlsx`,xlsxSheetname:i=`Omnitable`,topPlacement:a=`top-end`}=e;return{csvFilename:n,xlsxFilename:r,xlsxSheetname:i,topPlacement:a,...t}}})))()}var so;function co(){return(co=e((()=>{k(),Xi(),so=({host:e,selectedItems:t,data:n,dataIsValid:r,columns:i,sortAndGroupOptions:a,collapsedColumns:o,settings:c,filterFunctions:l,settingS:u,filters:d,setFilterState:f,hideSelectAll:p,headerColumns:m,requestTween:h,...g})=>{let v=_(()=>m==null?i:i.filter(e=>m.includes(e.name)),[i,m]),y=t===$||!!n&&n.length>0&&Array.isArray(t)&&t.length===n.length,b=t=>{if(!(t.target instanceof HTMLInputElement))return;let n=e.shadowRoot.querySelector(`#groupedList`);t.target.checked?n.selectAll():n.deselectAll()},{groupOnColumn:x}=a,S=_(()=>[x,...o,...c.columns.filter(e=>e.disabled)].some(e=>!!e&&!!e.name&&Object.keys(l).includes(e.name)),[l,c,o]),C=_(()=>({...u,collapsed:o,badge:S,filters:d,requestTween:h}),[u,o,S,d,h]);return s(()=>{let t=e.shadowRoot.querySelector(`#tableContent`),n=new ResizeObserver(t=>requestAnimationFrame(()=>{e.style.setProperty(`--ot-height`,t[0]?.contentRect.height+`px`)}));return n.observe(t),()=>n.unobserve(t)},[]),{allSelected:y,onAllCheckboxChange:b,data:n,dataIsValid:r,columns:v,settingsConfig:C,filters:d,groupOnColumn:x,setFilterState:f,hideSelectAll:p,sortAndGroup:a.sortAndGroup,...g}}})))()}var lo,uo;function fo(){return(fo=e((()=>{Be(),p(),k(),M(),lo=e=>e?`groupRow groupRow-folded`:`groupRow`,uo=(e,t,{selected:n,folded:r,toggleFold:i,onCheckboxChange:a,groupOnColumn:o,dataIsValid:s})=>T` <div
		class="${lo(r)}"
		part="groupRow groupRow-${t}"
	>
		<input
			class="checkbox"
			type="checkbox"
			.checked=${n}
			.dataItem=${e}
			@input=${a}
			?disabled=${!s}
		/>
		<h3 class="groupRow-label">
			<div><span>${o?.title}</span>: &nbsp;</div>
			<cosmoz-omnitable-group-row
				.column=${o}
				.item=${e.items?.[0]}
				.selected=${n}
				.folded=${r}
				.group=${e}
			></cosmoz-omnitable-group-row>
		</h3>
		<div class="groupRow-badge">${e.items.length}</div>
		<cosmoz-button
			aria-label=${D(`Expand or collapse`)}
			variant="tertiary"
			icon-only
			class="expand"
			?aria-expanded="${r}"
			@click=${i}
		>
			${Ce({width:`16`,height:`16`})}
		</cosmoz-button>
	</div>`})))()}var po;function mo(){return(mo=e((()=>{w(),po=({item:e,index:t})=>n=>C((n?.length??0)>0,()=>T`
				<div class="itemRow-minis" part="item-minis">
					${n.map(n=>T`<div
								class="itemRow-mini"
								part="item-mini item-mini-${n.name}"
							>
								${(n.renderMini??n.renderCell)(n,{item:e,index:t})}
							</div>`)}
				</div>
			`)})))()}var ho;function go(){return(go=e((()=>{Be(),p(),ue(),k(),M(),mo(),ho=(e,t,{selected:n,expanded:r,toggleCollapse:i,columns:a,collapsedColumns:o,miniColumns:s,onItemClick:c,onCheckboxChange:l,onItemChange:u,rowPartFn:d,groupOnColumn:f,dataIsValid:p})=>T`
		<div
			?selected=${n}
			part="${[`itemRow`,`itemRow-${t}`,d?.(e,t)].filter(Boolean).join(` `)}"
			.dataIndex=${t}
			.dataItem=${e}
			class="itemRow"
			@click=${c}
		>
			<div class="itemRow-wrapper" part="itemRow-wrapper">
				<input
					class="checkbox"
					type="checkbox"
					part="checkbox"
					.checked=${n}
					.dataItem=${e}
					@input=${l}
					?disabled=${!p}
				/>
				<cosmoz-omnitable-item-row
					part="itemRow-inner"
					.columns=${a}
					.index=${t}
					.selected=${n}
					.expanded=${r}
					.item=${e}
					.groupOnColumn=${f}
					.onItemChange=${u}
				>
				</cosmoz-omnitable-item-row>
				<cosmoz-button
					aria-label=${D(`Expand or collapse`)}
					variant="tertiary"
					icon-only
					class="expand"
					?hidden="${ne(o.length)}"
					?aria-expanded="${r}"
					@click="${i}"
				>
					${Ce({width:`16`,height:`16`})}
				</cosmoz-button>
			</div>
			${po({item:e,index:t})(s)}
		</div>
		<cosmoz-omnitable-item-expand
			.columns=${o}
			.item=${e}
			?selected=${n}
			?expanded=${r}
			.groupOnColumn=${f}
			part="item-expand"
		>
		</cosmoz-omnitable-item-expand>
	`})))()}var _o,vo,yo;function bo(){return(bo=e((()=>{k(),fo(),go(),Xi(),Y(),_o=e=>e instanceof HTMLInputElement,vo=e=>e instanceof HTMLElement,yo=({host:e,error:t,dataIsValid:n,processedItems:r,columns:a,collapsedColumns:o,miniColumns:c,sortAndGroupOptions:u,rowPartFn:d,...f})=>{let{loading:p=!1,displayEmptyGroups:m=!1,compareItemsFn:h}=e,g=e.renderItem??ho,v=e.renderGroup??uo,y=i({shiftKey:!1,ctrlKey:!1}),b=l(t=>{if(!_o(t.target))return;let n=t.target,r=n.dataItem,i=n.checked,a=e.shadowRoot.querySelector(`#groupedList`);y.current.shiftKey?a.toggleSelectTo(r,i):y.current.ctrlKey?(n.checked=!0,a.selectOnly(r)):a.toggleSelect(r,i),t.preventDefault(),t.stopPropagation()},[]);s(()=>{let e=({shiftKey:e,ctrlKey:t})=>{y.current={shiftKey:e,ctrlKey:t}};return window.addEventListener(`keydown`,e),window.addEventListener(`keyup`,e),()=>{window.removeEventListener(`keydown`,e),window.removeEventListener(`keyup`,e)}},[]);let x=l(t=>{if(!vo(t.currentTarget))return;let n=t.currentTarget,r=t.composedPath();r.slice(0,r.indexOf(n)).some(e=>e instanceof Element&&e.matches(`a, .checkbox, .expand`))||e.dispatchEvent(new window.CustomEvent(`omnitable-item-click`,{bubbles:!0,composed:!0,detail:{item:n.dataItem,index:n.dataIndex}}))},[]),{groupOnColumn:S}=u,C=l((t,n)=>r=>yn(e,t,n,r),[]);return{...f,processedItems:r,dataIsValid:n,filterIsTooStrict:n&&r.length<1,loading:p,compareItemsFn:h,displayEmptyGroups:m,error:t,renderItem:_(()=>(e,t,r)=>g(e,e[Ji],{...r,columns:a,collapsedColumns:o,miniColumns:c,onItemClick:x,onCheckboxChange:b,onItemChange:C,rowPartFn:d,groupOnColumn:S,dataIsValid:n}),[g,a,o,c,x,b,C,d,S,n]),renderGroup:_(()=>(e,t,r)=>v(e,e[Ji],{...r,columns:a,onCheckboxChange:b,groupOnColumn:S,dataIsValid:n}),[v,a,b,S,n])}}})))()}var xo;function So(){return(So=e((()=>{xo=(e,t)=>{if(e===t)return 0;if(e==null)return-1;if(t==null)return 1;let n=typeof e,r=typeof t;return n===`object`&&r===`object`?e.toString()<t.toString()?-1:1:n===`number`&&r===`number`?e-t:n===`string`&&r===`string`?e<t?-1:1:n===`boolean`&&r===`boolean`?e?-1:1:(console.warn(`unsupported sort`,n,e,r,t),0)}})))()}var Co,wo,To,Eo,Do,Oo;function ko(){return(ko=e((()=>{E(),k(),So(),J(),xi(),Xi(),Co=(e,t)=>(n,r)=>xo(e(n),e(r))*(t?-1:1),wo=e=>e.replace(/([a-z0-9])([A-Z])/gu,`$1-$2`).toLowerCase(),To=(e,t)=>{e&&t&&Object.entries(t).forEach(([t,n])=>{let r=e[q];r.__ownChange=!0,Object.assign(r,{[t]:n}),r.__ownChange=!1,r.dispatchEvent(new CustomEvent(`${wo(t)}-changed`,{bubbles:!0,detail:{value:n}}))})},Eo=(e,t)=>Object.assign(e,{[Ji]:t}),Do=Symbol(`unparsed`),Oo=({data:e,columns:t,hashParam:n,sortAndGroupOptions:r,noLocalSort:i,noLocalFilter:a})=>{let{groupOnColumn:o,groupOnDescending:c,sortOnColumn:u,descending:d}=r,f=l(([e,n])=>{let r=t.find(({name:t})=>t===e);return r==null?[e,void 0]:[e,n.filter&&r.serializeFilter(r,n.filter)]},[t]),p=l(([e,n])=>{let r=t.find(({name:t})=>t===e);if(r==null)return[e,{[Do]:n}];let i={filter:r.deserializeFilter(r,n)};return To(r,i),[e,i]},[t]),[m,h]=hi({},n,{multi:!0,suffix:`-filter--`,write:f,read:p}),g=l((e,n)=>h(r=>{let i=be(n,r[e]);return To(t.find(t=>t.name===e),i),{...r,[e]:{...r[e],...i}}}),[t,h]),v=_(()=>Object.values(m).map(e=>e.filter),[m]),y=_(()=>Object.fromEntries(t.map(e=>[e.name,!e.noLocalFilter&&e.getFilterFn(e,m[e.name]?.filter)]).filter(e=>!!e[1])),[t,...v]),b=_(()=>!Array.isArray(e)||e.length===0?[]:Object.entries(y).length===0||a?e.slice():e.filter(e=>Object.values(y).every(t=>t(e))),[e,y,a]),x=_(()=>{if(!i&&!o&&u!=null&&u.sortOn!=null)return b.slice().sort(Co(e=>u.getComparableValue({...u,valuePath:u.sortOn},e),d));if(o!=null&&o.groupOn!=null){let e=b.reduce((e,t)=>{let n=o.getComparableValue({...o,valuePath:o.groupOn},t);if(n===void 0)return e;let r=e.find(e=>e.id===n);return r?(r.items.push(t),e):(r={id:n,name:n,items:[t]},[...e,r])},[]);return e.sort(Co(e=>o.getComparableValue({...o,valuePath:o.groupOn},e.items[0]),c)),!u||i?e:e.filter(e=>Array.isArray(e.items)).map(e=>(e.items.sort(Co(e=>u.getComparableValue({...u,valuePath:u.sortOn},e),d)),e))}return b},[b,o,c,u,d,i]),S=_(()=>{let e=0,t=0,n=[];return x.forEach(r=>{if(`items`in r&&Array.isArray(r.items))Eo(r,t++),r.items.forEach(t=>{Eo(t,e++),n.push(t)});else return Eo(r,e++),n.push(r)},[]),n},[x]);return s(()=>{h(e=>Object.values(e).some(e=>e[Do]!=null)?Object.fromEntries(Object.entries(e).map(([e,t])=>{let n=t[Do];return n==null?[e,t]:p([e,n])})):e)},[p]),{processedItems:x,visibleData:S,filters:m,filterFunctions:y,setFilterState:g}}})))()}var Ao,jo,Mo;function No(){return(No=e((()=>{y(),v(),k(),Ao=e=>{let t=t=>{let n=e.data.indexOf(t);if(n<0)return null;let r=e.data.splice(n,1);if(e.data=e.data.slice(),Array.isArray(r)&&r.length>0)return r[0]},n=(t,n)=>{e.data.splice(t,1,n),e.data=e.data.slice()};return{removeItem:t,removeItems(e){let n=[];for(let r=e.length-1;r>=0;--r){let i=t(e[r]);i!=null&&n.push(i)}return n},replaceItemAtIndex:n,replaceItem(t,r){let i=e.data.indexOf(t);i>-1&&n(i,r)},selectItem(t){e.shadowRoot.querySelector(`#groupedList`).select(t)},selectAll(){e.shadowRoot.querySelector(`#groupedList`).selectAll()},deselectAll(){e.shadowRoot.querySelector(`#groupedList`).deselectAll()},deselectItem(t){e.shadowRoot.querySelector(`#groupedList`).deselect(t)},isItemSelected(t){return e.shadowRoot.querySelector(`#groupedList`).isItemSelected(t)}}},jo=e=>{let[t,n]=d(!1);return s(()=>{e&&n(!0)},[e]),t},Mo=({host:e,visibleData:t,filters:r,ready:i=!0,...o})=>{let{setFilterState:c}=o,l=_(()=>Ao(e),[]),[u,d]=n(`selectedItems`,[]);a(o,Object.values(o)),a(l,Object.values(l)),s(()=>{let t=e=>{if(!(e instanceof CustomEvent))return;let t=e.detail;c(t.name,e=>({...typeof e==`object`&&e?e:{},...t.state}))};return e.addEventListener(`legacy-filter-changed`,t),()=>e.removeEventListener(`legacy-filter-changed`,t)},[]),A(`visibleData`,t),A(`sortedFilteredGroupedItems`,o.sortedFilteredGroupedItems),A(`sortOn`,o.sortOn),A(`descending`,o.descending),A(`isMini`,o.isMini),A(`settingsReady`,jo(i));let f=_(()=>Object.fromEntries(Object.entries(r).filter(([,{filter:e}])=>e!==void 0).map(([e,{filter:t}])=>[e,t])),[r]);return A(`filters`,f,Object.values(f)),{selectedItems:u,setSelectedItems:d}}})))()}var Po;function Fo(){return(Fo=e((()=>{Na(),io(),oo(),co(),bo(),ko(),No(),Di(),Po=e=>{let{hashParam:t,settingsId:n,data:r,resizeSpeedFactor:i,noLocal:a,noLocalSort:o=a,noLocalFilter:s=a,error:c,rowPartFn:l}=e,u=ja({settingsId:n,host:e}),{settings:d,setSettings:f,columns:p,resetRef:m,savedSettings:h}=u,g=h!==void 0,_=Ti(p,t,{settings:d,setSettings:f,resetRef:m,ready:g}),{processedItems:v,visibleData:y,filters:b,setFilterState:x,filterFunctions:S}=Oo({data:r,columns:p,hashParam:t,sortAndGroupOptions:_,noLocalSort:o,noLocalFilter:s}),{isMini:C,collapsedColumns:w,miniColumns:T,requestTween:ee}=ro({host:e,columns:p,settings:d,setSettings:f,resizeSpeedFactor:i,sortAndGroupOptions:_}),te=r&&Array.isArray(r)&&r.length>0,{selectedItems:ne,setSelectedItems:E}=Mo({host:e,visibleData:y,sortedFilteredGroupedItems:v,columns:p,filters:b,setFilterState:x,isMini:C,ready:g,..._}),D=so({host:e,selectedItems:ne,sortAndGroupOptions:_,dataIsValid:te,data:r,columns:p,filters:b,collapsedColumns:w,settings:d,filterFunctions:S,settingS:u,setFilterState:x,hideSelectAll:e.hideSelectAll===!0,headerColumns:e.headerColumns??null,requestTween:ee});return{header:D,list:yo({host:e,error:c,dataIsValid:te,processedItems:v,selectedItems:ne,setSelectedItems:E,columns:p,collapsedColumns:w,miniColumns:T,sortAndGroupOptions:_,rowPartFn:l}),footer:ao({host:e,selectedItems:ne,allSelected:D.allSelected,setSelectedItems:E,columns:p,enableSelectAll:e.enableSelectAll,allItemsCount:e.allItemsCount})}}})))()}function Io(){return(Io=e((()=>{w(),customElements.define(`cosmoz-grouped-list-row`,class extends HTMLElement{get item(){return this._item}set item(e){this._item=e,this._render()}get index(){return this._index}set index(e){this._index=e,this._render()}get renderFn(){return this._renderFn}set renderFn(e){this._renderFn=e,this._render()}_render(){this._item!=null&&this._index!=null&&this._renderFn!=null&&we(this._renderFn(this._item,this._index),this)}})})))()}var Lo,Ro,zo,Bo,Vo,Ho,Uo,Wo,Go;function Ko(){return(Ko=e((()=>{Lo={group:Symbol(`group`)},Ro=(e,t)=>(t.has(e)||t.set(e,{}),t.get(e)),zo=(e,t)=>!!Ro(e,t).expanded,Bo=(e,t)=>!!Ro(e,t).folded,Vo=e=>e?e.items instanceof Array:!1,Ho=e=>{if(!Array.isArray(e)||e.length===0)return;let t=Array.isArray(e[0]?.items);if(!e.every(e=>Array.isArray(e.items)===t))throw Error(`Data must be homogeneous.`)},Uo=(e,t,n)=>{if(Array.isArray(e))return Ho(e),e.reduce((e,r)=>{let i=r;return i.items?i.items.length?Ro(r,n).folded?e.concat(r):e.concat(r,i.items.map(e=>Object.assign(e,{[Lo.group]:r}))):t?e.concat(r):e:e.concat(r)},[])},Wo=(e,...t)=>typeof e==`function`?e(...t):e,Go=(e,t)=>e===t})))()}var qo;function Jo(){return(Jo=e((()=>{k(),Ko(),qo=()=>{let[e,t]=d(()=>[new WeakMap]);return{setItemState:l((e,n)=>t(([t])=>{let r=Ro(e,t);return Object.assign(r,Wo(n,r)),[t]}),[]),state:e[0],signal:e}}})))()}var Yo;function Xo(){return(Xo=e((()=>{k(),Jo(),Ko(),Yo=()=>{let{setItemState:e,state:t,signal:n}=qo();return{state:t,signal:n,toggleFold:l((t,n)=>{Vo(t)&&e(t,e=>({folded:n===void 0?!e.folded:n}))},[]),toggleCollapse:l((t,n)=>{Vo(t)||e(t,e=>({expanded:n===void 0?!e.expanded:!n}))},[])}}})))()}var Zo;function Qo(){return(Qo=e((()=>{k(),Xi(),Ko(),Zo=({compareItemsFn:e,data:t,flatData:r})=>{let[i,a]=n(`selectedItems`,()=>[]),[o,c]=d(),u=l(e=>i===$||i.includes(e),[i]),f=l(e=>i===$||(e?.items?.every(u)??!1),[i,u]),p=l(e=>u(e)||f(e),[u,f]),m=l(e=>{let t=e.items??[e];a(e=>e===$?e:[...e,...t.filter(t=>!e.includes(t))]),c(e)},[]),h=l(e=>{let t=e.items??[e];a(e=>e===$?(r??[]).filter(e=>!Vo(e)).filter(e=>!t.includes(e)):e.filter(e=>!t.includes(e))),c(e)},[r]),g=l(e=>{a(e.items?.slice()||[e]),c(e)},[]),_=l(()=>{a(t.flatMap(e=>e.items||e)),c(void 0)},[t]),v=l(()=>{a([]),c(void 0)},[]),y=l((e,t=!p(e))=>t?m(e):h(e),[p]),b=l((t,n)=>{if(!r)return;let i=o?r.findIndex(t=>e(t,o)):-1;if(i<0)return y(t,n);let[a,s]=[i,r.indexOf(t)].sort((e,t)=>e-t);r.slice(a,s+1).forEach((e,t,r)=>{t>0&&t<r.length-1&&Vo(e)||y(e,n)}),c(t)},[r,e,y]);return s(()=>a(t=>t!==$&&t.length>0&&r?r.filter(n=>t.find(t=>e(n,t))):t),[r]),{selectedItems:i,isItemSelected:u,isGroupSelected:f,isSelected:p,select:m,deselect:h,selectOnly:g,selectAll:_,deselectAll:v,toggleSelect:y,toggleSelectTo:b}}})))()}var $o,es,ts;function ns(){return(ns=e((()=>{ae(),y(),k(),w(),Io(),Xo(),Qo(),Ko(),$o={host:{position:`relative`,display:`flex`,flexDirection:`column`}},es=e=>{let{data:t,renderItem:n,renderGroup:r,displayEmptyGroups:i,compareItemsFn:o=Go}=e,{toggleFold:s,toggleCollapse:c,state:u,signal:d}=Yo(),f=_(()=>Uo(t,i,u),[t,i,d]),{selectedItems:p,isItemSelected:h,isGroupSelected:g,isSelected:v,select:y,deselect:b,selectOnly:x,selectAll:S,deselectAll:C,toggleSelect:w,toggleSelectTo:T}=Zo({compareItemsFn:o,data:t,flatData:f}),ee=l((e,t)=>Array.isArray(e.items)?r(e,t,{selected:g(e),folded:Bo(e,u),toggleSelect:t=>w(e,typeof t==`boolean`?t:void 0),toggleFold:()=>s(e)}):n(e,t,{selected:h(e),expanded:zo(e,u),toggleSelect:t=>w(e,typeof t==`boolean`?t:void 0),toggleCollapse:()=>c(e)}),[n,r,p,w,d]);m(()=>{Object.assign(e.style,$o.host)},[]);let te={toggleFold:s,toggleCollapse:c,isItemSelected:h,isGroupSelected:g,isSelected:v,select:y,deselect:b,selectOnly:x,selectAll:S,deselectAll:C,toggleSelect:w,toggleSelectTo:T};return a(te,Object.values(te)),{renderRow:ee,flatData:f}},ts=({renderRow:e,flatData:t})=>ce({items:t,renderItem:(t,n)=>T`<cosmoz-grouped-list-row
				.item=${t}
				.index=${n}
				.renderFn=${e}
			></cosmoz-grouped-list-row>`})})))()}var rs;function is(){return(is=e((()=>{k(),ns(),rs=e=>ts(es(e)),customElements.define(`cosmoz-grouped-list`,N(rs,{useShadowDOM:!1}))})))()}function as(){return(as=e((()=>{is()})))()}var os,ss,cs;function ls(){return(ls=e((()=>{Ie(),Pt(),ai(),si(),Ai(),Fi(),Ri(),k(),Ne(),w(),je(),Vi(),Qi(),ea(),aa(),Fo(),as(),fo(),go(),os=e=>window.ShadyCSS?.ApplyShim?.transformCssText?.(e)||e,ss=e=>{let{header:t,list:n,footer:r}=Po(e);return T`
		<style>
			${te([],()=>os(Bi))}
		</style>

		<div class="mainContainer">
			${$i(t)}
			<div class="tableContent" id="tableContent">
				${ia(t,n)}
			</div>
			${Zi(r)}
		</div>

		<div id="columns">
			<slot id="columnsSlot"></slot>
		</div>
	`},customElements.define(`cosmoz-omnitable`,N(ss,{observedAttributes:[`hash-param`,`sort-on`,`group-on`,`descending`,`group-on-descending`,`hide-select-all`,`settings-id`,`no-local`,`no-local-sort`,`no-local-filter`,`disabled-filtering`,`loading`,`mini-breakpoint`,`compact`,`inline`,`enable-select-all`]})),cs=`
	<slot name="actions" slot="actions"></slot>
`,T(Object.assign([cs],{raw:[cs]})),at(Object.assign([cs],{raw:[cs]}))})))()}var us,ds,fs,ps,ms;function hs(){return(hs=e((()=>{w(),Be(),qe(),bt(),ls(),_t(),us={title:`Components/ComsmozOmnitableFullDemo`,component:`cosmoz-omnitable`,tags:[`autodocs`],args:{loading:!1,locale:`en`,sortOn:``,groupOn:``,descending:!1,groupOnDescending:!1,hashParam:``,settingsId:``,selectedItems:[],disabledFiltering:!1,enableSelectAll:!1,allItemsCount:1e4},argTypes:{loading:{control:`boolean`,description:`Show loading state`,table:{defaultValue:{summary:`false`}}},locale:{control:`select`,options:[`en`,`fr`,`sv`],description:`Language locale`,table:{defaultValue:{summary:`en`}}},selectedItems:{control:`object`,description:`Show selected items`},allItemsCount:{control:`number`,description:`Total number of items`},data:{control:`object`,description:`Show specified items`},sortOn:{control:`text`,description:`Column property name to sort on (e.g., "amount", "date", "id")`},groupOn:{control:`text`,description:`Column property name to group on (e.g., "amount", "date", "id")`},descending:{control:`boolean`,description:`Sort on descending`},groupOnDescending:{control:`boolean`,description:`Group on descending`},hashParam:{control:`text`,description:`Hash parameter for URL state management`},settingsId:{control:`text`,description:`ID for storing table settings`},disabledFiltering:{control:`boolean`,description:`Disable filter inputs in all column headers`,table:{defaultValue:{summary:`false`}}}},render:e=>T`
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
                    ${Je({styles:`vertical-align: middle; fill: currentColor;`})}
                    <span>Remove items</span>
                </cosmoz-button>
            </cosmoz-omnitable>
        `,play:async()=>{console.log(`Current hash:`,window.location.hash)}},ds={args:{data:vt(10,10,10)}},fs={args:{data:vt(2,2,10)}},ps={args:{data:[]}},ms=[`TableWithLargeData`,`TableWithSmallData`,`TableWithNoData`],ds.parameters={...ds.parameters,docs:{...ds.parameters?.docs,source:{originalSource:`{
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
}`,...ps.parameters?.docs?.source}}}})))()}hs();export{ds as TableWithLargeData,ps as TableWithNoData,fs as TableWithSmallData,ms as __namedExportsOrder,us as default};