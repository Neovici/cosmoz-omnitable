import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{$ as t,At as n,Bt as r,C as i,Dt as a,E as o,G as s,Gt as c,I as l,It as u,J as d,Jt as f,Kt as p,L as m,M as h,Mt as g,O as _,Ot as v,P as y,Pt as b,Q as x,Rt as S,S as C,St as ee,Tt as te,U as w,V as T,Vt as ne,Wt as E,X as re,Y as ie,_ as D,_t as O,at as ae,b as oe,bt as se,c as k,ct as ce,d as le,dt as ue,f as de,ft as fe,g as pe,gt as A,h as me,ht as he,i as ge,it as _e,l as ve,lt as ye,mt as be,n as xe,nt as Se,ot as Ce,pt as we,qt as j,r as Te,rt as Ee,s as De,st as Oe,u as ke,ut as M,v as N,vt as Ae,w as je,xt as Me,y as P,z as Ne}from"./iframe-BPWFo6xx.js";import{A as Pe,B as F,C as Fe,D as Ie,E as Le,F as I,G as Re,H as ze,I as Be,J as Ve,L as He,M as Ue,N as We,O as Ge,P as L,R as Ke,S as qe,T as Je,U as Ye,V as R,W as Xe,_ as Ze,d as Qe,f as $e,g as et,h as tt,j as nt,k as rt,l as it,m as at,n as ot,q as st,r as ct,s as lt,t as ut,u as dt,v as ft,w as pt,x as mt,y as ht,z as gt}from"./dist-ruMHCkuc.js";var _t,vt;function z(){return(z=e((()=>{h(),ye(),Ce(),A(),_t=M`
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
`,vt=()=>j`
	<style>
		${_t}
	</style>
	${l({className:`icon`,width:`18`,height:`18`})}
`,customElements.define(`cosmoz-clear-button`,O(vt))})))()}var B,yt,bt,xt,St,V;function H(){return(H=e((()=>{R(),B=({valuePath:e},t)=>F(t,e),yt=B,bt=B,xt=({valuePath:e},t)=>n=>{let r=F(n,e);return r!=null&&r.toString().toLowerCase().trim().includes(t.toLowerCase().trim())},St=(e,t)=>t===``||t==null?null:t,V=e=>class extends e{static get properties(){return{isOmnitableColumn:{type:Boolean,value:!0},title:{type:String},valuePath:{type:String,notify:!0},values:{type:Array,notify:!0},filter:{type:Object},noLocalFilter:{type:Boolean},disabled:{type:Boolean,value:!1,notify:!0},editable:{type:Boolean,notify:!0},loading:{type:Boolean,value:!1,notify:!0},externalValues:{type:Boolean,value:!1,notify:!0},name:{type:String},sortOn:{type:String},groupOn:{type:String},noSort:{type:Boolean,value:!1},disabledFiltering:{type:Boolean,value:!1},width:{type:String,value:`75px`},minWidth:{type:String,value:`40px`},flex:{type:String,value:`1`},cellClass:{type:String,value:`default-cell`},headerCellClass:{type:String,value:`default-header-cell`},priority:{type:Number,value:0},hidden:{type:Boolean,notify:!0},align:{type:String,value:`left`},headerAlign:{type:String,value:null},renderHeader:{type:Function},renderCell:{type:Function},renderEditCell:{type:Function},renderGroup:{type:Function},mini:{type:Number,value:null},renderMini:{type:Function}}}static get observers(){return[`notifyFilterChange(filter)`]}notifyFilterChange(e){this.__ownChange||this.dispatchEvent(new CustomEvent(`legacy-filter-changed`,{detail:{name:this.name,state:this.legacyFilterToState(e)},bubbles:!0}))}legacyFilterToState(e){return{filter:e}}getFilterFn(){}getString(e,t){return B(e,t)}toXlsxValue(e,t){return yt(e,t)}cellTitleFn(e,t){return this.getString(e,t)}headerTitleFn(e){return e.title}serializeFilter(e,t){return St(e,t)}deserializeFilter(e,t){if(t==null)return null;if(typeof t==`string`)try{return window.decodeURIComponent(t)}catch{return null}return t}getComparableValue(e,t){return bt(e,t)}computeSource(e,t){return t}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n),this.dispatchEvent(new CustomEvent(`cosmoz-column-prop-changed`,{bubbles:!0}))}}})))()}var Ct,wt,Tt,Et,Dt,Ot,kt;function At(){return(At=e((()=>{P(),z(),I(),f(),H(),Ct=e=>t=>e(n=>{if(n.inputValue===void 0&&t.target.value===``)return n;clearTimeout(n.t);let r=setTimeout(()=>e(e=>({...e,filter:e.inputValue})),1e3);return{...n,inputValue:t.target.value,t:r}}),wt=e=>()=>e(e=>({...e,filter:e.inputValue})),Tt=e=>t=>{t.keyCode===13&&(t.preventDefault(),e(e=>({...e,filter:e.inputValue})))},Et=e=>t=>e(e=>({...e,headerFocused:t.detail.value})),Dt=e=>()=>e(e=>({...e,filter:null,inputValue:null})),Ot=e=>e!=null&&e!==``,kt=class extends V(L){static get properties(){return{minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},inputValue:{type:Object,notify:!0}}}getFilterFn(e,t){if(t!=null&&t!==``)return xt(e,t)}renderCell(e,{item:t}){return j`<span class="default-column">${B(e,t)}</span>`}renderEditCell(e,{item:t},n){return j`<cosmoz-input
			compact
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${B(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,inputValue:n,headerFocused:r},i){return j`<cosmoz-input
			variant="inline"
			label=${e.title}
			?disabled=${e.disabledFiltering}
			.value=${n??t}
			@value-changed=${Ct(i)}
			focused=${r}
			@focused-changed=${Et(i)}
			@keydown=${Tt(i)}
			@blur=${wt(i)}
		>
			${d(!e.disabledFiltering,()=>j`<cosmoz-clear-button
						suffix
						slot="suffix"
						?visible=${Ot(t)}
						light
						@click=${Dt(i)}
					></cosmoz-clear-button>`)}
		</cosmoz-input>`}legacyFilterToState(e){return{filter:e,inputValue:e}}},customElements.define(`cosmoz-omnitable-column`,kt)})))()}var jt,Mt,Nt;function U(){return(U=e((()=>{P(),A(),f(),jt=[`label`,`value`,`slot`,`always-float-label`,`disabled`,`variant`],Mt=ne`
	${o}

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
`,Nt=e=>{let{label:t,value:n,slot:r}=e;e.toggleAttribute(`has-value`,!!n);let i=j`<div
		id="input"
		part="input"
		role="button"
		class="control"
		slot=${r}
	>
		${n||``}
	</div>`;return _(i,{label:t})},customElements.define(`cosmoz-omnitable-dropdown-input`,O(Nt,{observedAttributes:jt,styleSheets:[Mt]}))})))()}var Pt;function Ft(){return(Ft=e((()=>{Ye(),f(),Ue(),U(),Pt=({title:e,tooltip:t=``,filterText:n=``,onOpenedChanged:r,content:i,align:a=`left`,externalValues:o=null})=>{let s={filtered:!!n,...o!=null&&{[`external-values-${o}`]:!0}};return j`
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
			class=${nt({...s,dropdown:!0})}
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
	`}})))()}var It,Lt;function Rt(){return(Rt=e((()=>{Ee(),Ke(),Pe(),Ie(),It=e=>e?typeof e.close==`function`?e:It(e.parentElement):null,Lt=e=>class extends e{static get properties(){return{disabled:{type:Boolean,value:!1},filter:{type:Object,notify:!0},values:{type:Array,value(){return[]}},headerFocused:{type:Boolean,notify:!0},min:{type:Number,value:null},max:{type:Number,value:null},limits:{type:Function},autoupdate:{type:String,value:!0},locale:{type:String,value:null},align:{type:String,value:`left`},_filterInput:{type:Object,value(){return{min:null,max:null}}},_range:{type:Object,computed:`_computeRange(values.*)`},_limit:{type:Object,computed:`_computeLimit(_range, _filterInput.*, min, max)`,value(){return{}}},_tooltip:{type:String,computed:`_computeTooltip(title, _filterText)`},_fromClasses:{type:String,computed:`_computeInputClasses(_filterInput.min)`},_toClasses:{type:String,computed:`_computeInputClasses(_filterInput.max)`}}}static get observers(){return[`_filterInputChanged(_filterInput.*, autoupdate)`,`_filterChanged(filter.*)`,`_updateLimits(limits, headerFocused)`]}disconnectedCallback(){this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),super.disconnectedCallback()}_computeInputClasses(e){return e!=null&&e!==``?`has-value`:``}toNumber(e,t,n){if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=this.toNumber(t);return i==null?r:n(r,i)}toValue(){return this.toNumber.apply(this,arguments)}getComparableValue(e,t){if(e==null)return;let n=e;return t!=null&&(n=this.get(t,e)),this.toValue(n)}renderValue(){}getInputString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return this._toInputString(n)}_computeRange(e){let t=e.base,n=Array.isArray(t)&&t.length&&t.map(e=>this.toValue(e)).filter(e=>e!=null);return!n||n.length<1?{min:null,max:null}:n.reduce((e,t)=>({min:this.toValue(t,e.min,Math.min),max:this.toValue(t,e.max,Math.max)}),{})}_computeLimit(e,t,n,r){if(!e)return;let i=t.base,a=this.toValue(n),o=this.toValue(r),s=a??this.toValue(e.min),c=o??this.toValue(e.max);return{fromMin:s,fromMax:this.toValue(c,this._fromInputString(i.max,`max`),Math.min),toMin:this.toValue(s,this._fromInputString(i.min,`min`),Math.max),toMax:c}}_computeFilterText(e){if(e.base==null)return;let t=e.base,n=this.toValue(t.min),r=this.toValue(t.max),i=[];return n!=null&&i.push(this.renderValue(n)),i.push(` - `),r!=null&&i.push(this.renderValue(r)),i.length>1?i.join(``):void 0}_computeTooltip(e,t){return t==null?e:`${e}: ${t}`}_fromInputString(e){return this.toValue(e)}_toInputString(e){return this.toValue(e)??null}_getDefaultFilter(){return{min:null,max:null}}_filterInputChanged(e,t){let n=e.path.split(`.`)[1];this.__inputChangePath=n||null,t&&(this._limitInputDebouncer=Ge.debounce(this._limitInputDebouncer,gt.after(600),()=>{this._limitInput(),this._updateFilter()}),rt(this._limitInputDebouncer))}_clearFrom(){this.set(`_filterInput.min`,null),this._updateFilter()}_clearTo(){this.set(`_filterInput.max`,null),this._updateFilter()}_onBlur(){this._limitInput(),this._updateFilter()}_onKeyDown(e){let t=e.currentTarget,n=Array.from(t.parentElement.querySelectorAll(`cosmoz-input`)),r=n[n.findIndex(e=>e===t)+1],i=!r,a=n[0]===t;switch(e.keyCode){case 13:if(e.preventDefault(),!i)r.focus();else{let e=this._limitInput();this._updateFilter(),e||this._closeParent(t)}break;case 9:(i&&!e.shiftKey||a&&e.shiftKey)&&this._closeParent(t)}}_closeParent(e){let t=It(e);t&&t.close()}_onDropdownOpenedChanged({currentTarget:e,type:t,detail:n}){(t===`focus`||n?.value===!0)&&setTimeout(()=>{e.querySelector(`cosmoz-input:focus`)||e.querySelector(`cosmoz-input`)?.focus()},100)}_limitInput(){let e=this._filterInput,t=this.__inputChangePath,n=t?this._fromInputString(this.get(t,e),t):null;if(this.__inputChangePath=null,n==null)return!1;let r=this._limit,i=t===`min`?`from`:`to`,a=this.get(i+`Min`,r),o=this.get(i+`Max`,r),s=this.toValue(n,a,Math.max),c=this.toValue(s,o,Math.min);return this.getComparableValue(n)!==this.getComparableValue(c)&&(this.set([`_filterInput`,t],this._toInputString(c,t)),this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),!0)}_updateFilter(){let e=this._filterInput,t=this.filter,n=this._fromInputString(e.min,`min`),r=this._fromInputString(e.max,`max`);(this.getComparableValue(n)!==this.getComparableValue(t,`min`)||this.getComparableValue(r)!==this.getComparableValue(t,`max`))&&this.set(`filter`,{min:n,max:r})}_filterChanged(e){if(this._filterInput==null)return;let t=this._filterInput,n=e.base,r=this._fromInputString(t.min,`min`),i=this._fromInputString(t.max,`max`);(this.getComparableValue(r)!==this.getComparableValue(n,`min`)||this.getComparableValue(i)!==this.getComparableValue(n,`max`))&&(this.set(`_filterInput`,{min:this._toInputString(n.min),max:this._toInputString(n.max)}),this._limitInputDebouncer&&this._limitInputDebouncer.cancel())}hasFilter(){let e=this.filter;return e==null?!1:this.toValue(e.min)!=null||this.toValue(e.max)!=null}resetFilter(){this.filter=this._getDefaultFilter()}_updateLimits(e,t){e&&Promise.resolve(_e(e,{active:t})).then(e=>{let{min:t,max:n}=e??{};Object.assign(this,{...t==null?{}:{min:t},...n==null?{}:{max:n}})})}}})))()}var zt;function Bt(){return(Bt=e((()=>{I(),f(),zt=e=>class extends e{static get template(){return Be`<div id="output" style="position:relative;"></div>`}connectedCallback(){super.connectedCallback();let e=this;c(e.render(),e.$.output)}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n);let r=this;requestAnimationFrame(()=>c(r.render(),r.$.output))}}})))()}var Vt;function Ht(){return(Ht=e((()=>{P(),I(),D(),f(),Ft(),U(),Rt(),Bt(),Vt=class extends Lt(zt(L)){static get properties(){return{currency:{type:String},autodetect:{type:Boolean,value:!1},rates:{type:Object},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, _formatters)`},headerFocused:{type:Boolean,value:!1}}}static get observers(){return[`_valuesChanged(autodetect, currency, values)`]}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return j`
			${d(this.disabled,()=>j`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>j`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Pt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:j`
							<h3>${this.title}</h3>
							<cosmoz-input
								class=${this._fromClasses}
								type="number"
								title=${N(`Minimum amount`)}
								label=${N(`Min amount`)}
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
								title=${N(`Maximum amount`)}
								label=${N(`Max amount`)}
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
		`}_valuesChanged(e,t,n){if(!Array.isArray(n)||n.length<1||!e&&t)return;let r=n.reduce((e,t)=>{if(t.currency){let n=t.currency;e[n]=(e[n]||0)+1}return e},{}),i=Object.keys(r)[0];Object.keys(r).reduce((e,t)=>{let n=Math.max(e,r[t]);return n===r[t]&&(i=t),n},0),this.set(`currency`,i)}toAmount(e,t,n){if(e==null||e===``)return;if(typeof e!=`object`||e.currency==null||e.currency===``)return null;let r=this.toNumber(e.amount);if(r==null||Number.isNaN(r))return null;let i={currency:e.currency,amount:r};if(n==null||t==null)return i;let a=this.toAmount(t);if(a==null)return i;let o=this.rates||{},s=i.amount*(o[i.currency]||1),c=a.amount*(o[a.currency]||1);return this.toNumber(s,c,n)===s?i:a}toValue(){return this.toAmount.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n==null)return;let r=this.toNumber(n.amount),i=this.rates;return i==null?r:r*(i[n.currency]||1)}getString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return n===void 0?``:n===null?`Invalid value`:this.renderValue(n)}getCurrency(e,t){let n=this.get(t,e);return n&&n.currency}getFormatter(e,t){let n=e+(t||``)||``,r=this._formatters=this._formatters||{};return r[n]||(r[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),r[n]}renderValue(e){let t=this.toAmount(e);return t==null?``:this.getFormatter(t.currency,this.locale).format(e.amount)}_amountValueChanged(e){let t=e.target.value,n=e.model.item,r=this.get(this.valuePath,n),i={amount:Number(t),currency:r.currency};this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toInputString(e){let t=this.toValue(e);return t==null?null:this.toNumber(t.amount)}_toInputStringAmount(e){let t=this.rates;if(t==null)return this._toInputString(e);let n=this.toValue(e);return n==null?null:(this.toNumber(n.amount)*(t[n.currency]||1)/(t[this.currency]||1)).toFixed(2)}_fromInputString(e,t){let n=this.toNumber(e);if(n!=null)return this.toValue({amount:n,currency:t&&this.get([`filter`,t,`currency`])||this.currency})}},customElements.define(`cosmoz-omnitable-amount-range-input`,Vt)})))()}var W,Ut,Wt,Gt,G,Kt,qt,Jt;function Yt(){return(Yt=e((()=>{pt(),R(),W=(e,t,n)=>{if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=W(t);return i==null?r:n(r,i)},Ut=e=>{let t=W(e);return t==null?null:t.toString()},Wt=({valuePath:e},t)=>{let n=W(e?F(t,e):t);return Ut(n)},Gt=e=>Ut(e)??``,G=({valuePath:e,maximumFractionDigits:t},n)=>{if(n==null)return;let r=e?F(n,e):n,i=W(r);if(i!=null)return t===null?i:W(i.toFixed(t))},Kt=Le((e,t,n)=>{let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}),qt=({valuePath:e,locale:t,minimumFractionDigits:n,maximumFractionDigits:r},i)=>{let a=e?F(i,e):i;if(a==null)return``;let o=W(a);if(o!=null)return Kt(t,n,r).format(o)},Jt=(e,t)=>n=>{let r=G(e,n);if(r==null)return!1;let i=G({...e,valuePath:`min`},t),a=G({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})))()}var K,q,Xt,Zt,Qt,$t,en,tn,nn,rn,an;function on(){return(on=e((()=>{R(),Yt(),K=(e={},t,n,r)=>{if(t==null||t===``)return;if(typeof t!=`object`||t.currency==null||t.currency===``)return null;let i=W(t.amount);if(i==null||Number.isNaN(i))return null;let a={currency:t.currency,amount:i};if(r==null||n==null)return a;let o=K(e,n);if(o==null)return a;let s=a.amount*(e[a.currency]||1),c=o.amount*(e[o.currency]||1);return W(s,c,r)===s?a:o},q=({valuePath:e,rates:t},n)=>{if(n==null)return;let r=n;e!=null&&(r=F(n,e));let i=K(t,r);if(i==null)return;let a=W(i.amount);return t==null||a==null?a:a*(t?.[i.currency]||1)},Xt=(e,t)=>n=>{let r=q(e,n);if(r===void 0)return!1;let i=q({...e,valuePath:`min`},t),a=q({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))},Zt={},Qt=(e,t)=>{let n=e+(t||``)||``;return Zt[n]||(Zt[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),Zt[n]},$t=(e,t,n)=>{let r=K(e,t);return r==null?``:Qt(r.currency,n).format(r.amount)},en=({valuePath:e,rates:t,locale:n},r)=>{let i=K(t,e?F(r,e):void 0);return i===void 0?``:i===null?`Invalid value`:$t(t,i,n)},tn=e=>e?e.amount+e.currency:``,nn=e=>{if(e==null||e===``)return;let t=e.match(/^(-?[\d]+)([\D]+?)$/iu);if(!(!Array.isArray(t)||t.length<0))return{amount:Number(t[1]),currency:t[2]}},rn=({valuePath:e},t)=>e?F(t,e)?.currency:null,an=({valuePath:e},t)=>e?F(t,e)?.amount:void 0})))()}var sn,cn,ln,un,dn,fn,pn;function mn(){return(mn=e((()=>{pt(),A(),sn=Symbol(`column`),cn=e=>{let t=!0,n=e.map(e=>e.name);return e.forEach(e=>{e.name??(t=!1,console.error(`The name attribute needs to be set on all columns! Missing on column`,e))}),e.forEach(e=>{n.indexOf(e.name)!==n.lastIndexOf(e.name)&&(t=!1,console.error(`The name attribute needs to be unique among all columns! Not unique on column`,e))}),t},ln=(e,t)=>{let n=e.valuePath??e.name;return{name:e.name,title:e.title,valuePath:n,groupOn:e.groupOn??n,sortOn:e.sortOn??n,noSort:e.noSort,disabledFiltering:t||e.disabledFiltering,minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,getString:e.getString,getComparableValue:e.getComparableValue,serializeFilter:e.serializeFilter,deserializeFilter:e.deserializeFilter,toXlsxValue:e.toXlsxValue,renderHeader:e.renderHeader,renderCell:e.renderCell,renderEditCell:e.renderEditCell,renderGroup:e.renderGroup,cellTitleFn:e.cellTitleFn,headerTitleFn:e.headerTitleFn,getFilterFn:e.getFilterFn,headerCellClass:e.headerCellClass,cellClass:e.cellClass,editable:e.editable,values:e.values,source:Je(e.computeSource),noLocalFilter:e.noLocalFilter,mini:e.mini,renderMini:e.renderMini,align:e.align,headerAlign:e.headerAlign,loading:e.loading,externalValues:e.externalValues,computeSource:e.computeSource,trueLabel:e.trueLabel,falseLabel:e.falseLabel,valueProperty:e.valueProperty,textProperty:e.textProperty,emptyLabel:e.emptyLabel,emptyValue:e.emptyValue,min:e.min,max:e.max,locale:e.locale,autoupdate:e.autoupdate,maximumFractionDigits:e.maximumFractionDigits,minimumFractionDigits:e.minimumFractionDigits,currency:e.currency,rates:e.rates,autodetect:e.autodetect,ownerTree:e.ownerTree,keyProperty:e.keyProperty,...e.getConfig?.(e),[sn]:e}},un=e=>e.isOmnitableColumn&&!e.hidden,dn=e=>{let t=e.filter(un);return cn(t)?t:[]},fn=(e,t,n)=>(Array.isArray(t)?e.filter(e=>t.includes(e.name)):e.filter(e=>!e.disabled)).map(e=>ln(e,n)),pn=(e,{enabledColumns:t,disabledFiltering:r})=>{let[i,a]=n([]);return g(()=>{let n,i=[],o=e.shadowRoot.querySelector(`#columnsSlot`),s=e=>()=>{let n=o.assignedNodes({flatten:!0});if(e)i=n;else{let e=n.filter(e=>!i.includes(e)),t=i.filter(e=>!n.includes(e)),r=[...e,...t].some(e=>e.isOmnitableColumn);if(i=n,!r)return}a(fn(dn(n),t,r))},c=e=>{cancelAnimationFrame(n),n=requestAnimationFrame(s(e?.type===`cosmoz-column-prop-changed`))};return c(),o.addEventListener(`slotchange`,c),e.addEventListener(`cosmoz-column-prop-changed`,c),()=>{o.removeEventListener(`slotchange`,c),e.removeEventListener(`cosmoz-column-prop-changed`,c),cancelAnimationFrame(n)}},[t,r]),i}})))()}var hn,gn,_n;function J(){return(J=e((()=>{R(),mn(),hn=(e,t)=>Array.isArray(e)?e.map(e=>F(e,t)).filter((e,t,n)=>e!=null&&n.indexOf(e)===t):void 0,gn=({externalValues:e,values:t,valuePath:n},r)=>{if(e)return e;if(typeof t==`function`)return t;if(n!==void 0)return hn(r,n)},_n=(e,t,n,r)=>{let{valuePath:i}=t,a=i===void 0?void 0:F(n,i);if(r===a)return;i!==void 0&&ze(n,i,r);let o={item:n,valuePath:i,value:r,oldValue:a,column:t[sn]};e.dispatchEvent(new CustomEvent(`column-item-changed`,{bubbles:!0,composed:!0,detail:o}))}})))()}var vn;function yn(){return(yn=e((()=>{P(),z(),I(),f(),R(),H(),Ht(),on(),J(),vn=class extends V(L){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},currency:{type:String,notify:!0},autodetect:{type:Boolean,value:!1,notify:!0},rates:{type:Object,notify:!0},width:{type:String,value:`70px`},cellClass:{type:String,value:`amount-cell`},headerCellClass:{type:String,value:`amount-header-cell`},align:{type:String,value:`right`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=q({...e,valuePath:`min`},t),r=q({...e,valuePath:`max`},t);if(n!=null||r!=null)return Xt(e,t)}getString(e,t){return en(e,t)}toXlsxValue(e,t){return en(e,t)}getComparableValue(e,t){return q(e,t)}serializeFilter({rates:e},t){if(t==null)return;let n=K(e,t.min),r=K(e,t.max);if(n!=null||r!=null)return tn(n)+`~`+tn(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:nn(n[1]),max:nn(n[2])}:null}renderCell(e,{item:t}){return j`<span>${e.getString(e,t)}</span>`}renderEditCell(e,{item:t},n){return j`<cosmoz-input
			compact
			type="number"
			@change=${r=>n({amount:r.target.value,currency:F(t,e.valuePath)?.currency})}
			.value=${an(e,t)}
		>
			<div slot="suffix">${rn(e,t)}</div>
		</cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,rates:a,currency:o,autoupdate:s,autodetect:c,disabledFiltering:l,headerAlign:u,align:d},{filter:f},p,m){return j`<cosmoz-omnitable-amount-range-input
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
		></cosmoz-omnitable-amount-range-input>`}computeSource(e,t){return gn(e,t)}},customElements.define(`cosmoz-omnitable-column-amount`,vn)})))()}var bn,xn,Sn,Cn,wn,Tn,En,Dn,On,kn,An,jn;function Mn(){return(Mn=e((()=>{ge(),Ee(),De(),R(),J(),bn=(e,t)=>{if(!Array.isArray(e))return;let n=[];return e.reduce((e,t)=>Array.isArray(t)?(t.forEach(t=>{e.push(t)}),e):(e.push(t),e),[]).filter((e,r,i)=>{if(i.indexOf(e)!==r)return!1;if(t){let r=F(e,t);if(n.indexOf(r)!==-1)return!1;n.push(r)}return!0})},xn=(e,t,n)=>{if(e==null)return[];if(Array.isArray(e)){let r=bn(e,t);if(!r?.length)return[];let i=n??`label`,a=e=>String(typeof e==`object`&&e?F(e,i??``)??``:e??``);return r.sort((e,t)=>a(e).localeCompare(a(t)))}if(typeof e==`object`){let r=t??`id`,i=n??`label`;return Object.entries(e).map(([e,t])=>({[r]:e,[i]:t})).sort((e,t)=>String(e[i]??``).localeCompare(String(t[i]??``)))}return[]},Sn=(e,t,n)=>Te(t&&F(e,t)).map(k(n)),Cn=({valuePath:e,textProperty:t},n)=>Sn(n,e,t).filter(e=>e!=null).join(`, `),wn=Cn,Tn=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>a=>{let o=k(e),s=Te(F(a,t));return i.some(t=>s.length===0&&k(r||e)(t)===n||s.some(e=>o(e)===o(t)))},En=e=>t=>e(e=>({...e,filter:t})),Dn=e=>t=>e(e=>({...e,headerFocused:t})),On=e=>t=>e(e=>({...e,query:t})),kn=({emptyValue:e,emptyLabel:t,emptyProperty:n,textProperty:r,valueProperty:i},a)=>{let o=xn(a,i,r);return!t||e===void 0||!r||!(n||i)||!o?o:[{[r]:t,[n||i]:e},...o]},An=(e,t)=>kn(e,hn(t,e.valuePath)),jn=e=>class extends e{static get properties(){return{textProperty:{type:String},valueProperty:{type:String},emptyLabel:{type:String},emptyValue:{type:Object},emptyProperty:{type:String}}}getConfig(e){return{emptyProperty:e.emptyProperty}}getString(e,t){return Cn(e,t)}toXlsxValue(e,t){return wn(e,t)}getComparableValue({valuePath:e,valueProperty:t},n){let r=F(n,e);return t==null?r:Te(r).map(k(t)).sort().join(` `)}getFilterFn(e,t){if(t&&Array.isArray(t)&&t.length!==0)return Tn(e,t)}serializeFilter(e,t){return Array.isArray(t)&&t.length===0?null:JSON.stringify(t)}deserializeFilter(e,t){if(t==null)return null;try{return JSON.parse(decodeURIComponent(t))}catch(e){let n=e;return console.error(`Failed to deserialize filter value:`,{error:n?.name,message:n?.message,filterLength:typeof t==`string`?t.length:null}),null}}computeSource(e,t){return e.externalValues||typeof e.values==`function`?async(...t)=>kn(e,await Promise.resolve(_e(e.values,...t))):An(e,t)}}})))()}var Nn,Pn,Fn;function In(){return(In=e((()=>{xe(),Fe(),I(),f(),ge(),De(),Mn(),H(),A(),R(),mn(),Nn=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?ke(t):k(n),a=Te(e&&F(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},Pn=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>{let a=k(e),o=k(r||e),s=new Set(i.filter(e=>e.excluded).map(e=>a(e.item))),c=new Set(i.filter(e=>!e.excluded).map(e=>a(e.item))),l=i.some(e=>e.excluded&&o(e.item)===n),u=i.some(e=>!e.excluded&&o(e.item)===n);return e=>{let n=Te(F(e,t)).map(a);return n.length===0?!l&&(u||c.size===0):!n.some(e=>s.has(e))&&(c.size===0||n.some(e=>c.has(e)))}},Fn=class extends jn(V(L)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return j`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},n){return j`<cosmoz-input
			compact
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${B(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:n},r,i){return j`<cosmoz-autocomplete-excluding
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
			.itemRenderer=${e[sn]?.itemRenderer}
			.value=${t}
			.text=${n}
			.limit=${e.limit}
			@opened-changed=${e=>Dn(r)(e.detail.value)}
			@value-changed=${a(En(r))}
			@text-changed=${a(On(r))}
			>${d(e.loading,()=>j`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-excluding
		>`}getComparableValue(e,t){return Nn(e,t)}getFilterFn(e,t){if(t&&Array.isArray(t)&&t.length!==0)return Pn(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete-excluding`,Fn)})))()}var Ln,Rn;function zn(){return(zn=e((()=>{xe(),Fe(),I(),f(),ge(),De(),Mn(),H(),R(),mn(),Ln=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?ke(t):k(n),a=Te(e&&F(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},Rn=class extends jn(V(L)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return j`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},n){return j`<cosmoz-input
			compact
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${B(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:n},r,i){return j`<cosmoz-autocomplete-ui
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
			.itemRenderer=${e[sn]?.itemRenderer}
			.value=${t}
			.text=${n}
			.limit=${e.limit}
			.onChange=${En(r)}
			@opened-changed=${e=>Dn(r)(e.detail.value)}
			.onText=${On(r)}
			>${d(e.loading,()=>j`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}getComparableValue(e,t){return Ln(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete`,Rn)})))()}var Bn,Vn,Hn,Un,Wn,Gn,Kn,qn,Jn,Yn,Xn,Zn,Qn,$n;function er(){return(er=e((()=>{I(),H(),xe(),pt(),R(),f(),Bn=(e,t)=>t.find(({value:t})=>e===t),Vn=(e,t,n)=>{let r=Bn(t,n);return r?r.text:e},Hn=(e,t,n,r)=>Vn(e,F(t,n),r),Un=({valuePath:e},t,n)=>Bn(F(t,e),n),Wn=e=>t=>{e(e=>({...e,filter:t?.[0]?.value??null}))},Gn=e=>t=>{e(e=>({...e,headerFocused:t}))},Kn=e=>t=>{e(e=>({...e,query:t}))},qn=e=>t=>e(t?.[0]?.value),Jn=({valuePath:e,trueLabel:t,falseLabel:n},r)=>F(r,e)?t:n,Yn=({valuePath:e},t)=>n=>F(n,e)===t,Xn=Je((e,t)=>[{text:e,value:!0},{text:t,value:!1}]),Zn=({valuePath:e,trueLabel:t,falseLabel:n},r)=>e?F(r,e)?t:n:``,Qn=(e,t)=>{try{return JSON.parse(t)}catch{return null}},$n=class extends V(L){static get properties(){return{trueLabel:{type:String,value:`True`},falseLabel:{type:String,value:`False`},flex:{type:String,value:`0`},cellClass:{type:String,value:`boolean-cell`}}}getString(e,t){return Jn(e,t)}renderCell(e,{item:t}){return Jn(e,t)}renderEditCell(e,{item:t},n){let{trueLabel:r,falseLabel:i}=e;return j`<cosmoz-autocomplete
			compact
			mode="select"
			.title=${Hn(e.title,t,e.valuePath,Xn(r,i))}
			.source=${Xn(r,i)}
			.textProperty=${`text`}
			.value=${Un(e,t,Xn(r,i))}
			.onChange=${qn(n)}
			.limit=${1}
			>${d(e.loading,()=>j`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete
		>`}renderHeader(e,{filter:t,query:n},r,i){return j`<cosmoz-autocomplete-ui
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
			>${d(e.loading,()=>j`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}computeSource({trueLabel:e,falseLabel:t}){return Xn(e,t)}getFilterFn(e,t){if(t!=null)return Yn(e,t)}toXlsxValue(e,t){return Zn(e,t)}deserializeFilter(e,t){return Qn(e,t)}},customElements.define(`cosmoz-omnitable-column-boolean`,$n)})))()}var tr;function nr(){return(nr=e((()=>{fe(),Rt(),tr=e=>class extends Lt(e){static get properties(){return{max:{type:Date,value:null},min:{type:Date,value:null},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},formatter:{type:Object,computed:`_computeFormatter(locale)`}}}toDate(e,t,n){if(e==null||e===``)return;let r=e;if(r instanceof Date||(typeof e==`string`&&(r=this.getAbsoluteISOString(r)),r=new Date(r)),Number.isNaN(r.getTime()))return null;if(n==null||t==null)return r;let i=this.toDate(t);if(i==null)return r;let a=this.getComparableValue(r);return n(a,this.getComparableValue(i))===a?r:i}toValue(){return this.toDate.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n!=null)return this.toNumber(n.getTime())}getString(e,t=this.valuePath,n=this.formatter){let r=this.toValue(this.get(t,e));return r===void 0?``:r===null?`Invalid Date`:this.renderValue(r,n)}getAbsoluteISOString(e){return e.length===19?e+this._getTimezoneString(e):e}_getTimezoneString(e){let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`}renderValue(e,t=this.formatter){if(t==null)return;let n=this.toValue(e);if(n!=null)return t.format(n)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(0,10)}_dateValueChanged(e){let t=e.currentTarget.value,n=e.model.item,r=this.get(this.valuePath,n),i=this._fromInputString(t);this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toLocalISOString(e){return we(e)}}})))()}var rr;function ir(){return(ir=e((()=>{P(),I(),D(),f(),nr(),Ft(),U(),Bt(),rr=class extends tr(zt(L)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return j`
			${d(this.disabled,()=>j`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>j`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Pt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:j`
							<h3>${this.title}</h3>
							<cosmoz-input
								type="date"
								label=${N(`From date`)}
								min=${this._toInputString(this._limit.fromMin)}
								max=${this._toInputString(this._limit.fromMax)}
								.value=${this._filterInput?.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-input>
							<cosmoz-input
								type="date"
								label=${N(`Until date`)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
								.value=${this._filterInput?.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-input>
						`})}
				`)}
		`}_fromInputString(e,t){let n=this.toDate(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n}_filterInputChanged(e,t){let n=e.path.split(`.`)[1]&&e.value;n&&n.match(/^0+/u)?this._limitInputDebouncer.cancel():super._filterInputChanged(e,t)}},customElements.define(`cosmoz-omnitable-date-range-input`,rr)})))()}var ar,or,sr,Y,X,cr,lr,ur,dr,fr,pr,mr,hr,gr,_r;function vr(){return(vr=e((()=>{fe(),R(),Yt(),ar=e=>{let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`},or=e=>e.length===19?e+ar(e):e,sr=e=>{if(e==null||e===``)return;let t=e;return!(t instanceof Date)&&(typeof e==`string`&&(t=or(t)),t=ue(t),!t)||Number.isNaN(t.getTime())?null:t},Y=({valuePath:e},t)=>{if(t==null)return;let n=t;e!=null&&(n=F(t,e));let r=sr(n);if(r!=null)return W(r.getTime())},X=(e,t,n)=>{let r=sr(e);if(r==null)return null;if(n==null||t==null)return r;let i=X(t);if(i==null)return r;let a=Y({},r),o=Y({},i);return a==null||o==null||n(a,o)===a?r:i},cr=(e,t)=>{if(t==null)return;let n=X(e);if(n!=null)return t.format(n)},lr={},ur=e=>{let t=e||``;return lr[t]||(lr[t]=new Intl.DateTimeFormat(e||void 0)),lr[t]},dr=({valuePath:e,locale:t},n)=>{let r=F(n,e||``);return r===void 0?``:(r=X(r),r===null?`Invalid Date`:cr(r,ur(t)))},fr=e=>{let t=X(e);if(t==null)return null;let n=we(t);return n==null?null:n.slice(0,10)},pr=({valuePath:e},t)=>fr(F(t,e||``)),mr=(e,t)=>{let n=X(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n},hr=e=>fr(e)??``,gr=({valuePath:e},t)=>{if(!e)return``;let n=X(F(t,e));if(!n)return``;let r=X(we(n));return r?(r.setHours(0,0,0,0),r):``},_r=(e,t)=>n=>{let r=Y(e,n);if(r==null)return!1;let i=Y({...e,valuePath:`min`},t),a=Y({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})))()}var yr;function br(){return(br=e((()=>{P(),I(),f(),H(),ir(),J(),vr(),z(),yr=class extends V(L){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`date-header-cell`},width:{type:String,value:`100px`},minWidth:{type:String,value:`82px`},flex:{type:String,value:`0`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=Y({...e,valuePath:`min`},t),r=Y({...e,valuePath:`max`},t);if(n!=null||r!=null)return _r(e,t)}getString(e,t){return dr(e,t)}toXlsxValue(e,t){return gr(e,t)}getComparableValue(e,t){return Y(e,t)}serializeFilter(e,t){if(t==null)return;let n=X(t.min),r=X(t.max);if(n!=null||r!=null)return hr(n)+`~`+hr(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:X(n[1]),max:X(n[2])}:null}renderCell(e,{item:t}){return j`<div class="omnitable-cell-date">
			${dr(e,t)}
		</div>`}renderEditCell(e,{item:t},n){return j`<cosmoz-input
			compact
			type="date"
			@change=${e=>n(mr(e.target.value))}
			.value=${pr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,disabledFiltering:a,headerAlign:o,align:s},{filter:c},l,u){return j`<cosmoz-omnitable-date-range-input
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
		></cosmoz-omnitable-date-range-input>`}computeSource(e,t){return gn(e,t)}},customElements.define(`cosmoz-omnitable-column-date`,yr)})))()}var xr;function Sr(){return(Sr=e((()=>{I(),D(),f(),nr(),Ft(),U(),Bt(),xr=class extends tr(zt(L)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return j`
			${d(this.disabled,()=>j`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>j`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Pt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:j`
							<h3>${this.title}</h3>
							<cosmoz-datetime-input
								date-label=${N(`From date`)}
								time-label=${N(`From time`)}
								min=${this._toInputString(this._limit.fromMin)}
								max=${this._toInputString(this._limit.fromMax)}
								step=${this.filterStep}
								.value=${this._filterInput?.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-datetime-input>
							<cosmoz-datetime-input
								date-label=${N(`To date`)}
								time-label=${N(`To time`)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
								step=${this.filterStep}
								.value=${this._filterInput?.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-datetime-input>
						`})}
				`)}
		`}_toInputString(e){let t=this.toValue(e);if(t!=null)return this._toLocalISOString(t).slice(0,19)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})}},customElements.define(`cosmoz-omnitable-datetime-range-input`,xr)})))()}var Cr,wr,Tr,Er,Dr,Or;function kr(){return(kr=e((()=>{R(),vr(),Cr={},wr=e=>{let t=e||``;return Cr[t]||(Cr[t]=new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})),Cr[t]},Tr=({valuePath:e,locale:t},n)=>{let r=X(F(n,e||``));return r===void 0?``:r===null?`Invalid Date`:cr(r,wr(t))},Er=({valuePath:e},t)=>e?F(t,e):``,Dr=e=>{let t=X(e);return t==null?``:t.toISOString().slice(0,19).replace(/:/gu,`.`)},Or=e=>{if(e!=null&&e!==``&&typeof e==`string`)return X(e.replace(/\./gu,`:`)+`Z`)}})))()}var Ar;function jr(){return(jr=e((()=>{qe(),z(),I(),f(),H(),Sr(),J(),vr(),kr(),Ar=class extends V(L){static get is(){return`cosmoz-omnitable-column-datetime`}static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`datetime-header-cell`},width:{type:String,value:`210px`},minWidth:{type:String,value:`128px`},flex:{type:String,value:`0`},filterStep:{type:Number,value:1}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=Y({...e,valuePath:`min`},t),r=Y({...e,valuePath:`max`},t);if(n!=null||r!=null)return _r(e,t)}getString(e,t){return Tr(e,t)}toXlsxValue(e,t){return Er(e,t)}getComparableValue(e,t){return Y(e,t)}serializeFilter(e,t){if(t==null)return;let n=X(t.min),r=X(t.max);if(n!=null||r!=null)return Dr(n)+`~`+Dr(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Or(n[1]),max:Or(n[2])}:null}renderCell(e,{item:t}){return Tr(e,t)}renderEditCell(e,{item:t},n){return j`<cosmoz-input
			compact
			type="text"
			@change=${e=>n(mr(e.target.value))}
			.value=${Tr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,filterStep:a,disabledFiltering:o,headerAlign:s,align:c},{filter:l},u,d){return j`<cosmoz-omnitable-datetime-range-input
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
		></cosmoz-omnitable-datetime-range-input>`}computeSource(e,t){return gn(e,t)}},customElements.define(Ar.is,Ar)})))()}var Mr;function Nr(){return(Nr=e((()=>{xe(),Fe(),I(),f(),Mn(),H(),Mr=class extends jn(V(L)){renderCell({valuePath:e,textProperty:t},{item:n}){let r=Sn(n,e,t).map(e=>j`<li>${e}</li>`);return j`
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
		`}renderEditCell(){return`not implemented`}renderHeader(e,{filter:t,query:n},r,i){return j`<cosmoz-autocomplete-ui
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
			>${d(e.loading,()=>j`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		> `}},customElements.define(`cosmoz-omnitable-column-list-horizontal`,Mr)})))()}var Pr,Fr;function Ir(){return(Ir=e((()=>{ye(),Oe(),Ce(),A(),D(),Pr=M`
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
`,Fr=({items:e})=>{let[t,r]=n(!1),i=Array.isArray(e)?e:[],a=u(()=>Math.max(0,i.length-1),[i]);if(i.length===0)return null;let o=i.length>2,s=i[0],c=o&&!t?[]:i.slice(1),l=e=>{e.stopPropagation(),e.preventDefault(),r(e=>!e)};return j`
		<ul>
			<li>
				<span>${s}</span>
			</li>
			<li class="see-more" ?hidden=${!o||t}>
				<a href="#" @click=${l}
					>${N(`and {0} more`,{0:a})}</a
				>
			</li>
			${c.map(e=>j`
					<li>
						<span class="item">${e}</span>
					</li>
				`)}
			<li class="see-less" ?hidden=${!o||!t}>
				<a href="#" @click=${l}>${N(`See less`)}</a>
			</li>
		</ul>
	`},customElements.define(`cosmoz-omnitable-column-list-data`,O(Fr,{styleSheets:[ce(Pr)]}))})))()}var Lr;function Rr(){return(Rr=e((()=>{Ir(),I(),f(),xe(),Mn(),H(),mn(),Lr=class extends jn(V(L)){static get properties(){return{keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,textual:e.textual}}renderCell({valuePath:e,textProperty:t},{item:n}){return j`<cosmoz-omnitable-column-list-data
			.items=${Sn(n,e,t)}
		></cosmoz-omnitable-column-list-data>`}renderEditCell(e,{item:t},n){return j`<cosmoz-input
			compact
			type="text"
			.value=${Cn(e,t)}
			@change=${e=>n(e.target.value.split(/,\s*/gu))}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:n},r,i){return j`<cosmoz-autocomplete-ui
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
			.itemRenderer=${e[sn]?.itemRenderer}
			.value=${t}
			.text=${n}
			.onChange=${En(r)}
			@opened-changed=${e=>Dn(r)(e.detail.value)}
			.onText=${On(r)}
			>${d(e.loading,()=>j`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}},customElements.define(`cosmoz-omnitable-column-list`,Lr)})))()}var zr;function Br(){return(Br=e((()=>{P(),I(),D(),f(),Ft(),U(),Rt(),Bt(),zr=class extends Lt(zt(L)){static get properties(){return{maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},formatter:{type:Object,computed:`_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)`},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},headerFocused:{type:Boolean,value:!1}}}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return j`
			${d(this.disabled,()=>j`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>j`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Pt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:j`
							<h3>${this.title}</h3>
							<cosmoz-input
								class=${this._fromClasses}
								type="number"
								label=${N(`From`)}
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
								label=${N(`To`)}
								.value=${this._filterInput?.max}
								@value-changed=${e=>{this.set(`_filterInput.max`,e.detail.value)}}
								@blur=${e=>this._onBlur(e)}
								@keydown=${e=>this._onKeyDown(e)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
							></cosmoz-input>
						`})}
				`)}
		`}_computeFormatter(e,t,n){let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}getComparableValue(e,t){if(e==null)return;let n=e;if(t!=null&&(n=this.get(t,e)),n=this.toValue(n),n==null)return;let r=this.maximumFractionDigits;return r===null?n:this.toValue(n.toFixed(r))}renderValue(e,t=this.formatter){let n=this.toNumber(e);if(n!=null)return t.format(n)}},customElements.define(`cosmoz-omnitable-number-range-input`,zr)})))()}var Vr;function Hr(){return(Hr=e((()=>{P(),z(),I(),f(),H(),R(),Br(),J(),Yt(),Vr=class extends V(L){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},cellClass:{type:String,value:`number-cell`},width:{type:String,value:`30px`},minWidth:{type:String,value:`30px`},headerCellClass:{type:String,value:`number-header-cell`},maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},align:{type:String,value:`right`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=G({...e,valuePath:`min`},t),r=G({...e,valuePath:`max`},t);if(n!=null||r!=null)return Jt(e,t)}getString(e,t){return qt(e,t)}toXlsxValue({valuePath:e},t){return F(t,e)}getComparableValue(e,t){return G(e,t)}serializeFilter(e,t){if(t==null)return;let n=W(t.min),r=W(t.max);if(n!=null||r!=null)return Gt(n)+`~`+Gt(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:W(n[1]),max:W(n[2])}:null}renderCell(e,{item:t}){return j`<div class="omnitable-cell-number">
			${qt(e,t)}
		</div>`}renderEditCell(e,{item:t},n){return j`<cosmoz-input
			compact
			type="number"
			@change=${e=>n(e.target.value)}
			.value=${Wt(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,maximumFractionDigits:a,minimumFractionDigits:o,autoupdate:s,disabledFiltering:c,headerAlign:l,align:u},{filter:d},f,p){return j`<cosmoz-omnitable-number-range-input
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
		></cosmoz-omnitable-number-range-input>`}computeSource(e,t){return gn(e,t)}},customElements.define(`cosmoz-omnitable-column-number`,Vr)})))()}var Ur;function Wr(){return(Wr=e((()=>{P(),I(),D(),f(),nr(),Ft(),U(),Bt(),Ur=class extends tr(zt(L)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return j`
			${d(this.disabled,()=>j`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>j`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Pt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:j`
							<h3>${this.title}</h3>
							<cosmoz-input
								type="time"
								label=${N(`From time`)}
								step=${this.filterStep}
								.value=${this._filterInput.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-input>
							<cosmoz-input
								type="time"
								label=${N(`Until time`)}
								step=${this.filterStep}
								.value=${this._filterInput.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-input>
						`})}
				`)}
		`}get _fixedDate(){return`1970-01-01`}toDate(e,t,n){let r=typeof e==`string`&&e.length>3&&e.length<=9?this.getAbsoluteISOString(this._fixedDate+`T`+e):e;return super.toDate(r,t,n)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(11,19)}getComparableValue(e,t){if(e==null)return;let n=this._toInputString(t==null?e:this.get(t,e));if(n!=null&&(n=this.toValue(this.getAbsoluteISOString(this._fixedDate+`T`+n)),n!=null))return this.toNumber(n.getTime())}_timeValueChanged(e){let t=e.target.value,n=e.model.item,r=this.toDate(n.date),i=this.toDate(r==null?t:r.toISOString().slice(0,10)+`T`+t);i??(this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,(e=>e).bind(this)))}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})}},customElements.define(`cosmoz-omnitable-time-range-input`,Ur)})))()}var Z,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r;function ei(){return(ei=e((()=>{fe(),R(),vr(),Yt(),Z=(e,t,n)=>{let r=typeof e==`string`&&e.length>3&&e.length<=9?or(`1970-01-01T`+e):e;return X(r,t,n)},Gr={},Kr=e=>{let t=e||``;return Gr[t]||(Gr[t]=new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})),Gr[t]},qr=({valuePath:e,locale:t},n)=>{let r=Z(F(n,e||``));return r===void 0?``:r===null?`Invalid Date`:cr(r,Kr(t))},Jr=(e,t)=>e.valuePath?qr(e,t):``,Yr=e=>{let t=Z(e);if(t==null)return null;let n=we(t);return n&&n.slice(11,19)},Xr=({valuePath:e},t)=>{if(t==null)return;let n=Yr(e==null?t:F(t,e));if(n==null)return;let r=Z(or(`1970-01-01T`+n));return r==null?r:W(r.getTime())},Zr=(e,t)=>n=>{let r=Xr(e,n);if(r==null)return!1;let i=Xr({...e,valuePath:`min`},t),a=Xr({...e,valuePath:`max`},t);return i==null||a==null?!1:!(r<i||r>a)},Qr=e=>{let t=Z(e);return t==null?``:t.toISOString().slice(11,19).replace(/:/gu,`.`)},$r=e=>{if(e!=null&&e!==``)return Z(typeof e==`string`?e.replace(/\./gu,`:`)+`Z`:e)}})))()}var ti;function ni(){return(ni=e((()=>{P(),z(),I(),f(),H(),Wr(),J(),ei(),ti=class extends V(L){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`time-header-cell`},minWidth:{type:String,value:`63px`},width:{type:String,value:`210px`},flex:{type:String,value:`0`},filterStep:{type:String,value:`1`}}}getFilterFn(e,t){let n=Xr({...e,valuePath:`min`},t),r=Xr({...e,valuePath:`max`},t);if(n!=null||r!=null)return Zr(e,t)}getString(e,t){return qr(e,t)}toXlsxValue(e,t){return Jr(e,t)}getComparableValue(e,t){return Xr(e,t)}serializeFilter(e,t){if(t==null)return;let n=Z(t.min),r=Z(t.max);if(n!=null||r!=null)return Qr(n)+`~`+Qr(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:$r(n[1]),max:$r(n[2])}:null}renderCell(e,{item:t}){return qr(e,t)}renderEditCell(e,{item:t},n){return j`<cosmoz-input
			compact
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${qr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,locale:r,filterStep:i,disabledFiltering:a,headerAlign:o,align:s},{filter:c},l,u){return j`<cosmoz-omnitable-time-range-input
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
		></cosmoz-omnitable-time-range-input>`}computeSource(e,t){return gn(e,t)}},customElements.define(`cosmoz-omnitable-column-time`,ti)})))()}function ri(){return(ri=e((()=>{yn(),In(),zn(),er(),br(),jr(),Nr(),Rr(),Hr(),ni()})))()}var ii;function ai(){return(ai=e((()=>{A(),f(),ii=({column:e,item:t,selected:n,folded:r,group:i})=>{if(!e)return E;let a=e.renderGroup??e.renderCell;return a?a(e,{item:t,selected:n,folded:r,group:i}):E},customElements.define(`cosmoz-omnitable-group-row`,O(ii,{useShadowDOM:!1}))})))()}var oi;function si(){return(si=e((()=>{A(),f(),oi=e=>{let{column:t}=e;return r(()=>{let n=0,r=0,i=i=>{e.dispatchEvent(new CustomEvent(`column-resize`,{bubbles:!0,composed:!0,detail:{newWidth:Math.ceil(r+i.pageX-n),column:t}}))},a=()=>{document.removeEventListener(`pointermove`,i),document.removeEventListener(`pointerup`,a)},o=t=>{n=t.pageX,r=e.previousElementSibling.getBoundingClientRect().width,document.addEventListener(`pointermove`,i),document.addEventListener(`pointerup`,a)};return e.addEventListener(`pointerdown`,o),()=>e.removeEventListener(`pointerdown`,o)},[t]),E},customElements.define(`cosmoz-omnitable-resize-nub`,O(oi))})))()}var ci,li,ui,di;function fi(){return(fi=e((()=>{Ve(),A(),ie(),h(),ci=({column:e,on:t,descending:n,setOn:r,setDescending:i})=>{let{name:a,title:o}=e??{};return j`<cosmoz-button
		variant="tertiary"
		class="sg"
		title=${re(o)}
		data-on=${re(a===t&&(n?`desc`:`asc`)||void 0)}
		@click=${e=>{let t=e.currentTarget?.dataset.on;t||(r(a),i(!1)),t===`asc`?i(!0):t===`desc`&&(r(),i(!1))}}
	>
		<span>${o}</span> ${a===t?s({width:`12`,height:`12`}):w({width:`12`,height:`12`})}
	</cosmoz-button>`},li=({columns:e,...t})=>e?.map(e=>ci({column:e,...t})),ui=()=>j`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,groupOn:t,setGroupOn:n,groupOnDescending:r,setGroupOnDescending:i}={})=>li({columns:e?.filter?.(e=>e.groupOn),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`,di=()=>j`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,sortOn:t,setSortOn:n,descending:r,setDescending:i}={})=>li({columns:e?.filter?.(e=>e.sortOn&&!e.noSort),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`})))()}function pi(e,i,{suffix:a=``,read:o,write:s,ready:c=!0,multi:l}={}){let d=t({param:i,suffix:a,link:l?vi:_i,write:s??Se}),f=u(()=>{if(i==null)return!1;if(l){let e=Ze(i+a);return Object.keys(e).length>0}return ft(i+a)!==void 0},[]),[p,m]=n(()=>{if(i==null)return e;if(l){let t=Ze(i+a,o);return Object.keys(t).length>0?t:e}return ft(i+a,o)??e}),h=b(e=>m(t=>{let n=mi(e)?e(t):e;return d.param!=null&&mt(d.link(d.param+d.suffix,n,d.write),null,{notify:!1}),n}),[]);return r(()=>{d.param!=null&&c&&!f&&e!=null&&h(e)},[c]),[p,h]}var mi,hi,gi,_i,vi;function yi(){return(yi=e((()=>{ht(),Ee(),x(),et(),A(),mi=e=>typeof e==`function`,hi=e=>(t,n,r=Se)=>{let i=tt(),a=new URLSearchParams(i.hash.replace(`#`,``));return e(t,n,r,a),`#!`+Object.assign(i,{hash:a}).href.replace(location.origin,``)},gi=e=>e==null||e===``,_i=hi((e,t,n,r)=>gi(n(t))?r.delete(e):r.set(e,n(t))),vi=hi((e,t,n,r)=>{let i=Object.entries(t),a=i.map(n).filter(([,e])=>e!==void 0);if(a.length===0&&i.length>0)return;let o=e;Array.from(r.keys()).filter(e=>e.startsWith(o)).forEach(e=>r.delete(e)),a.forEach(([t,n])=>gi(n)?r.delete(e+t):r.set(e+t,n))})})))()}var bi,xi,Si,Ci,wi;function Ti(){return(Ti=e((()=>{A(),yi(),bi=e=>[!0,`true`,1,`yes`,`on`].includes(e),xi=e=>e===``||(e==null?void 0:bi(e)),Si=(e,t,n)=>b(r=>{e(r),n(e=>({...e,[t]:r}))},[e,t,n]),Ci=(e,t,{settings:n,setSettings:i,resetRef:a,ready:o=!0})=>{let[s,c]=pi(n.sortOn,t,{suffix:`-sortOn`,ready:o}),[l,d]=pi(xi(n.descending),t,{suffix:`-descending`,read:xi,ready:o}),[f,p]=pi(n.groupOn,t,{suffix:`-groupOn`,ready:o}),[m,h]=pi(xi(n.groupOnDescending),t,{suffix:`-groupOnDescending`,read:xi,ready:o}),g=u(()=>e.find(e=>e.name===s),[e,s]),_=u(()=>e.find(e=>e.name===f),[e,f]),v={groupOn:f,setGroupOn:Si(p,`groupOn`,i),groupOnDescending:m,setGroupOnDescending:Si(h,`groupOnDescending`,i),sortOn:s,setSortOn:Si(c,`sortOn`,i),descending:l,setDescending:Si(d,`descending`,i),columns:e},y=u(()=>v,Object.values(v)),x=b(e=>{c(typeof e.sortOn==`string`?e.sortOn:void 0),p(typeof e.groupOn==`string`?e.groupOn:void 0),d(typeof e.descending==`boolean`?e.descending:void 0),h(typeof e.groupOnDescending==`boolean`?e.groupOnDescending:void 0)},[]);return r(()=>void(a.current=x),[]),{...y,sortAndGroup:y,groupOnColumn:_,sortOnColumn:g}},wi=Ae(void 0),customElements.define(`sort-and-group-provider`,wi.Provider),customElements.define(`sort-and-group-consumer`,O(({render:e})=>e(S(wi)),{useShadowDOM:!1}))})))()}var Ei,Di;function Oi(){return(Oi=e((()=>{A(),de(),si(),fi(),Ti(),Ei=({data:e,columns:t,groupOnColumn:n,filters:r,setFilterState:i,sortAndGroup:{sortOn:a,setSortOn:o,descending:s,setDescending:c}={}})=>le(t,e=>e.name,t=>[j`<div
				class="cell ${t.headerCellClass} header-cell"
				align="${t.headerAlign??t.align??`left`}"
				part="cell header-cell cell-${t.name} header-cell-${t.name}"
				?hidden="${t===n}"
				title="${t.headerTitleFn(t)}"
				name="${t.name}"
			>
				${t.renderHeader(t,r[t.name]??{},e=>i(t.name,e),t.source(t,e))}
				${d(!t.noSort,()=>ci({on:a,setOn:o,descending:s,setDescending:c,column:t}))}
			</div>`,j`<cosmoz-omnitable-resize-nub
				.column="${t}"
				name="${t.name}"
			></cosmoz-omnitable-resize-nub>`]),Di=({columns:e,settingsConfig:t,hideSelectAll:n,...r})=>{let i=S(wi);return j`
		${d(e,e=>Ei({columns:e,sortAndGroup:i,...r}))}
		${d(!n,()=>j` <cosmoz-omnitable-settings
					.config=${t}
					part="settings"
				></cosmoz-omnitable-settings>`)}
	`},customElements.define(`cosmoz-omnitable-header-row`,O(Di,{useShadowDOM:!1}))})))()}var ki,Ai;function ji(){return(ji=e((()=>{ye(),Oe(),Ce(),A(),ki=M`
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
`,Ai=({column:e})=>j`
	<div class="label" title="${e.title}" part="item-expand-label">
		${e.title}
	</div>
	<div class="value" part="item-expand-value">
		<slot></slot>
	</div>
`,customElements.define(`cosmoz-omnitable-item-expand-line`,O(Ai,{styleSheets:[ce(ki)]}))})))()}var Mi;function Ni(){return(Ni=e((()=>{A(),f(),ji(),Mi=({columns:e,item:t,selected:n,expanded:r,groupOnColumn:i})=>at(e,e=>j`<cosmoz-omnitable-item-expand-line
				.column=${e}
				?hidden=${e===i}
				exportparts="item-expand-label, item-expand-value"
				>${e.renderCell(e,{item:t,selected:n,expanded:r})}</cosmoz-omnitable-item-expand-line
			>`),customElements.define(`cosmoz-omnitable-item-expand`,O(Mi,{useShadowDOM:!1}))})))()}var Pi,Fi;function Ii(){return(Ii=e((()=>{A(),de(),Pi=(e,t,n)=>e.editable?e.renderEditCell(e,t,n(e,t.item)):e.renderCell(e,t),Fi=({columns:e,groupOnColumn:t,item:n,index:r,selected:i,expanded:a,onItemChange:o})=>le(e,e=>e.name,e=>j`<div
				class="cell itemRow-cell ${e.cellClass??``}"
				align="${e.align??`left`}"
				part="cell itemRow-cell cell-${e.name} itemRow-cell-${e.name}"
				?hidden="${e===t}"
				?editable="${e.editable}"
				title="${e.cellTitleFn(e,n)}"
				name="${e.name}"
			>
				${Pi(e,{item:n,index:r,selected:i,expanded:a},o)}
			</div>`),customElements.define(`cosmoz-omnitable-item-row`,O(Fi,{useShadowDOM:!1}))})))()}var Li,Ri;function zi(){return(zi=e((()=>{ye(),Ce(),Li=M`
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
		box-shadow: inset 0 0 0 1px var(--cz-color-border-primary);
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
		content: '';
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
		content: '';
		display: block;
		bottom: -5px;
		left: -5px;
		right: -5px;
		top: -5px;
	}

	.checkbox:hover {
		box-shadow: inset 0 0 0 1px var(--cz-color-fg-tertiary);
	}

	.checkbox:checked:hover {
		box-shadow: 0 0 2px 4px var(--cz-color-bg-quaternary);
	}

	.checkbox:indeterminate::before {
		content: '';
		position: absolute;
		width: 8px;
		height: 2px;
		left: 4px;
		top: 7px;
		background-color: var(--cz-color-text-brand);
	}
`,Ri=M`
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
		padding-inline: calc(var(--cz-spacing) * 2);
	}

	/* Hairline rules on pseudo-elements stay straight under the rounded
	   row fills. */
	.header::after,
	.itemRow::after {
		content: '';
		position: absolute;
		inset-inline: 0;
		bottom: 0;
		border-bottom: 1px solid var(--cz-color-border-secondary);
		pointer-events: none;
	}
	.header::after {
		inset-inline: calc(var(--cz-spacing) * 2);
	}

	/* Column titles sit a step below the data they head. The header inputs
	   nest in shadow roots (autocompletes wrap theirs), so the step is set
	   through the token their labels read. */
	cosmoz-omnitable-header-row {
		--cz-color-text-secondary: var(--cz-color-text-quaternary);
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
		contain: layout paint;
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
		/* While the header is hovered, a short faint tick marks where a column
		   can be resized; it runs the full height in the brand colour while
		   the tick itself is hovered. */
		background: linear-gradient(
				var(--cz-color-border-secondary),
				var(--cz-color-border-secondary)
			)
			center / 1px 0 no-repeat;
		cursor: ew-resize;
		z-index: 1000;
		user-select: none;
		transition: background-size 120ms;
	}
	.header:hover cosmoz-omnitable-resize-nub {
		background-size: 1px 14px;
	}
	.header cosmoz-omnitable-resize-nub:hover {
		background-image: linear-gradient(
			var(--cz-color-border-brand),
			var(--cz-color-border-brand)
		);
		background-size: 1px 100%;
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
		contain: layout paint;
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
	/* A refresh keeps the current rows readable and only dims them once it
	   takes longer than a quick search. Where the wait is shown, and with what
	   text, is up to the app. */
	.tableContent-scroller {
		transition: opacity var(--cz-duration-fast, 150ms)
			var(--cz-ease-out, ease-out);
	}
	.tableContent-empty.spinner {
		pointer-events: none;
	}
	.tableContent.has-spinner > .tableContent-scroller {
		opacity: 0.5;
		transition: opacity var(--cz-duration-normal, 250ms)
			var(--cz-ease-out, ease-out) 400ms;
	}
	@media (prefers-reduced-motion: reduce) {
		.tableContent-scroller {
			transition: none;
		}
		.tableContent.has-spinner > .tableContent-scroller {
			transition: opacity 0s 400ms;
		}
	}

	/* Empty data set styling: a small icon over a short title and line,
	   centred and quiet, so an empty list doesn't shout. */
	.tableContent-empty {
		position: absolute;
		inset: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: calc(var(--cz-spacing) * 3);
		text-align: center;
		color: var(--cz-color-text-quaternary);
	}
	.tableContent-empty > svg,
	.tableContent-empty > slot > svg {
		width: calc(var(--cz-spacing) * 10);
		height: calc(var(--cz-spacing) * 10);
	}

	.tableContent-empty.has-skeleton {
		flex-direction: row;
		justify-content: stretch;
	}
	.tableContent-empty.overlay {
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
	.tableContent-empty.overlay.has-skeleton {
		align-items: flex-start;
	}
	.tableContent-empty div.tableContent-empty-message {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-bottom: calc(var(--cz-spacing) * 6);
	}
	.tableContent-empty.overlay div.tableContent-empty-message {
		padding-bottom: 0;
	}
	.tableContent-empty p {
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		color: var(--cz-color-text-tertiary);
		margin: 0;
	}
	.tableContent-empty h3 {
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		font-weight: var(--cz-font-weight-semibold);
		color: var(--cz-color-text-secondary);
		white-space: nowrap;
		margin: 0 0 var(--cz-spacing);
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

	/* Rows sit inside the table's edge; a hover or a selection reads as one
	   rounded fill. */
	.itemRow {
		position: relative;
		margin-inline: calc(var(--cz-spacing) * 2);
		border-radius: var(--cz-radius-md);
		font-variant-numeric: tabular-nums;
		transition: background-color 120ms;
	}
	.itemRow-wrapper {
		display: flex;
		align-items: center;
		min-height: calc(var(--cz-spacing) * 10);
		padding-right: calc(var(--cz-spacing) * 2);
	}

	/* A selected row takes the brand tint, so a selection
	   reads at a glance down a long list. */
	.itemRow[selected] {
		background-color: color-mix(
			in oklab,
			var(--cz-color-bg-brand-secondary) 55%,
			transparent
		);
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
		margin: 0 calc(var(--cz-spacing) * 2) var(--cz-spacing);
		padding: calc(var(--cz-spacing) * 3) 4%;
		border-radius: var(--cz-radius-md);
		background-color: var(--cz-color-bg-secondary-subtle);
		box-shadow: inset 0 1px 2px
			color-mix(in oklab, var(--cz-color-black) 4%, transparent);
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
		background-color: var(--cz-color-bg-secondary-subtle);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-semibold);
		color: var(--cz-color-text-primary);
		margin-inline: calc(var(--cz-spacing) * 2);
		border-radius: var(--cz-radius-md);
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

	.cell[align='right'] {
		text-align: right;
	}

	.cell[align='left'] {
		text-align: left;
	}

	.cell[align='center'] {
		text-align: center;
	}

	/* Selection actions float over the list as a raised bar, not a slab
	   across it. The raised shadow is newer than some consumers' tokens. */
	cosmoz-bottom-bar {
		--cz-backdrop-filter-glass: none;
		position: absolute;
		inset-inline: 0;
		bottom: calc(var(--cz-spacing) * 4);
		width: fit-content;
		max-width: calc(100% - var(--cz-spacing) * 8);
		margin-inline: auto;
		border: 0;
		border-radius: var(--cz-radius-xl);
		/* Solid, not glass, and so are its buttons: text over a live blur
		   renders differently from one frame to the next, which breaks
		   screenshot tests of a selection. */
		background: var(--cz-color-bg-primary);
		box-shadow:
			var(--cz-shadow-raised, 0 0 0 1px var(--cz-color-border-secondary)),
			var(--cz-shadow-lg);
		color: var(--cz-color-text-primary);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		z-index: 2;
	}
	cosmoz-bottom-bar::part(bar) {
		height: calc(var(--cz-spacing) * 13);
		gap: calc(var(--cz-spacing) * 2);
		padding-block: 0;
		padding-inline: calc(var(--cz-spacing) * 4) calc(var(--cz-spacing) * 2);
	}
	.mainContainer.bottombar-active .tableContent-scroller {
		padding-bottom: calc(var(--cz-spacing) * 20);
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
	.itemRow[selected]:hover {
		background-color: color-mix(
			in oklab,
			var(--cz-color-bg-brand-secondary) 80%,
			transparent
		);
	}

	.groupRow:hover .checkbox:not(:checked):not(:hover) {
		box-shadow: 0 0 0 2px
			rgb(from var(--cz-color-text-primary) r g b / calc(alpha * 0.75)) inset;
	}
	.groupRow:hover cosmoz-button.expand::part(button):not(:hover),
	.groupRow:hover .expand:not(:hover):not(cosmoz-button),
	.itemRow:hover cosmoz-button.expand::part(button):not(:hover),
	.itemRow:hover .expand:not(:hover):not(cosmoz-button) {
		color: var(--cz-color-fg-secondary);
	}

	${Li}

	@media (hover: hover) {
		.itemRow cosmoz-button.expand:not([aria-expanded]) {
			opacity: 0;
			transition: opacity 120ms;
		}
		.itemRow:is(:hover, :focus-within) cosmoz-button.expand {
			opacity: 1;
		}
	}

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
		color: var(--cz-color-fg-quaternary);
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
	cosmoz-button.sg:not([data-on='desc'])::part(button),
	.sg:not([data-on='desc']):not(cosmoz-button) {
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

	:host([mini]) .itemRow::after {
		display: none;
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
`})))()}var Bi,Vi;function Hi(){return(Hi=e((()=>{Qe(),Bi=e=>{let t=e.replace(/"/gu,`""`);return t.search(/("|,|\n)/gu)>=0?`"`+t+`"`:e},Vi=(e,t,n)=>{let r=e.map(e=>Bi(e.title)).join(`;`)+`
`,i=t.map(t=>e.map(e=>{let n=e.getString(e,t);return n==null?``:Bi(String(n))}).join(`;`)+`
`);i.unshift(r),$e(new File(i,n,{type:`text/csv;charset=utf-8`}))}})))()}var Ui,Wi;function Gi(){return(Gi=e((()=>{dt(),Qe(),Ui=(e,t)=>{let n=e.map(e=>e.title),r=t.map(t=>e.map(e=>e.toXlsxValue(e,t)??``));return r.unshift(n),r},Wi=(e,t,n,r)=>{let i=Ui(e,t),a=new it(n).addSheetFromData(i,r).generate();$e(new File([a],n,{type:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`}))}})))()}var Ki,Q,qi;function $(){return($=e((()=>{Ki=Symbol(`index`),Q=Symbol(`All`),qi=(e,t)=>{if(typeof e.findLastIndex==`function`)return e.findLastIndex(t);for(let n=e.length-1;n>=0;n--)if(t(e[n],n,e))return n;return-1}})))()}var Ji;function Yi(){return(Yi=e((()=>{Ye(),h(),D(),f(),Hi(),Gi(),$(),Ji=({columns:e,selectedItems:t,setSelectedItems:n,csvFilename:r,xlsxFilename:i,xlsxSheetname:a,topPlacement:o,enableSelectAll:s,allSelected:c,allItemsCount:l})=>{let u=t===Q,f=u||t.length>0,p=t!==Q&&s&&c,m=t=>j`<cosmoz-dropdown-menu
			part="extra"
			slot="extra"
			.placement=${o}
		>
			${Ne({slot:`button`})}
			<cosmoz-button
				variant="tertiary"
				@click=${()=>Vi(e,t,r)}
			>
				${N(`Save selected items as CSV`)}
			</cosmoz-button>
			<cosmoz-button
				variant="tertiary"
				@click=${()=>Wi(e,t,i,a)}
			>
				${N(`Save selected items as XLSX`)}
			</cosmoz-button>
			<slot name="download-menu"></slot
		></cosmoz-dropdown-menu>`,h=d(u,()=>l===void 0?N(`All items selected`):N(`All {count} items selected`,{count:l}),()=>N(`{count} selected item`,{count:t===Q?0:t.length}));return j`<cosmoz-bottom-bar
		id="bottomBar"
		?active=${f}
		part="bottomBar"
		exportparts="bar: bottomBar-bar, info: bottomBar-info, buttons: bottomBar-buttons"
	>
		<slot name="info" slot="info">
			${h}
			${d(p,()=>j`&nbsp;<span
							part="select-all-items"
							class="selectAllItems"
							role="button"
							tabindex="0"
							style="cursor: pointer; color: var(--cz-color-text-brand);"
							@click=${()=>n(Q)}
						>
							${N(`Select all items`)}
						</span>`)}
		</slot>
		<slot name="actions" id="actions"></slot>
		<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
		<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
		${d(t!==Q,()=>m(t))}
	</cosmoz-bottom-bar>`}})))()}var Xi;function Zi(){return(Zi=e((()=>{f(),Xi=({allSelected:e,onAllCheckboxChange:t,sortAndGroup:n,dataIsValid:r,data:i,columns:a,filters:o,groupOnColumn:s,setFilterState:c,settingsConfig:l,hideSelectAll:u})=>j`<sort-and-group-provider .value=${n}>
		<div class="header" id="header" part="header">
			${d(!u,()=>j`<input
						class="checkbox all"
						type="checkbox"
						.checked=${e}
						@input=${t}
						?disabled=${!r}
						part="all"
					/>`)}
			${d(u,()=>j` <cosmoz-omnitable-settings
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
	</sort-and-group-provider>`})))()}var Qi,$i,ea;function ta(){return(ta=e((()=>{A(),Qi=ne`
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
`,$i=(e,t)=>{let n=t==null?void 0:e?.[t];return n==null?``:`width: ${n}px; padding: 0 min(3px, ${n/2}px)`},ea=({settingsConfig:e,widths:t})=>{let{columns:n,collapsed:r}=e,i=n.filter(e=>!r.some(t=>t.name===e.name));return j`<div class="skeleton">
		${Array.from({length:5},()=>j`<div>
					<div class="checkbox"></div>
					${i.map(e=>j`<div
								class="cell"
								part=${`cell-${e.name}`}
								name=${e.name}
								style=${$i(t,e.name)}
							></div>`)}
				</div>`)}
	</div>`},customElements.define(`cosmoz-omnitable-skeleton`,O(ea,{styleSheets:[Qi]}))})))()}var na;function ra(){return(ra=e((()=>{A(),ta(),ot(),D(),f(),na=(e,t)=>{let{settingsConfig:n}=e,{processedItems:r,dataIsValid:i,filterIsTooStrict:o,loading:s,displayEmptyGroups:c,compareItemsFn:l,selectedItems:u,setSelectedItems:f,renderItem:p,renderGroup:m,error:h,partWidths:g}=t;return j`${d(!s&&!i&&!h,()=>j`<div class="tableContent-empty">
					<slot name="empty-set-message">
						${lt({width:`40px`,height:`40px`,styles:`fill: currentColor;`})}
						<div class="tableContent-empty-message">
							<h3>${N(`Working set empty`)}</h3>
							<p>${N(`No data to display`)}</p>
						</div>
					</slot>
				</div>`)}
		${d(o,()=>j`<div class="tableContent-empty">
					${lt({width:`40px`,height:`40px`,styles:`fill: currentColor;`})}
					<div>
						<h3>${N(`Filter too strict`)}</h3>
						<p>${N(`No matches for selection`)}</p>
					</div>
				</div>`)}
		${d(s&&!r.length,()=>j`<div class="tableContent-empty overlay has-skeleton">
					<cosmoz-omnitable-skeleton
						.settingsConfig=${n}
						.widths=${g}
					></cosmoz-omnitable-skeleton>
				</div>`)}
		${d(s&&r.length,()=>j`<div class="tableContent-empty overlay spinner"></div>`)}
		${d(h,()=>j`<div class="tableContent-empty overlay">
					${ct({width:`40px`,height:`40px`,styles:`fill: currentColor;`})}
					<div class="tableContent-empty-message">
						<h3>${N(`Error loading data`)}</h3>
						<p>${h.message}</p>
					</div>
				</div>`)}
		<div class="tableContent-scroller" id="scroller" part="scroller">
			<cosmoz-grouped-list
				id="groupedList"
				.data=${r}
				.selectedItems=${u}
				@selected-items-changed=${a(f)}
				.displayEmptyGroups=${c}
				.compareItemsFn=${l}
				.renderItem=${p}
				.renderGroup=${m}
			></cosmoz-grouped-list>
			<slot name="extraContent"></slot>
		</div>`}})))()}var ia,aa;function oa(){return(oa=e((()=>{ye(),Ce(),zi(),ia=M`
	:host {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		max-height: 60vh;
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
		transition:
			background 0.3s ease,
			box-shadow 0.3s ease;

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

	.sg:not([data-on='desc']) svg {
		transform: scaleY(-1);
	}
`,aa=M`
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
`})))()}var sa,ca;function la(){return(la=e((()=>{x(),A(),sa=e=>{let t=parseInt(e??``,10);return isFinite(t)?t:void 0},ca=e=>{let{config:n}=e,{settings:r,setSettings:i,collapsed:a,requestTween:o}=n,s=t({collapsed:a,settings:r.columns,requestTween:o,setSettings:b(e=>i(t=>({...t,columns:e})),[i])});return{...n,onDown:b(e=>{let t=e.target instanceof Element?e.target:null;t&&t.closest(`.pull`)&&(s.handle=e.currentTarget instanceof HTMLElement?e.currentTarget:null)},[s]),onDragStart:b(e=>{let t=e.target instanceof HTMLElement?e.target:null,n=sa(t?.dataset.index);if(!t||!s.handle?.contains(t)||n==null)return e.preventDefault();s.handle=null,e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`omnitable/sort-index`,String(n)),e.dataTransfer.setData(`text/plain`,String(n)),setTimeout(()=>t.classList.add(`drag`),0),t.addEventListener(`dragend`,e=>{(e.target instanceof HTMLElement?e.target:null)?.classList.remove(`drag`)},{once:!0})},[s]),onDragEnter:b(e=>{let t=e.currentTarget instanceof HTMLElement?e.currentTarget:null;t&&t===e.target&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`,t.classList.add(`dragover`))},[]),onDragOver:b(e=>{e.preventDefault(),e.currentTarget instanceof HTMLElement&&e.currentTarget.classList.add(`dragover`)},[]),onDragLeave:b(e=>{let t=e.currentTarget instanceof HTMLElement?e.currentTarget:null;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||t.classList.remove(`dragover`))},[]),onDrop:b(e=>{let t=sa(e.dataTransfer?.getData(`omnitable/sort-index`)),n=e.currentTarget instanceof HTMLElement?e.currentTarget:null,r=sa(n?.dataset.index),{settings:i,setSettings:a,requestTween:o}=s;n?.classList.remove(`dragover`),e.preventDefault();let c=i.slice();c.splice(r+(t>=r?0:-1),0,c.splice(t,1)[0]),o?.(),a(c)},[s]),onToggle:b(e=>{let{settings:t,setSettings:n,requestTween:r}=s,i=t.map(e=>({...e,disabled:e.disabled||s.collapsed?.some(t=>t.name===e.name)})),a=e.target instanceof HTMLInputElement?e.target:null,o=sa((e.target instanceof Element?e.target:null)?.closest(`[data-index]`)?.getAttribute(`data-index`));o!=null&&(i.splice(o,1,{...t[o],disabled:!a?.checked,priority:a?.checked?t.reduce((e,t)=>Math.max(e,t.priority??0),0)+1:t[o]?.priority}),r?.(),n(i))},[s])}}})))()}var ua,da,fa,pa;function ma(){return(ma=e((()=>{Ve(),ut(),Re(),h(),Oe(),Ce(),be(),A(),D(),fi(),oa(),la(),ua=[st({apply({availableHeight:e,elements:t}){Object.assign(t.floating.style,{maxHeight:`${Math.max(0,e)}px`})}}),...Xe],da=({onDragStart:e,onDragEnter:t,onDragOver:n,onDragLeave:r,onDrop:i,onDown:a,onToggle:o,collapsed:s,filters:c})=>(l,u)=>{let d=!!s?.find(e=>e.name===l.name),f=!l.disabled&&!d;return j` <div
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
				aria-label=${N(`Reorder column`)}
				variant="tertiary"
				icon-only
				class="pull"
				>${m({width:`16`,height:`16`})}</cosmoz-button
			>
			<label class="title" ?has-filter=${!he(c[l.name]?.filter)}
				>${l.title}</label
			>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${f}
				@click=${o}
				.indeterminate=${d}
			/>
		</div>`},fa=e=>{let{settings:t,settingsId:n,onSave:r,onReset:i,hasChanges:a,canReset:o,opened:c,setOpened:l,...u}=ca(e);return j` <div class="headline">
			<span> ${N(`Sort and filter`)} </span>
			<cosmoz-button
				variant="tertiary"
				aria-label="${N(`Close settings`)}"
				@click=${e=>{let t=e.currentTarget instanceof HTMLElement?e.currentTarget:null;t?.focus(),t?.blur()}}
			>
				${y({width:`16`,height:`16`})}
			</cosmoz-button>
		</div>

		<div class="contents">
			<div
				class="heading"
				?data-opened=${c.columns}
				@click=${()=>l(e=>({...e,columns:!e.columns}))}
				part="columns columns-heading"
			>
				${N(`Columns`)} ${s({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse
				?opened="${c.columns}"
				part="columns columns-content"
			>
				<div class="list">${t.columns?.map(da(u))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${c.sort}
				@click=${()=>l(e=>({...e,sort:!e.sort}))}
			>
				${N(`Sort on`)} ${s({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse ?opened=${c.sort}> ${di()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${c.group}
				@click=${()=>l(e=>({...e,group:!e.group}))}
				part="groups groups-heading"
			>
				${N(`Group on`)} ${s({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse ?opened=${c.group} part="groups groups-heading"
				>${ui()}</cosmoz-collapse
			>
		</div>

		${d(n,()=>j`<div class="buttons">
					<cosmoz-button
						variant="tertiary"
						@click=${i}
						?disabled=${!o}
					>
						${N(`Reset`)}
					</cosmoz-button>
					<cosmoz-button
						variant="primary"
						@click=${r}
						?disabled=${!a}
					>
						${N(`Save`)}
					</cosmoz-button>
				</div>`)}`},customElements.define(`cosmoz-omnitable-settings-ui`,O(fa,{styleSheets:[ce(ia)]})),pa=({config:e,newLayout:t})=>j`
	<cosmoz-dropdown
		.placement="${t?`bottom-start`:`bottom-end`}"
		.middleware="${ua}"
	>
		<div title="${N(`Sort and filter`)}" slot="button">
			${d(t,()=>j`<div class="headerDots">...</div>`,()=>j` ${T({width:`20`,height:`20`,styles:`color: var(--cz-color-text-primary)`})}`)}
			${d(e?.badge,()=>j`<div class="badge"></div>`)}
		</div>
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${e}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`,customElements.define(`cosmoz-omnitable-settings`,O(pa,{styleSheets:[ce(aa)]}))})))()}var ha,ga,_a,va,ya;function ba(){return(ba=e((()=>{De(),ha=[`sortOn`,`descending`,`groupOn`,`groupOnDescending`],ga=e=>t=>typeof t==`object`&&!!t&&`name`in t&&t.name===e,_a=(e=[],t=[],n=[])=>{let r=t.filter(t=>e.some(ga(t.name))),i=e.filter(e=>e.name!=null&&!t.some(ga(e.name))&&!n.some(ga(e.name))),a=n.filter(e=>!t.some(ga(e.name)));return[...r,...a.flatMap(t=>{let n=e.find(e=>e.name===t.name);return n?{...t,title:n.title??t.title??``,minWidth:parseInt(n.minWidth??`0`,10)}:[]}),...i.map(e=>{let{name:t,title:n,priority:r,minWidth:i,width:a,flex:o}=e;return{name:t??``,title:n??``,priority:r??0,minWidth:parseInt(i??`0`,10),width:parseInt(a??`0`,10),flex:parseInt(o??`0`,10)}})]},va=(e,t)=>({...t,...ve(Array.from(ha))(e),columns:e.columns?.map(ve([`name`,`priority`,`width`,`flex`,`disabled`]))??t?.columns}),ya=({columns:e,settings:t,savedSettings:n,initial:r})=>({...Object.fromEntries(ha.flatMap(e=>r?.[e]==null?[]:[[e,r[e]]])),...n?ve(Array.from(ha))(n):{},...t,columns:_a(e,t?.columns,n?.columns)})})))()}var xa;function Sa(){return(Sa=e((()=>{xa=({prefix:e=`omnitable-`}={})=>({write:async(t,n)=>{let r=e+t;try{n?localStorage.setItem(r,JSON.stringify(n)):localStorage.removeItem(r)}catch(e){console.error(e)}},read:async t=>{if(!t)return null;try{let n=localStorage.getItem(e+t);return n==null?null:JSON.parse(n)}catch(e){return console.error(e),null}}})})))()}var Ca,wa;function Ta(){return(Ta=e((()=>{A(),Sa(),Ca=Ae(xa),wa=()=>{let e=S(Ca);return u(()=>e(),[e])}})))()}function Ea(){return(Ea=e((()=>{Ta()})))()}var Da;function Oa(){return(Oa=e((()=>{A(),Ea(),ba(),Da=(e,t,i,a)=>{let[o,s]=n(e?void 0:null),{read:c,write:l}=wa();return r(async()=>{e&&s(await c(e))},[e,c]),{settingsId:e,savedSettings:o,onSave:b(async()=>{if(!e)return;let n=va(t,o);await l(e,n),i(),s(n)},[t,o]),onReset:b(async()=>{i(),e&&o!=null&&(await l(e),s(null)),a?.()},[e,o,l,a]),hasChanges:t!=null,canReset:t!=null||o!=null}}})))()}var ka;function Aa(){return(Aa=e((()=>{A(),mn(),ba(),Oa(),ka=({settingsId:e,host:t})=>{let r=u(()=>Object.fromEntries(ha.map(e=>[e,t[e]])),[]),i=te(),a=b(()=>{i.current?.(r)},[r]),[o,s]=n(),[c,l]=n({columns:!0,sort:!0}),{savedSettings:d,...f}=Da(e,o,s,a),{enabledColumns:p,disabledFiltering:m}=t,h=pn(t,{enabledColumns:p,disabledFiltering:m}),g=u(()=>ya({columns:h,settings:o,savedSettings:d??void 0,initial:r}),[h,o,d]),_=u(()=>g.columns.map(e=>h.find(t=>t.name===e.name)).filter(e=>e!==void 0),[h,...g.columns.map(e=>e.name)]);return{...f,savedSettings:d,opened:c,setOpened:l,settings:g,columns:_,setSettings:s,resetRef:i}}})))()}function ja(){return(ja=e((()=>{ma(),Aa()})))()}var Ma,Na;function Pa(){return(Pa=e((()=>{Ma=e=>Number.isFinite(e)?e:0,Na=(e,t)=>{let n=[],[r,i]=e.reduce(([e,t],{width:n,flex:r})=>[e+n,t+r],[0,0]),a=t-r,o=Ma(a/i),s=0,c=0,l=0;for(let t=0;t<e.length;t++){let{width:i,minWidth:u,flex:d}=e[t];u>i+(a>=0?o*d:i*a/r)?(s+=i,c+=u,l+=d,n[t]=u):d===0&&(s+=i,c+=i,n[t]=i)}r-=s,a=t-c-r,i-=l,o=Ma(a/i);for(let t=0;t<e.length;t++){if(n[t]!=null)continue;let{width:i,flex:s}=e[t],c=a>=0?o*s:i*a/r;n[t]=i+c}return n}})))()}var Fa,Ia,La,Ra,za,Ba,Va;function Ha(){return(Ha=e((()=>{Pa(),$(),Fa=(e,t)=>{let n=qi(e,e=>e!=null&&e>0),r=0,i=0;return t.map((t,a)=>{let o=e[a];if(o==null||o===0)return{name:t.name,kind:`hide`};r+=o;let s=Math.round(r),c=s-i;return i=s,{name:t.name,kind:`width`,width:c,lastVisible:a===n}})},Ia=e=>`.cell[name="${e.name}"]{width: ${e.width}px;padding: 0 min(3px, ${e.width/2}px)}`,La=e=>`cosmoz-omnitable-resize-nub[name="${e}"]{display:none}`,Ra=e=>`cosmoz-omnitable-resize-nub[name="${e}"], .cell[name="${e}"]{display:none}`,za=e=>e.map(e=>{if(e.kind===`hide`)return Ra(e.name);let t=Ia(e);return e.lastVisible?`${t}\n${La(e.name)}`:t}).join(`
`),Ba=(e,t,n)=>{let r=e.filter(e=>!e.hidden),i=r.reduce((e,{width:t})=>e+t,0);if(r.length>1&&i>t)return Ba(r.slice(1),t,n);let a=r.reduce(([e,t],n,r)=>[Math.max(e,n.index),n.index>e?r:t],[-1,-1])[1];return a!==-1&&(r[a].flex=1),Na(r,t).reduce((e,t,n)=>(e[r[n].index]=t,e),Array(n).fill(void 0))},Va=(e,t)=>e.length===0?`.cell {display: none;}`:za(Fa(e,t))})))()}var Ua;function Wa(){return(Wa=e((()=>{A(),Ua=(e,t)=>r(()=>{let n=new ResizeObserver(([e])=>{e.contentRect?.width!==0&&t(e.contentRect.width-104)});return n.observe(e),()=>n.unobserve(e)},[])})))()}var Ga;function Ka(){return(Ka=e((()=>{A(),Wa(),Ga=e=>{let[t,r]=n(()=>e.getBoundingClientRect().width-104);return Ua(e,r),t}})))()}var qa;function Ja(){return(Ja=e((()=>{A(),Ha(),qa=({canvasWidth:e,groupOnColumn:t,layoutColumns:n,config:r})=>u(()=>{if(!Array.isArray(r)||e==null||e===0)return[];let i=r.map((e,n)=>({minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,name:e.name,index:n,hidden:e.name===t?.name||e.disabled})).map(e=>n==null?e:{...e,hidden:!n.includes(e.name)}).sort(({index:e,priority:t},{index:n,priority:r})=>t===r?n-e:t-r);return Ba(i,e,i.length)},[e,t,r])})))()}var Ya;function Xa(){return(Xa=e((()=>{A(),Ya=({host:e,canvasWidth:t,columns:n})=>{let i=e.miniBreakpoint??480,a=u(()=>t<=i,[t,i]),o=u(()=>a?n?.filter(e=>e.mini!=null).sort((e,t)=>(e.mini??0)-(t.mini??0)):[],[n,a]),s=u(()=>o.slice(1),[o]),c=o[0],l=!!c&&e.renderItem==null;return r(()=>{e.toggleAttribute(`mini`,l)},[l]),{isMini:l&&a,hasMiniColumn:l,miniColumn:c,miniColumns:s}}})))()}var Za;function Qa(){return(Qa=e((()=>{A(),Za=({host:e,canvasWidth:t,layout:n,setSettings:i,requestTween:a})=>{let o=te();o.current=e=>{a(),i(r=>{let i=r.columns,{detail:{newWidth:a,column:o}}=e,s=i.findIndex(e=>e.name===o.name),c=[],l=i.reduce((e,t)=>Math.max(e,t.priority),-1/0);for(let e=0;e<n.length;e++)if(c[e]={...i[e]},e<s&&n[e]&&(c[e].width=n[e],c[e].flex=0,c[e].priority=l),e===s){let r=n.reduce((e,t,n)=>n<s&&t?e-t:e,t);c[e].width=Math.min(r,Math.max(a,i[e].minWidth)),c[e].flex=0,c[e].priority=l}return{...r,columns:c}})},r(()=>{let t=e=>o.current?.(e);return e.addEventListener(`column-resize`,t),()=>e.removeEventListener(`column-resize`,t)},[])}})))()}var $a,eo,to;function no(){return(no=e((()=>{Ee(),x(),A(),$a=(e,t)=>{let n=u(()=>{let t=!1,n,r=()=>{t&&(n=requestAnimationFrame(r),e()&&(t=!1))};return{start:()=>{t=!0,cancelAnimationFrame(n),r()},stop:()=>{t=!1,cancelAnimationFrame(n)}}},[]);r(()=>{n.start()},t),r(()=>()=>n.stop(),[])},eo=(e=0,t=0)=>Math.abs(e-t)<.1,to=(e,n=1.9,r=ae,i)=>{let a=t({target:e,speedFactor:n,onConverge:i}),o=b(()=>{if(!a.tween)return a.tween=a.target,r(a.tween),a.onConverge?.(),!0;if(a.target.every((e,t)=>a.tween[t]===e))return r(a.tween),a.onConverge?.(),!0;if(a.tween=a.target.map((e,t)=>eo(a.tween[t],e)?e:(a.tween[t]??0)+((e??0)-(a.tween[t]??0))/a.speedFactor||0),r(a.tween),a.tween.every((e,t)=>e===a.target[t]))return a.onConverge?.(),!0},[]);$a(o,[e])}})))()}var ro,io,ao;function oo(){return(oo=e((()=>{x(),A(),Ha(),Ka(),Ja(),Xa(),Qa(),no(),ro=e=>{let t=u(()=>new CSSStyleSheet,[]);return r(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,t]},[]),t},io=e=>{r(()=>{e.toggleAttribute(`compact`,e.compact===!0)},[e.compact])},ao=({host:e,columns:r,settings:i,setSettings:a,resizeSpeedFactor:o,sortAndGroupOptions:s})=>{let c=Ga(e),{isMini:l,hasMiniColumn:d,miniColumn:f,miniColumns:p}=Ya({host:e,canvasWidth:c,columns:r});io(e);let{groupOnColumn:m}=s,h=d?[f.name]:e.headerColumns??null,g=qa({canvasWidth:c,groupOnColumn:m,layoutColumns:h,config:i.columns}),_=ro(e),v=i.columns.filter((e,t)=>g[t]==null&&e.name!==m?.name&&!e.disabled).map(e=>e.name),y=u(()=>v.map(e=>r.find(t=>t.name===e)),[r,v.join()]),[x,S]=n(1),C=b(()=>S(o??1.9),[o]),ee=b(()=>S(1),[]),w=t({columns:i.columns}),T=te({rules:void 0,widths:[]}).current,[ne,E]=n(void 0),re=e=>E(e.reduce((e,t)=>t.kind===`width`?{...e,[t.name]:t.width}:e,{}));return to(g,x,t=>{let n=Fa(t,w.columns),r=Va(t,w.columns)===`.cell {display: none;}`?`empty`:n.map(e=>e.kind).join(`#`)+`#`+(n.findIndex(e=>e.lastVisible)+1);if(T.rules!==r){_.replaceSync(Va(t,w.columns)),T.rules=r,T.widths=n.map(e=>e.kind===`width`?e.width:void 0),re(n);return}let i=_.cssRules,a=!1;n.forEach((e,t)=>{if(e.kind!==`width`||T.widths[t]===e.width)return;let n=i[t];n.style.width=`${e.width}px`,n.style.padding=`0 min(3px, ${e.width/2}px)`,T.widths[t]=e.width,a=!0}),a&&e.loading&&re(n)},ee),Za({host:e,canvasWidth:c,layout:g,setSettings:e=>a(e(i)),requestTween:C}),{isMini:l,collapsedColumns:y,miniColumns:p,requestTween:C,partWidths:ne}}})))()}var so;function co(){return(co=e((()=>{so=({host:e,...t})=>{let{csvFilename:n=`omnitable.csv`,xlsxFilename:r=`omnitable.xlsx`,xlsxSheetname:i=`Omnitable`,topPlacement:a=`top-end`}=e;return{csvFilename:n,xlsxFilename:r,xlsxSheetname:i,topPlacement:a,...t}}})))()}var lo;function uo(){return(uo=e((()=>{A(),$(),lo=({host:e,selectedItems:t,data:n,dataIsValid:r,columns:i,sortAndGroupOptions:a,collapsedColumns:o,settings:s,filterFunctions:c,settingS:l,filters:d,setFilterState:f,hideSelectAll:p,headerColumns:m,requestTween:h,...g})=>{let _=u(()=>m==null?i:i.filter(e=>m.includes(e.name)),[i,m]),v=t===Q||!!n&&n.length>0&&Array.isArray(t)&&t.length===n.length,y=t=>{if(!(t.target instanceof HTMLInputElement))return;let n=e.shadowRoot.querySelector(`#groupedList`);t.target.checked?n.selectAll():n.deselectAll()},{groupOnColumn:b}=a,x=u(()=>[b,...o,...s.columns.filter(e=>e.disabled)].some(e=>!!e&&!!e.name&&Object.keys(c).includes(e.name)),[c,s,o]);return{allSelected:v,onAllCheckboxChange:y,data:n,dataIsValid:r,columns:_,settingsConfig:u(()=>({...l,collapsed:o,badge:x,filters:d,requestTween:h}),[l,o,x,d,h]),filters:d,groupOnColumn:b,setFilterState:f,hideSelectAll:p,sortAndGroup:a.sortAndGroup,...g}}})))()}var fo,po;function mo(){return(mo=e((()=>{Ve(),h(),A(),D(),fo=e=>e?`groupRow groupRow-folded`:`groupRow`,po=(e,t,{selected:n,folded:r,toggleFold:i,onCheckboxChange:a,groupOnColumn:o,dataIsValid:c})=>j` <div
		class="${fo(r)}"
		part="groupRow groupRow-${t}"
	>
		<input
			class="checkbox"
			type="checkbox"
			.checked=${n}
			.dataItem=${e}
			@input=${a}
			?disabled=${!c}
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
			aria-label=${N(`Expand or collapse`)}
			variant="tertiary"
			icon-only
			class="expand"
			?aria-expanded="${r}"
			@click=${i}
		>
			${s({width:`16`,height:`16`})}
		</cosmoz-button>
	</div>`})))()}var ho;function go(){return(go=e((()=>{f(),ho=({item:e,index:t})=>n=>d((n?.length??0)>0,()=>j`
				<div class="itemRow-minis" part="item-minis">
					${n.map(n=>j`<div
								class="itemRow-mini"
								part="item-mini item-mini-${n.name}"
							>
								${(n.renderMini??n.renderCell)(n,{item:e,index:t})}
							</div>`)}
				</div>
			`)})))()}var _o;function vo(){return(vo=e((()=>{Ve(),h(),be(),A(),D(),go(),_o=(e,t,{selected:n,expanded:r,toggleCollapse:i,columns:a,collapsedColumns:o,miniColumns:c,onItemClick:l,onCheckboxChange:u,onItemChange:d,rowPartFn:f,groupOnColumn:p,dataIsValid:m})=>j`
	<div
		?selected=${n}
		part="${[`itemRow`,`itemRow-${t}`,f?.(e,t)].filter(Boolean).join(` `)}"
		.dataIndex=${t}
		.dataItem=${e}
		class="itemRow"
		@click=${l}
	>
		<div class="itemRow-wrapper" part="itemRow-wrapper">
			<input
				class="checkbox"
				type="checkbox"
				part="checkbox"
				.checked=${n}
				.dataItem=${e}
				@input=${u}
				?disabled=${!m}
			/>
			<cosmoz-omnitable-item-row
				part="itemRow-inner"
				.columns=${a}
				.index=${t}
				.selected=${n}
				.expanded=${r}
				.item=${e}
				.groupOnColumn=${p}
				.onItemChange=${d}
			>
			</cosmoz-omnitable-item-row>
			<cosmoz-button
				aria-label=${N(`Expand or collapse`)}
				variant="tertiary"
				icon-only
				class="expand"
				?hidden="${he(o.length)}"
				?aria-expanded="${r}"
				@click="${i}"
			>
				${s({width:`16`,height:`16`})}
			</cosmoz-button>
		</div>
		${ho({item:e,index:t})(c)}
	</div>
	<cosmoz-omnitable-item-expand
		.columns=${o}
		.item=${e}
		?selected=${n}
		?expanded=${r}
		.groupOnColumn=${p}
		part="item-expand"
	>
	</cosmoz-omnitable-item-expand>
`})))()}var yo,bo,xo;function So(){return(So=e((()=>{A(),mo(),vo(),$(),J(),yo=e=>e instanceof HTMLInputElement,bo=e=>e instanceof HTMLElement,xo=({host:e,error:t,dataIsValid:n,processedItems:i,columns:a,collapsedColumns:o,miniColumns:s,sortAndGroupOptions:c,rowPartFn:l,...d})=>{let{loading:f=!1,displayEmptyGroups:p=!1,compareItemsFn:m}=e,h=e.renderItem??_o,g=e.renderGroup??po,_=te({shiftKey:!1,ctrlKey:!1}),v=b(t=>{if(!yo(t.target))return;let n=t.target,r=n.dataItem,i=n.checked,a=e.shadowRoot.querySelector(`#groupedList`);_.current.shiftKey?a.toggleSelectTo(r,i):_.current.ctrlKey?(n.checked=!0,a.selectOnly(r)):a.toggleSelect(r,i),t.preventDefault(),t.stopPropagation()},[]);r(()=>{let e=({shiftKey:e,ctrlKey:t})=>{_.current={shiftKey:e,ctrlKey:t}};return window.addEventListener(`keydown`,e),window.addEventListener(`keyup`,e),()=>{window.removeEventListener(`keydown`,e),window.removeEventListener(`keyup`,e)}},[]);let y=b(t=>{if(!bo(t.currentTarget))return;let n=t.currentTarget,r=t.composedPath();r.slice(0,r.indexOf(n)).some(e=>e instanceof Element&&e.matches(`a, .checkbox, .expand`))||e.dispatchEvent(new window.CustomEvent(`omnitable-item-click`,{bubbles:!0,composed:!0,detail:{item:n.dataItem,index:n.dataIndex}}))},[]),{groupOnColumn:x}=c,S=b((t,n)=>r=>_n(e,t,n,r),[]);return{...d,processedItems:i,dataIsValid:n,filterIsTooStrict:n&&i.length<1,loading:f,compareItemsFn:m,displayEmptyGroups:p,error:t,renderItem:u(()=>(e,t,r)=>h(e,e[Ki],{...r,columns:a,collapsedColumns:o,miniColumns:s,onItemClick:y,onCheckboxChange:v,onItemChange:S,rowPartFn:l,groupOnColumn:x,dataIsValid:n}),[h,a,o,s,y,v,S,l,x,n]),renderGroup:u(()=>(e,t,r)=>g(e,e[Ki],{...r,columns:a,onCheckboxChange:v,groupOnColumn:x,dataIsValid:n}),[g,a,v,x,n])}}})))()}var Co;function wo(){return(wo=e((()=>{Co=(e,t)=>{if(e===t)return 0;if(e==null)return-1;if(t==null)return 1;let n=typeof e,r=typeof t;return n===`object`&&r===`object`?e.toString()<t.toString()?-1:1:n===`number`&&r===`number`?e-t:n===`string`&&r===`string`?e<t?-1:1:n===`boolean`&&r===`boolean`?e?-1:1:(console.warn(`unsupported sort`,n,e,r,t),0)}})))()}var To,Eo,Do,Oo,ko,Ao;function jo(){return(jo=e((()=>{Ee(),A(),wo(),mn(),yi(),$(),To=(e,t)=>(n,r)=>Co(e(n),e(r))*(t?-1:1),Eo=e=>e.replace(/([a-z0-9])([A-Z])/gu,`$1-$2`).toLowerCase(),Do=(e,t)=>{e&&t&&Object.entries(t).forEach(([t,n])=>{let r=e[sn];r.__ownChange=!0,Object.assign(r,{[t]:n}),r.__ownChange=!1,r.dispatchEvent(new CustomEvent(`${Eo(t)}-changed`,{bubbles:!0,detail:{value:n}}))})},Oo=(e,t)=>Object.assign(e,{[Ki]:t}),ko=Symbol(`unparsed`),Ao=({data:e,columns:t,hashParam:n,sortAndGroupOptions:i,noLocalSort:a,noLocalFilter:o})=>{let{groupOnColumn:s,groupOnDescending:c,sortOnColumn:l,descending:d}=i,f=b(([e,n])=>{let r=t.find(({name:t})=>t===e);return r==null?[e,void 0]:[e,n.filter&&r.serializeFilter(r,n.filter)]},[t]),p=b(([e,n])=>{let r=t.find(({name:t})=>t===e);if(r==null)return[e,{[ko]:n}];let i={filter:r.deserializeFilter(r,n)};return Do(r,i),[e,i]},[t]),[m,h]=pi({},n,{multi:!0,suffix:`-filter--`,write:f,read:p}),g=b((e,n)=>h(r=>{let i=_e(n,r[e]);return Do(t.find(t=>t.name===e),i),{...r,[e]:{...r[e],...i}}}),[t,h]),_=u(()=>Object.values(m).map(e=>e.filter),[m]),v=u(()=>Object.fromEntries(t.map(e=>[e.name,!e.noLocalFilter&&e.getFilterFn(e,m[e.name]?.filter)]).filter(e=>!!e[1])),[t,..._]),y=u(()=>!Array.isArray(e)||e.length===0?[]:Object.entries(v).length===0||o?e.slice():e.filter(e=>Object.values(v).every(t=>t(e))),[e,v,o]),x=u(()=>{if(!a&&!s&&l!=null&&l.sortOn!=null)return y.slice().sort(To(e=>l.getComparableValue({...l,valuePath:l.sortOn},e),d));if(s!=null&&s.groupOn!=null){let e=y.reduce((e,t)=>{let n=s.getComparableValue({...s,valuePath:s.groupOn},t);if(n===void 0)return e;let r=e.find(e=>e.id===n);return r?(r.items.push(t),e):(r={id:n,name:n,items:[t]},[...e,r])},[]);return e.sort(To(e=>s.getComparableValue({...s,valuePath:s.groupOn},e.items[0]),c)),!l||a?e:e.filter(e=>Array.isArray(e.items)).map(e=>(e.items.sort(To(e=>l.getComparableValue({...l,valuePath:l.sortOn},e),d)),e))}return y},[y,s,c,l,d,a]),S=u(()=>{let e=0,t=0,n=[];return x.forEach(r=>{if(`items`in r&&Array.isArray(r.items))Oo(r,t++),r.items.forEach(t=>{Oo(t,e++),n.push(t)});else return Oo(r,e++),n.push(r)},[]),n},[x]);return r(()=>{h(e=>Object.values(e).some(e=>e[ko]!=null)?Object.fromEntries(Object.entries(e).map(([e,t])=>{let n=t[ko];return n==null?[e,t]:p([e,n])})):e)},[p]),{processedItems:x,visibleData:S,filters:m,filterFunctions:v,setFilterState:g}}})))()}var Mo,No,Po;function Fo(){return(Fo=e((()=>{i(),oe(),A(),Mo=e=>{let t=t=>{let n=e.data.indexOf(t);if(n<0)return null;let r=e.data.splice(n,1);if(e.data=e.data.slice(),Array.isArray(r)&&r.length>0)return r[0]},n=(t,n)=>{e.data.splice(t,1,n),e.data=e.data.slice()};return{removeItem:t,removeItems(e){let n=[];for(let r=e.length-1;r>=0;--r){let i=t(e[r]);i!=null&&n.push(i)}return n},replaceItemAtIndex:n,replaceItem(t,r){let i=e.data.indexOf(t);i>-1&&n(i,r)},selectItem(t){e.shadowRoot.querySelector(`#groupedList`).select(t)},selectAll(){e.shadowRoot.querySelector(`#groupedList`).selectAll()},deselectAll(){e.shadowRoot.querySelector(`#groupedList`).deselectAll()},deselectItem(t){e.shadowRoot.querySelector(`#groupedList`).deselect(t)},isItemSelected(t){return e.shadowRoot.querySelector(`#groupedList`).isItemSelected(t)}}},No=e=>{let[t,i]=n(!1);return r(()=>{e&&i(!0)},[e]),t},Po=({host:e,visibleData:t,filters:n,ready:i=!0,...a})=>{let{setFilterState:o}=a,s=u(()=>Mo(e),[]),[c,l]=v(`selectedItems`,[]);je(a,Object.values(a)),je(s,Object.values(s)),r(()=>{let t=e=>{if(!(e instanceof CustomEvent))return;let t=e.detail;o(t.name,e=>({...typeof e==`object`&&e?e:{},...t.state}))};return e.addEventListener(`legacy-filter-changed`,t),()=>e.removeEventListener(`legacy-filter-changed`,t)},[]),C(`visibleData`,t),C(`sortedFilteredGroupedItems`,a.sortedFilteredGroupedItems),C(`sortOn`,a.sortOn),C(`descending`,a.descending),C(`isMini`,a.isMini),C(`settingsReady`,No(i));let d=u(()=>Object.fromEntries(Object.entries(n).filter(([,{filter:e}])=>e!==void 0).map(([e,{filter:t}])=>[e,t])),[n]);return C(`filters`,d,Object.values(d)),{selectedItems:c,setSelectedItems:l}}})))()}var Io;function Lo(){return(Lo=e((()=>{ja(),oo(),co(),uo(),So(),jo(),Fo(),Ti(),Io=e=>{let{hashParam:t,settingsId:n,data:r,resizeSpeedFactor:i,noLocal:a,noLocalSort:o=a,noLocalFilter:s=a,error:c,rowPartFn:l}=e,u=ka({settingsId:n,host:e}),{settings:d,setSettings:f,columns:p,resetRef:m,savedSettings:h}=u,g=h!==void 0,_=Ci(p,t,{settings:d,setSettings:f,resetRef:m,ready:g}),{processedItems:v,visibleData:y,filters:b,setFilterState:x,filterFunctions:S}=Ao({data:r,columns:p,hashParam:t,sortAndGroupOptions:_,noLocalSort:o,noLocalFilter:s}),{isMini:C,collapsedColumns:ee,miniColumns:te,requestTween:w,partWidths:T}=ao({host:e,columns:p,settings:d,setSettings:f,resizeSpeedFactor:i,sortAndGroupOptions:_}),ne=r&&Array.isArray(r)&&r.length>0,{selectedItems:E,setSelectedItems:re}=Po({host:e,visibleData:y,sortedFilteredGroupedItems:v,columns:p,filters:b,setFilterState:x,isMini:C,ready:g,..._}),ie=lo({host:e,selectedItems:E,sortAndGroupOptions:_,dataIsValid:ne,data:r,columns:p,filters:b,collapsedColumns:ee,settings:d,filterFunctions:S,settingS:u,setFilterState:x,hideSelectAll:e.hideSelectAll===!0,headerColumns:e.headerColumns??null,requestTween:w});return{header:ie,list:xo({host:e,error:c,dataIsValid:ne,processedItems:v,selectedItems:E,setSelectedItems:re,columns:p,collapsedColumns:ee,miniColumns:te,sortAndGroupOptions:_,rowPartFn:l,partWidths:T}),footer:so({host:e,selectedItems:E,allSelected:ie.allSelected,setSelectedItems:re,columns:p,enableSelectAll:e.enableSelectAll,allItemsCount:e.allItemsCount})}}})))()}var Ro;function zo(){return(zo=e((()=>{A(),f(),Ro=e=>{let{item:t,index:n,renderFn:r}=e;return t==null||n==null||r==null?E:r(t,n)},customElements.define(`cosmoz-grouped-list-row`,O(Ro,{useShadowDOM:!1}))})))()}var Bo,Vo,Ho;function Uo(){return(Uo=e((()=>{Bo=`input, button, select, a, [tabindex]`,Vo=e=>e.querySelector(Bo),Ho=class{remember(e,t){this.pending?.el!==t&&(this.pending={el:t,index:e})}restore(e){let t=this.pending;if(t==null||t.el.isConnected)return;let n=document.activeElement;if(n!=null&&n!==document.body){this.pending=void 0;return}let r=t.index,i=e.filter(e=>e.bound>=0).sort((e,t)=>Math.abs(e.bound-r)-Math.abs(t.bound-r));for(let e of i){let t=Vo(e.el);if(t!=null){t.focus();break}}this.pending=void 0}}})))()}var Wo,Go,Ko,qo,Jo,Yo,Xo,Zo,Qo;function $o(){return($o=e((()=>{Wo={position:`absolute`,display:`block`,left:`0px`,right:`0px`,visibility:`hidden`},Go={position:`relative`,display:`block`,overflowAnchor:`none`},Ko=e=>{if(e===document.body||e===document.documentElement)return!1;let t=getComputedStyle(e).overflowY;return t===`auto`||t===`scroll`||t===`overlay`},qo=(e,t)=>{let n=0,r=e.length-1,i=-1;for(;n<=r;){let a=Math.floor((n+r)/2);e[a]<=t?(i=a,n=a+1):r=a-1}return i},Jo=(e,t)=>{let n=0,r=e.length-1,i=-1;for(;n<=r;){let a=Math.floor((n+r)/2);e[a]<t?(i=a,n=a+1):r=a-1}return i},Yo=(e,t,n)=>{let{first:r,last:i}=e,a=[];for(let e=r;e<=i&&a.length<n;e++)a.push(e);for(let e=i+1;a.length<n&&e<t;e++)a.push(e);return a},Xo=(e,t)=>{let{first:n,last:r}=e,i=new Map,a=[];for(let e of t)e.bound>=n&&e.bound<=r?i.set(e.bound,e):a.push(e);return[i,a]},Zo=(e,t,n)=>{let r=e.get(n);return r==null?t.shift():(e.delete(n),r)},Qo=(e,t,n)=>{let[r,i]=Xo(e,n),a=new Map,o=i.slice();for(let e of t){let t=Zo(r,o,e);t!=null&&a.set(t,e)}return a}})))()}var es;function ts(){return(ts=e((()=>{zo(),Uo(),$o(),es=class{constructor(e,t){this.parts=[],this.items=[],this.heights=new Map,this.fresh=new Set,this.sum=0,this.samples=0,this.avg=40,this.floor=40,this.offsets=[0],this.dirty=!1,this.total=0,this.visible={first:NaN,last:NaN},this.writtenHeight=0,this.guard=new Ho,this.microQueued=!1,this.root=e,this.payload=t,Object.assign(e.style,Go),this.loop()}setPayload(e){this.payload=e,this.pumpAgain()}pumpAgain(){this.microQueued||(this.microQueued=!0,queueMicrotask(()=>{this.microQueued=!1,this.pump()}))}loop(){requestAnimationFrame(()=>{try{this.pump()}finally{this.loop()}})}pump(){if(!this.root.isConnected)return;this.payload.flatData!==this.items&&this.reset(this.payload.flatData);let e=this.items.length;this.scroller!=null&&this.scroller.isConnected||(this.scroller=this.findScroller());let t=this.scroller?.clientHeight??1/0,n=this.scroller?.scrollTop??0,r=Math.min(e,Math.ceil(t/this.floor)+24+1);this.ensurePool(r),this.reflow(n,t,e),this.applyHeight(),this.dispatchVisible(n,t,e)}reflow(e,t,n){this.ensureOffsets();let r=Math.min(n-1,qo(this.offsets,e)),i=this.offsets[r]??0;this.fresh.clear();for(let r=0;r<4&&(this.ensureOffsets(),this.reconcile(e,t,n));r++)this.invalidate();this.prune(),this.ensureOffsets(),n>0&&this.compensate(r,i)}reconcile(e,t,n){let r=this.bind(this.rangeFor(e,t,n),n);return r=this.place()||r,r=this.measure()||r,this.guard.restore(this.parts),r}compensate(e,t){if(this.scroller==null)return;let n=this.offsets[e]-t;n!==0&&(this.scroller.scrollTop=this.scroller.scrollTop+n)}reset(e){this.items=Array.isArray(e)?e:[],this.invalidate()}prune(){for(let e of this.fresh){if(this.parts.some(t=>t.bound>=0&&this.items[t.bound]===e))continue;let t=this.heights.get(e);t!=null&&(this.heights.delete(e),this.sum-=t,--this.samples,this.avg=this.samples>0?this.sum/this.samples:40,this.invalidate())}}findScroller(){let e=this.root.parentElement;for(;e!=null;){if(Ko(e))return e;e=e.parentElement}}ensurePool(e){for(;this.parts.length<e;){let e=document.createElement(`cosmoz-grouped-list-row`);Object.assign(e.style,Wo),this.root.appendChild(e),this.parts.push({el:e,bound:-1})}for(;this.parts.length>e;){let e=this.parts.pop(),t=document.activeElement;t!=null&&e.el.contains(t)&&this.guard.remember(Math.max(0,e.bound),t),e.el.remove()}}ensureOffsets(){if(!this.dirty)return;let e=this.heights,t=this.offsets,n=this.items.length;t.length=n+1;let r=0;t[0]=r;for(let i=0;i<n;i++)r+=e.get(this.items[i])??this.avg,t[i+1]=r;this.total=r,this.dirty=!1}invalidate(){this.dirty=!0}rangeFor(e,t,n){if(n===0)return{first:1,last:0};let r=this.offsets,i=qo(r,e),a=Math.min(n-1,Jo(r,e+t));return{first:Math.max(0,i-12),last:Math.min(n-1,a+12)}}bind(e,t){let n=this.parts,r=Yo(e,t,n.length),i=Qo(e,r,n),a=!1;for(let e of n){let t=i.get(e);a=(t===void 0?this.release(e):this.bindSlot(e,t))||a}return a}bindSlot(e,t){let n=e.el,r=this.items[t],i=this.payload.renderRow;if(e.bound===t&&n.item===r&&n.renderFn===i&&n.style.visibility===``)return!1;let a=document.activeElement;return a!=null&&n.contains(a)&&this.guard.remember(e.bound>=0?e.bound:t,a),n.item=r,n.index=t,n.renderFn=i,e.bound=t,n.style.visibility!==``&&(n.style.visibility=``),!0}release(e){if(e.bound===-1&&e.el.item==null)return!1;let t=e.el,n=document.activeElement;return e.bound>=0&&n!=null&&t.contains(n)&&this.guard.remember(e.bound,n),t.item=void 0,t.index=void 0,t.renderFn=void 0,e.bound=-1,t.style.visibility!==`hidden`&&(t.style.visibility=`hidden`),!0}place(){let e=!1;for(let t of this.parts){if(t.bound<0)continue;let n=`${this.offsets[t.bound]}px`;t.el.style.top!==n&&(t.el.style.top=n,e=!0)}return e}measure(){let e=!1;for(let t of this.parts){if(t.bound<0)continue;let n=t.el.getBoundingClientRect().height;if(!(n>0))continue;let r=this.items[t.bound];this.heights.get(r)!==n&&(this.track(r,n),e=!0)}return e}track(e,t){let n=this.heights.get(e);n==null?(this.samples+=1,this.sum+=t,t<this.floor&&(this.floor=t)):this.sum+=t-n,this.heights.set(e,t),this.fresh.add(e),this.avg=this.samples>0?this.sum/this.samples:40,this.invalidate()}applyHeight(){this.total!==this.writtenHeight&&(this.writtenHeight=this.total,this.root.style.height=`${this.total}px`)}dispatchVisible(e,t,n){if(n===0){this.announce(-1,-1);return}let r=this.offsets,i=Math.min(n-1,qo(r,e)),a=Math.min(n-1,Jo(r,e+t));this.announce(i,a)}announce(e,t){let n=this.visible;(n.first!==e||n.last!==t)&&(n.first=e,n.last=t,this.root.closest(`cosmoz-grouped-list`)?.dispatchEvent(new CustomEvent(`visibilityChanged`,{bubbles:!0,detail:{first:e,last:t}})))}}})))()}var ns,rs,is;function as(){return(as=e((()=>{f(),ee(),zo(),ts(),ns=class extends Me{constructor(e){super(e)}render(e){return p}update(e,t){let n=t[0];return e.element instanceof HTMLElement&&(this.engine??=new es(e.element,n),this.engine.setPayload(n)),p}},rs=se(ns),is=e=>j`<div class="glist-recycler-viewport" ${rs(e)}></div>`})))()}var os,ss,cs,ls,us,ds,fs,ps,ms;function hs(){return(hs=e((()=>{os={group:Symbol(`group`)},ss=(e,t)=>(t.has(e)||t.set(e,{}),t.get(e)),cs=(e,t)=>!!ss(e,t).expanded,ls=(e,t)=>!!ss(e,t).folded,us=e=>e?e.items instanceof Array:!1,ds=e=>{if(!Array.isArray(e)||e.length===0)return;let t=Array.isArray(e[0]?.items);if(!e.every(e=>Array.isArray(e.items)===t))throw Error(`Data must be homogeneous.`)},fs=(e,t,n)=>{if(Array.isArray(e))return ds(e),e.reduce((e,r)=>{let i=r;return i.items?i.items.length?ss(r,n).folded?e.concat(r):e.concat(r,i.items.map(e=>Object.assign(e,{[os.group]:r}))):t?e.concat(r):e:e.concat(r)},[])},ps=(e,...t)=>typeof e==`function`?e(...t):e,ms=(e,t)=>e===t})))()}var gs;function _s(){return(_s=e((()=>{A(),hs(),gs=()=>{let[e,t]=n(()=>[new WeakMap]);return{setItemState:b((e,n)=>t(([t])=>{let r=ss(e,t);return Object.assign(r,ps(n,r)),[t]}),[]),state:e[0],signal:e}}})))()}var vs;function ys(){return(ys=e((()=>{A(),_s(),hs(),vs=()=>{let{setItemState:e,state:t,signal:n}=gs();return{state:t,signal:n,toggleFold:b((t,n)=>{us(t)&&e(t,e=>({folded:n===void 0?!e.folded:n}))},[]),toggleCollapse:b((t,n)=>{us(t)||e(t,e=>({expanded:n===void 0?!e.expanded:!n}))},[])}}})))()}var bs;function xs(){return(xs=e((()=>{A(),$(),hs(),bs=({compareItemsFn:e,data:t,flatData:i})=>{let[a,o]=v(`selectedItems`,()=>[]),[s,c]=n(),l=b(e=>a===Q||a.includes(e),[a]),u=b(e=>a===Q||(e?.items?.every(l)??!1),[a,l]),d=b(e=>l(e)||u(e),[l,u]),f=b(e=>{let t=e.items??[e];o(e=>e===Q?e:[...e,...t.filter(t=>!e.includes(t))]),c(e)},[]),p=b(e=>{let t=e.items??[e];o(e=>e===Q?(i??[]).filter(e=>!us(e)).filter(e=>!t.includes(e)):e.filter(e=>!t.includes(e))),c(e)},[i]),m=b(e=>{o(e.items?.slice()||[e]),c(e)},[]),h=b(()=>{o(t.flatMap(e=>e.items||e)),c(void 0)},[t]),g=b(()=>{o([]),c(void 0)},[]),_=b((e,t=!d(e))=>t?f(e):p(e),[d]),y=b((t,n)=>{if(!i)return;let r=s?i.findIndex(t=>e(t,s)):-1;if(r<0)return _(t,n);let[a,o]=[r,i.indexOf(t)].sort((e,t)=>e-t);i.slice(a,o+1).forEach((e,t,r)=>{t>0&&t<r.length-1&&us(e)||_(e,n)}),c(t)},[i,e,_]);return r(()=>o(t=>t!==Q&&t.length>0&&i?i.filter(n=>t.find(t=>e(n,t))):t),[i]),{selectedItems:a,isItemSelected:l,isGroupSelected:u,isSelected:d,select:f,deselect:p,selectOnly:m,selectAll:h,deselectAll:g,toggleSelect:_,toggleSelectTo:y}}})))()}var Ss,Cs,ws;function Ts(){return(Ts=e((()=>{i(),A(),f(),zo(),as(),ys(),xs(),hs(),Ss={host:{position:`relative`,display:`flex`,flexDirection:`column`}},Cs=e=>{let{data:t,renderItem:n,renderGroup:r,displayEmptyGroups:i,compareItemsFn:a=ms}=e,{toggleFold:o,toggleCollapse:s,state:c,signal:l}=vs(),d=u(()=>fs(t,i,c),[t,i,l]),{selectedItems:f,isItemSelected:p,isGroupSelected:m,isSelected:h,select:_,deselect:v,selectOnly:y,selectAll:x,deselectAll:S,toggleSelect:C,toggleSelectTo:ee}=bs({compareItemsFn:a,data:t,flatData:d}),te=b((e,t)=>Array.isArray(e.items)?r(e,t,{selected:m(e),folded:ls(e,c),toggleSelect:t=>C(e,typeof t==`boolean`?t:void 0),toggleFold:()=>o(e)}):n(e,t,{selected:p(e),expanded:cs(e,c),toggleSelect:t=>C(e,typeof t==`boolean`?t:void 0),toggleCollapse:()=>s(e)}),[n,r,f,C,l]);g(()=>{Object.assign(e.style,Ss.host)},[]);let w={toggleFold:o,toggleCollapse:s,isItemSelected:p,isGroupSelected:m,isSelected:h,select:_,deselect:v,selectOnly:y,selectAll:x,deselectAll:S,toggleSelect:C,toggleSelectTo:ee};return je(w,Object.values(w)),{renderRow:te,flatData:d}},ws=({renderRow:e,flatData:t})=>t==null?E:is({renderRow:e,flatData:t})})))()}var Es;function Ds(){return(Ds=e((()=>{A(),Ts(),Es=e=>ws(Cs(e)),customElements.define(`cosmoz-grouped-list`,O(Es,{useShadowDOM:!1}))})))()}function Os(){return(Os=e((()=>{Ds()})))()}var ks,As,js;function Ms(){return(Ms=e((()=>{We(),At(),ri(),ai(),Oi(),Ni(),Ii(),A(),He(),f(),pe(),zi(),Yi(),Zi(),ra(),Lo(),$(),Os(),mo(),vo(),ks=e=>window.ShadyCSS?.ApplyShim?.transformCssText?.(e)||e,As=e=>{let{header:t,list:n,footer:r}=Io(e),i=n.loading&&n.processedItems.length>0,a=r.selectedItems===Q||r.selectedItems.length>0;return j`
		<style>
			${me([],()=>ks(Ri))}
		</style>

		<div class="mainContainer${a?` bottombar-active`:``}">
			${Xi(t)}
			<div
				class="tableContent${i?` has-spinner`:``}"
				id="tableContent"
			>
				${na(t,n)}
			</div>
			${Ji(r)}
		</div>

		<div id="columns">
			<slot id="columnsSlot"></slot>
		</div>
	`},customElements.define(`cosmoz-omnitable`,O(As,{observedAttributes:[`hash-param`,`sort-on`,`group-on`,`descending`,`group-on-descending`,`hide-select-all`,`settings-id`,`no-local`,`no-local-sort`,`no-local-filter`,`disabled-filtering`,`loading`,`mini-breakpoint`,`compact`,`inline`,`enable-select-all`]})),js=`
	<slot name="actions" slot="actions"></slot>
`,j(Object.assign([js],{raw:[js]})),Be(Object.assign([js],{raw:[js]}))})))()}export{Ms as t};