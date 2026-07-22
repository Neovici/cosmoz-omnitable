import{i as e}from"./preload-helper-CT_b8DTk.js";import{$ as t,A as n,An as r,At as i,B as a,Bt as o,C as s,D as c,Dt as l,E as u,F as d,G as f,H as p,It as m,Mn as h,Mt as g,N as _,Nn as v,Ot as y,Pt as b,R as x,Rt as ee,S,T as C,Tt as te,U as ne,Vt as re,Y as ie,Z as w,_ as ae,_t as T,c as oe,ct as se,d as ce,dt as le,et as E,f as ue,ft as de,g as fe,gt as D,h as pe,ht as me,j as he,k as ge,kn as _e,l as O,m as ve,mt as ye,n as be,nt as xe,o as Se,ot as Ce,p as we,pt as Te,q as Ee,r as De,s as Oe,t as ke,tt as Ae,u as je,ut as k,v as Me,vt as Ne,w as A,y as Pe}from"./iframe-B4B6pgtv.js";import{A as Fe,C as Ie,D as Le,E as Re,F as j,H as ze,I as Be,L as Ve,M as He,N as Ue,O as M,P as N,R as We,S as Ge,T as Ke,U as qe,V as Je,Y as Ye,_ as Xe,a as Ze,b as Qe,c as $e,d as et,f as tt,g as nt,h as rt,j as it,k as P,l as at,n as ot,o as st,p as ct,q as lt,r as ut,s as dt,t as ft,u as pt,v as mt,w as ht,x as gt,y as _t,z as vt}from"./dist-D3joLHu4.js";var yt,bt,F=e((()=>{x(),Ce(),D(),yt=k`
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
`,bt=()=>h`
	<style>
		${yt}
	</style>
	${p({className:`icon`,width:`18`,height:`18`})}
`,customElements.define(`cosmoz-clear-button`,T(bt))})),I,xt,St,Ct,wt,L,R=e((()=>{j(),I=({valuePath:e},t)=>N(t,e),xt=I,St=I,Ct=({valuePath:e},t)=>n=>{let r=N(n,e);return r==null?!1:r.toString().toLowerCase().trim().includes(t.toLowerCase().trim())},wt=(e,t)=>t===``||t==null?null:t,L=e=>class extends e{static get properties(){return{isOmnitableColumn:{type:Boolean,value:!0},title:{type:String},valuePath:{type:String,notify:!0},values:{type:Array,notify:!0},filter:{type:Object},noLocalFilter:{type:Boolean},disabled:{type:Boolean,value:!1,notify:!0},editable:{type:Boolean,notify:!0},loading:{type:Boolean,value:!1,notify:!0},externalValues:{type:Boolean,value:!1,notify:!0},name:{type:String},sortOn:{type:String},groupOn:{type:String},noSort:{type:Boolean,value:!1},disabledFiltering:{type:Boolean,value:!1},width:{type:String,value:`75px`},minWidth:{type:String,value:`40px`},flex:{type:String,value:`1`},cellClass:{type:String,value:`default-cell`},headerCellClass:{type:String,value:`default-header-cell`},priority:{type:Number,value:0},hidden:{type:Boolean,notify:!0},preferredDropdownHorizontalAlign:{type:String,value:`right`},renderHeader:{type:Function},renderCell:{type:Function},renderEditCell:{type:Function},renderGroup:{type:Function},mini:{type:Number,value:null},renderMini:{type:Function}}}static get observers(){return[`notifyFilterChange(filter)`]}notifyFilterChange(e){this.__ownChange||this.dispatchEvent(new CustomEvent(`legacy-filter-changed`,{detail:{name:this.name,state:this.legacyFilterToState(e)},bubbles:!0}))}legacyFilterToState(e){return{filter:e}}getFilterFn(){}getString(e,t){return I(e,t)}toXlsxValue(e,t){return xt(e,t)}cellTitleFn(e,t){return this.getString(e,t)}headerTitleFn(e){return e.title}serializeFilter(e,t){return wt(e,t)}deserializeFilter(e,t){if(t==null)return null;if(typeof t==`string`)try{return window.decodeURIComponent(t)}catch{return null}return t}getComparableValue(e,t){return St(e,t)}computeSource(e,t){return t}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n),this.dispatchEvent(new CustomEvent(`cosmoz-column-prop-changed`,{bubbles:!0}))}}})),Tt,Et,Dt,Ot,kt,At,jt,Mt=e((()=>{u(),F(),P(),v(),t(),R(),Tt=e=>t=>e(n=>{if(n.inputValue===void 0&&t.target.value===``)return n;clearTimeout(n.t);let r=setTimeout(()=>e(e=>({...e,filter:e.inputValue})),1e3);return{...n,inputValue:t.target.value,t:r}}),Et=e=>()=>e(e=>({...e,filter:e.inputValue})),Dt=e=>t=>{t.keyCode===13&&(t.preventDefault(),e(e=>({...e,filter:e.inputValue})))},Ot=e=>t=>e(e=>({...e,headerFocused:t.detail.value})),kt=e=>()=>e(e=>({...e,filter:null,inputValue:null})),At=e=>e!=null&&e!==``,jt=class extends L(M){static get properties(){return{minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},inputValue:{type:Object,notify:!0}}}getFilterFn(e,t){if(!(t==null||t===``))return Ct(e,t)}renderCell(e,{item:t}){return h`<span class="default-column">${I(e,t)}</span>`}renderEditCell(e,{item:t},n){return h`<cosmoz-input
			variant="inline"
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${I(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,inputValue:n,headerFocused:r},i){return h`<cosmoz-input
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
			${E(!e.disabledFiltering,()=>h`<cosmoz-clear-button
						suffix
						slot="suffix"
						?visible=${At(t)}
						light
						@click=${kt(i)}
					></cosmoz-clear-button>`)}
		</cosmoz-input>`}legacyFilterToState(e){return{filter:e,inputValue:e}}},customElements.define(`cosmoz-omnitable-column`,jt)})),Nt,Pt,Ft,z=e((()=>{u(),D(),v(),Nt=[`label`,`value`,`slot`,`always-float-label`,`disabled`,`variant`],Pt=re`
	${_}

	.wrap {
		height: 40px;
	}

	#input {
		margin-top: -4px;
	}
`,Ft=e=>{let{label:t,value:n,slot:r}=e;return d(h`<div
		id="input"
		part="input"
		role="button"
		class="control"
		slot=${r}
	>
		${n||``}
	</div>`,{label:t})},customElements.define(`cosmoz-omnitable-dropdown-input`,T(Ft,{observedAttributes:Nt,styleSheets:[Pt]}))})),B,It=e((()=>{Ve(),v(),Re(),z(),B=({title:e,tooltip:t=``,filterText:n=``,onOpenedChanged:r,content:i,horizontalAlign:a=`left`,externalValues:o=null})=>h`
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
			class=${Ke({filtered:!!n,...o!=null&&{[`external-values-${o}`]:!0},dropdown:!0})}
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
	`})),Lt,Rt,zt=e((()=>{we(),He(),ht(),gt(),Lt=e=>e?typeof e.close==`function`?e:Lt(e.parentElement):null,Rt=e=>class extends e{static get properties(){return{disabled:{type:Boolean,value:!1},filter:{type:Object,notify:!0},values:{type:Array,value(){return[]}},headerFocused:{type:Boolean,notify:!0},min:{type:Number,value:null},max:{type:Number,value:null},limits:{type:Function},autoupdate:{type:String,value:!0},locale:{type:String,value:null},_filterInput:{type:Object,value(){return{min:null,max:null}}},_range:{type:Object,computed:`_computeRange(values.*)`},_limit:{type:Object,computed:`_computeLimit(_range, _filterInput.*, min, max)`,value(){return{}}},_tooltip:{type:String,computed:`_computeTooltip(title, _filterText)`},_fromClasses:{type:String,computed:`_computeInputClasses(_filterInput.min)`},_toClasses:{type:String,computed:`_computeInputClasses(_filterInput.max)`}}}static get observers(){return[`_filterInputChanged(_filterInput.*, autoupdate)`,`_filterChanged(filter.*)`,`_updateLimits(limits, headerFocused)`]}disconnectedCallback(){this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),super.disconnectedCallback()}_computeInputClasses(e){return e!=null&&e!==``?`has-value`:``}toNumber(e,t,n){if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=this.toNumber(t);return i==null?r:n(r,i)}toValue(){return this.toNumber.apply(this,arguments)}getComparableValue(e,t){if(e==null)return;let n=e;return t!=null&&(n=this.get(t,e)),this.toValue(n)}renderValue(){}getInputString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return this._toInputString(n)}_computeRange(e){let t=e.base,n=Array.isArray(t)&&t.length&&t.map(e=>this.toValue(e)).filter(e=>e!=null);return!n||n.length<1?{min:null,max:null}:n.reduce((e,t)=>({min:this.toValue(t,e.min,Math.min),max:this.toValue(t,e.max,Math.max)}),{})}_computeLimit(e,t,n,r){if(!e)return;let i=t.base,a=this.toValue(n),o=this.toValue(r),s=a??this.toValue(e.min),c=o??this.toValue(e.max);return{fromMin:s,fromMax:this.toValue(c,this._fromInputString(i.max,`max`),Math.min),toMin:this.toValue(s,this._fromInputString(i.min,`min`),Math.max),toMax:c}}_computeFilterText(e){if(e.base==null)return;let t=e.base,n=this.toValue(t.min),r=this.toValue(t.max),i=[];return n!=null&&i.push(this.renderValue(n)),i.push(` - `),r!=null&&i.push(this.renderValue(r)),i.length>1?i.join(``):void 0}_computeTooltip(e,t){return t==null?e:`${e}: ${t}`}_fromInputString(e){return this.toValue(e)}_toInputString(e){return this.toValue(e)??null}_getDefaultFilter(){return{min:null,max:null}}_filterInputChanged(e,t){let n=e.path.split(`.`)[1];this.__inputChangePath=n||null,t&&(this._limitInputDebouncer=Ge.debounce(this._limitInputDebouncer,Ue.after(600),()=>{this._limitInput(),this._updateFilter()}),Ie(this._limitInputDebouncer))}_clearFrom(){this.set(`_filterInput.min`,null),this._updateFilter()}_clearTo(){this.set(`_filterInput.max`,null),this._updateFilter()}_onBlur(){this._limitInput(),this._updateFilter()}_onKeyDown(e){let t=e.currentTarget,n=Array.from(t.parentElement.querySelectorAll(`cosmoz-input`)),r=n[n.findIndex(e=>e===t)+1],i=!r,a=n[0]===t;switch(e.keyCode){case 13:if(e.preventDefault(),!i)r.focus();else{let e=this._limitInput();this._updateFilter(),e||this._closeParent(t)}break;case 9:(i&&!e.shiftKey||a&&e.shiftKey)&&this._closeParent(t)}}_closeParent(e){let t=Lt(e);t&&t.close()}_onDropdownOpenedChanged({currentTarget:e,type:t,detail:n}){(t===`focus`||n?.value===!0)&&setTimeout(()=>{e.querySelector(`cosmoz-input:focus`)||e.querySelector(`cosmoz-input`)?.focus()},100)}_limitInput(){let e=this._filterInput,t=this.__inputChangePath,n=t?this._fromInputString(this.get(t,e),t):null;if(this.__inputChangePath=null,n==null)return!1;let r=this._limit,i=t===`min`?`from`:`to`,a=this.get(i+`Min`,r),o=this.get(i+`Max`,r),s=this.toValue(n,a,Math.max),c=this.toValue(s,o,Math.min);return this.getComparableValue(n)===this.getComparableValue(c)?!1:(this.set([`_filterInput`,t],this._toInputString(c,t)),this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),!0)}_updateFilter(){let e=this._filterInput,t=this.filter,n=this._fromInputString(e.min,`min`),r=this._fromInputString(e.max,`max`);this.getComparableValue(n)===this.getComparableValue(t,`min`)&&this.getComparableValue(r)===this.getComparableValue(t,`max`)||this.set(`filter`,{min:n,max:r})}_filterChanged(e){if(this._filterInput==null)return;let t=this._filterInput,n=e.base,r=this._fromInputString(t.min,`min`),i=this._fromInputString(t.max,`max`);this.getComparableValue(r)===this.getComparableValue(n,`min`)&&this.getComparableValue(i)===this.getComparableValue(n,`max`)||(this.set(`_filterInput`,{min:this._toInputString(n.min),max:this._toInputString(n.max)}),this._limitInputDebouncer&&this._limitInputDebouncer.cancel())}hasFilter(){let e=this.filter;return e==null?!1:this.toValue(e.min)!=null||this.toValue(e.max)!=null}resetFilter(){this.filter=this._getDefaultFilter()}_updateLimits(e,t){e&&Promise.resolve(ve(e,{active:t})).then(e=>{let{min:t,max:n}=e??{};Object.assign(this,{...t==null?{}:{min:t},...n==null?{}:{max:n}})})}}})),V,Bt=e((()=>{P(),v(),V=e=>class extends e{static get template(){return Fe`<div id="output" style="position:relative;"></div>`}connectedCallback(){super.connectedCallback();let e=this;r(e.render(),e.$.output)}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n);let i=this;requestAnimationFrame(()=>r(i.render(),i.$.output))}}})),Vt,Ht=e((()=>{u(),P(),A(),v(),t(),It(),z(),zt(),Bt(),Vt=class extends Rt(V(M)){static get properties(){return{currency:{type:String},autodetect:{type:Boolean,value:!1},rates:{type:Object},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, _formatters)`},headerFocused:{type:Boolean,value:!1}}}static get observers(){return[`_valuesChanged(autodetect, currency, values)`]}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return h`
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
		`}_valuesChanged(e,t,n){if(!Array.isArray(n)||n.length<1||!e&&t)return;let r=n.reduce((e,t)=>{if(t.currency){let n=t.currency;e[n]=(e[n]||0)+1}return e},{}),i=Object.keys(r)[0];Object.keys(r).reduce((e,t)=>{let n=Math.max(e,r[t]);return n===r[t]&&(i=t),n},0),this.set(`currency`,i)}toAmount(e,t,n){if(e==null||e===``)return;if(typeof e!=`object`||e.currency==null||e.currency===``)return null;let r=this.toNumber(e.amount);if(r==null||Number.isNaN(r))return null;let i={currency:e.currency,amount:r};if(n==null||t==null)return i;let a=this.toAmount(t);if(a==null)return i;let o=this.rates||{},s=i.amount*(o[i.currency]||1),c=a.amount*(o[a.currency]||1);return this.toNumber(s,c,n)===s?i:a}toValue(){return this.toAmount.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n==null)return;let r=this.toNumber(n.amount),i=this.rates;return i==null?r:r*(i[n.currency]||1)}getString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return n===void 0?``:n===null?`Invalid value`:this.renderValue(n)}getCurrency(e,t){let n=this.get(t,e);return n&&n.currency}getFormatter(e,t){let n=e+(t||``)||``,r=this._formatters=this._formatters||{};return r[n]||(r[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),r[n]}renderValue(e){let t=this.toAmount(e);return t==null?``:this.getFormatter(t.currency,this.locale).format(e.amount)}_amountValueChanged(e){let t=e.target.value,n=e.model.item,r=this.get(this.valuePath,n),i={amount:Number(t),currency:r.currency};this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toInputString(e){let t=this.toValue(e);return t==null?null:this.toNumber(t.amount)}_toInputStringAmount(e){let t=this.rates;if(t==null)return this._toInputString(e);let n=this.toValue(e);return n==null?null:(this.toNumber(n.amount)*(t[n.currency]||1)/(t[this.currency]||1)).toFixed(2)}_fromInputString(e,t){let n=this.toNumber(e);if(n!=null)return this.toValue({amount:n,currency:t&&this.get([`filter`,t,`currency`])||this.currency})}},customElements.define(`cosmoz-omnitable-amount-range-input`,Vt)})),H,Ut,Wt,Gt,U,Kt,qt,Jt,Yt=e((()=>{j(),mt(),H=(e,t,n)=>{if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=H(t);return i==null?r:n(r,i)},Ut=e=>{let t=H(e);return t==null?null:t.toString()},Wt=({valuePath:e},t)=>Ut(H(e?N(t,e):t)),Gt=e=>Ut(e)??``,U=({valuePath:e,maximumFractionDigits:t},n)=>{if(n==null)return;let r=H(e?N(n,e):n);if(r!=null)return t===null?r:H(r.toFixed(t))},Kt=Qe((e,t,n)=>{let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}),qt=({valuePath:e,locale:t,minimumFractionDigits:n,maximumFractionDigits:r},i)=>{let a=e?N(i,e):i;if(a==null)return``;let o=H(a);if(o!=null)return Kt(t,n,r).format(o)},Jt=(e,t)=>n=>{let r=U(e,n);if(r==null)return!1;let i=U({...e,valuePath:`min`},t),a=U({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})),W,G,Xt,Zt,Qt,$t,en,tn,nn,rn,an,on=e((()=>{j(),Yt(),W=(e={},t,n,r)=>{if(t==null||t===``)return;if(typeof t!=`object`||t.currency==null||t.currency===``)return null;let i=H(t.amount);if(i==null||Number.isNaN(i))return null;let a={currency:t.currency,amount:i};if(r==null||n==null)return a;let o=W(e,n);if(o==null)return a;let s=a.amount*(e[a.currency]||1);return H(s,o.amount*(e[o.currency]||1),r)===s?a:o},G=({valuePath:e,rates:t},n)=>{if(n==null)return;let r=n;e!=null&&(r=N(n,e));let i=W(t,r);if(i==null)return;let a=H(i.amount);return t==null||a==null?a:a*(t?.[i.currency]||1)},Xt=(e,t)=>n=>{let r=G(e,n);if(r===void 0)return!1;let i=G({...e,valuePath:`min`},t),a=G({...e,valuePath:`max`},t);return i===void 0||a===void 0?!0:!(r<i||r>a)},Zt={},Qt=(e,t)=>{let n=e+(t||``)||``;return Zt[n]||(Zt[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),Zt[n]},$t=(e,t,n)=>{let r=W(e,t);return r==null?``:Qt(r.currency,n).format(r.amount)},en=({valuePath:e,rates:t,locale:n},r)=>{let i=W(t,e?N(r,e):void 0);return i===void 0?``:i===null?`Invalid value`:$t(t,i,n)},tn=e=>e?e.amount+e.currency:``,nn=e=>{if(e==null||e===``)return;let t=e.match(/^(-?[\d]+)([\D]+?)$/iu);if(!(!Array.isArray(t)||t.length<0))return{amount:Number(t[1]),currency:t[2]}},rn=({valuePath:e},t)=>e?N(t,e)?.currency:null,an=({valuePath:e},t)=>e?N(t,e)?.amount:void 0})),K,sn,cn,ln,un,dn,fn,q=e((()=>{mt(),D(),K=Symbol(`column`),sn=e=>{let t=!0,n=e.map(e=>e.name);return e.forEach(e=>{e.name??(t=!1,console.error(`The name attribute needs to be set on all columns! Missing on column`,e))}),e.forEach(e=>{n.indexOf(e.name)!==n.lastIndexOf(e.name)&&(t=!1,console.error(`The name attribute needs to be unique among all columns! Not unique on column`,e))}),t},cn=(e,t)=>{let n=e.valuePath??e.name;return{name:e.name,title:e.title,valuePath:n,groupOn:e.groupOn??n,sortOn:e.sortOn??n,noSort:e.noSort,disabledFiltering:t||e.disabledFiltering,minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,getString:e.getString,getComparableValue:e.getComparableValue,serializeFilter:e.serializeFilter,deserializeFilter:e.deserializeFilter,toXlsxValue:e.toXlsxValue,renderHeader:e.renderHeader,renderCell:e.renderCell,renderEditCell:e.renderEditCell,renderGroup:e.renderGroup,cellTitleFn:e.cellTitleFn,headerTitleFn:e.headerTitleFn,getFilterFn:e.getFilterFn,headerCellClass:e.headerCellClass,cellClass:e.cellClass,editable:e.editable,values:e.values,source:_t(e.computeSource),noLocalFilter:e.noLocalFilter,mini:e.mini,renderMini:e.renderMini,loading:e.loading,externalValues:e.externalValues,computeSource:e.computeSource,trueLabel:e.trueLabel,falseLabel:e.falseLabel,valueProperty:e.valueProperty,textProperty:e.textProperty,emptyLabel:e.emptyLabel,emptyValue:e.emptyValue,min:e.min,max:e.max,locale:e.locale,autoupdate:e.autoupdate,maximumFractionDigits:e.maximumFractionDigits,minimumFractionDigits:e.minimumFractionDigits,currency:e.currency,rates:e.rates,autodetect:e.autodetect,ownerTree:e.ownerTree,keyProperty:e.keyProperty,...e.getConfig?.(e),[K]:e}},ln=e=>e.isOmnitableColumn&&!e.hidden,un=e=>{let t=e.filter(ln);return sn(t)?t:[]},dn=(e,t,n)=>(Array.isArray(t)?e.filter(e=>t.includes(e.name)):e.filter(e=>!e.disabled)).map(e=>cn(e,n)),fn=(e,{enabledColumns:t,disabledFiltering:n})=>{let[r,a]=i([]);return g(()=>{let r,i=[],o=e.shadowRoot.querySelector(`#columnsSlot`),s=e=>()=>{let r=o.assignedNodes({flatten:!0});if(e)i=r;else{let e=r.filter(e=>!i.includes(e)),t=i.filter(e=>!r.includes(e)),n=[...e,...t].some(e=>e.isOmnitableColumn);if(i=r,!n)return}a(dn(un(r),t,n))},c=e=>{cancelAnimationFrame(r),r=requestAnimationFrame(s(e?.type===`cosmoz-column-prop-changed`))};return c(),o.addEventListener(`slotchange`,c),e.addEventListener(`cosmoz-column-prop-changed`,c),()=>{o.removeEventListener(`slotchange`,c),e.removeEventListener(`cosmoz-column-prop-changed`,c),cancelAnimationFrame(r)}},[t,n]),r}})),pn,J,mn,Y=e((()=>{j(),q(),pn=(e,t)=>Array.isArray(e)?e.map(e=>N(e,t)).filter((e,t,n)=>e!=null&&n.indexOf(e)===t):void 0,J=({externalValues:e,values:t,valuePath:n},r)=>{if(e)return e;if(typeof t==`function`)return t;if(n!==void 0)return pn(r,n)},mn=(e,t,n,r)=>{let{valuePath:i}=t,a=i===void 0?void 0:N(n,i);if(r===a)return;i!==void 0&&Be(n,i,r);let o={item:n,valuePath:i,value:r,oldValue:a,column:t[K]};e.dispatchEvent(new CustomEvent(`column-item-changed`,{bubbles:!0,composed:!0,detail:o}))}})),hn,gn=e((()=>{u(),F(),P(),v(),j(),R(),Ht(),on(),Y(),hn=class extends L(M){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},currency:{type:String,notify:!0},autodetect:{type:Boolean,value:!1,notify:!0},rates:{type:Object,notify:!0},width:{type:String,value:`70px`},cellClass:{type:String,value:`amount-cell align-right`},headerCellClass:{type:String,value:`amount-header-cell`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=G({...e,valuePath:`min`},t),r=G({...e,valuePath:`max`},t);if(!(n==null&&r==null))return Xt(e,t)}getString(e,t){return en(e,t)}toXlsxValue(e,t){return en(e,t)}getComparableValue(e,t){return G(e,t)}serializeFilter({rates:e},t){if(t==null)return;let n=W(e,t.min),r=W(e,t.max);if(!(n==null&&r==null))return tn(n)+`~`+tn(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:nn(n[1]),max:nn(n[2])}:null}renderCell(e,{item:t}){return h`<span>${e.getString(e,t)}</span>`}renderEditCell(e,{item:t},n){return h`<cosmoz-input
			type="number"
			@change=${r=>n({amount:r.target.value,currency:N(t,e.valuePath)?.currency})}
			.value=${an(e,t)}
		>
			<div slot="suffix">${rn(e,t)}</div>
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
		></cosmoz-omnitable-amount-range-input>`}computeSource(e,t){return J(e,t)}},customElements.define(`cosmoz-omnitable-column-amount`,hn)})),_n,vn,yn,bn,xn,Sn,Cn,wn,Tn,En,Dn,On,kn=e((()=>{De(),we(),oe(),j(),Y(),_n=(e,t)=>{if(!Array.isArray(e))return;let n=[];return e.reduce((e,t)=>Array.isArray(t)?(t.forEach(t=>{e.push(t)}),e):(e.push(t),e),[]).filter((e,r,i)=>{if(i.indexOf(e)!==r)return!1;if(t){let r=N(e,t);if(n.indexOf(r)!==-1)return!1;n.push(r)}return!0})},vn=(e,t,n)=>{if(e==null)return[];if(Array.isArray(e)){let r=_n(e,t);if(!r?.length)return r;let i=n??`label`,a=e=>String(typeof e==`object`&&e?N(e,i)??``:e??``);return r.sort((e,t)=>a(e).localeCompare(a(t)))}if(typeof e==`object`){let r=t??`id`,i=n??`label`;return Object.entries(e).map(([e,t])=>({[r]:e,[i]:t})).sort((e,t)=>String(e[i]??``).localeCompare(String(t[i]??``)))}return[]},yn=(e,t,n)=>be(t&&N(e,t)).map(O(n)),bn=({valuePath:e,textProperty:t},n)=>yn(n,e,t).filter(e=>e!=null).join(`, `),xn=bn,Sn=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>a=>{let o=O(e),s=be(N(a,t));return i.some(t=>s.length===0&&O(r||e)(t)===n||s.some(e=>o(e)===o(t)))},Cn=e=>t=>e(e=>({...e,filter:t})),wn=e=>t=>e(e=>({...e,headerFocused:t})),Tn=e=>t=>e(e=>({...e,query:t})),En=({emptyValue:e,emptyLabel:t,emptyProperty:n,textProperty:r,valueProperty:i},a)=>{let o=vn(a,i,r);return!t||e===void 0||!r||!(n||i)||!o?o:[{[r]:t,[n||i]:e},...o]},Dn=(e,t)=>En(e,pn(t,e.valuePath)),On=e=>class extends e{static get properties(){return{textProperty:{type:String},valueProperty:{type:String},emptyLabel:{type:String},emptyValue:{type:Object},emptyProperty:{type:String}}}getConfig(e){return{emptyProperty:e.emptyProperty}}getString(e,t){return bn(e,t)}toXlsxValue(e,t){return xn(e,t)}getComparableValue({valuePath:e,valueProperty:t},n){let r=N(n,e);return t==null?r:be(r).map(O(t)).sort().join(` `)}getFilterFn(e,t){if(!(!t||!Array.isArray(t)||t.length===0))return Sn(e,t)}serializeFilter(e,t){return t.length===0?null:JSON.stringify(t)}deserializeFilter(e,t){if(t==null)return null;try{return JSON.parse(decodeURIComponent(t))}catch(e){return console.error(`Failed to deserialize filter value:`,{error:e?.name,message:e?.message,filterLength:typeof t==`string`?t.length:null}),null}}computeSource(e,t){return e.externalValues||typeof e.values==`function`?async(...t)=>En(e,await Promise.resolve(ve(e.values,...t))):Dn(e,t)}}})),An,jn,Mn,Nn=e((()=>{ke(),Xe(),P(),v(),t(),De(),oe(),kn(),R(),D(),j(),q(),An=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?ce(t):O(n),a=be(e&&N(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},jn=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>{let a=O(e),o=O(r||e),s=new Set(i.filter(e=>e.excluded).map(e=>a(e.item))),c=new Set(i.filter(e=>!e.excluded).map(e=>a(e.item))),l=i.some(e=>e.excluded&&o(e.item)===n),u=i.some(e=>!e.excluded&&o(e.item)===n);return e=>{let n=be(N(e,t)).map(a);return n.length===0?!l&&(u||c.size===0):!n.some(e=>s.has(e))&&(c.size===0||n.some(e=>c.has(e)))}},Mn=class extends On(L(M)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return h`<span class="default-column"
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
			@opened-changed=${e=>wn(r)(e.detail.value)}
			@value-changed=${l(Cn(r))}
			@text-changed=${l(Tn(r))}
			>${E(e.loading,()=>h`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-excluding
		>`}getComparableValue(e,t){return An(e,t)}getFilterFn(e,t){if(!(!t||!Array.isArray(t)||t.length===0))return jn(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete-excluding`,Mn)})),Pn,Fn,In=e((()=>{ke(),Xe(),P(),v(),t(),De(),oe(),kn(),R(),j(),q(),Pn=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?ce(t):O(n),a=be(e&&N(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},Fn=class extends On(L(M)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return h`<span class="default-column"
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
			.onChange=${Cn(r)}
			@opened-changed=${e=>wn(r)(e.detail.value)}
			.onText=${Tn(r)}
			>${E(e.loading,()=>h`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}getComparableValue(e,t){return Pn(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete`,Fn)})),Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,qn,Jn,Yn,Xn,Zn=e((()=>{P(),R(),ke(),mt(),j(),v(),t(),Ln=(e,t)=>t.find(({value:t})=>e===t),Rn=(e,t,n)=>{let r=Ln(t,n);return r?r.text:e},zn=(e,t,n,r)=>Rn(e,N(t,n),r),Bn=({valuePath:e},t,n)=>Ln(N(t,e),n),Vn=e=>t=>{e(e=>({...e,filter:t?.[0]?.value??null}))},Hn=e=>t=>{e(e=>({...e,headerFocused:t}))},Un=e=>t=>{e(e=>({...e,query:t}))},Wn=e=>t=>e(t?.[0]?.value),Gn=({valuePath:e,trueLabel:t,falseLabel:n},r)=>N(r,e)?t:n,Kn=({valuePath:e},t)=>n=>N(n,e)===t,qn=_t((e,t)=>[{text:e,value:!0},{text:t,value:!1}]),Jn=({valuePath:e,trueLabel:t,falseLabel:n},r)=>e?N(r,e)?t:n:``,Yn=(e,t)=>{try{return JSON.parse(t)}catch{return null}},Xn=class extends L(M){static get properties(){return{trueLabel:{type:String,value:`True`},falseLabel:{type:String,value:`False`},flex:{type:String,value:`0`},cellClass:{type:String,value:`boolean-cell`}}}getString(e,t){return Gn(e,t)}renderCell(e,{item:t}){return Gn(e,t)}renderEditCell(e,{item:t},n){let{trueLabel:r,falseLabel:i}=e;return h`<cosmoz-autocomplete
			variant="inline"
			.title=${zn(e.title,t,e.valuePath,qn(r,i))}
			.source=${qn(r,i)}
			.textProperty=${`text`}
			.value=${Bn(e,t,qn(r,i))}
			.onChange=${Wn(n)}
			.limit=${1}
			>${E(e.loading,()=>h`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete
		>`}renderHeader(e,{filter:t,query:n},r,i){return h`<cosmoz-autocomplete-ui
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
			>${E(e.loading,()=>h`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}computeSource({trueLabel:e,falseLabel:t}){return qn(e,t)}getFilterFn(e,t){if(t!=null)return Kn(e,t)}toXlsxValue(e,t){return Jn(e,t)}deserializeFilter(e,t){return Yn(e,t)}},customElements.define(`cosmoz-omnitable-column-boolean`,Xn)})),Qn,$n=e((()=>{de(),zt(),Qn=e=>class extends Rt(e){static get properties(){return{max:{type:Date,value:null},min:{type:Date,value:null},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},formatter:{type:Object,computed:`_computeFormatter(locale)`}}}toDate(e,t,n){if(e==null||e===``)return;let r=e;if(r instanceof Date||(typeof e==`string`&&(r=this.getAbsoluteISOString(r)),r=new Date(r)),Number.isNaN(r.getTime()))return null;if(n==null||t==null)return r;let i=this.toDate(t);if(i==null)return r;let a=this.getComparableValue(r);return n(a,this.getComparableValue(i))===a?r:i}toValue(){return this.toDate.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n!=null)return this.toNumber(n.getTime())}getString(e,t=this.valuePath,n=this.formatter){let r=this.toValue(this.get(t,e));return r===void 0?``:r===null?`Invalid Date`:this.renderValue(r,n)}getAbsoluteISOString(e){return e.length===19?e+this._getTimezoneString(e):e}_getTimezoneString(e){let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`}renderValue(e,t=this.formatter){if(t==null)return;let n=this.toValue(e);if(n!=null)return t.format(n)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(0,10)}_dateValueChanged(e){let t=e.currentTarget.value,n=e.model.item,r=this.get(this.valuePath,n),i=this._fromInputString(t);this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toLocalISOString(e){return Te(e)}}})),er,tr=e((()=>{u(),P(),A(),v(),t(),$n(),It(),z(),Bt(),er=class extends Qn(V(M)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return h`
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
		`}_fromInputString(e,t){let n=this.toDate(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n}_filterInputChanged(e,t){let n=e.path.split(`.`)[1]&&e.value;if(n&&n.match(/^0+/u)){this._limitInputDebouncer.cancel();return}super._filterInputChanged(e,t)}},customElements.define(`cosmoz-omnitable-date-range-input`,er)})),nr,rr,ir,X,Z,ar,or,sr,cr,lr,ur,dr,fr,pr,mr,hr=e((()=>{de(),j(),Yt(),nr=e=>{let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`},rr=e=>e.length===19?e+nr(e):e,ir=e=>{if(e==null||e===``)return;let t=e;return!(t instanceof Date)&&(typeof e==`string`&&(t=rr(t)),t=le(t),!t)||Number.isNaN(t.getTime())?null:t},X=({valuePath:e},t)=>{if(t==null)return;let n=t;e!=null&&(n=N(t,e));let r=ir(n);if(r!=null)return H(r.getTime())},Z=(e,t,n)=>{let r=ir(e);if(r==null)return null;if(n==null||t==null)return r;let i=Z(t);if(i==null)return r;let a=X({},r),o=X({},i);return a==null||o==null||n(a,o)===a?r:i},ar=(e,t)=>{if(t==null)return;let n=Z(e);if(n!=null)return t.format(n)},or={},sr=e=>{let t=e||``;return or[t]||(or[t]=new Intl.DateTimeFormat(e||void 0)),or[t]},cr=({valuePath:e,locale:t},n)=>{let r=N(n,e||``);return r===void 0?``:(r=Z(r),r===null?`Invalid Date`:ar(r,sr(t)))},lr=e=>{let t=Z(e);if(t==null)return null;let n=Te(t);return n==null?null:n.slice(0,10)},ur=({valuePath:e},t)=>lr(N(t,e||``)),dr=(e,t)=>{let n=Z(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n},fr=e=>lr(e)??``,pr=({valuePath:e},t)=>{if(!e)return``;let n=Z(N(t,e));if(!n)return``;let r=Z(Te(n));return r?(r.setHours(0,0,0,0),r):``},mr=(e,t)=>n=>{let r=X(e,n);if(r==null)return!1;let i=X({...e,valuePath:`min`},t),a=X({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})),gr,_r=e((()=>{u(),P(),v(),R(),tr(),Y(),hr(),F(),gr=class extends L(M){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`date-header-cell`},width:{type:String,value:`100px`},minWidth:{type:String,value:`82px`},flex:{type:String,value:`0`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=X({...e,valuePath:`min`},t),r=X({...e,valuePath:`max`},t);if(!(n==null&&r==null))return mr(e,t)}getString(e,t){return cr(e,t)}toXlsxValue(e,t){return pr(e,t)}getComparableValue(e,t){return X(e,t)}serializeFilter(e,t){if(t==null)return;let n=Z(t.min),r=Z(t.max);if(!(n==null&&r==null))return fr(n)+`~`+fr(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Z(n[1]),max:Z(n[2])}:null}renderCell(e,{item:t}){return h`<div class="omnitable-cell-date">
			${cr(e,t)}
		</div>`}renderEditCell(e,{item:t},n){return h`<cosmoz-input
			type="date"
			@change=${e=>n(dr(e.target.value))}
			.value=${ur(e,t)}
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
		></cosmoz-omnitable-date-range-input>`}computeSource(e,t){return J(e,t)}},customElements.define(`cosmoz-omnitable-column-date`,gr)})),vr,yr=e((()=>{P(),A(),v(),t(),$n(),It(),z(),Bt(),vr=class extends Qn(V(M)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return h`
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
		`}_toInputString(e){let t=this.toValue(e);if(t!=null)return this._toLocalISOString(t).slice(0,19)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})}},customElements.define(`cosmoz-omnitable-datetime-range-input`,vr)})),br,xr,Sr,Cr,wr,Tr,Er=e((()=>{j(),hr(),br={},xr=e=>{let t=e||``;return br[t]||(br[t]=new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})),br[t]},Sr=({valuePath:e,locale:t},n)=>{let r=Z(N(n,e||``));return r===void 0?``:r===null?`Invalid Date`:ar(r,xr(t))},Cr=({valuePath:e},t)=>e?N(t,e):``,wr=e=>{let t=Z(e);return t==null?``:t.toISOString().slice(0,19).replace(/:/gu,`.`)},Tr=e=>{if(!(e==null||e===``)&&typeof e==`string`)return Z(e.replace(/\./gu,`:`)+`Z`)}})),Dr,Or=e((()=>{nt(),F(),P(),v(),R(),yr(),Y(),hr(),Er(),Dr=class extends L(M){static get is(){return`cosmoz-omnitable-column-datetime`}static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`datetime-header-cell`},width:{type:String,value:`210px`},minWidth:{type:String,value:`128px`},flex:{type:String,value:`0`},filterStep:{type:Number,value:1}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=X({...e,valuePath:`min`},t),r=X({...e,valuePath:`max`},t);if(!(n==null&&r==null))return mr(e,t)}getString(e,t){return Sr(e,t)}toXlsxValue(e,t){return Cr(e,t)}getComparableValue(e,t){return X(e,t)}serializeFilter(e,t){if(t==null)return;let n=Z(t.min),r=Z(t.max);if(!(n==null&&r==null))return wr(n)+`~`+wr(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Tr(n[1]),max:Tr(n[2])}:null}renderCell(e,{item:t}){return Sr(e,t)}renderEditCell(e,{item:t},n){return h`<cosmoz-input
			type="text"
			@change=${e=>n(dr(e.target.value))}
			.value=${Sr(e,t)}
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
		></cosmoz-omnitable-datetime-range-input>`}computeSource(e,t){return J(e,t)}},customElements.define(Dr.is,Dr)})),kr,Ar=e((()=>{ke(),Xe(),P(),v(),t(),kn(),R(),kr=class extends On(L(M)){renderCell({valuePath:e,textProperty:t},{item:n}){return h`
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
				${yn(n,e,t).map(e=>h`<li>${e}</li>`)}
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
			.onChange=${Cn(r)}
			@opened-changed=${e=>wn(r)(e.detail.value)}
			.onText=${Tn(r)}
			>${E(e.loading,()=>h`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		> `}},customElements.define(`cosmoz-omnitable-column-list-horizontal`,kr)})),jr,Mr,Nr=e((()=>{Ce(),D(),A(),jr=k`
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
`,Mr=({items:e})=>{let[t,n]=i(!1),r=Array.isArray(e)?e:[],a=m(()=>Math.max(0,r.length-1),[r]);if(r.length===0)return null;let o=r.length>2,s=r[0],c=o&&!t?[]:r.slice(1),l=e=>{e.stopPropagation(),e.preventDefault(),n(e=>!e)};return h`
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
	`},customElements.define(`cosmoz-omnitable-column-list-data`,T(Mr,{styleSheets:[se(jr)]}))})),Pr,Fr=e((()=>{Nr(),P(),v(),t(),ke(),kn(),R(),q(),Pr=class extends On(L(M)){static get properties(){return{keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,textual:e.textual}}renderCell({valuePath:e,textProperty:t},{item:n}){return h`<cosmoz-omnitable-column-list-data
			.items=${yn(n,e,t)}
		></cosmoz-omnitable-column-list-data>`}renderEditCell(e,{item:t},n){return h`<cosmoz-input
			type="text"
			.value=${bn(e,t)}
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
			.onChange=${Cn(r)}
			@opened-changed=${e=>wn(r)(e.detail.value)}
			.onText=${Tn(r)}
			>${E(e.loading,()=>h`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}},customElements.define(`cosmoz-omnitable-column-list`,Pr)})),Ir,Lr=e((()=>{u(),P(),A(),v(),t(),It(),z(),zt(),Bt(),Ir=class extends Rt(V(M)){static get properties(){return{maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},formatter:{type:Object,computed:`_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)`},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},headerFocused:{type:Boolean,value:!1}}}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return h`
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
		`}_computeFormatter(e,t,n){let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}getComparableValue(e,t){if(e==null)return;let n=e;if(t!=null&&(n=this.get(t,e)),n=this.toValue(n),n==null)return;let r=this.maximumFractionDigits;return r===null?n:this.toValue(n.toFixed(r))}renderValue(e,t=this.formatter){let n=this.toNumber(e);if(n!=null)return t.format(n)}},customElements.define(`cosmoz-omnitable-number-range-input`,Ir)})),Rr,zr=e((()=>{u(),F(),P(),v(),R(),j(),Lr(),Y(),Yt(),Rr=class extends L(M){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},cellClass:{type:String,value:`number-cell align-right`},width:{type:String,value:`30px`},minWidth:{type:String,value:`30px`},headerCellClass:{type:String,value:`number-header-cell`},maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=U({...e,valuePath:`min`},t),r=U({...e,valuePath:`max`},t);if(!(n==null&&r==null))return Jt(e,t)}getString(e,t){return qt(e,t)}toXlsxValue({valuePath:e},t){return N(t,e)}getComparableValue(e,t){return U(e,t)}serializeFilter(e,t){if(t==null)return;let n=H(t.min),r=H(t.max);if(!(n==null&&r==null))return Gt(n)+`~`+Gt(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:H(n[1]),max:H(n[2])}:null}renderCell(e,{item:t}){return h`<div class="omnitable-cell-number">
			${qt(e,t)}
		</div>`}renderEditCell(e,{item:t},n){return h`<cosmoz-input
			type="number"
			@change=${e=>n(e.target.value)}
			.value=${Wt(e,t)}
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
		></cosmoz-omnitable-number-range-input>`}computeSource(e,t){return J(e,t)}},customElements.define(`cosmoz-omnitable-column-number`,Rr)})),Br,Vr=e((()=>{u(),P(),A(),v(),t(),$n(),It(),z(),Bt(),Br=class extends Qn(V(M)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return h`
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
		`}get _fixedDate(){return`1970-01-01`}toDate(e,t,n){let r=typeof e==`string`&&e.length>3&&e.length<=9?this.getAbsoluteISOString(this._fixedDate+`T`+e):e;return super.toDate(r,t,n)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(11,19)}getComparableValue(e,t){if(e==null)return;let n=this._toInputString(t==null?e:this.get(t,e));if(n!=null&&(n=this.toValue(this.getAbsoluteISOString(this._fixedDate+`T`+n)),n!=null))return this.toNumber(n.getTime())}_timeValueChanged(e){let t=e.target.value,n=e.model.item,r=this.toDate(n.date),i=this.toDate(r==null?t:r.toISOString().slice(0,10)+`T`+t);i??(this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,(e=>e).bind(this)))}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})}},customElements.define(`cosmoz-omnitable-time-range-input`,Br)})),Q,Hr,Ur,Wr,Gr,Kr,$,qr,Jr,Yr,Xr=e((()=>{de(),j(),hr(),Yt(),Q=(e,t,n)=>Z(typeof e==`string`&&e.length>3&&e.length<=9?rr(`1970-01-01T`+e):e,t,n),Hr={},Ur=e=>{let t=e||``;return Hr[t]||(Hr[t]=new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})),Hr[t]},Wr=({valuePath:e,locale:t},n)=>{let r=Q(N(n,e||``));return r===void 0?``:r===null?`Invalid Date`:ar(r,Ur(t))},Gr=(e,t)=>e.valuePath?Wr(e,t):``,Kr=e=>{let t=Q(e);if(t==null)return null;let n=Te(t);return n&&n.slice(11,19)},$=({valuePath:e},t)=>{if(t==null)return;let n=Kr(e==null?t:N(t,e));if(n==null)return;let r=Q(rr(`1970-01-01T`+n));return r==null?r:H(r.getTime())},qr=(e,t)=>n=>{let r=$(e,n);if(r==null)return!1;let i=$({...e,valuePath:`min`},t),a=$({...e,valuePath:`max`},t);return i==null||a==null?!1:!(r<i||r>a)},Jr=e=>{let t=Q(e);return t==null?``:t.toISOString().slice(11,19).replace(/:/gu,`.`)},Yr=e=>{if(!(e==null||e===``))return Q(typeof e==`string`?e.replace(/\./gu,`:`)+`Z`:e)}})),Zr,Qr=e((()=>{u(),F(),P(),v(),R(),Vr(),Y(),Xr(),Zr=class extends L(M){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`time-header-cell`},minWidth:{type:String,value:`63px`},width:{type:String,value:`210px`},flex:{type:String,value:`0`},filterStep:{type:String,value:`1`}}}getFilterFn(e,t){let n=$({...e,valuePath:`min`},t),r=$({...e,valuePath:`max`},t);if(!(n==null&&r==null))return qr(e,t)}getString(e,t){return Wr(e,t)}toXlsxValue(e,t){return Gr(e,t)}getComparableValue(e,t){return $(e,t)}serializeFilter(e,t){if(t==null)return;let n=Q(t.min),r=Q(t.max);if(!(n==null&&r==null))return Jr(n)+`~`+Jr(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:Yr(n[1]),max:Yr(n[2])}:null}renderCell(e,{item:t}){return Wr(e,t)}renderEditCell(e,{item:t},n){return h`<cosmoz-input
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${Wr(e,t)}
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
		></cosmoz-omnitable-time-range-input>`}computeSource(e,t){return J(e,t)}},customElements.define(`cosmoz-omnitable-column-time`,Zr)})),$r=e((()=>{gn(),Nn(),In(),Zn(),_r(),Or(),Ar(),Fr(),zr(),Qr()})),ei,ti=e((()=>{D(),v(),ei=({column:e,item:t,selected:n,folded:r,group:i})=>{if(!e)return _e;let a=e.renderGroup??e.renderCell;return a?a(e,{item:t,selected:n,folded:r,group:i}):_e},customElements.define(`cosmoz-omnitable-group-row`,T(ei,{useShadowDOM:!1}))})),ni,ri=e((()=>{D(),v(),ni=e=>{let{column:t}=e;return o(()=>{let n=0,r=0,i=i=>{e.dispatchEvent(new CustomEvent(`column-resize`,{bubbles:!0,composed:!0,detail:{newWidth:Math.ceil(r+i.pageX-n),column:t}}))},a=()=>{document.removeEventListener(`pointermove`,i),document.removeEventListener(`pointerup`,a)},o=t=>{n=t.pageX,r=e.previousElementSibling.getBoundingClientRect().width,document.addEventListener(`pointermove`,i),document.addEventListener(`pointerup`,a)};return e.addEventListener(`pointerdown`,o),()=>e.removeEventListener(`pointerdown`,o)},[t]),_e},customElements.define(`cosmoz-omnitable-resize-nub`,T(ni))})),ii,ai,oi,si,ci=e((()=>{D(),Ae(),x(),ii=({column:e,on:t,descending:n,setOn:r,setDescending:i})=>{let{name:a,title:o}=e??{};return h`<button
		class="sg"
		title=${xe(o)}
		data-on=${xe(a===t&&(n?`desc`:`asc`)||void 0)}
		@click=${e=>{let t=e.currentTarget?.dataset.on;t||(r(a),i(!1)),t===`asc`?i(!0):t===`desc`&&(r(),i(!1))}}
	>
		<span>${o}</span> ${a===t?w({width:`12`,height:`12`}):ie({width:`12`,height:`12`})}
	</button>`},ai=({columns:e,...t})=>e?.map(e=>ii({column:e,...t})),oi=()=>h`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,groupOn:t,setGroupOn:n,groupOnDescending:r,setGroupOnDescending:i}={})=>ai({columns:e?.filter?.(e=>e.groupOn),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`,si=()=>h`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,sortOn:t,setSortOn:n,descending:r,setDescending:i}={})=>ai({columns:e?.filter?.(e=>e.sortOn&&!e.noSort),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`}));function li(e,t,{suffix:n=``,read:r,write:a,ready:s=!0,multi:c}={}){let l=Oe({param:t,suffix:n,link:c?pi:fi,write:a??ue}),u=m(()=>{if(t==null)return!1;if(c){let e=et(t+n);return Object.keys(e).length>0}return tt(t+n)!==void 0},[]),[d,f]=i(()=>{if(t==null)return e;if(c){let i=et(t+n,r);return Object.keys(i).length>0?i:e}return tt(t+n,r)??e}),p=b(e=>f(t=>{let n=ve(e,t);return l.param!=null&&rt(l.link(l.param+l.suffix,n,l.write),null,{notify:!1}),n}),[]);return o(()=>{l.param==null||!s||u||e!=null&&p(e)},[s]),[d,p]}var ui,di,fi,pi,mi=e((()=>{ct(),we(),Se(),pt(),D(),ui=e=>(t,n,r=ue)=>{let i=at(),a=new URLSearchParams(i.hash.replace(`#`,``));return e(t,n,r,a),`#!`+Object.assign(i,{hash:a}).href.replace(location.origin,``)},di=e=>e==null||e===``,fi=ui((e,t,n,r)=>di(n(t))?r.delete(e):r.set(e,n(t))),pi=ui((e,t,n,r)=>{let i=Object.entries(t),a=i.map(n).filter(([,e])=>e!==void 0);if(a.length===0&&i.length>0)return;let o=e;Array.from(r.keys()).filter(e=>e.startsWith(o)).forEach(e=>r.delete(e)),a.forEach(([t,n])=>di(n)?r.delete(e+t):r.set(e+t,n))})})),hi,gi,_i,vi,yi,bi=e((()=>{D(),mi(),hi=e=>[!0,`true`,1,`yes`,`on`].includes(e),gi=e=>e===``||(e==null?void 0:hi(e)),_i=(e,t,n)=>b(r=>{e(r),n(e=>({...e,[t]:r}))},[e,t,n]),vi=(e,t,{settings:n,setSettings:r,resetRef:i,ready:a=!0})=>{let[s,c]=li(n.sortOn,t,{suffix:`-sortOn`,ready:a}),[l,u]=li(gi(n.descending),t,{suffix:`-descending`,read:gi,ready:a}),[d,f]=li(n.groupOn,t,{suffix:`-groupOn`,ready:a}),[p,h]=li(gi(n.groupOnDescending),t,{suffix:`-groupOnDescending`,read:gi,ready:a}),g=m(()=>e.find(e=>e.name===s),[e,s]),_=m(()=>e.find(e=>e.name===d),[e,d]),v={groupOn:d,setGroupOn:_i(f,`groupOn`,r),groupOnDescending:p,setGroupOnDescending:_i(h,`groupOnDescending`,r),sortOn:s,setSortOn:_i(c,`sortOn`,r),descending:l,setDescending:_i(u,`descending`,r),columns:e},y=m(()=>v,Object.values(v)),x=b(e=>{c(e.sortOn),f(e.groupOn),u(e.descending),h(e.groupOnDescending)},[]);return o(()=>void(i.current=x),[]),{...y,sortAndGroup:y,groupOnColumn:_,sortOnColumn:g}},yi=Ne(),customElements.define(`sort-and-group-provider`,yi.Provider),customElements.define(`sort-and-group-consumer`,T(({render:e})=>e(ee(yi)),{useShadowDOM:!1}))})),xi,Si,Ci=e((()=>{D(),Pe(),ri(),ci(),t(),bi(),xi=({data:e,columns:t,groupOnColumn:n,filters:r,setFilterState:i,sortAndGroup:{sortOn:a,setSortOn:o,descending:s,setDescending:c}={}})=>Me(t,e=>e.name,t=>[h`<div
				class="cell ${t.headerCellClass} header-cell"
				part="cell header-cell cell-${t.name} header-cell-${t.name}"
				?hidden="${t===n}"
				title="${t.headerTitleFn(t)}"
				name="${t.name}"
			>
				${t.renderHeader(t,r[t.name]??{},e=>i(t.name,e),t.source(t,e))}
				${E(!t.noSort,()=>ii({on:a,setOn:o,descending:s,setDescending:c,column:t}))}
			</div>`,h`<cosmoz-omnitable-resize-nub
				.column="${t}"
				name="${t.name}"
			></cosmoz-omnitable-resize-nub>`]),Si=({columns:e,settingsConfig:t,hideSelectAll:n,...r})=>{let i=ee(yi);return h`
		${E(e,e=>xi({columns:e,sortAndGroup:i,...r}))}
		${E(!n,()=>h` <cosmoz-omnitable-settings
					.config=${t}
					part="settings"
				></cosmoz-omnitable-settings>`)}
	`},customElements.define(`cosmoz-omnitable-header-row`,T(Si,{useShadowDOM:!1}))})),wi,Ti,Ei=e((()=>{Ce(),D(),wi=k`
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
`,Ti=({column:e})=>h`
	<div class="label" title="${e.title}" part="item-expand-label">
		${e.title}
	</div>
	<div class="value" part="item-expand-value">
		<slot></slot>
	</div>
`,customElements.define(`cosmoz-omnitable-item-expand-line`,T(Ti,{styleSheets:[se(wi)]}))})),Di,Oi=e((()=>{D(),v(),dt(),Ei(),Di=({columns:e,item:t,selected:n,expanded:r,groupOnColumn:i})=>$e(e,e=>h`<cosmoz-omnitable-item-expand-line
				.column=${e}
				?hidden=${e===i}
				exportparts="item-expand-label, item-expand-value"
				>${e.renderCell(e,{item:t,selected:n,expanded:r})}</cosmoz-omnitable-item-expand-line
			>`),customElements.define(`cosmoz-omnitable-item-expand`,T(Di,{useShadowDOM:!1}))})),ki,Ai,ji=e((()=>{D(),Pe(),ki=(e,t,n)=>e.editable?e.renderEditCell(e,t,n(e,t.item)):e.renderCell(e,t),Ai=({columns:e,groupOnColumn:t,item:n,index:r,selected:i,expanded:a,onItemChange:o})=>Me(e,e=>e.name,e=>h`<div
				class="cell itemRow-cell ${e.cellClass??``}"
				part="cell itemRow-cell cell-${e.name} itemRow-cell-${e.name}"
				?hidden="${e===t}"
				?editable="${e.editable}"
				title="${e.cellTitleFn(e,n)}"
				name="${e.name}"
			>
				${ki(e,{item:n,index:r,selected:i,expanded:a},o)}
			</div>`),customElements.define(`cosmoz-omnitable-item-row`,T(Ai,{useShadowDOM:!1}))})),Mi,Ni,Pi=e((()=>{Ce(),Mi=k`
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
`,Ni=k`
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

	${Mi}

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
`})),Fi,Ii,Li=e((()=>{Ze(),Fi=e=>{let t=e.replace(/"/gu,`""`);return t.search(/("|,|\n)/gu)>=0?`"`+t+`"`:e},Ii=(e,t,n)=>{let r=e.map(e=>Fi(e.title)).join(`;`)+`
`,i=t.map(t=>e.map(e=>{let n=e.getString(e,t);return n==null?``:Fi(String(n))}).join(`;`)+`
`);i.unshift(r),st(new File(i,n,{type:`text/csv;charset=utf-8`}))}})),Ri,zi,Bi=e((()=>{ot(),Ze(),Ri=(e,t)=>{let n=e.map(e=>e.title),r=t.map(t=>e.map(e=>e.toXlsxValue(e,t)??``));return r.unshift(n),r},zi=(e,t,n,r)=>{let i=Ri(e,t),a=new ut(n).addSheetFromData(i,r).generate();st(new File([a],n,{type:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`}))}})),Vi,Hi=e((()=>{Ve(),x(),ye(),A(),v(),Li(),Bi(),Vi=({columns:e,selectedItems:t,csvFilename:n,xlsxFilename:r,xlsxSheetname:i,topPlacement:a})=>h`<cosmoz-bottom-bar
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
				@click=${()=>Ii(e,t,n)}
			>
				${C(`Save selected items as CSV`)}
			</cosmoz-button>
			<cosmoz-button
				@click=${()=>zi(e,t,r,i)}
			>
				${C(`Save selected items as XLSX`)}
			</cosmoz-button>
			<slot name="download-menu"></slot>
		</cosmoz-dropdown-menu>
	</cosmoz-bottom-bar>`})),Ui,Wi=e((()=>{v(),t(),Ui=({allSelected:e,onAllCheckboxChange:t,sortAndGroup:n,dataIsValid:r,data:i,columns:a,filters:o,groupOnColumn:s,setFilterState:c,settingsConfig:l,hideSelectAll:u})=>h`<sort-and-group-provider .value=${n}>
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
	</sort-and-group-provider>`})),Gi,Ki,qi=e((()=>{D(),Gi=re`
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
`,Ki=({settingsConfig:e})=>{let{columns:t,collapsed:n}=e,r=t.filter(e=>!n.some(t=>t.name===e.name));return h`<div class="skeleton">
		${Array.from({length:5},()=>h`<div>
					<div class="checkbox"></div>
					${r.map(e=>h`<div
								class="cell"
								part=${`cell-${e.name}`}
								name=${e.name}
							></div>`)}
				</div>`)}
	</div>`},customElements.define(`cosmoz-omnitable-skeleton`,T(Ki,{styleSheets:[Gi]}))})),Ji,Yi=e((()=>{D(),qi(),ze(),A(),v(),t(),Ji=(e,t)=>{let{settingsConfig:n}=e,{processedItems:r,dataIsValid:i,filterIsTooStrict:a,loading:o,displayEmptyGroups:s,compareItemsFn:c,selectedItems:u,setSelectedItems:d,renderItem:f,renderGroup:p,error:m}=t;return h`${E(!o&&!i&&!m,()=>h`<div class="tableContent-empty">
					<slot name="empty-set-message">
						${lt({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
						<div class="tableContent-empty-message">
							<h3>${C(`Working set empty`)}</h3>
							<p>${C(`No data to display`)}</p>
						</div>
					</slot>
				</div>`)}
		${E(a,()=>h`<div class="tableContent-empty">
					${lt({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
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
					${qe({width:`96px`,height:`96px`,styles:`margin-right: 24px; fill: currentColor;`})}
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
		</div>`}})),Xi,Zi,Qi=e((()=>{Ce(),Pi(),Xi=k`
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
	${Mi}
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
`,Zi=k`
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
`})),$i,ea,ta=e((()=>{Se(),D(),$i=e=>{let t=parseInt(e,10);return isFinite(t)?t:void 0},ea=e=>{let{config:t}=e,{settings:n,setSettings:r,collapsed:i,requestTween:a}=t,o=Oe({collapsed:i,settings:n.columns,requestTween:a,setSettings:b(e=>r(t=>({...t,columns:e})),[r])});return{...t,onDown:b(e=>{e.target.closest(`.pull`)&&(o.handle=e.currentTarget)},[o]),onDragStart:b(e=>{let{target:t}=e,n=$i(t.dataset.index);if(!o.handle?.contains(t)||n==null)return e.preventDefault();o.handle=null,e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`omnitable/sort-index`,n),e.dataTransfer.setData(`text/plain`,n),setTimeout(()=>t.classList.add(`drag`),0),t.addEventListener(`dragend`,e=>e.target.classList.remove(`drag`),{once:!0})},[o]),onDragEnter:b(e=>{let t=e.currentTarget;t===e.target&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`,t.classList.add(`dragover`))},[]),onDragOver:b(e=>{e.preventDefault(),e.currentTarget.classList.add(`dragover`)},[]),onDragLeave:b(e=>{let t=e.currentTarget;t.contains(e.relatedTarget)||t.classList.remove(`dragover`)},[]),onDrop:b(e=>{let t=$i(e.dataTransfer.getData(`omnitable/sort-index`)),n=$i(e.currentTarget.dataset.index),{settings:r,setSettings:i,requestTween:a}=o;e.currentTarget.classList.remove(`dragover`),e.preventDefault();let s=r.slice();s.splice(n+(t>=n?0:-1),0,s.splice(t,1)[0]),a?.(),i(s)},[o]),onToggle:b(e=>{let{settings:t,setSettings:n,requestTween:r}=o,i=t.map(e=>({...e,disabled:e.disabled||o.collapsed?.some(t=>t.name===e.name)})),a=$i(e.target.closest(`[data-index]`)?.dataset.index);i.splice(a,1,{...t[a],disabled:!e.target.checked,priority:e.target.checked?t.reduce((e,t)=>Math.max(e,t.priority),0)+1:t[a].priority}),r?.(),n(i)},[o])}}})),na,ra,ia,aa,oa=e((()=>{Ye(),ft(),vt(),x(),Ce(),ye(),D(),A(),t(),ci(),Qi(),ta(),na=[Je({apply({availableHeight:e,elements:t}){Object.assign(t.floating.style,{maxHeight:`${Math.max(0,e)}px`})}}),...We],ra=({onDragStart:e,onDragEnter:t,onDragOver:n,onDragLeave:r,onDrop:i,onDown:a,onToggle:o,collapsed:s,filters:c})=>(l,u)=>{let d=!!s?.find(e=>e.name===l.name),f=!l.disabled&&!d;return h` <div
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
		</div>`},ia=e=>{let{settings:t,settingsId:n,onSave:r,onReset:i,hasChanges:o,opened:s,setOpened:c,...l}=ea(e);return h` <div class="headline">
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
				<div class="list">${t.columns?.map(ra(l))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${s.sort}
				@click=${()=>c(e=>({...e,sort:!e.sort}))}
			>
				${C(`Sort on`)} ${w({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse ?opened=${s.sort}> ${si()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${s.group}
				@click=${()=>c(e=>({...e,group:!e.group}))}
				part="groups groups-heading"
			>
				${C(`Group on`)} ${w({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse ?opened=${s.group} part="groups groups-heading"
				>${oi()}</cosmoz-collapse
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
				</div>`)}`},customElements.define(`cosmoz-omnitable-settings-ui`,T(ia,{styleSheets:[se(Xi)]})),aa=({config:e,newLayout:t})=>h`
	<cosmoz-dropdown
		.placement="${t?`bottom-start`:`bottom-end`}"
		.middleware="${na}"
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
`,customElements.define(`cosmoz-omnitable-settings`,T(aa,{styleSheets:[se(Zi)]}))})),sa,ca,la,ua,da,fa=e((()=>{oe(),sa=[`sortOn`,`descending`,`groupOn`,`groupOnDescending`],ca=e=>t=>typeof t==`object`&&!!t&&`name`in t&&t.name===e,la=(e=[],t=[],n=[])=>{let r=t.filter(t=>e.some(ca(t.name))),i=e.filter(e=>e.name!=null&&!t.some(ca(e.name))&&!n.some(ca(e.name))),a=n.filter(e=>!t.some(ca(e.name)));return[...r,...a.flatMap(t=>{let n=e.find(e=>e.name===t.name);return n?{...t,title:n.title??t.title??``,minWidth:parseInt(n.minWidth??`0`,10)}:[]}),...i.map(e=>{let{name:t,title:n,priority:r,minWidth:i,width:a,flex:o}=e;return{name:t??``,title:n??``,priority:r??0,minWidth:parseInt(i??`0`,10),width:parseInt(a??`0`,10),flex:parseInt(o??`0`,10)}})]},ua=(e,t)=>({...t,...je(Array.from(sa))(e),columns:e.columns?.map(je([`name`,`priority`,`width`,`flex`,`disabled`]))}),da=({columns:e,settings:t,savedSettings:n,initial:r})=>({...Object.fromEntries(sa.flatMap(e=>r?.[e]==null?[]:[[e,r[e]]])),...n?je(Array.from(sa))(n):{},...t,columns:la(e,t?.columns,n?.columns)})})),pa,ma=e((()=>{pa=({prefix:e=`omnitable-`}={})=>({write:async(t,n)=>{let r=e+t;try{n?localStorage.setItem(r,JSON.stringify(n)):localStorage.removeItem(r)}catch(e){console.error(e)}},read:async t=>{if(!t)return null;try{let n=localStorage.getItem(e+t);return n==null?null:JSON.parse(n)}catch(e){return console.error(e),null}}})})),ha,ga,_a=e((()=>{D(),ma(),ha=Ne(pa),ga=()=>{let e=ee(ha);return m(()=>e(),[e])}})),va=e((()=>{_a(),ma()})),ya,ba=e((()=>{D(),va(),fa(),ya=(e,t,n,r)=>{let[a,s]=i(e?void 0:null),{read:c,write:l}=ga();return o(async()=>{e&&s(await c(e))},[e,c]),{settingsId:e,savedSettings:a,onSave:b(async()=>{if(!e)return;let r=ua(t,a);await l(e,r),n(),s(r)},[t,a]),onReset:b(async t=>{n(),t.shiftKey&&(await l(e),s(null)),r?.()},[r]),hasChanges:t!=null}}})),xa,Sa=e((()=>{D(),q(),fa(),ba(),xa=({settingsId:e,host:t})=>{let n=m(()=>Object.fromEntries(sa.map(e=>[e,t[e]])),[]),r=te(),a=b(()=>{r.current?.(n)},[n]),[o,s]=i(),[c,l]=i({columns:!0,sort:!0}),{savedSettings:u,...d}=ya(e,o,s,a),{enabledColumns:f,disabledFiltering:p}=t,h=fn(t,{enabledColumns:f,disabledFiltering:p}),g=m(()=>da({columns:h,settings:o,savedSettings:u,initial:n}),[h,o,u]),_=m(()=>g.columns.map(e=>h.find(t=>t.name===e.name)).filter(Boolean),[h,...g.columns.map(e=>e.name)]);return{...d,savedSettings:u,opened:c,setOpened:l,settings:g,columns:_,setSettings:s,resetRef:r}}})),Ca=e((()=>{oa(),Sa()})),wa,Ta,Ea=e((()=>{wa=e=>Number.isFinite(e)?e:0,Ta=(e,t)=>{let n=[],[r,i]=e.reduce(([e,t],{width:n,flex:r})=>[e+n,t+r],[0,0]),a=t-r,o=wa(a/i),s=0,c=0,l=0;for(let t=0;t<e.length;t++){let{width:i,minWidth:u,flex:d}=e[t];if(u>i+(a>=0?o*d:i*a/r)){s+=i,c+=u,l+=d,n[t]=u;continue}if(d===0){s+=i,c+=i,n[t]=i;continue}}r-=s,a=t-c-r,i-=l,o=wa(a/i);for(let t=0;t<e.length;t++){if(n[t]!=null)continue;let{width:i,flex:s}=e[t];n[t]=i+(a>=0?o*s:i*a/r)}return n}})),Da,Oa,ka=e((()=>{Da=Symbol(`index`),Oa=(e,t)=>{if(typeof e.findLastIndex==`function`)return e.findLastIndex(t);for(let n=e.length-1;n>=0;n--)if(t(e[n],n,e))return n;return-1}})),Aa,ja,Ma,Na=e((()=>{Ea(),ka(),Aa=(e,t)=>{let n=Oa(e,e=>e!=null&&e>0),r=(e,t)=>`.cell[name="${e}"], cosmoz-omnitable-skeleton::part(cell-${e}){width: ${Math.floor(t)}px;padding: 0 min(3px, ${t/2}px)}`,i=e=>`cosmoz-omnitable-resize-nub[name="${e}"]{display:none}`,a=e=>`cosmoz-omnitable-resize-nub[name="${e}"], .cell[name="${e}"]{display:none}`;return t.map((t,o)=>{let s=e[o];if(s==null||s===0)return a(t.name);let c=r(t.name,s);return o===n?`${c}\n${i(t.name)}`:c}).join(`
`)},ja=(e,t,n)=>{let r=e.filter(e=>!e.hidden),i=r.reduce((e,{width:t})=>e+t,0);if(r.length>1&&i>t)return ja(r.slice(1),t,n);let a=r.reduce(([e,t],n,r)=>[Math.max(e,n.index),n.index>e?r:t],[-1,-1])[1];return a!==-1&&(r[a].flex=1),Ta(r,t).reduce((e,t,n)=>(e[r[n].index]=t,e),Array(n).fill(void 0))},Ma=(e,t)=>e.length===0?`.cell {display: none;}`:Aa(e,t)})),Pa,Fa=e((()=>{D(),Pa=(e,t)=>o(()=>{let n=new ResizeObserver(([e])=>{e.contentRect?.width!==0&&t(e.contentRect.width-88)});return n.observe(e),()=>n.unobserve(e)},[])})),Ia,La=e((()=>{D(),Fa(),Ia=e=>{let[t,n]=i(()=>e.getBoundingClientRect().width-88);return Pa(e,n),t}})),Ra,za=e((()=>{D(),Na(),Ra=({canvasWidth:e,groupOnColumn:t,config:n,miniColumn:r})=>m(()=>{if(!Array.isArray(n)||e==null||e===0)return[];let i=n.map((e,n)=>({minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,name:e.name,index:n,hidden:e.name===t?.name||e.disabled})).map(e=>r?{...e,hidden:r.name!==e.name}:e).sort(({index:e,priority:t},{index:n,priority:r})=>t===r?n-e:t-r);return ja(i,e,i.length)},[e,t,n])})),Ba,Va=e((()=>{D(),Ba=({host:e,canvasWidth:t,columns:n})=>{let r=e.miniBreakpoint??480,i=m(()=>t<=r,[t,r]),[a,...s]=m(()=>i?n?.filter(e=>e.mini!=null).sort((e,t)=>(e.mini??0)-(t.mini??0)):[],[n,i])??[],c=!!a;return o(()=>{e.toggleAttribute(`mini`,c)},[c]),{isMini:c&&i,miniColumn:a,miniColumns:s}}})),Ha,Ua=e((()=>{D(),Ha=({host:e,canvasWidth:t,layout:n,setSettings:r,requestTween:i})=>{let a=te();a.current=e=>{i(),r(r=>{let i=r.columns,{detail:{newWidth:a,column:o}}=e,s=i.findIndex(e=>e.name===o.name),c=[],l=i.reduce((e,t)=>Math.max(e,t.priority),-1/0);for(let e=0;e<n.length;e++)if(c[e]={...i[e]},e<s&&n[e]&&(c[e].width=n[e],c[e].flex=0,c[e].priority=l),e===s){let r=n.reduce((e,t,n)=>n<s&&t?e-t:e,t);c[e].width=Math.min(r,Math.max(a,i[e].minWidth)),c[e].flex=0,c[e].priority=l}return{...r,columns:c}})},o(()=>{let t=e=>a.current?.(e);return e.addEventListener(`column-resize`,t),()=>e.removeEventListener(`column-resize`,t)},[])}})),Wa,Ga,Ka,qa=e((()=>{we(),Se(),D(),Wa=(e,t)=>{let n=m(()=>{let t=!1,n,r=()=>{t&&(n=requestAnimationFrame(r),e()&&(t=!1))};return{start:()=>{t=!0,cancelAnimationFrame(n),n=requestAnimationFrame(r)},stop:()=>{t=!1,cancelAnimationFrame(n)}}},[]);o(()=>{n.start()},t),o(()=>()=>n.stop(),[])},Ga=(e=0,t=0)=>Math.abs(e-t)<.1,Ka=(e,t=1.9,n=pe,r)=>{let i=Oe({target:e,speedFactor:t,onConverge:r});Wa(b(()=>{if(!i.tween)return i.tween=i.target,n(i.tween),i.onConverge?.(),!0;if(i.target.every((e,t)=>i.tween[t]===e))return n(i.tween),i.onConverge?.(),!0;if(i.tween=i.target.map((e,t)=>Ga(i.tween[t],e)?e:(i.tween[t]??0)+((e??0)-(i.tween[t]??0))/i.speedFactor||0),n(i.tween),i.tween.every((e,t)=>e===i.target[t]))return i.onConverge?.(),!0},[]),[e])}})),Ja,Ya,Xa=e((()=>{Se(),D(),Na(),La(),za(),Va(),Ua(),qa(),Ja=e=>{let t=m(()=>new CSSStyleSheet,[]);return o(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,t]},[]),t},Ya=({host:e,columns:t,settings:n,setSettings:r,resizeSpeedFactor:a,sortAndGroupOptions:o})=>{let s=Ia(e),{isMini:c,miniColumn:l,miniColumns:u}=Ba({host:e,canvasWidth:s,columns:t}),{groupOnColumn:d}=o,f=Ra({canvasWidth:s,groupOnColumn:d,miniColumn:l,config:n.columns}),p=Ja(e),h=m(()=>n.columns.reduce((e,n,r)=>f[r]!=null||n.name===d?.name||n.disabled?e:[...e,t.find(e=>e.name===n.name)],[]),[t,n,f]),[g,_]=i(1),v=b(()=>_(a??1.9),[a]),y=b(()=>_(1),[]),x=Oe({columns:n.columns});return Ka(f,g,e=>{let t=Ma(e,x.columns);p.replace(t)},y),Ha({host:e,canvasWidth:s,layout:f,setSettings:e=>r(e(n)),requestTween:v}),{isMini:c,collapsedColumns:h,miniColumns:u,requestTween:v}}})),Za,Qa=e((()=>{Za=({host:e,...t})=>{let{csvFilename:n=`omnitable.csv`,xlsxFilename:r=`omnitable.xlsx`,xlsxSheetname:i=`Omnitable`,topPlacement:a=`top-end`}=e;return{csvFilename:n,xlsxFilename:r,xlsxSheetname:i,topPlacement:a,...t}}})),$a,eo=e((()=>{D(),$a=({host:e,selectedItems:t,data:n,sortAndGroupOptions:r,collapsedColumns:i,settings:a,filterFunctions:s,settingS:c,filters:l,requestTween:u,...d})=>{let f=n&&n.length>0&&t.length===n.length,p=t=>{t.target.checked?e.shadowRoot.querySelector(`#groupedList`).selectAll():e.shadowRoot.querySelector(`#groupedList`).deselectAll()},{groupOnColumn:h}=r,g=m(()=>[h,...i,...a.columns.filter(e=>e.disabled)].some(e=>e&&Object.keys(s).includes(e.name)),[s,a,i]),_=m(()=>({...c,collapsed:i,badge:g,filters:l,requestTween:u}),[c,i,g,l,u]);return o(()=>{let t=e.shadowRoot.querySelector(`#tableContent`),n=new ResizeObserver(t=>requestAnimationFrame(()=>{e.style.setProperty(`--ot-height`,t[0]?.contentRect.height+`px`)}));return n.observe(t),()=>n.unobserve(t)},[]),{allSelected:f,onAllCheckboxChange:p,data:n,settingsConfig:_,filters:l,groupOnColumn:h,sortAndGroup:r.sortAndGroup,...d}}})),to,no,ro,io,ao,oo=e((()=>{x(),ye(),D(),t(),ka(),Y(),to=e=>e?`groupRow groupRow-folded`:`groupRow`,no=({item:e,index:t})=>n=>E(n?.length>0,()=>h`
				<div class="itemRow-minis" part="item-minis">
					${n.map(n=>h`<div
								class="itemRow-mini"
								part="item-mini item-mini-${n.name}"
							>
								${(n.renderMini??n.renderCell)(n,{item:e,index:t})}
							</div>`)}
				</div>
			`),ro=({columns:e,collapsedColumns:t,miniColumns:n,onItemClick:r,onCheckboxChange:i,dataIsValid:a,groupOnColumn:o,onItemChange:s,rowPartFn:c})=>(l,u,{selected:d,expanded:f,toggleCollapse:p})=>h`
		<div
			?selected=${d}
			part="${[`itemRow`,`itemRow-${l[Da]}`,c?.(l,u)].filter(Boolean).join(` `)}"
			.dataIndex=${l[Da]}
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
			${no({item:l,index:u})(n)}
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
	`,io=({onCheckboxChange:e,dataIsValid:t,groupOnColumn:n})=>(r,i,{selected:a,folded:o,toggleFold:s})=>h` <div
			class="${to(o)}"
			part="groupRow groupRow-${r[Da]}"
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
		</div>`,ao=({host:e,error:t,dataIsValid:n,processedItems:r,columns:i,collapsedColumns:a,miniColumns:s,sortAndGroupOptions:c,rowPartFn:l,...u})=>{let{loading:d=!1,displayEmptyGroups:f=!1,compareItemsFn:p}=e,h=te({shiftKey:!1,ctrlKey:!1}),g=b(t=>{let n=t.target.dataItem,r=t.target.checked;h.current.shiftKey?e.shadowRoot.querySelector(`#groupedList`).toggleSelectTo(n,r):h.current.ctrlKey?(t.target.checked=!0,e.shadowRoot.querySelector(`#groupedList`).selectOnly(n)):e.shadowRoot.querySelector(`#groupedList`).toggleSelect(n,r),t.preventDefault(),t.stopPropagation()},[]);o(()=>{let e=({shiftKey:e,ctrlKey:t})=>{h.current={shiftKey:e,ctrlKey:t}};return window.addEventListener(`keydown`,e),window.addEventListener(`keyup`,e),()=>{window.removeEventListener(`keydown`,e),window.removeEventListener(`keyup`,e)}},[]);let _=b(t=>{let n=t.composedPath();n.slice(0,n.indexOf(t.currentTarget)).find(e=>e.matches?.(`a, .checkbox, .expand`))||e.dispatchEvent(new window.CustomEvent(`omnitable-item-click`,{bubbles:!0,composed:!0,detail:{item:t.currentTarget.dataItem,index:t.currentTarget.dataIndex}}))},[]),{groupOnColumn:v}=c,y=b((t,n)=>r=>mn(e,t,n,r),[]);return{...u,processedItems:r,dataIsValid:n,filterIsTooStrict:n&&r.length<1,loading:d,compareItemsFn:p,displayEmptyGroups:f,error:t,renderItem:m(()=>ro({columns:i,collapsedColumns:a,miniColumns:s,onItemClick:_,onCheckboxChange:g,dataIsValid:n,groupOnColumn:v,onItemChange:y,rowPartFn:l}),[i,a,_,g,n,v,y,l]),renderGroup:m(()=>io({onCheckboxChange:g,dataIsValid:n,groupOnColumn:v}),[g,n,v])}}})),so,co=e((()=>{so=(e,t)=>{if(e===t)return 0;if(e==null)return-1;if(t==null)return 1;let n=typeof e,r=typeof t;return n===`object`&&r===`object`?e.toString()<t.toString()?-1:1:n===`number`&&r===`number`?e-t:n===`string`&&r===`string`?e<t?-1:1:n===`boolean`&&r===`boolean`?e?-1:1:(console.warn(`unsupported sort`,n,e,r,t),0)}})),lo,uo,fo,po,mo,ho,go=e((()=>{we(),D(),co(),q(),mi(),ka(),lo=(e,t)=>(n,r)=>so(e(n),e(r))*(t?-1:1),uo=e=>e.replace(/([a-z0-9])([A-Z])/gu,`$1-$2`).toLowerCase(),fo=(e,t)=>{!e||!t||Object.entries(t).forEach(([t,n])=>{e[K].__ownChange=!0,e[K][t]=n,e[K].__ownChange=!1,e[K].dispatchEvent(new CustomEvent(`${uo(t)}-changed`,{bubbles:!0,detail:{value:n}}))})},po=(e,t)=>Object.assign(e,{[Da]:t}),mo=Symbol(`unparsed`),ho=({data:e,columns:t,hashParam:n,sortAndGroupOptions:r,noLocalSort:i,noLocalFilter:a})=>{let{groupOnColumn:s,groupOnDescending:c,sortOnColumn:l,descending:u}=r,d=b(([e,n])=>{let r=t.find(({name:t})=>t===e);return r==null?[e,void 0]:[e,n.filter&&r.serializeFilter(r,n.filter)]},[t]),f=b(([e,n])=>{let r=t.find(({name:t})=>t===e);if(r==null)return[e,{[mo]:n}];let i={filter:r.deserializeFilter(r,n)};return fo(r,i),[e,i]},[t]),[p,h]=li({},n,{multi:!0,suffix:`-filter--`,write:d,read:f}),g=b((e,n)=>h(r=>{let i=ve(n,r[e]);return fo(t.find(t=>t.name===e),i),{...r,[e]:{...r[e],...i}}}),[t,h]),_=m(()=>Object.fromEntries(t.map(e=>[e.name,!e.noLocalFilter&&e.getFilterFn(e,p[e.name]?.filter)]).filter(([,e])=>!!e)),[t,...m(()=>Object.values(p).map(e=>e.filter),[p])]),v=m(()=>!Array.isArray(e)||e.length===0?[]:Object.entries(_).length===0||a?e.slice():e.filter(e=>Object.values(_).every(t=>t(e))),[e,_,a]),y=m(()=>{if(!i&&!s&&l!=null&&l.sortOn!=null)return v.slice().sort(lo(e=>l.getComparableValue({...l,valuePath:l.sortOn},e),u));if(s!=null&&s.groupOn!=null){let e=v.reduce((e,t)=>{let n=s.getComparableValue({...s,valuePath:s.groupOn},t);if(n===void 0)return e;let r=e.find(e=>e.id===n);return r?(r.items.push(t),e):(r={id:n,name:n,items:[t]},[...e,r])},[]);return e.sort(lo(e=>s.getComparableValue({...s,valuePath:s.groupOn},e.items[0]),c)),!l||i?e:e.filter(e=>Array.isArray(e.items)).map(e=>(e.items.sort(lo(e=>l.getComparableValue({...l,valuePath:l.sortOn},e),u)),e))}return v},[v,s,c,l,u,i]),x=m(()=>{let e=0,t=0,n=[];return y.forEach(r=>{if(Array.isArray(r.items)){po(r,t++),r.items.forEach(t=>{po(t,e++),n.push(t)});return}return po(r,e++),n.push(r)},[]),n},[y]);return o(()=>{h(e=>Object.values(e).some(e=>e[mo]!=null)?Object.fromEntries(Object.entries(e).map(([e,t])=>t[mo]==null?[e,t]:f([e,t[mo]]))):e)},[f]),{processedItems:y,visibleData:x,filters:p,filterFunctions:_,setFilterState:g}}})),_o,vo,yo=e((()=>{n(),c(),D(),_o=e=>{let t=t=>{let n=e.data.indexOf(t);if(n<0)return null;let r=e.data.splice(n,1);if(e.data=e.data.slice(),Array.isArray(r)&&r.length>0)return r[0]},n=(t,n)=>{e.data.splice(t,1,n),e.data=e.data.slice()};return{removeItem:t,removeItems(t){let n=[];for(let r=t.length-1;r>=0;--r){let i=e.removeItem(t[r]);i!=null&&n.push(i)}return n},replaceItemAtIndex:n,replaceItem(t,r){let i=e.data.indexOf(t);if(i>-1)return n(i,r)},selectItem(t){e.shadowRoot.querySelector(`#groupedList`).select(t)},selectAll(){e.shadowRoot.querySelector(`#groupedList`).selectAll()},deselectAll(){e.shadowRoot.querySelector(`#groupedList`).deselectAll()},deselectItem(t){e.shadowRoot.querySelector(`#groupedList`).deselect(t)},isItemSelected(t){return e.shadowRoot.querySelector(`#groupedList`).isItemSelected(t)}}},vo=({host:e,visibleData:t,filters:n,...r})=>{let{setFilterState:i}=r,a=m(()=>_o(e),[]),[s,c]=y(`selectedItems`,[]);he(r,Object.values(r)),he(a,Object.values(a)),o(()=>{let t=e=>i(e.detail.name,t=>({...t,...e.detail.state}));return e.addEventListener(`legacy-filter-changed`,t),()=>e.removeEventListener(`legacy-filter-changed`,t)},[]),ge(`visibleData`,t),ge(`sortedFilteredGroupedItems`,r.sortedFilteredGroupedItems),ge(`sortOn`,r.sortOn),ge(`descending`,r.descending),ge(`isMini`,r.isMini);let l=m(()=>Object.fromEntries(Object.entries(n).filter(([,{filter:e}])=>e!==void 0).map(([e,{filter:t}])=>[e,t])),[n]);return ge(`filters`,l,Object.values(l)),{selectedItems:s,setSelectedItems:c}}})),bo,xo=e((()=>{Ca(),Xa(),Qa(),eo(),oo(),go(),yo(),bi(),bo=e=>{let{hashParam:t,settingsId:n,data:r,resizeSpeedFactor:i,noLocal:a,noLocalSort:o=a,noLocalFilter:s=a,error:c,rowPartFn:l}=e,u=xa({settingsId:n,host:e}),{settings:d,setSettings:f,columns:p,resetRef:m,savedSettings:h}=u,g=vi(p,t,{settings:d,setSettings:f,resetRef:m,ready:h!==void 0}),{processedItems:_,visibleData:v,filters:y,setFilterState:b,filterFunctions:x}=ho({data:r,columns:p,hashParam:t,sortAndGroupOptions:g,noLocalSort:o,noLocalFilter:s}),{isMini:ee,collapsedColumns:S,miniColumns:C,requestTween:te}=Ya({host:e,columns:p,settings:d,setSettings:f,resizeSpeedFactor:i,sortAndGroupOptions:g}),ne=r&&Array.isArray(r)&&r.length>0,{selectedItems:re,setSelectedItems:ie}=vo({host:e,visibleData:v,sortedFilteredGroupedItems:_,columns:p,filters:y,setFilterState:b,isMini:ee,...g});return{header:$a({host:e,selectedItems:re,sortAndGroupOptions:g,dataIsValid:ne,data:r,columns:p,filters:y,collapsedColumns:S,settings:d,filterFunctions:x,settingS:u,setFilterState:b,hideSelectAll:e.hideSelectAll===!0,requestTween:te}),list:ao({host:e,error:c,dataIsValid:ne,processedItems:_,selectedItems:re,setSelectedItems:ie,columns:p,collapsedColumns:S,miniColumns:C,sortAndGroupOptions:g,rowPartFn:l}),footer:Za({host:e,selectedItems:re,columns:p})}}})),So=e((()=>{v(),customElements.define(`cosmoz-grouped-list-row`,class extends HTMLElement{get item(){return this._item}set item(e){this._item=e,this._render()}get index(){return this._index}set index(e){this._index=e,this._render()}get renderFn(){return this._renderFn}set renderFn(e){this._renderFn=e,this._render()}_render(){this._item==null||this._index==null||this._renderFn==null||r(this._renderFn(this._item,this._index),this)}})})),Co,wo,To,Eo,Do,Oo,ko,Ao,jo,Mo=e((()=>{Co={group:Symbol(`group`)},wo=(e,t)=>(t.has(e)||t.set(e,{}),t.get(e)),To=(e,t)=>!!wo(e,t).expanded,Eo=(e,t)=>!!wo(e,t).folded,Do=e=>e?e.items instanceof Array:!1,Oo=e=>{if(!Array.isArray(e)||e.length===0)return;let t=Array.isArray(e[0]?.items);if(!e.every(e=>Array.isArray(e.items)===t))throw Error(`Data must be homogeneous.`)},ko=(e,t,n)=>{if(Array.isArray(e))return Oo(e),e.reduce((e,r)=>{let i=r;return i.items?i.items.length?wo(r,n).folded?e.concat(r):e.concat(r,i.items.map(e=>Object.assign(e,{[Co.group]:r}))):t?e.concat(r):e:e.concat(r)},[])},Ao=(e,...t)=>typeof e==`function`?e(...t):e,jo=(e,t)=>e===t})),No,Po=e((()=>{D(),Mo(),No=()=>{let[e,t]=i(()=>[new WeakMap]);return{setItemState:b((e,n)=>t(([t])=>{let r=wo(e,t);return Object.assign(r,Ao(n,r)),[t]}),[]),state:e[0],signal:e}}})),Fo,Io=e((()=>{D(),Po(),Mo(),Fo=()=>{let{setItemState:e,state:t,signal:n}=No();return{state:t,signal:n,toggleFold:b((t,n)=>{Do(t)&&e(t,e=>({folded:n===void 0?!e.folded:n}))},[]),toggleCollapse:b((t,n)=>{Do(t)||e(t,e=>({expanded:n===void 0?!e.expanded:!n}))},[])}}})),Lo,Ro=e((()=>{D(),Mo(),Lo=({compareItemsFn:e,data:t,flatData:n})=>{let[r,a]=y(`selectedItems`,()=>[]),[s,c]=i(),l=b(e=>r.includes(e),[r]),u=b(e=>e?.items?.every(l)??!1,[l]),d=b(e=>l(e)||u(e),[l,u]),f=b(e=>{let t=e.items??[e];a(e=>[...e,...t.filter(t=>!e.includes(t))]),c(e)},[]),p=b(e=>{let t=e.items??[e];a(e=>e.filter(e=>!t.includes(e))),c(e)},[]),m=b(e=>{a(e.items?.slice()||[e]),c(e)},[]),h=b(()=>{a(t.flatMap(e=>e.items||e)),c(void 0)},[t]),g=b(()=>{a([]),c(void 0)},[]),_=b((e,t=!d(e))=>t?f(e):p(e),[d]),v=b((t,r)=>{if(!n)return;let i=s?n.findIndex(t=>e(t,s)):-1;if(i<0)return _(t,r);let[a,o]=[i,n.indexOf(t)].sort((e,t)=>e-t);n.slice(a,o+1).forEach((e,t,n)=>{t>0&&t<n.length-1&&Do(e)||_(e,r)}),c(t)},[n,e,_]);return o(()=>a(t=>t.length>0&&n?n.filter(n=>t.find(t=>e(n,t))):t),[n]),{selectedItems:r,isItemSelected:l,isGroupSelected:u,isSelected:d,select:f,deselect:p,selectOnly:m,selectAll:h,deselectAll:g,toggleSelect:_,toggleSelectTo:v}}})),zo,Bo,Vo,Ho=e((()=>{fe(),n(),D(),v(),So(),Io(),Ro(),Mo(),zo={host:{position:`relative`,display:`flex`,flexDirection:`column`}},Bo=e=>{let{data:t,renderItem:n,renderGroup:r,displayEmptyGroups:i,compareItemsFn:a=jo}=e,{toggleFold:o,toggleCollapse:s,state:c,signal:l}=Fo(),u=m(()=>ko(t,i,c),[t,i,l]),{selectedItems:d,isItemSelected:f,isGroupSelected:p,isSelected:h,select:_,deselect:v,selectOnly:y,selectAll:x,deselectAll:ee,toggleSelect:S,toggleSelectTo:C}=Lo({compareItemsFn:a,data:t,flatData:u}),te=b((e,t)=>Array.isArray(e.items)?r(e,t,{selected:p(e),folded:Eo(e,c),toggleSelect:t=>S(e,typeof t==`boolean`?t:void 0),toggleFold:()=>o(e)}):n(e,t,{selected:d.includes(e),expanded:To(e,c),toggleSelect:t=>S(e,typeof t==`boolean`?t:void 0),toggleCollapse:()=>s(e)}),[n,r,d,S,l]);g(()=>{Object.assign(e.style,zo.host)},[]);let ne={toggleFold:o,toggleCollapse:s,isItemSelected:f,isGroupSelected:p,isSelected:h,select:_,deselect:v,selectOnly:y,selectAll:x,deselectAll:ee,toggleSelect:S,toggleSelectTo:C};return he(ne,Object.values(ne)),{renderRow:te,flatData:u}},Vo=({renderRow:e,flatData:t})=>ae({items:t,renderItem:(t,n)=>h`<cosmoz-grouped-list-row
				.item=${t}
				.index=${n}
				.renderFn=${e}
			></cosmoz-grouped-list-row>`})})),Uo,Wo=e((()=>{D(),Ho(),Uo=e=>Vo(Bo(e)),customElements.define(`cosmoz-grouped-list`,T(Uo,{useShadowDOM:!1}))})),Go=e((()=>{Wo()})),Ko,qo,Jo,Yo=e((()=>{Le(),Mt(),$r(),ti(),Ci(),Oi(),ji(),D(),it(),v(),s(),Pi(),Hi(),Wi(),Yi(),xo(),Go(),Ko=e=>window.ShadyCSS?.ApplyShim?.transformCssText?.(e)||e,qo=e=>{let{header:t,list:n,footer:r}=bo(e);return h`
		<style>
			${S([],()=>Ko(Ni))}
		</style>

		<div class="mainContainer">
			${Ui(t)}
			<div class="tableContent" id="tableContent">
				${Ji(t,n)}
			</div>
			${Vi(r)}
		</div>

		<div id="columns">
			<slot id="columnsSlot"></slot>
		</div>
	`},customElements.define(`cosmoz-omnitable`,T(qo,{observedAttributes:[`hash-param`,`sort-on`,`group-on`,`descending`,`group-on-descending`,`hide-select-all`,`settings-id`,`no-local`,`no-local-sort`,`no-local-filter`,`disabled-filtering`,`loading`,`mini-breakpoint`,`inline`]})),Jo=`
	<slot name="actions" slot="actions"></slot>
`,h(Object.assign([Jo],{raw:[Jo]})),Fe(Object.assign([Jo],{raw:[Jo]}))}));export{Yo as t};