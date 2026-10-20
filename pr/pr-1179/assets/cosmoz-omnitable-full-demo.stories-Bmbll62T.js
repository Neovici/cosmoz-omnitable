import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$t as t,A as n,At as r,Bt as i,C as a,D as o,Dt as s,E as c,F as l,Ht as u,It as d,J as f,K as p,Mt as m,N as h,Pt as g,Q as _,Qt as v,Rt as y,S as b,T as x,U as S,Ut as C,V as ee,W as te,X as ne,Xt as w,Yt as re,_ as ie,_t as T,a as ae,at as oe,bt as se,d as ce,dt as le,f as E,ft as ue,g as de,h as fe,ht as pe,i as me,j as he,k as ge,kt as _e,lt as ve,m as ye,nt as be,ot as xe,p as Se,pt as Ce,rt as we,t as Te,tt as D,ut as Ee,v as De,vt as O,x as Oe,yt as k,z as A}from"./dist-CA1-p9wK.js";import{$ as ke,A as Ae,C as je,D as Me,E as Ne,F as j,G as Pe,H as Fe,I as Ie,L as Le,M as Re,N as ze,O as M,P as N,Q as Be,R as Ve,S as He,T as Ue,U as We,V as Ge,X as Ke,Y as qe,Z as Je,_ as Ye,a as Xe,b as Ze,c as Qe,d as $e,et,f as tt,g as nt,h as rt,j as it,k as P,l as at,n as ot,o as st,p as ct,q as lt,r as ut,t as dt,u as ft,v as pt,w as mt,x as ht,y as gt,z as _t}from"./dist-ClmFkTjG.js";import{n as vt,t as yt}from"./table-demo-helper-C6ZNhr6E.js";var bt;function xt(){return(xt=e((()=>{O(),bt=()=>v`<style>
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
</style>`,customElements.define(`cz-spinner`,k(bt))})))()}var St,Ct;function F(){return(F=e((()=>{A(),Ce(),O(),St=T`
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
`,Ct=()=>v`
	<style>
		${St}
	</style>
	${S({className:`icon`,width:`18`,height:`18`})}
`,customElements.define(`cosmoz-clear-button`,k(Ct))})))()}var I,wt,Tt,Et,Dt,L;function R(){return(R=e((()=>{j(),I=({valuePath:e},t)=>N(t,e),wt=I,Tt=I,Et=({valuePath:e},t)=>n=>{let r=N(n,e);return r!=null&&r.toString().toLowerCase().trim().includes(t.toLowerCase().trim())},Dt=(e,t)=>t===``||t==null?null:t,L=e=>class extends e{static get properties(){return{isOmnitableColumn:{type:Boolean,value:!0},title:{type:String},valuePath:{type:String,notify:!0},values:{type:Array,notify:!0},filter:{type:Object},noLocalFilter:{type:Boolean},disabled:{type:Boolean,value:!1,notify:!0},editable:{type:Boolean,notify:!0},loading:{type:Boolean,value:!1,notify:!0},externalValues:{type:Boolean,value:!1,notify:!0},name:{type:String},sortOn:{type:String},groupOn:{type:String},noSort:{type:Boolean,value:!1},disabledFiltering:{type:Boolean,value:!1},width:{type:String,value:`75px`},minWidth:{type:String,value:`40px`},flex:{type:String,value:`1`},cellClass:{type:String,value:`default-cell`},headerCellClass:{type:String,value:`default-header-cell`},priority:{type:Number,value:0},hidden:{type:Boolean,notify:!0},align:{type:String,value:`left`},headerAlign:{type:String,value:null},renderHeader:{type:Function},renderCell:{type:Function},renderEditCell:{type:Function},renderGroup:{type:Function},mini:{type:Number,value:null},renderMini:{type:Function}}}static get observers(){return[`notifyFilterChange(filter)`]}notifyFilterChange(e){this.__ownChange||this.dispatchEvent(new CustomEvent(`legacy-filter-changed`,{detail:{name:this.name,state:this.legacyFilterToState(e)},bubbles:!0}))}legacyFilterToState(e){return{filter:e}}getFilterFn(){}getString(e,t){return I(e,t)}toXlsxValue(e,t){return wt(e,t)}cellTitleFn(e,t){return this.getString(e,t)}headerTitleFn(e){return e.title}serializeFilter(e,t){return Dt(e,t)}deserializeFilter(e,t){if(t==null)return null;if(typeof t==`string`)try{return window.decodeURIComponent(t)}catch{return null}return t}getComparableValue(e,t){return Tt(e,t)}computeSource(e,t){return t}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n),this.dispatchEvent(new CustomEvent(`cosmoz-column-prop-changed`,{bubbles:!0}))}}})))()}var Ot,kt,At,jt,Mt,Nt,Pt;function Ft(){return(Ft=e((()=>{c(),F(),P(),t(),R(),Ot=e=>t=>e(n=>{if(n.inputValue===void 0&&t.target.value===``)return n;clearTimeout(n.t);let r=setTimeout(()=>e(e=>({...e,filter:e.inputValue})),1e3);return{...n,inputValue:t.target.value,t:r}}),kt=e=>()=>e(e=>({...e,filter:e.inputValue})),At=e=>t=>{t.keyCode===13&&(t.preventDefault(),e(e=>({...e,filter:e.inputValue})))},jt=e=>t=>e(e=>({...e,headerFocused:t.detail.value})),Mt=e=>()=>e(e=>({...e,filter:null,inputValue:null})),Nt=e=>e!=null&&e!==``,Pt=class extends L(M){static get properties(){return{minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},inputValue:{type:Object,notify:!0}}}getFilterFn(e,t){if(t!=null&&t!==``)return Et(e,t)}renderCell(e,{item:t}){return v`<span class="default-column">${I(e,t)}</span>`}renderEditCell(e,{item:t},n){return v`<cosmoz-input
			variant="inline"
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${I(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,inputValue:n,headerFocused:r},i){return v`<cosmoz-input
			variant="inline"
			label=${e.title}
			?disabled=${e.disabledFiltering}
			.value=${n??t}
			@value-changed=${Ot(i)}
			focused=${r}
			@focused-changed=${jt(i)}
			@keydown=${At(i)}
			@blur=${kt(i)}
		>
			${D(!e.disabledFiltering,()=>v`<cosmoz-clear-button
						suffix
						slot="suffix"
						?visible=${Nt(t)}
						light
						@click=${Mt(i)}
					></cosmoz-clear-button>`)}
		</cosmoz-input>`}legacyFilterToState(e){return{filter:e,inputValue:e}}},customElements.define(`cosmoz-omnitable-column`,Pt)})))()}var It,Lt,Rt;function z(){return(z=e((()=>{c(),O(),t(),It=[`label`,`value`,`slot`,`always-float-label`,`disabled`,`variant`],Lt=C`
	${h}

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
`,Rt=e=>{let{label:t,value:n,slot:r}=e;e.toggleAttribute(`has-value`,!!n);let i=v`<div
		id="input"
		part="input"
		role="button"
		class="control"
		slot=${r}
	>
		${n||``}
	</div>`;return l(i,{label:t})},customElements.define(`cosmoz-omnitable-dropdown-input`,k(Rt,{observedAttributes:It,styleSheets:[Lt]}))})))()}var zt;function Bt(){return(Bt=e((()=>{Le(),t(),Ne(),z(),zt=({title:e,tooltip:t=``,filterText:n=``,onOpenedChanged:r,content:i,align:a=`left`,externalValues:o=null})=>{let s={filtered:!!n,...o!=null&&{[`external-values-${o}`]:!0}};return v`
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
			class=${Ue({...s,dropdown:!0})}
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
	`}})))()}var Vt,Ht;function Ut(){return(Ut=e((()=>{Ee(),Re(),mt(),ht(),Vt=e=>e?typeof e.close==`function`?e:Vt(e.parentElement):null,Ht=e=>class extends e{static get properties(){return{disabled:{type:Boolean,value:!1},filter:{type:Object,notify:!0},values:{type:Array,value(){return[]}},headerFocused:{type:Boolean,notify:!0},min:{type:Number,value:null},max:{type:Number,value:null},limits:{type:Function},autoupdate:{type:String,value:!0},locale:{type:String,value:null},align:{type:String,value:`left`},_filterInput:{type:Object,value(){return{min:null,max:null}}},_range:{type:Object,computed:`_computeRange(values.*)`},_limit:{type:Object,computed:`_computeLimit(_range, _filterInput.*, min, max)`,value(){return{}}},_tooltip:{type:String,computed:`_computeTooltip(title, _filterText)`},_fromClasses:{type:String,computed:`_computeInputClasses(_filterInput.min)`},_toClasses:{type:String,computed:`_computeInputClasses(_filterInput.max)`}}}static get observers(){return[`_filterInputChanged(_filterInput.*, autoupdate)`,`_filterChanged(filter.*)`,`_updateLimits(limits, headerFocused)`]}disconnectedCallback(){this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),super.disconnectedCallback()}_computeInputClasses(e){return e!=null&&e!==``?`has-value`:``}toNumber(e,t,n){if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=this.toNumber(t);return i==null?r:n(r,i)}toValue(){return this.toNumber.apply(this,arguments)}getComparableValue(e,t){if(e==null)return;let n=e;return t!=null&&(n=this.get(t,e)),this.toValue(n)}renderValue(){}getInputString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return this._toInputString(n)}_computeRange(e){let t=e.base,n=Array.isArray(t)&&t.length&&t.map(e=>this.toValue(e)).filter(e=>e!=null);return!n||n.length<1?{min:null,max:null}:n.reduce((e,t)=>({min:this.toValue(t,e.min,Math.min),max:this.toValue(t,e.max,Math.max)}),{})}_computeLimit(e,t,n,r){if(!e)return;let i=t.base,a=this.toValue(n),o=this.toValue(r),s=a??this.toValue(e.min),c=o??this.toValue(e.max);return{fromMin:s,fromMax:this.toValue(c,this._fromInputString(i.max,`max`),Math.min),toMin:this.toValue(s,this._fromInputString(i.min,`min`),Math.max),toMax:c}}_computeFilterText(e){if(e.base==null)return;let t=e.base,n=this.toValue(t.min),r=this.toValue(t.max),i=[];return n!=null&&i.push(this.renderValue(n)),i.push(` - `),r!=null&&i.push(this.renderValue(r)),i.length>1?i.join(``):void 0}_computeTooltip(e,t){return t==null?e:`${e}: ${t}`}_fromInputString(e){return this.toValue(e)}_toInputString(e){return this.toValue(e)??null}_getDefaultFilter(){return{min:null,max:null}}_filterInputChanged(e,t){let n=e.path.split(`.`)[1];this.__inputChangePath=n||null,t&&(this._limitInputDebouncer=He.debounce(this._limitInputDebouncer,ze.after(600),()=>{this._limitInput(),this._updateFilter()}),je(this._limitInputDebouncer))}_clearFrom(){this.set(`_filterInput.min`,null),this._updateFilter()}_clearTo(){this.set(`_filterInput.max`,null),this._updateFilter()}_onBlur(){this._limitInput(),this._updateFilter()}_onKeyDown(e){let t=e.currentTarget,n=Array.from(t.parentElement.querySelectorAll(`cosmoz-input`)),r=n[n.findIndex(e=>e===t)+1],i=!r,a=n[0]===t;switch(e.keyCode){case 13:if(e.preventDefault(),!i)r.focus();else{let e=this._limitInput();this._updateFilter(),e||this._closeParent(t)}break;case 9:(i&&!e.shiftKey||a&&e.shiftKey)&&this._closeParent(t)}}_closeParent(e){let t=Vt(e);t&&t.close()}_onDropdownOpenedChanged({currentTarget:e,type:t,detail:n}){(t===`focus`||n?.value===!0)&&setTimeout(()=>{e.querySelector(`cosmoz-input:focus`)||e.querySelector(`cosmoz-input`)?.focus()},100)}_limitInput(){let e=this._filterInput,t=this.__inputChangePath,n=t?this._fromInputString(this.get(t,e),t):null;if(this.__inputChangePath=null,n==null)return!1;let r=this._limit,i=t===`min`?`from`:`to`,a=this.get(i+`Min`,r),o=this.get(i+`Max`,r),s=this.toValue(n,a,Math.max),c=this.toValue(s,o,Math.min);return this.getComparableValue(n)!==this.getComparableValue(c)&&(this.set([`_filterInput`,t],this._toInputString(c,t)),this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),!0)}_updateFilter(){let e=this._filterInput,t=this.filter,n=this._fromInputString(e.min,`min`),r=this._fromInputString(e.max,`max`);(this.getComparableValue(n)!==this.getComparableValue(t,`min`)||this.getComparableValue(r)!==this.getComparableValue(t,`max`))&&this.set(`filter`,{min:n,max:r})}_filterChanged(e){if(this._filterInput==null)return;let t=this._filterInput,n=e.base,r=this._fromInputString(t.min,`min`),i=this._fromInputString(t.max,`max`);(this.getComparableValue(r)!==this.getComparableValue(n,`min`)||this.getComparableValue(i)!==this.getComparableValue(n,`max`))&&(this.set(`_filterInput`,{min:this._toInputString(n.min),max:this._toInputString(n.max)}),this._limitInputDebouncer&&this._limitInputDebouncer.cancel())}hasFilter(){let e=this.filter;return e==null?!1:this.toValue(e.min)!=null||this.toValue(e.max)!=null}resetFilter(){this.filter=this._getDefaultFilter()}_updateLimits(e,t){e&&Promise.resolve(le(e,{active:t})).then(e=>{let{min:t,max:n}=e??{};Object.assign(this,{...t==null?{}:{min:t},...n==null?{}:{max:n}})})}}})))()}var Wt;function Gt(){return(Gt=e((()=>{P(),t(),Wt=e=>class extends e{static get template(){return Ae`<div id="output" style="position:relative;"></div>`}connectedCallback(){super.connectedCallback();let e=this;w(e.render(),e.$.output)}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n);let r=this;requestAnimationFrame(()=>w(r.render(),r.$.output))}}})))()}var Kt;function qt(){return(qt=e((()=>{c(),P(),a(),t(),Bt(),z(),Ut(),Gt(),Kt=class extends Ht(Wt(M)){static get properties(){return{currency:{type:String},autodetect:{type:Boolean,value:!1},rates:{type:Object},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, _formatters)`},headerFocused:{type:Boolean,value:!1}}}static get observers(){return[`_valuesChanged(autodetect, currency, values)`]}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return v`
			${D(this.disabled,()=>v`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>v`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${zt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:v`
							<h3>${this.title}</h3>
							<cosmoz-input
								class=${this._fromClasses}
								type="number"
								title=${x(`Minimum amount`)}
								label=${x(`Min amount`)}
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
								title=${x(`Maximum amount`)}
								label=${x(`Max amount`)}
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
		`}_valuesChanged(e,t,n){if(!Array.isArray(n)||n.length<1||!e&&t)return;let r=n.reduce((e,t)=>{if(t.currency){let n=t.currency;e[n]=(e[n]||0)+1}return e},{}),i=Object.keys(r)[0];Object.keys(r).reduce((e,t)=>{let n=Math.max(e,r[t]);return n===r[t]&&(i=t),n},0),this.set(`currency`,i)}toAmount(e,t,n){if(e==null||e===``)return;if(typeof e!=`object`||e.currency==null||e.currency===``)return null;let r=this.toNumber(e.amount);if(r==null||Number.isNaN(r))return null;let i={currency:e.currency,amount:r};if(n==null||t==null)return i;let a=this.toAmount(t);if(a==null)return i;let o=this.rates||{},s=i.amount*(o[i.currency]||1),c=a.amount*(o[a.currency]||1);return this.toNumber(s,c,n)===s?i:a}toValue(){return this.toAmount.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n==null)return;let r=this.toNumber(n.amount),i=this.rates;return i==null?r:r*(i[n.currency]||1)}getString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return n===void 0?``:n===null?`Invalid value`:this.renderValue(n)}getCurrency(e,t){let n=this.get(t,e);return n&&n.currency}getFormatter(e,t){let n=e+(t||``)||``,r=this._formatters=this._formatters||{};return r[n]||(r[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),r[n]}renderValue(e){let t=this.toAmount(e);return t==null?``:this.getFormatter(t.currency,this.locale).format(e.amount)}_amountValueChanged(e){let t=e.target.value,n=e.model.item,r=this.get(this.valuePath,n),i={amount:Number(t),currency:r.currency};this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toInputString(e){let t=this.toValue(e);return t==null?null:this.toNumber(t.amount)}_toInputStringAmount(e){let t=this.rates;if(t==null)return this._toInputString(e);let n=this.toValue(e);return n==null?null:(this.toNumber(n.amount)*(t[n.currency]||1)/(t[this.currency]||1)).toFixed(2)}_fromInputString(e,t){let n=this.toNumber(e);if(n!=null)return this.toValue({amount:n,currency:t&&this.get([`filter`,t,`currency`])||this.currency})}},customElements.define(`cosmoz-omnitable-amount-range-input`,Kt)})))()}var B,Jt,Yt,Xt,V,Zt,Qt,$t;function en(){return(en=e((()=>{j(),pt(),B=(e,t,n)=>{if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=B(t);return i==null?r:n(r,i)},Jt=e=>{let t=B(e);return t==null?null:t.toString()},Yt=({valuePath:e},t)=>{let n=B(e?N(t,e):t);return Jt(n)},Xt=e=>Jt(e)??``,V=({valuePath:e,maximumFractionDigits:t},n)=>{if(n==null)return;let r=e?N(n,e):n,i=B(r);if(i!=null)return t===null?i:B(i.toFixed(t))},Zt=Ze((e,t,n)=>{let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}),Qt=({valuePath:e,locale:t,minimumFractionDigits:n,maximumFractionDigits:r},i)=>{let a=e?N(i,e):i;if(a==null)return``;let o=B(a);if(o!=null)return Zt(t,n,r).format(o)},$t=(e,t)=>n=>{let r=V(e,n);if(r==null)return!1;let i=V({...e,valuePath:`min`},t),a=V({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})))()}var H,U,tn,nn,rn,an,on,sn,cn,ln,un;function dn(){return(dn=e((()=>{j(),en(),H=(e={},t,n,r)=>{if(t==null||t===``)return;if(typeof t!=`object`||t.currency==null||t.currency===``)return null;let i=B(t.amount);if(i==null||Number.isNaN(i))return null;let a={currency:t.currency,amount:i};if(r==null||n==null)return a;let o=H(e,n);if(o==null)return a;let s=a.amount*(e[a.currency]||1),c=o.amount*(e[o.currency]||1);return B(s,c,r)===s?a:o},U=({valuePath:e,rates:t},n)=>{if(n==null)return;let r=n;e!=null&&(r=N(n,e));let i=H(t,r);if(i==null)return;let a=B(i.amount);return t==null||a==null?a:a*(t?.[i.currency]||1)},tn=(e,t)=>n=>{let r=U(e,n);if(r===void 0)return!1;let i=U({...e,valuePath:`min`},t),a=U({...e,valuePath:`max`},t);return i===void 0||a===void 0||!(r<i||r>a)},nn={},rn=(e,t)=>{let n=e+(t||``)||``;return nn[n]||(nn[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),nn[n]},an=(e,t,n)=>{let r=H(e,t);return r==null?``:rn(r.currency,n).format(r.amount)},on=({valuePath:e,rates:t,locale:n},r)=>{let i=H(t,e?N(r,e):void 0);return i===void 0?``:i===null?`Invalid value`:an(t,i,n)},sn=e=>e?e.amount+e.currency:``,cn=e=>{if(e==null||e===``)return;let t=e.match(/^(-?[\d]+)([\D]+?)$/iu);if(!(!Array.isArray(t)||t.length<0))return{amount:Number(t[1]),currency:t[2]}},ln=({valuePath:e},t)=>e?N(t,e)?.currency:null,un=({valuePath:e},t)=>e?N(t,e)?.amount:void 0})))()}var W,fn,pn,mn,hn,gn,_n;function G(){return(G=e((()=>{pt(),O(),W=Symbol(`column`),fn=e=>{let t=!0,n=e.map(e=>e.name);return e.forEach(e=>{e.name??(t=!1,console.error(`The name attribute needs to be set on all columns! Missing on column`,e))}),e.forEach(e=>{n.indexOf(e.name)!==n.lastIndexOf(e.name)&&(t=!1,console.error(`The name attribute needs to be unique among all columns! Not unique on column`,e))}),t},pn=(e,t)=>{let n=e.valuePath??e.name;return{name:e.name,title:e.title,valuePath:n,groupOn:e.groupOn??n,sortOn:e.sortOn??n,noSort:e.noSort,disabledFiltering:t||e.disabledFiltering,minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,getString:e.getString,getComparableValue:e.getComparableValue,serializeFilter:e.serializeFilter,deserializeFilter:e.deserializeFilter,toXlsxValue:e.toXlsxValue,renderHeader:e.renderHeader,renderCell:e.renderCell,renderEditCell:e.renderEditCell,renderGroup:e.renderGroup,cellTitleFn:e.cellTitleFn,headerTitleFn:e.headerTitleFn,getFilterFn:e.getFilterFn,headerCellClass:e.headerCellClass,cellClass:e.cellClass,editable:e.editable,values:e.values,source:gt(e.computeSource),noLocalFilter:e.noLocalFilter,mini:e.mini,renderMini:e.renderMini,align:e.align,headerAlign:e.headerAlign,loading:e.loading,externalValues:e.externalValues,computeSource:e.computeSource,trueLabel:e.trueLabel,falseLabel:e.falseLabel,valueProperty:e.valueProperty,textProperty:e.textProperty,emptyLabel:e.emptyLabel,emptyValue:e.emptyValue,min:e.min,max:e.max,locale:e.locale,autoupdate:e.autoupdate,maximumFractionDigits:e.maximumFractionDigits,minimumFractionDigits:e.minimumFractionDigits,currency:e.currency,rates:e.rates,autodetect:e.autodetect,ownerTree:e.ownerTree,keyProperty:e.keyProperty,...e.getConfig?.(e),[W]:e}},mn=e=>e.isOmnitableColumn&&!e.hidden,hn=e=>{let t=e.filter(mn);return fn(t)?t:[]},gn=(e,t,n)=>(Array.isArray(t)?e.filter(e=>t.includes(e.name)):e.filter(e=>!e.disabled)).map(e=>pn(e,n)),_n=(e,{enabledColumns:t,disabledFiltering:n})=>{let[r,i]=m([]);return g(()=>{let r,a=[],o=e.shadowRoot.querySelector(`#columnsSlot`),s=e=>()=>{let r=o.assignedNodes({flatten:!0});if(e)a=r;else{let e=r.filter(e=>!a.includes(e)),t=a.filter(e=>!r.includes(e)),n=[...e,...t].some(e=>e.isOmnitableColumn);if(a=r,!n)return}i(gn(hn(r),t,n))},c=e=>{cancelAnimationFrame(r),r=requestAnimationFrame(s(e?.type===`cosmoz-column-prop-changed`))};return c(),o.addEventListener(`slotchange`,c),e.addEventListener(`cosmoz-column-prop-changed`,c),()=>{o.removeEventListener(`slotchange`,c),e.removeEventListener(`cosmoz-column-prop-changed`,c),cancelAnimationFrame(r)}},[t,n]),r}})))()}var vn,yn,bn;function K(){return(K=e((()=>{j(),G(),vn=(e,t)=>Array.isArray(e)?e.map(e=>N(e,t)).filter((e,t,n)=>e!=null&&n.indexOf(e)===t):void 0,yn=({externalValues:e,values:t,valuePath:n},r)=>{if(e)return e;if(typeof t==`function`)return t;if(n!==void 0)return vn(r,n)},bn=(e,t,n,r)=>{let{valuePath:i}=t,a=i===void 0?void 0:N(n,i);if(r===a)return;i!==void 0&&Ie(n,i,r);let o={item:n,valuePath:i,value:r,oldValue:a,column:t[W]};e.dispatchEvent(new CustomEvent(`column-item-changed`,{bubbles:!0,composed:!0,detail:o}))}})))()}var xn;function Sn(){return(Sn=e((()=>{c(),F(),P(),t(),j(),R(),qt(),dn(),K(),xn=class extends L(M){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},currency:{type:String,notify:!0},autodetect:{type:Boolean,value:!1,notify:!0},rates:{type:Object,notify:!0},width:{type:String,value:`70px`},cellClass:{type:String,value:`amount-cell`},headerCellClass:{type:String,value:`amount-header-cell`},align:{type:String,value:`right`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=U({...e,valuePath:`min`},t),r=U({...e,valuePath:`max`},t);if(n!=null||r!=null)return tn(e,t)}getString(e,t){return on(e,t)}toXlsxValue(e,t){return on(e,t)}getComparableValue(e,t){return U(e,t)}serializeFilter({rates:e},t){if(t==null)return;let n=H(e,t.min),r=H(e,t.max);if(n!=null||r!=null)return sn(n)+`~`+sn(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:cn(n[1]),max:cn(n[2])}:null}renderCell(e,{item:t}){return v`<span>${e.getString(e,t)}</span>`}renderEditCell(e,{item:t},n){return v`<cosmoz-input
			type="number"
			@change=${r=>n({amount:r.target.value,currency:N(t,e.valuePath)?.currency})}
			.value=${un(e,t)}
		>
			<div slot="suffix">${ln(e,t)}</div>
		</cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,rates:a,currency:o,autoupdate:s,autodetect:c,disabledFiltering:l,headerAlign:u,align:d},{filter:f},p,m){return v`<cosmoz-omnitable-amount-range-input
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
		></cosmoz-omnitable-amount-range-input>`}computeSource(e,t){return yn(e,t)}},customElements.define(`cosmoz-omnitable-column-amount`,xn)})))()}var Cn,wn,Tn,En,Dn,On,kn,An,jn,Mn,Nn,Pn;function Fn(){return(Fn=e((()=>{ae(),Ee(),ce(),j(),K(),Cn=(e,t)=>{if(!Array.isArray(e))return;let n=[];return e.reduce((e,t)=>Array.isArray(t)?(t.forEach(t=>{e.push(t)}),e):(e.push(t),e),[]).filter((e,r,i)=>{if(i.indexOf(e)!==r)return!1;if(t){let r=N(e,t);if(n.indexOf(r)!==-1)return!1;n.push(r)}return!0})},wn=(e,t,n)=>{if(e==null)return[];if(Array.isArray(e)){let r=Cn(e,t);if(!r?.length)return[];let i=n??`label`,a=e=>String(typeof e==`object`&&e?N(e,i??``)??``:e??``);return r.sort((e,t)=>a(e).localeCompare(a(t)))}if(typeof e==`object`){let r=t??`id`,i=n??`label`;return Object.entries(e).map(([e,t])=>({[r]:e,[i]:t})).sort((e,t)=>String(e[i]??``).localeCompare(String(t[i]??``)))}return[]},Tn=(e,t,n)=>me(t&&N(e,t)).map(E(n)),En=({valuePath:e,textProperty:t},n)=>Tn(n,e,t).filter(e=>e!=null).join(`, `),Dn=En,On=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>a=>{let o=E(e),s=me(N(a,t));return i.some(t=>s.length===0&&E(r||e)(t)===n||s.some(e=>o(e)===o(t)))},kn=e=>t=>e(e=>({...e,filter:t})),An=e=>t=>e(e=>({...e,headerFocused:t})),jn=e=>t=>e(e=>({...e,query:t})),Mn=({emptyValue:e,emptyLabel:t,emptyProperty:n,textProperty:r,valueProperty:i},a)=>{let o=wn(a,i,r);return!t||e===void 0||!r||!(n||i)||!o?o:[{[r]:t,[n||i]:e},...o]},Nn=(e,t)=>Mn(e,vn(t,e.valuePath)),Pn=e=>class extends e{static get properties(){return{textProperty:{type:String},valueProperty:{type:String},emptyLabel:{type:String},emptyValue:{type:Object},emptyProperty:{type:String}}}getConfig(e){return{emptyProperty:e.emptyProperty}}getString(e,t){return En(e,t)}toXlsxValue(e,t){return Dn(e,t)}getComparableValue({valuePath:e,valueProperty:t},n){let r=N(n,e);return t==null?r:me(r).map(E(t)).sort().join(` `)}getFilterFn(e,t){if(t&&Array.isArray(t)&&t.length!==0)return On(e,t)}serializeFilter(e,t){return Array.isArray(t)&&t.length===0?null:JSON.stringify(t)}deserializeFilter(e,t){if(t==null)return null;try{return JSON.parse(decodeURIComponent(t))}catch(e){let n=e;return console.error(`Failed to deserialize filter value:`,{error:n?.name,message:n?.message,filterLength:typeof t==`string`?t.length:null}),null}}computeSource(e,t){return e.externalValues||typeof e.values==`function`?async(...t)=>Mn(e,await Promise.resolve(le(e.values,...t))):Nn(e,t)}}})))()}var In,Ln,Rn;function zn(){return(zn=e((()=>{Te(),Ye(),P(),t(),ae(),ce(),Fn(),R(),O(),j(),G(),In=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?ye(t):E(n),a=me(e&&N(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},Ln=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>{let a=E(e),o=E(r||e),s=new Set(i.filter(e=>e.excluded).map(e=>a(e.item))),c=new Set(i.filter(e=>!e.excluded).map(e=>a(e.item))),l=i.some(e=>e.excluded&&o(e.item)===n),u=i.some(e=>!e.excluded&&o(e.item)===n);return e=>{let n=me(N(e,t)).map(a);return n.length===0?!l&&(u||c.size===0):!n.some(e=>s.has(e))&&(c.size===0||n.some(e=>c.has(e)))}},Rn=class extends Pn(L(M)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return v`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},n){return v`<cosmoz-input
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${I(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:n},r,i){return v`<cosmoz-autocomplete-excluding
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
			.itemRenderer=${e[W]?.itemRenderer}
			.value=${t}
			.text=${n}
			.limit=${e.limit}
			@opened-changed=${e=>An(r)(e.detail.value)}
			@value-changed=${_e(kn(r))}
			@text-changed=${_e(jn(r))}
			>${D(e.loading,()=>v`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-excluding
		>`}getComparableValue(e,t){return In(e,t)}getFilterFn(e,t){if(t&&Array.isArray(t)&&t.length!==0)return Ln(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete-excluding`,Rn)})))()}var Bn,Vn;function Hn(){return(Hn=e((()=>{Te(),Ye(),P(),t(),ae(),ce(),Fn(),R(),j(),G(),Bn=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?ye(t):E(n),a=me(e&&N(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},Vn=class extends Pn(L(M)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return v`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},n){return v`<cosmoz-input
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${I(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:n},r,i){return v`<cosmoz-autocomplete-ui
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
			.itemRenderer=${e[W]?.itemRenderer}
			.value=${t}
			.text=${n}
			.limit=${e.limit}
			.onChange=${kn(r)}
			@opened-changed=${e=>An(r)(e.detail.value)}
			.onText=${jn(r)}
			>${D(e.loading,()=>v`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}getComparableValue(e,t){return Bn(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete`,Vn)})))()}var Un,Wn,Gn,Kn,qn,Jn,Yn,Xn,Zn,Qn,$n,er,tr,nr;function rr(){return(rr=e((()=>{P(),R(),Te(),pt(),j(),t(),Un=(e,t)=>t.find(({value:t})=>e===t),Wn=(e,t,n)=>{let r=Un(t,n);return r?r.text:e},Gn=(e,t,n,r)=>Wn(e,N(t,n),r),Kn=({valuePath:e},t,n)=>Un(N(t,e),n),qn=e=>t=>{e(e=>({...e,filter:t?.[0]?.value??null}))},Jn=e=>t=>{e(e=>({...e,headerFocused:t}))},Yn=e=>t=>{e(e=>({...e,query:t}))},Xn=e=>t=>e(t?.[0]?.value),Zn=({valuePath:e,trueLabel:t,falseLabel:n},r)=>N(r,e)?t:n,Qn=({valuePath:e},t)=>n=>N(n,e)===t,$n=gt((e,t)=>[{text:e,value:!0},{text:t,value:!1}]),er=({valuePath:e,trueLabel:t,falseLabel:n},r)=>e?N(r,e)?t:n:``,tr=(e,t)=>{try{return JSON.parse(t)}catch{return null}},nr=class extends L(M){static get properties(){return{trueLabel:{type:String,value:`True`},falseLabel:{type:String,value:`False`},flex:{type:String,value:`0`},cellClass:{type:String,value:`boolean-cell`}}}getString(e,t){return Zn(e,t)}renderCell(e,{item:t}){return Zn(e,t)}renderEditCell(e,{item:t},n){let{trueLabel:r,falseLabel:i}=e;return v`<cosmoz-autocomplete
			variant="inline"
			.title=${Gn(e.title,t,e.valuePath,$n(r,i))}
			.source=${$n(r,i)}
			.textProperty=${`text`}
			.value=${Kn(e,t,$n(r,i))}
			.onChange=${Xn(n)}
			.limit=${1}
			>${D(e.loading,()=>v`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete
		>`}renderHeader(e,{filter:t,query:n},r,i){return v`<cosmoz-autocomplete-ui
			?disabled=${e.disabledFiltering}
			variant="inline"
			.label=${e.title}
			.title=${Gn(e.title,t,e.valuePath,i)}
			.source=${i}
			.textProperty=${`text`}
			.value=${Un(t,i)}
			.text=${n}
			.onChange=${qn(r)}
			@opened-changed=${e=>Jn(r)(e.detail.value)}
			.onText=${Yn(r)}
			.limit=${1}
			>${D(e.loading,()=>v`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}computeSource({trueLabel:e,falseLabel:t}){return $n(e,t)}getFilterFn(e,t){if(t!=null)return Qn(e,t)}toXlsxValue(e,t){return er(e,t)}deserializeFilter(e,t){return tr(e,t)}},customElements.define(`cosmoz-omnitable-column-boolean`,nr)})))()}var ir;function ar(){return(ar=e((()=>{Je(),Ut(),ir=e=>class extends Ht(e){static get properties(){return{max:{type:Date,value:null},min:{type:Date,value:null},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},formatter:{type:Object,computed:`_computeFormatter(locale)`}}}toDate(e,t,n){if(e==null||e===``)return;let r=e;if(r instanceof Date||(typeof e==`string`&&(r=this.getAbsoluteISOString(r)),r=new Date(r)),Number.isNaN(r.getTime()))return null;if(n==null||t==null)return r;let i=this.toDate(t);if(i==null)return r;let a=this.getComparableValue(r);return n(a,this.getComparableValue(i))===a?r:i}toValue(){return this.toDate.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n!=null)return this.toNumber(n.getTime())}getString(e,t=this.valuePath,n=this.formatter){let r=this.toValue(this.get(t,e));return r===void 0?``:r===null?`Invalid Date`:this.renderValue(r,n)}getAbsoluteISOString(e){return e.length===19?e+this._getTimezoneString(e):e}_getTimezoneString(e){let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`}renderValue(e,t=this.formatter){if(t==null)return;let n=this.toValue(e);if(n!=null)return t.format(n)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(0,10)}_dateValueChanged(e){let t=e.currentTarget.value,n=e.model.item,r=this.get(this.valuePath,n),i=this._fromInputString(t);this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toLocalISOString(e){return Be(e)}}})))()}var or;function sr(){return(sr=e((()=>{c(),P(),a(),t(),ar(),Bt(),z(),Gt(),or=class extends ir(Wt(M)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return v`
			${D(this.disabled,()=>v`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>v`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${zt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:v`
							<h3>${this.title}</h3>
							<cosmoz-input
								type="date"
								label=${x(`From date`)}
								min=${this._toInputString(this._limit.fromMin)}
								max=${this._toInputString(this._limit.fromMax)}
								.value=${this._filterInput?.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-input>
							<cosmoz-input
								type="date"
								label=${x(`Until date`)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
								.value=${this._filterInput?.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-input>
						`})}
				`)}
		`}_fromInputString(e,t){let n=this.toDate(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n}_filterInputChanged(e,t){let n=e.path.split(`.`)[1]&&e.value;if(n&&n.match(/^0+/u)){this._limitInputDebouncer.cancel();return}super._filterInputChanged(e,t)}},customElements.define(`cosmoz-omnitable-date-range-input`,or)})))()}var cr,lr,ur,q,J,dr,fr,pr,mr,hr,gr,_r,vr,yr,br;function xr(){return(xr=e((()=>{Je(),j(),en(),cr=e=>{let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`},lr=e=>e.length===19?e+cr(e):e,ur=e=>{if(e==null||e===``)return;let t=e;return!(t instanceof Date)&&(typeof e==`string`&&(t=lr(t)),t=Ke(t),!t)||Number.isNaN(t.getTime())?null:t},q=({valuePath:e},t)=>{if(t==null)return;let n=t;e!=null&&(n=N(t,e));let r=ur(n);if(r!=null)return B(r.getTime())},J=(e,t,n)=>{let r=ur(e);if(r==null)return null;if(n==null||t==null)return r;let i=J(t);if(i==null)return r;let a=q({},r),o=q({},i);return a==null||o==null||n(a,o)===a?r:i},dr=(e,t)=>{if(t==null)return;let n=J(e);if(n!=null)return t.format(n)},fr={},pr=e=>{let t=e||``;return fr[t]||(fr[t]=new Intl.DateTimeFormat(e||void 0)),fr[t]},mr=({valuePath:e,locale:t},n)=>{let r=N(n,e||``);return r===void 0?``:(r=J(r),r===null?`Invalid Date`:dr(r,pr(t)))},hr=e=>{let t=J(e);if(t==null)return null;let n=Be(t);return n==null?null:n.slice(0,10)},gr=({valuePath:e},t)=>hr(N(t,e||``)),_r=(e,t)=>{let n=J(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n},vr=e=>hr(e)??``,yr=({valuePath:e},t)=>{if(!e)return``;let n=J(N(t,e));if(!n)return``;let r=J(Be(n));return r?(r.setHours(0,0,0,0),r):``},br=(e,t)=>n=>{let r=q(e,n);if(r==null)return!1;let i=q({...e,valuePath:`min`},t),a=q({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})))()}var Sr;function Cr(){return(Cr=e((()=>{c(),P(),t(),R(),sr(),K(),xr(),F(),Sr=class extends L(M){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`date-header-cell`},width:{type:String,value:`100px`},minWidth:{type:String,value:`82px`},flex:{type:String,value:`0`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=q({...e,valuePath:`min`},t),r=q({...e,valuePath:`max`},t);if(n!=null||r!=null)return br(e,t)}getString(e,t){return mr(e,t)}toXlsxValue(e,t){return yr(e,t)}getComparableValue(e,t){return q(e,t)}serializeFilter(e,t){if(t==null)return;let n=J(t.min),r=J(t.max);if(n!=null||r!=null)return vr(n)+`~`+vr(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:J(n[1]),max:J(n[2])}:null}renderCell(e,{item:t}){return v`<div class="omnitable-cell-date">
			${mr(e,t)}
		</div>`}renderEditCell(e,{item:t},n){return v`<cosmoz-input
			type="date"
			@change=${e=>n(_r(e.target.value))}
			.value=${gr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,disabledFiltering:a,headerAlign:o,align:s},{filter:c},l,u){return v`<cosmoz-omnitable-date-range-input
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
		></cosmoz-omnitable-date-range-input>`}computeSource(e,t){return yn(e,t)}},customElements.define(`cosmoz-omnitable-column-date`,Sr)})))()}var wr;function Tr(){return(Tr=e((()=>{P(),a(),t(),ar(),Bt(),z(),Gt(),wr=class extends ir(Wt(M)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return v`
			${D(this.disabled,()=>v`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>v`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${zt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:v`
							<h3>${this.title}</h3>
							<cosmoz-datetime-input
								date-label=${x(`From date`)}
								time-label=${x(`From time`)}
								min=${this._toInputString(this._limit.fromMin)}
								max=${this._toInputString(this._limit.fromMax)}
								step=${this.filterStep}
								.value=${this._filterInput?.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-datetime-input>
							<cosmoz-datetime-input
								date-label=${x(`To date`)}
								time-label=${x(`To time`)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
								step=${this.filterStep}
								.value=${this._filterInput?.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-datetime-input>
						`})}
				`)}
		`}_toInputString(e){let t=this.toValue(e);if(t!=null)return this._toLocalISOString(t).slice(0,19)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})}},customElements.define(`cosmoz-omnitable-datetime-range-input`,wr)})))()}var Er,Dr,Or,kr,Ar,jr;function Mr(){return(Mr=e((()=>{j(),xr(),Er={},Dr=e=>{let t=e||``;return Er[t]||(Er[t]=new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})),Er[t]},Or=({valuePath:e,locale:t},n)=>{let r=J(N(n,e||``));return r===void 0?``:r===null?`Invalid Date`:dr(r,Dr(t))},kr=({valuePath:e},t)=>e?N(t,e):``,Ar=e=>{let t=J(e);return t==null?``:t.toISOString().slice(0,19).replace(/:/gu,`.`)},jr=e=>{if(e!=null&&e!==``&&typeof e==`string`)return J(e.replace(/\./gu,`:`)+`Z`)}})))()}var Nr;function Pr(){return(Pr=e((()=>{nt(),F(),P(),t(),R(),Tr(),K(),xr(),Mr(),Nr=class extends L(M){static get is(){return`cosmoz-omnitable-column-datetime`}static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`datetime-header-cell`},width:{type:String,value:`210px`},minWidth:{type:String,value:`128px`},flex:{type:String,value:`0`},filterStep:{type:Number,value:1}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=q({...e,valuePath:`min`},t),r=q({...e,valuePath:`max`},t);if(n!=null||r!=null)return br(e,t)}getString(e,t){return Or(e,t)}toXlsxValue(e,t){return kr(e,t)}getComparableValue(e,t){return q(e,t)}serializeFilter(e,t){if(t==null)return;let n=J(t.min),r=J(t.max);if(n!=null||r!=null)return Ar(n)+`~`+Ar(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:jr(n[1]),max:jr(n[2])}:null}renderCell(e,{item:t}){return Or(e,t)}renderEditCell(e,{item:t},n){return v`<cosmoz-input
			type="text"
			@change=${e=>n(_r(e.target.value))}
			.value=${Or(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,filterStep:a,disabledFiltering:o,headerAlign:s,align:c},{filter:l},u,d){return v`<cosmoz-omnitable-datetime-range-input
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
		></cosmoz-omnitable-datetime-range-input>`}computeSource(e,t){return yn(e,t)}},customElements.define(Nr.is,Nr)})))()}var Fr;function Ir(){return(Ir=e((()=>{Te(),Ye(),P(),t(),Fn(),R(),Fr=class extends Pn(L(M)){renderCell({valuePath:e,textProperty:t},{item:n}){let r=Tn(n,e,t).map(e=>v`<li>${e}</li>`);return v`
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
		`}renderEditCell(){return`not implemented`}renderHeader(e,{filter:t,query:n},r,i){return v`<cosmoz-autocomplete-ui
			variant="inline"
			class="external-values-${e.externalValues}"
			?disabled=${e.disabledFiltering}
			.label=${e.title}
			.source=${i}
			.textProperty=${e.textProperty}
			.value=${t}
			.text=${n}
			.onChange=${kn(r)}
			@opened-changed=${e=>An(r)(e.detail.value)}
			.onText=${jn(r)}
			>${D(e.loading,()=>v`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		> `}},customElements.define(`cosmoz-omnitable-column-list-horizontal`,Fr)})))()}var Lr,Rr;function zr(){return(zr=e((()=>{Ce(),O(),a(),Lr=T`
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
`,Rr=({items:e})=>{let[t,n]=m(!1),r=Array.isArray(e)?e:[],i=y(()=>Math.max(0,r.length-1),[r]);if(r.length===0)return null;let a=r.length>2,o=r[0],s=a&&!t?[]:r.slice(1),c=e=>{e.stopPropagation(),e.preventDefault(),n(e=>!e)};return v`
		<ul>
			<li>
				<span>${o}</span>
			</li>
			<li class="see-more" ?hidden=${!a||t}>
				<a href="#" @click=${c}
					>${x(`and {0} more`,{0:i})}</a
				>
			</li>
			${s.map(e=>v`
					<li>
						<span class="item">${e}</span>
					</li>
				`)}
			<li class="see-less" ?hidden=${!a||!t}>
				<a href="#" @click=${c}>${x(`See less`)}</a>
			</li>
		</ul>
	`},customElements.define(`cosmoz-omnitable-column-list-data`,k(Rr,{styleSheets:[pe(Lr)]}))})))()}var Br;function Vr(){return(Vr=e((()=>{zr(),P(),t(),Te(),Fn(),R(),G(),Br=class extends Pn(L(M)){static get properties(){return{keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,textual:e.textual}}renderCell({valuePath:e,textProperty:t},{item:n}){return v`<cosmoz-omnitable-column-list-data
			.items=${Tn(n,e,t)}
		></cosmoz-omnitable-column-list-data>`}renderEditCell(e,{item:t},n){return v`<cosmoz-input
			type="text"
			.value=${En(e,t)}
			@change=${e=>n(e.target.value.split(/,\s*/gu))}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:n},r,i){return v`<cosmoz-autocomplete-ui
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
			.itemRenderer=${e[W]?.itemRenderer}
			.value=${t}
			.text=${n}
			.onChange=${kn(r)}
			@opened-changed=${e=>An(r)(e.detail.value)}
			.onText=${jn(r)}
			>${D(e.loading,()=>v`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}},customElements.define(`cosmoz-omnitable-column-list`,Br)})))()}var Hr;function Ur(){return(Ur=e((()=>{c(),P(),a(),t(),Bt(),z(),Ut(),Gt(),Hr=class extends Ht(Wt(M)){static get properties(){return{maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},formatter:{type:Object,computed:`_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)`},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},headerFocused:{type:Boolean,value:!1}}}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return v`
			${D(this.disabled,()=>v`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>v`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${zt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:v`
							<h3>${this.title}</h3>
							<cosmoz-input
								class=${this._fromClasses}
								type="number"
								label=${x(`From`)}
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
								label=${x(`To`)}
								.value=${this._filterInput?.max}
								@value-changed=${e=>{this.set(`_filterInput.max`,e.detail.value)}}
								@blur=${e=>this._onBlur(e)}
								@keydown=${e=>this._onKeyDown(e)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
							></cosmoz-input>
						`})}
				`)}
		`}_computeFormatter(e,t,n){let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}getComparableValue(e,t){if(e==null)return;let n=e;if(t!=null&&(n=this.get(t,e)),n=this.toValue(n),n==null)return;let r=this.maximumFractionDigits;return r===null?n:this.toValue(n.toFixed(r))}renderValue(e,t=this.formatter){let n=this.toNumber(e);if(n!=null)return t.format(n)}},customElements.define(`cosmoz-omnitable-number-range-input`,Hr)})))()}var Wr;function Gr(){return(Gr=e((()=>{c(),F(),P(),t(),R(),j(),Ur(),K(),en(),Wr=class extends L(M){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},cellClass:{type:String,value:`number-cell`},width:{type:String,value:`30px`},minWidth:{type:String,value:`30px`},headerCellClass:{type:String,value:`number-header-cell`},maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},align:{type:String,value:`right`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=V({...e,valuePath:`min`},t),r=V({...e,valuePath:`max`},t);if(n!=null||r!=null)return $t(e,t)}getString(e,t){return Qt(e,t)}toXlsxValue({valuePath:e},t){return N(t,e)}getComparableValue(e,t){return V(e,t)}serializeFilter(e,t){if(t==null)return;let n=B(t.min),r=B(t.max);if(n!=null||r!=null)return Xt(n)+`~`+Xt(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:B(n[1]),max:B(n[2])}:null}renderCell(e,{item:t}){return v`<div class="omnitable-cell-number">
			${Qt(e,t)}
		</div>`}renderEditCell(e,{item:t},n){return v`<cosmoz-input
			type="number"
			@change=${e=>n(e.target.value)}
			.value=${Yt(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,maximumFractionDigits:a,minimumFractionDigits:o,autoupdate:s,disabledFiltering:c,headerAlign:l,align:u},{filter:d},f,p){return v`<cosmoz-omnitable-number-range-input
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
		></cosmoz-omnitable-number-range-input>`}computeSource(e,t){return yn(e,t)}},customElements.define(`cosmoz-omnitable-column-number`,Wr)})))()}var Kr;function qr(){return(qr=e((()=>{c(),P(),a(),t(),ar(),Bt(),z(),Gt(),Kr=class extends ir(Wt(M)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return v`
			${D(this.disabled,()=>v`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>v`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${zt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:v`
							<h3>${this.title}</h3>
							<cosmoz-input
								type="time"
								label=${x(`From time`)}
								step=${this.filterStep}
								.value=${this._filterInput.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-input>
							<cosmoz-input
								type="time"
								label=${x(`Until time`)}
								step=${this.filterStep}
								.value=${this._filterInput.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-input>
						`})}
				`)}
		`}get _fixedDate(){return`1970-01-01`}toDate(e,t,n){let r=typeof e==`string`&&e.length>3&&e.length<=9?this.getAbsoluteISOString(this._fixedDate+`T`+e):e;return super.toDate(r,t,n)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(11,19)}getComparableValue(e,t){if(e==null)return;let n=this._toInputString(t==null?e:this.get(t,e));if(n!=null&&(n=this.toValue(this.getAbsoluteISOString(this._fixedDate+`T`+n)),n!=null))return this.toNumber(n.getTime())}_timeValueChanged(e){let t=e.target.value,n=e.model.item,r=this.toDate(n.date),i=this.toDate(r==null?t:r.toISOString().slice(0,10)+`T`+t);i??(this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,(e=>e).bind(this)))}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})}},customElements.define(`cosmoz-omnitable-time-range-input`,Kr)})))()}var Y,Jr,Yr,Xr,Zr,Qr,X,$r,ei,ti;function ni(){return(ni=e((()=>{Je(),j(),xr(),en(),Y=(e,t,n)=>{let r=typeof e==`string`&&e.length>3&&e.length<=9?lr(`1970-01-01T`+e):e;return J(r,t,n)},Jr={},Yr=e=>{let t=e||``;return Jr[t]||(Jr[t]=new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})),Jr[t]},Xr=({valuePath:e,locale:t},n)=>{let r=Y(N(n,e||``));return r===void 0?``:r===null?`Invalid Date`:dr(r,Yr(t))},Zr=(e,t)=>e.valuePath?Xr(e,t):``,Qr=e=>{let t=Y(e);if(t==null)return null;let n=Be(t);return n&&n.slice(11,19)},X=({valuePath:e},t)=>{if(t==null)return;let n=Qr(e==null?t:N(t,e));if(n==null)return;let r=Y(lr(`1970-01-01T`+n));return r==null?r:B(r.getTime())},$r=(e,t)=>n=>{let r=X(e,n);if(r==null)return!1;let i=X({...e,valuePath:`min`},t),a=X({...e,valuePath:`max`},t);return i==null||a==null?!1:!(r<i||r>a)},ei=e=>{let t=Y(e);return t==null?``:t.toISOString().slice(11,19).replace(/:/gu,`.`)},ti=e=>{if(e!=null&&e!==``)return Y(typeof e==`string`?e.replace(/\./gu,`:`)+`Z`:e)}})))()}var ri;function ii(){return(ii=e((()=>{c(),F(),P(),t(),R(),qr(),K(),ni(),ri=class extends L(M){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`time-header-cell`},minWidth:{type:String,value:`63px`},width:{type:String,value:`210px`},flex:{type:String,value:`0`},filterStep:{type:String,value:`1`}}}getFilterFn(e,t){let n=X({...e,valuePath:`min`},t),r=X({...e,valuePath:`max`},t);if(n!=null||r!=null)return $r(e,t)}getString(e,t){return Xr(e,t)}toXlsxValue(e,t){return Zr(e,t)}getComparableValue(e,t){return X(e,t)}serializeFilter(e,t){if(t==null)return;let n=Y(t.min),r=Y(t.max);if(n!=null||r!=null)return ei(n)+`~`+ei(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:ti(n[1]),max:ti(n[2])}:null}renderCell(e,{item:t}){return Xr(e,t)}renderEditCell(e,{item:t},n){return v`<cosmoz-input
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${Xr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,locale:r,filterStep:i,disabledFiltering:a,headerAlign:o,align:s},{filter:c},l,u){return v`<cosmoz-omnitable-time-range-input
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
		></cosmoz-omnitable-time-range-input>`}computeSource(e,t){return yn(e,t)}},customElements.define(`cosmoz-omnitable-column-time`,ri)})))()}function ai(){return(ai=e((()=>{Sn(),zn(),Hn(),rr(),Cr(),Pr(),Ir(),Vr(),Gr(),ii()})))()}var oi;function si(){return(si=e((()=>{O(),t(),oi=({column:e,item:t,selected:n,folded:r,group:i})=>{if(!e)return re;let a=e.renderGroup??e.renderCell;return a?a(e,{item:t,selected:n,folded:r,group:i}):re},customElements.define(`cosmoz-omnitable-group-row`,k(oi,{useShadowDOM:!1}))})))()}var ci;function li(){return(li=e((()=>{O(),t(),ci=e=>{let{column:t}=e;return u(()=>{let n=0,r=0,i=i=>{e.dispatchEvent(new CustomEvent(`column-resize`,{bubbles:!0,composed:!0,detail:{newWidth:Math.ceil(r+i.pageX-n),column:t}}))},a=()=>{document.removeEventListener(`pointermove`,i),document.removeEventListener(`pointerup`,a)},o=t=>{n=t.pageX,r=e.previousElementSibling.getBoundingClientRect().width,document.addEventListener(`pointermove`,i),document.addEventListener(`pointerup`,a)};return e.addEventListener(`pointerdown`,o),()=>e.removeEventListener(`pointerdown`,o)},[t]),re},customElements.define(`cosmoz-omnitable-resize-nub`,k(ci))})))()}var ui,di,fi,pi;function mi(){return(mi=e((()=>{qe(),O(),be(),A(),ui=({column:e,on:t,descending:n,setOn:r,setDescending:i})=>{let{name:a,title:o}=e??{};return v`<cosmoz-button
		variant="tertiary"
		class="sg"
		title=${we(o)}
		data-on=${we(a===t&&(n?`desc`:`asc`)||void 0)}
		@click=${e=>{let t=e.currentTarget?.dataset.on;t||(r(a),i(!1)),t===`asc`?i(!0):t===`desc`&&(r(),i(!1))}}
	>
		<span>${o}</span> ${a===t?_({width:`12`,height:`12`}):ne({width:`12`,height:`12`})}
	</cosmoz-button>`},di=({columns:e,...t})=>e?.map(e=>ui({column:e,...t})),fi=()=>v`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,groupOn:t,setGroupOn:n,groupOnDescending:r,setGroupOnDescending:i}={})=>di({columns:e?.filter?.(e=>e.groupOn),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`,pi=()=>v`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,sortOn:t,setSortOn:n,descending:r,setDescending:i}={})=>di({columns:e?.filter?.(e=>e.sortOn&&!e.noSort),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`})))()}function hi(e,t,{suffix:n=``,read:r,write:i,ready:a=!0,multi:o}={}){let s=xe({param:t,suffix:n,link:o?bi:yi,write:i??ve}),c=y(()=>{if(t==null)return!1;if(o){let e=$e(t+n);return Object.keys(e).length>0}return tt(t+n)!==void 0},[]),[l,f]=m(()=>{if(t==null)return e;if(o){let i=$e(t+n,r);return Object.keys(i).length>0?i:e}return tt(t+n,r)??e}),p=d(e=>f(t=>{let n=gi(e)?e(t):e;return s.param!=null&&rt(s.link(s.param+s.suffix,n,s.write),null,{notify:!1}),n}),[]);return u(()=>{s.param!=null&&a&&!c&&e!=null&&p(e)},[a]),[l,p]}var gi,_i,vi,yi,bi;function xi(){return(xi=e((()=>{ct(),Ee(),oe(),ft(),O(),gi=e=>typeof e==`function`,_i=e=>(t,n,r=ve)=>{let i=at(),a=new URLSearchParams(i.hash.replace(`#`,``));return e(t,n,r,a),`#!`+Object.assign(i,{hash:a}).href.replace(location.origin,``)},vi=e=>e==null||e===``,yi=_i((e,t,n,r)=>vi(n(t))?r.delete(e):r.set(e,n(t))),bi=_i((e,t,n,r)=>{let i=Object.entries(t),a=i.map(n).filter(([,e])=>e!==void 0);if(a.length===0&&i.length>0)return;let o=e;Array.from(r.keys()).filter(e=>e.startsWith(o)).forEach(e=>r.delete(e)),a.forEach(([t,n])=>vi(n)?r.delete(e+t):r.set(e+t,n))})})))()}var Si,Ci,wi,Ti,Ei;function Di(){return(Di=e((()=>{O(),xi(),Si=e=>[!0,`true`,1,`yes`,`on`].includes(e),Ci=e=>e===``||(e==null?void 0:Si(e)),wi=(e,t,n)=>d(r=>{e(r),n(e=>({...e,[t]:r}))},[e,t,n]),Ti=(e,t,{settings:n,setSettings:r,resetRef:i,ready:a=!0})=>{let[o,s]=hi(n.sortOn,t,{suffix:`-sortOn`,ready:a}),[c,l]=hi(Ci(n.descending),t,{suffix:`-descending`,read:Ci,ready:a}),[f,p]=hi(n.groupOn,t,{suffix:`-groupOn`,ready:a}),[m,h]=hi(Ci(n.groupOnDescending),t,{suffix:`-groupOnDescending`,read:Ci,ready:a}),g=y(()=>e.find(e=>e.name===o),[e,o]),_=y(()=>e.find(e=>e.name===f),[e,f]),v={groupOn:f,setGroupOn:wi(p,`groupOn`,r),groupOnDescending:m,setGroupOnDescending:wi(h,`groupOnDescending`,r),sortOn:o,setSortOn:wi(s,`sortOn`,r),descending:c,setDescending:wi(l,`descending`,r),columns:e},b=y(()=>v,Object.values(v)),x=d(e=>{s(typeof e.sortOn==`string`?e.sortOn:void 0),p(typeof e.groupOn==`string`?e.groupOn:void 0),l(typeof e.descending==`boolean`?e.descending:void 0),h(typeof e.groupOnDescending==`boolean`?e.groupOnDescending:void 0)},[]);return u(()=>void(i.current=x),[]),{...b,sortAndGroup:b,groupOnColumn:_,sortOnColumn:g}},Ei=se(void 0),customElements.define(`sort-and-group-provider`,Ei.Provider),customElements.define(`sort-and-group-consumer`,k(({render:e})=>e(i(Ei)),{useShadowDOM:!1}))})))()}var Oi,ki;function Ai(){return(Ai=e((()=>{O(),De(),li(),mi(),Di(),Oi=({data:e,columns:t,groupOnColumn:n,filters:r,setFilterState:i,sortAndGroup:{sortOn:a,setSortOn:o,descending:s,setDescending:c}={}})=>ie(t,e=>e.name,t=>[v`<div
				class="cell ${t.headerCellClass} header-cell"
				align="${t.headerAlign??t.align??`left`}"
				part="cell header-cell cell-${t.name} header-cell-${t.name}"
				?hidden="${t===n}"
				title="${t.headerTitleFn(t)}"
				name="${t.name}"
			>
				${t.renderHeader(t,r[t.name]??{},e=>i(t.name,e),t.source(t,e))}
				${D(!t.noSort,()=>ui({on:a,setOn:o,descending:s,setDescending:c,column:t}))}
			</div>`,v`<cosmoz-omnitable-resize-nub
				.column="${t}"
				name="${t.name}"
			></cosmoz-omnitable-resize-nub>`]),ki=({columns:e,settingsConfig:t,hideSelectAll:n,...r})=>{let a=i(Ei);return v`
		${D(e,e=>Oi({columns:e,sortAndGroup:a,...r}))}
		${D(!n,()=>v` <cosmoz-omnitable-settings
					.config=${t}
					part="settings"
				></cosmoz-omnitable-settings>`)}
	`},customElements.define(`cosmoz-omnitable-header-row`,k(ki,{useShadowDOM:!1}))})))()}var ji,Mi;function Ni(){return(Ni=e((()=>{Ce(),O(),ji=T`
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
`,Mi=({column:e})=>v`
	<div class="label" title="${e.title}" part="item-expand-label">
		${e.title}
	</div>
	<div class="value" part="item-expand-value">
		<slot></slot>
	</div>
`,customElements.define(`cosmoz-omnitable-item-expand-line`,k(Mi,{styleSheets:[pe(ji)]}))})))()}var Pi;function Fi(){return(Fi=e((()=>{O(),t(),Ni(),Pi=({columns:e,item:t,selected:n,expanded:r,groupOnColumn:i})=>Qe(e,e=>v`<cosmoz-omnitable-item-expand-line
				.column=${e}
				?hidden=${e===i}
				exportparts="item-expand-label, item-expand-value"
				>${e.renderCell(e,{item:t,selected:n,expanded:r})}</cosmoz-omnitable-item-expand-line
			>`),customElements.define(`cosmoz-omnitable-item-expand`,k(Pi,{useShadowDOM:!1}))})))()}var Ii,Li;function Ri(){return(Ri=e((()=>{O(),De(),Ii=(e,t,n)=>e.editable?e.renderEditCell(e,t,n(e,t.item)):e.renderCell(e,t),Li=({columns:e,groupOnColumn:t,item:n,index:r,selected:i,expanded:a,onItemChange:o})=>ie(e,e=>e.name,e=>v`<div
				class="cell itemRow-cell ${e.cellClass??``}"
				align="${e.align??`left`}"
				part="cell itemRow-cell cell-${e.name} itemRow-cell-${e.name}"
				?hidden="${e===t}"
				?editable="${e.editable}"
				title="${e.cellTitleFn(e,n)}"
				name="${e.name}"
			>
				${Ii(e,{item:n,index:r,selected:i,expanded:a},o)}
			</div>`),customElements.define(`cosmoz-omnitable-item-row`,k(Li,{useShadowDOM:!1}))})))()}var zi,Bi;function Vi(){return(Vi=e((()=>{Ce(),zi=T`
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
`,Bi=T`
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
`})))()}var Hi,Ui;function Wi(){return(Wi=e((()=>{Xe(),Hi=e=>{let t=e.replace(/"/gu,`""`);return t.search(/("|,|\n)/gu)>=0?`"`+t+`"`:e},Ui=(e,t,n)=>{let r=e.map(e=>Hi(e.title)).join(`;`)+`
`,i=t.map(t=>e.map(e=>{let n=e.getString(e,t);return n==null?``:Hi(String(n))}).join(`;`)+`
`);i.unshift(r),st(new File(i,n,{type:`text/csv;charset=utf-8`}))}})))()}var Gi,Ki;function qi(){return(qi=e((()=>{ot(),Xe(),Gi=(e,t)=>{let n=e.map(e=>e.title),r=t.map(t=>e.map(e=>e.toXlsxValue(e,t)??``));return r.unshift(n),r},Ki=(e,t,n,r)=>{let i=Gi(e,t),a=new ut(n).addSheetFromData(i,r).generate();st(new File([a],n,{type:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`}))}})))()}var Ji,Z,Yi;function Q(){return(Q=e((()=>{Ji=Symbol(`index`),Z=Symbol(`All`),Yi=(e,t)=>{if(typeof e.findLastIndex==`function`)return e.findLastIndex(t);for(let n=e.length-1;n>=0;n--)if(t(e[n],n,e))return n;return-1}})))()}var Xi;function Zi(){return(Zi=e((()=>{Le(),A(),a(),t(),Wi(),qi(),Q(),Xi=({columns:e,selectedItems:t,setSelectedItems:n,csvFilename:r,xlsxFilename:i,xlsxSheetname:a,topPlacement:o,enableSelectAll:s,allSelected:c,allItemsCount:l})=>{let u=t===Z,d=u||t.length>0,f=t!==Z&&s&&c,m=t=>v`<cosmoz-dropdown-menu
			part="extra"
			slot="extra"
			.placement=${o}
		>
			${p({slot:`button`})}
			<cosmoz-button
				variant="tertiary"
				@click=${()=>Ui(e,t,r)}
			>
				${x(`Save selected items as CSV`)}
			</cosmoz-button>
			<cosmoz-button
				variant="tertiary"
				@click=${()=>Ki(e,t,i,a)}
			>
				${x(`Save selected items as XLSX`)}
			</cosmoz-button>
			<slot name="download-menu"></slot
		></cosmoz-dropdown-menu>`,h=D(u,()=>l===void 0?x(`All items selected`):x(`All {count} items selected`,{count:l}),()=>x(`{count} selected item`,{count:t===Z?0:t.length}));return v`<cosmoz-bottom-bar
		id="bottomBar"
		?active=${d}
		part="bottomBar"
		exportparts="bar: bottomBar-bar, info: bottomBar-info, buttons: bottomBar-buttons"
	>
		<slot name="info" slot="info">
			${h}
			${D(f,()=>v`&nbsp;<span
							part="select-all-items"
							class="selectAllItems"
							role="button"
							tabindex="0"
							style="cursor: pointer; color: white;"
							@click=${()=>n(Z)}
						>
							${x(`Select all items`)}
						</span>`)}
		</slot>
		<slot name="actions" id="actions"></slot>
		<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
		<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
		${D(t!==Z,()=>m(t))}
	</cosmoz-bottom-bar>`}})))()}var Qi;function $i(){return($i=e((()=>{t(),Qi=({allSelected:e,onAllCheckboxChange:t,sortAndGroup:n,dataIsValid:r,data:i,columns:a,filters:o,groupOnColumn:s,setFilterState:c,settingsConfig:l,hideSelectAll:u})=>v`<sort-and-group-provider .value=${n}>
		<div class="header" id="header" part="header">
			${D(!u,()=>v`<input
						class="checkbox all"
						type="checkbox"
						.checked=${e}
						@input=${t}
						?disabled=${!r}
						part="all"
					/>`)}
			${D(u,()=>v` <cosmoz-omnitable-settings
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
	</sort-and-group-provider>`})))()}var ea,ta;function na(){return(na=e((()=>{O(),ea=C`
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
`,ta=({settingsConfig:e})=>{let{columns:t,collapsed:n}=e,r=t.filter(e=>!n.some(t=>t.name===e.name));return v`<div class="skeleton">
		${Array.from({length:5},()=>v`<div>
					<div class="checkbox"></div>
					${r.map(e=>v`<div
								class="cell"
								part=${`cell-${e.name}`}
								name=${e.name}
							></div>`)}
				</div>`)}
	</div>`},customElements.define(`cosmoz-omnitable-skeleton`,k(ta,{styleSheets:[ea]}))})))()}var ra;function ia(){return(ia=e((()=>{O(),na(),Fe(),a(),t(),ra=(e,t)=>{let{settingsConfig:n}=e,{processedItems:r,dataIsValid:i,filterIsTooStrict:a,loading:o,displayEmptyGroups:s,compareItemsFn:c,selectedItems:l,setSelectedItems:u,renderItem:d,renderGroup:f,error:p}=t;return v`${D(!o&&!i&&!p,()=>v`<div class="tableContent-empty">
					<slot name="empty-set-message">
						${lt({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
						<div class="tableContent-empty-message">
							<h3>${x(`Working set empty`)}</h3>
							<p>${x(`No data to display`)}</p>
						</div>
					</slot>
				</div>`)}
		${D(a,()=>v`<div class="tableContent-empty">
					${lt({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
					<div>
						<h3>${x(`Filter too strict`)}</h3>
						<p>${x(`No matches for selection`)}</p>
					</div>
				</div>`)}
		${D(o&&!r.length,()=>v`<div class="tableContent-empty overlay">
					<cosmoz-omnitable-skeleton
						.settingsConfig=${n}
					></cosmoz-omnitable-skeleton>
				</div>`)}
		${D(o&&r.length,()=>v`<div class="tableContent-empty overlay spinner">
					<cz-spinner></cz-spinner>
				</div>`)}
		${D(p,()=>v`<div class="tableContent-empty overlay">
					${We({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
					<div class="tableContent-empty-message">
						<h3>${x(`Error loading data`)}</h3>
						<p>${p.message}</p>
					</div>
				</div>`)}
		<div class="tableContent-scroller" id="scroller" part="scroller">
			<cosmoz-grouped-list
				id="groupedList"
				.data=${r}
				.selectedItems=${l}
				@selected-items-changed=${_e(u)}
				.displayEmptyGroups=${s}
				.compareItemsFn=${c}
				.renderItem=${d}
				.renderGroup=${f}
			></cosmoz-grouped-list>
			<slot name="extraContent"></slot>
		</div>`}})))()}var aa,oa;function sa(){return(sa=e((()=>{Ce(),Vi(),aa=T`
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
`,oa=T`
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
`})))()}var ca,la;function ua(){return(ua=e((()=>{oe(),O(),ca=e=>{let t=parseInt(e??``,10);return isFinite(t)?t:void 0},la=e=>{let{config:t}=e,{settings:n,setSettings:r,collapsed:i,requestTween:a}=t,o=xe({collapsed:i,settings:n.columns,requestTween:a,setSettings:d(e=>r(t=>({...t,columns:e})),[r])});return{...t,onDown:d(e=>{let t=e.target instanceof Element?e.target:null;t&&t.closest(`.pull`)&&(o.handle=e.currentTarget instanceof HTMLElement?e.currentTarget:null)},[o]),onDragStart:d(e=>{let t=e.target instanceof HTMLElement?e.target:null,n=ca(t?.dataset.index);if(!t||!o.handle?.contains(t)||n==null)return e.preventDefault();o.handle=null,e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`omnitable/sort-index`,String(n)),e.dataTransfer.setData(`text/plain`,String(n)),setTimeout(()=>t.classList.add(`drag`),0),t.addEventListener(`dragend`,e=>{(e.target instanceof HTMLElement?e.target:null)?.classList.remove(`drag`)},{once:!0})},[o]),onDragEnter:d(e=>{let t=e.currentTarget instanceof HTMLElement?e.currentTarget:null;t&&t===e.target&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`,t.classList.add(`dragover`))},[]),onDragOver:d(e=>{e.preventDefault(),e.currentTarget instanceof HTMLElement&&e.currentTarget.classList.add(`dragover`)},[]),onDragLeave:d(e=>{let t=e.currentTarget instanceof HTMLElement?e.currentTarget:null;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||t.classList.remove(`dragover`))},[]),onDrop:d(e=>{let t=ca(e.dataTransfer?.getData(`omnitable/sort-index`)),n=e.currentTarget instanceof HTMLElement?e.currentTarget:null,r=ca(n?.dataset.index),{settings:i,setSettings:a,requestTween:s}=o;n?.classList.remove(`dragover`),e.preventDefault();let c=i.slice();c.splice(r+(t>=r?0:-1),0,c.splice(t,1)[0]),s?.(),a(c)},[o]),onToggle:d(e=>{let{settings:t,setSettings:n,requestTween:r}=o,i=t.map(e=>({...e,disabled:e.disabled||o.collapsed?.some(t=>t.name===e.name)})),a=e.target instanceof HTMLInputElement?e.target:null,s=ca((e.target instanceof Element?e.target:null)?.closest(`[data-index]`)?.getAttribute(`data-index`));s!=null&&(i.splice(s,1,{...t[s],disabled:!a?.checked,priority:a?.checked?t.reduce((e,t)=>Math.max(e,t.priority??0),0)+1:t[s]?.priority}),r?.(),n(i))},[o])}}})))()}var da,fa,pa,ma;function ha(){return(ha=e((()=>{qe(),dt(),_t(),A(),Ce(),ke(),O(),a(),mi(),sa(),ua(),da=[Ge({apply({availableHeight:e,elements:t}){Object.assign(t.floating.style,{maxHeight:`${Math.max(0,e)}px`})}}),...Ve],fa=({onDragStart:e,onDragEnter:t,onDragOver:n,onDragLeave:r,onDrop:i,onDown:a,onToggle:o,collapsed:s,filters:c})=>(l,u)=>{let d=!!s?.find(e=>e.name===l.name),f=!l.disabled&&!d;return v` <div
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
				aria-label=${x(`Reorder column`)}
				variant="tertiary"
				icon-only
				class="pull"
				>${te({width:`16`,height:`16`})}</cosmoz-button
			>
			<label class="title" ?has-filter=${!et(c[l.name]?.filter)}
				>${l.title}</label
			>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${f}
				@click=${o}
				.indeterminate=${d}
			/>
		</div>`},pa=e=>{let{settings:t,settingsId:n,onSave:r,onReset:i,hasChanges:a,canReset:o,opened:s,setOpened:c,...l}=la(e);return v` <div class="headline">
			<span> ${x(`Sort and filter`)} </span>
			<cosmoz-button
				variant="tertiary"
				aria-label="${x(`Close settings`)}"
				@click=${e=>{let t=e.currentTarget instanceof HTMLElement?e.currentTarget:null;t?.focus(),t?.blur()}}
			>
				${ee({width:`16`,height:`16`})}
			</cosmoz-button>
		</div>

		<div class="contents">
			<div
				class="heading"
				?data-opened=${s.columns}
				@click=${()=>c(e=>({...e,columns:!e.columns}))}
				part="columns columns-heading"
			>
				${x(`Columns`)} ${_({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse
				?opened="${s.columns}"
				part="columns columns-content"
			>
				<div class="list">${t.columns?.map(fa(l))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${s.sort}
				@click=${()=>c(e=>({...e,sort:!e.sort}))}
			>
				${x(`Sort on`)} ${_({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse ?opened=${s.sort}> ${pi()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${s.group}
				@click=${()=>c(e=>({...e,group:!e.group}))}
				part="groups groups-heading"
			>
				${x(`Group on`)} ${_({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse ?opened=${s.group} part="groups groups-heading"
				>${fi()}</cosmoz-collapse
			>
		</div>

		${D(n,()=>v`<div class="buttons">
					<cosmoz-button
						variant="tertiary"
						@click=${i}
						?disabled=${!o}
					>
						${x(`Reset`)}
					</cosmoz-button>
					<cosmoz-button
						variant="primary"
						@click=${r}
						?disabled=${!a}
					>
						${x(`Save`)}
					</cosmoz-button>
				</div>`)}`},customElements.define(`cosmoz-omnitable-settings-ui`,k(pa,{styleSheets:[pe(aa)]})),ma=({config:e,newLayout:t})=>v`
	<cosmoz-dropdown
		.placement="${t?`bottom-start`:`bottom-end`}"
		.middleware="${da}"
	>
		<div title="${x(`Sort and filter`)}" slot="button">
			${D(t,()=>v`<div class="headerDots">...</div>`,()=>v` ${f({width:`20`,height:`20`,styles:`color: var(--cz-color-text-primary)`})}`)}
			${D(e?.badge,()=>v`<div class="badge"></div>`)}
		</div>
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${e}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`,customElements.define(`cosmoz-omnitable-settings`,k(ma,{styleSheets:[pe(oa)]}))})))()}var ga,_a,va,ya,ba;function xa(){return(xa=e((()=>{ce(),ga=[`sortOn`,`descending`,`groupOn`,`groupOnDescending`],_a=e=>t=>typeof t==`object`&&!!t&&`name`in t&&t.name===e,va=(e=[],t=[],n=[])=>{let r=t.filter(t=>e.some(_a(t.name))),i=e.filter(e=>e.name!=null&&!t.some(_a(e.name))&&!n.some(_a(e.name))),a=n.filter(e=>!t.some(_a(e.name)));return[...r,...a.flatMap(t=>{let n=e.find(e=>e.name===t.name);return n?{...t,title:n.title??t.title??``,minWidth:parseInt(n.minWidth??`0`,10)}:[]}),...i.map(e=>{let{name:t,title:n,priority:r,minWidth:i,width:a,flex:o}=e;return{name:t??``,title:n??``,priority:r??0,minWidth:parseInt(i??`0`,10),width:parseInt(a??`0`,10),flex:parseInt(o??`0`,10)}})]},ya=(e,t)=>({...t,...Se(Array.from(ga))(e),columns:e.columns?.map(Se([`name`,`priority`,`width`,`flex`,`disabled`]))??t?.columns}),ba=({columns:e,settings:t,savedSettings:n,initial:r})=>({...Object.fromEntries(ga.flatMap(e=>r?.[e]==null?[]:[[e,r[e]]])),...n?Se(Array.from(ga))(n):{},...t,columns:va(e,t?.columns,n?.columns)})})))()}var Sa;function Ca(){return(Ca=e((()=>{Sa=({prefix:e=`omnitable-`}={})=>({write:async(t,n)=>{let r=e+t;try{n?localStorage.setItem(r,JSON.stringify(n)):localStorage.removeItem(r)}catch(e){console.error(e)}},read:async t=>{if(!t)return null;try{let n=localStorage.getItem(e+t);return n==null?null:JSON.parse(n)}catch(e){return console.error(e),null}}})})))()}var wa,Ta;function Ea(){return(Ea=e((()=>{O(),Ca(),wa=se(Sa),Ta=()=>{let e=i(wa);return y(()=>e(),[e])}})))()}function Da(){return(Da=e((()=>{Ea()})))()}var Oa;function ka(){return(ka=e((()=>{O(),Da(),xa(),Oa=(e,t,n,r)=>{let[i,a]=m(e?void 0:null),{read:o,write:s}=Ta();return u(async()=>{e&&a(await o(e))},[e,o]),{settingsId:e,savedSettings:i,onSave:d(async()=>{if(!e)return;let r=ya(t,i);await s(e,r),n(),a(r)},[t,i]),onReset:d(async()=>{n(),e&&i!=null&&(await s(e),a(null)),r?.()},[e,i,s,r]),hasChanges:t!=null,canReset:t!=null||i!=null}}})))()}var Aa;function ja(){return(ja=e((()=>{O(),G(),xa(),ka(),Aa=({settingsId:e,host:t})=>{let n=y(()=>Object.fromEntries(ga.map(e=>[e,t[e]])),[]),r=s(),i=d(()=>{r.current?.(n)},[n]),[a,o]=m(),[c,l]=m({columns:!0,sort:!0}),{savedSettings:u,...f}=Oa(e,a,o,i),{enabledColumns:p,disabledFiltering:h}=t,g=_n(t,{enabledColumns:p,disabledFiltering:h}),_=y(()=>ba({columns:g,settings:a,savedSettings:u??void 0,initial:n}),[g,a,u]),v=y(()=>_.columns.map(e=>g.find(t=>t.name===e.name)).filter(e=>e!==void 0),[g,..._.columns.map(e=>e.name)]);return{...f,savedSettings:u,opened:c,setOpened:l,settings:_,columns:v,setSettings:o,resetRef:r}}})))()}function Ma(){return(Ma=e((()=>{ha(),ja()})))()}var Na,Pa;function Fa(){return(Fa=e((()=>{Na=e=>Number.isFinite(e)?e:0,Pa=(e,t)=>{let n=[],[r,i]=e.reduce(([e,t],{width:n,flex:r})=>[e+n,t+r],[0,0]),a=t-r,o=Na(a/i),s=0,c=0,l=0;for(let t=0;t<e.length;t++){let{width:i,minWidth:u,flex:d}=e[t];if(u>i+(a>=0?o*d:i*a/r)){s+=i,c+=u,l+=d,n[t]=u;continue}if(d===0){s+=i,c+=i,n[t]=i;continue}}r-=s,a=t-c-r,i-=l,o=Na(a/i);for(let t=0;t<e.length;t++){if(n[t]!=null)continue;let{width:i,flex:s}=e[t],c=a>=0?o*s:i*a/r;n[t]=i+c}return n}})))()}var Ia,La,Ra;function za(){return(za=e((()=>{Fa(),Q(),Ia=(e,t)=>{let n=Yi(e,e=>e!=null&&e>0),r=(e,t)=>`.cell[name="${e}"], cosmoz-omnitable-skeleton::part(cell-${e}){width: ${t}px;padding: 0 min(3px, ${t/2}px)}`,i=e=>`cosmoz-omnitable-resize-nub[name="${e}"]{display:none}`,a=e=>`cosmoz-omnitable-resize-nub[name="${e}"], .cell[name="${e}"]{display:none}`,o=0,s=0;return t.map((t,c)=>{let l=e[c];if(l==null||l===0)return a(t.name);o+=l;let u=Math.round(o),d=u-s;s=u;let f=r(t.name,d);return c===n?`${f}\n${i(t.name)}`:f}).join(`
`)},La=(e,t,n)=>{let r=e.filter(e=>!e.hidden),i=r.reduce((e,{width:t})=>e+t,0);if(r.length>1&&i>t)return La(r.slice(1),t,n);let a=r.reduce(([e,t],n,r)=>[Math.max(e,n.index),n.index>e?r:t],[-1,-1])[1];return a!==-1&&(r[a].flex=1),Pa(r,t).reduce((e,t,n)=>(e[r[n].index]=t,e),Array(n).fill(void 0))},Ra=(e,t)=>e.length===0?`.cell {display: none;}`:Ia(e,t)})))()}var Ba;function Va(){return(Va=e((()=>{O(),Ba=(e,t)=>u(()=>{let n=new ResizeObserver(([e])=>{e.contentRect?.width!==0&&t(e.contentRect.width-88)});return n.observe(e),()=>n.unobserve(e)},[])})))()}var Ha;function Ua(){return(Ua=e((()=>{O(),Va(),Ha=e=>{let[t,n]=m(()=>e.getBoundingClientRect().width-88);return Ba(e,n),t}})))()}var Wa;function Ga(){return(Ga=e((()=>{O(),za(),Wa=({canvasWidth:e,groupOnColumn:t,layoutColumns:n,config:r})=>y(()=>{if(!Array.isArray(r)||e==null||e===0)return[];let i=r.map((e,n)=>({minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,name:e.name,index:n,hidden:e.name===t?.name||e.disabled})).map(e=>n==null?e:{...e,hidden:!n.includes(e.name)}).sort(({index:e,priority:t},{index:n,priority:r})=>t===r?n-e:t-r);return La(i,e,i.length)},[e,t,r])})))()}var Ka;function qa(){return(qa=e((()=>{O(),Ka=({host:e,canvasWidth:t,columns:n})=>{let r=e.miniBreakpoint??480,i=y(()=>t<=r,[t,r]),a=y(()=>i?n?.filter(e=>e.mini!=null).sort((e,t)=>(e.mini??0)-(t.mini??0)):[],[n,i]),o=y(()=>a.slice(1),[a]),s=a[0],c=!!s&&e.renderItem==null;return u(()=>{e.toggleAttribute(`mini`,c)},[c]),{isMini:c&&i,hasMiniColumn:c,miniColumn:s,miniColumns:o}}})))()}var Ja;function Ya(){return(Ya=e((()=>{O(),Ja=({host:e,canvasWidth:t,layout:n,setSettings:r,requestTween:i})=>{let a=s();a.current=e=>{i(),r(r=>{let i=r.columns,{detail:{newWidth:a,column:o}}=e,s=i.findIndex(e=>e.name===o.name),c=[],l=i.reduce((e,t)=>Math.max(e,t.priority),-1/0);for(let e=0;e<n.length;e++)if(c[e]={...i[e]},e<s&&n[e]&&(c[e].width=n[e],c[e].flex=0,c[e].priority=l),e===s){let r=n.reduce((e,t,n)=>n<s&&t?e-t:e,t);c[e].width=Math.min(r,Math.max(a,i[e].minWidth)),c[e].flex=0,c[e].priority=l}return{...r,columns:c}})},u(()=>{let t=e=>a.current?.(e);return e.addEventListener(`column-resize`,t),()=>e.removeEventListener(`column-resize`,t)},[])}})))()}var Xa,Za,Qa;function $a(){return($a=e((()=>{Ee(),oe(),O(),Xa=(e,t)=>{let n=y(()=>{let t=!1,n,r=()=>{t&&(n=requestAnimationFrame(r),e()&&(t=!1))};return{start:()=>{t=!0,cancelAnimationFrame(n),n=requestAnimationFrame(r)},stop:()=>{t=!1,cancelAnimationFrame(n)}}},[]);u(()=>{n.start()},t),u(()=>()=>n.stop(),[])},Za=(e=0,t=0)=>Math.abs(e-t)<.1,Qa=(e,t=1.9,n=ue,r)=>{let i=xe({target:e,speedFactor:t,onConverge:r}),a=d(()=>{if(!i.tween)return i.tween=i.target,n(i.tween),i.onConverge?.(),!0;if(i.target.every((e,t)=>i.tween[t]===e))return n(i.tween),i.onConverge?.(),!0;if(i.tween=i.target.map((e,t)=>Za(i.tween[t],e)?e:(i.tween[t]??0)+((e??0)-(i.tween[t]??0))/i.speedFactor||0),n(i.tween),i.tween.every((e,t)=>e===i.target[t]))return i.onConverge?.(),!0},[]);Xa(a,[e])}})))()}var eo,to,no;function ro(){return(ro=e((()=>{oe(),O(),za(),Ua(),Ga(),qa(),Ya(),$a(),eo=e=>{let t=y(()=>new CSSStyleSheet,[]);return u(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,t]},[]),t},to=e=>{u(()=>{e.toggleAttribute(`compact`,e.compact===!0)},[e.compact])},no=({host:e,columns:t,settings:n,setSettings:r,resizeSpeedFactor:i,sortAndGroupOptions:a})=>{let o=Ha(e),{isMini:s,hasMiniColumn:c,miniColumn:l,miniColumns:u}=Ka({host:e,canvasWidth:o,columns:t});to(e);let{groupOnColumn:f}=a,p=c?[l.name]:e.headerColumns??null,h=Wa({canvasWidth:o,groupOnColumn:f,layoutColumns:p,config:n.columns}),g=eo(e),_=y(()=>n.columns.reduce((e,n,r)=>h[r]!=null||n.name===f?.name||n.disabled?e:[...e,t.find(e=>e.name===n.name)],[]),[t,n,h]),[v,b]=m(1),x=d(()=>b(i??1.9),[i]),S=d(()=>b(1),[]),C=xe({columns:n.columns});return Qa(h,v,e=>{let t=Ra(e,C.columns);g.replaceSync(t)},S),Ja({host:e,canvasWidth:o,layout:h,setSettings:e=>r(e(n)),requestTween:x}),{isMini:s,collapsedColumns:_,miniColumns:u,requestTween:x}}})))()}var io;function ao(){return(ao=e((()=>{io=({host:e,...t})=>{let{csvFilename:n=`omnitable.csv`,xlsxFilename:r=`omnitable.xlsx`,xlsxSheetname:i=`Omnitable`,topPlacement:a=`top-end`}=e;return{csvFilename:n,xlsxFilename:r,xlsxSheetname:i,topPlacement:a,...t}}})))()}var oo;function so(){return(so=e((()=>{O(),Q(),oo=({host:e,selectedItems:t,data:n,dataIsValid:r,columns:i,sortAndGroupOptions:a,collapsedColumns:o,settings:s,filterFunctions:c,settingS:l,filters:d,setFilterState:f,hideSelectAll:p,headerColumns:m,requestTween:h,...g})=>{let _=y(()=>m==null?i:i.filter(e=>m.includes(e.name)),[i,m]),v=t===Z||!!n&&n.length>0&&Array.isArray(t)&&t.length===n.length,b=t=>{if(!(t.target instanceof HTMLInputElement))return;let n=e.shadowRoot.querySelector(`#groupedList`);t.target.checked?n.selectAll():n.deselectAll()},{groupOnColumn:x}=a,S=y(()=>[x,...o,...s.columns.filter(e=>e.disabled)].some(e=>!!e&&!!e.name&&Object.keys(c).includes(e.name)),[c,s,o]),C=y(()=>({...l,collapsed:o,badge:S,filters:d,requestTween:h}),[l,o,S,d,h]);return u(()=>{let t=e.shadowRoot.querySelector(`#tableContent`),n=new ResizeObserver(t=>requestAnimationFrame(()=>{e.style.setProperty(`--ot-height`,t[0]?.contentRect.height+`px`)}));return n.observe(t),()=>n.unobserve(t)},[]),{allSelected:v,onAllCheckboxChange:b,data:n,dataIsValid:r,columns:_,settingsConfig:C,filters:d,groupOnColumn:x,setFilterState:f,hideSelectAll:p,sortAndGroup:a.sortAndGroup,...g}}})))()}var co,lo;function uo(){return(uo=e((()=>{qe(),A(),O(),a(),co=e=>e?`groupRow groupRow-folded`:`groupRow`,lo=(e,t,{selected:n,folded:r,toggleFold:i,onCheckboxChange:a,groupOnColumn:o,dataIsValid:s})=>v` <div
		class="${co(r)}"
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
			aria-label=${x(`Expand or collapse`)}
			variant="tertiary"
			icon-only
			class="expand"
			?aria-expanded="${r}"
			@click=${i}
		>
			${_({width:`16`,height:`16`})}
		</cosmoz-button>
	</div>`})))()}var fo;function po(){return(po=e((()=>{t(),fo=({item:e,index:t})=>n=>D((n?.length??0)>0,()=>v`
				<div class="itemRow-minis" part="item-minis">
					${n.map(n=>v`<div
								class="itemRow-mini"
								part="item-mini item-mini-${n.name}"
							>
								${(n.renderMini??n.renderCell)(n,{item:e,index:t})}
							</div>`)}
				</div>
			`)})))()}var mo;function ho(){return(ho=e((()=>{qe(),A(),ke(),O(),a(),po(),mo=(e,t,{selected:n,expanded:r,toggleCollapse:i,columns:a,collapsedColumns:o,miniColumns:s,onItemClick:c,onCheckboxChange:l,onItemChange:u,rowPartFn:d,groupOnColumn:f,dataIsValid:p})=>v`
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
					aria-label=${x(`Expand or collapse`)}
					variant="tertiary"
					icon-only
					class="expand"
					?hidden="${et(o.length)}"
					?aria-expanded="${r}"
					@click="${i}"
				>
					${_({width:`16`,height:`16`})}
				</cosmoz-button>
			</div>
			${fo({item:e,index:t})(s)}
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
	`})))()}var go,_o,vo;function yo(){return(yo=e((()=>{O(),uo(),ho(),Q(),K(),go=e=>e instanceof HTMLInputElement,_o=e=>e instanceof HTMLElement,vo=({host:e,error:t,dataIsValid:n,processedItems:r,columns:i,collapsedColumns:a,miniColumns:o,sortAndGroupOptions:c,rowPartFn:l,...f})=>{let{loading:p=!1,displayEmptyGroups:m=!1,compareItemsFn:h}=e,g=e.renderItem??mo,_=e.renderGroup??lo,v=s({shiftKey:!1,ctrlKey:!1}),b=d(t=>{if(!go(t.target))return;let n=t.target,r=n.dataItem,i=n.checked,a=e.shadowRoot.querySelector(`#groupedList`);v.current.shiftKey?a.toggleSelectTo(r,i):v.current.ctrlKey?(n.checked=!0,a.selectOnly(r)):a.toggleSelect(r,i),t.preventDefault(),t.stopPropagation()},[]);u(()=>{let e=({shiftKey:e,ctrlKey:t})=>{v.current={shiftKey:e,ctrlKey:t}};return window.addEventListener(`keydown`,e),window.addEventListener(`keyup`,e),()=>{window.removeEventListener(`keydown`,e),window.removeEventListener(`keyup`,e)}},[]);let x=d(t=>{if(!_o(t.currentTarget))return;let n=t.currentTarget,r=t.composedPath();r.slice(0,r.indexOf(n)).some(e=>e instanceof Element&&e.matches(`a, .checkbox, .expand`))||e.dispatchEvent(new window.CustomEvent(`omnitable-item-click`,{bubbles:!0,composed:!0,detail:{item:n.dataItem,index:n.dataIndex}}))},[]),{groupOnColumn:S}=c,C=d((t,n)=>r=>bn(e,t,n,r),[]);return{...f,processedItems:r,dataIsValid:n,filterIsTooStrict:n&&r.length<1,loading:p,compareItemsFn:h,displayEmptyGroups:m,error:t,renderItem:y(()=>(e,t,r)=>g(e,e[Ji],{...r,columns:i,collapsedColumns:a,miniColumns:o,onItemClick:x,onCheckboxChange:b,onItemChange:C,rowPartFn:l,groupOnColumn:S,dataIsValid:n}),[g,i,a,o,x,b,C,l,S,n]),renderGroup:y(()=>(e,t,r)=>_(e,e[Ji],{...r,columns:i,onCheckboxChange:b,groupOnColumn:S,dataIsValid:n}),[_,i,b,S,n])}}})))()}var bo;function xo(){return(xo=e((()=>{bo=(e,t)=>{if(e===t)return 0;if(e==null)return-1;if(t==null)return 1;let n=typeof e,r=typeof t;return n===`object`&&r===`object`?e.toString()<t.toString()?-1:1:n===`number`&&r===`number`?e-t:n===`string`&&r===`string`?e<t?-1:1:n===`boolean`&&r===`boolean`?e?-1:1:(console.warn(`unsupported sort`,n,e,r,t),0)}})))()}var So,Co,wo,To,Eo,Do;function Oo(){return(Oo=e((()=>{Ee(),O(),xo(),G(),xi(),Q(),So=(e,t)=>(n,r)=>bo(e(n),e(r))*(t?-1:1),Co=e=>e.replace(/([a-z0-9])([A-Z])/gu,`$1-$2`).toLowerCase(),wo=(e,t)=>{e&&t&&Object.entries(t).forEach(([t,n])=>{let r=e[W];r.__ownChange=!0,Object.assign(r,{[t]:n}),r.__ownChange=!1,r.dispatchEvent(new CustomEvent(`${Co(t)}-changed`,{bubbles:!0,detail:{value:n}}))})},To=(e,t)=>Object.assign(e,{[Ji]:t}),Eo=Symbol(`unparsed`),Do=({data:e,columns:t,hashParam:n,sortAndGroupOptions:r,noLocalSort:i,noLocalFilter:a})=>{let{groupOnColumn:o,groupOnDescending:s,sortOnColumn:c,descending:l}=r,f=d(([e,n])=>{let r=t.find(({name:t})=>t===e);return r==null?[e,void 0]:[e,n.filter&&r.serializeFilter(r,n.filter)]},[t]),p=d(([e,n])=>{let r=t.find(({name:t})=>t===e);if(r==null)return[e,{[Eo]:n}];let i={filter:r.deserializeFilter(r,n)};return wo(r,i),[e,i]},[t]),[m,h]=hi({},n,{multi:!0,suffix:`-filter--`,write:f,read:p}),g=d((e,n)=>h(r=>{let i=le(n,r[e]);return wo(t.find(t=>t.name===e),i),{...r,[e]:{...r[e],...i}}}),[t,h]),_=y(()=>Object.values(m).map(e=>e.filter),[m]),v=y(()=>Object.fromEntries(t.map(e=>[e.name,!e.noLocalFilter&&e.getFilterFn(e,m[e.name]?.filter)]).filter(e=>!!e[1])),[t,..._]),b=y(()=>!Array.isArray(e)||e.length===0?[]:Object.entries(v).length===0||a?e.slice():e.filter(e=>Object.values(v).every(t=>t(e))),[e,v,a]),x=y(()=>{if(!i&&!o&&c!=null&&c.sortOn!=null)return b.slice().sort(So(e=>c.getComparableValue({...c,valuePath:c.sortOn},e),l));if(o!=null&&o.groupOn!=null){let e=b.reduce((e,t)=>{let n=o.getComparableValue({...o,valuePath:o.groupOn},t);if(n===void 0)return e;let r=e.find(e=>e.id===n);return r?(r.items.push(t),e):(r={id:n,name:n,items:[t]},[...e,r])},[]);return e.sort(So(e=>o.getComparableValue({...o,valuePath:o.groupOn},e.items[0]),s)),!c||i?e:e.filter(e=>Array.isArray(e.items)).map(e=>(e.items.sort(So(e=>c.getComparableValue({...c,valuePath:c.sortOn},e),l)),e))}return b},[b,o,s,c,l,i]),S=y(()=>{let e=0,t=0,n=[];return x.forEach(r=>{if(`items`in r&&Array.isArray(r.items)){To(r,t++),r.items.forEach(t=>{To(t,e++),n.push(t)});return}return To(r,e++),n.push(r)},[]),n},[x]);return u(()=>{h(e=>Object.values(e).some(e=>e[Eo]!=null)?Object.fromEntries(Object.entries(e).map(([e,t])=>{let n=t[Eo];return n==null?[e,t]:p([e,n])})):e)},[p]),{processedItems:x,visibleData:S,filters:m,filterFunctions:v,setFilterState:g}}})))()}var ko,Ao;function jo(){return(jo=e((()=>{n(),o(),O(),ko=e=>{let t=t=>{let n=e.data.indexOf(t);if(n<0)return null;let r=e.data.splice(n,1);if(e.data=e.data.slice(),Array.isArray(r)&&r.length>0)return r[0]},n=(t,n)=>{e.data.splice(t,1,n),e.data=e.data.slice()};return{removeItem:t,removeItems(e){let n=[];for(let r=e.length-1;r>=0;--r){let i=t(e[r]);i!=null&&n.push(i)}return n},replaceItemAtIndex:n,replaceItem(t,r){let i=e.data.indexOf(t);i>-1&&n(i,r)},selectItem(t){e.shadowRoot.querySelector(`#groupedList`).select(t)},selectAll(){e.shadowRoot.querySelector(`#groupedList`).selectAll()},deselectAll(){e.shadowRoot.querySelector(`#groupedList`).deselectAll()},deselectItem(t){e.shadowRoot.querySelector(`#groupedList`).deselect(t)},isItemSelected(t){return e.shadowRoot.querySelector(`#groupedList`).isItemSelected(t)}}},Ao=({host:e,visibleData:t,filters:n,...i})=>{let{setFilterState:a}=i,o=y(()=>ko(e),[]),[s,c]=r(`selectedItems`,[]);he(i,Object.values(i)),he(o,Object.values(o)),u(()=>{let t=e=>{if(!(e instanceof CustomEvent))return;let t=e.detail;a(t.name,e=>({...typeof e==`object`&&e?e:{},...t.state}))};return e.addEventListener(`legacy-filter-changed`,t),()=>e.removeEventListener(`legacy-filter-changed`,t)},[]),ge(`visibleData`,t),ge(`sortedFilteredGroupedItems`,i.sortedFilteredGroupedItems),ge(`sortOn`,i.sortOn),ge(`descending`,i.descending),ge(`isMini`,i.isMini);let l=y(()=>Object.fromEntries(Object.entries(n).filter(([,{filter:e}])=>e!==void 0).map(([e,{filter:t}])=>[e,t])),[n]);return ge(`filters`,l,Object.values(l)),{selectedItems:s,setSelectedItems:c}}})))()}var Mo;function No(){return(No=e((()=>{Ma(),ro(),ao(),so(),yo(),Oo(),jo(),Di(),Mo=e=>{let{hashParam:t,settingsId:n,data:r,resizeSpeedFactor:i,noLocal:a,noLocalSort:o=a,noLocalFilter:s=a,error:c,rowPartFn:l}=e,u=Aa({settingsId:n,host:e}),{settings:d,setSettings:f,columns:p,resetRef:m,savedSettings:h}=u,g=Ti(p,t,{settings:d,setSettings:f,resetRef:m,ready:h!==void 0}),{processedItems:_,visibleData:v,filters:y,setFilterState:b,filterFunctions:x}=Do({data:r,columns:p,hashParam:t,sortAndGroupOptions:g,noLocalSort:o,noLocalFilter:s}),{isMini:S,collapsedColumns:C,miniColumns:ee,requestTween:te}=no({host:e,columns:p,settings:d,setSettings:f,resizeSpeedFactor:i,sortAndGroupOptions:g}),ne=r&&Array.isArray(r)&&r.length>0,{selectedItems:w,setSelectedItems:re}=Ao({host:e,visibleData:v,sortedFilteredGroupedItems:_,columns:p,filters:y,setFilterState:b,isMini:S,...g}),ie=oo({host:e,selectedItems:w,sortAndGroupOptions:g,dataIsValid:ne,data:r,columns:p,filters:y,collapsedColumns:C,settings:d,filterFunctions:x,settingS:u,setFilterState:b,hideSelectAll:e.hideSelectAll===!0,headerColumns:e.headerColumns??null,requestTween:te});return{header:ie,list:vo({host:e,error:c,dataIsValid:ne,processedItems:_,selectedItems:w,setSelectedItems:re,columns:p,collapsedColumns:C,miniColumns:ee,sortAndGroupOptions:g,rowPartFn:l}),footer:io({host:e,selectedItems:w,allSelected:ie.allSelected,setSelectedItems:re,columns:p,enableSelectAll:e.enableSelectAll,allItemsCount:e.allItemsCount})}}})))()}function Po(){return(Po=e((()=>{t(),customElements.define(`cosmoz-grouped-list-row`,class extends HTMLElement{get item(){return this._item}set item(e){this._item=e,this._render()}get index(){return this._index}set index(e){this._index=e,this._render()}get renderFn(){return this._renderFn}set renderFn(e){this._renderFn=e,this._render()}_render(){this._item!=null&&this._index!=null&&this._renderFn!=null&&w(this._renderFn(this._item,this._index),this)}})})))()}var Fo,Io,Lo,Ro,zo,Bo,Vo,Ho,Uo;function Wo(){return(Wo=e((()=>{Fo={group:Symbol(`group`)},Io=(e,t)=>(t.has(e)||t.set(e,{}),t.get(e)),Lo=(e,t)=>!!Io(e,t).expanded,Ro=(e,t)=>!!Io(e,t).folded,zo=e=>e?e.items instanceof Array:!1,Bo=e=>{if(!Array.isArray(e)||e.length===0)return;let t=Array.isArray(e[0]?.items);if(!e.every(e=>Array.isArray(e.items)===t))throw Error(`Data must be homogeneous.`)},Vo=(e,t,n)=>{if(Array.isArray(e))return Bo(e),e.reduce((e,r)=>{let i=r;return i.items?i.items.length?Io(r,n).folded?e.concat(r):e.concat(r,i.items.map(e=>Object.assign(e,{[Fo.group]:r}))):t?e.concat(r):e:e.concat(r)},[])},Ho=(e,...t)=>typeof e==`function`?e(...t):e,Uo=(e,t)=>e===t})))()}var Go;function Ko(){return(Ko=e((()=>{O(),Wo(),Go=()=>{let[e,t]=m(()=>[new WeakMap]);return{setItemState:d((e,n)=>t(([t])=>{let r=Io(e,t);return Object.assign(r,Ho(n,r)),[t]}),[]),state:e[0],signal:e}}})))()}var qo;function Jo(){return(Jo=e((()=>{O(),Ko(),Wo(),qo=()=>{let{setItemState:e,state:t,signal:n}=Go();return{state:t,signal:n,toggleFold:d((t,n)=>{zo(t)&&e(t,e=>({folded:n===void 0?!e.folded:n}))},[]),toggleCollapse:d((t,n)=>{zo(t)||e(t,e=>({expanded:n===void 0?!e.expanded:!n}))},[])}}})))()}var Yo;function Xo(){return(Xo=e((()=>{O(),Q(),Wo(),Yo=({compareItemsFn:e,data:t,flatData:n})=>{let[i,a]=r(`selectedItems`,()=>[]),[o,s]=m(),c=d(e=>i===Z||i.includes(e),[i]),l=d(e=>i===Z||(e?.items?.every(c)??!1),[i,c]),f=d(e=>c(e)||l(e),[c,l]),p=d(e=>{let t=e.items??[e];a(e=>e===Z?e:[...e,...t.filter(t=>!e.includes(t))]),s(e)},[]),h=d(e=>{let t=e.items??[e];a(e=>e===Z?(n??[]).filter(e=>!zo(e)).filter(e=>!t.includes(e)):e.filter(e=>!t.includes(e))),s(e)},[n]),g=d(e=>{a(e.items?.slice()||[e]),s(e)},[]),_=d(()=>{a(t.flatMap(e=>e.items||e)),s(void 0)},[t]),v=d(()=>{a([]),s(void 0)},[]),y=d((e,t=!f(e))=>t?p(e):h(e),[f]),b=d((t,r)=>{if(!n)return;let i=o?n.findIndex(t=>e(t,o)):-1;if(i<0)return y(t,r);let[a,c]=[i,n.indexOf(t)].sort((e,t)=>e-t);n.slice(a,c+1).forEach((e,t,n)=>{t>0&&t<n.length-1&&zo(e)||y(e,r)}),s(t)},[n,e,y]);return u(()=>a(t=>t!==Z&&t.length>0&&n?n.filter(n=>t.find(t=>e(n,t))):t),[n]),{selectedItems:i,isItemSelected:c,isGroupSelected:l,isSelected:f,select:p,deselect:h,selectOnly:g,selectAll:_,deselectAll:v,toggleSelect:y,toggleSelectTo:b}}})))()}var Zo,Qo,$o;function es(){return(es=e((()=>{fe(),n(),O(),t(),Po(),Jo(),Xo(),Wo(),Zo={host:{position:`relative`,display:`flex`,flexDirection:`column`}},Qo=e=>{let{data:t,renderItem:n,renderGroup:r,displayEmptyGroups:i,compareItemsFn:a=Uo}=e,{toggleFold:o,toggleCollapse:s,state:c,signal:l}=qo(),u=y(()=>Vo(t,i,c),[t,i,l]),{selectedItems:f,isItemSelected:p,isGroupSelected:m,isSelected:h,select:_,deselect:v,selectOnly:b,selectAll:x,deselectAll:S,toggleSelect:C,toggleSelectTo:ee}=Yo({compareItemsFn:a,data:t,flatData:u}),te=d((e,t)=>Array.isArray(e.items)?r(e,t,{selected:m(e),folded:Ro(e,c),toggleSelect:t=>C(e,typeof t==`boolean`?t:void 0),toggleFold:()=>o(e)}):n(e,t,{selected:p(e),expanded:Lo(e,c),toggleSelect:t=>C(e,typeof t==`boolean`?t:void 0),toggleCollapse:()=>s(e)}),[n,r,f,C,l]);g(()=>{Object.assign(e.style,Zo.host)},[]);let ne={toggleFold:o,toggleCollapse:s,isItemSelected:p,isGroupSelected:m,isSelected:h,select:_,deselect:v,selectOnly:b,selectAll:x,deselectAll:S,toggleSelect:C,toggleSelectTo:ee};return he(ne,Object.values(ne)),{renderRow:te,flatData:u}},$o=({renderRow:e,flatData:t})=>de({items:t,renderItem:(t,n)=>v`<cosmoz-grouped-list-row
				.item=${t}
				.index=${n}
				.renderFn=${e}
			></cosmoz-grouped-list-row>`})})))()}var ts;function ns(){return(ns=e((()=>{O(),es(),ts=e=>$o(Qo(e)),customElements.define(`cosmoz-grouped-list`,k(ts,{useShadowDOM:!1}))})))()}function rs(){return(rs=e((()=>{ns()})))()}var is,as,os;function ss(){return(ss=e((()=>{Me(),Ft(),ai(),si(),Ai(),Fi(),Ri(),O(),it(),t(),b(),Vi(),Zi(),$i(),ia(),No(),rs(),uo(),ho(),is=e=>window.ShadyCSS?.ApplyShim?.transformCssText?.(e)||e,as=e=>{let{header:t,list:n,footer:r}=Mo(e);return v`
		<style>
			${Oe([],()=>is(Bi))}
		</style>

		<div class="mainContainer">
			${Qi(t)}
			<div class="tableContent" id="tableContent">
				${ra(t,n)}
			</div>
			${Xi(r)}
		</div>

		<div id="columns">
			<slot id="columnsSlot"></slot>
		</div>
	`},customElements.define(`cosmoz-omnitable`,k(as,{observedAttributes:[`hash-param`,`sort-on`,`group-on`,`descending`,`group-on-descending`,`hide-select-all`,`settings-id`,`no-local`,`no-local-sort`,`no-local-filter`,`disabled-filtering`,`loading`,`mini-breakpoint`,`compact`,`inline`,`enable-select-all`]})),os=`
	<slot name="actions" slot="actions"></slot>
`,v(Object.assign([os],{raw:[os]})),Ae(Object.assign([os],{raw:[os]}))})))()}var cs,ls,us,$,ds;function fs(){return(fs=e((()=>{t(),qe(),Fe(),xt(),ss(),vt(),cs={title:`Components/ComsmozOmnitableFullDemo`,component:`cosmoz-omnitable`,tags:[`autodocs`],args:{loading:!1,locale:`en`,sortOn:``,groupOn:``,descending:!1,groupOnDescending:!1,hashParam:``,settingsId:``,selectedItems:[],disabledFiltering:!1,enableSelectAll:!1,allItemsCount:1e4},argTypes:{loading:{control:`boolean`,description:`Show loading state`,table:{defaultValue:{summary:`false`}}},locale:{control:`select`,options:[`en`,`fr`,`sv`],description:`Language locale`,table:{defaultValue:{summary:`en`}}},selectedItems:{control:`object`,description:`Show selected items`},allItemsCount:{control:`number`,description:`Total number of items`},data:{control:`object`,description:`Show specified items`},sortOn:{control:`text`,description:`Column property name to sort on (e.g., "amount", "date", "id")`},groupOn:{control:`text`,description:`Column property name to group on (e.g., "amount", "date", "id")`},descending:{control:`boolean`,description:`Sort on descending`},groupOnDescending:{control:`boolean`,description:`Group on descending`},hashParam:{control:`text`,description:`Hash parameter for URL state management`},settingsId:{control:`text`,description:`ID for storing table settings`},disabledFiltering:{control:`boolean`,description:`Disable filter inputs in all column headers`,table:{defaultValue:{summary:`false`}}}},render:e=>v`
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
                    ${Pe({styles:`vertical-align: middle; fill: currentColor;`})}
                    <span>Remove items</span>
                </cosmoz-button>
            </cosmoz-omnitable>
        `,play:async()=>{console.log(`Current hash:`,window.location.hash)}},ls={args:{data:yt(10,10,10)}},us={args:{data:yt(2,2,10)}},$={args:{data:[]}},ds=[`TableWithLargeData`,`TableWithSmallData`,`TableWithNoData`],ls.parameters={...ls.parameters,docs:{...ls.parameters?.docs,source:{originalSource:`{
  args: {
    data: generateTableDemoData(10, 10, 10)
  }
}`,...ls.parameters?.docs?.source}}},us.parameters={...us.parameters,docs:{...us.parameters?.docs,source:{originalSource:`{
  args: {
    data: generateTableDemoData(2, 2, 10)
  }
}`,...us.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    data: []
  }
}`,...$.parameters?.docs?.source}}}})))()}fs();export{ls as TableWithLargeData,$ as TableWithNoData,us as TableWithSmallData,ds as __namedExportsOrder,cs as default};