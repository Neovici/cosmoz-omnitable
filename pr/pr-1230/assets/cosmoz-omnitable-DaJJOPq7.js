import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{$ as t,At as n,B as r,C as i,Ct as a,D as o,F as s,Ft as c,H as l,Jt as u,K as d,L as f,Lt as p,N as m,Nt as h,Ot as g,Qt as _,R as v,T as y,Ut as b,Vt as x,W as S,Wt as C,X as ee,Xt as w,Y as T,Yt as te,Z as ne,Zt as E,_ as re,_t as D,at as ie,b as O,c as k,ct as ae,d as oe,dt as A,et as se,f as ce,ft as le,g as ue,gt as de,ht as fe,i as pe,it as me,jt as he,k as ge,l as _e,lt as ve,mt as ye,n as be,ot as xe,p as Se,pt as Ce,qt as we,r as Te,rt as Ee,s as De,st as Oe,u as ke,ut as Ae,v as j,vt as M,w as je,x as Me,xt as Ne,y as N,yt as Pe,zt as P}from"./iframe-LW9WGJrk.js";import{A as Fe,B as F,C as Ie,D as Le,E as Re,F as I,G as ze,H as Be,I as Ve,J as He,L as Ue,M as We,N as Ge,O as Ke,P as L,R as qe,S as Je,T as Ye,U as Xe,V as R,W as Ze,_ as Qe,d as $e,f as et,g as tt,h as nt,j as rt,k as it,l as at,m as ot,n as st,q as ct,r as lt,s as ut,t as dt,u as ft,v as pt,w as mt,x as ht,y as gt,z as _t}from"./dist-lJEgqqlG.js";var vt,yt;function z(){return(z=e((()=>{m(),Ae(),Oe(),D(),vt=A`
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
`,yt=()=>E`
	<style>
		${vt}
	</style>
	${f({className:`icon`,width:`18`,height:`18`})}
`,customElements.define(`cosmoz-clear-button`,M(yt))})))()}var B,bt,xt,St,Ct,V;function H(){return(H=e((()=>{R(),B=({valuePath:e},t)=>F(t,e),bt=B,xt=B,St=({valuePath:e},t)=>n=>{let r=F(n,e);return r!=null&&r.toString().toLowerCase().trim().includes(t.toLowerCase().trim())},Ct=(e,t)=>t===``||t==null?null:t,V=e=>class extends e{static get properties(){return{isOmnitableColumn:{type:Boolean,value:!0},title:{type:String},valuePath:{type:String,notify:!0},values:{type:Array,notify:!0},filter:{type:Object},noLocalFilter:{type:Boolean},disabled:{type:Boolean,value:!1,notify:!0},editable:{type:Boolean,notify:!0},loading:{type:Boolean,value:!1,notify:!0},externalValues:{type:Boolean,value:!1,notify:!0},name:{type:String},sortOn:{type:String},groupOn:{type:String},noSort:{type:Boolean,value:!1},disabledFiltering:{type:Boolean,value:!1},width:{type:String,value:`75px`},minWidth:{type:String,value:`40px`},flex:{type:String,value:`1`},cellClass:{type:String,value:`default-cell`},headerCellClass:{type:String,value:`default-header-cell`},priority:{type:Number,value:0},hidden:{type:Boolean,notify:!0},align:{type:String,value:`left`},headerAlign:{type:String,value:null},renderHeader:{type:Function},renderCell:{type:Function},renderEditCell:{type:Function},renderGroup:{type:Function},mini:{type:Number,value:null},renderMini:{type:Function}}}static get observers(){return[`notifyFilterChange(filter)`]}notifyFilterChange(e){this.__ownChange||this.dispatchEvent(new CustomEvent(`legacy-filter-changed`,{detail:{name:this.name,state:this.legacyFilterToState(e)},bubbles:!0}))}legacyFilterToState(e){return{filter:e}}getFilterFn(){}getString(e,t){return B(e,t)}toXlsxValue(e,t){return bt(e,t)}cellTitleFn(e,t){return this.getString(e,t)}headerTitleFn(e){return e.title}serializeFilter(e,t){return Ct(e,t)}deserializeFilter(e,t){if(t==null)return null;if(typeof t==`string`)try{return window.decodeURIComponent(t)}catch{return null}return t}getComparableValue(e,t){return xt(e,t)}computeSource(e,t){return t}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n),this.dispatchEvent(new CustomEvent(`cosmoz-column-prop-changed`,{bubbles:!0}))}}})))()}var wt,Tt,Et,Dt,Ot,kt,At;function jt(){return(jt=e((()=>{O(),z(),I(),_(),H(),wt=e=>t=>e(n=>{if(n.inputValue===void 0&&t.target.value===``)return n;clearTimeout(n.t);let r=setTimeout(()=>e(e=>({...e,filter:e.inputValue})),1e3);return{...n,inputValue:t.target.value,t:r}}),Tt=e=>()=>e(e=>({...e,filter:e.inputValue})),Et=e=>t=>{t.keyCode===13&&(t.preventDefault(),e(e=>({...e,filter:e.inputValue})))},Dt=e=>t=>e(e=>({...e,headerFocused:t.detail.value})),Ot=e=>()=>e(e=>({...e,filter:null,inputValue:null})),kt=e=>e!=null&&e!==``,At=class extends V(L){static get properties(){return{minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},inputValue:{type:Object,notify:!0}}}getFilterFn(e,t){if(t!=null&&t!==``)return St(e,t)}renderCell(e,{item:t}){return E`<span class="default-column">${B(e,t)}</span>`}renderEditCell(e,{item:t},n){return E`<cosmoz-input
			compact
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${B(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,inputValue:n,headerFocused:r},i){return E`<cosmoz-input
			variant="inline"
			label=${e.title}
			?disabled=${e.disabledFiltering}
			.value=${n??t}
			@value-changed=${wt(i)}
			focused=${r}
			@focused-changed=${Dt(i)}
			@keydown=${Et(i)}
			@blur=${Tt(i)}
		>
			${T(!e.disabledFiltering,()=>E`<cosmoz-clear-button
						suffix
						slot="suffix"
						?visible=${kt(t)}
						light
						@click=${Ot(i)}
					></cosmoz-clear-button>`)}
		</cosmoz-input>`}legacyFilterToState(e){return{filter:e,inputValue:e}}},customElements.define(`cosmoz-omnitable-column`,At)})))()}var Mt,Nt,Pt;function Ft(){return(Ft=e((()=>{O(),D(),_(),Mt=[`label`,`value`,`slot`,`always-float-label`,`disabled`,`variant`],Nt=C`
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
`,Pt=e=>{let{label:t,value:n,slot:r}=e;e.toggleAttribute(`has-value`,!!n);let i=E`<div
		id="input"
		part="input"
		role="button"
		class="control"
		slot=${r}
	>
		${n||``}
	</div>`;return ge(i,{label:t})},customElements.define(`cosmoz-omnitable-dropdown-input`,M(Pt,{observedAttributes:Mt,styleSheets:[Nt]}))})))()}var It;function Lt(){return(Lt=e((()=>{Xe(),_(),We(),Ft(),It=({title:e,tooltip:t=``,filterText:n=``,onOpenedChanged:r,content:i,align:a=`left`,externalValues:o=null})=>{let s={filtered:!!n,...o!=null&&{[`external-values-${o}`]:!0}};return E`
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
			class=${rt({...s,dropdown:!0})}
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
	`}})))()}var Rt,zt;function Bt(){return(Bt=e((()=>{me(),qe(),Fe(),Le(),Rt=e=>e?typeof e.close==`function`?e:Rt(e.parentElement):null,zt=e=>class extends e{static get properties(){return{disabled:{type:Boolean,value:!1},filter:{type:Object,notify:!0},values:{type:Array,value(){return[]}},headerFocused:{type:Boolean,notify:!0},min:{type:Number,value:null},max:{type:Number,value:null},limits:{type:Function},autoupdate:{type:String,value:!0},locale:{type:String,value:null},align:{type:String,value:`left`},_filterInput:{type:Object,value(){return{min:null,max:null}}},_range:{type:Object,computed:`_computeRange(values.*)`},_limit:{type:Object,computed:`_computeLimit(_range, _filterInput.*, min, max)`,value(){return{}}},_tooltip:{type:String,computed:`_computeTooltip(title, _filterText)`},_fromClasses:{type:String,computed:`_computeInputClasses(_filterInput.min)`},_toClasses:{type:String,computed:`_computeInputClasses(_filterInput.max)`}}}static get observers(){return[`_filterInputChanged(_filterInput.*, autoupdate)`,`_filterChanged(filter.*)`,`_updateLimits(limits, headerFocused)`]}disconnectedCallback(){this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),super.disconnectedCallback()}_computeInputClasses(e){return e!=null&&e!==``?`has-value`:``}toNumber(e,t,n){if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=this.toNumber(t);return i==null?r:n(r,i)}toValue(){return this.toNumber.apply(this,arguments)}getComparableValue(e,t){if(e==null)return;let n=e;return t!=null&&(n=this.get(t,e)),this.toValue(n)}renderValue(){}getInputString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return this._toInputString(n)}_computeRange(e){let t=e.base,n=Array.isArray(t)&&t.length&&t.map(e=>this.toValue(e)).filter(e=>e!=null);return!n||n.length<1?{min:null,max:null}:n.reduce((e,t)=>({min:this.toValue(t,e.min,Math.min),max:this.toValue(t,e.max,Math.max)}),{})}_computeLimit(e,t,n,r){if(!e)return;let i=t.base,a=this.toValue(n),o=this.toValue(r),s=a??this.toValue(e.min),c=o??this.toValue(e.max);return{fromMin:s,fromMax:this.toValue(c,this._fromInputString(i.max,`max`),Math.min),toMin:this.toValue(s,this._fromInputString(i.min,`min`),Math.max),toMax:c}}_computeFilterText(e){if(e.base==null)return;let t=e.base,n=this.toValue(t.min),r=this.toValue(t.max),i=[];return n!=null&&i.push(this.renderValue(n)),i.push(` - `),r!=null&&i.push(this.renderValue(r)),i.length>1?i.join(``):void 0}_computeTooltip(e,t){return t==null?e:`${e}: ${t}`}_fromInputString(e){return this.toValue(e)}_toInputString(e){return this.toValue(e)??null}_getDefaultFilter(){return{min:null,max:null}}_filterInputChanged(e,t){let n=e.path.split(`.`)[1];this.__inputChangePath=n||null,t&&(this._limitInputDebouncer=Ke.debounce(this._limitInputDebouncer,_t.after(600),()=>{this._limitInput(),this._updateFilter()}),it(this._limitInputDebouncer))}_clearFrom(){this.set(`_filterInput.min`,null),this._updateFilter()}_clearTo(){this.set(`_filterInput.max`,null),this._updateFilter()}_onBlur(){this._limitInput(),this._updateFilter()}_onKeyDown(e){let t=e.currentTarget,n=Array.from(t.parentElement.querySelectorAll(`cosmoz-input`)),r=n[n.findIndex(e=>e===t)+1],i=!r,a=n[0]===t;switch(e.keyCode){case 13:if(e.preventDefault(),!i)r.focus();else{let e=this._limitInput();this._updateFilter(),e||this._closeParent(t)}break;case 9:(i&&!e.shiftKey||a&&e.shiftKey)&&this._closeParent(t)}}_closeParent(e){let t=Rt(e);t&&t.close()}_onDropdownOpenedChanged({currentTarget:e,type:t,detail:n}){(t===`focus`||n?.value===!0)&&setTimeout(()=>{e.querySelector(`cosmoz-input:focus`)||e.querySelector(`cosmoz-input`)?.focus()},100)}_limitInput(){let e=this._filterInput,t=this.__inputChangePath,n=t?this._fromInputString(this.get(t,e),t):null;if(this.__inputChangePath=null,n==null)return!1;let r=this._limit,i=t===`min`?`from`:`to`,a=this.get(i+`Min`,r),o=this.get(i+`Max`,r),s=this.toValue(n,a,Math.max),c=this.toValue(s,o,Math.min);return this.getComparableValue(n)!==this.getComparableValue(c)&&(this.set([`_filterInput`,t],this._toInputString(c,t)),this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),!0)}_updateFilter(){let e=this._filterInput,t=this.filter,n=this._fromInputString(e.min,`min`),r=this._fromInputString(e.max,`max`);(this.getComparableValue(n)!==this.getComparableValue(t,`min`)||this.getComparableValue(r)!==this.getComparableValue(t,`max`))&&this.set(`filter`,{min:n,max:r})}_filterChanged(e){if(this._filterInput==null)return;let t=this._filterInput,n=e.base,r=this._fromInputString(t.min,`min`),i=this._fromInputString(t.max,`max`);(this.getComparableValue(r)!==this.getComparableValue(n,`min`)||this.getComparableValue(i)!==this.getComparableValue(n,`max`))&&(this.set(`_filterInput`,{min:this._toInputString(n.min),max:this._toInputString(n.max)}),this._limitInputDebouncer&&this._limitInputDebouncer.cancel())}hasFilter(){let e=this.filter;return e==null?!1:this.toValue(e.min)!=null||this.toValue(e.max)!=null}resetFilter(){this.filter=this._getDefaultFilter()}_updateLimits(e,t){e&&Promise.resolve(ie(e,{active:t})).then(e=>{let{min:t,max:n}=e??{};Object.assign(this,{...t==null?{}:{min:t},...n==null?{}:{max:n}})})}}})))()}var Vt;function Ht(){return(Ht=e((()=>{I(),_(),Vt=e=>class extends e{static get template(){return Ve`<div id="output" style="position:relative;"></div>`}connectedCallback(){super.connectedCallback();let e=this;te(e.render(),e.$.output)}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n);let r=this;requestAnimationFrame(()=>te(r.render(),r.$.output))}}})))()}var Ut;function Wt(){return(Wt=e((()=>{O(),I(),j(),_(),Lt(),Ft(),Bt(),Ht(),Ut=class extends zt(Vt(L)){static get properties(){return{currency:{type:String},autodetect:{type:Boolean,value:!1},rates:{type:Object},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, _formatters)`},headerFocused:{type:Boolean,value:!1}}}static get observers(){return[`_valuesChanged(autodetect, currency, values)`]}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return E`
			${T(this.disabled,()=>E`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>E`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${It({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:E`
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
		`}_valuesChanged(e,t,n){if(!Array.isArray(n)||n.length<1||!e&&t)return;let r=n.reduce((e,t)=>{if(t.currency){let n=t.currency;e[n]=(e[n]||0)+1}return e},{}),i=Object.keys(r)[0];Object.keys(r).reduce((e,t)=>{let n=Math.max(e,r[t]);return n===r[t]&&(i=t),n},0),this.set(`currency`,i)}toAmount(e,t,n){if(e==null||e===``)return;if(typeof e!=`object`||e.currency==null||e.currency===``)return null;let r=this.toNumber(e.amount);if(r==null||Number.isNaN(r))return null;let i={currency:e.currency,amount:r};if(n==null||t==null)return i;let a=this.toAmount(t);if(a==null)return i;let o=this.rates||{},s=i.amount*(o[i.currency]||1),c=a.amount*(o[a.currency]||1);return this.toNumber(s,c,n)===s?i:a}toValue(){return this.toAmount.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n==null)return;let r=this.toNumber(n.amount),i=this.rates;return i==null?r:r*(i[n.currency]||1)}getString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return n===void 0?``:n===null?`Invalid value`:this.renderValue(n)}getCurrency(e,t){let n=this.get(t,e);return n&&n.currency}getFormatter(e,t){let n=e+(t||``)||``,r=this._formatters=this._formatters||{};return r[n]||(r[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),r[n]}renderValue(e){let t=this.toAmount(e);return t==null?``:this.getFormatter(t.currency,this.locale).format(e.amount)}_amountValueChanged(e){let t=e.target.value,n=e.model.item,r=this.get(this.valuePath,n),i={amount:Number(t),currency:r.currency};this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toInputString(e){let t=this.toValue(e);return t==null?null:this.toNumber(t.amount)}_toInputStringAmount(e){let t=this.rates;if(t==null)return this._toInputString(e);let n=this.toValue(e);return n==null?null:(this.toNumber(n.amount)*(t[n.currency]||1)/(t[this.currency]||1)).toFixed(2)}_fromInputString(e,t){let n=this.toNumber(e);if(n!=null)return this.toValue({amount:n,currency:t&&this.get([`filter`,t,`currency`])||this.currency})}},customElements.define(`cosmoz-omnitable-amount-range-input`,Ut)})))()}var U,Gt,Kt,qt,W,Jt,Yt,Xt;function Zt(){return(Zt=e((()=>{R(),mt(),U=(e,t,n)=>{if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=U(t);return i==null?r:n(r,i)},Gt=e=>{let t=U(e);return t==null?null:t.toString()},Kt=({valuePath:e},t)=>{let n=U(e?F(t,e):t);return Gt(n)},qt=e=>Gt(e)??``,W=({valuePath:e,maximumFractionDigits:t},n)=>{if(n==null)return;let r=e?F(n,e):n,i=U(r);if(i!=null)return t===null?i:U(i.toFixed(t))},Jt=Re((e,t,n)=>{let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}),Yt=({valuePath:e,locale:t,minimumFractionDigits:n,maximumFractionDigits:r},i)=>{let a=e?F(i,e):i;if(a==null)return``;let o=U(a);if(o!=null)return Jt(t,n,r).format(o)},Xt=(e,t)=>n=>{let r=W(e,n);if(r==null)return!1;let i=W({...e,valuePath:`min`},t),a=W({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})))()}var G,K,Qt,$t,en,tn,nn,rn,an,on,sn;function cn(){return(cn=e((()=>{R(),Zt(),G=(e={},t,n,r)=>{if(t==null||t===``)return;if(typeof t!=`object`||t.currency==null||t.currency===``)return null;let i=U(t.amount);if(i==null||Number.isNaN(i))return null;let a={currency:t.currency,amount:i};if(r==null||n==null)return a;let o=G(e,n);if(o==null)return a;let s=a.amount*(e[a.currency]||1),c=o.amount*(e[o.currency]||1);return U(s,c,r)===s?a:o},K=({valuePath:e,rates:t},n)=>{if(n==null)return;let r=n;e!=null&&(r=F(n,e));let i=G(t,r);if(i==null)return;let a=U(i.amount);return t==null||a==null?a:a*(t?.[i.currency]||1)},Qt=(e,t)=>n=>{let r=K(e,n);if(r===void 0)return!1;let i=K({...e,valuePath:`min`},t),a=K({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))},$t={},en=(e,t)=>{let n=e+(t||``)||``;return $t[n]||($t[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),$t[n]},tn=(e,t,n)=>{let r=G(e,t);return r==null?``:en(r.currency,n).format(r.amount)},nn=({valuePath:e,rates:t,locale:n},r)=>{let i=G(t,e?F(r,e):void 0);return i===void 0?``:i===null?`Invalid value`:tn(t,i,n)},rn=e=>e?e.amount+e.currency:``,an=e=>{if(e==null||e===``)return;let t=e.match(/^(-?[\d]+)([\D]+?)$/iu);if(!(!Array.isArray(t)||t.length<0))return{amount:Number(t[1]),currency:t[2]}},on=({valuePath:e},t)=>e?F(t,e)?.currency:null,sn=({valuePath:e},t)=>e?F(t,e)?.amount:void 0})))()}var q,ln,un,dn,fn,pn,mn;function hn(){return(hn=e((()=>{mt(),D(),q=Symbol(`column`),ln=e=>{let t=!0,n=e.map(e=>e.name);return e.forEach(e=>{e.name??(t=!1,console.error(`The name attribute needs to be set on all columns! Missing on column`,e))}),e.forEach(e=>{n.indexOf(e.name)!==n.lastIndexOf(e.name)&&(t=!1,console.error(`The name attribute needs to be unique among all columns! Not unique on column`,e))}),t},un=(e,t)=>{let n=e.valuePath??e.name;return{name:e.name,title:e.title,valuePath:n,groupOn:e.groupOn??n,sortOn:e.sortOn??n,noSort:e.noSort,disabledFiltering:t||e.disabledFiltering,minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,getString:e.getString,getComparableValue:e.getComparableValue,serializeFilter:e.serializeFilter,deserializeFilter:e.deserializeFilter,toXlsxValue:e.toXlsxValue,renderHeader:e.renderHeader,renderCell:e.renderCell,renderEditCell:e.renderEditCell,renderGroup:e.renderGroup,cellTitleFn:e.cellTitleFn,headerTitleFn:e.headerTitleFn,getFilterFn:e.getFilterFn,headerCellClass:e.headerCellClass,cellClass:e.cellClass,editable:e.editable,values:e.values,source:Ye(e.computeSource),noLocalFilter:e.noLocalFilter,mini:e.mini,renderMini:e.renderMini,align:e.align,headerAlign:e.headerAlign,loading:e.loading,externalValues:e.externalValues,computeSource:e.computeSource,trueLabel:e.trueLabel,falseLabel:e.falseLabel,valueProperty:e.valueProperty,textProperty:e.textProperty,emptyLabel:e.emptyLabel,emptyValue:e.emptyValue,min:e.min,max:e.max,locale:e.locale,autoupdate:e.autoupdate,maximumFractionDigits:e.maximumFractionDigits,minimumFractionDigits:e.minimumFractionDigits,currency:e.currency,rates:e.rates,autodetect:e.autodetect,ownerTree:e.ownerTree,keyProperty:e.keyProperty,...e.getConfig?.(e),[q]:e}},dn=e=>e.isOmnitableColumn&&!e.hidden,fn=e=>{let t=e.filter(dn);return ln(t)?t:[]},pn=(e,t,n)=>(Array.isArray(t)?e.filter(e=>t.includes(e.name)):e.filter(e=>!e.disabled)).map(e=>un(e,n)),mn=(e,{enabledColumns:t,disabledFiltering:n})=>{let[r,i]=h([]);return c(()=>{let r,a=[],o=e.shadowRoot.querySelector(`#columnsSlot`),s=e=>()=>{let r=o.assignedNodes({flatten:!0});if(e)a=r;else{let e=r.filter(e=>!a.includes(e)),t=a.filter(e=>!r.includes(e)),n=[...e,...t].some(e=>e.isOmnitableColumn);if(a=r,!n)return}i(pn(fn(r),t,n))},c=e=>{cancelAnimationFrame(r),r=requestAnimationFrame(s(e?.type===`cosmoz-column-prop-changed`))};return c(),o.addEventListener(`slotchange`,c),e.addEventListener(`cosmoz-column-prop-changed`,c),()=>{o.removeEventListener(`slotchange`,c),e.removeEventListener(`cosmoz-column-prop-changed`,c),cancelAnimationFrame(r)}},[t,n]),r}})))()}var gn,_n,vn;function J(){return(J=e((()=>{R(),hn(),gn=(e,t)=>Array.isArray(e)?e.map(e=>F(e,t)).filter((e,t,n)=>e!=null&&n.indexOf(e)===t):void 0,_n=({externalValues:e,values:t,valuePath:n},r)=>{if(e)return e;if(typeof t==`function`)return t;if(n!==void 0)return gn(r,n)},vn=(e,t,n,r)=>{let{valuePath:i}=t,a=i===void 0?void 0:F(n,i);if(r===a)return;i!==void 0&&Be(n,i,r);let o={item:n,valuePath:i,value:r,oldValue:a,column:t[q]};e.dispatchEvent(new CustomEvent(`column-item-changed`,{bubbles:!0,composed:!0,detail:o}))}})))()}var yn;function bn(){return(bn=e((()=>{O(),z(),I(),_(),R(),H(),Wt(),cn(),J(),yn=class extends V(L){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},currency:{type:String,notify:!0},autodetect:{type:Boolean,value:!1,notify:!0},rates:{type:Object,notify:!0},width:{type:String,value:`70px`},cellClass:{type:String,value:`amount-cell`},headerCellClass:{type:String,value:`amount-header-cell`},align:{type:String,value:`right`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=K({...e,valuePath:`min`},t),r=K({...e,valuePath:`max`},t);if(n!=null||r!=null)return Qt(e,t)}getString(e,t){return nn(e,t)}toXlsxValue(e,t){return nn(e,t)}getComparableValue(e,t){return K(e,t)}serializeFilter({rates:e},t){if(t==null)return;let n=G(e,t.min),r=G(e,t.max);if(n!=null||r!=null)return rn(n)+`~`+rn(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:an(n[1]),max:an(n[2])}:null}renderCell(e,{item:t}){return E`<span>${e.getString(e,t)}</span>`}renderEditCell(e,{item:t},n){return E`<cosmoz-input
			compact
			type="number"
			@change=${r=>n({amount:r.target.value,currency:F(t,e.valuePath)?.currency})}
			.value=${sn(e,t)}
		>
			<div slot="suffix">${on(e,t)}</div>
		</cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,rates:a,currency:o,autoupdate:s,autodetect:c,disabledFiltering:l,headerAlign:u,align:d},{filter:f},p,m){return E`<cosmoz-omnitable-amount-range-input
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
		></cosmoz-omnitable-amount-range-input>`}computeSource(e,t){return _n(e,t)}},customElements.define(`cosmoz-omnitable-column-amount`,yn)})))()}var xn,Sn,Cn,wn,Tn,En,Dn,On,kn,An,jn,Mn;function Nn(){return(Nn=e((()=>{pe(),me(),De(),R(),J(),xn=(e,t)=>{if(!Array.isArray(e))return;let n=[];return e.reduce((e,t)=>Array.isArray(t)?(t.forEach(t=>{e.push(t)}),e):(e.push(t),e),[]).filter((e,r,i)=>{if(i.indexOf(e)!==r)return!1;if(t){let r=F(e,t);if(n.indexOf(r)!==-1)return!1;n.push(r)}return!0})},Sn=(e,t,n)=>{if(e==null)return[];if(Array.isArray(e)){let r=xn(e,t);if(!r?.length)return[];let i=n??`label`,a=e=>String(typeof e==`object`&&e?F(e,i??``)??``:e??``);return r.sort((e,t)=>a(e).localeCompare(a(t)))}if(typeof e==`object`){let r=t??`id`,i=n??`label`;return Object.entries(e).map(([e,t])=>({[r]:e,[i]:t})).sort((e,t)=>String(e[i]??``).localeCompare(String(t[i]??``)))}return[]},Cn=(e,t,n)=>Te(t&&F(e,t)).map(k(n)),wn=({valuePath:e,textProperty:t},n)=>Cn(n,e,t).filter(e=>e!=null).join(`, `),Tn=wn,En=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>a=>{let o=k(e),s=Te(F(a,t));return i.some(t=>s.length===0&&k(r||e)(t)===n||s.some(e=>o(e)===o(t)))},Dn=e=>t=>e(e=>({...e,filter:t})),On=e=>t=>e(e=>({...e,headerFocused:t})),kn=e=>t=>e(e=>({...e,query:t})),An=({emptyValue:e,emptyLabel:t,emptyProperty:n,textProperty:r,valueProperty:i},a)=>{let o=Sn(a,i,r);return!t||e===void 0||!r||!(n||i)||!o?o:[{[r]:t,[n||i]:e},...o]},jn=(e,t)=>An(e,gn(t,e.valuePath)),Mn=e=>class extends e{static get properties(){return{textProperty:{type:String},valueProperty:{type:String},emptyLabel:{type:String},emptyValue:{type:Object},emptyProperty:{type:String}}}getConfig(e){return{emptyProperty:e.emptyProperty}}getString(e,t){return wn(e,t)}toXlsxValue(e,t){return Tn(e,t)}getComparableValue({valuePath:e,valueProperty:t},n){let r=F(n,e);return t==null?r:Te(r).map(k(t)).sort().join(` `)}getFilterFn(e,t){if(t&&Array.isArray(t)&&t.length!==0)return En(e,t)}serializeFilter(e,t){return Array.isArray(t)&&t.length===0?null:JSON.stringify(t)}deserializeFilter(e,t){if(t==null)return null;try{return JSON.parse(decodeURIComponent(t))}catch(e){let n=e;return console.error(`Failed to deserialize filter value:`,{error:n?.name,message:n?.message,filterLength:typeof t==`string`?t.length:null}),null}}computeSource(e,t){return e.externalValues||typeof e.values==`function`?async(...t)=>An(e,await Promise.resolve(ie(e.values,...t))):jn(e,t)}}})))()}var Pn,Fn,In;function Ln(){return(Ln=e((()=>{be(),Ie(),I(),_(),pe(),De(),Nn(),H(),D(),R(),hn(),Pn=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?ke(t):k(n),a=Te(e&&F(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},Fn=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>{let a=k(e),o=k(r||e),s=new Set(i.filter(e=>e.excluded).map(e=>a(e.item))),c=new Set(i.filter(e=>!e.excluded).map(e=>a(e.item))),l=i.some(e=>e.excluded&&o(e.item)===n),u=i.some(e=>!e.excluded&&o(e.item)===n);return e=>{let n=Te(F(e,t)).map(a);return n.length===0?!l&&(u||c.size===0):!n.some(e=>s.has(e))&&(c.size===0||n.some(e=>c.has(e)))}},In=class extends Mn(V(L)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return E`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},n){return E`<cosmoz-input
			compact
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${B(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:r},i,a){return E`<cosmoz-autocomplete-excluding
			variant="inline"
			class="external-values-${e.externalValues}"
			?disabled=${e.disabledFiltering}
			?keep-opened=${e.keepOpened}
			?keep-query=${e.keepQuery}
			?show-single=${e.showSingle}
			?preserve-order=${e.preserveOrder}
			.textual=${e.textual}
			.label=${e.title}
			.source=${a}
			.textProperty=${e.textProperty}
			.valueProperty=${e.valueProperty}
			.itemRenderer=${e[q]?.itemRenderer}
			.value=${t}
			.text=${r}
			.limit=${e.limit}
			@opened-changed=${e=>On(i)(e.detail.value)}
			@value-changed=${n(Dn(i))}
			@text-changed=${n(kn(i))}
			>${T(e.loading,()=>E`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-excluding
		>`}getComparableValue(e,t){return Pn(e,t)}getFilterFn(e,t){if(t&&Array.isArray(t)&&t.length!==0)return Fn(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete-excluding`,In)})))()}var Rn,zn;function Bn(){return(Bn=e((()=>{be(),Ie(),I(),_(),pe(),De(),Nn(),H(),R(),hn(),Rn=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?ke(t):k(n),a=Te(e&&F(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},zn=class extends Mn(V(L)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return E`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},n){return E`<cosmoz-input
			compact
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${B(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:n},r,i){return E`<cosmoz-autocomplete-ui
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
			.onChange=${Dn(r)}
			@opened-changed=${e=>On(r)(e.detail.value)}
			.onText=${kn(r)}
			>${T(e.loading,()=>E`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}getComparableValue(e,t){return Rn(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete`,zn)})))()}var Vn,Hn,Un,Wn,Gn,Kn,qn,Jn,Yn,Xn,Zn,Qn,$n,er;function tr(){return(tr=e((()=>{I(),H(),be(),mt(),R(),_(),Vn=(e,t)=>t.find(({value:t})=>e===t),Hn=(e,t,n)=>{let r=Vn(t,n);return r?r.text:e},Un=(e,t,n,r)=>Hn(e,F(t,n),r),Wn=({valuePath:e},t,n)=>Vn(F(t,e),n),Gn=e=>t=>{e(e=>({...e,filter:t?.[0]?.value??null}))},Kn=e=>t=>{e(e=>({...e,headerFocused:t}))},qn=e=>t=>{e(e=>({...e,query:t}))},Jn=e=>t=>e(t?.[0]?.value),Yn=({valuePath:e,trueLabel:t,falseLabel:n},r)=>F(r,e)?t:n,Xn=({valuePath:e},t)=>n=>F(n,e)===t,Zn=Ye((e,t)=>[{text:e,value:!0},{text:t,value:!1}]),Qn=({valuePath:e,trueLabel:t,falseLabel:n},r)=>e?F(r,e)?t:n:``,$n=(e,t)=>{try{return JSON.parse(t)}catch{return null}},er=class extends V(L){static get properties(){return{trueLabel:{type:String,value:`True`},falseLabel:{type:String,value:`False`},flex:{type:String,value:`0`},cellClass:{type:String,value:`boolean-cell`}}}getString(e,t){return Yn(e,t)}renderCell(e,{item:t}){return Yn(e,t)}renderEditCell(e,{item:t},n){let{trueLabel:r,falseLabel:i}=e;return E`<cosmoz-autocomplete
			compact
			mode="select"
			.title=${Un(e.title,t,e.valuePath,Zn(r,i))}
			.source=${Zn(r,i)}
			.textProperty=${`text`}
			.value=${Wn(e,t,Zn(r,i))}
			.onChange=${Jn(n)}
			.limit=${1}
			>${T(e.loading,()=>E`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete
		>`}renderHeader(e,{filter:t,query:n},r,i){return E`<cosmoz-autocomplete-ui
			?disabled=${e.disabledFiltering}
			variant="inline"
			.label=${e.title}
			.title=${Un(e.title,t,e.valuePath,i)}
			.source=${i}
			.textProperty=${`text`}
			.value=${Vn(t,i)}
			.text=${n}
			.onChange=${Gn(r)}
			@opened-changed=${e=>Kn(r)(e.detail.value)}
			.onText=${qn(r)}
			.limit=${1}
			>${T(e.loading,()=>E`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}computeSource({trueLabel:e,falseLabel:t}){return Zn(e,t)}getFilterFn(e,t){if(t!=null)return Xn(e,t)}toXlsxValue(e,t){return Qn(e,t)}deserializeFilter(e,t){return $n(e,t)}},customElements.define(`cosmoz-omnitable-column-boolean`,er)})))()}var nr;function rr(){return(rr=e((()=>{Ce(),Bt(),nr=e=>class extends zt(e){static get properties(){return{max:{type:Date,value:null},min:{type:Date,value:null},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},formatter:{type:Object,computed:`_computeFormatter(locale)`}}}toDate(e,t,n){if(e==null||e===``)return;let r=e;if(r instanceof Date||(typeof e==`string`&&(r=this.getAbsoluteISOString(r)),r=new Date(r)),Number.isNaN(r.getTime()))return null;if(n==null||t==null)return r;let i=this.toDate(t);if(i==null)return r;let a=this.getComparableValue(r);return n(a,this.getComparableValue(i))===a?r:i}toValue(){return this.toDate.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n!=null)return this.toNumber(n.getTime())}getString(e,t=this.valuePath,n=this.formatter){let r=this.toValue(this.get(t,e));return r===void 0?``:r===null?`Invalid Date`:this.renderValue(r,n)}getAbsoluteISOString(e){return e.length===19?e+this._getTimezoneString(e):e}_getTimezoneString(e){let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`}renderValue(e,t=this.formatter){if(t==null)return;let n=this.toValue(e);if(n!=null)return t.format(n)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(0,10)}_dateValueChanged(e){let t=e.currentTarget.value,n=e.model.item,r=this.get(this.valuePath,n),i=this._fromInputString(t);this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toLocalISOString(e){return ye(e)}}})))()}var ir;function ar(){return(ar=e((()=>{O(),I(),j(),_(),rr(),Lt(),Ft(),Ht(),ir=class extends nr(Vt(L)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return E`
			${T(this.disabled,()=>E`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>E`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${It({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:E`
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
		`}_fromInputString(e,t){let n=this.toDate(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n}_filterInputChanged(e,t){let n=e.path.split(`.`)[1]&&e.value;n&&n.match(/^0+/u)?this._limitInputDebouncer.cancel():super._filterInputChanged(e,t)}},customElements.define(`cosmoz-omnitable-date-range-input`,ir)})))()}var or,sr,cr,Y,X,lr,ur,dr,fr,pr,mr,hr,gr,_r,vr;function yr(){return(yr=e((()=>{Ce(),R(),Zt(),or=e=>{let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`},sr=e=>e.length===19?e+or(e):e,cr=e=>{if(e==null||e===``)return;let t=e;return!(t instanceof Date)&&(typeof e==`string`&&(t=sr(t)),t=le(t),!t)||Number.isNaN(t.getTime())?null:t},Y=({valuePath:e},t)=>{if(t==null)return;let n=t;e!=null&&(n=F(t,e));let r=cr(n);if(r!=null)return U(r.getTime())},X=(e,t,n)=>{let r=cr(e);if(r==null)return null;if(n==null||t==null)return r;let i=X(t);if(i==null)return r;let a=Y({},r),o=Y({},i);return a==null||o==null||n(a,o)===a?r:i},lr=(e,t)=>{if(t==null)return;let n=X(e);if(n!=null)return t.format(n)},ur={},dr=e=>{let t=e||``;return ur[t]||(ur[t]=new Intl.DateTimeFormat(e||void 0)),ur[t]},fr=({valuePath:e,locale:t},n)=>{let r=F(n,e||``);return r===void 0?``:(r=X(r),r===null?`Invalid Date`:lr(r,dr(t)))},pr=e=>{let t=X(e);if(t==null)return null;let n=ye(t);return n==null?null:n.slice(0,10)},mr=({valuePath:e},t)=>pr(F(t,e||``)),hr=(e,t)=>{let n=X(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n},gr=e=>pr(e)??``,_r=({valuePath:e},t)=>{if(!e)return``;let n=X(F(t,e));if(!n)return``;let r=X(ye(n));return r?(r.setHours(0,0,0,0),r):``},vr=(e,t)=>n=>{let r=Y(e,n);if(r==null)return!1;let i=Y({...e,valuePath:`min`},t),a=Y({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})))()}var br;function xr(){return(xr=e((()=>{O(),I(),_(),H(),ar(),J(),yr(),z(),br=class extends V(L){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`date-header-cell`},width:{type:String,value:`100px`},minWidth:{type:String,value:`82px`},flex:{type:String,value:`0`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=Y({...e,valuePath:`min`},t),r=Y({...e,valuePath:`max`},t);if(n!=null||r!=null)return vr(e,t)}getString(e,t){return fr(e,t)}toXlsxValue(e,t){return _r(e,t)}getComparableValue(e,t){return Y(e,t)}serializeFilter(e,t){if(t==null)return;let n=X(t.min),r=X(t.max);if(n!=null||r!=null)return gr(n)+`~`+gr(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:X(n[1]),max:X(n[2])}:null}renderCell(e,{item:t}){return E`<div class="omnitable-cell-date">
			${fr(e,t)}
		</div>`}renderEditCell(e,{item:t},n){return E`<cosmoz-input
			compact
			type="date"
			@change=${e=>n(hr(e.target.value))}
			.value=${mr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,disabledFiltering:a,headerAlign:o,align:s},{filter:c},l,u){return E`<cosmoz-omnitable-date-range-input
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
		></cosmoz-omnitable-date-range-input>`}computeSource(e,t){return _n(e,t)}},customElements.define(`cosmoz-omnitable-column-date`,br)})))()}var Sr;function Cr(){return(Cr=e((()=>{I(),j(),_(),rr(),Lt(),Ft(),Ht(),Sr=class extends nr(Vt(L)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return E`
			${T(this.disabled,()=>E`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>E`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${It({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:E`
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
		`}_toInputString(e){let t=this.toValue(e);if(t!=null)return this._toLocalISOString(t).slice(0,19)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})}},customElements.define(`cosmoz-omnitable-datetime-range-input`,Sr)})))()}var wr,Tr,Er,Dr,Or,kr;function Ar(){return(Ar=e((()=>{R(),yr(),wr={},Tr=e=>{let t=e||``;return wr[t]||(wr[t]=new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})),wr[t]},Er=({valuePath:e,locale:t},n)=>{let r=X(F(n,e||``));return r===void 0?``:r===null?`Invalid Date`:lr(r,Tr(t))},Dr=({valuePath:e},t)=>e?F(t,e):``,Or=e=>{let t=X(e);return t==null?``:t.toISOString().slice(0,19).replace(/:/gu,`.`)},kr=e=>{if(e!=null&&e!==``&&typeof e==`string`)return X(e.replace(/\./gu,`:`)+`Z`)}})))()}var jr;function Mr(){return(Mr=e((()=>{Je(),z(),I(),_(),H(),Cr(),J(),yr(),Ar(),jr=class extends V(L){static get is(){return`cosmoz-omnitable-column-datetime`}static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`datetime-header-cell`},width:{type:String,value:`210px`},minWidth:{type:String,value:`128px`},flex:{type:String,value:`0`},filterStep:{type:Number,value:1}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=Y({...e,valuePath:`min`},t),r=Y({...e,valuePath:`max`},t);if(n!=null||r!=null)return vr(e,t)}getString(e,t){return Er(e,t)}toXlsxValue(e,t){return Dr(e,t)}getComparableValue(e,t){return Y(e,t)}serializeFilter(e,t){if(t==null)return;let n=X(t.min),r=X(t.max);if(n!=null||r!=null)return Or(n)+`~`+Or(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:kr(n[1]),max:kr(n[2])}:null}renderCell(e,{item:t}){return Er(e,t)}renderEditCell(e,{item:t},n){return E`<cosmoz-input
			compact
			type="text"
			@change=${e=>n(hr(e.target.value))}
			.value=${Er(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,filterStep:a,disabledFiltering:o,headerAlign:s,align:c},{filter:l},u,d){return E`<cosmoz-omnitable-datetime-range-input
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
		></cosmoz-omnitable-datetime-range-input>`}computeSource(e,t){return _n(e,t)}},customElements.define(jr.is,jr)})))()}var Nr;function Pr(){return(Pr=e((()=>{be(),Ie(),I(),_(),Nn(),H(),Nr=class extends Mn(V(L)){renderCell({valuePath:e,textProperty:t},{item:n}){let r=Cn(n,e,t).map(e=>E`<li>${e}</li>`);return E`
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
		`}renderEditCell(){return`not implemented`}renderHeader(e,{filter:t,query:n},r,i){return E`<cosmoz-autocomplete-ui
			variant="inline"
			class="external-values-${e.externalValues}"
			?disabled=${e.disabledFiltering}
			.label=${e.title}
			.source=${i}
			.textProperty=${e.textProperty}
			.value=${t}
			.text=${n}
			.onChange=${Dn(r)}
			@opened-changed=${e=>On(r)(e.detail.value)}
			.onText=${kn(r)}
			>${T(e.loading,()=>E`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		> `}},customElements.define(`cosmoz-omnitable-column-list-horizontal`,Nr)})))()}var Fr,Ir;function Lr(){return(Lr=e((()=>{Ae(),ae(),Oe(),D(),j(),Fr=A`
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
`,Ir=({items:e})=>{let[t,n]=h(!1),r=Array.isArray(e)?e:[],i=P(()=>Math.max(0,r.length-1),[r]);if(r.length===0)return null;let a=r.length>2,o=r[0],s=a&&!t?[]:r.slice(1),c=e=>{e.stopPropagation(),e.preventDefault(),n(e=>!e)};return E`
		<ul>
			<li>
				<span>${o}</span>
			</li>
			<li class="see-more" ?hidden=${!a||t}>
				<a href="#" @click=${c}
					>${N(`and {0} more`,{0:i})}</a
				>
			</li>
			${s.map(e=>E`
					<li>
						<span class="item">${e}</span>
					</li>
				`)}
			<li class="see-less" ?hidden=${!a||!t}>
				<a href="#" @click=${c}>${N(`See less`)}</a>
			</li>
		</ul>
	`},customElements.define(`cosmoz-omnitable-column-list-data`,M(Ir,{styleSheets:[ve(Fr)]}))})))()}var Rr;function zr(){return(zr=e((()=>{Lr(),I(),_(),be(),Nn(),H(),hn(),Rr=class extends Mn(V(L)){static get properties(){return{keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,textual:e.textual}}renderCell({valuePath:e,textProperty:t},{item:n}){return E`<cosmoz-omnitable-column-list-data
			.items=${Cn(n,e,t)}
		></cosmoz-omnitable-column-list-data>`}renderEditCell(e,{item:t},n){return E`<cosmoz-input
			compact
			type="text"
			.value=${wn(e,t)}
			@change=${e=>n(e.target.value.split(/,\s*/gu))}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:n},r,i){return E`<cosmoz-autocomplete-ui
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
			.onChange=${Dn(r)}
			@opened-changed=${e=>On(r)(e.detail.value)}
			.onText=${kn(r)}
			>${T(e.loading,()=>E`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}},customElements.define(`cosmoz-omnitable-column-list`,Rr)})))()}var Br;function Vr(){return(Vr=e((()=>{O(),I(),j(),_(),Lt(),Ft(),Bt(),Ht(),Br=class extends zt(Vt(L)){static get properties(){return{maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},formatter:{type:Object,computed:`_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)`},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},headerFocused:{type:Boolean,value:!1}}}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return E`
			${T(this.disabled,()=>E`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>E`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${It({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:E`
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
		`}_computeFormatter(e,t,n){let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}getComparableValue(e,t){if(e==null)return;let n=e;if(t!=null&&(n=this.get(t,e)),n=this.toValue(n),n==null)return;let r=this.maximumFractionDigits;return r===null?n:this.toValue(n.toFixed(r))}renderValue(e,t=this.formatter){let n=this.toNumber(e);if(n!=null)return t.format(n)}},customElements.define(`cosmoz-omnitable-number-range-input`,Br)})))()}var Hr;function Ur(){return(Ur=e((()=>{O(),z(),I(),_(),H(),R(),Vr(),J(),Zt(),Hr=class extends V(L){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},cellClass:{type:String,value:`number-cell`},width:{type:String,value:`30px`},minWidth:{type:String,value:`30px`},headerCellClass:{type:String,value:`number-header-cell`},maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},align:{type:String,value:`right`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=W({...e,valuePath:`min`},t),r=W({...e,valuePath:`max`},t);if(n!=null||r!=null)return Xt(e,t)}getString(e,t){return Yt(e,t)}toXlsxValue({valuePath:e},t){return F(t,e)}getComparableValue(e,t){return W(e,t)}serializeFilter(e,t){if(t==null)return;let n=U(t.min),r=U(t.max);if(n!=null||r!=null)return qt(n)+`~`+qt(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:U(n[1]),max:U(n[2])}:null}renderCell(e,{item:t}){return E`<div class="omnitable-cell-number">
			${Yt(e,t)}
		</div>`}renderEditCell(e,{item:t},n){return E`<cosmoz-input
			compact
			type="number"
			@change=${e=>n(e.target.value)}
			.value=${Kt(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,limits:r,locale:i,maximumFractionDigits:a,minimumFractionDigits:o,autoupdate:s,disabledFiltering:c,headerAlign:l,align:u},{filter:d},f,p){return E`<cosmoz-omnitable-number-range-input
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
		></cosmoz-omnitable-number-range-input>`}computeSource(e,t){return _n(e,t)}},customElements.define(`cosmoz-omnitable-column-number`,Hr)})))()}var Wr;function Gr(){return(Gr=e((()=>{O(),I(),j(),_(),rr(),Lt(),Ft(),Ht(),Wr=class extends nr(Vt(L)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return E`
			${T(this.disabled,()=>E`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>E`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${It({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:E`
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
		`}get _fixedDate(){return`1970-01-01`}toDate(e,t,n){let r=typeof e==`string`&&e.length>3&&e.length<=9?this.getAbsoluteISOString(this._fixedDate+`T`+e):e;return super.toDate(r,t,n)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(11,19)}getComparableValue(e,t){if(e==null)return;let n=this._toInputString(t==null?e:this.get(t,e));if(n!=null&&(n=this.toValue(this.getAbsoluteISOString(this._fixedDate+`T`+n)),n!=null))return this.toNumber(n.getTime())}_timeValueChanged(e){let t=e.target.value,n=e.model.item,r=this.toDate(n.date),i=this.toDate(r==null?t:r.toISOString().slice(0,10)+`T`+t);i??(this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,(e=>e).bind(this)))}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})}},customElements.define(`cosmoz-omnitable-time-range-input`,Wr)})))()}var Z,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r,ei;function ti(){return(ti=e((()=>{Ce(),R(),yr(),Zt(),Z=(e,t,n)=>{let r=typeof e==`string`&&e.length>3&&e.length<=9?sr(`1970-01-01T`+e):e;return X(r,t,n)},Kr={},qr=e=>{let t=e||``;return Kr[t]||(Kr[t]=new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})),Kr[t]},Jr=({valuePath:e,locale:t},n)=>{let r=Z(F(n,e||``));return r===void 0?``:r===null?`Invalid Date`:lr(r,qr(t))},Yr=(e,t)=>e.valuePath?Jr(e,t):``,Xr=e=>{let t=Z(e);if(t==null)return null;let n=ye(t);return n&&n.slice(11,19)},Zr=({valuePath:e},t)=>{if(t==null)return;let n=Xr(e==null?t:F(t,e));if(n==null)return;let r=Z(sr(`1970-01-01T`+n));return r==null?r:U(r.getTime())},Qr=(e,t)=>n=>{let r=Zr(e,n);if(r==null)return!1;let i=Zr({...e,valuePath:`min`},t),a=Zr({...e,valuePath:`max`},t);return i==null||a==null?!1:!(r<i||r>a)},$r=e=>{let t=Z(e);return t==null?``:t.toISOString().slice(11,19).replace(/:/gu,`.`)},ei=e=>{if(e!=null&&e!==``)return Z(typeof e==`string`?e.replace(/\./gu,`:`)+`Z`:e)}})))()}var ni;function ri(){return(ri=e((()=>{O(),z(),I(),_(),H(),Gr(),J(),ti(),ni=class extends V(L){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`time-header-cell`},minWidth:{type:String,value:`63px`},width:{type:String,value:`210px`},flex:{type:String,value:`0`},filterStep:{type:String,value:`1`}}}getFilterFn(e,t){let n=Zr({...e,valuePath:`min`},t),r=Zr({...e,valuePath:`max`},t);if(n!=null||r!=null)return Qr(e,t)}getString(e,t){return Jr(e,t)}toXlsxValue(e,t){return Yr(e,t)}getComparableValue(e,t){return Zr(e,t)}serializeFilter(e,t){if(t==null)return;let n=Z(t.min),r=Z(t.max);if(n!=null||r!=null)return $r(n)+`~`+$r(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:ei(n[1]),max:ei(n[2])}:null}renderCell(e,{item:t}){return Jr(e,t)}renderEditCell(e,{item:t},n){return E`<cosmoz-input
			compact
			type="text"
			@change=${e=>n(e.target.value)}
			.value=${Jr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:n,locale:r,filterStep:i,disabledFiltering:a,headerAlign:o,align:s},{filter:c},l,u){return E`<cosmoz-omnitable-time-range-input
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
		></cosmoz-omnitable-time-range-input>`}computeSource(e,t){return _n(e,t)}},customElements.define(`cosmoz-omnitable-column-time`,ni)})))()}function ii(){return(ii=e((()=>{bn(),Ln(),Bn(),tr(),xr(),Mr(),Pr(),zr(),Ur(),ri()})))()}var ai;function oi(){return(oi=e((()=>{D(),_(),ai=({column:e,item:t,selected:n,folded:r,group:i})=>{if(!e)return u;let a=e.renderGroup??e.renderCell;return a?a(e,{item:t,selected:n,folded:r,group:i}):u},customElements.define(`cosmoz-omnitable-group-row`,M(ai,{useShadowDOM:!1}))})))()}var si;function ci(){return(ci=e((()=>{D(),_(),si=e=>{let{column:t}=e;return b(()=>{let n=0,r=0,i=i=>{e.dispatchEvent(new CustomEvent(`column-resize`,{bubbles:!0,composed:!0,detail:{newWidth:Math.ceil(r+i.pageX-n),column:t}}))},a=()=>{document.removeEventListener(`pointermove`,i),document.removeEventListener(`pointerup`,a)},o=t=>{n=t.pageX,r=e.previousElementSibling.getBoundingClientRect().width,document.addEventListener(`pointermove`,i),document.addEventListener(`pointerup`,a)};return e.addEventListener(`pointerdown`,o),()=>e.removeEventListener(`pointerdown`,o)},[t]),u},customElements.define(`cosmoz-omnitable-resize-nub`,M(si))})))()}var li,ui,di,fi;function pi(){return(pi=e((()=>{He(),D(),ee(),m(),li=({column:e,on:t,descending:n,setOn:r,setDescending:i})=>{let{name:a,title:o}=e??{};return E`<cosmoz-button
		variant="tertiary"
		class="sg"
		title=${ne(o)}
		data-on=${ne(a===t&&(n?`desc`:`asc`)||void 0)}
		@click=${e=>{let t=e.currentTarget?.dataset.on;t||(r(a),i(!1)),t===`asc`?i(!0):t===`desc`&&(r(),i(!1))}}
	>
		<span>${o}</span> ${a===t?d({width:`12`,height:`12`}):S({width:`12`,height:`12`})}
	</cosmoz-button>`},ui=({columns:e,...t})=>e?.map(e=>li({column:e,...t})),di=()=>E`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,groupOn:t,setGroupOn:n,groupOnDescending:r,setGroupOnDescending:i}={})=>ui({columns:e?.filter?.(e=>e.groupOn),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`,fi=()=>E`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,sortOn:t,setSortOn:n,descending:r,setDescending:i}={})=>ui({columns:e?.filter?.(e=>e.sortOn&&!e.noSort),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`})))()}function mi(e,t,{suffix:n=``,read:r,write:i,ready:a=!0,multi:o}={}){let s=se({param:t,suffix:n,link:o?yi:vi,write:i??Ee}),c=P(()=>{if(t==null)return!1;if(o){let e=Qe(t+n);return Object.keys(e).length>0}return pt(t+n)!==void 0},[]),[l,u]=h(()=>{if(t==null)return e;if(o){let i=Qe(t+n,r);return Object.keys(i).length>0?i:e}return pt(t+n,r)??e}),d=p(e=>u(t=>{let n=hi(e)?e(t):e;return s.param!=null&&ht(s.link(s.param+s.suffix,n,s.write),null,{notify:!1}),n}),[]);return b(()=>{s.param!=null&&a&&!c&&e!=null&&d(e)},[a]),[l,d]}var hi,gi,_i,vi,yi;function bi(){return(bi=e((()=>{gt(),me(),t(),tt(),D(),hi=e=>typeof e==`function`,gi=e=>(t,n,r=Ee)=>{let i=nt(),a=new URLSearchParams(i.hash.replace(`#`,``));return e(t,n,r,a),`#!`+Object.assign(i,{hash:a}).href.replace(location.origin,``)},_i=e=>e==null||e===``,vi=gi((e,t,n,r)=>_i(n(t))?r.delete(e):r.set(e,n(t))),yi=gi((e,t,n,r)=>{let i=Object.entries(t),a=i.map(n).filter(([,e])=>e!==void 0);if(a.length===0&&i.length>0)return;let o=e;Array.from(r.keys()).filter(e=>e.startsWith(o)).forEach(e=>r.delete(e)),a.forEach(([t,n])=>_i(n)?r.delete(e+t):r.set(e+t,n))})})))()}var xi,Si,Ci,wi,Ti;function Ei(){return(Ei=e((()=>{D(),bi(),xi=e=>[!0,`true`,1,`yes`,`on`].includes(e),Si=e=>e===``||(e==null?void 0:xi(e)),Ci=(e,t,n)=>p(r=>{e(r),n(e=>({...e,[t]:r}))},[e,t,n]),wi=(e,t,{settings:n,setSettings:r,resetRef:i,ready:a=!0})=>{let[o,s]=mi(n.sortOn,t,{suffix:`-sortOn`,ready:a}),[c,l]=mi(Si(n.descending),t,{suffix:`-descending`,read:Si,ready:a}),[u,d]=mi(n.groupOn,t,{suffix:`-groupOn`,ready:a}),[f,m]=mi(Si(n.groupOnDescending),t,{suffix:`-groupOnDescending`,read:Si,ready:a}),h=P(()=>e.find(e=>e.name===o),[e,o]),g=P(()=>e.find(e=>e.name===u),[e,u]),_={groupOn:u,setGroupOn:Ci(d,`groupOn`,r),groupOnDescending:f,setGroupOnDescending:Ci(m,`groupOnDescending`,r),sortOn:o,setSortOn:Ci(s,`sortOn`,r),descending:c,setDescending:Ci(l,`descending`,r),columns:e},v=P(()=>_,Object.values(_)),y=p(e=>{s(typeof e.sortOn==`string`?e.sortOn:void 0),d(typeof e.groupOn==`string`?e.groupOn:void 0),l(typeof e.descending==`boolean`?e.descending:void 0),m(typeof e.groupOnDescending==`boolean`?e.groupOnDescending:void 0)},[]);return b(()=>void(i.current=y),[]),{...v,sortAndGroup:v,groupOnColumn:g,sortOnColumn:h}},Ti=Pe(void 0),customElements.define(`sort-and-group-provider`,Ti.Provider),customElements.define(`sort-and-group-consumer`,M(({render:e})=>e(x(Ti)),{useShadowDOM:!1}))})))()}var Di,Oi;function ki(){return(ki=e((()=>{D(),ce(),ci(),pi(),Ei(),Di=({data:e,columns:t,groupOnColumn:n,filters:r,setFilterState:i,sortAndGroup:{sortOn:a,setSortOn:o,descending:s,setDescending:c}={}})=>oe(t,e=>e.name,t=>[E`<div
				class="cell ${t.headerCellClass} header-cell"
				align="${t.headerAlign??t.align??`left`}"
				part="cell header-cell cell-${t.name} header-cell-${t.name}"
				?hidden="${t===n}"
				title="${t.headerTitleFn(t)}"
				name="${t.name}"
			>
				${t.renderHeader(t,r[t.name]??{},e=>i(t.name,e),t.source(t,e))}
				${T(!t.noSort,()=>li({on:a,setOn:o,descending:s,setDescending:c,column:t}))}
			</div>`,E`<cosmoz-omnitable-resize-nub
				.column="${t}"
				name="${t.name}"
			></cosmoz-omnitable-resize-nub>`]),Oi=({columns:e,settingsConfig:t,hideSelectAll:n,...r})=>{let i=x(Ti);return E`
		${T(e,e=>Di({columns:e,sortAndGroup:i,...r}))}
		${T(!n,()=>E` <cosmoz-omnitable-settings
					.config=${t}
					part="settings"
				></cosmoz-omnitable-settings>`)}
	`},customElements.define(`cosmoz-omnitable-header-row`,M(Oi,{useShadowDOM:!1}))})))()}var Ai,ji;function Mi(){return(Mi=e((()=>{Ae(),ae(),Oe(),D(),Ai=A`
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
`,ji=({column:e})=>E`
	<div class="label" title="${e.title}" part="item-expand-label">
		${e.title}
	</div>
	<div class="value" part="item-expand-value">
		<slot></slot>
	</div>
`,customElements.define(`cosmoz-omnitable-item-expand-line`,M(ji,{styleSheets:[ve(Ai)]}))})))()}var Ni;function Pi(){return(Pi=e((()=>{D(),_(),Mi(),Ni=({columns:e,item:t,selected:n,expanded:r,groupOnColumn:i})=>ot(e,e=>E`<cosmoz-omnitable-item-expand-line
				.column=${e}
				?hidden=${e===i}
				exportparts="item-expand-label, item-expand-value"
				>${e.renderCell(e,{item:t,selected:n,expanded:r})}</cosmoz-omnitable-item-expand-line
			>`),customElements.define(`cosmoz-omnitable-item-expand`,M(Ni,{useShadowDOM:!1}))})))()}var Fi,Ii;function Li(){return(Li=e((()=>{D(),ce(),Fi=(e,t,n)=>e.editable?e.renderEditCell(e,t,n(e,t.item)):e.renderCell(e,t),Ii=({columns:e,groupOnColumn:t,item:n,index:r,selected:i,expanded:a,onItemChange:o})=>oe(e,e=>e.name,e=>E`<div
				class="cell itemRow-cell ${e.cellClass??``}"
				align="${e.align??`left`}"
				part="cell itemRow-cell cell-${e.name} itemRow-cell-${e.name}"
				?hidden="${e===t}"
				?editable="${e.editable}"
				title="${e.cellTitleFn(e,n)}"
				name="${e.name}"
			>
				${Fi(e,{item:n,index:r,selected:i,expanded:a},o)}
			</div>`),customElements.define(`cosmoz-omnitable-item-row`,M(Ii,{useShadowDOM:!1}))})))()}var Ri,zi;function Bi(){return(Bi=e((()=>{Ae(),Oe(),Ri=A`
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
`,zi=A`
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

	/* Rows sit inside the table's edge with no rules between them: a hover
	   or a selection reads as one rounded fill. */
	.itemRow {
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

	${Ri}

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
`})))()}var Vi,Hi;function Ui(){return(Ui=e((()=>{$e(),Vi=e=>{let t=e.replace(/"/gu,`""`);return t.search(/("|,|\n)/gu)>=0?`"`+t+`"`:e},Hi=(e,t,n)=>{let r=e.map(e=>Vi(e.title)).join(`;`)+`
`,i=t.map(t=>e.map(e=>{let n=e.getString(e,t);return n==null?``:Vi(String(n))}).join(`;`)+`
`);i.unshift(r),et(new File(i,n,{type:`text/csv;charset=utf-8`}))}})))()}var Wi,Gi;function Ki(){return(Ki=e((()=>{ft(),$e(),Wi=(e,t)=>{let n=e.map(e=>e.title),r=t.map(t=>e.map(e=>e.toXlsxValue(e,t)??``));return r.unshift(n),r},Gi=(e,t,n,r)=>{let i=Wi(e,t),a=new at(n).addSheetFromData(i,r).generate();et(new File([a],n,{type:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`}))}})))()}var qi,Q,Ji;function $(){return($=e((()=>{qi=Symbol(`index`),Q=Symbol(`All`),Ji=(e,t)=>{if(typeof e.findLastIndex==`function`)return e.findLastIndex(t);for(let n=e.length-1;n>=0;n--)if(t(e[n],n,e))return n;return-1}})))()}var Yi;function Xi(){return(Xi=e((()=>{Xe(),m(),j(),_(),Ui(),Ki(),$(),Yi=({columns:e,selectedItems:t,setSelectedItems:n,csvFilename:i,xlsxFilename:a,xlsxSheetname:o,topPlacement:s,enableSelectAll:c,allSelected:l,allItemsCount:u})=>{let d=t===Q,f=d||t.length>0,p=t!==Q&&c&&l,m=t=>E`<cosmoz-dropdown-menu
			part="extra"
			slot="extra"
			.placement=${s}
		>
			${r({slot:`button`})}
			<cosmoz-button
				variant="tertiary"
				@click=${()=>Hi(e,t,i)}
			>
				${N(`Save selected items as CSV`)}
			</cosmoz-button>
			<cosmoz-button
				variant="tertiary"
				@click=${()=>Gi(e,t,a,o)}
			>
				${N(`Save selected items as XLSX`)}
			</cosmoz-button>
			<slot name="download-menu"></slot
		></cosmoz-dropdown-menu>`,h=T(d,()=>u===void 0?N(`All items selected`):N(`All {count} items selected`,{count:u}),()=>N(`{count} selected item`,{count:t===Q?0:t.length}));return E`<cosmoz-bottom-bar
		id="bottomBar"
		?active=${f}
		part="bottomBar"
		exportparts="bar: bottomBar-bar, info: bottomBar-info, buttons: bottomBar-buttons"
	>
		<slot name="info" slot="info">
			${h}
			${T(p,()=>E`&nbsp;<span
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
		${T(t!==Q,()=>m(t))}
	</cosmoz-bottom-bar>`}})))()}var Zi;function Qi(){return(Qi=e((()=>{_(),Zi=({allSelected:e,onAllCheckboxChange:t,sortAndGroup:n,dataIsValid:r,data:i,columns:a,filters:o,groupOnColumn:s,setFilterState:c,settingsConfig:l,hideSelectAll:u})=>E`<sort-and-group-provider .value=${n}>
		<div class="header" id="header" part="header">
			${T(!u,()=>E`<input
						class="checkbox all"
						type="checkbox"
						.checked=${e}
						@input=${t}
						?disabled=${!r}
						part="all"
					/>`)}
			${T(u,()=>E` <cosmoz-omnitable-settings
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
	</sort-and-group-provider>`})))()}var $i,ea,ta;function na(){return(na=e((()=>{D(),$i=C`
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
`,ea=(e,t)=>{let n=t==null?void 0:e?.[t];return n==null?``:`width: ${n}px; padding: 0 min(3px, ${n/2}px)`},ta=({settingsConfig:e,widths:t})=>{let{columns:n,collapsed:r}=e,i=n.filter(e=>!r.some(t=>t.name===e.name));return E`<div class="skeleton">
		${Array.from({length:5},()=>E`<div>
					<div class="checkbox"></div>
					${i.map(e=>E`<div
								class="cell"
								part=${`cell-${e.name}`}
								name=${e.name}
								style=${ea(t,e.name)}
							></div>`)}
				</div>`)}
	</div>`},customElements.define(`cosmoz-omnitable-skeleton`,M(ta,{styleSheets:[$i]}))})))()}var ra;function ia(){return(ia=e((()=>{D(),na(),st(),j(),_(),ra=(e,t)=>{let{settingsConfig:r}=e,{processedItems:i,dataIsValid:a,filterIsTooStrict:o,loading:s,displayEmptyGroups:c,compareItemsFn:l,selectedItems:u,setSelectedItems:d,renderItem:f,renderGroup:p,error:m,partWidths:h}=t;return E`${T(!s&&!a&&!m,()=>E`<div class="tableContent-empty">
					<slot name="empty-set-message">
						${ut({width:`40px`,height:`40px`,styles:`fill: currentColor;`})}
						<div class="tableContent-empty-message">
							<h3>${N(`Working set empty`)}</h3>
							<p>${N(`No data to display`)}</p>
						</div>
					</slot>
				</div>`)}
		${T(o,()=>E`<div class="tableContent-empty">
					${ut({width:`40px`,height:`40px`,styles:`fill: currentColor;`})}
					<div>
						<h3>${N(`Filter too strict`)}</h3>
						<p>${N(`No matches for selection`)}</p>
					</div>
				</div>`)}
		${T(s&&!i.length,()=>E`<div class="tableContent-empty overlay has-skeleton">
					<cosmoz-omnitable-skeleton
						.settingsConfig=${r}
						.widths=${h}
					></cosmoz-omnitable-skeleton>
				</div>`)}
		${T(s&&i.length,()=>E`<div class="tableContent-empty overlay spinner"></div>`)}
		${T(m,()=>E`<div class="tableContent-empty overlay">
					${lt({width:`40px`,height:`40px`,styles:`fill: currentColor;`})}
					<div class="tableContent-empty-message">
						<h3>${N(`Error loading data`)}</h3>
						<p>${m.message}</p>
					</div>
				</div>`)}
		<div class="tableContent-scroller" id="scroller" part="scroller">
			<cosmoz-grouped-list
				id="groupedList"
				.data=${i}
				.selectedItems=${u}
				@selected-items-changed=${n(d)}
				.displayEmptyGroups=${c}
				.compareItemsFn=${l}
				.renderItem=${f}
				.renderGroup=${p}
			></cosmoz-grouped-list>
			<slot name="extraContent"></slot>
		</div>`}})))()}var aa,oa;function sa(){return(sa=e((()=>{Ae(),Oe(),Bi(),aa=A`
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
	${Ri}
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
`,oa=A`
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
`})))()}var ca,la;function ua(){return(ua=e((()=>{t(),D(),ca=e=>{let t=parseInt(e??``,10);return isFinite(t)?t:void 0},la=e=>{let{config:t}=e,{settings:n,setSettings:r,collapsed:i,requestTween:a}=t,o=se({collapsed:i,settings:n.columns,requestTween:a,setSettings:p(e=>r(t=>({...t,columns:e})),[r])});return{...t,onDown:p(e=>{let t=e.target instanceof Element?e.target:null;t&&t.closest(`.pull`)&&(o.handle=e.currentTarget instanceof HTMLElement?e.currentTarget:null)},[o]),onDragStart:p(e=>{let t=e.target instanceof HTMLElement?e.target:null,n=ca(t?.dataset.index);if(!t||!o.handle?.contains(t)||n==null)return e.preventDefault();o.handle=null,e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`omnitable/sort-index`,String(n)),e.dataTransfer.setData(`text/plain`,String(n)),setTimeout(()=>t.classList.add(`drag`),0),t.addEventListener(`dragend`,e=>{(e.target instanceof HTMLElement?e.target:null)?.classList.remove(`drag`)},{once:!0})},[o]),onDragEnter:p(e=>{let t=e.currentTarget instanceof HTMLElement?e.currentTarget:null;t&&t===e.target&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`,t.classList.add(`dragover`))},[]),onDragOver:p(e=>{e.preventDefault(),e.currentTarget instanceof HTMLElement&&e.currentTarget.classList.add(`dragover`)},[]),onDragLeave:p(e=>{let t=e.currentTarget instanceof HTMLElement?e.currentTarget:null;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||t.classList.remove(`dragover`))},[]),onDrop:p(e=>{let t=ca(e.dataTransfer?.getData(`omnitable/sort-index`)),n=e.currentTarget instanceof HTMLElement?e.currentTarget:null,r=ca(n?.dataset.index),{settings:i,setSettings:a,requestTween:s}=o;n?.classList.remove(`dragover`),e.preventDefault();let c=i.slice();c.splice(r+(t>=r?0:-1),0,c.splice(t,1)[0]),s?.(),a(c)},[o]),onToggle:p(e=>{let{settings:t,setSettings:n,requestTween:r}=o,i=t.map(e=>({...e,disabled:e.disabled||o.collapsed?.some(t=>t.name===e.name)})),a=e.target instanceof HTMLInputElement?e.target:null,s=ca((e.target instanceof Element?e.target:null)?.closest(`[data-index]`)?.getAttribute(`data-index`));s!=null&&(i.splice(s,1,{...t[s],disabled:!a?.checked,priority:a?.checked?t.reduce((e,t)=>Math.max(e,t.priority??0),0)+1:t[s]?.priority}),r?.(),n(i))},[o])}}})))()}var da,fa,pa,ma;function ha(){return(ha=e((()=>{He(),dt(),ze(),m(),ae(),Oe(),fe(),D(),j(),pi(),sa(),ua(),da=[ct({apply({availableHeight:e,elements:t}){Object.assign(t.floating.style,{maxHeight:`${Math.max(0,e)}px`})}}),...Ze],fa=({onDragStart:e,onDragEnter:t,onDragOver:n,onDragLeave:r,onDrop:i,onDown:a,onToggle:o,collapsed:s,filters:c})=>(l,u)=>{let d=!!s?.find(e=>e.name===l.name),f=!l.disabled&&!d;return E` <div
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
				>${v({width:`16`,height:`16`})}</cosmoz-button
			>
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
		</div>`},pa=e=>{let{settings:t,settingsId:n,onSave:r,onReset:i,hasChanges:a,canReset:o,opened:c,setOpened:l,...u}=la(e);return E` <div class="headline">
			<span> ${N(`Sort and filter`)} </span>
			<cosmoz-button
				variant="tertiary"
				aria-label="${N(`Close settings`)}"
				@click=${e=>{let t=e.currentTarget instanceof HTMLElement?e.currentTarget:null;t?.focus(),t?.blur()}}
			>
				${s({width:`16`,height:`16`})}
			</cosmoz-button>
		</div>

		<div class="contents">
			<div
				class="heading"
				?data-opened=${c.columns}
				@click=${()=>l(e=>({...e,columns:!e.columns}))}
				part="columns columns-heading"
			>
				${N(`Columns`)} ${d({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse
				?opened="${c.columns}"
				part="columns columns-content"
			>
				<div class="list">${t.columns?.map(fa(u))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${c.sort}
				@click=${()=>l(e=>({...e,sort:!e.sort}))}
			>
				${N(`Sort on`)} ${d({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse ?opened=${c.sort}> ${fi()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${c.group}
				@click=${()=>l(e=>({...e,group:!e.group}))}
				part="groups groups-heading"
			>
				${N(`Group on`)} ${d({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse ?opened=${c.group} part="groups groups-heading"
				>${di()}</cosmoz-collapse
			>
		</div>

		${T(n,()=>E`<div class="buttons">
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
				</div>`)}`},customElements.define(`cosmoz-omnitable-settings-ui`,M(pa,{styleSheets:[ve(aa)]})),ma=({config:e,newLayout:t})=>E`
	<cosmoz-dropdown
		.placement="${t?`bottom-start`:`bottom-end`}"
		.middleware="${da}"
	>
		<div title="${N(`Sort and filter`)}" slot="button">
			${T(t,()=>E`<div class="headerDots">...</div>`,()=>E` ${l({width:`20`,height:`20`,styles:`color: var(--cz-color-text-primary)`})}`)}
			${T(e?.badge,()=>E`<div class="badge"></div>`)}
		</div>
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${e}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`,customElements.define(`cosmoz-omnitable-settings`,M(ma,{styleSheets:[ve(oa)]}))})))()}var ga,_a,va,ya,ba;function xa(){return(xa=e((()=>{De(),ga=[`sortOn`,`descending`,`groupOn`,`groupOnDescending`],_a=e=>t=>typeof t==`object`&&!!t&&`name`in t&&t.name===e,va=(e=[],t=[],n=[])=>{let r=t.filter(t=>e.some(_a(t.name))),i=e.filter(e=>e.name!=null&&!t.some(_a(e.name))&&!n.some(_a(e.name))),a=n.filter(e=>!t.some(_a(e.name)));return[...r,...a.flatMap(t=>{let n=e.find(e=>e.name===t.name);return n?{...t,title:n.title??t.title??``,minWidth:parseInt(n.minWidth??`0`,10)}:[]}),...i.map(e=>{let{name:t,title:n,priority:r,minWidth:i,width:a,flex:o}=e;return{name:t??``,title:n??``,priority:r??0,minWidth:parseInt(i??`0`,10),width:parseInt(a??`0`,10),flex:parseInt(o??`0`,10)}})]},ya=(e,t)=>({...t,..._e(Array.from(ga))(e),columns:e.columns?.map(_e([`name`,`priority`,`width`,`flex`,`disabled`]))??t?.columns}),ba=({columns:e,settings:t,savedSettings:n,initial:r})=>({...Object.fromEntries(ga.flatMap(e=>r?.[e]==null?[]:[[e,r[e]]])),...n?_e(Array.from(ga))(n):{},...t,columns:va(e,t?.columns,n?.columns)})})))()}var Sa;function Ca(){return(Ca=e((()=>{Sa=({prefix:e=`omnitable-`}={})=>({write:async(t,n)=>{let r=e+t;try{n?localStorage.setItem(r,JSON.stringify(n)):localStorage.removeItem(r)}catch(e){console.error(e)}},read:async t=>{if(!t)return null;try{let n=localStorage.getItem(e+t);return n==null?null:JSON.parse(n)}catch(e){return console.error(e),null}}})})))()}var wa,Ta;function Ea(){return(Ea=e((()=>{D(),Ca(),wa=Pe(Sa),Ta=()=>{let e=x(wa);return P(()=>e(),[e])}})))()}function Da(){return(Da=e((()=>{Ea()})))()}var Oa;function ka(){return(ka=e((()=>{D(),Da(),xa(),Oa=(e,t,n,r)=>{let[i,a]=h(e?void 0:null),{read:o,write:s}=Ta();return b(async()=>{e&&a(await o(e))},[e,o]),{settingsId:e,savedSettings:i,onSave:p(async()=>{if(!e)return;let r=ya(t,i);await s(e,r),n(),a(r)},[t,i]),onReset:p(async()=>{n(),e&&i!=null&&(await s(e),a(null)),r?.()},[e,i,s,r]),hasChanges:t!=null,canReset:t!=null||i!=null}}})))()}var Aa;function ja(){return(ja=e((()=>{D(),hn(),xa(),ka(),Aa=({settingsId:e,host:t})=>{let n=P(()=>Object.fromEntries(ga.map(e=>[e,t[e]])),[]),r=g(),i=p(()=>{r.current?.(n)},[n]),[a,o]=h(),[s,c]=h({columns:!0,sort:!0}),{savedSettings:l,...u}=Oa(e,a,o,i),{enabledColumns:d,disabledFiltering:f}=t,m=mn(t,{enabledColumns:d,disabledFiltering:f}),_=P(()=>ba({columns:m,settings:a,savedSettings:l??void 0,initial:n}),[m,a,l]),v=P(()=>_.columns.map(e=>m.find(t=>t.name===e.name)).filter(e=>e!==void 0),[m,..._.columns.map(e=>e.name)]);return{...u,savedSettings:l,opened:s,setOpened:c,settings:_,columns:v,setSettings:o,resetRef:r}}})))()}function Ma(){return(Ma=e((()=>{ha(),ja()})))()}var Na,Pa;function Fa(){return(Fa=e((()=>{Na=e=>Number.isFinite(e)?e:0,Pa=(e,t)=>{let n=[],[r,i]=e.reduce(([e,t],{width:n,flex:r})=>[e+n,t+r],[0,0]),a=t-r,o=Na(a/i),s=0,c=0,l=0;for(let t=0;t<e.length;t++){let{width:i,minWidth:u,flex:d}=e[t];u>i+(a>=0?o*d:i*a/r)?(s+=i,c+=u,l+=d,n[t]=u):d===0&&(s+=i,c+=i,n[t]=i)}r-=s,a=t-c-r,i-=l,o=Na(a/i);for(let t=0;t<e.length;t++){if(n[t]!=null)continue;let{width:i,flex:s}=e[t],c=a>=0?o*s:i*a/r;n[t]=i+c}return n}})))()}var Ia,La,Ra,za,Ba,Va,Ha;function Ua(){return(Ua=e((()=>{Fa(),$(),Ia=(e,t)=>{let n=Ji(e,e=>e!=null&&e>0),r=0,i=0;return t.map((t,a)=>{let o=e[a];if(o==null||o===0)return{name:t.name,kind:`hide`};r+=o;let s=Math.round(r),c=s-i;return i=s,{name:t.name,kind:`width`,width:c,lastVisible:a===n}})},La=e=>`.cell[name="${e.name}"]{width: ${e.width}px;padding: 0 min(3px, ${e.width/2}px)}`,Ra=e=>`cosmoz-omnitable-resize-nub[name="${e}"]{display:none}`,za=e=>`cosmoz-omnitable-resize-nub[name="${e}"], .cell[name="${e}"]{display:none}`,Ba=e=>e.map(e=>{if(e.kind===`hide`)return za(e.name);let t=La(e);return e.lastVisible?`${t}\n${Ra(e.name)}`:t}).join(`
`),Va=(e,t,n)=>{let r=e.filter(e=>!e.hidden),i=r.reduce((e,{width:t})=>e+t,0);if(r.length>1&&i>t)return Va(r.slice(1),t,n);let a=r.reduce(([e,t],n,r)=>[Math.max(e,n.index),n.index>e?r:t],[-1,-1])[1];return a!==-1&&(r[a].flex=1),Pa(r,t).reduce((e,t,n)=>(e[r[n].index]=t,e),Array(n).fill(void 0))},Ha=(e,t)=>e.length===0?`.cell {display: none;}`:Ba(Ia(e,t))})))()}var Wa;function Ga(){return(Ga=e((()=>{D(),Wa=(e,t)=>b(()=>{let n=new ResizeObserver(([e])=>{e.contentRect?.width!==0&&t(e.contentRect.width-104)});return n.observe(e),()=>n.unobserve(e)},[])})))()}var Ka;function qa(){return(qa=e((()=>{D(),Ga(),Ka=e=>{let[t,n]=h(()=>e.getBoundingClientRect().width-104);return Wa(e,n),t}})))()}var Ja;function Ya(){return(Ya=e((()=>{D(),Ua(),Ja=({canvasWidth:e,groupOnColumn:t,layoutColumns:n,config:r})=>P(()=>{if(!Array.isArray(r)||e==null||e===0)return[];let i=r.map((e,n)=>({minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,name:e.name,index:n,hidden:e.name===t?.name||e.disabled})).map(e=>n==null?e:{...e,hidden:!n.includes(e.name)}).sort(({index:e,priority:t},{index:n,priority:r})=>t===r?n-e:t-r);return Va(i,e,i.length)},[e,t,r])})))()}var Xa;function Za(){return(Za=e((()=>{D(),Xa=({host:e,canvasWidth:t,columns:n})=>{let r=e.miniBreakpoint??480,i=P(()=>t<=r,[t,r]),a=P(()=>i?n?.filter(e=>e.mini!=null).sort((e,t)=>(e.mini??0)-(t.mini??0)):[],[n,i]),o=P(()=>a.slice(1),[a]),s=a[0],c=!!s&&e.renderItem==null;return b(()=>{e.toggleAttribute(`mini`,c)},[c]),{isMini:c&&i,hasMiniColumn:c,miniColumn:s,miniColumns:o}}})))()}var Qa;function $a(){return($a=e((()=>{D(),Qa=({host:e,canvasWidth:t,layout:n,setSettings:r,requestTween:i})=>{let a=g();a.current=e=>{i(),r(r=>{let i=r.columns,{detail:{newWidth:a,column:o}}=e,s=i.findIndex(e=>e.name===o.name),c=[],l=i.reduce((e,t)=>Math.max(e,t.priority),-1/0);for(let e=0;e<n.length;e++)if(c[e]={...i[e]},e<s&&n[e]&&(c[e].width=n[e],c[e].flex=0,c[e].priority=l),e===s){let r=n.reduce((e,t,n)=>n<s&&t?e-t:e,t);c[e].width=Math.min(r,Math.max(a,i[e].minWidth)),c[e].flex=0,c[e].priority=l}return{...r,columns:c}})},b(()=>{let t=e=>a.current?.(e);return e.addEventListener(`column-resize`,t),()=>e.removeEventListener(`column-resize`,t)},[])}})))()}var eo,to,no;function ro(){return(ro=e((()=>{me(),t(),D(),eo=(e,t)=>{let n=P(()=>{let t=!1,n,r=()=>{t&&(n=requestAnimationFrame(r),e()&&(t=!1))};return{start:()=>{t=!0,cancelAnimationFrame(n),r()},stop:()=>{t=!1,cancelAnimationFrame(n)}}},[]);b(()=>{n.start()},t),b(()=>()=>n.stop(),[])},to=(e=0,t=0)=>Math.abs(e-t)<.1,no=(e,t=1.9,n=xe,r)=>{let i=se({target:e,speedFactor:t,onConverge:r}),a=p(()=>{if(!i.tween)return i.tween=i.target,n(i.tween),i.onConverge?.(),!0;if(i.target.every((e,t)=>i.tween[t]===e))return n(i.tween),i.onConverge?.(),!0;if(i.tween=i.target.map((e,t)=>to(i.tween[t],e)?e:(i.tween[t]??0)+((e??0)-(i.tween[t]??0))/i.speedFactor||0),n(i.tween),i.tween.every((e,t)=>e===i.target[t]))return i.onConverge?.(),!0},[]);eo(a,[e])}})))()}var io,ao,oo;function so(){return(so=e((()=>{t(),D(),Ua(),qa(),Ya(),Za(),$a(),ro(),io=e=>{let t=P(()=>new CSSStyleSheet,[]);return b(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,t]},[]),t},ao=e=>{b(()=>{e.toggleAttribute(`compact`,e.compact===!0)},[e.compact])},oo=({host:e,columns:t,settings:n,setSettings:r,resizeSpeedFactor:i,sortAndGroupOptions:a})=>{let o=Ka(e),{isMini:s,hasMiniColumn:c,miniColumn:l,miniColumns:u}=Xa({host:e,canvasWidth:o,columns:t});ao(e);let{groupOnColumn:d}=a,f=c?[l.name]:e.headerColumns??null,m=Ja({canvasWidth:o,groupOnColumn:d,layoutColumns:f,config:n.columns}),_=io(e),v=n.columns.filter((e,t)=>m[t]==null&&e.name!==d?.name&&!e.disabled).map(e=>e.name),y=P(()=>v.map(e=>t.find(t=>t.name===e)),[t,v.join()]),[b,x]=h(1),S=p(()=>x(i??1.9),[i]),C=p(()=>x(1),[]),ee=se({columns:n.columns}),w=g({rules:void 0,widths:[]}).current,[T,te]=h(void 0),ne=e=>te(e.reduce((e,t)=>t.kind===`width`?{...e,[t.name]:t.width}:e,{}));return no(m,b,t=>{let n=Ia(t,ee.columns),r=Ha(t,ee.columns)===`.cell {display: none;}`?`empty`:n.map(e=>e.kind).join(`#`)+`#`+(n.findIndex(e=>e.lastVisible)+1);if(w.rules!==r){_.replaceSync(Ha(t,ee.columns)),w.rules=r,w.widths=n.map(e=>e.kind===`width`?e.width:void 0),ne(n);return}let i=_.cssRules,a=!1;n.forEach((e,t)=>{if(e.kind!==`width`||w.widths[t]===e.width)return;let n=i[t];n.style.width=`${e.width}px`,n.style.padding=`0 min(3px, ${e.width/2}px)`,w.widths[t]=e.width,a=!0}),a&&e.loading&&ne(n)},C),Qa({host:e,canvasWidth:o,layout:m,setSettings:e=>r(e(n)),requestTween:S}),{isMini:s,collapsedColumns:y,miniColumns:u,requestTween:S,partWidths:T}}})))()}var co;function lo(){return(lo=e((()=>{co=({host:e,...t})=>{let{csvFilename:n=`omnitable.csv`,xlsxFilename:r=`omnitable.xlsx`,xlsxSheetname:i=`Omnitable`,topPlacement:a=`top-end`}=e;return{csvFilename:n,xlsxFilename:r,xlsxSheetname:i,topPlacement:a,...t}}})))()}var uo;function fo(){return(fo=e((()=>{D(),$(),uo=({host:e,selectedItems:t,data:n,dataIsValid:r,columns:i,sortAndGroupOptions:a,collapsedColumns:o,settings:s,filterFunctions:c,settingS:l,filters:u,setFilterState:d,hideSelectAll:f,headerColumns:p,requestTween:m,...h})=>{let g=P(()=>p==null?i:i.filter(e=>p.includes(e.name)),[i,p]),_=t===Q||!!n&&n.length>0&&Array.isArray(t)&&t.length===n.length,v=t=>{if(!(t.target instanceof HTMLInputElement))return;let n=e.shadowRoot.querySelector(`#groupedList`);t.target.checked?n.selectAll():n.deselectAll()},{groupOnColumn:y}=a,b=P(()=>[y,...o,...s.columns.filter(e=>e.disabled)].some(e=>!!e&&!!e.name&&Object.keys(c).includes(e.name)),[c,s,o]);return{allSelected:_,onAllCheckboxChange:v,data:n,dataIsValid:r,columns:g,settingsConfig:P(()=>({...l,collapsed:o,badge:b,filters:u,requestTween:m}),[l,o,b,u,m]),filters:u,groupOnColumn:y,setFilterState:d,hideSelectAll:f,sortAndGroup:a.sortAndGroup,...h}}})))()}var po,mo;function ho(){return(ho=e((()=>{He(),m(),D(),j(),po=e=>e?`groupRow groupRow-folded`:`groupRow`,mo=(e,t,{selected:n,folded:r,toggleFold:i,onCheckboxChange:a,groupOnColumn:o,dataIsValid:s})=>E` <div
		class="${po(r)}"
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
			aria-label=${N(`Expand or collapse`)}
			variant="tertiary"
			icon-only
			class="expand"
			?aria-expanded="${r}"
			@click=${i}
		>
			${d({width:`16`,height:`16`})}
		</cosmoz-button>
	</div>`})))()}var go;function _o(){return(_o=e((()=>{_(),go=({item:e,index:t})=>n=>T((n?.length??0)>0,()=>E`
				<div class="itemRow-minis" part="item-minis">
					${n.map(n=>E`<div
								class="itemRow-mini"
								part="item-mini item-mini-${n.name}"
							>
								${(n.renderMini??n.renderCell)(n,{item:e,index:t})}
							</div>`)}
				</div>
			`)})))()}var vo;function yo(){return(yo=e((()=>{He(),m(),fe(),D(),j(),_o(),vo=(e,t,{selected:n,expanded:r,toggleCollapse:i,columns:a,collapsedColumns:o,miniColumns:s,onItemClick:c,onCheckboxChange:l,onItemChange:u,rowPartFn:f,groupOnColumn:p,dataIsValid:m})=>E`
		<div
			?selected=${n}
			part="${[`itemRow`,`itemRow-${t}`,f?.(e,t)].filter(Boolean).join(` `)}"
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
					.onItemChange=${u}
				>
				</cosmoz-omnitable-item-row>
				<cosmoz-button
					aria-label=${N(`Expand or collapse`)}
					variant="tertiary"
					icon-only
					class="expand"
					?hidden="${de(o.length)}"
					?aria-expanded="${r}"
					@click="${i}"
				>
					${d({width:`16`,height:`16`})}
				</cosmoz-button>
			</div>
			${go({item:e,index:t})(s)}
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
	`})))()}var bo,xo,So;function Co(){return(Co=e((()=>{D(),ho(),yo(),$(),J(),bo=e=>e instanceof HTMLInputElement,xo=e=>e instanceof HTMLElement,So=({host:e,error:t,dataIsValid:n,processedItems:r,columns:i,collapsedColumns:a,miniColumns:o,sortAndGroupOptions:s,rowPartFn:c,...l})=>{let{loading:u=!1,displayEmptyGroups:d=!1,compareItemsFn:f}=e,m=e.renderItem??vo,h=e.renderGroup??mo,_=g({shiftKey:!1,ctrlKey:!1}),v=p(t=>{if(!bo(t.target))return;let n=t.target,r=n.dataItem,i=n.checked,a=e.shadowRoot.querySelector(`#groupedList`);_.current.shiftKey?a.toggleSelectTo(r,i):_.current.ctrlKey?(n.checked=!0,a.selectOnly(r)):a.toggleSelect(r,i),t.preventDefault(),t.stopPropagation()},[]);b(()=>{let e=({shiftKey:e,ctrlKey:t})=>{_.current={shiftKey:e,ctrlKey:t}};return window.addEventListener(`keydown`,e),window.addEventListener(`keyup`,e),()=>{window.removeEventListener(`keydown`,e),window.removeEventListener(`keyup`,e)}},[]);let y=p(t=>{if(!xo(t.currentTarget))return;let n=t.currentTarget,r=t.composedPath();r.slice(0,r.indexOf(n)).some(e=>e instanceof Element&&e.matches(`a, .checkbox, .expand`))||e.dispatchEvent(new window.CustomEvent(`omnitable-item-click`,{bubbles:!0,composed:!0,detail:{item:n.dataItem,index:n.dataIndex}}))},[]),{groupOnColumn:x}=s,S=p((t,n)=>r=>vn(e,t,n,r),[]);return{...l,processedItems:r,dataIsValid:n,filterIsTooStrict:n&&r.length<1,loading:u,compareItemsFn:f,displayEmptyGroups:d,error:t,renderItem:P(()=>(e,t,r)=>m(e,e[qi],{...r,columns:i,collapsedColumns:a,miniColumns:o,onItemClick:y,onCheckboxChange:v,onItemChange:S,rowPartFn:c,groupOnColumn:x,dataIsValid:n}),[m,i,a,o,y,v,S,c,x,n]),renderGroup:P(()=>(e,t,r)=>h(e,e[qi],{...r,columns:i,onCheckboxChange:v,groupOnColumn:x,dataIsValid:n}),[h,i,v,x,n])}}})))()}var wo;function To(){return(To=e((()=>{wo=(e,t)=>{if(e===t)return 0;if(e==null)return-1;if(t==null)return 1;let n=typeof e,r=typeof t;return n===`object`&&r===`object`?e.toString()<t.toString()?-1:1:n===`number`&&r===`number`?e-t:n===`string`&&r===`string`?e<t?-1:1:n===`boolean`&&r===`boolean`?e?-1:1:(console.warn(`unsupported sort`,n,e,r,t),0)}})))()}var Eo,Do,Oo,ko,Ao,jo;function Mo(){return(Mo=e((()=>{me(),D(),To(),hn(),bi(),$(),Eo=(e,t)=>(n,r)=>wo(e(n),e(r))*(t?-1:1),Do=e=>e.replace(/([a-z0-9])([A-Z])/gu,`$1-$2`).toLowerCase(),Oo=(e,t)=>{e&&t&&Object.entries(t).forEach(([t,n])=>{let r=e[q];r.__ownChange=!0,Object.assign(r,{[t]:n}),r.__ownChange=!1,r.dispatchEvent(new CustomEvent(`${Do(t)}-changed`,{bubbles:!0,detail:{value:n}}))})},ko=(e,t)=>Object.assign(e,{[qi]:t}),Ao=Symbol(`unparsed`),jo=({data:e,columns:t,hashParam:n,sortAndGroupOptions:r,noLocalSort:i,noLocalFilter:a})=>{let{groupOnColumn:o,groupOnDescending:s,sortOnColumn:c,descending:l}=r,u=p(([e,n])=>{let r=t.find(({name:t})=>t===e);return r==null?[e,void 0]:[e,n.filter&&r.serializeFilter(r,n.filter)]},[t]),d=p(([e,n])=>{let r=t.find(({name:t})=>t===e);if(r==null)return[e,{[Ao]:n}];let i={filter:r.deserializeFilter(r,n)};return Oo(r,i),[e,i]},[t]),[f,m]=mi({},n,{multi:!0,suffix:`-filter--`,write:u,read:d}),h=p((e,n)=>m(r=>{let i=ie(n,r[e]);return Oo(t.find(t=>t.name===e),i),{...r,[e]:{...r[e],...i}}}),[t,m]),g=P(()=>Object.values(f).map(e=>e.filter),[f]),_=P(()=>Object.fromEntries(t.map(e=>[e.name,!e.noLocalFilter&&e.getFilterFn(e,f[e.name]?.filter)]).filter(e=>!!e[1])),[t,...g]),v=P(()=>!Array.isArray(e)||e.length===0?[]:Object.entries(_).length===0||a?e.slice():e.filter(e=>Object.values(_).every(t=>t(e))),[e,_,a]),y=P(()=>{if(!i&&!o&&c!=null&&c.sortOn!=null)return v.slice().sort(Eo(e=>c.getComparableValue({...c,valuePath:c.sortOn},e),l));if(o!=null&&o.groupOn!=null){let e=v.reduce((e,t)=>{let n=o.getComparableValue({...o,valuePath:o.groupOn},t);if(n===void 0)return e;let r=e.find(e=>e.id===n);return r?(r.items.push(t),e):(r={id:n,name:n,items:[t]},[...e,r])},[]);return e.sort(Eo(e=>o.getComparableValue({...o,valuePath:o.groupOn},e.items[0]),s)),!c||i?e:e.filter(e=>Array.isArray(e.items)).map(e=>(e.items.sort(Eo(e=>c.getComparableValue({...c,valuePath:c.sortOn},e),l)),e))}return v},[v,o,s,c,l,i]),x=P(()=>{let e=0,t=0,n=[];return y.forEach(r=>{if(`items`in r&&Array.isArray(r.items))ko(r,t++),r.items.forEach(t=>{ko(t,e++),n.push(t)});else return ko(r,e++),n.push(r)},[]),n},[y]);return b(()=>{m(e=>Object.values(e).some(e=>e[Ao]!=null)?Object.fromEntries(Object.entries(e).map(([e,t])=>{let n=t[Ao];return n==null?[e,t]:d([e,n])})):e)},[d]),{processedItems:y,visibleData:x,filters:f,filterFunctions:_,setFilterState:h}}})))()}var No,Po,Fo;function Io(){return(Io=e((()=>{je(),Me(),D(),No=e=>{let t=t=>{let n=e.data.indexOf(t);if(n<0)return null;let r=e.data.splice(n,1);if(e.data=e.data.slice(),Array.isArray(r)&&r.length>0)return r[0]},n=(t,n)=>{e.data.splice(t,1,n),e.data=e.data.slice()};return{removeItem:t,removeItems(e){let n=[];for(let r=e.length-1;r>=0;--r){let i=t(e[r]);i!=null&&n.push(i)}return n},replaceItemAtIndex:n,replaceItem(t,r){let i=e.data.indexOf(t);i>-1&&n(i,r)},selectItem(t){e.shadowRoot.querySelector(`#groupedList`).select(t)},selectAll(){e.shadowRoot.querySelector(`#groupedList`).selectAll()},deselectAll(){e.shadowRoot.querySelector(`#groupedList`).deselectAll()},deselectItem(t){e.shadowRoot.querySelector(`#groupedList`).deselect(t)},isItemSelected(t){return e.shadowRoot.querySelector(`#groupedList`).isItemSelected(t)}}},Po=e=>{let[t,n]=h(!1);return b(()=>{e&&n(!0)},[e]),t},Fo=({host:e,visibleData:t,filters:n,ready:r=!0,...a})=>{let{setFilterState:o}=a,s=P(()=>No(e),[]),[c,l]=he(`selectedItems`,[]);y(a,Object.values(a)),y(s,Object.values(s)),b(()=>{let t=e=>{if(!(e instanceof CustomEvent))return;let t=e.detail;o(t.name,e=>({...typeof e==`object`&&e?e:{},...t.state}))};return e.addEventListener(`legacy-filter-changed`,t),()=>e.removeEventListener(`legacy-filter-changed`,t)},[]),i(`visibleData`,t),i(`sortedFilteredGroupedItems`,a.sortedFilteredGroupedItems),i(`sortOn`,a.sortOn),i(`descending`,a.descending),i(`isMini`,a.isMini),i(`settingsReady`,Po(r));let u=P(()=>Object.fromEntries(Object.entries(n).filter(([,{filter:e}])=>e!==void 0).map(([e,{filter:t}])=>[e,t])),[n]);return i(`filters`,u,Object.values(u)),{selectedItems:c,setSelectedItems:l}}})))()}var Lo;function Ro(){return(Ro=e((()=>{Ma(),so(),lo(),fo(),Co(),Mo(),Io(),Ei(),Lo=e=>{let{hashParam:t,settingsId:n,data:r,resizeSpeedFactor:i,noLocal:a,noLocalSort:o=a,noLocalFilter:s=a,error:c,rowPartFn:l}=e,u=Aa({settingsId:n,host:e}),{settings:d,setSettings:f,columns:p,resetRef:m,savedSettings:h}=u,g=h!==void 0,_=wi(p,t,{settings:d,setSettings:f,resetRef:m,ready:g}),{processedItems:v,visibleData:y,filters:b,setFilterState:x,filterFunctions:S}=jo({data:r,columns:p,hashParam:t,sortAndGroupOptions:_,noLocalSort:o,noLocalFilter:s}),{isMini:C,collapsedColumns:ee,miniColumns:w,requestTween:T,partWidths:te}=oo({host:e,columns:p,settings:d,setSettings:f,resizeSpeedFactor:i,sortAndGroupOptions:_}),ne=r&&Array.isArray(r)&&r.length>0,{selectedItems:E,setSelectedItems:re}=Fo({host:e,visibleData:y,sortedFilteredGroupedItems:v,columns:p,filters:b,setFilterState:x,isMini:C,ready:g,..._}),D=uo({host:e,selectedItems:E,sortAndGroupOptions:_,dataIsValid:ne,data:r,columns:p,filters:b,collapsedColumns:ee,settings:d,filterFunctions:S,settingS:u,setFilterState:x,hideSelectAll:e.hideSelectAll===!0,headerColumns:e.headerColumns??null,requestTween:T});return{header:D,list:So({host:e,error:c,dataIsValid:ne,processedItems:v,selectedItems:E,setSelectedItems:re,columns:p,collapsedColumns:ee,miniColumns:w,sortAndGroupOptions:_,rowPartFn:l,partWidths:te}),footer:co({host:e,selectedItems:E,allSelected:D.allSelected,setSelectedItems:re,columns:p,enableSelectAll:e.enableSelectAll,allItemsCount:e.allItemsCount})}}})))()}var zo;function Bo(){return(Bo=e((()=>{D(),_(),zo=e=>{let{item:t,index:n,renderFn:r}=e;return t==null||n==null||r==null?u:r(t,n)},customElements.define(`cosmoz-grouped-list-row`,M(zo,{useShadowDOM:!1}))})))()}var Vo,Ho,Uo,Wo,Go,Ko;function qo(){return(qo=e((()=>{we(),Se(),Vo=40,Ho=24,Uo=12,Wo=16,Go=class extends Ne{constructor(){super(...arguments),this._items=[],this._renderRow=()=>{},this._host=null,this._canvas=null,this._clip=null,this._scroller=null,this._pool=[],this._heights=[],this._prefix=[0],this._itemsVersion=``,this._built=!1,this._rafId=null,this._ro=null,this._scrollerTarget=null,this._observing=new WeakSet,this._boundRenderRow=null,this.pumpCount=0,this._onWheel=e=>{let t=this._scroller;if(!t||e.ctrlKey)return;e.preventDefault();let n=1;e.deltaMode===1?n=40:e.deltaMode===2&&(n=t.clientHeight),e.deltaY!==0&&(t.scrollTop+=e.deltaY*n),e.deltaX!==0&&(t.scrollLeft+=e.deltaX*n)},this._onKeydown=e=>{let t=this._scroller;if(!t||e.defaultPrevented||e.ctrlKey||e.altKey||e.metaKey||this._isInteractiveKeyTarget(e))return;let n=null,r=null;switch(e.key){case`ArrowUp`:n=-40;break;case`ArrowDown`:n=40;break;case`PageUp`:n=-Math.round(t.clientHeight*.9);break;case`PageDown`:n=Math.round(t.clientHeight*.9);break;case` `:n=e.shiftKey?-t.clientHeight:t.clientHeight;break;case`Home`:r=0;break;case`End`:r=t.scrollHeight;break;default:return}e.preventDefault(),n==null?r!=null&&(t.scrollTop=r):t.scrollTop+=n},this._activePointer=null,this._dragStartX=0,this._dragStartY=0,this._dragStartScrollTop=0,this._dragStartScrollLeft=0,this._dragScrolling=!1,this._onPointerDown=e=>{if(this._activePointer!=null){this._endPointerDrag();return}if(e.pointerType!==`touch`&&e.pointerType!==`pen`)return;let t=this._scroller;t&&(this._activePointer=e.pointerId,this._dragStartX=e.clientX,this._dragStartY=e.clientY,this._dragStartScrollTop=t.scrollTop,this._dragStartScrollLeft=t.scrollLeft,this._dragScrolling=!1)},this._onPointerMove=e=>{if(e.pointerId!==this._activePointer)return;let t=this._scroller;if(!t)return;let n=e.clientX-this._dragStartX,r=e.clientY-this._dragStartY;if(!this._dragScrolling){if(Math.abs(n)<2&&Math.abs(r)<2)return;this._dragScrolling=!0}e.preventDefault(),t.scrollTop=this._dragStartScrollTop-r,t.scrollLeft=this._dragStartScrollLeft-n},this._onPointerEnd=e=>{e.pointerId===this._activePointer&&this._endPointerDrag()},this._onScroll=()=>{this._pump(),this._rafId??=requestAnimationFrame(()=>{this._rafId=null,this._pump()})},this._appliedTotal=-1,this._anchorIndex=0,this._lastAnchorTop=0,this._boxTop=-1,this._boxLeft=-1,this._boxWidth=-1,this._boxHeight=-1,this._appliedScroll=NaN,this._measuredViewport=0,this._minMeasured=1/0,this._avgRowHeight=Vo,this._measured=new Uint8Array}_debugPump(){let e=document.defaultView;e.__rec=this;let t=this._pool.filter(e=>e.bound!=null).length,n=this._pool.find(e=>e.bound!=null);(e.__recLog??=[]).push({t:`pumpEnd`,items:this._items.length,pumpCount:this.pumpCount,pool:this._pool.length,bound:t,firstBound:n?String(n.bound):`none`,firstBoundItem:n?.boundItem?String(n.boundItem).slice(0,20):`none`,firstVis:n?n.el.style.visibility:`none`,firstIndex:this._firstIndex(this._scroller?.scrollTop??0),scrollTop:this._scroller?.scrollTop})}render(e){return this._items=e.items??[],this._renderRow=e.renderRow,this._built&&this._schedule(),w}update(e,t){let n=t[0];if(!n)return w;this._items=n.items??[],this._renderRow=n.renderRow;let r=document.defaultView;if((r.__recLog??=[]).push({t:`update`,n:this._items.length,scroller:this._scroller?.clientHeight}),!this._built){let t=e;this._build(t.parentNode),this._built=!0}if(this._heights.length!==this._items.length&&(this._heights.length=this._items.length,this._heights.fill(Vo),this._invalidate()),this._measured.length!==this._items.length&&(this._measured=new Uint8Array(this._items.length)),this._boundRenderRow!==this._renderRow){this._boundRenderRow=this._renderRow;for(let e of this._pool){if(e.bound==null)continue;let t=e.bound;e.el.renderFn=(e=>this._renderRow(e,t))}}return this._pump(),w}_build(e){let t=e??document.createElement(`div`);this._host=t,t.style.flexShrink=`0`;let n=document.createElement(`div`);n.className=`glist-recycler-viewport`,n.style.position=`absolute`,n.style.overflow=`hidden`,n.style.touchAction=`none`;let r=document.createElement(`div`);r.className=`glist-recycler-canvas`,r.style.position=`absolute`,r.style.top=`0`,r.style.left=`0`,r.style.width=`100%`,r.style.willChange=`transform`,n.appendChild(r),this._clip=n,this._canvas=r,this._resolveScroller(),this._measureViewport(),this._attachCanvas(),this._ro=new ResizeObserver(e=>this._onResize(e)),this._schedule()}_resolveScroller(){let e=this._host?.parentElement;for(;e;){let t=getComputedStyle(e).overflowY;if(t===`auto`||t===`scroll`||t===`overlay`)break;e=e.parentElement}this._scroller=e??null,e&&(this._scrollerTarget=e,e.addEventListener(`scroll`,this._onScroll,{passive:!0}))}_attachCanvas(){let e=this._clip,t=this._scroller;if(!e||!t)return;let n=t.parentElement;n&&e.parentElement!==n&&n.appendChild(e),e.addEventListener(`wheel`,this._onWheel,{passive:!1}),e.addEventListener(`keydown`,this._onKeydown),e.addEventListener(`pointerdown`,this._onPointerDown),e.addEventListener(`pointermove`,this._onPointerMove),e.addEventListener(`pointerup`,this._onPointerEnd),e.addEventListener(`pointercancel`,this._onPointerEnd),this._syncCanvasBox()}_syncCanvasBox(){let e=this._scroller,t=this._clip;if(!e||!t)return!1;let n=e.offsetTop,r=e.offsetLeft,i=e.clientWidth,a=e.clientHeight;return n===this._boxTop&&r===this._boxLeft&&i===this._boxWidth&&a===this._boxHeight?!1:(this._boxTop=n,this._boxLeft=r,this._boxWidth=i,this._boxHeight=a,t.style.top=`${n}px`,t.style.left=`${r}px`,t.style.width=`${i}px`,t.style.height=`${a}px`,!0)}_isInteractiveKeyTarget(e){let t=e.composedPath()[0]??e.target;return t instanceof Element?t instanceof HTMLElement&&t.isContentEditable?!0:t.matches(`button, input, select, textarea, a[href], [contenteditable], [role="checkbox"], [role="option"], [role="radio"], [role="menuitem"]`):!1}_endPointerDrag(){this._activePointer=null,this._dragScrolling=!1}_measureViewport(){let e=this._scroller?.clientHeight??300,t=Math.max(Wo,Math.ceil(e/this._rowBudget())+24);this._ensurePool(t)}_ensurePool(e){for(;this._pool.length<e;){let e=document.createElement(`cosmoz-grouped-list-row`);e.style.position=`absolute`,e.style.left=`0`,e.style.right=`0`,e.style.top=`0`,e.style.visibility=`hidden`,this._canvas?.appendChild(e),this._pool.push({el:e,height:Vo,bound:void 0})}}_onResize(e){let t=!1;for(let n of e){let e=this._pool.find(e=>e.el===n.target);if(!e)continue;let r=Math.round(e.el.getBoundingClientRect().height);r>0&&(e.h=r);let i=e.bound;if(!(i==null||i<0||i>=this._items.length)&&r>0){r<this._minMeasured&&(this._minMeasured=r);let e=this._measured[i];this._heights[i]!==r&&(this._heights[i]=r,t=!0),this._measured[i]=1,e||(t=!0)}}if(t){this._invalidate(),this._syncBoundTransforms();let e=this._offset(this._anchorIndex)-this._lastAnchorTop;e!==0&&this._scroller&&(this._scroller.scrollTop+=e,this._lastAnchorTop+=e),this._schedule()}}_syncBoundTransforms(){for(let e of this._pool){if(e.bound==null){e.off=0;continue}let t=this._offset(e.bound);t!==e.off&&(e.el.style.transform=`translate3d(0, ${t}px, 0)`,e.off=t)}}_logTotalChange(e,t){if(e===this._appliedTotal)return;let n=this._appliedTotal;this._appliedTotal=e,document.defaultView.__recTotal?.(e,n,t)}_invalidate(){let e=0,t=0;for(let n=0;n<this._items.length;n++)this._measured[n]&&(e+=this._heights[n]??Vo,t++);t>0&&(this._avgRowHeight=e/t),this._prefix.length=0,this._prefix.push(0);for(let e=0;e<this._items.length;e++)this._prefix.push((this._prefix[e]??0)+(this._measured[e]?this._heights[e]??Vo:this._avgRowHeight));this._host&&(this._host.style.height=`${this._prefix[this._items.length]??0}px`)}_offset(e){return this._prefix[e]??0}_firstIndex(e){let t=this._items.length,n=0,r=Math.max(0,t-1),i=0;for(;n<=r;){let t=Math.floor((n+r)/2);(this._prefix[t]??0)<=e?(i=t,n=t+1):r=t-1}return i}_schedule(){this._rafId??=requestAnimationFrame(()=>{this._rafId=null,this._pump()})}_pump(){this.pumpCount=(this.pumpCount??0)+1;let e=this._items.length;this._prefix.length!==e+1&&this._invalidate();let t=this._scroller?.scrollTop??0,n=this._scroller?.clientHeight??300;(this._syncCanvasBox()||this._scroller?.clientHeight!==this._measuredViewport)&&(this._measuredViewport=this._scroller?.clientHeight??0,this._measureViewport()),this._canvas&&this._appliedScroll!==t&&(this._appliedScroll=t,this._canvas.style.transform=`translate3d(0, ${-t}px, 0)`);let r=Math.max(0,this._firstIndex(Math.max(0,t))-Uo),i=this._offset(this._anchorIndex??r);this._anchorIndex=this._firstIndex(Math.max(0,t)),this._lastAnchorTop=i;let a=this._prefix[e]??0;this._logTotalChange(a,`pump`),this._host&&this._host.style.height!==`${a}px`&&(this._host.style.height=`${a}px`),this._canvas&&this._canvas.style.height!==`${a}px`&&(this._canvas.style.height=`${a}px`);let o=Math.min(e-r,Math.ceil(n/this._rowBudget())+24),s=r+o-1;this._ensurePool(o),this._debugPump();let c=new Set;for(let e=r;e<=s;e++)c.add(e);let l=[],u=new Set;for(let e of this._pool)e.bound!=null&&c.has(e.bound)?u.add(e.bound):l.push(e);let d=[];for(let e=r;e<=s;e++)u.has(e)||d.push(e);for(let e of d){let t=l.pop()??this._allocateSlot();this._bind(t,e)}for(let e of this._pool)e.bound!=null&&c.has(e.bound)||e.el.style.visibility===`hidden`||(e.el.style.visibility=`hidden`,e.bound=void 0,e.off=0,e.el.style.transform=``);for(let e of this._pool){if(e.bound==null)continue;let t=this._items[e.bound];t!==void 0&&e.boundItem!==t&&this._bind(e,e.bound)}}_rowBudget(){return Math.max(Ho,this._minMeasured)}_allocateSlot(){let e=document.createElement(`cosmoz-grouped-list-row`);e.style.position=`absolute`,e.style.left=`0`,e.style.right=`0`,e.style.top=`0`,e.style.visibility=`hidden`,this._canvas?.appendChild(e);let t={el:e,height:Vo,bound:void 0};return this._pool.push(t),this._ro&&this._ro.observe(e),t}_bind(e,t){let n=this._items[t];(e.bound!==t||e.boundItem!==n)&&(e.h!=null&&!this._measured[t]&&(this._measured[t]=1,this._heights[t]!==e.h&&(this._heights[t]=e.h),this._invalidate(),this._syncBoundTransforms()),e.bound=t,e.boundItem=n,e.el.index=t,e.el.item=n,e.wrapper=(t=>this._renderRow(t,e.bound)),e.el.renderFn=e.wrapper,e.el.style.transform=`translate3d(0, ${this._offset(t)}px, 0)`,e.off=this._offset(t),e.el.style.visibility=`visible`,this._ro&&!this._observing.has(e.el)&&(this._observing.add(e.el),this._ro.observe(e.el)))}disconnected(){this._rafId!=null&&(cancelAnimationFrame(this._rafId),this._rafId=null),this._ro?.disconnect(),this._scroller?.removeEventListener(`scroll`,this._onScroll),this._clip?.removeEventListener(`wheel`,this._onWheel),this._clip?.removeEventListener(`keydown`,this._onKeydown),this._clip?.removeEventListener(`pointerdown`,this._onPointerDown),this._clip?.removeEventListener(`pointermove`,this._onPointerMove),this._clip?.removeEventListener(`pointerup`,this._onPointerEnd),this._clip?.removeEventListener(`pointercancel`,this._onPointerEnd),this._endPointerDrag()}reconnected(){this._ro?.disconnect(),this._ro=new ResizeObserver(e=>this._onResize(e));for(let e of this._pool)e.bound!=null&&this._ro.observe(e.el);this._resolveScroller(),this._attachCanvas(),this._schedule()}},Ko=a(Go)})))()}var Jo,Yo,Xo,Zo,Qo,$o,es,ts,ns;function rs(){return(rs=e((()=>{Jo={group:Symbol(`group`)},Yo=(e,t)=>(t.has(e)||t.set(e,{}),t.get(e)),Xo=(e,t)=>!!Yo(e,t).expanded,Zo=(e,t)=>!!Yo(e,t).folded,Qo=e=>e?e.items instanceof Array:!1,$o=e=>{if(!Array.isArray(e)||e.length===0)return;let t=Array.isArray(e[0]?.items);if(!e.every(e=>Array.isArray(e.items)===t))throw Error(`Data must be homogeneous.`)},es=(e,t,n)=>{if(Array.isArray(e))return $o(e),e.reduce((e,r)=>{let i=r;return i.items?i.items.length?Yo(r,n).folded?e.concat(r):e.concat(r,i.items.map(e=>Object.assign(e,{[Jo.group]:r}))):t?e.concat(r):e:e.concat(r)},[])},ts=(e,...t)=>typeof e==`function`?e(...t):e,ns=(e,t)=>e===t})))()}var is;function as(){return(as=e((()=>{D(),rs(),is=()=>{let[e,t]=h(()=>[new WeakMap]);return{setItemState:p((e,n)=>t(([t])=>{let r=Yo(e,t);return Object.assign(r,ts(n,r)),[t]}),[]),state:e[0],signal:e}}})))()}var os;function ss(){return(ss=e((()=>{D(),as(),rs(),os=()=>{let{setItemState:e,state:t,signal:n}=is();return{state:t,signal:n,toggleFold:p((t,n)=>{Qo(t)&&e(t,e=>({folded:n===void 0?!e.folded:n}))},[]),toggleCollapse:p((t,n)=>{Qo(t)||e(t,e=>({expanded:n===void 0?!e.expanded:!n}))},[])}}})))()}var cs;function ls(){return(ls=e((()=>{D(),$(),rs(),cs=({compareItemsFn:e,data:t,flatData:n})=>{let[r,i]=he(`selectedItems`,()=>[]),[a,o]=h(),s=p(e=>r===Q||r.includes(e),[r]),c=p(e=>r===Q||(e?.items?.every(s)??!1),[r,s]),l=p(e=>s(e)||c(e),[s,c]),u=p(e=>{let t=e.items??[e];i(e=>e===Q?e:[...e,...t.filter(t=>!e.includes(t))]),o(e)},[]),d=p(e=>{let t=e.items??[e];i(e=>e===Q?(n??[]).filter(e=>!Qo(e)).filter(e=>!t.includes(e)):e.filter(e=>!t.includes(e))),o(e)},[n]),f=p(e=>{i(e.items?.slice()||[e]),o(e)},[]),m=p(()=>{i(t.flatMap(e=>e.items||e)),o(void 0)},[t]),g=p(()=>{i([]),o(void 0)},[]),_=p((e,t=!l(e))=>t?u(e):d(e),[l]),v=p((t,r)=>{if(!n)return;let i=a?n.findIndex(t=>e(t,a)):-1;if(i<0)return _(t,r);let[s,c]=[i,n.indexOf(t)].sort((e,t)=>e-t);n.slice(s,c+1).forEach((e,t,n)=>{t>0&&t<n.length-1&&Qo(e)||_(e,r)}),o(t)},[n,e,_]);return b(()=>i(t=>t!==Q&&t.length>0&&n?n.filter(n=>t.find(t=>e(n,t))):t),[n]),{selectedItems:r,isItemSelected:s,isGroupSelected:c,isSelected:l,select:u,deselect:d,selectOnly:f,selectAll:m,deselectAll:g,toggleSelect:_,toggleSelectTo:v}}})))()}var us,ds,fs;function ps(){return(ps=e((()=>{je(),D(),Bo(),qo(),ss(),ls(),rs(),us={host:{position:`relative`,display:`flex`,flexDirection:`column`}},ds=e=>{let{data:t,renderItem:n,renderGroup:r,displayEmptyGroups:i,compareItemsFn:a=ns}=e,{toggleFold:o,toggleCollapse:s,state:l,signal:u}=os(),d=P(()=>es(t,i,l),[t,i,u]),{selectedItems:f,isItemSelected:m,isGroupSelected:h,isSelected:g,select:_,deselect:v,selectOnly:b,selectAll:x,deselectAll:S,toggleSelect:C,toggleSelectTo:ee}=cs({compareItemsFn:a,data:t,flatData:d}),w=p((e,t)=>Array.isArray(e.items)?r(e,t,{selected:h(e),folded:Zo(e,l),toggleSelect:t=>C(e,typeof t==`boolean`?t:void 0),toggleFold:()=>o(e)}):n(e,t,{selected:m(e),expanded:Xo(e,l),toggleSelect:t=>C(e,typeof t==`boolean`?t:void 0),toggleCollapse:()=>s(e)}),[n,r,f,C,u]);c(()=>{Object.assign(e.style,us.host)},[]);let T={toggleFold:o,toggleCollapse:s,isItemSelected:m,isGroupSelected:h,isSelected:g,select:_,deselect:v,selectOnly:b,selectAll:x,deselectAll:S,toggleSelect:C,toggleSelectTo:ee};return y(T,Object.values(T)),{renderRow:w,flatData:d}},fs=({renderRow:e,flatData:t})=>Ko({items:t,renderRow:(t,n)=>e(t,n)})})))()}var ms;function hs(){return(hs=e((()=>{D(),ps(),ms=e=>fs(ds(e)),customElements.define(`cosmoz-grouped-list`,M(ms,{useShadowDOM:!1}))})))()}function gs(){return(gs=e((()=>{hs()})))()}var _s,vs,ys;function bs(){return(bs=e((()=>{Ge(),jt(),ii(),oi(),ki(),Pi(),Li(),D(),Ue(),_(),re(),Bi(),Xi(),Qi(),ia(),Ro(),$(),gs(),ho(),yo(),_s=e=>window.ShadyCSS?.ApplyShim?.transformCssText?.(e)||e,vs=e=>{let{header:t,list:n,footer:r}=Lo(e),i=n.loading&&n.processedItems.length>0,a=r.selectedItems===Q||r.selectedItems.length>0;return E`
		<style>
			${ue([],()=>_s(zi))}
		</style>

		<div class="mainContainer${a?` bottombar-active`:``}">
			${Zi(t)}
			<div
				class="tableContent${i?` has-spinner`:``}"
				id="tableContent"
			>
				${ra(t,n)}
			</div>
			${Yi(r)}
		</div>

		<div id="columns">
			<slot id="columnsSlot"></slot>
		</div>
	`},customElements.define(`cosmoz-omnitable`,M(vs,{observedAttributes:[`hash-param`,`sort-on`,`group-on`,`descending`,`group-on-descending`,`hide-select-all`,`settings-id`,`no-local`,`no-local-sort`,`no-local-filter`,`disabled-filtering`,`loading`,`mini-breakpoint`,`compact`,`inline`,`enable-select-all`]})),ys=`
	<slot name="actions" slot="actions"></slot>
`,E(Object.assign([ys],{raw:[ys]})),Ve(Object.assign([ys],{raw:[ys]}))})))()}export{bs as t};