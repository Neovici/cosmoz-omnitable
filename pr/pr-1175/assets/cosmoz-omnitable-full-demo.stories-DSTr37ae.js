import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$t as t,At as n,Bt as r,C as i,D as a,Dt as o,F as s,G as c,Ht as l,I as u,It as d,L as f,M as p,Mt as m,N as h,O as g,Pt as _,Q as v,Qt as y,Rt as b,S as x,Ut as S,V as C,X as ee,Xt as te,Y as ne,Yt as w,_ as re,_t as T,a as ie,b as ae,bt as oe,ct as se,d as ce,et as le,f as ue,g as de,h as fe,ht as pe,i as me,it as he,j as E,k as D,kt as ge,lt as _e,m as O,nt as ve,p as ye,pt as be,q as xe,st as k,t as Se,v as Ce,vt as A,w as we,x as Te,y as Ee,yt as j,z as De}from"./dist-DmLvQxKn.js";import{$ as Oe,A as ke,C as Ae,D as je,E as Me,F as M,G as Ne,H as Pe,I as Fe,L as Ie,M as Le,N as Re,O as N,P,Q as ze,R as Be,S as Ve,T as He,U as Ue,V as We,X as Ge,Y as Ke,Z as qe,_ as Je,a as Ye,b as Xe,c as Ze,d as Qe,et as $e,f as et,g as tt,h as nt,j as rt,k as F,l as it,n as at,o as ot,p as st,q as ct,r as lt,t as ut,u as dt,v as ft,w as pt,x as mt,y as ht,z as gt}from"./dist-_9n0eyZx.js";import{n as _t,t as vt}from"./table-demo-helper-C6ZNhr6E.js";var yt;function bt(){return(bt=e((()=>{A(),yt=()=>y`<style>
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
</style>`,customElements.define(`cz-spinner`,j(yt))})))()}var xt,St;function I(){return(I=e((()=>{c(),be(),A(),xt=T`
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
`,St=()=>y`
	<style>
		${xt}
	</style>
	${ne({className:`icon`,width:`18`,height:`18`})}
`,customElements.define(`cosmoz-clear-button`,j(St))})))()}var L,Ct,wt,Tt,Et,R;function z(){return(z=e((()=>{M(),L=({valuePath:e},t)=>P(t,e),Ct=L,wt=L,Tt=({valuePath:e},t)=>n=>{let r=P(n,e);return r!=null&&r.toString().toLowerCase().trim().includes(t.toLowerCase().trim())},Et=(e,t)=>t===``||t==null?null:t,R=e=>class extends e{static get properties(){return{isOmnitableColumn:{type:Boolean,value:!0},title:{type:String},valuePath:{type:String,notify:!0},values:{type:Array,notify:!0},filter:{type:Object},noLocalFilter:{type:Boolean},disabled:{type:Boolean,value:!1,notify:!0},editable:{type:Boolean,notify:!0},loading:{type:Boolean,value:!1,notify:!0},externalValues:{type:Boolean,value:!1,notify:!0},name:{type:String},sortOn:{type:String},groupOn:{type:String},noSort:{type:Boolean,value:!1},disabledFiltering:{type:Boolean,value:!1},width:{type:String,value:`75px`},minWidth:{type:String,value:`40px`},flex:{type:String,value:`1`},cellClass:{type:String,value:`default-cell`},headerCellClass:{type:String,value:`default-header-cell`},priority:{type:Number,value:0},hidden:{type:Boolean,notify:!0},align:{type:String,value:`left`},headerAlign:{type:String,value:null},renderHeader:{type:Function},renderCell:{type:Function},renderEditCell:{type:Function},renderGroup:{type:Function},mini:{type:Number,value:null},renderMini:{type:Function}}}static get observers(){return[`notifyFilterChange(filter)`]}notifyFilterChange(e){this.__ownChange||this.dispatchEvent(new CustomEvent(`legacy-filter-changed`,{detail:{name:this.name,state:this.legacyFilterToState(e)},bubbles:!0}))}legacyFilterToState(e){return{filter:e}}getFilterFn(){}getString(e,t){return L(e,t)}toXlsxValue(e,t){return Ct(e,t)}cellTitleFn(e,t){return this.getString(e,t)}headerTitleFn(e){return e.title}serializeFilter(e,t){return Et(e,t)}deserializeFilter(e,t){if(t==null)return null;if(typeof t==`string`)try{return window.decodeURIComponent(t)}catch{return null}return t}getComparableValue(e,t){return wt(e,t)}computeSource(e,t){return t}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n),this.dispatchEvent(new CustomEvent(`cosmoz-column-prop-changed`,{bubbles:!0}))}}})))()}var Dt,Ot,kt,At,jt,Mt,Nt;function Pt(){return(Pt=e((()=>{p(),I(),F(),t(),z(),Dt=e=>t=>e(n=>{if(n.inputValue===void 0&&t.target.value===``)return n;clearTimeout(n.t);let r=setTimeout(()=>e(e=>({...e,filter:e.inputValue})),1e3);return{...n,inputValue:t.target.value,t:r}}),Ot=e=>()=>e(e=>({...e,filter:e.inputValue})),kt=e=>t=>{t.keyCode===13&&(t.preventDefault(),e(e=>({...e,filter:e.inputValue})))},At=e=>t=>e(e=>({...e,headerFocused:t.detail.value})),jt=e=>()=>e(e=>({...e,filter:null,inputValue:null})),Mt=e=>e!=null&&e!==``,Nt=class extends R(N){static get properties(){return{minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},inputValue:{type:Object,notify:!0}}}getFilterFn(e,t){if(t!=null&&t!==``)return Tt(e,t)}renderCell(e,{item:t}){return y`<span class="default-column">${L(e,t)}</span>`}renderEditCell(e,{item:t},n){return y`<cosmoz-input
			variant="inline"
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${L(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,inputValue:n,headerFocused:r},i){return y`<cosmoz-input
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
			${k(!e.disabledFiltering,()=>y`<cosmoz-clear-button
						suffix
						slot="suffix"
						?visible=${Mt(t)}
						light
						@click=${jt(i)}
					></cosmoz-clear-button>`)}
		</cosmoz-input>`}legacyFilterToState(e){return{filter:e,inputValue:e}}},customElements.define(`cosmoz-omnitable-column`,Nt)})))()}var Ft,It,Lt;function B(){return(B=e((()=>{p(),A(),t(),Ft=[`label`,`value`,`slot`,`always-float-label`,`disabled`,`variant`],It=S`
	${De}

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
`,Lt=e=>{let{label:t,value:n,slot:r}=e;e.toggleAttribute(`has-value`,!!n);let i=y`<div
		id="input"
		part="input"
		role="button"
		class="control"
		slot=${r}
	>
		${n||``}
	</div>`;return C(i,{label:t})},customElements.define(`cosmoz-omnitable-dropdown-input`,j(Lt,{observedAttributes:Ft,styleSheets:[It]}))})))()}var Rt;function zt(){return(zt=e((()=>{Ie(),t(),Me(),B(),Rt=({title:e,tooltip:t=``,filterText:n=``,onOpenedChanged:r,content:i,align:a=`left`,externalValues:o=null})=>{let s={filtered:!!n,...o!=null&&{[`external-values-${o}`]:!0}};return y`
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
			class=${He({...s,dropdown:!0})}
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
	`}})))()}var Bt,Vt;function Ht(){return(Ht=e((()=>{Ce(),Le(),pt(),mt(),Bt=e=>e?typeof e.close==`function`?e:Bt(e.parentElement):null,Vt=e=>class extends e{static get properties(){return{disabled:{type:Boolean,value:!1},filter:{type:Object,notify:!0},values:{type:Array,value(){return[]}},headerFocused:{type:Boolean,notify:!0},min:{type:Number,value:null},max:{type:Number,value:null},limits:{type:Function},autoupdate:{type:String,value:!0},locale:{type:String,value:null},align:{type:String,value:`left`},_filterInput:{type:Object,value(){return{min:null,max:null}}},_range:{type:Object,computed:`_computeRange(values.*)`},_limit:{type:Object,computed:`_computeLimit(_range, _filterInput.*, min, max)`,value(){return{}}},_tooltip:{type:String,computed:`_computeTooltip(title, _filterText)`},_fromClasses:{type:String,computed:`_computeInputClasses(_filterInput.min)`},_toClasses:{type:String,computed:`_computeInputClasses(_filterInput.max)`}}}static get observers(){return[`_filterInputChanged(_filterInput.*, autoupdate)`,`_filterChanged(filter.*)`,`_updateLimits(limits, headerFocused)`]}disconnectedCallback(){this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),super.disconnectedCallback()}_computeInputClasses(e){return e!=null&&e!==``?`has-value`:``}toNumber(e,t,n){if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=this.toNumber(t);return i==null?r:n(r,i)}toValue(){return this.toNumber.apply(this,arguments)}getComparableValue(e,t){if(e==null)return;let n=e;return t!=null&&(n=this.get(t,e)),this.toValue(n)}renderValue(){}getInputString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return this._toInputString(n)}_computeRange(e){let t=e.base,n=Array.isArray(t)&&t.length&&t.map(e=>this.toValue(e)).filter(e=>e!=null);return!n||n.length<1?{min:null,max:null}:n.reduce((e,t)=>({min:this.toValue(t,e.min,Math.min),max:this.toValue(t,e.max,Math.max)}),{})}_computeLimit(e,t,n,r){if(!e)return;let i=t.base,a=this.toValue(n),o=this.toValue(r),s=a??this.toValue(e.min),c=o??this.toValue(e.max);return{fromMin:s,fromMax:this.toValue(c,this._fromInputString(i.max,`max`),Math.min),toMin:this.toValue(s,this._fromInputString(i.min,`min`),Math.max),toMax:c}}_computeFilterText(e){if(e.base==null)return;let t=e.base,n=this.toValue(t.min),r=this.toValue(t.max),i=[];return n!=null&&i.push(this.renderValue(n)),i.push(` - `),r!=null&&i.push(this.renderValue(r)),i.length>1?i.join(``):void 0}_computeTooltip(e,t){return t==null?e:`${e}: ${t}`}_fromInputString(e){return this.toValue(e)}_toInputString(e){return this.toValue(e)??null}_getDefaultFilter(){return{min:null,max:null}}_filterInputChanged(e,t){let n=e.path.split(`.`)[1];this.__inputChangePath=n||null,t&&(this._limitInputDebouncer=Ve.debounce(this._limitInputDebouncer,Re.after(600),()=>{this._limitInput(),this._updateFilter()}),Ae(this._limitInputDebouncer))}_clearFrom(){this.set(`_filterInput.min`,null),this._updateFilter()}_clearTo(){this.set(`_filterInput.max`,null),this._updateFilter()}_onBlur(){this._limitInput(),this._updateFilter()}_onKeyDown(e){let t=e.currentTarget,n=Array.from(t.parentElement.querySelectorAll(`cosmoz-input`)),r=n[n.findIndex(e=>e===t)+1],i=!r,a=n[0]===t;switch(e.keyCode){case 13:if(e.preventDefault(),!i)r.focus();else{let e=this._limitInput();this._updateFilter(),e||this._closeParent(t)}break;case 9:(i&&!e.shiftKey||a&&e.shiftKey)&&this._closeParent(t)}}_closeParent(e){let t=Bt(e);t&&t.close()}_onDropdownOpenedChanged({currentTarget:e,type:t,detail:n}){(t===`focus`||n?.value===!0)&&setTimeout(()=>{e.querySelector(`cosmoz-input:focus`)||e.querySelector(`cosmoz-input`)?.focus()},100)}_limitInput(){let e=this._filterInput,t=this.__inputChangePath,n=t?this._fromInputString(this.get(t,e),t):null;if(this.__inputChangePath=null,n==null)return!1;let r=this._limit,i=t===`min`?`from`:`to`,a=this.get(i+`Min`,r),o=this.get(i+`Max`,r),s=this.toValue(n,a,Math.max),c=this.toValue(s,o,Math.min);return this.getComparableValue(n)!==this.getComparableValue(c)&&(this.set([`_filterInput`,t],this._toInputString(c,t)),this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),!0)}_updateFilter(){let e=this._filterInput,t=this.filter,n=this._fromInputString(e.min,`min`),r=this._fromInputString(e.max,`max`);(this.getComparableValue(n)!==this.getComparableValue(t,`min`)||this.getComparableValue(r)!==this.getComparableValue(t,`max`))&&this.set(`filter`,{min:n,max:r})}_filterChanged(e){if(this._filterInput==null)return;let t=this._filterInput,n=e.base,r=this._fromInputString(t.min,`min`),i=this._fromInputString(t.max,`max`);(this.getComparableValue(r)!==this.getComparableValue(n,`min`)||this.getComparableValue(i)!==this.getComparableValue(n,`max`))&&(this.set(`_filterInput`,{min:this._toInputString(n.min),max:this._toInputString(n.max)}),this._limitInputDebouncer&&this._limitInputDebouncer.cancel())}hasFilter(){let e=this.filter;return e==null?!1:this.toValue(e.min)!=null||this.toValue(e.max)!=null}resetFilter(){this.filter=this._getDefaultFilter()}_updateLimits(e,t){e&&Promise.resolve(Ee(e,{active:t})).then(e=>{let{min:t,max:n}=e??{};Object.assign(this,{...t==null?{}:{min:t},...n==null?{}:{max:n}})})}}})))()}var Ut;function Wt(){return(Wt=e((()=>{F(),t(),Ut=e=>class extends e{static get template(){return ke`<div id="output" style="position:relative;"></div>`}connectedCallback(){super.connectedCallback();let e=this;te(e.render(),e.$.output)}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n);let r=this;requestAnimationFrame(()=>te(r.render(),r.$.output))}}})))()}var Gt;function Kt(){return(Kt=e((()=>{p(),F(),D(),t(),zt(),B(),Ht(),Wt(),Gt=class extends Vt(Ut(N)){static get properties(){return{currency:{type:String},autodetect:{type:Boolean,value:!1},rates:{type:Object},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, _formatters)`},headerFocused:{type:Boolean,value:!1}}}static get observers(){return[`_valuesChanged(autodetect, currency, values)`]}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return y`
			${k(this.disabled,()=>y`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>y`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Rt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:y`
							<h3>${this.title}</h3>
							<cosmoz-input
								class=${this._fromClasses}
								type="number"
								title=${E(`Minimum amount`)}
								label=${E(`Min amount`)}
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
								title=${E(`Maximum amount`)}
								label=${E(`Max amount`)}
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
		`}_valuesChanged(e,t,n){if(!Array.isArray(n)||n.length<1||!e&&t)return;let r=n.reduce((e,t)=>{if(t.currency){let n=t.currency;e[n]=(e[n]||0)+1}return e},{}),i=Object.keys(r)[0];Object.keys(r).reduce((e,t)=>{let n=Math.max(e,r[t]);return n===r[t]&&(i=t),n},0),this.set(`currency`,i)}toAmount(e,t,n){if(e==null||e===``)return;if(typeof e!=`object`||e.currency==null||e.currency===``)return null;let r=this.toNumber(e.amount);if(r==null||Number.isNaN(r))return null;let i={currency:e.currency,amount:r};if(n==null||t==null)return i;let a=this.toAmount(t);if(a==null)return i;let o=this.rates||{},s=i.amount*(o[i.currency]||1),c=a.amount*(o[a.currency]||1);return this.toNumber(s,c,n)===s?i:a}toValue(){return this.toAmount.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n==null)return;let r=this.toNumber(n.amount),i=this.rates;return i==null?r:r*(i[n.currency]||1)}getString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return n===void 0?``:n===null?`Invalid value`:this.renderValue(n)}getCurrency(e,t){let n=this.get(t,e);return n&&n.currency}getFormatter(e,t){let n=e+(t||``)||``,r=this._formatters=this._formatters||{};return r[n]||(r[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),r[n]}renderValue(e){let t=this.toAmount(e);return t==null?``:this.getFormatter(t.currency,this.locale).format(e.amount)}_amountValueChanged(e){let t=e.target.value,n=e.model.item,r=this.get(this.valuePath,n),i={amount:Number(t),currency:r.currency};this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toInputString(e){let t=this.toValue(e);return t==null?null:this.toNumber(t.amount)}_toInputStringAmount(e){let t=this.rates;if(t==null)return this._toInputString(e);let n=this.toValue(e);return n==null?null:(this.toNumber(n.amount)*(t[n.currency]||1)/(t[this.currency]||1)).toFixed(2)}_fromInputString(e,t){let n=this.toNumber(e);if(n!=null)return this.toValue({amount:n,currency:t&&this.get([`filter`,t,`currency`])||this.currency})}},customElements.define(`cosmoz-omnitable-amount-range-input`,Gt)})))()}var V,qt,Jt,Yt,H,Xt,Zt,Qt;function $t(){return($t=e((()=>{M(),ft(),V=(e,t,n)=>{if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=V(t);return i==null?r:n(r,i)},qt=e=>{let t=V(e);return t==null?null:t.toString()},Jt=({valuePath:e},t)=>{let n=V(e?P(t,e):t);return qt(n)},Yt=e=>qt(e)??``,H=({valuePath:e,maximumFractionDigits:t},n)=>{if(n==null)return;let r=e?P(n,e):n,i=V(r);if(i!=null)return t===null?i:V(i.toFixed(t))},Xt=Xe((e,t,n)=>{let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}),Zt=({valuePath:e,locale:t,minimumFractionDigits:n,maximumFractionDigits:r},i)=>{let a=e?P(i,e):i;if(a==null)return``;let o=V(a);if(o!=null)return Xt(t,n,r).format(o)},Qt=(e,t)=>n=>{let r=H(e,n);if(r==null)return!1;let i=H({...e,valuePath:`min`},t),a=H({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})))()}var U,W,en,tn,nn,rn,an,on,sn,cn,ln;function un(){return(un=e((()=>{M(),$t(),U=(e={},t,n,r)=>{if(t==null||t===``)return;if(typeof t!=`object`||t.currency==null||t.currency===``)return null;let i=V(t.amount);if(i==null||Number.isNaN(i))return null;let a={currency:t.currency,amount:i};if(r==null||n==null)return a;let o=U(e,n);if(o==null)return a;let s=a.amount*(e[a.currency]||1),c=o.amount*(e[o.currency]||1);return V(s,c,r)===s?a:o},W=({valuePath:e,rates:t},n)=>{if(n==null)return;let r=n;e!=null&&(r=P(n,e));let i=U(t,r);if(i==null)return;let a=V(i.amount);return t==null||a==null?a:a*(t?.[i.currency]||1)},en=(e,t)=>n=>{let r=W(e,n);if(r===void 0)return!1;let i=W({...e,valuePath:`min`},t),a=W({...e,valuePath:`max`},t);return i===void 0||a===void 0||!(r<i||r>a)},tn={},nn=(e,t)=>{let n=e+(t||``)||``;return tn[n]||(tn[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),tn[n]},rn=(e,t,n)=>{let r=U(e,t);return r==null?``:nn(r.currency,n).format(r.amount)},an=({valuePath:e,rates:t,locale:n},r)=>{let i=U(t,e?P(r,e):void 0);return i===void 0?``:i===null?`Invalid value`:rn(t,i,n)},on=e=>e?e.amount+e.currency:``,sn=e=>{if(e==null||e===``)return;let t=e.match(/^(-?[\d]+)([\D]+?)$/iu);if(!(!Array.isArray(t)||t.length<0))return{amount:Number(t[1]),currency:t[2]}},cn=({valuePath:e},t)=>e?P(t,e)?.currency:null,ln=({valuePath:e},t)=>e?P(t,e)?.amount:void 0})))()}var G,dn,fn,pn,mn,hn,gn;function K(){return(K=e((()=>{ft(),A(),G=Symbol(`column`),dn=e=>{let t=!0,n=e.map(e=>e.name);return e.forEach(e=>{e.name??(t=!1,console.error(`The name attribute needs to be set on all columns! Missing on column`,e))}),e.forEach(e=>{n.indexOf(e.name)!==n.lastIndexOf(e.name)&&(t=!1,console.error(`The name attribute needs to be unique among all columns! Not unique on column`,e))}),t},fn=(e,t)=>{let n=e.valuePath??e.name;return{name:e.name,title:e.title,valuePath:n,groupOn:e.groupOn??n,sortOn:e.sortOn??n,noSort:e.noSort,disabledFiltering:t||e.disabledFiltering,minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,getString:e.getString,getComparableValue:e.getComparableValue,serializeFilter:e.serializeFilter,deserializeFilter:e.deserializeFilter,toXlsxValue:e.toXlsxValue,renderHeader:e.renderHeader,renderCell:e.renderCell,renderEditCell:e.renderEditCell,renderGroup:e.renderGroup,cellTitleFn:e.cellTitleFn,headerTitleFn:e.headerTitleFn,getFilterFn:e.getFilterFn,headerCellClass:e.headerCellClass,cellClass:e.cellClass,editable:e.editable,values:e.values,source:ht(e.computeSource),noLocalFilter:e.noLocalFilter,mini:e.mini,renderMini:e.renderMini,align:e.align,headerAlign:e.headerAlign,loading:e.loading,externalValues:e.externalValues,computeSource:e.computeSource,trueLabel:e.trueLabel,falseLabel:e.falseLabel,valueProperty:e.valueProperty,textProperty:e.textProperty,emptyLabel:e.emptyLabel,emptyValue:e.emptyValue,min:e.min,max:e.max,locale:e.locale,autoupdate:e.autoupdate,maximumFractionDigits:e.maximumFractionDigits,minimumFractionDigits:e.minimumFractionDigits,currency:e.currency,rates:e.rates,autodetect:e.autodetect,ownerTree:e.ownerTree,keyProperty:e.keyProperty,...e.getConfig?.(e),[G]:e}},pn=e=>e.isOmnitableColumn&&!e.hidden,mn=e=>{let t=e.filter(pn);return dn(t)?t:[]},hn=(e,t,n)=>(Array.isArray(t)?e.filter(e=>t.includes(e.name)):e.filter(e=>!e.disabled)).map(e=>fn(e,n)),gn=(e,{enabledColumns:t,disabledFiltering:n})=>{let[r,i]=m([]);return _(()=>{let r,a=[],o=e.shadowRoot.querySelector(`#columnsSlot`),s=e=>()=>{let r=o.assignedNodes({flatten:!0});if(e)a=r;else{let e=r.filter(e=>!a.includes(e)),t=a.filter(e=>!r.includes(e)),n=[...e,...t].some(e=>e.isOmnitableColumn);if(a=r,!n)return}i(hn(mn(r),t,n))},c=e=>{cancelAnimationFrame(r),r=requestAnimationFrame(s(e?.type===`cosmoz-column-prop-changed`))};return c(),o.addEventListener(`slotchange`,c),e.addEventListener(`cosmoz-column-prop-changed`,c),()=>{o.removeEventListener(`slotchange`,c),e.removeEventListener(`cosmoz-column-prop-changed`,c),cancelAnimationFrame(r)}},[t,n]),r}})))()}var _n,vn,yn;function q(){return(q=e((()=>{M(),K(),_n=(e,t)=>Array.isArray(e)?e.map(e=>P(e,t)).filter((e,t,n)=>e!=null&&n.indexOf(e)===t):void 0,vn=({externalValues:e,values:t,valuePath:n},r)=>{if(e)return e;if(typeof t==`function`)return t;if(n!==void 0)return _n(r,n)},yn=(e,t,n,r)=>{let{valuePath:i}=t,a=i===void 0?void 0:P(n,i);if(r===a)return;i!==void 0&&Fe(n,i,r);let o={item:n,valuePath:i,value:r,oldValue:a,column:t[G]};e.dispatchEvent(new CustomEvent(`column-item-changed`,{bubbles:!0,composed:!0,detail:o}))}})))()}var bn;function xn(){return(xn=e((()=>{p(),I(),F(),t(),M(),z(),Kt(),un(),q(),bn=class extends R(N){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},currency:{type:String,notify:!0},autodetect:{type:Boolean,value:!1,notify:!0},rates:{type:Object,notify:!0},width:{type:String,value:`70px`},cellClass:{type:String,value:`amount-cell`},headerCellClass:{type:String,value:`amount-header-cell`},align:{type:String,value:`right`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=W({...e,valuePath:`min`},t),r=W({...e,valuePath:`max`},t);if(n!=null||r!=null)return en(e,t)}getString(e,t){return an(e,t)}toXlsxValue(e,t){return an(e,t)}getComparableValue(e,t){return W(e,t)}serializeFilter({rates:e},t){if(t==null)return;let n=U(e,t.min),r=U(e,t.max);if(n!=null||r!=null)return on(n)+`~`+on(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:sn(n[1]),max:sn(n[2])}:null}renderCell(e,{item:t}){return y`<span>${e.getString(e,t)}</span>`}renderEditCell(e,{item:t},n){return y`<cosmoz-input
			type="number"
			@change=${r=>n({amount:r.target.value,currency:P(t,e.valuePath)?.currency})}
			.value=${ln(e,t)}
		>
			<div slot="suffix">${cn(e,t)}</div>
		</cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,rates:a,currency:o,autoupdate:s,autodetect:c,disabledFiltering:l,headerAlign:u,align:d},{filter:f},p,m){return y`<cosmoz-omnitable-amount-range-input
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
		></cosmoz-omnitable-amount-range-input>`}computeSource(e,t){return vn(e,t)}},customElements.define(`cosmoz-omnitable-column-amount`,bn)})))()}var Sn,Cn,wn,Tn,En,Dn,On,kn,An,jn,Mn,Nn;function Pn(){return(Pn=e((()=>{ie(),Ce(),ye(),M(),q(),Sn=(e,t)=>{if(!Array.isArray(e))return;let n=[];return e.reduce((e,t)=>Array.isArray(t)?(t.forEach(t=>{e.push(t)}),e):(e.push(t),e),[]).filter((e,r,i)=>{if(i.indexOf(e)!==r)return!1;if(t){let r=P(e,t);if(n.indexOf(r)!==-1)return!1;n.push(r)}return!0})},Cn=(e,t,n)=>{if(e==null)return[];if(Array.isArray(e)){let r=Sn(e,t);if(!r?.length)return[];let i=n??`label`,a=e=>String(typeof e==`object`&&e?P(e,i??``)??``:e??``);return r.sort((e,t)=>a(e).localeCompare(a(t)))}if(typeof e==`object`){let r=t??`id`,i=n??`label`;return Object.entries(e).map(([e,t])=>({[r]:e,[i]:t})).sort((e,t)=>String(e[i]??``).localeCompare(String(t[i]??``)))}return[]},wn=(e,t,n)=>me(t&&P(e,t)).map(O(n)),Tn=({valuePath:e,textProperty:t},n)=>wn(n,e,t).filter(e=>e!=null).join(`, `),En=Tn,Dn=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>a=>{let o=O(e),s=me(P(a,t));return i.some(t=>s.length===0&&O(r||e)(t)===n||s.some(e=>o(e)===o(t)))},On=e=>t=>e(e=>({...e,filter:t})),kn=e=>t=>e(e=>({...e,headerFocused:t})),An=e=>t=>e(e=>({...e,query:t})),jn=({emptyValue:e,emptyLabel:t,emptyProperty:n,textProperty:r,valueProperty:i},a)=>{let o=Cn(a,i,r);return!t||e===void 0||!r||!(n||i)||!o?o:[{[r]:t,[n||i]:e},...o]},Mn=(e,t)=>jn(e,_n(t,e.valuePath)),Nn=e=>class extends e{static get properties(){return{textProperty:{type:String},valueProperty:{type:String},emptyLabel:{type:String},emptyValue:{type:Object},emptyProperty:{type:String}}}getConfig(e){return{emptyProperty:e.emptyProperty}}getString(e,t){return Tn(e,t)}toXlsxValue(e,t){return En(e,t)}getComparableValue({valuePath:e,valueProperty:t},n){let r=P(n,e);return t==null?r:me(r).map(O(t)).sort().join(` `)}getFilterFn(e,t){if(t&&Array.isArray(t)&&t.length!==0)return Dn(e,t)}serializeFilter(e,t){return Array.isArray(t)&&t.length===0?null:JSON.stringify(t)}deserializeFilter(e,t){if(t==null)return null;try{return JSON.parse(decodeURIComponent(t))}catch(e){let n=e;return console.error(`Failed to deserialize filter value:`,{error:n?.name,message:n?.message,filterLength:typeof t==`string`?t.length:null}),null}}computeSource(e,t){return e.externalValues||typeof e.values==`function`?async(...t)=>jn(e,await Promise.resolve(Ee(e.values,...t))):Mn(e,t)}}})))()}var Fn,In,Ln;function Rn(){return(Rn=e((()=>{Se(),Je(),F(),t(),ie(),ye(),Pn(),z(),A(),M(),K(),Fn=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?de(t):O(n),a=me(e&&P(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},In=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>{let a=O(e),o=O(r||e),s=new Set(i.filter(e=>e.excluded).map(e=>a(e.item))),c=new Set(i.filter(e=>!e.excluded).map(e=>a(e.item))),l=i.some(e=>e.excluded&&o(e.item)===n),u=i.some(e=>!e.excluded&&o(e.item)===n);return e=>{let n=me(P(e,t)).map(a);return n.length===0?!l&&(u||c.size===0):!n.some(e=>s.has(e))&&(c.size===0||n.some(e=>c.has(e)))}},Ln=class extends Nn(R(N)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return y`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},n){return y`<cosmoz-input
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${L(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:n},r,i){return y`<cosmoz-autocomplete-excluding
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
			@opened-changed=${e=>kn(r)(e.detail.value)}
			@value-changed=${ge(On(r))}
			@text-changed=${ge(An(r))}
			>${k(e.loading,()=>y`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-excluding
		>`}getComparableValue(e,t){return Fn(e,t)}getFilterFn(e,t){if(t&&Array.isArray(t)&&t.length!==0)return In(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete-excluding`,Ln)})))()}var zn,Bn;function Vn(){return(Vn=e((()=>{Se(),Je(),F(),t(),ie(),ye(),Pn(),z(),M(),K(),zn=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?de(t):O(n),a=me(e&&P(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},Bn=class extends Nn(R(N)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return y`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},n){return y`<cosmoz-input
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${L(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:n},r,i){return y`<cosmoz-autocomplete-ui
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
			.onChange=${On(r)}
			@opened-changed=${e=>kn(r)(e.detail.value)}
			.onText=${An(r)}
			>${k(e.loading,()=>y`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}getComparableValue(e,t){return zn(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete`,Bn)})))()}var Hn,Un,Wn,Gn,Kn,qn,Jn,Yn,Xn,Zn,Qn,$n,er,tr;function nr(){return(nr=e((()=>{F(),z(),Se(),ft(),M(),t(),Hn=(e,t)=>t.find(({value:t})=>e===t),Un=(e,t,n)=>{let r=Hn(t,n);return r?r.text:e},Wn=(e,t,n,r)=>Un(e,P(t,n),r),Gn=({valuePath:e},t,n)=>Hn(P(t,e),n),Kn=e=>t=>{e(e=>({...e,filter:t?.[0]?.value??null}))},qn=e=>t=>{e(e=>({...e,headerFocused:t}))},Jn=e=>t=>{e(e=>({...e,query:t}))},Yn=e=>t=>e(t?.[0]?.value),Xn=({valuePath:e,trueLabel:t,falseLabel:n},r)=>P(r,e)?t:n,Zn=({valuePath:e},t)=>n=>P(n,e)===t,Qn=ht((e,t)=>[{text:e,value:!0},{text:t,value:!1}]),$n=({valuePath:e,trueLabel:t,falseLabel:n},r)=>e?P(r,e)?t:n:``,er=(e,t)=>{try{return JSON.parse(t)}catch{return null}},tr=class extends R(N){static get properties(){return{trueLabel:{type:String,value:`True`},falseLabel:{type:String,value:`False`},flex:{type:String,value:`0`},cellClass:{type:String,value:`boolean-cell`}}}getString(e,t){return Xn(e,t)}renderCell(e,{item:t}){return Xn(e,t)}renderEditCell(e,{item:t},n){let{trueLabel:r,falseLabel:i}=e;return y`<cosmoz-autocomplete
			variant="inline"
			.title=${Wn(e.title,t,e.valuePath,Qn(r,i))}
			.source=${Qn(r,i)}
			.textProperty=${`text`}
			.value=${Gn(e,t,Qn(r,i))}
			.onChange=${Yn(n)}
			.limit=${1}
			>${k(e.loading,()=>y`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete
		>`}renderHeader(e,{filter:t,query:n},r,i){return y`<cosmoz-autocomplete-ui
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
			>${k(e.loading,()=>y`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}computeSource({trueLabel:e,falseLabel:t}){return Qn(e,t)}getFilterFn(e,t){if(t!=null)return Zn(e,t)}toXlsxValue(e,t){return $n(e,t)}deserializeFilter(e,t){return er(e,t)}},customElements.define(`cosmoz-omnitable-column-boolean`,tr)})))()}var rr;function ir(){return(ir=e((()=>{qe(),Ht(),rr=e=>class extends Vt(e){static get properties(){return{max:{type:Date,value:null},min:{type:Date,value:null},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},formatter:{type:Object,computed:`_computeFormatter(locale)`}}}toDate(e,t,n){if(e==null||e===``)return;let r=e;if(r instanceof Date||(typeof e==`string`&&(r=this.getAbsoluteISOString(r)),r=new Date(r)),Number.isNaN(r.getTime()))return null;if(n==null||t==null)return r;let i=this.toDate(t);if(i==null)return r;let a=this.getComparableValue(r);return n(a,this.getComparableValue(i))===a?r:i}toValue(){return this.toDate.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n!=null)return this.toNumber(n.getTime())}getString(e,t=this.valuePath,n=this.formatter){let r=this.toValue(this.get(t,e));return r===void 0?``:r===null?`Invalid Date`:this.renderValue(r,n)}getAbsoluteISOString(e){return e.length===19?e+this._getTimezoneString(e):e}_getTimezoneString(e){let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`}renderValue(e,t=this.formatter){if(t==null)return;let n=this.toValue(e);if(n!=null)return t.format(n)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(0,10)}_dateValueChanged(e){let t=e.currentTarget.value,n=e.model.item,r=this.get(this.valuePath,n),i=this._fromInputString(t);this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toLocalISOString(e){return ze(e)}}})))()}var ar;function or(){return(or=e((()=>{p(),F(),D(),t(),ir(),zt(),B(),Wt(),ar=class extends rr(Ut(N)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return y`
			${k(this.disabled,()=>y`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>y`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Rt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:y`
							<h3>${this.title}</h3>
							<cosmoz-input
								type="date"
								label=${E(`From date`)}
								min=${this._toInputString(this._limit.fromMin)}
								max=${this._toInputString(this._limit.fromMax)}
								.value=${this._filterInput?.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-input>
							<cosmoz-input
								type="date"
								label=${E(`Until date`)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
								.value=${this._filterInput?.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-input>
						`})}
				`)}
		`}_fromInputString(e,t){let n=this.toDate(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n}_filterInputChanged(e,t){let n=e.path.split(`.`)[1]&&e.value;if(n&&n.match(/^0+/u)){this._limitInputDebouncer.cancel();return}super._filterInputChanged(e,t)}},customElements.define(`cosmoz-omnitable-date-range-input`,ar)})))()}var sr,cr,lr,J,Y,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr;function br(){return(br=e((()=>{qe(),M(),$t(),sr=e=>{let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`},cr=e=>e.length===19?e+sr(e):e,lr=e=>{if(e==null||e===``)return;let t=e;return!(t instanceof Date)&&(typeof e==`string`&&(t=cr(t)),t=Ge(t),!t)||Number.isNaN(t.getTime())?null:t},J=({valuePath:e},t)=>{if(t==null)return;let n=t;e!=null&&(n=P(t,e));let r=lr(n);if(r!=null)return V(r.getTime())},Y=(e,t,n)=>{let r=lr(e);if(r==null)return null;if(n==null||t==null)return r;let i=Y(t);if(i==null)return r;let a=J({},r),o=J({},i);return a==null||o==null||n(a,o)===a?r:i},ur=(e,t)=>{if(t==null)return;let n=Y(e);if(n!=null)return t.format(n)},dr={},fr=e=>{let t=e||``;return dr[t]||(dr[t]=new Intl.DateTimeFormat(e||void 0)),dr[t]},pr=({valuePath:e,locale:t},n)=>{let r=P(n,e||``);return r===void 0?``:(r=Y(r),r===null?`Invalid Date`:ur(r,fr(t)))},mr=e=>{let t=Y(e);if(t==null)return null;let n=ze(t);return n==null?null:n.slice(0,10)},hr=({valuePath:e},t)=>mr(P(t,e||``)),gr=(e,t)=>{let n=Y(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n},_r=e=>mr(e)??``,vr=({valuePath:e},t)=>{if(!e)return``;let n=Y(P(t,e));if(!n)return``;let r=Y(ze(n));return r?(r.setHours(0,0,0,0),r):``},yr=(e,t)=>n=>{let r=J(e,n);if(r==null)return!1;let i=J({...e,valuePath:`min`},t),a=J({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})))()}var xr;function Sr(){return(Sr=e((()=>{p(),F(),t(),z(),or(),q(),br(),I(),xr=class extends R(N){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`date-header-cell`},width:{type:String,value:`100px`},minWidth:{type:String,value:`82px`},flex:{type:String,value:`0`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=J({...e,valuePath:`min`},t),r=J({...e,valuePath:`max`},t);if(n!=null||r!=null)return yr(e,t)}getString(e,t){return pr(e,t)}toXlsxValue(e,t){return vr(e,t)}getComparableValue(e,t){return J(e,t)}serializeFilter(e,t){if(t==null)return;let n=Y(t.min),r=Y(t.max);if(n!=null||r!=null)return _r(n)+`~`+_r(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Y(n[1]),max:Y(n[2])}:null}renderCell(e,{item:t}){return y`<div class="omnitable-cell-date">
			${pr(e,t)}
		</div>`}renderEditCell(e,{item:t},n){return y`<cosmoz-input
			type="date"
			@change=${e=>n(gr(e.target.value))}
			.value=${hr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,disabledFiltering:a,headerAlign:o,align:s},{filter:c},l,u){return y`<cosmoz-omnitable-date-range-input
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
		></cosmoz-omnitable-date-range-input>`}computeSource(e,t){return vn(e,t)}},customElements.define(`cosmoz-omnitable-column-date`,xr)})))()}var Cr;function wr(){return(wr=e((()=>{F(),D(),t(),ir(),zt(),B(),Wt(),Cr=class extends rr(Ut(N)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return y`
			${k(this.disabled,()=>y`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>y`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Rt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:y`
							<h3>${this.title}</h3>
							<cosmoz-datetime-input
								date-label=${E(`From date`)}
								time-label=${E(`From time`)}
								min=${this._toInputString(this._limit.fromMin)}
								max=${this._toInputString(this._limit.fromMax)}
								step=${this.filterStep}
								.value=${this._filterInput?.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-datetime-input>
							<cosmoz-datetime-input
								date-label=${E(`To date`)}
								time-label=${E(`To time`)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
								step=${this.filterStep}
								.value=${this._filterInput?.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-datetime-input>
						`})}
				`)}
		`}_toInputString(e){let t=this.toValue(e);if(t!=null)return this._toLocalISOString(t).slice(0,19)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})}},customElements.define(`cosmoz-omnitable-datetime-range-input`,Cr)})))()}var Tr,Er,Dr,Or,kr,Ar;function jr(){return(jr=e((()=>{M(),br(),Tr={},Er=e=>{let t=e||``;return Tr[t]||(Tr[t]=new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})),Tr[t]},Dr=({valuePath:e,locale:t},n)=>{let r=Y(P(n,e||``));return r===void 0?``:r===null?`Invalid Date`:ur(r,Er(t))},Or=({valuePath:e},t)=>e?P(t,e):``,kr=e=>{let t=Y(e);return t==null?``:t.toISOString().slice(0,19).replace(/:/gu,`.`)},Ar=e=>{if(e!=null&&e!==``&&typeof e==`string`)return Y(e.replace(/\./gu,`:`)+`Z`)}})))()}var Mr;function Nr(){return(Nr=e((()=>{tt(),I(),F(),t(),z(),wr(),q(),br(),jr(),Mr=class extends R(N){static get is(){return`cosmoz-omnitable-column-datetime`}static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`datetime-header-cell`},width:{type:String,value:`210px`},minWidth:{type:String,value:`128px`},flex:{type:String,value:`0`},filterStep:{type:Number,value:1}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=J({...e,valuePath:`min`},t),r=J({...e,valuePath:`max`},t);if(n!=null||r!=null)return yr(e,t)}getString(e,t){return Dr(e,t)}toXlsxValue(e,t){return Or(e,t)}getComparableValue(e,t){return J(e,t)}serializeFilter(e,t){if(t==null)return;let n=Y(t.min),r=Y(t.max);if(n!=null||r!=null)return kr(n)+`~`+kr(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Ar(n[1]),max:Ar(n[2])}:null}renderCell(e,{item:t}){return Dr(e,t)}renderEditCell(e,{item:t},n){return y`<cosmoz-input
			type="text"
			@change=${e=>n(gr(e.target.value))}
			.value=${Dr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,filterStep:a,disabledFiltering:o,headerAlign:s,align:c},{filter:l},u,d){return y`<cosmoz-omnitable-datetime-range-input
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
		></cosmoz-omnitable-datetime-range-input>`}computeSource(e,t){return vn(e,t)}},customElements.define(Mr.is,Mr)})))()}var Pr;function Fr(){return(Fr=e((()=>{Se(),Je(),F(),t(),Pn(),z(),Pr=class extends Nn(R(N)){renderCell({valuePath:e,textProperty:t},{item:n}){let r=wn(n,e,t).map(e=>y`<li>${e}</li>`);return y`
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
		`}renderEditCell(){return`not implemented`}renderHeader(e,{filter:t,query:n},r,i){return y`<cosmoz-autocomplete-ui
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
			>${k(e.loading,()=>y`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		> `}},customElements.define(`cosmoz-omnitable-column-list-horizontal`,Pr)})))()}var Ir,Lr;function Rr(){return(Rr=e((()=>{be(),A(),D(),Ir=T`
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
`,Lr=({items:e})=>{let[t,n]=m(!1),r=Array.isArray(e)?e:[],i=b(()=>Math.max(0,r.length-1),[r]);if(r.length===0)return null;let a=r.length>2,o=r[0],s=a&&!t?[]:r.slice(1),c=e=>{e.stopPropagation(),e.preventDefault(),n(e=>!e)};return y`
		<ul>
			<li>
				<span>${o}</span>
			</li>
			<li class="see-more" ?hidden=${!a||t}>
				<a href="#" @click=${c}
					>${E(`and {0} more`,{0:i})}</a
				>
			</li>
			${s.map(e=>y`
					<li>
						<span class="item">${e}</span>
					</li>
				`)}
			<li class="see-less" ?hidden=${!a||!t}>
				<a href="#" @click=${c}>${E(`See less`)}</a>
			</li>
		</ul>
	`},customElements.define(`cosmoz-omnitable-column-list-data`,j(Lr,{styleSheets:[pe(Ir)]}))})))()}var zr;function Br(){return(Br=e((()=>{Rr(),F(),t(),Se(),Pn(),z(),K(),zr=class extends Nn(R(N)){static get properties(){return{keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,textual:e.textual}}renderCell({valuePath:e,textProperty:t},{item:n}){return y`<cosmoz-omnitable-column-list-data
			.items=${wn(n,e,t)}
		></cosmoz-omnitable-column-list-data>`}renderEditCell(e,{item:t},n){return y`<cosmoz-input
			type="text"
			.value=${Tn(e,t)}
			@change=${e=>n(e.target.value.split(/,\s*/gu))}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:n},r,i){return y`<cosmoz-autocomplete-ui
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
			.onChange=${On(r)}
			@opened-changed=${e=>kn(r)(e.detail.value)}
			.onText=${An(r)}
			>${k(e.loading,()=>y`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}},customElements.define(`cosmoz-omnitable-column-list`,zr)})))()}var Vr;function Hr(){return(Hr=e((()=>{p(),F(),D(),t(),zt(),B(),Ht(),Wt(),Vr=class extends Vt(Ut(N)){static get properties(){return{maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},formatter:{type:Object,computed:`_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)`},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},headerFocused:{type:Boolean,value:!1}}}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return y`
			${k(this.disabled,()=>y`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>y`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Rt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:y`
							<h3>${this.title}</h3>
							<cosmoz-input
								class=${this._fromClasses}
								type="number"
								label=${E(`From`)}
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
								label=${E(`To`)}
								.value=${this._filterInput?.max}
								@value-changed=${e=>{this.set(`_filterInput.max`,e.detail.value)}}
								@blur=${e=>this._onBlur(e)}
								@keydown=${e=>this._onKeyDown(e)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
							></cosmoz-input>
						`})}
				`)}
		`}_computeFormatter(e,t,n){let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}getComparableValue(e,t){if(e==null)return;let n=e;if(t!=null&&(n=this.get(t,e)),n=this.toValue(n),n==null)return;let r=this.maximumFractionDigits;return r===null?n:this.toValue(n.toFixed(r))}renderValue(e,t=this.formatter){let n=this.toNumber(e);if(n!=null)return t.format(n)}},customElements.define(`cosmoz-omnitable-number-range-input`,Vr)})))()}var Ur;function Wr(){return(Wr=e((()=>{p(),I(),F(),t(),z(),M(),Hr(),q(),$t(),Ur=class extends R(N){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},cellClass:{type:String,value:`number-cell`},width:{type:String,value:`30px`},minWidth:{type:String,value:`30px`},headerCellClass:{type:String,value:`number-header-cell`},maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},align:{type:String,value:`right`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=H({...e,valuePath:`min`},t),r=H({...e,valuePath:`max`},t);if(n!=null||r!=null)return Qt(e,t)}getString(e,t){return Zt(e,t)}toXlsxValue({valuePath:e},t){return P(t,e)}getComparableValue(e,t){return H(e,t)}serializeFilter(e,t){if(t==null)return;let n=V(t.min),r=V(t.max);if(n!=null||r!=null)return Yt(n)+`~`+Yt(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:V(n[1]),max:V(n[2])}:null}renderCell(e,{item:t}){return y`<div class="omnitable-cell-number">
			${Zt(e,t)}
		</div>`}renderEditCell(e,{item:t},n){return y`<cosmoz-input
			type="number"
			@change=${e=>n(e.target.value)}
			.value=${Jt(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,maximumFractionDigits:a,minimumFractionDigits:o,autoupdate:s,disabledFiltering:c,headerAlign:l,align:u},{filter:d},f,p){return y`<cosmoz-omnitable-number-range-input
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
		></cosmoz-omnitable-number-range-input>`}computeSource(e,t){return vn(e,t)}},customElements.define(`cosmoz-omnitable-column-number`,Ur)})))()}var Gr;function Kr(){return(Kr=e((()=>{p(),F(),D(),t(),ir(),zt(),B(),Wt(),Gr=class extends rr(Ut(N)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return y`
			${k(this.disabled,()=>y`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>y`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Rt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:y`
							<h3>${this.title}</h3>
							<cosmoz-input
								type="time"
								label=${E(`From time`)}
								step=${this.filterStep}
								.value=${this._filterInput.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-input>
							<cosmoz-input
								type="time"
								label=${E(`Until time`)}
								step=${this.filterStep}
								.value=${this._filterInput.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-input>
						`})}
				`)}
		`}get _fixedDate(){return`1970-01-01`}toDate(e,t,n){let r=typeof e==`string`&&e.length>3&&e.length<=9?this.getAbsoluteISOString(this._fixedDate+`T`+e):e;return super.toDate(r,t,n)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(11,19)}getComparableValue(e,t){if(e==null)return;let n=this._toInputString(t==null?e:this.get(t,e));if(n!=null&&(n=this.toValue(this.getAbsoluteISOString(this._fixedDate+`T`+n)),n!=null))return this.toNumber(n.getTime())}_timeValueChanged(e){let t=e.target.value,n=e.model.item,r=this.toDate(n.date),i=this.toDate(r==null?t:r.toISOString().slice(0,10)+`T`+t);i??(this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,(e=>e).bind(this)))}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})}},customElements.define(`cosmoz-omnitable-time-range-input`,Gr)})))()}var X,qr,Jr,Yr,Xr,Zr,Z,Qr,$r,ei;function ti(){return(ti=e((()=>{qe(),M(),br(),$t(),X=(e,t,n)=>{let r=typeof e==`string`&&e.length>3&&e.length<=9?cr(`1970-01-01T`+e):e;return Y(r,t,n)},qr={},Jr=e=>{let t=e||``;return qr[t]||(qr[t]=new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})),qr[t]},Yr=({valuePath:e,locale:t},n)=>{let r=X(P(n,e||``));return r===void 0?``:r===null?`Invalid Date`:ur(r,Jr(t))},Xr=(e,t)=>e.valuePath?Yr(e,t):``,Zr=e=>{let t=X(e);if(t==null)return null;let n=ze(t);return n&&n.slice(11,19)},Z=({valuePath:e},t)=>{if(t==null)return;let n=Zr(e==null?t:P(t,e));if(n==null)return;let r=X(cr(`1970-01-01T`+n));return r==null?r:V(r.getTime())},Qr=(e,t)=>n=>{let r=Z(e,n);if(r==null)return!1;let i=Z({...e,valuePath:`min`},t),a=Z({...e,valuePath:`max`},t);return i==null||a==null?!1:!(r<i||r>a)},$r=e=>{let t=X(e);return t==null?``:t.toISOString().slice(11,19).replace(/:/gu,`.`)},ei=e=>{if(e!=null&&e!==``)return X(typeof e==`string`?e.replace(/\./gu,`:`)+`Z`:e)}})))()}var ni;function ri(){return(ri=e((()=>{p(),I(),F(),t(),z(),Kr(),q(),ti(),ni=class extends R(N){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`time-header-cell`},minWidth:{type:String,value:`63px`},width:{type:String,value:`210px`},flex:{type:String,value:`0`},filterStep:{type:String,value:`1`}}}getFilterFn(e,t){let n=Z({...e,valuePath:`min`},t),r=Z({...e,valuePath:`max`},t);if(n!=null||r!=null)return Qr(e,t)}getString(e,t){return Yr(e,t)}toXlsxValue(e,t){return Xr(e,t)}getComparableValue(e,t){return Z(e,t)}serializeFilter(e,t){if(t==null)return;let n=X(t.min),r=X(t.max);if(n!=null||r!=null)return $r(n)+`~`+$r(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:ei(n[1]),max:ei(n[2])}:null}renderCell(e,{item:t}){return Yr(e,t)}renderEditCell(e,{item:t},n){return y`<cosmoz-input
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${Yr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,locale:r,filterStep:i,disabledFiltering:a,headerAlign:o,align:s},{filter:c},l,u){return y`<cosmoz-omnitable-time-range-input
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
		></cosmoz-omnitable-time-range-input>`}computeSource(e,t){return vn(e,t)}},customElements.define(`cosmoz-omnitable-column-time`,ni)})))()}function ii(){return(ii=e((()=>{xn(),Rn(),Vn(),nr(),Sr(),Nr(),Fr(),Br(),Wr(),ri()})))()}var ai;function oi(){return(oi=e((()=>{A(),t(),ai=({column:e,item:t,selected:n,folded:r,group:i})=>{if(!e)return w;let a=e.renderGroup??e.renderCell;return a?a(e,{item:t,selected:n,folded:r,group:i}):w},customElements.define(`cosmoz-omnitable-group-row`,j(ai,{useShadowDOM:!1}))})))()}var si;function ci(){return(ci=e((()=>{A(),t(),si=e=>{let{column:t}=e;return l(()=>{let n=0,r=0,i=i=>{e.dispatchEvent(new CustomEvent(`column-resize`,{bubbles:!0,composed:!0,detail:{newWidth:Math.ceil(r+i.pageX-n),column:t}}))},a=()=>{document.removeEventListener(`pointermove`,i),document.removeEventListener(`pointerup`,a)},o=t=>{n=t.pageX,r=e.previousElementSibling.getBoundingClientRect().width,document.addEventListener(`pointermove`,i),document.addEventListener(`pointerup`,a)};return e.addEventListener(`pointerdown`,o),()=>e.removeEventListener(`pointerdown`,o)},[t]),w},customElements.define(`cosmoz-omnitable-resize-nub`,j(si))})))()}var li,ui,di,fi;function pi(){return(pi=e((()=>{Ke(),A(),se(),c(),li=({column:e,on:t,descending:n,setOn:r,setDescending:i})=>{let{name:a,title:o}=e??{};return y`<cosmoz-button
		variant="tertiary"
		class="sg"
		title=${_e(o)}
		data-on=${_e(a===t&&(n?`desc`:`asc`)||void 0)}
		@click=${e=>{let t=e.currentTarget?.dataset.on;t||(r(a),i(!1)),t===`asc`?i(!0):t===`desc`&&(r(),i(!1))}}
	>
		<span>${o}</span> ${a===t?he({width:`12`,height:`12`}):ve({width:`12`,height:`12`})}
	</cosmoz-button>`},ui=({columns:e,...t})=>e?.map(e=>li({column:e,...t})),di=()=>y`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,groupOn:t,setGroupOn:n,groupOnDescending:r,setGroupOnDescending:i}={})=>ui({columns:e?.filter?.(e=>e.groupOn),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`,fi=()=>y`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,sortOn:t,setSortOn:n,descending:r,setDescending:i}={})=>ui({columns:e?.filter?.(e=>e.sortOn&&!e.noSort),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`})))()}function mi(e,t,{suffix:n=``,read:r,write:i,ready:a=!0,multi:o}={}){let s=ue({param:t,suffix:n,link:o?vi:_i,write:i??re}),c=b(()=>{if(t==null)return!1;if(o){let e=Qe(t+n);return Object.keys(e).length>0}return et(t+n)!==void 0},[]),[u,f]=m(()=>{if(t==null)return e;if(o){let i=Qe(t+n,r);return Object.keys(i).length>0?i:e}return et(t+n,r)??e}),p=d(e=>f(t=>{let n=Ee(e,t);return s.param!=null&&nt(s.link(s.param+s.suffix,n,s.write),null,{notify:!1}),n}),[]);return l(()=>{s.param!=null&&a&&!c&&e!=null&&p(e)},[a]),[u,p]}var hi,gi,_i,vi;function yi(){return(yi=e((()=>{st(),Ce(),ce(),dt(),A(),hi=e=>(t,n,r=re)=>{let i=it(),a=new URLSearchParams(i.hash.replace(`#`,``));return e(t,n,r,a),`#!`+Object.assign(i,{hash:a}).href.replace(location.origin,``)},gi=e=>e==null||e===``,_i=hi((e,t,n,r)=>gi(n(t))?r.delete(e):r.set(e,n(t))),vi=hi((e,t,n,r)=>{let i=Object.entries(t),a=i.map(n).filter(([,e])=>e!==void 0);if(a.length===0&&i.length>0)return;let o=e;Array.from(r.keys()).filter(e=>e.startsWith(o)).forEach(e=>r.delete(e)),a.forEach(([t,n])=>gi(n)?r.delete(e+t):r.set(e+t,n))})})))()}var bi,xi,Si,Ci,wi;function Ti(){return(Ti=e((()=>{A(),yi(),bi=e=>[!0,`true`,1,`yes`,`on`].includes(e),xi=e=>e===``||(e==null?void 0:bi(e)),Si=(e,t,n)=>d(r=>{e(r),n(e=>({...e,[t]:r}))},[e,t,n]),Ci=(e,t,{settings:n,setSettings:r,resetRef:i,ready:a=!0})=>{let[o,s]=mi(n.sortOn,t,{suffix:`-sortOn`,ready:a}),[c,u]=mi(xi(n.descending),t,{suffix:`-descending`,read:xi,ready:a}),[f,p]=mi(n.groupOn,t,{suffix:`-groupOn`,ready:a}),[m,h]=mi(xi(n.groupOnDescending),t,{suffix:`-groupOnDescending`,read:xi,ready:a}),g=b(()=>e.find(e=>e.name===o),[e,o]),_=b(()=>e.find(e=>e.name===f),[e,f]),v={groupOn:f,setGroupOn:Si(p,`groupOn`,r),groupOnDescending:m,setGroupOnDescending:Si(h,`groupOnDescending`,r),sortOn:o,setSortOn:Si(s,`sortOn`,r),descending:c,setDescending:Si(u,`descending`,r),columns:e},y=b(()=>v,Object.values(v)),x=d(e=>{s(typeof e.sortOn==`string`?e.sortOn:void 0),p(typeof e.groupOn==`string`?e.groupOn:void 0),u(typeof e.descending==`boolean`?e.descending:void 0),h(typeof e.groupOnDescending==`boolean`?e.groupOnDescending:void 0)},[]);return l(()=>void(i.current=x),[]),{...y,sortAndGroup:y,groupOnColumn:_,sortOnColumn:g}},wi=oe(void 0),customElements.define(`sort-and-group-provider`,wi.Provider),customElements.define(`sort-and-group-consumer`,j(({render:e})=>e(r(wi)),{useShadowDOM:!1}))})))()}var Ei,Di;function Oi(){return(Oi=e((()=>{A(),we(),ci(),pi(),Ti(),Ei=({data:e,columns:t,groupOnColumn:n,filters:r,setFilterState:a,sortAndGroup:{sortOn:o,setSortOn:s,descending:c,setDescending:l}={}})=>i(t,e=>e.name,t=>[y`<div
				class="cell ${t.headerCellClass} header-cell"
				align="${t.headerAlign??t.align??`left`}"
				part="cell header-cell cell-${t.name} header-cell-${t.name}"
				?hidden="${t===n}"
				title="${t.headerTitleFn(t)}"
				name="${t.name}"
			>
				${t.renderHeader(t,r[t.name]??{},e=>a(t.name,e),t.source(t,e))}
				${k(!t.noSort,()=>li({on:o,setOn:s,descending:c,setDescending:l,column:t}))}
			</div>`,y`<cosmoz-omnitable-resize-nub
				.column="${t}"
				name="${t.name}"
			></cosmoz-omnitable-resize-nub>`]),Di=({columns:e,settingsConfig:t,hideSelectAll:n,...i})=>{let a=r(wi);return y`
		${k(e,e=>Ei({columns:e,sortAndGroup:a,...i}))}
		${k(!n,()=>y` <cosmoz-omnitable-settings
					.config=${t}
					part="settings"
				></cosmoz-omnitable-settings>`)}
	`},customElements.define(`cosmoz-omnitable-header-row`,j(Di,{useShadowDOM:!1}))})))()}var ki,Ai;function ji(){return(ji=e((()=>{be(),A(),ki=T`
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
`,Ai=({column:e})=>y`
	<div class="label" title="${e.title}" part="item-expand-label">
		${e.title}
	</div>
	<div class="value" part="item-expand-value">
		<slot></slot>
	</div>
`,customElements.define(`cosmoz-omnitable-item-expand-line`,j(Ai,{styleSheets:[pe(ki)]}))})))()}var Mi;function Ni(){return(Ni=e((()=>{A(),t(),ji(),Mi=({columns:e,item:t,selected:n,expanded:r,groupOnColumn:i})=>Ze(e,e=>y`<cosmoz-omnitable-item-expand-line
				.column=${e}
				?hidden=${e===i}
				exportparts="item-expand-label, item-expand-value"
				>${e.renderCell(e,{item:t,selected:n,expanded:r})}</cosmoz-omnitable-item-expand-line
			>`),customElements.define(`cosmoz-omnitable-item-expand`,j(Mi,{useShadowDOM:!1}))})))()}var Pi,Fi;function Ii(){return(Ii=e((()=>{A(),we(),Pi=(e,t,n)=>e.editable?e.renderEditCell(e,t,n(e,t.item)):e.renderCell(e,t),Fi=({columns:e,groupOnColumn:t,item:n,index:r,selected:a,expanded:o,onItemChange:s})=>i(e,e=>e.name,e=>y`<div
				class="cell itemRow-cell ${e.cellClass??``}"
				align="${e.align??`left`}"
				part="cell itemRow-cell cell-${e.name} itemRow-cell-${e.name}"
				?hidden="${e===t}"
				?editable="${e.editable}"
				title="${e.cellTitleFn(e,n)}"
				name="${e.name}"
			>
				${Pi(e,{item:n,index:r,selected:a,expanded:o},s)}
			</div>`),customElements.define(`cosmoz-omnitable-item-row`,j(Fi,{useShadowDOM:!1}))})))()}var Li,Ri;function zi(){return(zi=e((()=>{be(),Li=T`
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
`,Ri=T`
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

	${Li}

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
`})))()}var Bi,Vi;function Hi(){return(Hi=e((()=>{Ye(),Bi=e=>{let t=e.replace(/"/gu,`""`);return t.search(/("|,|\n)/gu)>=0?`"`+t+`"`:e},Vi=(e,t,n)=>{let r=e.map(e=>Bi(e.title)).join(`;`)+`
`,i=t.map(t=>e.map(e=>{let n=e.getString(e,t);return n==null?``:Bi(String(n))}).join(`;`)+`
`);i.unshift(r),ot(new File(i,n,{type:`text/csv;charset=utf-8`}))}})))()}var Ui,Wi;function Gi(){return(Gi=e((()=>{at(),Ye(),Ui=(e,t)=>{let n=e.map(e=>e.title),r=t.map(t=>e.map(e=>e.toXlsxValue(e,t)??``));return r.unshift(n),r},Wi=(e,t,n,r)=>{let i=Ui(e,t),a=new lt(n).addSheetFromData(i,r).generate();ot(new File([a],n,{type:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`}))}})))()}var Ki,Q,qi;function $(){return($=e((()=>{Ki=Symbol(`index`),Q=Symbol(`All`),qi=(e,t)=>{if(typeof e.findLastIndex==`function`)return e.findLastIndex(t);for(let n=e.length-1;n>=0;n--)if(t(e[n],n,e))return n;return-1}})))()}var Ji;function Yi(){return(Yi=e((()=>{Ie(),c(),D(),t(),Hi(),Gi(),$(),Ji=({columns:e,selectedItems:t,setSelectedItems:n,csvFilename:r,xlsxFilename:i,xlsxSheetname:a,topPlacement:o,enableSelectAll:s,allSelected:c,allItemsCount:l})=>{let u=t===Q,d=u||t.length>0,f=t!==Q&&s&&c,p=t=>y`<cosmoz-dropdown-menu
			part="extra"
			slot="extra"
			.placement=${o}
		>
			${v({slot:`button`})}
			<cosmoz-button
				variant="tertiary"
				@click=${()=>Vi(e,t,r)}
			>
				${E(`Save selected items as CSV`)}
			</cosmoz-button>
			<cosmoz-button
				variant="tertiary"
				@click=${()=>Wi(e,t,i,a)}
			>
				${E(`Save selected items as XLSX`)}
			</cosmoz-button>
			<slot name="download-menu"></slot
		></cosmoz-dropdown-menu>`,m=k(u,()=>l===void 0?E(`All items selected`):E(`All {count} items selected`,{count:l}),()=>E(`{count} selected item`,{count:t===Q?0:t.length}));return y`<cosmoz-bottom-bar
		id="bottomBar"
		?active=${d}
		part="bottomBar"
		exportparts="bar: bottomBar-bar, info: bottomBar-info, buttons: bottomBar-buttons"
	>
		<slot name="info" slot="info">
			${m}
			${k(f,()=>y`&nbsp;<span
							part="select-all-items"
							class="selectAllItems"
							role="button"
							tabindex="0"
							style="cursor: pointer; color: white;"
							@click=${()=>n(Q)}
						>
							${E(`Select all items`)}
						</span>`)}
		</slot>
		<slot name="actions" id="actions"></slot>
		<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
		<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
		${k(t!==Q,()=>p(t))}
	</cosmoz-bottom-bar>`}})))()}var Xi;function Zi(){return(Zi=e((()=>{t(),Xi=({allSelected:e,onAllCheckboxChange:t,sortAndGroup:n,dataIsValid:r,data:i,columns:a,filters:o,groupOnColumn:s,setFilterState:c,settingsConfig:l,hideSelectAll:u})=>y`<sort-and-group-provider .value=${n}>
		<div class="header" id="header" part="header">
			${k(!u,()=>y`<input
						class="checkbox all"
						type="checkbox"
						.checked=${e}
						@input=${t}
						?disabled=${!r}
						part="all"
					/>`)}
			${k(u,()=>y` <cosmoz-omnitable-settings
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
	</sort-and-group-provider>`})))()}var Qi,$i;function ea(){return(ea=e((()=>{A(),Qi=S`
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
`,$i=({settingsConfig:e})=>{let{columns:t,collapsed:n}=e,r=t.filter(e=>!n.some(t=>t.name===e.name));return y`<div class="skeleton">
		${Array.from({length:5},()=>y`<div>
					<div class="checkbox"></div>
					${r.map(e=>y`<div
								class="cell"
								part=${`cell-${e.name}`}
								name=${e.name}
							></div>`)}
				</div>`)}
	</div>`},customElements.define(`cosmoz-omnitable-skeleton`,j($i,{styleSheets:[Qi]}))})))()}var ta;function na(){return(na=e((()=>{A(),ea(),Pe(),D(),t(),ta=(e,t)=>{let{settingsConfig:n}=e,{processedItems:r,dataIsValid:i,filterIsTooStrict:a,loading:o,displayEmptyGroups:s,compareItemsFn:c,selectedItems:l,setSelectedItems:u,renderItem:d,renderGroup:f,error:p}=t;return y`${k(!o&&!i&&!p,()=>y`<div class="tableContent-empty">
					<slot name="empty-set-message">
						${ct({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
						<div class="tableContent-empty-message">
							<h3>${E(`Working set empty`)}</h3>
							<p>${E(`No data to display`)}</p>
						</div>
					</slot>
				</div>`)}
		${k(a,()=>y`<div class="tableContent-empty">
					${ct({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
					<div>
						<h3>${E(`Filter too strict`)}</h3>
						<p>${E(`No matches for selection`)}</p>
					</div>
				</div>`)}
		${k(o&&!r.length,()=>y`<div class="tableContent-empty overlay">
					<cosmoz-omnitable-skeleton
						.settingsConfig=${n}
					></cosmoz-omnitable-skeleton>
				</div>`)}
		${k(o&&r.length,()=>y`<div class="tableContent-empty overlay spinner">
					<cz-spinner></cz-spinner>
				</div>`)}
		${k(p,()=>y`<div class="tableContent-empty overlay">
					${Ue({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
					<div class="tableContent-empty-message">
						<h3>${E(`Error loading data`)}</h3>
						<p>${p.message}</p>
					</div>
				</div>`)}
		<div class="tableContent-scroller" id="scroller" part="scroller">
			<cosmoz-grouped-list
				id="groupedList"
				.data=${r}
				.selectedItems=${l}
				@selected-items-changed=${ge(u)}
				.displayEmptyGroups=${s}
				.compareItemsFn=${c}
				.renderItem=${d}
				.renderGroup=${f}
			></cosmoz-grouped-list>
			<slot name="extraContent"></slot>
		</div>`}})))()}var ra,ia;function aa(){return(aa=e((()=>{be(),zi(),ra=T`
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
	${Li}
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
`,ia=T`
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
`})))()}var oa,sa;function ca(){return(ca=e((()=>{ce(),A(),oa=e=>{let t=parseInt(e??``,10);return isFinite(t)?t:void 0},sa=e=>{let{config:t}=e,{settings:n,setSettings:r,collapsed:i,requestTween:a}=t,o=ue({collapsed:i,settings:n.columns,requestTween:a,setSettings:d(e=>r(t=>({...t,columns:e})),[r])});return{...t,onDown:d(e=>{let t=e.target instanceof Element?e.target:null;t&&t.closest(`.pull`)&&(o.handle=e.currentTarget instanceof HTMLElement?e.currentTarget:null)},[o]),onDragStart:d(e=>{let t=e.target instanceof HTMLElement?e.target:null,n=oa(t?.dataset.index);if(!t||!o.handle?.contains(t)||n==null)return e.preventDefault();o.handle=null,e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`omnitable/sort-index`,String(n)),e.dataTransfer.setData(`text/plain`,String(n)),setTimeout(()=>t.classList.add(`drag`),0),t.addEventListener(`dragend`,e=>{(e.target instanceof HTMLElement?e.target:null)?.classList.remove(`drag`)},{once:!0})},[o]),onDragEnter:d(e=>{let t=e.currentTarget instanceof HTMLElement?e.currentTarget:null;t&&t===e.target&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`,t.classList.add(`dragover`))},[]),onDragOver:d(e=>{e.preventDefault(),e.currentTarget instanceof HTMLElement&&e.currentTarget.classList.add(`dragover`)},[]),onDragLeave:d(e=>{let t=e.currentTarget instanceof HTMLElement?e.currentTarget:null;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||t.classList.remove(`dragover`))},[]),onDrop:d(e=>{let t=oa(e.dataTransfer?.getData(`omnitable/sort-index`)),n=e.currentTarget instanceof HTMLElement?e.currentTarget:null,r=oa(n?.dataset.index),{settings:i,setSettings:a,requestTween:s}=o;n?.classList.remove(`dragover`),e.preventDefault();let c=i.slice();c.splice(r+(t>=r?0:-1),0,c.splice(t,1)[0]),s?.(),a(c)},[o]),onToggle:d(e=>{let{settings:t,setSettings:n,requestTween:r}=o,i=t.map(e=>({...e,disabled:e.disabled||o.collapsed?.some(t=>t.name===e.name)})),a=e.target instanceof HTMLInputElement?e.target:null,s=oa((e.target instanceof Element?e.target:null)?.closest(`[data-index]`)?.getAttribute(`data-index`));s!=null&&(i.splice(s,1,{...t[s],disabled:!a?.checked,priority:a?.checked?t.reduce((e,t)=>Math.max(e,t.priority??0),0)+1:t[s]?.priority}),r?.(),n(i))},[o])}}})))()}var la,ua,da,fa;function pa(){return(pa=e((()=>{Ke(),ut(),gt(),c(),be(),Oe(),A(),D(),pi(),aa(),ca(),la=[We({apply({availableHeight:e,elements:t}){Object.assign(t.floating.style,{maxHeight:`${Math.max(0,e)}px`})}}),...Be],ua=({onDragStart:e,onDragEnter:t,onDragOver:n,onDragLeave:r,onDrop:i,onDown:a,onToggle:o,collapsed:s,filters:c})=>(l,u)=>{let d=!!s?.find(e=>e.name===l.name),f=!l.disabled&&!d;return y` <div
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
				aria-label=${E(`Reorder column`)}
				variant="tertiary"
				icon-only
				class="pull"
				>${ee({width:`16`,height:`16`})}</cosmoz-button
			>
			<label class="title" ?has-filter=${!$e(c[l.name]?.filter)}
				>${l.title}</label
			>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${f}
				@click=${o}
				.indeterminate=${d}
			/>
		</div>`},da=e=>{let{settings:t,settingsId:n,onSave:r,onReset:i,hasChanges:a,canReset:o,opened:s,setOpened:c,...l}=sa(e);return y` <div class="headline">
			<span> ${E(`Sort and filter`)} </span>
			<cosmoz-button
				variant="tertiary"
				aria-label="${E(`Close settings`)}"
				@click=${e=>{let t=e.currentTarget instanceof HTMLElement?e.currentTarget:null;t?.focus(),t?.blur()}}
			>
				${xe({width:`16`,height:`16`})}
			</cosmoz-button>
		</div>

		<div class="contents">
			<div
				class="heading"
				?data-opened=${s.columns}
				@click=${()=>c(e=>({...e,columns:!e.columns}))}
				part="columns columns-heading"
			>
				${E(`Columns`)} ${he({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse
				?opened="${s.columns}"
				part="columns columns-content"
			>
				<div class="list">${t.columns?.map(ua(l))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${s.sort}
				@click=${()=>c(e=>({...e,sort:!e.sort}))}
			>
				${E(`Sort on`)} ${he({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse ?opened=${s.sort}> ${fi()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${s.group}
				@click=${()=>c(e=>({...e,group:!e.group}))}
				part="groups groups-heading"
			>
				${E(`Group on`)} ${he({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse ?opened=${s.group} part="groups groups-heading"
				>${di()}</cosmoz-collapse
			>
		</div>

		${k(n,()=>y`<div class="buttons">
					<cosmoz-button
						variant="tertiary"
						@click=${i}
						?disabled=${!o}
					>
						${E(`Reset`)}
					</cosmoz-button>
					<cosmoz-button
						variant="primary"
						@click=${r}
						?disabled=${!a}
					>
						${E(`Save`)}
					</cosmoz-button>
				</div>`)}`},customElements.define(`cosmoz-omnitable-settings-ui`,j(da,{styleSheets:[pe(ra)]})),fa=({config:e,newLayout:t})=>y`
	<cosmoz-dropdown
		.placement="${t?`bottom-start`:`bottom-end`}"
		.middleware="${la}"
	>
		<div title="${E(`Sort and filter`)}" slot="button">
			${k(t,()=>y`<div class="headerDots">...</div>`,()=>y` ${le({width:`20`,height:`20`,styles:`color: var(--cz-color-text-primary)`})}`)}
			${k(e?.badge,()=>y`<div class="badge"></div>`)}
		</div>
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${e}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`,customElements.define(`cosmoz-omnitable-settings`,j(fa,{styleSheets:[pe(ia)]}))})))()}var ma,ha,ga,_a,va;function ya(){return(ya=e((()=>{ye(),ma=[`sortOn`,`descending`,`groupOn`,`groupOnDescending`],ha=e=>t=>typeof t==`object`&&!!t&&`name`in t&&t.name===e,ga=(e=[],t=[],n=[])=>{let r=t.filter(t=>e.some(ha(t.name))),i=e.filter(e=>e.name!=null&&!t.some(ha(e.name))&&!n.some(ha(e.name))),a=n.filter(e=>!t.some(ha(e.name)));return[...r,...a.flatMap(t=>{let n=e.find(e=>e.name===t.name);return n?{...t,title:n.title??t.title??``,minWidth:parseInt(n.minWidth??`0`,10)}:[]}),...i.map(e=>{let{name:t,title:n,priority:r,minWidth:i,width:a,flex:o}=e;return{name:t??``,title:n??``,priority:r??0,minWidth:parseInt(i??`0`,10),width:parseInt(a??`0`,10),flex:parseInt(o??`0`,10)}})]},_a=(e,t)=>({...t,...fe(Array.from(ma))(e),columns:e.columns?.map(fe([`name`,`priority`,`width`,`flex`,`disabled`]))??t?.columns}),va=({columns:e,settings:t,savedSettings:n,initial:r})=>({...Object.fromEntries(ma.flatMap(e=>r?.[e]==null?[]:[[e,r[e]]])),...n?fe(Array.from(ma))(n):{},...t,columns:ga(e,t?.columns,n?.columns)})})))()}var ba;function xa(){return(xa=e((()=>{ba=({prefix:e=`omnitable-`}={})=>({write:async(t,n)=>{let r=e+t;try{n?localStorage.setItem(r,JSON.stringify(n)):localStorage.removeItem(r)}catch(e){console.error(e)}},read:async t=>{if(!t)return null;try{let n=localStorage.getItem(e+t);return n==null?null:JSON.parse(n)}catch(e){return console.error(e),null}}})})))()}var Sa,Ca;function wa(){return(wa=e((()=>{A(),xa(),Sa=oe(ba),Ca=()=>{let e=r(Sa);return b(()=>e(),[e])}})))()}function Ta(){return(Ta=e((()=>{wa()})))()}var Ea;function Da(){return(Da=e((()=>{A(),Ta(),ya(),Ea=(e,t,n,r)=>{let[i,a]=m(e?void 0:null),{read:o,write:s}=Ca();return l(async()=>{e&&a(await o(e))},[e,o]),{settingsId:e,savedSettings:i,onSave:d(async()=>{if(!e)return;let r=_a(t,i);await s(e,r),n(),a(r)},[t,i]),onReset:d(async()=>{n(),e&&i!=null&&(await s(e),a(null)),r?.()},[e,i,s,r]),hasChanges:t!=null,canReset:t!=null||i!=null}}})))()}var Oa;function ka(){return(ka=e((()=>{A(),K(),ya(),Da(),Oa=({settingsId:e,host:t})=>{let n=b(()=>Object.fromEntries(ma.map(e=>[e,t[e]])),[]),r=o(),i=d(()=>{r.current?.(n)},[n]),[a,s]=m(),[c,l]=m({columns:!0,sort:!0}),{savedSettings:u,...f}=Ea(e,a,s,i),{enabledColumns:p,disabledFiltering:h}=t,g=gn(t,{enabledColumns:p,disabledFiltering:h}),_=b(()=>va({columns:g,settings:a,savedSettings:u??void 0,initial:n}),[g,a,u]),v=b(()=>_.columns.map(e=>g.find(t=>t.name===e.name)).filter(e=>e!==void 0),[g,..._.columns.map(e=>e.name)]);return{...f,savedSettings:u,opened:c,setOpened:l,settings:_,columns:v,setSettings:s,resetRef:r}}})))()}function Aa(){return(Aa=e((()=>{pa(),ka()})))()}var ja,Ma;function Na(){return(Na=e((()=>{ja=e=>Number.isFinite(e)?e:0,Ma=(e,t)=>{let n=[],[r,i]=e.reduce(([e,t],{width:n,flex:r})=>[e+n,t+r],[0,0]),a=t-r,o=ja(a/i),s=0,c=0,l=0;for(let t=0;t<e.length;t++){let{width:i,minWidth:u,flex:d}=e[t];if(u>i+(a>=0?o*d:i*a/r)){s+=i,c+=u,l+=d,n[t]=u;continue}if(d===0){s+=i,c+=i,n[t]=i;continue}}r-=s,a=t-c-r,i-=l,o=ja(a/i);for(let t=0;t<e.length;t++){if(n[t]!=null)continue;let{width:i,flex:s}=e[t],c=a>=0?o*s:i*a/r;n[t]=i+c}return n}})))()}var Pa,Fa,Ia;function La(){return(La=e((()=>{Na(),$(),Pa=(e,t)=>{let n=qi(e,e=>e!=null&&e>0),r=(e,t)=>`.cell[name="${e}"], cosmoz-omnitable-skeleton::part(cell-${e}){width: ${t}px;padding: 0 min(3px, ${t/2}px)}`,i=e=>`cosmoz-omnitable-resize-nub[name="${e}"]{display:none}`,a=e=>`cosmoz-omnitable-resize-nub[name="${e}"], .cell[name="${e}"]{display:none}`,o=0,s=0;return t.map((t,c)=>{let l=e[c];if(l==null||l===0)return a(t.name);o+=l;let u=Math.round(o),d=u-s;s=u;let f=r(t.name,d);return c===n?`${f}\n${i(t.name)}`:f}).join(`
`)},Fa=(e,t,n)=>{let r=e.filter(e=>!e.hidden),i=r.reduce((e,{width:t})=>e+t,0);if(r.length>1&&i>t)return Fa(r.slice(1),t,n);let a=r.reduce(([e,t],n,r)=>[Math.max(e,n.index),n.index>e?r:t],[-1,-1])[1];return a!==-1&&(r[a].flex=1),Ma(r,t).reduce((e,t,n)=>(e[r[n].index]=t,e),Array(n).fill(void 0))},Ia=(e,t)=>e.length===0?`.cell {display: none;}`:Pa(e,t)})))()}var Ra;function za(){return(za=e((()=>{A(),Ra=(e,t)=>l(()=>{let n=new ResizeObserver(([e])=>{e.contentRect?.width!==0&&t(e.contentRect.width-88)});return n.observe(e),()=>n.unobserve(e)},[])})))()}var Ba;function Va(){return(Va=e((()=>{A(),za(),Ba=e=>{let[t,n]=m(()=>e.getBoundingClientRect().width-88);return Ra(e,n),t}})))()}var Ha;function Ua(){return(Ua=e((()=>{A(),La(),Ha=({canvasWidth:e,groupOnColumn:t,layoutColumns:n,config:r})=>b(()=>{if(!Array.isArray(r)||e==null||e===0)return[];let i=r.map((e,n)=>({minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,name:e.name,index:n,hidden:e.name===t?.name||e.disabled})).map(e=>n==null?e:{...e,hidden:!n.includes(e.name)}).sort(({index:e,priority:t},{index:n,priority:r})=>t===r?n-e:t-r);return Fa(i,e,i.length)},[e,t,r])})))()}var Wa;function Ga(){return(Ga=e((()=>{A(),Wa=({host:e,canvasWidth:t,columns:n})=>{let r=e.miniBreakpoint??480,i=b(()=>t<=r,[t,r]),a=b(()=>i?n?.filter(e=>e.mini!=null).sort((e,t)=>(e.mini??0)-(t.mini??0)):[],[n,i]),o=b(()=>a.slice(1),[a]),s=a[0],c=!!s&&e.renderItem==null;return l(()=>{e.toggleAttribute(`mini`,c)},[c]),{isMini:c&&i,hasMiniColumn:c,miniColumn:s,miniColumns:o}}})))()}var Ka;function qa(){return(qa=e((()=>{A(),Ka=({host:e,canvasWidth:t,layout:n,setSettings:r,requestTween:i})=>{let a=o();a.current=e=>{i(),r(r=>{let i=r.columns,{detail:{newWidth:a,column:o}}=e,s=i.findIndex(e=>e.name===o.name),c=[],l=i.reduce((e,t)=>Math.max(e,t.priority),-1/0);for(let e=0;e<n.length;e++)if(c[e]={...i[e]},e<s&&n[e]&&(c[e].width=n[e],c[e].flex=0,c[e].priority=l),e===s){let r=n.reduce((e,t,n)=>n<s&&t?e-t:e,t);c[e].width=Math.min(r,Math.max(a,i[e].minWidth)),c[e].flex=0,c[e].priority=l}return{...r,columns:c}})},l(()=>{let t=e=>a.current?.(e);return e.addEventListener(`column-resize`,t),()=>e.removeEventListener(`column-resize`,t)},[])}})))()}var Ja,Ya,Xa;function Za(){return(Za=e((()=>{Ce(),ce(),A(),Ja=(e,t)=>{let n=b(()=>{let t=!1,n,r=()=>{t&&(n=requestAnimationFrame(r),e()&&(t=!1))};return{start:()=>{t=!0,cancelAnimationFrame(n),n=requestAnimationFrame(r)},stop:()=>{t=!1,cancelAnimationFrame(n)}}},[]);l(()=>{n.start()},t),l(()=>()=>n.stop(),[])},Ya=(e=0,t=0)=>Math.abs(e-t)<.1,Xa=(e,t=1.9,n=ae,r)=>{let i=ue({target:e,speedFactor:t,onConverge:r}),a=d(()=>{if(!i.tween)return i.tween=i.target,n(i.tween),i.onConverge?.(),!0;if(i.target.every((e,t)=>i.tween[t]===e))return n(i.tween),i.onConverge?.(),!0;if(i.tween=i.target.map((e,t)=>Ya(i.tween[t],e)?e:(i.tween[t]??0)+((e??0)-(i.tween[t]??0))/i.speedFactor||0),n(i.tween),i.tween.every((e,t)=>e===i.target[t]))return i.onConverge?.(),!0},[]);Ja(a,[e])}})))()}var Qa,$a,eo;function to(){return(to=e((()=>{ce(),A(),La(),Va(),Ua(),Ga(),qa(),Za(),Qa=e=>{let t=b(()=>new CSSStyleSheet,[]);return l(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,t]},[]),t},$a=e=>{l(()=>{e.toggleAttribute(`compact`,e.compact===!0)},[e.compact])},eo=({host:e,columns:t,settings:n,setSettings:r,resizeSpeedFactor:i,sortAndGroupOptions:a})=>{let o=Ba(e),{isMini:s,hasMiniColumn:c,miniColumn:l,miniColumns:u}=Wa({host:e,canvasWidth:o,columns:t});$a(e);let{groupOnColumn:f}=a,p=c?[l.name]:e.headerColumns??null,h=Ha({canvasWidth:o,groupOnColumn:f,layoutColumns:p,config:n.columns}),g=Qa(e),_=b(()=>n.columns.reduce((e,n,r)=>h[r]!=null||n.name===f?.name||n.disabled?e:[...e,t.find(e=>e.name===n.name)],[]),[t,n,h]),[v,y]=m(1),x=d(()=>y(i??1.9),[i]),S=d(()=>y(1),[]),C=ue({columns:n.columns});return Xa(h,v,e=>{let t=Ia(e,C.columns);g.replaceSync(t)},S),Ka({host:e,canvasWidth:o,layout:h,setSettings:e=>r(e(n)),requestTween:x}),{isMini:s,collapsedColumns:_,miniColumns:u,requestTween:x}}})))()}var no;function ro(){return(ro=e((()=>{no=({host:e,...t})=>{let{csvFilename:n=`omnitable.csv`,xlsxFilename:r=`omnitable.xlsx`,xlsxSheetname:i=`Omnitable`,topPlacement:a=`top-end`}=e;return{csvFilename:n,xlsxFilename:r,xlsxSheetname:i,topPlacement:a,...t}}})))()}var io;function ao(){return(ao=e((()=>{A(),$(),io=({host:e,selectedItems:t,data:n,dataIsValid:r,columns:i,sortAndGroupOptions:a,collapsedColumns:o,settings:s,filterFunctions:c,settingS:u,filters:d,setFilterState:f,hideSelectAll:p,headerColumns:m,requestTween:h,...g})=>{let _=b(()=>m==null?i:i.filter(e=>m.includes(e.name)),[i,m]),v=t===Q||!!n&&n.length>0&&Array.isArray(t)&&t.length===n.length,y=t=>{if(!(t.target instanceof HTMLInputElement))return;let n=e.shadowRoot.querySelector(`#groupedList`);t.target.checked?n.selectAll():n.deselectAll()},{groupOnColumn:x}=a,S=b(()=>[x,...o,...s.columns.filter(e=>e.disabled)].some(e=>!!e&&!!e.name&&Object.keys(c).includes(e.name)),[c,s,o]),C=b(()=>({...u,collapsed:o,badge:S,filters:d,requestTween:h}),[u,o,S,d,h]);return l(()=>{let t=e.shadowRoot.querySelector(`#tableContent`),n=new ResizeObserver(t=>requestAnimationFrame(()=>{e.style.setProperty(`--ot-height`,t[0]?.contentRect.height+`px`)}));return n.observe(t),()=>n.unobserve(t)},[]),{allSelected:v,onAllCheckboxChange:y,data:n,dataIsValid:r,columns:_,settingsConfig:C,filters:d,groupOnColumn:x,setFilterState:f,hideSelectAll:p,sortAndGroup:a.sortAndGroup,...g}}})))()}var oo,so;function co(){return(co=e((()=>{Ke(),c(),A(),D(),oo=e=>e?`groupRow groupRow-folded`:`groupRow`,so=(e,t,{selected:n,folded:r,toggleFold:i,onCheckboxChange:a,groupOnColumn:o,dataIsValid:s})=>y` <div
		class="${oo(r)}"
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
			aria-label=${E(`Expand or collapse`)}
			variant="tertiary"
			icon-only
			class="expand"
			?aria-expanded="${r}"
			@click=${i}
		>
			${he({width:`16`,height:`16`})}
		</cosmoz-button>
	</div>`})))()}var lo;function uo(){return(uo=e((()=>{t(),lo=({item:e,index:t})=>n=>k((n?.length??0)>0,()=>y`
				<div class="itemRow-minis" part="item-minis">
					${n.map(n=>y`<div
								class="itemRow-mini"
								part="item-mini item-mini-${n.name}"
							>
								${(n.renderMini??n.renderCell)(n,{item:e,index:t})}
							</div>`)}
				</div>
			`)})))()}var fo;function po(){return(po=e((()=>{Ke(),c(),Oe(),A(),D(),uo(),fo=(e,t,{selected:n,expanded:r,toggleCollapse:i,columns:a,collapsedColumns:o,miniColumns:s,onItemClick:c,onCheckboxChange:l,onItemChange:u,rowPartFn:d,groupOnColumn:f,dataIsValid:p})=>y`
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
					aria-label=${E(`Expand or collapse`)}
					variant="tertiary"
					icon-only
					class="expand"
					?hidden="${$e(o.length)}"
					?aria-expanded="${r}"
					@click="${i}"
				>
					${he({width:`16`,height:`16`})}
				</cosmoz-button>
			</div>
			${lo({item:e,index:t})(s)}
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
	`})))()}var mo,ho,go;function _o(){return(_o=e((()=>{A(),co(),po(),$(),q(),mo=e=>e instanceof HTMLInputElement,ho=e=>e instanceof HTMLElement,go=({host:e,error:t,dataIsValid:n,processedItems:r,columns:i,collapsedColumns:a,miniColumns:s,sortAndGroupOptions:c,rowPartFn:u,...f})=>{let{loading:p=!1,displayEmptyGroups:m=!1,compareItemsFn:h}=e,g=e.renderItem??fo,_=e.renderGroup??so,v=o({shiftKey:!1,ctrlKey:!1}),y=d(t=>{if(!mo(t.target))return;let n=t.target,r=n.dataItem,i=n.checked,a=e.shadowRoot.querySelector(`#groupedList`);v.current.shiftKey?a.toggleSelectTo(r,i):v.current.ctrlKey?(n.checked=!0,a.selectOnly(r)):a.toggleSelect(r,i),t.preventDefault(),t.stopPropagation()},[]);l(()=>{let e=({shiftKey:e,ctrlKey:t})=>{v.current={shiftKey:e,ctrlKey:t}};return window.addEventListener(`keydown`,e),window.addEventListener(`keyup`,e),()=>{window.removeEventListener(`keydown`,e),window.removeEventListener(`keyup`,e)}},[]);let x=d(t=>{if(!ho(t.currentTarget))return;let n=t.currentTarget,r=t.composedPath();r.slice(0,r.indexOf(n)).some(e=>e instanceof Element&&e.matches(`a, .checkbox, .expand`))||e.dispatchEvent(new window.CustomEvent(`omnitable-item-click`,{bubbles:!0,composed:!0,detail:{item:n.dataItem,index:n.dataIndex}}))},[]),{groupOnColumn:S}=c,C=d((t,n)=>r=>yn(e,t,n,r),[]);return{...f,processedItems:r,dataIsValid:n,filterIsTooStrict:n&&r.length<1,loading:p,compareItemsFn:h,displayEmptyGroups:m,error:t,renderItem:b(()=>(e,t,r)=>g(e,e[Ki],{...r,columns:i,collapsedColumns:a,miniColumns:s,onItemClick:x,onCheckboxChange:y,onItemChange:C,rowPartFn:u,groupOnColumn:S,dataIsValid:n}),[g,i,a,s,x,y,C,u,S,n]),renderGroup:b(()=>(e,t,r)=>_(e,e[Ki],{...r,columns:i,onCheckboxChange:y,groupOnColumn:S,dataIsValid:n}),[_,i,y,S,n])}}})))()}var vo;function yo(){return(yo=e((()=>{vo=(e,t)=>{if(e===t)return 0;if(e==null)return-1;if(t==null)return 1;let n=typeof e,r=typeof t;return n===`object`&&r===`object`?e.toString()<t.toString()?-1:1:n===`number`&&r===`number`?e-t:n===`string`&&r===`string`?e<t?-1:1:n===`boolean`&&r===`boolean`?e?-1:1:(console.warn(`unsupported sort`,n,e,r,t),0)}})))()}var bo,xo,So,Co,wo,To;function Eo(){return(Eo=e((()=>{Ce(),A(),yo(),K(),yi(),$(),bo=(e,t)=>(n,r)=>vo(e(n),e(r))*(t?-1:1),xo=e=>e.replace(/([a-z0-9])([A-Z])/gu,`$1-$2`).toLowerCase(),So=(e,t)=>{e&&t&&Object.entries(t).forEach(([t,n])=>{let r=e[G];r.__ownChange=!0,Object.assign(r,{[t]:n}),r.__ownChange=!1,r.dispatchEvent(new CustomEvent(`${xo(t)}-changed`,{bubbles:!0,detail:{value:n}}))})},Co=(e,t)=>Object.assign(e,{[Ki]:t}),wo=Symbol(`unparsed`),To=({data:e,columns:t,hashParam:n,sortAndGroupOptions:r,noLocalSort:i,noLocalFilter:a})=>{let{groupOnColumn:o,groupOnDescending:s,sortOnColumn:c,descending:u}=r,f=d(([e,n])=>{let r=t.find(({name:t})=>t===e);return r==null?[e,void 0]:[e,n.filter&&r.serializeFilter(r,n.filter)]},[t]),p=d(([e,n])=>{let r=t.find(({name:t})=>t===e);if(r==null)return[e,{[wo]:n}];let i={filter:r.deserializeFilter(r,n)};return So(r,i),[e,i]},[t]),[m,h]=mi({},n,{multi:!0,suffix:`-filter--`,write:f,read:p}),g=d((e,n)=>h(r=>{let i=Ee(n,r[e]);return So(t.find(t=>t.name===e),i),{...r,[e]:{...r[e],...i}}}),[t,h]),_=b(()=>Object.values(m).map(e=>e.filter),[m]),v=b(()=>Object.fromEntries(t.map(e=>[e.name,!e.noLocalFilter&&e.getFilterFn(e,m[e.name]?.filter)]).filter(e=>!!e[1])),[t,..._]),y=b(()=>!Array.isArray(e)||e.length===0?[]:Object.entries(v).length===0||a?e.slice():e.filter(e=>Object.values(v).every(t=>t(e))),[e,v,a]),x=b(()=>{if(!i&&!o&&c!=null&&c.sortOn!=null)return y.slice().sort(bo(e=>c.getComparableValue({...c,valuePath:c.sortOn},e),u));if(o!=null&&o.groupOn!=null){let e=y.reduce((e,t)=>{let n=o.getComparableValue({...o,valuePath:o.groupOn},t);if(n===void 0)return e;let r=e.find(e=>e.id===n);return r?(r.items.push(t),e):(r={id:n,name:n,items:[t]},[...e,r])},[]);return e.sort(bo(e=>o.getComparableValue({...o,valuePath:o.groupOn},e.items[0]),s)),!c||i?e:e.filter(e=>Array.isArray(e.items)).map(e=>(e.items.sort(bo(e=>c.getComparableValue({...c,valuePath:c.sortOn},e),u)),e))}return y},[y,o,s,c,u,i]),S=b(()=>{let e=0,t=0,n=[];return x.forEach(r=>{if(`items`in r&&Array.isArray(r.items)){Co(r,t++),r.items.forEach(t=>{Co(t,e++),n.push(t)});return}return Co(r,e++),n.push(r)},[]),n},[x]);return l(()=>{h(e=>Object.values(e).some(e=>e[wo]!=null)?Object.fromEntries(Object.entries(e).map(([e,t])=>{let n=t[wo];return n==null?[e,t]:p([e,n])})):e)},[p]),{processedItems:x,visibleData:S,filters:m,filterFunctions:v,setFilterState:g}}})))()}var Do,Oo;function ko(){return(ko=e((()=>{u(),h(),A(),Do=e=>{let t=t=>{let n=e.data.indexOf(t);if(n<0)return null;let r=e.data.splice(n,1);if(e.data=e.data.slice(),Array.isArray(r)&&r.length>0)return r[0]},n=(t,n)=>{e.data.splice(t,1,n),e.data=e.data.slice()};return{removeItem:t,removeItems(e){let n=[];for(let r=e.length-1;r>=0;--r){let i=t(e[r]);i!=null&&n.push(i)}return n},replaceItemAtIndex:n,replaceItem(t,r){let i=e.data.indexOf(t);i>-1&&n(i,r)},selectItem(t){e.shadowRoot.querySelector(`#groupedList`).select(t)},selectAll(){e.shadowRoot.querySelector(`#groupedList`).selectAll()},deselectAll(){e.shadowRoot.querySelector(`#groupedList`).deselectAll()},deselectItem(t){e.shadowRoot.querySelector(`#groupedList`).deselect(t)},isItemSelected(t){return e.shadowRoot.querySelector(`#groupedList`).isItemSelected(t)}}},Oo=({host:e,visibleData:t,filters:r,...i})=>{let{setFilterState:a}=i,o=b(()=>Do(e),[]),[c,u]=n(`selectedItems`,[]);f(i,Object.values(i)),f(o,Object.values(o)),l(()=>{let t=e=>{if(!(e instanceof CustomEvent))return;let t=e.detail;a(t.name,e=>({...typeof e==`object`&&e?e:{},...t.state}))};return e.addEventListener(`legacy-filter-changed`,t),()=>e.removeEventListener(`legacy-filter-changed`,t)},[]),s(`visibleData`,t),s(`sortedFilteredGroupedItems`,i.sortedFilteredGroupedItems),s(`sortOn`,i.sortOn),s(`descending`,i.descending),s(`isMini`,i.isMini);let d=b(()=>Object.fromEntries(Object.entries(r).filter(([,{filter:e}])=>e!==void 0).map(([e,{filter:t}])=>[e,t])),[r]);return s(`filters`,d,Object.values(d)),{selectedItems:c,setSelectedItems:u}}})))()}var Ao;function jo(){return(jo=e((()=>{Aa(),to(),ro(),ao(),_o(),Eo(),ko(),Ti(),Ao=e=>{let{hashParam:t,settingsId:n,data:r,resizeSpeedFactor:i,noLocal:a,noLocalSort:o=a,noLocalFilter:s=a,error:c,rowPartFn:l}=e,u=Oa({settingsId:n,host:e}),{settings:d,setSettings:f,columns:p,resetRef:m,savedSettings:h}=u,g=Ci(p,t,{settings:d,setSettings:f,resetRef:m,ready:h!==void 0}),{processedItems:_,visibleData:v,filters:y,setFilterState:b,filterFunctions:x}=To({data:r,columns:p,hashParam:t,sortAndGroupOptions:g,noLocalSort:o,noLocalFilter:s}),{isMini:S,collapsedColumns:C,miniColumns:ee,requestTween:te}=eo({host:e,columns:p,settings:d,setSettings:f,resizeSpeedFactor:i,sortAndGroupOptions:g}),ne=r&&Array.isArray(r)&&r.length>0,{selectedItems:w,setSelectedItems:re}=Oo({host:e,visibleData:v,sortedFilteredGroupedItems:_,columns:p,filters:y,setFilterState:b,isMini:S,...g}),T=io({host:e,selectedItems:w,sortAndGroupOptions:g,dataIsValid:ne,data:r,columns:p,filters:y,collapsedColumns:C,settings:d,filterFunctions:x,settingS:u,setFilterState:b,hideSelectAll:e.hideSelectAll===!0,headerColumns:e.headerColumns??null,requestTween:te});return{header:T,list:go({host:e,error:c,dataIsValid:ne,processedItems:_,selectedItems:w,setSelectedItems:re,columns:p,collapsedColumns:C,miniColumns:ee,sortAndGroupOptions:g,rowPartFn:l}),footer:no({host:e,selectedItems:w,allSelected:T.allSelected,setSelectedItems:re,columns:p,enableSelectAll:e.enableSelectAll,allItemsCount:e.allItemsCount})}}})))()}function Mo(){return(Mo=e((()=>{t(),customElements.define(`cosmoz-grouped-list-row`,class extends HTMLElement{get item(){return this._item}set item(e){this._item=e,this._render()}get index(){return this._index}set index(e){this._index=e,this._render()}get renderFn(){return this._renderFn}set renderFn(e){this._renderFn=e,this._render()}_render(){this._item!=null&&this._index!=null&&this._renderFn!=null&&te(this._renderFn(this._item,this._index),this)}})})))()}var No,Po,Fo,Io,Lo,Ro,zo,Bo,Vo;function Ho(){return(Ho=e((()=>{No={group:Symbol(`group`)},Po=(e,t)=>(t.has(e)||t.set(e,{}),t.get(e)),Fo=(e,t)=>!!Po(e,t).expanded,Io=(e,t)=>!!Po(e,t).folded,Lo=e=>e?e.items instanceof Array:!1,Ro=e=>{if(!Array.isArray(e)||e.length===0)return;let t=Array.isArray(e[0]?.items);if(!e.every(e=>Array.isArray(e.items)===t))throw Error(`Data must be homogeneous.`)},zo=(e,t,n)=>{if(Array.isArray(e))return Ro(e),e.reduce((e,r)=>{let i=r;return i.items?i.items.length?Po(r,n).folded?e.concat(r):e.concat(r,i.items.map(e=>Object.assign(e,{[No.group]:r}))):t?e.concat(r):e:e.concat(r)},[])},Bo=(e,...t)=>typeof e==`function`?e(...t):e,Vo=(e,t)=>e===t})))()}var Uo;function Wo(){return(Wo=e((()=>{A(),Ho(),Uo=()=>{let[e,t]=m(()=>[new WeakMap]);return{setItemState:d((e,n)=>t(([t])=>{let r=Po(e,t);return Object.assign(r,Bo(n,r)),[t]}),[]),state:e[0],signal:e}}})))()}var Go;function Ko(){return(Ko=e((()=>{A(),Wo(),Ho(),Go=()=>{let{setItemState:e,state:t,signal:n}=Uo();return{state:t,signal:n,toggleFold:d((t,n)=>{Lo(t)&&e(t,e=>({folded:n===void 0?!e.folded:n}))},[]),toggleCollapse:d((t,n)=>{Lo(t)||e(t,e=>({expanded:n===void 0?!e.expanded:!n}))},[])}}})))()}var qo;function Jo(){return(Jo=e((()=>{A(),$(),Ho(),qo=({compareItemsFn:e,data:t,flatData:r})=>{let[i,a]=n(`selectedItems`,()=>[]),[o,s]=m(),c=d(e=>i===Q||i.includes(e),[i]),u=d(e=>i===Q||(e?.items?.every(c)??!1),[i,c]),f=d(e=>c(e)||u(e),[c,u]),p=d(e=>{let t=e.items??[e];a(e=>e===Q?e:[...e,...t.filter(t=>!e.includes(t))]),s(e)},[]),h=d(e=>{let t=e.items??[e];a(e=>e===Q?(r??[]).filter(e=>!Lo(e)).filter(e=>!t.includes(e)):e.filter(e=>!t.includes(e))),s(e)},[r]),g=d(e=>{a(e.items?.slice()||[e]),s(e)},[]),_=d(()=>{a(t.flatMap(e=>e.items||e)),s(void 0)},[t]),v=d(()=>{a([]),s(void 0)},[]),y=d((e,t=!f(e))=>t?p(e):h(e),[f]),b=d((t,n)=>{if(!r)return;let i=o?r.findIndex(t=>e(t,o)):-1;if(i<0)return y(t,n);let[a,c]=[i,r.indexOf(t)].sort((e,t)=>e-t);r.slice(a,c+1).forEach((e,t,r)=>{t>0&&t<r.length-1&&Lo(e)||y(e,n)}),s(t)},[r,e,y]);return l(()=>a(t=>t!==Q&&t.length>0&&r?r.filter(n=>t.find(t=>e(n,t))):t),[r]),{selectedItems:i,isItemSelected:c,isGroupSelected:u,isSelected:f,select:p,deselect:h,selectOnly:g,selectAll:_,deselectAll:v,toggleSelect:y,toggleSelectTo:b}}})))()}var Yo,Xo,Zo;function Qo(){return(Qo=e((()=>{Te(),u(),A(),t(),Mo(),Ko(),Jo(),Ho(),Yo={host:{position:`relative`,display:`flex`,flexDirection:`column`}},Xo=e=>{let{data:t,renderItem:n,renderGroup:r,displayEmptyGroups:i,compareItemsFn:a=Vo}=e,{toggleFold:o,toggleCollapse:s,state:c,signal:l}=Go(),u=b(()=>zo(t,i,c),[t,i,l]),{selectedItems:p,isItemSelected:m,isGroupSelected:h,isSelected:g,select:v,deselect:y,selectOnly:x,selectAll:S,deselectAll:C,toggleSelect:ee,toggleSelectTo:te}=qo({compareItemsFn:a,data:t,flatData:u}),ne=d((e,t)=>Array.isArray(e.items)?r(e,t,{selected:h(e),folded:Io(e,c),toggleSelect:t=>ee(e,typeof t==`boolean`?t:void 0),toggleFold:()=>o(e)}):n(e,t,{selected:m(e),expanded:Fo(e,c),toggleSelect:t=>ee(e,typeof t==`boolean`?t:void 0),toggleCollapse:()=>s(e)}),[n,r,p,ee,l]);_(()=>{Object.assign(e.style,Yo.host)},[]);let w={toggleFold:o,toggleCollapse:s,isItemSelected:m,isGroupSelected:h,isSelected:g,select:v,deselect:y,selectOnly:x,selectAll:S,deselectAll:C,toggleSelect:ee,toggleSelectTo:te};return f(w,Object.values(w)),{renderRow:ne,flatData:u}},Zo=({renderRow:e,flatData:t})=>x({items:t,renderItem:(t,n)=>y`<cosmoz-grouped-list-row
				.item=${t}
				.index=${n}
				.renderFn=${e}
			></cosmoz-grouped-list-row>`})})))()}var $o;function es(){return(es=e((()=>{A(),Qo(),$o=e=>Zo(Xo(e)),customElements.define(`cosmoz-grouped-list`,j($o,{useShadowDOM:!1}))})))()}function ts(){return(ts=e((()=>{es()})))()}var ns,rs,is;function as(){return(as=e((()=>{je(),Pt(),ii(),oi(),Oi(),Ni(),Ii(),A(),rt(),t(),g(),zi(),Yi(),Zi(),na(),jo(),ts(),co(),po(),ns=e=>window.ShadyCSS?.ApplyShim?.transformCssText?.(e)||e,rs=e=>{let{header:t,list:n,footer:r}=Ao(e);return y`
		<style>
			${a([],()=>ns(Ri))}
		</style>

		<div class="mainContainer">
			${Xi(t)}
			<div class="tableContent" id="tableContent">
				${ta(t,n)}
			</div>
			${Ji(r)}
		</div>

		<div id="columns">
			<slot id="columnsSlot"></slot>
		</div>
	`},customElements.define(`cosmoz-omnitable`,j(rs,{observedAttributes:[`hash-param`,`sort-on`,`group-on`,`descending`,`group-on-descending`,`hide-select-all`,`settings-id`,`no-local`,`no-local-sort`,`no-local-filter`,`disabled-filtering`,`loading`,`mini-breakpoint`,`compact`,`inline`,`enable-select-all`]})),is=`
	<slot name="actions" slot="actions"></slot>
`,y(Object.assign([is],{raw:[is]})),ke(Object.assign([is],{raw:[is]}))})))()}var os,ss,cs,ls,us;function ds(){return(ds=e((()=>{t(),Ke(),Pe(),bt(),as(),_t(),os={title:`Components/ComsmozOmnitableFullDemo`,component:`cosmoz-omnitable`,tags:[`autodocs`],args:{loading:!1,locale:`en`,sortOn:``,groupOn:``,descending:!1,groupOnDescending:!1,hashParam:``,settingsId:``,selectedItems:[],disabledFiltering:!1,enableSelectAll:!1,allItemsCount:1e4},argTypes:{loading:{control:`boolean`,description:`Show loading state`,table:{defaultValue:{summary:`false`}}},locale:{control:`select`,options:[`en`,`fr`,`sv`],description:`Language locale`,table:{defaultValue:{summary:`en`}}},selectedItems:{control:`object`,description:`Show selected items`},allItemsCount:{control:`number`,description:`Total number of items`},data:{control:`object`,description:`Show specified items`},sortOn:{control:`text`,description:`Column property name to sort on (e.g., "amount", "date", "id")`},groupOn:{control:`text`,description:`Column property name to group on (e.g., "amount", "date", "id")`},descending:{control:`boolean`,description:`Sort on descending`},groupOnDescending:{control:`boolean`,description:`Group on descending`},hashParam:{control:`text`,description:`Hash parameter for URL state management`},settingsId:{control:`text`,description:`ID for storing table settings`},disabledFiltering:{control:`boolean`,description:`Disable filter inputs in all column headers`,table:{defaultValue:{summary:`false`}}}},render:e=>y`
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
                    ${Ne({styles:`vertical-align: middle; fill: currentColor;`})}
                    <span>Remove items</span>
                </cosmoz-button>
            </cosmoz-omnitable>
        `,play:async()=>{console.log(`Current hash:`,window.location.hash)}},ss={args:{data:vt(10,10,10)}},cs={args:{data:vt(2,2,10)}},ls={args:{data:[]}},us=[`TableWithLargeData`,`TableWithSmallData`,`TableWithNoData`],ss.parameters={...ss.parameters,docs:{...ss.parameters?.docs,source:{originalSource:`{
  args: {
    data: generateTableDemoData(10, 10, 10)
  }
}`,...ss.parameters?.docs?.source}}},cs.parameters={...cs.parameters,docs:{...cs.parameters?.docs,source:{originalSource:`{
  args: {
    data: generateTableDemoData(2, 2, 10)
  }
}`,...cs.parameters?.docs?.source}}},ls.parameters={...ls.parameters,docs:{...ls.parameters?.docs,source:{originalSource:`{
  args: {
    data: []
  }
}`,...ls.parameters?.docs?.source}}}})))()}ds();export{ss as TableWithLargeData,ls as TableWithNoData,cs as TableWithSmallData,us as __namedExportsOrder,os as default};