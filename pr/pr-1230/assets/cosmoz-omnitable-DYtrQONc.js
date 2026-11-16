import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{$ as t,$t as n,At as r,B as i,C as a,Ct as o,D as s,E as c,F as l,Ft as u,Gt as d,H as f,J as p,K as m,Kt as h,L as g,Lt as _,Mt as v,Nt as y,Q as b,Qt as x,S,T as C,Tt as w,Ut as T,Vt as E,W as ee,Xt as D,Yt as te,Z as O,Zt as ne,_t as re,at as ie,b as k,bt as A,c as j,ct as ae,d as oe,dt as se,en as M,f as ce,ft as le,gt as ue,h as de,ht as fe,i as pe,j as me,k as he,l as ge,lt as _e,m as ve,mt as ye,n as be,nt as xe,ot as Se,p as Ce,pt as N,r as we,s as Te,st as Ee,tt as De,u as Oe,ut as ke,v as Ae,vt as je,x as P,xt as Me,y as Ne,yt as F,z as Pe,zt as I}from"./iframe-Dr0tqKIh.js";import{A as Fe,B as L,C as Ie,D as Le,E as Re,F as R,G as ze,H as Be,I as Ve,J as He,L as Ue,M as We,N as Ge,O as Ke,P as z,R as qe,S as Je,T as Ye,U as Xe,V as B,W as Ze,_ as Qe,d as $e,f as et,g as tt,h as nt,j as rt,k as it,l as at,m as ot,n as st,q as ct,r as lt,s as ut,t as dt,u as ft,v as pt,w as mt,x as ht,y as gt,z as _t}from"./dist-CLXCsQCR.js";var vt,yt;function V(){return(V=e((()=>{l(),le(),_e(),F(),vt=N`
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
`,yt=()=>n`
	<style>
		${vt}
	</style>
	${Pe({className:`icon`,width:`18`,height:`18`})}
`,customElements.define(`cosmoz-clear-button`,A(yt))})))()}var H,bt,xt,St,Ct,U;function W(){return(W=e((()=>{B(),H=({valuePath:e},t)=>L(t,e),bt=H,xt=H,St=({valuePath:e},t)=>n=>{let r=L(n,e);return r!=null&&r.toString().toLowerCase().trim().includes(t.toLowerCase().trim())},Ct=(e,t)=>t===``||t==null?null:t,U=e=>class extends e{static get properties(){return{isOmnitableColumn:{type:Boolean,value:!0},title:{type:String},valuePath:{type:String,notify:!0},values:{type:Array,notify:!0},filter:{type:Object},noLocalFilter:{type:Boolean},disabled:{type:Boolean,value:!1,notify:!0},editable:{type:Boolean,notify:!0},loading:{type:Boolean,value:!1,notify:!0},externalValues:{type:Boolean,value:!1,notify:!0},name:{type:String},sortOn:{type:String},groupOn:{type:String},noSort:{type:Boolean,value:!1},disabledFiltering:{type:Boolean,value:!1},width:{type:String,value:`75px`},minWidth:{type:String,value:`40px`},flex:{type:String,value:`1`},cellClass:{type:String,value:`default-cell`},headerCellClass:{type:String,value:`default-header-cell`},priority:{type:Number,value:0},hidden:{type:Boolean,notify:!0},align:{type:String,value:`left`},headerAlign:{type:String,value:null},renderHeader:{type:Function},renderCell:{type:Function},renderEditCell:{type:Function},renderGroup:{type:Function},mini:{type:Number,value:null},renderMini:{type:Function}}}static get observers(){return[`notifyFilterChange(filter)`]}notifyFilterChange(e){this.__ownChange||this.dispatchEvent(new CustomEvent(`legacy-filter-changed`,{detail:{name:this.name,state:this.legacyFilterToState(e)},bubbles:!0}))}legacyFilterToState(e){return{filter:e}}getFilterFn(){}getString(e,t){return H(e,t)}toXlsxValue(e,t){return bt(e,t)}cellTitleFn(e,t){return this.getString(e,t)}headerTitleFn(e){return e.title}serializeFilter(e,t){return Ct(e,t)}deserializeFilter(e,t){if(t==null)return null;if(typeof t==`string`)try{return window.decodeURIComponent(t)}catch{return null}return t}getComparableValue(e,t){return xt(e,t)}computeSource(e,t){return t}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n),this.dispatchEvent(new CustomEvent(`cosmoz-column-prop-changed`,{bubbles:!0}))}}})))()}var wt,Tt,Et,Dt,Ot,kt,At;function jt(){return(jt=e((()=>{S(),V(),R(),M(),W(),wt=e=>t=>e(n=>{if(n.inputValue===void 0&&t.target.value===``)return n;clearTimeout(n.t);let r=setTimeout(()=>e(e=>({...e,filter:e.inputValue})),1e3);return{...n,inputValue:t.target.value,t:r}}),Tt=e=>()=>e(e=>({...e,filter:e.inputValue})),Et=e=>t=>{t.keyCode===13&&(t.preventDefault(),e(e=>({...e,filter:e.inputValue})))},Dt=e=>t=>e(e=>({...e,headerFocused:t.detail.value})),Ot=e=>()=>e(e=>({...e,filter:null,inputValue:null})),kt=e=>e!=null&&e!==``,At=class extends U(z){static get properties(){return{minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},inputValue:{type:Object,notify:!0}}}getFilterFn(e,t){if(t!=null&&t!==``)return St(e,t)}renderCell(e,{item:t}){return n`<span class="default-column">${H(e,t)}</span>`}renderEditCell(e,{item:t},r){return n`<cosmoz-input
			compact
			type="text"
			@change=${e=>r(e.target.value)}
			.value=${H(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,inputValue:r,headerFocused:i},a){return n`<cosmoz-input
			variant="inline"
			label=${e.title}
			?disabled=${e.disabledFiltering}
			.value=${r??t}
			@value-changed=${wt(a)}
			focused=${i}
			@focused-changed=${Dt(a)}
			@keydown=${Et(a)}
			@blur=${Tt(a)}
		>
			${O(!e.disabledFiltering,()=>n`<cosmoz-clear-button
						suffix
						slot="suffix"
						?visible=${kt(t)}
						light
						@click=${Ot(a)}
					></cosmoz-clear-button>`)}
		</cosmoz-input>`}legacyFilterToState(e){return{filter:e,inputValue:e}}},customElements.define(`cosmoz-omnitable-column`,At)})))()}var Mt,Nt,Pt;function G(){return(G=e((()=>{S(),F(),M(),Mt=[`label`,`value`,`slot`,`always-float-label`,`disabled`,`variant`],Nt=h`
	${he}

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
`,Pt=e=>{let{label:t,value:r,slot:i}=e;e.toggleAttribute(`has-value`,!!r);let a=n`<div
		id="input"
		part="input"
		role="button"
		class="control"
		slot=${i}
	>
		${r||``}
	</div>`;return me(a,{label:t})},customElements.define(`cosmoz-omnitable-dropdown-input`,A(Pt,{observedAttributes:Mt,styleSheets:[Nt]}))})))()}var Ft;function It(){return(It=e((()=>{Xe(),M(),We(),G(),Ft=({title:e,tooltip:t=``,filterText:r=``,onOpenedChanged:i,content:a,align:o=`left`,externalValues:s=null})=>{let c={filtered:!!r,...s!=null&&{[`external-values-${s}`]:!0}};return n`
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
			@focus=${i}
			class=${rt({...c,dropdown:!0})}
			title=${t||``}
		>
			<cosmoz-omnitable-dropdown-input
				variant="inline"
				class="input"
				slot="button"
				.label=${e}
				.placeholder=${e}
				.value=${r??``}
				text-align=${o}
				?always-float-label=${r?.length>0}
			></cosmoz-omnitable-dropdown-input>
			<div class="dropdown-content">${a}</div>
		</cosmoz-dropdown>
	`}})))()}var Lt,Rt;function zt(){return(zt=e((()=>{Se(),qe(),Fe(),Le(),Lt=e=>e?typeof e.close==`function`?e:Lt(e.parentElement):null,Rt=e=>class extends e{static get properties(){return{disabled:{type:Boolean,value:!1},filter:{type:Object,notify:!0},values:{type:Array,value(){return[]}},headerFocused:{type:Boolean,notify:!0},min:{type:Number,value:null},max:{type:Number,value:null},limits:{type:Function},autoupdate:{type:String,value:!0},locale:{type:String,value:null},align:{type:String,value:`left`},_filterInput:{type:Object,value(){return{min:null,max:null}}},_range:{type:Object,computed:`_computeRange(values.*)`},_limit:{type:Object,computed:`_computeLimit(_range, _filterInput.*, min, max)`,value(){return{}}},_tooltip:{type:String,computed:`_computeTooltip(title, _filterText)`},_fromClasses:{type:String,computed:`_computeInputClasses(_filterInput.min)`},_toClasses:{type:String,computed:`_computeInputClasses(_filterInput.max)`}}}static get observers(){return[`_filterInputChanged(_filterInput.*, autoupdate)`,`_filterChanged(filter.*)`,`_updateLimits(limits, headerFocused)`]}disconnectedCallback(){this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),super.disconnectedCallback()}_computeInputClasses(e){return e!=null&&e!==``?`has-value`:``}toNumber(e,t,n){if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=this.toNumber(t);return i==null?r:n(r,i)}toValue(){return this.toNumber.apply(this,arguments)}getComparableValue(e,t){if(e==null)return;let n=e;return t!=null&&(n=this.get(t,e)),this.toValue(n)}renderValue(){}getInputString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return this._toInputString(n)}_computeRange(e){let t=e.base,n=Array.isArray(t)&&t.length&&t.map(e=>this.toValue(e)).filter(e=>e!=null);return!n||n.length<1?{min:null,max:null}:n.reduce((e,t)=>({min:this.toValue(t,e.min,Math.min),max:this.toValue(t,e.max,Math.max)}),{})}_computeLimit(e,t,n,r){if(!e)return;let i=t.base,a=this.toValue(n),o=this.toValue(r),s=a??this.toValue(e.min),c=o??this.toValue(e.max);return{fromMin:s,fromMax:this.toValue(c,this._fromInputString(i.max,`max`),Math.min),toMin:this.toValue(s,this._fromInputString(i.min,`min`),Math.max),toMax:c}}_computeFilterText(e){if(e.base==null)return;let t=e.base,n=this.toValue(t.min),r=this.toValue(t.max),i=[];return n!=null&&i.push(this.renderValue(n)),i.push(` - `),r!=null&&i.push(this.renderValue(r)),i.length>1?i.join(``):void 0}_computeTooltip(e,t){return t==null?e:`${e}: ${t}`}_fromInputString(e){return this.toValue(e)}_toInputString(e){return this.toValue(e)??null}_getDefaultFilter(){return{min:null,max:null}}_filterInputChanged(e,t){let n=e.path.split(`.`)[1];this.__inputChangePath=n||null,t&&(this._limitInputDebouncer=Ke.debounce(this._limitInputDebouncer,_t.after(600),()=>{this._limitInput(),this._updateFilter()}),it(this._limitInputDebouncer))}_clearFrom(){this.set(`_filterInput.min`,null),this._updateFilter()}_clearTo(){this.set(`_filterInput.max`,null),this._updateFilter()}_onBlur(){this._limitInput(),this._updateFilter()}_onKeyDown(e){let t=e.currentTarget,n=Array.from(t.parentElement.querySelectorAll(`cosmoz-input`)),r=n[n.findIndex(e=>e===t)+1],i=!r,a=n[0]===t;switch(e.keyCode){case 13:if(e.preventDefault(),!i)r.focus();else{let e=this._limitInput();this._updateFilter(),e||this._closeParent(t)}break;case 9:(i&&!e.shiftKey||a&&e.shiftKey)&&this._closeParent(t)}}_closeParent(e){let t=Lt(e);t&&t.close()}_onDropdownOpenedChanged({currentTarget:e,type:t,detail:n}){(t===`focus`||n?.value===!0)&&setTimeout(()=>{e.querySelector(`cosmoz-input:focus`)||e.querySelector(`cosmoz-input`)?.focus()},100)}_limitInput(){let e=this._filterInput,t=this.__inputChangePath,n=t?this._fromInputString(this.get(t,e),t):null;if(this.__inputChangePath=null,n==null)return!1;let r=this._limit,i=t===`min`?`from`:`to`,a=this.get(i+`Min`,r),o=this.get(i+`Max`,r),s=this.toValue(n,a,Math.max),c=this.toValue(s,o,Math.min);return this.getComparableValue(n)!==this.getComparableValue(c)&&(this.set([`_filterInput`,t],this._toInputString(c,t)),this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),!0)}_updateFilter(){let e=this._filterInput,t=this.filter,n=this._fromInputString(e.min,`min`),r=this._fromInputString(e.max,`max`);(this.getComparableValue(n)!==this.getComparableValue(t,`min`)||this.getComparableValue(r)!==this.getComparableValue(t,`max`))&&this.set(`filter`,{min:n,max:r})}_filterChanged(e){if(this._filterInput==null)return;let t=this._filterInput,n=e.base,r=this._fromInputString(t.min,`min`),i=this._fromInputString(t.max,`max`);(this.getComparableValue(r)!==this.getComparableValue(n,`min`)||this.getComparableValue(i)!==this.getComparableValue(n,`max`))&&(this.set(`_filterInput`,{min:this._toInputString(n.min),max:this._toInputString(n.max)}),this._limitInputDebouncer&&this._limitInputDebouncer.cancel())}hasFilter(){let e=this.filter;return e==null?!1:this.toValue(e.min)!=null||this.toValue(e.max)!=null}resetFilter(){this.filter=this._getDefaultFilter()}_updateLimits(e,t){e&&Promise.resolve(Ee(e,{active:t})).then(e=>{let{min:t,max:n}=e??{};Object.assign(this,{...t==null?{}:{min:t},...n==null?{}:{max:n}})})}}})))()}var Bt;function Vt(){return(Vt=e((()=>{R(),M(),Bt=e=>class extends e{static get template(){return Ve`<div id="output" style="position:relative;"></div>`}connectedCallback(){super.connectedCallback();let e=this;ne(e.render(),e.$.output)}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n);let r=this;requestAnimationFrame(()=>ne(r.render(),r.$.output))}}})))()}var Ht;function Ut(){return(Ut=e((()=>{S(),R(),k(),M(),It(),G(),zt(),Vt(),Ht=class extends Rt(Bt(z)){static get properties(){return{currency:{type:String},autodetect:{type:Boolean,value:!1},rates:{type:Object},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, _formatters)`},headerFocused:{type:Boolean,value:!1}}}static get observers(){return[`_valuesChanged(autodetect, currency, values)`]}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return n`
			${O(this.disabled,()=>n`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>n`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Ft({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:n`
							<h3>${this.title}</h3>
							<cosmoz-input
								class=${this._fromClasses}
								type="number"
								title=${P(`Minimum amount`)}
								label=${P(`Min amount`)}
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
								title=${P(`Maximum amount`)}
								label=${P(`Max amount`)}
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
		`}_valuesChanged(e,t,n){if(!Array.isArray(n)||n.length<1||!e&&t)return;let r=n.reduce((e,t)=>{if(t.currency){let n=t.currency;e[n]=(e[n]||0)+1}return e},{}),i=Object.keys(r)[0];Object.keys(r).reduce((e,t)=>{let n=Math.max(e,r[t]);return n===r[t]&&(i=t),n},0),this.set(`currency`,i)}toAmount(e,t,n){if(e==null||e===``)return;if(typeof e!=`object`||e.currency==null||e.currency===``)return null;let r=this.toNumber(e.amount);if(r==null||Number.isNaN(r))return null;let i={currency:e.currency,amount:r};if(n==null||t==null)return i;let a=this.toAmount(t);if(a==null)return i;let o=this.rates||{},s=i.amount*(o[i.currency]||1),c=a.amount*(o[a.currency]||1);return this.toNumber(s,c,n)===s?i:a}toValue(){return this.toAmount.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n==null)return;let r=this.toNumber(n.amount),i=this.rates;return i==null?r:r*(i[n.currency]||1)}getString(e,t=this.valuePath){let n=this.toValue(this.get(t,e));return n===void 0?``:n===null?`Invalid value`:this.renderValue(n)}getCurrency(e,t){let n=this.get(t,e);return n&&n.currency}getFormatter(e,t){let n=e+(t||``)||``,r=this._formatters=this._formatters||{};return r[n]||(r[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),r[n]}renderValue(e){let t=this.toAmount(e);return t==null?``:this.getFormatter(t.currency,this.locale).format(e.amount)}_amountValueChanged(e){let t=e.target.value,n=e.model.item,r=this.get(this.valuePath,n),i={amount:Number(t),currency:r.currency};this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toInputString(e){let t=this.toValue(e);return t==null?null:this.toNumber(t.amount)}_toInputStringAmount(e){let t=this.rates;if(t==null)return this._toInputString(e);let n=this.toValue(e);return n==null?null:(this.toNumber(n.amount)*(t[n.currency]||1)/(t[this.currency]||1)).toFixed(2)}_fromInputString(e,t){let n=this.toNumber(e);if(n!=null)return this.toValue({amount:n,currency:t&&this.get([`filter`,t,`currency`])||this.currency})}},customElements.define(`cosmoz-omnitable-amount-range-input`,Ht)})))()}var K,Wt,Gt,Kt,q,qt,Jt,Yt;function Xt(){return(Xt=e((()=>{B(),mt(),K=(e,t,n)=>{if(e==null||e===``)return;let r=typeof e==`number`?e:Number(e);if(Number.isNaN(r))return;if(n==null||t==null)return r;let i=K(t);return i==null?r:n(r,i)},Wt=e=>{let t=K(e);return t==null?null:t.toString()},Gt=({valuePath:e},t)=>{let n=K(e?L(t,e):t);return Wt(n)},Kt=e=>Wt(e)??``,q=({valuePath:e,maximumFractionDigits:t},n)=>{if(n==null)return;let r=e?L(n,e):n,i=K(r);if(i!=null)return t===null?i:K(i.toFixed(t))},qt=Re((e,t,n)=>{let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}),Jt=({valuePath:e,locale:t,minimumFractionDigits:n,maximumFractionDigits:r},i)=>{let a=e?L(i,e):i;if(a==null)return``;let o=K(a);if(o!=null)return qt(t,n,r).format(o)},Yt=(e,t)=>n=>{let r=q(e,n);if(r==null)return!1;let i=q({...e,valuePath:`min`},t),a=q({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})))()}var Zt,Qt,$t,en,tn,nn,rn,an,on,sn,cn;function ln(){return(ln=e((()=>{B(),Xt(),Zt=(e={},t,n,r)=>{if(t==null||t===``)return;if(typeof t!=`object`||t.currency==null||t.currency===``)return null;let i=K(t.amount);if(i==null||Number.isNaN(i))return null;let a={currency:t.currency,amount:i};if(r==null||n==null)return a;let o=Zt(e,n);if(o==null)return a;let s=a.amount*(e[a.currency]||1),c=o.amount*(e[o.currency]||1);return K(s,c,r)===s?a:o},Qt=({valuePath:e,rates:t},n)=>{if(n==null)return;let r=n;e!=null&&(r=L(n,e));let i=Zt(t,r);if(i==null)return;let a=K(i.amount);return t==null||a==null?a:a*(t?.[i.currency]||1)},$t=(e,t)=>n=>{let r=Qt(e,n);if(r===void 0)return!1;let i=Qt({...e,valuePath:`min`},t),a=Qt({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))},en={},tn=(e,t)=>{let n=e+(t||``)||``;return en[n]||(en[n]=new Intl.NumberFormat(t||void 0,{style:`currency`,currency:e})),en[n]},nn=(e,t,n)=>{let r=Zt(e,t);return r==null?``:tn(r.currency,n).format(r.amount)},rn=({valuePath:e,rates:t,locale:n},r)=>{let i=Zt(t,e?L(r,e):void 0);return i===void 0?``:i===null?`Invalid value`:nn(t,i,n)},an=e=>e?e.amount+e.currency:``,on=e=>{if(e==null||e===``)return;let t=e.match(/^(-?[\d]+)([\D]+?)$/iu);if(!(!Array.isArray(t)||t.length<0))return{amount:Number(t[1]),currency:t[2]}},sn=({valuePath:e},t)=>e?L(t,e)?.currency:null,cn=({valuePath:e},t)=>e?L(t,e)?.amount:void 0})))()}var un,dn,fn,pn,mn,hn,gn;function _n(){return(_n=e((()=>{mt(),F(),un=Symbol(`column`),dn=e=>{let t=!0,n=e.map(e=>e.name);return e.forEach(e=>{e.name??(t=!1,console.error(`The name attribute needs to be set on all columns! Missing on column`,e))}),e.forEach(e=>{n.indexOf(e.name)!==n.lastIndexOf(e.name)&&(t=!1,console.error(`The name attribute needs to be unique among all columns! Not unique on column`,e))}),t},fn=(e,t)=>{let n=e.valuePath??e.name;return{name:e.name,title:e.title,valuePath:n,groupOn:e.groupOn??n,sortOn:e.sortOn??n,noSort:e.noSort,disabledFiltering:t||e.disabledFiltering,minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,getString:e.getString,getComparableValue:e.getComparableValue,serializeFilter:e.serializeFilter,deserializeFilter:e.deserializeFilter,toXlsxValue:e.toXlsxValue,renderHeader:e.renderHeader,renderCell:e.renderCell,renderEditCell:e.renderEditCell,renderGroup:e.renderGroup,cellTitleFn:e.cellTitleFn,headerTitleFn:e.headerTitleFn,getFilterFn:e.getFilterFn,headerCellClass:e.headerCellClass,cellClass:e.cellClass,editable:e.editable,values:e.values,source:Ye(e.computeSource),noLocalFilter:e.noLocalFilter,mini:e.mini,renderMini:e.renderMini,align:e.align,headerAlign:e.headerAlign,loading:e.loading,externalValues:e.externalValues,computeSource:e.computeSource,trueLabel:e.trueLabel,falseLabel:e.falseLabel,valueProperty:e.valueProperty,textProperty:e.textProperty,emptyLabel:e.emptyLabel,emptyValue:e.emptyValue,min:e.min,max:e.max,locale:e.locale,autoupdate:e.autoupdate,maximumFractionDigits:e.maximumFractionDigits,minimumFractionDigits:e.minimumFractionDigits,currency:e.currency,rates:e.rates,autodetect:e.autodetect,ownerTree:e.ownerTree,keyProperty:e.keyProperty,...e.getConfig?.(e),[un]:e}},pn=e=>e.isOmnitableColumn&&!e.hidden,mn=e=>{let t=e.filter(pn);return dn(t)?t:[]},hn=(e,t,n)=>(Array.isArray(t)?e.filter(e=>t.includes(e.name)):e.filter(e=>!e.disabled)).map(e=>fn(e,n)),gn=(e,{enabledColumns:t,disabledFiltering:n})=>{let[r,i]=u([]);return _(()=>{let r,a=[],o=e.shadowRoot.querySelector(`#columnsSlot`),s=e=>()=>{let r=o.assignedNodes({flatten:!0});if(e)a=r;else{let e=r.filter(e=>!a.includes(e)),t=a.filter(e=>!r.includes(e)),n=[...e,...t].some(e=>e.isOmnitableColumn);if(a=r,!n)return}i(hn(mn(r),t,n))},c=e=>{cancelAnimationFrame(r),r=requestAnimationFrame(s(e?.type===`cosmoz-column-prop-changed`))};return c(),o.addEventListener(`slotchange`,c),e.addEventListener(`cosmoz-column-prop-changed`,c),()=>{o.removeEventListener(`slotchange`,c),e.removeEventListener(`cosmoz-column-prop-changed`,c),cancelAnimationFrame(r)}},[t,n]),r}})))()}var vn,yn,bn;function J(){return(J=e((()=>{B(),_n(),vn=(e,t)=>Array.isArray(e)?e.map(e=>L(e,t)).filter((e,t,n)=>e!=null&&n.indexOf(e)===t):void 0,yn=({externalValues:e,values:t,valuePath:n},r)=>{if(e)return e;if(typeof t==`function`)return t;if(n!==void 0)return vn(r,n)},bn=(e,t,n,r)=>{let{valuePath:i}=t,a=i===void 0?void 0:L(n,i);if(r===a)return;i!==void 0&&Be(n,i,r);let o={item:n,valuePath:i,value:r,oldValue:a,column:t[un]};e.dispatchEvent(new CustomEvent(`column-item-changed`,{bubbles:!0,composed:!0,detail:o}))}})))()}var xn;function Sn(){return(Sn=e((()=>{S(),V(),R(),M(),B(),W(),Ut(),ln(),J(),xn=class extends U(z){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},currency:{type:String,notify:!0},autodetect:{type:Boolean,value:!1,notify:!0},rates:{type:Object,notify:!0},width:{type:String,value:`70px`},cellClass:{type:String,value:`amount-cell`},headerCellClass:{type:String,value:`amount-header-cell`},align:{type:String,value:`right`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=Qt({...e,valuePath:`min`},t),r=Qt({...e,valuePath:`max`},t);if(n!=null||r!=null)return $t(e,t)}getString(e,t){return rn(e,t)}toXlsxValue(e,t){return rn(e,t)}getComparableValue(e,t){return Qt(e,t)}serializeFilter({rates:e},t){if(t==null)return;let n=Zt(e,t.min),r=Zt(e,t.max);if(n!=null||r!=null)return an(n)+`~`+an(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:on(n[1]),max:on(n[2])}:null}renderCell(e,{item:t}){return n`<span>${e.getString(e,t)}</span>`}renderEditCell(e,{item:t},r){return n`<cosmoz-input
			compact
			type="number"
			@change=${n=>r({amount:n.target.value,currency:L(t,e.valuePath)?.currency})}
			.value=${cn(e,t)}
		>
			<div slot="suffix">${sn(e,t)}</div>
		</cosmoz-input>`}renderHeader({title:e,min:t,max:r,limits:i,locale:a,rates:o,currency:s,autoupdate:c,autodetect:l,disabledFiltering:u,headerAlign:d,align:f},{filter:p},m,h){return n`<cosmoz-omnitable-amount-range-input
			.title=${e}
			?disabled=${u}
			.filter=${p}
			.values=${h}
			.rates=${o}
			.min=${t}
			.max=${r}
			.limits=${i}
			.locale=${a}
			.currency=${s}
			.autoupdate=${c}
			.autodetect=${l}
			.align=${d??f}
			@filter-changed=${({detail:{value:e}})=>m(t=>({...t,filter:e}))}
			@header-focused-changed=${({detail:{value:e}})=>m(t=>({...t,headerFocused:e}))}
		></cosmoz-omnitable-amount-range-input>`}computeSource(e,t){return yn(e,t)}},customElements.define(`cosmoz-omnitable-column-amount`,xn)})))()}var Cn,wn,Tn,En,Dn,On,kn,An,jn,Mn,Nn,Pn;function Fn(){return(Fn=e((()=>{pe(),Se(),Te(),B(),J(),Cn=(e,t)=>{if(!Array.isArray(e))return;let n=[];return e.reduce((e,t)=>Array.isArray(t)?(t.forEach(t=>{e.push(t)}),e):(e.push(t),e),[]).filter((e,r,i)=>{if(i.indexOf(e)!==r)return!1;if(t){let r=L(e,t);if(n.indexOf(r)!==-1)return!1;n.push(r)}return!0})},wn=(e,t,n)=>{if(e==null)return[];if(Array.isArray(e)){let r=Cn(e,t);if(!r?.length)return[];let i=n??`label`,a=e=>String(typeof e==`object`&&e?L(e,i??``)??``:e??``);return r.sort((e,t)=>a(e).localeCompare(a(t)))}if(typeof e==`object`){let r=t??`id`,i=n??`label`;return Object.entries(e).map(([e,t])=>({[r]:e,[i]:t})).sort((e,t)=>String(e[i]??``).localeCompare(String(t[i]??``)))}return[]},Tn=(e,t,n)=>we(t&&L(e,t)).map(j(n)),En=({valuePath:e,textProperty:t},n)=>Tn(n,e,t).filter(e=>e!=null).join(`, `),Dn=En,On=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>a=>{let o=j(e),s=we(L(a,t));return i.some(t=>s.length===0&&j(r||e)(t)===n||s.some(e=>o(e)===o(t)))},kn=e=>t=>e(e=>({...e,filter:t})),An=e=>t=>e(e=>({...e,headerFocused:t})),jn=e=>t=>e(e=>({...e,query:t})),Mn=({emptyValue:e,emptyLabel:t,emptyProperty:n,textProperty:r,valueProperty:i},a)=>{let o=wn(a,i,r);return!t||e===void 0||!r||!(n||i)||!o?o:[{[r]:t,[n||i]:e},...o]},Nn=(e,t)=>Mn(e,vn(t,e.valuePath)),Pn=e=>class extends e{static get properties(){return{textProperty:{type:String},valueProperty:{type:String},emptyLabel:{type:String},emptyValue:{type:Object},emptyProperty:{type:String}}}getConfig(e){return{emptyProperty:e.emptyProperty}}getString(e,t){return En(e,t)}toXlsxValue(e,t){return Dn(e,t)}getComparableValue({valuePath:e,valueProperty:t},n){let r=L(n,e);return t==null?r:we(r).map(j(t)).sort().join(` `)}getFilterFn(e,t){if(t&&Array.isArray(t)&&t.length!==0)return On(e,t)}serializeFilter(e,t){return Array.isArray(t)&&t.length===0?null:JSON.stringify(t)}deserializeFilter(e,t){if(t==null)return null;try{return JSON.parse(decodeURIComponent(t))}catch(e){let n=e;return console.error(`Failed to deserialize filter value:`,{error:n?.name,message:n?.message,filterLength:typeof t==`string`?t.length:null}),null}}computeSource(e,t){return e.externalValues||typeof e.values==`function`?async(...t)=>Mn(e,await Promise.resolve(Ee(e.values,...t))):Nn(e,t)}}})))()}var In,Ln,Rn;function zn(){return(zn=e((()=>{be(),Ie(),R(),M(),pe(),Te(),Fn(),W(),F(),B(),_n(),In=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?Oe(t):j(n),a=we(e&&L(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},Ln=({valueProperty:e,valuePath:t,emptyValue:n,emptyProperty:r},i)=>{let a=j(e),o=j(r||e),s=new Set(i.filter(e=>e.excluded).map(e=>a(e.item))),c=new Set(i.filter(e=>!e.excluded).map(e=>a(e.item))),l=i.some(e=>e.excluded&&o(e.item)===n),u=i.some(e=>!e.excluded&&o(e.item)===n);return e=>{let n=we(L(e,t)).map(a);return n.length===0?!l&&(u||c.size===0):!n.some(e=>s.has(e))&&(c.size===0||n.some(e=>c.has(e)))}},Rn=class extends Pn(U(z)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return n`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},r){return n`<cosmoz-input
			compact
			type="text"
			@change=${e=>r(e.target.value)}
			.value=${H(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:r},i,a){return n`<cosmoz-autocomplete-excluding
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
			.itemRenderer=${e[un]?.itemRenderer}
			.value=${t}
			.text=${r}
			.limit=${e.limit}
			@opened-changed=${e=>An(i)(e.detail.value)}
			@value-changed=${v(kn(i))}
			@text-changed=${v(jn(i))}
			>${O(e.loading,()=>n`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-excluding
		>`}getComparableValue(e,t){return In(e,t)}getFilterFn(e,t){if(t&&Array.isArray(t)&&t.length!==0)return Ln(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete-excluding`,Rn)})))()}var Bn,Vn;function Hn(){return(Hn=e((()=>{be(),Ie(),R(),M(),pe(),Te(),Fn(),W(),B(),_n(),Bn=({valuePath:e,textProperty:t,valueProperty:n},r)=>{let i=t?Oe(t):j(n),a=we(e&&L(r,e)).map(i);return a.length>1?a.filter(Boolean).join(`,`):a[0]},Vn=class extends Pn(U(z)){static get properties(){return{headerCellClass:{type:String,value:`autocomplete-header-cell`},minWidth:{type:String,value:`55px`},editMinWidth:{type:String,value:`55px`},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:t}){return n`<span class="default-column"
			>${e.getString(e,t)}</span
		>`}renderEditCell(e,{item:t},r){return n`<cosmoz-input
			compact
			type="text"
			@change=${e=>r(e.target.value)}
			.value=${H(e,t)}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:r},i,a){return n`<cosmoz-autocomplete-ui
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
			.itemRenderer=${e[un]?.itemRenderer}
			.value=${t}
			.text=${r}
			.limit=${e.limit}
			.onChange=${kn(i)}
			@opened-changed=${e=>An(i)(e.detail.value)}
			.onText=${jn(i)}
			>${O(e.loading,()=>n`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}getComparableValue(e,t){return Bn(e,t)}},customElements.define(`cosmoz-omnitable-column-autocomplete`,Vn)})))()}var Un,Wn,Gn,Kn,qn,Jn,Yn,Xn,Zn,Qn,$n,er,tr,nr;function rr(){return(rr=e((()=>{R(),W(),be(),mt(),B(),M(),Un=(e,t)=>t.find(({value:t})=>e===t),Wn=(e,t,n)=>{let r=Un(t,n);return r?r.text:e},Gn=(e,t,n,r)=>Wn(e,L(t,n),r),Kn=({valuePath:e},t,n)=>Un(L(t,e),n),qn=e=>t=>{e(e=>({...e,filter:t?.[0]?.value??null}))},Jn=e=>t=>{e(e=>({...e,headerFocused:t}))},Yn=e=>t=>{e(e=>({...e,query:t}))},Xn=e=>t=>e(t?.[0]?.value),Zn=({valuePath:e,trueLabel:t,falseLabel:n},r)=>L(r,e)?t:n,Qn=({valuePath:e},t)=>n=>L(n,e)===t,$n=Ye((e,t)=>[{text:e,value:!0},{text:t,value:!1}]),er=({valuePath:e,trueLabel:t,falseLabel:n},r)=>e?L(r,e)?t:n:``,tr=(e,t)=>{try{return JSON.parse(t)}catch{return null}},nr=class extends U(z){static get properties(){return{trueLabel:{type:String,value:`True`},falseLabel:{type:String,value:`False`},flex:{type:String,value:`0`},cellClass:{type:String,value:`boolean-cell`}}}getString(e,t){return Zn(e,t)}renderCell(e,{item:t}){return Zn(e,t)}renderEditCell(e,{item:t},r){let{trueLabel:i,falseLabel:a}=e;return n`<cosmoz-autocomplete
			compact
			mode="select"
			.title=${Gn(e.title,t,e.valuePath,$n(i,a))}
			.source=${$n(i,a)}
			.textProperty=${`text`}
			.value=${Kn(e,t,$n(i,a))}
			.onChange=${Xn(r)}
			.limit=${1}
			>${O(e.loading,()=>n`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete
		>`}renderHeader(e,{filter:t,query:r},i,a){return n`<cosmoz-autocomplete-ui
			?disabled=${e.disabledFiltering}
			variant="inline"
			.label=${e.title}
			.title=${Gn(e.title,t,e.valuePath,a)}
			.source=${a}
			.textProperty=${`text`}
			.value=${Un(t,a)}
			.text=${r}
			.onChange=${qn(i)}
			@opened-changed=${e=>Jn(i)(e.detail.value)}
			.onText=${Yn(i)}
			.limit=${1}
			>${O(e.loading,()=>n`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}computeSource({trueLabel:e,falseLabel:t}){return $n(e,t)}getFilterFn(e,t){if(t!=null)return Qn(e,t)}toXlsxValue(e,t){return er(e,t)}deserializeFilter(e,t){return tr(e,t)}},customElements.define(`cosmoz-omnitable-column-boolean`,nr)})))()}var ir;function ar(){return(ar=e((()=>{fe(),zt(),ir=e=>class extends Rt(e){static get properties(){return{max:{type:Date,value:null},min:{type:Date,value:null},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},formatter:{type:Object,computed:`_computeFormatter(locale)`}}}toDate(e,t,n){if(e==null||e===``)return;let r=e;if(r instanceof Date||(typeof e==`string`&&(r=this.getAbsoluteISOString(r)),r=new Date(r)),Number.isNaN(r.getTime()))return null;if(n==null||t==null)return r;let i=this.toDate(t);if(i==null)return r;let a=this.getComparableValue(r);return n(a,this.getComparableValue(i))===a?r:i}toValue(){return this.toDate.apply(this,arguments)}getComparableValue(e,t){let n=super.getComparableValue(e,t);if(n!=null)return this.toNumber(n.getTime())}getString(e,t=this.valuePath,n=this.formatter){let r=this.toValue(this.get(t,e));return r===void 0?``:r===null?`Invalid Date`:this.renderValue(r,n)}getAbsoluteISOString(e){return e.length===19?e+this._getTimezoneString(e):e}_getTimezoneString(e){let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`}renderValue(e,t=this.formatter){if(t==null)return;let n=this.toValue(e);if(n!=null)return t.format(n)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(0,10)}_dateValueChanged(e){let t=e.currentTarget.value,n=e.model.item,r=this.get(this.valuePath,n),i=this._fromInputString(t);this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,this.renderValue.bind(this))}_toLocalISOString(e){return ue(e)}}})))()}var or;function sr(){return(sr=e((()=>{S(),R(),k(),M(),ar(),It(),G(),Vt(),or=class extends ir(Bt(z)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return n`
			${O(this.disabled,()=>n`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>n`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Ft({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:n`
							<h3>${this.title}</h3>
							<cosmoz-input
								type="date"
								label=${P(`From date`)}
								min=${this._toInputString(this._limit.fromMin)}
								max=${this._toInputString(this._limit.fromMax)}
								.value=${this._filterInput?.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-input>
							<cosmoz-input
								type="date"
								label=${P(`Until date`)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
								.value=${this._filterInput?.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-input>
						`})}
				`)}
		`}_fromInputString(e,t){let n=this.toDate(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n}_filterInputChanged(e,t){let n=e.path.split(`.`)[1]&&e.value;n&&n.match(/^0+/u)?this._limitInputDebouncer.cancel():super._filterInputChanged(e,t)}},customElements.define(`cosmoz-omnitable-date-range-input`,or)})))()}var cr,lr,ur,Y,X,dr,fr,pr,mr,hr,gr,_r,vr,yr,br;function xr(){return(xr=e((()=>{fe(),B(),Xt(),cr=e=>{let t=-new Date(e).getTimezoneOffset()/60;return(t<0?`-`:`+`)+[`0`,Math.abs(t)].join(``).substr(-2)+`:00`},lr=e=>e.length===19?e+cr(e):e,ur=e=>{if(e==null||e===``)return;let t=e;return!(t instanceof Date)&&(typeof e==`string`&&(t=lr(t)),t=ye(t),!t)||Number.isNaN(t.getTime())?null:t},Y=({valuePath:e},t)=>{if(t==null)return;let n=t;e!=null&&(n=L(t,e));let r=ur(n);if(r!=null)return K(r.getTime())},X=(e,t,n)=>{let r=ur(e);if(r==null)return null;if(n==null||t==null)return r;let i=X(t);if(i==null)return r;let a=Y({},r),o=Y({},i);return a==null||o==null||n(a,o)===a?r:i},dr=(e,t)=>{if(t==null)return;let n=X(e);if(n!=null)return t.format(n)},fr={},pr=e=>{let t=e||``;return fr[t]||(fr[t]=new Intl.DateTimeFormat(e||void 0)),fr[t]},mr=({valuePath:e,locale:t},n)=>{let r=L(n,e||``);return r===void 0?``:(r=X(r),r===null?`Invalid Date`:dr(r,pr(t)))},hr=e=>{let t=X(e);if(t==null)return null;let n=ue(t);return n==null?null:n.slice(0,10)},gr=({valuePath:e},t)=>hr(L(t,e||``)),_r=(e,t)=>{let n=X(e);if(n!=null)return t===`min`&&n.setHours(0,0,0,0),t===`max`&&n.setHours(23,59,59),n},vr=e=>hr(e)??``,yr=({valuePath:e},t)=>{if(!e)return``;let n=X(L(t,e));if(!n)return``;let r=X(ue(n));return r?(r.setHours(0,0,0,0),r):``},br=(e,t)=>n=>{let r=Y(e,n);if(r==null)return!1;let i=Y({...e,valuePath:`min`},t),a=Y({...e,valuePath:`max`},t);return!(r<(i??-1/0)||r>(a??1/0))}})))()}var Sr;function Cr(){return(Cr=e((()=>{S(),R(),M(),W(),sr(),J(),xr(),V(),Sr=class extends U(z){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`date-header-cell`},width:{type:String,value:`100px`},minWidth:{type:String,value:`82px`},flex:{type:String,value:`0`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=Y({...e,valuePath:`min`},t),r=Y({...e,valuePath:`max`},t);if(n!=null||r!=null)return br(e,t)}getString(e,t){return mr(e,t)}toXlsxValue(e,t){return yr(e,t)}getComparableValue(e,t){return Y(e,t)}serializeFilter(e,t){if(t==null)return;let n=X(t.min),r=X(t.max);if(n!=null||r!=null)return vr(n)+`~`+vr(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:X(n[1]),max:X(n[2])}:null}renderCell(e,{item:t}){return n`<div class="omnitable-cell-date">
			${mr(e,t)}
		</div>`}renderEditCell(e,{item:t},r){return n`<cosmoz-input
			compact
			type="date"
			@change=${e=>r(_r(e.target.value))}
			.value=${gr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:r,limits:i,locale:a,disabledFiltering:o,headerAlign:s,align:c},{filter:l},u,d){return n`<cosmoz-omnitable-date-range-input
			.title=${e}
			?disabled=${o}
			.filter=${l}
			.values=${d}
			.min=${t}
			.max=${r}
			.limits=${i}
			.locale=${a}
			.align=${s??c}
			@filter-changed=${({detail:{value:e}})=>u(t=>({...t,filter:e}))}
			@header-focused-changed=${({detail:{value:e}})=>u(t=>({...t,headerFocused:e}))}
		></cosmoz-omnitable-date-range-input>`}computeSource(e,t){return yn(e,t)}},customElements.define(`cosmoz-omnitable-column-date`,Sr)})))()}var wr;function Tr(){return(Tr=e((()=>{R(),k(),M(),ar(),It(),G(),Vt(),wr=class extends ir(Bt(z)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return n`
			${O(this.disabled,()=>n`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>n`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Ft({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:n`
							<h3>${this.title}</h3>
							<cosmoz-datetime-input
								date-label=${P(`From date`)}
								time-label=${P(`From time`)}
								min=${this._toInputString(this._limit.fromMin)}
								max=${this._toInputString(this._limit.fromMax)}
								step=${this.filterStep}
								.value=${this._filterInput?.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-datetime-input>
							<cosmoz-datetime-input
								date-label=${P(`To date`)}
								time-label=${P(`To time`)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
								step=${this.filterStep}
								.value=${this._filterInput?.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-datetime-input>
						`})}
				`)}
		`}_toInputString(e){let t=this.toValue(e);if(t!=null)return this._toLocalISOString(t).slice(0,19)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})}},customElements.define(`cosmoz-omnitable-datetime-range-input`,wr)})))()}var Er,Dr,Or,kr,Ar,jr;function Mr(){return(Mr=e((()=>{B(),xr(),Er={},Dr=e=>{let t=e||``;return Er[t]||(Er[t]=new Intl.DateTimeFormat(e||void 0,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`})),Er[t]},Or=({valuePath:e,locale:t},n)=>{let r=X(L(n,e||``));return r===void 0?``:r===null?`Invalid Date`:dr(r,Dr(t))},kr=({valuePath:e},t)=>e?L(t,e):``,Ar=e=>{let t=X(e);return t==null?``:t.toISOString().slice(0,19).replace(/:/gu,`.`)},jr=e=>{if(e!=null&&e!==``&&typeof e==`string`)return X(e.replace(/\./gu,`:`)+`Z`)}})))()}var Nr;function Pr(){return(Pr=e((()=>{Je(),V(),R(),M(),W(),Tr(),J(),xr(),Mr(),Nr=class extends U(z){static get is(){return`cosmoz-omnitable-column-datetime`}static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`datetime-header-cell`},width:{type:String,value:`210px`},minWidth:{type:String,value:`128px`},flex:{type:String,value:`0`},filterStep:{type:Number,value:1}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=Y({...e,valuePath:`min`},t),r=Y({...e,valuePath:`max`},t);if(n!=null||r!=null)return br(e,t)}getString(e,t){return Or(e,t)}toXlsxValue(e,t){return kr(e,t)}getComparableValue(e,t){return Y(e,t)}serializeFilter(e,t){if(t==null)return;let n=X(t.min),r=X(t.max);if(n!=null||r!=null)return Ar(n)+`~`+Ar(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:jr(n[1]),max:jr(n[2])}:null}renderCell(e,{item:t}){return Or(e,t)}renderEditCell(e,{item:t},r){return n`<cosmoz-input
			compact
			type="text"
			@change=${e=>r(_r(e.target.value))}
			.value=${Or(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:r,limits:i,locale:a,filterStep:o,disabledFiltering:s,headerAlign:c,align:l},{filter:u},d,f){return n`<cosmoz-omnitable-datetime-range-input
			.title=${e}
			?disabled=${s}
			.filter=${u}
			.values=${f}
			.min=${t}
			.max=${r}
			.limits=${i}
			.locale=${a}
			.filterStep=${o}
			.align=${c??l}
			@filter-changed=${({detail:{value:e}})=>d(t=>({...t,filter:e}))}
			@header-focused-changed=${({detail:{value:e}})=>d(t=>({...t,headerFocused:e}))}
		></cosmoz-omnitable-datetime-range-input>`}computeSource(e,t){return yn(e,t)}},customElements.define(Nr.is,Nr)})))()}var Fr;function Ir(){return(Ir=e((()=>{be(),Ie(),R(),M(),Fn(),W(),Fr=class extends Pn(U(z)){renderCell({valuePath:e,textProperty:t},{item:r}){let i=Tn(r,e,t).map(e=>n`<li>${e}</li>`);return n`
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
				${i}
			</ul>
		`}renderEditCell(){return`not implemented`}renderHeader(e,{filter:t,query:r},i,a){return n`<cosmoz-autocomplete-ui
			variant="inline"
			class="external-values-${e.externalValues}"
			?disabled=${e.disabledFiltering}
			.label=${e.title}
			.source=${a}
			.textProperty=${e.textProperty}
			.value=${t}
			.text=${r}
			.onChange=${kn(i)}
			@opened-changed=${e=>An(i)(e.detail.value)}
			.onText=${jn(i)}
			>${O(e.loading,()=>n`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		> `}},customElements.define(`cosmoz-omnitable-column-list-horizontal`,Fr)})))()}var Lr,Rr;function zr(){return(zr=e((()=>{le(),ke(),_e(),F(),k(),Lr=N`
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
`,Rr=({items:e})=>{let[t,r]=u(!1),i=Array.isArray(e)?e:[],a=E(()=>Math.max(0,i.length-1),[i]);if(i.length===0)return null;let o=i.length>2,s=i[0],c=o&&!t?[]:i.slice(1),l=e=>{e.stopPropagation(),e.preventDefault(),r(e=>!e)};return n`
		<ul>
			<li>
				<span>${s}</span>
			</li>
			<li class="see-more" ?hidden=${!o||t}>
				<a href="#" @click=${l}
					>${P(`and {0} more`,{0:a})}</a
				>
			</li>
			${c.map(e=>n`
					<li>
						<span class="item">${e}</span>
					</li>
				`)}
			<li class="see-less" ?hidden=${!o||!t}>
				<a href="#" @click=${l}>${P(`See less`)}</a>
			</li>
		</ul>
	`},customElements.define(`cosmoz-omnitable-column-list-data`,A(Rr,{styleSheets:[se(Lr)]}))})))()}var Br;function Vr(){return(Vr=e((()=>{zr(),R(),M(),be(),Fn(),W(),_n(),Br=class extends Pn(U(z)){static get properties(){return{keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,textual:e.textual}}renderCell({valuePath:e,textProperty:t},{item:r}){return n`<cosmoz-omnitable-column-list-data
			.items=${Tn(r,e,t)}
		></cosmoz-omnitable-column-list-data>`}renderEditCell(e,{item:t},r){return n`<cosmoz-input
			compact
			type="text"
			.value=${En(e,t)}
			@change=${e=>r(e.target.value.split(/,\s*/gu))}
		></cosmoz-input>`}renderHeader(e,{filter:t,query:r},i,a){return n`<cosmoz-autocomplete-ui
			variant="inline"
			class="external-values-${e.externalValues}"
			?disabled=${e.disabledFiltering}
			?keep-opened=${e.keepOpened}
			?keep-query=${e.keepQuery}
			.textual=${e.textual}
			.column=${e}
			.label=${e.title}
			.source=${a}
			.textProperty=${e.textProperty}
			.valueProperty=${e.valueProperty}
			.itemRenderer=${e[un]?.itemRenderer}
			.value=${t}
			.text=${r}
			.onChange=${kn(i)}
			@opened-changed=${e=>An(i)(e.detail.value)}
			.onText=${jn(i)}
			>${O(e.loading,()=>n`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}},customElements.define(`cosmoz-omnitable-column-list`,Br)})))()}var Hr;function Ur(){return(Ur=e((()=>{S(),R(),k(),M(),It(),G(),zt(),Vt(),Hr=class extends Rt(Bt(z)){static get properties(){return{maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},formatter:{type:Object,computed:`_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)`},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:`_computeFilterText(filter.*, formatter)`},headerFocused:{type:Boolean,value:!1}}}render(){let e=e=>{this.headerFocused=e.type===`focus`,this._onDropdownOpenedChanged(e)};return n`
			${O(this.disabled,()=>n`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>n`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Ft({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:n`
							<h3>${this.title}</h3>
							<cosmoz-input
								class=${this._fromClasses}
								type="number"
								label=${P(`From`)}
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
								label=${P(`To`)}
								.value=${this._filterInput?.max}
								@value-changed=${e=>{this.set(`_filterInput.max`,e.detail.value)}}
								@blur=${e=>this._onBlur(e)}
								@keydown=${e=>this._onKeyDown(e)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
							></cosmoz-input>
						`})}
				`)}
		`}_computeFormatter(e,t,n){let r={localeMatcher:`best fit`};return t!==null&&(r.minimumFractionDigits=t),n!==null&&(r.maximumFractionDigits=n),new Intl.NumberFormat(e||void 0,r)}getComparableValue(e,t){if(e==null)return;let n=e;if(t!=null&&(n=this.get(t,e)),n=this.toValue(n),n==null)return;let r=this.maximumFractionDigits;return r===null?n:this.toValue(n.toFixed(r))}renderValue(e,t=this.formatter){let n=this.toNumber(e);if(n!=null)return t.format(n)}},customElements.define(`cosmoz-omnitable-number-range-input`,Hr)})))()}var Wr;function Gr(){return(Gr=e((()=>{S(),V(),R(),M(),W(),B(),Ur(),J(),Xt(),Wr=class extends U(z){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},cellClass:{type:String,value:`number-cell`},width:{type:String,value:`30px`},minWidth:{type:String,value:`30px`},headerCellClass:{type:String,value:`number-header-cell`},maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},align:{type:String,value:`right`}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,t){let n=q({...e,valuePath:`min`},t),r=q({...e,valuePath:`max`},t);if(n!=null||r!=null)return Yt(e,t)}getString(e,t){return Jt(e,t)}toXlsxValue({valuePath:e},t){return L(t,e)}getComparableValue(e,t){return q(e,t)}serializeFilter(e,t){if(t==null)return;let n=K(t.min),r=K(t.max);if(n!=null||r!=null)return Kt(n)+`~`+Kt(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:K(n[1]),max:K(n[2])}:null}renderCell(e,{item:t}){return n`<div class="omnitable-cell-number">
			${Jt(e,t)}
		</div>`}renderEditCell(e,{item:t},r){return n`<cosmoz-input
			compact
			type="number"
			@change=${e=>r(e.target.value)}
			.value=${Gt(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:r,limits:i,locale:a,maximumFractionDigits:o,minimumFractionDigits:s,autoupdate:c,disabledFiltering:l,headerAlign:u,align:d},{filter:f},p,m){return n`<cosmoz-omnitable-number-range-input
			.title=${e}
			?disabled=${l}
			.filter=${f}
			.values=${m}
			.min=${t}
			.max=${r}
			.limits=${i}
			.locale=${a}
			.maximumFractionDigits=${o}
			.minimumFractionDigits=${s}
			.autoupdate=${c}
			.align=${u??d}
			@filter-changed=${({detail:{value:e}})=>p(t=>({...t,filter:e}))}
			@header-focused-changed=${({detail:{value:e}})=>p(t=>({...t,headerFocused:e}))}
		></cosmoz-omnitable-number-range-input>`}computeSource(e,t){return yn(e,t)}},customElements.define(`cosmoz-omnitable-column-number`,Wr)})))()}var Kr;function qr(){return(qr=e((()=>{S(),R(),k(),M(),ar(),It(),G(),Vt(),Kr=class extends ir(Bt(z)){render(){let e=e=>{this.headerFocused=e.type===`focus`};return n`
			${O(this.disabled,()=>n`
					<cosmoz-omnitable-dropdown-input
						variant="inline"
						disabled
						text-align=${this.align}
						.label=${this.title}
						.value=${this._filterText??``}
					></cosmoz-omnitable-dropdown-input>
				`,()=>n`
					<cosmoz-clear-button
						@click=${()=>this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${Ft({title:this.title,tooltip:this._tooltip,filterText:this._filterText,align:this.align,externalValues:this.externalValues,onOpenedChanged:e,content:n`
							<h3>${this.title}</h3>
							<cosmoz-input
								type="time"
								label=${P(`From time`)}
								step=${this.filterStep}
								.value=${this._filterInput.min}
								@value-changed=${e=>this.set(`_filterInput.min`,e.detail.value)}
							></cosmoz-input>
							<cosmoz-input
								type="time"
								label=${P(`Until time`)}
								step=${this.filterStep}
								.value=${this._filterInput.max}
								@value-changed=${e=>this.set(`_filterInput.max`,e.detail.value)}
							></cosmoz-input>
						`})}
				`)}
		`}get _fixedDate(){return`1970-01-01`}toDate(e,t,n){let r=typeof e==`string`&&e.length>3&&e.length<=9?this.getAbsoluteISOString(this._fixedDate+`T`+e):e;return super.toDate(r,t,n)}_toInputString(e){let t=this.toValue(e);return t==null?null:this._toLocalISOString(t).slice(11,19)}getComparableValue(e,t){if(e==null)return;let n=this._toInputString(t==null?e:this.get(t,e));if(n!=null&&(n=this.toValue(this.getAbsoluteISOString(this._fixedDate+`T`+n)),n!=null))return this.toNumber(n.getTime())}_timeValueChanged(e){let t=e.target.value,n=e.model.item,r=this.toDate(n.date),i=this.toDate(r==null?t:r.toISOString().slice(0,10)+`T`+t);i??(this.set(this.valuePath,i,n),this._fireItemChangeEvent(n,this.valuePath,r,(e=>e).bind(this)))}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})}},customElements.define(`cosmoz-omnitable-time-range-input`,Kr)})))()}var Z,Jr,Yr,Xr,Zr,Qr,$r,ei,ti,ni;function ri(){return(ri=e((()=>{fe(),B(),xr(),Xt(),Z=(e,t,n)=>{let r=typeof e==`string`&&e.length>3&&e.length<=9?lr(`1970-01-01T`+e):e;return X(r,t,n)},Jr={},Yr=e=>{let t=e||``;return Jr[t]||(Jr[t]=new Intl.DateTimeFormat(e||void 0,{hour:`numeric`,minute:`numeric`,second:`numeric`})),Jr[t]},Xr=({valuePath:e,locale:t},n)=>{let r=Z(L(n,e||``));return r===void 0?``:r===null?`Invalid Date`:dr(r,Yr(t))},Zr=(e,t)=>e.valuePath?Xr(e,t):``,Qr=e=>{let t=Z(e);if(t==null)return null;let n=ue(t);return n&&n.slice(11,19)},$r=({valuePath:e},t)=>{if(t==null)return;let n=Qr(e==null?t:L(t,e));if(n==null)return;let r=Z(lr(`1970-01-01T`+n));return r==null?r:K(r.getTime())},ei=(e,t)=>n=>{let r=$r(e,n);if(r==null)return!1;let i=$r({...e,valuePath:`min`},t),a=$r({...e,valuePath:`max`},t);return i==null||a==null?!1:!(r<i||r>a)},ti=e=>{let t=Z(e);return t==null?``:t.toISOString().slice(11,19).replace(/:/gu,`.`)},ni=e=>{if(e!=null&&e!==``)return Z(typeof e==`string`?e.replace(/\./gu,`:`)+`Z`:e)}})))()}var ii;function ai(){return(ai=e((()=>{S(),V(),R(),M(),W(),qr(),J(),ri(),ii=class extends U(z){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:`time-header-cell`},minWidth:{type:String,value:`63px`},width:{type:String,value:`210px`},flex:{type:String,value:`0`},filterStep:{type:String,value:`1`}}}getFilterFn(e,t){let n=$r({...e,valuePath:`min`},t),r=$r({...e,valuePath:`max`},t);if(n!=null||r!=null)return ei(e,t)}getString(e,t){return Xr(e,t)}toXlsxValue(e,t){return Zr(e,t)}getComparableValue(e,t){return $r(e,t)}serializeFilter(e,t){if(t==null)return;let n=Z(t.min),r=Z(t.max);if(n!=null||r!=null)return ti(n)+`~`+ti(r)}deserializeFilter(e,t){if(typeof t!=`string`||t===``)return null;let n=t.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(n)?{min:ni(n[1]),max:ni(n[2])}:null}renderCell(e,{item:t}){return Xr(e,t)}renderEditCell(e,{item:t},r){return n`<cosmoz-input
			compact
			type="text"
			@change=${e=>r(e.target.value)}
			.value=${Xr(e,t)}
		></cosmoz-input>`}renderHeader({title:e,min:t,max:r,locale:i,filterStep:a,disabledFiltering:o,headerAlign:s,align:c},{filter:l},u,d){return n`<cosmoz-omnitable-time-range-input
			.title=${e}
			?disabled=${o}
			.filter=${l}
			.values=${d}
			.min=${t}
			.max=${r}
			.locale=${i}
			.filterStep=${a}
			.align=${s??c}
			@filter-changed=${({detail:{value:e}})=>u(t=>({...t,filter:e}))}
			@header-focused-changed=${({detail:{value:e}})=>u(t=>({...t,headerFocused:e}))}
		></cosmoz-omnitable-time-range-input>`}computeSource(e,t){return yn(e,t)}},customElements.define(`cosmoz-omnitable-column-time`,ii)})))()}function oi(){return(oi=e((()=>{Sn(),zn(),Hn(),rr(),Cr(),Pr(),Ir(),Vr(),Gr(),ai()})))()}var si;function ci(){return(ci=e((()=>{F(),M(),si=({column:e,item:t,selected:n,folded:r,group:i})=>{if(!e)return D;let a=e.renderGroup??e.renderCell;return a?a(e,{item:t,selected:n,folded:r,group:i}):D},customElements.define(`cosmoz-omnitable-group-row`,A(si,{useShadowDOM:!1}))})))()}var li;function ui(){return(ui=e((()=>{F(),M(),li=e=>{let{column:t}=e;return d(()=>{let n=0,r=0,i=i=>{e.dispatchEvent(new CustomEvent(`column-resize`,{bubbles:!0,composed:!0,detail:{newWidth:Math.ceil(r+i.pageX-n),column:t}}))},a=()=>{document.removeEventListener(`pointermove`,i),document.removeEventListener(`pointerup`,a)},o=t=>{n=t.pageX,r=e.previousElementSibling.getBoundingClientRect().width,document.addEventListener(`pointermove`,i),document.addEventListener(`pointerup`,a)};return e.addEventListener(`pointerdown`,o),()=>e.removeEventListener(`pointerdown`,o)},[t]),D},customElements.define(`cosmoz-omnitable-resize-nub`,A(li))})))()}var di,fi,pi,mi;function hi(){return(hi=e((()=>{He(),F(),b(),l(),di=({column:e,on:r,descending:i,setOn:a,setDescending:o})=>{let{name:s,title:c}=e??{};return n`<cosmoz-button
		variant="tertiary"
		class="sg"
		title=${t(c)}
		data-on=${t(s===r&&(i?`desc`:`asc`)||void 0)}
		@click=${e=>{let t=e.currentTarget?.dataset.on;t||(a(s),o(!1)),t===`asc`?o(!0):t===`desc`&&(a(),o(!1))}}
	>
		<span>${c}</span> ${s===r?p({width:`12`,height:`12`}):m({width:`12`,height:`12`})}
	</cosmoz-button>`},fi=({columns:e,...t})=>e?.map(e=>di({column:e,...t})),pi=()=>n`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,groupOn:t,setGroupOn:n,groupOnDescending:r,setGroupOnDescending:i}={})=>fi({columns:e?.filter?.(e=>e.groupOn),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`,mi=()=>n`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:e,sortOn:t,setSortOn:n,descending:r,setDescending:i}={})=>fi({columns:e?.filter?.(e=>e.sortOn&&!e.noSort),on:t,setOn:n,descending:r,setDescending:i})}
	>
	</sort-and-group-consumer>
`})))()}function gi(e,t,{suffix:n=``,read:r,write:i,ready:a=!0,multi:o}={}){let s=xe({param:t,suffix:n,link:o?xi:bi,write:i??ie}),c=E(()=>{if(t==null)return!1;if(o){let e=Qe(t+n);return Object.keys(e).length>0}return pt(t+n)!==void 0},[]),[l,f]=u(()=>{if(t==null)return e;if(o){let i=Qe(t+n,r);return Object.keys(i).length>0?i:e}return pt(t+n,r)??e}),p=I(e=>f(t=>{let n=_i(e)?e(t):e;return s.param!=null&&ht(s.link(s.param+s.suffix,n,s.write),null,{notify:!1}),n}),[]);return d(()=>{s.param!=null&&a&&!c&&e!=null&&p(e)},[a]),[l,p]}var _i,vi,yi,bi,xi;function Si(){return(Si=e((()=>{gt(),Se(),De(),tt(),F(),_i=e=>typeof e==`function`,vi=e=>(t,n,r=ie)=>{let i=nt(),a=new URLSearchParams(i.hash.replace(`#`,``));return e(t,n,r,a),`#!`+Object.assign(i,{hash:a}).href.replace(location.origin,``)},yi=e=>e==null||e===``,bi=vi((e,t,n,r)=>yi(n(t))?r.delete(e):r.set(e,n(t))),xi=vi((e,t,n,r)=>{let i=Object.entries(t),a=i.map(n).filter(([,e])=>e!==void 0);if(a.length===0&&i.length>0)return;let o=e;Array.from(r.keys()).filter(e=>e.startsWith(o)).forEach(e=>r.delete(e)),a.forEach(([t,n])=>yi(n)?r.delete(e+t):r.set(e+t,n))})})))()}var Ci,wi,Ti,Ei,Di;function Oi(){return(Oi=e((()=>{F(),Si(),Ci=e=>[!0,`true`,1,`yes`,`on`].includes(e),wi=e=>e===``||(e==null?void 0:Ci(e)),Ti=(e,t,n)=>I(r=>{e(r),n(e=>({...e,[t]:r}))},[e,t,n]),Ei=(e,t,{settings:n,setSettings:r,resetRef:i,ready:a=!0})=>{let[o,s]=gi(n.sortOn,t,{suffix:`-sortOn`,ready:a}),[c,l]=gi(wi(n.descending),t,{suffix:`-descending`,read:wi,ready:a}),[u,f]=gi(n.groupOn,t,{suffix:`-groupOn`,ready:a}),[p,m]=gi(wi(n.groupOnDescending),t,{suffix:`-groupOnDescending`,read:wi,ready:a}),h=E(()=>e.find(e=>e.name===o),[e,o]),g=E(()=>e.find(e=>e.name===u),[e,u]),_={groupOn:u,setGroupOn:Ti(f,`groupOn`,r),groupOnDescending:p,setGroupOnDescending:Ti(m,`groupOnDescending`,r),sortOn:o,setSortOn:Ti(s,`sortOn`,r),descending:c,setDescending:Ti(l,`descending`,r),columns:e},v=E(()=>_,Object.values(_)),y=I(e=>{s(typeof e.sortOn==`string`?e.sortOn:void 0),f(typeof e.groupOn==`string`?e.groupOn:void 0),l(typeof e.descending==`boolean`?e.descending:void 0),m(typeof e.groupOnDescending==`boolean`?e.groupOnDescending:void 0)},[]);return d(()=>void(i.current=y),[]),{...v,sortAndGroup:v,groupOnColumn:g,sortOnColumn:h}},Di=Me(void 0),customElements.define(`sort-and-group-provider`,Di.Provider),customElements.define(`sort-and-group-consumer`,A(({render:e})=>e(T(Di)),{useShadowDOM:!1}))})))()}var ki,Ai;function ji(){return(ji=e((()=>{F(),ve(),ui(),hi(),Oi(),ki=({data:e,columns:t,groupOnColumn:r,filters:i,setFilterState:a,sortAndGroup:{sortOn:o,setSortOn:s,descending:c,setDescending:l}={}})=>Ce(t,e=>e.name,t=>[n`<div
				class="cell ${t.headerCellClass} header-cell"
				align="${t.headerAlign??t.align??`left`}"
				part="cell header-cell cell-${t.name} header-cell-${t.name}"
				?hidden="${t===r}"
				title="${t.headerTitleFn(t)}"
				name="${t.name}"
			>
				${t.renderHeader(t,i[t.name]??{},e=>a(t.name,e),t.source(t,e))}
				${O(!t.noSort,()=>di({on:o,setOn:s,descending:c,setDescending:l,column:t}))}
			</div>`,n`<cosmoz-omnitable-resize-nub
				.column="${t}"
				name="${t.name}"
			></cosmoz-omnitable-resize-nub>`]),Ai=({columns:e,settingsConfig:t,hideSelectAll:r,...i})=>{let a=T(Di);return n`
		${O(e,e=>ki({columns:e,sortAndGroup:a,...i}))}
		${O(!r,()=>n` <cosmoz-omnitable-settings
					.config=${t}
					part="settings"
				></cosmoz-omnitable-settings>`)}
	`},customElements.define(`cosmoz-omnitable-header-row`,A(Ai,{useShadowDOM:!1}))})))()}var Mi,Ni;function Pi(){return(Pi=e((()=>{le(),ke(),_e(),F(),Mi=N`
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
`,Ni=({column:e})=>n`
	<div class="label" title="${e.title}" part="item-expand-label">
		${e.title}
	</div>
	<div class="value" part="item-expand-value">
		<slot></slot>
	</div>
`,customElements.define(`cosmoz-omnitable-item-expand-line`,A(Ni,{styleSheets:[se(Mi)]}))})))()}var Fi;function Ii(){return(Ii=e((()=>{F(),M(),Pi(),Fi=({columns:e,item:t,selected:r,expanded:i,groupOnColumn:a})=>ot(e,e=>n`<cosmoz-omnitable-item-expand-line
				.column=${e}
				?hidden=${e===a}
				exportparts="item-expand-label, item-expand-value"
				>${e.renderCell(e,{item:t,selected:r,expanded:i})}</cosmoz-omnitable-item-expand-line
			>`),customElements.define(`cosmoz-omnitable-item-expand`,A(Fi,{useShadowDOM:!1}))})))()}var Li,Ri;function zi(){return(zi=e((()=>{F(),ve(),Li=(e,t,n)=>e.editable?e.renderEditCell(e,t,n(e,t.item)):e.renderCell(e,t),Ri=({columns:e,groupOnColumn:t,item:r,index:i,selected:a,expanded:o,onItemChange:s})=>Ce(e,e=>e.name,e=>n`<div
				class="cell itemRow-cell ${e.cellClass??``}"
				align="${e.align??`left`}"
				part="cell itemRow-cell cell-${e.name} itemRow-cell-${e.name}"
				?hidden="${e===t}"
				?editable="${e.editable}"
				title="${e.cellTitleFn(e,r)}"
				name="${e.name}"
			>
				${Li(e,{item:r,index:i,selected:a,expanded:o},s)}
			</div>`),customElements.define(`cosmoz-omnitable-item-row`,A(Ri,{useShadowDOM:!1}))})))()}var Bi,Vi;function Hi(){return(Hi=e((()=>{le(),_e(),Bi=N`
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
`,Vi=N`
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

	${Bi}

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
`})))()}var Ui,Wi;function Gi(){return(Gi=e((()=>{$e(),Ui=e=>{let t=e.replace(/"/gu,`""`);return t.search(/("|,|\n)/gu)>=0?`"`+t+`"`:e},Wi=(e,t,n)=>{let r=e.map(e=>Ui(e.title)).join(`;`)+`
`,i=t.map(t=>e.map(e=>{let n=e.getString(e,t);return n==null?``:Ui(String(n))}).join(`;`)+`
`);i.unshift(r),et(new File(i,n,{type:`text/csv;charset=utf-8`}))}})))()}var Ki,qi;function Ji(){return(Ji=e((()=>{ft(),$e(),Ki=(e,t)=>{let n=e.map(e=>e.title),r=t.map(t=>e.map(e=>e.toXlsxValue(e,t)??``));return r.unshift(n),r},qi=(e,t,n,r)=>{let i=Ki(e,t),a=new at(n).addSheetFromData(i,r).generate();et(new File([a],n,{type:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`}))}})))()}var Yi,Q,Xi;function $(){return($=e((()=>{Yi=Symbol(`index`),Q=Symbol(`All`),Xi=(e,t)=>{if(typeof e.findLastIndex==`function`)return e.findLastIndex(t);for(let n=e.length-1;n>=0;n--)if(t(e[n],n,e))return n;return-1}})))()}var Zi;function Qi(){return(Qi=e((()=>{Xe(),l(),k(),M(),Gi(),Ji(),$(),Zi=({columns:e,selectedItems:t,setSelectedItems:r,csvFilename:i,xlsxFilename:a,xlsxSheetname:o,topPlacement:s,enableSelectAll:c,allSelected:l,allItemsCount:u})=>{let d=t===Q,p=d||t.length>0,m=t!==Q&&c&&l,h=t=>n`<cosmoz-dropdown-menu
			part="extra"
			slot="extra"
			.placement=${s}
		>
			${f({slot:`button`})}
			<cosmoz-button
				variant="tertiary"
				@click=${()=>Wi(e,t,i)}
			>
				${P(`Save selected items as CSV`)}
			</cosmoz-button>
			<cosmoz-button
				variant="tertiary"
				@click=${()=>qi(e,t,a,o)}
			>
				${P(`Save selected items as XLSX`)}
			</cosmoz-button>
			<slot name="download-menu"></slot
		></cosmoz-dropdown-menu>`,g=O(d,()=>u===void 0?P(`All items selected`):P(`All {count} items selected`,{count:u}),()=>P(`{count} selected item`,{count:t===Q?0:t.length}));return n`<cosmoz-bottom-bar
		id="bottomBar"
		?active=${p}
		part="bottomBar"
		exportparts="bar: bottomBar-bar, info: bottomBar-info, buttons: bottomBar-buttons"
	>
		<slot name="info" slot="info">
			${g}
			${O(m,()=>n`&nbsp;<span
							part="select-all-items"
							class="selectAllItems"
							role="button"
							tabindex="0"
							style="cursor: pointer; color: var(--cz-color-text-brand);"
							@click=${()=>r(Q)}
						>
							${P(`Select all items`)}
						</span>`)}
		</slot>
		<slot name="actions" id="actions"></slot>
		<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
		<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
		${O(t!==Q,()=>h(t))}
	</cosmoz-bottom-bar>`}})))()}var $i;function ea(){return(ea=e((()=>{M(),$i=({allSelected:e,onAllCheckboxChange:t,sortAndGroup:r,dataIsValid:i,data:a,columns:o,filters:s,groupOnColumn:c,setFilterState:l,settingsConfig:u,hideSelectAll:d})=>n`<sort-and-group-provider .value=${r}>
		<div class="header" id="header" part="header">
			${O(!d,()=>n`<input
						class="checkbox all"
						type="checkbox"
						.checked=${e}
						@input=${t}
						?disabled=${!i}
						part="all"
					/>`)}
			${O(d,()=>n` <cosmoz-omnitable-settings
						.newLayout="${!0}"
						.config=${u}
					></cosmoz-omnitable-settings>`)}

			<cosmoz-omnitable-header-row
				part="headerRow"
				.data=${a}
				.columns=${o}
				.filters=${s}
				.groupOnColumn=${c}
				.setFilterState=${l}
				.settingsConfig=${u}
				.hideSelectAll=${d}
			></cosmoz-omnitable-header-row>
		</div>
	</sort-and-group-provider>`})))()}var ta,na,ra;function ia(){return(ia=e((()=>{F(),ta=h`
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
`,na=(e,t)=>{let n=t==null?void 0:e?.[t];return n==null?``:`width: ${n}px; padding: 0 min(3px, ${n/2}px)`},ra=({settingsConfig:e,widths:t})=>{let{columns:r,collapsed:i}=e,a=r.filter(e=>!i.some(t=>t.name===e.name));return n`<div class="skeleton">
		${Array.from({length:5},()=>n`<div>
					<div class="checkbox"></div>
					${a.map(e=>n`<div
								class="cell"
								part=${`cell-${e.name}`}
								name=${e.name}
								style=${na(t,e.name)}
							></div>`)}
				</div>`)}
	</div>`},customElements.define(`cosmoz-omnitable-skeleton`,A(ra,{styleSheets:[ta]}))})))()}var aa;function oa(){return(oa=e((()=>{F(),ia(),st(),k(),M(),aa=(e,t)=>{let{settingsConfig:r}=e,{processedItems:i,dataIsValid:a,filterIsTooStrict:o,loading:s,displayEmptyGroups:c,compareItemsFn:l,selectedItems:u,setSelectedItems:d,renderItem:f,renderGroup:p,error:m,partWidths:h}=t;return n`${O(!s&&!a&&!m,()=>n`<div class="tableContent-empty">
					<slot name="empty-set-message">
						${ut({width:`40px`,height:`40px`,styles:`fill: currentColor;`})}
						<div class="tableContent-empty-message">
							<h3>${P(`Working set empty`)}</h3>
							<p>${P(`No data to display`)}</p>
						</div>
					</slot>
				</div>`)}
		${O(o,()=>n`<div class="tableContent-empty">
					${ut({width:`40px`,height:`40px`,styles:`fill: currentColor;`})}
					<div>
						<h3>${P(`Filter too strict`)}</h3>
						<p>${P(`No matches for selection`)}</p>
					</div>
				</div>`)}
		${O(s&&!i.length,()=>n`<div class="tableContent-empty overlay has-skeleton">
					<cosmoz-omnitable-skeleton
						.settingsConfig=${r}
						.widths=${h}
					></cosmoz-omnitable-skeleton>
				</div>`)}
		${O(s&&i.length,()=>n`<div class="tableContent-empty overlay spinner"></div>`)}
		${O(m,()=>n`<div class="tableContent-empty overlay">
					${lt({width:`40px`,height:`40px`,styles:`fill: currentColor;`})}
					<div class="tableContent-empty-message">
						<h3>${P(`Error loading data`)}</h3>
						<p>${m.message}</p>
					</div>
				</div>`)}
		<div class="tableContent-scroller" id="scroller" part="scroller">
			<cosmoz-grouped-list
				id="groupedList"
				.data=${i}
				.selectedItems=${u}
				@selected-items-changed=${v(d)}
				.displayEmptyGroups=${c}
				.compareItemsFn=${l}
				.renderItem=${f}
				.renderGroup=${p}
			></cosmoz-grouped-list>
			<slot name="extraContent"></slot>
		</div>`}})))()}var sa,ca;function la(){return(la=e((()=>{le(),_e(),Hi(),sa=N`
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
`,ca=N`
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
`})))()}var ua,da;function fa(){return(fa=e((()=>{De(),F(),ua=e=>{let t=parseInt(e??``,10);return isFinite(t)?t:void 0},da=e=>{let{config:t}=e,{settings:n,setSettings:r,collapsed:i,requestTween:a}=t,o=xe({collapsed:i,settings:n.columns,requestTween:a,setSettings:I(e=>r(t=>({...t,columns:e})),[r])});return{...t,onDown:I(e=>{let t=e.target instanceof Element?e.target:null;t&&t.closest(`.pull`)&&(o.handle=e.currentTarget instanceof HTMLElement?e.currentTarget:null)},[o]),onDragStart:I(e=>{let t=e.target instanceof HTMLElement?e.target:null,n=ua(t?.dataset.index);if(!t||!o.handle?.contains(t)||n==null)return e.preventDefault();o.handle=null,e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`omnitable/sort-index`,String(n)),e.dataTransfer.setData(`text/plain`,String(n)),setTimeout(()=>t.classList.add(`drag`),0),t.addEventListener(`dragend`,e=>{(e.target instanceof HTMLElement?e.target:null)?.classList.remove(`drag`)},{once:!0})},[o]),onDragEnter:I(e=>{let t=e.currentTarget instanceof HTMLElement?e.currentTarget:null;t&&t===e.target&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`,t.classList.add(`dragover`))},[]),onDragOver:I(e=>{e.preventDefault(),e.currentTarget instanceof HTMLElement&&e.currentTarget.classList.add(`dragover`)},[]),onDragLeave:I(e=>{let t=e.currentTarget instanceof HTMLElement?e.currentTarget:null;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||t.classList.remove(`dragover`))},[]),onDrop:I(e=>{let t=ua(e.dataTransfer?.getData(`omnitable/sort-index`)),n=e.currentTarget instanceof HTMLElement?e.currentTarget:null,r=ua(n?.dataset.index),{settings:i,setSettings:a,requestTween:s}=o;n?.classList.remove(`dragover`),e.preventDefault();let c=i.slice();c.splice(r+(t>=r?0:-1),0,c.splice(t,1)[0]),s?.(),a(c)},[o]),onToggle:I(e=>{let{settings:t,setSettings:n,requestTween:r}=o,i=t.map(e=>({...e,disabled:e.disabled||o.collapsed?.some(t=>t.name===e.name)})),a=e.target instanceof HTMLInputElement?e.target:null,s=ua((e.target instanceof Element?e.target:null)?.closest(`[data-index]`)?.getAttribute(`data-index`));s!=null&&(i.splice(s,1,{...t[s],disabled:!a?.checked,priority:a?.checked?t.reduce((e,t)=>Math.max(e,t.priority??0),0)+1:t[s]?.priority}),r?.(),n(i))},[o])}}})))()}var pa,ma,ha,ga;function _a(){return(_a=e((()=>{He(),dt(),ze(),l(),ke(),_e(),re(),F(),k(),hi(),la(),fa(),pa=[ct({apply({availableHeight:e,elements:t}){Object.assign(t.floating.style,{maxHeight:`${Math.max(0,e)}px`})}}),...Ze],ma=({onDragStart:e,onDragEnter:t,onDragOver:r,onDragLeave:a,onDrop:o,onDown:s,onToggle:c,collapsed:l,filters:u})=>(d,f)=>{let p=!!l?.find(e=>e.name===d.name),m=!d.disabled&&!p;return n` <div
			class="item"
			data-index=${f}
			@mousedown=${s}
			draggable="true"
			@dragstart=${e}
			@dragenter=${t}
			@dragover=${r}
			@dragleave=${a}
			@drop=${o}
		>
			<cosmoz-button
				aria-label=${P(`Reorder column`)}
				variant="tertiary"
				icon-only
				class="pull"
				>${i({width:`16`,height:`16`})}</cosmoz-button
			>
			<label class="title" ?has-filter=${!je(u[d.name]?.filter)}
				>${d.title}</label
			>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${m}
				@click=${c}
				.indeterminate=${p}
			/>
		</div>`},ha=e=>{let{settings:t,settingsId:r,onSave:i,onReset:a,hasChanges:o,canReset:s,opened:c,setOpened:l,...u}=da(e);return n` <div class="headline">
			<span> ${P(`Sort and filter`)} </span>
			<cosmoz-button
				variant="tertiary"
				aria-label="${P(`Close settings`)}"
				@click=${e=>{let t=e.currentTarget instanceof HTMLElement?e.currentTarget:null;t?.focus(),t?.blur()}}
			>
				${g({width:`16`,height:`16`})}
			</cosmoz-button>
		</div>

		<div class="contents">
			<div
				class="heading"
				?data-opened=${c.columns}
				@click=${()=>l(e=>({...e,columns:!e.columns}))}
				part="columns columns-heading"
			>
				${P(`Columns`)} ${p({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse
				?opened="${c.columns}"
				part="columns columns-content"
			>
				<div class="list">${t.columns?.map(ma(u))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${c.sort}
				@click=${()=>l(e=>({...e,sort:!e.sort}))}
			>
				${P(`Sort on`)} ${p({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse ?opened=${c.sort}> ${mi()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${c.group}
				@click=${()=>l(e=>({...e,group:!e.group}))}
				part="groups groups-heading"
			>
				${P(`Group on`)} ${p({width:`20`,height:`20`})}
			</div>
			<cosmoz-collapse ?opened=${c.group} part="groups groups-heading"
				>${pi()}</cosmoz-collapse
			>
		</div>

		${O(r,()=>n`<div class="buttons">
					<cosmoz-button
						variant="tertiary"
						@click=${a}
						?disabled=${!s}
					>
						${P(`Reset`)}
					</cosmoz-button>
					<cosmoz-button
						variant="primary"
						@click=${i}
						?disabled=${!o}
					>
						${P(`Save`)}
					</cosmoz-button>
				</div>`)}`},customElements.define(`cosmoz-omnitable-settings-ui`,A(ha,{styleSheets:[se(sa)]})),ga=({config:e,newLayout:t})=>n`
	<cosmoz-dropdown
		.placement="${t?`bottom-start`:`bottom-end`}"
		.middleware="${pa}"
	>
		<div title="${P(`Sort and filter`)}" slot="button">
			${O(t,()=>n`<div class="headerDots">...</div>`,()=>n` ${ee({width:`20`,height:`20`,styles:`color: var(--cz-color-text-primary)`})}`)}
			${O(e?.badge,()=>n`<div class="badge"></div>`)}
		</div>
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${e}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`,customElements.define(`cosmoz-omnitable-settings`,A(ga,{styleSheets:[se(ca)]}))})))()}var va,ya,ba,xa,Sa;function Ca(){return(Ca=e((()=>{Te(),va=[`sortOn`,`descending`,`groupOn`,`groupOnDescending`],ya=e=>t=>typeof t==`object`&&!!t&&`name`in t&&t.name===e,ba=(e=[],t=[],n=[])=>{let r=t.filter(t=>e.some(ya(t.name))),i=e.filter(e=>e.name!=null&&!t.some(ya(e.name))&&!n.some(ya(e.name))),a=n.filter(e=>!t.some(ya(e.name)));return[...r,...a.flatMap(t=>{let n=e.find(e=>e.name===t.name);return n?{...t,title:n.title??t.title??``,minWidth:parseInt(n.minWidth??`0`,10)}:[]}),...i.map(e=>{let{name:t,title:n,priority:r,minWidth:i,width:a,flex:o}=e;return{name:t??``,title:n??``,priority:r??0,minWidth:parseInt(i??`0`,10),width:parseInt(a??`0`,10),flex:parseInt(o??`0`,10)}})]},xa=(e,t)=>({...t,...ge(Array.from(va))(e),columns:e.columns?.map(ge([`name`,`priority`,`width`,`flex`,`disabled`]))??t?.columns}),Sa=({columns:e,settings:t,savedSettings:n,initial:r})=>({...Object.fromEntries(va.flatMap(e=>r?.[e]==null?[]:[[e,r[e]]])),...n?ge(Array.from(va))(n):{},...t,columns:ba(e,t?.columns,n?.columns)})})))()}var wa;function Ta(){return(Ta=e((()=>{wa=({prefix:e=`omnitable-`}={})=>({write:async(t,n)=>{let r=e+t;try{n?localStorage.setItem(r,JSON.stringify(n)):localStorage.removeItem(r)}catch(e){console.error(e)}},read:async t=>{if(!t)return null;try{let n=localStorage.getItem(e+t);return n==null?null:JSON.parse(n)}catch(e){return console.error(e),null}}})})))()}var Ea,Da;function Oa(){return(Oa=e((()=>{F(),Ta(),Ea=Me(wa),Da=()=>{let e=T(Ea);return E(()=>e(),[e])}})))()}function ka(){return(ka=e((()=>{Oa()})))()}var Aa;function ja(){return(ja=e((()=>{F(),ka(),Ca(),Aa=(e,t,n,r)=>{let[i,a]=u(e?void 0:null),{read:o,write:s}=Da();return d(async()=>{e&&a(await o(e))},[e,o]),{settingsId:e,savedSettings:i,onSave:I(async()=>{if(!e)return;let r=xa(t,i);await s(e,r),n(),a(r)},[t,i]),onReset:I(async()=>{n(),e&&i!=null&&(await s(e),a(null)),r?.()},[e,i,s,r]),hasChanges:t!=null,canReset:t!=null||i!=null}}})))()}var Ma;function Na(){return(Na=e((()=>{F(),_n(),Ca(),ja(),Ma=({settingsId:e,host:t})=>{let n=E(()=>Object.fromEntries(va.map(e=>[e,t[e]])),[]),i=r(),a=I(()=>{i.current?.(n)},[n]),[o,s]=u(),[c,l]=u({columns:!0,sort:!0}),{savedSettings:d,...f}=Aa(e,o,s,a),{enabledColumns:p,disabledFiltering:m}=t,h=gn(t,{enabledColumns:p,disabledFiltering:m}),g=E(()=>Sa({columns:h,settings:o,savedSettings:d??void 0,initial:n}),[h,o,d]),_=E(()=>g.columns.map(e=>h.find(t=>t.name===e.name)).filter(e=>e!==void 0),[h,...g.columns.map(e=>e.name)]);return{...f,savedSettings:d,opened:c,setOpened:l,settings:g,columns:_,setSettings:s,resetRef:i}}})))()}function Pa(){return(Pa=e((()=>{_a(),Na()})))()}var Fa,Ia;function La(){return(La=e((()=>{Fa=e=>Number.isFinite(e)?e:0,Ia=(e,t)=>{let n=[],[r,i]=e.reduce(([e,t],{width:n,flex:r})=>[e+n,t+r],[0,0]),a=t-r,o=Fa(a/i),s=0,c=0,l=0;for(let t=0;t<e.length;t++){let{width:i,minWidth:u,flex:d}=e[t];u>i+(a>=0?o*d:i*a/r)?(s+=i,c+=u,l+=d,n[t]=u):d===0&&(s+=i,c+=i,n[t]=i)}r-=s,a=t-c-r,i-=l,o=Fa(a/i);for(let t=0;t<e.length;t++){if(n[t]!=null)continue;let{width:i,flex:s}=e[t],c=a>=0?o*s:i*a/r;n[t]=i+c}return n}})))()}var Ra,za,Ba,Va,Ha,Ua,Wa;function Ga(){return(Ga=e((()=>{La(),$(),Ra=(e,t)=>{let n=Xi(e,e=>e!=null&&e>0),r=0,i=0;return t.map((t,a)=>{let o=e[a];if(o==null||o===0)return{name:t.name,kind:`hide`};r+=o;let s=Math.round(r),c=s-i;return i=s,{name:t.name,kind:`width`,width:c,lastVisible:a===n}})},za=e=>`.cell[name="${e.name}"]{width: ${e.width}px;padding: 0 min(3px, ${e.width/2}px)}`,Ba=e=>`cosmoz-omnitable-resize-nub[name="${e}"]{display:none}`,Va=e=>`cosmoz-omnitable-resize-nub[name="${e}"], .cell[name="${e}"]{display:none}`,Ha=e=>e.map(e=>{if(e.kind===`hide`)return Va(e.name);let t=za(e);return e.lastVisible?`${t}\n${Ba(e.name)}`:t}).join(`
`),Ua=(e,t,n)=>{let r=e.filter(e=>!e.hidden),i=r.reduce((e,{width:t})=>e+t,0);if(r.length>1&&i>t)return Ua(r.slice(1),t,n);let a=r.reduce(([e,t],n,r)=>[Math.max(e,n.index),n.index>e?r:t],[-1,-1])[1];return a!==-1&&(r[a].flex=1),Ia(r,t).reduce((e,t,n)=>(e[r[n].index]=t,e),Array(n).fill(void 0))},Wa=(e,t)=>e.length===0?`.cell {display: none;}`:Ha(Ra(e,t))})))()}var Ka;function qa(){return(qa=e((()=>{F(),Ka=(e,t)=>d(()=>{let n=new ResizeObserver(([e])=>{e.contentRect?.width!==0&&t(e.contentRect.width-104)});return n.observe(e),()=>n.unobserve(e)},[])})))()}var Ja;function Ya(){return(Ya=e((()=>{F(),qa(),Ja=e=>{let[t,n]=u(()=>e.getBoundingClientRect().width-104);return Ka(e,n),t}})))()}var Xa;function Za(){return(Za=e((()=>{F(),Ga(),Xa=({canvasWidth:e,groupOnColumn:t,layoutColumns:n,config:r})=>E(()=>{if(!Array.isArray(r)||e==null||e===0)return[];let i=r.map((e,n)=>({minWidth:e.minWidth,width:e.width,flex:e.flex,priority:e.priority,name:e.name,index:n,hidden:e.name===t?.name||e.disabled})).map(e=>n==null?e:{...e,hidden:!n.includes(e.name)}).sort(({index:e,priority:t},{index:n,priority:r})=>t===r?n-e:t-r);return Ua(i,e,i.length)},[e,t,r])})))()}var Qa;function $a(){return($a=e((()=>{F(),Qa=({host:e,canvasWidth:t,columns:n})=>{let r=e.miniBreakpoint??480,i=E(()=>t<=r,[t,r]),a=E(()=>i?n?.filter(e=>e.mini!=null).sort((e,t)=>(e.mini??0)-(t.mini??0)):[],[n,i]),o=E(()=>a.slice(1),[a]),s=a[0],c=!!s&&e.renderItem==null;return d(()=>{e.toggleAttribute(`mini`,c)},[c]),{isMini:c&&i,hasMiniColumn:c,miniColumn:s,miniColumns:o}}})))()}var eo;function to(){return(to=e((()=>{F(),eo=({host:e,canvasWidth:t,layout:n,setSettings:i,requestTween:a})=>{let o=r();o.current=e=>{a(),i(r=>{let i=r.columns,{detail:{newWidth:a,column:o}}=e,s=i.findIndex(e=>e.name===o.name),c=[],l=i.reduce((e,t)=>Math.max(e,t.priority),-1/0);for(let e=0;e<n.length;e++)if(c[e]={...i[e]},e<s&&n[e]&&(c[e].width=n[e],c[e].flex=0,c[e].priority=l),e===s){let r=n.reduce((e,t,n)=>n<s&&t?e-t:e,t);c[e].width=Math.min(r,Math.max(a,i[e].minWidth)),c[e].flex=0,c[e].priority=l}return{...r,columns:c}})},d(()=>{let t=e=>o.current?.(e);return e.addEventListener(`column-resize`,t),()=>e.removeEventListener(`column-resize`,t)},[])}})))()}var no,ro,io;function ao(){return(ao=e((()=>{Se(),De(),F(),no=(e,t)=>{let n=E(()=>{let t=!1,n,r=()=>{t&&(n=requestAnimationFrame(r),e()&&(t=!1))};return{start:()=>{t=!0,cancelAnimationFrame(n),r()},stop:()=>{t=!1,cancelAnimationFrame(n)}}},[]);d(()=>{n.start()},t),d(()=>()=>n.stop(),[])},ro=(e=0,t=0)=>Math.abs(e-t)<.1,io=(e,t=1.9,n=ae,r)=>{let i=xe({target:e,speedFactor:t,onConverge:r}),a=I(()=>{if(!i.tween)return i.tween=i.target,n(i.tween),i.onConverge?.(),!0;if(i.target.every((e,t)=>i.tween[t]===e))return n(i.tween),i.onConverge?.(),!0;if(i.tween=i.target.map((e,t)=>ro(i.tween[t],e)?e:(i.tween[t]??0)+((e??0)-(i.tween[t]??0))/i.speedFactor||0),n(i.tween),i.tween.every((e,t)=>e===i.target[t]))return i.onConverge?.(),!0},[]);no(a,[e])}})))()}var oo,so,co;function lo(){return(lo=e((()=>{De(),F(),Ga(),Ya(),Za(),$a(),to(),ao(),oo=e=>{let t=E(()=>new CSSStyleSheet,[]);return d(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,t]},[]),t},so=e=>{d(()=>{e.toggleAttribute(`compact`,e.compact===!0)},[e.compact])},co=({host:e,columns:t,settings:n,setSettings:i,resizeSpeedFactor:a,sortAndGroupOptions:o})=>{let s=Ja(e),{isMini:c,hasMiniColumn:l,miniColumn:d,miniColumns:f}=Qa({host:e,canvasWidth:s,columns:t});so(e);let{groupOnColumn:p}=o,m=l?[d.name]:e.headerColumns??null,h=Xa({canvasWidth:s,groupOnColumn:p,layoutColumns:m,config:n.columns}),g=oo(e),_=n.columns.filter((e,t)=>h[t]==null&&e.name!==p?.name&&!e.disabled).map(e=>e.name),v=E(()=>_.map(e=>t.find(t=>t.name===e)),[t,_.join()]),[y,b]=u(1),x=I(()=>b(a??1.9),[a]),S=I(()=>b(1),[]),C=xe({columns:n.columns}),w=r({rules:void 0,widths:[]}).current,[T,ee]=u(void 0),D=e=>ee(e.reduce((e,t)=>t.kind===`width`?{...e,[t.name]:t.width}:e,{}));return io(h,y,t=>{let n=Ra(t,C.columns),r=Wa(t,C.columns)===`.cell {display: none;}`?`empty`:n.map(e=>e.kind).join(`#`)+`#`+(n.findIndex(e=>e.lastVisible)+1);if(w.rules!==r){g.replaceSync(Wa(t,C.columns)),w.rules=r,w.widths=n.map(e=>e.kind===`width`?e.width:void 0),D(n);return}let i=g.cssRules,a=!1;n.forEach((e,t)=>{if(e.kind!==`width`||w.widths[t]===e.width)return;let n=i[t];n.style.width=`${e.width}px`,n.style.padding=`0 min(3px, ${e.width/2}px)`,w.widths[t]=e.width,a=!0}),a&&e.loading&&D(n)},S),eo({host:e,canvasWidth:s,layout:h,setSettings:e=>i(e(n)),requestTween:x}),{isMini:c,collapsedColumns:v,miniColumns:f,requestTween:x,partWidths:T}}})))()}var uo;function fo(){return(fo=e((()=>{uo=({host:e,...t})=>{let{csvFilename:n=`omnitable.csv`,xlsxFilename:r=`omnitable.xlsx`,xlsxSheetname:i=`Omnitable`,topPlacement:a=`top-end`}=e;return{csvFilename:n,xlsxFilename:r,xlsxSheetname:i,topPlacement:a,...t}}})))()}var po;function mo(){return(mo=e((()=>{F(),$(),po=({host:e,selectedItems:t,data:n,dataIsValid:r,columns:i,sortAndGroupOptions:a,collapsedColumns:o,settings:s,filterFunctions:c,settingS:l,filters:u,setFilterState:d,hideSelectAll:f,headerColumns:p,requestTween:m,...h})=>{let g=E(()=>p==null?i:i.filter(e=>p.includes(e.name)),[i,p]),_=t===Q||!!n&&n.length>0&&Array.isArray(t)&&t.length===n.length,v=t=>{if(!(t.target instanceof HTMLInputElement))return;let n=e.shadowRoot.querySelector(`#groupedList`);t.target.checked?n.selectAll():n.deselectAll()},{groupOnColumn:y}=a,b=E(()=>[y,...o,...s.columns.filter(e=>e.disabled)].some(e=>!!e&&!!e.name&&Object.keys(c).includes(e.name)),[c,s,o]);return{allSelected:_,onAllCheckboxChange:v,data:n,dataIsValid:r,columns:g,settingsConfig:E(()=>({...l,collapsed:o,badge:b,filters:u,requestTween:m}),[l,o,b,u,m]),filters:u,groupOnColumn:y,setFilterState:d,hideSelectAll:f,sortAndGroup:a.sortAndGroup,...h}}})))()}var ho,go;function _o(){return(_o=e((()=>{He(),l(),F(),k(),ho=e=>e?`groupRow groupRow-folded`:`groupRow`,go=(e,t,{selected:r,folded:i,toggleFold:a,onCheckboxChange:o,groupOnColumn:s,dataIsValid:c})=>n` <div
		class="${ho(i)}"
		part="groupRow groupRow-${t}"
	>
		<input
			class="checkbox"
			type="checkbox"
			.checked=${r}
			.dataItem=${e}
			@input=${o}
			?disabled=${!c}
		/>
		<h3 class="groupRow-label">
			<div><span>${s?.title}</span>: &nbsp;</div>
			<cosmoz-omnitable-group-row
				.column=${s}
				.item=${e.items?.[0]}
				.selected=${r}
				.folded=${i}
				.group=${e}
			></cosmoz-omnitable-group-row>
		</h3>
		<div class="groupRow-badge">${e.items.length}</div>
		<cosmoz-button
			aria-label=${P(`Expand or collapse`)}
			variant="tertiary"
			icon-only
			class="expand"
			?aria-expanded="${i}"
			@click=${a}
		>
			${p({width:`16`,height:`16`})}
		</cosmoz-button>
	</div>`})))()}var vo;function yo(){return(yo=e((()=>{M(),vo=({item:e,index:t})=>r=>O((r?.length??0)>0,()=>n`
				<div class="itemRow-minis" part="item-minis">
					${r.map(r=>n`<div
								class="itemRow-mini"
								part="item-mini item-mini-${r.name}"
							>
								${(r.renderMini??r.renderCell)(r,{item:e,index:t})}
							</div>`)}
				</div>
			`)})))()}var bo;function xo(){return(xo=e((()=>{He(),l(),re(),F(),k(),yo(),bo=(e,t,{selected:r,expanded:i,toggleCollapse:a,columns:o,collapsedColumns:s,miniColumns:c,onItemClick:l,onCheckboxChange:u,onItemChange:d,rowPartFn:f,groupOnColumn:m,dataIsValid:h})=>n`
		<div
			?selected=${r}
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
					.checked=${r}
					.dataItem=${e}
					@input=${u}
					?disabled=${!h}
				/>
				<cosmoz-omnitable-item-row
					part="itemRow-inner"
					.columns=${o}
					.index=${t}
					.selected=${r}
					.expanded=${i}
					.item=${e}
					.groupOnColumn=${m}
					.onItemChange=${d}
				>
				</cosmoz-omnitable-item-row>
				<cosmoz-button
					aria-label=${P(`Expand or collapse`)}
					variant="tertiary"
					icon-only
					class="expand"
					?hidden="${je(s.length)}"
					?aria-expanded="${i}"
					@click="${a}"
				>
					${p({width:`16`,height:`16`})}
				</cosmoz-button>
			</div>
			${vo({item:e,index:t})(c)}
		</div>
		<cosmoz-omnitable-item-expand
			.columns=${s}
			.item=${e}
			?selected=${r}
			?expanded=${i}
			.groupOnColumn=${m}
			part="item-expand"
		>
		</cosmoz-omnitable-item-expand>
	`})))()}var So,Co,wo;function To(){return(To=e((()=>{F(),_o(),xo(),$(),J(),So=e=>e instanceof HTMLInputElement,Co=e=>e instanceof HTMLElement,wo=({host:e,error:t,dataIsValid:n,processedItems:i,columns:a,collapsedColumns:o,miniColumns:s,sortAndGroupOptions:c,rowPartFn:l,...u})=>{let{loading:f=!1,displayEmptyGroups:p=!1,compareItemsFn:m}=e,h=e.renderItem??bo,g=e.renderGroup??go,_=r({shiftKey:!1,ctrlKey:!1}),v=I(t=>{if(!So(t.target))return;let n=t.target,r=n.dataItem,i=n.checked,a=e.shadowRoot.querySelector(`#groupedList`);_.current.shiftKey?a.toggleSelectTo(r,i):_.current.ctrlKey?(n.checked=!0,a.selectOnly(r)):a.toggleSelect(r,i),t.preventDefault(),t.stopPropagation()},[]);d(()=>{let e=({shiftKey:e,ctrlKey:t})=>{_.current={shiftKey:e,ctrlKey:t}};return window.addEventListener(`keydown`,e),window.addEventListener(`keyup`,e),()=>{window.removeEventListener(`keydown`,e),window.removeEventListener(`keyup`,e)}},[]);let y=I(t=>{if(!Co(t.currentTarget))return;let n=t.currentTarget,r=t.composedPath();r.slice(0,r.indexOf(n)).some(e=>e instanceof Element&&e.matches(`a, .checkbox, .expand`))||e.dispatchEvent(new window.CustomEvent(`omnitable-item-click`,{bubbles:!0,composed:!0,detail:{item:n.dataItem,index:n.dataIndex}}))},[]),{groupOnColumn:b}=c,x=I((t,n)=>r=>bn(e,t,n,r),[]);return{...u,processedItems:i,dataIsValid:n,filterIsTooStrict:n&&i.length<1,loading:f,compareItemsFn:m,displayEmptyGroups:p,error:t,renderItem:E(()=>(e,t,r)=>h(e,e[Yi],{...r,columns:a,collapsedColumns:o,miniColumns:s,onItemClick:y,onCheckboxChange:v,onItemChange:x,rowPartFn:l,groupOnColumn:b,dataIsValid:n}),[h,a,o,s,y,v,x,l,b,n]),renderGroup:E(()=>(e,t,r)=>g(e,e[Yi],{...r,columns:a,onCheckboxChange:v,groupOnColumn:b,dataIsValid:n}),[g,a,v,b,n])}}})))()}var Eo;function Do(){return(Do=e((()=>{Eo=(e,t)=>{if(e===t)return 0;if(e==null)return-1;if(t==null)return 1;let n=typeof e,r=typeof t;return n===`object`&&r===`object`?e.toString()<t.toString()?-1:1:n===`number`&&r===`number`?e-t:n===`string`&&r===`string`?e<t?-1:1:n===`boolean`&&r===`boolean`?e?-1:1:(console.warn(`unsupported sort`,n,e,r,t),0)}})))()}var Oo,ko,Ao,jo,Mo,No;function Po(){return(Po=e((()=>{Se(),F(),Do(),_n(),Si(),$(),Oo=(e,t)=>(n,r)=>Eo(e(n),e(r))*(t?-1:1),ko=e=>e.replace(/([a-z0-9])([A-Z])/gu,`$1-$2`).toLowerCase(),Ao=(e,t)=>{e&&t&&Object.entries(t).forEach(([t,n])=>{let r=e[un];r.__ownChange=!0,Object.assign(r,{[t]:n}),r.__ownChange=!1,r.dispatchEvent(new CustomEvent(`${ko(t)}-changed`,{bubbles:!0,detail:{value:n}}))})},jo=(e,t)=>Object.assign(e,{[Yi]:t}),Mo=Symbol(`unparsed`),No=({data:e,columns:t,hashParam:n,sortAndGroupOptions:r,noLocalSort:i,noLocalFilter:a})=>{let{groupOnColumn:o,groupOnDescending:s,sortOnColumn:c,descending:l}=r,u=I(([e,n])=>{let r=t.find(({name:t})=>t===e);return r==null?[e,void 0]:[e,n.filter&&r.serializeFilter(r,n.filter)]},[t]),f=I(([e,n])=>{let r=t.find(({name:t})=>t===e);if(r==null)return[e,{[Mo]:n}];let i={filter:r.deserializeFilter(r,n)};return Ao(r,i),[e,i]},[t]),[p,m]=gi({},n,{multi:!0,suffix:`-filter--`,write:u,read:f}),h=I((e,n)=>m(r=>{let i=Ee(n,r[e]);return Ao(t.find(t=>t.name===e),i),{...r,[e]:{...r[e],...i}}}),[t,m]),g=E(()=>Object.values(p).map(e=>e.filter),[p]),_=E(()=>Object.fromEntries(t.map(e=>[e.name,!e.noLocalFilter&&e.getFilterFn(e,p[e.name]?.filter)]).filter(e=>!!e[1])),[t,...g]),v=E(()=>!Array.isArray(e)||e.length===0?[]:Object.entries(_).length===0||a?e.slice():e.filter(e=>Object.values(_).every(t=>t(e))),[e,_,a]),y=E(()=>{if(!i&&!o&&c!=null&&c.sortOn!=null)return v.slice().sort(Oo(e=>c.getComparableValue({...c,valuePath:c.sortOn},e),l));if(o!=null&&o.groupOn!=null){let e=v.reduce((e,t)=>{let n=o.getComparableValue({...o,valuePath:o.groupOn},t);if(n===void 0)return e;let r=e.find(e=>e.id===n);return r?(r.items.push(t),e):(r={id:n,name:n,items:[t]},[...e,r])},[]);return e.sort(Oo(e=>o.getComparableValue({...o,valuePath:o.groupOn},e.items[0]),s)),!c||i?e:e.filter(e=>Array.isArray(e.items)).map(e=>(e.items.sort(Oo(e=>c.getComparableValue({...c,valuePath:c.sortOn},e),l)),e))}return v},[v,o,s,c,l,i]),b=E(()=>{let e=0,t=0,n=[];return y.forEach(r=>{if(`items`in r&&Array.isArray(r.items))jo(r,t++),r.items.forEach(t=>{jo(t,e++),n.push(t)});else return jo(r,e++),n.push(r)},[]),n},[y]);return d(()=>{m(e=>Object.values(e).some(e=>e[Mo]!=null)?Object.fromEntries(Object.entries(e).map(([e,t])=>{let n=t[Mo];return n==null?[e,t]:f([e,n])})):e)},[f]),{processedItems:y,visibleData:b,filters:p,filterFunctions:_,setFilterState:h}}})))()}var Fo,Io,Lo;function Ro(){return(Ro=e((()=>{c(),a(),F(),Fo=e=>{let t=t=>{let n=e.data.indexOf(t);if(n<0)return null;let r=e.data.splice(n,1);if(e.data=e.data.slice(),Array.isArray(r)&&r.length>0)return r[0]},n=(t,n)=>{e.data.splice(t,1,n),e.data=e.data.slice()};return{removeItem:t,removeItems(e){let n=[];for(let r=e.length-1;r>=0;--r){let i=t(e[r]);i!=null&&n.push(i)}return n},replaceItemAtIndex:n,replaceItem(t,r){let i=e.data.indexOf(t);i>-1&&n(i,r)},selectItem(t){e.shadowRoot.querySelector(`#groupedList`).select(t)},selectAll(){e.shadowRoot.querySelector(`#groupedList`).selectAll()},deselectAll(){e.shadowRoot.querySelector(`#groupedList`).deselectAll()},deselectItem(t){e.shadowRoot.querySelector(`#groupedList`).deselect(t)},isItemSelected(t){return e.shadowRoot.querySelector(`#groupedList`).isItemSelected(t)}}},Io=e=>{let[t,n]=u(!1);return d(()=>{e&&n(!0)},[e]),t},Lo=({host:e,visibleData:t,filters:n,ready:r=!0,...i})=>{let{setFilterState:a}=i,o=E(()=>Fo(e),[]),[c,l]=y(`selectedItems`,[]);s(i,Object.values(i)),s(o,Object.values(o)),d(()=>{let t=e=>{if(!(e instanceof CustomEvent))return;let t=e.detail;a(t.name,e=>({...typeof e==`object`&&e?e:{},...t.state}))};return e.addEventListener(`legacy-filter-changed`,t),()=>e.removeEventListener(`legacy-filter-changed`,t)},[]),C(`visibleData`,t),C(`sortedFilteredGroupedItems`,i.sortedFilteredGroupedItems),C(`sortOn`,i.sortOn),C(`descending`,i.descending),C(`isMini`,i.isMini),C(`settingsReady`,Io(r));let u=E(()=>Object.fromEntries(Object.entries(n).filter(([,{filter:e}])=>e!==void 0).map(([e,{filter:t}])=>[e,t])),[n]);return C(`filters`,u,Object.values(u)),{selectedItems:c,setSelectedItems:l}}})))()}var zo;function Bo(){return(Bo=e((()=>{Pa(),lo(),fo(),mo(),To(),Po(),Ro(),Oi(),zo=e=>{let{hashParam:t,settingsId:n,data:r,resizeSpeedFactor:i,noLocal:a,noLocalSort:o=a,noLocalFilter:s=a,error:c,rowPartFn:l}=e,u=Ma({settingsId:n,host:e}),{settings:d,setSettings:f,columns:p,resetRef:m,savedSettings:h}=u,g=h!==void 0,_=Ei(p,t,{settings:d,setSettings:f,resetRef:m,ready:g}),{processedItems:v,visibleData:y,filters:b,setFilterState:x,filterFunctions:S}=No({data:r,columns:p,hashParam:t,sortAndGroupOptions:_,noLocalSort:o,noLocalFilter:s}),{isMini:C,collapsedColumns:w,miniColumns:T,requestTween:E,partWidths:ee}=co({host:e,columns:p,settings:d,setSettings:f,resizeSpeedFactor:i,sortAndGroupOptions:_}),D=r&&Array.isArray(r)&&r.length>0,{selectedItems:te,setSelectedItems:O}=Lo({host:e,visibleData:y,sortedFilteredGroupedItems:v,columns:p,filters:b,setFilterState:x,isMini:C,ready:g,..._}),ne=po({host:e,selectedItems:te,sortAndGroupOptions:_,dataIsValid:D,data:r,columns:p,filters:b,collapsedColumns:w,settings:d,filterFunctions:S,settingS:u,setFilterState:x,hideSelectAll:e.hideSelectAll===!0,headerColumns:e.headerColumns??null,requestTween:E});return{header:ne,list:wo({host:e,error:c,dataIsValid:D,processedItems:v,selectedItems:te,setSelectedItems:O,columns:p,collapsedColumns:w,miniColumns:T,sortAndGroupOptions:_,rowPartFn:l,partWidths:ee}),footer:uo({host:e,selectedItems:te,allSelected:ne.allSelected,setSelectedItems:O,columns:p,enableSelectAll:e.enableSelectAll,allItemsCount:e.allItemsCount})}}})))()}var Vo;function Ho(){return(Ho=e((()=>{F(),M(),Vo=e=>{let{item:t,index:n,renderFn:r}=e;return t==null||n==null||r==null?D:r(t,n)},customElements.define(`cosmoz-grouped-list-row`,A(Vo,{useShadowDOM:!1}))})))()}var Uo,Wo,Go,Ko,qo,Jo;function Yo(){return(Yo=e((()=>{ce(),te(),de(),Uo=40,Wo=24,Go=12,Ko=16,qo=class extends o{constructor(){super(...arguments),this._items=[],this._renderRow=()=>{},this._host=null,this._canvas=null,this._clip=null,this._scroller=null,this._pool=[],this._heights=[],this._prefix=[0],this._itemsVersion=``,this._built=!1,this._rafId=null,this._ro=null,this._scrollerTarget=null,this._observing=new WeakSet,this._boundRenderRow=null,this.pumpCount=0,this._onWheel=e=>{let t=this._scroller;if(!t||e.ctrlKey)return;e.preventDefault();let n=1;e.deltaMode===1?n=40:e.deltaMode===2&&(n=t.clientHeight),e.deltaY!==0&&(t.scrollTop+=e.deltaY*n),e.deltaX!==0&&(t.scrollLeft+=e.deltaX*n)},this._onKeydown=e=>{let t=this._scroller;if(!t||e.defaultPrevented||e.ctrlKey||e.altKey||e.metaKey||this._isInteractiveKeyTarget(e))return;let n=null,r=null;switch(e.key){case`ArrowUp`:n=-40;break;case`ArrowDown`:n=40;break;case`PageUp`:n=-Math.round(t.clientHeight*.9);break;case`PageDown`:n=Math.round(t.clientHeight*.9);break;case` `:n=e.shiftKey?-t.clientHeight:t.clientHeight;break;case`Home`:r=0;break;case`End`:r=t.scrollHeight;break;default:return}e.preventDefault(),n==null?r!=null&&(t.scrollTop=r):t.scrollTop+=n},this._activePointer=null,this._dragStartX=0,this._dragStartY=0,this._dragStartScrollTop=0,this._dragStartScrollLeft=0,this._dragScrolling=!1,this._onPointerDown=e=>{if(this._activePointer!=null){this._endPointerDrag();return}if(e.pointerType!==`touch`&&e.pointerType!==`pen`)return;let t=this._scroller;t&&(this._activePointer=e.pointerId,this._dragStartX=e.clientX,this._dragStartY=e.clientY,this._dragStartScrollTop=t.scrollTop,this._dragStartScrollLeft=t.scrollLeft,this._dragScrolling=!1)},this._onPointerMove=e=>{if(e.pointerId!==this._activePointer)return;let t=this._scroller;if(!t)return;let n=e.clientX-this._dragStartX,r=e.clientY-this._dragStartY;if(!this._dragScrolling){if(Math.abs(n)<2&&Math.abs(r)<2)return;this._dragScrolling=!0}e.preventDefault(),t.scrollTop=this._dragStartScrollTop-r,t.scrollLeft=this._dragStartScrollLeft-n},this._onPointerEnd=e=>{e.pointerId===this._activePointer&&this._endPointerDrag()},this._onScroll=()=>{this._pump(),this._rafId??=requestAnimationFrame(()=>{this._rafId=null,this._pump()})},this._appliedTotal=-1,this._anchorIndex=0,this._lastAnchorTop=0,this._boxTop=-1,this._boxLeft=-1,this._boxWidth=-1,this._boxHeight=-1,this._appliedScroll=NaN,this._measuredViewport=0,this._minMeasured=1/0,this._avgRowHeight=Uo,this._measured=new Uint8Array,this._visibilityRange=null}render(e){return this._items=e.items??[],this._renderRow=e.renderRow,this._built&&this._schedule(),x}update(e,t){let n=t[0];if(!n)return x;this._items=n.items??[],this._renderRow=n.renderRow;let r=document.defaultView;if((r.__recLog??=[]).push({t:`update`,n:this._items.length,scroller:this._scroller?.clientHeight}),!this._built){let t=e;this._build(t.parentNode),this._built=!0}if(this._heights.length!==this._items.length&&(this._heights.length=this._items.length,this._heights.fill(Uo),this._invalidate()),this._measured.length!==this._items.length&&(this._measured=new Uint8Array(this._items.length)),this._boundRenderRow!==this._renderRow){this._boundRenderRow=this._renderRow;for(let e of this._pool){if(e.bound==null)continue;let t=e.bound;e.el.renderFn=(e=>this._renderRow(e,t))}}return this._pump(),x}_build(e){let t=e??document.createElement(`div`);this._host=t,t.style.flexShrink=`0`;let n=document.createElement(`div`);n.className=`glist-recycler-viewport`,n.style.position=`absolute`,n.style.overflow=`hidden`,n.style.touchAction=`none`;let r=document.createElement(`div`);r.className=`glist-recycler-canvas`,r.style.position=`absolute`,r.style.top=`0`,r.style.left=`0`,r.style.width=`100%`,r.style.willChange=`transform`,n.appendChild(r),this._clip=n,this._canvas=r,this._resolveScroller(),this._measureViewport(),this._attachCanvas(),this._ro=new ResizeObserver(e=>this._onResize(e)),this._scrollerRO?.disconnect(),this._scrollerRO=new ResizeObserver(()=>this._syncCanvasBox()),this._scroller&&this._scrollerRO.observe(this._scroller),this._schedule()}_resolveScroller(){let e=this._host?.parentElement;for(;e;){let t=getComputedStyle(e).overflowY;if(t===`auto`||t===`scroll`||t===`overlay`)break;e=e.parentElement}this._scroller=e??null,e&&(this._scrollerTarget=e,e.addEventListener(`scroll`,this._onScroll,{passive:!0}))}_attachCanvas(){let e=this._clip,t=this._scroller;if(!e||!t)return;let n=t.parentElement;n&&e.parentElement!==n&&n.appendChild(e),e.addEventListener(`wheel`,this._onWheel,{passive:!1}),e.addEventListener(`keydown`,this._onKeydown),e.addEventListener(`pointerdown`,this._onPointerDown),e.addEventListener(`pointermove`,this._onPointerMove),e.addEventListener(`pointerup`,this._onPointerEnd),e.addEventListener(`pointercancel`,this._onPointerEnd)}_syncCanvasBox(){let e=this._scroller,t=this._clip;if(!t)return!1;if(!e)return t.style.position=`relative`,t.style.top=`0`,t.style.left=`0`,t.style.width=`100%`,t.style.height=`${this._prefix[this._items.length]??0}px`,!0;let n=e.offsetTop,r=e.offsetLeft,i=e.clientWidth,a=e.clientHeight;return n===this._boxTop&&r===this._boxLeft&&i===this._boxWidth&&a===this._boxHeight?!1:(this._boxTop=n,this._boxLeft=r,this._boxWidth=i,this._boxHeight=a,t.style.top=`${n}px`,t.style.left=`${r}px`,t.style.width=`${i}px`,t.style.height=`${a}px`,!0)}_isInteractiveKeyTarget(e){let t=e.composedPath()[0]??e.target;return t instanceof Element?t instanceof HTMLElement&&t.isContentEditable?!0:t.matches(`button, input, select, textarea, a[href], [contenteditable], [role="checkbox"], [role="option"], [role="radio"], [role="menuitem"]`):!1}_endPointerDrag(){this._activePointer=null,this._dragScrolling=!1}_measureViewport(){let e=this._scroller?.clientHeight??300,t=Math.max(Ko,Math.ceil(e/this._rowBudget())+24);this._ensurePool(t)}_ensurePool(e){for(;this._pool.length<e;){let e=document.createElement(`cosmoz-grouped-list-row`);e.style.position=`absolute`,e.style.left=`0`,e.style.right=`0`,e.style.top=`0`,e.style.visibility=`hidden`,this._canvas?.appendChild(e),this._pool.push({el:e,height:Uo,bound:void 0})}}_onResize(e){let t=!1;for(let n of e){let e=this._pool.find(e=>e.el===n.target);if(!e)continue;let r=Math.round(e.el.getBoundingClientRect().height);r>0&&(e.h=r);let i=e.bound;if(!(i==null||i<0||i>=this._items.length)&&r>0){r<this._minMeasured&&(this._minMeasured=r);let e=this._measured[i];this._heights[i]!==r&&(this._heights[i]=r,t=!0),this._measured[i]=1,e||(t=!0)}}if(t){this._invalidate(),this._syncBoundTransforms();let e=this._offset(this._anchorIndex)-this._lastAnchorTop;e!==0&&this._scroller&&(this._scroller.scrollTop+=e,this._lastAnchorTop+=e),this._schedule()}}_syncBoundTransforms(){for(let e of this._pool){if(e.bound==null){e.off=0;continue}let t=this._offset(e.bound);t!==e.off&&(e.el.style.transform=`translate3d(0, ${t}px, 0)`,e.off=t)}}_logTotalChange(e,t){if(e===this._appliedTotal)return;let n=this._appliedTotal;this._appliedTotal=e,document.defaultView.__recTotal?.(e,n,t)}_invalidate(){let e=0,t=0;for(let n=0;n<this._items.length;n++)this._measured[n]&&(e+=this._heights[n]??Uo,t++);t>0&&(this._avgRowHeight=e/t),this._prefix.length=0,this._prefix.push(0);for(let e=0;e<this._items.length;e++)this._prefix.push((this._prefix[e]??0)+(this._measured[e]?this._heights[e]??Uo:this._avgRowHeight));this._host&&(this._host.style.height=`${this._prefix[this._items.length]??0}px`)}_offset(e){return this._prefix[e]??0}_firstIndex(e){let t=this._items.length,n=0,r=Math.max(0,t-1),i=0;for(;n<=r;){let t=Math.floor((n+r)/2);(this._prefix[t]??0)<=e?(i=t,n=t+1):r=t-1}return i}_schedule(){this._rafId??=requestAnimationFrame(()=>{this._rafId=null,this._pump()})}_pump(){this.pumpCount=(this.pumpCount??0)+1;let e=this._items.length;this._prefix.length!==e+1&&this._invalidate();let t=this._scroller?.scrollTop??0,n=this._scroller?.clientHeight??300;(this._syncCanvasBox()||this._scroller?.clientHeight!==this._measuredViewport)&&(this._measuredViewport=this._scroller?.clientHeight??0,this._measureViewport()),this._canvas&&this._appliedScroll!==t&&(this._appliedScroll=t,this._canvas.style.transform=`translate3d(0, ${-t}px, 0)`);let r=this._scroller==null,i=r?0:Math.max(0,this._firstIndex(Math.max(0,t))-Go),a=this._offset(this._anchorIndex??i);this._anchorIndex=this._firstIndex(Math.max(0,t)),this._lastAnchorTop=a;let o=this._prefix[e]??0;this._logTotalChange(o,`pump`),this._host&&this._host.style.height!==`${o}px`&&(this._host.style.height=`${o}px`),this._canvas&&this._canvas.style.height!==`${o}px`&&(this._canvas.style.height=`${o}px`);let s=r?e:Math.min(e-i,Math.ceil(n/this._rowBudget())+24),c=i+s-1;this._ensurePool(s),window.__rec=this;let l=new Set;for(let e=i;e<=c;e++)l.add(e);let u=[],d=new Set;for(let e of this._pool)e.bound!=null&&l.has(e.bound)?d.add(e.bound):u.push(e);let f=[];for(let e=i;e<=c;e++)d.has(e)||f.push(e);for(let e of f){let t=u.pop()??this._allocateSlot();this._bind(t,e)}let p=null,m=document.activeElement;for(let e of this._pool)if((e.bound==null||!l.has(e.bound))&&e.el.style.visibility!==`hidden`){if(m!=null&&e.el.contains(m)){let t=m;p=this._nearestFocusable(e.bound,t)??this._nearestFocusable(this._firstVisibleIndex(),t)}e.el.style.visibility=`hidden`,e.bound=void 0,e.off=0,e.el.style.transform=``}p&&p.focus();for(let e of this._pool){if(e.bound==null)continue;let t=this._items[e.bound];t!==void 0&&e.boundItem!==t&&this._bind(e,e.bound)}let h=r?0:this._firstIndex(this._scroller?.scrollTop??0),g=r?Math.max(this._items.length-1,0):Math.min(this._firstIndex((this._scroller?.scrollTop??0)+(this._scroller?.clientHeight??0))-1,this._items.length-1);{let e={first:h,last:Math.max(g,h)},t=this._visibilityRange;(t==null||t.first!==e.first||t.last!==e.last)&&(this._visibilityRange=e,this._host?.dispatchEvent(new oe(e)))}{let e=this._pool.filter(e=>e.bound!=null&&e.el.style.visibility!==`hidden`).sort((e,t)=>(e.bound??0)-(t.bound??0)),t=null;for(let n of e){let e=n.el;t===null?(this._canvas?.firstElementChild!==e&&this._canvas?.insertBefore(e,this._canvas?.firstElementChild),t=e):(t.nextElementSibling!==e&&this._canvas?.insertBefore(e,t.nextElementSibling),t=e)}}}_nearestFocusable(e,t){if(e==null)return null;let n=Array.from(t.classList),r=null,i=1/0;for(let a of this._pool){if(a.bound==null||a.el.style.visibility===`hidden`||a.bound===e)continue;let o=Array.from(a.el.querySelectorAll(`input,button,select,textarea,a[href],[tabindex]`)),s=o.find(e=>e.tagName===t.tagName&&n.every(t=>e.classList.contains(t)))??(n.length===0&&o[0])??null;if(!s)continue;let c=Math.abs(a.bound-e);c<i&&(r=s,i=c)}return r}_firstVisibleIndex(){let e=this._scroller?.scrollTop??0;return this._firstIndex(e)}_rowBudget(){return Math.max(Wo,this._minMeasured)}_allocateSlot(){let e=document.createElement(`cosmoz-grouped-list-row`);e.style.position=`absolute`,e.style.left=`0`,e.style.right=`0`,e.style.top=`0`,e.style.visibility=`hidden`,this._canvas?.appendChild(e);let t={el:e,height:Uo,bound:void 0};return this._pool.push(t),this._ro&&this._ro.observe(e),t}_bind(e,t){let n=this._items[t];(e.bound!==t||e.boundItem!==n)&&(e.h!=null&&!this._measured[t]&&(this._measured[t]=1,this._heights[t]!==e.h&&(this._heights[t]=e.h),this._invalidate(),this._syncBoundTransforms()),e.bound=t,e.boundItem=n,e.el.index=t,e.el.item=n,e.wrapper=(t=>this._renderRow(t,e.bound)),e.el.renderFn=e.wrapper,e.el.style.transform=`translate3d(0, ${this._offset(t)}px, 0)`,e.off=this._offset(t),e.el.style.visibility=`visible`,this._ro&&!this._observing.has(e.el)&&(this._observing.add(e.el),this._ro.observe(e.el)))}disconnected(){this._rafId!=null&&(cancelAnimationFrame(this._rafId),this._rafId=null),this._ro?.disconnect(),this._scroller?.removeEventListener(`scroll`,this._onScroll),this._clip?.removeEventListener(`wheel`,this._onWheel),this._clip?.removeEventListener(`keydown`,this._onKeydown),this._clip?.removeEventListener(`pointerdown`,this._onPointerDown),this._clip?.removeEventListener(`pointermove`,this._onPointerMove),this._clip?.removeEventListener(`pointerup`,this._onPointerEnd),this._clip?.removeEventListener(`pointercancel`,this._onPointerEnd),this._endPointerDrag()}reconnected(){this._ro?.disconnect(),this._ro=new ResizeObserver(e=>this._onResize(e));for(let e of this._pool)e.bound!=null&&this._ro.observe(e.el);this._resolveScroller(),this._attachCanvas(),this._schedule()}},Jo=w(qo)})))()}var Xo,Zo,Qo,$o,es,ts,ns,rs,is;function as(){return(as=e((()=>{Xo={group:Symbol(`group`)},Zo=(e,t)=>(t.has(e)||t.set(e,{}),t.get(e)),Qo=(e,t)=>!!Zo(e,t).expanded,$o=(e,t)=>!!Zo(e,t).folded,es=e=>e?e.items instanceof Array:!1,ts=e=>{if(!Array.isArray(e)||e.length===0)return;let t=Array.isArray(e[0]?.items);if(!e.every(e=>Array.isArray(e.items)===t))throw Error(`Data must be homogeneous.`)},ns=(e,t,n)=>{if(Array.isArray(e))return ts(e),e.reduce((e,r)=>{let i=r;return i.items?i.items.length?Zo(r,n).folded?e.concat(r):e.concat(r,i.items.map(e=>Object.assign(e,{[Xo.group]:r}))):t?e.concat(r):e:e.concat(r)},[])},rs=(e,...t)=>typeof e==`function`?e(...t):e,is=(e,t)=>e===t})))()}var os;function ss(){return(ss=e((()=>{F(),as(),os=()=>{let[e,t]=u(()=>[new WeakMap]);return{setItemState:I((e,n)=>t(([t])=>{let r=Zo(e,t);return Object.assign(r,rs(n,r)),[t]}),[]),state:e[0],signal:e}}})))()}var cs;function ls(){return(ls=e((()=>{F(),ss(),as(),cs=()=>{let{setItemState:e,state:t,signal:n}=os();return{state:t,signal:n,toggleFold:I((t,n)=>{es(t)&&e(t,e=>({folded:n===void 0?!e.folded:n}))},[]),toggleCollapse:I((t,n)=>{es(t)||e(t,e=>({expanded:n===void 0?!e.expanded:!n}))},[])}}})))()}var us;function ds(){return(ds=e((()=>{F(),$(),as(),us=({compareItemsFn:e,data:t,flatData:n})=>{let[r,i]=y(`selectedItems`,()=>[]),[a,o]=u(),s=I(e=>r===Q||r.includes(e),[r]),c=I(e=>r===Q||(e?.items?.every(s)??!1),[r,s]),l=I(e=>s(e)||c(e),[s,c]),f=I(e=>{let t=e.items??[e];i(e=>e===Q?e:[...e,...t.filter(t=>!e.includes(t))]),o(e)},[]),p=I(e=>{let t=e.items??[e];i(e=>e===Q?(n??[]).filter(e=>!es(e)).filter(e=>!t.includes(e)):e.filter(e=>!t.includes(e))),o(e)},[n]),m=I(e=>{i(e.items?.slice()||[e]),o(e)},[]),h=I(()=>{i(t.flatMap(e=>e.items||e)),o(void 0)},[t]),g=I(()=>{i([]),o(void 0)},[]),_=I((e,t=!l(e))=>t?f(e):p(e),[l]),v=I((t,r)=>{if(!n)return;let i=a?n.findIndex(t=>e(t,a)):-1;if(i<0)return _(t,r);let[s,c]=[i,n.indexOf(t)].sort((e,t)=>e-t);n.slice(s,c+1).forEach((e,t,n)=>{t>0&&t<n.length-1&&es(e)||_(e,r)}),o(t)},[n,e,_]);return d(()=>i(t=>t!==Q&&t.length>0&&n?n.filter(n=>t.find(t=>e(n,t))):t),[n]),{selectedItems:r,isItemSelected:s,isGroupSelected:c,isSelected:l,select:f,deselect:p,selectOnly:m,selectAll:h,deselectAll:g,toggleSelect:_,toggleSelectTo:v}}})))()}var fs,ps,ms;function hs(){return(hs=e((()=>{c(),F(),Ho(),Yo(),ls(),ds(),as(),fs={host:{position:`relative`,display:`flex`,flexDirection:`column`}},ps=e=>{let{data:t,renderItem:n,renderGroup:r,displayEmptyGroups:i,compareItemsFn:a=is}=e,{toggleFold:o,toggleCollapse:c,state:l,signal:u}=cs(),d=E(()=>ns(t,i,l),[t,i,u]),{selectedItems:f,isItemSelected:p,isGroupSelected:m,isSelected:h,select:g,deselect:v,selectOnly:y,selectAll:b,deselectAll:x,toggleSelect:S,toggleSelectTo:C}=us({compareItemsFn:a,data:t,flatData:d}),w=I((e,t)=>Array.isArray(e.items)?r(e,t,{selected:m(e),folded:$o(e,l),toggleSelect:t=>S(e,typeof t==`boolean`?t:void 0),toggleFold:()=>o(e)}):n(e,t,{selected:p(e),expanded:Qo(e,l),toggleSelect:t=>S(e,typeof t==`boolean`?t:void 0),toggleCollapse:()=>c(e)}),[n,r,f,S,u]);_(()=>{Object.assign(e.style,fs.host)},[]);let T={toggleFold:o,toggleCollapse:c,isItemSelected:p,isGroupSelected:m,isSelected:h,select:g,deselect:v,selectOnly:y,selectAll:b,deselectAll:x,toggleSelect:S,toggleSelectTo:C};return s(T,Object.values(T)),{renderRow:w,flatData:d}},ms=({renderRow:e,flatData:t})=>Jo({items:t,renderRow:(t,n)=>e(t,n)})})))()}var gs;function _s(){return(_s=e((()=>{F(),hs(),gs=e=>ms(ps(e)),customElements.define(`cosmoz-grouped-list`,A(gs,{useShadowDOM:!1}))})))()}function vs(){return(vs=e((()=>{_s()})))()}var ys,bs,xs;function Ss(){return(Ss=e((()=>{Ge(),jt(),oi(),ci(),ji(),Ii(),zi(),F(),Ue(),M(),Ne(),Hi(),Qi(),ea(),oa(),Bo(),$(),vs(),_o(),xo(),ys=e=>window.ShadyCSS?.ApplyShim?.transformCssText?.(e)||e,bs=e=>{let{header:t,list:r,footer:i}=zo(e),a=r.loading&&r.processedItems.length>0,o=i.selectedItems===Q||i.selectedItems.length>0;return n`
		<style>
			${Ae([],()=>ys(Vi))}
		</style>

		<div class="mainContainer${o?` bottombar-active`:``}">
			${$i(t)}
			<div
				class="tableContent${a?` has-spinner`:``}"
				id="tableContent"
			>
				${aa(t,r)}
			</div>
			${Zi(i)}
		</div>

		<div id="columns">
			<slot id="columnsSlot"></slot>
		</div>
	`},customElements.define(`cosmoz-omnitable`,A(bs,{observedAttributes:[`hash-param`,`sort-on`,`group-on`,`descending`,`group-on-descending`,`hide-select-all`,`settings-id`,`no-local`,`no-local-sort`,`no-local-filter`,`disabled-filtering`,`loading`,`mini-breakpoint`,`compact`,`inline`,`enable-select-all`]})),xs=`
	<slot name="actions" slot="actions"></slot>
`,n(Object.assign([xs],{raw:[xs]})),Ve(Object.assign([xs],{raw:[xs]}))})))()}export{Ss as t};