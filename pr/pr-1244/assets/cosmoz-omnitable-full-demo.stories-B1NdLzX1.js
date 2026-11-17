import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{$ as t,At as n,Bt as r,C as i,Dt as a,E as o,G as s,Gt as c,I as l,It as u,J as d,Jt as f,Kt as p,L as m,M as h,Mt as g,O as _,Ot as v,P as y,Pt as b,Q as x,Rt as S,S as C,St as ee,Tt as te,U as w,V as T,Vt as ne,Wt as E,X as re,Y as ie,_ as D,_t as O,at as ae,b as oe,bt as se,c as k,ct as ce,d as le,dt as ue,f as de,ft as fe,g as pe,gt as A,h as me,ht as he,i as ge,it as _e,l as ve,lt as ye,mt as be,n as xe,nt as Se,ot as Ce,pt as we,qt as j,r as Te,rt as Ee,s as De,st as Oe,u as ke,ut as Ae,v as M,vt as je,w as Me,xt as Ne,y as N,z as Pe}from"./iframe-BPWFo6xx.js";import{A as Fe,B as P,C as Ie,D as Le,E as Re,F,G as ze,H as Be,I as Ve,J as He,L as Ue,M as We,N as Ge,O as Ke,P as I,R as qe,S as Je,T as Ye,U as Xe,V as L,W as Ze,_ as Qe,a as $e,d as et,f as tt,g as nt,h as rt,j as it,k as at,l as ot,m as st,n as ct,q as lt,r as ut,s as dt,t as ft,u as pt,v as mt,w as ht,x as gt,y as _t,z as vt}from"./dist-ruMHCkuc.js";import{n as yt,t as bt}from"./table-demo-helper-Dj0p9yas.js";var xt;function St(){return(St=e((()=>{A(),xt=()=>j`<style>
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
</style>`,customElements.define(`cz-spinner`,O(xt))})))()}var Ct,wt;function Tt(){return(Tt=e((()=>{h(),ye(),Ce(),A(),Ct=Ae`
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
`,wt=()=>j`
	<style>
		${Ct}
	</style>
	${l({className:`icon`,width:`18`,height:`18`})}
`,customElements.define(`cosmoz-clear-button`,O(wt))})))()}var R,Et,Dt,Ot,kt,z;function B(){return(B=e((()=>{L(),R=({valuePath:e},t)=>P(t,e),Et=R,Dt=R,Ot=({valuePath:e},t)=>n=>{let r=P(n,e);return r!=null&&r.toString().toLowerCase().trim().includes(t.toLowerCase().trim())},kt=(e,t)=>t===``||t==null?null:t,z=e=>class extends e{static get properties(){return{isOmnitableColumn:{type:Boolean,value:!0},title:{type:String},valuePath:{type:String,notify:!0},values:{type:Array,notify:!0},filter:{type:Object},noLocalFilter:{type:Boolean},disabled:{type:Boolean,value:!1,notify:!0},editable:{type:Boolean,notify:!0},loading:{type:Boolean,value:!1,notify:!0},externalValues:{type:Boolean,value:!1,notify:!0},name:{type:String},sortOn:{type:String},groupOn:{type:String},noSort:{type:Boolean,value:!1},disabledFiltering:{type:Boolean,value:!1},width:{type:String,value:`75px`},minWidth:{type:String,value:`40px`},flex:{type:String,value:`1`},cellClass:{type:String,value:`default-cell`},headerCellClass:{type:String,value:`default-header-cell`},priority:{type:Number,value:0},hidden:{type:Boolean,notify:!0},align:{type:String,value:`left`},headerAlign:{type:String,value:null},renderHeader:{type:Function},renderCell:{type:Function},renderEditCell:{type:Function},renderGroup:{type:Function},mini:{type:Number,value:null},renderMini:{type:Function}}}static get observers(){return[`notifyFilterChange(filter)`]}notifyFilterChange(e){this.__ownChange||this.dispatchEvent(new CustomEvent(`legacy-filter-changed`,{detail:{name:this.name,state:this.legacyFilterToState(e)},bubbles:!0}))}legacyFilterToState(e){return{filter:e}}getFilterFn(){}getString(e,t){return R(e,t)}toXlsxValue(e,t){return Et(e,t)}cellTitleFn(e,t){return this.getString(e,t)}headerTitleFn(e){return e.title}serializeFilter(e,t){return kt(e,t)}deserializeFilter(e,t){if(t==null)return null;if(typeof t==`string`)try{return window.decodeURIComponent(t)}catch{return null}return t}getComparableValue(e,t){return Dt(e,t)}computeSource(e,t){return t}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n),this.dispatchEvent(new CustomEvent(`cosmoz-column-prop-changed`,{bubbles:!0}))}}})))()}var At,jt,Mt,Nt,Pt,Ft,It;function Lt(){return(Lt=e((()=>{N(),Tt(),F(),f(),B(),At=e=>t=>e(n=>{if(n.inputValue===void 0&&t.target.value===``)return n;clearTimeout(n.t);let r=setTimeout(()=>e(e=>({...e,filter:e.inputValue})),1e3);return{...n,inputValue:t.target.value,t:r}}),jt=e=>()=>e(e=>({...e,filter:e.inputValue})),Mt=e=>t=>{t.keyCode===13&&(t.preventDefault(),e(e=>({...e,filter:e.inputValue})))},Nt=e=>t=>e(e=>({...e,headerFocused:t.detail.value})),Pt=e=>()=>e(e=>({...e,filter:null,inputValue:null})),Ft=e=>e!=null&&e!==``,It=class extends z(I){static get properties(){return{minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},inputValue:{type:Object,notify:!0}}}getFilterFn(e,t){if(t!=null&&t!==``)return Ot(e,t)}renderCell(e,{item:t}){return j`<span class="default-column">${R(e,t)}</span>`}renderEditCell(e,{item:t},n){return j`<cosmoz-input
			compact
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${R(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,inputValue:n,headerFocused:r},i){return j`<cosmoz-input
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
			${d(!e.disabledFiltering,()=>j`<cosmoz-clear-button
						suffix
						slot="suffix"
						?visible=${Ft(t)}
						light
						@click=${Pt(i)}
					></cosmoz-clear-button>`)}
		</cosmoz-input>`}legacyFilterToState(e){return{filter:e,inputValue:e}}},customElements.define(`cosmoz-omnitable-column`,It)})))()}var Rt,zt,Bt;function V(){return(V=e((()=>{N(),A(),f(),Rt=[`label`,`value`,`slot`,`always-float-label`,`disabled`,`variant`],zt=ne`
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
`,Bt=e=>{let{label:t,value:n,slot:r}=e;e.toggleAttribute(`has-value`,!!n);let i=j`<div
		id="input"
		part="input"
		role="button"
		class="control"
		slot=${r}
	>
		${n||``}
	</div>`;return _(i,{label:t})},customElements.define(`cosmoz-omnitable-dropdown-input`,O(Bt,{observedAttributes:Rt,styleSheets:[zt]}))})))()}var Vt;function Ht(){return(Ht=e((()=>{Xe(),f(),We(),V(),Vt=({title:e,tooltip:t=``,filterText:n=``,onOpenedChanged:r,content:i,align:a=`left`,externalValues:o=null})=>{let s={filtered:!!n,...o!=null&&{[`external-values-${o}`]:!0}};return j`
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
			class=${it({...s,dropdown:!0})}
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
	`}})))()}var Ut,Wt;function Gt(){return(Gt=e((()=>{Ee(),qe(),Fe(),Le(),Ut=e=>e?typeof e.close==`function`?e:Ut(e.parentElement):null,Wt=e=>class extends e{static get properties(){return{disabled:{type:Boolean,value:!1},filter:{type:Object,notify:!0},values:{type:Array,value(){return[]}},headerFocused:{type:Boolean,notify:!0},min:{type:Number,value:null},max:{type:Number,value:null},limits:{type:Function},autoupdate:{type:String,value:!0},locale:{type:String,value:null},align:{type:String,value:`left`},_filterInput:{type:Object,value(){return{min:null,max:null}}},_range:{type:Object,computed:`_computeRange(values.*)`},_limit:{type:Object,computed:`_computeLimit(_range, _filterInput.*, min, max)`,value(){return{}}},_tooltip:{type:String,computed:`_computeTooltip(title, _filterText)`},_fromClasses:{type:String,computed:`_computeInputClasses(_filterInput.min)`},_toClasses:{type:String,computed:`_computeInputClasses(_filterInput.max)`}}}static get observers(){return[`_filterInputChanged(_filterInput.*, autoupdate)`,`_filterChanged(filter.*)`,`_updateLimits(limits, headerFocused)`]}disconnectedCallback(){this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),super.disconnectedCallback()}_computeInputClasses(e){return e!=null&&e!==``?`has-value`:``}toNumber(e,t,n){if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=this.toNumber(t);return i==null?r:n(r,i)}toValue(){return this.toNumber.apply(this,arguments)}getComparableValue(e,t){if(e==null)return;let n=e;return t!=null&&(n=this.get(t,e)),this.toValue(n)}renderValue(){}getInputString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return this._toInputString(n)}_computeRange(e){let t=e.base,n=Array.isArray(t)&&t.length&&t.map(e=>this.toValue(e)).filter(e=>e!=null);return!n||n.length<1?{min:null,max:null}:n.reduce((e,t)=>({min:this.toValue(t,e.min,Math.min),max:this.toValue(t,e.max,Math.max)}),{})}_computeLimit(e,t,n,r){if(!e)return;let i=t.base,a=this.toValue(n),o=this.toValue(r),s=a??this.toValue(e.min),c=o??this.toValue(e.max);return{fromMin:s,fromMax:this.toValue(c,this._fromInputString(i.max,`max`),Math.min),toMin:this.toValue(s,this._fromInputString(i.min,`min`),Math.max),toMax:c}}_computeFilterText(e){if(e.base==null)return;let t=e.base,n=this.toValue(t.min),r=this.toValue(t.max),i=[];return n!=null&&i.push(this.renderValue(n)),i.push(` - `),r!=null&&i.push(this.renderValue(r)),i.length>1?i.join(``):void 0}_computeTooltip(e,t){return t==null?e:`${e}: ${t}`}_fromInputString(e){return this.toValue(e)}_toInputString(e){return this.toValue(e)??null}_getDefaultFilter(){return{min:null,max:null}}_filterInputChanged(e,t){let n=e.path.split(`.`)[1];this.__inputChangePath=n||null,t&&(this._limitInputDebouncer=Ke.debounce(this._limitInputDebouncer,vt.after(600),()=>{this._limitInput(),this._updateFilter()}),at(this._limitInputDebouncer))}_clearFrom(){this.set(`_filterInput.min`,null),this._updateFilter()}_clearTo(){this.set(`_filterInput.max`,null),this._updateFilter()}_onBlur(){this._limitInput(),this._updateFilter()}_onKeyDown(e){let t=e.currentTarget,n=Array.from(t.parentElement.querySelectorAll(`cosmoz-input`)),r=n[n.findIndex(e=>e===t)+1],i=!r,a=n[0]===t;switch(e.keyCode){case 13:if(e.preventDefault(),!i)r.focus();else{let e=this._limitInput();this._updateFilter(),e||this._closeParent(t)}break;case 9:(i&&!e.shiftKey||a&&e.shiftKey)&&this._closeParent(t)}}_closeParent(e){let t=Ut(e);t&&t.close()}_onDropdownOpenedChanged({currentTarget:e,type:t,detail:n}){(t===`focus`||n?.value===!0)&&setTimeout(()=>{e.querySelector(`cosmoz-input:focus`)||e.querySelector(`cosmoz-input`)?.focus()},100)}_limitInput(){let e=this._filterInput,t=this.__inputChangePath,n=t?this._fromInputString(this.get(t,e),t):null;if(this.__inputChangePath=null,n==null)return!1;let r=this._limit,i=t===`min`?`from`:`to`,a=this.get(i+`Min`,r),o=this.get(i+`Max`,r),s=this.toValue(n,a,Math.max),c=this.toValue(s,o,Math.min);return this.getComparableValue(n)!==this.getComparableValue(c)&&(this.set([`_filterInput`,t],this._toInputString(c,t)),this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),!0)}_updateFilter(){let e=this._filterInput,t=this.filter,n=this._fromInputString(e.min,`min`),r=this._fromInputString(e.max,`max`);(this.getComparableValue(n)!==this.getComparableValue(t,`min`)||this.getComparableValue(r)!==this.getComparableValue(t,`max`))&&this.set(`filter`,{min:n,max:r})}_filterChanged(e){if(this._filterInput==null)return;let t=this._filterInput,n=e.base,r=this._fromInputString(t.min,`min`),i=this._fromInputString(t.max,`max`);(this.getComparableValue(r)!==this.getComparableValue(n,`min`)||this.getComparableValue(i)!==this.getComparableValue(n,`max`))&&(this.set(`_filterInput`,{min:this._toInputString(n.min),max:this._toInputString(n.max)}),this._limitInputDebouncer&&this._limitInputDebouncer.cancel())}hasFilter(){let e=this.filter;return e==null?!1:this.toValue(e.min)!=null||this.toValue(e.max)!=null}resetFilter(){this.filter=this._getDefaultFilter()}_updateLimits(e,t){e&&Promise.resolve(_e(e,{active:t})).then(e=>{let{min:t,max:n}=e??{};Object.assign(this,{...t==null?{}:{min:t},...n==null?{}:{max:n}})})}}})))()}var Kt;function qt(){return(qt=e((()=>{F(),f(),Kt=e=>class extends e{static get template(){return Ve`<div id="output" style="position:relative;"></div>`}connectedCallback(){super.connectedCallback();let e=this;c(e.render(),e.$.output)}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n);let r=this;requestAnimationFrame(()=>c(r.render(),r.$.output))}}})))()}var Jt;function Yt(){return(Yt=e((()=>{N(),F(),D(),f(),Ht(),V(),Gt(),qt(),Jt=class extends Wt(Kt(I)){static get properties(){return{currency:{type:String},autodetect:{type:Boolean,value:!1},rates:{type:Object},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, _formatters)`},headerFocused:{type:Boolean,value:!1}}}static get observers(){return[`_valuesChanged(autodetect, currency, values)`]}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return j`
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
					${Vt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:j`
							<h3>${this.title}</h3>
							<cosmoz-input
								class=${this._fromClasses}
								type="number"
								title=${M(`Minimum amount`)}
								label=${M(`Min amount`)}
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
								title=${M(`Maximum amount`)}
								label=${M(`Max amount`)}
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
		`}_valuesChanged(e,t,n){if(!Array.isArray(n)||n.length<1||!e&&t)return;let r=n.reduce((e,t)=>{if(t.currency){let n=t.currency;e[n]=(e[n]||0)+1}return e},{}),i=Object.keys(r)[0];Object.keys(r).reduce((e,t)=>{let n=Math.max(e,r[t]);return n===r[t]&&(i=t),n},0),this.set(`currency`,i)}toAmount(e,t,n){if(e==null||e===``)return;if(typeof e!=`object`||e.currency==null||e.currency===``)return null;let r=this.toNumber(e.amount);if(r==null||Number.isNaN(r))return null;let i={currency:e.currency,amount:r};if(n==null||t==null)return i;let a=this.toAmount(t);if(a==null)return i;let o=this.rates||{},s=i.amount*(o[i.currency]||1),c=a.amount*(o[a.currency]||1);return this.toNumber(s,c,n)===s?i:a}toValue(){return this.toAmount.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n==null)return;let r=this.toNumber(n.amount),i=this.rates;return i==null?r:r*(i[n.currency]||1)}getString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return n===void 0?``:n===null?`Invalid value`:this.renderValue(n)}getCurrency(e,t){let n=this.get(t,e);return n&&n.currency}getFormatter(e,t){let n=e+(t||``)||``,r=this._formatters=this._formatters||{};return r[n]||(r[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),r[n]}renderValue(e){let t=this.toAmount(e);return t==null?``:this.getFormatter(t.currency,this.locale).format(e.amount)}_amountValueChanged(e){let t=e.target.value,n=e.model.item,r=this.get(this.valuePath,n),i={amount:Number(t),currency:r.currency};this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toInputString(e){let t=this.toValue(e);return t==null?null:this.toNumber(t.amount)}_toInputStringAmount(e){let t=this.rates;if(t==null)return this._toInputString(e);let n=this.toValue(e);return n==null?null:(this.toNumber(n.amount)*(t[n.currency]||1)/(t[this.currency]||1)).toFixed(2)}_fromInputString(e,t){let n=this.toNumber(e);if(n!=null)return this.toValue({amount:n,currency:t&&this.get([`filter`,t,`currency`])||this.currency})}},customElements.define(`cosmoz-omnitable-amount-range-input`,Jt)})))()}var H,Xt,Zt,Qt,U,$t,en,tn;function nn(){return(nn=e((()=>{ht(),L(),H=(e,t,n)=>{if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=H(t);return i==null?r:n(r,i)},Xt=e=>{let t=H(e);return t==null?null:t.toString()},Zt=({valuePath:e},t)=>{let n=H(e?P(t,e):t);return Xt(n)},Qt=e=>Xt(e)??``,U=({valuePath:e,maximumFractionDigits:t},n)=>{if(n==null)return;let r=e?P(n,e):n,i=H(r);if(i!=null)return t===null?i:H(i.toFixed(t))},$t=Re((e,t,n)=>{let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}),en=({valuePath:e,locale:t,minimumFractionDigits:n,maximumFractionDigits:r},i)=>{let a=e?P(i,e):i;if(a==null)return``;let o=H(a);if(o!=null)return $t(t,n,r).format(o)},tn=(e,t)=>n=>{let r=U(e,n);if(r==null)return!1;let i=U({...e,valuePath:`min`},t),a=U({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})))()}var W,G,rn,an,on,sn,cn,ln,un,dn,fn;function pn(){return(pn=e((()=>{L(),nn(),W=(e={},t,n,r)=>{if(t==null||t===``)return;if(typeof t!=`object`||t.currency==null||t.currency===``)return null;let i=H(t.amount);if(i==null||Number.isNaN(i))return null;let a={currency:t.currency,amount:i};if(r==null||n==null)return a;let o=W(e,n);if(o==null)return a;let s=a.amount*(e[a.currency]||1),c=o.amount*(e[o.currency]||1);return H(s,c,r)===s?a:o},G=({valuePath:e,rates:t},n)=>{if(n==null)return;let r=n;e!=null&&(r=P(n,e));let i=W(t,r);if(i==null)return;let a=H(i.amount);return t==null||a==null?a:a*(t?.[i.currency]||1)},rn=(e,t)=>n=>{let r=G(e,n);if(r===void 0)return!1;let i=G({...e,valuePath:`min`},t),a=G({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))},an={},on=(e,t)=>{let n=e+(t||``)||``;return an[n]||(an[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),an[n]},sn=(e,t,n)=>{let r=W(e,t);return r==null?``:on(r.currency,n).format(r.amount)},cn=({valuePath:e,rates:t,locale:n},r)=>{let i=W(t,e?P(r,e):void 0);return i===void 0?``:i===null?`Invalid value`:sn(t,i,n)},ln=e=>e?e.amount+e.currency:``,un=e=>{if(e==null||e===``)return;let t=e.match(/^(-?[\d]+)([\D]+?)$/iu);if(!(!Array.isArray(t)||t.length<0))return{amount:Number(t[1]),currency:t[2]}},dn=({valuePath:e},t)=>e?P(t,e)?.currency:null,fn=({valuePath:e},t)=>e?P(t,e)?.amount:void 0})))()}var K,mn,hn,gn,_n,vn,yn;function q(){return(q=e((()=>{ht(),A(),K=Symbol(`column`),mn=e=>{let t=!0,n=e.map(e=>e.name);return e.forEach(e=>{e.name??(t=!1,console.error(`The name attribute needs to be set on all columns! Missing on column`,e))}),e.forEach(e=>{n.indexOf(e.name)!==n.lastIndexOf(e.name)&&(t=!1,console.error(`The name attribute needs to be unique among all columns! Not unique on column`,e))}),t},hn=(e,t)=>{let n=e.valuePath??e.name;return{name:e.name,title:e.title,valuePath:n,groupOn:e.groupOn??n,sortOn:e.sortOn??n,noSort:e.noSort,disabledFiltering:t||e.disabledFiltering,minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,getString:e.getString,getComparableValue:e.getComparableValue,serializeFilter:e.serializeFilter,deserializeFilter:e.deserializeFilter,toXlsxValue:e.toXlsxValue,renderHeader:e.renderHeader,renderCell:e.renderCell,renderEditCell:e.renderEditCell,renderGroup:e.renderGroup,cellTitleFn:e.cellTitleFn,headerTitleFn:e.headerTitleFn,getFilterFn:e.getFilterFn,headerCellClass:e.headerCellClass,cellClass:e.cellClass,editable:e.editable,values:e.values,source:Ye(e.computeSource),noLocalFilter:e.noLocalFilter,mini:e.mini,renderMini:e.renderMini,align:e.align,headerAlign:e.headerAlign,loading:e.loading,externalValues:e.externalValues,computeSource:e.computeSource,trueLabel:e.trueLabel,falseLabel:e.falseLabel,valueProperty:e.valueProperty,textProperty:e.textProperty,emptyLabel:e.emptyLabel,emptyValue:e.emptyValue,min:e.min,max:e.max,locale:e.locale,autoupdate:e.autoupdate,maximumFractionDigits:e.maximumFractionDigits,minimumFractionDigits:e.minimumFractionDigits,currency:e.currency,rates:e.rates,autodetect:e.autodetect,ownerTree:e.ownerTree,keyProperty:e.keyProperty,...e.getConfig?.(e),[K]:e}},gn=e=>e.isOmnitableColumn&&!e.hidden,_n=e=>{let t=e.filter(gn);return mn(t)?t:[]},vn=(e,t,n)=>(Array.isArray(t)?e.filter(e=>t.includes(e.name)):e.filter(e=>!e.disabled)).map(e=>hn(e,n)),yn=(e,{enabledColumns:t,disabledFiltering:r})=>{let[i,a]=n([]);return g(()=>{let n,i=[],o=e.shadowRoot.querySelector(`#columnsSlot`),s=e=>()=>{let n=o.assignedNodes({flatten:!0});if(e)i=n;else{let e=n.filter(e=>!i.includes(e)),t=i.filter(e=>!n.includes(e)),r=[...e,...t].some(e=>e.isOmnitableColumn);if(i=n,!r)return}a(vn(_n(n),t,r))},c=e=>{cancelAnimationFrame(n),n=requestAnimationFrame(s(e?.type===`cosmoz-column-prop-changed`))};return c(),o.addEventListener(`slotchange`,c),e.addEventListener(`cosmoz-column-prop-changed`,c),()=>{o.removeEventListener(`slotchange`,c),e.removeEventListener(`cosmoz-column-prop-changed`,c),cancelAnimationFrame(n)}},[t,r]),i}})))()}var bn,xn,Sn;function J(){return(J=e((()=>{L(),q(),bn=(e,t)=>Array.isArray(e)?e.map(e=>P(e,t)).filter((e,t,n)=>e!=null&&n.indexOf(e)===t):void 0,xn=({externalValues:e,values:t,valuePath:n},r)=>{if(e)return e;if(typeof t==`function`)return t;if(n!==void 0)return bn(r,n)},Sn=(e,t,n,r)=>{let{valuePath:i}=t,a=i===void 0?void 0:P(n,i);if(r===a)return;i!==void 0&&Be(n,i,r);let o={item:n,valuePath:i,value:r,oldValue:a,column:t[K]};e.dispatchEvent(new CustomEvent(`column-item-changed`,{bubbles:!0,composed:!0,detail:o}))}})))()}var Cn;function wn(){return(wn=e((()=>{N(),Tt(),F(),f(),L(),B(),Yt(),pn(),J(),Cn=class extends z(I){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},currency:{type:String,notify:!0},autodetect:{type:Boolean,value:!1,notify:!0},rates:{type:Object,notify:!0},width:{type:String,value:`70px`},cellClass:{type:String,value:`amount-cell`},headerCellClass:{type:String,value:`amount-header-cell`},align:{type:String,value:`right`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=G({...e,valuePath:`min`},t),r=G({...e,valuePath:`max`},t);if(n!=null||r!=null)return rn(e,t)}getString(e,t){return cn(e,t)}toXlsxValue(e,t){return cn(e,t)}getComparableValue(e,t){return G(e,t)}serializeFilter({rates:e},t){if(t==null)return;let n=W(e,t.min),r=W(e,t.max);if(n!=null||r!=null)return ln(n)+`~`+ln(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:un(n[1]),max:un(n[2])}:null}renderCell(e,{item:t}){return j`<span>${e.getString(e,t)}</span>`}renderEditCell(e,{item:t},n){return j`<cosmoz-input
			compact
			type="number"
			@change=${r=>n({amount:r.target.value,currency:P(t,e.valuePath)?.currency})}
			.value=${fn(e,t)}
		>
			<div slot="suffix">${dn(e,t)}</div>
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
		></cosmoz-omnitable-amount-range-input>`}computeSource(e,t){return xn(e,t)}},customElements.define(`cosmoz-omnitable-column-amount`,Cn)})))()}var Tn,En,Dn,On,kn,An,jn,Mn,Nn,Pn,Fn,In;function Ln(){return(Ln=e((()=>{ge(),Ee(),De(),L(),J(),Tn=(e,t)=>{if(!Array.isArray(e))return;let n=[];return e.reduce((e,t)=>Array.isArray(t)?(t.forEach(t=>{e.push(t)}),e):(e.push(t),e),[]).filter((e,r,i)=>{if(i.indexOf(e)!==r)return!1;if(t){let r=P(e,t);if(n.indexOf(r)!==-1)return!1;n.push(r)}return!0})},En=(e,t,n)=>{if(e==null)return[];if(Array.isArray(e)){let r=Tn(e,t);if(!r?.length)return[];let i=n??`label`,a=e=>String(typeof e==`object`&&e?P(e,i??``)??``:e??``);return r.sort((e,t)=>a(e).localeCompare(a(t)))}if(typeof e==`object`){let r=t??`id`,i=n??`label`;return Object.entries(e).map(([e,t])=>({[r]:e,[i]:t})).sort((e,t)=>String(e[i]??``).localeCompare(String(t[i]??``)))}return[]},Dn=(e,t,n)=>Te(t&&P(e,t)).map(k(n)),On=({valuePath:e,textProperty:t},n)=>Dn(n,e,t).filter(e=>e!=null).join(`, `),kn=On,An=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>a=>{let o=k(e),s=Te(P(a,t));return i.some(t=>s.length===0&&k(r||e)(t)===n||s.some(e=>o(e)===o(t)))},jn=e=>t=>e(e=>({...e,filter:t})),Mn=e=>t=>e(e=>({...e,headerFocused:t})),Nn=e=>t=>e(e=>({...e,query:t})),Pn=({emptyValue:e,emptyLabel:t,emptyProperty:n,textProperty:r,valueProperty:i},a)=>{let o=En(a,i,r);return!t||e===void 0||!r||!(n||i)||!o?o:[{[r]:t,[n||i]:e},...o]},Fn=(e,t)=>Pn(e,bn(t,e.valuePath)),In=e=>class extends e{static get properties(){return{textProperty:{type:String},valueProperty:{type:String},emptyLabel:{type:String},emptyValue:{type:Object},emptyProperty:{type:String}}}getConfig(e){return{emptyProperty:e.emptyProperty}}getString(e,t){return On(e,t)}toXlsxValue(e,t){return kn(e,t)}getComparableValue({valuePath:e,valueProperty:t},n){let r=P(n,e);return t==null?r:Te(r).map(k(t)).sort().join(` `)}getFilterFn(e,t){if(t&&Array.isArray(t)&&t.length!==0)return An(e,t)}serializeFilter(e,t){return Array.isArray(t)&&t.length===0?null:JSON.stringify(t)}deserializeFilter(e,t){if(t==null)return null;try{return JSON.parse(decodeURIComponent(t))}catch(e){let n=e;return console.error(`Failed to deserialize filter value:`,{error:n?.name,message:n?.message,filterLength:typeof t==`string`?t.length:null}),null}}computeSource(e,t){return e.externalValues||typeof e.values==`function`?async(...t)=>Pn(e,await Promise.resolve(_e(e.values,...t))):Fn(e,t)}}})))()}var Rn,zn,Bn;function Vn(){return(Vn=e((()=>{xe(),Ie(),F(),f(),ge(),De(),Ln(),B(),A(),L(),q(),Rn=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?ke(t):k(n),a=Te(e&&P(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},zn=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>{let a=k(e),o=k(r||e),s=new Set(i.filter(e=>e.excluded).map(e=>a(e.item))),c=new Set(i.filter(e=>!e.excluded).map(e=>a(e.item))),l=i.some(e=>e.excluded&&o(e.item)===n),u=i.some(e=>!e.excluded&&o(e.item)===n);return e=>{let n=Te(P(e,t)).map(a);return n.length===0?!l&&(u||c.size===0):!n.some(e=>s.has(e))&&(c.size===0||n.some(e=>c.has(e)))}},Bn=class extends In(z(I)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return j`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},n){return j`<cosmoz-input
			compact
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${R(e,t)}
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
			.itemRenderer=${e[K]?.itemRenderer}
			.value=${t}
			.text=${n}
			.limit=${e.limit}
			@opened-changed=${e=>Mn(r)(e.detail.value)}
			@value-changed=${a(jn(r))}
			@text-changed=${a(Nn(r))}
			>${d(e.loading,()=>j`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-excluding
		>`}getComparableValue(e,t){return Rn(e,t)}getFilterFn(e,t){if(t&&Array.isArray(t)&&t.length!==0)return zn(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete-excluding`,Bn)})))()}var Hn,Un;function Wn(){return(Wn=e((()=>{xe(),Ie(),F(),f(),ge(),De(),Ln(),B(),L(),q(),Hn=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?ke(t):k(n),a=Te(e&&P(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},Un=class extends In(z(I)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return j`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},n){return j`<cosmoz-input
			compact
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${R(e,t)}
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
			.itemRenderer=${e[K]?.itemRenderer}
			.value=${t}
			.text=${n}
			.limit=${e.limit}
			.onChange=${jn(r)}
			@opened-changed=${e=>Mn(r)(e.detail.value)}
			.onText=${Nn(r)}
			>${d(e.loading,()=>j`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}getComparableValue(e,t){return Hn(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete`,Un)})))()}var Gn,Kn,qn,Jn,Yn,Xn,Zn,Qn,$n,er,tr,nr,rr,ir;function ar(){return(ar=e((()=>{F(),B(),xe(),ht(),L(),f(),Gn=(e,t)=>t.find(({value:t})=>e===t),Kn=(e,t,n)=>{let r=Gn(t,n);return r?r.text:e},qn=(e,t,n,r)=>Kn(e,P(t,n),r),Jn=({valuePath:e},t,n)=>Gn(P(t,e),n),Yn=e=>t=>{e(e=>({...e,filter:t?.[0]?.value??null}))},Xn=e=>t=>{e(e=>({...e,headerFocused:t}))},Zn=e=>t=>{e(e=>({...e,query:t}))},Qn=e=>t=>e(t?.[0]?.value),$n=({valuePath:e,trueLabel:t,falseLabel:n},r)=>P(r,e)?t:n,er=({valuePath:e},t)=>n=>P(n,e)===t,tr=Ye((e,t)=>[{text:e,value:!0},{text:t,value:!1}]),nr=({valuePath:e,trueLabel:t,falseLabel:n},r)=>e?P(r,e)?t:n:``,rr=(e,t)=>{try{return JSON.parse(t)}catch{return null}},ir=class extends z(I){static get properties(){return{trueLabel:{type:String,value:`True`},falseLabel:{type:String,value:`False`},flex:{type:String,value:`0`},cellClass:{type:String,value:`boolean-cell`}}}getString(e,t){return $n(e,t)}renderCell(e,{item:t}){return $n(e,t)}renderEditCell(e,{item:t},n){let{trueLabel:r,falseLabel:i}=e;return j`<cosmoz-autocomplete
			compact
			mode="select"
			.title=${qn(e.title,t,e.valuePath,tr(r,i))}
			.source=${tr(r,i)}
			.textProperty=${`text`}
			.value=${Jn(e,t,tr(r,i))}
			.onChange=${Qn(n)}
			.limit=${1}
			>${d(e.loading,()=>j`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete
		>`}renderHeader(e,{filter:t,query:n},r,i){return j`<cosmoz-autocomplete-ui
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
			>${d(e.loading,()=>j`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}computeSource({trueLabel:e,falseLabel:t}){return tr(e,t)}getFilterFn(e,t){if(t!=null)return er(e,t)}toXlsxValue(e,t){return nr(e,t)}deserializeFilter(e,t){return rr(e,t)}},customElements.define(`cosmoz-omnitable-column-boolean`,ir)})))()}var or;function sr(){return(sr=e((()=>{fe(),Gt(),or=e=>class extends Wt(e){static get properties(){return{max:{type:Date,value:null},min:{type:Date,value:null},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},formatter:{type:Object,computed:`_computeFormatter(locale)`}}}toDate(e,t,n){if(e==null||e===``)return;let r=e;if(r instanceof Date||(typeof e==`string`&&(r=this.getAbsoluteISOString(r)),r=new Date(r)),Number.isNaN(r.getTime()))return null;if(n==null||t==null)return r;let i=this.toDate(t);if(i==null)return r;let a=this.getComparableValue(r);return n(a,this.getComparableValue(i))===a?r:i}toValue(){return this.toDate.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n!=null)return this.toNumber(n.getTime())}getString(e,t=this.valuePath,n=this.formatter){let r=this.toValue(this.get(t,e));return r===void 0?``:r===null?`Invalid Date`:this.renderValue(r,n)}getAbsoluteISOString(e){return e.length===19?e+this._getTimezoneString(e):e}_getTimezoneString(e){let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`}renderValue(e,t=this.formatter){if(t==null)return;let n=this.toValue(e);if(n!=null)return t.format(n)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(0,10)}_dateValueChanged(e){let t=e.currentTarget.value,n=e.model.item,r=this.get(this.valuePath,n),i=this._fromInputString(t);this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toLocalISOString(e){return we(e)}}})))()}var cr;function lr(){return(lr=e((()=>{N(),F(),D(),f(),sr(),Ht(),V(),qt(),cr=class extends or(Kt(I)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return j`
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
					${Vt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:j`
							<h3>${this.title}</h3>
							<cosmoz-input
								type="date"
								label=${M(`From date`)}
								min=${this._toInputString(this._limit.fromMin)}
								max=${this._toInputString(this._limit.fromMax)}
								.value=${this._filterInput?.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-input>
							<cosmoz-input
								type="date"
								label=${M(`Until date`)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
								.value=${this._filterInput?.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-input>
						`})}
				`)}
		`}_fromInputString(e,t){let n=this.toDate(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n}_filterInputChanged(e,t){let n=e.path.split(`.`)[1]&&e.value;n&&n.match(/^0+/u)?this._limitInputDebouncer.cancel():super._filterInputChanged(e,t)}},customElements.define(`cosmoz-omnitable-date-range-input`,cr)})))()}var ur,dr,fr,Y,X,pr,mr,hr,gr,_r,vr,yr,br,xr,Sr;function Cr(){return(Cr=e((()=>{fe(),L(),nn(),ur=e=>{let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`},dr=e=>e.length===19?e+ur(e):e,fr=e=>{if(e==null||e===``)return;let t=e;return!(t instanceof Date)&&(typeof e==`string`&&(t=dr(t)),t=ue(t),!t)||Number.isNaN(t.getTime())?null:t},Y=({valuePath:e},t)=>{if(t==null)return;let n=t;e!=null&&(n=P(t,e));let r=fr(n);if(r!=null)return H(r.getTime())},X=(e,t,n)=>{let r=fr(e);if(r==null)return null;if(n==null||t==null)return r;let i=X(t);if(i==null)return r;let a=Y({},r),o=Y({},i);return a==null||o==null||n(a,o)===a?r:i},pr=(e,t)=>{if(t==null)return;let n=X(e);if(n!=null)return t.format(n)},mr={},hr=e=>{let t=e||``;return mr[t]||(mr[t]=new Intl.DateTimeFormat(e||void 0)),mr[t]},gr=({valuePath:e,locale:t},n)=>{let r=P(n,e||``);return r===void 0?``:(r=X(r),r===null?`Invalid Date`:pr(r,hr(t)))},_r=e=>{let t=X(e);if(t==null)return null;let n=we(t);return n==null?null:n.slice(0,10)},vr=({valuePath:e},t)=>_r(P(t,e||``)),yr=(e,t)=>{let n=X(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n},br=e=>_r(e)??``,xr=({valuePath:e},t)=>{if(!e)return``;let n=X(P(t,e));if(!n)return``;let r=X(we(n));return r?(r.setHours(0,0,0,0),r):``},Sr=(e,t)=>n=>{let r=Y(e,n);if(r==null)return!1;let i=Y({...e,valuePath:`min`},t),a=Y({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})))()}var wr;function Tr(){return(Tr=e((()=>{N(),F(),f(),B(),lr(),J(),Cr(),Tt(),wr=class extends z(I){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`date-header-cell`},width:{type:String,value:`100px`},minWidth:{type:String,value:`82px`},flex:{type:String,value:`0`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=Y({...e,valuePath:`min`},t),r=Y({...e,valuePath:`max`},t);if(n!=null||r!=null)return Sr(e,t)}getString(e,t){return gr(e,t)}toXlsxValue(e,t){return xr(e,t)}getComparableValue(e,t){return Y(e,t)}serializeFilter(e,t){if(t==null)return;let n=X(t.min),r=X(t.max);if(n!=null||r!=null)return br(n)+`~`+br(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:X(n[1]),max:X(n[2])}:null}renderCell(e,{item:t}){return j`<div class="omnitable-cell-date">
			${gr(e,t)}
		</div>`}renderEditCell(e,{item:t},n){return j`<cosmoz-input
			compact
			type="date"
			@change=${e=>n(yr(e.target.value))}
			.value=${vr(e,t)}
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
		></cosmoz-omnitable-date-range-input>`}computeSource(e,t){return xn(e,t)}},customElements.define(`cosmoz-omnitable-column-date`,wr)})))()}var Er;function Dr(){return(Dr=e((()=>{F(),D(),f(),sr(),Ht(),V(),qt(),Er=class extends or(Kt(I)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return j`
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
					${Vt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:j`
							<h3>${this.title}</h3>
							<cosmoz-datetime-input
								date-label=${M(`From date`)}
								time-label=${M(`From time`)}
								min=${this._toInputString(this._limit.fromMin)}
								max=${this._toInputString(this._limit.fromMax)}
								step=${this.filterStep}
								.value=${this._filterInput?.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-datetime-input>
							<cosmoz-datetime-input
								date-label=${M(`To date`)}
								time-label=${M(`To time`)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
								step=${this.filterStep}
								.value=${this._filterInput?.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-datetime-input>
						`})}
				`)}
		`}_toInputString(e){let t=this.toValue(e);if(t!=null)return this._toLocalISOString(t).slice(0,19)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})}},customElements.define(`cosmoz-omnitable-datetime-range-input`,Er)})))()}var Or,kr,Ar,jr,Mr,Nr;function Pr(){return(Pr=e((()=>{L(),Cr(),Or={},kr=e=>{let t=e||``;return Or[t]||(Or[t]=new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})),Or[t]},Ar=({valuePath:e,locale:t},n)=>{let r=X(P(n,e||``));return r===void 0?``:r===null?`Invalid Date`:pr(r,kr(t))},jr=({valuePath:e},t)=>e?P(t,e):``,Mr=e=>{let t=X(e);return t==null?``:t.toISOString().slice(0,19).replace(/:/gu,`.`)},Nr=e=>{if(e!=null&&e!==``&&typeof e==`string`)return X(e.replace(/\./gu,`:`)+`Z`)}})))()}var Fr;function Ir(){return(Ir=e((()=>{Je(),Tt(),F(),f(),B(),Dr(),J(),Cr(),Pr(),Fr=class extends z(I){static get is(){return`cosmoz-omnitable-column-datetime`}static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`datetime-header-cell`},width:{type:String,value:`210px`},minWidth:{type:String,value:`128px`},flex:{type:String,value:`0`},filterStep:{type:Number,value:1}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=Y({...e,valuePath:`min`},t),r=Y({...e,valuePath:`max`},t);if(n!=null||r!=null)return Sr(e,t)}getString(e,t){return Ar(e,t)}toXlsxValue(e,t){return jr(e,t)}getComparableValue(e,t){return Y(e,t)}serializeFilter(e,t){if(t==null)return;let n=X(t.min),r=X(t.max);if(n!=null||r!=null)return Mr(n)+`~`+Mr(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Nr(n[1]),max:Nr(n[2])}:null}renderCell(e,{item:t}){return Ar(e,t)}renderEditCell(e,{item:t},n){return j`<cosmoz-input
			compact
			type="text"
			@change=${e=>n(yr(e.target.value))}
			.value=${Ar(e,t)}
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
		></cosmoz-omnitable-datetime-range-input>`}computeSource(e,t){return xn(e,t)}},customElements.define(Fr.is,Fr)})))()}var Lr;function Rr(){return(Rr=e((()=>{xe(),Ie(),F(),f(),Ln(),B(),Lr=class extends In(z(I)){renderCell({valuePath:e,textProperty:t},{item:n}){let r=Dn(n,e,t).map(e=>j`<li>${e}</li>`);return j`
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
			.onChange=${jn(r)}
			@opened-changed=${e=>Mn(r)(e.detail.value)}
			.onText=${Nn(r)}
			>${d(e.loading,()=>j`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		> `}},customElements.define(`cosmoz-omnitable-column-list-horizontal`,Lr)})))()}var zr,Br;function Vr(){return(Vr=e((()=>{ye(),Oe(),Ce(),A(),D(),zr=Ae`
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
`,Br=({items:e})=>{let[t,r]=n(!1),i=Array.isArray(e)?e:[],a=u(()=>Math.max(0,i.length-1),[i]);if(i.length===0)return null;let o=i.length>2,s=i[0],c=o&&!t?[]:i.slice(1),l=e=>{e.stopPropagation(),e.preventDefault(),r(e=>!e)};return j`
		<ul>
			<li>
				<span>${s}</span>
			</li>
			<li class="see-more" ?hidden=${!o||t}>
				<a href="#" @click=${l}
					>${M(`and {0} more`,{0:a})}</a
				>
			</li>
			${c.map(e=>j`
					<li>
						<span class="item">${e}</span>
					</li>
				`)}
			<li class="see-less" ?hidden=${!o||!t}>
				<a href="#" @click=${l}>${M(`See less`)}</a>
			</li>
		</ul>
	`},customElements.define(`cosmoz-omnitable-column-list-data`,O(Br,{styleSheets:[ce(zr)]}))})))()}var Hr;function Ur(){return(Ur=e((()=>{Vr(),F(),f(),xe(),Ln(),B(),q(),Hr=class extends In(z(I)){static get properties(){return{keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,textual:e.textual}}renderCell({valuePath:e,textProperty:t},{item:n}){return j`<cosmoz-omnitable-column-list-data
			.items=${Dn(n,e,t)}
		></cosmoz-omnitable-column-list-data>`}renderEditCell(e,{item:t},n){return j`<cosmoz-input
			compact
			type="text"
			.value=${On(e,t)}
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
			.itemRenderer=${e[K]?.itemRenderer}
			.value=${t}
			.text=${n}
			.onChange=${jn(r)}
			@opened-changed=${e=>Mn(r)(e.detail.value)}
			.onText=${Nn(r)}
			>${d(e.loading,()=>j`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}},customElements.define(`cosmoz-omnitable-column-list`,Hr)})))()}var Wr;function Gr(){return(Gr=e((()=>{N(),F(),D(),f(),Ht(),V(),Gt(),qt(),Wr=class extends Wt(Kt(I)){static get properties(){return{maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},formatter:{type:Object,computed:`_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)`},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},headerFocused:{type:Boolean,value:!1}}}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return j`
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
					${Vt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:j`
							<h3>${this.title}</h3>
							<cosmoz-input
								class=${this._fromClasses}
								type="number"
								label=${M(`From`)}
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
								label=${M(`To`)}
								.value=${this._filterInput?.max}
								@value-changed=${e=>{this.set(`_filterInput.max`,e.detail.value)}}
								@blur=${e=>this._onBlur(e)}
								@keydown=${e=>this._onKeyDown(e)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
							></cosmoz-input>
						`})}
				`)}
		`}_computeFormatter(e,t,n){let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}getComparableValue(e,t){if(e==null)return;let n=e;if(t!=null&&(n=this.get(t,e)),n=this.toValue(n),n==null)return;let r=this.maximumFractionDigits;return r===null?n:this.toValue(n.toFixed(r))}renderValue(e,t=this.formatter){let n=this.toNumber(e);if(n!=null)return t.format(n)}},customElements.define(`cosmoz-omnitable-number-range-input`,Wr)})))()}var Kr;function qr(){return(qr=e((()=>{N(),Tt(),F(),f(),B(),L(),Gr(),J(),nn(),Kr=class extends z(I){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},cellClass:{type:String,value:`number-cell`},width:{type:String,value:`30px`},minWidth:{type:String,value:`30px`},headerCellClass:{type:String,value:`number-header-cell`},maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},align:{type:String,value:`right`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=U({...e,valuePath:`min`},t),r=U({...e,valuePath:`max`},t);if(n!=null||r!=null)return tn(e,t)}getString(e,t){return en(e,t)}toXlsxValue({valuePath:e},t){return P(t,e)}getComparableValue(e,t){return U(e,t)}serializeFilter(e,t){if(t==null)return;let n=H(t.min),r=H(t.max);if(n!=null||r!=null)return Qt(n)+`~`+Qt(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:H(n[1]),max:H(n[2])}:null}renderCell(e,{item:t}){return j`<div class="omnitable-cell-number">
			${en(e,t)}
		</div>`}renderEditCell(e,{item:t},n){return j`<cosmoz-input
			compact
			type="number"
			@change=${e=>n(e.target.value)}
			.value=${Zt(e,t)}
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
		></cosmoz-omnitable-number-range-input>`}computeSource(e,t){return xn(e,t)}},customElements.define(`cosmoz-omnitable-column-number`,Kr)})))()}var Jr;function Yr(){return(Yr=e((()=>{N(),F(),D(),f(),sr(),Ht(),V(),qt(),Jr=class extends or(Kt(I)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return j`
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
					${Vt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:j`
							<h3>${this.title}</h3>
							<cosmoz-input
								type="time"
								label=${M(`From time`)}
								step=${this.filterStep}
								.value=${this._filterInput.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-input>
							<cosmoz-input
								type="time"
								label=${M(`Until time`)}
								step=${this.filterStep}
								.value=${this._filterInput.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-input>
						`})}
				`)}
		`}get _fixedDate(){return`1970-01-01`}toDate(e,t,n){let r=typeof e==`string`&&e.length>3&&e.length<=9?this.getAbsoluteISOString(this._fixedDate+`T`+e):e;return super.toDate(r,t,n)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(11,19)}getComparableValue(e,t){if(e==null)return;let n=this._toInputString(t==null?e:this.get(t,e));if(n!=null&&(n=this.toValue(this.getAbsoluteISOString(this._fixedDate+`T`+n)),n!=null))return this.toNumber(n.getTime())}_timeValueChanged(e){let t=e.target.value,n=e.model.item,r=this.toDate(n.date),i=this.toDate(r==null?t:r.toISOString().slice(0,10)+`T`+t);i??(this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,(e=>e).bind(this)))}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})}},customElements.define(`cosmoz-omnitable-time-range-input`,Jr)})))()}var Z,Xr,Zr,Qr,$r,ei,ti,ni,ri,ii;function ai(){return(ai=e((()=>{fe(),L(),Cr(),nn(),Z=(e,t,n)=>{let r=typeof e==`string`&&e.length>3&&e.length<=9?dr(`1970-01-01T`+e):e;return X(r,t,n)},Xr={},Zr=e=>{let t=e||``;return Xr[t]||(Xr[t]=new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})),Xr[t]},Qr=({valuePath:e,locale:t},n)=>{let r=Z(P(n,e||``));return r===void 0?``:r===null?`Invalid Date`:pr(r,Zr(t))},$r=(e,t)=>e.valuePath?Qr(e,t):``,ei=e=>{let t=Z(e);if(t==null)return null;let n=we(t);return n&&n.slice(11,19)},ti=({valuePath:e},t)=>{if(t==null)return;let n=ei(e==null?t:P(t,e));if(n==null)return;let r=Z(dr(`1970-01-01T`+n));return r==null?r:H(r.getTime())},ni=(e,t)=>n=>{let r=ti(e,n);if(r==null)return!1;let i=ti({...e,valuePath:`min`},t),a=ti({...e,valuePath:`max`},t);return i==null||a==null?!1:!(r<i||r>a)},ri=e=>{let t=Z(e);return t==null?``:t.toISOString().slice(11,19).replace(/:/gu,`.`)},ii=e=>{if(e!=null&&e!==``)return Z(typeof e==`string`?e.replace(/\./gu,`:`)+`Z`:e)}})))()}var oi;function si(){return(si=e((()=>{N(),Tt(),F(),f(),B(),Yr(),J(),ai(),oi=class extends z(I){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`time-header-cell`},minWidth:{type:String,value:`63px`},width:{type:String,value:`210px`},flex:{type:String,value:`0`},filterStep:{type:String,value:`1`}}}getFilterFn(e,t){let n=ti({...e,valuePath:`min`},t),r=ti({...e,valuePath:`max`},t);if(n!=null||r!=null)return ni(e,t)}getString(e,t){return Qr(e,t)}toXlsxValue(e,t){return $r(e,t)}getComparableValue(e,t){return ti(e,t)}serializeFilter(e,t){if(t==null)return;let n=Z(t.min),r=Z(t.max);if(n!=null||r!=null)return ri(n)+`~`+ri(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:ii(n[1]),max:ii(n[2])}:null}renderCell(e,{item:t}){return Qr(e,t)}renderEditCell(e,{item:t},n){return j`<cosmoz-input
			compact
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${Qr(e,t)}
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
		></cosmoz-omnitable-time-range-input>`}computeSource(e,t){return xn(e,t)}},customElements.define(`cosmoz-omnitable-column-time`,oi)})))()}function ci(){return(ci=e((()=>{wn(),Vn(),Wn(),ar(),Tr(),Ir(),Rr(),Ur(),qr(),si()})))()}var li;function ui(){return(ui=e((()=>{A(),f(),li=({column:e,item:t,selected:n,folded:r,group:i})=>{if(!e)return E;let a=e.renderGroup??e.renderCell;return a?a(e,{item:t,selected:n,folded:r,group:i}):E},customElements.define(`cosmoz-omnitable-group-row`,O(li,{useShadowDOM:!1}))})))()}var di;function fi(){return(fi=e((()=>{A(),f(),di=e=>{let{column:t}=e;return r(()=>{let n=0,r=0,i=i=>{e.dispatchEvent(new CustomEvent(`column-resize`,{bubbles:!0,composed:!0,detail:{newWidth:Math.ceil(r+i.pageX-n),column:t}}))},a=()=>{document.removeEventListener(`pointermove`,i),document.removeEventListener(`pointerup`,a)},o=t=>{n=t.pageX,r=e.previousElementSibling.getBoundingClientRect().width,document.addEventListener(`pointermove`,i),document.addEventListener(`pointerup`,a)};return e.addEventListener(`pointerdown`,o),()=>e.removeEventListener(`pointerdown`,o)},[t]),E},customElements.define(`cosmoz-omnitable-resize-nub`,O(di))})))()}var pi,mi,hi,gi;function _i(){return(_i=e((()=>{He(),A(),ie(),h(),pi=({column:e,on:t,descending:n,setOn:r,setDescending:i})=>{let{name:a,title:o}=e??{};return j`<cosmoz-button
		variant="tertiary"
		class="sg"
		title=${re(o)}
		data-on=${re(a===t&&(n?`desc`:`asc`)||void 0)}
		@click=${e=>{let t=e.currentTarget?.dataset.on;t||(r(a),i(!1)),t===`asc`?i(!0):t===`desc`&&(r(),i(!1))}}
	>
		<span>${o}</span> ${a===t?s({width:`12`,height:`12`}):w({width:`12`,height:`12`})}
	</cosmoz-button>`},mi=({columns:e,...t})=>e?.map(e=>pi({column:e,...t})),hi=()=>j`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,groupOn:t,setGroupOn:n,groupOnDescending:r,setGroupOnDescending:i}={})=>mi({columns:e?.filter?.(e=>e.groupOn),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`,gi=()=>j`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,sortOn:t,setSortOn:n,descending:r,setDescending:i}={})=>mi({columns:e?.filter?.(e=>e.sortOn&&!e.noSort),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`})))()}function vi(e,i,{suffix:a=``,read:o,write:s,ready:c=!0,multi:l}={}){let d=t({param:i,suffix:a,link:l?Ci:Si,write:s??Se}),f=u(()=>{if(i==null)return!1;if(l){let e=Qe(i+a);return Object.keys(e).length>0}return mt(i+a)!==void 0},[]),[p,m]=n(()=>{if(i==null)return e;if(l){let t=Qe(i+a,o);return Object.keys(t).length>0?t:e}return mt(i+a,o)??e}),h=b(e=>m(t=>{let n=yi(e)?e(t):e;return d.param!=null&&gt(d.link(d.param+d.suffix,n,d.write),null,{notify:!1}),n}),[]);return r(()=>{d.param!=null&&c&&!f&&e!=null&&h(e)},[c]),[p,h]}var yi,bi,xi,Si,Ci;function wi(){return(wi=e((()=>{_t(),Ee(),x(),nt(),A(),yi=e=>typeof e==`function`,bi=e=>(t,n,r=Se)=>{let i=rt(),a=new URLSearchParams(i.hash.replace(`#`,``));return e(t,n,r,a),`#!`+Object.assign(i,{hash:a}).href.replace(location.origin,``)},xi=e=>e==null||e===``,Si=bi((e,t,n,r)=>xi(n(t))?r.delete(e):r.set(e,n(t))),Ci=bi((e,t,n,r)=>{let i=Object.entries(t),a=i.map(n).filter(([,e])=>e!==void 0);if(a.length===0&&i.length>0)return;let o=e;Array.from(r.keys()).filter(e=>e.startsWith(o)).forEach(e=>r.delete(e)),a.forEach(([t,n])=>xi(n)?r.delete(e+t):r.set(e+t,n))})})))()}var Ti,Ei,Di,Oi,ki;function Ai(){return(Ai=e((()=>{A(),wi(),Ti=e=>[!0,`true`,1,`yes`,`on`].includes(e),Ei=e=>e===``||(e==null?void 0:Ti(e)),Di=(e,t,n)=>b(r=>{e(r),n(e=>({...e,[t]:r}))},[e,t,n]),Oi=(e,t,{settings:n,setSettings:i,resetRef:a,ready:o=!0})=>{let[s,c]=vi(n.sortOn,t,{suffix:`-sortOn`,ready:o}),[l,d]=vi(Ei(n.descending),t,{suffix:`-descending`,read:Ei,ready:o}),[f,p]=vi(n.groupOn,t,{suffix:`-groupOn`,ready:o}),[m,h]=vi(Ei(n.groupOnDescending),t,{suffix:`-groupOnDescending`,read:Ei,ready:o}),g=u(()=>e.find(e=>e.name===s),[e,s]),_=u(()=>e.find(e=>e.name===f),[e,f]),v={groupOn:f,setGroupOn:Di(p,`groupOn`,i),groupOnDescending:m,setGroupOnDescending:Di(h,`groupOnDescending`,i),sortOn:s,setSortOn:Di(c,`sortOn`,i),descending:l,setDescending:Di(d,`descending`,i),columns:e},y=u(()=>v,Object.values(v)),x=b(e=>{c(typeof e.sortOn==`string`?e.sortOn:void 0),p(typeof e.groupOn==`string`?e.groupOn:void 0),d(typeof e.descending==`boolean`?e.descending:void 0),h(typeof e.groupOnDescending==`boolean`?e.groupOnDescending:void 0)},[]);return r(()=>void(a.current=x),[]),{...y,sortAndGroup:y,groupOnColumn:_,sortOnColumn:g}},ki=je(void 0),customElements.define(`sort-and-group-provider`,ki.Provider),customElements.define(`sort-and-group-consumer`,O(({render:e})=>e(S(ki)),{useShadowDOM:!1}))})))()}var ji,Mi;function Ni(){return(Ni=e((()=>{A(),de(),fi(),_i(),Ai(),ji=({data:e,columns:t,groupOnColumn:n,filters:r,setFilterState:i,sortAndGroup:{sortOn:a,setSortOn:o,descending:s,setDescending:c}={}})=>le(t,e=>e.name,t=>[j`<div
				class="cell ${t.headerCellClass} header-cell"
				align="${t.headerAlign??t.align??`left`}"
				part="cell header-cell cell-${t.name} header-cell-${t.name}"
				?hidden="${t===n}"
				title="${t.headerTitleFn(t)}"
				name="${t.name}"
			>
				${t.renderHeader(t,r[t.name]??{},e=>i(t.name,e),t.source(t,e))}
				${d(!t.noSort,()=>pi({on:a,setOn:o,descending:s,setDescending:c,column:t}))}
			</div>`,j`<cosmoz-omnitable-resize-nub
				.column="${t}"
				name="${t.name}"
			></cosmoz-omnitable-resize-nub>`]),Mi=({columns:e,settingsConfig:t,hideSelectAll:n,...r})=>{let i=S(ki);return j`
		${d(e,e=>ji({columns:e,sortAndGroup:i,...r}))}
		${d(!n,()=>j` <cosmoz-omnitable-settings
					.config=${t}
					part="settings"
				></cosmoz-omnitable-settings>`)}
	`},customElements.define(`cosmoz-omnitable-header-row`,O(Mi,{useShadowDOM:!1}))})))()}var Pi,Fi;function Ii(){return(Ii=e((()=>{ye(),Oe(),Ce(),A(),Pi=Ae`
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
`,Fi=({column:e})=>j`
	<div class="label" title="${e.title}" part="item-expand-label">
		${e.title}
	</div>
	<div class="value" part="item-expand-value">
		<slot></slot>
	</div>
`,customElements.define(`cosmoz-omnitable-item-expand-line`,O(Fi,{styleSheets:[ce(Pi)]}))})))()}var Li;function Ri(){return(Ri=e((()=>{A(),f(),Ii(),Li=({columns:e,item:t,selected:n,expanded:r,groupOnColumn:i})=>st(e,e=>j`<cosmoz-omnitable-item-expand-line
				.column=${e}
				?hidden=${e===i}
				exportparts="item-expand-label, item-expand-value"
				>${e.renderCell(e,{item:t,selected:n,expanded:r})}</cosmoz-omnitable-item-expand-line
			>`),customElements.define(`cosmoz-omnitable-item-expand`,O(Li,{useShadowDOM:!1}))})))()}var zi,Bi;function Vi(){return(Vi=e((()=>{A(),de(),zi=(e,t,n)=>e.editable?e.renderEditCell(e,t,n(e,t.item)):e.renderCell(e,t),Bi=({columns:e,groupOnColumn:t,item:n,index:r,selected:i,expanded:a,onItemChange:o})=>le(e,e=>e.name,e=>j`<div
				class="cell itemRow-cell ${e.cellClass??``}"
				align="${e.align??`left`}"
				part="cell itemRow-cell cell-${e.name} itemRow-cell-${e.name}"
				?hidden="${e===t}"
				?editable="${e.editable}"
				title="${e.cellTitleFn(e,n)}"
				name="${e.name}"
			>
				${zi(e,{item:n,index:r,selected:i,expanded:a},o)}
			</div>`),customElements.define(`cosmoz-omnitable-item-row`,O(Bi,{useShadowDOM:!1}))})))()}var Hi,Ui;function Wi(){return(Wi=e((()=>{ye(),Ce(),Hi=Ae`
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
`,Ui=Ae`
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

	${Hi}

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
`})))()}var Gi,Ki;function qi(){return(qi=e((()=>{et(),Gi=e=>{let t=e.replace(/"/gu,`""`);return t.search(/("|,|\n)/gu)>=0?`"`+t+`"`:e},Ki=(e,t,n)=>{let r=e.map(e=>Gi(e.title)).join(`;`)+`
`,i=t.map(t=>e.map(e=>{let n=e.getString(e,t);return n==null?``:Gi(String(n))}).join(`;`)+`
`);i.unshift(r),tt(new File(i,n,{type:`text/csv;charset=utf-8`}))}})))()}var Ji,Yi;function Xi(){return(Xi=e((()=>{pt(),et(),Ji=(e,t)=>{let n=e.map(e=>e.title),r=t.map(t=>e.map(e=>e.toXlsxValue(e,t)??``));return r.unshift(n),r},Yi=(e,t,n,r)=>{let i=Ji(e,t),a=new ot(n).addSheetFromData(i,r).generate();tt(new File([a],n,{type:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`}))}})))()}var Zi,Q,Qi;function $(){return($=e((()=>{Zi=Symbol(`index`),Q=Symbol(`All`),Qi=(e,t)=>{if(typeof e.findLastIndex==`function`)return e.findLastIndex(t);for(let n=e.length-1;n>=0;n--)if(t(e[n],n,e))return n;return-1}})))()}var $i;function ea(){return(ea=e((()=>{Xe(),h(),D(),f(),qi(),Xi(),$(),$i=({columns:e,selectedItems:t,setSelectedItems:n,csvFilename:r,xlsxFilename:i,xlsxSheetname:a,topPlacement:o,enableSelectAll:s,allSelected:c,allItemsCount:l})=>{let u=t===Q,f=u||t.length>0,p=t!==Q&&s&&c,m=t=>j`<cosmoz-dropdown-menu
			part="extra"
			slot="extra"
			.placement=${o}
		>
			${Pe({slot:`button`})}
			<cosmoz-button
				variant="tertiary"
				@click=${()=>Ki(e,t,r)}
			>
				${M(`Save selected items as CSV`)}
			</cosmoz-button>
			<cosmoz-button
				variant="tertiary"
				@click=${()=>Yi(e,t,i,a)}
			>
				${M(`Save selected items as XLSX`)}
			</cosmoz-button>
			<slot name="download-menu"></slot
		></cosmoz-dropdown-menu>`,h=d(u,()=>l===void 0?M(`All items selected`):M(`All {count} items selected`,{count:l}),()=>M(`{count} selected item`,{count:t===Q?0:t.length}));return j`<cosmoz-bottom-bar
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
							${M(`Select all items`)}
						</span>`)}
		</slot>
		<slot name="actions" id="actions"></slot>
		<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
		<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
		${d(t!==Q,()=>m(t))}
	</cosmoz-bottom-bar>`}})))()}var ta;function na(){return(na=e((()=>{f(),ta=({allSelected:e,onAllCheckboxChange:t,sortAndGroup:n,dataIsValid:r,data:i,columns:a,filters:o,groupOnColumn:s,setFilterState:c,settingsConfig:l,hideSelectAll:u})=>j`<sort-and-group-provider .value=${n}>
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
	</sort-and-group-provider>`})))()}var ra,ia,aa;function oa(){return(oa=e((()=>{A(),ra=ne`
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
`,ia=(e,t)=>{let n=t==null?void 0:e?.[t];return n==null?``:`width: ${n}px; padding: 0 min(3px, ${n/2}px)`},aa=({settingsConfig:e,widths:t})=>{let{columns:n,collapsed:r}=e,i=n.filter(e=>!r.some(t=>t.name===e.name));return j`<div class="skeleton">
		${Array.from({length:5},()=>j`<div>
					<div class="checkbox"></div>
					${i.map(e=>j`<div
								class="cell"
								part=${`cell-${e.name}`}
								name=${e.name}
								style=${ia(t,e.name)}
							></div>`)}
				</div>`)}
	</div>`},customElements.define(`cosmoz-omnitable-skeleton`,O(aa,{styleSheets:[ra]}))})))()}var sa;function ca(){return(ca=e((()=>{A(),oa(),ct(),D(),f(),sa=(e,t)=>{let{settingsConfig:n}=e,{processedItems:r,dataIsValid:i,filterIsTooStrict:o,loading:s,displayEmptyGroups:c,compareItemsFn:l,selectedItems:u,setSelectedItems:f,renderItem:p,renderGroup:m,error:h,partWidths:g}=t;return j`${d(!s&&!i&&!h,()=>j`<div class="tableContent-empty">
					<slot name="empty-set-message">
						${dt({width:`40px`,height:`40px`,styles:`fill: currentColor;`})}
						<div class="tableContent-empty-message">
							<h3>${M(`Working set empty`)}</h3>
							<p>${M(`No data to display`)}</p>
						</div>
					</slot>
				</div>`)}
		${d(o,()=>j`<div class="tableContent-empty">
					${dt({width:`40px`,height:`40px`,styles:`fill: currentColor;`})}
					<div>
						<h3>${M(`Filter too strict`)}</h3>
						<p>${M(`No matches for selection`)}</p>
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
					${ut({width:`40px`,height:`40px`,styles:`fill: currentColor;`})}
					<div class="tableContent-empty-message">
						<h3>${M(`Error loading data`)}</h3>
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
		</div>`}})))()}var la,ua;function da(){return(da=e((()=>{ye(),Ce(),Wi(),la=Ae`
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
	${Hi}
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
`,ua=Ae`
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
`})))()}var fa,pa;function ma(){return(ma=e((()=>{x(),A(),fa=e=>{let t=parseInt(e??``,10);return isFinite(t)?t:void 0},pa=e=>{let{config:n}=e,{settings:r,setSettings:i,collapsed:a,requestTween:o}=n,s=t({collapsed:a,settings:r.columns,requestTween:o,setSettings:b(e=>i(t=>({...t,columns:e})),[i])});return{...n,onDown:b(e=>{let t=e.target instanceof Element?e.target:null;t&&t.closest(`.pull`)&&(s.handle=e.currentTarget instanceof HTMLElement?e.currentTarget:null)},[s]),onDragStart:b(e=>{let t=e.target instanceof HTMLElement?e.target:null,n=fa(t?.dataset.index);if(!t||!s.handle?.contains(t)||n==null)return e.preventDefault();s.handle=null,e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`omnitable/sort-index`,String(n)),e.dataTransfer.setData(`text/plain`,String(n)),setTimeout(()=>t.classList.add(`drag`),0),t.addEventListener(`dragend`,e=>{(e.target instanceof HTMLElement?e.target:null)?.classList.remove(`drag`)},{once:!0})},[s]),onDragEnter:b(e=>{let t=e.currentTarget instanceof HTMLElement?e.currentTarget:null;t&&t===e.target&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`,t.classList.add(`dragover`))},[]),onDragOver:b(e=>{e.preventDefault(),e.currentTarget instanceof HTMLElement&&e.currentTarget.classList.add(`dragover`)},[]),onDragLeave:b(e=>{let t=e.currentTarget instanceof HTMLElement?e.currentTarget:null;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||t.classList.remove(`dragover`))},[]),onDrop:b(e=>{let t=fa(e.dataTransfer?.getData(`omnitable/sort-index`)),n=e.currentTarget instanceof HTMLElement?e.currentTarget:null,r=fa(n?.dataset.index),{settings:i,setSettings:a,requestTween:o}=s;n?.classList.remove(`dragover`),e.preventDefault();let c=i.slice();c.splice(r+(t>=r?0:-1),0,c.splice(t,1)[0]),o?.(),a(c)},[s]),onToggle:b(e=>{let{settings:t,setSettings:n,requestTween:r}=s,i=t.map(e=>({...e,disabled:e.disabled||s.collapsed?.some(t=>t.name===e.name)})),a=e.target instanceof HTMLInputElement?e.target:null,o=fa((e.target instanceof Element?e.target:null)?.closest(`[data-index]`)?.getAttribute(`data-index`));o!=null&&(i.splice(o,1,{...t[o],disabled:!a?.checked,priority:a?.checked?t.reduce((e,t)=>Math.max(e,t.priority??0),0)+1:t[o]?.priority}),r?.(),n(i))},[s])}}})))()}var ha,ga,_a,va;function ya(){return(ya=e((()=>{He(),ft(),ze(),h(),Oe(),Ce(),be(),A(),D(),_i(),da(),ma(),ha=[lt({apply({availableHeight:e,elements:t}){Object.assign(t.floating.style,{maxHeight:`${Math.max(0,e)}px`})}}),...Ze],ga=({onDragStart:e,onDragEnter:t,onDragOver:n,onDragLeave:r,onDrop:i,onDown:a,onToggle:o,collapsed:s,filters:c})=>(l,u)=>{let d=!!s?.find(e=>e.name===l.name),f=!l.disabled&&!d;return j` <div
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
				aria-label=${M(`Reorder column`)}
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
		</div>`},_a=e=>{let{settings:t,settingsId:n,onSave:r,onReset:i,hasChanges:a,canReset:o,opened:c,setOpened:l,...u}=pa(e);return j` <div class="headline">
			<span> ${M(`Sort and filter`)} </span>
			<cosmoz-button
				variant="tertiary"
				aria-label="${M(`Close settings`)}"
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
				${M(`Columns`)} ${s({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse
				?opened="${c.columns}"
				part="columns columns-content"
			>
				<div class="list">${t.columns?.map(ga(u))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${c.sort}
				@click=${()=>l(e=>({...e,sort:!e.sort}))}
			>
				${M(`Sort on`)} ${s({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse ?opened=${c.sort}> ${gi()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${c.group}
				@click=${()=>l(e=>({...e,group:!e.group}))}
				part="groups groups-heading"
			>
				${M(`Group on`)} ${s({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse ?opened=${c.group} part="groups groups-heading"
				>${hi()}</cosmoz-collapse
			>
		</div>

		${d(n,()=>j`<div class="buttons">
					<cosmoz-button
						variant="tertiary"
						@click=${i}
						?disabled=${!o}
					>
						${M(`Reset`)}
					</cosmoz-button>
					<cosmoz-button
						variant="primary"
						@click=${r}
						?disabled=${!a}
					>
						${M(`Save`)}
					</cosmoz-button>
				</div>`)}`},customElements.define(`cosmoz-omnitable-settings-ui`,O(_a,{styleSheets:[ce(la)]})),va=({config:e,newLayout:t})=>j`
	<cosmoz-dropdown
		.placement="${t?`bottom-start`:`bottom-end`}"
		.middleware="${ha}"
	>
		<div title="${M(`Sort and filter`)}" slot="button">
			${d(t,()=>j`<div class="headerDots">...</div>`,()=>j` ${T({width:`20`,height:`20`,styles:`color: var(--cz-color-text-primary)`})}`)}
			${d(e?.badge,()=>j`<div class="badge"></div>`)}
		</div>
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${e}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`,customElements.define(`cosmoz-omnitable-settings`,O(va,{styleSheets:[ce(ua)]}))})))()}var ba,xa,Sa,Ca,wa;function Ta(){return(Ta=e((()=>{De(),ba=[`sortOn`,`descending`,`groupOn`,`groupOnDescending`],xa=e=>t=>typeof t==`object`&&!!t&&`name`in t&&t.name===e,Sa=(e=[],t=[],n=[])=>{let r=t.filter(t=>e.some(xa(t.name))),i=e.filter(e=>e.name!=null&&!t.some(xa(e.name))&&!n.some(xa(e.name))),a=n.filter(e=>!t.some(xa(e.name)));return[...r,...a.flatMap(t=>{let n=e.find(e=>e.name===t.name);return n?{...t,title:n.title??t.title??``,minWidth:parseInt(n.minWidth??`0`,10)}:[]}),...i.map(e=>{let{name:t,title:n,priority:r,minWidth:i,width:a,flex:o}=e;return{name:t??``,title:n??``,priority:r??0,minWidth:parseInt(i??`0`,10),width:parseInt(a??`0`,10),flex:parseInt(o??`0`,10)}})]},Ca=(e,t)=>({...t,...ve(Array.from(ba))(e),columns:e.columns?.map(ve([`name`,`priority`,`width`,`flex`,`disabled`]))??t?.columns}),wa=({columns:e,settings:t,savedSettings:n,initial:r})=>({...Object.fromEntries(ba.flatMap(e=>r?.[e]==null?[]:[[e,r[e]]])),...n?ve(Array.from(ba))(n):{},...t,columns:Sa(e,t?.columns,n?.columns)})})))()}var Ea;function Da(){return(Da=e((()=>{Ea=({prefix:e=`omnitable-`}={})=>({write:async(t,n)=>{let r=e+t;try{n?localStorage.setItem(r,JSON.stringify(n)):localStorage.removeItem(r)}catch(e){console.error(e)}},read:async t=>{if(!t)return null;try{let n=localStorage.getItem(e+t);return n==null?null:JSON.parse(n)}catch(e){return console.error(e),null}}})})))()}var Oa,ka;function Aa(){return(Aa=e((()=>{A(),Da(),Oa=je(Ea),ka=()=>{let e=S(Oa);return u(()=>e(),[e])}})))()}function ja(){return(ja=e((()=>{Aa()})))()}var Ma;function Na(){return(Na=e((()=>{A(),ja(),Ta(),Ma=(e,t,i,a)=>{let[o,s]=n(e?void 0:null),{read:c,write:l}=ka();return r(async()=>{e&&s(await c(e))},[e,c]),{settingsId:e,savedSettings:o,onSave:b(async()=>{if(!e)return;let n=Ca(t,o);await l(e,n),i(),s(n)},[t,o]),onReset:b(async()=>{i(),e&&o!=null&&(await l(e),s(null)),a?.()},[e,o,l,a]),hasChanges:t!=null,canReset:t!=null||o!=null}}})))()}var Pa;function Fa(){return(Fa=e((()=>{A(),q(),Ta(),Na(),Pa=({settingsId:e,host:t})=>{let r=u(()=>Object.fromEntries(ba.map(e=>[e,t[e]])),[]),i=te(),a=b(()=>{i.current?.(r)},[r]),[o,s]=n(),[c,l]=n({columns:!0,sort:!0}),{savedSettings:d,...f}=Ma(e,o,s,a),{enabledColumns:p,disabledFiltering:m}=t,h=yn(t,{enabledColumns:p,disabledFiltering:m}),g=u(()=>wa({columns:h,settings:o,savedSettings:d??void 0,initial:r}),[h,o,d]),_=u(()=>g.columns.map(e=>h.find(t=>t.name===e.name)).filter(e=>e!==void 0),[h,...g.columns.map(e=>e.name)]);return{...f,savedSettings:d,opened:c,setOpened:l,settings:g,columns:_,setSettings:s,resetRef:i}}})))()}function Ia(){return(Ia=e((()=>{ya(),Fa()})))()}var La,Ra;function za(){return(za=e((()=>{La=e=>Number.isFinite(e)?e:0,Ra=(e,t)=>{let n=[],[r,i]=e.reduce(([e,t],{width:n,flex:r})=>[e+n,t+r],[0,0]),a=t-r,o=La(a/i),s=0,c=0,l=0;for(let t=0;t<e.length;t++){let{width:i,minWidth:u,flex:d}=e[t];u>i+(a>=0?o*d:i*a/r)?(s+=i,c+=u,l+=d,n[t]=u):d===0&&(s+=i,c+=i,n[t]=i)}r-=s,a=t-c-r,i-=l,o=La(a/i);for(let t=0;t<e.length;t++){if(n[t]!=null)continue;let{width:i,flex:s}=e[t],c=a>=0?o*s:i*a/r;n[t]=i+c}return n}})))()}var Ba,Va,Ha,Ua,Wa,Ga,Ka;function qa(){return(qa=e((()=>{za(),$(),Ba=(e,t)=>{let n=Qi(e,e=>e!=null&&e>0),r=0,i=0;return t.map((t,a)=>{let o=e[a];if(o==null||o===0)return{name:t.name,kind:`hide`};r+=o;let s=Math.round(r),c=s-i;return i=s,{name:t.name,kind:`width`,width:c,lastVisible:a===n}})},Va=e=>`.cell[name="${e.name}"]{width: ${e.width}px;padding: 0 min(3px, ${e.width/2}px)}`,Ha=e=>`cosmoz-omnitable-resize-nub[name="${e}"]{display:none}`,Ua=e=>`cosmoz-omnitable-resize-nub[name="${e}"], .cell[name="${e}"]{display:none}`,Wa=e=>e.map(e=>{if(e.kind===`hide`)return Ua(e.name);let t=Va(e);return e.lastVisible?`${t}\n${Ha(e.name)}`:t}).join(`
`),Ga=(e,t,n)=>{let r=e.filter(e=>!e.hidden),i=r.reduce((e,{width:t})=>e+t,0);if(r.length>1&&i>t)return Ga(r.slice(1),t,n);let a=r.reduce(([e,t],n,r)=>[Math.max(e,n.index),n.index>e?r:t],[-1,-1])[1];return a!==-1&&(r[a].flex=1),Ra(r,t).reduce((e,t,n)=>(e[r[n].index]=t,e),Array(n).fill(void 0))},Ka=(e,t)=>e.length===0?`.cell {display: none;}`:Wa(Ba(e,t))})))()}var Ja;function Ya(){return(Ya=e((()=>{A(),Ja=(e,t)=>r(()=>{let n=new ResizeObserver(([e])=>{e.contentRect?.width!==0&&t(e.contentRect.width-104)});return n.observe(e),()=>n.unobserve(e)},[])})))()}var Xa;function Za(){return(Za=e((()=>{A(),Ya(),Xa=e=>{let[t,r]=n(()=>e.getBoundingClientRect().width-104);return Ja(e,r),t}})))()}var Qa;function $a(){return($a=e((()=>{A(),qa(),Qa=({canvasWidth:e,groupOnColumn:t,layoutColumns:n,config:r})=>u(()=>{if(!Array.isArray(r)||e==null||e===0)return[];let i=r.map((e,n)=>({minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,name:e.name,index:n,hidden:e.name===t?.name||e.disabled})).map(e=>n==null?e:{...e,hidden:!n.includes(e.name)}).sort(({index:e,priority:t},{index:n,priority:r})=>t===r?n-e:t-r);return Ga(i,e,i.length)},[e,t,r])})))()}var eo;function to(){return(to=e((()=>{A(),eo=({host:e,canvasWidth:t,columns:n})=>{let i=e.miniBreakpoint??480,a=u(()=>t<=i,[t,i]),o=u(()=>a?n?.filter(e=>e.mini!=null).sort((e,t)=>(e.mini??0)-(t.mini??0)):[],[n,a]),s=u(()=>o.slice(1),[o]),c=o[0],l=!!c&&e.renderItem==null;return r(()=>{e.toggleAttribute(`mini`,l)},[l]),{isMini:l&&a,hasMiniColumn:l,miniColumn:c,miniColumns:s}}})))()}var no;function ro(){return(ro=e((()=>{A(),no=({host:e,canvasWidth:t,layout:n,setSettings:i,requestTween:a})=>{let o=te();o.current=e=>{a(),i(r=>{let i=r.columns,{detail:{newWidth:a,column:o}}=e,s=i.findIndex(e=>e.name===o.name),c=[],l=i.reduce((e,t)=>Math.max(e,t.priority),-1/0);for(let e=0;e<n.length;e++)if(c[e]={...i[e]},e<s&&n[e]&&(c[e].width=n[e],c[e].flex=0,c[e].priority=l),e===s){let r=n.reduce((e,t,n)=>n<s&&t?e-t:e,t);c[e].width=Math.min(r,Math.max(a,i[e].minWidth)),c[e].flex=0,c[e].priority=l}return{...r,columns:c}})},r(()=>{let t=e=>o.current?.(e);return e.addEventListener(`column-resize`,t),()=>e.removeEventListener(`column-resize`,t)},[])}})))()}var io,ao,oo;function so(){return(so=e((()=>{Ee(),x(),A(),io=(e,t)=>{let n=u(()=>{let t=!1,n,r=()=>{t&&(n=requestAnimationFrame(r),e()&&(t=!1))};return{start:()=>{t=!0,cancelAnimationFrame(n),r()},stop:()=>{t=!1,cancelAnimationFrame(n)}}},[]);r(()=>{n.start()},t),r(()=>()=>n.stop(),[])},ao=(e=0,t=0)=>Math.abs(e-t)<.1,oo=(e,n=1.9,r=ae,i)=>{let a=t({target:e,speedFactor:n,onConverge:i}),o=b(()=>{if(!a.tween)return a.tween=a.target,r(a.tween),a.onConverge?.(),!0;if(a.target.every((e,t)=>a.tween[t]===e))return r(a.tween),a.onConverge?.(),!0;if(a.tween=a.target.map((e,t)=>ao(a.tween[t],e)?e:(a.tween[t]??0)+((e??0)-(a.tween[t]??0))/a.speedFactor||0),r(a.tween),a.tween.every((e,t)=>e===a.target[t]))return a.onConverge?.(),!0},[]);io(o,[e])}})))()}var co,lo,uo;function fo(){return(fo=e((()=>{x(),A(),qa(),Za(),$a(),to(),ro(),so(),co=e=>{let t=u(()=>new CSSStyleSheet,[]);return r(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,t]},[]),t},lo=e=>{r(()=>{e.toggleAttribute(`compact`,e.compact===!0)},[e.compact])},uo=({host:e,columns:r,settings:i,setSettings:a,resizeSpeedFactor:o,sortAndGroupOptions:s})=>{let c=Xa(e),{isMini:l,hasMiniColumn:d,miniColumn:f,miniColumns:p}=eo({host:e,canvasWidth:c,columns:r});lo(e);let{groupOnColumn:m}=s,h=d?[f.name]:e.headerColumns??null,g=Qa({canvasWidth:c,groupOnColumn:m,layoutColumns:h,config:i.columns}),_=co(e),v=i.columns.filter((e,t)=>g[t]==null&&e.name!==m?.name&&!e.disabled).map(e=>e.name),y=u(()=>v.map(e=>r.find(t=>t.name===e)),[r,v.join()]),[x,S]=n(1),C=b(()=>S(o??1.9),[o]),ee=b(()=>S(1),[]),w=t({columns:i.columns}),T=te({rules:void 0,widths:[]}).current,[ne,E]=n(void 0),re=e=>E(e.reduce((e,t)=>t.kind===`width`?{...e,[t.name]:t.width}:e,{}));return oo(g,x,t=>{let n=Ba(t,w.columns),r=Ka(t,w.columns)===`.cell {display: none;}`?`empty`:n.map(e=>e.kind).join(`#`)+`#`+(n.findIndex(e=>e.lastVisible)+1);if(T.rules!==r){_.replaceSync(Ka(t,w.columns)),T.rules=r,T.widths=n.map(e=>e.kind===`width`?e.width:void 0),re(n);return}let i=_.cssRules,a=!1;n.forEach((e,t)=>{if(e.kind!==`width`||T.widths[t]===e.width)return;let n=i[t];n.style.width=`${e.width}px`,n.style.padding=`0 min(3px, ${e.width/2}px)`,T.widths[t]=e.width,a=!0}),a&&e.loading&&re(n)},ee),no({host:e,canvasWidth:c,layout:g,setSettings:e=>a(e(i)),requestTween:C}),{isMini:l,collapsedColumns:y,miniColumns:p,requestTween:C,partWidths:ne}}})))()}var po;function mo(){return(mo=e((()=>{po=({host:e,...t})=>{let{csvFilename:n=`omnitable.csv`,xlsxFilename:r=`omnitable.xlsx`,xlsxSheetname:i=`Omnitable`,topPlacement:a=`top-end`}=e;return{csvFilename:n,xlsxFilename:r,xlsxSheetname:i,topPlacement:a,...t}}})))()}var ho;function go(){return(go=e((()=>{A(),$(),ho=({host:e,selectedItems:t,data:n,dataIsValid:r,columns:i,sortAndGroupOptions:a,collapsedColumns:o,settings:s,filterFunctions:c,settingS:l,filters:d,setFilterState:f,hideSelectAll:p,headerColumns:m,requestTween:h,...g})=>{let _=u(()=>m==null?i:i.filter(e=>m.includes(e.name)),[i,m]),v=t===Q||!!n&&n.length>0&&Array.isArray(t)&&t.length===n.length,y=t=>{if(!(t.target instanceof HTMLInputElement))return;let n=e.shadowRoot.querySelector(`#groupedList`);t.target.checked?n.selectAll():n.deselectAll()},{groupOnColumn:b}=a,x=u(()=>[b,...o,...s.columns.filter(e=>e.disabled)].some(e=>!!e&&!!e.name&&Object.keys(c).includes(e.name)),[c,s,o]);return{allSelected:v,onAllCheckboxChange:y,data:n,dataIsValid:r,columns:_,settingsConfig:u(()=>({...l,collapsed:o,badge:x,filters:d,requestTween:h}),[l,o,x,d,h]),filters:d,groupOnColumn:b,setFilterState:f,hideSelectAll:p,sortAndGroup:a.sortAndGroup,...g}}})))()}var _o,vo;function yo(){return(yo=e((()=>{He(),h(),A(),D(),_o=e=>e?`groupRow groupRow-folded`:`groupRow`,vo=(e,t,{selected:n,folded:r,toggleFold:i,onCheckboxChange:a,groupOnColumn:o,dataIsValid:c})=>j` <div
		class="${_o(r)}"
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
			aria-label=${M(`Expand or collapse`)}
			variant="tertiary"
			icon-only
			class="expand"
			?aria-expanded="${r}"
			@click=${i}
		>
			${s({width:`16`,height:`16`})}
		</cosmoz-button>
	</div>`})))()}var bo;function xo(){return(xo=e((()=>{f(),bo=({item:e,index:t})=>n=>d((n?.length??0)>0,()=>j`
				<div class="itemRow-minis" part="item-minis">
					${n.map(n=>j`<div
								class="itemRow-mini"
								part="item-mini item-mini-${n.name}"
							>
								${(n.renderMini??n.renderCell)(n,{item:e,index:t})}
							</div>`)}
				</div>
			`)})))()}var So;function Co(){return(Co=e((()=>{He(),h(),be(),A(),D(),xo(),So=(e,t,{selected:n,expanded:r,toggleCollapse:i,columns:a,collapsedColumns:o,miniColumns:c,onItemClick:l,onCheckboxChange:u,onItemChange:d,rowPartFn:f,groupOnColumn:p,dataIsValid:m})=>j`
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
				aria-label=${M(`Expand or collapse`)}
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
		${bo({item:e,index:t})(c)}
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
`})))()}var wo,To,Eo;function Do(){return(Do=e((()=>{A(),yo(),Co(),$(),J(),wo=e=>e instanceof HTMLInputElement,To=e=>e instanceof HTMLElement,Eo=({host:e,error:t,dataIsValid:n,processedItems:i,columns:a,collapsedColumns:o,miniColumns:s,sortAndGroupOptions:c,rowPartFn:l,...d})=>{let{loading:f=!1,displayEmptyGroups:p=!1,compareItemsFn:m}=e,h=e.renderItem??So,g=e.renderGroup??vo,_=te({shiftKey:!1,ctrlKey:!1}),v=b(t=>{if(!wo(t.target))return;let n=t.target,r=n.dataItem,i=n.checked,a=e.shadowRoot.querySelector(`#groupedList`);_.current.shiftKey?a.toggleSelectTo(r,i):_.current.ctrlKey?(n.checked=!0,a.selectOnly(r)):a.toggleSelect(r,i),t.preventDefault(),t.stopPropagation()},[]);r(()=>{let e=({shiftKey:e,ctrlKey:t})=>{_.current={shiftKey:e,ctrlKey:t}};return window.addEventListener(`keydown`,e),window.addEventListener(`keyup`,e),()=>{window.removeEventListener(`keydown`,e),window.removeEventListener(`keyup`,e)}},[]);let y=b(t=>{if(!To(t.currentTarget))return;let n=t.currentTarget,r=t.composedPath();r.slice(0,r.indexOf(n)).some(e=>e instanceof Element&&e.matches(`a, .checkbox, .expand`))||e.dispatchEvent(new window.CustomEvent(`omnitable-item-click`,{bubbles:!0,composed:!0,detail:{item:n.dataItem,index:n.dataIndex}}))},[]),{groupOnColumn:x}=c,S=b((t,n)=>r=>Sn(e,t,n,r),[]);return{...d,processedItems:i,dataIsValid:n,filterIsTooStrict:n&&i.length<1,loading:f,compareItemsFn:m,displayEmptyGroups:p,error:t,renderItem:u(()=>(e,t,r)=>h(e,e[Zi],{...r,columns:a,collapsedColumns:o,miniColumns:s,onItemClick:y,onCheckboxChange:v,onItemChange:S,rowPartFn:l,groupOnColumn:x,dataIsValid:n}),[h,a,o,s,y,v,S,l,x,n]),renderGroup:u(()=>(e,t,r)=>g(e,e[Zi],{...r,columns:a,onCheckboxChange:v,groupOnColumn:x,dataIsValid:n}),[g,a,v,x,n])}}})))()}var Oo;function ko(){return(ko=e((()=>{Oo=(e,t)=>{if(e===t)return 0;if(e==null)return-1;if(t==null)return 1;let n=typeof e,r=typeof t;return n===`object`&&r===`object`?e.toString()<t.toString()?-1:1:n===`number`&&r===`number`?e-t:n===`string`&&r===`string`?e<t?-1:1:n===`boolean`&&r===`boolean`?e?-1:1:(console.warn(`unsupported sort`,n,e,r,t),0)}})))()}var Ao,jo,Mo,No,Po,Fo;function Io(){return(Io=e((()=>{Ee(),A(),ko(),q(),wi(),$(),Ao=(e,t)=>(n,r)=>Oo(e(n),e(r))*(t?-1:1),jo=e=>e.replace(/([a-z0-9])([A-Z])/gu,`$1-$2`).toLowerCase(),Mo=(e,t)=>{e&&t&&Object.entries(t).forEach(([t,n])=>{let r=e[K];r.__ownChange=!0,Object.assign(r,{[t]:n}),r.__ownChange=!1,r.dispatchEvent(new CustomEvent(`${jo(t)}-changed`,{bubbles:!0,detail:{value:n}}))})},No=(e,t)=>Object.assign(e,{[Zi]:t}),Po=Symbol(`unparsed`),Fo=({data:e,columns:t,hashParam:n,sortAndGroupOptions:i,noLocalSort:a,noLocalFilter:o})=>{let{groupOnColumn:s,groupOnDescending:c,sortOnColumn:l,descending:d}=i,f=b(([e,n])=>{let r=t.find(({name:t})=>t===e);return r==null?[e,void 0]:[e,n.filter&&r.serializeFilter(r,n.filter)]},[t]),p=b(([e,n])=>{let r=t.find(({name:t})=>t===e);if(r==null)return[e,{[Po]:n}];let i={filter:r.deserializeFilter(r,n)};return Mo(r,i),[e,i]},[t]),[m,h]=vi({},n,{multi:!0,suffix:`-filter--`,write:f,read:p}),g=b((e,n)=>h(r=>{let i=_e(n,r[e]);return Mo(t.find(t=>t.name===e),i),{...r,[e]:{...r[e],...i}}}),[t,h]),_=u(()=>Object.values(m).map(e=>e.filter),[m]),v=u(()=>Object.fromEntries(t.map(e=>[e.name,!e.noLocalFilter&&e.getFilterFn(e,m[e.name]?.filter)]).filter(e=>!!e[1])),[t,..._]),y=u(()=>!Array.isArray(e)||e.length===0?[]:Object.entries(v).length===0||o?e.slice():e.filter(e=>Object.values(v).every(t=>t(e))),[e,v,o]),x=u(()=>{if(!a&&!s&&l!=null&&l.sortOn!=null)return y.slice().sort(Ao(e=>l.getComparableValue({...l,valuePath:l.sortOn},e),d));if(s!=null&&s.groupOn!=null){let e=y.reduce((e,t)=>{let n=s.getComparableValue({...s,valuePath:s.groupOn},t);if(n===void 0)return e;let r=e.find(e=>e.id===n);return r?(r.items.push(t),e):(r={id:n,name:n,items:[t]},[...e,r])},[]);return e.sort(Ao(e=>s.getComparableValue({...s,valuePath:s.groupOn},e.items[0]),c)),!l||a?e:e.filter(e=>Array.isArray(e.items)).map(e=>(e.items.sort(Ao(e=>l.getComparableValue({...l,valuePath:l.sortOn},e),d)),e))}return y},[y,s,c,l,d,a]),S=u(()=>{let e=0,t=0,n=[];return x.forEach(r=>{if(`items`in r&&Array.isArray(r.items))No(r,t++),r.items.forEach(t=>{No(t,e++),n.push(t)});else return No(r,e++),n.push(r)},[]),n},[x]);return r(()=>{h(e=>Object.values(e).some(e=>e[Po]!=null)?Object.fromEntries(Object.entries(e).map(([e,t])=>{let n=t[Po];return n==null?[e,t]:p([e,n])})):e)},[p]),{processedItems:x,visibleData:S,filters:m,filterFunctions:v,setFilterState:g}}})))()}var Lo,Ro,zo;function Bo(){return(Bo=e((()=>{i(),oe(),A(),Lo=e=>{let t=t=>{let n=e.data.indexOf(t);if(n<0)return null;let r=e.data.splice(n,1);if(e.data=e.data.slice(),Array.isArray(r)&&r.length>0)return r[0]},n=(t,n)=>{e.data.splice(t,1,n),e.data=e.data.slice()};return{removeItem:t,removeItems(e){let n=[];for(let r=e.length-1;r>=0;--r){let i=t(e[r]);i!=null&&n.push(i)}return n},replaceItemAtIndex:n,replaceItem(t,r){let i=e.data.indexOf(t);i>-1&&n(i,r)},selectItem(t){e.shadowRoot.querySelector(`#groupedList`).select(t)},selectAll(){e.shadowRoot.querySelector(`#groupedList`).selectAll()},deselectAll(){e.shadowRoot.querySelector(`#groupedList`).deselectAll()},deselectItem(t){e.shadowRoot.querySelector(`#groupedList`).deselect(t)},isItemSelected(t){return e.shadowRoot.querySelector(`#groupedList`).isItemSelected(t)}}},Ro=e=>{let[t,i]=n(!1);return r(()=>{e&&i(!0)},[e]),t},zo=({host:e,visibleData:t,filters:n,ready:i=!0,...a})=>{let{setFilterState:o}=a,s=u(()=>Lo(e),[]),[c,l]=v(`selectedItems`,[]);Me(a,Object.values(a)),Me(s,Object.values(s)),r(()=>{let t=e=>{if(!(e instanceof CustomEvent))return;let t=e.detail;o(t.name,e=>({...typeof e==`object`&&e?e:{},...t.state}))};return e.addEventListener(`legacy-filter-changed`,t),()=>e.removeEventListener(`legacy-filter-changed`,t)},[]),C(`visibleData`,t),C(`sortedFilteredGroupedItems`,a.sortedFilteredGroupedItems),C(`sortOn`,a.sortOn),C(`descending`,a.descending),C(`isMini`,a.isMini),C(`settingsReady`,Ro(i));let d=u(()=>Object.fromEntries(Object.entries(n).filter(([,{filter:e}])=>e!==void 0).map(([e,{filter:t}])=>[e,t])),[n]);return C(`filters`,d,Object.values(d)),{selectedItems:c,setSelectedItems:l}}})))()}var Vo;function Ho(){return(Ho=e((()=>{Ia(),fo(),mo(),go(),Do(),Io(),Bo(),Ai(),Vo=e=>{let{hashParam:t,settingsId:n,data:r,resizeSpeedFactor:i,noLocal:a,noLocalSort:o=a,noLocalFilter:s=a,error:c,rowPartFn:l}=e,u=Pa({settingsId:n,host:e}),{settings:d,setSettings:f,columns:p,resetRef:m,savedSettings:h}=u,g=h!==void 0,_=Oi(p,t,{settings:d,setSettings:f,resetRef:m,ready:g}),{processedItems:v,visibleData:y,filters:b,setFilterState:x,filterFunctions:S}=Fo({data:r,columns:p,hashParam:t,sortAndGroupOptions:_,noLocalSort:o,noLocalFilter:s}),{isMini:C,collapsedColumns:ee,miniColumns:te,requestTween:w,partWidths:T}=uo({host:e,columns:p,settings:d,setSettings:f,resizeSpeedFactor:i,sortAndGroupOptions:_}),ne=r&&Array.isArray(r)&&r.length>0,{selectedItems:E,setSelectedItems:re}=zo({host:e,visibleData:y,sortedFilteredGroupedItems:v,columns:p,filters:b,setFilterState:x,isMini:C,ready:g,..._}),ie=ho({host:e,selectedItems:E,sortAndGroupOptions:_,dataIsValid:ne,data:r,columns:p,filters:b,collapsedColumns:ee,settings:d,filterFunctions:S,settingS:u,setFilterState:x,hideSelectAll:e.hideSelectAll===!0,headerColumns:e.headerColumns??null,requestTween:w});return{header:ie,list:Eo({host:e,error:c,dataIsValid:ne,processedItems:v,selectedItems:E,setSelectedItems:re,columns:p,collapsedColumns:ee,miniColumns:te,sortAndGroupOptions:_,rowPartFn:l,partWidths:T}),footer:po({host:e,selectedItems:E,allSelected:ie.allSelected,setSelectedItems:re,columns:p,enableSelectAll:e.enableSelectAll,allItemsCount:e.allItemsCount})}}})))()}var Uo;function Wo(){return(Wo=e((()=>{A(),f(),Uo=e=>{let{item:t,index:n,renderFn:r}=e;return t==null||n==null||r==null?E:r(t,n)},customElements.define(`cosmoz-grouped-list-row`,O(Uo,{useShadowDOM:!1}))})))()}var Go,Ko,qo;function Jo(){return(Jo=e((()=>{Go=`input, button, select, a, [tabindex]`,Ko=e=>e.querySelector(Go),qo=class{remember(e,t){this.pending?.el!==t&&(this.pending={el:t,index:e})}restore(e){let t=this.pending;if(t==null||t.el.isConnected)return;let n=document.activeElement;if(n!=null&&n!==document.body){this.pending=void 0;return}let r=t.index,i=e.filter(e=>e.bound>=0).sort((e,t)=>Math.abs(e.bound-r)-Math.abs(t.bound-r));for(let e of i){let t=Ko(e.el);if(t!=null){t.focus();break}}this.pending=void 0}}})))()}var Yo,Xo,Zo,Qo,$o,es,ts,ns,rs;function is(){return(is=e((()=>{Yo={position:`absolute`,display:`block`,left:`0px`,right:`0px`,visibility:`hidden`},Xo={position:`relative`,display:`block`,overflowAnchor:`none`},Zo=e=>{if(e===document.body||e===document.documentElement)return!1;let t=getComputedStyle(e).overflowY;return t===`auto`||t===`scroll`||t===`overlay`},Qo=(e,t)=>{let n=0,r=e.length-1,i=-1;for(;n<=r;){let a=Math.floor((n+r)/2);e[a]<=t?(i=a,n=a+1):r=a-1}return i},$o=(e,t)=>{let n=0,r=e.length-1,i=-1;for(;n<=r;){let a=Math.floor((n+r)/2);e[a]<t?(i=a,n=a+1):r=a-1}return i},es=(e,t,n)=>{let{first:r,last:i}=e,a=[];for(let e=r;e<=i&&a.length<n;e++)a.push(e);for(let e=i+1;a.length<n&&e<t;e++)a.push(e);return a},ts=(e,t)=>{let{first:n,last:r}=e,i=new Map,a=[];for(let e of t)e.bound>=n&&e.bound<=r?i.set(e.bound,e):a.push(e);return[i,a]},ns=(e,t,n)=>{let r=e.get(n);return r==null?t.shift():(e.delete(n),r)},rs=(e,t,n)=>{let[r,i]=ts(e,n),a=new Map,o=i.slice();for(let e of t){let t=ns(r,o,e);t!=null&&a.set(t,e)}return a}})))()}var as;function os(){return(os=e((()=>{Wo(),Jo(),is(),as=class{constructor(e,t){this.parts=[],this.items=[],this.heights=new Map,this.fresh=new Set,this.sum=0,this.samples=0,this.avg=40,this.floor=40,this.offsets=[0],this.dirty=!1,this.total=0,this.visible={first:NaN,last:NaN},this.writtenHeight=0,this.guard=new qo,this.microQueued=!1,this.root=e,this.payload=t,Object.assign(e.style,Xo),this.loop()}setPayload(e){this.payload=e,this.pumpAgain()}pumpAgain(){this.microQueued||(this.microQueued=!0,queueMicrotask(()=>{this.microQueued=!1,this.pump()}))}loop(){requestAnimationFrame(()=>{try{this.pump()}finally{this.loop()}})}pump(){if(!this.root.isConnected)return;this.payload.flatData!==this.items&&this.reset(this.payload.flatData);let e=this.items.length;this.scroller!=null&&this.scroller.isConnected||(this.scroller=this.findScroller());let t=this.scroller?.clientHeight??1/0,n=this.scroller?.scrollTop??0,r=Math.min(e,Math.ceil(t/this.floor)+24+1);this.ensurePool(r),this.reflow(n,t,e),this.applyHeight(),this.dispatchVisible(n,t,e)}reflow(e,t,n){this.ensureOffsets();let r=Math.min(n-1,Qo(this.offsets,e)),i=this.offsets[r]??0;this.fresh.clear();for(let r=0;r<4&&(this.ensureOffsets(),this.reconcile(e,t,n));r++)this.invalidate();this.prune(),this.ensureOffsets(),n>0&&this.compensate(r,i)}reconcile(e,t,n){let r=this.bind(this.rangeFor(e,t,n),n);return r=this.place()||r,r=this.measure()||r,this.guard.restore(this.parts),r}compensate(e,t){if(this.scroller==null)return;let n=this.offsets[e]-t;n!==0&&(this.scroller.scrollTop=this.scroller.scrollTop+n)}reset(e){this.items=Array.isArray(e)?e:[],this.invalidate()}prune(){for(let e of this.fresh){if(this.parts.some(t=>t.bound>=0&&this.items[t.bound]===e))continue;let t=this.heights.get(e);t!=null&&(this.heights.delete(e),this.sum-=t,--this.samples,this.avg=this.samples>0?this.sum/this.samples:40,this.invalidate())}}findScroller(){let e=this.root.parentElement;for(;e!=null;){if(Zo(e))return e;e=e.parentElement}}ensurePool(e){for(;this.parts.length<e;){let e=document.createElement(`cosmoz-grouped-list-row`);Object.assign(e.style,Yo),this.root.appendChild(e),this.parts.push({el:e,bound:-1})}for(;this.parts.length>e;){let e=this.parts.pop(),t=document.activeElement;t!=null&&e.el.contains(t)&&this.guard.remember(Math.max(0,e.bound),t),e.el.remove()}}ensureOffsets(){if(!this.dirty)return;let e=this.heights,t=this.offsets,n=this.items.length;t.length=n+1;let r=0;t[0]=r;for(let i=0;i<n;i++)r+=e.get(this.items[i])??this.avg,t[i+1]=r;this.total=r,this.dirty=!1}invalidate(){this.dirty=!0}rangeFor(e,t,n){if(n===0)return{first:1,last:0};let r=this.offsets,i=Qo(r,e),a=Math.min(n-1,$o(r,e+t));return{first:Math.max(0,i-12),last:Math.min(n-1,a+12)}}bind(e,t){let n=this.parts,r=es(e,t,n.length),i=rs(e,r,n),a=!1;for(let e of n){let t=i.get(e);a=(t===void 0?this.release(e):this.bindSlot(e,t))||a}return a}bindSlot(e,t){let n=e.el,r=this.items[t],i=this.payload.renderRow;if(e.bound===t&&n.item===r&&n.renderFn===i&&n.style.visibility===``)return!1;let a=document.activeElement;return a!=null&&n.contains(a)&&this.guard.remember(e.bound>=0?e.bound:t,a),n.item=r,n.index=t,n.renderFn=i,e.bound=t,n.style.visibility!==``&&(n.style.visibility=``),!0}release(e){if(e.bound===-1&&e.el.item==null)return!1;let t=e.el,n=document.activeElement;return e.bound>=0&&n!=null&&t.contains(n)&&this.guard.remember(e.bound,n),t.item=void 0,t.index=void 0,t.renderFn=void 0,e.bound=-1,t.style.visibility!==`hidden`&&(t.style.visibility=`hidden`),!0}place(){let e=!1;for(let t of this.parts){if(t.bound<0)continue;let n=`${this.offsets[t.bound]}px`;t.el.style.top!==n&&(t.el.style.top=n,e=!0)}return e}measure(){let e=!1;for(let t of this.parts){if(t.bound<0)continue;let n=t.el.getBoundingClientRect().height;if(!(n>0))continue;let r=this.items[t.bound];this.heights.get(r)!==n&&(this.track(r,n),e=!0)}return e}track(e,t){let n=this.heights.get(e);n==null?(this.samples+=1,this.sum+=t,t<this.floor&&(this.floor=t)):this.sum+=t-n,this.heights.set(e,t),this.fresh.add(e),this.avg=this.samples>0?this.sum/this.samples:40,this.invalidate()}applyHeight(){this.total!==this.writtenHeight&&(this.writtenHeight=this.total,this.root.style.height=`${this.total}px`)}dispatchVisible(e,t,n){if(n===0){this.announce(-1,-1);return}let r=this.offsets,i=Math.min(n-1,Qo(r,e)),a=Math.min(n-1,$o(r,e+t));this.announce(i,a)}announce(e,t){let n=this.visible;(n.first!==e||n.last!==t)&&(n.first=e,n.last=t,this.root.closest(`cosmoz-grouped-list`)?.dispatchEvent(new CustomEvent(`visibilityChanged`,{bubbles:!0,detail:{first:e,last:t}})))}}})))()}var ss,cs,ls;function us(){return(us=e((()=>{f(),ee(),Wo(),os(),ss=class extends Ne{constructor(e){super(e)}render(e){return p}update(e,t){let n=t[0];return e.element instanceof HTMLElement&&(this.engine??=new as(e.element,n),this.engine.setPayload(n)),p}},cs=se(ss),ls=e=>j`<div class="glist-recycler-viewport" ${cs(e)}></div>`})))()}var ds,fs,ps,ms,hs,gs,_s,vs,ys;function bs(){return(bs=e((()=>{ds={group:Symbol(`group`)},fs=(e,t)=>(t.has(e)||t.set(e,{}),t.get(e)),ps=(e,t)=>!!fs(e,t).expanded,ms=(e,t)=>!!fs(e,t).folded,hs=e=>e?e.items instanceof Array:!1,gs=e=>{if(!Array.isArray(e)||e.length===0)return;let t=Array.isArray(e[0]?.items);if(!e.every(e=>Array.isArray(e.items)===t))throw Error(`Data must be homogeneous.`)},_s=(e,t,n)=>{if(Array.isArray(e))return gs(e),e.reduce((e,r)=>{let i=r;return i.items?i.items.length?fs(r,n).folded?e.concat(r):e.concat(r,i.items.map(e=>Object.assign(e,{[ds.group]:r}))):t?e.concat(r):e:e.concat(r)},[])},vs=(e,...t)=>typeof e==`function`?e(...t):e,ys=(e,t)=>e===t})))()}var xs;function Ss(){return(Ss=e((()=>{A(),bs(),xs=()=>{let[e,t]=n(()=>[new WeakMap]);return{setItemState:b((e,n)=>t(([t])=>{let r=fs(e,t);return Object.assign(r,vs(n,r)),[t]}),[]),state:e[0],signal:e}}})))()}var Cs;function ws(){return(ws=e((()=>{A(),Ss(),bs(),Cs=()=>{let{setItemState:e,state:t,signal:n}=xs();return{state:t,signal:n,toggleFold:b((t,n)=>{hs(t)&&e(t,e=>({folded:n===void 0?!e.folded:n}))},[]),toggleCollapse:b((t,n)=>{hs(t)||e(t,e=>({expanded:n===void 0?!e.expanded:!n}))},[])}}})))()}var Ts;function Es(){return(Es=e((()=>{A(),$(),bs(),Ts=({compareItemsFn:e,data:t,flatData:i})=>{let[a,o]=v(`selectedItems`,()=>[]),[s,c]=n(),l=b(e=>a===Q||a.includes(e),[a]),u=b(e=>a===Q||(e?.items?.every(l)??!1),[a,l]),d=b(e=>l(e)||u(e),[l,u]),f=b(e=>{let t=e.items??[e];o(e=>e===Q?e:[...e,...t.filter(t=>!e.includes(t))]),c(e)},[]),p=b(e=>{let t=e.items??[e];o(e=>e===Q?(i??[]).filter(e=>!hs(e)).filter(e=>!t.includes(e)):e.filter(e=>!t.includes(e))),c(e)},[i]),m=b(e=>{o(e.items?.slice()||[e]),c(e)},[]),h=b(()=>{o(t.flatMap(e=>e.items||e)),c(void 0)},[t]),g=b(()=>{o([]),c(void 0)},[]),_=b((e,t=!d(e))=>t?f(e):p(e),[d]),y=b((t,n)=>{if(!i)return;let r=s?i.findIndex(t=>e(t,s)):-1;if(r<0)return _(t,n);let[a,o]=[r,i.indexOf(t)].sort((e,t)=>e-t);i.slice(a,o+1).forEach((e,t,r)=>{t>0&&t<r.length-1&&hs(e)||_(e,n)}),c(t)},[i,e,_]);return r(()=>o(t=>t!==Q&&t.length>0&&i?i.filter(n=>t.find(t=>e(n,t))):t),[i]),{selectedItems:a,isItemSelected:l,isGroupSelected:u,isSelected:d,select:f,deselect:p,selectOnly:m,selectAll:h,deselectAll:g,toggleSelect:_,toggleSelectTo:y}}})))()}var Ds,Os,ks;function As(){return(As=e((()=>{i(),A(),f(),Wo(),us(),ws(),Es(),bs(),Ds={host:{position:`relative`,display:`flex`,flexDirection:`column`}},Os=e=>{let{data:t,renderItem:n,renderGroup:r,displayEmptyGroups:i,compareItemsFn:a=ys}=e,{toggleFold:o,toggleCollapse:s,state:c,signal:l}=Cs(),d=u(()=>_s(t,i,c),[t,i,l]),{selectedItems:f,isItemSelected:p,isGroupSelected:m,isSelected:h,select:_,deselect:v,selectOnly:y,selectAll:x,deselectAll:S,toggleSelect:C,toggleSelectTo:ee}=Ts({compareItemsFn:a,data:t,flatData:d}),te=b((e,t)=>Array.isArray(e.items)?r(e,t,{selected:m(e),folded:ms(e,c),toggleSelect:t=>C(e,typeof t==`boolean`?t:void 0),toggleFold:()=>o(e)}):n(e,t,{selected:p(e),expanded:ps(e,c),toggleSelect:t=>C(e,typeof t==`boolean`?t:void 0),toggleCollapse:()=>s(e)}),[n,r,f,C,l]);g(()=>{Object.assign(e.style,Ds.host)},[]);let w={toggleFold:o,toggleCollapse:s,isItemSelected:p,isGroupSelected:m,isSelected:h,select:_,deselect:v,selectOnly:y,selectAll:x,deselectAll:S,toggleSelect:C,toggleSelectTo:ee};return Me(w,Object.values(w)),{renderRow:te,flatData:d}},ks=({renderRow:e,flatData:t})=>t==null?E:ls({renderRow:e,flatData:t})})))()}var js;function Ms(){return(Ms=e((()=>{A(),As(),js=e=>ks(Os(e)),customElements.define(`cosmoz-grouped-list`,O(js,{useShadowDOM:!1}))})))()}function Ns(){return(Ns=e((()=>{Ms()})))()}var Ps,Fs,Is;function Ls(){return(Ls=e((()=>{Ge(),Lt(),ci(),ui(),Ni(),Ri(),Vi(),A(),Ue(),f(),pe(),Wi(),ea(),na(),ca(),Ho(),$(),Ns(),yo(),Co(),Ps=e=>window.ShadyCSS?.ApplyShim?.transformCssText?.(e)||e,Fs=e=>{let{header:t,list:n,footer:r}=Vo(e),i=n.loading&&n.processedItems.length>0,a=r.selectedItems===Q||r.selectedItems.length>0;return j`
		<style>
			${me([],()=>Ps(Ui))}
		</style>

		<div class="mainContainer${a?` bottombar-active`:``}">
			${ta(t)}
			<div
				class="tableContent${i?` has-spinner`:``}"
				id="tableContent"
			>
				${sa(t,n)}
			</div>
			${$i(r)}
		</div>

		<div id="columns">
			<slot id="columnsSlot"></slot>
		</div>
	`},customElements.define(`cosmoz-omnitable`,O(Fs,{observedAttributes:[`hash-param`,`sort-on`,`group-on`,`descending`,`group-on-descending`,`hide-select-all`,`settings-id`,`no-local`,`no-local-sort`,`no-local-filter`,`disabled-filtering`,`loading`,`mini-breakpoint`,`compact`,`inline`,`enable-select-all`]})),Is=`
	<slot name="actions" slot="actions"></slot>
`,j(Object.assign([Is],{raw:[Is]})),Ve(Object.assign([Is],{raw:[Is]}))})))()}var Rs,zs,Bs,Vs,Hs;function Us(){return(Us=e((()=>{f(),He(),ct(),St(),Ls(),yt(),Rs={title:`Components/ComsmozOmnitableFullDemo`,component:`cosmoz-omnitable`,tags:[`autodocs`],args:{loading:!1,locale:`en`,sortOn:``,groupOn:``,descending:!1,groupOnDescending:!1,hashParam:``,settingsId:``,selectedItems:[],disabledFiltering:!1,enableSelectAll:!1,allItemsCount:1e4},argTypes:{loading:{control:`boolean`,description:`Show loading state`,table:{defaultValue:{summary:`false`}}},locale:{control:`select`,options:[`en`,`fr`,`sv`],description:`Language locale`,table:{defaultValue:{summary:`en`}}},selectedItems:{control:`object`,description:`Show selected items`},allItemsCount:{control:`number`,description:`Total number of items`},data:{control:`object`,description:`Show specified items`},sortOn:{control:`text`,description:`Column property name to sort on (e.g., "amount", "date", "id")`},groupOn:{control:`text`,description:`Column property name to group on (e.g., "amount", "date", "id")`},descending:{control:`boolean`,description:`Sort on descending`},groupOnDescending:{control:`boolean`,description:`Group on descending`},hashParam:{control:`text`,description:`Hash parameter for URL state management`},settingsId:{control:`text`,description:`ID for storing table settings`},disabledFiltering:{control:`boolean`,description:`Disable filter inputs in all column headers`,table:{defaultValue:{summary:`false`}}}},render:e=>j`
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
                    ${$e({styles:`vertical-align: middle; fill: currentColor;`})}
                    <span>Remove items</span>
                </cosmoz-button>
            </cosmoz-omnitable>
        `,play:async()=>{console.log(`Current hash:`,window.location.hash)}},zs={args:{data:bt(10,10,10)}},Bs={args:{data:bt(2,2,10)}},Vs={args:{data:[]}},Hs=[`TableWithLargeData`,`TableWithSmallData`,`TableWithNoData`],zs.parameters={...zs.parameters,docs:{...zs.parameters?.docs,source:{originalSource:`{
  args: {
    data: generateTableDemoData(10, 10, 10)
  }
}`,...zs.parameters?.docs?.source}}},Bs.parameters={...Bs.parameters,docs:{...Bs.parameters?.docs,source:{originalSource:`{
  args: {
    data: generateTableDemoData(2, 2, 10)
  }
}`,...Bs.parameters?.docs?.source}}},Vs.parameters={...Vs.parameters,docs:{...Vs.parameters?.docs,source:{originalSource:`{
  args: {
    data: []
  }
}`,...Vs.parameters?.docs?.source}}}})))()}Us();export{zs as TableWithLargeData,Vs as TableWithNoData,Bs as TableWithSmallData,Hs as __namedExportsOrder,Rs as default};