import{i as e}from"./preload-helper-CT_b8DTk.js";import{$ as t,A as n,An as r,At as i,B as a,Bt as o,C as s,D as c,Dt as l,E as u,F as d,G as f,H as p,It as m,Mn as h,Mt as g,N as _,Nn as v,Ot as y,Pt as b,R as x,Rt as ee,S,T as C,Tt as te,U as ne,Vt as re,Y as ie,Z as w,_ as ae,_t as T,c as oe,ct as se,d as ce,dt as le,et as E,f as ue,ft as de,g as fe,gt as D,h as pe,ht as me,j as he,k as ge,kn as _e,l as O,m as ve,mt as ye,n as be,nt as xe,o as Se,ot as Ce,p as we,pt as Te,q as Ee,r as De,s as Oe,t as ke,tt as Ae,u as je,ut as k,v as Me,vt as Ne,w as A,y as Pe}from"./iframe-B4B6pgtv.js";import{A as Fe,C as Ie,D as Le,E as Re,F as j,G as ze,H as Be,I as Ve,L as He,M as Ue,N as We,O as M,P as N,R as Ge,S as Ke,T as qe,U as Je,V as Ye,Y as Xe,_ as Ze,a as Qe,b as $e,c as et,d as tt,f as nt,g as rt,h as it,j as at,k as P,l as ot,n as st,o as ct,p as lt,q as ut,r as dt,s as ft,t as pt,u as mt,v as ht,w as gt,x as _t,y as vt,z as yt}from"./dist-D3joLHu4.js";import{n as bt,t as xt}from"./table-demo-helper-CgklG5nu.js";var St,Ct=e((()=>{D(),St=()=>h`<style>
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
</style>`,customElements.define(`cz-spinner`,T(St))})),wt,Tt,F=e((()=>{x(),Ce(),D(),wt=k`
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
`,Tt=()=>h`
	<style>
		${wt}
	</style>
	${p({className:`icon`,width:`18`,height:`18`})}
`,customElements.define(`cosmoz-clear-button`,T(Tt))})),I,Et,Dt,Ot,kt,L,R=e((()=>{j(),I=({valuePath:e},t)=>N(t,e),Et=I,Dt=I,Ot=({valuePath:e},t)=>n=>{let r=N(n,e);return r==null?!1:r.toString().toLowerCase().trim().includes(t.toLowerCase().trim())},kt=(e,t)=>t===``||t==null?null:t,L=e=>class extends e{static get properties(){return{isOmnitableColumn:{type:Boolean,value:!0},title:{type:String},valuePath:{type:String,notify:!0},values:{type:Array,notify:!0},filter:{type:Object},noLocalFilter:{type:Boolean},disabled:{type:Boolean,value:!1,notify:!0},editable:{type:Boolean,notify:!0},loading:{type:Boolean,value:!1,notify:!0},externalValues:{type:Boolean,value:!1,notify:!0},name:{type:String},sortOn:{type:String},groupOn:{type:String},noSort:{type:Boolean,value:!1},disabledFiltering:{type:Boolean,value:!1},width:{type:String,value:`75px`},minWidth:{type:String,value:`40px`},flex:{type:String,value:`1`},cellClass:{type:String,value:`default-cell`},headerCellClass:{type:String,value:`default-header-cell`},priority:{type:Number,value:0},hidden:{type:Boolean,notify:!0},preferredDropdownHorizontalAlign:{type:String,value:`right`},renderHeader:{type:Function},renderCell:{type:Function},renderEditCell:{type:Function},renderGroup:{type:Function},mini:{type:Number,value:null},renderMini:{type:Function}}}static get observers(){return[`notifyFilterChange(filter)`]}notifyFilterChange(e){this.__ownChange||this.dispatchEvent(new CustomEvent(`legacy-filter-changed`,{detail:{name:this.name,state:this.legacyFilterToState(e)},bubbles:!0}))}legacyFilterToState(e){return{filter:e}}getFilterFn(){}getString(e,t){return I(e,t)}toXlsxValue(e,t){return Et(e,t)}cellTitleFn(e,t){return this.getString(e,t)}headerTitleFn(e){return e.title}serializeFilter(e,t){return kt(e,t)}deserializeFilter(e,t){if(t==null)return null;if(typeof t==`string`)try{return window.decodeURIComponent(t)}catch{return null}return t}getComparableValue(e,t){return Dt(e,t)}computeSource(e,t){return t}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n),this.dispatchEvent(new CustomEvent(`cosmoz-column-prop-changed`,{bubbles:!0}))}}})),At,jt,Mt,Nt,Pt,Ft,It,Lt=e((()=>{u(),F(),P(),v(),t(),R(),At=e=>t=>e(n=>{if(n.inputValue===void 0&&t.target.value===``)return n;clearTimeout(n.t);let r=setTimeout(()=>e(e=>({...e,filter:e.inputValue})),1e3);return{...n,inputValue:t.target.value,t:r}}),jt=e=>()=>e(e=>({...e,filter:e.inputValue})),Mt=e=>t=>{t.keyCode===13&&(t.preventDefault(),e(e=>({...e,filter:e.inputValue})))},Nt=e=>t=>e(e=>({...e,headerFocused:t.detail.value})),Pt=e=>()=>e(e=>({...e,filter:null,inputValue:null})),Ft=e=>e!=null&&e!==``,It=class extends L(M){static get properties(){return{minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},inputValue:{type:Object,notify:!0}}}getFilterFn(e,t){if(!(t==null||t===``))return Ot(e,t)}renderCell(e,{item:t}){return h`<span class="default-column">${I(e,t)}</span>`}renderEditCell(e,{item:t},n){return h`<cosmoz-input
			variant="inline"
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${I(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,inputValue:n,headerFocused:r},i){return h`<cosmoz-input
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
			${E(!e.disabledFiltering,()=>h`<cosmoz-clear-button
						suffix
						slot="suffix"
						?visible=${Ft(t)}
						light
						@click=${Pt(i)}
					></cosmoz-clear-button>`)}
		</cosmoz-input>`}legacyFilterToState(e){return{filter:e,inputValue:e}}},customElements.define(`cosmoz-omnitable-column`,It)})),Rt,zt,Bt,z=e((()=>{u(),D(),v(),Rt=[`label`,`value`,`slot`,`always-float-label`,`disabled`,`variant`],zt=re`
	${_}

	.wrap {
		height: 40px;
	}

	#input {
		margin-top: -4px;
	}
`,Bt=e=>{let{label:t,value:n,slot:r}=e;return d(h`<div
		id="input"
		part="input"
		role="button"
		class="control"
		slot=${r}
	>
		${n||``}
	</div>`,{label:t})},customElements.define(`cosmoz-omnitable-dropdown-input`,T(Bt,{observedAttributes:Rt,styleSheets:[zt]}))})),B,Vt=e((()=>{He(),v(),Re(),z(),B=({title:e,tooltip:t=``,filterText:n=``,onOpenedChanged:r,content:i,horizontalAlign:a=`left`,externalValues:o=null})=>h`
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
			class=${qe({filtered:!!n,...o!=null&&{[`external-values-${o}`]:!0},dropdown:!0})}
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
	`})),Ht,Ut,Wt=e((()=>{we(),Ue(),gt(),_t(),Ht=e=>e?typeof e.close==`function`?e:Ht(e.parentElement):null,Ut=e=>class extends e{static get properties(){return{disabled:{type:Boolean,value:!1},filter:{type:Object,notify:!0},values:{type:Array,value(){return[]}},headerFocused:{type:Boolean,notify:!0},min:{type:Number,value:null},max:{type:Number,value:null},limits:{type:Function},autoupdate:{type:String,value:!0},locale:{type:String,value:null},_filterInput:{type:Object,value(){return{min:null,max:null}}},_range:{type:Object,computed:`_computeRange(values.*)`},_limit:{type:Object,computed:`_computeLimit(_range, _filterInput.*, min, max)`,value(){return{}}},_tooltip:{type:String,computed:`_computeTooltip(title, _filterText)`},_fromClasses:{type:String,computed:`_computeInputClasses(_filterInput.min)`},_toClasses:{type:String,computed:`_computeInputClasses(_filterInput.max)`}}}static get observers(){return[`_filterInputChanged(_filterInput.*, autoupdate)`,`_filterChanged(filter.*)`,`_updateLimits(limits, headerFocused)`]}disconnectedCallback(){this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),super.disconnectedCallback()}_computeInputClasses(e){return e!=null&&e!==``?`has-value`:``}toNumber(e,t,n){if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=this.toNumber(t);return i==null?r:n(r,i)}toValue(){return this.toNumber.apply(this,arguments)}getComparableValue(e,t){if(e==null)return;let n=e;return t!=null&&(n=this.get(t,e)),this.toValue(n)}renderValue(){}getInputString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return this._toInputString(n)}_computeRange(e){let t=e.base,n=Array.isArray(t)&&t.length&&t.map(e=>this.toValue(e)).filter(e=>e!=null);return!n||n.length<1?{min:null,max:null}:n.reduce((e,t)=>({min:this.toValue(t,e.min,Math.min),max:this.toValue(t,e.max,Math.max)}),{})}_computeLimit(e,t,n,r){if(!e)return;let i=t.base,a=this.toValue(n),o=this.toValue(r),s=a??this.toValue(e.min),c=o??this.toValue(e.max);return{fromMin:s,fromMax:this.toValue(c,this._fromInputString(i.max,`max`),Math.min),toMin:this.toValue(s,this._fromInputString(i.min,`min`),Math.max),toMax:c}}_computeFilterText(e){if(e.base==null)return;let t=e.base,n=this.toValue(t.min),r=this.toValue(t.max),i=[];return n!=null&&i.push(this.renderValue(n)),i.push(` - `),r!=null&&i.push(this.renderValue(r)),i.length>1?i.join(``):void 0}_computeTooltip(e,t){return t==null?e:`${e}: ${t}`}_fromInputString(e){return this.toValue(e)}_toInputString(e){return this.toValue(e)??null}_getDefaultFilter(){return{min:null,max:null}}_filterInputChanged(e,t){let n=e.path.split(`.`)[1];this.__inputChangePath=n||null,t&&(this._limitInputDebouncer=Ke.debounce(this._limitInputDebouncer,We.after(600),()=>{this._limitInput(),this._updateFilter()}),Ie(this._limitInputDebouncer))}_clearFrom(){this.set(`_filterInput.min`,null),this._updateFilter()}_clearTo(){this.set(`_filterInput.max`,null),this._updateFilter()}_onBlur(){this._limitInput(),this._updateFilter()}_onKeyDown(e){let t=e.currentTarget,n=Array.from(t.parentElement.querySelectorAll(`cosmoz-input`)),r=n[n.findIndex(e=>e===t)+1],i=!r,a=n[0]===t;switch(e.keyCode){case 13:if(e.preventDefault(),!i)r.focus();else{let e=this._limitInput();this._updateFilter(),e||this._closeParent(t)}break;case 9:(i&&!e.shiftKey||a&&e.shiftKey)&&this._closeParent(t)}}_closeParent(e){let t=Ht(e);t&&t.close()}_onDropdownOpenedChanged({currentTarget:e,type:t,detail:n}){(t===`focus`||n?.value===!0)&&setTimeout(()=>{e.querySelector(`cosmoz-input:focus`)||e.querySelector(`cosmoz-input`)?.focus()},100)}_limitInput(){let e=this._filterInput,t=this.__inputChangePath,n=t?this._fromInputString(this.get(t,e),t):null;if(this.__inputChangePath=null,n==null)return!1;let r=this._limit,i=t===`min`?`from`:`to`,a=this.get(i+`Min`,r),o=this.get(i+`Max`,r),s=this.toValue(n,a,Math.max),c=this.toValue(s,o,Math.min);return this.getComparableValue(n)===this.getComparableValue(c)?!1:(this.set([`_filterInput`,t],this._toInputString(c,t)),this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),!0)}_updateFilter(){let e=this._filterInput,t=this.filter,n=this._fromInputString(e.min,`min`),r=this._fromInputString(e.max,`max`);this.getComparableValue(n)===this.getComparableValue(t,`min`)&&this.getComparableValue(r)===this.getComparableValue(t,`max`)||this.set(`filter`,{min:n,max:r})}_filterChanged(e){if(this._filterInput==null)return;let t=this._filterInput,n=e.base,r=this._fromInputString(t.min,`min`),i=this._fromInputString(t.max,`max`);this.getComparableValue(r)===this.getComparableValue(n,`min`)&&this.getComparableValue(i)===this.getComparableValue(n,`max`)||(this.set(`_filterInput`,{min:this._toInputString(n.min),max:this._toInputString(n.max)}),this._limitInputDebouncer&&this._limitInputDebouncer.cancel())}hasFilter(){let e=this.filter;return e==null?!1:this.toValue(e.min)!=null||this.toValue(e.max)!=null}resetFilter(){this.filter=this._getDefaultFilter()}_updateLimits(e,t){e&&Promise.resolve(ve(e,{active:t})).then(e=>{let{min:t,max:n}=e??{};Object.assign(this,{...t==null?{}:{min:t},...n==null?{}:{max:n}})})}}})),V,Gt=e((()=>{P(),v(),V=e=>class extends e{static get template(){return Fe`<div id="output" style="position:relative;"></div>`}connectedCallback(){super.connectedCallback();let e=this;r(e.render(),e.$.output)}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n);let i=this;requestAnimationFrame(()=>r(i.render(),i.$.output))}}})),Kt,qt=e((()=>{u(),P(),A(),v(),t(),Vt(),z(),Wt(),Gt(),Kt=class extends Ut(V(M)){static get properties(){return{currency:{type:String},autodetect:{type:Boolean,value:!1},rates:{type:Object},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, _formatters)`},headerFocused:{type:Boolean,value:!1}}}static get observers(){return[`_valuesChanged(autodetect, currency, values)`]}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return h`
			${E(this.disabled,()=>h`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>h`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${B({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:h`
							<h3>${this.title}</h3>
							<cosmoz-input
								class=${this._fromClasses}
								type="number"
								title=${C(`Minimum amount`)}
								label=${C(`Min amount`)}
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
								title=${C(`Maximum amount`)}
								label=${C(`Max amount`)}
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
		`}_valuesChanged(e,t,n){if(!Array.isArray(n)||n.length<1||!e&&t)return;let r=n.reduce((e,t)=>{if(t.currency){let n=t.currency;e[n]=(e[n]||0)+1}return e},{}),i=Object.keys(r)[0];Object.keys(r).reduce((e,t)=>{let n=Math.max(e,r[t]);return n===r[t]&&(i=t),n},0),this.set(`currency`,i)}toAmount(e,t,n){if(e==null||e===``)return;if(typeof e!=`object`||e.currency==null||e.currency===``)return null;let r=this.toNumber(e.amount);if(r==null||Number.isNaN(r))return null;let i={currency:e.currency,amount:r};if(n==null||t==null)return i;let a=this.toAmount(t);if(a==null)return i;let o=this.rates||{},s=i.amount*(o[i.currency]||1),c=a.amount*(o[a.currency]||1);return this.toNumber(s,c,n)===s?i:a}toValue(){return this.toAmount.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n==null)return;let r=this.toNumber(n.amount),i=this.rates;return i==null?r:r*(i[n.currency]||1)}getString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return n===void 0?``:n===null?`Invalid value`:this.renderValue(n)}getCurrency(e,t){let n=this.get(t,e);return n&&n.currency}getFormatter(e,t){let n=e+(t||``)||``,r=this._formatters=this._formatters||{};return r[n]||(r[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),r[n]}renderValue(e){let t=this.toAmount(e);return t==null?``:this.getFormatter(t.currency,this.locale).format(e.amount)}_amountValueChanged(e){let t=e.target.value,n=e.model.item,r=this.get(this.valuePath,n),i={amount:Number(t),currency:r.currency};this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toInputString(e){let t=this.toValue(e);return t==null?null:this.toNumber(t.amount)}_toInputStringAmount(e){let t=this.rates;if(t==null)return this._toInputString(e);let n=this.toValue(e);return n==null?null:(this.toNumber(n.amount)*(t[n.currency]||1)/(t[this.currency]||1)).toFixed(2)}_fromInputString(e,t){let n=this.toNumber(e);if(n!=null)return this.toValue({amount:n,currency:t&&this.get([`filter`,t,`currency`])||this.currency})}},customElements.define(`cosmoz-omnitable-amount-range-input`,Kt)})),H,Jt,Yt,Xt,U,Zt,Qt,$t,en=e((()=>{j(),ht(),H=(e,t,n)=>{if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=H(t);return i==null?r:n(r,i)},Jt=e=>{let t=H(e);return t==null?null:t.toString()},Yt=({valuePath:e},t)=>Jt(H(e?N(t,e):t)),Xt=e=>Jt(e)??``,U=({valuePath:e,maximumFractionDigits:t},n)=>{if(n==null)return;let r=H(e?N(n,e):n);if(r!=null)return t===null?r:H(r.toFixed(t))},Zt=$e((e,t,n)=>{let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}),Qt=({valuePath:e,locale:t,minimumFractionDigits:n,maximumFractionDigits:r},i)=>{let a=e?N(i,e):i;if(a==null)return``;let o=H(a);if(o!=null)return Zt(t,n,r).format(o)},$t=(e,t)=>n=>{let r=U(e,n);if(r==null)return!1;let i=U({...e,valuePath:`min`},t),a=U({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})),W,G,tn,nn,rn,an,on,sn,cn,ln,un,dn=e((()=>{j(),en(),W=(e={},t,n,r)=>{if(t==null||t===``)return;if(typeof t!=`object`||t.currency==null||t.currency===``)return null;let i=H(t.amount);if(i==null||Number.isNaN(i))return null;let a={currency:t.currency,amount:i};if(r==null||n==null)return a;let o=W(e,n);if(o==null)return a;let s=a.amount*(e[a.currency]||1);return H(s,o.amount*(e[o.currency]||1),r)===s?a:o},G=({valuePath:e,rates:t},n)=>{if(n==null)return;let r=n;e!=null&&(r=N(n,e));let i=W(t,r);if(i==null)return;let a=H(i.amount);return t==null||a==null?a:a*(t?.[i.currency]||1)},tn=(e,t)=>n=>{let r=G(e,n);if(r===void 0)return!1;let i=G({...e,valuePath:`min`},t),a=G({...e,valuePath:`max`},t);return i===void 0||a===void 0?!0:!(r<i||r>a)},nn={},rn=(e,t)=>{let n=e+(t||``)||``;return nn[n]||(nn[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),nn[n]},an=(e,t,n)=>{let r=W(e,t);return r==null?``:rn(r.currency,n).format(r.amount)},on=({valuePath:e,rates:t,locale:n},r)=>{let i=W(t,e?N(r,e):void 0);return i===void 0?``:i===null?`Invalid value`:an(t,i,n)},sn=e=>e?e.amount+e.currency:``,cn=e=>{if(e==null||e===``)return;let t=e.match(/^(-?[\d]+)([\D]+?)$/iu);if(!(!Array.isArray(t)||t.length<0))return{amount:Number(t[1]),currency:t[2]}},ln=({valuePath:e},t)=>e?N(t,e)?.currency:null,un=({valuePath:e},t)=>e?N(t,e)?.amount:void 0})),K,fn,pn,mn,hn,gn,_n,q=e((()=>{ht(),D(),K=Symbol(`column`),fn=e=>{let t=!0,n=e.map(e=>e.name);return e.forEach(e=>{e.name??(t=!1,console.error(`The name attribute needs to be set on all columns! Missing on column`,e))}),e.forEach(e=>{n.indexOf(e.name)!==n.lastIndexOf(e.name)&&(t=!1,console.error(`The name attribute needs to be unique among all columns! Not unique on column`,e))}),t},pn=(e,t)=>{let n=e.valuePath??e.name;return{name:e.name,title:e.title,valuePath:n,groupOn:e.groupOn??n,sortOn:e.sortOn??n,noSort:e.noSort,disabledFiltering:t||e.disabledFiltering,minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,getString:e.getString,getComparableValue:e.getComparableValue,serializeFilter:e.serializeFilter,deserializeFilter:e.deserializeFilter,toXlsxValue:e.toXlsxValue,renderHeader:e.renderHeader,renderCell:e.renderCell,renderEditCell:e.renderEditCell,renderGroup:e.renderGroup,cellTitleFn:e.cellTitleFn,headerTitleFn:e.headerTitleFn,getFilterFn:e.getFilterFn,headerCellClass:e.headerCellClass,cellClass:e.cellClass,editable:e.editable,values:e.values,source:vt(e.computeSource),noLocalFilter:e.noLocalFilter,mini:e.mini,renderMini:e.renderMini,loading:e.loading,externalValues:e.externalValues,computeSource:e.computeSource,trueLabel:e.trueLabel,falseLabel:e.falseLabel,valueProperty:e.valueProperty,textProperty:e.textProperty,emptyLabel:e.emptyLabel,emptyValue:e.emptyValue,min:e.min,max:e.max,locale:e.locale,autoupdate:e.autoupdate,maximumFractionDigits:e.maximumFractionDigits,minimumFractionDigits:e.minimumFractionDigits,currency:e.currency,rates:e.rates,autodetect:e.autodetect,ownerTree:e.ownerTree,keyProperty:e.keyProperty,...e.getConfig?.(e),[K]:e}},mn=e=>e.isOmnitableColumn&&!e.hidden,hn=e=>{let t=e.filter(mn);return fn(t)?t:[]},gn=(e,t,n)=>(Array.isArray(t)?e.filter(e=>t.includes(e.name)):e.filter(e=>!e.disabled)).map(e=>pn(e,n)),_n=(e,{enabledColumns:t,disabledFiltering:n})=>{let[r,a]=i([]);return g(()=>{let r,i=[],o=e.shadowRoot.querySelector(`#columnsSlot`),s=e=>()=>{let r=o.assignedNodes({flatten:!0});if(e)i=r;else{let e=r.filter(e=>!i.includes(e)),t=i.filter(e=>!r.includes(e)),n=[...e,...t].some(e=>e.isOmnitableColumn);if(i=r,!n)return}a(gn(hn(r),t,n))},c=e=>{cancelAnimationFrame(r),r=requestAnimationFrame(s(e?.type===`cosmoz-column-prop-changed`))};return c(),o.addEventListener(`slotchange`,c),e.addEventListener(`cosmoz-column-prop-changed`,c),()=>{o.removeEventListener(`slotchange`,c),e.removeEventListener(`cosmoz-column-prop-changed`,c),cancelAnimationFrame(r)}},[t,n]),r}})),vn,J,yn,Y=e((()=>{j(),q(),vn=(e,t)=>Array.isArray(e)?e.map(e=>N(e,t)).filter((e,t,n)=>e!=null&&n.indexOf(e)===t):void 0,J=({externalValues:e,values:t,valuePath:n},r)=>{if(e)return e;if(typeof t==`function`)return t;if(n!==void 0)return vn(r,n)},yn=(e,t,n,r)=>{let{valuePath:i}=t,a=i===void 0?void 0:N(n,i);if(r===a)return;i!==void 0&&Ve(n,i,r);let o={item:n,valuePath:i,value:r,oldValue:a,column:t[K]};e.dispatchEvent(new CustomEvent(`column-item-changed`,{bubbles:!0,composed:!0,detail:o}))}})),bn,xn=e((()=>{u(),F(),P(),v(),j(),R(),qt(),dn(),Y(),bn=class extends L(M){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},currency:{type:String,notify:!0},autodetect:{type:Boolean,value:!1,notify:!0},rates:{type:Object,notify:!0},width:{type:String,value:`70px`},cellClass:{type:String,value:`amount-cell align-right`},headerCellClass:{type:String,value:`amount-header-cell`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=G({...e,valuePath:`min`},t),r=G({...e,valuePath:`max`},t);if(!(n==null&&r==null))return tn(e,t)}getString(e,t){return on(e,t)}toXlsxValue(e,t){return on(e,t)}getComparableValue(e,t){return G(e,t)}serializeFilter({rates:e},t){if(t==null)return;let n=W(e,t.min),r=W(e,t.max);if(!(n==null&&r==null))return sn(n)+`~`+sn(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:cn(n[1]),max:cn(n[2])}:null}renderCell(e,{item:t}){return h`<span>${e.getString(e,t)}</span>`}renderEditCell(e,{item:t},n){return h`<cosmoz-input
			type="number"
			@change=${r=>n({amount:r.target.value,currency:N(t,e.valuePath)?.currency})}
			.value=${un(e,t)}
		>
			<div slot="suffix">${ln(e,t)}</div>
		</cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,rates:a,currency:o,autoupdate:s,autodetect:c,disabledFiltering:l},{filter:u},d,f){return h`<cosmoz-omnitable-amount-range-input
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
		></cosmoz-omnitable-amount-range-input>`}computeSource(e,t){return J(e,t)}},customElements.define(`cosmoz-omnitable-column-amount`,bn)})),Sn,Cn,wn,Tn,En,Dn,On,kn,An,jn,Mn,Nn,Pn=e((()=>{De(),we(),oe(),j(),Y(),Sn=(e,t)=>{if(!Array.isArray(e))return;let n=[];return e.reduce((e,t)=>Array.isArray(t)?(t.forEach(t=>{e.push(t)}),e):(e.push(t),e),[]).filter((e,r,i)=>{if(i.indexOf(e)!==r)return!1;if(t){let r=N(e,t);if(n.indexOf(r)!==-1)return!1;n.push(r)}return!0})},Cn=(e,t,n)=>{if(e==null)return[];if(Array.isArray(e)){let r=Sn(e,t);if(!r?.length)return r;let i=n??`label`,a=e=>String(typeof e==`object`&&e?N(e,i)??``:e??``);return r.sort((e,t)=>a(e).localeCompare(a(t)))}if(typeof e==`object`){let r=t??`id`,i=n??`label`;return Object.entries(e).map(([e,t])=>({[r]:e,[i]:t})).sort((e,t)=>String(e[i]??``).localeCompare(String(t[i]??``)))}return[]},wn=(e,t,n)=>be(t&&N(e,t)).map(O(n)),Tn=({valuePath:e,textProperty:t},n)=>wn(n,e,t).filter(e=>e!=null).join(`, `),En=Tn,Dn=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>a=>{let o=O(e),s=be(N(a,t));return i.some(t=>s.length===0&&O(r||e)(t)===n||s.some(e=>o(e)===o(t)))},On=e=>t=>e(e=>({...e,filter:t})),kn=e=>t=>e(e=>({...e,headerFocused:t})),An=e=>t=>e(e=>({...e,query:t})),jn=({emptyValue:e,emptyLabel:t,emptyProperty:n,textProperty:r,valueProperty:i},a)=>{let o=Cn(a,i,r);return!t||e===void 0||!r||!(n||i)||!o?o:[{[r]:t,[n||i]:e},...o]},Mn=(e,t)=>jn(e,vn(t,e.valuePath)),Nn=e=>class extends e{static get properties(){return{textProperty:{type:String},valueProperty:{type:String},emptyLabel:{type:String},emptyValue:{type:Object},emptyProperty:{type:String}}}getConfig(e){return{emptyProperty:e.emptyProperty}}getString(e,t){return Tn(e,t)}toXlsxValue(e,t){return En(e,t)}getComparableValue({valuePath:e,valueProperty:t},n){let r=N(n,e);return t==null?r:be(r).map(O(t)).sort().join(` `)}getFilterFn(e,t){if(!(!t||!Array.isArray(t)||t.length===0))return Dn(e,t)}serializeFilter(e,t){return t.length===0?null:JSON.stringify(t)}deserializeFilter(e,t){if(t==null)return null;try{return JSON.parse(decodeURIComponent(t))}catch(e){return console.error(`Failed to deserialize filter value:`,{error:e?.name,message:e?.message,filterLength:typeof t==`string`?t.length:null}),null}}computeSource(e,t){return e.externalValues||typeof e.values==`function`?async(...t)=>jn(e,await Promise.resolve(ve(e.values,...t))):Mn(e,t)}}})),Fn,In,Ln,Rn=e((()=>{ke(),Ze(),P(),v(),t(),De(),oe(),Pn(),R(),D(),j(),q(),Fn=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?ce(t):O(n),a=be(e&&N(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},In=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>{let a=O(e),o=O(r||e),s=new Set(i.filter(e=>e.excluded).map(e=>a(e.item))),c=new Set(i.filter(e=>!e.excluded).map(e=>a(e.item))),l=i.some(e=>e.excluded&&o(e.item)===n),u=i.some(e=>!e.excluded&&o(e.item)===n);return e=>{let n=be(N(e,t)).map(a);return n.length===0?!l&&(u||c.size===0):!n.some(e=>s.has(e))&&(c.size===0||n.some(e=>c.has(e)))}},Ln=class extends Nn(L(M)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return h`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},n){return h`<cosmoz-input
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${I(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:n},r,i){return h`<cosmoz-autocomplete-excluding
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
			@opened-changed=${e=>kn(r)(e.detail.value)}
			@value-changed=${l(On(r))}
			@text-changed=${l(An(r))}
			>${E(e.loading,()=>h`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-excluding
		>`}getComparableValue(e,t){return Fn(e,t)}getFilterFn(e,t){if(!(!t||!Array.isArray(t)||t.length===0))return In(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete-excluding`,Ln)})),zn,Bn,Vn=e((()=>{ke(),Ze(),P(),v(),t(),De(),oe(),Pn(),R(),j(),q(),zn=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?ce(t):O(n),a=be(e&&N(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},Bn=class extends Nn(L(M)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return h`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},n){return h`<cosmoz-input
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${I(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:n},r,i){return h`<cosmoz-autocomplete-ui
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
			.onChange=${On(r)}
			@opened-changed=${e=>kn(r)(e.detail.value)}
			.onText=${An(r)}
			>${E(e.loading,()=>h`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}getComparableValue(e,t){return zn(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete`,Bn)})),Hn,Un,Wn,Gn,Kn,qn,Jn,Yn,Xn,Zn,Qn,$n,er,tr,nr=e((()=>{P(),R(),ke(),ht(),j(),v(),t(),Hn=(e,t)=>t.find(({value:t})=>e===t),Un=(e,t,n)=>{let r=Hn(t,n);return r?r.text:e},Wn=(e,t,n,r)=>Un(e,N(t,n),r),Gn=({valuePath:e},t,n)=>Hn(N(t,e),n),Kn=e=>t=>{e(e=>({...e,filter:t?.[0]?.value??null}))},qn=e=>t=>{e(e=>({...e,headerFocused:t}))},Jn=e=>t=>{e(e=>({...e,query:t}))},Yn=e=>t=>e(t?.[0]?.value),Xn=({valuePath:e,trueLabel:t,falseLabel:n},r)=>N(r,e)?t:n,Zn=({valuePath:e},t)=>n=>N(n,e)===t,Qn=vt((e,t)=>[{text:e,value:!0},{text:t,value:!1}]),$n=({valuePath:e,trueLabel:t,falseLabel:n},r)=>e?N(r,e)?t:n:``,er=(e,t)=>{try{return JSON.parse(t)}catch{return null}},tr=class extends L(M){static get properties(){return{trueLabel:{type:String,value:`True`},falseLabel:{type:String,value:`False`},flex:{type:String,value:`0`},cellClass:{type:String,value:`boolean-cell`}}}getString(e,t){return Xn(e,t)}renderCell(e,{item:t}){return Xn(e,t)}renderEditCell(e,{item:t},n){let{trueLabel:r,falseLabel:i}=e;return h`<cosmoz-autocomplete
			variant="inline"
			.title=${Wn(e.title,t,e.valuePath,Qn(r,i))}
			.source=${Qn(r,i)}
			.textProperty=${`text`}
			.value=${Gn(e,t,Qn(r,i))}
			.onChange=${Yn(n)}
			.limit=${1}
			>${E(e.loading,()=>h`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete
		>`}renderHeader(e,{filter:t,query:n},r,i){return h`<cosmoz-autocomplete-ui
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
			>${E(e.loading,()=>h`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}computeSource({trueLabel:e,falseLabel:t}){return Qn(e,t)}getFilterFn(e,t){if(t!=null)return Zn(e,t)}toXlsxValue(e,t){return $n(e,t)}deserializeFilter(e,t){return er(e,t)}},customElements.define(`cosmoz-omnitable-column-boolean`,tr)})),rr,ir=e((()=>{de(),Wt(),rr=e=>class extends Ut(e){static get properties(){return{max:{type:Date,value:null},min:{type:Date,value:null},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},formatter:{type:Object,computed:`_computeFormatter(locale)`}}}toDate(e,t,n){if(e==null||e===``)return;let r=e;if(r instanceof Date||(typeof e==`string`&&(r=this.getAbsoluteISOString(r)),r=new Date(r)),Number.isNaN(r.getTime()))return null;if(n==null||t==null)return r;let i=this.toDate(t);if(i==null)return r;let a=this.getComparableValue(r);return n(a,this.getComparableValue(i))===a?r:i}toValue(){return this.toDate.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n!=null)return this.toNumber(n.getTime())}getString(e,t=this.valuePath,n=this.formatter){let r=this.toValue(this.get(t,e));return r===void 0?``:r===null?`Invalid Date`:this.renderValue(r,n)}getAbsoluteISOString(e){return e.length===19?e+this._getTimezoneString(e):e}_getTimezoneString(e){let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`}renderValue(e,t=this.formatter){if(t==null)return;let n=this.toValue(e);if(n!=null)return t.format(n)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(0,10)}_dateValueChanged(e){let t=e.currentTarget.value,n=e.model.item,r=this.get(this.valuePath,n),i=this._fromInputString(t);this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toLocalISOString(e){return Te(e)}}})),ar,or=e((()=>{u(),P(),A(),v(),t(),ir(),Vt(),z(),Gt(),ar=class extends rr(V(M)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return h`
			${E(this.disabled,()=>h`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>h`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${B({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:h`
							<h3>${this.title}</h3>
							<cosmoz-input
								type="date"
								label=${C(`From date`)}
								min=${this._toInputString(this._limit.fromMin)}
								max=${this._toInputString(this._limit.fromMax)}
								.value=${this._filterInput?.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-input>
							<cosmoz-input
								type="date"
								label=${C(`Until date`)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
								.value=${this._filterInput?.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-input>
						`})}
				`)}
		`}_fromInputString(e,t){let n=this.toDate(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n}_filterInputChanged(e,t){let n=e.path.split(`.`)[1]&&e.value;if(n&&n.match(/^0+/u)){this._limitInputDebouncer.cancel();return}super._filterInputChanged(e,t)}},customElements.define(`cosmoz-omnitable-date-range-input`,ar)})),sr,cr,lr,X,Z,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr,br=e((()=>{de(),j(),en(),sr=e=>{let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`},cr=e=>e.length===19?e+sr(e):e,lr=e=>{if(e==null||e===``)return;let t=e;return!(t instanceof Date)&&(typeof e==`string`&&(t=cr(t)),t=le(t),!t)||Number.isNaN(t.getTime())?null:t},X=({valuePath:e},t)=>{if(t==null)return;let n=t;e!=null&&(n=N(t,e));let r=lr(n);if(r!=null)return H(r.getTime())},Z=(e,t,n)=>{let r=lr(e);if(r==null)return null;if(n==null||t==null)return r;let i=Z(t);if(i==null)return r;let a=X({},r),o=X({},i);return a==null||o==null||n(a,o)===a?r:i},ur=(e,t)=>{if(t==null)return;let n=Z(e);if(n!=null)return t.format(n)},dr={},fr=e=>{let t=e||``;return dr[t]||(dr[t]=new Intl.DateTimeFormat(e||void 0)),dr[t]},pr=({valuePath:e,locale:t},n)=>{let r=N(n,e||``);return r===void 0?``:(r=Z(r),r===null?`Invalid Date`:ur(r,fr(t)))},mr=e=>{let t=Z(e);if(t==null)return null;let n=Te(t);return n==null?null:n.slice(0,10)},hr=({valuePath:e},t)=>mr(N(t,e||``)),gr=(e,t)=>{let n=Z(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n},_r=e=>mr(e)??``,vr=({valuePath:e},t)=>{if(!e)return``;let n=Z(N(t,e));if(!n)return``;let r=Z(Te(n));return r?(r.setHours(0,0,0,0),r):``},yr=(e,t)=>n=>{let r=X(e,n);if(r==null)return!1;let i=X({...e,valuePath:`min`},t),a=X({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})),xr,Sr=e((()=>{u(),P(),v(),R(),or(),Y(),br(),F(),xr=class extends L(M){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`date-header-cell`},width:{type:String,value:`100px`},minWidth:{type:String,value:`82px`},flex:{type:String,value:`0`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=X({...e,valuePath:`min`},t),r=X({...e,valuePath:`max`},t);if(!(n==null&&r==null))return yr(e,t)}getString(e,t){return pr(e,t)}toXlsxValue(e,t){return vr(e,t)}getComparableValue(e,t){return X(e,t)}serializeFilter(e,t){if(t==null)return;let n=Z(t.min),r=Z(t.max);if(!(n==null&&r==null))return _r(n)+`~`+_r(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Z(n[1]),max:Z(n[2])}:null}renderCell(e,{item:t}){return h`<div class="omnitable-cell-date">
			${pr(e,t)}
		</div>`}renderEditCell(e,{item:t},n){return h`<cosmoz-input
			type="date"
			@change=${e=>n(gr(e.target.value))}
			.value=${hr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,disabledFiltering:a},{filter:o},s,c){return h`<cosmoz-omnitable-date-range-input
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
		></cosmoz-omnitable-date-range-input>`}computeSource(e,t){return J(e,t)}},customElements.define(`cosmoz-omnitable-column-date`,xr)})),Cr,wr=e((()=>{P(),A(),v(),t(),ir(),Vt(),z(),Gt(),Cr=class extends rr(V(M)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return h`
			${E(this.disabled,()=>h`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>h`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${B({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:h`
							<h3>${this.title}</h3>
							<cosmoz-datetime-input
								date-label=${C(`From date`)}
								time-label=${C(`From time`)}
								min=${this._toInputString(this._limit.fromMin)}
								max=${this._toInputString(this._limit.fromMax)}
								step=${this.filterStep}
								.value=${this._filterInput?.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-datetime-input>
							<cosmoz-datetime-input
								date-label=${C(`To date`)}
								time-label=${C(`To time`)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
								step=${this.filterStep}
								.value=${this._filterInput?.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-datetime-input>
						`})}
				`)}
		`}_toInputString(e){let t=this.toValue(e);if(t!=null)return this._toLocalISOString(t).slice(0,19)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})}},customElements.define(`cosmoz-omnitable-datetime-range-input`,Cr)})),Tr,Er,Dr,Or,kr,Ar,jr=e((()=>{j(),br(),Tr={},Er=e=>{let t=e||``;return Tr[t]||(Tr[t]=new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})),Tr[t]},Dr=({valuePath:e,locale:t},n)=>{let r=Z(N(n,e||``));return r===void 0?``:r===null?`Invalid Date`:ur(r,Er(t))},Or=({valuePath:e},t)=>e?N(t,e):``,kr=e=>{let t=Z(e);return t==null?``:t.toISOString().slice(0,19).replace(/:/gu,`.`)},Ar=e=>{if(!(e==null||e===``)&&typeof e==`string`)return Z(e.replace(/\./gu,`:`)+`Z`)}})),Mr,Nr=e((()=>{rt(),F(),P(),v(),R(),wr(),Y(),br(),jr(),Mr=class extends L(M){static get is(){return`cosmoz-omnitable-column-datetime`}static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`datetime-header-cell`},width:{type:String,value:`210px`},minWidth:{type:String,value:`128px`},flex:{type:String,value:`0`},filterStep:{type:Number,value:1}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=X({...e,valuePath:`min`},t),r=X({...e,valuePath:`max`},t);if(!(n==null&&r==null))return yr(e,t)}getString(e,t){return Dr(e,t)}toXlsxValue(e,t){return Or(e,t)}getComparableValue(e,t){return X(e,t)}serializeFilter(e,t){if(t==null)return;let n=Z(t.min),r=Z(t.max);if(!(n==null&&r==null))return kr(n)+`~`+kr(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Ar(n[1]),max:Ar(n[2])}:null}renderCell(e,{item:t}){return Dr(e,t)}renderEditCell(e,{item:t},n){return h`<cosmoz-input
			type="text"
			@change=${e=>n(gr(e.target.value))}
			.value=${Dr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,filterStep:a,disabledFiltering:o},{filter:s},c,l){return h`<cosmoz-omnitable-datetime-range-input
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
		></cosmoz-omnitable-datetime-range-input>`}computeSource(e,t){return J(e,t)}},customElements.define(Mr.is,Mr)})),Pr,Fr=e((()=>{ke(),Ze(),P(),v(),t(),Pn(),R(),Pr=class extends Nn(L(M)){renderCell({valuePath:e,textProperty:t},{item:n}){return h`
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
				${wn(n,e,t).map(e=>h`<li>${e}</li>`)}
			</ul>
		`}renderEditCell(){return`not implemented`}renderHeader(e,{filter:t,query:n},r,i){return h`<cosmoz-autocomplete-ui
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
			>${E(e.loading,()=>h`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		> `}},customElements.define(`cosmoz-omnitable-column-list-horizontal`,Pr)})),Ir,Lr,Rr=e((()=>{Ce(),D(),A(),Ir=k`
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
`,Lr=({items:e})=>{let[t,n]=i(!1),r=Array.isArray(e)?e:[],a=m(()=>Math.max(0,r.length-1),[r]);if(r.length===0)return null;let o=r.length>2,s=r[0],c=o&&!t?[]:r.slice(1),l=e=>{e.stopPropagation(),e.preventDefault(),n(e=>!e)};return h`
		<ul>
			<li>
				<span>${s}</span>
			</li>
			<li class="see-more" ?hidden=${!o||t}>
				<a href="#" @click=${l}
					>${C(`and {0} more`,{0:a})}</a
				>
			</li>
			${c.map(e=>h`
					<li>
						<span class="item">${e}</span>
					</li>
				`)}
			<li class="see-less" ?hidden=${!o||!t}>
				<a href="#" @click=${l}>${C(`See less`)}</a>
			</li>
		</ul>
	`},customElements.define(`cosmoz-omnitable-column-list-data`,T(Lr,{styleSheets:[se(Ir)]}))})),zr,Br=e((()=>{Rr(),P(),v(),t(),ke(),Pn(),R(),q(),zr=class extends Nn(L(M)){static get properties(){return{keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,textual:e.textual}}renderCell({valuePath:e,textProperty:t},{item:n}){return h`<cosmoz-omnitable-column-list-data
			.items=${wn(n,e,t)}
		></cosmoz-omnitable-column-list-data>`}renderEditCell(e,{item:t},n){return h`<cosmoz-input
			type="text"
			.value=${Tn(e,t)}
			@change=${e=>n(e.target.value.split(/,\s*/gu))}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:n},r,i){return h`<cosmoz-autocomplete-ui
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
			.onChange=${On(r)}
			@opened-changed=${e=>kn(r)(e.detail.value)}
			.onText=${An(r)}
			>${E(e.loading,()=>h`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}},customElements.define(`cosmoz-omnitable-column-list`,zr)})),Vr,Hr=e((()=>{u(),P(),A(),v(),t(),Vt(),z(),Wt(),Gt(),Vr=class extends Ut(V(M)){static get properties(){return{maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},formatter:{type:Object,computed:`_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)`},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},headerFocused:{type:Boolean,value:!1}}}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return h`
			${E(this.disabled,()=>h`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>h`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${B({title:this.title,tooltip:this._tooltip,filterText:this._filterText,horizontalAlign:`right`,externalValues:this.externalValues,onOpenedChanged:e,content:h`
							<h3>${this.title}</h3>
							<cosmoz-input
								class=${this._fromClasses}
								type="number"
								label=${C(`From`)}
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
								label=${C(`To`)}
								.value=${this._filterInput?.max}
								@value-changed=${e=>{this.set(`_filterInput.max`,e.detail.value)}}
								@blur=${e=>this._onBlur(e)}
								@keydown=${e=>this._onKeyDown(e)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
							></cosmoz-input>
						`})}
				`)}
		`}_computeFormatter(e,t,n){let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}getComparableValue(e,t){if(e==null)return;let n=e;if(t!=null&&(n=this.get(t,e)),n=this.toValue(n),n==null)return;let r=this.maximumFractionDigits;return r===null?n:this.toValue(n.toFixed(r))}renderValue(e,t=this.formatter){let n=this.toNumber(e);if(n!=null)return t.format(n)}},customElements.define(`cosmoz-omnitable-number-range-input`,Vr)})),Ur,Wr=e((()=>{u(),F(),P(),v(),R(),j(),Hr(),Y(),en(),Ur=class extends L(M){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},cellClass:{type:String,value:`number-cell align-right`},width:{type:String,value:`30px`},minWidth:{type:String,value:`30px`},headerCellClass:{type:String,value:`number-header-cell`},maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=U({...e,valuePath:`min`},t),r=U({...e,valuePath:`max`},t);if(!(n==null&&r==null))return $t(e,t)}getString(e,t){return Qt(e,t)}toXlsxValue({valuePath:e},t){return N(t,e)}getComparableValue(e,t){return U(e,t)}serializeFilter(e,t){if(t==null)return;let n=H(t.min),r=H(t.max);if(!(n==null&&r==null))return Xt(n)+`~`+Xt(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:H(n[1]),max:H(n[2])}:null}renderCell(e,{item:t}){return h`<div class="omnitable-cell-number">
			${Qt(e,t)}
		</div>`}renderEditCell(e,{item:t},n){return h`<cosmoz-input
			type="number"
			@change=${e=>n(e.target.value)}
			.value=${Yt(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,maximumFractionDigits:a,minimumFractionDigits:o,autoupdate:s,disabledFiltering:c},{filter:l},u,d){return h`<cosmoz-omnitable-number-range-input
			.title=${e}
			?disabled=${c}
			.filter=${l}
			.values=${d}
			.min=${t}
			.max=${n}
			.limits=${r}
			.locale=${i}
			.maximumFractionDigits=${a}
			.minimumFractionDigits=${o}
			.autoupdate=${s}
			@filter-changed=${({detail:{value:e}})=>u(t=>({...t,filter:e}))}
			@header-focused-changed=${({detail:{value:e}})=>u(t=>({...t,headerFocused:e}))}
		></cosmoz-omnitable-number-range-input>`}computeSource(e,t){return J(e,t)}},customElements.define(`cosmoz-omnitable-column-number`,Ur)})),Gr,Kr=e((()=>{u(),P(),A(),v(),t(),ir(),Vt(),z(),Gt(),Gr=class extends rr(V(M)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return h`
			${E(this.disabled,()=>h`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>h`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${B({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:h`
							<h3>${this.title}</h3>
							<cosmoz-input
								type="time"
								label=${C(`From time`)}
								step=${this.filterStep}
								.value=${this._filterInput.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-input>
							<cosmoz-input
								type="time"
								label=${C(`Until time`)}
								step=${this.filterStep}
								.value=${this._filterInput.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-input>
						`})}
				`)}
		`}get _fixedDate(){return`1970-01-01`}toDate(e,t,n){let r=typeof e==`string`&&e.length>3&&e.length<=9?this.getAbsoluteISOString(this._fixedDate+`T`+e):e;return super.toDate(r,t,n)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(11,19)}getComparableValue(e,t){if(e==null)return;let n=this._toInputString(t==null?e:this.get(t,e));if(n!=null&&(n=this.toValue(this.getAbsoluteISOString(this._fixedDate+`T`+n)),n!=null))return this.toNumber(n.getTime())}_timeValueChanged(e){let t=e.target.value,n=e.model.item,r=this.toDate(n.date),i=this.toDate(r==null?t:r.toISOString().slice(0,10)+`T`+t);i??(this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,(e=>e).bind(this)))}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})}},customElements.define(`cosmoz-omnitable-time-range-input`,Gr)})),Q,qr,Jr,Yr,Xr,Zr,$,Qr,$r,ei,ti=e((()=>{de(),j(),br(),en(),Q=(e,t,n)=>Z(typeof e==`string`&&e.length>3&&e.length<=9?cr(`1970-01-01T`+e):e,t,n),qr={},Jr=e=>{let t=e||``;return qr[t]||(qr[t]=new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})),qr[t]},Yr=({valuePath:e,locale:t},n)=>{let r=Q(N(n,e||``));return r===void 0?``:r===null?`Invalid Date`:ur(r,Jr(t))},Xr=(e,t)=>e.valuePath?Yr(e,t):``,Zr=e=>{let t=Q(e);if(t==null)return null;let n=Te(t);return n&&n.slice(11,19)},$=({valuePath:e},t)=>{if(t==null)return;let n=Zr(e==null?t:N(t,e));if(n==null)return;let r=Q(cr(`1970-01-01T`+n));return r==null?r:H(r.getTime())},Qr=(e,t)=>n=>{let r=$(e,n);if(r==null)return!1;let i=$({...e,valuePath:`min`},t),a=$({...e,valuePath:`max`},t);return i==null||a==null?!1:!(r<i||r>a)},$r=e=>{let t=Q(e);return t==null?``:t.toISOString().slice(11,19).replace(/:/gu,`.`)},ei=e=>{if(!(e==null||e===``))return Q(typeof e==`string`?e.replace(/\./gu,`:`)+`Z`:e)}})),ni,ri=e((()=>{u(),F(),P(),v(),R(),Kr(),Y(),ti(),ni=class extends L(M){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`time-header-cell`},minWidth:{type:String,value:`63px`},width:{type:String,value:`210px`},flex:{type:String,value:`0`},filterStep:{type:String,value:`1`}}}getFilterFn(e,t){let n=$({...e,valuePath:`min`},t),r=$({...e,valuePath:`max`},t);if(!(n==null&&r==null))return Qr(e,t)}getString(e,t){return Yr(e,t)}toXlsxValue(e,t){return Xr(e,t)}getComparableValue(e,t){return $(e,t)}serializeFilter(e,t){if(t==null)return;let n=Q(t.min),r=Q(t.max);if(!(n==null&&r==null))return $r(n)+`~`+$r(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:ei(n[1]),max:ei(n[2])}:null}renderCell(e,{item:t}){return Yr(e,t)}renderEditCell(e,{item:t},n){return h`<cosmoz-input
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${Yr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,locale:r,filterStep:i,disabledFiltering:a},{filter:o},s,c){return h`<cosmoz-omnitable-time-range-input
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
		></cosmoz-omnitable-time-range-input>`}computeSource(e,t){return J(e,t)}},customElements.define(`cosmoz-omnitable-column-time`,ni)})),ii=e((()=>{xn(),Rn(),Vn(),nr(),Sr(),Nr(),Fr(),Br(),Wr(),ri()})),ai,oi=e((()=>{D(),v(),ai=({column:e,item:t,selected:n,folded:r,group:i})=>{if(!e)return _e;let a=e.renderGroup??e.renderCell;return a?a(e,{item:t,selected:n,folded:r,group:i}):_e},customElements.define(`cosmoz-omnitable-group-row`,T(ai,{useShadowDOM:!1}))})),si,ci=e((()=>{D(),v(),si=e=>{let{column:t}=e;return o(()=>{let n=0,r=0,i=i=>{e.dispatchEvent(new CustomEvent(`column-resize`,{bubbles:!0,composed:!0,detail:{newWidth:Math.ceil(r+i.pageX-n),column:t}}))},a=()=>{document.removeEventListener(`pointermove`,i),document.removeEventListener(`pointerup`,a)},o=t=>{n=t.pageX,r=e.previousElementSibling.getBoundingClientRect().width,document.addEventListener(`pointermove`,i),document.addEventListener(`pointerup`,a)};return e.addEventListener(`pointerdown`,o),()=>e.removeEventListener(`pointerdown`,o)},[t]),_e},customElements.define(`cosmoz-omnitable-resize-nub`,T(si))})),li,ui,di,fi,pi=e((()=>{D(),Ae(),x(),li=({column:e,on:t,descending:n,setOn:r,setDescending:i})=>{let{name:a,title:o}=e??{};return h`<button
		class="sg"
		title=${xe(o)}
		data-on=${xe(a===t&&(n?`desc`:`asc`)||void 0)}
		@click=${e=>{let t=e.currentTarget?.dataset.on;t||(r(a),i(!1)),t===`asc`?i(!0):t===`desc`&&(r(),i(!1))}}
	>
		<span>${o}</span> ${a===t?w({width:`12`,height:`12`}):ie({width:`12`,height:`12`})}
	</button>`},ui=({columns:e,...t})=>e?.map(e=>li({column:e,...t})),di=()=>h`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,groupOn:t,setGroupOn:n,groupOnDescending:r,setGroupOnDescending:i}={})=>ui({columns:e?.filter?.(e=>e.groupOn),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`,fi=()=>h`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,sortOn:t,setSortOn:n,descending:r,setDescending:i}={})=>ui({columns:e?.filter?.(e=>e.sortOn&&!e.noSort),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`}));function mi(e,t,{suffix:n=``,read:r,write:a,ready:s=!0,multi:c}={}){let l=Oe({param:t,suffix:n,link:c?vi:_i,write:a??ue}),u=m(()=>{if(t==null)return!1;if(c){let e=tt(t+n);return Object.keys(e).length>0}return nt(t+n)!==void 0},[]),[d,f]=i(()=>{if(t==null)return e;if(c){let i=tt(t+n,r);return Object.keys(i).length>0?i:e}return nt(t+n,r)??e}),p=b(e=>f(t=>{let n=ve(e,t);return l.param!=null&&it(l.link(l.param+l.suffix,n,l.write),null,{notify:!1}),n}),[]);return o(()=>{l.param==null||!s||u||e!=null&&p(e)},[s]),[d,p]}var hi,gi,_i,vi,yi=e((()=>{lt(),we(),Se(),mt(),D(),hi=e=>(t,n,r=ue)=>{let i=ot(),a=new URLSearchParams(i.hash.replace(`#`,``));return e(t,n,r,a),`#!`+Object.assign(i,{hash:a}).href.replace(location.origin,``)},gi=e=>e==null||e===``,_i=hi((e,t,n,r)=>gi(n(t))?r.delete(e):r.set(e,n(t))),vi=hi((e,t,n,r)=>{let i=Object.entries(t),a=i.map(n).filter(([,e])=>e!==void 0);if(a.length===0&&i.length>0)return;let o=e;Array.from(r.keys()).filter(e=>e.startsWith(o)).forEach(e=>r.delete(e)),a.forEach(([t,n])=>gi(n)?r.delete(e+t):r.set(e+t,n))})})),bi,xi,Si,Ci,wi,Ti=e((()=>{D(),yi(),bi=e=>[!0,`true`,1,`yes`,`on`].includes(e),xi=e=>e===``||(e==null?void 0:bi(e)),Si=(e,t,n)=>b(r=>{e(r),n(e=>({...e,[t]:r}))},[e,t,n]),Ci=(e,t,{settings:n,setSettings:r,resetRef:i,ready:a=!0})=>{let[s,c]=mi(n.sortOn,t,{suffix:`-sortOn`,ready:a}),[l,u]=mi(xi(n.descending),t,{suffix:`-descending`,read:xi,ready:a}),[d,f]=mi(n.groupOn,t,{suffix:`-groupOn`,ready:a}),[p,h]=mi(xi(n.groupOnDescending),t,{suffix:`-groupOnDescending`,read:xi,ready:a}),g=m(()=>e.find(e=>e.name===s),[e,s]),_=m(()=>e.find(e=>e.name===d),[e,d]),v={groupOn:d,setGroupOn:Si(f,`groupOn`,r),groupOnDescending:p,setGroupOnDescending:Si(h,`groupOnDescending`,r),sortOn:s,setSortOn:Si(c,`sortOn`,r),descending:l,setDescending:Si(u,`descending`,r),columns:e},y=m(()=>v,Object.values(v)),x=b(e=>{c(e.sortOn),f(e.groupOn),u(e.descending),h(e.groupOnDescending)},[]);return o(()=>void(i.current=x),[]),{...y,sortAndGroup:y,groupOnColumn:_,sortOnColumn:g}},wi=Ne(),customElements.define(`sort-and-group-provider`,wi.Provider),customElements.define(`sort-and-group-consumer`,T(({render:e})=>e(ee(wi)),{useShadowDOM:!1}))})),Ei,Di,Oi=e((()=>{D(),Pe(),ci(),pi(),t(),Ti(),Ei=({data:e,columns:t,groupOnColumn:n,filters:r,setFilterState:i,sortAndGroup:{sortOn:a,setSortOn:o,descending:s,setDescending:c}={}})=>Me(t,e=>e.name,t=>[h`<div
				class="cell ${t.headerCellClass} header-cell"
				part="cell header-cell cell-${t.name} header-cell-${t.name}"
				?hidden="${t===n}"
				title="${t.headerTitleFn(t)}"
				name="${t.name}"
			>
				${t.renderHeader(t,r[t.name]??{},e=>i(t.name,e),t.source(t,e))}
				${E(!t.noSort,()=>li({on:a,setOn:o,descending:s,setDescending:c,column:t}))}
			</div>`,h`<cosmoz-omnitable-resize-nub
				.column="${t}"
				name="${t.name}"
			></cosmoz-omnitable-resize-nub>`]),Di=({columns:e,settingsConfig:t,hideSelectAll:n,...r})=>{let i=ee(wi);return h`
		${E(e,e=>Ei({columns:e,sortAndGroup:i,...r}))}
		${E(!n,()=>h` <cosmoz-omnitable-settings
					.config=${t}
					part="settings"
				></cosmoz-omnitable-settings>`)}
	`},customElements.define(`cosmoz-omnitable-header-row`,T(Di,{useShadowDOM:!1}))})),ki,Ai,ji=e((()=>{Ce(),D(),ki=k`
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
`,Ai=({column:e})=>h`
	<div class="label" title="${e.title}" part="item-expand-label">
		${e.title}
	</div>
	<div class="value" part="item-expand-value">
		<slot></slot>
	</div>
`,customElements.define(`cosmoz-omnitable-item-expand-line`,T(Ai,{styleSheets:[se(ki)]}))})),Mi,Ni=e((()=>{D(),v(),ft(),ji(),Mi=({columns:e,item:t,selected:n,expanded:r,groupOnColumn:i})=>et(e,e=>h`<cosmoz-omnitable-item-expand-line
				.column=${e}
				?hidden=${e===i}
				exportparts="item-expand-label, item-expand-value"
				>${e.renderCell(e,{item:t,selected:n,expanded:r})}</cosmoz-omnitable-item-expand-line
			>`),customElements.define(`cosmoz-omnitable-item-expand`,T(Mi,{useShadowDOM:!1}))})),Pi,Fi,Ii=e((()=>{D(),Pe(),Pi=(e,t,n)=>e.editable?e.renderEditCell(e,t,n(e,t.item)):e.renderCell(e,t),Fi=({columns:e,groupOnColumn:t,item:n,index:r,selected:i,expanded:a,onItemChange:o})=>Me(e,e=>e.name,e=>h`<div
				class="cell itemRow-cell ${e.cellClass??``}"
				part="cell itemRow-cell cell-${e.name} itemRow-cell-${e.name}"
				?hidden="${e===t}"
				?editable="${e.editable}"
				title="${e.cellTitleFn(e,n)}"
				name="${e.name}"
			>
				${Pi(e,{item:n,index:r,selected:i,expanded:a},o)}
			</div>`),customElements.define(`cosmoz-omnitable-item-row`,T(Fi,{useShadowDOM:!1}))})),Li,Ri,zi=e((()=>{Ce(),Li=k`
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
		box-shadow: 0 0 2px 4px var(--cz-color-bg-quaternary);
	}

	.checkbox:indeterminate::before {
		content: '';
		position: absolute;
		width: 10px;
		height: 2px;
		left: 4px;
		top: 8px;
		background-color: var(--cz-color-text-brand);
	}
`,Ri=k`
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

	${Li}

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
`})),Bi,Vi,Hi=e((()=>{Qe(),Bi=e=>{let t=e.replace(/"/gu,`""`);return t.search(/("|,|\n)/gu)>=0?`"`+t+`"`:e},Vi=(e,t,n)=>{let r=e.map(e=>Bi(e.title)).join(`;`)+`
`,i=t.map(t=>e.map(e=>{let n=e.getString(e,t);return n==null?``:Bi(String(n))}).join(`;`)+`
`);i.unshift(r),ct(new File(i,n,{type:`text/csv;charset=utf-8`}))}})),Ui,Wi,Gi=e((()=>{st(),Qe(),Ui=(e,t)=>{let n=e.map(e=>e.title),r=t.map(t=>e.map(e=>e.toXlsxValue(e,t)??``));return r.unshift(n),r},Wi=(e,t,n,r)=>{let i=Ui(e,t),a=new dt(n).addSheetFromData(i,r).generate();ct(new File([a],n,{type:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`}))}})),Ki,qi=e((()=>{He(),x(),ye(),A(),v(),Hi(),Gi(),Ki=({columns:e,selectedItems:t,csvFilename:n,xlsxFilename:r,xlsxSheetname:i,topPlacement:a})=>h`<cosmoz-bottom-bar
		id="bottomBar"
		?active=${!me(t.length)}
		part="bottomBar"
		exportparts="bar: bottomBar-bar, info: bottomBar-info, buttons: bottomBar-buttons"
	>
		<slot name="info" slot="info">
			${C(`{count} selected item`,{count:t.length})}
		</slot>
		<slot name="actions" id="actions"></slot>
		<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
		<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>

		<cosmoz-dropdown-menu part="extra" slot="extra" .placement=${a}>
			${f({slot:`button`})}
			<cosmoz-button
				@click=${()=>Vi(e,t,n)}
			>
				${C(`Save selected items as CSV`)}
			</cosmoz-button>
			<cosmoz-button
				@click=${()=>Wi(e,t,r,i)}
			>
				${C(`Save selected items as XLSX`)}
			</cosmoz-button>
			<slot name="download-menu"></slot>
		</cosmoz-dropdown-menu>
	</cosmoz-bottom-bar>`})),Ji,Yi=e((()=>{v(),t(),Ji=({allSelected:e,onAllCheckboxChange:t,sortAndGroup:n,dataIsValid:r,data:i,columns:a,filters:o,groupOnColumn:s,setFilterState:c,settingsConfig:l,hideSelectAll:u})=>h`<sort-and-group-provider .value=${n}>
		<div class="header" id="header" part="header">
			${E(!u,()=>h`<input
						class="checkbox all"
						type="checkbox"
						.checked=${e}
						@input=${t}
						?disabled=${!r}
						part="all"
					/>`)}
			${E(u,()=>h` <cosmoz-omnitable-settings
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
	</sort-and-group-provider>`})),Xi,Zi,Qi=e((()=>{D(),Xi=re`
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
`,Zi=({settingsConfig:e})=>{let{columns:t,collapsed:n}=e,r=t.filter(e=>!n.some(t=>t.name===e.name));return h`<div class="skeleton">
		${Array.from({length:5},()=>h`<div>
					<div class="checkbox"></div>
					${r.map(e=>h`<div
								class="cell"
								part=${`cell-${e.name}`}
								name=${e.name}
							></div>`)}
				</div>`)}
	</div>`},customElements.define(`cosmoz-omnitable-skeleton`,T(Zi,{styleSheets:[Xi]}))})),$i,ea=e((()=>{D(),Qi(),Be(),A(),v(),t(),$i=(e,t)=>{let{settingsConfig:n}=e,{processedItems:r,dataIsValid:i,filterIsTooStrict:a,loading:o,displayEmptyGroups:s,compareItemsFn:c,selectedItems:u,setSelectedItems:d,renderItem:f,renderGroup:p,error:m}=t;return h`${E(!o&&!i&&!m,()=>h`<div class="tableContent-empty">
					<slot name="empty-set-message">
						${ut({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
						<div class="tableContent-empty-message">
							<h3>${C(`Working set empty`)}</h3>
							<p>${C(`No data to display`)}</p>
						</div>
					</slot>
				</div>`)}
		${E(a,()=>h`<div class="tableContent-empty">
					${ut({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
					<div>
						<h3>${C(`Filter too strict`)}</h3>
						<p>${C(`No matches for selection`)}</p>
					</div>
				</div>`)}
		${E(o&&!r.length,()=>h`<div class="tableContent-empty overlay">
					<cosmoz-omnitable-skeleton
						.settingsConfig=${n}
					></cosmoz-omnitable-skeleton>
				</div>`)}
		${E(o&&r.length,()=>h`<div class="tableContent-empty overlay spinner">
					<cz-spinner></cz-spinner>
				</div>`)}
		${E(m,()=>h`<div class="tableContent-empty overlay">
					${Je({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
					<div class="tableContent-empty-message">
						<h3>${C(`Error loading data`)}</h3>
						<p>${m.message}</p>
					</div>
				</div>`)}
		<div class="tableContent-scroller" id="scroller" part="scroller">
			<cosmoz-grouped-list
				id="groupedList"
				.data=${r}
				.selectedItems=${u}
				@selected-items-changed=${l(d)}
				.displayEmptyGroups=${s}
				.compareItemsFn=${c}
				.renderItem=${f}
				.renderGroup=${p}
			></cosmoz-grouped-list>
			<slot name="extraContent"></slot>
		</div>`}})),ta,na,ra=e((()=>{Ce(),zi(),ta=k`
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
`,na=k`
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
`})),ia,aa,oa=e((()=>{Se(),D(),ia=e=>{let t=parseInt(e,10);return isFinite(t)?t:void 0},aa=e=>{let{config:t}=e,{settings:n,setSettings:r,collapsed:i,requestTween:a}=t,o=Oe({collapsed:i,settings:n.columns,requestTween:a,setSettings:b(e=>r(t=>({...t,columns:e})),[r])});return{...t,onDown:b(e=>{e.target.closest(`.pull`)&&(o.handle=e.currentTarget)},[o]),onDragStart:b(e=>{let{target:t}=e,n=ia(t.dataset.index);if(!o.handle?.contains(t)||n==null)return e.preventDefault();o.handle=null,e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`omnitable/sort-index`,n),e.dataTransfer.setData(`text/plain`,n),setTimeout(()=>t.classList.add(`drag`),0),t.addEventListener(`dragend`,e=>e.target.classList.remove(`drag`),{once:!0})},[o]),onDragEnter:b(e=>{let t=e.currentTarget;t===e.target&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`,t.classList.add(`dragover`))},[]),onDragOver:b(e=>{e.preventDefault(),e.currentTarget.classList.add(`dragover`)},[]),onDragLeave:b(e=>{let t=e.currentTarget;t.contains(e.relatedTarget)||t.classList.remove(`dragover`)},[]),onDrop:b(e=>{let t=ia(e.dataTransfer.getData(`omnitable/sort-index`)),n=ia(e.currentTarget.dataset.index),{settings:r,setSettings:i,requestTween:a}=o;e.currentTarget.classList.remove(`dragover`),e.preventDefault();let s=r.slice();s.splice(n+(t>=n?0:-1),0,s.splice(t,1)[0]),a?.(),i(s)},[o]),onToggle:b(e=>{let{settings:t,setSettings:n,requestTween:r}=o,i=t.map(e=>({...e,disabled:e.disabled||o.collapsed?.some(t=>t.name===e.name)})),a=ia(e.target.closest(`[data-index]`)?.dataset.index);i.splice(a,1,{...t[a],disabled:!e.target.checked,priority:e.target.checked?t.reduce((e,t)=>Math.max(e,t.priority),0)+1:t[a].priority}),r?.(),n(i)},[o])}}})),sa,ca,la,ua,da=e((()=>{Xe(),pt(),yt(),x(),Ce(),ye(),D(),A(),t(),pi(),ra(),oa(),sa=[Ye({apply({availableHeight:e,elements:t}){Object.assign(t.floating.style,{maxHeight:`${Math.max(0,e)}px`})}}),...Ge],ca=({onDragStart:e,onDragEnter:t,onDragOver:n,onDragLeave:r,onDrop:i,onDown:a,onToggle:o,collapsed:s,filters:c})=>(l,u)=>{let d=!!s?.find(e=>e.name===l.name),f=!l.disabled&&!d;return h` <div
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
			<button class="pull">${ne({width:`16`,height:`16`})}</button>
			<label class="title" ?has-filter=${!me(c[l.name]?.filter)}
				>${l.title}</label
			>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${f}
				@click=${o}
				.indeterminate=${d}
			/>
		</div>`},la=e=>{let{settings:t,settingsId:n,onSave:r,onReset:i,hasChanges:o,opened:s,setOpened:c,...l}=aa(e);return h` <div class="headline">
			<span> ${C(`Sort and filter`)} </span>
			<cosmoz-button
				variant="tertiary"
				aria-label="${C(`Close settings`)}"
				@click=${e=>{let t=e.currentTarget;t?.focus(),t?.blur()}}
			>
				${a({width:`16`,height:`16`})}
			</cosmoz-button>
		</div>

		<div class="contents">
			<div
				class="heading"
				?data-opened=${s.columns}
				@click=${()=>c(e=>({...e,columns:!e.columns}))}
				part="columns columns-heading"
			>
				${C(`Columns`)} ${w({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse
				?opened="${s.columns}"
				part="columns columns-content"
			>
				<div class="list">${t.columns?.map(ca(l))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${s.sort}
				@click=${()=>c(e=>({...e,sort:!e.sort}))}
			>
				${C(`Sort on`)} ${w({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse ?opened=${s.sort}> ${fi()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${s.group}
				@click=${()=>c(e=>({...e,group:!e.group}))}
				part="groups groups-heading"
			>
				${C(`Group on`)} ${w({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse ?opened=${s.group} part="groups groups-heading"
				>${di()}</cosmoz-collapse
			>
		</div>

		${E(n,()=>h`<div class="buttons">
					<cosmoz-button
						variant="tertiary"
						@click=${i}
						?disabled=${!o}
					>
						${C(`Reset`)}
					</cosmoz-button>
					<cosmoz-button
						variant="primary"
						@click=${r}
						?disabled=${!o}
					>
						${C(`Save`)}
					</cosmoz-button>
				</div>`)}`},customElements.define(`cosmoz-omnitable-settings-ui`,T(la,{styleSheets:[se(ta)]})),ua=({config:e,newLayout:t})=>h`
	<cosmoz-dropdown
		.placement="${t?`bottom-start`:`bottom-end`}"
		.middleware="${sa}"
	>
		<div title="${C(`Sort and filter`)}" slot="button">
			${E(t,()=>h`<div class="headerDots">...</div>`,()=>h` ${Ee({width:`20`,height:`20`,styles:`color: var(--cz-color-text-primary)`})}`)}
			${E(e?.badge,()=>h`<div class="badge"></div>`)}
		</div>
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${e}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`,customElements.define(`cosmoz-omnitable-settings`,T(ua,{styleSheets:[se(na)]}))})),fa,pa,ma,ha,ga,_a=e((()=>{oe(),fa=[`sortOn`,`descending`,`groupOn`,`groupOnDescending`],pa=e=>t=>typeof t==`object`&&!!t&&`name`in t&&t.name===e,ma=(e=[],t=[],n=[])=>{let r=t.filter(t=>e.some(pa(t.name))),i=e.filter(e=>e.name!=null&&!t.some(pa(e.name))&&!n.some(pa(e.name))),a=n.filter(e=>!t.some(pa(e.name)));return[...r,...a.flatMap(t=>{let n=e.find(e=>e.name===t.name);return n?{...t,title:n.title??t.title??``,minWidth:parseInt(n.minWidth??`0`,10)}:[]}),...i.map(e=>{let{name:t,title:n,priority:r,minWidth:i,width:a,flex:o}=e;return{name:t??``,title:n??``,priority:r??0,minWidth:parseInt(i??`0`,10),width:parseInt(a??`0`,10),flex:parseInt(o??`0`,10)}})]},ha=(e,t)=>({...t,...je(Array.from(fa))(e),columns:e.columns?.map(je([`name`,`priority`,`width`,`flex`,`disabled`]))}),ga=({columns:e,settings:t,savedSettings:n,initial:r})=>({...Object.fromEntries(fa.flatMap(e=>r?.[e]==null?[]:[[e,r[e]]])),...n?je(Array.from(fa))(n):{},...t,columns:ma(e,t?.columns,n?.columns)})})),va,ya=e((()=>{va=({prefix:e=`omnitable-`}={})=>({write:async(t,n)=>{let r=e+t;try{n?localStorage.setItem(r,JSON.stringify(n)):localStorage.removeItem(r)}catch(e){console.error(e)}},read:async t=>{if(!t)return null;try{let n=localStorage.getItem(e+t);return n==null?null:JSON.parse(n)}catch(e){return console.error(e),null}}})})),ba,xa,Sa=e((()=>{D(),ya(),ba=Ne(va),xa=()=>{let e=ee(ba);return m(()=>e(),[e])}})),Ca=e((()=>{Sa(),ya()})),wa,Ta=e((()=>{D(),Ca(),_a(),wa=(e,t,n,r)=>{let[a,s]=i(e?void 0:null),{read:c,write:l}=xa();return o(async()=>{e&&s(await c(e))},[e,c]),{settingsId:e,savedSettings:a,onSave:b(async()=>{if(!e)return;let r=ha(t,a);await l(e,r),n(),s(r)},[t,a]),onReset:b(async t=>{n(),t.shiftKey&&(await l(e),s(null)),r?.()},[r]),hasChanges:t!=null}}})),Ea,Da=e((()=>{D(),q(),_a(),Ta(),Ea=({settingsId:e,host:t})=>{let n=m(()=>Object.fromEntries(fa.map(e=>[e,t[e]])),[]),r=te(),a=b(()=>{r.current?.(n)},[n]),[o,s]=i(),[c,l]=i({columns:!0,sort:!0}),{savedSettings:u,...d}=wa(e,o,s,a),{enabledColumns:f,disabledFiltering:p}=t,h=_n(t,{enabledColumns:f,disabledFiltering:p}),g=m(()=>ga({columns:h,settings:o,savedSettings:u,initial:n}),[h,o,u]),_=m(()=>g.columns.map(e=>h.find(t=>t.name===e.name)).filter(Boolean),[h,...g.columns.map(e=>e.name)]);return{...d,savedSettings:u,opened:c,setOpened:l,settings:g,columns:_,setSettings:s,resetRef:r}}})),Oa=e((()=>{da(),Da()})),ka,Aa,ja=e((()=>{ka=e=>Number.isFinite(e)?e:0,Aa=(e,t)=>{let n=[],[r,i]=e.reduce(([e,t],{width:n,flex:r})=>[e+n,t+r],[0,0]),a=t-r,o=ka(a/i),s=0,c=0,l=0;for(let t=0;t<e.length;t++){let{width:i,minWidth:u,flex:d}=e[t];if(u>i+(a>=0?o*d:i*a/r)){s+=i,c+=u,l+=d,n[t]=u;continue}if(d===0){s+=i,c+=i,n[t]=i;continue}}r-=s,a=t-c-r,i-=l,o=ka(a/i);for(let t=0;t<e.length;t++){if(n[t]!=null)continue;let{width:i,flex:s}=e[t];n[t]=i+(a>=0?o*s:i*a/r)}return n}})),Ma,Na,Pa=e((()=>{Ma=Symbol(`index`),Na=(e,t)=>{if(typeof e.findLastIndex==`function`)return e.findLastIndex(t);for(let n=e.length-1;n>=0;n--)if(t(e[n],n,e))return n;return-1}})),Fa,Ia,La,Ra=e((()=>{ja(),Pa(),Fa=(e,t)=>{let n=Na(e,e=>e!=null&&e>0),r=(e,t)=>`.cell[name="${e}"], cosmoz-omnitable-skeleton::part(cell-${e}){width: ${Math.floor(t)}px;padding: 0 min(3px, ${t/2}px)}`,i=e=>`cosmoz-omnitable-resize-nub[name="${e}"]{display:none}`,a=e=>`cosmoz-omnitable-resize-nub[name="${e}"], .cell[name="${e}"]{display:none}`;return t.map((t,o)=>{let s=e[o];if(s==null||s===0)return a(t.name);let c=r(t.name,s);return o===n?`${c}\n${i(t.name)}`:c}).join(`
`)},Ia=(e,t,n)=>{let r=e.filter(e=>!e.hidden),i=r.reduce((e,{width:t})=>e+t,0);if(r.length>1&&i>t)return Ia(r.slice(1),t,n);let a=r.reduce(([e,t],n,r)=>[Math.max(e,n.index),n.index>e?r:t],[-1,-1])[1];return a!==-1&&(r[a].flex=1),Aa(r,t).reduce((e,t,n)=>(e[r[n].index]=t,e),Array(n).fill(void 0))},La=(e,t)=>e.length===0?`.cell {display: none;}`:Fa(e,t)})),za,Ba=e((()=>{D(),za=(e,t)=>o(()=>{let n=new ResizeObserver(([e])=>{e.contentRect?.width!==0&&t(e.contentRect.width-88)});return n.observe(e),()=>n.unobserve(e)},[])})),Va,Ha=e((()=>{D(),Ba(),Va=e=>{let[t,n]=i(()=>e.getBoundingClientRect().width-88);return za(e,n),t}})),Ua,Wa=e((()=>{D(),Ra(),Ua=({canvasWidth:e,groupOnColumn:t,config:n,miniColumn:r})=>m(()=>{if(!Array.isArray(n)||e==null||e===0)return[];let i=n.map((e,n)=>({minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,name:e.name,index:n,hidden:e.name===t?.name||e.disabled})).map(e=>r?{...e,hidden:r.name!==e.name}:e).sort(({index:e,priority:t},{index:n,priority:r})=>t===r?n-e:t-r);return Ia(i,e,i.length)},[e,t,n])})),Ga,Ka=e((()=>{D(),Ga=({host:e,canvasWidth:t,columns:n})=>{let r=e.miniBreakpoint??480,i=m(()=>t<=r,[t,r]),[a,...s]=m(()=>i?n?.filter(e=>e.mini!=null).sort((e,t)=>(e.mini??0)-(t.mini??0)):[],[n,i])??[],c=!!a;return o(()=>{e.toggleAttribute(`mini`,c)},[c]),{isMini:c&&i,miniColumn:a,miniColumns:s}}})),qa,Ja=e((()=>{D(),qa=({host:e,canvasWidth:t,layout:n,setSettings:r,requestTween:i})=>{let a=te();a.current=e=>{i(),r(r=>{let i=r.columns,{detail:{newWidth:a,column:o}}=e,s=i.findIndex(e=>e.name===o.name),c=[],l=i.reduce((e,t)=>Math.max(e,t.priority),-1/0);for(let e=0;e<n.length;e++)if(c[e]={...i[e]},e<s&&n[e]&&(c[e].width=n[e],c[e].flex=0,c[e].priority=l),e===s){let r=n.reduce((e,t,n)=>n<s&&t?e-t:e,t);c[e].width=Math.min(r,Math.max(a,i[e].minWidth)),c[e].flex=0,c[e].priority=l}return{...r,columns:c}})},o(()=>{let t=e=>a.current?.(e);return e.addEventListener(`column-resize`,t),()=>e.removeEventListener(`column-resize`,t)},[])}})),Ya,Xa,Za,Qa=e((()=>{we(),Se(),D(),Ya=(e,t)=>{let n=m(()=>{let t=!1,n,r=()=>{t&&(n=requestAnimationFrame(r),e()&&(t=!1))};return{start:()=>{t=!0,cancelAnimationFrame(n),n=requestAnimationFrame(r)},stop:()=>{t=!1,cancelAnimationFrame(n)}}},[]);o(()=>{n.start()},t),o(()=>()=>n.stop(),[])},Xa=(e=0,t=0)=>Math.abs(e-t)<.1,Za=(e,t=1.9,n=pe,r)=>{let i=Oe({target:e,speedFactor:t,onConverge:r});Ya(b(()=>{if(!i.tween)return i.tween=i.target,n(i.tween),i.onConverge?.(),!0;if(i.target.every((e,t)=>i.tween[t]===e))return n(i.tween),i.onConverge?.(),!0;if(i.tween=i.target.map((e,t)=>Xa(i.tween[t],e)?e:(i.tween[t]??0)+((e??0)-(i.tween[t]??0))/i.speedFactor||0),n(i.tween),i.tween.every((e,t)=>e===i.target[t]))return i.onConverge?.(),!0},[]),[e])}})),$a,eo,to=e((()=>{Se(),D(),Ra(),Ha(),Wa(),Ka(),Ja(),Qa(),$a=e=>{let t=m(()=>new CSSStyleSheet,[]);return o(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,t]},[]),t},eo=({host:e,columns:t,settings:n,setSettings:r,resizeSpeedFactor:a,sortAndGroupOptions:o})=>{let s=Va(e),{isMini:c,miniColumn:l,miniColumns:u}=Ga({host:e,canvasWidth:s,columns:t}),{groupOnColumn:d}=o,f=Ua({canvasWidth:s,groupOnColumn:d,miniColumn:l,config:n.columns}),p=$a(e),h=m(()=>n.columns.reduce((e,n,r)=>f[r]!=null||n.name===d?.name||n.disabled?e:[...e,t.find(e=>e.name===n.name)],[]),[t,n,f]),[g,_]=i(1),v=b(()=>_(a??1.9),[a]),y=b(()=>_(1),[]),x=Oe({columns:n.columns});return Za(f,g,e=>{let t=La(e,x.columns);p.replace(t)},y),qa({host:e,canvasWidth:s,layout:f,setSettings:e=>r(e(n)),requestTween:v}),{isMini:c,collapsedColumns:h,miniColumns:u,requestTween:v}}})),no,ro=e((()=>{no=({host:e,...t})=>{let{csvFilename:n=`omnitable.csv`,xlsxFilename:r=`omnitable.xlsx`,xlsxSheetname:i=`Omnitable`,topPlacement:a=`top-end`}=e;return{csvFilename:n,xlsxFilename:r,xlsxSheetname:i,topPlacement:a,...t}}})),io,ao=e((()=>{D(),io=({host:e,selectedItems:t,data:n,sortAndGroupOptions:r,collapsedColumns:i,settings:a,filterFunctions:s,settingS:c,filters:l,requestTween:u,...d})=>{let f=n&&n.length>0&&t.length===n.length,p=t=>{t.target.checked?e.shadowRoot.querySelector(`#groupedList`).selectAll():e.shadowRoot.querySelector(`#groupedList`).deselectAll()},{groupOnColumn:h}=r,g=m(()=>[h,...i,...a.columns.filter(e=>e.disabled)].some(e=>e&&Object.keys(s).includes(e.name)),[s,a,i]),_=m(()=>({...c,collapsed:i,badge:g,filters:l,requestTween:u}),[c,i,g,l,u]);return o(()=>{let t=e.shadowRoot.querySelector(`#tableContent`),n=new ResizeObserver(t=>requestAnimationFrame(()=>{e.style.setProperty(`--ot-height`,t[0]?.contentRect.height+`px`)}));return n.observe(t),()=>n.unobserve(t)},[]),{allSelected:f,onAllCheckboxChange:p,data:n,settingsConfig:_,filters:l,groupOnColumn:h,sortAndGroup:r.sortAndGroup,...d}}})),oo,so,co,lo,uo,fo=e((()=>{x(),ye(),D(),t(),Pa(),Y(),oo=e=>e?`groupRow groupRow-folded`:`groupRow`,so=({item:e,index:t})=>n=>E(n?.length>0,()=>h`
				<div class="itemRow-minis" part="item-minis">
					${n.map(n=>h`<div
								class="itemRow-mini"
								part="item-mini item-mini-${n.name}"
							>
								${(n.renderMini??n.renderCell)(n,{item:e,index:t})}
							</div>`)}
				</div>
			`),co=({columns:e,collapsedColumns:t,miniColumns:n,onItemClick:r,onCheckboxChange:i,dataIsValid:a,groupOnColumn:o,onItemChange:s,rowPartFn:c})=>(l,u,{selected:d,expanded:f,toggleCollapse:p})=>h`
		<div
			?selected=${d}
			part="${[`itemRow`,`itemRow-${l[Ma]}`,c?.(l,u)].filter(Boolean).join(` `)}"
			.dataIndex=${l[Ma]}
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
					?hidden="${me(t.length)}"
					?aria-expanded="${f}"
					@click="${p}"
				>
					${w({width:`16`,height:`16`})}
				</button>
			</div>
			${so({item:l,index:u})(n)}
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
	`,lo=({onCheckboxChange:e,dataIsValid:t,groupOnColumn:n})=>(r,i,{selected:a,folded:o,toggleFold:s})=>h` <div
			class="${oo(o)}"
			part="groupRow groupRow-${r[Ma]}"
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
				${w({width:`16`,height:`16`})}
			</button>
		</div>`,uo=({host:e,error:t,dataIsValid:n,processedItems:r,columns:i,collapsedColumns:a,miniColumns:s,sortAndGroupOptions:c,rowPartFn:l,...u})=>{let{loading:d=!1,displayEmptyGroups:f=!1,compareItemsFn:p}=e,h=te({shiftKey:!1,ctrlKey:!1}),g=b(t=>{let n=t.target.dataItem,r=t.target.checked;h.current.shiftKey?e.shadowRoot.querySelector(`#groupedList`).toggleSelectTo(n,r):h.current.ctrlKey?(t.target.checked=!0,e.shadowRoot.querySelector(`#groupedList`).selectOnly(n)):e.shadowRoot.querySelector(`#groupedList`).toggleSelect(n,r),t.preventDefault(),t.stopPropagation()},[]);o(()=>{let e=({shiftKey:e,ctrlKey:t})=>{h.current={shiftKey:e,ctrlKey:t}};return window.addEventListener(`keydown`,e),window.addEventListener(`keyup`,e),()=>{window.removeEventListener(`keydown`,e),window.removeEventListener(`keyup`,e)}},[]);let _=b(t=>{let n=t.composedPath();n.slice(0,n.indexOf(t.currentTarget)).find(e=>e.matches?.(`a, .checkbox, .expand`))||e.dispatchEvent(new window.CustomEvent(`omnitable-item-click`,{bubbles:!0,composed:!0,detail:{item:t.currentTarget.dataItem,index:t.currentTarget.dataIndex}}))},[]),{groupOnColumn:v}=c,y=b((t,n)=>r=>yn(e,t,n,r),[]);return{...u,processedItems:r,dataIsValid:n,filterIsTooStrict:n&&r.length<1,loading:d,compareItemsFn:p,displayEmptyGroups:f,error:t,renderItem:m(()=>co({columns:i,collapsedColumns:a,miniColumns:s,onItemClick:_,onCheckboxChange:g,dataIsValid:n,groupOnColumn:v,onItemChange:y,rowPartFn:l}),[i,a,_,g,n,v,y,l]),renderGroup:m(()=>lo({onCheckboxChange:g,dataIsValid:n,groupOnColumn:v}),[g,n,v])}}})),po,mo=e((()=>{po=(e,t)=>{if(e===t)return 0;if(e==null)return-1;if(t==null)return 1;let n=typeof e,r=typeof t;return n===`object`&&r===`object`?e.toString()<t.toString()?-1:1:n===`number`&&r===`number`?e-t:n===`string`&&r===`string`?e<t?-1:1:n===`boolean`&&r===`boolean`?e?-1:1:(console.warn(`unsupported sort`,n,e,r,t),0)}})),ho,go,_o,vo,yo,bo,xo=e((()=>{we(),D(),mo(),q(),yi(),Pa(),ho=(e,t)=>(n,r)=>po(e(n),e(r))*(t?-1:1),go=e=>e.replace(/([a-z0-9])([A-Z])/gu,`$1-$2`).toLowerCase(),_o=(e,t)=>{!e||!t||Object.entries(t).forEach(([t,n])=>{e[K].__ownChange=!0,e[K][t]=n,e[K].__ownChange=!1,e[K].dispatchEvent(new CustomEvent(`${go(t)}-changed`,{bubbles:!0,detail:{value:n}}))})},vo=(e,t)=>Object.assign(e,{[Ma]:t}),yo=Symbol(`unparsed`),bo=({data:e,columns:t,hashParam:n,sortAndGroupOptions:r,noLocalSort:i,noLocalFilter:a})=>{let{groupOnColumn:s,groupOnDescending:c,sortOnColumn:l,descending:u}=r,d=b(([e,n])=>{let r=t.find(({name:t})=>t===e);return r==null?[e,void 0]:[e,n.filter&&r.serializeFilter(r,n.filter)]},[t]),f=b(([e,n])=>{let r=t.find(({name:t})=>t===e);if(r==null)return[e,{[yo]:n}];let i={filter:r.deserializeFilter(r,n)};return _o(r,i),[e,i]},[t]),[p,h]=mi({},n,{multi:!0,suffix:`-filter--`,write:d,read:f}),g=b((e,n)=>h(r=>{let i=ve(n,r[e]);return _o(t.find(t=>t.name===e),i),{...r,[e]:{...r[e],...i}}}),[t,h]),_=m(()=>Object.fromEntries(t.map(e=>[e.name,!e.noLocalFilter&&e.getFilterFn(e,p[e.name]?.filter)]).filter(([,e])=>!!e)),[t,...m(()=>Object.values(p).map(e=>e.filter),[p])]),v=m(()=>!Array.isArray(e)||e.length===0?[]:Object.entries(_).length===0||a?e.slice():e.filter(e=>Object.values(_).every(t=>t(e))),[e,_,a]),y=m(()=>{if(!i&&!s&&l!=null&&l.sortOn!=null)return v.slice().sort(ho(e=>l.getComparableValue({...l,valuePath:l.sortOn},e),u));if(s!=null&&s.groupOn!=null){let e=v.reduce((e,t)=>{let n=s.getComparableValue({...s,valuePath:s.groupOn},t);if(n===void 0)return e;let r=e.find(e=>e.id===n);return r?(r.items.push(t),e):(r={id:n,name:n,items:[t]},[...e,r])},[]);return e.sort(ho(e=>s.getComparableValue({...s,valuePath:s.groupOn},e.items[0]),c)),!l||i?e:e.filter(e=>Array.isArray(e.items)).map(e=>(e.items.sort(ho(e=>l.getComparableValue({...l,valuePath:l.sortOn},e),u)),e))}return v},[v,s,c,l,u,i]),x=m(()=>{let e=0,t=0,n=[];return y.forEach(r=>{if(Array.isArray(r.items)){vo(r,t++),r.items.forEach(t=>{vo(t,e++),n.push(t)});return}return vo(r,e++),n.push(r)},[]),n},[y]);return o(()=>{h(e=>Object.values(e).some(e=>e[yo]!=null)?Object.fromEntries(Object.entries(e).map(([e,t])=>t[yo]==null?[e,t]:f([e,t[yo]]))):e)},[f]),{processedItems:y,visibleData:x,filters:p,filterFunctions:_,setFilterState:g}}})),So,Co,wo=e((()=>{n(),c(),D(),So=e=>{let t=t=>{let n=e.data.indexOf(t);if(n<0)return null;let r=e.data.splice(n,1);if(e.data=e.data.slice(),Array.isArray(r)&&r.length>0)return r[0]},n=(t,n)=>{e.data.splice(t,1,n),e.data=e.data.slice()};return{removeItem:t,removeItems(t){let n=[];for(let r=t.length-1;r>=0;--r){let i=e.removeItem(t[r]);i!=null&&n.push(i)}return n},replaceItemAtIndex:n,replaceItem(t,r){let i=e.data.indexOf(t);if(i>-1)return n(i,r)},selectItem(t){e.shadowRoot.querySelector(`#groupedList`).select(t)},selectAll(){e.shadowRoot.querySelector(`#groupedList`).selectAll()},deselectAll(){e.shadowRoot.querySelector(`#groupedList`).deselectAll()},deselectItem(t){e.shadowRoot.querySelector(`#groupedList`).deselect(t)},isItemSelected(t){return e.shadowRoot.querySelector(`#groupedList`).isItemSelected(t)}}},Co=({host:e,visibleData:t,filters:n,...r})=>{let{setFilterState:i}=r,a=m(()=>So(e),[]),[s,c]=y(`selectedItems`,[]);he(r,Object.values(r)),he(a,Object.values(a)),o(()=>{let t=e=>i(e.detail.name,t=>({...t,...e.detail.state}));return e.addEventListener(`legacy-filter-changed`,t),()=>e.removeEventListener(`legacy-filter-changed`,t)},[]),ge(`visibleData`,t),ge(`sortedFilteredGroupedItems`,r.sortedFilteredGroupedItems),ge(`sortOn`,r.sortOn),ge(`descending`,r.descending),ge(`isMini`,r.isMini);let l=m(()=>Object.fromEntries(Object.entries(n).filter(([,{filter:e}])=>e!==void 0).map(([e,{filter:t}])=>[e,t])),[n]);return ge(`filters`,l,Object.values(l)),{selectedItems:s,setSelectedItems:c}}})),To,Eo=e((()=>{Oa(),to(),ro(),ao(),fo(),xo(),wo(),Ti(),To=e=>{let{hashParam:t,settingsId:n,data:r,resizeSpeedFactor:i,noLocal:a,noLocalSort:o=a,noLocalFilter:s=a,error:c,rowPartFn:l}=e,u=Ea({settingsId:n,host:e}),{settings:d,setSettings:f,columns:p,resetRef:m,savedSettings:h}=u,g=Ci(p,t,{settings:d,setSettings:f,resetRef:m,ready:h!==void 0}),{processedItems:_,visibleData:v,filters:y,setFilterState:b,filterFunctions:x}=bo({data:r,columns:p,hashParam:t,sortAndGroupOptions:g,noLocalSort:o,noLocalFilter:s}),{isMini:ee,collapsedColumns:S,miniColumns:C,requestTween:te}=eo({host:e,columns:p,settings:d,setSettings:f,resizeSpeedFactor:i,sortAndGroupOptions:g}),ne=r&&Array.isArray(r)&&r.length>0,{selectedItems:re,setSelectedItems:ie}=Co({host:e,visibleData:v,sortedFilteredGroupedItems:_,columns:p,filters:y,setFilterState:b,isMini:ee,...g});return{header:io({host:e,selectedItems:re,sortAndGroupOptions:g,dataIsValid:ne,data:r,columns:p,filters:y,collapsedColumns:S,settings:d,filterFunctions:x,settingS:u,setFilterState:b,hideSelectAll:e.hideSelectAll===!0,requestTween:te}),list:uo({host:e,error:c,dataIsValid:ne,processedItems:_,selectedItems:re,setSelectedItems:ie,columns:p,collapsedColumns:S,miniColumns:C,sortAndGroupOptions:g,rowPartFn:l}),footer:no({host:e,selectedItems:re,columns:p})}}})),Do=e((()=>{v(),customElements.define(`cosmoz-grouped-list-row`,class extends HTMLElement{get item(){return this._item}set item(e){this._item=e,this._render()}get index(){return this._index}set index(e){this._index=e,this._render()}get renderFn(){return this._renderFn}set renderFn(e){this._renderFn=e,this._render()}_render(){this._item==null||this._index==null||this._renderFn==null||r(this._renderFn(this._item,this._index),this)}})})),Oo,ko,Ao,jo,Mo,No,Po,Fo,Io,Lo=e((()=>{Oo={group:Symbol(`group`)},ko=(e,t)=>(t.has(e)||t.set(e,{}),t.get(e)),Ao=(e,t)=>!!ko(e,t).expanded,jo=(e,t)=>!!ko(e,t).folded,Mo=e=>e?e.items instanceof Array:!1,No=e=>{if(!Array.isArray(e)||e.length===0)return;let t=Array.isArray(e[0]?.items);if(!e.every(e=>Array.isArray(e.items)===t))throw Error(`Data must be homogeneous.`)},Po=(e,t,n)=>{if(Array.isArray(e))return No(e),e.reduce((e,r)=>{let i=r;return i.items?i.items.length?ko(r,n).folded?e.concat(r):e.concat(r,i.items.map(e=>Object.assign(e,{[Oo.group]:r}))):t?e.concat(r):e:e.concat(r)},[])},Fo=(e,...t)=>typeof e==`function`?e(...t):e,Io=(e,t)=>e===t})),Ro,zo=e((()=>{D(),Lo(),Ro=()=>{let[e,t]=i(()=>[new WeakMap]);return{setItemState:b((e,n)=>t(([t])=>{let r=ko(e,t);return Object.assign(r,Fo(n,r)),[t]}),[]),state:e[0],signal:e}}})),Bo,Vo=e((()=>{D(),zo(),Lo(),Bo=()=>{let{setItemState:e,state:t,signal:n}=Ro();return{state:t,signal:n,toggleFold:b((t,n)=>{Mo(t)&&e(t,e=>({folded:n===void 0?!e.folded:n}))},[]),toggleCollapse:b((t,n)=>{Mo(t)||e(t,e=>({expanded:n===void 0?!e.expanded:!n}))},[])}}})),Ho,Uo=e((()=>{D(),Lo(),Ho=({compareItemsFn:e,data:t,flatData:n})=>{let[r,a]=y(`selectedItems`,()=>[]),[s,c]=i(),l=b(e=>r.includes(e),[r]),u=b(e=>e?.items?.every(l)??!1,[l]),d=b(e=>l(e)||u(e),[l,u]),f=b(e=>{let t=e.items??[e];a(e=>[...e,...t.filter(t=>!e.includes(t))]),c(e)},[]),p=b(e=>{let t=e.items??[e];a(e=>e.filter(e=>!t.includes(e))),c(e)},[]),m=b(e=>{a(e.items?.slice()||[e]),c(e)},[]),h=b(()=>{a(t.flatMap(e=>e.items||e)),c(void 0)},[t]),g=b(()=>{a([]),c(void 0)},[]),_=b((e,t=!d(e))=>t?f(e):p(e),[d]),v=b((t,r)=>{if(!n)return;let i=s?n.findIndex(t=>e(t,s)):-1;if(i<0)return _(t,r);let[a,o]=[i,n.indexOf(t)].sort((e,t)=>e-t);n.slice(a,o+1).forEach((e,t,n)=>{t>0&&t<n.length-1&&Mo(e)||_(e,r)}),c(t)},[n,e,_]);return o(()=>a(t=>t.length>0&&n?n.filter(n=>t.find(t=>e(n,t))):t),[n]),{selectedItems:r,isItemSelected:l,isGroupSelected:u,isSelected:d,select:f,deselect:p,selectOnly:m,selectAll:h,deselectAll:g,toggleSelect:_,toggleSelectTo:v}}})),Wo,Go,Ko,qo=e((()=>{fe(),n(),D(),v(),Do(),Vo(),Uo(),Lo(),Wo={host:{position:`relative`,display:`flex`,flexDirection:`column`}},Go=e=>{let{data:t,renderItem:n,renderGroup:r,displayEmptyGroups:i,compareItemsFn:a=Io}=e,{toggleFold:o,toggleCollapse:s,state:c,signal:l}=Bo(),u=m(()=>Po(t,i,c),[t,i,l]),{selectedItems:d,isItemSelected:f,isGroupSelected:p,isSelected:h,select:_,deselect:v,selectOnly:y,selectAll:x,deselectAll:ee,toggleSelect:S,toggleSelectTo:C}=Ho({compareItemsFn:a,data:t,flatData:u}),te=b((e,t)=>Array.isArray(e.items)?r(e,t,{selected:p(e),folded:jo(e,c),toggleSelect:t=>S(e,typeof t==`boolean`?t:void 0),toggleFold:()=>o(e)}):n(e,t,{selected:d.includes(e),expanded:Ao(e,c),toggleSelect:t=>S(e,typeof t==`boolean`?t:void 0),toggleCollapse:()=>s(e)}),[n,r,d,S,l]);g(()=>{Object.assign(e.style,Wo.host)},[]);let ne={toggleFold:o,toggleCollapse:s,isItemSelected:f,isGroupSelected:p,isSelected:h,select:_,deselect:v,selectOnly:y,selectAll:x,deselectAll:ee,toggleSelect:S,toggleSelectTo:C};return he(ne,Object.values(ne)),{renderRow:te,flatData:u}},Ko=({renderRow:e,flatData:t})=>ae({items:t,renderItem:(t,n)=>h`<cosmoz-grouped-list-row
				.item=${t}
				.index=${n}
				.renderFn=${e}
			></cosmoz-grouped-list-row>`})})),Jo,Yo=e((()=>{D(),qo(),Jo=e=>Ko(Go(e)),customElements.define(`cosmoz-grouped-list`,T(Jo,{useShadowDOM:!1}))})),Xo=e((()=>{Yo()})),Zo,Qo,$o,es=e((()=>{Le(),Lt(),ii(),oi(),Oi(),Ni(),Ii(),D(),at(),v(),s(),zi(),qi(),Yi(),ea(),Eo(),Xo(),Zo=e=>window.ShadyCSS?.ApplyShim?.transformCssText?.(e)||e,Qo=e=>{let{header:t,list:n,footer:r}=To(e);return h`
		<style>
			${S([],()=>Zo(Ri))}
		</style>

		<div class="mainContainer">
			${Ji(t)}
			<div class="tableContent" id="tableContent">
				${$i(t,n)}
			</div>
			${Ki(r)}
		</div>

		<div id="columns">
			<slot id="columnsSlot"></slot>
		</div>
	`},customElements.define(`cosmoz-omnitable`,T(Qo,{observedAttributes:[`hash-param`,`sort-on`,`group-on`,`descending`,`group-on-descending`,`hide-select-all`,`settings-id`,`no-local`,`no-local-sort`,`no-local-filter`,`disabled-filtering`,`loading`,`mini-breakpoint`,`inline`]})),$o=`
	<slot name="actions" slot="actions"></slot>
`,h(Object.assign([$o],{raw:[$o]})),Fe(Object.assign([$o],{raw:[$o]}))})),ts,ns,rs,is,as;e((()=>{v(),Xe(),Be(),Ct(),es(),bt(),ts={title:`Components/ComsmozOmnitableFullDemo`,component:`cosmoz-omnitable`,tags:[`autodocs`],args:{loading:!1,locale:`en`,sortOn:``,groupOn:``,descending:!1,groupOnDescending:!1,hashParam:``,settingsId:``,selectedItems:[],disabledFiltering:!1},argTypes:{loading:{control:`boolean`,description:`Show loading state`,table:{defaultValue:{summary:`false`}}},locale:{control:`select`,options:[`en`,`fr`,`sv`],description:`Language locale`,table:{defaultValue:{summary:`en`}}},selectedItems:{control:`object`,description:`Show selected items`},data:{control:`object`,description:`Show specified items`},sortOn:{control:`text`,description:`Column property name to sort on (e.g., "amount", "date", "id")`},groupOn:{control:`text`,description:`Column property name to group on (e.g., "amount", "date", "id")`},descending:{control:`boolean`,description:`Sort on descending`},groupOnDescending:{control:`boolean`,description:`Group on descending`},hashParam:{control:`text`,description:`Hash parameter for URL state management`},settingsId:{control:`text`,description:`ID for storing table settings`},disabledFiltering:{control:`boolean`,description:`Disable filter inputs in all column headers`,table:{defaultValue:{summary:`false`}}}},render:e=>h`
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
                    ${ze({styles:`vertical-align: middle; fill: currentColor;`})}
                    <span>Remove items</span>
                </cosmoz-button>
            </cosmoz-omnitable>
        `,play:async()=>{console.log(`Current hash:`,window.location.hash)}},ns={args:{data:xt(10,10,10)}},rs={args:{data:xt(2,2,10)}},is={args:{data:[]}},ns.parameters={...ns.parameters,docs:{...ns.parameters?.docs,source:{originalSource:`{
  args: {
    data: generateTableDemoData(10, 10, 10)
  }
}`,...ns.parameters?.docs?.source}}},rs.parameters={...rs.parameters,docs:{...rs.parameters?.docs,source:{originalSource:`{
  args: {
    data: generateTableDemoData(2, 2, 10)
  }
}`,...rs.parameters?.docs?.source}}},is.parameters={...is.parameters,docs:{...is.parameters?.docs,source:{originalSource:`{
  args: {
    data: []
  }
}`,...is.parameters?.docs?.source}}},as=[`TableWithLargeData`,`TableWithSmallData`,`TableWithNoData`]}))();export{ns as TableWithLargeData,is as TableWithNoData,rs as TableWithSmallData,as as __namedExportsOrder,ts as default};