import{n as e}from"./chunk-BneVvdWh.js";import{$ as t,A as n,B as r,C as i,D as a,E as o,G as s,H as c,I as l,K as u,L as d,M as f,N as p,O as m,Q as h,R as g,S as _,T as v,U as y,V as b,W as x,Z as S,_ as ee,_t as C,an as te,at as w,bt as ne,c as re,cn as T,d as ie,et as ae,f as oe,ft as se,g as ce,gt as E,h as le,ht as ue,it as de,j as fe,k as D,l as O,ln as k,m as pe,mt as A,n as j,nt as me,o as he,on as ge,ot as M,p as _e,pt as ve,q as ye,r as be,rt as xe,s as Se,st as Ce,t as we,tt as Te,u as Ee,v as De,vt as Oe,w as N,y as ke,yt as P,z as Ae}from"./iframe-Zq8Cc816.js";import{A as je,B as Me,C as Ne,D as F,E as I,F as Pe,H as Fe,I as Ie,L as Le,M as L,N as R,O as Re,P as ze,R as Be,S as Ve,T as He,U as Ue,_ as We,a as Ge,b as Ke,c as qe,d as Je,f as Ye,g as Xe,h as Ze,i as Qe,j as $e,k as et,l as tt,m as nt,n as rt,o as it,p as at,r as ot,s as st,t as ct,u as lt,v as ut,w as dt,x as ft,y as pt,z as mt}from"./dist-ge8UQKxl.js";var ht,gt,z=e((()=>{l(),S(),w(),ht=t`
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
`,gt=()=>T`
	<style>
		${ht}
	</style>
	${g({className:`icon`,width:`18`,height:`18`})}
`,customElements.define(`cosmoz-clear-button`,M(gt))})),B,_t,vt,yt,bt,V,H=e((()=>{R(),B=({valuePath:e},t)=>L(t,e),_t=B,vt=B,yt=({valuePath:e},t)=>n=>{let r=L(n,e);return r==null?!1:r.toString().toLowerCase().trim().includes(t.toLowerCase().trim())},bt=(e,t)=>t===``||t==null?null:t,V=e=>class extends e{static get properties(){return{isOmnitableColumn:{type:Boolean,value:!0},title:{type:String},valuePath:{type:String,notify:!0},values:{type:Array,notify:!0},filter:{type:Object},noLocalFilter:{type:Boolean},disabled:{type:Boolean,value:!1,notify:!0},editable:{type:Boolean,notify:!0},loading:{type:Boolean,value:!1,notify:!0},externalValues:{type:Boolean,value:!1,notify:!0},name:{type:String},sortOn:{type:String},groupOn:{type:String},noSort:{type:Boolean,value:!1},disabledFiltering:{type:Boolean,value:!1},width:{type:String,value:`75px`},minWidth:{type:String,value:`40px`},flex:{type:String,value:`1`},cellClass:{type:String,value:`default-cell`},headerCellClass:{type:String,value:`default-header-cell`},priority:{type:Number,value:0},hidden:{type:Boolean,notify:!0},preferredDropdownHorizontalAlign:{type:String,value:`right`},renderHeader:{type:Function},renderCell:{type:Function},renderEditCell:{type:Function},renderGroup:{type:Function},mini:{type:Number,value:null},renderMini:{type:Function}}}static get observers(){return[`notifyFilterChange(filter)`]}notifyFilterChange(e){this.__ownChange||this.dispatchEvent(new CustomEvent(`legacy-filter-changed`,{detail:{name:this.name,state:this.legacyFilterToState(e)},bubbles:!0}))}legacyFilterToState(e){return{filter:e}}getFilterFn(){}getString(e,t){return B(e,t)}toXlsxValue(e,t){return _t(e,t)}cellTitleFn(e,t){return this.getString(e,t)}headerTitleFn(e){return e.title}serializeFilter(e,t){return bt(e,t)}deserializeFilter(e,t){return t==null?null:typeof t==`string`?window.decodeURIComponent(t):t}getComparableValue(e,t){return vt(e,t)}computeSource(e,t){return t}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n),this.dispatchEvent(new CustomEvent(`cosmoz-column-prop-changed`,{bubbles:!0}))}}})),xt,St,Ct,wt,Tt,Et,Dt,Ot=e((()=>{o(),z(),F(),k(),x(),H(),xt=e=>t=>e(n=>{if(n.inputValue===void 0&&t.target.value===``)return n;clearTimeout(n.t);let r=setTimeout(()=>e(e=>({...e,filter:e.inputValue})),1e3);return{...n,inputValue:t.target.value,t:r}}),St=e=>()=>e(e=>({...e,filter:e.inputValue})),Ct=e=>t=>{t.keyCode===13&&(t.preventDefault(),e(e=>({...e,filter:e.inputValue})))},wt=e=>t=>e(e=>({...e,headerFocused:t.detail.value})),Tt=e=>()=>e(e=>({...e,filter:null,inputValue:null})),Et=e=>e!=null&&e!==``,Dt=class extends V(I){static get properties(){return{minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},inputValue:{type:Object,notify:!0}}}getFilterFn(e,t){if(!(t==null||t===``))return yt(e,t)}renderCell(e,{item:t}){return T`<span class="default-column">${B(e,t)}</span>`}renderEditCell(e,{item:t},n){return T`<cosmoz-input
			variant="inline"
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${B(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,inputValue:n,headerFocused:r},i){return T`<cosmoz-input
			variant="inline"
			label=${e.title}
			?disabled=${e.disabledFiltering}
			.value=${n??t}
			@value-changed=${xt(i)}
			focused=${r}
			@focused-changed=${wt(i)}
			@keydown=${Ct(i)}
			@blur=${St(i)}
		>
			${s(!e.disabledFiltering,()=>T`<cosmoz-clear-button
						suffix
						slot="suffix"
						?visible=${Et(t)}
						light
						@click=${Tt(i)}
					></cosmoz-clear-button>`)}
		</cosmoz-input>`}legacyFilterToState(e){return{filter:e,inputValue:e}}},customElements.define(`cosmoz-omnitable-column`,Dt)})),kt,At,jt,U=e((()=>{o(),w(),k(),kt=[`label`,`value`,`slot`,`always-float-label`,`disabled`],At=ne`
	${f}
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
`,jt=e=>{let{label:t,value:n,slot:r}=e;return p(T`<div
		id="input"
		part="input"
		role="button"
		class="control"
		slot=${r}
	>
		${n||``}
	</div>`,{label:t})},customElements.define(`cosmoz-omnitable-dropdown-input`,M(jt,{observedAttributes:kt,styleSheets:[At]}))})),Mt,Nt=e((()=>{Pe(),k(),dt(),U(),Mt=({title:e,tooltip:t=``,filterText:n=``,onOpenedChanged:r,content:i,horizontalAlign:a=`left`,externalValues:o=null})=>T`
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
			class=${Ne({filtered:!!n,...o!=null&&{[`external-values-${o}`]:!0},dropdown:!0})}
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
	`})),Pt,Ft,It=e((()=>{_e(),je(),Ve(),pt(),Pt=e=>e?typeof e.close==`function`?e:Pt(e.parentElement):null,Ft=e=>class extends e{static get properties(){return{disabled:{type:Boolean,value:!1},filter:{type:Object,notify:!0},values:{type:Array,value(){return[]}},headerFocused:{type:Boolean,notify:!0},min:{type:Number,value:null},max:{type:Number,value:null},limits:{type:Function},autoupdate:{type:String,value:!0},locale:{type:String,value:null},_filterInput:{type:Object,value(){return{min:null,max:null}}},_range:{type:Object,computed:`_computeRange(values.*)`},_limit:{type:Object,computed:`_computeLimit(_range, _filterInput.*, min, max)`,value(){return{}}},_tooltip:{type:String,computed:`_computeTooltip(title, _filterText)`},_fromClasses:{type:String,computed:`_computeInputClasses(_filterInput.min)`},_toClasses:{type:String,computed:`_computeInputClasses(_filterInput.max)`}}}static get observers(){return[`_filterInputChanged(_filterInput.*, autoupdate)`,`_filterChanged(filter.*)`,`_updateLimits(limits, headerFocused)`]}disconnectedCallback(){this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),super.disconnectedCallback()}_computeInputClasses(e){return e!=null&&e!==``?`has-value`:``}toNumber(e,t,n){if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=this.toNumber(t);return i==null?r:n(r,i)}toValue(){return this.toNumber.apply(this,arguments)}getComparableValue(e,t){if(e==null)return;let n=e;return t!=null&&(n=this.get(t,e)),this.toValue(n)}renderValue(){}getInputString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return this._toInputString(n)}_computeRange(e){let t=e.base,n=Array.isArray(t)&&t.length&&t.map(e=>this.toValue(e)).filter(e=>e!=null);return!n||n.length<1?{min:null,max:null}:n.reduce((e,t)=>({min:this.toValue(t,e.min,Math.min),max:this.toValue(t,e.max,Math.max)}),{})}_computeLimit(e,t,n,r){if(!e)return;let i=t.base,a=this.toValue(n),o=this.toValue(r),s=a??this.toValue(e.min),c=o??this.toValue(e.max);return{fromMin:s,fromMax:this.toValue(c,this._fromInputString(i.max,`max`),Math.min),toMin:this.toValue(s,this._fromInputString(i.min,`min`),Math.max),toMax:c}}_computeFilterText(e){if(e.base==null)return;let t=e.base,n=this.toValue(t.min),r=this.toValue(t.max),i=[];return n!=null&&i.push(this.renderValue(n)),i.push(` - `),r!=null&&i.push(this.renderValue(r)),i.length>1?i.join(``):void 0}_computeTooltip(e,t){return t==null?e:`${e}: ${t}`}_fromInputString(e){return this.toValue(e)}_toInputString(e){return this.toValue(e)??null}_getDefaultFilter(){return{min:null,max:null}}_filterInputChanged(e,t){this.__inputChangePath=e.path.split(`.`)[1]||null,t&&(this._limitInputDebouncer=Ke.debounce(this._limitInputDebouncer,$e.after(600),()=>{this._limitInput(),this._updateFilter()}),ft(this._limitInputDebouncer))}_clearFrom(){this.set(`_filterInput.min`,null),this._updateFilter()}_clearTo(){this.set(`_filterInput.max`,null),this._updateFilter()}_onBlur(){this._limitInput(),this._updateFilter()}_onKeyDown(e){let t=e.currentTarget,n=Array.from(t.parentElement.querySelectorAll(`cosmoz-input`)),r=n[n.findIndex(e=>e===t)+1],i=!r,a=n[0]===t;switch(e.keyCode){case 13:if(e.preventDefault(),!i)r.focus();else{let e=this._limitInput();this._updateFilter(),e||this._closeParent(t)}break;case 9:(i&&!e.shiftKey||a&&e.shiftKey)&&this._closeParent(t)}}_closeParent(e){let t=Pt(e);t&&t.close()}_onDropdownOpenedChanged({currentTarget:e,type:t,detail:n}){(t===`focus`||n?.value===!0)&&setTimeout(()=>{e.querySelector(`cosmoz-input:focus`)||e.querySelector(`cosmoz-input`)?.focus()},100)}_limitInput(){let e=this._filterInput,t=this.__inputChangePath,n=t?this._fromInputString(this.get(t,e),t):null;if(this.__inputChangePath=null,n==null)return!1;let r=this._limit,i=t===`min`?`from`:`to`,a=this.get(i+`Min`,r),o=this.get(i+`Max`,r),s=this.toValue(n,a,Math.max),c=this.toValue(s,o,Math.min);return this.getComparableValue(n)===this.getComparableValue(c)?!1:(this.set([`_filterInput`,t],this._toInputString(c,t)),this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),!0)}_updateFilter(){let e=this._filterInput,t=this.filter,n=this._fromInputString(e.min,`min`),r=this._fromInputString(e.max,`max`);this.getComparableValue(n)===this.getComparableValue(t,`min`)&&this.getComparableValue(r)===this.getComparableValue(t,`max`)||this.set(`filter`,{min:n,max:r})}_filterChanged(e){if(this._filterInput==null)return;let t=this._filterInput,n=e.base,r=this._fromInputString(t.min,`min`),i=this._fromInputString(t.max,`max`);this.getComparableValue(r)===this.getComparableValue(n,`min`)&&this.getComparableValue(i)===this.getComparableValue(n,`max`)||(this.set(`_filterInput`,{min:this._toInputString(n.min),max:this._toInputString(n.max)}),this._limitInputDebouncer&&this._limitInputDebouncer.cancel())}hasFilter(){let e=this.filter;return e==null?!1:this.toValue(e.min)!=null||this.toValue(e.max)!=null}resetFilter(){this.filter=this._getDefaultFilter()}_updateLimits(e,t){e&&Promise.resolve(pe(e,{active:t})).then(e=>{let{min:t,max:n}=e??{};Object.assign(this,{...t==null?{}:{min:t},...n==null?{}:{max:n}})})}}})),Lt,Rt=e((()=>{F(),k(),Lt=e=>class extends e{static get template(){return Re`<div id="output" style="position:relative;"></div>`}connectedCallback(){super.connectedCallback(),ge(this.render(),this.$.output)}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n),requestAnimationFrame(()=>ge(this.render(),this.$.output))}}})),zt,Bt=e((()=>{o(),F(),N(),k(),x(),Nt(),U(),It(),Rt(),zt=class extends Ft(Lt(I)){static get properties(){return{currency:{type:String},autodetect:{type:Boolean,value:!1},rates:{type:Object},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, _formatters)`},headerFocused:{type:Boolean,value:!1}}}static get observers(){return[`_valuesChanged(autodetect, currency, values)`]}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return T`
			${s(this.disabled,()=>T`
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
					${Mt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:T`
							<h3>${this.title}</h3>
							<cosmoz-input
								class=${this._fromClasses}
								type="number"
								title=${v(`Minimum amount`)}
								label=${v(`Min amount`)}
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
								title=${v(`Maximum amount`)}
								label=${v(`Max amount`)}
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
		`}_valuesChanged(e,t,n){if(!Array.isArray(n)||n.length<1||!e&&t)return;let r=n.reduce((e,t)=>{if(t.currency){let n=t.currency;e[n]=(e[n]||0)+1}return e},{}),i=Object.keys(r)[0];Object.keys(r).reduce((e,t)=>{let n=Math.max(e,r[t]);return n===r[t]&&(i=t),n},0),this.set(`currency`,i)}toAmount(e,t,n){if(e==null||e===``)return;if(typeof e!=`object`||e.currency==null||e.currency===``)return null;let r=this.toNumber(e.amount);if(r==null||Number.isNaN(r))return null;let i={currency:e.currency,amount:r};if(n==null||t==null)return i;let a=this.toAmount(t);if(a==null)return i;let o=this.rates||{},s=i.amount*(o[i.currency]||1),c=a.amount*(o[a.currency]||1);return this.toNumber(s,c,n)===s?i:a}toValue(){return this.toAmount.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n==null)return;let r=this.toNumber(n.amount),i=this.rates;return i==null?r:r*(i[n.currency]||1)}getString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return n===void 0?``:n===null?`Invalid value`:this.renderValue(n)}getCurrency(e,t){let n=this.get(t,e);return n&&n.currency}getFormatter(e,t){let n=e+(t||``)||``,r=this._formatters=this._formatters||{};return r[n]||(r[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),r[n]}renderValue(e){let t=this.toAmount(e);return t==null?``:this.getFormatter(t.currency,this.locale).format(e.amount)}_amountValueChanged(e){let t=e.target.value,n=e.model.item,r=this.get(this.valuePath,n),i={amount:Number(t),currency:r.currency};this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toInputString(e){let t=this.toValue(e);return t==null?null:this.toNumber(t.amount)}_toInputStringAmount(e){let t=this.rates;if(t==null)return this._toInputString(e);let n=this.toValue(e);return n==null?null:(this.toNumber(n.amount)*(t[n.currency]||1)/(t[this.currency]||1)).toFixed(2)}_fromInputString(e,t){let n=this.toNumber(e);if(n!=null)return this.toValue({amount:n,currency:t&&this.get([`filter`,t,`currency`])||this.currency})}},customElements.define(`cosmoz-omnitable-amount-range-input`,zt)})),W,Vt,Ht,Ut,G,Wt,Gt,Kt,qt=e((()=>{R(),Xe(),W=(e,t,n)=>{if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=W(t);return i==null?r:n(r,i)},Vt=e=>{let t=W(e);return t==null?null:t.toString()},Ht=({valuePath:e},t)=>Vt(W(e?L(t,e):t)),Ut=e=>Vt(e)??``,G=({valuePath:e,maximumFractionDigits:t},n)=>{if(n==null)return;let r=W(e?L(n,e):n);if(r!=null)return t===null?r:W(r.toFixed(t))},Wt=ut((e,t,n)=>{let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}),Gt=({valuePath:e,locale:t,minimumFractionDigits:n,maximumFractionDigits:r},i)=>{let a=e?L(i,e):i;if(a==null)return``;let o=W(a);if(o!=null)return Wt(t,n,r).format(o)},Kt=(e,t)=>n=>{let r=G(e,n);if(r==null)return!1;let i=G({...e,valuePath:`min`},t),a=G({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})),K,q,Jt,Yt,Xt,Zt,Qt,$t,en,tn,nn,rn=e((()=>{R(),qt(),K=(e={},t,n,r)=>{if(t==null||t===``)return;if(typeof t!=`object`||t.currency==null||t.currency===``)return null;let i=W(t.amount);if(i==null||Number.isNaN(i))return null;let a={currency:t.currency,amount:i};if(r==null||n==null)return a;let o=K(e,n);if(o==null)return a;let s=a.amount*(e[a.currency]||1);return W(s,o.amount*(e[o.currency]||1),r)===s?a:o},q=({valuePath:e,rates:t},n)=>{if(n==null)return;let r=n;e!=null&&(r=L(n,e));let i=K(t,r);if(i==null)return;let a=W(i.amount);return t==null||a==null?a:a*(t?.[i.currency]||1)},Jt=(e,t)=>n=>{let r=q(e,n);if(r===void 0)return!1;let i=q({...e,valuePath:`min`},t),a=q({...e,valuePath:`max`},t);return i===void 0||a===void 0?!0:!(r<i||r>a)},Yt={},Xt=(e,t)=>{let n=e+(t||``)||``;return Yt[n]||(Yt[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),Yt[n]},Zt=(e,t,n)=>{let r=K(e,t);return r==null?``:Xt(r.currency,n).format(r.amount)},Qt=({valuePath:e,rates:t,locale:n},r)=>{let i=K(t,e?L(r,e):void 0);return i===void 0?``:i===null?`Invalid value`:Zt(t,i,n)},$t=e=>e?e.amount+e.currency:``,en=e=>{if(e==null||e===``)return;let t=e.match(/^(-?[\d]+)([\D]+?)$/iu);if(!(!Array.isArray(t)||t.length<0))return{amount:Number(t[1]),currency:t[2]}},tn=({valuePath:e},t)=>e?L(t,e)?.currency:null,nn=({valuePath:e},t)=>e?L(t,e)?.amount:void 0})),J,an,on,sn,cn,ln,un,dn=e((()=>{Xe(),w(),J=Symbol(`column`),an=e=>{let t=!0,n=e.map(e=>e.name);return e.forEach(e=>{e.name??(t=!1,console.error(`The name attribute needs to be set on all columns! Missing on column`,e))}),e.forEach(e=>{n.indexOf(e.name)!==n.lastIndexOf(e.name)&&(t=!1,console.error(`The name attribute needs to be unique among all columns! Not unique on column`,e))}),t},on=(e,t)=>{let n=e.valuePath??e.name;return{name:e.name,title:e.title,valuePath:n,groupOn:e.groupOn??n,sortOn:e.sortOn??n,noSort:e.noSort,disabledFiltering:t||e.disabledFiltering,minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,getString:e.getString,getComparableValue:e.getComparableValue,serializeFilter:e.serializeFilter,deserializeFilter:e.deserializeFilter,toXlsxValue:e.toXlsxValue,renderHeader:e.renderHeader,renderCell:e.renderCell,renderEditCell:e.renderEditCell,renderGroup:e.renderGroup,cellTitleFn:e.cellTitleFn,headerTitleFn:e.headerTitleFn,getFilterFn:e.getFilterFn,headerCellClass:e.headerCellClass,cellClass:e.cellClass,editable:e.editable,values:e.values,source:We(e.computeSource),noLocalFilter:e.noLocalFilter,mini:e.mini,renderMini:e.renderMini,loading:e.loading,externalValues:e.externalValues,computeSource:e.computeSource,trueLabel:e.trueLabel,falseLabel:e.falseLabel,valueProperty:e.valueProperty,textProperty:e.textProperty,emptyLabel:e.emptyLabel,emptyValue:e.emptyValue,min:e.min,max:e.max,locale:e.locale,autoupdate:e.autoupdate,maximumFractionDigits:e.maximumFractionDigits,minimumFractionDigits:e.minimumFractionDigits,currency:e.currency,rates:e.rates,autodetect:e.autodetect,ownerTree:e.ownerTree,keyProperty:e.keyProperty,...e.getConfig?.(e),[J]:e}},sn=e=>e.isOmnitableColumn&&!e.hidden,cn=e=>{let t=e.filter(sn);return an(t)?t:[]},ln=(e,t,n)=>(Array.isArray(t)?e.filter(e=>t.includes(e.name)):e.filter(e=>!e.disabled)).map(e=>on(e,n)),un=(e,{enabledColumns:t,disabledFiltering:n})=>{let[r,i]=A([]);return ue(()=>{let r,a=[],o=e.shadowRoot.querySelector(`#columnsSlot`),s=e=>()=>{let r=o.assignedNodes({flatten:!0});if(e)a=r;else{let e=r.filter(e=>!a.includes(e)),t=a.filter(e=>!r.includes(e)),n=[...e,...t].some(e=>e.isOmnitableColumn);if(a=r,!n)return}i(ln(cn(r),t,n))},c=e=>{cancelAnimationFrame(r),r=requestAnimationFrame(s(e?.type===`cosmoz-column-prop-changed`))};return c(),o.addEventListener(`slotchange`,c),e.addEventListener(`cosmoz-column-prop-changed`,c),()=>{o.removeEventListener(`slotchange`,c),e.removeEventListener(`cosmoz-column-prop-changed`,c),cancelAnimationFrame(r)}},[t,n]),r}})),fn,pn,mn,Y=e((()=>{R(),dn(),fn=(e,t)=>Array.isArray(e)?e.map(e=>L(e,t)).filter((e,t,n)=>e!=null&&n.indexOf(e)===t):void 0,pn=({externalValues:e,values:t,valuePath:n},r)=>{if(e)return e;if(typeof t==`function`)return t;if(n!==void 0)return fn(r,n)},mn=(e,t,n,r)=>{let{valuePath:i}=t,a=i===void 0?void 0:L(n,i);if(r===a)return;i!==void 0&&ze(n,i,r);let o={item:n,valuePath:i,value:r,oldValue:a,column:t[J]};e.dispatchEvent(new CustomEvent(`column-item-changed`,{bubbles:!0,composed:!0,detail:o}))}})),hn,gn=e((()=>{o(),z(),F(),k(),R(),H(),Bt(),rn(),Y(),hn=class extends V(I){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},currency:{type:String,notify:!0},autodetect:{type:Boolean,value:!1,notify:!0},rates:{type:Object,notify:!0},width:{type:String,value:`70px`},cellClass:{type:String,value:`amount-cell align-right`},headerCellClass:{type:String,value:`amount-header-cell`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=q({...e,valuePath:`min`},t),r=q({...e,valuePath:`max`},t);if(!(n==null&&r==null))return Jt(e,t)}getString(e,t){return Qt(e,t)}toXlsxValue(e,t){return Qt(e,t)}getComparableValue(e,t){return q(e,t)}serializeFilter({rates:e},t){if(t==null)return;let n=K(e,t.min),r=K(e,t.max);if(!(n==null&&r==null))return $t(n)+`~`+$t(r)}deserializeFilter(e,t){if(t==null||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:en(n[1]),max:en(n[2])}:null}renderCell(e,{item:t}){return T`<span>${e.getString(e,t)}</span>`}renderEditCell(e,{item:t},n){return T`<cosmoz-input
			type="number"
			@change=${r=>n({amount:r.target.value,currency:L(t,e.valuePath)?.currency})}
			.value=${nn(e,t)}
		>
			<div slot="suffix">${tn(e,t)}</div>
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
		></cosmoz-omnitable-amount-range-input>`}computeSource(e,t){return pn(e,t)}},customElements.define(`cosmoz-omnitable-column-amount`,hn)})),_n,vn,yn,bn,xn,Sn,Cn,wn,Tn,En,Dn,On,kn=e((()=>{be(),_e(),re(),R(),Y(),_n=(e,t)=>{if(!Array.isArray(e))return;let n=[];return e.reduce((e,t)=>Array.isArray(t)?(t.forEach(t=>{e.push(t)}),e):(e.push(t),e),[]).filter((e,r,i)=>{if(i.indexOf(e)!==r)return!1;if(t){let r=L(e,t);if(n.indexOf(r)!==-1)return!1;n.push(r)}return!0})},vn=(e,t,n)=>{if(e==null)return[];if(Array.isArray(e)){let r=_n(e,t);if(!r?.length)return r;let i=n??`label`,a=e=>String(typeof e==`object`&&e?L(e,i)??``:e??``);return r.sort((e,t)=>a(e).localeCompare(a(t)))}if(typeof e==`object`){let r=t??`id`,i=n??`label`;return Object.entries(e).map(([e,t])=>({[r]:e,[i]:t})).sort((e,t)=>String(e[i]??``).localeCompare(String(t[i]??``)))}return[]},yn=(e,t,n)=>j(t&&L(e,t)).map(O(n)),bn=({valuePath:e,textProperty:t},n)=>yn(n,e,t).filter(e=>e!=null).join(`, `),xn=bn,Sn=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>a=>{let o=O(e),s=j(L(a,t));return i.some(t=>s.length===0&&O(r||e)(t)===n||s.some(e=>o(e)===o(t)))},Cn=e=>t=>e(e=>({...e,filter:t})),wn=e=>t=>e(e=>({...e,headerFocused:t})),Tn=e=>t=>e(e=>({...e,query:t})),En=({emptyValue:e,emptyLabel:t,emptyProperty:n,textProperty:r,valueProperty:i},a)=>{let o=vn(a,i,r);return!t||e===void 0||!r||!(n||i)||!o?o:[{[r]:t,[n||i]:e},...o]},Dn=(e,t)=>En(e,fn(t,e.valuePath)),On=e=>class extends e{static get properties(){return{textProperty:{type:String},valueProperty:{type:String},emptyLabel:{type:String},emptyValue:{type:Object},emptyProperty:{type:String}}}getConfig(e){return{emptyProperty:e.emptyProperty}}getString(e,t){return bn(e,t)}toXlsxValue(e,t){return xn(e,t)}getComparableValue({valuePath:e,valueProperty:t},n){let r=L(n,e);return t==null?r:j(r).reduce((e,n)=>(e.push(L(n,t)),e),[]).sort().join(` `)}getFilterFn(e,t){if(!(!t||!Array.isArray(t)||t.length===0))return Sn(e,t)}serializeFilter(e,t){return t.length===0?null:JSON.stringify(t)}deserializeFilter(e,t){return JSON.parse(decodeURIComponent(t))}computeSource(e,t){return e.externalValues||typeof e.values==`function`?async(...t)=>En(e,await Promise.resolve(pe(e.values,...t))):Dn(e,t)}}})),An,jn,Mn,Nn=e((()=>{we(),Ze(),F(),k(),x(),be(),re(),kn(),H(),w(),R(),dn(),An=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?ie(t):O(n),a=j(e&&L(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},jn=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>{let a=O(e),o=O(r||e),s=new Set(i.filter(e=>e.excluded).map(e=>a(e.item))),c=new Set(i.filter(e=>!e.excluded).map(e=>a(e.item))),l=i.some(e=>e.excluded&&o(e.item)===n),u=i.some(e=>!e.excluded&&o(e.item)===n);return e=>{let n=j(L(e,t)).map(a);return n.length===0?!l&&(u||c.size===0):!n.some(e=>s.has(e))&&(c.size===0||n.some(e=>c.has(e)))}},Mn=class extends On(V(I)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return T`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},n){return T`<cosmoz-input
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${B(e,t)}
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
			.itemRenderer=${e[J]?.itemRenderer}
			.value=${t}
			.text=${n}
			.limit=${e.limit}
			@opened-changed=${e=>wn(r)(e.detail.value)}
			@value-changed=${ve(Cn(r))}
			@text-changed=${ve(Tn(r))}
			>${s(e.loading,()=>T`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-excluding
		>`}getComparableValue(e,t){return An(e,t)}getFilterFn(e,t){if(!(!t||!Array.isArray(t)||t.length===0))return jn(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete-excluding`,Mn)})),Pn,Fn,In=e((()=>{we(),Ze(),F(),k(),x(),be(),re(),kn(),H(),R(),dn(),Pn=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?ie(t):O(n),a=j(e&&L(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},Fn=class extends On(V(I)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return T`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},n){return T`<cosmoz-input
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${B(e,t)}
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
			.itemRenderer=${e[J]?.itemRenderer}
			.value=${t}
			.text=${n}
			.limit=${e.limit}
			.onChange=${Cn(r)}
			@opened-changed=${e=>wn(r)(e.detail.value)}
			.onText=${Tn(r)}
			>${s(e.loading,()=>T`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}getComparableValue(e,t){return Pn(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete`,Fn)})),Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,qn,Jn,Yn,Xn,Zn=e((()=>{F(),H(),we(),Xe(),R(),k(),x(),Ln=(e,t)=>t.find(({value:t})=>e===t),Rn=(e,t,n)=>{let r=Ln(t,n);return r?r.text:e},zn=(e,t,n,r)=>Rn(e,L(t,n),r),Bn=({valuePath:e},t,n)=>Ln(L(t,e),n),Vn=e=>t=>{e(e=>({...e,filter:t?.[0]?.value??null}))},Hn=e=>t=>{e(e=>({...e,headerFocused:t}))},Un=e=>t=>{e(e=>({...e,query:t}))},Wn=e=>t=>e(t?.[0]?.value),Gn=({valuePath:e,trueLabel:t,falseLabel:n},r)=>L(r,e)?t:n,Kn=({valuePath:e},t)=>n=>L(n,e)===t,qn=We((e,t)=>[{text:e,value:!0},{text:t,value:!1}]),Jn=({valuePath:e,trueLabel:t,falseLabel:n},r)=>e?L(r,e)?t:n:``,Yn=(e,t)=>{try{return JSON.parse(t)}catch{return null}},Xn=class extends V(I){static get properties(){return{trueLabel:{type:String,value:`True`},falseLabel:{type:String,value:`False`},flex:{type:String,value:`0`},cellClass:{type:String,value:`boolean-cell`}}}getString(e,t){return Gn(e,t)}renderCell(e,{item:t}){return Gn(e,t)}renderEditCell(e,{item:t},n){let{trueLabel:r,falseLabel:i}=e;return T`<cosmoz-autocomplete
			variant="inline"
			.title=${zn(e.title,t,e.valuePath,qn(r,i))}
			.source=${qn(r,i)}
			.textProperty=${`text`}
			.value=${Bn(e,t,qn(r,i))}
			.onChange=${Wn(n)}
			.limit=${1}
			>${s(e.loading,()=>T`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete
		>`}renderHeader(e,{filter:t,query:n},r,i){return T`<cosmoz-autocomplete-ui
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
			>${s(e.loading,()=>T`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}computeSource({trueLabel:e,falseLabel:t}){return qn(e,t)}getFilterFn(e,t){if(t!=null)return Kn(e,t)}toXlsxValue(e,t){return Jn(e,t)}deserializeFilter(e,t){return Yn(e,t)}},customElements.define(`cosmoz-omnitable-column-boolean`,Xn)})),Qn,$n=e((()=>{Te(),It(),Qn=e=>class extends Ft(e){static get properties(){return{max:{type:Date,value:null},min:{type:Date,value:null},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},formatter:{type:Object,computed:`_computeFormatter(locale)`}}}toDate(e,t,n){if(e==null||e===``)return;let r=e;if(r instanceof Date||(typeof e==`string`&&(r=this.getAbsoluteISOString(r)),r=new Date(r)),Number.isNaN(r.getTime()))return null;if(n==null||t==null)return r;let i=this.toDate(t);if(i==null)return r;let a=this.getComparableValue(r);return n(a,this.getComparableValue(i))===a?r:i}toValue(){return this.toDate.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n!=null)return this.toNumber(n.getTime())}getString(e,t=this.valuePath,n=this.formatter){let r=this.toValue(this.get(t,e));return r===void 0?``:r===null?`Invalid Date`:this.renderValue(r,n)}getAbsoluteISOString(e){return e.length===19?e+this._getTimezoneString(e):e}_getTimezoneString(e){let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`}renderValue(e,t=this.formatter){if(t==null)return;let n=this.toValue(e);if(n!=null)return t.format(n)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(0,10)}_dateValueChanged(e){let t=e.currentTarget.value,n=e.model.item,r=this.get(this.valuePath,n),i=this._fromInputString(t);this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toLocalISOString(e){return me(e)}}})),er,tr=e((()=>{o(),F(),N(),k(),x(),$n(),Nt(),U(),Rt(),er=class extends Qn(Lt(I)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return T`
			${s(this.disabled,()=>T`
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
					${Mt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:T`
							<h3>${this.title}</h3>
							<cosmoz-input
								type="date"
								label=${v(`From date`)}
								min=${this._toInputString(this._limit.fromMin)}
								max=${this._toInputString(this._limit.fromMax)}
								.value=${this._filterInput?.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-input>
							<cosmoz-input
								type="date"
								label=${v(`Until date`)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
								.value=${this._filterInput?.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-input>
						`})}
				`)}
		`}_fromInputString(e,t){let n=this.toDate(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n}_filterInputChanged(e,t){let n=e.path.split(`.`)[1]&&e.value;if(n&&n.match(/^0+/u)){this._limitInputDebouncer.cancel();return}super._filterInputChanged(e,t)}},customElements.define(`cosmoz-omnitable-date-range-input`,er)})),nr,rr,ir,X,Z,ar,or,sr,cr,lr,ur,dr,fr,pr,mr,hr=e((()=>{Te(),R(),qt(),nr=e=>{let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`},rr=e=>e.length===19?e+nr(e):e,ir=e=>{if(e==null||e===``)return;let t=e;return!(t instanceof Date)&&(typeof e==`string`&&(t=rr(t)),t=ae(t),!t)||Number.isNaN(t.getTime())?null:t},X=({valuePath:e},t)=>{if(t==null)return;let n=t;e!=null&&(n=L(t,e));let r=ir(n);if(r!=null)return W(r.getTime())},Z=(e,t,n)=>{let r=ir(e);if(r==null)return null;if(n==null||t==null)return r;let i=Z(t);if(i==null)return r;let a=X({},r),o=X({},i);return a==null||o==null||n(a,o)===a?r:i},ar=(e,t)=>{if(t==null)return;let n=Z(e);if(n!=null)return t.format(n)},or={},sr=e=>{let t=e||``;return or[t]||(or[t]=new Intl.DateTimeFormat(e||void 0)),or[t]},cr=({valuePath:e,locale:t},n)=>{let r=L(n,e||``);return r===void 0?``:(r=Z(r),r===null?`Invalid Date`:ar(r,sr(t)))},lr=e=>{let t=Z(e);if(t==null)return null;let n=me(t);return n==null?null:n.slice(0,10)},ur=({valuePath:e},t)=>lr(L(t,e||``)),dr=(e,t)=>{let n=Z(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n},fr=e=>lr(e)??``,pr=({valuePath:e},t)=>{if(!e)return``;let n=Z(L(t,e));if(!n)return``;let r=Z(me(n));return r?(r.setHours(0,0,0,0),r):``},mr=(e,t)=>n=>{let r=X(e,n);if(r==null)return!1;let i=X({...e,valuePath:`min`},t),a=X({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})),gr,_r=e((()=>{o(),F(),k(),H(),tr(),Y(),hr(),z(),gr=class extends V(I){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`date-header-cell`},width:{type:String,value:`100px`},minWidth:{type:String,value:`82px`},flex:{type:String,value:`0`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=X({...e,valuePath:`min`},t),r=X({...e,valuePath:`max`},t);if(!(n==null&&r==null))return mr(e,t)}getString(e,t){return cr(e,t)}toXlsxValue(e,t){return pr(e,t)}getComparableValue(e,t){return X(e,t)}serializeFilter(e,t){if(t==null)return;let n=Z(t.min),r=Z(t.max);if(!(n==null&&r==null))return fr(n)+`~`+fr(r)}deserializeFilter(e,t){if(t==null||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Z(n[1]),max:Z(n[2])}:null}renderCell(e,{item:t}){return T`<div class="omnitable-cell-date">
			${cr(e,t)}
		</div>`}renderEditCell(e,{item:t},n){return T`<cosmoz-input
			type="date"
			@change=${e=>n(dr(e.target.value))}
			.value=${ur(e,t)}
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
		></cosmoz-omnitable-date-range-input>`}computeSource(e,t){return pn(e,t)}},customElements.define(`cosmoz-omnitable-column-date`,gr)})),vr,yr=e((()=>{F(),N(),k(),x(),$n(),Nt(),U(),Rt(),vr=class extends Qn(Lt(I)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return T`
			${s(this.disabled,()=>T`
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
					${Mt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:T`
							<h3>${this.title}</h3>
							<cosmoz-datetime-input
								date-label=${v(`From date`)}
								time-label=${v(`From time`)}
								min=${this._toInputString(this._limit.fromMin)}
								max=${this._toInputString(this._limit.fromMax)}
								step=${this.filterStep}
								.value=${this._filterInput?.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-datetime-input>
							<cosmoz-datetime-input
								date-label=${v(`To date`)}
								time-label=${v(`To time`)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
								step=${this.filterStep}
								.value=${this._filterInput?.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-datetime-input>
						`})}
				`)}
		`}_toInputString(e){let t=this.toValue(e);if(t!=null)return this._toLocalISOString(t).slice(0,19)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})}},customElements.define(`cosmoz-omnitable-datetime-range-input`,vr)})),br,xr,Sr,Cr,wr,Tr,Er=e((()=>{R(),hr(),br={},xr=e=>{let t=e||``;return br[t]||(br[t]=new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})),br[t]},Sr=({valuePath:e,locale:t},n)=>{let r=Z(L(n,e||``));return r===void 0?``:r===null?`Invalid Date`:ar(r,xr(t))},Cr=({valuePath:e},t)=>e?L(t,e):``,wr=e=>{let t=Z(e);return t==null?``:t.toISOString().slice(0,19).replace(/:/gu,`.`)},Tr=e=>{if(!(e==null||e===``)&&typeof e==`string`)return Z(e.replace(/\./gu,`:`)+`Z`)}})),Dr,Or=e((()=>{nt(),z(),F(),k(),H(),yr(),Y(),hr(),Er(),Dr=class extends V(I){static get is(){return`cosmoz-omnitable-column-datetime`}static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`datetime-header-cell`},width:{type:String,value:`210px`},minWidth:{type:String,value:`128px`},flex:{type:String,value:`0`},filterStep:{type:Number,value:1}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=X({...e,valuePath:`min`},t),r=X({...e,valuePath:`max`},t);if(!(n==null&&r==null))return mr(e,t)}getString(e,t){return Sr(e,t)}toXlsxValue(e,t){return Cr(e,t)}getComparableValue(e,t){return X(e,t)}serializeFilter(e,t){if(t==null)return;let n=Z(t.min),r=Z(t.max);if(!(n==null&&r==null))return wr(n)+`~`+wr(r)}deserializeFilter(e,t){if(t==null||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Tr(n[1]),max:Tr(n[2])}:null}renderCell(e,{item:t}){return Sr(e,t)}renderEditCell(e,{item:t},n){return T`<cosmoz-input
			type="text"
			@change=${e=>n(dr(e.target.value))}
			.value=${Sr(e,t)}
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
		></cosmoz-omnitable-datetime-range-input>`}computeSource(e,t){return pn(e,t)}},customElements.define(Dr.is,Dr)})),kr,Ar=e((()=>{we(),Ze(),F(),k(),x(),kn(),H(),kr=class extends On(V(I)){renderCell({valuePath:e,textProperty:t},{item:n}){return T`
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
				${yn(n,e,t).map(e=>T`<li>${e}</li>`)}
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
			.onChange=${Cn(r)}
			@opened-changed=${e=>wn(r)(e.detail.value)}
			.onText=${Tn(r)}
			>${s(e.loading,()=>T`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		> `}},customElements.define(`cosmoz-omnitable-column-list-horizontal`,kr)})),jr,Mr,Nr=e((()=>{S(),w(),N(),jr=t`
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
`,Mr=({items:e})=>{let[t,n]=A(!1),r=Array.isArray(e)?e:[],i=C(()=>Math.max(0,r.length-1),[r]);if(r.length===0)return null;let a=r.length>2,o=r[0],s=a&&!t?[]:r.slice(1),c=e=>{e.stopPropagation(),e.preventDefault(),n(e=>!e)};return T`
		<ul>
			<li>
				<span>${o}</span>
			</li>
			<li class="see-more" ?hidden=${!a||t}>
				<a href="#" @click=${c}
					>${v(`and {0} more`,{0:i})}</a
				>
			</li>
			${s.map(e=>T`
					<li>
						<span class="item">${e}</span>
					</li>
				`)}
			<li class="see-less" ?hidden=${!a||!t}>
				<a href="#" @click=${c}>${v(`See less`)}</a>
			</li>
		</ul>
	`},customElements.define(`cosmoz-omnitable-column-list-data`,M(Mr,{styleSheets:[h(jr)]}))})),Pr,Fr=e((()=>{Nr(),F(),k(),x(),we(),kn(),H(),dn(),Pr=class extends On(V(I)){static get properties(){return{keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,textual:e.textual}}renderCell({valuePath:e,textProperty:t},{item:n}){return T`<cosmoz-omnitable-column-list-data
			.items=${yn(n,e,t)}
		></cosmoz-omnitable-column-list-data>`}renderEditCell(e,{item:t},n){return T`<cosmoz-input
			type="text"
			.value=${bn(e,t)}
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
			.itemRenderer=${e[J]?.itemRenderer}
			.value=${t}
			.text=${n}
			.onChange=${Cn(r)}
			@opened-changed=${e=>wn(r)(e.detail.value)}
			.onText=${Tn(r)}
			>${s(e.loading,()=>T`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}},customElements.define(`cosmoz-omnitable-column-list`,Pr)})),Ir,Lr=e((()=>{o(),F(),N(),k(),x(),Nt(),U(),It(),Rt(),Ir=class extends Ft(Lt(I)){static get properties(){return{maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},formatter:{type:Object,computed:`_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)`},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},headerFocused:{type:Boolean,value:!1}}}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return T`
			${s(this.disabled,()=>T`
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
					${Mt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,horizontalAlign:`right`,externalValues:this.externalValues,onOpenedChanged:e,content:T`
							<h3>${this.title}</h3>
							<cosmoz-input
								class=${this._fromClasses}
								type="number"
								label=${v(`From`)}
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
								label=${v(`To`)}
								.value=${this._filterInput?.max}
								@value-changed=${e=>{this.set(`_filterInput.max`,e.detail.value)}}
								@blur=${e=>this._onBlur(e)}
								@keydown=${e=>this._onKeyDown(e)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
							></cosmoz-input>
						`})}
				`)}
		`}_computeFormatter(e,t,n){let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}getComparableValue(e,t){if(e==null)return;let n=e;if(t!=null&&(n=this.get(t,e)),n=this.toValue(n),n==null)return;let r=this.maximumFractionDigits;return r===null?n:this.toValue(n.toFixed(r))}renderValue(e,t=this.formatter){let n=this.toNumber(e);if(n!=null)return t.format(n)}},customElements.define(`cosmoz-omnitable-number-range-input`,Ir)})),Rr,zr=e((()=>{o(),z(),F(),k(),H(),R(),Lr(),Y(),qt(),Rr=class extends V(I){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},cellClass:{type:String,value:`number-cell align-right`},width:{type:String,value:`30px`},minWidth:{type:String,value:`30px`},headerCellClass:{type:String,value:`number-header-cell`},maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=G({...e,valuePath:`min`},t),r=G({...e,valuePath:`max`},t);if(!(n==null&&r==null))return Kt(e,t)}getString(e,t){return Gt(e,t)}toXlsxValue({valuePath:e},t){return L(t,e)}getComparableValue(e,t){return G(e,t)}serializeFilter(e,t){if(t==null)return;let n=W(t.min),r=W(t.max);if(!(n==null&&r==null))return Ut(n)+`~`+Ut(r)}deserializeFilter(e,t){if(t==null||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:W(n[1]),max:W(n[2])}:null}renderCell(e,{item:t}){return T`<div class="omnitable-cell-number">
			${Gt(e,t)}
		</div>`}renderEditCell(e,{item:t},n){return T`<cosmoz-input
			type="number"
			@change=${e=>n(e.target.value)}
			.value=${Ht(e,t)}
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
		></cosmoz-omnitable-number-range-input>`}computeSource(e,t){return pn(e,t)}},customElements.define(`cosmoz-omnitable-column-number`,Rr)})),Br,Vr=e((()=>{o(),F(),N(),k(),x(),$n(),Nt(),U(),Rt(),Br=class extends Qn(Lt(I)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return T`
			${s(this.disabled,()=>T`
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
					${Mt({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:T`
							<h3>${this.title}</h3>
							<cosmoz-input
								type="time"
								label=${v(`From time`)}
								step=${this.filterStep}
								.value=${this._filterInput.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-input>
							<cosmoz-input
								type="time"
								label=${v(`Until time`)}
								step=${this.filterStep}
								.value=${this._filterInput.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-input>
						`})}
				`)}
		`}get _fixedDate(){return`1970-01-01`}toDate(e,t,n){let r=typeof e==`string`&&e.length>3&&e.length<=9?this.getAbsoluteISOString(this._fixedDate+`T`+e):e;return super.toDate(r,t,n)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(11,19)}getComparableValue(e,t){if(e==null)return;let n=this._toInputString(t==null?e:this.get(t,e));if(n!=null&&(n=this.toValue(this.getAbsoluteISOString(this._fixedDate+`T`+n)),n!=null))return this.toNumber(n.getTime())}_timeValueChanged(e){let t=e.target.value,n=e.model.item,r=this.toDate(n.date),i=this.toDate(r==null?t:r.toISOString().slice(0,10)+`T`+t);i??(this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,(e=>e).bind(this)))}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})}},customElements.define(`cosmoz-omnitable-time-range-input`,Br)})),Hr,Q,Ur,Wr,Gr,Kr,qr,$,Jr,Yr,Xr,Zr=e((()=>{Te(),R(),hr(),qt(),Hr=`1970-01-01`,Q=(e,t,n)=>Z(typeof e==`string`&&e.length>3&&e.length<=9?rr(Hr+`T`+e):e,t,n),Ur={},Wr=e=>{let t=e||``;return Ur[t]||(Ur[t]=new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})),Ur[t]},Gr=({valuePath:e,locale:t},n)=>{let r=Q(L(n,e||``));return r===void 0?``:r===null?`Invalid Date`:ar(r,Wr(t))},Kr=(e,t)=>e.valuePath?Gr(e,t):``,qr=e=>{let t=Q(e);if(t==null)return null;let n=me(t);return n&&n.slice(11,19)},$=({valuePath:e},t)=>{if(t==null)return;let n=qr(e==null?t:L(t,e));if(n==null)return;let r=Q(rr(Hr+`T`+n));return r==null?r:W(r.getTime())},Jr=(e,t)=>n=>{let r=$(e,n);if(r==null)return!1;let i=$({...e,valuePath:`min`},t),a=$({...e,valuePath:`max`},t);return i==null||a==null?!1:!(r<i||r>a)},Yr=e=>{let t=Q(e);return t==null?``:t.toISOString().slice(11,19).replace(/:/gu,`.`)},Xr=e=>{if(!(e==null||e===``))return Q(typeof e==`string`?e.replace(/\./gu,`:`)+`Z`:e)}})),Qr,$r=e((()=>{o(),z(),F(),k(),H(),Vr(),Y(),Zr(),Qr=class extends V(I){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`time-header-cell`},minWidth:{type:String,value:`63px`},width:{type:String,value:`210px`},flex:{type:String,value:`0`},filterStep:{type:String,value:`1`}}}getFilterFn(e,t){let n=$({...e,valuePath:`min`},t),r=$({...e,valuePath:`max`},t);if(!(n==null&&r==null))return Jr(e,t)}getString(e,t){return Gr(e,t)}toXlsxValue(e,t){return Kr(e,t)}getComparableValue(e,t){return $(e,t)}serializeFilter(e,t){if(t==null)return;let n=Q(t.min),r=Q(t.max);if(!(n==null&&r==null))return Yr(n)+`~`+Yr(r)}deserializeFilter(e,t){if(t==null||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Xr(n[1]),max:Xr(n[2])}:null}renderCell(e,{item:t}){return Gr(e,t)}renderEditCell(e,{item:t},n){return T`<cosmoz-input
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${Gr(e,t)}
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
		></cosmoz-omnitable-time-range-input>`}computeSource(e,t){return pn(e,t)}},customElements.define(`cosmoz-omnitable-column-time`,Qr)})),ei=e((()=>{gn(),Nn(),In(),Zn(),_r(),Or(),Ar(),Fr(),zr(),$r()})),ti,ni=e((()=>{w(),k(),ti=({column:e,item:t,selected:n,folded:r,group:i})=>e?(e.renderGroup??e.renderCell)(e,{item:t,selected:n,folded:r,group:i}):te,customElements.define(`cosmoz-omnitable-group-row`,M(ti,{useShadowDOM:!1}))})),ri,ii=e((()=>{w(),k(),ri=e=>{let{column:t}=e;return P(()=>{let n=0,r=0,i=i=>{e.dispatchEvent(new CustomEvent(`column-resize`,{bubbles:!0,composed:!0,detail:{newWidth:Math.ceil(r+i.pageX-n),column:t}}))},a=()=>{document.removeEventListener(`pointermove`,i),document.removeEventListener(`pointerup`,a)},o=t=>{n=t.pageX,r=e.previousElementSibling.getBoundingClientRect().width,document.addEventListener(`pointermove`,i),document.addEventListener(`pointerup`,a)};return e.addEventListener(`pointerdown`,o),()=>e.removeEventListener(`pointerdown`,o)},[t]),te},customElements.define(`cosmoz-omnitable-resize-nub`,M(ri))})),ai,oi,si,ci,li=e((()=>{w(),u(),l(),ai=({column:e,on:t,descending:n,setOn:r,setDescending:i})=>{let{name:a,title:o}=e??{};return T`<button
		class="sg"
		title=${ye(o)}
		data-on=${ye(a===t&&(n?`desc`:`asc`)||void 0)}
		@click=${e=>{let t=e.currentTarget?.dataset.on;t||(r(a),i(!1)),t===`asc`?i(!0):t===`desc`&&(r(),i(!1))}}
	>
		<span>${o}</span> ${a===t?y({width:`12`,height:`12`}):c({width:`12`,height:`12`})}
	</button>`},oi=({columns:e,...t})=>e?.map(e=>ai({column:e,...t})),si=()=>T`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,groupOn:t,setGroupOn:n,groupOnDescending:r,setGroupOnDescending:i}={})=>oi({columns:e?.filter?.(e=>e.groupOn),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`,ci=()=>T`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,sortOn:t,setSortOn:n,descending:r,setDescending:i}={})=>oi({columns:e?.filter?.(e=>e.sortOn&&!e.noSort),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`}));function ui(e,t,{suffix:n=``,read:r,write:i,ready:a=!0,multi:o}={}){let s=Se({param:t,suffix:n,link:o?mi:pi,write:i??oe}),c=C(()=>{if(t==null)return!1;if(o){let e=lt(t+n);return Object.keys(e).length>0}return Je(t+n)!==void 0},[]),[l,u]=A(()=>{if(t==null)return e;if(o){let i=lt(t+n,r);return Object.keys(i).length>0?i:e}return Je(t+n,r)??e}),d=E(e=>u(t=>{let n=pe(e,t);return s.param!=null&&at(s.link(s.param+s.suffix,n,s.write),null,{notify:!1}),n}),[]);return P(()=>{s.param==null||!a||c||e!=null&&d(e)},[a]),[l,d]}var di,fi,pi,mi,hi=e((()=>{Ye(),_e(),he(),tt(),w(),di=e=>(t,n,r=oe)=>{let i=qe(),a=new URLSearchParams(i.hash.replace(`#`,``));return e(t,n,r,a),`#!`+Object.assign(i,{hash:a}).href.replace(location.origin,``)},fi=e=>e==null||e===``,pi=di((e,t,n,r)=>fi(n(t))?r.delete(e):r.set(e,n(t))),mi=di((e,t,n,r)=>{let i=Object.entries(t),a=i.map(n).filter(([,e])=>e!==void 0);if(a.length===0&&i.length>0)return;let o=e;Array.from(r.keys()).filter(e=>e.startsWith(o)).forEach(e=>r.delete(e)),a.forEach(([t,n])=>fi(n)?r.delete(e+t):r.set(e+t,n))})})),gi,_i,vi,yi,bi,xi=e((()=>{w(),hi(),gi=e=>[!0,`true`,1,`yes`,`on`].includes(e),_i=e=>e===``||(e==null?void 0:gi(e)),vi=(e,t,n)=>E(r=>{e(r),n(e=>({...e,[t]:r}))},[e,t,n]),yi=(e,t,{settings:n,setSettings:r,resetRef:i,ready:a=!0})=>{let[o,s]=ui(n.sortOn,t,{suffix:`-sortOn`,ready:a}),[c,l]=ui(_i(n.descending),t,{suffix:`-descending`,read:_i,ready:a}),[u,d]=ui(n.groupOn,t,{suffix:`-groupOn`,ready:a}),[f,p]=ui(_i(n.groupOnDescending),t,{suffix:`-groupOnDescending`,read:_i,ready:a}),m=C(()=>e.find(e=>e.name===o),[e,o]),h=C(()=>e.find(e=>e.name===u),[e,u]),g={groupOn:u,setGroupOn:vi(d,`groupOn`,r),groupOnDescending:f,setGroupOnDescending:vi(p,`groupOnDescending`,r),sortOn:o,setSortOn:vi(s,`sortOn`,r),descending:c,setDescending:vi(l,`descending`,r),columns:e},_=C(()=>g,Object.values(g)),v=E(e=>{s(e.sortOn),d(e.groupOn),l(e.descending),p(e.groupOnDescending)},[]);return P(()=>void(i.current=v),[]),{..._,sortAndGroup:_,groupOnColumn:h,sortOnColumn:m}},bi=Ce(),customElements.define(`sort-and-group-provider`,bi.Provider),customElements.define(`sort-and-group-consumer`,M(({render:e})=>e(Oe(bi)),{useShadowDOM:!1}))})),Si,Ci,wi=e((()=>{w(),ke(),ii(),li(),x(),xi(),Si=({data:e,columns:t,groupOnColumn:n,filters:r,setFilterState:i,sortAndGroup:{sortOn:a,setSortOn:o,descending:c,setDescending:l}={}})=>De(t,e=>e.name,t=>[T`<div
				class="cell ${t.headerCellClass} header-cell"
				part="cell header-cell cell-${t.name} header-cell-${t.name}"
				?hidden="${t===n}"
				title="${t.headerTitleFn(t)}"
				name="${t.name}"
			>
				${t.renderHeader(t,r[t.name]??{},e=>i(t.name,e),t.source(t,e))}
				${s(!t.noSort,()=>ai({on:a,setOn:o,descending:c,setDescending:l,column:t}))}
			</div>`,T`<cosmoz-omnitable-resize-nub
				.column="${t}"
				name="${t.name}"
			></cosmoz-omnitable-resize-nub>`]),Ci=({columns:e,settingsConfig:t,hideSelectAll:n,...r})=>{let i=Oe(bi);return T`
		${s(e,e=>Si({columns:e,sortAndGroup:i,...r}))}
		${s(!n,()=>T` <cosmoz-omnitable-settings
					.config=${t}
					part="settings"
				></cosmoz-omnitable-settings>`)}
	`},customElements.define(`cosmoz-omnitable-header-row`,M(Ci,{useShadowDOM:!1}))})),Ti,Ei,Di=e((()=>{w(),S(),Ti=t`
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
`,Ei=({column:e})=>T`
	<div class="label" title="${e.title}" part="item-expand-label">
		${e.title}
	</div>
	<div class="value" part="item-expand-value">
		<slot></slot>
	</div>
`,customElements.define(`cosmoz-omnitable-item-expand-line`,M(Ei,{styleSheets:[h(Ti)]}))})),Oi,ki=e((()=>{w(),k(),it(),Di(),Oi=({columns:e,item:t,selected:n,expanded:r,groupOnColumn:i})=>st(e,e=>T`<cosmoz-omnitable-item-expand-line
				.column=${e}
				?hidden=${e===i}
				exportparts="item-expand-label, item-expand-value"
				>${e.renderCell(e,{item:t,selected:n,expanded:r})}</cosmoz-omnitable-item-expand-line
			>`),customElements.define(`cosmoz-omnitable-item-expand`,M(Oi,{useShadowDOM:!1}))})),Ai,ji,Mi=e((()=>{w(),ke(),Ai=(e,t,n)=>e.editable?e.renderEditCell(e,t,n(e,t.item)):e.renderCell(e,t),ji=({columns:e,groupOnColumn:t,item:n,index:r,selected:i,expanded:a,onItemChange:o})=>De(e,e=>e.name,e=>T`<div
				class="cell itemRow-cell ${e.cellClass??``}"
				part="cell itemRow-cell cell-${e.name} itemRow-cell-${e.name}"
				?hidden="${e===t}"
				?editable="${e.editable}"
				title="${e.cellTitleFn(e,n)}"
				name="${e.name}"
			>
				${Ai(e,{item:n,index:r,selected:i,expanded:a},o)}
			</div>`),customElements.define(`cosmoz-omnitable-item-row`,M(ji,{useShadowDOM:!1}))})),Ni,Pi,Fi=e((()=>{S(),Ni=t`
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
`,Pi=t`
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

	${Ni}

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
`})),Ii,Li,Ri=e((()=>{Qe(),Ii=e=>{let t=e.replace(/"/gu,`""`);return t.search(/("|,|\n)/gu)>=0?`"`+t+`"`:e},Li=(e,t,n)=>{let r=e.map(e=>Ii(e.title)).join(`;`)+`
`,i=t.map(t=>e.map(e=>{let n=e.getString(e,t);return n==null?``:Ii(String(n))}).join(`;`)+`
`);i.unshift(r),Ge(new File(i,n,{type:`text/csv;charset=utf-8`}))}})),zi,Bi,Vi=e((()=>{Qe(),rt(),zi=(e,t)=>{let n=e.map(e=>e.title),r=t.map(t=>e.map(e=>e.toXlsxValue(e,t)??``));return r.unshift(n),r},Bi=(e,t,n,r)=>{let i=zi(e,t),a=new ot(n).addSheetFromData(i,r).generate();Ge(new File([a],n,{type:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`}))}})),Hi,Ui=e((()=>{Pe(),l(),xe(),N(),k(),Ri(),Vi(),Hi=({columns:e,selectedItems:t,csvFilename:n,xlsxFilename:i,xlsxSheetname:a,topPlacement:o})=>T`<cosmoz-bottom-bar
		id="bottomBar"
		?active=${!de(t.length)}
		part="bottomBar"
		exportparts="bar: bottomBar-bar, info: bottomBar-info, buttons: bottomBar-buttons"
	>
		<slot name="info" slot="info">
			${v(`{count} selected item`,{count:t.length})}
		</slot>
		<slot name="actions" id="actions"></slot>
		<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
		<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>

		<cosmoz-dropdown-menu part="extra" slot="extra" .placement=${o}>
			${r({slot:`button`})}
			<cosmoz-button
				@click=${()=>Li(e,t,n)}
			>
				${v(`Save selected items as CSV`)}
			</cosmoz-button>
			<cosmoz-button
				@click=${()=>Bi(e,t,i,a)}
			>
				${v(`Save selected items as XLSX`)}
			</cosmoz-button>
			<slot name="download-menu"></slot>
		</cosmoz-dropdown-menu>
	</cosmoz-bottom-bar>`})),Wi,Gi=e((()=>{k(),x(),Wi=({allSelected:e,onAllCheckboxChange:t,sortAndGroup:n,dataIsValid:r,data:i,columns:a,filters:o,groupOnColumn:c,setFilterState:l,settingsConfig:u,hideSelectAll:d})=>T`<sort-and-group-provider .value=${n}>
		<div class="header" id="header" part="header">
			${s(!d,()=>T`<input
						class="checkbox all"
						type="checkbox"
						.checked=${e}
						@input=${t}
						?disabled=${!r}
						part="all"
					/>`)}
			${s(d,()=>T` <cosmoz-omnitable-settings
						.newLayout="${!0}"
						.config=${u}
					></cosmoz-omnitable-settings>`)}

			<cosmoz-omnitable-header-row
				part="headerRow"
				.data=${i}
				.columns=${a}
				.filters=${o}
				.groupOnColumn=${c}
				.setFilterState=${l}
				.settingsConfig=${u}
				.hideSelectAll=${d}
			></cosmoz-omnitable-header-row>
		</div>
	</sort-and-group-provider>`})),Ki,qi,Ji=e((()=>{w(),Ki=ne`
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
`,qi=({settingsConfig:e})=>{let{columns:t,collapsed:n}=e,r=t.filter(e=>!n.some(t=>t.name===e.name));return T`<div class="skeleton">
		${Array.from({length:5},()=>T`<div>
					<div class="checkbox"></div>
					${r.map(e=>T`<div
								class="cell"
								part=${`cell-${e.name}`}
								name=${e.name}
							></div>`)}
				</div>`)}
	</div>`},customElements.define(`cosmoz-omnitable-skeleton`,M(qi,{styleSheets:[Ki]}))})),Yi,Xi=e((()=>{Ji(),N(),k(),x(),mt(),Yi=(e,t)=>{let{settingsConfig:n}=e,{processedItems:r,dataIsValid:i,filterIsTooStrict:a,loading:o,displayEmptyGroups:c,compareItemsFn:l,setSelectedItems:u,renderItem:d,renderGroup:f,error:p}=t;return T`${s(!o&&!i&&!p,()=>T`<div class="tableContent-empty">
					<slot name="empty-set-message">
						${Fe({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
						<div class="tableContent-empty-message">
							<h3>${v(`Working set empty`)}</h3>
							<p>${v(`No data to display`)}</p>
						</div>
					</slot>
				</div>`)}
		${s(a,()=>T`<div class="tableContent-empty">
					${Fe({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
					<div>
						<h3>${v(`Filter too strict`)}</h3>
						<p>${v(`No matches for selection`)}</p>
					</div>
				</div>`)}
		${s(o&&!r.length,()=>T`<div class="tableContent-empty overlay">
					<cosmoz-omnitable-skeleton
						.settingsConfig=${n}
					></cosmoz-omnitable-skeleton>
				</div>`)}
		${s(o&&r.length,()=>T`<div class="tableContent-empty overlay spinner">
					<cz-spinner></cz-spinner>
				</div>`)}
		${s(p,()=>T`<div class="tableContent-empty overlay">
					${Me({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
					<div class="tableContent-empty-message">
						<h3>${v(`Error loading data`)}</h3>
						<p>${p.message}</p>
					</div>
				</div>`)}
		<div class="tableContent-scroller" id="scroller" part="scroller">
			<cosmoz-grouped-list
				id="groupedList"
				.data=${r}
				@selected-items-changed=${e=>u(e.detail.value)}
				.displayEmptyGroups=${c}
				.compareItemsFn=${l}
				.renderItem=${d}
				.renderGroup=${f}
			></cosmoz-grouped-list>
			<slot name="extraContent"></slot>
		</div>`}})),Zi,Qi,$i=e((()=>{S(),Fi(),Zi=t`
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
	${Ni}
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
`,Qi=t`
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
`})),ea,ta,na=e((()=>{w(),he(),ea=e=>{let t=parseInt(e,10);return isFinite(t)?t:void 0},ta=e=>{let{config:t}=e,{settings:n,setSettings:r,collapsed:i}=t,a=Se({collapsed:i,settings:n.columns,setSettings:E(e=>r(t=>({...t,columns:e})),[r])});return{...t,onDown:E(e=>{e.target.closest(`.pull`)&&(a.handle=e.currentTarget)},[a]),onDragStart:E(e=>{let{target:t}=e,n=ea(t.dataset.index);if(!a.handle?.contains(t)||n==null)return e.preventDefault();a.handle=null,e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`omnitable/sort-index`,n),e.dataTransfer.setData(`text/plain`,n),setTimeout(()=>t.classList.add(`drag`),0),t.addEventListener(`dragend`,e=>e.target.classList.remove(`drag`),{once:!0})},[a]),onDragEnter:E(e=>{let t=e.currentTarget;t===e.target&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`,t.classList.add(`dragover`))},[]),onDragOver:E(e=>{e.preventDefault(),e.currentTarget.classList.add(`dragover`)},[]),onDragLeave:E(e=>{let t=e.currentTarget;t.contains(e.relatedTarget)||t.classList.remove(`dragover`)},[]),onDrop:E(e=>{let t=ea(e.dataTransfer.getData(`omnitable/sort-index`)),n=ea(e.currentTarget.dataset.index),{settings:r,setSettings:i}=a;e.currentTarget.classList.remove(`dragover`),e.preventDefault();let o=r.slice();o.splice(n+(t>=n?0:-1),0,o.splice(t,1)[0]),i(o)},[a]),onToggle:E(e=>{let{settings:t,setSettings:n}=a,r=t.map(e=>({...e,disabled:e.disabled||a.collapsed?.some(t=>t.name===e.name)})),i=ea(e.target.closest(`[data-index]`)?.dataset.index);r.splice(i,1,{...t[i],disabled:!e.target.checked,priority:e.target.checked?t.reduce((e,t)=>Math.max(e,t.priority),0)+1:t[i].priority}),n(r)},[a])}}})),ra,ia,aa,oa,sa=e((()=>{Ue(),ct(),Le(),l(),S(),xe(),w(),N(),x(),li(),$i(),na(),ra=[Be({apply({availableHeight:e,elements:t}){Object.assign(t.floating.style,{maxHeight:`${Math.max(0,e)}px`})}}),...Ie],ia=({onDragStart:e,onDragEnter:t,onDragOver:n,onDragLeave:r,onDrop:i,onDown:a,onToggle:o,collapsed:s,filters:c})=>(l,u)=>{let d=!!s?.find(e=>e.name===l.name),f=!l.disabled&&!d;return T` <div
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
			<button class="pull">${Ae({width:`16`,height:`16`})}</button>
			<label class="title" ?has-filter=${!de(c[l.name]?.filter)}
				>${l.title}</label
			>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${f}
				@click=${o}
				.indeterminate=${d}
			/>
		</div>`},aa=e=>{let{settings:t,settingsId:n,onSave:r,onReset:i,hasChanges:a,opened:o,setOpened:c,...l}=ta(e);return T` <div class="headline">
			<span> ${v(`Sort and filter`)} </span>
			<cosmoz-button
				variant="tertiary"
				aria-label="${v(`Close settings`)}"
				@click=${e=>{let t=e.currentTarget;t?.focus(),t?.blur()}}
			>
				${d({width:`16`,height:`16`})}
			</cosmoz-button>
		</div>

		<div class="contents">
			<div
				class="heading"
				?data-opened=${o.columns}
				@click=${()=>c(e=>({...e,columns:!e.columns}))}
				part="columns columns-heading"
			>
				${v(`Columns`)} ${y({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse
				?opened="${o.columns}"
				part="columns columns-content"
			>
				<div class="list">${t.columns?.map(ia(l))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${o.sort}
				@click=${()=>c(e=>({...e,sort:!e.sort}))}
			>
				${v(`Sort on`)} ${y({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse ?opened=${o.sort}> ${ci()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${o.group}
				@click=${()=>c(e=>({...e,group:!e.group}))}
				part="groups groups-heading"
			>
				${v(`Group on`)} ${y({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse ?opened=${o.group} part="groups groups-heading"
				>${si()}</cosmoz-collapse
			>
		</div>

		${s(n,()=>T`<div class="buttons">
					<cosmoz-button
						variant="tertiary"
						@click=${i}
						?disabled=${!a}
					>
						${v(`Reset`)}
					</cosmoz-button>
					<cosmoz-button
						variant="primary"
						@click=${r}
						?disabled=${!a}
					>
						${v(`Save`)}
					</cosmoz-button>
				</div>`)}`},customElements.define(`cosmoz-omnitable-settings-ui`,M(aa,{styleSheets:[h(Zi)]})),oa=({config:e,newLayout:t})=>T`
	<cosmoz-dropdown
		.placement="${t?`bottom-start`:`bottom-end`}"
		.middleware="${ra}"
	>
		<div title="${v(`Sort and filter`)}" slot="button">
			${s(t,()=>T`<div class="headerDots">...</div>`,()=>T` ${b({width:`20`,height:`20`,styles:`color: var(--cz-color-text-primary)`})}`)}
			${s(e?.badge,()=>T`<div class="badge"></div>`)}
		</div>
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${e}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`,customElements.define(`cosmoz-omnitable-settings`,M(oa,{styleSheets:[h(Qi)]}))})),ca,la,ua,da,fa,pa=e((()=>{re(),ca=[`sortOn`,`descending`,`groupOn`,`groupOnDescending`],la=e=>t=>typeof t==`object`&&!!t&&`name`in t&&t.name===e,ua=(e=[],t=[],n=[])=>{let r=t.filter(t=>e.some(la(t.name))),i=e.filter(e=>e.name!=null&&!t.some(la(e.name))&&!n.some(la(e.name))),a=n.filter(e=>!t.some(la(e.name)));return[...r,...a.flatMap(t=>{let n=e.find(e=>e.name===t.name);return n?{...t,title:n.title??t.title??``,minWidth:parseInt(n.minWidth??`0`,10)}:[]}),...i.map(e=>{let{name:t,title:n,priority:r,minWidth:i,width:a,flex:o}=e;return{name:t??``,title:n??``,priority:r??0,minWidth:parseInt(i??`0`,10),width:parseInt(a??`0`,10),flex:parseInt(o??`0`,10)}})]},da=(e,t)=>({...t,...Ee(Array.from(ca))(e),columns:e.columns?.map(Ee([`name`,`priority`,`width`,`flex`,`disabled`]))}),fa=({columns:e,settings:t,savedSettings:n,initial:r})=>({...Object.fromEntries(ca.flatMap(e=>r?.[e]==null?[]:[[e,r[e]]])),...n?Ee(Array.from(ca))(n):{},...t,columns:ua(e,t?.columns,n?.columns)})})),ma,ha=e((()=>{ma=({prefix:e=`omnitable-`}={})=>({write:async(t,n)=>{let r=e+t;try{n?localStorage.setItem(r,JSON.stringify(n)):localStorage.removeItem(r)}catch(e){console.error(e)}},read:async t=>{if(!t)return null;try{let n=localStorage.getItem(e+t);return n==null?null:JSON.parse(n)}catch(e){return console.error(e),null}}})})),ga,_a,va=e((()=>{w(),ha(),ga=Ce(ma),_a=()=>{let e=Oe(ga);return C(()=>e(),[e])}})),ya=e((()=>{va()})),ba,xa=e((()=>{w(),ya(),pa(),ba=(e,t,n,r)=>{let[i,a]=A(e?void 0:null),{read:o,write:s}=_a();return P(async()=>{e&&a(await o(e))},[e,o]),{settingsId:e,savedSettings:i,onSave:E(async()=>{if(!e)return;let r=da(t,i);await s(e,r),n(),a(r)},[t,i]),onReset:E(async t=>{n(),t.shiftKey&&(await s(e),a(null)),r?.()},[r]),hasChanges:t!=null}}})),Sa,Ca=e((()=>{w(),dn(),pa(),xa(),Sa=({settingsId:e,host:t})=>{let n=C(()=>Object.fromEntries(ca.map(e=>[e,t[e]])),[]),r=se(),i=E(()=>{r.current?.(n)},[n]),[a,o]=A(),[s,c]=A({columns:!0,sort:!0}),{savedSettings:l,...u}=ba(e,a,o,i),{enabledColumns:d,disabledFiltering:f}=t,p=un(t,{enabledColumns:d,disabledFiltering:f}),m=C(()=>fa({columns:p,settings:a,savedSettings:l,initial:n}),[p,a,l]),h=C(()=>m.columns.map(e=>p.find(t=>t.name===e.name)).filter(Boolean),[p,...m.columns.map(e=>e.name)]);return{...u,savedSettings:l,opened:s,setOpened:c,settings:m,columns:h,setSettings:o,resetRef:r}}})),wa=e((()=>{sa(),Ca()})),Ta,Ea,Da=e((()=>{Ta=e=>Number.isFinite(e)?e:0,Ea=(e,t)=>{let n=[],[r,i]=e.reduce(([e,t],{width:n,flex:r})=>[e+n,t+r],[0,0]),a=t-r,o=Ta(a/i),s=0,c=0,l=0;for(let t=0;t<e.length;t++){let{width:i,minWidth:u,flex:d}=e[t];if(u>i+(a>=0?o*d:i*a/r)){s+=i,c+=u,l+=d,n[t]=u;continue}if(d===0){s+=i,c+=i,n[t]=i;continue}}r-=s,a=t-c-r,i-=l,o=Ta(a/i);for(let t=0;t<e.length;t++){if(n[t]!=null)continue;let{width:i,flex:s}=e[t];n[t]=i+(a>=0?o*s:i*a/r)}return n}})),Oa,ka,Aa=e((()=>{Oa=Symbol(`index`),ka=(e,t)=>{if(typeof e.findLastIndex==`function`)return e.findLastIndex(t);for(let n=e.length-1;n>=0;n--)if(t(e[n],n,e))return n;return-1}})),ja,Ma,Na,Pa=e((()=>{Da(),Aa(),ja=(e,t)=>{let n=ka(e,e=>e!=null&&e>0),r=(e,t)=>`.cell[name="${e}"], cosmoz-omnitable-skeleton::part(cell-${e}){width: ${Math.floor(t)}px;padding: 0 min(3px, ${t/2}px)}`,i=e=>`cosmoz-omnitable-resize-nub[name="${e}"]{display:none}`,a=e=>`cosmoz-omnitable-resize-nub[name="${e}"], .cell[name="${e}"]{display:none}`;return t.map((t,o)=>{let s=e[o];if(s==null||s===0)return a(t.name);let c=r(t.name,s);return o===n?`${c}\n${i(t.name)}`:c}).join(`
`)},Ma=(e,t,n)=>{let r=e.filter(e=>!e.hidden),i=r.reduce((e,{width:t})=>e+t,0);if(r.length>1&&i>t)return Ma(r.slice(1),t,n);let a=r.reduce(([e,t],n,r)=>[Math.max(e,n.index),n.index>e?r:t],[-1,-1])[1];return a!==-1&&(r[a].flex=1),Ea(r,t).reduce((e,t,n)=>(e[r[n].index]=t,e),Array(n).fill(void 0))},Na=(e,t)=>e.length===0?`.cell {display: none;}`:ja(e,t)})),Fa,Ia=e((()=>{w(),Fa=({host:e,canvasWidth:t,layout:n,setSettings:r})=>{let i=se();i.current=e=>r(r=>{let i=r.columns,{detail:{newWidth:a,column:o}}=e,s=i.findIndex(e=>e.name===o.name),c=[],l=i.reduce((e,t)=>Math.max(e,t.priority),-1/0);for(let e=0;e<n.length;e++)if(c[e]={...i[e]},e<s&&n[e]&&(c[e].width=n[e],c[e].flex=0,c[e].priority=l),e===s){let r=n.reduce((e,t,n)=>n<s&&t?e-t:e,t);c[e].width=Math.min(r,Math.max(a,i[e].minWidth)),c[e].flex=0,c[e].priority=l}return{...r,columns:c}}),P(()=>{let t=e=>i.current?.(e);return e.addEventListener(`column-resize`,t),()=>e.removeEventListener(`column-resize`,t)},[])}})),La,Ra,za=e((()=>{w(),La=88,Ra=(e,t)=>P(()=>{let n=new ResizeObserver(([e])=>{e.contentRect?.width!==0&&requestAnimationFrame(()=>t(e.contentRect?.width-La))});return n.observe(e),()=>n.unobserve(e)},[])})),Ba,Va=e((()=>{w(),za(),Ba=e=>{let[t,n]=A(()=>e.getBoundingClientRect().width-La);return Ra(e,n),t}})),Ha,Ua,Wa,Ga=e((()=>{w(),he(),_e(),Ha=(e,t)=>{let n=C(()=>{let t=!1,n,r=()=>{t&&(n=requestAnimationFrame(r),e()&&(t=!1))};return{start:()=>{t=!0,cancelAnimationFrame(n),n=requestAnimationFrame(r)},stop:()=>{t=!1,cancelAnimationFrame(n)}}},[]);P(()=>{n.start()},t),P(()=>()=>n.stop(),[])},Ua=(e=0,t=0)=>Math.abs(e-t)<.1,Wa=(e,t=1.9,n=le)=>{let r=Se({target:e});Ha(E(()=>{if(!r.tween)return r.tween=r.target,n(r.tween),!0;if(r.target.every((e,t)=>r.tween[t]===e))return n(r.tween),!0;r.tween=r.target.map((e,n)=>Ua(r.tween[n],e)?e:(r.tween[n]??0)+((e??0)-(r.tween[n]??0))/t||0),n(r.tween)},[]),[e])}})),Ka,qa=e((()=>{w(),Pa(),Ka=({canvasWidth:e,groupOnColumn:t,config:n,miniColumn:r})=>C(()=>{if(!Array.isArray(n)||e==null||e===0)return[];let i=n.map((e,n)=>({minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,name:e.name,index:n,hidden:e.name===t?.name||e.disabled})).map(e=>r?{...e,hidden:r.name!==e.name}:e).sort(({index:e,priority:t},{index:n,priority:r})=>t===r?n-e:t-r);return Ma(i,e,i.length)},[e,t,n])})),Ja,Ya=e((()=>{w(),Ja=({host:e,canvasWidth:t,columns:n})=>{let r=e.miniBreakpoint??480,i=C(()=>t<=r,[t,r]),[a,...o]=C(()=>i?n?.filter(e=>e.mini!=null).sort((e,t)=>(e.mini??0)-(t.mini??0)):[],[n,i])??[],s=!!a;return P(()=>{e.toggleAttribute(`mini`,s)},[s]),{isMini:s&&i,miniColumn:a,miniColumns:o}}})),Xa,Za,Qa=e((()=>{w(),Pa(),Ia(),Va(),Ga(),qa(),Ya(),he(),Xa=e=>{let t=C(()=>new CSSStyleSheet,[]);return P(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,t]},[]),t},Za=({host:e,columns:t,settings:n,setSettings:r,resizeSpeedFactor:i,sortAndGroupOptions:a})=>{let o=Ba(e),{isMini:s,miniColumn:c,miniColumns:l}=Ja({host:e,canvasWidth:o,columns:t}),{groupOnColumn:u}=a,d=Ka({canvasWidth:o,groupOnColumn:u,miniColumn:c,config:n.columns}),f=Xa(e),p=C(()=>n.columns.reduce((e,n,r)=>d[r]!=null||n.name===u?.name||n.disabled?e:[...e,t.find(e=>e.name===n.name)],[]),[t,n,d]),m=Se({columns:n.columns});return Wa(d,i,e=>{let t=Na(e,m.columns);f.replace(t)}),Fa({host:e,canvasWidth:o,layout:d,setSettings:e=>r(e(n))}),{isMini:s,collapsedColumns:p,miniColumns:l}}})),$a,eo=e((()=>{$a=({host:e,...t})=>{let{csvFilename:n=`omnitable.csv`,xlsxFilename:r=`omnitable.xlsx`,xlsxSheetname:i=`Omnitable`,topPlacement:a=`top-end`}=e;return{csvFilename:n,xlsxFilename:r,xlsxSheetname:i,topPlacement:a,...t}}})),to,no=e((()=>{w(),to=({host:e,selectedItems:t,data:n,sortAndGroupOptions:r,collapsedColumns:i,settings:a,filterFunctions:o,settingS:s,filters:c,...l})=>{let u=n&&n.length>0&&t.length===n.length,d=t=>{t.target.checked?e.shadowRoot.querySelector(`#groupedList`).selectAll():e.shadowRoot.querySelector(`#groupedList`).deselectAll()},{groupOnColumn:f}=r,p=C(()=>[f,...i,...a.columns.filter(e=>e.disabled)].some(e=>e&&Object.keys(o).includes(e.name)),[o,a,i]),m=C(()=>({...s,collapsed:i,badge:p,filters:c}),[s,i,p,c]);return P(()=>{let t=e.shadowRoot.querySelector(`#tableContent`),n=new ResizeObserver(t=>requestAnimationFrame(()=>{e.style.setProperty(`--ot-height`,t[0]?.contentRect.height+`px`)}));return n.observe(t),()=>n.unobserve(t)},[]),{allSelected:u,onAllCheckboxChange:d,data:n,settingsConfig:m,filters:c,groupOnColumn:f,sortAndGroup:r.sortAndGroup,...l}}})),ro,io,ao,oo,so,co=e((()=>{l(),xe(),w(),x(),Aa(),Y(),ro=e=>e?`groupRow groupRow-folded`:`groupRow`,io=({item:e,index:t})=>n=>s(n?.length>0,()=>T`
				<div class="itemRow-minis" part="item-minis">
					${n.map(n=>T`<div
								class="itemRow-mini"
								part="item-mini item-mini-${n.name}"
							>
								${(n.renderMini??n.renderCell)(n,{item:e,index:t})}
							</div>`)}
				</div>
			`),ao=({columns:e,collapsedColumns:t,miniColumns:n,onItemClick:r,onCheckboxChange:i,dataIsValid:a,groupOnColumn:o,onItemChange:s,rowPartFn:c})=>(l,u,{selected:d,expanded:f,toggleCollapse:p})=>T`
		<div
			?selected=${d}
			part="${[`itemRow`,`itemRow-${l[Oa]}`,c?.(l,u)].filter(Boolean).join(` `)}"
			.dataIndex=${l[Oa]}
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
					?hidden="${de(t.length)}"
					?aria-expanded="${f}"
					@click="${p}"
				>
					${y({width:`16`,height:`16`})}
				</button>
			</div>
			${io({item:l,index:u})(n)}
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
	`,oo=({onCheckboxChange:e,dataIsValid:t,groupOnColumn:n})=>(r,i,{selected:a,folded:o,toggleFold:s})=>T` <div
			class="${ro(o)}"
			part="groupRow groupRow-${r[Oa]}"
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
				${y({width:`16`,height:`16`})}
			</button>
		</div>`,so=({host:e,error:t,dataIsValid:n,processedItems:r,columns:i,collapsedColumns:a,miniColumns:o,sortAndGroupOptions:s,rowPartFn:c,...l})=>{let{loading:u=!1,displayEmptyGroups:d=!1,compareItemsFn:f}=e,p=se({shiftKey:!1,ctrlKey:!1}),m=E(t=>{let n=t.target.dataItem,r=t.target.checked;p.current.shiftKey?e.shadowRoot.querySelector(`#groupedList`).toggleSelectTo(n,r):p.current.ctrlKey?(t.target.checked=!0,e.shadowRoot.querySelector(`#groupedList`).selectOnly(n)):e.shadowRoot.querySelector(`#groupedList`).toggleSelect(n,r),t.preventDefault(),t.stopPropagation()},[]);P(()=>{let e=({shiftKey:e,ctrlKey:t})=>{p.current={shiftKey:e,ctrlKey:t}};return window.addEventListener(`keydown`,e),window.addEventListener(`keyup`,e),()=>{window.removeEventListener(`keydown`,e),window.removeEventListener(`keyup`,e)}},[]);let h=E(t=>{let n=t.composedPath();n.slice(0,n.indexOf(t.currentTarget)).find(e=>e.matches?.(`a, .checkbox, .expand`))||e.dispatchEvent(new window.CustomEvent(`omnitable-item-click`,{bubbles:!0,composed:!0,detail:{item:t.currentTarget.dataItem,index:t.currentTarget.dataIndex}}))},[]),{groupOnColumn:g}=s,_=E((t,n)=>r=>mn(e,t,n,r),[]);return{...l,processedItems:r,dataIsValid:n,filterIsTooStrict:n&&r.length<1,loading:u,compareItemsFn:f,displayEmptyGroups:d,error:t,renderItem:C(()=>ao({columns:i,collapsedColumns:a,miniColumns:o,onItemClick:h,onCheckboxChange:m,dataIsValid:n,groupOnColumn:g,onItemChange:_,rowPartFn:c}),[i,a,h,m,n,g,_,c]),renderGroup:C(()=>oo({onCheckboxChange:m,dataIsValid:n,groupOnColumn:g}),[m,n,g])}}})),lo,uo=e((()=>{lo=(e,t)=>{if(e===t)return 0;if(e==null)return-1;if(t==null)return 1;let n=typeof e,r=typeof t;return n===`object`&&r===`object`?e.toString()<t.toString()?-1:1:n===`number`&&r===`number`?e-t:n===`string`&&r===`string`?e<t?-1:1:n===`boolean`&&r===`boolean`?e?-1:1:(console.warn(`unsupported sort`,n,e,r,t),0)}})),fo,po,mo,ho,go,_o,vo=e((()=>{_e(),w(),uo(),dn(),hi(),Aa(),fo=(e,t)=>(n,r)=>lo(e(n),e(r))*(t?-1:1),po=e=>e.replace(/([a-z0-9])([A-Z])/gu,`$1-$2`).toLowerCase(),mo=(e,t)=>{!e||!t||Object.entries(t).forEach(([t,n])=>{e[J].__ownChange=!0,e[J][t]=n,e[J].__ownChange=!1,e[J].dispatchEvent(new CustomEvent(`${po(t)}-changed`,{bubbles:!0,detail:{value:n}}))})},ho=(e,t)=>Object.assign(e,{[Oa]:t}),go=Symbol(`unparsed`),_o=({data:e,columns:t,hashParam:n,sortAndGroupOptions:r,noLocalSort:i,noLocalFilter:a})=>{let{groupOnColumn:o,groupOnDescending:s,sortOnColumn:c,descending:l}=r,u=E(([e,n])=>{let r=t.find(({name:t})=>t===e);return r==null?[e,void 0]:[e,n.filter&&r.serializeFilter(r,n.filter)]},[t]),d=E(([e,n])=>{let r=t.find(({name:t})=>t===e);if(r==null)return[e,{[go]:n}];let i={filter:r.deserializeFilter(r,n)};return mo(r,i),[e,i]},[t]),[f,p]=ui({},n,{multi:!0,suffix:`-filter--`,write:u,read:d}),m=E((e,n)=>p(r=>{let i=pe(n,r[e]);return mo(t.find(t=>t.name===e),i),{...r,[e]:{...r[e],...i}}}),[t,p]),h=C(()=>Object.fromEntries(t.map(e=>[e.name,!e.noLocalFilter&&e.getFilterFn(e,f[e.name]?.filter)]).filter(([,e])=>!!e)),[t,...C(()=>Object.values(f).map(e=>e.filter),[f])]),g=C(()=>!Array.isArray(e)||e.length===0?[]:Object.entries(h).length===0||a?e.slice():e.filter(e=>Object.values(h).every(t=>t(e))),[e,h,a]),_=C(()=>{if(!i&&!o&&c!=null&&c.sortOn!=null)return g.slice().sort(fo(e=>c.getComparableValue({...c,valuePath:c.sortOn},e),l));if(o!=null&&o.groupOn!=null){let e=g.reduce((e,t)=>{let n=o.getComparableValue({...o,valuePath:o.groupOn},t);if(n===void 0)return e;let r=e.find(e=>e.id===n);return r?(r.items.push(t),e):(r={id:n,name:n,items:[t]},[...e,r])},[]);return e.sort(fo(e=>o.getComparableValue({...o,valuePath:o.groupOn},e.items[0]),s)),!c||i?e:e.filter(e=>Array.isArray(e.items)).map(e=>(e.items.sort(fo(e=>c.getComparableValue({...c,valuePath:c.sortOn},e),l)),e))}return g},[g,o,s,c,l,i]),v=C(()=>{let e=0,t=0,n=[];return _.forEach(r=>{if(Array.isArray(r.items)){ho(r,t++),r.items.forEach(t=>{ho(t,e++),n.push(t)});return}return ho(r,e++),n.push(r)},[]),n},[_]);return P(()=>{p(e=>Object.values(e).some(e=>e[go]!=null)?Object.fromEntries(Object.entries(e).map(([e,t])=>t[go]==null?[e,t]:d([e,t[go]]))):e)},[d]),{processedItems:_,visibleData:v,filters:f,filterFunctions:h,setFilterState:m}}})),yo,bo,xo=e((()=>{n(),w(),a(),yo=e=>{let t=t=>{let n=e.data.indexOf(t);if(n<0)return null;let r=e.data.splice(n,1);if(e.data=e.data.slice(),Array.isArray(r)&&r.length>0)return r[0]},n=(t,n)=>{e.data.splice(t,1,n),e.data=e.data.slice()};return{removeItem:t,removeItems(t){let n=[];for(let r=t.length-1;r>=0;--r){let i=e.removeItem(t[r]);i!=null&&n.push(i)}return n},replaceItemAtIndex:n,replaceItem(t,r){let i=e.data.indexOf(t);if(i>-1)return n(i,r)},selectItem(t){e.shadowRoot.querySelector(`#groupedList`).select(t)},selectAll(){e.shadowRoot.querySelector(`#groupedList`).selectAll()},deselectAll(){e.shadowRoot.querySelector(`#groupedList`).deselectAll()},deselectItem(t){e.shadowRoot.querySelector(`#groupedList`).deselect(t)},isItemSelected(t){return e.shadowRoot.querySelector(`#groupedList`).isItemSelected(t)}}},bo=({host:e,visibleData:t,filters:n,...r})=>{let{setFilterState:i}=r,a=C(()=>yo(e),[]);fe(r,Object.values(r)),fe(a,Object.values(a)),P(()=>{let t=e=>i(e.detail.name,t=>({...t,...e.detail.state}));return e.addEventListener(`legacy-filter-changed`,t),()=>e.removeEventListener(`legacy-filter-changed`,t)},[]),D(`visibleData`,t),D(`sortedFilteredGroupedItems`,r.sortedFilteredGroupedItems),D(`selectedItems`,r.selectedItems),D(`sortOn`,r.sortOn),D(`descending`,r.descending),D(`isMini`,r.isMini);let o=C(()=>Object.fromEntries(Object.entries(n).filter(([,{filter:e}])=>e!==void 0).map(([e,{filter:t}])=>[e,t])),[n]);D(`filters`,o,Object.values(o))}})),So,Co=e((()=>{w(),wa(),Qa(),eo(),no(),co(),vo(),xo(),xi(),So=e=>{let{hashParam:t,settingsId:n,data:r,resizeSpeedFactor:i,noLocal:a,noLocalSort:o=a,noLocalFilter:s=a,error:c,rowPartFn:l}=e,u=Sa({settingsId:n,host:e}),{settings:d,setSettings:f,columns:p,resetRef:m,savedSettings:h}=u,g=yi(p,t,{settings:d,setSettings:f,resetRef:m,ready:h!==void 0}),{processedItems:_,visibleData:v,filters:y,setFilterState:b,filterFunctions:x}=_o({data:r,columns:p,hashParam:t,sortAndGroupOptions:g,noLocalSort:o,noLocalFilter:s}),{isMini:S,collapsedColumns:ee,miniColumns:C}=Za({host:e,columns:p,settings:d,setSettings:f,resizeSpeedFactor:i,sortAndGroupOptions:g}),te=r&&Array.isArray(r)&&r.length>0,[w,ne]=A([]);return bo({host:e,visibleData:v,sortedFilteredGroupedItems:_,columns:p,filters:y,setFilterState:b,selectedItems:w,isMini:S,...g}),{header:to({host:e,selectedItems:w,sortAndGroupOptions:g,dataIsValid:te,data:r,columns:p,filters:y,collapsedColumns:ee,settings:d,filterFunctions:x,settingS:u,setFilterState:b,hideSelectAll:e.hideSelectAll===!0}),list:so({host:e,error:c,dataIsValid:te,processedItems:_,setSelectedItems:ne,columns:p,collapsedColumns:ee,miniColumns:C,sortAndGroupOptions:g,rowPartFn:l}),footer:$a({host:e,selectedItems:w,columns:p})}}})),wo=e((()=>{k(),customElements.define(`cosmoz-grouped-list-row`,class extends HTMLElement{get item(){return this._item}set item(e){this._item=e,this._render()}get index(){return this._index}set index(e){this._index=e,this._render()}get renderFn(){return this._renderFn}set renderFn(e){this._renderFn=e,this._render()}_render(){this._item==null||this._index==null||this._renderFn==null||ge(this._renderFn(this._item,this._index),this)}})})),To,Eo,Do,Oo,ko,Ao,jo,Mo,No,Po=e((()=>{To={group:Symbol(`group`)},Eo=(e,t)=>(t.has(e)||t.set(e,{}),t.get(e)),Do=(e,t)=>!!Eo(e,t).expanded,Oo=(e,t)=>!!Eo(e,t).folded,ko=e=>e?e.items instanceof Array:!1,Ao=e=>{if(!Array.isArray(e)||e.length===0)return;let t=Array.isArray(e[0]?.items);if(!e.every(e=>Array.isArray(e.items)===t))throw Error(`Data must be homogeneous.`)},jo=(e,t,n)=>{if(Array.isArray(e))return Ao(e),e.reduce((e,r)=>{let i=r;return i.items?i.items.length?Eo(r,n).folded?e.concat(r):e.concat(r,i.items.map(e=>Object.assign(e,{[To.group]:r}))):t?e.concat(r):e:e.concat(r)},[])},Mo=(e,...t)=>typeof e==`function`?e(...t):e,No=(e,t)=>e===t})),Fo,Io=e((()=>{w(),Po(),Fo=()=>{let[e,t]=A(()=>[new WeakMap]);return{setItemState:E((e,n)=>t(([t])=>{let r=Eo(e,t);return Object.assign(r,Mo(n,r)),[t]}),[]),state:e[0],signal:e}}})),Lo,Ro=e((()=>{w(),Io(),Po(),Lo=()=>{let{setItemState:e,state:t,signal:n}=Fo();return{state:t,signal:n,toggleFold:E((t,n)=>{ko(t)&&e(t,e=>({folded:n===void 0?!e.folded:n}))},[]),toggleCollapse:E((t,n)=>{ko(t)||e(t,e=>({expanded:n===void 0?!e.expanded:!n}))},[])}}})),zo,Bo=e((()=>{w(),Po(),zo=({initial:e,compareItemsFn:t,data:n,flatData:r})=>{let[i,a]=A(e),[o,s]=A(),c=E(e=>i.includes(e),[i]),l=E(e=>e?.items?.every(c)??!1,[c]),u=E(e=>c(e)||l(e),[c,l]),d=E(e=>{let t=e.items??[e];a(e=>[...e,...t.filter(t=>!e.includes(t))]),s(e)},[]),f=E(e=>{let t=e.items??[e];a(e=>e.filter(e=>!t.includes(e))),s(e)},[]),p=E(e=>{a(e.items?.slice()||[e]),s(e)},[]),m=E(()=>{a(n.flatMap(e=>e.items||e)),s(void 0)},[n]),h=E(()=>{a([]),s(void 0)},[]),g=E((e,t=!u(e))=>t?d(e):f(e),[u]),_=E((e,n)=>{if(!r)return;let i=o?r.findIndex(e=>t(e,o)):-1;if(i<0)return g(e,n);let[a,c]=[i,r.indexOf(e)].sort((e,t)=>e-t);r.slice(a,c+1).forEach((e,t,r)=>{t>0&&t<r.length-1&&ko(e)||g(e,n)}),s(e)},[r,t,g]);return P(()=>a(e=>e.length>0&&r?r.filter(n=>e.find(e=>t(n,e))):e),[r]),{selectedItems:i,isItemSelected:c,isGroupSelected:l,isSelected:u,select:d,deselect:f,selectOnly:p,selectAll:m,deselectAll:h,toggleSelect:g,toggleSelectTo:_}}})),Vo,Ho,Uo,Wo=e((()=>{n(),a(),w(),k(),wo(),Ro(),Bo(),Po(),ce(),Vo={host:{position:`relative`,display:`flex`,flexDirection:`column`}},Ho=e=>{let{data:t,renderItem:n,renderGroup:r,displayEmptyGroups:i,compareItemsFn:a=No}=e,{toggleFold:o,toggleCollapse:s,state:c,signal:l}=Lo(),u=C(()=>jo(t,i,c),[t,i,l]),{selectedItems:d,isItemSelected:f,isGroupSelected:p,isSelected:m,select:h,deselect:g,selectOnly:_,selectAll:v,deselectAll:y,toggleSelect:b,toggleSelectTo:x}=zo({initial:[],compareItemsFn:a,data:t,flatData:u}),S=E((e,t)=>Array.isArray(e.items)?r(e,t,{selected:p(e),folded:Oo(e,c),toggleSelect:t=>b(e,typeof t==`boolean`?t:void 0),toggleFold:()=>o(e)}):n(e,t,{selected:d.includes(e),expanded:Do(e,c),toggleSelect:t=>b(e,typeof t==`boolean`?t:void 0),toggleCollapse:()=>s(e)}),[n,r,d,b,l]);ue(()=>{Object.assign(e.style,Vo.host)},[]),D(`selectedItems`,d);let ee={toggleFold:o,toggleCollapse:s,isItemSelected:f,isGroupSelected:p,isSelected:m,select:h,deselect:g,selectOnly:_,selectAll:v,deselectAll:y,toggleSelect:b,toggleSelectTo:x};return fe(ee,Object.values(ee)),{renderRow:S,flatData:u}},Uo=({renderRow:e,flatData:t})=>ee({items:t,renderItem:(t,n)=>T`<cosmoz-grouped-list-row
				.item=${t}
				.index=${n}
				.renderFn=${e}
			></cosmoz-grouped-list-row>`})})),Go,Ko=e((()=>{Wo(),w(),Go=e=>Uo(Ho(e)),customElements.define(`cosmoz-grouped-list`,M(Go,{useShadowDOM:!1}))})),qo=e((()=>{Ko()})),Jo,Yo,Xo,Zo=e((()=>{He(),Ot(),ei(),ni(),wi(),ki(),Mi(),a(),w(),et(),k(),i(),Fi(),Ui(),Gi(),Xi(),Co(),qo(),Jo=e=>window.ShadyCSS?.ApplyShim?.transformCssText?.(e)||e,Yo=e=>{let{header:t,list:n,footer:r}=So(e);return T`
		<style>
			${_([],()=>Jo(Pi))}
		</style>

		<div class="mainContainer">
			${Wi(t)}
			<div class="tableContent" id="tableContent">
				${Yi(t,n)}
			</div>
			${Hi(r)}
		</div>

		<div id="columns">
			<slot id="columnsSlot"></slot>
		</div>
	`},customElements.define(`cosmoz-omnitable`,class extends M(Yo,{observedAttributes:[`hash-param`,`sort-on`,`group-on`,`descending`,`group-on-descending`,`hide-select-all`,`settings-id`,`no-local`,`no-local-sort`,`no-local-filter`,`disabled-filtering`,`loading`,`mini-breakpoint`]}){connectedCallback(){super.connectedCallback(),m(this,`selectedItems`,[]),m(this,`visibleData`,[]),m(this,`sortedFilteredGroupedItems`,[])}}),Xo=`
	<slot name="actions" slot="actions"></slot>
`,T(Object.assign([Xo],{raw:[Xo]})),Re(Object.assign([Xo],{raw:[Xo]}))}));export{Zo as t};